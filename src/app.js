'use strict';

const _ = require('lodash');
const prompt = require('prompt');
const CardPile = require('./cardpile');
const Game = require('./game');

console.log("Starting Snap game. For decks, enter 1 or more." +
            " For matchingCondition enter 1,2 or 3 for value, suit or both respectively");


//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user
//
prompt.get(['decks', 'matchingCondition'], function (err, result) {
    //
    // Log the results.
    //
    console.log(`Input received: decks ${result.decks}, matching condition: ${result.matchingCondition}`);

    // create the pile of cards
    let cardpile =  new CardPile(parseInt(result.decks));

    // shuffle the cards
    let shuffledCards = cardpile.shuffle();

    // initialise a new game
    const game = new Game(shuffledCards, result.matchingCondition);

    // start the game
    game.startGame()

    // print the results
    game.printScores()

});