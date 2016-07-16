define([
    AppURLs.Static + '/js/app/app.js',
    AppURLs.Static + '/js/app/routes.js',
    AppURLs.Static + '/js/app/shared/collection/navbarCollection.js',

    AppURLs.Static + '/js/app/shared/view/navbarView.js',

    AppURLs.Static + '/js/app/static/model/homeModel.js',
    AppURLs.Static + '/js/app/static/view/homeView.js',

    AppURLs.Static + '/js/app/static/model/aboutModel.js',
    AppURLs.Static + '/js/app/static/view/aboutView.js',

    AppURLs.Static + '/js/app/static/model/contactModel.js',
    AppURLs.Static + '/js/app/static/view/contactView.js',

    AppURLs.Static + '/js/app/shared/view/baseRoutableNavbarView.js',

    'backbone.radio'


], function(
    App,
    AppRoute,
    NavbarCollection,
    NavbarView,

    HomeModel,
    HomeView,

    AboutModel,
    AboutView,

    ContactModel,
    ContactView,

    BaseRoutableNavbarView
) {
    'use strict';

    App.Run();

    describe('App Chanels', function() {

        // beforeEach(function() {
        //     // runs before each test in this block
        //     App.Run();
        // });
        //
        // afterEach(function() {
        //     // runs after each test in this block
        //     App.Destroy();
        // });

        it('navbarView request on app Chanel should be an instance of NavbarView', function() {
            var navbar = Backbone.Radio.channel('app').request('navbarView');
            expect(navbar).to.be.an.instanceof(NavbarView);
        });


        it('appRoutes request on app Chanel should be an instance of NavbarView', function() {
            var router = Backbone.Radio.channel('app').request('appRoutes');
            expect(router).to.be.an.instanceof(AppRoute);
        });

    });

    describe('App Tests', function() {

        // beforeEach(function() {
        //     // runs before each test in this block
        //     App.Run();
        // });
        //
        // afterEach(function() {
        //     // runs after each test in this block
        //     App.Destroy();
        // });

        it('should exist', function() {
            expect(App).to.exist;
        });

        it('should be an instance of Object', function() {
            expect(App).to.be.an.instanceof(Object);
        });

    });


    describe('Navbar', function() {

        var navbar = Backbone.Radio.channel('app').request('navbarView');

        var navbarCollection = navbar.collection;

        debugger;

        it('should be an instance of NavbarCollection', function() {
            expect(navbarCollection).to.be.an.instanceof(NavbarCollection);
        });

        it('navbar should have 3 items', function() {
            expect(navbarCollection.size()).to.be.an.instanceof(NavbarCollection);
        });

    });

});
