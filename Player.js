class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    try {
      var listStrict = ["9","10","J", "Q", "K", "A"];
      var listAK = ["J","Q" ,"A", "K"];
      var listLazy = ["10","J", "Q", "K", "A"];
      var card1Rank, card2Rank;
      var card1Suit, card2Suit;
      var ActivePlayerCounter = 0;
      for (var index in gameState.players) {
        if (gameState.players[index].name === "ScriptEm") {
          card1Rank = gameState.players[index].hole_cards[0].rank;
          card2Rank = gameState.players[index].hole_cards[1].rank;
          card1Suit = gameState.players[index].hole_cards[0].suit;
          card2Suit = gameState.players[index].hole_cards[1].suit;
        }
      }
      for (var index in gameState.players) {
        if (gameState.players[index].status === "active") {
          ActivePlayerCounter = ActivePlayerCounter + 1;
        }
      }

      // betelési logika
      if (ActivePlayerCounter >= 3) {
          if (listStrict.includes(card1Rank) || listStrict.includes(card2Rank)) {
              if (card2Rank === card1Rank) {
                  bet(5000);
              }
              if (listAK.includes(card1Rank) && listAK.includes(card2Rank)) {
                if (card2Rank === "A" || card1Rank === "A") {
                  bet(5000);
                }
              }
          }
          bet(0);
      }


        // FINAL FIGHT

        if(ActivePlayerCounter === 2) {
            for (var index in gameState.players) {
                if (gameState.players[index].name === "ScriptEm") {
                    if(gameState.players[index].stack > 450) {
                        if (listStrict.includes(card1Rank) || listStrict.includes(card2Rank)) {
                            if (card2Rank === card1Rank) {
                                bet(5000);
                            }
                            if (listAK.includes(card1Rank) && listAK.includes(card2Rank)) {
                                bet(1000);
                            }
                            if (card1Rank === card2Rank) {
                                bet(5000);
                            }
                        }
                        bet(0);
                    }
                    if(gameState.players[index].stack <= 450) {
                        if (listStrict.includes(card1Rank) && listStrict.includes(card2Rank)) {
                            bet(5000);
                        }
                        if (listAK.includes(card1Rank) || listAK.includes(card2Rank)) {
                            if(card1Suit === card2Suit) {
                                bet(5000);
                            }
                        }
                        if (card1Rank === card2Rank) {
                            bet(5000);
                        }
                        bet(0);
                    }
                }
            }
        }


        if (listStrict.includes(card1Rank) || listStrict.includes(card2Rank)) {
        if (card2Rank === card1Rank) {
          bet(5000);
        }
        if (listAK.includes(card1Rank) && listAK.includes(card2Rank)) {
            if (card2Rank === "A" || card1Rank === "A") {
              bet(5000);
            }
        }
      }

      for (var index in gameState.players) {
        if (gameState.players[index].bet > 500) {
            bet(0);
          }
        }
        var flop = [];
        var suits = [];


        for (var index = 0; index < gameState.community_cards.length; index++){
           flop.add(gameState.community_cards[index].rank);
           suits.add(gameState.community_cards[index].suit);
         }
        if(flop.length === 0) {
          if (listLazy.includes(card1Rank) && listLazy.includes(card2Rank)) {
            if (card1Suit === card2Suit) {
              bet(400);
            }
            bet(200);
          }
          if (card1Rank === card2Rank) {
            bet(400);
          }
          if (card1Suit === card2Suit) {
            if (listAK.includes(card1Rank) || listAK.includes(card2Rank)) {
              bet(200);
            }
          }
        }
        if (flop.includes(card1Rank) || flop.includes(card2Rank)) {
          if (flop.includes(card1Rank) && flop.includes(card2Rank)) {
            bet(5000);
          }
          bet(700);
        }
        var howManySameSuit = 1;
        for (var index in suits) {
          if (suits[index] === card1Suit || suits[index] === card2Suit) {
            howManySameSuit = howManySameSuit +1;
          }
        }
        if (card1Suit === card2Suit) {
          howManySameSuit = howManySameSuit +1;
        }
        if (howManySameSuit >=4) {
          bet(600);
        }
        bet(0);
    }
    catch (err) {
      bet(0);
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
