(function(themeFactory) {

    define([
        'jquery',
    ], function($) {
        themeFactory($.noConflict());
    });
}(function themeFactory($) {
    "use strict";

    require([
        'knockout',
        'scripts/skills',
        'scripts/experiences'
    ], function(ko, skills, experiences) {

        if (!ko.components.isRegistered('skills')) {
            ko.components.register('skills', skills);
        }

        if (!ko.components.isRegistered('experiences')) {
            ko.components.register('experiences', experiences);
        }

        $(function() {
            var App = function() {

                this.hasSkills = ko.computed(function() {
                    return ko.components.isRegistered('skills');
                }, this);

                this.hasExperiences = ko.computed(function() {
                    return ko.components.isRegistered('experiences');
                }, this);
            };

            ko.applyBindings(new App());
        });
    });

    $(function() {
        $(document.body).show();
    });

}));
