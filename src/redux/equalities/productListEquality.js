import shallowEqualWithSecondDepthKey from "./shallowEqualWithDepthKey";

const productListEquality = (key) => (arrA, arrB) => {
  if (arrA.length !== arrB.length) return false;

  return arrA.some((_, index) => {
    return shallowEqualWithSecondDepthKey(arrA[index], arrB[index], key);
  });
};

export default productListEquality;
