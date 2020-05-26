import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native';
import {useSelector} from 'react-redux'
import TextButton from '../component/TextButton';

const Deck = () => {
    const { id } = useRoute().params;
    const navigation = useNavigation();
    const cardsLength = useSelector(state => state[id].questions.length)
    const handleAddCard = () => {
        navigation.navigate('AddCard',{deckId:id})
    }

    const handleStartQuiz = () => {
        navigation.navigate('QuizCard',{id})
    }
    return (
        <View>
            <Text>{id}</Text>
            <Text>{cardsLength} cards</Text>
            <TextButton onPress={handleAddCard}>Add Card</TextButton>
            <TextButton onPress={handleStartQuiz}>Start Quiz</TextButton>
        </View>
    )
}

export default Deck

const styles = StyleSheet.create({})
