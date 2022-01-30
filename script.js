//Always Hungry

function alwaysHungry(arr) {
    var h=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]==='food'){
            console.log('yummy');
            h++
        }
        
    }
    if(h===0){
        console.log("I'm Hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

//High Pass Filter

function highPass(arr, cutoff) {
    var filteredArr = [];
        for(i=0; i<arr.length; i++){
            if(arr[i]> cutoff){
                filteredArr.push(arr[i]);
            }
        }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

//Better than Average

function betterThanAverage(arr) {
    var sum = 0;
    for(i=0;i<arr.length;i++){
        sum += arr[i]; 
    }
    var count = 0;
    for(i=0;i<arr.length;i++){
        if(arr[i]>(sum/(arr.length))){
            count++;
            // console.log(arr[i]);
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); 

//Array Reverse

function reverse(arr) {
    var a =[];
    for(i=arr.length-1; i>-1;i--){
        a.push(arr[i]);
    }
    arr = a;
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); 


//Fibonacci Array

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    var sum = 0;
    
    if(n>3){
        for(i=2;i<n;i++){
            fibArr[i]=fibArr[i-1]+fibArr[i-2];
        }
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]