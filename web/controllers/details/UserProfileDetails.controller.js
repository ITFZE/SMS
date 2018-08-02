sap.ui.define([
    'com/app/sms/controllers/BaseController',
    "sap/m/MessageToast",
    'sap/ui/model/json/JSONModel'
], function(BaseController,MessageToast,JSONModel) {
	"use strict";
	return BaseController.extend("com.app.sms.controllers.details.UserProfileDetails", {
		onInit: function(oEvent) {
			var oRouter = this.getRouter();
			oRouter.getRoute("UserProfile").attachMatched(this._onRouteMatched, this);
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			///Here View ID's
			var updModel = new JSONModel();
			this.getView().setModel(updModel,"UPDModel");
		        this.TextUserCode =  this.getView().byId("TextUserCode");
				this.TextUserFullName =  this.getView().byId("TextUserFullName");
				this.TextUserShortName = this.getView().byId("TextUserShortName");
				this.NumberPassword = this.getView().byId("NumberPassword");
				this.NumberConfirmPassword = this.getView().byId("NumberConfirmPassword");
				this.Email =  this.getView().byId("Email");
		},
		_onRouteMatched: function(){
		    var updModel = this.getView().getModel("UPDModel");
		    updModel.setProperty("TextUserCode","");
		     updModel.setProperty("TextUserFullName","");
		     updModel.setProperty("TextUserShortName","");
		      updModel.setProperty("NumberPassword","");
		       updModel.setProperty("NumberConfirmPassword","");
		        updModel.setProperty("Email","");
		    this.getView().setModel(updModel,"UPDModel");
		},
		onPressSaveUserProfileBtn: function(){
		    var that = this;
		    var letters = /^[\sa-zA-Z]+$/;
			var rexMail = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;
		    if (that.TextUserCode.getValue() === ""){
		        that.TextUserCode.setValueState("Error");
		    }
		    else if (!this.TextUserFullName.getValue().match(letters)){
		        that.TextUserCode.setValueState("None");
		        that.TextUserFullName.setValueState("Error");
		        this.MessageToastShow("Please Enter Alphabets");
		    }
		    else if (!that.TextUserShortName.getValue().match(letters) || this.TextUserShortName.getValue() === ""){
		        that.TextUserFullName.setValueState("None");
		        that.TextUserShortName.setValueState("Error");
		        this.MessageToastShow("Please Enter Alphabets");
		    }
		    else if (that.NumberPassword.getValue() === ""){
		        that.TextUserShortName.setValueState("None");
		        that.NumberPassword.setValueState("Error");
		    }
		    else if (that.NumberConfirmPassword.getValue() !== that.NumberConfirmPassword.getValue()){
		        that.NumberPassword.setValueState("None");
		        that.NumberConfirmPassword.setValueState("Error");
		    }
		    else if (!that.Email.getValue().match(rexMail) || that.Email.Email.getValue() === ""){
		        that.NumberConfirmPassword.setValueState("None");
		        that.Email.setValueState("Error");
		        this.MessageToastShow("Please Enter Valid Email Address");
		    }
		    else 
		    {
		        that.TextUserCode.setValueState("None");
		        that.TextUserFullName.setValueState("None");
		        that.TextUserShortName.setValueState("None");
		        that.NumberPassword.setValueState("None");
		        that.NumberConfirmPassword.setValueState("None");
		        that.Email.setValueState("None");
		    }
		},
	
		onPessUserProfileCancelBtn: function(){
		    var that = this;
		    that.TextUserCode.setValueState(" ");
		    that.TextUserFullName.setValueState(" ");
		    that.TextUserShortName.setValueState(" ");
		    that.NumberPassword.setValueState(" ");
		    that.NumberConfirmPassword.setValueState(" ");
		    that.Email.setValueState(" ");
		}
	});
});