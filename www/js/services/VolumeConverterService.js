'use strict';

rccalcApp.factory('VolumeConverterService', function() {

    var volumeCoEf = [ 0.0338140225589, 0.004226752819851, 0.00211337642, 0.001056688208, 0.000264172052, 1.0, 1.0, 0.001 ];

    var volumeUnitLabels = [
        {name: 'oz', id: 0},
        {name: 'cup', id: 1},
        {name: 'pint', id: 2},
        {name: 'quart', id: 3},
        {name: 'gal', id: 4},
        {name: 'cc', id: 5},
        {name: 'ml', id: 6},
        {name: 'liter', id: 7}
    ];

    return {
        unitLabels : unitLabels,
        convertNumber : convertNumber
    };

    function unitLabels() {
        return volumeUnitLabels;
    }

    function convertNumber(volumeValue,volumeUnit) {
        return volumeValue * volumeCoEf[parseInt(volumeUnit)];
    }
});
