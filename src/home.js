const home = {
 homeHTML: `
<header class="logo-PS" id="logoPS"><img class="petspace-logo" id="petspaceLogo" src="img/PetSpaceLogo.png" ></header>
  <section class = "login-box" id="loginBox">
    <form class= "login-form" id="loginForm" action="submit">
      <input id="user" name="user" type="text" placeholder="  Usuarix / e-mail"><br>
      <input id="password" type="password" placeholder="  Contraseña"><br>
      <button id="seePassword"> <i class="fas fa-eye" ></i></button>
      <button class="submit-button" id="submitButton" type="submit">Entrar</button>
    </form>
  </section>
  <section class="login-with" id="loginWith">
    <p>Inicia sesión con:</p>
    <img class="facebook-logo" id="facebookLogo" src="img/facebook.png">
    <img class="gmail-logo" id="gmailLogo" src="img/google.png"><br>
  </section>
  <section class="register-section" id="registerSection">
    <p>¿No tienes cuenta?</p><br>
    <button class="register-button" id="registerButton" type="button">Regístrate</button>
  </section>
`,

sendToRegistration: () => { 
  const registrationBtn = document.getElementById('registerButton');
  registrationBtn.addEventListener('click', () => {
  onNavigate('/registration');
  return false;
});
},

showPassword: () => {
  document.getElementById('seePassword').addEventListener('click', (e) => {
  e.preventDefault();
  if (password.type === 'password') {
    password.type = 'text';
  } else {
    password.type = 'password';
  }
});
}
}

export default home;