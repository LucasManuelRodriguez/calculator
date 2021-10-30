 export class Calculator{
    total = 0;
    sum(value){
        this.total += value;
    }
    restar(value){
        this.total -= value;
    }
    mult(value){
        this.total *= value;
    }
    div(value){
        this.total /= value;
    }
    resto(value){
        this.total %= value;
    }
    reset(){
        this.total = 0;
    }

}
