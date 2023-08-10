/*
Use classes, attributes, and methods in the JavaScript language for this challenge. Use only a single JavaScript file 
for this assignment, it may be the same from the Fronts assignment. All examples are done in order, starting with a new 
instance of the SLL class.Create display() that uses a while loop and a runner to return a string containing all list values.
 Build what you wish console.log(myList) did!
*/

/*
?Length
Create a new SLL method length() that returns number of nodes in that list.
*/
class Node{
    constructor(node){
        this.node = node
        this.next = null
    }
}
class Head{
    constructor(){
    this.head = null
    }
        addFront(value){
            let newNode = new Node(value)
            newNode.next = this.head;
           this.head = newNode
            return this

            }
             lengthNode() {
                let count = 0
                let current = this.head
                while(current){
                    count ++
                    current = current.next
                }
                return count
    }


        display() {
            let runner = this.head 
            if(runner == null){
                return null 
            }
            let result = "";
            while(runner !== null){
                result += runner.node
                if(runner.next !== null){
                    result += ","
                }
                 runner = runner.next
            }
           return result
        }
    }
        let SLL = new Head()
        console.log(SLL.display())

        SLL.addFront(47)
        SLL.addFront(21)
        // console.log(SLL)
        // console.log(SLL.display())

        // SLL.addFront(1)
        // SLL.addFront(4)
        
    

        // console.log(SLL.lengthNode())
    

