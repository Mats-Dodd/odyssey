import {
	s as m,
	n as a,
	d as o,
	i as c,
	m as d,
	v as u,
	g as h,
	c as f,
	o as p,
	j as g,
	h as v,
	w as _
} from '../chunks/wdwkOUVI.js';
import { S as x, i as y } from '../chunks/JshcQj11.js';
import { b as w } from '../chunks/DLjKPosD.js';
import { g as l } from '../chunks/h5yhFqLT.js';
function S(r) {
	let t,
		e,
		i =
			'<div class="text-center"><h1 class="text-2xl font-bold mb-4">Signing out...</h1> <p class="text-muted-foreground">Please wait while we sign you out.</p></div>';
	return {
		c() {
			(t = g()), (e = v('div')), (e.innerHTML = i), this.h();
		},
		l(s) {
			u('svelte-ofcttr', document.head).forEach(o),
				(t = h(s)),
				(e = f(s, 'DIV', { class: !0, 'data-svelte-h': !0 })),
				p(e) !== 'svelte-139dfvq' && (e.innerHTML = i),
				this.h();
		},
		h() {
			(document.title = 'Signing Out - Typyst'),
				d(e, 'class', 'flex min-h-screen items-center justify-center');
		},
		m(s, n) {
			c(s, t, n), c(s, e, n);
		},
		p: a,
		i: a,
		o: a,
		d(s) {
			s && (o(t), o(e));
		}
	};
}
function b(r) {
	return (
		_(async () => {
			try {
				await w(), l('/');
			} catch (t) {
				console.error('Sign out error:', t), l('/');
			}
		}),
		[]
	);
}
class C extends x {
	constructor(t) {
		super(), y(this, t, b, S, m, {});
	}
}
export { C as component };
