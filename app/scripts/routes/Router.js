/*global define*/

define([
    'jquery',
    'backbone',
    'views/ViewShoppingCart',
    'collections/CollectionBooksBuy'
], function ($, Backbone, ViewShoppingCart, CollectionBooksBuy) {
    'use strict';

    var RouterRouter = Backbone.Router.extend({
        routes: {
          'checkout': 'getCart'
        },

        getCart: function(){
            var collectionBooksBuy = new CollectionBooksBuy();
            var viewShoppingCart = new ViewShoppingCart({ collection: collectionBooksBuy });
            this.render();
        }

    });

    return RouterRouter;
});
