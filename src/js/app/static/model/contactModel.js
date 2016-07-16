define([
	'underscore',
	'backbone'
], function (_, Backbone) {
    'use strict';

    var ContactModel = Backbone.Model.extend({
        defaults: {
            Name: null,
            Email: null,
						Message: null
        }
    });

    return ContactModel;
});
