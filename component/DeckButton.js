import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import TextButton from './TextButton'

const DeckButton = ({title, cards, onShow, onDelete}) => {
    return (
        <View style={styles.container}>
                <TouchableOpacity onPress={onShow} style={styles.box}>
                    <View>
                        <Text style={styles.mediumText}>{title}</Text>
                    </View>
                    <View>
                        <Text>{cards} cards</Text>
                    </View>
                </TouchableOpacity>
            <TextButton onPress={onDelete}>
                <Text>X</Text>
            </TextButton>
        </View>
    )
}

export default DeckButton

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-around',
        borderColor:'#fff',
        borderStyle:"solid",
        borderWidth:1,
        padding:10,
    },
    box:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    mediumText: {
        fontSize: 20,
        margin:10,
        textAlign:'center'
    }
})
