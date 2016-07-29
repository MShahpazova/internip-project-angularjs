///<reference path="../../typings/tsd.d.ts"/>
var ctrlModule = angular.module("hydraControllers");
var CreateContentController = (function () {
    function CreateContentController($scope) {
        $scope.name = "This is a blank page.";
    }
    CreateContentController.$inject = ["$scope"];
    return CreateContentController;
}());
ctrlModule.controller("createContentCtrl", CreateContentController);
