var db = require('../dbconnection');

var application = {
    getAllApplicationByAppId: (id, callback) => {
        return db.query("select * from `applications` where `application-id` = ?", [id], callback);
    },
    getAllApplications: (callback) => {
        return db.query("select * from applications", callback);
    }
};

module.exports = application;