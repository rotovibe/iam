var db = require('../dbconnection');

var applicationFeature = {
    getAllApplicationFeaturesForAppId: (id, callback) => {
        return db.query("SELECT  \
                            `apps`.`application-name`, `application-feature-name`, `application-feature-url`  \
                        FROM  \
                            `application-features` as features  INNER JOIN  \
                            `applications` as apps  \
                        WHERE  `apps`.`application-id` = ?", [id], callback);
    },
    getAllApplicationFeatures: (callback) => {
        return db.query("SELECT  \
                            `apps`.`application-name`, `application-feature-name`, `application-feature-url`  \
                        FROM  \
                            `application-features` as features  INNER JOIN  \
                            `applications` as apps", callback);
    }
};

module.exports = applicationFeature;