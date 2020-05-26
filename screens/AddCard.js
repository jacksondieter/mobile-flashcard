import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native';
import {useDispatch} from 'react-redux'
import {addCard} from '../store/actions'
import TextButton from '../component/TextButton'
import TextInputStyled from '../component/TextInputStyled'

const AddCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const {deckId} = useRoute().params
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const submitCard =  () => {
        if(question.length > 0 && answer.length > 0) {
            const card = {question,answer}
            dispatch(addCard(deckId,card))
            navigation.navigate('Deck',{deckId})
        }
    }
    return (
        <View>
            <Text>{`Deck: ${deckId}`}</Text>
            <Text style={styles.reset}>Question</Text>
            <TextInputStyled
            onChangeText={text=>setQuestion(text)}
            value={question}
            />
            <Text style={styles.reset}>Answer</Text>
            <TextInputStyled
            onChangeText={text=>setAnswer(text)}
            value={answer}
            />
            <TextButton onPress={submitCard}>Submit</TextButton>
        </View>
    )
}

export default AddCard

const styles = StyleSheet.create({
    reset: {
        textAlign: 'center'
    }
})
