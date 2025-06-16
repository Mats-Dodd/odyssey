import {
	s as $,
	d as g,
	r as ee,
	p as H,
	i as N,
	b as i,
	q as W,
	u as te,
	m as o,
	v as se,
	g as S,
	c as _,
	e as V,
	o as A,
	j as x,
	h as v,
	k as z,
	w as re,
	a as X,
	f as Y,
	t as Z
} from '../chunks/wdwkOUVI.js';
import {
	S as ae,
	i as ne,
	d as le,
	t as oe,
	a as ie,
	m as ue,
	c as de,
	b as ce
} from '../chunks/JshcQj11.js';
import { a as fe, i as pe, s as me } from '../chunks/DLjKPosD.js';
import { g as he } from '../chunks/h5yhFqLT.js';
import { p as _e } from '../chunks/D_91qvAT.js';
import { B as ve } from '../chunks/SV1JYOhp.js';
function Q(r) {
	let n,
		e = (r[2] || r[3]) + '',
		t;
	return {
		c() {
			(n = v('div')), (t = Z(e)), this.h();
		},
		l(s) {
			n = _(s, 'DIV', { class: !0 });
			var m = V(n);
			(t = Y(m, e)), m.forEach(g), this.h();
		},
		h() {
			o(n, 'class', 'text-sm text-red-600 bg-red-50 p-3 rounded-md');
		},
		m(s, m) {
			N(s, n, m), i(n, t);
		},
		p(s, m) {
			m & 12 && e !== (e = (s[2] || s[3]) + '') && X(t, e);
		},
		d(s) {
			s && g(n);
		}
	};
}
function ge(r) {
	let n = r[4] ? 'Signing in...' : 'Sign In',
		e;
	return {
		c() {
			e = Z(n);
		},
		l(t) {
			e = Y(t, n);
		},
		m(t, s) {
			N(t, e, s);
		},
		p(t, s) {
			s & 16 && n !== (n = t[4] ? 'Signing in...' : 'Sign In') && X(e, n);
		},
		d(t) {
			t && g(e);
		}
	};
}
function be(r) {
	let n,
		e,
		t,
		s,
		m =
			'<h1 class="text-2xl font-bold">Sign In</h1> <p class="text-muted-foreground mt-2">Welcome back to Typyst</p>',
		T,
		l,
		c,
		f,
		P = 'Email',
		M,
		p,
		u,
		y,
		E,
		G = 'Password',
		U,
		h,
		F,
		k,
		I,
		O,
		L,
		J = `<p class="text-sm text-muted-foreground">Don&#39;t have an account?
				<a href="/auth/sign-up" class="text-primary hover:underline">Sign up</a></p>`,
		q,
		R,
		K,
		d = (r[2] || r[3]) && Q(r);
	return (
		(I = new ve({
			props: {
				type: 'submit',
				class: 'w-full',
				disabled: r[4],
				$$slots: { default: [ge] },
				$$scope: { ctx: r }
			}
		})),
		{
			c() {
				(n = x()),
					(e = v('div')),
					(t = v('div')),
					(s = v('div')),
					(s.innerHTML = m),
					(T = x()),
					(l = v('form')),
					(c = v('div')),
					(f = v('label')),
					(f.textContent = P),
					(M = x()),
					(p = v('input')),
					(u = x()),
					(y = v('div')),
					(E = v('label')),
					(E.textContent = G),
					(U = x()),
					(h = v('input')),
					(F = x()),
					d && d.c(),
					(k = x()),
					ce(I.$$.fragment),
					(O = x()),
					(L = v('div')),
					(L.innerHTML = J),
					this.h();
			},
			l(a) {
				se('svelte-vkl5de', document.head).forEach(g), (n = S(a)), (e = _(a, 'DIV', { class: !0 }));
				var C = V(e);
				t = _(C, 'DIV', { class: !0 });
				var D = V(t);
				(s = _(D, 'DIV', { class: !0, 'data-svelte-h': !0 })),
					A(s) !== 'svelte-1q26svj' && (s.innerHTML = m),
					(T = S(D)),
					(l = _(D, 'FORM', { class: !0 }));
				var w = V(l);
				c = _(w, 'DIV', { class: !0 });
				var j = V(c);
				(f = _(j, 'LABEL', { for: !0, class: !0, 'data-svelte-h': !0 })),
					A(f) !== 'svelte-1tub414' && (f.textContent = P),
					(M = S(j)),
					(p = _(j, 'INPUT', { id: !0, type: !0, placeholder: !0, class: !0 })),
					j.forEach(g),
					(u = S(w)),
					(y = _(w, 'DIV', { class: !0 }));
				var B = V(y);
				(E = _(B, 'LABEL', { for: !0, class: !0, 'data-svelte-h': !0 })),
					A(E) !== 'svelte-1dgoel0' && (E.textContent = G),
					(U = S(B)),
					(h = _(B, 'INPUT', { id: !0, type: !0, placeholder: !0, class: !0 })),
					B.forEach(g),
					(F = S(w)),
					d && d.l(w),
					(k = S(w)),
					de(I.$$.fragment, w),
					w.forEach(g),
					(O = S(D)),
					(L = _(D, 'DIV', { class: !0, 'data-svelte-h': !0 })),
					A(L) !== 'svelte-s7vxjf' && (L.innerHTML = J),
					D.forEach(g),
					C.forEach(g),
					this.h();
			},
			h() {
				(document.title = 'Sign In - Typyst'),
					o(s, 'class', 'text-center'),
					o(f, 'for', 'email'),
					o(f, 'class', 'text-sm font-medium'),
					o(p, 'id', 'email'),
					o(p, 'type', 'email'),
					o(p, 'placeholder', 'Enter your email'),
					o(
						p,
						'class',
						'w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
					),
					(p.required = !0),
					o(c, 'class', 'space-y-2'),
					o(E, 'for', 'password'),
					o(E, 'class', 'text-sm font-medium'),
					o(h, 'id', 'password'),
					o(h, 'type', 'password'),
					o(h, 'placeholder', 'Enter your password'),
					o(
						h,
						'class',
						'w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
					),
					(h.required = !0),
					o(y, 'class', 'space-y-2'),
					o(l, 'class', 'space-y-4'),
					o(L, 'class', 'text-center'),
					o(t, 'class', 'w-full max-w-md space-y-6 p-6'),
					o(e, 'class', 'flex min-h-screen items-center justify-center');
			},
			m(a, b) {
				N(a, n, b),
					N(a, e, b),
					i(e, t),
					i(t, s),
					i(t, T),
					i(t, l),
					i(l, c),
					i(c, f),
					i(c, M),
					i(c, p),
					H(p, r[0]),
					i(l, u),
					i(l, y),
					i(y, E),
					i(y, U),
					i(y, h),
					H(h, r[1]),
					i(l, F),
					d && d.m(l, null),
					i(l, k),
					ue(I, l, null),
					i(t, O),
					i(t, L),
					(q = !0),
					R ||
						((K = [W(p, 'input', r[7]), W(h, 'input', r[8]), W(l, 'submit', te(r[5]))]), (R = !0));
			},
			p(a, [b]) {
				b & 1 && p.value !== a[0] && H(p, a[0]),
					b & 2 && h.value !== a[1] && H(h, a[1]),
					a[2] || a[3]
						? d
							? d.p(a, b)
							: ((d = Q(a)), d.c(), d.m(l, k))
						: d && (d.d(1), (d = null));
				const C = {};
				b & 16 && (C.disabled = a[4]), b & 1040 && (C.$$scope = { dirty: b, ctx: a }), I.$set(C);
			},
			i(a) {
				q || (ie(I.$$.fragment, a), (q = !0));
			},
			o(a) {
				oe(I.$$.fragment, a), (q = !1);
			},
			d(a) {
				a && (g(n), g(e)), d && d.d(), le(I), (R = !1), ee(K);
			}
		}
	);
}
function ye(r, n, e) {
	let t, s, m, T;
	z(r, _e, (u) => e(6, (s = u))), z(r, fe, (u) => e(3, (m = u))), z(r, pe, (u) => e(4, (T = u)));
	let l = '',
		c = '',
		f = '';
	async function P() {
		if ((e(2, (f = '')), !l || !c)) {
			e(2, (f = 'Please fill in all fields'));
			return;
		}
		try {
			const u = await me({ email: l, password: c });
			u.data ? he(t) : u.error && e(2, (f = u.error.message || 'Sign in failed'));
		} catch (u) {
			e(2, (f = u instanceof Error ? u.message : 'An unexpected error occurred'));
		}
	}
	re(() => {});
	function M() {
		(l = this.value), e(0, l);
	}
	function p() {
		(c = this.value), e(1, c);
	}
	return (
		(r.$$.update = () => {
			r.$$.dirty & 64 && (t = s.url.searchParams.get('redirectTo') || '/');
		}),
		[l, c, f, m, T, P, s, M, p]
	);
}
class Te extends ae {
	constructor(n) {
		super(), ne(this, n, ye, be, $, {});
	}
}
export { Te as component };
