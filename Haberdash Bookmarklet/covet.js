javascript: void ((function(d) {
	var e = d.createElement('script');
	e.setAttribute('type', 'text/javascript');
	e.setAttribute('charset', 'UTF-8');
	e.setAttribute('src', '//bwackwat.noads.biz/covet.js');
	d.body.appendChild(e);
})(document));

OVERLAY_TEMPLATE = tmpl("<div id='overlay-header'><a href='javascript:void(0)' id='close'>X</a></div><div id='logo'><img src='//bwackwat.noads.biz/haberdash_logo.jpg'></div><div id='imgset'>{[for(var i = 0; i < imgs.length; i++){ ]}<img src='{{ imgs[i].src }}' style='margin-left: {{ imgs[i].left }}px; margin-top: {{ imgs[i].top }}px;'>{[ } ]}</div>");
var imgs = doc.getElementsByTagName('img');
for ( var i = 0; i < imgs.length; i++) {
	imgs[i] = normalizeImage(imgs[i]);
}
olay.innerHTML = OLAY_TEMPLATE({
	imgs : imgs
});

 
(function(doc) {
	alert("JavaScript Running");
// var imgs = doc.getElementsByTagName('img');
// for ( var i = 0; i < imgs.length; i++) {
// alert(imgs.item(i).toString());
// }
	var olay = document.createElement('div');
	olay.style.position = 'fixed';
	olay.style.left = olay.style.right = olay.style.top = olay.style.bottom = '0%';
	olay.style.zIndex = '100000';
	olay.innerHTML = tmpl("<div id='overlay-logo' style='height:100px;background-color:white;'><img id='logo' src='//bwackwat.noads.biz/haberdash_logo.jpg' style='text-align:center;'><a href='javascript:void(0)' id='close' style='text-align:right;font-family:'Times New Roman', Times, Sans-serif;font-size:100px;'>X</a></div>");
// olay.style.background = rgba(255, 255, 255, 0.5);
// olay.style.
// a.innerHTML = 'overlay content goes here';
	document.body.appendChild(olay);
})(document);


(function(doc) {
	alert("JavaScript Running");
	var ssheet = document.createElement("style");
	ssheet.setAttribute("type", "text/css");
	ssheet.innerHTML = '//bwackwat.noads.biz/covet.css';
	ssheet.style
	document.head.appendChild(stylesheet);
	var olay = document.createElement('div');
	olay.style.position = 'fixed';
	olay.style.left = olay.style.right = olay.style.top = olay.style.bottom = '0%';
	olay.style.zIndex = '100000';
	olay.style.background = 'white';
	olay.style.opacity = 0.9;
	olay.innerHTML = '//bwackwat.noads.biz/covet.html';
	olay.innerHTML.
	document.body.appendChild(olay);
	closeolay = function(){\
		return olay.parentNode.removeChild(olay);
	}
	document.getElementById("close").onclick = closeolay;
})(document);

<div id='overlay-logo' style='height:200px;background:rgba(255, 255, 255, 0.5);white;position:fixed;'>
<img id='logo' src='//bwackwat.noads.biz/haberdash_logo.jpg' style='text-align:center;position:fixed;'>
<a href='javascript:void(0)' id='close' style='text-align:right;font-size:100px;position:fixed;'>X</a>
</div>

tmpl("<div id='wanelo-scrim'>" +
		"</div>\n" +
		"<div id='wanelo-header'>\n" +
		"<img id='wanelo-logo' src='//wanelo.com/assets/logo120.png'>\n" +
		"<a href='javascript:void(0)' id='wanelo-overlay-close'>&times;</a>\n" +
		"</div>\n" +
		"<div id='wanelo-image-picker'>\n" +
		"{[ if(images.length > 0) { ]}\n{[ for(var i = 0, len = images.length; i < len; i++) { ]}\n" +
		"<div class='wanelo-image-choice'>\n" +
		"<div class='wanelo-image-wrapper'>\n" +
		"<img src='{{ images[i].src }}' style='margin-left: {{ images[i].left }}px; margin-top: {{ images[i].top }}px;'>\n" +
		"</div>\n" +
		"<span class='wanelo-image-dimensions'>{{ images[i].width }} &times; {{ images[i].height }}</span>\n" +
		"<a class='wanelo-image-pick-choice wanelo-popup-opener' data-src='{{ images[i].src }}' href='#'>\n" +
		"<span>Post to Wanelo</span>\n" +
		"</a>\n" +
		"</div>\n" +
		"{[ } ]}\n{[ } else { ]}\n<a class='wanelo-no-images wanelo-popup-opener' data-src='' href='#'>\n<span>Upload Product Image</span>\n" +
		"</a>\n" +
		"{[ } ]}\n</div>");

CSS = "#wanelo-overlay{text-align:left;font-family:&#x27;Helvetica Neue&#x27;, &#x27;Helvetica&#x27;, Arial, Verdana, sans-serif}#wanelo-overlay div,#wanelo-overlay span,#wanelo-overlay applet,#wanelo-overlay object,#wanelo-overlay iframe,#wanelo-overlay h1,#wanelo-overlay h2,#wanelo-overlay h3,#wanelo-overlay h4,#wanelo-overlay h5,#wanelo-overlay h6,#wanelo-overlay p,#wanelo-overlay blockquote,#wanelo-overlay pre,#wanelo-overlay a,#wanelo-overlay abbr,#wanelo-overlay acronym,#wanelo-overlay address,#wanelo-overlay big,#wanelo-overlay cite,#wanelo-overlay code,#wanelo-overlay del,#wanelo-overlay dfn,#wanelo-overlay em,#wanelo-overlay img,#wanelo-overlay ins,#wanelo-overlay kbd,#wanelo-overlay q,#wanelo-overlay s,#wanelo-overlay samp,#wanelo-overlay small,#wanelo-overlay strike,#wanelo-overlay strong,#wanelo-overlay sub,#wanelo-overlay sup,#wanelo-overlay tt,#wanelo-overlay var,#wanelo-overlay b,#wanelo-overlay u,#wanelo-overlay i,#wanelo-overlay center,#wanelo-overlay dl,#wanelo-overlay dt,#wanelo-overlay dd,#wanelo-overlay ol,#wanelo-overlay ul,#wanelo-overlay li,#wanelo-overlay fieldset,#wanelo-overlay form,#wanelo-overlay label,#wanelo-overlay legend,#wanelo-overlay table,#wanelo-overlay caption,#wanelo-overlay tbody,#wanelo-overlay tfoot,#wanelo-overlay thead,#wanelo-overlay tr,#wanelo-overlay th,#wanelo-overlay td,#wanelo-overlay article,#wanelo-overlay aside,#wanelo-overlay canvas,#wanelo-overlay details,#wanelo-overlay embed,#wanelo-overlay figure,#wanelo-overlay figcaption,#wanelo-overlay footer,#wanelo-overlay header,#wanelo-overlay hgroup,#wanelo-overlay menu,#wanelo-overlay nav,#wanelo-overlay output,#wanelo-overlay ruby,#wanelo-overlay section,#wanelo-overlay summary,#wanelo-overlay time,#wanelo-overlay mark,#wanelo-overlay audio,#wanelo-overlay video{margin:0;padding:0;border:0;font:inherit;font-size:100%;vertical-align:baseline}#wanelo-overlay table{border-collapse:collapse;border-spacing:0}#wanelo-overlay caption,#wanelo-overlay th,#wanelo-overlay td{text-align:left;font-weight:normal;vertical-align:middle}#wanelo-overlay q,#wanelo-overlay blockquote{quotes:none}#wanelo-overlay q:before,#wanelo-overlay q:after,#wanelo-overlay blockquote:before,#wanelo-overlay blockquote:after{content:&quot;&quot;;content:none}#wanelo-overlay a img{border:none}#wanelo-overlay img{display:inline !important}#wanelo-overlay a:visited{font-family:&#x27;Helvetica Neue&#x27;, &#x27;Helvetica&#x27;, Arial, Verdana, sans-serif}#wanelo-overlay #wanelo-scrim{position:fixed;z-index:2000000000;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,0.8)}#wanelo-overlay #wanelo-header{position:fixed;background-color:#fff;padding:15px 80px;top:0;left:0;right:0;z-index:2000000001}#wanelo-overlay #wanelo-overlay-close{font-size:40px;color:#777;opacity:1;line-height:30px;float:right;text-decoration:none}#wanelo-overlay #wanelo-overlay-close:hover{text-decoration:none}#wanelo-overlay #wanelo-image-picker{position:fixed;top:100px;left:80px;z-index:2000000001;width:100%}#wanelo-overlay .wanelo-image-choice{width:200px;height:200px;background-color:#fff;text-align:center;display:inline-block;position:relative;margin-right:50px;margin-bottom:50px;float:left}#wanelo-overlay .wanelo-image-choice .wanelo-image-wrapper{width:200px;height:200px;position:relative;overflow:hidden}#wanelo-overlay .wanelo-image-choice img{max-height:200px;max-width:200px}#wanelo-overlay .wanelo-image-dimensions{position:absolute;bottom:-20px;text-align:center;display:block;width:200px;color:#fff;font-size:14px}#wanelo-overlay .wanelo-image-pick-choice{display:none;position:absolute;z-index:2000000002;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,0.4);text-align:center}#wanelo-overlay .wanelo-image-choice:hover .wanelo-image-pick-choice,#wanelo-overlay .wanelo-image-choice.hover .wanelo-image-pick-choice{display:block}#wanelo-overlay .wanelo-image-pick-choice span{width:120px}#wanelo-overlay .wanelo-image-pick-choice span,#wanelo-overlay .wanelo-no-images span{color:#fff;background-color:#0097d8;padding:15px 20px;text-transform:uppercase;font-size:20px;line-height:1.4;display:inline-block;margin-top:55px;letter-spacing:3px;text-decoration:none}#wanelo-overlay .wanelo-no-images{display:block;margin-left:-100px;text-decoration:none;text-align:center}#wanelo-overlay .wanelo-no-images span{margin-left:auto;margin-right:auto}#wanelo-overlay .wanelo-image-pick-choice a:hover{text-decoration:none}";