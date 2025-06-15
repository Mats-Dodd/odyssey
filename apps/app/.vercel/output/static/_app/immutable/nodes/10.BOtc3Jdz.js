import {
	s as me,
	d,
	r as pe,
	m as o,
	i as he,
	b as n,
	q as ie,
	c as m,
	e as h,
	g as I,
	o as _e,
	f as U,
	h as p,
	j,
	t as q,
	k as te
} from '../chunks/wdwkOUVI.js';
import {
	S as ve,
	i as ge,
	d as B,
	t as D,
	a as k,
	e as xe,
	m as F,
	c as K,
	b as H,
	g as $e
} from '../chunks/JshcQj11.js';
import { S as be, I as ye, E as we, T as ke } from '../chunks/DirNFIJf.js';
import { s as fe, f as Ee, S as ue, h as Se, i as Ce, c as Te } from '../chunks/DZQ4DMzf.js';
import { c as A } from '../chunks/SV1JYOhp.js';
function de(i) {
	let e, a;
	return (
		(e = new ke({})),
		{
			c() {
				H(e.$$.fragment);
			},
			l(t) {
				K(e.$$.fragment, t);
			},
			m(t, f) {
				F(e, t, f), (a = !0);
			},
			i(t) {
				a || (k(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				D(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				B(e, t);
			}
		}
	);
}
function Ie(i) {
	let e,
		a,
		t,
		f,
		r,
		v,
		R = 'Select a note to start editing',
		_,
		g,
		x,
		E,
		ne = fe(ue['app:open-collection']) + '',
		z,
		G,
		J,
		$,
		S,
		le = fe(ue['notes:create']) + '',
		L,
		M,
		V,
		Q,
		u,
		b,
		W,
		y,
		X,
		w,
		N,
		C,
		Y,
		se,
		l = i[0].editor.show_toolbar && de();
	return (
		(b = new be({})),
		(y = new ye({})),
		(w = new we({})),
		{
			c() {
				(e = p('div')),
					l && l.c(),
					(a = j()),
					(t = p('div')),
					(f = p('div')),
					(r = p('div')),
					(v = p('p')),
					(v.textContent = R),
					(_ = j()),
					(g = p('div')),
					(x = p('button')),
					(E = p('span')),
					(z = q(ne)),
					(G = q(`
						Open Collection`)),
					(J = j()),
					($ = p('button')),
					(S = p('span')),
					(L = q(le)),
					(M = q(`
						Create note`)),
					(Q = j()),
					(u = p('div')),
					H(b.$$.fragment),
					(W = j()),
					H(y.$$.fragment),
					(X = j()),
					H(w.$$.fragment),
					this.h();
			},
			l(s) {
				e = m(s, 'DIV', { class: !0 });
				var c = h(e);
				l && l.l(c), (a = I(c)), (t = m(c, 'DIV', { class: !0 }));
				var ae = h(t);
				f = m(ae, 'DIV', { class: !0 });
				var oe = h(f);
				r = m(oe, 'DIV', { class: !0 });
				var O = h(r);
				(v = m(O, 'P', { class: !0, 'data-svelte-h': !0 })),
					_e(v) !== 'svelte-1sc7t87' && (v.textContent = R),
					(_ = I(O)),
					(g = m(O, 'DIV', { class: !0 }));
				var P = h(g);
				x = m(P, 'BUTTON', { class: !0 });
				var Z = h(x);
				E = m(Z, 'SPAN', { class: !0 });
				var re = h(E);
				(z = U(re, ne)),
					re.forEach(d),
					(G = U(
						Z,
						`
						Open Collection`
					)),
					Z.forEach(d),
					(J = I(P)),
					($ = m(P, 'BUTTON', { class: !0 }));
				var ee = h($);
				S = m(ee, 'SPAN', { class: !0 });
				var ce = h(S);
				(L = U(ce, le)),
					ce.forEach(d),
					(M = U(
						ee,
						`
						Create note`
					)),
					ee.forEach(d),
					P.forEach(d),
					O.forEach(d),
					oe.forEach(d),
					ae.forEach(d),
					(Q = I(c)),
					(u = m(c, 'DIV', { class: !0 }));
				var T = h(u);
				K(b.$$.fragment, T),
					(W = I(T)),
					K(y.$$.fragment, T),
					(X = I(T)),
					K(w.$$.fragment, T),
					T.forEach(d),
					c.forEach(d),
					this.h();
			},
			h() {
				o(v, 'class', 'text-secondary-foreground/85'),
					o(
						E,
						'class',
						'pointer-events-none inline-flex h-[18px] pl-1.5 tracking-widest select-none items-center gap-1 rounded bg-secondary px-1 font-mono text-muted-foreground opacity-100'
					),
					o(
						x,
						'class',
						'text-sm gap-1.5 flex text-muted-foreground hover:text-secondary-foreground transition-colors items-center justify-center'
					),
					o(
						S,
						'class',
						'pointer-events-none inline-flex h-[18px] pl-1.5 tracking-widest select-none items-center gap-1 rounded bg-secondary px-1 font-mono text-muted-foreground opacity-100'
					),
					o(
						$,
						'class',
						'text-sm gap-1.5 flex text-muted-foreground hover:text-secondary-foreground transition-colors items-center justify-center'
					),
					o(g, 'class', 'flex gap-5'),
					o(r, 'class', 'flex flex-col items-center gap-2'),
					o(f, 'class', 'flex flex-col items-center justify-center w-full h-full -mt-10'),
					o(
						t,
						'class',
						(V = A(
							'flex flex-col items-center justify-center w-full h-full -mt-10',
							i[1] !== null && 'hidden'
						))
					),
					o(u, 'class', (N = A('w-full h-full', i[1] === null && 'hidden'))),
					o(
						e,
						'class',
						'relative flex flex-col w-full h-full min-h-[calc(100vh-4.5rem)] items-start bg-secondary-background overflow-y-auto'
					);
			},
			m(s, c) {
				he(s, e, c),
					l && l.m(e, null),
					n(e, a),
					n(e, t),
					n(t, f),
					n(f, r),
					n(r, v),
					n(r, _),
					n(r, g),
					n(g, x),
					n(x, E),
					n(E, z),
					n(x, G),
					n(g, J),
					n(g, $),
					n($, S),
					n(S, L),
					n($, M),
					n(e, Q),
					n(e, u),
					F(b, u, null),
					n(u, W),
					F(y, u, null),
					n(u, X),
					F(w, u, null),
					(C = !0),
					Y || ((se = [ie(x, 'click', i[3]), ie($, 'click', i[4])]), (Y = !0));
			},
			p(s, [c]) {
				s[0].editor.show_toolbar
					? l
						? c & 1 && k(l, 1)
						: ((l = de()), l.c(), k(l, 1), l.m(e, a))
					: l &&
						($e(),
						D(l, 1, 1, () => {
							l = null;
						}),
						xe()),
					(!C ||
						(c & 2 &&
							V !==
								(V = A(
									'flex flex-col items-center justify-center w-full h-full -mt-10',
									s[1] !== null && 'hidden'
								)))) &&
						o(t, 'class', V),
					(!C || (c & 2 && N !== (N = A('w-full h-full', s[1] === null && 'hidden')))) &&
						o(u, 'class', N);
			},
			i(s) {
				C || (k(l), k(b.$$.fragment, s), k(y.$$.fragment, s), k(w.$$.fragment, s), (C = !0));
			},
			o(s) {
				D(l), D(b.$$.fragment, s), D(y.$$.fragment, s), D(w.$$.fragment, s), (C = !1);
			},
			d(s) {
				s && d(e), l && l.d(), B(b), B(y), B(w), (Y = !1), pe(se);
			}
		}
	);
}
function je(i, e, a) {
	let t, f, r;
	return (
		te(i, Se, (_) => a(0, (t = _))),
		te(i, Ce, (_) => a(1, (f = _))),
		te(i, Te, (_) => a(2, (r = _))),
		[
			t,
			f,
			r,
			() => {
				document.dispatchEvent(new KeyboardEvent('keydown', { key: 'o', metaKey: !0 }));
			},
			() => {
				Ee(r);
			}
		]
	);
}
class Ue extends ve {
	constructor(e) {
		super(), ge(this, e, je, Ie, me, {});
	}
}
export { Ue as component };
