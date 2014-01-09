/*global define*/

define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var RouterRouter = Backbone.Router.extend({
        routes: {
          'checkout': 'getCart'
        },

        getCart: function(){
          console.log("accesing to cart shopping");
        }

    });

    return RouterRouter;
});
