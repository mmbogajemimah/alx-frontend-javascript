export default function returnHowManyArguments(...theArgs) {
  let count = 0;
  for (let i = 0; i < theArgs.length; i + 1) {
    count += 1;
  }
  return count;
}
