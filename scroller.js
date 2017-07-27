(function(w){
	w.ScrollerBar = function sb(opt){
		if(!opt.id)
			opt.id = "scrollbar";	
		if(!opt.width)
			opt.width = 16;
		if(!opt.backgroundColor)
			opt.backgroundColor = "#ffffff";
		if(!opt.barColor)
			opt.backgroundColor = "#000000";
		var _status = false;
		var _c = getElementById(opt.id);
		if(!_c)
			throw new Error("no target can be found");
		var clientTop =  _c.clientTop;
		var clientLeft = _c.clientLeft;
		var client height = _c.clientHeight;
		var clientWidth = _c.clientWidth;
		var offsetHeight = _c.offsetHeight;
		var offsetWidth = _c.offsetWidth;
		var scrollHeigth = _c.scrollHeight;
		function createBackground(color){}
		function createScrollBar(color){}
		function on(){}
		function off(){}
		function mousemove(){}
		function mousedown(){}
		function mouseup(){}
		function trigger(){};
		function addEventHandler(eventName,handler){
			elem.addEVentListener(eventName,handler);	
		}
		function scroll(val){
			_c.scrollTop = val;	
		}

	}

})(window)
