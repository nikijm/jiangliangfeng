/*
*
*	请勿用于任何商业用途，如果发生任何法律纠纷，于本人无关，谢谢
*	QQ群（20420014），欢迎加入学习
*
*/
var mobiscroll = mobiscroll || {};
(function(e, b, c) {
var n = {
		"column-count": 1,
		columns: 1,
		"font-weight": 1,
		"line-height": 1,
		opacity: 1,
		"z-index": 1,
		zoom: 1
	},
	p = {
		'readonly': 'readOnly'
	},
	j = [],
	f = Array.prototype.slice;

function d(a) {
	
	return typeof a === (false ? "" : "function");
}

function h(a) {
	return typeof a === (true ? "object" : "");
}

function k(a) {
	return typeof a.length == (true ? 'number' : "");
}

function l(a) {
	return a.replace(/-+(.)?/g, function(b, a) {
		return a ? a.toUpperCase() : '';
	});
}

function m(e, d, f) {
	for (var b in d) {
		if (f && (a.isPlainObject(d[b]) || a.isArray(d[b]))) {
			if (a.isPlainObject(d[b]) && !a.isPlainObject(e[b]) || a.isArray(d[b]) && !a.isArray(e[b])) {
				e[b] = {};
			}
			m(e[b], d[b], f);
		} else if (d[b] !== c) {
			e[b] = d[b];
		}
	}
}

function g(a) {
	return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
}

function o(b, a) {
	return typeof a == "number" && !n[g(b)] ? a + "px" : a;
}
var i = function() {
	var i = function(c) {
		var d = this,
			b = 0;
		for (b = 0; b < c.length; b++) {
			d[b] = c[b];
		}
		d.length = c.length;
		return a(this);
	};
	var a = function(c, k) {
		var h = [],
			f = 0;
		if (c && !k) {
			if (c instanceof i) {
				return c;
			}
		}
		if (d(c)) {
			return a(b).ready(c);
		}
		if (c) {
			if (typeof c === 'string') {
				var l, m, g;
				c = g = c.trim();
				if (g.indexOf('<') >= 0 && g.indexOf('>') >= 0) {
					var j = 'div';
					if (g.indexOf('<li') === 0) {
						j = 'ul';
					}
					if (g.indexOf('<tr') === 0) {
						j = 'tbody';
					}
					if (g.indexOf('<td') === 0 || g.indexOf('<th') === 0) {
						j = 'tr';
					}
					if (g.indexOf('<tbody') === 0) {
						j = 'table';
					}
					if (g.indexOf('<option') === 0) {
						j = 'select';
					}
					m = b.createElement(j);
					m.innerHTML = g;
					for (f = 0; f < m.childNodes.length; f++) {
						h.push(m.childNodes[f]);
					}
				} else {
					if (!k && c[0] === '#' && !c.match(/[ .<>:~]/)) {
						l = [b.getElementById(c.split('#')[1])];
					} else {
						if (k instanceof i) {
							k = k[0];
						}
						l = (k || b).querySelectorAll(c);
					}
					for (f = 0; f < l.length; f++) {
						if (l[f]) {
							h.push(l[f]);
						}
					}
				}
			} else if (c.nodeType || c === e || c === b) {
				h.push(c);
			} else if (c.length > 0 && c[0].nodeType) {
				for (f = 0; f < c.length; f++) {
					h.push(c[f]);
				}
			} else if (a.isArray(c)) {
				h = c;
			}
		}
		return new i(h);
	};
	i.prototype = {
		ready: function(c) {
			if (/complete|loaded|interactive/.test(b.readyState) && b.body) {
				c(a);
			} else {
				b.addEventListener('DOMContentLoaded', function() {
					c(a);
				}, false);
			}
			return this;
		},
		concat: j.concat,
		empty: function() {
			return this.each(function() {
				this.innerHTML = '';
			});
		},
		map: function(b) {
			return a(a.map(this, function(a, c) {
				return b.call(a, c, a);
			}));
		},
		slice: function() {
			return a(f.apply(this, arguments));
		},
		addClass: function(d) {
			if (typeof d === 'undefined') {
				return this;
			}
			var c = d.split(' ');
			for (var a = 0; a < c.length; a++) {
				for (var b = 0; b < this.length; b++) {
					if (typeof this[b].classList !== 'undefined' && c[a] !== '') {
						this[b].classList.add(c[a]);
					}
				}
			}
			return this;
		},
		removeClass: function(d) {
			var c = d.split(' ');
			for (var a = 0; a < c.length; a++) {
				for (var b = 0; b < this.length; b++) {
					if (typeof this[b].classList !== 'undefined' && c[a] !== '') {
						this[b].classList.remove(c[a]);
					}
				}
			}
			return this;
		},
		hasClass: function(a) {
			return this[0] ? this[0].classList.contains(a) : false;
		},
		toggleClass: function(d) {
			var c = d.split(' ');
			for (var b = 0; b < c.length; b++) {
				for (var a = 0; a < this.length; a++) {
					if (typeof this[a].classList !== 'undefined') {
						this[a].classList.toggle(c[b]);
					}
				}
			}
			return this;
		},
		closest: function(d, e) {
			var b = this[0],
				c = false;
			if (h(d)) {
				c = a(d);
			}
			while (b && !(c ? c.indexOf(b) >= 0 : a.matches(b, d))) {
				b = b !== e && b.nodeType !== b.DOCUMENT_NODE && b.parentNode;
			}
			return a(b);
		},
		attr: function(a, f) {
			var e;
			if (arguments.length === 1 && typeof a === 'string' && this.length) {
				e = this[0].getAttribute(a);
				return this[0] && (e || e === '') ? e : c;
			} else {
				for (var b = 0; b < this.length; b++) {
					if (arguments.length === 2) {
						this[b].setAttribute(a, f);
					} else {
						for (var d in a) {
							this[b][d] = a[d];
							this[b].setAttribute(d, a[d]);
						}
					}
				}
				return this;
			}
		},
		removeAttr: function(b) {
			for (var a = 0; a < this.length; a++) {
				this[a].removeAttribute(b);
			}
			return this;
		},
		prop: function(a, d) {
			a = p[a] || a;
			if (arguments.length === 1 && typeof a === 'string') {
				return this[0] ? this[0][a] : c;
			} else {
				for (var b = 0; b < this.length; b++) {
					this[b][a] = d;
				}
				return this;
			}
		},
		val: function(d) {
			if (typeof d === 'undefined') {
				if (this.length && this[0].multiple) {
					return a.map(this.find('option:checked'), function(a) {
						return a.value;
					});
				}
				return this[0] ? this[0].value : c;
			}
			if (this.length && this[0].multiple) {
				a.each(this[0].options, function() {
					this.selected = d.indexOf(this.value) != -1;
				});
			} else {
				for (var b = 0; b < this.length; b++) {
					this[b].value = d;
				}
			}
			return this;
		},
		on: function(k, g, f, h) {
			var e = k.split(' '),
				c, b;

			function i(e) {
				var b, c, d = e.target;
				if (a(d).is(g)) {
					f.call(d, e);
				} else {
					c = a(d).parents();
					for (b = 0; b < c.length; b++) {
						if (a(c[b]).is(g)) {
							f.call(c[b], e);
						}
					}
				}
			}

			function j(a, e, c, d) {
				var b = e.split('.');
				if (!a.DomNameSpaces) {
					a.DomNameSpaces = [];
				}
				a.DomNameSpaces.push({
					namespace: b[1],
					event: b[0],
					listener: c,
					capture: d
				});
				a.addEventListener(b[0], c, d);
			}
			for (c = 0; c < this.length; c++) {
				if (d(g) || g === false) {
					if (d(g)) {
						h = f || false;
						f = g;
					}
					for (b = 0; b < e.length; b++) {
						if (e[b].indexOf('.') != -1) {
							j(this[c], e[b], f, h);
						} else {
							this[c].addEventListener(e[b], f, h);
						}
					}
				} else {
					for (b = 0; b < e.length; b++) {
						if (!this[c].DomLiveListeners) {
							this[c].DomLiveListeners = [];
						}
						this[c].DomLiveListeners.push({
							listener: f,
							liveListener: i
						});
						if (e[b].indexOf('.') != -1) {
							j(this[c], e[b], i, h);
						} else {
							this[c].addEventListener(e[b], i, h);
						}
					}
				}
			}
			return this;
		},
		off: function(k, h, f, i) {
			var e, c, a, g, b = this;

			function j(h) {
				var a, c, d, e = h.split('.'),
					f = e[0],
					g = e[1];
				for (a = 0; a < b.length; ++a) {
					if (b[a].DomNameSpaces) {
						for (c = 0; c < b[a].DomNameSpaces.length; ++c) {
							d = b[a].DomNameSpaces[c];
							if (d.namespace == g && (d.event == f || !f)) {
								b[a].removeEventListener(d.event, d.listener, d.capture);
								d.removed = true;
							}
						}
						for (c = b[a].DomNameSpaces.length - 1; c >= 0; --c) {
							if (b[a].DomNameSpaces[c].removed) {
								b[a].DomNameSpaces.splice(c, 1);
							}
						}
					}
				}
			}
			e = k.split(' ');
			for (c = 0; c < e.length; c++) {
				for (a = 0; a < this.length; a++) {
					if (d(h) || h === false) {
						if (d(h)) {
							i = f || false;
							f = h;
						}
						if (e[c].indexOf('.') === 0) {
							j(e[c].substr(1), f, i);
						} else {
							this[a].removeEventListener(e[c], f, i);
						}
					} else {
						if (this[a].DomLiveListeners) {
							for (g = 0; g < this[a].DomLiveListeners.length; g++) {
								if (this[a].DomLiveListeners[g].listener === f) {
									this[a].removeEventListener(e[c], this[a].DomLiveListeners[g].liveListener, i);
								}
							}
						}
						if (this[a].DomNameSpaces && this[a].DomNameSpaces.length && e[c]) {
							j(e[c]);
						}
					}
				}
			}
			return this;
		},
		trigger: function(g, f) {
			var d = g.split(' ');
			for (var c = 0; c < d.length; c++) {
				for (var e = 0; e < this.length; e++) {
					var a;
					try {
						a = new CustomEvent(d[c], {
							detail: f,
							bubbles: true,
							cancelable: true
						});
					} catch (e) {
						a = b.createEvent('Event');
						a.initEvent(d[c], true, true);
						a.detail = f;
					}
					this[e].dispatchEvent(a);
				}
			}
			return this;
		},
		width: function(a) {
			if (a !== c) {
				return this.css('width', a);
			}
			if (this[0] === e) {
				return e.innerWidth;
			} else if (this[0] === b) {
				return b.documentElement.scrollWidth;
			} else {
				return this.length > 0 ? parseFloat(this.css('width')) : null;
			}
		},
		height: function(f) {
			if (f !== c) {
				return this.css('height', f);
			}
			if (this[0] === e) {
				return e.innerHeight;
			} else if (this[0] === b) {
				var d = b.body,
					a = b.documentElement;
				return Math.max(d.scrollHeight, d.offsetHeight, a.clientHeight, a.scrollHeight, a.offsetHeight);
			} else {
				return this.length > 0 ? parseFloat(this.css('height')) : null;
			}
		},
		innerWidth: function() {
			var b = this;
			if (this.length > 0) {
				if (this[0].innerWidth) {
					return this[0].innerWidth;
				} else {
					var a = this[0].offsetWidth,
						c = ['left', 'right'];
					c.forEach(function(c) {
						a -= parseInt(b.css(l('border-' + c + '-width')) || 0, 10);
					});
					return a;
				}
			}
		},
		innerHeight: function() {
			var b = this;
			if (this.length > 0) {
				if (this[0].innerHeight) {
					return this[0].innerHeight;
				} else {
					var a = this[0].offsetHeight,
						c = ['top', 'bottom'];
					c.forEach(function(c) {
						a -= parseInt(b.css(l('border-' + c + '-width')) || 0, 10);
					});
					return a;
				}
			}
		},
		offset: function() {
			if (this.length > 0) {
				var a = this[0],
					c = a.getBoundingClientRect(),
					d = b.body,
					f = a.clientTop || d.clientTop || 0,
					g = a.clientLeft || d.clientLeft || 0,
					h = e.pageYOffset || a.scrollTop,
					i = e.pageXOffset || a.scrollLeft;
				return {
					top: c.top + h - f,
					left: c.left + i - g
				};
			}
		},
		hide: function() {
			for (var a = 0; a < this.length; a++) {
				this[a].style.display = 'none';
			}
			return this;
		},
		show: function() {
			for (var a = 0; a < this.length; a++) {
				if (this[a].style.display == "none") {
					this[a].style.display = '';
				}
				if (getComputedStyle(this[a], '').getPropertyValue("display") == "none") {
					this[a].style.display = 'block';
				}
			}
			return this;
		},
		clone: function() {
			return this.map(function() {
				return this.cloneNode(true);
			});
		},
		styles: function() {
			return this[0] ? e.getComputedStyle(this[0], null) : c;
		},
		css: function(a, f) {
			var c, b, d = this[0],
				e = '';
			if (arguments.length < 2) {
				if (!d) {
					return;
				}
				if (typeof a === 'string') {
					return d.style[a] || getComputedStyle(d, '').getPropertyValue(a);
				}
			}
			if (typeof a === 'string') {
				if (!f && f !== 0) {
					this.each(function() {
						this.style.removeProperty(g(a));
					});
				} else {
					e = g(a) + ":" + o(a, f);
				}
			} else {
				for (b in a) {
					if (!a[b] && a[b] !== 0) {
						for (c = 0; c < this.length; c++) {
							this[c].style.removeProperty(g(b));
						}
					} else {
						e += g(b) + ':' + o(b, a[b]) + ';';
					}
				}
			}
			return this.each(function() {
				this.style.cssText += ';' + e;
			});
		},
		each: function(b) {
			for (var a = 0; a < this.length; a++) {
				if (b.apply(this[a], [a, this[a]]) === false) {
					break;
				}
			}
			return this;
		},
		filter: function(e) {
			var c = [];
			for (var b = 0; b < this.length; b++) {
				if (d(e)) {
					if (e.call(this[b], b, this[b])) {
						c.push(this[b]);
					}
				} else if (a.matches(this[b], e)) {
					c.push(this[b]);
				}
			}
			return new i(c);
		},
		html: function(b) {
			if (typeof b === 'undefined') {
				return this[0] ? this[0].innerHTML : c;
			} else {
				this.empty();
				for (var a = 0; a < this.length; a++) {
					this[a].innerHTML = b;
				}
				return this;
			}
		},
		text: function(b) {
			if (typeof b === 'undefined') {
				return this[0] ? this[0].textContent.trim() : null;
			} else {
				for (var a = 0; a < this.length; a++) {
					this[a].textContent = b;
				}
				return this;
			}
		},
		is: function(b) {
			return this.length > 0 && a.matches(this[0], b);
		},
		not: function(b) {
			var g = [];
			if (d(b) && b.call !== c) {
				this.each(function(a) {
					if (!b.call(this, a)) {
						g.push(this);
					}
				});
			} else {
				var e = typeof b == 'string' ? this.filter(b) : k(b) && d(b.item) ? f.call(b) : a(b);
				if (h(e)) {
					e = a.map(e, function(a) {
						return a;
					});
				}
				this.each(function(b, a) {
					if (e.indexOf(a) < 0) {
						g.push(a);
					}
				});
			}
			return a(g);
		},
		indexOf: function(b) {
			for (var a = 0; a < this.length; a++) {
				if (this[a] === b) {
					return a;
				}
			}
		},
		index: function(b) {
			return b ? this.indexOf(a(b)[0]) : this.parent().children().indexOf(this[0]);
		},
		get: function(a) {
			return a === c ? f.call(this) : this[a >= 0 ? a : a + this.length];
		},
		eq: function(a) {
			if (typeof a === 'undefined') {
				return this;
			}
			var b = this.length,
				c;
			if (a > b - 1) {
				return new i([]);
			}
			if (a < 0) {
				c = b + a;
				return c < 0 ? new i([]) : new i([this[c]]);
			}
			return new i([this[a]]);
		},
		append: function(a) {
			var c, d;
			for (c = 0; c < this.length; c++) {
				if (typeof a === 'string') {
					var e = b.createElement('div');
					e.innerHTML = a;
					while (e.firstChild) {
						this[c].appendChild(e.firstChild);
					}
				} else if (a instanceof i) {
					for (d = 0; d < a.length; d++) {
						this[c].appendChild(a[d]);
					}
				} else {
					this[c].appendChild(a);
				}
			}
			return this;
		},
		appendTo: function(b) {
			a(b).append(this);
			return this;
		},
		prepend: function(d) {
			var a, c;
			for (a = 0; a < this.length; a++) {
				if (typeof d === 'string') {
					var e = b.createElement('div');
					e.innerHTML = d;
					for (c = e.childNodes.length - 1; c >= 0; c--) {
						this[a].insertBefore(e.childNodes[c], this[a].childNodes[0]);
					}
				} else if (d instanceof i) {
					for (c = 0; c < d.length; c++) {
						this[a].insertBefore(d[c], this[a].childNodes[0]);
					}
				} else {
					this[a].insertBefore(d, this[a].childNodes[0]);
				}
			}
			return this;
		},
		prependTo: function(b) {
			a(b).prepend(this);
			return this;
		},
		insertBefore: function(e) {
			var b = a(e);
			for (var c = 0; c < this.length; c++) {
				if (b.length === 1) {
					b[0].parentNode.insertBefore(this[c], b[0]);
				} else if (b.length > 1) {
					for (var d = 0; d < b.length; d++) {
						b[d].parentNode.insertBefore(this[c].cloneNode(true), b[d]);
					}
				}
			}
			return this;
		},
		insertAfter: function(e) {
			var b = a(e);
			for (var c = 0; c < this.length; c++) {
				if (b.length === 1) {
					b[0].parentNode.insertBefore(this[c], b[0].nextSibling);
				} else if (b.length > 1) {
					for (var d = 0; d < b.length; d++) {
						b[d].parentNode.insertBefore(this[c].cloneNode(true), b[d].nextSibling);
					}
				}
			}
			return this;
		},
		next: function(b) {
			if (this.length > 0) {
				if (b) {
					if (this[0].nextElementSibling && a(this[0].nextElementSibling).is(b)) {
						return new i([this[0].nextElementSibling]);
					} else {
						return new i([]);
					}
				} else {
					if (this[0].nextElementSibling) {
						return new i([this[0].nextElementSibling]);
					} else {
						return new i([]);
					}
				}
			} else {
				return new i([]);
			}
		},
		nextAll: function(e) {
			var d = [],
				b = this[0];
			if (!b) {
				return new i([]);
			}
			while (b.nextElementSibling) {
				var c = b.nextElementSibling;
				if (e) {
					if (a(c).is(e)) {
						d.push(c);
					}
				} else {
					d.push(c);
				}
				b = c;
			}
			return new i(d);
		},
		prev: function(b) {
			if (this.length > 0) {
				if (b) {
					if (this[0].previousElementSibling && a(this[0].previousElementSibling).is(b)) {
						return new i([this[0].previousElementSibling]);
					} else {
						return new i([]);
					}
				} else {
					if (this[0].previousElementSibling) {
						return new i([this[0].previousElementSibling]);
					} else {
						return new i([]);
					}
				}
			} else {
				return new i([]);
			}
		},
		prevAll: function(e) {
			var d = [];
			var b = this[0];
			if (!b) {
				return new i([]);
			}
			while (b.previousElementSibling) {
				var c = b.previousElementSibling;
				if (e) {
					if (a(c).is(e)) {
						d.push(c);
					}
				} else {
					d.push(c);
				}
				b = c;
			}
			return new i(d);
		},
		parent: function(d) {
			var c = [];
			for (var b = 0; b < this.length; b++) {
				if (this[b].parentNode !== null) {
					if (d) {
						if (a(this[b].parentNode).is(d)) {
							c.push(this[b].parentNode);
						}
					} else {
						c.push(this[b].parentNode);
					}
				}
			}
			return a(a.unique(c));
		},
		parents: function(e) {
			var c = [];
			for (var d = 0; d < this.length; d++) {
				var b = this[d].parentNode;
				while (b) {
					if (e) {
						if (a(b).is(e)) {
							c.push(b);
						}
					} else {
						c.push(b);
					}
					b = b.parentNode;
				}
			}
			return a(a.unique(c));
		},
		find: function(e) {
			var c = [];
			for (var a = 0; a < this.length; a++) {
				var d = this[a].querySelectorAll(e);
				for (var b = 0; b < d.length; b++) {
					c.push(d[b]);
				}
			}
			return new i(c);
		},
		children: function(f) {
			var d = [];
			for (var e = 0; e < this.length; e++) {
				var c = this[e].childNodes;
				for (var b = 0; b < c.length; b++) {
					if (!f) {
						if (c[b].nodeType === 1) {
							d.push(c[b]);
						}
					} else {
						if (c[b].nodeType === 1 && a(c[b]).is(f)) {
							d.push(c[b]);
						}
					}
				}
			}
			return new i(a.unique(d));
		},
		remove: function() {
			for (var a = 0; a < this.length; a++) {
				if (this[a].parentNode) {
					this[a].parentNode.removeChild(this[a]);
				}
			}
			return this;
		},
		add: function() {
			var b = this;
			var c, d;
			for (c = 0; c < arguments.length; c++) {
				var e = a(arguments[c]);
				for (d = 0; d < e.length; d++) {
					b[b.length] = e[d];
					b.length++;
				}
			}
			return b;
		},
		before: function(b) {
			a(b).insertBefore(this);
			return this;
		},
		after: function(b) {
			a(b).insertAfter(this);
			return this;
		},
		scrollTop: function(a) {
			if (!this.length) {
				return;
			}
			var b = 'scrollTop' in this[0];
			if (a === c) {
				return b ? this[0].scrollTop : this[0].pageYOffset;
			}
			return this.each(b ? function() {
				this.scrollTop = a;
			} : function() {
				this.scrollTo(this.scrollX, a);
			});
		},
		scrollLeft: function(a) {
			if (!this.length) {
				return;
			}
			var b = 'scrollLeft' in this[0];
			if (a === c) {
				return b ? this[0].scrollLeft : this[0].pageXOffset;
			}
			return this.each(b ? function() {
				this.scrollLeft = a;
			} : function() {
				this.scrollTo(a, this.scrollY);
			});
		},
		contents: function() {
			return this.map(function(b, a) {
				return f.call(a.childNodes);
			});
		},
		nextUntil: function(d) {
			var b = this,
				c = [];
			while (b.length && !b.filter(d).length) {
				c.push(b[0]);
				b = b.next();
			}
			return a(c);
		},
		prevUntil: function(d) {
			var b = this,
				c = [];
			while (b.length && !a(b).filter(d).length) {
				c.push(b[0]);
				b = b.prev();
			}
			return a(c);
		},
		detach: function() {
			return this.remove();
		}
	};
	a.fn = i.prototype;
	return a;
}();
var a = i;
mobiscroll.$ = i;
a.inArray = function(a, b, c) {
	return j.indexOf.call(b, a, c);
};
a.extend = function(a) {
	var c, b = f.call(arguments, 1);
	if (typeof a == 'boolean') {
		c = a;
		a = b.shift();
	}
	a = a || {};
	b.forEach(function(b) {
		m(a, b, c);
	});
	return a;
};
a.isFunction = d;
a.isArray = function(a) {
	return Object.prototype.toString.apply(a) === '[object Array]';
};
a.isPlainObject = function(a) {
	return h(a) && a !== null && a !== a.window && Object.getPrototypeOf(a) == Object.prototype;
};
a.each = function(b, e) {
	var c, d;
	if (!h(b) || !e) {
		return;
	}
	if (a.isArray(b) || b instanceof i) {
		for (c = 0; c < b.length; c++) {
			if (e.call(b[c], c, b[c]) === false) {
				break;
			}
		}
	} else {
		for (d in b) {
			if (b.hasOwnProperty(d) && d !== 'length') {
				if (e.call(b[d], d, b[d]) === false) {
					break;
				}
			}
		}
	}
	return this;
};
a.unique = function(c) {
	var b = [];
	for (var a = 0; a < c.length; a++) {
		if (b.indexOf(c[a]) === -1) {
			b.push(c[a]);
		}
	}
	return b;
};
a.map = function(d, g) {
	var b, c = [],
		e, f;
	if (k(d)) {
		for (e = 0; e < d.length; e++) {
			b = g(d[e], e);
			if (b !== null) {
				c.push(b);
			}
		}
	} else {
		for (f in d) {
			b = g(d[f], f);
			if (b !== null) {
				c.push(b);
			}
		}
	}
	return c.length > 0 ? a.fn.concat.apply([], c) : c;
};
a.matches = function(a, b) {
	if (!b || !a || a.nodeType !== 1) {
		return false;
	}
	var c = a.matchesSelector || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector;
	return c.call(a, b);
};
}(window, document));
	
	
 (function() {
   
    return function(Z8j, g8j, E8j) {
        function y8j(I3j) {
            var w3j;
            for (w3j in I3j) {
                if (S3j[I3j[w3j]] !== E8j) {
                    return true;
                }
            }
            return false;
        }

        function V3j() {
            var F3j = ['Webkit', 'Moz', 'O', 'ms'],
                u3j;
            for (u3j in F3j) {
                if (y8j([F3j[u3j] + 'Transform'])) {
                    return '-' + F3j[u3j].toLowerCase() + '-';
                }
            }
            return '';
        }

        function h3j(d3j, n3j, f3j) {
            var r3j = d3j;
            if (typeof n3j === 'object') {
                return d3j.each(function() {
                    if (q8j[this.id]) {
                        q8j[this.id].destroy();
                    }
                    new e8j.classes[n3j.component || 'Scroller'](this, n3j);
                });
            }
            if (typeof n3j === 'string') {
                d3j.each(function() {
                    var j3j, p3j = q8j[this.id];
                    if (p3j && p3j[n3j]) {
                        j3j = p3j[n3j].apply(this, Array.prototype.slice.call(f3j, 1));
                        if (j3j !== E8j) {
                            r3j = j3j;
                            return false;
                        }
                    }
                });
            }
            return r3j;
        }
        var e8j, t8j, m8j, C8j = function() {},
            o8j = typeof jQuery == 'undefined' ? mobiscroll.$ : jQuery,
            z8j = +new Date(),
            q8j = {},
            v8j = o8j.extend,
            R3j = navigator.userAgent,
            K8j = R3j.match(/Android|iPhone|iPad|iPod|Windows Phone|Windows|MSIE/i),
            S3j = g8j.createElement('modernizr').style,
            L3j = y8j(['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective']),
            J3j = y8j(['flex', 'msFlex', 'WebkitBoxDirection']),
            b8j = V3j(),
            D3j = b8j.replace(/^\-/, '').replace(/\-$/, '').replace('moz', 'Moz'),
            W8j = [];
        if (/Android/i.test(K8j)) {
            t8j = 'android';
            m8j = navigator.userAgent.match(/Android\s+([\d\.]+)/i);
            if (m8j) {
                W8j = m8j[0].replace('Android ', '').split('.');
            }
        } else if (/iPhone|iPad|iPod/i.test(K8j)) {
            t8j = 'ios';
            m8j = navigator.userAgent.match(/OS\s+([\d\_]+)/i);
            if (m8j) {
                W8j = m8j[0].replace(/_/g, '.').replace('OS ', '').split('.');
            }
        } else if (/Windows Phone/i.test(K8j)) {
            t8j = 'wp';
        } else if (/Windows|MSIE/i.test(K8j)) {
            t8j = 'windows';
        }
        e8j = mobiscroll = {
            $: o8j,
            version: '3.0.0',
			oCgcI : 1,
            util: {
                prefix: b8j,
                jsPrefix: D3j,
                has3d: L3j,
                hasFlex: J3j,
                preventClick: function() {
                    e8j.tapped++;
                    setTimeout(function() {
                        e8j.tapped--;
                    }, 500);
                },
                testTouch: function(X3j, x3j) {
                    if (X3j.type == 'touchstart') {
                        o8j(x3j).attr('data-touch', '1');
                    } else if (o8j(x3j).attr('data-touch')) {
                        o8j(x3j).removeAttr('data-touch');
                        return false;
                    }
                    return true;
                },
                objectToArray: function(l3j) {
                    var s3j = [],
                        A3j;
                    for (A3j in l3j) {
                        s3j.push(l3j[A3j]);
                    }
                    return s3j;
                },
                arrayToObject: function(M3j) {
                    var a3j = {},
                        Q3j;
                    if (M3j) {
                        for (Q3j = 0; Q3j < M3j.length; Q3j++) {
                            a3j[M3j[Q3j]] = M3j[Q3j];
                        }
                    }
                    return a3j;
                },
                isNumeric: function(T3j) {
                    return T3j - parseFloat(T3j) >= 0;
                },
                isString: function(G3j) {
                    return typeof G3j === 'string';
                },
                getCoord: function(O3j, P3j, k3j) {
                    var B3j = O3j.originalEvent || O3j,
                        i3j = (k3j ? 'page' : 'client') + P3j;
                    if (B3j.targetTouches && B3j.targetTouches[0]) {
                        return B3j.targetTouches[0][i3j];
                    }
                    if (B3j.changedTouches && B3j.changedTouches[0]) {
                        return B3j.changedTouches[0][i3j];
                    }
                    return O3j[i3j];
                },
                getPosition: function(c3j, e3j) {
                    var U3j = getComputedStyle(c3j[0]),
                        N3j, H3j;
                    o8j.each(['t', 'webkitT', 'MozT', 'OT', 'msT'], function(q3j, o3j) {
                        if (U3j[o3j + 'ransform'] !== E8j) {
                            N3j = U3j[o3j + 'ransform'];
                            return false;
                        }
                    });
                    N3j = N3j.split(')')[0].split(', ');
                    H3j = e3j ? N3j[13] || N3j[5] : N3j[12] || N3j[4];
                    return H3j;
                },
                constrain: function(v3j, m3j, Z3j) {
                    return Math.max(m3j, Math.min(v3j, Z3j));
                },
                vibrate: function(t3j) {
                    if ('vibrate' in navigator) {
                        navigator.vibrate(t3j || 50);
                    }
                },
                throttle: function(E3j, K3j) {
                    var W3j, g3j;
                    K3j = K3j || 100;
                    return function() {
                        var y3j = this,
                            C3j = +new Date(),
                            b3j = arguments;
                        if (W3j && C3j < W3j + K3j) {
                            clearTimeout(g3j);
                            g3j = setTimeout(function() {
                                W3j = C3j;
                                E3j.apply(y3j, b3j);
                            }, K3j);
                        } else {
                            W3j = C3j;
                            E3j.apply(y3j, b3j);
                        }
                    };
                }
            },
            tapped: 0,
            autoTheme: 'mobiscroll',
            presets: {
                scroller: {},
                numpad: {},
                listview: {},
                menustrip: {}
            },
            themes: {
                form: {},
                frame: {},
                scroller: {},
                listview: {},
                menustrip: {},
                progress: {}
            },
            platform: {
                name: t8j,
                majorVersion: W8j[0],
                minorVersion: W8j[1]
            },
            i18n: {},
            instances: q8j,
            classes: {},
            components: {},
            settings: {},
            setDefaults: function(z3j) {
                v8j(this.settings, z3j);
            },
            presetShort: function(h2j, R2j, S2j) {
                e8j[h2j] = function(Y2j, I2j) {
                    var V2j, J2j, L2j = {},
                        D2j = I2j || {};
                    o8j.extend(D2j, {
                        preset: S2j === false ? E8j : h2j
                    });
                    o8j(Y2j).each(function() {
                        if (q8j[this.id]) {
                            q8j[this.id].destroy();
                        }
                        V2j = new e8j.classes[R2j || 'Scroller'](this, D2j);
                        L2j[this.id] = V2j;
                    });
                    J2j = Object.keys(L2j);
                    return J2j.length == 1 ? L2j[J2j[0]] : L2j;
                };
                this.components[h2j] = function(w2j) {
                    return h3j(this, v8j(w2j, {
                        component: R2j,
                        preset: S2j === false ? E8j : h2j
                    }), arguments);
                };
            }
        };
        o8j.mobiscroll = e8j;
        o8j.fn.mobiscroll = function(F2j) {
            v8j(this, e8j.components);
            return h3j(this, F2j, arguments);
        };
        e8j.classes.Base = function(r2j, d2j) {
            var s2j, p2j, u2j, A2j, f2j, j2j, X2j, l2j = e8j.util,
                x2j = l2j.getCoord,
                n2j = this;
            n2j.settings = {};
            n2j._init = C8j;
            n2j._destroy = C8j;
            n2j._processSettings = C8j;
            n2j.init = function(S6j) {
                var D6j;
                for (D6j in n2j.settings) {
                    delete n2j.settings[D6j];
                }
                u2j = n2j.settings;
                v8j(d2j, S6j);
                if (n2j._hasDef) {
                    X2j = e8j.settings;
                }
                v8j(u2j, n2j._defaults, X2j, d2j);
                if (n2j._hasTheme) {
                    f2j = u2j.theme;
                    if (f2j == 'auto' || !f2j) {
                        f2j = e8j.autoTheme;
                    }
                    if (f2j == 'default') {
                        f2j = 'mobiscroll';
                    }
                    d2j.theme = f2j;
                    A2j = e8j.themes[n2j._class] ? e8j.themes[n2j._class][f2j] : {};
                }
                if (n2j._hasLang) {
                    s2j = e8j.i18n[u2j.lang];
                }
                if (n2j._hasTheme) {
                    j2j('onThemeLoad', {
                        lang: s2j,
                        settings: d2j
                    });
                }
                v8j(u2j, A2j, s2j, X2j, d2j);
                n2j._processSettings();
                j2j('onProcessSettings');
                var J6j = {
                    form: true,
                    scrollview: true,
                    progress: true,
                    switch: true,
                    slider: true,
                    stepper: true
                };
                if (J6j[n2j._class]) {
                    n2j._init(S6j);
                    j2j('onInit');
                } else {
                    var h6j = {
                        className: n2j._class,
                        buttons: n2j.buttons,
                        platform: e8j.platform,
                        userAgent: navigator.userAgent,
                        defSortHandle: o8j(r2j).find('ul,ol').length ? 'left' : 'right',
                        settings: {
                            activeClass: u2j.activeClass,
                            ampmText: u2j.ampmText,
                            amText: u2j.amText,
                            animateIcons: u2j.animateIcons,
                            backText: u2j.backText,
                            baseTheme: u2j.baseTheme,
                            buttons: u2j.buttons,
                            btnClass: u2j.btnClass,
                            btnWidth: u2j.btnWidth,
                            context: u2j.context == 'body' ? 'body' : '',
                            controls: u2j.controls,
                            cssClass: u2j.cssClass,
                            dateDisplay: u2j.dateDisplay,
                            dateFormat: u2j.dateFormat,
                            dateWheels: u2j.dateWheels,
                            dayNames: u2j.dayNames,
                            dayNamesShort: u2j.dayNamesShort,
                            daySuffix: u2j.daySuffix,
                            display: u2j.display,
                            dayText: u2j.dayText,
                            endYear: u2j.endYear,
                            fixedHeader: u2j.fixedHeader,
                            handleClass: u2j.handleClass,
                            handleMarkup: u2j.handleMarkup,
                            hideText: u2j.hideText,
                            hourText: u2j.hourText,
                            itemWidth: u2j.itemWidth,
                            lang: u2j.lang,
                            lapText: u2j.lapText,
                            layout: u2j.layout,
                            leftArrowClass: u2j.leftArrowClass,
                            max: u2j.max,
                            min: u2j.min,
                            minuteText: u2j.minuteText,
                            monthNames: u2j.monthNames,
                            monthNamesShort: u2j.monthNamesShort,
                            monthSuffix: u2j.monthSuffix,
                            monthText: u2j.monthText,
                            nowText: u2j.nowText,
                            pmText: u2j.pmText,
                            preset: u2j.preset,
                            resetText: u2j.resetText,
                            rightArrowClass: u2j.rightArrowClass,
                            rtl: u2j.rtl,
                            secText: u2j.secText,
                            select: u2j.select,
                            snap: u2j.snap,
                            sort: u2j.sort,
                            sortable: u2j.sortable,
                            sortHandle: u2j.sortHandle,
                            startText: u2j.startText,
                            startYear: u2j.startYear,
                            stepHour: u2j.stepHour,
                            stepMinute: u2j.stepMinute,
                            stepSecond: u2j.stepSecond,
                            steps: u2j.steps,
                            stopText: u2j.stopText,
                            striped: u2j.striped,
                            theme: u2j.theme,
                            timeFormat: u2j.timeFormat,
                            timeWheels: u2j.timeWheels,
                            todayText: u2j.todayText,
                            type: u2j.type,
                            variant: u2j.variant,
                            wrapperClass: u2j.wrapperClass,
                            yearSuffix: u2j.yearSuffix,
                            yearText: u2j.yearText
                        }
                    };
                    var y2j, C2j, b2j = [],
                        z2j = {},
                        L6j = ['refresh', 'redraw', 'navigate', 'showMonthView', 'changeTab', 'addValue', 'removeValue', 'getDate', 'setDate', 'addEvent', 'removeEvent', 'getEvents', 'setEvents', 'setActiveDate', 'start', 'stop', 'reset', 'lap', 'resetlap', 'getTime', 'setTime', 'getEllapsedTime', 'setEllapsedTime'],
                        V6j = {
                            jsonp: 1,
                            getInst: 1,
                            init: 1,
                            destroy: 1
                        },
                        R6j = function(Y6j) {
                            n2j[Y6j] = function() {
                                b2j.push({
                                    func: Y6j,
                                    args: arguments
                                });
                            };
                        };
                    for (C2j in n2j) {
                        if (typeof n2j[C2j] === 'function' && !V6j[C2j]) {
                            z2j[C2j] = n2j[C2j];
                            R6j(C2j);
                        }
                    }
                    for (y2j = 0; y2j < L6j.length; y2j++) {
                        R6j(L6j[y2j]);
                    }
                    if (u2j.preset == 'timer' && !d2j.buttons) {
                        h6j.settings.buttons = ['toggle', 'resetlap'];
                        if (u2j.display !== 'inline') {
                            h6j.settings.buttons.push('hide');
                        }
                    }
					
					
					   for (C2j in z2j) {
                            n2j[C2j] = z2j[C2j];
                        }
                        if (n2j._hasPreset) {
                            p2j = e8j.presets[n2j._class][u2j.preset];
                            if (p2j) {
                                p2j = p2j.call(r2j, n2j);
                                v8j(u2j, p2j, d2j);
                            }
                        }
                        n2j._init(S6j);
                        j2j('onInit');
                        for (y2j = 0; y2j < b2j.length; y2j++) {
                            n2j[b2j[y2j].func].apply(n2j, b2j[y2j].args);
                        }
                        b2j = null;
                        z2j = null;
                }
            };
            n2j.destroy = function() {
                if (n2j) {
                    n2j._destroy();
                    j2j('onDestroy');
                    delete q8j[r2j.id];
                    n2j = null;
                }
            };
            n2j.tap = function(f6j, d6j, x6j, F6j, j6j) {
                var r6j, n6j, w6j, u6j, p6j;
                F6j = F6j || 9;

                function s6j(Q6j) {
                    if (!w6j) {
                        if (x6j) {
                            Q6j.preventDefault();
                        }
                        w6j = this;
                        r6j = x2j(Q6j, 'X');
                        n6j = x2j(Q6j, 'Y');
                        u6j = false;
                        p6j = new Date();
                    }
                }

                function l6j(M6j) {
                    if (w6j && !u6j && (Math.abs(x2j(M6j, 'X') - r6j) > F6j || Math.abs(x2j(M6j, 'Y') - n6j) > F6j)) {
                        u6j = true;
                    }
                }

                function A6j(a6j) {
                    if (w6j) {
                        if (j6j && new Date() - p6j < 100 || !u6j) {
                            a6j.preventDefault();
                            d6j.call(w6j, a6j, n2j);
                        }
                        w6j = false;
                        l2j.preventClick();
                    }
                }

                function X6j() {
                    w6j = false;
                }
                if (u2j.tap) {
                    f6j.on('touchstart.mbsc', s6j).on('touchcancel.mbsc', X6j).on('touchmove.mbsc', l6j).on('touchend.mbsc', A6j);
                }
                f6j.on('click.mbsc', function(T6j) {
                    T6j.preventDefault();
                    d6j.call(this, T6j, n2j);
                });
            };
            n2j.trigger = function(i6j, k6j) {
                var O6j, G6j, B6j, P6j = [X2j, A2j, p2j, d2j];
                for (G6j = 0; G6j < 4; G6j++) {
                    B6j = P6j[G6j];
                    if (B6j && B6j[i6j]) {
                        O6j = B6j[i6j].call(r2j, k6j || {}, n2j);
                    }
                }
                return O6j;
            };
            n2j.option = function(U6j, H6j) {
                var N6j = {};
                if (typeof U6j === 'object') {
                    N6j = U6j;
                } else {
                    N6j[U6j] = H6j;
                }
                n2j.init(N6j);
            };
            n2j.getInst = function() {
                return n2j;
            };
            d2j = d2j || {};
            j2j = n2j.trigger;
            o8j(r2j).addClass('mbsc-comp');
            if (!r2j.id) {
                r2j.id = 'mobiscroll' + ++z8j;
            }
            q8j[r2j.id] = n2j;
        };

        function Y3j(g6j) {
            if (e8j.tapped && !g6j.tap && !(g6j.target.nodeName == 'TEXTAREA' && g6j.type == 'mousedown')) {
                g6j.stopPropagation();
                g6j.preventDefault();
                return false;
            }
        }
        if (g8j.addEventListener) {
            o8j.each(['mouseover', 'mousedown', 'mouseup', 'click'], function(y6j, C6j) {
                g8j.addEventListener(C6j, Y3j, true);
            });
        }
    };
}()(window, document));
(function() {
    mobiscroll.i18n.ca = {
        setText: 'Acceptar',
        cancelText: 'Cancel·lar',
        clearText: 'Esborrar',
        selectedText: '{count} seleccionat',
        selectedPluralText: '{count} seleccionats',
        dateFormat: 'dd/mm/yy',
        dayNames: ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte'],
        dayNamesShort: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
        dayNamesMin: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
        dayText: 'Dia',
        hourText: 'Hores',
        minuteText: 'Minuts',
        monthNames: ['Gener', 'Febrer', 'Mar&ccedil;', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'],
        monthNamesShort: ['Gen', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Des'],
        monthText: 'Mes',
        secText: 'Segons',
        timeFormat: 'HH:ii',
        yearText: 'Any',
        nowText: 'Ara',
        pmText: 'pm',
        amText: 'am',
        todayText: 'Avui',
        firstDay: 1,
        dateText: 'Data',
        timeText: 'Temps',
        calendarText: 'Calendari',
        closeText: 'Tancar',
        fromText: 'Iniciar',
        toText: 'Final',
        wholeText: 'Sencer',
        fractionText: 'Fracció',
        unitText: 'Unitat',
        labels: ['Anys', 'Mesos', 'Dies', 'Hores', 'Minuts', 'Segons', ''],
        labelsShort: ['Anys', 'Mesos', 'Dies', 'Hrs', 'Mins', 'Secs', ''],
        startText: 'Iniciar',
        stopText: 'Aturar',
        resetText: 'Reiniciar',
        lapText: 'Volta',
        hideText: 'Amagar',
        backText: 'Tornar',
        undoText: 'Desfer',
        offText: 'No',
        onText: 'Si'
    };
}());
(function() {
    mobiscroll.i18n.cs = {
        setText: 'Zadej',
        cancelText: 'Storno',
        clearText: 'Vymazat',
        selectedText: 'Označený: {count}',
        dateFormat: 'dd.mm.yy',
        dayNames: ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'],
        dayNamesShort: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'],
        dayNamesMin: ['N', 'P', 'Ú', 'S', 'Č', 'P', 'S'],
        dayText: 'Den',
        hourText: 'Hodiny',
        minuteText: 'Minuty',
        monthNames: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'],
        monthNamesShort: ['Led', 'Úno', 'Bře', 'Dub', 'Kvě', 'Čer', 'Čvc', 'Spr', 'Zář', 'Říj', 'Lis', 'Pro'],
        monthText: 'Měsíc',
        secText: 'Sekundy',
        timeFormat: 'HH:ii',
        yearText: 'Rok',
        nowText: 'Teď',
        amText: 'am',
        pmText: 'pm',
        todayText: 'Dnes',
        firstDay: 1,
        dateText: 'Datum',
        timeText: 'Čas',
        calendarText: 'Kalendář',
        closeText: 'Zavřít',
        fromText: 'Začátek',
        toText: 'Konec',
        wholeText: 'Celý',
        fractionText: 'Část',
        unitText: 'Jednotka',
        labels: ['Roky', 'Měsíce', 'Dny', 'Hodiny', 'Minuty', 'Sekundy', ''],
        labelsShort: ['Rok', 'Měs', 'Dny', 'Hod', 'Min', 'Sec', ''],
        startText: 'Start',
        stopText: 'Stop',
        resetText: 'Resetovat',
        lapText: 'Etapa',
        hideText: 'Schovat',
        backText: 'Zpět',
        undoText: 'Rozlepit',
        offText: 'O',
        onText: 'I',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.da = {
        setText: 'Sæt',
        cancelText: 'Annuller',
        clearText: 'Ryd',
        selectedText: '{count} valgt',
        selectedPluralText: '{count} valgt',
        dateFormat: 'dd/mm/yy',
        dayNames: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
        dayNamesShort: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
        dayNamesMin: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
        dayText: 'Dag',
        hourText: 'Timer',
        minuteText: 'Minutter',
        monthNames: ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
        monthText: 'Måned',
        secText: 'Sekunder',
        amText: 'am',
        pmText: 'pm',
        timeFormat: 'HH.ii',
        yearText: 'År',
        nowText: 'Nu',
        todayText: 'I dag',
        firstDay: 1,
        dateText: 'Dato',
        timeText: 'Tid',
        calendarText: 'Kalender',
        closeText: 'Luk',
        fromText: 'Start',
        toText: 'Slut',
        wholeText: 'Hele',
        fractionText: 'Dele',
        unitText: 'Enhed',
        labels: ['År', 'Måneder', 'Dage', 'Timer', 'Minutter', 'Sekunder', ''],
        labelsShort: ['År', 'Mdr', 'Dg', 'Timer', 'Min', 'Sek', ''],
        startText: 'Start',
        stopText: 'Stop',
        resetText: 'Nulstil',
        lapText: 'Omgang',
        hideText: 'Skjul',
        offText: 'Fra',
        onText: 'Til',
        backText: 'Tilbage',
        undoText: 'Fortryd'
    };
}());
(function() {
    mobiscroll.i18n.de = {
        setText: 'OK',
        cancelText: 'Abbrechen',
        clearText: 'Löschen',
        selectedText: '{count} ausgewählt',
        dateFormat: 'dd.mm.yy',
        dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
        dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
        dayNamesMin: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
        dayText: 'Tag',
        delimiter: '.',
        hourText: 'Stunde',
        minuteText: 'Minuten',
        monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
        monthText: 'Monat',
        secText: 'Sekunden',
        timeFormat: 'HH:ii',
        yearText: 'Jahr',
        nowText: 'Jetzt',
        pmText: 'nachm.',
        amText: 'vorm.',
        todayText: 'Heute',
        firstDay: 1,
        dateText: 'Datum',
        timeText: 'Zeit',
        calendarText: 'Kalender',
        closeText: 'Schließen',
        fromText: 'Von',
        toText: 'Um',
        wholeText: 'Ganze Zahl',
        fractionText: 'Bruchzahl',
        unitText: 'Maßeinheit',
        labels: ['Jahre', 'Monate', 'Tage', 'Stunden', 'Minuten', 'Sekunden', ''],
        labelsShort: ['Jahr.', 'Mon.', 'Tag.', 'Std.', 'Min.', 'Sek.', ''],
        startText: 'Starten',
        stopText: 'Stoppen',
        resetText: 'Zurücksetzen',
        lapText: 'Lap',
        hideText: 'Ausblenden',
        backText: 'Zurück',
        undoText: 'Rückgängig machen',
        offText: 'Aus',
        onText: 'Ein',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n['en-GB'] = mobiscroll.i18n['en-UK'] = {
        dateFormat: 'dd/mm/yy',
        timeFormat: 'HH:ii'
    };
}());
(function() {
    mobiscroll.i18n.es = {
        setText: 'Aceptar',
        cancelText: 'Cancelar',
        clearText: 'Borrar',
        selectedText: '{count} seleccionado',
        selectedPluralText: '{count} seleccionados',
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Mi&#xE9;rcoles', 'Jueves', 'Viernes', 'S&#xE1;bado'],
        dayNamesShort: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'S&#xE1;'],
        dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
        dayText: 'D&#237;a',
        hourText: 'Horas',
        minuteText: 'Minutos',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        monthText: 'Mes',
        secText: 'Segundos',
        timeFormat: 'HH:ii',
        yearText: 'A&ntilde;o',
        nowText: 'Ahora',
        pmText: 'pm',
        amText: 'am',
        todayText: 'Hoy',
        firstDay: 1,
        dateText: 'Fecha',
        timeText: 'Tiempo',
        calendarText: 'Calendario',
        closeText: 'Cerrar',
        fromText: 'Iniciar',
        toText: 'Final',
        wholeText: 'Entero',
        fractionText: 'Fracción',
        unitText: 'Unidad',
        labels: ['Años', 'Meses', 'Días', 'Horas', 'Minutos', 'Segundos', ''],
        labelsShort: ['Año', 'Mes', 'Día', 'Hora', 'Min', 'Seg', ''],
        startText: 'Iniciar',
        stopText: 'Deténgase',
        resetText: 'Reinicializar',
        lapText: 'Lap',
        hideText: 'Esconder',
        backText: 'Volver',
        undoText: 'Deshacer',
        offText: 'No',
        onText: 'Sí',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    var a = {
        gDaysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        jDaysInMonth: [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29]
    };
    a.jalaliToGregorian = function(j, h, i) {
        j = parseInt(j);
        h = parseInt(h);
        i = parseInt(i);
        var c;
        var f = j - 979;
        var l = h - 1;
        var k = i - 1;
        var g = 365 * f + parseInt(f / 33) * 8 + parseInt((f % 33 + 3) / 4);
        for (c = 0; c < l; ++c) {
            g += a.jDaysInMonth[c];
        }
        g += k;
        var b = g + 79;
        var d = 1600 + 400 * parseInt(b / 146097);
        b = b % 146097;
        var e = true;
        if (b >= 36525) {
            b--;
            d += 100 * parseInt(b / 36524);
            b = b % 36524;
            if (b >= 365) {
                b++;
            } else {
                e = false;
            }
        }
        d += 4 * parseInt(b / 1461);
        b %= 1461;
        if (b >= 366) {
            e = false;
            b--;
            d += parseInt(b / 365);
            b = b % 365;
        }
        for (c = 0; b >= a.gDaysInMonth[c] + (c == 1 && e); c++) {
            b -= a.gDaysInMonth[c] + (c == 1 && e);
        }
        var n = c + 1;
        var m = b + 1;
        return [d, n, m];
    };
    a.checkDate = function(c, b, d) {
        return !(c < 0 || c > 32767 || b < 1 || b > 12 || d < 1 || d > a.jDaysInMonth[b - 1] + (b == 12 && (c - 979) % 33 % 4 === 0));
    };
    a.gregorianToJalali = function(i, f, g) {
        i = parseInt(i);
        f = parseInt(f);
        g = parseInt(g);
        var c;
        var d = i - 1600;
        var h = f - 1;
        var k = g - 1;
        var e = 365 * d + parseInt((d + 3) / 4) - parseInt((d + 99) / 100) + parseInt((d + 399) / 400);
        for (c = 0; c < h; ++c) {
            e += a.gDaysInMonth[c];
        }
        if (h > 1 && (d % 4 === 0 && d % 100 !== 0 || d % 400 === 0)) {
            ++e;
        }
        e += k;
        var b = e - 79;
        var l = parseInt(b / 12053);
        b %= 12053;
        var j = 979 + 33 * l + 4 * parseInt(b / 1461);
        b %= 1461;
        if (b >= 366) {
            j += parseInt((b - 1) / 365);
            b = (b - 1) % 365;
        }
        for (c = 0; c < 11 && b >= a.jDaysInMonth[c]; ++c) {
            b -= a.jDaysInMonth[c];
        }
        var n = c + 1;
        var m = b + 1;
        return [j, n, m];
    };
    mobiscroll.i18n.fa = {
        setText: 'تاييد',
        cancelText: 'انصراف',
        clearText: 'واضح ',
        selectedText: '{count} منتخب',
        dateFormat: 'yy/mm/dd',
        dayNames: ['يکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'],
        dayNamesShort: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
        dayNamesMin: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
        dayText: 'روز',
        hourText: 'ساعت',
        minuteText: 'دقيقه',
        monthNames: ['فروردين', 'ارديبهشت', 'خرداد', 'تير', 'مرداد', 'شهريور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        monthNamesShort: ['فروردين', 'ارديبهشت', 'خرداد', 'تير', 'مرداد', 'شهريور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        monthText: 'ماه',
        secText: 'ثانيه',
        timeFormat: 'HH:ii',
        yearText: 'سال',
        nowText: 'اکنون',
        amText: 'ب',
        pmText: 'ص',
        todayText: 'امروز',
        getYear: function(b) {
            return a.gregorianToJalali(b.getFullYear(), b.getMonth() + 1, b.getDate())[0];
        },
        getMonth: function(b) {
            return --a.gregorianToJalali(b.getFullYear(), b.getMonth() + 1, b.getDate())[1];
        },
        getDay: function(b) {
            return a.gregorianToJalali(b.getFullYear(), b.getMonth() + 1, b.getDate())[2];
        },
        getDate: function(d, b, e, f, g, h, i) {
            if (b < 0) {
                d += Math.floor(b / 12);
                b = 12 + b % 12;
            }
            if (b > 11) {
                d += Math.floor(b / 12);
                b = b % 12;
            }
            var c = a.jalaliToGregorian(d, +b + 1, e);
            return new Date(c[0], c[1] - 1, c[2], f || 0, g || 0, h || 0, i || 0);
        },
        getMaxDayOfMonth: function(c, d) {
            var b = 31;
            while (a.checkDate(c, d + 1, b) === false) {
                b--;
            }
            return b;
        },
        firstDay: 6,
        rtl: true,
        dateText: 'تاریخ ',
        timeText: 'زمان ',
        calendarText: 'تقویم',
        closeText: 'نزدیک',
        fromText: 'شروع ',
        toText: 'پایان',
        wholeText: 'تمام',
        fractionText: 'کسر',
        unitText: 'واحد',
        labels: ['سال', 'ماه', 'روز', 'ساعت', 'دقیقه', 'ثانیه', ''],
        labelsShort: ['سال', 'ماه', 'روز', 'ساعت', 'دقیقه', 'ثانیه', ''],
        startText: 'شروع',
        stopText: 'پايان',
        resetText: 'تنظیم مجدد',
        lapText: 'Lap',
        hideText: 'پنهان کردن',
        backText: 'پشت',
        undoText: 'واچیدن'
    };
}());
(function() {
    mobiscroll.i18n.fr = {
        setText: 'Terminer',
        cancelText: 'Annuler',
        clearText: 'Effacer',
        selectedText: '{count} sélectionné',
        selectedPluralText: '{count} sélectionnés',
        dateFormat: 'dd/mm/yy',
        dayNames: ['&#68;imanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        dayNamesShort: ['&#68;im.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
        dayNamesMin: ['&#68;', 'L', 'M', 'M', 'J', 'V', 'S'],
        dayText: 'Jour',
        monthText: 'Mois',
        monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
        hourText: 'Heures',
        minuteText: 'Minutes',
        secText: 'Secondes',
        timeFormat: 'HH:ii',
        yearText: 'Année',
        nowText: 'Maintenant',
        pmText: 'après-midi',
        amText: 'avant-midi',
        todayText: "Aujourd'hui",
        firstDay: 1,
        dateText: 'Date',
        timeText: 'Heure',
        calendarText: 'Calendrier',
        closeText: 'Fermer',
        fromText: 'Démarrer',
        toText: 'Fin',
        wholeText: 'Entier',
        fractionText: 'Fraction',
        unitText: 'Unité',
        labels: ['Ans', 'Mois', 'Jours', 'Heures', 'Minutes', 'Secondes', ''],
        labelsShort: ['Ans', 'Mois', 'Jours', 'Hrs', 'Min', 'Sec', ''],
        startText: 'Démarrer',
        stopText: 'Arrêter',
        resetText: 'Réinitialiser',
        lapText: 'Lap',
        hideText: 'Cachez',
        backText: 'Arrière',
        undoText: 'Défaire',
        offText: 'Non',
        onText: 'Oui',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.he = {
        rtl: true,
        setText: 'שמירה',
        cancelText: 'ביטול',
        clearText: 'נקה',
        selectedText: '{count} נבחר',
        selectedPluralText: '{count} נבחרו',
        dateFormat: 'dd/mm/yy',
        dayNames: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
        dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"],
        dayNamesMin: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'],
        dayText: 'יום',
        hourText: 'שעות',
        minuteText: 'דקות',
        monthNames: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
        monthNamesShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
        monthText: 'חודש',
        secText: 'שניות',
        amText: 'am',
        pmText: 'pm',
        timeFormat: 'HH:ii',
        yearText: 'שנה',
        nowText: 'עכשיו',
        firstDay: 0,
        dateText: 'תאריך',
        timeText: 'זמן',
        calendarText: 'תאריכון',
        closeText: 'סגירה',
        todayText: 'היום',
        eventText: 'מִקרֶה',
        eventsText: 'מִקרֶה',
        fromText: 'התחלה',
        toText: 'סיום',
        wholeText: 'כֹּל',
        fractionText: 'שבריר',
        unitText: 'יחידה',
        labels: ['שנים', 'חודשים', 'ימים', 'שעות', 'דקות', 'שניים', ''],
        labelsShort: ['שנים', 'חודשים', 'ימים', 'שעות', 'דקות', 'שניים', ''],
        startText: 'התחל',
        stopText: 'עצור',
        resetText: 'אתחול',
        lapText: 'הקפה',
        hideText: 'הסתר',
        offText: 'כיבוי',
        onText: 'הפעלה',
        backText: 'חזור',
        undoText: 'ביטול פעולה'
    };
}());
(function() {
    mobiscroll.i18n.hu = {
        setText: 'OK',
        cancelText: 'Mégse',
        clearText: 'Törlés',
        selectedText: '{count} kiválasztva',
        dateFormat: 'yy.mm.dd.',
        dayNames: ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'],
        dayNamesShort: ['Va', 'Hé', 'Ke', 'Sze', 'Csü', 'Pé', 'Szo'],
        dayNamesMin: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
        dayText: 'Nap',
        delimiter: '.',
        hourText: 'Óra',
        minuteText: 'Perc',
        monthNames: ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Már', 'Ápr', 'Máj', 'Jún', 'Júl', 'Aug', 'Szep', 'Okt', 'Nov', 'Dec'],
        monthText: 'Hónap',
        secText: 'Másodperc',
        timeFormat: 'H:ii',
        yearText: 'Év',
        nowText: 'Most',
        pmText: 'de',
        amText: 'du',
        firstDay: 1,
        dateText: 'Dátum',
        timeText: 'Idő',
        calendarText: 'Naptár',
        todayText: 'Ma',
        prevMonthText: 'Előző hónap',
        nextMonthText: 'Következő hónap',
        prevYearText: 'Előző év',
        nextYearText: 'Következő év',
        closeText: 'Bezár',
        eventText: 'esemény',
        eventsText: 'esemény',
        fromText: 'Eleje',
        toText: 'Vége',
        wholeText: 'Egész',
        fractionText: 'Tört',
        unitText: 'Egység',
        labels: ['Év', 'Hónap', 'Nap', 'Óra', 'Perc', 'Másodperc', ''],
        labelsShort: ['Év', 'Hó.', 'Nap', 'Óra', 'Perc', 'Mp.', ''],
        startText: 'Indít',
        stopText: 'Megállít',
        resetText: 'Visszaállít',
        lapText: 'Lap',
        hideText: 'Elrejt',
        backText: 'Vissza',
        undoText: 'Visszavon',
        offText: 'Ki',
        onText: 'Be',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.it = {
        setText: 'OK',
        cancelText: 'Annulla',
        clearText: 'Chiarire',
        selectedText: '{count} selezionato',
        selectedPluralText: '{count} selezionati',
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domenica', 'Lunedì', 'Mertedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
        dayNamesShort: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
        dayNamesMin: ['D', 'L', 'M', 'M', 'G', 'V', 'S'],
        dayText: 'Giorno',
        hourText: 'Ore',
        minuteText: 'Minuti',
        monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
        monthNamesShort: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
        monthText: 'Mese',
        secText: 'Secondi',
        timeFormat: 'HH:ii',
        yearText: 'Anno',
        nowText: 'Ora',
        pmText: 'pm',
        amText: 'am',
        todayText: 'Oggi',
        firstDay: 1,
        dateText: 'Data',
        timeText: 'Volta',
        calendarText: 'Calendario',
        closeText: 'Chiudere',
        fromText: 'Inizio',
        toText: 'Fine',
        wholeText: 'Intero',
        fractionText: 'Frazione',
        unitText: 'Unità',
        labels: ['Anni', 'Mesi', 'Giorni', 'Ore', 'Minuti', 'Secondi', ''],
        labelsShort: ['Anni', 'Mesi', 'Gio', 'Ore', 'Min', 'Sec', ''],
        startText: 'Inizio',
        stopText: 'Arresto',
        resetText: 'Ripristina',
        lapText: 'Lap',
        hideText: 'Nascondi',
        backText: 'Indietro',
        undoText: 'Annulla',
        offText: 'Via',
        onText: 'Su',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.ja = {
        setText: 'セット',
        cancelText: 'キャンセル',
        clearText: 'クリア',
        selectedText: '{count} 選択',
        dateFormat: 'yy年mm月dd日',
        dayNames: ['日', '月', '火', '水', '木', '金', '土'],
        dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
        dayNamesMin: ['日', '月', '火', '水', '木', '金', '土'],
        dayText: '日',
        hourText: '時',
        minuteText: '分',
        monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        monthText: '月',
        secText: '秒',
        timeFormat: 'HH:ii',
        yearText: '年',
        nowText: '今',
        pmText: '午後',
        amText: '午前',
        yearSuffix: '年',
        monthSuffix: '月',
        daySuffix: '日',
        todayText: '今日',
        dateText: '日付',
        timeText: '時間',
        calendarText: 'カレンダー',
        closeText: 'クローズ',
        fromText: '開始',
        toText: '終わり',
        wholeText: '全数',
        fractionText: '分数',
        unitText: '単位',
        labels: ['年間', '月間', '日間', '時間', '分', '秒', ''],
        labelsShort: ['年間', '月間', '日間', '時間', '分', '秒', ''],
        startText: '開始',
        stopText: '停止',
        resetText: 'リセット',
        lapText: 'ラップ',
        hideText: '隠す',
        backText: 'バック',
        undoText: 'アンドゥ'
    };
}());
(function() {
    mobiscroll.i18n.lt = {
        setText: 'OK',
        cancelText: 'Atšaukti',
        clearText: 'Išvalyti',
        selectedText: 'Pasirinktas {count}',
        selectedPluralText: 'Pasirinkti {count}',
        dateFormat: 'yy-mm-dd',
        dayNames: ['Sekmadienis', 'Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis'],
        dayNamesShort: ['S', 'Pr', 'A', 'T', 'K', 'Pn', 'Š'],
        dayNamesMin: ['S', 'Pr', 'A', 'T', 'K', 'Pn', 'Š'],
        dayText: 'Diena',
        hourText: 'Valanda',
        minuteText: 'Minutes',
        monthNames: ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'],
        monthNamesShort: ['Sau', 'Vas', 'Kov', 'Bal', 'Geg', 'Bir', 'Lie', 'Rugp', 'Rugs', 'Spa', 'Lap', 'Gruo'],
        monthText: 'Mėnuo',
        secText: 'Sekundes',
        amText: 'am',
        pmText: 'pm',
        timeFormat: 'HH:ii',
        yearText: 'Metai',
        nowText: 'Dabar',
        todayText: 'Šiandien',
        firstDay: 1,
        dateText: 'Data',
        timeText: 'Laikas',
        calendarText: 'Kalendorius',
        closeText: 'Uždaryti',
        fromText: 'Nuo',
        toText: 'Iki',
        wholeText: 'Visas',
        fractionText: 'Frakcija',
        unitText: 'Vienetas',
        labels: ['Metai', 'Mėnesiai', 'Dienos', 'Valandos', 'Minutes', 'Sekundes', ''],
        labelsShort: ['m', 'mėn.', 'd', 'h', 'min', 's', ''],
        startText: 'Pradėti',
        stopText: 'Sustabdyti',
        resetText: 'Išnaujo',
        lapText: 'Ratas',
        hideText: 'Slėpti',
        backText: 'Atgal',
        undoText: 'Atšaukti veiksmą',
        offText: 'Išj.',
        onText: 'Įj.',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.nl = {
        setText: 'Instellen',
        cancelText: 'Annuleren',
        clearText: 'Duidelijk',
        selectedText: '{count} gekozen',
        dateFormat: 'dd-mm-yy',
        dayNames: ['zondag', 'maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
        dayNamesShort: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
        dayNamesMin: ['z', 'm', 'd', 'w', 'd', 'v', 'z'],
        dayText: 'Dag',
        hourText: 'Uur',
        minuteText: 'Minuten',
        monthNames: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
        monthNamesShort: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
        monthText: 'Maand',
        secText: 'Seconden',
        timeFormat: 'HH:ii',
        yearText: 'Jaar',
        nowText: 'Nu',
        pmText: 'pm',
        amText: 'am',
        todayText: 'Vandaag',
        firstDay: 1,
        dateText: 'Datum',
        timeText: 'Tijd',
        calendarText: 'Kalender',
        closeText: 'Sluiten',
        fromText: 'Start',
        toText: 'Einde',
        wholeText: 'geheel',
        fractionText: 'fractie',
        unitText: 'eenheid',
        labels: ['Jaren', 'Maanden', 'Dagen', 'Uren', 'Minuten', 'Seconden', ''],
        labelsShort: ['j', 'm', 'd', 'u', 'min', 'sec', ''],
        startText: 'Start',
        stopText: 'Stop',
        resetText: 'Reset',
        lapText: 'Ronde',
        hideText: 'Verbergen',
        backText: 'Terug',
        undoText: 'Onged. maken',
        offText: 'Uit',
        onText: 'Aan',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.no = {
        setText: 'OK',
        cancelText: 'Avbryt',
        clearText: 'Tømme',
        selectedText: '{count} valgt',
        dateFormat: 'dd.mm.yy',
        dayNames: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
        dayNamesShort: ['Sø', 'Ma', 'Ti', 'On', 'To', 'Fr', 'Lø'],
        dayNamesMin: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
        dayText: 'Dag',
        delimiter: '.',
        hourText: 'Time',
        minuteText: 'Minutt',
        monthNames: ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
        monthText: 'Måned',
        secText: 'Sekund',
        timeFormat: 'HH:ii',
        yearText: 'År',
        nowText: 'Nå',
        pmText: 'pm',
        amText: 'am',
        todayText: 'I dag',
        firstDay: 1,
        dateText: 'Dato',
        timeText: 'Tid',
        calendarText: 'Kalender',
        closeText: 'Lukk',
        fromText: 'Start',
        toText: 'End',
        wholeText: 'Hele',
        fractionText: 'Fraksjon',
        unitText: 'Enhet',
        labels: ['År', 'Måneder', 'Dager', 'Timer', 'Minutter', 'Sekunder', ''],
        labelsShort: ['År', 'Mån', 'Dag', 'Time', 'Min', 'Sek', ''],
        startText: 'Start',
        stopText: 'Stopp',
        resetText: 'Tilbakestille',
        lapText: 'Runde',
        hideText: 'Skjul',
        backText: 'Tilbake',
        undoText: 'Angre',
        offText: 'Av',
        onText: 'På',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.pl = {
        setText: 'Zestaw',
        cancelText: 'Anuluj',
        clearText: 'Oczyścić',
        selectedText: 'Wybór: {count}',
        dateFormat: 'yy-mm-dd',
        dayNames: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
        dayNamesShort: ['Niedz.', 'Pon.', 'Wt.', 'Śr.', 'Czw.', 'Pt.', 'Sob.'],
        dayNamesMin: ['N', 'P', 'W', 'Ś', 'C', 'P', 'S'],
        dayText: 'Dzień',
        hourText: 'Godziny',
        minuteText: 'Minuty',
        monthNames: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
        monthNamesShort: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
        monthText: 'Miesiąc',
        secText: 'Sekundy',
        timeFormat: 'HH:ii',
        yearText: 'Rok',
        nowText: 'Teraz',
        amText: 'rano',
        pmText: 'po południu',
        todayText: 'Dzisiaj',
        firstDay: 1,
        dateText: 'Data',
        timeText: 'Czas',
        calendarText: 'Kalendarz',
        closeText: 'Zakończenie',
        fromText: 'Rozpoczęcie',
        toText: 'Koniec',
        wholeText: 'Cały',
        fractionText: 'Ułamek',
        unitText: 'Jednostka',
        labels: ['Lata', 'Miesiąc', 'Dni', 'Godziny', 'Minuty', 'Sekundy', ''],
        labelsShort: ['R', 'M', 'Dz', 'Godz', 'Min', 'Sek', ''],
        startText: 'Rozpoczęcie',
        stopText: 'Zatrzymać',
        resetText: 'Zresetować',
        lapText: 'Zakładka',
        hideText: 'Ukryć',
        backText: 'Z powrotem',
        undoText: 'Cofnij',
        offText: 'Wył',
        onText: 'Wł',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n['pt-BR'] = {
        setText: 'Selecionar',
        cancelText: 'Cancelar',
        clearText: 'Claro',
        selectedText: '{count} selecionado',
        selectedPluralText: '{count} selecionados',
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        dayText: 'Dia',
        hourText: 'Hora',
        minuteText: 'Minutos',
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        monthText: 'Mês',
        secText: 'Segundo',
        timeFormat: 'HH:ii',
        yearText: 'Ano',
        nowText: 'Agora',
        pmText: 'da tarde',
        amText: 'da manhã',
        todayText: 'Hoje',
        dateText: 'Data',
        timeText: 'Tempo',
        calendarText: 'Calendário',
        closeText: 'Fechar',
        fromText: 'In&iacute;cio',
        toText: 'Fim',
        wholeText: 'Inteiro',
        fractionText: 'Fração',
        unitText: 'Unidade',
        labels: ['Anos', 'Meses', 'Dias', 'Horas', 'Minutos', 'Segundos', ''],
        labelsShort: ['Ano', 'M&ecirc;s', 'Dia', 'Hora', 'Min', 'Seg', ''],
        startText: 'Começar',
        stopText: 'Pare',
        resetText: 'Reinicializar',
        lapText: 'Lap',
        hideText: 'Esconder',
        backText: 'De volta',
        undoText: 'Desfazer',
        offText: 'Desl',
        onText: 'Lig',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n['pt-PT'] = {
        setText: 'Seleccionar',
        cancelText: 'Cancelar',
        clearText: 'Claro',
        selectedText: '{count} selecionado',
        selectedPluralText: '{count} selecionados',
        dateFormat: 'dd-mm-yy',
        dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'S&aacute;bado'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'S&aacute;b'],
        dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        dayText: 'Dia',
        hourText: 'Horas',
        minuteText: 'Minutos',
        monthNames: ['Janeiro', 'Fevereiro', 'Mar&ccedil;o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        monthText: 'M&ecirc;s',
        secText: 'Segundo',
        timeFormat: 'HH:ii',
        yearText: 'Ano',
        nowText: 'Actualizar',
        pmText: 'da tarde',
        amText: 'da manhã',
        todayText: 'Hoy',
        firstDay: 1,
        dateText: 'Data',
        timeText: 'Tempo',
        calendarText: 'Calend&aacute;rio',
        closeText: 'Fechar',
        fromText: 'In&iacute;cio',
        toText: 'Fim',
        wholeText: 'Inteiro',
        fractionText: 'Frac&ccedil;&atilde;o',
        unitText: 'Unidade',
        labels: ['Anos', 'Meses', 'Dias', 'Horas', 'Minutos', 'Segundos', ''],
        labelsShort: ['Ano', 'M&ecirc;s', 'Dia', 'Hora', 'Min', 'Seg', ''],
        startText: 'Come&ccedil;ar',
        stopText: 'Parar',
        resetText: 'Reinicializar',
        lapText: 'Lap',
        hideText: 'Esconder',
        backText: 'De volta',
        undoText: 'Anular',
        offText: 'Desl',
        onText: 'Lig',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.ro = {
        setText: 'Setare',
        cancelText: 'Anulare',
        clearText: 'Ştergere',
        selectedText: '{count} selectat',
        selectedPluralText: '{count} selectate',
        dateFormat: 'dd.mm.yy',
        dayNames: ['Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'],
        dayNamesShort: ['Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ'],
        dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
        dayText: ' Ziua',
        delimiter: '.',
        hourText: ' Ore ',
        minuteText: 'Minute',
        monthNames: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
        monthNamesShort: ['Ian.', 'Feb.', 'Mar.', 'Apr.', 'Mai', 'Iun.', 'Iul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
        monthText: 'Luna',
        secText: 'Secunde',
        timeFormat: 'HH:ii',
        yearText: 'Anul',
        nowText: 'Acum',
        amText: 'am',
        pmText: 'pm',
        todayText: 'Astăzi',
        firstDay: 1,
        dateText: 'Data',
        timeText: 'Ora',
        calendarText: 'Calendar',
        closeText: 'Închidere',
        fromText: 'Start',
        toText: 'Final',
        wholeText: 'Complet',
        fractionText: 'Parţial',
        unitText: 'Unitate',
        labels: ['Ani', 'Luni', 'Zile', 'Ore', 'Minute', 'Secunde', ''],
        labelsShort: ['Ani', 'Luni', 'Zile', 'Ore', 'Min.', 'Sec.', ''],
        startText: 'Start',
        stopText: 'Stop',
        resetText: 'Resetare',
        lapText: 'Tură',
        hideText: 'Ascundere',
        backText: 'Înapoi',
        undoText: 'Anulaţi',
        offText: 'Nu',
        onText: 'Da',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n['ru-UA'] = {
        setText: 'Установить',
        cancelText: 'Отменить',
        clearText: 'Очиститьr',
        selectedText: '{count} Вібрать',
        dateFormat: 'dd.mm.yy',
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
        dayNamesMin: ['в', 'п', 'в', 'с', 'ч', 'п', 'с'],
        dayText: 'День',
        delimiter: '.',
        hourText: 'Часы',
        minuteText: 'Минуты',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв.', 'Февр.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Нояб.', 'Дек.'],
        monthText: 'Месяцы',
        secText: 'Сикунды',
        timeFormat: 'HH:ii',
        yearText: 'Год',
        nowText: 'Сейчас',
        amText: 'До полудня',
        pmText: 'После полудня',
        todayText: 'Cегодня',
        firstDay: 1,
        dateText: 'Дата',
        timeText: 'Время',
        calendarText: 'Календарь',
        closeText: 'Закрыть',
        fromText: 'Начало',
        toText: 'Конец',
        wholeText: 'Весь',
        fractionText: 'Часть',
        unitText: 'Единица',
        labels: ['Годы', ' Месяцы ', ' Дни ', ' Часы ', ' Минуты ', ' Секунды', ''],
        labelsShort: ['Год', 'Мес.', 'Дн.', 'Ч.', 'Мин.', 'Сек.', ''],
        startText: 'Старт',
        stopText: 'Стоп',
        resetText: ' Сброс ',
        lapText: ' Этап ',
        hideText: ' Скрыть ',
        backText: 'назад',
        undoText: 'аннулировать',
        offText: 'O',
        onText: 'I',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n['ru-RU'] = mobiscroll.i18n.ru = {
        setText: 'Установить',
        cancelText: 'Отмена',
        clearText: 'Очистить',
        selectedText: '{count} Выбрать',
        dateFormat: 'dd.mm.yy',
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
        dayNamesMin: ['в', 'п', 'в', 'с', 'ч', 'п', 'с'],
        dayText: 'День',
        delimiter: '.',
        hourText: 'Час',
        minuteText: 'Минут',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        monthText: 'Месяц',
        secText: 'Секунд',
        timeFormat: 'HH:ii',
        yearText: 'Год',
        nowText: 'Сейчас',
        amText: 'До полудня',
        pmText: 'После полудня',
        todayText: 'Cегодня',
        firstDay: 1,
        dateText: 'Дата',
        timeText: 'Время',
        calendarText: 'Календарь',
        closeText: 'Закрыть',
        fromText: 'Начало',
        toText: 'Конец',
        wholeText: 'Целое',
        fractionText: 'Дробное',
        unitText: 'Единица',
        labels: ['Лет', 'Месяцев', 'Дней', 'Часов', 'Минут', 'Секунд', ''],
        labelsShort: ['Лет', 'Мес', 'Дн', 'Час', 'Мин', 'Сек', ''],
        startText: 'Старт',
        stopText: 'Стоп',
        resetText: 'Сбросить',
        lapText: 'Круг',
        hideText: 'Скрыть',
        backText: 'назад',
        undoText: 'аннулировать',
        offText: 'O',
        onText: 'I',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.sk = {
        setText: 'Zadaj',
        cancelText: 'Zrušiť',
        clearText: 'Vymazať',
        selectedText: 'Označený: {count}',
        dateFormat: 'd.m.yy',
        dayNames: ['Nedeľa', 'Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota'],
        dayNamesShort: ['Ne', 'Po', 'Ut', 'St', 'Št', 'Pi', 'So'],
        dayNamesMin: ['N', 'P', 'U', 'S', 'Š', 'P', 'S'],
        dayText: 'Ďeň',
        hourText: 'Hodiny',
        minuteText: 'Minúty',
        monthNames: ['Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún', 'Júl', 'August', 'September', 'Október', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Máj', 'Jún', 'Júl', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
        monthText: 'Mesiac',
        secText: 'Sekundy',
        timeFormat: 'H:ii',
        yearText: 'Rok',
        nowText: 'Teraz',
        amText: 'am',
        pmText: 'pm',
        todayText: 'Dnes',
        firstDay: 1,
        dateText: 'Datum',
        timeText: 'Čas',
        calendarText: 'Kalendár',
        closeText: 'Zavrieť',
        fromText: 'Začiatok',
        toText: 'Koniec',
        wholeText: 'Celý',
        fractionText: 'Časť',
        unitText: 'Jednotka',
        labels: ['Roky', 'Mesiace', 'Dni', 'Hodiny', 'Minúty', 'Sekundy', ''],
        labelsShort: ['Rok', 'Mes', 'Dni', 'Hod', 'Min', 'Sec', ''],
        startText: 'Start',
        stopText: 'Stop',
        resetText: 'Resetovať',
        lapText: 'Etapa',
        hideText: 'Schovať',
        backText: 'Späť',
        undoText: 'Späť',
        offText: 'O',
        onText: 'I',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.sv = {
        setText: 'OK',
        cancelText: 'Avbryt',
        clearText: 'Klara',
        selectedText: '{count} vald',
        dateFormat: 'yy-mm-dd',
        dayNames: ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'],
        dayNamesShort: ['Sö', 'Må', 'Ti', 'On', 'To', 'Fr', 'Lö'],
        dayNamesMin: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
        dayText: 'Dag',
        hourText: 'Timme',
        minuteText: 'Minut',
        monthNames: ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
        monthText: 'Månad',
        secText: 'Sekund',
        timeFormat: 'HH:ii',
        yearText: 'År',
        nowText: 'Nu',
        pmText: 'pm',
        amText: 'am',
        todayText: 'I dag',
        firstDay: 1,
        dateText: 'Datum',
        timeText: 'Tid',
        calendarText: 'Kalender',
        closeText: 'Stäng',
        fromText: 'Start',
        toText: 'Slut',
        wholeText: 'Hela',
        fractionText: 'Bråk',
        unitText: 'Enhet',
        labels: ['År', 'Månader', 'Dagar', 'Timmar', 'Minuter', 'Sekunder', ''],
        labelsShort: ['År', 'Mån', 'Dag', 'Tim', 'Min', 'Sek', ''],
        startText: 'Start',
        stopText: 'Stopp',
        resetText: 'Återställ',
        lapText: 'Varv',
        hideText: 'Dölj',
        backText: 'Tillbaka',
        undoText: 'Ångra',
        offText: 'Av',
        onText: 'På'
    };
}());
(function() {
    mobiscroll.i18n.tr = {
        setText: 'Seç',
        cancelText: 'İptal',
        clearText: 'Temizleyin',
        selectedText: '{count} seçilmiş',
        dateFormat: 'dd.mm.yy',
        dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
        dayNamesShort: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
        dayNamesMin: ['P', 'P', 'S', 'Ç', 'P', 'C', 'C'],
        dayText: 'Gün',
        delimiter: '.',
        hourText: 'Saat',
        minuteText: 'Dakika',
        monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
        monthNamesShort: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
        monthText: 'Ay',
        secText: 'Saniye',
        timeFormat: 'HH:ii',
        yearText: 'Yıl',
        nowText: 'Şimdi',
        pmText: 'akşam',
        amText: 'sabah',
        todayText: 'Bugün',
        firstDay: 1,
        dateText: 'Tarih',
        timeText: 'Zaman',
        calendarText: 'Takvim',
        closeText: 'Kapatmak',
        fromText: 'Başla',
        toText: 'Son',
        wholeText: 'Tam',
        fractionText: 'Kesir',
        unitText: 'Birim',
        labels: ['Yıl', 'Ay', 'Gün', 'Saat', 'Dakika', 'Saniye', ''],
        labelsShort: ['Yıl', 'Ay', 'Gün', 'Sa', 'Dak', 'Sn', ''],
        startText: 'Başla',
        stopText: 'Durdur',
        resetText: 'Sıfırla',
        lapText: 'Tur',
        hideText: 'Gizle',
        backText: 'Geri',
        undoText: 'Geri Al',
        offText: 'O',
        onText: 'I',
        decimalSeparator: ',',
        thousandsSeparator: '.'
    };
}());
(function() {
    mobiscroll.i18n.zh = {
        setText: '确定',
        cancelText: '取消',
        clearText: '明确',
        selectedText: '{count} 选',
        dateFormat: 'yy/mm/dd',
        dayNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
        dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
        dayText: '日',
        hourText: '时',
        minuteText: '分',
        monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        monthNamesShort: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
        monthText: '月',
        secText: '秒',
        timeFormat: 'HH:ii',
        yearText: '年',
        nowText: '当前',
        pmText: '下午',
        amText: '上午',
        todayText: '今天',
        dateText: '日',
        timeText: '时间',
        calendarText: '日历',
        closeText: '关闭',
        fromText: '开始时间',
        toText: '结束时间',
        wholeText: '合计',
        fractionText: '分数',
        unitText: '单位',
        labels: ['年', '月', '日', '小时', '分钟', '秒', ''],
        labelsShort: ['年', '月', '日', '点', '分', '秒', ''],
        startText: '开始',
        stopText: '停止',
        resetText: '重置',
        lapText: '圈',
        hideText: '隐藏',
        backText: '背部',
        undoText: '复原',
        offText: '关闭',
        onText: '开启',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function(o78, M78, L78) {
	var v78, P78, J78 = mobiscroll,
		y78 = J78.$,
		W78 = J78.platform,
		c78 = J78.util,
		l78 = c78.constrain,
		u78 = c78.isString,
		e78 = c78.getCoord,
		i78 = /(iphone|ipod)/i.test(navigator.userAgent) && W78.majorVersion >= 7,
		m78 = W78.name == 'ios' && W78.majorVersion == 8,
		g78 = 'webkitAnimationEnd.mbsc animationend.mbsc',
		A78 = function() {},
		T78 = function(X78) {
			X78.preventDefault();
		};
	J78.classes.Frame = function(g58, m58, X58) {
		var k58, a78, M58, y58, H78, n58, A58, Y58, B78, e58, D58, z78, E78, p78, F78, N58, G58, x58, s78, d78, Q58, S58, J58, C78, w58, q58, f78, I58, K58, V58, O78, U58, Z58, R78 = this,
			r78 = y78(g58),
			t58 = [],
			b58 = {};
		function i58(R58) {
			if (z78) {
				z78.removeClass('mbsc-fr-btn-a');
			}
			z78 = y78(this);
			if (!z78.hasClass('mbsc-fr-btn-d') && !z78.hasClass('mbsc-fr-btn-nhl')) {
				z78.addClass('mbsc-fr-btn-a');
			}
			if (R58.type === 'mousedown') {
				y78(M78).on('mouseup', j58);
			} else if (R58.type === 'pointerdown') {
				y78(M78).on('pointerup', j58);
			}
		}
		function j58(f58) {
			if (z78) {
				z78.removeClass('mbsc-fr-btn-a');
				z78 = null;
			}
			if (f58.type === 'mouseup') {
				y78(M78).off('mouseup', j58);
			} else if (f58.type === 'pointerup') {
				y78(M78).off('pointerup', j58);
			}
		}
		function P58(H58) {
			if (H58.keyCode == 13) {
				R78.select();
			} else if (H58.keyCode == 27) {
				R78.cancel();
			}
		}
		function v58(r58) {
			if (!r58) {
				J58.focus();
			}
			R78.ariaMessage(f78.ariaMessage);
		}
		function W58(O58) {
			var E58 = v78,
				F58 = f78.focusOnClose;
			R78._markupRemove();
			H78.remove();
			if (F78) {
				y58.removeClass(G58);
				if (S58) {
					a78.css({
						top: '',
						left: ''
					});
					B78.scrollLeft(I58);
					B78.scrollTop(V58);
				}
			}
			if (!O58) {
				if (!E58) {
					E58 = r78;
				}
				setTimeout(function() {
					if (J78.activeInstance) {
						return;
					}
					if (F58 === L78 || F58 === true) {
						P78 = true;
						E58[0].focus();
					} else if (F58) {
						y78(F58)[0].focus();
					}
				}, 200);
			}
			v78 = null;
			R78._isVisible = false;
			N58 = false;
			O78('onHide');
		}
		function L58(B58) {
			clearTimeout(b58[B58.type]);
			b58[B58.type] = setTimeout(function() {
				var p58, a58 = B58.type == 'scroll';
				if (a58 && !K58) {
					return;
				}
				R78.position(!a58);
				if (B58.type == 'orientationchange') {
					C78.style.display = 'none';
					p58 = C78.offsetHeight;
					C78.style.display = '';
				}
			}, 200);
		}
		function l58(z58) {
			if (z58.target.nodeType && !C78.contains(z58.target)) {
				C78.focus();
			}
		}
		function T58() {
			if (y78(M78.activeElement).is('input,textarea')) {
				M78.activeElement.blur();
			}
		}
		function h58(C58, d58) {
			if (C58) {
				C58();
			}
			if (R78.show() !== false) {
				v78 = d58;
				setTimeout(function() {
					P78 = false;
				}, 300);
			}
		}
		function o58() {
			R78._fillValue();
			O78('onSet', {
				valueText: R78._value
			});
		}
		function c58() {
			O78('onCancel', {
				valueText: R78._value
			});
		}
		function u58() {
			R78.setVal(null, true);
		}
		J78.classes.Base.call(this, g58, m58, true);
		R78.position = function(y38) {
			var n38, t38, K38, V38, S38, U38, I38, G38, N38, k38, b38, s58, Y38, Z38, D38, j38, q38 = {},
				Q38 = 0,
				x38 = 0,
				h38 = 0,
				w38 = 0;
			if (q58 || !N58) {
				return;
			}
			R78._position(H78);
			s58 = x58.offsetHeight;
			Y38 = x58.offsetWidth;
			if (U58 === Y38 && Z58 === s58 && y38) {
				return;
			}
			if (R78._isFullScreen || /top|bottom/.test(f78.display)) {
				Y58.width(Y38);
			}
			if (O78('onPosition', {
					target: x58,
					windowWidth: Y38,
					windowHeight: s58
				}) === false || !F78) {
				return;
			}
			y78('.mbsc-comp', H78).each(function() {
				var J38 = J78.instances[this.id];
				if (J38 && J38 !== R78 && J38.position) {
					J38.position();
				}
			});
			if (!R78._isFullScreen && /center|bubble/.test(f78.display)) {
				y78('.mbsc-w-p', H78).each(function() {
					Z38 = this.getBoundingClientRect().width;
					w38 += Z38;
					h38 = Z38 > h38 ? Z38 : h38;
				});
				e58.css({
					'width': w38 > Y38 ? h38 : w38,
					'white-space': w38 > Y38 ? '' : 'nowrap'
				});
			}
			s78 = C78.offsetWidth;
			d78 = C78.offsetHeight;
			R78.scrollLock = K58 = d78 <= s58 && s78 <= Y38;
			if (Q58) {
				Q38 = B78.scrollLeft();
				x38 = B78.scrollTop();
			}
			if (f78.display == 'center') {
				j38 = Math.max(0, Q38 + (Y38 - s78) / 2);
				D38 = Math.max(0, x38 + (s58 - d78) / 2);
			} else if (f78.display == 'bubble') {
				n38 = f78.anchor === L78 ? r78 : y78(f78.anchor);
				I38 = y78('.mbsc-fr-arr-i', H78)[0];
				V38 = n38.offset();
				S38 = V38.top + (p78 ? x38 - a78.offset().top : 0);
				U38 = V38.left + (p78 ? Q38 - a78.offset().left : 0);
				t38 = n38[0].offsetWidth;
				K38 = n38[0].offsetHeight;
				G38 = I38.offsetWidth;
				N38 = I38.offsetHeight;
				j38 = l78(U38 - (s78 - t38) / 2, Q38 + 8, Q38 + Y38 - s78 - 8);
				D38 = S38 - d78 - N38 / 2;
				if (D38 < x38 || S38 > x38 + s58) {
					Y58.removeClass('mbsc-fr-bubble-top').addClass('mbsc-fr-bubble-bottom');
					D38 = S38 + K38 + N38 / 2;
				} else {
					Y58.removeClass('mbsc-fr-bubble-bottom').addClass('mbsc-fr-bubble-top');
				}
				y78('.mbsc-fr-arr', H78).css({
					left: l78(U38 + t38 / 2 - (j38 + (s78 - G38) / 2), 0, G38)
				});
			} else {
				j38 = Q38;
				D38 = f78.display == 'top' ? x38 : Math.max(0, x38 + s58 - d78);
			}
			if (Q58) {
				k38 = Math.max(D38 + d78, p78 ? a78[0].scrollHeight : y78(M78).height());
				b38 = Math.max(j38 + s78, p78 ? a78[0].scrollWidth : y78(M78).width());
				A58.css({
					width: b38,
					height: k38
				});
				if (f78.scroll && f78.display == 'bubble' && (D38 + d78 + 8 > x38 + s58 || S38 > x38 + s58 || S38 + K38 < x38)) {
					q58 = true;
					setTimeout(function() {
						q58 = false;
					}, 300);
					B78.scrollTop(Math.min(S38, D38 + d78 - s58 + 8, k38 - s58));
				}
			}
			q38.top = D38;
			q38.left = j38;
			Y58.css(q38);
			U58 = Y38;
			Z58 = s58;
		};
		R78.attachShow = function(g38, c38) {
			var M38, A38 = y78(g38),
				e38 = A38.prop('readonly');
			if (f78.display !== 'inline') {
				if ((f78.showOnFocus || f78.showOnTap) && A38.is('input,select')) {
					A38.prop('readonly', true).on('mousedown.mbsc', function(o38) {
						o38.preventDefault();
					}).on('focus.mbsc', function() {
						if (R78._isVisible) {
							this.blur();
						}
					});
					M38 = y78('label[for="' + A38.attr('id') + '"]');
					if (!M38.length) {
						M38 = A38.closest('label');
					}
				}
				if (A38.is('select')) {
					return;
				}
				if (f78.showOnFocus) {
					A38.on('focus.mbsc', function() {
						if (!P78) {
							h58(c38, A38);
						}
					});
				}
				if (f78.showOnTap) {
					A38.on('keydown.mbsc', function(u38) {
						if (u38.keyCode == 32 || u38.keyCode == 13) {
							u38.preventDefault();
							u38.stopPropagation();
							h58(c38, A38);
						}
					});
					R78.tap(A38, function() {
						h58(c38, A38);
					});
					if (M38 && M38.length) {
						R78.tap(M38, function() {
							h58(c38, A38);
						});
					}
				}
				t58.push({
					readOnly: e38,
					el: A38,
					lbl: M38
				});
			}
		};
		R78.select = function() {
			if (F78) {
				R78.hide(false, 'set', false, o58);
			} else {
				o58();
			}
		};
		R78.cancel = function() {
			if (F78) {
				R78.hide(false, 'cancel', false, c58);
			} else {
				c58();
			}
		};
		R78.clear = function() {
			R78._clearValue();
			O78('onClear');
			if (F78 && R78._isVisible && !R78.live) {
				R78.hide(false, 'clear', false, u58);
			} else {
				u58();
			}
		};
		R78.enable = function() {
			f78.disabled = false;
			if (R78._isInput) {
				r78.prop('disabled', false);
			}
		};
		R78.disable = function() {
			f78.disabled = true;
			if (R78._isInput) {
				r78.prop('disabled', true);
			}
		};
		R78.show = function(m38, L38) {
			var i38, v38;
			if (f78.disabled || R78._isVisible) {
				return;
			}
			R78._readValue();
			if (O78('onBeforeShow') === false) {
				return false;
			}
			E78 = f78.animate;
			D58 = f78.buttons || [];
			Q58 = p78 || f78.display == 'bubble';
			S58 = i78 && !Q58;
			i38 = D58.length > 0;
			if (E78 !== false) {
				if (f78.display == 'top') {
					E78 = 'slidedown';
				} else if (f78.display == 'bottom') {
					E78 = 'slideup';
				} else if (f78.display == 'center' || f78.display == 'bubble') {
					E78 = f78.animate || 'pop';
				}
			}
			if (F78) {
				G58 = 'mbsc-fr-lock' + (S58 ? ' mbsc-fr-lock-ios' : '') + (p78 ? ' mbsc-fr-lock-ctx' : '');
				V58 = Math.max(0, B78.scrollTop());
				I58 = Math.max(0, B78.scrollLeft());
				U58 = 0;
				Z58 = 0;
				if (S58) {
					a78.css({
						top: -V58 + 'px',
						left: -I58 + 'px'
					});
				}
				y58.addClass(G58);
				T58();
				if (J78.activeInstance) {
					J78.activeInstance.hide();
				}
				J78.activeInstance = R78;
			}
			v38 = '<div lang="' + f78.lang + '" class="mbsc-fr mbsc-no-touch mbsc-' + f78.theme + (f78.baseTheme ? ' mbsc-' + f78.baseTheme : '') + ' mbsc-fr-' + f78.display + ' ' + (f78.cssClass || '') + ' ' + (f78.compClass || '') + (R78._isLiquid ? ' mbsc-fr-liq' : '') + (S58 ? ' mbsc-platform-ios' : '') + (i38 ? D58.length >= 3 ? ' mbsc-fr-btn-block ' : '' : ' mbsc-fr-nobtn') + '">' + (F78 ? '<div class="mbsc-fr-persp"><div class="mbsc-fr-overlay"></div><div role="dialog" tabindex="-1" class="mbsc-fr-scroll">' : '') + '<div class="mbsc-fr-popup' + (f78.rtl ? ' mbsc-rtl' : ' mbsc-ltr') + (f78.headerText ? ' mbsc-fr-has-hdr' : '') + '">' + (f78.display === 'bubble' ? '<div class="mbsc-fr-arr-w"><div class="mbsc-fr-arr-i"><div class="mbsc-fr-arr"></div></div></div>' : '') + '<div class="mbsc-fr-w">' + '<div aria-live="assertive" class="mbsc-fr-aria mbsc-fr-hdn"></div>' + (f78.headerText ? '<div class="mbsc-fr-hdr">' + (u78(f78.headerText) ? f78.headerText : '') + '</div>' : '') + '<div class="mbsc-fr-c">';
			v38 += R78._generateContent();
			v38 += '</div>';
            if (i38) {
                v38 += '<div class="mbsc-fr-btn-cont">';
                y78.each(D58, function(b, a) {
                    a = u78(a) ? R78.buttons[a] : a;
                    if (a.handler === 'set') {
                        a.parentClass = 'mbsc-fr-btn-s';
                    }
                    if (a.handler === 'cancel') {
                        a.parentClass = 'mbsc-fr-btn-c';
                    }
                    v38 += '<div' + (f78.btnWidth ? ' style="width:' + 100 / D58.length + '%"' : '') + ' class="mbsc-fr-btn-w ' + (a.parentClass || '') + '"><div tabindex="0" role="button" class="mbsc-fr-btn' + b + ' mbsc-fr-btn-e ' + (a.cssClass === L78 ? f78.btnClass : a.cssClass) + (a.icon ? ' mbsc-ic mbsc-ic-' + a.icon : '') + '">' + (a.text || '') + '</div></div>';
                });
                v38 += '</div>';
            }
            v38 += '</div></div></div></div>' + (F78 ? '</div></div>' : '');
			H78 = y78(v38);
			A58 = y78('.mbsc-fr-persp', H78);
			n58 = y78('.mbsc-fr-scroll', H78);
			e58 = y78('.mbsc-fr-w', H78);
			M58 = y78('.mbsc-fr-hdr', H78);
			Y58 = y78('.mbsc-fr-popup', H78);
			k58 = y78('.mbsc-fr-aria', H78);
			x58 = H78[0];
			J58 = n58[0];
			C78 = Y58[0];
			R78._markup = H78;
			R78._header = M58;
			R78._isVisible = true;
			w58 = 'orientationchange resize';
			R78._markupReady(H78);
			O78('onMarkupReady', {
				target: x58
			});
			if (F78) {
				y78(o78).on('keydown', P58);
				if (f78.scrollLock) {
					H78.on('touchmove mousewheel wheel', function(X38) {
						if (K58) {
							X38.preventDefault();
						}
					});
				}
				if (f78.focusTrap) {
					B78.on('focusin', l58);
				}
				if (f78.closeOnOverlayTap) {
					var W38, P38, l38, T38;
					n58.on('touchstart mousedown', function(R38) {
						if (!P38 && R38.target == n58[0]) {
							P38 = true;
							W38 = false;
							l38 = e78(R38, 'X');
							T38 = e78(R38, 'Y');
						}
					}).on('touchmove mousemove', function(f38) {
						if (P38 && !W38 && (Math.abs(e78(f38, 'X') - l38) > 9 || Math.abs(e78(f38, 'Y') - T38) > 9)) {
							W38 = true;
						}
					}).on('touchcancel', function() {
						P38 = false;
					}).on('touchend touchcancel mouseup', function(H38) {
						if (P38 && !W38) {
							R78.cancel();
							if (H38.type != 'mouseup') {
								c78.preventClick();
							}
						}
						P38 = false;
					});
				}
				if (Q58) {
					w58 += ' scroll';
				}
			}
			setTimeout(function() {
				if (F78) {
					H78.appendTo(a78);
				} else if (r78.is('div') && !R78._hasContent) {
					r78.empty().append(H78);
				} else {
					if (r78.hasClass('mbsc-control')) {
						var r38 = r78.closest('.mbsc-control-w');
						H78.insertAfter(r38);
						if (r38.hasClass('mbsc-select')) {
							r38.addClass('mbsc-select-inline');
						}
					} else {
						H78.insertAfter(r78);
					}
				}
				N58 = true;
				R78._markupInserted(H78);
				O78('onMarkupInserted', {
					target: x58
				});
				H78.on('selectstart mousedown', T78).on('click', '.mbsc-fr-btn-e', T78).on('keydown', '.mbsc-fr-btn-e', function(F38) {
					if (F38.keyCode == 32) {
						F38.preventDefault();
						F38.stopPropagation();
						this.click();
					}
				}).on('keydown', function(E38) {
					if (E38.keyCode == 32) {
						E38.preventDefault();
					} else if (E38.keyCode == 9 && F78 && f78.focusTrap) {
						var O38 = H78.find('[tabindex="0"]').filter(function() {
								return this.offsetWidth > 0 || this.offsetHeight > 0;
							}),
							p38 = O38.index(y78(':focus', H78)),
							B38 = O38.length - 1,
							a38 = 0;
						if (E38.shiftKey) {
							B38 = 0;
							a38 = -1;
						}
						if (p38 === B38) {
							O38.eq(a38)[0].focus();
							E38.preventDefault();
						}
					}
				}).on('touchstart mousedown pointerdown', '.mbsc-fr-btn-e', i58).on('touchend', '.mbsc-fr-btn-e', j58).on('touchstart', function() {
					H78.removeClass('mbsc-no-touch');
				});
				y78('input,select,textarea', H78).on('selectstart mousedown', function(z38) {
					z38.stopPropagation();
				}).on('keydown', function(C38) {
					if (C38.keyCode == 32) {
						C38.stopPropagation();
					}
				});
				y78.each(D58, function(s38, d38) {
					R78.tap(y78('.mbsc-fr-btn' + s38, H78), function(x48) {
						d38 = u78(d38) ? R78.buttons[d38] : d38;
						(u78(d38.handler) ? R78.handlers[d38.handler] : d38.handler).call(this, x48, R78);
					}, true);
				});
				R78._attachEvents(H78);
				R78.position();
				B78.on(w58, L58);
				if (F78) {
					if (E78 && !m38) {
						H78.addClass('mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-' + E78).on(g78, function() {
							H78.off(g78).removeClass('mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-' + E78).find('.mbsc-fr-popup').removeClass('mbsc-anim-' + E78);
							v58(L38);
						}).find('.mbsc-fr-popup').addClass('mbsc-anim-' + E78);
					} else {
						v58(L38);
					}
				}
				O78('onShow', {
					target: x58,
					valueText: R78._tempValue
				});
			}, S58 ? 100 : 0);
		};
		R78.hide = function(Y48, D48, S48, Q48) {
			if (!R78._isVisible || !S48 && !R78._isValid && D48 == 'set' || !S48 && O78('onBeforeClose', {
					valueText: R78._tempValue,
					button: D48
				}) === false) {
				return false;
			}
			if (H78) {
				if (F78 && E78 && !Y48 && !H78.hasClass('mbsc-anim-trans')) {
					H78.addClass('mbsc-anim-out mbsc-anim-trans mbsc-anim-trans-' + E78).on(g78, function() {
						H78.off(g78);
						W58(Y48);
					}).find('.mbsc-fr-popup').addClass('mbsc-anim-' + E78);
				} else {
					W58(Y48);

				}
				R78._detachEvents(H78);
				B78.off(w58, L58).off('focusin', l58);
			}
			if (F78) {
				T58();
				y78(o78).off('keydown', P58);
				delete J78.activeInstance;
			}
			if (Q48) {
				Q48();
			}
			O78('onClose', {
				valueText: R78._value
			});
		};
		R78.ariaMessage = function(j48) {
			k58.html('');
			setTimeout(function() {
				k58.html(j48);
			}, 100);
		};
		R78.isVisible = function() {
			return R78._isVisible;
		};
		R78.setVal = A78;
		R78.getVal = A78;
		R78._generateContent = A78;
		R78._attachEvents = A78;
		R78._detachEvents = A78;
		R78._readValue = A78;
		R78._clearValue = A78;
		R78._fillValue = A78;
		R78._markupReady = A78;
		R78._markupInserted = A78;
		R78._markupRemove = A78;
		R78._position = A78;
		R78.__processSettings = A78;
		R78.__init = A78;
		R78._destroy = function() {
			R78.hide(true, false, true);
			y78.each(t58, function(w48, h48) {
				h48.el.off('.mbsc').prop('readonly', h48.readOnly);
				if (h48.lbl) {
					h48.lbl.off('.mbsc');
				}
			});
		};
		R78._processSettings = function() {
			var n48, Z48;
			f78.buttons = f78.buttons || (f78.display !== 'inline' ? ['set', 'cancel'] : []);
			f78.headerText = f78.headerText === L78 ? f78.display !== 'inline' ? '{value}' : false : f78.headerText;
			D58 = f78.buttons || [];
			F78 = f78.display !== 'inline';
			p78 = f78.context != 'body';
			a78 = y78(f78.context);
			y58 = p78 ? a78 : y78('body,html');
			R78._isLiquid = (f78.layout || (/top|bottom|inline/.test(f78.display) ? 'liquid' : '')) === 'liquid';
			R78._window = B78 = y78(p78 ? f78.context : o78);
			R78._context = a78;
			R78.live = true;
			for (Z48 = 0; Z48 < D58.length; Z48++) {
				n48 = D58[Z48];
				if (n48 == 'ok' || n48 == 'set' || n48.handler == 'set') {
					R78.live = false;
				}
			}
			R78.buttons.set = {
				text: f78.setText,
				handler: 'set'
			};
			R78.buttons.cancel = {
				text: R78.live ? f78.closeText : f78.cancelText,
				handler: 'cancel'
			};
			R78.buttons.clear = {
				text: f78.clearText,
				handler: 'clear'
			};
			R78._isInput = r78.is('input');
			R78.__processSettings();
		};
		R78._init = function() {
			if (R78._isVisible) {
				R78.hide(true, false, true);
			}
			r78.off('.mbsc');
			R78.__init();
			if (F78) {
				R78._readValue();
				if (!R78._hasContent) {
					R78.attachShow(r78);
				}
			} else {
				R78.show();
			}
			r78.on('change.mbsc', function() {
				if (!R78._preventChange) {
					R78.setVal(r78.val(), true, false);
				}
				R78._preventChange = false;
			});
		};
		R78.buttons = {};
		R78.handlers = {
			set: R78.select,
			cancel: R78.cancel,
			clear: R78.clear
		};
		R78._value = null;
		R78._isValid = true;
		R78._isVisible = false;
		f78 = R78.settings;
		O78 = R78.trigger;
		if (!X58) {
			R78.init(m58);
		}
	};
	J78.classes.Frame.prototype._defaults = {
		lang: 'en',
		setText: 'Set',
		selectedText: '{count} selected',
		closeText: 'Close',
		cancelText: 'Cancel',
		clearText: 'Clear',
		context: 'body',
		disabled: false,
		closeOnOverlayTap: true,
		showOnFocus: false,
		showOnTap: true,
		display: 'center',
		scroll: true,
		scrollLock: true,
		tap: true,
		btnClass: 'mbsc-fr-btn',
		btnWidth: true,
		focusTrap: true,
		focusOnClose: !m78
	};
	J78.themes.frame.mobiscroll = {
		headerText: false,
		btnWidth: false
	};
	J78.themes.scroller.mobiscroll = y78.extend({}, J78.themes.frame.mobiscroll, {
		rows: 5,
		showLabel: false,
		selectedLineBorder: 1,
		weekDays: 'min',
		checkIcon: 'ion-ios7-checkmark-empty',
		btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down5',
		btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up5',
		btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left5',
		btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right5'
	});
	y78(o78).on('focus', function() {
		if (v78) {
			P78 = true;
		}
	});
}(window, document));
     (function() {
         var P2 = mobiscroll,
             c2 = P2.themes,
             R2 = P2.$;
         c2.frame['android-holo'] = {};
         c2.scroller['android-holo'] = R2.extend({}, c2.frame['android-holo'], {
             dateDisplay: 'Mddyy',
             rows: 5,
             minWidth: 76,
             height: 36,
             showLabel: false,
             selectedLineHeight: true,
             selectedLineBorder: 2,
             useShortLabels: true,
             icon: {
                 filled: 'star3',
                 empty: 'star'
             },
             btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down6',
             btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up6'
         });
     }());
     (function() {
         var E2 = mobiscroll,
             m2 = E2.themes,
             A2 = E2.$;
         m2.frame.ios = {
             display: 'bottom',
             headerText: false,
             btnWidth: false,
             deleteIcon: 'ios-backspace',
             scroll3d: true
         };
         m2.scroller.ios = A2.extend({}, m2.frame.ios, {
             rows: 5,
             height: 34,
             minWidth: 55,
             selectedLineHeight: true,
             selectedLineBorder: 1,
             showLabel: false,
             useShortLabels: true,
             btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down5',
             btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up5',
             checkIcon: 'ion-ios7-checkmark-empty',
             dateDisplay: 'MMdyy',
             btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left5',
             btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right5'
         });
     }());
     (function() {
         var W2 = mobiscroll,
             N2 = W2.$;
         W2.themes.frame.jqm = {
             jqmBody: 'a',
             jqmBorder: 'a',
             jqmLine: 'b',
             jqmSet: 'b',
             jqmCancel: 'c',
             disabledClass: 'ui-disabled',
             activeClass: 'ui-btn-active',
             activeTabInnerClass: 'ui-btn-active',
             onInit: function() {
                 N2(this).closest('.ui-field-contain').trigger('create');
             },
             onMarkupInserted: function(G2, Q2) {
                 var T2 = Q2.settings,
                     O2 = N2(G2.target);
                 N2('.mbsc-np-btn, .mbsc-cal-sc-m-cell .mbsc-cal-sc-cell-i', O2).addClass('ui-btn');
                 N2('.mbsc-fr-btn-cont .mbsc-fr-btn, .mbsc-range-btn', O2).addClass('ui-btn ui-mini ui-corner-all');
                 N2('.mbsc-cal-prev .mbsc-cal-btn-txt', O2).addClass('ui-btn ui-icon-arrow-l ui-btn-icon-notext ui-shadow ui-corner-all');
                 N2('.mbsc-cal-next .mbsc-cal-btn-txt', O2).addClass('ui-btn ui-icon-arrow-r ui-btn-icon-notext ui-shadow ui-corner-all');
                 N2('.mbsc-fr-popup', O2).removeClass('dwbg').addClass('ui-selectmenu ui-overlay-shadow ui-corner-all ui-body-' + T2.jqmBorder);
                 N2('.mbsc-fr-btn-s .mbsc-fr-btn', O2).addClass('ui-btn-' + T2.jqmSet);
                 N2('.mbsc-fr-hdr', O2).addClass('ui-header ui-bar-inherit');
                 N2('.mbsc-fr-w', O2).addClass('ui-corner-all ui-body-' + T2.jqmBody);
                 N2('.mbsc-sc-btn', O2).addClass('ui-btn ui-mini ui-corner-all ui-btn-icon-top');
                 N2('.mbsc-sc-btn-plus', O2).addClass('ui-icon-carat-d');
                 N2('.mbsc-sc-btn-minus', O2).addClass('ui-icon-carat-u');
                 N2('.mbsc-sc-whl-l', O2).addClass('ui-body-' + T2.jqmLine);
                 N2('.mbsc-cal-tabs', O2).attr('data-role', 'navbar');
                 N2('.mbsc-cal-prev .mbsc-cal-btn-txt', O2).attr('data-role', 'button').attr('data-icon', 'arrow-l').attr('data-iconpos', 'notext');
                 N2('.mbsc-cal-next .mbsc-cal-btn-txt', O2).attr('data-role', 'button').attr('data-icon', 'arrow-r').attr('data-iconpos', 'notext');
                 N2('.mbsc-cal-events', O2).attr('data-role', 'page');
                 N2('.mbsc-range-btn', O2).attr('data-role', 'button').attr('data-mini', 'true');
                 N2('.mbsc-np-btn', O2).attr('data-role', 'button').attr('data-corners', 'false');
                 O2.trigger('create');
             }
         };
         W2.themes.scroller.jqm = N2.extend({}, W2.themes.frame.jqm, {
             dateDisplay: 'Mddyy',
             onEventBubbleShow: function(X2) {
                 N2('.mbsc-cal-event-list', X2.eventList).attr('data-role', 'listview');
                 N2(X2.eventList).page().trigger('create');
             },
             btnCalPrevClass: '',
             btnCalNextClass: '',
             selectedLineHeight: true,
             selectedLineBorder: 1,
             checkIcon: 'none ui-btn-icon-left ui-icon-check',
             onThemeLoad: function(n3) {
                 var g2 = n3.settings,
                     Y3 = g2.jqmBody || 'c',
                     L3 = g2.jqmEventBubble || 'a';
                 g2.dayClass = 'ui-body-a ui-body-' + Y3;
                 g2.innerDayClass = 'ui-state-default ui-btn ui-btn-up-' + Y3;
                 g2.calendarClass = 'ui-body-a ui-body-' + Y3;
                 g2.weekNrClass = 'ui-body-a ui-body-' + Y3;
                 g2.eventBubbleClass = 'ui-body-' + L3;
             }
         });
     }());
     (function() {
         var F3 = mobiscroll,
             o3 = F3.$,
             k3 = F3.themes;
         k3.frame.wp = {
             headerText: false,
             deleteIcon: 'backspace4',
             btnWidth: false,
             onProcessSettings: function(K3, U3) {
                 var x3 = U3.buttons;
                 if (x3) {
                     x3.set.icon = 'checkmark';
                     x3.cancel.icon = 'close';
                     x3.clear.icon = 'close';
                     if (x3.ok) {
                         x3.ok.icon = 'checkmark';
                     }
                     if (x3.close) {
                         x3.close.icon = 'close';
                     }
                     if (x3.now) {
                         x3.now.icon = 'loop2';
                     }
                     if (x3.toggle) {
                         x3.toggle.icon = 'play3';
                     }
                     if (x3.start) {
                         x3.start.icon = 'play3';
                     }
                     if (x3.stop) {
                         x3.stop.icon = 'pause2';
                     }
                     if (x3.reset) {
                         x3.reset.icon = 'stop2';
                     }
                     if (x3.lap) {
                         x3.lap.icon = 'loop2';
                     }
                     if (x3.hide) {
                         x3.hide.icon = 'close';
                     }
                 }
             }
         };
         k3.scroller.wp = o3.extend({}, k3.frame.wp, {
             minWidth: 76,
             height: 76,
             dateDisplay: 'mmMMddDDyy',
             showLabel: false,
             icon: {
                 filled: 'star3',
                 empty: 'star'
             },
             btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left2',
             btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right2',
             btnPlusClass: 'mbsc-ic mbsc-ic-plus',
             btnMinusClass: 'mbsc-ic mbsc-ic-minus',
             onMarkupInserted: function(q3, B3) {
                 var D3, r3, a3, s3 = o3(q3.target),
                     M3 = B3.settings;
                 function u3(j3) {
                     return o3.isArray(M3.readonly) ? M3.readonly[j3] : M3.readonly;
                 }
                 o3('.mbsc-sc-whl', s3).on('touchstart mousedown wheel mousewheel', function(y3) {
                     if (y3.type === 'mousedown' && r3 || u3(o3(this).attr('data-index'))) {
                         return;
                     }
                     r3 = y3.type === 'touchstart';
                     D3 = true;
                     a3 = o3(this).hasClass('mbsc-sc-whl-wpa');
                     o3('.mbsc-sc-whl', s3).removeClass('mbsc-sc-whl-wpa');
                     o3(this).addClass('mbsc-sc-whl-wpa');
                 }).on('touchmove mousemove', function() {
                     D3 = false;
                 }).on('touchend mouseup', function(J3) {
                     if (D3 && a3 && o3(J3.target).closest('.mbsc-sc-itm').hasClass('mbsc-sc-itm-sel')) {
                         o3(this).removeClass('mbsc-sc-whl-wpa');
                     }
                     if (J3.type === 'mouseup') {
                         r3 = false;
                     }
                     D3 = false;
                 });
             }
         });
     }());
     (function(S3) {
         var b3 = mobiscroll,
             I3 = b3.$,
             f3 = b3.classes,
             v3 = b3.util,
             e3 = v3.constrain,
             C3 = v3.jsPrefix,
             R3 = v3.prefix,
             Z3 = v3.getCoord,
             h3 = v3.getPosition,
             z3 = v3.testTouch,
             V3 = v3.isNumeric,
             H3 = v3.isString,
             c3 = /(iphone|ipod|ipad)/i.test(navigator.userAgent),
             P3 = function() {},
             d3 = window.requestAnimationFrame || function(m3) {
                 m3();
             },
             l3 = window.cancelAnimationFrame || P3;
         f3.ScrollView = function(K9, S9, R9) {
             var X3, f9, s9, q9, r9, N3, V9, M9, t9, Z9, P9, A3, D9, m9, g3, k9, Y9, a9, F9, p9, y9, x9, U9, h9, B9, O3, G3, T3, l9, e9, d9, b9, L9, I9, Q3, E3, i3 = this,
                 W3, n9 = 0,
                 u9 = 1,
                 w3 = S9,
                 o9 = I3(K9);
             function z9(w9) {
                 Q3('onStart');
                 if (w3.stopProp) {
                     w9.stopPropagation();
                 }
                 if (w3.prevDef || w9.type == 'mousedown') {
                     w9.preventDefault();
                 }
                 if (w3.readonly || w3.lock && F9) {
                     return;
                 }
                 if (z3(w9, this) && !a9 && mobiscroll.oCgcI) {
                     if (X3) {
                         X3.removeClass('mbsc-btn-a');
                     }
                     D9 = false;
                     if (!F9) {
                         X3 = I3(w9.target).closest('.mbsc-btn-e', this);
                         if (X3.length && !X3.hasClass('mbsc-btn-d')) {
                             D9 = true;
                             f9 = setTimeout(function() {
                                 X3.addClass('mbsc-btn-a');
                             }, 100);
                         }
                     }
                     a9 = true;
                     U9 = false;
                     p9 = false;
                     i3.scrolled = F9;
                     e9 = Z3(w9, 'X');
                     d9 = Z3(w9, 'Y');
                     Z9 = m9 = e9;
                     q9 = 0;
                     r9 = 0;
                     N3 = 0;
                     l9 = new Date();
                     T3 = +h3(L9, E3) || 0;
                     if (F9) {
                         j9(T3, c3 ? 0 : 1);
                     }
                     if (w9.type === 'mousedown') {
                         I3(document).on('mousemove', v9).on('mouseup', J9);
                     }
                 }
             }
             function v9(E9) {
                 if (a9) {
                     if (w3.stopProp) {
                         E9.stopPropagation();
                     }
                     Z9 = Z3(E9, 'X');
                     P9 = Z3(E9, 'Y');
                     q9 = Z9 - e9;
                     r9 = P9 - d9;
                     N3 = E3 ? r9 : q9;
                     if (D9 && (Math.abs(r9) > 5 || Math.abs(q9) > 5)) {
                         clearTimeout(f9);
                         X3.removeClass('mbsc-btn-a');
                         D9 = false;
                     }
                     if (i3.scrolled || !p9 && Math.abs(N3) > 5) {
                         if (!U9) {
                             Q3('onGestureStart', A3);
                         }
                         i3.scrolled = U9 = true;
                         if (!x9) {
                             x9 = true;
                             y9 = d3(c9);
                         }
                     }
                     if (E3 || w3.scrollLock) {
                         E9.preventDefault();
                     } else {
                         if (i3.scrolled) {
                             E9.preventDefault();
                         } else if (Math.abs(r9) > 7) {
                             p9 = true;
                             i3.scrolled = true;
                             o9.trigger('touchend');
                         }
                     }
                 }
             }
             function c9() {
                 if (k9) {
                     N3 = e3(N3, -O3 * k9, O3 * k9);
                 }
                 j9(e3(T3 + N3, Y9 - t9, g3 + t9));
                 x9 = false;
             }
             function J9(N9) {
                 if (a9) {
                     var i9, A9 = new Date() - l9;
                     if (w3.stopProp) {
                         N9.stopPropagation();
                     }
                     l3(y9);
                     x9 = false;
                     if (!p9 && i3.scrolled) {
                         if (w3.momentum && A9 < 300) {
                             i9 = N3 / A9;
                             N3 = Math.max(Math.abs(N3), i9 * i9 / w3.speedUnit) * (N3 < 0 ? -1 : 1);
                         }
                         C9(N3);
                     }
                     if (D9) {
                         clearTimeout(f9);
                         X3.addClass('mbsc-btn-a');
                         setTimeout(function() {
                             X3.removeClass('mbsc-btn-a');
                         }, 100);
                         if (!p9 && !i3.scrolled) {
                             Q3('onBtnTap', {
                                 target: X3[0]
                             });
                         }
                     }
                     if (N9.type == 'mouseup') {
                         I3(document).off('mousemove', v9).off('mouseup', J9);
                     }
                     a9 = false;
                 }
             }
             function H9(W9) {
                 W9 = W9.originalEvent || W9;
                 N3 = E3 ? W9.deltaY || W9.wheelDelta || W9.detail : W9.deltaX;
                 Q3('onStart');
                 if (w3.stopProp) {
                     W9.stopPropagation();
                 }
                 if (N3) {
                     W9.preventDefault();
                     if (W9.deltaMode && W9.deltaMode == 1) {
                         N3 *= 5;
                     }
                     N3 = e3(-N3, -20, 20);
                     T3 = W3;
                     if (w3.readonly || T3 + N3 < Y9 || T3 + N3 > g3) {
                         return;
                     }
                     if (!U9) {
                         A3 = {
                             posX: E3 ? 0 : W3,
                             posY: E3 ? W3 : 0,
                             originX: E3 ? 0 : T3,
                             originY: E3 ? T3 : 0,
                             direction: N3 > 0 ? E3 ? 270 : 360 : E3 ? 90 : 180
                         };
                         Q3('onGestureStart', A3);
                     }
                     if (!x9) {
                         x9 = true;
                         y9 = d3(c9);
                     }
                     U9 = true;
                     clearTimeout(h9);
                     h9 = setTimeout(function() {
                         l3(y9);
                         x9 = false;
                         U9 = false;
                         C9(N3);
                     }, 200);
                 }
             }
             function C9(G9) {
                 var O9, Q9, T9;
                 if (k9) {
                     G9 = e3(G9, -O3 * k9, O3 * k9);
                 }
                 T9 = e3(Math.round((T3 + G9) / O3) * O3, Y9, g3);
                 n9 = Math.round(T9 / O3);
                 if (G3) {
                     if (G9 < 0) {
                         for (O9 = G3.length - 1; O9 >= 0; O9--) {
                             if (Math.abs(T9) + s9 >= G3[O9].breakpoint) {
                                 n9 = O9;
                                 u9 = 2;
                                 T9 = G3[O9].snap2;
                                 break;
                             }
                         }
                     } else if (G9 >= 0) {
                         for (O9 = 0; O9 < G3.length; O9++) {
                             if (Math.abs(T9) <= G3[O9].breakpoint) {
                                 n9 = O9;
                                 u9 = 1;
                                 T9 = G3[O9].snap1;
                                 break;
                             }
                         }
                     }
                     T9 = e3(T9, Y9, g3);
                 }
                 Q9 = w3.time || (W3 < Y9 || W3 > g3 ? 1000 : Math.max(1000, Math.abs(T9 - W3) * w3.timeUnit));
                 A3.destinationX = E3 ? 0 : T9;
                 A3.destinationY = E3 ? T9 : 0;
                 A3.duration = Q9;
                 A3.transitionTiming = M9;
                 Q3('onGestureEnd', A3);
                 j9(T9, Q9);
             }
             function j9(X9, g9, k8, o8) {
                 var L8 = X9 != W3,
                     n8 = g9 > 1,
                     Y8 = function() {
                         clearInterval(B9);
                         clearTimeout(I9);
                         F9 = false;
                         W3 = X9;
                         A3.posX = E3 ? 0 : X9;
                         A3.posY = E3 ? X9 : 0;
                         if (L8) {
                             Q3('onMove', A3);
                         }
                         if (n8) {
                             Q3('onAnimationEnd', A3);
                         }
                         if (o8) {
                             o8();
                         }
                     };
                 A3 = {
                     posX: E3 ? 0 : W3,
                     posY: E3 ? W3 : 0,
                     originX: E3 ? 0 : T3,
                     originY: E3 ? T3 : 0,
                     direction: X9 - W3 > 0 ? E3 ? 270 : 360 : E3 ? 90 : 180
                 };
                 W3 = X9;
                 if (n8) {
                     A3.destinationX = E3 ? 0 : X9;
                     A3.destinationY = E3 ? X9 : 0;
                     A3.duration = g9;
                     A3.transitionTiming = M9;
                     Q3('onAnimationStart', A3);
                 }
                 b9[C3 + 'Transition'] = g9 ? R3 + 'transform ' + Math.round(g9) + 'ms ' + M9 : '';
                 b9[C3 + 'Transform'] = 'translate3d(' + (E3 ? '0,' + X9 + 'px,' : X9 + 'px,' + '0,') + '0)';
                 if (!L8 && !F9 || !g9 || g9 <= 1) {
                     Y8();
                 } else if (g9) {
                     F9 = !k8;
                     clearInterval(B9);
                     B9 = setInterval(function() {
                         var F8 = +h3(L9, E3) || 0;
                         A3.posX = E3 ? 0 : F8;
                         A3.posY = E3 ? F8 : 0;
                         Q3('onMove', A3);
                         if (Math.abs(F8 - X9) < 2) {
                             Y8();
                         }
                     }, 100);
                     clearTimeout(I9);
                     I9 = setTimeout(function() {
                         Y8();
                     }, g9);
                 }
                 if (w3.sync) {
                     w3.sync(X9, g9, M9);
                 }
             }
             f3.Base.call(this, K9, S9, true);
             i3.scrolled = false;
             i3.scroll = function(x8, U8, K8, p8) {
                 if (!V3(x8)) {
                     x8 = Math.ceil((I3(x8, K9).length ? Math.round(L9.offset()[V9] - I3(x8, K9).offset()[V9]) : W3) / O3) * O3;
                 } else {
                     x8 = Math.round(x8 / O3) * O3;
                 }
                 x8 = e3(x8, Y9, g3);
                 n9 = Math.round(x8 / O3);
                 T3 = W3;
                 j9(x8, U8, K8, p8);
             };
             i3.refresh = function(M8) {
                 var D8;
                 s9 = w3.contSize === S3 ? E3 ? o9.height() : o9.width() : w3.contSize;
                 Y9 = w3.minScroll === S3 ? Math.min(0, E3 ? s9 - L9.height() : s9 - L9.width()) : w3.minScroll;
                 g3 = w3.maxScroll === S3 ? 0 : w3.maxScroll;
                 G3 = null;
                 if (!E3 && w3.rtl) {
                     D8 = g3;
                     g3 = -Y9;
                     Y9 = -D8;
                 }
                 if (H3(w3.snap)) {
                     G3 = [];
                     L9.find(w3.snap).each(function() {
                         var r8 = E3 ? this.offsetTop : this.offsetLeft,
                             s8 = E3 ? this.offsetHeight : this.offsetWidth;
                         G3.push({
                             breakpoint: r8 + s8 / 2,
                             snap1: -r8,
                             snap2: s9 - r8 - s8
                         });
                     });
                 }
                 O3 = V3(w3.snap) ? w3.snap : 1;
                 k9 = w3.snap ? w3.maxSnapScroll : 0;
                 M9 = w3.easing;
                 t9 = w3.elastic ? V3(w3.snap) ? O3 : V3(w3.elastic) ? w3.elastic : 0 : 0;
                 if (W3 === S3) {
                     W3 = w3.initialPos;
                     n9 = Math.round(W3 / O3);
                 }
                 if (!M8) {
                     i3.scroll(w3.snap ? G3 ? G3[n9]['snap' + u9] : n9 * O3 : W3);
                 }
             };
             i3._processSettings = function() {
                 E3 = w3.axis == 'Y';
                 V9 = E3 ? 'top' : 'left';
                 L9 = w3.moveElement || o9.children().eq(0);
                 b9 = L9[0].style;
             };
             i3._init = function() {
                 i3.refresh();
                 o9.on('touchstart mousedown', z9).on('touchmove', v9).on('touchend touchcancel', J9);
                 if (w3.mousewheel) {
                     o9.on('wheel mousewheel', H9);
                 }
                 if (K9.addEventListener) {
                     K9.addEventListener('click', function(a8) {
                         if (i3.scrolled) {
                             i3.scrolled = false;
                             a8.stopPropagation();
                             a8.preventDefault();
                         }
                     }, true);
                 }
             };
             i3._destroy = function() {
                 clearInterval(B9);
                 o9.off('touchstart mousedown', z9).off('touchmove', v9).off('touchend touchcancel', J9).off('wheel mousewheel', H9);
             };
             w3 = i3.settings;
             Q3 = i3.trigger;
             if (!R9) {
                 i3.init(S9);
             }
         };
         f3.ScrollView.prototype = {
             _class: 'scrollview',
             _defaults: {
                 speedUnit: 0.0022,
                 timeUnit: 3,
                 initialPos: 0,
                 axis: 'Y',
                 easing: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
                 stopProp: true,
                 momentum: true,
                 mousewheel: true,
                 elastic: true
             }
         };
         b3.presetShort('scrollview', 'ScrollView', false);
     }());
     (function(f8, V8, B8) {
         var j8 = mobiscroll,
             q8 = j8.$,
             y8 = q8.extend,
             J8 = j8.classes,
             v8 = j8.platform,
             u8 = j8.util,
             I8 = u8.jsPrefix,
             e8 = u8.prefix,
             t8 = u8.getCoord,
             Z8 = u8.testTouch,
             b8 = v8.name == 'wp' || v8.name == 'android' || v8.name == 'ios' && v8.majorVersion < 8;
         j8.presetShort('scroller', 'Scroller', false);
         J8.Scroller = function(E8, a7i, b7i) {
             var F7i, O8, P8, z8 = 40,
                 G8 = 1000,
                 o7i, C8, m8, i8, n7i, N8, Y7i, j7i, J7i, h8, l8, Q8, A8, d8, H8, w8, R8, k7i, S8 = this,
                 g8 = q8(E8);
             function t7i(f7i) {
                 var S7i = +q8(this).attr('data-index');
                 f7i.stopPropagation();
                 if (f7i.type === 'mousedown') {
                     f7i.preventDefault();
                 }
                 if (Z8(f7i, this) && !r7i(S7i)) {
                     O8 = q8(this).addClass('mbsc-sc-btn-a');
                     j7i = t8(f7i, 'X');
                     J7i = t8(f7i, 'Y');
                     N8 = true;
                     Y7i = false;
                     setTimeout(function() {
                         u7i(S7i, O8.attr('data-dir') == 'inc' ? 1 : -1);
                     }, 100);
                     if (f7i.type === 'mousedown') {
                         q8(V8).on('mousemove', U7i).on('mouseup', K7i);
                     }
                 }
             }
             function U7i(d7i) {
                 if (Math.abs(j7i - t8(d7i, 'X')) > 7 || Math.abs(J7i - t8(d7i, 'Y')) > 7) {
                     x7i(true);
                 }
             }
             function K7i(l7i) {
                 x7i();
                 l7i.preventDefault();
                 if (l7i.type === 'mouseup') {
                     q8(V8).off('mousemove', U7i).off('mouseup', K7i);
                 }
             }
             function Z7i(h7i) {
                 var H7i = q8(this).attr('data-index'),
                     C7i, z7i;
                 if (h7i.keyCode == 38) {
                     C7i = true;
                     z7i = -1;
                 } else if (h7i.keyCode == 40) {
                     C7i = true;
                     z7i = 1;
                 } else if (h7i.keyCode == 32) {
                     C7i = true;
                     B7i(H7i);
                 }
                 if (C7i) {
                     h7i.stopPropagation();
                     h7i.preventDefault();
                     if (z7i && !N8) {
                         N8 = true;
                         Y7i = false;
                         u7i(H7i, z7i);
                     }
                 }
             }
             function v7i() {
                 x7i();
             }
             function M7i(c7i, P7i) {
                 return (c7i._array ? c7i._map[P7i] : c7i.getIndex(P7i, S8)) || 0;
             }
             function s7i(R7i, m7i) {
                 var w7i = R7i.data;
                 if (m7i >= R7i.min && m7i <= R7i.max) {
                     return R7i._array ? R7i.circular ? q8(w7i).get(m7i % R7i._length) : w7i[m7i] : q8.isFunction(w7i) ? w7i(m7i, S8) : '';
                 }
             }
             function L7i(E7i) {
                 return q8.isPlainObject(E7i) ? E7i.value !== B8 ? E7i.value : E7i.display : E7i;
             }
             function V7i(i7i) {
                 var A7i = q8.isPlainObject(i7i) ? i7i.display : i7i;
                 return A7i === B8 ? '' : A7i;
             }
             function W8(N7i, W7i) {
                 return L7i(s7i(N7i, W7i));
             }
             function B7i(X7i, L1i) {
                 var O7i = R8[X7i],
                     Q7i = L1i || O7i._$markup.find('.mbsc-sc-itm[data-val="' + h8[X7i] + '"]'),
                     g7i = +Q7i.attr('data-index'),
                     T7i = W8(O7i, g7i),
                     G7i = S8._tempSelected[X7i],
                     Y1i = u8.isNumeric(O7i.multiple) ? O7i.multiple : Infinity;
                 if (O7i.multiple && !O7i._disabled[T7i]) {
                     if (G7i[T7i] !== B8) {
                         Q7i.removeClass(m8).removeAttr('aria-selected');
                         delete G7i[T7i];
                     } else if (u8.objectToArray(G7i).length < Y1i) {
                         Q7i.addClass(m8).attr('aria-selected', 'true');
                         G7i[T7i] = T7i;
                     }
                     return true;
                 }
             }
             function u7i(n1i, o1i) {
                 if (!Y7i) {
                     y7i(n1i, o1i);
                 }
                 if (N8 && mobiscroll.oCgcI) {
                     clearInterval(n7i);
                     n7i = setInterval(function() {
                         y7i(n1i, o1i);
                     }, d8.delay);
                 }
             }
             function x7i(k1i) {
                 clearInterval(n7i);
                 Y7i = k1i;
                 N8 = false;
                 if (O8) {
                     O8.removeClass('mbsc-sc-btn-a');
                 }
             }
             function y7i(x1i, U1i) {
                 var F1i = R8[x1i];
                 D7i(F1i, x1i, F1i._current + U1i, G8, U1i == 1 ? 1 : 2);
             }
             function r7i(K1i) {
                 return q8.isArray(d8.readonly) ? d8.readonly[K1i] : d8.readonly;
             }
             function p7i(p1i, D1i, r1i) {
                 var M1i = p1i._index - p1i._batch;
                 p1i.data = p1i.data || [];
                 p1i.key = p1i.key !== B8 ? p1i.key : D1i;
                 p1i.label = p1i.label !== B8 ? p1i.label : D1i;
                 p1i._map = {};
                 p1i._array = q8.isArray(p1i.data);
                 if (p1i._array) {
                     p1i._length = p1i.data.length;
                     q8.each(p1i.data, function(s1i, a1i) {
                         p1i._map[L7i(a1i)] = s1i;
                     });
                 }
                 p1i.circular = d8.circular === B8 ? p1i.circular === B8 ? p1i._array && p1i._length > d8.rows : p1i.circular : q8.isArray(d8.circular) ? d8.circular[D1i] : d8.circular;
                 p1i.min = p1i._array ? p1i.circular ? -Infinity : 0 : p1i.min === B8 ? -Infinity : p1i.min;
                 p1i.max = p1i._array ? p1i.circular ? Infinity : p1i._length - 1 : p1i.max === B8 ? Infinity : p1i.max;
                 p1i._nr = D1i;
                 p1i._index = M7i(p1i, h8[D1i]);
                 p1i._disabled = {};
                 p1i._batch = 0;
                 p1i._current = p1i._index;
                 p1i._first = p1i._index - z8;
                 p1i._last = p1i._index + z8;
                 p1i._offset = p1i._first;
                 if (r1i) {
                     p1i._offset -= p1i._margin / l8 + (p1i._index - M1i);
                     p1i._margin += (p1i._index - M1i) * l8;
                 } else {
                     p1i._margin = 0;
                 }
                 p1i._refresh = function(u1i) {
                     var q1i = -(p1i.min - p1i._offset + (p1i.multiple && !C8 ? Math.floor(d8.rows / 2) : 0)) * l8,
                         B1i = Math.min(q1i, -(p1i.max - p1i._offset - (p1i.multiple && !C8 ? Math.floor(d8.rows / 2) : 0)) * l8);
                     y8(p1i._scroller.settings, {
                         minScroll: B1i,
                         maxScroll: q1i
                     });
                     p1i._scroller.refresh(u1i);
                 };
                 k7i[p1i.key] = p1i;
                 return p1i;
             }
             function c8(v1i, b1i, C1i, h1i, V1i) {
                 var J1i, l1i, j1i, y1i, f1i, I1i, d1i, Z1i, e1i = '',
                     t1i = S8._tempSelected[b1i],
                     S1i = v1i._disabled || {};
                 for (J1i = C1i; J1i <= h1i; J1i++) {
                     j1i = s7i(v1i, J1i);
                     f1i = V7i(j1i);
                     y1i = L7i(j1i);
                     l1i = j1i && j1i.cssClass !== B8 ? j1i.cssClass : '';
                     I1i = j1i && j1i.label !== B8 ? j1i.label : '';
                     d1i = j1i && j1i.invalid;
                     Z1i = y1i !== B8 && y1i == h8[b1i] && !v1i.multiple;
                     e1i += '<div role="option" aria-selected="' + (t1i[y1i] ? true : false) + '" class="mbsc-sc-itm ' + (V1i ? 'mbsc-sc-itm-3d ' : '') + l1i + ' ' + (Z1i ? 'mbsc-sc-itm-sel ' : '') + (t1i[y1i] ? m8 : '') + (y1i === B8 ? ' mbsc-sc-itm-ph' : ' mbsc-btn-e') + (d1i ? ' mbsc-sc-itm-inv-h mbsc-btn-d' : '') + (S1i[y1i] ? ' mbsc-sc-itm-inv mbsc-btn-d' : '') + '" data-index="' + J1i + '" data-val="' + y1i + '"' + (I1i ? ' aria-label="' + I1i + '"' : '') + (Z1i ? ' aria-selected="true"' : '') + ' style="height:' + l8 + 'px;line-height:' + l8 + 'px;' + (V1i ? e8 + 'transform:rotateX(' + (v1i._offset - J1i) * o7i % 360 + 'deg) translateZ(' + l8 * d8.rows / 2 + 'px);' : '') + '">' + (w8 > 1 ? '<div class="mbsc-sc-itm-ml" style="line-height:' + Math.round(l8 / w8) + 'px;font-size:' + Math.round(l8 / w8 * 0.8) + 'px;">' : '') + f1i + (w8 > 1 ? '</div>' : '') + '</div>';
                 }
                 return e1i;
             }
             function e7i(H1i) {
                 var z1i = d8.headerText;
                 return z1i ? typeof z1i === 'function' ? z1i.call(E8, H1i) : z1i.replace(/\{value\}/i, H1i) : '';
             }
             function I7i(c1i, i1i, N1i) {
                 var A1i = Math.round(-N1i / l8) + c1i._offset,
                     P1i = A1i - c1i._current,
                     R1i = c1i._first,
                     m1i = c1i._last,
                     w1i = R1i + z8 - P8 + 1,
                     E1i = m1i - z8 + P8;
                 if (P1i) {
                     c1i._first += P1i;
                     c1i._last += P1i;
                     c1i._current = A1i;
                     if (P1i > 0) {
                         c1i._$scroller.append(c8(c1i, i1i, Math.max(m1i + 1, R1i + P1i), m1i + P1i));
                         q8('.mbsc-sc-itm', c1i._$scroller).slice(0, Math.min(P1i, m1i - R1i + 1)).remove();
                         if (C8) {
                             c1i._$3d.append(c8(c1i, i1i, Math.max(E1i + 1, w1i + P1i), E1i + P1i, true));
                             q8('.mbsc-sc-itm', c1i._$3d).slice(0, Math.min(P1i, E1i - w1i + 1)).attr('class', 'mbsc-sc-itm-del');
                         }
                     } else if (P1i < 0) {
                         c1i._$scroller.prepend(c8(c1i, i1i, R1i + P1i, Math.min(R1i - 1, m1i + P1i)));
                         q8('.mbsc-sc-itm', c1i._$scroller).slice(Math.max(P1i, R1i - m1i - 1)).remove();
                         if (C8) {
                             c1i._$3d.prepend(c8(c1i, i1i, w1i + P1i, Math.min(w1i - 1, E1i + P1i), true));
                             q8('.mbsc-sc-itm', c1i._$3d).slice(Math.max(P1i, w1i - E1i - 1)).attr('class', 'mbsc-sc-itm-del');
                         }
                     }
                     c1i._margin += P1i * l8;
                     c1i._$scroller.css('margin-top', c1i._margin + 'px');
                 }
             }
             function q7i(o0i, W1i, n0i, k0i) {
                 var X1i, O1i = R8[o0i],
                     g1i = k0i || O1i._disabled,
                     G1i = M7i(O1i, W1i),
                     L0i = W1i,
                     Y0i = W1i,
                     T1i = 0,
                     Q1i = 0;
                 if (W1i === B8) {
                     W1i = W8(O1i, G1i);
                 }
                 if (g1i[W1i]) {
                     X1i = 0;
                     while (G1i - T1i >= O1i.min && g1i[L0i] && X1i < 100) {
                         X1i++;
                         T1i++;
                         L0i = W8(O1i, G1i - T1i);
                     }
                     X1i = 0;
                     while (G1i + Q1i < O1i.max && g1i[Y0i] && X1i < 100) {
                         X1i++;
                         Q1i++;
                         Y0i = W8(O1i, G1i + Q1i);
                     }
                     if ((Q1i < T1i && Q1i && n0i !== 2 || !T1i || G1i - T1i < 0 || n0i == 1) && !g1i[Y0i]) {
                         W1i = Y0i;
                     } else {
                         W1i = L0i;
                     }
                 }
                 return W1i;
             }
             function T8(a0i, U0i, r0i, K0i, s0i) {
                 var p0i, D0i, M0i, F0i, x0i = S8._isVisible;
                 A8 = true;
                 F0i = d8.validate.call(E8, {
                     values: h8.slice(0),
                     index: U0i,
                     direction: r0i
                 }, S8) || {};
                 A8 = false;
                 if (F0i.valid) {
                     S8._tempWheelArray = h8 = F0i.valid.slice(0);
                 }
                 H8('onValidated');
                 q8.each(R8, function(B0i, q0i) {
                     if (x0i) {
                         q0i._$markup.find('.mbsc-sc-itm-inv').removeClass('mbsc-sc-itm-inv mbsc-btn-d');
                     }
                     q0i._disabled = {};
                     if (F0i.disabled && F0i.disabled[B0i]) {
                         q8.each(F0i.disabled[B0i], function(y0i, j0i) {
                             q0i._disabled[j0i] = true;
                             if (x0i) {
                                 q0i._$markup.find('.mbsc-sc-itm[data-val="' + j0i + '"]').addClass('mbsc-sc-itm-inv mbsc-btn-d');
                             }
                         });
                     }
                     h8[B0i] = q0i.multiple ? h8[B0i] : q7i(B0i, h8[B0i], r0i);
                     if (x0i) {
                         if (!q0i.multiple || U0i === B8) {
                             q0i._$markup.find('.mbsc-sc-itm-sel').removeClass(m8).removeAttr('aria-selected');
                         }
                         if (q0i.multiple) {
                             if (U0i === B8) {
                                 for (var u0i in S8._tempSelected[B0i]) {
                                     q0i._$markup.find('.mbsc-sc-itm[data-val="' + u0i + '"]').addClass(m8).attr('aria-selected', 'true');
                                 }
                             }
                         } else {
                             q0i._$markup.find('.mbsc-sc-itm[data-val="' + h8[B0i] + '"]').addClass('mbsc-sc-itm-sel').attr('aria-selected', 'true');
                         }
                         D0i = M7i(q0i, h8[B0i]);
                         p0i = D0i - q0i._index + q0i._batch;
                         if (Math.abs(p0i) > 2 * z8 + 1) {
                             M0i = p0i + (2 * z8 + 1) * (p0i > 0 ? -1 : 1);
                             q0i._offset += M0i;
                             q0i._margin -= M0i * l8;
                             q0i._refresh();
                         }
                         q0i._index = D0i + q0i._batch;
                         q0i._scroller.scroll(-(D0i - q0i._offset + q0i._batch) * l8, U0i === B0i || U0i === B8 ? a0i : G8, s0i);
                     }
                 });
                 S8._tempValue = d8.formatValue(h8, S8);
                 if (x0i) {
                     S8._header.html(e7i(S8._tempValue));
                 }
                 if (S8.live) {
                     S8._hasValue = K0i || S8._hasValue;
                     X8(K0i, K0i, 0, true);
                     if (K0i) {
                         H8('onSet', {
                             valueText: S8._value
                         });
                     }
                 }
                 if (K0i) {
                     H8('onChange', {
                         valueText: S8._tempValue
                     });
                 }
             }
             function D7i(J0i, t0i, e0i, I0i, Z0i, b0i) {
                 var v0i = W8(J0i, e0i);
                 if (v0i !== B8) {
                     h8[t0i] = v0i;
                     J0i._batch = J0i._array ? Math.floor(e0i / J0i._length) * J0i._length : 0;
                     setTimeout(function() {
                         T8(I0i, t0i, Z0i, true, b0i);
                     }, 10);
                 }
             }
             function X8(f0i, V0i, S0i, d0i, l0i) {
                 if (!d0i) {
                     T8(S0i);
                 } else {
                     S8._tempValue = d8.formatValue(S8._tempWheelArray, S8);
                 }
                 if (!l0i) {
                     S8._wheelArray = h8.slice(0);
                     S8._value = S8._hasValue ? S8._tempValue : null;
                     S8._selected = y8(true, {}, S8._tempSelected);
                 }
                 if (f0i) {
                     if (S8._isInput) {
                         g8.val(S8._hasValue ? S8._tempValue : '');
                     }
                     H8('onFill', {
                         valueText: S8._hasValue ? S8._tempValue : '',
                         change: V0i
                     });
                     if (V0i) {
                         S8._preventChange = true;
                         g8.trigger('change');
                     }
                 }
             }
             J8.Frame.call(this, E8, a7i, true);
             S8.setVal = S8._setVal = function(h0i, C0i, z0i, H0i, c0i) {
                 S8._hasValue = h0i !== null && h0i !== B8;
                 S8._tempWheelArray = h8 = q8.isArray(h0i) ? h0i.slice(0) : d8.parseValue.call(E8, h0i, S8) || [];
                 X8(C0i, z0i === B8 ? C0i : z0i, c0i, false, H0i);
             };
             S8.getVal = S8._getVal = function(R0i) {
                 var P0i = S8._hasValue || R0i ? S8[R0i ? '_tempValue' : '_value'] : null;
                 return u8.isNumeric(P0i) ? +P0i : P0i;
             };
             S8.setArrayVal = S8.setVal;
             S8.getArrayVal = function(m0i) {
                 return m0i ? S8._tempWheelArray : S8._wheelArray;
             };
             S8.changeWheel = function(i0i, A0i, N0i) {
                 var E0i, w0i;
                 q8.each(i0i, function(W0i, O0i) {
                     w0i = k7i[W0i];
                     E0i = w0i._nr;
                     if (w0i) {
                         y8(w0i, O0i);
                         p7i(w0i, E0i, true);
                         if (S8._isVisible) {
                             if (C8) {
                                 w0i._$3d.html(c8(w0i, E0i, w0i._first + z8 - P8 + 1, w0i._last - z8 + P8, true));
                             }
                             w0i._$scroller.html(c8(w0i, E0i, w0i._first, w0i._last)).css('margin-top', w0i._margin + 'px');
                             w0i._refresh(A8);
                         }
                     }
                 });
                 if (S8._isVisible && !A8) {
                     S8.position();
                 }
                 if (!A8) {
                     T8(A0i, B8, B8, N0i);
                 }
             };
             S8.getValidValue = q7i;
             S8._generateContent = function() {
                 var X0i, G0i = '',
                     Q0i = C8 ? e8 + 'transform: translateZ(' + (l8 * d8.rows / 2 + 3) + 'px);' : '',
                     g0i = '<div class="mbsc-sc-whl-l" style="' + Q0i + 'height:' + l8 + 'px;margin-top:-' + (l8 / 2 + (d8.selectedLineBorder || 0)) + 'px;"></div>',
                     T0i = 0;
                 q8.each(d8.wheels, function(L4i, Y4i) {
                     G0i += '<div class="mbsc-w-p mbsc-sc-whl-gr-c' + (d8.showLabel ? ' mbsc-sc-lbl-v' : '') + '">' + g0i + '<div class="mbsc-sc-whl-gr' + (C8 ? ' mbsc-sc-whl-gr-3d' : '') + (i8 ? ' mbsc-sc-cp' : '') + '">';
                     q8.each(Y4i, function(o4i, n4i) {
                         S8._tempSelected[T0i] = y8({}, S8._selected[T0i]);
                         R8[T0i] = p7i(n4i, T0i);
                         X0i = n4i.label !== B8 ? n4i.label : o4i;
                         G0i += '<div class="mbsc-sc-whl-w ' + (n4i.cssClass || '') + (n4i.multiple ? ' mbsc-sc-whl-multi' : '') + '" style="' + (d8.width ? 'width:' + (d8.width[T0i] || d8.width) + 'px;' : (d8.minWidth ? 'min-width:' + (d8.minWidth[T0i] || d8.minWidth) + 'px;' : '') + (d8.maxWidth ? 'max-width:' + (d8.maxWidth[T0i] || d8.maxWidth) + 'px;' : '')) + '">' + '<div class="mbsc-sc-whl-o" style="' + Q0i + '"></div>' + g0i + '<div tabindex="0" aria-live="off" aria-label="' + X0i + '"' + (n4i.multiple ? ' aria-multiselectable="true"' : '') + ' role="listbox" data-index="' + T0i + '" class="mbsc-sc-whl"' + ' style="' + 'height:' + d8.rows * l8 * (C8 ? 1.1 : 1) + 'px;">' + (i8 ? '<div data-index="' + T0i + '" data-dir="inc" class="mbsc-sc-btn mbsc-sc-btn-plus ' + (d8.btnPlusClass || '') + '" style="height:' + l8 + 'px;line-height:' + l8 + 'px;"></div>' + '<div data-index="' + T0i + '" data-dir="dec" class="mbsc-sc-btn mbsc-sc-btn-minus ' + (d8.btnMinusClass || '') + '" style="height:' + l8 + 'px;line-height:' + l8 + 'px;"></div>' : '') + '<div class="mbsc-sc-lbl">' + X0i + '</div>' + '<div class="mbsc-sc-whl-c"' + ' style="height:' + Q8 + 'px;margin-top:-' + (Q8 / 2 + 1) + 'px;' + Q0i + '">' + '<div class="mbsc-sc-whl-sc" style="top:' + (Q8 - l8) / 2 + 'px;">';
                         G0i += c8(n4i, T0i, n4i._first, n4i._last) + '</div></div>';
                         if (C8) {
                             G0i += '<div class="mbsc-sc-whl-3d" style="height:' + l8 + 'px;margin-top:-' + l8 / 2 + 'px;">';
                             G0i += c8(n4i, T0i, n4i._first + z8 - P8 + 1, n4i._last - z8 + P8, true);
                             G0i += '</div>';
                         }
                         G0i += '</div></div>';
                         T0i++;
                     });
                     G0i += '</div></div>';
                 });
                 return G0i;
             };
             S8._attachEvents = function(k4i) {
                 q8('.mbsc-sc-btn', k4i).on('touchstart mousedown', t7i).on('touchmove', U7i).on('touchend touchcancel', K7i);
                 q8('.mbsc-sc-whl', k4i).on('keydown', Z7i).on('keyup', v7i);
             };
             S8._detachEvents = function(F4i) {
                 q8('.mbsc-sc-whl', F4i).mobiscroll('destroy');
             };
             S8._markupReady = function(x4i) {
                 F7i = x4i;
                 q8('.mbsc-sc-whl', F7i).each(function(K4i) {
                     var M4i, p4i = q8(this),
                         U4i = R8[K4i],
                         D4i = -(U4i.min - U4i._offset + (U4i.multiple && !C8 ? Math.floor(d8.rows / 2) : 0)) * l8,
                         r4i = Math.min(D4i, -(U4i.max - U4i._offset - (U4i.multiple && !C8 ? Math.floor(d8.rows / 2) : 0)) * l8);
                     U4i._$markup = p4i;
                     U4i._$scroller = q8('.mbsc-sc-whl-sc', this);
                     U4i._$3d = q8('.mbsc-sc-whl-3d', this);
                     U4i._scroller = new j8.classes.ScrollView(this, {
                         mousewheel: d8.mousewheel,
                         moveElement: U4i._$scroller,
                         initialPos: (U4i._first - U4i._index) * l8,
                         contSize: 0,
                         snap: l8,
                         minScroll: r4i,
                         maxScroll: D4i,
                         maxSnapScroll: z8,
                         prevDef: true,
                         stopProp: true,
                         timeUnit: 3,
                         easing: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
                         sync: function(a4i, s4i, q4i) {
                             if (C8) {
                                 U4i._$3d[0].style[I8 + 'Transition'] = s4i ? e8 + 'transform ' + Math.round(s4i) + 'ms ' + q4i : '';
                                 U4i._$3d[0].style[I8 + 'Transform'] = 'rotateX(' + -a4i / l8 * o7i + 'deg)';
                             }
                         },
                         onStart: function(u4i, B4i) {
                             B4i.settings.readonly = r7i(K4i);
                         },
                         onGestureStart: function() {
                             p4i.addClass('mbsc-sc-whl-a mbsc-sc-whl-anim');
                             H8('onWheelGestureStart', {
                                 index: K4i
                             });
                         },
                         onGestureEnd: function(j4i) {
                             var y4i = j4i.direction == 90 ? 1 : 2,
                                 J4i = j4i.duration,
                                 v4i = j4i.destinationY;
                             M4i = Math.round(-v4i / l8) + U4i._offset;
                             D7i(U4i, K4i, M4i, J4i, y4i);
                         },
                         onAnimationStart: function() {
                             p4i.addClass('mbsc-sc-whl-anim');
                         },
                         onAnimationEnd: function() {
                             p4i.removeClass('mbsc-sc-whl-a mbsc-sc-whl-anim');
                             H8('onWheelAnimationEnd', {
                                 index: K4i
                             });
                             U4i._$3d.find('.mbsc-sc-itm-del').remove();
                         },
                         onMove: function(t4i) {
                             I7i(U4i, K4i, t4i.posY);
                         },
                         onBtnTap: function(Z4i) {
                             var e4i = q8(Z4i.target),
                                 I4i = +e4i.attr('data-index');
                             if (B7i(K4i, e4i)) {
                                 I4i = U4i._current;
                             }
                             if (H8('onItemTap', {
                                     target: e4i[0],
                                     selected: e4i.hasClass('mbsc-itm-sel')
                                 }) !== false) {
                                 D7i(U4i, K4i, I4i, G8, true, true);
                                 if (S8.live && !U4i.multiple && (d8.setOnTap === true || d8.setOnTap[K4i])) {
                                     setTimeout(function() {
                                         S8.select();
                                     }, 200);
                                 }
                             }
                         }
                     });
                 });
                 T8();
             };
             S8._fillValue = function() {
                 S8._hasValue = true;
                 X8(true, true, 0, true);
             };
             S8._clearValue = function() {
                 q8('.mbsc-sc-whl-multi .mbsc-sc-itm-sel', F7i).removeClass(m8).removeAttr('aria-selected');
             };
             S8._readValue = function() {
                 var V4i = g8.val() || '',
                     b4i = 0;
                 if (V4i !== '') {
                     S8._hasValue = true;
                 }
                 S8._tempWheelArray = h8 = S8._hasValue && S8._wheelArray ? S8._wheelArray.slice(0) : d8.parseValue.call(E8, V4i, S8) || [];
                 S8._tempSelected = y8(true, {}, S8._selected);
                 q8.each(d8.wheels, function(S4i, f4i) {
                     q8.each(f4i, function(l4i, d4i) {
                         R8[b4i] = p7i(d4i, b4i);
                         b4i++;
                     });
                 });
                 X8(false, false, 0, true);
                 H8('onRead');
             };
             S8.__processSettings = function() {
                 d8 = S8.settings;
                 d8.cssClass = (d8.cssClass || '') + ' mbsc-sc';
                 H8 = S8.trigger;
                 w8 = d8.multiline;
                 m8 = 'mbsc-sc-itm-sel mbsc-ic mbsc-ic-' + d8.checkIcon;
                 R8 = [];
                 k7i = {};
                 if (w8 > 1) {
                     d8.cssClass = (d8.cssClass || '') + ' dw-ml';
                 }
             };
             S8.__init = function() {
                 i8 = d8.showScrollArrows;
                 C8 = d8.scroll3d && !b8 && !i8;
                 l8 = d8.height;
                 Q8 = C8 ? Math.round((l8 - (l8 * d8.rows / 2 + 3) * 0.03) / 2) * 2 : l8;
                 P8 = Math.round(d8.rows * 1.8);
                 o7i = 360 / (P8 * 2);
                 S8._isLiquid = (d8.layout || (/top|bottom/.test(d8.display) && d8.wheels.length == 1 || d8.display == 'inline' ? 'liquid' : '')) === 'liquid';
                 if (i8) {
                     d8.rows = Math.max(3, d8.rows);
                 }
             };
             S8._getItemValue = L7i;
             S8._tempSelected = {};
             S8._selected = {};
             if (!b7i) {
                 S8.init(a7i);
             }
         };
         J8.Scroller.prototype = {
             _hasDef: true,
             _hasTheme: true,
             _hasLang: true,
             _hasPreset: true,
             _class: 'scroller',
             _defaults: y8({}, J8.Frame.prototype._defaults, {
                 minWidth: 80,
                 height: 40,
                 rows: 3,
                 multiline: 1,
                 delay: 300,
                 readonly: false,
                 showLabel: true,
                 setOnTap: false,
                 wheels: [],
                 preset: '',
                 speedUnit: 0.0012,
                 timeUnit: 0.08,
                 checkIcon: 'checkmark',
                 validate: function() {},
                 formatValue: function(h4i) {
                     return h4i.join(' ');
                 },
                 parseValue: function(z4i, C4i) {
                     var H4i = [],
                         c4i = [],
                         P4i = 0,
                         R4i, m4i;
                     if (z4i !== null && z4i !== B8) {
                         H4i = (z4i + '').split(' ');
                     }
                     q8.each(C4i.settings.wheels, function(E4i, w4i) {
                         q8.each(w4i, function(A4i, i4i) {
                             m4i = i4i.data;
                             R4i = C4i._getItemValue(m4i[0]);
                             q8.each(m4i, function(W4i, N4i) {
                                 if (H4i[P4i] == C4i._getItemValue(N4i)) {
                                     R4i = C4i._getItemValue(N4i);
                                     return false;
                                 }
                             });
                             c4i.push(R4i);
                             P4i++;
                         });
                     });
                     return c4i;
                 }
             })
         };
     }(window, document));
     (function(Q4i) {
         var O4i = mobiscroll,
             T4i = O4i.$;
         function G4i(Y5i, L5i, n5i, g4i, o5i, k5i, F5i) {
             var X4i = new Date(Y5i, L5i, n5i, g4i || 0, o5i || 0, k5i || 0, F5i || 0);
             if (X4i.getHours() == 23 && (g4i || 0) === 0) {
                 X4i.setHours(X4i.getHours() + 2);
             }
             return X4i;
         }
         O4i.util.datetime = {
             defaults: {
                 shortYearCutoff: '+10',
                 monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                 monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                 dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                 dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                 dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                 amText: 'am',
                 pmText: 'pm',
                 getYear: function(x5i) {
                     return x5i.getFullYear();
                 },
                 getMonth: function(U5i) {
                     return U5i.getMonth();
                 },
                 getDay: function(K5i) {
                     return K5i.getDate();
                 },
                 getDate: G4i,
                 getMaxDayOfMonth: function(p5i, D5i) {
                     return 32 - new Date(p5i, D5i, 32, 12).getDate();
                 },
                 getWeekNumber: function(M5i) {
                     M5i = new Date(M5i);
                     M5i.setHours(0, 0, 0);
                     M5i.setDate(M5i.getDate() + 4 - (M5i.getDay() || 7));
                     var r5i = new Date(M5i.getFullYear(), 0, 1);
                     return Math.ceil(((M5i - r5i) / 86400000 + 1) / 7);
                 }
             },
             adjustedDate: G4i,
             formatDate: function(j5i, a5i, I5i) {
                 if (!a5i) {
                     return null;
                 }
                 var q5i = T4i.extend({}, O4i.util.datetime.defaults, I5i),
                     y5i = function(b5i) {
                         var Z5i = 0;
                         while (B5i + 1 < j5i.length && j5i.charAt(B5i + 1) == b5i) {
                             Z5i++;
                             B5i++;
                         }
                         return Z5i;
                     },
                     u5i = function(f5i, S5i, d5i) {
                         var V5i = '' + S5i;
                         if (y5i(f5i)) {
                             while (V5i.length < d5i) {
                                 V5i = '0' + V5i;
                             }
                         }
                         return V5i;
                     },
                     e5i = function(h5i, l5i, C5i, z5i) {
                         return y5i(h5i) ? z5i[l5i] : C5i[l5i];
                     },
                     B5i, v5i, s5i = '',
                     t5i = false;
                 for (B5i = 0; B5i < j5i.length; B5i++) {
                     if (t5i) {
                         if (j5i.charAt(B5i) == "'" && !y5i("'")) {
                             t5i = false;
                         } else {
                             s5i += j5i.charAt(B5i);
                         }
                     } else {
                         switch (j5i.charAt(B5i)) {
                             case 'd':
                                 s5i += u5i('d', q5i.getDay(a5i), 2);
                                 break;
                             case 'D':
                                 s5i += e5i('D', a5i.getDay(), q5i.dayNamesShort, q5i.dayNames);
                                 break;
                             case 'o':
                                 s5i += u5i('o', (a5i.getTime() - new Date(a5i.getFullYear(), 0, 0).getTime()) / 86400000, 3);
                                 break;
                             case 'm':
                                 s5i += u5i('m', q5i.getMonth(a5i) + 1, 2);
                                 break;
                             case 'M':
                                 s5i += e5i('M', q5i.getMonth(a5i), q5i.monthNamesShort, q5i.monthNames);
                                 break;
                             case 'y':
                                 v5i = q5i.getYear(a5i);
                                 s5i += y5i('y') ? v5i : (v5i % 100 < 10 ? '0' : '') + v5i % 100;
                                 break;
                             case 'h':
                                 var J5i = a5i.getHours();
                                 s5i += u5i('h', J5i > 12 ? J5i - 12 : J5i === 0 ? 12 : J5i, 2);
                                 break;
                             case 'H':
                                 s5i += u5i('H', a5i.getHours(), 2);
                                 break;
                             case 'i':
                                 s5i += u5i('i', a5i.getMinutes(), 2);
                                 break;
                             case 's':
                                 s5i += u5i('s', a5i.getSeconds(), 2);
                                 break;
                             case 'a':
                                 s5i += a5i.getHours() > 11 ? q5i.pmText : q5i.amText;
                                 break;
                             case 'A':
                                 s5i += a5i.getHours() > 11 ? q5i.pmText.toUpperCase() : q5i.amText.toUpperCase();
                                 break;
                             case "'":
                                 if (y5i("'")) {
                                     s5i += "'";
                                 } else {
                                     t5i = true;
                                 }
                                 break;
                             default:
                                 s5i += j5i.charAt(B5i);
                         }
                     }
                 }
                 return s5i;
             },
             parseDate: function(N5i, R5i, F6i) {
                 var H5i = T4i.extend({}, O4i.util.datetime.defaults, F6i),
                     i5i = H5i.defaultValue && H5i.defaultValue.getTime ? H5i.defaultValue : new Date();
                 if (!N5i || !R5i) {
                     return i5i;
                 }
                 if (R5i.getTime) {
                     return R5i;
                 }
                 R5i = typeof R5i == 'object' ? R5i.toString() : R5i + '';
                 var X5i = H5i.shortYearCutoff,
                     w5i = H5i.getYear(i5i),
                     E5i = H5i.getMonth(i5i) + 1,
                     A5i = H5i.getDay(i5i),
                     L6i = -1,
                     c5i = i5i.getHours(),
                     k6i = i5i.getMinutes(),
                     n6i = 0,
                     W5i = -1,
                     Y6i = false,
                     T5i = function(U6i) {
                         var x6i = m5i + 1 < N5i.length && N5i.charAt(m5i + 1) == U6i;
                         if (x6i) {
                             m5i++;
                         }
                         return x6i;
                     },
                     P5i = function(K6i) {
                         T5i(K6i);
                         var D6i = K6i == '@' ? 14 : K6i == '!' ? 20 : K6i == 'y' ? 4 : K6i == 'o' ? 3 : 2,
                             M6i = new RegExp('^\\d{1,' + D6i + '}'),
                             p6i = R5i.substr(O5i).match(M6i);
                         if (!p6i) {
                             return 0;
                         }
                         O5i += p6i[0].length;
                         return parseInt(p6i[0], 10);
                     },
                     Q5i = function(a6i, q6i, B6i) {
                         var s6i = T5i(a6i) ? B6i : q6i,
                             r6i;
                         for (r6i = 0; r6i < s6i.length; r6i++) {
                             if (R5i.substr(O5i, s6i[r6i].length).toLowerCase() == s6i[r6i].toLowerCase()) {
                                 O5i += s6i[r6i].length;
                                 return r6i + 1;
                             }
                         }
                         return 0;
                     },
                     g5i = function() {
                         O5i++;
                     },
                     O5i = 0,
                     m5i;
                 for (m5i = 0; m5i < N5i.length; m5i++) {
                     if (Y6i) {
                         if (N5i.charAt(m5i) == "'" && !T5i("'")) {
                             Y6i = false;
                         } else {
                             g5i();
                         }
                     } else {
                         switch (N5i.charAt(m5i)) {
                             case 'd':
                                 A5i = P5i('d');
                                 break;
                             case 'D':
                                 Q5i('D', H5i.dayNamesShort, H5i.dayNames);
                                 break;
                             case 'o':
                                 L6i = P5i('o');
                                 break;
                             case 'm':
                                 E5i = P5i('m');
                                 break;
                             case 'M':
                                 E5i = Q5i('M', H5i.monthNamesShort, H5i.monthNames);
                                 break;
                             case 'y':
                                 w5i = P5i('y');
                                 break;
                             case 'H':
                                 c5i = P5i('H');
                                 break;
                             case 'h':
                                 c5i = P5i('h');
                                 break;
                             case 'i':
                                 k6i = P5i('i');
                                 break;
                             case 's':
                                 n6i = P5i('s');
                                 break;
                             case 'a':
                                 W5i = Q5i('a', [H5i.amText, H5i.pmText], [H5i.amText, H5i.pmText]) - 1;
                                 break;
                             case 'A':
                                 W5i = Q5i('A', [H5i.amText, H5i.pmText], [H5i.amText, H5i.pmText]) - 1;
                                 break;
                             case "'":
                                 if (T5i("'")) {
                                     g5i();
                                 } else {
                                     Y6i = true;
                                 }
                                 break;
                             default:
                                 g5i();
                         }
                     }
                 }
                 if (w5i < 100) {
                     w5i += new Date().getFullYear() - new Date().getFullYear() % 100 + (w5i <= (typeof X5i != 'string' ? X5i : new Date().getFullYear() % 100 + parseInt(X5i, 10)) ? 0 : -100);
                 }
                 if (L6i > -1) {
                     E5i = 1;
                     A5i = L6i;
                     do {
                         var o6i = 32 - new Date(w5i, E5i - 1, 32, 12).getDate();
                         if (A5i <= o6i) {
                             break;
                         }
                         E5i++;
                         A5i -= o6i;
                     } while (true);
                 }
                 c5i = W5i == -1 ? c5i : W5i && c5i < 12 ? c5i + 12 : !W5i && c5i == 12 ? 0 : c5i;
                 var G5i = H5i.getDate(w5i, E5i - 1, A5i, c5i, k6i, n6i);
                 if (H5i.getYear(G5i) != w5i || H5i.getMonth(G5i) + 1 != E5i || H5i.getDay(G5i) != A5i) {
                     return i5i;
                 }
                 return G5i;
             }
         };
     }());
(function(a) {
    var d = mobiscroll,
        b = d.$,
        c = d.util.datetime,
        e = c.adjustedDate,
        f = new Date(),
        g = {
            startYear: f.getFullYear() - 100,
            endYear: f.getFullYear() + 1,
            separator: ' ',
            dateFormat: 'mm/dd/yy',
            dateDisplay: 'MMddyy',
            timeFormat: 'h:ii A',
            dayText: 'Day',
            monthText: 'Month',
            yearText: 'Year',
            hourText: 'Hours',
            minuteText: 'Minutes',
            ampmText: '&nbsp;',
            secText: 'Seconds',
            nowText: 'Now',
            todayText: 'Today'
        },
        h = function(i) {
            function m(b, a, c, d) {
                return Math.min(d, Math.floor(b / a) * a + c);
            }

            function v(a) {
                return a < 10 ? '0' + a : a;
            }

            function a4(c) {
                var d, b, a, f = [];
                if (c) {
                    for (d = 0; d < c.length; d++) {
                        b = c[d];
                        if (b.start && b.start.getTime) {
                            a = new Date(b.start);
                            while (a <= b.end) {
                                f.push(e(a.getFullYear(), a.getMonth(), a.getDate()));
                                a.setDate(a.getDate() + 1);
                            }
                        } else {
                            f.push(b);
                        }
                    }
                    return f;
                }
                return c;
            }

            function X(a, b, c) {
                return Math.floor((c - b) / a) * a + b;
            }

            function ai(a) {
                return {
                    value: a,
                    display: (/yy/i.test(y) ? a : (a + '').substr(2, 2)) + (f.yearSuffix || '')
                };
            }

            function ad(a) {
                return a;
            }

            function ac(a) {
                return f.getYear(a);
            }

            function aa(a) {
                return f.getMonth(a);
            }

            function a9(a) {
                return f.getDay(a);
            }

            function a8(b) {
                var a = b.getHours();
                a = r && a >= 12 ? a - 12 : a;
                return m(a, u, C, U);
            }

            function a7(a) {
                return m(a.getMinutes(), q, x, V);
            }

            function al(a) {
                return m(a.getSeconds(), z, O, W);
            }

            function aj(a) {
                return a.getMilliseconds();
            }

            function ah(a) {
                return a.getHours() > 11 ? 1 : 0;
            }

            function M(a) {
                return a.getFullYear() + '-' + v(a.getMonth() + 1) + '-' + v(a.getDate());
            }

            function ae(a) {
                return m(Math.round((a.getTime() - new Date(a).setHours(0, 0, 0, 0)) / 1000), L, 0, 86400);
            }

            function p(e, b, d, f) {
                var c;
                if (h[b] !== a) {
                    c = +e[h[b]];
                    if (!isNaN(c)) {
                        return c;
                    }
                }
                if (d) {
                    return l[b](d);
                }
                if (D[b] !== a) {
                    return D[b];
                }
                return l[b](f);
            }

            function A(c) {
                var b, d = new Date(new Date().setHours(0, 0, 0, 0));
                if (c === null) {
                    return c;
                }
                if (h.dd !== a) {
                    b = c[h.dd].split('-');
                    b = new Date(b[0], b[1] - 1, b[2]);
                }
                if (h.tt !== a) {
                    b = b || d;
                    b = new Date(b.getTime() + c[h.tt] % 86400 * 1000);
                }
                var e = p(c, 'y', b, d),
                    g = p(c, 'm', b, d),
                    j = Math.min(p(c, 'd', b, d), f.getMaxDayOfMonth(e, g)),
                    i = p(c, 'h', b, d);
                return f.getDate(e, g, j, r && p(c, 'a', b, d) ? i + 12 : i, p(c, 'i', b, d), p(c, 's', b, d), p(c, 'u', b, d));
            }

            function F(b, g) {
                var c, d, e = ['y', 'm', 'd', 'a', 'h', 'i', 's', 'u', 'dd', 'tt'],
                    f = [];
                if (b === null || b === a) {
                    return b;
                }
                for (c = 0; c < e.length; c++) {
                    d = e[c];
                    if (h[d] !== a) {
                        f[h[d]] = l[d](b);
                    }
                    if (g) {
                        D[c] = l[d](b);
                    }
                }
                return f;
            }

            function Q(a, b) {
                return b ? Math.floor(new Date(a) / 8.64e7) : a.getMonth() + 12 * (a.getFullYear() - 1970);
            }

            function ak(b) {
                var a = /d/i.test(b);
                return {
                    label: '',
                    cssClass: 'mbsc-dt-whl-date',
                    min: Q(M(j), a),
                    max: Q(M(k), a),
                    data: function(e) {
                        var g = new Date(new Date().setHours(0, 0, 0, 0)),
                            d = a ? new Date(e * 8.64e7) : new Date(1970, e, 1);
                        if (a) {
                            d = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
                        }
                        return {
                            invalid: a && !B(d, true),
                            value: M(d),
                            display: g.getTime() == d.getTime() ? f.todayText : c.formatDate(b, d, f)
                        };
                    },
                    getIndex: function(b) {
                        return Q(b, a);
                    }
                };
            }

            function ab(d) {
                var a, b, g, e = [];
                if (/s/i.test(d)) {
                    b = z;
                } else if (/i/i.test(d)) {
                    b = q * 60;
                } else if (/h/i.test(d)) {
                    b = u * 3600;
                }
                L = o.tt = b;
                for (a = 0; a < 86400; a += b) {
                    g = new Date(new Date().setHours(0, 0, 0, 0) + a * 1000);
                    e.push({
                        value: a,
                        display: c.formatDate(d, g, f)
                    });
                }
                return {
                    label: '',
                    cssClass: 'mbsc-dt-whl-time',
                    data: e
                };
            }

            function a6() {
                var p, s, c, l, b, g, e, n, d = 0,
                    o = [],
                    m = [],
                    i = [];
                if (w.match(/date/i)) {
                    p = S.split(/\|/.test(S) ? '|' : '');
                    for (l = 0; l < p.length; l++) {
                        c = p[l];
                        g = 0;
                        if (c.length) {
                            if (/y/i.test(c)) {
                                g++;
                            }
                            if (/m/i.test(c)) {
                                g++;
                            }
                            if (/d/i.test(c)) {
                                g++;
                            }
                            if (g > 1 && h.dd === a) {
                                h.dd = d;
                                d++;
                                m.push(ak(c));
                                i = m;
                                a2 = true;
                            } else if (/y/i.test(c) && h.y === a) {
                                h.y = d;
                                d++;
								
                                m.push({
                                    cssClass: 'mbsc-dt-whl-y',
                                    label: f.yearText,
                                    min: f.getYear(j),
                                    max: f.getYear(k),
                                    data: ai,
                                    getIndex: ad
                                });
                            } else if (/m/i.test(c) && h.m === a) {
                                h.m = d;
                                e = [];
                                d++;
                                for (b = 0; b < 12; b++) {
                                    n = y.replace(/[dy]/gi, '').replace(/mm/, v(b + 1) + (f.monthSuffix || '')).replace(/m/, b + 1 + (f.monthSuffix || ''));
                                    e.push({
                                        value: b,
                                        display: /MM/.test(n) ? n.replace(/MM/, '<span class="mbsc-dt-month">' + f.monthNames[b] + '</span>') : n.replace(/M/, '<span class="mbsc-dt-month">' + f.monthNamesShort[b] + '</span>')
                                    });
                                }
                                m.push({
                                    cssClass: 'mbsc-dt-whl-m',
                                    label: f.monthText,
                                    data: e
                                });
                            } else if (/d/i.test(c) && h.d === a) {
                                h.d = d;
                                e = [];
                                d++;
                                for (b = 1; b < 32; b++) {
                                    e.push({
                                        value: b,
                                        display: (/dd/i.test(y) ? v(b) : b) + (f.daySuffix || '')
                                    });
                                }
                                m.push({
                                    cssClass: 'mbsc-dt-whl-d',
                                    label: f.dayText,
                                    data: e
                                });
                            }
                        }
                    }
                    o.push(m);
                }
                if (w.match(/time/i)) {

                    s = H.split(/\|/.test(H) ? '|' : '');
                    for (l = 0; l < s.length; l++) {
                        c = s[l];
                        g = 0;
                        if (c.length) {
                            if (/h/i.test(c)) {
                                g++;
                            }
                            if (/i/i.test(c)) {
                                g++;
                            }
                            if (/s/i.test(c)) {
                                g++;
                            }
                            if (/a/i.test(c)) {
                                g++;
                            }
                        }
                        if (g > 1 && h.tt === a) {
                            h.tt = d;
                            d++;
                            i.push(ab(c));
                        } else if (/h/i.test(c) && h.h === a) {
                            e = [];
                            h.h = d;
                            d++;
                            for (b = C; b < (r ? 12 : 24); b += u) {
                                e.push({
                                    value: b,
                                    display: r && b === 0 ? 12 : /hh/i.test(G) ? v(b) : b
                                });
                            }
                            i.push({
                                cssClass: 'mbsc-dt-whl-h',
                                label: f.hourText,
                                data: e
                            });
                        } else if (/i/i.test(c) && h.i === a) {
                            e = [];
                            h.i = d;
                            d++;
                            for (b = x; b < 60; b += q) {
                                e.push({
                                    value: b,
                                    display: /ii/i.test(G) ? v(b) : b
                                });
                            }
                            i.push({
                                cssClass: 'mbsc-dt-whl-i',
                                label: f.minuteText,
                                data: e
                            });
                        } else if (/s/i.test(c) && h.s === a) {
                            e = [];
                            h.s = d;
                            d++;
                            for (b = O; b < 60; b += z) {
                                e.push({
                                    value: b,
                                    display: /ss/i.test(G) ? v(b) : b
                                });
                            }
                            i.push({
                                cssClass: 'mbsc-dt-whl-s',
                                label: f.secText,
                                data: e
                            });
                        } else if (/a/i.test(c) && h.a === a) {
                            h.a = d;
                            d++;
                            i.push({
                                cssClass: 'mbsc-dt-whl-a',
                                label: f.ampmText,
                                data: /A/.test(c) ? [{
                                    value: 0,
                                    display: f.amText.toUpperCase()
                                }, {
                                    value: 1,
                                    display: f.pmText.toUpperCase()
                                }] : [{
                                    value: 0,
                                    display: f.amText
                                }, {
                                    value: 1,
                                    display: f.pmText
                                }]
                            });
                        }
                    }
                    if (i != m) {
                        o.push(i);
                    }
                }
                return o;
            }

            function ag(d) {
                var a, e, f, b = {};
                if (d.is('input')) {
                    switch (d.attr('type')) {
                        case 'date':
                            a = 'yy-mm-dd';
                            break;
                        case 'datetime':
                            a = 'yy-mm-ddTHH:ii:ssZ';
                            break;
                        case 'datetime-local':
                            a = 'yy-mm-ddTHH:ii:ss';
                            break;
                        case 'month':
                            a = 'yy-mm';
                            b.dateOrder = 'mmyy';
                            break;
                        case 'time':
                            a = 'HH:ii:ss';
                            break;
                    }
                    b.format = a;
                    e = d.attr('min');
                    f = d.attr('max');
                    if (e) {
                        b.min = c.parseDate(a, e);
                    }
                    if (f) {
                        b.max = c.parseDate(a, f);
                    }
                }
                return b;
            }

            function af(a, f) {
                var b, c, e = false,
                    d = false,
                    g = 0,
                    h = 0;
                j = A(F(j));
                k = A(F(k));
                if (B(a)) {
                    return a;
                }
                if (a < j) {
                    a = j;
                }
                if (a > k) {
                    a = k;
                }
                b = a;
                c = a;
                if (f !== 2) {
                    e = B(b);
                    while (!e && b < k) {
                        b = new Date(b.getTime() + 1000 * 60 * 60 * 24);
                        e = B(b);
                        g++;
                    }
                }
                if (f !== 1) {
                    d = B(c);
                    while (!d && c > j) {
                        c = new Date(c.getTime() - 1000 * 60 * 60 * 24);
                        d = B(c);
                        h++;
                    }
                }
                if (f === 1 && e) {
                    return b;
                }
                if (f === 2 && d) {
                    return c;
                }
                return h <= g && d ? c : b;
            }

            function B(a, b) {
                if (!b && a < j) {
                    return false;
                }
                if (!b && a > k) {
                    return false;
                }
                if (a3(a, J)) {
                    return true;
                }
                if (a3(a, I)) {
                    return false;
                }
                return true;
            }

            function a3(b, e) {
                var c, d, a;
                if (e) {
                    for (d = 0; d < e.length; d++) {
                        c = e[d];
                        a = c + '';
                        if (!c.start) {
                            if (c.getTime) {
                                if (b.getFullYear() == c.getFullYear() && b.getMonth() == c.getMonth() && b.getDate() == c.getDate()) {
                                    return true;
                                }
                            } else if (!a.match(/w/i)) {
                                a = a.split('/');
                                if (a[1]) {
                                    if (a[0] - 1 == b.getMonth() && a[1] == b.getDate()) {
                                        return true;
                                    }
                                } else if (a[0] == b.getDate()) {
                                    return true;
                                }
                            } else {
                                a = +a.replace('w', '');
                                if (a == b.getDay()) {
                                    return true;
                                }
                            }
                        }
                    }
                }
                return false;
            }

            function a0(h, l, i, k, j, e, g) {
                var b, d, c, a;
                if (h) {
                    for (d = 0; d < h.length; d++) {
                        b = h[d];
                        a = b + '';
                        if (!b.start) {
                            if (b.getTime) {
                                if (f.getYear(b) == l && f.getMonth(b) == i) {
                                    e[f.getDay(b)] = g;
                                }
                            } else if (!a.match(/w/i)) {
                                a = a.split('/');
                                if (a[1]) {
                                    if (a[0] - 1 == i) {
                                        e[a[1]] = g;
                                    }
                                } else {
                                    e[a[0]] = g;
                                }
                            } else {
                                a = +a.replace('w', '');
                                for (c = a - k; c < j; c += 7) {
                                    if (c >= 0) {
                                        e[c + 1] = g;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            function _(x, y, e, M, I, B, N, K) {
                var H, D, k, F, E, C, i, A, z, b, g, d, c, p, v, G, w, l, q, u, J = {},
                    j = f.getDate(M, I, B),
                    h = ['a', 'h', 'i', 's'];
                if (x) {
                    for (i = 0; i < x.length; i++) {
                        g = x[i];
                        if (g.start) {
                            g.apply = false;
                            k = g.d;
                            w = k + '';
                            l = w.split('/');
                            if (k && (k.getTime && M == f.getYear(k) && I == f.getMonth(k) && B == f.getDay(k) || !w.match(/w/i) && (l[1] && B == l[1] && I == l[0] - 1 || !l[1] && B == l[0]) || w.match(/w/i) && j.getDay() == +w.replace('w', ''))) {
                                g.apply = true;
                                J[j] = true;
                            }
                        }
                    }
                    for (i = 0; i < x.length; i++) {
                        g = x[i];
                        H = 0;
                        G = 0;
                        A = s[e];
                        z = n[e];
                        p = true;
                        v = true;
                        D = false;
                        if (g.start && (g.apply || !g.d && !J[j])) {
                            d = g.start.split(':');
                            c = g.end.split(':');
                            for (b = 0; b < 3; b++) {
                                if (d[b] === a) {
                                    d[b] = 0;
                                }
                                if (c[b] === a) {
                                    c[b] = 59;
                                }
                                d[b] = +d[b];
                                c[b] = +c[b];
                            }
                            if (e == 'tt') {
                                A = m(Math.round((new Date(j).setHours(d[0], d[1], d[2]) - new Date(j).setHours(0, 0, 0, 0)) / 1000), L, 0, 86400);
                                z = m(Math.round((new Date(j).setHours(c[0], c[1], c[2]) - new Date(j).setHours(0, 0, 0, 0)) / 1000), L, 0, 86400);
                            } else {
                                d.unshift(d[0] > 11 ? 1 : 0);
                                c.unshift(c[0] > 11 ? 1 : 0);
                                if (r) {
                                    if (d[1] >= 12) {
                                        d[1] = d[1] - 12;
                                    }
                                    if (c[1] >= 12) {
                                        c[1] = c[1] - 12;
                                    }
                                }
                                for (b = 0; b < y; b++) {
                                    if (t[b] !== a) {
                                        q = m(d[b], o[h[b]], s[h[b]], n[h[b]]);
                                        u = m(c[b], o[h[b]], s[h[b]], n[h[b]]);
                                        F = 0;
                                        E = 0;
                                        C = 0;
                                        if (r && b == 1) {
                                            F = d[0] ? 12 : 0;
                                            E = c[0] ? 12 : 0;
                                            C = t[0] ? 12 : 0;
                                        }
                                        if (!p) {
                                            q = 0;
                                        }
                                        if (!v) {
                                            u = n[h[b]];
                                        }
                                        if ((p || v) && (q + F < t[b] + C && t[b] + C < u + E)) {
                                            D = true;
                                        }
                                        if (t[b] != q) {
                                            p = false;
                                        }
                                        if (t[b] != u) {
                                            v = false;
                                        }
                                    }
                                }
                                if (!K) {
                                    for (b = y + 1; b < 4; b++) {
                                        if (d[b] > 0) {
                                            H = o[e];
                                        }
                                        if (c[b] < n[h[b]]) {
                                            G = o[e];
                                        }
                                    }
                                }
                                if (!D) {
                                    q = m(d[y], o[e], s[e], n[e]) + H;
                                    u = m(c[y], o[e], s[e], n[e]) - G;
                                    if (p) {
                                        A = q;
                                    }
                                    if (v) {
                                        z = u;
                                    }
                                }
                            }
                            if (p || v || D) {
                                for (b = A; b <= z; b += o[e]) {
                                    N[b] = !K;
                                }
                            }
                        }
                    }
                }
            }
            var L, a2, Y, h = {},
                D = {},
                t = [],
                P = ag(b(this)),
                $ = b.extend({}, i.settings),
                f = b.extend(i.settings, d.util.datetime.defaults, g, P, $),
                I = a4(f.invalid),
                J = a4(f.valid),
                w = f.preset,
                K = w == 'datetime' ? f.dateFormat + f.separator + f.timeFormat : w == 'time' ? f.timeFormat : f.dateFormat,
                T = P.format || K,
                S = f.dateWheels || f.dateFormat,
                H = f.timeWheels || f.timeFormat,
                y = f.dateWheels || f.dateDisplay,
                G = H,
                a1 = f.baseTheme || f.theme,
                j = f.min || e(f.startYear, 0, 1),
                k = f.max || e((f.endYear+99), 11, 31, 23, 59, 59),
                R = /time/i.test(w),
                r = /h/.test(G),
                Z = /D/.test(y),
                E = f.steps || {},
                u = E.hour || f.stepHour || 1,
                q = E.minute || f.stepMinute || 1,
                z = E.second || f.stepSecond || 1,
                N = E.zeroBased,
                C = N ? 0 : j.getHours() % u,
                x = N ? 0 : j.getMinutes() % q,
                O = N ? 0 : j.getSeconds() % z,
                U = X(u, C, r ? 11 : 23),
                V = X(q, x, 59),
                W = X(q, x, 59),
                s = {
                    y: j.getFullYear(),
                    m: 0,
                    d: 1,
                    h: C,
                    i: x,
                    s: O,
                    a: 0,
                    tt: 0
                },
                n = {
                    y: k.getFullYear(),
                    m: 11,
                    d: 31,
                    h: U,
                    i: V,
                    s: W,
                    a: 1,
                    tt: 86400
                },
                o = {
                    y: 1,
                    m: 1,
                    d: 1,
                    h: u,
                    i: q,
                    s: z,
                    a: 1,
                    tt: 1
                },
                a5 = {
                    'android-holo': 40,
                    bootstrap: 46,
                    ios: 50,
                    jqm: 46,
                    material: 46,
                    mobiscroll: 46,
                    wp: 50
                },
                l = {
                    y: ac,
                    m: aa,
                    d: a9,
                    h: a8,
                    i: a7,
                    s: al,
                    u: aj,
                    a: ah,
                    dd: M,
                    tt: ae
                };
            i.getDate = i.getVal = function(a) {
                return i._hasValue || a ? A(i.getArrayVal(a)) : null;
            };
            i.setDate = function(a, b, c, d, e) {
                i.setArrayVal(F(a), b, e, d, c);
            };
            Y = a6();
            i.format = K;
            i.order = h;
            i.handlers.now = function() {
                i.setDate(new Date(), i.live, 1000, true, true);
            };
            i.buttons.now = {
                text: f.nowText,
                handler: 'now'
            };
            return {
                minWidth: a2 && R ? a5[a1] : a,
                compClass: 'mbsc-dt',
                wheels: Y,
                headerText: f.headerText ? function() {
                    return c.formatDate(K, A(i.getArrayVal(true)), f);
                } : false,
                formatValue: function(a) {
                    return c.formatDate(T, A(a), f);
                },
                parseValue: function(a) {
                    if (!a) {
                        D = {};
                    }
                    return F(a ? c.parseDate(T, a, f) : f.defaultValue && f.defaultValue.getTime ? f.defaultValue : new Date(), !!a && !!a.getTime);
                },
                validate: function(C) {
                    var c, p, u, E, G = C.values,
                        x = C.index,
                        D = C.direction,
                        m = i.settings.wheels[0][h.d],
                        g = af(A(G), D),
                        z = F(g),
                        q = [],
                        B = {},
                        e = l.y(g),
                        d = l.m(g),
                        r = f.getMaxDayOfMonth(e, d),
                        v = true,
                        w = true;
                    b.each(['dd', 'y', 'm', 'd', 'tt', 'a', 'h', 'i', 's'], function(y, c) {
                        if (h[c] !== a) {
                            var m = s[c],
                                t = n[c],
                                i = l[c](g);
                            q[h[c]] = [];
                            if (v && j) {
                                m = l[c](j);
                            }
                            if (w && k) {
                                t = l[c](k);
                            }
                            if (c != 'y' && c != 'dd') {
                                for (p = s[c]; p <= n[c]; p += o[c]) {
                                    if (p < m || p > t) {
                                        q[h[c]].push(p);
                                    }
                                }
                            }
                            if (i < m) {
                                i = m;
                            }
                            if (i > t) {
                                i = t;
                            }
                            if (v) {
                                v = i == m;
                            }
                            if (w) {
                                w = i == t;
                            }
                            if (c == 'd') {
                                var x = f.getDate(e, d, 1).getDay(),
                                    u = {};
                                a0(I, e, d, x, r, u, 1);
                                a0(J, e, d, x, r, u, 0);
                                b.each(u, function(a, b) {
                                    if (b) {
                                        q[h[c]].push(a);
                                    }
                                });
                            }
                        }
                    });
                    if (R) {
                        b.each(['a', 'h', 'i', 's', 'tt'], function(j, c) {
                            var m = l[c](g),
                                k = l.d(g),
                                f = {};
                            if (h[c] !== a) {
                                _(I, j, c, e, d, k, f, 0);
                                _(J, j, c, e, d, k, f, 1);
                                b.each(f, function(a, b) {
                                    if (b) {
                                        q[h[c]].push(a);
                                    }
                                });
                                t[j] = i.getValidValue(h[c], m, D, f);
                            }
                        });
                    }
                    if (m && (m._length !== r || Z && (x === a || x === h.y || x === h.m))) {
                        B[h.d] = m;
                        m.data = [];
                        for (c = 1; c <= r; c++) {
                            E = f.getDate(e, d, c).getDay();
                            u = y.replace(/[my]/gi, '').replace(/dd/, (c < 10 ? '0' + c : c) + (f.daySuffix || '')).replace(/d/, c + (f.daySuffix || ''));
                            m.data.push({
                                value: c,
                                display: u.match(/DD/) ? u.replace(/DD/, '<span class="mbsc-dt-day">' + f.dayNames[E] + '</span>') : u.replace(/D/, '<span class="mbsc-dt-day">' + f.dayNamesShort[E] + '</span>')
                            });
                        }
                        i._tempWheelArray[h.d] = z[h.d];
                        i.changeWheel(B);
                    }
                    return {
                        disabled: q,
                        valid: z
                    };
                }
            };
        };
    b.each(['date', 'time', 'datetime'], function(b, a) {
        d.presets.scroller[a] = h;
    });
}());
(function() {
	mobiscroll.$.each(['date', 'time', 'datetime'], function(S2S, D2S) {
		mobiscroll.presetShort(D2S);
	});
}());
     (function(z8i) {
         var c8i = mobiscroll,
             H8i = c8i.$,
             P8i = {
                 invalid: [],
                 showInput: true,
                 inputClass: ''
             };
         c8i.presets.scroller.list = function(m8i) {
             var p7k = H8i.extend({}, m8i.settings),
                 R8i = H8i.extend(m8i.settings, P8i, p7k),
                 g8i = R8i.layout || (/top|bottom/.test(R8i.display) ? 'liquid' : ''),
                 T8i = g8i == 'liquid',
                 x7k = R8i.readonly,
                 N8i = H8i(this),
                 i8i, O8i, X8i = this.id + '_dummy',
                 w8i = 0,
                 Q8i = 0,
                 E8i, G8i = [],
                 A8i = R8i.wheelArray || F7k(N8i),
                 Y7k = M7k(w8i),
                 L7k = s7k(A8i),
                 k7k = o7k(L7k, w8i);
             function q7k(j7k, y7k, J7k) {
                 var B7k = 0,
                     u7k = [];
                 while (B7k < j7k) {
                     u7k[B7k] = a7k(J7k, B7k, y7k);
                     B7k++;
                 }
                 return u7k;
             }
             function a7k(b7k, V7k, f7k) {
                 var v7k = 0,
                     e7k, t7k = f7k,
                     I7k = [];
                 while (v7k < V7k) {
                     var Z7k = b7k[v7k];
                     for (e7k in t7k) {
                         if (t7k[e7k].key == Z7k) {
                             t7k = t7k[e7k].children;
                             break;
                         }
                     }
                     v7k++;
                 }
                 v7k = 0;
                 while (v7k < t7k.length) {
                     if (t7k[v7k].invalid) {
                         I7k.push(t7k[v7k].key);
                     }
                     v7k++;
                 }
                 return I7k;
             }
             function r7k(d7k, l7k) {
                 var S7k = [];
                 while (d7k) {
                     S7k[--d7k] = true;
                 }
                 S7k[l7k] = false;
                 return S7k;
             }
             function M7k(z7k) {
                 var C7k = [],
                     h7k;
                 for (h7k = 0; h7k < z7k; h7k++) {
                     C7k[h7k] = R8i.labels && R8i.labels[h7k] ? R8i.labels[h7k] : h7k;
                 }
                 return C7k;
             }
             function o7k(i7k, A7k, w7k) {
                 var H7k = 0,
                     c7k, E7k, m7k, R7k = [
                         []
                     ],
                     P7k = A8i;
                 if (A7k) {
                     for (c7k = 0; c7k < A7k; c7k++) {
                         if (T8i) {
                             R7k[0][c7k] = {};
                         } else {
                             R7k[c7k] = [{}];
                         }
                     }
                 }
                 while (H7k < i7k.length) {
                     if (T8i) {
                         R7k[0][H7k] = K7k(P7k, Y7k[H7k]);
                     } else {
                         R7k[H7k] = [K7k(P7k, Y7k[H7k])];
                     }
                     c7k = 0;
                     m7k = z8i;
                     while (c7k < P7k.length && m7k === z8i) {
                         if (P7k[c7k].key == i7k[H7k] && (w7k !== z8i && H7k <= w7k || w7k === z8i)) {
                             m7k = c7k;
                         }
                         c7k++;
                     }
                     if (m7k !== z8i && P7k[m7k].children) {
                         H7k++;
                         P7k = P7k[m7k].children;
                     } else if ((E7k = W8i(P7k)) && E7k.children) {
                         H7k++;
                         P7k = E7k.children;
                     } else {
                         return R7k;
                     }
                 }
                 return R7k;
             }
             function W8i(W7k, T7k) {
                 if (!W7k) {
                     return false;
                 }
                 var N7k = 0,
                     O7k;
                 while (N7k < W7k.length) {
                     if (!(O7k = W7k[N7k++]).invalid) {
                         return T7k ? N7k - 1 : O7k;
                     }
                 }
                 return false;
             }
             function K7k(Q7k, g7k) {
                 var X7k = {
                         data: [],
                         label: g7k
                     },
                     G7k = 0;
                 while (G7k < Q7k.length) {
                     X7k.data.push({
                         value: Q7k[G7k].key,
                         display: Q7k[G7k].value
                     });
                     G7k++;
                 }
                 return X7k;
             }
             function U7k(Y1k) {
                 if (m8i._isVisible) {
                     H8i('.mbsc-sc-whl-w', m8i._markup).css('display', '').slice(Y1k).hide();
                 }
             }
             function s7k(x1k) {
                 var n1k = [],
                     o1k = x1k,
                     k1k, L1k = true,
                     F1k = 0;
                 while (L1k) {
                     k1k = W8i(o1k);
                     n1k[F1k++] = k1k.key;
                     L1k = k1k.children;
                     if (L1k) {
                         o1k = L1k;
                     }
                 }
                 return n1k;
             }
             function n7k(M1k, q1k) {
                 var a1k = [],
                     K1k = A8i,
                     p1k = 0,
                     s1k = false,
                     D1k, r1k, U1k;
                 if (M1k[p1k] !== z8i && p1k <= q1k) {
                     D1k = 0;
                     r1k = M1k[p1k];
                     U1k = z8i;
                     while (D1k < K1k.length && U1k === z8i) {
                         if (K1k[D1k].key == M1k[p1k] && !K1k[D1k].invalid) {
                             U1k = D1k;
                         }
                         D1k++;
                     }
                 } else {
                     U1k = W8i(K1k, true);
                     r1k = K1k[U1k].key;
                 }
                 s1k = U1k !== z8i ? K1k[U1k].children : false;
                 a1k[p1k] = r1k;
                 while (s1k) {
                     K1k = K1k[U1k].children;
                     p1k++;
                     s1k = false;
                     U1k = z8i;
                     if (M1k[p1k] !== z8i && p1k <= q1k) {
                         D1k = 0;
                         r1k = M1k[p1k];
                         U1k = z8i;
                         while (D1k < K1k.length && U1k === z8i) {
                             if (K1k[D1k].key == M1k[p1k] && !K1k[D1k].invalid) {
                                 U1k = D1k;
                             }
                             D1k++;
                         }
                     } else {
                         U1k = W8i(K1k, true);
                         U1k = U1k === false ? z8i : U1k;
                         r1k = K1k[U1k].key;
                     }
                     s1k = U1k !== z8i && W8i(K1k[U1k].children) ? K1k[U1k].children : false;
                     a1k[p1k] = r1k;
                 }
                 return {
                     lvl: p1k + 1,
                     nVector: a1k
                 };
             }
             function F7k(u1k) {
                 var B1k = [];
                 w8i = w8i > Q8i++ ? w8i : Q8i;
                 u1k.children('li').each(function(I1k) {
                     var j1k = H8i(this),
                         y1k = j1k.clone();
                     y1k.children('ul,ol').remove();
                     var t1k = m8i._processMarkup ? m8i._processMarkup(y1k) : y1k.html().replace(/^\s\s*/, '').replace(/\s\s*$/, ''),
                         e1k = j1k.attr('data-invalid') ? true : false,
                         J1k = {
                             key: j1k.attr('data-val') === z8i || j1k.attr('data-val') === null ? I1k : j1k.attr('data-val'),
                             value: t1k,
                             invalid: e1k,
                             children: null
                         },
                         v1k = j1k.children('ul,ol');
                     if (v1k.length) {
                         J1k.children = F7k(v1k);
                     }
                     B1k.push(J1k);
                 });
                 Q8i--;
                 return B1k;
             }
             function D7k(V1k, h1k, S1k) {
                 var Z1k, b1k = (h1k || 0) + 1,
                     d1k = [],
                     f1k = {},
                     l1k = {};
                 f1k = o7k(V1k, null, h1k);
                 for (Z1k = 0; Z1k < V1k.length; Z1k++) {
                     m8i._tempWheelArray[Z1k] = V1k[Z1k] = S1k.nVector[Z1k] || 0;
                 }
                 while (b1k < S1k.lvl) {
                     l1k[b1k] = T8i ? f1k[0][b1k] : f1k[b1k][0];
                     d1k.push(b1k++);
                 }
                 U7k(S1k.lvl);
                 G8i = V1k.slice(0);
                 if (d1k.length) {
                     O8i = true;
                     m8i.changeWheel(l1k);
                 }
             }
             H8i('#' + X8i).remove();
             if (R8i.showInput) {
                 i8i = H8i('<input type="text" id="' + X8i + '" value="" class="' + R8i.inputClass + '" placeholder="' + (R8i.placeholder || '') + '" readonly />').insertBefore(N8i);
                 R8i.anchor = i8i;
                 m8i.attachShow(i8i);
             }
             if (!R8i.wheelArray) {
                 N8i.hide();
             }
             return {
                 wheels: k7k,
                 layout: g8i,
                 headerText: false,
                 setOnTap: w8i == 1,
                 formatValue: function(C1k) {
                     if (E8i === z8i) {
                         E8i = n7k(C1k, C1k.length).lvl;
                     }
                     return C1k.slice(0, E8i).join(' ');
                 },
                 parseValue: function(z1k) {
                     return z1k ? (z1k + '').split(' ') : (R8i.defaultValue || L7k).slice(0);
                 },
                 onBeforeShow: function() {
                     var H1k = m8i.getArrayVal(true);
                     G8i = H1k.slice(0);
                     R8i.wheels = o7k(H1k, w8i, w8i);
                     O8i = true;
                 },
                 onWheelGestureStart: function(c1k) {
                     R8i.readonly = r7k(w8i, c1k.index);
                 },
                 onWheelAnimationEnd: function(w1k) {
                     var P1k = w1k.index,
                         R1k = m8i.getArrayVal(true),
                         m1k = n7k(R1k, P1k);
                     E8i = m1k.lvl;
                     R8i.readonly = x7k;
                     if (R1k[P1k] != G8i[P1k]) {
                         D7k(R1k, P1k, m1k);
                     }
                 },
                 onFill: function(E1k) {
                     E8i = z8i;
                     if (i8i) {
                         i8i.val(E1k.valueText);
                     }
                 },
                 validate: function(W1k) {
                     var i1k = W1k.values,
                         N1k = W1k.index,
                         A1k = n7k(i1k, i1k.length);
                     E8i = A1k.lvl;
                     if (N1k === z8i) {
                         U7k(A1k.lvl);
                         if (!O8i) {
                             D7k(i1k, N1k, A1k);
                         }
                     }
                     O8i = false;
                     return {
                         disabled: q7k(E8i, A8i, i1k)
                     };
                 },
                 onDestroy: function() {
                     if (i8i) {
                         i8i.remove();
                     }
                     N8i.show();
                 }
             };
         };
     }());
     (function() {
         var O1k = mobiscroll,
             T1k = O1k.$,
             G1k = O1k.presets.scroller;
         O1k.presetShort('image');
         G1k.image = function(Q1k) {
             if (Q1k.settings.enhance) {
                 Q1k._processMarkup = function(X1k) {
                     var g1k = X1k.attr('data-icon');
                     X1k.children().each(function(L0k, Y0k) {
                         Y0k = T1k(Y0k);
                         if (Y0k.is('img')) {
                             T1k('<div class="mbsc-img-c"></div>').insertAfter(Y0k).append(Y0k.addClass('mbsc-img'));
                         } else if (Y0k.is('p')) {
                             Y0k.addClass('mbsc-img-txt');
                         }
                     });
                     if (g1k) {
                         X1k.prepend('<div class="mbsc-ic mbsc-ic-' + g1k + '"></div');
                     }
                     X1k.html('<div class="mbsc-img-w">' + X1k.html() + '</div>');
                     return X1k.html();
                 };
             }
             return G1k.list.call(this, Q1k);
         };
     }());
     (function() {
         var n0k = mobiscroll,
             o0k = n0k.presets.scroller;
         o0k.treelist = o0k.list;
         n0k.presetShort('list');
         n0k.presetShort('treelist');
     }());
     (function(x0k) {
         var U0k = mobiscroll,
             k0k = U0k.$,
             F0k = U0k.util,
             K0k = F0k.isString,
             p0k = {
                 inputClass: '',
                 invalid: [],
                 rtl: false,
                 showInput: true,
                 groupLabel: 'Groups',
                 dataText: 'text',
                 dataValue: 'value',
                 dataGroup: 'group',
                 dataDisabled: 'disabled'
             };
         U0k.presetShort('select');
         U0k.presets.scroller.select = function(M0k) {
             var t0k, E0k, j0k, l0k, J0k, B0k, q0k, u0k, a0k, r0k, S0k, H0k = 1000,
                 s0k = k0k(this),
                 w0k = k0k.extend({}, M0k.settings),
                 D0k = k0k.extend(M0k.settings, p0k, w0k),
                 W0k = D0k.readonly,
                 P0k = D0k.layout || (/top|bottom|inline/.test(D0k.display) ? 'liquid' : ''),
                 z0k = P0k == 'liquid',
                 v0k = F0k.isNumeric(D0k.select) ? D0k.select : D0k.select == 'multiple' || s0k.prop('multiple'),
                 f0k = this.id + '_dummy',
                 C0k = k0k('label[for="' + this.id + '"]').attr('for', f0k),
                 R0k = D0k.label !== x0k ? D0k.label : C0k.length ? C0k.text() : s0k.attr('name'),
                 h0k = !!D0k.data,
                 V0k = h0k ? !!D0k.group : k0k('optgroup', s0k).length,
                 e0k = D0k.group,
                 y0k = V0k && e0k && e0k.groupWheel !== false,
                 Z0k = V0k && e0k && y0k && e0k.clustered === true,
                 m0k = V0k && (!e0k || e0k.header !== false && !Z0k),
                 b0k = s0k.val() || [],
                 I0k = [];
             function i0k() {
                 var L4k, n4k, g0k, x4k, Y4k, k4k = 0,
                     o4k = 0,
                     F4k = {};
                 a0k = {};
                 J0k = {};
                 u0k = [];
                 l0k = [];
                 I0k.length = 0;
                 if (h0k) {
                     k0k.each(D0k.data, function(K4k, U4k) {
                         x4k = U4k[D0k.dataText];
                         Y4k = U4k[D0k.dataValue];
                         n4k = U4k[D0k.dataGroup];
                         g0k = {
                             value: Y4k,
                             text: x4k,
                             index: K4k
                         };
                         a0k[Y4k] = g0k;
                         u0k.push(g0k);
                         if (V0k) {
                             if (F4k[n4k] === x0k) {
                                 L4k = {
                                     text: n4k,
                                     value: o4k,
                                     options: [],
                                     index: o4k
                                 };
                                 J0k[o4k] = L4k;
                                 F4k[n4k] = o4k;
                                 l0k.push(L4k);
                                 o4k++;
                             } else {
                                 L4k = J0k[F4k[n4k]];
                             }
                             if (Z0k) {
                                 g0k.index = L4k.options.length;
                             }
                             g0k.group = F4k[n4k];
                             L4k.options.push(g0k);
                         }
                         if (U4k[D0k.dataDisabled]) {
                             I0k.push(Y4k);
                         }
                     });
                 } else {
                     if (V0k) {
                         k0k('optgroup', s0k).each(function(p4k) {
                             J0k[p4k] = {
                                 text: this.label,
                                 value: p4k,
                                 options: [],
                                 index: p4k
                             };
                             l0k.push(J0k[p4k]);
                             k0k('option', this).each(function(D4k) {
                                 g0k = {
                                     value: this.value,
                                     text: this.text,
                                     index: Z0k ? D4k : k4k++,
                                     group: p4k
                                 };
                                 a0k[this.value] = g0k;
                                 u0k.push(g0k);
                                 J0k[p4k].options.push(g0k);
                                 if (this.disabled) {
                                     I0k.push(this.value);
                                 }
                             });
                         });
                     } else {
                         k0k('option', s0k).each(function(M4k) {
                             g0k = {
                                 value: this.value,
                                 text: this.text,
                                 index: M4k
                             };
                             a0k[this.value] = g0k;
                             u0k.push(g0k);
                             if (this.disabled) {
                                 I0k.push(this.value);
                             }
                         });
                     }
                 }
                 if (u0k.length) {
                     E0k = u0k[0].value;
                 }
                 if (m0k) {
                     u0k = [];
                     k4k = 0;
                     k0k.each(J0k, function(r4k, s4k) {
                         Y4k = '__group' + r4k;
                         g0k = {
                             text: s4k.text,
                             value: Y4k,
                             group: r4k,
                             index: k4k++,
                             cssClass: 'mbsc-sel-gr'
                         };
                         a0k[Y4k] = g0k;
                         u0k.push(g0k);
                         I0k.push(g0k.value);
                         k0k.each(s4k.options, function(q4k, a4k) {
                             a4k.index = k4k++;
                             u0k.push(a4k);
                         });
                     });
                 }
             }
             function A0k(u4k, y4k, J4k) {
                 var B4k, j4k = [];
                 for (B4k = 0; B4k < u4k.length; B4k++) {
                     j4k.push({
                         value: u4k[B4k].value,
                         display: u4k[B4k].text,
                         cssClass: u4k[B4k].cssClass
                     });
                 }
                 return {
                     circular: false,
                     multiple: y4k,
                     data: j4k,
                     label: J4k
                 };
             }
             function N0k() {
                 return A0k(l0k, false, D0k.groupLabel);
             }
             function c0k() {
                 return A0k(Z0k ? J0k[j0k].options : u0k, v0k, R0k);
             }
             function O0k() {
                 var t4k, e4k, v4k = [
                     []
                 ];
                 if (y0k) {
                     t4k = N0k();
                     if (z0k) {
                         v4k[0][B0k] = t4k;
                     } else {
                         v4k[B0k] = [t4k];
                     }
                 }
                 e4k = c0k();
                 if (z0k) {
                     v4k[0][r0k] = e4k;
                 } else {
                     v4k[r0k] = [e4k];
                 }
                 return v4k;
             }
             function d0k(I4k) {
                 if (v0k) {
                     if (I4k && K0k(I4k)) {
                         I4k = I4k.split(',');
                     }
                     if (k0k.isArray(I4k)) {
                         I4k = I4k[0];
                     }
                 }
                 q0k = I4k === x0k || I4k === null || I4k === '' || !a0k[I4k] ? E0k : I4k;
                 if (y0k) {
                     j0k = a0k[q0k] ? a0k[q0k].group : null;
                 }
             }
             function X0k(b4k, V4k) {
                 var Z4k = b4k ? M0k._tempWheelArray : M0k._hasValue ? M0k._wheelArray : null;
                 return Z4k ? D0k.group && V4k ? Z4k : Z4k[r0k] : null;
             }
             function Q0k(l4k) {
                 var f4k, S4k, d4k = [];
                 if (v0k) {
                     for (f4k in M0k._tempSelected[r0k]) {
                         d4k.push(a0k[f4k] ? a0k[f4k].text : '');
                     }
                     return d4k.join(', ');
                 }
                 S4k = l4k[r0k];
                 return a0k[S4k] ? a0k[S4k].text : '';
             }
             function G0k() {
                 var h4k = M0k.getVal(),
                     C4k = M0k._tempValue;
                 t0k.val(C4k);
                 s0k.val(h4k);
             }
             function T0k() {
                 var z4k = {};
                 z4k[r0k] = c0k();
                 S0k = true;
                 M0k.changeWheel(z4k);
             }
             M0k.setVal = function(H4k, P4k, R4k, c4k, m4k) {
                 if (v0k) {
                     if (H4k && K0k(H4k)) {
                         H4k = H4k.split(',');
                     }
                     M0k._tempSelected[r0k] = F0k.arrayToObject(H4k);
                     if (!c4k) {
                         M0k._selected[r0k] = F0k.arrayToObject(H4k);
                     }
                     H4k = H4k ? H4k[0] : null;
                 }
                 M0k._setVal(H4k, P4k, R4k, c4k, m4k);
             };
             M0k.getVal = function(w4k, E4k) {
                 if (v0k) {
                     return F0k.objectToArray(w4k ? M0k._tempSelected[r0k] : M0k._selected[r0k]);
                 }
                 return X0k(w4k, E4k);
             };
             M0k.refresh = function() {
                 var i4k = {};
                 i0k();
                 D0k.wheels = O0k();
                 d0k(q0k);
                 i4k[r0k] = c0k();
                 M0k._tempWheelArray[r0k] = q0k;
                 if (y0k) {
                     i4k[B0k] = N0k();
                     M0k._tempWheelArray[B0k] = j0k;
                 }
                 if (M0k._isVisible) {
                     M0k.changeWheel(i4k, 0, true);
                 }
             };
             if (!D0k.invalid.length) {
                 D0k.invalid = I0k;
             }
             if (y0k) {
                 B0k = 0;
                 r0k = 1;
             } else {
                 B0k = -1;
                 r0k = 0;
             }
             if (v0k) {
                 s0k.prop('multiple', true);
                 M0k._selected[r0k] = {};
                 if (b0k && K0k(b0k)) {
                     b0k = b0k.split(',');
                 }
                 M0k._selected[r0k] = F0k.arrayToObject(b0k);
             }
             k0k('#' + f0k).remove();
             if (s0k.next().is('input.mbsc-control')) {
                 t0k = s0k.off('.mbsc-form').next().removeAttr('tabindex');
             } else {
                 t0k = k0k('<input type="text" id="' + f0k + '" class="mbsc-control mbsc-control-ev ' + D0k.inputClass + '" readonly />');
                 if (D0k.showInput) {
                     t0k.insertBefore(s0k);
                 }
             }
             M0k.attachShow(t0k.attr('placeholder', D0k.placeholder || ''));
             s0k.addClass('mbsc-sel-hdn').attr('tabindex', -1);
             i0k();
             d0k(s0k.val());
             return {
                 layout: P0k,
                 headerText: false,
                 anchor: t0k,
                 compClass: 'mbsc-sel' + (y0k ? ' mbsc-sel-gr-whl' : '') + (v0k ? ' mbsc-sel-multi' : ''),
                 setOnTap: y0k ? [false, true] : true,
                 formatValue: Q0k,
                 parseValue: function(A4k) {
                     d0k(A4k === x0k ? s0k.val() : A4k);
                     return y0k ? [j0k, q0k] : [q0k];
                 },
                 validate: function(O4k) {
                     var W4k = O4k.index,
                         N4k = [];
                     N4k[r0k] = D0k.invalid;
                     if (Z0k && !S0k && W4k === x0k) {
                         T0k();
                     }
                     S0k = false;
                     return {
                         disabled: N4k
                     };
                 },
                 onRead: G0k,
                 onFill: G0k,
                 onBeforeShow: function() {
                     if (v0k && D0k.counter) {
                         D0k.headerText = function() {
                             var T4k = 0;
                             k0k.each(M0k._tempSelected[r0k], function() {
                                 T4k++;
                             });
                             return (T4k > 1 ? D0k.selectedPluralText || D0k.selectedText : D0k.selectedText).replace(/{count}/, T4k);
                         };
                     }
                     d0k(s0k.val());
                     M0k.settings.wheels = O0k();
                     S0k = true;
                 },
                 onWheelGestureStart: function(G4k) {
                     if (G4k.index == B0k) {
                         D0k.readonly = [false, true];
                     }
                 },
                 onWheelAnimationEnd: function(X4k) {
                     var Q4k = M0k.getArrayVal(true);
                     if (X4k.index == B0k) {
                         D0k.readonly = W0k;
                         if (Q4k[B0k] != j0k) {
                             j0k = Q4k[B0k];
                             q0k = J0k[j0k].options[0].value;
                             Q4k[r0k] = q0k;
                             if (Z0k) {
                                 T0k();
                             } else {
                                 M0k.setArrayVal(Q4k, false, false, true, H0k);
                             }
                         }
                     } else if (X4k.index == r0k && Q4k[r0k] != q0k) {
                         q0k = Q4k[r0k];
                         if (y0k && a0k[q0k].group != j0k) {
                             j0k = a0k[q0k].group;
                             Q4k[B0k] = j0k;
                             M0k.setArrayVal(Q4k, false, false, true, H0k);
                         }
                     }
                 },
                 onDestroy: function() {
                     if (!t0k.hasClass('mbsc-control')) {
                         t0k.remove();
                     }
                     s0k.removeClass('mbsc-sel-hdn').removeAttr('tabindex');
                 }
             };
         };
     }());
     (function(L5k) {
         var n5k = function() {},
             g4k = mobiscroll,
             Y5k = g4k.$;
         g4k.util.addIcon = function(F5k, K5k) {
             var o5k = {},
                 x5k = F5k.parent(),
                 U5k = x5k.find('.mbsc-err-msg'),
                 p5k = F5k.attr('data-icon-align') || 'left',
                 k5k = F5k.attr('data-icon');
             Y5k('<span class="mbsc-input-wrap"></span>').insertAfter(F5k).append(F5k);
             if (U5k) {
                 x5k.find('.mbsc-input-wrap').append(U5k);
             }
             if (k5k) {
                 if (k5k.indexOf('{') !== -1) {
                     o5k = JSON.parse(k5k);
                 } else {
                     o5k[p5k] = k5k;
                 }
             }
             if (k5k || K5k) {
                 Y5k.extend(o5k, K5k);
                 x5k.addClass((o5k.right ? 'mbsc-ic-right ' : '') + (o5k.left ? ' mbsc-ic-left' : '')).find('.mbsc-input-wrap').append(o5k.left ? '<span class="mbsc-input-ic mbsc-left-ic mbsc-ic mbsc-ic-' + o5k.left + '"></span>' : '').append(o5k.right ? '<span class="mbsc-input-ic mbsc-right-ic mbsc-ic mbsc-ic-' + o5k.right + '"></span>' : '');
             }
         };
         g4k.classes.Progress = function(Z5k, f5k, S5k) {
             var y5k, M5k, s5k, b5k, t5k, e5k, u5k, a5k, B5k, r5k, I5k, q5k, v5k, D5k = this;
             function V5k() {
                 var d5k = j5k('value', a5k);
                 if (d5k !== q5k) {
                     J5k(d5k);
                 }
             }
             function j5k(h5k, C5k) {
                 var l5k = M5k.attr(h5k);
                 return l5k === L5k || l5k === '' ? C5k : +l5k;
             }
             function J5k(z5k, P5k, H5k, c5k) {
                 z5k = Math.min(B5k, Math.max(z5k, a5k));
                 b5k.css('width', (z5k - a5k) * 100 / (B5k - a5k) + '%');
                 if (H5k === L5k) {
                     H5k = true;
                 }
                 if (c5k === L5k) {
                     c5k = H5k;
                 }
                 if (z5k !== q5k || P5k) {
                     D5k._display(z5k);
                 }
                 if (z5k !== q5k) {
                     q5k = z5k;
                     if (H5k) {
                         M5k.attr('value', q5k);
                     }
                     if (c5k) {
                         M5k.trigger('change');
                     }
                 }
             }
             g4k.classes.Base.call(this, Z5k, f5k, true);
             D5k._onInit = n5k;
             D5k._onDestroy = n5k;
             D5k._display = function(R5k) {
                 v5k = I5k && r5k.returnAffix ? I5k.replace(/\{value\}/, R5k).replace(/\{max\}/, B5k) : R5k;
                 if (t5k) {
                     t5k.html(v5k);
                 }
                 if (y5k) {
                     y5k.html(v5k);
                 }
             };
             D5k._attachChange = function() {
                 M5k.on('change', V5k);
             };
             D5k._init = function(w5k) {
                 var E5k, i5k, m5k, A5k;
                 r5k = D5k.settings;
                 M5k = Y5k(Z5k);
                 A5k = M5k.parent().hasClass('mbsc-input-wrap');
                 s5k = D5k._$parent = A5k ? s5k : M5k.parent();
                 a5k = D5k._min = w5k.min === L5k ? j5k('min', r5k.min) : w5k.min;
                 B5k = D5k._max = w5k.max === L5k ? j5k('max', r5k.max) : w5k.max;
                 q5k = j5k('value', a5k);
                 E5k = M5k.attr('data-val') || r5k.val;
                 m5k = M5k.attr('data-step-labels');
                 m5k = m5k ? JSON.parse(m5k) : r5k.stepLabels;
                 I5k = M5k.attr('data-template') || (B5k == 100 && !r5k.template ? '{value}%' : r5k.template);
                 if (!A5k) {
                     if (D5k._wrap) {
                         g4k.util.addIcon(M5k);
                     }
                     s5k.find('.mbsc-input-wrap').append('<span class="mbsc-progress-cont"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-progress-bar"></span></span></span>');
                     b5k = D5k._$progress = s5k.find('.mbsc-progress-bar');
                     e5k = D5k._$track = s5k.find('.mbsc-progress-track');
                 } else {
                     if (E5k) {
                         y5k.remove();
                         s5k.removeClass('mbsc-progress-value-' + (E5k == 'right' ? 'right' : 'left'));
                     }
                     if (m5k) {
                         Y5k('.mbsc-progress-step-label', e5k).remove();
                     }
                 }
                 if (u5k) {
                     s5k.removeClass(u5k);
                 }
                 u5k = D5k._css + ' mbsc-progress-w mbsc-control-w mbsc-' + r5k.theme + (r5k.baseTheme ? ' mbsc-' + r5k.baseTheme : '') + (r5k.rtl ? ' mbsc-rtl' : ' mbsc-ltr');
                 s5k.addClass(u5k);
                 M5k.attr('min', a5k).attr('max', B5k);
                 if (E5k) {
                     y5k = Y5k('<span class="mbsc-progress-value"></span>');
                     s5k.addClass('mbsc-progress-value-' + (E5k == 'right' ? 'right' : 'left')).find('.mbsc-input-wrap').append(y5k);
                 }
                 if (m5k) {
                     for (i5k = 0; i5k < m5k.length; ++i5k) {
                         e5k.append('<span class="mbsc-progress-step-label" style="' + (r5k.rtl ? 'right' : 'left') + ': ' + (m5k[i5k] - a5k) * 100 / (B5k - a5k) + '%" >' + m5k[i5k] + '</span>');
                     }
                 }
                 t5k = Y5k(M5k.attr('data-target') || r5k.target);
                 D5k._onInit(w5k);
                 if (!A5k) {
                     D5k._attachChange();
                 }
                 D5k.refresh();
             };
             D5k._destroy = function() {
                 D5k._onDestroy();
                 s5k.find('.mbsc-progress-cont').remove();
                 s5k.removeClass(u5k).find('.mbsc-input-wrap').before(M5k).remove();
                 M5k.removeClass('mbsc-control').off('change', V5k);
             };
             D5k.refresh = function() {
                 J5k(j5k('value', a5k), true, false);
             };
             D5k.getVal = function() {
                 return q5k;
             };
             D5k.setVal = function(N5k, W5k, O5k) {
                 J5k(N5k, true, W5k, O5k);
             };
             if (!S5k) {
                 D5k.init(f5k);
             }
         };
         g4k.classes.Progress.prototype = {
             _class: 'progress',
             _css: 'mbsc-progress',
             _hasTheme: true,
             _hasLang: true,
             _wrap: true,
             _defaults: {
                 min: 0,
                 max: 100,
                 returnAffix: true
             }
         };
         g4k.presetShort('progress', 'Progress');
     }());
     (function(g5k) {
         var Y6k = function() {},
             G5k = mobiscroll,
             T5k = G5k.$,
             X5k = G5k.util,
             Q5k = X5k.getCoord,
             L6k = X5k.testTouch;
         G5k.classes.Slider = function(S6k, n2k, o2k) {
             var k6k, z6k, v6k, s6k, R6k, K6k, y6k, g6k, M6k, u6k, m6k, E6k, N6k, l6k, J6k, Y2k, r6k, e6k, t6k, P6k, q6k, W6k, D6k, F6k, j6k, a6k, x6k, U6k, f6k, d6k, i6k, h6k, Z6k, C6k, o6k, n6k = this,
                 c6k = new Date();
             function A6k(k2k) {
                 if (L6k(k2k, this) && !u6k && !S6k.disabled) {
                     if (U6k.stopProp) {
                         k2k.stopPropagation();
                     }
                     u6k = true;
                     j6k = false;
                     m6k = false;
                     d6k = Q5k(k2k, 'X');
                     i6k = Q5k(k2k, 'Y');
                     J6k = d6k;
                     M6k.removeClass('mbsc-progress-anim');
                     z6k = a6k ? T5k('.mbsc-slider-handle', this) : s6k;
                     if (v6k) {
                         v6k.removeClass('mbsc-handle-curr');
                     }
                     v6k = z6k.parent().addClass('mbsc-active mbsc-handle-curr');
                     r6k = +z6k.attr('data-index');
                     C6k = M6k[0].offsetWidth;
                     l6k = M6k[0].getBoundingClientRect().left;
                     if (k2k.type === 'mousedown') {
                         k2k.preventDefault();
                         T5k(document).on('mousemove', b6k).on('mouseup', V6k);
                     }
                 }
             }
             function b6k(F2k) {
                 if (u6k) {
                     J6k = Q5k(F2k, 'X');
                     Y2k = Q5k(F2k, 'Y');
                     E6k = J6k - d6k;
                     N6k = Y2k - i6k;
                     if (Math.abs(E6k) > 5 || j6k) {
                         j6k = true;
                         if (Math.abs(c6k - new Date()) > 50) {
                             c6k = new Date();
                             L2k(J6k, U6k.round, W6k);
                         }
                     }
                     if (j6k) {
                         F2k.preventDefault();
                     } else if (Math.abs(N6k) > 7) {
                         w6k(F2k);
                     }
                 }
             }
             function V6k(x2k) {
                 if (u6k) {
                     x2k.preventDefault();
                     if (!a6k) {
                         M6k.addClass('mbsc-progress-anim');
                     }
                     L2k(J6k, true, true);
                     if (!j6k && !m6k) {
                         X5k.preventClick();
                         n6k._onTap(o6k[r6k]);
                     }
                     w6k();
                 }
             }
             function O6k() {
                 if (u6k) {
                     w6k();
                 }
             }
             function T6k() {
                 var U2k = n6k._readValue(T5k(this)),
                     K2k = +T5k(this).attr('data-index');
                 if (U2k !== o6k[K2k]) {
                     o6k[K2k] = U2k;
                     B6k(U2k, K2k);
                 }
             }
             function G6k(p2k) {
                 p2k.stopPropagation();
             }
             function Q6k(D2k) {
                 D2k.preventDefault();
             }
             function X6k(s2k) {
                 var M2k;
                 if (!S6k.disabled) {
                     switch (s2k.keyCode) {
                         case 38:
                         case 39:
                             M2k = 1;
                             break;
                         case 40:
                         case 37:
                             M2k = -1;
                             break;
                     }
                     if (M2k) {
                         s2k.preventDefault();
                         if (!Z6k) {
                             r6k = +T5k(this).attr('data-index');
                             B6k(o6k[r6k] + x6k * M2k, r6k, true);
                             Z6k = setInterval(function() {
                                 B6k(o6k[r6k] + x6k * M2k, r6k, true);
                             }, 200);
                         }
                     }
                 }
             }
             function I6k(a2k) {
                 a2k.preventDefault();
                 clearInterval(Z6k);
                 Z6k = null;
             }
             function w6k() {
                 u6k = false;
                 v6k.removeClass('mbsc-active');
                 T5k(document).off('mousemove', b6k).off('mouseup', V6k);
             }
             function L2k(B2k, u2k, j2k) {
                 var q2k = u2k ? Math.min(Math.round(Math.max((B2k - l6k) * 100 / C6k, 0) / f6k / x6k) * x6k * 100 / (D6k - F6k), 100) : Math.max(0, Math.min((B2k - l6k) * 100 / C6k, 100));
                 if (q6k) {
                     q2k = 100 - q2k;
                 }
                 B6k(Math.round((F6k + q2k / f6k) * h6k) / h6k, r6k, j2k, q2k);
             }
             function p6k(y2k) {
                 return (y2k - F6k) * 100 / (D6k - F6k);
             }
             function H6k(v2k, t2k) {
                 var J2k = k6k.attr(v2k);
                 return J2k === g5k || J2k === '' ? t2k : J2k === 'true';
             }
             function B6k(e2k, I2k, d2k, b2k, l2k, V2k) {
                 var S2k = s6k.eq(I2k),
                     Z2k = S2k.parent();
                 e2k = Math.min(D6k, Math.max(e2k, F6k));
                 if (V2k === g5k) {
                     V2k = d2k;
                 }
                 if (P6k) {
                     if (I2k === 0) {
                         e2k = Math.min(e2k, o6k[1]);
                         y6k.css({
                             width: p6k(o6k[1]) - p6k(e2k) + '%',
                             left: q6k ? 'auto' : p6k(e2k) + '%',
                             right: q6k ? p6k(e2k) + '%' : 'auto'
                         });
                     } else {
                         e2k = Math.max(e2k, o6k[0]);
                         y6k.css({
                             width: p6k(e2k) - p6k(o6k[0]) + '%'
                         });
                     }
                 } else if (a6k || !e6k) {
                     Z2k.css({
                         left: q6k ? 'auto' : (b2k || p6k(e2k)) + '%',
                         right: q6k ? (b2k || p6k(e2k)) + '%' : 'auto'
                     });
                 } else {
                     y6k.css('width', (b2k || p6k(e2k)) + '%');
                 }
                 if (t6k) {
                     g6k.eq(I2k).html(e2k);
                 }
                 if (e2k > F6k) {
                     Z2k.removeClass('mbsc-slider-start');
                 } else if (o6k[I2k] > F6k || l2k) {
                     Z2k.addClass('mbsc-slider-start');
                 }
                 if (!a6k && (o6k[I2k] != e2k || l2k)) {
                     n6k._display(e2k);
                 }
                 if (d2k && o6k[I2k] != e2k) {
                     m6k = true;
                     o6k[I2k] = e2k;
                     n6k._fillValue(e2k, I2k, V2k);
                 }
                 S2k.attr('aria-valuenow', e2k);
             }
             G5k.classes.Progress.call(this, S6k, n2k, true);
             n6k._onTap = Y6k;
             n6k.__onInit = Y6k;
             n6k._readValue = function(h2k) {
                 return +h2k.val();
             };
             n6k._fillValue = function(z2k, C2k, H2k) {
                 k6k.eq(C2k).val(z2k);
                 if (H2k) {
                     k6k.eq(C2k).trigger('change');
                 }
             };
             n6k._attachChange = function() {
                 k6k.on(U6k.changeEvent, T6k);
             };
             n6k._onInit = function(m2k) {
                 var P2k, R2k, w2k;
                 if (K6k) {
                     K6k.removeClass('mbsc-slider-has-tooltip');
                     if (x6k != 1) {
                         T5k('.mbsc-slider-step', M6k).remove();
                     }
                 }
                 n6k.__onInit();
                 K6k = n6k._$parent;
                 M6k = n6k._$track;
                 y6k = n6k._$progress;
                 k6k = K6k.find('input');
                 U6k = n6k.settings;
                 F6k = n6k._min;
                 D6k = n6k._max;
                 x6k = m2k.step === g5k ? +k6k.attr('step') || U6k.step : m2k.step;
                 W6k = H6k('data-live', U6k.live);
                 t6k = H6k('data-tooltip', U6k.tooltip);
                 e6k = H6k('data-highlight', U6k.highlight) && k6k.length < 3;
                 h6k = x6k % 1 !== 0 ? 100 / (+(x6k % 1).toFixed(2) * 100) : 1;
                 f6k = 100 / (D6k - F6k) || 100;
                 a6k = k6k.length > 1;
                 P6k = e6k && k6k.length == 2;
                 q6k = U6k.rtl;
                 o6k = [];
                 if (t6k) {
                     K6k.addClass('mbsc-slider-has-tooltip');
                 }
                 if (x6k != 1) {
                     R2k = (D6k - F6k) / x6k;
                     for (P2k = 0; P2k <= R2k; ++P2k) {
                         M6k.append('<span class="mbsc-slider-step" style="' + (q6k ? 'right' : 'left') + ':' + 100 / R2k * P2k + '%"></span>');
                     }
                 }
                 if (s6k) {
                     w2k = true;
                     s6k.parent().remove();
                 }
                 k6k.each(function(E2k) {
                     o6k[E2k] = n6k._readValue(T5k(this));
                     T5k(this).attr('data-index', E2k);
                     if (this.type == 'range') {
                         T5k(this).attr('min', F6k).attr('max', D6k).attr('step', x6k);
                     }
                     if (U6k.handle) {
                         (e6k ? y6k : M6k).append('<span class="mbsc-slider-handle-cont' + (P6k && !E2k ? ' mbsc-slider-handle-left' : '') + '">' + '<span tabindex="0" class="mbsc-slider-handle" aria-valuemin="' + F6k + '" aria-valuemax="' + D6k + '" data-index="' + E2k + '"></span>' + (t6k ? '<span class="mbsc-slider-tooltip"></span>' : '') + '</span>');
                     }
                 });
                 s6k = K6k.find('.mbsc-slider-handle');
                 g6k = K6k.find('.mbsc-slider-tooltip');
                 R6k = K6k.find(a6k ? '.mbsc-slider-handle-cont' : '.mbsc-progress-cont');
                 s6k.on('keydown', X6k).on('keyup', I6k).on('blur', I6k);
                 R6k.on('touchstart mousedown', A6k).on('touchmove', b6k).on('touchend touchcancel', V6k).on('pointercancel', O6k);
                 if (!w2k) {
                     k6k.on('click', G6k);
                     K6k.on('click', Q6k);
                 }
             };
             n6k._onDestroy = function() {
                 K6k.off('click', Q6k);
                 k6k.off(U6k.changeEvent, T6k).off('click', G6k);
                 s6k.off('keydown', X6k).off('keyup', I6k).off('blur', I6k);
                 R6k.off('touchstart mousedown', A6k).off('touchmove', b6k).off('touchend', V6k).off('touchcancel pointercancel', O6k);
             };
             n6k.refresh = function() {
                 k6k.each(function(i2k) {
                     B6k(n6k._readValue(T5k(this)), i2k, true, false, true, false);
                 });
             };
             n6k.getVal = function() {
                 return a6k ? o6k.slice(0) : o6k[0];
             };
             n6k.setVal = n6k._setVal = function(A2k, W2k, N2k) {
                 if (!T5k.isArray(A2k)) {
                     A2k = [A2k];
                 }
                 T5k.each(A2k, function(O2k, T2k) {
                     B6k(T2k, O2k, true, false, true, N2k);
                 });
             };
             if (!o2k) {
                 n6k.init(n2k);
             }
         };
         G5k.classes.Slider.prototype = {
             _class: 'progress',
             _css: 'mbsc-progress mbsc-slider',
             _hasTheme: true,
             _hasLang: true,
             _wrap: true,
             _defaults: {
                 changeEvent: 'change',
                 stopProp: true,
                 min: 0,
                 max: 100,
                 step: 1,
                 live: true,
                 highlight: true,

                 handle: true,
                 round: true,
                 returnAffix: true
             }
         };
         G5k.presetShort('slider', 'Slider');
     }());
     (function(g2k) {
         var L3k, n3k = function() {},
             Q2k = mobiscroll,
             G2k = Q2k.$,
             Y3k = Q2k.util,
             X2k = Y3k.getCoord,
             o3k = Y3k.testTouch;
         Q2k.classes.Form = function(s3k, a3k) {
             var k3k, D3k, p3k, U3k = '',
                 F3k = G2k(s3k),
                 x3k = this;
             function M3k(u3k) {
                 var v3k = {},
                     j3k = u3k[0],
                     e3k = u3k.parent(),
                     t3k = u3k.attr('data-password-toggle'),
                     y3k = u3k.attr('data-icon-show') || 'eye',
                     J3k = u3k.attr('data-icon-hide') || 'eye-blocked';
                 if (t3k) {
                     v3k.right = j3k.type == 'password' ? y3k : J3k;
                 }
                 Y3k.addIcon(u3k, v3k);
                 if (t3k) {
                     x3k.tap(e3k.find('.mbsc-right-ic'), function() {
                         if (j3k.type == "text") {
                             j3k.type = "password";
                             G2k(this).addClass('mbsc-ic-' + y3k).removeClass('mbsc-ic-' + J3k);
                         } else {
                             j3k.type = "text";
                             G2k(this).removeClass('mbsc-ic-' + y3k).addClass('mbsc-ic-' + J3k);
                         }
                     });
                 }
             }
             function B3k() {
                 var I3k = this;
                 if (!G2k(I3k).hasClass('mbsc-textarea-scroll')) {
                     var Z3k = I3k.scrollHeight - I3k.offsetHeight,
                         b3k = I3k.offsetHeight + Z3k;
                     I3k.scrollTop = 0;
                     I3k.style.height = b3k + 'px';
                 }
             }
             function q3k(V3k) {
                 var f3k, S3k, d3k, l3k = G2k(V3k).attr('rows') || 6;
                 if (V3k.offsetHeight) {
                     V3k.style.height = '';
                     d3k = V3k.scrollHeight - V3k.offsetHeight;
                     f3k = V3k.offsetHeight + (d3k > 0 ? d3k : 0);
                     S3k = Math.round(f3k / 24);
                     if (S3k > l3k) {
                         V3k.scrollTop = f3k;
                         f3k = 24 * l3k + (f3k - S3k * 24);
                         G2k(V3k).addClass('mbsc-textarea-scroll');
                     } else {
                         G2k(V3k).removeClass('mbsc-textarea-scroll');
                     }
                     if (f3k) {
                         V3k.style.height = f3k + 'px';
                     }
                 }
             }
             function r3k() {
                 clearTimeout(D3k);
                 D3k = setTimeout(function() {
                     G2k('textarea.mbsc-control', F3k).each(function() {
                         q3k(this);
                     });
                 }, 100);
             }
             function K3k(h3k) {
                 return !!(h3k.id && Q2k.instances[h3k.id]);
             }
             Q2k.classes.Base.call(this, s3k, a3k, true);
             x3k.refresh = function(C3k) {
                 G2k('input,select,textarea,progress,button', F3k).each(function() {
                     function T3k() {
                         G2k('input', c3k).val(H3k.selectedIndex != -1 ? H3k.options[H3k.selectedIndex].text : '');
                     }
                     var w3k, E3k, i3k, R3k, O3k, W3k, H3k = this,
                         z3k = G2k(H3k),
                         c3k = z3k.parent(),
                         A3k = z3k.attr('data-role'),
                         P3k = z3k.attr('type') || H3k.nodeName.toLowerCase();
                     if (z3k.attr('data-enhance') != 'false' && mobiscroll.oCgcI) {
                         if (/(switch|range|segmented|stepper)/.test(A3k)) {
                             P3k = A3k;
                         }
                         if (z3k.hasClass('mbsc-control')) {
                             if (/(switch|range|progress)/.test(P3k) && K3k(H3k) && !C3k) {
                                 Q2k.instances[H3k.id].option({
                                     theme: k3k.theme,
                                     lang: k3k.lang,
                                     rtl: k3k.rtl,
                                     onText: k3k.onText,
                                     offText: k3k.offText,
                                     stopProp: k3k.stopProp
                                 });
                             }
                         } else {
                             if (z3k.next().hasClass('mbsc-fr')) {
                                 w3k = z3k.next();
                             }
                             if (P3k != 'button' && P3k != 'submit' && P3k != 'segmented') {
                                 c3k.find('label').addClass('mbsc-label');
                                 c3k.contents().filter(function() {
                                     return this.nodeType == 3 && this.nodeValue && /\S/.test(this.nodeValue);
                                 }).each(function() {
                                     G2k('<span class="mbsc-label"></span>').insertAfter(this).append(this);
                                 });
                             }
                             switch (P3k) {
                                 case 'button':
                                 case 'submit':
                                     i3k = z3k.attr('data-icon');
                                     z3k.addClass('mbsc-btn');
                                     if (i3k) {
                                         z3k.prepend('<span class="mbsc-btn-ic mbsc-ic mbsc-ic-' + i3k + '"></span>');
                                         if (z3k.text() === "") {
                                             z3k.addClass('mbsc-btn-icon-only');
                                         }
                                     }
                                     break;
                                 case 'switch':
                                     if (!K3k(H3k)) {
                                         new Q2k.classes.Switch(H3k, {
                                             theme: k3k.theme,
                                             lang: k3k.lang,
                                             rtl: k3k.rtl,
                                             onText: k3k.onText,
                                             offText: k3k.offText,
                                             stopProp: k3k.stopProp
                                         });
                                     }
                                     break;
                                 case 'checkbox':
                                     c3k.prepend(z3k).addClass('mbsc-checkbox mbsc-control-w');
                                     z3k.after('<span class="mbsc-checkbox-box"></span>');
                                     break;
                                 case 'range':
                                     if (!c3k.hasClass('mbsc-slider') && !K3k(H3k)) {
                                         new Q2k.classes.Slider(H3k, {
                                             theme: k3k.theme,
                                             lang: k3k.lang,
                                             rtl: k3k.rtl,
                                             stopProp: k3k.stopProp
                                         });
                                     }
                                     break;
                                 case 'progress':
                                     if (!K3k(H3k)) {
                                         new Q2k.classes.Progress(H3k, {
                                             theme: k3k.theme,
                                             lang: k3k.lang,
                                             rtl: k3k.rtl
                                         });
                                     }
                                     break;
                                 case 'radio':
                                     c3k.addClass('mbsc-radio mbsc-control-w');
                                     z3k.after('<span class="mbsc-radio-box"><span></span></span>');
                                     break;
                                 case 'select':
                                 case 'select-one':
                                 case 'select-multiple':
                                     if (z3k.prev().is('input.mbsc-control')) {
                                         E3k = z3k.prev();
                                     } else {
                                         E3k = G2k('<input tabindex="-1" type="text" class="mbsc-control mbsc-control-ev" readonly>');
                                     }
                                     M3k(z3k);
                                     c3k.addClass('mbsc-input mbsc-select mbsc-control-w' + (w3k ? ' mbsc-select-inline' : ''));
                                     z3k.after(E3k);
                                     E3k.after('<span class="mbsc-select-ic mbsc-ic mbsc-ic-arrow-down5"></span>');
                                     break;
                                 case 'textarea':
                                     M3k(z3k);
                                     c3k.addClass('mbsc-input mbsc-textarea mbsc-control-w');
                                     break;
                                 case 'segmented':
                                     var m3k, N3k;
                                     if (!z3k.parent().hasClass('mbsc-segmented-item')) {
                                         N3k = G2k('<div class="mbsc-segmented"></div>');
                                         c3k.after(N3k);
                                         G2k('input[name="' + z3k.attr('name') + '"]', F3k).each(function(Q3k, G3k) {
                                             m3k = G2k(G3k).parent().addClass('mbsc-segmented-item');
                                             G2k('<span class="mbsc-segmented-content">' + (G2k(G3k).attr('data-icon') ? ' <span class="mbsc-ic mbsc-ic-' + G2k(G3k).attr('data-icon') + '"></span> ' : '') + '</span>').append(m3k.contents()).appendTo(m3k);
                                             m3k.prepend(G3k);
                                             N3k.append(m3k);
                                         });
                                     }
                                     break;
                                 case 'stepper':
                                     if (!K3k(H3k)) {
                                         new Q2k.classes.Stepper(H3k, {
                                             form: x3k
                                         });
                                     }
                                     break;
                                 case 'hidden':
                                     return;
                                 default:
                                     M3k(z3k);
                                     c3k.addClass('mbsc-input mbsc-control-w');
                                     break;
                             }
                             z3k.addClass('mbsc-control');
                             if (w3k) {
                                 w3k.insertAfter(c3k);
                             }
                         }
                         if (!z3k.hasClass('mbsc-control-ev')) {
                             if (/select/.test(P3k) && !z3k.hasClass('mbsc-comp')) {
                                 z3k.on('change.mbsc-form', T3k);
                                 T3k();
                             }
                             if (P3k == 'textarea') {
                                 z3k.on('keydown.mbsc-form input.mbsc-form', function() {
                                     clearTimeout(D3k);
                                     D3k = setTimeout(function() {
                                         q3k(H3k);
                                     }, 100);
                                 }).on('scroll.mbsc-form', B3k);
                             }
                             z3k.addClass('mbsc-control-ev').on('touchstart.mbsc-form mousedown.mbsc-form', function(X3k) {
                                 if (o3k(X3k, this)) {
                                     O3k = X2k(X3k, 'X');
                                     W3k = X2k(X3k, 'Y');
                                     if (X3k.type == 'touchstart') {
                                         F3k.removeClass('mbsc-no-touch');
                                     }
                                     if (L3k) {
                                         L3k.removeClass('mbsc-active');
                                     }
                                     if (!H3k.disabled) {
                                         R3k = true;
                                         L3k = G2k(this);
                                         G2k(this).addClass('mbsc-active');
                                         p3k('onControlActivate', {
                                             target: this,
                                             domEvent: X3k
                                         });
                                     }
                                 }
                             }).on('touchmove.mbsc-form mousemove.mbsc-form', function(g3k) {
                                 if (R3k && Math.abs(X2k(g3k, 'X') - O3k) > 9 || Math.abs(X2k(g3k, 'Y') - W3k) > 9) {
                                     z3k.removeClass('mbsc-active');
                                     p3k('onControlDeactivate', {
                                         target: z3k[0],
                                         domEvent: g3k
                                     });
                                     R3k = false;
                                 }
                             }).on('touchend.mbsc-form touchcancel.mbsc-form mouseleave.mbsc-form mouseup.mbsc-form', function(Y9k) {
                                 if (R3k && Y9k.type == 'touchend' && !H3k.readOnly) {
                                     H3k.focus();
                                     if (/(button|submit|checkbox|switch|radio)/.test(P3k)) {
                                         Y9k.preventDefault();
                                     }
                                     if (!/select/.test(P3k)) {
                                         var L9k = (Y9k.originalEvent || Y9k).changedTouches[0],
                                             n9k = document.createEvent('MouseEvents');
                                         n9k.initMouseEvent('click', true, true, window, 1, L9k.screenX, L9k.screenY, L9k.clientX, L9k.clientY, false, false, false, false, 0, null);
                                         n9k.tap = true;
                                         H3k.dispatchEvent(n9k);
                                         Y3k.preventClick();
                                     }
                                 }
                                 if (R3k) {
                                     setTimeout(function() {
                                         z3k.removeClass('mbsc-active');
                                         p3k('onControlDeactivate', {
                                             target: z3k[0],
                                             domEvent: Y9k
                                         });
                                     }, 100);
                                 }
                                 R3k = false;
                                 L3k = null;
                             });
                         }
                     }
                 });
                 if (!C3k) {
                     r3k();
                 }
             };
             x3k._init = function() {
                 if (!Q2k.themes.form[k3k.theme]) {
                     k3k.theme = 'mobiscroll';
                 }
                 if (!F3k.hasClass('mbsc-form')) {
                     F3k.on('touchstart', n3k).show();
                     G2k(window).on('resize orientationchange', r3k);
                 }
                 if (U3k) {
                     F3k.removeClass(U3k);
                 }
                 U3k = 'mbsc-form mbsc-no-touch mbsc-' + k3k.theme + (k3k.baseTheme ? ' mbsc-' + k3k.baseTheme : '') + (k3k.rtl ? ' mbsc-rtl' : ' mbsc-ltr');
                 F3k.addClass(U3k);
                 x3k.refresh();
             };
             x3k._destroy = function() {
                 F3k.removeClass(U3k).off('touchstart', n3k);
                 G2k(window).off('resize orientationchange', r3k);
                 G2k('.mbsc-control', F3k).off('.mbsc-form').removeClass('mbsc-control-ev');
                 G2k('.mbsc-progress progress', F3k).mobiscroll('destroy');
                 G2k('.mbsc-slider input', F3k).mobiscroll('destroy');
                 G2k('.mbsc-stepper input', F3k).mobiscroll('destroy');
                 G2k('.mbsc-switch input', F3k).mobiscroll('destroy');
             };
             k3k = x3k.settings;
             p3k = x3k.trigger;
             x3k.init(a3k);
         };
         Q2k.classes.Form.prototype = {
             _hasDef: true,
             _hasTheme: true,
             _hasLang: true,
             _class: 'form',
             _defaults: {
                 tap: true,
                 stopProp: true,
                 lang: 'en'
             }
         };
         Q2k.themes.form.mobiscroll = {};
         Q2k.presetShort('form', 'Form');
         Q2k.classes.Stepper = function(M9k, t9k) {
             var r9k, v9k, Z9k, b9k, K9k, j9k, m9k, d9k, I9k, H9k, P9k, s9k, x9k, U9k, F9k, q9k, z9k, S9k, o9k, p9k = this,
                 k9k = G2k(M9k),
                 u9k, D9k, e9k = o9k,
                 a9k = t9k.form;
             function l9k(w9k) {
                 if (w9k.keyCode == 32) {
                     w9k.preventDefault();
                     if (!K9k && !M9k.disabled) {
                         r9k = G2k(this).addClass('mbsc-active');
                         R9k(w9k);
                     }
                 }
             }
             function h9k(E9k) {
                 if (K9k) {
                     E9k.preventDefault();
                     f9k(true);
                 }
             }
             function C9k(i9k) {
                 if (o3k(i9k, this) && !M9k.disabled) {
                     r9k = G2k(this).addClass('mbsc-active').trigger('focus');
                     if (a9k) {
                         a9k.trigger('onControlActivate', {
                             target: r9k[0],
                             domEvent: i9k
                         });
                     }
                     R9k(i9k);
                     if (i9k.type === 'mousedown') {
                         G2k(document).on('mousemove', J9k).on('mouseup', y9k);
                     }
                 }
             }
             function y9k(A9k) {
                 if (K9k) {
                     A9k.preventDefault();
                     f9k(true, A9k);
                     if (A9k.type === 'mouseup') {
                         G2k(document).off('mousemove', J9k).off('mouseup', y9k);
                     }
                 }
             }
             function J9k(N9k) {
                 if (K9k) {
                     H9k = X2k(N9k, 'X');
                     P9k = X2k(N9k, 'Y');
                     m9k = H9k - z9k;
                     d9k = P9k - S9k;
                     if (Math.abs(m9k) > 7 || Math.abs(d9k) > 7) {
                         f9k();
                     }
                 }
             }
             function c9k() {
                 var W9k;
                 if (!M9k.disabled) {
                     W9k = parseFloat(G2k(this).val());
                     B9k(isNaN(W9k) ? o9k : W9k);
                 }
             }
             function B9k(G9k, O9k, T9k) {
                 e9k = o9k;
                 if (O9k === g2k) {
                     O9k = true;
                 }
                 if (T9k === g2k) {
                     T9k = O9k;
                 }
                 if (G9k !== g2k) {
                     o9k = Math.min(x9k, Math.max(Math.round(G9k / F9k) * F9k, U9k));
                 } else {
                     o9k = Math.min(x9k, Math.max(o9k + (r9k.hasClass('mbsc-stepper-minus') ? -F9k : F9k), U9k));
                 }
                 j9k = true;
                 b9k.removeClass('mbsc-step-disabled');
                 if (O9k) {
                     k9k.val(o9k);
                 }
                 if (o9k == U9k) {
                     Z9k.addClass('mbsc-step-disabled');
                 } else if (o9k == x9k) {
                     v9k.addClass('mbsc-step-disabled');
                 }
                 if (o9k !== e9k && T9k) {
                     k9k.trigger('change');
                 }
             }
             function R9k(Q9k) {
                 if (!K9k) {
                     K9k = true;
                     j9k = false;
                     z9k = X2k(Q9k, 'X');
                     S9k = X2k(Q9k, 'Y');
                     clearInterval(s9k);
                     clearTimeout(s9k);
                     s9k = setTimeout(function() {
                         B9k();
                         s9k = setInterval(function() {
                             B9k();
                         }, 150);
                     }, 300);
                 }
             }
             function f9k(X9k, g9k) {
                 clearInterval(s9k);
                 clearTimeout(s9k);
                 if (!j9k && X9k) {
                     B9k();
                 }
                 K9k = false;
                 j9k = false;
                 r9k.removeClass('mbsc-active');
                 if (a9k) {
                     setTimeout(function() {
                         a9k.trigger('onControlDeactivate', {
                             target: r9k[0],
                             domEvent: g9k
                         });
                     }, 100);
                 }
             }
             function V9k(L8k, n8k) {
                 var Y8k = k9k.attr(L8k);
                 return Y8k === g2k || Y8k === '' ? n8k : +Y8k;
             }
             Q2k.classes.Base.call(this, M9k, t9k, true);
             p9k.getVal = function() {
                 var o8k = parseFloat(k9k.val());
                 o8k = isNaN(o8k) ? o9k : o8k;
                 return Math.min(x9k, Math.max(Math.round(o8k / F9k) * F9k, U9k));
             };
             p9k.setVal = function(k8k, F8k, x8k) {
                 k8k = parseFloat(k8k);
                 B9k(isNaN(k8k) ? o9k : k8k, F8k, x8k);
             };
             p9k._init = function(U8k) {
                 u9k = k9k.parent().hasClass('mbsc-stepper');
                 D9k = u9k ? k9k.closest('.mbsc-stepper-cont') : k9k.parent();
                 q9k = p9k.settings;
                 U9k = U8k.min === g2k ? V9k('min', q9k.min) : U8k.min;
                 x9k = U8k.max === g2k ? V9k('max', q9k.max) : U8k.max;
                 F9k = U8k.step === g2k ? V9k('step', q9k.step) : U8k.step;
                 I9k = k9k.attr('data-val') || q9k.val;
                 o9k = Math.min(x9k, Math.max(Math.round(+M9k.value / F9k) * F9k || 0, U9k));
                 if (!u9k) {
                     D9k.addClass('mbsc-stepper-cont mbsc-control-w').append('<span class="mbsc-segmented mbsc-stepper"></span>').find('.mbsc-stepper').append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-minus ' + (o9k == U9k ? 'mbsc-step-disabled' : '') + '"  tabindex="0"><span class="mbsc-segmented-content"><span class="mbsc-ic mbsc-ic-minus"></span></span></span>').append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-plus ' + (o9k == x9k ? 'mbsc-step-disabled' : '') + '"  tabindex="0"><span class="mbsc-segmented-content"> <span class="mbsc-ic mbsc-ic-plus"></span> </span></span>').prepend(k9k);
                 }
                 Z9k = G2k('.mbsc-stepper-minus', D9k);
                 v9k = G2k('.mbsc-stepper-plus', D9k);
                 if (!u9k) {
                     if (I9k == 'left') {
                         D9k.addClass('mbsc-stepper-val-left');
                         k9k.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>');
                     } else if (I9k == 'right') {
                         D9k.addClass('mbsc-stepper-val-right');
                         v9k.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>');
                     } else {
                         Z9k.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content mbsc-stepper-val"></span></span>');
                     }
                 }
                 k9k.val(o9k).attr('data-role', 'stepper').attr('min', U9k).attr('max', x9k).attr('step', F9k).on('change', c9k);
                 b9k = G2k('.mbsc-stepper-control', D9k).on('keydown', l9k).on('keyup', h9k).on('mousedown touchstart', C9k).on('touchmove', J9k).on('touchend touchcancel', y9k);
                 k9k.addClass('mbsc-stepper-ready mbsc-control');
             };
             p9k._destroy = function() {
                 k9k.removeClass('mbsc-control').off('change', c9k);
                 b9k.off('keydown', l9k).off('keyup', h9k).off('mousedown touchstart', C9k).off('touchmove', J9k).off('touchend touchcancel', y9k);
             };
             p9k.init(t9k);
         };
         Q2k.classes.Stepper.prototype = {
             _class: 'stepper',
             _defaults: {
                 min: 0,
                 max: 100,
                 step: 1
             }
         };
         Q2k.presetShort('stepper', 'Stepper');
         Q2k.classes.Switch = function(M8k, D8k) {
             var p8k, r8k, s8k, K8k = this;
             D8k = D8k || {};
             G2k.extend(D8k, {
                 changeEvent: 'click',
                 min: 0,
                 max: 1,
                 step: 1,
                 live: false,
                 round: false,
                 handle: false,
                 highlight: false
             });
             Q2k.classes.Slider.call(this, M8k, D8k, true);
             K8k._readValue = function() {
                 return M8k.checked ? 1 : 0;
             };
             K8k._fillValue = function(a8k, B8k, q8k) {
                 p8k.prop('checked', !!a8k);
                 if (q8k) {
                     p8k.trigger('change');
                 }
             };
             K8k._onTap = function(u8k) {
                 K8k._setVal(u8k ? 0 : 1);
             };
             K8k.__onInit = function() {
                 s8k = K8k.settings;
                 p8k = G2k(M8k);
                 r8k = p8k.parent();
                 r8k.find('.mbsc-switch-track').remove();
                 r8k.prepend(p8k);
                 p8k.attr('data-role', 'switch').after('<span class="mbsc-progress-cont mbsc-switch-track">' + '<span class="mbsc-progress-track mbsc-progress-anim">' + '<span class="mbsc-slider-handle-cont">' + '<span class="mbsc-slider-handle mbsc-switch-handle" data-index="0">' + '<span class="mbsc-switch-txt-off">' + s8k.offText + '</span>' + '<span class="mbsc-switch-txt-on">' + s8k.onText + '</span>' + '</span></span></span></span>');
                 K8k._$track = r8k.find('.mbsc-progress-track');
             };
             K8k.getVal = function() {
                 return M8k.checked;
             };
             K8k.setVal = function(j8k, y8k, J8k) {
                 K8k._setVal(j8k ? 1 : 0, y8k, J8k);
             };
             K8k.init(D8k);
         };
         Q2k.classes.Switch.prototype = {
             _class: 'switch',
             _css: 'mbsc-switch',
             _hasTheme: true,
             _hasLang: true,
             _defaults: {
                 stopProp: true,
                 offText: 'Off',
                 onText: 'On'
             }
         };
         Q2k.presetShort('switch', 'Switch');
         G2k(function() {
             G2k('[mbsc-enhance]').each(function() {
                 G2k(this).mobiscroll().form();
             });
             G2k(document).on('mbsc-enhance', function(v8k, t8k) {
                 if (G2k(v8k.target).is('[mbsc-enhance]')) {
                     G2k(v8k.target).mobiscroll().form(t8k);
                 } else {
                     G2k('[mbsc-enhance]', v8k.target).each(function() {
                         G2k(this).mobiscroll().form(t8k);
                     });
                 }
             });
             G2k(document).on('mbsc-refresh', function(e8k) {
                 if (G2k(e8k.target).is('[mbsc-enhance]')) {
                     G2k(e8k.target).mobiscroll('refresh');
                 } else {
                     G2k('[mbsc-enhance]', e8k.target).each(function() {
                         G2k(this).mobiscroll('refresh');
                     });
                 }
             });
         });
     }());
     (function() {
         mobiscroll.themes.form['android-holo'] = {};
     }());
     (function() {
         mobiscroll.themes.form.ios = {};
     }());
     (function() {
         var I8k = mobiscroll.$;
         mobiscroll.themes.form.material = {
             onControlActivate: function(V8k) {
                 var b8k, Z8k = I8k(V8k.target);
                 if (Z8k[0].type == 'button' || Z8k[0].type == 'submit') {
                     b8k = Z8k;
                 }
                 if (Z8k.attr('data-role') == 'segmented') {
                     b8k = Z8k.next();
                 }
                 if (Z8k.hasClass('mbsc-stepper-control') && !Z8k.hasClass('mbsc-step-disabled')) {
                     b8k = Z8k.find('.mbsc-segmented-content');
                 }
                 if (b8k) {
                     mobiscroll.themes.material.addRipple(b8k, V8k.domEvent);
                 }
             },
             onControlDeactivate: function() {
                 mobiscroll.themes.material.removeRipple();
             }
         };
     }());
     (function() {
         mobiscroll.themes.form.wp = {};
     }());
     (function() {
         var S8k = mobiscroll,
             f8k = S8k.$;
         S8k.themes.frame.bootstrap = {
             disabledClass: 'disabled',
             activeClass: 'btn-primary',
             activeTabClass: 'active',
             todayClass: 'text-primary',
             onMarkupInserted: function(l8k) {
                 var d8k = f8k(l8k.target);
                 f8k('.mbsc-fr-popup', d8k).addClass('popover');
                 f8k('.mbsc-fr-w', d8k).addClass('popover-content');
                 f8k('.mbsc-fr-hdr', d8k).addClass('popover-title');
                 f8k('.mbsc-fr-arr-i', d8k).addClass('popover');
                 f8k('.mbsc-fr-arr', d8k).addClass('arrow');
                 f8k('.mbsc-fr-btn', d8k).addClass('btn btn-default');
                 f8k('.mbsc-fr-btn-s .mbsc-fr-btn', d8k).removeClass('btn-default').addClass('btn btn-primary');
                 f8k('.mbsc-sc-btn-plus', d8k).addClass('glyphicon glyphicon-chevron-down');
                 f8k('.mbsc-sc-btn-minus', d8k).addClass('glyphicon glyphicon-chevron-up');
                 f8k('.mbsc-cal-next .mbsc-cal-btn-txt', d8k).prepend('<i class="glyphicon glyphicon-chevron-right"></i>');
                 f8k('.mbsc-cal-prev .mbsc-cal-btn-txt', d8k).prepend('<i class="glyphicon glyphicon-chevron-left"></i>');
                 f8k('.mbsc-cal-tabs ul', d8k).addClass('nav nav-tabs');
                 f8k('.mbsc-cal-sc-c', d8k).addClass('popover');
                 f8k('.mbsc-cal-week-nrs-c', d8k).addClass('popover');
                 f8k('.mbsc-cal-events', d8k).addClass('popover');
                 f8k('.mbsc-cal-events-arr', d8k).addClass('arrow');
                 f8k('.mbsc-range-btn', d8k).addClass('btn btn-sm btn-small btn-default');
                 f8k('.mbsc-np-btn', d8k).addClass('btn btn-default');
             },
             onPosition: function(h8k) {
                 setTimeout(function() {
                     f8k('.mbsc-fr-bubble-top, .mbsc-fr-bubble-top .mbsc-fr-arr-i', h8k.target).removeClass('bottom').addClass('top');
                     f8k('.mbsc-fr-bubble-bottom, .mbsc-fr-bubble-bottom .mbsc-fr-arr-i', h8k.target).removeClass('top').addClass('bottom');
                 }, 10);
             }
         };
         S8k.themes.scroller.bootstrap = f8k.extend({}, S8k.themes.frame.bootstrap, {
             dateDisplay: 'Mddyy',
             btnCalPrevClass: '',
             btnCalNextClass: '',
             selectedLineHeight: true,
             onEventBubbleShow: function(z8k) {
                 var C8k = f8k(z8k.eventList);
                 f8k('.mbsc-cal-event-list', C8k).addClass('list-group');
                 f8k('.mbsc-cal-event', C8k).addClass('list-group-item');
                 setTimeout(function() {
                     if (C8k.hasClass('mbsc-cal-events-b')) {
                         C8k.removeClass('top').addClass('bottom');
                     } else {
                         C8k.removeClass('bottom').addClass('top');
                     }
                 }, 10);
             }
         });
     }());
     (function() {
         var c8k = mobiscroll,
             H8k = c8k.$;
         c8k.themes.frame.material = {
             headerText: false,
             btnWidth: false,
             deleteIcon: 'material-backspace',
             onMarkupReady: function(P8k) {
                 c8k.themes.material.initRipple(H8k(P8k.target), '.mbsc-fr-btn-e', 'mbsc-fr-btn-d', 'mbsc-fr-btn-nhl');
             }
         };
         c8k.themes.scroller.material = H8k.extend({}, c8k.themes.frame.material, {
             showLabel: false,
             selectedLineBorder: 2,
             weekDays: 'min',
             icon: {
                 filled: 'material-star',
                 empty: 'material-star-outline'
             },
             checkIcon: 'material-check',
             btnPlusClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-down',
             btnMinusClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-up',
             btnCalPrevClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-left',
             btnCalNextClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-right',
             onEventBubbleShow: function(E8k) {
                 var R8k = H8k(E8k.eventList),
                     m8k = H8k(E8k.target).closest('.mbsc-cal-row').index() < 2,
                     w8k = H8k('.mbsc-cal-event-color', R8k).eq(m8k ? 0 : -1).css('background-color');
                 H8k('.mbsc-cal-events-arr', R8k).css('border-color', m8k ? 'transparent transparent ' + w8k + ' transparent' : w8k + 'transparent transparent transparent');
             }
         });
     }());
     (function(A8k) {
         var N8k = mobiscroll,
             i8k = N8k.$,
             T8k = N8k.util,
             Q8k = T8k.testTouch,
             W8k = T8k.getCoord,
             X8k = T8k.isNumeric,
             G8k = function() {},
             O8k = N8k.classes;
         O8k.Numpad = function(U7C, H7C, m7C) {
             var x7C, M7C, a7C, k7C, Y7C, D7C, l7C, d7C, S7C, V7C, C7C, b7C, B7C, u7C, o7C, j7C, y7C, F7C, q7C, K7C = i8k(U7C),
                 g8k = this,
                 I7C = [],
                 L7C = [],
                 n7C = {},
                 t7C = {},
                 f7C = {
                     107: '+',
                     109: '-'
                 },
                 s7C = {
                     48: 0,
                     49: 1,
                     50: 2,
                     51: 3,
                     52: 4,
                     53: 5,
                     54: 6,
                     55: 7,
                     56: 8,
                     57: 9,
                     96: 0,
                     97: 1,
                     98: 2,
                     99: 3,
                     100: 4,
                     101: 5,
                     102: 6,
                     103: 7,
                     104: 8,
                     105: 9
                 };
             function p7C(i7C) {
                 var w7C, E7C = Y7C.validate.call(U7C, {
                         values: o7C.slice(0),
                         variables: n7C
                     }, g8k) || [],
                     A7C = E7C && E7C.disabled || [];
                 g8k._isValid = E7C.invalid ? false : true;
                 g8k._tempValue = Y7C.formatValue.call(U7C, o7C.slice(0), n7C, g8k);
                 k7C = o7C.length;
                 j7C = E7C.length || F7C;
                 if (g8k._isVisible && mobiscroll.oCgcI) {
                     i8k('.mbsc-np-ph', x7C).each(function(N7C) {
                         i8k(this).html(Y7C.fill == 'ltr' ? N7C >= k7C ? a7C : D7C || o7C[N7C] : N7C >= F7C - j7C ? N7C + k7C < F7C ? a7C : D7C || o7C[N7C + k7C - F7C] : '');
                     });
                     i8k('.mbsc-np-cph', x7C).each(function() {
                         i8k(this).html(n7C[i8k(this).attr('data-var')] || i8k(this).attr('data-ph'));
                     });
                     if (k7C === F7C) {
                         for (w7C = 0; w7C <= 9; w7C++) {
                             A7C.push(w7C);
                         }
                     }
                     i8k('.mbsc-np-btn', x7C).removeClass(M7C);
                     for (w7C = 0; w7C < A7C.length; w7C++) {
                         i8k('.mbsc-np-btn[data-val="' + A7C[w7C] + '"]', x7C).addClass(M7C);
                     }
                     if (g8k._isValid) {
                         i8k('.mbsc-fr-btn-s .mbsc-fr-btn', x7C).removeClass(M7C);
                     } else {
                         i8k('.mbsc-fr-btn-s .mbsc-fr-btn', x7C).addClass(M7C);
                     }
                     if (g8k.live) {
                         g8k._hasValue = i7C || g8k._hasValue;
                         r7C(i7C, false, i7C);
                         if (i7C) {
                             y7C('onSet', {
                                 valueText: g8k._value
                             });
                         }
                     }
                 }
             }
             function r7C(O7C, T7C, W7C, G7C) {
                 if (T7C) {
                     p7C();
                 }
                 if (!G7C) {
                     q7C = o7C.slice(0);
                     t7C = i8k.extend({}, n7C);
                     I7C = L7C.slice(0);
                     g8k._value = g8k._hasValue ? g8k._tempValue : null;
                 }
                 if (O7C) {
                     if (g8k._isInput) {
                         K7C.val(g8k._hasValue && g8k._isValid ? g8k._value : '');
                     }
                     y7C('onFill', {
                         valueText: g8k._hasValue ? g8k._tempValue : '',
                         change: W7C
                     });
                     if (W7C) {
                         g8k._preventChange = true;
                         K7C.trigger('change');
                     }
                 }
             }
             function h7C(L1C) {
                 var Q7C, g7C, X7C = L1C || [],
                     Y1C = [];
                 L7C = [];
                 n7C = {};
                 for (Q7C = 0; Q7C < X7C.length; Q7C++) {
                     if (/:/.test(X7C[Q7C])) {
                         g7C = X7C[Q7C].split(':');
                         n7C[g7C[0]] = g7C[1];
                         L7C.push(g7C[0]);
                     } else {
                         Y1C.push(X7C[Q7C]);
                         L7C.push('digit');
                     }
                 }
                 return Y1C;
             }
             function Z7C(n1C, o1C) {
                 if (!k7C && !o1C && !Y7C.allowLeadingZero || n1C.hasClass('mbsc-fr-btn-d') || n1C.hasClass('mbsc-np-btn-empty')) {
                     return;
                 }
                 if (k7C < F7C) {
                     L7C.push('digit');
                     o7C.push(o1C);
                     p7C(true);
                 }
             }
             function z7C(U1C) {
                 var F1C, k1C, x1C = U1C.attr('data-val'),
                     p1C = U1C.attr('data-track') !== 'false',
                     K1C = U1C.attr('data-var');
                 if (!U1C.hasClass('mbsc-fr-btn-d')) {
                     if (K1C) {
                         k1C = K1C.split(':');
                         if (p1C) {
                             L7C.push(k1C[0]);
                         }
                         n7C[k1C[0]] = k1C[2] === A8k ? k1C[1] : n7C[k1C[0]] == k1C[1] ? k1C[2] : k1C[1];
                     }
                     if (x1C.length + k7C <= j7C) {
                         for (F1C = 0; F1C < x1C.length; ++F1C) {
                             k1C = X8k(x1C[F1C]) ? +x1C[F1C] : x1C[F1C];
                             if (Y7C.allowLeadingZero || k7C || k1C) {
                                 L7C.push('digit');
                                 o7C.push(k1C);
                             }
                         }
                     }
                     p7C(true);
                 }
             }
             function v7C() {
                 var M1C, r1C, D1C = L7C.pop();
                 if (k7C || D1C !== 'digit') {
                     if (D1C !== 'digit' && n7C[D1C]) {
                         delete n7C[D1C];
                         r1C = L7C.slice(0);
                         L7C = [];
                         for (M1C = 0; M1C < r1C.length; M1C++) {
                             if (r1C[M1C] !== D1C) {
                                 L7C.push(r1C[M1C]);
                             }
                         }
                     } else {
                         o7C.pop();
                     }
                     p7C(true);
                 }
             }
             function P7C(s1C) {
                 B7C = true;
                 l7C = W8k(s1C, 'X');
                 d7C = W8k(s1C, 'Y');
                 clearInterval(u7C);
                 clearTimeout(u7C);
                 v7C();
                 u7C = setInterval(function() {
                     v7C();
                 }, 150);
             }
             function c7C() {
                 clearInterval(u7C);
                 B7C = false;
             }
             function R7C(a1C) {
                 if (Q8k(a1C, this)) {
                     P7C(a1C);
                     if (a1C.type === 'mousedown') {
                         i8k(document).on('mousemove', J7C).on('mouseup', e7C);
                     }
                 }
             }
             function J7C(q1C) {
                 if (B7C) {
                     S7C = W8k(q1C, 'X');
                     V7C = W8k(q1C, 'Y');
                     C7C = S7C - l7C;
                     b7C = V7C - d7C;
                     if (Math.abs(C7C) > 7 || Math.abs(b7C) > 7) {
                         c7C();
                     }
                 }
             }
             function e7C(B1C) {
                 if (B7C) {
                     B1C.preventDefault();
                     c7C();
                     if (B1C.type === 'mouseup') {
                         i8k(document).off('mousemove', J7C).off('mouseup', e7C);
                     }
                 }
             }
             O8k.Frame.call(this, U7C, H7C, true);
             g8k.setVal = g8k._setVal = function(u1C, j1C, y1C, J1C) {
                 g8k._hasValue = u1C !== null && u1C !== A8k;
                 o7C = h7C(i8k.isArray(u1C) ? u1C.slice(0) : Y7C.parseValue.call(U7C, u1C, g8k));
                 r7C(j1C, true, y1C === A8k ? j1C : y1C, J1C);
             };
             g8k.getVal = g8k._getVal = function(v1C) {
                 return g8k._hasValue || v1C ? g8k[v1C ? '_tempValue' : '_value'] : null;
             };
             g8k.setArrayVal = g8k.setVal;
             g8k.getArrayVal = function(t1C) {
                 return t1C ? o7C.slice(0) : g8k._hasValue ? q7C.slice(0) : null;
             };
             g8k._readValue = function() {
                 var e1C = K7C.val() || '';
                 if (e1C !== '') {
                     g8k._hasValue = true;
                 }
                 if (D7C) {
                     n7C = {};
                     L7C = [];
                     o7C = [];
                 } else {
                     n7C = g8k._hasValue ? t7C : {};
                     L7C = g8k._hasValue ? I7C : [];
                     o7C = g8k._hasValue && q7C ? q7C.slice(0) : h7C(Y7C.parseValue.call(U7C, e1C, g8k));
                     r7C(false, true);
                 }
             };
             g8k._fillValue = function() {
                 g8k._hasValue = true;
                 r7C(true, false, true);
             };
             g8k._generateContent = function() {
                 var f1C, S1C, b1C, Z1C = 1,
                     V1C = '',
                     I1C = '';
                 I1C += '<div class="mbsc-np-hdr"><div role="button" tabindex="0" aria-label="' + Y7C.deleteText + '" class="mbsc-np-del mbsc-fr-btn-e mbsc-ic mbsc-ic-' + Y7C.deleteIcon + '"></div><div class="mbsc-np-dsp">';
                 V1C = Y7C.template.replace(/d/g, '<span class="mbsc-np-ph">' + a7C + '</span>').replace(/&#100;/g, 'd');
                 V1C = V1C.replace(/{([a-zA-Z0-9]*)\:?([a-zA-Z0-9\-\_]*)}/g, '<span class="mbsc-np-cph" data-var="$1" data-ph="$2">$2</span>');
                 I1C += V1C;
                 I1C += '</div></div>';
                 I1C += '<div class="mbsc-np-tbl-c mbsc-w-p"><div class="mbsc-np-tbl">';
                 for (f1C = 0; f1C < 4; f1C++) {
                     I1C += '<div class="mbsc-np-row">';
                     for (S1C = 0; S1C < 3; S1C++) {
                         b1C = Z1C;
                         if (Z1C == 10 || Z1C == 12) {
                             b1C = '';
                         } else if (Z1C == 11) {
                             b1C = 0;
                         }
                         if (b1C === '') {
                             if (Z1C == 10 && Y7C.leftKey) {
                                 I1C += '<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-fr-btn-e" ' + (Y7C.leftKey.variable ? 'data-var="' + Y7C.leftKey.variable + '"' : '') + ' data-val="' + (Y7C.leftKey.value || '') + '" ' + (Y7C.leftKey.track !== A8k ? ' data-track="' + Y7C.leftKey.track + '"' : '') + '>' + Y7C.leftKey.text + '</div>';
                             } else if (Z1C == 12 && Y7C.rightKey) {
                                 I1C += '<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-fr-btn-e" ' + (Y7C.rightKey.variable ? 'data-var="' + Y7C.rightKey.variable + '"' : '') + ' data-val="' + (Y7C.rightKey.value || '') + '" ' + (Y7C.rightKey.track !== A8k ? ' data-track="' + Y7C.rightKey.track + '"' : '') + ' >' + Y7C.rightKey.text + '</div>';
                             } else {
                                 I1C += '<div class="mbsc-np-btn mbsc-np-btn-empty"></div>';
                             }
                         } else {
                             I1C += '<div tabindex="0" role="button" class="mbsc-np-btn mbsc-fr-btn-e" data-val="' + b1C + '">' + b1C + '</div>';
                         }
                         Z1C++;
                     }
                     I1C += '</div>';
                 }
                 I1C += '</div></div>';
                 return I1C;
             };
             g8k._markupReady = function() {
                 x7C = g8k._markup;
                 p7C();
             };
             g8k._attachEvents = function(d1C) {
                 d1C.on('keydown', function(l1C) {
                     var h1C;
                     if (f7C[l1C.keyCode] !== A8k) {
                         h1C = i8k('.mbsc-np-btn[data-var="sign:-:"]', d1C);
                         if (h1C.length) {
                             n7C.sign = l1C.keyCode == 107 ? '-' : '';
                             z7C(h1C);
                         }
                     } else if (s7C[l1C.keyCode] !== A8k) {
                         Z7C(i8k('.mbsc-np-btn[data-val="' + s7C[l1C.keyCode] + '"]', d1C), s7C[l1C.keyCode]);
                     } else if (l1C.keyCode == 8) {
                         l1C.preventDefault();
                         v7C();
                     }
                 });
                 g8k.tap(i8k('.mbsc-np-btn', d1C), function() {
                     var C1C = i8k(this);
                     if (C1C.hasClass('mbsc-np-btn-custom')) {
                         z7C(C1C);
                     } else {
                         Z7C(C1C, +C1C.attr('data-val'));
                     }
                 }, false, 30, true);
                 i8k('.mbsc-np-del', d1C).on('touchstart mousedown keydown', R7C).on('touchmove mousemove', J7C).on('keyup mouseup touchend', e7C);
             };
             g8k.__processSettings = function() {
                 Y7C = g8k.settings;
                 Y7C.headerText = (Y7C.headerText || '').replace('{value}', '');
                 Y7C.cssClass = (Y7C.cssClass || '') + ' mbsc-np';
             };
             g8k.__init = function() {
                 Y7C.template = Y7C.template.replace(/\\d/, '&#100;');
                 a7C = Y7C.placeholder;
                 F7C = (Y7C.template.match(/d/g) || []).length;
                 M7C = 'mbsc-fr-btn-d ' + (Y7C.disabledClass || '');
                 D7C = Y7C.mask;
                 y7C = g8k.trigger;
                 if (D7C && K7C.is('input')) {
                     K7C.attr('type', 'password');
                 }
             };
             g8k._indexOf = function(H1C, c1C) {
                 var z1C;
                 for (z1C = 0; z1C < H1C.length; ++z1C) {
                     if (H1C[z1C].toString() === c1C.toString()) {
                         return z1C;
                     }
                 }
                 return -1;
             };
             if (!m7C) {
                 g8k.init(H7C);
             }
         };
         O8k.Numpad.prototype = {
             _hasDef: true,
             _hasTheme: true,
             _hasLang: true,
             _hasPreset: true,
             _class: 'numpad',
             _defaults: i8k.extend({}, O8k.Frame.prototype._defaults, {
                 template: 'dd.dd',
                 placeholder: '0',
                 deleteIcon: 'backspace',
                 allowLeadingZero: false,
                 fill: 'rtl',
                 deleteText: 'Delete',
                 decimalSeparator: '.',
                 thousandsSeparator: ',',
                 validate: G8k,
                 parseValue: G8k,
                 formatValue: function(W1C, T1C, O1C) {
                     var R1C, w1C = 1,
                         A1C = O1C.settings,
                         N1C = A1C.placeholder,
                         E1C = A1C.template,
                         i1C = W1C.length,
                         m1C = E1C.length,
                         P1C = '';
                     for (R1C = 0; R1C < m1C; R1C++) {
                         if (E1C[m1C - R1C - 1] == 'd') {
                             if (w1C <= i1C) {
                                 P1C = W1C[i1C - w1C] + P1C;
                             } else {
                                 P1C = N1C + P1C;
                             }
                             w1C++;
                         } else {
                             P1C = E1C[m1C - R1C - 1] + P1C;
                         }
                     }
                     i8k.each(T1C, function(G1C, Q1C) {
                         P1C = P1C.replace('{' + G1C + '}', Q1C);
                     });
                     return i8k('<div>' + P1C + '</div>').text();
                 }
             })
         };
         N8k.themes.numpad = N8k.themes.frame;
         N8k.presetShort('numpad', 'Numpad', false);
     }());
     (function() {
         var X1C = mobiscroll,
             g1C = X1C.$,
             Y0C = X1C.presets.numpad,
             L0C = {
                 min: 0,
                 max: 99.99,
                 scale: 2,
                 prefix: '',
                 suffix: '',
                 returnAffix: false
             };
         Y0C.decimal = function(o0C) {
             function k0C(M0C, r0C) {
                 var p0C, D0C = M0C.slice(0),
                     K0C = 0;
                 while (D0C.length) {
                     K0C = K0C * 10 + D0C.shift();
                 }
                 for (p0C = 0; p0C < n0C.scale; p0C++) {
                     K0C /= 10;
                 }
                 return r0C ? K0C * -1 : K0C;
             }
             function x0C(a0C) {
                 var s0C = k0C(a0C).toFixed(n0C.scale).replace('.', n0C.decimalSeparator).replace(/\B(?=(\d{3})+(?!\d))/g, n0C.thousandsSeparator);
                 return s0C;
             }
             var U0C = g1C.extend({}, o0C.settings),
                 n0C = g1C.extend(o0C.settings, L0C, U0C),
                 F0C = n0C.min < 0;
             o0C.getVal = function(B0C) {
                 var q0C = o0C._getVal(B0C);
                 return X1C.util.isNumeric(q0C) ? +q0C : q0C;
             };
             return {
                 template: (F0C ? '{sign}' : '') + n0C.prefix.replace(/d/g, '\\d') + Array((Math.floor(Math.max(n0C.max, Math.abs(n0C.min))) + '').length + 1).join('d') + (n0C.scale ? '.' + Array(n0C.scale + 1).join('d') : '') + n0C.suffix.replace(/d/g, '\\d'),
                 leftKey: F0C ? {
                     text: '-/+',
                     variable: 'sign:-:',
                     track: false
                 } : undefined,
                 parseValue: function(v0C) {
                     var j0C, u0C, J0C = v0C || n0C.defaultValue,
                         y0C = [];
                     if (J0C) {
                         J0C = (J0C + '').replace(n0C.decimalSeparator, '.').replace(n0C.thousandsSeparator, '');
                         u0C = J0C.match(/\d+\.?\d*/g);
                         if (u0C) {
                             u0C = (+u0C[0]).toFixed(n0C.scale);
                             for (j0C = 0; j0C < u0C.length; j0C++) {
                                 if (u0C[j0C] != '.') {
                                     if (+u0C[j0C]) {
                                         y0C.push(+u0C[j0C]);
                                     } else if (y0C.length) {
                                         y0C.push(0);
                                     }
                                 }
                             }
                         }
                     }
                     if (v0C < 0) {
                         y0C.push('sign:' + '-');
                     }
                     return y0C;
                 },
                 formatValue: function(e0C, I0C) {
                     var t0C = x0C(e0C),
                         Z0C = k0C(e0C, I0C && I0C.sign == '-');
                     return (Z0C < 0 ? '-' : '') + (n0C.returnAffix ? n0C.prefix + t0C + n0C.suffix : t0C);
                 },
                 validate: function(b0C) {
                     var V0C = b0C.values,
                         d0C = x0C(V0C),
                         f0C = k0C(V0C, b0C.variables && b0C.variables.sign == '-'),
                         S0C = [];
                     if (!V0C.length && !n0C.allowLeadingZero) {
                         S0C.push(0);
                     }
                     if (o0C.isVisible()) {
                         g1C('.mbsc-np-dsp', o0C._markup).html((b0C.variables.sign || '') + n0C.prefix + d0C + n0C.suffix);
                     }
                     return {
                         disabled: S0C,
                         invalid: f0C > n0C.max || f0C < n0C.min || (n0C.invalid ? o0C._indexOf(n0C.invalid, f0C) != -1 : false)
                     };
                 }
             };
         };
     }());
     (function() {
         function C0C(w0C) {
             var P0C = 0,
                 R0C = 1,
                 m0C = 0;
             while (w0C.length) {
                 if (P0C > 3) {
                     R0C = 60 * 60;
                 } else if (P0C > 1) {
                     R0C = 60;
                 }
                 m0C = m0C + w0C.pop() * R0C * (P0C % 2 ? 10 : 1);
                 P0C++;
             }
             return m0C;
         }
         var h0C = mobiscroll,
             l0C = h0C.$,
             H0C = h0C.presets.numpad,
             z0C = ['h', 'm', 's'],
             c0C = {
                 min: 0,
                 max: 362439,
                 defaultValue: 0,
                 hourTextShort: 'h',
                 minuteTextShort: 'm',
                 secTextShort: 's'
             };
         H0C.timespan = function(i0C) {
             var O0C = l0C.extend({}, i0C.settings),
                 E0C = l0C.extend(i0C.settings, c0C, O0C),
                 N0C = {
                     h: E0C.hourTextShort.replace(/d/g, '\\d'),
                     m: E0C.minuteTextShort.replace(/d/g, '\\d'),
                     s: E0C.secTextShort.replace(/d/g, '\\d')
                 },
                 A0C = 'd<span class="mbsc-np-sup mbsc-np-time">' + N0C.s + '</span>';
             function W0C(X0C) {
                 var G0C, T0C = '',
                     Q0C = 60 * 60;
                 l0C(z0C).each(function(Y4C, g0C) {
                     G0C = Math.floor(X0C / Q0C);
                     X0C -= G0C * Q0C;
                     Q0C /= 60;
                     if (G0C > 0 || g0C == 's' && !T0C) {
                         T0C = T0C + (T0C ? ' ' : '') + G0C + N0C[g0C];
                     }
                 });
                 return T0C;
             }
             if (E0C.max > 9) {
                 A0C = 'd' + A0C;
             }
             if (E0C.max > 99) {
                 A0C = '<span class="mbsc-np-ts-m">' + (E0C.max > 639 ? 'd' : '') + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + N0C.m + '</span>' + A0C;
             }
             if (E0C.max > 6039) {
                 A0C = '<span class="mbsc-np-ts-h">' + (E0C.max > 38439 ? 'd' : '') + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + N0C.h + '</span>' + A0C;
             }
             i0C.setVal = function(L4C, n4C, o4C, k4C) {
                 if (h0C.util.isNumeric(L4C)) {
                     L4C = W0C(L4C);
                 }
                 return i0C._setVal(L4C, n4C, o4C, k4C);
             };
             i0C.getVal = function(F4C) {
                 return i0C._hasValue || F4C ? C0C(i0C.getArrayVal(F4C)) : null;
             };
             return {
                 template: A0C,
                 parseValue: function(p4C) {
                     var U4C, K4C = p4C || W0C(E0C.defaultValue),
                         x4C = [];
                     if (K4C) {
                         l0C(z0C).each(function(M4C, D4C) {
                             U4C = new RegExp('(\\d+)' + N0C[D4C], 'gi').exec(K4C);
                             if (U4C) {
                                 U4C = +U4C[1];
                                 if (U4C > 9) {
                                     x4C.push(Math.floor(U4C / 10));
                                     x4C.push(U4C % 10);
                                 } else {
                                     if (x4C.length) {
                                         x4C.push(0);
                                     }
                                     if (U4C || x4C.length) {
                                         x4C.push(U4C);
                                     }
                                 }
                             } else if (x4C.length) {
                                 x4C.push(0);
                                 x4C.push(0);
                             }
                         });
                     }
                     return x4C;
                 },
                 formatValue: function(r4C) {
                     return W0C(C0C(r4C));
                 },
                 validate: function(B4C) {
                     var a4C = B4C.values,
                         s4C = C0C(a4C.slice(0)),
                         q4C = [];
                     if (!a4C.length) {
                         q4C.push(0);
                     }
                     return {
                         disabled: q4C,
                         invalid: s4C > E0C.max || s4C < E0C.min || (E0C.invalid ? i0C._indexOf(E0C.invalid, +s4C) != -1 : false)
                     };
                 }
             };
         };
     }());
     (function() {
         var j4C = mobiscroll,
             u4C = j4C.$,
             y4C = j4C.presets.numpad,
             J4C = {
                 timeFormat: 'hh:ii A',
                 amText: 'am',
                 pmText: 'pm'
             };
         y4C.time = function(C4C) {
             var z4C = u4C.extend({}, C4C.settings),
                 v4C = u4C.extend(C4C.settings, J4C, z4C),
                 f4C = v4C.timeFormat.split(':'),
                 t4C = v4C.timeFormat.match(/a/i),
                 l4C = t4C ? t4C[0] == 'a' ? v4C.amText : v4C.amText.toUpperCase() : '',
                 d4C = t4C ? t4C[0] == 'a' ? v4C.pmText : v4C.pmText.toUpperCase() : '',
                 h4C = 0,
                 e4C = v4C.min ? '' + v4C.min.getHours() : '',
                 I4C = v4C.max ? '' + v4C.max.getHours() : '',
                 S4C = v4C.min ? '' + (v4C.min.getMinutes() < 10 ? '0' + v4C.min.getMinutes() : v4C.min.getMinutes()) : '',
                 Z4C = v4C.max ? '' + (v4C.max.getMinutes() < 10 ? '0' + v4C.max.getMinutes() : v4C.max.getMinutes()) : '',
                 V4C = v4C.min ? '' + (v4C.min.getSeconds() < 10 ? '0' + v4C.min.getSeconds() : v4C.min.getSeconds()) : '',
                 b4C = v4C.max ? '' + (v4C.max.getSeconds() < 10 ? '0' + v4C.max.getSeconds() : v4C.max.getSeconds()) : '';
             v4C.min ? v4C.min.setFullYear(2014, 7, 20) : '';
             v4C.max ? v4C.max.setFullYear(2014, 7, 20) : '';
             function H4C(R4C, w4C) {
                 var P4C, m4C = '';
                 for (P4C = 0; P4C < R4C.length; ++P4C) {
                     m4C += R4C[P4C] + (P4C % 2 == (R4C.length % 2 == 1 ? 0 : 1) && P4C != R4C.length - 1 ? ':' : '');
                 }
                 u4C.each(w4C, function(i4C, E4C) {
                     m4C += ' ' + E4C;
                 });
                 return m4C;
             }
             function c4C(N4C) {
                 var A4C, T4C, O4C, g4C, Y5C, o5C, G4C, Q4C, L5C, n5C, W4C = [],
                     X4C = 2 * f4C.length;
                 h4C = X4C;
                 if (!N4C.length) {
                     if (t4C) {
                         W4C.push(0);
                         W4C.push(v4C.leftKey.value);
                     }
                     W4C.push(v4C.rightKey.value);
                 }
                 if (!t4C && (X4C - N4C.length < 2 || N4C[0] != 1 && (N4C[0] > 2 || N4C[1] > 3) && X4C - N4C.length <= 2)) {
                     W4C.push('30');
                     W4C.push('00');
                 }
                 if ((t4C ? N4C[0] > 1 || N4C[1] > 2 : N4C[0] != 1 && (N4C[0] > 2 || N4C[1] > 3)) && N4C[0]) {
                     N4C.unshift(0);
                     h4C = X4C - 1;
                 }
                 if (N4C.length == X4C) {
                     for (A4C = 0; A4C <= 9; ++A4C) {
                         W4C.push(A4C);
                     }
                 } else if (N4C.length == 1 && t4C && N4C[0] == 1 || N4C.length && N4C.length % 2 === 0 || !t4C && N4C[0] == 2 && N4C[1] > 3 && N4C.length % 2 == 1) {
                     for (A4C = 6; A4C <= 9; ++A4C) {
                         W4C.push(A4C);
                     }
                 }
                 L5C = N4C[1] !== undefined ? '' + N4C[0] + N4C[1] : '';
                 n5C = +Z4C == +(N4C[3] !== undefined ? '' + N4C[2] + N4C[3] : '');
                 if (v4C.invalid) {
                     for (A4C = 0; A4C < v4C.invalid.length; ++A4C) {
                         o5C = v4C.invalid[A4C].getHours();
                         G4C = v4C.invalid[A4C].getMinutes();
                         Q4C = v4C.invalid[A4C].getSeconds();
                         if (o5C == +L5C) {
                             if (f4C.length == 2 && (G4C < 10 ? 0 : +('' + G4C)[0]) == +N4C[2]) {
                                 W4C.push(G4C < 10 ? G4C : +('' + G4C)[1]);
                                 break;
                             } else if ((Q4C < 10 ? 0 : +('' + Q4C)[0]) == +N4C[4]) {
                                 W4C.push(Q4C < 10 ? Q4C : +('' + Q4C)[1]);
                                 break;
                             }
                         }
                     }
                 }
                 if (v4C.min || v4C.max) {
                     T4C = +e4C == +L5C;
                     O4C = +I4C == +L5C;
                     Y5C = O4C && n5C;
                     g4C = T4C && n5C;
                     if (N4C.length === 0) {
                         for (A4C = t4C ? 2 : e4C > 19 ? e4C[0] : 3; A4C <= (e4C[0] == 1 ? 9 : e4C[0] - 1); ++A4C) {
                             W4C.push(A4C);
                         }
                         if (e4C >= 10) {
                             W4C.push(0);
                             if (e4C[0] == 2) {
                                 for (A4C = 3; A4C <= 9; ++A4C) {
                                     W4C.push(A4C);
                                 }
                             }
                         }
                         if (I4C && I4C < 10 || e4C && e4C >= 10) {
                             for (A4C = I4C && I4C < 10 ? +I4C[0] + 1 : 0; A4C < (e4C && e4C >= 10 ? e4C[0] : 10); ++A4C) {
                                 W4C.push(A4C);
                             }
                         }
                     }
                     if (N4C.length == 1) {
                         if (N4C[0] === 0) {
                             for (A4C = 0; A4C < e4C[0]; ++A4C) {
                                 W4C.push(A4C);
                             }
                         }
                         if (e4C && (N4C[0] !== 0 && (t4C ? N4C[0] == 1 : N4C[0] == 2))) {
                             for (A4C = t4C ? 3 : 4; A4C <= 9; ++A4C) {
                                 W4C.push(A4C);
                             }
                         }
                         if (N4C[0] == e4C[0]) {
                             for (A4C = 0; A4C < e4C[1]; ++A4C) {
                                 W4C.push(A4C);
                             }
                         }
                         if (N4C[0] == I4C[0] && !t4C) {
                             for (A4C = +I4C[1] + 1; A4C <= 9; ++A4C) {
                                 W4C.push(A4C);
                             }
                         }
                     }
                     if (N4C.length == 2 && (T4C || O4C)) {
                         for (A4C = O4C ? +Z4C[0] + 1 : 0; A4C < (T4C ? +S4C[0] : 10); ++A4C) {
                             W4C.push(A4C);
                         }
                     }
                     if (N4C.length == 3 && (O4C && N4C[2] == Z4C[0] || T4C && N4C[2] == S4C[0])) {
                         for (A4C = O4C && N4C[2] == Z4C[0] ? +Z4C[1] + 1 : 0; A4C < (T4C && N4C[2] == S4C[0] ? +S4C[1] : 10); ++A4C) {
                             W4C.push(A4C);
                         }
                     }
                     if (N4C.length == 4 && (g4C || Y5C)) {
                         for (A4C = Y5C ? +b4C[0] + 1 : 0; A4C < (g4C ? +V4C[0] : 10); ++A4C) {
                             W4C.push(A4C);
                         }
                     }
                     if (N4C.length == 5 && (g4C && N4C[4] == V4C[0] || Y5C && N4C[4] == b4C[0])) {
                         for (A4C = Y5C && N4C[4] == b4C[0] ? +b4C[1] + 1 : 0; A4C < (g4C && N4C[4] == V4C[0] ? +V4C[1] : 10); ++A4C) {
                             W4C.push(A4C);
                         }
                     }
                 }
                 return W4C;
             }
             return {
                 placeholder: '-',
                 allowLeadingZero: true,
                 template: (f4C.length == 3 ? 'dd:dd:dd' : f4C.length == 2 ? 'dd:dd' : 'dd') + (t4C ? '<span class="mbsc-np-sup">{ampm:--}</span>' : ''),
                 leftKey: t4C ? {
                     text: l4C,
                     variable: 'ampm:' + l4C,
                     value: '00'
                 } : {
                     text: ':00',
                     value: '00'
                 },
                 rightKey: t4C ? {
                     text: d4C,
                     variable: 'ampm:' + d4C,
                     value: '00'
                 } : {
                     text: ':30',
                     value: '30'
                 },
                 parseValue: function(K5C) {
                     var F5C, x5C, k5C = K5C || v4C.defaultValue,
                         U5C = [];
                     if (k5C) {
                         k5C = k5C + '';
                         x5C = k5C.match(/\d/g);
                         if (x5C) {
                             for (F5C = 0; F5C < x5C.length; F5C++) {
                                 U5C.push(+x5C[F5C]);
                             }
                         }
                         if (t4C) {
                             U5C.push('ampm:' + (k5C.match(new RegExp(v4C.pmText, 'gi')) ? d4C : l4C));
                         }
                     }
                     return U5C;
                 },
                 formatValue: function(p5C, D5C) {
                     return H4C(p5C, D5C);
                 },
                 validate: function(a5C) {
                     var M5C = a5C.values,
                         q5C = a5C.variables,
                         s5C = H4C(M5C, q5C),
                         r5C = M5C.length >= 3 ? new Date(2014, 7, 20, '' + M5C[0] + (M5C.length % 2 === 0 ? M5C[1] : ''), '' + M5C[M5C.length % 2 === 0 ? 2 : 1] + M5C[M5C.length % 2 === 0 ? 3 : 2]) : '';
                     return {
                         disabled: c4C(M5C),
                         length: h4C,
                         invalid: (t4C ? !new RegExp('^(0?[1-9]|1[012])(:[0-5]\\d)?(:[0-5][0-9])' + ' (?:' + v4C.amText + '|' + v4C.pmText + ')$', 'i').test(s5C) : !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(s5C)) || (v4C.invalid ? C4C._indexOf(v4C.invalid, r5C) != -1 : false) || !((v4C.min ? v4C.min <= r5C : true) && (v4C.max ? r5C <= v4C.max : true))
                     };
                 }
             };
         };
     }());
     (function() {
         var B5C = mobiscroll,
             u5C = B5C.$,
             j5C = B5C.presets.numpad,
             y5C = {
                 dateOrder: 'mdy',
                 dateFormat: 'mm/dd/yy',
                 delimiter: '/'
             };
         j5C.date = function(C5C) {
             var v5C, t5C, I5C, h5C, V5C = [],
                 H5C = u5C.extend({}, C5C.settings),
                 J5C = u5C.extend(C5C.settings, B5C.util.datetime.defaults, y5C, H5C),
                 e5C = J5C.dateOrder,
                 f5C = J5C.min ? '' + (J5C.getMonth(J5C.min) + 1) : 0,
                 S5C = J5C.max ? '' + (J5C.getMonth(J5C.max) + 1) : 0,
                 d5C = J5C.min ? '' + J5C.getDay(J5C.min) : 0,
                 l5C = J5C.max ? '' + J5C.getDay(J5C.max) : 0,
                 b5C = J5C.min ? '' + J5C.getYear(J5C.min) : 0,
                 Z5C = J5C.max ? '' + J5C.getYear(J5C.max) : 0;
             e5C = e5C.replace(/y+/gi, 'yyyy');
             e5C = e5C.replace(/m+/gi, 'mm');
             e5C = e5C.replace(/d+/gi, 'dd');
             v5C = e5C.toUpperCase().indexOf('Y');
             t5C = e5C.toUpperCase().indexOf('M');
             I5C = e5C.toUpperCase().indexOf('D');
             e5C = '';
             V5C.push({
                 val: v5C,
                 n: 'yyyy'
             }, {
                 val: t5C,
                 n: 'mm'
             }, {
                 val: I5C,
                 n: 'dd'
             });
             V5C.sort(function(R5C, m5C) {
                 return R5C.val - m5C.val;
             });
             u5C.each(V5C, function(E5C, w5C) {
                 e5C += w5C.n;
             });
             v5C = e5C.indexOf('y');
             t5C = e5C.indexOf('m');
             I5C = e5C.indexOf('d');
             e5C = '';
             for (h5C = 0; h5C < 8; ++h5C) {
                 e5C += 'd';
                 if (h5C + 1 == v5C || h5C + 1 == t5C || h5C + 1 == I5C) {
                     e5C += J5C.delimiter;
                 }
             }
             function c5C(i5C) {
                 return i5C % 4 === 0 && i5C % 100 !== 0 || i5C % 400 === 0;
             }
             function P5C(N5C) {
                 var A5C, O5C, L6C, Q5C, X5C, W5C = [],
                     T5C = N5C[v5C + 3] !== undefined ? '' + N5C[v5C] + N5C[v5C + 1] + N5C[v5C + 2] + N5C[v5C + 3] : '',
                     G5C = N5C[t5C + 1] !== undefined ? '' + N5C[t5C] + N5C[t5C + 1] : '',
                     g5C = N5C[I5C + 1] !== undefined ? '' + N5C[I5C] + N5C[I5C + 1] : '',
                     o6C = '' + J5C.getMaxDayOfMonth(T5C || 2012, G5C - 1 || 0),
                     n6C = b5C === T5C && +f5C === +G5C,
                     Y6C = Z5C === T5C && +S5C === +G5C;
                 if (J5C.invalid) {
                     for (A5C = 0; A5C < J5C.invalid.length; ++A5C) {
                         L6C = J5C.getYear(J5C.invalid[A5C]);
                         Q5C = J5C.getMonth(J5C.invalid[A5C]);
                         X5C = J5C.getDay(J5C.invalid[A5C]);
                         if (L6C == +T5C && Q5C + 1 == +G5C) {
                             if ((X5C < 10 ? 0 : +('' + X5C)[0]) == +N5C[I5C]) {
                                 W5C.push(X5C < 10 ? X5C : +('' + X5C)[1]);
                                 break;
                             }
                         }
                         if (Q5C + 1 == +G5C && X5C == +g5C) {
                             if (('' + L6C).substring(0, 3) == '' + N5C[v5C] + N5C[v5C + 1] + N5C[v5C + 2]) {
                                 W5C.push(('' + L6C)[3]);
                                 break;
                             }
                         }
                         if (L6C == +T5C && X5C == +g5C) {
                             if ((Q5C < 10 ? 0 : +('' + (Q5C + 1))[0]) == +N5C[t5C]) {
                                 W5C.push(Q5C < 10 ? Q5C : +('' + (Q5C + 1))[1]);
                                 break;
                             }
                         }
                     }
                 }
                 if (g5C == '31' && (N5C.length == t5C || N5C.length == t5C + 1)) {
                     if (N5C[t5C] != 1) {
                         W5C.push(2, 4, 6, 9, 11);
                     } else {
                         W5C.push(1);
                     }
                 }
                 if (g5C == '30' && N5C[t5C] === 0 && N5C.length <= t5C + 1) {
                     W5C.push(2);
                 }
                 if (N5C.length == t5C) {
                     for (A5C = Z5C === T5C && +S5C < 10 ? 1 : 2; A5C <= 9; ++A5C) {
                         W5C.push(A5C);
                     }
                     if (b5C === T5C && +f5C >= 10) {
                         W5C.push(0);
                     }
                 }
                 if (N5C.length == t5C + 1) {
                     if (N5C[t5C] == 1) {
                         for (A5C = Z5C === T5C ? +S5C[1] + 1 : 3; A5C <= 9; ++A5C) {
                             W5C.push(A5C);
                         }
                         if (b5C == T5C) {
                             for (A5C = 0; A5C < +f5C[1]; ++A5C) {
                                 W5C.push(A5C);
                             }
                         }
                     }
                     if (N5C[t5C] === 0) {
                         W5C.push(0);
                         if (Z5C === T5C || b5C === T5C) {
                             for (A5C = Z5C === T5C ? +g5C > +l5C ? +S5C : +S5C + 1 : 0; A5C <= (b5C === T5C ? +g5C < +d5C ? +f5C - 1 : +f5C - 1 : 9); ++A5C) {
                                 W5C.push(A5C);
                             }
                         }
                     }
                 }
                 if (N5C.length == I5C) {
                     for (A5C = Y6C ? (+l5C > 10 ? +l5C[0] : 0) + 1 : +o6C[0] + 1; A5C <= 9; ++A5C) {
                         W5C.push(A5C);
                     }
                     if (n6C) {
                         for (A5C = 0; A5C < (+d5C < 10 ? 0 : d5C[0]); ++A5C) {
                             W5C.push(A5C);
                         }
                     }
                 }
                 if (N5C.length == I5C + 1) {
                     if (N5C[I5C] >= 3 || G5C == '02') {
                         for (A5C = +o6C[1] + 1; A5C <= 9; ++A5C) {
                             W5C.push(A5C);
                         }
                     }
                     if (Y6C && +l5C[0] == N5C[I5C]) {
                         for (A5C = +l5C[1] + 1; A5C <= 9; ++A5C) {
                             W5C.push(A5C);
                         }
                     }
                     if (n6C && d5C[0] == N5C[I5C]) {
                         for (A5C = 0; A5C < +d5C[1]; ++A5C) {
                             W5C.push(A5C);
                         }
                     }
                     if (N5C[I5C] === 0) {
                         W5C.push(0);
                         if (Y6C || n6C) {
                             for (A5C = Y6C ? +l5C + 1 : 1; A5C <= (n6C ? +d5C - 1 : 9); ++A5C) {
                                 W5C.push(A5C);
                             }
                         }
                     }
                 }
                 if (N5C[v5C + 2] !== undefined && G5C == '02' && g5C == '29') {
                     for (O5C = +('' + N5C[v5C] + N5C[v5C + 1] + N5C[v5C + 2] + 0); O5C <= +('' + N5C[v5C] + N5C[v5C + 1] + N5C[v5C + 2] + 9); ++O5C) {
                         W5C.push(!c5C(O5C) ? O5C % 10 : '');
                     }
                 }
                 if (N5C.length == v5C) {
                     if (J5C.min) {
                         for (A5C = 0; A5C < +b5C[0]; ++A5C) {
                             W5C.push(A5C);
                         }
                     }
                     if (J5C.max) {
                         for (A5C = +Z5C[0] + 1; A5C <= 9; ++A5C) {
                             W5C.push(A5C);
                         }
                     }
                     W5C.push(0);
                 }
                 if (J5C.min || J5C.max) {
                     for (O5C = 1; O5C < 4; ++O5C) {
                         if (N5C.length == v5C + O5C) {
                             if (N5C[v5C + O5C - 1] == +b5C[O5C - 1] && (O5C == 3 ? N5C[v5C + O5C - 2] == +b5C[O5C - 2] : true)) {
                                 for (A5C = 0; A5C < +b5C[O5C] + (O5C == 3 && N5C[t5C + 1] && +f5C > +G5C ? 1 : 0); ++A5C) {
                                     W5C.push(A5C);
                                 }
                             }
                             if (N5C[v5C + O5C - 1] == +Z5C[O5C - 1] && (O5C == 3 ? N5C[v5C + O5C - 2] == +Z5C[O5C - 2] : true)) {
                                 for (A5C = +Z5C[O5C] + (O5C == 3 && +S5C < +G5C ? 0 : 1); A5C <= 9; ++A5C) {
                                     W5C.push(A5C);
                                 }
                             }
                         }
                     }
                 }
                 return W5C;
             }
             function z5C(k6C) {
                 return new Date(+('' + k6C[v5C] + k6C[v5C + 1] + k6C[v5C + 2] + k6C[v5C + 3]), +('' + k6C[t5C] + k6C[t5C + 1]) - 1, +('' + k6C[I5C] + k6C[I5C + 1]));
             }
             C5C.getVal = function(F6C) {
                 return C5C._hasValue || F6C ? z5C(C5C.getArrayVal(F6C)) : null;
             };
             return {
                 placeholder: '-',
                 fill: 'ltr',
                 allowLeadingZero: true,
                 template: e5C,
                 parseValue: function(D6C) {
                     var K6C, x6C = [],
                         p6C = D6C || J5C.defaultValue,
                         U6C = B5C.util.datetime.parseDate(J5C.dateFormat, p6C, J5C);
                     if (p6C) {
                         for (K6C = 0; K6C < V5C.length; ++K6C) {
                             if (/m/i.test(V5C[K6C].n)) {
                                 x6C = x6C.concat(((J5C.getMonth(U6C) < 9 ? '0' : '') + (J5C.getMonth(U6C) + 1)).split(''));
                             } else if (/d/i.test(V5C[K6C].n)) {
                                 x6C = x6C.concat(((J5C.getDay(U6C) < 10 ? '0' : '') + J5C.getDay(U6C)).split(''));
                             } else {
                                 x6C = x6C.concat((J5C.getYear(U6C) + '').split(''));
                             }
                         }
                     }
                     return x6C;
                 },
                 formatValue: function(M6C) {
                     return B5C.util.datetime.formatDate(J5C.dateFormat, z5C(M6C), J5C);
                 },
                 validate: function(a6C) {
                     var s6C = a6C.values,
                         r6C = z5C(s6C);
                     return {
                         disabled: P5C(s6C),
                         invalid: !(r6C != 'Invalid Date' && (J5C.min ? J5C.min <= r6C : true) && (J5C.max ? r6C <= J5C.max : true)) || (J5C.invalid ? C5C._indexOf(J5C.invalid, r6C) != -1 : false)
                     };
                 }
             };
         };
     }());



   (function(h71, b11, t11) {
        var m11 = mobiscroll,
            q11 = m11.$,
            E11 = m11.presets.scroller,
            Z11 = m11.util,
            v11 = Z11.datetime.adjustedDate,
            z11 = Z11.jsPrefix,
            C11 = Z11.testTouch,
            K11 = Z11.getCoord,
            W11 = 'webkitAnimationEnd animationend',
            g11 = new Date(),
            y11 = {
                startYear: g11.getFullYear() - 100,
                endYear: g11.getFullYear() + 1,
                controls: ['calendar'],
                firstDay: 0,
                weekDays: 'short',
                maxMonthWidth: 170,
                months: 1,
                preMonths: 1,
                highlight: true,
                outerMonthChange: true,
                quickNav: true,
                yearChange: true,
                todayClass: 'mbsc-cal-today',
                btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left6',
                btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right6',
                dateText: 'Date',
                timeText: 'Time',
                calendarText: 'Calendar',
                todayText: 'Today',
                prevMonthText: 'Previous Month',
                nextMonthText: 'Next Month',
                prevYearText: 'Previous Year',
                nextYearText: 'Next Year'
            };
        E11.calbase = function(L71) {
            function p81(j81) {
                var x81;
                G71 = q11(this);
                U51 = false;
                if (j81.type != 'keydown') {
                    J81 = K11(j81, 'X');
                    D81 = K11(j81, 'Y');
                    x81 = C11(j81, this);
                } else {
                    x81 = j81.keyCode === 32;
                }
                if (!x71 && x81 && !G71.hasClass('mbsc-fr-btn-d')) {
                    x71 = true;
                    setTimeout(g51, 100);
                    if (j81.type == 'mousedown') {
                        q11(b11).on('mousemove', m51).on('mouseup', P51);
                    }
                }
            }

            function m51(X81) {
                if (Math.abs(J81 - K11(X81, 'X')) > 7 || Math.abs(D81 - K11(X81, 'Y')) > 7) {
                    x71 = false;
                    G71.removeClass('mbsc-fr-btn-a');
                }
            }

            function P51(s81) {
                if (s81.type == 'touchend') {
                    s81.preventDefault();
                }
                if (G71 && !U51) {
                    g51();
                }
                x71 = false;
                if (s81.type == 'mouseup') {
                    q11(b11).off('mousemove', m51).off('mouseup', P51);
                }
            }

            function g51() {
                U51 = true;
                if (G71.hasClass('mbsc-cal-prev-m')) {
                    K51();
                } else if (G71.hasClass('mbsc-cal-next-m')) {
                    W51();
                } else if (G71.hasClass('mbsc-cal-prev-y')) {
                    w81(G71);
                } else if (G71.hasClass('mbsc-cal-next-y')) {
                    I81(G71);
                }
            }

            function f81(l81) {
                if (l81 < v11(h51.getFullYear(), h51.getMonth(), h51.getDate())) {
                    return false;
                }
                if (l81 > k51) {
                    return false;
                }
                return h81[l81] === t11 || z51[l81] !== t11;
            }

            function T51(O81, T81, B81) {
                var G81, M81, A81, a81, Q81 = {},
                    i81 = V71 + p51;
                if (O81) {
                    q11.each(O81, function(H81, P81) {
                        G81 = P81.d || P81.start || P81;
                        M81 = G81 + '';
                        if (P81.start && P81.end) {
                            a81 = new Date(P81.start);
                            while (a81 <= P81.end) {
                                A81 = v11(a81.getFullYear(), a81.getMonth(), a81.getDate());
                                Q81[A81] = Q81[A81] || [];
                                Q81[A81].push(P81);
                                a81.setDate(a81.getDate() + 1);
                            }
                        } else if (G81.getTime) {
                            A81 = v11(G81.getFullYear(), G81.getMonth(), G81.getDate());
                            Q81[A81] = Q81[A81] || [];
                            Q81[A81].push(P81);
                        } else if (!M81.match(/w/i)) {
                            M81 = M81.split('/');
                            if (M81[1]) {
                                if (B81 + i81 >= 11) {
                                    A81 = R71.getDate(T81 + 1, M81[0] - 1, M81[1]);
                                    Q81[A81] = Q81[A81] || [];
                                    Q81[A81].push(P81);
                                }
                                if (B81 - i81 <= 1) {
                                    A81 = R71.getDate(T81 - 1, M81[0] - 1, M81[1]);
                                    Q81[A81] = Q81[A81] || [];
                                    Q81[A81].push(P81);
                                }
                                A81 = R71.getDate(T81, M81[0] - 1, M81[1]);
                                Q81[A81] = Q81[A81] || [];
                                Q81[A81].push(P81);
                            } else {
                                for (l71 = 0; l71 < A71; l71++) {
                                    A81 = R71.getDate(T81, B81 - V71 - w71 + l71, M81[0]);
                                    if (R71.getDay(A81) == M81[0]) {
                                        Q81[A81] = Q81[A81] || [];
                                        Q81[A81].push(P81);
                                    }
                                }
                            }
                        } else {
                            var U81 = +M81.replace('w', ''),
                                k81 = 0,
                                N81 = R71.getDate(T81, B81 - V71 - w71, 1).getDay();
                            if (R71.firstDay - N81 + 1 > 1) {
                                k81 = 7;
                            }
                            for (l71 = 0; l71 < A71 * 5; l71++) {
                                A81 = R71.getDate(T81, B81 - V71 - w71, l71 * 7 - k81 - N81 + 1 + U81);
                                Q81[A81] = Q81[A81] || [];
                                Q81[A81].push(P81);
                            }
                        }
                    });
                }
                return Q81;
            }

            function b51(c81, e81) {
                h81 = T51(R71.invalid, c81, e81);
                z51 = T51(R71.valid, c81, e81);
                L71.onGenMonth(c81, e81);
            }

            function V81(q81, v81, K81, m81, W81, Z81, t81) {
                var o81 = '<div class="mbsc-cal-h mbsc-cal-sc-c mbsc-cal-' + q81 + '-c ' + (R71.calendarClass || '') + '"><div class="mbsc-cal-sc"><div class="mbsc-cal-sc-p"><div class="mbsc-cal-sc-tbl"><div class="mbsc-cal-sc-row">';
                for (S71 = 1; S71 <= v81; S71++) {
                    if (S71 <= 12 || S71 > K81) {
                        o81 += '<div class="mbsc-cal-sc-m-cell mbsc-cal-sc-cell mbsc-cal-sc-empty"><div class="mbsc-cal-sc-cell-i">&nbsp;</div></div>';
                    } else {
                        o81 += '<div tabindex="0" role="button"' + (Z81 ? ' aria-label="' + Z81[S71 - 13] + '"' : '') + ' class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-cal-sc-m-cell mbsc-cal-sc-cell mbsc-cal-' + q81 + '-s" data-val=' + (m81 + S71 - 13) + '><div class="mbsc-cal-sc-cell-i mbsc-cal-sc-tbl"><div class="mbsc-cal-sc-cell">' + (t81 ? t81[S71 - 13] : m81 + S71 - 13 + W81) + '</div></div></div>';
                    }
                    if (S71 < v81) {
                        if (S71 % 12 === 0) {
                            o81 += '</div></div></div><div class="mbsc-cal-sc-p" style="' + (j71 ? 'top' : O71 ? 'right' : 'left') + ':' + Math.round(S71 / 12) * 100 + '%"><div class="mbsc-cal-sc-tbl"><div class="mbsc-cal-sc-row">';
                        } else if (S71 % 3 === 0) {
                            o81 += '</div><div class="mbsc-cal-sc-row">';
                        }
                    }
                }
                o81 += '</div></div></div></div></div>';
                return o81;
            }

            function j51(X31, s31) {
                var E81, w31, R31, J31, D31, j31, z81, F31, C81, d31, S31, Y31, L31, x31, u31, y81, b81 = 1,
                    r31 = 0,
                    f31 = R71.getDate(X31, s31, 1),
                    p31 = R71.getYear(f31),
                    V31 = R71.getMonth(f31),
                    g81 = R71.defaultValue === null && !L71._hasValue ? null : L71.getDate(true),
                    I31 = R71.getDate(p31, V31, 1).getDay(),
                    h31 = '<div class="mbsc-cal-table">',
                    n31 = '<div class="mbsc-cal-week-nr-c">';
                if (R71.firstDay - I31 + 1 > 1) {
                    r31 = 7;
                }
                for (y81 = 0; y81 < 42; y81++) {
                    u31 = y81 + R71.firstDay - r31;
                    E81 = R71.getDate(p31, V31, u31 - I31 + 1);
                    R31 = E81.getFullYear();
                    J31 = E81.getMonth();
                    D31 = E81.getDate();
                    j31 = R71.getMonth(E81);
                    z81 = R71.getDay(E81);
                    x31 = R71.getMaxDayOfMonth(R31, J31);
                    F31 = R31 + '-' + J31 + '-' + D31;
                    C81 = q11.extend({
                        valid: f81(E81),
                        selected: g81 && g81.getFullYear() === R31 && g81.getMonth() === J31 && g81.getDate() === D31
                    }, L71.getDayProps(E81, g81));
                    d31 = C81.valid;
                    S31 = C81.selected;
                    w31 = C81.cssClass;
                    Y31 = new Date(E81).setHours(12, 0, 0, 0) === new Date().setHours(12, 0, 0, 0);
                    L31 = j31 !== V31;
                    i51[F31] = C81;
                    if (y81 % 7 === 0) {
                        h31 += (y81 ? '</div>' : '') + '<div class="mbsc-cal-row' + (R71.highlight && g81 && g81 - E81 >= 0 && g81 - E81 < 1000 * 60 * 60 * 24 * 7 ? ' mbsc-cal-week-hl' : '') + '">';
                    }
                    if (E71 && E81.getDay() == 1) {
                        if (E71 == 'month' && L31 && b81 > 1) {
                            b81 = D31 == 1 ? 1 : 2;
                        } else if (E71 == 'year') {
                            b81 = R71.getWeekNumber(E81);
                        }
                        n31 += '<div class="mbsc-cal-week-nr"><div class="mbsc-cal-week-nr-i">' + b81 + '</div></div>';
                        b81++;
                    }
                    h31 += '<div role="button" tabindex="-1"' + ' aria-label="' + (Y31 ? R71.todayText + ', ' : '') + R71.dayNames[E81.getDay()] + ', ' + R71.monthNames[j31] + ' ' + z81 + ' ' + (C81.ariaLabel ? ', ' + C81.ariaLabel : '') + '"' + (L31 && !X51 ? ' aria-hidden="true"' : '') + (S31 ? ' aria-selected="true"' : '') + (d31 ? '' : ' aria-disabled="true"') + ' data-day="' + u31 % 7 + '"' + ' data-full="' + F31 + '"' + 'class="mbsc-cal-day ' + (R71.dayClass || '') + (S31 ? ' mbsc-cal-day-sel' : '') + (Y31 ? ' ' + R71.todayClass : '') + (w31 ? ' ' + w31 : '') + (z81 == 1 ? ' mbsc-cal-day-first' : '') + (z81 == x31 ? ' mbsc-cal-day-last' : '') + (L31 ? ' mbsc-cal-day-diff' : '') + (d31 ? ' mbsc-cal-day-v mbsc-fr-btn-e mbsc-fr-btn-nhl' : ' mbsc-cal-day-inv') + '"><div class="mbsc-cal-day-i ' + (S31 ? k71 : '') + ' ' + (R71.innerDayClass || '') + '">' + '<div class="mbsc-cal-day-fg">' + z81 + '</div>' + (C81.markup || '') + '<div class="mbsc-cal-day-frame"></div></div></div>';
                }
                h31 += '</div></div>' + n31 + '</div>';
                return h31;
            }

            function Q51(A31, Q31, G31) {
                var M31 = R71.getDate(A31, Q31, 1),
                    l31 = R71.getYear(M31),
                    T31 = R71.getMonth(M31),
                    a31 = l31 + A51;
                if (i71) {
                    if (m71) {
                        m71.removeClass('mbsc-cal-sc-sel').removeAttr('aria-selected').find('.mbsc-cal-sc-cell-i').removeClass(k71);
                    }
                    if (n51) {
                        n51.removeClass('mbsc-cal-sc-sel').removeAttr('aria-selected').find('.mbsc-cal-sc-cell-i').removeClass(k71);
                    }
                    m71 = q11('.mbsc-cal-year-s[data-val="' + l31 + '"]', J71).addClass('mbsc-cal-sc-sel').attr('aria-selected', 'true');
                    n51 = q11('.mbsc-cal-month-s[data-val="' + T31 + '"]', J71).addClass('mbsc-cal-sc-sel').attr('aria-selected', 'true');
                    m71.find('.mbsc-cal-sc-cell-i').addClass(k71);
                    n51.find('.mbsc-cal-sc-cell-i').addClass(k71);
                    if (s71) {
                        s71.scroll(m71, G31);
                    }
                    q11('.mbsc-cal-month-s', J71).removeClass('mbsc-fr-btn-d');
                    if (l31 === C71) {
                        for (S71 = 0; S71 < R81; S71++) {
                            q11('.mbsc-cal-month-s[data-val="' + S71 + '"]', J71).addClass('mbsc-fr-btn-d');
                        }
                    }
                    if (l31 === d51) {
                        for (S71 = F81 + 1; S71 <= 12; S71++) {
                            q11('.mbsc-cal-month-s[data-val="' + S71 + '"]', J71).addClass('mbsc-fr-btn-d');
                        }
                    }
                }
                if (g71.length == 1) {
                    g71.attr('aria-label', l31).html(a31);
                }
                for (S71 = 0; S71 < D71; ++S71) {
                    M31 = R71.getDate(A31, Q31 - w71 + S71, 1);
                    l31 = R71.getYear(M31);
                    T31 = R71.getMonth(M31);
                    a31 = l31 + A51;
                    q11(c51[S71]).attr('aria-label', R71.monthNames[T31] + (Z71 ? '' : ' ' + l31)).html((!Z71 && F51 < I51 ? a31 + ' ' : '') + S51[T31] + (!Z71 && F51 > I51 ? ' ' + a31 : ''));
                    if (g71.length > 1) {
                        q11(g71[S71]).html(a31);
                    }
                }
                if (R71.getDate(A31, Q31 - w71 - 1, 1) < f71) {
                    J51(q11('.mbsc-cal-prev-m', J71));
                } else {
                    R51(q11('.mbsc-cal-prev-m', J71));
                }
                if (R71.getDate(A31, Q31 + D71 - w71, 1) > r71) {
                    J51(q11('.mbsc-cal-next-m', J71));
                } else {
                    R51(q11('.mbsc-cal-next-m', J71));
                }
                if (R71.getDate(A31, Q31, 1).getFullYear() <= f71.getFullYear()) {
                    J51(q11('.mbsc-cal-prev-y', J71));
                } else {
                    R51(q11('.mbsc-cal-prev-y', J71));
                }
                if (R71.getDate(A31, Q31, 1).getFullYear() >= r71.getFullYear()) {
                    J51(q11('.mbsc-cal-next-y', J71));
                } else {
                    R51(q11('.mbsc-cal-next-y', J71));
                }
            }

            function R51(B31) {
                B31.removeClass(B51).find('.mbsc-cal-btn-txt').removeAttr('aria-disabled');
            }

            function J51(i31) {
                i31.addClass(B51).find('.mbsc-cal-btn-txt').attr('aria-disabled', 'true');
            }

            function r81(O31) {
                L71.trigger('onDayHighlight', {
                    date: O31
                });
                if (R71.highlight) {
                    q11('.mbsc-cal-day-sel .mbsc-cal-day-i', p71).removeClass(k71);
                    q11('.mbsc-cal-day-sel', p71).removeClass('mbsc-cal-day-sel').removeAttr('aria-selected');
                    q11('.mbsc-cal-week-hl', p71).removeClass('mbsc-cal-week-hl');
                    if (R71.defaultValue !== null || L71._hasValue) {
                        q11('.mbsc-cal-day[data-full="' + O31.getFullYear() + '-' + O31.getMonth() + '-' + O31.getDate() + '"]', p71).addClass('mbsc-cal-day-sel').attr('aria-selected', 'true').find('.mbsc-cal-day-i').addClass(k71).closest('.mbsc-cal-row').addClass('mbsc-cal-week-hl');
                    }
                }
            }

            function E51(P31, c31) {
                if (X71 && (Q71 === 'calendar' || c31)) {
                    var H31, N31, U31 = R71.getDate(I71, Y71, 1),
                        k31 = Math.abs((R71.getYear(P31) - R71.getYear(U31)) * 12 + R71.getMonth(P31) - R71.getMonth(U31));
                    if (L71.needsSlide && k31) {
                        I71 = R71.getYear(P31);
                        Y71 = R71.getMonth(P31);
                        if (P31 > U31) {
                            N31 = k31 > V71 - w71 + D71 - 1;
                            Y71 -= N31 ? 0 : k31 - V71;
                            H31 = 'next';
                        } else if (P31 < U31) {
                            N31 = k31 > V71 + w71;
                            Y71 += N31 ? 0 : k31 - V71;
                            H31 = 'prev';
                        }
                        B71(I71, Y71, H31, Math.min(k31, V71), N31, true);
                    }
                    if (!c31) {
                        e71 = P31;
                        r81(P31);
                    }
                    L71.needsSlide = true;
                }
            }

            function L51(e31, o31, q31) {
                if (!q31) {
                    L71.trigger('onMonthLoading', {
                        year: e31,
                        month: o31
                    });
                }
                b51(e31, o31);
                for (S71 = 0; S71 < A71; S71++) {
                    F71[S71].html(j51(e31, o31 - w71 - V71 + S71));
                }
                Y81();
                x51 = t11;
                L71.trigger('onMonthLoaded', {
                    year: e31,
                    month: o31
                });
            }

            function v51(Z31, t31) {
                var v31 = V71,
                    m31 = V71;
                while (m31 && R71.getDate(Z31, t31 + m31 + D71 - w71 - 1, 1) > r71) {
                    m31--;
                }
                while (v31 && R71.getDate(Z31, t31 - v31 - w71, 1) < f71) {
                    v31--;
                }
                q11.extend(o71.settings, {
                    contSize: D71 * n71,
                    snap: n71,
                    minScroll: a71 - (O71 ? v31 : m31) * n71,
                    maxScroll: a71 + (O71 ? m31 : v31) * n71
                });
                o71.refresh();
            }

            function Y81() {
                if (E71) {
                    y51.html(q11('.mbsc-cal-week-nr-c', F71[V71]).html());
                }
                q11('.mbsc-cal-slide-a .mbsc-cal-day', v71).attr('tabindex', 0);
            }

            function B71(K31, W31, g31, E31, y31, b31, z31) {
                if (K31) {
                    y71.push({
                        y: K31,
                        m: W31,
                        dir: g31,
                        slideNr: E31,
                        load: y31,
                        active: b31,
                        callback: z31
                    });
                }
                if (W71) {
                    return;
                }
                var C31 = y71.shift(),
                    h21;
                K31 = C31.y;
                W31 = C31.m;
                g31 = C31.dir === 'next';
                E31 = C31.slideNr;
                y31 = C31.load;
                b31 = C31.active;
                z31 = C31.callback || D51;
                h21 = R71.getDate(K31, W31, 1);
                K31 = R71.getYear(h21);
                W31 = R71.getMonth(h21);
                W71 = true;
                L71.changing = true;
                L71.trigger('onMonthChange', {
                    year: K31,
                    month: W31
                });
                L71.trigger('onMonthLoading', {
                    year: K31,
                    month: W31
                });
                b51(K31, W31);
                if (y31) {
                    for (S71 = 0; S71 < D71; S71++) {
                        F71[g31 ? A71 - D71 + S71 : S71].html(j51(K31, W31 - w71 + S71));
                    }
                }
                if (b31) {
                    b71.addClass('mbsc-cal-slide-a');
                }
                setTimeout(function() {
                    L71.ariaMessage(R71.monthNames[W31] + ' ' + K31);
                    Q51(K31, W31, 200);
                    a71 = g31 ? a71 - n71 * E31 * H71 : a71 + n71 * E31 * H71;
                    o71.scroll(a71, b31 ? 200 : 0, false, function() {
                        var R21;
                        if (F71.length) {
                            b71.removeClass('mbsc-cal-slide-a').attr('aria-hidden', 'true');
                            if (g31) {
                                R21 = F71.splice(0, E31);
                                for (S71 = 0; S71 < E31; S71++) {
                                    F71.push(R21[S71]);
                                    O51(F71[F71.length - 1], +F71[F71.length - 2].attr('data-curr') + 100 * H71);
                                }
                            } else {
                                R21 = F71.splice(A71 - E31, E31);
                                for (S71 = E31 - 1; S71 >= 0; S71--) {
                                    F71.unshift(R21[S71]);
                                    O51(F71[0], +F71[1].attr('data-curr') - 100 * H71);
                                }
                            }
                            for (S71 = 0; S71 < E31; S71++) {
                                F71[g31 ? A71 - E31 + S71 : S71].html(j51(K31, W31 - w71 - V71 + S71 + (g31 ? A71 - E31 : 0)));
                                if (y31) {
                                    F71[g31 ? S71 : A71 - E31 + S71].html(j51(K31, W31 - w71 - V71 + S71 + (g31 ? 0 : A71 - E31)));
                                }
                            }
                            for (S71 = 0; S71 < D71; S71++) {
                                F71[V71 + S71].addClass('mbsc-cal-slide-a').removeAttr('aria-hidden');
                            }
                            v51(K31, W31);
                            W71 = false;
                        }
                        if (y71.length) {
                            setTimeout(function() {
                                B71();
                            }, 10);
                        } else {
                            I71 = K31;
                            Y71 = W31;
                            L71.changing = false;
                            q11('.mbsc-cal-day', v71).attr('tabindex', -1);
                            Y81();
                            if (x51 !== t11) {
                                L51(K31, W31, x51);
                            } else {
                                L71.trigger('onMonthLoaded', {
                                    year: K31,
                                    month: W31
                                });
                            }
                            z31();
                        }
                    });
                }, 10);
            }

            function d81() {
                var L21 = q11(this),
                    V21 = L71.live,
                    J21 = L71.getDate(true),
                    Y21 = L21.attr('data-full'),
                    D21 = Y21.split('-'),
                    S21 = v11(D21[0], D21[1], D21[2]),
                    I21 = v11(S21.getFullYear(), S21.getMonth(), S21.getDate(), J21.getHours(), J21.getMinutes(), J21.getSeconds()),
                    w21 = L21.hasClass('mbsc-cal-day-sel');
                if (!X51 && L21.hasClass('mbsc-cal-day-diff')) {
                    return;
                }
                if (L71.trigger('onDayChange', q11.extend(i51[Y21], {
                        date: I21,
                        target: this,
                        selected: w21
                    })) !== false) {
                    L71.needsSlide = false;
                    e51 = true;
                    L71.setDate(I21, V21, 0.2, !V21, true);
                    if (R71.outerMonthChange) {
                        x71 = true;
                        if (S21 < R71.getDate(I71, Y71 - w71, 1)) {
                            K51();
                        } else if (S21 > R71.getDate(I71, Y71 - w71 + D71, 0)) {
                            W51();
                        }
                        x71 = false;
                    }
                    if (L71.live) {
                        L71.trigger('onSet', {
                            valueText: L71._value
                        });
                    }
                }
            }

            function O51(u21, F21) {
                u21.attr('data-curr', F21);
                u21[0].style[z11 + 'Transform'] = 'translate3d(' + (j71 ? '0,' + F21 + '%,' : F21 + '%,' + '0,') + '0)';
            }

            function S81(n21) {
                if (L71.isVisible() && X71) {
                    if (!L71.changing) {
                        L51(I71, Y71, n21);
                    } else {
                        x51 = n21;
                    }
                }
            }

            function W51() {
                if (x71 && R71.getDate(I71, Y71 + D71 - w71, 1) <= r71) {
                    B71(I71, ++Y71, 'next', 1, false, true, W51);
                }
            }

            function K51() {
                if (x71 && R71.getDate(I71, Y71 - w71 - 1, 1) >= f71) {
                    B71(I71, --Y71, 'prev', 1, false, true, K51);
                }
            }

            function I81(d21) {
                if (x71 && R71.getDate(I71, Y71, 1) <= R71.getDate(R71.getYear(r71) - 1, R71.getMonth(r71) - p51, 1)) {
                    B71(++I71, Y71, 'next', V71, true, true, function() {
                        I81(d21);
                    });
                } else if (x71 && !d21.hasClass('mbsc-fr-btn-d')) {
                    B71(R71.getYear(r71), R71.getMonth(r71) - p51, 'next', V71, true, true);
                }
            }

            function w81(r21) {
                if (x71 && R71.getDate(I71, Y71, 1) >= R71.getDate(R71.getYear(f71) + 1, R71.getMonth(f71) + w71, 1)) {
                    B71(--I71, Y71, 'prev', V71, true, true, function() {
                        w81(r21);
                    });
                } else if (x71 && !r21.hasClass('mbsc-fr-btn-d')) {
                    B71(R71.getYear(f71), R71.getMonth(f71) + w71, 'prev', V71, true, true);
                }
            }

            function f51(f21, p21) {
                if (!f21.hasClass('mbsc-cal-v')) {
                    f21.addClass('mbsc-cal-v' + (p21 ? '' : ' mbsc-cal-p-in')).removeClass('mbsc-cal-p-out mbsc-cal-h');
                    L71.trigger('onSelectShow');
                }
            }

            function c71(j21, x21) {
                if (j21.hasClass('mbsc-cal-v')) {
                    j21.removeClass('mbsc-cal-v mbsc-cal-p-in').addClass('mbsc-cal-h' + (x21 ? '' : ' mbsc-cal-p-out'));
                }
            }

            function V51(X21, s21) {
                if ((s21 || X21).hasClass('mbsc-cal-v')) {
                    c71(X21);
                } else {
                    f51(X21);
                }
            }

            function t51() {
                q11(this).removeClass('mbsc-cal-p-out mbsc-cal-p-in');
            }

            function L81(l21) {
                return l21[0].innerWidth || l21.innerWidth();
            }
            var t71, S71, l71, Z51, Y51, J71, q51, p71, v71, n71, a71, e51, X71, N71, r51, y51, P71, U71, S51, o71, q71, c51, I51, g71, F51, C71, d51, R81, F81, f71, r71, h51, k51, e71, I71, Y71, G51, a51, z51, h81, K71, Q71, W71, J81, D81, G71, U51, x71, D71, A71, p51, w71, x51, X51, n81, s71, m71, n51, M51 = this,
                b71 = [],
                F71 = [],
                y71 = [],
                u71 = {},
                i51 = {},
                D51 = function() {},
                u81 = q11.extend({}, L71.settings),
                R71 = q11.extend(L71.settings, y11, u81),
                C51 = R71.weekDays == 'full' ? '' : R71.weekDays == 'min' ? 'Min' : 'Short',
                E71 = R71.weekCounter,
                N51 = R71.layout || (/top|bottom|inline/.test(R71.display) ? 'liquid' : ''),
                T71 = N51 == 'liquid' && R71.display !== 'bubble',
                H51 = R71.display == 'center',
                O71 = R71.rtl,
                H71 = O71 ? -1 : 1,
                o51 = T71 ? null : R71.calendarWidth,
                j71 = R71.calendarScroll == 'vertical',
                i71 = R71.quickNav,
                V71 = R71.preMonths,
                Z71 = R71.yearChange,
                w51 = R71.controls.join(','),
                z71 = (R71.tabs === true || R71.tabs !== false && T71) && R71.controls.length > 1,
                l51 = !z71 && R71.tabs === t11 && !T71 && R71.controls.length > 1,
                A51 = R71.yearSuffix || '',
                k71 = R71.activeClass || '',
                u51 = 'mbsc-cal-tab-sel ' + (R71.activeTabClass || ''),
                s51 = R71.activeTabInnerClass || '',
                B51 = 'mbsc-fr-btn-d ' + (R71.disabledClass || ''),
                M71 = '',
                d71 = '';
            if (w51.match(/calendar/)) {
                X71 = true;
            } else {
                i71 = false;
            }
            if (w51.match(/date/)) {
                u71.date = 1;
            }
            if (w51.match(/time/)) {
                u71.time = 1;
            }
            if (X71 && u71.date) {
                z71 = true;
                l51 = false;
            }
            R71.layout = N51;
            R71.preset = (u71.date || X71 ? 'date' : '') + (u71.time ? 'time' : '');
            if (R71.display == 'inline') {
                q11(this).closest('[data-role="page"]').on('pageshow', function() {
                    L71.position();
                });
            }
            L71.changing = false;
            L71.needsSlide = true;
            L71.getDayProps = D51;
            L71.onGenMonth = D51;
            L71.prepareObj = T51;
            L71.refresh = function() {
                S81(false);
            };
            L71.redraw = function() {
                S81(true);
            };
            L71.navigate = function(M21, T21) {
                var A21, Q21, a21 = L71.isVisible();
                if (T21 && a21) {
                    E51(M21, true);
                } else {
                    A21 = R71.getYear(M21);
                    Q21 = R71.getMonth(M21);
                    if (a21 && (A21 != I71 || Q21 != Y71)) {
                        L71.trigger('onMonthChange', {
                            year: A21,
                            month: Q21
                        });
                        Q51(A21, Q21);
                        L51(A21, Q21);
                        v51(M21.getFullYear(), M21.getMonth());
                    }
                    I71 = A21;
                    Y71 = Q21;
                }
            };
            L71.showMonthView = function() {
                if (i71 && !U71) {
                    c71(d71, true);
                    c71(M71, true);
                    f51(P71, true);
                    U71 = true;
                }
            };
            L71.changeTab = function(G21) {
                if (!L71._isVisible || !u71[G21] || Q71 == G21) {

                    return;
                }
                Q71 = G21;
                q11('.mbsc-cal-pnl', J71).removeClass('mbsc-cal-p-in').addClass('mbsc-cal-pnl-h');
                q11('.mbsc-cal-tab', J71).removeClass(u51).removeAttr('aria-selected').find('.mbsc-cal-tab-i').removeClass(s51);
                q11('.mbsc-cal-tab[data-control="' + G21 + '"]', J71).addClass(u51).attr('aria-selected', 'true').find('.mbsc-cal-tab-i').addClass(s51);
                u71[Q71].removeClass('mbsc-cal-pnl-h').addClass('mbsc-cal-p-in');
                if (Q71 == 'calendar') {
                    t71 = L71.getDate(true);
                    if (t71.getFullYear() !== e71.getFullYear() || t71.getMonth() !== e71.getMonth() || t71.getDate() !== e71.getDate()) {
                        E51(t71);
                    }
                }
                L71.showMonthView();
                L71.trigger('onTabChange', {
                    tab: Q71
                });
            };
            Z51 = E11.datetime.call(this, L71);
            I51 = R71.dateFormat.search(/m/i);
            F51 = R71.dateFormat.search(/y/i);
            q11.extend(Z51, {
                ariaMessage: R71.calendarText,
                onMarkupReady: function(P21) {
                    var i21, B21, O21 = '';
                    J71 = q11(P21.target);
                    q51 = R71.display == 'inline' ? q11(this).is('div') ? q11(this) : q11(this).parent() : L71._window;
                    e71 = L71.getDate(true);
                    if (!I71) {
                        I71 = R71.getYear(e71);
                        Y71 = R71.getMonth(e71);
                    }
                    a71 = 0;
                    r51 = true;
                    W71 = false;
                    S51 = R71.monthNames;
                    Q71 = 'calendar';
                    if (R71.min) {
                        f71 = v11(R71.min.getFullYear(), R71.min.getMonth(), 1);
                        h51 = R71.min;
                    } else {
                        f71 = v11(R71.startYear, 0, 1);
                        h51 = f71;
                    }
                    if (R71.max) {
                        r71 = v11(R71.max.getFullYear(), R71.max.getMonth(), 1);
                        k51 = R71.max;
                    } else {
                        r71 = v11(R71.endYear, 11, 31, 23, 59, 59);
                        k51 = r71;
                    }
                    J71.addClass('mbsc-calendar');
                    Y51 = q11('.mbsc-fr-popup', J71);
                    K71 = q11('.mbsc-fr-c', J71);
                    if (u71.date) {
                        u71.date = q11('.mbsc-sc-whl-gr-c', J71).eq(0);
                    } else if (X71) {
                        q11('.mbsc-sc-whl-gr-c', J71).eq(0).addClass('mbsc-cal-hdn');
                    }
                    if (u71.time) {
                        u71.time = q11('.mbsc-sc-whl-gr-c', J71).eq(1);
                    }
                    if (X71) {
                        D71 = R71.months == 'auto' ? Math.max(1, Math.min(3, Math.floor((o51 || L81(q51)) / 280))) : R71.months;
                        A71 = D71 + 2 * V71;
                        p51 = Math.floor(D71 / 2);
                        w71 = Math.round(D71 / 2) - 1;
                        X51 = R71.showOuterDays === t11 ? D71 < 2 : R71.showOuterDays;
                        j71 = j71 && D71 < 2;
                        B21 = '<div class="mbsc-cal-btnw"><div class="' + (O71 ? 'mbsc-cal-next-m' : 'mbsc-cal-prev-m') + ' mbsc-cal-prev mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (R71.btnCalPrevClass || '') + '"' + ' aria-label="' + R71.prevMonthText + '"></div></div>';
                        for (S71 = 0; S71 < D71; ++S71) {
                            B21 += '<div class="mbsc-cal-btnw-m" style="width: ' + 100 / D71 + '%"><span role="button" class="mbsc-cal-month"></span></div>';
                        }
                        B21 += '<div class="' + (O71 ? 'mbsc-cal-prev-m' : 'mbsc-cal-next-m') + ' mbsc-cal-next mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (R71.btnCalNextClass || '') + '"' + ' aria-label="' + R71.nextMonthText + '"></div></div></div>';
                        if (Z71) {
                            O21 = '<div class="mbsc-cal-btnw"><div class="' + (O71 ? 'mbsc-cal-next-y' : 'mbsc-cal-prev-y') + ' mbsc-cal-prev mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (R71.btnCalPrevClass || '') + '"' + ' aria-label="' + R71.prevYearText + '"></div></div>' + '<span role="button" class="mbsc-cal-year"></span>' + '<div class="' + (O71 ? 'mbsc-cal-prev-y' : 'mbsc-cal-next-y') + ' mbsc-cal-next mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (R71.btnCalNextClass || '') + '"' + ' aria-label="' + R71.nextYearText + '"></div></div></div>';
                        }
                        if (i71) {
                            C71 = R71.getYear(f71);
                            d51 = R71.getYear(r71);
                            R81 = R71.getMonth(f71);
                            F81 = R71.getMonth(r71);
                            a51 = Math.ceil((d51 - C71 + 1) / 12) + 2;
                            M71 = V81('month', 36, 24, 0, '', R71.monthNames, R71.monthNamesShort);
                            d71 = V81('year', a51 * 12, d51 - C71 + 13, C71, A51);
                        }
                        N71 = '<div class="mbsc-w-p mbsc-cal-c"><div class="mbsc-cal mbsc-cal-hl-now' + (D71 > 1 ? ' mbsc-cal-multi ' : '') + (E71 ? ' mbsc-cal-weeks ' : '') + (j71 ? ' mbsc-cal-vertical' : '') + (X51 ? '' : ' mbsc-cal-hide-diff ') + (R71.calendarClass || '') + '">' + '<div class="mbsc-cal-header"><div class="mbsc-cal-btnc ' + (Z71 ? 'mbsc-cal-btnc-ym' : 'mbsc-cal-btnc-m') + '">' + (F51 < I51 || D71 > 1 ? O21 + B21 : B21 + O21) + '</div></div><div class="mbsc-cal-body"><div class="mbsc-cal-m-c mbsc-cal-v"><div class="mbsc-cal-days-c">';
                        for (l71 = 0; l71 < D71; ++l71) {
                            N71 += '<div aria-hidden="true" class="mbsc-cal-days" style="width: ' + 100 / D71 + '%"><table cellpadding="0" cellspacing="0"><tr>';
                            for (S71 = 0; S71 < 7; S71++) {
                                N71 += '<th>' + R71['dayNames' + C51][(S71 + R71.firstDay) % 7] + '</th>';
                            }
                            N71 += '</tr></table></div>';
                        }
                        N71 += '</div>' + '<div class="mbsc-cal-week-nrs-c ' + (R71.weekNrClass || '') + '">' + '<div class="mbsc-cal-week-nrs"></div>' + '</div>' + '<div class="mbsc-cal-anim-c ' + (R71.calendarClass || '') + '">' + '<div class="mbsc-cal-anim">';
                        for (S71 = 0; S71 < D71 + 2 * V71; S71++) {
                            N71 += '<div class="mbsc-cal-slide" aria-hidden="true"></div>';
                        }
                        N71 += '</div></div></div>' + M71 + d71 + '</div></div></div>';
                        u71.calendar = q11(N71);
                    }
                    q11.each(R71.controls, function(N21, k21) {
                        u71[k21] = q11('<div class="mbsc-cal-pnl" id="' + (M51.id + '_dw_pnl_' + N21) + '"></div>').append(q11('<div class="mbsc-cal-pnl-i"></div>').append(u71[k21])).appendTo(K71);
                    });
                    i21 = '<div class="mbsc-cal-tabs"><ul role="tablist">';
                    q11.each(R71.controls, function(U21, H21) {
                        if (u71[H21]) {
                            i21 += '<li role="tab" aria-controls="' + (M51.id + '_dw_pnl_' + U21) + '" class="mbsc-cal-tab ' + (U21 ? '' : u51) + '" data-control="' + H21 + '"><a href="#" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-cal-tab-i ' + (!U21 ? s51 : '') + '">' + R71[H21 + 'Text'] + '</a></li>';
                        }
                    });
                    i21 += '</ul></div>';
                    K71.before(i21);
                    p71 = q11('.mbsc-cal-anim-c', J71);
                    v71 = q11('.mbsc-cal-anim', p71);
                    y51 = q11('.mbsc-cal-week-nrs', J71);
                    if (X71) {
                        U71 = true;
                        b71 = q11('.mbsc-cal-slide', v71).each(function(e21, c21) {
                            F71.push(q11(c21));
                        });
                        b71.slice(V71, V71 + D71).addClass('mbsc-cal-slide-a').removeAttr('aria-hidden');
                        for (S71 = 0; S71 < A71; S71++) {
                            O51(F71[S71], 100 * (S71 - V71) * H71);
                        }
                        L51(I71, Y71);
                        o71 = new m11.classes.ScrollView(p71[0], {
                            axis: j71 ? 'Y' : 'X',
                            easing: '',
                            contSize: 0,
                            snap: 1,
                            maxSnapScroll: V71,
                            moveElement: v71,
                            mousewheel: R71.mousewheel,
                            time: 200,
                            lock: true,
                            stopProp: false,
                            minScroll: -Infinity,
                            maxScroll: Infinity,
                            onAnimationEnd: function(q21) {
                                var o21 = Math.round(((j71 ? q21.posY : q21.posX) - a71) / n71) * H71;
                                if (o21) {
                                    B71(I71, Y71 - o21, o21 > 0 ? 'prev' : 'next', o21 > 0 ? o21 : -o21);
                                }
                            }
                        });
                    }
                    c51 = q11('.mbsc-cal-month', J71);
                    g71 = q11('.mbsc-cal-year', J71);
                    P71 = q11('.mbsc-cal-m-c', J71);
                    if (i71) {
                        P71.on(W11, t51);
                        M71 = q11('.mbsc-cal-month-c', J71).on(W11, t51);
                        d71 = q11('.mbsc-cal-year-c', J71).on(W11, t51);
                        n81 = q11('.mbsc-cal-sc-p', J71);
                        G51 = {
                            axis: j71 ? 'Y' : 'X',
                            contSize: 0,
                            snap: 1,
                            maxSnapScroll: 1,
                            rtl: R71.rtl,
                            mousewheel: R71.mousewheel,
                            time: 200,
                            stopProp: false,
                            minScroll: -Infinity,
                            maxScroll: Infinity
                        };
                        s71 = new m11.classes.ScrollView(d71[0], G51);
                        q71 = new m11.classes.ScrollView(M71[0], G51);
                    }
                    if (T71) {
                        J71.addClass('mbsc-cal-liq');
                    } else {
                        q11('.mbsc-cal', J71).width(o51 || 280 * D71);
                    }
                    if (R71.calendarHeight) {
                        q11('.mbsc-cal-anim-c', J71).height(R71.calendarHeight);
                    }
                    L71.tap(p71, function(m21) {
                        var v21 = q11(m21.target);
                        if (!W71 && !o71.scrolled && R71.readonly !== true) {
                            v21 = v21.closest('.mbsc-cal-day', this);
                            if (v21.hasClass('mbsc-cal-day-v')) {
                                d81.call(v21[0]);
                            }
                        }
                    });
                    q11('.mbsc-cal-btn', J71).on('touchstart mousedown keydown', p81).on('touchmove', m51).on('touchend touchcancel keyup', P51);
                    q11('.mbsc-cal-tab', J71).on('touchstart click', function(Z21) {
                        if (C11(Z21, this)) {
                            L71.changeTab(q11(this).attr('data-control'));
                        }
                    });
                    if (i71) {
                        L71.tap(q11('.mbsc-cal-month', J71), function() {
                            if (!d71.hasClass('mbsc-cal-v')) {
                                V51(P71);
                                U71 = P71.hasClass('mbsc-cal-v');
                            }
                            V51(M71);
                            c71(d71);
                        });
                        L71.tap(q11('.mbsc-cal-year', J71), function() {
                            if (!d71.hasClass('mbsc-cal-v')) {
                                s71.scroll(m71);
                            }
                            if (!M71.hasClass('mbsc-cal-v')) {
                                V51(P71);
                                U71 = P71.hasClass('mbsc-cal-v');
                            }
                            V51(d71);
                            c71(M71);
                        });
                        L71.tap(q11('.mbsc-cal-month-s', J71), function() {
                            if (!q71.scrolled && !q11(this).hasClass('mbsc-fr-btn-d')) {
                                L71.navigate(R71.getDate(I71, q11(this).attr('data-val'), 1));
                            }
                        });
                        L71.tap(q11('.mbsc-cal-year-s', J71), function() {
                            if (!s71.scrolled) {
                                t71 = R71.getDate(q11(this).attr('data-val'), Y71, 1);
                                L71.navigate(new Date(Z11.constrain(t71, f71, r71)));
                            }
                        });
                        L71.tap(d71, function() {
                            if (!s71.scrolled) {
                                c71(d71);
                                f51(P71);
                                U71 = true;
                            }
                        });
                        L71.tap(M71, function() {
                            if (!q71.scrolled) {
                                c71(M71);
                                f51(P71);
                                U71 = true;
                            }
                        });
                    }
                },
                onShow: function() {
                    if (X71) {
                        Q51(I71, Y71);
                    }
                },
                onPosition: function(R61) {
                    var y21, g21, h61, C21, W21, t21, E21 = 0,
                        K21 = 0,
                        z21 = 0,
                        b21 = R61.windowHeight;
                    if (T71) {
                        if (H51) {
                            p71.height('');
                        }
                        K71.height('');
                        v71.width('');
                    }
                    if (n71) {
                        W21 = n71;
                    }
                    if (X71) {
                        n71 = Math.round(Math.round(p71[0][j71 ? 'offsetHeight' : 'offsetWidth']) / D71);
                    }
                    if (n71) {
                        J71.removeClass('mbsc-cal-m mbsc-cal-l');
                        if (n71 > 1024) {
                            J71.addClass('mbsc-cal-l');
                        } else if (n71 > 640) {
                            J71.addClass('mbsc-cal-m');
                        }
                    }
                    if (z71 && (r51 || T71) || l51) {
                        q11('.mbsc-cal-pnl', J71).removeClass('mbsc-cal-pnl-h');
                        q11.each(u71, function(L61, S61) {
                            y21 = S61[0].offsetWidth;
                            E21 = Math.max(E21, y21);
                            K21 = Math.max(K21, S61[0].offsetHeight);
                            z21 += y21;
                        });
                        if (z71 || l51 && z21 > L81(q51)) {
                            g21 = true;
                            Q71 = q11('.mbsc-cal-tabs .mbsc-cal-tab-sel', J71).attr('data-control');
                            Y51.addClass('mbsc-cal-tabbed');
                        } else {
                            Q71 = 'calendar';
                            E21 = '';
                            K21 = '';
                            Y51.removeClass('mbsc-cal-tabbed');
                            K71.css({
                                width: '',
                                height: ''
                            });
                        }
                    }
                    if (T71 && H51 && X71) {
                        L71._isFullScreen = true;
                        if (g21) {
                            K71.height(u71.calendar[0].offsetHeight);
                        }
                        C21 = Y51[0].offsetHeight;
                        if (b21 >= C21) {
                            p71.height(b21 - C21 + p71[0].offsetHeight);
                        }
                        K21 = Math.max(K21, u71.calendar[0].offsetHeight);
                    }
                    if (g21) {
                        K71.css({
                            width: T71 ? '' : E21,
                            height: K21
                        });
                        if (X71) {
                            n71 = Math.round(Math.round(p71[0][j71 ? 'offsetHeight' : 'offsetWidth']) / D71);
                        }
                    }
                    if (n71) {
                        v71[j71 ? 'height' : 'width'](n71);
                        if (n71 !== W21) {
                            if (Z71) {
                                S51 = R71.maxMonthWidth > q11('.mbsc-cal-btnw-m', J71).width() ? R71.monthNamesShort : R71.monthNames;
                                for (S71 = 0; S71 < D71; ++S71) {
                                    q11(c51[S71]).text(S51[R71.getMonth(R71.getDate(I71, Y71 - w71 + S71, 1))]);
                                }
                            }
                            if (i71) {
                                t21 = d71[0][j71 ? 'offsetHeight' : 'offsetWidth'];
                                q11.extend(s71.settings, {
                                    contSize: t21,
                                    snap: t21,
                                    minScroll: (2 - a51) * t21,
                                    maxScroll: -t21
                                });
                                q11.extend(q71.settings, {
                                    contSize: t21,
                                    snap: t21,
                                    minScroll: -t21,
                                    maxScroll: -t21
                                });
                                s71.refresh();
                                q71.refresh();
                                if (d71.hasClass('mbsc-cal-v')) {
                                    s71.scroll(m71);
                                }
                            }
                            if (T71 && !r51 && W21) {
                                h61 = a71 / W21;
                                a71 = h61 * n71;
                            }
                            v51(I71, Y71);
                        }
                    } else {
                        n71 = W21;
                    }
                    if (g21) {
                        q11('.mbsc-cal-pnl', J71).addClass('mbsc-cal-pnl-h');
                        u71[Q71].removeClass('mbsc-cal-pnl-h');
                    }
                    L71.trigger('onCalResize');
                    r51 = false;
                },
                onHide: function() {
                    y71 = [];
                    F71 = [];
                    Q71 = null;
                    I71 = null;
                    Y71 = null;
                    W71 = true;
                    n71 = 0;
                    if (o71) {
                        o71.destroy();
                    }
                    if (i71 && s71 && q71) {
                        s71.destroy();
                        q71.destroy();
                    }
                },
                onValidated: function(Y61) {
                    var D61, V61, J61;
                    V61 = L71.getDate(true);
                    if (e51) {
                        D61 = 'calendar';
                    } else {
                        for (J61 in L71.order) {
                            if (J61 && L71.order[J61] === Y61) {
                                D61 = /[mdy]/.test(J61) ? 'date' : 'time';
                            }
                        }
                    }
                    L71.trigger('onSetDate', {
                        date: V61,
                        control: D61
                    });
                    E51(V61);
                    e51 = false;
                }
            });
            return Z51;
        };
})(window, document);
     (function(W7J, O7J, w7J) {
         var m7J = mobiscroll,
             c7J = m7J.$,
             P7J = c7J.extend,
             R7J = m7J.util,
             E7J = R7J.datetime,
             A7J = E7J.adjustedDate,
             i7J = m7J.presets.scroller,
             N7J = {};
         m7J.presetShort('calendar');
         i7J.calendar = function(Q7J) {
             function a1J(q1J) {
                 if (q1J) {
                     if (x1J[q1J]) {
                         return x1J[q1J];
                     }
                     var B1J = c7J('<div style="background-color:' + q1J + ';"></div>').appendTo('body'),
                         y1J = W7J.getComputedStyle ? getComputedStyle(B1J[0]) : B1J[0].style,
                         u1J = y1J.backgroundColor.replace(/rgb|rgba|\(|\)|\s/g, '').split(','),
                         J1J = u1J[0] * 0.299 + u1J[1] * 0.587 + u1J[2] * 0.114,
                         j1J = J1J > 130 ? '#000' : '#fff';
                     B1J.remove();
                     x1J[q1J] = j1J;
                     return j1J;
                 }
             }
             function Y1J(v1J) {
                 return A7J(v1J.getFullYear(), v1J.getMonth(), v1J.getDate());
             }
             function s1J(t1J) {
                 G7J = {};
                 if (t1J && t1J.length) {
                     for (g7J = 0; g7J < t1J.length; g7J++) {
                         G7J[Y1J(t1J[g7J])] = t1J[g7J];
                     }
                 }
             }
             function n1J() {
                 Q7J.refresh();
             }
             var o1J, k1J, r1J, g7J, U1J, M1J, F1J, x1J = {},
                 D1J = P7J({}, Q7J.settings),
                 T7J = P7J(Q7J.settings, N7J, D1J),
                 p1J = T7J.activeClass || '',
                 X7J = T7J.select == 'multiple' || T7J.select > 1 || T7J.selectType == 'week',
                 K1J = R7J.isNumeric(T7J.select) ? T7J.select : Infinity,
                 L1J = !!T7J.events,
                 G7J = {};
             F1J = i7J.calbase.call(this, Q7J);
             o1J = P7J({}, F1J);
             r1J = T7J.firstSelectDay === w7J ? T7J.firstDay : T7J.firstSelectDay;
             if (X7J && T7J.defaultValue && T7J.defaultValue.length) {
                 for (g7J = 0; g7J < T7J.defaultValue.length; g7J++) {
                     G7J[Y1J(T7J.defaultValue[g7J])] = T7J.defaultValue[g7J];
                 }
             }
             Q7J.onGenMonth = function(e1J, I1J) {
                 U1J = Q7J.prepareObj(T7J.events || T7J.marked, e1J, I1J);
             };
             Q7J.getDayProps = function(l1J) {
                 var b1J, h1J = X7J ? G7J[l1J] !== w7J : w7J,
                     Z1J = U1J[l1J] ? U1J[l1J] : false,
                     V1J = Z1J && Z1J[0] && Z1J[0].text,
                     d1J = Z1J && Z1J[0] && Z1J[0].color,
                     C1J = L1J && V1J ? a1J(d1J) : '',
                     f1J = '',
                     S1J = '';
                 if (Z1J) {
                     for (b1J = 0; b1J < Z1J.length; b1J++) {
                         if (Z1J[b1J].icon) {
                             f1J += '<span class="mbsc-ic mbsc-ic-' + Z1J[b1J].icon + '"' + (Z1J[b1J].text ? '' : Z1J[b1J].color ? ' style="color:' + Z1J[b1J].color + ';"' : '') + '></span>\n';
                         }
                     }
                     S1J = '<div class="mbsc-cal-day-m"><div class="mbsc-cal-day-m-t">';
                     for (b1J = 0; b1J < Z1J.length; b1J++) {
                         S1J += '<div class="mbsc-cal-day-m-c"' + (Z1J[b1J].color ? ' style="background:' + Z1J[b1J].color + ';"' : '') + '></div>';
                     }
                     S1J += '</div></div>';
                 }
                 return {
                     marked: Z1J,
                     selected: h1J,
                     cssClass: Z1J ? 'mbsc-cal-day-marked' : '',
                     ariaLabel: L1J ? V1J : '',
                     markup: L1J && V1J ? '<div class="mbsc-cal-day-txt-c"><div class="mbsc-cal-day-txt" title="' + c7J('<div>' + V1J + '</div>').text() + '"' + (d1J ? ' style="background:' + d1J + ';color:' + C1J + ';text-shadow:none;"' : '') + '>' + f1J + V1J + '</div></div>' : L1J && f1J ? '<div class="mbsc-cal-day-ic-c">' + f1J + '</div>' : Z1J ? S1J : ''
                 };
             };
             Q7J.addValue = function(z1J) {
                 G7J[Y1J(z1J)] = z1J;
                 n1J();
             };
             Q7J.removeValue = function(H1J) {
                 delete G7J[Y1J(H1J)];
                 n1J();
             };
             Q7J.setVal = function(c1J, P1J, R1J, m1J, w1J) {
                 if (X7J) {
                     s1J(c1J);
                     c1J = c1J ? c1J[0] : null;
                 }
                 Q7J._setVal(c1J, P1J, R1J, m1J, w1J);
                 n1J();
             };
             Q7J.getVal = function(E1J) {
                 if (X7J) {
                     return R7J.objectToArray(G7J);
                 }
                 return Q7J.getDate(E1J);
             };
             P7J(F1J, {
                 highlight: !X7J,
                 outerMonthChange: !X7J,
                 parseValue: function(i1J) {
                     var A1J, N1J;
                     if (X7J && i1J && typeof i1J === 'string') {
                         G7J = {};
                         i1J = i1J.split(',');
                         for (A1J = 0; A1J < i1J.length; A1J++) {
                             N1J = E7J.parseDate(Q7J.format, i1J[A1J].replace(/^\s+|\s+$/g, ''), T7J);
                             G7J[Y1J(N1J)] = N1J;
                         }
                         i1J = i1J[0];
                     }
                     if (X7J && T7J.defaultValue && T7J.defaultValue.length) {
                         T7J.defaultValue = T7J.defaultValue[0];
                     }
                     return o1J.parseValue.call(this, i1J);
                 },
                 formatValue: function(T1J) {
                     var O1J, W1J = [];
                     if (X7J) {
                         for (O1J in G7J) {
                             W1J.push(E7J.formatDate(Q7J.format, G7J[O1J], T7J));
                         }
                         return W1J.join(', ');
                     }
                     return o1J.formatValue.call(this, T1J);
                 },
                 onClear: function() {
                     if (X7J) {
                         G7J = {};
                         Q7J.refresh();
                     }
                 },
                 onBeforeShow: function() {
                     if (T7J.setOnDayTap === w7J && (!T7J.buttons || !T7J.buttons.length)) {
                         T7J.setOnDayTap = true;
                     }
                     if (T7J.setOnDayTap && T7J.display != 'inline') {
                         T7J.outerMonthChange = false;
                     }
                     if (T7J.counter && X7J) {
                         T7J.headerText = function() {
                             var G1J = 0,
                                 Q1J = T7J.selectType == 'week' ? 7 : 1;
                             c7J.each(G7J, function() {
                                 G1J++;
                             });
                             G1J = Math.round(G1J / Q1J);
                             return (G1J > 1 ? T7J.selectedPluralText || T7J.selectedText : T7J.selectedText).replace(/{count}/, G1J);
                         };
                     }
                 },
                 onMarkupReady: function(X1J) {
                     o1J.onMarkupReady.call(this, X1J);
                     k1J = c7J(X1J.target);
                     if (X7J) {
                         c7J('.mbsc-fr-hdr', k1J).attr('aria-live', 'off');
                         M1J = P7J({}, G7J);
                     }
                     if (L1J) {
                         c7J('.mbsc-cal', k1J).addClass('mbsc-cal-ev');
                     }
                 },
                 onDayChange: function(o0J) {
                     var k0J = o0J.date,
                         g1J = Y1J(k0J),
                         U0J = c7J(o0J.target),
                         F0J = o0J.selected;
                     if (X7J) {
                         if (T7J.selectType == 'week') {
                             var L0J, n0J, Y0J = g1J.getDay() - r1J;
                             Y0J = Y0J < 0 ? 7 + Y0J : Y0J;
                             if (T7J.select != 'multiple') {
                                 G7J = {};
                             }
                             for (L0J = 0; L0J < 7; L0J++) {
                                 n0J = A7J(g1J.getFullYear(), g1J.getMonth(), g1J.getDate() - Y0J + L0J);
                                 if (F0J) {
                                     delete G7J[n0J];
                                 } else if (R7J.objectToArray(G7J).length / 7 < K1J) {
                                     G7J[n0J] = n0J;
                                 }
                             }
                             n1J();
                         } else {
                             var x0J = c7J('.mbsc-cal .mbsc-cal-day[data-full="' + U0J.attr('data-full') + '"]', k1J);
                             if (F0J) {
                                 x0J.removeClass('mbsc-cal-day-sel').removeAttr('aria-selected').find('.mbsc-cal-day-i').removeClass(p1J);
                                 delete G7J[g1J];
                             } else if (R7J.objectToArray(G7J).length < K1J) {
                                 x0J.addClass('mbsc-cal-day-sel').attr('aria-selected', 'true').find('.mbsc-cal-day-i').addClass(p1J);
                                 G7J[g1J] = g1J;
                             }
                         }
                     }
                     if (T7J.setOnDayTap && T7J.select != 'multiple' && T7J.display != 'inline') {
                         Q7J.needsSlide = false;
                         Q7J.setDate(k0J);
                         Q7J.select();
                         return false;
                     }
                 },
                 onCancel: function() {
                     if (!Q7J.live && X7J) {
                         G7J = P7J({}, M1J);
                     }
                 }
             });
             return F1J;
         };
     }(window, document));
     (function(u0J, j0J, s0J) {
         var D0J = mobiscroll,
             K0J = D0J.$,
             p0J = K0J.extend,
             q0J = D0J.util,
             M0J = q0J.datetime,
             a0J = M0J.adjustedDate,
             r0J = D0J.presets.scroller,
             B0J = {
                 labelsShort: ['Yrs', 'Mths', 'Days', 'Hrs', 'Mins', 'Secs'],
                 eventText: 'event',
                 eventsText: 'events'
             };
         D0J.presetShort('eventcalendar');
         r0J.eventcalendar = function(y0J) {
             function W0J(Q0J) {
                 if (Q0J) {
                     if (C0J[Q0J]) {
                         return C0J[Q0J];
                     }
                     var X0J = K0J('<div style="background-color:' + Q0J + ';"></div>').appendTo('body'),
                         L4J = u0J.getComputedStyle ? getComputedStyle(X0J[0]) : X0J[0].style,
                         g0J = L4J.backgroundColor.replace(/rgb|rgba|\(|\)|\s/g, '').split(','),
                         n4J = g0J[0] * 0.299 + g0J[1] * 0.587 + g0J[2] * 0.114,
                         Y4J = n4J > 130 ? '#000' : '#fff';
                     X0J.remove();
                     C0J[Q0J] = Y4J;
                     return Y4J;
                 }
             }
             function O0J(p4J) {
                 var o4J = J0J.labelsShort,
                     F4J = Math.abs(p4J) / 1000,
                     x4J = F4J / 60,
                     U4J = x4J / 60,
                     k4J = U4J / 24,
                     K4J = k4J / 365;
                 return F4J < 45 && Math.round(F4J) + ' ' + o4J[5].toLowerCase() || x4J < 45 && Math.round(x4J) + ' ' + o4J[4].toLowerCase() || U4J < 24 && Math.round(U4J) + ' ' + o4J[3].toLowerCase() || k4J < 30 && Math.round(k4J) + ' ' + o4J[2].toLowerCase() || k4J < 365 && Math.round(k4J / 30) + ' ' + o4J[1].toLowerCase() || Math.round(K4J) + ' ' + o4J[0].toLowerCase();
             }
             function w0J(D4J) {
                 return D4J.sort(function(M4J, r4J) {
                     var s4J = M4J.d || M4J.start,
                         a4J = r4J.d || r4J.start,
                         q4J = !s4J.getTime ? 0 : M4J.start && M4J.end && M4J.start.toDateString() !== M4J.end.toDateString() ? 1 : s4J.getTime(),
                         B4J = !a4J.getTime ? 0 : r4J.start && r4J.end && r4J.start.toDateString() !== r4J.end.toDateString() ? 1 : a4J.getTime();
                     return q4J - B4J;
                 });
             }
             function E0J(u4J) {
                 var J4J, v4J = K0J('.mbsc-cal-c', I0J)[0].offsetHeight,
                     t4J = u4J[0].offsetHeight,
                     e4J = u4J[0].offsetWidth,
                     y4J = u4J.offset().top - K0J('.mbsc-cal-c', I0J).offset().top,
                     j4J = u4J.closest('.mbsc-cal-row').index() < 2;
                 J4J = v0J.addClass('mbsc-cal-events-t').css({
                     top: j4J ? y4J + t4J : '0',
                     bottom: j4J ? '0' : v4J - y4J
                 }).addClass('mbsc-cal-events-v').height();
                 v0J.css(j4J ? 'bottom' : 'top', 'auto').removeClass('mbsc-cal-events-t');
                 h0J.css('max-height', J4J);
                 V0J.refresh();
                 V0J.scroll(0);
                 if (j4J) {
                     v0J.addClass('mbsc-cal-events-b');
                 } else {
                     v0J.removeClass('mbsc-cal-events-b');
                 }
                 K0J('.mbsc-cal-events-arr', v0J).css('left', u4J.offset().left - v0J.offset().left + e4J / 2);
             }
             function N0J(h4J, l4J) {
                 var I4J = b0J[h4J];
                 if (I4J) {
                     var f4J, b4J, d4J, Z4J, S4J, C4J, V4J = '<ul class="mbsc-cal-event-list">';
                     G0J = 0;
                     e0J = l4J;
                     l4J.addClass(m0J).find('.mbsc-cal-day-i').addClass(R0J);
                     if (l4J.hasClass(l0J)) {
                         l4J.attr('data-hl', 'true').removeClass(l0J);
                     }
                     w0J(I4J);
                     K0J.each(I4J, function(H4J, z4J) {
                         Z4J = z4J.d || z4J.start;
                         S4J = z4J.start && z4J.end && z4J.start.toDateString() !== z4J.end.toDateString();
                         d4J = z4J.color;
                         C4J = W0J(d4J);
                         f4J = '';
                         b4J = '';
                         if (Z4J.getTime) {
                             f4J = M0J.formatDate((S4J ? 'MM d yy ' : '') + J0J.timeFormat, Z4J);
                         }
                         if (z4J.end) {
                             b4J = M0J.formatDate((S4J ? 'MM d yy ' : '') + J0J.timeFormat, z4J.end);
                         }
                         V4J += '<li role="button" aria-label="' + z4J.text + (f4J ? ', ' + J0J.fromText + ' ' + f4J : '') + (b4J ? ', ' + J0J.toText + ' ' + b4J : '') + '" class="mbsc-cal-event">' + '<div class="mbsc-cal-event-color" style="' + (d4J ? 'background:' + d4J + ';' : '') + '"></div>' + '<div class="mbsc-cal-event-text">' + (Z4J.getTime && !S4J ? '<div class="mbsc-cal-event-time">' + M0J.formatDate(J0J.timeFormat, Z4J) + '</div>' : '') + z4J.text + '</div>' + (z4J.start && z4J.end ? '<div class="mbsc-cal-event-dur">' + O0J(z4J.end - z4J.start) + '</div>' : '') + '</li>';
                     });
                     V4J += '</ul>';
                     P0J.html(V4J);
                     y0J.trigger('onEventBubbleShow', {
                         target: e0J[0],
                         eventList: v0J[0]
                     });
                     E0J(e0J);
                     y0J.tap(K0J('.mbsc-cal-event', P0J), function(c4J) {
                         if (!V0J.scrolled) {
                             y0J.trigger('onEventSelect', {
                                 domEvent: c4J,
                                 event: I4J[K0J(this).index()],
                                 date: h4J
                             });
                         }
                     });
                     z0J = true;
                 }
             }
             function S0J() {
                 if (v0J) {
                     v0J.removeClass('mbsc-cal-events-v');
                 }
                 if (e0J) {
                     e0J.removeClass(m0J).find('.mbsc-cal-day-i').removeClass(R0J);
                     if (e0J.attr('data-hl')) {
                         e0J.removeAttr('data-hl').addClass(l0J);
                     }
                 }
                 z0J = false;
             }
             function c0J() {
                 S0J();
                 y0J.redraw();
             }
             function T0J(P4J) {
                 return a0J(P4J.getFullYear(), P4J.getMonth(), P4J.getDate());
             }
             var A0J, I0J, v0J, e0J, b0J, V0J, h0J, P0J, z0J, G0J, H0J, f0J, C0J = {},
                 i0J = p0J({}, y0J.settings),
                 J0J = p0J(y0J.settings, B0J, i0J),
                 m0J = 'mbsc-cal-day-sel mbsc-cal-day-ev',
                 l0J = 'mbsc-cal-day-hl',
                 R0J = J0J.activeClass || '',
                 Z0J = J0J.showEventCount,
                 d0J = 0,
                 t0J = p0J(true, [], J0J.data);
             H0J = r0J.calbase.call(this, y0J);
             A0J = p0J({}, H0J);
             K0J.each(t0J, function(m4J, R4J) {
                 if (R4J._id === s0J) {
                     R4J._id = d0J++;
                 }
             });
             y0J.onGenMonth = function(w4J, E4J) {
                 b0J = y0J.prepareObj(t0J, w4J, E4J);
             };
             y0J.getDayProps = function(T4J) {
                 var A4J, i4J = b0J[T4J] ? b0J[T4J] : false,
                     N4J = i4J ? b0J[T4J].length + ' ' + (b0J[T4J].length > 1 ? J0J.eventsText : J0J.eventText) : 0,
                     G4J = i4J && i4J[0] && i4J[0].color,
                     Q4J = Z0J && N4J ? W0J(G4J) : '',
                     W4J = '',
                     O4J = '';
                 if (i4J) {
                     for (A4J = 0; A4J < i4J.length; A4J++) {
                         if (i4J[A4J].icon) {
                             W4J += '<span class="mbsc-ic mbsc-ic-' + i4J[A4J].icon + '"' + (i4J[A4J].text ? '' : i4J[A4J].color ? ' style="color:' + i4J[A4J].color + ';"' : '') + '></span>\n';
                         }
                     }
                     O4J = '<div class="mbsc-cal-day-m"><div class="mbsc-cal-day-m-t">';
                     for (A4J = 0; A4J < i4J.length; A4J++) {
                         O4J += '<div class="mbsc-cal-day-m-c"' + (i4J[A4J].color ? ' style="background:' + i4J[A4J].color + ';"' : '') + '></div>';
                     }
                     O4J += '</div></div>';
                 }
                 return {
                     marked: i4J,
                     selected: false,
                     cssClass: i4J ? 'mbsc-cal-day-marked' : '',
                     ariaLabel: Z0J ? N4J : '',
                     markup: Z0J && N4J ? '<div class="mbsc-cal-day-txt-c"><div class="mbsc-cal-day-txt" title="' + K0J('<div>' + N4J + '</div>').text() + '"' + (G4J ? ' style="background:' + G4J + ';color:' + Q4J + ';text-shadow:none;"' : '') + '>' + W4J + N4J + '</div></div>' : Z0J && W4J ? '<div class="mbsc-cal-day-ic-c">' + W4J + '</div>' : i4J ? O4J : ''
                 };
             };
             y0J.addEvent = function(X4J) {
                 var g4J = [];
                 X4J = p0J(true, [], K0J.isArray(X4J) ? X4J : [X4J]);
                 K0J.each(X4J, function(L5J, Y5J) {
                     if (Y5J._id === s0J) {
                         Y5J._id = d0J++;
                     }
                     t0J.push(Y5J);
                     g4J.push(Y5J._id);
                 });
                 c0J();
                 return g4J;
             };
             y0J.removeEvent = function(n5J) {
                 n5J = K0J.isArray(n5J) ? n5J : [n5J];
                 K0J.each(n5J, function(k5J, o5J) {
                     K0J.each(t0J, function(F5J, x5J) {
                         if (x5J._id === o5J) {
                             t0J.splice(F5J, 1);
                             return false;
                         }
                     });
                 });
                 c0J();
             };
             y0J.getEvents = function(U5J) {
                 var K5J;
                 if (U5J) {
                     U5J.setHours(0, 0, 0, 0);
                     K5J = y0J.prepareObj(t0J, U5J.getFullYear(), U5J.getMonth());
                     return K5J[U5J] ? w0J(K5J[U5J]) : [];
                 }
                 return p0J(true, [], t0J);
             };
             y0J.setEvents = function(D5J) {
                 var p5J = [];
                 t0J = p0J(true, [], D5J);
                 K0J.each(t0J, function(r5J, M5J) {
                     if (M5J._id === s0J) {
                         M5J._id = d0J++;
                     }
                     p5J.push(M5J._id);
                 });
                 c0J();
                 return p5J;
             };
             p0J(H0J, {
                 highlight: false,
                 outerMonthChange: false,
                 headerText: false,
                 buttons: J0J.display !== 'inline' ? ['cancel'] : J0J.buttons,
                 onMarkupReady: function(s5J) {
                     A0J.onMarkupReady.call(this, s5J);
                     I0J = K0J(s5J.target);
                     if (Z0J) {
                         K0J('.mbsc-cal', I0J).addClass('mbsc-cal-ev');
                     }
                     I0J.addClass('mbsc-cal-em');
                     v0J = K0J('<div class="mbsc-cal-events ' + (J0J.eventBubbleClass || '') + '"><div class="mbsc-cal-events-arr"></div><div class="mbsc-cal-events-i"><div class="mbsc-cal-events-sc"></div></div></div>').appendTo(K0J('.mbsc-cal-c', I0J));
                     h0J = K0J('.mbsc-cal-events-i', v0J);
                     P0J = K0J('.mbsc-cal-events-sc', v0J);
                     V0J = new D0J.classes.ScrollView(h0J[0]);
                     z0J = false;
                     y0J.tap(h0J, function() {
                         if (!V0J.scrolled) {
                             S0J();
                         }
                     });
                 },
                 onMonthChange: function() {
                     S0J();
                 },
                 onSelectShow: function() {
                     S0J();
                 },
                 onMonthLoaded: function() {
                     if (f0J) {
                         N0J(f0J.d, K0J('.mbsc-cal-day-v[data-full="' + f0J.full + '"]:not(.mbsc-cal-day-diff)', I0J));
                         f0J = false;
                     }
                 },
                 onDayChange: function(B5J) {
                     var u5J = B5J.date,
                         q5J = T0J(u5J),
                         a5J = K0J(B5J.target);
                     S0J();
                     if (!a5J.hasClass('mbsc-cal-day-ev')) {
                         setTimeout(function() {
                             if (y0J.changing) {
                                 f0J = {
                                     d: q5J,
                                     full: a5J.attr('data-full')
                                 };
                             } else {
                                 N0J(q5J, a5J);
                             }
                         }, 10);
                     }
                     return false;
                 },
                 onCalResize: function() {
                     if (z0J) {
                         E0J(e0J);
                     }
                 }
             });
             return H0J;
         };
     }(window, document));
     (function(y5J) {
         var J5J = mobiscroll,
             j5J = J5J.$,
             e5J = J5J.util,
             Z5J = function() {},
             v5J = J5J.classes;
         function I5J(H5J) {
             var z5J = [Math.round(H5J.r).toString(16), Math.round(H5J.g).toString(16), Math.round(H5J.b).toString(16)];
             j5J.each(z5J, function(P5J, c5J) {
                 if (c5J.length == 1) {
                     z5J[P5J] = '0' + c5J;
                 }
             });
             return '#' + z5J.join('');
         }
         function t5J(R5J) {
             R5J = parseInt(R5J.indexOf('#') > -1 ? R5J.substring(1) : R5J, 16);
             return {
                 r: R5J >> 16,
                 g: (R5J & 0x00FF00) >> 8,
                 b: R5J & 0x0000FF,
                 toString: function() {
                     return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
                 }
             };
         }
         function V5J(G5J) {
             var i5J, A5J, N5J, E5J = G5J.h,
                 T5J = G5J.s * 255 / 100,
                 O5J = G5J.v * 255 / 100;
             if (T5J === 0) {
                 i5J = A5J = N5J = O5J;
             } else {
                 var w5J = O5J,
                     m5J = (255 - T5J) * O5J / 255,
                     W5J = (w5J - m5J) * (E5J % 60) / 60;
                 if (E5J == 360) {
                     E5J = 0;
                 }
                 if (E5J < 60) {
                     i5J = w5J;
                     N5J = m5J;
                     A5J = m5J + W5J;
                 } else if (E5J < 120) {
                     A5J = w5J;
                     N5J = m5J;
                     i5J = w5J - W5J;
                 } else if (E5J < 180) {
                     A5J = w5J;
                     i5J = m5J;
                     N5J = m5J + W5J;
                 } else if (E5J < 240) {
                     N5J = w5J;
                     i5J = m5J;
                     A5J = w5J - W5J;
                 } else if (E5J < 300) {
                     N5J = w5J;
                     A5J = m5J;
                     i5J = m5J + W5J;
                 } else if (E5J < 360) {
                     i5J = w5J;
                     A5J = m5J;
                     N5J = w5J - W5J;
                 } else {
                     i5J = A5J = N5J = 0;
                 }
             }
             return {
                 r: i5J,
                 g: A5J,
                 b: N5J,
                 toString: function() {
                     return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
                 }
             };
         }
         function f5J(Q5J) {
             var X5J = 0,
                 L6J, n6J, o6J = Math.min(Q5J.r, Q5J.g, Q5J.b),
                 g5J = Math.max(Q5J.r, Q5J.g, Q5J.b),
                 Y6J = g5J - o6J;
             n6J = g5J;
             L6J = g5J ? 255 * Y6J / g5J : 0;
             if (L6J) {
                 if (Q5J.r == g5J) {
                     X5J = (Q5J.g - Q5J.b) / Y6J;
                 } else if (Q5J.g == g5J) {
                     X5J = 2 + (Q5J.b - Q5J.r) / Y6J;
                 } else {
                     X5J = 4 + (Q5J.r - Q5J.g) / Y6J;
                 }
             } else {
                 X5J = -1;
             }
             X5J *= 60;
             if (X5J < 0) {
                 X5J += 360;
             }
             L6J *= 100 / 255;
             n6J *= 100 / 255;
             return {
                 h: X5J,
                 s: L6J,
                 v: n6J,
                 toString: function() {
                     return 'hsv(' + Math.round(this.h) + ',' + Math.round(this.s) + '%,' + Math.round(this.v) + '%)';
                 }
             };
         }
         function S5J(r6J) {
             var K6J = r6J.r / 255,
                 F6J = r6J.g / 255,
                 x6J = r6J.b / 255,
                 k6J = Math.max(K6J, F6J, x6J),
                 D6J = Math.min(K6J, F6J, x6J),
                 M6J = (k6J + D6J) / 2,
                 p6J, s6J;
             if (k6J == D6J) {
                 p6J = s6J = 0;
             } else {
                 var U6J = k6J - D6J;
                 s6J = M6J > 0.5 ? U6J / (2 - k6J - D6J) : U6J / (k6J + D6J);
                 switch (k6J) {
                     case K6J:
                         p6J = (F6J - x6J) / U6J + (F6J < x6J ? 6 : 0);
                         break;
                     case F6J:
                         p6J = (x6J - K6J) / U6J + 2;
                         break;
                     case x6J:
                         p6J = (K6J - F6J) / U6J + 4;
                         break;
                 }
                 p6J /= 6;
             }
             return {
                 h: Math.round(p6J * 360),
                 s: Math.round(s6J * 100),
                 l: Math.round(M6J * 100),
                 toString: function() {
                     return 'hsl(' + this.h + ',' + this.s + '%,' + this.l + '%)';
                 }
             };
         }
         function C5J(e6J) {
             var u6J, j6J, y6J, t6J, q6J, J6J, a6J = e6J.h,
                 v6J = e6J.s,
                 B6J = e6J.l;
             if (!isFinite(a6J)) {
                 a6J = 0;
             }
             if (!isFinite(v6J)) {
                 v6J = 0;
             }
             if (!isFinite(B6J)) {
                 B6J = 0;
             }
             a6J /= 60;
             if (a6J < 0) {
                 a6J = 6 - -a6J % 6;
             }
             a6J %= 6;
             v6J = Math.max(0, Math.min(1, v6J / 100));
             B6J = Math.max(0, Math.min(1, B6J / 100));
             q6J = (1 - Math.abs(2 * B6J - 1)) * v6J;
             J6J = q6J * (1 - Math.abs(a6J % 2 - 1));
             if (a6J < 1) {
                 u6J = q6J;
                 j6J = J6J;
                 y6J = 0;
             } else if (a6J < 2) {
                 u6J = J6J;
                 j6J = q6J;
                 y6J = 0;
             } else if (a6J < 3) {
                 u6J = 0;
                 j6J = q6J;
                 y6J = J6J;
             } else if (a6J < 4) {
                 u6J = 0;
                 j6J = J6J;
                 y6J = q6J;
             } else if (a6J < 5) {
                 u6J = J6J;
                 j6J = 0;
                 y6J = q6J;
             } else {
                 u6J = q6J;
                 j6J = 0;
                 y6J = J6J;
             }
             t6J = B6J - q6J / 2;
             return {
                 r: Math.round((u6J + t6J) * 255),
                 g: Math.round((j6J + t6J) * 255),
                 b: Math.round((y6J + t6J) * 255),
                 toString: function() {
                     return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
                 }
             };
         }
         function l5J(I6J) {
             return S5J(t5J(I6J));
         }
         function h5J(Z6J) {
             return I5J(C5J(Z6J));
         }
         function d5J(b6J) {
             return I5J(V5J(b6J));
         }
         function b5J(V6J) {
             return f5J(t5J(V6J));
         }
         v5J.Color = function(g6J, u2J, Z2J) {
             var d6J, B2J, S6J, e2J, r2J, O6J, G6J, W6J, E6J, T6J, t2J, i6J, z6J, p2J, N6J, M2J, L2J, l6J, Q6J, P6J, K2J, U2J, m6J, A6J, H6J, R6J, Y2J, f6J = this,
                 w6J = j5J(g6J),
                 h6J = 0,
                 c6J = {},
                 C6J = {};
             function k2J(V2J, b2J, S2J, d2J, f2J) {
                 if (!f2J) {
                     f6J._value = f6J._hasValue ? f6J._tempValue.slice(0) : null;
                 }
                 if (V2J) {
                     if (f6J._isInput) {
                         w6J.val(f6J._hasValue ? f6J._tempValue : '');
                     }
                     r2J('onFill', {
                         valueText: f6J._hasValue ? f6J._tempValue : '',
                         change: b2J
                     });
                     if (b2J) {
                         c6J = j5J.extend(true, {}, C6J);
                         f6J._preventChange = true;
                         w6J.trigger('change');
                         a2J(f6J._value);
                     }
                 }
             }
             function s2J(h2J, l2J) {
                 l2J = l2J !== y5J ? l2J : F2J(h2J);
                 return '<div class="mbsc-color-input-item" data-color="' + (l2J !== y5J ? l2J : h2J) + '" style="background: ' + h2J + ';">' + (P6J ? '' : '<div class="mbsc-color-input-item-close mbsc-ic mbsc-ic-material-close"></div>') + '</div>';
             }
             function v2J(C2J) {
                 p2J.css('background', e5J.prefix + 'linear-gradient(left, ' + (d6J.rtl ? '#000000' : '#FFFFFF') + ' 0%, ' + C2J + ' 50%, ' + (d6J.rtl ? '#FFFFFF' : '#000000') + ' 100%)');
             }
             function F2J(H2J) {
                 if (Object.keys(C6J).length) {
                     return H2J;
                 }
                 for (var z2J in S6J) {
                     if (H2J == S6J[z2J].color || H2J == S6J[z2J].changedColor) {
                         return z2J;
                     }
                 }
             }
             function J2J() {
                 if (Q6J) {
                     var c2J, P2J = '';
                     m6J.empty();
                     if (f6J._value) {
                         if (P6J) {
                             P2J += s2J(f6J._value, l6J);
                         } else {
                             for (c2J = 0; c2J < f6J._value.length; ++c2J) {
                                 P2J += s2J(f6J._value[c2J], Object.keys(C6J).length ? C6J[c2J].colorIndex : F2J(f6J._value[c2J]));
                             }
                         }
                         m6J.append(P2J);
                         f6J.tap(j5J('.mbsc-color-input-item', m6J), function(R2J) {
                             if (j5J(R2J.target).hasClass('mbsc-color-input-item-close')) {
                                 var m2J = j5J(this).index();
                                 R2J.stopPropagation();
                                 R2J.preventDefault();
                                 if (l6J === y5J) {
                                     l6J = j5J(R2J.target).parent().attr('data-color');
                                 }
                                 if (z6J) {
                                     h6J = S6J[l6J].previewInd;
                                     H6J.eq(h6J).parent().removeClass('mbsc-color-active');
                                     c6J[m2J] = {};
                                     C6J[m2J] = {};
                                 }
                                 if (h6J) {
                                     H6J.eq(h6J).parent().addClass('mbsc-color-active');
                                 }
                                 f6J._value.splice(m2J, 1);
                                 f6J.setVal(f6J._value, true, true);
                             } else if (N6J && d6J.display !== 'inline') {
                                 t2J = true;
                                 l6J = j5J(R2J.target).attr('data-color');
                                 if (isNaN(l6J)) {
                                     l6J = F2J(l6J);
                                 }
                                 if (l6J) {
                                     S6J[l6J].selected = true;
                                     h6J = S6J[l6J].previewInd;
                                     setTimeout(function() {
                                         O6J.scroll(A6J.eq(l6J), 400);
                                         if (z6J) {
                                             G6J.scroll(H6J.eq(h6J), 400);
                                         }
                                     }, 200);
                                 }
                             }
                         });
                     }
                 }
             }
             function X6J(E2J, A2J) {
                 var i2J, w2J = E2J.match(/\d+/gmi);
                 switch (true) {
                     case E2J.indexOf('rgb') > -1:
                         i2J = I5J({
                             r: w2J[0],
                             g: w2J[1],
                             b: w2J[2]
                         });
                         break;
                     case E2J.indexOf('hsl') > -1:
                         i2J = h5J({
                             h: w2J[0],
                             s: w2J[1],
                             l: w2J[2]
                         });
                         break;
                     case E2J.indexOf('hsv') > -1:
                         i2J = d5J({
                             h: w2J[0],
                             s: w2J[1],
                             v: w2J[2]
                         });
                         break;
                     case E2J.indexOf('#') > -1:
                         i2J = E2J;
                         break;
                 }
                 return j2J(i2J, A2J || d6J.format);
             }
             function j2J(N2J, W2J) {
                 switch (W2J) {
                     case 'rgb':
                         return t5J(N2J);
                     case 'hsl':
                         return l5J(N2J);
                     case 'hsv':
                         return b5J(N2J);
                     default:
                         return N2J;
                 }
             }
             function y2J() {
                 var O2J;
                 for (O2J = 0; O2J < d6J.select; ++O2J) {
                     if (C6J[O2J].colorIndex === y5J) {
                         return O2J;
                     }
                 }
             }
             function x2J(T2J, G2J) {
                 j5J('.mbsc-color-active', G2J).removeClass('mbsc-color-active');
                 if (N6J) {
                     T2J.parent().addClass('mbsc-color-active');
                     if (z6J && T2J) {
                         if (h6J !== y5J) {
                             H6J.eq(h6J).parent().addClass('mbsc-color-active');
                         }
                     }
                 }
             }
             function a2J(g2J, F3J) {
                 var Q2J, Y3J, X2J = [],
                     o3J = 0,
                     L3J = j5J.map(S6J, function(x3J) {
                         return x3J.changedColor || x3J.color;
                     });
                 if (P6J) {
                     g2J = j5J.isArray(g2J) ? g2J[0] : g2J;
                     Y3J = L3J.indexOf(g2J);
                     if (Y3J > -1) {
                         X2J.push(Y3J);
                     }
                     if (g2J && !X2J.length) {
                         var n3J = +j5J('.mbsc-color-input-item', m6J).attr('data-color');
                         if (!isNaN(n3J)) {
                             X2J.push(n3J);
                         }
                         l6J = n3J;
                     }
                 } else if (g2J) {
                     if (z6J && N6J) {
                         for (var k3J in c6J) {
                             if (c6J[k3J].colorIndex !== y5J) {
                                 X2J.push(+c6J[k3J].colorIndex);
                             }
                         }
                     } else {
                         for (Q2J = 0; Q2J < g2J.length; ++Q2J) {
                             Y3J = L3J.indexOf(g2J[Q2J]);
                             if (Y3J > -1) {
                                 X2J.push(Y3J);
                                 L3J[Y3J] = 'temp' + Q2J;
                             }
                         }
                     }
                 }
                 for (Q2J = 0; Q2J < X2J.length; ++Q2J) {
                     n2J(true, X2J[Q2J], o3J++, S6J[X2J[Q2J]].changedColor || S6J[X2J[Q2J]].color, true);
                 }
                 for (Q2J = 0; Q2J < S6J.length; ++Q2J) {
                     if (X2J.indexOf(Q2J) == -1) {
                         n2J(false, Q2J, y5J, S6J[Q2J].changedColor || S6J[Q2J].color, false);
                     }
                 }
                 if (z6J) {
                     for (Q2J = o3J; Q2J < d6J.select; ++Q2J) {
                         C6J[Q2J] = {};
                         if (H6J) {
                             H6J.eq(Q2J).addClass('mbsc-color-preview-item-empty').css({
                                 background: 'transparent'
                             });
                         }
                     }
                 }
                 c6J = j5J.extend(true, {}, C6J);
                 if (F3J !== false) {
                     J2J();
                 }
             }
             function n2J(U3J, p3J, K3J, D3J, M3J, r3J) {
                 if (z6J && M3J) {
                     C6J[K3J].colorIndex = U3J ? p3J : y5J;
                     C6J[K3J].color = U3J ? D3J : y5J;
                     if (H6J) {
                         H6J.eq(K3J).toggleClass('mbsc-color-preview-item-empty').css({
                             background: U3J ? D3J : 'transparent'
                         });
                         if (!U3J) {
                             H6J.eq(K3J).parent().removeClass('mbsc-color-active');
                         }
                     }
                 }
                 if (r3J) {
                     if (U3J) {
                         f6J._tempValue.splice(K3J, 0, D3J);
                     } else {
                         f6J._tempValue.splice(f6J._tempValue.indexOf(D3J), 1);
                     }
                 }
                 if (A6J) {
                     if (U3J) {
                         A6J.eq(p3J).addClass('mbsc-color-selected');
                     } else {
                         A6J.eq(p3J).removeClass('mbsc-color-selected').parent().removeClass('mbsc-color-active');
                     }
                 }
                 S6J[p3J].previewInd = U3J ? K3J : y5J;
                 S6J[p3J].selected = U3J;
             }
             function o2J(s3J, a3J) {
                 if (s3J !== y5J && (P6J || S6J[s3J].selected)) {
                     l6J = s3J;
                     E6J = S6J[s3J].changedColor || S6J[s3J].color;
                     R6J = A6J.eq(s3J);
                     if (N6J) {
                         x2J(A6J.eq(s3J), a3J || '');
                         T6J = X6J(S6J[s3J].color, 'hsl');
                         T6J.l = X6J(E6J, 'hsl').l;
                         v2J(S6J[s3J].color);
                         L2J.setVal(100 - T6J.l, false, false);
                     }
                 }
             }
             function I2J() {
                 var q3J, B3J = [];
                 for (q3J = 0; q3J < S6J.length; ++q3J) {
                     if (S6J[q3J].selected) {
                         B3J.push(S6J[q3J]);
                     }
                 }
                 return B3J;
             }
             function D2J(j3J, y3J) {
                 var u3J = j5J(j3J.target).index();
                 l6J = C6J[u3J].colorIndex;
                 R6J = A6J.eq(l6J);
                 h6J = u3J;
                 o2J(l6J, y3J);
                 O6J.scroll(R6J, 250);
             }
             function q2J(e3J, J3J) {
                 var v3J = false,
                     t3J = j5J('.mbsc-color-selected', J3J);
                 R6J = j5J(e3J.target);
                 if (R6J.hasClass('mbsc-color-clear-item')) {
                     E6J = '';
                     f6J.clear();
                 }
                 if ((P6J || K2J > +t3J.length || R6J.hasClass('mbsc-color-selected')) && mobiscroll.oCgcI) {
                     l6J = R6J.attr('data-index');
                     if (z6J) {
                         h6J = S6J[l6J].previewInd !== y5J ? S6J[l6J].previewInd : y2J();
                         v3J = N6J && R6J.hasClass('mbsc-color-selected') && !R6J.parent().hasClass('mbsc-color-active');
                         if (H6J.length > 6) {
                             G6J.scroll(H6J.eq(h6J));
                         }
                     }
                     E6J = S6J[l6J].changedColor || S6J[l6J].color;
                     if (P6J) {
                         t3J.removeClass('mbsc-color-selected');
                         f6J._tempValue = E6J;
                         if (E6J) {
                             R6J.toggleClass('mbsc-color-selected');
                         }
                         x2J(R6J, J3J);
                     } else {
                         x2J(R6J, J3J);
                         if (!v3J) {
                             n2J(!S6J[l6J].selected, l6J, h6J, E6J, true, true);
                         }
                     }
                     o2J(l6J, J3J);
                     if (f6J.live) {
                         f6J._fillValue();
                     }
                 }
             }
             v5J.Frame.call(this, g6J, u2J, true);
             f6J.setVal = f6J._setVal = function(I3J, Z3J, b3J, V3J) {
                 f6J._hasValue = I3J !== null && I3J !== y5J;
                 f6J._tempValue = j5J.isArray(I3J) ? I3J : [I3J];
                 k2J(Z3J, true, b3J === y5J ? Z3J : b3J, V3J);
             };
             f6J.getVal = f6J._getVal = function(f3J) {
                 return f6J._hasValue || f3J ? U2J ? I2J() : f6J[f3J ? '_tempValue' : '_value'] : null;
             };
             f6J._readValue = function() {
                 var S3J = w6J.val() || '';
                 f6J._hasValue = false;
                 if (S3J.length !== 0 && S3J !== '') {
                     f6J._hasValue = true;
                 }
                 if (f6J._hasValue) {
                     f6J._tempValue = P6J ? S3J : d6J.format == 'hex' ? S3J.split(',') : S3J.match(/[a-z]{3}\((\d+\.?\d{0,}?),\s*([\d.]+)%{0,},\s*([\d.]+)%{0,}\)/gmi);
                     k2J(true);
                 } else {
                     f6J._tempValue = [];
                 }
                 if (f6J._hasValue) {
                     a2J(f6J._tempValue, false);
                 }
             };
             f6J._fillValue = function() {
                 f6J._hasValue = true;
                 k2J(true, true, 0, true);
             };
             f6J._generateContent = function() {
                 var d3J, l3J, z3J, h3J = W6J ? 1 : 0;
                 M2J = i6J ? Math.ceil((S6J.length + h3J) / d6J.rows) : d6J.rows;
                 l3J = '<div class="mbsc-color-scroll-cont mbsc-w-p ' + (i6J ? '' : 'mbsc-color-vertical') + '"><div class="mbsc-color-cont">' + (i6J ? '<div class="mbsc-color-row">' : '');
                 for (d3J = 0; d3J < S6J.length; ++d3J) {
                     z3J = S6J[d3J].changedColor || S6J[d3J].color;
                     if (W6J && d3J === 0) {
                         l3J += '<div class="mbsc-color-item-c"><div tabindex="0" class="mbsc-color-clear-item mbsc-btn-e mbsc-color-selected"><div class="mbsc-color-clear-cross"></div></div></div>';
                     }
                     if (d3J !== 0 && (d3J + h3J) % M2J === 0) {
                         l3J += i6J ? '</div><div class="mbsc-color-row">' : '';
                     }
                     l3J += '<div class="mbsc-color-item-c"><div tabindex="0" data-index="' + d3J + '" class="mbsc-color-item mbsc-btn-e mbsc-ic mbsc-ic-material-check mbsc-color-btn-e ' + (S6J[d3J].selected ? 'mbsc-color-selected' : '') + '"  style="background:' + z3J + '"></div></div>';
                 }
                 l3J += '</div></div>' + (i6J ? '</div>' : '');
                 if (N6J) {
                     l3J += '<div class="mbsc-color-slider-cont"><input class="mbsc-color-slider" type="range" data-highlight="false" value="50" min="0" max="100"/></div>';
                 }
                 if (z6J) {
                     l3J += '<div class="mbsc-color-preview-cont"><div class="mbsc-color-refine-preview">';
                     for (var C3J in c6J) {
                         l3J += '<div class="mbsc-color-preview-item-c mbsc-btn-e mbsc-color-btn-e" tabindex="0"><div class="mbsc-color-preview-item ' + (c6J[C3J].color ? '' : 'mbsc-color-preview-item-empty') + '" style="background: ' + (c6J[C3J].color || 'initial') + ';"></div></div>';
                     }
                     l3J += '</div></div>';
                 }
                 return l3J;
             };
             f6J._position = function(P3J) {
                 var H3J, c3J;
                 if (!i6J) {
                     H3J = P3J.find('.mbsc-color-cont');
                     c3J = Math.ceil(H3J.find('.mbsc-color-item-c')[0].offsetWidth);
                     H3J.width(Math.min(Math.floor(P3J.find('.mbsc-fr-c').width() / c3J), Math.round(S6J.length / d6J.rows)) * c3J);
                 }
                 if (O6J) {
                     O6J.refresh();
                 }
                 if (G6J) {
                     G6J.refresh();
                 }
             };
             f6J._markupInserted = function(R3J) {
                 if (!i6J) {
                     R3J.find('.mbsc-color-scroll-cont').css('max-height', R3J.find('.mbsc-color-item-c')[0].offsetHeight * d6J.rows);
                 }
                 O6J = new v5J.ScrollView(R3J.find('.mbsc-color-scroll-cont')[0], {
                     axis: i6J ? 'X' : 'Y',
                     rtl: d6J.rtl,
                     elastic: 60,
                     stopProp: false,
                     mousewheel: d6J.mousewheel,
                     onBtnTap: function(m3J) {
                         q2J(m3J, R3J);
                     }
                 });
             };
             f6J._attachEvents = function(w3J) {
                 var E3J;
                 A6J = j5J('.mbsc-color-item', w3J);
                 w3J.on('keydown', '.mbsc-color-btn-e', function(i3J) {
                     i3J.stopPropagation();
                     if (i3J.keyCode == 32) {
                         if (i3J.target.classList.contains('mbsc-color-item')) {
                             q2J(i3J, w3J);
                         } else {
                             D2J(i3J, w3J);
                         }
                     }
                 });
                 if (z6J) {
                     H6J = j5J('.mbsc-color-preview-item', w3J);
                 }
                 if (N6J) {
                     w3J.addClass('mbsc-color-refine');
                     Y2J = j5J('.mbsc-color-slider', w3J);
                     L2J = mobiscroll.slider(Y2J, {
                         theme: d6J.theme,
                         rtl: d6J.rtl
                     });
                     p2J = w3J.find('.mbsc-progress-track');
                     if (l6J) {
                         o2J(l6J, w3J);
                     }
                     Y2J.on('change', function() {
                         if (l6J !== y5J && (P6J || S6J[l6J].selected)) {
                             T6J.l = 100 - this.value;
                             E3J = X6J(T6J.toString()).toString();
                             if (P6J) {
                                 f6J._tempValue = E3J;
                             } else {
                                 f6J._tempValue[h6J !== y5J ? h6J : f6J._tempValue.length] = E3J;
                             }
                             S6J[l6J].changedColor = E3J;
                             A6J.eq(l6J).css('background', E3J);
                             if (z6J) {
                                 C6J[h6J].color = E3J;
                                 H6J.eq(h6J).removeClass('mbsc-color-preview-item-empty').css({
                                     'background': E3J
                                 });
                             }
                             if (f6J.live) {
                                 e5J.throttle(f6J._fillValue());
                             }
                         }
                     });
                 }
                 if (z6J) {
                     G6J = new v5J.ScrollView(w3J.find('.mbsc-color-preview-cont')[0], {
                         axis: 'X',
                         rtl: d6J.rtl,
                         mousewheel: d6J.mousewheel,
                         onBtnTap: function(A3J) {
                             D2J(A3J, w3J);
                         }
                     });
                 }
             };
             f6J.__processSettings = function() {
                 var N3J, W3J;
                 d6J = f6J.settings;
                 d6J.headerText = d6J.display != 'inline' ? (d6J.headerText || '').replace('{value}', '') : '';
                 d6J.cssClass = (d6J.cssClass || '') + ' mbsc-color';
                 e2J = d6J.format;
                 r2J = f6J.trigger;
                 i6J = d6J.navigation == 'horizontal';
                 f6J._value = [];
                 f6J._tempValue = [];
                 P6J = d6J.select == 'single';
                 W6J = d6J.clear !== y5J ? d6J.clear : P6J;
                 W3J = d6J.data || [];
                 if (!W3J.length) {
                     switch (d6J.format) {
                         case 'rgb':
                             W3J = ["rgb(255,235,60)", "rgb(255,153,0)", "rgb(244,68,55)", "rgb(234,30,99)", "rgb(156,38,176)", "rgb(104,58,183)", "rgb(63,81,181)", "rgb(33,150,243)", "rgb(0,151,136)", "rgb(75,175,79)", "rgb(126,93,78)", "rgb(158,158,158)"];
                             if (W6J) {
                                 W3J.splice(10, 0, 'rgb(83, 71, 65)');
                             }
                             break;
                         case 'hsl':
                             W3J = ["hsl(54,100%,62%)", "hsl(36,100%,50%)", "hsl(4,90%,59%)", "hsl(340,83%,52%)", "hsl(291,64%,42%)", "hsl(262,52%,47%)", "hsl(231,48%,48%)", "hsl(207,90%,54%)", "hsl(174,100%,30%)", "hsl(122,40%,49%)", "hsl(19,24%,40%)", "hsl(0,0%,62%)"];
                             if (W6J) {
                                 W3J.splice(10, 0, 'hsl(20, 12%, 29%)');
                             }
                             break;
                         default:
                             W3J = ['#ffeb3c', '#ff9900', '#f44437', '#ea1e63', '#9c26b0', '#683ab7', '#3f51b5', '#2196f3', '#009788', '#4baf4f', '#7e5d4e', '#9e9e9e'];
                             if (W6J) {
                                 W3J.splice(10, 0, '#534741');
                             }
                     }
                 }
                 N6J = d6J.mode == 'refine';
                 z6J = !isNaN(d6J.select);
                 K2J = isNaN(d6J.select) ? P6J ? 2 : W3J.length : d6J.select;
                 U2J = j5J.isPlainObject(W3J[0]);
                 if (z6J && !Object.keys(c6J).length) {
                     for (N3J = 0; N3J < d6J.select; ++N3J) {
                         c6J[N3J] = {};
                         C6J[N3J] = {};
                     }
                 }
                 if (!S6J) {
                     S6J = W3J.slice(0);
                     for (N3J = 0; N3J < S6J.length; ++N3J) {
                         if (!j5J.isPlainObject(W3J[N3J])) {
                             W3J[N3J] = W3J[N3J].toLowerCase();
                             S6J[N3J] = {
                                 key: N3J,
                                 name: W3J[N3J],
                                 color: W3J[N3J]
                             };
                         } else {
                             S6J[N3J].color = W3J[N3J].color;
                         }
                     }
                 }
                 B2J = d6J.defaultValue || S6J[0].color;
                 E6J = B2J;
                 T6J = X6J(E6J, 'hsl');
                 Q6J = d6J.enhance && w6J.is('input');
                 if (Q6J) {
                     if (w6J.hasClass('mbsc-color-input-hdn')) {
                         m6J = w6J.prev();
                     } else {
                         m6J = j5J('<div ' + (g6J.placeholder ? 'data-placeholder="' + g6J.placeholder + '"' : '') + ' class="mbsc-control mbsc-color-input mbsc-control-ev ' + (d6J.inputClass || '') + '" readonly ></div>');
                         m6J.insertBefore(w6J);
                         w6J.addClass('mbsc-color-input-hdn').attr('tabindex', -1);
                     }
                     d6J.anchor = m6J;
                     f6J.attachShow(m6J);
                 }
             };
             f6J._onDetachEvents = function() {
                 L2J.destroy();
                 O6J.destroy();
                 G6J.destroy();
                 if (Q6J) {
                     w6J.removeClass('mbsc-color-input-hdn');
                     m6J.remove();
                 }
             };
             if (!Z2J) {
                 f6J.init(u2J);
             }
         };
         v5J.Color.prototype = {
             _hasDef: true,
             _hasTheme: true,
             _hasLang: true,
             _class: 'color',
             _defaults: j5J.extend({}, v5J.Frame.prototype._defaults, {
                 validate: Z5J,
                 parseValue: Z5J,
                 enhance: true,
                 rows: 2,
                 select: 'single',
                 format: 'hex',
                 navigation: 'horizontal'
             })
         };
         J5J.themes.color = J5J.themes.frame;
         J5J.presetShort('color', 'Color', false);
         e5J.color = {
             hsv2hex: d5J,
             hsv2rgb: V5J,
             rgb2hsv: f5J,
             rgb2hex: I5J,
             rgb2hsl: S5J,
             hex2rgb: t5J,
             hex2hsv: b5J,
             hex2hsl: l5J
         };
     }());
     
   (function(g1Y, y1Y, t1Y) {
	var N1Y, b1Y = mobiscroll,
		k1Y = b1Y.$,
		L1Y = k1Y.extend,
		M1Y = b1Y.classes,
		I1Y = b1Y.util,
		c1Y = I1Y.prefix,
		G1Y = I1Y.jsPrefix,
		U1Y = I1Y.getCoord,
		P1Y = I1Y.testTouch,
		o1Y = I1Y.vibrate,
		A1Y = 1,
		J1Y = function() {},
		v1Y = g1Y.requestAnimationFrame || function(l1Y) {
			l1Y();
		},
		W1Y = g1Y.cancelAnimationFrame || J1Y,
		e1Y = 'webkitAnimationEnd animationend',
		u1Y = 'transparent';
	M1Y.ListView = function(s2Y, h8Y) {
		var h0Y, B0Y, P0Y, z1Y, U2Y, q8Y, Z8Y, R1Y, Y0Y, x0Y, K2Y, h2Y, w8Y, C1Y, y0Y, U8Y, m0Y, S8Y, d1Y, b0Y, S0Y, n0Y, M0Y, D8Y, f2Y, a2Y, B2Y, F1Y, R0Y, d0Y, K0Y, b2Y, P8Y, Z0Y, C2Y, z2Y, G0Y, g2Y, Q2Y, c8Y, I8Y, t2Y, i2Y, H0Y, D0Y, H1Y, W0Y, m1Y, E1Y, X1Y, m2Y, u8Y, Y2Y, x2Y, k2Y, s1Y, k0Y, N0Y, u2Y, v2Y, D2Y, S2Y, k8Y, H2Y, j0Y, B1Y, U0Y, t0Y, w2Y, J8Y, n2Y, i1Y, u0Y, c0Y, W2Y, l2Y, X0Y, t8Y, y8Y, G2Y, a0Y, w0Y, V0Y, y2Y, j8Y, M2Y, z0Y, C0Y, f1Y, L0Y, N2Y, s0Y, r1Y, o0Y, f0Y, R2Y, T1Y = this,
			p1Y = s2Y,
			O1Y = k1Y(p1Y),
			q0Y = 0,
			J0Y = 0,
			a1Y = 0,
			r0Y = {},
			j2Y = {},
			Q0Y = {};
		function G8Y() {
			w2Y = false;
			D2Y = false;
			z1Y = 0;
			t8Y = 0;
			y8Y = new Date();
			W0Y = x0Y.width();
			w8Y = O0Y(x0Y);
			X1Y = w8Y.index(m1Y);
			E1Y = m1Y[0].offsetHeight;
			a1Y = m1Y[0].offsetTop;
			f1Y = L0Y[m1Y.attr('data-type') || 'defaults'];
			X0Y = f1Y.stages;
		}
		function o8Y(v8Y) {
			var W8Y;
			if (v8Y.type === 'touchstart') {
				S2Y = true;
				clearTimeout(k8Y);
			}
			if (P1Y(v8Y, this) && !h0Y && !q0Y && !N1Y && !Z2Y && mobiscroll.oCgcI) {
				h0Y = true;
				U2Y = true;
				G2Y = U1Y(v8Y, 'X');
				a0Y = U1Y(v8Y, 'Y');
				d1Y = 0;
				b0Y = 0;
				m1Y = k1Y(this);
				W8Y = m1Y;
				G8Y();
				M2Y = i1Y.onItemTap || f1Y.tap || m1Y.hasClass('mbsc-lv-parent') || m1Y.hasClass('mbsc-lv-back');
				u8Y = O1Y.offset().top;
				m2Y = m1Y.offset().top;
				if (M2Y) {
					P0Y = setTimeout(function() {
						W8Y.addClass('mbsc-lv-item-active');
						F1Y('onItemActivate', {
							target: W8Y[0],
							domEvent: v8Y
						});
					}, 120);
				}
				if (T1Y.sortable && !m1Y.hasClass('mbsc-lv-back')) {
					if (!T1Y.sortable.group) {
						u2Y = m1Y.nextUntil('.mbsc-lv-gr-title').filter('.mbsc-lv-item');
						H2Y = m1Y.prevUntil('.mbsc-lv-gr-title').filter('.mbsc-lv-item');
					}
					x2Y = (!T1Y.sortable.group ? H2Y.length ? H2Y.eq(-1) : m1Y : x0Y.children('li').eq(0))[0].offsetTop - a1Y;
					Y2Y = (!T1Y.sortable.group ? u2Y.length ? u2Y.eq(-1) : m1Y : x0Y.children('li').eq(-1))[0].offsetTop - a1Y;
					if (T1Y.sortable.handle) {
						if (k1Y(v8Y.target).hasClass('mbsc-lv-handle')) {
							clearTimeout(P0Y);
							if (G1Y === 'Moz') {
								v8Y.preventDefault();
								e2Y();
							} else {
								C0Y = setTimeout(function() {
									e2Y();
								}, 100);
							}
						}
					} else {
						C0Y = setTimeout(function() {
							R0Y.appendTo(m1Y);
							R0Y[0].style[G1Y + 'Animation'] = 'mbsc-lv-fill ' + (i1Y.sortDelay - 100) + 'ms linear';
							clearTimeout(f2Y);
							clearTimeout(P0Y);
							U2Y = false;
							C0Y = setTimeout(function() {
								R0Y[0].style[G1Y + 'Animation'] = '';
								e2Y();
							}, i1Y.sortDelay - 80);
						}, 80);
					}
				}
				if (v8Y.type == 'mousedown') {
					k1Y(y1Y).on('mousemove', A2Y).on('mouseup', F0Y);
				}
			}
		}
		function A2Y(l8Y) {
			var T8Y = false,
				m8Y = true;
			if (h0Y) {
				a2Y = U1Y(l8Y, 'X');
				B2Y = U1Y(l8Y, 'Y');
				d1Y = a2Y - G2Y;
				b0Y = B2Y - a0Y;
				clearTimeout(f2Y);
				if (!M0Y && !V0Y && !u0Y && !m1Y.hasClass('mbsc-lv-back')) {
					if (Math.abs(b0Y) > 10) {
						u0Y = true;
						l8Y.type = l8Y.type == 'mousemove' ? 'mouseup' : 'touchend';
						F0Y(l8Y);
						clearTimeout(P0Y);
					} else if (Math.abs(d1Y) > 7) {
						A8Y();
					} else {
						if (l8Y.type === 'touchmove') {
							f2Y = setTimeout(function() {
								l8Y.type = 'touchend';
								F0Y(l8Y);
							}, 300);
						}
					}
				}
				if (V0Y) {
					l8Y.preventDefault();
					z1Y = d1Y / W0Y * 100;
					c2Y();
				} else if (M0Y) {
					l8Y.preventDefault();
					var R8Y, i8Y = r1Y.scrollTop(),
						L8Y = Math.max(x2Y, Math.min(b0Y + f0Y, Y2Y)),
						X8Y = Z0Y ? m2Y - R2Y + i8Y - f0Y : m2Y;
					if (o0Y + i8Y < X8Y + L8Y + E1Y) {
						r1Y.scrollTop(X8Y + L8Y - o0Y + E1Y);
						R8Y = true;
					} else if (X8Y + L8Y < i8Y) {
						r1Y.scrollTop(X8Y + L8Y);
						R8Y = true;
					}
					if (R8Y) {
						f0Y += r1Y.scrollTop() - i8Y;
					}
					if (k0Y) {
						if (T1Y.sortable.multiLevel && s1Y.hasClass('mbsc-lv-parent')) {
							if (a1Y + E1Y / 4 + L8Y > k0Y) {
								T8Y = true;
							} else if (a1Y + E1Y - E1Y / 4 + L8Y > k0Y) {
								S0Y = s1Y.addClass('mbsc-lv-item-hl');
								m8Y = false;
							}
						} else if (a1Y + E1Y / 2 + L8Y > k0Y) {
							if (s1Y.hasClass('mbsc-lv-back')) {
								if (T1Y.sortable.multiLevel) {
									n0Y = s1Y.addClass('mbsc-lv-item-hl');
									m8Y = false;
								}
							} else {
								T8Y = true;
							}
						}
						if (T8Y) {
							j0Y.insertAfter(s1Y);
							B1Y = s1Y;
							s1Y = I2Y(s1Y, 'next');
							U0Y = k0Y;
							k0Y = s1Y.length && s1Y[0].offsetTop;
							Y0Y++;
						}
					}
					if (!T8Y && U0Y) {
						if (T1Y.sortable.multiLevel && B1Y.hasClass('mbsc-lv-parent')) {
							if (a1Y + E1Y - E1Y / 4 + L8Y < U0Y) {
								T8Y = true;
							} else if (a1Y + E1Y / 4 + L8Y < U0Y) {
								S0Y = B1Y.addClass('mbsc-lv-item-hl');
								m8Y = false;
							}
						} else if (a1Y + E1Y / 2 + L8Y < U0Y) {
							if (B1Y.hasClass('mbsc-lv-back')) {
								if (T1Y.sortable.multiLevel) {
									n0Y = B1Y.addClass('mbsc-lv-item-hl');
									m8Y = false;
								}
							} else {
								T8Y = true;
							}
						}
						if (T8Y) {
							j0Y.insertBefore(B1Y);
							s1Y = B1Y;
							B1Y = I2Y(B1Y, 'prev');
							k0Y = U0Y;
							U0Y = B1Y.length && B1Y[0].offsetTop + B1Y[0].offsetHeight;
							Y0Y--;
						}
					}
					if (m8Y) {
						if (S0Y) {
							S0Y.removeClass('mbsc-lv-item-hl');
							S0Y = false;
						}
						if (n0Y) {
							n0Y.removeClass('mbsc-lv-item-hl');
							n0Y = false;
						}
					}
					if (T8Y) {
						F1Y('onSortChange', [m1Y, Y0Y]);
					}
					Q8Y(m1Y, L8Y);
					F1Y('onSort', [m1Y, Y0Y]);
				} else if (Math.abs(d1Y) > 5 || Math.abs(b0Y) > 5) {
					L2Y();
				}
			}
		}
		function F0Y(r8Y) {
			var F8Y, f8Y, H8Y, E8Y, O8Y = m1Y;
			if (h0Y) {
				h0Y = false;
				L2Y();
				if (r8Y.type == 'mouseup') {
					k1Y(y1Y).off('mousemove', A2Y).off('mouseup', F0Y);
				}
				if (!u0Y) {
					k8Y = setTimeout(function() {
						S2Y = false;
					}, 300);
				}
				if (V0Y || u0Y || M0Y) {
					D2Y = true;
				}
				if (V0Y) {
					O2Y();
				} else if (M0Y) {
					H8Y = x0Y;
					if (S0Y) {
						g0Y(m1Y.detach());
						f8Y = Q0Y[S0Y.attr('data-ref')];
						Y0Y = O0Y(f8Y.child).length;
						S0Y.removeClass('mbsc-lv-item-hl');
						if (i1Y.navigateOnDrop) {
							F2Y(S0Y, function() {
								T1Y.add(null, m1Y, null, null, S0Y, true);
								i0Y(m1Y);
								E0Y(m1Y, X1Y, H8Y, true);
							});
						} else {
							T1Y.add(null, m1Y, null, null, S0Y, true);
							E0Y(m1Y, X1Y, H8Y, true);
						}
					} else if (n0Y) {
						g0Y(m1Y.detach());
						f8Y = Q0Y[n0Y.attr('data-back')];
						Y0Y = O0Y(f8Y.parent).index(f8Y.item) + 1;
						n0Y.removeClass('mbsc-lv-item-hl');
						if (i1Y.navigateOnDrop) {
							F2Y(n0Y, function() {
								T1Y.add(null, m1Y, Y0Y, null, x0Y, true);
								i0Y(m1Y);
								E0Y(m1Y, X1Y, H8Y, true);
							});
						} else {
							T1Y.add(null, m1Y, Y0Y, null, f8Y.parent, true);
							E0Y(m1Y, X1Y, H8Y, true);
						}
					} else {
						F8Y = j0Y[0].offsetTop - a1Y;
						Q8Y(m1Y, F8Y, Math.abs(F8Y - Math.max(x2Y, Math.min(b0Y + f0Y, Y2Y))) * 6, function() {
							g0Y(m1Y);
							m1Y.insertBefore(j0Y);
							E0Y(m1Y, X1Y, H8Y, Y0Y !== X1Y);
						});
					}
					M0Y = false;
				} else if (!u0Y && Math.abs(d1Y) < 5 && Math.abs(b0Y) < 5) {
					if (f1Y.tap) {
						E8Y = f1Y.tap.call(p1Y, {
							target: m1Y,
							index: X1Y,
							domEvent: r8Y
						}, T1Y);
					}
					if (M2Y) {
						if (r8Y.type === 'touchend') {
							I1Y.preventClick();
						}
						m1Y.addClass('mbsc-lv-item-active');
						F1Y('onItemActivate', {
							target: m1Y[0],
							domEvent: r8Y
						});
					}
					E8Y = F1Y('onItemTap', {
						target: m1Y[0],
						index: X1Y,
						domEvent: r8Y
					});
					if (E8Y !== false) {
						F2Y(m1Y);
					}
				}
				clearTimeout(P0Y);
				setTimeout(function() {
					O8Y.removeClass('mbsc-lv-item-active');
					F1Y('onItemDeactivate', {
						target: O8Y[0]
					});
				}, 100);
				u0Y = false;
				C1Y = null;
			}
		}
		function A8Y() {
			V0Y = e0Y(f1Y.swipe, {
				target: m1Y[0],
				index: X1Y,
				direction: d1Y > 0 ? 'right' : 'left'
			});
			if (V0Y) {
				L2Y();
				clearTimeout(P0Y);
				if (f1Y.actions) {
					B0Y = b8Y(f1Y, d1Y);
					k2Y.html(f1Y.icons).show().children().css('width', B0Y + '%');
					D0Y.hide();
					k1Y('.mbsc-lv-ic-m', H1Y).removeClass('mbsc-lv-ic-disabled');
					k1Y(f1Y.leftMenu).each(d2Y);
					k1Y(f1Y.rightMenu).each(d2Y);
				} else {
					D0Y.show();
					k2Y.hide();
					y0Y = f1Y.start + (d1Y > 0 ? 0 : 1);
					t0Y = X0Y[y0Y - 1];
					N0Y = X0Y[y0Y];
				}
				m1Y.addClass('mbsc-lv-item-swiping').removeClass('mbsc-lv-item-active');
				z0Y.css('line-height', E1Y + 'px');
				H1Y.css({
					top: a1Y,
					height: E1Y,
					backgroundColor: N8Y(d1Y)
				}).addClass('mbsc-lv-stage-c-v').appendTo(x0Y.parent());
				if (i1Y.iconSlide) {
					m1Y.append(D0Y);
				}
				F1Y('onSlideStart', {
					target: m1Y[0],
					index: X1Y
				});
			}
		}
		function c2Y() {
			var B8Y = false;
			if (!n2Y) {
				if (f1Y.actions) {
					H1Y.attr('class', 'mbsc-lv-stage-c-v mbsc-lv-stage-c mbsc-lv-' + (z1Y < 0 ? 'right' : 'left'));
				} else {
					if (t0Y && z1Y <= t0Y.percent) {
						y0Y--;
						N0Y = t0Y;
						t0Y = X0Y[y0Y];
						B8Y = true;
					} else if (N0Y && z1Y >= N0Y.percent) {
						y0Y++;
						t0Y = N0Y;
						N0Y = X0Y[y0Y];
						B8Y = true;
					}
					if (B8Y) {
						C1Y = z1Y > 0 ? t0Y : N0Y;
						if (C1Y) {
							V2Y(C1Y, i1Y.iconSlide);
							F1Y('onStageChange', {
								target: m1Y[0],
								index: X1Y,
								stage: C1Y
							});
						}
					}
				}
				if (!c0Y) {
					n2Y = true;
					J8Y = v1Y(Y8Y);
				}
			}
		}
		function O2Y(a8Y) {
			var C8Y, d8Y, z8Y, p8Y = false,
				s8Y = true;
			W1Y(J8Y);
			n2Y = false;
			if (!c0Y) {
				Y8Y();
			}
			if (f1Y.actions) {
				if (Math.abs(z1Y) > 10 && B0Y) {
					T0Y(m1Y, z1Y < 0 ? -B0Y : B0Y, 200);
					p8Y = true;
					N1Y = true;
					q8Y = m1Y;
					Z8Y = X1Y;
					k1Y(y1Y).on('touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf', function(x6Y) {
						x6Y.preventDefault();
						q2Y(m1Y, true, a8Y);
					});
				}
			} else if (z1Y) {
				if (i1Y.quickSwipe && !c0Y) {
					z8Y = new Date() - y8Y;
					C8Y = z8Y < 300 && d1Y < -50;
					d8Y = z8Y < 300 && d1Y > 50;
					if (C8Y) {
						w2Y = true;
						C1Y = f1Y.left;
						V2Y(C1Y, i1Y.iconSlide);
					} else if (d8Y) {
						w2Y = true;
						C1Y = f1Y.right;
						V2Y(C1Y, i1Y.iconSlide);
					}
				}
				if (C1Y && C1Y.action) {
					S8Y = e0Y(C1Y.disabled, {
						target: m1Y[0],
						index: X1Y
					});
					if (!S8Y) {
						p8Y = true;
						N1Y = c0Y || e0Y(C1Y.confirm, {
							target: m1Y[0],
							index: X1Y
						});
						if (N1Y) {
							T0Y(m1Y, (z1Y < 0 ? -1 : 1) * D0Y[0].offsetWidth * 100 / W0Y, 200, true);
							x8Y(C1Y, m1Y, X1Y, false, a8Y);
						} else {
							P2Y(C1Y, m1Y, X1Y, a8Y);
						}
					}
				}
			}
			if (!p8Y) {
				q2Y(m1Y, s8Y, a8Y);
			}
			V0Y = false;
		}
		function e2Y() {
			M0Y = true;
			S0Y = false;
			n0Y = false;
			f0Y = 0;
			Y0Y = X1Y;
			if (i1Y.vibrate) {
				o1Y();
			}
			s1Y = I2Y(m1Y, 'next');
			k0Y = s1Y.length && s1Y[0].offsetTop;
			B1Y = I2Y(m1Y, 'prev');
			U0Y = B1Y.length && B1Y[0].offsetTop + B1Y[0].offsetHeight;
			j0Y.height(E1Y).insertAfter(m1Y);
			m1Y.css({
				top: a1Y
			}).addClass('mbsc-lv-item-dragging').removeClass('mbsc-lv-item-active').appendTo(D8Y);
			F1Y('onSortStart', {
				target: m1Y[0],
				index: Y0Y
			});
		}
		function E0Y(Y6Y, D6Y, S6Y, Q6Y) {
			Y6Y.removeClass('mbsc-lv-item-dragging');
			j0Y.remove();
			F1Y('onSortEnd', {
				target: Y6Y[0],
				index: Y0Y
			});
			if (i1Y.vibrate) {
				o1Y();
			}
			if (Q6Y) {
				T1Y.addUndoAction(function(j6Y) {
					T1Y.move(Y6Y, D6Y, null, j6Y, S6Y, true);
				}, true);
				F1Y('onSortUpdate', {
					target: Y6Y[0],
					index: Y0Y
				});
			}
		}
		function p2Y() {
			if (!S2Y) {
				clearTimeout(I8Y);
				if (N1Y) {
					k1Y(y1Y).trigger('touchstart');
				}
				if (g2Y) {
					T1Y.close(G0Y, Q2Y);
					g2Y = false;
					G0Y = null;
				}
			}
		}
		function o2Y() {
			clearTimeout(U8Y);
			U8Y = setTimeout(function() {
				o0Y = r1Y[0].innerHeight || r1Y.innerHeight();
				R2Y = Z0Y ? r1Y.offset().top : 0;
				if (h0Y) {
					a1Y = m1Y[0].offsetTop;
					E1Y = m1Y[0].offsetHeight;
					H1Y.css({
						top: a1Y,
						height: E1Y
					});
				}
			}, 200);
		}
		function g8Y() {
			if (M0Y || !h0Y) {
				var n6Y, Z6Y = r1Y.scrollTop(),
					w6Y = O1Y.offset().top,
					q6Y = O1Y[0].offsetHeight,
					h6Y = Z0Y ? r1Y.offset().top : Z6Y;
				k1Y('.mbsc-lv-gr-title', O1Y).each(function(V6Y, K6Y) {
					if (k1Y(K6Y).offset().top < h6Y) {
						n6Y = K6Y;
					}
				});
				if (w6Y < h6Y && w6Y + q6Y > h6Y) {
					K0Y.show().empty().append(k1Y(n6Y).clone());
				} else {
					K0Y.hide();
				}
			}
		}
		function d2Y(U6Y, k6Y) {
			if (e0Y(k6Y.disabled, {
					target: m1Y[0],
					index: X1Y
				})) {
				k1Y('.mbsc-ic-' + k6Y.icon, H1Y).addClass('mbsc-lv-ic-disabled');
			}
		}
		function P2Y(G6Y, I6Y, N6Y, y6Y) {
			var t6Y, b6Y = {
				icon: 'undo2',
				text: i1Y.undoText,
				color: '#b1b1b1',
				action: function() {
					T1Y.undo();
				}
			};
			if (G6Y.undo) {
				T1Y.startActionTrack();
				if (k1Y.isFunction(G6Y.undo)) {
					T1Y.addUndoAction(function() {
						G6Y.undo.call(p1Y, I6Y, T1Y, N6Y);
					});
				}
				N2Y = I6Y.attr('data-ref');
			}
			t6Y = G6Y.action.call(p1Y, {
				target: I6Y[0],
				index: N6Y
			}, T1Y);
			if (G6Y.undo) {
				T1Y.endActionTrack();
				if (t6Y !== false) {
					T0Y(I6Y, +I6Y.attr('data-pos') < 0 ? -100 : 100, 200);
				}
				j0Y.height(E1Y).insertAfter(I6Y);
				I6Y.css('top', a1Y).addClass('mbsc-lv-item-undo');
				k2Y.hide();
				D0Y.show();
				H1Y.append(D0Y);
				V2Y(b6Y);
				x8Y(b6Y, I6Y, N6Y, true, y6Y);
			} else {
				q2Y(I6Y, t6Y, y6Y);
			}
		}
		function x8Y(g6Y, J6Y, o6Y, A6Y, M6Y) {
			var c6Y, e6Y;
			N1Y = true;
			k1Y(y1Y).off('.mbsc-lv-conf').on('touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf', function(u6Y) {
				u6Y.preventDefault();
				if (A6Y) {
					n8Y(J6Y);
				}
				q2Y(J6Y, true, M6Y);
			});
			if (!m0Y) {
				D0Y.off('.mbsc-lv-conf').on('touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf', function(P6Y) {
					P6Y.stopPropagation();
					c6Y = U1Y(P6Y, 'X');
					e6Y = U1Y(P6Y, 'Y');
				}).on('touchend.mbsc-lv-conf mouseup.mbsc-lv-conf', function(v6Y) {
					v6Y.preventDefault();
					if (v6Y.type === 'touchend') {
						I1Y.preventClick();
					}
					if (Math.abs(U1Y(v6Y, 'X') - c6Y) < 10 && Math.abs(U1Y(v6Y, 'Y') - e6Y) < 10) {
						P2Y(g6Y, J6Y, o6Y, M6Y);
						if (A6Y) {
							s0Y = null;
							n8Y(J6Y);
						}
					}
				});
			}
		}
		function Y8Y() {
			T0Y(m1Y, t8Y + d1Y * 100 / W0Y);
			n2Y = false;
		}
		function q2Y(W6Y, l6Y, L6Y) {
			k1Y(y1Y).off('.mbsc-lv-conf');
			D0Y.off('.mbsc-lv-conf');
			if (l6Y !== false) {
				T0Y(W6Y, 0, W6Y.attr('data-pos') !== '0' ? 200 : 0, false, function() {
					T2Y(W6Y, L6Y);
					g0Y(W6Y);
				});
			} else {
				T2Y(W6Y, L6Y);
			}
			N1Y = false;
		}
		function T0Y(m6Y, T6Y, i6Y, R6Y, X6Y) {
			T6Y = Math.max(V0Y == 'right' ? 0 : -100, Math.min(T6Y, V0Y == 'left' ? 0 : 100));
			w0Y = m6Y[0].style;
			m6Y.attr('data-pos', T6Y);
			w0Y[G1Y + 'Transform'] = 'translate3d(' + (R6Y ? W0Y * T6Y / 100 + 'px' : T6Y + '%') + ',0,0)';
			w0Y[G1Y + 'Transition'] = c1Y + 'transform ' + (i6Y || 0) + 'ms';
			if (X6Y) {
				q0Y++;
				setTimeout(function() {
					X6Y();
					q0Y--;
				}, i6Y);
			}
			z1Y = T6Y;
		}
		function Q8Y(F6Y, f6Y, H6Y, r6Y) {
			f6Y = Math.max(x2Y, Math.min(f6Y, Y2Y));
			w0Y = F6Y[0].style;
			w0Y[G1Y + 'Transform'] = 'translate3d(0,' + f6Y + 'px,0)';
			w0Y[G1Y + 'Transition'] = c1Y + 'transform ' + (H6Y || 0) + 'ms ease-out';
			if (r6Y) {
				q0Y++;
				setTimeout(function() {
					r6Y();
					q0Y--;
				}, H6Y);
			}
		}
		function L2Y() {
			clearTimeout(C0Y);
			if (!U2Y && T1Y.sortable) {
				U2Y = true;
				R0Y.remove();
			}
		}
		function V2Y(E6Y, B6Y) {
			var O6Y = e0Y(E6Y.text, {
				target: m1Y[0],
				index: X1Y
			}) || '';
			if (e0Y(E6Y.disabled, {
					target: m1Y[0],
					index: X1Y
				})) {
				H1Y.addClass('mbsc-lv-ic-disabled');
			} else {
				H1Y.removeClass('mbsc-lv-ic-disabled');
			}
			H1Y.css('background-color', E6Y.color || (E6Y.percent === 0 ? N8Y(z1Y) : u1Y));
			D0Y.attr('class', 'mbsc-lv-ic-c mbsc-lv-ic-' + (B6Y ? 'move-' : '') + (z1Y < 0 ? 'right' : 'left'));
			H0Y.attr('class', ' mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-' + (E6Y.icon || 'none'));
			z0Y.attr('class', 'mbsc-lv-ic-text' + (E6Y.icon ? '' : ' mbsc-lv-ic-text-only') + (O6Y ? '' : ' mbsc-lv-ic-only')).html(O6Y || '&nbsp;');
			if (i1Y.animateIcons) {
				if (w2Y) {
					H0Y.addClass('mbsc-lv-ic-v');
				} else {
					setTimeout(function() {
						H0Y.addClass('mbsc-lv-ic-a');
					}, 10);
				}
			}
		}
		function T2Y(a6Y, p6Y) {
			if (!h0Y) {
				H0Y.attr('class', 'mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none');
				H1Y.attr('style', '').removeClass('mbsc-lv-stage-c-v');
				z0Y.html('');
			}
			H1Y.removeClass('mbsc-lv-left mbsc-lv-right');
			if (a6Y) {
				F1Y('onSlideEnd', {
					target: a6Y[0],
					index: X1Y
				});
				if (p6Y) {
					p6Y();
				}
			}
		}
		function n8Y(z6Y) {
			z6Y.css('top', '').removeClass('mbsc-lv-item-undo');
			if (s0Y) {
				T1Y.animate(j0Y, 'collapse', function() {
					j0Y.remove();
				});
			} else {
				j0Y.remove();
			}
			T2Y();
			N2Y = null;
			s0Y = null;
		}
		function g0Y(C6Y) {
			w0Y = C6Y[0].style;
			w0Y[G1Y + 'Transform'] = '';
			w0Y[G1Y + 'Transition'] = '';
			w0Y.top = '';
			C6Y.removeClass('mbsc-lv-item-swiping');
		}
		function e0Y(d6Y, s6Y) {
			return k1Y.isFunction(d6Y) ? d6Y.call(this, s6Y, T1Y) : d6Y;
		}
		function K8Y(x96) {
			var Y96;
			if (!x96.attr('data-ref')) {
				Y96 = A1Y++;
				x96.attr('data-ref', Y96);
				Q0Y[Y96] = {
					item: x96,
					child: x96.children('ul,ol'),
					parent: x96.parent(),
					ref: x96.parent()[0] === p1Y ? null : x96.parent().parent().attr('data-ref')
				};
			}
			x96.addClass('mbsc-lv-item');
			if (T1Y.sortable.handle && x96.attr('data-role') != 'list-divider' && !x96.children('.mbsc-lv-handle-c').length) {
				x96.append(C2Y);
			}
			if (i1Y.enhance && !x96.hasClass('mbsc-lv-item-enhanced')) {
				var D96 = x96.attr('data-icon'),
					S96 = x96.find('img').eq(0).addClass('mbsc-lv-img');
				if (S96.is(':first-child')) {
					x96.addClass('mbsc-lv-img-' + (i1Y.rtl ? 'right' : 'left'));
				} else if (S96.length) {
					x96.addClass('mbsc-lv-img-' + (i1Y.rtl ? 'left' : 'right'));
				}
				x96.addClass('mbsc-lv-item-enhanced').children().each(function(j96, Q96) {
					Q96 = k1Y(Q96);
					if (Q96.is('p, h1, h2, h3, h4, h5, h6')) {
						Q96.addClass('mbsc-lv-txt');
					}
				});
				if (D96) {
					x96.addClass('mbsc-lv-item-ic-' + (x96.attr('data-icon-align') || (i1Y.rtl ? 'right' : 'left'))).append('<div class="mbsc-lv-item-ic mbsc-ic mbsc-ic-' + D96 + '"></div');
				}
			}
		}
		function V8Y(h96) {
			k1Y('li', h96).not('.mbsc-lv-item').each(function() {
				K8Y(k1Y(this));
			});
			k1Y('li[data-role="list-divider"]', h96).removeClass('mbsc-lv-item').addClass('mbsc-lv-gr-title');
			k1Y('ul,ol', h96).not('.mbsc-lv').addClass('mbsc-lv').prepend(t2Y).parent().addClass('mbsc-lv-parent').prepend(i2Y);
			k1Y('.mbsc-lv-back', h96).each(function() {
				k1Y(this).attr('data-back', k1Y(this).parent().parent().attr('data-ref'));
			});
		}
		function O0Y(w96) {
			return w96.children('li').not('.mbsc-lv-back').not('.mbsc-lv-removed').not('.mbsc-lv-ph');
		}
		function l0Y(n96) {
			if (typeof n96 !== 'object') {
				n96 = k1Y('li[data-id="' + n96 + '"]', R1Y);
			}
			return k1Y(n96);
		}
		function e8Y(K96) {
			var q96 = 0,
				Z96 = Q0Y[K96.attr('data-ref')];
			while (Z96.ref) {
				q96++;
				Z96 = Q0Y[Z96.ref];
			}
			return q96;
		}
		function I2Y(V96, k96) {
			V96 = V96[k96]();
			while (V96.length && (!V96.hasClass('mbsc-lv-item') || V96.hasClass('mbsc-lv-ph') || V96.hasClass('mbsc-lv-item-dragging'))) {
				if (!T1Y.sortable.group && V96.hasClass('mbsc-lv-gr-title')) {
					return false;
				}
				V96 = V96[k96]();
			}
			return V96;
		}
		function N8Y(U96) {
			return (U96 > 0 ? f1Y.right : f1Y.left).color || u1Y;
		}
		function I0Y(I96) {
			return I1Y.isNumeric(I96) ? I96 + '' : 0;
		}
		function b8Y(G96, N96) {
			return +(N96 < 0 ? I0Y((G96.actionsWidth || 0).right) || I0Y(G96.actionsWidth) || I0Y(i1Y.actionsWidth.right) || I0Y(i1Y.actionsWidth) : I0Y((G96.actionsWidth || 0).left) || I0Y(G96.actionsWidth) || I0Y(i1Y.actionsWidth.left) || I0Y(i1Y.actionsWidth));
		}
		function i0Y(y96, A96) {
			if (y96) {
				var b96 = r1Y.scrollTop(),
					J96 = y96.is('.mbsc-lv-item') ? y96[0].offsetHeight : 0,
					t96 = y96.offset().top + (Z0Y ? b96 - R2Y : 0);
				if (A96) {
					if (t96 < b96 || t96 > b96 + o0Y) {
						r1Y.scrollTop(t96);
					}
				} else {
					if (t96 < b96) {
						r1Y.scrollTop(t96);
					} else if (t96 + J96 > b96 + o0Y) {
						r1Y.scrollTop(t96 + J96 - o0Y / 2);
					}
				}
			}
		}
		function r2Y(o96, M96, c96, e96, u96) {
			var P96 = M96.parent(),
				g96 = M96.prev();
			e96 = e96 || J1Y;
			if (g96[0] === D0Y[0]) {
				g96 = D0Y.prev();
			}
			if (x0Y[0] !== M96[0]) {
				F1Y('onNavStart', {
					level: J0Y,
					direction: o96,
					list: M96[0]
				});
				W2Y.prepend(M96.addClass('mbsc-lv-v mbsc-lv-sl-new'));
				i0Y(R1Y);
				M8Y(W2Y, 'mbsc-lv-sl-' + o96, function() {
					x0Y.removeClass('mbsc-lv-sl-curr');
					M96.removeClass('mbsc-lv-sl-new').addClass('mbsc-lv-sl-curr');
					if (K2Y && K2Y.length) {
						x0Y.removeClass('mbsc-lv-v').insertAfter(K2Y);
					} else {
						h2Y.append(x0Y.removeClass('mbsc-lv-v'));
					}
					K2Y = g96;
					h2Y = P96;
					x0Y = M96;
					i0Y(c96, u96);
					e96.call(p1Y, c96);
					F1Y('onNavEnd', {
						level: J0Y,
						direction: o96,
						list: M96[0]
					});
				});
			} else {
				i0Y(c96, u96);
				e96.call(p1Y, c96);
			}
		}
		function F2Y(v96, W96) {
			if (!q0Y) {
				if (v96.hasClass('mbsc-lv-parent')) {
					J0Y++;
					r2Y('r', Q0Y[v96.attr('data-ref')].child, null, W96);
				} else if (v96.hasClass('mbsc-lv-back')) {
					J0Y--;
					r2Y('l', Q0Y[v96.attr('data-back')].parent, Q0Y[v96.attr('data-back')].item, W96);
				}
			}
		}
		function M8Y(L96, T96, l96) {
			var i96;
			function m96() {
				clearTimeout(i96);
				q0Y--;
				L96.off(e1Y, m96).removeClass(T96);
				l96.call(p1Y, L96);
			}
			l96 = l96 || J1Y;
			if (i1Y.animation && T96 !== 'mbsc-lv-item-none') {
				q0Y++;
				L96.on(e1Y, m96).addClass(T96);
				i96 = setTimeout(m96, 500);
			} else {
				l96.call(p1Y, L96);
			}
		}
		function E2Y(X96, R96) {
			var f96, H96 = X96.attr('data-ref');
			f96 = j2Y[H96] = j2Y[H96] || [];
			if (R96) {
				f96.push(R96);
			}
			if (X96.attr('data-action')) {
				return;
			}
			R96 = f96.shift();
			X96.attr('data-action', 1);
			R96(function() {
				X96.removeAttr('data-action');
				if (f96.length) {
					E2Y(X96);
				} else {
					delete j2Y[H96];
				}
			});
		}
		function X2Y(F96, O96, B96) {
			var E96, r96;
			if (F96 && F96.length) {
				E96 = 100 / (F96.length + 2);
				k1Y.each(F96, function(p96, a96) {
					if (a96.key === t1Y) {
						a96.key = l2Y++;
					}
					if (a96.percent === t1Y) {
						a96.percent = O96 * E96 * (p96 + 1);
						if (B96) {
							r96 = L1Y({}, a96);
							r96.key = l2Y++;
							r96.percent = -E96 * (p96 + 1);
							F96.push(r96);
							r0Y[r96.key] = r96;
						}
					}
					r0Y[a96.key] = a96;
				});
			}
		}
		M1Y.Base.call(this, s2Y, h8Y, true);
		T1Y.animate = function(z96, C96, d96) {
			M8Y(z96, 'mbsc-lv-item-' + C96, d96);
		};
		T1Y.add = function(G76, V76, S76, Z76, I76, j76) {
			var K76, h76, q76, U76, Q76, n76, w76 = '',
				x76 = I76 === t1Y ? O1Y : l0Y(I76),
				Y76 = x76,
				s96 = typeof V76 !== 'object' ? k1Y('<li data-ref="' + A1Y++ + '" data-id="' + G76 + '">' + V76 + '</li>') : V76,
				k76 = s96.attr('data-pos') < 0 ? 'left' : 'right',
				D76 = s96.attr('data-ref');
			Z76 = Z76 || J1Y;
			if (!D76) {
				D76 = A1Y++;
				s96.addClass('mbsc-lv-item').attr('data-ref', D76);
			}
			K8Y(s96);
			if (!j76) {
				T1Y.addUndoAction(function(N76) {
					if (U76) {
						T1Y.navigate(x76, function() {
							Y76.remove();
							x76.removeClass('mbsc-lv-parent').children('.mbsc-lv-arr').remove();
							Q76.child = x76.children('ul,ol');
							T1Y.remove(s96, null, N76, true);
						});
					} else {
						T1Y.remove(s96, null, N76, true);
					}
				}, true);
			}
			E2Y(s96, function(t76) {
				g0Y(s96.css('top', '').removeClass('mbsc-lv-item-undo'));
				if (x76.is('li')) {
					n76 = x76.attr('data-ref');
					if (!x76.children('ul,ol').length) {
						U76 = true;
						x76.append('<ul></ul>');
					}
				} else {
					n76 = x76.children('.mbsc-lv-back').attr('data-back');
				}
				Q76 = Q0Y[n76];
				if (Q76) {
					if (!Q76.child.length) {
						x76.addClass('mbsc-lv-parent').prepend(i2Y);
						Y76 = x76.children('ul,ol').prepend(t2Y).addClass('mbsc-lv');
						Q76.child = Y76;
						k1Y('.mbsc-lv-back', x76).attr('data-back', n76);
					} else {
						Y76 = Q76.child;
					}
				}
				Q0Y[D76] = {
					item: s96,
					child: s96.children('ul,ol'),
					parent: Y76,
					ref: n76
				};
				q76 = O0Y(Y76);
				h76 = q76.length;
				if (S76 === t1Y || S76 === null) {
					S76 = h76;
				}
				if (j76) {
					w76 = 'mbsc-lv-item-new-' + (j76 ? k76 : '');
				}
				V8Y(s96.addClass(w76));
				if (S76 !== false) {
					if (!h76) {
						K76 = k1Y('.mbsc-lv-back', Y76);
						if (K76.length) {
							s96.insertAfter(K76);
						} else {
							Y76.append(s96);
						}
					} else if (S76 < h76) {
						s96.insertBefore(q76.eq(S76));
					} else {
						s96.insertAfter(q76.eq(h76 - 1));
					}
				}
				if (Y76.hasClass('mbsc-lv-v')) {
					T1Y.animate(s96.height(s96[0].offsetHeight), j76 && N2Y === D76 ? 'none' : 'expand', function(b76) {
						T1Y.animate(b76.height(''), j76 ? 'add-' + k76 : 'pop-in', function(y76) {
							Z76.call(p1Y, y76.removeClass(w76));
							t76();
						});
					});
				} else {
					Z76.call(p1Y, s96.removeClass(w76));
					t76();
				}
				R1Y.trigger('mbsc-enhance', [{
					theme: i1Y.theme,
					lang: i1Y.lang
				}]);
				F1Y('onItemAdd', {
					target: s96[0]
				});
			});
		};
		T1Y.swipe = function(J76, M76, A76, c76, e76) {
			J76 = l0Y(J76);
			m1Y = J76;
			m0Y = c76;
			c0Y = true;
			h0Y = true;
			A76 = A76 === t1Y ? 300 : A76;
			d1Y = M76 > 0 ? 1 : -1;
			G8Y();
			A8Y();
			T0Y(J76, M76, A76);
			clearTimeout(j8Y);
			clearInterval(y2Y);
			y2Y = setInterval(function() {
				z1Y = I1Y.getPosition(J76) / W0Y * 100;
				c2Y();
			}, 10);
			j8Y = setTimeout(function() {
				clearInterval(y2Y);
				z1Y = M76;
				c2Y();
				O2Y(e76);
				m0Y = false;
				c0Y = false;
				h0Y = false;
			}, A76);
		};
		T1Y.openStage = function(o76, g76, u76, P76) {
			if (r0Y[g76]) {
				T1Y.swipe(o76, r0Y[g76].percent, u76, P76);
			}
		};
		T1Y.openActions = function(v76, L76, l76, T76) {
			v76 = l0Y(v76);
			var W76 = b8Y(L0Y[v76.attr('data-type') || 'defaults'], L76 == 'left' ? -1 : 1);
			T1Y.swipe(v76, L76 == 'left' ? -W76 : W76, l76, T76);
		};
		T1Y.close = function(m76, i76) {
			T1Y.swipe(m76, 0, i76);
		};
		T1Y.remove = function(X76, H76, R76, r76) {
			var F76, f76;
			R76 = R76 || J1Y;
			X76 = l0Y(X76);
			if (X76.length) {
				f76 = X76.parent();
				F76 = O0Y(f76).index(X76);
				if (!r76) {
					if (X76.attr('data-ref') === N2Y) {
						s0Y = true;
					}
					T1Y.addUndoAction(function(E76) {
						T1Y.add(null, X76, F76, E76, f76, true);
					}, true);
				}
				E2Y(X76, function(O76) {
					H76 = H76 || X76.attr('data-pos') < 0 ? 'left' : 'right';
					if (f76.hasClass('mbsc-lv-v')) {
						T1Y.animate(X76.addClass('mbsc-lv-removed'), r76 ? 'pop-out' : 'remove-' + H76, function(B76) {
							T1Y.animate(B76.height(B76[0].offsetHeight), 'collapse', function(a76) {
								g0Y(a76.height('').removeClass('mbsc-lv-removed'));
								if (R76.call(p1Y, a76) !== false) {
									a76.remove();
								}
								O76();
							});
						});
					} else {
						if (R76.call(p1Y, X76) !== false) {
							X76.remove();
						}
						O76();
					}
					F1Y('onItemRemove', {
						target: X76[0]
					});
				});
			}
		};
		T1Y.move = function(p76, C76, d76, s76, x56, z76) {
			p76 = l0Y(p76);
			if (!z76) {
				T1Y.startActionTrack();
			}
			H1Y.append(D0Y);
			T1Y.remove(p76, d76, null, z76);
			T1Y.add(null, p76, C76, s76, x56, z76);
			if (!z76) {
				T1Y.endActionTrack();
			}
		};
		T1Y.navigate = function(Y56, Q56) {
			var D56, S56;
			Y56 = l0Y(Y56);
			D56 = Q0Y[Y56.attr('data-ref')];
			S56 = e8Y(Y56);
			if (D56) {
				r2Y(S56 >= J0Y ? 'r' : 'l', D56.parent, Y56, Q56, true);
				J0Y = S56;
			}
		};
		T1Y._processSettings = function() {
			if (O1Y.is('[mbsc-enhance]')) {
				b2Y = true;
				O1Y.removeAttr('mbsc-enhance');
			}
		};
		T1Y._init = function() {
			var Z56, q56, K56, j56 = 0, p = O1Y.find('ul,ol').length ? 'left' : 'right',
				h56 = '',
				w56 = '',
				n56 = '';
			
			K56 = i1Y.sort || i1Y.sortable;;

			Z56 = 'mbsc-lv-cont mbsc-lv-' + i1Y.theme + (i1Y.rtl ? ' mbsc-lv-rtl' : '') + (i1Y.baseTheme ? ' mbsc-lv-' + i1Y.baseTheme : '') + (i1Y.animateIcons ? ' mbsc-lv-ic-anim' : '') + (i1Y.striped ? ' mbsc-lv-alt-row ' : '') + (i1Y.fixedHeader ? ' mbsc-lv-has-fixed-header ' : '');
			T1Y.sortable = K56 || false;
			if (!R1Y) {
				h56 += '<div class="mbsc-lv-multi-c"></div>';
				h56 += '<div class="mbsc-lv-ic-c"><div class="mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"></div><div class="mbsc-lv-ic-text"></div></div>';
				O1Y.addClass('mbsc-lv mbsc-lv-v mbsc-lv-root').show();
				H1Y = k1Y('<div class="mbsc-lv-stage-c">' + h56 + '</div>');
				D0Y = k1Y('.mbsc-lv-ic-c', H1Y);
				k2Y = k1Y('.mbsc-lv-multi-c', H1Y);
				H0Y = k1Y('.mbsc-lv-ic-s', H1Y);
				z0Y = k1Y('.mbsc-lv-ic-text', H1Y);
				j0Y = k1Y('<li class="mbsc-lv-item mbsc-lv-ph"></li>');
				R0Y = k1Y('<div class="mbsc-lv-fill-item"></div>');
				R1Y = k1Y('<div class="' + Z56 + '"><ul class="mbsc-lv mbsc-lv-dummy"></ul><div class="mbsc-lv-sl-c"></div></div>');
				Z0Y = i1Y.context !== 'body';
				r1Y = k1Y(Z0Y ? i1Y.context : g1Y);
				D8Y = k1Y('.mbsc-lv-dummy', R1Y);
				R1Y.insertAfter(O1Y);
				r1Y.on('orientationchange resize', o2Y);
				o2Y();
				R1Y.on('touchstart mousedown', '.mbsc-lv-item', o8Y).on('touchmove', '.mbsc-lv-item', A2Y).on('touchend touchcancel', '.mbsc-lv-item', F0Y);
				if (p1Y.addEventListener) {
					p1Y.addEventListener('click', function(V56) {
						if (D2Y) {
							V56.stopPropagation();
							V56.preventDefault();
							D2Y = false;
						}
					}, true);
				}
				R1Y.on('touchstart mousedown', '.mbsc-lv-ic-m', function(k56) {
					if (!m0Y) {
						k56.stopPropagation();
						k56.preventDefault();
					}
					G2Y = U1Y(k56, 'X');
					a0Y = U1Y(k56, 'Y');
				}).on('touchend mouseup', '.mbsc-lv-ic-m', function(U56) {
					if (!m0Y) {
						if (U56.type === 'touchend') {
							I1Y.preventClick();
						}
						if (N1Y && !k1Y(this).hasClass('mbsc-lv-ic-disabled') && Math.abs(U1Y(U56, 'X') - G2Y) < 10 && Math.abs(U1Y(U56, 'Y') - a0Y) < 10) {
							P2Y((z1Y < 0 ? f1Y.rightMenu : f1Y.leftMenu)[k1Y(this).index()], q8Y, Z8Y);
						}
					}
				});
				W2Y = k1Y('.mbsc-lv-sl-c', R1Y).append(O1Y.addClass('mbsc-lv-sl-curr')).attr('data-ref', A1Y++);
				x0Y = O1Y;
				h2Y = R1Y;
			} else {
				R1Y.attr('class', Z56);
				if (K56.handle) {
					k1Y('.mbsc-lv-handle-c', O1Y).remove();
				}
				k1Y('li:not(.mbsc-lv-back)', O1Y).removeClass('mbsc-lv-item');
			}
			
			t2Y = '<li class="mbsc-lv-item mbsc-lv-back">' + i1Y.backText + '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + i1Y.leftArrowClass + '"></div></li>';
			i2Y = '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + i1Y.rightArrowClass + '"></div>';
			if (T1Y.sortable.handle) {
				P8Y =  T1Y.sortable.handle === true ? p : T1Y.sortable.handle;
                C2Y = '<div class="mbsc-lv-handle-c mbsc-lv-item-h-' + P8Y + ' mbsc-lv-handle"><div class="' + i1Y.handleClass + ' mbsc-lv-handle-bar-c mbsc-lv-handle">' + i1Y.handleMarkup + '</div></div>';
            }
			
			V8Y(O1Y);
			l2Y = 0;
			L0Y = i1Y.itemGroups || {};
			L0Y.defaults = {
				swipeleft: i1Y.swipeleft,
				swiperight: i1Y.swiperight,
				stages: i1Y.stages,
				actions: i1Y.actions,
				actionsWidth: i1Y.actionsWidth
			};
			k1Y.each(L0Y, function(G56, I56) {
				I56.swipe = I56.swipe !== t1Y ? I56.swipe : i1Y.swipe;
				I56.stages = I56.stages || [];
				X2Y(I56.stages, 1, true);
				X2Y(I56.stages.left, 1);
				X2Y(I56.stages.right, -1);
				if (I56.stages.left || I56.stages.right) {
					I56.stages = [].concat(I56.stages.left || [], I56.stages.right || []);
				}
				d0Y = false;
				if (!I56.stages.length) {
					if (I56.swipeleft) {
						I56.stages.push({
							percent: -30,
							action: I56.swipeleft
						});
					}
					if (I56.swiperight) {
						I56.stages.push({
							percent: 30,
							action: I56.swiperight
						});
					}
				}
				k1Y.each(I56.stages, function(t56, N56) {
					if (N56.percent === 0) {
						d0Y = true;
						return false;
					}
				});
				if (!d0Y) {
					I56.stages.push({
						percent: 0
					});
				}
				I56.stages.sort(function(b56, y56) {
					return b56.percent - y56.percent;
				});
				k1Y.each(I56.stages, function(J56, A56) {
					if (A56.percent === 0) {
						I56.start = J56;
						return false;
					}
				});
				if (d0Y) {
					I56.left = I56.right = I56.stages[I56.start];
				} else {
					I56.left = I56.stages[I56.start - 1] || {};
					I56.right = I56.stages[I56.start + 1] || {};
				}
				if (I56.actions) {
					I56.leftMenu = I56.actions.left || I56.actions;
					I56.rightMenu = I56.actions.right || I56.leftMenu;
					w56 = '';
					n56 = '';
					for (j56 = 0; j56 < I56.leftMenu.length; j56++) {
						w56 += '<div ' + (I56.leftMenu[j56].color ? 'style="background-color: ' + I56.leftMenu[j56].color + '"' : '') + ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + I56.leftMenu[j56].icon + '">' + (I56.leftMenu[j56].text || '') + '</div>';
					}
					for (j56 = 0; j56 < I56.rightMenu.length; ++j56) {
						n56 += '<div ' + (I56.rightMenu[j56].color ? 'style="background-color: ' + I56.rightMenu[j56].color + '"' : '') + ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + I56.rightMenu[j56].icon + '">' + (I56.rightMenu[j56].text || '') + '</div>';
					}
					if (I56.actions.left) {
						I56.swipe = I56.actions.right ? I56.swipe : 'right';
					}
					if (I56.actions.right) {
						I56.swipe = I56.actions.left ? I56.swipe : 'left';
					}
					I56.icons = '<div class="mbsc-lv-multi mbsc-lv-multi-ic-left">' + w56 + '</div><div class="mbsc-lv-multi mbsc-lv-multi-ic-right">' + n56 + '</div>';
				}
			});
			if (i1Y.fixedHeader) {
				q56 = 'mbsc-lv-fixed-header' + (Z0Y ? ' mbsc-lv-fixed-header-ctx mbsc-lv-' + i1Y.theme + (i1Y.baseTheme ? ' mbsc-lv-' + i1Y.baseTheme : '') : '');
				if (!K0Y) {
					K0Y = k1Y('<div class="' + q56 + '"></div>');
					if (Z0Y) {
						r1Y.before(K0Y);
					} else {
						R1Y.prepend(K0Y);
					}
					v2Y = I1Y.throttle(g8Y, 200);
					r1Y.on('scroll touchmove', v2Y);
				} else {
					K0Y.attr('class', q56);
				}
			}
			if (i1Y.hover) {
				if (!Q2Y) {
					R1Y.on('mouseover.mbsc-lv', '.mbsc-lv-item', function() {
						if (!G0Y || G0Y[0] != this) {
							p2Y();
							G0Y = k1Y(this);
							if (L0Y[G0Y.attr('data-type') || 'defaults'].actions) {
								I8Y = setTimeout(function() {
									if (!S2Y) {
										g2Y = true;
										T1Y.openActions(G0Y, z2Y, Q2Y, false);
									} else {
										G0Y = null;
									}
								}, c8Y);
							}
						}
					}).on('mouseleave.mbsc-lv', p2Y);
				}
				Q2Y = i1Y.hover.time || 200;
				c8Y = i1Y.hover.timeout || 200;
				z2Y = i1Y.hover.direction || i1Y.hover || 'right';
			}
			if (b2Y) {
				R1Y.attr('mbsc-enhance', '');
			}
			R1Y.trigger('mbsc-enhance', [{
				theme: i1Y.theme,
				lang: i1Y.lang
			}]);
		};
		T1Y._destroy = function() {
			h2Y.append(x0Y);
			if (Z0Y && K0Y) {
				K0Y.remove();
			}
			if (b2Y) {
				O1Y.attr('mbsc-enhance', '');
			}
			R1Y.find('.mbsc-lv-txt,.mbsc-lv-img').removeClass('mbsc-lv-txt mbsc-lv-img');
			R1Y.find('ul,ol').removeClass('mbsc-lv mbsc-lv-v mbsc-lv-root mbsc-lv-sl-curr').find('li').removeClass('mbsc-lv-gr-title mbsc-lv-item mbsc-lv-item-enhanced mbsc-lv-parent mbsc-lv-img-left mbsc-lv-img-right mbsc-lv-item-ic-left mbsc-lv-item-ic-right').removeAttr('data-ref');
			k1Y('.mbsc-lv-back,.mbsc-lv-handle-c,.mbsc-lv-arr,.mbsc-lv-item-ic', R1Y).remove();
			O1Y.insertAfter(R1Y);
			R1Y.remove();
			H1Y.remove();
			r1Y.off('scroll touchmove', v2Y).off('orientationchange resize', o2Y);
		};
		var Z2Y, J2Y = [],
			A0Y = [],
			p0Y = [],
			v0Y = 0;
		T1Y.startActionTrack = function() {
			if (!v0Y) {
				p0Y = [];
			}
			v0Y++;
		};
		T1Y.endActionTrack = function() {
			v0Y--;
			if (!v0Y) {
				A0Y.push(p0Y);
			}
		};
		T1Y.addUndoAction = function(c56, e56) {
			var M56 = {
				action: c56,
				async: e56
			};
			if (v0Y) {
				p0Y.push(M56);
			} else {
				A0Y.push([M56]);
				if (A0Y.length > i1Y.undoLimit) {
					A0Y.shift();
				}
			}
		};
		T1Y.undo = function() {
			var g56, o56, u56;
			function P56() {
				if (o56 < 0) {
					Z2Y = false;
					v56();
				} else {
					g56 = u56[o56];
					o56--;
					if (g56.async) {
						g56.action(P56);
					} else {
						g56.action();
						P56();
					}
				}
			}
			function v56() {
				u56 = J2Y.shift();
				if (u56) {
					Z2Y = true;
					o56 = u56.length - 1;
					P56();
				}
			}
			if (A0Y.length) {
				J2Y.push(A0Y.pop());

			}
			if (!Z2Y) {
				v56();
			}
		};
		i1Y = T1Y.settings;
		F1Y = T1Y.trigger;
		T1Y.init(h8Y);
	};
	M1Y.ListView.prototype = {
		_class: 'listview',
		_hasDef: true,
		_hasTheme: true,
		_hasLang: true,
		_defaults: {
			context: 'body',
			actionsWidth: 90,
			sortDelay: 250,
			undoLimit: 10,
			swipe: true,
			quickSwipe: true,
			animateIcons: true,
			animation: true,
			revert: true,
			vibrate: true,
			handleClass: '',
			handleMarkup: '<div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div>',
			leftArrowClass: 'mbsc-ic-arrow-left4',
			rightArrowClass: 'mbsc-ic-arrow-right4',
			backText: 'Back',
			undoText: 'Undo',
			stages: []
		}
	};
	b1Y.themes.listview.mobiscroll = {
		leftArrowClass: 'mbsc-ic-arrow-left5',
		rightArrowClass: 'mbsc-ic-arrow-right5'
	};
	b1Y.presetShort('listview', 'ListView');
}(window, document));

     (function() {
         mobiscroll.themes.listview.ios = {
             leftArrowClass: 'mbsc-ic-ion-ios7-arrow-back',
             rightArrowClass: 'mbsc-ic-ion-ios7-arrow-forward'
         };
     }());
     (function() {
         mobiscroll.themes.listview.jqm = {
             handleClass: 'ui-btn ui-icon-bars ui-btn-up-c ui-btn-icon-notext ui-icon-shadow ui-corner-all ui-btn-corner-all',
             handleMarkup: '<span class="ui-btn-inner mbsc-lv-handle"><span class="ui-icon ui-icon-bars ui-icon-shadow mbsc-lv-handle">&nbsp;</span></span>',
             leftArrowClass: 'ui-btn-icon-left ui-icon-carat-l',
             rightArrowClass: 'ui-btn-icon-right ui-icon-carat-r',
             onInit: function() {
                 $(this).closest('.mbsc-lv-cont').addClass($(this).data('inset') ? 'mbsc-lv-jqm-inset' : '').find('.mbsc-lv-dummy, .mbsc-lv-fixed-header').addClass('ui-listview');
                 $('ul,ol', this).listview('refresh');
             },
             onItemAdd: function(s6e) {
                 var r6e = $(s6e.target).parent();
                 if (r6e.hasClass('ui-listview')) {
                     r6e.listview('refresh');
                 } else {
                     r6e.listview();
                 }
             },
             onSortUpdate: function(a6e) {
                 $(a6e.target).parent().listview('refresh');
             }
         };
     }());
     (function() {
         var q6e = mobiscroll,
             B6e = q6e.$;
         q6e.themes.listview.material = {
             leftArrowClass: 'mbsc-ic-material-keyboard-arrow-left',
             rightArrowClass: 'mbsc-ic-material-keyboard-arrow-right',
             onItemActivate: function(u6e) {
                 q6e.themes.material.addRipple(B6e(u6e.target), u6e.domEvent);
             },
             onItemDeactivate: function() {
                 q6e.themes.material.removeRipple();
             },
             onSlideStart: function(j6e) {
                 B6e('.mbsc-ripple', j6e.target).remove();
             },
             onSortStart: function(y6e) {
                 B6e('.mbsc-ripple', y6e.target).remove();
             }
         };
     }());
     (function(I6e, b6e, Z6e) {
         var v6e = mobiscroll,
             J6e = v6e.$,
             e6e = J6e.extend,
             t6e = v6e.classes;
         t6e.MenuStrip = function(g6e, k2e) {
             var h6e, l6e, G6e, N6e, W6e, S6e, o2e, n2e, z6e, c6e, L2e, Y2e, m6e, i6e, H6e, X6e, d6e, E6e, C6e, A6e = 1000,
                 V6e = this,
                 f6e = J6e(g6e);
             function T6e(x2e) {
                 clearTimeout(Y2e);
                 Y2e = setTimeout(function() {
                     O6e(x2e.type !== 'load');
                 }, 200);
             }
             function R6e(U2e, K2e) {
                 if (!U2e.length) {
                     return;
                 }
                 var M2e = U2e.offset().left,
                     p2e = U2e[0].offsetLeft,
                     D2e = U2e[0].offsetWidth,
                     r2e = l6e.offset().left;
                 h6e = U2e;
                 if (K2e === Z6e) {
                     K2e = !c6e;
                 }
                 if (m6e && K2e) {
                     if (c6e) {
                         if (U2e.attr('data-selected')) {
                             w6e(U2e);
                         } else {
                             Q6e(U2e);
                         }
                     } else {
                         w6e(J6e('.mbsc-ms-item-sel', f6e));
                         Q6e(U2e);
                     }
                 }
                 if (X6e == 'a') {
                     if (M2e < r2e) {
                         H6e.scroll(-p2e, A6e, true);
                     } else if (M2e + D2e > r2e + S6e) {
                         H6e.scroll(S6e - p2e - D2e, A6e, true);
                     }
                 } else {
                     H6e.scroll(S6e / 2 - p2e - D2e / 2, A6e, true);
                 }
                 if (K2e) {
                     C6e('onItemTap', {
                         target: U2e[0]
                     });
                 }
             }
             function Q6e(s2e) {
                 s2e.addClass(i6e).attr('data-selected', 'true').attr('aria-selected', 'true');
             }
             function w6e(a2e) {
                 a2e.removeClass(i6e).removeAttr('data-selected').removeAttr('aria-selected');
             }
             function P6e(q2e) {
                 if (typeof q2e !== 'object') {
                     q2e = f6e.children('[data-id="' + q2e + '"]');
                 }
                 return J6e(q2e);
             }
             function F2e() {
                 C6e('onMarkupInit');
                 f6e.children().each(function(t2e) {
                     var J2e, u2e, B2e = J6e(this),
                         j2e = m6e && B2e.attr('data-selected') == 'true',
                         v2e = B2e.attr('data-disabled') == 'true',
                         y2e = B2e.attr('data-icon');
                     if (t2e === 0) {
                         G6e = B2e;
                     }
                     if (m6e && !c6e && j2e) {
                         h6e = B2e;
                     }
                     if (B2e.children().length !== 1) {
                         J6e('<span></span>').append(B2e.contents()).appendTo(B2e);
                     }
                     u2e = B2e.children().eq(0);
                     if (y2e) {
                         o2e = true;
                     }
                     if (u2e.hasClass('mbsc-ms-item-i')) {
                         return;
                     }
                     if (u2e.html()) {
                         n2e = true;
                     }
                     J2e = J6e('<span class="mbsc-ms-item-i-t"><span class="mbsc-ms-item-i-c"></span></span>');
                     J2e.find('.mbsc-ms-item-i-c').append(u2e.contents());
                     u2e.addClass('mbsc-ms-item-i' + (y2e ? ' mbsc-ms-ic mbsc-ic mbsc-ic-' + y2e : '')).append(J2e);
                     B2e.attr('data-role', 'button').attr('aria-selected', j2e ? 'true' : null).attr('aria-disabled', v2e ? 'true' : null).addClass('mbsc-ms-item mbsc-btn-e ' + (d6e.itemClass || '') + (j2e ? i6e : '') + (v2e ? ' mbsc-btn-d ' + (d6e.disabledClass || '') : ''));
                 });
                 if (o2e) {
                     l6e.addClass('mbsc-ms-icons');
                 }
                 if (n2e) {
                     l6e.addClass('mbsc-ms-txt');
                 }
             }
             function O6e(Z2e, b2e) {
                 var e2e = d6e.itemWidth,
                     I2e = d6e.layout;
                 V6e.contWidth = S6e = l6e.width();
                 if (Z2e && L2e === S6e || !S6e) {
                     return;
                 }
                 L2e = S6e;
                 if (v6e.util.isNumeric(I2e)) {
                     z6e = S6e ? S6e / I2e : e2e;
                     if (z6e < e2e) {
                         I2e = 'liquid';
                     }
                 }
                 if (e2e) {
                     if (I2e == 'liquid') {
                         z6e = S6e ? S6e / Math.min(Math.floor(S6e / e2e), f6e.children().length) : e2e;
                     } else if (I2e == 'fixed') {
                         z6e = e2e;
                     }
                 }
                 if (z6e) {
                     f6e.children().css('width', z6e + 'px');
                 }
                 f6e.contents().filter(function() {
                     return this.nodeType == 3 && !/\S/.test(this.nodeValue);
                 }).remove();
                 V6e.totalWidth = E6e = f6e.width();
                 e6e(H6e.settings, {
                     contSize: S6e,
                     maxSnapScroll: d6e.paging ? 1 : false,
                     maxScroll: 0,
                     minScroll: E6e > S6e ? S6e - E6e : 0,
                     snap: d6e.paging ? S6e : d6e.snap ? z6e || '.mbsc-ms-item' : false,
                     elastic: E6e > S6e ? z6e || S6e : false
                 });
                 H6e.refresh(b2e);
             }
             t6e.Base.call(this, g6e, k2e, true);
             V6e.navigate = function(V2e, f2e) {
                 R6e(P6e(V2e), f2e);
             };
             V6e.next = function(d2e) {
                 var S2e = h6e ? h6e.next() : G6e;
                 if (S2e.length) {
                     h6e = S2e;
                     R6e(h6e, d2e);
                 }
             };
             V6e.prev = function(h2e) {
                 var l2e = h6e ? h6e.prev() : G6e;
                 if (l2e.length) {
                     h6e = l2e;
                     R6e(h6e, h2e);
                 }
             };
             V6e.select = function(C2e) {
                 if (!c6e) {
                     w6e(J6e('.mbsc-ms-item-sel', f6e));
                 }
                 Q6e(P6e(C2e));
             };
             V6e.deselect = function(z2e) {
                 w6e(P6e(z2e));
             };
             V6e.enable = function(H2e) {
                 P6e(H2e).removeClass('mbsc-btn-d').removeAttr('data-disabled').removeAttr('aria-disabled');
             };
             V6e.disable = function(c2e) {
                 P6e(c2e).addClass('mbsc-btn-d').attr('data-disabled', 'true').attr('aria-disabled', 'true');
             };
             V6e.refresh = V6e.position = function(P2e) {
                 f6e.height('');
                 F2e();
                 O6e(false, P2e);
                 f6e.height(f6e.height());
             };
             V6e._init = function() {
                 N6e = J6e(d6e.context == 'body' ? I6e : d6e.context);
                 d6e.select = V6e.remote.menustrip.selectSetting;
                 d6e.variant = V6e.remote.menustrip.variantSetting;
                 d6e.snap = V6e.remote.menustrip.snapSetting;
                 X6e = V6e.remote.menustrip.style;
                 m6e = V6e.remote.menustrip.select;
                 c6e = V6e.remote.menustrip.multiple;
                 i6e = V6e.remote.menustrip.selectedClass;
                 W6e = V6e.remote.menustrip.contClass;
                 if (!l6e) {
                     l6e = J6e('<div class="' + W6e + '"><div class="mbsc-ms-sc"></div></div>').insertAfter(f6e);
                     l6e.find('.mbsc-ms-sc').append(f6e);
                     H6e = new v6e.classes.ScrollView(l6e[0], {
                         axis: 'X',
                         contSize: 0,
                         maxScroll: 0,
                         maxSnapScroll: 1,
                         minScroll: 0,
                         snap: 1,
                         elastic: 1,
                         rtl: d6e.rtl,
                         mousewheel: d6e.mousewheel,
                         onBtnTap: function(R2e) {
                             R6e(J6e(R2e.target), true);
                         },
                         onGestureStart: function(m2e) {
                             C6e('onGestureStart', m2e);
                         },
                         onGestureEnd: function(w2e) {
                             C6e('onGestureEnd', w2e);
                         },
                         onMove: function(E2e) {
                             C6e('onMove', E2e);
                         },
                         onAnimationStart: function(i2e) {
                             C6e('onAnimationStart', i2e);
                         },
                         onAnimationEnd: function(A2e) {
                             C6e('onAnimationEnd', A2e);
                         }
                     });
                 } else {
                     f6e.height('');
                     l6e.attr('class', W6e);
                 }
                 f6e.css('display', '').addClass('mbsc-ms ' + (d6e.groupClass || ''));
                 F2e();
                 C6e('onMarkupReady', {
                     target: l6e[0]
                 });
                 f6e.height(f6e.height());
                 O6e();
                 l6e.find('img').on('load', T6e);
                 N6e.on('orientationchange resize', T6e);
             };
             V6e._destroy = function() {
                 N6e.off('orientationchange resize', T6e);
                 f6e.height('').insertAfter(l6e).find('.mbsc-ms-item').width('');
                 l6e.remove();
                 H6e.destroy();
             };
             d6e = V6e.settings;
             C6e = V6e.trigger;
             V6e.init(k2e);
         };
         t6e.MenuStrip.prototype = {
             _class: 'menustrip',
             _hasDef: true,
             _hasTheme: true,
             _defaults: {
                 context: 'body',
                 type: 'options',
                 display: 'inline',
                 layout: 'liquid'
             }
         };
         v6e.presetShort('menustrip', 'MenuStrip');
     }(window, document));
     (function() {
         mobiscroll.themes.menustrip['android-holo'] = {};
     }());
     (function() {
         mobiscroll.themes.menustrip.bootstrap = {
             wrapperClass: 'popover panel panel-default',
             groupClass: 'btn-group',
             activeClass: 'btn-primary',
             disabledClass: 'disabled',
             itemClass: 'btn btn-default'
         };
     }());
     (function() {
         mobiscroll.themes.menustrip.ios = {};
     }());
     (function() {
         var N2e = mobiscroll.$,
             W2e = N2e.mobile && N2e.mobile.version && N2e.mobile.version.match(/1\.4/);
         mobiscroll.themes.menustrip.jqm = {
             activeClass: 'ui-btn-active',
             disabledClass: 'ui-state-disabled',
             onThemeLoad: function(G2e) {
                 var O2e = G2e.settings,
                     T2e = O2e.jqmSwatch || (W2e ? 'a' : 'c');
                 O2e.itemClass = 'ui-btn ui-btn-up-' + T2e;
                 O2e.wrapperClass = 'ui-bar-' + T2e;
             }
         };
     }());
     (function() {
         var Q2e = mobiscroll.$;
         mobiscroll.themes.menustrip.material = {
             onInit: function() {
                 mobiscroll.themes.material.initRipple(Q2e(this), '.mbsc-ms-item', 'mbsc-btn-d', 'mbsc-btn-nhl');
             },
             onMarkupInit: function() {
                 Q2e('.mbsc-ripple', this).remove();
             }
         };
     }());
     (function() {
         mobiscroll.themes.menustrip.wp = {};
     }());
     (function(g2e) {
         var Y3e = mobiscroll,
             X2e = Y3e.$,
             L3e = {
                 batch: 50,
                 min: 0,
                 max: 100,
                 defaultUnit: '',
                 units: null,
                 unitNames: null,
                 invalid: [],
                 sign: false,
                 step: 0.05,
                 scale: 2,
                 convert: function(n3e) {
                     return n3e;
                 },
                 signText: '&nbsp;',
                 wholeText: 'Whole',
                 fractionText: 'Fraction',
                 unitText: 'Unit'
             };
         Y3e.presets.scroller.measurement = function(J3e) {
             var T3e = X2e.extend({}, J3e.settings),
                 o3e = X2e.extend(J3e.settings, L3e, T3e),
                 S3e = {},
                 Z3e = [
                     []
                 ],
                 B3e = {},
                 t3e = {},
                 f3e = {},
                 H3e = [],
                 F3e = o3e.sign,
                 r3e = o3e.units && o3e.units.length,
                 y3e = r3e ? o3e.defaultUnit || o3e.units[0] : '',
                 V3e = [],
                 x3e = o3e.step < 1,
                 p3e = o3e.step > 1 ? o3e.step : 1,
                 z3e = x3e ? Math.max(o3e.scale, (o3e.step + '').split('.')[1].length) : 1,
                 I3e = Math.pow(10, z3e),
                 q3e = Math.round(x3e ? o3e.step * I3e : o3e.step),
                 N3e, U3e, v3e, i3e = -1,
                 j3e, K3e, b3e, a3e, s3e, D3e, u3e, w3e, P3e, l3e = 0,
                 h3e = 0,
                 C3e, k3e, M3e = 0;
             function O3e(Q3e) {
                 return Math.max(D3e, Math.min(u3e, x3e ? Q3e < 0 ? Math.ceil(Q3e) : Math.floor(Q3e) : R3e(Math.round(Q3e - l3e), q3e) + l3e));
             }
             function c3e(X3e) {
                 return x3e ? R3e((Math.abs(X3e) - Math.abs(O3e(X3e))) * I3e - h3e, q3e) + h3e : 0;
             }
             function d3e(g3e) {
                 var Y9e = O3e(g3e),
                     L9e = c3e(g3e),
                     n9e = g3e < 0 ? '-' : '+';
                 if (L9e >= I3e) {
                     if (g3e < 0) {
                         Y9e--;
                     } else {
                         Y9e++;
                     }
                     L9e = 0;
                 }
                 return [n9e, Y9e, L9e];
             }
             function A3e(o9e) {
                 var k9e = +o9e[K3e],
                     F9e = x3e ? o9e[j3e] / I3e * (k9e < 0 ? -1 : 1) : 0;
                 return (F3e && o9e[0] == '-' ? -1 : 1) * (k9e + F9e);
             }
             function R3e(U9e, x9e) {
                 return Math.round(U9e / x9e) * x9e;
             }
             function G3e(K9e, p9e) {
                 K9e = K9e + '';
                 while (K9e.length < p9e) {
                     K9e = '0' + K9e;
                 }
                 return K9e;
             }
             function e3e(D9e, M9e, r9e) {
                 if (M9e === r9e || !o3e.convert) {
                     return D9e;
                 }
                 return o3e.convert.call(this, D9e, M9e, r9e);
             }
             function E3e(s9e, a9e, q9e) {
                 s9e = s9e > q9e ? q9e : s9e;
                 s9e = s9e < a9e ? a9e : s9e;
                 return s9e;
             }
             function m3e(j9e) {
                 var B9e, u9e;
                 a3e = e3e(o3e.min, y3e, j9e);
                 s3e = e3e(o3e.max, y3e, j9e);
                 if (x3e) {
                     D3e = a3e < 0 ? Math.ceil(a3e) : Math.floor(a3e);
                     u3e = s3e < 0 ? Math.ceil(s3e) : Math.floor(s3e);
                     w3e = c3e(a3e);
                     P3e = c3e(s3e);
                 } else {
                     D3e = Math.round(a3e);
                     u3e = Math.round(s3e);
                     u3e = D3e + Math.floor((u3e - D3e) / q3e) * q3e;
                     l3e = D3e % q3e;
                 }
                 B9e = D3e;
                 u9e = u3e;
                 if (F3e) {
                     u9e = Math.abs(B9e) > Math.abs(u9e) ? Math.abs(B9e) : Math.abs(u9e);
                     B9e = B9e < 0 ? 0 : B9e;
                 }
                 t3e.min = B9e < 0 ? Math.ceil(B9e / p3e) : Math.floor(B9e / p3e);
                 t3e.max = u9e < 0 ? Math.ceil(u9e / p3e) : Math.floor(u9e / p3e);
             }
             function W3e(y9e) {
                 return A3e(y9e).toFixed(x3e ? z3e : 0) + (r3e ? ' ' + V3e[y9e[b3e]] : '');
             }
             J3e.setVal = function(J9e, v9e, t9e, e9e, I9e) {
                 J3e._setVal(X2e.isArray(J9e) ? W3e(J9e) : J9e, v9e, t9e, e9e, I9e);
             };
             if (o3e.units) {
                 for (k3e = 0; k3e < o3e.units.length; ++k3e) {
                     C3e = o3e.units[k3e];
                     V3e.push(o3e.unitNames ? o3e.unitNames[C3e] || C3e : C3e);
                 }
             }
             if (F3e) {
                 F3e = false;
                 if (r3e) {
                     for (k3e = 0; k3e < o3e.units.length; k3e++) {
                         if (e3e(o3e.min, y3e, o3e.units[k3e]) < 0) {
                             F3e = true;
                         }
                     }
                 } else {
                     F3e = o3e.min < 0;
                 }
             }
             if (F3e) {
                 Z3e[0].push({
                     data: ['-', '+'],
                     label: o3e.signText
                 });
                 i3e = M3e++;
             }
             t3e = {
                 label: o3e.wholeText,
                 data: function(Z9e) {
                     return D3e % p3e + Z9e * p3e;
                 },
                 getIndex: function(b9e) {
                     return Math.round((b9e - D3e % p3e) / p3e);
                 }
             };
             Z3e[0].push(t3e);
             K3e = M3e++;
             m3e(y3e);
             if (x3e) {
                 Z3e[0].push(f3e);
                 f3e.data = [];
                 f3e.label = o3e.fractionText;
                 for (k3e = h3e; k3e < I3e; k3e += q3e) {
                     H3e.push(k3e);
                     f3e.data.push({
                         value: k3e,
                         display: '.' + G3e(k3e, z3e)
                     });
                 }
                 j3e = M3e++;
                 N3e = Math.ceil(100 / q3e);
                 if (o3e.invalid && o3e.invalid.length) {
                     X2e.each(o3e.invalid, function(S9e, f9e) {
                         var V9e = f9e > 0 ? Math.floor(f9e) : Math.ceil(f9e);
                         if (V9e === 0) {
                             V9e = f9e <= 0 ? -0.001 : 0.001;
                         }
                         B3e[V9e] = (B3e[V9e] || 0) + 1;
                         if (f9e === 0) {
                             V9e = 0.001;
                             B3e[V9e] = (B3e[V9e] || 0) + 1;
                         }
                     });
                     X2e.each(B3e, function(d9e, l9e) {
                         if (l9e < N3e) {
                             delete B3e[d9e];
                         } else {
                             B3e[d9e] = d9e;
                         }
                     });
                 }
             }
             if (r3e) {
                 S3e = {
                     data: [],
                     label: o3e.unitText,
                     circular: false
                 };
                 for (k3e = 0; k3e < o3e.units.length; k3e++) {
                     S3e.data.push({
                         value: k3e,
                         display: V3e[k3e]
                     });
                 }
                 Z3e[0].push(S3e);
             }
             b3e = M3e;
             return {
                 wheels: Z3e,
                 minWidth: F3e && x3e ? 70 : 80,
                 showLabel: false,
                 formatValue: W3e,
                 parseValue: function(c9e) {
                     var R9e = (typeof c9e === 'number' ? c9e + '' : c9e) || o3e.defaultValue,
                         P9e = (R9e + '').split(' '),
                         C9e = +P9e[0],
                         H9e = [],
                         z9e, h9e = '';
                     if (r3e) {
                         h9e = X2e.inArray(P9e[1], V3e);
                         h9e = h9e == -1 ? X2e.inArray(y3e, o3e.units) : h9e;
                         h9e = h9e == -1 ? 0 : h9e;
                     }
                     v3e = r3e ? o3e.units[h9e] : '';
                     m3e(v3e);
                     C9e = isNaN(C9e) ? 0 : C9e;
                     C9e = E3e(C9e, a3e, s3e);
                     z9e = d3e(C9e);
                     z9e[1] = E3e(z9e[1], D3e, u3e);
                     U3e = C9e;
                     if (F3e) {
                         H9e[0] = z9e[0];
                         z9e[1] = Math.abs(z9e[1]);
                     }
                     H9e[K3e] = z9e[1];
                     if (x3e) {
                         H9e[j3e] = z9e[2];
                     }
                     if (r3e) {
                         H9e[b3e] = h9e;
                     }
                     return H9e;
                 },
                 onCancel: function() {
                     U3e = g2e;
                 },
                 validate: function(G9e) {
                     var N9e, w9e, X9e, W9e, T9e, m9e = G9e.values,
                         A9e = G9e.index,
                         Y8e = G9e.direction,
                         O9e = {},
                         E9e = [],
                         Q9e = {},
                         i9e = r3e ? o3e.units[m9e[b3e]] : '';
                     if (F3e && A9e === 0) {
                         U3e = Math.abs(U3e) * (m9e[0] == '-' ? -1 : 1);
                     }
                     if (A9e === K3e || A9e === j3e && x3e || U3e === g2e || A9e === g2e) {
                         U3e = A3e(m9e);
                         v3e = i9e;
                     }
                     if (r3e && (A9e === b3e && v3e !== i9e) || A9e === g2e) {
                         m3e(i9e);
                         U3e = e3e(U3e, v3e, i9e);
                         v3e = i9e;
                         w9e = d3e(U3e);
                         if (A9e !== g2e) {
                             Q9e[K3e] = t3e;
                             J3e.changeWheel(Q9e);
                         }
                         if (F3e) {
                             m9e[0] = w9e[0];
                         }
                     }
                     E9e[K3e] = [];
                     if (F3e) {
                         E9e[0] = [];
                         if (a3e > 0) {
                             E9e[0].push('-');
                             m9e[0] = '+';
                         }
                         if (s3e < 0) {
                             E9e[0].push('+');
                             m9e[0] = '-';
                         }
                         T9e = Math.abs(m9e[0] == '-' ? D3e : u3e);
                         for (M3e = T9e + p3e; M3e < T9e + 20 * p3e; M3e += p3e) {
                             E9e[K3e].push(M3e);
                             O9e[M3e] = true;
                         }
                     }
                     U3e = E3e(U3e, a3e, s3e);
                     w9e = d3e(U3e);
                     X9e = F3e ? Math.abs(w9e[1]) : w9e[1];
                     N9e = F3e ? m9e[0] == '-' : U3e < 0;
                     m9e[K3e] = X9e;
                     if (N9e) {
                         w9e[0] = '-';
                     }
                     if (x3e) {
                         m9e[j3e] = w9e[2];
                     }
                     X2e.each(x3e ? B3e : o3e.invalid, function(k8e, o8e) {
                         if (F3e && N9e) {
                             if (o8e <= 0) {
                                 o8e = Math.abs(o8e);
                             } else {
                                 return;
                             }
                         }
                         o8e = R3e(e3e(o8e, y3e, i9e), x3e ? 1 : q3e);
                         O9e[o8e] = true;
                         E9e[K3e].push(o8e);
                     });
                     m9e[K3e] = J3e.getValidValue(K3e, X9e, Y8e, O9e);
                     w9e[1] = m9e[K3e] * (F3e && N9e ? -1 : 1);
                     if (x3e) {
                         E9e[j3e] = [];
                         var g9e = F3e ? m9e[0] + m9e[1] : (U3e < 0 ? '-' : '+') + Math.abs(w9e[1]),
                             n8e = (a3e < 0 ? '-' : '+') + Math.abs(D3e),
                             L8e = (s3e < 0 ? '-' : '+') + Math.abs(u3e);
                         if (g9e === n8e) {
                             X2e(H3e).each(function(x8e, F8e) {
                                 if (N9e ? F8e > w3e : F8e < w3e) {
                                     E9e[j3e].push(F8e);
                                 }
                             });
                         }
                         if (g9e === L8e) {
                             X2e(H3e).each(function(K8e, U8e) {
                                 if (N9e ? U8e < P3e : U8e > P3e) {
                                     E9e[j3e].push(U8e);
                                 }
                             });
                         }
                         X2e.each(o3e.invalid, function(D8e, p8e) {
                             W9e = d3e(e3e(p8e, y3e, i9e));
                             if ((w9e[0] === W9e[0] || w9e[1] === 0 && W9e[1] === 0 && W9e[2] === 0) && w9e[1] === W9e[1]) {
                                 E9e[j3e].push(W9e[2]);
                             }
                         });
                     }
                     return {
                         disabled: E9e,
                         valid: m9e
                     };
                 }
             };
         };
         Y3e.presetShort('measurement');
     }());
     (function() {
         var M8e = mobiscroll,
             r8e = M8e.$,
             s8e = M8e.presets.scroller,
             q8e = {
                 min: 0,
                 max: 100,
                 defaultUnit: 'km',
                 units: ['m', 'km', 'in', 'ft', 'yd', 'mi']
             },
             a8e = {
                 mm: 0.001,
                 cm: 0.01,
                 dm: 0.1,
                 m: 1,
                 dam: 10,
                 hm: 100,
                 km: 1000,
                 'in': 0.0254,
                 ft: 0.3048,
                 yd: 0.9144,
                 ch: 20.1168,
                 fur: 201.168,
                 mi: 1609.344,
                 lea: 4828.032
             };
         M8e.presetShort('distance');
         s8e.distance = function(B8e) {
             var u8e = r8e.extend({}, q8e, B8e.settings);
             r8e.extend(B8e.settings, u8e, {
                 sign: false,
                 convert: function(j8e, y8e, J8e) {
                     return j8e * a8e[y8e] / a8e[J8e];
                 }
             });
             return s8e.measurement.call(this, B8e);
         };
     }());
     (function() {
         var v8e = mobiscroll,
             t8e = v8e.$,
             e8e = v8e.presets.scroller,
             Z8e = {
                 min: 0,
                 max: 100,
                 defaultUnit: 'N',
                 units: ['N', 'kp', 'lbf', 'pdl']
             },
             I8e = {
                 N: 1,
                 kp: 9.80665,
                 lbf: 4.448222,
                 pdl: 0.138255
             };
         v8e.presetShort('force');
         e8e.force = function(b8e) {
             var V8e = t8e.extend({}, Z8e, b8e.settings);
             t8e.extend(b8e.settings, V8e, {
                 sign: false,
                 convert: function(f8e, S8e, d8e) {
                     return f8e * I8e[S8e] / I8e[d8e];
                 }
             });
             return e8e.measurement.call(this, b8e);
         };
     }());
     (function() {
         var l8e = mobiscroll,
             h8e = l8e.$,
             C8e = l8e.presets.scroller,
             H8e = {
                 min: 0,
                 max: 1000,
                 defaultUnit: 'kg',
                 units: ['g', 'kg', 'oz', 'lb'],
                 unitNames: {
                     tlong: 't (long)',
                     tshort: 't (short)'
                 }
             },
             z8e = {
                 mg: 0.001,
                 cg: 0.01,
                 dg: 0.1,
                 g: 1,
                 dag: 10,
                 hg: 100,
                 kg: 1000,
                 t: 1000000,
                 drc: 1.7718452,
                 oz: 28.3495,
                 lb: 453.59237,
                 st: 6350.29318,
                 qtr: 12700.58636,
                 cwt: 50802.34544,
                 tlong: 1016046.9088,
                 tshort: 907184.74
             };
         l8e.presetShort('mass');
         C8e.mass = function(c8e) {
             var P8e = h8e.extend({}, H8e, c8e.settings);
             h8e.extend(c8e.settings, P8e, {
                 sign: false,
                 convert: function(R8e, m8e, w8e) {
                     return R8e * z8e[m8e] / z8e[w8e];
                 }
             });
             return C8e.measurement.call(this, c8e);
         };
     }());
     (function() {
         var E8e = mobiscroll,
             i8e = E8e.$,
             A8e = E8e.presets.scroller,
             W8e = {
                 min: 0,
                 max: 100,
                 defaultUnit: 'kph',
                 units: ['kph', 'mph', 'mps', 'fps', 'knot'],
                 unitNames: {
                     kph: 'km/h',
                     mph: 'mi/h',
                     mps: 'm/s',
                     fps: 'ft/s',
                     knot: 'knot'
                 }
             },
             N8e = {
                 kph: 1,
                 mph: 1.60934,
                 mps: 3.6,
                 fps: 1.09728,
                 knot: 1.852
             };
         E8e.presetShort('speed');
         A8e.speed = function(O8e) {
             var T8e = i8e.extend({}, W8e, O8e.settings);
             i8e.extend(O8e.settings, T8e, {
                 sign: false,
                 convert: function(G8e, Q8e, X8e) {
                     return G8e * N8e[Q8e] / N8e[X8e];
                 }
             });
             return A8e.measurement.call(this, O8e);
         };
     }());
     (function() {
         var g8e = mobiscroll,
             Y79 = g8e.$,
             L79 = g8e.presets.scroller,
             n79 = {
                 min: -20,
                 max: 40,
                 defaultUnit: 'c',
                 units: ['c', 'k', 'f', 'r'],
                 unitNames: {
                     c: 'Â°C',
                     k: 'K',
                     f: 'Â°F',
                     r: 'Â°R'
                 }
             },
             o79 = {
                 c2k: function(k79) {
                     return k79 + 273.15;
                 },
                 c2f: function(F79) {
                     return F79 * 9 / 5 + 32;
                 },
                 c2r: function(x79) {
                     return (x79 + 273.15) * 9 / 5;
                 },
                 k2c: function(U79) {
                     return U79 - 273.15;
                 },
                 k2f: function(K79) {
                     return K79 * 9 / 5 - 459.67;
                 },
                 k2r: function(p79) {
                     return p79 * 9 / 5;
                 },
                 f2c: function(D79) {
                     return (D79 - 32) * 5 / 9;
                 },
                 f2k: function(M79) {
                     return (M79 + 459.67) * 5 / 9;
                 },
                 f2r: function(r79) {
                     return r79 + 459.67;
                 },
                 r2c: function(s79) {
                     return (s79 - 491.67) * 5 / 9;
                 },
                 r2k: function(a79) {
                     return a79 * 5 / 9;
                 },
                 r2f: function(q79) {
                     return q79 - 459.67;
                 }
             };
         g8e.presetShort('temperature');
         L79.temperature = function(B79) {
             var u79 = Y79.extend({}, n79, B79.settings);
             Y79.extend(B79.settings, u79, {
                 sign: true,
                 convert: function(j79, y79, J79) {
                     return o79[y79 + '2' + J79](j79);
                 }
             });
             return L79.measurement.call(this, B79);
         };
     }());
     (function() {
         var v79 = mobiscroll,
             t79 = v79.presets.scroller;
         t79.number = t79.measurement;
         v79.presetShort('number');
     }());
     (function(b79) {
         var Z79 = mobiscroll,
             e79 = Z79.$,
             V79 = Z79.presets.scroller,
             I79 = Z79.util.datetime,
             f79 = Z79.util,
             S79 = f79.testTouch,
             d79 = {
                 autoCorrect: true,
                 showSelector: true,
                 minRange: 1,
                 rangeTap: true,
                 fromText: 'Start',
                 toText: 'End'
             };
         Z79.presetShort('range');
         V79.range = function(h79) {
             function x19(a19, q19) {
                 if (a19) {
                     a19.setFullYear(q19.getFullYear());
                     a19.setMonth(q19.getMonth());
                     a19.setDate(q19.getDate());
                 }
             }
             function r19(B19) {
                 h79._startDate = m79 = H79;
                 h79._endDate = w79 = z79;
                 if (l79.startInput) {
                     e79(l79.startInput).val(i79);
                     if (B19) {
                         e79(l79.startInput).trigger('change');
                     }
                 }
                 if (l79.endInput) {
                     e79(l79.endInput).val(E79);
                     if (B19) {
                         e79(l79.endInput).trigger('change');
                     }
                 }
             }
             function L19(j19, y19) {
                 var u19 = true;
                 if (j19 && H79 && z79) {
                     if (z79 - H79 > l79.maxRange - 1) {
                         if (C79) {
                             H79 = new Date(z79 - l79.maxRange + 1);
                         } else {
                             z79 = new Date(+H79 + l79.maxRange - 1);
                         }
                     }
                     if (z79 - H79 < l79.minRange - 1) {
                         if (C79) {
                             H79 = new Date(z79 - l79.minRange + 1);
                         } else {
                             z79 = new Date(+H79 + l79.minRange - 1);
                         }
                     }
                 }
                 if (!H79 || !z79) {
                     u19 = false;
                 }
                 if (y19) {
                     M19();
                 }
                 return u19;
             }
             function s19() {
                 return H79 && z79 ? Math.max(1, Math.round((new Date(z79).setHours(0, 0, 0, 0) - new Date(H79).setHours(0, 0, 0, 0)) / 86400000) + 1) : 0;
             }
             function D19(J19) {
                 J19.addClass('mbsc-range-btn-sel').attr('aria-checked', 'true').find('.mbsc-range-btn').addClass(G79);
             }
             function o19() {
                 if (n19 && c79) {
                     e79('.mbsc-range-btn-c', c79).removeClass('mbsc-range-btn-sel').removeAttr('aria-checked').find('.mbsc-range-btn', c79).removeClass(G79);
                     D19(e79('.mbsc-range-btn-c', c79).eq(C79));
                 }
             }
             function M19() {
                 var v19, Z19, t19, b19, e19, I19 = 0,
                     V19 = P79 || !C79 ? ' mbsc-cal-day-hl mbsc-cal-sel-start' : ' mbsc-cal-sel-start',
                     f19 = P79 || C79 ? ' mbsc-cal-day-hl mbsc-cal-sel-end' : ' mbsc-cal-sel-end';
                 i79 = H79 ? I79.formatDate(R79, H79, l79) : '';
                 E79 = z79 ? I79.formatDate(R79, z79, l79) : '';
                 if (c79) {
                     e79('.mbsc-range-btn-v-start', c79).html(i79 || '&nbsp;');
                     e79('.mbsc-range-btn-v-end', c79).html(E79 || '&nbsp;');
                     v19 = H79 ? new Date(H79) : null;
                     t19 = z79 ? new Date(z79) : null;
                     if (!v19 && t19) {
                         v19 = new Date(t19);
                     }
                     if (!t19 && v19) {
                         t19 = new Date(v19);
                     }
                     e19 = C79 ? t19 : v19;
                     e79('.mbsc-cal-table .mbsc-cal-day-sel .mbsc-cal-day-i', c79).removeClass(G79);
                     e79('.mbsc-cal-table .mbsc-cal-day-hl', c79).removeClass(X79);
                     e79('.mbsc-cal-table .mbsc-cal-day-sel', c79).removeClass('mbsc-cal-day-sel mbsc-cal-sel-start mbsc-cal-sel-end').removeAttr('aria-selected');
                     if (v19 && t19) {
                         Z19 = v19.setHours(0, 0, 0, 0);
                         b19 = t19.setHours(0, 0, 0, 0);
                         while (t19 >= v19 && I19 < 84) {
                             e79('.mbsc-cal-day[data-full="' + e19.getFullYear() + '-' + e19.getMonth() + '-' + e19.getDate() + '"]', c79).addClass('mbsc-cal-day-sel' + (e19.getTime() === Z19 ? V19 : '') + (e19.getTime() === b19 ? f19 : '')).attr('aria-selected', 'true').find('.mbsc-cal-day-i ').addClass(G79);
                             e19.setDate(e19.getDate() + (C79 ? -1 : 1));
                             I19++;
                         }
                     }
                 }
             }
             var T79, c79, W79, R79, g79, N79, O79, i79, E79, H79, z79, U19, K19, F19, n19, m79 = h79._startDate,
                 w79 = h79._endDate,
                 C79 = 0,
                 Q79 = new Date(),
                 p19 = e79.extend({}, h79.settings),
                 l79 = e79.extend(h79.settings, d79, p19),
                 Y19 = l79.anchor,
                 P79 = l79.rangeTap,
                 G79 = l79.activeClass || '',
                 k19 = 'mbsc-fr-btn-d ' + (l79.disabledClass || ''),
                 X79 = 'mbsc-cal-day-hl',
                 A79 = l79.defaultValue === null ? [] : l79.defaultValue || [new Date(Q79.setHours(0, 0, 0, 0)), new Date(Q79.getFullYear(), Q79.getMonth(), Q79.getDate() + 6, 23, 59, 59, 999)];
             if (P79) {
                 l79.tabs = true;
             }
             g79 = V79.calbase.call(this, h79);
             T79 = e79.extend({}, g79);
             R79 = h79.format;
             U19 = l79.controls.join('') === 'time';
             n19 = l79.controls.length == 1 && l79.controls[0] == 'calendar' ? l79.showSelector : true;
             if (l79.startInput) {
                 K19 = e79(l79.startInput).prop('readonly');
                 h79.attachShow(e79(l79.startInput).prop('readonly', true), function() {
                     C79 = 0;
                     l79.anchor = Y19 || e79(l79.startInput);
                 });
             }
             if (l79.endInput) {
                 F19 = e79(l79.endInput).prop('readonly');
                 h79.attachShow(e79(l79.endInput).prop('readonly', true), function() {
                     C79 = 1;
                     l79.anchor = Y19 || e79(l79.endInput);
                 });
             }
             h79.setVal = function(l19, C19, z19, h19, H19) {
                 var S19 = l19 || [],
                     d19 = l19;
                 if (S19[0] === b79 || S19[0] === null || S19[0].getTime) {
                     O79 = true;
                     H79 = S19[0] || null;
                     i79 = H79 ? I79.formatDate(R79, H79, l79) : '';
                     if (!C79) {
                         d19 = T79.parseValue(i79, h79);
                     }
                 }
                 if (S19[1] === b79 || S19[1] === null || S19[1].getTime) {
                     O79 = true;
                     z79 = S19[1] || null;
                     E79 = z79 ? I79.formatDate(R79, z79, l79) : '';
                     if (C79) {
                         d19 = T79.parseValue(E79, h79);
                     }
                 }
                 if (!h19) {
                     h79._startDate = m79 = H79;
                     h79._endDate = w79 = z79;
                 }
                 h79._setVal(d19, C19, z19, h19, H19);
             };
             h79.getVal = function(c19) {
                 return c19 ? [H79, z79] : h79._hasValue ? [m79, w79] : null;
             };
             h79.getDayProps = function(R19) {
                 var P19 = H79 ? new Date(H79.getFullYear(), H79.getMonth(), H79.getDate()) : null,
                     m19 = z79 ? new Date(z79.getFullYear(), z79.getMonth(), z79.getDate()) : null;
                 return {
                     selected: P19 && m19 && R19 >= P19 && R19 <= z79,
                     cssClass: ((P79 || !C79) && P19 && P19.getTime() === R19.getTime() || (P79 || C79) && m19 && m19.getTime() === R19.getTime() ? X79 : '') + (P19 && P19.getTime() === R19.getTime() ? ' mbsc-cal-sel-start' : '') + (m19 && m19.getTime() === R19.getTime() ? ' mbsc-cal-sel-end' : '')
                 };
             };
             h79.setActiveDate = function(E19) {
                 var w19;
                 C79 = E19 == 'start' ? 0 : 1;
                 w19 = E19 == 'start' ? H79 : z79;
                 if (h79.isVisible()) {
                     o19();
                     if (!P79) {
                         e79('.mbsc-cal-table .mbsc-cal-day-hl', c79).removeClass(X79);
                         if (w19) {
                             e79('.mbsc-cal-day[data-full="' + w19.getFullYear() + '-' + w19.getMonth() + '-' + w19.getDate() + '"]', c79).addClass(X79);
                         }
                     }
                     if (w19) {
                         N79 = true;
                         h79.setDate(w19, false, 1000, true);
                     }
                 }
             };
             h79.getValue = h79.getVal;
             e79.extend(g79, {
                 highlight: false,
                 outerMonthChange: false,
                 formatValue: function() {
                     return i79 + (l79.endInput ? '' : E79 ? ' - ' + E79 : '');
                 },
                 parseValue: function(A19) {
                     var i19 = A19 ? A19.split(' - ') : [];
                     l79.defaultValue = A79[1];
                     if (l79.endInput) {
                         w79 = e79(l79.endInput).val() ? I79.parseDate(R79, e79(l79.endInput).val(), l79) : A79[1];
                     } else {
                         w79 = i19[1] ? I79.parseDate(R79, i19[1], l79) : A79[1];
                     }
                     l79.defaultValue = A79[0];
                     if (l79.startInput) {
                         m79 = e79(l79.startInput).val() ? I79.parseDate(R79, e79(l79.startInput).val(), l79) : A79[0];
                     } else {
                         m79 = i19[0] ? I79.parseDate(R79, i19[0], l79) : A79[0];
                     }
                     l79.defaultValue = A79[C79];
                     i79 = m79 ? I79.formatDate(R79, m79, l79) : '';
                     E79 = w79 ? I79.formatDate(R79, w79, l79) : '';
                     h79._startDate = m79;
                     h79._endDate = w79;
                     return T79.parseValue(C79 ? E79 : i79, h79);
                 },
                 onFill: function(N19) {
                     r19(N19.change);
                 },
                 onBeforeClose: function(W19) {
                     if (W19.button === 'set' && !L19(true, true)) {
                         h79.setActiveDate(C79 ? 'start' : 'end');
                         return false;
                     }
                 },
                 onHide: function() {
                     T79.onHide.call(h79);
                     C79 = 0;
                     c79 = null;
                     l79.anchor = Y19;
                 },
                 onClear: function() {
                     if (P79) {
                         C79 = 0;
                     }
                 },
                 onBeforeShow: function() {
                     l79.headerText = false;
                     H79 = m79;
                     z79 = w79;
                     if (l79.counter) {
                         l79.headerText = function() {
                             var O19 = s19();
                             return (O19 > 1 ? l79.selectedPluralText || l79.selectedText : l79.selectedText).replace(/{count}/, O19);
                         };
                     }
                     O79 = true;
                 },
                 onMarkupReady: function(T19) {
                     var G19;
                     c79 = e79(T19.target);
                     if (H79) {
                         N79 = true;
                         h79.setDate(H79, false, 0, true);
                         H79 = h79.getDate(true);
                     }
                     if (z79) {
                         N79 = true;
                         h79.setDate(z79, false, 0, true);
                         z79 = h79.getDate(true);
                     }
                     if (C79 && z79 || !C79 && H79) {
                         N79 = true;
                         h79.setDate(C79 ? z79 : H79, false, 0, true);
                     }
                     T79.onMarkupReady.call(this, T19);
                     c79.addClass('mbsc-range');
                     if (n19) {
                         G19 = '<div class="mbsc-range-btn-t" role="radiogroup">' + '<div class="mbsc-range-btn-c mbsc-range-btn-start"><div role="radio" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' + l79.fromText + '<div class="mbsc-range-btn-v mbsc-range-btn-v-start">' + (i79 || '&nbsp;') + '</div></div></div>' + '<div class="mbsc-range-btn-c mbsc-range-btn-end"><div role="radio" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' + l79.toText + '<div class="mbsc-range-btn-v mbsc-range-btn-v-end">' + (E79 || '&nbsp;') + '</div></div></div>' + '</div>';
                         e79('.mbsc-cal-tabs', c79).before(G19);
                         o19();
                     }
                     e79('.mbsc-range-btn-c', c79).on('touchstart click', function(Q19) {
                         if (S79(Q19, this)) {
                             h79.showMonthView();
                             h79.setActiveDate(e79(this).index() ? 'end' : 'start');
                         }
                     });
                 },
                 onDayChange: function(X19) {
                     X19.active = C79 ? 'end' : 'start';
                     W79 = true;
                 },
                 onSetDate: function(L09) {
                     var g19 = L09.date,
                         Y09 = h79.order;
                     if (!N79) {
                         if (Y09.h === b79) {
                             g19.setHours(C79 ? 23 : 0);
                         }
                         if (Y09.i === b79) {
                             g19.setMinutes(C79 ? 59 : 0);
                         }
                         if (Y09.s === b79) {
                             g19.setSeconds(C79 ? 59 : 0);
                         }
                         g19.setMilliseconds(C79 ? 999 : 0);
                         if (!O79 || W79) {
                             if (P79 && W79) {
                                 if (C79 == 1 && g19 < H79) {
                                     C79 = 0;
                                 }
                                 if (C79) {
                                     g19.setHours(23, 59, 59, 999);
                                 } else {
                                     g19.setHours(0, 0, 0, 0);
                                 }
                             }
                             if (C79) {
                                 z79 = new Date(g19);
                             } else {
                                 H79 = new Date(g19);
                             }
                             if (U19) {
                                 x19(H79, g19);
                                 x19(z79, g19);
                             }
                             if (P79 && W79 && !C79) {
                                 z79 = null;
                             }
                         }
                     }
                     h79._isValid = L19(O79 || W79 || l79.autoCorrect, !N79);
                     L09.active = C79 ? 'end' : 'start';
                     if (!N79 && P79) {
                         if (W79) {
                             C79 = C79 ? 0 : 1;
                         }
                         o19();
                     }
                     if (h79.isVisible()) {
                         if (h79._isValid) {
                             e79('.mbsc-fr-btn-s .mbsc-fr-btn', h79._markup).removeClass(k19);
                         } else {
                             e79('.mbsc-fr-btn-s .mbsc-fr-btn', h79._markup).addClass(k19);
                         }
                     }
                     W79 = false;
                     O79 = false;
                     N79 = false;
                 },
                 onTabChange: function(n09) {
                     if (n09.tab != 'calendar') {
                         h79.setDate(C79 ? z79 : H79, false, 1000, true);
                     }
                     L19(true, true);
                 },
                 onDestroy: function() {
                     e79(l79.startInput).prop('readonly', K19);
                     e79(l79.endInput).prop('readonly', F19);
                 }
             });
             return g79;
         };
     }());
     (function(F09) {
         var k09 = mobiscroll,
             o09 = k09.$,
             x09 = {
                 inputClass: '',
                 values: 5,
                 order: 'desc',
                 style: 'icon',
                 invalid: [],
                 icon: {
                     filled: 'star3',
                     empty: 'star3'
                 }
             };
         k09.presetShort('rating');
         k09.presets.scroller.rating = function(a09) {
             var f09 = o09.extend({}, a09.settings),
                 U09 = o09.extend(a09.settings, x09, f09),
                 D09 = o09(this),
                 v09 = this.id + '_dummy',
                 Z09 = o09('label[for="' + this.id + '"]').attr('for', v09),
                 S09 = U09.label !== F09 ? U09.label : Z09.length ? Z09.text() : D09.attr('name'),
                 j09 = U09.defaultValue,
                 I09 = [
                     []
                 ],
                 b09 = {
                     data: [],
                     label: S09,
                     circular: false
                 },
                 B09 = {},
                 p09 = [],
                 M09, J09 = false,
                 K09, s09, u09, t09, e09, V09, r09, y09, d09, q09 = U09.style === 'grade' ? 'circle' : 'icon';
             if (D09.is('select')) {
                 U09.values = {};
                 o09('option', D09).each(function() {
                     U09.values[o09(this).val()] = o09(this).text();
                 });
                 o09('#' + v09).remove();
             }
             if (o09.isArray(U09.values)) {
                 for (K09 = 0; K09 < U09.values.length; K09++) {
                     r09 = +U09.values[K09];
                     if (isNaN(r09)) {
                         r09 = K09 + 1;
                         J09 = true;
                     }
                     p09.push({
                         order: r09,
                         key: U09.values[K09],
                         value: U09.values[K09]
                     });
                 }
             } else if (o09.isPlainObject(U09.values)) {
                 K09 = 1;
                 J09 = true;
                 for (y09 in U09.values) {
                     r09 = +y09;
                     if (isNaN(r09)) {
                         r09 = K09;
                     }
                     p09.push({
                         order: r09,
                         key: y09,
                         value: U09.values[y09]
                     });
                     K09++;
                 }
             } else {
                 for (K09 = 1; K09 <= U09.values; K09++) {
                     p09.push({
                         order: K09,
                         key: K09,
                         value: K09
                     });
                 }
             }
             if (U09.showText === F09 && J09) {
                 U09.showText = true;
             }
             if (U09.icon.empty === F09) {
                 U09.icon.empty = U09.icon.filled;
             }
             p09.sort(function(l09, h09) {
                 return U09.order == 'desc' ? h09.order - l09.order : l09.order - h09.order;
             });
             d09 = U09.order == 'desc' ? p09[0].order : p09[p09.length - 1].order;
             for (K09 = 0; K09 < p09.length; K09++) {
                 V09 = p09[K09].order;
                 t09 = p09[K09].key;
                 e09 = p09[K09].value;
                 u09 = '';
                 for (s09 = 1; s09 < V09 + 1; s09++) {
                     u09 += '<span class="mbsc-rating-' + q09 + (q09 === 'circle' ? '' : ' mbsc-ic mbsc-ic-' + U09.icon.filled) + ' ">' + (q09 == 'circle' ? s09 : ' ') + '</span>';
                 }
                 for (s09 = V09 + 1; s09 <= d09; s09++) {
                     u09 += '<span class="mbsc-rating-' + q09 + (q09 === 'circle' ? ' mbsc-rating-circle-unf' : ' mbsc-ic mbsc-ic-' + (U09.icon.empty ? U09.icon.empty + ' mbsc-rating-icon-unf' : '') + (U09.icon.empty === U09.icon.filled ? ' mbsc-rating-icon-same' : '')) + '"></span>';
                 }
                 if (j09 === F09) {
                     j09 = t09;
                 }
                 u09 += U09.showText ? '<span class="mbsc-rating-txt">' + e09 + '</span>' : '';
                 b09.data.push({
                     value: t09,
                     display: u09,
                     label: e09
                 });
                 B09[t09] = e09;
             }
             if (D09.is('select')) {
                 M09 = o09('<input type="text" id="' + v09 + '" value="' + B09[D09.val()] + '" class="' + U09.inputClass + '" placeholder="' + (U09.placeholder || '') + '" readonly />').insertBefore(D09);
             }
             I09[0].push(b09);
             if (M09) {
                 a09.attachShow(M09);
             }
             if (D09.is('select')) {
                 D09.hide().closest('.ui-field-contain').trigger('create');
             }
             a09.getVal = function(z09) {
                 var C09 = a09._hasValue ? a09[z09 ? '_tempWheelArray' : '_wheelArray'][0] : null;
                 return k09.util.isNumeric(C09) ? +C09 : C09;
             };
             return {
                 anchor: M09,
                 wheels: I09,
                 headerText: false,
                 compClass: 'mbsc-rating',
                 setOnTap: true,
                 formatValue: function(H09) {
                     return B09[H09[0]];
                 },
                 parseValue: function(P09) {
                     var c09;
                     for (c09 in B09) {
                         if (M09 && c09 == P09 || !M09 && B09[c09] == P09) {
                             return [c09];
                         }
                     }
                     return [j09];
                 },
                 validate: function() {
                     return {
                         disabled: [U09.invalid]
                     };
                 },
                 onFill: function(R09) {
                     if (M09) {
                         M09.val(R09.valueText);
                         D09.val(a09._tempWheelArray[0]);
                     }
                 },
                 onDestroy: function() {
                     if (M09) {
                         M09.remove();
                     }
                     D09.show();
                 }
             };
         };
     }());
     (function(E09) {
         var w09 = mobiscroll,
             m09 = w09.$,
             i09 = {
                 autostart: false,
                 step: 1,
                 useShortLabels: false,
                 labels: ['Years', 'Months', 'Days', 'Hours', 'Minutes', 'Seconds', ''],
                 labelsShort: ['Yrs', 'Mths', 'Days', 'Hrs', 'Mins', 'Secs', ''],
                 startText: 'Start',
                 stopText: 'Stop',
                 resetText: 'Reset',
                 lapText: 'Lap',
                 hideText: 'Hide'
             };
         w09.presetShort('timer');
         w09.presets.scroller.timer = function(A09) {
             function t49(f49) {
                 return new Date(f49.getUTCFullYear(), f49.getUTCMonth(), f49.getUTCDate(), f49.getUTCHours(), f49.getUTCMinutes(), f49.getUTCSeconds(), f49.getUTCMilliseconds());
             }
             function V49(c49) {
                 var S49 = {};
                 if (B49 && G09[Y49].index > G09.days.index) {
                     var C49, h49, P49, z49, H49 = new Date(),
                         d49 = X09 ? H49 : g09,
                         l49 = X09 ? g09 : H49;
                     l49 = t49(l49);
                     d49 = t49(d49);
                     S49.years = d49.getFullYear() - l49.getFullYear();
                     S49.months = d49.getMonth() - l49.getMonth();
                     S49.days = d49.getDate() - l49.getDate();
                     S49.hours = d49.getHours() - l49.getHours();
                     S49.minutes = d49.getMinutes() - l49.getMinutes();
                     S49.seconds = d49.getSeconds() - l49.getSeconds();
                     S49.fract = (d49.getMilliseconds() - l49.getMilliseconds()) / 10;
                     for (C49 = Q09.length; C49 > 0; C49--) {
                         h49 = Q09[C49 - 1];
                         P49 = G09[h49];
                         z49 = Q09[m09.inArray(h49, Q09) - 1];
                         if (G09[z49] && S49[h49] < 0) {
                             S49[z49]--;
                             S49[h49] += z49 == 'months' ? 32 - new Date(d49.getFullYear(), d49.getMonth(), 32).getDate() : P49.until + 1;
                         }
                     }
                     if (Y49 == 'months') {
                         S49.months += S49.years * 12;
                         delete S49.years;
                     }
                 } else {
                     m09(Q09).each(function(m49, R49) {
                         if (G09[R49].index <= G09[Y49].index) {
                             S49[R49] = Math.floor(c49 / G09[R49].limit);
                             c49 -= S49[R49] * G09[R49].limit;
                         }
                     });
                 }
                 return S49;
             }
             function b49(i49) {
                 var A49 = 1,
                     w49 = G09[i49],
                     E49 = w49.wheel,
                     N49 = w49.prefix,
                     O49 = 0,
                     T49 = w49.until,
                     W49 = G09[Q09[m09.inArray(i49, Q09) - 1]];
                 if (w49.index <= G09[Y49].index && (!W49 || W49.limit > M49)) {
                     if (!o49[i49]) {
                         v49[0].push(E49);
                     }
                     o49[i49] = 1;
                     E49.data = [];
                     E49.label = w49.label || '';
                     E49.cssClass = 'mbsc-timer-whl-' + i49;
                     if (M49 >= w49.limit) {
                         A49 = Math.max(Math.round(M49 / w49.limit), 1);
                         p49 = A49 * w49.limit;
                     }
                     if (i49 == Y49) {
                         E49.min = 0;
                         E49.data = function(G49) {
                             return {
                                 value: G49,
                                 display: I49(G49, N49, w49.label)
                             };
                         };
                         E49.getIndex = function(Q49) {
                             return Q49;
                         };
                     } else {
                         for (r49 = O49; r49 <= T49; r49 += A49) {
                             E49.data.push({
                                 value: r49,
                                 display: I49(r49, N49, w49.label)
                             });
                         }
                     }
                 }
             }
             function I49(X49, g49, Y59) {
                 return (g49 || '') + (X49 < 10 ? '0' : '') + X49 + '<span class="mbsc-timer-lbl">' + Y59 + '</span>';
             }
             function F49(k59) {
                 var L59 = [],
                     n59, o59 = V49(k59);
                 m09(Q09).each(function(x59, F59) {
                     if (o49[F59]) {
                         n59 = Math.max(Math.round(M49 / G09[F59].limit), 1);
                         L59.push(Math.round(o59[F59] / n59) * n59);
                     }
                 });
                 return L59;
             }
             function J49(U59) {
                 if (B49) {
                     O09 = g09 - new Date();
                     if (O09 < 0) {
                         O09 *= -1;
                         X09 = true;
                     } else {
                         X09 = false;
                     }
                     W09 = 0;
                     U49 = true;
                 } else if (g09 !== E09) {
                     U49 = false;
                     O09 = g09 * 1000;
                     X09 = N09.mode != 'countdown';
                     if (U59) {
                         W09 = 0;
                     }
                 } else {
                     O09 = 0;
                     X09 = N09.mode != 'countdown';
                     U49 = X09;
                     if (U59) {
                         W09 = 0;
                     }
                 }
             }
             function y49() {
                 if (L49) {
                     m09('.mbsc-fr-w', T09).addClass('mbsc-timer-running mbsc-timer-locked');
                     m09('.mbsc-timer-btn-toggle-c > div', T09).text(N09.stopText);
                     if (A09.buttons.start.icon) {
                         m09('.mbsc-timer-btn-toggle-c > div', T09).removeClass('mbsc-ic-' + A09.buttons.start.icon);
                     }
                     if (A09.buttons.stop.icon) {
                         m09('.mbsc-timer-btn-toggle-c > div', T09).addClass('mbsc-ic-' + A09.buttons.stop.icon);
                     }
                     if (N09.mode == 'stopwatch') {
                         m09('.mbsc-timer-btn-resetlap-c > div', T09).text(N09.lapText);
                         if (A09.buttons.reset.icon) {
                             m09('.mbsc-timer-btn-resetlap-c > div', T09).removeClass('mbsc-ic-' + A09.buttons.reset.icon);
                         }
                         if (A09.buttons.lap.icon) {
                             m09('.mbsc-timer-btn-resetlap-c > div', T09).addClass('mbsc-ic-' + A09.buttons.lap.icon);
                         }
                     }
                 } else {
                     m09('.mbsc-fr-w', T09).removeClass('mbsc-timer-running');
                     m09('.mbsc-timer-btn-toggle-c > div', T09).text(N09.startText);
                     if (A09.buttons.start.icon) {
                         m09('.mbsc-timer-btn-toggle-c > div', T09).addClass('mbsc-ic-' + A09.buttons.start.icon);
                     }
                     if (A09.buttons.stop.icon) {
                         m09('.mbsc-timer-btn-toggle-c > div', T09).removeClass('mbsc-ic-' + A09.buttons.stop.icon);
                     }
                     if (N09.mode == 'stopwatch') {
                         m09('.mbsc-timer-btn-resetlap-c > div', T09).text(N09.resetText);
                         if (A09.buttons.reset.icon) {
                             m09('.mbsc-timer-btn-resetlap-c > div', T09).addClass('mbsc-ic-' + A09.buttons.reset.icon);
                         }
                         if (A09.buttons.lap.icon) {
                             m09('.mbsc-timer-btn-resetlap-c > div', T09).removeClass('mbsc-ic-' + A09.buttons.lap.icon);
                         }
                     }
                 }
             }
             var r49, u49, p49, x49, K49, D49, O09, W09, X09, T09, Z49, e49 = m09.extend({}, A09.settings),
                 N09 = m09.extend(A09.settings, i09, e49),
                 n49 = N09.useShortLabels ? N09.labelsShort : N09.labels,
                 j49 = ['toggle', 'resetlap'],
                 Q09 = ['years', 'months', 'days', 'hours', 'minutes', 'seconds', 'fract'],
                 G09 = {
                     'years': {
                         index: 6,
                         until: 10,
                         limit: 1000 * 60 * 60 * 24 * 365,
                         label: n49[0],
                         wheel: {}
                     },
                     'months': {
                         index: 5,
                         until: 11,
                         limit: 1000 * 60 * 60 * 24 * 30,
                         label: n49[1],
                         wheel: {}
                     },
                     'days': {
                         index: 4,
                         until: 31,
                         limit: 1000 * 60 * 60 * 24,
                         label: n49[2],
                         wheel: {}
                     },
                     'hours': {
                         index: 3,
                         until: 23,
                         limit: 1000 * 60 * 60,
                         label: n49[3],
                         wheel: {}
                     },
                     'minutes': {
                         index: 2,
                         until: 59,
                         limit: 1000 * 60,
                         label: n49[4],
                         wheel: {}
                     },
                     'seconds': {
                         index: 1,
                         until: 59,
                         limit: 1000,
                         label: n49[5],
                         wheel: {}
                     },
                     'fract': {
                         index: 0,
                         until: 99,
                         limit: 10,
                         label: n49[6],
                         prefix: '.',
                         wheel: {}
                     }
                 },
                 o49 = {},
                 a49 = [],
                 q49 = 0,
                 L49 = false,
                 k49 = true,
                 U49 = false,
                 M49 = Math.max(10, N09.step * 1000),
                 Y49 = N09.maxWheel,
                 s49 = N09.mode == 'stopwatch' || B49,
                 g09 = N09.targetTime,
                 B49 = g09 && g09.getTime !== E09,
                 v49 = [
                     []
                 ];
             A09.start = function() {
                 if (k49) {
                     A09.reset();
                 }
                 if (!L49) {
                     J49();
                     if (!U49 && W09 >= O09) {
                         return;
                     }
                     L49 = true;
                     k49 = false;
                     K49 = new Date();
                     x49 = W09;
                     N09.readonly = true;
                     A09.setVal(F49(X09 ? W09 : O09 - W09), true, true, false, 100);
                     u49 = setInterval(function() {
                         W09 = new Date() - K49 + x49;
                         A09.setVal(F49(X09 ? W09 : O09 - W09), true, true, false, Math.min(100, p49 - 10));
                         if (!U49 && W09 + p49 >= O09) {
                             clearInterval(u49);
                             setTimeout(function() {
                                 A09.stop();
                                 W09 = O09;
                                 A09.setVal(F49(X09 ? W09 : 0), true, true, false, 100);
                                 A09.trigger('onFinish', {
                                     time: O09
                                 });
                                 k49 = true;
                             }, O09 - W09);
                         }
                     }, p49);
                     y49();
                     A09.trigger('onStart');
                 }
             };
             A09.stop = function() {
                 if (L49) {
                     L49 = false;
                     clearInterval(u49);
                     W09 = new Date() - K49 + x49;
                     y49();
                     A09.trigger('onStop', {
                         ellapsed: W09
                     });
                 }
             };
             A09.toggle = function() {
                 if (L49) {
                     A09.stop();
                 } else {
                     A09.start();
                 }
             };
             A09.reset = function() {
                 A09.stop();
                 W09 = 0;
                 a49 = [];
                 q49 = 0;
                 A09.setVal(F49(X09 ? 0 : O09), true, true, false, 100);
                 A09.settings.readonly = s49;
                 k49 = true;
                 if (!s49) {
                     m09('.mbsc-fr-w', T09).removeClass('mbsc-timer-locked');
                 }
                 A09.trigger('onReset');
             };
             A09.lap = function() {
                 if (L49) {
                     D49 = new Date() - K49 + x49;
                     Z49 = D49 - q49;
                     q49 = D49;
                     a49.push(D49);
                     A09.trigger('onLap', {
                         ellapsed: D49,
                         lap: Z49,
                         laps: a49
                     });
                 }
             };
             A09.resetlap = function() {
                 if (L49 && N09.mode == 'stopwatch') {
                     A09.lap();
                 } else {
                     A09.reset();
                 }
             };
             A09.getTime = function() {
                 return O09;
             };
             A09.setTime = function(K59) {
                 g09 = K59 / 1000;
                 O09 = K59;
             };
             A09.getEllapsedTime = function() {
                 return L49 ? new Date() - K49 + x49 : 0;
             };
             A09.setEllapsedTime = function(p59, D59) {
                 if (!k49) {
                     x49 = W09 = p59;
                     K49 = new Date();
                     A09.setVal(F49(X09 ? W09 : O09 - W09), true, D59, false, 100);
                 }
             };
             J49(true);
             if (!Y49 && !O09) {
                 Y49 = 'minutes';
             }
             if (N09.display !== 'inline') {
                 j49.push('hide');
             }
             if (!Y49) {
                 m09(Q09).each(function(r59, M59) {
                     if (!Y49 && O09 >= G09[M59].limit) {
                         Y49 = M59;
                         return false;
                     }
                 });
             }
             m09(Q09).each(function(a59, s59) {
                 b49(s59);
             });
             p49 = Math.max(87, p49);
             if (N09.autostart) {
                 setTimeout(function() {
                     A09.start();
                 }, 0);
             }
             A09.handlers.toggle = A09.toggle;
             A09.handlers.start = A09.start;
             A09.handlers.stop = A09.stop;
             A09.handlers.resetlap = A09.resetlap;
             A09.handlers.reset = A09.reset;
             A09.handlers.lap = A09.lap;
             A09.buttons.toggle = {
                 parentClass: 'mbsc-timer-btn-toggle-c',
                 text: N09.startText,
                 handler: 'toggle'
             };
             A09.buttons.start = {
                 text: N09.startText,
                 handler: 'start'
             };
             A09.buttons.stop = {
                 text: N09.stopText,
                 handler: 'stop'
             };
             A09.buttons.reset = {
                 text: N09.resetText,
                 handler: 'reset'
             };
             A09.buttons.lap = {
                 text: N09.lapText,
                 handler: 'lap'
             };
             A09.buttons.resetlap = {
                 parentClass: 'mbsc-timer-btn-resetlap-c',
                 text: N09.resetText,
                 handler: 'resetlap'
             };
             A09.buttons.hide = {
                 parentClass: 'mbsc-timer-btn-hide-c',
                 text: N09.hideText,
                 handler: 'cancel'
             };
             return {
                 wheels: v49,
                 headerText: false,
                 readonly: s49,
                 buttons: j49,
                 mode: 'countdown',
                 compClass: 'mbsc-timer',
                 parseValue: function() {
                     return F49(X09 ? 0 : O09);
                 },
                 formatValue: function(u59) {
                     var B59 = '',
                         q59 = 0;
                     m09(Q09).each(function(y59, j59) {
                         if (j59 == 'fract') {
                             return;
                         }
                         if (o49[j59]) {
                             B59 += u59[q59] + (j59 == 'seconds' && o49.fract ? '.' + u59[q59 + 1] : '') + ' ' + n49[y59] + ' ';
                             q59++;
                         }
                     });
                     return B59;
                 },
                 validate: function(v59) {
                     var t59 = v59.values,
                         e59 = v59.index,
                         J59 = 0;
                     if (k49 && e59 !== E09) {
                         g09 = 0;
                         m09(Q09).each(function(Z59, I59) {
                             if (o49[I59]) {
                                 g09 += G09[I59].limit * t59[J59];
                                 J59++;
                             }
                         });
                         g09 /= 1000;
                         J49(true);
                     }
                 },
                 onBeforeShow: function() {
                     N09.showLabel = true;
                 },
                 onMarkupReady: function(b59) {
                     T09 = m09(b59.target);
                     y49();
                     if (s49) {
                         m09('.mbsc-fr-w', T09).addClass('mbsc-timer-locked');
                     }
                 },
                 onPosition: function(V59) {
                     m09('.mbsc-fr-w', V59.target).css('min-width', 0).css('min-width', m09('.mbsc-fr-btn-cont', V59.target)[0].offsetWidth);
                 },
                 onDestroy: function() {
                     clearInterval(u49);
                 }
             };
         };
     }());
     (function(l59) {
         var S59 = mobiscroll,
             f59 = S59.$,
             d59 = {
                 wheelOrder: 'hhiiss',
                 useShortLabels: false,
                 min: 0,
                 max: Infinity,
                 labels: ['Years', 'Months', 'Days', 'Hours', 'Minutes', 'Seconds'],
                 labelsShort: ['Yrs', 'Mths', 'Days', 'Hrs', 'Mins', 'Secs']
             };
         S59.presetShort('timespan');
         S59.presets.scroller.timespan = function(c59) {
             function i59(k69) {
                 var o69 = {};
                 f59(A59).each(function(x69, F69) {
                     o69[F69] = P59[F69] ? Math.floor(k69 / C59[F69].limit) : 0;
                     k69 -= o69[F69] * C59[F69].limit;
                 });
                 return o69;
             }
             function n69(p69) {
                 var D69 = false,
                     M69 = O59[P59[p69] - 1] || 1,
                     K69 = C59[p69],
                     r69 = K69.label,
                     U69 = K69.wheel;
                 U69.data = [];
                 U69.label = K69.label;
                 if (N59.match(new RegExp(K69.re + K69.re, 'i'))) {
                     D69 = true;
                 }
                 if (p69 == m59) {
                     U69.min = E59[p69];
                     U69.max = w59[p69];
                     U69.data = function(s69) {
                         return {
                             value: s69,
                             display: X59(s69 * M69, D69, r69)
                         };
                     };
                     U69.getIndex = function(a69) {
                         return Math.round(a69 / M69);
                     };
                 } else {
                     for (R59 = 0; R59 <= K69.until; R59 += M69) {
                         U69.data.push({
                             value: R59,
                             display: X59(R59, D69, r69)
                         });
                     }
                 }
             }
             function X59(q69, B69, u69) {
                 return (q69 < 10 && B69 ? '0' : '') + q69 + '<span class="mbsc-ts-lbl">' + u69 + '</span>';
             }
             function Y69(y69) {
                 var J69 = 0,
                     j69 = 0;
                 f59.each(z59, function(v69, t69) {
                     if (!isNaN(+y69[J69])) {
                         j69 += C59[t69.v].limit * y69[v69];
                     }
                 });
                 return j69;
             }
             function L69(I69, e69) {
                 return Math.floor(I69 / e69) * e69;
             }
             var R59, W59, g59, E59, w59, G59 = f59.extend({}, c59.settings),
                 h59 = f59.extend(c59.settings, d59, G59),
                 N59 = h59.wheelOrder,
                 H59 = h59.useShortLabels ? h59.labelsShort : h59.labels,
                 A59 = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
                 C59 = {
                     'years': {
                         ord: 0,
                         index: 6,
                         until: 10,
                         limit: 1000 * 60 * 60 * 24 * 365,
                         label: H59[0],
                         re: 'y',
                         wheel: {}
                     },
                     'months': {
                         ord: 1,
                         index: 5,
                         until: 11,
                         limit: 1000 * 60 * 60 * 24 * 30,
                         label: H59[1],
                         re: 'm',
                         wheel: {}
                     },
                     'days': {
                         ord: 2,
                         index: 4,
                         until: 31,
                         limit: 1000 * 60 * 60 * 24,
                         label: H59[2],
                         re: 'd',
                         wheel: {}
                     },
                     'hours': {
                         ord: 3,
                         index: 3,
                         until: 23,
                         limit: 1000 * 60 * 60,
                         label: H59[3],
                         re: 'h',
                         wheel: {}
                     },
                     'minutes': {
                         ord: 4,
                         index: 2,
                         until: 59,
                         limit: 1000 * 60,
                         label: H59[4],
                         re: 'i',
                         wheel: {}
                     },
                     'seconds': {
                         ord: 5,
                         index: 1,
                         until: 59,
                         limit: 1000,
                         label: H59[5],
                         re: 's',
                         wheel: {}
                     }
                 },
                 z59 = [],
                 O59 = h59.steps || [],
                 P59 = {},
                 m59 = 'seconds',
                 Q59 = h59.defaultValue || Math.max(h59.min, Math.min(0, h59.max)),
                 T59 = [
                     []
                 ];
             f59(A59).each(function(b69, Z69) {
                 W59 = N59.search(new RegExp(C59[Z69].re, 'i'));
                 if (W59 > -1) {
                     z59.push({
                         o: W59,
                         v: Z69
                     });
                     if (C59[Z69].index > C59[m59].index) {
                         m59 = Z69;
                     }
                 }
             });
             z59.sort(function(V69, f69) {
                 return V69.o > f69.o ? 1 : -1;
             });
             f59.each(z59, function(d69, S69) {
                 P59[S69.v] = d69 + 1;
                 T59[0].push(C59[S69.v].wheel);
             });
             E59 = i59(h59.min);
             w59 = i59(h59.max);
             f59.each(z59, function(h69, l69) {
                 n69(l69.v);
             });
             c59.getVal = function(C69, z69) {
                 return z69 ? c59._getVal(C69) : c59._hasValue || C69 ? Y69(c59.getArrayVal(C69)) : null;
             };
             return {
                 showLabel: true,
                 wheels: T59,
                 compClass: 'mbsc-ts',
                 parseValue: function(c69) {
                     var H69 = [],
                         P69;
                     if (S59.util.isNumeric(c69) || !c69) {
                         g59 = i59(c69 || Q59);
                         f59.each(z59, function(m69, R69) {
                             H69.push(g59[R69.v]);
                         });
                     } else {
                         f59.each(z59, function(E69, w69) {
                             P69 = new RegExp('(\\d+)\\s?(' + h59.labels[C59[w69.v].ord] + '|' + h59.labelsShort[C59[w69.v].ord] + ')', 'gi').exec(c69);
                             H69.push(P69 ? P69[1] : 0);
                         });
                     }
                     f59(H69).each(function(i69, A69) {
                         H69[i69] = L69(A69, O59[i69] || 1);
                     });
                     return H69;
                 },
                 formatValue: function(W69) {
                     var N69 = '';
                     f59.each(z59, function(O69, T69) {
                         N69 += +W69[O69] ? W69[O69] + ' ' + C59[T69.v].label + ' ' : '';
                     });
                     return N69 ? N69.replace(/\s+$/g, '') : 0;
                 },
                 validate: function(F29) {
                     var o29, G69, Q69, X69, n29 = F29.values,
                         k29 = F29.direction,
                         L29 = [],
                         Y29 = true,
                         g69 = true;
                     f59(A59).each(function(U29, x29) {
                         if (P59[x29] !== l59) {
                             Q69 = P59[x29] - 1;
                             L29[Q69] = [];
                             X69 = {};
                             if (x29 != m59) {
                                 if (Y29) {
                                     for (G69 = w59[x29] + 1; G69 <= C59[x29].until; G69++) {
                                         X69[G69] = true;
                                     }
                                 }
                                 if (g69) {
                                     for (G69 = 0; G69 < E59[x29]; G69++) {
                                         X69[G69] = true;
                                     }
                                 }
                             }
                             n29[Q69] = c59.getValidValue(Q69, n29[Q69], k29, X69);
                             o29 = i59(Y69(n29));
                             Y29 = Y29 && o29[x29] == w59[x29];
                             g69 = g69 && o29[x29] == E59[x29];
                             f59.each(X69, function(K29) {
                                 L29[Q69].push(K29);
                             });
                         }
                     });
                     return {
                         disabled: L29
                     };
                 }
             };
         };
     }());
     (function(r29) {
         var D29 = mobiscroll,
             p29 = D29.$,
             M29 = D29.classes;
         M29.Widget = function(j29, y29, v29) {
             function J29(t29) {
                 if (!p29('.mbsc-fr-c', t29).hasClass('mbsc-wdg-c') && mobiscroll.oCgcI) {
                     p29('.mbsc-fr-c', t29).addClass('mbsc-wdg-c').append(q29.show());
                     if (!p29('.mbsc-w-p', t29).length) {
                         p29('.mbsc-fr-c', t29).addClass('mbsc-w-p');
                     }
                 }
             }
             var s29, B29, u29, q29 = p29(j29),
                 a29 = this;
             M29.Frame.call(this, j29, y29, true);
             a29._generateContent = function() {
                 return '';
             };
             a29._markupReady = function(e29) {
                 if (s29.display != 'inline') {
                     J29(e29);
                 }
             };
             a29._markupInserted = function(I29) {
                 if (s29.display == 'inline') {
                     J29(I29);
                 }
                 I29.trigger('mbsc-enhance', [{
                     theme: s29.theme,
                     lang: s29.lang
                 }]);
             };
             a29._markupRemove = function() {
                 q29.hide();
                 if (B29) {
                     B29.prepend(q29);
                 } else {
                     u29.after(q29);
                 }
             };
             a29.__processSettings = function() {
                 s29 = a29.settings;
                 a29.buttons.close = {
                     text: s29.closeText,
                     handler: 'cancel'
                 };
                 a29.buttons.ok = {
                     text: s29.okText,
                     handler: 'set'
                 };
                 s29.buttons = s29.buttons || (s29.display == 'inline' ? [] : ['ok']);
                 s29.cssClass = (s29.cssClass || '') + ' mbsc-wdg';
                 if (!B29 && !u29) {
                     u29 = q29.prev();
                     if (!u29.length) {
                         B29 = q29.parent();
                     }
                 }
                 q29.hide();
             };
             if (!v29) {
                 a29.init(y29);
             }
         };
         M29.Widget.prototype = {
             _hasDef: true,
             _hasTheme: true,
             _hasContent: true,
             _class: 'widget',
             _defaults: p29.extend({}, M29.Frame.prototype._defaults, {
                 okText: 'OK',
                 headerText: false
             })
         };
         D29.themes.widget = D29.themes.frame;
         D29.presetShort('widget', 'Widget', false);
     }());
     (function() {
         var Z29, V29, f29 = mobiscroll,
             d29 = f29.$,
             l29 = f29.util,
             h29 = l29.testTouch,
             b29 = l29.getCoord;
         function C29(c29, E29) {
             var P29 = b29(E29, 'X', true),
                 R29 = b29(E29, 'Y', true),
                 z29 = c29.offset(),
                 m29 = P29 - z29.left,
                 w29 = R29 - z29.top,
                 i29 = Math.max(m29, c29[0].offsetWidth - m29),
                 A29 = Math.max(w29, c29[0].offsetHeight - w29),
                 H29 = 2 * Math.sqrt(Math.pow(i29, 2) + Math.pow(A29, 2));
             S29(V29);
             V29 = d29('<span class="mbsc-ripple"></span>').css({
                 width: H29,
                 height: H29,
                 top: R29 - z29.top - H29 / 2,
                 left: P29 - z29.left - H29 / 2
             }).appendTo(c29);
             setTimeout(function() {
                 V29.addClass('mbsc-ripple-scaled mbsc-ripple-visible');
             }, 10);
         }
         function S29(N29) {
             setTimeout(function() {
                 if (N29) {
                     N29.removeClass('mbsc-ripple-visible');
                     setTimeout(function() {
                         N29.remove();
                     }, 2000);
                 }
             }, 100);
         }
         f29.themes.material = {
             addRipple: C29,
             removeRipple: function() {
                 S29(V29);
             },
             initRipple: function(G29, W29, Q29, X29) {
                 var O29, T29;
                 G29.off('.mbsc-ripple').on('touchstart.mbsc-ripple mousedown.mbsc-ripple', W29, function(g29) {
                     if (h29(g29, this)) {
                         O29 = b29(g29, 'X');
                         T29 = b29(g29, 'Y');
                         Z29 = d29(this);
                         if (!Z29.hasClass(Q29) && !Z29.hasClass(X29)) {
                             C29(Z29, g29);
                         } else {
                             Z29 = null;
                         }
                     }
                 }).on('touchmove.mbsc-ripple mousemove.mbsc-ripple', W29, function(Y39) {
                     if (Z29 && Math.abs(b29(Y39, 'X') - O29) > 9 || Math.abs(b29(Y39, 'Y') - T29) > 9) {
                         S29(V29);
                         Z29 = null;
                     }
                 }).on('touchend.mbsc-ripple touchcancel.mbsc-ripple mouseleave.mbsc-ripple mouseup.mbsc-ripple', W29, function() {
                     if (Z29) {
                         setTimeout(function() {
                             S29(V29);
                         }, 100);
                         Z29 = null;
                     }
                 });
             }
         };
     }());
     (function() {
         var n39 = mobiscroll,
             L39 = n39.themes,
             o39 = n39.$;
         L39.frame['ios-dark'] = {
             baseTheme: 'ios',
             display: 'bottom',
             headerText: false,
             btnWidth: false,
             deleteIcon: 'ios-backspace',
             scroll3d: true
         };
         L39.scroller['ios-dark'] = o39.extend({}, L39.frame['ios-dark'], {
             rows: 5,
             height: 34,
             minWidth: 55,
             selectedLineHeight: true,
             selectedLineBorder: 1,
             showLabel: false,
             useShortLabels: true,
             btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down5',
             btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up5',
             checkIcon: 'ion-ios7-checkmark-empty',
             dateDisplay: 'MMdyy',
             btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left5',
             btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right5'
         });
         mobiscroll.themes.listview['ios-dark'] = {
             baseTheme: 'ios'
         };
         mobiscroll.themes.menustrip['ios-dark'] = {
             baseTheme: 'ios'
         };
         mobiscroll.themes.form['ios-dark'] = {
             baseTheme: 'ios'
         };
         mobiscroll.themes.progress['ios-dark'] = {
             baseTheme: 'ios'
         };
     }());
     (function() {
         var F39 = mobiscroll,
             k39 = F39.$;
         F39.themes.frame['material-dark'] = {
             baseTheme: 'material',
             headerText: false,
             btnWidth: false,
             deleteIcon: 'material-backspace',
             onMarkupReady: function(x39) {
                 F39.themes.material.initRipple(k39(x39.target), '.mbsc-fr-btn-e', 'mbsc-fr-btn-d', 'mbsc-fr-btn-nhl');
             }
         };
         F39.themes.scroller['material-dark'] = k39.extend({}, F39.themes.frame['material-dark'], {
             showLabel: false,
             selectedLineBorder: 2,
             weekDays: 'min',
             icon: {
                 filled: 'material-star',
                 empty: 'material-star-outline'
             },
             checkIcon: 'material-check',
             btnPlusClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-down',
             btnMinusClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-up',
             btnCalPrevClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-left',
             btnCalNextClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-right',
             onEventBubbleShow: function(D39) {
                 var U39 = k39(D39.eventList),
                     K39 = k39(D39.target).closest('.mbsc-cal-row').index() < 2,
                     p39 = k39('.mbsc-cal-event-color', U39).eq(K39 ? 0 : -1).css('background-color');
                 k39('.mbsc-cal-events-arr', U39).css('border-color', K39 ? 'transparent transparent ' + p39 + ' transparent' : p39 + 'transparent transparent transparent');
             }
         });
         mobiscroll.themes.listview['material-dark'] = {
             baseTheme: 'material',
             onItemActivate: function(M39) {
                 mobiscroll.themes.material.addRipple(k39(M39.target), M39.domEvent);
             },
             onItemDeactivate: function() {
                 mobiscroll.themes.material.removeRipple();
             },
             onSlideStart: function(r39) {
                 k39('.mbsc-ripple', r39.target).remove();
             },
             onSortStart: function(s39) {
                 k39('.mbsc-ripple', s39.target).remove();
             }
         };
         mobiscroll.themes.menustrip['material-dark'] = {
             baseTheme: 'material',
             onInit: function() {
                 mobiscroll.themes.material.initRipple(k39(this), '.mbsc-ms-item', 'mbsc-btn-d', 'mbsc-btn-nhl');
             }
         };
         mobiscroll.themes.form['material-dark'] = {
             baseTheme: 'material',
             onControlActivate: function(B39) {
                 var q39, a39 = k39(B39.target);
                 if (a39[0].type == 'button' || a39[0].type == 'submit') {
                     q39 = a39;
                 }
                 if (a39.attr('data-role') == 'segmented') {
                     q39 = a39.next();
                 }
                 if (a39.hasClass('mbsc-stepper-control') && !a39.hasClass('mbsc-step-disabled')) {
                     q39 = a39.find('.mbsc-segmented-content');
                 }
                 if (q39) {
                     mobiscroll.themes.material.addRipple(q39, B39.domEvent);
                 }
             },
             onControlDeactivate: function() {
                 mobiscroll.themes.material.removeRipple();
             }
         };
         mobiscroll.themes.progress['material-dark'] = {
             baseTheme: 'material'
         };
     }());
     (function() {
         var j39 = mobiscroll,
             u39 = j39.themes,
             y39 = j39.$;
         u39.frame['android-holo-light'] = {
             baseTheme: 'android-holo'
         };
         u39.scroller['android-holo-light'] = y39.extend({}, u39.frame['android-holo-light'], {
             dateDisplay: 'Mddyy',
             rows: 5,
             minWidth: 76,
             height: 36,
             showLabel: false,
             selectedLineBorder: 2,
             useShortLabels: true,
             icon: {
                 filled: 'star3',
                 empty: 'star'
             },
             btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down6',
             btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up6'
         });
         mobiscroll.themes.listview['android-holo-light'] = {
             baseTheme: 'android-holo'
         };
         mobiscroll.themes.menustrip['android-holo-light'] = {
             baseTheme: 'android-holo'
         };
         mobiscroll.themes.form['android-holo-light'] = {
             baseTheme: 'android-holo'
         };
         mobiscroll.themes.progress['android-holo-light'] = {
             baseTheme: 'android-holo'
         };
     }());
     (function() {
         var t39 = mobiscroll,
             J39 = t39.$,
             v39 = t39.themes;
         v39.frame['wp-light'] = {
             baseTheme: 'wp',
             headerText: false,
             deleteIcon: 'backspace4',
             btnWidth: false,
             onProcessSettings: function(Z39, I39) {
                 var e39 = I39.buttons;
                 if (e39) {
                     e39.set.icon = 'checkmark';
                     e39.cancel.icon = 'close';
                     e39.clear.icon = 'close';
                     if (e39.ok) {
                         e39.ok.icon = 'checkmark';
                     }
                     if (e39.close) {
                         e39.close.icon = 'close';
                     }
                     if (e39.now) {
                         e39.now.icon = 'loop2';
                     }
                     if (e39.toggle) {
                         e39.toggle.icon = 'play3';
                     }
                     if (e39.start) {
                         e39.start.icon = 'play3';
                     }
                     if (e39.stop) {
                         e39.stop.icon = 'pause2';
                     }
                     if (e39.reset) {
                         e39.reset.icon = 'stop2';
                     }
                     if (e39.lap) {
                         e39.lap.icon = 'loop2';
                     }
                     if (e39.hide) {
                         e39.hide.icon = 'close';
                     }
                 }
             }
         };
         v39.scroller['wp-light'] = J39.extend({}, v39.frame['wp-light'], {
             minWidth: 76,
             height: 76,
             dateDisplay: 'mmMMddDDyy',
             showLabel: false,
             icon: {
                 filled: 'star3',
                 empty: 'star'
             },
             btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left2',
             btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right2',
             btnPlusClass: 'mbsc-ic mbsc-ic-plus',
             btnMinusClass: 'mbsc-ic mbsc-ic-minus',
             onMarkupInserted: function(l39, h39) {
                 var b39, f39, d39, S39 = J39(l39.target),
                     V39 = h39.settings;
                 function C39(z39) {
                     return J39.isArray(V39.readonly) ? V39.readonly[z39] : V39.readonly;
                 }
                 J39('.mbsc-sc-whl', S39).on('touchstart mousedown wheel mousewheel', function(H39) {
                     if (H39.type === 'mousedown' && f39 || C39(J39(this).attr('data-index'))) {
                         return;
                     }
                     f39 = H39.type === 'touchstart';
                     b39 = true;
                     d39 = J39(this).hasClass('mbsc-sc-whl-wpa');
                     J39('.mbsc-sc-whl', S39).removeClass('mbsc-sc-whl-wpa');
                     J39(this).addClass('mbsc-sc-whl-wpa');
                 }).on('touchmove mousemove', function() {
                     b39 = false;
                 }).on('touchend mouseup', function(c39) {
                     if (b39 && d39 && J39(c39.target).closest('.mbsc-sc-itm').hasClass('mbsc-sc-itm-sel')) {
                         J39(this).removeClass('mbsc-sc-whl-wpa');
                     }
                     if (c39.type === 'mouseup') {
                         f39 = false;
                     }
                     b39 = false;
                 });
             }
         });
         mobiscroll.themes.listview['wp-light'] = {
             baseTheme: 'wp'
         };
         mobiscroll.themes.menustrip['wp-light'] = {
             baseTheme: 'wp'
         };
         mobiscroll.themes.form['wp-light'] = {
             baseTheme: 'wp'
         };
         mobiscroll.themes.progress['wp-light'] = {
             baseTheme: 'wp'
         };
     }());
     (function() {
         var P39 = mobiscroll.$;
         mobiscroll.themes.frame['mobiscroll-dark'] = {
             baseTheme: 'mobiscroll',
             headerText: false,
             btnWidth: false
         };
         mobiscroll.themes.scroller['mobiscroll-dark'] = P39.extend({}, mobiscroll.themes.frame['mobiscroll-dark'], {
             rows: 5,
             showLabel: false,
             selectedLineBorder: 1,
             weekDays: 'min',
             checkIcon: 'ion-ios7-checkmark-empty',
             btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down5',
             btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up5',
             btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left5',
             btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right5'
         });
         mobiscroll.themes.listview['mobiscroll-dark'] = {
             baseTheme: 'mobiscroll'
         };
         mobiscroll.themes.menustrip['mobiscroll-dark'] = {
             baseTheme: 'mobiscroll'
         };
         mobiscroll.themes.form['mobiscroll-dark'] = {
             baseTheme: 'mobiscroll'
         };
         mobiscroll.themes.progress['mobiscroll-dark'] = {
             baseTheme: 'mobiscroll'
         };
     }());
     (function() {
         var m39, i39, R39 = mobiscroll,
             w39 = R39.platform,
             A39 = R39.themes,
             E39 = R39.$;
         if (w39.name == 'android') {
             m39 = w39.majorVersion >= 5 ? 'material' : 'android-holo';
         } else if (w39.name == 'ios') {
             m39 = 'ios';
         } else if (w39.name == 'wp') {
             m39 = 'wp';
         }
         E39.each(A39, function(W39, N39) {
             E39.each(N39, function(O39, T39) {
                 if (T39.baseTheme == m39 && O39 != 'android-holo-light' && O39 != 'material-dark' && O39 != 'wp-light' && O39 != 'ios-dark') {
                     R39.autoTheme = O39;
                     i39 = true;
                     return false;
                 } else if (O39 == m39) {
                     R39.autoTheme = O39;
                 }
             });
             if (i39) {
                 return false;
             }
         });
     }());
