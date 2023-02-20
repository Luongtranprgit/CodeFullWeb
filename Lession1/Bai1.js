const a = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8, 9, 10];
const newA = a.filter((item, index) => {
  return item % 2 === 0 && a.indexOf(item) === index;
});
console.log(newA);
