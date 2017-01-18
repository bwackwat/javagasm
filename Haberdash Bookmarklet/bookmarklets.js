javascript: void ((function(d) {
	var e = d.createElement('script');
	e.setAttribute('type', 'text/javascript');
	e.setAttribute('charset', 'UTF-8');
	e.setAttribute('src', '//assets.pinterest.com/js/pinmarklet.js?r='
			+ Math.random() * 99999999);
	d.body.appendChild(e)
})(document));

javascript: void ((function(d) {
	var e = d.createElement('script');
	e.setAttribute('type', 'text/javascript');
	e.setAttribute('charset', 'UTF-8');
	e.setAttribute('src', '//bwackwat.noads.biz/covet.js');
	d.body.appendChild(e);
})(document));

javascript: void ((function() {
	var e = document.createElement('script');
	e.setAttribute('type', 'text/javascript');
	e.setAttribute('charset', 'UTF-8');
	e.setAttribute('src','http://www.apptha-demo.com/extensions/socialpinboard//components/com_socialpinboard/javascript/socialmarklet.js');
	document.body.appendChild(e);
})());

javascript: void ((function(url) {
	if (!window.waneloBookmarklet) {
		var productURL = encodeURIComponent(url), cacheBuster = Math.floor(Math
				.random() * 1e3), element = document.createElement('script');
		element.setAttribute('src', '//wanelo.com/bookmarklet/3/setup?*='
				+ cacheBuster + '&url=' + productURL), element.onload = init,
				element.setAttribute('type', 'text/javascript'), document
						.getElementsByTagName('head')[0].appendChild(element)
	} else
		init();
	function init() {
		window.waneloBookmarklet()
	}
})(window.location.href));

OVERLAY_TEMPLATE = tmpl("<div id='wanelo-scrim'>"
		+ "</div>\n"
		+ "<div id='wanelo-header'>\n"
		+ "<img id='wanelo-logo' src='//wanelo.com/assets/logo120.png'>\n"
		+ "<a href='javascript:void(0)' id='wanelo-overlay-close'>&times;</a>\n"
		+ "</div>\n"
		+ "<div id='wanelo-image-picker'>\n"
		+ "{[ if(images.length > 0) { ]}\n{[ for(var i = 0, len = images.length; i < len; i++) { ]}\n"
		+ "<div class='wanelo-image-choice'>\n"
		+ "<div class='wanelo-image-wrapper'>\n"
		+ "<img src='{{ images[i].src }}' style='margin-left: {{ images[i].left }}px; margin-top: {{ images[i].top }}px;'>\n"
		+ "</div>\n"
		+ "<span class='wanelo-image-dimensions'>{{ images[i].width }} &times; {{ images[i].height }}</span>\n"
		+ "<a class='wanelo-image-pick-choice wanelo-popup-opener' data-src='{{ images[i].src }}' href='#'>\n"
		+ "<span>Post to Wanelo</span>\n"
		+ "</a>\n"
		+ "</div>\n"
		+ "{[ } ]}\n{[ } else { ]}\n<a class='wanelo-no-images wanelo-popup-opener' data-src='' href='#'>\n<span>Upload Product Image</span>\n"
		+ "</a>\n" + "{[ } ]}\n</div>");