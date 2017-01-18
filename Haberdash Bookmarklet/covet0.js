scaleDimensions = function(x, y) {
	if (x > y) {
		return [ 200, (200 * y) / x ];
	} else {
		return [ (200 * x) / y, 200 ];
	}
};

marginsForImage = function(image) {
	var scaledX, scaledY, _ref;
	_ref = scaleDimensions(image.width, image.height),
			scaledX = _ref[0], scaledY = _ref[1];
	return {
		left : (200 - scaledX) / 2,
		top : (200 - scaledY) / 2
	};
};

normalizeImage = function(image) {
	var topAndLeft;
	topAndLeft = marginsForImage(image);
	return {
		src : image.src,
		left : topAndLeft.left,
		top : topAndLeft.top,
		width : image.width,
		height : image.height
	};
};

tmpl = function(text, data, objectName) {
	var escaper, escapes, noMatch, p, render, source, template, templateSettings, unescaper;
	templateSettings = {
		evaluate : /\{\[([\s\S]+?)\]\}/g,
		interpolate : /\{\{([\s\S]+?)\}\}/g,
		escape : /<%-([\s\S]+?)%>/g
	};
	noMatch = /.^/;
	escapes = {
		"\\" : "\\",
		"'" : "'",
		"r" : "\r",
		"n" : "\n",
		"t" : "\t",
		'u2028' : "\u2028",
		'u2029' : "\u2029"
	};
	escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;
	unescaper = /\\(\\|'|r|n|t|u2028|u2029)/g;
	for (p in escapes) {
		escapes[escapes[p]] = p;
	}
	templateSettings.variable = objectName;
	source = "__p+='"
			+ text.replace(escaper, function(match) {
				return "\\" + escapes[match];
			}).replace(
					templateSettings.escape || noMatch,
					function(match, code) {
						return "'+\n_.escape(" + unescape(code)
								+ ")+\n'";
					}).replace(templateSettings.interpolate || noMatch,
					function(match, code) {
						return "'+\n(" + unescape(code) + ")+\n'";
					}).replace(templateSettings.evaluate || noMatch,
					function(match, code) {
						return "';\n" + unescape(code) + "\n;__p+='";
					}) + "';\n";
	if (!templateSettings.variable) {
		source = "with(obj||{}){\n" + source + "}\n";
	}
	source = "var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n"
			+ source + "return __p;\n";
	render = new Function(templateSettings.variable || "obj", source);
	if (data) {
		return render(data);
	}
	template = function(data) {
		return render.call(this, data);
	};
	template.source = "function("
			+ (templateSettings.variable || "obj") + "){\n" + source
			+ "}";
	return template;
};

(function(doc) {
	OLAY_TEMPLATE = tmpl("<div id='overlay-header'><a href='javascript:void(0)' id='close'>&times;</a></div><div id='logo'><img src='//bwackwat.noads.biz/haberdash_logo.jpg'></div><div id='imgset'>{[for(var i = 0; i < nimgs.length; i++){ ]}<img src='{{ nimgs[i].src }}' style='margin-left: {{ nimgs[i].left }}px; margin-top: {{ nimgs[i].top }}px;'>{[ } ]}</div>");
	var imgs = doc.getElementsByTagName('img');
	var nimgs = [];
	for ( var i = 0; i < imgs.length; i++) {
		nimgs[i] = new Image();
		nimgs[i].src = imgs[i].src;

		if(imgs[i].width > imgs[i].height){
			nimgs[i].width = '200px';
			nimgs[i].height = 'auto';
		}else{
			nimgs[i].height = '200px';
			nimgs[i].width = 'auto';
		}

		alert('resized ' + imgs[i].src + ' from ' + imgs[i].width + 'x' + imgs[i].height + ' to ' + nimgs[i].width + 'x' + nimgs[i].height);
	}

	var ssheet = document.createElement("link");
	ssheet.id = 'covet-css';
	ssheet.rel = 'stylesheet';
	ssheet.type = 'text/css';
	ssheet.href = '//bwackwat.noads.biz/covet.css';
	ssheet.media = 'all';
	document.head.appendChild(ssheet);

	var olay = document.createElement('div');
	olay.style.position = 'fixed';
	olay.style.left = olay.style.right = olay.style.top = olay.style.bottom = '0%';
	olay.style.zIndex = '100000';
	olay.style.background = 'white';
	olay.style.opacity = 0.9;
	olay.innerHTML = OLAY_TEMPLATE({
		nimgs : nimgs
	});
	document.body.appendChild(olay);

	closeolay = function(){
		return olay.parentNode.removeChild(olay);
	}
	document.getElementById("close").onclick = closeolay;
})(document);	