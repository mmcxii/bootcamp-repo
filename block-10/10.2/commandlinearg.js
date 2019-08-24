const inp1 = parseInt(process.argv[2]);
const inp2 = parseInt(process.argv[3]);

console.log(`Are both numbers equal? ${inp1 === inp2}`);

console.log(`Are both numbers divisible by 7? ${inp1 % 7 === 0 && inp2 % 7 === 0}`);
