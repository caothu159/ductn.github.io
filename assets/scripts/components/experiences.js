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
                self.$experiences.sort(function(left, right) {
                    return self._getDateFromString(left.time) > self._getDateFromString(right.time) ? -1 : 1;
                });
            });
        };

        this._experiences = function() {
            self._experiencesLoad();
            return [];
        };

        this.$experiences = ko.observableArray(this._experiences());

        this._getDateFromString = function _getDateFromString(str) {
            str = str.split('/');
            var date = new Date('1970/1/1');
            if (str.length) {
                date.setFullYear(str.pop());
            }
            if (str.length) {
                date.setMonth(str.pop());
            }
            // date.toLocaleDateString('en-US', { year: 'numeric', month: 'long'})
            return date;
        };
    };

    return {
        viewModel: Experiences,
        template: template
    };
});
