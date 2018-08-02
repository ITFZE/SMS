sap.ui.define([
     "com/app/sms/controllers/BaseController",
    "com/app/sms/controllers/sal/AcademicYearSAL",
    "sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
	"use strict";
	return BaseController.extend("com.app.sms.controllers.details.AcademicYearMasterDetails", {
		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("AcademicYearMaster").attachMatched(this._onRouteMatched, this);
			var academicModel = new JSONModel();
			this.getView().setModel(academicModel, "AcademicModel");
			//call the id's
			this._txtYear = this.getView().byId("txtYear");
			this._dateStartDate = this.getView().byId("dateStartDate");
			this._dateEndDate = this.getView().byId("dateEndDate");
		},
		_onRouteMatched: function() {
		    var that = this;
		    that._txtYear.setValueState("None");
			that._dateStartDate.setValueState("None");
			that._dateEndDate.setValueState("None");
			/*var academicModel = this.getView().getModel("AcademicModel");
			academicModel.setProperty('/Code', 0);
			academicModel.setProperty('/Year', "");
			academicModel.setProperty('/U_StartDate', "");
			academicModel.setProperty('/U_EndDate', "");
			academicModel.setProperty('/U_Status', 1);
			this.getView().setModel(academicModel, "AcademicModel");*/
		},
		onPressSaveAcademicBtn: function() {
			var that = this;
			if (!that._txtYear.getValue()) {
				that._txtYear.setValueState("Error");
			} else if (!that._dateStartDate.getValue()) {
				that._txtYear.setValueState("None");
				that._dateStartDate.setValueState("Error");
			} else if (!that._dateEndDate.getValue()) {
				that._dateStartDate.setValueState("None");
				that._dateEndDate.setValueState("Error");
			} else {
				that._txtYear.setValueState("None");
				that._dateEndDate.setValueState("None");
				that._dateStartDate.setValueState("None");
				this.onPressCreateAcademic();
			}
		},
		onPressCreateAcademic: function() {
			var that = this;
			var jModel = that.getView().getModel("AcademicModel");
			//that.showLoading(true);
			that.fetchAcademicYear(this, "$filter=Name%20eq%20'" + jModel.oData.Name + "'").done(function(ret) {
				if (ret.oData.value.length <= 0) {
					that.createAcademicYear(jModel).done(function() {
						var filt = "$orderby=Code%20desc";
						that.fetchAcademicYear(that, filt).done(function(obj) {
							var jMdl = obj;
							var createmessage = that.oBundle("CreatedSuccessfully");
							sap.ui.getCore().setModel(jMdl, "SportsList");
							// that.showLoading(false);
							that.fetchMessageOk("Create Academic Year Master", "Success", createmessage, "AcademicYearMaster");
						}).fail(function(err) {
							//	that.showLoading(false);
							that.fetchMessageOk("Error", "Error", err.toString(), "AcademicYearMaster");
						});
					}).fail(function(err) {
						//	that.showLoading(false);
						that.fetchMessageOk("Error", "Error", err.toString(), "AcademicYearMaster");
					});
				}
			}).fail(function(err) {
				that.showLoading(false);
				that.fetchMessageOk("Error", "Error", err.toString(), "AcademicYearMaster");
			});

		},
		onPressCancelAcademicBtn: function() {
			var that = this;
			that._txtYear.setValueState("None");
			that._dateStartDate.setValueState("None");
			that._dateEndDate.setValueState("None");
			that._txtYear.setValue("");
			that._dateStartDate.setValue("");
			that._dateEndDate.setValue("");
		}
	});
});