const conversorDeTemperatura = require('./index.js');
const conversorDeBitcoin = require('./bitcoin.js');
const comparaSenhas = require('./comparaSenhas.js');

/* global describe, test, expect */
describe('suite de testes para frontend', () => {
  test('faz a conversao de temperatura', () => {
    expect(conversorDeTemperatura(0)).toBe(32);
  });
  test('faz a conversao de bitcoin para real', () => {
    expect(conversorDeBitcoin(2)).toBe(594552.72);
  });
  test('faz a comparação de senhas', () => {
    expect(comparaSenhas('1234', '1234')).toBe('sucesso');
  });
  test('faz a comparação de senhas com tipos diferentes', () => {
    expect(comparaSenhas('1234', 1234)).toBe('erro');
  });
});
