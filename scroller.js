(function(w){
	w.Scroller = function sb(opt){
		if(!opt)
			opt = {};
		if(!opt.id)
			opt.id = "scrollbar";	
		if(!opt.width)
			opt.width = 16;
		if(!opt.backgroundColor)
			opt.backgroundColor = "#ffff00";
		if(!opt.barColor)
			opt.barColor = "#000000";
		var status = false;
		var _c = document.getElementById(opt.id);
		if(!_c)
			throw new Error("no target can be found");
		_c.offsetParent.style.position = "relative";
		_c.style.overflow = "hidden";
		_c.style.height = 500 + "px";
		_c.style.margin = 0 + "px";
		_c.style.paddingRight = opt.width + "px";
		var clientTop =  _c.clientTop;
		var clientLeft = _c.clientLeft;
		var clientHeight = _c.clientHeight;
		var clientWidth = _c.clientWidth;
		var offsetHeight = _c.offsetHeight;
		var offsetWidth = _c.offsetWidth;
		var scrollHeight = _c.scrollHeight;
		var scrollVelocity = 3;
		var barHeight;
		var bar,background;
		(function init(){
			calBarHeight();
			createBackground();
			createScrollBar();
			var stId = setInterval(function(){
				var st = _c.scrollTop;
				if(st==_c.scrollHeight)
					clearInterval(stId);
				else
					_c.scrollTop = _c.scrollTop + 30;
			},1000);	

		})();
		function calBarHeight(){
			barHeight = (clientHeight * scrollVelocity) / (scrollHeight -  clientHeight);	
		}
		function createBackground(){
			background = document.createElement("div");
			background.style.border = 0 + "px";
			background.style.padding = 0 + "px";
			background.style.right = 0 + "px";
			background.style.top = 0 + "px";
			background.style.backgroundColor=opt.backgroundColor;
			background.style.width = opt.width + "px";
			background.style.float = "left";	
			background.style.position = "absolute";
			background.style.paddingTop = clientHeight + "px";
			_c.offsetParent.appendChild(background);	
		}
		function createScrollBar(){
			bar = document.createElement("div");
			bar.style.boder = 0 + "px";
			bar.style.backgroundColor=opt.barColor;
			bar.style.padding = 0 + "px";
			bar.style.float = "left";
			bar.style.right = 0 + "px";
			bar.style.top = 0 +"px";
			bar.style.width = opt.width + "px";
			bar.style.position = "absolute";
			bar.style.paddingTop = barHeight + "px";	
			_c.offsetParent.appendChild(bar);
		}
		function on(){
			status = true;	
		}
		function off(){
			status = false;	
		}
		function mousemove(){
			//bar.style.top = 0;	
		}
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
