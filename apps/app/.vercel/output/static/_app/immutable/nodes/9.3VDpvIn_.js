import {
	s as pe,
	d as u,
	r as he,
	m as a,
	i as ge,
	b as t,
	q as fe,
	c as m,
	e as g,
	g as E,
	o as _e,
	f as K,
	h as p,
	j as C,
	t as R,
	k as re
} from '../chunks/wdwkOUVI.js';
import {
	S as ve,
	i as $e,
	d as N,
	t as T,
	a as y,
	e as xe,
	m as P,
	c as U,
	b as q,
	g as ye
} from '../chunks/JshcQj11.js';
import { S as be, I as we, E as ke, T as Se } from '../chunks/DirNFIJf.js';
import { s as ue, f as Ee, S as Ce, h as Te, i as Ie, c as De } from '../chunks/DZQ4DMzf.js';
import { S as je } from '../chunks/DociSdig.js';
import { c as z } from '../chunks/SV1JYOhp.js';
function me(c) {
	let e, l;
	return (
		(e = new Se({ props: { hideHistory: !0, hideParentDirectories: !0 } })),
		{
			c() {
				q(e.$$.fragment);
			},
			l(n) {
				U(e.$$.fragment, n);
			},
			m(n, d) {
				P(e, n, d), (l = !0);
			},
			i(n) {
				l || (y(e.$$.fragment, n), (l = !0));
			},
			o(n) {
				T(e.$$.fragment, n), (l = !1);
			},
			d(n) {
				N(e, n);
			}
		}
	);
}
function Oe(c) {
	let e,
		l,
		n,
		d,
		o,
		v,
		G = 'Select a daily note to get started',
		_,
		$,
		x,
		I,
		se = ue(Ce['app:open-collection']) + '',
		J,
		L,
		M,
		h,
		b,
		Q,
		D,
		le = ue({ key: 'd', command: !0 }) + '',
		W,
		X,
		A,
		Y,
		f,
		w,
		Z,
		k,
		ee,
		S,
		B,
		j,
		te,
		ae,
		r = c[0].editor.show_toolbar && me();
	return (
		(b = new je({ props: { options: { key: 'd', command: !0 } } })),
		(w = new be({})),
		(k = new we({ props: { preCheckRegex: /^\d{4}-\d{2}-\d{2}$/ } })),
		(S = new ke({})),
		{
			c() {
				(e = p('div')),
					r && r.c(),
					(l = C()),
					(n = p('div')),
					(d = p('div')),
					(o = p('div')),
					(v = p('p')),
					(v.textContent = G),
					(_ = C()),
					($ = p('div')),
					(x = p('button')),
					(I = p('span')),
					(J = R(se)),
					(L = R(`
						Open Collection`)),
					(M = C()),
					(h = p('button')),
					q(b.$$.fragment),
					(Q = C()),
					(D = p('span')),
					(W = R(le)),
					(X = R(`
						Create today's note`)),
					(Y = C()),
					(f = p('div')),
					q(w.$$.fragment),
					(Z = C()),
					q(k.$$.fragment),
					(ee = C()),
					q(S.$$.fragment),
					this.h();
			},
			l(s) {
				e = m(s, 'DIV', { class: !0 });
				var i = g(e);
				r && r.l(i), (l = E(i)), (n = m(i, 'DIV', { class: !0 }));
				var oe = g(n);
				d = m(oe, 'DIV', { class: !0 });
				var ie = g(d);
				o = m(ie, 'DIV', { class: !0 });
				var F = g(o);
				(v = m(F, 'P', { class: !0, 'data-svelte-h': !0 })),
					_e(v) !== 'svelte-19ugwfr' && (v.textContent = G),
					(_ = E(F)),
					($ = m(F, 'DIV', { class: !0 }));
				var H = g($);
				x = m(H, 'BUTTON', { class: !0 });
				var ne = g(x);
				I = m(ne, 'SPAN', { class: !0 });
				var ce = g(I);
				(J = K(ce, se)),
					ce.forEach(u),
					(L = K(
						ne,
						`
						Open Collection`
					)),
					ne.forEach(u),
					(M = E(H)),
					(h = m(H, 'BUTTON', { class: !0 }));
				var V = g(h);
				U(b.$$.fragment, V), (Q = E(V)), (D = m(V, 'SPAN', { class: !0 }));
				var de = g(D);
				(W = K(de, le)),
					de.forEach(u),
					(X = K(
						V,
						`
						Create today's note`
					)),
					V.forEach(u),
					H.forEach(u),
					F.forEach(u),
					ie.forEach(u),
					oe.forEach(u),
					(Y = E(i)),
					(f = m(i, 'DIV', { class: !0 }));
				var O = g(f);
				U(w.$$.fragment, O),
					(Z = E(O)),
					U(k.$$.fragment, O),
					(ee = E(O)),
					U(S.$$.fragment, O),
					O.forEach(u),
					i.forEach(u),
					this.h();
			},
			h() {
				a(v, 'class', 'text-secondary-foreground/85'),
					a(
						I,
						'class',
						'pointer-events-none inline-flex h-[18px] pl-1.5 tracking-widest select-none items-center gap-1 rounded bg-secondary px-1 font-mono text-muted-foreground opacity-100'
					),
					a(
						x,
						'class',
						'text-sm gap-1.5 flex text-muted-foreground hover:text-secondary-foreground transition-colors items-center justify-center'
					),
					a(
						D,
						'class',
						'pointer-events-none inline-flex h-[18px] pl-1.5 tracking-widest select-none items-center gap-1 rounded bg-secondary px-1 font-mono text-muted-foreground opacity-100'
					),
					a(
						h,
						'class',
						'text-sm gap-1.5 flex text-muted-foreground hover:text-secondary-foreground transition-colors items-center justify-center'
					),
					a($, 'class', 'flex gap-5'),
					a(o, 'class', 'flex flex-col items-center gap-2'),
					a(d, 'class', 'flex flex-col items-center justify-center w-full h-full -mt-10'),
					a(
						n,
						'class',
						(A = z(
							'flex flex-col items-center justify-center w-full h-full -mt-10',
							c[1] !== null && 'hidden'
						))
					),
					a(f, 'class', (B = z('w-full h-full', c[1] === null && 'hidden'))),
					a(
						e,
						'class',
						'relative flex flex-col w-full h-full min-h-[calc(100vh-4.5rem)] items-start bg-secondary-background overflow-y-auto'
					);
			},
			m(s, i) {
				ge(s, e, i),
					r && r.m(e, null),
					t(e, l),
					t(e, n),
					t(n, d),
					t(d, o),
					t(o, v),
					t(o, _),
					t(o, $),
					t($, x),
					t(x, I),
					t(I, J),
					t(x, L),
					t($, M),
					t($, h),
					P(b, h, null),
					t(h, Q),
					t(h, D),
					t(D, W),
					t(h, X),
					t(e, Y),
					t(e, f),
					P(w, f, null),
					t(f, Z),
					P(k, f, null),
					t(f, ee),
					P(S, f, null),
					(j = !0),
					te || ((ae = [fe(x, 'click', c[3]), fe(h, 'click', c[4])]), (te = !0));
			},
			p(s, [i]) {
				s[0].editor.show_toolbar
					? r
						? i & 1 && y(r, 1)
						: ((r = me()), r.c(), y(r, 1), r.m(e, l))
					: r &&
						(ye(),
						T(r, 1, 1, () => {
							r = null;
						}),
						xe()),
					(!j ||
						(i & 2 &&
							A !==
								(A = z(
									'flex flex-col items-center justify-center w-full h-full -mt-10',
									s[1] !== null && 'hidden'
								)))) &&
						a(n, 'class', A),
					(!j || (i & 2 && B !== (B = z('w-full h-full', s[1] === null && 'hidden')))) &&
						a(f, 'class', B);
			},
			i(s) {
				j ||
					(y(r),
					y(b.$$.fragment, s),
					y(w.$$.fragment, s),
					y(k.$$.fragment, s),
					y(S.$$.fragment, s),
					(j = !0));
			},
			o(s) {
				T(r),
					T(b.$$.fragment, s),
					T(w.$$.fragment, s),
					T(k.$$.fragment, s),
					T(S.$$.fragment, s),
					(j = !1);
			},
			d(s) {
				s && u(e), r && r.d(), N(b), N(w), N(k), N(S), (te = !1), he(ae);
			}
		}
	);
}
function Ve(c, e, l) {
	let n, d, o;
	return (
		re(c, Te, (_) => l(0, (n = _))),
		re(c, Ie, (_) => l(1, (d = _))),
		re(c, De, (_) => l(2, (o = _))),
		[
			n,
			d,
			o,
			() => {
				document.dispatchEvent(new KeyboardEvent('keydown', { key: 'o', metaKey: !0 }));
			},
			() => {
				Ee(o + '/.typyst/daily', new Date().toISOString().split('T')[0] + '.md');
			}
		]
	);
}
class Fe extends ve {
	constructor(e) {
		super(), $e(this, e, Ve, Oe, pe, {});
	}
}
export { Fe as component };
