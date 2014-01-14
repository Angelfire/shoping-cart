/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'collections/CollectionBooksBuy',
    'templates'
], function ($, _, Backbone, CollectionBooksBuy, JST) {
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
            'change .quantityItems' : 'ammountItem'
        },

        deleteItem: function() {
            this.model.destroy();   
            this.notificationItem();

            // Updating number of book in the collection
            $('#totalItems').text(CollectionBooksBuy.length);
        },

        notificationItem: function(){        
            // Notification  
            $.pnotify({
                title: 'Book deleted!',
                delay: 750,
                text: 'Book has been deleted succesfully',
                type: 'error'
            });  
        },

        ammountItem: function(e){
            var ammount = this.model.get('price') * e.currentTarget.value;
            // var ammount = this.model.attributes.price * e.currentTarget.value;
            this.model.set('total', ammount);

            this.$el.find('.quantityItem').text(ammount);
        }

    });

    return ViewshoppingcartView;
});
