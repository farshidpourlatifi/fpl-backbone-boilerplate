requirejs(['//127.0.0.1:3030/js/require.common.js?v=1'], function(common) {
    requirejs([], function() {
        //App.Run();
        var specs = [
            'spec/test.js'
        ];

        require(specs, function() {

            if (window.mochaPhantomJS) {
                mochaPhantomJS.run();
            } else {
                mocha.run();
            }
        });

    });
});
