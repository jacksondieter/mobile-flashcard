import { useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native';
import {useSelector} from 'react-redux'

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
    const setResponse = (res) => {
        res && setCorrectCount(correctCount => ++correctCount);
        setIndexQuestion(indexQuestion => ++indexQuestion);
        (indexQuestion >= quiz.length-1) && setShowResult(true)
    }

    const respondCorrect = () => setResponse(true)
    const respondIncorrect = () => setResponse(false)

    const quitQuiz = () => {
        navigation.navigate('Deck',{id})
    }
    return {
        showResult,
        correctCount,
        getIncorrectCount,
        getText,
        getButton,
        toggleStatus,
        respondCorrect,
        respondIncorrect,
        quitQuiz
    }
}
