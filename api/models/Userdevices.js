/**
* Userdevices.js
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
   id: {
		type: 'integer',
		primaryKey: true,
		autoIncrement: true
	},
   customerid: {
     type: 'integer'  
   },
   udid: {
		type: 'string'
	},
   siteID: {
		type: 'integer'
	},
   status: {
		type: 'string'
	}
  }
};

