import { useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native';
import {useSelector} from 'react-redux'
import { setNextNotification } from '../utils/notification'

export default function useQuiz() {
    const navigation = useNavigation();
    const {id} = useRoute().params
    const quiz = useSelector(state => state[id].questions)

    const [showQuestion, setShowQuestion] = useState(true)
    const [showResult, setShowResult] = useState(false)
    const [indexQuestion, setIndexQuestion] = useState(0)
    const [correctCount, setCorrectCount] = useState(0)

    const toggleStatus = () => {
        setShowQuestion(!showQuestion)
    }
    const getText = () => showQuestion
                                    ?quiz[indexQuestion].question
                                    :quiz[indexQuestion].answer
    const getButton = () => showQuestion
                                    ?'Show answer'
                                    :'Show question'
    const getIncorrectCount = () => indexQuestion-correctCount
    const getProgress = () => `${indexQuestion+1}/${quiz.length}`
    const setResponse = (res) => {
        res && setCorrectCount(correctCount => ++correctCount);
        setIndexQuestion(indexQuestion => ++indexQuestion);
        setShowQuestion(true);
        (indexQuestion >= quiz.length-1) && setShowResult(true) && setNextNotification()
    }

    const respondCorrect = () => setResponse(true)
    const respondIncorrect = () => setResponse(false)

    const restartQuiz = () => {
        setIndexQuestion(0)
        setCorrectCount(0)
        setShowResult(false)
    }

    const quitQuiz = () => {
        navigation.navigate('Deck',{id})
    }

    return {
        showResult,
        correctCount,
        getIncorrectCount,
        getText,
        getButton,
        getProgress,
        toggleStatus,
        respondCorrect,
        respondIncorrect,
        restartQuiz,
        quitQuiz
    }
}
