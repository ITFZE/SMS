sap.ui.define([
  "sap/ui/core/UIComponent",
  'sap/ui/model/json/JSONModel'
], function(UIComponent, JSONModel) {
	"use strict";
	return UIComponent.extend("com.app.sms.Component", {
		metadata: {
			manifest: "json"
		},
		init: function() {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// create the views based on the url/hash
			this.getRouter().initialize();
			///Here Data json 
			var oModel = new JSONModel(jQuery.sap.getModulePath("com.app.sms.models", "/data.json"));
			this.setModel(oModel);
			this.setModel(oModel, "BaseModel");
		},

		getContentDensityClass: function() {
			if (!this._sContentDensityClass) {
				if (!sap.ui.Device.support.touch) {
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					this._sContentDensityClass = "sapUiSizeCozy";
				}
			}
			return this._sContentDensityClass;
		}

	});
});