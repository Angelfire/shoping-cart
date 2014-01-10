/*global define*/

define([
    'jquery',
    'backbone',
    'views/ViewShoppingCart',
    'views/ViewBooks',
    'views/ViewBooksSlider',
    'collections/CollectionBooksBuy',
    'collections/CollectionBooks'
], function ($, Backbone, ViewShoppingCart, ViewBooks, ViewBooksSlider, CollectionBooksBuy, CollectionBooks) {
    'use strict';

    var RouterRouter = Backbone.Router.extend({
        routes: {
          '': 'getHome',
          'checkout': 'getCart'
        },

        getHome: function(){
           // Collection of all books availables
          var collectionBooks = new CollectionBooks();

          // This is not the best solution, is better do the fetch in each model
          collectionBooks.fetch({ success: function(){
            var view = new ViewBooks({collection: collectionBooks});
            view.el;

            var viewsSlide = new ViewBooksSlider({ collection: collectionBooks });
            viewsSlide.el;       
          } });
        },

        getCart: function(){
          var viewShoppingCart = new ViewShoppingCart({ collection: CollectionBooksBuy });
        }

    });

    return RouterRouter;
});
