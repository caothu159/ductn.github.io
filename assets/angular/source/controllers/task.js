define([
    'jquery',
    'angularjs',
    /**
     * base app
     */
    'angular/source/app',
    'angular/source/modules',
], function($, ng, angularApp) {

    /**
     * @param Object  $scope
     * @param Object  $rootScope
     * @param Object  $document
     * @param Object  $q
     * @param Object  $timeout
     */
    function TaskController($scope, $rootScope, $document, $q, $timeout) {
        this.$scope = $scope;
        this.$rootScope = $rootScope;
        this.$document = $document;
        this.$q = $q;
        this.$timeout = $timeout;
        this.$scope.tasks = [];
        this.$scope.ready = false;
        var self = this;

        this.$scope.tasksJson = function(){
            return JSON.stringify(self.$scope.tasks, null, 2);
        };

        this.$document.ready(function() {
            self.$scope.$apply(function() {
                self.$scope.ready = true;
            });
            self.$rootScope.$broadcast('change');
        });

        /**
         * watch params and trigger when change
         */
        this.$scope.$watch(function() {
                return JSON.stringify({
                    ready: self.$scope.ready
                }, null, 2);
            },
            function(newValue, oldValue) {
                if (oldValue != newValue) {
                    self.$rootScope.$broadcast('change');
                }
            });

        /**
         * Dispatch event when change
         */
        this.$scope.$on('change', function(event) {
            self.getTasks();
        });

        this.getTasks = function getTasks() {
            if (!self.$scope.ready) {
                self.$scope.$apply(function() {
                    self.$scope.ready = true;
                });
                return;
            }

            $.getJSON('assets/angular/data.json', function(resp) {
                self.$scope.$apply(function() {
                    self.$scope.tasks = resp;
                });
            });
        };
    }

    angularApp.Controllers.TaskController = TaskController;
    angularApp.Modules.controller('TaskController', ['$scope', '$rootScope', '$document', '$q', '$timeout', angularApp.Controllers.TaskController]);
});
