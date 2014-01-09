/*global define*/

define([
    'underscore',
    'backbone',
    'models/ModelBook'
], function (_, Backbone, ModelBook) {
    'use strict';

    var CollectionbooksbuyCollection = Backbone.Collection.extend({
        model: ModelBook,

        // Save in localStorage the books in cart
        localStorage: new Backbone.LocalStorage("Books")
    });

    return CollectionbooksbuyCollection;
});
