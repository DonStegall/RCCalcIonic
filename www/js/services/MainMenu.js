'use strict';

rccalcApp.factory('MainMenu', function () {

    var menus = [{
        id: 0,
        name: 'Unit Converter',
        url: ''
    }, {
        id: 1,
        name: 'Wing Area',
        url: ''
    }, {
        id: 2,
        name: 'Wing Loading',
        url: ''
    }, {
        id: 3,
        name: 'G-Force',
        url: ''
    }, {
        id: 4,
        name: 'Pitch Speed',
        url: ''
    }, {
        id: 5,
        name: 'Engine Size',
        url: ''
    }, {
        id: 6,
        name: 'Tank Size',
        url: 'tanksize'
    }, {
        id: 7,
        name: 'Gas / Oil Mix',
        url: ''
    }, {
        id: 8,
        name: 'Propeller Chart',
        url: 'propellerchart'
    }, {
        id: 9,
        name: 'Drill Size Charts',
        url: 'drillmenu'
    }, {
        id: 10,
        name: 'Battery Voltage',
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
});
