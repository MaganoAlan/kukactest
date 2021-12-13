exports.calcularRendaPerCapita = (rendaMensal, numeroDependentes) => {
  return Number(parseFloat(rendaMensal / numeroDependentes).toFixed(2));
};
