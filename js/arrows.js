!function (e, t) { if ("object" == typeof exports && "object" == typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else { var n = t(); for (var r in n) ("object" == typeof exports ? exports : e)[r] = n[r] } }(window, (function () { return function (e) { var t = {}; function n(r) { if (t[r]) return t[r].exports; var o = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports } return n.m = e, n.c = t, n.d = function (e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, n.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function (e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) { return e[t] }.bind(null, o)); return r }, n.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return n.d(t, "a", t), t }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 8) }([function (e, t, n) { "use strict"; n.r(t), n.d(t, "render", (function () { return R })), n.d(t, "hydrate", (function () { return F })), n.d(t, "createElement", (function () { return p })), n.d(t, "h", (function () { return p })), n.d(t, "Fragment", (function () { return m })), n.d(t, "createRef", (function () { return y })), n.d(t, "isValidElement", (function () { return o })), n.d(t, "Component", (function () { return g })), n.d(t, "cloneElement", (function () { return U })), n.d(t, "createContext", (function () { return z })), n.d(t, "toChildArray", (function () { return E })), n.d(t, "__u", (function () { return N })), n.d(t, "options", (function () { return r })); var r, o, i, u, _, l, c, a = {}, f = [], s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i; function d(e, t) { for (var n in t) e[n] = t[n]; return e } function h(e) { var t = e.parentNode; t && t.removeChild(e) } function p(e, t, n) { var r, o, i, u = arguments, _ = {}; for (i in t) "key" == i ? r = t[i] : "ref" == i ? o = t[i] : _[i] = t[i]; if (arguments.length > 3) for (n = [n], i = 3; i < arguments.length; i++)n.push(u[i]); if (null != n && (_.children = n), "function" == typeof e && null != e.defaultProps) for (i in e.defaultProps) void 0 === _[i] && (_[i] = e.defaultProps[i]); return v(e, _, r, o, null) } function v(e, t, n, o, i) { var u = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == i ? ++r.__v : i }; return null != r.vnode && r.vnode(u), u } function y() { return { current: null } } function m(e) { return e.children } function g(e, t) { this.props = e, this.context = t } function b(e, t) { if (null == t) return e.__ ? b(e.__, e.__.__k.indexOf(e) + 1) : null; for (var n; t < e.__k.length; t++)if (null != (n = e.__k[t]) && null != n.__e) return n.__e; return "function" == typeof e.type ? b(e) : null } function w(e) { var t, n; if (null != (e = e.__) && null != e.__c) { for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)if (null != (n = e.__k[t]) && null != n.__e) { e.__e = e.__c.base = n.__e; break } return w(e) } } function x(e) { (!e.__d && (e.__d = !0) && i.push(e) && !O.__r++ || _ !== r.debounceRendering) && ((_ = r.debounceRendering) || u)(O) } function O() { for (var e; O.__r = i.length;)e = i.sort((function (e, t) { return e.__v.__b - t.__v.__b })), i = [], e.some((function (e) { var t, n, r, o, i, u, _; e.__d && (u = (i = (t = e).__v).__e, (_ = t.__P) && (n = [], (r = d({}, i)).__v = i.__v + 1, o = H(_, i, r, t.__n, void 0 !== _.ownerSVGElement, null != i.__h ? [u] : null, n, null == u ? b(i) : u, i.__h), I(n, i), o != u && w(i))) })) } function T(e, t, n, r, o, i, u, _, l, c) { var s, d, p, y, g, w, x, O = r && r.__k || f, T = O.length; for (l == a && (l = null != u ? u[0] : T ? b(r, 0) : null), n.__k = [], s = 0; s < t.length; s++)if (null != (y = n.__k[s] = null == (y = t[s]) || "boolean" == typeof y ? null : "string" == typeof y || "number" == typeof y ? v(null, y, null, null, y) : Array.isArray(y) ? v(m, { children: y }, null, null, null) : null != y.__e || null != y.__c ? v(y.type, y.props, y.key, null, y.__v) : y)) { if (y.__ = n, y.__b = n.__b + 1, null === (p = O[s]) || p && y.key == p.key && y.type === p.type) O[s] = void 0; else for (d = 0; d < T; d++) { if ((p = O[d]) && y.key == p.key && y.type === p.type) { O[d] = void 0; break } p = null } g = H(e, y, p = p || a, o, i, u, _, l, c), (d = y.ref) && p.ref != d && (x || (x = []), p.ref && x.push(p.ref, null, y), x.push(d, y.__c || g, y)), null != g ? (null == w && (w = g), l = P(e, y, p, O, u, g, l), c || "option" != n.type ? "function" == typeof n.type && (n.__d = l) : e.value = "") : l && p.__e == l && l.parentNode != e && (l = b(p)) } if (n.__e = w, null != u && "function" != typeof n.type) for (s = u.length; s--;)null != u[s] && h(u[s]); for (s = T; s--;)null != O[s] && N(O[s], O[s]); if (x) for (s = 0; s < x.length; s++)k(x[s], x[++s], x[++s]) } function E(e, t) { return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function (e) { E(e, t) })) : t.push(e)), t } function P(e, t, n, r, o, i, u) { var _, l, c; if (void 0 !== t.__d) _ = t.__d, t.__d = void 0; else if (o == n || i != u || null == i.parentNode) e: if (null == u || u.parentNode !== e) e.appendChild(i), _ = null; else { for (l = u, c = 0; (l = l.nextSibling) && c < r.length; c += 2)if (l == i) break e; e.insertBefore(i, u), _ = u } return void 0 !== _ ? _ : i.nextSibling } function A(e, t, n) { "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || s.test(t) ? n : n + "px" } function M(e, t, n, r, o) { var i, u, _; if (o && "className" == t && (t = "class"), "style" === t) if ("string" == typeof n) e.style.cssText = n; else { if ("string" == typeof r && (e.style.cssText = r = ""), r) for (t in r) n && t in n || A(e.style, t, ""); if (n) for (t in n) r && n[t] === r[t] || A(e.style, t, n[t]) } else "o" === t[0] && "n" === t[1] ? (i = t !== (t = t.replace(/Capture$/, "")), (u = t.toLowerCase()) in e && (t = u), t = t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, _ = i ? D : S, n ? r || e.addEventListener(t, _, i) : e.removeEventListener(t, _, i)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && "download" !== t && "href" !== t && !o && t in e ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/xlink:?/, "")) ? null == n || !1 === n ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), n) : null == n || !1 === n && !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, n)) } function S(e) { this.l[e.type + !1](r.event ? r.event(e) : e) } function D(e) { this.l[e.type + !0](r.event ? r.event(e) : e) } function C(e, t, n) { var r, o; for (r = 0; r < e.__k.length; r++)(o = e.__k[r]) && (o.__ = e, o.__e && ("function" == typeof o.type && o.__k.length > 1 && C(o, t, n), t = P(n, o, o, e.__k, null, o.__e, t), "function" == typeof e.type && (e.__d = t))) } function H(e, t, n, o, i, u, _, l, c) { var a, f, s, h, p, v, y, b, w, x, O, E = t.type; if (void 0 !== t.constructor) return null; null != n.__h && (c = n.__h, l = t.__e = n.__e, t.__h = null, u = [l]), (a = r.__b) && a(t); try { e: if ("function" == typeof E) { if (b = t.props, w = (a = E.contextType) && o[a.__c], x = a ? w ? w.props.value : a.__ : o, n.__c ? y = (f = t.__c = n.__c).__ = f.__E : ("prototype" in E && E.prototype.render ? t.__c = f = new E(b, x) : (t.__c = f = new g(b, x), f.constructor = E, f.render = L), w && w.sub(f), f.props = b, f.state || (f.state = {}), f.context = x, f.__n = o, s = f.__d = !0, f.__h = []), null == f.__s && (f.__s = f.state), null != E.getDerivedStateFromProps && (f.__s == f.state && (f.__s = d({}, f.__s)), d(f.__s, E.getDerivedStateFromProps(b, f.__s))), h = f.props, p = f.state, s) null == E.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(), null != f.componentDidMount && f.__h.push(f.componentDidMount); else { if (null == E.getDerivedStateFromProps && b !== h && null != f.componentWillReceiveProps && f.componentWillReceiveProps(b, x), !f.__e && null != f.shouldComponentUpdate && !1 === f.shouldComponentUpdate(b, f.__s, x) || t.__v === n.__v) { f.props = b, f.state = f.__s, t.__v !== n.__v && (f.__d = !1), f.__v = t, t.__e = n.__e, t.__k = n.__k, f.__h.length && _.push(f), C(t, l, e); break e } null != f.componentWillUpdate && f.componentWillUpdate(b, f.__s, x), null != f.componentDidUpdate && f.__h.push((function () { f.componentDidUpdate(h, p, v) })) } f.context = x, f.props = b, f.state = f.__s, (a = r.__r) && a(t), f.__d = !1, f.__v = t, f.__P = e, a = f.render(f.props, f.state, f.context), f.state = f.__s, null != f.getChildContext && (o = d(d({}, o), f.getChildContext())), s || null == f.getSnapshotBeforeUpdate || (v = f.getSnapshotBeforeUpdate(h, p)), O = null != a && a.type == m && null == a.key ? a.props.children : a, T(e, Array.isArray(O) ? O : [O], t, n, o, i, u, _, l, c), f.base = t.__e, t.__h = null, f.__h.length && _.push(f), y && (f.__E = f.__ = null), f.__e = !1 } else null == u && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = j(n.__e, t, n, o, i, u, _, c); (a = r.diffed) && a(t) } catch (e) { t.__v = null, (c || null != u) && (t.__e = l, t.__h = !!c, u[u.indexOf(l)] = null), r.__e(e, t, n) } return t.__e } function I(e, t) { r.__c && r.__c(t, e), e.some((function (t) { try { e = t.__h, t.__h = [], e.some((function (e) { e.call(t) })) } catch (e) { r.__e(e, t.__v) } })) } function j(e, t, n, r, o, i, u, _) { var l, c, s, d, h, p = n.props, v = t.props; if (o = "svg" === t.type || o, null != i) for (l = 0; l < i.length; l++)if (null != (c = i[l]) && ((null === t.type ? 3 === c.nodeType : c.localName === t.type) || e == c)) { e = c, i[l] = null; break } if (null == e) { if (null === t.type) return document.createTextNode(v); e = o ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type, v.is && { is: v.is }), i = null, _ = !1 } if (null === t.type) p === v || _ && e.data === v || (e.data = v); else { if (null != i && (i = f.slice.call(e.childNodes)), s = (p = n.props || a).dangerouslySetInnerHTML, d = v.dangerouslySetInnerHTML, !_) { if (null != i) for (p = {}, h = 0; h < e.attributes.length; h++)p[e.attributes[h].name] = e.attributes[h].value; (d || s) && (d && (s && d.__html == s.__html || d.__html === e.innerHTML) || (e.innerHTML = d && d.__html || "")) } (function (e, t, n, r, o) { var i; for (i in n) "children" === i || "key" === i || i in t || M(e, i, null, n[i], r); for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || M(e, i, t[i], n[i], r) })(e, v, p, o, _), d ? t.__k = [] : (l = t.props.children, T(e, Array.isArray(l) ? l : [l], t, n, r, "foreignObject" !== t.type && o, i, u, a, _)), _ || ("value" in v && void 0 !== (l = v.value) && (l !== e.value || "progress" === t.type && !l) && M(e, "value", l, p.value, !1), "checked" in v && void 0 !== (l = v.checked) && l !== e.checked && M(e, "checked", l, p.checked, !1)) } return e } function k(e, t, n) { try { "function" == typeof e ? e(t) : e.current = t } catch (e) { r.__e(e, n) } } function N(e, t, n) { var o, i, u; if (r.unmount && r.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || k(o, null, t)), n || "function" == typeof e.type || (n = null != (i = e.__e)), e.__e = e.__d = void 0, null != (o = e.__c)) { if (o.componentWillUnmount) try { o.componentWillUnmount() } catch (e) { r.__e(e, t) } o.base = o.__P = null } if (o = e.__k) for (u = 0; u < o.length; u++)o[u] && N(o[u], t, n); null != i && h(i) } function L(e, t, n) { return this.constructor(e, n) } function R(e, t, n) { var o, i, u; r.__ && r.__(e, t), i = (o = n === l) ? null : n && n.__k || t.__k, e = p(m, null, [e]), u = [], H(t, (o ? t : n || t).__k = e, i || a, a, void 0 !== t.ownerSVGElement, n && !o ? [n] : i ? null : t.childNodes.length ? f.slice.call(t.childNodes) : null, u, n || a, o), I(u, e) } function F(e, t) { R(e, t, l) } function U(e, t, n) { var r, o, i, u = arguments, _ = d({}, e.props); for (i in t) "key" == i ? r = t[i] : "ref" == i ? o = t[i] : _[i] = t[i]; if (arguments.length > 3) for (n = [n], i = 3; i < arguments.length; i++)n.push(u[i]); return null != n && (_.children = n), v(e.type, _, r || e.key, o || e.ref, null) } function z(e, t) { var n = { __c: t = "__cC" + c++, __: e, Consumer: function (e, t) { return e.children(t) }, Provider: function (e, n, r) { return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function () { return r }, this.shouldComponentUpdate = function (e) { this.props.value !== e.value && n.some(x) }, this.sub = function (e) { n.push(e); var t = e.componentWillUnmount; e.componentWillUnmount = function () { n.splice(n.indexOf(e), 1), t && t.call(e) } }), e.children } }; return n.Provider.__ = n.Consumer.contextType = n } r = { __e: function (e, t) { for (var n, r, o, i = t.__h; t = t.__;)if ((n = t.__c) && !n.__) try { if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), o = n.__d), o) return t.__h = i, n.__E = n } catch (t) { e = t } throw e }, __v: 0 }, o = function (e) { return null != e && void 0 === e.constructor }, g.prototype.setState = function (e, t) { var n; n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof e && (e = e(d({}, n), this.props)), e && d(n, e), null != e && this.__v && (t && this.__h.push(t), x(this)) }, g.prototype.forceUpdate = function (e) { this.__v && (this.__e = !0, e && this.__h.push(e), x(this)) }, g.prototype.render = m, i = [], u = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, O.__r = 0, l = a, c = 0 }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.DIRECTION = t.HEAD_DEFAULT_SIZE = void 0, t.HEAD_DEFAULT_SIZE = 10, t.DIRECTION = { TOP_LEFT: "top-left", TOP: "top", TOP_RIGHT: "top-right", RIGHT: "right", BOTTOM_LEFT: "bottom-left", BOTTOM: "bottom", BOTTOM_RIGHT: "bottom-right", LEFT: "left" } }, function (e, t, n) { "use strict"; var r = this && this.__createBinding || (Object.create ? function (e, t, n, r) { void 0 === r && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function () { return t[n] } }) } : function (e, t, n, r) { void 0 === r && (r = n), e[r] = t[n] }), o = this && this.__exportStar || function (e, t) { for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n) }; Object.defineProperty(t, "__esModule", { value: !0 }), t.HEAD = void 0, o(n(13), t); var i = n(7); Object.defineProperty(t, "HEAD", { enumerable: !0, get: function () { return i.default } }) }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.getScrollPoint = t.assignArrowCreate = void 0; var r = n(4); t.assignArrowCreate = function (e) { e && (e.arrowCreate = r.default) }; t.getScrollPoint = function () { return window ? { x: window.scrollX, y: window.scrollY } : { x: 0, y: 0 } } }, function (e, t, n) { "use strict"; var r = this && this.__assign || function () { return (r = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]); return e }).apply(this, arguments) }; Object.defineProperty(t, "__esModule", { value: !0 }), t.Arrow = void 0; var o = n(0), i = n(9), u = n(10), _ = n(11), l = n(23), c = n(2); t.Arrow = function (e) { var t = e.className, n = e.head, a = e.from, f = e.to, s = e.forwardRef, d = i.useState((function () { return _.default(l.createAnchorWithPoint(a), l.createAnchorWithPoint(f), n) })), h = d[0], p = d[1]; i.useEffect((function () { return u.default(a, f, (function () { var e = _.default(l.createAnchorWithPoint(a), l.createAnchorWithPoint(f), n); p(e) })).clear }), [a, n, f]); return o.h("svg", { className: t, style: { top: h.offset.y, left: h.offset.x, position: "absolute" }, width: h.size.width, height: h.size.height, ref: s }, o.h("path", { className: t + "__path", d: h.pathCommands }), function () { if (!h.head.node) return null; var e = { className: t + "__head", transform: c.headTransformCSS(h.head) }; if ("string" == typeof h.head.node) return o.h("g", r({}, e, { dangerouslySetInnerHTML: { __html: h.head.node } })); var n = h.head.node; return n.tagName ? o.h("g", r({}, e, { dangerouslySetInnerHTML: { __html: n.outerHTML } })) : o.h("g", r({}, e), h.head.node) }()) }; t.default = function (e) { var n = e.className, r = void 0 === n ? "arrow" : n, i = e.head, u = void 0 === i ? c.HEAD.THIN : i, _ = e.from, l = e.to, a = o.createRef(), f = document.createDocumentFragment(); o.render(o.h(t.Arrow, { className: r, head: u, from: _, to: l, forwardRef: a }), f); return { node: f, clear: function () { var e = a.current, t = e.parentNode; t && t.removeChild(e) } } } }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); t.default = function (e) { var t = "function" == typeof e ? e() : e; return document.body.contains(t) ? t : null } }, function (e, t, n) { "use strict"; var r = this && this.__assign || function () { return (r = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]); return e }).apply(this, arguments) }; Object.defineProperty(t, "__esModule", { value: !0 }), t.pointSubtraction = t.pointBezier = t.pointToArray = void 0; t.pointToArray = function (e) { return [e.x, e.y] }; t.pointBezier = function (e, t) { return { x: e.x + t.width * e.translation[0], y: e.y + t.height * e.translation[1] } }; t.pointSubtraction = function (e, t) { return r(r({}, e), { x: e.x - t.x, y: e.y - t.y }) } }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(14), o = n(15), i = n(16), u = n(17), _ = n(18), l = n(19), c = n(20), a = n(21), f = { diamond: r.default, DIAMOND: r.default, dot: o.default, DOT: o.default, image: i.default, IMAGE: i.default, none: l.default, NONE: l.default, inv: u.default, INV: u.default, normal: _.default, NORMAL: _.default, thin: c.default, THIN: c.default, vee: a.default, VEE: a.default }; t.default = f }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.HEAD = t.DIRECTION = void 0; var r = n(3), o = n(4); r.assignArrowCreate(window), t.default = o.default; var i = n(1); Object.defineProperty(t, "DIRECTION", { enumerable: !0, get: function () { return i.DIRECTION } }); var u = n(2); Object.defineProperty(t, "HEAD", { enumerable: !0, get: function () { return u.HEAD } }) }, function (e, t, n) { "use strict"; n.r(t), n.d(t, "useState", (function () { return p })), n.d(t, "useReducer", (function () { return v })), n.d(t, "useEffect", (function () { return y })), n.d(t, "useLayoutEffect", (function () { return m })), n.d(t, "useRef", (function () { return g })), n.d(t, "useImperativeHandle", (function () { return b })), n.d(t, "useMemo", (function () { return w })), n.d(t, "useCallback", (function () { return x })), n.d(t, "useContext", (function () { return O })), n.d(t, "useDebugValue", (function () { return T })), n.d(t, "useErrorBoundary", (function () { return E })); var r, o, i, u = n(0), _ = 0, l = [], c = u.options.__b, a = u.options.__r, f = u.options.diffed, s = u.options.__c, d = u.options.unmount; function h(e, t) { u.options.__h && u.options.__h(o, e, _ || t), _ = 0; var n = o.__H || (o.__H = { __: [], __h: [] }); return e >= n.__.length && n.__.push({}), n.__[e] } function p(e) { return _ = 1, v(C, e) } function v(e, t, n) { var i = h(r++, 2); return i.t = e, i.__c || (i.__ = [n ? n(t) : C(void 0, t), function (e) { var t = i.t(i.__[0], e); i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({})) }], i.__c = o), i.__ } function y(e, t) { var n = h(r++, 3); !u.options.__s && D(n.__H, t) && (n.__ = e, n.__H = t, o.__H.__h.push(n)) } function m(e, t) { var n = h(r++, 4); !u.options.__s && D(n.__H, t) && (n.__ = e, n.__H = t, o.__h.push(n)) } function g(e) { return _ = 5, w((function () { return { current: e } }), []) } function b(e, t, n) { _ = 6, m((function () { "function" == typeof e ? e(t()) : e && (e.current = t()) }), null == n ? n : n.concat(e)) } function w(e, t) { var n = h(r++, 7); return D(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__ } function x(e, t) { return _ = 8, w((function () { return e }), t) } function O(e) { var t = o.context[e.__c], n = h(r++, 9); return n.__c = e, t ? (null == n.__ && (n.__ = !0, t.sub(o)), t.props.value) : e.__ } function T(e, t) { u.options.useDebugValue && u.options.useDebugValue(t ? t(e) : e) } function E(e) { var t = h(r++, 10), n = p(); return t.__ = e, o.componentDidCatch || (o.componentDidCatch = function (e) { t.__ && t.__(e), n[1](e) }), [n[0], function () { n[1](void 0) }] } function P() { l.forEach((function (e) { if (e.__P) try { e.__H.__h.forEach(M), e.__H.__h.forEach(S), e.__H.__h = [] } catch (t) { e.__H.__h = [], u.options.__e(t, e.__v) } })), l = [] } u.options.__b = function (e) { o = null, c && c(e) }, u.options.__r = function (e) { a && a(e), r = 0; var t = (o = e.__c).__H; t && (t.__h.forEach(M), t.__h.forEach(S), t.__h = []) }, u.options.diffed = function (e) { f && f(e); var t = e.__c; t && t.__H && t.__H.__h.length && (1 !== l.push(t) && i === u.options.requestAnimationFrame || ((i = u.options.requestAnimationFrame) || function (e) { var t, n = function () { clearTimeout(r), A && cancelAnimationFrame(t), setTimeout(e) }, r = setTimeout(n, 100); A && (t = requestAnimationFrame(n)) })(P)), o = void 0 }, u.options.__c = function (e, t) { t.some((function (e) { try { e.__h.forEach(M), e.__h = e.__h.filter((function (e) { return !e.__ || S(e) })) } catch (n) { t.some((function (e) { e.__h && (e.__h = []) })), t = [], u.options.__e(n, e.__v) } })), s && s(e, t) }, u.options.unmount = function (e) { d && d(e); var t = e.__c; if (t && t.__H) try { t.__H.__.forEach(M) } catch (e) { u.options.__e(e, t.__v) } }; var A = "function" == typeof requestAnimationFrame; function M(e) { var t = o; "function" == typeof e.__c && e.__c(), o = t } function S(e) { var t = o; e.__c = e.__(), o = t } function D(e, t) { return !e || e.length !== t.length || t.some((function (t, n) { return t !== e[n] })) } function C(e, t) { return "function" == typeof t ? t(e) : t } }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(5), o = ["x", "y", "width", "height"], i = function (e, t) { var n = t.getBoundingClientRect(); return e ? { equal: !o.some((function (t) { return e[t] !== n[t] })), rect: n } : { equal: !1, rect: n } }; t.default = function (e, t, n) { var o = { from: null, to: null }, u = setInterval((function () { var u = r.default(e.node), _ = r.default(t.node); if (u && _) { var l = function (e, t, n) { var r = i(e.from, t), o = i(e.to, n); return r.equal && o.equal ? null : { from: r.rect, to: o.rect } }(o, u, _); l && (o = l, n()) } }), 150); return { clear: function () { return clearInterval(u) } } } }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(12), o = n(2), i = n(22); t.default = function (e, t, n) { var u = o.prepareHeadNode(n), _ = r.produceContainer(e, t, u), l = i.pathListBezier(_, u), c = o.createHead(u, l); return { pathCommands: i.convertPathToSVG(l), size: function (e, t) { var n = i.pathReducer(e, (function (e, t) { return { x: Math.max(e.x, t.x), y: Math.max(e.y, t.y) } })); return { width: n.x + 2 * t.width, height: n.y + 2 * t.height } }(l, u), offset: function (e, t, n) { var r = function (t) { return Math.min(e[0][t] - n.width, e[3][t] - n.height) }; return { x: t.position.x - r("x") - n.width, y: t.position.y - r("y") - n.height } }(l, _, u), head: c } } }, function (e, t, n) { "use strict"; var r = this && this.__assign || function () { return (r = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]); return e }).apply(this, arguments) }; Object.defineProperty(t, "__esModule", { value: !0 }), t.produceContainer = void 0; var o = n(6), i = function (e, t, n) { return o.pointSubtraction(r(r({}, e), { x: e.x - t.x, y: e.y - t.y }), { x: 2 * -n.width, y: 2 * -n.height }) }; t.produceContainer = function (e, t, n) { var r = { x: Math.min(e.x, t.x), y: Math.min(e.y, t.y) }, o = i(e, r, n), u = i(t, r, n); return { position: r, relativeFrom: o, relativeTo: u, size: function (e, t) { return { width: Math.max(e.x, t.x), height: Math.max(e.y, t.y) } }(o, u) } } }, function (e, t, n) { "use strict"; var r = this && this.__assign || function () { return (r = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]); return e }).apply(this, arguments) }; Object.defineProperty(t, "__esModule", { value: !0 }), t.headTransformCSS = t.createHead = t.prepareHeadNode = void 0; var o = n(7), i = function (e) { return Math.round(1e3 * e) / 1e3 }, u = function (e) { if ("string" == typeof e) { var t = e; return o.default[t] } if ("object" == typeof e) { if ("function" == typeof e.func) return e.func; if ("string" == typeof e.func) return u(e.func) } if ("function" == typeof e) return e; throw new Error("head type is invalid") }; t.prepareHeadNode = function (e) { var t = u(e)(e); if (!t || !t.width || !t.height) throw new Error("head function should return { node, width, height }"); return "object" == typeof e && Object.assign(t, e), t.distance || (t.distance = 1), t }; t.createHead = function (e, t) { return r(r(r({}, e), (n = t, o = e.distance, _ = (u = function (e) { return Math.pow(1 - o, 2) * (n[1][e] - n[0][e]) + 2 * o * (1 - o) * (n[2][e] - n[1][e]) + o * o * (n[3][e] - n[2][e]) })("x"), l = u("y"), c = i(-Math.atan2(_, l) + .5 * Math.PI), { degree: i(c * (180 / Math.PI)), radius: c })), function (e, t) { var n = e.distance, r = function (e) { return Math.pow(1 - n, 3) * t[0][e] + 3 * n * Math.pow(1 - n, 2) * t[1][e] + 3 * n * n * (1 - n) * t[2][e] + n * n * n * t[3][e] }; return { x: r("x"), y: r("y") } }(e, t)); var n, o, u, _, l, c }; t.headTransformCSS = function (e) { return "rotate(" + e.degree + ", " + e.x + ", " + e.y + "), translate(" + e.x + ", " + e.y + ")" } }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0), o = n(1); t.default = function (e) { var t = e.size, n = void 0 === t ? o.HEAD_DEFAULT_SIZE : t; return { node: r.h("g", { transform: "translate(-" + n + ", 0)" }, r.h("path", { d: "M" + -n + " 0 L0 " + -n + " L" + n + " 0 L0 " + n + " Z" })), width: n, height: n } } }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0), o = n(1); t.default = function (e) { var t = e.size, n = void 0 === t ? o.HEAD_DEFAULT_SIZE : t; return { node: r.h("g", { transform: "translate(-" + n + ", 0)" }, r.h("circle", { cx: 0, cy: 0, r: n })), width: n, height: n } } }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); t.default = function (e) { var t = e.src, n = e.width, r = e.height; if (!t || !n || !r) throw new Error("image requires src, height, width"); var o = document.createElementNS("http://www.w3.org/2000/svg", "image"); return o.setAttributeNS(null, "width", String(n)), o.setAttributeNS(null, "height", String(r)), o.setAttributeNS(null, "x", String(-n)), o.setAttributeNS(null, "y", String(-r / 2)), o.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", t), { node: o, width: n, height: r } } }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0), o = n(1); t.default = function (e) { var t = e.size, n = void 0 === t ? o.HEAD_DEFAULT_SIZE : t; return { node: r.h("path", { d: "M" + -n + " 0 L0 " + -n + " L0 " + n + " Z" }), width: n, height: n } } }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0), o = n(1); t.default = function (e) { var t = e.size, n = void 0 === t ? o.HEAD_DEFAULT_SIZE : t; return { node: r.h("path", { d: "M" + -n + " " + -n + " L0 0 L" + -n + " " + n + " Z" }), width: n, height: n } } }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1); t.default = function () { return { node: null, width: r.HEAD_DEFAULT_SIZE, height: r.HEAD_DEFAULT_SIZE } } }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0), o = n(1); t.default = function (e) { var t = e.size, n = void 0 === t ? o.HEAD_DEFAULT_SIZE : t; return { node: r.h("g", null, r.h("line", { x1: -n, y1: -n, x2: 0, y2: 0 }), r.h("line", { x1: 0, y1: 0, x2: -n, y2: n })), width: n, height: n } } }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0), o = n(1); t.default = function (e) { var t = e.size, n = void 0 === t ? o.HEAD_DEFAULT_SIZE : t; return { node: r.h("g", { transform: "translate(-" + n + ", 0)" }, r.h("path", { d: "M" + -n + " " + -n + " L" + n + " 0 L" + -n + " " + n + " L0 0 Z" })), width: n, height: n } } }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.pathListBezier = t.pathReducer = t.convertPathToSVG = void 0; var r = n(6); t.convertPathToSVG = function (e) { var t = ["M"]; return t.push(r.pointToArray(e[0])), t.push("C"), t.push(r.pointToArray(e[1])), t.push(","), t.push(r.pointToArray(e[2])), t.push(","), t.push(r.pointToArray(e[3])), t.flat().join(" ").replace(/ ,/g, ",") }; t.pathReducer = function (e, t) { return e.reduce((function (e, n) { return t(e, n) })) }; t.pathListBezier = function (e, n) { var o = []; return o.push(e.relativeFrom), o.push(r.pointBezier(e.relativeFrom, e.size)), o.push(r.pointBezier(e.relativeTo, e.size)), o.push(e.relativeTo), function (e, n) { var r = t.pathReducer(e, (function (e, t) { return { x: Math.min(e.x, t.x), y: Math.min(e.y, t.y) } })); return e.map((function (e) { return { x: e.x - r.x + n.width, y: e.y - r.y + n.height } })) }(o, n) } }, function (e, t, n) { "use strict"; var r = this && this.__assign || function () { return (r = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]); return e }).apply(this, arguments) }; Object.defineProperty(t, "__esModule", { value: !0 }), t.createAnchorWithPoint = void 0; var o = n(5), i = n(3), u = n(1); t.createAnchorWithPoint = function (e) { var t = function (e) { var t = o.default(e.node); if (!t) throw new Error("point is null, check if 'from'/'to' exists"); var n = t.getBoundingClientRect(), r = n.x || n.left, i = n.y || n.top; switch (e.direction) { case u.DIRECTION.TOP_LEFT: return { x: r, y: i }; case u.DIRECTION.TOP: return { x: r + n.width / 2, y: i }; case u.DIRECTION.TOP_RIGHT: return { x: r + n.width, y: i }; case u.DIRECTION.RIGHT: return { x: r + n.width, y: i + n.height / 2 }; case u.DIRECTION.BOTTOM_LEFT: return { x: r, y: i + n.height }; case u.DIRECTION.BOTTOM: return { x: r + n.width / 2, y: i + n.height }; case u.DIRECTION.BOTTOM_RIGHT: return { x: r + n.width, y: i + n.height }; case u.DIRECTION.LEFT: return { x: r, y: i + n.height / 2 }; default: throw new Error("unexpected type " + e.direction) } }(e), n = i.getScrollPoint(); return t.x += n.x, t.y += n.y, r(r({}, e), t) } }]) }));