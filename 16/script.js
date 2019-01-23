/* Implement your solution here */
function depth(obj) {
  let current = obj
  let count = 0;
  while (current) {
      current = current.value;
      count++;
  }
  return count;
}

/* Do not touch anything below this line */
let c = depth({
  value: {
    value: {
      value: {
        value: {
          value: {
            value: null,
          }
        }
      }
    }
  }
});
if (c === 6) console.log('Solved!');
else console.error('Invalid solution');
