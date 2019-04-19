//Inspired by the udacity lession about serviceWorkers
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('restaunt_cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/css/styles.css',
        '/css/max400.css',
        '/css/401_800.css',
        '/css/restaurant_max400.css',
        '/css/restaurant_401_800.css',
        '/data/restaurants.json',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/register_sw.js',
        '/js/restaurant_info.js',
        '/js/sw.js',
        '/index.html',
        '/package-lock.json',
        '/restaurant.html'
      ]);
    })
  );
});
