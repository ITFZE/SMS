sap.ui.define([
    'com/app/sms/controllers/BaseController',
    'sap/m/MessageToast'
], function(BaseController, MessageToast) {
	"use strict";
	return BaseController.extend("com.app.sms.controllers.masters.SearchAssignStudentRoute", {
		onInit: function() {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			this._idStudentName = this.getView().byId("txtInStdName");
			this._idStudentCode = this.getView().byId("numInStdCode");
			this._txtInStdName = this.getView().byId("txtInStdName");
			this._numInStdCode = this.getView().byId("numInStdCode");
			//panel id
			this._panelStudentSeacrh = this.getView().byId("panelStudentSeacrh");
		},
		_onRouteMatched: function() {
			//this.clearModelData();
		},
		onNavBackAssign: function() {
			this.getRouter().navTo("DashBoard");
			this._txtInStdName.setValue("");
			this._numInStdCode.setValue("");
		},
		onPressCreateStudent: function() {
			this.getOwnerComponent().getRouter().navTo("CreateStudentDetails");
		},
		onPressStudentSearch: function() {
			if (this._idStudentName.getValue() !== "" || this._idStudentCode.getValue() !== "") {
				this._panelStudentSeacrh.setVisible(true);
			} else {
				MessageToast.show("Please Enter Any One Of The Filed");
			}
		},
		onPressAssignStudentRoute: function() {
			this.getOwnerComponent().getRouter().navTo("AssignStudentRouteDetails");
		}

	});
});