define(
    [
        'jquery',
        'underscore',
        'backbone',
        AppURLs.Static + '/js/app/routes.js',

        AppURLs.Static + '/js/app/shared/view/navbarView.js',

        AppURLs.Static + '/js/app/static/model/homeModel.js',
        AppURLs.Static + '/js/app/static/view/homeView.js',

        AppURLs.Static + '/js/app/static/model/aboutModel.js',
        AppURLs.Static + '/js/app/static/view/aboutView.js',

        AppURLs.Static + '/js/app/static/model/contactModel.js',
        AppURLs.Static + '/js/app/static/view/contactView.js',

        'backbone.radio'
    ],
    function(
        $,
        _,
        Backbone,
        AppRoute,

        NavbarView,

        HomeModel,
        HomeView,

        AboutModel,
        AboutView,

        ContactModel,
        ContactView
    ) {
        'use strict';
        var App = {

            appRoutes: null,
            navbarModel: null,
            navbarView: null,
            staticViews: {},
            dynamicViews: {},

            viewsRadioChanel: null,
            routesRadioChanel: null,
            appRadioChanel: null,

            appElement: null,
            //BackbonehistoryRoot: '/#/',

            init: function() {
                var self = this;
                this.appElement = $('#container');

                Backbone.Radio.DEBUG = true;
                this.viewsRadioChanel = Backbone.Radio.channel('views');
                this.routesRadioChanel = Backbone.Radio.channel('routes');
                this.appRadioChanel = Backbone.Radio.channel('app');

                // this.navbarView = new NavbarView({
                //     navbarCollection: [{
                //         text: 'About',
                //         path: 'about'
                //     }, {
                //         text: 'Contact',
                //         path: 'contact',
                //         icon: 'envelope'
                //     }]
                // });
                this.navbarView = new NavbarView();
                this.appRoutes = new AppRoute();

                this.appRadioChanel.reply('appElement', this.appElement);
                this.appRadioChanel.reply('appRoutes', this.appRoutes);
                this.appRadioChanel.reply('navbarView', this.navbarView);

                this.staticViews.home = new HomeView({
                    model: new HomeModel()
                });
                this.staticViews.about = new AboutView({
                    model: new AboutModel()
                });
                this.staticViews.contact = new ContactView({
                    model: new ContactModel()
                });

                Backbone.history.start({
                    //pushState: true,
                    //root: this.BackbonehistoryRoot
                });

                $('#navbar').append(this.navbarView.render().$el);

                //this.appRoutes.navigate('/dashboard');

                //this.appRoutes.navigate('about');
                // var worker = new Worker('js/app/worker/worker.js');
                //
                // worker.addEventListener('message', function(event) {
                //     var data = event.data;
                //     // primeFactorization(5000000000425343804321);
                //     console.log('main: message', data);
                // });
                // worker.postMessage({data:'Data From App.'});
                // debugger;

            },

            Run: function() {
                this.init();
            },

            Destroy: function() {
                Backbone.history.stop();
                Backbone.history = undefined; // Could also probably use delete here :)
                //Backbone.history.delete();
            },
        };
        return App;
    });
