/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'views/ViewBookSlider'
], function ($, _, Backbone, ViewBookSlider) {
    'use strict';

    var ViewbookssliderView = Backbone.View.extend({
         el: '#midsection',

        initialize: function(){
          this.collection.on('add', this.addOne, this);
          this.render();
        },

        render: function(){ 
          this.collection.each( this.addOne, this );
          this.$el.find('.item').first().addClass('active');
          return this;
        },

        addOne: function(slide){
          var view = new ViewBookSlider({model: slide});
          this.$el.find('.carousel-inner').append( view.render().el );
        }
    });

    return ViewbookssliderView;
});
