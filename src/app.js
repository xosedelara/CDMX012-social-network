/* eslint-disable no-multiple-empty-lines */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

//  Routing
const routes = {
  '/': home,
  '/registration': registration,
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

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


document.getElementById('seePassword').addEventListener('click', (e) => {
  e.preventDefault();
  if (password.type === 'password') {
    password.type = 'text';
  } else {
    password.type = 'password';
  }
});



function activateAuth() {
  console.log('hola');
  const registrationForm = document.getElementById('registrationForm');
  const registrationBtn = document.getElementById('regBtn');
  registrationBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = registrationForm.regEmail.value;
    const password = registrationForm.regPW.value;
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
      console.log(error);
      console.log(error.message);
    });
  });
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user);
    } else {
    }
  });
}

// return button functionality
const registrationFunctionality = () => {
  const returnBtn = document.getElementById('returnButton');
  returnBtn.addEventListener('click', () => {
    onNavigate('/');
    return false;
  });
  document.getElementById('seePasswordReg').addEventListener('click', (e) => {
    e.preventDefault();
    if (regPW.type === 'password') {
      regPW.type = 'text';
    } else {
      regPW.type = 'password';
    }
  });
 };

//  RegistrationButton functionality
const registrationBtn = document.getElementById('registerButton');
registrationBtn.addEventListener('click', () => {
  onNavigate('/registration');
  registrationFunctionality();
  activateAuth();
  return false;
});
