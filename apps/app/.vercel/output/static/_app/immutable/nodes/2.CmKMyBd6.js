import { s as i, l as u, u as f, m as r, o as _ } from '../chunks/CZvU1ekx.js';
import { S as c, i as m, t as d, a as p } from '../chunks/ZuwjM_kn.js';
function g(n) {
	let a;
	const o = n[2].default,
		e = u(o, n, n[1], null);
	return {
		c() {
			e && e.c();
		},
		l(t) {
			e && e.l(t);
		},
		m(t, s) {
			e && e.m(t, s), (a = !0);
		},
		p(t, [s]) {
			e && e.p && (!a || s & 2) && f(e, o, t, t[1], a ? _(o, t[1], s, null) : r(t[1]), null);
		},
		i(t) {
			a || (p(e, t), (a = !0));
		},
		o(t) {
			d(e, t), (a = !1);
		},
		d(t) {
			e && e.d(t);
		}
	};
}
function h(n, a, o) {
	let { $$slots: e = {}, $$scope: t } = a,
		{ data: s } = a;
	return (
		(n.$$set = (l) => {
			'data' in l && o(0, (s = l.data)), '$$scope' in l && o(1, (t = l.$$scope));
		}),
		[s, t, e]
	);
}
class q extends c {
	constructor(a) {
		super(), m(this, a, h, g, i, { data: 0 });
	}
}
export { q as component };
