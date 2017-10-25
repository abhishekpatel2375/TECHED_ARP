jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 POHeader in the list
// * All 3 POHeader have at least one POItem

sap.ui.require([
	"sap/ui/test/Opa5",
	"super/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"super/test/integration/pages/App",
	"super/test/integration/pages/Browser",
	"super/test/integration/pages/Master",
	"super/test/integration/pages/Detail",
	"super/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "super.view."
	});

	sap.ui.require([
		"super/test/integration/MasterJourney",
		"super/test/integration/NavigationJourney",
		"super/test/integration/NotFoundJourney",
		"super/test/integration/BusyJourney",
		"super/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});