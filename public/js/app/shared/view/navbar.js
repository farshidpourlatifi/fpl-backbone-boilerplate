define([
    'underscore'
    'backbone',
    '../model/navbarModel.js',
    'text!../template/navbar.html'
], function(
    _, Backbone, SearchFilterBestOfferModel, SearchFilterBestOfferSortTemplate
) {
    'use strict';

    var SearchFilterBestOfferSortView = Backbone.View.extend({

        model: SearchFilterBestOfferModel,
        SearchFilterBestOfferSortTemplate: SearchFilterBestOfferSortTemplate,
        isRendered: false,

        sortValueEl: null,
        sortOrderEl: null,

        sortValue: null,
        sortOrder: null,


        sortOrderEnum: {
            'asc': 0,
            'desc': 1
        },

        tagName: 'div',
        className: 'car-ad-search-filter-sort-form form-horizontal pull-left',
        id: 'carAdSortSearchForm',

        events: {
            "change #bestofferSort": "bestOfferSortChangeHandler",
            "change #bestofferSortDirection": "bestOfferSortDirectionChangeHandler"
        },

        initialize: function(args) {
            _.bindAll(this, 'bestOfferSortChangeHandler', 'bestOfferSortDirectionChangeHandler');
            this.model = args.model;
            this.parentView = args.parentView;
        },

        render: function() {
            if (!this.isRendered) {
                var searchFilterBestOfferSortTemplate = _.template(this.SearchFilterBestOfferSortTemplate);
                this.$el.empty().html(searchFilterBestOfferSortTemplate({
                    model: this.model.toJSON()
                }));

                this.setupVisualUIElements();

                this.sortValueEl = this.$el.find('#bestofferSort').get(0);
                this.sortOrderEl = this.$el.find('#bestofferSortDirection').get(0);

                if (this.model.get('SV') == 'default') {
                    $(this.sortOrderEl).prop('disabled', 'disabled').selectpicker('refresh');
                } else {
                    $(this.sortOrderEl).removeProp('disabled').selectpicker('refresh');
                }

                this.isRendered = true;
            }
            return this;
        },

        setupVisualUIElements: function() {
            var self = this;
            this.$el.find('select').selectpicker();
        },

        bestOfferSortDirectionChangeHandler: function(e) {
            var sortValue = this.sortValueEl.selectedOptions[0].getAttribute('value');
            var sortOrder = e.currentTarget.selectedOptions[0].getAttribute('value');
            this.model.set('SV', sortValue);
            this.model.set('SO', this.sortOrderEnum[sortOrder]);
        },

        bestOfferSortChangeHandler: function(e) {
            var sortValue = e.currentTarget.selectedOptions[0].getAttribute('value');
            var sortOrder = this.sortOrderEl.selectedOptions[0].getAttribute('value');
            this.model.set('SV', sortValue);
            this.model.set('SO', this.sortOrderEnum[sortOrder]);
            if (sortValue == 'default') {
                $(this.sortOrderEl).prop('disabled', 'disabled').selectpicker('refresh');
            } else {
                $(this.sortOrderEl).removeProp('disabled').selectpicker('refresh');
            }
        },

    });

    return SearchFilterBestOfferSortView;
});




var NaveBar = Backbone.View.extend({

    tagName: "li",

    className: "document-row",

    events: {
        "click .icon": "open",
        "click .button.edit": "openEditDialog",
        "click .button.delete": "destroy"
    },

    initialize: function() {
        this.listenTo(this.model, "change", this.render);
    },

    render: function() {
        ...
    }

});
