import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {useDispatch} from 'react-redux'
import {handleAddDeck} from '../store/actions'
import TextButton from '../component/TextButton'
import TextInputStyled from '../component/TextInputStyled'

const AddDeck = () => {
    const navigation = useNavigation();
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const submitDeck = () => {
        if(title.length > 0) {
            dispatch(handleAddDeck(title))
            setTitle('')
            navigation.navigate('Decks')
        }
    }
    return (
        <View>
            <Text style={styles.reset}>Deck name</Text>
            <TextInputStyled
            onChangeText={text=>setTitle(text)}
            value={title}
            />
            <TextButton onPress={submitDeck}>Create Deck</TextButton>
        </View>
    )
}

export default AddDeck

const styles = StyleSheet.create({
    reset: {
        textAlign: 'center'
    }
})
