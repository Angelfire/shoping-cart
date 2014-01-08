/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        handlebars: '../bower_components/handlebars/handlebars',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min'
    }
});

require([
    'backbone',
    'collections/CollectionBooks',
    'views/ViewBooks',
    'views/ViewBooksSlider',
    'bootstrap'
], function (Backbone, CollectionBooks, ViewBooks, ViewBooksSlider) {
    Backbone.history.start();
    var collectionBooks = new CollectionBooks();
    
    collectionBooks.fetch().then(function(data){
        var view = new ViewBooks({collection: collectionBooks});
        view.el;

        var viewsSlide = new ViewBooksSlider({ collection: collectionBooks });
        viewsSlide.el;

        
        $(".carousel").carousel();

       
    });
    
});
