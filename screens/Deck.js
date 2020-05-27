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
        cardsLength && navigation.navigate('QuizCard',{id})
    }
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.bigText}>{id}</Text>
                <Text style={styles.mediumText}>{cardsLength} cards</Text>
            </View>
            <View style={styles.box}>
                <TextButton onPress={handleAddCard} style={styles.buttonStyle}>Add Card</TextButton>
                {cardsLength? (<TextButton onPress={handleStartQuiz} style={styles.buttonStyle}>Start Quiz</TextButton>):null}
            </View>
        </View>
    )
}

export default Deck

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    box:{
        padding:20
    },
    buttonStyle:{
        backgroundColor:'lightskyblue'
    },
    bigText: {
        fontWeight: 'bold',
        fontSize: 30,
        margin:10,
        textAlign:'center'
    },
    mediumText: {
        fontSize: 20,
        margin:10,
        textAlign:'center'
    }
})
