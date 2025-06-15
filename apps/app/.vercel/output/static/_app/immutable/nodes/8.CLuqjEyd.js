import {
	s as ue,
	d as y,
	r as de,
	p as A,
	i as G,
	b as r,
	q as R,
	u as ce,
	m as t,
	v as fe,
	g as C,
	c as f,
	e as D,
	o as B,
	j as E,
	h as p,
	k as $,
	w as pe,
	a as le,
	f as oe,
	t as ie
} from '../chunks/wdwkOUVI.js';
import {
	S as me,
	i as he,
	d as _e,
	t as ve,
	a as ge,
	m as be,
	c as ye,
	b as we
} from '../chunks/JshcQj11.js';
import { a as Ce, i as Ee, c as xe } from '../chunks/DLjKPosD.js';
import { g as Pe } from '../chunks/DvT5znXj.js';
import { p as Le } from '../chunks/DP4HDVEx.js';
import { B as Ie } from '../chunks/SV1JYOhp.js';
function ne(a) {
	let i,
		e = (a[3] || a[4]) + '',
		s;
	return {
		c() {
			(i = p('div')), (s = ie(e)), this.h();
		},
		l(n) {
			i = f(n, 'DIV', { class: !0 });
			var _ = D(i);
			(s = oe(_, e)), _.forEach(y), this.h();
		},
		h() {
			t(i, 'class', 'text-sm text-red-600 bg-red-50 p-3 rounded-md');
		},
		m(n, _) {
			G(n, i, _), r(i, s);
		},
		p(n, _) {
			_ & 24 && e !== (e = (n[3] || n[4]) + '') && le(s, e);
		},
		d(n) {
			n && y(i);
		}
	};
}
function Te(a) {
	let i = a[5] ? 'Creating account...' : 'Sign Up',
		e;
	return {
		c() {
			e = ie(i);
		},
		l(s) {
			e = oe(s, i);
		},
		m(s, n) {
			G(s, e, n);
		},
		p(s, n) {
			n & 32 && i !== (i = s[5] ? 'Creating account...' : 'Sign Up') && le(e, i);
		},
		d(s) {
			s && y(e);
		}
	};
}
function Se(a) {
	let i,
		e,
		s,
		n,
		_ =
			'<h1 class="text-2xl font-bold">Sign Up</h1> <p class="text-muted-foreground mt-2">Create your Typyst account</p>',
		V,
		o,
		d,
		m,
		x = 'Email',
		H,
		h,
		N,
		v,
		u,
		ee = 'Password',
		J,
		g,
		K,
		S,
		te = 'Must be at least 8 characters long',
		Q,
		L,
		I,
		se = 'Confirm Password',
		W,
		b,
		X,
		j,
		T,
		Y,
		U,
		re = `<p class="text-sm text-muted-foreground">Already have an account?
				<a href="/auth/sign-in" class="text-primary hover:underline">Sign in</a></p>`,
		z,
		Z,
		ae,
		c = (a[3] || a[4]) && ne(a);
	return (
		(T = new Ie({
			props: {
				type: 'submit',
				class: 'w-full',
				disabled: a[5],
				$$slots: { default: [Te] },
				$$scope: { ctx: a }
			}
		})),
		{
			c() {
				(i = E()),
					(e = p('div')),
					(s = p('div')),
					(n = p('div')),
					(n.innerHTML = _),
					(V = E()),
					(o = p('form')),
					(d = p('div')),
					(m = p('label')),
					(m.textContent = x),
					(H = E()),
					(h = p('input')),
					(N = E()),
					(v = p('div')),
					(u = p('label')),
					(u.textContent = ee),
					(J = E()),
					(g = p('input')),
					(K = E()),
					(S = p('p')),
					(S.textContent = te),
					(Q = E()),
					(L = p('div')),
					(I = p('label')),
					(I.textContent = se),
					(W = E()),
					(b = p('input')),
					(X = E()),
					c && c.c(),
					(j = E()),
					we(T.$$.fragment),
					(Y = E()),
					(U = p('div')),
					(U.innerHTML = re),
					this.h();
			},
			l(l) {
				fe('svelte-41t9dc', document.head).forEach(y), (i = C(l)), (e = f(l, 'DIV', { class: !0 }));
				var M = D(e);
				s = f(M, 'DIV', { class: !0 });
				var k = D(s);
				(n = f(k, 'DIV', { class: !0, 'data-svelte-h': !0 })),
					B(n) !== 'svelte-1rykikf' && (n.innerHTML = _),
					(V = C(k)),
					(o = f(k, 'FORM', { class: !0 }));
				var P = D(o);
				d = f(P, 'DIV', { class: !0 });
				var F = D(d);
				(m = f(F, 'LABEL', { for: !0, class: !0, 'data-svelte-h': !0 })),
					B(m) !== 'svelte-1tub414' && (m.textContent = x),
					(H = C(F)),
					(h = f(F, 'INPUT', { id: !0, type: !0, placeholder: !0, class: !0 })),
					F.forEach(y),
					(N = C(P)),
					(v = f(P, 'DIV', { class: !0 }));
				var q = D(v);
				(u = f(q, 'LABEL', { for: !0, class: !0, 'data-svelte-h': !0 })),
					B(u) !== 'svelte-1dgoel0' && (u.textContent = ee),
					(J = C(q)),
					(g = f(q, 'INPUT', { id: !0, type: !0, placeholder: !0, class: !0 })),
					(K = C(q)),
					(S = f(q, 'P', { class: !0, 'data-svelte-h': !0 })),
					B(S) !== 'svelte-nw3x53' && (S.textContent = te),
					q.forEach(y),
					(Q = C(P)),
					(L = f(P, 'DIV', { class: !0 }));
				var O = D(L);
				(I = f(O, 'LABEL', { for: !0, class: !0, 'data-svelte-h': !0 })),
					B(I) !== 'svelte-1stg98s' && (I.textContent = se),
					(W = C(O)),
					(b = f(O, 'INPUT', { id: !0, type: !0, placeholder: !0, class: !0 })),
					O.forEach(y),
					(X = C(P)),
					c && c.l(P),
					(j = C(P)),
					ye(T.$$.fragment, P),
					P.forEach(y),
					(Y = C(k)),
					(U = f(k, 'DIV', { class: !0, 'data-svelte-h': !0 })),
					B(U) !== 'svelte-wld7zt' && (U.innerHTML = re),
					k.forEach(y),
					M.forEach(y),
					this.h();
			},
			h() {
				(document.title = 'Sign Up - Typyst'),
					t(n, 'class', 'text-center'),
					t(m, 'for', 'email'),
					t(m, 'class', 'text-sm font-medium'),
					t(h, 'id', 'email'),
					t(h, 'type', 'email'),
					t(h, 'placeholder', 'Enter your email'),
					t(
						h,
						'class',
						'w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
					),
					(h.required = !0),
					t(d, 'class', 'space-y-2'),
					t(u, 'for', 'password'),
					t(u, 'class', 'text-sm font-medium'),
					t(g, 'id', 'password'),
					t(g, 'type', 'password'),
					t(g, 'placeholder', 'Enter your password'),
					t(
						g,
						'class',
						'w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
					),
					(g.required = !0),
					t(S, 'class', 'text-xs text-muted-foreground'),
					t(v, 'class', 'space-y-2'),
					t(I, 'for', 'confirmPassword'),
					t(I, 'class', 'text-sm font-medium'),
					t(b, 'id', 'confirmPassword'),
					t(b, 'type', 'password'),
					t(b, 'placeholder', 'Confirm your password'),
					t(
						b,
						'class',
						'w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
					),
					(b.required = !0),
					t(L, 'class', 'space-y-2'),
					t(o, 'class', 'space-y-4'),
					t(U, 'class', 'text-center'),
					t(s, 'class', 'w-full max-w-md space-y-6 p-6'),
					t(e, 'class', 'flex min-h-screen items-center justify-center');
			},
			m(l, w) {
				G(l, i, w),
					G(l, e, w),
					r(e, s),
					r(s, n),
					r(s, V),
					r(s, o),
					r(o, d),
					r(d, m),
					r(d, H),
					r(d, h),
					A(h, a[0]),
					r(o, N),
					r(o, v),
					r(v, u),
					r(v, J),
					r(v, g),
					A(g, a[1]),
					r(v, K),
					r(v, S),
					r(o, Q),
					r(o, L),
					r(L, I),
					r(L, W),
					r(L, b),
					A(b, a[2]),
					r(o, X),
					c && c.m(o, null),
					r(o, j),
					be(T, o, null),
					r(s, Y),
					r(s, U),
					(z = !0),
					Z ||
						((ae = [
							R(h, 'input', a[8]),
							R(g, 'input', a[9]),
							R(b, 'input', a[10]),
							R(o, 'submit', ce(a[6]))
						]),
						(Z = !0));
			},
			p(l, [w]) {
				w & 1 && h.value !== l[0] && A(h, l[0]),
					w & 2 && g.value !== l[1] && A(g, l[1]),
					w & 4 && b.value !== l[2] && A(b, l[2]),
					l[3] || l[4]
						? c
							? c.p(l, w)
							: ((c = ne(l)), c.c(), c.m(o, j))
						: c && (c.d(1), (c = null));
				const M = {};
				w & 32 && (M.disabled = l[5]), w & 4128 && (M.$$scope = { dirty: w, ctx: l }), T.$set(M);
			},
			i(l) {
				z || (ge(T.$$.fragment, l), (z = !0));
			},
			o(l) {
				ve(T.$$.fragment, l), (z = !1);
			},
			d(l) {
				l && (y(i), y(e)), c && c.d(), _e(T), (Z = !1), de(ae);
			}
		}
	);
}
function Ue(a, i, e) {
	let s, n, _, V;
	$(a, Le, (u) => e(7, (n = u))), $(a, Ce, (u) => e(4, (_ = u))), $(a, Ee, (u) => e(5, (V = u)));
	let o = '',
		d = '',
		m = '',
		x = '';
	async function H() {
		if ((e(3, (x = '')), !o || !d || !m)) {
			e(3, (x = 'Please fill in all fields'));
			return;
		}
		if (d !== m) {
			e(3, (x = 'Passwords do not match'));
			return;
		}
		if (d.length < 8) {
			e(3, (x = 'Password must be at least 8 characters long'));
			return;
		}
		try {
			const u = await xe({ email: o, password: d, name: o.split('@')[0] });
			u.data ? Pe(s) : u.error && e(3, (x = u.error.message || 'Sign up failed'));
		} catch (u) {
			e(3, (x = u instanceof Error ? u.message : 'An unexpected error occurred'));
		}
	}
	pe(() => {});
	function h() {
		(o = this.value), e(0, o);
	}
	function N() {
		(d = this.value), e(1, d);
	}
	function v() {
		(m = this.value), e(2, m);
	}
	return (
		(a.$$.update = () => {
			a.$$.dirty & 128 && (s = n.url.searchParams.get('redirectTo') || '/');
		}),
		[o, d, m, x, _, V, H, n, h, N, v]
	);
}
class Be extends me {
	constructor(i) {
		super(), he(this, i, Ue, Se, ue, {});
	}
}
export { Be as component };
