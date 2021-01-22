const { TestScheduler } = require('jest');
const Stack = require('./Stack');
const StackNumber = require('./StackNumbers');

test("Empty Stack Test", () => {

    let stack = new Stack();
    let input = "";
    let expected = true;

    let actual = stack.isEmpty();

    expect(actual).toEqual(expected)
});


// test("Second Test", () => {

//     let stack = new Stack();
//     let input = 100;
//     let expected = 100;

//     let actual = stack.push(100);

//     expect(actual).toEqual(expected)
// });