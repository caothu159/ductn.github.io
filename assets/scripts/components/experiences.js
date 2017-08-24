define([
    'jquery',
    'knockout',
    'scripts/components/experiences/experience',
    'text!templates/experiences.html'
], function($, ko, Experience, template) {
    "use strict";

    var Experiences = function() {
        var self = this;

        this._experiencesLoad = function() {
            $.getJSON('assets/data/experiences.json', function(resp) {
                resp = ko.utils.arrayMap(resp, function(experience) {
                    experience = new Experience(experience);
                    return experience;
                });
                self.$experiences(resp);
                self.$experiences.sort(function(left, right) {
                    return left.time > right.time ? -1 : 1;
                });
            });
        };

        this._experiences = function() {
            self._experiencesLoad();
            return [];
        };

        this.$experiences = ko.observableArray(this._experiences());
    };

    return {
        viewModel: Experiences,
        template: template
    };
});
