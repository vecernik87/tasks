(function(){
    console.log('tmpname init');
    // core
    require('angular');
    require('@uirouter/angularjs');


    // graphics
    require('angular-material');
    require('webpack-material-design-icons');
    require('angular-material/angular-material.css');




    angular.module('tmpname', [
        'ngMaterial',
        'ui.router',
        'ngStorage',
        'tmpname.app',
        'tmpname.storage',
    ]);


    angular.module('tmpname')
            .run(function($state, $rootScope, $localStorage){
                console.log('tmpname run');
                $rootScope.$storage = $localStorage;
                $rootScope.title = "tmpname title";
//                $state.go('agenda');
            });

    require('./tmpname.config.js');

    require('./app/app.module.js');
    require('./storage/storage.module.js');

    require('./globalfn.js');

})();
