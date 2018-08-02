sap.ui.define([
     "com/app/sms/controllers/BaseController"
], function(BaseController) {
	"use strict";
	var getTitleDialog = null;
	return BaseController.extend("com.app.sms.controllers.masters.AreaMaster", {
		onInit: function() {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			this._masterSeacrhFiled = this.getView().byId("onSearchAreaMaster");
		},
		onBackArea: function() {
			this.getRouter().navTo("DashBoard");
			this._masterSeacrhFiled.setValue("");
		},
		//Here function for Filter Open
		onPressAreaFilter: function() {
			if (!this._DialogAreaFilter) {
				this._DialogAreaFilter = sap.ui.xmlfragment(
					"com.app.sms.views.fragments.filters.fAreaMaster",
					this);
				this.getView().addDependent(this._DialogAreaFilter);
			}
			this._DialogAreaFilter.open();
		},
		//Here function for Filter Close
		onPressAreaFilterClose: function() {
			this._DialogAreaFilter.close();
		},
		onPressAreaSelectFilterName: function() {
			this._masterSeacrhFiled.setPlaceholder("Please Enter The " + getTitleDialog);
			this._DialogAreaFilter.close();
		},
		onGetAreaFilterData: function(oEvent) {
			var saveBtn = sap.ui.getCore().byId("confirmAreaSaveBtn");
			var items = oEvent.getParameter("listItem");
			getTitleDialog = items.getTitle();
			saveBtn.setVisible(true);
		}
	});
});