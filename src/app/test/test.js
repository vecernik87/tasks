/**
 * @author Pavel Cernik
 * @license MIT
 **/
(function(){
    angular.module('tmpname.app')
            .config(function($stateProvider){
                console.log('test config');
                $stateProvider
                        .state('app.test', {
                            url: '/test',
                            template: require('./test.html'),
                            controller: testController,
                            controllerAs: 'vm',
                        });
            });

    function testController(storage, $rootScope){
        console.log('test controller', arguments);
        var vm = this;

        vm.addTask = function(){
            storage.saveTask({
                title: 'sometitle' + Math.round(Math.random() * 5),
                description: 'some description which can be longer',
                priority: Math.round(Math.random() * 5)
            });
        };

        console.log(storage.getTask(10));

        $rootScope.title = 'test';

    }



})();