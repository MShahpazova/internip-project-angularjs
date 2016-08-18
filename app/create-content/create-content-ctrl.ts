///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../components/components.d.ts"/>
///<reference path="./step.ts" />
var ctrlModule = angular.module("hydra.controllers");

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
    steps: Array<IStep> = [];

    private dataService;

    static $inject = ["$scope", "service"];


    isPresent(doc) {
        //returns true if the element does exist in the array
        return this.addedDocuments.map(doc => doc.name).indexOf(doc.name) >= 0;
    }

    markToDelete(doc) {
        doc.isToDelete = !doc.isToDelete;
    }

    deleteDocuments() {
          let filteredDocuments = this.selectedDocuments.filter(doc => {
              return !this.isPresent(doc);
          })
          this.addedDocuments = this.addedDocuments.concat(filteredDocuments);
    }

    addSelected() {
        let filteredDocuments = this.selectedDocuments.filter(doc => {
            return !this.isPresent(doc);
        })
        this.addedDocuments = this.addedDocuments.concat(filteredDocuments);
    }
    removeStep(index) {
        var element = this.steps.indexOf(index);
        this.steps.splice(index, 1);
    }

    addStep(index) {
        let step = new Step();
        this.steps.splice(index, 0, step);
    }

    constructor($scope, service, documents) {

        this.steps.push(new Step());
        // this.steps.push(new Step());
        console.log(this.steps[0].location)
        $scope.vm = this;
    }
}
ctrlModule.controller("createContentCtrl", CreateContentCtrl)
