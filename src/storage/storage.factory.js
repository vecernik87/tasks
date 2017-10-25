(function(){
    console.log('storage factory init');

    angular.module('tmpname.storage')
            .factory('storage', storageFactory);

    function storageFactory($localStorage, $q){
//        console.warn(UUID.generate());
        var ls = $localStorage.$default({
            tasks: {},
            users: {},
        });

        var service = {
            getTasks: getTasks,
            getTask: getTask,
            saveTask: saveTask,
        };
        return service;

        /////////////////////

        function getTasks(){
            if(typeof ls.tasks === 'undefined'){
                ls.tasks = {};
            }
            return $q(function(resolve, reject){
                setTimeout(function(){

                    if(typeof ls.tasks === 'object' && ls.tasks !== null){
                        var arr = Object.keys(ls.tasks).map(function(key){
                            return angular.copy(ls.tasks[key]);
                        });
                        resolve(angular.copy(arr));
//                        resolve(angular.copy(ls.tasks));
                    }else{
                        reject('tasks not accessible');
                    }
                }, 50);
            });
        }

        function getTask(id){
            return $q(getTaskPromise);
            //////////////
            function getTaskPromise(resolve, reject){
                setTimeout(function(){
                    if(typeof ls.tasks[id] === 'object' && ls.tasks[id] !== null){
                        resolve(angular.copy(ls.tasks[id]));
                    }else{
                        reject('task ' + JSON.stringify(id) + ' not accessible');
                    }
                }, 10);
            }
        }
        function saveTask(task){
            if(typeof ls.tasks === 'undefined'){
                ls.tasks = {};
            }
            return $q(function(resolve, reject){
                if(typeof task === 'object' && task !== null){
                    if(task.id){ // saving existing
                        // todo - check if task exists, maybe someone changed the id
                        ls.tasks[task.id] = task;
                    }else{
                        task.id = getUniqueID();
                        ls.tasks[task.id] = task;
                    }
                }else{
                    reject('task is not object ' + JSON.stringify(task));
                }
            });
        }

        function getUniqueID(){
            return UUID.generate();
        }


    }


})();
