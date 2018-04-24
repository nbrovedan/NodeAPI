import db from 'node-firebird';

module.exports = (app) => {
  const _select = (callback) => {
    db.attach(app.configs.db_conf, callback);
  }

  const _update = (cliente, callback) => {
    db.attach(app.configs.db_conf, callback);
  }

  return {
    select : _select,
    update : _update
  }
}
