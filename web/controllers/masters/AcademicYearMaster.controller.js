sap.ui.define([
    "com/app/sms/controllers/BaseController"
], function(BaseController) {
	"use strict";
	var getTitleDialog = null;
	return BaseController.extend("com.app.sms.controllers.masters.AcademicYearMaster", {
		onInit: function() {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			this._masteSeacrhFiled = this.getView().byId("onSearchAcademic");
		},
		onBackAcademic: function() {
			this.getRouter().navTo("DashBoard");
			this._masteSeacrhFiled.setValue("");
		},
		//Here function for Filter Open
		onPressAcademicFilterOpen: function() {
			if (!this._DialogAcademicFilter) {
				this._DialogAcademicFilter = sap.ui.xmlfragment(
					"com.app.sms.views.fragments.filters.fAcademicYearMaster",
					this);
				this.getView().addDependent(this._DialogAcademicFilter);
			}
			this._DialogAcademicFilter.open();
		},
		//Here function for Filter Close
		onPressAcademicFilterClose: function() {
			this._DialogAcademicFilter.close();
		},
		onPressAcademicSelectFilterName: function() {
			this._masteSeacrhFiled.setPlaceholder("Please Enter The " + getTitleDialog);
			this._DialogAcademicFilter.close();
		},
		onGetAcademicFilterData: function(oEvent) {
			var saveBtn = sap.ui.getCore().byId("confirmAcademicSaveBtn");
			var items = oEvent.getParameter("listItem");
			getTitleDialog = items.getTitle();
			saveBtn.setVisible(true);
		}

	});
});