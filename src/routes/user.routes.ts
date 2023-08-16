const router = require('koa-router');
const user = router();


user.get('/user', async (ctx: any) => {
    ctx.body = {
        "nome": "Mikael",
        "sobrenome": "Muniz Ribeiro"
    };
})

export default user;
