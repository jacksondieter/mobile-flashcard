import React,{useEffect, useCallback} from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import {useSelector,useDispatch} from 'react-redux'
import DeckButton from '../component/DeckButton'
import { useNavigation } from '@react-navigation/native';
import {handleGetDecks, handleRemoveDeck} from '../store/actions'

const DeckList = () => {
    const navigation = useNavigation();
    const decks = useSelector(state => Object.values(state).map(deck => ({title:deck.title,cards:deck.questions.length,key:deck.title,})))

    const dispatch = useDispatch()
    const stableDispatch = useCallback(dispatch,[])

    useEffect(() => {
        stableDispatch(handleGetDecks());
    }, [stableDispatch])

    return (
        <View>
            {decks &&
            <FlatList
            data={[...decks]}
            renderItem={( {item} ) =>
                (<DeckButton
                    title={item.title}
                    key={item.key}
                    cards={item.cards}
                    onShow={() => navigation.navigate('Deck',{id:item.key})}
                    onDelete={() => dispatch(handleRemoveDeck(item.key))}
                />)}
            />
            }
        </View>
    )
}

export default DeckList

const styles = StyleSheet.create({})
