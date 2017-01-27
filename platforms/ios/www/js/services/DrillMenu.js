'use strict';

rccalcApp.factory('DrillMenu', function () {

    var menus = [{
        id: 0,
        name: 'Fractional Inch',
        url: ''
    }, {
        id: 1,
        name: 'Number / Letter',
        url: ''
    }, {
        id: 2,
        name: 'Number',
        url: ''
    }, {
        id: 3,
        name: 'Letter',
        url: ''
    }, {
        id: 4,
        name: 'Metric',
        url: ''
    }, {
        id: 5,
        name: 'All Size Types',
        url: ''
    }, {
        id: 6,
        name: 'Tap Drills for U.S. Sizes',
        url: ''
    }, {
        id: 7,
        name: 'Tap Drills for Metric Sizes',
        url: ''
    }, {
        id: 8,
        name: 'Straight Pipe Tap Drills - NPS',
        url: ''
    }, {
        id: 9,
        name: 'Taper Pipe Tap Drills - NPT',
        url: ''
    }, {
        id: 10,
        name: 'Wood Screws for U.S. Sizes',
        url: ''
    }];

    return {
        all: function () {
            return menus;
        },
        get: function (id) {
            for (var i = 0; i < menus.length; i++) {
                if (menus[i].id === parseInt(id)) {
                    return menus[i];
                }
            }
            return null;
        }
    };
})
