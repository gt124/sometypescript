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
