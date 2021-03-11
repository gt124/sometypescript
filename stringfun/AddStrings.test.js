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
test('padStringsWithZeroInFrontToMakeSameSize test', () => {
    // let testola = "hi";
    // t1 = testola.padStart(3, "0")
    console.log(t1)
    let output = null;
    let sut = new AddStrings("fart", "stink");
    output = sut.padStringsWithZeroInFrontToMakeSameSize("13", "5");
    console.log(output);
    output = sut.padStringsWithZeroInFrontToMakeSameSize("3", "5");
    console.log(output);

});

test('loopThroughAndAdd test', () => {
    let output = null;
    let sut = new AddStrings("fart", "stink");
    output = sut.loopThroughAndAdd("51", "3")
    console.log(output)
    output = sut.loopThroughAndAdd("5", "3")
    console.log(output)
    output = sut.loopThroughAndAdd("5", "6")
    console.log(output)
    output = sut.loopThroughAndAdd("7", "6")
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
