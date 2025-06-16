import {
	s as le,
	d as m,
	q as f,
	i as ne,
	b as s,
	w as se,
	c as h,
	e as _,
	g as I,
	r as ae,
	f as Y,
	h as p,
	j as C,
	t as Z,
	k as ee
} from '../chunks/CZvU1ekx.js';
import {
	S as re,
	i as oe,
	d as O,
	t as S,
	a as b,
	e as ie,
	m as P,
	c as q,
	b as F,
	g as ce
} from '../chunks/ZuwjM_kn.js';
import { S as fe, I as ue, E as de, T as me } from '../chunks/FDKRHx79.js';
import { s as he, S as pe, h as ve, i as _e } from '../chunks/Dz2apFQ9.js';
import { c as j } from '../chunks/CTLOy2q2.js';
function te(u) {
	let e, a;
	return (
		(e = new me({ props: { hideHistory: !0, hideParentDirectories: !0 } })),
		{
			c() {
				F(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, o) {
				P(e, t, o), (a = !0);
			},
			i(t) {
				a || (b(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				S(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				O(e, t);
			}
		}
	);
}
function ge(u) {
	let e,
		a,
		t,
		o,
		d,
		i,
		G = 'Select a task to get started',
		H,
		w,
		v,
		y,
		J = he(pe['app:open-collection']) + '',
		K,
		N,
		D,
		U,
		c,
		g,
		A,
		$,
		B,
		x,
		T,
		k,
		R,
		L,
		l = u[0].editor.show_toolbar && te();
	return (
		(g = new fe({})),
		($ = new ue({})),
		(x = new de({})),
		{
			c() {
				(e = p('div')),
					l && l.c(),
					(a = C()),
					(t = p('div')),
					(o = p('div')),
					(d = p('div')),
					(i = p('p')),
					(i.textContent = G),
					(H = C()),
					(w = p('div')),
					(v = p('button')),
					(y = p('span')),
					(K = Z(J)),
					(N = Z(`
						Open Collection`)),
					(U = C()),
					(c = p('div')),
					F(g.$$.fragment),
					(A = C()),
					F($.$$.fragment),
					(B = C()),
					F(x.$$.fragment),
					this.h();
			},
			l(n) {
				e = h(n, 'DIV', { class: !0 });
				var r = _(e);
				l && l.l(r), (a = I(r)), (t = h(r, 'DIV', { class: !0 }));
				var M = _(t);
				o = h(M, 'DIV', { class: !0 });
				var Q = _(o);
				d = h(Q, 'DIV', { class: !0 });
				var V = _(d);
				(i = h(V, 'P', { class: !0, 'data-svelte-h': !0 })),
					ae(i) !== 'svelte-1arh60l' && (i.textContent = G),
					(H = I(V)),
					(w = h(V, 'DIV', { class: !0 }));
				var W = _(w);
				v = h(W, 'BUTTON', { class: !0 });
				var z = _(v);
				y = h(z, 'SPAN', { class: !0 });
				var X = _(y);
				(K = Y(X, J)),
					X.forEach(m),
					(N = Y(
						z,
						`
						Open Collection`
					)),
					z.forEach(m),
					W.forEach(m),
					V.forEach(m),
					Q.forEach(m),
					M.forEach(m),
					(U = I(r)),
					(c = h(r, 'DIV', { class: !0 }));
				var E = _(c);
				q(g.$$.fragment, E),
					(A = I(E)),
					q($.$$.fragment, E),
					(B = I(E)),
					q(x.$$.fragment, E),
					E.forEach(m),
					r.forEach(m),
					this.h();
			},
			h() {
				f(i, 'class', 'text-secondary-foreground/85'),
					f(
						y,
						'class',
						'pointer-events-none inline-flex h-[18px] pl-1.5 tracking-widest select-none items-center gap-1 rounded bg-secondary px-1 font-mono text-muted-foreground opacity-100'
					),
					f(
						v,
						'class',
						'text-sm gap-1.5 flex text-muted-foreground hover:text-secondary-foreground transition-colors items-center justify-center'
					),
					f(w, 'class', 'flex gap-5'),
					f(d, 'class', 'flex flex-col items-center gap-2'),
					f(o, 'class', 'flex flex-col items-center justify-center w-full h-full -mt-10'),
					f(
						t,
						'class',
						(D = j(
							'flex flex-col items-center justify-center w-full h-full -mt-10',
							u[1] !== null && 'hidden'
						))
					),
					f(c, 'class', (T = j('w-full h-full', u[1] === null && 'hidden'))),
					f(
						e,
						'class',
						'relative flex flex-col w-full h-full min-h-[calc(100vh-4.5rem)] items-start bg-secondary-background overflow-y-auto'
					);
			},
			m(n, r) {
				ne(n, e, r),
					l && l.m(e, null),
					s(e, a),
					s(e, t),
					s(t, o),
					s(o, d),
					s(d, i),
					s(d, H),
					s(d, w),
					s(w, v),
					s(v, y),
					s(y, K),
					s(v, N),
					s(e, U),
					s(e, c),
					P(g, c, null),
					s(c, A),
					P($, c, null),
					s(c, B),
					P(x, c, null),
					(k = !0),
					R || ((L = se(v, 'click', u[2])), (R = !0));
			},
			p(n, [r]) {
				n[0].editor.show_toolbar
					? l
						? r & 1 && b(l, 1)
						: ((l = te()), l.c(), b(l, 1), l.m(e, a))
					: l &&
						(ce(),
						S(l, 1, 1, () => {
							l = null;
						}),
						ie()),
					(!k ||
						(r & 2 &&
							D !==
								(D = j(
									'flex flex-col items-center justify-center w-full h-full -mt-10',
									n[1] !== null && 'hidden'
								)))) &&
						f(t, 'class', D),
					(!k || (r & 2 && T !== (T = j('w-full h-full', n[1] === null && 'hidden')))) &&
						f(c, 'class', T);
			},
			i(n) {
				k || (b(l), b(g.$$.fragment, n), b($.$$.fragment, n), b(x.$$.fragment, n), (k = !0));
			},
			o(n) {
				S(l), S(g.$$.fragment, n), S($.$$.fragment, n), S(x.$$.fragment, n), (k = !1);
			},
			d(n) {
				n && m(e), l && l.d(), O(g), O($), O(x), (R = !1), L();
			}
		}
	);
}
function $e(u, e, a) {
	let t, o;
	return (
		ee(u, ve, (i) => a(0, (t = i))),
		ee(u, _e, (i) => a(1, (o = i))),
		[
			t,
			o,
			() => {
				document.dispatchEvent(new KeyboardEvent('keydown', { key: 'o', metaKey: !0 }));
			}
		]
	);
}
class Ee extends re {
	constructor(e) {
		super(), oe(this, e, $e, ge, le, {});
	}
}
export { Ee as component };
