class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }

    getData() {
        return this.data
    }
}

module.exports = Node;