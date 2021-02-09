/* The Basic 13 Algorithms */


// 1 *****************************************************
function print1To255(){
    for (var i = 1; i <= 255; i++){
        console.log(i);
    }
}
print1To255(); 


/* 2 *****************************************************
function printArrayVals(arr){
    for (var i = 0; i< arr.length; i++){
        console.log(arr[i]);
    }
}
printArrayVals([,6,5,4,3,2,1])
*/

/* 3 *****************************************************
function printAvgOfArray(arr){
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++){
        sum += arr[i];
    }
    console.log("Average is " + sum/arr.length);
}
printAvgOfArray([2,4,6,8,10])
*/

/* 4 *****************************************************
function printIntsAndSum0To255(){
    var sum = 0;
    for (var i = 0; i <=255; i++){
        console.log(i);
        sum += i;
    }
    console.log("Sum = " + sum)
}
printIntsAndSum0To255()
*/

/* 5 *****************************************************
function printMaxMinAvgArrayVals(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];

    for (var i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
        if (arr[i] < min){
            min = arr[i];
        }
        sum += arr[i];
    }

    console.log("Max is " + max);
    console.log("Min is " + min);
    console.log("Average is " + sum/arr.length);
}
printMaxMinAvgArrayVals([1,2,3,4,5,6,7])
*/

/* 6 *****************************************************
function printMaxOfArray(arr){
    var max = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    console.log("Max is: " + max);
}
printMaxOfArray([5,7,1,9,20,3])
*/

/* 7 *****************************************************
function printOdds1To255(){
    for (var i = 1; i <= 255; i+=2){
        console.log(i);
    }
}
printOdds1To255()
*/

/* 8 *****************************************************
function returnArrayCountGreaterThanY(arr, y){
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > y){
            count++;
        }
    }
    console.log("Num of values greater than " + y + ": " + count)
}
returnArrayCountGreaterThanY([24,7,1,90,4],5)
*/

/* 9 *****************************************************
function returnOddsArray1To255(){
    var arr = [];
    for (var i = 1; i <= 255; i+=2){
        arr.push(i);
    }
    return arr;
}
returnOddsArray1To255()
*/

/* 10 *****************************************************
function shiftArrayValsLeft(arr){
    for (var i = 0; i < arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = 0;
    return arr;
}
shiftArrayValsLeft([1,2,3,4,5])


/* 11 ******************************************************
function squareArrayVals(arr){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i]*arr[i];
    }
    return arr;
}
squareArrayVals([1,2,3,4,5])
*/

/* 12 *****************************************************
function swapStringForArrayNegativeVals(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
    return arr;
}

swapStringForArrayNegativeVals([-3,5,-2,7,1,-4])
*/


/* 13 *****************************************************

function zeroOutArrayNegNums(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}

zeroOutArrayNegNums([8,-3,4,-6,1,5,-5])
*/


//printIntsAndSum0To255()