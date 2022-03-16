/**
 * @jest-environment jsdom
 */
import './globals/firebaseMock';
import { home } from '../src/components/home.js';

describe('home', () => {
  it('debe ser una función', () => {
    expect(typeof home).toBe('function');
  });
  // test('test sobre home', () => {
  //   expect(render.outerHTML).toBe('HTMLDivElement');
  // });
  /*
  test('firebase is not defined', () => {
    expect(firebase).toBe('not defined');
  }); */
});
