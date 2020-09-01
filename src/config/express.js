const express = require("express");
const app = express();

app.use(express.json());

const { HermodrRoutes} = require("../shared/sources/hermodr-cmd-express");
const systemInfo = require("../shared/routes/systemInfo");


app.use(HermodrRoutes);
app.use(systemInfo);


module.exports = app;