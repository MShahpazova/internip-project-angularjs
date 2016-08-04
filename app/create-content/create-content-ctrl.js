///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../components/components.d.ts"/>
var ctrlModule = angular.module("hydra.controllers");
var CreateContentCtrl = (function () {
    function CreateContentCtrl($scope, service, documents) {
        // $scope.name = this.name;
        //this.name = $scope.name;
        this.documents = [
            {
                name: "Passport",
                documentType: 2,
                isSelected: true,
                numberOfCopies: 3
            },
            {
                name: "National ID",
                documentType: 2,
                numberOfCopies: 3,
                isSelected: true
            }
        ];
        this.currentSelectedDocuments = [];
        // this.dataService = service;
        // var self = this;
        // console.log(this);
        // documents = service.getDocuments();
        // this.dataService.getDocuments().then(function (documents) {
        //     console.log(this);
        //     self.documents = documents;
        // });
        function select(currentSelectedDocuments) {
            //move currentlySelected documents to the selected documents array
        }
        $scope.vm = this;
    }
    CreateContentCtrl.$inject = ["$scope", "service"];
    return CreateContentCtrl;
}());
ctrlModule.controller("createContentCtrl", CreateContentCtrl);
