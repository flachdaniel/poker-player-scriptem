class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    try {
      console.log(gameState);

      var listStrict = ["9","10","J", "D", "K", "A"];
      var listAK = ["A", "K"]
      var card1Rank, card2Rank;
      console.log("0.2 HELLO");
      for (var element in gameState.players) {
        console.log(element);
        console.log(gameState.players[element].name);
        if (gameState.players[element].name == "ScriptEm") {
          console.log("IN");
          console.log(gameState.players[element].hole_cards);
          card1Rank = gameState.players[element].hole_cards[0].rank;
          card2Rank = gameState.players[element].hole_cards[1].rank;
          console.log(card1Rank);
          console.log(card2Rank);
        }
      }
      if (listStrict.includes(card1Rank) || listStrict.includes(card2Rank)) {
        if (card2Rank == card1Rank) {
          bet(1000)
        }
        if (listAK.includes(card1Rank) && listAK.includes(card2Rank)) {
          bet(1000)
        }
      }
      bet(0)
    }
    catch (err) {
      bet(0)
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
