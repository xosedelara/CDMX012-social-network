/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const routes = {
  '/' : home,
  '/registration' : registration
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )
  rootDiv.innerHTML = routes[pathname]
}

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname]
}

const firebaseConfig = {
  apiKey: 'AIzaSyC26n4Fh-NfxC_ZNKZrFDH4NzrQrYwgirY',
  authDomain: 'petspace-3f65f.firebaseapp.com',
  projectId: 'petspace-3f65f',
  storageBucket: 'petspace-3f65f.appspot.com',
  messagingSenderId: '719999017536',
  appId: '1:719999017536:web:4e72654f1a5dba66b1b5a5',
};
firebase.initializeApp(firebaseConfig);


function probando() {
  console.log('hola');
  const registrationForm = document.getElementById('registrationForm');
  const registrationBtn = document.getElementById('regBtn');
  registrationBtn.addEventListener('click', (e) => {
      // window.location.reload();
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
