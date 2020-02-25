sap.ui.define([
	"sap/ui/test/Opa5",
	"com/apptech/app-retention/test/integration/arrangements/Startup",
	"com/apptech/app-retention/test/integration/BasicJourney"
], function(Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		pollingInterval: 1
	});

});
