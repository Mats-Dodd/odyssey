import {
	s as L,
	d as c,
	i as u,
	x as B,
	g as k,
	j as x,
	k as I,
	B as M,
	C as b,
	n as y,
	q as h,
	c as g,
	r as w,
	h as $,
	b as v,
	e as P,
	f as T,
	t as q
} from '../chunks/CZvU1ekx.js';
import {
	S as A,
	i as D,
	d as S,
	t as m,
	a as d,
	m as C,
	c as O,
	b as H,
	g as E,
	e as G
} from '../chunks/ZuwjM_kn.js';
import { a as V, i as j } from '../chunks/jFyWpFis.js';
import { B as F } from '../chunks/CTLOy2q2.js';
import { g as p } from '../chunks/Ckl9wd6U.js';
import { A as N } from '../chunks/CM7uU_GR.js';
function z(l) {
	let t,
		e,
		n = "If you weren't automatically redirected:",
		o,
		s,
		a;
	return (
		(s = new F({ props: { class: 'w-full', $$slots: { default: [K] }, $$scope: { ctx: l } } })),
		s.$on('click', l[2]),
		{
			c() {
				(t = $('div')), (e = $('p')), (e.textContent = n), (o = x()), H(s.$$.fragment), this.h();
			},
			l(i) {
				t = g(i, 'DIV', { class: !0 });
				var r = P(t);
				(e = g(r, 'P', { class: !0, 'data-svelte-h': !0 })),
					w(e) !== 'svelte-s5v6oo' && (e.textContent = n),
					(o = k(r)),
					O(s.$$.fragment, r),
					r.forEach(c),
					this.h();
			},
			h() {
				h(e, 'class', 'text-muted-foreground'), h(t, 'class', 'text-center space-y-4');
			},
			m(i, r) {
				u(i, t, r), v(t, e), v(t, o), C(s, t, null), (a = !0);
			},
			i(i) {
				a || (d(s.$$.fragment, i), (a = !0));
			},
			o(i) {
				m(s.$$.fragment, i), (a = !1);
			},
			d(i) {
				i && c(t), S(s);
			}
		}
	);
}
function J(l) {
	let t,
		e =
			'<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div> <p class="text-muted-foreground">Signing out...</p>';
	return {
		c() {
			(t = $('div')), (t.innerHTML = e), this.h();
		},
		l(n) {
			(t = g(n, 'DIV', { class: !0, 'data-svelte-h': !0 })),
				w(t) !== 'svelte-181wpdm' && (t.innerHTML = e),
				this.h();
		},
		h() {
			h(t, 'class', 'text-center');
		},
		m(n, o) {
			u(n, t, o);
		},
		i: y,
		o: y,
		d(n) {
			n && c(t);
		}
	};
}
function K(l) {
	let t;
	return {
		c() {
			t = q('Go to Home');
		},
		l(e) {
			t = T(e, 'Go to Home');
		},
		m(e, n) {
			u(e, t, n);
		},
		d(e) {
			e && c(t);
		}
	};
}
function Q(l) {
	let t, e, n, o;
	const s = [J, z],
		a = [];
	function i(r, f) {
		return r[0] || r[1] ? 0 : 1;
	}
	return (
		(t = i(l)),
		(e = a[t] = s[t](l)),
		{
			c() {
				e.c(), (n = b());
			},
			l(r) {
				e.l(r), (n = b());
			},
			m(r, f) {
				a[t].m(r, f), u(r, n, f), (o = !0);
			},
			p(r, f) {
				let _ = t;
				(t = i(r)),
					t !== _ &&
						(E(),
						m(a[_], 1, 1, () => {
							a[_] = null;
						}),
						G(),
						(e = a[t]),
						e || ((e = a[t] = s[t](r)), e.c()),
						d(e, 1),
						e.m(n.parentNode, n));
			},
			i(r) {
				o || (d(e), (o = !0));
			},
			o(r) {
				m(e), (o = !1);
			},
			d(r) {
				r && c(n), a[t].d(r);
			}
		}
	);
}
function R(l) {
	let t, e, n;
	return (
		(e = new N({
			props: {
				title: 'Signing Out',
				subtitle: 'Please wait while we sign you out.',
				$$slots: { default: [Q] },
				$$scope: { ctx: l }
			}
		})),
		{
			c() {
				(t = x()), H(e.$$.fragment), this.h();
			},
			l(o) {
				B('svelte-ofcttr', document.head).forEach(c), (t = k(o)), O(e.$$.fragment, o), this.h();
			},
			h() {
				document.title = 'Signing Out - Typyst';
			},
			m(o, s) {
				u(o, t, s), C(e, o, s), (n = !0);
			},
			p(o, [s]) {
				const a = {};
				s & 19 && (a.$$scope = { dirty: s, ctx: o }), e.$set(a);
			},
			i(o) {
				n || (d(e.$$.fragment, o), (n = !0));
			},
			o(o) {
				m(e.$$.fragment, o), (n = !1);
			},
			d(o) {
				o && c(t), S(e, o);
			}
		}
	);
}
function U(l, t, e) {
	let n;
	I(l, j, (i) => e(1, (n = i)));
	let o = !1;
	async function s() {
		e(0, (o = !0));
		try {
			await V(), p('/');
		} catch (i) {
			console.error('Sign out error:', i), p('/');
		} finally {
			e(0, (o = !1));
		}
	}
	return (
		M(() => {
			s();
		}),
		[o, n, () => p('/')]
	);
}
class ot extends A {
	constructor(t) {
		super(), D(this, t, U, R, L, {});
	}
}
export { ot as component };
