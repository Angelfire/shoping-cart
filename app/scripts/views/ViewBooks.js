/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'views/ViewBook', 
    'templates'
], function ($, _, Backbone, ViewBook, JST) {
    'use strict';

    var ViewbooksView = Backbone.View.extend({
        template: JST['app/scripts/templates/ViewBooks.hbs'],

        el: '#midsection',

        initialize: function(){
          this.collection.on('add', this.addOne, this);
          this.render();
        },

        render: function(){          
          this.$el.append( this.template() );
          this.collection.each( this.addOne, this );
          return this;
        },

        addOne: function(book){
          var view = new ViewBook({model: book});
          this.$el.find('#books-list').append( view.render().el );
        }

    });

    return ViewbooksView;
});
