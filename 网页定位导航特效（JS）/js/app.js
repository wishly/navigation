window.onload = function(){
	var oDiv = document.getElementById("content");
	var iDiv = oDiv.getElementsByTagName("div");
	var menu = document.getElementById("menu");
	var menuList = menu.getElementsByTagName("a");
	var menuLink;
	var menuListLen = menuList.length;
	var itemLen = iDiv.length;
	window.onscroll = function(){
		var top = 0;
		var itemTop = 0;
		var currentId = "";
//		var top = document.documentElement.scrollTop;
		if(document.documentElement && document.documentElement.scrollTop){
			top = document.documentElement.scrollTop;
		} else if(document.body){
			top = document.body.scrollTop;
		}
		for(var i = 0; i < itemLen; i++){
			itemTop = iDiv[i].offsetTop;
			if(top > itemTop - 200){
				currentId = "#" + iDiv[i].getAttribute("id");
			}
		}
		for(var i = 0; i < menuListLen; i++){
			menuLink = menuList[i].getAttribute("href");
			menuList[i].className = "";
			if(currentId && menuLink != currentId){
				menuList[i].className = "";
			} else {
				menuList[i].className = "current";
			}
		}
	}
}
