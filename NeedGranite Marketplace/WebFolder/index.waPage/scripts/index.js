
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var btnDeleteEntity = {};	// @button
	var btnNewProvince = {};	// @button
	var btnAddProvince = {};	// @button
	var gridProvince = {};	// @dataGrid
// @endregion// @endlock

// eventHandlers// @lock

	btnDeleteEntity.click = function btnDeleteEntity_click (event)// @startlock
	{// @endlock
		sources.province.removeCurrent();
	};// @lock

	btnNewProvince.click = function btnNewProvince_click (event)// @startlock
	{// @endlock
		sources.province.addNewElement();
		var todayDate = new Date();
		sources.province.getAttribute("dateAdded").setValue(todayDate);
	};// @lock

	btnAddProvince.click = function btnAddProvince_click (event)// @startlock
	{// @endlock
		sources.province.save({
		 	onSuccess: function(event) {
                // displays success message in a DisplayError area
           		alert("User account updated successfully.");
      		 },
        	onError: function(error) {
                // displays error message in a DisplayError area
            	alert(error['error'][0].message);
        	}
		});
	};// @lock

	gridProvince.onRowClick = function gridProvince_onRowClick (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("btnDeleteEntity", "click", btnDeleteEntity.click, "WAF");
	WAF.addListener("btnNewProvince", "click", btnNewProvince.click, "WAF");
	WAF.addListener("btnAddProvince", "click", btnAddProvince.click, "WAF");
	WAF.addListener("gridProvince", "onRowClick", gridProvince.onRowClick, "WAF");
// @endregion
};// @endlock
