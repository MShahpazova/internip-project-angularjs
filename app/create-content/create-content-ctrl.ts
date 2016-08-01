///<reference path="../../typings/tsd.d.ts"/>
var ctrlModule = angular.module("hydra.controllers");
class Process {
   static $inject = ["$scope"]
    name: string;
   constructor($scope) {
       name = $scope.name;
   }
}
ctrlModule.controller("createContentCtrl", Process)
