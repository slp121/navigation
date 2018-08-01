﻿var searchResultNum=-1;var enterFlag="true";var serachTips=null;var settings;if(localStorage.getItem("settings")){settings=JSON.parse(localStorage.getItem("settings"))}else{settings={"searchHistory":"false","searchTips":"close"}}function getSearchData(data){var $inputText=$("#search-input");var $downList=$(".down-list");var tempHtml="";if(settings.searchTips=="baidu"){datas=data.s;if(datas.length>6){for(var i=0;i<6;i++){tempHtml+="<li>"+datas[i]+"</li>"}}else{for(var i=0;i<datas.length;i++){tempHtml+="<li>"+datas[i]+"</li>"}}}else{if(settings.searchTips=="haosou"){datas=data.result;if(datas.length>6){for(var i=0;i<6;i++){tempHtml+="<li>"+datas[i].word+"</li>"}}else{for(var i=0;i<datas.length;i++){tempHtml+="<li>"+datas[i].word+"</li>"}}}else{if(settings.searchTips=="bing"){datas=data.AS.Results[0].Suggests;if(datas.length>6){for(var i=0;i<6;i++){tempHtml+="<li>"+datas[i].Txt+"</li>"}}else{for(var i=0;i<datas.length;i++){tempHtml+="<li>"+datas[i].Txt+"</li>"}}}}}$downList.html(tempHtml).show()}(function(){var keyWords;var $inputText=$("#search-input");var $category=$("#search-category").find("span");var initArray;var isAjax=true;if(localStorage.getItem("history")){initArray=JSON.parse(localStorage.getItem("history"))}else{initArray=[]}var searchInfo=[{"tips":"网页搜索-输入关键词再点击下方按钮","websites":{name:[["百度","360搜索","谷歌搜索","谷歌翻译","百度学术","CNKI学术"],["互动百科","微信搜索","知乎搜索","高德地图"]],sites:[["https://www.baidu.com/s?wd=guanjian","https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=guanjian","http://www.google.com/search?q=guanjian","https://translate.google.cn/#en/zh-CN/guanjian","http://xueshu.baidu.com/s?wd=guanjian&rsv_bp=0&tn=SE_baiduxueshu_c1gjeupa&rsv_spt=3&ie=utf-8&f=8&rsv_sug2=1&sc_f_para=sc_tasktype%3D%7BfirstSimpleSearch%7D","http://scholar.cnki.net/result.aspx?q=guanjian&rt=&rl="],["http://so.baike.com/doc/guanjian&prd=button_doc_search","http://weixin.sogou.com/weixin?type=2&query=guanjian&ie=utf8&s_from=input&_sug_=y&_sug_type_=&w=01019900&sut=1615&sst0=1495896134539&lkt=1%2C1495896134435%2C1495896134435","http://zhihu.sogou.com/zhihu?query=guanjian&ie=utf8&w=&sut=8292&sst0=1495896299014&lkt=5%2C1495896290652%2C1495896298907","http://ditu.amap.com/search?query=guanjian&city=350400&geoobj=117.606289%7C26.237539%7C117.620945%7C26.243389"]]}},{"tips":"影视搜索-输入关键词再点击下方按钮","websites":{name:[["优酷","爱奇艺","影视搜索","neets","电影首发站","高清网"],["哔哩哔哩","音范丝","艾米网","大榴莲"]],sites:[["http://www.soku.com/search_video/q_guanjian","http://so.iqiyi.com/so/q_guanjian","http://ifkdy.com/?q=guanjian","http://neets.cc/search?key=guanjian","http://www.dysfz.cc/key/guanjian/","http://gaoqing.la/?s=guanjian"],["http://search.bilibili.com/all?keyword=guanjian","http://www.yinfans.com/?s=guanjian","http://www.i1080.cn/plus/search.php?kwtype=0&q=guanjian","http://www.llduang.com/?s=guanjian"]]}},{"tips":"网盘搜索-输入关键词再点击下方按钮","websites":{name:[["盘搜","胖次搜索","西林街","哔哩搜索","去转盘网"],["天天云搜","呆木瓜","网盘007"]],sites:[["http://pansou.com/?q=guanjian","https://www.panc.cc/s/guanjian","http://www.xilinjie.com/s?q=guanjian","http://www.biliworld.com/search/all/guanjian/","http://www.quzhuanpan.com/source/search.action?q=guanjian"],["http://so.ygyhg.com/s?keyword=guanjian","http://md5.daimugua.com/search.aspx?q=guanjian","http://wangpan007.com/share/kwguanjian"]]}},{"tips":"种子搜索-输入关键词再点击下方按钮","websites":{name:[["BTBOOK","磁力速搜","资源猫","BT蚂蚁","神秘地址"]],sites:[["http://www.btmeet.org/search/guanjian.html","http://www.cilisusou.com/word/guanjian.html","http://www.ziyuanmao.com/#/result/guanjian","http://www.btanb.com/search/guanjian-first-asc-1","http://www.shenmidizhi.com/list/guanjian-hot-desc-1"]]}},{"tips":"软件搜索-输入关键词再点击下方按钮","websites":{name:[["搜狗下载","zd423","吾爱破解","殁漂遥","PC6"],["下载吧","360软件","百度软件"],],sites:[["http://xiazai.sogou.com/search?uID=BB67ED8C1930980A00000000587865F0&euid=&w=&query=guanjian","http://www.zdfans.com/?s=guanjian","http://zhannei.baidu.com/cse/search?q=guanjian&click=1&s=14525262514411293706&isNeedCheckDomain=1&jump=1","http://zhannei.baidu.com/cse/search?s=9938906736064733429&entry=1&q=guanjian","http://s.pc6.com/cse/search?s=12026392560237532321&q=guanjian"],["http://zhannei.baidu.com/cse/search?s=9035802123405734980&q=guanjian","http://soft.so.com/search?q=guanjian","http://rj.baidu.com/search/index/?kw=guanjian"]]}},{"tips":"音乐搜索-输入关键词再点击下方按钮","websites":{name:[["网易云音乐","虾米音乐","qq音乐","百度音乐","酷我音乐"],["音悦台","好搜音乐","搜狗音乐"]],sites:[["http://music.163.com/#/search/m/?s=guanjian","http://www.xiami.com/search?key=guanjian","http://y.qq.com/portal/search.html#searchid=1&remoteplace=txt.yqq.top&t=song&w=guanjian","http://music.baidu.com/search?key=guanjian","http://sou.kuwo.cn/ws/NSearch?type=all&catalog=yueku2016&key=guanjian","http://ape8.cn/?s=guanjian"],["http://so.yinyuetai.com/?keyword=guanjian","http://s.music.so.com/s?q=guanjian","http://mp3.sogou.com/music.so?query=guanjian"]]}},{"tips":"图片搜索-输入关键词再点击下方按钮","websites":{name:[["百度图片","站酷","搜素材","好图网"],["360图片","图虫网","天堂图片"]],sites:[["https://image.baidu.com/search/index?tn=baiduimage&ipn=r&ct=201326592&cl=2&lm=-1&st=-1&fm=result&fr=&sf=1&fmq=1489665033684_R&pv=&ic=0&nc=1&z=&se=1&showtab=0&fb=0&width=&height=&face=0&istype=2&ie=utf-8&word=guanjian","http://sucai.zcool.com.cn/search.do?k=guanjian","http://so.ui001.com/index.php?keys=guanjian","http://www.haotu.net/search/guanjian"],["http://image.so.com/i?q=guanjian","https://tuchong.com/search/all/?query=guanjian","http://www.ivsky.com/search.php?q=guanjian"]]}},{"tips":"模板搜索-输入关键词再点击下方按钮","websites":{name:[["PPT模板","word文档","excel图表","百度文库","ppt之家"],["网页模板","第一PPT","站长素材"]],sites:[["http://www.officeplus.cn/search.shtml?key=guanjian&cat=ppt","http://www.officeplus.cn/search.shtml?key=guanjian&cat=word","http://www.officeplus.cn/search.shtml?key=guanjian&cat=excel","http://wenku.baidu.com/search?word=guanjian&org=0","http://search.52ppt.com/cse/search?q=guanjian&click=1&entry=1&s=15390838533793096671&nsid="],["http://so.cssmoban.com/cse/search?s=7097020869459475331&entry=1&q=guanjian","http://so.1ppt.com/cse/search?s=18142763795818420485&entry=1&ie=gbk&q=guanjian","http://aspx.sc.chinaz.com/query.aspx?keyword=guanjian&classID=12"]]}}];
function showSearchHistory(){var historyList=$(".history-list");$(document).on("click",function(){historyList.hide()});$("#input-container").on("click",function(event){if(localStorage.getItem("history")){getHistoryHtml();historyList.toggle();event.stopPropagation()}});historyList.on("click","li",function(event){var target=event.target;var $target=$(target);if($target.attr("class")=="search-words"){$inputText.val(target.innerHTML);$inputText.focus()}if(target.tagName=="li"||target.tagName=="LI"){$inputText.val(target.childNodes[0].innerHTML);$inputText.focus()}if($target.attr("class")=="search-link"){var searchLink=target.getAttribute("href");var searchWords=target.previousSibling.previousSibling.innerHTML;openWindow(searchWords,searchLink);return false}if($target.attr("class")=="close"){var arrayIndex=target.previousSibling.getAttribute("arrayindex");initArray.splice(arrayIndex,1);if(initArray.length==0){localStorage.removeItem("history");historyList.hide()}else{localStorage.setItem("history",JSON.stringify(initArray))}getHistoryHtml();return false}historyList.hide();event.stopPropagation()});$(document).on("keydown",function(event){historyList.hide()});historyList.on("click",".clear-container",function(event){clearHistory();event.stopPropagation()})}$("#settings").on("click",function(event){showSettingsDialog();var $settingsDialog=$("#settingsDialog");var searchToolsSelect=$("#search-tips");$settingsDialog.find(".ok-button").off("click").on("click",function(){if($("#checkbox-history")[0].checked){settings.searchHistory="true"}else{settings.searchHistory="false";clearHistory()}if(searchToolsSelect.val()=="baidu"){settings.searchTips="baidu"}else{if(searchToolsSelect.val()=="haosou"){settings.searchTips="haosou"}else{if(searchToolsSelect.val()=="bing"){settings.searchTips="bing"}else{if(searchToolsSelect.val()=="close"){settings.searchTips="close"}}}}localStorage.setItem("settings",JSON.stringify(settings));hideSettingsDialog()});$settingsDialog.find(".cancel-button").off("click").on("click",function(){hideSettingsDialog()});event.stopPropagation()});$category.on("click",function(){var curIndex=$(this).attr("index");var webTips=searchInfo[curIndex].tips;var storages=localStorage;$inputText.focus();storages.prevcategory=curIndex;$inputText.attr("placeholder",webTips);$(this).addClass("active").siblings().removeClass("active");createWebsitesHtml(curIndex);var webSites=$("#search-websites").find("span");var records="record"+curIndex;if(storages.getItem(records)){var obj=JSON.parse(storages.getItem(records))[1]}if(obj){var prevSpan=$("#search-websites").find('span[sites="'+obj+'"]');storages.prevwebsites=prevSpan.attr("sites");storages.prevwebname=prevSpan.attr("sitesname");prevSpan.addClass("active").siblings().removeClass("active")}else{var firstSites=webSites.eq(0).attr("sites");var firstSitesName=webSites.eq(0).attr("sitesname");var recordsFirst=[firstSitesName,firstSites];storages.setItem(records,JSON.stringify(recordsFirst));storages.prevwebsites=firstSites;storages.prevwebname=firstSitesName;webSites.eq(0).addClass("active").siblings().removeClass("active")}});if(localStorage.prevcategory){$category.eq(localStorage.prevcategory).trigger("click")}else{$category.eq(0).trigger("click")}function createWebsitesHtml(curIndex){var nameArray=searchInfo[curIndex].websites.name;var sitesArray=searchInfo[curIndex].websites.sites;var nameArrayLength=nameArray.length;var tmpHtml="";var storages=localStorage;for(var i=0;i<nameArrayLength;i++){for(var j=0;j<nameArray[i].length;j++){tmpHtml+="<span sitesName = "+nameArray[i][j]+" sites="+sitesArray[i][j]+">"+nameArray[i][j]+"</span>"}tmpHtml+="</br>"}document.getElementById("search-websites").innerHTML=tmpHtml;var webSites=$("#search-websites").find("span");webSites.off("click").on("click",function(){var sitesInfo=$(this).attr("sites");var sitesNameInfo=$(this).attr("sitesName");var recordsInfo=[sitesNameInfo,sitesInfo];var records="record"+curIndex;$(this).addClass("active").siblings().removeClass("active");keyWords=$inputText.val();storages.setItem(records,JSON.stringify(recordsInfo));storages.prevwebsites=sitesInfo;storages.prevwebname=sitesNameInfo;if(keyWords==""){$inputText.focus();$inputText.attr("placeholder","请输入搜索内容")}else{if(settings.searchHistory=="true"){saveSearchWords(keyWords,sitesNameInfo,sitesInfo)}openWindow(keyWords,sitesInfo)}});if(!localStorage.getItem("recordState")){webSites.eq(0).trigger("click");localStorage.setItem("recordState","start")}}function encode(str){str=str.replace(/[^u0000-u00FF]/g,function($0){return escape($0).replace(/(%u)(w{4})/gi,"&#x$2;")});return str}function openWindow(keyWords,sitesInfo){var sitesInfos=sitesInfo;var curkeyWords=keyWords;var reg=/BIANMA/g;if(reg.test(sitesInfos)){curkeyWords=encode(keyWords);sitesInfos=sitesInfos.replace("BIANMA","");sitesInfos=sitesInfos.replace("guanjian",curkeyWords);window.open(sitesInfos)}else{sitesInfos=sitesInfos.replace("guanjian",curkeyWords);window.open(sitesInfos)}}function enterSearch(){$(document).on("keydown",function(event){var keywords=$inputText.val();
var storages=localStorage;if(enterFlag=="true"){if(event.keyCode=="13"){if(keywords==""){$inputText.attr("placeholder","请输入搜索内容")}else{openWindow(keywords,storages.prevwebsites);if($(".down-list").find("li")){$(".down-list").find("li").hide()}if(settings.searchHistory=="true"){saveSearchWords(keywords,storages.prevwebname,storages.prevwebsites)}}}}})}function saveSearchWords(keywords,sitesNameInfo,sitesInfo){var objects=createObject(keywords,sitesNameInfo,sitesInfo);if(checkRepeatWords(keywords)){delectRepeatWords(keywords)}else{if(initArray.length==6){initArray.splice(4,1);initArray.unshift(objects)}else{initArray.unshift(objects)}}localStorage.history=JSON.stringify(initArray);getHistoryHtml();function createObject(keywords,sitesNameInfo,sitesInfo){return{"keywords":keywords,"sitename":sitesNameInfo,"website":sitesInfo}}function checkRepeatWords(keyword){for(var i=0;i<initArray.length;i++){if(keyword==initArray[i]["keywords"]){return true}}}function delectRepeatWords(keyword){for(var i=0;i<initArray.length;i++){if(keyword==initArray[i]["keywords"]){initArray.splice(i,1);initArray.unshift(objects)}}}}function keyUpEvent(){var $inputText=$("#search-input");var $downList=$(".down-list");$inputText.on("keyup",function(event){var keyCode=event.keyCode;var searchWords=$inputText.val();var $resultLi=$(".down-list").find("li");if(searchWords!=""){if(keyCode>=65&&keyCode<=90||keyCode>=48&&keyCode<=57||keyCode>=96&&keyCode<=111||keyCode>=186&&keyCode<=222||keyCode==8||keyCode==46||keyCode==32){if(settings.searchTips!="close"){ajaxData();searchResultNum=-1}}else{if(keyCode==40){searchResultNum=searchResultNum+1;if(searchResultNum>$resultLi.length-1){searchResultNum=0}if($resultLi.length>0){renderLiStyle(searchResultNum)}enterFlag="false"}else{if(keyCode==38){searchResultNum=searchResultNum-1;if(searchResultNum<=-1){searchResultNum=$resultLi.length-1}if($resultLi.length>0){renderLiStyle(searchResultNum)}enterFlag="false"}else{if(keyCode==13){$downList.hide();enterFlag="true";event.stopPropagation()}}}}}else{$downList.hide()}});$downList.on("click","li",function(event){var target=event.target;$inputText.val(target.innerHTML).focus();$downList.hide();event.stopPropagation()});$(document).on("click",function(){$downList.hide()});function renderLiStyle(searchResultNum){var $curLi=$(".down-list").find("li").eq(searchResultNum);$curLi.addClass("active").siblings("li").removeClass("active");$inputText.val($curLi.html())}}showSearchHistory();enterSearch();keyUpEvent()})();jQuery(document).ready(function($){if($("meta[name=toTop]").attr("content")=="true"){$("<div id='toTop'><img src='images/top.png'></div>").appendTo("body");$("#toTop").css({width:"50px",height:"50px",bottom:"50px",right:"10px",position:"fixed",cursor:"pointer",zIndex:"999999",});if($(this).scrollTop()==0){$("#toTop").hide()}$(window).scroll(function(event){if($(this).scrollTop()==0){$("#toTop").hide()}if($(this).scrollTop()!=0){$("#toTop").show()}});$("#toTop").click(function(event){$("html,body").animate({scrollTop:"0px"},666)})}});
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?282c96d5ec4e3965393ba0b6104c4d25";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();