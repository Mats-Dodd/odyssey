import { s as _, x as c, A as f, E as m, F as d, G as p, H as g } from './wdwkOUVI.js';
import { S as $, i as h, d as v, t as i, a as u, m as M, c as N, b } from './JshcQj11.js';
import { g as A, a as H } from './SV1JYOhp.js';
import { I } from './DnqHzMrx.js';
function S(l) {
	let e;
	const s = l[2].default,
		o = m(s, l, l[3], null);
	return {
		c() {
			o && o.c();
		},
		l(n) {
			o && o.l(n);
		},
		m(n, t) {
			o && o.m(n, t), (e = !0);
		},
		p(n, t) {
			o && o.p && (!e || t & 8) && d(o, s, n, n[3], e ? g(s, n[3], t, null) : p(n[3]), null);
		},
		i(n) {
			e || (u(o, n), (e = !0));
		},
		o(n) {
			i(o, n), (e = !1);
		},
		d(n) {
			o && o.d(n);
		}
	};
}
function W(l) {
	let e, s;
	const o = [{ name: 'a-large-small' }, l[1], { iconNode: l[0] }];
	let n = { $$slots: { default: [S] }, $$scope: { ctx: l } };
	for (let t = 0; t < o.length; t += 1) n = c(n, o[t]);
	return (
		(e = new I({ props: n })),
		{
			c() {
				b(e.$$.fragment);
			},
			l(t) {
				N(e.$$.fragment, t);
			},
			m(t, a) {
				M(e, t, a), (s = !0);
			},
			p(t, [a]) {
				const r = a & 3 ? A(o, [o[0], a & 2 && H(t[1]), a & 1 && { iconNode: t[0] }]) : {};
				a & 8 && (r.$$scope = { dirty: a, ctx: t }), e.$set(r);
			},
			i(t) {
				s || (u(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				i(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				v(e, t);
			}
		}
	);
}
function j(l, e, s) {
	let { $$slots: o = {}, $$scope: n } = e;
	const t = [
		['path', { d: 'M21 14h-5' }],
		['path', { d: 'M16 16v-3.5a2.5 2.5 0 0 1 5 0V16' }],
		['path', { d: 'M4.5 13h6' }],
		['path', { d: 'm3 16 4.5-9 4.5 9' }]
	];
	return (
		(l.$$set = (a) => {
			s(1, (e = c(c({}, e), f(a)))), '$$scope' in a && s(3, (n = a.$$scope));
		}),
		(e = f(e)),
		[t, e, o, n]
	);
}
class k extends $ {
	constructor(e) {
		super(), h(this, e, j, W, _, {});
	}
}
function q(l) {
	let e;
	const s = l[2].default,
		o = m(s, l, l[3], null);
	return {
		c() {
			o && o.c();
		},
		l(n) {
			o && o.l(n);
		},
		m(n, t) {
			o && o.m(n, t), (e = !0);
		},
		p(n, t) {
			o && o.p && (!e || t & 8) && d(o, s, n, n[3], e ? g(s, n[3], t, null) : p(n[3]), null);
		},
		i(n) {
			e || (u(o, n), (e = !0));
		},
		o(n) {
			i(o, n), (e = !1);
		},
		d(n) {
			o && o.d(n);
		}
	};
}
function w(l) {
	let e, s;
	const o = [{ name: 'whole-word' }, l[1], { iconNode: l[0] }];
	let n = { $$slots: { default: [q] }, $$scope: { ctx: l } };
	for (let t = 0; t < o.length; t += 1) n = c(n, o[t]);
	return (
		(e = new I({ props: n })),
		{
			c() {
				b(e.$$.fragment);
			},
			l(t) {
				N(e.$$.fragment, t);
			},
			m(t, a) {
				M(e, t, a), (s = !0);
			},
			p(t, [a]) {
				const r = a & 3 ? A(o, [o[0], a & 2 && H(t[1]), a & 1 && { iconNode: t[0] }]) : {};
				a & 8 && (r.$$scope = { dirty: a, ctx: t }), e.$set(r);
			},
			i(t) {
				s || (u(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				i(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				v(e, t);
			}
		}
	);
}
function C(l, e, s) {
	let { $$slots: o = {}, $$scope: n } = e;
	const t = [
		['circle', { cx: '7', cy: '12', r: '3' }],
		['path', { d: 'M10 9v6' }],
		['circle', { cx: '17', cy: '12', r: '3' }],
		['path', { d: 'M14 7v8' }],
		['path', { d: 'M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1' }]
	];
	return (
		(l.$$set = (a) => {
			s(1, (e = c(c({}, e), f(a)))), '$$scope' in a && s(3, (n = a.$$scope));
		}),
		(e = f(e)),
		[t, e, o, n]
	);
}
class z extends $ {
	constructor(e) {
		super(), h(this, e, C, w, _, {});
	}
}
export { k as A, z as W };
