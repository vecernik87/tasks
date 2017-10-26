/**
 * @author Pavel Cernik
 * @license MIT
 **/
(function(){
    angular.module('tmpname')
            .config(function($locationProvider, $urlRouterProvider, $localStorageProvider, $compileProvider){
                console.log('tmpname config');
                $locationProvider.html5Mode(true);
                $urlRouterProvider.otherwise('/app/agenda');
                $localStorageProvider.setKeyPrefix('tmpname');

//                $compileProvider.debugInfoEnabled(false);
//                $compileProvider.commentDirectivesEnabled(false);
//                $compileProvider.cssClassDirectivesEnabled(false);
            });


})();