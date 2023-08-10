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
        max() {
        if (this.head == null) {
            return null; 
        }
        let runner  = this.head;
        let maxValue = runner.node;

        while (runner !== null) {
            if (runner.node >= maxValue) {
                maxValue = runner.node;
            }
            runner = runner.next;
        }
        return maxValue;
    }
    /*
    SList: Min
    Create min(node) to return list’s smallest val. 
    */
    min() {
       

        if(this.head == null){
            return null
        }
        let runner = this.head
        let minValue = runner.node
        while(minValue == null){
            if(minValue >= runner.node){
                minValue = runner.node
            }
            runner = runner.next
        }
        return minValue
}
/*
SList: Average

Create average() to return average val.
*/
 average() {
    if(this.head == null){
        return null
    }
    
    let current = this.head;
    let sum = 0;
    let count = 0;

    while (current) {
      sum += current.node;
      count++;
      current = current.next;
    }

    return sum / count;
  }
}
      let SLL = new Head()
        // SLL.addFront(6)
        // SLL.addFront(4)
        // SLL.addFront(2)
        // console.log(SLL.display())
        // console.log("max", SLL.max())
        console.log("min",SLL.min())
        console.log("average ", SLL.average())
        // console.log(SLL)
        // SLL.addFront(1)
        // SLL.addFront(4)
        // console.log(SLL.lengthNode())
    

