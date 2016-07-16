define([
    'underscore',
    'backbone',
    AppURLs.Static + '/js/app/shared/view/baseRoutableNavbarView.js',
    AppURLs.Static + '/js/app/static/model/aboutModel.js',
    'text!app/static/template/about.html'
], function(
    _,
    Backbone,
    BaseRoutableNavbarView,
    AboutModel,
    AboutTemplate
) {
    'use strict';

    var AboutView = BaseRoutableNavbarView.extend({

        model: AboutModel,
        AboutTemplate: AboutTemplate,
        isRendered: false,

        appElement: null,

        navbarText: 'About',
        navbarPath: 'about',
        navbarIcon: 'plus',

        tagName: 'div',
        className: 'about-view',
        id: 'aboutView',

        initialize: function() {
            _.bindAll(this, 'render');
            this.initializeBase();
        },

        render: function() {
            if (!this.isRendered) {
                var aboutTemplate = _.template(this.AboutTemplate);
                this.$el.empty().html(aboutTemplate({
                    model: this.model.toJSON()
                }));
                this.isRendered = true;
            }

            this.appElement.empty().append(this.$el);

            return this;
        }

    });

    return AboutView;
});
