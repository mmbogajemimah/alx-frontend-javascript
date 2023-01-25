import { uploadPhoto, createUser } from './utils';

// The Promise.all() method is used to wait for all promises to resolve and
// it takes an array of promises as an argument.
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
    })
    .catch(() => { console.log('Signup system offline'); });
}
