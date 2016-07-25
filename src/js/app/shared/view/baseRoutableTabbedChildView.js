define([
    'underscore',
    'backbone'
], function(
    _,
    Backbone
) {
    'use strict';

    var BaseRoutableTabbedChildView = function(options) {
        this.inheritedEvents = [];
        this.attributes = {};
        Backbone.View.call(this, options);
    };

    _.extend(BaseRoutableTabbedChildView.prototype, Backbone.View.prototype, {

        isRendered: false,
        parentElement: null,
        tabbarText: null,
        tabbarPath: null,
        tabbarIcon: null,

        baseEvents: {},
        baseAttributes: {},

        events: function() {
            var e = _.extend({}, this.baseEvents);

            _.each(this.inheritedEvents, function(events) {
                e = _.extend(e, events);
            });

            return e;
        },

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

        initializeBase: function() {
            _.bindAll(this, 'destroy_view');
            var self = this;

            this.viewsRadioChanel = Backbone.Radio.channel('views', self);
            this.routesRadioChanel = Backbone.Radio.channel('routes', self);
            this.appRadioChanel = Backbone.Radio.channel('app', self);

            this.parentElement = Backbone.Radio.channel('app').request('parentElement', self);

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

        destroy_view: function() {
            // COMPLETELY UNBIND THE VIEW
            this.undelegateEvents();
            this.$el.removeData().off();
            // Remove view from DOM
            this.remove();
            Backbone.View.prototype.remove.call(this);

            this.isRendered = false;
        }
    });

    BaseRoutableTabbedChildView.extend = Backbone.View.extend;
    
    return BaseRoutableTabbedChildView;
});
