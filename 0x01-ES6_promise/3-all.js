import { uploadPhoto, createUser } from './utils';

// The Promise.all() method is used to wait for all promises to resolve and
// it takes an array of promises as an argument.
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
  /* The .then() method is used to attach a callback function that will be called
  with an array of the resolved values of the input promises. The callback function
  uses destructuring assignment to extract the body, firstName and lastName properties
  of the objects and logs their values to the console. */
    .then(([photoResponse, userResponse]) => {
      console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
    })
    .catch(() => { console.log('Signup system offline'); });
}
