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
    const res = await client.query('SELECT * FROM shops');
    ctx.body = res.rows;
  })
  .get('/stores/:id', async (ctx) => {
    const base = await client.query('SELECT COUNT(*) FROM bases WHERE shop_id = $1', [ctx.params.id]);
    const toppings = await client.query('SELECT COUNT(*) FROM toppings WHERE shop_id = $1', [ctx.params.id]);
    ctx.body = {
      base: base.rows[0].count,
      toppings: toppings.rows[0].count,
    };
  })
  .get('/stores/:shop_id/bases', async (ctx) => {
    const res = await client.query('SELECT name FROM bases WHERE shop_id = $2', [ctx.params.id, ctx.params.shop_id]);
    ctx.body = res.rows;
  })
  .get('/stores/:shop_id/bases/:id', async (ctx) => {
    const res = await client.query('SELECT name FROM bases WHERE id = $1 AND shop_id = $2', [ctx.params.id, ctx.params.shop_id]);
    ctx.body = { name: res.rows[0].name } ;
  })
  .get('/stores/:shop_id/toppings/:id', async (ctx) => {
    const res = await client.query('SELECT name FROM toppings WHERE id = $1 AND shop_id = $2', [ctx.params.id, ctx.params.shop_id]);
    ctx.body = { name: res.rows[0].name };
  });

app
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods());

if (process.env.NODE_ENV === 'production') {
  app.use(serve(__dirname + '/dist'));
}

app.listen(process.env.PORT || 3000);
