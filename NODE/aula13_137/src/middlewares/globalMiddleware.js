// middleware que vai ser executado antes de toda requisição de todas as rotas

module.exports = (req, res, next) => {
    console.log('\nMiddleware global\n');
    next()
};