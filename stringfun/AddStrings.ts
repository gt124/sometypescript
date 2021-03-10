
export class AddStrings{

    constructor(public readonly first: string, public readonly second: string) {
    }

    AddStrings(){
        //pack the strings so they are the same size

        //loop through strings adding with a carry

        //return result
    }

    PackStrings(){
        if(this.first.length === this.second.length ){
            return {
                outFirst: this.first,
                outSecond: this.second
            }
        }
        return null
    }
}

