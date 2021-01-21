const { TestScheduler } = require('jest');
const LinkedList = require('./LinkedList');
const ListNode = require('./ListNode');

let node1;
let node2;
let list;

beforeEach(() => {
    node1 = new ListNode(10)
    list = new LinkedList(node1)
    node2 = new ListNode(20)
});

test("Create List With Head Node", () => {
    let actual = list.head.data
    let expected = 10

    expect(actual).toEqual(expected);
});

test("Add New Node: .next", () => {
    node1.next = node2

    let actual = node1.next.data
    let expected = 20

    expect(actual).toEqual(expected);
});

test("Get First Node: getFirst()", () => {
    let actual = list.getFirst().data
    let expected = 10

    expect(actual).toBe(expected);
});

test("Get Last Node: getLast()", () => {
    node3 = new ListNode(30)
    node1.next = node2
    node2.next = node3

    let actual = list.getLast().data
    let expected = 30

    expect(actual).toBe(expected);
});

test("Get List Size: size()", () => {
    node3 = new ListNode(30)
    node1.next = node2
    node2.next = node3

    let actual = list.size()
    let expected = 3

    expect(actual).toBe(expected);
});

test("Clear List: clear()", () => {
    node3 = new ListNode(30)
    node1.next = node2
    node2.next = node3

    list.clear()

    let actual = list.size()
    let expected = 0

    expect(actual).toBe(expected);
});