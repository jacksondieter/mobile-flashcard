import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DeckButton from '../component/DeckButton'
import { useNavigation } from '@react-navigation/native';

const DeckList = () => {
    const navigation = useNavigation();
    return (
        <View>
            <DeckButton name={'Deck 1'} cards={3} key={'deck1'} onPress={() => navigation.navigate('Deck',{id:'deck1'})}/>
        </View>
    )
}

export default DeckList

const styles = StyleSheet.create({})
