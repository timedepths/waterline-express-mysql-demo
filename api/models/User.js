/**
 * Created by Livia on 2015/12/10.
 */
var Waterline = require('waterline');
module.exports = Waterline.Collection.extend({

    identity: 'user',
    connection: 'mysql',

    attributes: {
        ID: {
            type: 'integer',
            primaryKey:true,
        },

        Name: {
            type: 'string'
        },

        Password: {
            type: 'string'
        }
    }
});