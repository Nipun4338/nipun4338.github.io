function autoType(e,o){var r=$(e);r.css({position:"relative",display:"inline-block"}),r.prepend('<div class="cursor" style="right: initial; left:0;"></div>'),r=r.find(".text-js");var i=r.text().trim().split(""),t=i.length,n="";r.text(""),setTimeout(function(){r.css("opacity",1),r.prev().removeAttr("style"),r.text("");for(var e=0;e<t;e++)!function(e,i){setTimeout(function(){n+=i,r.text(n)},e*o)}(e+1,i[e])},1500)}function typewriter(){sContents=" ",iRow=Math.max(0,iIndex-iScrollAt);for(var e=document.getElementById("typedtext");iRow<iIndex;)sContents+=aText[iRow++]+"<br />";e.innerHTML=sContents+aText[iIndex].substring(0,iTextPos)+"|",iTextPos++==iArrLength?(iTextPos=0,++iIndex!=aText.length&&(iArrLength=aText[iIndex].length,setTimeout("typewriter()",100))):setTimeout("typewriter()",iSpeed)}var video_wrapper1=$(".youtube-video-place1"),video_wrapper2=$(".youtube-video-place2"),video_wrapper3=$(".youtube-video-place3"),video_wrapper4=$(".youtube-video-place4"),video_wrapper5=$(".youtube-video-place5"),video_wrapper6=$(".youtube-video-place6"),video_wrapper7=$(".youtube-video-place7"),video_wrapper8=$(".youtube-video-place8");video_wrapper8.length&&$(".play-youtube-video8").on("click",function(){video_wrapper8.html('<iframe allowfullscreen frameborder="0" class="embed-responsive-item" src="'+video_wrapper8.data("yt-url")+'"></iframe>')}),video_wrapper7.length&&$(".play-youtube-video7").on("click",function(){video_wrapper7.html('<iframe allowfullscreen frameborder="0" class="embed-responsive-item" src="'+video_wrapper7.data("yt-url")+'"></iframe>')}),video_wrapper1.length&&$(".play-youtube-video1").on("click",function(){video_wrapper1.html('<iframe allowfullscreen frameborder="0" class="embed-responsive-item" src="'+video_wrapper1.data("yt-url")+'"></iframe>')}),video_wrapper2.length&&$(".play-youtube-video2").on("click",function(){video_wrapper2.html('<iframe allowfullscreen frameborder="0" class="embed-responsive-item" src="'+video_wrapper2.data("yt-url")+'"></iframe>')}),video_wrapper3.length&&$(".play-youtube-video3").on("click",function(){video_wrapper3.html('<iframe allowfullscreen frameborder="0" class="embed-responsive-item" src="'+video_wrapper3.data("yt-url")+'"></iframe>')}),video_wrapper4.length&&$(".play-youtube-video4").on("click",function(){video_wrapper4.html('<iframe allowfullscreen frameborder="0" class="embed-responsive-item" src="'+video_wrapper4.data("yt-url")+'"></iframe>')}),video_wrapper5.length&&$(".play-youtube-video5").on("click",function(){video_wrapper5.html('<iframe allowfullscreen frameborder="0" class="embed-responsive-item" src="'+video_wrapper5.data("yt-url")+'"></iframe>')}),video_wrapper6.length&&$(".play-youtube-video6").on("click",function(){video_wrapper6.html('<iframe allowfullscreen frameborder="0" class="embed-responsive-item" src="'+video_wrapper6.data("yt-url")+'"></iframe>')}),$(document).ready(function(){function e(){document.body.scrollTop>20||document.documentElement.scrollTop>20?a.style.display="block":a.style.display="none"}function o(){document.body.scrollTop=0,document.documentElement.scrollTop=0}function r(){$(window).scrollTop()>=c?s.addClass("menu-fixed").css("background-color","rgba(255,254,253,0.97)"):s.removeClass("menu-fixed").css("background-color","transparent")}function i(){p.removeClass("glyphicon-menu-hamburger").addClass("glyphicon-remove active"),m.css("z-index",900),l.append(m),s.hasClass("menu-fixed")||s.css("background-color","rgba(255,254,253,0.97)"),m.on("click",function(){$(".navbar-toggle").click(),t()})}function t(){p.removeClass("glyphicon-remove active").addClass("glyphicon-menu-hamburger"),m.css("z-index",1025).remove(),s.hasClass("menu-fixed")||s.css("background-color","transparent")}function n(){$(this).css("display","block");var e=$(this).find(".modal-dialog"),o=($(window).height()-e.height())/2,r=parseInt(e.css("margin-bottom"),10);o<r&&(o=r),e.css("margin-top",o)}var a=document.getElementById("btn-back-to-top");window.onscroll=function(){e()},a.addEventListener("click",o);var l=$("body"),s=$(".navbar-default"),c=s.offset().top+10,d=$("button.navbar-toggle"),p=$(".navbar-toggle .glyphicon"),u=$(".navbar-collapse.collapse li"),m=$('<div class="modal-backdrop fade in"></div>'),v=$(".scroll"),f=$(".social");document.onscroll=r,d.on("click",function(){p.hasClass("glyphicon-menu-hamburger")?(i(),u.on("click",function(){$(".navbar-toggle").click(),t()})):t()}),$(window).resize(t()),v.on("click",function(e){e.preventDefault();var o=$(this).attr("href");$("html, body").animate({scrollTop:$(o).offset().top-59},900)}),f.on({"focus mouseenter":function(){var e=$(this).children(),o=e.attr("src").slice(0,-18)+"color.png?raw=true";e.attr("src",o)},"blur mouseleave":function(){var e=$(this).children(),o=e.attr("src").slice(0,-18)+"black.png?raw=true";e.attr("src",o)}}),$(document).on("show.bs.modal",".modal",n),$(window).on("resize",function(){$(".modal:visible").each(n)})}),$(document).ready(function(){autoType(".type-js",200)});var aText=new Array("I'm a student studying Computer Science And Engineering at Ahsanullah University Of Science And Technology.","Born in Netrokona, a district under the division Mymensingh of Bangladesh.","Now I am living in Dhaka for persuing my BSc.","","A self-motivated former competitive programmer, Android and Web Developer, Data Science and Machine Learning enthusiastic. Interested in real-life problem solving with immense perseverance."),iSpeed=50,iIndex=0,iArrLength=aText[1].length,iScrollAt=20,iTextPos=0,sContents="",iRow;typewriter(),$(document).ready(function(){$(".image-popup-vertical-fit").magnificPopup({type:"image",mainClass:"mfp-with-zoom",gallery:{enabled:!0},zoom:{enabled:!0,duration:300,easing:"ease-in-out",opener:function(e){return e.is("img")?e:e.find("img")}}})});