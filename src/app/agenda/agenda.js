(function(){
    angular.module('tmpname.app')
            .config(function($stateProvider){
                console.log('agenda config');
                $stateProvider
                        .state('app.agenda', {
                            url: '/agenda',
                            template: require('./agenda.html'),
                            controller: agendaController,
                            controllerAs: 'vm',
                        });
            });

    function agendaController(storage, $rootScope){
        console.log('agenda controller', arguments);
        var vm = this;

        activate();

        $rootScope.title = 'agenda';

        /////////////////////

        function activate(){
            storage.getTasks()
                    .then(function(tasks){
                        vm.tasks = tasks;
                    })
                    .catch(function(e){
                        console.error('catched error:', e);
                    });
        }

    }


})();