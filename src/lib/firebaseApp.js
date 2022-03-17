/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { onNavigate } from '../app.js';

const errorTranslate = {
  'auth/invalid-email': 'El email es inválido.',
  'auth/email-already-in-use': 'El email ya está registrado.',
  'auth/weak-password': 'La contraseña es inválida',
  'auth/wrong-password': 'La contraseña es incorrecta',
  'auth/user-not-found': 'El usuario no existe',
};

export const signInEmailAndPW = (message, email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    onNavigate('/mainPage');
  }).catch((error) => {
    const errorType = error.code;
    console.log(error.code);
    console.log(error.message);
    message.innerHTML = (errorTranslate[errorType]);
    message.style.color = '#FE6C6C';
  });
};

export const createAccount = (message, email, password, name) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
    console.log(result);
    result.user.updateProfile({
      displayName: name,
    });
    onNavigate('/mainPage');
  }).catch((error) => {
    const errorType = error.code;
    message.innerHTML = (errorTranslate[errorType]);
    message.style.color = '#FE6C6C';
  });
};

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      console.log(token);
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // ...
      onNavigate('/mainPage');
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      const email = error.email;
      console.log(email);
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log(credential);
      // ...
    });
};

export const signInWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    const credential = result.credential;
    console.log(credential);
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const accessToken = credential.accessToken;
    console.log(accessToken);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    console.log(errorCode);
    const errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    const email = error.email;
    console.log(email);
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    console.log(credential);
    // ...
  });
};
