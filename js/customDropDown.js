

var dropdowns = document.querySelectorAll(".dropDownName");
var dropdown = document.querySelectorAll(".dropDownCheckbox");


var handleToggle = function(elem,next){
	if(next.classList.contains("none")){
		//addCloseHandler();
		next.classList.remove("none");
		elem.classList.add("border-no-bottom");
	}else {
		next.classList.add("none");
		elem.classList.remove("border-no-bottom");
	}
};

var handleDropDownClick = function(e){
	elem = e.target;
	next = elem.nextElementSibling;
	handleToggle(elem,next);
}

var handleCheckBoxClick = function(e){
	elem = e.target;
	console.log(elem.checked);
	console.log(elem.value);
	//handleToggle(elem,next);
};

Array.prototype.map.call(dropdowns, (function(d,i){
	d.addEventListener("click", handleDropDownClick);
	return true;
}));


Array.prototype.map.call(dropdown, (function(d,i){
	d.addEventListener("click", handleCheckBoxClick);
	return true;
}));