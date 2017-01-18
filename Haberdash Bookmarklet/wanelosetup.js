(function() {

	(function() {
		var CSS, DEFINITIONS, MIN_HEIGHT, MIN_WIDTH, OVERLAY_TEMPLATE, loadFn, ns, tmpl, __indexOf = [].indexOf
				|| function(item) {
					for ( var i = 0, l = this.length; i < l; i++) {
						if (i in this && this[i] === item)
							return i;
					}
					return -1;
				}, __slice = [].slice;

		this.waneloBookmarklet = ns = function(attributes) {
			var images, price, productParams, ref, shop, source, stylesheet, title, url;
			if (attributes == null) {
				attributes = {};
			}
			if (document.getElementById("wanelo-overlay")) {
				return;
			}
			stylesheet = document.createElement("style");
			stylesheet.setAttribute("type", "text/css");
			stylesheet.innerHTML = CSS;
			document.head.appendChild(stylesheet);
			price = attributes.price || ns.ContentScraper.Price("scan");
			title = attributes.title || ns.ContentScraper.Title(null);
			shop = "";
			url = attributes.url || window.location.href;
			source = attributes.source || "toolbar";
			ref = attributes.ref || window.location.href;
			productParams = {
				url : url,
				title : title,
				price : price,
				shop : shop,
				source : source,
				ref : ref
			};
			if (attributes.images) {
				productParams.images = attributes.images;
				return ns.post(productParams);
			} else {
				images = ns.getImages(DEFINITIONS);
				return ns.openOverlay(productParams, images);
			}
		};

		ns.openOverlay = function(productParams, images) {
			alert('olay!');
			var dismiss, imageChoice, overlay, _i, _len, _ref, _results;
			overlay = document.createElement("div");
			overlay.setAttribute("id", "wanelo-overlay");
			overlay.innerHTML = OVERLAY_TEMPLATE({
				images : images
			});
			document.body.appendChild(overlay);
			dismiss = function() {
				return overlay.parentNode.removeChild(overlay);
			};
			document.getElementById("wanelo-	lay-close").onclick = dismiss;
			document.getElementById("wanelo-scrim").onclick = dismiss;
			_ref = document.getElementsByClassName("wanelo-popup-opener");
			_results = [];
			for (_i = 0, _len = _ref.length; _i < _len; _i++) {
				imageChoice = _ref[_i];
				_results.push(imageChoice.onclick = function() {
					ns.post(ns.extend({
						"images[]" : this.getAttribute("data-src")
					}, productParams));
					return dismiss();
				});
			}
			return _results;
		};

		ns.post = function(params) {
			return ns.open("http://wanelo.com/p/post", params);
		};

		ns.open = function(url, urlParams) {
			var features, height, key, param, width;
			width = 400;
			height = 625;
			features = "menubar=no,toolbar=no,status=no,width=" + width
					+ ",height=" + height + ",toolbar=no,left=0,top=0";
			url += "?bookmarklet=";
			for (key in urlParams) {
				param = urlParams[key];
				url += "&" + encodeURIComponent(key) + "="
						+ encodeURIComponent(param);
			}
			return window.open(url, '_blank', features);
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

		OVERLAY_TEMPLATE = tmpl("<div id='wanelo-scrim'></div>\n<div id='wanelo-header'>\n<img id='wanelo-logo' src='//wanelo.com/assets/logo120.png'>\n<a href='javascript:void(0)' id='wanelo-overlay-close'>&times;</a>\n</div>\n<div id='wanelo-image-picker'>\n{[ if(images.length > 0) { ]}\n{[ for(var i = 0, len = images.length; i < len; i++) { ]}\n<div class='wanelo-image-choice'>\n<div class='wanelo-image-wrapper'>\n<img src='{{ images[i].src }}' style='margin-left: {{ images[i].left }}px; margin-top: {{ images[i].top }}px;'>\n</div>\n<span class='wanelo-image-dimensions'>{{ images[i].width }} &times; {{ images[i].height }}</span>\n<a class='wanelo-image-pick-choice wanelo-popup-opener' data-src='{{ images[i].src }}' href='#'>\n<span>Post to Wanelo</span>\n</a>\n</div>\n{[ } ]}\n{[ } else { ]}\n<a class='wanelo-no-images wanelo-popup-opener' data-src='' href='#'>\n<span>Upload Product Image</span>\n</a>\n{[ } ]}\n</div>");

		CSS = "#wanelo-overlay{text-align:left;font-family:&#x27;Helvetica Neue&#x27;, &#x27;Helvetica&#x27;, Arial, Verdana, sans-serif}#wanelo-overlay div,#wanelo-overlay span,#wanelo-overlay applet,#wanelo-overlay object,#wanelo-overlay iframe,#wanelo-overlay h1,#wanelo-overlay h2,#wanelo-overlay h3,#wanelo-overlay h4,#wanelo-overlay h5,#wanelo-overlay h6,#wanelo-overlay p,#wanelo-overlay blockquote,#wanelo-overlay pre,#wanelo-overlay a,#wanelo-overlay abbr,#wanelo-overlay acronym,#wanelo-overlay address,#wanelo-overlay big,#wanelo-overlay cite,#wanelo-overlay code,#wanelo-overlay del,#wanelo-overlay dfn,#wanelo-overlay em,#wanelo-overlay img,#wanelo-overlay ins,#wanelo-overlay kbd,#wanelo-overlay q,#wanelo-overlay s,#wanelo-overlay samp,#wanelo-overlay small,#wanelo-overlay strike,#wanelo-overlay strong,#wanelo-overlay sub,#wanelo-overlay sup,#wanelo-overlay tt,#wanelo-overlay var,#wanelo-overlay b,#wanelo-overlay u,#wanelo-overlay i,#wanelo-overlay center,#wanelo-overlay dl,#wanelo-overlay dt,#wanelo-overlay dd,#wanelo-overlay ol,#wanelo-overlay ul,#wanelo-overlay li,#wanelo-overlay fieldset,#wanelo-overlay form,#wanelo-overlay label,#wanelo-overlay legend,#wanelo-overlay table,#wanelo-overlay caption,#wanelo-overlay tbody,#wanelo-overlay tfoot,#wanelo-overlay thead,#wanelo-overlay tr,#wanelo-overlay th,#wanelo-overlay td,#wanelo-overlay article,#wanelo-overlay aside,#wanelo-overlay canvas,#wanelo-overlay details,#wanelo-overlay embed,#wanelo-overlay figure,#wanelo-overlay figcaption,#wanelo-overlay footer,#wanelo-overlay header,#wanelo-overlay hgroup,#wanelo-overlay menu,#wanelo-overlay nav,#wanelo-overlay output,#wanelo-overlay ruby,#wanelo-overlay section,#wanelo-overlay summary,#wanelo-overlay time,#wanelo-overlay mark,#wanelo-overlay audio,#wanelo-overlay video{margin:0;padding:0;border:0;font:inherit;font-size:100%;vertical-align:baseline}#wanelo-overlay table{border-collapse:collapse;border-spacing:0}#wanelo-overlay caption,#wanelo-overlay th,#wanelo-overlay td{text-align:left;font-weight:normal;vertical-align:middle}#wanelo-overlay q,#wanelo-overlay blockquote{quotes:none}#wanelo-overlay q:before,#wanelo-overlay q:after,#wanelo-overlay blockquote:before,#wanelo-overlay blockquote:after{content:&quot;&quot;;content:none}#wanelo-overlay a img{border:none}#wanelo-overlay img{display:inline !important}#wanelo-overlay a:visited{font-family:&#x27;Helvetica Neue&#x27;, &#x27;Helvetica&#x27;, Arial, Verdana, sans-serif}#wanelo-overlay #wanelo-scrim{position:fixed;z-index:2000000000;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,0.8)}#wanelo-overlay #wanelo-header{position:fixed;background-color:#fff;padding:15px 80px;top:0;left:0;right:0;z-index:2000000001}#wanelo-overlay #wanelo-overlay-close{font-size:40px;color:#777;opacity:1;line-height:30px;float:right;text-decoration:none}#wanelo-overlay #wanelo-overlay-close:hover{text-decoration:none}#wanelo-overlay #wanelo-image-picker{position:fixed;top:100px;left:80px;z-index:2000000001;width:100%}#wanelo-overlay .wanelo-image-choice{width:200px;height:200px;background-color:#fff;text-align:center;display:inline-block;position:relative;margin-right:50px;margin-bottom:50px;float:left}#wanelo-overlay .wanelo-image-choice .wanelo-image-wrapper{width:200px;height:200px;position:relative;overflow:hidden}#wanelo-overlay .wanelo-image-choice img{max-height:200px;max-width:200px}#wanelo-overlay .wanelo-image-dimensions{position:absolute;bottom:-20px;text-align:center;display:block;width:200px;color:#fff;font-size:14px}#wanelo-overlay .wanelo-image-pick-choice{display:none;position:absolute;z-index:2000000002;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,0.4);text-align:center}#wanelo-overlay .wanelo-image-choice:hover .wanelo-image-pick-choice,#wanelo-overlay .wanelo-image-choice.hover .wanelo-image-pick-choice{display:block}#wanelo-overlay .wanelo-image-pick-choice span{width:120px}#wanelo-overlay .wanelo-image-pick-choice span,#wanelo-overlay .wanelo-no-images span{color:#fff;background-color:#0097d8;padding:15px 20px;text-transform:uppercase;font-size:20px;line-height:1.4;display:inline-block;margin-top:55px;letter-spacing:3px;text-decoration:none}#wanelo-overlay .wanelo-no-images{display:block;margin-left:-100px;text-decoration:none;text-align:center}#wanelo-overlay .wanelo-no-images span{margin-left:auto;margin-right:auto}#wanelo-overlay .wanelo-image-pick-choice a:hover{text-decoration:none}";

		MIN_WIDTH = MIN_HEIGHT = 200;

		DEFINITIONS = [ {
			"type" : "Size",
			"minWidth" : 200,
			"minHeight" : 200
		}, {
			"type" : "RejectPattern",
			"pattern" : "sprite",
			"property" : "src"
		} ];

		if (!ns) {
			ns = window;
		}

		ns.getImages = function(definitions) {
			var allImages, image, imageFilter, images;
			allImages = document.getElementsByTagName("img");
			imageFilter = ns.ImageFilter(definitions);
			return images = (function() {
				var _i, _len, _results;
				_results = [];
				for (_i = 0, _len = allImages.length; _i < _len; _i++) {
					image = allImages[_i];
					if (imageFilter(image)) {
						_results.push(ns.normalizeImage(image));
					}
				}
				return _results;
			})();
		};

		ns.ImageFilter = function(definitions) {
			var definition, filterFns;
			filterFns = (function() {
				var _i, _len, _results;
				_results = [];
				for (_i = 0, _len = definitions.length; _i < _len; _i++) {
					definition = definitions[_i];
					_results.push(new ns.ImageFilter[definition.type](
							definition));
				}
				return _results;
			})();
			return function(image) {
				var f, _i, _len;
				for (_i = 0, _len = filterFns.length; _i < _len; _i++) {
					f = filterFns[_i];
					if (!f(image)) {
						return false;
					}
				}
				return true;
			};
		};

		ns.ImageFilter.Size = function(definition) {
			return function(image) {
				return image.height >= definition.minHeight
						&& image.width >= definition.minWidth;
			};
		};

		ns.ImageFilter.RejectPattern = function(definition) {
			return function(image) {
				return !new RegExp(definition.pattern, "i")
						.test(image[definition.property]);
			};
		};

		ns.ImageFilter.RejectEmpty = function(definition) {
			return function(image) {
				return image[definition.property]
						&& image[definition.property] !== "";
			};
		};

		ns.ImageFilter.RejectWindowLocation = function(definition) {
			return function(image) {
				return image[definition.property] !== window.location
						.toString();
			};
		};

		ns.getMetaTagByName = function(name) {
			var tag, _i, _len, _ref;
			_ref = document.getElementsByTagName("meta");
			for (_i = 0, _len = _ref.length; _i < _len; _i++) {
				tag = _ref[_i];
				if (tag.getAttribute('name') === name
						|| tag.getAttribute("property") === name) {
					return tag;
				}
			}
		};

		ns.ContentScraper = {};

		ns.ContentScraper.Title = function(definition) {
			var default_definition, rule, title, _i, _len;
			if (definition == null) {
				definition = "default";
			}
			default_definition = [
					{
						type : "MetaTag",
						name : [ "itemname", "og:title", "title" ]
					},
					{
						type : "Selector",
						selector : [
								"div[itemtype='http://schema.org/Product'] *[itemprop='name']",
								"title" ]
					} ];
			if (definition === "default") {
				definition = default_definition;
			} else {
				definition.concat(default_definition);
			}
			for (_i = 0, _len = definition.length; _i < _len; _i++) {
				rule = definition[_i];
				title = ns.ContentScraper[rule.type](rule);
				if (title) {
					return title;
				}
			}
			return false;
		};

		ns.ContentScraper.Selector = function(definition) {
			var node, selector, text, _i, _len, _ref, _ref1;
			_ref = definition.selector;
			for (_i = 0, _len = _ref.length; _i < _len; _i++) {
				selector = _ref[_i];
				node = (_ref1 = document.querySelectorAll(selector)) != null ? _ref1[0]
						: void 0;
				if (node) {
					if (node.innerText) {
						text = node.innerText;
					} else if (node.textContent) {
						text = node.textContent;
					}
				}
				text = text != null ? text.trim() : void 0;
				if (text) {
					return text;
				}
			}
			return false;
		};

		ns.ContentScraper.MetaTag = function(definition) {
			var content, name, _i, _len, _ref, _ref1, _ref2;
			_ref = definition.name;
			for (_i = 0, _len = _ref.length; _i < _len; _i++) {
				name = _ref[_i];
				content = (_ref1 = ns.getMetaTagByName(name)) != null ? (_ref2 = _ref1
						.getAttribute("content")) != null ? _ref2.trim()
						: void 0
						: void 0;
				if (content) {
					return content;
				}
			}
			return false;
		};

		ns.PRICE_PATTERN = /[\$¥€£]\s*(?:\d[\d,]*(?:\.\d+)?)/g;

		ns.ContentScraper.Price = function(definition) {
			var node;
			if (definition === "scan") {
				return ns.ContentScraper.Price.scan();
			} else if (definition.selector) {
				node = document.querySelector(definition.selector);
				return ns.ContentScraper.Price.scan(node);
			}
		};

		(function(Price) {
			Price.scan = function(node) {
				var allPrices, anyRemaining, bestGuesses, filter, filters, uniquePatterns, _i, _len;
				if (node == null) {
					node = document.body;
				}
				allPrices = Price.scanString(
						node.innerText || node.textContent, ns.PRICE_PATTERN);
				if (allPrices.length === 0) {
					return false;
				} else if (allPrices.length === 1) {
					return allPrices[0];
				} else if (allPrices.length > 1) {
					bestGuesses = Price.findElementsForPatterns(allPrices,
							document.body).records;
					uniquePatterns = function() {
						var guess;
						return ns
								.unique((function() {
									var _i, _len, _results;
									_results = [];
									for (_i = 0, _len = bestGuesses.length; _i < _len; _i++) {
										guess = bestGuesses[_i];
										_results.push(guess.pattern);
									}
									return _results;
								})());
					};
					anyRemaining = function() {
						return uniquePatterns().length > 1;
					};
					filters = [ "valid", "visible", "font", "strikeThrough",
							"bold", "link", "offset" ];
					for (_i = 0, _len = filters.length; _i < _len; _i++) {
						filter = filters[_i];
						if (anyRemaining()) {
							bestGuesses = Price[filter + "Filter"](bestGuesses);
						}
					}
					if (uniquePatterns().length === 1) {
						return bestGuesses[0].pattern;
					} else {
						return false;
					}
				}
			};
			Price.strikeThroughFilter = function(bestGuesses) {
				var guess, strikePrices, _i, _len, _ref, _results;
				strikePrices = (function() {
					var _i, _len, _results;
					_results = [];
					for (_i = 0, _len = bestGuesses.length; _i < _len; _i++) {
						guess = bestGuesses[_i];
						if (ns.cssProperty(guess.element, "textDecoration") === "line-through") {
							_results.push(guess.pattern);
						}
					}
					return _results;
				})();
				if (strikePrices.length) {
					_results = [];
					for (_i = 0, _len = bestGuesses.length; _i < _len; _i++) {
						guess = bestGuesses[_i];
						if (_ref = guess.pattern, __indexOf.call(strikePrices,
								_ref) < 0) {
							_results.push(guess);
						}
					}
					return _results;
				} else {
					return bestGuesses;
				}
			};
			Price.validFilter = function(bestGuesses) {
				var guess;
				bestGuesses = (function() {
					var _i, _len, _results;
					_results = [];
					for (_i = 0, _len = bestGuesses.length; _i < _len; _i++) {
						guess = bestGuesses[_i];
						if (Price.validElement(guess.element)) {
							_results.push(guess);
						}
					}
					return _results;
				})();
				return bestGuesses;
			};
			Price.visibleFilter = function(bestGuesses) {
				var guess;
				bestGuesses = (function() {
					var _i, _len, _results;
					_results = [];
					for (_i = 0, _len = bestGuesses.length; _i < _len; _i++) {
						guess = bestGuesses[_i];
						if (guess.element.hidden === false) {
							_results.push(guess);
						}
					}
					return _results;
				})();
				return bestGuesses;
			};
			Price.fontFilter = function(bestGuesses) {
				var greatestFontSize, maxSize, price, priceElement, priceElementsWithFontSizes;
				priceElementsWithFontSizes = (function() {
					var _i, _len, _results;
					_results = [];
					for (_i = 0, _len = bestGuesses.length; _i < _len; _i++) {
						priceElement = bestGuesses[_i];
						maxSize = ns.getFontSize(priceElement.element);
						ns.traverseDOM(priceElement.element, function(element) {
							return maxSize = Math.max(maxSize, ns
									.getFontSize(element));
						});
						_results.push({
							record : priceElement,
							fontSize : maxSize
						});
					}
					return _results;
				})();
				priceElementsWithFontSizes.sort(function(a, b) {
					return b.fontSize - a.fontSize;
				});
				greatestFontSize = priceElementsWithFontSizes[0].fontSize;
				bestGuesses = (function() {
					var _i, _len, _results;
					_results = [];
					for (_i = 0, _len = priceElementsWithFontSizes.length; _i < _len; _i++) {
						price = priceElementsWithFontSizes[_i];
						if (price.fontSize === greatestFontSize) {
							_results.push(price.record);
						}
					}
					return _results;
				})();
				return bestGuesses;
			};
			Price.boldFilter = function(bestGuesses) {
				var elementIsBold, guess;
				elementIsBold = function(item) {
					var fontWeight, weight, _i, _len, _ref;
					fontWeight = ns.cssProperty(item.element, "fontWeight");
					_ref = [ "bold", "bolder" ];
					for (_i = 0, _len = _ref.length; _i < _len; _i++) {
						weight = _ref[_i];
						if (fontWeight === weight) {
							return true;
						}
					}
					return parseInt(fontWeight) > 400;
				};
				if (ns.any(bestGuesses, elementIsBold)) {
					bestGuesses = (function() {
						var _i, _len, _results;
						_results = [];
						for (_i = 0, _len = bestGuesses.length; _i < _len; _i++) {
							guess = bestGuesses[_i];
							if (elementIsBold(guess)) {
								_results.push(guess);
							}
						}
						return _results;
					})();
				}
				return bestGuesses;
			};
			Price.linkFilter = function(bestGuesses) {
				var guess, _i, _len, _results;
				_results = [];
				for (_i = 0, _len = bestGuesses.length; _i < _len; _i++) {
					guess = bestGuesses[_i];
					if (guess.element.nodeName !== "A") {
						_results.push(guess);
					}
				}
				return _results;
			};
			Price.offsetFilter = function(bestGuesses) {
				var guess, _i, _len, _results;
				_results = [];
				for (_i = 0, _len = bestGuesses.length; _i < _len; _i++) {
					guess = bestGuesses[_i];
					if (ns.getOffsetForElement(guess.element).top < 900) {
						_results.push(guess);
					}
				}
				return _results;
			};
			Price.findElementsForPatterns = function(prices, currentNode) {
				var allPricesWithinChild, child, children, mergedPrices, pattern, patterns, patternsWithinChild, price, pricesFound, _i, _j, _k, _len, _len1, _len2, _ref;
				patterns = new ns.Patterns(prices);
				children = currentNode.children;
				if (children.length === 0) {
					for (_i = 0, _len = prices.length; _i < _len; _i++) {
						price = prices[_i];
						patterns.associateElement(price, currentNode);
					}
				} else {
					pricesFound = [];
					for (_j = 0, _len1 = children.length; _j < _len1; _j++) {
						child = children[_j];
						allPricesWithinChild = Price.scanString(child.innerText
								|| child.textContent, ns.PRICE_PATTERN);
						patternsWithinChild = (function() {
							var _k, _len2, _results;
							_results = [];
							for (_k = 0, _len2 = allPricesWithinChild.length; _k < _len2; _k++) {
								pattern = allPricesWithinChild[_k];
								if (__indexOf.call(prices, pattern) >= 0) {
									_results.push(pattern);
								}
							}
							return _results;
						})();
						if (patternsWithinChild.length) {
							mergedPrices = patterns.mergeSubset(Price
									.findElementsForPatterns(
											patternsWithinChild, child));
							pricesFound = pricesFound.concat(mergedPrices);
						}
					}
					_ref = ns.subtract(prices, pricesFound);
					for (_k = 0, _len2 = _ref.length; _k < _len2; _k++) {
						pattern = _ref[_k];
						patterns.associateElement(pattern, currentNode);
					}
				}
				return patterns;
			};
			Price.validElement = function(element) {
				return element.nodeName !== "SCRIPT";
			};
			return Price.scanString = function(string, regexp) {
				var match, matches;
				regexp = new RegExp(regexp);
				return matches = (function() {
					var _results;
					_results = [];
					while ((match = regexp.exec(string))) {
						_results.push(match[0]);
					}
					return _results;
				})();
			};
		})(ns.ContentScraper.Price);

		ns.traverseDOM = function(startElement, fn) {
			var child, _i, _len, _ref, _results;
			fn(startElement);
			_ref = startElement.children;
			_results = [];
			for (_i = 0, _len = _ref.length; _i < _len; _i++) {
				child = _ref[_i];
				_results.push(ns.traverseDOM(child, fn));
			}
			return _results;
		};

		ns.getOffsetForElement = function(el) {
			var x, y;
			x = 0;
			y = 0;
			while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
				x += el.offsetLeft - el.scrollLeft;
				y += el.offsetTop - el.scrollTop;
				el = el.offsetParent;
			}
			return {
				top : y,
				left : x
			};
		};

		ns.any = function(array, fn) {
			var item, _i, _len;
			for (_i = 0, _len = array.length; _i < _len; _i++) {
				item = array[_i];
				if (fn(item)) {
					return true;
				}
			}
			return false;
		};

		ns.subtract = function(original, other) {
			var index, item, newArray, _i, _len;
			newArray = original.slice(0);
			for (_i = 0, _len = other.length; _i < _len; _i++) {
				item = other[_i];
				index = newArray.indexOf(item);
				if (index !== -1) {
					newArray = newArray.concat(newArray.splice(index).slice(1));
				}
			}
			return newArray;
		};

		ns.detect = function(array, callback) {
			var item, _i, _len;
			for (_i = 0, _len = array.length; _i < _len; _i++) {
				item = array[_i];
				if (callback(item)) {
					return item;
				}
			}
		};

		ns.unique = function(array, fn) {
			var item, results, _i, _len;
			if (fn == null) {
				fn = null;
			}
			results = [];
			for (_i = 0, _len = array.length; _i < _len; _i++) {
				item = array[_i];
				if (__indexOf.call(results, item) < 0) {
					results.push(item);
				}
			}
			return results;
		};

		ns.extend = function() {
			var first, key, obj, objs, value, _i, _len;
			first = arguments[0], objs = 2 <= arguments.length ? __slice.call(
					arguments, 1) : [];
			for (_i = 0, _len = objs.length; _i < _len; _i++) {
				obj = objs[_i];
				for (key in obj) {
					value = obj[key];
					first[key] = value;
				}
			}
			return first;
		};

		ns.first = function(array, fn) {
			var item, _i, _len;
			for (_i = 0, _len = array.length; _i < _len; _i++) {
				item = array[_i];
				if (fn(item)) {
					return item;
				}
			}
		};

		ns.cssProperty = function(el, property) {
			return getComputedStyle(el, "")[property];
		};

		ns.getFontSize = function(el) {
			return Number(ns.cssProperty(el, "fontSize").match(/(\d+)px/)[1]);
		};

		ns.Patterns = (function() {

			Patterns.name = 'Patterns';

			function Patterns(patterns) {
				var pattern;
				this.records = (function() {
					var _i, _len, _results;
					_results = [];
					for (_i = 0, _len = patterns.length; _i < _len; _i++) {
						pattern = patterns[_i];
						_results.push({
							pattern : pattern,
							element : null
						});
					}
					return _results;
				})();
			}

			Patterns.prototype.associateElement = function(pattern, element) {
				var record, unseenRecordsForPattern;
				unseenRecordsForPattern = (function() {
					var _i, _len, _ref, _results;
					_ref = this.records;
					_results = [];
					for (_i = 0, _len = _ref.length; _i < _len; _i++) {
						record = _ref[_i];
						if (record.pattern === pattern && !record.element) {
							_results.push(record);
						}
					}
					return _results;
				}).call(this);
				if (unseenRecordsForPattern[0]) {
					unseenRecordsForPattern[0].element = element;
					return true;
				} else {
					return false;
				}
			};

			Patterns.prototype.mergeSubset = function(otherPatterns) {
				var mergedPatterns, otherRecord, _i, _len, _ref;
				mergedPatterns = [];
				_ref = otherPatterns.records;
				for (_i = 0, _len = _ref.length; _i < _len; _i++) {
					otherRecord = _ref[_i];
					if (otherRecord.element) {
						if (this.associateElement(otherRecord.pattern,
								otherRecord.element)) {
							mergedPatterns.push(otherRecord.pattern);
						}
					}
				}
				return mergedPatterns;
			};

			return Patterns;

		})();

		ns.scaleDimensions = function(x, y) {
			if (x > y) {
				return [ 200, (200 * y) / x ];
			} else {
				return [ (200 * x) / y, 200 ];
			}
		};

		ns.marginsForImage = function(image) {
			var scaledX, scaledY, _ref;
			_ref = ns.scaleDimensions(image.width, image.height),
					scaledX = _ref[0], scaledY = _ref[1];
			return {
				left : (200 - scaledX) / 2,
				top : (200 - scaledY) / 2
			};
		};

		ns.normalizeImage = function(image) {
			var topAndLeft;
			topAndLeft = ns.marginsForImage(image);
			return {
				src : image.src,
				left : topAndLeft.left,
				top : topAndLeft.top,
				width : image.width,
				height : image.height
			};
		};

		loadFn = function() {
			return ns.scraperReady = true;
		};

		if (document.readyState === "complete") {
			loadFn();
		} else {
			document.addEventListener("DOMContentLoaded", loadFn, false);
			window.addEventListener("load", loadFn, false);
		}

	}).call(this);

	;

}).call(this);