
module.exports = (app) => {
  const _getAll = (callback) => {
    app.database.firebird.select((err, db) => {
      db.query("SELECT FIELDS FROM TABLE WU", callback);
      db.on('commit', (result) => {
        db.detach();
      });
    });
  }

  const _getOne = (id, callback) => {
    app.database.firebird.select((err, db) => {
      db.query("SELECT FIELDS FROM TABLE WU WHERE WU.ID = ?", [id], callback);
      db.on('commit', (result) => {
        db.detach();
      });
    });
  }

  const _updateMail = (cliente, callback) => {
    app.database.firebird.update(cliente, (err, db) => {
      db.query("UPDATE TABLE SET FIELD = ? WHERE ID = ?", [cliente.MAIL, cliente.ID], callback);
      db.on('commit', (result) => {
        db.detach();
      });
    });
  }

  const _getDetails = (id, callback) => {
    app.database.firebird.select((err, db) => {
      db.query("SELECT FIELD FROM TABLE WHERE ID = ?", [id], callback);
       db.on('commit', (result) => {
         db.detach();
       });
    });
  }

  return {
    getAll : _getAll,
    getOne : _getOne,
    getDetails : _getDetails,
    updateMail : _updateMail
  }
}
