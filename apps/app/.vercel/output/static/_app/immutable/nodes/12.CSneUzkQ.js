import {
	s as ee,
	d as S,
	i as G,
	x as te,
	g as $,
	j as b,
	k as I,
	y as M,
	z as j,
	b as _,
	w as ae,
	A as re,
	q as z,
	c as D,
	e as X,
	r as ne,
	h as O,
	a as se,
	f as oe,
	t as ue
} from '../chunks/CZvU1ekx.js';
import {
	S as ie,
	i as le,
	d as v,
	t as w,
	a as y,
	m as E,
	c as C,
	b as P,
	f as R
} from '../chunks/ZuwjM_kn.js';
import { e as pe, i as fe, b as me } from '../chunks/jFyWpFis.js';
import { g as ce } from '../chunks/Ckl9wd6U.js';
import { p as de } from '../chunks/iLYtrjRH.js';
import { B as ge } from '../chunks/CTLOy2q2.js';
import { A as he } from '../chunks/CM7uU_GR.js';
import { A as V, a as _e } from '../chunks/BpfEVprH.js';
function $e(s) {
	let a = s[5] ? 'Creating account...' : 'Sign Up',
		e;
	return {
		c() {
			e = ue(a);
		},
		l(u) {
			e = oe(u, a);
		},
		m(u, n) {
			G(u, e, n);
		},
		p(u, n) {
			n & 32 && a !== (a = u[5] ? 'Creating account...' : 'Sign Up') && se(e, a);
		},
		d(u) {
			u && S(e);
		}
	};
}
function be(s) {
	let a,
		e,
		u,
		n,
		i,
		l,
		c,
		f,
		p,
		d = 'Must be at least 8 characters long',
		A,
		m,
		T,
		U,
		r,
		q,
		g,
		k,
		L,
		H;
	function Y(t) {
		s[8](t);
	}
	let J = { type: 'email', label: 'Email', placeholder: 'Enter your email', required: !0 };
	s[0] !== void 0 && (J.value = s[0]), (e = new V({ props: J })), M.push(() => R(e, 'value', Y));
	function Z(t) {
		s[9](t);
	}
	let K = { type: 'password', label: 'Password', placeholder: 'Enter your password', required: !0 };
	s[1] !== void 0 && (K.value = s[1]), (l = new V({ props: K })), M.push(() => R(l, 'value', Z));
	function x(t) {
		s[10](t);
	}
	let N = {
		type: 'password',
		label: 'Confirm Password',
		placeholder: 'Confirm your password',
		required: !0
	};
	return (
		s[2] !== void 0 && (N.value = s[2]),
		(m = new V({ props: N })),
		M.push(() => R(m, 'value', x)),
		(r = new _e({ props: { error: s[4], localError: s[3] } })),
		(g = new ge({
			props: {
				type: 'submit',
				class: 'w-full',
				disabled: s[5],
				$$slots: { default: [$e] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(a = O('form')),
					P(e.$$.fragment),
					(n = b()),
					(i = O('div')),
					P(l.$$.fragment),
					(f = b()),
					(p = O('p')),
					(p.textContent = d),
					(A = b()),
					P(m.$$.fragment),
					(U = b()),
					P(r.$$.fragment),
					(q = b()),
					P(g.$$.fragment),
					this.h();
			},
			l(t) {
				a = D(t, 'FORM', { class: !0 });
				var o = X(a);
				C(e.$$.fragment, o), (n = $(o)), (i = D(o, 'DIV', { class: !0 }));
				var h = X(i);
				C(l.$$.fragment, h),
					(f = $(h)),
					(p = D(h, 'P', { class: !0, 'data-svelte-h': !0 })),
					ne(p) !== 'svelte-nw3x53' && (p.textContent = d),
					h.forEach(S),
					(A = $(o)),
					C(m.$$.fragment, o),
					(U = $(o)),
					C(r.$$.fragment, o),
					(q = $(o)),
					C(g.$$.fragment, o),
					o.forEach(S),
					this.h();
			},
			h() {
				z(p, 'class', 'text-xs text-muted-foreground'),
					z(i, 'class', 'space-y-2'),
					z(a, 'class', 'space-y-4');
			},
			m(t, o) {
				G(t, a, o),
					E(e, a, null),
					_(a, n),
					_(a, i),
					E(l, i, null),
					_(i, f),
					_(i, p),
					_(a, A),
					E(m, a, null),
					_(a, U),
					E(r, a, null),
					_(a, q),
					E(g, a, null),
					(k = !0),
					L || ((H = ae(a, 'submit', re(s[6]))), (L = !0));
			},
			p(t, o) {
				const h = {};
				!u && o & 1 && ((u = !0), (h.value = t[0]), j(() => (u = !1))), e.$set(h);
				const Q = {};
				!c && o & 2 && ((c = !0), (Q.value = t[1]), j(() => (c = !1))), l.$set(Q);
				const W = {};
				!T && o & 4 && ((T = !0), (W.value = t[2]), j(() => (T = !1))), m.$set(W);
				const B = {};
				o & 16 && (B.error = t[4]), o & 8 && (B.localError = t[3]), r.$set(B);
				const F = {};
				o & 32 && (F.disabled = t[5]), o & 4128 && (F.$$scope = { dirty: o, ctx: t }), g.$set(F);
			},
			i(t) {
				k ||
					(y(e.$$.fragment, t),
					y(l.$$.fragment, t),
					y(m.$$.fragment, t),
					y(r.$$.fragment, t),
					y(g.$$.fragment, t),
					(k = !0));
			},
			o(t) {
				w(e.$$.fragment, t),
					w(l.$$.fragment, t),
					w(m.$$.fragment, t),
					w(r.$$.fragment, t),
					w(g.$$.fragment, t),
					(k = !1);
			},
			d(t) {
				t && S(a), v(e), v(l), v(m), v(r), v(g), (L = !1), H();
			}
		}
	);
}
function ve(s) {
	let a, e, u;
	return (
		(e = new he({
			props: {
				title: 'Sign Up',
				subtitle: 'Create your Typyst account',
				alternativeText: 'Already have an account?',
				alternativeLink: '/auth/sign-in',
				alternativeLinkText: 'Sign in',
				$$slots: { default: [be] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(a = b()), P(e.$$.fragment), this.h();
			},
			l(n) {
				te('svelte-41t9dc', document.head).forEach(S), (a = $(n)), C(e.$$.fragment, n), this.h();
			},
			h() {
				document.title = 'Sign Up - Typyst';
			},
			m(n, i) {
				G(n, a, i), E(e, n, i), (u = !0);
			},
			p(n, [i]) {
				const l = {};
				i & 4159 && (l.$$scope = { dirty: i, ctx: n }), e.$set(l);
			},
			i(n) {
				u || (y(e.$$.fragment, n), (u = !0));
			},
			o(n) {
				w(e.$$.fragment, n), (u = !1);
			},
			d(n) {
				n && S(a), v(e, n);
			}
		}
	);
}
function we(s, a, e) {
	let u, n, i, l;
	I(s, de, (r) => e(7, (n = r))), I(s, pe, (r) => e(4, (i = r))), I(s, fe, (r) => e(5, (l = r)));
	let c = '',
		f = '',
		p = '',
		d = '';
	async function A() {
		if ((e(3, (d = '')), !c || !f || !p)) {
			e(3, (d = 'Please fill in all fields'));
			return;
		}
		if (f !== p) {
			e(3, (d = 'Passwords do not match'));
			return;
		}
		if (f.length < 8) {
			e(3, (d = 'Password must be at least 8 characters long'));
			return;
		}
		try {
			const r = await me({ email: c, password: f, name: c.split('@')[0] });
			r.data ? ce(u) : r.error && e(3, (d = r.error.message || 'Sign up failed'));
		} catch (r) {
			e(3, (d = r instanceof Error ? r.message : 'An unexpected error occurred'));
		}
	}
	function m(r) {
		(c = r), e(0, c);
	}
	function T(r) {
		(f = r), e(1, f);
	}
	function U(r) {
		(p = r), e(2, p);
	}
	return (
		(s.$$.update = () => {
			s.$$.dirty & 128 && (u = n.url.searchParams.get('redirectTo') || '/');
		}),
		[c, f, p, d, i, l, A, n, m, T, U]
	);
}
class ke extends ie {
	constructor(a) {
		super(), le(this, a, we, ve, ee, {});
	}
}
export { ke as component };
