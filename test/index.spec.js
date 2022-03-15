// importamos la funcion que vamos a testear
import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { home } from '../src/home.js';

describe('home', () => {
  it('debería ser una función', () => {
    expect(typeof home).toBe('function');
  });
});
