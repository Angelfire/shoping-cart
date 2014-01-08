/*global define*/

define([
    'underscore',
    'backbone',
    'models/ModelBook'
], function (_, Backbone, ModelBook) {
    'use strict';

    var CollectionbooksbuyCollection = Backbone.Collection.extend({
        model: ModelBook
    });

    return CollectionbooksbuyCollection;
});
