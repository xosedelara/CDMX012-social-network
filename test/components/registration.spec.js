/**
 * @jest-environment jsdom
 */
import '../../src/lib/__mocks__/firebaseApp';
import '../app';
import { registration } from '../../src/components/registration';

describe('registration', () => {
  it('Snapshot registration', () => {
    const component = registration();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(component);
    expect(rootDiv.innerHTML).toMatchSnapshot('./registration.spec.js.snap');
  });
  /* it('onNavigate funciona correctamente', () => {
    expect(window.location.pathname).toBe('/registration');
  }); */
  it('ís a function', () => {
    expect(typeof registration).toBe('function');
  });
});
