const app = require('./config/express')

require("./config/mongodb");

const { Hermodr } = require("./shared/sources/hermodr-cmd-express");

app.listen(3333)
Hermodr.log("server.js", "Server listening in 3333")

//console.log(process.argv);
