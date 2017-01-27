'use strict';

rccalcApp.factory('LengthConverterService', function() {

    var lengthCoEf = [ 2.54, 30.48, 91.44, 0.1, 1.0, 100.0 ];

    var lengthUnitLabels = [
            {name: 'in', id: 0},
            {name: 'ft', id: 1},
            {name: 'yd', id: 2},
            {name: 'mm', id: 3},
            {name: 'cm', id: 4},
            {name: 'm', id: 5}
        ];

    return {
        unitLabels : unitLabels,
        converter : converter
    };

    function unitLabels() {
        return lengthUnitLabels;
    }

    function converter(inputString,inputUnit) {
        return parseFloat(inputString) * lengthCoEf[parseInt(inputUnit)];
    }
});
