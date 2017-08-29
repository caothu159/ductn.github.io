define([
    'jquery',
    'knockout',
    'text!templates/skills.html'
], function($, ko, template) {
    "use strict";

    var Skills = function() {
        var self = this;

        this._skillsLoad = function() {
            $.getJSON('assets/data/skills.json', function(resp) {
                $.each(resp, function(type, skills) {
                    self.$skills.push({
                        skill: type,
                        type: true,
                        start: 0,
                        link: false
                    });
                    $.each(skills, function(index, skill) {
                        self.$skills.push({
                            skill: ($.type(index) === "string") ? index : skill,
                            type: false,
                            start: 0,
                            link: ($.type(index) === "string") ? skill : false
                        });
                    });
                });

            });
        };

        this._skills = function() {
            self._skillsLoad();
            return [];
        };

        this.$skills = ko.observableArray(this._skills());
    };

    return {
        viewModel: Skills,
        template: template
    };
});
