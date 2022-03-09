const firebaseConfig = {
    apiKey: 'AIzaSyC26n4Fh-NfxC_ZNKZrFDH4NzrQrYwgirY',
    authDomain: 'petspace-3f65f.firebaseapp.com',
    projectId: 'petspace-3f65f',
    storageBucket: 'petspace-3f65f.appspot.com',
    messagingSenderId: '719999017536',
    appId: '1:719999017536:web:4e72654f1a5dba66b1b5a5',
  };

  firebase.initializeApp(firebaseConfig);

  const singupForm = document.getElementById('registrationForm');
  singupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = singupForm.regEmail.value;
    const password = singupForm.regPW.value;
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(e => {
      console.log(e);
    });
  });
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user);
    } else {

    }
  });
