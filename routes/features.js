var express = require('express');
var featureRouter = express.Router({ mergeParams: true });
var appFeature = require('../models/applicationFeature');


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

module.exports = featureRouter;