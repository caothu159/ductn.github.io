define([
    'jquery',
    'angularjs',
    /**
     * configurations
     */
    'angular/source/app',
], function($, ng, angularApp) {
    'use strict';

    angularApp.Modules = ng.module('angularApp', []);
    return angularApp;
});
