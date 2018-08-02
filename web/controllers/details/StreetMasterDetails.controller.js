sap.ui.define([
    'com/app/sms/controllers/BaseController'
], function(BaseController) {
	"use strict";
	return BaseController.extend("com.app.sms.controllers.details.StreetMasterDetails", {
		onInit: function() {
			var oRouter = this.getRouter();
			oRouter.getRoute("StreetMaster").attachPatternMatched(this._onRouteMatched, this);
			oRouter.getRoute("StreetMaster").attachPatternMatched(this._onRouteMatchedEditStreetMaster, this);
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			///Here View ID's
			this._idStreetCode = this.getView().byId("numStreetCode");
			this._idStreetDescr = this.getView().byId("txtStreetDescr");
			this._idStreetDescrArabic = this.getView().byId("txtStreetArbicDescr");
			this._saveBtn = this.getView().byId("saveStreetBtn");
		},
		_onRouteMatched: function() {
			this.onPessStreetCancelBtn();
		},
		_onRouteMatchedEditStreetMaster: function() {},
		onPressSaveStreetBtn: function() {
			var that = this;
			if (!that._idStreetCode.getValue()) {
				that._idStreetCode.setValueState("Error");
			} else if (!that._idStreetDescr.getValue()) {
				that._idStreetCode.setValueState("None");
				that._idStreetDescr.setValueState("Error");
			} else if (!that._idStreetDescrArabic.getValue()) {
				that._idStreetCode.setValueState("None");
				that._idStreetDescr.setValueState("None");
				that._idStreetDescrArabic.setValueState("Error");
			} else {
				that._idStreetCode.setValueState("None");
				that._idStreetDescr.setValueState("None");
				that._idStreetDescrArabic.setValueState("None");
			}
		},
		onPessStreetCancelBtn: function() {
			var that = this;
			that._idStreetCode.setValueState("None");
			that._idStreetDescr.setValueState("None");
			that._idStreetDescrArabic.setValueState("None");
		},
		//Here clear details view data
		onClearData: function() {
			var that = this;
			that._idStreetCode.setValue("");
			that._idStreetDescr.setValue("");
			that._idStreetDescrArabic.setValue("");
		}
	});
});