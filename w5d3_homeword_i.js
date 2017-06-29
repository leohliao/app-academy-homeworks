// // Intro to JS Homework

// // Phase I
// // mystery scoping

// function mysteryScoping1() {
//   var x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }

// mysteryScoping1(); // in block, in block

// function mysteryScoping2() {
//   const x = 'out of block';
//   if (true) {
//     const x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }

// mysteryScoping2(); // in block, out of block

// function mysteryScoping3() {
//   const x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }

// mysteryScoping3(); // SyntaxError

// function mysteryScoping4() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }

// mysteryScoping4(); // in block, out of block

// function mysteryScoping5() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   let x = 'out of block again';
//   console.log(x);
// }

// mysteryScoping5(); // SyntaxError

// madLib

function madLib(verb, adj, noun) {
  return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`
}

// console.log(madLib('make', 'best', 'guac'));

function isSubstring(searchString, subString){
	return searchString.includes(subString)
}

// console.log(isSubstring("time to program", "time"))
// console.log(isSubstring("Jump for joy", "joys"))

function fizzBuzz(array) {
	const fbarr = [];

	array.forEach(num => {
	if ( (num % 3 === 0 ) ^ (num % 5 === 0)) {
		fbarr.push(num);
		}
	});	

	return fbarr;
}

// console.log(fizzBuzz([1, 2, 3, 4, 5 , 15]))

function isPrime(num) {
	if (num < 2) { return false; }

	for (let i = 2 ; i < num ; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

// console.log(isPrime(2)) // true
// console.log(isPrime(10)) // false
// console.log(isPrime(15485863)) // true
// console.log(isPrime(3548563)) // false

function sumOfNPrimes(num) {
	let sum = 0;
	let countPrimes = 0; 
	let i = 2; 

	while (countPrimes < num) {
		if (isPrime(i)) {
			sum += i;
			countPrimes ++;
		}
		i++; 
	}
}
console.log(sumOfNPrimes(0)); // 0 
console.log(sumOfNPrimes(1)); // 2
console.log(sumOfNPrimes(4)); // 17 

