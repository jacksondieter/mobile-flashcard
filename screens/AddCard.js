import React, {useState} from 'react'
import { StyleSheet, Text, View , TextInput} from 'react-native'
import TextButton from '../component/TextButton'
import TextInputStyled from '../component/TextInputStyled'

const AddCard = () => {
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const submitCard =  () => {
        return
    }
    return (
        <View>
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
