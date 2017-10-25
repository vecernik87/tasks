(function(){
    angular.module('tmpname.app')
            .config(function($stateProvider){
                console.log('edit config');
                $stateProvider
                        .state('app.edit', {
                            url: '/edit/:id',
                            resolve: {
                                task: function($stateParams, storage){
                                    if($stateParams.id){
                                        return storage.getTask($stateParams.id);
                                    }
                                    return {title: 'new task'}
                                }
                            },
                            template: require('./edit.html'),
                            controller: editController,
                            controllerAs: 'vm',
                        });
            });
    function editController($rootScope, task){ //
        var vm = this;
        vm.task = task;
        $rootScope.title = task.title;

    }


})();