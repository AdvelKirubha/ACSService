var utilController = require('../ControllerUtils/UtilController.js');

var self = module.exports = {
    
ValidateUser : function(callback,req,res){
    Customers.find({"token":req.body.token,"status":"Active"}).exec(function (err,user){
        callback(err,user,req,res);
    });
},

getUsr : function (err,usr,req,res){
       if(err){
				utilController.LogError('3','MobileSyncController/userdevices','getUsr',err);
				res.send({"ResponseCode":"99","Message":"Internal Server Error, please contact the admin Mobile Number:" + sails.EMNO});
			  }
		else {
				if(usr.length > 0) {
                    self.ValidateDevice(usr,req,res); 
				}
				else {
						res.send({"ResponseCode":"101","Message":"Invalid user"});
				}
		}
 },
 ValidateDevice: function(usr,req,res) {
     
     Userdevices.find({"customerid": usr[0].customerid,"status":"Active"}).exec(function (err,devices){
        if(devices.length > 0) {
            self.getUserDevices(req,res); 
        }
        else {
            res.send({"ResponseCode":"101","Message":"Invalid user"});
        }
        
    });
      
 },
 getUserDevices: function(req,res) {
     
     if(req.body.issubsite == 1) {
         Deviceconfig.find({"subsiteID": req.body.siteid}).exec(function (err,devices){
            res.send(devices);
         });
     }
     else {
         Deviceconfig.find({"siteID": req.body.siteid}).exec(function (err,devices){
            res.send(devices);
         });
     }
     
 }
 
}