module.exports = (app) => {
  app.listen(app.get('port'), () => {
    console.log('Servidor inciado em ' + app.get("port"));
  });
}
