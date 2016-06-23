/**
* Sites.js
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
   siteID: {
		type: 'integer',
		primaryKey: true,
		autoIncrement: true
	},
   userID: {
		type: 'integer'
	},
   customerid: {
		type: 'integer'
	},
   sitename: {
		type: 'string'
	},
   deviceID: {
		type: 'integer'
	},
   IP: {
		type: 'string'
	},
   client_id: {
		type: 'integer'
	},
   issubsites: {
		type: 'integer'
	}
  }
};  

