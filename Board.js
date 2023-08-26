const Cell=require("./Cell")
class Board{
    constructor(){
        this.cells=[
            new Cell(), new Cell(), new Cell(),
            new Cell(), new Cell(), new Cell(),
            new Cell(), new Cell(), new Cell()
        ]
    }
    markBoardcell(cellNumber){
        return this.cells[cellNumber]
        
    }
    printBoard(){
        return this.cells
    }
    isGamedraw(){
        for(let i=0;i<this.cells.length;i++){
            if(this.cells[i].isEmpty()){
                return false
            }
        }
        return true
    }
    analyseBoard(){
        if (
            this.cells[0].getMark() == this.cells[1].getMark() &&
            this.cells[0].getMark() == this.cells[2].getMark() &&
            !this.cells[0].isEmpty()) {
              return ["win", this.cells[0].getMark()]
          }
          else if (
            this.cells[3].getMark() == this.cells[4].getMark() &&
            this.cells[3].getMark() == this.cells[5].getMark() &&
            !this.cells[3].isEmpty()) {
              return ["win", this.cells[3].getMark()]
          }
          else if (
            this.cells[6].getMark() == this.cells[7].getMark() &&
            this.cells[6].getMark() == this.cells[8].getMark() &&
            !this.cells[6].isEmpty()) {
              return ["win", this.cells[6].getMark()]
          }
          else if (
            this.cells[0].getMark() == this.cells[3].getMark() &&
            this.cells[0].getMark() == this.cells[6].getMark() &&
            !this.cells[0].isEmpty()) {
              return ["win", this.cells[0].getMark()]
          }
          else if (
            this.cells[1].getMark() == this.cells[4].getMark() &&
            this.cells[1].getMark() == this.cells[7].getMark() &&
            !this.cells[1].isEmpty()) {
              return ["win", this.cells[1].getMark()]
          }
          else if (
            this.cells[2].getMark() == this.cells[5].getMark() &&
            this.cells[2].getMark() == this.cells[8].getMark() &&
            !this.cells[2].isEmpty()) {
              return ["win", this.cells[2].getMark()]
          }
          else if (
            this.cells[0].getMark() == this.cells[4].getMark() &&
            this.cells[0].getMark() == this.cells[8].getMark() &&
            !this.cells[0].isEmpty()) {
              return ["win", this.cells[0].getMark()]
          }
          else if (
            this.cells[6].getMark() == this.cells[4].getMark() &&
            this.cells[6].getMark() == this.cells[2].getMark() &&
            !this.cells[6].isEmpty()) {
              return ["win", this.cells[6].getMark()]
          }
          else if(this.isGamedraw()){
            return["draw", ""]
          }
      
          else{
          return["continue", ""]
          }
        }
      }
      
    

module.exports=Board