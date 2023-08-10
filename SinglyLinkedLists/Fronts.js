/* Fronts
Use classes, attributes, and methods in the JavaScript language for all challenges. Use only a single JavaScript file for this assignment. All examples are done in order, 
starting with a new instance of the SLL class.

Add Front
Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
*/
class Node{
    constructor(node){
        this.node= node;
        this.next=null;
    } 
}
 class SLL {
     // constructor, other methods, removed for brevity
      constructor(){
        this.head = null;
 }
 addFront(value){
    // whatever we calling the class we going to call the constructor
       // we creating the instance of the class
    let newNode = new Node(value)
    
    // check if the current list does not have node 
    //if the list is empty, place the new node as the head
    // if(this.head == null){
    //     return this.head
    // }
    // if the list is not empty, assign the head to be the next node to the new node 
    // pointing  to the head of this node
 
    newNode.next = this.head;
    // going to change the old head to new header 
    //assign the newNode  to be the new head of the list
    this.head = newNode
    return this;
 }
 /*
 Remove Front
Write a method to remove the head node and return the new list head node. If the list 
is empty, return null.
 */
  removeFront(){
    if(this.head == null){
      return null
    }
    // holding the current  values
    let removeNode =this.head
    // move the head of the list to the 2nd node
    this.head = removeNode.next
    // removing the pointer  so we don't have connection 
    removeNode.next=null
    return this.head
  }
  /*
  ?Front
    Write a method to return the value (not the node) at the head of the list. If the 
    list is empty, 
    return null.
    */
    // display the values not the 
  nodeValue(){
    if(this.head==null){
        console.log("this is no value")
        return null
    }
    return this.head.node
  }
}
 let mySLL = new SLL();
 mySLL.addFront(10)
 mySLL.addFront(4)
 mySLL.addFront(192)
 mySLL.nodeValue()
 console.log(mySLL)
 console.log(mySLL.nodeValue())
// console.log(mySLL) 
//  mySLL.removeFront(4)
 // console.log(mySLL.head.next) // this print the next node
//   console.log(mySLL)

 
