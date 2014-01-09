/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'collections/CollectionBooksBuy',
    'views/ViewBook',
    'templates',
    'localstorage'
], function ($, _, Backbone, CollectionBooksBuy, ViewBook, JST, localstorage) {
    'use strict';

    var ViewbooksliderView = Backbone.View.extend({
        template: JST['app/scripts/templates/ViewBookSlider.hbs'],

        className: 'item',

        render: function(){
          this.$el.html( this.template( this.model.toJSON() ) );
          return this;
        },

        events: {
            'click .addbtn': 'addToCart'
        },

        addToCart: function(){
            CollectionBooksBuy.add(this.model);

            // Count total items
            $('#totalItems').text(CollectionBooksBuy.length);
        }

    });

    return ViewbooksliderView;
});
