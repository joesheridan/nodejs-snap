'use strict'

/**
 * A Card represents a single card in the deck.
 * A card has a suit and a face value (Ace to King)
 */
class Card {
    constructor(value, suit) {

        this.value = value;
        this.suit = suit;
    }

    getValue() {
        return this.value
    }

    getSuit() {
        return this.suit
    }

}


module.exports = Card