const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  //print each letter of sentence 50ms after the other inline
  setTimeout(() => {
    process.stdout.write(sentence[i])
  }, i * 50)
}
//add newline to the end of animation
setTimeout(() => {
console.log('');
}, sentence.length * 50);