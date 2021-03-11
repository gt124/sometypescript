
export class AddStrings{

    constructor(public readonly first: string, public readonly second: string) {
    }

    AddStrings(){
        //Get the largest length one on top.

        //const orderedStrings = this.largeLengthOnTop();


        //loop through strings adding with a carry

        //return result
    }

    addTwoNumbersAndCarry(firstNumber: string, secondNumber: string, carry: string = "0"){
        //Take in letters, convert to numbers and add, then if it's a carry
        const addedNumber = Number(firstNumber) + Number(secondNumber) + Number(carry)
        let workingNumber: number
        if(addedNumber - 10 < 0) {
            workingNumber = addedNumber
        }
        else {
            carry = "1"
            workingNumber = addedNumber % 10
        }
        console.log("WorkingNumber: " + String(workingNumber))
        return {
            outNumber: String(workingNumber),
            outCarry: carry
        }
    }

    loopThroughAndAdd( outFirst: string, outSecond: string){
        const largeCount = outFirst.length;
        const smallCount = outSecond.length;
        const diffCount = largeCount - smallCount;
        let carry: string = "0";
        let output: string = "";

        for(let i = largeCount - 1; i >= 0; i--)
        {
            if( i >= diffCount ){
                let sumWithCarry = this.addTwoNumbersAndCarry(outFirst[i], "0", carry)
                output = sumWithCarry.outNumber + output;
                carry = sumWithCarry.outCarry;
                console.log("if: " + outFirst[i])
            }
            else
            {
                let sumWithCarry = this.addTwoNumbersAndCarry(outFirst[i], outSecond[i], carry)
                output = sumWithCarry.outNumber + output;
                carry = sumWithCarry.outCarry;
                console.log("else: " + outFirst[i])

            }
            //console.log(outFirst[i])
            //Add two numbers and carry put in add two numbers and carry
        }
        //The last carry if it exists
        if(carry === "1"){
            output = carry + output;
            console.log("last carry fires")
        }
        return {
            outSum: output,
            outCarry: carry
        }
    }

    padStringsWithZeroInFrontToMakeSameSize(first: string, second: string){
        const firstLength = first.length;
        const secondLength = second.length;

        if(firstLength === secondLength){
            return {
                first: first,
                second: second
            }
        }

        if(firstLength > secondLength){
            return {
                first: first,
                second: second.padStart(first.length, "0")
            }

        }
        throw("error")

    }
    largeLengthOnTop(){
        if(this.first.length === this.second.length ){
            return {
                first: this.first,
                second: this.second
            }
        }
        if(this.first.length > this.second.length) {
            return {
                first: this.first,
                second: this.second
            }
        }
        return {
            first: this.second,
            second: this.first
        }
    }
}

