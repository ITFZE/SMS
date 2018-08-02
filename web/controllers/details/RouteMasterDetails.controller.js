sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
    'com/app/sms/controllers/BaseController'
], function(Controller,JSONModel,BaseController) {
	"use strict";
	return BaseController.extend("com.app.sms.controllers.details.RouteMasterDetails", {
		onInit: function(oEvent) {
		    var oRouter = this.getRouter();
            oRouter.getRoute("RouteMaster").attachMatched(this._onRouteMatched, this);
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			///Here View ID's
			var routeModel = new JSONModel();
			this.getView().setModel(routeModel,"RouteModel");
			    this.RouteCode =  this.getView().byId("RouteCode");
				this.RouteName =  this.getView().byId("RouteName");
			
		},
		_onRouteMatched: function(){
		    var routeModel = this.getView().getModel("RouteModel");
		    routeModel.setProperty("RouteCode","");
		    routeModel.setProperty("RouteName","");
			this.getView().setModel(routeModel,"RouteModel");
		},
		
		onSaveRouteMaster: function(){
		    var that = this;
		    if (that.RouteCode.getValue() === "" && that.RouteCode.getValue() !== "Number"){
		        that.RouteCode.setValueState("Error");
		    }
		    else if (this.RouteName.getValue() === "")
		    {
		        that.RouteCode.setValueState("None");
		         that.RouteName.setValueState("Error");
		    }
		    
		    else
		    {
		        that.RouteCode.setValueState("None");
		        that.RouteName.setValueState("None");
		    }
		},
		onCancelRouteMaster: function(){
		    var that = this;
		    that.RouteCode.setValue(" ");
		        that.RouteName.setValue(" ");
		}
	});
});