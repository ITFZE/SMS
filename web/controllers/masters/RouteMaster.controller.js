sap.ui.define([
    'com/app/sms/controllers/BaseController',
    'sap/ui/model/json/JSONModel'
], function(BaseController,JSONModel) {
	"use strict";
	var getTitleDialog = null;
	return BaseController.extend("com.app.sms.controllers.masters.RouteMaster", {
		onInit: function(oEvent) {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			this._masteSeacrhFiled = this.getView().byId("searchRouteMaster");
		},
	
		onPressAddFilter: function() {
			if (!this._DialogRouteMaster) {
				this._DialogRouteMaster = sap.ui.xmlfragment(
					"com.app.sms.views.fragments.filters.fRouteMaster",
					this);
				this.getView().addDependent(this._DialogRouteMaster);
			}
			this._DialogRouteMaster.open();

		},
		onPressRouteFilterClose: function() {
			this._DialogRouteMaster.close();
		},
		onPressSelectFilterName: function() {
			this._masteSeacrhFiled.setPlaceholder("Please Enter The " + getTitleDialog);
			this._DialogRouteMaster.close();
		},
		onGetFilterData: function(oEvent) {
			var btn = sap.ui.getCore().byId("confirmRouteSaveBtn");
			var items = oEvent.getParameter("listItem");
			getTitleDialog = items.getTitle();
			btn.setVisible(true);
		}
	});
});