/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
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
            console.log('item added');
        }

    });

    return ViewbookView;
});
