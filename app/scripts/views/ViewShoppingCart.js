/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'views/ViewItemCart',
    'collections/CollectionBooksBuy',
    'templates'
], function ($, _, Backbone, ViewItemCart, CollectionBooksBuy, JST) {
    'use strict';

    var ViewshoppingcartView = Backbone.View.extend({
        template: JST['app/scripts/templates/ViewShoppingCart.hbs'],

        el: '#midsection',

        initialize: function(){
          this.$el.empty();
          this.collection.on('add', this.addOne, this);
          this.collection.on('change', this.totalAmmount, this);
          this.collection.on('destroy', this.totalAmmount, this);
          this.render();
          this.totalAmmount();
        },

        render: function(){
          this.$el.append( this.template() );
          this.collection.each( this.addOne, this );
        	return this;
        },

        addOne: function(iteminCart){
            var itemCart = new ViewItemCart({ model: iteminCart });
            this.$el.find('#itemsCart').append( itemCart.render().el );
        },

        totalAmmount: function(){
            var sum = 0;
            this.collection.models.forEach(function(item){
              sum += item.get('total');          
            });

            this.$el.find('#total-ammount').text(sum);
        }

    });

    return ViewshoppingcartView;
});
