(function(h, m, n, k) {
  var a = h[k.k] = {w:h, d:m, n:n, a:k, s:{}, f:{callback:[], kill:function(a) {
    a.parentNode && a.parentNode.removeChild(a)
  }, get:function(a, c) {
    return a[c] || a.getAttribute(c)
  }, make:function(b) {
    var c = !1, d, e;
    for(d in b) {
      if(b[d].hasOwnProperty) {
        c = a.d.createElement(d);
        for(e in b[d]) {
          b[d][e].hasOwnProperty && "string" === typeof b[d][e] && (c[e] = b[d][e])
        }
        break
      }
    }
    return c
  }, listen:function(b, c, d) {
    "undefined" !== typeof a.w.addEventListener ? b.addEventListener(c, d, !1) : "undefined" !== typeof a.w.attachEvent && b.attachEvent("on" + c, d)
  }, getSelection:function() {
    return("" + (a.w.getSelection ? a.w.getSelection() : a.d.getSelection ? a.d.getSelection() : a.d.selection.createRange().text)).replace(/(^\s+|\s+$)/g, "")
  }, pin:function(b) {
    for(var c = document.getElementsByTagName("script"), d = c.length - 1;0 <= d;--d) {
      var e = c[d].src;
      e.match(/socialmarklet.js/gi) && (e = e.replace("components/com_socialpinboard/javascript/socialmarklet.js", ""), a.a.pin = e + "/index.php?option=com_socialpinboard&view=pinitdisplay&tmpl=component", a.a.pinImage = e)
    }
    var c = b.getElementsByTagName("IMG")[0], d = "false", f = a.a.pin + "&", e = (new Date).getTime();
    "video" === b.rel && (d = "true");
   url1 = encodeURIComponent(c.src);
                    url1 = url1.replace(/^http%3A%2F%2F|https%3A%2F%2F/,'');
                    f=f+"media="+url1;

                    url2 = encodeURIComponent(c.getAttribute("url")||a.d.URL);
                    url2 = url2.replace(/^http%3A%2F%2F|https%3A%2F%2F/,'');
                    f=f+"&url="+url2;
    f = f + "&title=" + encodeURIComponent(a.d.title);
    f = f + "&is_video=" + d;
    f = f + "&description=" + encodeURIComponent(a.v.selectedText || c.title || c.alt);
    a.v.hazIOS && a.w.setTimeout(function() {
      a.w.location = "pinit12:" + f
    }, 25);
    a.w.open(f, "pin" + e, a.a.pop)
  }, close:function(b) {
    a.s.bg && (a.d.b.removeChild(a.s.shim), a.d.b.removeChild(a.s.bg), a.d.b.removeChild(a.s.bd));
    h.hazPinningNow = !1;
    b && a.w.alert(b);
    a.v.hazGoodUrl = !1;
    a.w.scroll(0, a.v.saveScrollTop)
  }, click:function(b) {
    var b = b || a.w.event, c = null;
    if(c = b.target ? 3 === b.target.nodeType ? b.target.parentNode : b.target : b.srcElement) {
      if(c === a.s.x) {
        a.f.close()
      }else {
        if(c.parentNode.className === a.a.k + "_pinContainer" || c.className === a.a.k + "_pinButton") {
          a.f.pin(c.parentNode.getElementsByTagName("A")[0]), a.w.setTimeout(function() {
            a.f.close()
          }, 10)
        }
      }
    }
  }, behavior:function() {
    a.f.listen(a.s.bd, "click", a.f.click)
  }, presentation:function() {
    for(var b = document.getElementsByTagName("script"), c = b.length - 1;0 <= c;--c) {
      var d = b[c].src;
      if(d.match(/socialmarklet.js/gi)) {
        d = d.replace("components/com_socialpinboard/javascript/socialmarklet.js", "");
        break
      }
    }
    a.a.rules = ["#_bg {position:fixed;z-index:8675309; top:0; right:0; bottom:0; left:0; background-color:#f2f2f2; opacity:.95; }", "#_shim {position:fixed; background: transparent; z-index:8675308; top:0; right:0; bottom:0; left:0; }", "#_bd {position: absolute; text-align: left; padding-top: 36px; top: 0; left: 0; right: 0; z-index:8675320; font:16px hevetica neue,arial,san-serif; }", "#_bd span { zoom:1; display: inline-block; background: #fff; height:200px; width:200px; border: 1px solid #ddd; border-top: none; border-left:none; text-decoration: none;  text-shadow: 0 1px #fff; position: relative; cursor: pointer; vertical-align:middle;  }", 
    "#_bd span#_logo {background: #FCF9F9 url(" + d + "/templates/socialpinboard/images/Logo.png) 50% 50% no-repeat; box-shadow: none; background-size: 90%; }", '#_bd a#_x {height: 36px; line-height: 36px; position: fixed; font-size: 14px; font-weight: bold; display: block; width:auto; top: 0; left: 0; right: 0; margin: 0; background: url("' + d + '/components/com_socialpinboard/images/fullGradient07Normal.png") repeat-x scroll 0 0 #FFFFFF; border-bottom: 1px solid #CCCCCC; color: #211922; text-align: center; z-index:8675321; }', 
    '#_bd a#_x:active {background-color: #211922; background-image: url("' + d + '/components/com_socialpinboard/images/fullGradient07Inverted.png"); border-color: #211922; text-shadow: 0 -1px #211922; }', "#_bd a#_x:hover {color: #fff; text-decoration: none; background-color: #1389e5; border-color: #1389e5; text-shadow: 0 -1px #46A0E6;}", "#_bd a img {max-height:200px; max-width:200px; top: 50%; left: 50%; position: absolute; z-index:8675312; }", "#_bd a b { z-index: 8675315; position: absolute; top: 50%; left: 50%; height: 50px; width: 50px; background: transparent url(" + 
    d + "/components/com_socialpinboard/images/VideoIndicator.png) 0 0 no-repeat; margin-top: -25px; margin-left: -25px; }", "#_bd a cite {z-index: 8675316; position: absolute; font-size: 10px; font-style: normal; bottom: 5px; width: 100px; left: 50%; margin-left: -50px; text-align: center; color: #000; background: #fff; padding: 3px;}", "#_bd span._pinContainer {z-index: 8675320; height: 200px; width: 200px; background: #fff; }", "#_bd span._pinButton {z-index: 8675320; height: 200px; width: 200px; background: transparent; }", 
    "#_bd span._pinButton:hover {height: 200px; width: 200px; background: transparent url(" + d + "/components/com_socialpinboard/images/PinThis.png) 50% 50% no-repeat; }"];
    b = a.f.make({STYLE:{type:"text/css"}});
    c = a.a.rules.join("\n").replace(/#_/g, "#" + k.k + "_").replace(/\._/g, "." + k.k + "_");
    b.styleSheet ? b.styleSheet.cssText = c : b.appendChild(a.d.createTextNode(c));
    a.d.h.appendChild(b)
  }, thumb:function(b, c, d, e, f, g) {
    if(!0 !== a.v.hazSrc[b]) {
      a.v.hazSrc[b] = !0
    }else {
      if(!a.v.hazIE) {
        return
      }
    }
    a.v.hazAtLeastOneGoodThumb = !0;
    e || (e = "image");
    var i = a.f.make({SPAN:{className:a.a.k + "_pinContainer"}}), l = a.f.make({A:{rel:e}}), j = new Image, h, k;
    j.setAttribute("nopin", "nopin");
    j.style.visibility = "hidden";
    f && (j.title = f);
    g && j.setAttribute("url", g);
    j.onload = function() {
      h = this.width;
      k = this.height;
      this.style.marginTop = k < a.a.thumbCellSize ? -k / 2 + "px" : "-" + a.a.thumbCellSize / 2 + "px";
      this.style.marginLeft = h < a.a.thumbCellSize ? -h / 2 + "px" : "-" + a.a.thumbCellSize / 2 + "px";
      this.style.visibility = ""
    };
    j.src = b;
    l.appendChild(j);
    "image" !== e && (b = a.f.make({B:{}}), l.appendChild(b));
    c = a.f.make({CITE:{innerHTML:c + " x " + d}});
    l.appendChild(c);
    i.appendChild(l);
    i.appendChild(a.f.make({SPAN:{className:a.a.k + "_pinButton"}}));
    "image" !== e ? (e = a.s.bd.getElementsByTagName("SPAN")[1]) ? e.parentNode.insertBefore(i, e) : a.s.bd.appendChild(i) : a.s.bd.appendChild(i)
  }, call:function(b, c) {
    var d = a.a.k + ".f.callback[" + a.f.callback.length + "]", e = a.d.createElement("SCRIPT");
    a.f.callback.push(function(b) {
      c(b);
      a.f.kill(d)
    });
    e.id = d;
    e.src = b + d;
    e.type = "text/javascript";
    e.charset = "utf-8";
    a.v.firstScript.parentNode.insertBefore(e, a.v.firstScript)
  }, ping:{check:function(b) {
    b && !1 === b.ok && a.f.close(a.a.msg.noPin)
  }, vimeo:function(b) {
    var c;
    b[0] && (b[0].thumbnail_large && "anywhere" === b[0].embed_privacy) && (c = "", b[0].title && (c += b[0].title), b[0].user_name && (c = c + ". Video by " + b[0].user_name), b[0].user_description && (c = c + ". " + b[0].user_description), a.f.thumb(b[0].thumbnail_large, 150, 200, "video", c + ".", b[0].url))
  }}, hazUrl:{vimeo:function() {
    var b = a.d.URL.split("/").pop(), c = a.d.getElementsByTagName("LI"), d = a.d.getElementsByTagName("A"), e, f, b = parseInt(b, 10);
    1 < b && !0 !== a.v.hazCalledForThumb["_" + b] && (a.f.call("http://vimeo.com/api/v2/video/" + b + ".json?callback=", a.f.ping.vimeo), a.v.hazCalledForThumb["_" + b] = !0);
    e = c.length;
    for(f = 0;f < e;f += 1) {
      c[f].id && c[f].id.split("clip_")[1] && (b = c[f].id.split("clip_")[1], b = parseInt(b, 10), 1 < b && !0 !== a.v.hazCalledForThumb["_" + b] && (a.v.hazCalledForThumb["_" + b] = !0, a.f.call("http://vimeo.com/api/v2/video/" + b + ".json?callback=", a.f.ping.vimeo)))
    }
    e = d.length;
    for(f = 0;f < e;f += 1) {
      d && d[f].href && (b = parseInt(d[f].href.split("/").pop(), 10), 1 < b && !0 !== a.v.hazCalledForThumb["_" + b] && (a.f.call("http://vimeo.com/api/v2/video/" + b + ".json?callback=", a.f.ping.vimeo), a.v.hazCalledForThumb["_" + b] = !0))
    }
  }, pinterest:function() {
    a.f.close(a.a.msg.installed)
  }, facebook:function() {
    a.f.close(a.a.msg.privateDomain.replace(/%privateDomain%/, "Facebook"))
  }, googleReader:function() {
    a.f.close(a.a.msg.privateDomain.replace(/%privateDomain%/, "Google Reader"))
  }, stumbleUpon:function() {
    for(var b = 0, c = a.a.stumbleFrame.length, d, b = 0;b < c;b += 1) {
      if(d = a.d.getElementById(a.a.stumbleFrame[b])) {
        a.f.close();
        a.w.confirm(a.a.msg.bustFrame) && (a.d.location = d.src, a.w.open(d.src));
        break
      }
    }
  }}, hazSite:{youtube:{iframe:function(b) {
    b = b.src.split("?")[0].split("&")[0].split("/");
    a.f.thumb("http://img.youtube.com/vi/" + b.pop() + "/0.jpg", 360, 480, "video")
  }, video:function(b) {
    b.getAttribute("data-youtube-id") && a.f.thumb("http://img.youtube.com/vi/" + b.getAttribute("data-youtube-id") + "/0.jpg", 360, 480, "video")
  }, embed:function(b) {
    var c = b.getAttribute("flashvars"), d = "";
    (d = c ? c.split("video_id=")[1].split("&")[0] : b.src.split("?")[0].split("&")[0].split("/").pop()) && a.f.thumb("http://img.youtube.com/vi/" + d + "/0.jpg", 360, 480, "video")
  }, object:function(b) {
    var b = b.getAttribute("data"), c = "";
    b && (c = b.split("?")[0].split("&")[0].split("/").pop());
    c && a.f.thumb("http://img.youtube.com/vi/" + c + "/0.jpg", 360, 480, "video")
  }}, vimeo:{iframe:function(b) {
    a.f.call("http://vimeo.com/api/v2/video/" + b.src.split("/").pop() + ".json?callback=", a.f.ping.vimeo)
  }}}, hazTag:{img:function(b) {
    var c;
    b.src.match(/^data/) || (c = new Image, c.src = b.src, c.height > a.a.minImgSize && c.width > a.a.minImgSize && a.f.thumb(c.src, c.height, c.width))
  }, meta:function(b) {
    b.name && "SOCIALPINBOARD" === b.name.toUpperCase() && b.content && "NOPIN" === b.content.toUpperCase() && a.f.close(a.a.msg.noPin)
  }}, checkTags:function() {
    var b, c, d, e, f, g, i, h, j;
    a.v.tag = [];
    b = 0;
    for(c = a.a.check.length;b < c;b += 1) {
      f = a.d.getElementsByTagName(a.a.check[b]);
      d = 0;
      for(e = f.length;d < e;d += 1) {
        g = f[d], !g.getAttribute("nopin") && "none" !== g.style.display && "hidden" !== g.style.visibility && a.v.tag.push(g)
      }
    }
    b = 0;
    for(c = a.v.tag.length;b < c;b += 1) {
      if(f = a.v.tag[b], g = f.tagName.toLowerCase(), a.f.hazTag[g]) {
        a.f.hazTag[g](f)
      }else {
        if(a.a.tag[g]) {
          for(i in a.a.tag[g]) {
            if(a.a.tag[g][i].hasOwnProperty && (h = a.a.tag[g][i], j = a.f.get(f, h.att))) {
              d = 0;
              for(e = h.match.length;d < e;d += 1) {
                j.match(h.match[d]) && a.f.hazSite[i][g](f)
              }
            }
          }
        }
      }
    }
  }, structure:function() {
    a.s.shim = a.f.make({IFRAME:{height:"100%", width:"100%", allowTransparency:!0, id:a.a.k + "_shim"}});
    a.s.shim.setAttribute("nopin", "nopin");
    a.d.b.appendChild(a.s.shim);
    a.s.bg = a.f.make({DIV:{id:a.a.k + "_bg"}});
    a.d.b.appendChild(a.s.bg);
    a.s.bd = a.f.make({DIV:{id:a.a.k + "_bd"}});
    a.s.x = a.f.make({A:{id:a.a.k + "_x", innerHTML:a.a.msg.cancelTitle}});
    a.s.bd.appendChild(a.s.x);
    a.s.bd.appendChild(a.f.make({SPAN:{id:a.a.k + "_logo"}}));
    a.d.b.appendChild(a.s.bd);
    a.w.scroll(0, 0)
  }, checkUrl:function() {
    for(var b in a.a.url) {
      if(a.a.url[b].hasOwnProperty && a.d.URL.match(a.a.url[b]) && (a.f.hazUrl[b](), !1 === a.v.hazGoodUrl)) {
        return!1
      }
    }
    return!0
  }, checkPage:function() {
    if(a.f.checkUrl()) {
      if(a.f.checkTags(), !1 === a.v.hazGoodUrl) {
        return!1
      }
    }else {
      return!1
    }
    return!0
  }, init:function() {
    for(var b = document.getElementsByTagName("script"), c = b.length - 1;0 <= c;--c) {
      var d = b[c].src;
      d.match(/socialmarklet.js/gi) && (d = d.replace("components/com_socialpinboard/javascript/socialmarklet.js", ""))
    }
    a.d.b = a.d.getElementsByTagName("BODY")[0];
    a.d.h = a.d.getElementsByTagName("HEAD")[0];
    if(a.d.b && a.d.h && !0 !== h.hazPinningNow) {
      b = a.n.userAgent;
      a.v = {saveScrollTop:a.w.pageYOffset, hazGoodUrl:!0, hazAtLeastOneGoodThumb:!1, hazSrc:{}, hazCalledForThumb:{}, hazIE:/msie/i.test(b) && !/opera/i.test(b), hazIOS:null !== b.match(/iP/), firstScript:a.d.getElementsByTagName("SCRIPT")[0], selectedText:a.f.getSelection()};
      d = d + "?url=" + encodeURIComponent(a.d.URL) + "&callback=";
      a.f.call(d, a.f.ping.check);
      a.f.structure();
      a.f.presentation();
      if(a.f.checkPage() && !0 === a.v.hazGoodUrl && (a.f.behavior(), !(1 < a.f.callback.length) && (!1 === a.v.hazAtLeastOneGoodThumb || 0 === a.v.tag.length))) {
        a.f.close(a.a.msg.notFound);
        return
      }
      h.hazPinningNow = !0
    }
  }}};
  a.f.init()
})(window, document, navigator, {k:"PIN_" + (new Date).getTime(), checkpoint:{url:"//apptha.com"}, pin:"/index.php?option=com_socialpinboard&view=pinitdisplay&tmpl=component", pinImage:"", minImgSize:80, thumbCellSize:200, check:"meta iframe embed object img video".split(" "), url:{vimeo:/^https?:\/\/.*?\.?vimeo\.com\//, facebook:/^https?:\/\/.*?\.?facebook\.com\//, googleReader:/^https?:\/\/.*?\.?google\.com\/reader\//, stumbleUpon:/^https?:\/\/.*?\.?stumbleupon\.com\//}, stumbleFrame:["tb-stumble-frame", 
"stumbleFrame"], tag:{video:{youtube:{att:"src", match:[/videoplayback/]}}, embed:{youtube:{att:"src", match:[/^http:\/\/s\.ytimg\.com\/yt/, /^http:\/\/.*?\.?youtube-nocookie\.com\/v/]}}, iframe:{youtube:{att:"src", match:[/^http:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9\-_]+)/]}, vimeo:{att:"src", match:[/^http?s:\/\/vimeo.com\/(\d+)/, /^http:\/\/player\.vimeo\.com\/video\/(\d+)/]}}, object:{youtube:{att:"data", match:[/^http:\/\/.*?\.?youtube-nocookie\.com\/v/]}}}, msg:{check:"", cancelTitle:"Cancel Pin", 
bustFrame:"We need to remove the StumbleUpon toolbar before you can pin anything. Click OK to do this or Cancel to stay here.", noPin:"This site doesn't allow pinning to Social Pinboard. Please contact the owner with any questions. Thanks for visiting!", privateDomain:"Sorry, can't pin directly from %privateDomain%.", notFound:"Sorry, couldn't find any large images or video on this page.", installed:"The bookmarklet is installed! Now you can click your Pin It button to pin images as you browse sites around the web."}, 
pop:"status=no,resizable=no,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=632,height=270,left=0,top=0", rules:[]});