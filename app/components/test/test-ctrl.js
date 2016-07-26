///<reference path="../../../typings/tsd.d.ts"/>
///<reference path="../../services/services.d.ts"/>
var ctrlModule = angular.module("hydra.controllers");
var TestComponent = (function () {
    function TestComponent(dataAccessService) {
        this.dataAccesService = dataAccessService;
        this.getAllUsers();
    }
    TestComponent.prototype.getAllUsers = function () {
        this.dataAccesService.getAllUsers().then(function (response) {
            //handle response
        });
    };
    TestComponent.$inject = ["dataAccessService"];
    return TestComponent;
}());
ctrlModule.controller("testController", TestComponent);
