sap.ui.define([
    'com/app/sms/controllers/BaseController'
], function(BaseController) {
	"use strict";
	return BaseController.extend("com.app.sms.controllers.details.create.AssignStudentRouteDetails", {
		onInit: function() {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		},
		onBackAssignStudentRoute: function() {
			this.getRouter().navTo("SearchAssignStudentRoute");
		}
	});
});