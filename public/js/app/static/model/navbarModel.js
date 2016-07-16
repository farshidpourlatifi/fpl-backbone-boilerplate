define([
	'underscore',
	'backbone'
], function (_, Backbone) {
    'use strict';

    var NavbarModel = Backbone.Model.extend({
        defaults: {
            Home: {Text:"Home", Path: "/"},
            SolidLinks: [
              {Text:"About", Path: "/#about"},
              {Text:"Contact", Path: "/#contact"},
            ],
            DynamicLinks: []
        }
    });

    return NavbarModel;
});
