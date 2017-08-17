define([
    'jquery',
    'knockout',
    'text!templates/experiences.html'
], function($, ko, template) {
    "use strict";

    var Experiences = function() {
        var self = this;

        this._experiencesLoad = function() {
            $.getJSON('assets/data/experiences.json', function(resp) {
                self.$experiences(resp);
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
