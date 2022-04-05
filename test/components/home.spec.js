/**
 * @jest-environment jsdom
 */
import firebase from '../../src/lib/__mocks__/firebase-Auth.js';
import { home } from '../../src/components/home.js';
import { signInEmailAndPW } from '../../src/lib/firebase-Auth.js';

const component = home();
document.body.innerHTML = '<div id="root"></div>';
const rootDiv = document.getElementById('root');
function reloadHome() {
  window.location.pathname = '/';
  rootDiv.innerHTML = '';
  rootDiv.appendChild(component);
}

describe('home', () => {
  it('Snapshot home', () => {
    reloadHome();
    expect(rootDiv.innerHTML).toMatchSnapshot('./home.spec.js.snap');
  });
  it('onNavigate works', () => {
    // reloadHome();
    expect(window.location.pathname).toBe('/');
  });
  it('shows psw when click on btn', () => {
    // reloadHome();
    const seePWBtn = document.getElementById('seePasswordHome');
    const loginPW = document.getElementById('loginPassword');
    seePWBtn.click();
    expect(loginPW.type).toBe('text');
  });
  it('goes to signInWithEmailAndPassword when click on button', () => {
    const loginSubmit = document.getElementById('submitButton');
    const signIn = jest.fn(signInEmailAndPW);
    loginSubmit.click();
    expect(signIn).toHaveBeenCalled();
  });
  it('changes route when click on button', () => {
    reloadHome();
    expect(window.location.pathname).toBe('/');
    const registerBtn = document.getElementById('registerButton');
    registerBtn.click();
    expect(window.location.pathname).toBe('/registration');
  });
  /* it('calls google when click on logo', () => {
    const gmailLogo = document.getElementById('gmailLogo');
    gmailLogo.click();
    expect(signInWithGoogle()).toHaveBeenCalled();
  });
  it('calls google when click on facebooklogo', () => {
    const facebookLogo = document.getElementById('facebookLogo');
    facebookLogo.click();
    expect(signInWithFacebook()).toHaveBeenCalled();
  }); */
});
