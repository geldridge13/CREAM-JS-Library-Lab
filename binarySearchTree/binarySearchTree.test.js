const { TestScheduler } = require('jest');
const BinarySearchTree = require('./binarySearchTree');
const Node = require('./listNode');

let node1;
let node2;
let node3;
let node4;
let list;
beforeEach(() => {
    list = new BinarySearchTree()
    node1 = new Node(10)
    node2 = new Node(20)
    node3 = new Node(30)
    node4 = new Node(40)
});
test("Add A Node - No Other Nodes", () => {
    list.insert(node1)
    let expected = 10
    let actual = list.getRootNode().getData()

    expect(actual).toEqual(expected)
});
test("Add A Node - With Other Nodes", () => {
    list.insert(node1)
    list.insert(node2)
    let expected = 10
    let actual = list.getRootNode().getData()
    
    expect(actual).toEqual(expected)
});
test("remove(data) Remove A Node - No Nodes - Should Return null", () => {
    let expected = null
    let actual = list.remove()

    expect(actual).toEqual(expected)    
});
test("remove(data) Remove A Node - With Other Nodes - Returns Removed Node", () => {
    list.insert(node1)
    list.insert(node2)
    list.insert(node3)
    console.log(list.getRootNode())
    let expected = 20
    let actual = list.remove(node2)

    expect(actual).toEqual(expected)
});
// test("findMinNode(node) Find Min Node - No Other Nodes", () => {
//     list.insert(node1)
//     list.insert(node2)
//     let expected
//     let actual
// });
// test("findMinNode(node) Find Min Node - With Other Nodes", () => {
//     list.insert(node1)
//     list.insert(node2)
//     let expected
//     let actual
// });
// test("getRootNode() Find Root Node - No Other Nodes", () => {
//     list.insert(node1)
//     list.insert(node2)
//     let expected
//     let actual
// });
// test("getRootNode() Find Root Node - With Other Nodes", () => {
//     list.insert(node1)
//     list.insert(node2)
//     let expected
//     let actual
// });
// test("search(node) Find Specified Node - With Other Nodes", () => {
//     list.insert(node1)
//     list.insert(node2)
//     let expected
//     let actual
// });
// test("findMinNode(node) Find Specified Node - No Other Nodes", () => {
//     list.insert(node1)
//     list.insert(node2)
//     let expected
//     let actual
// });