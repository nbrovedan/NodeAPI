module.exports = (app) => {
  const _getOne = (key, callback) => {
    app.database.firebird.select((err, db) => {
      db.query("SELECT * FROM TABLE WHERE ACTIVE = 'S' AND KEY = ?", [key], callback);
      db.on('commit', (result) => {
        db.detach();
      });
    });
  }

  return {
    getOne : _getOne
  };
}
