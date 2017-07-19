$(document).ready(function(){
	//监听滚动条滚动事件
	var $menu = $("#menu");
	var $items = $("#content").find(".item");
	$(window).scroll(function(){
		var top = $(document).scrollTop();
//		console.log(top);
		var currentId = ""; //当前所在楼层
		$items.each(function(index, value) {
			var $_this = $(this);
			var itemsTop = $_this.offset().top;
			if(top > itemsTop - 200) {
				currentId = "#" + $_this.attr("id");
				
			} else {
				return false;
			}
		});
		var currentLink = $menu.find("[href='"+ currentId + "']");
		if(currentId && currentLink != currentId) {
			$menu.find(".current").removeClass("current");
			currentLink.addClass("current");
		}
	});
});

