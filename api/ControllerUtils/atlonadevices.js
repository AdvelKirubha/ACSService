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
            self.getAtlonaDevices(req,res); 
        }
        else {
            res.send({"ResponseCode":"101","Message":"Invalid user"});
        }
        
    });
      
 },
 getAtlonaDevices: function(req,res) {
     var query = 'SELECT * FROM tree_view1 where siteID =' + req.body.siteid + ' AND subsiteID =' + req.body.subsiteid + ' AND DeviceID != 0';
     tree_view1.query(query, function(err, results) {
             if (err) return res.serverError(err);
             res.send(results);
    });
     
    // tree_view1.find({"siteID": req.body.siteid, "subsiteID": req.body.subsiteid, "DeviceID": }).exec(function (err,devices){
    //      res.send(devices);
    // });
 
 }
 
}