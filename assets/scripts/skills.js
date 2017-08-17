define([
    'jquery',
    'knockout',
    'text!templates/skills.html'
], function($, ko, template) {

    var Skills = function() {
        var self = this;

        this._skillsLoad = function() {
            $.ajax({
                method: 'GET',
                url: 'assets/data/skills.json',
                cache: false,
                dataType: 'text',
                success: function(resp) {
                    $.each(JSON.parse(resp), function(type, skills) {
                        self.$skills.push({
                            skill: type,
                            type: true,
                            start: 0
                        });
                        $.each(skills, function(index, skill) {
                            self.$skills.push({
                                skill: skill,
                                type: false,
                                start: 0
                            });
                        });
                    });

                }
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
