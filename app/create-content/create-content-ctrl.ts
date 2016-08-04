///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../components/components.d.ts"/>
var ctrlModule = angular.module("hydra.controllers");

class CreateContentCtrl {
    documents: Array<IDocument> =  [
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
                isSelected: true,
            }
        ];
    selectedDocuments: Array<IDocument> 
    currentSelectedDocuments: Array<IDocument> = [];
    name: string;
    private dataService;

    static $inject = ["$scope", "service"]

    constructor($scope, service, documents) {
        
        // $scope.name = this.name;
        //this.name = $scope.name;
        
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
}
ctrlModule.controller("createContentCtrl", CreateContentCtrl)
