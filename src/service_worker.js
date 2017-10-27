/**
 * @author Pavel Cernik
 * @license MIT
 **/
"use strict";

this.addEventListener('install', function(event){
    console.info('[SW] installing....', event);

//    event.waitUntil(
//
//        caches.open('v1').then(function(cache) {
//            return cache.addAll([
//                'index.html',
//                'page_script.js',
//                'style.css',
//                '/images/set3.jpg'
//            ]);
//        })
//    );
});


this.addEventListener('fetch', function(event){
    console.info('[SW] fetch intercepted', event);

//    event.respondWith(
//            // caches.open look familiar? It should! We just used
//            // it in the code above! Here we are finding a match
//            // for the event.request in our cached v1 storage (in
//            // the browser).
//            //
//            // If we find a match for the request in the cache
//            // storage, that means our service worker will serve
//            // that file right up from the browser itself rather
//            // than going alllll the way to the server to get it!
//            // NICE!!!
//
//            // However, if the resource isn't found, then it WILL
//            // go ALLLL the way to the server to grab it, or if
//            // it's in offline mode, will break and not show the
//            // file. Bummer!
//
//            caches.open('v1').then(function(cache){
//        return cache.match(event.request).then(function(response){
//            return response || fetch(event.request).then(function(response){
//                cache.put(event.request, response.clone());
//                return response;
//            });
//        });
//    })
//            );
});



this.addEventListener('activate', function activator(event){
    console.info('[SW] activate!', event);


//    event.waitUntil(
//            caches.keys().then(function(keys){
//        return Promise.all(keys
//                .filter(function(key){
//                    return key.indexOf('v1') !== 0;
//                })
//                .map(function(key){
//                    return caches.delete(key);
//                })
//                );
//    })
//            );
});