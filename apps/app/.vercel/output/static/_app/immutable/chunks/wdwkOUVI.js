var F = Object.defineProperty;
var G = (t, e, n) =>
	e in t ? F(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n);
var f = (t, e, n) => G(t, typeof e != 'symbol' ? e + '' : e, n);
function H() {}
const mt = (t) => t;
function z(t, e) {
	for (const n in e) t[n] = e[n];
	return t;
}
function pt(t) {
	return !!t && (typeof t == 'object' || typeof t == 'function') && typeof t.then == 'function';
}
function I(t) {
	return t();
}
function yt() {
	return Object.create(null);
}
function U(t) {
	t.forEach(I);
}
function W(t) {
	return typeof t == 'function';
}
function bt(t, e) {
	return t != t ? e == e : t !== e || (t && typeof t == 'object') || typeof t == 'function';
}
let p;
function gt(t, e) {
	return t === e ? !0 : (p || (p = document.createElement('a')), (p.href = e), t === p.href);
}
function xt(t) {
	return Object.keys(t).length === 0;
}
function L(t, ...e) {
	if (t == null) {
		for (const i of e) i(void 0);
		return H;
	}
	const n = t.subscribe(...e);
	return n.unsubscribe ? () => n.unsubscribe() : n;
}
function wt(t) {
	let e;
	return L(t, (n) => (e = n))(), e;
}
function Et(t, e, n) {
	t.$$.on_destroy.push(L(e, n));
}
function Tt(t, e, n, i) {
	if (t) {
		const s = M(t, e, n, i);
		return t[0](s);
	}
}
function M(t, e, n, i) {
	return t[1] && i ? z(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function Nt(t, e, n, i) {
	if (t[2] && i) {
		const s = t[2](i(n));
		if (e.dirty === void 0) return s;
		if (typeof s == 'object') {
			const l = [],
				c = Math.max(e.dirty.length, s.length);
			for (let o = 0; o < c; o += 1) l[o] = e.dirty[o] | s[o];
			return l;
		}
		return e.dirty | s;
	}
	return e.dirty;
}
function vt(t, e, n, i, s, l) {
	if (s) {
		const c = M(e, n, i, l);
		t.p(c, s);
	}
}
function At(t) {
	if (t.ctx.length > 32) {
		const e = [],
			n = t.ctx.length / 32;
		for (let i = 0; i < n; i++) e[i] = -1;
		return e;
	}
	return -1;
}
function kt(t) {
	const e = {};
	for (const n in t) n[0] !== '$' && (e[n] = t[n]);
	return e;
}
function jt(t, e) {
	const n = {};
	e = new Set(e);
	for (const i in t) !e.has(i) && i[0] !== '$' && (n[i] = t[i]);
	return n;
}
function Ct(t, e, n) {
	return t.set(n), e;
}
function Dt(t) {
	return t && W(t.destroy) ? t.destroy : H;
}
function Ht(t) {
	const e = typeof t == 'string' && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return e ? [parseFloat(e[1]), e[2] || 'px'] : [t, 'px'];
}
const J = ['', !0, 1, 'true', 'contenteditable'];
let b = !1;
function Lt() {
	b = !0;
}
function Mt() {
	b = !1;
}
function K(t, e, n, i) {
	for (; t < e; ) {
		const s = t + ((e - t) >> 1);
		n(s) <= i ? (t = s + 1) : (e = s);
	}
	return t;
}
function Q(t) {
	if (t.hydrate_init) return;
	t.hydrate_init = !0;
	let e = t.childNodes;
	if (t.nodeName === 'HEAD') {
		const r = [];
		for (let a = 0; a < e.length; a++) {
			const u = e[a];
			u.claim_order !== void 0 && r.push(u);
		}
		e = r;
	}
	const n = new Int32Array(e.length + 1),
		i = new Int32Array(e.length);
	n[0] = -1;
	let s = 0;
	for (let r = 0; r < e.length; r++) {
		const a = e[r].claim_order,
			u = (s > 0 && e[n[s]].claim_order <= a ? s + 1 : K(1, s, (R) => e[n[R]].claim_order, a)) - 1;
		i[r] = n[u] + 1;
		const j = u + 1;
		(n[j] = r), (s = Math.max(j, s));
	}
	const l = [],
		c = [];
	let o = e.length - 1;
	for (let r = n[s] + 1; r != 0; r = i[r - 1]) {
		for (l.push(e[r - 1]); o >= r; o--) c.push(e[o]);
		o--;
	}
	for (; o >= 0; o--) c.push(e[o]);
	l.reverse(), c.sort((r, a) => r.claim_order - a.claim_order);
	for (let r = 0, a = 0; r < c.length; r++) {
		for (; a < l.length && c[r].claim_order >= l[a].claim_order; ) a++;
		const u = a < l.length ? l[a] : null;
		t.insertBefore(c[r], u);
	}
}
function V(t, e) {
	t.appendChild(e);
}
function X(t) {
	if (!t) return document;
	const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
	return e && e.host ? e : t.ownerDocument;
}
function St(t) {
	const e = v('style');
	return (e.textContent = '/* empty */'), Y(X(t), e), e.sheet;
}
function Y(t, e) {
	return V(t.head || t, e), e.sheet;
}
function Z(t, e) {
	if (b) {
		for (
			Q(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null && t.actual_end_child.parentNode !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		e !== t.actual_end_child
			? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child)
			: (t.actual_end_child = e.nextSibling);
	} else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function $(t, e, n) {
	t.insertBefore(e, n || null);
}
function tt(t, e, n) {
	b && !n ? Z(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function E(t) {
	t.parentNode && t.parentNode.removeChild(t);
}
function Ot(t, e) {
	for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function v(t) {
	return document.createElement(t);
}
function S(t) {
	return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function A(t) {
	return document.createTextNode(t);
}
function Pt() {
	return A(' ');
}
function qt() {
	return A('');
}
function Bt(t, e, n, i) {
	return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function Rt(t) {
	return function (e) {
		return e.preventDefault(), t.call(this, e);
	};
}
function k(t, e, n) {
	n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const et = ['width', 'height'];
function nt(t, e) {
	const n = Object.getOwnPropertyDescriptors(t.__proto__);
	for (const i in e)
		e[i] == null
			? t.removeAttribute(i)
			: i === 'style'
				? (t.style.cssText = e[i])
				: i === '__value'
					? (t.value = t[i] = e[i])
					: n[i] && n[i].set && et.indexOf(i) === -1
						? (t[i] = e[i])
						: k(t, i, e[i]);
}
function Ft(t, e) {
	for (const n in e) k(t, n, e[n]);
}
function it(t, e) {
	Object.keys(e).forEach((n) => {
		st(t, n, e[n]);
	});
}
function st(t, e, n) {
	const i = e.toLowerCase();
	i in t
		? (t[i] = typeof t[i] == 'boolean' && n === '' ? !0 : n)
		: e in t
			? (t[e] = typeof t[e] == 'boolean' && n === '' ? !0 : n)
			: k(t, e, n);
}
function Gt(t) {
	return /-/.test(t) ? it : nt;
}
function zt(t) {
	return t.dataset.svelteH;
}
function It(t) {
	return Array.from(t.childNodes);
}
function O(t) {
	t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function P(t, e, n, i, s = !1) {
	O(t);
	const l = (() => {
		for (let c = t.claim_info.last_index; c < t.length; c++) {
			const o = t[c];
			if (e(o)) {
				const r = n(o);
				return r === void 0 ? t.splice(c, 1) : (t[c] = r), s || (t.claim_info.last_index = c), o;
			}
		}
		for (let c = t.claim_info.last_index - 1; c >= 0; c--) {
			const o = t[c];
			if (e(o)) {
				const r = n(o);
				return (
					r === void 0 ? t.splice(c, 1) : (t[c] = r),
					s ? r === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = c),
					o
				);
			}
		}
		return i();
	})();
	return (l.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), l;
}
function q(t, e, n, i) {
	return P(
		t,
		(s) => s.nodeName === e,
		(s) => {
			const l = [];
			for (let c = 0; c < s.attributes.length; c++) {
				const o = s.attributes[c];
				n[o.name] || l.push(o.name);
			}
			l.forEach((c) => s.removeAttribute(c));
		},
		() => i(e)
	);
}
function Ut(t, e, n) {
	return q(t, e, n, v);
}
function Wt(t, e, n) {
	return q(t, e, n, S);
}
function ct(t, e) {
	return P(
		t,
		(n) => n.nodeType === 3,
		(n) => {
			const i = '' + e;
			if (n.data.startsWith(i)) {
				if (n.data.length !== i.length) return n.splitText(i.length);
			} else n.data = i;
		},
		() => A(e),
		!0
	);
}
function Jt(t) {
	return ct(t, ' ');
}
function C(t, e, n) {
	for (let i = n; i < t.length; i += 1) {
		const s = t[i];
		if (s.nodeType === 8 && s.textContent.trim() === e) return i;
	}
	return -1;
}
function Kt(t, e) {
	const n = C(t, 'HTML_TAG_START', 0),
		i = C(t, 'HTML_TAG_END', n + 1);
	if (n === -1 || i === -1) return new g(e);
	O(t);
	const s = t.splice(n, i - n + 1);
	E(s[0]), E(s[s.length - 1]);
	const l = s.slice(1, s.length - 1);
	if (l.length === 0) return new g(e);
	for (const c of l)
		(c.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1);
	return new g(e, l);
}
function rt(t, e) {
	(e = '' + e), t.data !== e && (t.data = e);
}
function lt(t, e) {
	(e = '' + e), t.wholeText !== e && (t.data = e);
}
function Qt(t, e, n) {
	~J.indexOf(n) ? lt(t, e) : rt(t, e);
}
function Vt(t, e) {
	t.value = e ?? '';
}
function Xt(t, e, n, i) {
	n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, '');
}
function ot(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
	return new CustomEvent(t, { detail: e, bubbles: n, cancelable: i });
}
function Yt(t, e) {
	const n = [];
	let i = 0;
	for (const s of e.childNodes)
		if (s.nodeType === 8) {
			const l = s.textContent.trim();
			l === `HEAD_${t}_END`
				? ((i -= 1), n.push(s))
				: l === `HEAD_${t}_START` && ((i += 1), n.push(s));
		} else i > 0 && n.push(s);
	return n;
}
class at {
	constructor(e = !1) {
		f(this, 'is_svg', !1);
		f(this, 'e');
		f(this, 'n');
		f(this, 't');
		f(this, 'a');
		(this.is_svg = e), (this.e = this.n = null);
	}
	c(e) {
		this.h(e);
	}
	m(e, n, i = null) {
		this.e ||
			(this.is_svg
				? (this.e = S(n.nodeName))
				: (this.e = v(n.nodeType === 11 ? 'TEMPLATE' : n.nodeName)),
			(this.t = n.tagName !== 'TEMPLATE' ? n : n.content),
			this.c(e)),
			this.i(i);
	}
	h(e) {
		(this.e.innerHTML = e),
			(this.n = Array.from(
				this.e.nodeName === 'TEMPLATE' ? this.e.content.childNodes : this.e.childNodes
			));
	}
	i(e) {
		for (let n = 0; n < this.n.length; n += 1) $(this.t, this.n[n], e);
	}
	p(e) {
		this.d(), this.h(e), this.i(this.a);
	}
	d() {
		this.n.forEach(E);
	}
}
class g extends at {
	constructor(n = !1, i) {
		super(n);
		f(this, 'l');
		(this.e = this.n = null), (this.l = i);
	}
	c(n) {
		this.l ? (this.n = this.l) : super.c(n);
	}
	i(n) {
		for (let i = 0; i < this.n.length; i += 1) tt(this.t, this.n[i], n);
	}
}
function Zt(t, e) {
	return new t(e);
}
let y;
function x(t) {
	y = t;
}
function d() {
	if (!y) throw new Error('Function called outside component initialization');
	return y;
}
function $t(t) {
	d().$$.on_mount.push(t);
}
function te(t) {
	d().$$.after_update.push(t);
}
function ee(t) {
	d().$$.on_destroy.push(t);
}
function ne() {
	const t = d();
	return (e, n, { cancelable: i = !1 } = {}) => {
		const s = t.$$.callbacks[e];
		if (s) {
			const l = ot(e, n, { cancelable: i });
			return (
				s.slice().forEach((c) => {
					c.call(t, l);
				}),
				!l.defaultPrevented
			);
		}
		return !0;
	};
}
function ie(t, e) {
	return d().$$.context.set(t, e), e;
}
function se(t) {
	return d().$$.context.get(t);
}
function ce(t, e) {
	const n = t.$$.callbacks[e.type];
	n && n.slice().forEach((i) => i.call(this, e));
}
const m = [],
	D = [];
let h = [];
const T = [],
	B = Promise.resolve();
let N = !1;
function ut() {
	N || ((N = !0), B.then(_t));
}
function re() {
	return ut(), B;
}
function ft(t) {
	h.push(t);
}
function le(t) {
	T.push(t);
}
const w = new Set();
let _ = 0;
function _t() {
	if (_ !== 0) return;
	const t = y;
	do {
		try {
			for (; _ < m.length; ) {
				const e = m[_];
				_++, x(e), ht(e.$$);
			}
		} catch (e) {
			throw ((m.length = 0), (_ = 0), e);
		}
		for (x(null), m.length = 0, _ = 0; D.length; ) D.pop()();
		for (let e = 0; e < h.length; e += 1) {
			const n = h[e];
			w.has(n) || (w.add(n), n());
		}
		h.length = 0;
	} while (m.length);
	for (; T.length; ) T.pop()();
	(N = !1), w.clear(), x(t);
}
function ht(t) {
	if (t.fragment !== null) {
		t.update(), U(t.before_update);
		const e = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ft);
	}
}
function oe(t) {
	const e = [],
		n = [];
	h.forEach((i) => (t.indexOf(i) === -1 ? e.push(i) : n.push(i))), n.forEach((i) => i()), (h = e);
}
export {
	xt as $,
	kt as A,
	ce as B,
	L as C,
	W as D,
	Tt as E,
	vt as F,
	At as G,
	Nt as H,
	te as I,
	ee as J,
	Dt as K,
	qt as L,
	re as M,
	Zt as N,
	Xt as O,
	D as P,
	Ot as Q,
	Ft as R,
	Wt as S,
	S as T,
	Kt as U,
	g as V,
	X as W,
	St as X,
	mt as Y,
	ft as Z,
	ot as _,
	rt as a,
	y as a0,
	yt as a1,
	_t as a2,
	x as a3,
	oe as a4,
	I as a5,
	Lt as a6,
	Mt as a7,
	m as a8,
	ut as a9,
	ie as aa,
	se as ab,
	Ht as ac,
	le as ad,
	Gt as ae,
	ne as af,
	pt as ag,
	d as ah,
	Qt as ai,
	Ct as aj,
	gt as ak,
	Z as b,
	Ut as c,
	E as d,
	It as e,
	ct as f,
	Jt as g,
	v as h,
	tt as i,
	Pt as j,
	Et as k,
	wt as l,
	k as m,
	H as n,
	zt as o,
	Vt as p,
	Bt as q,
	U as r,
	bt as s,
	A as t,
	Rt as u,
	Yt as v,
	$t as w,
	z as x,
	nt as y,
	jt as z
};
