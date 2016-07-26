///<reference path="../../typings/tsd.d.ts"/>

var serviceModule = angular.module("hydra.services");
    class DataAccessService {
        private httpService: ng.IHttpService;
        private qService: ng.IQService;

        //private eventsUri: string = "http://139.59.151.78:8080/api/users";
        private eventsUri: string ="";

        static $inject = ["$http", "$q"]
        constructor($http, $q){
            this.httpService = $http;
            this.qService = $q;
        }

        public getAllUsers(){
            var result: ng.IPromise<Array<any>> = this.httpService.get(this.eventsUri, {})
                .then(response=> response.data, e=> this.qService.reject(e));
            return result;
        }
    }

serviceModule.service("dataAccessService", DataAccessService);