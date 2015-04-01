window.log=function(){log.history=log.history||[],log.history.push(arguments),console&&console.log&&"dev"==asm.options.env&&console.log(Array.prototype.slice.call(arguments))},function(o,n){window.asm=window.asm||{},asm.translations=asm.translations||{key:"value"},asm.options=asm.options||{locale:"de_DE",env:"prod"},o.extend(asm.options,{test:!1}),asm.buildOnLoad={init:function(){},testFunction:function(){}},asm.fire={message:function(o,n,e){asm.utility.consoleEnabled()&&(n=n?n:"",""!=e&&(e="color: "+e+";"),"string"!=typeof o?console.log("%c data: ",e+"font-family:Arial, Mono; font-size:13px;",o):console.log("%c "+o,e+"font-family: Arial, Mono; font-size:13px;",n))}},asm.log=function(o,n){o=2===arguments.length?o+": ":o,asm.fire.message(o,n,"")},asm.debug=function(o,n){asm.fire.message(o,n,"green")},asm.info=function(o,n){asm.fire.message(o,n,"#00F")},asm.warn=function(o,n){asm.fire.message(o,n,"#FFA500")},asm.error=function(o,n){asm.fire.message(o,n,"Orangered")},asm.start=function(o,n){asm.fire.message(o,n,"#0F0")},asm.end=function(o,n){asm.fire.message(o,n,"#F00")},asm.group=function(o){asm.utility.consoleEnabled()&&console.group(o)},asm.groupEnd=function(){asm.utility.consoleEnabled()&&console.groupEnd()},asm.profile=function(o){asm.utility.consoleEnabled()&&(o?console.profile(o):console.profile())},asm.profileEnd=function(o){asm.utility.consoleEnabled()&&console.profileEnd(o?"End Profile: "+o:"End Profile")},asm.utility={documentReady:function(n){o(document).ready(function(){})},isDev:function(){return"dev"==asm.options.env},consoleEnabled:function(){return asm.utility.isDev()&&window.console},getBaseUrl:function(n){var e=o.extend({forceHttps:!1},n);try{var t=location.protocol;return 1==e.forceHttps&&(t="https:"),t+"//"+location.hostname}catch(s){asm.errorHandler.logError(s)}}},asm.errorHandler={catchError:function(o){return function(){try{return o.apply(this,arguments)}catch(n){asm.errorHandler.logError(n)}}},logError:function(o){console.log("error: "+o)}},asm.modal={defaultOptions:{url:"",method:"GET",success:function(){},onLoad:function(){},onClose:function(){},modal:!0,selfClose:!1,width:680,height:"auto",resizable:!1,modalClass:null,closeText:"",closeOnEscape:!0,data:null,showClose:!0},leaveOutTimerId:0,init:function(n){n&&"object"==typeof n&&(asm.modal.options=o.extend({},asm.modal.defaultOptions,n)),this._openModal()},close:function(){o(this).dialog("destroy")},_openModal:function(){function e(e){var i=o("#asm-dialog").dialog({modal:t.options.modal,autoOpen:t.options.autoOpen,width:t.options.width,height:t.options.height,resizable:t.options.resizable,closeText:t.options.closeText,closeOnEscape:t.options.closeOnEscape,show:{effect:"fadeIn",duration:800},close:function(){o(this).dialog("destroy"),o("#asm-dialog").children(".content").empty(),t.options&&"function"==typeof t.options.onClose&&t.options.onClose(self)}});s.empty(),s.append(e),i.dialog("open"),asm.log("created dialog"),o(".ui-widget-overlay.ui-front").on("click",function(){i.dialog("destroy"),o("#asm-dialog").children(".content").empty(),t.options&&"function"==typeof t.options.onClose&&t.options.onClose(self)}),t.options.success!==n&&t.options.success(e),t.options&&"function"==typeof t.options.onLoad&&t.options.onLoad(self)}var t=this,s=o("#asm-dialog").children(".content");"undefined"!=typeof t.options.url&&""!=t.options.url?o.ajax({url:t.options.url,type:t.options.method}).done(function(o){e(o)}):e(t.options.data)}}}(jQuery),asm.buildOnLoad.init();
!function(a){a.fn.ajaxForm=function(e){var t=a.extend({action:"",method:"",replaceWithData:!0,animateLoad:!0,onFinish:null},e);try{return this.submit(function(e){e.preventDefault();var o=a(this);""==t.action&&(t.action=o.attr("action")),""==t.method&&(t.method=o.attr("method")),1==t.animateLoad&&o.ajaxAnimateLoad(),a.ajax({type:t.method,url:t.action,data:o.serialize(),success:function(a,e){asm.log("form::response",e),1==t.replaceWithData&&o.replaceWith(a),"function"==typeof t.onFinish&&t.onFinish(self)},error:function(a,e,n){asm.log("form::response",n),o.replaceWith(a),o.ajaxForm(t)}})}),!1}catch(o){asm.log(o)}}}(jQuery),function(a){a.fn.ajaxAnimateLoad=function(e){var t=a.extend({loaderImage:"/img/ajax-loader.gif",loaderWidth:"32px",loaderHeight:"32px",fadeDuration:200,action:"start",backgroundDisabled:!1},e);return this.each(function(){var e=a(this),o='<span id="ajaxloader" style="display: block; width: '+t.loaderWidth+"; height: "+t.loaderHeight+"; background: transparent url("+t.loaderImage+') no-repeat center center; position: absolute; top: 50%; left: 50%;">&nbsp;</span>',n='<div class="modalBackgroundOverlay" style="position: fixed; width:100%; height: 100%; top: 0px; left: 0px; zoom: 1; opacity: 0.0; background-color: #FFF; z-index: 201;">&nbsp;</div>';"start"==t.action?1==t.backgroundDisabled?(0==e.children(".modalBackgroundOverlay").length&&(e.append(n),jQuery(".modalBackgroundOverlay").animate({opacity:.4},t.fadeDuration)),0==e.children("#ajaxloader").length&&e.append(o)):e.attr("style","position: relative;").append(o).animate({opacity:.4},t.fadeDuration):"stop"==t.action&&(e.children(".modalBackgroundOverlay").length>0?(e.children("#ajaxloader").remove(),e.children(".modalBackgroundOverlay").animate({opacity:0},t.fadeDuration).remove()):e.attr("style","position: static;").remove("#ajaxloader").animate({opacity:1},t.fadeDuration))})}}(jQuery),function(a){a.fn.ajaxLoadElm=function(e){var t=a.extend({source:"",method:"GET",data:null,animateLoad:!0,backgroundDisabled:!1,onSuccess:function(){}},e),o=a(this);try{if(1==t.animateLoad&&o.ajaxAnimateLoad({backgroundDisabled:t.backgroundDisabled}),null!==t.data)var n=t.data.serialize();return a.ajax({type:t.method,source:t.action,data:n,success:function(a,e){asm.log("ajaxLoadElm::success",e),o.replaceWith(a),"function"==typeof t.onSuccess&&t.onSuccess(self)},error:function(a,e,t){asm.log("form::response",t),o.replaceWith(a)}}),!1}catch(i){asm.log("exception",i)}}}(jQuery);
!function(t){window.asm.list=window.asm.list||{},asm.list={baseUrl:asm.utility.getBaseUrl(),init:function(){asm.debug("asm.list init"),t(".asm-edit-btn").length>0&&asm.list.initEditButtons(),t(".asm-delete-btn").length>0&&asm.list.initDeleteButtons(),t(".asm-add-btn").length>0&&asm.list.initAddButton()},initEditButtons:function(){t(".asm-edit-btn").click(function(){var i=t(this).data("key"),a=t(this).data("locale"),s=t(this).data("domain"),n=t(this).data("link");n=encodeURI(n+"/"+i+"/"+a+"/"+s),asm.debug("formUrl",n),asm.modal.init({url:n,onClose:function(){asm.list.reloadList()},success:function(){t("#asm-translation-form").ajaxForm()}})})},initAddButton:function(){t(".asm-add-btn").click(function(){var i=t(this).data("link");asm.debug("formUrl",i),asm.modal.init({url:i,width:500,resizable:!0,onClose:function(){asm.list.reloadList()},success:function(){t("#asm-translation-form").ajaxForm()}})})},initDeleteButtons:function(){t(".asm-delete-btn").click(function(){var i=confirm(asm.translations.confirm_delete);if(1==i){var a={key:t(this).data("key"),locale:t(this).data("locale"),domain:t(this).data("domain")};t.ajax({type:"POST",url:t(this).data("link"),data:a,success:function(t,i){asm.log("delete::response",i),asm.list.reloadList()},error:function(t,i,a){asm.log("delete::response",a)}})}})},reloadList:function(){asm.debug("fired reload"),t("#asm-translations-tbl").ajaxLoadElm({source:t("#asm-translation-list").data("link"),type:"POST",onSuccess:function(){asm.list.initEditButtons(),asm.list.initDeleteButtons()}})}}}(jQuery),asm.utility.documentReady(asm.list.init());
//# sourceMappingURL=core.js.map