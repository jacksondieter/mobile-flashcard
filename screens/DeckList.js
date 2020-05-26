import React,{useEffect, useCallback} from 'react'
import { StyleSheet, View } from 'react-native'
import {useSelector,useDispatch} from 'react-redux'
import DeckButton from '../component/DeckButton'
import { useNavigation } from '@react-navigation/native';
import {handleGetDecks, handleRemoveDeck} from '../store/actions'

const DeckList = () => {
    const navigation = useNavigation();
    const decks = useSelector(state => Object.values(state).map(deck => ({title:deck.title,cards:deck.questions.length})))

    const dispatch = useDispatch()
    const stableDispatch = useCallback(dispatch,[])

    useEffect(() => {
        stableDispatch(handleGetDecks());
    }, [stableDispatch])

    return (
        <View>
            {decks && decks.map( ( deck ) => 
            (<DeckButton 
                title={deck.title}
                key={deck.title}
                cards={deck.cards}
                onShow={() => navigation.navigate('Deck',{id:deck.title})}
                onDelete={() => dispatch(handleRemoveDeck(deck.title))}
            />))}
        </View>
    )
}

export default DeckList

const styles = StyleSheet.create({})
