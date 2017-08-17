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
        'knockout'
    ], function(ko) {

        var App = function() {
            this.experiences = ko.computed(function() {
                return app.experiences;
            }, this);

            this.skills = ko.computed(function() {
                var _skills = [];
                $.each(app.skills, function(index, skills) {
                    _skills.push({
                        skill: index,
                        type: true,
                        start: 0
                    });
                    $.each(skills, function(index, skill) {
                        _skills.push({
                            skill: skill,
                            type: false,
                            start: 0
                        });
                    });
                });
                return _skills;
            }, this);
        };
        ko.applyBindings(new App());
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

    $.ajax({
        method: 'GET',
        url: 'assets/data/skills.json',
        cache: false,
        dataType: 'text',
        success: function(skills) {
            skills = JSON.parse(skills);
            if ($.isEmptyObject(skills)) {
                return;
            }
            app.skills = skills;
        }
    });

    $(function() {
        $(document.body).show();
    });

}));
