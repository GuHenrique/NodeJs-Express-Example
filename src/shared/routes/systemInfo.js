const {
    Router
} = require('express');
const routes = Router();

const { formattedDateTime, aliveAtBySeconds } = require("../sources/dateFormatter");

routes.get('/status', async (req, res) => {

    var status = {};

    status.serverName = process.argv[2];
    status.date = formattedDateTime(new Date());
    status.aliveAtms = process.uptime();
    status.aliveAt = aliveAtBySeconds(status.aliveAtms)
    status.nodeVersion = `${process.versions.node} - ${process.release.lts}`;

    return res.json(status);
});

module.exports = routes;