/* eslint-disable no-trailing-spaces */
/* eslint-disable no-empty */
/* eslint-disable space-before-blocks */
/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
// /* eslint-disable no-multiple-empty-lines */

// import { auth } from './lib/index.js';


// // signup
// const singupForm = document.getElementById('loginForm');
// singupForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   // obtener la info del ususario
//   const email = singupForm.user.value;
//   const password = singupForm.password.value;
//   console.log(email, password);
//   // eslint-disable-next-line no-undef
//   auth.createUserWithEmailAndPassword(email, password).then((cred) => {
//     console.log(cred);
//   });
// });





// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
// import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

// const firebaseConfig = {
//     apiKey: 'AIzaSyC26n4Fh-NfxC_ZNKZrFDH4NzrQrYwgirY',
//     authDomain: 'petspace-3f65f.firebaseapp.com',
//     projectId: 'petspace-3f65f',
//     storageBucket: 'petspace-3f65f.appspot.com',
//     messagingSenderId: '719999017536',
//     appId: '1:719999017536:web:4e72654f1a5dba66b1b5a5',
// };

// firebase.initializeApp(firebaseConfig);

// const singupForm = document.getElementById('loginForm');
// singupForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const email = singupForm.user.value;
//   const password = singupForm.password.value;
//   console.log(email, password);
//   // eslint-disable-next-line no-undef
//   firebase.auth().createUserWithEmailAndPassword(email, password).catch(e => {
//     console.log(e);
//   });
// });
// firebase.auth().onAuthStateChanged((user) => {
//     if (user){
//         console.log(user);
//     } else {
        
//     }
// });
