/**
 * Created by Livia on 2015/12/10.
 */
var Waterline = require('waterline');
var mysqlAdapter = require('sails-mysql');


// models
var User = require('../api/models/User');

var orm = new Waterline();
var wlconfig = {
    adapters: {
        'default': mysqlAdapter,
        mysql: mysqlAdapter
    },
    connections: {
        'mysql': {
            adapter: 'mysql',
            host: 'localhost',
            user: 'root',
            password: '123456',
            chartset:'utf8',
            database:'nodesample'
        }
    }
};
orm.loadCollection(User);

exports.orm = orm;
exports.config = wlconfig;
