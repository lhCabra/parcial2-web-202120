var express = require('express');
var router = express.Router();
const product = require('../controllers/product.js');
/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */
router.get('/', function (req, res, next) {
  res.send(
    product.getProducts(req.param('q'))
  );
});

module.exports = router;
