import {
	s as x,
	d as i,
	i as r,
	q as b,
	c as _,
	r as $,
	g as d,
	h,
	j as v,
	f as C,
	t as g
} from '../chunks/CZvU1ekx.js';
import {
	S as k,
	i as L,
	d as H,
	t as S,
	a as j,
	m as q,
	c as B,
	b as M
} from '../chunks/ZuwjM_kn.js';
import { B as P } from '../chunks/CTLOy2q2.js';
function T(u) {
	let e;
	return {
		c() {
			e = g('CLick me');
		},
		l(s) {
			e = C(s, 'CLick me');
		},
		m(s, l) {
			r(s, e, l);
		},
		d(s) {
			s && i(e);
		}
	};
}
function w(u) {
	let e,
		s = 'Welcome to SvelteKit',
		l,
		o,
		f = 'Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation',
		c,
		a,
		m;
	return (
		(a = new P({ props: { $$slots: { default: [T] }, $$scope: { ctx: u } } })),
		{
			c() {
				(e = h('h1')),
					(e.textContent = s),
					(l = v()),
					(o = h('p')),
					(o.innerHTML = f),
					(c = v()),
					M(a.$$.fragment),
					this.h();
			},
			l(t) {
				(e = _(t, 'H1', { class: !0, 'data-svelte-h': !0 })),
					$(e) !== 'svelte-1795d3b' && (e.textContent = s),
					(l = d(t)),
					(o = _(t, 'P', { 'data-svelte-h': !0 })),
					$(o) !== 'svelte-jl9sbz' && (o.innerHTML = f),
					(c = d(t)),
					B(a.$$.fragment, t),
					this.h();
			},
			h() {
				b(e, 'class', 'bg-blue-500');
			},
			m(t, n) {
				r(t, e, n), r(t, l, n), r(t, o, n), r(t, c, n), q(a, t, n), (m = !0);
			},
			p(t, [n]) {
				const p = {};
				n & 1 && (p.$$scope = { dirty: n, ctx: t }), a.$set(p);
			},
			i(t) {
				m || (j(a.$$.fragment, t), (m = !0));
			},
			o(t) {
				S(a.$$.fragment, t), (m = !1);
			},
			d(t) {
				t && (i(e), i(l), i(o), i(c)), H(a, t);
			}
		}
	);
}
class V extends k {
	constructor(e) {
		super(), L(this, e, null, w, x, {});
	}
}
export { V as component };
