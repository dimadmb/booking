/* JCE Editor - 2.5.16 | 08 April 2016 | http://www.joomlacontenteditor.net | Copyright (C) 2006 - 2016 Ryan Demmer. All rights reserved | GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html */
(function($){$.jce.Cpanel={options:{labels:{feed:'Feed',updates:'Updates',updates_available:'Updates Available'},feed:true,updates:true},init:function(options){$.extend(this.options,options||{});var o=this.options;if(o.feed){$('ul.newsfeed').addClass('loading').html('<li>'+o.labels.feed+'</li>');$.getJSON("index.php?option=com_jce&view=cpanel&task=feed",{},function(r){$('ul.newsfeed').removeClass('loading').empty();$.each(r.feeds,function(k,n){$('ul.newsfeed').append('<li><a href="'+n.link+'" target="_blank" title="'+n.title+'">'+n.title+'</a></li>');});});}
if(o.updates){$.getJSON("index.php?option=com_jce&view=updates&task=update&step=check",{},function(r){if(r){if($.type(r)=='string'){r=$.parseJSON(r);}
if(r.error){var $list=$('div#jce ul.adminformlist').append('<li><span>'+o.labels.updates+'</span><span class="label label-important"><i class="icon-exclamation-sign icon-white"></i>&nbsp;'+r.error+'</span></li>');return false;}
if(r.length){var $list=$('div#jce ul.adminformlist').append('<li><span>'+o.labels.updates+'</span><span class="label label-info"><i class="icon-info-sign icon-white"></i>&nbsp;<a title="'+o.labels.updates+'" class="updates" href="#">'+o.labels.updates_available+'</a></span></li>');$('a.updates',$list).click(function(e){$('#toolbar-updates button').click();$('#toolbar-updates a.updates').each(function(){$.jce.createDialog(this,{src:$(this).attr('href'),options:{'width':780,'height':560}});e.preventDefault();});});}}});}
$('#newsfeed_enable').click(function(e){$('#toolbar-options button').click();$('#toolbar-popup-options a.modal, #toolbar-config a.preferences').each(function(){$.jce.createDialog(this,{src:$(this).attr('href'),options:{'width':780,'height':560}});});e.preventDefault();});}};$(document).ready(function(){$.jce.Cpanel.init();});})(jQuery);