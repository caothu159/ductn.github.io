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
        'scripts/components/skills',
        'scripts/components/experiences'
    ], function(ko, skills, experiences) {

        var App = function() {

            this.hasSkills = ko.computed(function() {
                if (!ko.components.isRegistered('skills')) {
                    ko.components.register('skills', skills);
                }
                return ko.components.isRegistered('skills');
            }, this);

            this.hasExperiences = ko.computed(function() {
                if (!ko.components.isRegistered('experiences')) {
                    ko.components.register('experiences', experiences);
                }
                return ko.components.isRegistered('experiences');
            }, this);
        };

        ko.applyBindings(new App());
    });

}));
