'use strict'

/**
 * A Player represents a player in the game of snap
 * His/her score tally is stored here and accessed via the getScore method
 */
class Player {
    constructor(name) {
        this.name = name
        this.score = 0
    }

    winCards(num) {
        this.score += num
    }

    getName() {
        return this.name
    }

    getScore() {
        return this.score
    }
}


module.exports = Player