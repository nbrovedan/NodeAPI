module.exports = (app) => {
  var boletos = app.controllers.boletos;

  app.route('/boletos')
    .post(boletos.getBoleto);
}
