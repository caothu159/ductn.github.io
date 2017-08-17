(function(themeFactory) {

    define([
        'jquery',
    ], function($) {
        themeFactory($.noConflict());
    });
}(function themeFactory($) {
    "use strict";

    var app = {
        skills: {},
        experiences: {}
    };

    require([
        'knockout',
        'scripts/skills'
    ], function(ko, skills) {

        if (!ko.components.isRegistered('skills')) {
            ko.components.register('skills', skills);
        }

        var App = function() {
            this.experiences = ko.computed(function() {
                return app.experiences;
            }, this);
        };

        $(function() {
            ko.applyBindings($.extend(new App(), {
                isSkills: ko.computed(function() {
                    return ko.components.isRegistered('skills');
                }, this)
            }));
        });
    });

    $.ajax({
        method: 'GET',
        url: 'assets/data/experiences.json',
        cache: false,
        dataType: 'text',
        success: function(experiences) {
            experiences = JSON.parse(experiences);
            if ($.isEmptyObject(experiences)) {
                return;
            }
            app.experiences = experiences;
        }
    });

    $(function() {
        $(document.body).show();
    });

}));
