const { buscarEnderecoPorCep } = require("../services/Address");
const { calcularRendaPerCapita } = require("../utils");

exports.enviar = async (req, res) => {
  if (!req.body.rendaMensal || !req.body.numeroDependentes) {
    res.status(400).send({ error: "Dados obrigatórios não informados" });
  }

  try {
    const endereco = await buscarEnderecoPorCep(req.body.cep);
    const rendaPerCapita = calcularRendaPerCapita(
      req.body.rendaMensal,
      req.body.numeroDependentes
    );

    let sendData = {
      endereco: { ...endereco, cep: req.body.cep },
      rendaPerCapita,
    };

    if (req.body.nome) {
      sendData.nome = req.body.nome;
    }

    res.status(200).send(sendData);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
