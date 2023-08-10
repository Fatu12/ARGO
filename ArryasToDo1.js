/* 
Push Front
Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

Examples:

pushFront([5,7,2,3], 8) => [8,5,7,2,3]
pushFront([99], 7) => [7,99]*/
const array = [5,7,2,3];
array.unshift(8)
//  console.log(array) // result [ 8, 5, 7, 2, 3 ]

 
 function pushFront(myArray,value){
    // since push is going to add the the end of the array, we need to start from the end of the 
    // array so we can add it to the begging
    for (let i = myArray.length; i >= 0; i--) {
        // shift the right to left 
         myArray[i] = myArray.length-1
}
        myArray[0]= value
            return myArray
 }

//  console.log(pushFront([0,1,2,3,6],5))


/* given an array, remove and return the value at the beginning of the array. 
Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

Examples:

popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function*/

 function removeArray(arr){
    // save the first value in the array
    let firstValue = arr[0]
    // loop through the array shifting all values to the left
    for(var i=0;i< arr.length;i++){
        arr[i] = arr[i+1]
        console.log(arr)
    }
    // decrease the length of the array by one 
    arr.length = arr.length-1
    //log the array
    // console.log(arr)
    // return the removed value
    return firstValue

 }

//  console.log(removeArray([0,5,10,15]))

 // give an array
 function popFront(array){
     // save the value begging of array(removed)
     let temp = array[0]
     // loop through array 
     for(var i =0; i < array.length-1; i++){
         array[i]= array[i+1]
         
        }
        // decrease the length of array
        // return the value of remain array
        array.length= array.length-1
     //  console log removed value  
     console.log(array)
     return array
    }
    //example array for test
     //console.log(popFront([0,1,2,3,4]))

    /*
    Insert At

Given an array, index, and additional value, insert the value into array at given index. 
You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), 
you are able do this without it though!

Examples:

insertAt([100,200,5], 2, 311) => [100,200,311,5]
insertAt([9,33,7], 1, 42) => [9,42,33,7]
    */

// give an array, index and additional value
// insert the value into array at given index 
// for loop
// return value of array
// test

function  insertAT1(array, index,value){
    for(let i= array.length; i >= index; i--){
        // taking current index setting to the left index
        array[i]= array[i-1];
    }
    // set the index value to the value you want to pass to 
    array[index]= value
    return array
}
// test and call the function
console.log(insertAT1([1,2,3,4],1,5))


/*
BONUS: Remove At

Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).

Examples:

removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function
*/

function removeElementAtIndex(arr, index) {

  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]; // Shift the elements to the left
  }
  arr.length--; // Reduce the length of the array to remove the last element
}

const myArray = [1, 2, 3, 4, 5];
const indexToRemove = 2; // Index of the value to be removed (in this case, 3)

removeElementAtIndex(myArray, indexToRemove);
console.log(`Array after removal: ${myArray}`);

// give an array and index into array 
function removeAt(array,index){
    // save the removed value
     let temp = array[index]
     console.log(temp)
    // loop through array and shift to the right  since we moving from the begging of array
    for(let i = index; i <= array.length-1; i++){
        // take the current index and shift to the left 
        array[i] = array[i+1]
        
    }
    // decrease the array.length
        array.length--;
        console.log(array)
        return array
}
console.log(removeAt([1,3,5],0))

/*
BONUS: Swap Pairs

Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.

Examples:

insertAt([1,2,3,4]) => [2,1,4,3]
insertAt(["Brendan",true,42]) => [true,"Brendan",42]
*/
function swapPair(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  return arr
}
const arr = [1, 2, 3, 4,5];

 console.log(swapPair(ar, 0, 1)); //insertAt([1,2,3,4]) => [2,1,4,3]
 

 