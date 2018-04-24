import crypto from 'crypto-js';

module.exports = (app) => {
  const acessoapi = app.dao.acessoapi;
  const _validate = (req, res, next) => {
    var key = req.headers["key"];

    if(!key){
      return res.status(403).send({ message: 'Chave de acesso não informada!' });
    }else{

      acessoapi.getOne(key, (err, result) => {
        if (err) res.status(500).end();
        if (result.length == 0) res.status(401).send({message: 'Sem permissão para acessar'}); else next();
      });
    }
  }

  return {
    validate: _validate
  }
}
