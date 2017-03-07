'use strict'

const _ = require('lodash')
const Card = require('./card')

const suits = ['hearts', 'spades', 'diamonds', 'clubs']
const cardValues = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

/**
 * The Deck represents a single deck of cards using the 4 suits and 13 card values.
 * 52 cards total.
 */
class Deck {
    constructor() {
        this.cards = []
        // create the cards
        _.each(suits, (suit) => {
            _.each(cardValues, (value) => {
                this.cards.push(new Card(value, suit))
            })

        })
    }

    print() {
        console.log(this.cards)
    }

    getCards() {
        return this.cards
    }

}


module.exports = Deck
