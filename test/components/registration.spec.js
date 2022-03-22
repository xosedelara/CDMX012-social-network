/**
 * @jest-environment jsdom
 */
import '../../src/lib/__mocks__/firebaseApp';
import '../app';
import { registration } from '../../src/components/registration';

describe('home', () => {
  it('Snapshot home', () => {
    const component = registration();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(component);
    expect(rootDiv.innerHTML).toMatchSnapshot('./registration.spec.js.snap');
  });
  it('ís a function', () => {
    expect(typeof registration).toBe('function');
  });
});
