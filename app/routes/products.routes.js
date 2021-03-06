const controller = require("../controllers/products.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/v1/api/products", controller.getProducts);
  app.get("/v1/api/product/:id", controller.getProductDetail);
};