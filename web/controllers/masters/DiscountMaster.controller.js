sap.ui.define([
    'com/app/sms/controllers/BaseController',
    'sap/ui/model/json/JSONModel'
], function (BaseController, JSONModel) {
    "use strict";
var getTitleDialog = null;
    return BaseController.extend("com.app.sms.controllers.masters.DiscountMaster", {
        onInit: function () {
                this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
            	this._masteSeacrhFiled = this.getView().byId("searchDiscountMaster");
        },
		onPressAddFilter : function(){
		    if (!this._DialogDiscountMaster){
				this._DialogDiscountMaster = sap.ui.xmlfragment(
					"com.app.sms.views.fragments.filters.fDiscountMaster",
					this);
				this.getView().addDependent(this._DialogDiscountMaster);
			}
			this._DialogDiscountMaster.open();
		    
		},
		onPressDiscountFilterClose: function(){
		    this._DialogDiscountMaster.close();
		},
		onPressSelectFilterName: function(){
		  	this._masteSeacrhFiled.setPlaceholder("Please Enter The " + getTitleDialog);
			this._DialogDiscountMaster.close();  
		},
		onPressDiscountMastersList : function(){
		    
		},
		onGetFilterData: function(oEvent){
		    var saveButton  =  sap.ui.getCore().byId("confirmDiscountSaveBtn");
		    var items = oEvent.getParameter("listItem");
			getTitleDialog = items.getTitle();
			saveButton.setVisible(true);
		}
    });
});