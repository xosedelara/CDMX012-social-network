/* eslint-disable no-multiple-empty-lines */
/* eslint-disable indent */
/* eslint-disable import/no-unresolved */
// aqui exportaras las funciones que necesites


// Este es el punto de entrada de tu aplicacion

// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
// import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';
// // import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = initializeApp({
//     apiKey: 'AIzaSyC26n4Fh-NfxC_ZNKZrFDH4NzrQrYwgirY',
//     authDomain: 'petspace-3f65f.firebaseapp.com',
//     projectId: 'petspace-3f65f',
//     storageBucket: 'petspace-3f65f.appspot.com',
//     messagingSenderId: '719999017536',
//     appId: '1:719999017536:web:4e72654f1a5dba66b1b5a5',
// });

// // Initialize Firebase
// export const auth = getAuth(firebaseConfig);
// // createUserWithEmailAndPassword(auth, email, password)
// //  .then((userCredential) => {
// //     // Signed in
// //     const user = userCredential.user;
// //     // ...
// //   })
// //   .catch((error) => {
// //     const errorCode = error.code;
// //     const errorMessage = error.message;
// //     // ..
// //   });

// // const db = getFirestore(firebaseConfig);
// // db.setings({ timestampsInSnaphots: true});
// onAuthStateChanged(auth, (user) => {
//     if (user != null) {
//         console.log('logged in!');
//     } else {
//         console.log('No user');
//     }
// });

// // const auth = getAuth();
// // createUserWithEmailAndPassword(auth, email, password)
// //   .then((userCredential) => {
// //     // Signed in
// //     const user = userCredential.user;
// //     // ...
// //   })
// //   .catch((error) => {
// //     const errorCode = error.code;
// //     const errorMessage = error.message;
// //     // ..
// //   });

// const singupForm = document.getElementById('loginForm');
// singupForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   // obtener la info del ususario
//   const email = singupForm.user.value;
//   const password = singupForm.password.value;
//   console.log(email, password);
//   // eslint-disable-next-line no-undef
//   createUserWithEmailAndPassword(auth, email, password).then((cred) => {
//     console.log(cred);
//   });
// });



export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

