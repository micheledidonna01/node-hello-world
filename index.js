console.log(process.argv);
console.log(process.argv[2]);

const message = process.argv[2] ?? "Hello World"; //undefined null o stringa vuota
//const message = process.argv[2] || "Hello World"; se è nullo o undefined ma non se è una stringa vuota
//const message = process.argv[2] ? process.argv[2] : "Hello World"; 

console.log(message);

