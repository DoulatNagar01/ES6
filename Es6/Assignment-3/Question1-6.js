// prime number between two number
// let count = 0;
// let input1 = 50;
// let input2 = 100;
// let i, j;
// for (i = input1; i <= input2; i++) {
//   for (j = 1; j <= i; j++) {
//     if (i % j == 0) {
//       count++;
//     }
//   }
//   if (count == 2) console.log("This is a prime number : " + i);
//   count = 0;
// }

// Question fibonaci serie.

// let number1 = 10;
// function fabonacci() {
//   let n1 = 0;
//   let n2 = 1;
//   let nextTerm;
//   for (let i = 0; i < number1; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
//   }
// }
// fabonacci();

// Count digits in Number.

// let num = 12345;
// let count = 0;
// while (num > 0) {
//   if (num % 10) {
//     count++;
//   }
//   let temp = num % 10;
//   num = num - temp;
//   num = num / 10;
// }
// console.log(count);



// Reverse th number.

// let num = 234561;
// let temp;
// while (num > 0) {
//   temp = num % 10;
//   num = num - temp;
//   num = num / 10;
//   console.log(temp);
// }


// Prime factorization of A Number.
//function primeFactorisation(num) {
//    function isPrime(num) {
//
//        for (let j = 2; j <= Math.sqrt(num); j++) {
//            if (num % j == 0) {
//                return false; 
//            }
//        }
//        return true;
//    }
//    for (let i = 2; i <= num; i++) {
//        if (isPrime(i)) {
//            while (num % i == 0) {
//                console.log(i); 
//                num /= i; 
//            }
//        }
//    }
//    console.log();
//}
//primeFactorisation(100);
//primeFactorisation(101);
//primeFactorisation(5);
//


