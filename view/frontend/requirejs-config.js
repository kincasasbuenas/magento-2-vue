/** 
 * CONFIGURAR VUE JS EN MAGENTO 2 
 **/
const config = {
    paths: {
        "vue": [
            "https://unpkg.com/vue@3/dist/vue.global.js",
            "Kinuz_Vue/js/lib/vue" //lib de respaldo en elproyecto, caso de no responder el CDN.
        ]
    },
    shim: {
        'vue': {
            'exports': 'Vue'
        }
    }
};

