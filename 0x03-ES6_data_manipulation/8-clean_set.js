export default function cleanSet(set, startString) {
  if (startString.length > 0) {
    const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
    const cleanedValues = filteredValues.map((value) => value.substring(startString.length));
    return cleanedValues.join('-');
  }
  return '';
}
