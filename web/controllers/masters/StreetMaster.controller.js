sap.ui.define([
    'com/app/sms/controllers/BaseController'
], function(BaseController) {
	"use strict";
	var getTitleDialog = null;
	return BaseController.extend("com.app.sms.controllers.masters.StreetMaster", {
		onInit: function() {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			//search id
			this._masteSeacrhFiled = this.getView().byId("searchStreetMaster");
		},
		onBackDashBoard: function() {
			this.getRouter().navTo("DashBoard");
		},
		onPressStreetMasterList: function() {},
		//Here function for Filter Open
		onPressStreetFilterOpen: function() {
			if (!this._DialogStreetFilter) {
				this._DialogStreetFilter = sap.ui.xmlfragment(
					"com.app.sms.views.fragments.filters.fStreetMaster",
					this);
				this.getView().addDependent(this._DialogStreetFilter);
			}
			this._DialogStreetFilter.open();
		},
		//Here function for Filter Close
		onPressStreetFilterClose: function() {
			this._DialogStreetFilter.close();
		},
		onPressSelectFilterName: function() {
			this._masteSeacrhFiled.setPlaceholder("Please Enter The " + getTitleDialog);
			this._DialogStreetFilter.close();
		},
		//Here get filter data
		onGetFilterData: function(oEvent) {
			var saveBtn = sap.ui.getCore().byId("confirmStreetSaveBtn");
			var items = oEvent.getParameter("listItem");
			getTitleDialog = items.getTitle();
			saveBtn.setVisible(true);
		}
	});
});