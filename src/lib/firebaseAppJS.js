//  Firebase implementation
const firebaseConfig = {
  apiKey: 'AIzaSyC26n4Fh-NfxC_ZNKZrFDH4NzrQrYwgirY',
  authDomain: 'petspace-3f65f.firebaseapp.com',
  projectId: 'petspace-3f65f',
  storageBucket: 'petspace-3f65f.appspot.com',
  messagingSenderId: '719999017536',
  appId: '1:719999017536:web:4e72654f1a5dba66b1b5a5',
};
export const firebaseInitialization = () => { firebase.initializeApp(firebaseConfig); };

const errorTranslate = {
  'auth/invalid-email': 'El email es inválido.',
  'auth/email-already-in-use': 'El email ya está registrado.',
  'auth/weak-password': 'La contraseña es inválida',
  'auth/wrong-password': 'La contraseña es incorrecta',
  'auth/user-not-found': 'El usuario no existe',
};

export const firebaseAuth = (email, password, message) => {
  const responseMessage = message;
  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    responseMessage.innerHTML = 'Ha loggeado exitosamente';
    responseMessage.style.color = '#F1972A';
  }).catch((error) => {
    const errorType = error.code;
    console.log(error.code);
    console.log(error.message);
    responseMessage.innerHTML = (errorTranslate[errorType]);
    responseMessage.style.color = '#FE6C6C';
  });
};

export const firebaseAuthRegistration = (email, password, message) => {
  const returnMessage = message;
  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
    returnMessage.innerHTML = 'Se ha creado su cuenta exitosamente';
    returnMessage.style.color = '#F1972A';
  }).catch((error) => {
    const errorType = error.code;
    returnMessage.innerHTML = (errorTranslate[errorType]);
    returnMessage.style.color = '#FE6C6C';
  });
};
export const firebaseAuthStateChanged = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user);
      // eslint-disable-next-line no-empty
    } else {
    }
  });
};
