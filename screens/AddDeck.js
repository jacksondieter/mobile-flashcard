import React, {useState} from 'react'
import { StyleSheet, Text, View , TextInput} from 'react-native'
import TextButton from '../component/TextButton'
import TextInputStyled from '../component/TextInputStyled'

const AddDeck = () => {
    const [deck, setDeck] = useState('')
    const submitDeck = (params) => {
        return
    }
    return (
        <View>
            <Text style={styles.reset}>Deck name</Text>
            <TextInputStyled
            onChangeText={text=>setDeck(text)}
            value={deck}
            />
            <TextButton onPress={submitDeck}>Submit</TextButton>
        </View>
    )
}

export default AddDeck

const styles = StyleSheet.create({
    reset: {
        textAlign: 'center'
    }
})
