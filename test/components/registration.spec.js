/**
 * @jest-environment jsdom
 */
import '../../src/lib/__mocks__/firebase-Auth';
import * as firebaseAuth from '../../src/lib/firebase-Auth.js';
import { registration } from '../../src/components/registration';

const component = registration();
document.body.innerHTML = '<div id="root"></div>';
const rootDiv = document.getElementById('root');
function reloadRegistration() {
  window.location.pathname = '/'; // esto ni cosquillas hace
  rootDiv.innerHTML = '';
  rootDiv.appendChild(component);
}

describe('registration', () => {
  it('Snapshot registration', () => {
    reloadRegistration();
    expect(rootDiv.innerHTML).toMatchSnapshot('./registration.spec.js.snap');
  });
  it('shows psw when click on btn', () => {
    const regPW = document.getElementById('regPW');
    const seePWBtn = document.getElementById('seePasswordReg');
    seePWBtn.click();
    expect(regPW.type).toBe('text');
    seePWBtn.click();
    expect(regPW.type).toBe('password');
  });
  it('asks me for my name, mail and password, and tells me what info goes where', () => {
    const inputName = document.getElementById('regName');
    const inputMail = document.getElementById('regEmail');
    const inputPsw = document.getElementById('regPW');
    const namePlaceholder = inputName.placeholder;
    const mailPlaceholder = inputMail.placeholder;
    const pswPlaceholder = inputPsw.placeholder;
    expect(namePlaceholder).toBe('Nombre');
    expect(mailPlaceholder).toBe('Correo electrónico');
    expect(pswPlaceholder).toBe('Contraseña');
  });
  it('calls Google when clicked on logo', () => {
    const gmailLogo = document.getElementById('googleLogo');
    const googleSignIn = jest.spyOn(firebaseAuth, 'signInWithGoogle');
    gmailLogo.click();
    expect(googleSignIn).toHaveBeenCalled();
  });
});
