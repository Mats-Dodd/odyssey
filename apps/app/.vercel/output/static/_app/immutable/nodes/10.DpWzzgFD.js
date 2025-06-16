import {
	s as R,
	d as S,
	i as q,
	x as W,
	g as y,
	j as E,
	k as I,
	y as j,
	z,
	b as T,
	w as G,
	A as H,
	q as J,
	c as K,
	e as N,
	h as Q,
	a as U,
	f as V,
	t as X
} from '../chunks/CZvU1ekx.js';
import {
	S as Y,
	i as Z,
	d,
	t as _,
	a as $,
	m as b,
	c as v,
	b as w,
	f as C
} from '../chunks/ZuwjM_kn.js';
import { e as x, i as ee, s as te } from '../chunks/jFyWpFis.js';
import { g as ae } from '../chunks/Ckl9wd6U.js';
import { p as ne } from '../chunks/iLYtrjRH.js';
import { B as re } from '../chunks/CTLOy2q2.js';
import { A as se } from '../chunks/CM7uU_GR.js';
import { A as D, a as oe } from '../chunks/BpfEVprH.js';
function ie(r) {
	let t = r[4] ? 'Signing in...' : 'Sign In',
		e;
	return {
		c() {
			e = X(t);
		},
		l(s) {
			e = V(s, t);
		},
		m(s, a) {
			q(s, e, a);
		},
		p(s, a) {
			a & 16 && t !== (t = s[4] ? 'Signing in...' : 'Sign In') && U(e, t);
		},
		d(s) {
			s && S(e);
		}
	};
}
function ue(r) {
	let t, e, s, a, o, p, m, l, c, f, g, h, i;
	function M(n) {
		r[7](n);
	}
	let L = { type: 'email', label: 'Email', placeholder: 'Enter your email', required: !0 };
	r[0] !== void 0 && (L.value = r[0]), (e = new D({ props: L })), j.push(() => C(e, 'value', M));
	function O(n) {
		r[8](n);
	}
	let P = { type: 'password', label: 'Password', placeholder: 'Enter your password', required: !0 };
	return (
		r[1] !== void 0 && (P.value = r[1]),
		(o = new D({ props: P })),
		j.push(() => C(o, 'value', O)),
		(l = new oe({ props: { error: r[3], localError: r[2] } })),
		(f = new re({
			props: {
				type: 'submit',
				class: 'w-full',
				disabled: r[4],
				$$slots: { default: [ie] },
				$$scope: { ctx: r }
			}
		})),
		{
			c() {
				(t = Q('form')),
					w(e.$$.fragment),
					(a = E()),
					w(o.$$.fragment),
					(m = E()),
					w(l.$$.fragment),
					(c = E()),
					w(f.$$.fragment),
					this.h();
			},
			l(n) {
				t = K(n, 'FORM', { class: !0 });
				var u = N(t);
				v(e.$$.fragment, u),
					(a = y(u)),
					v(o.$$.fragment, u),
					(m = y(u)),
					v(l.$$.fragment, u),
					(c = y(u)),
					v(f.$$.fragment, u),
					u.forEach(S),
					this.h();
			},
			h() {
				J(t, 'class', 'space-y-4');
			},
			m(n, u) {
				q(n, t, u),
					b(e, t, null),
					T(t, a),
					b(o, t, null),
					T(t, m),
					b(l, t, null),
					T(t, c),
					b(f, t, null),
					(g = !0),
					h || ((i = G(t, 'submit', H(r[5]))), (h = !0));
			},
			p(n, u) {
				const B = {};
				!s && u & 1 && ((s = !0), (B.value = n[0]), z(() => (s = !1))), e.$set(B);
				const F = {};
				!p && u & 2 && ((p = !0), (F.value = n[1]), z(() => (p = !1))), o.$set(F);
				const k = {};
				u & 8 && (k.error = n[3]), u & 4 && (k.localError = n[2]), l.$set(k);
				const A = {};
				u & 16 && (A.disabled = n[4]), u & 1040 && (A.$$scope = { dirty: u, ctx: n }), f.$set(A);
			},
			i(n) {
				g ||
					($(e.$$.fragment, n),
					$(o.$$.fragment, n),
					$(l.$$.fragment, n),
					$(f.$$.fragment, n),
					(g = !0));
			},
			o(n) {
				_(e.$$.fragment, n),
					_(o.$$.fragment, n),
					_(l.$$.fragment, n),
					_(f.$$.fragment, n),
					(g = !1);
			},
			d(n) {
				n && S(t), d(e), d(o), d(l), d(f), (h = !1), i();
			}
		}
	);
}
function le(r) {
	let t, e, s;
	return (
		(e = new se({
			props: {
				title: 'Sign In',
				subtitle: 'Welcome back to Typyst',
				alternativeText: "Don't have an account?",
				alternativeLink: '/auth/sign-up',
				alternativeLinkText: 'Sign up',
				$$slots: { default: [ue] },
				$$scope: { ctx: r }
			}
		})),
		{
			c() {
				(t = E()), w(e.$$.fragment), this.h();
			},
			l(a) {
				W('svelte-vkl5de', document.head).forEach(S), (t = y(a)), v(e.$$.fragment, a), this.h();
			},
			h() {
				document.title = 'Sign In - Typyst';
			},
			m(a, o) {
				q(a, t, o), b(e, a, o), (s = !0);
			},
			p(a, [o]) {
				const p = {};
				o & 1055 && (p.$$scope = { dirty: o, ctx: a }), e.$set(p);
			},
			i(a) {
				s || ($(e.$$.fragment, a), (s = !0));
			},
			o(a) {
				_(e.$$.fragment, a), (s = !1);
			},
			d(a) {
				a && S(t), d(e, a);
			}
		}
	);
}
function fe(r, t, e) {
	let s, a, o, p;
	I(r, ne, (i) => e(6, (a = i))), I(r, x, (i) => e(3, (o = i))), I(r, ee, (i) => e(4, (p = i)));
	let m = '',
		l = '',
		c = '';
	async function f() {
		if ((e(2, (c = '')), !m || !l)) {
			e(2, (c = 'Please fill in all fields'));
			return;
		}
		try {
			const i = await te({ email: m, password: l });
			i.data ? ae(s) : i.error && e(2, (c = i.error.message || 'Sign in failed'));
		} catch (i) {
			e(2, (c = i instanceof Error ? i.message : 'An unexpected error occurred'));
		}
	}
	function g(i) {
		(m = i), e(0, m);
	}
	function h(i) {
		(l = i), e(1, l);
	}
	return (
		(r.$$.update = () => {
			r.$$.dirty & 64 && (s = a.url.searchParams.get('redirectTo') || '/');
		}),
		[m, l, c, o, p, f, a, g, h]
	);
}
class be extends Y {
	constructor(t) {
		super(), Z(this, t, fe, le, R, {});
	}
}
export { be as component };
