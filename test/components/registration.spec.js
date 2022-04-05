/**
 * @jest-environment jsdom
 */
import '../../src/lib/__mocks__/firebase-Auth';
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
  it('onNavigate works', () => {
    expect(window.location.pathname).toBe('/registration');
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
    const namelaceholder = inputName.placeholder;
    const mailPlaceholder = inputMail.placeholder;
    const pswPlaceholder = inputPsw.placeholder;
    expect(namelaceholder).toBe('Nombre');
    expect(mailPlaceholder).toBe('Correo electrónico');
    expect(pswPlaceholder).toBe('Contraseña');
  });
});
