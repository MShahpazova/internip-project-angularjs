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
        this.addedDocuments = []; //target array
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
    CreateContentCtrl.prototype.isToDelete = function (doc) {
        doc.isToDelete = !doc.isToDelete;
    };
    CreateContentCtrl.prototype.setBeforeDeleting = function (doc) {
        // this.isToDelete(doc)
        doc.isToDelete = true;
        this.documentsToDelete.push(doc);
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
        // if (this.addedDocuments.length > 0) {
        // copiedDocuments = angular.copy(this.addedDocuments); 
        // let filteredDocuments = [];
        // for (var index = 0; index < this.selectedDocuments.length; index++) {
        //     if (this.isPresent(this.selectedDocuments[index])) {
        //         filteredDocuments.push(this.selectedDocuments[index])
        //     }
        // }
        //     let filteredDocuments = this.selectedDocuments.filter(doc => {
        //         return !this.isPresent(doc);
        //     })
        //     this.addedDocuments =  this.addedDocuments.concat(filteredDocuments);
        // }                                 
        // else {
        //     copiedDocuments = angular.copy(this.selectedDocuments);
        //     this.addedDocuments = this.addedDocuments.concat(copiedDocuments);
        // }
    };
    //
    //   checkForDuplicateDocuments = function() {
    //     //check if there are any items added
    //     if (this.addedDocuments.length > 0) {
    //         //then loop through items
    //         for (var i = 0; i < this.addedDocuments.length; i++) {
    //             var documentName = this.addedDocuments[i].name;
    //             for (var j = 0; j < this.selectedDocuments.length; j++) {
    //                 var documentToBeAdded = this.selectedDocuments[j];
    //                 if (documentName === documentToBeAdded.name) {
    //                     return false;
    //                 }
    //             }
    //         }
    //         return true;
    //     }
    //      return true;
    // }
    CreateContentCtrl.prototype.deleteDocuments = function () {
        var _this = this;
        this.documentsToDelete.forEach(function (doc) { return _this.removeDocument(doc); });
        console.log("Hello");
    };
    CreateContentCtrl.prototype.removeDocument = function (document) {
        var index = this.addedDocuments.indexOf(document);
        this.addedDocuments.splice(index, 1);
    };
    CreateContentCtrl.$inject = ["$scope", "service"];
    return CreateContentCtrl;
}());
ctrlModule.controller("createContentCtrl", CreateContentCtrl);
