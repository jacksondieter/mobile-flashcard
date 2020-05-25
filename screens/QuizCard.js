import React, {useState} from 'react'
import { StyleSheet, Text, View, addons } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native';
import TextButton from '../component/TextButton';

const QuizCard = () => {
    const [quizStatus, setQuizStatus] = useState(true)
    const navigation = useNavigation();
    const toggleStatus = () => {
        setQuizStatus(!quizStatus)
    }
    const setResponse = (res) => {
        return
    }
    return (
        <View>
            {quizStatus
            ?(<View>
                <Text>Question</Text>
                <TextButton onPress={toggleStatus}>Show answer</TextButton>
            </View>)
            :(<View>
                <Text>Answer</Text>
                <TextButton onPress={toggleStatus}>Show question</TextButton>
            </View>)
            }
            <TextButton onPress={() => navigation.goBack()}>Correct</TextButton>
            <TextButton onPress={setResponse(false)}>Incorrect</TextButton>
        </View>
    )
}

export default QuizCard

const styles = StyleSheet.create({})
