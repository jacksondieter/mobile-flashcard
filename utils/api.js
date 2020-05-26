import {decks} from './_DATA'
import { AsyncStorage } from 'react-native'

const FLASHCARD_STORAGE_KEY = "Flashcard:storage"

export async function fetchDecks() {
    try {
        const result = await AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
        !result && await AsyncStorage.setItem(FLASHCARD_STORAGE_KEY,JSON.stringify(decks))
        return result?JSON.parse(result):decks
    } catch (error) {
        console.log(error);
    }
}

export async function saveDeck(title) {
    const deck = {
        [title]:{
            title,
            questions:[]
        }
    }
    try {
        await AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify(deck))
    } catch (error) {
        console.log(error);
    }
}

export async function saveCard(deckId, card) {
    const decks = await fetchDecks()
    const cardDeck =  {
        [deckId]:{
            questions:[...decks[deckId].questions,...[card]]
        }
    }
    try {
        await AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY,JSON.stringify(cardDeck))
    } catch (error) {
        console.log(error);
    }
}

export async function deleteDeck(id) {
    const decks = await fetchDecks()
    const {[id]:value, ...restData} = decks
    try {
        await AsyncStorage.setItem(FLASHCARD_STORAGE_KEY,JSON.stringify(restData))
    } catch (error) {
        console.log(error);
    }
}