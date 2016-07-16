define([
    'underscore',
    'backbone',
    AppURLs.Static + '/js/app/shared/view/baseRoutableNavbarView.js',
    AppURLs.Static+'/js/app/static/model/contactModel.js',
    'text!app/static/template/contact.html'
], function(
    _,
    Backbone,
    BaseRoutableNavbarView,
    ContactModel,
    ContactTemplate
) {
    'use strict';

    var ContactView = BaseRoutableNavbarView.extend({

        model: ContactModel,
        ContactTemplate: ContactTemplate,
        isRendered: false,

        appElement: null,

        navbarText: 'Contact',
        navbarPath: 'contact',
        navbarIcon: 'user',

        tagName: 'div',
        className: 'contact-view',
        id: 'contactView',

        initialize: function() {
            _.bindAll(this, 'render');
            this.initializeBase();
        },

        render: function() {
            if (!this.isRendered) {
                var contactTemplate = _.template(this.ContactTemplate);
                this.$el.empty().html(contactTemplate({
                    model: this.model.toJSON()
                }));
                this.isRendered = true;
            }

            this.appElement.empty().append(this.$el);

            return this;
        }

    });

    return ContactView;
});
