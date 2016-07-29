///<reference path="../../typings/tsd.d.ts"/>
var ctrlModule = angular.module("hydraControllers");
class CreateContentController {
   static $inject = ["$scope"]
   constructor($scope) {
       $scope.name = "This is a blank page.";
   }
}
ctrlModule.controller("createContentCtrl", CreateContentController)