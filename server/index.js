require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/products', (req, res, next) => {
  const allProducts = `
    select "productId",
           "name",
           "price",
           "image",
           "shortDescription"
    from "products"
  `;
  db.query(allProducts)
    .then(result => {
      const products = result.rows;
      res.json(products);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured'
      });
    });
});

app.get('/api/products/:productId', (req, res, next) => {
  const productId = parseInt(req.params.productId, 10);
  const params = [productId];

  const productDetails = `
    select *
    from "products"
    where "productId" = $1
  `;

  db.query(productDetails, params)
    .then(result => {
      const product = result.rows[0];
      if (product) {
        return res.json(product);
      } else {
        return next(new ClientError(`cant find product with productId ${productId}`, 404));
      }
    })
    .catch(err => next(err));
});

// Feature 5
app.get('/api/cart', (req, res, next) => {
  const getCart = `
    select *
    from "carts"
  `;

  db.query(getCart)
    .then(result => {
      const cart = result.rows;
      return res.json(cart);
    })
    .catch(err => next(err));
});

app.post('/api/cart', (req, res, next) => {
  const productId = req.params.productId;
  const params = [productId];

  const sql = `
    select "price"
    from "products"
    where "productsId" = $1
  `;

  if (!Number.isInteger(productId) || productId <= 0) {
    return next(new ClientError('productId must be a positive integer', 404));
  }
  db.query(sql, params)
    .then(result => {
      if (!result.rows) {
        return next(new ClientError('No matches available at this moment', 400));
      } else {
        if (req.session.cartId) {
          return {
            cartId: req.session.cartId,
            price: result.rows[0].price
          };
        } else {
          const addToCart = `
          insert into "carts" ("cartId", "createdAt")
          values (default, default)
          returning "cartId"
          `;
          return db.query(addToCart)
            .then(result1 => {
              return {
                cartId: result1.rows[0].cartId,
                price: result1.rows[0].price
              };
            });
        }
      }
    })
    .then(data => {
      // eslint-disable-next-line no-console
      console.log(data);
    });

});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
