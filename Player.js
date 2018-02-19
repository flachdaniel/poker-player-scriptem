class Player {
  static get VERSION() {
    return 'Mint a talajvíz';
  }

  static betRequest(gameState, bet) {
    var list = ["J", "D", "K", "A"];
    var asd;
    var card1Rank, card2Rank;
    for (var element in gameState[0]["players"]){
      if (element["name"] === "ScriptEm") {
        card1Rank = element[0]["rank"];
        card2Rank = element[1]["rank"];
      }
    }
    if(list.contains(card1Rank) || list.contains(card2Rank)) {
      bet(1000)
    } else {
      bet(0)
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
