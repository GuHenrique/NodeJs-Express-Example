const express = require('express');
const app = express();

require('./config/mongodb');

const { Hermodr, HermodrRoutes} = require('./shared/sources/hermodr-cmd-express');

const systemInfo = require("./shared/routes/systemInfo");

app.use(express.json());
app.use(HermodrRoutes);
app.use(systemInfo);


app.listen(3333)
Hermodr.log("server.js", "Server listening in 3333")

//console.log(process.argv);
