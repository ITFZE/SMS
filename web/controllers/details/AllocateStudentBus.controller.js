sap.ui.define([
    'com/app/sms/controllers/BaseController',
    'sap/ui/model/json/JSONModel'
], function(BaseController,JSONModel) {
	"use strict";
	return BaseController.extend("com.app.sms.controllers.details.AllocateStudentBus", {
		onInit: function(oEvent) {
		    var oRouter = this.getRouter();
            oRouter.getRoute("AllocateStudentBus").attachMatched(this._onRouteMatched, this);
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			///Here View ID's
			var asbModel = new JSONModel();
			this.getView().setModel(asbModel,"ASBModel");
			    this.Year =  this.getView().byId("Year");
				this.BusNumber =  this.getView().byId("BusNumber");
				this.Route =  this.getView().byId("Route");
		},
		_onRouteMatched: function() {
           var asbModel = this.getView().getModel("ASBModel");
           asbModel.setProperty("Year","");
           asbModel.setProperty("BusNumber","");
           asbModel.setProperty("VehicleType","");
           asbModel.setProperty("NoOfSeats","");
           asbModel.setProperty("Route","");
           asbModel.setProperty("Driver","");
           asbModel.setProperty("DriverName","");
           asbModel.setProperty("Supervisor","");
           asbModel.setProperty("SupervisorName","");
			this.getView().setModel(asbModel,"ASBModel");
		},
	
		onSaveASB: function() {
		var that = this;
			if (that.Year.getSelectedKey() === "" || that.Year.getSelectedKey() === "Select Year") {
				that.Year.setValueState("Error");
			} else if (that.BusNumber.getValue() === "") {
				that.Year.setValueState("None");
				that.BusNumber.setValueState("Error");
			} else if (that.Route.getSelectedKey() === "" || that.Route.getSelectedKey() === "Select Description in Arabic") {
				that.BusNumber.setValueState("None");
				that.Route.setValueState("Error");
			} else {
				that.Year.setValueState("None");
				that.BusNumber.setValueState("None");
				that.Route.setValueState("None");
			}
		},
// 		onPressSearch: function(){
		    
// 		},
		onCancelASB: function(){
		  var that = this;
		  that.Year.setValue.setValue("Select Year");
		  that.BusNumber.setValue(" ");
		  that.Route.setValue("Select Description in Arabic");
		}
			
	});
});