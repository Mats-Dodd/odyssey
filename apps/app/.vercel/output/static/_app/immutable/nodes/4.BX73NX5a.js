import {
	s as je,
	d as _,
	i as v,
	C as ne,
	G as Ne,
	k as _e,
	D as fe,
	H as Ge,
	l as we,
	u as Ce,
	m as Se,
	o as Ee,
	v as Le,
	$ as ot,
	E as he,
	N as He,
	w as X,
	c as y,
	e as Y,
	h as x,
	y as Ve,
	n as ae,
	q as z,
	S as at,
	b as Q,
	T as ut,
	U as ct,
	I as Ae,
	g as j,
	j as L,
	R as Ze,
	p as Jt,
	z as lt,
	a as Me,
	f as H,
	t as U,
	V as un,
	W as cn,
	F as mt,
	M as mn,
	x as $n
} from '../chunks/CZvU1ekx.js';
import {
	S as Pe,
	i as Oe,
	t as $,
	a as m,
	g as ue,
	e as ce,
	h as $t,
	j as Yt,
	k as Kt,
	d,
	m as p,
	c as h,
	b,
	f as rt
} from '../chunks/ZuwjM_kn.js';
import { f as gt } from '../chunks/9GWM-mdJ.js';
import { d as _t, m as Je, r as gn, c as Xe } from '../chunks/BvlBTpYA.js';
import {
	n as De,
	c as Qe,
	i as ft,
	f as st,
	V as dt,
	W as pt,
	G as ye,
	m as Ye,
	S as ee,
	I as le,
	s as ze,
	q as it,
	E as ht,
	F as tt,
	o as qe,
	B as bt,
	A as nt,
	X as Ke,
	Y as _n,
	Z as dn,
	D as Ue,
	J as pn
} from '../chunks/Dz2apFQ9.js';
import { S as Te } from '../chunks/CBpdtyLw.js';
import { g as Fe, c as Z, a as Qt, h as hn, B as Be } from '../chunks/CTLOy2q2.js';
import { L as et } from '../chunks/oMhdKTtd.js';
import { R as yt, C as xt, T as en } from '../chunks/3VOIDKNN.js';
import {
	g as bn,
	u as vn,
	a as kn,
	C as tn,
	T as nn,
	b as ln,
	c as ke,
	d as xe,
	S as rn,
	e as Re
} from '../chunks/9rGvw2Py.js';
import { a as sn, e as wn } from '../chunks/Wn8UfayS.js';
import { M as vt } from '../chunks/BMSQkwth.js';
import { L as Cn, C as Sn } from '../chunks/D0VC51h9.js';
import { A as En, W as Tn } from '../chunks/NZn2UU_-.js';
import { L as Nn } from '../chunks/DpleEbxu.js';
const Dn = (s) => ({ builder: s[0] & 256 }),
	kt = (s) => ({ builder: s[8] }),
	An = (s) => ({ builder: s[0] & 256 }),
	wt = (s) => ({ builder: s[8] }),
	Vn = (s) => ({ builder: s[0] & 256 }),
	Ct = (s) => ({ builder: s[8] }),
	jn = (s) => ({ builder: s[0] & 256 }),
	St = (s) => ({ builder: s[8] }),
	Ln = (s) => ({ builder: s[0] & 256 }),
	Et = (s) => ({ builder: s[8] }),
	Pn = (s) => ({ builder: s[0] & 256 }),
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
			var u = Y(e);
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
			a && _(e), o && o.d(a), s[33](null), (t = !1), Le(r);
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
			var c = Y(e);
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
			$(f, u), u && (l = Yt(e, s[5], s[6])), (t = !1);
		},
		d(u) {
			u && _(e), f && f.d(u), s[32](null), u && l && l.end(), (r = !1), Le(n);
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
			var c = Y(e);
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
					Ce(f, o, s, s[27], t ? Ee(o, s[27], c, Vn) : Se(s[27]), Ct),
				he(e, (a = Fe(i, [c[0] & 256 && s[8], c[0] & 8192 && s[13]])));
		},
		i(u) {
			t ||
				(m(f, u),
				u &&
					(l ||
						ot(() => {
							(l = Kt(e, s[3], s[4])), l.start();
						})),
				(t = !0));
		},
		o(u) {
			$(f, u), (t = !1);
		},
		d(u) {
			u && _(e), f && f.d(u), s[31](null), (r = !1), Le(n);
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
			var g = Y(e);
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
					Ce(i, f, s, s[27], r ? Ee(f, s[27], g, jn) : Se(s[27]), St),
				he(e, (u = Fe(a, [g[0] & 256 && s[8], g[0] & 8192 && s[13]])));
		},
		i(c) {
			r ||
				(m(i, c),
				c &&
					ot(() => {
						r && (t && t.end(1), (l = Kt(e, s[3], s[4])), l.start());
					}),
				(r = !0));
		},
		o(c) {
			$(i, c), l && l.invalidate(), c && (t = Yt(e, s[5], s[6])), (r = !1);
		},
		d(c) {
			c && _(e), i && i.d(c), s[30](null), c && t && t.end(), (n = !1), Le(o);
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
			var c = Y(e);
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
					Ce(f, o, s, s[27], t ? Ee(o, s[27], c, Ln) : Se(s[27]), Et),
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
			u && _(e), f && f.d(u), s[29](null), u && l && l.end(), (r = !1), Le(n);
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
				Ce(t, l, r, r[27], e ? Ee(l, r[27], n, Pn) : Se(r[27]), Tt);
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
		{ sideOffset: P = 0 } = e,
		{ alignOffset: q = 0 } = e,
		{ collisionPadding: re = 8 } = e,
		{ avoidCollisions: G = !0 } = e,
		{ collisionBoundary: te = void 0 } = e,
		{ sameWidth: ie = !1 } = e,
		{ fitViewport: A = !1 } = e,
		{ strategy: O = 'absolute' } = e,
		{ overlap: K = !1 } = e,
		{ el: J = void 0 } = e;
	const {
		elements: { subMenu: $e },
		states: { subOpen: se },
		ids: pe,
		getAttrs: be
	} = bn();
	_e(s, $e, (N) => l(26, (o = N))), _e(s, se, (N) => l(9, (f = N)));
	const We = sn(),
		ge = be('sub-content');
	function R(N) {
		Ve[N ? 'unshift' : 'push'](() => {
			(J = N), l(0, J);
		});
	}
	function V(N) {
		Ve[N ? 'unshift' : 'push'](() => {
			(J = N), l(0, J);
		});
	}
	function F(N) {
		Ve[N ? 'unshift' : 'push'](() => {
			(J = N), l(0, J);
		});
	}
	function ve(N) {
		Ve[N ? 'unshift' : 'push'](() => {
			(J = N), l(0, J);
		});
	}
	function me(N) {
		Ve[N ? 'unshift' : 'push'](() => {
			(J = N), l(0, J);
		});
	}
	return (
		(s.$$set = (N) => {
			(e = fe(fe({}, e), Ge(N))),
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
				'sideOffset' in N && l(17, (P = N.sideOffset)),
				'alignOffset' in N && l(18, (q = N.alignOffset)),
				'collisionPadding' in N && l(19, (re = N.collisionPadding)),
				'avoidCollisions' in N && l(20, (G = N.avoidCollisions)),
				'collisionBoundary' in N && l(21, (te = N.collisionBoundary)),
				'sameWidth' in N && l(22, (ie = N.sameWidth)),
				'fitViewport' in N && l(23, (A = N.fitViewport)),
				'strategy' in N && l(24, (O = N.strategy)),
				'overlap' in N && l(25, (K = N.overlap)),
				'el' in N && l(0, (J = N.el)),
				'$$scope' in N && l(27, (a = N.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty[0] & 16384 && w && pe.menu.set(w),
				s.$$.dirty[0] & 67108864 && l(8, (t = o)),
				s.$$.dirty[0] & 256 && Object.assign(t, ge),
				s.$$.dirty[0] & 67076096 &&
					vn({
						side: I,
						align: k,
						sideOffset: P,
						alignOffset: q,
						collisionPadding: re,
						avoidCollisions: G,
						collisionBoundary: te,
						sameWidth: ie,
						fitViewport: A,
						strategy: O,
						overlap: K
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
			P,
			q,
			re,
			G,
			te,
			ie,
			A,
			O,
			K,
			o,
			a,
			i,
			R,
			V,
			F,
			ve,
			me
		]
	);
}
class qn extends Pe {
	constructor(e) {
		super(),
			Oe(
				this,
				e,
				Mn,
				In,
				je,
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
			var u = Y(e);
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
			a && _(e), o && o.d(a), s[12](null), (t = !1), Le(r);
		}
	};
}
function Gn(s) {
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
function Zn(s) {
	let e, l, t, r;
	const n = [Gn, Xn],
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
	} = kn();
	_e(s, T, (k) => l(9, (f = k)));
	const w = sn();
	function I(k) {
		Ve[k ? 'unshift' : 'push'](() => {
			(E = k), l(0, E);
		});
	}
	return (
		(s.$$set = (k) => {
			(e = fe(fe({}, e), Ge(k))),
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
				s.$$.dirty & 64 && l(8, (r = { ...S('sub-trigger'), ...wn(u) })),
				s.$$.dirty & 260 && Object.assign(t, r);
		}),
		[E, c, t, T, w, o, u, g, r, f, a, i, I]
	);
}
class Yn extends Pe {
	constructor(e) {
		super(), Oe(this, e, Jn, Zn, je, { disabled: 6, asChild: 1, id: 7, el: 0 });
	}
}
function Kn(s) {
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
			var o = Y(e);
			(l = ut(o, 'path', { 'fill-rule': !0, 'clip-rule': !0, d: !0, fill: !0 })),
				Y(l).forEach(_),
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
			v(n, e, o), Q(e, l);
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
function Qn(s, e, l) {
	const t = ['color', 'size'];
	let r = Ne(e, t),
		{ color: n = 'currentColor' } = e,
		{ size: o = 15 } = e;
	return (
		(s.$$set = (f) => {
			(e = fe(fe({}, e), Ge(f))),
				l(2, (r = Ne(e, t))),
				'color' in f && l(0, (n = f.color)),
				'size' in f && l(1, (o = f.size));
		}),
		[n, o, r]
	);
}
class yn extends Pe {
	constructor(e) {
		super(), Oe(this, e, Qn, Kn, je, { color: 0, size: 1 });
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
			class: Z(
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
									class: Z(
										'z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-lg focus:outline-none',
										n[0]
									)
								},
								o & 8 && Qt(n[3])
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
		{ transition: i = hn } = e,
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
			(e = fe(fe({}, e), Ge(E))),
				l(3, (r = Ne(e, t))),
				'class' in E && l(0, (f = E.class)),
				'transition' in E && l(1, (i = E.transition)),
				'transitionConfig' in E && l(2, (a = E.transitionConfig)),
				'$$scope' in E && l(8, (o = E.$$scope));
		}),
		[f, i, a, r, n, u, c, g, o]
	);
}
class on extends Pe {
	constructor(e) {
		super(), Oe(this, e, tl, el, je, { class: 0, transition: 1, transitionConfig: 2 });
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
				n && n.c(), (e = L()), b(l.$$.fragment);
			},
			l(o) {
				n && n.l(o), (e = j(o)), h(l.$$.fragment, o);
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
			class: Z(
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
		(e = new Yn({ props: r })),
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
									class: Z(
										'flex cursor-pointer h-7 text-foreground select-none items-center rounded-sm px-2 py-1.5 text-xs outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
										n[1] && 'pl-8',
										n[0]
									)
								},
								o & 4 && Qt(n[2])
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
			(e = fe(fe({}, e), Ge(D))),
				l(2, (r = Ne(e, t))),
				'class' in D && l(0, (f = D.class)),
				'inset' in D && l(1, (i = D.inset)),
				'$$scope' in D && l(10, (o = D.$$scope));
		}),
		[f, i, r, n, a, u, c, g, E, T, o]
	);
}
class fn extends Pe {
	constructor(e) {
		super(), Oe(this, e, rl, ll, je, { class: 0, inset: 1 });
	}
}
function At(s, e, l) {
	const t = s.slice();
	return (t[40] = e[l]), (t[41] = e), (t[42] = l), t;
}
function Vt(s, e, l) {
	const t = s.slice();
	return (t[43] = e[l]), t;
}
function jt(s, e, l) {
	const t = s.slice();
	return (t[43] = e[l]), t;
}
function sl(s) {
	let e, l;
	return (
		(e = new tn({ props: { $$slots: { default: [wl] }, $$scope: { ctx: s } } })),
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
		(e = new yt({ props: n })),
		Ve.push(() => rt(e, 'open', r)),
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
					(l = L()),
					b(t.$$.fragment),
					(r = L()),
					b(n.$$.fragment),
					(o = L()),
					(f = x('span')),
					(a = U(i)),
					this.h();
			},
			l(T) {
				h(e.$$.fragment, T),
					(l = j(T)),
					h(t.$$.fragment, T),
					(r = j(T)),
					h(n.$$.fragment, T),
					(o = j(T)),
					(f = y(T, 'SPAN', { class: !0, autocorrect: !0, spellcheck: !0 }));
				var D = Y(f);
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
					Q(f, a),
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
			class: Z(
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
			var u = Y(e);
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
				(c.class = Z(
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
			a && _(e), d(l), (r = !1), Le(n);
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
function Lt(s) {
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
				b(e.$$.fragment), (l = L()), (r = U(t));
			},
			l(o) {
				h(e.$$.fragment, o), (l = j(o)), (r = H(o, t));
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
function Pt(s) {
	let e,
		l,
		t = s[43].name !== s[40].name && Lt(s);
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
					: ((t = Lt(r)), t.c(), m(t, 1), t.m(e.parentNode, e))
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
	for (let a = 0; a < n.length; a += 1) o[a] = Pt(Vt(s, n, a));
	const f = (a) =>
		$(o[a], 1, 1, () => {
			o[a] = null;
		});
	let i = l && Ot(s);
	return {
		c() {
			for (let a = 0; a < o.length; a += 1) o[a].c();
			(e = L()), i && i.c(), (t = ne());
		},
		l(a) {
			for (let u = 0; u < o.length; u += 1) o[u].l(a);
			(e = j(a)), i && i.l(a), (t = ne());
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
					const g = Vt(a, n, c);
					o[c]
						? (o[c].p(g, u), m(o[c], 1))
						: ((o[c] = Pt(g)), o[c].c(), m(o[c], 1), o[c].m(e.parentNode, e));
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
			a && (_(e), _(t)), Ze(o, a), i && i.d(a);
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
				b(e.$$.fragment), (l = L()), b(t.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n), (l = j(n)), h(t.$$.fragment, n);
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
		(f = new rn({ props: { $$slots: { default: [hl] }, $$scope: { ctx: s } } })),
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
					(l = L()),
					b(t.$$.fragment),
					(r = L()),
					b(n.$$.fragment),
					(o = L()),
					b(f.$$.fragment),
					(i = L()),
					b(a.$$.fragment),
					(u = L()),
					b(c.$$.fragment);
			},
			l(S) {
				h(e.$$.fragment, S),
					(l = j(S)),
					h(t.$$.fragment, S),
					(r = j(S)),
					h(n.$$.fragment, S),
					(o = j(S)),
					h(f.$$.fragment, S),
					(i = j(S)),
					h(a.$$.fragment, S),
					(u = j(S)),
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
				const P = {};
				(w[0] & 1) | (w[1] & 262144) && (P.$$scope = { dirty: w, ctx: s }), f.$set(P);
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
		(e = new nn({
			props: {
				class: 'w-full',
				'data-file-path': s[40].path,
				$$slots: { default: [il] },
				$$scope: { ctx: s }
			}
		})),
		(t = new ln({ props: { class: 'w-44', $$slots: { default: [kl] }, $$scope: { ctx: s } } })),
		{
			c() {
				b(e.$$.fragment), (l = L()), b(t.$$.fragment), (r = L());
			},
			l(o) {
				h(e.$$.fragment, o), (l = j(o)), h(t.$$.fragment, o), (r = j(o));
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
		P,
		q;
	function re() {
		return s[11](s[40]);
	}
	e = new Te({ props: { options: ee['folder:create'], callback: re } });
	function G() {
		return s[12](s[40]);
	}
	t = new Te({ props: { options: ee['folder:rename'], callback: G } });
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
			props: { name: 'folder', class: Z('w-[18px] h-[18px] shrink-0', s[1][s[42]] && 'hidden') }
		})),
		(g = new le({
			props: {
				name: 'folderOpen',
				class: Z('w-[18px] h-[18px] shrink-0', !s[1][s[42]] && 'hidden')
			}
		})),
		{
			c() {
				b(e.$$.fragment),
					(l = L()),
					b(t.$$.fragment),
					(r = L()),
					b(n.$$.fragment),
					(o = L()),
					b(f.$$.fragment),
					(i = L()),
					(a = x('div')),
					b(u.$$.fragment),
					(c = L()),
					b(g.$$.fragment),
					(E = L()),
					(T = x('span')),
					(S = U(D)),
					(w = L()),
					(I = x('span')),
					(P = U(k)),
					this.h();
			},
			l(A) {
				h(e.$$.fragment, A),
					(l = j(A)),
					h(t.$$.fragment, A),
					(r = j(A)),
					h(n.$$.fragment, A),
					(o = j(A)),
					h(f.$$.fragment, A),
					(i = j(A)),
					(a = y(A, 'DIV', { class: !0 }));
				var O = Y(a);
				h(u.$$.fragment, O),
					(c = j(O)),
					h(g.$$.fragment, O),
					(E = j(O)),
					(T = y(O, 'SPAN', { class: !0, autocorrect: !0, spellcheck: !0 }));
				var K = Y(T);
				(S = H(K, D)), K.forEach(_), O.forEach(_), (w = j(A)), (I = y(A, 'SPAN', { class: !0 }));
				var J = Y(I);
				(P = H(J, k)), J.forEach(_), this.h();
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
					Q(a, c),
					p(g, a, null),
					Q(a, E),
					Q(a, T),
					Q(T, S),
					v(A, w, O),
					v(A, I, O),
					Q(I, P),
					(q = !0);
			},
			p(A, O) {
				s = A;
				const K = {};
				O[0] & 5 && (K.callback = re), e.$set(K);
				const J = {};
				O[0] & 5 && (J.callback = G), t.$set(J);
				const $e = {};
				O[0] & 5 && ($e.callback = te), n.$set($e);
				const se = {};
				O[0] & 5 && (se.callback = ie), f.$set(se);
				const pe = {};
				O[0] & 2 && (pe.class = Z('w-[18px] h-[18px] shrink-0', s[1][s[42]] && 'hidden')),
					u.$set(pe);
				const be = {};
				O[0] & 2 && (be.class = Z('w-[18px] h-[18px] shrink-0', !s[1][s[42]] && 'hidden')),
					g.$set(be),
					(!q || O[0] & 1) && D !== (D = s[40].name + '') && Me(S, D),
					(!q || O[0] & 1) && k !== (k = s[40].children.length + '') && Me(P, k);
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
	l = new en({
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
			var a = Y(e);
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
			i && _(e), d(l), (r = !1), Le(n);
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
function Vl(s) {
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
function jl(s) {
	let e, l, t, r;
	return (
		(e = new le({
			props: {
				name: 'editPencil',
				class: 'w-3.5 h-3.5 fill-foreground/70 group-hover:fill-foreground'
			}
		})),
		(t = new Re({ props: { $$slots: { default: [Vl] }, $$scope: { ctx: s } } })),
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
function Ll(s) {
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
				$$slots: { default: [Pl] },
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
function Pl(s) {
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
				b(e.$$.fragment), (l = L()), (r = U(t));
			},
			l(o) {
				h(e.$$.fragment, o), (l = j(o)), (r = H(o, t));
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
	for (let u = 0; u < o.length; u += 1) f[u] = Ft(jt(s, o, u));
	const i = (u) =>
		$(f[u], 1, 1, () => {
			f[u] = null;
		});
	let a = l && Bt(s);
	return {
		c() {
			for (let u = 0; u < f.length; u += 1) f[u].c();
			(e = L()), a && a.c(), (t = ne());
		},
		l(u) {
			for (let c = 0; c < f.length; c += 1) f[c].l(u);
			(e = j(u)), a && a.l(u), (t = ne());
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
					const E = jt(s, o, g);
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
			u && (_(e), _(t)), Ze(f, u), a && a.d(u);
		}
	};
}
function Bl(s) {
	let e, l, t, r;
	return (
		(e = new fn({
			props: {
				class: 'flex items-center gap-2 font-base group',
				$$slots: { default: [Ll] },
				$$scope: { ctx: s }
			}
		})),
		(t = new on({ props: { class: 'w-40', $$slots: { default: [Fl] }, $$scope: { ctx: s } } })),
		{
			c() {
				b(e.$$.fragment), (l = L()), b(t.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n), (l = j(n)), h(t.$$.fragment, n);
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
			$$slots: { default: [jl] },
			$$scope: { ctx: s }
		}
	})),
		f.$on('click', w),
		(a = new rn({ props: { $$slots: { default: [Bl] }, $$scope: { ctx: s } } })),
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
					(l = L()),
					b(t.$$.fragment),
					(r = L()),
					b(n.$$.fragment),
					(o = L()),
					b(f.$$.fragment),
					(i = L()),
					b(a.$$.fragment),
					(u = L()),
					b(c.$$.fragment),
					(g = L()),
					b(E.$$.fragment);
			},
			l(k) {
				h(e.$$.fragment, k),
					(l = j(k)),
					h(t.$$.fragment, k),
					(r = j(k)),
					h(n.$$.fragment, k),
					(o = j(k)),
					h(f.$$.fragment, k),
					(i = j(k)),
					h(a.$$.fragment, k),
					(u = j(k)),
					h(c.$$.fragment, k),
					(g = j(k)),
					h(E.$$.fragment, k);
			},
			m(k, P) {
				p(e, k, P),
					v(k, l, P),
					p(t, k, P),
					v(k, r, P),
					p(n, k, P),
					v(k, o, P),
					p(f, k, P),
					v(k, i, P),
					p(a, k, P),
					v(k, u, P),
					p(c, k, P),
					v(k, g, P),
					p(E, k, P),
					(T = !0);
			},
			p(k, P) {
				s = k;
				const q = {};
				P[1] & 262144 && (q.$$scope = { dirty: P, ctx: s }), e.$set(q);
				const re = {};
				P[1] & 262144 && (re.$$scope = { dirty: P, ctx: s }), t.$set(re);
				const G = {};
				P[1] & 262144 && (G.$$scope = { dirty: P, ctx: s }), f.$set(G);
				const te = {};
				(P[0] & 1) | (P[1] & 262144) && (te.$$scope = { dirty: P, ctx: s }), a.$set(te);
				const ie = {};
				P[1] & 262144 && (ie.$$scope = { dirty: P, ctx: s }), E.$set(ie);
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
		(e = new nn({
			props: { 'data-path': s[40].path, $$slots: { default: [El] }, $$scope: { ctx: s } }
		})),
		(t = new ln({ props: { class: 'w-44', $$slots: { default: [Il] }, $$scope: { ctx: s } } })),
		{
			c() {
				b(e.$$.fragment), (l = L()), b(t.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n), (l = j(n)), h(t.$$.fragment, n);
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
		(e = new tn({ props: { $$slots: { default: [Ml] }, $$scope: { ctx: s } } })),
		(t = new xt({
			props: {
				class: Z('space-y-1.5 pt-1.5', s[40].children.length === 0 && 'hidden'),
				$$slots: { default: [ql] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				b(e.$$.fragment), (l = L()), b(t.$$.fragment), (r = L());
			},
			l(o) {
				h(e.$$.fragment, o), (l = j(o)), h(t.$$.fragment, o), (r = j(o));
			},
			m(o, f) {
				p(e, o, f), v(o, l, f), p(t, o, f), v(o, r, f), (n = !0);
			},
			p(o, f) {
				const i = {};
				(f[0] & 7) | (f[1] & 262144) && (i.$$scope = { dirty: f, ctx: o }), e.$set(i);
				const a = {};
				f[0] & 1 && (a.class = Z('space-y-1.5 pt-1.5', o[40].children.length === 0 && 'hidden')),
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
			o && _(e), Ze(r, o);
		}
	};
}
function Ie(s) {
	return s.filter((e) => e.children);
}
function Xl(s, e, l) {
	let t, r;
	_e(s, Qe, (C) => l(38, (t = C))), _e(s, ft, (C) => l(3, (r = C)));
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
							: Ye(W, u.getAttribute('data-path'))
						: (oe = u.firstElementChild) != null &&
							oe.getAttribute('data-path') &&
							(M
								? Je(W, u.firstElementChild.getAttribute('data-path'))
								: Ye(W, u.firstElementChild.getAttribute('data-path')))),
				u.removeAttribute('data-highlighted'),
				(u = null)),
			document.removeEventListener('dragover', S);
	}
	const I = (C, W) => W.name !== C.name,
		k = (C) => {
			!c && Xe(C.path);
		},
		P = (C) => !c && T(C, 'folder'),
		q = (C) => !c && st(C.path),
		re = (C) => !c && _t(C.path),
		G = (C, W) => D(W, C.name || ''),
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
		K = (C, W) => Je(C.path, W.path),
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
		V = (C, W) => {
			w(W, C.path);
		},
		F = async (C) => {
			T(C, 'note');
		},
		ve = (C) => dt(C.path),
		me = (C, W) => Ye(C.path, W.path),
		N = async (C) => {
			await Xe(C.path.split('/').slice(0, -1).join('/')),
				Ye(C.path, C.path.split('/').slice(0, -1).join('/') + '/Untitled');
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
			P,
			q,
			re,
			G,
			te,
			ie,
			A,
			O,
			K,
			J,
			$e,
			se,
			pe,
			be,
			We,
			ge,
			R,
			V,
			F,
			ve,
			me,
			N,
			de
		]
	);
}
class an extends Pe {
	constructor(e) {
		super(),
			Oe(
				this,
				e,
				Xl,
				Ul,
				je,
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
function Gl(s) {
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
			o && _(e), Ze(r, o);
		}
	};
}
function Zl(s) {
	let e,
		l,
		t,
		r = s[14].split('/').pop() + '',
		n,
		o;
	return (
		(e = new Sn({
			props: {
				class: Z(
					'w-3.5 h-3.5 transform transition-all shrink-0 text-muted-foreground group-hover:text-foreground',
					s[4][s[14]] ? 'rotate-0' : '-rotate-90'
				)
			}
		})),
		{
			c() {
				b(e.$$.fragment), (l = L()), (t = x('p')), (n = U(r)), this.h();
			},
			l(f) {
				h(e.$$.fragment, f), (l = j(f)), (t = y(f, 'P', { class: !0 }));
				var i = Y(t);
				(n = H(i, r)), i.forEach(_), this.h();
			},
			h() {
				z(t, 'class', 'truncate');
			},
			m(f, i) {
				p(e, f, i), v(f, l, i), v(f, t, i), Q(t, n), (o = !0);
			},
			p(f, i) {
				const a = {};
				i & 48 &&
					(a.class = Z(
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
				.replace(new RegExp(`(${s[0]})`, s[1].caseSensitive ? 'g' : 'gi'), Gt)
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
			(e = x('button')), (l = new cn(!1)), (r = L()), this.h();
		},
		l(i) {
			e = y(i, 'BUTTON', { class: !0 });
			var a = Y(e);
			(l = un(a, !1)), (r = j(a)), a.forEach(_), this.h();
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
			v(i, e, a), l.m(t, e), Q(e, r), n || ((o = X(e, 'click', f)), (n = !0));
		},
		p(i, a) {
			(s = i),
				a & 35 &&
					t !==
						(t =
							vt({ html: !0, linkify: !1, typographer: !0 })
								.render(s[17].context_preview)
								.replace(new RegExp(`(${s[0]})`, s[1].caseSensitive ? 'g' : 'gi'), Gt)
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
			r && _(e), Ze(t, r);
		}
	};
}
function Yl(s) {
	let e, l, t, r, n;
	function o() {
		return s[12](s[14]);
	}
	return (
		(e = new en({
			props: {
				class:
					'text-[13px] w-full text-secondary-foreground flex items-center h-7 justify-start gap-1.5 group hover:text-foreground transition-all',
				$$slots: { default: [Zl] },
				$$scope: { ctx: s }
			}
		})),
		e.$on('click', o),
		(t = new xt({
			props: {
				class: 'mt-0.5 w-full gap-1.5 flex flex-col',
				$$slots: { default: [Jl] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				b(e.$$.fragment), (l = L()), b(t.$$.fragment), (r = L());
			},
			l(f) {
				h(e.$$.fragment, f), (l = j(f)), h(t.$$.fragment, f), (r = j(f));
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
		(e = new yt({
			props: { open: s[4][s[14]], class: 'w-full', $$slots: { default: [Yl] }, $$scope: { ctx: s } }
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
				$$slots: { default: [Kl] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = x('div')), b(l.$$.fragment), this.h();
			},
			l(r) {
				e = y(r, 'DIV', { class: !0 });
				var n = Y(e);
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
function Kl(s) {
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
				$$slots: { default: [Ql] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = x('div')), b(l.$$.fragment), (t = L()), b(r.$$.fragment), this.h();
			},
			l(o) {
				e = y(o, 'DIV', { class: !0 });
				var f = Y(e);
				h(l.$$.fragment, f), (t = j(f)), h(r.$$.fragment, f), f.forEach(_), this.h();
			},
			h() {
				z(e, 'class', 'w-full h-full flex flex-col gap-0.5 items-center justify-center');
			},
			m(o, f) {
				v(o, e, f), p(l, e, null), Q(e, t), p(r, e, null), (n = !0);
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
function Ql(s) {
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
			$$slots: { default: [Gl] },
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
				(t = L()),
				a && a.c(),
				(n = L()),
				u && u.c(),
				(o = L()),
				c && c.c(),
				(f = ne()),
				this.h();
		},
		l(g) {
			e = y(g, 'DIV', { class: !0 });
			var E = Y(e);
			h(l.$$.fragment, E),
				E.forEach(_),
				(t = j(g)),
				a && a.l(g),
				(n = j(g)),
				u && u.l(g),
				(o = j(g)),
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
const Gt = (s) => `<span class="bg-[#f8a01e80] text-foreground/60">${s}</span>`;
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
			const { node: P } = t.view.domAtPos(t.state.selection.anchor);
			if (P instanceof HTMLElement) {
				const q = P.getBoundingClientRect(),
					re = q.top < 0,
					G = q.bottom > window.innerHeight;
				if (re || G) {
					const te = re ? 'auto' : 'smooth';
					P.scrollIntoView({ behavior: te, block: 'center' });
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
class tr extends Pe {
	constructor(e) {
		super(), Oe(this, e, er, yl, je, { query: 0, searchSettings: 1, results: 2, loading: 3 });
	}
}
function nr(s) {
	let e, l, t, r;
	return (
		(e = new Te({ props: { options: ee['notes:create'] } })),
		(t = new le({ props: { name: 'notePlus', class: 'w-[18px] h-[18px]' } })),
		{
			c() {
				b(e.$$.fragment), (l = L()), b(t.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n), (l = j(n)), h(t.$$.fragment, n);
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
				b(e.$$.fragment), (l = L()), b(t.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n), (l = j(n)), h(t.$$.fragment, n);
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
				class: Z('w-[18px] h-[18px] transition-all transform', s[7] === 'collapse' && 'hidden')
			}
		})),
		(t = new le({
			props: {
				name: 'expandCircle',
				class: Z('w-[18px] h-[18px] transition-all transform', s[7] === 'expand' && 'hidden')
			}
		})),
		{
			c() {
				b(e.$$.fragment), (l = L()), b(t.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n), (l = j(n)), h(t.$$.fragment, n);
			},
			m(n, o) {
				p(e, n, o), v(n, l, o), p(t, n, o), (r = !0);
			},
			p(n, o) {
				const f = {};
				o[0] & 128 &&
					(f.class = Z(
						'w-[18px] h-[18px] transition-all transform',
						n[7] === 'collapse' && 'hidden'
					)),
					e.$set(f);
				const i = {};
				o[0] & 128 &&
					(i.class = Z(
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
				b(e.$$.fragment), (l = L()), b(t.$$.fragment);
			},
			l(n) {
				h(e.$$.fragment, n), (l = j(n)), h(t.$$.fragment, n);
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
				class: Z(
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
					(n.class = Z(
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
				class: Z(
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
					(n.class = Z(
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
		o = s[6].length === 0 && Zt(s);
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
		Ve.push(() => rt(l, 'toggleFolderStates', f)),
		Ve.push(() => rt(l, 'toggleState', i)),
		{
			c() {
				o && o.c(), (e = L()), b(l.$$.fragment);
			},
			l(u) {
				o && o.l(u), (e = j(u)), h(l.$$.fragment, u);
			},
			m(u, c) {
				o && o.m(u, c), v(u, e, c), p(l, u, c), (n = !0);
			},
			p(u, c) {
				u[6].length === 0
					? o
						? c[0] & 64 && m(o, 1)
						: ((o = Zt(u)), o.c(), m(o, 1), o.m(e.parentNode, e))
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
function Zt(s) {
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
				var n = Y(e);
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
		P,
		q,
		re,
		G,
		te,
		ie,
		A,
		O,
		K,
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
		(G = new qe({
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
	function R(V, F) {
		return V[12] ? 0 : 1;
	}
	return (
		(O = R(s)),
		(K = ge[O] = We[O](s)),
		{
			c() {
				(e = x('div')),
					(l = x('div')),
					(t = L()),
					(r = x('div')),
					(n = x('div')),
					b(o.$$.fragment),
					(f = L()),
					b(i.$$.fragment),
					(a = L()),
					b(u.$$.fragment),
					(c = L()),
					b(g.$$.fragment),
					(T = L()),
					(D = x('div')),
					(S = x('div')),
					(w = x('input')),
					(I = L()),
					b(k.$$.fragment),
					(P = L()),
					b(q.$$.fragment),
					(re = L()),
					b(G.$$.fragment),
					(ie = L()),
					(A = x('div')),
					K.c(),
					this.h();
			},
			l(V) {
				e = y(V, 'DIV', { class: !0, style: !0 });
				var F = Y(e);
				(l = y(F, 'DIV', { class: !0, role: !0 })),
					Y(l).forEach(_),
					(t = j(F)),
					(r = y(F, 'DIV', { class: !0 }));
				var ve = Y(r);
				n = y(ve, 'DIV', { class: !0 });
				var me = Y(n);
				h(o.$$.fragment, me),
					(f = j(me)),
					h(i.$$.fragment, me),
					(a = j(me)),
					h(u.$$.fragment, me),
					(c = j(me)),
					h(g.$$.fragment, me),
					me.forEach(_),
					(T = j(ve)),
					(D = y(ve, 'DIV', { class: !0 }));
				var N = Y(D);
				S = y(N, 'DIV', { class: !0 });
				var de = Y(S);
				(w = y(de, 'INPUT', {
					id: !0,
					class: !0,
					type: !0,
					placeholder: !0,
					autocomplete: !0,
					autocorrect: !0
				})),
					(I = j(de)),
					h(k.$$.fragment, de),
					(P = j(de)),
					h(q.$$.fragment, de),
					(re = j(de)),
					h(G.$$.fragment, de),
					de.forEach(_),
					N.forEach(_),
					ve.forEach(_),
					(ie = j(F)),
					(A = y(F, 'DIV', { class: !0, 'data-collection-root': !0, 'data-path': !0 }));
				var C = Y(A);
				K.l(C), C.forEach(_), F.forEach(_), this.h();
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
						(E = Z(
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
						(te = Z(
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
						(J = Z(
							'fixed left-12 h-[calc(100vh-4.5rem)] flex flex-col justify-start items-center bg-background overflow-y-auto transform transition-transform duration-300',
							!s[10] && '-translate-x-52'
						))
					),
					z(e, 'style', ($e = `width: ${s[9]}px`));
			},
			m(V, F) {
				v(V, e, F),
					Q(e, l),
					Q(e, t),
					Q(e, r),
					Q(r, n),
					p(o, n, null),
					Q(n, f),
					p(i, n, null),
					Q(n, a),
					p(u, n, null),
					Q(n, c),
					p(g, n, null),
					Q(r, T),
					Q(r, D),
					Q(D, S),
					Q(S, w),
					mt(w, s[0]),
					Q(S, I),
					p(k, S, null),
					Q(S, P),
					p(q, S, null),
					Q(S, re),
					p(G, S, null),
					Q(e, ie),
					Q(e, A),
					ge[O].m(A, null),
					(se = !0),
					pe ||
						((be = [X(l, 'mousedown', s[13]), X(w, 'input', s[20]), X(w, 'keydown', s[21])]),
						(pe = !0));
			},
			p(V, F) {
				const ve = {};
				(F[0] & 2048) | (F[1] & 4) && (ve.$$scope = { dirty: F, ctx: V }), o.$set(ve);
				const me = {};
				(F[0] & 2048) | (F[1] & 4) && (me.$$scope = { dirty: F, ctx: V }), i.$set(me);
				const N = {};
				F[0] & 128 && (N.text = V[7] === 'collapse' ? 'Collapse folders' : 'Expand folders'),
					(F[0] & 384) | (F[1] & 4) && (N.$$scope = { dirty: F, ctx: V }),
					u.$set(N);
				const de = {};
				(F[0] & 4096) | (F[1] & 4) && (de.$$scope = { dirty: F, ctx: V }),
					g.$set(de),
					(!se ||
						(F[0] & 4096 &&
							E !==
								(E = Z(
									'flex flex-row items-center justify-center w-full h-full px-3.5 gap-2 shrink-0 transform transition-all translate-y-0',
									V[12] && '-translate-y-12'
								)))) &&
						z(n, 'class', E),
					F[0] & 1 && w.value !== V[0] && mt(w, V[0]);
				const C = {};
				(F[0] & 8) | (F[1] & 4) && (C.$$scope = { dirty: F, ctx: V }), k.$set(C);
				const W = {};
				(F[0] & 16) | (F[1] & 4) && (W.$$scope = { dirty: F, ctx: V }), q.$set(W);
				const M = {};
				F[1] & 4 && (M.$$scope = { dirty: F, ctx: V }),
					G.$set(M),
					(!se ||
						(F[0] & 4096 &&
							te !==
								(te = Z(
									'absolute pb-[0.5px] flex flex-row items-center justify-center w-full h-full px-[5px] gap-1 shrink-0 transform transition-all translate-y-12',
									V[12] && 'translate-y-0'
								)))) &&
						z(D, 'class', te);
				let B = O;
				(O = R(V)),
					O === B
						? ge[O].p(V, F)
						: (ue(),
							$(ge[B], 1, 1, () => {
								ge[B] = null;
							}),
							ce(),
							(K = ge[O]),
							K ? K.p(V, F) : ((K = ge[O] = We[O](V)), K.c()),
							m(K, 1),
							K.m(A, null)),
					(!se || F[0] & 2048) && z(A, 'data-path', V[11]),
					(!se ||
						(F[0] & 1024 &&
							J !==
								(J = Z(
									'fixed left-12 h-[calc(100vh-4.5rem)] flex flex-col justify-start items-center bg-background overflow-y-auto transform transition-transform duration-300',
									!V[10] && '-translate-x-52'
								)))) &&
						z(e, 'class', J),
					(!se || (F[0] & 512 && $e !== ($e = `width: ${V[9]}px`))) && z(e, 'style', $e);
			},
			i(V) {
				se ||
					(m(o.$$.fragment, V),
					m(i.$$.fragment, V),
					m(u.$$.fragment, V),
					m(g.$$.fragment, V),
					m(k.$$.fragment, V),
					m(q.$$.fragment, V),
					m(G.$$.fragment, V),
					m(K),
					(se = !0));
			},
			o(V) {
				$(o.$$.fragment, V),
					$(i.$$.fragment, V),
					$(u.$$.fragment, V),
					$(g.$$.fragment, V),
					$(k.$$.fragment, V),
					$(q.$$.fragment, V),
					$(G.$$.fragment, V),
					$(K),
					(se = !1);
			},
			d(V) {
				V && _(e), d(o), d(i), d(u), d(g), d(k), d(q), d(G), ge[O].d(), (pe = !1), Le(be);
			}
		}
	);
}
function vr(s, e, l) {
	let t, r, n, o, f;
	_e(s, it, (R) => l(28, (t = R))),
		_e(s, bt, (R) => l(9, (r = R))),
		_e(s, nt, (R) => l(10, (n = R))),
		_e(s, Qe, (R) => l(11, (o = R))),
		_e(s, Ke, (R) => l(12, (f = R)));
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
			await dn.live.query('SELECT * FROM entry', [], async () => {
				await gt(o);
			})
		).unsubscribe;
	}
	const k = _n.subscribe((R) => {
			l(6, (T = R));
		}),
		P = Qe.subscribe(async (R) => {
			l(6, (T = await gt(R)));
			const V = T.find((F) => !F.children);
			V ? ye(V.path) : ft.set(null), R && (w && w(), (w = await I()));
		});
	Ke.subscribe((R) => {
		if (R) {
			const V = document.querySelector('#notesSearch');
			V &&
				setTimeout(() => {
					V.focus();
				}, 250);
		}
	});
	const q = (R) => {
			Ue.set(!0);
			const V = R.x;
			if (V < 100) {
				Ue.set(!1), nt.set(!1);
				return;
			} else if (V > 100 && !n) {
				Ue.set(!1), nt.set(!0);
				return;
			}
			r + R.movementX < 210 ||
				r + R.movementX > 500 ||
				V < 245 ||
				V > 550 ||
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
	async function G() {
		if (!i) {
			l(5, (E = []));
			return;
		}
		l(2, (u = !0));
		try {
			l(5, (E = await pn(Jt(Qe), i, c, g))), l(2, (u = !1));
		} catch (R) {
			console.error('Error searching files:', R);
		}
	}
	function te() {
		Ke.set(!1), l(0, (i = '')), l(3, (c = !1)), l(4, (g = !1)), l(5, (E = []));
	}
	mn(() => {
		w && w(), k(), P();
	});
	const ie = async () => st(o),
		A = async () => Xe(o),
		O = async () => {
			S();
		},
		K = () => {
			Ke.set(!f);
		};
	function J() {
		(i = this.value), l(0, i);
	}
	const $e = (R) => {
			clearTimeout(a),
				l(
					1,
					(a = setTimeout(() => {
						G();
					}, 500))
				),
				R.key === 'Enter' && (clearTimeout(a), G()),
				R.key === 'Escape' && te();
		},
		se = () => {
			l(3, (c = !c)), G();
		},
		pe = () => {
			l(4, (g = !g)), G();
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
	return [i, a, u, c, g, E, T, D, S, r, n, o, f, re, G, te, ie, A, O, K, J, $e, se, pe, be, We, ge];
}
class kr extends Pe {
	constructor(e) {
		super(), Oe(this, e, vr, br, je, {}, null, [-1, -1]);
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
				(e = L()), b(l.$$.fragment), this.h();
			},
			l(r) {
				$n('svelte-t73bny', document.head).forEach(_), (e = j(r)), h(l.$$.fragment, r), this.h();
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
class Mr extends Pe {
	constructor(e) {
		super(), Oe(this, e, Sr, Cr, je, {});
	}
}
export { Mr as component };
