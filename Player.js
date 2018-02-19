class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    try {
      console.log("0.2 HELLO");
      var listStrict = ["9","10","J", "D", "K", "A"];
      var listAK = ["A", "K"];
      var listLazy = ["10","J", "D", "K", "A"];
      var card1Rank, card2Rank;
      var ActivePlayerCounter = 0;
      for (var index in gameState.players) {
        if (gameState.players[index].name == "ScriptEm") {
          card1Rank = gameState.players[index].hole_cards[0].rank;
          card2Rank = gameState.players[index].hole_cards[1].rank;
        }
      }
      for (var index in gameState.players) {
        if (gameState.players[index].status == "active") {
          ActivePlayerCounter = ActivePlayerCounter + 1;
        }
      }


      // betelési logika
      if (ActivePlayerCounter >= 3) {
          if (listStrict.includes(card1Rank) || listStrict.includes(card2Rank)) {
              if (card2Rank == card1Rank) {
                  bet(1000);
              }
              if (listAK.includes(card1Rank) && listAK.includes(card2Rank)) {
                  bet(1000);
              }
          }
          bet(0);
        }
        if (listLazy.includes(card1Rank) && listLazy.includes(card2Rank)) {
          bet(1000);
        }
        bet(0);
    }
    catch (err) {
      bet(0)
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
