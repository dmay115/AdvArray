// const colors = ['blue', 'red', 'yellow', 'peach'];

// function yell(val, i) {
//     const caps = val.toUpperCase()
//     console.log(`At index ${i}, ${caps}`);
// }

// colors.forEach(yell);

// const prices = [23.99, 19.99, 420.69];
// let total = 0;
// prices.forEach(function(price) {
//     total += price;
// });
// console.log(total);


// const nums = [1,3,5,7]
// let total = 0
// function myForEach(arr, callback){
//     for (let i=0; i < arr.length; i++){
//         callback(arr[i]);
//     }
// }

// myForEach(nums, function(totals){
//     total += totals.map
//     console.log(total)
// });

const nums = [20, 40, 69, 140];
const timesTwo = nums.map(function(num){
    return num * 2
})
const timesTwoAgain = timesTwo.map(function(num){
    return num * 2
})
const overFifty = timesTwo.filter(function(val){
    return val > 50
})