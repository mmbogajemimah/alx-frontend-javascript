export default function hasValuesFromArray(setValues, arrayValues) {
  const result = arrayValues.every((element) => setValues.has(element));
  return result;
}
