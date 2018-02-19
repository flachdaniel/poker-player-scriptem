class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    console.log(gameState);

   /* var list = ["J", "D", "K", "A"];
    var card1Rank, card2Rank;
    for (var element in gameState.players){
      if (element.name === "ScriptEm") {
        card1Rank = element.hole_cards[0].rank;
        card2Rank = element.hole_cards[1].rank;
      }
    }
    if(list.includes(card1Rank) || list.includes(card2Rank)) {
      bet(1000)
    } else {
      bet(0)
    }*/
    bet(1000)
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
