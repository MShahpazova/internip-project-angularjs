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

    selectedDocuments: Array<IDocument>; // temporary array
    addedDocuments: Array<IDocument> = []; // target array
    documentsToDelete: Array<IDocument> = [];
    name: string;

    private dataService;

    static $inject = ["$scope", "service"];

    // attaching things to the $scope
    //check for duplicate items

    isPresent(doc) {
        //returns true if the element doesn't exist in the array
        return this.addedDocuments.map(doc => doc.name).indexOf(doc.name) >= 0;
    }

    // isToDelete(doc) {
    //     console.log("exp evalueted");
    //     return this.documentsToDelete.map(doc=> doc.name).indexOf(doc.name) >= 0;
    // }
    markToDelete(doc) {
        doc.isToDelete = !doc.isToDelete;
    }

    deleteDocuments() {
        this.addedDocuments = this.addedDocuments.filter(doc => !doc.isToDelete);
    }

    addSelected() {
        // has to concat to this.selectedDocuments in the this.addedDocuments
        // our brand new documents
        let copiedDocuments;
        console.log(this.addedDocuments.length)
        let filteredDocuments = this.selectedDocuments.filter(doc => {
            return !this.isPresent(doc);
        })
        this.addedDocuments = this.addedDocuments.concat(filteredDocuments);
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
