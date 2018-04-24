
module.exports = (app) => {
    var usuarios = app.controllers.usuarios;

    app.route('/usuarios')
      .get(usuarios.getAll);

    app.route('/usuarios/:id')
      .get(usuarios.getOne)
      .put(usuarios.updateMail);

    app.route('/usuarios/:id/imoveis')
      .get(usuarios.getImoveis);
}
