import { mainPage } from '../../src/components/mainPage.js';
import * as app from '../../src/app.js';
import firebase from '../../src/lib/__mocks__/firebase-Auth.js';

describe('mainPage', () => {
  it('is a function', () => {
    expect(typeof mainPage).toBe('function');
  });
  it('menu button takes you to home', () => {
    const menuBtn = document.getElementById('menuIcon');
    const mySpy = jest.spyOn(app, 'onNavigate');
    menuBtn.click();
    expect(mySpy).toHaveBeenCalled();
  });
});
