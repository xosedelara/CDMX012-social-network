/* eslint-disable max-classes-per-file */
global.firebase = {
  initializeApp: () => {
  },
  auth: () => ({
    signInWithEmailAndPassword: () => new Promise((resolve) => {
      resolve('');
    }),
    createUserWithEmailAndPassword: () => new Promise((resolve) => {
      resolve('');
    }),
    signInWithPopup: () => new Promise((resolve) => {
      resolve('');
    }),
  }),
  firestore: () => {
  },
  signInWithGoogle: () => {
    class GoogleAuthProvider {
      constructor() {
        console.log('un constructor');
      }
    }
  },
  signInWithFacebook: () => {
    class FacebookAuthProvider {
      constructor() {
        console.log('otro constructor');
      }
    }
  },
};

export default firebase;
