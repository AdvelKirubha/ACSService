/**
* tree_view1.js
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
   name: {
		type: 'string'
	},
   parent_id: {
		type: 'integer'
	},
   isdiv: {
		type: 'integer'
	},
   ipaddress: {
		type: 'string'
	},
   siteID: {
		type: 'integer'
	},
   subsiteID: {
		type: 'integer'
	},
   DeviceID: {
		type: 'integer'
	},
   issubsites: {
        type: 'integer'
    }
  }
};

