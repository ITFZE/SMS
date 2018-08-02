sap.ui.define([
    'com/app/sms/controllers/BaseController',
    'sap/ui/model/json/JSONModel'
], function(BaseController, JSONModel) {
	"use strict";
	var getTitleDialog = null;
	return BaseController.extend("com.app.sms.controllers.masters.ClassMaster", {
		onInit: function() {
			var oRouter = this.getRouter();
			oRouter.getRoute("ClassMaster").attachPatternMatched(this._onRouteMatched, this);
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			//search id
			this._masteSeacrhFiled = this.getView().byId("searchClsMaster");

		},
		_onRouteMatched: function() {
			this.onGetViewModel();
		},
		onBackDashBoard: function() {
			this.getRouter().navTo("DashBoard");
		},
		onGetViewModel: function() {
			/*		    var that = this;
			var newjson = new JSONModel();
			var getmodel = that.getView().getModel();
			var classdata = getmodel.oData.classMasterData;
			newjson.setData(classdata);
			that.getView().setModel(newjson, "newjson");*/
		},
		onPressClassMasterList: function() {
			// 		    var oItem, oCtx;
			// 			oItem = evt.getSource();
			// 			var newdata = this.getView().getModel().getData();
			// 			oCtx = oItem.getBindingContext("data/classMasterData");
			this.getRouter()
				.navTo("EditClassMaster", {
					PageID: 4
					//code: oCtx.getProperty("code")
				});
			//this.getOwnerComponent().getRouter().navTo("EditClassMaster");
		},
		//Here function for Filter Open
		onPressClassFilterOpen: function() {
			if (!this._DialogClassFilter) {
				this._DialogClassFilter = sap.ui.xmlfragment(
					"com.app.sms.views.fragments.filters.fClasssMaster",
					this);
				this.getView().addDependent(this._DialogClassFilter);
			}
			this._DialogClassFilter.open();
		},
		//Here function for Filter Close
		onPressFilterClose: function() {
			this._DialogClassFilter.close();
		},
		onPressSelectFilterName: function() {
			this._masteSeacrhFiled.setPlaceholder("Please Enter The " + getTitleDialog);
			this._DialogClassFilter.close();
		},
		//Here get filter data
		onGetFilterData: function(oEvent) {
			var saveBtn = sap.ui.getCore().byId("confirmClassSaveBtn");
			var items = oEvent.getParameter("listItem");
			getTitleDialog = items.getTitle();
			saveBtn.setVisible(true);
		},
		onGetLocalJsonData: function() {
			var dates = new JSONModel();
			var getview = this.getView().getModel().getData().classMasterData;
			alert(getview);
		}
	});
});