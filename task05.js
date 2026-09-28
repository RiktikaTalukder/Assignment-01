function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([2, 2, 3, 2, 5, 6])); 