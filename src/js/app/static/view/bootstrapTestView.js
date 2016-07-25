define([
    'underscore',
    'backbone',
    AppURLs.Static + '/js/app/shared/view/baseRoutableNavbarView.js',
    AppURLs.Static + '/js/app/static/model/bootstrapTestModel.js',
    'text!app/static/template/bootstrapTest.html'
], function(
    _,
    Backbone,
    BaseRoutableNavbarView,
    BootstrapTestModel,
    BootstrapTestTemplate
) {
    'use strict';

    var BootstrapTestView = BaseRoutableNavbarView.extend({

        model: BootstrapTestModel,
        bootstrapTestTemplate: BootstrapTestTemplate,
        isRendered: false,

        appElement: null,

        navbarText: 'BootstrapTest',
        navbarPath: 'BootstrapTest',
        navbarIcon: 'plus',

        tagName: 'div',
        className: 'bootstrap-test-view',
        id: 'bootstrapTestView',

        initialize: function() {
            _.bindAll(this, 'render');
            this.initializeBase();
        },

        render: function() {
            if (!this.isRendered) {
                var bootstrapTestTemplate = _.template(this.bootstrapTestTemplate);
                this.$el.empty().html(bootstrapTestTemplate({
                    model: this.model.toJSON()
                }));
                this.isRendered = true;
            }

            this.appElement.empty().append(this.$el);

            return this;
        }

    });

    return BootstrapTestView;
});
