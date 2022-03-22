/**
 * @jest-environment jsdom
 */
import '../../src/lib/__mocks__/firebaseApp';
import '../app';
import { home } from '../../src/components/home.js';

describe('home', () => {
  const component = home();
  it('Snapshot home', () => {
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(component);
    expect(rootDiv.innerHTML).toMatchSnapshot('./home.spec.js.snap');
  });
  it('emits an event when a request is started', () => {
    const page = component;
    page.on('request_started', (data) => {
      expect(data.url).tocontain('/');
    });
  });
  it('ís a function', () => {
    expect(typeof home).toBe('function');
  });
});
