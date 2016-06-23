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
   subsiteID: {
		type: 'integer',
		primaryKey: true,
		autoIncrement: true
	},
   subsitename: {
		type: 'string'
	},
   parentID: {
		type: 'integer'
	},
   deviceID: {
		type: 'integer'
	},
   IP: {
		type: 'string'
	},
   userid: {
		type: 'integer'
	}
  }
};  

