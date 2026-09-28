function findMax(arr) {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (const num of arr) {
    if (num > max) max = num;
  }
  return max;
}
console.log(findMax([1, 5, 8, 3])); 