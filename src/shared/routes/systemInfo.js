const {
    Router
} = require('express');
const routes = Router();

const { formattedDateTime } = require("../sources/dateFormatter");

routes.get('/status', async (req, res) => {

    var status = {};

    status.name = 'NAME SERVER HOW IDNK'
    status.aliveAtms = process.uptime();
    status.date = formattedDateTime(new Date());
    status.nodeSourceUrl = process.release.sourceUrl;
    status.nodeCodename = process.release.lts;

    return res.json(status);
});

module.exports = routes;