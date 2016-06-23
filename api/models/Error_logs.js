/**
* Error_logs.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
autoCreatedAt: false,
autoPK: false,
autoUpdatedAt: false,
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
     position: {
	     	type: 'string'
	   }, 
	   controller: {
	     	type: 'string'
	   }, 
	   action: {
	   	 type: 'string'
	   },
	    message: {
	     	type: 'string'
	    }
  }
};

