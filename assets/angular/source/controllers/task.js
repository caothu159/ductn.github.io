define([
    'jquery',
    'angularjs',
    /**
     * base app
     */
    'angular/source/app',
    'angular/source/modules',
], function($, ng, angularApp) {
    function TaskController($scope, $rootScope, $document, $q, $timeout) {
    }

    TaskController.prototype = Object.create({
    });

    angularApp.Controllers.TaskController = TaskController;
    angularApp.Modules.controller('TaskController', ['$scope', '$rootScope', '$document', '$q', '$timeout', angularApp.Controllers.TaskController]);
});
