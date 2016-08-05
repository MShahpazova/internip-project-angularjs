///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../components/components.d.ts"/>
var ctrlModule = angular.module("hydra.controllers");
var CreateContentCtrl = (function () {
    function CreateContentCtrl($scope, service, documents) {
        // $scope.name = this.name;
        // this.name = $scope.name;
        this.documents = [{
                name: "Passport",
                documentType: 2,
                isSelected: true,
                numberOfCopies: 3
            }, {
                name: "National ID",
                documentType: 2,
                numberOfCopies: 3,
                isSelected: true
            }];
        this.addedDocuments = [];
        // this.dataService = service;
        // var self = this;
        // console.log(this);
        // documents = service.getDocuments();
        // promises
        // this.dataService.getDocuments().then(function (documents) {
        //     console.log(this);
        //     self.documents = documents;
        // });
        // vm is view-model
        $scope.vm = this;
    }
    // attaching things to the $scope
    CreateContentCtrl.prototype.addSelected = function () {
        // has to concat to this.selectedDocuments in the this.addedDocuments
        // our brand new documents
        var copiedDocuments = angular.copy(this.selectedDocuments);
        this.addedDocuments = this.addedDocuments.concat(copiedDocuments);
    };
    CreateContentCtrl.prototype.removeDocument = function (document) {
        var index = this.addedDocuments.indexOf(document);
        this.addedDocuments.splice(index, 1);
    };
    CreateContentCtrl.$inject = ["$scope", "service"];
    return CreateContentCtrl;
}());
ctrlModule.controller("createContentCtrl", CreateContentCtrl);
