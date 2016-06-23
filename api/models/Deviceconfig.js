/**
* Deviceconfig.js
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
   deviceconfigid: {
		type: 'integer',
		primaryKey: true,
		autoIncrement: true
	},
   Userid: {
		type: 'integer'
	},
   DeviceID: {
		type: 'string'
	},
   inputoutputtype: {
		type: 'string'
	},
   device: {
		type: 'integer'
	},
   brand: {
		type: 'string'
	},
   model: {
		type: 'string'
	},
   protocol: {
		type: 'string'
	},
   controldevice: {
		type: 'string'
	},
   iodeviceid: {
		type: 'integer'
	},
    devicename: {
		type: 'string'
	},
    currentrowid: {
		type: 'string'
	},
    currentinput: {
		type: 'string'
	},
    portnumber: {
		type: 'string'
	},
    isactive: {
		type: 'string'
	},
    createdon: {
		type: 'datetime'
	},
    modifiedon: {
		type: 'datetime'
	},
    siteID: {
		type: 'integer'
	},
    isdiv: {
		type: 'integer'
	},
    devicenumber: {
		type: 'integer'
	}
  }
};

