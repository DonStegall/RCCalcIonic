'use strict';

rccalcApp.controller('TankSizeController', function ($scope,LengthConverterService,VolumeConverterService) {

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

    $scope.inputUnits = LengthConverterService.unitLabels();

    $scope.lengthConverter = function (input,unit) {
        return LengthConverterService.converter(input,unit);
    };

    $scope.outputUnits = VolumeConverterService.unitLabels();

    $scope.volumeConverter = function (volume,unit) {
        return VolumeConverterService.convertNumber(volume,unit);
    };

    $scope.clearInputs = function() {
        alert('clearInputs');
        alert($scope.data.input1);
        alert($scope.data.input2);
        alert($scope.data.input3);
        alert($scope.data.input1Units);
        alert($scope.data.input2Units);
        alert($scope.data.input3Units);
        alert($scope.data.outputUnits);
    };

    $scope.calculate = function() {
        var input1Value = $scope.lengthConverter($scope.data.input1, $scope.data.input1Units);
        var input2Value = $scope.lengthConverter($scope.data.input2, $scope.data.input2Units);
        var input3Value = $scope.lengthConverter($scope.data.input3, $scope.data.input3Units);

        var inputValue = (input1Value * input2Value * input3Value);

        var volume = $scope.volumeConverter(inputValue, $scope.data.outputUnits);

        $scope.data.output = Math.round(volume * 10000) / 10000;
    };

    $scope.calculateSize = function() {
        //alert('calculateSize');
        $scope.calculate();
    };

});
