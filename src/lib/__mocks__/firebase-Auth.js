global.firebase = {
  initializeApp: () => {
  },
  auth: () => ({
    signInEmailAndPW: () => ({
      signInWithEmailAndPassword: () => new Promise((resolve) => {
        resolve('');
      }),
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
    const GoogleAuthProvider = () => {
    };
  },
  signInWithFacebook: () => {
    const FacebookAuthProvider = () => {
    };
  },
};

export default firebase;
