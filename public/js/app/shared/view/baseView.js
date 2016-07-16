define([
    'underscore',
    'backbone'
], function(
    _,
    Backbone
) {
    'use strict';

    var BaseView = Backbone.View.extend({

      isRendered: false,
      appElement: null,
      navbarText: null,
      navbarPath: null,
      navbarIcon: null,

      initialize: function(args) {
          _.bindAll(this, 'render', 'destroy_view');
          var self = this;
          this.appElement = args.appElement;

          var navbar = args.navbar;
          navbar.collection.add([
            {
              text: this.navbarText,
              path: this.navbarPath,
              icon: this.navbarIcon
            }
          ]);
          var router = args.router;
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

    return BaseView;
});
