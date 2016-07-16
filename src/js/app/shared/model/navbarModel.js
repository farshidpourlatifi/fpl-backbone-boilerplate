define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var NavbarModel = Backbone.Model.extend({
        defaults: {
            text: null,
            path: null,
            icon: null, //glyphicon glyphicon-<icon>
            active: false
        }
    });

    return NavbarModel;
});
