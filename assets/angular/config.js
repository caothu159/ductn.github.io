requirejs.config({
    baseUrl: 'assets',
    paths: {
        jquery: 'libs/jquery.min',
        jqueryUi: 'libs/jquery-ui.min',
        jqueryMigrate: 'libs/jquery-migrate.min',
        angularjs: 'libs/angular.min',

        themeJavascript: 'angular/javascript',
    },
    shim: {
        jqueryMigrate: {
            deps: [
                'jquery',
            ],
        },
        angularjs: {
            exports: 'angular',
            deps: [
                'jquery',
            ],
        },
        themeJavascript: {
            deps: [
                'jquery',
                'jqueryUi',
                'jqueryMigrate',
                'angularjs',
            ],
        },
    },
    deps: [
        'themeJavascript',
    ],
    map: {
        '*': {}
    }
});
