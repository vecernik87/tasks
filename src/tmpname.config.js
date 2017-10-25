(function(){
    angular.module('tmpname')
            .config(function($locationProvider, $urlRouterProvider, $localStorageProvider){
                console.log('tmpname config');
                $locationProvider.html5Mode(true);
                $urlRouterProvider.otherwise('/app/agenda');
                $localStorageProvider.setKeyPrefix('tmpname');
            })


})();