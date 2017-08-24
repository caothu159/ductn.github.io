define([
    'jquery',
    'knockout'
], function($, ko) {
    "use strict";

    function _prepareDate(str) {
        str = str.split('/');
        var $date = new Date('1970/1/1');
        if (str.length) {
            $date.setFullYear(str.pop());
        }
        if (str.length) {
            $date.setMonth(str.pop());
        }
        $date.toString = function() {
            return this.toLocaleDateString('en-US', { year: 'numeric', month: 'long'});
        };
        return $date;
    }

    var Experience = function Experience($experience) {
        var self = this;

        this.time = _prepareDate($experience.time);
        this.com = ko.observable($experience.com);
        this.job = ko.observable($experience.job);
        this.experience = ko.observableArray($experience.experience);
    };

    return Experience;
});
