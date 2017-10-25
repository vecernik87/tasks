(function(){
    console.log('app init');

    angular.module('tmpname.app', [
//        'ngMaterial',
//        'ui.router',
    ]);

//    angular.module('tmpname.app')
//            .run(function($state){
//                console.log('app run');
////                $state.go('app.agenda');
//            });


    require('./app.config.js');
    require('./agenda/agenda.js');
    require('./edit/edit.js');
    require('./test/test.js');


})();
