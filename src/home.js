const homeview = {
  petspaceLogoAttributes : {
    class: 'petspace-logo',
    id: 'petspaceLogo',
    src: 'img/PetSpaceLogo.png',
  },
  loginBoxAttributes: {
    class: 'login-box',
    id: 'loginBox',
  },
  loginFormAttribute: {
    class: 'login-form',
    id: 'loginForm',
  },
  loginMailAttributes: {
    id: 'user',
    name: 'user',
    type: 'text',
    placeholder: '  Usuarix / e-mail',
  },
  loginPWAttributes: {
    id: 'password',
    type: 'password',
    placeholder: '  Constraseña',
  },
  seePWBtnAttributes: {
    id: 'seePassword',
  },
  seePWBtnIAttributes: {
    class: 'fas fa-eye',
  },
  loginSubmitAttributes: {
    class: 'submit-button',
    id: 'submitButton',
    type: 'submit',
  },
  loginWithSectionAttributes: {
    class: 'login-with',
    id: 'loginWith',
  },
  facebookLogoAttributes: {
    class: 'facebook-logo',
    id: 'facebookLogo',
    src: 'img/facebook.png',
  },
  gmailLogoAttributes: {
    class: 'gmail-logo',
    id: 'gmailLogo',
    src: 'img/google.png',
  },
  registerSectionAttributes: {
    class: 'register-section',
    id: 'registerSection',
  },
  registerBtnAttributes: {
    class: 'register-button',
    id: 'registerButton',
    type: 'button',
  },

  setAttributes: (element, attributes) => {
    Object.keys(attributes).forEach(attr => element.setAttribute(attr, attributes[attr]));
  },

  showLogin: () => {
    const homeStructure = document.createElement('div');
    const petspaceLogo = document.createElement('img');
    const loginBox = document.createElement('section');
    const loginForm = document.createElement('form');
    const loginMail = document.createElement('input');
    const loginPW = document.createElement('input');
    const seePWBtn = document.createElement('button');
    const seePWBtnI = document.createElement('i');
    const loginSubmit = document.createElement('button');
    const loginWithSection = document.createElement('section');
    const loginWithText = document.createElement('p');
    const facebookLogo = document.createElement('img');
    const gmailLogo = document.createElement('img');
    const registerSection = document.createElement('section');
    const registerSectionText = document.createElement('p');
    const registerBtn = document.createElement('button');
    setAttributes(petspaceLogo, petspaceLogoAttributes);
    setAttributes(loginBox, loginBoxAttributes);
    setAttributes(loginForm, loginFormAttributes);
    setAttributes(loginMail, loginMailAttributes);
    setAttributes(loginPW, loginPWAttributes);
    setAttributes(seePWBtn, seePWBtnAttributes);
    setAttributes(seePWBtnI, seePWBtnIAttributes);
    setAttributes(loginSubmit, loginSubmitAttributes);
    setAttributes(loginWithSection, loginWithSectionAttributes);
    setAttributes(facebookLogo, facebookLogoAttributes);
    setAttributes(gmailLogo, gmailLogoAttributes);
    setAttributes(registerSection, registerSectionAttributes);
    setAttributes(registerBtn, registerBtnAttributes);
    loginWithText.textContent = 'Inicia sesión con:';
    registerSectionText.textContent = '¿No tienes cuenta?';
    registerBtn.textContent = 'Regístrate';
    loginSubmit.textContent = 'Entrar';
    seePWBtn.appendChild(seePWBtnI);
    loginForm.append(loginMail, loginPW, seePWBtn, loginSubmit);
    loginBox.appendChild(loginForm);
    loginWithSection.append(loginWithText, facebookLogo, gmailLogo);
    registerSection.append(registerSectionText, registerBtn);
    homeStructure.append(petspaceLogo, loginBox, loginWithSection, registerSection);
    return homeStructure;
  },

  print: () => {
    const root = document.getElementById('root');
    root.appendChild(showLogin());
  },
};
export default homeview;
