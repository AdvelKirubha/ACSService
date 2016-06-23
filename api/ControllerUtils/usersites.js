var utilController = require('../ControllerUtils/UtilController.js');

var self = module.exports = {
    
ValidateUser : function(callback,req,res){
    Customers.find({"token":req.body.token,"status":"Active"}).exec(function (err,user){
        callback(err,user,req,res);
    });
},

getUsr : function (err,usr,req,res){
       if(err){
				utilController.LogError('3','MobileSyncController/usersites','getUsr',err);
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
            self.getUsersites(req,res); 
        }
        else {
            res.send({"ResponseCode":"101","Message":"Invalid user"});
        }
        
    });
      
 },
 getUsersites: function(req,res) {
     Sites.find({"customerid": req.body.customerid}).exec(function (err,sites){
         res.send(sites);
     });
 }
}