const express = require('express');
const logger = require('morgan');
const { engine } = require('express-handlebars');
const liveReload = require("livereload")
const connectLiveReload = require("connect-livereload")
const path = require('path');
const routes = require('./routes')
const port = 5000;
// init app with express
const app = express();
// Logger method HTTP in terminal
app.use(logger('tiny'));
// Static path when use file static
app.use(express.static(path.join(__dirname, "public")))
// Middleware convert json
app.use(express.json())
// Middelware form-data 'body-parser'
app.use(express.urlencoded({extended: true}))
// Template engine
const config = {
    extname: ".hbs"
}
app.engine('hbs', engine(config));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
// Auto refesh the browser on changes css and hbs
const liveReloadServer = liveReload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 50);
});
app.use(connectLiveReload())
// Routes init
routes(app)
// Listen at port 5000
app.listen(port, () =>
   console.log('Server is running at https://localhost:5000')
);

