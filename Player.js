class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    console.log(gameState);

    var list = ["J", "D", "K", "A"];
    var card1Rank, card2Rank;
    console.log("Hello");
    for (var element in gameState.players){
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
    // if(list.includes(card1Rank) || list.includes(card2Rank)) {
    //
    //   bet(1000)
    //
    // } else {
    //
    //   bet(250)
    // }

    bet(333)
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
