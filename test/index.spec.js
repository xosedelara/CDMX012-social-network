/**
 * @jest-environment jsdom
 */
import './globals/firebaseMock';
import { home } from '../src/components/home.js';

describe('home', () => {
  it('is a function', () => {
    expect(typeof home).toBe('function');
  });
});
