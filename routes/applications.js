var express = require('express');
var appRouter = express.Router();
var appFeature = require('../models/applicationFeature');
var app = require('../models/application');
var fRouter = require('../routes/features');

// application
appRouter.get('/:appId?', (req, res, next) => {
    if (req.params.appId) {
        app.getAllApplicationByAppId(req.params.appId, (err, rows) => {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        app.getAllApplications((err, rows) => {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

// extend to accomidate hierachical routing.
// "applications have features"
appRouter.use('/:appId/features', fRouter);

module.exports = appRouter;