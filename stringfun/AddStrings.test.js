//import {AddStrings} from './AddStrings'; //Can't get imports to work
const {AddStrings} = require("./AddStrings")

test('largeLengthOnTop test', () => {
    let sut = new AddStrings("2", "1");
    let output = sut.largeLengthOnTop()
    console.log(output)

//    expect(sut.CalcArea(1, 3)).toBe(3);
//    let output = sut.PackStrings();

    // joe = {
    //     asut: "some",
    //     redos: "other"
    // }
    console.log("test")
});
test('loopThroughAndAdd test', () => {

    let sut = new AddStrings("2", "1");
    let output = sut.loopThroughAndAdd("12345", "678")
    console.log(output)
})
;
test('addTwoNumbersAndCarry test', () => {

    let sut = new AddStrings("does not matter", "does not matter");
    let output = sut.addTwoNumbersAndCarry("5", "2")
    expect(output.outNumber).toBe("7");
    expect(output.outCarry).toBe("0");

    output = sut.addTwoNumbersAndCarry("6", "7")
    expect(output.outNumber).toBe("3");
    expect(output.outCarry).toBe("1");

    output = sut.addTwoNumbersAndCarry("7", "6", "1")
    expect(output.outNumber).toBe("4");
    expect(output.outCarry).toBe("1");

    console.log(output)
})
;
