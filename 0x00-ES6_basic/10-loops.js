export default function appendToEachArrayValue(array, appendString) {
  const appendedValues = [];
  for (const value of array) {
    const appendedValue = appendString + value;
    appendedValues.push(appendedValue);
  }
  return appendedValues;
}
