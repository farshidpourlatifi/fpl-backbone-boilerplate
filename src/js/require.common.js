var AppURLs = {

    VERSION: '0.0.1',
    URL_VERSION: null,

    //App: '//www.fpl-backbone.local:3030',
    //Static: '//static.fpl-backbone.local:3030'
    App: '//127.0.0.1:3030',
    Static: '//127.0.0.1:3030'
};

requirejs.config({
    urlArgs: function (id, url) {
        // http://requirejs.org/docs/api.html#config-urlArgs
        // http://stackoverflow.com/a/901144
        if (url.indexOf('require.common.js') !== -1) {
            var regex = new RegExp("[?&]v(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
            AppURLs.URL_VERSION = (!results) ? null : ((!results[2]) ? '' : decodeURIComponent(results[2].replace(/\+/g, " ")));
        }
        return (AppURLs.URL_VERSION === null || AppURLs.URL_VERSION === '') ? '' : (url.indexOf('?') === -1 ? '?' : '&') + AppURLs.URL_VERSION;
    },
    waitSeconds: 10,
    baseUrl: AppURLs.Static + "/js",
    paths: {
        //"jquery": "vendor/jquery-1.10.2",
        "jquery": "vendor/jquery.slim",
        "underscore": "vendor/underscore",
        "backbone": "vendor/backbone",
        "backbone.radio": "vendor/backbone.radio",
        "backbone.nativeview": "vendor/backbone.nativeview",
        "backbone.nativeajax": "vendor/backbone.nativeajax",
        "bootstrap": "vendor/bootstrap-native",
        //"bootstrap": "vendor/bootstrap",
        "text": "vendor/text",
        //"jquery.XDomainRequest": "vendor/jquery.XDomainRequest",
        "App": "app/app",
        //"AppAjax": "app/app.ajax",
        //"AppDateTime": "app/app.datetime",
        //"AppCookie": "app/app.cookie",
        //"AppLocalStorage": "app/app.localstorage",
        //"AppSampleWidget": "app/app.sample.widget",
        //"AppFormat": "app/app.format"
    },
    shim: {
        // jquery: {
        //     exports: '$'
        // },
        //backbone: {
            //deps: ['jquery', 'underscore'],
            //deps: ['underscore', 'backbone.nativeview', 'backbone.nativeajax'],
          //  deps: ['underscore'],
            //exports: 'Backbone'
        //},
        underscore: {
            exports: '_'
        }
        // bootstrap: {
        //     deps: ['jquery']
        // },
        // text: {
        //     deps: ['underscore', 'jquery.XDomainRequest']
        // },
        // "jquery.XDomainRequest": {
        //     deps: ['jquery']
        // }
    },
    /*map: {
        '*': {
            moment: 'AppMoment'
        },
        'AppMoment': {
            moment: 'moment'
        }
    },*/
    config: {
        text: {
            // Need this for requriejs text plugin to work, if useXhr dose not return true,
            // we will have problems on loading html tempate from static.app.local as same
            // origin concept will make text plugin to expect a js file extenssion instead of
            // html which we use by default.
            useXhr: function (url, protocol, hostname, port) {
                //Override function for determining if XHR should be used.
                //url: the URL being requested
                //protocol: protocol of page text.js is running on
                //hostname: hostname of page text.js is running on
                //port: port of page text.js is running on
                //Use protocol, hostname, and port to compare against the url
                //being requested.
                //Return true or false. true means "use xhr", false means
                //"fetch the .js version of this resource".
                return true;
            }
        }
    },
    // bundles: {
    //   'app/bundles/app.utils.bundle': [
		// 	"AppAjax",
		// 	"AppCookie",
		// 	"AppLocalStorage",
    //   "AppDateTime",
    //   "AppFormat"
    //     ],
    //     'vendor/bundles/app.vendor.01.bundle': [
    //         "jquery",
    //         "bootstrap"
    //     ],
    //     'vendor/bundles/app.vendor.02.bundle': [
    //         "underscore",
    //         "backbone",
    //         "text",
    //         "jquery.XDomainRequest"
    //     ]
    // }
});

requirejs.onError = function (err) {
    console.log(err.requireType);
    if (err.requireType === 'timeout') {
        console.log('modules: ' + err.requireModules);
    }

    throw err;
};
