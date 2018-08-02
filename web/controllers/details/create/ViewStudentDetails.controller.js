sap.ui.define([
    'com/app/sms/controllers/BaseController'
], function(BaseController) {
	"use strict";
	return BaseController.extend("com.app.sms.controllers.details.create.ViewStudentDetails", {
		onInit: function() {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		},
		onBack: function() {
			this.getRouter().navTo("SearchStudentMaster");
		},
		onBeforeRendering: function() {
			//alert("onExit");
		}
	});
});