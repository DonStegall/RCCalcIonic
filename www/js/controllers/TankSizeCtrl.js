'use strict';

rccalcApp.controller('TankSizeCtrl', function ($scope) {

    $scope.data = {
        length: '',
        width: '',
        height: '',
        size: '',
        lengthUnits: '0',
        widthUnits: '0',
        heightUnits: '0',
        sizeUnits: '0'
    };

    /*$scope.length = '';
    $scope.width = '';
    $scope.height = '';
    $scope.size = '';

    $scope.lengthUnits = '0';
    $scope.widthUnits = '0';
    $scope.heightUnits = '0';
    $scope.sizeUnits = '0';*/

    $scope.inputUnits = [
        {name: 'in', id: 0},
        {name: 'ft', id: 1},
        {name: 'yd', id: 2},
        {name: 'mm', id: 3},
        {name: 'cm', id: 4},
        {name: 'm', id: 5}
    ];

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
        alert($scope.data.length);
        alert($scope.data.width);
        alert($scope.data.height);
        alert($scope.data.lengthUnits);
        alert($scope.data.widthUnits);
        alert($scope.data.heightUnits);
    };

    $scope.calculateSize = function() {
        alert('calculateSize');
    };

});
