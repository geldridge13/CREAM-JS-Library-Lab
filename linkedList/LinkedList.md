Data Structure - LinkedList 

A linked list is an ordered collection of data elements. A data element can be represented as a node in a linked list. Each element (nodes) contains two items: the data stored and a link to the next node. The data can be any valid data type.  Unlike arrays, data elements are not stored at contiguous locations. The data elements or nodes are linked using pointers, hence called a linked list. 
There are a few different types of linked lists. But the most popular ones are: singly, doubly and circular. The entry point to a linked list is called the head. The head is a reference to the first node in the linked list. The last node on the list points to null. If a list is empty, the head is a null reference. See diagram below:
 
Our team utilized the singly data type to implement our LinkedList.  
First, to implement a node, we defined a node class with a constructor function which will be called to initialize the object with two properties, data and a pointer to the next node. 

Then, we defined a linkedList class with a constructor function which will be called to initialize the object with a property, head. The head pointer is assigned a value of null because when a linked list object is initially created it does not contain any nodes. Inside the linkedList class, the following helper methods were utilized to return and test the nodes present in the linkedList. 

size(), 
clear(), 
getFirst(),
getLast()

When testing our methods, a beforeEach() function was used to assign values to the nodes to assist us in testing the data.  Each above method was tested as well as “creating a list with a head” and “adding a new node” and all passed the unit test. 

References:
https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/
https://codeburst.io/linked-lists-in-javascript-es6-code/
