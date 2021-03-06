const Node = require('./listNode');

class BinarySearchTree { 
    constructor() { 
        this.root = null; 
    } 
    
    insert(data) {  
        var newNode = new Node(data);             
        if(this.root === null) {
            this.root = newNode; 
        } else {
            this.insertNode(this.root, newNode); 
        }
    } 
  
    insertNode(node, newNode) {   
        if(newNode.data < node.data) {  
            if(node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);  
            }
        } else { 
            if(node.right === null) {
                node.right = newNode;
            } else {
            this.insertNode(node.right,newNode); 
            }
        } 
    }

    remove(data) { 
        if(this.root === null){
            return null;
        }
        try{
            this.root = this.removeNode(this.root, data); 
            if(data != null) return data
            else throw error
        } catch (error) {
            console.log("This Value Is Null")
        }
    } 

    findMinNode(node) { 
        if(this.getRootNode() === null) {
            return null
        }
        if(node.left === null) {
            return node; 
        }
        else {
            return this.findMinNode(node.left); 
        }
    } 

    removeNode(node, key) { 
        if(node === null) {
            return null; 
        } else if(key < node.data) { 
            node.left = this.removeNode(node.left, key); 
            return node; 
        } else if(key > node.data) { 
            node.right = this.removeNode(node.right, key); 
            return node; 
        } else { 
            if(node.left === null && node.right === null) { 
                node = null; 
                return node; 
            } 
            if(node.left === null) { 
                node = node.right; 
                return node; 
            } else if(node.right === null) { 
                node = node.left; 
                return node; 
            } 
            var aux = this.findMinNode(node.right); 
            node.data = aux.data; 
    
            node.right = this.removeNode(node.right, aux.data); 
            return node; 
        } 
    
    } 

    getRootNode() { 
        if(this.root === null) {
            return null
        }
        return this.root.data; 
    } 

    search(node, data) { 
        if(node === null){ 
            return null; 
        } else if(data < node.data) {
            return this.search(node.left, data); 
        } else if(data > node.data) {
            return this.search(node.right, data); 
        } else {
            return node; 
        }
    } 
} 

module.exports = BinarySearchTree;