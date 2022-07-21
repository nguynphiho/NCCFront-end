const arr1 = [1,2,3,4,7,9,10,6,18];
const arr2 = [1,3,7,9];

const containsAll = [];
arr1.forEach((element,index) => {
  return arr2.includes(element) && containsAll.push(arr1[index]);
});

console.log(containsAll);
