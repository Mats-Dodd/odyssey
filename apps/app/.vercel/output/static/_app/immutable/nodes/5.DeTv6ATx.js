import {
	s as x,
	d as i,
	i as r,
	m as b,
	c as _,
	o as $,
	g as d,
	h,
	j as v,
	f as C,
	t as g
} from '../chunks/wdwkOUVI.js';
import {
	S as k,
	i as L,
	d as H,
	t as S,
	a as j,
	m as B,
	c as M,
	b as P
} from '../chunks/JshcQj11.js';
import { B as T } from '../chunks/SV1JYOhp.js';
function q(u) {
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
		m,
		a,
		c;
	return (
		(a = new T({ props: { $$slots: { default: [q] }, $$scope: { ctx: u } } })),
		{
			c() {
				(e = h('h1')),
					(e.textContent = s),
					(l = v()),
					(o = h('p')),
					(o.innerHTML = f),
					(m = v()),
					P(a.$$.fragment),
					this.h();
			},
			l(t) {
				(e = _(t, 'H1', { class: !0, 'data-svelte-h': !0 })),
					$(e) !== 'svelte-1795d3b' && (e.textContent = s),
					(l = d(t)),
					(o = _(t, 'P', { 'data-svelte-h': !0 })),
					$(o) !== 'svelte-jl9sbz' && (o.innerHTML = f),
					(m = d(t)),
					M(a.$$.fragment, t),
					this.h();
			},
			h() {
				b(e, 'class', 'bg-blue-500');
			},
			m(t, n) {
				r(t, e, n), r(t, l, n), r(t, o, n), r(t, m, n), B(a, t, n), (c = !0);
			},
			p(t, [n]) {
				const p = {};
				n & 1 && (p.$$scope = { dirty: n, ctx: t }), a.$set(p);
			},
			i(t) {
				c || (j(a.$$.fragment, t), (c = !0));
			},
			o(t) {
				S(a.$$.fragment, t), (c = !1);
			},
			d(t) {
				t && (i(e), i(l), i(o), i(m)), H(a, t);
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
