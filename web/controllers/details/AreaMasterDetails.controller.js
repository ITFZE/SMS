sap.ui.define([
     "com/app/sms/controllers/BaseController"
], function(BaseController) {
	"use strict";
	return BaseController.extend("com.app.sms.controllers.details.AreaMasterDetails", {
		onInit: function() {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			this._txtAreaCode = this.getView().byId("txtAreaCode");
			this._txtDescription = this.getView().byId("txtDescription");
			this._txtArabicDescription = this.getView().byId("txtArabicDescription");
		},
		onPressAreaMasterSave: function() {
			var that = this;
			if (!that._txtAreaCode.getValue()) {
				that._txtAreaCode.setValueState("Error");
			} else if (!that._txtDescription.getValue()) {
				that._txtAreaCode.setValueState("None");
				that._txtDescription.setValueState("Error");
			} else if (!that._txtArabicDescription.getValue()) {
				that._txtDescription.setValueState("None");
				that._txtArabicDescription.setValueState("Error");
			} else {
				that._txtAreaCode.setValueState("None");
				that._txtDescription.setValueState("None");
				that._txtArabicDescription.setValueState("None");
			}
		},
		onPressAreaMasterCancel: function() {
			var that = this;
			that._txtAreaCode.setValueState("None");
			that._txtDescription.setValueState("None");
			that._txtArabicDescription.setValueState("None");
			that._txtAreaCode.setValue("");
			that._txtDescription.setValue("");
			that._txtArabicDescription.setValue("");
		}
	});
});