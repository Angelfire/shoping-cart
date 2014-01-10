/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ViewshoppingcartView = Backbone.View.extend({
        template: JST['app/scripts/templates/ViewItemCart.hbs'],

        el: 'itemCart',

        render: function(){
          this.$el.html( this.template( this.model.toJSON() ) );
          return this;
        }
        
    });

    return ViewshoppingcartView;
});
