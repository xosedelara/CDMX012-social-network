/* eslint-disable arrow-body-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { onNavigate } from '../app.js';
import { createPosts } from '../components/posts.js';

//  Firebase implementation
const firebaseConfig = {
  apiKey: 'AIzaSyC26n4Fh-NfxC_ZNKZrFDH4NzrQrYwgirY',
  authDomain: 'petspace-3f65f.firebaseapp.com',
  projectId: 'petspace-3f65f',
  storageBucket: 'petspace-3f65f.appspot.com',
  messagingSenderId: '719999017536',
  appId: '1:719999017536:web:4e72654f1a5dba66b1b5a5',
};
firebase.initializeApp(firebaseConfig);

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
    message.innerHTML = (errorTranslate[errorType]);
    message.style.color = '#FE6C6C';
  });
};

export const createAccount = (message, email, password, name) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
    result.user.updateProfile({
      // Jalar esta data para asignar al nombre de usuarix
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
  firebase.auth().signInWithPopup(provider).then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    const credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
    onNavigate('/mainPage');
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
  });
};

export const signInWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    const credential = result.credential;
    // The signed-in user info.
    const user = result.user;
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const accessToken = credential.accessToken;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
  });
};

export const getCurrentUserPhoto = () => {
  const user = firebase.auth().currentUser;
  let photoURL = user.photoURL;
  if (photoURL === null || photoURL === undefined) {
    photoURL = './img/cuteplanet.webp';
  } else {
    photoURL = user.photoURL;
  }
  console.log(photoURL);
  return photoURL;
};

export const getCurrentUserName = () => {
  const user = firebase.auth().currentUser;
  const userName = user.displayName;
  return userName;
};

export const addPostCollection = (input, photoURL) => {
  const db = firebase.firestore();
  const user = firebase.auth().currentUser;
  const date = new Date();
  db.collection('posts').add({
    user: user.uid,
    name: user.displayName,
    text: input,
    photo: photoURL,
    date: `${date.getHours()}${':'}${date.getMinutes()} ${date.getDate()}${'/'}${date.getMonth() + 1}${'/'}${date.getFullYear()}`,
    time: firebase.firestore.Timestamp.now(),
    likes: 0,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

export const accessPosts = (postArea) => {
  const db = firebase.firestore();
  const postArray = [];
  db.collection('posts').orderBy('time', 'desc')
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        postArray.push(doc);
      });
      function unique(posts) {
        return posts.filter((e, index) => posts.findIndex((a) => a.id === e.id) === index);
      }
      const filteredPosts = unique(postArray);
      postArea.innerHTML = '';
      filteredPosts.forEach((post) => {
        createPosts(post.data().text, post.data().name, post.data().likes, post.data().photo, post.id);
      });
    });
};

export const accessLikes = (count, docId) => {
  const db = firebase.firestore();
  const docRef = db.collection('posts').doc(docId);
  console.log(docId);
  return docRef.update({
    likes: count,
  })
    .then(() => {
      console.log('Document successfully updated!');
    })
    .catch((error) => {
    // The document probably doesn't exist.
      console.error('Error updating document: ', error);
    });
};
