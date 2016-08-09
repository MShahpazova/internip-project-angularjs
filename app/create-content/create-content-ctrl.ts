///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../components/components.d.ts"/>
var ctrlModule = angular.module("hydra.controllers");
//todo: create only one box for all the selected documents
//todo: number of copies to appear only when document isn't an original
//todo: should i add every property I set as a field in the class of the controller 
class CreateContentCtrl {
    documents = [{
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

    selectedDocuments: Array<IDocument>;
    addedDocuments: Array<IDocument> = [];
    documentsToDelete: Array<IDocument> = [];
    name: string;

    private dataService;

    static $inject = ["$scope", "service"];

    // attaching things to the $scope
    //check for duplicate items

    addSelected() {
        // has to concat to this.selectedDocuments in the this.addedDocuments
        // our brand new documents
        let copiedDocuments = angular.copy(this.selectedDocuments);
         if (this.checkForDuplicateDocuments()) {
            this.addedDocuments = this.addedDocuments.concat(copiedDocuments);
         }
    }

      checkForDuplicateDocuments = function() {
        //check if there are any items added
        
        if (this.addedDocuments.length > 0) {
            //then loop through items
            for (var i = 0; i < this.addedDocuments.length; i++) {
                var documentName = this.addedDocuments[i].name;
                for (var j = 0; j < this.selectedDocuments.length; j++) {
                    var documentToBeAdded = this.selectedDocuments[j];
                    if (documentName === documentToBeAdded.name) {
                        return false;
                    }
                }
            }
            return true;
        }
         return true;
    }

    removeDocument(document) {
        let index = this.addedDocuments.indexOf(document);
        this.addedDocuments.splice(index, 1);
    }

    constructor($scope, service, documents) {
        
        // $scope.name = this.name;
        // this.name = $scope.name;

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
}
ctrlModule.controller("createContentCtrl", CreateContentCtrl)
