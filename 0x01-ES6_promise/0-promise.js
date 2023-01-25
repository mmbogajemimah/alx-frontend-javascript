export default function getResponseFromAPI() {
  // the new Promise constructor is used to create a new promise object.
  // The constructor takes a single argument, a function called the "executor".
  // The executor function takes two arguments,
  // a resolve function and a reject function.
  return new Promise((resolve) => {
    const response = { data: 'API Response' };
    resolve(response);
  });
}
