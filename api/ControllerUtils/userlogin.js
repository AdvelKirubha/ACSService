var utilController = require('../ControllerUtils/UtilController.js');

var self = module.exports = {
    
FindUser : function(callback,req,res){
    Customers.find({"username":req.body.username,"password":req.body.password,"status":"Active"}).exec(function (err,user){
        callback(err,user,req,res);
    });
},

getUsr : function (err,usr,req,res){
       if(err){
				utilController.LogError('3','MobileSyncController/Login','getUsr',err);
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
            var token = sails.uuid.v1();
            usr[0].token = token;
            Customers.update({"customerid": usr[0].customerid},usr[0]).exec(function (err,user){
                   res.send(usr[0]);
            });
        }
        else {
            res.send({"ResponseCode":"101","Message":"Invalid user"});
        }
        
    });   
      
     
 }
}