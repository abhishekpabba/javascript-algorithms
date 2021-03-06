function isvalidPowers(arr1, arr2) {
  let compareObj = {};
  
  arr2.forEach(val => {
    compareObj[val] = compareObj[val] + 1 || 1;
  });
  
  let isValid = true;
  arr1.forEach(val =>  {
    val = val * val;
    if (compareObj[val]) {
      compareObj[val]--;
      if (compareObj[val] < 0) isValid = false;
    } else isValid = false; 
  });
  
  return isValid;
}
  
isvalidPowers([1,1,2], [1,1,4]);