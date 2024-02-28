function comparaSenhas(senha1, senha2) {
  const sucesso = 'sucesso';
  const erro = 'erro';
  if (senha1 === senha2) {
    return sucesso;
  }
  return erro;
}

module.exports = comparaSenhas;
