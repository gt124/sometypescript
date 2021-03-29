//import {AddStrings} from './AddStrings'; //Can't get imports to work
const {AddStrings} = require("./AddStrings")


test('largeLengthOnTop test', () => {
    let sut = new AddStrings("2", "1");
    let output = sut.largeLengthOnTop()
    console.log(output)

    console.log("test")
});
test('execute test', () => {
    let sut = new AddStrings("25", "175");
    let output = sut.execute()
    expect(output).toBe("200")
    console.log(output)

    console.log("test")

    console.log(output)
});
test('padStringsWithZeroInFrontToMakeSameSize test', () => {
    // let testola = "hi";
    // t1 = testola.padStart(3, "0")
    //console.log(t1)
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
    output = sut.loopThroughAndAdd("51", "73", sut.addTwoNumbersAndCarry)
    expect(output.outSum).toBe("124")
    expect(output.outCarry).toBe(true)
    console.log(output)
    output = sut.loopThroughAndAdd("51", "03", sut.addTwoNumbersAndCarry)
    expect(output.outSum).toBe("54")
    expect(output.outCarry).toBe(false)
    output = sut.loopThroughAndAdd("5", "3", sut.addTwoNumbersAndCarry)
    expect(output.outSum).toBe("8")
    expect(output.outCarry).toBe(false)
    output = sut.loopThroughAndAdd("5", "6", sut.addTwoNumbersAndCarry)
    expect(output.outSum).toBe("11")
    expect(output.outCarry).toBe(true)
    output = sut.loopThroughAndAdd("7", "6", sut.addTwoNumbersAndCarry)
    expect(output.outSum).toBe("13")
    expect(output.outCarry).toBe(true)
})
;
test('addTwoNumbersAndCarry test', () => {

    let sut = new AddStrings("does not matter", "does not matter");
    let output = sut.addTwoNumbersAndCarry("5", "2")
    expect(output.outNumber).toBe("7");
    expect(output.outCarry).toBe(false);

    output = sut.addTwoNumbersAndCarry("6", "7")
    expect(output.outNumber).toBe("3");
    expect(output.outCarry).toBe(true);

    output = sut.addTwoNumbersAndCarry("7", "6", true)
    expect(output.outNumber).toBe("4");
    expect(output.outCarry).toBe(true);

    console.log(output)
})
;
