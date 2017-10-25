jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"super/test/integration/NavigationJourneyPhone",
		"super/test/integration/NotFoundJourneyPhone",
		"super/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});