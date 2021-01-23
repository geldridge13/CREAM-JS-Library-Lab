const { TestScheduler } = require('jest');
const Stack = require('./Stack');

test("Empty Stack Test", () => {

    let stack = new Stack();
    
    let expected = true;

    let actual = stack.isEmpty();

    expect(actual).toEqual(expected)
});


test("Empty Stack Test 2", () => {

    let stack = new Stack();
  
    let expected = false;

    stack.push(10)

    let actual = stack.isEmpty();

    expect(actual).toEqual(expected)
});

test("Push Test", () => {

    let stack = new Stack();
    
    let expected = 100;

    stack.push(100);
    let actual = stack.pop()

    expect(actual).toEqual(expected)
});


test("Peek Test", () => {

    let stack = new Stack();
    
    let expected = 100;

    stack.push(100);
    let actual = stack.peek()

    expect(actual).toEqual(expected)
});


test("Size Test", () => {

    let stack = new Stack();
    
    let expected = 3;

    stack.push(100);
    stack.push(200);
    stack.push(300);

    let actual = stack.size()

    expect(actual).toEqual(expected)
});


test("Print Test", () => {

    let stack = new Stack();
    
    let expected = [100, 200, 300];

    stack.push(100),
    stack.push(200),
    stack.push(300);

    let actual = stack.print()

    expect(actual).toEqual(expected)
});


test("Clear Test", () => {

    let stack = new Stack();
    
    let expected = [];

    stack.push(100)
    stack.push(200)
    stack.push(300)

    let actual = stack.clear()

    expect(actual).toEqual(expected)
});


test("Clear Empty Stack", () => {

    let stack = new Stack();
    
    let expected = [];

    let actual = stack.clear()

    expect(actual).toEqual(expected)
});


test("Palindrome", () => {

    let stack = new Stack();
    let str = "civic";
    let expected = 'This is a Palindrome';
    
    
    let actual = stack.isPalindrome(str)

    expect(actual).toEqual(expected)
});
