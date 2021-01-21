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
    console.log(actual)
    let expected = 1
    expect(expected).toEqual(actual)
});