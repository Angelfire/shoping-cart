/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ModelbookModel = Backbone.Model.extend({
        defaults: {
          name: '',
          description: '',
          price: 0.0,
          thumbURL: '',
          imgURL: '',
          total: 0.0
        }
    });

    return ModelbookModel;
});
