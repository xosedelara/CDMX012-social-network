/* eslint-disable import/no-cycle */
import { onNavigate } from './app.js';

export const home = () => {
  const petspaceLogoAttributes = {
    class: 'petspace-logo',
    id: 'petspaceLogo',
    src: 'img/PetSpaceLogo.png',
  };
  const loginBoxAttributes = {
    class: 'login-box',
    id: 'loginBox',
  };
  const loginFormAttributes = {
    class: 'login-form',
    id: 'loginForm',
  };
  const loginMailAttributes = {
    id: 'user',
    name: 'user',
    type: 'text',
    placeholder: '  Usuarix / e-mail',
  };
  const loginPWAttributes = {
    id: 'password',
    type: 'password',
    placeholder: '  Constraseña',
  };
  const seePWBtnAttributes = {
    id: 'seePassword',
  };
  const seePWBtnIAttributes = {
    class: 'fas fa-eye',
  };
  const loginSubmitAttributes = {
    class: 'submit-button',
    id: 'submitButton',
    type: 'submit',
  };
  const loginWithSectionAttributes = {
    class: 'login-with',
    id: 'loginWith',
  };
  const facebookLogoAttributes = {
    class: 'facebook-logo',
    id: 'facebookLogo',
    src: 'img/facebook.png',
  };
  const gmailLogoAttributes = {
    class: 'gmail-logo',
    id: 'gmailLogo',
    src: 'img/google.png',
  };
  const registerSectionAttributes = {
    class: 'register-section',
    id: 'registerSection',
  };
  const registerBtnAttributes = {
    class: 'register-button',
    id: 'registerButton',
    type: 'button',
  };

  const setAttributes = (element, attributes) => {
    Object.keys(attributes).forEach((attr) => element.setAttribute(attr, attributes[attr]));
  };

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

  seePWBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (loginPW.type === 'password') {
      loginPW.type = 'text';
    } else {
      loginPW.type = 'password';
    }
  });
  registerBtn.addEventListener('click', () => { onNavigate('/registration'); });

  return homeStructure;
};
