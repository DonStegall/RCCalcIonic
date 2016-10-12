'use strict';

rccalcApp.controller('DrillMenuCtrl', function ($scope, DrillMenu) {
    $scope.menus = DrillMenu.all();
});
