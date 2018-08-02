sap.ui.define([
	"sap/ui/model/json/JSONModel",
	'sap/m/Dialog',
	'sap/m/Button',
	'sap/m/Text',
	"sap/ui/core/routing/History",
	"com/app/sms/controllers/BaseController"
	],
	function(JSONModel, Dialog, Button, Text, History, BaseController) {
		"use strict";
		return BaseController.extend("com.app.sms.controllers.SplitMasterAndDetail", {

			onInit: function() {
				this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
				if (sap.ui.Device.system.phone) {
					var splitApp = this.getView().byId("splitContainerControl");
					splitApp.setModel(sap.m.SplitAppMode.ShowHideMode);
				}

			},
			handleMenuPress: function(oEvent) {
				var viewId = this.getView().getId();
				var toolPage = sap.ui.getCore().byId(viewId + "--toolPage");
				toolPage.setSideExpanded(!toolPage.getSideExpanded());
			},

			// Start - Side Navigation Logic
			onItemSelect: function(oEvent) {
				var that = this;
				var viewId = this.getView().getId();
				var toolPage = sap.ui.getCore().byId(viewId + "--toolPage");
				toolPage.setSideExpanded(false);
				var item = oEvent.getParameter('item');
				switch (item.getKey()) {
					case 'ClassMaster':
						that.getRouter().navTo(item.getKey());
						break;
					case 'AcademicYearMaster':
						that.getRouter().navTo(item.getKey());
						break;
					case 'DiscountMaster':
						that.getRouter().navTo(item.getKey());
						break;
					default:
						this.getRouter().navTo(item.getKey());
						break;
				}
			},
			// End - Side Navigation Logic

			onTilePress: function(oEvt) {
				var that = this;
				//var getSessionData = this.getContext();
				var getPages = oEvt.getSource().data("route");
				switch (getPages) {
					case 'ClassMaster':
						that.getOwnerComponent().getRouter().navTo(getPages);
						break;
					case 'AcademicYearMaster':
						that.getOwnerComponent().getRouter().navTo(getPages);
						break;
					case 'DiscountMaster':
						that.getOwnerComponent().getRouter().navTo(getPages);
						break;
				}
			},

			handleLogoutPress: function() {
				var that = this;
				var logoutDialog = new Dialog({
					title: 'Logout',
					type: 'Message',
					state: 'Warning',

					content: new Text({
						text: 'Are you sure you want to end the session?'
					}),
					beginButton: new Button({
						text: 'OK',
						press: function() {
							that.getRouter().navTo("Login");
						}
					}),
					endButton: new Button({
						text: 'Cancel',
						press: function() {
							logoutDialog.close();
						}
					}),
					afterClose: function() {
						logoutDialog.destroy();
					}
				});
				logoutDialog.open();
			}
		});
	});