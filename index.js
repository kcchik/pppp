const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');
const serve = require('koa-static');
const pg = require('pg');

const app = new Koa();
const router = new Router();
const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

async function database() {
  await client.connect();
};
database();

router
  .get('/stores', async (ctx) => {
    const res = await client.query('SELECT name FROM shops');
    ctx.body = res.rows.map((row) => row.name);
    // ctx.body = ['Cocos', 'Chatime'];
  })
  .get('/stores/:id/bases', async (ctx) => {
    const res = await client.query('SELECT name FROM bases WHERE shop_id = $1', [ctx.params.id]);
    ctx.body = res.rows.map((row) => row.name);
    // console.log(ctx.params.id);
    ctx.body = ['Jasmine Green Milk Tea', 'Two Ladies', 'Three Guys', 'Black Tea'];
  })
  .get('/stores/:id/toppings', async (ctx) => {
    const res = await client.query('SELECT name FROM toppings WHERE shop_id = $1', [ctx.params.id]);
    ctx.body = res.rows.map((row) => row.name);
    // ctx.body = ['Pearl', 'Coconut Jelly', 'Coffee Jelly', 'Pudding', 'Grass Jelly'];
  });

app
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods());

if (process.env.NODE_ENV === 'production') {
  app.use(serve(__dirname + '/dist'));
}

app.listen(process.env.PORT || 3000);
