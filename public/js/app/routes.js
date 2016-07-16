define([
    'underscore',
    'backbone'
], function(
    _,
    Backbone
) {
    'use strict';

    var AppRoute = Backbone.Router.extend({

        routes: {
            // "": "home", // #home
            // "home": "home", // #home
            // "help": "help", // #help
            // "about": "about", // #about
            // "contact": "contact", // #contact
            // "search/:query": "search", // #search/kiwis
            // "search/:query/p:page": "search" // #search/kiwis/p7
        },
        //
        // home: function() {
        //     console.log('Home Route.');
        // },
        //
        // about: function() {
        //     console.log('About Route.');
        // },
        //
        // contact: function() {
        //     console.log('Contact Route.');
        // },
        //
        // help: function() {
        //     console.log('Help Route.');
        // },
        //
        // search: function(query, page) {
        //     console.log('Search Route, Query: ' + query + ', page: ' + page);
        // }

    });


    return AppRoute;
});
