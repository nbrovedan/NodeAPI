module.exports = (app) => {
  const usuarios = app.dao.usuarios;

  const _getAll = (req, res) => {
    usuarios.getAll((err, result) => {
      if (err) {
        res.status(500).end();
      }else{
        if(result.length == 0) res.status(204).end(); else res.send(result);
      }
    });
  }

  const _getOne = (req, res) => {
    usuarios.getOne(req.params.id, (err, result) => {
      if (err) {
        res.status(500).end();
      } else {
        if(result.length == 0) res.status(204).end(); else res.send(result);
      }
    });
  }

  const _getImoveis = (req, res) => {
    usuarios.getDetails(req.params.id, (err, result) => {
      if (err) {
        res.status(500).end();
      }else if(result.length == 0) res.status(204).end(); else res.send(result);
    })
  }

  const _updateMail = (req, res) => {
    usuarios.getOne(req.params.id, (err, result) => {
      if (err) {
        res.status(500).end();
      }else if(result.length == 0){
        res.status(204).end();
      }else if(!req.body.email || req.body.email == ''){
        res.status(400).send({message: 'Dados incompletos'});
      }else{
        result[0].EMAIL = req.body.email;

        usuarios.updateMail(result[0], (_err, _result) => {
          if (_err) res.status(500).end(); else res.status(201).end();
        });
      }
    });
  }

  return {
    getAll : _getAll,
    getOne : _getOne,
    getImoveis : _getImoveis,
    updateMail : _updateMail
  }
}
