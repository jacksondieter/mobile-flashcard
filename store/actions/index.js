import {
        fetchDecks,
        saveDeck,
        saveCard,
        deleteDeck
        } from '../../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const ADD_CARD = 'ADD_CARD'

export function receiveDecks(decks) {
    return {
        type:RECEIVE_DECKS,
        decks
    }
}

export function addDeck(title) {
    return{
        type:ADD_DECK,
        title
    }
}

export function removeDeck(id) {
    return{
        type:REMOVE_DECK,
        id
    }
}

export function addCard(deckId,card) {
    return{
        type:ADD_CARD,
        deckId,
        card
    }
}

export function handleGetDecks() {
    return dispatch => {
        return fetchDecks()
                .then(decks => {
                    dispatch(receiveDecks(decks))
                })
    }
}

export function handleAddDeck(title) {
    return dispatch => {
        return saveDeck(title)
                .then(() => {
                    dispatch(addDeck(title))
                })
    }
}

export function handleAddCard(deckId,card) {
    return dispatch => {
        return saveCard(deckId,card)
                .then(() => {
                    dispatch(addCard(deckId,card))
                })
    }
}

export function handleRemoveDeck(id) {
    return dispatch => {
        return deleteDeck(id)
                .then(() => {
                    dispatch(removeDeck(id))
                })
    }
}