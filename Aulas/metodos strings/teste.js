const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words);
// Expected output: "fox"

const chars = str.split('');
console.log(chars);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);