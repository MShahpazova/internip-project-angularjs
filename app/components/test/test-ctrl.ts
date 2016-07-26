///<reference path="../../../typings/tsd.d.ts"/>
///<reference path="../../services/services.d.ts"/>

var ctrlModule = angular.module("hydra.controllers");
    class TestComponent {
        private dataAccesService;

        static $inject = ["dataAccessService"]
        constructor(dataAccessService){
            this.dataAccesService = dataAccessService;

            this.getAllUsers();
        }

        public getAllUsers(){
           this.dataAccesService.getAllUsers().then((response)=>{
               //handle response
           });
        }
    }
ctrlModule.controller("testController", TestComponent);