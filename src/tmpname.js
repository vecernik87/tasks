/**
 * @author Pavel Cernik
 * @license MIT
 **/
"use strict";

(function(){
    console.log('tmpname init');
    // core
    require('angular');
    require('@uirouter/angularjs');


    // graphics
    require('angular-material');
    require('angular-material/angular-material.css');
    require('webpack-material-design-icons');

    // ui
//    require('jquery');
//    require('jquery-ui');
    require("jquery-ui/ui/widgets/sortable");
    require('angular-ui-sortable');
//    require('angular-ui-tree');
//    require('angular-ui-tree/dist/angular-ui-tree.min.css');



    angular.module('tmpname', [
        'ngMaterial',
//        'ui.tree',
        'ui.sortable',
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
