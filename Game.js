const Player = require("./Player")
const Board=require("./Board")

class Game{
  #Board
  #turn
  #gameEnd
  #players
    constructor(playerName1,playerName2){
        this.#players=[new Player(playerName1,'X'),
                    new Player(playerName2,'O')];
        this.#Board=new Board();
        this.#turn=0;
        this.#gameEnd=false;

    }

    
  static newGame(playerName1, playerName2) {
    // validate
    if (
      typeof playerName1 !== "string" ||
      typeof playerName2 !== "string" ||
      playerName1 === playerName2
    ) {
      return [null, ""];
    }
    let newGame = new Game(playerName1, playerName2);
    return [newGame, "Game Created"];
  }
  


    play(cellNumber){
        // validation of cellnumber
        if(typeof cellNumber!="number"){
            return[null]
        }
        if(cellNumber<0 ||cellNumber>8){
            return ["invalid cellnumber"]
        }
        if(!this.#Board.markBoardcell(cellNumber).isEmpty()){
            return "cell already fill"
        }


        // current player 
        let currentPlayer=this.#players[this.#turn%2]
        this.turn++

        // assign symbol
        this.#Board.markBoardcell(cellNumber).mark = currentPlayer. playerSymbol();

        // print board
        console.log(this.#Board.printBoard());

        // analyse board

        let[gameStatus,winner]=this.#Board.analyseBoard()
        if(gameStatus=="win")
        {
            this.#gameEnd=true
            return `${winner} is win`
           
        }
        
        if (gameStatus=== "draw") {
            this.#gameEnd = true;
            return "It's a Draw!!!";
          }
        if(gameStatus==="continue"){
          return "continue play"
        }



    }


    
}
module.exports=Game;