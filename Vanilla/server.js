const serve = require('koa-static');
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

app.use(serve('./pattern'));
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000, () => {
  console.log('test server is listening to port 4000');
});
