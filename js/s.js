define(['jquery', 'Swiper'], function($, Swiper) {
    function load() {
        new Swiper('.nav', {
            autoplay: true,
            pagination: {
                el: '.page'
            },

        });
    }
    return {
        load: load
    }
});