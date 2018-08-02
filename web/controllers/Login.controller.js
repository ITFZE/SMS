sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel'
], function(jQuery, Controller, JSONModel) {
	"use strict";
	return Controller.extend("com.app.sms.controllers.login", {
		onInit: function() {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			this.val_Username = this.getView().byId("val_Username");
			this.pwd_Password = this.getView().byId("pwd_Password");
		},
		onAfterRendering: function() {
			var view = this.getView();
			view.addDelegate({
				onsapenter: function(e) {
					view.getController().onSubmit();
				}
			});
		},	
		onSubmit: function(){
		    var that = this;
		    if(!that.val_Username.getValue()){
		        that.val_Username.setValueState("Error");
		    }else if(!this.pwd_Password.getValue()){
		        that.val_Username.setValueState("None");
		        this.pwd_Password.setValueState("Error");
		    }else{
		        this.pwd_Password.setValueState("None");
		      	this.getOwnerComponent().getRouter().navTo("DashBoard");  
		    }
		}

	});

});