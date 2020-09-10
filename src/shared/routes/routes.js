const { HermodrRoutes } = require("../sources/hermodr-cmd-express");
const systemInfo = require("../../modules/system/routes/systemInfo");

const { e404, e500 } = require("../../modules/system/routes/errors");

module.exports = (app) => {

    // static sample ====> app.use('/static', express.static('src/app/public'));

    app.use(HermodrRoutes);
    app.use(systemInfo);

    // always set up errors at the end
    app.use(e404);
    app.use(e500);

}