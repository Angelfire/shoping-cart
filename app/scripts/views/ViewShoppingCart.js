/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'views/ViewItemCart',
    'templates'
], function ($, _, Backbone, ViewItemCart, JST) {
    'use strict';

    var ViewshoppingcartView = Backbone.View.extend({
        template: JST['app/scripts/templates/ViewShoppingCart.hbs'],

        el: '#midsection',

        initialize: function(){
          this.collection.on('add', this.addOne, this);
          this.render();
        },

        render: function(){
            this.$el.append( this.template() );
        	this.collection.each( this.addOne, this );
        	return this;
        },

        addOne: function(iteminCart){
            var itemCart = new ViewItemCart({ model: iteminCart });  
            this.$el.find('#itemCart').append( itemCart.render().el );
        }

    });

    return ViewshoppingcartView;
});
