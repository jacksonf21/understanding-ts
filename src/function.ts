function addAndHandle(n1: number, n2: number, cb: (num: number) => number) {
  const newNumber = cb(n2);
  const result = n1 + newNumber;
  return result;
}

console.log(addAndHandle(3, 3, (input) => {
  return input + 5;
}));
