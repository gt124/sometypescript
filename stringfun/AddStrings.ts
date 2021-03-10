
export class AddStrings{

    constructor(public readonly first: string, public readonly second: string) {
    }

    AddStrings(){
        //Get the largest length one on top.

       // const orderedStrings = this.largeLengthOnTop();


        //loop through strings adding with a carry

        //return result
    }

    addTwoNumbersAndCarry(firstNumber: string, secondNumber: string, carry: string = "0"){
        //Take in letters, convert to numbers and add, then if it's a carry
        const addedNumber = Number(firstNumber) + Number(secondNumber) + Number(carry)
        let workingNumber: Number = 0
        if(addedNumber - 10 < 0) {
            workingNumber = addedNumber
        }
        else {
            carry = "1"
            workingNumber = addedNumber % 10
        }
        return {
            outNumber: String(workingNumber),
            outCarry: carry
        }
    }

    loopThroughAndAdd( outFirst: string, outSecond: string){
        const largeCount = outFirst.length;
        const smallCount = outSecond.length;

        for(let i = largeCount - 1; i >= 0; i--)
        {
            console.log(outFirst[i])
            //Add two numbers and carry put in add two numbers and carry
        }
        return {
            outFirst: largeCount,
            outSecond: smallCount
        }
    }

    largeLengthOnTop(){
        if(this.first.length === this.second.length ){
            return {
                outFirst: this.first,
                outSecond: this.second
            }
        }
        if(this.first.length > this.second.length) {
            return {
                outFirst: this.first,
                outSecond: this.second
            }
        }
        return {
            outFirst: this.second,
            outSecond: this.first
        }
    }
}

