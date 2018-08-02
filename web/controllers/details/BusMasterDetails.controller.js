sap.ui.define([
    "com/app/sms/controllers/BaseController"
], function(BaseController) {
	"use strict";
	return BaseController.extend("com.app.sms.controllers.details.BusMasterDetails", {
		onInit: function() {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			this._noBusNO = this.getView().byId("noBusNO");
			this._rdBusType = this.getView().byId("rdBusType");
			this._noIMEINo = this.getView().byId("noIMEINo");
			this._typeVeh = this.getView().byId("typeVeh");
			this._noEngine = this.getView().byId("noEngine");
			this._noChassis = this.getView().byId("noChassis");
			this._noRegNo = this.getView().byId("noRegNo");
			this._noRegDate = this.getView().byId("noRegDate");
			this._noRegExpDate = this.getView().byId("noRegExpDate");
			this._stINSCompName = this.getView().byId("stINSCompName");
			this._noINSPolicy = this.getView().byId("noINSPolicy");
			this._dateINSExp = this.getView().byId("dateINSExp");
			this._noSeats = this.getView().byId("noSeats");
		},
		onPressBusMasterSave: function() {
			var that = this;
			if (!that._noBusNO.getValue()) {
				that._noBusNO.setValueState("Error");
			} else if (!that._rdBusType.getValue()) {
				that._noBusNO.setValueState("None");
				that._rdBusType.setValueState("Error");
			} else if (!that._noIMEINo.getValue()) {
				that._rdBusType.setValueState("None");
				that._noIMEINo.setValueState("Error");
			} else if (!that._typeVeh.getValue()) {
				that._noIMEINo.setValueState("None");
				that._typeVeh.setValueState("Error");
			} else if (!that._noEngine.getValue()) {
				that._typeVeh.setValueState("None");
				that._noEngine.setValueState("Error");
			} else if (!that._noChassis.getValue()) {
				that._noEngine.setValueState("None");
				that._noChassis.setValueState("Error");
			} else if (!that._noRegNo.getValue()) {
				that._noChassis.setValueState("None");
				that._noRegNo.setValueState("Error");
			} else if (!that._noRegDate.getValue()) {
				that._noRegNo.setValueState("None");
				that._noRegDate.setValueState("Error");
			} else if (!that._noRegExpDate.getValue()) {
				that._noRegDate.setValueState("None");
				that._noRegExpDate.setValueState("Error");
			} else if (!that._stINSCompName.getValue()) {
				that._noRegExpDate.setValueState("None");
				that._stINSCompName.setValueState("Error");
			} else if (!that._noINSPolicy.getValue()) {
				that._stINSCompName.setValueState("None");
				that._noINSPolicy.setValueState("Error");
			} else if (!that._dateINSExp.getValue()) {
				that._noINSPolicy.setValueState("None");
				that._dateINSExp.setValueState("Error");
			} else {
				that._noBusNO.setValueState("None");
				that._rdBusType.setValueState("None");
				that._noIMEINo.setValueState("None");
				that._typeVeh.setValueState("None");
				that._noEngine.setValueState("None");
				that._noChassis.setValueState("None");
				that._noRegNo.setValueState("None");
				that._noRegDate.setValueState("None");
				that._noRegExpDate.setValueState("None");
				that._stINSCompName.setValueState("None");
				that._noINSPolicy.setValueState("None");
				that._dateINSExp.setValueState("None");
			}
		},
		onPressBusMasterCancel: function() {
			var that = this;
			that._noBusNO.setValue("");
			that._rdBusType.setValue("");
			that._noIMEINo.setValue("");
			that._typeVeh.setValue("");
			that._noEngine.setValue("");
			that._noChassis.setValue("");
			that._noRegNo.setValue("");
			that._noRegDate.setValue("");
			that._noRegExpDate.setValue("");
			that._stINSCompName.setValue("");
			that._noINSPolicy.setValue("");
			that._dateINSExp.setValue("");
			that._noBusNO.setValueState("None");
			that._rdBusType.setValueState("None");
			that._noIMEINo.setValueState("None");
			that._typeVeh.setValueState("None");
			that._noEngine.setValueState("None");
			that._noChassis.setValueState("None");
			that._noRegNo.setValueState("None");
			that._noRegDate.setValueState("None");
			that._noRegExpDate.setValueState("None");
			that._stINSCompName.setValueState("None");
			that._noINSPolicy.setValueState("None");
			that._dateINSExp.setValueState("None");
		}
	});
});