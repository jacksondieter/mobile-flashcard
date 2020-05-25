import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native';
import TextButton from '../component/TextButton';

const Deck = () => {
    const route = useRoute();
   const navigation = useNavigation();
    const { id } = route.params;
    const handleAddCard = () => {
        navigation.navigate('AddCard')
    }

    const handleStartQuiz = () => {
        navigation.navigate('QuizCard')
    }
    return (
        <View>
            <Text>{id}</Text>
            <Text>3 cards</Text>
            <TextButton onPress={handleAddCard}>Add Card</TextButton>
            <TextButton onPress={handleStartQuiz}>Start Quiz</TextButton>
        </View>
    )
}

export default Deck

const styles = StyleSheet.create({})
