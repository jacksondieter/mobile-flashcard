import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextButton from './TextButton'

const DeckButton = ({name, cards, onPress}) => {
    return (
        <TextButton onPress={onPress}>
                <Text style={styles.reset}>{name}</Text>
                <Text style={styles.reset}>{cards} cards</Text>
        </TextButton>
    )
}

export default DeckButton

const styles = StyleSheet.create({
    reset:{
        margin:20
    },
    container:{
        flexDirection:"column"
    }
})
