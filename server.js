const app = require('./src/config/express')

require("./src/config/mongodb");

const { Hermodr } = require("./src/shared/sources/hermodr-cmd-express");

app.listen(3333)
Hermodr.log("server.js", `${process.argv[2]} server is listening on port 3333`)
