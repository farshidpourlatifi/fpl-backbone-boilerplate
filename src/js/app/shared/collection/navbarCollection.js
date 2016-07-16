define([
    'underscore',
    'backbone',
    AppURLs.Static + '/js/app/shared/model/navbarModel.js',
], function(_, Backbone, NavbarModel) {
    'use strict';

    var NavbarCollection = Backbone.Collection.extend({
        model: NavbarModel
    });

    return NavbarCollection;
});
