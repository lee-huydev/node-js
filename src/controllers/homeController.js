class HomesController {
    // [GET] path: /home
    index(req, res) {
        res.render('home', {layout: "main"})
    }
    // [GET] path: /home/:slug
    show(req, res) {
        res.send('Home details')
    }
}

module.exports = new HomesController