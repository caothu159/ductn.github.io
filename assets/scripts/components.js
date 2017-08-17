define([], function() {
    "use strict";

    return function(name) {
        var components = {};

        function capitalizeFirstLetter(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        require([
            'knockout',
            'scripts/' + name,
        ], function(ko, component) {
            components['has' + capitalizeFirstLetter(name)] = ko.computed(function() {
                if (!ko.components.isRegistered(name)) {
                    ko.components.register(name, component);
                }
                return ko.components.isRegistered(name);
            }, components);
        });

        console.log(components);

        return components;
    };
});
