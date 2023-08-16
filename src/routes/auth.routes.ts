const router = require('koa-router');
const user = router();

user.post('/login', async (ctx: any) => {
    const { username, password } = ctx.request.body;

    if (username && password) ctx.body = "authenticated";
});

export default user;
