///<reference path="../../typings/tsd.d.ts"/>
var serviceModule = angular.module("hydra.services");
class Service {
    private $http: ng.IHttpService;
    private $q: ng.IQService;
    static $inject = ["$http"]
    constructor($http) {
        this.$http = $http;
    }

    public getDocuments() {
         return this.$http.get("app/documents.json").then((response) => {
             return response.data;
         });
    }

    public getActions() {
        return this.$http.get("app/actions.json")
        .then((response) => {
            return response.data;
        });
    }

     public getCategories() {
        return this.$http.get("http://ec2-54-229-129-126.eu-west-1.compute.amazonaws.com:8080/actions")
        .then((response) => {
            return response.data;
        });
    }

    public submitProcess(name, prerequisites, steps){
        var url = "";
        return this.$http.post(url,{});
    }
}
serviceModule.service("service", Service);


