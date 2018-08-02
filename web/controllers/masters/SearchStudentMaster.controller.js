sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast',
    'com/app/sms/controllers/BaseController'
], function(Controller, MessageToast,BaseController) {
	"use strict";
	return BaseController.extend("com.app.sms.controllers.masters.SearchStudentMaster", {
		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("SearchStudentMaster").attachPatternMatched(this._onRouteMatched, this);
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			///Here view id's
			this._idStudentName = this.getView().byId("txtInStdName");
			this._idStudentDateBirth = this.getView().byId("numInStdDateBirth");
			this._idStudentCode = this.getView().byId("numInStdCode");
			this._idEssisNum = this.getView().byId("numStdEssisNumber");
			//panel id
			this._panelStudentSeacrh = this.getView().byId("panelStudentSeacrh");
		},
		_onRouteMatched: function() {
			this.clearModelData();
		},
		onNavBack: function() {
			this.getOwnerComponent().getRouter().navTo("DashBoard");
		},
		onPressStudentSearch: function() {
			if (this._idStudentName.getValue() !== "" || this._idStudentDateBirth.getValue() !== "" ||
				this._idStudentCode.getValue() !== "" || this._idEssisNum.getValue() !== "") {
				this._panelStudentSeacrh.setVisible(true);
			} else {
				MessageToast.show("Please Enter Any One Of The Filed");
			}
		},
		onPressViewStudentDetails: function() {
		    	this.getOwnerComponent().getRouter()
				.navTo("ViewStudentDetails", {
					PageID: 13
					//code: oCtx.getProperty("code")
				});
			//this.getOwnerComponent().getRouter().navTo("ViewStudentDetails");
		},
		onPressCreateStudent: function() {
			this.getOwnerComponent().getRouter().navTo("CreateStudentDetails");
		},
		clearModelData: function() {
			var that = this;
			that._panelStudentSeacrh.setVisible(false);
			that._idStudentName.setValue("");
			that._idStudentDateBirth.setValue("");
			that._idStudentCode.setValue("");
			that._idEssisNum.setValue("");
		}
	});
});