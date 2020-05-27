import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native';
import {useDispatch} from 'react-redux'
import {handleAddCard} from '../store/actions'
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
            dispatch(handleAddCard(deckId,card))
            navigation.navigate('Deck',{deckId})
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text >Question</Text>
                <TextInputStyled
                onChangeText={text=>setQuestion(text)}
                value={question}
                />
            </View>
            <View style={styles.box}>
                <Text>Answer</Text>
                <TextInputStyled
                onChangeText={text=>setAnswer(text)}
                value={answer}
                />
            </View>
            <TextButton onPress={submitCard} style={styles.buttonStyle}>Submit</TextButton>
        </View>
    )
}

export default AddCard

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    buttonStyle:{
        backgroundColor:'lightskyblue'
    }
})
