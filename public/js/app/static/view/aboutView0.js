define([
    'underscore',
    'backbone',
    'js/app/shared/model/navbarModel.js',
    'text!app/shared/template/navbar.html'
], function(
    _,
    Backbone,
    NavbarModel,
    NavbarTemplate
) {
    'use strict';

    var NavbarView = Backbone.View.extend({

        model: NavbarModel,
        NavbarTemplate: NavbarTemplate,
        isRendered: false,

        tagName: 'ul',
        className: 'nav navbar-nav',
        id: 'navbarnav',

        //events: {
        //    "change #bestofferSort": "bestOfferSortChangeHandler",
        //    "change #bestofferSortDirection": "bestOfferSortDirectionChangeHandler"
        //},

        initialize: function(args) {
            //    _.bindAll(this, 'bestOfferSortChangeHandler', 'bestOfferSortDirectionChangeHandler');
            //    this.model = args.model;
            //    this.parentView = args.parentView;
        },

        render: function() {
            var navbarTemplate = _.template(this.NavbarTemplate);
            this.$el.empty().html(navbarTemplate({
                model: this.model.toJSON()
            }));
            // if (!this.isRendered) {
            //     var searchFilterBestOfferSortTemplate = _.template(this.SearchFilterBestOfferSortTemplate);
            //     this.$el.empty().html(searchFilterBestOfferSortTemplate({
            //         model: this.model.toJSON()
            //     }));
            //
            //     this.setupVisualUIElements();
            //
            //     this.sortValueEl = this.$el.find('#bestofferSort').get(0);
            //     this.sortOrderEl = this.$el.find('#bestofferSortDirection').get(0);
            //
            //     if (this.model.get('SV') == 'default') {
            //         $(this.sortOrderEl).prop('disabled', 'disabled').selectpicker('refresh');
            //     } else {
            //         $(this.sortOrderEl).removeProp('disabled').selectpicker('refresh');
            //     }
            //
            //     this.isRendered = true;
            // }
            return this;
        },
        //
        // setupVisualUIElements: function() {
        //     var self = this;
        //     this.$el.find('select').selectpicker();
        // },
        //
        // bestOfferSortDirectionChangeHandler: function(e) {
        //     var sortValue = this.sortValueEl.selectedOptions[0].getAttribute('value');
        //     var sortOrder = e.currentTarget.selectedOptions[0].getAttribute('value');
        //     this.model.set('SV', sortValue);
        //     this.model.set('SO', this.sortOrderEnum[sortOrder]);
        // },
        //
        // bestOfferSortChangeHandler: function(e) {
        //     var sortValue = e.currentTarget.selectedOptions[0].getAttribute('value');
        //     var sortOrder = this.sortOrderEl.selectedOptions[0].getAttribute('value');
        //     this.model.set('SV', sortValue);
        //     this.model.set('SO', this.sortOrderEnum[sortOrder]);
        //     if (sortValue == 'default') {
        //         $(this.sortOrderEl).prop('disabled', 'disabled').selectpicker('refresh');
        //     } else {
        //         $(this.sortOrderEl).removeProp('disabled').selectpicker('refresh');
        //     }
        // },

    });

    return NavbarView;
});
