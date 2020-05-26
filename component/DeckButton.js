import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextButton from './TextButton'

const DeckButton = ({title, cards, onShow, onDelete}) => {
    return (
        <View>
            <TextButton onPress={onShow}>
                <Text style={styles.reset}>{title}</Text>
                <Text style={styles.reset}>{cards} cards</Text>
            </TextButton>
            <TextButton onPress={onDelete}>
                <Text>X</Text>
            </TextButton>
        </View>
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
