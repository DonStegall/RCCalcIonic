'use strict';

rccalcApp.controller('TankSizeController', function ($scope) {

    $scope.data = {
        input1: NaN,
        input2: NaN,
        input3: NaN,
        output: NaN,
        input1Units: '0',
        input2Units: '0',
        input3Units: '0',
        outputUnits: '0'
    };

    $scope.lengthCoEf = [ 2.54, 30.48, 91.44, 0.1, 1.0, 100.0 ];

    $scope.inputUnits = [
        {name: 'in', id: 0},
        {name: 'ft', id: 1},
        {name: 'yd', id: 2},
        {name: 'mm', id: 3},
        {name: 'cm', id: 4},
        {name: 'm', id: 5}
    ];

    $scope.volumeCoEf = [ 0.0338140225589, 0.004226752819851, 0.00211337642, 0.001056688208, 0.000264172052, 1.0, 1.0, 0.001 ];

    $scope.outputUnits = [
        {name: 'oz', id: 0},
        {name: 'cup', id: 1},
        {name: 'pint', id: 2},
        {name: 'quart', id: 3},
        {name: 'gal', id: 4},
        {name: 'cc', id: 5},
        {name: 'ml', id: 6},
        {name: 'liter', id: 7}
    ];

    $scope.clearInputs = function() {
        alert('clearInputs');
        alert($scope.data.input1);
        alert($scope.data.input2);
        alert($scope.data.input3);
        alert($scope.data.input1Units);
        alert($scope.data.input2Units);
        alert($scope.data.input3Units);
    };

    $scope.calculate = function() {
        var input1Value = parseFloat($scope.data.input1) * $scope.lengthCoEf[parseInt($scope.data.input1Units)];
        var input2Value = parseFloat($scope.data.input2) * $scope.lengthCoEf[parseInt($scope.data.input2Units)];
        var input3Value = parseFloat($scope.data.input3) * $scope.lengthCoEf[parseInt($scope.data.input3Units)];

        var inputValue = (input1Value * input2Value * input3Value);

        var volume = (inputValue * $scope.volumeCoEf[parseInt($scope.data.outputUnits)]);

        $scope.data.output = Math.round(volume * 10000) / 10000;
    };

    $scope.calculateSize = function() {
        //alert('calculateSize');
        $scope.calculate();
    };

});
