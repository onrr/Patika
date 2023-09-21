const Koa = require('koa');
const app = new Koa();

const port = 3000

app.use(async ctx => {
  if (ctx.path === '/') ctx.body = "<h1> ANASAYFA'ya Hosgeldiniz"
  else if (ctx.path === '/hakkimda') ctx.body = "<h1> HAKKIMDA Sayfasina Hosgeldiniz"
  else if (ctx.path === '/iletisim') ctx.body = "<h1> ILETISIM Sayfasina Hosgeldiniz"
  else ctx.body = "<h1> 404 - Sayfa Bulunamadı </h1>"

  console.log(`${ctx.path}'ye istek atıldı`)
});

app.listen(port, () => {
    console.log(`${port}'nolu port çalışmakta.. `);
});