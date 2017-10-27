/**
 * @author Pavel Cernik
 * @license MIT
 **/
"use strict";

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
        vm.tasks = [];
        vm.options = {
            axis: "y",
            handle: '.myHandle',
            tolerance: "pointer",
            placeholder: "myPlaceholder",
            classes: {
                "ui-sortable-placeholder": "myPlaceholder",
                "ui-sortable-helper": "myHelper md-whiteframe-10dp",
            },
            stop: function(e, ui){
//                console.log('stopped');
                for(var i = 0, len = vm.tasks.length; i < len; i++){ // assign correct priority
                    if(vm.tasks[i].priority != i){
                        console.info('changed priority from ' + vm.tasks[i].priority + ' to ' + i, vm.tasks[i].title);
                        vm.tasks[i].priority = i;
                        storage.saveTask(vm.tasks[i]);
                    }
                }
            }
        };

        activate();

        vm.fn = function(e){
            e.stopPropagation();
            return false;
            console.log(e);
        };
        $rootScope.title = 'agenda';

        /////////////////////

        function activate(){
            storage.getTasks()
                    .then(function(tasks){
                        vm.tasks = tasks.sort((a, b) => a.priority - b.priority);
                    })
                    .catch(function(e){
                        console.error('catched error:', e);
                    });
        }

    }


})();