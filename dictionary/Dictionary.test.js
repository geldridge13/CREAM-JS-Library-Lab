const { TestScheduler } = require('jest');
const Dictionary = require('./Dictionary');
const ValuePair = require('./keyValuePair');

let dictionary;
beforeEach(() => {
    dictionary = new Dictionary()
    dictionary.set("Greg", 1)
    dictionary.set("Irma", 2)
});

test("Add Person", () => {
    let actual = dictionary.get("Greg")
    let expected = 1
    expect(actual).toEqual(expected)
});

test("Remove Value", () => {
    let actual = dictionary.remove("Greg")
    console.log(actual)
    let expected = true
    expect(actual).toEqual(expected)
});

test("Testing Size", () => {
    dictionary.set("Deloris", 3)
    dictionary.set("Adam", 4)
    
    let actual = dictionary.size()
    let expected = 4

    expect(actual).toEqual(expected)
});

test("Key Values", () => {
    
    let actual = typeof Object.values(dictionary)
    let expected = "object"

    expect(actual).toEqual(expected)
});

test("Clear Dictionary", () => {
    
    dictionary.clear()

    let actual = dictionary.size()
    let expected = 0

    expect(actual).toEqual(expected)
});

test("Is Empty", () => {
    
    dictionary.clear()

    let actual = dictionary.isEmpty()
    let expected = true

    expect(actual).toEqual(expected)
});

test("Return Keys", () => {
    
    let actual = dictionary.keys()
    let expected = ["Greg", "Irma"]

    expect(actual).toEqual(expected)
});

test("Return Values", () => {
    
    let actual = dictionary.values()
    let expected = [1, 2]

    expect(actual).toEqual(expected)
});