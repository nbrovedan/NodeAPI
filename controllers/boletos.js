module.exports = (app) => {
  const boletos = app.dao.boletos;
  const _getBoleto = (req, res) => {
    if (!req.body.proposta || !req.body.imovel){
      res.status(400).send({message: 'Está faltando dados para emissão'});
    }else{
      boletos.getBoleto(
	  {
        proposta: req.body.proposta,
        imovel : req.body.imovel
      }, (err, result) => {
        if (err) res.status(500).end({message: err});
        if(result[0].RETORNO == null) res.status(500).send({message: 'Nenhum boleto encontrado'});
        res.status(200).end();
      });
    }
  }

  return {
    getBoleto : _getBoleto
  }
}
