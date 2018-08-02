sap.ui.define([
    'com/app/sms/controllers/BaseController'
], function(BaseController) {
	"use strict";
	return BaseController.extend("com.app.sms.controllers.details.create.CreateStudentDetails", {
		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("CreateStudentDetails").attachPatternMatched(this._onRouteMatched, this);
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			///Here View ID's for form first core title
			this._txtName = this.getView().byId("txtInName");
			this._txtEssisNumber = this.getView().byId("numInEssisNum");
			this._txtRegistrationDate = this.getView().byId("dateInRegistraion");
			this._txtNationality = this.getView().byId("txtInNationality");
			this._txtResidentTele = this.getView().byId("numInResidentTele");
			this._txtMobileNum = this.getView().byId("numInMobile");
			this._txtSexType = this.getView().byId("selectSexType");
			this._txtPreviousSchl = this.getView().byId("txtInPreviousSchool");
			this._txtPreviousClass = this.getView().byId("txtInPreviousClass");
			this._txtCurrentClass = this.getView().byId("txtInCurrentClass");
			this._txtCountry = this.getView().byId("txtInCountry");
			this._txtStatusType = this.getView().byId("selectInStatus");
			//Here view id's for form second core title
			this._txtNameArabic = this.getView().byId("txtInNameArabic");
			this._txtBirthDate = this.getView().byId("dateInBirthDate");
			this._txtpaymentType = this.getView().byId("txtInPaymentType");
			this._txtTrasportation = this.getView().byId("txtInTrasportation");
			this._txtModeTransport = this.getView().byId("txtInModeTransport");
			this._txtArea = this.getView().byId("txtInArea");
			this._txtStreetDescr = this.getView().byId("txtInStreetDescr");
			this._txtBulindName = this.getView().byId("txtInBulidingName");
		},
		_onRouteMatched: function() {
			var that = this;
			that.onClearStudentMasterData();
			that.onPessStduentCancelBtn();
			that.setComboFirstValue();
		},

		onPressSaveStudnetMasterBtn: function() {
			var that = this;
			if (!that._txtName.getValue()) {
				that._txtName.setValueState("Error");
			} else if (!that._txtEssisNumber.getValue()) {
				that._txtEssisNumber.setValueState("Error");
				that._txtName.setValueState("None");
			} else if (!that._txtRegistrationDate.getValue()) {
				that._txtRegistrationDate.setValueState("Error");
				that._txtName.setValueState("None");
				that._txtEssisNumber.setValueState("None");
			} else if (that._txtNationality.getValue() === "" || that._txtNationality.getValue() === "Select The Nationality") {
				that._txtNationality.setValueState("Error");
				that._txtName.setValueState("None");
				that._txtEssisNumber.setValueState("None");
				that._txtRegistrationDate.setValueState("None");
			} else if (!that._txtResidentTele.getValue()) {
				that._txtResidentTele.setValueState("Error");
				that._txtName.setValueState("None");
				that._txtEssisNumber.setValueState("None");
				that._txtRegistrationDate.setValueState("None");
				that._txtNationality.setValueState("None");
			} else if (!that._txtMobileNum.getValue()) {
				that._txtMobileNum.setValueState("Error");
				that._txtName.setValueState("None");
				that._txtEssisNumber.setValueState("None");
				that._txtRegistrationDate.setValueState("None");
				that._txtNationality.setValueState("None");
				that._txtResidentTele.setValueState("None");
			} else if (that._txtSexType.getSelectedItem().getText() === "Select The Gender" || that._txtSexType.getSelectedItem() === "") {
				that._txtSexType.setValueState("Error");
				that._txtName.setValueState("None");
				that._txtEssisNumber.setValueState("None");
				that._txtRegistrationDate.setValueState("None");
				that._txtNationality.setValueState("None");
				that._txtResidentTele.setValueState("None");
				that._txtMobileNum.setValueState("None");
			} else if (!that._txtPreviousSchl.getValue()) {
				that._txtPreviousSchl.setValueState("Error");
				that._txtName.setValueState("None");
				that._txtEssisNumber.setValueState("None");
				that._txtRegistrationDate.setValueState("None");
				that._txtMobileNum.setValueState("None");
				that._txtSexType.setValueState("None");
			} else if (that._txtPreviousClass.getValue() === "" || that._txtPreviousClass.getValue() === "Select The Previous Class") {
				that._txtPreviousClass.setValueState("Error");
				that._txtName.setValueState("None");
				that._txtEssisNumber.setValueState("None");
				that._txtRegistrationDate.setValueState("None");
				that._txtMobileNum.setValueState("None");
				that._txtNationality.setValueState("None");
				that._txtResidentTele.setValueState("None");
				that._txtPreviousSchl.setValueState("None");
			} else if (that._txtCurrentClass.getValue() === "" || that._txtCurrentClass.getValue() === "Select The Current Class") {
				that._txtCurrentClass.setValueState("Error");
				that._txtName.setValueState("None");
				that._txtEssisNumber.setValueState("None");
				that._txtRegistrationDate.setValueState("None");
				that._txtMobileNum.setValueState("None");
				that._txtNationality.setValueState("None");
				that._txtResidentTele.setValueState("None");
				that._txtPreviousSchl.setValueState("None");
				that._txtPreviousClass.setValueState("None");
			}
			////form secound title id 
			else if (!that._txtNameArabic.getValue()) {
				that._txtCurrentClass.setValueState("None");
				that._txtNameArabic.setValueState("Error");
			} else if (!that._txtBirthDate.getValue()) {
				that._txtBirthDate.setValueState("Error");
				that._txtNameArabic.setValueState("None");
			} else if (that._txtpaymentType.getValue() === "" || that._txtpaymentType.getValue() === "Select The Payment") {
				that._txtpaymentType.setValueState("Error");
				that._txtNameArabic.setValueState("None");
				that._txtBirthDate.setValueState("None");
			} else if (that._txtTrasportation.getValue() === "" || that._txtTrasportation.getValue() === "Select The Trasport") {
				that._txtTrasportation.setValueState("Error");
				that._txtNameArabic.setValueState("None");
				that._txtpaymentType.setValueState("None");
			} else if (that._txtModeTransport.getValue() === "" || that._txtModeTransport.getValue() === "Select The Mode of Transport") {
				that._txtModeTransport.setValueState("Error");
				that._txtNameArabic.setValueState("None");
				that._txtpaymentType.setValueState("None");
				that._txtTrasportation.setValueState("None");
			} else if (that._txtArea.getValue() === "" || that._txtArea.getValue() === "Select The Area") {
				that._txtArea.setValueState("Error");
				that._txtNameArabic.setValueState("None");
				that._txtTrasportation.setValueState("None");
				that._txtModeTransport.setValueState("None");
			} else if (that._txtStreetDescr.getValue() === "" || that._txtStreetDescr.getValue() === "Select The Street Description") {
				that._txtStreetDescr.setValueState("Error");
				that._txtNameArabic.setValueState("None");
				that._txtTrasportation.setValueState("None");
				that._txtModeTransport.setValueState("None");
				that._txtArea.setValueState("None");
			} else if (!that._txtBulindName.getValue()) {
				that._txtBulindName.setValueState("Error");
				that._txtNameArabic.setValueState("None");
				that._txtTrasportation.setValueState("None");
				that._txtModeTransport.setValueState("None");
				that._txtStreetDescr.setValueState("None");
				that._txtArea.setValueState("None");
			} else {
				that._txtBulindName.setValueState("None");
				that.onPessStduentCancelBtn();
			}
		},
		onPessStduentCancelBtn: function() {
			var that = this;
			that._txtName.setValueState("None");
			that._txtEssisNumber.setValueState("None");
			that._txtRegistrationDate.setValueState("None");
			that._txtMobileNum.setValueState("None");
			that._txtNationality.setValueState("None");
			that._txtResidentTele.setValueState("None");
			that._txtPreviousSchl.setValueState("None");
			that._txtPreviousClass.setValueState("None");
			that._txtCurrentClass.setValueState("None");
			that._txtNameArabic.setValueState("None");
			that._txtBirthDate.setValueState("None");
			that._txtpaymentType.setValueState("None");
			that._txtTrasportation.setValueState("None");
			that._txtModeTransport.setValueState("None");
			that._txtArea.setValueState("None");
			that._txtStreetDescr.setValueState("None");
			that._txtBulindName.setValueState("None");

		},
		//Here clear details view data
		onClearStudentMasterData: function() {
			var that = this;
			that._txtName.setValue("");
			that._txtEssisNumber.setValue("");
			that._txtRegistrationDate.setValue("");
			that._txtMobileNum.setValue("");
			that._txtNationality.setValue("");
			that._txtResidentTele.setValue("");
			that._txtPreviousSchl.setValue("");
			that._txtPreviousClass.setValue("");
			that._txtCurrentClass.setValue("");
			that._txtNameArabic.setValue("");
			that._txtBirthDate.setValue("");
			that._txtpaymentType.setValue("");
			that._txtTrasportation.setValue("");
			that._txtModeTransport.setValue("");
			that._txtArea.setValue("");
			that._txtStreetDescr.setValue("");
			that._txtBulindName.setValue("");
		},
		setComboFirstValue: function() {
			var that = this;
			that._txtNationality.setValue("Select The Nationality");
			that._txtPreviousClass.setValue("Select The Previous Class");
			that._txtCurrentClass.setValue("Select The Current Class");
			that._txtCountry.setValue("Select The Country");
			that._txtSexType.setValue("Select The Gender");
			that._txtStatusType.setValue("Select The Status");
			that._txtpaymentType.setValue("Select The Payment");
			that._txtTrasportation.setValue("Select The Trasport");
			that._txtModeTransport.setValue("Select The Mode of Transport");
			that._txtArea.setValue("Select The Area");
			that._txtStreetDescr.setValue("Select The Street Description");
		},
		onBack: function() {
			this.getRouter().navTo("SearchStudentMaster");
		}
	});
});