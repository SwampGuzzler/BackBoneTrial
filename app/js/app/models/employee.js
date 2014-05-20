

define(["backbone"], function(Backbone) {

	var EmployeeModel = Backbone.Model.extend({
	    defaults: {
	      firstName: "",
	      lastName: "",
	      position: "Customer Service"
	    }
  	});

	return EmployeeModel;
});
