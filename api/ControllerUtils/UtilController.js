    /**
 * UtilController
 *
 * @description :: Server-side logic for managing utils
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

self = module.exports = {
	
LogError : function(Position, Controller, Action, Message){
		Error_logs.create({position: Position, controller:Controller, action: Action, message: Message}).exec(function createCB(err, created){
  			console.log('Error : ' + JSON.stringify(created));
		});
	}
    
};