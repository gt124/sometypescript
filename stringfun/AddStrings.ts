export class AddStrings {
    result: string;

    constructor(public readonly first: string, public readonly second: string) {
        this.result = "default";
    }

    execute() {
        const orderedStrings = this.largeLengthOnTop();
        const sameSizeStrings = this.padStringsWithZeroInFrontToMakeSameSize(orderedStrings.first, orderedStrings.second);

        //loop through strings adding with a carry
        const results = this.loopThroughAndAdd(sameSizeStrings.first, sameSizeStrings.second);

        this.result = results.outSum;
        return this.result;
    }

    addTwoNumbersAndCarry(firstNumber: string, secondNumber: string, carry: boolean = false) {
        //Take in letters, convert to numbers and add, then if it's a carry
        const addedNumber = Number(firstNumber) + Number(secondNumber) + Number(carry)
        let workingNumber: number
        if (addedNumber - 10 < 0) {
            carry = false
            workingNumber = addedNumber
        } else {
            carry = true
            workingNumber = addedNumber % 10
        }
        //console.log("WorkingNumber: " + String(workingNumber))
        return {
            outNumber: String(workingNumber),
            outCarry: carry
        }
    }

    loopThroughAndAdd(outFirst: string, outSecond: string) {
        const largeCount = outFirst.length;
        let carry: boolean = false;
        let output: string = "";

        for (let i = largeCount - 1; i >= 0; i--) {
            let sumWithCarry = this.addTwoNumbersAndCarry(outFirst[i], outSecond[i], carry)
            output = sumWithCarry.outNumber + output;
            carry = sumWithCarry.outCarry;
            //          console.log(`outfirst:  ${outFirst[i]}, output: ${output}`)
        }
        if (carry) {
            output = "1" + output;
        }
        return {
            outSum: output,
            outCarry: carry
        }
    }

    padStringsWithZeroInFrontToMakeSameSize(first: string, second: string) {
        const firstLength = first.length;
        const secondLength = second.length;

        if (firstLength === secondLength) {
            return {
                first: first,
                second: second
            }
        }

        if (firstLength > secondLength) {
            return {
                first: first,
                second: second.padStart(first.length, "0")
            }

        }
        throw("error, first argument needs to be bigger or equal")

    }

    largeLengthOnTop() {
        if (this.first.length === this.second.length) {
            return {
                first: this.first,
                second: this.second
            }
        }
        if (this.first.length > this.second.length) {
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

