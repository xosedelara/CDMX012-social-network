/* eslint-disable no-console */
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

const errorTranslate = {
  'auth/invalid-email': 'El email es inválido.',
  'auth/email-already-in-use': 'El email ya está registrado.',
  'auth/weak-password': 'La contraseña es inválida',
  'auth/wrong-password': 'La contraseña es incorrecta',
  'auth/user-not-found': 'El usuario no existe',
};

// activar el login
const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('submitButton');
loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const email = loginForm.user.value;
  const password = loginForm.password.value;
  const message = document.getElementById('message');
  console.log(email, password);
  // Sign In User with Email and Password
  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    message.innerHTML = 'Ha loggeado exitosamente';
    message.style.color = '#F1972A';
  }).catch((error) => {
    // Handle Errors here
    const errorType = error.code;
    console.log(error.code);
    console.log(error.message);
    message.innerHTML = (errorTranslate[errorType]);
    message.style.color = '#FE6C6C';
  });
});




function activateAuth() {
  console.log('hola');
  const registrationForm = document.getElementById('registrationForm');
  const registrationBtn = document.getElementById('regBtn');
  registrationBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = registrationForm.regEmail.value;
    const password = registrationForm.regPW.value;
    const message = document.getElementById('message');
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      message.innerHTML = 'Se ha creado su cuenta exitosamente';
      message.style.color = '#F1972A';
      // onNvigate a la pag de inicio
    }).catch((error) => {
      const errorType = error.code;
      // const regForm = document.getElementById('registrationForm');
      // regForm.setAttribute('class', 'alert');
      message.innerHTML = (errorTranslate[errorType]);
      message.style.color = '#FE6C6C';
    });
  });
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user);
    // eslint-disable-next-line no-empty
    } else {
    }
  });
}

// return button functionality
const registrationFunctionality = () => {
  const returnBtn = document.getElementById('returnButton');
  returnBtn.addEventListener('click', () => {
    onNavigate('/');
    window.location.reload();
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
