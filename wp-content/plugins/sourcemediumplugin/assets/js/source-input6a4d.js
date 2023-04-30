(function () {
    // https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    function checkForSource(sources) {
        var str = window.location.href;

        var organicRefs = [
            'google.com',
            'bing.com',
            'yahoo.com',
            'duckduckgo.com',
            location.host.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]
        ];

        var referrer = document.referrer.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];
        if (document.referrer && !organicRefs.includes(referrer) && !sessionStorage.getItem('source_value')) {
            sessionStorage.setItem('source_value', 'referrer=' + referrer);
        } else if ( !sessionStorage.getItem('source_value') ) {
            if ( referrer && referrer !== location.host.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0] ) {
                sessionStorage.setItem('source_value', 'organic=' + referrer);
            } else {
                sessionStorage.setItem('source_value', 'organic');
            }
        }

        function setCookie(name,value,days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days*24*60*60*1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "")  + expires + "; path=/";
        }

        // set the referrer cookie, expire it after one day
        setCookie( 'referrer', sessionStorage.getItem('source_value'), 1 );

        if (
            getParameterByName('utm_source') &&
            getParameterByName('utm_medium') &&
            getParameterByName('utm_campaign')
        ) {
            var utmInfo = '';
            utmInfo += 'utm_source=' + getParameterByName('utm_source');
            utmInfo += '&utm_medium=' + getParameterByName('utm_medium');
            utmInfo += '&utm_campaign=' + getParameterByName('utm_campaign');

            if ( getParameterByName('utm_term') ) {
                utmInfo += '&utm_term=' + getParameterByName('utm_term');
            }

            if ( getParameterByName('utm_content') ) {
                utmInfo += '&utm_content=' + getParameterByName('utm_content');
            }
            sessionStorage.setItem('source_value', utmInfo);
        } else if (getParameterByName('utm_source')) {
            sessionStorage.setItem('source_value', 'utm_source=' + getParameterByName('utm_source'));
        } else if (getParameterByName('gclid')) {
            sessionStorage.setItem('source_value', 'Google Adwords: gclid=' + getParameterByName('gclid'));
        }
    }

    function updateSourceInput() {
        var inputs = document.querySelectorAll('.gfsi_source');

        if (inputs.length > 0 && sessionStorage.getItem('source_value')) {
          inputs.forEach( function( input ) {
            input.value = sessionStorage.getItem('source_value');
          } );
        }
    }

    document.addEventListener('gform_page_loaded', function(event) {
      updateSourceInput();
    });

    checkForSource(gfsiSources);
    updateSourceInput();
})();
