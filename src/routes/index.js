const homeRouter = require('./home.router')

const routes = (app) => {
    app.use("/home", homeRouter)
}

module.exports = routes