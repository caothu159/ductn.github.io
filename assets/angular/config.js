requirejs.config({
    baseUrl: 'assets',
    paths: {
        jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min',
        jqueryUi: 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min',
        jqueryMigrate: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.0.0/jquery-migrate.min',
        angularjs: 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular.min',

        themeJavascript: 'angular/javascript',
    },
    shim: {
        jqueryMigrate: {
            'deps': [
                'jquery',
            ],
        },
        angularjs: {
            exports: 'angular',
            'deps': [
                'jquery',
            ],
        },
        themeJavascript: {
            'deps': [
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
