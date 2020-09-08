const express = require("express");
const app = express();
const { e404, e500 } = require("../shared/routes/errors");

app.use(express.json());

const { HermodrRoutes} = require("../shared/sources/hermodr-cmd-express");
const systemInfo = require("../shared/routes/systemInfo");

// static sample ====> app.use('/static', express.static('src/app/public'));
app.use(HermodrRoutes);
app.use(systemInfo);

// always set up errors at the end
app.use(e404);
app.use(e500);

module.exports = app;
