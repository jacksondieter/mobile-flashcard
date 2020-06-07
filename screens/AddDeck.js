import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
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
            navigation.push('Deck',{id:title})
        }
    }
    return (
        <View style={styles.container}>
            <TextInputStyled
            onChangeText={text=>setTitle(text)}
            value={title}
            />
            <TextButton onPress={submitDeck} style={styles.buttonStyle}>Create Deck</TextButton>
        </View>
    )
}

export default AddDeck

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
