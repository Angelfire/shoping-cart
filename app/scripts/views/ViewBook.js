/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'collections/CollectionBooksBuy',
    'templates',
    'localstorage'
], function ($, _, Backbone, CollectionBooksBuy, JST) {
    'use strict';

    var ViewbookView = Backbone.View.extend({
        template: JST['app/scripts/templates/ViewBook.hbs'],

        tagName: 'li',

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

            // Book has been added
            this.$el.find('.addbtn')
                .addClass('btn-success')
                .removeClass('btn-primary')
                .val('Added')
                .prop('disabled',true);

            // Notification
            var hola = "hola";
            $.pnotify({
                title: 'Book added',
                delay: 750,
                text: 'Book has been added succesfully!',
                type: 'success'
            });
        }

    });

    return ViewbookView;
});
