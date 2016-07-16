define([
    'underscore',
    'backbone',
    AppURLs.Static + '/js/app/shared/model/navbarModel.js',
    AppURLs.Static + '/js/app/shared/collection/navbarCollection.js',
    'text!app/shared/template/navbar.html'
], function(
    _,
    Backbone,
    NavbarModel,
    NavbarCollection,
    NavbarTemplate
) {
    'use strict';

    var NavbarView = Backbone.View.extend({

        //model: NavbarModel,
        collection: NavbarCollection,
        NavbarTemplate: NavbarTemplate,
        isRendered: false,

        tagName: 'div',
        className: 'container',

        events: {
            "click a:not([data-bypass])": "navBarItemClicled",
            //    "change #bestofferSortDirection": "bestOfferSortDirectionChangeHandler"
        },

        initialize: function(args) {
            _.bindAll(this, 'render', 'navBarItemClicled');
            this.collection = new NavbarCollection();
            //this.collection.add(args.navbarCollection);
        },

        render: function() {
            var self = this;
            var navbarTemplate = _.template(this.NavbarTemplate);
            this.$el.empty().html(navbarTemplate({
                items: this.collection.toJSON()
            }));

            // // All navigation that is relative should be passed through the navigate
            // // method, to be processed by the router.  If the link has a data-bypass
            // // attribute, bypass the delegation completely.
            // $(document).on("click", "a:not([data-bypass])", function(evt) {
            //     // Get the anchor href and protcol
            //     var href = $(this).attr("href");
            //     var protocol = this.protocol + "//";
            //
            //     // Ensure the protocol is not part of URL, meaning its relative.
            //     if (href && href.slice(0, protocol.length) !== protocol &&
            //         href.indexOf("javascript:") !== 0) {
            //         // Stop the default event to ensure the link will not cause a page
            //         // refresh.
            //         evt.preventDefault();
            //
            //         // `Backbone.history.navigate` is sufficient for all Routers and will
            //         // trigger the correct events.  The Router's internal `navigate` method
            //         // calls this anyways.
            //         //var regex = new RegExp('^'+self.BackbonehistoryRoot.replace(/\//g,'\\/'));
            //         //var navigationRoute = href.replace(regex, '');
            //         //console.log('navigationRoute: '+navigationRoute);
            //         //Backbone.history.navigate(navigationRoute, true);
            //         Backbone.history.navigate(href, true);
            //     }
            // });

            return this;
        },

        navBarItemClicled: function(evt) {
            this.$el.find('li').removeClass('active');
            var $elem = $(evt.currentTarget);
            var $elemParentLi = $elem.closest('li').addClass('active');

            var href = $elem.attr("href");
            var protocol = $elem.get(0).protocol + "//";
            if (href && href.slice(0, protocol.length) !== protocol &&
                href.indexOf("javascript:") !== 0 && href.indexOf("#") === 1) {
                // Stop the default event to ensure the link will not cause a page
                // refresh.
                evt.preventDefault();

                // `Backbone.history.navigate` is sufficient for all Routers and will
                // trigger the correct events.  The Router's internal `navigate` method
                // calls this anyways.
                //var regex = new RegExp('^'+self.BackbonehistoryRoot.replace(/\//g,'\\/'));
                //var navigationRoute = href.replace(regex, '');
                //console.log('navigationRoute: '+navigationRoute);
                //Backbone.history.navigate(navigationRoute, true);
                Backbone.history.navigate(href, true);
            }
        },

    });

    return NavbarView;
});
