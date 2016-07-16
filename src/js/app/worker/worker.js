importScripts('../../vendor/require.js');

requirejs(['//127.0.0.1:3030/js/require.common.js?v=1'], function(common) {
    requirejs([], function() {
      var WebWorker = {
        property1: 1,
        init: function(){
          postMessage('From Worker');
          this.addEventListener('message', function(event) {
              var data = event.data;
              debugger;
              // primeFactorization(5000000000425343804321);
              console.log("main: message", data);
          });
          console.log('WebWorker init called');
        },
        run: function(){
          console.log('WebWorker run called');
          this.init();
        }
      };

      //var webWorker = new WebWorker();
      WebWorker.run();
      return WebWorker;

      //return new WebWorker();
        //
        // postMessage('From Worker');
        //
        // self.addEventListener('message', function(event) {
        //     var data = event.data;
        //     debugger;
        //     // primeFactorization(5000000000425343804321);
        //     console.log("main: message", data);
        // });
        // onmessage = function onmessage(event) {
        //   debugger;
        //     var result = 0,
        //         i = 0;
        //
        //     for (; i <= event.data; i++) {
        //         result += i;
        //     }
        //
        //     postMessage(result);
        // };
    });
});
