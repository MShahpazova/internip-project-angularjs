///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../components/components.d.ts"/>
var ctrlModule = angular.module("hydra.controllers");
var CreateContentCtrl = (function () {
    function CreateContentCtrl($scope, service, documents) {
        // $scope.name = this.name;
        //    this.name = $scope.name;
        this.dataService = service;
        var self = this;
        console.log(this);
        this.dataService.getDocuments().then(function (documents) {
            console.log(this);
            self.documents = documents;
        });
        $scope.vm = this;
    }
    CreateContentCtrl.$inject = ["$scope", "service"];
    return CreateContentCtrl;
}());
ctrlModule.controller("createContentCtrl", CreateContentCtrl);
