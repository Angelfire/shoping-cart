/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
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
            console.log('item added from slider');
        }

    });

    return ViewbooksliderView;
});
