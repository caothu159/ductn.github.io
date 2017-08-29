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
    ], function(angular, angularApp) {

        $(function() {
            angular.bootstrap(document, ['angularApp']);
        });

        return angularApp;
    });
}));
