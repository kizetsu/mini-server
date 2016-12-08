CORSRequest = (function() {
	var instance;
 
	function init() {
		if(typeof CORSRequest !== 'object') {
			throw new Error("CORSRequest.js is required.");
		}
 
		return {
			create: function(method, url) {
				// original from https://www.html5rocks.com/en/tutorials/cors/
				var xhr = new XMLHttpRequest();
				if ("withCredentials" in xhr) {
					// Check if the XMLHttpRequest object has a "withCredentials" property.
					// "withCredentials" only exists on XMLHTTPRequest2 objects.
					xhr.open(method, url, true);
				} else if (typeof XDomainRequest != "undefined") {
					// Otherwise, check if XDomainRequest.
					// XDomainRequest only exists in IE, and is IE's way of making CORS requests.
					xhr = new XDomainRequest();
					xhr.open(method, url);
				} else {
					// Otherwise, CORS is not supported by the browser.
					xhr = null;
				}
				return xhr;
			}
		}
	}
 
	return {
		getInstance: function() {
			if(!instance) {
				instance = init();
			}
 
			return instance;
		}
	}
})
