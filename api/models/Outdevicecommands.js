/**
* Outdevicecommands.js
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
   commandid: {
		type: 'integer',
		primaryKey: true,
		autoIncrement: true
	 },
  RS232: {
		type: 'string'
	},
  Baud: {
		type: 'string'
	},
  Parity: {
		type: 'string'
	},
  StartBit: {
		type: 'string'
	},
  StopBit: {
		type: 'string'
	},
  carriagereturn: {
		type: 'string'
	},
  LineFeed: {
		type: 'string'
	},
  IR: {
		type: 'string'
	},
  IP: {
		type: 'string'
	},
  PJLINK: {
		type: 'string'
	},
  MenuON: {
		type: 'string'
	},
  up: {
		type: 'string'
	},
  down: {
		type: 'string'
	},
  right: {
		type: 'string'
	},
  left: {
		type: 'string'
	},
  Enter: {
		type: 'string'
	},
  MenuOFF: {
		type: 'string'
	},
  computer1: {
		type: 'string'
	},
  computer2: {
		type: 'string'
	},
  video1: {
		type: 'string'
	},
  HDEMI1: {
		type: 'string'
	},
  VolumePlus: {
		type: 'string'
	},
  Volumeminus: {
		type: 'string'
	},
  MuteOn: {
		type: 'string'
	},
  PowerOn: {
		type: 'string'
	},
  PowerOff: {
		type: 'string'
	},
  HEXASCII: {
		type: 'string'
	},
  OutDeviceID: {
		type: 'string'
	},
  MuteOff: {
		type: 'string'
	},
  HDMI1: {
		type: 'string'
	},
  HDMI2: {
		type: 'string'
	},
  HDMI3: {
		type: 'string'
	},
  Svideo: {
		type: 'string'
	},
  Svideo1: {
		type: 'string'
	},
  'Input1': {
		type: 'string'
	},
  'Input2': {
		type: 'string'
	},
  'Input3': {
		type: 'string'
	},
  'Input4': {
		type: 'string'
	},
  'Zoomin': {
		type: 'string'
	},
  'Zoomout': {
		type: 'string'
	},
  'moutOff': {
		type: 'string'
	},
  'componentvideo': {
		type: 'string'
	},
  'compositevideo': {
		type: 'string'
	},
  'analogRGB': {
		type: 'string'
	},
  'analogRGB1': {
		type: 'string'
	},
  'analogRGB2': {
		type: 'string'
	},
  'digitalRGB': {
		type: 'string'
	},
  'inputswitching': {
		type: 'string'
	},
  'CommandOn': {
		type: 'string'
	}
  } 
};

