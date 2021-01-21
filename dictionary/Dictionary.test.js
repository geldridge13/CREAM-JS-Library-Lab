const { TestScheduler } = require('jest');
const Dictionary = require('./Dictionary');
const ValuePair = require('./keyValuePair');

test("First Test", () => {
    let dictionary = new Dictionary()
    dictionary.set("Greg", 1)
    let actual = {"key": "Greg", "value": 1}
    let expected = dictionary.table["Greg"]

    console.log(actual)

    expect(expected).toEqual(actual)
    
});

test("First Test", () => {
    let dictionary = new Dictionary()
    dictionary.set("Greg", 1)

    let actual = {"key": "Greg", "value": 1, "key": "Irma", "value": 2}
    let expected = dictionary.table["Greg"].set("Irma", 2)

    console.log(actual)

    expect(actual).toEqual(expected)
    
});