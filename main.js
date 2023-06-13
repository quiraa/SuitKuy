class Start {
  constructor() {
    this.playerName = "YOU";
    this.botName = "BOT";
    this.playerOption;
    this.botOption;
    this.winner = "";
  }

  get getBotOption() {
    return this.botOption;
  }

  set setBotOption(option) {
    this.botOption = option;
  }

  botBrain() {
    const option = ["✊", "✋", "✌️"];
    const bot = option[Math.floor(Math.random() * option.length)];
    return bot;
  }

  get getPlayerOption() {
    return this.playerOption;
  }

  set setPlayerOption(option) {
    this.playerOption = option;
  }

  winCalculation() {
    if (this.botOption == "✋" && this.playerOption == "✌️") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "✋" && this.playerOption == "✊") {
      return (this.winner = this.botName);
    } else if (this.botOption == "✌️" && this.playerOption == "✋") {
      return (this.winner = this.botName);
    } else if (this.botOption == "✌️" && this.playerOption == "✊") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "✊" && this.playerOption == "✋") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "✊" && this.playerOption == "✌️") {
      return (this.winner = this.botName);
    } else {
      return (this.winner = "DRAW");
    }
  }

  matchResult() {
    if (this.winner != "DRAW") {
      return `${this.winner} WINS !`;
    } else {
      return "NO WINNER 🤣";
    }
  }
}

function pickOption(params) {
  const start = new Start();
  start.setPlayerOption = params;
  start.setBotOption = start.botBrain();
  start.winCalculation();
  console.log("FINAL RESULT = ", start.matchResult());

  const inGame = document.getElementById("inGame");
  const result = document.getElementById("result");

  inGame.textContent = "....";
  result.textContent = "....";

  setTimeout(() => {
    inGame.textContent = `${start.getPlayerOption} VS ${start.getBotOption}`;
    result.textContent = start.matchResult();
  }, 1500);
}
