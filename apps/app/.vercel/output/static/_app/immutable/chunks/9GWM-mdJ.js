import { n as ge, d as A, i as Oe, t as Pe, u as De, v as Re, l as Le } from './CTLOy2q2.js';
import { d as Ke, w as re, r as de } from './DOOmkYa6.js';
import {
	a1 as je,
	a2 as Be,
	a3 as Me,
	M as $e,
	d as K,
	a4 as x,
	a as _,
	e as Q,
	b as qe,
	a5 as We,
	Y as _e,
	a6 as Ge,
	c as q,
	a7 as Ve,
	i as Ye
} from './Dz2apFQ9.js';
import { p as W, O as He } from './CZvU1ekx.js';
import { b as Xe } from './Wn8UfayS.js';
function Yt(t, e, r, n = !0) {
	const i = e - r;
	return i <= 0 ? (n ? t[t.length - 1] : t[0]) : t[i];
}
function Ht(t, e, r, n = !0) {
	const i = e + r;
	return i > t.length - 1 ? (n ? t[0] : t[t.length - 1]) : t[i];
}
function Xt(t, e, r = !0) {
	return e === t.length - 1 ? (r ? t[0] : t[e]) : t[e + 1];
}
function Ut(t, e, r = !0) {
	return e <= 0 ? (r ? t[t.length - 1] : t[0]) : t[e - 1];
}
function zt(t) {
	return t[t.length - 1];
}
function Ue(t, e) {
	return t.map((r, n) => t[(e + n) % t.length]);
}
function Zt(t, e, r = je) {
	const n = e.findIndex((i) => r(i, t));
	return n !== -1 ? e.splice(n, 1) : e.push(t), e;
}
function Jt(t, e) {
	const r = [];
	for (let n = 0; n < t.length; n += e) r.push(t.slice(n, n + e));
	return r;
}
function Qt(t, e) {
	return t >= 0 && t < e.length;
}
function er(t) {
	t.setAttribute('data-highlighted', '');
}
function tr(t) {
	t.removeAttribute('data-highlighted');
}
function ye(t) {
	return new Promise((e) => setTimeout(e, t));
}
function ze(t, e = 500) {
	let r = null;
	return function (...n) {
		const i = () => {
			(r = null), t(...n);
		};
		r && clearTimeout(r), (r = setTimeout(i, e));
	};
}
const we = () => typeof window < 'u';
function Ze() {
	const t = navigator.userAgentData;
	return (t == null ? void 0 : t.platform) ?? navigator.platform;
}
const Te = (t) => we() && t.test(Ze().toLowerCase()),
	Je = () => we() && !!navigator.maxTouchPoints,
	Qe = () => Te(/^mac/) && !Je(),
	et = () => Te(/mac|iphone|ipad|ipod/i),
	tt = () => et() && !Qe(),
	ee = 'data-melt-scroll-lock';
function fe(t, e) {
	if (!t) return;
	const r = t.style.cssText;
	return (
		Object.assign(t.style, e),
		() => {
			t.style.cssText = r;
		}
	);
}
function rt(t, e, r) {
	if (!t) return;
	const n = t.style.getPropertyValue(e);
	return (
		t.style.setProperty(e, r),
		() => {
			n ? t.style.setProperty(e, n) : t.style.removeProperty(e);
		}
	);
}
function nt(t) {
	const e = t.getBoundingClientRect().left;
	return Math.round(e) + t.scrollLeft ? 'paddingLeft' : 'paddingRight';
}
function rr(t) {
	const e = document,
		r = e.defaultView ?? window,
		{ documentElement: n, body: i } = e;
	if (i.hasAttribute(ee)) return ge;
	i.setAttribute(ee, '');
	const a = r.innerWidth - n.clientWidth,
		d = () => rt(n, '--scrollbar-width', `${a}px`),
		c = nt(n),
		f = r.getComputedStyle(i)[c],
		y = () => fe(i, { overflow: 'hidden', [c]: `calc(${f} + ${a}px)` }),
		p = () => {
			const { scrollX: N, scrollY: k, visualViewport: E } = r,
				S = (E == null ? void 0 : E.offsetLeft) ?? 0,
				D = (E == null ? void 0 : E.offsetTop) ?? 0,
				R = fe(i, {
					position: 'fixed',
					overflow: 'hidden',
					top: `${-(k - Math.floor(D))}px`,
					left: `${-(N - Math.floor(S))}px`,
					right: '0',
					[c]: `calc(${f} + ${a}px)`
				});
			return () => {
				R == null || R(), r.scrollTo(N, k);
			};
		},
		F = [d(), tt() ? p() : y()];
	return () => {
		F.forEach((N) => (N == null ? void 0 : N())), i.removeAttribute(ee);
	};
}
function nr(t) {
	const { open: e, forceVisible: r, activeTrigger: n } = t;
	return Ke([e, r, n], ([i, u, a]) => (i || u) && a !== null);
}
function at(t) {
	Oe &&
		ye(1).then(() => {
			const e = document.activeElement;
			!A(e) || e === t || ((e.tabIndex = -1), t && ((t.tabIndex = 0), t.focus()));
		});
}
function Fe() {
	return Array.from(
		document.querySelectorAll(
			'a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'
		)
	);
}
function ar(t) {
	const e = Fe(),
		n = e.indexOf(t) + 1,
		i = e[n];
	return n < e.length && A(i) ? i : null;
}
function ir(t) {
	const e = Fe(),
		n = e.indexOf(t) - 1,
		i = e[n];
	return n >= 0 && A(i) ? i : null;
}
const it = new Set(['Shift', 'Control', 'Alt', 'Meta', 'CapsLock', 'NumLock']),
	ot = { onMatch: at, getCurrentItem: () => document.activeElement };
function or(t = {}) {
	const e = { ...ot, ...t },
		r = re([]),
		n = ze(() => {
			r.update(() => []);
		});
	return {
		typed: r,
		resetTyped: n,
		handleTypeaheadSearch: (u, a) => {
			if (it.has(u)) return;
			const d = e.getCurrentItem(),
				c = W(r);
			if (!Array.isArray(c)) return;
			c.push(u.toLowerCase()), r.set(c);
			const f = a.filter(
					(S) =>
						!(
							S.getAttribute('disabled') === 'true' ||
							S.getAttribute('aria-disabled') === 'true' ||
							S.hasAttribute('data-disabled')
						)
				),
				p = c.length > 1 && c.every((S) => S === c[0]) ? c[0] : c.join(''),
				F = A(d) ? f.indexOf(d) : -1;
			let N = Ue(f, Math.max(F, 0));
			p.length === 1 && (N = N.filter((S) => S !== d));
			const E = N.find(
				(S) =>
					(S == null ? void 0 : S.innerText) &&
					S.innerText.toLowerCase().startsWith(p.toLowerCase())
			);
			A(E) && E !== d && e.onMatch(E), n();
		}
	};
}
async function sr(t) {
	const { prop: e, defaultEl: r } = t;
	if ((await Promise.all([ye(1), He]), e === void 0)) {
		r == null || r.focus();
		return;
	}
	const n = Pe(e) ? e(r) : e;
	if (typeof n == 'string') {
		const i = document.querySelector(n);
		if (!A(i)) return;
		i.focus();
	} else A(n) && n.focus();
}
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */ var Ne = [
		'input:not([inert])',
		'select:not([inert])',
		'textarea:not([inert])',
		'a[href]:not([inert])',
		'button:not([inert])',
		'[tabindex]:not(slot):not([inert])',
		'audio[controls]:not([inert])',
		'video[controls]:not([inert])',
		'[contenteditable]:not([contenteditable="false"]):not([inert])',
		'details>summary:first-of-type:not([inert])',
		'details:not([inert])'
	],
	Y = Ne.join(','),
	Se = typeof Element > 'u',
	P = Se
		? function () {}
		: Element.prototype.matches ||
			Element.prototype.msMatchesSelector ||
			Element.prototype.webkitMatchesSelector,
	H =
		!Se && Element.prototype.getRootNode
			? function (t) {
					var e;
					return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
				}
			: function (t) {
					return t == null ? void 0 : t.ownerDocument;
				},
	X = function t(e, r) {
		var n;
		r === void 0 && (r = !0);
		var i =
				e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, 'inert'),
			u = i === '' || i === 'true',
			a = u || (r && e && t(e.parentNode));
		return a;
	},
	st = function (e) {
		var r,
			n =
				e == null || (r = e.getAttribute) === null || r === void 0
					? void 0
					: r.call(e, 'contenteditable');
		return n === '' || n === 'true';
	},
	Ee = function (e, r, n) {
		if (X(e)) return [];
		var i = Array.prototype.slice.apply(e.querySelectorAll(Y));
		return r && P.call(e, Y) && i.unshift(e), (i = i.filter(n)), i;
	},
	ke = function t(e, r, n) {
		for (var i = [], u = Array.from(e); u.length; ) {
			var a = u.shift();
			if (!X(a, !1))
				if (a.tagName === 'SLOT') {
					var d = a.assignedElements(),
						c = d.length ? d : a.children,
						f = t(c, !0, n);
					n.flatten ? i.push.apply(i, f) : i.push({ scopeParent: a, candidates: f });
				} else {
					var y = P.call(a, Y);
					y && n.filter(a) && (r || !e.includes(a)) && i.push(a);
					var p = a.shadowRoot || (typeof n.getShadowRoot == 'function' && n.getShadowRoot(a)),
						F = !X(p, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
					if (p && F) {
						var N = t(p === !0 ? a.children : p.children, !0, n);
						n.flatten ? i.push.apply(i, N) : i.push({ scopeParent: a, candidates: N });
					} else u.unshift.apply(u, a.children);
				}
		}
		return i;
	},
	Ie = function (e) {
		return !isNaN(parseInt(e.getAttribute('tabindex'), 10));
	},
	O = function (e) {
		if (!e) throw new Error('No node provided');
		return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || st(e)) && !Ie(e)
			? 0
			: e.tabIndex;
	},
	ut = function (e, r) {
		var n = O(e);
		return n < 0 && r && !Ie(e) ? 0 : n;
	},
	ct = function (e, r) {
		return e.tabIndex === r.tabIndex ? e.documentOrder - r.documentOrder : e.tabIndex - r.tabIndex;
	},
	xe = function (e) {
		return e.tagName === 'INPUT';
	},
	lt = function (e) {
		return xe(e) && e.type === 'hidden';
	},
	dt = function (e) {
		var r =
			e.tagName === 'DETAILS' &&
			Array.prototype.slice.apply(e.children).some(function (n) {
				return n.tagName === 'SUMMARY';
			});
		return r;
	},
	ft = function (e, r) {
		for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === r) return e[n];
	},
	vt = function (e) {
		if (!e.name) return !0;
		var r = e.form || H(e),
			n = function (d) {
				return r.querySelectorAll('input[type="radio"][name="' + d + '"]');
			},
			i;
		if (typeof window < 'u' && typeof window.CSS < 'u' && typeof window.CSS.escape == 'function')
			i = n(window.CSS.escape(e.name));
		else
			try {
				i = n(e.name);
			} catch (a) {
				return (
					console.error(
						'Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s',
						a.message
					),
					!1
				);
			}
		var u = ft(i, e.form);
		return !u || u === e;
	},
	bt = function (e) {
		return xe(e) && e.type === 'radio';
	},
	ht = function (e) {
		return bt(e) && !vt(e);
	},
	pt = function (e) {
		var r,
			n = e && H(e),
			i = (r = n) === null || r === void 0 ? void 0 : r.host,
			u = !1;
		if (n && n !== e) {
			var a, d, c;
			for (
				u = !!(
					((a = i) !== null &&
						a !== void 0 &&
						(d = a.ownerDocument) !== null &&
						d !== void 0 &&
						d.contains(i)) ||
					(e != null && (c = e.ownerDocument) !== null && c !== void 0 && c.contains(e))
				);
				!u && i;

			) {
				var f, y, p;
				(n = H(i)),
					(i = (f = n) === null || f === void 0 ? void 0 : f.host),
					(u = !!(
						(y = i) !== null &&
						y !== void 0 &&
						(p = y.ownerDocument) !== null &&
						p !== void 0 &&
						p.contains(i)
					));
			}
		}
		return u;
	},
	ve = function (e) {
		var r = e.getBoundingClientRect(),
			n = r.width,
			i = r.height;
		return n === 0 && i === 0;
	},
	mt = function (e, r) {
		var n = r.displayCheck,
			i = r.getShadowRoot;
		if (getComputedStyle(e).visibility === 'hidden') return !0;
		var u = P.call(e, 'details>summary:first-of-type'),
			a = u ? e.parentElement : e;
		if (P.call(a, 'details:not([open]) *')) return !0;
		if (!n || n === 'full' || n === 'legacy-full') {
			if (typeof i == 'function') {
				for (var d = e; e; ) {
					var c = e.parentElement,
						f = H(e);
					if (c && !c.shadowRoot && i(c) === !0) return ve(e);
					e.assignedSlot
						? (e = e.assignedSlot)
						: !c && f !== e.ownerDocument
							? (e = f.host)
							: (e = c);
				}
				e = d;
			}
			if (pt(e)) return !e.getClientRects().length;
			if (n !== 'legacy-full') return !0;
		} else if (n === 'non-zero-area') return ve(e);
		return !1;
	},
	gt = function (e) {
		if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
			for (var r = e.parentElement; r; ) {
				if (r.tagName === 'FIELDSET' && r.disabled) {
					for (var n = 0; n < r.children.length; n++) {
						var i = r.children.item(n);
						if (i.tagName === 'LEGEND')
							return P.call(r, 'fieldset[disabled] *') ? !0 : !i.contains(e);
					}
					return !0;
				}
				r = r.parentElement;
			}
		return !1;
	},
	U = function (e, r) {
		return !(r.disabled || X(r) || lt(r) || mt(r, e) || dt(r) || gt(r));
	},
	ne = function (e, r) {
		return !(ht(r) || O(r) < 0 || !U(e, r));
	},
	yt = function (e) {
		var r = parseInt(e.getAttribute('tabindex'), 10);
		return !!(isNaN(r) || r >= 0);
	},
	wt = function t(e) {
		var r = [],
			n = [];
		return (
			e.forEach(function (i, u) {
				var a = !!i.scopeParent,
					d = a ? i.scopeParent : i,
					c = ut(d, a),
					f = a ? t(i.candidates) : d;
				c === 0
					? a
						? r.push.apply(r, f)
						: r.push(d)
					: n.push({ documentOrder: u, tabIndex: c, item: i, isScope: a, content: f });
			}),
			n
				.sort(ct)
				.reduce(function (i, u) {
					return u.isScope ? i.push.apply(i, u.content) : i.push(u.content), i;
				}, [])
				.concat(r)
		);
	},
	Tt = function (e, r) {
		r = r || {};
		var n;
		return (
			r.getShadowRoot
				? (n = ke([e], r.includeContainer, {
						filter: ne.bind(null, r),
						flatten: !1,
						getShadowRoot: r.getShadowRoot,
						shadowRootFilter: yt
					}))
				: (n = Ee(e, r.includeContainer, ne.bind(null, r))),
			wt(n)
		);
	},
	Ft = function (e, r) {
		r = r || {};
		var n;
		return (
			r.getShadowRoot
				? (n = ke([e], r.includeContainer, {
						filter: U.bind(null, r),
						flatten: !0,
						getShadowRoot: r.getShadowRoot
					}))
				: (n = Ee(e, r.includeContainer, U.bind(null, r))),
			n
		);
	},
	L = function (e, r) {
		if (((r = r || {}), !e)) throw new Error('No node provided');
		return P.call(e, Y) === !1 ? !1 : ne(r, e);
	},
	Nt = Ne.concat('iframe').join(','),
	te = function (e, r) {
		if (((r = r || {}), !e)) throw new Error('No node provided');
		return P.call(e, Nt) === !1 ? !1 : U(r, e);
	};
/*!
 * focus-trap 7.6.5
 * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
 */ function ae(t, e) {
	(e == null || e > t.length) && (e = t.length);
	for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
	return n;
}
function St(t) {
	if (Array.isArray(t)) return ae(t);
}
function Et(t, e, r) {
	return (
		(e = Ct(e)) in t
			? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
			: (t[e] = r),
		t
	);
}
function kt(t) {
	if ((typeof Symbol < 'u' && t[Symbol.iterator] != null) || t['@@iterator'] != null)
		return Array.from(t);
}
function It() {
	throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function be(t, e) {
	var r = Object.keys(t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(t);
		e &&
			(n = n.filter(function (i) {
				return Object.getOwnPropertyDescriptor(t, i).enumerable;
			})),
			r.push.apply(r, n);
	}
	return r;
}
function he(t) {
	for (var e = 1; e < arguments.length; e++) {
		var r = arguments[e] != null ? arguments[e] : {};
		e % 2
			? be(Object(r), !0).forEach(function (n) {
					Et(t, n, r[n]);
				})
			: Object.getOwnPropertyDescriptors
				? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
				: be(Object(r)).forEach(function (n) {
						Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
					});
	}
	return t;
}
function xt(t) {
	return St(t) || kt(t) || Ot(t) || It();
}
function At(t, e) {
	if (typeof t != 'object' || !t) return t;
	var r = t[Symbol.toPrimitive];
	if (r !== void 0) {
		var n = r.call(t, e);
		if (typeof n != 'object') return n;
		throw new TypeError('@@toPrimitive must return a primitive value.');
	}
	return (e === 'string' ? String : Number)(t);
}
function Ct(t) {
	var e = At(t, 'string');
	return typeof e == 'symbol' ? e : e + '';
}
function Ot(t, e) {
	if (t) {
		if (typeof t == 'string') return ae(t, e);
		var r = {}.toString.call(t).slice(8, -1);
		return (
			r === 'Object' && t.constructor && (r = t.constructor.name),
			r === 'Map' || r === 'Set'
				? Array.from(t)
				: r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
					? ae(t, e)
					: void 0
		);
	}
}
var pe = {
		activateTrap: function (e, r) {
			if (e.length > 0) {
				var n = e[e.length - 1];
				n !== r && n._setPausedState(!0);
			}
			var i = e.indexOf(r);
			i === -1 || e.splice(i, 1), e.push(r);
		},
		deactivateTrap: function (e, r) {
			var n = e.indexOf(r);
			n !== -1 && e.splice(n, 1),
				e.length > 0 && !e[e.length - 1]._isManuallyPaused() && e[e.length - 1]._setPausedState(!1);
		}
	},
	Pt = function (e) {
		return e.tagName && e.tagName.toLowerCase() === 'input' && typeof e.select == 'function';
	},
	Dt = function (e) {
		return (
			(e == null ? void 0 : e.key) === 'Escape' ||
			(e == null ? void 0 : e.key) === 'Esc' ||
			(e == null ? void 0 : e.keyCode) === 27
		);
	},
	G = function (e) {
		return (e == null ? void 0 : e.key) === 'Tab' || (e == null ? void 0 : e.keyCode) === 9;
	},
	Rt = function (e) {
		return G(e) && !e.shiftKey;
	},
	Lt = function (e) {
		return G(e) && e.shiftKey;
	},
	me = function (e) {
		return setTimeout(e, 0);
	},
	$ = function (e) {
		for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
			n[i - 1] = arguments[i];
		return typeof e == 'function' ? e.apply(void 0, n) : e;
	},
	V = function (e) {
		return e.target.shadowRoot && typeof e.composedPath == 'function'
			? e.composedPath()[0]
			: e.target;
	},
	Kt = [],
	jt = function (e, r) {
		var n = (r == null ? void 0 : r.document) || document,
			i = (r == null ? void 0 : r.trapStack) || Kt,
			u = he(
				{
					returnFocusOnDeactivate: !0,
					escapeDeactivates: !0,
					delayInitialFocus: !0,
					isKeyForward: Rt,
					isKeyBackward: Lt
				},
				r
			),
			a = {
				containers: [],
				containerGroups: [],
				tabbableGroups: [],
				nodeFocusedBeforeActivation: null,
				mostRecentlyFocusedNode: null,
				active: !1,
				paused: !1,
				manuallyPaused: !1,
				delayInitialFocusTimer: void 0,
				recentNavEvent: void 0
			},
			d,
			c = function (o, s, l) {
				return o && o[s] !== void 0 ? o[s] : u[l || s];
			},
			f = function (o, s) {
				var l =
					typeof (s == null ? void 0 : s.composedPath) == 'function' ? s.composedPath() : void 0;
				return a.containerGroups.findIndex(function (b) {
					var h = b.container,
						g = b.tabbableNodes;
					return (
						h.contains(o) ||
						(l == null ? void 0 : l.includes(h)) ||
						g.find(function (v) {
							return v === o;
						})
					);
				});
			},
			y = function (o) {
				var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
					l = s.hasFallback,
					b = l === void 0 ? !1 : l,
					h = s.params,
					g = h === void 0 ? [] : h,
					v = u[o];
				if (
					(typeof v == 'function' && (v = v.apply(void 0, xt(g))), v === !0 && (v = void 0), !v)
				) {
					if (v === void 0 || v === !1) return v;
					throw new Error(
						'`'.concat(o, '` was specified but was not a node, or did not return a node')
					);
				}
				var w = v;
				if (typeof v == 'string') {
					try {
						w = n.querySelector(v);
					} catch (T) {
						throw new Error(
							'`'.concat(o, '` appears to be an invalid selector; error="').concat(T.message, '"')
						);
					}
					if (!w && !b) throw new Error('`'.concat(o, '` as selector refers to no known node'));
				}
				return w;
			},
			p = function () {
				var o = y('initialFocus', { hasFallback: !0 });
				if (o === !1) return !1;
				if (o === void 0 || (o && !te(o, u.tabbableOptions)))
					if (f(n.activeElement) >= 0) o = n.activeElement;
					else {
						var s = a.tabbableGroups[0],
							l = s && s.firstTabbableNode;
						o = l || y('fallbackFocus');
					}
				else o === null && (o = y('fallbackFocus'));
				if (!o) throw new Error('Your focus-trap needs to have at least one focusable element');
				return o;
			},
			F = function () {
				if (
					((a.containerGroups = a.containers.map(function (o) {
						var s = Tt(o, u.tabbableOptions),
							l = Ft(o, u.tabbableOptions),
							b = s.length > 0 ? s[0] : void 0,
							h = s.length > 0 ? s[s.length - 1] : void 0,
							g = l.find(function (T) {
								return L(T);
							}),
							v = l
								.slice()
								.reverse()
								.find(function (T) {
									return L(T);
								}),
							w = !!s.find(function (T) {
								return O(T) > 0;
							});
						return {
							container: o,
							tabbableNodes: s,
							focusableNodes: l,
							posTabIndexesFound: w,
							firstTabbableNode: b,
							lastTabbableNode: h,
							firstDomTabbableNode: g,
							lastDomTabbableNode: v,
							nextTabbableNode: function (C) {
								var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
									I = s.indexOf(C);
								return I < 0
									? B
										? l.slice(l.indexOf(C) + 1).find(function (M) {
												return L(M);
											})
										: l
												.slice(0, l.indexOf(C))
												.reverse()
												.find(function (M) {
													return L(M);
												})
									: s[I + (B ? 1 : -1)];
							}
						};
					})),
					(a.tabbableGroups = a.containerGroups.filter(function (o) {
						return o.tabbableNodes.length > 0;
					})),
					a.tabbableGroups.length <= 0 && !y('fallbackFocus'))
				)
					throw new Error(
						'Your focus-trap must have at least one container with at least one tabbable node in it at all times'
					);
				if (
					a.containerGroups.find(function (o) {
						return o.posTabIndexesFound;
					}) &&
					a.containerGroups.length > 1
				)
					throw new Error(
						"At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps."
					);
			},
			N = function (o) {
				var s = o.activeElement;
				if (s) return s.shadowRoot && s.shadowRoot.activeElement !== null ? N(s.shadowRoot) : s;
			},
			k = function (o) {
				if (o !== !1 && o !== N(document)) {
					if (!o || !o.focus) {
						k(p());
						return;
					}
					o.focus({ preventScroll: !!u.preventScroll }),
						(a.mostRecentlyFocusedNode = o),
						Pt(o) && o.select();
				}
			},
			E = function (o) {
				var s = y('setReturnFocus', { params: [o] });
				return s || (s === !1 ? !1 : o);
			},
			S = function (o) {
				var s = o.target,
					l = o.event,
					b = o.isBackward,
					h = b === void 0 ? !1 : b;
				(s = s || V(l)), F();
				var g = null;
				if (a.tabbableGroups.length > 0) {
					var v = f(s, l),
						w = v >= 0 ? a.containerGroups[v] : void 0;
					if (v < 0)
						h
							? (g = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode)
							: (g = a.tabbableGroups[0].firstTabbableNode);
					else if (h) {
						var T = a.tabbableGroups.findIndex(function (Z) {
							var J = Z.firstTabbableNode;
							return s === J;
						});
						if (
							(T < 0 &&
								(w.container === s ||
									(te(s, u.tabbableOptions) &&
										!L(s, u.tabbableOptions) &&
										!w.nextTabbableNode(s, !1))) &&
								(T = v),
							T >= 0)
						) {
							var C = T === 0 ? a.tabbableGroups.length - 1 : T - 1,
								B = a.tabbableGroups[C];
							g = O(s) >= 0 ? B.lastTabbableNode : B.lastDomTabbableNode;
						} else G(l) || (g = w.nextTabbableNode(s, !1));
					} else {
						var I = a.tabbableGroups.findIndex(function (Z) {
							var J = Z.lastTabbableNode;
							return s === J;
						});
						if (
							(I < 0 &&
								(w.container === s ||
									(te(s, u.tabbableOptions) &&
										!L(s, u.tabbableOptions) &&
										!w.nextTabbableNode(s))) &&
								(I = v),
							I >= 0)
						) {
							var M = I === a.tabbableGroups.length - 1 ? 0 : I + 1,
								le = a.tabbableGroups[M];
							g = O(s) >= 0 ? le.firstTabbableNode : le.firstDomTabbableNode;
						} else G(l) || (g = w.nextTabbableNode(s));
					}
				} else g = y('fallbackFocus');
				return g;
			},
			D = function (o) {
				var s = V(o);
				if (!(f(s, o) >= 0)) {
					if ($(u.clickOutsideDeactivates, o)) {
						d.deactivate({ returnFocus: u.returnFocusOnDeactivate });
						return;
					}
					$(u.allowOutsideClick, o) || o.preventDefault();
				}
			},
			R = function (o) {
				var s = V(o),
					l = f(s, o) >= 0;
				if (l || s instanceof Document) l && (a.mostRecentlyFocusedNode = s);
				else {
					o.stopImmediatePropagation();
					var b,
						h = !0;
					if (a.mostRecentlyFocusedNode)
						if (O(a.mostRecentlyFocusedNode) > 0) {
							var g = f(a.mostRecentlyFocusedNode),
								v = a.containerGroups[g].tabbableNodes;
							if (v.length > 0) {
								var w = v.findIndex(function (T) {
									return T === a.mostRecentlyFocusedNode;
								});
								w >= 0 &&
									(u.isKeyForward(a.recentNavEvent)
										? w + 1 < v.length && ((b = v[w + 1]), (h = !1))
										: w - 1 >= 0 && ((b = v[w - 1]), (h = !1)));
							}
						} else
							a.containerGroups.some(function (T) {
								return T.tabbableNodes.some(function (C) {
									return O(C) > 0;
								});
							}) || (h = !1);
					else h = !1;
					h &&
						(b = S({
							target: a.mostRecentlyFocusedNode,
							isBackward: u.isKeyBackward(a.recentNavEvent)
						})),
						k(b || a.mostRecentlyFocusedNode || p());
				}
				a.recentNavEvent = void 0;
			},
			Ae = function (o) {
				var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
				a.recentNavEvent = o;
				var l = S({ event: o, isBackward: s });
				l && (G(o) && o.preventDefault(), k(l));
			},
			ie = function (o) {
				(u.isKeyForward(o) || u.isKeyBackward(o)) && Ae(o, u.isKeyBackward(o));
			},
			oe = function (o) {
				Dt(o) && $(u.escapeDeactivates, o) !== !1 && (o.preventDefault(), d.deactivate());
			},
			se = function (o) {
				var s = V(o);
				f(s, o) >= 0 ||
					$(u.clickOutsideDeactivates, o) ||
					$(u.allowOutsideClick, o) ||
					(o.preventDefault(), o.stopImmediatePropagation());
			},
			ue = function () {
				if (a.active)
					return (
						pe.activateTrap(i, d),
						(a.delayInitialFocusTimer = u.delayInitialFocus
							? me(function () {
									k(p());
								})
							: k(p())),
						n.addEventListener('focusin', R, !0),
						n.addEventListener('mousedown', D, { capture: !0, passive: !1 }),
						n.addEventListener('touchstart', D, { capture: !0, passive: !1 }),
						n.addEventListener('click', se, { capture: !0, passive: !1 }),
						n.addEventListener('keydown', ie, { capture: !0, passive: !1 }),
						n.addEventListener('keydown', oe),
						d
					);
			},
			ce = function () {
				if (a.active)
					return (
						n.removeEventListener('focusin', R, !0),
						n.removeEventListener('mousedown', D, !0),
						n.removeEventListener('touchstart', D, !0),
						n.removeEventListener('click', se, !0),
						n.removeEventListener('keydown', ie, !0),
						n.removeEventListener('keydown', oe),
						d
					);
			},
			Ce = function (o) {
				var s = o.some(function (l) {
					var b = Array.from(l.removedNodes);
					return b.some(function (h) {
						return h === a.mostRecentlyFocusedNode;
					});
				});
				s && k(p());
			},
			z = typeof window < 'u' && 'MutationObserver' in window ? new MutationObserver(Ce) : void 0,
			j = function () {
				z &&
					(z.disconnect(),
					a.active &&
						!a.paused &&
						a.containers.map(function (o) {
							z.observe(o, { subtree: !0, childList: !0 });
						}));
			};
		return (
			(d = {
				get active() {
					return a.active;
				},
				get paused() {
					return a.paused;
				},
				activate: function (o) {
					if (a.active) return this;
					var s = c(o, 'onActivate'),
						l = c(o, 'onPostActivate'),
						b = c(o, 'checkCanFocusTrap');
					b || F(),
						(a.active = !0),
						(a.paused = !1),
						(a.nodeFocusedBeforeActivation = N(n)),
						s == null || s();
					var h = function () {
						b && F(), ue(), j(), l == null || l();
					};
					return b ? (b(a.containers.concat()).then(h, h), this) : (h(), this);
				},
				deactivate: function (o) {
					if (!a.active) return this;
					var s = he(
						{
							onDeactivate: u.onDeactivate,
							onPostDeactivate: u.onPostDeactivate,
							checkCanReturnFocus: u.checkCanReturnFocus
						},
						o
					);
					clearTimeout(a.delayInitialFocusTimer),
						(a.delayInitialFocusTimer = void 0),
						ce(),
						(a.active = !1),
						(a.paused = !1),
						j(),
						pe.deactivateTrap(i, d);
					var l = c(s, 'onDeactivate'),
						b = c(s, 'onPostDeactivate'),
						h = c(s, 'checkCanReturnFocus'),
						g = c(s, 'returnFocus', 'returnFocusOnDeactivate');
					l == null || l();
					var v = function () {
						me(function () {
							g && k(E(a.nodeFocusedBeforeActivation)), b == null || b();
						});
					};
					return g && h ? (h(E(a.nodeFocusedBeforeActivation)).then(v, v), this) : (v(), this);
				},
				pause: function (o) {
					return a.active ? ((a.manuallyPaused = !0), this._setPausedState(!0, o)) : this;
				},
				unpause: function (o) {
					return a.active
						? ((a.manuallyPaused = !1),
							i[i.length - 1] !== this ? this : this._setPausedState(!1, o))
						: this;
				},
				updateContainerElements: function (o) {
					var s = [].concat(o).filter(Boolean);
					return (
						(a.containers = s.map(function (l) {
							return typeof l == 'string' ? n.querySelector(l) : l;
						})),
						a.active && F(),
						j(),
						this
					);
				}
			}),
			Object.defineProperties(d, {
				_isManuallyPaused: {
					value: function () {
						return a.manuallyPaused;
					}
				},
				_setPausedState: {
					value: function (o, s) {
						if (a.paused === o) return this;
						if (((a.paused = o), o)) {
							var l = c(s, 'onPause'),
								b = c(s, 'onPostPause');
							l == null || l(), ce(), j(), b == null || b();
						} else {
							var h = c(s, 'onUnpause'),
								g = c(s, 'onPostUnpause');
							h == null || h(), F(), ue(), j(), g == null || g();
						}
						return this;
					}
				}
			}),
			d.updateContainerElements(e),
			d
		);
	};
function Bt(t = {}) {
	let e;
	const { immediate: r, ...n } = t,
		i = re(!1),
		u = re(!1),
		a = (p) => (e == null ? void 0 : e.activate(p)),
		d = (p) => {
			e == null || e.deactivate(p);
		},
		c = () => {
			e && (e.pause(), u.set(!0));
		},
		f = () => {
			e && (e.unpause(), u.set(!1));
		};
	return {
		useFocusTrap: (p) => (
			(e = jt(p, {
				...n,
				onActivate() {
					var F;
					i.set(!0), (F = t.onActivate) == null || F.call(t);
				},
				onDeactivate() {
					var F;
					i.set(!1), (F = t.onDeactivate) == null || F.call(t);
				}
			})),
			r && a(),
			{
				destroy() {
					d(), (e = void 0);
				}
			}
		),
		hasFocus: de(i),
		isPaused: de(u),
		activate: a,
		deactivate: d,
		pause: c,
		unpause: f
	};
}
const Mt = { floating: {}, focusTrap: {}, clickOutside: {}, escapeKeydown: {}, portal: 'body' },
	ur = (t, e) => {
		t.dataset.escapee = '';
		const { anchorElement: r, open: n, options: i } = e;
		if (!r || !n || !i) return { destroy: ge };
		const u = { ...Mt, ...i },
			a = [];
		if (u.portal !== null) {
			const c = Be(t, u.portal);
			c != null && c.destroy && a.push(c.destroy);
		}
		if ((a.push(Me(r, t, u.floating).destroy), u.focusTrap !== null)) {
			const { useFocusTrap: c } = Bt({
					immediate: !0,
					escapeDeactivates: !1,
					allowOutsideClick: !0,
					returnFocusOnDeactivate: !1,
					fallbackFocus: t,
					...u.focusTrap
				}),
				f = c(t);
			f != null && f.destroy && a.push(f.destroy);
		}
		u.clickOutside !== null &&
			a.push(
				De(t, {
					enabled: n,
					handler: (c) => {
						c.defaultPrevented || (A(r) && !r.contains(c.target) && (n.set(!1), r.focus()));
					},
					...u.clickOutside
				}).destroy
			),
			u.escapeKeydown !== null &&
				a.push(
					Re(t, {
						enabled: n,
						handler: () => {
							n.set(!1);
						},
						...u.escapeKeydown
					}).destroy
				);
		const d = Le(...a);
		return {
			destroy() {
				d();
			}
		};
	},
	$t = { orientation: 'horizontal', decorative: !1 },
	cr = (t) => {
		const e = { ...$t, ...t },
			r = $e(e),
			{ orientation: n, decorative: i } = r;
		return {
			elements: {
				root: Xe('separator', {
					stores: [n, i],
					returned: ([a, d]) => ({
						role: d ? 'none' : 'separator',
						'aria-orientation': a === 'vertical' ? a : void 0,
						'aria-hidden': d,
						'data-orientation': a
					})
				})
			},
			options: r
		};
	},
	lr = async (t, e = 'name', r = !1) => {
		if (((t = t || W(q)), !t)) throw new Error('No directory path provided');
		if (
			(
				await K.select()
					.from(x)
					.where(_(x.path, W(q)))
			).length === 0
		)
			throw new Error('Collection not found');
		const i = await K.select()
				.from(Q)
				.where(qe(_(Q.collectionPath, W(q)), t !== W(q) ? _(Q.parentPath, t) : void 0)),
			u = We(i, t),
			a = (c) => {
				c.sort((f, y) =>
					e === 'name' && f.name && y.name
						? Ge(f, y)
						: (e === 'date' && console.warn('Sorting by date is not implemented yet'), 0)
				),
					c.forEach((f) => {
						f.children && a(f.children);
					});
			};
		a(u);
		const d = (c) =>
			c.filter((f) => {
				var y;
				return !r && (y = f.name) != null && y.startsWith('.')
					? !1
					: (f.children && (f.children = d(f.children)), !0);
			});
		return _e.set(r ? u : d(u)), r ? u : d(u);
	},
	dr = async (t) => {
		if (!t) return;
		q.set(t), Ve.set([]), Ye.set(null);
		const e = { path: t, name: t.split('/').pop(), lastOpened: new Date() },
			r = await K.select().from(x).where(_(x.path, t));
		r && r.length > 0
			? await K.update(x).set({ lastOpened: new Date() }).where(_(x.path, t))
			: await K.insert(x).values(e);
	},
	fr = async () => await K.select().from(x);
export {
	cr as a,
	rr as b,
	or as c,
	nr as d,
	ir as e,
	lr as f,
	ar as g,
	at as h,
	er as i,
	sr as j,
	Jt as k,
	Qt as l,
	zt as m,
	Yt as n,
	Ht as o,
	Ut as p,
	Xt as q,
	tr as r,
	ye as s,
	Zt as t,
	ur as u,
	Bt as v,
	dr as w,
	fr as x
};
