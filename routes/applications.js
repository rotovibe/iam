var express = require('express');
var appRouter = express.Router();
var appFeature = require('../models/applicationFeature');
var app = require('../models/application');

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


// application features extension
// nest routing middleware
var featureRouter = express.Router({ mergeParams: true });
appRouter.use('/:appId/features', featureRouter);

featureRouter.get('/', (req, res, next) => {
    if (req.params.appId) {
        appFeature.getAllApplicationFeaturesForAppId(req.params.appId, (err, rows) => {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        appFeature.getAllApplicationFeatures((err, rows) => {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

module.exports = appRouter;