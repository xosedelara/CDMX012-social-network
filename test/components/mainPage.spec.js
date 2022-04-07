import { mainPage } from '../../src/components/mainPage.js';
import firebase from '../../src/lib/__mocks__/firebase-Auth.js';

describe('mainPage', () => {
  it('is a function', () => {
    expect(typeOf mainPage).toBe('function');
  });
});
