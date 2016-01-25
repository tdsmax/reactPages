(function(global, document, undef) {

    var strundef = typeof(undef),
        strstring = typeof("");

    var Tds = global.Tds = global.Tds||{};

    // Element factory
    Tds.TdsElement = function(elem) {
        var ElemObj = {
            hasClass: function(className) {
                if (elem && typeof(className) === strstring) {
                    var classAttr = elem.getAttribute("class");
                    var classes = (classAttr) ? classAttr.split(" ") : [];
                    return (classes.indexOf(className) > -1);
                }
                return false;
            },
            addClass: function(className) {
                if (elem && typeof(className) === strstring && !this.hasClass(className)) {
                    var classAttr = elem.getAttribute("class");
                    var classes = (classAttr) ? classAttr.split(" ") : [];
                    classes.push(className);
                    this.attr("class", classes.join(" "));
                }
                return this;
            },
            removeClass: function(className) {
                if (elem && typeof(className) === strstring && this.hasClass(className)) {
                    var classAttr = elem.getAttribute("class");
                    var classes = (classAttr) ? classAttr.split(" ") : [];
                    var indexOfClass = classes.indexOf(className);
                    while (indexOfClass > -1) {
                        classes.splice(indexOfClass, 1);
                        indexOfClass = classes.indexOf(className);
                    }
                    this.attr("class", classes.join(" "));
                }
                return this;
            },
            attr: function(attrName, attrValue) {
                if (elem && typeof(attrName) === strstring && typeof(attrValue) === strundef) {
                    return elem.getAttribute(attrName);
                } else if (elem && typeof(attrName) === strstring && typeof(attrValue) !== strundef) {
                    elem.setAttribute(attrName, attrValue);
                    return attrValue;
                }
                return null;
            },
            hasAttr: function(val){
                if (elem && typeof(val) === strstring){
                    return elem.hasAttribute(val); 
                }
                return null;
            },
            bind: function(eventType, eventCallback, captureMode, data) {
                if (elem && elem.addEventListener) {
                    return (elem.addEventListener(eventType, function(evt) {
                        evt = evt || window.event;
                        eventCallback.call(this, evt, data);
                    }, captureMode));
                } else if (elem && elem.attachEvent) {
                    return (elem.attachEvent("on" + eventType, function(evt) {
                        evt = evt || window.event;
                        eventCallback.call(elem, evt, data);
                    }));
                } else if (elem) {
                    elem["on" + eventType] = eventCallback;
                }
            },
            toggle: function() {
                if (elem) {
                    var disp = this.getStyle("display");
                    elem.style.display = (disp === "block") ? "none" : "block";
                    return (!(disp === "block"));
                }
            },
            getStyle: function(styleAttr) {
                if (elem) {
                    if (typeof styleAttr === "string") {
                        if (elem.currentStyle) {
                            return elem.currentStyle[styleAttr];
                        } else if (window.getComputedStyle) {
                            return window.getComputedStyle(elem, null)[styleAttr];
                        } else if (elem.style) {
                            return elem.style[styleAttr];
                        }
                        return "";
                    }
                }
                return "";
            },
            hide: function() {
                if (elem) {
                    elem.style.display = "none";
                }
                return this;
            },
            show: function() {
                if (elem) {
                    elem.style.display = "block";
                }
                return this;
            },
            parent: function() {
                if (elem) {
                    return elem.parentNode;
                }
                return null;
            },
            html: function (val) {
                if (typeof (val) === strundef) {
                    return elem.innerHTML;
                } else {
                    elem.innerHTML = val;
                    return this;
                }
            },
            childNumber: function(parentElm) {
                if(elem && typeof(parentElm) !== strundef){
                    return Array.prototype.indexOf.call(parentElm.children, elem);
                }
                return null;
            }
        };
        return ElemObj;
    };
    
}(window, document));