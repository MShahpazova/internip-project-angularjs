///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../components/components.d.ts"/>
var ctrlModule = angular.module("hydra.controllers");
//todo: create only one box for all the selected documents
//todo: number of copies to appear only when document isn't an original
//todo: should i add every property I set as a field in the class of the controller 
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
                numberOfCopies: 1,
                isSelected: true,
            }, {
                name: "Driving licence",
                documentType: 2,
                numberOfCopies: 1,
                isSelected: true,
            }, {
                name: "Marriage licence",
                documentType: 2,
                numberOfCopies: 1,
                isSelected: true,
            }];
        this.addedDocuments = []; // target array
        this.documentsToDelete = [];
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
    //check for duplicate items
    CreateContentCtrl.prototype.isPresent = function (doc) {
        //returns true if the element doesn't exist in the array
        return this.addedDocuments.map(function (doc) { return doc.name; }).indexOf(doc.name) >= 0;
    };
    // isToDelete(doc) {
    //     console.log("exp evalueted");
    //     return this.documentsToDelete.map(doc=> doc.name).indexOf(doc.name) >= 0;
    // }
    CreateContentCtrl.prototype.markToDelete = function (doc) {
        doc.isToDelete = !doc.isToDelete;
    };
    CreateContentCtrl.prototype.deleteDocuments = function () {
        this.addedDocuments = this.addedDocuments.filter(function (doc) { return !doc.isToDelete; });
    };
    CreateContentCtrl.prototype.addSelected = function () {
        var _this = this;
        // has to concat to this.selectedDocuments in the this.addedDocuments
        // our brand new documents
        var copiedDocuments;
        console.log(this.addedDocuments.length);
        var filteredDocuments = this.selectedDocuments.filter(function (doc) {
            return !_this.isPresent(doc);
        });
        this.addedDocuments = this.addedDocuments.concat(filteredDocuments);
    };
    CreateContentCtrl.$inject = ["$scope", "service"];
    return CreateContentCtrl;
}());
ctrlModule.controller("createContentCtrl", CreateContentCtrl);
