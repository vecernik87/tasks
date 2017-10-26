/**
 * @author Pavel Cernik
 * @license MIT
 **/
(function(){
    console.log('storage module init');

    require('ngStorage');

    angular.module('tmpname.storage', [
        'ngStorage',
    ]);

    require('./storage.factory.js');

})();
