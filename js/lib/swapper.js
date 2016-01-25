/**
 * @description This plugin is used to Swap Elements 
 * 
 * **/

	/**
	 * To use this plugin 
	 * add a class hoverable on the child Elements and 
	 * hoverableComponent class on the parent Container
	 * to use this call Tds.swapper.moveUp(element) on a click method of Swapping Element
	 * similarly call Tds.swapper.moveDown(element) to move down
	 * you can also pass (this) it will figure out the element and work on the element with hoverable class. 
	 * ***/

(function(global, document, undef) {


    var Tds = global.Tds = global.Tds||{};

	var Elem = Tds.TdsElement;

	var _moveDown = function(elem){
		elem = elem.target ? elem.target : elem;
		elem = Elem(elem).hasClass("hoverable") ? elem : elem.parentElement;
		parentElem = elem.parentElement;
		totalElem = parentElem.childElementCount - 1;
		elemIndex = _getChildElementdNumber(elem,parentElem);
		nextElem = elemIndex ===  totalElem? elem : elem.nextElementSibling;
		_removeClasses(elem,nextElem);
		Elem(elem).addClass("swapper");
		parentElem.insertBefore(nextElem,elem);
		_animate(elem);
	}

	var _animate = function(elem){
		setTimeout(function(){
			Elem(elem).addClass("swapper-active");
		}, 0);
	}

	var _removeClasses = function(elem,sibling){
		if(Elem(elem).hasClass("swapper-active")){
			Elem(elem).removeClass("swapper");
			Elem(elem).removeClass("swapper-active");
		}
		if(Elem(sibling).hasClass("swapper-active")){
			Elem(sibling).removeClass("swapper");
			Elem(sibling).removeClass("swapper-active");
		}
	}

	var _moveUp = function(elem){
		elem = elem.target ? elem.target : elem;
		elem = Elem(elem).hasClass("hoverable") ? elem : elem.parentElement;
		parentElem = elem.parentElement;
		elemIndex = _getChildElementdNumber(elem,parentElem);
		prevElem = elemIndex === 0 ? elem : elem.previousElementSibling;
		_removeClasses(elem,prevElem);
		Elem(elem).addClass("swapper");
		parentElem.insertBefore(elem,prevElem);
		_animate(elem);
	}

	var _getChildElementdNumber = function(element,parentElement) {
	  return Array.prototype.indexOf.call(parentElement.children, element);
	}
	
	
	Tds.swapper = {
		moveDown : _moveDown,
		moveUp : _moveUp
	}
    
}(window, document));