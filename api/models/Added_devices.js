/**
* Added_devices.js
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
   UserID: {
		type: 'integer'
	},
   IPAddress: {
		type: 'string'
	},
   ElementName: {
		type: 'string'
	},
   Description: {
		type: 'integer'
	},
   Suite: {
		type: 'string'
	},
   City: {
		type: 'string'
	},
   Country: {
		type: 'string'
	},
   Latitude: {
		type: 'string'
	},
   Street: {
		type: 'integer'
	},
    State: {
		type: 'string'
	},
    Zip: {
		type: 'string'
	},
    Longitute: {
		type: 'string'
	},
    createdon: {
		type: 'datetime'
	},
    siteID: {
		type: 'integer'
	},
    subsiteID: {
		type: 'integer'
	},
    DeviceID: {
		type: 'integer'
	}
  }
};

