import {
	s as y,
	d as p,
	i as N,
	C,
	G as b,
	k as H,
	D as _,
	H as S,
	l as g,
	u as h,
	m as k,
	o as L,
	v as O,
	E as v,
	N as z,
	w as F,
	c as I,
	e as J,
	h as K,
	y as Q
} from './CZvU1ekx.js';
import {
	S as j,
	i as B,
	t as d,
	a as m,
	g as U,
	e as V,
	d as W,
	m as X,
	c as Y,
	b as Z
} from './ZuwjM_kn.js';
import { b as w, g as M, c as D, a as $ } from './CTLOy2q2.js';
import { b as x, c as ee, a as te } from './Wn8UfayS.js';
function se() {
	return {
		elements: {
			root: x('label', {
				action: (e) => ({
					destroy: w(e, 'mousedown', (t) => {
						!t.defaultPrevented && t.detail > 1 && t.preventDefault();
					})
				})
			})
		}
	};
}
function le() {
	const o = 'label',
		s = ee(o, ['root']);
	return { NAME: o, getAttrs: s };
}
const oe = (o) => ({ builder: o & 4 }),
	E = (o) => ({ builder: o[2] }),
	ae = (o) => ({ builder: o & 4 }),
	P = (o) => ({ builder: o[2] });
function ne(o) {
	let e, s, t, l;
	const a = o[8].default,
		n = g(a, o, o[7], E);
	let u = [o[2], o[5]],
		i = {};
	for (let r = 0; r < u.length; r += 1) i = _(i, u[r]);
	return {
		c() {
			(e = K('label')), n && n.c(), this.h();
		},
		l(r) {
			e = I(r, 'LABEL', {});
			var c = J(e);
			n && n.l(c), c.forEach(p), this.h();
		},
		h() {
			v(e, i);
		},
		m(r, c) {
			N(r, e, c),
				n && n.m(e, null),
				o[9](e),
				(s = !0),
				t || ((l = [z(o[2].action(e)), F(e, 'm-mousedown', o[4])]), (t = !0));
		},
		p(r, c) {
			n && n.p && (!s || c & 132) && h(n, a, r, r[7], s ? L(a, r[7], c, oe) : k(r[7]), E),
				v(e, (i = M(u, [c & 4 && r[2], c & 32 && r[5]])));
		},
		i(r) {
			s || (m(n, r), (s = !0));
		},
		o(r) {
			d(n, r), (s = !1);
		},
		d(r) {
			r && p(e), n && n.d(r), o[9](null), (t = !1), O(l);
		}
	};
}
function re(o) {
	let e;
	const s = o[8].default,
		t = g(s, o, o[7], P);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, a) {
			t && t.m(l, a), (e = !0);
		},
		p(l, a) {
			t && t.p && (!e || a & 132) && h(t, s, l, l[7], e ? L(s, l[7], a, ae) : k(l[7]), P);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			d(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function ie(o) {
	let e, s, t, l;
	const a = [re, ne],
		n = [];
	function u(i, r) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = u(o)),
		(s = n[e] = a[e](o)),
		{
			c() {
				s.c(), (t = C());
			},
			l(i) {
				s.l(i), (t = C());
			},
			m(i, r) {
				n[e].m(i, r), N(i, t, r), (l = !0);
			},
			p(i, [r]) {
				let c = e;
				(e = u(i)),
					e === c
						? n[e].p(i, r)
						: (U(),
							d(n[c], 1, 1, () => {
								n[c] = null;
							}),
							V(),
							(s = n[e]),
							s ? s.p(i, r) : ((s = n[e] = a[e](i)), s.c()),
							m(s, 1),
							s.m(t.parentNode, t));
			},
			i(i) {
				l || (m(s), (l = !0));
			},
			o(i) {
				d(s), (l = !1);
			},
			d(i) {
				i && p(t), n[e].d(i);
			}
		}
	);
}
function ce(o, e, s) {
	let t;
	const l = ['asChild', 'el'];
	let a = b(e, l),
		n,
		{ $$slots: u = {}, $$scope: i } = e,
		{ asChild: r = !1 } = e,
		{ el: c = void 0 } = e;
	const {
		elements: { root: A }
	} = se();
	H(o, A, (f) => s(6, (n = f)));
	const R = te(),
		{ getAttrs: T } = le(),
		q = T('root');
	function G(f) {
		Q[f ? 'unshift' : 'push'](() => {
			(c = f), s(0, c);
		});
	}
	return (
		(o.$$set = (f) => {
			(e = _(_({}, e), S(f))),
				s(5, (a = b(e, l))),
				'asChild' in f && s(1, (r = f.asChild)),
				'el' in f && s(0, (c = f.el)),
				'$$scope' in f && s(7, (i = f.$$scope));
		}),
		(o.$$.update = () => {
			o.$$.dirty & 64 && s(2, (t = n)), o.$$.dirty & 4 && Object.assign(t, q);
		}),
		[c, r, t, A, R, a, n, i, u, G]
	);
}
let ue = class extends j {
	constructor(e) {
		super(), B(this, e, ce, ie, y, { asChild: 1, el: 0 });
	}
};
function fe(o) {
	let e;
	const s = o[2].default,
		t = g(s, o, o[3], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, a) {
			t && t.m(l, a), (e = !0);
		},
		p(l, a) {
			t && t.p && (!e || a & 8) && h(t, s, l, l[3], e ? L(s, l[3], a, null) : k(l[3]), null);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			d(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function _e(o) {
	let e, s;
	const t = [
		{
			class: D(
				'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
				o[0]
			)
		},
		o[1]
	];
	let l = { $$slots: { default: [fe] }, $$scope: { ctx: o } };
	for (let a = 0; a < t.length; a += 1) l = _(l, t[a]);
	return (
		(e = new ue({ props: l })),
		{
			c() {
				Z(e.$$.fragment);
			},
			l(a) {
				Y(e.$$.fragment, a);
			},
			m(a, n) {
				X(e, a, n), (s = !0);
			},
			p(a, [n]) {
				const u =
					n & 3
						? M(t, [
								n & 1 && {
									class: D(
										'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
										a[0]
									)
								},
								n & 2 && $(a[1])
							])
						: {};
				n & 8 && (u.$$scope = { dirty: n, ctx: a }), e.$set(u);
			},
			i(a) {
				s || (m(e.$$.fragment, a), (s = !0));
			},
			o(a) {
				d(e.$$.fragment, a), (s = !1);
			},
			d(a) {
				W(e, a);
			}
		}
	);
}
function de(o, e, s) {
	const t = ['class'];
	let l = b(e, t),
		{ $$slots: a = {}, $$scope: n } = e,
		{ class: u = void 0 } = e;
	return (
		(o.$$set = (i) => {
			(e = _(_({}, e), S(i))),
				s(1, (l = b(e, t))),
				'class' in i && s(0, (u = i.class)),
				'$$scope' in i && s(3, (n = i.$$scope));
		}),
		[u, l, a, n]
	);
}
class ke extends j {
	constructor(e) {
		super(), B(this, e, de, _e, y, { class: 0 });
	}
}
export { ke as L, se as c };
