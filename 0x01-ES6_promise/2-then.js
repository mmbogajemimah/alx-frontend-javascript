/*  In this example, the handleResponseFromAPI function takes a
single argument promise, which is a promise object. */
export default function handleResponseFromAPI(promise) {
  return promise
    /* The first handler is attached using the .then() method.
    This handler will be called when the promise is resolved,
    and it returns an object with the attributes status and body. */
    .then(() => ({ status: 200, body: 'success' }))
    /* The second handler is attached using the .catch() method.
    This handler will be called when the promise is rejected,
    and it returns an empty error object. */
    .catch(() => new Error())
    /* The last handler is attached using the .finally() method.
    This handler will be called after the promise is settled
    (resolved or rejected) and it logs "Got a response from the API" to the console.  */
    .finally(() => { console.log('Got a response from the API'); });
}
