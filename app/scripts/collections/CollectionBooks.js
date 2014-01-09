/*global define*/

define([
    'underscore',
    'backbone',
    'models/ModelBook'
], function (_, Backbone, ModelBook) {
    'use strict';

    var Collectionbooks = Backbone.Collection.extend({
        model: ModelBook,

        // Collection of books
        url: 'scripts/books.json'
        
    });

    return Collectionbooks;
});
