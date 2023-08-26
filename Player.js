class Player{
    constructor(playerName,Symbol){
        this.playerName=playerName
        this.Symbol=Symbol;
    }
    playerSymbol(){
        return this.Symbol
    }
}
module.exports=Player