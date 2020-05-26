import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useQuiz from './useQuiz'
import TextButton from '../component/TextButton';

const QuizCard = () => {
    const {
        showResult,
        correctCount,
        getIncorrectCount,
        getText,
        getButton,
        toggleStatus,
        respondCorrect,
        respondIncorrect,
        quitQuiz
    }= useQuiz()

    return (
        <View>
            {showResult
            ?(  <View>
                    <Text>{`Correct: ${correctCount}`}</Text>
                    <Text>{`Incorrect: ${getIncorrectCount()}`}</Text>
                    <TextButton onPress={quitQuiz}>Close</TextButton>
                </View>
            )
            :(
                <View>
                    <Text>{getText()}</Text>
                    <TextButton onPress={toggleStatus}>{getButton()}</TextButton>
                    <TextButton onPress={respondCorrect}>Correct</TextButton>
                    <TextButton onPress={respondIncorrect}>Incorrect</TextButton>
                </View>
            )
            }
        </View>
    )
}

export default QuizCard

const styles = StyleSheet.create({})
