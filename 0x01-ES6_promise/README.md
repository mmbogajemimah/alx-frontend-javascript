ES6 Promises

Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

    Promises (how, why, and what)
    How to use the then, resolve, catch methods
    How to use every method of the Promise object
    Throw / Try
    The await operator
    How to use an async function

#### A promise
In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value. Promises provide a way to handle asynchronous operations in a more manageable way, as opposed to using callbacks.

Promises have three states:

    Pending: The initial state, neither fulfilled nor rejected.
    Fulfilled: Meaning the operation completed successfully.
    Rejected: Meaning the operation failed.

A promise is created using the Promise constructor, which takes a single argument, a function called the "executor". The executor function takes two arguments, a resolve function and a reject function.<br>

Promises can be consumed by using the .then() and .catch() methods. The then method is called when the promise is resolved (fulfilled), and the catch method is called when the promise is rejected.<br>

Promise also have some methods like Promise.all and Promise.race which allows handling multiple promises.<br>

Promises are a key part of JavaScript's asynchronous programming model and are widely used in modern JavaScript development, particularly in conjunction with other features such as async/await.<br>

#### new Promise in JavaScript
The new Promise constructor is used to create a new promise object. The constructor takes a single argument, a function called the "executor". The executor function takes two arguments, a resolve function and a reject function.

#### The Resolve Function in the Executer Function
In JavaScript, the resolve function is a function that is passed as an argument to the executor function of a promise. It is used to signal that the asynchronous operation associated with the promise has completed successfully, and that the promise should be fulfilled with a given value.</br>

When the resolve function is called, the promise's state changes from "pending" to "fulfilled", and any .then callbacks that have been attached to the promise will be called with the value passed to resolve.

#### Promise.all()
In JavaScript, you can use the Promise.all() method to wait for multiple promises to resolve, and then perform an action with the resolved values.

The Promise.all() method takes an array of promises as an argument and returns a new promise that is fulfilled with an array of the fulfilled values of the input promises in the same order as the input promises. If any of the input promises are rejected, the returned promise is immediately rejected with the reason of the first rejected promise.

It's important to note that Promise.all() will wait for all the promises to resolve or reject before it settles. If one of the promises reject, the returned promise will reject with the reason of the first rejected promise.

Another method to handle multiple promises is Promise.race(), which returns a promise that settles the same way as the first promise that settles from the input iterable.
