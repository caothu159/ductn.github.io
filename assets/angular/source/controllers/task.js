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

        this.$scope.tasksJson = function() {
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
                    self.$scope.tasks = [];
                    ng.forEach(resp, function($category, index) {
                        self.$scope.tasks.push(new TaskCategory($category));
                    });
                });
            });
        };

        /**
         * TaskCategory
         */
        var TaskCategory = function TaskCategory($category) {
            this._init = function _init($category) {
                this.IDCategory = $category.IDCategory;
                this.NameCategory = $category.NameCategory;
                this.Task = this._initTask($category.Task);
            };

            var self = this;

            this._initTask = function _initTask($tasks) {
                var _tasks = [];
                ng.forEach($tasks, function($task, index) {
                    _tasks.push(new Task($task));
                });
                return _tasks;
            };

            this.remove = function remove($task) {
                _index = self.Task.indexOf($task);
                delete self.Task[self.Task.indexOf($task)];
                self.Task.splice(_index, 1);
            };

            this.add = function add($task) {
                self.Task.push(new Task($task));
            };

            this._init($category);
        };

        /**
         * Task
         */
        var Task = function Task($task) {
            this._init = function _init($task) {
                this.TaskName = $task.TaskName;
                this.TaskType = $task.TaskType;
                this.TaskCategory = $task.TaskCategory;
                this.TaskTimeline = $task.TaskTimeline;
                this.NewBuild = $task.NewBuild;
                this.AffiliateLink = $task.AffiliateLink;
                this.HelpText = $task.HelpText;
                this.Active = $task.Active;
            };

            var self = this;

            this._init($task);
        };
    }

    angularApp.Controllers.TaskController = TaskController;
    angularApp.Modules.controller('TaskController', ['$scope', '$rootScope', '$document', '$q', '$timeout', angularApp.Controllers.TaskController]);
});
