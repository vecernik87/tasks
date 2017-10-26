/**
 * @author Pavel Cernik
 * @license MIT
 **/
module.exports = function(env){
    return require('./webpack.' + env + '.js');
}