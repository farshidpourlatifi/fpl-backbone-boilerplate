define([
    'underscore',
    'backbone',
    AppURLs.Static + '/js/app/shared/view/baseRoutableNavbarView.js',
], function(
    _,
    Backbone,
    BaseRoutableNavbarView
) {
    'use strict';

    var BaseRoutableNavbarContainerView = function(options) {
        //this.inheritedEvents = [];
        //this.attributes = {};
        //Backbone.View.call(this, options);
    };

    _.extend(BaseRoutableNavbarContainerView.prototype, BaseRoutableNavbarView.prototype, Backbone.View.prototype, {
/*
        isRendered: false,
        appElement: null,
        navbarText: null,
        navbarPath: null,
        navbarIcon: null,

        baseEvents: {},
        baseAttributes: {},
*/
        childViews: [],
/*
        events: function() {
            var e = _.extend({}, this.baseEvents);

            _.each(this.inheritedEvents, function(events) {
                e = _.extend(e, events);
            });

            return e;
        },
*/
/*
        addEvents: function(eventObj) {
            this.inheritedEvents.push(eventObj);
        },

        addAttributes: function(attr) {
            this.attributes = _.extend(this.attributes, attr);
            this.updateAttributes();
        },

        updateAttributes: function() {
            this.$el.attr(this.attributes);
        },
*/
/*
        initializeBase: function() {
            _.bindAll(this, 'destroy_view');
            var self = this;

            this.viewsRadioChanel = Backbone.Radio.channel('views', self);
            this.routesRadioChanel = Backbone.Radio.channel('routes', self);
            this.appRadioChanel = Backbone.Radio.channel('app', self);

            this.appElement = Backbone.Radio.channel('app').request('appElement', self);

            var navbar = Backbone.Radio.channel('app').request('navbarView', self);
            navbar.collection.add([{
                text: this.navbarText,
                path: this.navbarPath,
                icon: this.navbarIcon
            }]);

            var router = Backbone.Radio.channel('app').request('appRoutes', self);
            //router.routes.about = 'about';
            //router.about = this.render;

            router.route(this.navbarPath, this.navbarText, this.render);
            router.on('route', function(route, param) {
                if (route != self.navbarText) {
                    self.destroy_view();
                }
            });
        },
        */

        destroy_view: function() {

            var self = this;
            this.childViews.forEach(function(childView,index){
                childView.destroy_view();
            }, self);

            // COMPLETELY UNBIND THE VIEW
            this.undelegateEvents();
            this.$el.removeData().off();
            // Remove view from DOM
            this.remove();
            Backbone.View.prototype.remove.call(this);

            this.isRendered = false;
        }
    });

    BaseRoutableNavbarContainerView.extend = Backbone.View.extend;
    //
    // var BaseRoutableNavbarView = Backbone.View.extend({
    //
    //     isRendered: false,
    //     appElement: null,
    //     navbarText: null,
    //     navbarPath: null,
    //     navbarIcon: null,
    //
    //     initialize: function(args) {
    //         _.bindAll(this, 'render', 'destroy_view');
    //         var self = this;
    //         this.appElement = args.appElement;
    //
    //         var navbar = args.navbar;
    //         navbar.collection.add([{
    //             text: this.navbarText,
    //             path: this.navbarPath,
    //             icon: this.navbarIcon
    //         }]);
    //         var router = args.router;
    //         router.route(this.navbarPath, this.navbarText, this.render);
    //         router.on('route', function(route, param) {
    //             if (route != self.navbarText) {
    //                 self.destroy_view();
    //             }
    //         });
    //     },
    //
    //     destroy_view: function() {
    //         // COMPLETELY UNBIND THE VIEW
    //         this.undelegateEvents();
    //         this.$el.removeData().off();
    //         // Remove view from DOM
    //         this.remove();
    //         Backbone.View.prototype.remove.call(this);
    //
    //         this.isRendered = false;
    //     }
    //
    // });

    return BaseRoutableNavbarContainerView;
});
