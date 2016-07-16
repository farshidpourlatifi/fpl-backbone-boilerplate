define([
    'underscore',
    'backbone',
    AppURLs.Static + '/js/app/shared/view/baseRoutableNavbarView.js',
    AppURLs.Static+'/js/app/static/model/homeModel.js',
    'text!app/static/template/home.html'
], function(
    _,
    Backbone,
    BaseRoutableNavbarView,
    HomeModel,
    HomeTemplate
) {
    'use strict';

    var HomeView = BaseRoutableNavbarView.extend({

        model: HomeModel,
        HomeTemplate: HomeTemplate,
        isRendered: false,

        appElement: null,

        navbarText: 'Dashboard',
        navbarPath: '',
        navbarIcon: 'dashboard',

        tagName: 'div',
        className: 'home-view',
        id: 'homeView',

        initialize: function() {
            _.bindAll(this, 'render');
            this.initializeBase();
        },

        // initialize: function() {
        //     _.bindAll(this, 'render', 'destroy_view');
        //     var self = this;
        //     this.appElement = Backbone.Radio.channel('app').request('appElement');
        //     var router = Backbone.Radio.channel('app').request('appRoutes');
        //     //router.routes.home = 'home';
        //     //router.routes[''] = 'home';
        //     router.route('', 'home', this.render);
        //     router.route('home', 'home', this.render);
        //
        //     router.on('route', function(route, param){
        //       if(route != 'home'){
        //         self.destroy_view();
        //       }
        //     });
        //     //router.home = this.render;
        // },

        render: function() {
            if (!this.isRendered) {
                var homeTemplate = _.template(this.HomeTemplate);
                this.$el.empty().html(homeTemplate({
                    model: this.model.toJSON()
                }));
                this.isRendered = true;
            }

            this.appElement.empty().append(this.$el);

            return this;
        }

    });

    return HomeView;
});
