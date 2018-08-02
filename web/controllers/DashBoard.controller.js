sap.ui.define([
    "sap/ui/model/json/JSONModel",
	'sap/m/Dialog',
	'sap/m/Button',
	'sap/m/Text',
	"sap/ui/core/routing/History",
	"com/app/sms/controllers/BaseController"
], function(JSONModel, Dialog, Button, Text, History, BaseController) {
	"use strict";
	return BaseController.extend("com.app.sms.controllers.DashBoard", {
		onInit: function() {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		},

		handleMenuPress: function(oEvent) {
			var viewId = this.getView().getId();
			var toolPage = sap.ui.getCore().byId(viewId + "--toolPage");
			toolPage.setSideExpanded(!toolPage.getSideExpanded());
		},

		onPressUserProflie: function(oEvt) {
			this.getRouter().navTo("UserProfile");
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
				case 'AreaMaster':
					that.getRouter().navTo(item.getKey());
					break;
				case 'StreetMaster':
					that.getRouter().navTo(item.getKey());
					break;
				case 'SearchStudentMaster':
					that.getRouter().navTo(item.getKey());
					break;
				case 'BusMaster':
					that.getRouter().navTo(item.getKey());
					break;
				case 'RouteMaster':
					that.getRouter().navTo(item.getKey());
					break;
				case 'SearchAssignStudentRoute':
					that.getRouter().navTo(item.getKey());
					break;
				case 'AssignBusRoute':
					that.getRouter().navTo(item.getKey());
					break;
				case 'AllocateStudentBus':
					that.getRouter().navTo(item.getKey());
					break;
				case 'UserProfile':
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
				case 'AreaMaster':
					that.getOwnerComponent().getRouter().navTo(getPages);
					break;
				case 'StreetMaster':
					that.getOwnerComponent().getRouter().navTo(getPages);
					break;
				case 'SearchStudentMaster':
					that.getOwnerComponent().getRouter().navTo(getPages);
					break;
				case 'BusMaster':
					that.getOwnerComponent().getRouter().navTo(getPages);
					break;
				case 'RouteMaster':
					that.getOwnerComponent().getRouter().navTo(getPages);
					break;
				case 'SearchAssignStudentRoute':
					that.getOwnerComponent().getRouter().navTo(getPages);
					break;
				case 'AssignBusRoute':
					that.getOwnerComponent().getRouter().navTo(getPages);
					break;
				case 'AllocateStudentBus':
					that.getOwnerComponent().getRouter().navTo(getPages);
					break;
				case 'UserProfile':
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