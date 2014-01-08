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
        }
    });

    return ViewbooksliderView;
});
