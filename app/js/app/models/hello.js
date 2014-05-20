

define(["backbone","app/models/employee"], function(Backbone, helloModel) {

	// Backbone.js Model 

	var helloModel = Backbone.Model.extend({
	    defaults: {
	      firstName: "",
	      lastName: "",
	      position: ""
	    }
	});


	var lukeModel = new helloModel({
	//var lukeModel = Backbone.Model.extend({
    //luke.on("change", function() {
      //console.log("Employee: " + 
      //luke.get("firstName") + " " + luke.get("lastName"));
	     firstName: "Lucas",
	     lastName: "Cotner",
	     position: "Developer"
    });

	return lukeModel;
});


