const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');
const serve = require('koa-static');

const app = new Koa();
const router = new Router();

router
  .get('/stores', (ctx) => {
    ctx.body = [
      { id: 1, name: 'Cocos' },
      { id: 2, name: 'Chatime' },
      { id: 3, name: 'Sharetea' },
    ];
  })
  .get('/stores/:id', (ctx) => {
    ctx.body = {
      base: 50,
      toppings: 10,
    };
  })
  .get('/stores/:store_id/base/:id', (ctx) => {
    ctx.body = 'Jasmine Green Milk Tea';
  })
  .get('/stores/:store_id/toppings/:id', (ctx) => {
    ctx.body = 'Pearls';
  });

app
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods());

if (process.env.NODE_ENV === 'production') {
  app.use(serve(__dirname + '/dist'));
}

app.listen(process.env.PORT || 3000);
