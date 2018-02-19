class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    try {
      var listStrict = ["9","10","J", "D", "K", "A"];
      var listAK = ["J","Q" ,"A", "K"];
      var listLazy = ["10","J", "D", "K", "A"];
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
                  bet(5000);
              }
          }
          bet(0);
      }

      if (listStrict.includes(card1Rank) || listStrict.includes(card2Rank)) {
        if (card2Rank === card1Rank) {
          bet(5000);
        }
        if (listAK.includes(card1Rank) && listAK.includes(card2Rank)) {
          bet(5000);
        }
      }

      for (var index in gameState.players) {
        if (gameState.players[index].bet > 500) {
            bet(0);
          }
        }
        var flop = [];

        for (var index = 0; index < gameState.community_cards.length; index++){
           flop.add(gameState.community_cards[index].rank);
         }
        if(flop.length == 0) {
          if (listLazy.includes(card1Rank) && listLazy.includes(card2Rank)) {
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



        bet(0);

      /*if(gameState.community_cards.length == 3) {

        var flop1rank = gameState.community_cards[0].rank;
        console.log(flop1rank);
        var flop1suit = gameState.community_cards[0].suit;
        console.log(flop1suit);
      }*/

    }
    catch (err) {
      bet(0);
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
