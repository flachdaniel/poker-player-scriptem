class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    //console.log(gameState);

    var list = ["J", "D", "K", "A"];
    var card1Rank, card2Rank;
    console.error("Hello");
    for (var element in gameState.players){
      console.error(element);
      console.error(gameState.players[element].name);
      if (element.name === "ScriptEm") {
        card1Rank = gameState.players[element].hole_cards[0].rank;
        card2Rank = gameState.players[element].hole_cards[1].rank;
        console.error(card1Rank);
        console.error(card2Rank);
      }
    }
    if(list.includes(card1Rank) || list.includes(card2Rank)) {

      bet(1000)

    } else {

      bet(107)
    }

    bet(1000)
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
