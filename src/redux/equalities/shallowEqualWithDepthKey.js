const { shallowEqual } = require("react-redux");

function shallowEqualWithSecondDepthKey(objA, objB, key) {
  const objAKeys = Object.keys(objA);
  const objBKeys = Object.keys(objB);
  if (objAKeys.length !== objBKeys.length) return false;

  return objAKeys.some((keyA) => {
    if (keyA === key && !shallowEqual(objA[key], objB[key])) {
      return false;
    }
    if (objA[keyA] !== objB[keyA]) {
      return false;
    }
    return true;
  });
}

export default shallowEqualWithSecondDepthKey;
