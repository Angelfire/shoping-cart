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
        },
        pnotify: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        handlebars: '../bower_components/handlebars/handlebars',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min',
        localstorage: '../bower_components/backbone/backbone.localStorage-min',
        pnotify: '../bower_components/pines-notify/jquery.pnotify.min'
    }
});

require([
    'backbone',
    'routes/Router',
    'bootstrap'
], function (Backbone, Router) {
    var router = new Router();
    Backbone.history.start();

    // Bootstrap Carousel init
    $(".carousel").carousel();
    
});
