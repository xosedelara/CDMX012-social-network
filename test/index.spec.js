/**
 * @jest-environment jsdom
 */
import './globals/firebaseMock';
import { home } from '../src/home.js';

describe('test sobre DOM', () => {
  const render = home();

  test('home is a function', () => {
    expect(typeof home).toBe('function');
  });
  test('test sobre home', () => {
    expect(render.outerHTML).toBe('HTMLDivElement');
  });
  /*
  test('firebase is not defined', () => {
    expect(firebase).toBe('not defined');
  }); */
});
