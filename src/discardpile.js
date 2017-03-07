'use strict'

const _ = require('lodash');

/**
 * The DiscardPile holds the cards which have been discarded by players
 * and have not yet been won by a player
 */
class DiscardPile {
    constructor() {

        // create the empty pile
        this.cards = []
    }

    // get the 2nd to last card for snap comparisons
    getPrevCard() {
        let prevIndex = this.cards.length - 2

        // check there are sufficient cards in the pile
        if (this.cards.length < 2) {
            return null
        }
        return this.cards[prevIndex]
    }

    // get the top card for snap comparisons
    getTopCard() {
        return _.last(this.cards)
    }

    getCardsNum() {
        return this.cards.length
    }

    resetCards() {
        this.cards = []
    }

    add(card) {
        this.cards.push(card)
    }

}


module.exports = DiscardPile

