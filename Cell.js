class Cell{
    constructor(){
        this.mark='E'

    }
    isEmpty(){
        if(this.mark=='E'){
            return true
        }
        else{
            return false
        }
    }
    getMark(){
        return this.mark 
    }
}
module.exports=Cell