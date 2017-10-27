/**
 * @author Pavel Cernik
 * @license MIT
 **/
"use strict";

(function(){
    angular.module('tmpname.app')
            .config(function($stateProvider){
                console.log('tree config');
                $stateProvider
                        .state('app.tree', {
                            url: '/tree',
                            template: require('./tree.html'),
                            controller: agendaController,
                            controllerAs: 'vm',
                        });
            });

    function agendaController(storage, $rootScope){
        console.log('tree controller', arguments);
        var vm = this;

        activate();
        vm.options = {
            dragStart: function(event){
                event.elements.dragging.addClass('md-whiteframe-10dp');
                event.elements.placeholder.addClass('bgdark');
                console.log('drag start', arguments);
            }
        };

        vm.tree = [{
                'id': 1,
                'title': 'node1',
                'nodes': [
                    {
                        'id': 11,
                        'title': 'node1.1',
                        'nodes': [
                            {
                                'id': 111,
                                'title': 'node1.1.1',
                                'nodes': []
                            }
                        ]
                    },
                    {
                        'id': 12,
                        'title': 'node1.2',
                        'nodes': []
                    }
                ]
            }, {
                'id': 2,
                'title': 'node2',
                'nodrop': true, // An arbitrary property to check in custom template for nodrop-enabled
                'nodes': [
                    {
                        'id': 21,
                        'title': 'node2.1',
                        'nodes': []
                    },
                    {
                        'id': 22,
                        'title': 'node2.2',
                        'nodes': []
                    }
                ]
            }, {
                'id': 3,
                'title': 'node3',
                'nodes': [
                    {
                        'id': 31,
                        'title': 'node3.1',
                        'nodes': []
                    }
                ]
            }];

        $rootScope.title = 'tree';

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