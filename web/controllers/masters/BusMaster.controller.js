sap.ui.define([
    "com/app/sms/controllers/BaseController"
], function(BaseController) {
	"use strict";
	var getTitleDialog = null;
	return BaseController.extend("com.app.sms.controllers.masters.BusMaster", {
		onInit: function() {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			this._masterSeacrhFiled = this.getView().byId("onSearchBusMaster");
		},
		onBackBusMaster: function() {
			this.getRouter().navTo("DashBoard");
			this._masterSeacrhFiled.setValue("");
		},
		//Here function for Filter Open
		onPressBusFilter: function() {
			if (!this._DialogBusFilter) {
				this._DialogBusFilter = sap.ui.xmlfragment(
					"com.app.sms.views.fragments.filters.fBusMaster",
					this);
				this.getView().addDependent(this._DialogBusFilter);
			}
			this._DialogBusFilter.open();
		},
		//Here function for Filter Close
		onPressBusFilterClose: function() {
			this._DialogBusFilter.close();
		},
		onPressBusSelectFilterName: function() {
			this._masterSeacrhFiled.setPlaceholder("Please Enter The " + getTitleDialog);
			this._DialogBusFilter.close();
		},
		onGetBusFilterData: function(oEvent) {
			var saveBtn = sap.ui.getCore().byId("confirmBusSaveBtn");
			var items = oEvent.getParameter("listItem");
			getTitleDialog = items.getTitle();
			saveBtn.setVisible(true);
		}
	});
});