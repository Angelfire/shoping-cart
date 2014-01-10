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

        tagName: 'tr',
        className: 'itemCart',

        initialize: function(){
            this.model.on('destroy', this.remove, this);
        },

        render: function(){
          this.$el.html( this.template( this.model.toJSON() ) );
          return this;
        },

        events: {
            'click .delete-item': 'deleteItem',
            'change .quantityItems' : 'quantityItem'
        },

        deleteItem: function() {
            this.model.destroy();        
        },

        quantityItem: function(e){
            var ammount = this.model.attributes.price * e.currentTarget.value;
            this.$el.find('.quantityItem').text(ammount);
        },


    });

    return ViewshoppingcartView;
});
