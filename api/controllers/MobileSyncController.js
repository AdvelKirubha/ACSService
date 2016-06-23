/**
 * MobileSyncController
 *
 * @description :: Server-side logic for managing Mobilesyncs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var utilController = require('../ControllerUtils/UtilController.js');
var loginController = require('../ControllerUtils/userlogin.js');
var sitesController = require('../ControllerUtils/usersites.js');
var subsitesController = require('../ControllerUtils/usersubsites.js');
var userdevicesController = require('../ControllerUtils/userdevices.js');
var devicecommandsController = require('../ControllerUtils/devicecommands.js');
var atlonadevicesController = require('../ControllerUtils/atlonadevices.js');

module.exports = {
	Login : function(request,response) {
         try {
             if(request.headers.apikey == sails.APIKEY) {
                if(request.body['username'] != undefined && request.body['username'] != "" && request.body['password'] != undefined && request.body['password'] != ""){
                    loginController.FindUser(loginController.getUsr,request,response);
                }
                else {
                    response.send({"ResponseCode":"98","Message":"Request Parameter is null"});
                }
             }
             else {
                 response.send({"response":{"id": "002","desc": "Invalid API"}});
             }
         } catch(err) {
            console.log(err);
			utilController.LogError('3','MobileSyncController/Login','Login',err);
			response.send({"ResponseCode":"99","Message":"Internal Server Error, please contact the admin Mobile Number:" + sails.EMNO});
		}
    },
    getSites : function(request,response) {
         try {
             if(request.headers.apikey == sails.APIKEY) {
				if(request.body['token'] != undefined && request.body['token'] != "" && request.body['customerid'] != undefined && request.body['customerid'] != ""){
                    sitesController.ValidateUser(sitesController.getUsr,request,response);
                }
                else {
                    response.send({"ResponseCode":"98","Message":"Request Parameter is null"});
                }
             }
             else {
                 response.send({"response":{"id": "002","desc": "Invalid API"}});
             }
         } catch(err) {
            console.log(err);
			utilController.LogError('3','MobileSyncController/getSites','getSites',err);
			response.send({"ResponseCode":"99","Message":"Internal Server Error, please contact the admin Mobile Number:" + sails.EMNO});
		}
    },
    getSubSites : function(request,response) {
         try {
             if(request.headers.apikey == sails.APIKEY) {
				if(request.body['token'] != undefined && request.body['token'] != "" && request.body['siteid'] != undefined && request.body['siteid'] != ""){
                    subsitesController.ValidateUser(subsitesController.getUsr,request,response);
                }
                else {
                    response.send({"ResponseCode":"98","Message":"Request Parameter is null"});
                }
             }
             else {
                 response.send({"response":{"id": "002","desc": "Invalid API"}});
             }
         } catch(err) {
            console.log(err);
			utilController.LogError('3','MobileSyncController/getSubSites','getSubSites',err);
			response.send({"ResponseCode":"99","Message":"Internal Server Error, please contact the admin Mobile Number:" + sails.EMNO});
		}
    },
    getDevices : function(request,response) {
         try {
             if(request.headers.apikey == sails.APIKEY) {
				if(request.body['token'] != undefined && request.body['token'] != "" && request.body['siteid'] != undefined && request.body['siteid'] != "" && request.body['issubsite'] != undefined && request.body['issubsite'] != ""){
                    userdevicesController.ValidateUser(userdevicesController.getUsr,request,response);
                }
                else {
                    response.send({"ResponseCode":"98","Message":"Request Parameter is null"});
                }
             }
             else {
                 response.send({"response":{"id": "002","desc": "Invalid API"}});
             }
         } catch(err) {
            console.log(err);
			utilController.LogError('3','MobileSyncController/getDevices','getDevices',err);
			response.send({"ResponseCode":"99","Message":"Internal Server Error, please contact the admin Mobile Number:" + sails.EMNO});
		}
    },
    getAtlonaDevices : function(request,response) {
         try {
             if(request.headers.apikey == sails.APIKEY) {
				if(request.body['token'] != undefined && request.body['token'] != "" && request.body['siteid'] != undefined && request.body['siteid'] != "" && request.body['subsiteid'] != undefined && request.body['subsiteid'] != ""){
                    atlonadevicesController.ValidateUser(atlonadevicesController.getUsr,request,response);
                }
                else {
                    response.send({"ResponseCode":"98","Message":"Request Parameter is null"});
                }
             }
             else {
                 response.send({"response":{"id": "002","desc": "Invalid API"}});
             }
         } catch(err) {
            console.log(err);
			utilController.LogError('3','MobileSyncController/getDevices','getDevices',err);
			response.send({"ResponseCode":"99","Message":"Internal Server Error, please contact the admin Mobile Number:" + sails.EMNO});
		}
    },
    getCommands : function(request,response) {
         try {
             if(request.headers.apikey == sails.APIKEY) {
				if(request.body['token'] != undefined && request.body['token'] != "" && request.body['deviceid'] != undefined && request.body['deviceid'] != "" && request.body['isinput'] != undefined && request.body['isinput'] != ""){
                    devicecommandsController.ValidateUser(devicecommandsController.getUsr,request,response);
                }
                else {
                    response.send({"ResponseCode":"98","Message":"Request Parameter is null"});
                }
             }
             else {
                 response.send({"response":{"id": "002","desc": "Invalid API"}});
             }
         } catch(err) {
            console.log(err);
			utilController.LogError('3','MobileSyncController/getCommands','getCommands',err);
			response.send({"ResponseCode":"99","Message":"Internal Server Error, please contact the admin Mobile Number:" + sails.EMNO});
		}
    }
};

