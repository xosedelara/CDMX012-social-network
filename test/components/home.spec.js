/**
 * @jest-environment jsdom
 */
import { signInEmailAndPW, signInWithGoogle, signInWithFacebook } from '../../src/lib/__mocks__/firebaseApp';
import { home } from '../../src/components/home.js';

describe('home', () => {
  it('Snapshot home', () => {
    const component = home();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(component);
    expect(rootDiv.innerHTML).toMatchSnapshot('./home.spec.js.snap');
  });
  it('onNavigate works', () => {
    expect(window.location.pathname).toBe('/');
  });
  it('shows psw when click on btn', () => {
    const component = home();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(component);
    const seePWBtn = document.getElementById('seePasswordHome');
    const loginPW = document.getElementById('loginPassword');
    seePWBtn.click();
    expect(loginPW.type).toBe('text');
  });
  it('changes route when click on button', () => {
    const component = home();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(component);
    const registerBtn = document.getElementById('registerButton');
    registerBtn.click();
    expect(window.location.pathname).toBe('/registration');
  });
  it('goes to mainpage when successfully logged in', () => {
    const component = home();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(component);
    const loginSubmit = document.getElementById('submitButton');
    loginSubmit.click();
    expect(signInEmailAndPW()).toHaveBeenCalled();
  });
  it('calls google when click on logo', () => {
    const component = home();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(component);
    const gmailLogo = document.getElementById('gmailLogo');
    gmailLogo.click();
    expect(signInWithGoogle()).toHaveBeenCalled();
  });
  it('calls google when click on facebooklogo', () => {
    const component = home();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(component);
    const facebookLogo = document.getElementById('facebookLogo');
    facebookLogo.click();
    expect(signInWithFacebook()).toHaveBeenCalled();
  });
  it('ís a function', () => {
    expect(typeof home).toBe('function');
  });
});
