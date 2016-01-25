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
		elem = _findParent(elem);

		if(!_movable(elem)){
			return elem;
		}

		parentElem = elem.parentElement;
		totalElem = parentElem.childElementCount - 1;
		elemIndex = Elem(elem).childNumber(parentElem);

		/* The Conditional Function here will make sure last Element should not be movable */
		nextElem = elemIndex ===  totalElem? elem : elem.nextElementSibling;
		_removeClasses(elem,nextElem);
		Elem(elem).addClass("swapper");
		parentElem.insertBefore(nextElem,elem);
		_animate(elem);
	}


	var _moveUp = function(elem){
		elem = elem.target ? elem.target : elem;
		elem = _findParent(elem);

		/* This check is used to enable or diable moving of the component if data-movable = false no animations would occur */
		if(!_movable(elem)){
			return elem;
		}

		parentElem = elem.parentElement;
		elemIndex = Elem(elem).childNumber(parentElem);

		/* The Conditional Function here will make sure first Element should not be movable */
		prevElem = elemIndex === 0 ? elem : elem.previousElementSibling;
		_removeClasses(elem,prevElem);
		Elem(elem).addClass("swapper");
		parentElem.insertBefore(elem,prevElem);
		_animate(elem);
	}


	/*
	 * This function is used to recursively find out the parent Element which contains hoverable Class
	 */
	var _findParent = function(elem){
		if (Elem(elem).hasClass("hoverable")){
			return elem;
		}else {
			return _findParent(elem.parentElement);
		}
	}

	/* This Function checks if their is attribute assigned to the element data-movable 
	 * If the Element is not assigned it goes ahead with the animations
	 * Else it just returns
	 */
	var _movable = function(elem){
		if(Elem(elem).hasAttr("data-movable")){
			return Elem(elem).attr("data-movable") === "true";	
		}else {
			return true;
		}
		
	}

	/* This function is used to set Element animation */
	var _animate = function(elem){
		setTimeout(function(){
			Elem(elem).addClass("swapper-active");
		}, 0);
	}

	/* This function resets the Elements Css */
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
	
	
	Tds.swapper = {
		moveDown : _moveDown,
		moveUp : _moveUp
	}
    
}(window, document));