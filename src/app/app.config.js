/**
 * @author Pavel Cernik
 * @license MIT
 **/
(function(){
    angular.module('tmpname.app')
            .config(function($stateProvider, $urlRouterProvider){
                console.log('app config');
                $stateProvider
                        .state('app', {
                            abstract: true,
                            url: '/app',
                            template: require('./app.html'),
                            controller: appController,
                            controllerAs: 'vm',

                        })
//                        .state('contacts.list', {})
                        ;
            });

    function appController($mdSidenav, $transitions){
        var vm = this;
        console.log($transitions);
        vm.toggleMenu = function(menu){
            $mdSidenav(menu).toggle();
        }
    }


})();