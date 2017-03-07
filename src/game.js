
'use strict'

const Player = require('./player')
const DiscardPile = require('./discardpile')

/**
 * The Game class simulates a game of snap. Players take turns, players win cards on the discard pile
 * and when there are no more cards, the scores are counted up and a winner is declared
 */
class Game {
    constructor(cards, matchingCondition) {
        this.cards = cards
        this.matchingCondition = matchingCondition

        // count of the cards not yet been won
        this.cardsCount = 0

        this.discardPile = new DiscardPile()

        // create players
        this.player1 = new Player('p1')
        this.player2 = new Player('p2')

        this.turn = 1
    }

    startGame() {
        while(this.cards.length) {
            this.takeTurn()
        }
    }

    printScores() {
        var p1score = this.player1.getScore()
        var p2score = this.player2.getScore()
        console.log('player1 winnings:',this.player1.getScore())
        console.log('player2 winnings:',this.player2.getScore())
        if (p1score == p2score) {
            console.log('it was a draw!!')
        }
        if (p1score > p2score) {
            console.log('player1 won!!!')
        }
        if (p1score < p2score) {
            console.log('player2 won!!!')
        }
    }

    takeTurn() {
        var player = this.getActivePlayer();

        // add card to discard pile
        let prevCard = this.discardPile.getTopCard()
        let topCard = this.cards.shift()
        this.discardPile.add(topCard)

        if (this.checkForMatch(prevCard, topCard)) {
            console.log('SNAP!!! player won:', player, prevCard, topCard, this.discardPile.getCardsNum())
            player.winCards(this.discardPile.getCardsNum())
            this.discardPile.resetCards()
        }

        this.toggleTurn()
    }

    /**
     * Check for matching cards on the discard pile.
     * Using matchingCondition as follows:
     * 1 being value match, 2 being suit match, 3 being both
     */
    checkForMatch(prevCard, topCard) {

        if (!prevCard || !topCard) {
            return false
        }
        switch (parseInt(this.matchingCondition)) {
            case 1:
                if (prevCard.getValue() === topCard.getValue()) {
                    return true;
                }
                break;
            case 2:
                if (prevCard.getSuit() === topCard.getSuit()) {
                    return true;
                }
                break;
            case 3:
                if (prevCard.getSuit() === topCard.getSuit() && prevCard.getValue() === topCard.getValue()) {
                    return true;
                }
                break;
            default:
                return false;

        }
        return false;
    }

    toggleTurn() {
        if (this.turn === 1) {
            this.turn = 2
            return;
        } else {
            this.turn = 1
            return;
        }

    }

    getActivePlayer() {
        if (this.turn === 1) {
            return this.player1
        } else {
            return this.player2
        }
    }

}


module.exports = Game