define([
    'jquery',
    'angularjs',
    /**
     * configurations
     */
    'angular/source/app',
], function($, angular, angularApp) {
    angularApp.Modules = angular.module('angularApp', []);
    return angularApp;
});
