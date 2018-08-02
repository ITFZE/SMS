sap.ui.define([
    'com/app/sms/controllers/BaseController',
    'sap/ui/model/json/JSONModel'
], function(BaseController,JSONModel) {
	"use strict";
	return BaseController.extend("com.app.sms.controllers.details.DiscountMasterDetails", {
		onInit: function(oEvent) {
		     var oRouter = this.getRouter();
            oRouter.getRoute("DiscountMaster").attachMatched(this._onRouteMatched, this);
            var discountModel = new JSONModel();
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			this.getView().setModel(discountModel,"DiscountModel");
			///Here View ID's
			    this.NumberDiscountCode =  this.getView().byId("NumberDiscountCode");
				this.TextDescription =  this.getView().byId("TextDescription");
				this.TextDescriptionArabic =  this.getView().byId("TextDescriptionArabic");
				this.NumberDiscountPercentage =  this.getView().byId("NumberDiscountPercentage");
				this.NumberDiscountLimitAmt =  this.getView().byId("NumberDiscountLimitAmt");
				this.NumberClassCode =  this.getView().byId("NumberClassCode");
		},
		_onRouteMatched: function(){
		    var discountModel = this.getView().getModel("DiscountModel");
		    discountModel.setProperty("NumberDiscountCode","");
		    discountModel.setProperty("TextDescription","");
		    discountModel.setProperty("TextDescriptionArabic","");
		    discountModel.setProperty("NumberDiscountPercentage","");
		    discountModel.setProperty("NumberDiscountLimitAmt","");
		   discountModel.setProperty("NumberClassCode","");
		   this.getView().setModel(discountModel, "DiscountModel");
		},
		onSaveDicount: function(){
		    var that = this;
		   
		    if (that.NumberDiscountCode.getValue() === "" && that.NumberDiscountCode.getValue() !== "Number"){
		        that.NumberDiscountCode.setValueState("Error");
		    }
		    else if (that.TextDescription.getValue() === "")
		    {
		        that.NumberDiscountCode.setValueState("None");
		         that.TextDescription.setValueState("Error");
		    }
		    else if (that.TextDescriptionArabic.getValue() === ""){
		          that.TextDescription.setValueState("None");
		          that.TextDescriptionArabic.setValueState("Error");
		    }
		    else if (that.NumberDiscountPercentage.getValue() === "" && that.NumberDiscountPercentage.getValue() !== "Number"){
		        that.TextDescription.setValueState("None");
		        that.TextDescriptionArabic.setValueState("None");
		        that.NumberDiscountPercentage.setValueState("Error");
		    }
		    else if (that.NumberDiscountLimitAmt.getValue() === "" &&  that.NumberDiscountLimitAmt.getValue() !== "Number"){
		         that.NumberDiscountPercentage.setValueState("None");
		         that.NumberDiscountLimitAmt.setValueState("Error");
		    }
		    else if (this.NumberClassCode.getValue() === "" && this.NumberClassCode.getValue() !== "Number"){
		         that.NumberDiscountLimitAmt.setValueState("None");
		        that.NumberClassCode.setValueState("Error");
		    }
		    else
		    {
		        that.NumberDiscountCode.setValueState("None");
		        that.TextDescription.setValueState("None");
		         that.TextDescriptionArabic.setValueState("None");
		        that.NumberDiscountPercentage.setValueState("None");
		        that.NumberDiscountLimitAmt.setValueState("None");
		        that.NumberClassCode.setValueState("None");
		    }
		},
		onCancelDiscount: function(){
		    var that = this;
		    that.NumberDiscountCode.setValue(" ");
		    that.TextDescription.setValue(" ");
		    that.TextDescriptionArabic.setValue(" ");
		    that.NumberDiscountPercentage.setValue(" ");
		    that.NumberDiscountLimitAmt.setValue(" ");
		    that.NumberClassCode.setValue(" ");
		}
	});
});