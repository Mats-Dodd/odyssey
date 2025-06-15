import {
	s as Pe,
	d as _,
	i as v,
	L as ne,
	z as Ne,
	k as _e,
	x as fe,
	A as Ze,
	E as we,
	F as Ce,
	G as Se,
	H as Ee,
	r as Ve,
	Z as ot,
	y as he,
	K as He,
	q as X,
	c as y,
	e as K,
	h as x,
	P as Le,
	n as ae,
	m as z,
	R as at,
	b as Y,
	S as ut,
	T as ct,
	B as Ae,
	g as P,
	j as V,
	Q as Ge,
	l as Jt,
	ad as lt,
	a as Me,
	f as H,
	t as U,
	U as un,
	V as cn,
	p as mt,
	J as mn,
	v as $n
} from '../chunks/wdwkOUVI.js';
import {
	S as je,
	i as Oe,
	t as $,
	a as m,
	g as ue,
	e as ce,
	f as $t,
	h as Kt,
	j as Qt,
	d,
	m as p,
	c as h,
	b,
	k as rt
} from '../chunks/JshcQj11.js';
import { f as gt } from '../chunks/DCdvB3a6.js';
import { d as _t, m as Je, r as gn, c as Xe } from '../chunks/2lQ-nxoL.js';
import {
	O as Yt,
	Z as _n,
	n as De,
	c as Ye,
	i as ft,
	f as st,
	_ as dt,
	$ as pt,
	G as ye,
	m as Ke,
	S as ee,
	I as le,
	s as ze,
	q as it,
	E as ht,
	F as tt,
	o as qe,
	B as bt,
	A as nt,
	a0 as Qe,
	a1 as dn,
	a2 as pn,
	D as Ue,
	J as hn
} from '../chunks/DZQ4DMzf.js';
import { S as Te } from '../chunks/DociSdig.js';
import { g as Fe, c as G, a as yt, f as bn, B as Be } from '../chunks/SV1JYOhp.js';
import { L as et } from '../chunks/D9yiXxoh.js';
import { R as xt, C as en, T as tn } from '../chunks/DnqHzMrx.js';
import {
	g as vn,
	u as kn,
	a as wn,
	C as nn,
	T as ln,
	b as rn,
	c as ke,
	d as xe,
	S as sn,
	e as Re
} from '../chunks/DbqXQuxM.js';
import { M as vt } from '../chunks/BMSQkwth.js';
import { L as Cn, C as Sn } from '../chunks/BOy_XFTJ.js';
import { A as En, W as Tn } from '../chunks/BdqK6NE2.js';
import { L as Nn } from '../chunks/B0Zr7OpR.js';
const Dn = (s) => ({ builder: s[0] & 256 }),
	kt = (s) => ({ builder: s[8] }),
	An = (s) => ({ builder: s[0] & 256 }),
	wt = (s) => ({ builder: s[8] }),
	Ln = (s) => ({ builder: s[0] & 256 }),
	Ct = (s) => ({ builder: s[8] }),
	Pn = (s) => ({ builder: s[0] & 256 }),
	St = (s) => ({ builder: s[8] }),
	Vn = (s) => ({ builder: s[0] & 256 }),
	Et = (s) => ({ builder: s[8] }),
	jn = (s) => ({ builder: s[0] & 256 }),
	Tt = (s) => ({ builder: s[8] });
function On(s) {
	let e, l, t, r;
	const n = s[28].default,
		o = we(n, s, s[27], kt);
	let f = [s[8], s[13]],
		i = {};
	for (let a = 0; a < f.length; a += 1) i = fe(i, f[a]);
	return {
		c() {
			(e = x('div')), o && o.c(), this.h();
		},
		l(a) {
			e = y(a, 'DIV', {});
			var u = K(e);
			o && o.l(u), u.forEach(_), this.h();
		},
		h() {
			he(e, i);
		},
		m(a, u) {
			v(a, e, u),
				o && o.m(e, null),
				s[33](e),
				(l = !0),
				t ||
					((r = [
						He(s[8].action(e)),
						X(e, 'm-focusout', s[12]),
						X(e, 'm-keydown', s[12]),
						X(e, 'm-pointermove', s[12])
					]),
					(t = !0));
		},
		p(a, u) {
			o &&
				o.p &&
				(!l || u[0] & 134217984) &&
				Ce(o, n, a, a[27], l ? Ee(n, a[27], u, Dn) : Se(a[27]), kt),
				he(e, (i = Fe(f, [u[0] & 256 && a[8], u[0] & 8192 && a[13]])));
		},
		i(a) {
			l || (m(o, a), (l = !0));
		},
		o(a) {
			$(o, a), (l = !1);
		},
		d(a) {
			a && _(e), o && o.d(a), s[33](null), (t = !1), Ve(r);
		}
	};
}
function zn(s) {
	let e, l, t, r, n;
	const o = s[28].default,
		f = we(o, s, s[27], wt);
	let i = [s[8], s[13]],
		a = {};
	for (let u = 0; u < i.length; u += 1) a = fe(a, i[u]);
	return {
		c() {
			(e = x('div')), f && f.c(), this.h();
		},
		l(u) {
			e = y(u, 'DIV', {});
			var c = K(e);
			f && f.l(c), c.forEach(_), this.h();
		},
		h() {
			he(e, a);
		},
		m(u, c) {
			v(u, e, c),
				f && f.m(e, null),
				s[32](e),
				(t = !0),
				r ||
					((n = [
						He(s[8].action(e)),
						X(e, 'm-focusout', s[12]),
						X(e, 'm-keydown', s[12]),
						X(e, 'm-pointermove', s[12])
					]),
					(r = !0));
		},
		p(u, c) {
			(s = u),
				f &&
					f.p &&
					(!t || c[0] & 134217984) &&
					Ce(f, o, s, s[27], t ? Ee(o, s[27], c, An) : Se(s[27]), wt),
				he(e, (a = Fe(i, [c[0] & 256 && s[8], c[0] & 8192 && s[13]])));
		},
		i(u) {
			t || (m(f, u), l && l.end(1), (t = !0));
		},
		o(u) {
			$(f, u), u && (l = Kt(e, s[5], s[6])), (t = !1);
		},
		d(u) {
			u && _(e), f && f.d(u), s[32](null), u && l && l.end(), (r = !1), Ve(n);
		}
	};
}
function Fn(s) {
	let e, l, t, r, n;
	const o = s[28].default,
		f = we(o, s, s[27], Ct);
	let i = [s[8], s[13]],
		a = {};
	for (let u = 0; u < i.length; u += 1) a = fe(a, i[u]);
	return {
		c() {
			(e = x('div')), f && f.c(), this.h();
		},
		l(u) {
			e = y(u, 'DIV', {});
			var c = K(e);
			f && f.l(c), c.forEach(_), this.h();
		},
		h() {
			he(e, a);
		},
		m(u, c) {
			v(u, e, c),
				f && f.m(e, null),
				s[31](e),
				(t = !0),
				r ||
					((n = [
						He(s[8].action(e)),
						X(e, 'm-focusout', s[12]),
						X(e, 'm-keydown', s[12]),
						X(e, 'm-pointermove', s[12])
					]),
					(r = !0));
		},
		p(u, c) {
			(s = u),
				f &&
					f.p &&
					(!t || c[0] & 134217984) &&
					Ce(f, o, s, s[27], t ? Ee(o, s[27], c, Ln) : Se(s[27]), Ct),
				he(e, (a = Fe(i, [c[0] & 256 && s[8], c[0] & 8192 && s[13]])));
		},
		i(u) {
			t ||
				(m(f, u),
				u &&
					(l ||
						ot(() => {
							(l = Qt(e, s[3], s[4])), l.start();
						})),
				(t = !0));
		},
		o(u) {
			$(f, u), (t = !1);
		},
		d(u) {
			u && _(e), f && f.d(u), s[31](null), (r = !1), Ve(n);
		}
	};
}
function Bn(s) {
	let e, l, t, r, n, o;
	const f = s[28].default,
		i = we(f, s, s[27], St);
	let a = [s[8], s[13]],
		u = {};
	for (let c = 0; c < a.length; c += 1) u = fe(u, a[c]);
	return {
		c() {
			(e = x('div')), i && i.c(), this.h();
		},
		l(c) {
			e = y(c, 'DIV', {});
			var g = K(e);
			i && i.l(g), g.forEach(_), this.h();
		},
		h() {
			he(e, u);
		},
		m(c, g) {
			v(c, e, g),
				i && i.m(e, null),
				s[30](e),
				(r = !0),
				n ||
					((o = [
						He(s[8].action(e)),
						X(e, 'm-focusout', s[12]),
						X(e, 'm-keydown', s[12]),
						X(e, 'm-pointermove', s[12])
					]),
					(n = !0));
		},
		p(c, g) {
			(s = c),
				i &&
					i.p &&
					(!r || g[0] & 134217984) &&
					Ce(i, f, s, s[27], r ? Ee(f, s[27], g, Pn) : Se(s[27]), St),
				he(e, (u = Fe(a, [g[0] & 256 && s[8], g[0] & 8192 && s[13]])));
		},
		i(c) {
			r ||
				(m(i, c),
				c &&
					ot(() => {
						r && (t && t.end(1), (l = Qt(e, s[3], s[4])), l.start());
					}),
				(r = !0));
		},
		o(c) {
			$(i, c), l && l.invalidate(), c && (t = Kt(e, s[5], s[6])), (r = !1);
		},
		d(c) {
			c && _(e), i && i.d(c), s[30](null), c && t && t.end(), (n = !1), Ve(o);
		}
	};
}
function Rn(s) {
	let e, l, t, r, n;
	const o = s[28].default,
		f = we(o, s, s[27], Et);
	let i = [s[8], s[13]],
		a = {};
	for (let u = 0; u < i.length; u += 1) a = fe(a, i[u]);
	return {
		c() {
			(e = x('div')), f && f.c(), this.h();
		},
		l(u) {
			e = y(u, 'DIV', {});
			var c = K(e);
			f && f.l(c), c.forEach(_), this.h();
		},
		h() {
			he(e, a);
		},
		m(u, c) {
			v(u, e, c),
				f && f.m(e, null),
				s[29](e),
				(t = !0),
				r ||
					((n = [
						He(s[8].action(e)),
						X(e, 'm-focusout', s[12]),
						X(e, 'm-keydown', s[12]),
						X(e, 'm-pointermove', s[12])
					]),
					(r = !0));
		},
		p(u, c) {
			(s = u),
				f &&
					f.p &&
					(!t || c[0] & 134217984) &&
					Ce(f, o, s, s[27], t ? Ee(o, s[27], c, Vn) : Se(s[27]), Et),
				he(e, (a = Fe(i, [c[0] & 256 && s[8], c[0] & 8192 && s[13]])));
		},
		i(u) {
			t ||
				(m(f, u),
				u &&
					ot(() => {
						t && (l || (l = $t(e, s[1], s[2], !0)), l.run(1));
					}),
				(t = !0));
		},
		o(u) {
			$(f, u), u && (l || (l = $t(e, s[1], s[2], !1)), l.run(0)), (t = !1);
		},
		d(u) {
			u && _(e), f && f.d(u), s[29](null), u && l && l.end(), (r = !1), Ve(n);
		}
	};
}
function Wn(s) {
	let e;
	const l = s[28].default,
		t = we(l, s, s[27], Tt);
	return {
		c() {
			t && t.c();
		},
		l(r) {
			t && t.l(r);
		},
		m(r, n) {
			t && t.m(r, n), (e = !0);
		},
		p(r, n) {
			t &&
				t.p &&
				(!e || n[0] & 134217984) &&
				Ce(t, l, r, r[27], e ? Ee(l, r[27], n, jn) : Se(r[27]), Tt);
		},
		i(r) {
			e || (m(t, r), (e = !0));
		},
		o(r) {
			$(t, r), (e = !1);
		},
		d(r) {
			t && t.d(r);
		}
	};
}
function In(s) {
	let e, l, t, r;
	const n = [Wn, Rn, Bn, Fn, zn, On],
		o = [];
	function f(i, a) {
		return i[7] && i[9]
			? 0
			: i[1] && i[9]
				? 1
				: i[3] && i[5] && i[9]
					? 2
					: i[3] && i[9]
						? 3
						: i[5] && i[9]
							? 4
							: i[9]
								? 5
								: -1;
	}
	return (
		~(e = f(s)) && (l = o[e] = n[e](s)),
		{
			c() {
				l && l.c(), (t = ne());
			},
			l(i) {
				l && l.l(i), (t = ne());
			},
			m(i, a) {
				~e && o[e].m(i, a), v(i, t, a), (r = !0);
			},
			p(i, a) {
				let u = e;
				(e = f(i)),
					e === u
						? ~e && o[e].p(i, a)
						: (l &&
								(ue(),
								$(o[u], 1, 1, () => {
									o[u] = null;
								}),
								ce()),
							~e
								? ((l = o[e]),
									l ? l.p(i, a) : ((l = o[e] = n[e](i)), l.c()),
									m(l, 1),
									l.m(t.parentNode, t))
								: (l = null));
			},
			i(i) {
				r || (m(l), (r = !0));
			},
			o(i) {
				$(l), (r = !1);
			},
			d(i) {
				i && _(t), ~e && o[e].d(i);
			}
		}
	);
}
function Mn(s, e, l) {
	let t;
	const r = [
		'transition',
		'transitionConfig',
		'inTransition',
		'inTransitionConfig',
		'outTransition',
		'outTransitionConfig',
		'asChild',
		'id',
		'side',
		'align',
		'sideOffset',
		'alignOffset',
		'collisionPadding',
		'avoidCollisions',
		'collisionBoundary',
		'sameWidth',
		'fitViewport',
		'strategy',
		'overlap',
		'el'
	];
	let n = Ne(e, r),
		o,
		f,
		{ $$slots: i = {}, $$scope: a } = e,
		{ transition: u = void 0 } = e,
		{ transitionConfig: c = void 0 } = e,
		{ inTransition: g = void 0 } = e,
		{ inTransitionConfig: E = void 0 } = e,
		{ outTransition: T = void 0 } = e,
		{ outTransitionConfig: D = void 0 } = e,
		{ asChild: S = !1 } = e,
		{ id: w = void 0 } = e,
		{ side: I = 'right' } = e,
		{ align: k = 'start' } = e,
		{ sideOffset: j = 0 } = e,
		{ alignOffset: q = 0 } = e,
		{ collisionPadding: re = 8 } = e,
		{ avoidCollisions: Z = !0 } = e,
		{ collisionBoundary: te = void 0 } = e,
		{ sameWidth: ie = !1 } = e,
		{ fitViewport: A = !1 } = e,
		{ strategy: O = 'absolute' } = e,
		{ overlap: Q = !1 } = e,
		{ el: J = void 0 } = e;
	const {
		elements: { subMenu: $e },
		states: { subOpen: se },
		ids: pe,
		getAttrs: be
	} = vn();
	_e(s, $e, (N) => l(26, (o = N))), _e(s, se, (N) => l(9, (f = N)));
	const We = Yt(),
		ge = be('sub-content');
	function R(N) {
		Le[N ? 'unshift' : 'push'](() => {
			(J = N), l(0, J);
		});
	}
	function L(N) {
		Le[N ? 'unshift' : 'push'](() => {
			(J = N), l(0, J);
		});
	}
	function F(N) {
		Le[N ? 'unshift' : 'push'](() => {
			(J = N), l(0, J);
		});
	}
	function ve(N) {
		Le[N ? 'unshift' : 'push'](() => {
			(J = N), l(0, J);
		});
	}
	function me(N) {
		Le[N ? 'unshift' : 'push'](() => {
			(J = N), l(0, J);
		});
	}
	return (
		(s.$$set = (N) => {
			(e = fe(fe({}, e), Ze(N))),
				l(13, (n = Ne(e, r))),
				'transition' in N && l(1, (u = N.transition)),
				'transitionConfig' in N && l(2, (c = N.transitionConfig)),
				'inTransition' in N && l(3, (g = N.inTransition)),
				'inTransitionConfig' in N && l(4, (E = N.inTransitionConfig)),
				'outTransition' in N && l(5, (T = N.outTransition)),
				'outTransitionConfig' in N && l(6, (D = N.outTransitionConfig)),
				'asChild' in N && l(7, (S = N.asChild)),
				'id' in N && l(14, (w = N.id)),
				'side' in N && l(15, (I = N.side)),
				'align' in N && l(16, (k = N.align)),
				'sideOffset' in N && l(17, (j = N.sideOffset)),
				'alignOffset' in N && l(18, (q = N.alignOffset)),
				'collisionPadding' in N && l(19, (re = N.collisionPadding)),
				'avoidCollisions' in N && l(20, (Z = N.avoidCollisions)),
				'collisionBoundary' in N && l(21, (te = N.collisionBoundary)),
				'sameWidth' in N && l(22, (ie = N.sameWidth)),
				'fitViewport' in N && l(23, (A = N.fitViewport)),
				'strategy' in N && l(24, (O = N.strategy)),
				'overlap' in N && l(25, (Q = N.overlap)),
				'el' in N && l(0, (J = N.el)),
				'$$scope' in N && l(27, (a = N.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty[0] & 16384 && w && pe.menu.set(w),
				s.$$.dirty[0] & 67108864 && l(8, (t = o)),
				s.$$.dirty[0] & 256 && Object.assign(t, ge),
				s.$$.dirty[0] & 67076096 &&
					kn({
						side: I,
						align: k,
						sideOffset: j,
						alignOffset: q,
						collisionPadding: re,
						avoidCollisions: Z,
						collisionBoundary: te,
						sameWidth: ie,
						fitViewport: A,
						strategy: O,
						overlap: Q
					});
		}),
		[
			J,
			u,
			c,
			g,
			E,
			T,
			D,
			S,
			t,
			f,
			$e,
			se,
			We,
			n,
			w,
			I,
			k,
			j,
			q,
			re,
			Z,
			te,
			ie,
			A,
			O,
			Q,
			o,
			a,
			i,
			R,
			L,
			F,
			ve,
			me
		]
	);
}
class qn extends je {
	constructor(e) {
		super(),
			Oe(
				this,
				e,
				Mn,
				In,
				Pe,
				{
					transition: 1,
					transitionConfig: 2,
					inTransition: 3,
					inTransitionConfig: 4,
					outTransition: 5,
					outTransitionConfig: 6,
					asChild: 7,
					id: 14,
					side: 15,
					align: 16,
					sideOffset: 17,
					alignOffset: 18,
					collisionPadding: 19,
					avoidCollisions: 20,
					collisionBoundary: 21,
					sameWidth: 22,
					fitViewport: 23,
					strategy: 24,
					overlap: 25,
					el: 0
				},
				null,
				[-1, -1]
			);
	}
}
const Hn = (s) => ({ builder: s & 4 }),
	Nt = (s) => ({ builder: s[2] }),
	Un = (s) => ({ builder: s & 4 }),
	Dt = (s) => ({ builder: s[2] });
function Xn(s) {
	let e, l, t, r;
	const n = s[11].default,
		o = we(n, s, s[10], Nt);
	let f = [s[2], s[5]],
		i = {};
	for (let a = 0; a < f.length; a += 1) i = fe(i, f[a]);
	return {
		c() {
			(e = x('div')), o && o.c(), this.h();
		},
		l(a) {
			e = y(a, 'DIV', {});
			var u = K(e);
			o && o.l(u), u.forEach(_), this.h();
		},
		h() {
			he(e, i);
		},
		m(a, u) {
			v(a, e, u),
				o && o.m(e, null),
				s[12](e),
				(l = !0),
				t ||
					((r = [
						He(s[2].action(e)),
						X(e, 'm-click', s[4]),
						X(e, 'm-focusin', s[4]),
						X(e, 'm-focusout', s[4]),
						X(e, 'm-keydown', s[4]),
						X(e, 'm-pointerleave', s[4]),
						X(e, 'm-pointermove', s[4])
					]),
					(t = !0));
		},
		p(a, u) {
			o && o.p && (!l || u & 1028) && Ce(o, n, a, a[10], l ? Ee(n, a[10], u, Hn) : Se(a[10]), Nt),
				he(e, (i = Fe(f, [u & 4 && a[2], u & 32 && a[5]])));
		},
		i(a) {
			l || (m(o, a), (l = !0));
		},
		o(a) {
			$(o, a), (l = !1);
		},
		d(a) {
			a && _(e), o && o.d(a), s[12](null), (t = !1), Ve(r);
		}
	};
}
function Zn(s) {
	let e;
	const l = s[11].default,
		t = we(l, s, s[10], Dt);
	return {
		c() {
			t && t.c();
		},
		l(r) {
			t && t.l(r);
		},
		m(r, n) {
			t && t.m(r, n), (e = !0);
		},
		p(r, n) {
			t && t.p && (!e || n & 1028) && Ce(t, l, r, r[10], e ? Ee(l, r[10], n, Un) : Se(r[10]), Dt);
		},
		i(r) {
			e || (m(t, r), (e = !0));
		},
		o(r) {
			$(t, r), (e = !1);
		},
		d(r) {
			t && t.d(r);
		}
	};
}
function Gn(s) {
	let e, l, t, r;
	const n = [Zn, Xn],
		o = [];
	function f(i, a) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = f(s)),
		(l = o[e] = n[e](s)),
		{
			c() {
				l.c(), (t = ne());
			},
			l(i) {
				l.l(i), (t = ne());
			},
			m(i, a) {
				o[e].m(i, a), v(i, t, a), (r = !0);
			},
			p(i, [a]) {
				let u = e;
				(e = f(i)),
					e === u
						? o[e].p(i, a)
						: (ue(),
							$(o[u], 1, 1, () => {
								o[u] = null;
							}),
							ce(),
							(l = o[e]),
							l ? l.p(i, a) : ((l = o[e] = n[e](i)), l.c()),
							m(l, 1),
							l.m(t.parentNode, t));
			},
			i(i) {
				r || (m(l), (r = !0));
			},
			o(i) {
				$(l), (r = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function Jn(s, e, l) {
	let t, r;
	const n = ['disabled', 'asChild', 'id', 'el'];
	let o = Ne(e, n),
		f,
		{ $$slots: i = {}, $$scope: a } = e,
		{ disabled: u = !1 } = e,
		{ asChild: c = !1 } = e,
		{ id: g = void 0 } = e,
		{ el: E = void 0 } = e;
	const {
		elements: { subTrigger: T },
		ids: D,
		getAttrs: S
	} = wn();
	_e(s, T, (k) => l(9, (f = k)));
	const w = Yt();
	function I(k) {
		Le[k ? 'unshift' : 'push'](() => {
			(E = k), l(0, E);
		});
	}
	return (
		(s.$$set = (k) => {
			(e = fe(fe({}, e), Ze(k))),
				l(5, (o = Ne(e, n))),
				'disabled' in k && l(6, (u = k.disabled)),
				'asChild' in k && l(1, (c = k.asChild)),
				'id' in k && l(7, (g = k.id)),
				'el' in k && l(0, (E = k.el)),
				'$$scope' in k && l(10, (a = k.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 128 && g && D.trigger.set(g),
				s.$$.dirty & 512 && l(2, (t = f)),
				s.$$.dirty & 64 && l(8, (r = { ...S('sub-trigger'), ..._n(u) })),
				s.$$.dirty & 260 && Object.assign(t, r);
		}),
		[E, c, t, T, w, o, u, g, r, f, a, i, I]
	);
}
class Kn extends je {
	constructor(e) {
		super(), Oe(this, e, Jn, Gn, Pe, { disabled: 6, asChild: 1, id: 7, el: 0 });
	}
}
function Qn(s) {
	let e,
		l,
		t = [
			{ width: s[1] },
			{ height: s[1] },
			{ viewBox: '0 0 15 15' },
			{ fill: 'none' },
			{ xmlns: 'http://www.w3.org/2000/svg' },
			s[2]
		],
		r = {};
	for (let n = 0; n < t.length; n += 1) r = fe(r, t[n]);
	return {
		c() {
			(e = ct('svg')), (l = ct('path')), this.h();
		},
		l(n) {
			e = ut(n, 'svg', { width: !0, height: !0, viewBox: !0, fill: !0, xmlns: !0 });
			var o = K(e);
			(l = ut(o, 'path', { 'fill-rule': !0, 'clip-rule': !0, d: !0, fill: !0 })),
				K(l).forEach(_),
				o.forEach(_),
				this.h();
		},
		h() {
			z(l, 'fill-rule', 'evenodd'),
				z(l, 'clip-rule', 'evenodd'),
				z(
					l,
					'd',
					'M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z'
				),
				z(l, 'fill', s[0]),
				at(e, r);
		},
		m(n, o) {
			v(n, e, o), Y(e, l);
		},
		p(n, [o]) {
			o & 1 && z(l, 'fill', n[0]),
				at(
					e,
					(r = Fe(t, [
						o & 2 && { width: n[1] },
						o & 2 && { height: n[1] },
						{ viewBox: '0 0 15 15' },
						{ fill: 'none' },
						{ xmlns: 'http://www.w3.org/2000/svg' },
						o & 4 && n[2]
					]))
				);
		},
		i: ae,
		o: ae,
		d(n) {
			n && _(e);
		}
	};
}
function Yn(s, e, l) {
	const t = ['color', 'size'];
	let r = Ne(e, t),
		{ color: n = 'currentColor' } = e,
		{ size: o = 15 } = e;
	return (
		(s.$$set = (f) => {
			(e = fe(fe({}, e), Ze(f))),
				l(2, (r = Ne(e, t))),
				'color' in f && l(0, (n = f.color)),
				'size' in f && l(1, (o = f.size));
		}),
		[n, o, r]
	);
}
class yn extends je {
	constructor(e) {
		super(), Oe(this, e, Yn, Qn, Pe, { color: 0, size: 1 });
	}
}
function xn(s) {
	let e;
	const l = s[4].default,
		t = we(l, s, s[8], null);
	return {
		c() {
			t && t.c();
		},
		l(r) {
			t && t.l(r);
		},
		m(r, n) {
			t && t.m(r, n), (e = !0);
		},
		p(r, n) {
			t && t.p && (!e || n & 256) && Ce(t, l, r, r[8], e ? Ee(l, r[8], n, null) : Se(r[8]), null);
		},
		i(r) {
			e || (m(t, r), (e = !0));
		},
		o(r) {
			$(t, r), (e = !1);
		},
		d(r) {
			t && t.d(r);
		}
	};
}
function el(s) {
	let e, l;
	const t = [
		{ transition: s[1] },
		{ transitionConfig: s[2] },
		{
			class: G(
				'z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-lg focus:outline-none',
				s[0]
			)
		},
		s[3]
	];
	let r = { $$slots: { default: [xn] }, $$scope: { ctx: s } };
	for (let n = 0; n < t.length; n += 1) r = fe(r, t[n]);
	return (
		(e = new qn({ props: r })),
		e.$on('keydown', s[5]),
		e.$on('focusout', s[6]),
		e.$on('pointermove', s[7]),
		{
			c() {
				b(e.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n);
			},
			m(n, o) {
				p(e, n, o), (l = !0);
			},
			p(n, [o]) {
				const f =
					o & 15
						? Fe(t, [
								o & 2 && { transition: n[1] },
								o & 4 && { transitionConfig: n[2] },
								o & 1 && {
									class: G(
										'z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-lg focus:outline-none',
										n[0]
									)
								},
								o & 8 && yt(n[3])
							])
						: {};
				o & 256 && (f.$$scope = { dirty: o, ctx: n }), e.$set(f);
			},
			i(n) {
				l || (m(e.$$.fragment, n), (l = !0));
			},
			o(n) {
				$(e.$$.fragment, n), (l = !1);
			},
			d(n) {
				d(e, n);
			}
		}
	);
}
function tl(s, e, l) {
	const t = ['class', 'transition', 'transitionConfig'];
	let r = Ne(e, t),
		{ $$slots: n = {}, $$scope: o } = e,
		{ class: f = void 0 } = e,
		{ transition: i = bn } = e,
		{ transitionConfig: a = void 0 } = e;
	function u(E) {
		Ae.call(this, s, E);
	}
	function c(E) {
		Ae.call(this, s, E);
	}
	function g(E) {
		Ae.call(this, s, E);
	}
	return (
		(s.$$set = (E) => {
			(e = fe(fe({}, e), Ze(E))),
				l(3, (r = Ne(e, t))),
				'class' in E && l(0, (f = E.class)),
				'transition' in E && l(1, (i = E.transition)),
				'transitionConfig' in E && l(2, (a = E.transitionConfig)),
				'$$scope' in E && l(8, (o = E.$$scope));
		}),
		[f, i, a, r, n, u, c, g, o]
	);
}
class on extends je {
	constructor(e) {
		super(), Oe(this, e, tl, el, Pe, { class: 0, transition: 1, transitionConfig: 2 });
	}
}
function nl(s) {
	let e, l, t;
	const r = s[3].default,
		n = we(r, s, s[10], null);
	return (
		(l = new yn({ props: { class: 'ml-auto h-4 w-4' } })),
		{
			c() {
				n && n.c(), (e = V()), b(l.$$.fragment);
			},
			l(o) {
				n && n.l(o), (e = P(o)), h(l.$$.fragment, o);
			},
			m(o, f) {
				n && n.m(o, f), v(o, e, f), p(l, o, f), (t = !0);
			},
			p(o, f) {
				n &&
					n.p &&
					(!t || f & 1024) &&
					Ce(n, r, o, o[10], t ? Ee(r, o[10], f, null) : Se(o[10]), null);
			},
			i(o) {
				t || (m(n, o), m(l.$$.fragment, o), (t = !0));
			},
			o(o) {
				$(n, o), $(l.$$.fragment, o), (t = !1);
			},
			d(o) {
				o && _(e), n && n.d(o), d(l, o);
			}
		}
	);
}
function ll(s) {
	let e, l;
	const t = [
		{
			class: G(
				'flex cursor-pointer h-7 text-foreground select-none items-center rounded-sm px-2 py-1.5 text-xs outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
				s[1] && 'pl-8',
				s[0]
			)
		},
		s[2]
	];
	let r = { $$slots: { default: [nl] }, $$scope: { ctx: s } };
	for (let n = 0; n < t.length; n += 1) r = fe(r, t[n]);
	return (
		(e = new Kn({ props: r })),
		e.$on('click', s[4]),
		e.$on('keydown', s[5]),
		e.$on('focusin', s[6]),
		e.$on('focusout', s[7]),
		e.$on('pointerleave', s[8]),
		e.$on('pointermove', s[9]),
		{
			c() {
				b(e.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n);
			},
			m(n, o) {
				p(e, n, o), (l = !0);
			},
			p(n, [o]) {
				const f =
					o & 7
						? Fe(t, [
								o & 3 && {
									class: G(
										'flex cursor-pointer h-7 text-foreground select-none items-center rounded-sm px-2 py-1.5 text-xs outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
										n[1] && 'pl-8',
										n[0]
									)
								},
								o & 4 && yt(n[2])
							])
						: {};
				o & 1024 && (f.$$scope = { dirty: o, ctx: n }), e.$set(f);
			},
			i(n) {
				l || (m(e.$$.fragment, n), (l = !0));
			},
			o(n) {
				$(e.$$.fragment, n), (l = !1);
			},
			d(n) {
				d(e, n);
			}
		}
	);
}
function rl(s, e, l) {
	const t = ['class', 'inset'];
	let r = Ne(e, t),
		{ $$slots: n = {}, $$scope: o } = e,
		{ class: f = void 0 } = e,
		{ inset: i = void 0 } = e;
	function a(D) {
		Ae.call(this, s, D);
	}
	function u(D) {
		Ae.call(this, s, D);
	}
	function c(D) {
		Ae.call(this, s, D);
	}
	function g(D) {
		Ae.call(this, s, D);
	}
	function E(D) {
		Ae.call(this, s, D);
	}
	function T(D) {
		Ae.call(this, s, D);
	}
	return (
		(s.$$set = (D) => {
			(e = fe(fe({}, e), Ze(D))),
				l(2, (r = Ne(e, t))),
				'class' in D && l(0, (f = D.class)),
				'inset' in D && l(1, (i = D.inset)),
				'$$scope' in D && l(10, (o = D.$$scope));
		}),
		[f, i, r, n, a, u, c, g, E, T, o]
	);
}
class fn extends je {
	constructor(e) {
		super(), Oe(this, e, rl, ll, Pe, { class: 0, inset: 1 });
	}
}
function At(s, e, l) {
	const t = s.slice();
	return (t[40] = e[l]), (t[41] = e), (t[42] = l), t;
}
function Lt(s, e, l) {
	const t = s.slice();
	return (t[43] = e[l]), t;
}
function Pt(s, e, l) {
	const t = s.slice();
	return (t[43] = e[l]), t;
}
function sl(s) {
	let e, l;
	return (
		(e = new nn({ props: { $$slots: { default: [wl] }, $$scope: { ctx: s } } })),
		{
			c() {
				b(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, r) {
				p(e, t, r), (l = !0);
			},
			p(t, r) {
				const n = {};
				(r[0] & 13) | (r[1] & 262144) && (n.$$scope = { dirty: r, ctx: t }), e.$set(n);
			},
			i(t) {
				l || (m(e.$$.fragment, t), (l = !0));
			},
			o(t) {
				$(e.$$.fragment, t), (l = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function ol(s) {
	let e, l, t;
	function r(o) {
		s[23](o, s[42]);
	}
	let n = { class: 'w-full', $$slots: { default: [Hl] }, $$scope: { ctx: s } };
	return (
		s[1][s[42]] !== void 0 && (n.open = s[1][s[42]]),
		(e = new xt({ props: n })),
		Le.push(() => rt(e, 'open', r)),
		{
			c() {
				b(e.$$.fragment);
			},
			l(o) {
				h(e.$$.fragment, o);
			},
			m(o, f) {
				p(e, o, f), (t = !0);
			},
			p(o, f) {
				s = o;
				const i = {};
				(f[0] & 7) | (f[1] & 262144) && (i.$$scope = { dirty: f, ctx: s }),
					!l && f[0] & 2 && ((l = !0), (i.open = s[1][s[42]]), lt(() => (l = !1))),
					e.$set(i);
			},
			i(o) {
				t || (m(e.$$.fragment, o), (t = !0));
			},
			o(o) {
				$(e.$$.fragment, o), (t = !1);
			},
			d(o) {
				d(e, o);
			}
		}
	);
}
function fl(s) {
	let e,
		l,
		t,
		r,
		n,
		o,
		f,
		i = s[40].name + '',
		a,
		u;
	function c() {
		return s[24](s[40]);
	}
	e = new Te({ props: { options: ee['note:rename'], callback: c } });
	function g() {
		return s[25](s[40]);
	}
	t = new Te({ props: { options: ee['note:duplicate'], callback: g } });
	function E() {
		return s[26](s[40]);
	}
	return (
		(n = new Te({ props: { options: ee['note:delete'], callback: E } })),
		{
			c() {
				b(e.$$.fragment),
					(l = V()),
					b(t.$$.fragment),
					(r = V()),
					b(n.$$.fragment),
					(o = V()),
					(f = x('span')),
					(a = U(i)),
					this.h();
			},
			l(T) {
				h(e.$$.fragment, T),
					(l = P(T)),
					h(t.$$.fragment, T),
					(r = P(T)),
					h(n.$$.fragment, T),
					(o = P(T)),
					(f = y(T, 'SPAN', { class: !0, autocorrect: !0, spellcheck: !0 }));
				var D = K(f);
				(a = H(D, i)), D.forEach(_), this.h();
			},
			h() {
				z(f, 'class', 'text-xs truncate'), z(f, 'autocorrect', 'off'), z(f, 'spellcheck', 'false');
			},
			m(T, D) {
				p(e, T, D),
					v(T, l, D),
					p(t, T, D),
					v(T, r, D),
					p(n, T, D),
					v(T, o, D),
					v(T, f, D),
					Y(f, a),
					(u = !0);
			},
			p(T, D) {
				s = T;
				const S = {};
				D[0] & 5 && (S.callback = c), e.$set(S);
				const w = {};
				D[0] & 5 && (w.callback = g), t.$set(w);
				const I = {};
				D[0] & 5 && (I.callback = E),
					n.$set(I),
					(!u || D[0] & 1) && i !== (i = s[40].name + '') && Me(a, i);
			},
			i(T) {
				u || (m(e.$$.fragment, T), m(t.$$.fragment, T), m(n.$$.fragment, T), (u = !0));
			},
			o(T) {
				$(e.$$.fragment, T), $(t.$$.fragment, T), $(n.$$.fragment, T), (u = !1);
			},
			d(T) {
				T && (_(l), _(r), _(o), _(f)), d(e, T), d(t, T), d(n, T);
			}
		}
	);
}
function il(s) {
	let e, l, t, r, n;
	function o() {
		return s[27](s[40]);
	}
	(l = new Be({
		props: {
			size: 'sm',
			variant: 'ghost',
			scale: 'sm',
			class: G(
				'h-7 w-full transition-all text-secondary-foreground/80 hover:text-foreground flex items-center gap-2 justify-start',
				s[3] === s[40].path && 'bg-accent text-foreground'
			),
			style: `padding-left: ${s[4](s[40].path)}`,
			draggable: !0,
			$$slots: { default: [fl] },
			$$scope: { ctx: s }
		}
	})),
		l.$on('click', o);
	function f(...a) {
		return s[28](s[40], ...a);
	}
	function i(...a) {
		return s[29](s[40], ...a);
	}
	return {
		c() {
			(e = x('div')), b(l.$$.fragment), this.h();
		},
		l(a) {
			e = y(a, 'DIV', { class: !0, role: !0, tabindex: !0 });
			var u = K(e);
			h(l.$$.fragment, u), u.forEach(_), this.h();
		},
		h() {
			z(e, 'class', 'w-full h-full'), z(e, 'role', 'button'), z(e, 'tabindex', '0');
		},
		m(a, u) {
			v(a, e, u),
				p(l, e, null),
				(t = !0),
				r || ((n = [X(e, 'dragstart', f), X(e, 'dragend', i)]), (r = !0));
		},
		p(a, u) {
			s = a;
			const c = {};
			u[0] & 9 &&
				(c.class = G(
					'h-7 w-full transition-all text-secondary-foreground/80 hover:text-foreground flex items-center gap-2 justify-start',
					s[3] === s[40].path && 'bg-accent text-foreground'
				)),
				u[0] & 1 && (c.style = `padding-left: ${s[4](s[40].path)}`),
				(u[0] & 5) | (u[1] & 262144) && (c.$$scope = { dirty: u, ctx: s }),
				l.$set(c);
		},
		i(a) {
			t || (m(l.$$.fragment, a), (t = !0));
		},
		o(a) {
			$(l.$$.fragment, a), (t = !1);
		},
		d(a) {
			a && _(e), d(l), (r = !1), Ve(n);
		}
	};
}
function al(s) {
	let e = ze(ee['note:rename']) + '',
		l;
	return {
		c() {
			l = U(e);
		},
		l(t) {
			l = H(t, e);
		},
		m(t, r) {
			v(t, l, r);
		},
		p: ae,
		d(t) {
			t && _(l);
		}
	};
}
function ul(s) {
	let e, l, t, r;
	return (
		(e = new le({
			props: {
				name: 'editPencil',
				class: 'w-3.5 h-3.5 fill-foreground/70 group-hover:fill-foreground'
			}
		})),
		(t = new Re({ props: { $$slots: { default: [al] }, $$scope: { ctx: s } } })),
		{
			c() {
				b(e.$$.fragment),
					(l = U(`
					Rename
					`)),
					b(t.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n),
					(l = H(
						n,
						`
					Rename
					`
					)),
					h(t.$$.fragment, n);
			},
			m(n, o) {
				p(e, n, o), v(n, l, o), p(t, n, o), (r = !0);
			},
			p(n, o) {
				const f = {};
				o[1] & 262144 && (f.$$scope = { dirty: o, ctx: n }), t.$set(f);
			},
			i(n) {
				r || (m(e.$$.fragment, n), m(t.$$.fragment, n), (r = !0));
			},
			o(n) {
				$(e.$$.fragment, n), $(t.$$.fragment, n), (r = !1);
			},
			d(n) {
				n && _(l), d(e, n), d(t, n);
			}
		}
	);
}
function cl(s) {
	let e = ze(ee['note:duplicate']) + '',
		l;
	return {
		c() {
			l = U(e);
		},
		l(t) {
			l = H(t, e);
		},
		m(t, r) {
			v(t, l, r);
		},
		p: ae,
		d(t) {
			t && _(l);
		}
	};
}
function ml(s) {
	let e, l, t, r;
	return (
		(e = new le({
			props: { name: 'copy', class: 'w-3.5 h-3.5 fill-foreground/70 group-hover:fill-foreground' }
		})),
		(t = new Re({ props: { $$slots: { default: [cl] }, $$scope: { ctx: s } } })),
		{
			c() {
				b(e.$$.fragment),
					(l = U(`
					Duplicate
					`)),
					b(t.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n),
					(l = H(
						n,
						`
					Duplicate
					`
					)),
					h(t.$$.fragment, n);
			},
			m(n, o) {
				p(e, n, o), v(n, l, o), p(t, n, o), (r = !0);
			},
			p(n, o) {
				const f = {};
				o[1] & 262144 && (f.$$scope = { dirty: o, ctx: n }), t.$set(f);
			},
			i(n) {
				r || (m(e.$$.fragment, n), m(t.$$.fragment, n), (r = !0));
			},
			o(n) {
				$(e.$$.fragment, n), $(t.$$.fragment, n), (r = !1);
			},
			d(n) {
				n && _(l), d(e, n), d(t, n);
			}
		}
	);
}
function $l(s) {
	let e, l, t;
	return (
		(e = new le({
			props: { name: 'motionCirclesLines', class: 'w-3.5 h-3.5 fill-foreground/70' }
		})),
		{
			c() {
				b(e.$$.fragment),
					(l = U(`

						Move note to...`));
			},
			l(r) {
				h(e.$$.fragment, r),
					(l = H(
						r,
						`

						Move note to...`
					));
			},
			m(r, n) {
				p(e, r, n), v(r, l, n), (t = !0);
			},
			p: ae,
			i(r) {
				t || (m(e.$$.fragment, r), (t = !0));
			},
			o(r) {
				$(e.$$.fragment, r), (t = !1);
			},
			d(r) {
				r && _(l), d(e, r);
			}
		}
	);
}
function Vt(s) {
	let e, l;
	function t() {
		return s[32](s[40], s[43]);
	}
	return (
		(e = new ke({
			props: {
				class: 'flex items-center gap-2 font-base group',
				$$slots: { default: [gl] },
				$$scope: { ctx: s }
			}
		})),
		e.$on('click', t),
		{
			c() {
				b(e.$$.fragment);
			},
			l(r) {
				h(e.$$.fragment, r);
			},
			m(r, n) {
				p(e, r, n), (l = !0);
			},
			p(r, n) {
				s = r;
				const o = {};
				(n[0] & 1) | (n[1] & 262144) && (o.$$scope = { dirty: n, ctx: s }), e.$set(o);
			},
			i(r) {
				l || (m(e.$$.fragment, r), (l = !0));
			},
			o(r) {
				$(e.$$.fragment, r), (l = !1);
			},
			d(r) {
				d(e, r);
			}
		}
	);
}
function gl(s) {
	let e,
		l,
		t = s[43].name + '',
		r,
		n;
	return (
		(e = new le({
			props: { name: 'folder', class: 'w-3.5 h-3.5 fill-foreground/70 group-hover:fill-foreground' }
		})),
		{
			c() {
				b(e.$$.fragment), (l = V()), (r = U(t));
			},
			l(o) {
				h(e.$$.fragment, o), (l = P(o)), (r = H(o, t));
			},
			m(o, f) {
				p(e, o, f), v(o, l, f), v(o, r, f), (n = !0);
			},
			p(o, f) {
				(!n || f[0] & 1) && t !== (t = o[43].name + '') && Me(r, t);
			},
			i(o) {
				n || (m(e.$$.fragment, o), (n = !0));
			},
			o(o) {
				$(e.$$.fragment, o), (n = !1);
			},
			d(o) {
				o && (_(l), _(r)), d(e, o);
			}
		}
	);
}
function jt(s) {
	let e,
		l,
		t = s[43].name !== s[40].name && Vt(s);
	return {
		c() {
			t && t.c(), (e = ne());
		},
		l(r) {
			t && t.l(r), (e = ne());
		},
		m(r, n) {
			t && t.m(r, n), v(r, e, n), (l = !0);
		},
		p(r, n) {
			r[43].name !== r[40].name
				? t
					? (t.p(r, n), n[0] & 1 && m(t, 1))
					: ((t = Vt(r)), t.c(), m(t, 1), t.m(e.parentNode, e))
				: t &&
					(ue(),
					$(t, 1, 1, () => {
						t = null;
					}),
					ce());
		},
		i(r) {
			l || (m(t), (l = !0));
		},
		o(r) {
			$(t), (l = !1);
		},
		d(r) {
			r && _(e), t && t.d(r);
		}
	};
}
function Ot(s) {
	let e, l;
	function t() {
		return s[33](s[40]);
	}
	return (
		(e = new ke({
			props: {
				class: 'flex items-center gap-2 font-base group',
				$$slots: { default: [dl] },
				$$scope: { ctx: s }
			}
		})),
		e.$on('click', t),
		{
			c() {
				b(e.$$.fragment);
			},
			l(r) {
				h(e.$$.fragment, r);
			},
			m(r, n) {
				p(e, r, n), (l = !0);
			},
			p(r, n) {
				s = r;
				const o = {};
				n[1] & 262144 && (o.$$scope = { dirty: n, ctx: s }), e.$set(o);
			},
			i(r) {
				l || (m(e.$$.fragment, r), (l = !0));
			},
			o(r) {
				$(e.$$.fragment, r), (l = !1);
			},
			d(r) {
				d(e, r);
			}
		}
	);
}
function _l(s) {
	let e = ze(ee['folder:create']) + '',
		l;
	return {
		c() {
			l = U(e);
		},
		l(t) {
			l = H(t, e);
		},
		m(t, r) {
			v(t, l, r);
		},
		p: ae,
		d(t) {
			t && _(l);
		}
	};
}
function dl(s) {
	let e, l, t, r;
	return (
		(e = new le({
			props: {
				name: 'folderPlus',
				class: 'w-3.5 h-3.5 fill-foreground/70 group-hover:fill-foreground'
			}
		})),
		(t = new Re({ props: { $$slots: { default: [_l] }, $$scope: { ctx: s } } })),
		{
			c() {
				b(e.$$.fragment),
					(l = U(`
								New folder
								`)),
					b(t.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n),
					(l = H(
						n,
						`
								New folder
								`
					)),
					h(t.$$.fragment, n);
			},
			m(n, o) {
				p(e, n, o), v(n, l, o), p(t, n, o), (r = !0);
			},
			p(n, o) {
				const f = {};
				o[1] & 262144 && (f.$$scope = { dirty: o, ctx: n }), t.$set(f);
			},
			i(n) {
				r || (m(e.$$.fragment, n), m(t.$$.fragment, n), (r = !0));
			},
			o(n) {
				$(e.$$.fragment, n), $(t.$$.fragment, n), (r = !1);
			},
			d(n) {
				n && _(l), d(e, n), d(t, n);
			}
		}
	);
}
function pl(s) {
	let e,
		l = Ie(s[0]).length === 0,
		t,
		r,
		n = De(Ie(s[0])),
		o = [];
	for (let a = 0; a < n.length; a += 1) o[a] = jt(Lt(s, n, a));
	const f = (a) =>
		$(o[a], 1, 1, () => {
			o[a] = null;
		});
	let i = l && Ot(s);
	return {
		c() {
			for (let a = 0; a < o.length; a += 1) o[a].c();
			(e = V()), i && i.c(), (t = ne());
		},
		l(a) {
			for (let u = 0; u < o.length; u += 1) o[u].l(a);
			(e = P(a)), i && i.l(a), (t = ne());
		},
		m(a, u) {
			for (let c = 0; c < o.length; c += 1) o[c] && o[c].m(a, u);
			v(a, e, u), i && i.m(a, u), v(a, t, u), (r = !0);
		},
		p(a, u) {
			if (u[0] & 1) {
				n = De(Ie(a[0]));
				let c;
				for (c = 0; c < n.length; c += 1) {
					const g = Lt(a, n, c);
					o[c]
						? (o[c].p(g, u), m(o[c], 1))
						: ((o[c] = jt(g)), o[c].c(), m(o[c], 1), o[c].m(e.parentNode, e));
				}
				for (ue(), c = n.length; c < o.length; c += 1) f(c);
				ce();
			}
			u[0] & 1 && (l = Ie(a[0]).length === 0),
				l
					? i
						? (i.p(a, u), u[0] & 1 && m(i, 1))
						: ((i = Ot(a)), i.c(), m(i, 1), i.m(t.parentNode, t))
					: i &&
						(ue(),
						$(i, 1, 1, () => {
							i = null;
						}),
						ce());
		},
		i(a) {
			if (!r) {
				for (let u = 0; u < n.length; u += 1) m(o[u]);
				m(i), (r = !0);
			}
		},
		o(a) {
			o = o.filter(Boolean);
			for (let u = 0; u < o.length; u += 1) $(o[u]);
			$(i), (r = !1);
		},
		d(a) {
			a && (_(e), _(t)), Ge(o, a), i && i.d(a);
		}
	};
}
function hl(s) {
	let e, l, t, r;
	return (
		(e = new fn({
			props: {
				class: 'flex items-center gap-2 font-base group',
				$$slots: { default: [$l] },
				$$scope: { ctx: s }
			}
		})),
		(t = new on({ props: { class: 'w-40', $$slots: { default: [pl] }, $$scope: { ctx: s } } })),
		{
			c() {
				b(e.$$.fragment), (l = V()), b(t.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n), (l = P(n)), h(t.$$.fragment, n);
			},
			m(n, o) {
				p(e, n, o), v(n, l, o), p(t, n, o), (r = !0);
			},
			p(n, o) {
				const f = {};
				o[1] & 262144 && (f.$$scope = { dirty: o, ctx: n }), e.$set(f);
				const i = {};
				(o[0] & 1) | (o[1] & 262144) && (i.$$scope = { dirty: o, ctx: n }), t.$set(i);
			},
			i(n) {
				r || (m(e.$$.fragment, n), m(t.$$.fragment, n), (r = !0));
			},
			o(n) {
				$(e.$$.fragment, n), $(t.$$.fragment, n), (r = !1);
			},
			d(n) {
				n && _(l), d(e, n), d(t, n);
			}
		}
	);
}
function bl(s) {
	let e = ze(ee['note:delete']) + '',
		l;
	return {
		c() {
			l = U(e);
		},
		l(t) {
			l = H(t, e);
		},
		m(t, r) {
			v(t, l, r);
		},
		p: ae,
		d(t) {
			t && _(l);
		}
	};
}
function vl(s) {
	let e, l, t, r;
	return (
		(e = new le({
			props: { name: 'bin', class: 'w-3.5 h-3.5 fill-destructive/70 group-hover:fill-destructive' }
		})),
		(t = new Re({
			props: { class: 'text-destructive/60', $$slots: { default: [bl] }, $$scope: { ctx: s } }
		})),
		{
			c() {
				b(e.$$.fragment),
					(l = U(`
					Delete
					`)),
					b(t.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n),
					(l = H(
						n,
						`
					Delete
					`
					)),
					h(t.$$.fragment, n);
			},
			m(n, o) {
				p(e, n, o), v(n, l, o), p(t, n, o), (r = !0);
			},
			p(n, o) {
				const f = {};
				o[1] & 262144 && (f.$$scope = { dirty: o, ctx: n }), t.$set(f);
			},
			i(n) {
				r || (m(e.$$.fragment, n), m(t.$$.fragment, n), (r = !0));
			},
			o(n) {
				$(e.$$.fragment, n), $(t.$$.fragment, n), (r = !1);
			},
			d(n) {
				n && _(l), d(e, n), d(t, n);
			}
		}
	);
}
function kl(s) {
	let e, l, t, r, n, o, f, i, a, u, c, g;
	function E() {
		return s[30](s[40]);
	}
	(e = new ke({
		props: {
			class: 'flex items-center gap-2 font-base group',
			$$slots: { default: [ul] },
			$$scope: { ctx: s }
		}
	})),
		e.$on('click', E);
	function T() {
		return s[31](s[40]);
	}
	(t = new ke({
		props: {
			class: 'flex items-center gap-2 font-base group',
			$$slots: { default: [ml] },
			$$scope: { ctx: s }
		}
	})),
		t.$on('click', T),
		(n = new xe({})),
		(f = new sn({ props: { $$slots: { default: [hl] }, $$scope: { ctx: s } } })),
		(a = new xe({}));
	function D() {
		return s[34](s[40]);
	}
	return (
		(c = new ke({
			props: {
				class:
					'flex text-destructive data-[highlighted]:bg-destructive/20 data-[highlighted]:text-destructive items-center gap-2 font-base group',
				$$slots: { default: [vl] },
				$$scope: { ctx: s }
			}
		})),
		c.$on('click', D),
		{
			c() {
				b(e.$$.fragment),
					(l = V()),
					b(t.$$.fragment),
					(r = V()),
					b(n.$$.fragment),
					(o = V()),
					b(f.$$.fragment),
					(i = V()),
					b(a.$$.fragment),
					(u = V()),
					b(c.$$.fragment);
			},
			l(S) {
				h(e.$$.fragment, S),
					(l = P(S)),
					h(t.$$.fragment, S),
					(r = P(S)),
					h(n.$$.fragment, S),
					(o = P(S)),
					h(f.$$.fragment, S),
					(i = P(S)),
					h(a.$$.fragment, S),
					(u = P(S)),
					h(c.$$.fragment, S);
			},
			m(S, w) {
				p(e, S, w),
					v(S, l, w),
					p(t, S, w),
					v(S, r, w),
					p(n, S, w),
					v(S, o, w),
					p(f, S, w),
					v(S, i, w),
					p(a, S, w),
					v(S, u, w),
					p(c, S, w),
					(g = !0);
			},
			p(S, w) {
				s = S;
				const I = {};
				w[1] & 262144 && (I.$$scope = { dirty: w, ctx: s }), e.$set(I);
				const k = {};
				w[1] & 262144 && (k.$$scope = { dirty: w, ctx: s }), t.$set(k);
				const j = {};
				(w[0] & 1) | (w[1] & 262144) && (j.$$scope = { dirty: w, ctx: s }), f.$set(j);
				const q = {};
				w[1] & 262144 && (q.$$scope = { dirty: w, ctx: s }), c.$set(q);
			},
			i(S) {
				g ||
					(m(e.$$.fragment, S),
					m(t.$$.fragment, S),
					m(n.$$.fragment, S),
					m(f.$$.fragment, S),
					m(a.$$.fragment, S),
					m(c.$$.fragment, S),
					(g = !0));
			},
			o(S) {
				$(e.$$.fragment, S),
					$(t.$$.fragment, S),
					$(n.$$.fragment, S),
					$(f.$$.fragment, S),
					$(a.$$.fragment, S),
					$(c.$$.fragment, S),
					(g = !1);
			},
			d(S) {
				S && (_(l), _(r), _(o), _(i), _(u)), d(e, S), d(t, S), d(n, S), d(f, S), d(a, S), d(c, S);
			}
		}
	);
}
function wl(s) {
	let e, l, t, r, n;
	return (
		(e = new ln({
			props: {
				class: 'w-full',
				'data-file-path': s[40].path,
				$$slots: { default: [il] },
				$$scope: { ctx: s }
			}
		})),
		(t = new rn({ props: { class: 'w-44', $$slots: { default: [kl] }, $$scope: { ctx: s } } })),
		{
			c() {
				b(e.$$.fragment), (l = V()), b(t.$$.fragment), (r = V());
			},
			l(o) {
				h(e.$$.fragment, o), (l = P(o)), h(t.$$.fragment, o), (r = P(o));
			},
			m(o, f) {
				p(e, o, f), v(o, l, f), p(t, o, f), v(o, r, f), (n = !0);
			},
			p(o, f) {
				const i = {};
				f[0] & 1 && (i['data-file-path'] = o[40].path),
					(f[0] & 13) | (f[1] & 262144) && (i.$$scope = { dirty: f, ctx: o }),
					e.$set(i);
				const a = {};
				(f[0] & 1) | (f[1] & 262144) && (a.$$scope = { dirty: f, ctx: o }), t.$set(a);
			},
			i(o) {
				n || (m(e.$$.fragment, o), m(t.$$.fragment, o), (n = !0));
			},
			o(o) {
				$(e.$$.fragment, o), $(t.$$.fragment, o), (n = !1);
			},
			d(o) {
				o && (_(l), _(r)), d(e, o), d(t, o);
			}
		}
	);
}
function Cl(s) {
	let e,
		l,
		t,
		r,
		n,
		o,
		f,
		i,
		a,
		u,
		c,
		g,
		E,
		T,
		D = s[40].name + '',
		S,
		w,
		I,
		k = s[40].children.length + '',
		j,
		q;
	function re() {
		return s[11](s[40]);
	}
	e = new Te({ props: { options: ee['folder:create'], callback: re } });
	function Z() {
		return s[12](s[40]);
	}
	t = new Te({ props: { options: ee['folder:rename'], callback: Z } });
	function te() {
		return s[13](s[40]);
	}
	n = new Te({ props: { options: ee['folder:create-note'], callback: te } });
	function ie() {
		return s[14](s[40]);
	}
	return (
		(f = new Te({ props: { options: ee['folder:delete'], callback: ie } })),
		(u = new le({
			props: { name: 'folder', class: G('w-[18px] h-[18px] shrink-0', s[1][s[42]] && 'hidden') }
		})),
		(g = new le({
			props: {
				name: 'folderOpen',
				class: G('w-[18px] h-[18px] shrink-0', !s[1][s[42]] && 'hidden')
			}
		})),
		{
			c() {
				b(e.$$.fragment),
					(l = V()),
					b(t.$$.fragment),
					(r = V()),
					b(n.$$.fragment),
					(o = V()),
					b(f.$$.fragment),
					(i = V()),
					(a = x('div')),
					b(u.$$.fragment),
					(c = V()),
					b(g.$$.fragment),
					(E = V()),
					(T = x('span')),
					(S = U(D)),
					(w = V()),
					(I = x('span')),
					(j = U(k)),
					this.h();
			},
			l(A) {
				h(e.$$.fragment, A),
					(l = P(A)),
					h(t.$$.fragment, A),
					(r = P(A)),
					h(n.$$.fragment, A),
					(o = P(A)),
					h(f.$$.fragment, A),
					(i = P(A)),
					(a = y(A, 'DIV', { class: !0 }));
				var O = K(a);
				h(u.$$.fragment, O),
					(c = P(O)),
					h(g.$$.fragment, O),
					(E = P(O)),
					(T = y(O, 'SPAN', { class: !0, autocorrect: !0, spellcheck: !0 }));
				var Q = K(T);
				(S = H(Q, D)), Q.forEach(_), O.forEach(_), (w = P(A)), (I = y(A, 'SPAN', { class: !0 }));
				var J = K(I);
				(j = H(J, k)), J.forEach(_), this.h();
			},
			h() {
				z(T, 'class', 'text-xs truncate outline-none'),
					z(T, 'autocorrect', 'off'),
					z(T, 'spellcheck', 'false'),
					z(a, 'class', 'flex items-center w-[calc(100%-20px)] gap-2'),
					z(I, 'class', 'text-xs text-foreground/40');
			},
			m(A, O) {
				p(e, A, O),
					v(A, l, O),
					p(t, A, O),
					v(A, r, O),
					p(n, A, O),
					v(A, o, O),
					p(f, A, O),
					v(A, i, O),
					v(A, a, O),
					p(u, a, null),
					Y(a, c),
					p(g, a, null),
					Y(a, E),
					Y(a, T),
					Y(T, S),
					v(A, w, O),
					v(A, I, O),
					Y(I, j),
					(q = !0);
			},
			p(A, O) {
				s = A;
				const Q = {};
				O[0] & 5 && (Q.callback = re), e.$set(Q);
				const J = {};
				O[0] & 5 && (J.callback = Z), t.$set(J);
				const $e = {};
				O[0] & 5 && ($e.callback = te), n.$set($e);
				const se = {};
				O[0] & 5 && (se.callback = ie), f.$set(se);
				const pe = {};
				O[0] & 2 && (pe.class = G('w-[18px] h-[18px] shrink-0', s[1][s[42]] && 'hidden')),
					u.$set(pe);
				const be = {};
				O[0] & 2 && (be.class = G('w-[18px] h-[18px] shrink-0', !s[1][s[42]] && 'hidden')),
					g.$set(be),
					(!q || O[0] & 1) && D !== (D = s[40].name + '') && Me(S, D),
					(!q || O[0] & 1) && k !== (k = s[40].children.length + '') && Me(j, k);
			},
			i(A) {
				q ||
					(m(e.$$.fragment, A),
					m(t.$$.fragment, A),
					m(n.$$.fragment, A),
					m(f.$$.fragment, A),
					m(u.$$.fragment, A),
					m(g.$$.fragment, A),
					(q = !0));
			},
			o(A) {
				$(e.$$.fragment, A),
					$(t.$$.fragment, A),
					$(n.$$.fragment, A),
					$(f.$$.fragment, A),
					$(u.$$.fragment, A),
					$(g.$$.fragment, A),
					(q = !1);
			},
			d(A) {
				A && (_(l), _(r), _(o), _(i), _(a), _(w), _(I)),
					d(e, A),
					d(t, A),
					d(n, A),
					d(f, A),
					d(u),
					d(g);
			}
		}
	);
}
function Sl(s) {
	let e, l;
	return (
		(e = new Be({
			props: {
				builders: [s[46]],
				size: 'sm',
				variant: 'ghost',
				scale: 'sm',
				class:
					'h-7 w-full fill-muted-foreground hover:fill-foreground text-secondary-foreground/80 hover:text-foreground transition-all flex items-center justify-between',
				style: `padding-left: ${s[4](s[40].path)}`,
				draggable: !0,
				$$slots: { default: [Cl] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				b(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, r) {
				p(e, t, r), (l = !0);
			},
			p(t, r) {
				const n = {};
				r[1] & 32768 && (n.builders = [t[46]]),
					r[0] & 1 && (n.style = `padding-left: ${t[4](t[40].path)}`),
					(r[0] & 7) | (r[1] & 262144) && (n.$$scope = { dirty: r, ctx: t }),
					e.$set(n);
			},
			i(t) {
				l || (m(e.$$.fragment, t), (l = !0));
			},
			o(t) {
				$(e.$$.fragment, t), (l = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function El(s) {
	let e, l, t, r, n;
	l = new tn({
		props: {
			asChild: !0,
			$$slots: {
				default: [Sl, ({ builder: i }) => ({ 46: i }), ({ builder: i }) => [0, i ? 32768 : 0]]
			},
			$$scope: { ctx: s }
		}
	});
	function o(...i) {
		return s[15](s[40], ...i);
	}
	function f(...i) {
		return s[16](s[40], ...i);
	}
	return {
		c() {
			(e = x('div')), b(l.$$.fragment), this.h();
		},
		l(i) {
			e = y(i, 'DIV', { class: !0, role: !0, tabindex: !0, 'data-is-folder': !0 });
			var a = K(e);
			h(l.$$.fragment, a), a.forEach(_), this.h();
		},
		h() {
			z(e, 'class', 'w-full h-full'),
				z(e, 'role', 'button'),
				z(e, 'tabindex', '0'),
				z(e, 'data-is-folder', '');
		},
		m(i, a) {
			v(i, e, a),
				p(l, e, null),
				(t = !0),
				r || ((n = [X(e, 'dragstart', o), X(e, 'dragend', f)]), (r = !0));
		},
		p(i, a) {
			s = i;
			const u = {};
			(a[0] & 7) | (a[1] & 294912) && (u.$$scope = { dirty: a, ctx: s }), l.$set(u);
		},
		i(i) {
			t || (m(l.$$.fragment, i), (t = !0));
		},
		o(i) {
			$(l.$$.fragment, i), (t = !1);
		},
		d(i) {
			i && _(e), d(l), (r = !1), Ve(n);
		}
	};
}
function Tl(s) {
	let e = ze(ee['folder:create-note']) + '',
		l;
	return {
		c() {
			l = U(e);
		},
		l(t) {
			l = H(t, e);
		},
		m(t, r) {
			v(t, l, r);
		},
		p: ae,
		d(t) {
			t && _(l);
		}
	};
}
function Nl(s) {
	let e, l, t, r;
	return (
		(e = new le({
			props: {
				name: 'notePlus',
				class: 'w-3.5 h-3.5 fill-foreground/70 group-hover:fill-foreground'
			}
		})),
		(t = new Re({ props: { $$slots: { default: [Tl] }, $$scope: { ctx: s } } })),
		{
			c() {
				b(e.$$.fragment),
					(l = U(`
						New note
						`)),
					b(t.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n),
					(l = H(
						n,
						`
						New note
						`
					)),
					h(t.$$.fragment, n);
			},
			m(n, o) {
				p(e, n, o), v(n, l, o), p(t, n, o), (r = !0);
			},
			p(n, o) {
				const f = {};
				o[1] & 262144 && (f.$$scope = { dirty: o, ctx: n }), t.$set(f);
			},
			i(n) {
				r || (m(e.$$.fragment, n), m(t.$$.fragment, n), (r = !0));
			},
			o(n) {
				$(e.$$.fragment, n), $(t.$$.fragment, n), (r = !1);
			},
			d(n) {
				n && _(l), d(e, n), d(t, n);
			}
		}
	);
}
function Dl(s) {
	let e = ze(ee['folder:create']) + '',
		l;
	return {
		c() {
			l = U(e);
		},
		l(t) {
			l = H(t, e);
		},
		m(t, r) {
			v(t, l, r);
		},
		p: ae,
		d(t) {
			t && _(l);
		}
	};
}
function Al(s) {
	let e, l, t, r;
	return (
		(e = new le({
			props: {
				name: 'folderPlus',
				class: 'w-3.5 h-3.5 fill-foreground/70 group-hover:fill-foreground'
			}
		})),
		(t = new Re({ props: { $$slots: { default: [Dl] }, $$scope: { ctx: s } } })),
		{
			c() {
				b(e.$$.fragment),
					(l = U(`
						New folder
						`)),
					b(t.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n),
					(l = H(
						n,
						`
						New folder
						`
					)),
					h(t.$$.fragment, n);
			},
			m(n, o) {
				p(e, n, o), v(n, l, o), p(t, n, o), (r = !0);
			},
			p(n, o) {
				const f = {};
				o[1] & 262144 && (f.$$scope = { dirty: o, ctx: n }), t.$set(f);
			},
			i(n) {
				r || (m(e.$$.fragment, n), m(t.$$.fragment, n), (r = !0));
			},
			o(n) {
				$(e.$$.fragment, n), $(t.$$.fragment, n), (r = !1);
			},
			d(n) {
				n && _(l), d(e, n), d(t, n);
			}
		}
	);
}
function Ll(s) {
	let e = ze(ee['note:rename']) + '',
		l;
	return {
		c() {
			l = U(e);
		},
		l(t) {
			l = H(t, e);
		},
		m(t, r) {
			v(t, l, r);
		},
		p: ae,
		d(t) {
			t && _(l);
		}
	};
}
function Pl(s) {
	let e, l, t, r;
	return (
		(e = new le({
			props: {
				name: 'editPencil',
				class: 'w-3.5 h-3.5 fill-foreground/70 group-hover:fill-foreground'
			}
		})),
		(t = new Re({ props: { $$slots: { default: [Ll] }, $$scope: { ctx: s } } })),
		{
			c() {
				b(e.$$.fragment),
					(l = U(`
						Rename
						`)),
					b(t.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n),
					(l = H(
						n,
						`
						Rename
						`
					)),
					h(t.$$.fragment, n);
			},
			m(n, o) {
				p(e, n, o), v(n, l, o), p(t, n, o), (r = !0);
			},
			p(n, o) {
				const f = {};
				o[1] & 262144 && (f.$$scope = { dirty: o, ctx: n }), t.$set(f);
			},
			i(n) {
				r || (m(e.$$.fragment, n), m(t.$$.fragment, n), (r = !0));
			},
			o(n) {
				$(e.$$.fragment, n), $(t.$$.fragment, n), (r = !1);
			},
			d(n) {
				n && _(l), d(e, n), d(t, n);
			}
		}
	);
}
function Vl(s) {
	let e, l, t;
	return (
		(e = new le({
			props: { name: 'motionCirclesLines', class: 'w-3.5 h-3.5 fill-foreground/70' }
		})),
		{
			c() {
				b(e.$$.fragment),
					(l = U(`
							Move folder to...`));
			},
			l(r) {
				h(e.$$.fragment, r),
					(l = H(
						r,
						`
							Move folder to...`
					));
			},
			m(r, n) {
				p(e, r, n), v(r, l, n), (t = !0);
			},
			p: ae,
			i(r) {
				t || (m(e.$$.fragment, r), (t = !0));
			},
			o(r) {
				$(e.$$.fragment, r), (t = !1);
			},
			d(r) {
				r && _(l), d(e, r);
			}
		}
	);
}
function zt(s) {
	let e, l;
	function t() {
		return s[20](s[40], s[43]);
	}
	return (
		(e = new ke({
			props: {
				class: 'flex items-center gap-2 font-base group',
				$$slots: { default: [jl] },
				$$scope: { ctx: s }
			}
		})),
		e.$on('click', t),
		{
			c() {
				b(e.$$.fragment);
			},
			l(r) {
				h(e.$$.fragment, r);
			},
			m(r, n) {
				p(e, r, n), (l = !0);
			},
			p(r, n) {
				s = r;
				const o = {};
				(n[0] & 1) | (n[1] & 262144) && (o.$$scope = { dirty: n, ctx: s }), e.$set(o);
			},
			i(r) {
				l || (m(e.$$.fragment, r), (l = !0));
			},
			o(r) {
				$(e.$$.fragment, r), (l = !1);
			},
			d(r) {
				d(e, r);
			}
		}
	);
}
function jl(s) {
	let e,
		l,
		t = s[43].name + '',
		r,
		n;
	return (
		(e = new le({
			props: { name: 'folder', class: 'w-3.5 h-3.5 fill-foreground/70 group-hover:fill-foreground' }
		})),
		{
			c() {
				b(e.$$.fragment), (l = V()), (r = U(t));
			},
			l(o) {
				h(e.$$.fragment, o), (l = P(o)), (r = H(o, t));
			},
			m(o, f) {
				p(e, o, f), v(o, l, f), v(o, r, f), (n = !0);
			},
			p(o, f) {
				(!n || f[0] & 1) && t !== (t = o[43].name + '') && Me(r, t);
			},
			i(o) {
				n || (m(e.$$.fragment, o), (n = !0));
			},
			o(o) {
				$(e.$$.fragment, o), (n = !1);
			},
			d(o) {
				o && (_(l), _(r)), d(e, o);
			}
		}
	);
}
function Ft(s) {
	let e,
		l,
		t = s[43].name !== s[40].name && zt(s);
	return {
		c() {
			t && t.c(), (e = ne());
		},
		l(r) {
			t && t.l(r), (e = ne());
		},
		m(r, n) {
			t && t.m(r, n), v(r, e, n), (l = !0);
		},
		p(r, n) {
			r[43].name !== r[40].name
				? t
					? (t.p(r, n), n[0] & 1 && m(t, 1))
					: ((t = zt(r)), t.c(), m(t, 1), t.m(e.parentNode, e))
				: t &&
					(ue(),
					$(t, 1, 1, () => {
						t = null;
					}),
					ce());
		},
		i(r) {
			l || (m(t), (l = !0));
		},
		o(r) {
			$(t), (l = !1);
		},
		d(r) {
			r && _(e), t && t.d(r);
		}
	};
}
function Bt(s) {
	let e, l;
	function t() {
		return s[21](s[40]);
	}
	return (
		(e = new ke({
			props: {
				class: 'flex items-center gap-2 font-base group',
				$$slots: { default: [zl] },
				$$scope: { ctx: s }
			}
		})),
		e.$on('click', t),
		{
			c() {
				b(e.$$.fragment);
			},
			l(r) {
				h(e.$$.fragment, r);
			},
			m(r, n) {
				p(e, r, n), (l = !0);
			},
			p(r, n) {
				s = r;
				const o = {};
				n[1] & 262144 && (o.$$scope = { dirty: n, ctx: s }), e.$set(o);
			},
			i(r) {
				l || (m(e.$$.fragment, r), (l = !0));
			},
			o(r) {
				$(e.$$.fragment, r), (l = !1);
			},
			d(r) {
				d(e, r);
			}
		}
	);
}
function Ol(s) {
	let e = ze(ee['folder:create']) + '',
		l;
	return {
		c() {
			l = U(e);
		},
		l(t) {
			l = H(t, e);
		},
		m(t, r) {
			v(t, l, r);
		},
		p: ae,
		d(t) {
			t && _(l);
		}
	};
}
function zl(s) {
	let e, l, t, r;
	return (
		(e = new le({
			props: {
				name: 'folderPlus',
				class: 'w-3.5 h-3.5 fill-foreground/70 group-hover:fill-foreground'
			}
		})),
		(t = new Re({ props: { $$slots: { default: [Ol] }, $$scope: { ctx: s } } })),
		{
			c() {
				b(e.$$.fragment),
					(l = U(`
									New folder
									`)),
					b(t.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n),
					(l = H(
						n,
						`
									New folder
									`
					)),
					h(t.$$.fragment, n);
			},
			m(n, o) {
				p(e, n, o), v(n, l, o), p(t, n, o), (r = !0);
			},
			p(n, o) {
				const f = {};
				o[1] & 262144 && (f.$$scope = { dirty: o, ctx: n }), t.$set(f);
			},
			i(n) {
				r || (m(e.$$.fragment, n), m(t.$$.fragment, n), (r = !0));
			},
			o(n) {
				$(e.$$.fragment, n), $(t.$$.fragment, n), (r = !1);
			},
			d(n) {
				n && _(l), d(e, n), d(t, n);
			}
		}
	);
}
function Fl(s) {
	let e,
		l = Ie(s[0]).filter(n).length === 0,
		t,
		r;
	function n(...u) {
		return s[10](s[40], ...u);
	}
	let o = De(Ie(s[0])),
		f = [];
	for (let u = 0; u < o.length; u += 1) f[u] = Ft(Pt(s, o, u));
	const i = (u) =>
		$(f[u], 1, 1, () => {
			f[u] = null;
		});
	let a = l && Bt(s);
	return {
		c() {
			for (let u = 0; u < f.length; u += 1) f[u].c();
			(e = V()), a && a.c(), (t = ne());
		},
		l(u) {
			for (let c = 0; c < f.length; c += 1) f[c].l(u);
			(e = P(u)), a && a.l(u), (t = ne());
		},
		m(u, c) {
			for (let g = 0; g < f.length; g += 1) f[g] && f[g].m(u, c);
			v(u, e, c), a && a.m(u, c), v(u, t, c), (r = !0);
		},
		p(u, c) {
			if (((s = u), c[0] & 1)) {
				o = De(Ie(s[0]));
				let g;
				for (g = 0; g < o.length; g += 1) {
					const E = Pt(s, o, g);
					f[g]
						? (f[g].p(E, c), m(f[g], 1))
						: ((f[g] = Ft(E)), f[g].c(), m(f[g], 1), f[g].m(e.parentNode, e));
				}
				for (ue(), g = o.length; g < f.length; g += 1) i(g);
				ce();
			}
			c[0] & 1 && (l = Ie(s[0]).filter(n).length === 0),
				l
					? a
						? (a.p(s, c), c[0] & 1 && m(a, 1))
						: ((a = Bt(s)), a.c(), m(a, 1), a.m(t.parentNode, t))
					: a &&
						(ue(),
						$(a, 1, 1, () => {
							a = null;
						}),
						ce());
		},
		i(u) {
			if (!r) {
				for (let c = 0; c < o.length; c += 1) m(f[c]);
				m(a), (r = !0);
			}
		},
		o(u) {
			f = f.filter(Boolean);
			for (let c = 0; c < f.length; c += 1) $(f[c]);
			$(a), (r = !1);
		},
		d(u) {
			u && (_(e), _(t)), Ge(f, u), a && a.d(u);
		}
	};
}
function Bl(s) {
	let e, l, t, r;
	return (
		(e = new fn({
			props: {
				class: 'flex items-center gap-2 font-base group',
				$$slots: { default: [Vl] },
				$$scope: { ctx: s }
			}
		})),
		(t = new on({ props: { class: 'w-40', $$slots: { default: [Fl] }, $$scope: { ctx: s } } })),
		{
			c() {
				b(e.$$.fragment), (l = V()), b(t.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n), (l = P(n)), h(t.$$.fragment, n);
			},
			m(n, o) {
				p(e, n, o), v(n, l, o), p(t, n, o), (r = !0);
			},
			p(n, o) {
				const f = {};
				o[1] & 262144 && (f.$$scope = { dirty: o, ctx: n }), e.$set(f);
				const i = {};
				(o[0] & 1) | (o[1] & 262144) && (i.$$scope = { dirty: o, ctx: n }), t.$set(i);
			},
			i(n) {
				r || (m(e.$$.fragment, n), m(t.$$.fragment, n), (r = !0));
			},
			o(n) {
				$(e.$$.fragment, n), $(t.$$.fragment, n), (r = !1);
			},
			d(n) {
				n && _(l), d(e, n), d(t, n);
			}
		}
	);
}
function Rl(s) {
	let e = ze(ee['folder:delete']) + '',
		l;
	return {
		c() {
			l = U(e);
		},
		l(t) {
			l = H(t, e);
		},
		m(t, r) {
			v(t, l, r);
		},
		p: ae,
		d(t) {
			t && _(l);
		}
	};
}
function Wl(s) {
	let e, l, t, r;
	return (
		(e = new le({
			props: { name: 'bin', class: 'w-3.5 h-3.5 fill-destructive/70 group-hover:fill-destructive' }
		})),
		(t = new Re({
			props: { class: 'text-destructive/60', $$slots: { default: [Rl] }, $$scope: { ctx: s } }
		})),
		{
			c() {
				b(e.$$.fragment),
					(l = U(`
						Delete
						`)),
					b(t.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n),
					(l = H(
						n,
						`
						Delete
						`
					)),
					h(t.$$.fragment, n);
			},
			m(n, o) {
				p(e, n, o), v(n, l, o), p(t, n, o), (r = !0);
			},
			p(n, o) {
				const f = {};
				o[1] & 262144 && (f.$$scope = { dirty: o, ctx: n }), t.$set(f);
			},
			i(n) {
				r || (m(e.$$.fragment, n), m(t.$$.fragment, n), (r = !0));
			},
			o(n) {
				$(e.$$.fragment, n), $(t.$$.fragment, n), (r = !1);
			},
			d(n) {
				n && _(l), d(e, n), d(t, n);
			}
		}
	);
}
function Il(s) {
	let e, l, t, r, n, o, f, i, a, u, c, g, E, T;
	function D() {
		return s[17](s[40], s[42]);
	}
	(e = new ke({
		props: {
			class: 'flex items-center gap-2 font-base group',
			$$slots: { default: [Nl] },
			$$scope: { ctx: s }
		}
	})),
		e.$on('click', D);
	function S() {
		return s[18](s[40], s[42]);
	}
	(t = new ke({
		props: {
			class: 'flex items-center gap-2 font-base group',
			$$slots: { default: [Al] },
			$$scope: { ctx: s }
		}
	})),
		t.$on('click', S),
		(n = new xe({}));
	function w() {
		return s[19](s[40]);
	}
	(f = new ke({
		props: {
			class: 'flex items-center gap-2 font-base group',
			$$slots: { default: [Pl] },
			$$scope: { ctx: s }
		}
	})),
		f.$on('click', w),
		(a = new sn({ props: { $$slots: { default: [Bl] }, $$scope: { ctx: s } } })),
		(c = new xe({}));
	function I() {
		return s[22](s[40]);
	}
	return (
		(E = new ke({
			props: {
				class:
					'flex text-destructive data-[highlighted]:bg-destructive/20 data-[highlighted]:text-destructive items-center gap-2 font-base group',
				$$slots: { default: [Wl] },
				$$scope: { ctx: s }
			}
		})),
		E.$on('click', I),
		{
			c() {
				b(e.$$.fragment),
					(l = V()),
					b(t.$$.fragment),
					(r = V()),
					b(n.$$.fragment),
					(o = V()),
					b(f.$$.fragment),
					(i = V()),
					b(a.$$.fragment),
					(u = V()),
					b(c.$$.fragment),
					(g = V()),
					b(E.$$.fragment);
			},
			l(k) {
				h(e.$$.fragment, k),
					(l = P(k)),
					h(t.$$.fragment, k),
					(r = P(k)),
					h(n.$$.fragment, k),
					(o = P(k)),
					h(f.$$.fragment, k),
					(i = P(k)),
					h(a.$$.fragment, k),
					(u = P(k)),
					h(c.$$.fragment, k),
					(g = P(k)),
					h(E.$$.fragment, k);
			},
			m(k, j) {
				p(e, k, j),
					v(k, l, j),
					p(t, k, j),
					v(k, r, j),
					p(n, k, j),
					v(k, o, j),
					p(f, k, j),
					v(k, i, j),
					p(a, k, j),
					v(k, u, j),
					p(c, k, j),
					v(k, g, j),
					p(E, k, j),
					(T = !0);
			},
			p(k, j) {
				s = k;
				const q = {};
				j[1] & 262144 && (q.$$scope = { dirty: j, ctx: s }), e.$set(q);
				const re = {};
				j[1] & 262144 && (re.$$scope = { dirty: j, ctx: s }), t.$set(re);
				const Z = {};
				j[1] & 262144 && (Z.$$scope = { dirty: j, ctx: s }), f.$set(Z);
				const te = {};
				(j[0] & 1) | (j[1] & 262144) && (te.$$scope = { dirty: j, ctx: s }), a.$set(te);
				const ie = {};
				j[1] & 262144 && (ie.$$scope = { dirty: j, ctx: s }), E.$set(ie);
			},
			i(k) {
				T ||
					(m(e.$$.fragment, k),
					m(t.$$.fragment, k),
					m(n.$$.fragment, k),
					m(f.$$.fragment, k),
					m(a.$$.fragment, k),
					m(c.$$.fragment, k),
					m(E.$$.fragment, k),
					(T = !0));
			},
			o(k) {
				$(e.$$.fragment, k),
					$(t.$$.fragment, k),
					$(n.$$.fragment, k),
					$(f.$$.fragment, k),
					$(a.$$.fragment, k),
					$(c.$$.fragment, k),
					$(E.$$.fragment, k),
					(T = !1);
			},
			d(k) {
				k && (_(l), _(r), _(o), _(i), _(u), _(g)),
					d(e, k),
					d(t, k),
					d(n, k),
					d(f, k),
					d(a, k),
					d(c, k),
					d(E, k);
			}
		}
	);
}
function Ml(s) {
	let e, l, t, r;
	return (
		(e = new ln({
			props: { 'data-path': s[40].path, $$slots: { default: [El] }, $$scope: { ctx: s } }
		})),
		(t = new rn({ props: { class: 'w-44', $$slots: { default: [Il] }, $$scope: { ctx: s } } })),
		{
			c() {
				b(e.$$.fragment), (l = V()), b(t.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n), (l = P(n)), h(t.$$.fragment, n);
			},
			m(n, o) {
				p(e, n, o), v(n, l, o), p(t, n, o), (r = !0);
			},
			p(n, o) {
				const f = {};
				o[0] & 1 && (f['data-path'] = n[40].path),
					(o[0] & 7) | (o[1] & 262144) && (f.$$scope = { dirty: o, ctx: n }),
					e.$set(f);
				const i = {};
				(o[0] & 3) | (o[1] & 262144) && (i.$$scope = { dirty: o, ctx: n }), t.$set(i);
			},
			i(n) {
				r || (m(e.$$.fragment, n), m(t.$$.fragment, n), (r = !0));
			},
			o(n) {
				$(e.$$.fragment, n), $(t.$$.fragment, n), (r = !1);
			},
			d(n) {
				n && _(l), d(e, n), d(t, n);
			}
		}
	);
}
function ql(s) {
	let e, l;
	return (
		(e = new an({ props: { entries: s[40].children } })),
		{
			c() {
				b(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, r) {
				p(e, t, r), (l = !0);
			},
			p(t, r) {
				const n = {};
				r[0] & 1 && (n.entries = t[40].children), e.$set(n);
			},
			i(t) {
				l || (m(e.$$.fragment, t), (l = !0));
			},
			o(t) {
				$(e.$$.fragment, t), (l = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function Hl(s) {
	let e, l, t, r, n;
	return (
		(e = new nn({ props: { $$slots: { default: [Ml] }, $$scope: { ctx: s } } })),
		(t = new en({
			props: {
				class: G('space-y-1.5 pt-1.5', s[40].children.length === 0 && 'hidden'),
				$$slots: { default: [ql] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				b(e.$$.fragment), (l = V()), b(t.$$.fragment), (r = V());
			},
			l(o) {
				h(e.$$.fragment, o), (l = P(o)), h(t.$$.fragment, o), (r = P(o));
			},
			m(o, f) {
				p(e, o, f), v(o, l, f), p(t, o, f), v(o, r, f), (n = !0);
			},
			p(o, f) {
				const i = {};
				(f[0] & 7) | (f[1] & 262144) && (i.$$scope = { dirty: f, ctx: o }), e.$set(i);
				const a = {};
				f[0] & 1 && (a.class = G('space-y-1.5 pt-1.5', o[40].children.length === 0 && 'hidden')),
					(f[0] & 1) | (f[1] & 262144) && (a.$$scope = { dirty: f, ctx: o }),
					t.$set(a);
			},
			i(o) {
				n || (m(e.$$.fragment, o), m(t.$$.fragment, o), (n = !0));
			},
			o(o) {
				$(e.$$.fragment, o), $(t.$$.fragment, o), (n = !1);
			},
			d(o) {
				o && (_(l), _(r)), d(e, o), d(t, o);
			}
		}
	);
}
function Rt(s) {
	let e, l, t, r;
	const n = [ol, sl],
		o = [];
	function f(i, a) {
		return i[40].children ? 0 : 1;
	}
	return (
		(e = f(s)),
		(l = o[e] = n[e](s)),
		{
			c() {
				l.c(), (t = ne());
			},
			l(i) {
				l.l(i), (t = ne());
			},
			m(i, a) {
				o[e].m(i, a), v(i, t, a), (r = !0);
			},
			p(i, a) {
				let u = e;
				(e = f(i)),
					e === u
						? o[e].p(i, a)
						: (ue(),
							$(o[u], 1, 1, () => {
								o[u] = null;
							}),
							ce(),
							(l = o[e]),
							l ? l.p(i, a) : ((l = o[e] = n[e](i)), l.c()),
							m(l, 1),
							l.m(t.parentNode, t));
			},
			i(i) {
				r || (m(l), (r = !0));
			},
			o(i) {
				$(l), (r = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function Ul(s) {
	let e,
		l,
		t = De(s[0]),
		r = [];
	for (let o = 0; o < t.length; o += 1) r[o] = Rt(At(s, t, o));
	const n = (o) =>
		$(r[o], 1, 1, () => {
			r[o] = null;
		});
	return {
		c() {
			for (let o = 0; o < r.length; o += 1) r[o].c();
			e = ne();
		},
		l(o) {
			for (let f = 0; f < r.length; f += 1) r[f].l(o);
			e = ne();
		},
		m(o, f) {
			for (let i = 0; i < r.length; i += 1) r[i] && r[i].m(o, f);
			v(o, e, f), (l = !0);
		},
		p(o, f) {
			if ((f[0] & 255) | (f[1] & 32768)) {
				t = De(o[0]);
				let i;
				for (i = 0; i < t.length; i += 1) {
					const a = At(o, t, i);
					r[i]
						? (r[i].p(a, f), m(r[i], 1))
						: ((r[i] = Rt(a)), r[i].c(), m(r[i], 1), r[i].m(e.parentNode, e));
				}
				for (ue(), i = t.length; i < r.length; i += 1) n(i);
				ce();
			}
		},
		i(o) {
			if (!l) {
				for (let f = 0; f < t.length; f += 1) m(r[f]);
				l = !0;
			}
		},
		o(o) {
			r = r.filter(Boolean);
			for (let f = 0; f < r.length; f += 1) $(r[f]);
			l = !1;
		},
		d(o) {
			o && _(e), Ge(r, o);
		}
	};
}
function Ie(s) {
	return s.filter((e) => e.children);
}
function Xl(s, e, l) {
	let t, r;
	_e(s, Ye, (C) => l(38, (t = C))), _e(s, ft, (C) => l(3, (r = C)));
	let { entries: n } = e,
		{ toggleState: o } = e,
		f = [],
		i = null,
		a = null,
		u = null,
		c = !1;
	function g(C) {
		return `${(C.split('/').length - t.split('/').length) * 0.75}rem`;
	}
	function E() {
		l(1, (f = f.map(() => o === 'expand')));
	}
	async function T(C, W) {
		if ((l(2, (c = !0)), W === 'note')) {
			await ye(C.path), Jt(it).commands.blur();
			const M = document.getElementById('inline-title-input');
			window.setTimeout(() => {
				M == null || M.focus(), M == null || M.select();
			}, 50),
				M == null ||
					M.addEventListener('blur', async () => {
						l(2, (c = !1)), M == null || M.removeEventListener('blur', () => {});
					});
		} else {
			const M = document.querySelector(`[data-path="${C.path}"]`),
				B = M == null ? void 0 : M.querySelector('span');
			window.setTimeout(() => {
				B == null || B.setAttribute('contenteditable', 'true'),
					B == null || B.focus(),
					document.execCommand('selectAll');
			}, 100),
				B == null ||
					B.addEventListener('blur', () => {
						B == null || B.setAttribute('contenteditable', 'false'),
							c && gn(C.path, (B == null ? void 0 : B.textContent) || ''),
							l(2, (c = !1)),
							B == null || B.removeEventListener('blur', () => {});
					}),
				B == null ||
					B.addEventListener('keydown', (oe) => {
						oe.key === 'Enter'
							? (oe.preventDefault(), B == null || B.blur())
							: oe.key === 'Escape'
								? (oe.preventDefault(),
									B == null || B.setAttribute('contenteditable', 'false'),
									l(2, (c = !1)),
									(B.textContent = C.name ?? ''),
									B == null || B.removeEventListener('blur', () => {}))
								: oe.key === 'Space' && (oe.preventDefault(), oe.stopPropagation());
					});
		}
	}
	function D(C, W) {
		var M;
		(C.dataTransfer.effectAllowed = 'move'),
			(i = C.currentTarget),
			(a = document.createElement('div')),
			a.classList.add('drag-item'),
			(a.textContent = W),
			document.body.appendChild(a),
			(C.currentTarget.style.opacity = '0.5'),
			(M = C.dataTransfer) == null || M.setDragImage(a, 0, 0),
			document.addEventListener('dragover', S);
	}
	function S(C) {
		const W = C.target;
		let M = null;
		const B = W.closest('[data-collapsible-root]');
		if (B)
			if (
				i != null &&
				i.hasAttribute('data-is-folder') &&
				B === (i == null ? void 0 : i.closest('[data-collapsible-root]'))
			) {
				let oe = B.parentElement;
				for (; oe; ) {
					if (oe !== (i == null ? void 0 : i.closest('[data-collapsible-root]'))) {
						oe.hasAttribute('data-collection-root') ? (M = oe) : (M = oe.parentElement);
						break;
					}
					oe = oe.parentElement;
				}
			} else M = B;
		else M = W.closest('[data-collection-root]');
		M
			? (u && u !== M && u.removeAttribute('data-highlighted'),
				M.setAttribute('data-highlighted', 'true'),
				(u = M))
			: u && (u.removeAttribute('data-highlighted'), (u = null));
	}
	function w(C, W, M = !1) {
		var B, oe;
		a && (document.body.removeChild(a), (a = null)),
			(i = null),
			(C.currentTarget.style.opacity = ''),
			u &&
				(u.getAttribute('data-path') === W.split('/').slice(0, -1).join('/') ||
					((B = u.firstElementChild) == null ? void 0 : B.getAttribute('data-path')) ===
						W.split('/').slice(0, -1).join('/') ||
					(u.hasAttribute('data-collection-root')
						? M
							? Je(W, u.getAttribute('data-path'))
							: Ke(W, u.getAttribute('data-path'))
						: (oe = u.firstElementChild) != null &&
							oe.getAttribute('data-path') &&
							(M
								? Je(W, u.firstElementChild.getAttribute('data-path'))
								: Ke(W, u.firstElementChild.getAttribute('data-path')))),
				u.removeAttribute('data-highlighted'),
				(u = null)),
			document.removeEventListener('dragover', S);
	}
	const I = (C, W) => W.name !== C.name,
		k = (C) => {
			!c && Xe(C.path);
		},
		j = (C) => !c && T(C, 'folder'),
		q = (C) => !c && st(C.path),
		re = (C) => !c && _t(C.path),
		Z = (C, W) => D(W, C.name || ''),
		te = (C, W) => {
			w(W, C.path, !0);
		},
		ie = (C, W) => {
			st(C.path), l(1, (f[W] = !0), f);
		},
		A = (C, W) => {
			Xe(C.path), l(1, (f[W] = !0), f);
		},
		O = async (C) => {
			T(C, 'folder');
		},
		Q = (C, W) => Je(C.path, W.path),
		J = async (C) => {
			const W = await Xe(C.path.split('/').slice(0, -1).join('/'));
			Je(C.path, W);
		},
		$e = (C) => _t(C.path);
	function se(C, W) {
		s.$$.not_equal(f[W], C) && ((f[W] = C), l(1, f), l(0, n));
	}
	const pe = (C) => !c && T(C, 'note'),
		be = (C) => !c && dt(C.path),
		We = (C) => !c && pt(C.path),
		ge = (C) => ye(C.path),
		R = (C, W) => D(W, C.name || ''),
		L = (C, W) => {
			w(W, C.path);
		},
		F = async (C) => {
			T(C, 'note');
		},
		ve = (C) => dt(C.path),
		me = (C, W) => Ke(C.path, W.path),
		N = async (C) => {
			await Xe(C.path.split('/').slice(0, -1).join('/')),
				Ke(C.path, C.path.split('/').slice(0, -1).join('/') + '/Untitled');
		},
		de = (C) => pt(C.path);
	return (
		(s.$$set = (C) => {
			'entries' in C && l(0, (n = C.entries)), 'toggleState' in C && l(8, (o = C.toggleState));
		}),
		(s.$$.update = () => {
			s.$$.dirty[0] & 3 && f.length !== n.length && l(1, (f = new Array(n.length).fill(!1))),
				s.$$.dirty[0] & 2 && l(8, (o = f.every((C) => C === !1) ? 'expand' : 'collapse'));
		}),
		[
			n,
			f,
			c,
			r,
			g,
			T,
			D,
			w,
			o,
			E,
			I,
			k,
			j,
			q,
			re,
			Z,
			te,
			ie,
			A,
			O,
			Q,
			J,
			$e,
			se,
			pe,
			be,
			We,
			ge,
			R,
			L,
			F,
			ve,
			me,
			N,
			de
		]
	);
}
class an extends je {
	constructor(e) {
		super(),
			Oe(
				this,
				e,
				Xl,
				Ul,
				Pe,
				{ entries: 0, toggleState: 8, toggleFolderStates: 9 },
				null,
				[-1, -1]
			);
	}
	get toggleFolderStates() {
		return this.$$.ctx[9];
	}
}
function Wt(s, e, l) {
	const t = s.slice();
	return (t[14] = e[l]), t;
}
function It(s, e, l) {
	const t = s.slice();
	return (t[17] = e[l]), (t[19] = l), t;
}
function Zl(s) {
	let e = s[2].length + '',
		l,
		t,
		r = Object.keys(s[5]).length + '',
		n,
		o;
	return {
		c() {
			(l = U(e)), (t = U(' results in ')), (n = U(r)), (o = U(' files'));
		},
		l(f) {
			(l = H(f, e)), (t = H(f, ' results in ')), (n = H(f, r)), (o = H(f, ' files'));
		},
		m(f, i) {
			v(f, l, i), v(f, t, i), v(f, n, i), v(f, o, i);
		},
		p(f, i) {
			i & 4 && e !== (e = f[2].length + '') && Me(l, e),
				i & 32 && r !== (r = Object.keys(f[5]).length + '') && Me(n, r);
		},
		d(f) {
			f && (_(l), _(t), _(n), _(o));
		}
	};
}
function Mt(s) {
	let e,
		l,
		t = De(Object.keys(s[5])),
		r = [];
	for (let o = 0; o < t.length; o += 1) r[o] = Ht(Wt(s, t, o));
	const n = (o) =>
		$(r[o], 1, 1, () => {
			r[o] = null;
		});
	return {
		c() {
			for (let o = 0; o < r.length; o += 1) r[o].c();
			e = ne();
		},
		l(o) {
			for (let f = 0; f < r.length; f += 1) r[f].l(o);
			e = ne();
		},
		m(o, f) {
			for (let i = 0; i < r.length; i += 1) r[i] && r[i].m(o, f);
			v(o, e, f), (l = !0);
		},
		p(o, f) {
			if (f & 4083) {
				t = De(Object.keys(o[5]));
				let i;
				for (i = 0; i < t.length; i += 1) {
					const a = Wt(o, t, i);
					r[i]
						? (r[i].p(a, f), m(r[i], 1))
						: ((r[i] = Ht(a)), r[i].c(), m(r[i], 1), r[i].m(e.parentNode, e));
				}
				for (ue(), i = t.length; i < r.length; i += 1) n(i);
				ce();
			}
		},
		i(o) {
			if (!l) {
				for (let f = 0; f < t.length; f += 1) m(r[f]);
				l = !0;
			}
		},
		o(o) {
			r = r.filter(Boolean);
			for (let f = 0; f < r.length; f += 1) $(r[f]);
			l = !1;
		},
		d(o) {
			o && _(e), Ge(r, o);
		}
	};
}
function Gl(s) {
	let e,
		l,
		t,
		r = s[14].split('/').pop() + '',
		n,
		o;
	return (
		(e = new Sn({
			props: {
				class: G(
					'w-3.5 h-3.5 transform transition-all shrink-0 text-muted-foreground group-hover:text-foreground',
					s[4][s[14]] ? 'rotate-0' : '-rotate-90'
				)
			}
		})),
		{
			c() {
				b(e.$$.fragment), (l = V()), (t = x('p')), (n = U(r)), this.h();
			},
			l(f) {
				h(e.$$.fragment, f), (l = P(f)), (t = y(f, 'P', { class: !0 }));
				var i = K(t);
				(n = H(i, r)), i.forEach(_), this.h();
			},
			h() {
				z(t, 'class', 'truncate');
			},
			m(f, i) {
				p(e, f, i), v(f, l, i), v(f, t, i), Y(t, n), (o = !0);
			},
			p(f, i) {
				const a = {};
				i & 48 &&
					(a.class = G(
						'w-3.5 h-3.5 transform transition-all shrink-0 text-muted-foreground group-hover:text-foreground',
						f[4][f[14]] ? 'rotate-0' : '-rotate-90'
					)),
					e.$set(a),
					(!o || i & 32) && r !== (r = f[14].split('/').pop() + '') && Me(n, r);
			},
			i(f) {
				o || (m(e.$$.fragment, f), (o = !0));
			},
			o(f) {
				$(e.$$.fragment, f), (o = !1);
			},
			d(f) {
				f && (_(l), _(t)), d(e, f);
			}
		}
	);
}
function qt(s) {
	let e,
		l,
		t =
			vt({ html: !0, linkify: !1, typographer: !0 })
				.render(s[17].context_preview)
				.replace(new RegExp(`(${s[0]})`, s[1].caseSensitive ? 'g' : 'gi'), Zt)
				.replace(/<a/g, '<span')
				.replace(/<\/a>/g, '</span>') + '',
		r,
		n,
		o;
	function f() {
		return s[13](s[14], s[19]);
	}
	return {
		c() {
			(e = x('button')), (l = new cn(!1)), (r = V()), this.h();
		},
		l(i) {
			e = y(i, 'BUTTON', { class: !0 });
			var a = K(e);
			(l = un(a, !1)), (r = P(a)), a.forEach(_), this.h();
		},
		h() {
			(l.a = r),
				z(
					e,
					'class',
					'flex items-start min-w-full overflow-hidden text-start p-2 bg-secondary-background border rounded-md text-xs hover:bg-accent hover:text-accent-foreground'
				);
		},
		m(i, a) {
			v(i, e, a), l.m(t, e), Y(e, r), n || ((o = X(e, 'click', f)), (n = !0));
		},
		p(i, a) {
			(s = i),
				a & 35 &&
					t !==
						(t =
							vt({ html: !0, linkify: !1, typographer: !0 })
								.render(s[17].context_preview)
								.replace(new RegExp(`(${s[0]})`, s[1].caseSensitive ? 'g' : 'gi'), Zt)
								.replace(/<a/g, '<span')
								.replace(/<\/a>/g, '</span>') + '') &&
					l.p(t);
		},
		d(i) {
			i && _(e), (n = !1), o();
		}
	};
}
function Jl(s) {
	let e,
		l = De(s[5][s[14]]),
		t = [];
	for (let r = 0; r < l.length; r += 1) t[r] = qt(It(s, l, r));
	return {
		c() {
			for (let r = 0; r < t.length; r += 1) t[r].c();
			e = ne();
		},
		l(r) {
			for (let n = 0; n < t.length; n += 1) t[n].l(r);
			e = ne();
		},
		m(r, n) {
			for (let o = 0; o < t.length; o += 1) t[o] && t[o].m(r, n);
			v(r, e, n);
		},
		p(r, n) {
			if (n & 3043) {
				l = De(r[5][r[14]]);
				let o;
				for (o = 0; o < l.length; o += 1) {
					const f = It(r, l, o);
					t[o] ? t[o].p(f, n) : ((t[o] = qt(f)), t[o].c(), t[o].m(e.parentNode, e));
				}
				for (; o < t.length; o += 1) t[o].d(1);
				t.length = l.length;
			}
		},
		d(r) {
			r && _(e), Ge(t, r);
		}
	};
}
function Kl(s) {
	let e, l, t, r, n;
	function o() {
		return s[12](s[14]);
	}
	return (
		(e = new tn({
			props: {
				class:
					'text-[13px] w-full text-secondary-foreground flex items-center h-7 justify-start gap-1.5 group hover:text-foreground transition-all',
				$$slots: { default: [Gl] },
				$$scope: { ctx: s }
			}
		})),
		e.$on('click', o),
		(t = new en({
			props: {
				class: 'mt-0.5 w-full gap-1.5 flex flex-col',
				$$slots: { default: [Jl] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				b(e.$$.fragment), (l = V()), b(t.$$.fragment), (r = V());
			},
			l(f) {
				h(e.$$.fragment, f), (l = P(f)), h(t.$$.fragment, f), (r = P(f));
			},
			m(f, i) {
				p(e, f, i), v(f, l, i), p(t, f, i), v(f, r, i), (n = !0);
			},
			p(f, i) {
				s = f;
				const a = {};
				i & 1048624 && (a.$$scope = { dirty: i, ctx: s }), e.$set(a);
				const u = {};
				i & 1049571 && (u.$$scope = { dirty: i, ctx: s }), t.$set(u);
			},
			i(f) {
				n || (m(e.$$.fragment, f), m(t.$$.fragment, f), (n = !0));
			},
			o(f) {
				$(e.$$.fragment, f), $(t.$$.fragment, f), (n = !1);
			},
			d(f) {
				f && (_(l), _(r)), d(e, f), d(t, f);
			}
		}
	);
}
function Ht(s) {
	let e, l;
	return (
		(e = new xt({
			props: { open: s[4][s[14]], class: 'w-full', $$slots: { default: [Kl] }, $$scope: { ctx: s } }
		})),
		{
			c() {
				b(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, r) {
				p(e, t, r), (l = !0);
			},
			p(t, r) {
				const n = {};
				r & 48 && (n.open = t[4][t[14]]),
					r & 1049587 && (n.$$scope = { dirty: r, ctx: t }),
					e.$set(n);
			},
			i(t) {
				l || (m(e.$$.fragment, t), (l = !0));
			},
			o(t) {
				$(e.$$.fragment, t), (l = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function Ut(s) {
	let e, l, t;
	return (
		(l = new et({
			props: {
				class: 'text-muted-foreground text-xs',
				$$slots: { default: [Ql] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = x('div')), b(l.$$.fragment), this.h();
			},
			l(r) {
				e = y(r, 'DIV', { class: !0 });
				var n = K(e);
				h(l.$$.fragment, n), n.forEach(_), this.h();
			},
			h() {
				z(e, 'class', 'w-full h-full flex flex-col gap-1 items-center justify-center');
			},
			m(r, n) {
				v(r, e, n), p(l, e, null), (t = !0);
			},
			i(r) {
				t || (m(l.$$.fragment, r), (t = !0));
			},
			o(r) {
				$(l.$$.fragment, r), (t = !1);
			},
			d(r) {
				r && _(e), d(l);
			}
		}
	);
}
function Ql(s) {
	let e;
	return {
		c() {
			e = U('No results found');
		},
		l(l) {
			e = H(l, 'No results found');
		},
		m(l, t) {
			v(l, e, t);
		},
		d(l) {
			l && _(e);
		}
	};
}
function Xt(s) {
	let e, l, t, r, n;
	return (
		(l = new Cn({ props: { class: 'w-4 h-4 animate-spin text-muted-foreground' } })),
		(r = new et({
			props: {
				class: 'text-muted-foreground text-xs',
				$$slots: { default: [Yl] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = x('div')), b(l.$$.fragment), (t = V()), b(r.$$.fragment), this.h();
			},
			l(o) {
				e = y(o, 'DIV', { class: !0 });
				var f = K(e);
				h(l.$$.fragment, f), (t = P(f)), h(r.$$.fragment, f), f.forEach(_), this.h();
			},
			h() {
				z(e, 'class', 'w-full h-full flex flex-col gap-0.5 items-center justify-center');
			},
			m(o, f) {
				v(o, e, f), p(l, e, null), Y(e, t), p(r, e, null), (n = !0);
			},
			i(o) {
				n || (m(l.$$.fragment, o), m(r.$$.fragment, o), (n = !0));
			},
			o(o) {
				$(l.$$.fragment, o), $(r.$$.fragment, o), (n = !1);
			},
			d(o) {
				o && _(e), d(l), d(r);
			}
		}
	);
}
function Yl(s) {
	let e;
	return {
		c() {
			e = U('Searching collection...');
		},
		l(l) {
			e = H(l, 'Searching collection...');
		},
		m(l, t) {
			v(l, e, t);
		},
		d(l) {
			l && _(e);
		}
	};
}
function yl(s) {
	let e,
		l,
		t,
		r = Object.keys(s[5]).length > 0 && !s[3],
		n,
		o,
		f,
		i;
	l = new et({
		props: {
			class: 'text-muted-foreground text-xs',
			$$slots: { default: [Zl] },
			$$scope: { ctx: s }
		}
	});
	let a = r && Mt(s),
		u = s[2].length === 0 && !s[3] && Ut(s),
		c = s[3] && Xt(s);
	return {
		c() {
			(e = x('div')),
				b(l.$$.fragment),
				(t = V()),
				a && a.c(),
				(n = V()),
				u && u.c(),
				(o = V()),
				c && c.c(),
				(f = ne()),
				this.h();
		},
		l(g) {
			e = y(g, 'DIV', { class: !0 });
			var E = K(e);
			h(l.$$.fragment, E),
				E.forEach(_),
				(t = P(g)),
				a && a.l(g),
				(n = P(g)),
				u && u.l(g),
				(o = P(g)),
				c && c.l(g),
				(f = ne()),
				this.h();
		},
		h() {
			z(e, 'class', 'w-full text-xs space-y-1 pl-1');
		},
		m(g, E) {
			v(g, e, E),
				p(l, e, null),
				v(g, t, E),
				a && a.m(g, E),
				v(g, n, E),
				u && u.m(g, E),
				v(g, o, E),
				c && c.m(g, E),
				v(g, f, E),
				(i = !0);
		},
		p(g, [E]) {
			const T = {};
			E & 1048612 && (T.$$scope = { dirty: E, ctx: g }),
				l.$set(T),
				E & 40 && (r = Object.keys(g[5]).length > 0 && !g[3]),
				r
					? a
						? (a.p(g, E), E & 40 && m(a, 1))
						: ((a = Mt(g)), a.c(), m(a, 1), a.m(n.parentNode, n))
					: a &&
						(ue(),
						$(a, 1, 1, () => {
							a = null;
						}),
						ce()),
				g[2].length === 0 && !g[3]
					? u
						? E & 12 && m(u, 1)
						: ((u = Ut(g)), u.c(), m(u, 1), u.m(o.parentNode, o))
					: u &&
						(ue(),
						$(u, 1, 1, () => {
							u = null;
						}),
						ce()),
				g[3]
					? c
						? E & 8 && m(c, 1)
						: ((c = Xt(g)), c.c(), m(c, 1), c.m(f.parentNode, f))
					: c &&
						(ue(),
						$(c, 1, 1, () => {
							c = null;
						}),
						ce());
		},
		i(g) {
			i || (m(l.$$.fragment, g), m(a), m(u), m(c), (i = !0));
		},
		o(g) {
			$(l.$$.fragment, g), $(a), $(u), $(c), (i = !1);
		},
		d(g) {
			g && (_(e), _(t), _(n), _(o), _(f)), d(l), a && a.d(g), u && u.d(g), c && c.d(g);
		}
	};
}
function xl(s) {
	const e = {};
	return (
		s.forEach((l) => {
			const t = l.path,
				r = l.context_preview;
			e[t] || (e[t] = []), e[t].push({ context_preview: r });
		}),
		e
	);
}
const Zt = (s) => `<span class="bg-[#f8a01e80] text-foreground/60">${s}</span>`;
function er(s, e, l) {
	let t, r, n, o;
	_e(s, it, (w) => l(6, (t = w))),
		_e(s, ft, (w) => l(7, (r = w))),
		_e(s, ht, (w) => l(8, (n = w))),
		_e(s, tt, (w) => l(9, (o = w)));
	let { query: f } = e,
		{ searchSettings: i } = e,
		{ results: a = [] } = e,
		{ loading: u = !1 } = e,
		c = {},
		g = {};
	function E(w) {
		l(4, (c[w] = !c[w]), c), l(4, c), l(5, g), l(2, a);
	}
	const T = (w) => {
			if (!t) return;
			const { results: I } = t.storage.searchAndReplace,
				k = I[w];
			if (!k) return;
			t.commands.setTextSelection(k);
			const { node: j } = t.view.domAtPos(t.state.selection.anchor);
			if (j instanceof HTMLElement) {
				const q = j.getBoundingClientRect(),
					re = q.top < 0,
					Z = q.bottom > window.innerHeight;
				if (re || Z) {
					const te = re ? 'auto' : 'smooth';
					j.scrollIntoView({ behavior: te, block: 'center' });
				}
			}
		},
		D = (w) => E(w),
		S = async (w, I) => {
			tt.set(''),
				r !== w && ye(w, !0),
				setTimeout(() => {
					n || ht.set(!0),
						t.commands.blur(),
						o !== f && tt.set(f),
						T(I),
						t.commands.setSearchResult(I);
				}, 300);
		};
	return (
		(s.$$set = (w) => {
			'query' in w && l(0, (f = w.query)),
				'searchSettings' in w && l(1, (i = w.searchSettings)),
				'results' in w && l(2, (a = w.results)),
				'loading' in w && l(3, (u = w.loading));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 4 && l(5, (g = xl(a))),
				s.$$.dirty & 48 &&
					Object.keys(g).forEach((w) => {
						c[w] === void 0 && l(4, (c[w] = !0), c);
					});
		}),
		[f, i, a, u, c, g, t, r, n, o, E, T, D, S]
	);
}
class tr extends je {
	constructor(e) {
		super(), Oe(this, e, er, yl, Pe, { query: 0, searchSettings: 1, results: 2, loading: 3 });
	}
}
function nr(s) {
	let e, l, t, r;
	return (
		(e = new Te({ props: { options: ee['notes:create'] } })),
		(t = new le({ props: { name: 'notePlus', class: 'w-[18px] h-[18px]' } })),
		{
			c() {
				b(e.$$.fragment), (l = V()), b(t.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n), (l = P(n)), h(t.$$.fragment, n);
			},
			m(n, o) {
				p(e, n, o), v(n, l, o), p(t, n, o), (r = !0);
			},
			p: ae,
			i(n) {
				r || (m(e.$$.fragment, n), m(t.$$.fragment, n), (r = !0));
			},
			o(n) {
				$(e.$$.fragment, n), $(t.$$.fragment, n), (r = !1);
			},
			d(n) {
				n && _(l), d(e, n), d(t, n);
			}
		}
	);
}
function lr(s) {
	let e, l;
	return (
		(e = new Be({
			props: {
				size: 'icon',
				variant: 'ghost',
				scale: 'md',
				class: 'h-7 w-7 fill-muted-foreground hover:fill-foreground transition-all',
				$$slots: { default: [nr] },
				$$scope: { ctx: s }
			}
		})),
		e.$on('click', s[16]),
		{
			c() {
				b(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, r) {
				p(e, t, r), (l = !0);
			},
			p(t, r) {
				const n = {};
				r[1] & 4 && (n.$$scope = { dirty: r, ctx: t }), e.$set(n);
			},
			i(t) {
				l || (m(e.$$.fragment, t), (l = !0));
			},
			o(t) {
				$(e.$$.fragment, t), (l = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function rr(s) {
	let e, l, t, r;
	return (
		(e = new Te({ props: { options: ee['notes:create-folder'] } })),
		(t = new le({ props: { name: 'folderPlus', class: 'w-[18px] h-[18px]' } })),
		{
			c() {
				b(e.$$.fragment), (l = V()), b(t.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n), (l = P(n)), h(t.$$.fragment, n);
			},
			m(n, o) {
				p(e, n, o), v(n, l, o), p(t, n, o), (r = !0);
			},
			p: ae,
			i(n) {
				r || (m(e.$$.fragment, n), m(t.$$.fragment, n), (r = !0));
			},
			o(n) {
				$(e.$$.fragment, n), $(t.$$.fragment, n), (r = !1);
			},
			d(n) {
				n && _(l), d(e, n), d(t, n);
			}
		}
	);
}
function sr(s) {
	let e, l;
	return (
		(e = new Be({
			props: {
				size: 'icon',
				variant: 'ghost',
				scale: 'md',
				class: 'h-7 w-7 fill-muted-foreground hover:fill-foreground transition-all',
				$$slots: { default: [rr] },
				$$scope: { ctx: s }
			}
		})),
		e.$on('click', s[17]),
		{
			c() {
				b(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, r) {
				p(e, t, r), (l = !0);
			},
			p(t, r) {
				const n = {};
				r[1] & 4 && (n.$$scope = { dirty: r, ctx: t }), e.$set(n);
			},
			i(t) {
				l || (m(e.$$.fragment, t), (l = !0));
			},
			o(t) {
				$(e.$$.fragment, t), (l = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function or(s) {
	let e, l, t, r;
	return (
		(e = new le({
			props: {
				name: 'collapseCircle',
				class: G('w-[18px] h-[18px] transition-all transform', s[7] === 'collapse' && 'hidden')
			}
		})),
		(t = new le({
			props: {
				name: 'expandCircle',
				class: G('w-[18px] h-[18px] transition-all transform', s[7] === 'expand' && 'hidden')
			}
		})),
		{
			c() {
				b(e.$$.fragment), (l = V()), b(t.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n), (l = P(n)), h(t.$$.fragment, n);
			},
			m(n, o) {
				p(e, n, o), v(n, l, o), p(t, n, o), (r = !0);
			},
			p(n, o) {
				const f = {};
				o[0] & 128 &&
					(f.class = G(
						'w-[18px] h-[18px] transition-all transform',
						n[7] === 'collapse' && 'hidden'
					)),
					e.$set(f);
				const i = {};
				o[0] & 128 &&
					(i.class = G(
						'w-[18px] h-[18px] transition-all transform',
						n[7] === 'expand' && 'hidden'
					)),
					t.$set(i);
			},
			i(n) {
				r || (m(e.$$.fragment, n), m(t.$$.fragment, n), (r = !0));
			},
			o(n) {
				$(e.$$.fragment, n), $(t.$$.fragment, n), (r = !1);
			},
			d(n) {
				n && _(l), d(e, n), d(t, n);
			}
		}
	);
}
function fr(s) {
	let e, l;
	return (
		(e = new Be({
			props: {
				size: 'icon',
				variant: 'ghost',
				scale: 'md',
				class: 'h-7 w-7 fill-muted-foreground hover:fill-foreground',
				$$slots: { default: [or] },
				$$scope: { ctx: s }
			}
		})),
		e.$on('click', s[18]),
		{
			c() {
				b(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, r) {
				p(e, t, r), (l = !0);
			},
			p(t, r) {
				const n = {};
				(r[0] & 128) | (r[1] & 4) && (n.$$scope = { dirty: r, ctx: t }), e.$set(n);
			},
			i(t) {
				l || (m(e.$$.fragment, t), (l = !0));
			},
			o(t) {
				$(e.$$.fragment, t), (l = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function ir(s) {
	let e, l, t, r;
	return (
		(e = new Te({ props: { options: ee['notes:search'] } })),
		(t = new le({ props: { name: 'searchBars', class: 'w-[18px] h-[18px]' } })),
		{
			c() {
				b(e.$$.fragment), (l = V()), b(t.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n), (l = P(n)), h(t.$$.fragment, n);
			},
			m(n, o) {
				p(e, n, o), v(n, l, o), p(t, n, o), (r = !0);
			},
			p: ae,
			i(n) {
				r || (m(e.$$.fragment, n), m(t.$$.fragment, n), (r = !0));
			},
			o(n) {
				$(e.$$.fragment, n), $(t.$$.fragment, n), (r = !1);
			},
			d(n) {
				n && _(l), d(e, n), d(t, n);
			}
		}
	);
}
function ar(s) {
	let e, l;
	return (
		(e = new Be({
			props: {
				size: 'icon',
				variant: 'ghost',
				scale: 'md',
				class: 'h-7 w-7 fill-muted-foreground hover:fill-foreground transition-all',
				$$slots: { default: [ir] },
				$$scope: { ctx: s }
			}
		})),
		e.$on('click', s[19]),
		{
			c() {
				b(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, r) {
				p(e, t, r), (l = !0);
			},
			p(t, r) {
				const n = {};
				r[1] & 4 && (n.$$scope = { dirty: r, ctx: t }), e.$set(n);
			},
			i(t) {
				l || (m(e.$$.fragment, t), (l = !0));
			},
			o(t) {
				$(e.$$.fragment, t), (l = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function ur(s) {
	let e, l;
	return (
		(e = new En({
			props: {
				class: G(
					'w-18px] h-[18px] stroke-muted-foreground group-hover:stroke-foreground transition-all stroke-[1.5px]',
					s[3] ? 'stroke-foreground' : ''
				)
			}
		})),
		{
			c() {
				b(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, r) {
				p(e, t, r), (l = !0);
			},
			p(t, r) {
				const n = {};
				r[0] & 8 &&
					(n.class = G(
						'w-18px] h-[18px] stroke-muted-foreground group-hover:stroke-foreground transition-all stroke-[1.5px]',
						t[3] ? 'stroke-foreground' : ''
					)),
					e.$set(n);
			},
			i(t) {
				l || (m(e.$$.fragment, t), (l = !0));
			},
			o(t) {
				$(e.$$.fragment, t), (l = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function cr(s) {
	let e, l;
	return (
		(e = new Be({
			props: {
				size: 'icon',
				variant: 'ghost',
				scale: 'md',
				class: 'h-7 w-6 shrink-0 group hover:bg-transparent',
				$$slots: { default: [ur] },
				$$scope: { ctx: s }
			}
		})),
		e.$on('click', s[22]),
		{
			c() {
				b(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, r) {
				p(e, t, r), (l = !0);
			},
			p(t, r) {
				const n = {};
				(r[0] & 8) | (r[1] & 4) && (n.$$scope = { dirty: r, ctx: t }), e.$set(n);
			},
			i(t) {
				l || (m(e.$$.fragment, t), (l = !0));
			},
			o(t) {
				$(e.$$.fragment, t), (l = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function mr(s) {
	let e, l;
	return (
		(e = new Tn({
			props: {
				class: G(
					'w-4 h-4 stroke-muted-foreground group-hover:stroke-foreground transition-all stroke-[1.5px]',
					s[4] ? 'stroke-foreground' : ''
				)
			}
		})),
		{
			c() {
				b(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, r) {
				p(e, t, r), (l = !0);
			},
			p(t, r) {
				const n = {};
				r[0] & 16 &&
					(n.class = G(
						'w-4 h-4 stroke-muted-foreground group-hover:stroke-foreground transition-all stroke-[1.5px]',
						t[4] ? 'stroke-foreground' : ''
					)),
					e.$set(n);
			},
			i(t) {
				l || (m(e.$$.fragment, t), (l = !0));
			},
			o(t) {
				$(e.$$.fragment, t), (l = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function $r(s) {
	let e, l;
	return (
		(e = new Be({
			props: {
				size: 'icon',
				variant: 'ghost',
				scale: 'md',
				class: 'h-7 w-6 shrink-0 group hover:bg-transparent',
				$$slots: { default: [mr] },
				$$scope: { ctx: s }
			}
		})),
		e.$on('click', s[23]),
		{
			c() {
				b(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, r) {
				p(e, t, r), (l = !0);
			},
			p(t, r) {
				const n = {};
				(r[0] & 16) | (r[1] & 4) && (n.$$scope = { dirty: r, ctx: t }), e.$set(n);
			},
			i(t) {
				l || (m(e.$$.fragment, t), (l = !0));
			},
			o(t) {
				$(e.$$.fragment, t), (l = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function gr(s) {
	let e, l;
	return (
		(e = new le({ props: { name: 'x', class: 'w-4 h-4' } })),
		{
			c() {
				b(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, r) {
				p(e, t, r), (l = !0);
			},
			p: ae,
			i(t) {
				l || (m(e.$$.fragment, t), (l = !0));
			},
			o(t) {
				$(e.$$.fragment, t), (l = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function _r(s) {
	let e, l;
	return (
		(e = new Be({
			props: {
				size: 'icon',
				variant: 'ghost',
				scale: 'md',
				class:
					'h-7 w-6 group shrink-0 transition-all hover:bg-transparent fill-muted-foreground hover:fill-foreground ',
				$$slots: { default: [gr] },
				$$scope: { ctx: s }
			}
		})),
		e.$on('click', s[24]),
		{
			c() {
				b(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, r) {
				p(e, t, r), (l = !0);
			},
			p(t, r) {
				const n = {};
				r[1] & 4 && (n.$$scope = { dirty: r, ctx: t }), e.$set(n);
			},
			i(t) {
				l || (m(e.$$.fragment, t), (l = !0));
			},
			o(t) {
				$(e.$$.fragment, t), (l = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function dr(s) {
	let e,
		l,
		t,
		r,
		n,
		o = s[6].length === 0 && Gt(s);
	function f(u) {
		s[25](u);
	}
	function i(u) {
		s[26](u);
	}
	let a = { entries: s[6] };
	return (
		s[8] !== void 0 && (a.toggleFolderStates = s[8]),
		s[7] !== void 0 && (a.toggleState = s[7]),
		(l = new an({ props: a })),
		Le.push(() => rt(l, 'toggleFolderStates', f)),
		Le.push(() => rt(l, 'toggleState', i)),
		{
			c() {
				o && o.c(), (e = V()), b(l.$$.fragment);
			},
			l(u) {
				o && o.l(u), (e = P(u)), h(l.$$.fragment, u);
			},
			m(u, c) {
				o && o.m(u, c), v(u, e, c), p(l, u, c), (n = !0);
			},
			p(u, c) {
				u[6].length === 0
					? o
						? c[0] & 64 && m(o, 1)
						: ((o = Gt(u)), o.c(), m(o, 1), o.m(e.parentNode, e))
					: o &&
						(ue(),
						$(o, 1, 1, () => {
							o = null;
						}),
						ce());
				const g = {};
				c[0] & 64 && (g.entries = u[6]),
					!t && c[0] & 256 && ((t = !0), (g.toggleFolderStates = u[8]), lt(() => (t = !1))),
					!r && c[0] & 128 && ((r = !0), (g.toggleState = u[7]), lt(() => (r = !1))),
					l.$set(g);
			},
			i(u) {
				n || (m(o), m(l.$$.fragment, u), (n = !0));
			},
			o(u) {
				$(o), $(l.$$.fragment, u), (n = !1);
			},
			d(u) {
				u && _(e), o && o.d(u), d(l, u);
			}
		}
	);
}
function pr(s) {
	let e, l;
	return (
		(e = new tr({
			props: {
				results: s[5],
				query: s[0],
				searchSettings: { caseSensitive: s[3], wholeWord: s[4] },
				loading: s[2]
			}
		})),
		{
			c() {
				b(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, r) {
				p(e, t, r), (l = !0);
			},
			p(t, r) {
				const n = {};
				r[0] & 32 && (n.results = t[5]),
					r[0] & 1 && (n.query = t[0]),
					r[0] & 24 && (n.searchSettings = { caseSensitive: t[3], wholeWord: t[4] }),
					r[0] & 4 && (n.loading = t[2]),
					e.$set(n);
			},
			i(t) {
				l || (m(e.$$.fragment, t), (l = !0));
			},
			o(t) {
				$(e.$$.fragment, t), (l = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function Gt(s) {
	let e, l, t;
	return (
		(l = new et({
			props: {
				class: 'text-muted-foreground text-xs text-center',
				$$slots: { default: [hr] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = x('div')), b(l.$$.fragment), this.h();
			},
			l(r) {
				e = y(r, 'DIV', { class: !0 });
				var n = K(e);
				h(l.$$.fragment, n), n.forEach(_), this.h();
			},
			h() {
				z(e, 'class', 'w-full h-full flex flex-col gap-1 items-center justify-center');
			},
			m(r, n) {
				v(r, e, n), p(l, e, null), (t = !0);
			},
			i(r) {
				t || (m(l.$$.fragment, r), (t = !0));
			},
			o(r) {
				$(l.$$.fragment, r), (t = !1);
			},
			d(r) {
				r && _(e), d(l);
			}
		}
	);
}
function hr(s) {
	let e;
	return {
		c() {
			e = U('No notes found');
		},
		l(l) {
			e = H(l, 'No notes found');
		},
		m(l, t) {
			v(l, e, t);
		},
		d(l) {
			l && _(e);
		}
	};
}
function br(s) {
	let e,
		l,
		t,
		r,
		n,
		o,
		f,
		i,
		a,
		u,
		c,
		g,
		E,
		T,
		D,
		S,
		w,
		I,
		k,
		j,
		q,
		re,
		Z,
		te,
		ie,
		A,
		O,
		Q,
		J,
		$e,
		se,
		pe,
		be;
	(o = new qe({
		props: {
			text: 'New note',
			side: 'bottom',
			shortcut: ee['notes:create'],
			$$slots: { default: [lr] },
			$$scope: { ctx: s }
		}
	})),
		(i = new qe({
			props: {
				text: 'New folder',
				side: 'bottom',
				shortcut: ee['notes:create-folder'],
				$$slots: { default: [sr] },
				$$scope: { ctx: s }
			}
		})),
		(u = new qe({
			props: {
				text: s[7] === 'collapse' ? 'Collapse folders' : 'Expand folders',
				side: 'bottom',
				$$slots: { default: [fr] },
				$$scope: { ctx: s }
			}
		})),
		(g = new qe({
			props: {
				text: 'Search',
				side: 'bottom',
				shortcut: ee['notes:search'],
				$$slots: { default: [ar] },
				$$scope: { ctx: s }
			}
		})),
		(k = new qe({
			props: {
				text: 'Case sensitive',
				side: 'bottom',
				$$slots: { default: [cr] },
				$$scope: { ctx: s }
			}
		})),
		(q = new qe({
			props: { text: 'Whole word', side: 'bottom', $$slots: { default: [$r] }, $$scope: { ctx: s } }
		})),
		(Z = new qe({
			props: {
				text: 'Close',
				side: 'bottom',
				shortcut: ee['notes:search'],
				$$slots: { default: [_r] },
				$$scope: { ctx: s }
			}
		}));
	const We = [pr, dr],
		ge = [];
	function R(L, F) {
		return L[12] ? 0 : 1;
	}
	return (
		(O = R(s)),
		(Q = ge[O] = We[O](s)),
		{
			c() {
				(e = x('div')),
					(l = x('div')),
					(t = V()),
					(r = x('div')),
					(n = x('div')),
					b(o.$$.fragment),
					(f = V()),
					b(i.$$.fragment),
					(a = V()),
					b(u.$$.fragment),
					(c = V()),
					b(g.$$.fragment),
					(T = V()),
					(D = x('div')),
					(S = x('div')),
					(w = x('input')),
					(I = V()),
					b(k.$$.fragment),
					(j = V()),
					b(q.$$.fragment),
					(re = V()),
					b(Z.$$.fragment),
					(ie = V()),
					(A = x('div')),
					Q.c(),
					this.h();
			},
			l(L) {
				e = y(L, 'DIV', { class: !0, style: !0 });
				var F = K(e);
				(l = y(F, 'DIV', { class: !0, role: !0 })),
					K(l).forEach(_),
					(t = P(F)),
					(r = y(F, 'DIV', { class: !0 }));
				var ve = K(r);
				n = y(ve, 'DIV', { class: !0 });
				var me = K(n);
				h(o.$$.fragment, me),
					(f = P(me)),
					h(i.$$.fragment, me),
					(a = P(me)),
					h(u.$$.fragment, me),
					(c = P(me)),
					h(g.$$.fragment, me),
					me.forEach(_),
					(T = P(ve)),
					(D = y(ve, 'DIV', { class: !0 }));
				var N = K(D);
				S = y(N, 'DIV', { class: !0 });
				var de = K(S);
				(w = y(de, 'INPUT', {
					id: !0,
					class: !0,
					type: !0,
					placeholder: !0,
					autocomplete: !0,
					autocorrect: !0
				})),
					(I = P(de)),
					h(k.$$.fragment, de),
					(j = P(de)),
					h(q.$$.fragment, de),
					(re = P(de)),
					h(Z.$$.fragment, de),
					de.forEach(_),
					N.forEach(_),
					ve.forEach(_),
					(ie = P(F)),
					(A = y(F, 'DIV', { class: !0, 'data-collection-root': !0, 'data-path': !0 }));
				var C = K(A);
				Q.l(C), C.forEach(_), F.forEach(_), this.h();
			},
			h() {
				z(
					l,
					'class',
					'h-full w-1 border-r cursor-col-resize absolute top-0 right-0 z-10 hover:bg-foreground/10 hover:delay-75 transition-all duration-200 active:bg-foreground/20 active:!cursor-col-resize'
				),
					z(l, 'role', 'presentation'),
					z(
						n,
						'class',
						(E = G(
							'flex flex-row items-center justify-center w-full h-full px-3.5 gap-2 shrink-0 transform transition-all translate-y-0',
							s[12] && '-translate-y-12'
						))
					),
					z(w, 'id', 'notesSearch'),
					z(
						w,
						'class',
						'w-full bg-transparent outline-none placeholder:text-muted-foreground h-[30px] text-[13px]'
					),
					z(w, 'type', 'text'),
					z(w, 'placeholder', 'Search'),
					z(w, 'autocomplete', 'off'),
					z(w, 'autocorrect', 'off'),
					z(
						S,
						'class',
						'rounded-md w-full flex items-center justify-start bg-background pl-2 pr-1 gap-0.5 border focus-within:ring-1 focus-within:ring-ring transition-all'
					),
					z(
						D,
						'class',
						(te = G(
							'absolute pb-[0.5px] flex flex-row items-center justify-center w-full h-full px-[5px] gap-1 shrink-0 transform transition-all translate-y-12',
							s[12] && 'translate-y-0'
						))
					),
					z(
						r,
						'class',
						'relative top-0 flex flex-col min-h-10 w-full border-b bg-background overflow-hidden'
					),
					z(
						A,
						'class',
						'flex flex-col items-start gap-1 w-full px-2 h-full overflow-auto pt-2 pb-4'
					),
					z(A, 'data-collection-root', ''),
					z(A, 'data-path', s[11]),
					z(
						e,
						'class',
						(J = G(
							'fixed left-12 h-[calc(100vh-4.5rem)] flex flex-col justify-start items-center bg-background overflow-y-auto transform transition-transform duration-300',
							!s[10] && '-translate-x-52'
						))
					),
					z(e, 'style', ($e = `width: ${s[9]}px`));
			},
			m(L, F) {
				v(L, e, F),
					Y(e, l),
					Y(e, t),
					Y(e, r),
					Y(r, n),
					p(o, n, null),
					Y(n, f),
					p(i, n, null),
					Y(n, a),
					p(u, n, null),
					Y(n, c),
					p(g, n, null),
					Y(r, T),
					Y(r, D),
					Y(D, S),
					Y(S, w),
					mt(w, s[0]),
					Y(S, I),
					p(k, S, null),
					Y(S, j),
					p(q, S, null),
					Y(S, re),
					p(Z, S, null),
					Y(e, ie),
					Y(e, A),
					ge[O].m(A, null),
					(se = !0),
					pe ||
						((be = [X(l, 'mousedown', s[13]), X(w, 'input', s[20]), X(w, 'keydown', s[21])]),
						(pe = !0));
			},
			p(L, F) {
				const ve = {};
				(F[0] & 2048) | (F[1] & 4) && (ve.$$scope = { dirty: F, ctx: L }), o.$set(ve);
				const me = {};
				(F[0] & 2048) | (F[1] & 4) && (me.$$scope = { dirty: F, ctx: L }), i.$set(me);
				const N = {};
				F[0] & 128 && (N.text = L[7] === 'collapse' ? 'Collapse folders' : 'Expand folders'),
					(F[0] & 384) | (F[1] & 4) && (N.$$scope = { dirty: F, ctx: L }),
					u.$set(N);
				const de = {};
				(F[0] & 4096) | (F[1] & 4) && (de.$$scope = { dirty: F, ctx: L }),
					g.$set(de),
					(!se ||
						(F[0] & 4096 &&
							E !==
								(E = G(
									'flex flex-row items-center justify-center w-full h-full px-3.5 gap-2 shrink-0 transform transition-all translate-y-0',
									L[12] && '-translate-y-12'
								)))) &&
						z(n, 'class', E),
					F[0] & 1 && w.value !== L[0] && mt(w, L[0]);
				const C = {};
				(F[0] & 8) | (F[1] & 4) && (C.$$scope = { dirty: F, ctx: L }), k.$set(C);
				const W = {};
				(F[0] & 16) | (F[1] & 4) && (W.$$scope = { dirty: F, ctx: L }), q.$set(W);
				const M = {};
				F[1] & 4 && (M.$$scope = { dirty: F, ctx: L }),
					Z.$set(M),
					(!se ||
						(F[0] & 4096 &&
							te !==
								(te = G(
									'absolute pb-[0.5px] flex flex-row items-center justify-center w-full h-full px-[5px] gap-1 shrink-0 transform transition-all translate-y-12',
									L[12] && 'translate-y-0'
								)))) &&
						z(D, 'class', te);
				let B = O;
				(O = R(L)),
					O === B
						? ge[O].p(L, F)
						: (ue(),
							$(ge[B], 1, 1, () => {
								ge[B] = null;
							}),
							ce(),
							(Q = ge[O]),
							Q ? Q.p(L, F) : ((Q = ge[O] = We[O](L)), Q.c()),
							m(Q, 1),
							Q.m(A, null)),
					(!se || F[0] & 2048) && z(A, 'data-path', L[11]),
					(!se ||
						(F[0] & 1024 &&
							J !==
								(J = G(
									'fixed left-12 h-[calc(100vh-4.5rem)] flex flex-col justify-start items-center bg-background overflow-y-auto transform transition-transform duration-300',
									!L[10] && '-translate-x-52'
								)))) &&
						z(e, 'class', J),
					(!se || (F[0] & 512 && $e !== ($e = `width: ${L[9]}px`))) && z(e, 'style', $e);
			},
			i(L) {
				se ||
					(m(o.$$.fragment, L),
					m(i.$$.fragment, L),
					m(u.$$.fragment, L),
					m(g.$$.fragment, L),
					m(k.$$.fragment, L),
					m(q.$$.fragment, L),
					m(Z.$$.fragment, L),
					m(Q),
					(se = !0));
			},
			o(L) {
				$(o.$$.fragment, L),
					$(i.$$.fragment, L),
					$(u.$$.fragment, L),
					$(g.$$.fragment, L),
					$(k.$$.fragment, L),
					$(q.$$.fragment, L),
					$(Z.$$.fragment, L),
					$(Q),
					(se = !1);
			},
			d(L) {
				L && _(e), d(o), d(i), d(u), d(g), d(k), d(q), d(Z), ge[O].d(), (pe = !1), Ve(be);
			}
		}
	);
}
function vr(s, e, l) {
	let t, r, n, o, f;
	_e(s, it, (R) => l(28, (t = R))),
		_e(s, bt, (R) => l(9, (r = R))),
		_e(s, nt, (R) => l(10, (n = R))),
		_e(s, Ye, (R) => l(11, (o = R))),
		_e(s, Qe, (R) => l(12, (f = R)));
	let i,
		a,
		u = !1,
		c = !1,
		g = !1,
		E = [],
		T = [],
		D,
		S,
		w;
	async function I() {
		return (
			await pn.live.query('SELECT * FROM entry', [], async () => {
				await gt(o);
			})
		).unsubscribe;
	}
	const k = dn.subscribe((R) => {
			l(6, (T = R));
		}),
		j = Ye.subscribe(async (R) => {
			l(6, (T = await gt(R)));
			const L = T.find((F) => !F.children);
			L ? ye(L.path) : ft.set(null), R && (w && w(), (w = await I()));
		});
	Qe.subscribe((R) => {
		if (R) {
			const L = document.querySelector('#notesSearch');
			L &&
				setTimeout(() => {
					L.focus();
				}, 250);
		}
	});
	const q = (R) => {
			Ue.set(!0);
			const L = R.x;
			if (L < 100) {
				Ue.set(!1), nt.set(!1);
				return;
			} else if (L > 100 && !n) {
				Ue.set(!1), nt.set(!0);
				return;
			}
			r + R.movementX < 210 ||
				r + R.movementX > 500 ||
				L < 245 ||
				L > 550 ||
				bt.update((F) => F + R.movementX);
		},
		re = () => {
			Ue.set(!0), t.commands.blur(), document.body.classList.toggle('cursor-col-resize');
			const R = () => {
				document.removeEventListener('mousemove', q),
					document.removeEventListener('mouseup', R),
					document.body.classList.remove('cursor-col-resize'),
					Ue.set(!1);
			};
			document.addEventListener('mousemove', q), document.addEventListener('mouseup', R);
		};
	async function Z() {
		if (!i) {
			l(5, (E = []));
			return;
		}
		l(2, (u = !0));
		try {
			l(5, (E = await hn(Jt(Ye), i, c, g))), l(2, (u = !1));
		} catch (R) {
			console.error('Error searching files:', R);
		}
	}
	function te() {
		Qe.set(!1), l(0, (i = '')), l(3, (c = !1)), l(4, (g = !1)), l(5, (E = []));
	}
	mn(() => {
		w && w(), k(), j();
	});
	const ie = async () => st(o),
		A = async () => Xe(o),
		O = async () => {
			S();
		},
		Q = () => {
			Qe.set(!f);
		};
	function J() {
		(i = this.value), l(0, i);
	}
	const $e = (R) => {
			clearTimeout(a),
				l(
					1,
					(a = setTimeout(() => {
						Z();
					}, 500))
				),
				R.key === 'Enter' && (clearTimeout(a), Z()),
				R.key === 'Escape' && te();
		},
		se = () => {
			l(3, (c = !c)), Z();
		},
		pe = () => {
			l(4, (g = !g)), Z();
		},
		be = () => {
			te();
		};
	function We(R) {
		(S = R), l(8, S);
	}
	function ge(R) {
		(D = R), l(7, D);
	}
	return [i, a, u, c, g, E, T, D, S, r, n, o, f, re, Z, te, ie, A, O, Q, J, $e, se, pe, be, We, ge];
}
class kr extends je {
	constructor(e) {
		super(), Oe(this, e, vr, br, Pe, {}, null, [-1, -1]);
	}
}
function wr(s) {
	let e;
	const l = s[0].default,
		t = we(l, s, s[1], null);
	return {
		c() {
			t && t.c();
		},
		l(r) {
			t && t.l(r);
		},
		m(r, n) {
			t && t.m(r, n), (e = !0);
		},
		p(r, n) {
			t && t.p && (!e || n & 2) && Ce(t, l, r, r[1], e ? Ee(l, r[1], n, null) : Se(r[1]), null);
		},
		i(r) {
			e || (m(t, r), (e = !0));
		},
		o(r) {
			$(t, r), (e = !1);
		},
		d(r) {
			t && t.d(r);
		}
	};
}
function Cr(s) {
	let e, l, t;
	return (
		(l = new Nn({ props: { sidebar: kr, $$slots: { default: [wr] }, $$scope: { ctx: s } } })),
		{
			c() {
				(e = V()), b(l.$$.fragment), this.h();
			},
			l(r) {
				$n('svelte-t73bny', document.head).forEach(_), (e = P(r)), h(l.$$.fragment, r), this.h();
			},
			h() {
				document.title = 'Typyst | Notes';
			},
			m(r, n) {
				v(r, e, n), p(l, r, n), (t = !0);
			},
			p(r, [n]) {
				const o = {};
				n & 2 && (o.$$scope = { dirty: n, ctx: r }), l.$set(o);
			},
			i(r) {
				t || (m(l.$$.fragment, r), (t = !0));
			},
			o(r) {
				$(l.$$.fragment, r), (t = !1);
			},
			d(r) {
				r && _(e), d(l, r);
			}
		}
	);
}
function Sr(s, e, l) {
	let { $$slots: t = {}, $$scope: r } = e;
	return (
		(s.$$set = (n) => {
			'$$scope' in n && l(1, (r = n.$$scope));
		}),
		[t, r]
	);
}
class Ir extends je {
	constructor(e) {
		super(), Oe(this, e, Sr, Cr, Pe, {});
	}
}
export { Ir as component };
