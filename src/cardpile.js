'use strict'

const _ = require('lodash');

var Deck = require('./deck');

/**
 * The CardPile represents the pile of cards which have not yet been played.
 * Each player takes it in turns to withdraw a card from this pile.
 */
class CardPile {
    constructor(decks) {

        var decksArr = new Array(decks);

        // create the decks
        this.cards = []


        _.each(decksArr, (deck) => {
            var newdeck = new Deck().getCards();
            this.cards = _.concat(this.cards, newdeck)
        })

        console.log('creating cardpile:', this.cards.length)
    }

    print() {
        console.log(this.cards)
    }

    shuffle() {
        return _.shuffle(this.cards)
    }

}


module.exports = CardPile
