/**
* Customers.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
schema:'true',
autoCreatedAt: false,
autoPK: false,
autoUpdatedAt: false,
  attributes: {
   customerid: {
		type: 'integer',
		primaryKey: true,
		autoIncrement: true
	},
   UDID: {
		type: 'string'
	},
   siteID: {
		type: 'integer'
	},
   username: {
		type: 'string'
	},
   password: {
		type: 'string'
	},
   token: {
		type: 'string'
	},
   status: {
		type: 'string'
	}
  }
};

