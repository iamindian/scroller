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
		document.body.style.overflow = "hidden";
		var clientTop =  _c.clientTop;
		var clientLeft = _c.clientLeft;
		var clientHeight = _c.clientHeight;
		var clientWidth = _c.clientWidth;
		var offsetTop = _c.offsetTop;
		var scrollTop = _c.scrollTop;
		var offsetHeight = _c.offsetHeight;
		var offsetWidth = _c.offsetWidth;
		var scrollHeight = _c.scrollHeight;
		var scrollVelocity = 10;
		var maxY,minY;
		var barHeight;
		var bar,background,display;
		var offsetParent = _c.offsetParent;
		if(scrollHeight > clientHeight){
			init();
		}
		function init(){
			createPlace();
			calBarHeight();
			calMinY();
			calMaxY();
			createBackground();
			createScrollBar();
			initInteract();
		};
		function calMinY(){
			minY = offsetTop + clientTop;	
		}
		function calMaxY(){
			maxY = offsetTop + clientTop + (clientHeight - barHeight); 
		}
		function calBarHeight(){
			barHeight = clientHeight-(scrollHeight-clientHeight)/scrollVelocity;	
		}
		function calMaxScrollTop(){
			return scrollHeight-clientHeight-barHeight; 	
		}
		function calMinScrollTop(){
			return offsetTop + clientTop	
		}
		function createPlace(){
			_c.style.paddingRight = opt.width + "px";
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
			offsetParent.appendChild(background);	
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
			offsetParent.appendChild(bar);
		}
		function on(){
			status = true;	
		}
		function off(){
			status = false;	
		}
		function scroll(e){
			scrollBar(e);
			e.preventDefault();
			e.stopPropagation();
			return false;	
		}
		function initInteract(){
			addEventHandler("wheel",scroll);
		}
		function addEventHandler(eventName,handler){
			offsetParent.addEventListener(eventName,(function(){
				return handler;		
			})(),false);	
		}
		function scrollBar(e){
			var current =  bar.offsetTop + e.deltaY;
			console.log(current);
			if(current>maxY){
				bar.style.top = maxY + "px";
			}else if(current<minY){
				bar.style.top = minY + "px";
			}else{
				bar.style.top = current + "px";
			}
		}
		function scrollContent(e){
			var current = _c.scrollTop + e.daltaY * scrollVolicity;
				
		}

		

		

	}

})(window)
