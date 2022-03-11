/* // eslint-disable-next-line no-unused-vars
const registration = `
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
`;
const showRegForm = () => {
  const registrationBox = document.createElement('section');
  const registrationForm = document.createElement('form');
  const registrationName = document.createElement('input');
  const registrationMail = document.createElement('input');
  const registrationPW = document.createElement('input');
  const registrationPW2 = document.createElement('input');
  const registrationSubmit = document.createElement('button');
  registrationBox.innerText = 'Crea un usuario y contraseña';
  registrationName.setAttribute('placeholder', 'Nombre');
  registrationMail.setAttribute('placeholder', 'Correo Electrónico');
  registrationPW.setAttribute('placeholder', 'Contraseña');
  registrationPW2.setAttribute('placeholder', 'Confirma contraseña');
  registrationSubmit.setAttribute('value', 'Registrar');
  registrationForm.append(registrationName, registrationMail, registrationPW, registrationPW2, registrationSubmit);
  registrationBox.appendChild(registrationForm);
  return registrationBox;
};
registerButton.addEventListener('click', () => {
root.innerHTML = '';
root.appendChild(showRegForm());
});
 */