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
        'angular/source/app',
    ], function(angular, angularApp) {

        $(function() {
            angular.bootstrap(document, ['angularApp']);
        });

        return angularApp;
    });
}));
