//things we need for a war game
/**  1.Create and shuffle a deck.
     2. Deal 26 cards to each player.
     3.	Loop 26 times:
        o	Each player plays one card.
        o	Compare the card values.
        o	Award 1 point to the player with the higher card.
        o	Log the round: each card played, who won the round, and current score.
     4.	After all rounds, display the final score.
     5.	Declare the winner or if it's a tie. */

//deck class
/** should have:
 * an arrray to store cards
 * an array to store ranks
 * an array to store suits
 */

class Deck {
    constructor() {
        this.deck = [];
        this.ranks = [
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6" ,
            "7" ,
            "8" ,
            "9" ,
            "10" ,
            "Jack" ,
            "Queen",
            "King",
        ];

        this.suits = [
            "Hearts ♥ ","Spades ♠ ","Diamonds ♦ ","Clubs ♣ "];
    }
    // a method to create deck ..iterate over our ranks/suits
    //push new car into this.deck contructor

    createDeck() {
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.ranks.length; j++) {
        let card = {
          name: `${this.ranks[j]} of ${this.suits[i]}`,
          value: j + 1
        };
        this.deck.push(card);
        console.log(card);
      }
    }
  }
  //how to shuffle cards (fisher-Yates shuffle googled and asked ai)

  shuffle() {
    
    for (let i = this.deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }
  
}
//class for the game
// need a deck, shuffle deck 
// need 2players
// hand, score , name*/

class Game {
  constructor() {
    this.player1 = {
    name: "Player 1",
    score: 0,
    hand: []
    };
     this.player2 = {
    name: "Player 2",
    score: 0,
    hand: []
    };
  }
// how to play game
// take turns
// as long as the player has cards
// award point based on the card value
// log the winner*/

playGame (){
    const deck = new Deck();

deck.createDeck()
deck.shuffle()

while (deck.deck.length !== 0){
    this.player1.hand.push(deck.deck.shift())
    this.player2.hand.push(deck.deck.shift())

}

for (let i = 0; i < this.player1.hand.length; i++) {

    //award points based on comparing card values

    if (this.player1.hand[i].value > this.player2.hand [i].value){
        this.player1.score ++
        console.log(`
            p1 Card: ${this.player1.hand[i].name}
            p2 Card: ${this.player2.hand[i].name}
             
            Player 1 wins a point!
            Current score: p1 ${this.player1.score}, p2; ${this.player2.score}

            `)
    } else if (this.player2.hand[i].value > this.player1.hand[i].value){

        this.player2.score ++
        console.log(`
            p1 Card: ${this.player1.hand[i].name}
            p2 Card: ${this.player2.hand[i].name}
             
            Player 2 wins a point!
            Current score: p1 ${this.player1.score}, p2; ${this.player2.score}
            `)

    } else {
        console.log (`
            p1 Card: ${this.player1.hand[i].name}
            p2 Card: ${this.player2.hand[i].name}
             
            TIE no points awarded!
            Current score: p1 ${this.player1.score}, p2; ${this.player2.score}
            
            `)
    }

}
 
if(this.player1.score >this.player2.score){
    console.log("Player 1 WINS!")

} else if(this.player2.score >this.player1.score){
    console.log("Player 2 WINS!")
} else {
    console.log("Tie ☹")
}

}

}

const game = new Game
game.playGame()
