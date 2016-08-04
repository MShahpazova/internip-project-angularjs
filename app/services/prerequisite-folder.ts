///<reference path="../../typings/tsd.d.ts"/>
var serviceModule = angular.module("hydra.services");
class Service {
    private $http: ng.IHttpService;
    static $inject = ["$http"]
    constructor($http) {
        this.$http = $http;
    }

    public getDocuments() {
        //  return this.$http.get("app/documents.json").then(function(response){
        //      return response.data;
        //  })

    }
}
serviceModule.service("service", Service);
