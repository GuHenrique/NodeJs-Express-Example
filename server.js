const app = require('./src/config/express')

require("./src/config/mongodb");

const { Hermodr } = require("./src/shared/sources/hermodr-cmd-express");

app.listen(3333)
Hermodr.log("server.js", "Server listening in 3333")

//console.log(process.argv);
