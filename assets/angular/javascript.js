(function(themeFactory) {

    define([
        'jquery',
    ], function($) {
        themeFactory($.noConflict());
    });
}(function themeFactory($) {
    "use strict";

    require([
        'angularjs',
        /**
         * base app
         */
        'angular/source/app',
        'angular/source/modules',
        /**
         * controllers
         */
        'angular/source/controllers/task',
    ], function(ng, angularApp) {

        $(function() {
            ng.bootstrap(document, ['angularApp']);
        });

        return angularApp;
    });
}));
