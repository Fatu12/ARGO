/*

?Reverse

Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing 
elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

*/

// give numerical array

function reverseArray(arr){
    // for loop to loop through the array.length/2
    for(let i=0; i<= arr.length/2; i++){
        // save the first value of array before swap
        let temp = arr[i]
        // set the last value of array to the first vales in the array
        arr[i] = arr[arr.length-1-i]
        // set the reverse value to the first value we have saved
         arr[arr.length-1-i] = temp;
        
    }
    return arr
}
// console.log(reverseArray([2,3,4,5,6]))
// console.log(reverseArray([1,2,3,4]))
// console.log(reverseArray([1,2,4]))

/*
?Rotate
Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that
 amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. 
 Operate in-place: given ([1,2,3],1), 
change the array to [3,1,2]. Don't use built-in functions.
Second: allow negative shiftBy (shift L, not R).
Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
Fourth: minimize the touches of each element.

an offset within an array or other data structure object is an integer indicating the distance 
(displacement) between the beginning of the object and a given element or point, 
presumably within the same object.

*/

function rotateArray(arr, shiftBy){
    // improve efficiency to get the actual number if rotation needed 
    var valueMovementsNeeded;
    if(shiftBy>0){
        valueMovementsNeeded = shiftBy % arr.length;
    }
    else{
        valueMovementsNeeded = Math.abs(shiftBy)%arr.length;
    }
    if(shiftBy > 0) {

    // loop through the amount of rotation need
    // for(let i=0; i < shiftBy; i++){
        for(let i=0; i < valueMovementsNeeded; i++){
        // save the last amount of array to this
        let temp = arr[arr.length-1]
        // loop through given array, and shift to the right 
        for(let j= arr.length-2; j>=0; j--){
            arr[j+1] = arr[j]
        }
        arr[0]= temp
        }
        return arr   
    }

else{
//Second: allow negative shiftBy (shift L, not R)
// for(let i=0; i < Math.abs(shiftBy); i++){
    for(let i=0; i < valueMovementsNeeded; i++){

    let temp = arr[0]
// loop through given array, and shift to the left 
    for(let j=1; j<= arr.length-1; j++){
        arr[j-1]= arr[j];

    }
    arr[arr.length-1]= temp;
    return arr
}
}

}
console.log(rotateArray([1,2,3,4,6],21))
// if you ab array of 5 times a total of 21 times, it's the same as  rotating one time because 21%5=1



