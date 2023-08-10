function palindrome(myString){
    
   for (var i =  myString.length/2-1; i >= 0; i--) {
    console.log(myString[i]);
    
        // if(myString[i] != myString[length-1-i]){
        //     return false
        }
        return true
    }

console.log(palindrome("racecare"));

var arr = [1,1,2,3,5,5];
for(var i=1; i<arr.length; i++){
    // shifting array to the left
    arr[i-1]=arr[i];
    console.log(arr)
}
var arr = [1,2,3,4,5,5];
for(var i= arr.length-1; i>0; i--){
    // shifting array to the right
    arr[i]=arr[i-1];
    console.log(arr)
}