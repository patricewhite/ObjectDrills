
function validateKeys(object, expectedKeys) {
  
  // if there's not the same number of object keys
  // and expected keys, then we know there are missing or
  // extra keys, so return false
  if (Object.keys(object).length !== expectedKeys.length) {
    return false;
  }
  
  // we iterate over each expected key and verify that
  // it's found in `object`.
  for (var i; i<expectedKeys.length; i++) {
    if (!Object.keys(object).find(function(key) {
      return key === expectedKeys[i];
    })) {
      return false;
    }
  }
  // if we get to this point in our code, the keys are valid
  // so we return `true`
  return true;
}