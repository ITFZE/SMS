sap.ui.define([
    'com/app/sms/controllers/BaseController',
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageToast'
], function(BaseController) {
	"use strict";
	return BaseController.extend("com.app.sms.controllers.details.ClassMasterDetails", {
		onInit: function() {
			var oRouter = this.getRouter();
			oRouter.getRoute("ClassMaster").attachPatternMatched(this._onRouteMatched, this);
			oRouter.getRoute("EditClassMaster").attachPatternMatched(this._onRouteMatchedEditClass, this);
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			///Here View ID's
			this._idClassCode = this.getView().byId("numClassCode");
			this._idClassDescr = this.getView().byId("txtClassDescr");
			this._idClassDescrArabic = this.getView().byId("txtClassArbicDescr");
			//button id's
			this._saveCreateBtn = this.getView().byId("saveCreateClasssBtn");
			this._saveUpdateBtn = this.getView().byId("saveUpdateClasssBtn");
			this._cancelCreateBtn = this.getView().byId("cancelCreateClasssBtn");
			this._cancelUpdateBtn = this.getView().byId("cancelUpdateClasssBtn");
			//page id
			this._pageHeader = this.getView().byId("classMasterDetails");
		},
		_onRouteMatched: function() {
			this.onClearData();
			this.onPessClassCancelBtn();
			/*this._pageHeader.setTitle("Class Master Details");
			this._saveCreateBtn.setVisible(true);
			this._cancelCreateBtn.setVisible(true);
			this._saveUpdateBtn.setVisible(true);
			this._cancelUpdateBtn.setVisible(true);*/
		},
		_onRouteMatchedEditClass: function(oEvent) {
			var getLeadId = oEvent.getParameter("arguments").PageID;
			var that = this;
		/*	this._saveCreateBtn.setVisible(false);
			this._cancelCreateBtn.setVisible(false);
			this._saveUpdateBtn.setVisible(true);
			this._cancelUpdateBtn.setVisible(true);
			that._pageHeader.setTitle("Edit Class Master");
			that._idClassCode.setValue("1");
			that._idClassDescr.setValue("KG1");
			that._idClassDescrArabic.setValue("الروضة الأول")*/;
		},
		onPressSaveClassBtn: function() {
			var that = this;
			if (!that._idClassCode.getValue()) {
				that._idClassCode.setValueState("Error");
			} else if (!that._idClassDescr.getValue()) {
				that._idClassCode.setValueState("None");
				that._idClassDescr.setValueState("Error");
			} else if (!that._idClassDescrArabic.getValue()) {
				that._idClassCode.setValueState("None");
				that._idClassDescr.setValueState("None");
				that._idClassDescrArabic.setValueState("Error");
			} else {
				that._idClassCode.setValueState("None");
				that._idClassDescr.setValueState("None");
				that._idClassDescrArabic.setValueState("None");
			}
		},
		onPessClassCancelBtn: function() {
			var that = this;
			//var getview = that.getView().getModel().getData().classMasterData;
			that._idClassCode.setValueState("None");
			that._idClassDescr.setValueState("None");
			that._idClassDescrArabic.setValueState("None");
		},
		//Here clear details view data
		onClearData: function() {
			var that = this;
			that._idClassCode.setValue("");
			that._idClassDescr.setValue("");
			that._idClassDescrArabic.setValue("");
		},
		onPressUpdateClassBtn: function() {
			//alert("this is update save button");
		}
	});
});