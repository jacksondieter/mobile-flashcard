import {decks} from './_DATA'


export function getDecks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(decks);
        }, 300);
        });
    }
