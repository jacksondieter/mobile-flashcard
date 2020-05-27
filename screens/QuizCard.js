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
        restartQuiz,
        quitQuiz
    }= useQuiz()

    return (
        <View>
            {showResult
            ?(  <View style={styles.container}>
                    <View style={styles.box}>
                        <Text style={[styles.green,styles.bigText]}>{`Correct: ${correctCount}`}</Text>
                        <Text style={[styles.red,styles.bigText]}>{`Incorrect: ${getIncorrectCount()}`}</Text>
                    </View>
                    <View style={styles.box}>
                    <TextButton onPress={restartQuiz} style={styles.buttonStyle}>Restart Quiz</TextButton>
                    <TextButton onPress={quitQuiz} style={styles.buttonStyle}>Back to Deck</TextButton>
                    </View>
                </View>
            )
            :(
                <View style={styles.container}>
                    <View style={styles.box}>
                        <Text style={styles.bigText}>{getText()}</Text>
                    </View>
                    <View style={styles.box}>
                        <TextButton onPress={toggleStatus} styleChild={styles.red}>{getButton()}</TextButton>
                        <TextButton onPress={respondCorrect} style={styles.greenStyle}>Correct</TextButton>
                        <TextButton onPress={respondIncorrect} style={styles.redStyle}>Incorrect</TextButton>
                    </View>
                </View>
            )
            }
        </View>
    )
}

export default QuizCard

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    box:{
        padding:20
    },
    buttonStyle:{
        backgroundColor:'lightskyblue'
    }
    ,
    redStyle:{
        backgroundColor:'tomato'
    }
    ,
    greenStyle:{
        backgroundColor:'palegreen'
    },
    bigText: {
        fontWeight: 'bold',
        fontSize: 30,
        margin:10
    },
    red: {
        color: 'red',
    },
    green: {
        color: 'green',
    }
})
