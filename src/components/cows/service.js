const { Cows } = require("./class");
const createModel = require("./model");
const hooks = require("./hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    //paginate: app.get('paginate')
    paginate: false,
  };

  app.use("/cows", new Cows(options, app));

  const service = app.service("cows");

  service.hooks(hooks);
};
