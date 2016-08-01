///<reference path="../../typings/tsd.d.ts"/>
var ctrlModule = angular.module("hydra.controllers");
var Process = (function () {
    function Process($scope) {
        name = $scope.name;
    }
    Process.$inject = ["$scope"];
    return Process;
}());
ctrlModule.controller("createContentCtrl", Process);
