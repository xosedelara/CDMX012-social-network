// eslint-disable-next-line no-unused-vars
const registration = {
    registrationHTML: `
    <img class="petspace-logo" id="petspaceLogo" src="img/PetSpaceLogo.png" >
    <section class="reg-box">
        <p>Crea un usuario y contraseña</p>
        <form id="registrationForm" action="submit">
            <input placeholder="Nombre" id="regName"></input><br>
            <input placeholder="Correo electrónico" id="regEmail"></input><br>
            <input type="password" placeholder="Contraseña" id="regPW"></input><br><br>
            <button id="seePasswordReg"> <i class="fas fa-eye" ></i></button>
            <button class="register-button" type="button" id="regBtn">Regístrate</button>
        </form>
        <p>o regístrate con:</p>
        <img src="img/facebook.png" class="facebook-logo">
        <img src="img/google.png" class="gmail-logo">
    </section>
    <br>
    <button class="return-button" id="returnButton">Regresa al inicio</button>
`,

    activateAuth: () => {
        firebaseApp();
        const errorTranslate = {
            'auth/invalid-email': 'El email es inválido.',
            'auth/email-already-in-use': 'El email ya está siendo utilizado.',
            'auth/weak-password': 'La contraseña es inválida',
        };

        console.log('hola');
        const registrationForm = document.getElementById('registrationForm');
        const registrationBtn = document.getElementById('regBtn');
        registrationBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = registrationForm.regEmail.value;
            const password = registrationForm.regPW.value;
            console.log(email, password);
            firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
                const errorType = error.code;
                const regForm = document.getElementById('registrationForm');
                regForm.setAttribute('class', 'alert');
                regForm.innerHTML = (errorTranslate[errorType]);
            });
        });
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user);
            }
        });
    },

    registrationFunctionality: () => {
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
    }
}

export default registration;
