module.exports = (app) => {
  const _getBoleto = (boleto, callback) => {
    app.database.firebird.select((err, db) => {
      db.query("SELECT RETURN FROM TABLE(?,?)", [boleto.proposta, boleto.imovel], callback);
      db.on('commit', function() {
        db.detach();
      });
    });
  }
  return {
    getBoleto : _getBoleto
  }
}
