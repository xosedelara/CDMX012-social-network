/**
 * @jest-environment jsdom
 */
import firebase from '../../src/lib/__mocks__/firebase-Auth.js';
import * as firebaseAuth from '../../src/lib/firebase-Auth.js';
import { home } from '../../src/components/home.js';

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
    expect(window.location.pathname).toBe('/');
  });
  it('shows psw when click on btn', () => {
    const seePWBtn = document.getElementById('seePasswordHome');
    const loginPW = document.getElementById('loginPassword');
    seePWBtn.click();
    expect(loginPW.type).toBe('text');
  });
  it('goes to signInWithEmailAndPassword when click on button', () => {
    const loginSubmit = document.getElementById('submitButton');
    const signIn = jest.spyOn(firebase, 'signInEmailAndPW');
    loginSubmit.click();
    expect(signIn).toHaveBeenCalled();
  });
  it('calls google when click on logo', () => {
    const gmailLogo = document.getElementById('gmailLogo');
    const signInGoogle = jest.spyOn(firebaseAuth, 'signInWithGoogle');
    gmailLogo.click();
    expect(signInGoogle).toHaveBeenCalled();
  });
  it('calls facebook when click on facebooklogo', () => {
    const facebookLogo = document.getElementById('facebookLogo');
    const signInFacebook = jest.spyOn(firebaseAuth, 'signInWithFacebook');
    facebookLogo.click();
    expect(signInFacebook).toHaveBeenCalled();
  });
  it('changes route when click on button', () => {
    reloadHome();
    const registerBtn = document.getElementById('registerButton');
    registerBtn.click();
    expect(window.location.pathname).toBe('/registration');
  });
});
