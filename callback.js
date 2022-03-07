const log = (q,r) => {
	console.log(`quotient = ${q} , reminder = ${r}`);
}

//high order function
const divide = (x,y,callback) => {
	let quotient = x / y;
  let reminder = x % y;
	callback(quotient,reminder);  //callback function
}


divide(4,3,log);
