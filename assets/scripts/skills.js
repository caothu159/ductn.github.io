define([
    'jquery',
    'knockout',
    'text!templates/skills.html'
], function($, ko, template) {

    var Skills = function() {
        var self = this;

        this._skills = [];

        this.skillsLoad = function() {
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
                    $.each(skills, function(index, skills) {
                        self._skills.push({
                            skill: index,
                            type: true,
                            start: 0
                        });
                        $.each(skills, function(index, skill) {
                            self._skills.push({
                                skill: skill,
                                type: false,
                                start: 0
                            });
                        });
                    });
                }
            });
        };

        this.getSkills = function() {
            if ($.isEmptyObject(self._skills)) {
                self.skillsLoad();
            }
            return self._skills;
        };

        this.skills = ko.computed(function() {
            return this.getSkills;
        }, this);

        this.isLoaded = ko.observable('hehe');
    };

    return {
        viewModel: Skills,
        template: template
    };
});
