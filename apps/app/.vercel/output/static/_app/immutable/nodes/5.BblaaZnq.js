import {
	s as U,
	d as p,
	i as g,
	q as v,
	c as x,
	e as T,
	g as b,
	C as j,
	h as V,
	j as w,
	k as L,
	B as $e,
	M as ve,
	a as fe,
	f as O,
	t as z,
	b as I,
	p as be,
	w as ue,
	V as we,
	W as ke,
	x as ye,
	l as Ee,
	u as Se,
	m as Le,
	o as xe
} from '../chunks/CZvU1ekx.js';
import {
	S as G,
	i as J,
	d as k,
	t as $,
	a as h,
	g as D,
	e as R,
	m as y,
	c as E,
	b as S
} from '../chunks/ZuwjM_kn.js';
import {
	i as Z,
	q as X,
	E as ee,
	F,
	G as q,
	n as H,
	H as me,
	J as Te,
	c as pe,
	K as Ve,
	L as je,
	B as te,
	A as W,
	D as N
} from '../chunks/Dz2apFQ9.js';
import { c as B } from '../chunks/CTLOy2q2.js';
import { R as Ae, T as Me, C as Ie } from '../chunks/3VOIDKNN.js';
import { L as K } from '../chunks/oMhdKTtd.js';
import { M as re } from '../chunks/BMSQkwth.js';
import { L as Ne, C as Oe } from '../chunks/D0VC51h9.js';
import { L as ze } from '../chunks/DpleEbxu.js';
function se(a, e, t) {
	const l = a.slice();
	return (l[14] = e[t]), l;
}
function le(a, e, t) {
	const l = a.slice();
	return (l[17] = e[t]), (l[19] = t), l;
}
function Ce(a) {
	let e = a[0].length + '',
		t,
		l;
	return {
		c() {
			(t = z(e)), (l = z(' tasks in collection'));
		},
		l(r) {
			(t = O(r, e)), (l = O(r, ' tasks in collection'));
		},
		m(r, o) {
			g(r, t, o), g(r, l, o);
		},
		p(r, o) {
			o & 1 && e !== (e = r[0].length + '') && fe(t, e);
		},
		d(r) {
			r && (p(t), p(l));
		}
	};
}
function oe(a) {
	let e = [],
		t = new Map(),
		l,
		r,
		o = H(Object.keys(a[2]));
	const n = (s) => s[14];
	for (let s = 0; s < o.length; s += 1) {
		let i = se(a, o, s),
			c = n(i);
		t.set(c, (e[s] = ae(c, i)));
	}
	return {
		c() {
			for (let s = 0; s < e.length; s += 1) e[s].c();
			l = j();
		},
		l(s) {
			for (let i = 0; i < e.length; i += 1) e[i].l(s);
			l = j();
		},
		m(s, i) {
			for (let c = 0; c < e.length; c += 1) e[c] && e[c].m(s, i);
			g(s, l, i), (r = !0);
		},
		p(s, i) {
			i & 1014 &&
				((o = H(Object.keys(s[2]))),
				D(),
				(e = me(e, i, n, 1, s, o, t, l.parentNode, je, ae, l, se)),
				R());
		},
		i(s) {
			if (!r) {
				for (let i = 0; i < o.length; i += 1) h(e[i]);
				r = !0;
			}
		},
		o(s) {
			for (let i = 0; i < e.length; i += 1) $(e[i]);
			r = !1;
		},
		d(s) {
			s && p(l);
			for (let i = 0; i < e.length; i += 1) e[i].d(s);
		}
	};
}
function De(a) {
	let e,
		t,
		l,
		r = a[14].split('/').pop() + '',
		o,
		n;
	return (
		(e = new Oe({
			props: {
				class: B(
					'w-3.5 h-3.5 transform transition-all shrink-0 text-muted-foreground group-hover:text-foreground',
					a[1][a[14]] ? 'rotate-0' : '-rotate-90'
				)
			}
		})),
		{
			c() {
				S(e.$$.fragment), (t = w()), (l = V('p')), (o = z(r)), this.h();
			},
			l(s) {
				E(e.$$.fragment, s), (t = b(s)), (l = x(s, 'P', { class: !0 }));
				var i = T(l);
				(o = O(i, r)), i.forEach(p), this.h();
			},
			h() {
				v(l, 'class', 'truncate');
			},
			m(s, i) {
				y(e, s, i), g(s, t, i), g(s, l, i), I(l, o), (n = !0);
			},
			p(s, i) {
				const c = {};
				i & 6 &&
					(c.class = B(
						'w-3.5 h-3.5 transform transition-all shrink-0 text-muted-foreground group-hover:text-foreground',
						s[1][s[14]] ? 'rotate-0' : '-rotate-90'
					)),
					e.$set(c),
					(!n || i & 4) && r !== (r = s[14].split('/').pop() + '') && fe(o, r);
			},
			i(s) {
				n || (h(e.$$.fragment, s), (n = !0));
			},
			o(s) {
				$(e.$$.fragment, s), (n = !1);
			},
			d(s) {
				s && (p(t), p(l)), k(e, s);
			}
		}
	);
}
function ne(a, e) {
	let t,
		l,
		r =
			re({ html: !0, linkify: !0, typographer: !0 }).render(
				e[17].context_preview.replaceAll('- [ ]', '').trim()
			) + '',
		o,
		n,
		s;
	function i() {
		return e[11](e[14], e[17], e[19]);
	}
	return {
		key: a,
		first: null,
		c() {
			(t = V('button')), (l = new ke(!1)), (o = w()), this.h();
		},
		l(c) {
			t = x(c, 'BUTTON', { class: !0 });
			var u = T(t);
			(l = we(u, !1)), (o = b(u)), u.forEach(p), this.h();
		},
		h() {
			(l.a = o),
				v(
					t,
					'class',
					'flex items-start min-w-full overflow-hidden text-start p-2 bg-secondary-background border rounded-md text-xs hover:bg-accent hover:text-accent-foreground'
				),
				(this.first = t);
		},
		m(c, u) {
			g(c, t, u), l.m(r, t), I(t, o), n || ((s = ue(t, 'click', i)), (n = !0));
		},
		p(c, u) {
			(e = c),
				u & 4 &&
					r !==
						(r =
							re({ html: !0, linkify: !0, typographer: !0 }).render(
								e[17].context_preview.replaceAll('- [ ]', '').trim()
							) + '') &&
					l.p(r);
		},
		d(c) {
			c && p(t), (n = !1), s();
		}
	};
}
function Re(a) {
	let e = [],
		t = new Map(),
		l,
		r = H(a[2][a[14]]);
	const o = (n) => n[17].context_preview;
	for (let n = 0; n < r.length; n += 1) {
		let s = le(a, r, n),
			i = o(s);
		t.set(i, (e[n] = ne(i, s)));
	}
	return {
		c() {
			for (let n = 0; n < e.length; n += 1) e[n].c();
			l = j();
		},
		l(n) {
			for (let s = 0; s < e.length; s += 1) e[s].l(n);
			l = j();
		},
		m(n, s) {
			for (let i = 0; i < e.length; i += 1) e[i] && e[i].m(n, s);
			g(n, l, s);
		},
		p(n, s) {
			s & 756 && ((r = H(n[2][n[14]])), (e = me(e, s, o, 1, n, r, t, l.parentNode, Ve, ne, l, le)));
		},
		d(n) {
			n && p(l);
			for (let s = 0; s < e.length; s += 1) e[s].d(n);
		}
	};
}
function He(a) {
	let e, t, l, r, o;
	function n() {
		return a[10](a[14]);
	}
	return (
		(e = new Me({
			props: {
				class:
					'text-[13px] w-full text-secondary-foreground flex items-center h-7 justify-start gap-1.5 group hover:text-foreground transition-all',
				$$slots: { default: [De] },
				$$scope: { ctx: a }
			}
		})),
		e.$on('click', n),
		(l = new Ie({
			props: {
				class: 'mt-0.5 w-full gap-1.5 flex flex-col',
				$$slots: { default: [Re] },
				$$scope: { ctx: a }
			}
		})),
		{
			c() {
				S(e.$$.fragment), (t = w()), S(l.$$.fragment), (r = w());
			},
			l(s) {
				E(e.$$.fragment, s), (t = b(s)), E(l.$$.fragment, s), (r = b(s));
			},
			m(s, i) {
				y(e, s, i), g(s, t, i), y(l, s, i), g(s, r, i), (o = !0);
			},
			p(s, i) {
				a = s;
				const c = {};
				i & 1048582 && (c.$$scope = { dirty: i, ctx: a }), e.$set(c);
				const u = {};
				i & 1048820 && (u.$$scope = { dirty: i, ctx: a }), l.$set(u);
			},
			i(s) {
				o || (h(e.$$.fragment, s), h(l.$$.fragment, s), (o = !0));
			},
			o(s) {
				$(e.$$.fragment, s), $(l.$$.fragment, s), (o = !1);
			},
			d(s) {
				s && (p(t), p(r)), k(e, s), k(l, s);
			}
		}
	);
}
function ae(a, e) {
	let t, l, r;
	return (
		(l = new Ae({
			props: {
				open: e[1][e[14]],
				class: 'w-full transition-all',
				$$slots: { default: [He] },
				$$scope: { ctx: e }
			}
		})),
		{
			key: a,
			first: null,
			c() {
				(t = j()), S(l.$$.fragment), this.h();
			},
			l(o) {
				(t = j()), E(l.$$.fragment, o), this.h();
			},
			h() {
				this.first = t;
			},
			m(o, n) {
				g(o, t, n), y(l, o, n), (r = !0);
			},
			p(o, n) {
				e = o;
				const s = {};
				n & 6 && (s.open = e[1][e[14]]),
					n & 1048822 && (s.$$scope = { dirty: n, ctx: e }),
					l.$set(s);
			},
			i(o) {
				r || (h(l.$$.fragment, o), (r = !0));
			},
			o(o) {
				$(l.$$.fragment, o), (r = !1);
			},
			d(o) {
				o && p(t), k(l, o);
			}
		}
	);
}
function ie(a) {
	let e, t, l;
	return (
		(t = new K({
			props: {
				class: 'text-muted-foreground text-xs',
				$$slots: { default: [Be] },
				$$scope: { ctx: a }
			}
		})),
		{
			c() {
				(e = V('div')), S(t.$$.fragment), this.h();
			},
			l(r) {
				e = x(r, 'DIV', { class: !0 });
				var o = T(e);
				E(t.$$.fragment, o), o.forEach(p), this.h();
			},
			h() {
				v(e, 'class', 'w-full h-full flex flex-col gap-1 items-center justify-center');
			},
			m(r, o) {
				g(r, e, o), y(t, e, null), (l = !0);
			},
			i(r) {
				l || (h(t.$$.fragment, r), (l = !0));
			},
			o(r) {
				$(t.$$.fragment, r), (l = !1);
			},
			d(r) {
				r && p(e), k(t);
			}
		}
	);
}
function Be(a) {
	let e;
	return {
		c() {
			e = z('No tasks found');
		},
		l(t) {
			e = O(t, 'No tasks found');
		},
		m(t, l) {
			g(t, e, l);
		},
		d(t) {
			t && p(e);
		}
	};
}
function ce(a) {
	let e, t, l, r, o;
	return (
		(t = new Ne({ props: { class: 'w-3.5 h-3.5 animate-spin text-muted-foreground' } })),
		(r = new K({
			props: {
				class: 'text-muted-foreground text-xs',
				$$slots: { default: [Pe] },
				$$scope: { ctx: a }
			}
		})),
		{
			c() {
				(e = V('div')), S(t.$$.fragment), (l = w()), S(r.$$.fragment), this.h();
			},
			l(n) {
				e = x(n, 'DIV', { class: !0 });
				var s = T(e);
				E(t.$$.fragment, s), (l = b(s)), E(r.$$.fragment, s), s.forEach(p), this.h();
			},
			h() {
				v(e, 'class', 'w-full h-full flex flex-col gap-0.5 items-center justify-center');
			},
			m(n, s) {
				g(n, e, s), y(t, e, null), I(e, l), y(r, e, null), (o = !0);
			},
			i(n) {
				o || (h(t.$$.fragment, n), h(r.$$.fragment, n), (o = !0));
			},
			o(n) {
				$(t.$$.fragment, n), $(r.$$.fragment, n), (o = !1);
			},
			d(n) {
				n && p(e), k(t), k(r);
			}
		}
	);
}
function Pe(a) {
	let e;
	return {
		c() {
			e = z('Searching collection...');
		},
		l(t) {
			e = O(t, 'Searching collection...');
		},
		m(t, l) {
			g(t, e, l);
		},
		d(t) {
			t && p(e);
		}
	};
}
function Fe(a) {
	let e,
		t,
		l,
		r = Object.keys(a[2]).length > 0,
		o,
		n,
		s,
		i;
	t = new K({
		props: {
			class: 'text-muted-foreground text-xs',
			$$slots: { default: [Ce] },
			$$scope: { ctx: a }
		}
	});
	let c = r && oe(a),
		u = a[0].length === 0 && !a[3] && ie(a),
		m = a[3] && a[0].length === 0 && ce(a);
	return {
		c() {
			(e = V('div')),
				S(t.$$.fragment),
				(l = w()),
				c && c.c(),
				(o = w()),
				u && u.c(),
				(n = w()),
				m && m.c(),
				(s = j()),
				this.h();
		},
		l(f) {
			e = x(f, 'DIV', { class: !0 });
			var d = T(e);
			E(t.$$.fragment, d),
				d.forEach(p),
				(l = b(f)),
				c && c.l(f),
				(o = b(f)),
				u && u.l(f),
				(n = b(f)),
				m && m.l(f),
				(s = j()),
				this.h();
		},
		h() {
			v(e, 'class', 'w-full text-xs space-y-1 pl-1');
		},
		m(f, d) {
			g(f, e, d),
				y(t, e, null),
				g(f, l, d),
				c && c.m(f, d),
				g(f, o, d),
				u && u.m(f, d),
				g(f, n, d),
				m && m.m(f, d),
				g(f, s, d),
				(i = !0);
		},
		p(f, [d]) {
			const C = {};
			d & 1048577 && (C.$$scope = { dirty: d, ctx: f }),
				t.$set(C),
				d & 4 && (r = Object.keys(f[2]).length > 0),
				r
					? c
						? (c.p(f, d), d & 4 && h(c, 1))
						: ((c = oe(f)), c.c(), h(c, 1), c.m(o.parentNode, o))
					: c &&
						(D(),
						$(c, 1, 1, () => {
							c = null;
						}),
						R()),
				f[0].length === 0 && !f[3]
					? u
						? d & 9 && h(u, 1)
						: ((u = ie(f)), u.c(), h(u, 1), u.m(n.parentNode, n))
					: u &&
						(D(),
						$(u, 1, 1, () => {
							u = null;
						}),
						R()),
				f[3] && f[0].length === 0
					? m
						? d & 9 && h(m, 1)
						: ((m = ce(f)), m.c(), h(m, 1), m.m(s.parentNode, s))
					: m &&
						(D(),
						$(m, 1, 1, () => {
							m = null;
						}),
						R());
		},
		i(f) {
			i || (h(t.$$.fragment, f), h(c), h(u), h(m), (i = !0));
		},
		o(f) {
			$(t.$$.fragment, f), $(c), $(u), $(m), (i = !1);
		},
		d(f) {
			f && (p(e), p(l), p(o), p(n), p(s)), k(t), c && c.d(f), u && u.d(f), m && m.d(f);
		}
	};
}
function qe(a) {
	const e = {};
	return (
		a.forEach((t) => {
			const l = t.path,
				r = t.context_preview;
			e[l] || (e[l] = []), e[l].push({ context_preview: r });
		}),
		e
	);
}
function We(a, e, t) {
	let l, r, o, n;
	L(a, Z, (_) => t(4, (l = _))),
		L(a, X, (_) => t(5, (r = _))),
		L(a, ee, (_) => t(6, (o = _))),
		L(a, F, (_) => t(7, (n = _)));
	let s = [],
		i = !1,
		c = {},
		u = {};
	function m(_) {
		t(1, (c[_] = !c[_]), c), t(1, c), t(2, u), t(0, s);
	}
	const f = (_) => {
		if (!r) return;
		const { results: A } = r.storage.searchAndReplace,
			M = A[_];
		if (!M) return;
		r.commands.setTextSelection(M);
		const { node: P } = r.view.domAtPos(r.state.selection.anchor);
		if (P instanceof HTMLElement) {
			const Q = P.getBoundingClientRect(),
				Y = Q.top < 0,
				he = Q.bottom > window.innerHeight;
			if (Y || he) {
				const ge = Y ? 'auto' : 'smooth';
				P.scrollIntoView({ behavior: ge, block: 'center' });
			}
		}
	};
	async function d() {
		t(3, (i = !0));
		try {
			t(0, (s = await Te(be(pe), '- [ ]', !1, !1))), t(3, (i = !1));
		} catch (_) {
			console.error('Error searching files:', _);
		}
	}
	const C = X.subscribeToSaveEvents(async () => {
		d();
	});
	$e(async () => {
		var A;
		Z.set(null), await d();
		const _ = s.find((M) => M.path === l);
		_ ? q(_.path, !0) : l !== ((A = s[0]) == null ? void 0 : A.path) && q(s[0].path, !0);
	}),
		ve(() => {
			C();
		});
	const de = (_) => m(_),
		_e = async (_, A, M) => {
			F.set(''),
				l !== _ && q(_, !0),
				setTimeout(() => {
					o || ee.set(!0),
						r.commands.blur(),
						n !== A.context_preview.replaceAll('- [ ]', '').trim() &&
							F.set(A.context_preview.replaceAll('- [ ]', '').trim()),
						f(M),
						r.commands.setSearchResult(M);
				}, 300);
		};
	return (
		(a.$$.update = () => {
			a.$$.dirty & 1 && t(2, (u = qe(s))),
				a.$$.dirty & 6 &&
					Object.keys(u).forEach((_) => {
						c[_] === void 0 && t(1, (c[_] = !0), c);
					});
		}),
		[s, c, u, i, l, r, o, n, m, f, de, _e]
	);
}
class Xe extends G {
	constructor(e) {
		super(), J(this, e, We, Fe, U, {});
	}
}
function Ue(a) {
	let e, t, l, r, o, n, s, i, c, u;
	return (
		(o = new Xe({})),
		{
			c() {
				(e = V('div')), (t = V('div')), (l = w()), (r = V('div')), S(o.$$.fragment), this.h();
			},
			l(m) {
				e = x(m, 'DIV', { class: !0, style: !0 });
				var f = T(e);
				(t = x(f, 'DIV', { class: !0, role: !0 })),
					T(t).forEach(p),
					(l = b(f)),
					(r = x(f, 'DIV', { class: !0, 'data-collection-root': !0, 'data-path': !0 }));
				var d = T(r);
				E(o.$$.fragment, d), d.forEach(p), f.forEach(p), this.h();
			},
			h() {
				v(
					t,
					'class',
					'h-full w-1 border-r cursor-col-resize absolute top-0 right-0 z-10 hover:bg-foreground/10 hover:delay-75 transition-all duration-200 active:bg-foreground/20 active:!cursor-col-resize'
				),
					v(t, 'role', 'presentation'),
					v(
						r,
						'class',
						'flex flex-col items-start gap-1 w-full px-2 h-full overflow-auto pt-2 pb-4'
					),
					v(r, 'data-collection-root', ''),
					v(r, 'data-path', a[2]),
					v(
						e,
						'class',
						(n = B(
							'fixed left-12 h-[calc(100vh-4.5rem)] flex flex-col justify-start items-center bg-background overflow-y-auto transform transition-transform duration-300',
							!a[1] && '-translate-x-52'
						))
					),
					v(e, 'style', (s = `width: ${a[0]}px`));
			},
			m(m, f) {
				g(m, e, f),
					I(e, t),
					I(e, l),
					I(e, r),
					y(o, r, null),
					(i = !0),
					c || ((u = ue(t, 'mousedown', a[3])), (c = !0));
			},
			p(m, [f]) {
				(!i || f & 4) && v(r, 'data-path', m[2]),
					(!i ||
						(f & 2 &&
							n !==
								(n = B(
									'fixed left-12 h-[calc(100vh-4.5rem)] flex flex-col justify-start items-center bg-background overflow-y-auto transform transition-transform duration-300',
									!m[1] && '-translate-x-52'
								)))) &&
						v(e, 'class', n),
					(!i || (f & 1 && s !== (s = `width: ${m[0]}px`))) && v(e, 'style', s);
			},
			i(m) {
				i || (h(o.$$.fragment, m), (i = !0));
			},
			o(m) {
				$(o.$$.fragment, m), (i = !1);
			},
			d(m) {
				m && p(e), k(o), (c = !1), u();
			}
		}
	);
}
function Ge(a, e, t) {
	let l, r, o, n;
	L(a, X, (c) => t(4, (l = c))),
		L(a, te, (c) => t(0, (r = c))),
		L(a, W, (c) => t(1, (o = c))),
		L(a, pe, (c) => t(2, (n = c)));
	const s = (c) => {
		N.set(!0);
		const u = c.x;
		if (u < 100) {
			N.set(!1), W.set(!1);
			return;
		} else if (u > 100 && !o) {
			N.set(!1), W.set(!0);
			return;
		}
		r + c.movementX < 210 ||
			r + c.movementX > 500 ||
			u < 245 ||
			u > 550 ||
			te.update((m) => m + c.movementX);
	};
	return [
		r,
		o,
		n,
		() => {
			N.set(!0), l.commands.blur(), document.body.classList.toggle('cursor-col-resize');
			const c = () => {
				document.removeEventListener('mousemove', s),
					document.removeEventListener('mouseup', c),
					document.body.classList.remove('cursor-col-resize'),
					N.set(!1);
			};
			document.addEventListener('mousemove', s), document.addEventListener('mouseup', c);
		}
	];
}
class Je extends G {
	constructor(e) {
		super(), J(this, e, Ge, Ue, U, {});
	}
}
function Ke(a) {
	let e;
	const t = a[0].default,
		l = Ee(t, a, a[1], null);
	return {
		c() {
			l && l.c();
		},
		l(r) {
			l && l.l(r);
		},
		m(r, o) {
			l && l.m(r, o), (e = !0);
		},
		p(r, o) {
			l && l.p && (!e || o & 2) && Se(l, t, r, r[1], e ? xe(t, r[1], o, null) : Le(r[1]), null);
		},
		i(r) {
			e || (h(l, r), (e = !0));
		},
		o(r) {
			$(l, r), (e = !1);
		},
		d(r) {
			l && l.d(r);
		}
	};
}
function Qe(a) {
	let e, t, l;
	return (
		(t = new ze({ props: { sidebar: Je, $$slots: { default: [Ke] }, $$scope: { ctx: a } } })),
		{
			c() {
				(e = w()), S(t.$$.fragment), this.h();
			},
			l(r) {
				ye('svelte-1aaaf01', document.head).forEach(p), (e = b(r)), E(t.$$.fragment, r), this.h();
			},
			h() {
				document.title = 'Typyst | Tasks';
			},
			m(r, o) {
				g(r, e, o), y(t, r, o), (l = !0);
			},
			p(r, [o]) {
				const n = {};
				o & 2 && (n.$$scope = { dirty: o, ctx: r }), t.$set(n);
			},
			i(r) {
				l || (h(t.$$.fragment, r), (l = !0));
			},
			o(r) {
				$(t.$$.fragment, r), (l = !1);
			},
			d(r) {
				r && p(e), k(t, r);
			}
		}
	);
}
function Ye(a, e, t) {
	let { $$slots: l = {}, $$scope: r } = e;
	return (
		(a.$$set = (o) => {
			'$$scope' in o && t(1, (r = o.$$scope));
		}),
		[l, r]
	);
}
class it extends G {
	constructor(e) {
		super(), J(this, e, Ye, Qe, U, {});
	}
}
export { it as component };
