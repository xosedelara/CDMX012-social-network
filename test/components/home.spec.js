/**
 * @jest-environment jsdom
 */
import '../../src/lib/__mocks__/firebaseApp';
import '../app';
import { home } from '../../src/components/home.js';

describe('home', () => {
  it('Snapshot home', () => {
    const component = home();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(component);
    expect(rootDiv.innerHTML).toMatchSnapshot('./home.spec.js.snap');
  });
  it('onNavigate funciona correctamente', () => {
    expect(window.location.pathname).toBe('/');
  });
  /* it('cambia ruta dando click en boton', () => {
    const registerBtn = document.getElementById('registerButton');
    registerBtn.simulate('click');
    expect(window.location.pathname).toBe('/registration');
  });
  it('calls google when click on logo', () => {
    const gmailLogo = document.getElementById('gmailLogo');
    userEvent.click(gmailLogo);
    expect(signInWithGoogle).toHaveBeenCalled();
  }); */
  it('ís a function', () => {
    expect(typeof home).toBe('function');
  });
});
