require.config({
    paths: {
        'jquery': 'jquery',
        'Swiper': 'swiper-4.1.6.min',
        's': 's'

    }
});
require(['jquery', 'Swiper', 's'], function($, Swiper, s) {
    s.load();
})