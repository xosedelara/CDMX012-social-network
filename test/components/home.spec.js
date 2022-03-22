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
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
  it('has functionality in button to see Password', () => {
    expect()
  });
  it('ís a function', () => {
    expect(typeof home).toBe('function');
  });
});
