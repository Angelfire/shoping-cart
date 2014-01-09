/*global define*/

define([
    'underscore',
    'backbone',
    'localstorage',
    'models/ModelBook'
], function (_, Backbone, localstorage, ModelBook) {
    'use strict';

    var Collectionbooksbuy = Backbone.Collection.extend({
        model: ModelBook,

        // Save in localStorage the books in cart
        localStorage: new Backbone.LocalStorage("Books")
    });

    var collectionbooksbuy = new Collectionbooksbuy();

    return collectionbooksbuy;
});
