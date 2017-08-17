(function(themeFactory) {

    define([
        'jquery',
    ], function($) {
        themeFactory($.noConflict());
    });
}(function themeFactory($) {
    "use strict";

    var app = {};

    require([
        'knockout'
    ], function(ko) {

        var Experiences = function() {
            this.getExperiences = ko.computed(function() {
                return app.experiences;
            }, this);
        };
        ko.applyBindings(new Experiences(), document.getElementById('experiences'));
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
