const express = require('express');

const router = express.Router();

// middleware

const { authCheck, adminCheck } = require('../middlewares/auth');

// controller
const {
  create,
  listAll,
  remove,
  read,
  update,
  list,
  productsCount,
} = require('../controllers/product');

//we need to verify that the token provided by the frontend is valid, we'll do so by validating with
//firebase admin, so we'll set a middleware that will be set between the post endpoint and the post controller,
//by doing so we can be sure that no action will be taken without being sure that we got a valid token

//endpoints
router.post('/product', authCheck, adminCheck, create);
router.get('/products/total', productsCount);
router.get('/products/:count', listAll);

router.delete('/product/:slug', authCheck, adminCheck, remove);
router.get('/product/:slug', read);
router.put('/product/:slug', authCheck, adminCheck, update);

router.post('/products', list);

module.exports = router;
