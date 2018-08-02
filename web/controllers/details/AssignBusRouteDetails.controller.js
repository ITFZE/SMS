sap.ui.define([
   'com/app/sms/controllers/BaseController'
], function(BaseController) {
	"use strict";
	return BaseController.extend("com.app.sms.controllers.masters.AssignBusRouteDetails", {
		onInit: function() {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			this._masterSeacrhFiled = this.getView().byId("onSearchAreaMaster");
			// Call the id's
			this._noYear = this.getView().byId("noYear");
			this._noBusNo = this.getView().byId("noBusNo");
			this._typeBusType = this.getView().byId("typeBusType");
			this._typeVeh = this.getView().byId("typeVeh");
			this._noSeats = this.getView().byId("noSeats");
			this._txtRoute = this.getView().byId("txtRoute");
			this._txtDriver = this.getView().byId("txtDriver");
			this._txtSupervisor = this.getView().byId("txtSupervisor");
			this._txtDriverName = this.getView().byId("txtDriverName");
			this._txtSupervisorName = this.getView().byId("txtSupervisorName");
			this._txtDriverArabicName = this.getView().byId("txtDriverArabicName");
			this._txtSupervisorArabicName = this.getView().byId("txtSupervisorArabicName");
		},
		onBackAssignBusRoute: function() {
			this.getRouter().navTo("DashBoard");
			this._masterSeacrhFiled.setValue("");
		},
		onPressAssignBusRouteSave: function() {
			var that = this;
			if (!that._noYear.getValue()) {
				that._noYear.setValueState("Error");
			} else if (!that._noBusNo.getValue()) {
				that._noYear.setValueState("None");
				that._noBusNo.setValueState("Error");
			} else if (!that._typeBusType.getValue()) {
				that._noBusNo.setValueState("None");
				that._typeBusType.setValueState("Error");
			} else if (!that._typeVeh.getValue()) {
				that._typeBusType.setValueState("None");
				that._typeVeh.setValueState("Error");
			} else if (!that._noSeats.getValue()) {
				that._typeVeh.setValueState("None");
				that._noSeats.setValueState("Error");
			} else if (!that._txtRoute.getValue()) {
				that._noSeats.setValueState("None");
				that._txtRoute.setValueState("Error");
			} else if (!that._txtDriver.getValue()) {
				that._txtRoute.setValueState("None");
				that._txtDriver.setValueState("Error");
			} else if (!that._txtSupervisor.getValue()) {
				that._txtDriver.setValueState("None");
				that._txtSupervisor.setValueState("Error");
			} else if (!that._txtDriverArabicName.getValue()) {
				that._txtSupervisor.setValueState("None");
				that._txtDriverArabicName.setValueState("Error");
			} else if (!that._txtDriverName.getValue()) {
				that._txtDriverArabicName.setValueState("None");
				that._txtDriverName.setValueState("Error");
			} else if (!that._txtSupervisorArabicName.getValue()) {
				that._txtDriverName.setValueState("None");
				that._txtSupervisorArabicName.setValueState("Error");
			} else if (!that._txtSupervisorName.getValue()) {
				that._txtSupervisorArabicName.setValueState("None");
				that._txtSupervisorName.setValueState("Error");
			} else {
				that._noYear.setValueState("None");
				that._noBusNo.setValueState("None");
				that._typeBusType.setValueState("None");
				that._typeVeh.setValueState("None");
				that._noSeats.setValueState("None");
				that._txtRoute.setValueState("None");
				that._txtDriver.setValueState("None");
				that._txtSupervisor.setValueState("None");
				that._txtDriverName.setValueState("None");
				that._txtSupervisorName.setValueState("None");
				that._txtDriverArabicName.setValueState("None");
				that._txtSupervisorArabicName.setValueState("None");
			}
		},
		onPressAssignBusRouteCancel: function() {
			var that = this;
			that._noYear.setValueState("None");
			that._noBusNo.setValueState("None");
			that._typeBusType.setValueState("None");
			that._typeVeh.setValueState("None");
			that._noSeats.setValueState("None");
			that._txtRoute.setValueState("None");
			that._txtDriver.setValueState("None");
			that._txtSupervisor.setValueState("None");
			that._txtDriverName.setValueState("None");
			that._txtSupervisorName.setValueState("None");
			that._txtDriverArabicName.setValueState("None");
			that._txtSupervisorArabicName.setValueState("None");
			that._noYear.setValue("");
			that._noBusNo.setValue("");
			that._typeBusType.setValue("");
			that._typeVeh.setValue("");
			that._noSeats.setValue("");
			that._txtRoute.setValue("");
			that._txtDriver.setValue("");
			that._txtSupervisor.setValue("");
			that._txtDriverName.setValue("");
			that._txtSupervisorName.setValue("");
			that._txtDriverArabicName.setValue("");
			that._txtSupervisorArabicName.setValue("");
		}
	});
});