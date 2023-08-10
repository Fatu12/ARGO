/* 
Min to Front

Given an array of comparable values, move the lowest element to array’s front,
 shifting backward any elements previously ahead of it. Do not otherwise change 
 the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, 
 do this without using built-in functions.
*/
 
// an array of comparable values 
function arrayComparable(arr){
    // variable that hold the first element in the array 
    let minValue = [0]
    // variable that hold index values
    let oldIdex = 0;
    // for loop to loop through array, that start from one since we already set the first values

    for(let i = 1; i<= arr.length; i++){
        // check if the array values is less then the next values
        if(arr[i] < minValue){
            //set the lowest element to array's front
            minValue = arr[i]
            oldIdex=i
        }
       
    }
     // shift backward any element previously ahead of it
  for (var j = oldIdex; j > 0; j--){
    // save the shifted values
         var temp = arr[j];
         // move to the right
        arr[j] = arr[j-1];
        arr[j-1] = temp;
     }
     arr.length--;
    return arr
}
    console.log(arrayComparable([4,1,6,]))


    