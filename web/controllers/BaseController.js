sap.ui.define([
	"sap/ui/core/mvc/Controller"
    ], function(Controller) {
	"use strict";
	return Controller.extend("com.app.sms.controllers.BaseController", {
		initContext: function() {
			var config = {
				baseURL: '/stryxsports/client/services/B1SLProxy.xsjs',
				User: {},
				SessionData: {
					sessionID: '',
					routeID: ''
				},
				PageID: ""
			};
			jQuery.sap.require("jquery.sap.storage");
			var oStorage = jQuery.sap.storage(jQuery.sap.storage.Type.session);
			var contexts = oStorage.get("Contexts");
			if (contexts === null || contexts === "Contexts") {
				//Set data into Storage  
				oStorage.put("Contexts", config);
			}
		},
		onInit: function() {
			this.initContext();
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		},
		getRouter: function() {
			var that = this;
			return sap.ui.core.UIComponent.getRouterFor(that);
		},
		onNavBack: function() {
			this.getRouter().navTo("DashBoard", {}, false /*no history*/ );
		},
		setContext: function(sContext) {
			jQuery.sap.require("jquery.sap.storage");
			var oStorage = jQuery.sap.storage(jQuery.sap.storage.Type.session);
			//var contexts = oStorage.get("Contexts");
			oStorage.put("Contexts", sContext);
		},
		getContext: function() {
			jQuery.sap.require("jquery.sap.storage");
			var oStorage = jQuery.sap.storage(jQuery.sap.storage.Type.session);
			return oStorage.get("Contexts");
		},
		setViewModel: function(mModel, mName) {
			this.getView().setModel(mModel, mName);
			this.getView().getModel(mName).refresh(true);
		}
	});
});