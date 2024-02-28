const conversorDeTemperatura = (temperatura) => {
  const fahrenheint = (temperatura * (9 / 5)) + 32;
  return fahrenheint;
};

module.exports = conversorDeTemperatura;
