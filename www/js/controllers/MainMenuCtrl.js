'use strict';

rccalcApp.controller('MainMenuCtrl', function ($scope, MainMenu) {
    $scope.menus = MainMenu.all();
});
