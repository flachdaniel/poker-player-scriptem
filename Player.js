class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    // var list = ["J", "D", "K", "A"];
    // var asd;
    // var card1Rank, card2Rank;
    // for (var element in gameState["players"]){
    //   if (element["name"] === "ScriptEm") {
    //     card1Rank = element[0]["rank"];
    //     card2Rank = element[1]["rank"];
    //   }
    // }
    // if(list.contains(card1Rank) || list.contains(card2Rank)) {
    //   bet(1000)
    // } else {
    //   bet(0)
    // }
    bet(1000)
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
