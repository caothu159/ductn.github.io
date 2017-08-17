requirejs.config({
    baseUrl: 'assets/scripts',
    paths: {
        jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min',
        jqueryUi: 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min',
        jqueryMigrate: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.0.0/jquery-migrate.min',
        knockout: 'https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.2/knockout-min',
        themeJavascript: 'javascript',
    },
    shim: {
        jqueryMigrate: {
            'deps': [
                'jquery',
            ],
        },
        themeJavascript: {
            'deps': [
                'jquery',
                'jqueryMigrate',
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
