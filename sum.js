//Printing the sum of prime numbers from 1 to 50 using Sieve of Eratosthenes method
//First, create an array of numbers from 1 to 50
const arr = [];
for(let i=1; i<=50; i++) {
    arr.push(i);
}
// filter out all even numbers, saves 2 and odd numbers
const arr1 = arr.filter(num =>  {
    if(num === 2) {
        return num;
    }
    else if(num %2 !== 0 && num>1) {
        return num;
    }
});
//filter out multiples of 3 excluding 3
const arr2 = arr1.filter(num => {
    if(num%3 !== 0) {
        return num;
    }
    else if(num ===3) {
        return num;
    }
});
//filter out multiples of 5 excluding 5
const arr3 = arr2.filter(num => {
    if(num%5 !== 0) {
        return num;
    }
    else if(num === 5) {
        return num;
    }
});
//filter out multiples of 7 excluding 7
const arr4 = arr3.filter(num => {
    if(num%7 !== 0) {
        return num;
    }
    else if(num === 7) {
        return num;
    }
});
console.log(arr4); //prints prime numbers from 1 to 50
console.log(arr4.reduce((a,b) => a+b)); //prints the sum of prime numbers from 1 to 50