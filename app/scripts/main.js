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
        },
        localstorage: {
            deps: ['backbone'],
            exports: 'backbone'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        handlebars: '../bower_components/handlebars/handlebars',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min',
        localstorage: '../bower_components/backbone/backbone.localStorage-min'
    }
});

require([
    'backbone',
    'collections/CollectionBooks',
    'views/ViewBooks',
    'views/ViewBooksSlider',
    'routes/Router',
    'bootstrap'
], function (Backbone, CollectionBooks, ViewBooks, ViewBooksSlider, Router) {
    var router = new Router();
    Backbone.history.start();
    // Collection of all books availables
    var collectionBooks = new CollectionBooks();
    
    // Fetch collection of all availables book and display
    collectionBooks.fetch({ success: function(data){
        var view = new ViewBooks({collection: collectionBooks});
        view.el;

        var viewsSlide = new ViewBooksSlider({ collection: collectionBooks });
        viewsSlide.el;       
    } });

    // Bootstrap Carousel init
    $(".carousel").carousel();
    
});
