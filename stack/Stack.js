class Stack {
    constructor() {
        this.items = []
        this.count = 0
    }

    push(element) {
        this.items[this.count] = element
        console.log(`${element} added to ${this.count}`)
        this.count += 1
        return this.count - 1
    }

    pop() {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count -1]
        this.count -= 1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }

    peek() {
        console.log(`Top element is ${this.items[this.count -1]}`)
        return this.items[this.count - 1]
    }

    isEmpty() {
        //console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty')
        return this.count == 0
    }

    size() {
        console.log(`${this.count} elements in stack`)
        return this.count
    }

    print() {
        let arr = []
        for (let i = 0; i < this.count; i++) {
            arr.push(this.items[i])
        }
        return arr
    }

    clear() {
        this.items = []
        this.count = 0
        console.log('Stack cleared..')
        return this.items
    }

    length() {
        return this.top;
     }

    isPalindrome(str) {
        //let s = new Stack();
        for (let i = 0; i < str.length; ++i) {
           s.push(str[i]);
        }
        var rword = " ";
        while (s.length() > 0) {
           rword += s.pop();
        }
        if (str == rword) {
            return 'This is a Palindrome';
        }
        else {
           return 'This is Not a Palindrome';
        }
     }

    

// const stack = new Stack()

// stack.isEmpty() 

// stack.push(100)
// //console.log(stack.push()) 
// stack.push(200)

// stack.peek()

// stack.push(300)

// console.log(stack.print())

// stack.pop()
// stack.pop()
//stack.pop()
//console.log(stack.pop())

// stack.clear()

// console.log(stack.print())   

// stack.size()

//stack.isEmpty()
}
module.exports = Stack;