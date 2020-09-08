const {
    Router
} = require('express');
const routes = Router();

const { formattedDateTime, aliveAtBySeconds } = require("../sources/dateFormatter");

routes.get('/status', async (req, res) => {

    var status = {};

    status.name = process.argv[2];
    status.aliveAtms = process.uptime();
    status.aliveAt = aliveAtBySeconds(status.aliveAtms)
    status.date = formattedDateTime(new Date());
    status.nodeSourceUrl = process.release.sourceUrl;
    status.nodeCodename = process.release.lts;
    status.nodeVersion = process.versions.node;

    return res.json(status);
});

module.exports = routes;