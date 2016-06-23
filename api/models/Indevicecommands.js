/**
* Indevicecommands.js
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
   CommandID: {
		type: 'integer',
		primaryKey: true,
		autoIncrement: true
	 },
  InDeviceID: {
		type: 'integer'
	},
  PowerOn: {
		type: 'string'
	},
  PowerOff: {
		type: 'string'
	},
  MenuOn: {
		type: 'string'
	},
  MenuOff: {
		type: 'string'
	},
  Up: {
		type: 'string'
	},
  Down: {
		type: 'string'
	},
  Right: {
		type: 'string'
	},
  Left: {
		type: 'string'
	},
  Enter: {
		type: 'string'
	},
  Zoomin: {
		type: 'string'
	},
  Zoomout: {
		type: 'string'
	},
  MuteOn: {
		type: 'string'
	},
  MuteOff: {
		type: 'string'
	},
  VolumePlus: {
		type: 'string'
	},
  Volumeminus: {
		type: 'string'
	},
  Computer1: {
		type: 'string'
	},
  Computer2: {
		type: 'string'
	},
  Video1: {
		type: 'string'
	},
  SVideo1: {
		type: 'string'
	},
  CompositeVideo: {
		type: 'string'
	},
  ComponentVideo: {
		type: 'string'
	},
  AnalogRGB: {
		type: 'string'
	},
  DigitalRGB: {
		type: 'string'
	},
  Input1: {
		type: 'string'
	},
  Input2: {
		type: 'string'
	},
  Input3: {
		type: 'string'
	},
  Input4: {
		type: 'string'
	},
  HDMI1: {
		type: 'string'
	},
  HDMI2: {
		type: 'string'
	},
  Bauderate: {
		type: 'string'
	},
  Termination: {
		type: 'string'
	},
  HEXASCII: {
		type: 'string'
	},
  Baud: {
		type: 'string'
	},
  carriagereturn: {
		type: 'string'
	},
  LineFeed: {
		type: 'string'
	}
  } 
};

