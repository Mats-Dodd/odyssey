import {
	ag as lr,
	ah as sr,
	a3 as Pn,
	a2 as or,
	l as ce,
	s as me,
	n as Se,
	d as m,
	b as N,
	v as bo,
	L as te,
	k as Ae,
	w as dn,
	m as P,
	i as b,
	c as D,
	h as y,
	U as vo,
	V as ko,
	M as Wt,
	aa as qt,
	ab as Ht,
	E as ie,
	F as ae,
	G as fe,
	H as ue,
	z as ee,
	x as I,
	A as ke,
	P as Ne,
	ae as al,
	K as je,
	e as B,
	r as xe,
	y as re,
	q as de,
	Z as Dt,
	B as ve,
	a as at,
	f as J,
	t as X,
	ai as el,
	g as R,
	j as L,
	o as lt,
	ad as ot,
	Q as vt,
	R as on,
	S as rn,
	T as an,
	N as fl,
	aj as rr,
	p as ul,
	ak as cl
} from '../chunks/wdwkOUVI.js';
import {
	g as Ce,
	t as g,
	e as Ee,
	a as d,
	S as he,
	i as pe,
	f as fn,
	h as mn,
	j as _n,
	d as k,
	m as C,
	c as S,
	b as E,
	k as rt
} from '../chunks/JshcQj11.js';
import {
	aH as Dn,
	d as un,
	aI as yn,
	a as ir,
	h as Nt,
	c as It,
	aJ as dl,
	aK as ml,
	aL as ar,
	aM as fr,
	aN as _l,
	aO as Gt,
	aP as ur,
	aQ as cr,
	aR as dr,
	aS as mr,
	aT as _r,
	aU as gr,
	aV as Xn,
	aW as hr,
	aX as pr,
	V as kn,
	P as cn,
	Q as Ln,
	W as En,
	a3 as Co,
	a6 as hn,
	aY as $r,
	M as nt,
	a4 as Eo,
	aZ as br,
	a7 as vr,
	N as Sn,
	X as wn,
	Y as Tn,
	O as Yt,
	a5 as kr,
	S as qe,
	f as Cr,
	a0 as Er,
	ae as Sr,
	E as wr,
	a_ as bn,
	A as Tr,
	t as Ar,
	aG as Or,
	_ as Nr,
	$ as Pr,
	q as Yn,
	o as ft,
	a$ as tl,
	i as Mn,
	b0 as Ir,
	I as Ke,
	n as Ze,
	s as Zn,
	ad as Ot,
	G as So,
	b1 as Dr,
	m as yr,
	e as gl,
	y as hl,
	b2 as Mr,
	a9 as pl
} from '../chunks/DZQ4DMzf.js';
import {
	j as dt,
	A as wo,
	C as Vr,
	D as Rr,
	k as Pt,
	b as mt,
	l as Ve,
	E as $l,
	F as Lr,
	m as bl,
	v as Qn,
	n as pt,
	d as Jt,
	G as Fr,
	i as $t,
	s as Cn,
	H as jr,
	o as zr,
	q as sn,
	u as Br,
	I as Kr,
	g as ge,
	a as Ge,
	c as be,
	J as qr,
	B as Qe,
	f as To
} from '../chunks/SV1JYOhp.js';
import {
	f as Ao,
	a as vl,
	I as Hr,
	R as Ur,
	T as Wr,
	C as Gr,
	s as Jr
} from '../chunks/DnqHzMrx.js';
import { I as Xr } from '../chunks/Cr1aQYRT.js';
import { w as ct, d as _t, a as Oo } from '../chunks/YlZQZqOj.js';
import {
	c as Yr,
	d as Zr,
	m as vn,
	n as Qr,
	o as xr,
	p as No,
	q as Po,
	u as ei,
	i as ti,
	r as ni,
	t as li,
	b as Io,
	v as si,
	j as kl,
	s as oi,
	a as ri,
	f as ii,
	w as Cl,
	x as ai
} from '../chunks/DCdvB3a6.js';
import { c as fi } from '../chunks/2lQ-nxoL.js';
import { S as Do } from '../chunks/DociSdig.js';
import { a as ui, I as ci } from '../chunks/dpOqxi8p.js';
import { C as di, L as mi } from '../chunks/BOy_XFTJ.js';
import { d as _i, u as gi, e as hi, f as pi } from '../chunks/DLjKPosD.js';
import { p as $i } from '../chunks/DP4HDVEx.js';
import { c as bi, L as tt } from '../chunks/D9yiXxoh.js';
import { i as vi, g as El } from '../chunks/DvT5znXj.js';
const ki = typeof window < 'u' ? window : typeof globalThis < 'u' ? globalThis : global;
function nl(s, e) {
	const n = (e.token = {});
	function t(l, o, r, a) {
		if (e.token !== n) return;
		e.resolved = a;
		let i = e.ctx;
		r !== void 0 && ((i = i.slice()), (i[r] = a));
		const f = l && (e.current = l)(i);
		let u = !1;
		e.block &&
			(e.blocks
				? e.blocks.forEach((c, h) => {
						h !== o &&
							c &&
							(Ce(),
							g(c, 1, 1, () => {
								e.blocks[h] === c && (e.blocks[h] = null);
							}),
							Ee());
					})
				: e.block.d(1),
			f.c(),
			d(f, 1),
			f.m(e.mount(), e.anchor),
			(u = !0)),
			(e.block = f),
			e.blocks && (e.blocks[o] = f),
			u && or();
	}
	if (lr(s)) {
		const l = sr();
		if (
			(s.then(
				(o) => {
					Pn(l), t(e.then, 1, e.value, o), Pn(null);
				},
				(o) => {
					if ((Pn(l), t(e.catch, 2, e.error, o), Pn(null), !e.hasCatch)) throw o;
				}
			),
			e.current !== e.pending)
		)
			return t(e.pending, 0), !0;
	} else {
		if (e.current !== e.then) return t(e.then, 1, e.value, s), !0;
		e.resolved = s;
	}
}
function ll(s, e, n) {
	const t = e.slice(),
		{ resolved: l } = s;
	s.current === s.then && (t[s.value] = l),
		s.current === s.catch && (t[s.error] = l),
		s.block.p(t, n);
}
const Ci = async (s, e) => {
		{
			const n = window.localStorage.getItem('appSettings');
			n ? Dn.set(JSON.parse(n)) : Et('app');
		}
		{
			const n = await un
				.select()
				.from(yn)
				.where(ir(yn.collectionPath, ce(It)));
			!n || n.length === 0 ? Et('collection') : Nt.set({ editor: n[0].editor, notes: n[0].notes });
		}
	},
	Et = async (s, e) => {
		s === 'app' &&
			(Dn.set(e ?? ce(Dn)),
			window.localStorage.setItem('appSettings', JSON.stringify(e ?? ce(Dn)))),
			s === 'collection' &&
				(Nt.set(e ?? ce(Nt)),
				await un
					.insert(yn)
					.values({
						collectionPath: ce(It),
						editor: (e ?? ce(Nt)).editor,
						notes: (e ?? ce(Nt)).notes
					})
					.onConflictDoUpdate({
						target: yn.collectionPath,
						set: { editor: (e ?? ce(Nt)).editor, notes: (e ?? ce(Nt)).notes }
					}));
	};
function Sl(s) {
	let e, n;
	return {
		c() {
			(e = y('meta')), this.h();
		},
		l(t) {
			(e = D(t, 'META', { name: !0, content: !0 })), this.h();
		},
		h() {
			P(e, 'name', 'theme-color'), P(e, 'content', (n = s[0].dark));
		},
		m(t, l) {
			b(t, e, l);
		},
		p(t, l) {
			l & 1 && n !== (n = t[0].dark) && P(e, 'content', n);
		},
		d(t) {
			t && m(e);
		}
	};
}
function Ei(s) {
	let e,
		n = '<script>(' + Xn.toString() + ')(' + JSON.stringify(s[2]) + ');<\/script>',
		t;
	return {
		c() {
			(e = new ko(!1)), (t = te()), this.h();
		},
		l(l) {
			(e = vo(l, !1)), (t = te()), this.h();
		},
		h() {
			e.a = t;
		},
		m(l, o) {
			e.m(n, l, o), b(l, t, o);
		},
		p: Se,
		d(l) {
			l && (m(t), e.d());
		}
	};
}
function Si(s) {
	let e,
		n = `<script nonce=${s[1]}>(` + Xn.toString() + ')(' + JSON.stringify(s[2]) + ');<\/script>',
		t;
	return {
		c() {
			(e = new ko(!1)), (t = te()), this.h();
		},
		l(l) {
			(e = vo(l, !1)), (t = te()), this.h();
		},
		h() {
			e.a = t;
		},
		m(l, o) {
			e.m(n, l, o), b(l, t, o);
		},
		p(l, o) {
			o & 2 &&
				n !==
					(n =
						`<script nonce=${l[1]}>(` +
						Xn.toString() +
						')(' +
						JSON.stringify(l[2]) +
						');<\/script>') &&
				e.p(n);
		},
		d(l) {
			l && (m(t), e.d());
		}
	};
}
function wi(s) {
	let e,
		n,
		t = s[0] && Sl(s);
	function l(a, i) {
		return a[1] ? Si : Ei;
	}
	let o = l(s),
		r = o(s);
	return {
		c() {
			t && t.c(), (e = te()), r.c(), (n = te());
		},
		l(a) {
			const i = bo('svelte-1nen96w', document.head);
			t && t.l(i), (e = te()), r.l(i), (n = te()), i.forEach(m);
		},
		m(a, i) {
			t && t.m(document.head, null),
				N(document.head, e),
				r.m(document.head, null),
				N(document.head, n);
		},
		p(a, [i]) {
			a[0]
				? t
					? t.p(a, i)
					: ((t = Sl(a)), t.c(), t.m(e.parentNode, e))
				: t && (t.d(1), (t = null)),
				o === (o = l(a)) && r
					? r.p(a, i)
					: (r.d(1), (r = o(a)), r && (r.c(), r.m(n.parentNode, n)));
		},
		i: Se,
		o: Se,
		d(a) {
			t && t.d(a), m(e), r.d(a), m(n);
		}
	};
}
function Ti(s, e, n) {
	let t, l, o;
	Ae(s, dl, (w) => n(12, (l = w))), Ae(s, ml, (w) => n(13, (o = w)));
	let { track: r = !0 } = e,
		{ defaultMode: a = 'system' } = e,
		{ themeColors: i = void 0 } = e,
		{ disableTransitions: f = !0 } = e,
		{ darkClassNames: u = ['dark'] } = e,
		{ lightClassNames: c = [] } = e,
		{ defaultTheme: h = '' } = e,
		{ nonce: _ = '' } = e,
		{ themeStorageKey: p = 'mode-watcher-theme' } = e,
		{ modeStorageKey: $ = 'mode-watcher-mode' } = e;
	dn(() => {
		const w = ar.subscribe(() => {}),
			T = fr.subscribe(() => {});
		_l.tracking(r), _l.query();
		const j = localStorage.getItem(o);
		Gt(hr(j) ? j : a);
		const Y = localStorage.getItem(l);
		return (
			ur(Y || h),
			() => {
				w(), T();
			}
		);
	});
	const v = gr({
		defaultMode: a,
		themeColors: i,
		darkClassNames: u,
		lightClassNames: c,
		defaultTheme: h,
		modeStorageKey: $,
		themeStorageKey: p
	});
	return (
		(s.$$set = (w) => {
			'track' in w && n(3, (r = w.track)),
				'defaultMode' in w && n(4, (a = w.defaultMode)),
				'themeColors' in w && n(0, (i = w.themeColors)),
				'disableTransitions' in w && n(5, (f = w.disableTransitions)),
				'darkClassNames' in w && n(6, (u = w.darkClassNames)),
				'lightClassNames' in w && n(7, (c = w.lightClassNames)),
				'defaultTheme' in w && n(8, (h = w.defaultTheme)),
				'nonce' in w && n(9, (_ = w.nonce)),
				'themeStorageKey' in w && n(10, (p = w.themeStorageKey)),
				'modeStorageKey' in w && n(11, ($ = w.modeStorageKey));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 32 && cr.set(f),
				s.$$.dirty & 1 && dr.set(i),
				s.$$.dirty & 64 && mr.set(u),
				s.$$.dirty & 128 && _r.set(c),
				s.$$.dirty & 2048 && ml.set($),
				s.$$.dirty & 1024 && dl.set(p),
				s.$$.dirty & 512 && n(1, (t = typeof window > 'u' ? _ : ''));
		}),
		[i, t, v, r, a, f, u, c, h, _, p, $]
	);
}
class Ai extends he {
	constructor(e) {
		super(),
			pe(this, e, Ti, wi, me, {
				track: 3,
				defaultMode: 4,
				themeColors: 0,
				disableTransitions: 5,
				darkClassNames: 6,
				lightClassNames: 7,
				defaultTheme: 8,
				nonce: 9,
				themeStorageKey: 10,
				modeStorageKey: 11
			});
	}
}
function qn(s) {
	return Array.from(s.querySelectorAll('[role="option"]:not([data-disabled])')).filter((e) =>
		dt(e)
	);
}
function Oi(s) {
	return window.getComputedStyle(s).getPropertyValue('direction');
}
function Ni(s) {
	return (e) => {
		const n = e.target,
			t = pr(s);
		if (!t || !wo(n)) return !1;
		const l = t.id;
		return !!((Vr(n) && l === n.htmlFor) || n.closest(`label[for="${l}"]`));
	};
}
const Pi = [
		Ve.ARROW_LEFT,
		Ve.ESCAPE,
		Ve.ARROW_RIGHT,
		Ve.SHIFT,
		Ve.CAPS_LOCK,
		Ve.CONTROL,
		Ve.ALT,
		Ve.META,
		Ve.ENTER,
		Ve.F1,
		Ve.F2,
		Ve.F3,
		Ve.F4,
		Ve.F5,
		Ve.F6,
		Ve.F7,
		Ve.F8,
		Ve.F9,
		Ve.F10,
		Ve.F11,
		Ve.F12
	],
	Ii = {
		positioning: { placement: 'bottom', sameWidth: !0 },
		scrollAlignment: 'nearest',
		loop: !0,
		defaultOpen: !1,
		closeOnOutsideClick: !0,
		preventScroll: !0,
		closeOnEscape: !0,
		forceVisible: !1,
		portal: void 0,
		builder: 'listbox',
		disabled: !1,
		required: !1,
		name: void 0,
		typeahead: !0,
		highlightOnHover: !0,
		onOutsideClick: void 0
	},
	Di = ['trigger', 'menu', 'label'];
function yi(s) {
	const e = { ...Ii, ...s },
		n = ct(null),
		t = ct(null),
		l = e.selected ?? ct(e.defaultSelected),
		o = kn(l, e == null ? void 0 : e.onSelectedChange),
		r = _t(t, (A) => (A ? z(A) : void 0)),
		a = e.open ?? ct(e.defaultOpen),
		i = kn(a, e == null ? void 0 : e.onOpenChange),
		f = cn({ ...Ln(e, 'open', 'defaultOpen', 'builder', 'ids'), multiple: e.multiple ?? !1 }),
		{
			scrollAlignment: u,
			loop: c,
			closeOnOutsideClick: h,
			closeOnEscape: _,
			preventScroll: p,
			portal: $,
			forceVisible: v,
			positioning: w,
			multiple: T,
			arrowSize: j,
			disabled: Y,
			required: V,
			typeahead: F,
			name: U,
			highlightOnHover: ne,
			onOutsideClick: oe
		} = f,
		{ name: O, selector: G } = En(e.builder),
		q = cn({ ...Co(Di), ...e.ids }),
		{ handleTypeaheadSearch: K } = Yr({
			onMatch: (A) => {
				t.set(A), A.scrollIntoView({ block: ce(u) });
			},
			getCurrentItem() {
				return ce(t);
			}
		});
	function z(A) {
		const Q = A.getAttribute('data-value'),
			Oe = A.getAttribute('data-label'),
			Re = A.hasAttribute('data-disabled');
		return { value: Q && JSON.parse(Q), label: Oe ?? A.textContent ?? void 0, disabled: !!Re };
	}
	const x = (A) => {
		o.update((Q) => {
			if (ce(T)) {
				const Re = Array.isArray(Q) ? Q : [];
				return li(A, Re, (Le, Me) => hn(Le.value, Me.value));
			}
			return A;
		});
	};
	function M(A) {
		const Q = z(A);
		x(Q);
	}
	async function H() {
		i.set(!0);
		const A = document.getElementById(ce(q.trigger));
		if (!A) return;
		n.set(A), await Wt();
		const Q = document.getElementById(ce(q.menu));
		if (!dt(Q)) return;
		const Oe = Q.querySelector('[aria-selected=true]');
		dt(Oe) && t.set(Oe);
	}
	function W() {
		i.set(!1), t.set(null);
	}
	const Te = Zr({ open: i, forceVisible: v, activeTrigger: n }),
		Pe = _t(
			[o],
			([A]) =>
				(Q) =>
					Array.isArray(A)
						? A.some((Oe) => hn(Oe.value, Q))
						: Rr(Q)
							? hn(A == null ? void 0 : A.value, $r(Q, void 0))
							: hn(A == null ? void 0 : A.value, Q)
		),
		De = _t(
			[r],
			([A]) =>
				(Q) =>
					hn(A == null ? void 0 : A.value, Q)
		),
		Ie = nt(O('trigger'), {
			stores: [i, t, Y, q.menu, q.trigger, q.label],
			returned: ([A, Q, Oe, Re, Le, Me]) => ({
				'aria-activedescendant': Q == null ? void 0 : Q.id,
				'aria-autocomplete': 'list',
				'aria-controls': Re,
				'aria-expanded': A,
				'aria-labelledby': Me,
				id: Le,
				role: 'combobox',
				disabled: Jt(Oe)
			}),
			action: (A) => {
				const Q = Fr(A),
					Oe = Pt(
						mt(A, 'click', () => {
							A.focus(), ce(i) ? W() : H();
						}),
						mt(A, 'keydown', (Me) => {
							if (!ce(i)) {
								if (
									Pi.includes(Me.key) ||
									Me.key === Ve.TAB ||
									(Me.key === Ve.BACKSPACE && Q && A.value === '') ||
									(Me.key === Ve.SPACE && $l(A))
								)
									return;
								H(),
									Wt().then(() => {
										if (ce(o)) return;
										const We = document.getElementById(ce(q.menu));
										if (!dt(We)) return;
										const Be = Array.from(
											We.querySelectorAll(`${G('item')}:not([data-disabled]):not([data-hidden])`)
										).filter((Ye) => dt(Ye));
										Be.length &&
											(Me.key === Ve.ARROW_DOWN
												? (t.set(Be[0]), Be[0].scrollIntoView({ block: ce(u) }))
												: Me.key === Ve.ARROW_UP &&
													(t.set(vn(Be)), vn(Be).scrollIntoView({ block: ce(u) })));
									});
							}
							if (Me.key === Ve.TAB) {
								W();
								return;
							}
							if (Me.key === Ve.ENTER || (Me.key === Ve.SPACE && $l(A))) {
								Me.preventDefault();
								const Je = ce(t);
								Je && M(Je), ce(T) || W();
							}
							if ((Me.key === Ve.ARROW_UP && Me.altKey && W(), Lr.includes(Me.key))) {
								Me.preventDefault();
								const Je = document.getElementById(ce(q.menu));
								if (!dt(Je)) return;
								const We = qn(Je);
								if (!We.length) return;
								const Be = We.filter((tn) => !bl(tn) && tn.dataset.hidden === void 0),
									Ye = ce(t),
									st = Ye ? Be.indexOf(Ye) : -1,
									gt = ce(c),
									ht = ce(u);
								let it;
								switch (Me.key) {
									case Ve.ARROW_DOWN:
										it = Po(Be, st, gt);
										break;
									case Ve.ARROW_UP:
										it = No(Be, st, gt);
										break;
									case Ve.PAGE_DOWN:
										it = xr(Be, st, 10, gt);
										break;
									case Ve.PAGE_UP:
										it = Qr(Be, st, 10, gt);
										break;
									case Ve.HOME:
										it = Be[0];
										break;
									case Ve.END:
										it = vn(Be);
										break;
									default:
										return;
								}
								t.set(it), it == null || it.scrollIntoView({ block: ht });
							} else if (ce(F)) {
								const Je = document.getElementById(ce(q.menu));
								if (!dt(Je)) return;
								K(Me.key, qn(Je));
							}
						})
					);
				let Re = pt;
				const Le = Qn(A, { handler: W, enabled: _t([i, _], ([Me, Xe]) => Me && Xe) });
				return (
					Le && Le.destroy && (Re = Le.destroy),
					{
						destroy() {
							Oe(), Re();
						}
					}
				);
			}
		}),
		we = nt(O('menu'), {
			stores: [Te, q.menu],
			returned: ([A, Q]) => ({
				hidden: A ? void 0 : !0,
				id: Q,
				role: 'listbox',
				style: Cn({ display: A ? void 0 : 'none' })
			}),
			action: (A) => {
				let Q = pt;
				const Oe = Pt(
					$t([Te, $, h, w, n], ([Re, Le, Me, Xe, Je]) => {
						if ((Q(), !Re || !Je)) return;
						const We = Ni(ce(q.trigger)),
							Be = ei(A, {
								anchorElement: Je,
								open: i,
								options: {
									floating: Xe,
									focusTrap: null,
									clickOutside: Me
										? {
												handler: (Ye) => {
													var gt;
													if (((gt = ce(oe)) == null || gt(Ye), Ye.defaultPrevented)) return;
													const st = Ye.target;
													wo(st) && (st === Je || Je.contains(st) || W());
												},
												ignore: We
											}
										: null,
									escapeKeydown: null,
									portal: Eo(A, Le)
								}
							});
						Be && Be.destroy && (Q = Be.destroy);
					})
				);
				return {
					destroy: () => {
						Oe(), Q();
					}
				};
			}
		}),
		{
			elements: { root: le }
		} = bi(),
		{ action: se } = ce(le),
		$e = nt(O('label'), {
			stores: [q.label, q.trigger],
			returned: ([A, Q]) => ({ id: A, for: Q }),
			action: se
		}),
		Ue = nt(O('option'), {
			stores: [Pe],
			returned:
				([A]) =>
				(Q) => {
					const Oe = A(Q.value);
					return {
						'data-value': JSON.stringify(Q.value),
						'data-label': Q.label,
						'data-disabled': Jt(Q.disabled),
						'aria-disabled': Q.disabled ? !0 : void 0,
						'aria-selected': Oe,
						'data-selected': Oe ? '' : void 0,
						id: br(),
						role: 'option'
					};
				},
			action: (A) => ({
				destroy: Pt(
					mt(A, 'click', (Oe) => {
						if (bl(A)) {
							Oe.preventDefault();
							return;
						}
						M(A), ce(T) || W();
					}),
					$t(ne, (Oe) =>
						Oe
							? Pt(
									mt(A, 'mouseover', () => {
										t.set(A);
									}),
									mt(A, 'mouseleave', () => {
										t.set(null);
									})
								)
							: void 0
					)
				)
			})
		}),
		He = nt(O('hidden-input'), {
			stores: [o, V, U],
			returned: ([A, Q, Oe]) => {
				const Re = Array.isArray(A) ? A.map((Le) => Le.value) : A == null ? void 0 : A.value;
				return { ...jr, required: Q ? !0 : void 0, value: Re, name: Oe };
			}
		}),
		ze = nt(O('arrow'), {
			stores: j,
			returned: (A) => ({
				'data-arrow': !0,
				style: Cn({
					position: 'absolute',
					width: `var(--arrow-size, ${A}px)`,
					height: `var(--arrow-size, ${A}px)`
				})
			})
		});
	return (
		zr(() => {
			if (!sn) return;
			const A = document.getElementById(ce(q.menu));
			if (!A) return;
			const Q = document.getElementById(ce(q.trigger));
			Q && n.set(Q);
			const Oe = A.querySelector('[data-selected]');
			dt(Oe);
		}),
		$t([t], ([A]) => {
			if (!sn) return;
			const Q = document.getElementById(ce(q.menu));
			dt(Q) &&
				qn(Q).forEach((Oe) => {
					Oe === A ? ti(Oe) : ni(Oe);
				});
		}),
		$t([i], ([A]) => {
			if (!sn) return;
			let Q = pt;
			return (
				ce(p) && A && (Q = Io()),
				() => {
					Q();
				}
			);
		}),
		{
			ids: q,
			elements: { trigger: Ie, option: Ue, menu: we, label: $e, hiddenInput: He, arrow: ze },
			states: { open: i, selected: o, highlighted: r, highlightedItem: t },
			helpers: { isSelected: Pe, isHighlighted: De, closeMenu: W },
			options: f
		}
	);
}
const { name: Ut } = En('dialog'),
	Mi = {
		preventScroll: !0,
		closeOnEscape: !0,
		closeOnOutsideClick: !0,
		role: 'dialog',
		defaultOpen: !1,
		portal: 'body',
		forceVisible: !1,
		openFocus: void 0,
		closeFocus: void 0,
		onOutsideClick: void 0
	},
	Hn = ct([]),
	Vi = ['content', 'title', 'description'];
function Ri(s) {
	const e = { ...Mi, ...s },
		n = cn(Ln(e, 'ids')),
		{
			preventScroll: t,
			closeOnEscape: l,
			closeOnOutsideClick: o,
			role: r,
			portal: a,
			forceVisible: i,
			openFocus: f,
			closeFocus: u,
			onOutsideClick: c
		} = n,
		h = ct(null),
		_ = cn({ ...Co(Vi), ...e.ids }),
		p = e.open ?? ct(e.defaultOpen),
		$ = kn(p, e == null ? void 0 : e.onOpenChange),
		v = _t([$, i], ([G, q]) => G || q);
	let w = pt;
	function T(G) {
		const q = G.currentTarget,
			K = G.currentTarget;
		!dt(q) || !dt(K) || ($.set(!0), h.set(K));
	}
	function j() {
		$.set(!1), kl({ prop: ce(u), defaultEl: ce(h) });
	}
	$t([$], ([G]) => {
		oi(100).then(() => {
			G
				? Hn.update((q) => (q.push(ce(_.content)), q))
				: Hn.update((q) => q.filter((K) => K !== ce(_.content)));
		});
	});
	const Y = nt(Ut('trigger'), {
			stores: [$],
			returned: ([G]) => ({ 'aria-haspopup': 'dialog', 'aria-expanded': G, type: 'button' }),
			action: (G) => ({
				destroy: Pt(
					mt(G, 'click', (K) => {
						T(K);
					}),
					mt(G, 'keydown', (K) => {
						(K.key !== Ve.ENTER && K.key !== Ve.SPACE) || (K.preventDefault(), T(K));
					})
				)
			})
		}),
		V = nt(Ut('overlay'), {
			stores: [v],
			returned: ([G]) => ({
				hidden: G ? void 0 : !0,
				tabindex: -1,
				style: Cn({ display: G ? void 0 : 'none' }),
				'aria-hidden': !0,
				'data-state': G ? 'open' : 'closed'
			}),
			action: (G) => {
				let q = pt;
				if (ce(l)) {
					const K = Qn(G, {
						handler: () => {
							j();
						}
					});
					K && K.destroy && (q = K.destroy);
				}
				return {
					destroy() {
						q();
					}
				};
			}
		}),
		F = nt(Ut('content'), {
			stores: [v, _.content, _.description, _.title],
			returned: ([G, q, K, z]) => ({
				id: q,
				role: ce(r),
				'aria-describedby': K,
				'aria-labelledby': z,
				'aria-modal': G ? 'true' : void 0,
				'data-state': G ? 'open' : 'closed',
				tabindex: -1,
				hidden: G ? void 0 : !0,
				style: Cn({ display: G ? void 0 : 'none' })
			}),
			action: (G) => {
				let q = pt,
					K = pt;
				const z = Pt(
					$t([$], ([x]) => {
						if (!x) return;
						const M = si({
							immediate: !1,
							escapeDeactivates: !0,
							clickOutsideDeactivates: !0,
							returnFocusOnDeactivate: !1,
							fallbackFocus: G
						});
						(q = M.activate), (K = M.deactivate);
						const H = M.useFocusTrap(G);
						return H && H.destroy ? H.destroy : M.deactivate;
					}),
					$t(
						[o, $],
						([x, M]) =>
							Br(G, {
								enabled: M,
								handler: (H) => {
									var Pe;
									if (((Pe = ce(c)) == null || Pe(H), H.defaultPrevented)) return;
									const W = ce(Hn),
										Te = vn(W) === ce(_.content);
									x && Te && j();
								}
							}).destroy
					),
					$t([l], ([x]) => {
						if (!x) return pt;
						const M = Qn(G, {
							handler: () => {
								j();
							}
						});
						return M && M.destroy ? M.destroy : pt;
					}),
					$t([v], ([x]) => {
						Wt().then(() => {
							x ? q() : K();
						});
					})
				);
				return {
					destroy: () => {
						w(), z();
					}
				};
			}
		}),
		U = nt(Ut('portalled'), {
			stores: a,
			returned: (G) => ({ 'data-portal': G ? '' : void 0 }),
			action: (G) => {
				const q = $t([a], ([K]) => {
					if (!K) return pt;
					const z = Eo(G, K);
					if (z === null) return pt;
					const x = vr(G, z);
					return x && x.destroy ? x.destroy : pt;
				});
				return {
					destroy() {
						q();
					}
				};
			}
		}),
		ne = nt(Ut('title'), { stores: [_.title], returned: ([G]) => ({ id: G }) }),
		oe = nt(Ut('description'), { stores: [_.description], returned: ([G]) => ({ id: G }) }),
		O = nt(Ut('close'), {
			returned: () => ({ type: 'button' }),
			action: (G) => ({
				destroy: Pt(
					mt(G, 'click', () => {
						j();
					}),
					mt(G, 'keydown', (K) => {
						(K.key !== Ve.SPACE && K.key !== Ve.ENTER) || (K.preventDefault(), j());
					})
				)
			})
		});
	return (
		$t([$, t], ([G, q]) => {
			if (sn) {
				if ((q && G && (w = Io()), G)) {
					const K = document.getElementById(ce(_.content));
					kl({ prop: ce(f), defaultEl: K });
				}
				return () => {
					ce(i) || w();
				};
			}
		}),
		{
			ids: _,
			elements: {
				content: F,
				trigger: Y,
				title: ne,
				description: oe,
				overlay: V,
				close: O,
				portalled: U
			},
			states: { open: $ },
			options: n
		}
	);
}
const { name: wl } = En('select');
function Li(s) {
	const e = yi({ ...s, builder: 'select' }),
		n = nt(wl('group'), { returned: () => (o) => ({ role: 'group', 'aria-labelledby': o }) }),
		t = nt(wl('group-label'), { returned: () => (o) => ({ id: o }) }),
		l = _t(e.states.selected, (o) =>
			Array.isArray(o) ? o.map((r) => r.label).join(', ') : ((o == null ? void 0 : o.label) ?? '')
		);
	return {
		...e,
		elements: { ...e.elements, group: n, groupLabel: t },
		states: { ...e.states, selectedLabel: l }
	};
}
const Fi = { defaultChecked: !1, disabled: !1, required: !1, name: '', value: '' },
	{ name: Tl } = En('switch');
function ji(s) {
	const e = { ...Fi, ...s },
		n = cn(Ln(e, 'checked')),
		{ disabled: t, required: l, name: o, value: r } = n,
		a = e.checked ?? ct(e.defaultChecked),
		i = kn(a, e == null ? void 0 : e.onCheckedChange);
	function f() {
		ce(t) || i.update((h) => !h);
	}
	const u = nt(Tl(), {
			stores: [i, t, l],
			returned: ([h, _, p]) => ({
				'data-disabled': Jt(_),
				disabled: Jt(_),
				'data-state': h ? 'checked' : 'unchecked',
				type: 'button',
				role: 'switch',
				'aria-checked': h ? 'true' : 'false',
				'aria-required': p ? 'true' : void 0
			}),
			action(h) {
				return {
					destroy: Pt(
						mt(h, 'click', () => {
							f();
						}),
						mt(h, 'keydown', (p) => {
							(p.key !== Ve.ENTER && p.key !== Ve.SPACE) || (p.preventDefault(), f());
						})
					)
				};
			}
		}),
		c = nt(Tl('input'), {
			stores: [i, o, l, t, r],
			returned: ([h, _, p, $, v]) => ({
				type: 'checkbox',
				'aria-hidden': !0,
				hidden: !0,
				tabindex: -1,
				name: _,
				value: v,
				checked: h,
				required: p,
				disabled: Jt($),
				style: Cn({
					position: 'absolute',
					opacity: 0,
					'pointer-events': 'none',
					margin: 0,
					transform: 'translateX(-100%)'
				})
			})
		});
	return { elements: { root: u, input: c }, states: { checked: i }, options: n };
}
const zi = { orientation: 'horizontal', activateOnFocus: !0, loop: !0, autoSet: !0 },
	{ name: In, selector: Bi } = En('tabs');
function Ki(s) {
	const e = { ...zi, ...s },
		n = cn(Ln(e, 'defaultValue', 'value', 'onValueChange', 'autoSet')),
		{ orientation: t, activateOnFocus: l, loop: o } = n,
		r = e.value ?? ct(e.defaultValue),
		a = kn(r, e == null ? void 0 : e.onValueChange);
	let i = e.defaultValue ?? ce(a);
	const f = nt(In(), { stores: t, returned: (p) => ({ 'data-orientation': p }) }),
		u = nt(In('list'), {
			stores: t,
			returned: (p) => ({ role: 'tablist', 'aria-orientation': p, 'data-orientation': p })
		}),
		c = (p) => (typeof p == 'string' ? { value: p } : p),
		h = nt(In('trigger'), {
			stores: [a, t],
			returned:
				([p, $]) =>
				(v) => {
					const { value: w, disabled: T } = c(v);
					!p && !i && e.autoSet && ((i = w), (p = w), a.set(w));
					const Y = (sn ? p : i) === w;
					return {
						type: 'button',
						role: 'tab',
						'data-state': Y ? 'active' : 'inactive',
						tabindex: Y ? 0 : -1,
						'data-value': w,
						'data-orientation': $,
						'data-disabled': Jt(T),
						disabled: Jt(T)
					};
				},
			action: (p) => ({
				destroy: Pt(
					mt(p, 'focus', () => {
						const v = p.dataset.disabled === 'true',
							w = p.dataset.value;
						ce(l) && !v && w !== void 0 && a.set(w);
					}),
					mt(p, 'click', (v) => {
						if ((p.focus(), v.preventDefault(), p.dataset.disabled === 'true')) return;
						const T = p.dataset.value;
						p.focus(), T !== void 0 && a.set(T);
					}),
					mt(p, 'keydown', (v) => {
						const w = p.dataset.value;
						if (!w) return;
						const T = v.currentTarget;
						if (!dt(T)) return;
						const j = T.closest(Bi());
						if (!dt(j)) return;
						const Y = ce(o),
							F = Array.from(j.querySelectorAll('[role="tab"]'))
								.filter((G) => dt(G))
								.filter((G) => !G.hasAttribute('data-disabled')),
							U = F.findIndex((G) => G === v.target),
							ne = Oi(j),
							{ nextKey: oe, prevKey: O } = Kr(ne, ce(t));
						v.key === oe
							? (v.preventDefault(), Po(F, U, Y).focus())
							: v.key === O
								? (v.preventDefault(), No(F, U, Y).focus())
								: v.key === Ve.ENTER || v.key === Ve.SPACE
									? (v.preventDefault(), a.set(w))
									: v.key === Ve.HOME
										? (v.preventDefault(), F[0].focus())
										: v.key === Ve.END && (v.preventDefault(), vn(F).focus());
					})
				)
			})
		}),
		_ = nt(In('content'), {
			stores: a,
			returned: (p) => ($) => ({
				role: 'tabpanel',
				'aria-labelledby': $,
				hidden: sn ? (p === $ ? void 0 : !0) : i === $ ? void 0 : !0,
				tabindex: 0
			})
		});
	return {
		elements: { root: f, list: u, trigger: h, content: _ },
		states: { value: a },
		options: n
	};
}
function yo() {
	return {
		NAME: 'dialog',
		PARTS: ['close', 'content', 'description', 'overlay', 'portal', 'title', 'trigger']
	};
}
function qi(s) {
	const { NAME: e, PARTS: n } = yo(),
		t = Sn(e, n),
		l = { ...Ri({ ...wn(s), role: 'dialog', forceVisible: !0 }), getAttrs: t };
	return qt(e, l), { ...l, updateOption: Tn(l.options) };
}
function Zt() {
	const { NAME: s } = yo();
	return Ht(s);
}
const Hi = (s) => ({ ids: s & 1 }),
	Al = (s) => ({ ids: s[0] });
function Ui(s) {
	let e;
	const n = s[12].default,
		t = ie(n, s, s[11], Al);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, [o]) {
			t && t.p && (!e || o & 2049) && ae(t, n, l, l[11], e ? ue(n, l[11], o, Hi) : fe(l[11]), Al);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Wi(s, e, n) {
	let t,
		{ $$slots: l = {}, $$scope: o } = e,
		{ preventScroll: r = void 0 } = e,
		{ closeOnEscape: a = void 0 } = e,
		{ closeOnOutsideClick: i = void 0 } = e,
		{ portal: f = void 0 } = e,
		{ open: u = void 0 } = e,
		{ onOpenChange: c = void 0 } = e,
		{ openFocus: h = void 0 } = e,
		{ closeFocus: _ = void 0 } = e,
		{ onOutsideClick: p = void 0 } = e;
	const {
			states: { open: $ },
			updateOption: v,
			ids: w
		} = qi({
			closeOnEscape: a,
			preventScroll: r,
			closeOnOutsideClick: i,
			portal: f,
			forceVisible: !0,
			defaultOpen: u,
			openFocus: h,
			closeFocus: _,
			onOutsideClick: p,
			onOpenChange: ({ next: j }) => (u !== j && (c == null || c(j), n(2, (u = j))), j)
		}),
		T = _t([w.content, w.description, w.title], ([j, Y, V]) => ({
			content: j,
			description: Y,
			title: V
		}));
	return (
		Ae(s, T, (j) => n(0, (t = j))),
		(s.$$set = (j) => {
			'preventScroll' in j && n(3, (r = j.preventScroll)),
				'closeOnEscape' in j && n(4, (a = j.closeOnEscape)),
				'closeOnOutsideClick' in j && n(5, (i = j.closeOnOutsideClick)),
				'portal' in j && n(6, (f = j.portal)),
				'open' in j && n(2, (u = j.open)),
				'onOpenChange' in j && n(7, (c = j.onOpenChange)),
				'openFocus' in j && n(8, (h = j.openFocus)),
				'closeFocus' in j && n(9, (_ = j.closeFocus)),
				'onOutsideClick' in j && n(10, (p = j.onOutsideClick)),
				'$$scope' in j && n(11, (o = j.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 4 && u !== void 0 && $.set(u),
				s.$$.dirty & 8 && v('preventScroll', r),
				s.$$.dirty & 16 && v('closeOnEscape', a),
				s.$$.dirty & 32 && v('closeOnOutsideClick', i),
				s.$$.dirty & 64 && v('portal', f),
				s.$$.dirty & 256 && v('openFocus', h),
				s.$$.dirty & 512 && v('closeFocus', _),
				s.$$.dirty & 1024 && v('onOutsideClick', p);
		}),
		[t, T, u, r, a, i, f, c, h, _, p, o, l]
	);
}
class Mo extends he {
	constructor(e) {
		super(),
			pe(this, e, Wi, Ui, me, {
				preventScroll: 3,
				closeOnEscape: 4,
				closeOnOutsideClick: 5,
				portal: 6,
				open: 2,
				onOpenChange: 7,
				openFocus: 8,
				closeFocus: 9,
				onOutsideClick: 10
			});
	}
}
const Gi = (s) => ({ builder: s & 8 }),
	Ol = (s) => ({ builder: s[3] }),
	Ji = (s) => ({ builder: s & 8 }),
	Nl = (s) => ({ builder: s[3] });
function Xi(s) {
	let e = s[1],
		n,
		t,
		l = s[1] && Un(s);
	return {
		c() {
			l && l.c(), (n = te());
		},
		l(o) {
			l && l.l(o), (n = te());
		},
		m(o, r) {
			l && l.m(o, r), b(o, n, r), (t = !0);
		},
		p(o, r) {
			o[1]
				? e
					? me(e, o[1])
						? (l.d(1), (l = Un(o)), (e = o[1]), l.c(), l.m(n.parentNode, n))
						: l.p(o, r)
					: ((l = Un(o)), (e = o[1]), l.c(), l.m(n.parentNode, n))
				: e && (l.d(1), (l = null), (e = o[1]));
		},
		i(o) {
			t || (d(l, o), (t = !0));
		},
		o(o) {
			g(l, o), (t = !1);
		},
		d(o) {
			o && m(n), l && l.d(o);
		}
	};
}
function Yi(s) {
	let e;
	const n = s[9].default,
		t = ie(n, s, s[8], Nl);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 264) && ae(t, n, l, l[8], e ? ue(n, l[8], o, Ji) : fe(l[8]), Nl);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Un(s) {
	let e, n, t, l;
	const o = s[9].default,
		r = ie(o, s, s[8], Ol);
	let a = [s[3], s[5]],
		i = {};
	for (let f = 0; f < a.length; f += 1) i = I(i, a[f]);
	return {
		c() {
			(e = y(s[1])), r && r.c(), this.h();
		},
		l(f) {
			e = D(f, (s[1] || 'null').toUpperCase(), {});
			var u = B(e);
			r && r.l(u), u.forEach(m), this.h();
		},
		h() {
			al(s[1])(e, i);
		},
		m(f, u) {
			b(f, e, u), r && r.m(e, null), s[10](e), (n = !0), t || ((l = je(s[3].action(e))), (t = !0));
		},
		p(f, u) {
			r && r.p && (!n || u & 264) && ae(r, o, f, f[8], n ? ue(o, f[8], u, Gi) : fe(f[8]), Ol),
				al(f[1])(e, (i = ge(a, [u & 8 && f[3], u & 32 && f[5]])));
		},
		i(f) {
			n || (d(r, f), (n = !0));
		},
		o(f) {
			g(r, f), (n = !1);
		},
		d(f) {
			f && m(e), r && r.d(f), s[10](null), (t = !1), l();
		}
	};
}
function Zi(s) {
	let e, n, t, l;
	const o = [Yi, Xi],
		r = [];
	function a(i, f) {
		return i[2] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = r[e] = o[e](s)),
		{
			c() {
				n.c(), (t = te());
			},
			l(i) {
				n.l(i), (t = te());
			},
			m(i, f) {
				r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, [f]) {
				let u = e;
				(e = a(i)),
					e === u
						? r[e].p(i, f)
						: (Ce(),
							g(r[u], 1, 1, () => {
								r[u] = null;
							}),
							Ee(),
							(n = r[e]),
							n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
							d(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), r[e].d(i);
			}
		}
	);
}
function Qi(s, e, n) {
	let t;
	const l = ['level', 'asChild', 'id', 'el'];
	let o = ee(e, l),
		r,
		{ $$slots: a = {}, $$scope: i } = e,
		{ level: f = 'h2' } = e,
		{ asChild: u = !1 } = e,
		{ id: c = void 0 } = e,
		{ el: h = void 0 } = e;
	const {
		elements: { title: _ },
		ids: p,
		getAttrs: $
	} = Zt();
	Ae(s, _, (T) => n(7, (r = T)));
	const v = $('title');
	function w(T) {
		Ne[T ? 'unshift' : 'push'](() => {
			(h = T), n(0, h);
		});
	}
	return (
		(s.$$set = (T) => {
			(e = I(I({}, e), ke(T))),
				n(5, (o = ee(e, l))),
				'level' in T && n(1, (f = T.level)),
				'asChild' in T && n(2, (u = T.asChild)),
				'id' in T && n(6, (c = T.id)),
				'el' in T && n(0, (h = T.el)),
				'$$scope' in T && n(8, (i = T.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 64 && c && p.title.set(c),
				s.$$.dirty & 128 && n(3, (t = r)),
				s.$$.dirty & 8 && Object.assign(t, v);
		}),
		[h, f, u, t, _, o, c, r, i, a, w]
	);
}
class xi extends he {
	constructor(e) {
		super(), pe(this, e, Qi, Zi, me, { level: 1, asChild: 2, id: 6, el: 0 });
	}
}
const ea = (s) => ({ builder: s & 4 }),
	Pl = (s) => ({ builder: s[2] }),
	ta = (s) => ({ builder: s & 4 }),
	Il = (s) => ({ builder: s[2] });
function na(s) {
	let e, n, t, l;
	const o = s[8].default,
		r = ie(o, s, s[7], Pl);
	let a = [s[2], { type: 'button' }, s[5]],
		i = {};
	for (let f = 0; f < a.length; f += 1) i = I(i, a[f]);
	return {
		c() {
			(e = y('button')), r && r.c(), this.h();
		},
		l(f) {
			e = D(f, 'BUTTON', { type: !0 });
			var u = B(e);
			r && r.l(u), u.forEach(m), this.h();
		},
		h() {
			re(e, i);
		},
		m(f, u) {
			b(f, e, u),
				r && r.m(e, null),
				e.autofocus && e.focus(),
				s[9](e),
				(n = !0),
				t ||
					((l = [je(s[2].action(e)), de(e, 'm-click', s[4]), de(e, 'm-keydown', s[4])]), (t = !0));
		},
		p(f, u) {
			r && r.p && (!n || u & 132) && ae(r, o, f, f[7], n ? ue(o, f[7], u, ea) : fe(f[7]), Pl),
				re(e, (i = ge(a, [u & 4 && f[2], { type: 'button' }, u & 32 && f[5]])));
		},
		i(f) {
			n || (d(r, f), (n = !0));
		},
		o(f) {
			g(r, f), (n = !1);
		},
		d(f) {
			f && m(e), r && r.d(f), s[9](null), (t = !1), xe(l);
		}
	};
}
function la(s) {
	let e;
	const n = s[8].default,
		t = ie(n, s, s[7], Il);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 132) && ae(t, n, l, l[7], e ? ue(n, l[7], o, ta) : fe(l[7]), Il);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function sa(s) {
	let e, n, t, l;
	const o = [la, na],
		r = [];
	function a(i, f) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = r[e] = o[e](s)),
		{
			c() {
				n.c(), (t = te());
			},
			l(i) {
				n.l(i), (t = te());
			},
			m(i, f) {
				r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, [f]) {
				let u = e;
				(e = a(i)),
					e === u
						? r[e].p(i, f)
						: (Ce(),
							g(r[u], 1, 1, () => {
								r[u] = null;
							}),
							Ee(),
							(n = r[e]),
							n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
							d(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), r[e].d(i);
			}
		}
	);
}
function oa(s, e, n) {
	let t;
	const l = ['asChild', 'el'];
	let o = ee(e, l),
		r,
		{ $$slots: a = {}, $$scope: i } = e,
		{ asChild: f = !1 } = e,
		{ el: u = void 0 } = e;
	const {
		elements: { close: c },
		getAttrs: h
	} = Zt();
	Ae(s, c, (v) => n(6, (r = v)));
	const _ = Yt(),
		p = h('close');
	function $(v) {
		Ne[v ? 'unshift' : 'push'](() => {
			(u = v), n(0, u);
		});
	}
	return (
		(s.$$set = (v) => {
			(e = I(I({}, e), ke(v))),
				n(5, (o = ee(e, l))),
				'asChild' in v && n(1, (f = v.asChild)),
				'el' in v && n(0, (u = v.el)),
				'$$scope' in v && n(7, (i = v.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 64 && n(2, (t = r)), s.$$.dirty & 4 && Object.assign(t, p);
		}),
		[u, f, t, c, _, o, r, i, a, $]
	);
}
class Vo extends he {
	constructor(e) {
		super(), pe(this, e, oa, sa, me, { asChild: 1, el: 0 });
	}
}
const ra = (s) => ({ builder: s & 4 }),
	Dl = (s) => ({ builder: s[2] }),
	ia = (s) => ({ builder: s & 4 }),
	yl = (s) => ({ builder: s[2] });
function aa(s) {
	let e, n, t, l;
	const o = s[7].default,
		r = ie(o, s, s[6], Dl);
	let a = [s[2], s[4]],
		i = {};
	for (let f = 0; f < a.length; f += 1) i = I(i, a[f]);
	return {
		c() {
			(e = y('div')), r && r.c(), this.h();
		},
		l(f) {
			e = D(f, 'DIV', {});
			var u = B(e);
			r && r.l(u), u.forEach(m), this.h();
		},
		h() {
			re(e, i);
		},
		m(f, u) {
			b(f, e, u), r && r.m(e, null), s[8](e), (n = !0), t || ((l = je(s[2].action(e))), (t = !0));
		},
		p(f, u) {
			r && r.p && (!n || u & 68) && ae(r, o, f, f[6], n ? ue(o, f[6], u, ra) : fe(f[6]), Dl),
				re(e, (i = ge(a, [u & 4 && f[2], u & 16 && f[4]])));
		},
		i(f) {
			n || (d(r, f), (n = !0));
		},
		o(f) {
			g(r, f), (n = !1);
		},
		d(f) {
			f && m(e), r && r.d(f), s[8](null), (t = !1), l();
		}
	};
}
function fa(s) {
	let e;
	const n = s[7].default,
		t = ie(n, s, s[6], yl);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 68) && ae(t, n, l, l[6], e ? ue(n, l[6], o, ia) : fe(l[6]), yl);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function ua(s) {
	let e, n, t, l;
	const o = [fa, aa],
		r = [];
	function a(i, f) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = r[e] = o[e](s)),
		{
			c() {
				n.c(), (t = te());
			},
			l(i) {
				n.l(i), (t = te());
			},
			m(i, f) {
				r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, [f]) {
				let u = e;
				(e = a(i)),
					e === u
						? r[e].p(i, f)
						: (Ce(),
							g(r[u], 1, 1, () => {
								r[u] = null;
							}),
							Ee(),
							(n = r[e]),
							n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
							d(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), r[e].d(i);
			}
		}
	);
}
function ca(s, e, n) {
	let t;
	const l = ['asChild', 'el'];
	let o = ee(e, l),
		r,
		{ $$slots: a = {}, $$scope: i } = e,
		{ asChild: f = !1 } = e,
		{ el: u = void 0 } = e;
	const {
		elements: { portalled: c },
		getAttrs: h
	} = Zt();
	Ae(s, c, ($) => n(5, (r = $)));
	const _ = h('portal');
	function p($) {
		Ne[$ ? 'unshift' : 'push'](() => {
			(u = $), n(0, u);
		});
	}
	return (
		(s.$$set = ($) => {
			(e = I(I({}, e), ke($))),
				n(4, (o = ee(e, l))),
				'asChild' in $ && n(1, (f = $.asChild)),
				'el' in $ && n(0, (u = $.el)),
				'$$scope' in $ && n(6, (i = $.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 32 && n(2, (t = r)), s.$$.dirty & 4 && Object.assign(t, _);
		}),
		[u, f, t, c, o, r, i, a, p]
	);
}
let Ro = class extends he {
	constructor(e) {
		super(), pe(this, e, ca, ua, me, { asChild: 1, el: 0 });
	}
};
const da = (s) => ({ builder: s[0] & 256 }),
	Ml = (s) => ({ builder: s[8] }),
	ma = (s) => ({ builder: s[0] & 256 }),
	Vl = (s) => ({ builder: s[8] }),
	_a = (s) => ({ builder: s[0] & 256 }),
	Rl = (s) => ({ builder: s[8] }),
	ga = (s) => ({ builder: s[0] & 256 }),
	Ll = (s) => ({ builder: s[8] }),
	ha = (s) => ({ builder: s[0] & 256 }),
	Fl = (s) => ({ builder: s[8] }),
	pa = (s) => ({ builder: s[0] & 256 }),
	jl = (s) => ({ builder: s[8] });
function $a(s) {
	let e, n, t, l;
	const o = s[16].default,
		r = ie(o, s, s[15], Ml);
	let a = [s[8], s[12]],
		i = {};
	for (let f = 0; f < a.length; f += 1) i = I(i, a[f]);
	return {
		c() {
			(e = y('div')), r && r.c(), this.h();
		},
		l(f) {
			e = D(f, 'DIV', {});
			var u = B(e);
			r && r.l(u), u.forEach(m), this.h();
		},
		h() {
			re(e, i);
		},
		m(f, u) {
			b(f, e, u),
				r && r.m(e, null),
				s[56](e),
				(n = !0),
				t ||
					((l = [
						je(s[8].action(e)),
						de(e, 'pointerdown', s[45]),
						de(e, 'pointermove', s[46]),
						de(e, 'pointerup', s[47]),
						de(e, 'touchend', s[48]),
						de(e, 'touchstart', s[49]),
						de(e, 'touchcancel', s[50]),
						de(e, 'touchmove', s[51])
					]),
					(t = !0));
		},
		p(f, u) {
			r &&
				r.p &&
				(!n || u[0] & 33024) &&
				ae(r, o, f, f[15], n ? ue(o, f[15], u, da) : fe(f[15]), Ml),
				re(e, (i = ge(a, [u[0] & 256 && f[8], u[0] & 4096 && f[12]])));
		},
		i(f) {
			n || (d(r, f), (n = !0));
		},
		o(f) {
			g(r, f), (n = !1);
		},
		d(f) {
			f && m(e), r && r.d(f), s[56](null), (t = !1), xe(l);
		}
	};
}
function ba(s) {
	let e, n, t, l, o;
	const r = s[16].default,
		a = ie(r, s, s[15], Vl);
	let i = [s[8], s[12]],
		f = {};
	for (let u = 0; u < i.length; u += 1) f = I(f, i[u]);
	return {
		c() {
			(e = y('div')), a && a.c(), this.h();
		},
		l(u) {
			e = D(u, 'DIV', {});
			var c = B(e);
			a && a.l(c), c.forEach(m), this.h();
		},
		h() {
			re(e, f);
		},
		m(u, c) {
			b(u, e, c),
				a && a.m(e, null),
				s[55](e),
				(t = !0),
				l ||
					((o = [
						je(s[8].action(e)),
						de(e, 'pointerdown', s[38]),
						de(e, 'pointermove', s[39]),
						de(e, 'pointerup', s[40]),
						de(e, 'touchend', s[41]),
						de(e, 'touchstart', s[42]),
						de(e, 'touchcancel', s[43]),
						de(e, 'touchmove', s[44])
					]),
					(l = !0));
		},
		p(u, c) {
			(s = u),
				a &&
					a.p &&
					(!t || c[0] & 33024) &&
					ae(a, r, s, s[15], t ? ue(r, s[15], c, ma) : fe(s[15]), Vl),
				re(e, (f = ge(i, [c[0] & 256 && s[8], c[0] & 4096 && s[12]])));
		},
		i(u) {
			t || (d(a, u), n && n.end(1), (t = !0));
		},
		o(u) {
			g(a, u), u && (n = mn(e, s[5], s[6])), (t = !1);
		},
		d(u) {
			u && m(e), a && a.d(u), s[55](null), u && n && n.end(), (l = !1), xe(o);
		}
	};
}
function va(s) {
	let e, n, t, l, o;
	const r = s[16].default,
		a = ie(r, s, s[15], Rl);
	let i = [s[8], s[12]],
		f = {};
	for (let u = 0; u < i.length; u += 1) f = I(f, i[u]);
	return {
		c() {
			(e = y('div')), a && a.c(), this.h();
		},
		l(u) {
			e = D(u, 'DIV', {});
			var c = B(e);
			a && a.l(c), c.forEach(m), this.h();
		},
		h() {
			re(e, f);
		},
		m(u, c) {
			b(u, e, c),
				a && a.m(e, null),
				s[54](e),
				(t = !0),
				l ||
					((o = [
						je(s[8].action(e)),
						de(e, 'pointerdown', s[31]),
						de(e, 'pointermove', s[32]),
						de(e, 'pointerup', s[33]),
						de(e, 'touchend', s[34]),
						de(e, 'touchstart', s[35]),
						de(e, 'touchcancel', s[36]),
						de(e, 'touchmove', s[37])
					]),
					(l = !0));
		},
		p(u, c) {
			(s = u),
				a &&
					a.p &&
					(!t || c[0] & 33024) &&
					ae(a, r, s, s[15], t ? ue(r, s[15], c, _a) : fe(s[15]), Rl),
				re(e, (f = ge(i, [c[0] & 256 && s[8], c[0] & 4096 && s[12]])));
		},
		i(u) {
			t ||
				(d(a, u),
				u &&
					(n ||
						Dt(() => {
							(n = _n(e, s[3], s[4])), n.start();
						})),
				(t = !0));
		},
		o(u) {
			g(a, u), (t = !1);
		},
		d(u) {
			u && m(e), a && a.d(u), s[54](null), (l = !1), xe(o);
		}
	};
}
function ka(s) {
	let e, n, t, l, o, r;
	const a = s[16].default,
		i = ie(a, s, s[15], Ll);
	let f = [s[8], s[12]],
		u = {};
	for (let c = 0; c < f.length; c += 1) u = I(u, f[c]);
	return {
		c() {
			(e = y('div')), i && i.c(), this.h();
		},
		l(c) {
			e = D(c, 'DIV', {});
			var h = B(e);
			i && i.l(h), h.forEach(m), this.h();
		},
		h() {
			re(e, u);
		},
		m(c, h) {
			b(c, e, h),
				i && i.m(e, null),
				s[53](e),
				(l = !0),
				o ||
					((r = [
						je(s[8].action(e)),
						de(e, 'pointerdown', s[24]),
						de(e, 'pointermove', s[25]),
						de(e, 'pointerup', s[26]),
						de(e, 'touchend', s[27]),
						de(e, 'touchstart', s[28]),
						de(e, 'touchcancel', s[29]),
						de(e, 'touchmove', s[30])
					]),
					(o = !0));
		},
		p(c, h) {
			(s = c),
				i &&
					i.p &&
					(!l || h[0] & 33024) &&
					ae(i, a, s, s[15], l ? ue(a, s[15], h, ga) : fe(s[15]), Ll),
				re(e, (u = ge(f, [h[0] & 256 && s[8], h[0] & 4096 && s[12]])));
		},
		i(c) {
			l ||
				(d(i, c),
				c &&
					Dt(() => {
						l && (t && t.end(1), (n = _n(e, s[3], s[4])), n.start());
					}),
				(l = !0));
		},
		o(c) {
			g(i, c), n && n.invalidate(), c && (t = mn(e, s[5], s[6])), (l = !1);
		},
		d(c) {
			c && m(e), i && i.d(c), s[53](null), c && t && t.end(), (o = !1), xe(r);
		}
	};
}
function Ca(s) {
	let e, n, t, l, o;
	const r = s[16].default,
		a = ie(r, s, s[15], Fl);
	let i = [s[8], s[12]],
		f = {};
	for (let u = 0; u < i.length; u += 1) f = I(f, i[u]);
	return {
		c() {
			(e = y('div')), a && a.c(), this.h();
		},
		l(u) {
			e = D(u, 'DIV', {});
			var c = B(e);
			a && a.l(c), c.forEach(m), this.h();
		},
		h() {
			re(e, f);
		},
		m(u, c) {
			b(u, e, c),
				a && a.m(e, null),
				s[52](e),
				(t = !0),
				l ||
					((o = [
						je(s[8].action(e)),
						de(e, 'pointerdown', s[17]),
						de(e, 'pointermove', s[18]),
						de(e, 'pointerup', s[19]),
						de(e, 'touchend', s[20]),
						de(e, 'touchstart', s[21]),
						de(e, 'touchcancel', s[22]),
						de(e, 'touchmove', s[23])
					]),
					(l = !0));
		},
		p(u, c) {
			(s = u),
				a &&
					a.p &&
					(!t || c[0] & 33024) &&
					ae(a, r, s, s[15], t ? ue(r, s[15], c, ha) : fe(s[15]), Fl),
				re(e, (f = ge(i, [c[0] & 256 && s[8], c[0] & 4096 && s[12]])));
		},
		i(u) {
			t ||
				(d(a, u),
				u &&
					Dt(() => {
						t && (n || (n = fn(e, s[1], s[2], !0)), n.run(1));
					}),
				(t = !0));
		},
		o(u) {
			g(a, u), u && (n || (n = fn(e, s[1], s[2], !1)), n.run(0)), (t = !1);
		},
		d(u) {
			u && m(e), a && a.d(u), s[52](null), u && n && n.end(), (l = !1), xe(o);
		}
	};
}
function Ea(s) {
	let e;
	const n = s[16].default,
		t = ie(n, s, s[15], jl);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t &&
				t.p &&
				(!e || o[0] & 33024) &&
				ae(t, n, l, l[15], e ? ue(n, l[15], o, pa) : fe(l[15]), jl);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Sa(s) {
	let e, n, t, l;
	const o = [Ea, Ca, ka, va, ba, $a],
		r = [];
	function a(i, f) {
		return i[7] && i[9]
			? 0
			: i[1] && i[9]
				? 1
				: i[3] && i[5] && i[9]
					? 2
					: i[3] && i[9]
						? 3
						: i[5] && i[9]
							? 4
							: i[9]
								? 5
								: -1;
	}
	return (
		~(e = a(s)) && (n = r[e] = o[e](s)),
		{
			c() {
				n && n.c(), (t = te());
			},
			l(i) {
				n && n.l(i), (t = te());
			},
			m(i, f) {
				~e && r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, f) {
				let u = e;
				(e = a(i)),
					e === u
						? ~e && r[e].p(i, f)
						: (n &&
								(Ce(),
								g(r[u], 1, 1, () => {
									r[u] = null;
								}),
								Ee()),
							~e
								? ((n = r[e]),
									n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
									d(n, 1),
									n.m(t.parentNode, t))
								: (n = null));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), ~e && r[e].d(i);
			}
		}
	);
}
function wa(s, e, n) {
	let t;
	const l = [
		'transition',
		'transitionConfig',
		'inTransition',
		'inTransitionConfig',
		'outTransition',
		'outTransitionConfig',
		'asChild',
		'id',
		'el'
	];
	let o = ee(e, l),
		r,
		a,
		{ $$slots: i = {}, $$scope: f } = e,
		{ transition: u = void 0 } = e,
		{ transitionConfig: c = void 0 } = e,
		{ inTransition: h = void 0 } = e,
		{ inTransitionConfig: _ = void 0 } = e,
		{ outTransition: p = void 0 } = e,
		{ outTransitionConfig: $ = void 0 } = e,
		{ asChild: v = !1 } = e,
		{ id: w = void 0 } = e,
		{ el: T = void 0 } = e;
	const {
		elements: { content: j },
		states: { open: Y },
		ids: V,
		getAttrs: F
	} = Zt();
	Ae(s, j, (Z) => n(14, (r = Z))), Ae(s, Y, (Z) => n(9, (a = Z)));
	const U = F('content');
	function ne(Z) {
		ve.call(this, s, Z);
	}
	function oe(Z) {
		ve.call(this, s, Z);
	}
	function O(Z) {
		ve.call(this, s, Z);
	}
	function G(Z) {
		ve.call(this, s, Z);
	}
	function q(Z) {
		ve.call(this, s, Z);
	}
	function K(Z) {
		ve.call(this, s, Z);
	}
	function z(Z) {
		ve.call(this, s, Z);
	}
	function x(Z) {
		ve.call(this, s, Z);
	}
	function M(Z) {
		ve.call(this, s, Z);
	}
	function H(Z) {
		ve.call(this, s, Z);
	}
	function W(Z) {
		ve.call(this, s, Z);
	}
	function Te(Z) {
		ve.call(this, s, Z);
	}
	function Pe(Z) {
		ve.call(this, s, Z);
	}
	function De(Z) {
		ve.call(this, s, Z);
	}
	function Ie(Z) {
		ve.call(this, s, Z);
	}
	function we(Z) {
		ve.call(this, s, Z);
	}
	function le(Z) {
		ve.call(this, s, Z);
	}
	function se(Z) {
		ve.call(this, s, Z);
	}
	function $e(Z) {
		ve.call(this, s, Z);
	}
	function Ue(Z) {
		ve.call(this, s, Z);
	}
	function He(Z) {
		ve.call(this, s, Z);
	}
	function ze(Z) {
		ve.call(this, s, Z);
	}
	function A(Z) {
		ve.call(this, s, Z);
	}
	function Q(Z) {
		ve.call(this, s, Z);
	}
	function Oe(Z) {
		ve.call(this, s, Z);
	}
	function Re(Z) {
		ve.call(this, s, Z);
	}
	function Le(Z) {
		ve.call(this, s, Z);
	}
	function Me(Z) {
		ve.call(this, s, Z);
	}
	function Xe(Z) {
		ve.call(this, s, Z);
	}
	function Je(Z) {
		ve.call(this, s, Z);
	}
	function We(Z) {
		ve.call(this, s, Z);
	}
	function Be(Z) {
		ve.call(this, s, Z);
	}
	function Ye(Z) {
		ve.call(this, s, Z);
	}
	function st(Z) {
		ve.call(this, s, Z);
	}
	function gt(Z) {
		ve.call(this, s, Z);
	}
	function ht(Z) {
		Ne[Z ? 'unshift' : 'push'](() => {
			(T = Z), n(0, T);
		});
	}
	function it(Z) {
		Ne[Z ? 'unshift' : 'push'](() => {
			(T = Z), n(0, T);
		});
	}
	function tn(Z) {
		Ne[Z ? 'unshift' : 'push'](() => {
			(T = Z), n(0, T);
		});
	}
	function Nn(Z) {
		Ne[Z ? 'unshift' : 'push'](() => {
			(T = Z), n(0, T);
		});
	}
	function zn(Z) {
		Ne[Z ? 'unshift' : 'push'](() => {
			(T = Z), n(0, T);
		});
	}
	return (
		(s.$$set = (Z) => {
			(e = I(I({}, e), ke(Z))),
				n(12, (o = ee(e, l))),
				'transition' in Z && n(1, (u = Z.transition)),
				'transitionConfig' in Z && n(2, (c = Z.transitionConfig)),
				'inTransition' in Z && n(3, (h = Z.inTransition)),
				'inTransitionConfig' in Z && n(4, (_ = Z.inTransitionConfig)),
				'outTransition' in Z && n(5, (p = Z.outTransition)),
				'outTransitionConfig' in Z && n(6, ($ = Z.outTransitionConfig)),
				'asChild' in Z && n(7, (v = Z.asChild)),
				'id' in Z && n(13, (w = Z.id)),
				'el' in Z && n(0, (T = Z.el)),
				'$$scope' in Z && n(15, (f = Z.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty[0] & 8192 && w && V.content.set(w),
				s.$$.dirty[0] & 16384 && n(8, (t = r)),
				s.$$.dirty[0] & 256 && Object.assign(t, U);
		}),
		[
			T,
			u,
			c,
			h,
			_,
			p,
			$,
			v,
			t,
			a,
			j,
			Y,
			o,
			w,
			r,
			f,
			i,
			ne,
			oe,
			O,
			G,
			q,
			K,
			z,
			x,
			M,
			H,
			W,
			Te,
			Pe,
			De,
			Ie,
			we,
			le,
			se,
			$e,
			Ue,
			He,
			ze,
			A,
			Q,
			Oe,
			Re,
			Le,
			Me,
			Xe,
			Je,
			We,
			Be,
			Ye,
			st,
			gt,
			ht,
			it,
			tn,
			Nn,
			zn
		]
	);
}
let Lo = class extends he {
	constructor(e) {
		super(),
			pe(
				this,
				e,
				wa,
				Sa,
				me,
				{
					transition: 1,
					transitionConfig: 2,
					inTransition: 3,
					inTransitionConfig: 4,
					outTransition: 5,
					outTransitionConfig: 6,
					asChild: 7,
					id: 13,
					el: 0
				},
				null,
				[-1, -1]
			);
	}
};
const Ta = (s) => ({ builder: s & 256 }),
	zl = (s) => ({ builder: s[8] });
function Aa(s) {
	let e,
		n,
		t,
		l = [s[8], s[12]],
		o = {};
	for (let r = 0; r < l.length; r += 1) o = I(o, l[r]);
	return {
		c() {
			(e = y('div')), this.h();
		},
		l(r) {
			(e = D(r, 'DIV', {})), B(e).forEach(m), this.h();
		},
		h() {
			re(e, o);
		},
		m(r, a) {
			b(r, e, a), s[25](e), n || ((t = [je(s[8].action(e)), de(e, 'mouseup', s[20])]), (n = !0));
		},
		p(r, a) {
			re(e, (o = ge(l, [a & 256 && r[8], a & 4096 && r[12]])));
		},
		i: Se,
		o: Se,
		d(r) {
			r && m(e), s[25](null), (n = !1), xe(t);
		}
	};
}
function Oa(s) {
	let e,
		n,
		t,
		l,
		o,
		r = [s[8], s[12]],
		a = {};
	for (let i = 0; i < r.length; i += 1) a = I(a, r[i]);
	return {
		c() {
			(e = y('div')), this.h();
		},
		l(i) {
			(e = D(i, 'DIV', {})), B(e).forEach(m), this.h();
		},
		h() {
			re(e, a);
		},
		m(i, f) {
			b(i, e, f),
				s[24](e),
				(t = !0),
				l || ((o = [je(s[8].action(e)), de(e, 'mouseup', s[19])]), (l = !0));
		},
		p(i, f) {
			(s = i), re(e, (a = ge(r, [f & 256 && s[8], f & 4096 && s[12]])));
		},
		i(i) {
			t || (n && n.end(1), (t = !0));
		},
		o(i) {
			i && (n = mn(e, s[5], s[6])), (t = !1);
		},
		d(i) {
			i && m(e), s[24](null), i && n && n.end(), (l = !1), xe(o);
		}
	};
}
function Na(s) {
	let e,
		n,
		t,
		l,
		o = [s[8], s[12]],
		r = {};
	for (let a = 0; a < o.length; a += 1) r = I(r, o[a]);
	return {
		c() {
			(e = y('div')), this.h();
		},
		l(a) {
			(e = D(a, 'DIV', {})), B(e).forEach(m), this.h();
		},
		h() {
			re(e, r);
		},
		m(a, i) {
			b(a, e, i), s[23](e), t || ((l = [je(s[8].action(e)), de(e, 'mouseup', s[18])]), (t = !0));
		},
		p(a, i) {
			(s = a), re(e, (r = ge(o, [i & 256 && s[8], i & 4096 && s[12]])));
		},
		i(a) {
			a &&
				(n ||
					Dt(() => {
						(n = _n(e, s[3], s[4])), n.start();
					}));
		},
		o: Se,
		d(a) {
			a && m(e), s[23](null), (t = !1), xe(l);
		}
	};
}
function Pa(s) {
	let e,
		n,
		t,
		l,
		o,
		r,
		a = [s[8], s[12]],
		i = {};
	for (let f = 0; f < a.length; f += 1) i = I(i, a[f]);
	return {
		c() {
			(e = y('div')), this.h();
		},
		l(f) {
			(e = D(f, 'DIV', {})), B(e).forEach(m), this.h();
		},
		h() {
			re(e, i);
		},
		m(f, u) {
			b(f, e, u),
				s[22](e),
				(l = !0),
				o || ((r = [je(s[8].action(e)), de(e, 'mouseup', s[17])]), (o = !0));
		},
		p(f, u) {
			(s = f), re(e, (i = ge(a, [u & 256 && s[8], u & 4096 && s[12]])));
		},
		i(f) {
			l ||
				(f &&
					Dt(() => {
						l && (t && t.end(1), (n = _n(e, s[3], s[4])), n.start());
					}),
				(l = !0));
		},
		o(f) {
			n && n.invalidate(), f && (t = mn(e, s[5], s[6])), (l = !1);
		},
		d(f) {
			f && m(e), s[22](null), f && t && t.end(), (o = !1), xe(r);
		}
	};
}
function Ia(s) {
	let e,
		n,
		t,
		l,
		o,
		r = [s[8], s[12]],
		a = {};
	for (let i = 0; i < r.length; i += 1) a = I(a, r[i]);
	return {
		c() {
			(e = y('div')), this.h();
		},
		l(i) {
			(e = D(i, 'DIV', {})), B(e).forEach(m), this.h();
		},
		h() {
			re(e, a);
		},
		m(i, f) {
			b(i, e, f),
				s[21](e),
				(t = !0),
				l || ((o = [de(e, 'mouseup', s[16]), je(s[8].action(e))]), (l = !0));
		},
		p(i, f) {
			(s = i), re(e, (a = ge(r, [f & 256 && s[8], f & 4096 && s[12]])));
		},
		i(i) {
			t ||
				(i &&
					Dt(() => {
						t && (n || (n = fn(e, s[1], s[2], !0)), n.run(1));
					}),
				(t = !0));
		},
		o(i) {
			i && (n || (n = fn(e, s[1], s[2], !1)), n.run(0)), (t = !1);
		},
		d(i) {
			i && m(e), s[21](null), i && n && n.end(), (l = !1), xe(o);
		}
	};
}
function Da(s) {
	let e;
	const n = s[15].default,
		t = ie(n, s, s[14], zl);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 16640) && ae(t, n, l, l[14], e ? ue(n, l[14], o, Ta) : fe(l[14]), zl);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function ya(s) {
	let e, n, t, l;
	const o = [Da, Ia, Pa, Na, Oa, Aa],
		r = [];
	function a(i, f) {
		return i[7] && i[9]
			? 0
			: i[1] && i[9]
				? 1
				: i[3] && i[5] && i[9]
					? 2
					: i[3] && i[9]
						? 3
						: i[5] && i[9]
							? 4
							: i[9]
								? 5
								: -1;
	}
	return (
		~(e = a(s)) && (n = r[e] = o[e](s)),
		{
			c() {
				n && n.c(), (t = te());
			},
			l(i) {
				n && n.l(i), (t = te());
			},
			m(i, f) {
				~e && r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, [f]) {
				let u = e;
				(e = a(i)),
					e === u
						? ~e && r[e].p(i, f)
						: (n &&
								(Ce(),
								g(r[u], 1, 1, () => {
									r[u] = null;
								}),
								Ee()),
							~e
								? ((n = r[e]),
									n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
									d(n, 1),
									n.m(t.parentNode, t))
								: (n = null));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), ~e && r[e].d(i);
			}
		}
	);
}
function Ma(s, e, n) {
	let t;
	const l = [
		'transition',
		'transitionConfig',
		'inTransition',
		'inTransitionConfig',
		'outTransition',
		'outTransitionConfig',
		'asChild',
		'el'
	];
	let o = ee(e, l),
		r,
		a,
		{ $$slots: i = {}, $$scope: f } = e,
		{ transition: u = void 0 } = e,
		{ transitionConfig: c = void 0 } = e,
		{ inTransition: h = void 0 } = e,
		{ inTransitionConfig: _ = void 0 } = e,
		{ outTransition: p = void 0 } = e,
		{ outTransitionConfig: $ = void 0 } = e,
		{ asChild: v = !1 } = e,
		{ el: w = void 0 } = e;
	const {
		elements: { overlay: T },
		states: { open: j },
		getAttrs: Y
	} = Zt();
	Ae(s, T, (M) => n(13, (r = M))), Ae(s, j, (M) => n(9, (a = M)));
	const V = Y('overlay');
	function F(M) {
		ve.call(this, s, M);
	}
	function U(M) {
		ve.call(this, s, M);
	}
	function ne(M) {
		ve.call(this, s, M);
	}
	function oe(M) {
		ve.call(this, s, M);
	}
	function O(M) {
		ve.call(this, s, M);
	}
	function G(M) {
		Ne[M ? 'unshift' : 'push'](() => {
			(w = M), n(0, w);
		});
	}
	function q(M) {
		Ne[M ? 'unshift' : 'push'](() => {
			(w = M), n(0, w);
		});
	}
	function K(M) {
		Ne[M ? 'unshift' : 'push'](() => {
			(w = M), n(0, w);
		});
	}
	function z(M) {
		Ne[M ? 'unshift' : 'push'](() => {
			(w = M), n(0, w);
		});
	}
	function x(M) {
		Ne[M ? 'unshift' : 'push'](() => {
			(w = M), n(0, w);
		});
	}
	return (
		(s.$$set = (M) => {
			(e = I(I({}, e), ke(M))),
				n(12, (o = ee(e, l))),
				'transition' in M && n(1, (u = M.transition)),
				'transitionConfig' in M && n(2, (c = M.transitionConfig)),
				'inTransition' in M && n(3, (h = M.inTransition)),
				'inTransitionConfig' in M && n(4, (_ = M.inTransitionConfig)),
				'outTransition' in M && n(5, (p = M.outTransition)),
				'outTransitionConfig' in M && n(6, ($ = M.outTransitionConfig)),
				'asChild' in M && n(7, (v = M.asChild)),
				'el' in M && n(0, (w = M.el)),
				'$$scope' in M && n(14, (f = M.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 8192 && n(8, (t = r)), s.$$.dirty & 256 && Object.assign(t, V);
		}),
		[w, u, c, h, _, p, $, v, t, a, T, j, o, r, f, i, F, U, ne, oe, O, G, q, K, z, x]
	);
}
let Fo = class extends he {
	constructor(e) {
		super(),
			pe(this, e, Ma, ya, me, {
				transition: 1,
				transitionConfig: 2,
				inTransition: 3,
				inTransitionConfig: 4,
				outTransition: 5,
				outTransitionConfig: 6,
				asChild: 7,
				el: 0
			});
	}
};
const Va = (s) => ({ builder: s & 4 }),
	Bl = (s) => ({ builder: s[2] }),
	Ra = (s) => ({ builder: s & 4 }),
	Kl = (s) => ({ builder: s[2] });
function La(s) {
	let e, n, t, l;
	const o = s[8].default,
		r = ie(o, s, s[7], Bl);
	let a = [s[2], { type: 'button' }, s[5]],
		i = {};
	for (let f = 0; f < a.length; f += 1) i = I(i, a[f]);
	return {
		c() {
			(e = y('button')), r && r.c(), this.h();
		},
		l(f) {
			e = D(f, 'BUTTON', { type: !0 });
			var u = B(e);
			r && r.l(u), u.forEach(m), this.h();
		},
		h() {
			re(e, i);
		},
		m(f, u) {
			b(f, e, u),
				r && r.m(e, null),
				e.autofocus && e.focus(),
				s[9](e),
				(n = !0),
				t ||
					((l = [je(s[2].action(e)), de(e, 'm-click', s[4]), de(e, 'm-keydown', s[4])]), (t = !0));
		},
		p(f, u) {
			r && r.p && (!n || u & 132) && ae(r, o, f, f[7], n ? ue(o, f[7], u, Va) : fe(f[7]), Bl),
				re(e, (i = ge(a, [u & 4 && f[2], { type: 'button' }, u & 32 && f[5]])));
		},
		i(f) {
			n || (d(r, f), (n = !0));
		},
		o(f) {
			g(r, f), (n = !1);
		},
		d(f) {
			f && m(e), r && r.d(f), s[9](null), (t = !1), xe(l);
		}
	};
}
function Fa(s) {
	let e;
	const n = s[8].default,
		t = ie(n, s, s[7], Kl);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 132) && ae(t, n, l, l[7], e ? ue(n, l[7], o, Ra) : fe(l[7]), Kl);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function ja(s) {
	let e, n, t, l;
	const o = [Fa, La],
		r = [];
	function a(i, f) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = r[e] = o[e](s)),
		{
			c() {
				n.c(), (t = te());
			},
			l(i) {
				n.l(i), (t = te());
			},
			m(i, f) {
				r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, [f]) {
				let u = e;
				(e = a(i)),
					e === u
						? r[e].p(i, f)
						: (Ce(),
							g(r[u], 1, 1, () => {
								r[u] = null;
							}),
							Ee(),
							(n = r[e]),
							n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
							d(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), r[e].d(i);
			}
		}
	);
}
function za(s, e, n) {
	let t;
	const l = ['asChild', 'el'];
	let o = ee(e, l),
		r,
		{ $$slots: a = {}, $$scope: i } = e,
		{ asChild: f = !1 } = e,
		{ el: u = void 0 } = e;
	const {
		elements: { trigger: c },
		getAttrs: h
	} = Zt();
	Ae(s, c, (v) => n(6, (r = v)));
	const _ = Yt(),
		p = h('trigger');
	function $(v) {
		Ne[v ? 'unshift' : 'push'](() => {
			(u = v), n(0, u);
		});
	}
	return (
		(s.$$set = (v) => {
			(e = I(I({}, e), ke(v))),
				n(5, (o = ee(e, l))),
				'asChild' in v && n(1, (f = v.asChild)),
				'el' in v && n(0, (u = v.el)),
				'$$scope' in v && n(7, (i = v.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 64 && n(2, (t = r)), s.$$.dirty & 4 && Object.assign(t, p);
		}),
		[u, f, t, c, _, o, r, i, a, $]
	);
}
class jo extends he {
	constructor(e) {
		super(), pe(this, e, za, ja, me, { asChild: 1, el: 0 });
	}
}
const Ba = (s) => ({ builder: s & 4 }),
	ql = (s) => ({ builder: s[2] }),
	Ka = (s) => ({ builder: s & 4 }),
	Hl = (s) => ({ builder: s[2] });
function qa(s) {
	let e, n, t, l;
	const o = s[8].default,
		r = ie(o, s, s[7], ql);
	let a = [s[2], s[4]],
		i = {};
	for (let f = 0; f < a.length; f += 1) i = I(i, a[f]);
	return {
		c() {
			(e = y('div')), r && r.c(), this.h();
		},
		l(f) {
			e = D(f, 'DIV', {});
			var u = B(e);
			r && r.l(u), u.forEach(m), this.h();
		},
		h() {
			re(e, i);
		},
		m(f, u) {
			b(f, e, u), r && r.m(e, null), s[9](e), (n = !0), t || ((l = je(s[2].action(e))), (t = !0));
		},
		p(f, u) {
			r && r.p && (!n || u & 132) && ae(r, o, f, f[7], n ? ue(o, f[7], u, Ba) : fe(f[7]), ql),
				re(e, (i = ge(a, [u & 4 && f[2], u & 16 && f[4]])));
		},
		i(f) {
			n || (d(r, f), (n = !0));
		},
		o(f) {
			g(r, f), (n = !1);
		},
		d(f) {
			f && m(e), r && r.d(f), s[9](null), (t = !1), l();
		}
	};
}
function Ha(s) {
	let e;
	const n = s[8].default,
		t = ie(n, s, s[7], Hl);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 132) && ae(t, n, l, l[7], e ? ue(n, l[7], o, Ka) : fe(l[7]), Hl);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Ua(s) {
	let e, n, t, l;
	const o = [Ha, qa],
		r = [];
	function a(i, f) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = r[e] = o[e](s)),
		{
			c() {
				n.c(), (t = te());
			},
			l(i) {
				n.l(i), (t = te());
			},
			m(i, f) {
				r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, [f]) {
				let u = e;
				(e = a(i)),
					e === u
						? r[e].p(i, f)
						: (Ce(),
							g(r[u], 1, 1, () => {
								r[u] = null;
							}),
							Ee(),
							(n = r[e]),
							n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
							d(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), r[e].d(i);
			}
		}
	);
}
function Wa(s, e, n) {
	let t;
	const l = ['asChild', 'id', 'el'];
	let o = ee(e, l),
		r,
		{ $$slots: a = {}, $$scope: i } = e,
		{ asChild: f = !1 } = e,
		{ id: u = void 0 } = e,
		{ el: c = void 0 } = e;
	const {
		elements: { description: h },
		ids: _,
		getAttrs: p
	} = Zt();
	Ae(s, h, (w) => n(6, (r = w)));
	const $ = p('description');
	function v(w) {
		Ne[w ? 'unshift' : 'push'](() => {
			(c = w), n(0, c);
		});
	}
	return (
		(s.$$set = (w) => {
			(e = I(I({}, e), ke(w))),
				n(4, (o = ee(e, l))),
				'asChild' in w && n(1, (f = w.asChild)),
				'id' in w && n(5, (u = w.id)),
				'el' in w && n(0, (c = w.el)),
				'$$scope' in w && n(7, (i = w.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 32 && u && _.description.set(u),
				s.$$.dirty & 64 && n(2, (t = r)),
				s.$$.dirty & 4 && Object.assign(t, $);
		}),
		[c, f, t, h, o, u, r, i, a, v]
	);
}
class Ga extends he {
	constructor(e) {
		super(), pe(this, e, Wa, Ua, me, { asChild: 1, id: 5, el: 0 });
	}
}
function Fn() {
	return {
		NAME: 'select',
		GROUP_NAME: 'select-group',
		ITEM_NAME: 'select-item',
		PARTS: ['arrow', 'content', 'group', 'item', 'indicator', 'input', 'label', 'trigger', 'value']
	};
}
function gn() {
	const { NAME: s } = Fn();
	return Ht(s);
}
function Ja(s) {
	const { NAME: e, PARTS: n } = Fn(),
		t = Sn(e, n),
		l = { ...Li({ ...wn(s), forceVisible: !0 }), getAttrs: t };
	return qt(e, l), { ...l, updateOption: Tn(l.options) };
}
function Xa(s) {
	const { ITEM_NAME: e } = Fn(),
		n = gn();
	return qt(e, s), n;
}
function Ya() {
	const { ITEM_NAME: s } = Fn(),
		{
			helpers: { isSelected: e },
			getAttrs: n
		} = gn();
	return { value: Ht(s), isSelected: e, getAttrs: n };
}
function Za(s) {
	const n = { ...{ side: 'bottom', align: 'center', sameWidth: !0 }, ...s },
		{
			options: { positioning: t }
		} = gn();
	kr(t)(n);
}
const Qa = (s) => ({ ids: s & 1 }),
	Ul = (s) => ({ ids: s[0] });
function xa(s) {
	let e;
	const n = s[18].default,
		t = ie(n, s, s[17], Ul);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, [o]) {
			t && t.p && (!e || o & 131073) && ae(t, n, l, l[17], e ? ue(n, l[17], o, Qa) : fe(l[17]), Ul);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function ef(s, e, n) {
	let t,
		{ $$slots: l = {}, $$scope: o } = e,
		{ required: r = void 0 } = e,
		{ disabled: a = void 0 } = e,
		{ preventScroll: i = void 0 } = e,
		{ loop: f = void 0 } = e,
		{ closeOnEscape: u = void 0 } = e,
		{ closeOnOutsideClick: c = void 0 } = e,
		{ portal: h = void 0 } = e,
		{ name: _ = void 0 } = e,
		{ multiple: p = !1 } = e,
		{ selected: $ = void 0 } = e,
		{ onSelectedChange: v = void 0 } = e,
		{ open: w = void 0 } = e,
		{ onOpenChange: T = void 0 } = e,
		{ items: j = [] } = e,
		{ onOutsideClick: Y = void 0 } = e;
	const {
			states: { open: V, selected: F },
			updateOption: U,
			ids: ne
		} = Ja({
			required: r,
			disabled: a,
			preventScroll: i,
			loop: f,
			closeOnEscape: u,
			closeOnOutsideClick: c,
			portal: h,
			name: _,
			onOutsideClick: Y,
			multiple: p,
			forceVisible: !0,
			defaultSelected: Array.isArray($) ? [...$] : $,
			defaultOpen: w,
			onSelectedChange: ({ next: O }) =>
				Array.isArray(O)
					? ((!Array.isArray($) || !ui($, O)) && (v == null || v(O), n(2, ($ = O))), O)
					: ($ !== O && (v == null || v(O), n(2, ($ = O))), O),
			onOpenChange: ({ next: O }) => (w !== O && (T == null || T(O), n(3, (w = O))), O),
			items: j
		}),
		oe = _t([ne.menu, ne.trigger, ne.label], ([O, G, q]) => ({ menu: O, trigger: G, label: q }));
	return (
		Ae(s, oe, (O) => n(0, (t = O))),
		(s.$$set = (O) => {
			'required' in O && n(4, (r = O.required)),
				'disabled' in O && n(5, (a = O.disabled)),
				'preventScroll' in O && n(6, (i = O.preventScroll)),
				'loop' in O && n(7, (f = O.loop)),
				'closeOnEscape' in O && n(8, (u = O.closeOnEscape)),
				'closeOnOutsideClick' in O && n(9, (c = O.closeOnOutsideClick)),
				'portal' in O && n(10, (h = O.portal)),
				'name' in O && n(11, (_ = O.name)),
				'multiple' in O && n(12, (p = O.multiple)),
				'selected' in O && n(2, ($ = O.selected)),
				'onSelectedChange' in O && n(13, (v = O.onSelectedChange)),
				'open' in O && n(3, (w = O.open)),
				'onOpenChange' in O && n(14, (T = O.onOpenChange)),
				'items' in O && n(15, (j = O.items)),
				'onOutsideClick' in O && n(16, (Y = O.onOutsideClick)),
				'$$scope' in O && n(17, (o = O.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 8 && w !== void 0 && V.set(w),
				s.$$.dirty & 4 && $ !== void 0 && F.set(Array.isArray($) ? [...$] : $),
				s.$$.dirty & 16 && U('required', r),
				s.$$.dirty & 32 && U('disabled', a),
				s.$$.dirty & 64 && U('preventScroll', i),
				s.$$.dirty & 128 && U('loop', f),
				s.$$.dirty & 256 && U('closeOnEscape', u),
				s.$$.dirty & 512 && U('closeOnOutsideClick', c),
				s.$$.dirty & 1024 && U('portal', h),
				s.$$.dirty & 2048 && U('name', _),
				s.$$.dirty & 4096 && U('multiple', p),
				s.$$.dirty & 65536 && U('onOutsideClick', Y);
		}),
		[t, oe, $, w, r, a, i, f, u, c, h, _, p, v, T, j, Y, o, l]
	);
}
class tf extends he {
	constructor(e) {
		super(),
			pe(this, e, ef, xa, me, {
				required: 4,
				disabled: 5,
				preventScroll: 6,
				loop: 7,
				closeOnEscape: 8,
				closeOnOutsideClick: 9,
				portal: 10,
				name: 11,
				multiple: 12,
				selected: 2,
				onSelectedChange: 13,
				open: 3,
				onOpenChange: 14,
				items: 15,
				onOutsideClick: 16
			});
	}
}
const nf = (s) => ({ builder: s[0] & 256 }),
	Wl = (s) => ({ builder: s[8] }),
	lf = (s) => ({ builder: s[0] & 256 }),
	Gl = (s) => ({ builder: s[8] }),
	sf = (s) => ({ builder: s[0] & 256 }),
	Jl = (s) => ({ builder: s[8] }),
	of = (s) => ({ builder: s[0] & 256 }),
	Xl = (s) => ({ builder: s[8] }),
	rf = (s) => ({ builder: s[0] & 256 }),
	Yl = (s) => ({ builder: s[8] }),
	af = (s) => ({ builder: s[0] & 256 }),
	Zl = (s) => ({ builder: s[8] });
function ff(s) {
	let e, n, t, l;
	const o = s[28].default,
		r = ie(o, s, s[27], Wl);
	let a = [s[8], s[13]],
		i = {};
	for (let f = 0; f < a.length; f += 1) i = I(i, a[f]);
	return {
		c() {
			(e = y('div')), r && r.c(), this.h();
		},
		l(f) {
			e = D(f, 'DIV', {});
			var u = B(e);
			r && r.l(u), u.forEach(m), this.h();
		},
		h() {
			re(e, i);
		},
		m(f, u) {
			b(f, e, u),
				r && r.m(e, null),
				s[38](e),
				(n = !0),
				t ||
					((l = [je(s[8].action(e)), de(e, 'm-pointerleave', s[12]), de(e, 'keydown', s[33])]),
					(t = !0));
		},
		p(f, u) {
			r &&
				r.p &&
				(!n || u[0] & 134217984) &&
				ae(r, o, f, f[27], n ? ue(o, f[27], u, nf) : fe(f[27]), Wl),
				re(e, (i = ge(a, [u[0] & 256 && f[8], u[0] & 8192 && f[13]])));
		},
		i(f) {
			n || (d(r, f), (n = !0));
		},
		o(f) {
			g(r, f), (n = !1);
		},
		d(f) {
			f && m(e), r && r.d(f), s[38](null), (t = !1), xe(l);
		}
	};
}
function uf(s) {
	let e, n, t, l, o;
	const r = s[28].default,
		a = ie(r, s, s[27], Gl);
	let i = [s[8], s[13]],
		f = {};
	for (let u = 0; u < i.length; u += 1) f = I(f, i[u]);
	return {
		c() {
			(e = y('div')), a && a.c(), this.h();
		},
		l(u) {
			e = D(u, 'DIV', {});
			var c = B(e);
			a && a.l(c), c.forEach(m), this.h();
		},
		h() {
			re(e, f);
		},
		m(u, c) {
			b(u, e, c),
				a && a.m(e, null),
				s[37](e),
				(t = !0),
				l ||
					((o = [je(s[8].action(e)), de(e, 'm-pointerleave', s[12]), de(e, 'keydown', s[32])]),
					(l = !0));
		},
		p(u, c) {
			(s = u),
				a &&
					a.p &&
					(!t || c[0] & 134217984) &&
					ae(a, r, s, s[27], t ? ue(r, s[27], c, lf) : fe(s[27]), Gl),
				re(e, (f = ge(i, [c[0] & 256 && s[8], c[0] & 8192 && s[13]])));
		},
		i(u) {
			t || (d(a, u), n && n.end(1), (t = !0));
		},
		o(u) {
			g(a, u), u && (n = mn(e, s[5], s[6])), (t = !1);
		},
		d(u) {
			u && m(e), a && a.d(u), s[37](null), u && n && n.end(), (l = !1), xe(o);
		}
	};
}
function cf(s) {
	let e, n, t, l, o;
	const r = s[28].default,
		a = ie(r, s, s[27], Jl);
	let i = [s[8], s[13]],
		f = {};
	for (let u = 0; u < i.length; u += 1) f = I(f, i[u]);
	return {
		c() {
			(e = y('div')), a && a.c(), this.h();
		},
		l(u) {
			e = D(u, 'DIV', {});
			var c = B(e);
			a && a.l(c), c.forEach(m), this.h();
		},
		h() {
			re(e, f);
		},
		m(u, c) {
			b(u, e, c),
				a && a.m(e, null),
				s[36](e),
				(t = !0),
				l ||
					((o = [je(s[8].action(e)), de(e, 'm-pointerleave', s[12]), de(e, 'keydown', s[31])]),
					(l = !0));
		},
		p(u, c) {
			(s = u),
				a &&
					a.p &&
					(!t || c[0] & 134217984) &&
					ae(a, r, s, s[27], t ? ue(r, s[27], c, sf) : fe(s[27]), Jl),
				re(e, (f = ge(i, [c[0] & 256 && s[8], c[0] & 8192 && s[13]])));
		},
		i(u) {
			t ||
				(d(a, u),
				u &&
					(n ||
						Dt(() => {
							(n = _n(e, s[3], s[4])), n.start();
						})),
				(t = !0));
		},
		o(u) {
			g(a, u), (t = !1);
		},
		d(u) {
			u && m(e), a && a.d(u), s[36](null), (l = !1), xe(o);
		}
	};
}
function df(s) {
	let e, n, t, l, o, r;
	const a = s[28].default,
		i = ie(a, s, s[27], Xl);
	let f = [s[8], s[13]],
		u = {};
	for (let c = 0; c < f.length; c += 1) u = I(u, f[c]);
	return {
		c() {
			(e = y('div')), i && i.c(), this.h();
		},
		l(c) {
			e = D(c, 'DIV', {});
			var h = B(e);
			i && i.l(h), h.forEach(m), this.h();
		},
		h() {
			re(e, u);
		},
		m(c, h) {
			b(c, e, h),
				i && i.m(e, null),
				s[35](e),
				(l = !0),
				o ||
					((r = [je(s[8].action(e)), de(e, 'm-pointerleave', s[12]), de(e, 'keydown', s[30])]),
					(o = !0));
		},
		p(c, h) {
			(s = c),
				i &&
					i.p &&
					(!l || h[0] & 134217984) &&
					ae(i, a, s, s[27], l ? ue(a, s[27], h, of) : fe(s[27]), Xl),
				re(e, (u = ge(f, [h[0] & 256 && s[8], h[0] & 8192 && s[13]])));
		},
		i(c) {
			l ||
				(d(i, c),
				c &&
					Dt(() => {
						l && (t && t.end(1), (n = _n(e, s[3], s[4])), n.start());
					}),
				(l = !0));
		},
		o(c) {
			g(i, c), n && n.invalidate(), c && (t = mn(e, s[5], s[6])), (l = !1);
		},
		d(c) {
			c && m(e), i && i.d(c), s[35](null), c && t && t.end(), (o = !1), xe(r);
		}
	};
}
function mf(s) {
	let e, n, t, l, o;
	const r = s[28].default,
		a = ie(r, s, s[27], Yl);
	let i = [s[8], s[13]],
		f = {};
	for (let u = 0; u < i.length; u += 1) f = I(f, i[u]);
	return {
		c() {
			(e = y('div')), a && a.c(), this.h();
		},
		l(u) {
			e = D(u, 'DIV', {});
			var c = B(e);
			a && a.l(c), c.forEach(m), this.h();
		},
		h() {
			re(e, f);
		},
		m(u, c) {
			b(u, e, c),
				a && a.m(e, null),
				s[34](e),
				(t = !0),
				l ||
					((o = [je(s[8].action(e)), de(e, 'm-pointerleave', s[12]), de(e, 'keydown', s[29])]),
					(l = !0));
		},
		p(u, c) {
			(s = u),
				a &&
					a.p &&
					(!t || c[0] & 134217984) &&
					ae(a, r, s, s[27], t ? ue(r, s[27], c, rf) : fe(s[27]), Yl),
				re(e, (f = ge(i, [c[0] & 256 && s[8], c[0] & 8192 && s[13]])));
		},
		i(u) {
			t ||
				(d(a, u),
				u &&
					Dt(() => {
						t && (n || (n = fn(e, s[1], s[2], !0)), n.run(1));
					}),
				(t = !0));
		},
		o(u) {
			g(a, u), u && (n || (n = fn(e, s[1], s[2], !1)), n.run(0)), (t = !1);
		},
		d(u) {
			u && m(e), a && a.d(u), s[34](null), u && n && n.end(), (l = !1), xe(o);
		}
	};
}
function _f(s) {
	let e;
	const n = s[28].default,
		t = ie(n, s, s[27], Zl);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t &&
				t.p &&
				(!e || o[0] & 134217984) &&
				ae(t, n, l, l[27], e ? ue(n, l[27], o, af) : fe(l[27]), Zl);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function gf(s) {
	let e, n, t, l;
	const o = [_f, mf, df, cf, uf, ff],
		r = [];
	function a(i, f) {
		return i[7] && i[9]
			? 0
			: i[1] && i[9]
				? 1
				: i[3] && i[5] && i[9]
					? 2
					: i[3] && i[9]
						? 3
						: i[5] && i[9]
							? 4
							: i[9]
								? 5
								: -1;
	}
	return (
		~(e = a(s)) && (n = r[e] = o[e](s)),
		{
			c() {
				n && n.c(), (t = te());
			},
			l(i) {
				n && n.l(i), (t = te());
			},
			m(i, f) {
				~e && r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, f) {
				let u = e;
				(e = a(i)),
					e === u
						? ~e && r[e].p(i, f)
						: (n &&
								(Ce(),
								g(r[u], 1, 1, () => {
									r[u] = null;
								}),
								Ee()),
							~e
								? ((n = r[e]),
									n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
									d(n, 1),
									n.m(t.parentNode, t))
								: (n = null));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), ~e && r[e].d(i);
			}
		}
	);
}
function hf(s, e, n) {
	let t;
	const l = [
		'transition',
		'transitionConfig',
		'inTransition',
		'inTransitionConfig',
		'outTransition',
		'outTransitionConfig',
		'asChild',
		'id',
		'side',
		'align',
		'sideOffset',
		'alignOffset',
		'collisionPadding',
		'avoidCollisions',
		'collisionBoundary',
		'sameWidth',
		'fitViewport',
		'strategy',
		'overlap',
		'el'
	];
	let o = ee(e, l),
		r,
		a,
		{ $$slots: i = {}, $$scope: f } = e,
		{ transition: u = void 0 } = e,
		{ transitionConfig: c = void 0 } = e,
		{ inTransition: h = void 0 } = e,
		{ inTransitionConfig: _ = void 0 } = e,
		{ outTransition: p = void 0 } = e,
		{ outTransitionConfig: $ = void 0 } = e,
		{ asChild: v = !1 } = e,
		{ id: w = void 0 } = e,
		{ side: T = 'bottom' } = e,
		{ align: j = 'center' } = e,
		{ sideOffset: Y = 0 } = e,
		{ alignOffset: V = 0 } = e,
		{ collisionPadding: F = 8 } = e,
		{ avoidCollisions: U = !0 } = e,
		{ collisionBoundary: ne = void 0 } = e,
		{ sameWidth: oe = !0 } = e,
		{ fitViewport: O = !1 } = e,
		{ strategy: G = 'absolute' } = e,
		{ overlap: q = !1 } = e,
		{ el: K = void 0 } = e;
	const {
		elements: { menu: z },
		states: { open: x },
		ids: M,
		getAttrs: H
	} = gn();
	Ae(s, z, (A) => n(26, (a = A))), Ae(s, x, (A) => n(9, (r = A)));
	const W = Yt(),
		Te = H('content');
	function Pe(A) {
		ve.call(this, s, A);
	}
	function De(A) {
		ve.call(this, s, A);
	}
	function Ie(A) {
		ve.call(this, s, A);
	}
	function we(A) {
		ve.call(this, s, A);
	}
	function le(A) {
		ve.call(this, s, A);
	}
	function se(A) {
		Ne[A ? 'unshift' : 'push'](() => {
			(K = A), n(0, K);
		});
	}
	function $e(A) {
		Ne[A ? 'unshift' : 'push'](() => {
			(K = A), n(0, K);
		});
	}
	function Ue(A) {
		Ne[A ? 'unshift' : 'push'](() => {
			(K = A), n(0, K);
		});
	}
	function He(A) {
		Ne[A ? 'unshift' : 'push'](() => {
			(K = A), n(0, K);
		});
	}
	function ze(A) {
		Ne[A ? 'unshift' : 'push'](() => {
			(K = A), n(0, K);
		});
	}
	return (
		(s.$$set = (A) => {
			(e = I(I({}, e), ke(A))),
				n(13, (o = ee(e, l))),
				'transition' in A && n(1, (u = A.transition)),
				'transitionConfig' in A && n(2, (c = A.transitionConfig)),
				'inTransition' in A && n(3, (h = A.inTransition)),
				'inTransitionConfig' in A && n(4, (_ = A.inTransitionConfig)),
				'outTransition' in A && n(5, (p = A.outTransition)),
				'outTransitionConfig' in A && n(6, ($ = A.outTransitionConfig)),
				'asChild' in A && n(7, (v = A.asChild)),
				'id' in A && n(14, (w = A.id)),
				'side' in A && n(15, (T = A.side)),
				'align' in A && n(16, (j = A.align)),
				'sideOffset' in A && n(17, (Y = A.sideOffset)),
				'alignOffset' in A && n(18, (V = A.alignOffset)),
				'collisionPadding' in A && n(19, (F = A.collisionPadding)),
				'avoidCollisions' in A && n(20, (U = A.avoidCollisions)),
				'collisionBoundary' in A && n(21, (ne = A.collisionBoundary)),
				'sameWidth' in A && n(22, (oe = A.sameWidth)),
				'fitViewport' in A && n(23, (O = A.fitViewport)),
				'strategy' in A && n(24, (G = A.strategy)),
				'overlap' in A && n(25, (q = A.overlap)),
				'el' in A && n(0, (K = A.el)),
				'$$scope' in A && n(27, (f = A.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty[0] & 16384 && w && M.menu.set(w),
				s.$$.dirty[0] & 67108864 && n(8, (t = a)),
				s.$$.dirty[0] & 256 && Object.assign(t, Te),
				s.$$.dirty[0] & 67076608 &&
					r &&
					Za({
						side: T,
						align: j,
						sideOffset: Y,
						alignOffset: V,
						collisionPadding: F,
						avoidCollisions: U,
						collisionBoundary: ne,
						sameWidth: oe,
						fitViewport: O,
						strategy: G,
						overlap: q
					});
		}),
		[
			K,
			u,
			c,
			h,
			_,
			p,
			$,
			v,
			t,
			r,
			z,
			x,
			W,
			o,
			w,
			T,
			j,
			Y,
			V,
			F,
			U,
			ne,
			oe,
			O,
			G,
			q,
			a,
			f,
			i,
			Pe,
			De,
			Ie,
			we,
			le,
			se,
			$e,
			Ue,
			He,
			ze
		]
	);
}
let pf = class extends he {
	constructor(e) {
		super(),
			pe(
				this,
				e,
				hf,
				gf,
				me,
				{
					transition: 1,
					transitionConfig: 2,
					inTransition: 3,
					inTransitionConfig: 4,
					outTransition: 5,
					outTransitionConfig: 6,
					asChild: 7,
					id: 14,
					side: 15,
					align: 16,
					sideOffset: 17,
					alignOffset: 18,
					collisionPadding: 19,
					avoidCollisions: 20,
					collisionBoundary: 21,
					sameWidth: 22,
					fitViewport: 23,
					strategy: 24,
					overlap: 25,
					el: 0
				},
				null,
				[-1, -1]
			);
	}
};
const $f = (s) => ({ builder: s & 16, isSelected: s & 32 }),
	Ql = (s) => ({ builder: s[4], isSelected: s[5] }),
	bf = (s) => ({ builder: s & 16, isSelected: s & 32 }),
	xl = (s) => ({ builder: s[4], isSelected: s[5] });
function vf(s) {
	let e, n, t, l;
	const o = s[14].default,
		r = ie(o, s, s[13], Ql),
		a = r || Cf(s);
	let i = [s[4], s[9]],
		f = {};
	for (let u = 0; u < i.length; u += 1) f = I(f, i[u]);
	return {
		c() {
			(e = y('div')), a && a.c(), this.h();
		},
		l(u) {
			e = D(u, 'DIV', {});
			var c = B(e);
			a && a.l(c), c.forEach(m), this.h();
		},
		h() {
			re(e, f);
		},
		m(u, c) {
			b(u, e, c),
				a && a.m(e, null),
				s[19](e),
				(n = !0),
				t ||
					((l = [
						je(s[4].action(e)),
						de(e, 'm-click', s[8]),
						de(e, 'm-pointermove', s[8]),
						de(e, 'focusin', s[15]),
						de(e, 'keydown', s[16]),
						de(e, 'focusout', s[17]),
						de(e, 'pointerleave', s[18])
					]),
					(t = !0));
		},
		p(u, c) {
			r
				? r.p && (!n || c & 8240) && ae(r, o, u, u[13], n ? ue(o, u[13], c, $f) : fe(u[13]), Ql)
				: a && a.p && (!n || c & 6) && a.p(u, n ? c : -1),
				re(e, (f = ge(i, [c & 16 && u[4], c & 512 && u[9]])));
		},
		i(u) {
			n || (d(a, u), (n = !0));
		},
		o(u) {
			g(a, u), (n = !1);
		},
		d(u) {
			u && m(e), a && a.d(u), s[19](null), (t = !1), xe(l);
		}
	};
}
function kf(s) {
	let e;
	const n = s[14].default,
		t = ie(n, s, s[13], xl);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 8240) && ae(t, n, l, l[13], e ? ue(n, l[13], o, bf) : fe(l[13]), xl);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Cf(s) {
	let e = (s[2] ? s[2] : s[1]) + '',
		n;
	return {
		c() {
			n = X(e);
		},
		l(t) {
			n = J(t, e);
		},
		m(t, l) {
			b(t, n, l);
		},
		p(t, l) {
			l & 6 && e !== (e = (t[2] ? t[2] : t[1]) + '') && at(n, e);
		},
		d(t) {
			t && m(n);
		}
	};
}
function Ef(s) {
	let e, n, t, l;
	const o = [kf, vf],
		r = [];
	function a(i, f) {
		return i[3] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = r[e] = o[e](s)),
		{
			c() {
				n.c(), (t = te());
			},
			l(i) {
				n.l(i), (t = te());
			},
			m(i, f) {
				r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, [f]) {
				let u = e;
				(e = a(i)),
					e === u
						? r[e].p(i, f)
						: (Ce(),
							g(r[u], 1, 1, () => {
								r[u] = null;
							}),
							Ee(),
							(n = r[e]),
							n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
							d(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), r[e].d(i);
			}
		}
	);
}
function Sf(s, e, n) {
	let t, l;
	const o = ['value', 'disabled', 'label', 'asChild', 'el'];
	let r = ee(e, o),
		a,
		i,
		{ $$slots: f = {}, $$scope: u } = e,
		{ value: c } = e,
		{ disabled: h = void 0 } = e,
		{ label: _ = void 0 } = e,
		{ asChild: p = !1 } = e,
		{ el: $ = void 0 } = e;
	const {
		elements: { option: v },
		helpers: { isSelected: w },
		getAttrs: T
	} = Xa(c);
	Ae(s, v, (O) => n(12, (i = O))), Ae(s, w, (O) => n(11, (a = O)));
	const j = Yt(),
		Y = T('item');
	function V(O) {
		ve.call(this, s, O);
	}
	function F(O) {
		ve.call(this, s, O);
	}
	function U(O) {
		ve.call(this, s, O);
	}
	function ne(O) {
		ve.call(this, s, O);
	}
	function oe(O) {
		Ne[O ? 'unshift' : 'push'](() => {
			($ = O), n(0, $);
		});
	}
	return (
		(s.$$set = (O) => {
			(e = I(I({}, e), ke(O))),
				n(9, (r = ee(e, o))),
				'value' in O && n(1, (c = O.value)),
				'disabled' in O && n(10, (h = O.disabled)),
				'label' in O && n(2, (_ = O.label)),
				'asChild' in O && n(3, (p = O.asChild)),
				'el' in O && n(0, ($ = O.el)),
				'$$scope' in O && n(13, (u = O.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 5126 && n(4, (t = i({ value: c, disabled: h, label: _ }))),
				s.$$.dirty & 16 && Object.assign(t, Y),
				s.$$.dirty & 2050 && n(5, (l = a(c)));
		}),
		[$, c, _, p, t, l, v, w, j, r, h, a, i, u, f, V, F, U, ne, oe]
	);
}
let wf = class extends he {
	constructor(e) {
		super(), pe(this, e, Sf, Ef, me, { value: 1, disabled: 10, label: 2, asChild: 3, el: 0 });
	}
};
const Tf = (s) => ({ isSelected: s & 4 }),
	es = (s) => ({ attrs: s[5], isSelected: s[2](s[4]) }),
	Af = (s) => ({ isSelected: s & 4 }),
	ts = (s) => ({ attrs: s[5], isSelected: s[2](s[4]) });
function Of(s) {
	let e,
		n = s[2](s[4]),
		t,
		l = n && ns(s),
		o = [s[6], s[5]],
		r = {};
	for (let a = 0; a < o.length; a += 1) r = I(r, o[a]);
	return {
		c() {
			(e = y('div')), l && l.c(), this.h();
		},
		l(a) {
			e = D(a, 'DIV', {});
			var i = B(e);
			l && l.l(i), i.forEach(m), this.h();
		},
		h() {
			re(e, r);
		},
		m(a, i) {
			b(a, e, i), l && l.m(e, null), s[9](e), (t = !0);
		},
		p(a, i) {
			i & 4 && (n = a[2](a[4])),
				n
					? l
						? (l.p(a, i), i & 4 && d(l, 1))
						: ((l = ns(a)), l.c(), d(l, 1), l.m(e, null))
					: l &&
						(Ce(),
						g(l, 1, 1, () => {
							l = null;
						}),
						Ee()),
				re(e, (r = ge(o, [i & 64 && a[6], a[5]])));
		},
		i(a) {
			t || (d(l), (t = !0));
		},
		o(a) {
			g(l), (t = !1);
		},
		d(a) {
			a && m(e), l && l.d(), s[9](null);
		}
	};
}
function Nf(s) {
	let e;
	const n = s[8].default,
		t = ie(n, s, s[7], ts);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 132) && ae(t, n, l, l[7], e ? ue(n, l[7], o, Af) : fe(l[7]), ts);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function ns(s) {
	let e;
	const n = s[8].default,
		t = ie(n, s, s[7], es);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 132) && ae(t, n, l, l[7], e ? ue(n, l[7], o, Tf) : fe(l[7]), es);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Pf(s) {
	let e, n, t, l;
	const o = [Nf, Of],
		r = [];
	function a(i, f) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = r[e] = o[e](s)),
		{
			c() {
				n.c(), (t = te());
			},
			l(i) {
				n.l(i), (t = te());
			},
			m(i, f) {
				r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, [f]) {
				let u = e;
				(e = a(i)),
					e === u
						? r[e].p(i, f)
						: (Ce(),
							g(r[u], 1, 1, () => {
								r[u] = null;
							}),
							Ee(),
							(n = r[e]),
							n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
							d(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), r[e].d(i);
			}
		}
	);
}
function If(s, e, n) {
	const t = ['asChild', 'el'];
	let l = ee(e, t),
		o,
		{ $$slots: r = {}, $$scope: a } = e,
		{ asChild: i = !1 } = e,
		{ el: f = void 0 } = e;
	const { isSelected: u, value: c, getAttrs: h } = Ya();
	Ae(s, u, ($) => n(2, (o = $)));
	const _ = h('indicator');
	function p($) {
		Ne[$ ? 'unshift' : 'push'](() => {
			(f = $), n(0, f);
		});
	}
	return (
		(s.$$set = ($) => {
			(e = I(I({}, e), ke($))),
				n(6, (l = ee(e, t))),
				'asChild' in $ && n(1, (i = $.asChild)),
				'el' in $ && n(0, (f = $.el)),
				'$$scope' in $ && n(7, (a = $.$$scope));
		}),
		[f, i, o, u, c, _, l, a, r, p]
	);
}
class Df extends he {
	constructor(e) {
		super(), pe(this, e, If, Pf, me, { asChild: 1, el: 0 });
	}
}
function yf() {
	return { NAME: 'separator', PARTS: ['root'] };
}
function Mf(s) {
	const { NAME: e, PARTS: n } = yf(),
		t = Sn(e, n),
		l = { ...ri(wn(s)), getAttrs: t };
	return { ...l, updateOption: Tn(l.options) };
}
const Vf = (s) => ({ builder: s & 4 }),
	ls = (s) => ({ builder: s[2] });
function Rf(s) {
	let e,
		n,
		t,
		l = [s[2], s[4]],
		o = {};
	for (let r = 0; r < l.length; r += 1) o = I(o, l[r]);
	return {
		c() {
			(e = y('div')), this.h();
		},
		l(r) {
			(e = D(r, 'DIV', {})), B(e).forEach(m), this.h();
		},
		h() {
			re(e, o);
		},
		m(r, a) {
			b(r, e, a), s[10](e), n || ((t = je(s[2].action(e))), (n = !0));
		},
		p(r, a) {
			re(e, (o = ge(l, [a & 4 && r[2], a & 16 && r[4]])));
		},
		i: Se,
		o: Se,
		d(r) {
			r && m(e), s[10](null), (n = !1), t();
		}
	};
}
function Lf(s) {
	let e;
	const n = s[9].default,
		t = ie(n, s, s[8], ls);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 260) && ae(t, n, l, l[8], e ? ue(n, l[8], o, Vf) : fe(l[8]), ls);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Ff(s) {
	let e, n, t, l;
	const o = [Lf, Rf],
		r = [];
	function a(i, f) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = r[e] = o[e](s)),
		{
			c() {
				n.c(), (t = te());
			},
			l(i) {
				n.l(i), (t = te());
			},
			m(i, f) {
				r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, [f]) {
				let u = e;
				(e = a(i)),
					e === u
						? r[e].p(i, f)
						: (Ce(),
							g(r[u], 1, 1, () => {
								r[u] = null;
							}),
							Ee(),
							(n = r[e]),
							n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
							d(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), r[e].d(i);
			}
		}
	);
}
function jf(s, e, n) {
	let t;
	const l = ['orientation', 'decorative', 'asChild', 'el'];
	let o = ee(e, l),
		r,
		{ $$slots: a = {}, $$scope: i } = e,
		{ orientation: f = 'horizontal' } = e,
		{ decorative: u = !0 } = e,
		{ asChild: c = !1 } = e,
		{ el: h = void 0 } = e;
	const {
		elements: { root: _ },
		updateOption: p,
		getAttrs: $
	} = Mf({ orientation: f, decorative: u });
	Ae(s, _, (T) => n(7, (r = T)));
	const v = $('root');
	function w(T) {
		Ne[T ? 'unshift' : 'push'](() => {
			(h = T), n(0, h);
		});
	}
	return (
		(s.$$set = (T) => {
			(e = I(I({}, e), ke(T))),
				n(4, (o = ee(e, l))),
				'orientation' in T && n(5, (f = T.orientation)),
				'decorative' in T && n(6, (u = T.decorative)),
				'asChild' in T && n(1, (c = T.asChild)),
				'el' in T && n(0, (h = T.el)),
				'$$scope' in T && n(8, (i = T.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 32 && p('orientation', f),
				s.$$.dirty & 64 && p('decorative', u),
				s.$$.dirty & 128 && n(2, (t = r)),
				s.$$.dirty & 4 && Object.assign(t, v);
		}),
		[h, c, t, _, o, f, u, r, i, a, w]
	);
}
let zf = class extends he {
	constructor(e) {
		super(), pe(this, e, jf, Ff, me, { orientation: 5, decorative: 6, asChild: 1, el: 0 });
	}
};
const Bf = (s) => ({ builder: s & 4 }),
	ss = (s) => ({ builder: s[2] }),
	Kf = (s) => ({ builder: s & 4 }),
	os = (s) => ({ builder: s[2] });
function qf(s) {
	let e, n, t, l;
	const o = s[9].default,
		r = ie(o, s, s[8], ss);
	let a = [s[2], { type: 'button' }, s[5]],
		i = {};
	for (let f = 0; f < a.length; f += 1) i = I(i, a[f]);
	return {
		c() {
			(e = y('button')), r && r.c(), this.h();
		},
		l(f) {
			e = D(f, 'BUTTON', { type: !0 });
			var u = B(e);
			r && r.l(u), u.forEach(m), this.h();
		},
		h() {
			re(e, i);
		},
		m(f, u) {
			b(f, e, u),
				r && r.m(e, null),
				e.autofocus && e.focus(),
				s[10](e),
				(n = !0),
				t ||
					((l = [je(s[2].action(e)), de(e, 'm-click', s[4]), de(e, 'm-keydown', s[4])]), (t = !0));
		},
		p(f, u) {
			r && r.p && (!n || u & 260) && ae(r, o, f, f[8], n ? ue(o, f[8], u, Bf) : fe(f[8]), ss),
				re(e, (i = ge(a, [u & 4 && f[2], { type: 'button' }, u & 32 && f[5]])));
		},
		i(f) {
			n || (d(r, f), (n = !0));
		},
		o(f) {
			g(r, f), (n = !1);
		},
		d(f) {
			f && m(e), r && r.d(f), s[10](null), (t = !1), xe(l);
		}
	};
}
function Hf(s) {
	let e;
	const n = s[9].default,
		t = ie(n, s, s[8], os);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 260) && ae(t, n, l, l[8], e ? ue(n, l[8], o, Kf) : fe(l[8]), os);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Uf(s) {
	let e, n, t, l;
	const o = [Hf, qf],
		r = [];
	function a(i, f) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = r[e] = o[e](s)),
		{
			c() {
				n.c(), (t = te());
			},
			l(i) {
				n.l(i), (t = te());
			},
			m(i, f) {
				r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, [f]) {
				let u = e;
				(e = a(i)),
					e === u
						? r[e].p(i, f)
						: (Ce(),
							g(r[u], 1, 1, () => {
								r[u] = null;
							}),
							Ee(),
							(n = r[e]),
							n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
							d(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), r[e].d(i);
			}
		}
	);
}
function Wf(s, e, n) {
	let t;
	const l = ['asChild', 'id', 'el'];
	let o = ee(e, l),
		r,
		{ $$slots: a = {}, $$scope: i } = e,
		{ asChild: f = !1 } = e,
		{ id: u = void 0 } = e,
		{ el: c = void 0 } = e;
	const {
		elements: { trigger: h },
		ids: _,
		getAttrs: p
	} = gn();
	Ae(s, h, (T) => n(7, (r = T)));
	const $ = Yt(),
		v = p('trigger');
	function w(T) {
		Ne[T ? 'unshift' : 'push'](() => {
			(c = T), n(0, c);
		});
	}
	return (
		(s.$$set = (T) => {
			(e = I(I({}, e), ke(T))),
				n(5, (o = ee(e, l))),
				'asChild' in T && n(1, (f = T.asChild)),
				'id' in T && n(6, (u = T.id)),
				'el' in T && n(0, (c = T.el)),
				'$$scope' in T && n(8, (i = T.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 64 && u && _.trigger.set(u),
				s.$$.dirty & 128 && n(2, (t = r)),
				s.$$.dirty & 4 && Object.assign(t, v);
		}),
		[c, f, t, h, $, o, u, r, i, a, w]
	);
}
let Gf = class extends he {
	constructor(e) {
		super(), pe(this, e, Wf, Uf, me, { asChild: 1, id: 6, el: 0 });
	}
};
const Jf = (s) => ({ label: s & 8 }),
	rs = (s) => ({ label: s[3], attrs: s[5] });
function Xf(s) {
	let e,
		n = (s[3] ? s[3] : s[1]) + '',
		t,
		l,
		o = [s[6], s[5], { 'data-placeholder': (l = s[3] ? void 0 : '') }],
		r = {};
	for (let a = 0; a < o.length; a += 1) r = I(r, o[a]);
	return {
		c() {
			(e = y('span')), (t = X(n)), this.h();
		},
		l(a) {
			e = D(a, 'SPAN', { 'data-placeholder': !0 });
			var i = B(e);
			(t = J(i, n)), i.forEach(m), this.h();
		},
		h() {
			re(e, r);
		},
		m(a, i) {
			b(a, e, i), N(e, t), s[10](e);
		},
		p(a, i) {
			i & 10 && n !== (n = (a[3] ? a[3] : a[1]) + '') && el(t, n, r.contenteditable),
				re(
					e,
					(r = ge(o, [
						i & 64 && a[6],
						a[5],
						i & 8 && l !== (l = a[3] ? void 0 : '') && { 'data-placeholder': l }
					]))
				);
		},
		i: Se,
		o: Se,
		d(a) {
			a && m(e), s[10](null);
		}
	};
}
function Yf(s) {
	let e;
	const n = s[9].default,
		t = ie(n, s, s[8], rs);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 264) && ae(t, n, l, l[8], e ? ue(n, l[8], o, Jf) : fe(l[8]), rs);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Zf(s) {
	let e, n, t, l;
	const o = [Yf, Xf],
		r = [];
	function a(i, f) {
		return i[2] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = r[e] = o[e](s)),
		{
			c() {
				n.c(), (t = te());
			},
			l(i) {
				n.l(i), (t = te());
			},
			m(i, f) {
				r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, [f]) {
				let u = e;
				(e = a(i)),
					e === u
						? r[e].p(i, f)
						: (Ce(),
							g(r[u], 1, 1, () => {
								r[u] = null;
							}),
							Ee(),
							(n = r[e]),
							n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
							d(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), r[e].d(i);
			}
		}
	);
}
function Qf(s, e, n) {
	let t;
	const l = ['placeholder', 'asChild', 'el'];
	let o = ee(e, l),
		r,
		{ $$slots: a = {}, $$scope: i } = e,
		{ placeholder: f = '' } = e,
		{ asChild: u = !1 } = e,
		{ el: c = void 0 } = e;
	const {
		states: { selectedLabel: h },
		getAttrs: _
	} = gn();
	Ae(s, h, (v) => n(7, (r = v)));
	const p = _('value');
	function $(v) {
		Ne[v ? 'unshift' : 'push'](() => {
			(c = v), n(0, c);
		});
	}
	return (
		(s.$$set = (v) => {
			(e = I(I({}, e), ke(v))),
				n(6, (o = ee(e, l))),
				'placeholder' in v && n(1, (f = v.placeholder)),
				'asChild' in v && n(2, (u = v.asChild)),
				'el' in v && n(0, (c = v.el)),
				'$$scope' in v && n(8, (i = v.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 128 && n(3, (t = r));
		}),
		[c, f, u, t, h, p, o, r, i, a, $]
	);
}
class xf extends he {
	constructor(e) {
		super(), pe(this, e, Qf, Zf, me, { placeholder: 1, asChild: 2, el: 0 });
	}
}
function zo() {
	return { NAME: 'switch', PARTS: ['root', 'input', 'thumb'] };
}
function eu(s) {
	const { NAME: e, PARTS: n } = zo(),
		t = Sn(e, n),
		l = { ...ji(wn(s)), getAttrs: t };
	return qt(e, l), { ...l, updateOption: Tn(l.options) };
}
function Bo() {
	const { NAME: s } = zo();
	return Ht(s);
}
function tu(s) {
	let e,
		n,
		t,
		l = [s[2], { name: s[3] }, { disabled: s[4] }, { required: s[5] }, { value: s[1] }, s[11]],
		o = {};
	for (let r = 0; r < l.length; r += 1) o = I(o, l[r]);
	return {
		c() {
			(e = y('input')), this.h();
		},
		l(r) {
			(e = D(r, 'INPUT', { name: !0 })), this.h();
		},
		h() {
			re(e, o);
		},
		m(r, a) {
			b(r, e, a),
				'value' in o && (e.value = o.value),
				e.autofocus && e.focus(),
				s[13](e),
				n || ((t = je(s[2].action(e))), (n = !0));
		},
		p(r, [a]) {
			re(
				e,
				(o = ge(l, [
					a & 4 && r[2],
					a & 8 && { name: r[3] },
					a & 16 && { disabled: r[4] },
					a & 32 && { required: r[5] },
					a & 2 && e.value !== r[1] && { value: r[1] },
					a & 2048 && r[11]
				]))
			),
				'value' in o && (e.value = o.value);
		},
		i: Se,
		o: Se,
		d(r) {
			r && m(e), s[13](null), (n = !1), t();
		}
	};
}
function nu(s, e, n) {
	let t;
	const l = ['el'];
	let o = ee(e, l),
		r,
		a,
		i,
		f,
		u,
		{ el: c = void 0 } = e;
	const {
		elements: { input: h },
		options: { value: _, name: p, disabled: $, required: v }
	} = Bo();
	Ae(s, h, (T) => n(2, (a = T))),
		Ae(s, _, (T) => n(12, (r = T))),
		Ae(s, p, (T) => n(3, (i = T))),
		Ae(s, $, (T) => n(4, (f = T))),
		Ae(s, v, (T) => n(5, (u = T)));
	function w(T) {
		Ne[T ? 'unshift' : 'push'](() => {
			(c = T), n(0, c);
		});
	}
	return (
		(s.$$set = (T) => {
			(e = I(I({}, e), ke(T))), n(11, (o = ee(e, l))), 'el' in T && n(0, (c = T.el));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 4096 && n(1, (t = r === void 0 || r === '' ? 'on' : r));
		}),
		[c, t, a, i, f, u, h, _, p, $, v, o, r, w]
	);
}
class lu extends he {
	constructor(e) {
		super(), pe(this, e, nu, tu, me, { el: 0 });
	}
}
const su = (s) => ({ builder: s & 16 }),
	is = (s) => ({ builder: s[4] }),
	ou = (s) => ({ builder: s & 16 }),
	as = (s) => ({ builder: s[4] });
function ru(s) {
	let e, n, t, l;
	const o = s[17].default,
		r = ie(o, s, s[16], is);
	let a = [s[4], { type: 'button' }, s[7]],
		i = {};
	for (let f = 0; f < a.length; f += 1) i = I(i, a[f]);
	return {
		c() {
			(e = y('button')), r && r.c(), this.h();
		},
		l(f) {
			e = D(f, 'BUTTON', { type: !0 });
			var u = B(e);
			r && r.l(u), u.forEach(m), this.h();
		},
		h() {
			re(e, i);
		},
		m(f, u) {
			b(f, e, u),
				r && r.m(e, null),
				e.autofocus && e.focus(),
				s[18](e),
				(n = !0),
				t ||
					((l = [je(s[4].action(e)), de(e, 'm-click', s[6]), de(e, 'm-keydown', s[6])]), (t = !0));
		},
		p(f, u) {
			r && r.p && (!n || u & 65552) && ae(r, o, f, f[16], n ? ue(o, f[16], u, su) : fe(f[16]), is),
				re(e, (i = ge(a, [u & 16 && f[4], { type: 'button' }, u & 128 && f[7]])));
		},
		i(f) {
			n || (d(r, f), (n = !0));
		},
		o(f) {
			g(r, f), (n = !1);
		},
		d(f) {
			f && m(e), r && r.d(f), s[18](null), (t = !1), xe(l);
		}
	};
}
function iu(s) {
	let e;
	const n = s[17].default,
		t = ie(n, s, s[16], as);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 65552) && ae(t, n, l, l[16], e ? ue(n, l[16], o, ou) : fe(l[16]), as);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function fs(s) {
	let e, n;
	const t = [s[3]];
	let l = {};
	for (let o = 0; o < t.length; o += 1) l = I(l, t[o]);
	return (
		(e = new lu({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), (n = !0);
			},
			p(o, r) {
				const a = r & 8 ? ge(t, [Ge(o[3])]) : {};
				e.$set(a);
			},
			i(o) {
				n || (d(e.$$.fragment, o), (n = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (n = !1);
			},
			d(o) {
				k(e, o);
			}
		}
	);
}
function au(s) {
	let e, n, t, l, o;
	const r = [iu, ru],
		a = [];
	function i(u, c) {
		return u[2] ? 0 : 1;
	}
	(e = i(s)), (n = a[e] = r[e](s));
	let f = s[1] && fs(s);
	return {
		c() {
			n.c(), (t = L()), f && f.c(), (l = te());
		},
		l(u) {
			n.l(u), (t = R(u)), f && f.l(u), (l = te());
		},
		m(u, c) {
			a[e].m(u, c), b(u, t, c), f && f.m(u, c), b(u, l, c), (o = !0);
		},
		p(u, [c]) {
			let h = e;
			(e = i(u)),
				e === h
					? a[e].p(u, c)
					: (Ce(),
						g(a[h], 1, 1, () => {
							a[h] = null;
						}),
						Ee(),
						(n = a[e]),
						n ? n.p(u, c) : ((n = a[e] = r[e](u)), n.c()),
						d(n, 1),
						n.m(t.parentNode, t)),
				u[1]
					? f
						? (f.p(u, c), c & 2 && d(f, 1))
						: ((f = fs(u)), f.c(), d(f, 1), f.m(l.parentNode, l))
					: f &&
						(Ce(),
						g(f, 1, 1, () => {
							f = null;
						}),
						Ee());
		},
		i(u) {
			o || (d(n), d(f), (o = !0));
		},
		o(u) {
			g(n), g(f), (o = !1);
		},
		d(u) {
			u && (m(t), m(l)), a[e].d(u), f && f.d(u);
		}
	};
}
function fu(s, e, n) {
	let t, l;
	const o = [
		'checked',
		'onCheckedChange',
		'disabled',
		'name',
		'value',
		'includeInput',
		'required',
		'asChild',
		'inputAttrs',
		'el'
	];
	let r = ee(e, o),
		a,
		{ $$slots: i = {}, $$scope: f } = e,
		{ checked: u = void 0 } = e,
		{ onCheckedChange: c = void 0 } = e,
		{ disabled: h = void 0 } = e,
		{ name: _ = void 0 } = e,
		{ value: p = void 0 } = e,
		{ includeInput: $ = !0 } = e,
		{ required: v = void 0 } = e,
		{ asChild: w = !1 } = e,
		{ inputAttrs: T = void 0 } = e,
		{ el: j = void 0 } = e;
	const {
		elements: { root: Y },
		states: { checked: V },
		updateOption: F,
		getAttrs: U
	} = eu({
		disabled: h,
		name: _,
		value: p,
		required: v,
		defaultChecked: u,
		onCheckedChange: ({ next: O }) => (u !== O && (c == null || c(O), n(8, (u = O))), O)
	});
	Ae(s, Y, (O) => n(15, (a = O)));
	const ne = Yt();
	function oe(O) {
		Ne[O ? 'unshift' : 'push'](() => {
			(j = O), n(0, j);
		});
	}
	return (
		(s.$$set = (O) => {
			(e = I(I({}, e), ke(O))),
				n(7, (r = ee(e, o))),
				'checked' in O && n(8, (u = O.checked)),
				'onCheckedChange' in O && n(9, (c = O.onCheckedChange)),
				'disabled' in O && n(10, (h = O.disabled)),
				'name' in O && n(11, (_ = O.name)),
				'value' in O && n(12, (p = O.value)),
				'includeInput' in O && n(1, ($ = O.includeInput)),
				'required' in O && n(13, (v = O.required)),
				'asChild' in O && n(2, (w = O.asChild)),
				'inputAttrs' in O && n(3, (T = O.inputAttrs)),
				'el' in O && n(0, (j = O.el)),
				'$$scope' in O && n(16, (f = O.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 256 && u !== void 0 && V.set(u),
				s.$$.dirty & 1024 && F('disabled', h),
				s.$$.dirty & 2048 && F('name', _),
				s.$$.dirty & 4096 && F('value', p),
				s.$$.dirty & 8192 && F('required', v),
				s.$$.dirty & 32768 && n(4, (t = a)),
				s.$$.dirty & 256 && n(14, (l = { ...U('root'), 'data-checked': u ? '' : void 0 })),
				s.$$.dirty & 16400 && Object.assign(t, l);
		}),
		[j, $, w, T, t, Y, ne, r, u, c, h, _, p, v, l, a, f, i, oe]
	);
}
let uu = class extends he {
	constructor(e) {
		super(),
			pe(this, e, fu, au, me, {
				checked: 8,
				onCheckedChange: 9,
				disabled: 10,
				name: 11,
				value: 12,
				includeInput: 1,
				required: 13,
				asChild: 2,
				inputAttrs: 3,
				el: 0
			});
	}
};
const cu = (s) => ({ attrs: s & 8, checked: s & 4 }),
	us = (s) => ({ attrs: s[3], checked: s[2] });
function du(s) {
	let e,
		n = [s[5], s[3]],
		t = {};
	for (let l = 0; l < n.length; l += 1) t = I(t, n[l]);
	return {
		c() {
			(e = y('span')), this.h();
		},
		l(l) {
			(e = D(l, 'SPAN', {})), B(e).forEach(m), this.h();
		},
		h() {
			re(e, t);
		},
		m(l, o) {
			b(l, e, o), s[8](e);
		},
		p(l, o) {
			re(e, (t = ge(n, [o & 32 && l[5], o & 8 && l[3]])));
		},
		i: Se,
		o: Se,
		d(l) {
			l && m(e), s[8](null);
		}
	};
}
function mu(s) {
	let e;
	const n = s[7].default,
		t = ie(n, s, s[6], us);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 76) && ae(t, n, l, l[6], e ? ue(n, l[6], o, cu) : fe(l[6]), us);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function _u(s) {
	let e, n, t, l;
	const o = [mu, du],
		r = [];
	function a(i, f) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = r[e] = o[e](s)),
		{
			c() {
				n.c(), (t = te());
			},
			l(i) {
				n.l(i), (t = te());
			},
			m(i, f) {
				r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, [f]) {
				let u = e;
				(e = a(i)),
					e === u
						? r[e].p(i, f)
						: (Ce(),
							g(r[u], 1, 1, () => {
								r[u] = null;
							}),
							Ee(),
							(n = r[e]),
							n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
							d(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), r[e].d(i);
			}
		}
	);
}
function gu(s, e, n) {
	let t;
	const l = ['asChild', 'el'];
	let o = ee(e, l),
		r,
		{ $$slots: a = {}, $$scope: i } = e,
		{ asChild: f = !1 } = e,
		{ el: u = void 0 } = e;
	const {
		states: { checked: c },
		getAttrs: h
	} = Bo();
	Ae(s, c, (p) => n(2, (r = p)));
	function _(p) {
		Ne[p ? 'unshift' : 'push'](() => {
			(u = p), n(0, u);
		});
	}
	return (
		(s.$$set = (p) => {
			(e = I(I({}, e), ke(p))),
				n(5, (o = ee(e, l))),
				'asChild' in p && n(1, (f = p.asChild)),
				'el' in p && n(0, (u = p.el)),
				'$$scope' in p && n(6, (i = p.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 4 &&
				n(
					3,
					(t = {
						...h('thumb'),
						'data-state': r ? 'checked' : 'unchecked',
						'data-checked': r ? '' : void 0
					})
				);
		}),
		[u, f, r, t, c, o, i, a, _]
	);
}
class hu extends he {
	constructor(e) {
		super(), pe(this, e, gu, _u, me, { asChild: 1, el: 0 });
	}
}
function Ko() {
	return { NAME: 'tabs', PARTS: ['root', 'content', 'list', 'trigger'] };
}
function pu(s) {
	const { NAME: e, PARTS: n } = Ko(),
		t = Sn(e, n),
		l = { ...Ki(wn(s)), getAttrs: t };
	return qt(e, l), { ...l, updateOption: Tn(l.options) };
}
function sl() {
	const { NAME: s } = Ko();
	return Ht(s);
}
const $u = (s) => ({ builder: s & 4, value: s & 8 }),
	cs = (s) => ({ builder: s[2], value: s[3] }),
	bu = (s) => ({ builder: s & 4, value: s & 8 }),
	ds = (s) => ({ builder: s[2], value: s[3] });
function vu(s) {
	let e, n, t, l;
	const o = s[15].default,
		r = ie(o, s, s[14], cs);
	let a = [s[2], s[6]],
		i = {};
	for (let f = 0; f < a.length; f += 1) i = I(i, a[f]);
	return {
		c() {
			(e = y('div')), r && r.c(), this.h();
		},
		l(f) {
			e = D(f, 'DIV', {});
			var u = B(e);
			r && r.l(u), u.forEach(m), this.h();
		},
		h() {
			re(e, i);
		},
		m(f, u) {
			b(f, e, u), r && r.m(e, null), s[16](e), (n = !0), t || ((l = je(s[2].action(e))), (t = !0));
		},
		p(f, u) {
			r && r.p && (!n || u & 16396) && ae(r, o, f, f[14], n ? ue(o, f[14], u, $u) : fe(f[14]), cs),
				re(e, (i = ge(a, [u & 4 && f[2], u & 64 && f[6]])));
		},
		i(f) {
			n || (d(r, f), (n = !0));
		},
		o(f) {
			g(r, f), (n = !1);
		},
		d(f) {
			f && m(e), r && r.d(f), s[16](null), (t = !1), l();
		}
	};
}
function ku(s) {
	let e;
	const n = s[15].default,
		t = ie(n, s, s[14], ds);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 16396) && ae(t, n, l, l[14], e ? ue(n, l[14], o, bu) : fe(l[14]), ds);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Cu(s) {
	let e, n, t, l;
	const o = [ku, vu],
		r = [];
	function a(i, f) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = r[e] = o[e](s)),
		{
			c() {
				n.c(), (t = te());
			},
			l(i) {
				n.l(i), (t = te());
			},
			m(i, f) {
				r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, [f]) {
				let u = e;
				(e = a(i)),
					e === u
						? r[e].p(i, f)
						: (Ce(),
							g(r[u], 1, 1, () => {
								r[u] = null;
							}),
							Ee(),
							(n = r[e]),
							n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
							d(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), r[e].d(i);
			}
		}
	);
}
function Eu(s, e, n) {
	let t;
	const l = [
		'orientation',
		'activateOnFocus',
		'loop',
		'autoSet',
		'value',
		'onValueChange',
		'asChild',
		'el'
	];
	let o = ee(e, l),
		r,
		a,
		{ $$slots: i = {}, $$scope: f } = e,
		{ orientation: u = void 0 } = e,
		{ activateOnFocus: c = void 0 } = e,
		{ loop: h = void 0 } = e,
		{ autoSet: _ = void 0 } = e,
		{ value: p = void 0 } = e,
		{ onValueChange: $ = void 0 } = e,
		{ asChild: v = !1 } = e,
		{ el: w = void 0 } = e;
	const {
		elements: { root: T },
		states: { value: j },
		updateOption: Y,
		getAttrs: V
	} = pu({
		orientation: u,
		activateOnFocus: c,
		loop: h,
		autoSet: _,
		defaultValue: p,
		onValueChange: ({ next: ne }) => (p !== ne && ($ == null || $(ne), n(7, (p = ne))), ne)
	});
	Ae(s, T, (ne) => n(13, (r = ne))), Ae(s, j, (ne) => n(3, (a = ne)));
	const F = V('root');
	function U(ne) {
		Ne[ne ? 'unshift' : 'push'](() => {
			(w = ne), n(0, w);
		});
	}
	return (
		(s.$$set = (ne) => {
			(e = I(I({}, e), ke(ne))),
				n(6, (o = ee(e, l))),
				'orientation' in ne && n(8, (u = ne.orientation)),
				'activateOnFocus' in ne && n(9, (c = ne.activateOnFocus)),
				'loop' in ne && n(10, (h = ne.loop)),
				'autoSet' in ne && n(11, (_ = ne.autoSet)),
				'value' in ne && n(7, (p = ne.value)),
				'onValueChange' in ne && n(12, ($ = ne.onValueChange)),
				'asChild' in ne && n(1, (v = ne.asChild)),
				'el' in ne && n(0, (w = ne.el)),
				'$$scope' in ne && n(14, (f = ne.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 128 && p !== void 0 && j.set(p),
				s.$$.dirty & 256 && Y('orientation', u),
				s.$$.dirty & 512 && Y('activateOnFocus', c),
				s.$$.dirty & 1024 && Y('loop', h),
				s.$$.dirty & 2048 && Y('autoSet', _),
				s.$$.dirty & 8192 && n(2, (t = r)),
				s.$$.dirty & 4 && Object.assign(t, F);
		}),
		[w, v, t, a, T, j, o, p, u, c, h, _, $, r, f, i, U]
	);
}
class Su extends he {
	constructor(e) {
		super(),
			pe(this, e, Eu, Cu, me, {
				orientation: 8,
				activateOnFocus: 9,
				loop: 10,
				autoSet: 11,
				value: 7,
				onValueChange: 12,
				asChild: 1,
				el: 0
			});
	}
}
const wu = (s) => ({ builder: s & 4 }),
	ms = (s) => ({ builder: s[2] }),
	Tu = (s) => ({ builder: s & 4 }),
	_s = (s) => ({ builder: s[2] });
function Au(s) {
	let e, n, t, l;
	const o = s[8].default,
		r = ie(o, s, s[7], ms);
	let a = [s[2], s[4]],
		i = {};
	for (let f = 0; f < a.length; f += 1) i = I(i, a[f]);
	return {
		c() {
			(e = y('div')), r && r.c(), this.h();
		},
		l(f) {
			e = D(f, 'DIV', {});
			var u = B(e);
			r && r.l(u), u.forEach(m), this.h();
		},
		h() {
			re(e, i);
		},
		m(f, u) {
			b(f, e, u), r && r.m(e, null), s[9](e), (n = !0), t || ((l = je(s[2].action(e))), (t = !0));
		},
		p(f, u) {
			r && r.p && (!n || u & 132) && ae(r, o, f, f[7], n ? ue(o, f[7], u, wu) : fe(f[7]), ms),
				re(e, (i = ge(a, [u & 4 && f[2], u & 16 && f[4]])));
		},
		i(f) {
			n || (d(r, f), (n = !0));
		},
		o(f) {
			g(r, f), (n = !1);
		},
		d(f) {
			f && m(e), r && r.d(f), s[9](null), (t = !1), l();
		}
	};
}
function Ou(s) {
	let e;
	const n = s[8].default,
		t = ie(n, s, s[7], _s);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 132) && ae(t, n, l, l[7], e ? ue(n, l[7], o, Tu) : fe(l[7]), _s);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Nu(s) {
	let e, n, t, l;
	const o = [Ou, Au],
		r = [];
	function a(i, f) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = r[e] = o[e](s)),
		{
			c() {
				n.c(), (t = te());
			},
			l(i) {
				n.l(i), (t = te());
			},
			m(i, f) {
				r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, [f]) {
				let u = e;
				(e = a(i)),
					e === u
						? r[e].p(i, f)
						: (Ce(),
							g(r[u], 1, 1, () => {
								r[u] = null;
							}),
							Ee(),
							(n = r[e]),
							n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
							d(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), r[e].d(i);
			}
		}
	);
}
function Pu(s, e, n) {
	let t;
	const l = ['value', 'asChild', 'el'];
	let o = ee(e, l),
		r,
		{ $$slots: a = {}, $$scope: i } = e,
		{ value: f } = e,
		{ asChild: u = !1 } = e,
		{ el: c = void 0 } = e;
	const {
		elements: { content: h },
		getAttrs: _
	} = sl();
	Ae(s, h, (v) => n(6, (r = v)));
	const p = _('content');
	function $(v) {
		Ne[v ? 'unshift' : 'push'](() => {
			(c = v), n(0, c);
		});
	}
	return (
		(s.$$set = (v) => {
			(e = I(I({}, e), ke(v))),
				n(4, (o = ee(e, l))),
				'value' in v && n(5, (f = v.value)),
				'asChild' in v && n(1, (u = v.asChild)),
				'el' in v && n(0, (c = v.el)),
				'$$scope' in v && n(7, (i = v.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 96 && n(2, (t = r(f))), s.$$.dirty & 4 && Object.assign(t, p);
		}),
		[c, u, t, h, o, f, r, i, a, $]
	);
}
let Iu = class extends he {
	constructor(e) {
		super(), pe(this, e, Pu, Nu, me, { value: 5, asChild: 1, el: 0 });
	}
};
const Du = (s) => ({ builder: s & 4 }),
	gs = (s) => ({ builder: s[2] }),
	yu = (s) => ({ builder: s & 4 }),
	hs = (s) => ({ builder: s[2] });
function Mu(s) {
	let e, n, t, l;
	const o = s[7].default,
		r = ie(o, s, s[6], gs);
	let a = [s[2], s[4]],
		i = {};
	for (let f = 0; f < a.length; f += 1) i = I(i, a[f]);
	return {
		c() {
			(e = y('div')), r && r.c(), this.h();
		},
		l(f) {
			e = D(f, 'DIV', {});
			var u = B(e);
			r && r.l(u), u.forEach(m), this.h();
		},
		h() {
			re(e, i);
		},
		m(f, u) {
			b(f, e, u), r && r.m(e, null), s[8](e), (n = !0), t || ((l = je(s[2].action(e))), (t = !0));
		},
		p(f, u) {
			r && r.p && (!n || u & 68) && ae(r, o, f, f[6], n ? ue(o, f[6], u, Du) : fe(f[6]), gs),
				re(e, (i = ge(a, [u & 4 && f[2], u & 16 && f[4]])));
		},
		i(f) {
			n || (d(r, f), (n = !0));
		},
		o(f) {
			g(r, f), (n = !1);
		},
		d(f) {
			f && m(e), r && r.d(f), s[8](null), (t = !1), l();
		}
	};
}
function Vu(s) {
	let e;
	const n = s[7].default,
		t = ie(n, s, s[6], hs);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 68) && ae(t, n, l, l[6], e ? ue(n, l[6], o, yu) : fe(l[6]), hs);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Ru(s) {
	let e, n, t, l;
	const o = [Vu, Mu],
		r = [];
	function a(i, f) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = r[e] = o[e](s)),
		{
			c() {
				n.c(), (t = te());
			},
			l(i) {
				n.l(i), (t = te());
			},
			m(i, f) {
				r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, [f]) {
				let u = e;
				(e = a(i)),
					e === u
						? r[e].p(i, f)
						: (Ce(),
							g(r[u], 1, 1, () => {
								r[u] = null;
							}),
							Ee(),
							(n = r[e]),
							n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
							d(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), r[e].d(i);
			}
		}
	);
}
function Lu(s, e, n) {
	let t;
	const l = ['asChild', 'el'];
	let o = ee(e, l),
		r,
		{ $$slots: a = {}, $$scope: i } = e,
		{ asChild: f = !1 } = e,
		{ el: u = void 0 } = e;
	const {
		elements: { list: c },
		getAttrs: h
	} = sl();
	Ae(s, c, ($) => n(5, (r = $)));
	const _ = h('list');
	function p($) {
		Ne[$ ? 'unshift' : 'push'](() => {
			(u = $), n(0, u);
		});
	}
	return (
		(s.$$set = ($) => {
			(e = I(I({}, e), ke($))),
				n(4, (o = ee(e, l))),
				'asChild' in $ && n(1, (f = $.asChild)),
				'el' in $ && n(0, (u = $.el)),
				'$$scope' in $ && n(6, (i = $.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 32 && n(2, (t = r)), s.$$.dirty & 4 && Object.assign(t, _);
		}),
		[u, f, t, c, o, r, i, a, p]
	);
}
let Fu = class extends he {
	constructor(e) {
		super(), pe(this, e, Lu, Ru, me, { asChild: 1, el: 0 });
	}
};
const ju = (s) => ({ builder: s & 4 }),
	ps = (s) => ({ builder: s[2] }),
	zu = (s) => ({ builder: s & 4 }),
	$s = (s) => ({ builder: s[2] });
function Bu(s) {
	let e, n, t, l;
	const o = s[10].default,
		r = ie(o, s, s[9], ps);
	let a = [s[2], { type: 'button' }, s[5]],
		i = {};
	for (let f = 0; f < a.length; f += 1) i = I(i, a[f]);
	return {
		c() {
			(e = y('button')), r && r.c(), this.h();
		},
		l(f) {
			e = D(f, 'BUTTON', { type: !0 });
			var u = B(e);
			r && r.l(u), u.forEach(m), this.h();
		},
		h() {
			re(e, i);
		},
		m(f, u) {
			b(f, e, u),
				r && r.m(e, null),
				e.autofocus && e.focus(),
				s[11](e),
				(n = !0),
				t ||
					((l = [
						je(s[2].action(e)),
						de(e, 'm-click', s[4]),
						de(e, 'm-focus', s[4]),
						de(e, 'm-keydown', s[4])
					]),
					(t = !0));
		},
		p(f, u) {
			r && r.p && (!n || u & 516) && ae(r, o, f, f[9], n ? ue(o, f[9], u, ju) : fe(f[9]), ps),
				re(e, (i = ge(a, [u & 4 && f[2], { type: 'button' }, u & 32 && f[5]])));
		},
		i(f) {
			n || (d(r, f), (n = !0));
		},
		o(f) {
			g(r, f), (n = !1);
		},
		d(f) {
			f && m(e), r && r.d(f), s[11](null), (t = !1), xe(l);
		}
	};
}
function Ku(s) {
	let e;
	const n = s[10].default,
		t = ie(n, s, s[9], $s);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 516) && ae(t, n, l, l[9], e ? ue(n, l[9], o, zu) : fe(l[9]), $s);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function qu(s) {
	let e, n, t, l;
	const o = [Ku, Bu],
		r = [];
	function a(i, f) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = r[e] = o[e](s)),
		{
			c() {
				n.c(), (t = te());
			},
			l(i) {
				n.l(i), (t = te());
			},
			m(i, f) {
				r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, [f]) {
				let u = e;
				(e = a(i)),
					e === u
						? r[e].p(i, f)
						: (Ce(),
							g(r[u], 1, 1, () => {
								r[u] = null;
							}),
							Ee(),
							(n = r[e]),
							n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
							d(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), r[e].d(i);
			}
		}
	);
}
function Hu(s, e, n) {
	let t;
	const l = ['value', 'disabled', 'asChild', 'el'];
	let o = ee(e, l),
		r,
		{ $$slots: a = {}, $$scope: i } = e,
		{ value: f } = e,
		{ disabled: u = void 0 } = e,
		{ asChild: c = !1 } = e,
		{ el: h = void 0 } = e;
	const {
		elements: { trigger: _ },
		getAttrs: p
	} = sl();
	Ae(s, _, (T) => n(8, (r = T)));
	const $ = Yt(),
		v = p('trigger');
	function w(T) {
		Ne[T ? 'unshift' : 'push'](() => {
			(h = T), n(0, h);
		});
	}
	return (
		(s.$$set = (T) => {
			(e = I(I({}, e), ke(T))),
				n(5, (o = ee(e, l))),
				'value' in T && n(6, (f = T.value)),
				'disabled' in T && n(7, (u = T.disabled)),
				'asChild' in T && n(1, (c = T.asChild)),
				'el' in T && n(0, (h = T.el)),
				'$$scope' in T && n(9, (i = T.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 448 && n(2, (t = r({ value: f, disabled: u }))),
				s.$$.dirty & 4 && Object.assign(t, v);
		}),
		[h, c, t, _, $, o, f, u, r, i, a, w]
	);
}
let Uu = class extends he {
	constructor(e) {
		super(), pe(this, e, Hu, qu, me, { value: 6, disabled: 7, asChild: 1, el: 0 });
	}
};
function Wu(s) {
	let e;
	const n = s[2].default,
		t = ie(n, s, s[3], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 8) && ae(t, n, l, l[3], e ? ue(n, l[3], o, null) : fe(l[3]), null);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Gu(s) {
	let e, n;
	const t = [{ class: be(s[0]) }, s[1]];
	let l = { $$slots: { default: [Wu] }, $$scope: { ctx: s } };
	for (let o = 0; o < t.length; o += 1) l = I(l, t[o]);
	return (
		(e = new Ro({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), (n = !0);
			},
			p(o, [r]) {
				const a = r & 3 ? ge(t, [r & 1 && { class: be(o[0]) }, r & 2 && Ge(o[1])]) : {};
				r & 8 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
			},
			i(o) {
				n || (d(e.$$.fragment, o), (n = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (n = !1);
			},
			d(o) {
				k(e, o);
			}
		}
	);
}
function Ju(s, e, n) {
	const t = ['class'];
	let l = ee(e, t),
		{ $$slots: o = {}, $$scope: r } = e,
		{ class: a = void 0 } = e;
	return (
		(s.$$set = (i) => {
			(e = I(I({}, e), ke(i))),
				n(1, (l = ee(e, t))),
				'class' in i && n(0, (a = i.class)),
				'$$scope' in i && n(3, (r = i.$$scope));
		}),
		[a, l, o, r]
	);
}
class Xu extends he {
	constructor(e) {
		super(), pe(this, e, Ju, Gu, me, { class: 0 });
	}
}
function Yu(s) {
	let e, n;
	const t = [
		{ transition: s[1] },
		{ transitionConfig: s[2] },
		{ class: be('fixed inset-0 z-50 bg-background/80 backdrop-blur-sm ', s[0]) },
		s[3]
	];
	let l = {};
	for (let o = 0; o < t.length; o += 1) l = I(l, t[o]);
	return (
		(e = new Fo({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), (n = !0);
			},
			p(o, [r]) {
				const a =
					r & 15
						? ge(t, [
								r & 2 && { transition: o[1] },
								r & 4 && { transitionConfig: o[2] },
								r & 1 && {
									class: be('fixed inset-0 z-50 bg-background/80 backdrop-blur-sm ', o[0])
								},
								r & 8 && Ge(o[3])
							])
						: {};
				e.$set(a);
			},
			i(o) {
				n || (d(e.$$.fragment, o), (n = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (n = !1);
			},
			d(o) {
				k(e, o);
			}
		}
	);
}
function Zu(s, e, n) {
	const t = ['class', 'transition', 'transitionConfig'];
	let l = ee(e, t),
		{ class: o = void 0 } = e,
		{ transition: r = Ao } = e,
		{ transitionConfig: a = { duration: 150 } } = e;
	return (
		(s.$$set = (i) => {
			(e = I(I({}, e), ke(i))),
				n(3, (l = ee(e, t))),
				'class' in i && n(0, (o = i.class)),
				'transition' in i && n(1, (r = i.transition)),
				'transitionConfig' in i && n(2, (a = i.transitionConfig));
		}),
		[o, r, a, l]
	);
}
class Qu extends he {
	constructor(e) {
		super(), pe(this, e, Zu, Yu, me, { class: 0, transition: 1, transitionConfig: 2 });
	}
}
function xu(s) {
	let e;
	const n = s[2].default,
		t = ie(n, s, s[3], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 8) && ae(t, n, l, l[3], e ? ue(n, l[3], o, null) : fe(l[3]), null);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function ec(s) {
	let e, n;
	const t = [{ name: 'x' }, s[1], { iconNode: s[0] }];
	let l = { $$slots: { default: [xu] }, $$scope: { ctx: s } };
	for (let o = 0; o < t.length; o += 1) l = I(l, t[o]);
	return (
		(e = new ci({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), (n = !0);
			},
			p(o, [r]) {
				const a = r & 3 ? ge(t, [t[0], r & 2 && Ge(o[1]), r & 1 && { iconNode: o[0] }]) : {};
				r & 8 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
			},
			i(o) {
				n || (d(e.$$.fragment, o), (n = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (n = !1);
			},
			d(o) {
				k(e, o);
			}
		}
	);
}
function tc(s, e, n) {
	let { $$slots: t = {}, $$scope: l } = e;
	const o = [
		['path', { d: 'M18 6 6 18' }],
		['path', { d: 'm6 6 12 12' }]
	];
	return (
		(s.$$set = (r) => {
			n(1, (e = I(I({}, e), ke(r)))), '$$scope' in r && n(3, (l = r.$$scope));
		}),
		(e = ke(e)),
		[o, e, t, l]
	);
}
class nc extends he {
	constructor(e) {
		super(), pe(this, e, tc, ec, me, {});
	}
}
function lc(s) {
	let e,
		n,
		t,
		l = 'Close',
		o;
	return (
		(e = new nc({ props: { class: 'h-4 w-4' } })),
		{
			c() {
				E(e.$$.fragment), (n = L()), (t = y('span')), (t.textContent = l), this.h();
			},
			l(r) {
				S(e.$$.fragment, r),
					(n = R(r)),
					(t = D(r, 'SPAN', { class: !0, 'data-svelte-h': !0 })),
					lt(t) !== 'svelte-1pewzs3' && (t.textContent = l),
					this.h();
			},
			h() {
				P(t, 'class', 'sr-only');
			},
			m(r, a) {
				C(e, r, a), b(r, n, a), b(r, t, a), (o = !0);
			},
			p: Se,
			i(r) {
				o || (d(e.$$.fragment, r), (o = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (o = !1);
			},
			d(r) {
				r && (m(n), m(t)), k(e, r);
			}
		}
	);
}
function sc(s) {
	let e, n, t;
	const l = s[7].default,
		o = ie(l, s, s[8], null);
	return (
		(n = new Vo({
			props: {
				autofocus: !1,
				class:
					'absolute right-5 top-5 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary',
				$$slots: { default: [lc] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				o && o.c(), (e = L()), E(n.$$.fragment);
			},
			l(r) {
				o && o.l(r), (e = R(r)), S(n.$$.fragment, r);
			},
			m(r, a) {
				o && o.m(r, a), b(r, e, a), C(n, r, a), (t = !0);
			},
			p(r, a) {
				o && o.p && (!t || a & 256) && ae(o, l, r, r[8], t ? ue(l, r[8], a, null) : fe(r[8]), null);
				const i = {};
				a & 256 && (i.$$scope = { dirty: a, ctx: r }), n.$set(i);
			},
			i(r) {
				t || (d(o, r), d(n.$$.fragment, r), (t = !0));
			},
			o(r) {
				g(o, r), g(n.$$.fragment, r), (t = !1);
			},
			d(r) {
				r && m(e), o && o.d(r), k(n, r);
			}
		}
	);
}
function oc(s) {
	let e, n, t, l;
	e = new Qu({});
	const o = [
		{ inTransition: s[2] },
		{ inTransitionConfig: s[3] },
		{ outTransition: s[4] },
		{ outTransitionConfig: s[5] },
		{ class: be(bs({ side: s[1] }), s[0]) },
		s[6]
	];
	let r = { $$slots: { default: [sc] }, $$scope: { ctx: s } };
	for (let a = 0; a < o.length; a += 1) r = I(r, o[a]);
	return (
		(t = new Lo({ props: r })),
		{
			c() {
				E(e.$$.fragment), (n = L()), E(t.$$.fragment);
			},
			l(a) {
				S(e.$$.fragment, a), (n = R(a)), S(t.$$.fragment, a);
			},
			m(a, i) {
				C(e, a, i), b(a, n, i), C(t, a, i), (l = !0);
			},
			p(a, i) {
				const f =
					i & 127
						? ge(o, [
								i & 4 && { inTransition: a[2] },
								i & 8 && { inTransitionConfig: a[3] },
								i & 16 && { outTransition: a[4] },
								i & 32 && { outTransitionConfig: a[5] },
								i & 3 && { class: be(bs({ side: a[1] }), a[0]) },
								i & 64 && Ge(a[6])
							])
						: {};
				i & 256 && (f.$$scope = { dirty: i, ctx: a }), t.$set(f);
			},
			i(a) {
				l || (d(e.$$.fragment, a), d(t.$$.fragment, a), (l = !0));
			},
			o(a) {
				g(e.$$.fragment, a), g(t.$$.fragment, a), (l = !1);
			},
			d(a) {
				a && m(n), k(e, a), k(t, a);
			}
		}
	);
}
function rc(s) {
	let e, n;
	return (
		(e = new Xu({ props: { $$slots: { default: [oc] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, [l]) {
				const o = {};
				l & 383 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function ic(s, e, n) {
	const t = [
		'class',
		'side',
		'inTransition',
		'inTransitionConfig',
		'outTransition',
		'outTransitionConfig'
	];
	let l = ee(e, t),
		{ $$slots: o = {}, $$scope: r } = e,
		{ class: a = void 0 } = e,
		{ side: i = 'right' } = e,
		{ inTransition: f = vl } = e,
		{ inTransitionConfig: u = vs[i ?? 'right'].in } = e,
		{ outTransition: c = vl } = e,
		{ outTransitionConfig: h = vs[i ?? 'right'].out } = e;
	return (
		(s.$$set = (_) => {
			(e = I(I({}, e), ke(_))),
				n(6, (l = ee(e, t))),
				'class' in _ && n(0, (a = _.class)),
				'side' in _ && n(1, (i = _.side)),
				'inTransition' in _ && n(2, (f = _.inTransition)),
				'inTransitionConfig' in _ && n(3, (u = _.inTransitionConfig)),
				'outTransition' in _ && n(4, (c = _.outTransition)),
				'outTransitionConfig' in _ && n(5, (h = _.outTransitionConfig)),
				'$$scope' in _ && n(8, (r = _.$$scope));
		}),
		[a, i, f, u, c, h, l, o, r]
	);
}
class ac extends he {
	constructor(e) {
		super(),
			pe(this, e, ic, rc, me, {
				class: 0,
				side: 1,
				inTransition: 2,
				inTransitionConfig: 3,
				outTransition: 4,
				outTransitionConfig: 5
			});
	}
}
function fc(s) {
	let e, n, t;
	const l = s[3].default,
		o = ie(l, s, s[2], null);
	let r = [{ class: (n = be('flex flex-col space-y-2 text-center sm:text-left', s[0])) }, s[1]],
		a = {};
	for (let i = 0; i < r.length; i += 1) a = I(a, r[i]);
	return {
		c() {
			(e = y('div')), o && o.c(), this.h();
		},
		l(i) {
			e = D(i, 'DIV', { class: !0 });
			var f = B(e);
			o && o.l(f), f.forEach(m), this.h();
		},
		h() {
			re(e, a);
		},
		m(i, f) {
			b(i, e, f), o && o.m(e, null), (t = !0);
		},
		p(i, [f]) {
			o && o.p && (!t || f & 4) && ae(o, l, i, i[2], t ? ue(l, i[2], f, null) : fe(i[2]), null),
				re(
					e,
					(a = ge(r, [
						(!t ||
							(f & 1 &&
								n !== (n = be('flex flex-col space-y-2 text-center sm:text-left', i[0])))) && {
							class: n
						},
						f & 2 && i[1]
					]))
				);
		},
		i(i) {
			t || (d(o, i), (t = !0));
		},
		o(i) {
			g(o, i), (t = !1);
		},
		d(i) {
			i && m(e), o && o.d(i);
		}
	};
}
function uc(s, e, n) {
	const t = ['class'];
	let l = ee(e, t),
		{ $$slots: o = {}, $$scope: r } = e,
		{ class: a = void 0 } = e;
	return (
		(s.$$set = (i) => {
			(e = I(I({}, e), ke(i))),
				n(1, (l = ee(e, t))),
				'class' in i && n(0, (a = i.class)),
				'$$scope' in i && n(2, (r = i.$$scope));
		}),
		[a, l, r, o]
	);
}
class cc extends he {
	constructor(e) {
		super(), pe(this, e, uc, fc, me, { class: 0 });
	}
}
function dc(s) {
	let e;
	const n = s[2].default,
		t = ie(n, s, s[3], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 8) && ae(t, n, l, l[3], e ? ue(n, l[3], o, null) : fe(l[3]), null);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function mc(s) {
	let e, n;
	const t = [{ class: be('text-lg text-foreground', s[0]) }, s[1]];
	let l = { $$slots: { default: [dc] }, $$scope: { ctx: s } };
	for (let o = 0; o < t.length; o += 1) l = I(l, t[o]);
	return (
		(e = new xi({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), (n = !0);
			},
			p(o, [r]) {
				const a =
					r & 3
						? ge(t, [r & 1 && { class: be('text-lg text-foreground', o[0]) }, r & 2 && Ge(o[1])])
						: {};
				r & 8 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
			},
			i(o) {
				n || (d(e.$$.fragment, o), (n = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (n = !1);
			},
			d(o) {
				k(e, o);
			}
		}
	);
}
function _c(s, e, n) {
	const t = ['class'];
	let l = ee(e, t),
		{ $$slots: o = {}, $$scope: r } = e,
		{ class: a = void 0 } = e;
	return (
		(s.$$set = (i) => {
			(e = I(I({}, e), ke(i))),
				n(1, (l = ee(e, t))),
				'class' in i && n(0, (a = i.class)),
				'$$scope' in i && n(3, (r = i.$$scope));
		}),
		[a, l, o, r]
	);
}
class gc extends he {
	constructor(e) {
		super(), pe(this, e, _c, mc, me, { class: 0 });
	}
}
function hc(s) {
	let e;
	const n = s[2].default,
		t = ie(n, s, s[3], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 8) && ae(t, n, l, l[3], e ? ue(n, l[3], o, null) : fe(l[3]), null);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function pc(s) {
	let e, n;
	const t = [{ class: be('text-sm text-muted-foreground', s[0]) }, s[1]];
	let l = { $$slots: { default: [hc] }, $$scope: { ctx: s } };
	for (let o = 0; o < t.length; o += 1) l = I(l, t[o]);
	return (
		(e = new Ga({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), (n = !0);
			},
			p(o, [r]) {
				const a =
					r & 3
						? ge(t, [
								r & 1 && { class: be('text-sm text-muted-foreground', o[0]) },
								r & 2 && Ge(o[1])
							])
						: {};
				r & 8 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
			},
			i(o) {
				n || (d(e.$$.fragment, o), (n = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (n = !1);
			},
			d(o) {
				k(e, o);
			}
		}
	);
}
function $c(s, e, n) {
	const t = ['class'];
	let l = ee(e, t),
		{ $$slots: o = {}, $$scope: r } = e,
		{ class: a = void 0 } = e;
	return (
		(s.$$set = (i) => {
			(e = I(I({}, e), ke(i))),
				n(1, (l = ee(e, t))),
				'class' in i && n(0, (a = i.class)),
				'$$scope' in i && n(3, (r = i.$$scope));
		}),
		[a, l, o, r]
	);
}
class bc extends he {
	constructor(e) {
		super(), pe(this, e, $c, pc, me, { class: 0 });
	}
}
const vc = Mo,
	kc = jo,
	bs = qr({
		base: 'fixed z-50 gap-4 bg-background px-5 py-4 shadow-lg m-2.5 border rounded-lg',
		variants: {
			side: {
				left: 'inset-y-0 left-0 h-[calc(100vh-20px)] w-[calc(100vw-20px)] sm:w-3/4 sm:max-w-sm',
				right: 'inset-y-0 right-0 h-[calc(100vh-20px)] w-[calc(100vw-20px)] sm:w-3/4 sm:max-w-sm'
			}
		},
		defaultVariants: { side: 'right' }
	}),
	vs = {
		top: {
			in: { y: '-100%', duration: 500, opacity: 1 },
			out: { y: '-100%', duration: 300, opacity: 1 }
		},
		bottom: {
			in: { y: '100%', duration: 500, opacity: 1 },
			out: { y: '100%', duration: 300, opacity: 1 }
		},
		left: {
			in: { x: '-100%', duration: 500, opacity: 1 },
			out: { x: '-100%', duration: 300, opacity: 1 }
		},
		right: {
			in: { x: '100%', duration: 500, opacity: 1 },
			out: { x: '100%', duration: 300, opacity: 1 }
		}
	};
function Cc(s) {
	let e;
	const n = s[2].default,
		t = ie(n, s, s[3], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 8) && ae(t, n, l, l[3], e ? ue(n, l[3], o, null) : fe(l[3]), null);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Ec(s) {
	let e, n;
	const t = [{ name: 'twitter' }, s[1], { iconNode: s[0] }];
	let l = { $$slots: { default: [Cc] }, $$scope: { ctx: s } };
	for (let o = 0; o < t.length; o += 1) l = I(l, t[o]);
	return (
		(e = new Hr({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), (n = !0);
			},
			p(o, [r]) {
				const a = r & 3 ? ge(t, [t[0], r & 2 && Ge(o[1]), r & 1 && { iconNode: o[0] }]) : {};
				r & 8 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
			},
			i(o) {
				n || (d(e.$$.fragment, o), (n = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (n = !1);
			},
			d(o) {
				k(e, o);
			}
		}
	);
}
function Sc(s, e, n) {
	let { $$slots: t = {}, $$scope: l } = e;
	const o = [
		[
			'path',
			{
				d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'
			}
		]
	];
	return (
		(s.$$set = (r) => {
			n(1, (e = I(I({}, e), ke(r)))), '$$scope' in r && n(3, (l = r.$$scope));
		}),
		(e = ke(e)),
		[o, e, t, l]
	);
}
class wc extends he {
	constructor(e) {
		super(), pe(this, e, Sc, Ec, me, {});
	}
}
const Kt = [
		{
			name: 'Notes',
			commands: [
				{
					title: 'New note',
					icon: 'notePlus',
					shortcut: qe['notes:create'],
					onSelect: () => {
						Cr(ce(It));
					}
				},
				{
					title: 'New folder',
					icon: 'folderPlus',
					shortcut: qe['notes:create-folder'],
					onSelect: () => {
						fi(ce(It));
					}
				},
				{
					title: 'Open note',
					icon: 'note',
					shortcut: qe['command:open-note'],
					onSelect: () => 'open_note'
				},
				{
					title: 'Search collection',
					icon: 'searchDocument',
					shortcut: qe['notes:search'],
					onSelect: () => {
						Er.set(!0);
					}
				},
				{
					title: 'Toggle editor mode',
					icon: 'cursorI',
					shortcut: qe['editor:toggle-mode'],
					onSelect: () => {
						ce(Yn).setEditable(!ce(Yn).isEditable),
							Sr.update((s) => (s === 'edit' ? 'view' : 'edit'));
					}
				},
				{
					title: 'Find in note',
					icon: 'searchDocument',
					shortcut: qe['editor:search'],
					onSelect: () => {
						wr.set(!0);
					}
				}
			]
		},
		{
			name: 'Navigation',
			commands: [
				{
					title: 'Go to previous note',
					icon: 'arrowLeft',
					shortcut: qe['notes:history-back'],
					onSelect: () => {
						window.dispatchEvent(
							new KeyboardEvent('keydown', { key: 'ArrowLeft', altKey: !0, metaKey: !0 })
						);
					}
				},
				{
					title: 'Go to next note',
					icon: 'arrowRight',
					shortcut: qe['notes:history-forward'],
					onSelect: () => {
						window.dispatchEvent(
							new KeyboardEvent('keydown', { key: 'ArrowRight', altKey: !0, metaKey: !0 })
						);
					}
				},
				{
					title: 'Open other collection',
					icon: 'folder',
					shortcut: qe['app:open-collection'],
					onSelect: () => 'open_collection'
				},
				{
					title: 'Go to settings',
					icon: 'settings',
					shortcut: qe['app:settings'],
					onSelect: () => {
						bn.update((s) => ({ ...s, isOpen: !0 }));
					}
				},
				{
					title: 'Go to help',
					icon: 'lifebouy',
					shortcut: qe['app:help'],
					onSelect: () => 'help_and_feedback'
				},
				{ title: 'View shortcuts', icon: 'bolt', shortcut: qe['app:shortcuts'] },
				{
					title: 'Send feedback',
					icon: 'lifebouy',
					shortcut: qe['app:help'],
					onSelect: () => 'help_and_feedback'
				},
				{
					title: 'Share with friends',
					icon: 'share',
					shortcut: qe['app:share'],
					onSelect: () => 'share'
				}
			]
		},
		{
			name: 'Appearance',
			commands: [
				{
					title: 'Change theme',
					icon: 'sun',
					shortcut: qe['settings:toggle-theme'],
					onSelect: () => 'change_theme'
				}
			]
		},
		{
			name: 'Layout',
			commands: [
				{
					title: 'Toggle sidebar',
					icon: 'sidebarMenuLeft',
					shortcut: qe['notes:toggle-sidebar'],
					onSelect: () => {
						Tr.update((s) => !s);
					}
				},
				{
					title: 'Toggle note details',
					icon: 'sidebarMenuRight',
					shortcut: qe['notes:toggle-details'],
					onSelect: () => {
						Ar.update((s) => !s);
					}
				}
			]
		}
	],
	qo = (s) => ({
		name: s.split('/').pop(),
		commands: [
			{
				title: 'Save note',
				icon: 'floppy',
				shortcut: qe['note:save'],
				onSelect: () => {
					Or(s);
				}
			},
			{
				title: 'Duplicate note',
				icon: 'copy',
				shortcut: qe['note:duplicate'],
				onSelect() {
					Nr(s);
				}
			},
			{
				title: 'Rename note',
				icon: 'editPencil',
				shortcut: qe['note:rename'],
				onSelect: () => {
					ce(Yn).commands.blur();
					const e = document.getElementById('inline-title-input');
					window.setTimeout(() => {
						e == null || e.focus(), e == null || e.select();
					}, 50);
				}
			},
			{
				title: 'Delete note',
				icon: 'bin',
				shortcut: qe['note:delete'],
				onSelect: () => {
					Pr(s);
				}
			},
			{
				title: 'Move note to...',
				icon: 'motionCirclesLines',
				shortcut: qe['command:move-note'],
				onSelect: () => 'move_note'
			},
			{
				title: 'Copy note path',
				icon: 'copy',
				shortcut: qe['note:copy-path'],
				onSelect: () => {
					navigator.clipboard.writeText(s);
				}
			}
		]
	});
function ks(s, e, n) {
	const t = s.slice();
	return (t[12] = e[n]), t;
}
function Cs(s, e, n) {
	const t = s.slice();
	return (t[15] = e[n]), t;
}
function Tc(s) {
	let e, n;
	return (
		(e = new Ke({ props: { name: 'monitor', class: 'w-4 h-4' } })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Ac(s) {
	let e, n;
	return (
		(e = new Ke({ props: { name: 'sun', class: 'w-4 h-4' } })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Oc(s) {
	let e, n;
	return (
		(e = new Ke({ props: { name: 'moon', class: 'w-4 h-4' } })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Nc(s) {
	let e, n, t, l;
	const o = [Oc, Ac, Tc],
		r = [];
	function a(i, f) {
		return i[4] === 'dark' ? 0 : i[4] === 'light' ? 1 : 2;
	}
	return (
		(e = a(s)),
		(n = r[e] = o[e](s)),
		{
			c() {
				n.c(), (t = te());
			},
			l(i) {
				n.l(i), (t = te());
			},
			m(i, f) {
				r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, f) {
				let u = e;
				(e = a(i)),
					e !== u &&
						(Ce(),
						g(r[u], 1, 1, () => {
							r[u] = null;
						}),
						Ee(),
						(n = r[e]),
						n || ((n = r[e] = o[e](i)), n.c()),
						d(n, 1),
						n.m(t.parentNode, t));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), r[e].d(i);
			}
		}
	);
}
function Pc(s) {
	let e, n;
	return (
		(e = new Qe({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: 'h-6 w-6 fill-muted-foreground hover:fill-foreground transition-all',
				scale: 'md',
				$$slots: { default: [Nc] },
				$$scope: { ctx: s }
			}
		})),
		e.$on('click', Ir),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 262160 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Ic(s) {
	let e, n;
	return (
		(e = new Ke({ props: { name: 'cloudX', class: 'w-4 h-4' } })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p: Se,
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Dc(s) {
	let e, n;
	return (
		(e = new Qe({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: 'h-6 w-6 fill-muted-foreground hover:fill-foreground transition-all',
				scale: 'md',
				$$slots: { default: [Ic] },
				$$scope: { ctx: s }
			}
		})),
		e.$on('click', s[5]),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 262144 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function yc(s) {
	let e, n;
	return (
		(e = new Ke({ props: { name: 'lifebouy', class: 'w-4 h-4' } })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p: Se,
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Mc(s) {
	let e, n;
	return (
		(e = new Qe({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: 'h-6 w-6 fill-muted-foreground hover:fill-foreground transition-all',
				scale: 'md',
				$$slots: { default: [yc] },
				$$scope: { ctx: s }
			}
		})),
		e.$on('click', s[6]),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 262144 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Vc(s) {
	let e, n, t, l;
	return (
		(e = new Do({ props: { options: qe['app:shortcuts'], callback: s[7] } })),
		(t = new Ke({ props: { name: 'bolt', class: 'w-4 h-4' } })),
		{
			c() {
				E(e.$$.fragment), (n = L()), E(t.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o), (n = R(o)), S(t.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), b(o, n, r), C(t, o, r), (l = !0);
			},
			p(o, r) {
				const a = {};
				r & 2 && (a.callback = o[7]), e.$set(a);
			},
			i(o) {
				l || (d(e.$$.fragment, o), d(t.$$.fragment, o), (l = !0));
			},
			o(o) {
				g(e.$$.fragment, o), g(t.$$.fragment, o), (l = !1);
			},
			d(o) {
				o && m(n), k(e, o), k(t, o);
			}
		}
	);
}
function Rc(s) {
	let e, n;
	return (
		(e = new Qe({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: 'h-6 w-6 fill-muted-foreground hover:fill-foreground transition-all',
				scale: 'md',
				$$slots: { default: [Vc] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 262146 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Lc(s) {
	let e, n;
	return (
		(e = new ft({
			props: {
				text: 'Shortcuts',
				shortcut: qe['app:shortcuts'],
				$$slots: { default: [Rc] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 262146 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Fc(s) {
	let e;
	return {
		c() {
			e = X('Shortcuts');
		},
		l(n) {
			e = J(n, 'Shortcuts');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function jc(s) {
	let e, n, t;
	function l(r) {
		s[8](r);
	}
	let o = {
		placeholder: 'Search shortcuts',
		autocorrect: 'off',
		autocomplete: 'off',
		class: 'w-full text-foreground font-light'
	};
	return (
		s[0] !== void 0 && (o.value = s[0]),
		(e = new Xr({ props: o })),
		Ne.push(() => rt(e, 'value', l)),
		{
			c() {
				E(e.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r);
			},
			m(r, a) {
				C(e, r, a), (t = !0);
			},
			p(r, a) {
				const i = {};
				!n && a & 1 && ((n = !0), (i.value = r[0]), ot(() => (n = !1))), e.$set(i);
			},
			i(r) {
				t || (d(e.$$.fragment, r), (t = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (t = !1);
			},
			d(r) {
				k(e, r);
			}
		}
	);
}
function zc(s) {
	let e, n, t, l;
	return (
		(e = new gc({ props: { class: 'px-5', $$slots: { default: [Fc] }, $$scope: { ctx: s } } })),
		(t = new bc({
			props: { class: 'px-5 py-1', $$slots: { default: [jc] }, $$scope: { ctx: s } }
		})),
		{
			c() {
				E(e.$$.fragment), (n = L()), E(t.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o), (n = R(o)), S(t.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), b(o, n, r), C(t, o, r), (l = !0);
			},
			p(o, r) {
				const a = {};
				r & 262144 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
				const i = {};
				r & 262145 && (i.$$scope = { dirty: r, ctx: o }), t.$set(i);
			},
			i(o) {
				l || (d(e.$$.fragment, o), d(t.$$.fragment, o), (l = !0));
			},
			o(o) {
				g(e.$$.fragment, o), g(t.$$.fragment, o), (l = !1);
			},
			d(o) {
				o && m(n), k(e, o), k(t, o);
			}
		}
	);
}
function Bc(s) {
	let e,
		n,
		t = s[12].name + '',
		l,
		o;
	return (
		(e = new di({
			props: {
				class: be(
					'w-4 h-4 transition-all text-muted-foreground group-hover:text-foreground',
					s[2].includes(s[12].name) && 'transform -rotate-90'
				)
			}
		})),
		{
			c() {
				E(e.$$.fragment), (n = L()), (l = X(t));
			},
			l(r) {
				S(e.$$.fragment, r), (n = R(r)), (l = J(r, t));
			},
			m(r, a) {
				C(e, r, a), b(r, n, a), b(r, l, a), (o = !0);
			},
			p(r, a) {
				const i = {};
				a & 12 &&
					(i.class = be(
						'w-4 h-4 transition-all text-muted-foreground group-hover:text-foreground',
						r[2].includes(r[12].name) && 'transform -rotate-90'
					)),
					e.$set(i),
					(!o || a & 8) && t !== (t = r[12].name + '') && at(l, t);
			},
			i(r) {
				o || (d(e.$$.fragment, r), (o = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (o = !1);
			},
			d(r) {
				r && (m(n), m(l)), k(e, r);
			}
		}
	);
}
function Es(s) {
	let e,
		n = Zn(s[15].shortcut) + '',
		t;
	return {
		c() {
			(e = y('span')), (t = X(n)), this.h();
		},
		l(l) {
			e = D(l, 'SPAN', { class: !0 });
			var o = B(e);
			(t = J(o, n)), o.forEach(m), this.h();
		},
		h() {
			P(
				e,
				'class',
				'pointer-events-none inline-flex h-[18px] pl-1.5 tracking-widest -mr-2 select-none items-center gap-1 rounded bg-secondary px-1 font-mono text-muted-foreground opacity-100'
			);
		},
		m(l, o) {
			b(l, e, o), N(e, t);
		},
		p(l, o) {
			o & 8 && n !== (n = Zn(l[15].shortcut) + '') && at(t, n);
		},
		d(l) {
			l && m(e);
		}
	};
}
function Ss(s) {
	let e,
		n,
		t = s[15].title + '',
		l,
		o,
		r,
		a = s[15].shortcut && Es(s);
	return {
		c() {
			(e = y('div')), (n = y('span')), (l = X(t)), (o = L()), a && a.c(), (r = L()), this.h();
		},
		l(i) {
			e = D(i, 'DIV', { class: !0 });
			var f = B(e);
			n = D(f, 'SPAN', { class: !0 });
			var u = B(n);
			(l = J(u, t)), u.forEach(m), (o = R(f)), a && a.l(f), (r = R(f)), f.forEach(m), this.h();
		},
		h() {
			P(n, 'class', 'font-light'), P(e, 'class', 'flex items-center justify-between gap-2');
		},
		m(i, f) {
			b(i, e, f), N(e, n), N(n, l), N(e, o), a && a.m(e, null), N(e, r);
		},
		p(i, f) {
			f & 8 && t !== (t = i[15].title + '') && at(l, t),
				i[15].shortcut
					? a
						? a.p(i, f)
						: ((a = Es(i)), a.c(), a.m(e, r))
					: a && (a.d(1), (a = null));
		},
		d(i) {
			i && m(e), a && a.d();
		}
	};
}
function Kc(s) {
	let e,
		n = Ze(s[12].commands),
		t = [];
	for (let l = 0; l < n.length; l += 1) t[l] = Ss(Cs(s, n, l));
	return {
		c() {
			for (let l = 0; l < t.length; l += 1) t[l].c();
			e = te();
		},
		l(l) {
			for (let o = 0; o < t.length; o += 1) t[o].l(l);
			e = te();
		},
		m(l, o) {
			for (let r = 0; r < t.length; r += 1) t[r] && t[r].m(l, o);
			b(l, e, o);
		},
		p(l, o) {
			if (o & 8) {
				n = Ze(l[12].commands);
				let r;
				for (r = 0; r < n.length; r += 1) {
					const a = Cs(l, n, r);
					t[r] ? t[r].p(a, o) : ((t[r] = Ss(a)), t[r].c(), t[r].m(e.parentNode, e));
				}
				for (; r < t.length; r += 1) t[r].d(1);
				t.length = n.length;
			}
		},
		d(l) {
			l && m(e), vt(t, l);
		}
	};
}
function qc(s) {
	let e, n, t, l;
	return (
		(e = new Wr({
			props: {
				class: 'flex items-center gap-2 group w-full text-sm font-normal',
				$$slots: { default: [Bc] },
				$$scope: { ctx: s }
			}
		})),
		(t = new Gr({
			props: {
				class: 'text-sm text-muted-foreground pt-3 space-y-3',
				$$slots: { default: [Kc] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment), (n = L()), E(t.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o), (n = R(o)), S(t.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), b(o, n, r), C(t, o, r), (l = !0);
			},
			p(o, r) {
				const a = {};
				r & 262156 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
				const i = {};
				r & 262152 && (i.$$scope = { dirty: r, ctx: o }), t.$set(i);
			},
			i(o) {
				l || (d(e.$$.fragment, o), d(t.$$.fragment, o), (l = !0));
			},
			o(o) {
				g(e.$$.fragment, o), g(t.$$.fragment, o), (l = !1);
			},
			d(o) {
				o && m(n), k(e, o), k(t, o);
			}
		}
	);
}
function ws(s) {
	let e, n, t, l;
	function o(...r) {
		return s[9](s[12], ...r);
	}
	return (
		(n = new Ur({
			props: {
				open: !s[2].includes(s[12].name),
				onOpenChange: o,
				$$slots: { default: [qc] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = y('div')), E(n.$$.fragment), (t = L()), this.h();
			},
			l(r) {
				e = D(r, 'DIV', { class: !0 });
				var a = B(e);
				S(n.$$.fragment, a), (t = R(a)), a.forEach(m), this.h();
			},
			h() {
				P(e, 'class', 'w-full h-full py-3 px-5');
			},
			m(r, a) {
				b(r, e, a), C(n, e, null), N(e, t), (l = !0);
			},
			p(r, a) {
				s = r;
				const i = {};
				a & 12 && (i.open = !s[2].includes(s[12].name)),
					a & 12 && (i.onOpenChange = o),
					a & 262156 && (i.$$scope = { dirty: a, ctx: s }),
					n.$set(i);
			},
			i(r) {
				l || (d(n.$$.fragment, r), (l = !0));
			},
			o(r) {
				g(n.$$.fragment, r), (l = !1);
			},
			d(r) {
				r && m(e), k(n);
			}
		}
	);
}
function Ts(s) {
	let e,
		n,
		t,
		l,
		o = 'No shortcuts found',
		r;
	return (
		(n = new Ke({ props: { name: 'searchBars', class: 'w-5 h-5 fill-muted-foreground' } })),
		{
			c() {
				(e = y('div')), E(n.$$.fragment), (t = L()), (l = y('p')), (l.textContent = o), this.h();
			},
			l(a) {
				e = D(a, 'DIV', { class: !0 });
				var i = B(e);
				S(n.$$.fragment, i),
					(t = R(i)),
					(l = D(i, 'P', { class: !0, 'data-svelte-h': !0 })),
					lt(l) !== 'svelte-1q4u1hw' && (l.textContent = o),
					i.forEach(m),
					this.h();
			},
			h() {
				P(l, 'class', 'text-muted-foreground text-sm'),
					P(e, 'class', 'w-full h-full flex flex-col gap-1 items-center justify-center pt-14');
			},
			m(a, i) {
				b(a, e, i), C(n, e, null), N(e, t), N(e, l), (r = !0);
			},
			i(a) {
				r || (d(n.$$.fragment, a), (r = !0));
			},
			o(a) {
				g(n.$$.fragment, a), (r = !1);
			},
			d(a) {
				a && m(e), k(n);
			}
		}
	);
}
function Hc(s) {
	let e, n, t, l, o;
	e = new cc({ props: { $$slots: { default: [zc] }, $$scope: { ctx: s } } });
	let r = Ze(s[3]),
		a = [];
	for (let u = 0; u < r.length; u += 1) a[u] = ws(ks(s, r, u));
	const i = (u) =>
		g(a[u], 1, 1, () => {
			a[u] = null;
		});
	let f = s[3].length === 0 && Ts();
	return {
		c() {
			E(e.$$.fragment), (n = L()), (t = y('div'));
			for (let u = 0; u < a.length; u += 1) a[u].c();
			(l = L()), f && f.c();
		},
		l(u) {
			S(e.$$.fragment, u), (n = R(u)), (t = D(u, 'DIV', {}));
			var c = B(t);
			for (let h = 0; h < a.length; h += 1) a[h].l(c);
			(l = R(c)), f && f.l(c), c.forEach(m);
		},
		m(u, c) {
			C(e, u, c), b(u, n, c), b(u, t, c);
			for (let h = 0; h < a.length; h += 1) a[h] && a[h].m(t, null);
			N(t, l), f && f.m(t, null), (o = !0);
		},
		p(u, c) {
			const h = {};
			if ((c & 262145 && (h.$$scope = { dirty: c, ctx: u }), e.$set(h), c & 12)) {
				r = Ze(u[3]);
				let _;
				for (_ = 0; _ < r.length; _ += 1) {
					const p = ks(u, r, _);
					a[_] ? (a[_].p(p, c), d(a[_], 1)) : ((a[_] = ws(p)), a[_].c(), d(a[_], 1), a[_].m(t, l));
				}
				for (Ce(), _ = r.length; _ < a.length; _ += 1) i(_);
				Ee();
			}
			u[3].length === 0
				? f
					? c & 8 && d(f, 1)
					: ((f = Ts()), f.c(), d(f, 1), f.m(t, null))
				: f &&
					(Ce(),
					g(f, 1, 1, () => {
						f = null;
					}),
					Ee());
		},
		i(u) {
			if (!o) {
				d(e.$$.fragment, u);
				for (let c = 0; c < r.length; c += 1) d(a[c]);
				d(f), (o = !0);
			}
		},
		o(u) {
			g(e.$$.fragment, u), (a = a.filter(Boolean));
			for (let c = 0; c < a.length; c += 1) g(a[c]);
			g(f), (o = !1);
		},
		d(u) {
			u && (m(n), m(t)), k(e, u), vt(a, u), f && f.d();
		}
	};
}
function Uc(s) {
	let e, n, t, l;
	return (
		(e = new kc({ props: { $$slots: { default: [Lc] }, $$scope: { ctx: s } } })),
		(t = new ac({
			props: { class: 'px-0 overflow-y-auto', $$slots: { default: [Hc] }, $$scope: { ctx: s } }
		})),
		{
			c() {
				E(e.$$.fragment), (n = L()), E(t.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o), (n = R(o)), S(t.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), b(o, n, r), C(t, o, r), (l = !0);
			},
			p(o, r) {
				const a = {};
				r & 262146 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
				const i = {};
				r & 262157 && (i.$$scope = { dirty: r, ctx: o }), t.$set(i);
			},
			i(o) {
				l || (d(e.$$.fragment, o), d(t.$$.fragment, o), (l = !0));
			},
			o(o) {
				g(e.$$.fragment, o), g(t.$$.fragment, o), (l = !1);
			},
			d(o) {
				o && m(n), k(e, o), k(t, o);
			}
		}
	);
}
function Wc(s) {
	let e, n;
	return (
		(e = new Ke({ props: { name: 'share', class: 'w-4 h-4' } })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p: Se,
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Gc(s) {
	let e, n;
	return (
		(e = new Qe({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: 'h-6 w-6 fill-muted-foreground hover:fill-foreground transition-all',
				scale: 'md',
				$$slots: { default: [Wc] },
				$$scope: { ctx: s }
			}
		})),
		e.$on('click', s[11]),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 262144 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Jc(s) {
	let e, n, t, l, o, r, a, i, f, u, c, h, _, p;
	(t = new ft({
		props: {
			text: 'Toggle theme',
			shortcut: qe['settings:toggle-theme'],
			$$slots: { default: [Pc] },
			$$scope: { ctx: s }
		}
	})),
		(o = new ft({
			props: { text: 'Typyst Sync', $$slots: { default: [Dc] }, $$scope: { ctx: s } }
		})),
		(i = new ft({
			props: {
				text: 'Help & feedback',
				shortcut: qe['app:help'],
				$$slots: { default: [Mc] },
				$$scope: { ctx: s }
			}
		}));
	function $(w) {
		s[10](w);
	}
	let v = { $$slots: { default: [Uc] }, $$scope: { ctx: s } };
	return (
		s[1] !== void 0 && (v.open = s[1]),
		(u = new vc({ props: v })),
		Ne.push(() => rt(u, 'open', $)),
		(_ = new ft({
			props: {
				text: 'Share',
				shortcut: qe['app:share'],
				$$slots: { default: [Gc] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = y('footer')),
					(n = y('div')),
					E(t.$$.fragment),
					(l = L()),
					E(o.$$.fragment),
					(r = L()),
					(a = y('div')),
					E(i.$$.fragment),
					(f = L()),
					E(u.$$.fragment),
					(h = L()),
					E(_.$$.fragment),
					this.h();
			},
			l(w) {
				e = D(w, 'FOOTER', { class: !0 });
				var T = B(e);
				n = D(T, 'DIV', { class: !0 });
				var j = B(n);
				S(t.$$.fragment, j),
					(l = R(j)),
					S(o.$$.fragment, j),
					j.forEach(m),
					(r = R(T)),
					(a = D(T, 'DIV', { class: !0 }));
				var Y = B(a);
				S(i.$$.fragment, Y),
					(f = R(Y)),
					S(u.$$.fragment, Y),
					(h = R(Y)),
					S(_.$$.fragment, Y),
					Y.forEach(m),
					T.forEach(m),
					this.h();
			},
			h() {
				P(n, 'class', 'cursor-default space-x-0.5'),
					P(a, 'class', 'cursor-default space-x-0.5'),
					P(
						e,
						'class',
						'fixed bottom-0 w-full flex justify-between items-center h-9 border-t pb-0.5 px-1.5 bg-background z-20'
					);
			},
			m(w, T) {
				b(w, e, T),
					N(e, n),
					C(t, n, null),
					N(n, l),
					C(o, n, null),
					N(e, r),
					N(e, a),
					C(i, a, null),
					N(a, f),
					C(u, a, null),
					N(a, h),
					C(_, a, null),
					(p = !0);
			},
			p(w, [T]) {
				const j = {};
				T & 262160 && (j.$$scope = { dirty: T, ctx: w }), t.$set(j);
				const Y = {};
				T & 262144 && (Y.$$scope = { dirty: T, ctx: w }), o.$set(Y);
				const V = {};
				T & 262144 && (V.$$scope = { dirty: T, ctx: w }), i.$set(V);
				const F = {};
				T & 262159 && (F.$$scope = { dirty: T, ctx: w }),
					!c && T & 2 && ((c = !0), (F.open = w[1]), ot(() => (c = !1))),
					u.$set(F);
				const U = {};
				T & 262144 && (U.$$scope = { dirty: T, ctx: w }), _.$set(U);
			},
			i(w) {
				p ||
					(d(t.$$.fragment, w),
					d(o.$$.fragment, w),
					d(i.$$.fragment, w),
					d(u.$$.fragment, w),
					d(_.$$.fragment, w),
					(p = !0));
			},
			o(w) {
				g(t.$$.fragment, w),
					g(o.$$.fragment, w),
					g(i.$$.fragment, w),
					g(u.$$.fragment, w),
					g(_.$$.fragment, w),
					(p = !1);
			},
			d(w) {
				w && m(e), k(t), k(o), k(i), k(u), k(_);
			}
		}
	);
}
function Xc(s, e, n) {
	let t;
	Ae(s, tl, ($) => n(4, (t = $)));
	let l = !1,
		o = '',
		r = [],
		a = [...Kt];
	Mn.subscribe(($) => {
		a[0].name !== 'Notes' && a.shift(), $ && a.unshift(qo($));
	});
	const i = () => {
			bn.set({ isOpen: !0, activePage: 'typyst sync' });
		},
		f = () => {
			document.dispatchEvent(new KeyboardEvent('keydown', { key: 'h', metaKey: !0, shiftKey: !0 }));
		},
		u = () => n(1, (l = !l));
	function c($) {
		(o = $), n(0, o);
	}
	const h = ($, v) => {
		n(2, (r = v ? r.filter((w) => w !== $.name) : [...r, $.name]));
	};
	function _($) {
		(l = $), n(1, l);
	}
	const p = () => {
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'l', metaKey: !0, shiftKey: !0 }));
	};
	return (
		(s.$$.update = () => {
			s.$$.dirty & 1 &&
				n(
					3,
					(a = Kt.map(($) => ({
						...$,
						commands: $.commands.filter((v) => v.title.toLowerCase().includes(o.toLowerCase()))
					})).filter(($) => $.commands.length > 0))
				);
		}),
		[o, l, r, a, t, i, f, u, c, h, _, p]
	);
}
class Yc extends he {
	constructor(e) {
		super(), pe(this, e, Xc, Jc, me, {});
	}
}
function Zc(s) {
	let e, n, t, l, o, r;
	return (
		(n = new Qe({
			props: {
				variant: 'secondary',
				size: 'sm',
				scale: 'sm',
				class: 'rounded-full h-[27px] px-2.5',
				$$slots: { default: [xc] },
				$$scope: { ctx: s }
			}
		})),
		(o = new Qe({
			props: {
				size: 'sm',
				scale: 'sm',
				class: 'rounded-full h-[27px] px-2.5',
				$$slots: { default: [ed] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = y('a')), E(n.$$.fragment), (t = L()), (l = y('a')), E(o.$$.fragment), this.h();
			},
			l(a) {
				e = D(a, 'A', { href: !0 });
				var i = B(e);
				S(n.$$.fragment, i), i.forEach(m), (t = R(a)), (l = D(a, 'A', { href: !0 }));
				var f = B(l);
				S(o.$$.fragment, f), f.forEach(m), this.h();
			},
			h() {
				P(e, 'href', '/auth/sign-in'), P(l, 'href', '/auth/sign-up');
			},
			m(a, i) {
				b(a, e, i), C(n, e, null), b(a, t, i), b(a, l, i), C(o, l, null), (r = !0);
			},
			p(a, i) {
				const f = {};
				i & 8 && (f.$$scope = { dirty: i, ctx: a }), n.$set(f);
				const u = {};
				i & 8 && (u.$$scope = { dirty: i, ctx: a }), o.$set(u);
			},
			i(a) {
				r || (d(n.$$.fragment, a), d(o.$$.fragment, a), (r = !0));
			},
			o(a) {
				g(n.$$.fragment, a), g(o.$$.fragment, a), (r = !1);
			},
			d(a) {
				a && (m(e), m(t), m(l)), k(n), k(o);
			}
		}
	);
}
function Qc(s) {
	var f, u;
	let e,
		n,
		t = (((f = s[2]) == null ? void 0 : f.name) || ((u = s[2]) == null ? void 0 : u.email)) + '',
		l,
		o,
		r,
		a,
		i;
	return (
		(a = new Qe({
			props: {
				variant: 'secondary',
				size: 'sm',
				scale: 'sm',
				class: 'rounded-full h-[27px] px-2.5',
				$$slots: { default: [td] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = y('span')),
					(n = X('Welcome, ')),
					(l = X(t)),
					(o = L()),
					(r = y('a')),
					E(a.$$.fragment),
					this.h();
			},
			l(c) {
				e = D(c, 'SPAN', { class: !0 });
				var h = B(e);
				(n = J(h, 'Welcome, ')),
					(l = J(h, t)),
					h.forEach(m),
					(o = R(c)),
					(r = D(c, 'A', { href: !0 }));
				var _ = B(r);
				S(a.$$.fragment, _), _.forEach(m), this.h();
			},
			h() {
				P(e, 'class', 'text-sm text-muted-foreground mr-2'), P(r, 'href', '/auth/sign-out');
			},
			m(c, h) {
				b(c, e, h), N(e, n), N(e, l), b(c, o, h), b(c, r, h), C(a, r, null), (i = !0);
			},
			p(c, h) {
				var p, $;
				(!i || h & 4) &&
					t !==
						(t =
							(((p = c[2]) == null ? void 0 : p.name) || (($ = c[2]) == null ? void 0 : $.email)) +
							'') &&
					at(l, t);
				const _ = {};
				h & 8 && (_.$$scope = { dirty: h, ctx: c }), a.$set(_);
			},
			i(c) {
				i || (d(a.$$.fragment, c), (i = !0));
			},
			o(c) {
				g(a.$$.fragment, c), (i = !1);
			},
			d(c) {
				c && (m(e), m(o), m(r)), k(a);
			}
		}
	);
}
function xc(s) {
	let e;
	return {
		c() {
			e = X('Sign In');
		},
		l(n) {
			e = J(n, 'Sign In');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function ed(s) {
	let e;
	return {
		c() {
			e = X('Sign Up');
		},
		l(n) {
			e = J(n, 'Sign Up');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function td(s) {
	let e;
	return {
		c() {
			e = X('Sign Out');
		},
		l(n) {
			e = J(n, 'Sign Out');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function nd(s) {
	let e;
	return {
		c() {
			e = X('Star on Github');
		},
		l(n) {
			e = J(n, 'Star on Github');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function ld(s) {
	let e;
	return {
		c() {
			e = X('Download');
		},
		l(n) {
			e = J(n, 'Download');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function sd(s) {
	var V;
	let e,
		n,
		t,
		l,
		o = (((V = s[0]) == null ? void 0 : V.split('/').pop()) || '') + '',
		r,
		a,
		i,
		f,
		u,
		c,
		h,
		_,
		p,
		$,
		v,
		w;
	const T = [Qc, Zc],
		j = [];
	function Y(F, U) {
		return F[1] ? 0 : 1;
	}
	return (
		(f = Y(s)),
		(u = j[f] = T[f](s)),
		(_ = new Qe({
			props: {
				variant: 'secondary',
				size: 'sm',
				scale: 'sm',
				class: 'rounded-full h-[27px] px-2.5',
				$$slots: { default: [nd] },
				$$scope: { ctx: s }
			}
		})),
		(v = new Qe({
			props: {
				size: 'sm',
				scale: 'sm',
				class: 'rounded-full h-[27px] px-2.5',
				$$slots: { default: [ld] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = y('header')),
					(n = y('div')),
					(t = L()),
					(l = y('p')),
					(r = X(o)),
					(a = L()),
					(i = y('div')),
					u.c(),
					(c = L()),
					(h = y('a')),
					E(_.$$.fragment),
					(p = L()),
					($ = y('a')),
					E(v.$$.fragment),
					this.h();
			},
			l(F) {
				e = D(F, 'HEADER', { class: !0 });
				var U = B(e);
				(n = D(U, 'DIV', {})), B(n).forEach(m), (t = R(U)), (l = D(U, 'P', { class: !0 }));
				var ne = B(l);
				(r = J(ne, o)), ne.forEach(m), (a = R(U)), (i = D(U, 'DIV', { class: !0 }));
				var oe = B(i);
				u.l(oe), (c = R(oe)), (h = D(oe, 'A', { href: !0, target: !0, rel: !0 }));
				var O = B(h);
				S(_.$$.fragment, O),
					O.forEach(m),
					(p = R(oe)),
					($ = D(oe, 'A', { href: !0, target: !0, rel: !0 }));
				var G = B($);
				S(v.$$.fragment, G), G.forEach(m), oe.forEach(m), U.forEach(m), this.h();
			},
			h() {
				P(
					l,
					'class',
					'pointer-events-none text-sm text-foreground/85 hover:text-foreground/100 transition-all cursor-default outline-none -mr-[159px]'
				),
					P(h, 'href', 'https://go.typyst.md/github'),
					P(h, 'target', '_blank'),
					P(h, 'rel', 'noopener noreferrer'),
					P($, 'href', 'https://go.typyst.md/download'),
					P($, 'target', '_blank'),
					P($, 'rel', 'noopener noreferrer'),
					P(i, 'class', 'flex gap-1 items-center'),
					P(
						e,
						'class',
						'absolute top-0 w-full flex justify-between items-center h-9 border-b pl-20 bg-background z-40 px-1.5'
					);
			},
			m(F, U) {
				b(F, e, U),
					N(e, n),
					N(e, t),
					N(e, l),
					N(l, r),
					N(e, a),
					N(e, i),
					j[f].m(i, null),
					N(i, c),
					N(i, h),
					C(_, h, null),
					N(i, p),
					N(i, $),
					C(v, $, null),
					(w = !0);
			},
			p(F, [U]) {
				var G;
				(!w || U & 1) &&
					o !== (o = (((G = F[0]) == null ? void 0 : G.split('/').pop()) || '') + '') &&
					at(r, o);
				let ne = f;
				(f = Y(F)),
					f === ne
						? j[f].p(F, U)
						: (Ce(),
							g(j[ne], 1, 1, () => {
								j[ne] = null;
							}),
							Ee(),
							(u = j[f]),
							u ? u.p(F, U) : ((u = j[f] = T[f](F)), u.c()),
							d(u, 1),
							u.m(i, c));
				const oe = {};
				U & 8 && (oe.$$scope = { dirty: U, ctx: F }), _.$set(oe);
				const O = {};
				U & 8 && (O.$$scope = { dirty: U, ctx: F }), v.$set(O);
			},
			i(F) {
				w || (d(u), d(_.$$.fragment, F), d(v.$$.fragment, F), (w = !0));
			},
			o(F) {
				g(u), g(_.$$.fragment, F), g(v.$$.fragment, F), (w = !1);
			},
			d(F) {
				F && m(e), j[f].d(), k(_), k(v);
			}
		}
	);
}
function od(s, e, n) {
	let t, l, o;
	return (
		Ae(s, It, (r) => n(0, (t = r))),
		Ae(s, _i, (r) => n(1, (l = r))),
		Ae(s, gi, (r) => n(2, (o = r))),
		[t, l, o]
	);
}
class rd extends he {
	constructor(e) {
		super(), pe(this, e, od, sd, me, {});
	}
}
function id(s) {
	let e;
	const n = s[1].default,
		t = ie(n, s, s[2], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 4) && ae(t, n, l, l[2], e ? ue(n, l[2], o, null) : fe(l[2]), null);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function ad(s) {
	let e, n;
	const t = [s[0]];
	let l = { $$slots: { default: [id] }, $$scope: { ctx: s } };
	for (let o = 0; o < t.length; o += 1) l = I(l, t[o]);
	return (
		(e = new Ro({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), (n = !0);
			},
			p(o, [r]) {
				const a = r & 1 ? ge(t, [Ge(o[0])]) : {};
				r & 4 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
			},
			i(o) {
				n || (d(e.$$.fragment, o), (n = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (n = !1);
			},
			d(o) {
				k(e, o);
			}
		}
	);
}
function fd(s, e, n) {
	const t = [];
	let l = ee(e, t),
		{ $$slots: o = {}, $$scope: r } = e;
	return (
		(s.$$set = (a) => {
			(e = I(I({}, e), ke(a))), n(0, (l = ee(e, t))), '$$scope' in a && n(2, (r = a.$$scope));
		}),
		[l, o, r]
	);
}
class ud extends he {
	constructor(e) {
		super(), pe(this, e, fd, ad, me, {});
	}
}
function cd(s) {
	let e, n;
	const t = [
		{ transition: s[1] },
		{ transitionConfig: s[2] },
		{ class: be('fixed inset-0 z-50 bg-background/80 backdrop-blur-sm ', s[0]) },
		s[3]
	];
	let l = {};
	for (let o = 0; o < t.length; o += 1) l = I(l, t[o]);
	return (
		(e = new Fo({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), (n = !0);
			},
			p(o, [r]) {
				const a =
					r & 15
						? ge(t, [
								r & 2 && { transition: o[1] },
								r & 4 && { transitionConfig: o[2] },
								r & 1 && {
									class: be('fixed inset-0 z-50 bg-background/80 backdrop-blur-sm ', o[0])
								},
								r & 8 && Ge(o[3])
							])
						: {};
				e.$set(a);
			},
			i(o) {
				n || (d(e.$$.fragment, o), (n = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (n = !1);
			},
			d(o) {
				k(e, o);
			}
		}
	);
}
function dd(s, e, n) {
	const t = ['class', 'transition', 'transitionConfig'];
	let l = ee(e, t),
		{ class: o = void 0 } = e,
		{ transition: r = Ao } = e,
		{ transitionConfig: a = { duration: 150 } } = e;
	return (
		(s.$$set = (i) => {
			(e = I(I({}, e), ke(i))),
				n(3, (l = ee(e, t))),
				'class' in i && n(0, (o = i.class)),
				'transition' in i && n(1, (r = i.transition)),
				'transitionConfig' in i && n(2, (a = i.transitionConfig));
		}),
		[o, r, a, l]
	);
}
class md extends he {
	constructor(e) {
		super(), pe(this, e, dd, cd, me, { class: 0, transition: 1, transitionConfig: 2 });
	}
}
function _d(s) {
	let e,
		n,
		t = [
			{ width: s[1] },
			{ height: s[1] },
			{ viewBox: '0 0 15 15' },
			{ fill: 'none' },
			{ xmlns: 'http://www.w3.org/2000/svg' },
			s[2]
		],
		l = {};
	for (let o = 0; o < t.length; o += 1) l = I(l, t[o]);
	return {
		c() {
			(e = an('svg')), (n = an('path')), this.h();
		},
		l(o) {
			e = rn(o, 'svg', { width: !0, height: !0, viewBox: !0, fill: !0, xmlns: !0 });
			var r = B(e);
			(n = rn(r, 'path', { 'fill-rule': !0, 'clip-rule': !0, d: !0, fill: !0 })),
				B(n).forEach(m),
				r.forEach(m),
				this.h();
		},
		h() {
			P(n, 'fill-rule', 'evenodd'),
				P(n, 'clip-rule', 'evenodd'),
				P(
					n,
					'd',
					'M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z'
				),
				P(n, 'fill', s[0]),
				on(e, l);
		},
		m(o, r) {
			b(o, e, r), N(e, n);
		},
		p(o, [r]) {
			r & 1 && P(n, 'fill', o[0]),
				on(
					e,
					(l = ge(t, [
						r & 2 && { width: o[1] },
						r & 2 && { height: o[1] },
						{ viewBox: '0 0 15 15' },
						{ fill: 'none' },
						{ xmlns: 'http://www.w3.org/2000/svg' },
						r & 4 && o[2]
					]))
				);
		},
		i: Se,
		o: Se,
		d(o) {
			o && m(e);
		}
	};
}
function gd(s, e, n) {
	const t = ['color', 'size'];
	let l = ee(e, t),
		{ color: o = 'currentColor' } = e,
		{ size: r = 15 } = e;
	return (
		(s.$$set = (a) => {
			(e = I(I({}, e), ke(a))),
				n(2, (l = ee(e, t))),
				'color' in a && n(0, (o = a.color)),
				'size' in a && n(1, (r = a.size));
		}),
		[o, r, l]
	);
}
class hd extends he {
	constructor(e) {
		super(), pe(this, e, gd, _d, me, { color: 0, size: 1 });
	}
}
function pd(s) {
	let e,
		n,
		t = [
			{ width: s[1] },
			{ height: s[1] },
			{ viewBox: '0 0 15 15' },
			{ fill: 'none' },
			{ xmlns: 'http://www.w3.org/2000/svg' },
			s[2]
		],
		l = {};
	for (let o = 0; o < t.length; o += 1) l = I(l, t[o]);
	return {
		c() {
			(e = an('svg')), (n = an('path')), this.h();
		},
		l(o) {
			e = rn(o, 'svg', { width: !0, height: !0, viewBox: !0, fill: !0, xmlns: !0 });
			var r = B(e);
			(n = rn(r, 'path', { 'fill-rule': !0, 'clip-rule': !0, d: !0, fill: !0 })),
				B(n).forEach(m),
				r.forEach(m),
				this.h();
		},
		h() {
			P(n, 'fill-rule', 'evenodd'),
				P(n, 'clip-rule', 'evenodd'),
				P(
					n,
					'd',
					'M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z'
				),
				P(n, 'fill', s[0]),
				on(e, l);
		},
		m(o, r) {
			b(o, e, r), N(e, n);
		},
		p(o, [r]) {
			r & 1 && P(n, 'fill', o[0]),
				on(
					e,
					(l = ge(t, [
						r & 2 && { width: o[1] },
						r & 2 && { height: o[1] },
						{ viewBox: '0 0 15 15' },
						{ fill: 'none' },
						{ xmlns: 'http://www.w3.org/2000/svg' },
						r & 4 && o[2]
					]))
				);
		},
		i: Se,
		o: Se,
		d(o) {
			o && m(e);
		}
	};
}
function $d(s, e, n) {
	const t = ['color', 'size'];
	let l = ee(e, t),
		{ color: o = 'currentColor' } = e,
		{ size: r = 15 } = e;
	return (
		(s.$$set = (a) => {
			(e = I(I({}, e), ke(a))),
				n(2, (l = ee(e, t))),
				'color' in a && n(0, (o = a.color)),
				'size' in a && n(1, (r = a.size));
		}),
		[o, r, l]
	);
}
class bd extends he {
	constructor(e) {
		super(), pe(this, e, $d, pd, me, { color: 0, size: 1 });
	}
}
function vd(s) {
	let e,
		n,
		t = [
			{ width: s[1] },
			{ height: s[1] },
			{ viewBox: '0 0 15 15' },
			{ fill: 'none' },
			{ xmlns: 'http://www.w3.org/2000/svg' },
			s[2]
		],
		l = {};
	for (let o = 0; o < t.length; o += 1) l = I(l, t[o]);
	return {
		c() {
			(e = an('svg')), (n = an('path')), this.h();
		},
		l(o) {
			e = rn(o, 'svg', { width: !0, height: !0, viewBox: !0, fill: !0, xmlns: !0 });
			var r = B(e);
			(n = rn(r, 'path', { 'fill-rule': !0, 'clip-rule': !0, d: !0, fill: !0 })),
				B(n).forEach(m),
				r.forEach(m),
				this.h();
		},
		h() {
			P(n, 'fill-rule', 'evenodd'),
				P(n, 'clip-rule', 'evenodd'),
				P(
					n,
					'd',
					'M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z'
				),
				P(n, 'fill', s[0]),
				on(e, l);
		},
		m(o, r) {
			b(o, e, r), N(e, n);
		},
		p(o, [r]) {
			r & 1 && P(n, 'fill', o[0]),
				on(
					e,
					(l = ge(t, [
						r & 2 && { width: o[1] },
						r & 2 && { height: o[1] },
						{ viewBox: '0 0 15 15' },
						{ fill: 'none' },
						{ xmlns: 'http://www.w3.org/2000/svg' },
						r & 4 && o[2]
					]))
				);
		},
		i: Se,
		o: Se,
		d(o) {
			o && m(e);
		}
	};
}
function kd(s, e, n) {
	const t = ['color', 'size'];
	let l = ee(e, t),
		{ color: o = 'currentColor' } = e,
		{ size: r = 15 } = e;
	return (
		(s.$$set = (a) => {
			(e = I(I({}, e), ke(a))),
				n(2, (l = ee(e, t))),
				'color' in a && n(0, (o = a.color)),
				'size' in a && n(1, (r = a.size));
		}),
		[o, r, l]
	);
}
class Cd extends he {
	constructor(e) {
		super(), pe(this, e, kd, vd, me, { color: 0, size: 1 });
	}
}
function Ed(s) {
	let e,
		n,
		t,
		l = 'Close',
		o;
	return (
		(e = new Cd({ props: { class: 'h-4 w-4' } })),
		{
			c() {
				E(e.$$.fragment), (n = L()), (t = y('span')), (t.textContent = l), this.h();
			},
			l(r) {
				S(e.$$.fragment, r),
					(n = R(r)),
					(t = D(r, 'SPAN', { class: !0, 'data-svelte-h': !0 })),
					lt(t) !== 'svelte-1pewzs3' && (t.textContent = l),
					this.h();
			},
			h() {
				P(t, 'class', 'sr-only');
			},
			m(r, a) {
				C(e, r, a), b(r, n, a), b(r, t, a), (o = !0);
			},
			p: Se,
			i(r) {
				o || (d(e.$$.fragment, r), (o = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (o = !1);
			},
			d(r) {
				r && (m(n), m(t)), k(e, r);
			}
		}
	);
}
function Sd(s) {
	let e, n, t;
	const l = s[4].default,
		o = ie(l, s, s[5], null);
	return (
		(n = new Vo({
			props: {
				class:
					'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
				$$slots: { default: [Ed] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				o && o.c(), (e = L()), E(n.$$.fragment);
			},
			l(r) {
				o && o.l(r), (e = R(r)), S(n.$$.fragment, r);
			},
			m(r, a) {
				o && o.m(r, a), b(r, e, a), C(n, r, a), (t = !0);
			},
			p(r, a) {
				o && o.p && (!t || a & 32) && ae(o, l, r, r[5], t ? ue(l, r[5], a, null) : fe(r[5]), null);
				const i = {};
				a & 32 && (i.$$scope = { dirty: a, ctx: r }), n.$set(i);
			},
			i(r) {
				t || (d(o, r), d(n.$$.fragment, r), (t = !0));
			},
			o(r) {
				g(o, r), g(n.$$.fragment, r), (t = !1);
			},
			d(r) {
				r && m(e), o && o.d(r), k(n, r);
			}
		}
	);
}
function wd(s) {
	let e, n, t, l;
	e = new md({});
	const o = [
		{ transition: s[1] },
		{ transitionConfig: s[2] },
		{
			class: be(
				'fixed z-50 grid w-full gap-4 border bg-background p-6 shadow-lg rounded-lg max-w-full max-h-full',
				s[0]
			)
		},
		s[3]
	];
	let r = { $$slots: { default: [Sd] }, $$scope: { ctx: s } };
	for (let a = 0; a < o.length; a += 1) r = I(r, o[a]);
	return (
		(t = new Lo({ props: r })),
		{
			c() {
				E(e.$$.fragment), (n = L()), E(t.$$.fragment);
			},
			l(a) {
				S(e.$$.fragment, a), (n = R(a)), S(t.$$.fragment, a);
			},
			m(a, i) {
				C(e, a, i), b(a, n, i), C(t, a, i), (l = !0);
			},
			p(a, i) {
				const f =
					i & 15
						? ge(o, [
								i & 2 && { transition: a[1] },
								i & 4 && { transitionConfig: a[2] },
								i & 1 && {
									class: be(
										'fixed z-50 grid w-full gap-4 border bg-background p-6 shadow-lg rounded-lg max-w-full max-h-full',
										a[0]
									)
								},
								i & 8 && Ge(a[3])
							])
						: {};
				i & 32 && (f.$$scope = { dirty: i, ctx: a }), t.$set(f);
			},
			i(a) {
				l || (d(e.$$.fragment, a), d(t.$$.fragment, a), (l = !0));
			},
			o(a) {
				g(e.$$.fragment, a), g(t.$$.fragment, a), (l = !1);
			},
			d(a) {
				a && m(n), k(e, a), k(t, a);
			}
		}
	);
}
function Td(s) {
	let e, n;
	return (
		(e = new ud({
			props: {
				class: 'flex items-center justify-center w-full h-full z-50',
				$$slots: { default: [wd] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, [l]) {
				const o = {};
				l & 47 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Ad(s, e, n) {
	const t = ['class', 'transition', 'transitionConfig'];
	let l = ee(e, t),
		{ $$slots: o = {}, $$scope: r } = e,
		{ class: a = void 0 } = e,
		{ transition: i = To } = e,
		{ transitionConfig: f = { duration: 200 } } = e;
	return (
		(s.$$set = (u) => {
			(e = I(I({}, e), ke(u))),
				n(3, (l = ee(e, t))),
				'class' in u && n(0, (a = u.class)),
				'transition' in u && n(1, (i = u.transition)),
				'transitionConfig' in u && n(2, (f = u.transitionConfig)),
				'$$scope' in u && n(5, (r = u.$$scope));
		}),
		[a, i, f, l, o, r]
	);
}
class Ho extends he {
	constructor(e) {
		super(), pe(this, e, Ad, Td, me, { class: 0, transition: 1, transitionConfig: 2 });
	}
}
const Uo = Mo,
	Od = jo;
function Nd(s) {
	let e, n;
	const t = [
		{
			class: be(
				'shrink-0 bg-border',
				s[1] === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
				s[0]
			)
		},
		{ orientation: s[1] },
		{ decorative: s[2] },
		s[3]
	];
	let l = {};
	for (let o = 0; o < t.length; o += 1) l = I(l, t[o]);
	return (
		(e = new zf({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), (n = !0);
			},
			p(o, [r]) {
				const a =
					r & 15
						? ge(t, [
								r & 3 && {
									class: be(
										'shrink-0 bg-border',
										o[1] === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
										o[0]
									)
								},
								r & 2 && { orientation: o[1] },
								r & 4 && { decorative: o[2] },
								r & 8 && Ge(o[3])
							])
						: {};
				e.$set(a);
			},
			i(o) {
				n || (d(e.$$.fragment, o), (n = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (n = !1);
			},
			d(o) {
				k(e, o);
			}
		}
	);
}
function Pd(s, e, n) {
	const t = ['class', 'orientation', 'decorative'];
	let l = ee(e, t),
		{ class: o = void 0 } = e,
		{ orientation: r = 'horizontal' } = e,
		{ decorative: a = void 0 } = e;
	return (
		(s.$$set = (i) => {
			(e = I(I({}, e), ke(i))),
				n(3, (l = ee(e, t))),
				'class' in i && n(0, (o = i.class)),
				'orientation' in i && n(1, (r = i.orientation)),
				'decorative' in i && n(2, (a = i.decorative));
		}),
		[o, r, a, l]
	);
}
class Id extends he {
	constructor(e) {
		super(), pe(this, e, Pd, Nd, me, { class: 0, orientation: 1, decorative: 2 });
	}
}
function Dd(s) {
	let e;
	const n = s[3].default,
		t = ie(n, s, s[4], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 16) && ae(t, n, l, l[4], e ? ue(n, l[4], o, null) : fe(l[4]), null);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function yd(s) {
	let e, n;
	const t = [
		{
			class: be(
				'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
				s[0]
			)
		},
		{ value: s[1] },
		s[2]
	];
	let l = { $$slots: { default: [Dd] }, $$scope: { ctx: s } };
	for (let o = 0; o < t.length; o += 1) l = I(l, t[o]);
	return (
		(e = new Iu({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), (n = !0);
			},
			p(o, [r]) {
				const a =
					r & 7
						? ge(t, [
								r & 1 && {
									class: be(
										'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
										o[0]
									)
								},
								r & 2 && { value: o[1] },
								r & 4 && Ge(o[2])
							])
						: {};
				r & 16 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
			},
			i(o) {
				n || (d(e.$$.fragment, o), (n = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (n = !1);
			},
			d(o) {
				k(e, o);
			}
		}
	);
}
function Md(s, e, n) {
	const t = ['class', 'value'];
	let l = ee(e, t),
		{ $$slots: o = {}, $$scope: r } = e,
		{ class: a = void 0 } = e,
		{ value: i } = e;
	return (
		(s.$$set = (f) => {
			(e = I(I({}, e), ke(f))),
				n(2, (l = ee(e, t))),
				'class' in f && n(0, (a = f.class)),
				'value' in f && n(1, (i = f.value)),
				'$$scope' in f && n(4, (r = f.$$scope));
		}),
		[a, i, l, o, r]
	);
}
class Vd extends he {
	constructor(e) {
		super(), pe(this, e, Md, yd, me, { class: 0, value: 1 });
	}
}
function Rd(s) {
	let e;
	const n = s[2].default,
		t = ie(n, s, s[3], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 8) && ae(t, n, l, l[3], e ? ue(n, l[3], o, null) : fe(l[3]), null);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Ld(s) {
	let e, n;
	const t = [
		{
			class: be(
				'inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
				s[0]
			)
		},
		s[1]
	];
	let l = { $$slots: { default: [Rd] }, $$scope: { ctx: s } };
	for (let o = 0; o < t.length; o += 1) l = I(l, t[o]);
	return (
		(e = new Fu({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), (n = !0);
			},
			p(o, [r]) {
				const a =
					r & 3
						? ge(t, [
								r & 1 && {
									class: be(
										'inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
										o[0]
									)
								},
								r & 2 && Ge(o[1])
							])
						: {};
				r & 8 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
			},
			i(o) {
				n || (d(e.$$.fragment, o), (n = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (n = !1);
			},
			d(o) {
				k(e, o);
			}
		}
	);
}
function Fd(s, e, n) {
	const t = ['class'];
	let l = ee(e, t),
		{ $$slots: o = {}, $$scope: r } = e,
		{ class: a = void 0 } = e;
	return (
		(s.$$set = (i) => {
			(e = I(I({}, e), ke(i))),
				n(1, (l = ee(e, t))),
				'class' in i && n(0, (a = i.class)),
				'$$scope' in i && n(3, (r = i.$$scope));
		}),
		[a, l, o, r]
	);
}
class jd extends he {
	constructor(e) {
		super(), pe(this, e, Fd, Ld, me, { class: 0 });
	}
}
function zd(s) {
	let e;
	const n = s[3].default,
		t = ie(n, s, s[7], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 128) && ae(t, n, l, l[7], e ? ue(n, l[7], o, null) : fe(l[7]), null);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Bd(s) {
	let e, n;
	const t = [
		{
			class: be(
				'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground',
				s[0]
			)
		},
		{ value: s[1] },
		s[2]
	];
	let l = { $$slots: { default: [zd] }, $$scope: { ctx: s } };
	for (let o = 0; o < t.length; o += 1) l = I(l, t[o]);
	return (
		(e = new Uu({ props: l })),
		e.$on('click', s[4]),
		e.$on('keydown', s[5]),
		e.$on('focus', s[6]),
		{
			c() {
				E(e.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), (n = !0);
			},
			p(o, [r]) {
				const a =
					r & 7
						? ge(t, [
								r & 1 && {
									class: be(
										'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground',
										o[0]
									)
								},
								r & 2 && { value: o[1] },
								r & 4 && Ge(o[2])
							])
						: {};
				r & 128 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
			},
			i(o) {
				n || (d(e.$$.fragment, o), (n = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (n = !1);
			},
			d(o) {
				k(e, o);
			}
		}
	);
}
function Kd(s, e, n) {
	const t = ['class', 'value'];
	let l = ee(e, t),
		{ $$slots: o = {}, $$scope: r } = e,
		{ class: a = void 0 } = e,
		{ value: i } = e;
	function f(h) {
		ve.call(this, s, h);
	}
	function u(h) {
		ve.call(this, s, h);
	}
	function c(h) {
		ve.call(this, s, h);
	}
	return (
		(s.$$set = (h) => {
			(e = I(I({}, e), ke(h))),
				n(2, (l = ee(e, t))),
				'class' in h && n(0, (a = h.class)),
				'value' in h && n(1, (i = h.value)),
				'$$scope' in h && n(7, (r = h.$$scope));
		}),
		[a, i, l, o, f, u, c, r]
	);
}
class qd extends he {
	constructor(e) {
		super(), pe(this, e, Kd, Bd, me, { class: 0, value: 1 });
	}
}
const Hd = Su;
function Ud(s) {
	let e, n;
	return (
		(e = new bd({ props: { class: 'h-4 w-4' } })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p: Se,
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Wd(s) {
	let e = (s[2] ? s[2] : s[1]) + '',
		n;
	return {
		c() {
			n = X(e);
		},
		l(t) {
			n = J(t, e);
		},
		m(t, l) {
			b(t, n, l);
		},
		p(t, l) {
			l & 6 && e !== (e = (t[2] ? t[2] : t[1]) + '') && at(n, e);
		},
		d(t) {
			t && m(n);
		}
	};
}
function Gd(s) {
	let e, n, t, l;
	n = new Df({ props: { $$slots: { default: [Ud] }, $$scope: { ctx: s } } });
	const o = s[5].default,
		r = ie(o, s, s[9], null),
		a = r || Wd(s);
	return {
		c() {
			(e = y('span')), E(n.$$.fragment), (t = L()), a && a.c(), this.h();
		},
		l(i) {
			e = D(i, 'SPAN', { class: !0 });
			var f = B(e);
			S(n.$$.fragment, f), f.forEach(m), (t = R(i)), a && a.l(i), this.h();
		},
		h() {
			P(e, 'class', 'absolute right-2 flex h-3.5 w-3.5 items-center justify-center');
		},
		m(i, f) {
			b(i, e, f), C(n, e, null), b(i, t, f), a && a.m(i, f), (l = !0);
		},
		p(i, f) {
			const u = {};
			f & 512 && (u.$$scope = { dirty: f, ctx: i }),
				n.$set(u),
				r
					? r.p && (!l || f & 512) && ae(r, o, i, i[9], l ? ue(o, i[9], f, null) : fe(i[9]), null)
					: a && a.p && (!l || f & 6) && a.p(i, l ? f : -1);
		},
		i(i) {
			l || (d(n.$$.fragment, i), d(a, i), (l = !0));
		},
		o(i) {
			g(n.$$.fragment, i), g(a, i), (l = !1);
		},
		d(i) {
			i && (m(e), m(t)), k(n), a && a.d(i);
		}
	};
}
function Jd(s) {
	let e, n;
	const t = [
		{ value: s[1] },
		{ disabled: s[3] },
		{ label: s[2] },
		{
			class: be(
				'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1 pl-2 pr-8 text-xs outline-none data-[disabled]:pointer-events-none text-secondary-foreground/85 data-[highlighted]:bg-accent data-[highlighted]:text-foreground data-[disabled]:opacity-50',
				s[0]
			)
		},
		s[4]
	];
	let l = { $$slots: { default: [Gd] }, $$scope: { ctx: s } };
	for (let o = 0; o < t.length; o += 1) l = I(l, t[o]);
	return (
		(e = new wf({ props: l })),
		e.$on('click', s[6]),
		e.$on('pointermove', s[7]),
		e.$on('focusin', s[8]),
		{
			c() {
				E(e.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), (n = !0);
			},
			p(o, [r]) {
				const a =
					r & 31
						? ge(t, [
								r & 2 && { value: o[1] },
								r & 8 && { disabled: o[3] },
								r & 4 && { label: o[2] },
								r & 1 && {
									class: be(
										'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1 pl-2 pr-8 text-xs outline-none data-[disabled]:pointer-events-none text-secondary-foreground/85 data-[highlighted]:bg-accent data-[highlighted]:text-foreground data-[disabled]:opacity-50',
										o[0]
									)
								},
								r & 16 && Ge(o[4])
							])
						: {};
				r & 518 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
			},
			i(o) {
				n || (d(e.$$.fragment, o), (n = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (n = !1);
			},
			d(o) {
				k(e, o);
			}
		}
	);
}
function Xd(s, e, n) {
	const t = ['class', 'value', 'label', 'disabled'];
	let l = ee(e, t),
		{ $$slots: o = {}, $$scope: r } = e,
		{ class: a = void 0 } = e,
		{ value: i } = e,
		{ label: f = void 0 } = e,
		{ disabled: u = void 0 } = e;
	function c(p) {
		ve.call(this, s, p);
	}
	function h(p) {
		ve.call(this, s, p);
	}
	function _(p) {
		ve.call(this, s, p);
	}
	return (
		(s.$$set = (p) => {
			(e = I(I({}, e), ke(p))),
				n(4, (l = ee(e, t))),
				'class' in p && n(0, (a = p.class)),
				'value' in p && n(1, (i = p.value)),
				'label' in p && n(2, (f = p.label)),
				'disabled' in p && n(3, (u = p.disabled)),
				'$$scope' in p && n(9, (r = p.$$scope));
		}),
		[a, i, f, u, l, o, c, h, _, r]
	);
}
class Fe extends he {
	constructor(e) {
		super(), pe(this, e, Xd, Jd, me, { class: 0, value: 1, label: 2, disabled: 3 });
	}
}
function Yd(s) {
	let e, n;
	const t = s[7].default,
		l = ie(t, s, s[8], null);
	return {
		c() {
			(e = y('div')), l && l.c(), this.h();
		},
		l(o) {
			e = D(o, 'DIV', { class: !0 });
			var r = B(e);
			l && l.l(r), r.forEach(m), this.h();
		},
		h() {
			P(e, 'class', 'w-full p-1');
		},
		m(o, r) {
			b(o, e, r), l && l.m(e, null), (n = !0);
		},
		p(o, r) {
			l && l.p && (!n || r & 256) && ae(l, t, o, o[8], n ? ue(t, o[8], r, null) : fe(o[8]), null);
		},
		i(o) {
			n || (d(l, o), (n = !0));
		},
		o(o) {
			g(l, o), (n = !1);
		},
		d(o) {
			o && m(e), l && l.d(o);
		}
	};
}
function Zd(s) {
	let e, n;
	const t = [
		{ inTransition: s[2] },
		{ inTransitionConfig: s[3] },
		{ outTransition: s[4] },
		{ outTransitionConfig: s[5] },
		{ sideOffset: s[1] },
		{
			class: be(
				'relative z-50 min-w-[8rem] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md focus:outline-none',
				s[0]
			)
		},
		s[6]
	];
	let l = { $$slots: { default: [Yd] }, $$scope: { ctx: s } };
	for (let o = 0; o < t.length; o += 1) l = I(l, t[o]);
	return (
		(e = new pf({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), (n = !0);
			},
			p(o, [r]) {
				const a =
					r & 127
						? ge(t, [
								r & 4 && { inTransition: o[2] },
								r & 8 && { inTransitionConfig: o[3] },
								r & 16 && { outTransition: o[4] },
								r & 32 && { outTransitionConfig: o[5] },
								r & 2 && { sideOffset: o[1] },
								r & 1 && {
									class: be(
										'relative z-50 min-w-[8rem] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md focus:outline-none',
										o[0]
									)
								},
								r & 64 && Ge(o[6])
							])
						: {};
				r & 256 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
			},
			i(o) {
				n || (d(e.$$.fragment, o), (n = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (n = !1);
			},
			d(o) {
				k(e, o);
			}
		}
	);
}
function Qd(s, e, n) {
	const t = [
		'class',
		'sideOffset',
		'inTransition',
		'inTransitionConfig',
		'outTransition',
		'outTransitionConfig'
	];
	let l = ee(e, t),
		{ $$slots: o = {}, $$scope: r } = e,
		{ class: a = void 0 } = e,
		{ sideOffset: i = 4 } = e,
		{ inTransition: f = To } = e,
		{ inTransitionConfig: u = void 0 } = e,
		{ outTransition: c = Jr } = e,
		{ outTransitionConfig: h = { start: 0.95, opacity: 0, duration: 50 } } = e;
	return (
		(s.$$set = (_) => {
			(e = I(I({}, e), ke(_))),
				n(6, (l = ee(e, t))),
				'class' in _ && n(0, (a = _.class)),
				'sideOffset' in _ && n(1, (i = _.sideOffset)),
				'inTransition' in _ && n(2, (f = _.inTransition)),
				'inTransitionConfig' in _ && n(3, (u = _.inTransitionConfig)),
				'outTransition' in _ && n(4, (c = _.outTransition)),
				'outTransitionConfig' in _ && n(5, (h = _.outTransitionConfig)),
				'$$scope' in _ && n(8, (r = _.$$scope));
		}),
		[a, i, f, u, c, h, l, o, r]
	);
}
class Qt extends he {
	constructor(e) {
		super(),
			pe(this, e, Qd, Zd, me, {
				class: 0,
				sideOffset: 1,
				inTransition: 2,
				inTransitionConfig: 3,
				outTransition: 4,
				outTransitionConfig: 5
			});
	}
}
function xd(s) {
	let e, n, t, l;
	const o = s[2].default,
		r = ie(o, s, s[3], null);
	return (
		(t = new hd({ props: { class: 'h-4 w-4 opacity-50' } })),
		{
			c() {
				r && r.c(), (e = L()), (n = y('div')), E(t.$$.fragment);
			},
			l(a) {
				r && r.l(a), (e = R(a)), (n = D(a, 'DIV', {}));
				var i = B(n);
				S(t.$$.fragment, i), i.forEach(m);
			},
			m(a, i) {
				r && r.m(a, i), b(a, e, i), b(a, n, i), C(t, n, null), (l = !0);
			},
			p(a, i) {
				r && r.p && (!l || i & 8) && ae(r, o, a, a[3], l ? ue(o, a[3], i, null) : fe(a[3]), null);
			},
			i(a) {
				l || (d(r, a), d(t.$$.fragment, a), (l = !0));
			},
			o(a) {
				g(r, a), g(t.$$.fragment, a), (l = !1);
			},
			d(a) {
				a && (m(e), m(n)), r && r.d(a), k(t);
			}
		}
	);
}
function em(s) {
	let e, n;
	const t = [
		{
			class: be(
				'flex h-7 w-fit gap-2.5 items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 text-xs shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
				s[0]
			)
		},
		s[1]
	];
	let l = { $$slots: { default: [xd] }, $$scope: { ctx: s } };
	for (let o = 0; o < t.length; o += 1) l = I(l, t[o]);
	return (
		(e = new Gf({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), (n = !0);
			},
			p(o, [r]) {
				const a =
					r & 3
						? ge(t, [
								r & 1 && {
									class: be(
										'flex h-7 w-fit gap-2.5 items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 text-xs shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
										o[0]
									)
								},
								r & 2 && Ge(o[1])
							])
						: {};
				r & 8 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
			},
			i(o) {
				n || (d(e.$$.fragment, o), (n = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (n = !1);
			},
			d(o) {
				k(e, o);
			}
		}
	);
}
function tm(s, e, n) {
	const t = ['class'];
	let l = ee(e, t),
		{ $$slots: o = {}, $$scope: r } = e,
		{ class: a = void 0 } = e;
	return (
		(s.$$set = (i) => {
			(e = I(I({}, e), ke(i))),
				n(1, (l = ee(e, t))),
				'class' in i && n(0, (a = i.class)),
				'$$scope' in i && n(3, (r = i.$$scope));
		}),
		[a, l, o, r]
	);
}
class xt extends he {
	constructor(e) {
		super(), pe(this, e, tm, em, me, { class: 0 });
	}
}
const Xt = tf,
	en = xf;
function nm(s) {
	let e;
	return {
		c() {
			e = X('Color scheme');
		},
		l(n) {
			e = J(n, 'Color scheme');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function lm(s) {
	let e, n;
	return (
		(e = new Ke({ props: { name: 'monitor', class: 'w-4 h-4' } })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p: Se,
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function sm(s) {
	let e, n;
	return (
		(e = new Qe({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: be(
					'h-7 w-7 fill-muted-foreground hover:fill-foreground',
					s[2] === 'system' && 'bg-accent fill-foreground'
				),
				scale: 'md',
				$$slots: { default: [lm] },
				$$scope: { ctx: s }
			}
		})),
		e.$on('click', s[3]),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 4 &&
					(o.class = be(
						'h-7 w-7 fill-muted-foreground hover:fill-foreground',
						t[2] === 'system' && 'bg-accent fill-foreground'
					)),
					l & 256 && (o.$$scope = { dirty: l, ctx: t }),
					e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function om(s) {
	let e, n;
	return (
		(e = new Ke({ props: { name: 'sun', class: 'w-4 h-4' } })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p: Se,
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function rm(s) {
	let e, n;
	return (
		(e = new Qe({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: be(
					'h-7 w-7 fill-muted-foreground hover:fill-foreground',
					s[2] === 'light' && 'bg-accent fill-foreground'
				),
				scale: 'md',
				$$slots: { default: [om] },
				$$scope: { ctx: s }
			}
		})),
		e.$on('click', s[4]),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 4 &&
					(o.class = be(
						'h-7 w-7 fill-muted-foreground hover:fill-foreground',
						t[2] === 'light' && 'bg-accent fill-foreground'
					)),
					l & 256 && (o.$$scope = { dirty: l, ctx: t }),
					e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function im(s) {
	let e, n;
	return (
		(e = new Ke({ props: { name: 'moon', class: 'w-4 h-4' } })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p: Se,
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function am(s) {
	let e, n;
	return (
		(e = new Qe({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: be(
					'h-7 w-7 fill-muted-foreground hover:fill-foreground',
					s[2] === 'dark' && 'bg-accent fill-foreground'
				),
				scale: 'md',
				$$slots: { default: [im] },
				$$scope: { ctx: s }
			}
		})),
		e.$on('click', s[5]),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 4 &&
					(o.class = be(
						'h-7 w-7 fill-muted-foreground hover:fill-foreground',
						t[2] === 'dark' && 'bg-accent fill-foreground'
					)),
					l & 256 && (o.$$scope = { dirty: l, ctx: t }),
					e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function fm(s) {
	let e;
	return {
		c() {
			e = X('Theme');
		},
		l(n) {
			e = J(n, 'Theme');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function um(s) {
	let e = s[0].label + '',
		n;
	return {
		c() {
			n = X(e);
		},
		l(t) {
			n = J(t, e);
		},
		m(t, l) {
			b(t, n, l);
		},
		p(t, l) {
			l & 1 && e !== (e = t[0].label + '') && at(n, e);
		},
		d(t) {
			t && m(n);
		}
	};
}
function cm(s) {
	let e, n;
	return (
		(e = new en({
			props: {
				class: 'text-sm text-foreground/85',
				$$slots: { default: [um] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 257 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function dm(s) {
	let e;
	return {
		c() {
			e = X('Typyst');
		},
		l(n) {
			e = J(n, 'Typyst');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function mm(s) {
	let e, n;
	return (
		(e = new Fe({ props: { value: 'typyst', $$slots: { default: [dm] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 256 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function _m(s) {
	let e, n, t, l;
	return (
		(e = new xt({ props: { $$slots: { default: [cm] }, $$scope: { ctx: s } } })),
		(t = new Qt({ props: { $$slots: { default: [mm] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment), (n = L()), E(t.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o), (n = R(o)), S(t.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), b(o, n, r), C(t, o, r), (l = !0);
			},
			p(o, r) {
				const a = {};
				r & 257 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
				const i = {};
				r & 256 && (i.$$scope = { dirty: r, ctx: o }), t.$set(i);
			},
			i(o) {
				l || (d(e.$$.fragment, o), d(t.$$.fragment, o), (l = !0));
			},
			o(o) {
				g(e.$$.fragment, o), g(t.$$.fragment, o), (l = !1);
			},
			d(o) {
				o && m(n), k(e, o), k(t, o);
			}
		}
	);
}
function gm(s) {
	let e;
	return {
		c() {
			e = X('Browse');
		},
		l(n) {
			e = J(n, 'Browse');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function hm(s) {
	let e;
	return {
		c() {
			e = X('Fonts');
		},
		l(n) {
			e = J(n, 'Fonts');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function pm(s) {
	let e = s[1].label + '',
		n;
	return {
		c() {
			n = X(e);
		},
		l(t) {
			n = J(t, e);
		},
		m(t, l) {
			b(t, n, l);
		},
		p(t, l) {
			l & 2 && e !== (e = t[1].label + '') && at(n, e);
		},
		d(t) {
			t && m(n);
		}
	};
}
function $m(s) {
	let e, n;
	return (
		(e = new en({
			props: {
				class: 'text-sm text-foreground/85',
				$$slots: { default: [pm] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 258 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function bm(s) {
	let e;
	return {
		c() {
			e = X('Inter');
		},
		l(n) {
			e = J(n, 'Inter');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function vm(s) {
	let e;
	return {
		c() {
			e = X('Roboto');
		},
		l(n) {
			e = J(n, 'Roboto');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function km(s) {
	let e;
	return {
		c() {
			e = X('Lato');
		},
		l(n) {
			e = J(n, 'Lato');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function Cm(s) {
	let e;
	return {
		c() {
			e = X('Poppins');
		},
		l(n) {
			e = J(n, 'Poppins');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function Em(s) {
	let e;
	return {
		c() {
			e = X('Nunito');
		},
		l(n) {
			e = J(n, 'Nunito');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function Sm(s) {
	let e;
	return {
		c() {
			e = X('Open Sans');
		},
		l(n) {
			e = J(n, 'Open Sans');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function wm(s) {
	let e, n, t, l, o, r, a, i, f, u, c, h;
	return (
		(e = new Fe({ props: { value: 'inter', $$slots: { default: [bm] }, $$scope: { ctx: s } } })),
		(t = new Fe({ props: { value: 'roboto', $$slots: { default: [vm] }, $$scope: { ctx: s } } })),
		(o = new Fe({ props: { value: 'lato', $$slots: { default: [km] }, $$scope: { ctx: s } } })),
		(a = new Fe({ props: { value: 'poppins', $$slots: { default: [Cm] }, $$scope: { ctx: s } } })),
		(f = new Fe({ props: { value: 'nunito', $$slots: { default: [Em] }, $$scope: { ctx: s } } })),
		(c = new Fe({ props: { value: 'openSans', $$slots: { default: [Sm] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment),
					(n = L()),
					E(t.$$.fragment),
					(l = L()),
					E(o.$$.fragment),
					(r = L()),
					E(a.$$.fragment),
					(i = L()),
					E(f.$$.fragment),
					(u = L()),
					E(c.$$.fragment);
			},
			l(_) {
				S(e.$$.fragment, _),
					(n = R(_)),
					S(t.$$.fragment, _),
					(l = R(_)),
					S(o.$$.fragment, _),
					(r = R(_)),
					S(a.$$.fragment, _),
					(i = R(_)),
					S(f.$$.fragment, _),
					(u = R(_)),
					S(c.$$.fragment, _);
			},
			m(_, p) {
				C(e, _, p),
					b(_, n, p),
					C(t, _, p),
					b(_, l, p),
					C(o, _, p),
					b(_, r, p),
					C(a, _, p),
					b(_, i, p),
					C(f, _, p),
					b(_, u, p),
					C(c, _, p),
					(h = !0);
			},
			p(_, p) {
				const $ = {};
				p & 256 && ($.$$scope = { dirty: p, ctx: _ }), e.$set($);
				const v = {};
				p & 256 && (v.$$scope = { dirty: p, ctx: _ }), t.$set(v);
				const w = {};
				p & 256 && (w.$$scope = { dirty: p, ctx: _ }), o.$set(w);
				const T = {};
				p & 256 && (T.$$scope = { dirty: p, ctx: _ }), a.$set(T);
				const j = {};
				p & 256 && (j.$$scope = { dirty: p, ctx: _ }), f.$set(j);
				const Y = {};
				p & 256 && (Y.$$scope = { dirty: p, ctx: _ }), c.$set(Y);
			},
			i(_) {
				h ||
					(d(e.$$.fragment, _),
					d(t.$$.fragment, _),
					d(o.$$.fragment, _),
					d(a.$$.fragment, _),
					d(f.$$.fragment, _),
					d(c.$$.fragment, _),
					(h = !0));
			},
			o(_) {
				g(e.$$.fragment, _),
					g(t.$$.fragment, _),
					g(o.$$.fragment, _),
					g(a.$$.fragment, _),
					g(f.$$.fragment, _),
					g(c.$$.fragment, _),
					(h = !1);
			},
			d(_) {
				_ && (m(n), m(l), m(r), m(i), m(u)), k(e, _), k(t, _), k(o, _), k(a, _), k(f, _), k(c, _);
			}
		}
	);
}
function Tm(s) {
	let e, n, t, l;
	return (
		(e = new xt({ props: { $$slots: { default: [$m] }, $$scope: { ctx: s } } })),
		(t = new Qt({ props: { $$slots: { default: [wm] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment), (n = L()), E(t.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o), (n = R(o)), S(t.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), b(o, n, r), C(t, o, r), (l = !0);
			},
			p(o, r) {
				const a = {};
				r & 258 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
				const i = {};
				r & 256 && (i.$$scope = { dirty: r, ctx: o }), t.$set(i);
			},
			i(o) {
				l || (d(e.$$.fragment, o), d(t.$$.fragment, o), (l = !0));
			},
			o(o) {
				g(e.$$.fragment, o), g(t.$$.fragment, o), (l = !1);
			},
			d(o) {
				o && m(n), k(e, o), k(t, o);
			}
		}
	);
}
function Am(s) {
	let e,
		n,
		t,
		l,
		o,
		r = 'Change the color scheme of the app.',
		a,
		i,
		f,
		u,
		c,
		h,
		_,
		p,
		$,
		v,
		w,
		T,
		j = 'Change the theme of the app.',
		Y,
		V,
		F,
		U,
		ne,
		oe,
		O,
		G,
		q,
		K,
		z,
		x = 'Change the interface font.',
		M,
		H,
		W,
		Te,
		Pe;
	(t = new tt({ props: { class: 'text-sm', $$slots: { default: [nm] }, $$scope: { ctx: s } } })),
		(f = new ft({
			props: { text: 'System', side: 'bottom', $$slots: { default: [sm] }, $$scope: { ctx: s } }
		})),
		(c = new ft({
			props: { text: 'Light', side: 'bottom', $$slots: { default: [rm] }, $$scope: { ctx: s } }
		})),
		(_ = new ft({
			props: { text: 'Dark', side: 'bottom', $$slots: { default: [am] }, $$scope: { ctx: s } }
		})),
		(v = new tt({ props: { class: 'text-sm', $$slots: { default: [fm] }, $$scope: { ctx: s } } }));
	function De(se) {
		s[6](se);
	}
	let Ie = { $$slots: { default: [_m] }, $$scope: { ctx: s } };
	s[0] !== void 0 && (Ie.selected = s[0]),
		(F = new Xt({ props: Ie })),
		Ne.push(() => rt(F, 'selected', De)),
		(oe = new Qe({
			props: {
				variant: 'default',
				size: 'sm',
				class: 'h-7 text-primary-foreground/85 hover:text-primary-foreground text-sm font-normal',
				scale: 'sm',
				disabled: !0,
				$$slots: { default: [gm] },
				$$scope: { ctx: s }
			}
		})),
		(q = new tt({ props: { class: 'text-sm', $$slots: { default: [hm] }, $$scope: { ctx: s } } }));
	function we(se) {
		s[7](se);
	}
	let le = { disabled: !0, $$slots: { default: [Tm] }, $$scope: { ctx: s } };
	return (
		s[1] !== void 0 && (le.selected = s[1]),
		(W = new Xt({ props: le })),
		Ne.push(() => rt(W, 'selected', we)),
		{
			c() {
				(e = y('div')),
					(n = y('div')),
					E(t.$$.fragment),
					(l = L()),
					(o = y('p')),
					(o.textContent = r),
					(a = L()),
					(i = y('div')),
					E(f.$$.fragment),
					(u = L()),
					E(c.$$.fragment),
					(h = L()),
					E(_.$$.fragment),
					(p = L()),
					($ = y('div')),
					E(v.$$.fragment),
					(w = L()),
					(T = y('p')),
					(T.textContent = j),
					(Y = L()),
					(V = y('div')),
					E(F.$$.fragment),
					(ne = L()),
					E(oe.$$.fragment),
					(O = L()),
					(G = y('div')),
					E(q.$$.fragment),
					(K = L()),
					(z = y('p')),
					(z.textContent = x),
					(M = L()),
					(H = y('div')),
					E(W.$$.fragment),
					this.h();
			},
			l(se) {
				e = D(se, 'DIV', { class: !0 });
				var $e = B(e);
				n = D($e, 'DIV', { class: !0 });
				var Ue = B(n);
				S(t.$$.fragment, Ue),
					(l = R(Ue)),
					(o = D(Ue, 'P', { class: !0, 'data-svelte-h': !0 })),
					lt(o) !== 'svelte-s0ry01' && (o.textContent = r),
					(a = R(Ue)),
					(i = D(Ue, 'DIV', { class: !0 }));
				var He = B(i);
				S(f.$$.fragment, He),
					(u = R(He)),
					S(c.$$.fragment, He),
					(h = R(He)),
					S(_.$$.fragment, He),
					He.forEach(m),
					Ue.forEach(m),
					(p = R($e)),
					($ = D($e, 'DIV', { class: !0 }));
				var ze = B($);
				S(v.$$.fragment, ze),
					(w = R(ze)),
					(T = D(ze, 'P', { class: !0, 'data-svelte-h': !0 })),
					lt(T) !== 'svelte-utwwgq' && (T.textContent = j),
					(Y = R(ze)),
					(V = D(ze, 'DIV', { class: !0 }));
				var A = B(V);
				S(F.$$.fragment, A),
					(ne = R(A)),
					S(oe.$$.fragment, A),
					A.forEach(m),
					ze.forEach(m),
					(O = R($e)),
					(G = D($e, 'DIV', { class: !0 }));
				var Q = B(G);
				S(q.$$.fragment, Q),
					(K = R(Q)),
					(z = D(Q, 'P', { class: !0, 'data-svelte-h': !0 })),
					lt(z) !== 'svelte-1vsjk6s' && (z.textContent = x),
					(M = R(Q)),
					(H = D(Q, 'DIV', { class: !0 }));
				var Oe = B(H);
				S(W.$$.fragment, Oe), Oe.forEach(m), Q.forEach(m), $e.forEach(m), this.h();
			},
			h() {
				P(o, 'class', 'text-muted-foreground text-xs'),
					P(i, 'class', 'flex items-center gap-2 pt-2'),
					P(n, 'class', 'space-y-1'),
					P(T, 'class', 'text-muted-foreground text-xs'),
					P(V, 'class', 'flex items-center gap-2 pt-2'),
					P($, 'class', 'space-y-1'),
					P(z, 'class', 'text-muted-foreground text-xs'),
					P(H, 'class', 'flex items-center gap-2 pt-2'),
					P(G, 'class', 'space-y-1'),
					P(e, 'class', 'space-y-5');
			},
			m(se, $e) {
				b(se, e, $e),
					N(e, n),
					C(t, n, null),
					N(n, l),
					N(n, o),
					N(n, a),
					N(n, i),
					C(f, i, null),
					N(i, u),
					C(c, i, null),
					N(i, h),
					C(_, i, null),
					N(e, p),
					N(e, $),
					C(v, $, null),
					N($, w),
					N($, T),
					N($, Y),
					N($, V),
					C(F, V, null),
					N(V, ne),
					C(oe, V, null),
					N(e, O),
					N(e, G),
					C(q, G, null),
					N(G, K),
					N(G, z),
					N(G, M),
					N(G, H),
					C(W, H, null),
					(Pe = !0);
			},
			p(se, [$e]) {
				const Ue = {};
				$e & 256 && (Ue.$$scope = { dirty: $e, ctx: se }), t.$set(Ue);
				const He = {};
				$e & 260 && (He.$$scope = { dirty: $e, ctx: se }), f.$set(He);
				const ze = {};
				$e & 260 && (ze.$$scope = { dirty: $e, ctx: se }), c.$set(ze);
				const A = {};
				$e & 260 && (A.$$scope = { dirty: $e, ctx: se }), _.$set(A);
				const Q = {};
				$e & 256 && (Q.$$scope = { dirty: $e, ctx: se }), v.$set(Q);
				const Oe = {};
				$e & 257 && (Oe.$$scope = { dirty: $e, ctx: se }),
					!U && $e & 1 && ((U = !0), (Oe.selected = se[0]), ot(() => (U = !1))),
					F.$set(Oe);
				const Re = {};
				$e & 256 && (Re.$$scope = { dirty: $e, ctx: se }), oe.$set(Re);
				const Le = {};
				$e & 256 && (Le.$$scope = { dirty: $e, ctx: se }), q.$set(Le);
				const Me = {};
				$e & 258 && (Me.$$scope = { dirty: $e, ctx: se }),
					!Te && $e & 2 && ((Te = !0), (Me.selected = se[1]), ot(() => (Te = !1))),
					W.$set(Me);
			},
			i(se) {
				Pe ||
					(d(t.$$.fragment, se),
					d(f.$$.fragment, se),
					d(c.$$.fragment, se),
					d(_.$$.fragment, se),
					d(v.$$.fragment, se),
					d(F.$$.fragment, se),
					d(oe.$$.fragment, se),
					d(q.$$.fragment, se),
					d(W.$$.fragment, se),
					(Pe = !0));
			},
			o(se) {
				g(t.$$.fragment, se),
					g(f.$$.fragment, se),
					g(c.$$.fragment, se),
					g(_.$$.fragment, se),
					g(v.$$.fragment, se),
					g(F.$$.fragment, se),
					g(oe.$$.fragment, se),
					g(q.$$.fragment, se),
					g(W.$$.fragment, se),
					(Pe = !1);
			},
			d(se) {
				se && m(e), k(t), k(f), k(c), k(_), k(v), k(F), k(oe), k(q), k(W);
			}
		}
	);
}
function Om(s, e, n) {
	let t;
	Ae(s, tl, (c) => n(2, (t = c)));
	let l = { value: 'typyst', label: 'Typyst' },
		o = { value: 'inter', label: 'Inter' };
	const r = () => Gt('system'),
		a = () => Gt('light'),
		i = () => Gt('dark');
	function f(c) {
		(l = c), n(0, l);
	}
	function u(c) {
		(o = c), n(1, o);
	}
	return [l, o, t, r, a, i, f, u];
}
class Nm extends he {
	constructor(e) {
		super(), pe(this, e, Om, Am, me, {});
	}
}
function Pm(s) {
	let e, n;
	return (
		(e = new hu({
			props: {
				class: be(
					'pointer-events-none block h-[14px] w-[14px] rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-2.5 data-[state=unchecked]:translate-x-0'
				)
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p: Se,
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Im(s) {
	let e, n, t;
	const l = [
		{
			class: be(
				'peer inline-flex h-[18px] w-[28px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
				s[1]
			)
		},
		s[2]
	];
	function o(a) {
		s[3](a);
	}
	let r = { $$slots: { default: [Pm] }, $$scope: { ctx: s } };
	for (let a = 0; a < l.length; a += 1) r = I(r, l[a]);
	return (
		s[0] !== void 0 && (r.checked = s[0]),
		(e = new uu({ props: r })),
		Ne.push(() => rt(e, 'checked', o)),
		{
			c() {
				E(e.$$.fragment);
			},
			l(a) {
				S(e.$$.fragment, a);
			},
			m(a, i) {
				C(e, a, i), (t = !0);
			},
			p(a, [i]) {
				const f =
					i & 6
						? ge(l, [
								i & 2 && {
									class: be(
										'peer inline-flex h-[18px] w-[28px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
										a[1]
									)
								},
								i & 4 && Ge(a[2])
							])
						: {};
				i & 16 && (f.$$scope = { dirty: i, ctx: a }),
					!n && i & 1 && ((n = !0), (f.checked = a[0]), ot(() => (n = !1))),
					e.$set(f);
			},
			i(a) {
				t || (d(e.$$.fragment, a), (t = !0));
			},
			o(a) {
				g(e.$$.fragment, a), (t = !1);
			},
			d(a) {
				k(e, a);
			}
		}
	);
}
function Dm(s, e, n) {
	const t = ['class', 'checked'];
	let l = ee(e, t),
		{ class: o = void 0 } = e,
		{ checked: r = void 0 } = e;
	function a(i) {
		(r = i), n(0, r);
	}
	return (
		(s.$$set = (i) => {
			(e = I(I({}, e), ke(i))),
				n(2, (l = ee(e, t))),
				'class' in i && n(1, (o = i.class)),
				'checked' in i && n(0, (r = i.checked));
		}),
		[r, o, l, a]
	);
}
class Bt extends he {
	constructor(e) {
		super(), pe(this, e, Dm, Im, me, { class: 1, checked: 0 });
	}
}
function ym(s) {
	let e;
	return {
		c() {
			e = X('Font');
		},
		l(n) {
			e = J(n, 'Font');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function Mm(s) {
	let e = s[0].label + '',
		n;
	return {
		c() {
			n = X(e);
		},
		l(t) {
			n = J(t, e);
		},
		m(t, l) {
			b(t, n, l);
		},
		p(t, l) {
			l & 1 && e !== (e = t[0].label + '') && at(n, e);
		},
		d(t) {
			t && m(n);
		}
	};
}
function Vm(s) {
	let e, n;
	return (
		(e = new en({
			props: {
				class: 'text-sm text-foreground/85',
				$$slots: { default: [Mm] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 2049 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Rm(s) {
	let e;
	return {
		c() {
			e = X('Inter');
		},
		l(n) {
			e = J(n, 'Inter');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function Lm(s) {
	let e;
	return {
		c() {
			e = X('Roboto');
		},
		l(n) {
			e = J(n, 'Roboto');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function Fm(s) {
	let e;
	return {
		c() {
			e = X('Lato');
		},
		l(n) {
			e = J(n, 'Lato');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function jm(s) {
	let e;
	return {
		c() {
			e = X('Poppins');
		},
		l(n) {
			e = J(n, 'Poppins');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function zm(s) {
	let e;
	return {
		c() {
			e = X('Nunito');
		},
		l(n) {
			e = J(n, 'Nunito');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function Bm(s) {
	let e;
	return {
		c() {
			e = X('Open Sans');
		},
		l(n) {
			e = J(n, 'Open Sans');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function Km(s) {
	let e, n, t, l, o, r, a, i, f, u, c, h;
	return (
		(e = new Fe({ props: { value: 'inter', $$slots: { default: [Rm] }, $$scope: { ctx: s } } })),
		(t = new Fe({ props: { value: 'roboto', $$slots: { default: [Lm] }, $$scope: { ctx: s } } })),
		(o = new Fe({ props: { value: 'lato', $$slots: { default: [Fm] }, $$scope: { ctx: s } } })),
		(a = new Fe({ props: { value: 'poppins', $$slots: { default: [jm] }, $$scope: { ctx: s } } })),
		(f = new Fe({ props: { value: 'nunito', $$slots: { default: [zm] }, $$scope: { ctx: s } } })),
		(c = new Fe({ props: { value: 'openSans', $$slots: { default: [Bm] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment),
					(n = L()),
					E(t.$$.fragment),
					(l = L()),
					E(o.$$.fragment),
					(r = L()),
					E(a.$$.fragment),
					(i = L()),
					E(f.$$.fragment),
					(u = L()),
					E(c.$$.fragment);
			},
			l(_) {
				S(e.$$.fragment, _),
					(n = R(_)),
					S(t.$$.fragment, _),
					(l = R(_)),
					S(o.$$.fragment, _),
					(r = R(_)),
					S(a.$$.fragment, _),
					(i = R(_)),
					S(f.$$.fragment, _),
					(u = R(_)),
					S(c.$$.fragment, _);
			},
			m(_, p) {
				C(e, _, p),
					b(_, n, p),
					C(t, _, p),
					b(_, l, p),
					C(o, _, p),
					b(_, r, p),
					C(a, _, p),
					b(_, i, p),
					C(f, _, p),
					b(_, u, p),
					C(c, _, p),
					(h = !0);
			},
			p(_, p) {
				const $ = {};
				p & 2048 && ($.$$scope = { dirty: p, ctx: _ }), e.$set($);
				const v = {};
				p & 2048 && (v.$$scope = { dirty: p, ctx: _ }), t.$set(v);
				const w = {};
				p & 2048 && (w.$$scope = { dirty: p, ctx: _ }), o.$set(w);
				const T = {};
				p & 2048 && (T.$$scope = { dirty: p, ctx: _ }), a.$set(T);
				const j = {};
				p & 2048 && (j.$$scope = { dirty: p, ctx: _ }), f.$set(j);
				const Y = {};
				p & 2048 && (Y.$$scope = { dirty: p, ctx: _ }), c.$set(Y);
			},
			i(_) {
				h ||
					(d(e.$$.fragment, _),
					d(t.$$.fragment, _),
					d(o.$$.fragment, _),
					d(a.$$.fragment, _),
					d(f.$$.fragment, _),
					d(c.$$.fragment, _),
					(h = !0));
			},
			o(_) {
				g(e.$$.fragment, _),
					g(t.$$.fragment, _),
					g(o.$$.fragment, _),
					g(a.$$.fragment, _),
					g(f.$$.fragment, _),
					g(c.$$.fragment, _),
					(h = !1);
			},
			d(_) {
				_ && (m(n), m(l), m(r), m(i), m(u)), k(e, _), k(t, _), k(o, _), k(a, _), k(f, _), k(c, _);
			}
		}
	);
}
function qm(s) {
	let e, n, t, l;
	return (
		(e = new xt({ props: { $$slots: { default: [Vm] }, $$scope: { ctx: s } } })),
		(t = new Qt({ props: { $$slots: { default: [Km] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment), (n = L()), E(t.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o), (n = R(o)), S(t.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), b(o, n, r), C(t, o, r), (l = !0);
			},
			p(o, r) {
				const a = {};
				r & 2049 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
				const i = {};
				r & 2048 && (i.$$scope = { dirty: r, ctx: o }), t.$set(i);
			},
			i(o) {
				l || (d(e.$$.fragment, o), d(t.$$.fragment, o), (l = !0));
			},
			o(o) {
				g(e.$$.fragment, o), g(t.$$.fragment, o), (l = !1);
			},
			d(o) {
				o && m(n), k(e, o), k(t, o);
			}
		}
	);
}
function Hm(s) {
	let e;
	return {
		c() {
			e = X('Font size');
		},
		l(n) {
			e = J(n, 'Font size');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function Um(s) {
	let e = s[1].label + '',
		n;
	return {
		c() {
			n = X(e);
		},
		l(t) {
			n = J(t, e);
		},
		m(t, l) {
			b(t, n, l);
		},
		p(t, l) {
			l & 2 && e !== (e = t[1].label + '') && at(n, e);
		},
		d(t) {
			t && m(n);
		}
	};
}
function Wm(s) {
	let e, n;
	return (
		(e = new en({
			props: {
				class: 'text-sm text-foreground/85',
				$$slots: { default: [Um] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 2050 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Gm(s) {
	let e;
	return {
		c() {
			e = X('Smaller');
		},
		l(n) {
			e = J(n, 'Smaller');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function Jm(s) {
	let e;
	return {
		c() {
			e = X('Small');
		},
		l(n) {
			e = J(n, 'Small');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function Xm(s) {
	let e;
	return {
		c() {
			e = X('Normal');
		},
		l(n) {
			e = J(n, 'Normal');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function Ym(s) {
	let e;
	return {
		c() {
			e = X('Large');
		},
		l(n) {
			e = J(n, 'Large');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function Zm(s) {
	let e;
	return {
		c() {
			e = X('Larger');
		},
		l(n) {
			e = J(n, 'Larger');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function Qm(s) {
	let e, n, t, l, o, r, a, i, f, u;
	return (
		(e = new Fe({ props: { value: 'smaller', $$slots: { default: [Gm] }, $$scope: { ctx: s } } })),
		(t = new Fe({ props: { value: 'small', $$slots: { default: [Jm] }, $$scope: { ctx: s } } })),
		(o = new Fe({ props: { value: 'normal', $$slots: { default: [Xm] }, $$scope: { ctx: s } } })),
		(a = new Fe({ props: { value: 'large', $$slots: { default: [Ym] }, $$scope: { ctx: s } } })),
		(f = new Fe({ props: { value: 'larger', $$slots: { default: [Zm] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment),
					(n = L()),
					E(t.$$.fragment),
					(l = L()),
					E(o.$$.fragment),
					(r = L()),
					E(a.$$.fragment),
					(i = L()),
					E(f.$$.fragment);
			},
			l(c) {
				S(e.$$.fragment, c),
					(n = R(c)),
					S(t.$$.fragment, c),
					(l = R(c)),
					S(o.$$.fragment, c),
					(r = R(c)),
					S(a.$$.fragment, c),
					(i = R(c)),
					S(f.$$.fragment, c);
			},
			m(c, h) {
				C(e, c, h),
					b(c, n, h),
					C(t, c, h),
					b(c, l, h),
					C(o, c, h),
					b(c, r, h),
					C(a, c, h),
					b(c, i, h),
					C(f, c, h),
					(u = !0);
			},
			p(c, h) {
				const _ = {};
				h & 2048 && (_.$$scope = { dirty: h, ctx: c }), e.$set(_);
				const p = {};
				h & 2048 && (p.$$scope = { dirty: h, ctx: c }), t.$set(p);
				const $ = {};
				h & 2048 && ($.$$scope = { dirty: h, ctx: c }), o.$set($);
				const v = {};
				h & 2048 && (v.$$scope = { dirty: h, ctx: c }), a.$set(v);
				const w = {};
				h & 2048 && (w.$$scope = { dirty: h, ctx: c }), f.$set(w);
			},
			i(c) {
				u ||
					(d(e.$$.fragment, c),
					d(t.$$.fragment, c),
					d(o.$$.fragment, c),
					d(a.$$.fragment, c),
					d(f.$$.fragment, c),
					(u = !0));
			},
			o(c) {
				g(e.$$.fragment, c),
					g(t.$$.fragment, c),
					g(o.$$.fragment, c),
					g(a.$$.fragment, c),
					g(f.$$.fragment, c),
					(u = !1);
			},
			d(c) {
				c && (m(n), m(l), m(r), m(i)), k(e, c), k(t, c), k(o, c), k(a, c), k(f, c);
			}
		}
	);
}
function xm(s) {
	let e, n, t, l;
	return (
		(e = new xt({ props: { $$slots: { default: [Wm] }, $$scope: { ctx: s } } })),
		(t = new Qt({ props: { $$slots: { default: [Qm] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment), (n = L()), E(t.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o), (n = R(o)), S(t.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), b(o, n, r), C(t, o, r), (l = !0);
			},
			p(o, r) {
				const a = {};
				r & 2050 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
				const i = {};
				r & 2048 && (i.$$scope = { dirty: r, ctx: o }), t.$set(i);
			},
			i(o) {
				l || (d(e.$$.fragment, o), d(t.$$.fragment, o), (l = !0));
			},
			o(o) {
				g(e.$$.fragment, o), g(t.$$.fragment, o), (l = !1);
			},
			d(o) {
				o && m(n), k(e, o), k(t, o);
			}
		}
	);
}
function e_(s) {
	let e;
	return {
		c() {
			e = X('Text correction');
		},
		l(n) {
			e = J(n, 'Text correction');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function t_(s) {
	let e;
	return {
		c() {
			e = X('Auto Correct');
		},
		l(n) {
			e = J(n, 'Auto Correct');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function n_(s) {
	let e;
	return {
		c() {
			e = X('Spell Check');
		},
		l(n) {
			e = J(n, 'Spell Check');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function l_(s) {
	let e;
	return {
		c() {
			e = X('Additional settings');
		},
		l(n) {
			e = J(n, 'Additional settings');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function s_(s) {
	let e;
	return {
		c() {
			e = X('Show inline title');
		},
		l(n) {
			e = J(n, 'Show inline title');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function o_(s) {
	let e;
	return {
		c() {
			e = X('Show line numbers');
		},
		l(n) {
			e = J(n, 'Show line numbers');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function r_(s) {
	let e;
	return {
		c() {
			e = X('Show editor toolbar');
		},
		l(n) {
			e = J(n, 'Show editor toolbar');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function i_(s) {
	let e,
		n,
		t,
		l,
		o,
		r = 'Change the editor font.',
		a,
		i,
		f,
		u,
		c,
		h,
		_,
		p,
		$,
		v = 'Change the editor font size.',
		w,
		T,
		j,
		Y,
		V,
		F,
		U,
		ne,
		oe,
		O = 'Enable or disable various text correction features.',
		G,
		q,
		K,
		z,
		x,
		M,
		H,
		W,
		Te,
		Pe,
		De,
		Ie,
		we,
		le,
		se,
		$e,
		Ue = 'Additional settings for the editor.',
		He,
		ze,
		A,
		Q,
		Oe,
		Re,
		Le,
		Me,
		Xe,
		Je,
		We,
		Be,
		Ye,
		st,
		gt,
		ht,
		it;
	t = new tt({ props: { class: 'text-sm', $$slots: { default: [ym] }, $$scope: { ctx: s } } });
	function tn(_e) {
		s[4](_e);
	}
	let Nn = { disabled: !0, $$slots: { default: [qm] }, $$scope: { ctx: s } };
	s[0] !== void 0 && (Nn.selected = s[0]),
		(f = new Xt({ props: Nn })),
		Ne.push(() => rt(f, 'selected', tn)),
		(_ = new tt({ props: { class: 'text-sm', $$slots: { default: [Hm] }, $$scope: { ctx: s } } }));
	function zn(_e) {
		s[5](_e);
	}
	let Z = { disabled: !0, $$slots: { default: [xm] }, $$scope: { ctx: s } };
	return (
		s[1] !== void 0 && (Z.selected = s[1]),
		(j = new Xt({ props: Z })),
		Ne.push(() => rt(j, 'selected', zn)),
		(U = new tt({ props: { class: 'text-sm', $$slots: { default: [e_] }, $$scope: { ctx: s } } })),
		(z = new Bt({ props: { checked: s[2].editor.auto_correct, onCheckedChange: s[6] } })),
		(M = new tt({
			props: {
				class: Ot(
					'text-sm font-normal transition-colors',
					s[2].editor.auto_correct ? 'text-foreground/90' : 'text-foreground/60'
				),
				$$slots: { default: [t_] },
				$$scope: { ctx: s }
			}
		})),
		(Te = new Bt({ props: { checked: s[2].editor.spell_check, onCheckedChange: s[7] } })),
		(De = new tt({
			props: {
				class: Ot(
					'text-sm font-normal transition-colors',
					s[2].editor.spell_check ? 'text-foreground/90' : 'text-foreground/60'
				),
				$$slots: { default: [n_] },
				$$scope: { ctx: s }
			}
		})),
		(le = new tt({ props: { class: 'text-sm', $$slots: { default: [l_] }, $$scope: { ctx: s } } })),
		(Q = new Bt({ props: { checked: s[2].editor.show_inline_title, onCheckedChange: s[8] } })),
		(Re = new tt({
			props: {
				class: Ot(
					'text-sm font-normal transition-colors',
					s[2].editor.show_inline_title ? 'text-foreground/90' : 'text-foreground/60'
				),
				$$slots: { default: [s_] },
				$$scope: { ctx: s }
			}
		})),
		(Xe = new Bt({
			props: { disabled: !0, checked: s[2].editor.show_line_numbers, onCheckedChange: s[9] }
		})),
		(We = new tt({
			props: {
				class: Ot('text-sm font-normal transition-colors text-foreground/60'),
				$$slots: { default: [o_] },
				$$scope: { ctx: s }
			}
		})),
		(st = new Bt({ props: { checked: s[2].editor.show_toolbar, onCheckedChange: s[10] } })),
		(ht = new tt({
			props: {
				class: Ot(
					'text-sm font-normal transition-colors',
					s[2].editor.show_toolbar ? 'text-foreground/90' : 'text-foreground/60'
				),
				$$slots: { default: [r_] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = y('div')),
					(n = y('div')),
					E(t.$$.fragment),
					(l = L()),
					(o = y('p')),
					(o.textContent = r),
					(a = L()),
					(i = y('div')),
					E(f.$$.fragment),
					(c = L()),
					(h = y('div')),
					E(_.$$.fragment),
					(p = L()),
					($ = y('p')),
					($.textContent = v),
					(w = L()),
					(T = y('div')),
					E(j.$$.fragment),
					(V = L()),
					(F = y('div')),
					E(U.$$.fragment),
					(ne = L()),
					(oe = y('p')),
					(oe.textContent = O),
					(G = L()),
					(q = y('div')),
					(K = y('div')),
					E(z.$$.fragment),
					(x = L()),
					E(M.$$.fragment),
					(H = L()),
					(W = y('div')),
					E(Te.$$.fragment),
					(Pe = L()),
					E(De.$$.fragment),
					(Ie = L()),
					(we = y('div')),
					E(le.$$.fragment),
					(se = L()),
					($e = y('p')),
					($e.textContent = Ue),
					(He = L()),
					(ze = y('div')),
					(A = y('div')),
					E(Q.$$.fragment),
					(Oe = L()),
					E(Re.$$.fragment),
					(Le = L()),
					(Me = y('div')),
					E(Xe.$$.fragment),
					(Je = L()),
					E(We.$$.fragment),
					(Be = L()),
					(Ye = y('div')),
					E(st.$$.fragment),
					(gt = L()),
					E(ht.$$.fragment),
					this.h();
			},
			l(_e) {
				e = D(_e, 'DIV', { class: !0 });
				var ye = B(e);
				n = D(ye, 'DIV', { class: !0 });
				var St = B(n);
				S(t.$$.fragment, St),
					(l = R(St)),
					(o = D(St, 'P', { class: !0, 'data-svelte-h': !0 })),
					lt(o) !== 'svelte-1156gyu' && (o.textContent = r),
					(a = R(St)),
					(i = D(St, 'DIV', { class: !0 }));
				var nn = B(i);
				S(f.$$.fragment, nn),
					nn.forEach(m),
					St.forEach(m),
					(c = R(ye)),
					(h = D(ye, 'DIV', { class: !0 }));
				var wt = B(h);
				S(_.$$.fragment, wt),
					(p = R(wt)),
					($ = D(wt, 'P', { class: !0, 'data-svelte-h': !0 })),
					lt($) !== 'svelte-cssfsb' && ($.textContent = v),
					(w = R(wt)),
					(T = D(wt, 'DIV', { class: !0 }));
				var ln = B(T);
				S(j.$$.fragment, ln),
					ln.forEach(m),
					wt.forEach(m),
					(V = R(ye)),
					(F = D(ye, 'DIV', { class: !0 }));
				var Tt = B(F);
				S(U.$$.fragment, Tt),
					(ne = R(Tt)),
					(oe = D(Tt, 'P', { class: !0, 'data-svelte-h': !0 })),
					lt(oe) !== 'svelte-97tti4' && (oe.textContent = O),
					(G = R(Tt)),
					(q = D(Tt, 'DIV', { class: !0 }));
				var Mt = B(q);
				K = D(Mt, 'DIV', { class: !0 });
				var Vt = B(K);
				S(z.$$.fragment, Vt),
					(x = R(Vt)),
					S(M.$$.fragment, Vt),
					Vt.forEach(m),
					(H = R(Mt)),
					(W = D(Mt, 'DIV', { class: !0 }));
				var Rt = B(W);
				S(Te.$$.fragment, Rt),
					(Pe = R(Rt)),
					S(De.$$.fragment, Rt),
					Rt.forEach(m),
					Mt.forEach(m),
					Tt.forEach(m),
					(Ie = R(ye)),
					(we = D(ye, 'DIV', { class: !0 }));
				var kt = B(we);
				S(le.$$.fragment, kt),
					(se = R(kt)),
					($e = D(kt, 'P', { class: !0, 'data-svelte-h': !0 })),
					lt($e) !== 'svelte-x7ikiw' && ($e.textContent = Ue),
					(He = R(kt)),
					(ze = D(kt, 'DIV', { class: !0 }));
				var At = B(ze);
				A = D(At, 'DIV', { class: !0 });
				var Lt = B(A);
				S(Q.$$.fragment, Lt),
					(Oe = R(Lt)),
					S(Re.$$.fragment, Lt),
					Lt.forEach(m),
					(Le = R(At)),
					(Me = D(At, 'DIV', { class: !0 }));
				var Ft = B(Me);
				S(Xe.$$.fragment, Ft),
					(Je = R(Ft)),
					S(We.$$.fragment, Ft),
					Ft.forEach(m),
					(Be = R(At)),
					(Ye = D(At, 'DIV', { class: !0 }));
				var jt = B(Ye);
				S(st.$$.fragment, jt),
					(gt = R(jt)),
					S(ht.$$.fragment, jt),
					jt.forEach(m),
					At.forEach(m),
					kt.forEach(m),
					ye.forEach(m),
					this.h();
			},
			h() {
				P(o, 'class', 'text-muted-foreground text-xs'),
					P(i, 'class', 'flex items-center gap-2 pt-2'),
					P(n, 'class', 'space-y-1'),
					P($, 'class', 'text-muted-foreground text-xs'),
					P(T, 'class', 'flex items-center gap-2 pt-2'),
					P(h, 'class', 'space-y-1'),
					P(oe, 'class', 'text-muted-foreground text-xs'),
					P(K, 'class', 'flex items-center gap-2'),
					P(W, 'class', 'flex items-center gap-2'),
					P(q, 'class', 'flex flex-col items-start gap-2.5 pt-2'),
					P(F, 'class', 'space-y-1'),
					P($e, 'class', 'text-muted-foreground text-xs'),
					P(A, 'class', 'flex items-center gap-2'),
					P(Me, 'class', 'flex items-center gap-2'),
					P(Ye, 'class', 'flex items-center gap-2'),
					P(ze, 'class', 'flex flex-col items-start gap-2.5 pt-2'),
					P(we, 'class', 'space-y-1'),
					P(e, 'class', 'space-y-5');
			},
			m(_e, ye) {
				b(_e, e, ye),
					N(e, n),
					C(t, n, null),
					N(n, l),
					N(n, o),
					N(n, a),
					N(n, i),
					C(f, i, null),
					N(e, c),
					N(e, h),
					C(_, h, null),
					N(h, p),
					N(h, $),
					N(h, w),
					N(h, T),
					C(j, T, null),
					N(e, V),
					N(e, F),
					C(U, F, null),
					N(F, ne),
					N(F, oe),
					N(F, G),
					N(F, q),
					N(q, K),
					C(z, K, null),
					N(K, x),
					C(M, K, null),
					N(q, H),
					N(q, W),
					C(Te, W, null),
					N(W, Pe),
					C(De, W, null),
					N(e, Ie),
					N(e, we),
					C(le, we, null),
					N(we, se),
					N(we, $e),
					N(we, He),
					N(we, ze),
					N(ze, A),
					C(Q, A, null),
					N(A, Oe),
					C(Re, A, null),
					N(ze, Le),
					N(ze, Me),
					C(Xe, Me, null),
					N(Me, Je),
					C(We, Me, null),
					N(ze, Be),
					N(ze, Ye),
					C(st, Ye, null),
					N(Ye, gt),
					C(ht, Ye, null),
					(it = !0);
			},
			p(_e, [ye]) {
				const St = {};
				ye & 2048 && (St.$$scope = { dirty: ye, ctx: _e }), t.$set(St);
				const nn = {};
				ye & 2049 && (nn.$$scope = { dirty: ye, ctx: _e }),
					!u && ye & 1 && ((u = !0), (nn.selected = _e[0]), ot(() => (u = !1))),
					f.$set(nn);
				const wt = {};
				ye & 2048 && (wt.$$scope = { dirty: ye, ctx: _e }), _.$set(wt);
				const ln = {};
				ye & 2050 && (ln.$$scope = { dirty: ye, ctx: _e }),
					!Y && ye & 2 && ((Y = !0), (ln.selected = _e[1]), ot(() => (Y = !1))),
					j.$set(ln);
				const Tt = {};
				ye & 2048 && (Tt.$$scope = { dirty: ye, ctx: _e }), U.$set(Tt);
				const Mt = {};
				ye & 4 && (Mt.checked = _e[2].editor.auto_correct),
					ye & 4 && (Mt.onCheckedChange = _e[6]),
					z.$set(Mt);
				const Vt = {};
				ye & 4 &&
					(Vt.class = Ot(
						'text-sm font-normal transition-colors',
						_e[2].editor.auto_correct ? 'text-foreground/90' : 'text-foreground/60'
					)),
					ye & 2048 && (Vt.$$scope = { dirty: ye, ctx: _e }),
					M.$set(Vt);
				const Rt = {};
				ye & 4 && (Rt.checked = _e[2].editor.spell_check),
					ye & 4 && (Rt.onCheckedChange = _e[7]),
					Te.$set(Rt);
				const kt = {};
				ye & 4 &&
					(kt.class = Ot(
						'text-sm font-normal transition-colors',
						_e[2].editor.spell_check ? 'text-foreground/90' : 'text-foreground/60'
					)),
					ye & 2048 && (kt.$$scope = { dirty: ye, ctx: _e }),
					De.$set(kt);
				const At = {};
				ye & 2048 && (At.$$scope = { dirty: ye, ctx: _e }), le.$set(At);
				const Lt = {};
				ye & 4 && (Lt.checked = _e[2].editor.show_inline_title),
					ye & 12 && (Lt.onCheckedChange = _e[8]),
					Q.$set(Lt);
				const Ft = {};
				ye & 4 &&
					(Ft.class = Ot(
						'text-sm font-normal transition-colors',
						_e[2].editor.show_inline_title ? 'text-foreground/90' : 'text-foreground/60'
					)),
					ye & 2048 && (Ft.$$scope = { dirty: ye, ctx: _e }),
					Re.$set(Ft);
				const jt = {};
				ye & 4 && (jt.checked = _e[2].editor.show_line_numbers),
					ye & 4 && (jt.onCheckedChange = _e[9]),
					Xe.$set(jt);
				const il = {};
				ye & 2048 && (il.$$scope = { dirty: ye, ctx: _e }), We.$set(il);
				const Bn = {};
				ye & 4 && (Bn.checked = _e[2].editor.show_toolbar),
					ye & 4 && (Bn.onCheckedChange = _e[10]),
					st.$set(Bn);
				const Kn = {};
				ye & 4 &&
					(Kn.class = Ot(
						'text-sm font-normal transition-colors',
						_e[2].editor.show_toolbar ? 'text-foreground/90' : 'text-foreground/60'
					)),
					ye & 2048 && (Kn.$$scope = { dirty: ye, ctx: _e }),
					ht.$set(Kn);
			},
			i(_e) {
				it ||
					(d(t.$$.fragment, _e),
					d(f.$$.fragment, _e),
					d(_.$$.fragment, _e),
					d(j.$$.fragment, _e),
					d(U.$$.fragment, _e),
					d(z.$$.fragment, _e),
					d(M.$$.fragment, _e),
					d(Te.$$.fragment, _e),
					d(De.$$.fragment, _e),
					d(le.$$.fragment, _e),
					d(Q.$$.fragment, _e),
					d(Re.$$.fragment, _e),
					d(Xe.$$.fragment, _e),
					d(We.$$.fragment, _e),
					d(st.$$.fragment, _e),
					d(ht.$$.fragment, _e),
					(it = !0));
			},
			o(_e) {
				g(t.$$.fragment, _e),
					g(f.$$.fragment, _e),
					g(_.$$.fragment, _e),
					g(j.$$.fragment, _e),
					g(U.$$.fragment, _e),
					g(z.$$.fragment, _e),
					g(M.$$.fragment, _e),
					g(Te.$$.fragment, _e),
					g(De.$$.fragment, _e),
					g(le.$$.fragment, _e),
					g(Q.$$.fragment, _e),
					g(Re.$$.fragment, _e),
					g(Xe.$$.fragment, _e),
					g(We.$$.fragment, _e),
					g(st.$$.fragment, _e),
					g(ht.$$.fragment, _e),
					(it = !1);
			},
			d(_e) {
				_e && m(e),
					k(t),
					k(f),
					k(_),
					k(j),
					k(U),
					k(z),
					k(M),
					k(Te),
					k(De),
					k(le),
					k(Q),
					k(Re),
					k(Xe),
					k(We),
					k(st),
					k(ht);
			}
		}
	);
}
function a_(s, e, n) {
	let t, l;
	Ae(s, Nt, (p) => n(2, (t = p))), Ae(s, Mn, (p) => n(3, (l = p)));
	let o = { value: 'inter', label: 'Inter' },
		r = { value: 'normal', label: 'Normal' };
	function a(p) {
		(o = p), n(0, o);
	}
	function i(p) {
		(r = p), n(1, r);
	}
	return [
		o,
		r,
		t,
		l,
		a,
		i,
		(p) => Et('collection', { ...t, editor: { ...t.editor, auto_correct: p } }),
		(p) => Et('collection', { ...t, editor: { ...t.editor, spell_check: p } }),
		(p) => {
			Et('collection', { ...t, editor: { ...t.editor, show_inline_title: p } }),
				vi(),
				So(l || '', !0);
		},
		(p) => Et('collection', { ...t, editor: { ...t.editor, show_line_numbers: p } }),
		(p) => Et('collection', { ...t, editor: { ...t.editor, show_toolbar: p } })
	];
}
class f_ extends he {
	constructor(e) {
		super(), pe(this, e, a_, i_, me, {});
	}
}
function u_(s) {
	let e;
	return {
		c() {
			e = X('Auto save');
		},
		l(n) {
			e = J(n, 'Auto save');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function c_(s) {
	let e;
	return {
		c() {
			e = X('Note: Disabling auto save may result in data loss and is strongly discouraged.');
		},
		l(n) {
			e = J(n, 'Note: Disabling auto save may result in data loss and is strongly discouraged.');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function d_(s) {
	let e;
	return {
		c() {
			e = X('Auto save debounce');
		},
		l(n) {
			e = J(n, 'Auto save debounce');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function m_(s) {
	let e = s[0].editor.auto_save_debounce + '',
		n,
		t;
	return {
		c() {
			(n = X(e)), (t = X('ms'));
		},
		l(l) {
			(n = J(l, e)), (t = J(l, 'ms'));
		},
		m(l, o) {
			b(l, n, o), b(l, t, o);
		},
		p(l, o) {
			o & 1 && e !== (e = l[0].editor.auto_save_debounce + '') && at(n, e);
		},
		d(l) {
			l && (m(n), m(t));
		}
	};
}
function __(s) {
	let e, n;
	return (
		(e = new en({
			props: {
				class: 'text-xs text-foreground/85',
				$$slots: { default: [m_] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 17 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function g_(s) {
	let e;
	return {
		c() {
			e = X('250ms');
		},
		l(n) {
			e = J(n, '250ms');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function h_(s) {
	let e;
	return {
		c() {
			e = X('500ms');
		},
		l(n) {
			e = J(n, '500ms');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function p_(s) {
	let e;
	return {
		c() {
			e = X('750ms');
		},
		l(n) {
			e = J(n, '750ms');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function $_(s) {
	let e;
	return {
		c() {
			e = X('1000ms');
		},
		l(n) {
			e = J(n, '1000ms');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function b_(s) {
	let e;
	return {
		c() {
			e = X('1500ms');
		},
		l(n) {
			e = J(n, '1500ms');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function v_(s) {
	let e;
	return {
		c() {
			e = X('2000ms');
		},
		l(n) {
			e = J(n, '2000ms');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function k_(s) {
	let e;
	return {
		c() {
			e = X('3000ms');
		},
		l(n) {
			e = J(n, '3000ms');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function C_(s) {
	let e, n, t, l, o, r, a, i, f, u, c, h, _, p;
	return (
		(e = new Fe({ props: { value: '250', $$slots: { default: [g_] }, $$scope: { ctx: s } } })),
		(t = new Fe({ props: { value: '500', $$slots: { default: [h_] }, $$scope: { ctx: s } } })),
		(o = new Fe({ props: { value: '750', $$slots: { default: [p_] }, $$scope: { ctx: s } } })),
		(a = new Fe({ props: { value: '1000', $$slots: { default: [$_] }, $$scope: { ctx: s } } })),
		(f = new Fe({ props: { value: '1500', $$slots: { default: [b_] }, $$scope: { ctx: s } } })),
		(c = new Fe({ props: { value: '2000', $$slots: { default: [v_] }, $$scope: { ctx: s } } })),
		(_ = new Fe({ props: { value: '3000', $$slots: { default: [k_] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment),
					(n = L()),
					E(t.$$.fragment),
					(l = L()),
					E(o.$$.fragment),
					(r = L()),
					E(a.$$.fragment),
					(i = L()),
					E(f.$$.fragment),
					(u = L()),
					E(c.$$.fragment),
					(h = L()),
					E(_.$$.fragment);
			},
			l($) {
				S(e.$$.fragment, $),
					(n = R($)),
					S(t.$$.fragment, $),
					(l = R($)),
					S(o.$$.fragment, $),
					(r = R($)),
					S(a.$$.fragment, $),
					(i = R($)),
					S(f.$$.fragment, $),
					(u = R($)),
					S(c.$$.fragment, $),
					(h = R($)),
					S(_.$$.fragment, $);
			},
			m($, v) {
				C(e, $, v),
					b($, n, v),
					C(t, $, v),
					b($, l, v),
					C(o, $, v),
					b($, r, v),
					C(a, $, v),
					b($, i, v),
					C(f, $, v),
					b($, u, v),
					C(c, $, v),
					b($, h, v),
					C(_, $, v),
					(p = !0);
			},
			p($, v) {
				const w = {};
				v & 16 && (w.$$scope = { dirty: v, ctx: $ }), e.$set(w);
				const T = {};
				v & 16 && (T.$$scope = { dirty: v, ctx: $ }), t.$set(T);
				const j = {};
				v & 16 && (j.$$scope = { dirty: v, ctx: $ }), o.$set(j);
				const Y = {};
				v & 16 && (Y.$$scope = { dirty: v, ctx: $ }), a.$set(Y);
				const V = {};
				v & 16 && (V.$$scope = { dirty: v, ctx: $ }), f.$set(V);
				const F = {};
				v & 16 && (F.$$scope = { dirty: v, ctx: $ }), c.$set(F);
				const U = {};
				v & 16 && (U.$$scope = { dirty: v, ctx: $ }), _.$set(U);
			},
			i($) {
				p ||
					(d(e.$$.fragment, $),
					d(t.$$.fragment, $),
					d(o.$$.fragment, $),
					d(a.$$.fragment, $),
					d(f.$$.fragment, $),
					d(c.$$.fragment, $),
					d(_.$$.fragment, $),
					(p = !0));
			},
			o($) {
				g(e.$$.fragment, $),
					g(t.$$.fragment, $),
					g(o.$$.fragment, $),
					g(a.$$.fragment, $),
					g(f.$$.fragment, $),
					g(c.$$.fragment, $),
					g(_.$$.fragment, $),
					(p = !1);
			},
			d($) {
				$ && (m(n), m(l), m(r), m(i), m(u), m(h)),
					k(e, $),
					k(t, $),
					k(o, $),
					k(a, $),
					k(f, $),
					k(c, $),
					k(_, $);
			}
		}
	);
}
function E_(s) {
	let e, n, t, l;
	return (
		(e = new xt({ props: { $$slots: { default: [__] }, $$scope: { ctx: s } } })),
		(t = new Qt({
			props: { align: 'start', class: '!w-28', $$slots: { default: [C_] }, $$scope: { ctx: s } }
		})),
		{
			c() {
				E(e.$$.fragment), (n = L()), E(t.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o), (n = R(o)), S(t.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), b(o, n, r), C(t, o, r), (l = !0);
			},
			p(o, r) {
				const a = {};
				r & 17 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
				const i = {};
				r & 16 && (i.$$scope = { dirty: r, ctx: o }), t.$set(i);
			},
			i(o) {
				l || (d(e.$$.fragment, o), d(t.$$.fragment, o), (l = !0));
			},
			o(o) {
				g(e.$$.fragment, o), g(t.$$.fragment, o), (l = !1);
			},
			d(o) {
				o && m(n), k(e, o), k(t, o);
			}
		}
	);
}
function As(s) {
	let e, n;
	return (
		(e = new ft({
			props: {
				text: 'Reset to default',
				side: 'bottom',
				$$slots: { default: [w_] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 17 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function S_(s) {
	let e, n;
	return (
		(e = new Ke({ props: { name: 'undoCircle', class: 'h-3.5 w-3.5' } })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p: Se,
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function w_(s) {
	let e, n;
	return (
		(e = new Qe({
			props: {
				variant: 'ghost',
				size: 'icon',
				class: 'h-7 w-7 fill-muted-foreground hover:fill-foreground',
				scale: 'md',
				disabled: !s[0].editor.auto_save,
				$$slots: { default: [S_] },
				$$scope: { ctx: s }
			}
		})),
		e.$on('click', s[3]),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 1 && (o.disabled = !t[0].editor.auto_save),
					l & 16 && (o.$$scope = { dirty: l, ctx: t }),
					e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function T_(s) {
	let e;
	return {
		c() {
			e = X('Hidden files');
		},
		l(n) {
			e = J(n, 'Hidden files');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function A_(s) {
	let e;
	return {
		c() {
			e = X('Add');
		},
		l(n) {
			e = J(n, 'Add');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function O_(s) {
	let e,
		n,
		t,
		l,
		o,
		r = 'Automatically save your notes.',
		a,
		i,
		f,
		u,
		c,
		h,
		_,
		p,
		$,
		v,
		w = 'The delay before auto save is triggered.',
		T,
		j,
		Y,
		V,
		F,
		U,
		ne,
		oe,
		O,
		G = 'Exclude files or extensions from the notes view.',
		q,
		K,
		z,
		x;
	(t = new tt({ props: { class: 'text-sm', $$slots: { default: [u_] }, $$scope: { ctx: s } } })),
		(f = new Bt({ props: { checked: s[0].editor.auto_save, onCheckedChange: s[1] } })),
		(c = new tt({
			props: {
				class: be('text-destructive text-xs font-normal', s[0].editor.auto_save && 'hidden'),
				$$slots: { default: [c_] },
				$$scope: { ctx: s }
			}
		})),
		(p = new tt({ props: { class: 'text-sm', $$slots: { default: [d_] }, $$scope: { ctx: s } } })),
		(Y = new Xt({
			props: {
				selected: {
					value: s[0].editor.auto_save_debounce,
					label: s[0].editor.auto_save_debounce + 'ms'
				},
				onSelectedChange: s[2],
				disabled: !s[0].editor.auto_save,
				$$slots: { default: [E_] },
				$$scope: { ctx: s }
			}
		}));
	let M = s[0].editor.auto_save_debounce != 750 && As(s);
	return (
		(ne = new tt({ props: { class: 'text-sm', $$slots: { default: [T_] }, $$scope: { ctx: s } } })),
		(z = new Qe({
			props: {
				variant: 'default',
				size: 'sm',
				class: 'h-7 text-primary-foreground/85 hover:text-primary-foreground text-sm font-normal',
				scale: 'sm',
				disabled: !0,
				$$slots: { default: [A_] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = y('div')),
					(n = y('div')),
					E(t.$$.fragment),
					(l = L()),
					(o = y('p')),
					(o.textContent = r),
					(a = L()),
					(i = y('div')),
					E(f.$$.fragment),
					(u = L()),
					E(c.$$.fragment),
					(h = L()),
					(_ = y('div')),
					E(p.$$.fragment),
					($ = L()),
					(v = y('p')),
					(v.textContent = w),
					(T = L()),
					(j = y('div')),
					E(Y.$$.fragment),
					(V = L()),
					M && M.c(),
					(F = L()),
					(U = y('div')),
					E(ne.$$.fragment),
					(oe = L()),
					(O = y('p')),
					(O.textContent = G),
					(q = L()),
					(K = y('div')),
					E(z.$$.fragment),
					this.h();
			},
			l(H) {
				e = D(H, 'DIV', { class: !0 });
				var W = B(e);
				n = D(W, 'DIV', { class: !0 });
				var Te = B(n);
				S(t.$$.fragment, Te),
					(l = R(Te)),
					(o = D(Te, 'P', { class: !0, 'data-svelte-h': !0 })),
					lt(o) !== 'svelte-38f7td' && (o.textContent = r),
					(a = R(Te)),
					(i = D(Te, 'DIV', { class: !0 }));
				var Pe = B(i);
				S(f.$$.fragment, Pe),
					(u = R(Pe)),
					S(c.$$.fragment, Pe),
					Pe.forEach(m),
					Te.forEach(m),
					(h = R(W)),
					(_ = D(W, 'DIV', { class: !0 }));
				var De = B(_);
				S(p.$$.fragment, De),
					($ = R(De)),
					(v = D(De, 'P', { class: !0, 'data-svelte-h': !0 })),
					lt(v) !== 'svelte-1t81uw1' && (v.textContent = w),
					(T = R(De)),
					(j = D(De, 'DIV', { class: !0 }));
				var Ie = B(j);
				S(Y.$$.fragment, Ie),
					(V = R(Ie)),
					M && M.l(Ie),
					Ie.forEach(m),
					De.forEach(m),
					(F = R(W)),
					(U = D(W, 'DIV', { class: !0 }));
				var we = B(U);
				S(ne.$$.fragment, we),
					(oe = R(we)),
					(O = D(we, 'P', { class: !0, 'data-svelte-h': !0 })),
					lt(O) !== 'svelte-1ik7fhu' && (O.textContent = G),
					(q = R(we)),
					(K = D(we, 'DIV', { class: !0 }));
				var le = B(K);
				S(z.$$.fragment, le), le.forEach(m), we.forEach(m), W.forEach(m), this.h();
			},
			h() {
				P(o, 'class', 'text-muted-foreground text-xs'),
					P(i, 'class', 'flex flex-col items-start gap-3 pt-2'),
					P(n, 'class', 'space-y-1'),
					P(v, 'class', 'text-muted-foreground text-xs'),
					P(j, 'class', 'flex items-center gap-1 pt-2'),
					P(_, 'class', 'space-y-1'),
					P(O, 'class', 'text-muted-foreground text-xs'),
					P(K, 'class', 'flex items-center gap-2 pt-2'),
					P(U, 'class', 'space-y-1'),
					P(e, 'class', 'space-y-5');
			},
			m(H, W) {
				b(H, e, W),
					N(e, n),
					C(t, n, null),
					N(n, l),
					N(n, o),
					N(n, a),
					N(n, i),
					C(f, i, null),
					N(i, u),
					C(c, i, null),
					N(e, h),
					N(e, _),
					C(p, _, null),
					N(_, $),
					N(_, v),
					N(_, T),
					N(_, j),
					C(Y, j, null),
					N(j, V),
					M && M.m(j, null),
					N(e, F),
					N(e, U),
					C(ne, U, null),
					N(U, oe),
					N(U, O),
					N(U, q),
					N(U, K),
					C(z, K, null),
					(x = !0);
			},
			p(H, [W]) {
				const Te = {};
				W & 16 && (Te.$$scope = { dirty: W, ctx: H }), t.$set(Te);
				const Pe = {};
				W & 1 && (Pe.checked = H[0].editor.auto_save),
					W & 1 && (Pe.onCheckedChange = H[1]),
					f.$set(Pe);
				const De = {};
				W & 1 &&
					(De.class = be(
						'text-destructive text-xs font-normal',
						H[0].editor.auto_save && 'hidden'
					)),
					W & 16 && (De.$$scope = { dirty: W, ctx: H }),
					c.$set(De);
				const Ie = {};
				W & 16 && (Ie.$$scope = { dirty: W, ctx: H }), p.$set(Ie);
				const we = {};
				W & 1 &&
					(we.selected = {
						value: H[0].editor.auto_save_debounce,
						label: H[0].editor.auto_save_debounce + 'ms'
					}),
					W & 1 && (we.onSelectedChange = H[2]),
					W & 1 && (we.disabled = !H[0].editor.auto_save),
					W & 17 && (we.$$scope = { dirty: W, ctx: H }),
					Y.$set(we),
					H[0].editor.auto_save_debounce != 750
						? M
							? (M.p(H, W), W & 1 && d(M, 1))
							: ((M = As(H)), M.c(), d(M, 1), M.m(j, null))
						: M &&
							(Ce(),
							g(M, 1, 1, () => {
								M = null;
							}),
							Ee());
				const le = {};
				W & 16 && (le.$$scope = { dirty: W, ctx: H }), ne.$set(le);
				const se = {};
				W & 16 && (se.$$scope = { dirty: W, ctx: H }), z.$set(se);
			},
			i(H) {
				x ||
					(d(t.$$.fragment, H),
					d(f.$$.fragment, H),
					d(c.$$.fragment, H),
					d(p.$$.fragment, H),
					d(Y.$$.fragment, H),
					d(M),
					d(ne.$$.fragment, H),
					d(z.$$.fragment, H),
					(x = !0));
			},
			o(H) {
				g(t.$$.fragment, H),
					g(f.$$.fragment, H),
					g(c.$$.fragment, H),
					g(p.$$.fragment, H),
					g(Y.$$.fragment, H),
					g(M),
					g(ne.$$.fragment, H),
					g(z.$$.fragment, H),
					(x = !1);
			},
			d(H) {
				H && m(e), k(t), k(f), k(c), k(p), k(Y), M && M.d(), k(ne), k(z);
			}
		}
	);
}
function N_(s, e, n) {
	let t;
	return (
		Ae(s, Nt, (a) => n(0, (t = a))),
		[
			t,
			(a) => {
				Et('collection', { ...t, editor: { ...t.editor, auto_save: a } });
			},
			(a) => {
				a && Et('collection', { ...t, editor: { ...t.editor, auto_save_debounce: a.value } });
			},
			() => {
				Et('collection', { ...t, editor: { ...t.editor, auto_save_debounce: 750 } });
			}
		]
	);
}
class P_ extends he {
	constructor(e) {
		super(), pe(this, e, N_, O_, me, {});
	}
}
function I_(s) {
	let e;
	return {
		c() {
			e = X('Auto sync');
		},
		l(n) {
			e = J(n, 'Auto sync');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function D_(s) {
	let e, n, t;
	function l(r) {
		s[4](r);
	}
	let o = { disabled: !0 };
	return (
		s[0] !== void 0 && (o.checked = s[0]),
		(e = new Bt({ props: o })),
		Ne.push(() => rt(e, 'checked', l)),
		{
			c() {
				E(e.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r);
			},
			m(r, a) {
				C(e, r, a), (t = !0);
			},
			p(r, a) {
				const i = {};
				!n && a & 1 && ((n = !0), (i.checked = r[0]), ot(() => (n = !1))), e.$set(i);
			},
			i(r) {
				t || (d(e.$$.fragment, r), (t = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (t = !1);
			},
			d(r) {
				k(e, r);
			}
		}
	);
}
function y_(s) {
	let e;
	return {
		c() {
			e = X('Sync interval');
		},
		l(n) {
			e = J(n, 'Sync interval');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function M_(s) {
	let e = s[2].label + '',
		n;
	return {
		c() {
			n = X(e);
		},
		l(t) {
			n = J(t, e);
		},
		m(t, l) {
			b(t, n, l);
		},
		p(t, l) {
			l & 4 && e !== (e = t[2].label + '') && at(n, e);
		},
		d(t) {
			t && m(n);
		}
	};
}
function V_(s) {
	let e, n;
	return (
		(e = new en({
			props: {
				class: 'text-sm text-foreground/85',
				$$slots: { default: [M_] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 260 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function R_(s) {
	let e;
	return {
		c() {
			e = X('5 minutes');
		},
		l(n) {
			e = J(n, '5 minutes');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function L_(s) {
	let e;
	return {
		c() {
			e = X('10 minutes');
		},
		l(n) {
			e = J(n, '10 minutes');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function F_(s) {
	let e;
	return {
		c() {
			e = X('15 minutes');
		},
		l(n) {
			e = J(n, '15 minutes');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function j_(s) {
	let e;
	return {
		c() {
			e = X('30 minutes');
		},
		l(n) {
			e = J(n, '30 minutes');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function z_(s) {
	let e;
	return {
		c() {
			e = X('1 hour');
		},
		l(n) {
			e = J(n, '1 hour');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function B_(s) {
	let e;
	return {
		c() {
			e = X('2 hours');
		},
		l(n) {
			e = J(n, '2 hours');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function K_(s) {
	let e;
	return {
		c() {
			e = X('4 hours');
		},
		l(n) {
			e = J(n, '4 hours');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function q_(s) {
	let e;
	return {
		c() {
			e = X('6 hours');
		},
		l(n) {
			e = J(n, '6 hours');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function H_(s) {
	let e;
	return {
		c() {
			e = X('12 hours');
		},
		l(n) {
			e = J(n, '12 hours');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function U_(s) {
	let e;
	return {
		c() {
			e = X('24 hours');
		},
		l(n) {
			e = J(n, '24 hours');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function W_(s) {
	let e, n, t, l, o, r, a, i, f, u, c, h, _, p, $, v, w, T, j, Y;
	return (
		(e = new Fe({ props: { value: '5m', $$slots: { default: [R_] }, $$scope: { ctx: s } } })),
		(t = new Fe({ props: { value: '10m', $$slots: { default: [L_] }, $$scope: { ctx: s } } })),
		(o = new Fe({ props: { value: '15m', $$slots: { default: [F_] }, $$scope: { ctx: s } } })),
		(a = new Fe({ props: { value: '30m', $$slots: { default: [j_] }, $$scope: { ctx: s } } })),
		(f = new Fe({ props: { value: '1h', $$slots: { default: [z_] }, $$scope: { ctx: s } } })),
		(c = new Fe({ props: { value: '2h', $$slots: { default: [B_] }, $$scope: { ctx: s } } })),
		(_ = new Fe({ props: { value: '4h', $$slots: { default: [K_] }, $$scope: { ctx: s } } })),
		($ = new Fe({ props: { value: '6h', $$slots: { default: [q_] }, $$scope: { ctx: s } } })),
		(w = new Fe({ props: { value: '12h', $$slots: { default: [H_] }, $$scope: { ctx: s } } })),
		(j = new Fe({ props: { value: '24h', $$slots: { default: [U_] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment),
					(n = L()),
					E(t.$$.fragment),
					(l = L()),
					E(o.$$.fragment),
					(r = L()),
					E(a.$$.fragment),
					(i = L()),
					E(f.$$.fragment),
					(u = L()),
					E(c.$$.fragment),
					(h = L()),
					E(_.$$.fragment),
					(p = L()),
					E($.$$.fragment),
					(v = L()),
					E(w.$$.fragment),
					(T = L()),
					E(j.$$.fragment);
			},
			l(V) {
				S(e.$$.fragment, V),
					(n = R(V)),
					S(t.$$.fragment, V),
					(l = R(V)),
					S(o.$$.fragment, V),
					(r = R(V)),
					S(a.$$.fragment, V),
					(i = R(V)),
					S(f.$$.fragment, V),
					(u = R(V)),
					S(c.$$.fragment, V),
					(h = R(V)),
					S(_.$$.fragment, V),
					(p = R(V)),
					S($.$$.fragment, V),
					(v = R(V)),
					S(w.$$.fragment, V),
					(T = R(V)),
					S(j.$$.fragment, V);
			},
			m(V, F) {
				C(e, V, F),
					b(V, n, F),
					C(t, V, F),
					b(V, l, F),
					C(o, V, F),
					b(V, r, F),
					C(a, V, F),
					b(V, i, F),
					C(f, V, F),
					b(V, u, F),
					C(c, V, F),
					b(V, h, F),
					C(_, V, F),
					b(V, p, F),
					C($, V, F),
					b(V, v, F),
					C(w, V, F),
					b(V, T, F),
					C(j, V, F),
					(Y = !0);
			},
			p(V, F) {
				const U = {};
				F & 256 && (U.$$scope = { dirty: F, ctx: V }), e.$set(U);
				const ne = {};
				F & 256 && (ne.$$scope = { dirty: F, ctx: V }), t.$set(ne);
				const oe = {};
				F & 256 && (oe.$$scope = { dirty: F, ctx: V }), o.$set(oe);
				const O = {};
				F & 256 && (O.$$scope = { dirty: F, ctx: V }), a.$set(O);
				const G = {};
				F & 256 && (G.$$scope = { dirty: F, ctx: V }), f.$set(G);
				const q = {};
				F & 256 && (q.$$scope = { dirty: F, ctx: V }), c.$set(q);
				const K = {};
				F & 256 && (K.$$scope = { dirty: F, ctx: V }), _.$set(K);
				const z = {};
				F & 256 && (z.$$scope = { dirty: F, ctx: V }), $.$set(z);
				const x = {};
				F & 256 && (x.$$scope = { dirty: F, ctx: V }), w.$set(x);
				const M = {};
				F & 256 && (M.$$scope = { dirty: F, ctx: V }), j.$set(M);
			},
			i(V) {
				Y ||
					(d(e.$$.fragment, V),
					d(t.$$.fragment, V),
					d(o.$$.fragment, V),
					d(a.$$.fragment, V),
					d(f.$$.fragment, V),
					d(c.$$.fragment, V),
					d(_.$$.fragment, V),
					d($.$$.fragment, V),
					d(w.$$.fragment, V),
					d(j.$$.fragment, V),
					(Y = !0));
			},
			o(V) {
				g(e.$$.fragment, V),
					g(t.$$.fragment, V),
					g(o.$$.fragment, V),
					g(a.$$.fragment, V),
					g(f.$$.fragment, V),
					g(c.$$.fragment, V),
					g(_.$$.fragment, V),
					g($.$$.fragment, V),
					g(w.$$.fragment, V),
					g(j.$$.fragment, V),
					(Y = !1);
			},
			d(V) {
				V && (m(n), m(l), m(r), m(i), m(u), m(h), m(p), m(v), m(T)),
					k(e, V),
					k(t, V),
					k(o, V),
					k(a, V),
					k(f, V),
					k(c, V),
					k(_, V),
					k($, V),
					k(w, V),
					k(j, V);
			}
		}
	);
}
function G_(s) {
	let e, n, t, l;
	return (
		(e = new xt({ props: { $$slots: { default: [V_] }, $$scope: { ctx: s } } })),
		(t = new Qt({ props: { $$slots: { default: [W_] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment), (n = L()), E(t.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o), (n = R(o)), S(t.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), b(o, n, r), C(t, o, r), (l = !0);
			},
			p(o, r) {
				const a = {};
				r & 260 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
				const i = {};
				r & 256 && (i.$$scope = { dirty: r, ctx: o }), t.$set(i);
			},
			i(o) {
				l || (d(e.$$.fragment, o), d(t.$$.fragment, o), (l = !0));
			},
			o(o) {
				g(e.$$.fragment, o), g(t.$$.fragment, o), (l = !1);
			},
			d(o) {
				o && m(n), k(e, o), k(t, o);
			}
		}
	);
}
function J_(s) {
	let e;
	return {
		c() {
			e = X('Backups');
		},
		l(n) {
			e = J(n, 'Backups');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function X_(s) {
	let e, n, t;
	function l(r) {
		s[6](r);
	}
	let o = { disabled: !0 };
	return (
		s[1] !== void 0 && (o.checked = s[1]),
		(e = new Bt({ props: o })),
		Ne.push(() => rt(e, 'checked', l)),
		{
			c() {
				E(e.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r);
			},
			m(r, a) {
				C(e, r, a), (t = !0);
			},
			p(r, a) {
				const i = {};
				!n && a & 2 && ((n = !0), (i.checked = r[1]), ot(() => (n = !1))), e.$set(i);
			},
			i(r) {
				t || (d(e.$$.fragment, r), (t = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (t = !1);
			},
			d(r) {
				k(e, r);
			}
		}
	);
}
function Y_(s) {
	let e;
	return {
		c() {
			e = X('Backup interval');
		},
		l(n) {
			e = J(n, 'Backup interval');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function Z_(s) {
	let e = s[3].label + '',
		n;
	return {
		c() {
			n = X(e);
		},
		l(t) {
			n = J(t, e);
		},
		m(t, l) {
			b(t, n, l);
		},
		p(t, l) {
			l & 8 && e !== (e = t[3].label + '') && at(n, e);
		},
		d(t) {
			t && m(n);
		}
	};
}
function Q_(s) {
	let e, n;
	return (
		(e = new en({
			props: {
				class: 'text-sm text-foreground/85',
				$$slots: { default: [Z_] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 264 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function x_(s) {
	let e;
	return {
		c() {
			e = X('1 week');
		},
		l(n) {
			e = J(n, '1 week');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function eg(s) {
	let e;
	return {
		c() {
			e = X('2 weeks');
		},
		l(n) {
			e = J(n, '2 weeks');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function tg(s) {
	let e;
	return {
		c() {
			e = X('1 month');
		},
		l(n) {
			e = J(n, '1 month');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function ng(s) {
	let e, n, t, l, o, r;
	return (
		(e = new Fe({ props: { value: '1w', $$slots: { default: [x_] }, $$scope: { ctx: s } } })),
		(t = new Fe({ props: { value: '2w', $$slots: { default: [eg] }, $$scope: { ctx: s } } })),
		(o = new Fe({ props: { value: '1m', $$slots: { default: [tg] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment), (n = L()), E(t.$$.fragment), (l = L()), E(o.$$.fragment);
			},
			l(a) {
				S(e.$$.fragment, a), (n = R(a)), S(t.$$.fragment, a), (l = R(a)), S(o.$$.fragment, a);
			},
			m(a, i) {
				C(e, a, i), b(a, n, i), C(t, a, i), b(a, l, i), C(o, a, i), (r = !0);
			},
			p(a, i) {
				const f = {};
				i & 256 && (f.$$scope = { dirty: i, ctx: a }), e.$set(f);
				const u = {};
				i & 256 && (u.$$scope = { dirty: i, ctx: a }), t.$set(u);
				const c = {};
				i & 256 && (c.$$scope = { dirty: i, ctx: a }), o.$set(c);
			},
			i(a) {
				r || (d(e.$$.fragment, a), d(t.$$.fragment, a), d(o.$$.fragment, a), (r = !0));
			},
			o(a) {
				g(e.$$.fragment, a), g(t.$$.fragment, a), g(o.$$.fragment, a), (r = !1);
			},
			d(a) {
				a && (m(n), m(l)), k(e, a), k(t, a), k(o, a);
			}
		}
	);
}
function lg(s) {
	let e, n, t, l;
	return (
		(e = new xt({ props: { $$slots: { default: [Q_] }, $$scope: { ctx: s } } })),
		(t = new Qt({ props: { $$slots: { default: [ng] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment), (n = L()), E(t.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o), (n = R(o)), S(t.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), b(o, n, r), C(t, o, r), (l = !0);
			},
			p(o, r) {
				const a = {};
				r & 264 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
				const i = {};
				r & 256 && (i.$$scope = { dirty: r, ctx: o }), t.$set(i);
			},
			i(o) {
				l || (d(e.$$.fragment, o), d(t.$$.fragment, o), (l = !0));
			},
			o(o) {
				g(e.$$.fragment, o), g(t.$$.fragment, o), (l = !1);
			},
			d(o) {
				o && m(n), k(e, o), k(t, o);
			}
		}
	);
}
function sg(s) {
	let e;
	return {
		c() {
			e = X('Backup now');
		},
		l(n) {
			e = J(n, 'Backup now');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function og(s) {
	let e,
		n,
		t,
		l,
		o,
		r = 'Automatically sync your notes.',
		a,
		i,
		f,
		u,
		c,
		h,
		_,
		p,
		$ = 'How often to sync your notes.',
		v,
		w,
		T,
		j,
		Y,
		V,
		F,
		U,
		ne,
		oe = 'Wheter or not to create scheduled backups.',
		O,
		G,
		q,
		K,
		z,
		x,
		M,
		H,
		W = 'How often to create backups of your notes.',
		Te,
		Pe,
		De,
		Ie,
		we,
		le,
		se;
	(t = new tt({ props: { class: 'text-sm', $$slots: { default: [I_] }, $$scope: { ctx: s } } })),
		(f = new ft({
			props: { text: 'Coming soon', $$slots: { default: [D_] }, $$scope: { ctx: s } }
		})),
		(h = new tt({ props: { class: 'text-sm', $$slots: { default: [y_] }, $$scope: { ctx: s } } }));
	function $e(A) {
		s[5](A);
	}
	let Ue = { disabled: !s[0], $$slots: { default: [G_] }, $$scope: { ctx: s } };
	s[2] !== void 0 && (Ue.selected = s[2]),
		(T = new Xt({ props: Ue })),
		Ne.push(() => rt(T, 'selected', $e)),
		(F = new tt({ props: { class: 'text-sm', $$slots: { default: [J_] }, $$scope: { ctx: s } } })),
		(q = new ft({
			props: { text: 'Coming soon', $$slots: { default: [X_] }, $$scope: { ctx: s } }
		})),
		(x = new tt({ props: { class: 'text-sm', $$slots: { default: [Y_] }, $$scope: { ctx: s } } }));
	function He(A) {
		s[7](A);
	}
	let ze = { disabled: !s[1], $$slots: { default: [lg] }, $$scope: { ctx: s } };
	return (
		s[3] !== void 0 && (ze.selected = s[3]),
		(De = new Xt({ props: ze })),
		Ne.push(() => rt(De, 'selected', He)),
		(le = new Qe({
			props: {
				variant: 'default',
				size: 'sm',
				class: 'h-7 text-primary-foreground/85 hover:text-primary-foreground text-sm font-normal',
				scale: 'sm',
				disabled: !s[1],
				$$slots: { default: [sg] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = y('div')),
					(n = y('div')),
					E(t.$$.fragment),
					(l = L()),
					(o = y('p')),
					(o.textContent = r),
					(a = L()),
					(i = y('div')),
					E(f.$$.fragment),
					(u = L()),
					(c = y('div')),
					E(h.$$.fragment),
					(_ = L()),
					(p = y('p')),
					(p.textContent = $),
					(v = L()),
					(w = y('div')),
					E(T.$$.fragment),
					(Y = L()),
					(V = y('div')),
					E(F.$$.fragment),
					(U = L()),
					(ne = y('p')),
					(ne.textContent = oe),
					(O = L()),
					(G = y('div')),
					E(q.$$.fragment),
					(K = L()),
					(z = y('div')),
					E(x.$$.fragment),
					(M = L()),
					(H = y('p')),
					(H.textContent = W),
					(Te = L()),
					(Pe = y('div')),
					E(De.$$.fragment),
					(we = L()),
					E(le.$$.fragment),
					this.h();
			},
			l(A) {
				e = D(A, 'DIV', { class: !0 });
				var Q = B(e);
				n = D(Q, 'DIV', { class: !0 });
				var Oe = B(n);
				S(t.$$.fragment, Oe),
					(l = R(Oe)),
					(o = D(Oe, 'P', { class: !0, 'data-svelte-h': !0 })),
					lt(o) !== 'svelte-1yu1p17' && (o.textContent = r),
					(a = R(Oe)),
					(i = D(Oe, 'DIV', { class: !0 }));
				var Re = B(i);
				S(f.$$.fragment, Re),
					Re.forEach(m),
					Oe.forEach(m),
					(u = R(Q)),
					(c = D(Q, 'DIV', { class: !0 }));
				var Le = B(c);
				S(h.$$.fragment, Le),
					(_ = R(Le)),
					(p = D(Le, 'P', { class: !0, 'data-svelte-h': !0 })),
					lt(p) !== 'svelte-ro757h' && (p.textContent = $),
					(v = R(Le)),
					(w = D(Le, 'DIV', { class: !0 }));
				var Me = B(w);
				S(T.$$.fragment, Me),
					Me.forEach(m),
					Le.forEach(m),
					(Y = R(Q)),
					(V = D(Q, 'DIV', { class: !0 }));
				var Xe = B(V);
				S(F.$$.fragment, Xe),
					(U = R(Xe)),
					(ne = D(Xe, 'P', { class: !0, 'data-svelte-h': !0 })),
					lt(ne) !== 'svelte-1yks4d5' && (ne.textContent = oe),
					(O = R(Xe)),
					(G = D(Xe, 'DIV', { class: !0 }));
				var Je = B(G);
				S(q.$$.fragment, Je),
					Je.forEach(m),
					Xe.forEach(m),
					(K = R(Q)),
					(z = D(Q, 'DIV', { class: !0 }));
				var We = B(z);
				S(x.$$.fragment, We),
					(M = R(We)),
					(H = D(We, 'P', { class: !0, 'data-svelte-h': !0 })),
					lt(H) !== 'svelte-10tebei' && (H.textContent = W),
					(Te = R(We)),
					(Pe = D(We, 'DIV', { class: !0 }));
				var Be = B(Pe);
				S(De.$$.fragment, Be),
					(we = R(Be)),
					S(le.$$.fragment, Be),
					Be.forEach(m),
					We.forEach(m),
					Q.forEach(m),
					this.h();
			},
			h() {
				P(o, 'class', 'text-muted-foreground text-xs'),
					P(i, 'class', 'flex items-center gap-2 pt-2'),
					P(n, 'class', 'space-y-1'),
					P(p, 'class', 'text-muted-foreground text-xs'),
					P(w, 'class', 'flex items-center gap-2 pt-2'),
					P(c, 'class', 'space-y-1'),
					P(ne, 'class', 'text-muted-foreground text-xs'),
					P(G, 'class', 'flex items-center gap-2 pt-2'),
					P(V, 'class', 'space-y-1'),
					P(H, 'class', 'text-muted-foreground text-xs'),
					P(Pe, 'class', 'flex items-center gap-2 pt-2'),
					P(z, 'class', 'space-y-1'),
					P(e, 'class', 'space-y-5');
			},
			m(A, Q) {
				b(A, e, Q),
					N(e, n),
					C(t, n, null),
					N(n, l),
					N(n, o),
					N(n, a),
					N(n, i),
					C(f, i, null),
					N(e, u),
					N(e, c),
					C(h, c, null),
					N(c, _),
					N(c, p),
					N(c, v),
					N(c, w),
					C(T, w, null),
					N(e, Y),
					N(e, V),
					C(F, V, null),
					N(V, U),
					N(V, ne),
					N(V, O),
					N(V, G),
					C(q, G, null),
					N(e, K),
					N(e, z),
					C(x, z, null),
					N(z, M),
					N(z, H),
					N(z, Te),
					N(z, Pe),
					C(De, Pe, null),
					N(Pe, we),
					C(le, Pe, null),
					(se = !0);
			},
			p(A, [Q]) {
				const Oe = {};
				Q & 256 && (Oe.$$scope = { dirty: Q, ctx: A }), t.$set(Oe);
				const Re = {};
				Q & 257 && (Re.$$scope = { dirty: Q, ctx: A }), f.$set(Re);
				const Le = {};
				Q & 256 && (Le.$$scope = { dirty: Q, ctx: A }), h.$set(Le);
				const Me = {};
				Q & 1 && (Me.disabled = !A[0]),
					Q & 260 && (Me.$$scope = { dirty: Q, ctx: A }),
					!j && Q & 4 && ((j = !0), (Me.selected = A[2]), ot(() => (j = !1))),
					T.$set(Me);
				const Xe = {};
				Q & 256 && (Xe.$$scope = { dirty: Q, ctx: A }), F.$set(Xe);
				const Je = {};
				Q & 258 && (Je.$$scope = { dirty: Q, ctx: A }), q.$set(Je);
				const We = {};
				Q & 256 && (We.$$scope = { dirty: Q, ctx: A }), x.$set(We);
				const Be = {};
				Q & 2 && (Be.disabled = !A[1]),
					Q & 264 && (Be.$$scope = { dirty: Q, ctx: A }),
					!Ie && Q & 8 && ((Ie = !0), (Be.selected = A[3]), ot(() => (Ie = !1))),
					De.$set(Be);
				const Ye = {};
				Q & 2 && (Ye.disabled = !A[1]), Q & 256 && (Ye.$$scope = { dirty: Q, ctx: A }), le.$set(Ye);
			},
			i(A) {
				se ||
					(d(t.$$.fragment, A),
					d(f.$$.fragment, A),
					d(h.$$.fragment, A),
					d(T.$$.fragment, A),
					d(F.$$.fragment, A),
					d(q.$$.fragment, A),
					d(x.$$.fragment, A),
					d(De.$$.fragment, A),
					d(le.$$.fragment, A),
					(se = !0));
			},
			o(A) {
				g(t.$$.fragment, A),
					g(f.$$.fragment, A),
					g(h.$$.fragment, A),
					g(T.$$.fragment, A),
					g(F.$$.fragment, A),
					g(q.$$.fragment, A),
					g(x.$$.fragment, A),
					g(De.$$.fragment, A),
					g(le.$$.fragment, A),
					(se = !1);
			},
			d(A) {
				A && m(e), k(t), k(f), k(h), k(T), k(F), k(q), k(x), k(De), k(le);
			}
		}
	);
}
function rg(s, e, n) {
	let t = !1,
		l = !1,
		o = { value: '5m', label: '5 minutes' },
		r = { value: '1w', label: '1 week' };
	function a(c) {
		(t = c), n(0, t);
	}
	function i(c) {
		(o = c), n(2, o);
	}
	function f(c) {
		(l = c), n(1, l);
	}
	function u(c) {
		(r = c), n(3, r);
	}
	return [t, l, o, r, a, i, f, u];
}
class ig extends he {
	constructor(e) {
		super(), pe(this, e, rg, og, me, {});
	}
}
function Os(s, e, n) {
	const t = s.slice();
	return (t[6] = e[n]), t;
}
function Ns(s, e, n) {
	const t = s.slice();
	return (t[9] = e[n]), t;
}
function Ps(s, e, n) {
	const t = s.slice();
	return (t[6] = e[n]), t;
}
function Is(s, e, n) {
	const t = s.slice();
	return (t[9] = e[n]), t;
}
function ag(s) {
	let e, n, t, l;
	return (
		(e = new Do({ props: { options: qe['app:settings'] } })),
		(t = new Ke({ props: { name: 'settings', class: 'w-[18px] h-[18px]' } })),
		{
			c() {
				E(e.$$.fragment), (n = L()), E(t.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o), (n = R(o)), S(t.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), b(o, n, r), C(t, o, r), (l = !0);
			},
			p: Se,
			i(o) {
				l || (d(e.$$.fragment, o), d(t.$$.fragment, o), (l = !0));
			},
			o(o) {
				g(e.$$.fragment, o), g(t.$$.fragment, o), (l = !1);
			},
			d(o) {
				o && m(n), k(e, o), k(t, o);
			}
		}
	);
}
function fg(s) {
	let e, n;
	return (
		(e = new Qe({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: 'h-7 w-7 fill-muted-foreground hover:fill-foreground',
				scale: 'md',
				$$slots: { default: [ag] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 65536 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function ug(s) {
	let e = s[6] + '',
		n;
	return {
		c() {
			n = X(e);
		},
		l(t) {
			n = J(t, e);
		},
		m(t, l) {
			b(t, n, l);
		},
		p: Se,
		d(t) {
			t && m(n);
		}
	};
}
function cg(s) {
	let e,
		n,
		t = s[9].name + '',
		l,
		o,
		r;
	return (
		(e = new Ke({ props: { name: s[9].icon, class: 'w-4 h-4' } })),
		{
			c() {
				E(e.$$.fragment), (n = L()), (l = X(t)), (o = L());
			},
			l(a) {
				S(e.$$.fragment, a), (n = R(a)), (l = J(a, t)), (o = R(a));
			},
			m(a, i) {
				C(e, a, i), b(a, n, i), b(a, l, i), b(a, o, i), (r = !0);
			},
			p: Se,
			i(a) {
				r || (d(e.$$.fragment, a), (r = !0));
			},
			o(a) {
				g(e.$$.fragment, a), (r = !1);
			},
			d(a) {
				a && (m(n), m(l), m(o)), k(e, a);
			}
		}
	);
}
function Ds(s) {
	let e, n;
	return (
		(e = new qd({
			props: {
				value: s[9].name.toLocaleLowerCase(),
				class:
					'w-full h-7 rounded-lg px-3 hover:bg-accent hover:text-accent-foreground transition-transform active:scale-[98%] data-[state=active]:bg-accent text-foreground data-[state=active]:fill-foreground fill-muted-foreground/80 text-foreground/70 hover:fill-foreground items-center justify-start gap-2 text-sm font-normal',
				$$slots: { default: [cg] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 65536 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function dg(s) {
	let e,
		n,
		t = Ze(s[2][s[6]]),
		l = [];
	for (let r = 0; r < t.length; r += 1) l[r] = Ds(Is(s, t, r));
	const o = (r) =>
		g(l[r], 1, 1, () => {
			l[r] = null;
		});
	return {
		c() {
			for (let r = 0; r < l.length; r += 1) l[r].c();
			e = te();
		},
		l(r) {
			for (let a = 0; a < l.length; a += 1) l[a].l(r);
			e = te();
		},
		m(r, a) {
			for (let i = 0; i < l.length; i += 1) l[i] && l[i].m(r, a);
			b(r, e, a), (n = !0);
		},
		p(r, a) {
			if (a & 4) {
				t = Ze(r[2][r[6]]);
				let i;
				for (i = 0; i < t.length; i += 1) {
					const f = Is(r, t, i);
					l[i]
						? (l[i].p(f, a), d(l[i], 1))
						: ((l[i] = Ds(f)), l[i].c(), d(l[i], 1), l[i].m(e.parentNode, e));
				}
				for (Ce(), i = t.length; i < l.length; i += 1) o(i);
				Ee();
			}
		},
		i(r) {
			if (!n) {
				for (let a = 0; a < t.length; a += 1) d(l[a]);
				n = !0;
			}
		},
		o(r) {
			l = l.filter(Boolean);
			for (let a = 0; a < l.length; a += 1) g(l[a]);
			n = !1;
		},
		d(r) {
			r && m(e), vt(l, r);
		}
	};
}
function mg(s) {
	let e, n;
	return (
		(e = new Id({})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function ys(s) {
	let e,
		n,
		t,
		l,
		o,
		r = s[6] !== Object.keys(s[2])[Object.keys(s[2]).length - 1],
		a,
		i;
	(n = new tt({
		props: {
			class: 'text-foreground/70 text-xs pl-2',
			$$slots: { default: [ug] },
			$$scope: { ctx: s }
		}
	})),
		(l = new jd({
			props: {
				class: 'flex items-center justify-start flex-col w-full h-fit bg-transparent p-0 gap-1.5',
				$$slots: { default: [dg] },
				$$scope: { ctx: s }
			}
		}));
	let f = r && mg();
	return {
		c() {
			(e = y('div')),
				E(n.$$.fragment),
				(t = L()),
				E(l.$$.fragment),
				(o = L()),
				f && f.c(),
				(a = te()),
				this.h();
		},
		l(u) {
			e = D(u, 'DIV', { class: !0 });
			var c = B(e);
			S(n.$$.fragment, c),
				(t = R(c)),
				S(l.$$.fragment, c),
				c.forEach(m),
				(o = R(u)),
				f && f.l(u),
				(a = te()),
				this.h();
		},
		h() {
			P(e, 'class', 'flex flex-col items-start gap-2 w-full');
		},
		m(u, c) {
			b(u, e, c),
				C(n, e, null),
				N(e, t),
				C(l, e, null),
				b(u, o, c),
				f && f.m(u, c),
				b(u, a, c),
				(i = !0);
		},
		p(u, c) {
			const h = {};
			c & 65536 && (h.$$scope = { dirty: c, ctx: u }), n.$set(h);
			const _ = {};
			c & 65536 && (_.$$scope = { dirty: c, ctx: u }), l.$set(_);
		},
		i(u) {
			i || (d(n.$$.fragment, u), d(l.$$.fragment, u), d(f), (i = !0));
		},
		o(u) {
			g(n.$$.fragment, u), g(l.$$.fragment, u), g(f), (i = !1);
		},
		d(u) {
			u && (m(e), m(o), m(a)), k(n), k(l), f && f.d(u);
		}
	};
}
function _g(s) {
	let e,
		n,
		t = s[9].name + '',
		l,
		o,
		r,
		a,
		i;
	var f = s[9].content;
	function u(c, h) {
		return {};
	}
	return (
		f && (r = fl(f, u())),
		{
			c() {
				(e = y('div')),
					(n = y('h1')),
					(l = X(t)),
					(o = L()),
					r && E(r.$$.fragment),
					(a = L()),
					this.h();
			},
			l(c) {
				e = D(c, 'DIV', { class: !0 });
				var h = B(e);
				n = D(h, 'H1', { class: !0 });
				var _ = B(n);
				(l = J(_, t)),
					_.forEach(m),
					(o = R(h)),
					r && S(r.$$.fragment, h),
					h.forEach(m),
					(a = R(c)),
					this.h();
			},
			h() {
				P(n, 'class', 'text-lg font-medium'),
					P(e, 'class', 'flex flex-col items-start justify-start h-full w-full gap-3 px-1');
			},
			m(c, h) {
				b(c, e, h), N(e, n), N(n, l), N(e, o), r && C(r, e, null), b(c, a, h), (i = !0);
			},
			p(c, h) {
				if (f !== (f = c[9].content)) {
					if (r) {
						Ce();
						const _ = r;
						g(_.$$.fragment, 1, 0, () => {
							k(_, 1);
						}),
							Ee();
					}
					f ? ((r = fl(f, u())), E(r.$$.fragment), d(r.$$.fragment, 1), C(r, e, null)) : (r = null);
				}
			},
			i(c) {
				i || (r && d(r.$$.fragment, c), (i = !0));
			},
			o(c) {
				r && g(r.$$.fragment, c), (i = !1);
			},
			d(c) {
				c && (m(e), m(a)), r && k(r);
			}
		}
	);
}
function Ms(s) {
	let e, n;
	return (
		(e = new Vd({
			props: {
				value: s[9].name.toLocaleLowerCase(),
				class: 'w-full h-full -mt-2.5 overflow-y-auto pb-10',
				$$slots: { default: [_g] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 65536 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Vs(s) {
	let e,
		n,
		t = Ze(s[2][s[6]]),
		l = [];
	for (let r = 0; r < t.length; r += 1) l[r] = Ms(Ns(s, t, r));
	const o = (r) =>
		g(l[r], 1, 1, () => {
			l[r] = null;
		});
	return {
		c() {
			for (let r = 0; r < l.length; r += 1) l[r].c();
			e = te();
		},
		l(r) {
			for (let a = 0; a < l.length; a += 1) l[a].l(r);
			e = te();
		},
		m(r, a) {
			for (let i = 0; i < l.length; i += 1) l[i] && l[i].m(r, a);
			b(r, e, a), (n = !0);
		},
		p(r, a) {
			if (a & 4) {
				t = Ze(r[2][r[6]]);
				let i;
				for (i = 0; i < t.length; i += 1) {
					const f = Ns(r, t, i);
					l[i]
						? (l[i].p(f, a), d(l[i], 1))
						: ((l[i] = Ms(f)), l[i].c(), d(l[i], 1), l[i].m(e.parentNode, e));
				}
				for (Ce(), i = t.length; i < l.length; i += 1) o(i);
				Ee();
			}
		},
		i(r) {
			if (!n) {
				for (let a = 0; a < t.length; a += 1) d(l[a]);
				n = !0;
			}
		},
		o(r) {
			l = l.filter(Boolean);
			for (let a = 0; a < l.length; a += 1) g(l[a]);
			n = !1;
		},
		d(r) {
			r && m(e), vt(l, r);
		}
	};
}
function gg(s) {
	let e,
		n,
		t,
		l,
		o = Ze(Object.keys(s[2])),
		r = [];
	for (let c = 0; c < o.length; c += 1) r[c] = ys(Ps(s, o, c));
	const a = (c) =>
		g(r[c], 1, 1, () => {
			r[c] = null;
		});
	let i = Ze(Object.keys(s[2])),
		f = [];
	for (let c = 0; c < i.length; c += 1) f[c] = Vs(Os(s, i, c));
	const u = (c) =>
		g(f[c], 1, 1, () => {
			f[c] = null;
		});
	return {
		c() {
			e = y('div');
			for (let c = 0; c < r.length; c += 1) r[c].c();
			(n = L()), (t = y('div'));
			for (let c = 0; c < f.length; c += 1) f[c].c();
			this.h();
		},
		l(c) {
			e = D(c, 'DIV', { class: !0 });
			var h = B(e);
			for (let p = 0; p < r.length; p += 1) r[p].l(h);
			h.forEach(m), (n = R(c)), (t = D(c, 'DIV', { class: !0 }));
			var _ = B(t);
			for (let p = 0; p < f.length; p += 1) f[p].l(_);
			_.forEach(m), this.h();
		},
		h() {
			P(e, 'class', 'flex flex-col items-center gap-4 h-full justify-start min-w-[160px]'),
				P(t, 'class', 'flex flex-col items-center justify-center gap-2 h-full w-2/4');
		},
		m(c, h) {
			b(c, e, h);
			for (let _ = 0; _ < r.length; _ += 1) r[_] && r[_].m(e, null);
			b(c, n, h), b(c, t, h);
			for (let _ = 0; _ < f.length; _ += 1) f[_] && f[_].m(t, null);
			l = !0;
		},
		p(c, h) {
			if (h & 4) {
				o = Ze(Object.keys(c[2]));
				let _;
				for (_ = 0; _ < o.length; _ += 1) {
					const p = Ps(c, o, _);
					r[_]
						? (r[_].p(p, h), d(r[_], 1))
						: ((r[_] = ys(p)), r[_].c(), d(r[_], 1), r[_].m(e, null));
				}
				for (Ce(), _ = o.length; _ < r.length; _ += 1) a(_);
				Ee();
			}
			if (h & 4) {
				i = Ze(Object.keys(c[2]));
				let _;
				for (_ = 0; _ < i.length; _ += 1) {
					const p = Os(c, i, _);
					f[_]
						? (f[_].p(p, h), d(f[_], 1))
						: ((f[_] = Vs(p)), f[_].c(), d(f[_], 1), f[_].m(t, null));
				}
				for (Ce(), _ = i.length; _ < f.length; _ += 1) u(_);
				Ee();
			}
		},
		i(c) {
			if (!l) {
				for (let h = 0; h < o.length; h += 1) d(r[h]);
				for (let h = 0; h < i.length; h += 1) d(f[h]);
				l = !0;
			}
		},
		o(c) {
			r = r.filter(Boolean);
			for (let h = 0; h < r.length; h += 1) g(r[h]);
			f = f.filter(Boolean);
			for (let h = 0; h < f.length; h += 1) g(f[h]);
			l = !1;
		},
		d(c) {
			c && (m(e), m(n), m(t)), vt(r, c), vt(f, c);
		}
	};
}
function hg(s) {
	let e, n;
	return (
		(e = new Hd({
			props: {
				value: s[0],
				onValueChange: s[4],
				class: 'flex items-center justify-center h-full w-full gap-10',
				$$slots: { default: [gg] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 1 && (o.value = t[0]), l & 65536 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function pg(s) {
	let e, n, t, l;
	return (
		(e = new Od({ props: { $$slots: { default: [fg] }, $$scope: { ctx: s } } })),
		(t = new Ho({
			props: {
				class:
					'flex items-center justify-center !w-[90%] !h-[90%] !top-[5%] !right-[5%] !bottom-[5%] !left-[5%] pt-16',
				$$slots: { default: [hg] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment), (n = L()), E(t.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o), (n = R(o)), S(t.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), b(o, n, r), C(t, o, r), (l = !0);
			},
			p(o, r) {
				const a = {};
				r & 65536 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
				const i = {};
				r & 65537 && (i.$$scope = { dirty: r, ctx: o }), t.$set(i);
			},
			i(o) {
				l || (d(e.$$.fragment, o), d(t.$$.fragment, o), (l = !0));
			},
			o(o) {
				g(e.$$.fragment, o), g(t.$$.fragment, o), (l = !1);
			},
			d(o) {
				o && m(n), k(e, o), k(t, o);
			}
		}
	);
}
function $g(s) {
	let e, n;
	return (
		(e = new Uo({
			props: { open: s[1], onOpenChange: s[5], $$slots: { default: [pg] }, $$scope: { ctx: s } }
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, [l]) {
				const o = {};
				l & 2 && (o.open = t[1]), l & 65537 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function bg(s, e, n) {
	let t, l, o;
	Ae(s, bn, (f) => n(3, (o = f)));
	const r = {
			App: [
				{ name: 'General', icon: 'settingsSolid', content: P_ },
				{ name: 'Appearance', icon: 'opactiySolid', content: Nm },
				{ name: 'Editor', icon: 'editPencilSolid', content: f_ }
			],
			Syncronization: [{ name: 'Typyst Sync', icon: 'cloudSolid', content: ig }]
		},
		a = (f) => {
			bn.update((u) => ((u.activePage = f ?? 'general'), u));
		},
		i = (f) => {
			bn.set({ isOpen: f, activePage: 'general' });
		};
	return (
		(s.$$.update = () => {
			s.$$.dirty & 8 && n(1, ({ isOpen: t, activePage: l } = o), t, (n(0, l), n(3, o)));
		}),
		[l, t, r, o, a, i]
	);
}
class vg extends he {
	constructor(e) {
		super(), pe(this, e, bg, $g, me, {});
	}
}
function kg(s) {
	let e, n;
	return (
		(e = new Ke({ props: { name: 'inboxFull', class: 'w-[18px] h-[18px]' } })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p: Se,
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Cg(s) {
	let e, n, t;
	return (
		(n = new Qe({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: be(
					'h-7 w-7 fill-muted-foreground hover:fill-foreground transition-all',
					s[0] === 'notes' && 'fill-foreground bg-accent'
				),
				scale: 'md',
				$$slots: { default: [kg] },
				$$scope: { ctx: s }
			}
		})),
		n.$on('click', s[1]),
		{
			c() {
				(e = y('a')), E(n.$$.fragment), this.h();
			},
			l(l) {
				e = D(l, 'A', { href: !0 });
				var o = B(e);
				S(n.$$.fragment, o), o.forEach(m), this.h();
			},
			h() {
				P(e, 'href', '/notes');
			},
			m(l, o) {
				b(l, e, o), C(n, e, null), (t = !0);
			},
			p(l, o) {
				const r = {};
				o & 1 &&
					(r.class = be(
						'h-7 w-7 fill-muted-foreground hover:fill-foreground transition-all',
						l[0] === 'notes' && 'fill-foreground bg-accent'
					)),
					o & 32 && (r.$$scope = { dirty: o, ctx: l }),
					n.$set(r);
			},
			i(l) {
				t || (d(n.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(n.$$.fragment, l), (t = !1);
			},
			d(l) {
				l && m(e), k(n);
			}
		}
	);
}
function Eg(s) {
	let e, n;
	return (
		(e = new Ke({ props: { name: 'calendarEdit', class: 'w-[18px] h-[18px]' } })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p: Se,
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Sg(s) {
	let e, n, t;
	return (
		(n = new Qe({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: be(
					'h-7 w-7 fill-muted-foreground hover:fill-foreground transition-all',
					s[0] === 'daily' && 'fill-foreground bg-accent'
				),
				scale: 'md',
				$$slots: { default: [Eg] },
				$$scope: { ctx: s }
			}
		})),
		n.$on('click', s[2]),
		{
			c() {
				(e = y('a')), E(n.$$.fragment), this.h();
			},
			l(l) {
				e = D(l, 'A', { href: !0 });
				var o = B(e);
				S(n.$$.fragment, o), o.forEach(m), this.h();
			},
			h() {
				P(e, 'href', '/daily');
			},
			m(l, o) {
				b(l, e, o), C(n, e, null), (t = !0);
			},
			p(l, o) {
				const r = {};
				o & 1 &&
					(r.class = be(
						'h-7 w-7 fill-muted-foreground hover:fill-foreground transition-all',
						l[0] === 'daily' && 'fill-foreground bg-accent'
					)),
					o & 32 && (r.$$scope = { dirty: o, ctx: l }),
					n.$set(r);
			},
			i(l) {
				t || (d(n.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(n.$$.fragment, l), (t = !1);
			},
			d(l) {
				l && m(e), k(n);
			}
		}
	);
}
function wg(s) {
	let e, n;
	return (
		(e = new Ke({ props: { name: 'checkSquare', class: 'w-[18px] h-[18px]' } })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p: Se,
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Tg(s) {
	let e, n, t;
	return (
		(n = new Qe({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: be(
					'h-7 w-7 fill-muted-foreground hover:fill-foreground transition-all',
					s[0] === 'tasks' && 'fill-foreground bg-accent'
				),
				scale: 'md',
				$$slots: { default: [wg] },
				$$scope: { ctx: s }
			}
		})),
		n.$on('click', s[3]),
		{
			c() {
				(e = y('a')), E(n.$$.fragment), this.h();
			},
			l(l) {
				e = D(l, 'A', { href: !0 });
				var o = B(e);
				S(n.$$.fragment, o), o.forEach(m), this.h();
			},
			h() {
				P(e, 'href', 'tasks');
			},
			m(l, o) {
				b(l, e, o), C(n, e, null), (t = !0);
			},
			p(l, o) {
				const r = {};
				o & 1 &&
					(r.class = be(
						'h-7 w-7 fill-muted-foreground hover:fill-foreground transition-all',
						l[0] === 'tasks' && 'fill-foreground bg-accent'
					)),
					o & 32 && (r.$$scope = { dirty: o, ctx: l }),
					n.$set(r);
			},
			i(l) {
				t || (d(n.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(n.$$.fragment, l), (t = !1);
			},
			d(l) {
				l && m(e), k(n);
			}
		}
	);
}
function Ag(s) {
	let e, n, t, l;
	return (
		(e = new Ke({ props: { name: 'folder', class: 'w-[18px] h-[18px] group-hover:hidden' } })),
		(t = new Ke({
			props: { name: 'folderOpen', class: 'w-[18px] h-[18px] hidden group-hover:block' }
		})),
		{
			c() {
				E(e.$$.fragment), (n = L()), E(t.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o), (n = R(o)), S(t.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), b(o, n, r), C(t, o, r), (l = !0);
			},
			p: Se,
			i(o) {
				l || (d(e.$$.fragment, o), d(t.$$.fragment, o), (l = !0));
			},
			o(o) {
				g(e.$$.fragment, o), g(t.$$.fragment, o), (l = !1);
			},
			d(o) {
				o && m(n), k(e, o), k(t, o);
			}
		}
	);
}
function Og(s) {
	let e, n;
	return (
		(e = new Qe({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: 'h-7 w-7 fill-muted-foreground hover:fill-foreground group relative',
				scale: 'md',
				$$slots: { default: [Ag] },
				$$scope: { ctx: s }
			}
		})),
		e.$on('click', s[4]),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 32 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Ng(s) {
	let e, n;
	return (
		(e = new vg({})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Pg(s) {
	let e, n, t, l, o, r, a, i, f, u, c, h, _;
	return (
		(t = new ft({
			props: { text: 'Notes', side: 'right', $$slots: { default: [Cg] }, $$scope: { ctx: s } }
		})),
		(o = new ft({
			props: { text: 'Daily desk', side: 'right', $$slots: { default: [Sg] }, $$scope: { ctx: s } }
		})),
		(a = new ft({
			props: { text: 'Tasks', side: 'right', $$slots: { default: [Tg] }, $$scope: { ctx: s } }
		})),
		(u = new ft({
			props: {
				text: 'Open collection',
				side: 'right',
				shortcut: qe['app:open-collection'],
				$$slots: { default: [Og] },
				$$scope: { ctx: s }
			}
		})),
		(h = new ft({
			props: {
				text: 'Settings',
				side: 'right',
				shortcut: qe['app:settings'],
				$$slots: { default: [Ng] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = y('div')),
					(n = y('div')),
					E(t.$$.fragment),
					(l = L()),
					E(o.$$.fragment),
					(r = L()),
					E(a.$$.fragment),
					(i = L()),
					(f = y('div')),
					E(u.$$.fragment),
					(c = L()),
					E(h.$$.fragment),
					this.h();
			},
			l(p) {
				e = D(p, 'DIV', { class: !0 });
				var $ = B(e);
				n = D($, 'DIV', { class: !0 });
				var v = B(n);
				S(t.$$.fragment, v),
					(l = R(v)),
					S(o.$$.fragment, v),
					(r = R(v)),
					S(a.$$.fragment, v),
					v.forEach(m),
					(i = R($)),
					(f = D($, 'DIV', { class: !0 }));
				var w = B(f);
				S(u.$$.fragment, w), (c = R(w)), S(h.$$.fragment, w), w.forEach(m), $.forEach(m), this.h();
			},
			h() {
				P(n, 'class', 'flex flex-col items-center gap-2'),
					P(f, 'class', 'flex flex-col items-center gap-2'),
					P(
						e,
						'class',
						'fixed left-0 h-full flex flex-col justify-between items-center w-12 py-12 border-r z-10 bg-background'
					);
			},
			m(p, $) {
				b(p, e, $),
					N(e, n),
					C(t, n, null),
					N(n, l),
					C(o, n, null),
					N(n, r),
					C(a, n, null),
					N(e, i),
					N(e, f),
					C(u, f, null),
					N(f, c),
					C(h, f, null),
					(_ = !0);
			},
			p(p, [$]) {
				const v = {};
				$ & 33 && (v.$$scope = { dirty: $, ctx: p }), t.$set(v);
				const w = {};
				$ & 33 && (w.$$scope = { dirty: $, ctx: p }), o.$set(w);
				const T = {};
				$ & 33 && (T.$$scope = { dirty: $, ctx: p }), a.$set(T);
				const j = {};
				$ & 32 && (j.$$scope = { dirty: $, ctx: p }), u.$set(j);
				const Y = {};
				$ & 32 && (Y.$$scope = { dirty: $, ctx: p }), h.$set(Y);
			},
			i(p) {
				_ ||
					(d(t.$$.fragment, p),
					d(o.$$.fragment, p),
					d(a.$$.fragment, p),
					d(u.$$.fragment, p),
					d(h.$$.fragment, p),
					(_ = !0));
			},
			o(p) {
				g(t.$$.fragment, p),
					g(o.$$.fragment, p),
					g(a.$$.fragment, p),
					g(u.$$.fragment, p),
					g(h.$$.fragment, p),
					(_ = !1);
			},
			d(p) {
				p && m(e), k(t), k(o), k(a), k(u), k(h);
			}
		}
	);
}
function Ig(s, e, n) {
	let t = 'notes';
	return (
		$i.subscribe((i) => {
			const f = i.url.pathname;
			(f === '/notes' || f === '/daily' || f === '/tasks') && n(0, (t = f.slice(1)));
		}),
		[
			t,
			() => n(0, (t = 'notes')),
			() => n(0, (t = 'daily')),
			() => n(0, (t = 'tasks')),
			() => {
				document.dispatchEvent(new KeyboardEvent('keydown', { key: 'o', metaKey: !0 }));
			}
		]
	);
}
class Dg extends he {
	constructor(e) {
		super(), pe(this, e, Ig, Pg, me, {});
	}
}
const Rs = 1,
	yg = 0.9,
	Mg = 0.8,
	Vg = 0.17,
	Wn = 0.1,
	Gn = 0.999,
	Rg = 0.9999,
	Lg = 0.99,
	Fg = /[\\/_+.#"@[({&]/,
	jg = /[\\/_+.#"@[({&]/g,
	zg = /[\s-]/,
	Wo = /[\s-]/g;
function xn(s, e, n, t, l, o, r) {
	if (o === e.length) return l === s.length ? Rs : Lg;
	const a = `${l},${o}`;
	if (r[a] !== void 0) return r[a];
	const i = t.charAt(o);
	let f = n.indexOf(i, l),
		u = 0,
		c,
		h,
		_,
		p;
	for (; f >= 0; )
		(c = xn(s, e, n, t, f + 1, o + 1, r)),
			c > u &&
				(f === l
					? (c *= Rs)
					: Fg.test(s.charAt(f - 1))
						? ((c *= Mg),
							(_ = s.slice(l, f - 1).match(jg)),
							_ && l > 0 && (c *= Math.pow(Gn, _.length)))
						: zg.test(s.charAt(f - 1))
							? ((c *= yg),
								(p = s.slice(l, f - 1).match(Wo)),
								p && l > 0 && (c *= Math.pow(Gn, p.length)))
							: ((c *= Vg), l > 0 && (c *= Math.pow(Gn, f - l))),
				s.charAt(f) !== e.charAt(o) && (c *= Rg)),
			((c < Wn && n.charAt(f - 1) === t.charAt(o + 1)) ||
				(t.charAt(o + 1) === t.charAt(o) && n.charAt(f - 1) !== t.charAt(o))) &&
				((h = xn(s, e, n, t, f + 1, o + 2, r)), h * Wn > c && (c = h * Wn)),
			c > u && (u = c),
			(f = n.indexOf(i, f + 1));
	return (r[a] = u), u;
}
function Ls(s) {
	return s.toLowerCase().replace(Wo, ' ');
}
function Bg(s, e) {
	return xn(s, e, Ls(s), Ls(e), 0, 0, {});
}
const Kg = typeof document < 'u';
function zt(s) {
	return s instanceof HTMLElement;
}
function qg(s) {
	return s instanceof HTMLInputElement;
}
function ol(s) {
	return s === void 0;
}
function bt() {
	return Dr(10);
}
const pn = {
	ARROW_DOWN: 'ArrowDown',
	ARROW_UP: 'ArrowUp',
	END: 'End',
	ENTER: 'Enter',
	HOME: 'Home'
};
function Hg(s, ...e) {
	const n = {};
	for (const t of Object.keys(s)) e.includes(t) || (n[t] = s[t]);
	return n;
}
function Go(s) {
	const e = {};
	for (const n in s) {
		const t = s[n];
		t !== void 0 && (e[n] = t);
	}
	return e;
}
function Ug(s) {
	const e = {};
	return (
		Object.keys(s).forEach((n) => {
			const t = n,
				l = s[t];
			e[t] = ct(l);
		}),
		e
	);
}
function Wg(s) {
	return Object.keys(s).reduce((e, n) => (s[n] === void 0 ? e : e + `${n}:${s[n]};`), '');
}
const Gg = {
	position: 'absolute',
	width: '1px',
	height: '1px',
	padding: '0',
	margin: '-1px',
	overflow: 'hidden',
	clip: 'rect(0, 0, 0, 0)',
	whiteSpace: 'nowrap',
	borderWidth: '0'
};
function Vn(s, e, n, t) {
	const l = Array.isArray(e) ? e : [e];
	return (
		l.forEach((o) => s.addEventListener(o, n, t)),
		() => {
			l.forEach((o) => s.removeEventListener(o, n, t));
		}
	);
}
function Jo(...s) {
	return (...e) => {
		for (const n of s) typeof n == 'function' && n(...e);
	};
}
const Xo = 'Command',
	Yo = 'CommandState',
	Zo = 'CommandGroup',
	Jg = '[data-cmdk-list-sizer]',
	$n = '[data-cmdk-group]',
	Fs = '[data-cmdk-group-items]',
	Xg = '[data-cmdk-group-heading]',
	Qo = '[data-cmdk-item]',
	Jn = `${Qo}:not([aria-disabled="true"])`,
	Ct = 'data-value',
	xo = (s, e) => Bg(s, e);
function jn() {
	return Ht(Xo);
}
function An() {
	return Ht(Yo);
}
function Yg(s) {
	const e = bt();
	return qt(Zo, { id: e, alwaysRender: ol(s) ? !1 : s }), { id: e };
}
function Zg() {
	const s = Ht(Zo);
	if (s) return s;
}
function Qg(s) {
	const e = { search: '', value: '', filtered: { count: 0, items: new Map(), groups: new Set() } };
	return ct(s ? { ...e, ...Go(s) } : e);
}
const xg = {
	label: 'Command menu',
	shouldFilter: !0,
	loop: !1,
	onValueChange: void 0,
	value: void 0,
	filter: xo,
	ids: { root: bt(), list: bt(), label: bt(), input: bt() }
};
function eh(s) {
	const e = { root: bt(), list: bt(), label: bt(), input: bt(), ...s.ids },
		n = { ...xg, ...Go(s) },
		t = s.state ?? Qg({ value: n.value }),
		l = ct(new Set()),
		o = ct(new Map()),
		r = ct(new Map()),
		a = ct(null),
		i = Ug(Hg(n, 'value', 'ids')),
		{ shouldFilter: f, loop: u, filter: c, label: h } = i,
		_ = {
			value: (z, x) => {
				x !== ce(r).get(z) &&
					(r.update((M) => (M.set(z, x), M)),
					t.update((M) => (M.filtered.items.set(z, T(x, M.search)), v(M, ce(f)))));
			},
			item: (z, x) => (
				l.update((M) => M.add(z)),
				x &&
					o.update((M) => {
						var H;
						return M.has(x) ? (H = M.get(x)) == null || H.add(z) : M.set(x, new Set([z])), M;
					}),
				t.update((M) => {
					const H = ce(f),
						W = $(M, H),
						Te = v(W, H);
					if (!Te.value) {
						const Pe = w();
						Te.value = Pe ?? '';
					}
					return Te;
				}),
				() => {
					r.update((M) => (M.delete(z), M)),
						l.update((M) => (M.delete(z), M)),
						t.update((M) => {
							M.filtered.items.delete(z);
							const H = V(),
								W = $(M);
							return (H == null ? void 0 : H.getAttribute('id')) === z && (W.value = w() ?? ''), M;
						});
				}
			),
			group: (z) => (
				o.update((x) => (x.has(z) || x.set(z, new Set()), x)),
				() => {
					r.update((x) => (x.delete(z), x)), o.update((x) => (x.delete(z), x));
				}
			),
			filter: () => ce(f),
			label: ce(h) || s['aria-label'] || '',
			commandEl: a,
			ids: e,
			updateState: p
		};
	function p(z, x, M) {
		const H = ce(f);
		t.update((W) => {
			var Te;
			return (
				Object.is(W[z], x) ||
					((W[z] = x),
					z === 'search'
						? ((W = $(W, H)),
							(W = v(W, H)),
							Wt().then(() => t.update((Ie) => ((Ie.value = w() ?? ''), Ie))))
						: z === 'value' &&
							((Te = s.onValueChange) == null || Te.call(s, W.value), M || Wt().then(() => j()))),
				W
			);
		});
	}
	function $(z, x) {
		const M = x ?? ce(f),
			H = ce(l),
			W = ce(r);
		if (!z.search || !M) return (z.filtered.count = H.size), z;
		z.filtered.groups = new Set();
		let Te = 0;
		for (const Pe of H) {
			const De = W.get(Pe),
				Ie = T(De, z.search);
			z.filtered.items.set(Pe, Ie), Ie > 0 && Te++;
		}
		for (const [Pe, De] of ce(o))
			for (const Ie of De) {
				const we = z.filtered.items.get(Ie);
				we && we > 0 && z.filtered.groups.add(Pe);
			}
		return (z.filtered.count = Te), z;
	}
	function v(z, x) {
		const M = x ?? ce(f);
		if (!z.search || !M) return z;
		const H = z.filtered.items,
			W = [],
			Te = ce(o);
		z.filtered.groups.forEach((Ie) => {
			const we = Te.get(Ie);
			if (!we) return;
			let le = 0;
			we.forEach((se) => {
				const $e = H.get(se);
				ol($e) || (le = Math.max($e, le));
			}),
				W.push([Ie, le]);
		});
		const Pe = document.getElementById(e.root);
		if (!Pe) return z;
		const De = Pe.querySelector(Jg);
		return (
			Y(Pe)
				.sort((Ie, we) => {
					const le = Ie.getAttribute(Ct) ?? '',
						se = we.getAttribute(Ct) ?? '';
					return (H.get(le) ?? 0) - (H.get(se) ?? 0);
				})
				.forEach((Ie) => {
					const we = Ie.closest(Fs),
						le = Ie.closest(`${Fs} > *`);
					if (zt(we))
						if (Ie.parentElement === we) we.appendChild(Ie);
						else {
							if (!zt(le)) return;
							we.appendChild(le);
						}
					else {
						if (!zt(De)) return;
						if (Ie.parentElement === De) De.appendChild(Ie);
						else {
							if (!zt(le)) return;
							De.appendChild(le);
						}
					}
				}),
			W.sort((Ie, we) => we[1] - Ie[1]).forEach((Ie) => {
				var le;
				const we = Pe.querySelector(`${$n}[${Ct}="${Ie[0]}"]`);
				zt(we) && ((le = we.parentElement) == null || le.appendChild(we));
			}),
			z
		);
	}
	function w() {
		const z = Y().find((M) => !M.ariaDisabled);
		if (!z) return;
		const x = z.getAttribute(Ct);
		if (x) return x;
	}
	function T(z, x) {
		const M = z == null ? void 0 : z.toLowerCase().trim(),
			H = ce(c);
		return H ? (M ? H(M, x) : 0) : M ? xo(M, x) : 0;
	}
	function j() {
		var x;
		const z = V();
		z &&
			(((x = z.parentElement) == null ? void 0 : x.firstChild) === z &&
				Wt().then(() => {
					var M, H;
					return (H = (M = z.closest($n)) == null ? void 0 : M.querySelector(Xg)) == null
						? void 0
						: H.scrollIntoView({ block: 'nearest' });
				}),
			Wt().then(() => z.scrollIntoView({ block: 'nearest' })));
	}
	function Y(z) {
		const x = z ?? document.getElementById(e.root);
		return x ? Array.from(x.querySelectorAll(Jn)).filter((M) => zt(M)) : [];
	}
	function V(z) {
		const x = document.getElementById(e.root);
		if (!x) return;
		const M = x.querySelector(`${Jn}[aria-selected="true"]`);
		return zt(M) ? M : null;
	}
	function F(z) {
		const x = document.getElementById(e.root);
		!x || Y(x)[z];
	}
	function U(z) {
		const x = V(),
			M = Y(),
			H = M.findIndex((Te) => Te === x);
		let W = M[H + z];
		ce(u) && (H + z < 0 ? (W = M[M.length - 1]) : H + z === M.length ? (W = M[0]) : (W = M[H + z])),
			W && p('value', W.getAttribute(Ct) ?? '');
	}
	function ne(z) {
		const x = V();
		let M = x == null ? void 0 : x.closest($n),
			H;
		for (; M && !H; )
			(M = z > 0 ? th(M, $n) : nh(M, $n)), (H = M == null ? void 0 : M.querySelector(Jn));
		H ? p('value', H.getAttribute(Ct) ?? '') : U(z);
	}
	function oe() {
		return F(Y().length - 1);
	}
	function O(z) {
		z.preventDefault(), z.metaKey ? oe() : z.altKey ? ne(1) : U(1);
	}
	function G(z) {
		z.preventDefault(), z.metaKey ? F(0) : z.altKey ? ne(-1) : U(-1);
	}
	function q(z) {
		switch (z.key) {
			case pn.ARROW_DOWN:
				O(z);
				break;
			case pn.ARROW_UP:
				G(z);
				break;
			case pn.HOME:
				z.preventDefault(), F(0);
				break;
			case pn.END:
				z.preventDefault(), oe();
				break;
			case pn.ENTER: {
				z.preventDefault();
				const x = V();
				x && x.click();
			}
		}
	}
	qt(Xo, _);
	const K = { subscribe: t.subscribe, update: t.update, set: t.set, updateState: p };
	return qt(Yo, K), { state: K, handleRootKeydown: q, commandEl: a, ids: e };
}
function th(s, e) {
	let n = s.nextElementSibling;
	for (; n; ) {
		if (n.matches(e)) return n;
		n = n.nextElementSibling;
	}
}
function nh(s, e) {
	let n = s.previousElementSibling;
	for (; n; ) {
		if (n.matches(e)) return n;
		n = n.previousElementSibling;
	}
}
const lh = (s) => s & 4,
	sh = (s) => ({}),
	js = (s) => ({ ...s[2] }),
	oh = (s) => s & 4,
	rh = (s) => ({}),
	zs = (s) => ({ ...s[2] });
function ih(s) {
	let e,
		n,
		t = (s[0] ?? '') + '',
		l,
		o,
		r,
		a,
		i,
		f = [s[6]],
		u = {};
	for (let $ = 0; $ < f.length; $ += 1) u = I(u, f[$]);
	const c = s[18].default,
		h = ie(c, s, s[17], js);
	let _ = [s[5], s[7]],
		p = {};
	for (let $ = 0; $ < _.length; $ += 1) p = I(p, _[$]);
	return {
		c() {
			(e = y('div')), (n = y('label')), (l = X(t)), (o = L()), h && h.c(), this.h();
		},
		l($) {
			e = D($, 'DIV', {});
			var v = B(e);
			n = D(v, 'LABEL', {});
			var w = B(n);
			(l = J(w, t)), w.forEach(m), (o = R(v)), h && h.l(v), v.forEach(m), this.h();
		},
		h() {
			re(n, u), re(e, p);
		},
		m($, v) {
			b($, e, v),
				N(e, n),
				N(n, l),
				N(e, o),
				h && h.m(e, null),
				(r = !0),
				a || ((i = je(s[4].call(null, e))), (a = !0));
		},
		p($, v) {
			(!r || v & 1) && t !== (t = ($[0] ?? '') + '') && el(l, t, u.contenteditable),
				h &&
					h.p &&
					(!r || v & 131076) &&
					ae(h, c, $, $[17], lh(v) || !r ? fe($[17]) : ue(c, $[17], v, sh), js),
				re(e, (p = ge(_, [$[5], v & 128 && $[7]])));
		},
		i($) {
			r || (d(h, $), (r = !0));
		},
		o($) {
			g(h, $), (r = !1);
		},
		d($) {
			$ && m(e), h && h.d($), (a = !1), i();
		}
	};
}
function ah(s) {
	let e;
	const n = s[18].default,
		t = ie(n, s, s[17], zs);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t &&
				t.p &&
				(!e || o & 131076) &&
				ae(t, n, l, l[17], oh(o) || !e ? fe(l[17]) : ue(n, l[17], o, rh), zs);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function fh(s) {
	let e, n, t, l;
	const o = [ah, ih],
		r = [];
	function a(i, f) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = r[e] = o[e](s)),
		{
			c() {
				n.c(), (t = te());
			},
			l(i) {
				n.l(i), (t = te());
			},
			m(i, f) {
				r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, [f]) {
				let u = e;
				(e = a(i)),
					e === u
						? r[e].p(i, f)
						: (Ce(),
							g(r[u], 1, 1, () => {
								r[u] = null;
							}),
							Ee(),
							(n = r[e]),
							n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
							d(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), r[e].d(i);
			}
		}
	);
}
function uh(s, e, n) {
	let t;
	const l = [
		'label',
		'shouldFilter',
		'filter',
		'value',
		'onValueChange',
		'loop',
		'onKeydown',
		'state',
		'ids',
		'asChild'
	];
	let o = ee(e, l),
		r,
		{ $$slots: a = {}, $$scope: i } = e,
		{ label: f = void 0 } = e,
		{ shouldFilter: u = !0 } = e,
		{ filter: c = void 0 } = e,
		{ value: h = void 0 } = e,
		{ onValueChange: _ = void 0 } = e,
		{ loop: p = void 0 } = e,
		{ onKeydown: $ = void 0 } = e,
		{ state: v = void 0 } = e,
		{ ids: w = void 0 } = e,
		{ asChild: T = !1 } = e;
	const {
		commandEl: j,
		handleRootKeydown: Y,
		ids: V,
		state: F
	} = eh({
		label: f,
		shouldFilter: u,
		filter: c,
		value: h,
		onValueChange: (K) => {
			K !== h && (n(8, (h = K)), _ == null || _(K));
		},
		loop: p,
		state: v,
		ids: w
	});
	Ae(s, F, (K) => n(16, (r = K)));
	function U(K) {
		K && K !== r.value && rr(F, (r.value = K), r);
	}
	function ne(K) {
		return j.set(K), { destroy: Jo(Vn(K, 'keydown', G)) };
	}
	const oe = { role: 'application', id: V.root, 'data-cmdk-root': '' },
		O = { 'data-cmdk-label': '', for: V.input, id: V.label, style: Wg(Gg) };
	function G(K) {
		$ == null || $(K), !K.defaultPrevented && Y(K);
	}
	const q = { action: ne, attrs: oe };
	return (
		(s.$$set = (K) => {
			(e = I(I({}, e), ke(K))),
				n(7, (o = ee(e, l))),
				'label' in K && n(0, (f = K.label)),
				'shouldFilter' in K && n(9, (u = K.shouldFilter)),
				'filter' in K && n(10, (c = K.filter)),
				'value' in K && n(8, (h = K.value)),
				'onValueChange' in K && n(11, (_ = K.onValueChange)),
				'loop' in K && n(12, (p = K.loop)),
				'onKeydown' in K && n(13, ($ = K.onKeydown)),
				'state' in K && n(14, (v = K.state)),
				'ids' in K && n(15, (w = K.ids)),
				'asChild' in K && n(1, (T = K.asChild)),
				'$$scope' in K && n(17, (i = K.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 256 && U(h),
				s.$$.dirty & 65536 && n(2, (t = { root: q, label: { attrs: O }, stateStore: F, state: r }));
		}),
		[f, T, t, F, ne, oe, O, o, h, u, c, _, p, $, v, w, r, i, a]
	);
}
let ch = class extends he {
	constructor(e) {
		super(),
			pe(this, e, uh, fh, me, {
				label: 0,
				shouldFilter: 9,
				filter: 10,
				value: 8,
				onValueChange: 11,
				loop: 12,
				onKeydown: 13,
				state: 14,
				ids: 15,
				asChild: 1
			});
	}
};
function dh(s) {
	return Object.keys(s).reduce((e, n) => (s[n] === void 0 ? e : e + `${n}:${s[n]};`), '');
}
dh({
	position: 'absolute',
	opacity: 0,
	'pointer-events': 'none',
	margin: 0,
	transform: 'translateX(-100%)'
});
function er(s, e, n, t) {
	const l = Array.isArray(e) ? e : [e];
	return (
		l.forEach((o) => s.addEventListener(o, n, t)),
		() => {
			l.forEach((o) => s.removeEventListener(o, n, t));
		}
	);
}
const mh = { ESCAPE: 'Escape' };
Oo(void 0, (s) => {
	function e(t) {
		s(t), s(void 0);
	}
	return er(document, 'pointerup', e, { passive: !1, capture: !0 });
});
Oo(void 0, (s) => {
	function e(t) {
		t && t.key === mh.ESCAPE && s(t), s(void 0);
	}
	return er(document, 'keydown', e, { passive: !1, capture: !0 });
});
function et(s, e) {
	const n = {};
	return (
		e.forEach((t) => {
			n[t] = { [`data-bits-${s}-${t}`]: '' };
		}),
		(t) => n[t]
	);
}
function tr(s) {
	return Object.keys(s).reduce((e, n) => (s[n] === void 0 ? e : e + `${n}:${s[n]};`), '');
}
tr({
	position: 'absolute',
	width: '1px',
	height: '1px',
	padding: '0',
	margin: '-1px',
	overflow: 'hidden',
	clip: 'rect(0, 0, 0, 0)',
	whiteSpace: 'nowrap',
	borderWidth: '0'
});
tr({
	position: 'absolute',
	width: '25px',
	height: '25px',
	opacity: '0',
	margin: '0px',
	pointerEvents: 'none',
	transform: 'translateX(-100%)'
});
const _h = 'accordion',
	gh = ['root', 'content', 'header', 'item', 'trigger'];
et(_h, gh);
const hh = 'alert-dialog',
	ph = ['action', 'cancel', 'content', 'description', 'overlay', 'portal', 'title', 'trigger'];
et(hh, ph);
const $h = 'avatar',
	bh = ['root', 'image', 'fallback'];
et($h, bh);
const vh = 'checkbox',
	kh = ['root', 'input', 'indicator'];
et(vh, kh);
const Ch = 'collapsible',
	Eh = ['root', 'content', 'trigger'];
et(Ch, Eh);
const Sh = 'context-menu',
	wh = [
		'arrow',
		'checkbox-indicator',
		'checkbox-item',
		'content',
		'group',
		'item',
		'label',
		'radio-group',
		'radio-item',
		'separator',
		'sub-content',
		'sub-trigger',
		'trigger'
	];
et(Sh, wh);
const Th = 'dialog',
	Ah = ['close', 'content', 'description', 'overlay', 'portal', 'title', 'trigger'];
et(Th, Ah);
const Oh = 'dropdown-menu',
	Nh = [
		'arrow',
		'checkbox-indicator',
		'checkbox-item',
		'content',
		'group',
		'item',
		'label',
		'radio-group',
		'radio-item',
		'separator',
		'sub-content',
		'sub-trigger',
		'trigger'
	];
et(Oh, Nh);
const Ph = 'link-preview',
	Ih = ['arrow', 'content', 'trigger'];
et(Ph, Ih);
const Dh = 'label',
	yh = ['root'];
et(Dh, yh);
const Mh = 'menubar',
	Vh = [
		'root',
		'arrow',
		'checkbox-indicator',
		'checkbox-item',
		'content',
		'group',
		'item',
		'label',
		'radio-group',
		'radio-item',
		'separator',
		'sub-content',
		'sub-trigger',
		'trigger'
	];
et(Mh, Vh);
const Rh = 'popover',
	Lh = ['arrow', 'close', 'content', 'trigger'];
et(Rh, Lh);
const Fh = 'progress',
	jh = ['root'];
et(Fh, jh);
const zh = 'radio-group',
	Bh = ['root', 'item', 'input'];
et(zh, Bh);
const Kh = 'select',
	qh = ['arrow', 'content', 'group', 'item', 'input', 'label', 'trigger', 'value'];
et(Kh, qh);
const Hh = 'separator',
	Uh = ['root'];
et(Hh, Uh);
const Wh = 'slider',
	Gh = ['root', 'input', 'range', 'thumb', 'tick'];
et(Wh, Gh);
const Jh = 'switch',
	Xh = ['root', 'input', 'thumb'];
et(Jh, Xh);
const Yh = 'tabs',
	Zh = ['root', 'content', 'list', 'trigger'];
et(Yh, Zh);
const Qh = 'toggle',
	xh = ['root', 'input'];
et(Qh, xh);
const e1 = 'toggle-group',
	t1 = ['root', 'item'];
et(e1, t1);
const n1 = 'tooltip',
	l1 = ['arrow', 'content', 'trigger'];
et(n1, l1);
const s1 = (s) => ({}),
	Bs = (s) => ({ attrs: s[4] });
function Ks(s) {
	let e, n, t, l;
	const o = [r1, o1],
		r = [];
	function a(i, f) {
		return i[0] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = r[e] = o[e](s)),
		{
			c() {
				n.c(), (t = te());
			},
			l(i) {
				n.l(i), (t = te());
			},
			m(i, f) {
				r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, f) {
				let u = e;
				(e = a(i)),
					e === u
						? r[e].p(i, f)
						: (Ce(),
							g(r[u], 1, 1, () => {
								r[u] = null;
							}),
							Ee(),
							(n = r[e]),
							n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
							d(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), r[e].d(i);
			}
		}
	);
}
function o1(s) {
	let e, n;
	const t = s[8].default,
		l = ie(t, s, s[7], null);
	let o = [s[4], s[5]],
		r = {};
	for (let a = 0; a < o.length; a += 1) r = I(r, o[a]);
	return {
		c() {
			(e = y('div')), l && l.c(), this.h();
		},
		l(a) {
			e = D(a, 'DIV', {});
			var i = B(e);
			l && l.l(i), i.forEach(m), this.h();
		},
		h() {
			re(e, r);
		},
		m(a, i) {
			b(a, e, i), l && l.m(e, null), (n = !0);
		},
		p(a, i) {
			l && l.p && (!n || i & 128) && ae(l, t, a, a[7], n ? ue(t, a[7], i, null) : fe(a[7]), null),
				re(e, (r = ge(o, [a[4], i & 32 && a[5]])));
		},
		i(a) {
			n || (d(l, a), (n = !0));
		},
		o(a) {
			g(l, a), (n = !1);
		},
		d(a) {
			a && m(e), l && l.d(a);
		}
	};
}
function r1(s) {
	let e;
	const n = s[8].default,
		t = ie(n, s, s[7], Bs);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 128) && ae(t, n, l, l[7], e ? ue(n, l[7], o, s1) : fe(l[7]), Bs);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function i1(s) {
	let e,
		n,
		t = !s[1] && s[2] && Ks(s);
	return {
		c() {
			t && t.c(), (e = te());
		},
		l(l) {
			t && t.l(l), (e = te());
		},
		m(l, o) {
			t && t.m(l, o), b(l, e, o), (n = !0);
		},
		p(l, [o]) {
			!l[1] && l[2]
				? t
					? (t.p(l, o), o & 6 && d(t, 1))
					: ((t = Ks(l)), t.c(), d(t, 1), t.m(e.parentNode, e))
				: t &&
					(Ce(),
					g(t, 1, 1, () => {
						t = null;
					}),
					Ee());
		},
		i(l) {
			n || (d(t), (n = !0));
		},
		o(l) {
			g(t), (n = !1);
		},
		d(l) {
			l && m(e), t && t.d(l);
		}
	};
}
function a1(s, e, n) {
	let t;
	const l = ['asChild'];
	let o = ee(e, l),
		r,
		{ $$slots: a = {}, $$scope: i } = e,
		{ asChild: f = !1 } = e,
		u = !0;
	dn(() => {
		n(1, (u = !1));
	});
	const c = An();
	Ae(s, c, (_) => n(6, (r = _)));
	const h = { 'data-cmdk-empty': '', role: 'presentation' };
	return (
		(s.$$set = (_) => {
			(e = I(I({}, e), ke(_))),
				n(5, (o = ee(e, l))),
				'asChild' in _ && n(0, (f = _.asChild)),
				'$$scope' in _ && n(7, (i = _.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 64 && n(2, (t = r.filtered.count === 0));
		}),
		[f, u, t, c, h, o, r, i, a]
	);
}
class f1 extends he {
	constructor(e) {
		super(), pe(this, e, a1, i1, me, { asChild: 0 });
	}
}
const u1 = (s) => ({ container: s & 32, group: s & 16 }),
	qs = (s) => ({ container: s[5], group: s[4], heading: { attrs: s[8] } }),
	c1 = (s) => ({ container: s & 32, group: s & 16 }),
	Hs = (s) => ({ container: s[5], group: s[4], heading: { attrs: s[8] } });
function d1(s) {
	let e,
		n,
		t,
		l,
		o,
		r,
		a = s[0] && Us(s);
	const i = s[14].default,
		f = ie(i, s, s[13], qs);
	let u = [s[2]],
		c = {};
	for (let p = 0; p < u.length; p += 1) c = I(c, u[p]);
	let h = [s[3], s[9]],
		_ = {};
	for (let p = 0; p < h.length; p += 1) _ = I(_, h[p]);
	return {
		c() {
			(e = y('div')), a && a.c(), (n = L()), (t = y('div')), f && f.c(), this.h();
		},
		l(p) {
			e = D(p, 'DIV', {});
			var $ = B(e);
			a && a.l($), (n = R($)), (t = D($, 'DIV', {}));
			var v = B(t);
			f && f.l(v), v.forEach(m), $.forEach(m), this.h();
		},
		h() {
			re(t, c), re(e, _);
		},
		m(p, $) {
			b(p, e, $),
				a && a.m(e, null),
				N(e, n),
				N(e, t),
				f && f.m(t, null),
				(l = !0),
				o || ((r = je(s[7].call(null, e))), (o = !0));
		},
		p(p, $) {
			p[0] ? (a ? a.p(p, $) : ((a = Us(p)), a.c(), a.m(e, n))) : a && (a.d(1), (a = null)),
				f && f.p && (!l || $ & 8240) && ae(f, i, p, p[13], l ? ue(i, p[13], $, u1) : fe(p[13]), qs),
				re(t, (c = ge(u, [$ & 4 && p[2]]))),
				re(e, (_ = ge(h, [$ & 8 && p[3], $ & 512 && p[9]])));
		},
		i(p) {
			l || (d(f, p), (l = !0));
		},
		o(p) {
			g(f, p), (l = !1);
		},
		d(p) {
			p && m(e), a && a.d(), f && f.d(p), (o = !1), r();
		}
	};
}
function m1(s) {
	let e;
	const n = s[14].default,
		t = ie(n, s, s[13], Hs);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 8240) && ae(t, n, l, l[13], e ? ue(n, l[13], o, c1) : fe(l[13]), Hs);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Us(s) {
	let e,
		n,
		t = [s[8]],
		l = {};
	for (let o = 0; o < t.length; o += 1) l = I(l, t[o]);
	return {
		c() {
			(e = y('div')), (n = X(s[0])), this.h();
		},
		l(o) {
			e = D(o, 'DIV', {});
			var r = B(e);
			(n = J(r, s[0])), r.forEach(m), this.h();
		},
		h() {
			re(e, l);
		},
		m(o, r) {
			b(o, e, r), N(e, n);
		},
		p(o, r) {
			r & 1 && el(n, o[0], l.contenteditable);
		},
		d(o) {
			o && m(e);
		}
	};
}
function _1(s) {
	let e, n, t, l;
	const o = [m1, d1],
		r = [];
	function a(i, f) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = r[e] = o[e](s)),
		{
			c() {
				n.c(), (t = te());
			},
			l(i) {
				n.l(i), (t = te());
			},
			m(i, f) {
				r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, [f]) {
				let u = e;
				(e = a(i)),
					e === u
						? r[e].p(i, f)
						: (Ce(),
							g(r[u], 1, 1, () => {
								r[u] = null;
							}),
							Ee(),
							(n = r[e]),
							n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
							d(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), r[e].d(i);
			}
		}
	);
}
function g1(s, e, n) {
	let t, l, o, r;
	const a = ['heading', 'value', 'alwaysRender', 'asChild'];
	let i = ee(e, a),
		f,
		{ $$slots: u = {}, $$scope: c } = e,
		{ heading: h = void 0 } = e,
		{ value: _ = '' } = e,
		{ alwaysRender: p = !1 } = e,
		{ asChild: $ = !1 } = e;
	const { id: v } = Yg(p),
		w = jn(),
		T = An(),
		j = bt(),
		Y = _t(T, (U) => (p || w.filter() === !1 || !U.search ? !0 : U.filtered.groups.has(v)));
	Ae(s, Y, (U) => n(12, (f = U))), dn(() => w.group(v));
	function V(U) {
		if (_) {
			w.value(v, _), U.setAttribute(Ct, _);
			return;
		}
		h
			? n(10, (_ = h.trim().toLowerCase()))
			: U.textContent && n(10, (_ = U.textContent.trim().toLowerCase())),
			w.value(v, _),
			U.setAttribute(Ct, _);
	}
	const F = { 'data-cmdk-group-heading': '', 'aria-hidden': !0, id: j };
	return (
		(s.$$set = (U) => {
			(e = I(I({}, e), ke(U))),
				n(9, (i = ee(e, a))),
				'heading' in U && n(0, (h = U.heading)),
				'value' in U && n(10, (_ = U.value)),
				'alwaysRender' in U && n(11, (p = U.alwaysRender)),
				'asChild' in U && n(1, ($ = U.asChild)),
				'$$scope' in U && n(13, (c = U.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 5120 &&
				n(
					3,
					(t = {
						'data-cmdk-group': '',
						role: 'presentation',
						hidden: f ? void 0 : !0,
						'data-value': _
					})
				),
				s.$$.dirty & 1 &&
					n(
						2,
						(l = { 'data-cmdk-group-items': '', role: 'group', 'aria-labelledby': h ? j : void 0 })
					),
				s.$$.dirty & 8 && n(5, (o = { action: V, attrs: t })),
				s.$$.dirty & 4 && n(4, (r = { attrs: l }));
		}),
		[h, $, l, t, r, o, Y, V, F, i, _, p, f, c, u]
	);
}
class h1 extends he {
	constructor(e) {
		super(), pe(this, e, g1, _1, me, { heading: 0, value: 10, alwaysRender: 11, asChild: 1 });
	}
}
function p1(s) {
	return new Promise((e) => setTimeout(e, s));
}
const $1 = (s) => ({ attrs: s & 8 }),
	Ws = (s) => ({ action: s[6], attrs: s[3] });
function b1(s) {
	let e,
		n,
		t,
		l = [s[3], s[7]],
		o = {};
	for (let r = 0; r < l.length; r += 1) o = I(o, l[r]);
	return {
		c() {
			(e = y('input')), this.h();
		},
		l(r) {
			(e = D(r, 'INPUT', {})), this.h();
		},
		h() {
			re(e, o);
		},
		m(r, a) {
			b(r, e, a),
				e.autofocus && e.focus(),
				s[16](e),
				ul(e, s[0]),
				n ||
					((t = [
						de(e, 'input', s[17]),
						je(s[6].call(null, e)),
						de(e, 'input', s[12]),
						de(e, 'focus', s[13]),
						de(e, 'blur', s[14]),
						de(e, 'change', s[15])
					]),
					(n = !0));
		},
		p(r, a) {
			re(e, (o = ge(l, [a & 8 && r[3], a & 128 && r[7]]))),
				a & 1 && e.value !== r[0] && ul(e, r[0]);
		},
		i: Se,
		o: Se,
		d(r) {
			r && m(e), s[16](null), (n = !1), xe(t);
		}
	};
}
function v1(s) {
	let e;
	const n = s[11].default,
		t = ie(n, s, s[10], Ws);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 1032) && ae(t, n, l, l[10], e ? ue(n, l[10], o, $1) : fe(l[10]), Ws);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function k1(s) {
	let e, n, t, l;
	const o = [v1, b1],
		r = [];
	function a(i, f) {
		return i[2] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = r[e] = o[e](s)),
		{
			c() {
				n.c(), (t = te());
			},
			l(i) {
				n.l(i), (t = te());
			},
			m(i, f) {
				r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, [f]) {
				let u = e;
				(e = a(i)),
					e === u
						? r[e].p(i, f)
						: (Ce(),
							g(r[u], 1, 1, () => {
								r[u] = null;
							}),
							Ee(),
							(n = r[e]),
							n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
							d(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), r[e].d(i);
			}
		}
	);
}
function C1(s, e, n) {
	const t = ['autofocus', 'value', 'asChild', 'el'];
	let l = ee(e, t),
		o,
		r,
		{ $$slots: a = {}, $$scope: i } = e;
	const { ids: f, commandEl: u } = jn(),
		c = An(),
		h = _t(c, (q) => q.search);
	Ae(s, h, (q) => n(18, (r = q)));
	const _ = _t(c, (q) => q.value);
	let { autofocus: p = void 0 } = e,
		{ value: $ = r } = e,
		{ asChild: v = !1 } = e,
		{ el: w = void 0 } = e;
	const T = _t([_, u], ([q, K]) => {
		if (!Kg) return;
		const z = K == null ? void 0 : K.querySelector(`${Qo}[${Ct}="${q}"]`);
		return z == null ? void 0 : z.getAttribute('id');
	});
	Ae(s, T, (q) => n(9, (o = q)));
	function j(q) {
		c.updateState('search', q);
	}
	function Y(q) {
		return (
			p && p1(10).then(() => q.focus()),
			{
				destroy: Vn(q, 'change', (z) => {
					qg(z.target) && c.updateState('search', z.target.value);
				})
			}
		);
	}
	let V;
	function F(q) {
		ve.call(this, s, q);
	}
	function U(q) {
		ve.call(this, s, q);
	}
	function ne(q) {
		ve.call(this, s, q);
	}
	function oe(q) {
		ve.call(this, s, q);
	}
	function O(q) {
		Ne[q ? 'unshift' : 'push'](() => {
			(w = q), n(1, w);
		});
	}
	function G() {
		($ = this.value), n(0, $);
	}
	return (
		(s.$$set = (q) => {
			(e = I(I({}, e), ke(q))),
				n(7, (l = ee(e, t))),
				'autofocus' in q && n(8, (p = q.autofocus)),
				'value' in q && n(0, ($ = q.value)),
				'asChild' in q && n(2, (v = q.asChild)),
				'el' in q && n(1, (w = q.el)),
				'$$scope' in q && n(10, (i = q.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 1 && j($),
				s.$$.dirty & 512 &&
					n(
						3,
						(V = {
							type: 'text',
							'data-cmdk-input': '',
							autocomplete: 'off',
							autocorrect: 'off',
							spellcheck: !1,
							'aria-autocomplete': 'list',
							role: 'combobox',
							'aria-expanded': !0,
							'aria-controls': f.list,
							'aria-labelledby': f.label,
							'aria-activedescendant': o ?? void 0,
							id: f.input
						})
					);
		}),
		[$, w, v, V, h, T, Y, l, p, o, i, a, F, U, ne, oe, O, G]
	);
}
class E1 extends he {
	constructor(e) {
		super(), pe(this, e, C1, k1, me, { autofocus: 8, value: 0, asChild: 2, el: 1 });
	}
}
const S1 = (s) => ({ attrs: s & 4 }),
	Gs = (s) => ({ action: s[6], attrs: s[2] }),
	w1 = (s) => ({ attrs: s & 4 }),
	Js = (s) => ({ action: s[6], attrs: s[2] });
function Xs(s) {
	let e, n, t, l;
	const o = [A1, T1],
		r = [];
	function a(i, f) {
		return i[0] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = r[e] = o[e](s)),
		{
			c() {
				n.c(), (t = te());
			},
			l(i) {
				n.l(i), (t = te());
			},
			m(i, f) {
				r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, f) {
				let u = e;
				(e = a(i)),
					e === u
						? r[e].p(i, f)
						: (Ce(),
							g(r[u], 1, 1, () => {
								r[u] = null;
							}),
							Ee(),
							(n = r[e]),
							n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
							d(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), r[e].d(i);
			}
		}
	);
}
function T1(s) {
	let e, n, t, l;
	const o = s[15].default,
		r = ie(o, s, s[14], Gs);
	let a = [s[2], s[7]],
		i = {};
	for (let f = 0; f < a.length; f += 1) i = I(i, a[f]);
	return {
		c() {
			(e = y('div')), r && r.c(), this.h();
		},
		l(f) {
			e = D(f, 'DIV', {});
			var u = B(e);
			r && r.l(u), u.forEach(m), this.h();
		},
		h() {
			re(e, i);
		},
		m(f, u) {
			b(f, e, u), r && r.m(e, null), (n = !0), t || ((l = je(s[6].call(null, e))), (t = !0));
		},
		p(f, u) {
			r && r.p && (!n || u & 16388) && ae(r, o, f, f[14], n ? ue(o, f[14], u, S1) : fe(f[14]), Gs),
				re(e, (i = ge(a, [u & 4 && f[2], u & 128 && f[7]])));
		},
		i(f) {
			n || (d(r, f), (n = !0));
		},
		o(f) {
			g(r, f), (n = !1);
		},
		d(f) {
			f && m(e), r && r.d(f), (t = !1), l();
		}
	};
}
function A1(s) {
	let e;
	const n = s[15].default,
		t = ie(n, s, s[14], Js);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 16388) && ae(t, n, l, l[14], e ? ue(n, l[14], o, w1) : fe(l[14]), Js);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function O1(s) {
	let e,
		n,
		t = (s[3] || s[1]) && Xs(s);
	return {
		c() {
			t && t.c(), (e = te());
		},
		l(l) {
			t && t.l(l), (e = te());
		},
		m(l, o) {
			t && t.m(l, o), b(l, e, o), (n = !0);
		},
		p(l, [o]) {
			l[3] || l[1]
				? t
					? (t.p(l, o), o & 10 && d(t, 1))
					: ((t = Xs(l)), t.c(), d(t, 1), t.m(e.parentNode, e))
				: t &&
					(Ce(),
					g(t, 1, 1, () => {
						t = null;
					}),
					Ee());
		},
		i(l) {
			n || (d(t), (n = !0));
		},
		o(l) {
			g(t), (n = !1);
		},
		d(l) {
			l && m(e), t && t.d(l);
		}
	};
}
function N1(s, e, n) {
	let t;
	const l = ['disabled', 'value', 'onSelect', 'alwaysRender', 'asChild', 'id'];
	let o = ee(e, l),
		r,
		a,
		{ $$slots: i = {}, $$scope: f } = e,
		{ disabled: u = !1 } = e,
		{ value: c = '' } = e,
		{ onSelect: h = void 0 } = e,
		{ alwaysRender: _ = !1 } = e,
		{ asChild: p = !1 } = e,
		{ id: $ = bt() } = e;
	const v = Zg(),
		w = jn(),
		T = An(),
		j = _ ?? (v == null ? void 0 : v.alwaysRender),
		Y = _t(T, (O) => {
			if (j || w.filter() === !1 || !O.search) return !0;
			const G = O.filtered.items.get($);
			return ol(G) ? !1 : G > 0;
		});
	Ae(s, Y, (O) => n(3, (a = O)));
	let V = !0;
	dn(() => (n(1, (V = !1)), w.item($, v == null ? void 0 : v.id)));
	const F = _t(T, (O) => O.value === c);
	Ae(s, F, (O) => n(13, (r = O)));
	function U(O) {
		!c && O.textContent && n(8, (c = O.textContent.trim().toLowerCase())),
			w.value($, c),
			O.setAttribute(Ct, c);
		const G = Jo(
			Vn(O, 'pointermove', () => {
				u || oe();
			}),
			Vn(O, 'click', () => {
				u || ne();
			})
		);
		return {
			destroy() {
				G();
			}
		};
	}
	function ne() {
		oe(), h == null || h(c);
	}
	function oe() {
		T.updateState('value', c, !0);
	}
	return (
		(s.$$set = (O) => {
			(e = I(I({}, e), ke(O))),
				n(7, (o = ee(e, l))),
				'disabled' in O && n(9, (u = O.disabled)),
				'value' in O && n(8, (c = O.value)),
				'onSelect' in O && n(10, (h = O.onSelect)),
				'alwaysRender' in O && n(11, (_ = O.alwaysRender)),
				'asChild' in O && n(0, (p = O.asChild)),
				'id' in O && n(12, ($ = O.id)),
				'$$scope' in O && n(14, (f = O.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 13056 &&
				n(
					2,
					(t = {
						'aria-disabled': u ? !0 : void 0,
						'aria-selected': r ? !0 : void 0,
						'data-disabled': u ? !0 : void 0,
						'data-selected': r ? !0 : void 0,
						'data-cmdk-item': '',
						'data-value': c,
						role: 'option',
						id: $
					})
				);
		}),
		[p, V, t, a, Y, F, U, o, c, u, h, _, $, r, f, i]
	);
}
class P1 extends he {
	constructor(e) {
		super(),
			pe(this, e, N1, O1, me, {
				disabled: 9,
				value: 8,
				onSelect: 10,
				alwaysRender: 11,
				asChild: 0,
				id: 12
			});
	}
}
const I1 = (s) => ({}),
	Ys = (s) => ({ list: s[7], sizer: s[8] });
function D1(s) {
	let e,
		n,
		t = s[2].search === '',
		l,
		o,
		r,
		a = Zs(s),
		i = [s[6]],
		f = {};
	for (let h = 0; h < i.length; h += 1) f = I(f, i[h]);
	let u = [s[5], s[9]],
		c = {};
	for (let h = 0; h < u.length; h += 1) c = I(c, u[h]);
	return {
		c() {
			(e = y('div')), (n = y('div')), a.c(), this.h();
		},
		l(h) {
			e = D(h, 'DIV', {});
			var _ = B(e);
			n = D(_, 'DIV', {});
			var p = B(n);
			a.l(p), p.forEach(m), _.forEach(m), this.h();
		},
		h() {
			re(n, f), re(e, c);
		},
		m(h, _) {
			b(h, e, _),
				N(e, n),
				a.m(n, null),
				s[12](e),
				(l = !0),
				o || ((r = je(s[4].call(null, n))), (o = !0));
		},
		p(h, _) {
			_ & 4 && me(t, (t = h[2].search === ''))
				? (Ce(), g(a, 1, 1, Se), Ee(), (a = Zs(h)), a.c(), d(a, 1), a.m(n, null))
				: a.p(h, _),
				re(e, (c = ge(u, [h[5], _ & 512 && h[9]])));
		},
		i(h) {
			l || (d(a), (l = !0));
		},
		o(h) {
			g(a), (l = !1);
		},
		d(h) {
			h && m(e), a.d(h), s[12](null), (o = !1), r();
		}
	};
}
function y1(s) {
	let e = s[2].search === '',
		n,
		t,
		l = Qs(s);
	return {
		c() {
			l.c(), (n = te());
		},
		l(o) {
			l.l(o), (n = te());
		},
		m(o, r) {
			l.m(o, r), b(o, n, r), (t = !0);
		},
		p(o, r) {
			r & 4 && me(e, (e = o[2].search === ''))
				? (Ce(), g(l, 1, 1, Se), Ee(), (l = Qs(o)), l.c(), d(l, 1), l.m(n.parentNode, n))
				: l.p(o, r);
		},
		i(o) {
			t || (d(l), (t = !0));
		},
		o(o) {
			g(l), (t = !1);
		},
		d(o) {
			o && m(n), l.d(o);
		}
	};
}
function Zs(s) {
	let e;
	const n = s[11].default,
		t = ie(n, s, s[10], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t &&
				t.p &&
				(!e || o & 1024) &&
				ae(t, n, l, l[10], e ? ue(n, l[10], o, null) : fe(l[10]), null);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Qs(s) {
	let e;
	const n = s[11].default,
		t = ie(n, s, s[10], Ys);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 1024) && ae(t, n, l, l[10], e ? ue(n, l[10], o, I1) : fe(l[10]), Ys);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function M1(s) {
	let e, n, t, l;
	const o = [y1, D1],
		r = [];
	function a(i, f) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = r[e] = o[e](s)),
		{
			c() {
				n.c(), (t = te());
			},
			l(i) {
				n.l(i), (t = te());
			},
			m(i, f) {
				r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, [f]) {
				let u = e;
				(e = a(i)),
					e === u
						? r[e].p(i, f)
						: (Ce(),
							g(r[u], 1, 1, () => {
								r[u] = null;
							}),
							Ee(),
							(n = r[e]),
							n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
							d(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), r[e].d(i);
			}
		}
	);
}
function V1(s, e, n) {
	const t = ['el', 'asChild'];
	let l = ee(e, t),
		o,
		{ $$slots: r = {}, $$scope: a } = e;
	const { ids: i } = jn(),
		f = An();
	Ae(s, f, (T) => n(2, (o = T)));
	let { el: u = void 0 } = e,
		{ asChild: c = !1 } = e;
	function h(T) {
		let j;
		const Y = T.closest('[data-cmdk-list]');
		if (!zt(Y)) return;
		const V = new ResizeObserver(() => {
			j = requestAnimationFrame(() => {
				const F = T.offsetHeight;
				Y.style.setProperty('--cmdk-list-height', F.toFixed(1) + 'px');
			});
		});
		return (
			V.observe(T),
			{
				destroy() {
					cancelAnimationFrame(j), V.unobserve(T);
				}
			}
		);
	}
	const _ = {
			'data-cmdk-list': '',
			role: 'listbox',
			'aria-label': 'Suggestions',
			id: i.list,
			'aria-labelledby': i.input
		},
		p = { 'data-cmdk-list-sizer': '' },
		$ = { attrs: _ },
		v = { attrs: p, action: h };
	function w(T) {
		Ne[T ? 'unshift' : 'push'](() => {
			(u = T), n(0, u);
		});
	}
	return (
		(s.$$set = (T) => {
			(e = I(I({}, e), ke(T))),
				n(9, (l = ee(e, t))),
				'el' in T && n(0, (u = T.el)),
				'asChild' in T && n(1, (c = T.asChild)),
				'$$scope' in T && n(10, (a = T.$$scope));
		}),
		[u, c, o, f, h, _, p, $, v, l, a, r, w]
	);
}
class R1 extends he {
	constructor(e) {
		super(), pe(this, e, V1, M1, me, { el: 0, asChild: 1 });
	}
}
const L1 = (s) => ({ attrs: s & 2 }),
	xs = (s) => ({ attrs: s[1] }),
	F1 = (s) => ({ attrs: s & 2 }),
	eo = (s) => ({ attrs: s[1] });
function j1(s) {
	let e, n, t;
	const l = s[5].default,
		o = ie(l, s, s[4], xs);
	let r = [s[1], s[2]],
		a = {};
	for (let i = 0; i < r.length; i += 1) a = I(a, r[i]);
	return {
		c() {
			(e = y('div')), (n = y('div')), o && o.c(), this.h();
		},
		l(i) {
			e = D(i, 'DIV', {});
			var f = B(e);
			n = D(f, 'DIV', { 'aria-hidden': !0 });
			var u = B(n);
			o && o.l(u), u.forEach(m), f.forEach(m), this.h();
		},
		h() {
			P(n, 'aria-hidden', ''), re(e, a);
		},
		m(i, f) {
			b(i, e, f), N(e, n), o && o.m(n, null), (t = !0);
		},
		p(i, f) {
			o && o.p && (!t || f & 18) && ae(o, l, i, i[4], t ? ue(l, i[4], f, L1) : fe(i[4]), xs),
				re(e, (a = ge(r, [f & 2 && i[1], f & 4 && i[2]])));
		},
		i(i) {
			t || (d(o, i), (t = !0));
		},
		o(i) {
			g(o, i), (t = !1);
		},
		d(i) {
			i && m(e), o && o.d(i);
		}
	};
}
function z1(s) {
	let e;
	const n = s[5].default,
		t = ie(n, s, s[4], eo);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 18) && ae(t, n, l, l[4], e ? ue(n, l[4], o, F1) : fe(l[4]), eo);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function B1(s) {
	let e, n, t, l;
	const o = [z1, j1],
		r = [];
	function a(i, f) {
		return i[0] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = r[e] = o[e](s)),
		{
			c() {
				n.c(), (t = te());
			},
			l(i) {
				n.l(i), (t = te());
			},
			m(i, f) {
				r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, [f]) {
				let u = e;
				(e = a(i)),
					e === u
						? r[e].p(i, f)
						: (Ce(),
							g(r[u], 1, 1, () => {
								r[u] = null;
							}),
							Ee(),
							(n = r[e]),
							n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
							d(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), r[e].d(i);
			}
		}
	);
}
function K1(s, e, n) {
	let t;
	const l = ['progress', 'asChild'];
	let o = ee(e, l),
		{ $$slots: r = {}, $$scope: a } = e,
		{ progress: i = 0 } = e,
		{ asChild: f = !1 } = e;
	return (
		(s.$$set = (u) => {
			(e = I(I({}, e), ke(u))),
				n(2, (o = ee(e, l))),
				'progress' in u && n(3, (i = u.progress)),
				'asChild' in u && n(0, (f = u.asChild)),
				'$$scope' in u && n(4, (a = u.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 8 &&
				n(
					1,
					(t = {
						'data-cmdk-loading': '',
						role: 'progressbar',
						'aria-valuenow': i,
						'aria-valuemin': 0,
						'aria-valuemax': 100,
						'aria-label': 'Loading...'
					})
				);
		}),
		[f, t, o, i, a, r]
	);
}
class q1 extends he {
	constructor(e) {
		super(), pe(this, e, K1, B1, me, { progress: 3, asChild: 0 });
	}
}
function H1(s) {
	let e;
	const n = s[3].default,
		t = ie(n, s, s[5], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 32) && ae(t, n, l, l[5], e ? ue(n, l[5], o, null) : fe(l[5]), null);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function U1(s) {
	let e, n, t;
	const l = [
		{
			class: be(
				'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
				s[1]
			)
		},
		s[2]
	];
	function o(a) {
		s[4](a);
	}
	let r = { $$slots: { default: [H1] }, $$scope: { ctx: s } };
	for (let a = 0; a < l.length; a += 1) r = I(r, l[a]);
	return (
		s[0] !== void 0 && (r.value = s[0]),
		(e = new ch({ props: r })),
		Ne.push(() => rt(e, 'value', o)),
		{
			c() {
				E(e.$$.fragment);
			},
			l(a) {
				S(e.$$.fragment, a);
			},
			m(a, i) {
				C(e, a, i), (t = !0);
			},
			p(a, [i]) {
				const f =
					i & 6
						? ge(l, [
								i & 2 && {
									class: be(
										'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
										a[1]
									)
								},
								i & 4 && Ge(a[2])
							])
						: {};
				i & 32 && (f.$$scope = { dirty: i, ctx: a }),
					!n && i & 1 && ((n = !0), (f.value = a[0]), ot(() => (n = !1))),
					e.$set(f);
			},
			i(a) {
				t || (d(e.$$.fragment, a), (t = !0));
			},
			o(a) {
				g(e.$$.fragment, a), (t = !1);
			},
			d(a) {
				k(e, a);
			}
		}
	);
}
function W1(s, e, n) {
	const t = ['value', 'class'];
	let l = ee(e, t),
		{ $$slots: o = {}, $$scope: r } = e,
		{ value: a = void 0 } = e,
		{ class: i = void 0 } = e;
	function f(u) {
		(a = u), n(0, a);
	}
	return (
		(s.$$set = (u) => {
			(e = I(I({}, e), ke(u))),
				n(2, (l = ee(e, t))),
				'value' in u && n(0, (a = u.value)),
				'class' in u && n(1, (i = u.class)),
				'$$scope' in u && n(5, (r = u.$$scope));
		}),
		[a, i, l, o, f, r]
	);
}
class G1 extends he {
	constructor(e) {
		super(), pe(this, e, W1, U1, me, { value: 0, class: 1 });
	}
}
function J1(s) {
	let e;
	const n = s[3].default,
		t = ie(n, s, s[6], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 64) && ae(t, n, l, l[6], e ? ue(n, l[6], o, null) : fe(l[6]), null);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function X1(s) {
	let e, n, t;
	const l = [
		{
			class:
				'[&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:font-medium [&_[data-cmdk-group-heading]]:text-muted-foreground [&_[data-cmdk-group]:not([hidden])_~[data-cmdk-group]]:pt-0 [&_[data-cmdk-group]]:px-2 [&_[data-cmdk-input-wrapper]_svg]:h-5 [&_[data-cmdk-input-wrapper]_svg]:w-5 [&_[data-cmdk-input]]:h-12 [&_[data-cmdk-item]]:px-4 [&_[data-cmdk-item]]:py-3 [&_[data-cmdk-item]_svg]:h-4 [&_[data-cmdk-item]_svg]:w-4'
		},
		s[2]
	];
	function o(a) {
		s[4](a);
	}
	let r = { $$slots: { default: [J1] }, $$scope: { ctx: s } };
	for (let a = 0; a < l.length; a += 1) r = I(r, l[a]);
	return (
		s[1] !== void 0 && (r.value = s[1]),
		(e = new G1({ props: r })),
		Ne.push(() => rt(e, 'value', o)),
		{
			c() {
				E(e.$$.fragment);
			},
			l(a) {
				S(e.$$.fragment, a);
			},
			m(a, i) {
				C(e, a, i), (t = !0);
			},
			p(a, i) {
				const f = i & 4 ? ge(l, [l[0], Ge(a[2])]) : {};
				i & 64 && (f.$$scope = { dirty: i, ctx: a }),
					!n && i & 2 && ((n = !0), (f.value = a[1]), ot(() => (n = !1))),
					e.$set(f);
			},
			i(a) {
				t || (d(e.$$.fragment, a), (t = !0));
			},
			o(a) {
				g(e.$$.fragment, a), (t = !1);
			},
			d(a) {
				k(e, a);
			}
		}
	);
}
function Y1(s) {
	let e, n;
	return (
		(e = new Ho({
			props: {
				class: 'overflow-hidden p-0 !w-[518px] top-[15%]',
				$$slots: { default: [X1] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l & 70 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Z1(s) {
	let e, n, t;
	const l = [s[2]];
	function o(a) {
		s[5](a);
	}
	let r = { $$slots: { default: [Y1] }, $$scope: { ctx: s } };
	for (let a = 0; a < l.length; a += 1) r = I(r, l[a]);
	return (
		s[0] !== void 0 && (r.open = s[0]),
		(e = new Uo({ props: r })),
		Ne.push(() => rt(e, 'open', o)),
		{
			c() {
				E(e.$$.fragment);
			},
			l(a) {
				S(e.$$.fragment, a);
			},
			m(a, i) {
				C(e, a, i), (t = !0);
			},
			p(a, [i]) {
				const f = i & 4 ? ge(l, [Ge(a[2])]) : {};
				i & 70 && (f.$$scope = { dirty: i, ctx: a }),
					!n && i & 1 && ((n = !0), (f.open = a[0]), ot(() => (n = !1))),
					e.$set(f);
			},
			i(a) {
				t || (d(e.$$.fragment, a), (t = !0));
			},
			o(a) {
				g(e.$$.fragment, a), (t = !1);
			},
			d(a) {
				k(e, a);
			}
		}
	);
}
function Q1(s, e, n) {
	const t = ['open', 'value'];
	let l = ee(e, t),
		{ $$slots: o = {}, $$scope: r } = e,
		{ open: a = !1 } = e,
		{ value: i = void 0 } = e;
	function f(c) {
		(i = c), n(1, i);
	}
	function u(c) {
		(a = c), n(0, a);
	}
	return (
		(s.$$set = (c) => {
			(e = I(I({}, e), ke(c))),
				n(2, (l = ee(e, t))),
				'open' in c && n(0, (a = c.open)),
				'value' in c && n(1, (i = c.value)),
				'$$scope' in c && n(6, (r = c.$$scope));
		}),
		[a, i, l, o, f, u, r]
	);
}
class x1 extends he {
	constructor(e) {
		super(), pe(this, e, Q1, Z1, me, { open: 0, value: 1 });
	}
}
function ep(s) {
	let e;
	const n = s[2].default,
		t = ie(n, s, s[3], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 8) && ae(t, n, l, l[3], e ? ue(n, l[3], o, null) : fe(l[3]), null);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function tp(s) {
	let e, n;
	const t = [{ class: be('py-6 text-center text-sm', s[0]) }, s[1]];
	let l = { $$slots: { default: [ep] }, $$scope: { ctx: s } };
	for (let o = 0; o < t.length; o += 1) l = I(l, t[o]);
	return (
		(e = new f1({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), (n = !0);
			},
			p(o, [r]) {
				const a =
					r & 3
						? ge(t, [r & 1 && { class: be('py-6 text-center text-sm', o[0]) }, r & 2 && Ge(o[1])])
						: {};
				r & 8 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
			},
			i(o) {
				n || (d(e.$$.fragment, o), (n = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (n = !1);
			},
			d(o) {
				k(e, o);
			}
		}
	);
}
function np(s, e, n) {
	const t = ['class'];
	let l = ee(e, t),
		{ $$slots: o = {}, $$scope: r } = e,
		{ class: a = void 0 } = e;
	return (
		(s.$$set = (i) => {
			(e = I(I({}, e), ke(i))),
				n(1, (l = ee(e, t))),
				'class' in i && n(0, (a = i.class)),
				'$$scope' in i && n(3, (r = i.$$scope));
		}),
		[a, l, o, r]
	);
}
class nr extends he {
	constructor(e) {
		super(), pe(this, e, np, tp, me, { class: 0 });
	}
}
function lp(s) {
	let e;
	const n = s[2].default,
		t = ie(n, s, s[3], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 8) && ae(t, n, l, l[3], e ? ue(n, l[3], o, null) : fe(l[3]), null);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function sp(s) {
	let e, n;
	const t = [
		{
			class: be(
				'overflow-hidden p-0 text-foreground [&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:py-1.5 [&_[data-cmdk-group-heading]]:text-xs [&_[data-cmdk-group-heading]]:font-medium [&_[data-cmdk-group-heading]]:text-muted-foreground',
				s[0]
			)
		},
		s[1]
	];
	let l = { $$slots: { default: [lp] }, $$scope: { ctx: s } };
	for (let o = 0; o < t.length; o += 1) l = I(l, t[o]);
	return (
		(e = new h1({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), (n = !0);
			},
			p(o, [r]) {
				const a =
					r & 3
						? ge(t, [
								r & 1 && {
									class: be(
										'overflow-hidden p-0 text-foreground [&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:py-1.5 [&_[data-cmdk-group-heading]]:text-xs [&_[data-cmdk-group-heading]]:font-medium [&_[data-cmdk-group-heading]]:text-muted-foreground',
										o[0]
									)
								},
								r & 2 && Ge(o[1])
							])
						: {};
				r & 8 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
			},
			i(o) {
				n || (d(e.$$.fragment, o), (n = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (n = !1);
			},
			d(o) {
				k(e, o);
			}
		}
	);
}
function op(s, e, n) {
	const t = ['class'];
	let l = ee(e, t),
		{ $$slots: o = {}, $$scope: r } = e,
		{ class: a = void 0 } = e;
	return (
		(s.$$set = (i) => {
			(e = I(I({}, e), ke(i))),
				n(1, (l = ee(e, t))),
				'class' in i && n(0, (a = i.class)),
				'$$scope' in i && n(3, (r = i.$$scope));
		}),
		[a, l, o, r]
	);
}
class yt extends he {
	constructor(e) {
		super(), pe(this, e, op, sp, me, { class: 0 });
	}
}
const rp = (s) => ({ action: s & 32, attrs: s & 64 }),
	to = (s) => ({ action: s[5], attrs: s[6] });
function ip(s) {
	let e;
	const n = s[3].default,
		t = ie(n, s, s[4], to);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 112) && ae(t, n, l, l[4], e ? ue(n, l[4], o, rp) : fe(l[4]), to);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function ap(s) {
	let e, n;
	const t = [
		{ asChild: s[0] },
		{
			class: be(
				'relative flex cursor-default select-none items-center font-light rounded-lg h-10 px-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				s[1]
			)
		},
		s[2]
	];
	let l = {
		$$slots: {
			default: [
				ip,
				({ action: o, attrs: r }) => ({ 5: o, 6: r }),
				({ action: o, attrs: r }) => (o ? 32 : 0) | (r ? 64 : 0)
			]
		},
		$$scope: { ctx: s }
	};
	for (let o = 0; o < t.length; o += 1) l = I(l, t[o]);
	return (
		(e = new P1({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), (n = !0);
			},
			p(o, [r]) {
				const a =
					r & 7
						? ge(t, [
								r & 1 && { asChild: o[0] },
								r & 2 && {
									class: be(
										'relative flex cursor-default select-none items-center font-light rounded-lg h-10 px-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
										o[1]
									)
								},
								r & 4 && Ge(o[2])
							])
						: {};
				r & 112 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
			},
			i(o) {
				n || (d(e.$$.fragment, o), (n = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (n = !1);
			},
			d(o) {
				k(e, o);
			}
		}
	);
}
function fp(s, e, n) {
	const t = ['asChild', 'class'];
	let l = ee(e, t),
		{ $$slots: o = {}, $$scope: r } = e,
		{ asChild: a = !1 } = e,
		{ class: i = void 0 } = e;
	return (
		(s.$$set = (f) => {
			(e = I(I({}, e), ke(f))),
				n(2, (l = ee(e, t))),
				'asChild' in f && n(0, (a = f.asChild)),
				'class' in f && n(1, (i = f.class)),
				'$$scope' in f && n(4, (r = f.$$scope));
		}),
		[a, i, l, o, r]
	);
}
class ut extends he {
	constructor(e) {
		super(), pe(this, e, fp, ap, me, { asChild: 0, class: 1 });
	}
}
function up(s) {
	let e, n, t, l;
	const o = [
		{
			class: be(
				'flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
				s[1]
			)
		},
		s[2]
	];
	function r(i) {
		s[3](i);
	}
	let a = {};
	for (let i = 0; i < o.length; i += 1) a = I(a, o[i]);
	return (
		s[0] !== void 0 && (a.value = s[0]),
		(n = new E1({ props: a })),
		Ne.push(() => rt(n, 'value', r)),
		{
			c() {
				(e = y('div')), E(n.$$.fragment), this.h();
			},
			l(i) {
				e = D(i, 'DIV', { class: !0, 'data-cmdk-input-wrapper': !0 });
				var f = B(e);
				S(n.$$.fragment, f), f.forEach(m), this.h();
			},
			h() {
				P(e, 'class', 'flex items-center border-b px-3'), P(e, 'data-cmdk-input-wrapper', '');
			},
			m(i, f) {
				b(i, e, f), C(n, e, null), (l = !0);
			},
			p(i, [f]) {
				const u =
					f & 6
						? ge(o, [
								f & 2 && {
									class: be(
										'flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
										i[1]
									)
								},
								f & 4 && Ge(i[2])
							])
						: {};
				!t && f & 1 && ((t = !0), (u.value = i[0]), ot(() => (t = !1))), n.$set(u);
			},
			i(i) {
				l || (d(n.$$.fragment, i), (l = !0));
			},
			o(i) {
				g(n.$$.fragment, i), (l = !1);
			},
			d(i) {
				i && m(e), k(n);
			}
		}
	);
}
function cp(s, e, n) {
	const t = ['class', 'value'];
	let l = ee(e, t),
		{ class: o = void 0 } = e,
		{ value: r = '' } = e;
	function a(i) {
		(r = i), n(0, r);
	}
	return (
		(s.$$set = (i) => {
			(e = I(I({}, e), ke(i))),
				n(2, (l = ee(e, t))),
				'class' in i && n(1, (o = i.class)),
				'value' in i && n(0, (r = i.value));
		}),
		[r, o, l, a]
	);
}
class dp extends he {
	constructor(e) {
		super(), pe(this, e, cp, up, me, { class: 1, value: 0 });
	}
}
function mp(s) {
	let e;
	const n = s[2].default,
		t = ie(n, s, s[3], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, o) {
			t && t.m(l, o), (e = !0);
		},
		p(l, o) {
			t && t.p && (!e || o & 8) && ae(t, n, l, l[3], e ? ue(n, l[3], o, null) : fe(l[3]), null);
		},
		i(l) {
			e || (d(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function _p(s) {
	let e, n;
	const t = [{ class: be('max-h-[300px] overflow-y-auto overflow-x-hidden', s[0]) }, s[1]];
	let l = { $$slots: { default: [mp] }, $$scope: { ctx: s } };
	for (let o = 0; o < t.length; o += 1) l = I(l, t[o]);
	return (
		(e = new R1({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o);
			},
			m(o, r) {
				C(e, o, r), (n = !0);
			},
			p(o, [r]) {
				const a =
					r & 3
						? ge(t, [
								r & 1 && { class: be('max-h-[300px] overflow-y-auto overflow-x-hidden', o[0]) },
								r & 2 && Ge(o[1])
							])
						: {};
				r & 8 && (a.$$scope = { dirty: r, ctx: o }), e.$set(a);
			},
			i(o) {
				n || (d(e.$$.fragment, o), (n = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (n = !1);
			},
			d(o) {
				k(e, o);
			}
		}
	);
}
function gp(s, e, n) {
	const t = ['class'];
	let l = ee(e, t),
		{ $$slots: o = {}, $$scope: r } = e,
		{ class: a = void 0 } = e;
	return (
		(s.$$set = (i) => {
			(e = I(I({}, e), ke(i))),
				n(1, (l = ee(e, t))),
				'class' in i && n(0, (a = i.class)),
				'$$scope' in i && n(3, (r = i.$$scope));
		}),
		[a, l, o, r]
	);
}
class hp extends he {
	constructor(e) {
		super(), pe(this, e, gp, _p, me, { class: 0 });
	}
}
const rl = q1,
	Rn = async (s, e) => {
		const n = [];
		return (
			e || (e = await ii().catch(() => [])),
			e.forEach(async (t) => {
				var l, o;
				if (s) {
					if (t.children !== void 0 && !((l = t.name) != null && l.startsWith('.'))) {
						const r = t.path,
							a = t.path.replace(ce(It), '');
						n.push({ path: r, name: a });
						const i = await Rn(s, t.children);
						n.push(...i);
					}
				} else if (t.children === void 0 && !((o = t.name) != null && o.startsWith('.'))) {
					const r = t.path,
						a = t.path.replace(ce(It), '');
					n.push({ path: r, name: a });
				} else {
					const r = await Rn(s, t.children);
					n.push(...r);
				}
			}),
			n
		);
	},
	{ Boolean: On } = ki;
function no(s, e, n) {
	const t = s.slice();
	return (t[53] = e[n]), t;
}
function lo(s, e, n) {
	const t = s.slice();
	return (t[49] = e[n]), t;
}
function so(s, e, n) {
	const t = s.slice();
	return (t[44] = e[n]), t;
}
function oo(s, e, n) {
	const t = s.slice();
	return (t[37] = e[n]), t;
}
function ro(s, e, n) {
	const t = s.slice();
	return (t[40] = e[n]), t;
}
function io(s) {
	let e, n;
	return (
		(e = new nr({
			props: {
				class: 'text-foreground/60 font-light',
				$$slots: { default: [pp] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function pp(s) {
	let e;
	return {
		c() {
			e = X('No commands found');
		},
		l(n) {
			e = J(n, 'No commands found');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function $p(s) {
	let e, n;
	return (
		(e = new yt({ props: { heading: 'Share', $$slots: { default: [Ap] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l[1] & 33554432 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function bp(s) {
	let e, n;
	return (
		(e = new yt({
			props: { heading: 'Help & Support', $$slots: { default: [Ip] }, $$scope: { ctx: s } }
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l[1] & 33554432 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function vp(s) {
	let e, n, t, l;
	const o = [yp, Dp],
		r = [];
	function a(i, f) {
		return i[7] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = r[e] = o[e](s)),
		{
			c() {
				n.c(), (t = te());
			},
			l(i) {
				n.l(i), (t = te());
			},
			m(i, f) {
				r[e].m(i, f), b(i, t, f), (l = !0);
			},
			p(i, f) {
				let u = e;
				(e = a(i)),
					e === u
						? r[e].p(i, f)
						: (Ce(),
							g(r[u], 1, 1, () => {
								r[u] = null;
							}),
							Ee(),
							(n = r[e]),
							n ? n.p(i, f) : ((n = r[e] = o[e](i)), n.c()),
							d(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (d(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && m(t), r[e].d(i);
			}
		}
	);
}
function kp(s) {
	let e, n;
	return (
		(e = new yt({
			props: { heading: 'Change theme...', $$slots: { default: [Jp] }, $$scope: { ctx: s } }
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				(l[0] & 512) | (l[1] & 33554432) && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Cp(s) {
	let e, n;
	return (
		(e = new yt({
			props: { heading: 'Open note...', $$slots: { default: [t$] }, $$scope: { ctx: s } }
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l[1] & 33554432 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Ep(s) {
	let e, n;
	return (
		(e = new yt({
			props: { heading: 'Move note to...', $$slots: { default: [a$] }, $$scope: { ctx: s } }
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				(l[0] & 256) | (l[1] & 33554432) && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Sp(s) {
	let e,
		n,
		t = Ze(Kt),
		l = [];
	for (let r = 0; r < t.length; r += 1) l[r] = $o(oo(s, t, r));
	const o = (r) =>
		g(l[r], 1, 1, () => {
			l[r] = null;
		});
	return {
		c() {
			for (let r = 0; r < l.length; r += 1) l[r].c();
			e = te();
		},
		l(r) {
			for (let a = 0; a < l.length; a += 1) l[a].l(r);
			e = te();
		},
		m(r, a) {
			for (let i = 0; i < l.length; i += 1) l[i] && l[i].m(r, a);
			b(r, e, a), (n = !0);
		},
		p(r, a) {
			if (a[0] & 2048) {
				t = Ze(Kt);
				let i;
				for (i = 0; i < t.length; i += 1) {
					const f = oo(r, t, i);
					l[i]
						? (l[i].p(f, a), d(l[i], 1))
						: ((l[i] = $o(f)), l[i].c(), d(l[i], 1), l[i].m(e.parentNode, e));
				}
				for (Ce(), i = t.length; i < l.length; i += 1) o(i);
				Ee();
			}
		},
		i(r) {
			if (!n) {
				for (let a = 0; a < t.length; a += 1) d(l[a]);
				n = !0;
			}
		},
		o(r) {
			l = l.filter(On);
			for (let a = 0; a < l.length; a += 1) g(l[a]);
			n = !1;
		},
		d(r) {
			r && m(e), vt(l, r);
		}
	};
}
function wp(s) {
	let e, n, t;
	return (
		(e = new Ke({ props: { name: 'browserUrl' } })),
		{
			c() {
				E(e.$$.fragment),
					(n = X(`
					Copy link`));
			},
			l(l) {
				S(e.$$.fragment, l),
					(n = J(
						l,
						`
					Copy link`
					));
			},
			m(l, o) {
				C(e, l, o), b(l, n, o), (t = !0);
			},
			p: Se,
			i(l) {
				t || (d(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				l && m(n), k(e, l);
			}
		}
	);
}
function Tp(s) {
	let e, n, t;
	return (
		(e = new wc({})),
		{
			c() {
				E(e.$$.fragment),
					(n = X(`
						Share on Twitter`));
			},
			l(l) {
				S(e.$$.fragment, l),
					(n = J(
						l,
						`
						Share on Twitter`
					));
			},
			m(l, o) {
				C(e, l, o), b(l, n, o), (t = !0);
			},
			i(l) {
				t || (d(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				l && m(n), k(e, l);
			}
		}
	);
}
function Ap(s) {
	let e, n, t, l, o;
	return (
		(e = new ut({
			props: {
				class:
					'text-foreground/90 gap-3 [&>*]:text-foreground/90 [&>*]:aria-selected:text-foreground [&>*]:fill-foreground/50 [&>*]:aria-selected:fill-foreground',
				value: 'copy_link',
				onSelect: s[29],
				$$slots: { default: [wp] },
				$$scope: { ctx: s }
			}
		})),
		(l = new ut({
			props: {
				class:
					'text-foreground/90 gap-3 [&>*]:text-foreground/90 [&>*]:aria-selected:stroke-foreground [&>*]:stroke-foreground/50 [&>*]:stroke-[2px]',
				value: 'share_on_twitter',
				onSelect: s[30],
				$$slots: { default: [Tp] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment), (n = L()), (t = y('a')), E(l.$$.fragment), this.h();
			},
			l(r) {
				S(e.$$.fragment, r), (n = R(r)), (t = D(r, 'A', { href: !0, target: !0, rel: !0 }));
				var a = B(t);
				S(l.$$.fragment, a), a.forEach(m), this.h();
			},
			h() {
				P(t, 'href', 'https://go.typyst.md/tweet'),
					P(t, 'target', '_blank'),
					P(t, 'rel', 'noopener noreferrer');
			},
			m(r, a) {
				C(e, r, a), b(r, n, a), b(r, t, a), C(l, t, null), (o = !0);
			},
			p(r, a) {
				const i = {};
				a[1] & 33554432 && (i.$$scope = { dirty: a, ctx: r }), e.$set(i);
				const f = {};
				a[1] & 33554432 && (f.$$scope = { dirty: a, ctx: r }), l.$set(f);
			},
			i(r) {
				o || (d(e.$$.fragment, r), d(l.$$.fragment, r), (o = !0));
			},
			o(r) {
				g(e.$$.fragment, r), g(l.$$.fragment, r), (o = !1);
			},
			d(r) {
				r && (m(n), m(t)), k(e, r), k(l);
			}
		}
	);
}
function Op(s) {
	let e, n, t;
	return (
		(e = new Ke({ props: { name: 'heart' } })),
		{
			c() {
				E(e.$$.fragment),
					(n = X(`
						Sponsor Typyst`));
			},
			l(l) {
				S(e.$$.fragment, l),
					(n = J(
						l,
						`
						Sponsor Typyst`
					));
			},
			m(l, o) {
				C(e, l, o), b(l, n, o), (t = !0);
			},
			p: Se,
			i(l) {
				t || (d(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				l && m(n), k(e, l);
			}
		}
	);
}
function Np(s) {
	let e, n, t;
	return (
		(e = new Ke({ props: { name: 'lifebouy' } })),
		{
			c() {
				E(e.$$.fragment),
					(n = X(`
						Get help`));
			},
			l(l) {
				S(e.$$.fragment, l),
					(n = J(
						l,
						`
						Get help`
					));
			},
			m(l, o) {
				C(e, l, o), b(l, n, o), (t = !0);
			},
			p: Se,
			i(l) {
				t || (d(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				l && m(n), k(e, l);
			}
		}
	);
}
function Pp(s) {
	let e, n, t;
	return (
		(e = new Ke({ props: { name: 'commentSquareText' } })),
		{
			c() {
				E(e.$$.fragment),
					(n = X(`
						Leave feedback`));
			},
			l(l) {
				S(e.$$.fragment, l),
					(n = J(
						l,
						`
						Leave feedback`
					));
			},
			m(l, o) {
				C(e, l, o), b(l, n, o), (t = !0);
			},
			p: Se,
			i(l) {
				t || (d(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				l && m(n), k(e, l);
			}
		}
	);
}
function Ip(s) {
	let e, n, t, l, o, r, a, i, f;
	return (
		(n = new ut({
			props: {
				class:
					'text-foreground/90 gap-3 [&>*]:text-foreground/90 [&>*]:aria-selected:text-foreground [&>*]:fill-foreground/50 [&>*]:aria-selected:fill-foreground',
				value: 'sponsor',
				onSelect: s[26],
				$$slots: { default: [Op] },
				$$scope: { ctx: s }
			}
		})),
		(o = new ut({
			props: {
				class:
					'text-foreground/90 gap-3 [&>*]:text-foreground/90 [&>*]:aria-selected:text-foreground [&>*]:fill-foreground/50 [&>*]:aria-selected:fill-foreground',
				value: 'help',
				onSelect: s[27],
				$$slots: { default: [Np] },
				$$scope: { ctx: s }
			}
		})),
		(i = new ut({
			props: {
				class:
					'text-foreground/90 gap-3 [&>*]:text-foreground/90 [&>*]:aria-selected:text-foreground [&>*]:fill-foreground/50 [&>*]:aria-selected:fill-foreground',
				value: 'feedback',
				onSelect: s[28],
				$$slots: { default: [Pp] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = y('a')),
					E(n.$$.fragment),
					(t = L()),
					(l = y('a')),
					E(o.$$.fragment),
					(r = L()),
					(a = y('a')),
					E(i.$$.fragment),
					this.h();
			},
			l(u) {
				e = D(u, 'A', { href: !0, target: !0, rel: !0 });
				var c = B(e);
				S(n.$$.fragment, c),
					c.forEach(m),
					(t = R(u)),
					(l = D(u, 'A', { href: !0, target: !0, rel: !0 }));
				var h = B(l);
				S(o.$$.fragment, h),
					h.forEach(m),
					(r = R(u)),
					(a = D(u, 'A', { href: !0, target: !0, rel: !0 }));
				var _ = B(a);
				S(i.$$.fragment, _), _.forEach(m), this.h();
			},
			h() {
				P(e, 'href', 'https://go.typyst.md/sponsor'),
					P(e, 'target', '_blank'),
					P(e, 'rel', 'noopener noreferrer'),
					P(l, 'href', 'https://go.typyst.md/help'),
					P(l, 'target', '_blank'),
					P(l, 'rel', 'noopener noreferrer'),
					P(a, 'href', 'https://go.typyst.md/feedback'),
					P(a, 'target', '_blank'),
					P(a, 'rel', 'noopener noreferrer');
			},
			m(u, c) {
				b(u, e, c),
					C(n, e, null),
					b(u, t, c),
					b(u, l, c),
					C(o, l, null),
					b(u, r, c),
					b(u, a, c),
					C(i, a, null),
					(f = !0);
			},
			p(u, c) {
				const h = {};
				c[1] & 33554432 && (h.$$scope = { dirty: c, ctx: u }), n.$set(h);
				const _ = {};
				c[1] & 33554432 && (_.$$scope = { dirty: c, ctx: u }), o.$set(_);
				const p = {};
				c[1] & 33554432 && (p.$$scope = { dirty: c, ctx: u }), i.$set(p);
			},
			i(u) {
				f || (d(n.$$.fragment, u), d(o.$$.fragment, u), d(i.$$.fragment, u), (f = !0));
			},
			o(u) {
				g(n.$$.fragment, u), g(o.$$.fragment, u), g(i.$$.fragment, u), (f = !1);
			},
			d(u) {
				u && (m(e), m(t), m(l), m(r), m(a)), k(n), k(o), k(i);
			}
		}
	);
}
function Dp(s) {
	let e, n, t, l;
	e = new yt({
		props: { heading: 'Open collection', $$slots: { default: [Vp] }, $$scope: { ctx: s } }
	});
	let o = {
		ctx: s,
		current: null,
		token: null,
		hasCatch: !0,
		pending: Kp,
		then: jp,
		catch: Rp,
		value: 52,
		error: 47,
		blocks: [, , ,]
	};
	return (
		nl(ai(), o),
		{
			c() {
				E(e.$$.fragment), (n = L()), (t = te()), o.block.c();
			},
			l(r) {
				S(e.$$.fragment, r), (n = R(r)), (t = te()), o.block.l(r);
			},
			m(r, a) {
				C(e, r, a),
					b(r, n, a),
					b(r, t, a),
					o.block.m(r, (o.anchor = a)),
					(o.mount = () => t.parentNode),
					(o.anchor = t),
					(l = !0);
			},
			p(r, a) {
				s = r;
				const i = {};
				(a[0] & 65) | (a[1] & 33554432) && (i.$$scope = { dirty: a, ctx: s }),
					e.$set(i),
					ll(o, s, a);
			},
			i(r) {
				l || (d(e.$$.fragment, r), d(o.block), (l = !0));
			},
			o(r) {
				g(e.$$.fragment, r);
				for (let a = 0; a < 3; a += 1) {
					const i = o.blocks[a];
					g(i);
				}
				l = !1;
			},
			d(r) {
				r && (m(n), m(t)), k(e, r), o.block.d(r), (o.token = null), (o = null);
			}
		}
	);
}
function yp(s) {
	let e, n;
	return (
		(e = new nr({
			props: {
				class: 'text-foreground/60 font-light',
				$$slots: { default: [Hp] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				(l[0] & 128) | (l[1] & 33554432) && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Mp(s) {
	let e, n, t, l, o, r, a;
	return (
		(e = new Ke({ props: { name: 'folderPlus' } })),
		{
			c() {
				E(e.$$.fragment),
					(n = L()),
					(t = y('input')),
					(l = X(`
						Open new collection`)),
					this.h();
			},
			l(i) {
				S(e.$$.fragment, i),
					(n = R(i)),
					(t = D(i, 'INPUT', { type: !0, class: !0, webkitdirectory: !0 })),
					(l = J(
						i,
						`
						Open new collection`
					)),
					this.h();
			},
			h() {
				P(t, 'type', 'file'),
					P(t, 'class', 'hidden'),
					P(t, 'webkitdirectory', !0),
					(t.multiple = !0);
			},
			m(i, f) {
				C(e, i, f),
					b(i, n, f),
					b(i, t, f),
					s[21](t),
					b(i, l, f),
					(o = !0),
					r || ((a = de(t, 'change', s[20])), (r = !0));
			},
			p: Se,
			i(i) {
				o || (d(e.$$.fragment, i), (o = !0));
			},
			o(i) {
				g(e.$$.fragment, i), (o = !1);
			},
			d(i) {
				i && (m(n), m(t), m(l)), k(e, i), s[21](null), (r = !1), a();
			}
		}
	);
}
function Vp(s) {
	let e, n;
	return (
		(e = new ut({
			props: {
				class:
					'text-foreground/90 gap-3 [&>*]:text-foreground/90 [&>*]:aria-selected:text-foreground [&>*]:fill-foreground/50 [&>*]:aria-selected:fill-foreground',
				onSelect: s[22],
				$$slots: { default: [Mp] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l[0] & 64 && (o.onSelect = t[22]),
					(l[0] & 65) | (l[1] & 33554432) && (o.$$scope = { dirty: l, ctx: t }),
					e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Rp(s) {
	let e, n;
	return (
		(e = new yt({
			props: {
				heading: 'Browse recent collections',
				$$slots: { default: [Fp] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l[1] & 33554432 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Lp(s) {
	let e,
		n = s[47].message + '',
		t;
	return {
		c() {
			(e = X('Error loading collections: ')), (t = X(n));
		},
		l(l) {
			(e = J(l, 'Error loading collections: ')), (t = J(l, n));
		},
		m(l, o) {
			b(l, e, o), b(l, t, o);
		},
		p: Se,
		d(l) {
			l && (m(e), m(t));
		}
	};
}
function Fp(s) {
	let e, n;
	return (
		(e = new ut({
			props: { class: 'text-foreground/90', $$slots: { default: [Lp] }, $$scope: { ctx: s } }
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l[1] & 33554432 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function jp(s) {
	let e = s[52].filter(s[12]).length > 0,
		n,
		t,
		l = e && ao(s);
	return {
		c() {
			l && l.c(), (n = te());
		},
		l(o) {
			l && l.l(o), (n = te());
		},
		m(o, r) {
			l && l.m(o, r), b(o, n, r), (t = !0);
		},
		p(o, r) {
			r[0] & 1024 && (e = o[52].filter(o[12]).length > 0),
				e
					? l
						? (l.p(o, r), r[0] & 1024 && d(l, 1))
						: ((l = ao(o)), l.c(), d(l, 1), l.m(n.parentNode, n))
					: l &&
						(Ce(),
						g(l, 1, 1, () => {
							l = null;
						}),
						Ee());
		},
		i(o) {
			t || (d(l), (t = !0));
		},
		o(o) {
			g(l), (t = !1);
		},
		d(o) {
			o && m(n), l && l.d(o);
		}
	};
}
function ao(s) {
	let e, n;
	return (
		(e = new yt({
			props: {
				heading: 'Browse recent collections',
				$$slots: { default: [Bp] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				(l[0] & 1024) | (l[1] & 33554432) && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function zp(s) {
	let e,
		n,
		t,
		l,
		o,
		r,
		a = s[53].name + '',
		i,
		f,
		u,
		c = hl(new Date(s[53].lastOpened)) + '',
		h,
		_,
		p;
	return (
		(t = new Ke({ props: { name: 'folder' } })),
		{
			c() {
				(e = y('div')),
					(n = y('div')),
					E(t.$$.fragment),
					(l = L()),
					(o = y('span')),
					(r = L()),
					(i = X(a)),
					(f = L()),
					(u = y('span')),
					(h = X(c)),
					(_ = L()),
					this.h();
			},
			l($) {
				e = D($, 'DIV', { class: !0 });
				var v = B(e);
				n = D(v, 'DIV', { class: !0 });
				var w = B(n);
				S(t.$$.fragment, w),
					(l = R(w)),
					(o = D(w, 'SPAN', { class: !0 })),
					B(o).forEach(m),
					(r = R(w)),
					(i = J(w, a)),
					w.forEach(m),
					(f = R(v)),
					(u = D(v, 'SPAN', { class: !0 }));
				var T = B(u);
				(h = J(T, c)), T.forEach(m), v.forEach(m), (_ = R($)), this.h();
			},
			h() {
				P(o, 'class', 'text-foreground/80 group:hover:text-foreground/100'),
					P(n, 'class', 'flex items-center gap-1.5'),
					P(u, 'class', 'ml-auto text-xs text-muted-foreground h-full'),
					P(e, 'class', 'flex w-full items-center justify-between');
			},
			m($, v) {
				b($, e, v),
					N(e, n),
					C(t, n, null),
					N(n, l),
					N(n, o),
					N(n, r),
					N(n, i),
					N(e, f),
					N(e, u),
					N(u, h),
					b($, _, v),
					(p = !0);
			},
			p($, v) {
				(!p || v[0] & 1024) && a !== (a = $[53].name + '') && at(i, a),
					(!p || v[0] & 1024) && c !== (c = hl(new Date($[53].lastOpened)) + '') && at(h, c);
			},
			i($) {
				p || (d(t.$$.fragment, $), (p = !0));
			},
			o($) {
				g(t.$$.fragment, $), (p = !1);
			},
			d($) {
				$ && (m(e), m(_)), k(t);
			}
		}
	);
}
function fo(s) {
	let e, n;
	function t() {
		return s[25](s[53]);
	}
	return (
		(e = new ut({
			props: {
				class:
					'text-foreground/90 gap-3 [&>*]:text-foreground/90 [&>*]:aria-selected:text-foreground [&>*]:fill-foreground/50 [&>*]:aria-selected:fill-foreground',
				value: s[53].path,
				onSelect: t,
				$$slots: { default: [zp] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(l) {
				S(e.$$.fragment, l);
			},
			m(l, o) {
				C(e, l, o), (n = !0);
			},
			p(l, o) {
				s = l;
				const r = {};
				o[0] & 1024 && (r.value = s[53].path),
					o[0] & 1024 && (r.onSelect = t),
					(o[0] & 1024) | (o[1] & 33554432) && (r.$$scope = { dirty: o, ctx: s }),
					e.$set(r);
			},
			i(l) {
				n || (d(e.$$.fragment, l), (n = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (n = !1);
			},
			d(l) {
				k(e, l);
			}
		}
	);
}
function Bp(s) {
	let e,
		n,
		t = Ze(s[52].filter(s[23]).sort(s[24])),
		l = [];
	for (let r = 0; r < t.length; r += 1) l[r] = fo(no(s, t, r));
	const o = (r) =>
		g(l[r], 1, 1, () => {
			l[r] = null;
		});
	return {
		c() {
			for (let r = 0; r < l.length; r += 1) l[r].c();
			e = te();
		},
		l(r) {
			for (let a = 0; a < l.length; a += 1) l[a].l(r);
			e = te();
		},
		m(r, a) {
			for (let i = 0; i < l.length; i += 1) l[i] && l[i].m(r, a);
			b(r, e, a), (n = !0);
		},
		p(r, a) {
			if (a[0] & 3072) {
				t = Ze(r[52].filter(r[23]).sort(r[24]));
				let i;
				for (i = 0; i < t.length; i += 1) {
					const f = no(r, t, i);
					l[i]
						? (l[i].p(f, a), d(l[i], 1))
						: ((l[i] = fo(f)), l[i].c(), d(l[i], 1), l[i].m(e.parentNode, e));
				}
				for (Ce(), i = t.length; i < l.length; i += 1) o(i);
				Ee();
			}
		},
		i(r) {
			if (!n) {
				for (let a = 0; a < t.length; a += 1) d(l[a]);
				n = !0;
			}
		},
		o(r) {
			l = l.filter(On);
			for (let a = 0; a < l.length; a += 1) g(l[a]);
			n = !1;
		},
		d(r) {
			r && m(e), vt(l, r);
		}
	};
}
function Kp(s) {
	let e, n;
	return (
		(e = new rl({
			props: { class: 'text-foreground/90', $$slots: { default: [qp] }, $$scope: { ctx: s } }
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l[1] & 33554432 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function qp(s) {
	let e;
	return {
		c() {
			e = X('Recent collections');
		},
		l(n) {
			e = J(n, 'Recent collections');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function Hp(s) {
	let e,
		n,
		t,
		l,
		o,
		r = s[7].progress + '',
		a,
		i,
		f,
		u = 'Hint: You can close this window and continue working.',
		c;
	return (
		(n = new mi({ props: { class: 'w-3.5 h-3.5 animate-spin text-muted-foreground' } })),
		{
			c() {
				(e = y('div')),
					E(n.$$.fragment),
					(t = L()),
					(l = y('div')),
					(o = X('Loading collection... (')),
					(a = X(r)),
					(i = X(`%)
							`)),
					(f = y('span')),
					(f.textContent = u),
					this.h();
			},
			l(h) {
				e = D(h, 'DIV', { class: !0 });
				var _ = B(e);
				S(n.$$.fragment, _), (t = R(_)), (l = D(_, 'DIV', { class: !0 }));
				var p = B(l);
				(o = J(p, 'Loading collection... (')),
					(a = J(p, r)),
					(i = J(
						p,
						`%)
							`
					)),
					(f = D(p, 'SPAN', { class: !0, 'data-svelte-h': !0 })),
					lt(f) !== 'svelte-1fkx81n' && (f.textContent = u),
					p.forEach(m),
					_.forEach(m),
					this.h();
			},
			h() {
				P(f, 'class', 'text-xs text-muted-foreground'),
					P(l, 'class', 'flex flex-col gap-0.5'),
					P(e, 'class', 'flex flex-col items-center gap-1.5');
			},
			m(h, _) {
				b(h, e, _), C(n, e, null), N(e, t), N(e, l), N(l, o), N(l, a), N(l, i), N(l, f), (c = !0);
			},
			p(h, _) {
				(!c || _[0] & 128) && r !== (r = h[7].progress + '') && at(a, r);
			},
			i(h) {
				c || (d(n.$$.fragment, h), (c = !0));
			},
			o(h) {
				g(n.$$.fragment, h), (c = !1);
			},
			d(h) {
				h && m(e), k(n);
			}
		}
	);
}
function uo(s) {
	let e, n;
	return (
		(e = new ut({
			props: {
				class:
					'text-foreground/90 gap-3 [&>*]:text-foreground/90 [&>*]:aria-selected:text-foreground [&>*]:fill-foreground/50 [&>*]:aria-selected:fill-foreground',
				value: 'light',
				onSelect: s[17],
				$$slots: { default: [Up] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l[1] & 33554432 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Up(s) {
	let e, n, t;
	return (
		(e = new Ke({ props: { name: 'sun' } })),
		{
			c() {
				E(e.$$.fragment),
					(n = X(`
						Light`));
			},
			l(l) {
				S(e.$$.fragment, l),
					(n = J(
						l,
						`
						Light`
					));
			},
			m(l, o) {
				C(e, l, o), b(l, n, o), (t = !0);
			},
			p: Se,
			i(l) {
				t || (d(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				l && m(n), k(e, l);
			}
		}
	);
}
function co(s) {
	let e, n;
	return (
		(e = new ut({
			props: {
				class:
					'text-foreground/90 gap-3 [&>*]:text-foreground/90 [&>*]:aria-selected:text-foreground [&>*]:fill-foreground/50 [&>*]:aria-selected:fill-foreground',
				value: 'dark',
				onSelect: s[18],
				$$slots: { default: [Wp] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l[1] & 33554432 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Wp(s) {
	let e, n, t;
	return (
		(e = new Ke({ props: { name: 'moon' } })),
		{
			c() {
				E(e.$$.fragment),
					(n = X(`
						Dark`));
			},
			l(l) {
				S(e.$$.fragment, l),
					(n = J(
						l,
						`
						Dark`
					));
			},
			m(l, o) {
				C(e, l, o), b(l, n, o), (t = !0);
			},
			p: Se,
			i(l) {
				t || (d(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				l && m(n), k(e, l);
			}
		}
	);
}
function mo(s) {
	let e, n;
	return (
		(e = new ut({
			props: {
				class:
					'text-foreground/90 gap-3 [&>*]:text-foreground/90 [&>*]:aria-selected:text-foreground [&>*]:fill-foreground/50 [&>*]:aria-selected:fill-foreground',
				value: 'system',
				onSelect: s[19],
				$$slots: { default: [Gp] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l[1] & 33554432 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Gp(s) {
	let e, n, t;
	return (
		(e = new Ke({ props: { name: 'monitor' } })),
		{
			c() {
				E(e.$$.fragment),
					(n = X(`
						System`));
			},
			l(l) {
				S(e.$$.fragment, l),
					(n = J(
						l,
						`
						System`
					));
			},
			m(l, o) {
				C(e, l, o), b(l, n, o), (t = !0);
			},
			p: Se,
			i(l) {
				t || (d(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				l && m(n), k(e, l);
			}
		}
	);
}
function Jp(s) {
	let e,
		n,
		t,
		l,
		o = s[9] !== 'light' && uo(s),
		r = s[9] !== 'dark' && co(s),
		a = s[9] !== 'system' && mo(s);
	return {
		c() {
			o && o.c(), (e = L()), r && r.c(), (n = L()), a && a.c(), (t = te());
		},
		l(i) {
			o && o.l(i), (e = R(i)), r && r.l(i), (n = R(i)), a && a.l(i), (t = te());
		},
		m(i, f) {
			o && o.m(i, f), b(i, e, f), r && r.m(i, f), b(i, n, f), a && a.m(i, f), b(i, t, f), (l = !0);
		},
		p(i, f) {
			i[9] !== 'light'
				? o
					? (o.p(i, f), f[0] & 512 && d(o, 1))
					: ((o = uo(i)), o.c(), d(o, 1), o.m(e.parentNode, e))
				: o &&
					(Ce(),
					g(o, 1, 1, () => {
						o = null;
					}),
					Ee()),
				i[9] !== 'dark'
					? r
						? (r.p(i, f), f[0] & 512 && d(r, 1))
						: ((r = co(i)), r.c(), d(r, 1), r.m(n.parentNode, n))
					: r &&
						(Ce(),
						g(r, 1, 1, () => {
							r = null;
						}),
						Ee()),
				i[9] !== 'system'
					? a
						? (a.p(i, f), f[0] & 512 && d(a, 1))
						: ((a = mo(i)), a.c(), d(a, 1), a.m(t.parentNode, t))
					: a &&
						(Ce(),
						g(a, 1, 1, () => {
							a = null;
						}),
						Ee());
		},
		i(i) {
			l || (d(o), d(r), d(a), (l = !0));
		},
		o(i) {
			g(o), g(r), g(a), (l = !1);
		},
		d(i) {
			i && (m(e), m(n), m(t)), o && o.d(i), r && r.d(i), a && a.d(i);
		}
	};
}
function Xp(s) {
	let e, n;
	return (
		(e = new ut({
			props: { class: 'text-foreground/90', $$slots: { default: [Yp] }, $$scope: { ctx: s } }
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l[1] & 33554432 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Yp(s) {
	let e,
		n = s[47].message + '',
		t;
	return {
		c() {
			(e = X('Error loading notes: ')), (t = X(n));
		},
		l(l) {
			(e = J(l, 'Error loading notes: ')), (t = J(l, n));
		},
		m(l, o) {
			b(l, e, o), b(l, t, o);
		},
		p: Se,
		d(l) {
			l && (m(e), m(t));
		}
	};
}
function Zp(s) {
	let e,
		n,
		t = Ze(s[48]),
		l = [];
	for (let r = 0; r < t.length; r += 1) l[r] = _o(lo(s, t, r));
	const o = (r) =>
		g(l[r], 1, 1, () => {
			l[r] = null;
		});
	return {
		c() {
			for (let r = 0; r < l.length; r += 1) l[r].c();
			e = te();
		},
		l(r) {
			for (let a = 0; a < l.length; a += 1) l[a].l(r);
			e = te();
		},
		m(r, a) {
			for (let i = 0; i < l.length; i += 1) l[i] && l[i].m(r, a);
			b(r, e, a), (n = !0);
		},
		p(r, a) {
			if (a[0] & 2048) {
				t = Ze(r[48]);
				let i;
				for (i = 0; i < t.length; i += 1) {
					const f = lo(r, t, i);
					l[i]
						? (l[i].p(f, a), d(l[i], 1))
						: ((l[i] = _o(f)), l[i].c(), d(l[i], 1), l[i].m(e.parentNode, e));
				}
				for (Ce(), i = t.length; i < l.length; i += 1) o(i);
				Ee();
			}
		},
		i(r) {
			if (!n) {
				for (let a = 0; a < t.length; a += 1) d(l[a]);
				n = !0;
			}
		},
		o(r) {
			l = l.filter(On);
			for (let a = 0; a < l.length; a += 1) g(l[a]);
			n = !1;
		},
		d(r) {
			r && m(e), vt(l, r);
		}
	};
}
function Qp(s) {
	let e,
		n,
		t = s[49].name.slice(1).replaceAll('/', ' > ') + '',
		l,
		o,
		r;
	return (
		(e = new Ke({ props: { name: 'note' } })),
		{
			c() {
				E(e.$$.fragment), (n = L()), (l = X(t)), (o = L());
			},
			l(a) {
				S(e.$$.fragment, a), (n = R(a)), (l = J(a, t)), (o = R(a));
			},
			m(a, i) {
				C(e, a, i), b(a, n, i), b(a, l, i), b(a, o, i), (r = !0);
			},
			p: Se,
			i(a) {
				r || (d(e.$$.fragment, a), (r = !0));
			},
			o(a) {
				g(e.$$.fragment, a), (r = !1);
			},
			d(a) {
				a && (m(n), m(l), m(o)), k(e, a);
			}
		}
	);
}
function _o(s) {
	let e, n;
	function t() {
		return s[16](s[49]);
	}
	return (
		(e = new ut({
			props: {
				class:
					'text-foreground/90 gap-3 [&>*]:text-foreground/90 [&>*]:aria-selected:text-foreground [&>*]:fill-foreground/50 [&>*]:aria-selected:fill-foreground',
				value: s[49].path,
				onSelect: t,
				$$slots: { default: [Qp] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(l) {
				S(e.$$.fragment, l);
			},
			m(l, o) {
				C(e, l, o), (n = !0);
			},
			p(l, o) {
				s = l;
				const r = {};
				o[1] & 33554432 && (r.$$scope = { dirty: o, ctx: s }), e.$set(r);
			},
			i(l) {
				n || (d(e.$$.fragment, l), (n = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (n = !1);
			},
			d(l) {
				k(e, l);
			}
		}
	);
}
function xp(s) {
	let e, n;
	return (
		(e = new rl({
			props: { class: 'text-foreground/90', $$slots: { default: [e$] }, $$scope: { ctx: s } }
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l[1] & 33554432 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function e$(s) {
	let e;
	return {
		c() {
			e = X('Loading notes...');
		},
		l(n) {
			e = J(n, 'Loading notes...');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function t$(s) {
	let e,
		n,
		t = {
			ctx: s,
			current: null,
			token: null,
			hasCatch: !0,
			pending: xp,
			then: Zp,
			catch: Xp,
			value: 48,
			error: 47,
			blocks: [, , ,]
		};
	return (
		nl(Rn(), t),
		{
			c() {
				(e = te()), t.block.c();
			},
			l(l) {
				(e = te()), t.block.l(l);
			},
			m(l, o) {
				b(l, e, o),
					t.block.m(l, (t.anchor = o)),
					(t.mount = () => e.parentNode),
					(t.anchor = e),
					(n = !0);
			},
			p(l, o) {
				(s = l), ll(t, s, o);
			},
			i(l) {
				n || (d(t.block), (n = !0));
			},
			o(l) {
				for (let o = 0; o < 3; o += 1) {
					const r = t.blocks[o];
					g(r);
				}
				n = !1;
			},
			d(l) {
				l && m(e), t.block.d(l), (t.token = null), (t = null);
			}
		}
	);
}
function n$(s) {
	let e, n;
	return (
		(e = new ut({
			props: { class: 'text-foreground/90', $$slots: { default: [l$] }, $$scope: { ctx: s } }
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l[1] & 33554432 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function l$(s) {
	let e,
		n = s[47].message + '',
		t;
	return {
		c() {
			(e = X('Error loading folders: ')), (t = X(n));
		},
		l(l) {
			(e = J(l, 'Error loading folders: ')), (t = J(l, n));
		},
		m(l, o) {
			b(l, e, o), b(l, t, o);
		},
		p: Se,
		d(l) {
			l && (m(e), m(t));
		}
	};
}
function s$(s) {
	let e,
		n,
		t = Ze(s[43]),
		l = [];
	for (let r = 0; r < t.length; r += 1) l[r] = ho(so(s, t, r));
	const o = (r) =>
		g(l[r], 1, 1, () => {
			l[r] = null;
		});
	return {
		c() {
			for (let r = 0; r < l.length; r += 1) l[r].c();
			e = te();
		},
		l(r) {
			for (let a = 0; a < l.length; a += 1) l[a].l(r);
			e = te();
		},
		m(r, a) {
			for (let i = 0; i < l.length; i += 1) l[i] && l[i].m(r, a);
			b(r, e, a), (n = !0);
		},
		p(r, a) {
			if (a[0] & 2304) {
				t = Ze(r[43]);
				let i;
				for (i = 0; i < t.length; i += 1) {
					const f = so(r, t, i);
					l[i]
						? (l[i].p(f, a), d(l[i], 1))
						: ((l[i] = ho(f)), l[i].c(), d(l[i], 1), l[i].m(e.parentNode, e));
				}
				for (Ce(), i = t.length; i < l.length; i += 1) o(i);
				Ee();
			}
		},
		i(r) {
			if (!n) {
				for (let a = 0; a < t.length; a += 1) d(l[a]);
				n = !0;
			}
		},
		o(r) {
			l = l.filter(On);
			for (let a = 0; a < l.length; a += 1) g(l[a]);
			n = !1;
		},
		d(r) {
			r && m(e), vt(l, r);
		}
	};
}
function go(s) {
	let e, n;
	function t() {
		return s[15](s[44]);
	}
	return (
		(e = new ut({
			props: {
				class:
					'text-foreground/90 gap-3 [&>*]:text-foreground/90 [&>*]:aria-selected:text-foreground [&>*]:fill-foreground/50 [&>*]:aria-selected:fill-foreground',
				value: s[44].path,
				onSelect: t,
				$$slots: { default: [o$] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(l) {
				S(e.$$.fragment, l);
			},
			m(l, o) {
				C(e, l, o), (n = !0);
			},
			p(l, o) {
				s = l;
				const r = {};
				o[0] & 256 && (r.onSelect = t),
					o[1] & 33554432 && (r.$$scope = { dirty: o, ctx: s }),
					e.$set(r);
			},
			i(l) {
				n || (d(e.$$.fragment, l), (n = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (n = !1);
			},
			d(l) {
				k(e, l);
			}
		}
	);
}
function o$(s) {
	let e,
		n,
		t = s[44].name.slice(1).replaceAll('/', ' > ') + '',
		l,
		o,
		r;
	return (
		(e = new Ke({ props: { name: 'folder' } })),
		{
			c() {
				E(e.$$.fragment), (n = L()), (l = X(t)), (o = L());
			},
			l(a) {
				S(e.$$.fragment, a), (n = R(a)), (l = J(a, t)), (o = R(a));
			},
			m(a, i) {
				C(e, a, i), b(a, n, i), b(a, l, i), b(a, o, i), (r = !0);
			},
			p: Se,
			i(a) {
				r || (d(e.$$.fragment, a), (r = !0));
			},
			o(a) {
				g(e.$$.fragment, a), (r = !1);
			},
			d(a) {
				a && (m(n), m(l), m(o)), k(e, a);
			}
		}
	);
}
function ho(s) {
	var o;
	let e = s[44].path + `/${(o = s[8]) == null ? void 0 : o.split('/').pop()}` !== s[8],
		n,
		t,
		l = e && go(s);
	return {
		c() {
			l && l.c(), (n = te());
		},
		l(r) {
			l && l.l(r), (n = te());
		},
		m(r, a) {
			l && l.m(r, a), b(r, n, a), (t = !0);
		},
		p(r, a) {
			var i;
			a[0] & 256 &&
				(e = r[44].path + `/${(i = r[8]) == null ? void 0 : i.split('/').pop()}` !== r[8]),
				e
					? l
						? (l.p(r, a), a[0] & 256 && d(l, 1))
						: ((l = go(r)), l.c(), d(l, 1), l.m(n.parentNode, n))
					: l &&
						(Ce(),
						g(l, 1, 1, () => {
							l = null;
						}),
						Ee());
		},
		i(r) {
			t || (d(l), (t = !0));
		},
		o(r) {
			g(l), (t = !1);
		},
		d(r) {
			r && m(n), l && l.d(r);
		}
	};
}
function r$(s) {
	let e, n;
	return (
		(e = new rl({
			props: { class: 'text-foreground/90', $$slots: { default: [i$] }, $$scope: { ctx: s } }
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l[1] & 33554432 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function i$(s) {
	let e;
	return {
		c() {
			e = X('Loading folders...');
		},
		l(n) {
			e = J(n, 'Loading folders...');
		},
		m(n, t) {
			b(n, e, t);
		},
		d(n) {
			n && m(e);
		}
	};
}
function a$(s) {
	let e,
		n,
		t = {
			ctx: s,
			current: null,
			token: null,
			hasCatch: !0,
			pending: r$,
			then: s$,
			catch: n$,
			value: 43,
			error: 47,
			blocks: [, , ,]
		};
	return (
		nl(Rn(!0), t),
		{
			c() {
				(e = te()), t.block.c();
			},
			l(l) {
				(e = te()), t.block.l(l);
			},
			m(l, o) {
				b(l, e, o),
					t.block.m(l, (t.anchor = o)),
					(t.mount = () => e.parentNode),
					(t.anchor = e),
					(n = !0);
			},
			p(l, o) {
				(s = l), ll(t, s, o);
			},
			i(l) {
				n || (d(t.block), (n = !0));
			},
			o(l) {
				for (let o = 0; o < 3; o += 1) {
					const r = t.blocks[o];
					g(r);
				}
				n = !1;
			},
			d(l) {
				l && m(e), t.block.d(l), (t.token = null), (t = null);
			}
		}
	);
}
function f$(s) {
	let e, n;
	return (
		(e = new Ke({ props: { name: s[40].icon } })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function u$(s) {
	let e,
		n = Zn(s[40].shortcut) + '',
		t;
	return {
		c() {
			(e = y('span')), (t = X(n)), this.h();
		},
		l(l) {
			e = D(l, 'SPAN', { class: !0 });
			var o = B(e);
			(t = J(o, n)), o.forEach(m), this.h();
		},
		h() {
			P(e, 'class', 'ml-auto text-xs tracking-widest text-muted-foreground h-full');
		},
		m(l, o) {
			b(l, e, o), N(e, t);
		},
		d(l) {
			l && m(e);
		}
	};
}
function c$(s) {
	let e,
		n,
		t,
		l,
		o,
		r = s[40].title + '',
		a,
		i,
		f,
		u = s[40].icon && f$(s),
		c = s[40].shortcut && u$(s);
	return {
		c() {
			(e = y('div')),
				(n = y('div')),
				u && u.c(),
				(t = L()),
				(l = y('span')),
				(o = L()),
				(a = X(r)),
				(i = L()),
				c && c.c(),
				this.h();
		},
		l(h) {
			e = D(h, 'DIV', { class: !0 });
			var _ = B(e);
			n = D(_, 'DIV', { class: !0 });
			var p = B(n);
			u && u.l(p),
				(t = R(p)),
				(l = D(p, 'SPAN', { class: !0 })),
				B(l).forEach(m),
				(o = R(p)),
				(a = J(p, r)),
				p.forEach(m),
				(i = R(_)),
				c && c.l(_),
				_.forEach(m),
				this.h();
		},
		h() {
			P(l, 'class', 'text-foreground/80 group:hover:text-foreground/100'),
				P(n, 'class', 'flex items-center gap-1.5'),
				P(e, 'class', 'flex w-full items-center justify-between');
		},
		m(h, _) {
			b(h, e, _),
				N(e, n),
				u && u.m(n, null),
				N(n, t),
				N(n, l),
				N(n, o),
				N(n, a),
				N(e, i),
				c && c.m(e, null),
				(f = !0);
		},
		p: Se,
		i(h) {
			f || (d(u), (f = !0));
		},
		o(h) {
			g(u), (f = !1);
		},
		d(h) {
			h && m(e), u && u.d(), c && c.d();
		}
	};
}
function po(s) {
	let e, n;
	function t() {
		return s[14](s[40]);
	}
	return (
		(e = new ut({
			props: {
				class:
					'[&>*]:text-foreground/90 [&>*]:aria-selected:text-foreground [&>*]:fill-foreground/50 [&>*]:aria-selected:fill-foreground',
				value: s[40].title,
				onSelect: t,
				$$slots: { default: [c$] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(l) {
				S(e.$$.fragment, l);
			},
			m(l, o) {
				C(e, l, o), (n = !0);
			},
			p(l, o) {
				s = l;
				const r = {};
				o[1] & 33554432 && (r.$$scope = { dirty: o, ctx: s }), e.$set(r);
			},
			i(l) {
				n || (d(e.$$.fragment, l), (n = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (n = !1);
			},
			d(l) {
				k(e, l);
			}
		}
	);
}
function d$(s) {
	let e,
		n,
		t = Ze(s[37].commands),
		l = [];
	for (let r = 0; r < t.length; r += 1) l[r] = po(ro(s, t, r));
	const o = (r) =>
		g(l[r], 1, 1, () => {
			l[r] = null;
		});
	return {
		c() {
			for (let r = 0; r < l.length; r += 1) l[r].c();
			e = L();
		},
		l(r) {
			for (let a = 0; a < l.length; a += 1) l[a].l(r);
			e = R(r);
		},
		m(r, a) {
			for (let i = 0; i < l.length; i += 1) l[i] && l[i].m(r, a);
			b(r, e, a), (n = !0);
		},
		p(r, a) {
			if (a[0] & 2048) {
				t = Ze(r[37].commands);
				let i;
				for (i = 0; i < t.length; i += 1) {
					const f = ro(r, t, i);
					l[i]
						? (l[i].p(f, a), d(l[i], 1))
						: ((l[i] = po(f)), l[i].c(), d(l[i], 1), l[i].m(e.parentNode, e));
				}
				for (Ce(), i = t.length; i < l.length; i += 1) o(i);
				Ee();
			}
		},
		i(r) {
			if (!n) {
				for (let a = 0; a < t.length; a += 1) d(l[a]);
				n = !0;
			}
		},
		o(r) {
			l = l.filter(On);
			for (let a = 0; a < l.length; a += 1) g(l[a]);
			n = !1;
		},
		d(r) {
			r && m(e), vt(l, r);
		}
	};
}
function $o(s) {
	let e, n;
	return (
		(e = new yt({
			props: { heading: s[37].name, $$slots: { default: [d$] }, $$scope: { ctx: s } }
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			l(t) {
				S(e.$$.fragment, t);
			},
			m(t, l) {
				C(e, t, l), (n = !0);
			},
			p(t, l) {
				const o = {};
				l[1] & 33554432 && (o.$$scope = { dirty: l, ctx: t }), e.$set(o);
			},
			i(t) {
				n || (d(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function m$(s) {
	let e,
		n,
		t,
		l,
		o,
		r = !s[7] && io(s);
	const a = [Sp, Ep, Cp, kp, vp, bp, $p],
		i = [];
	function f(u, c) {
		return u[4] === 'default'
			? 0
			: u[4] === 'move_note'
				? 1
				: u[4] === 'open_note'
					? 2
					: u[4] === 'change_theme'
						? 3
						: u[4] === 'open_collection'
							? 4
							: u[4] === 'help_and_feedback'
								? 5
								: u[4] === 'share'
									? 6
									: -1;
	}
	return (
		~(n = f(s)) && (t = i[n] = a[n](s)),
		{
			c() {
				r && r.c(), (e = L()), t && t.c(), (l = te());
			},
			l(u) {
				r && r.l(u), (e = R(u)), t && t.l(u), (l = te());
			},
			m(u, c) {
				r && r.m(u, c), b(u, e, c), ~n && i[n].m(u, c), b(u, l, c), (o = !0);
			},
			p(u, c) {
				u[7]
					? r &&
						(Ce(),
						g(r, 1, 1, () => {
							r = null;
						}),
						Ee())
					: r
						? c[0] & 128 && d(r, 1)
						: ((r = io(u)), r.c(), d(r, 1), r.m(e.parentNode, e));
				let h = n;
				(n = f(u)),
					n === h
						? ~n && i[n].p(u, c)
						: (t &&
								(Ce(),
								g(i[h], 1, 1, () => {
									i[h] = null;
								}),
								Ee()),
							~n
								? ((t = i[n]),
									t ? t.p(u, c) : ((t = i[n] = a[n](u)), t.c()),
									d(t, 1),
									t.m(l.parentNode, l))
								: (t = null));
			},
			i(u) {
				o || (d(r), d(t), (o = !0));
			},
			o(u) {
				g(r), g(t), (o = !1);
			},
			d(u) {
				u && (m(e), m(l)), r && r.d(u), ~n && i[n].d(u);
			}
		}
	);
}
function _$(s) {
	let e, n, t, l, o;
	function r(i) {
		s[13](i);
	}
	let a = { placeholder: 'Search or jump to...' };
	return (
		s[2] !== void 0 && (a.value = s[2]),
		(e = new dp({ props: a })),
		Ne.push(() => rt(e, 'value', r)),
		(l = new hp({ props: { $$slots: { default: [m$] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment), (t = L()), E(l.$$.fragment);
			},
			l(i) {
				S(e.$$.fragment, i), (t = R(i)), S(l.$$.fragment, i);
			},
			m(i, f) {
				C(e, i, f), b(i, t, f), C(l, i, f), (o = !0);
			},
			p(i, f) {
				const u = {};
				!n && f[0] & 4 && ((n = !0), (u.value = i[2]), ot(() => (n = !1))), e.$set(u);
				const c = {};
				(f[0] & 2001) | (f[1] & 33554432) && (c.$$scope = { dirty: f, ctx: i }), l.$set(c);
			},
			i(i) {
				o || (d(e.$$.fragment, i), d(l.$$.fragment, i), (o = !0));
			},
			o(i) {
				g(e.$$.fragment, i), g(l.$$.fragment, i), (o = !1);
			},
			d(i) {
				i && m(t), k(e, i), k(l, i);
			}
		}
	);
}
function g$(s) {
	let e, n, t, l;
	function o(i) {
		s[32](i);
	}
	function r(i) {
		s[33](i);
	}
	let a = { loop: !0, onKeydown: s[31], $$slots: { default: [_$] }, $$scope: { ctx: s } };
	return (
		s[1] !== void 0 && (a.open = s[1]),
		s[3] !== void 0 && (a.value = s[3]),
		(e = new x1({ props: a })),
		Ne.push(() => rt(e, 'open', o)),
		Ne.push(() => rt(e, 'value', r)),
		{
			c() {
				E(e.$$.fragment);
			},
			l(i) {
				S(e.$$.fragment, i);
			},
			m(i, f) {
				C(e, i, f), (l = !0);
			},
			p(i, f) {
				const u = {};
				f[0] & 52 && (u.onKeydown = i[31]),
					(f[0] & 2005) | (f[1] & 33554432) && (u.$$scope = { dirty: f, ctx: i }),
					!n && f[0] & 2 && ((n = !0), (u.open = i[1]), ot(() => (n = !1))),
					!t && f[0] & 8 && ((t = !0), (u.value = i[3]), ot(() => (t = !1))),
					e.$set(u);
			},
			i(i) {
				l || (d(e.$$.fragment, i), (l = !0));
			},
			o(i) {
				g(e.$$.fragment, i), (l = !1);
			},
			d(i) {
				k(e, i);
			}
		}
	);
}
function h$(s, e, n) {
	let t, l, o;
	Ae(s, Mn, (le) => n(8, (t = le))),
		Ae(s, tl, (le) => n(9, (l = le))),
		Ae(s, It, (le) => n(10, (o = le)));
	let r = !1,
		a = '',
		i,
		f,
		u = '',
		c = null,
		h;
	const _ = {
		'cmd+k': 'default',
		'cmd+j': 'open_note',
		'cmd+shift+m': 'move_note',
		'cmd+shift+t': 'change_theme',
		'cmd+o': 'open_collection',
		'cmd+shift+h': 'help_and_feedback',
		'cmd+shift+l': 'share'
	};
	function p(le) {
		if (!le) n(1, (r = !1)), n(5, (u = ''));
		else {
			const se = document.querySelector('[data-dialog-content]');
			se &&
				se.animate(
					[
						{ transform: 'scale(1)' },
						{ transform: 'scale(0.98, 0.98)' },
						{ transform: 'scale(1, 1)' }
					],
					{ duration: 225, easing: 'ease' }
				);
		}
		n(4, (f = le)), n(2, (a = ''));
	}
	dn(() => {
		function le(se) {
			const $e = `${se.metaKey || se.ctrlKey ? 'cmd+' : ''}${se.shiftKey ? 'shift+' : ''}${se.key}`;
			(se.metaKey || se.ctrlKey || se.shiftKey) &&
				_[$e] &&
				(u === $e || u === '') &&
				(se.preventDefault(), n(5, (u = $e)), n(4, (f = _[$e])), n(1, (r = !r)), r || p(void 0));
		}
		return (
			document.addEventListener('keydown', le),
			() => {
				document.removeEventListener('keydown', le);
			}
		);
	}),
		Mn.subscribe((le) => {
			Kt[0].name !== 'Notes' && Kt.shift(),
				le && (Kt.unshift(qo(le)), n(3, (i = Kt[0].commands[0].title)));
		});
	async function $() {
		var $e;
		if (!w || w.length === 0) return console.error('No files selected');
		n(7, (h = { loading: !0, progress: 0 }));
		const le = ($e = w[0]) == null ? void 0 : $e.webkitRelativePath.split('/')[0];
		await Cl(`/${le}`);
		const se = new Set();
		for (let Ue = 0; Ue < w.length; Ue++) {
			const He = w[Ue];
			if (!He) continue;
			const ze = `/${He.webkitRelativePath}`,
				A = He.webkitRelativePath.split('/'),
				Q = A[A.length - 1];
			let Oe = Math.round(((Ue + 1) / w.length) * 100);
			n(7, (h = { loading: !0, progress: Oe }));
			let Re = '';
			for (let Le = 0; Le < A.length - 1; Le++)
				(Re += '/' + A[Le]), se.has(Re) || (await v(Re, le), se.add(Re));
			if (He.name.toLowerCase().endsWith('.md'))
				try {
					const Le = await He.text();
					await un
						.insert(gl)
						.values({
							name: Q,
							path: ze,
							content: Le,
							parentPath: Re,
							collectionPath: `/${le}`,
							size: He.size,
							isFolder: !1
						}),
						console.log('Inserted file:', Q);
				} catch (Le) {
					console.error('Error processing file:', Q, Le);
				}
			else console.warn('Skipping non-Markdown file:', Q);
		}
		n(7, (h = void 0)), await El('/notes'), p(void 0);
	}
	async function v(le, se) {
		const $e = le.split('/').filter(Boolean),
			Ue = $e[$e.length - 1],
			He = '/' + $e.slice(0, -1).join('/');
		try {
			await un
				.insert(gl)
				.values({
					name: Ue,
					path: le,
					content: void 0,
					parentPath: He,
					collectionPath: `/${se}`,
					isFolder: !0
				}),
				console.log('Created folder entry:', le);
		} catch (ze) {
			console.error('Error creating folder entry:', le, ze);
		}
	}
	let w;
	const T = (le) => le.path !== o;
	function j(le) {
		(a = le), n(2, a);
	}
	const Y = (le) => {
			var $e;
			const se = ($e = le.onSelect) == null ? void 0 : $e.call(le);
			p(typeof se > 'u' ? void 0 : se);
		},
		V = (le) => {
			yr(t || '', le.path), p(void 0);
		},
		F = (le) => {
			So(le.path), p(void 0);
		},
		U = () => {
			Gt('light'), p(void 0);
		},
		ne = () => {
			Gt('dark'), p(void 0);
		},
		oe = () => {
			Gt('system'), p(void 0);
		};
	function O() {
		(w = this.files), n(0, w);
	}
	function G(le) {
		Ne[le ? 'unshift' : 'push'](() => {
			(c = le), n(6, c);
		});
	}
	const q = async () => {
			c == null || c.click();
		},
		K = (le) => le.path !== o,
		z = (le, se) => +new Date(se.lastOpened) - +new Date(le.lastOpened),
		x = async (le) => {
			await El('/notes'), Cl(le.path), p(void 0);
		},
		M = () => {
			p(void 0);
		},
		H = () => {
			p(void 0);
		},
		W = () => {
			p(void 0);
		},
		Te = () => {
			navigator.clipboard.writeText('https://typyst.md'), p(void 0);
		},
		Pe = () => {
			p(void 0);
		},
		De = (le) => {
			le.key === 'Escape'
				? (p(void 0), n(5, (u = '')))
				: le.key === 'Backspace' && !a && f !== 'default' && u === 'cmd+k' && p('default');
		};
	function Ie(le) {
		(r = le), n(1, r);
	}
	function we(le) {
		(i = le), n(3, i);
	}
	return (
		(s.$$.update = () => {
			s.$$.dirty[0] & 1 && w && $();
		}),
		[
			w,
			r,
			a,
			i,
			f,
			u,
			c,
			h,
			t,
			l,
			o,
			p,
			T,
			j,
			Y,
			V,
			F,
			U,
			ne,
			oe,
			O,
			G,
			q,
			K,
			z,
			x,
			M,
			H,
			W,
			Te,
			Pe,
			De,
			Ie,
			we
		]
	);
}
class p$ extends he {
	constructor(e) {
		super(), pe(this, e, h$, g$, me, {}, null, [-1, -1]);
	}
}
function $$(s) {
	let e,
		n = '',
		t,
		l,
		o,
		r = '',
		a;
	return {
		c() {
			(e = y('script')),
				(e.innerHTML = n),
				(l = L()),
				(o = y('script')),
				(o.innerHTML = r),
				this.h();
		},
		l(i) {
			(e = D(i, 'SCRIPT', { src: !0, 'data-website-id': !0, 'data-svelte-h': !0 })),
				lt(e) !== 'svelte-131wei2' && (e.innerHTML = n),
				(l = R(i)),
				(o = D(i, 'SCRIPT', { src: !0, 'data-token': !0, 'data-svelte-h': !0 })),
				lt(o) !== 'svelte-1q1jjuo' && (o.innerHTML = r),
				this.h();
		},
		h() {
			(e.defer = !0),
				cl(e.src, (t = 'https://cloud.umami.is/script.js')) || P(e, 'src', t),
				P(e, 'data-website-id', '279d8c15-20ea-4cc9-91b0-647c90767f15'),
				(o.async = !0),
				cl(o.src, (a = 'https://cdn.seline.so/seline.js')) || P(o, 'src', a),
				P(o, 'data-token', 'd028e058129b859');
		},
		m(i, f) {
			b(i, e, f), b(i, l, f), b(i, o, f);
		},
		d(i) {
			i && (m(e), m(l), m(o));
		}
	};
}
function b$(s) {
	let e,
		n,
		t,
		l,
		o =
			'<h1 class="text-secondary-foreground">Seems like you&#39;re on mobile</h1> <p class="text-muted-foreground text-sm leading-relaxed">Typyst isn&#39;t yet supported on mobile devices.<br/>Please try again on a desktop.</p>',
		r;
	return (
		(n = new Ke({
			props: { name: 'phoneOff', class: 'w-9 h-9 fill-none text-secondary-foreground' }
		})),
		{
			c() {
				(e = y('main')), E(n.$$.fragment), (t = L()), (l = y('div')), (l.innerHTML = o), this.h();
			},
			l(a) {
				e = D(a, 'MAIN', { class: !0 });
				var i = B(e);
				S(n.$$.fragment, i),
					(t = R(i)),
					(l = D(i, 'DIV', { class: !0, 'data-svelte-h': !0 })),
					lt(l) !== 'svelte-14tnufy' && (l.innerHTML = o),
					i.forEach(m),
					this.h();
			},
			h() {
				P(l, 'class', 'flex flex-col text-center gap-2'),
					P(e, 'class', 'flex min-h-[100dvh] w-full flex-col items-center justify-center gap-5');
			},
			m(a, i) {
				b(a, e, i), C(n, e, null), N(e, t), N(e, l), (r = !0);
			},
			p: Se,
			i(a) {
				r || (d(n.$$.fragment, a), (r = !0));
			},
			o(a) {
				g(n.$$.fragment, a), (r = !1);
			},
			d(a) {
				a && m(e), k(n);
			}
		}
	);
}
function v$(s) {
	let e, n, t, l, o, r, a, i, f, u, c, h;
	(e = new p$({})), (t = new Ai({})), (o = new rd({})), (a = new Dg({}));
	const _ = s[4].default,
		p = ie(_, s, s[3], null);
	return (
		(c = new Yc({})),
		{
			c() {
				E(e.$$.fragment),
					(n = L()),
					E(t.$$.fragment),
					(l = L()),
					E(o.$$.fragment),
					(r = L()),
					E(a.$$.fragment),
					(i = L()),
					(f = y('main')),
					p && p.c(),
					(u = L()),
					E(c.$$.fragment),
					this.h();
			},
			l($) {
				S(e.$$.fragment, $),
					(n = R($)),
					S(t.$$.fragment, $),
					(l = R($)),
					S(o.$$.fragment, $),
					(r = R($)),
					S(a.$$.fragment, $),
					(i = R($)),
					(f = D($, 'MAIN', { class: !0 }));
				var v = B(f);
				p && p.l(v), v.forEach(m), (u = R($)), S(c.$$.fragment, $), this.h();
			},
			h() {
				P(f, 'class', 'flex min-h-screen w-full items-center justify-center');
			},
			m($, v) {
				C(e, $, v),
					b($, n, v),
					C(t, $, v),
					b($, l, v),
					C(o, $, v),
					b($, r, v),
					C(a, $, v),
					b($, i, v),
					b($, f, v),
					p && p.m(f, null),
					b($, u, v),
					C(c, $, v),
					(h = !0);
			},
			p($, v) {
				p && p.p && (!h || v & 8) && ae(p, _, $, $[3], h ? ue(_, $[3], v, null) : fe($[3]), null);
			},
			i($) {
				h ||
					(d(e.$$.fragment, $),
					d(t.$$.fragment, $),
					d(o.$$.fragment, $),
					d(a.$$.fragment, $),
					d(p, $),
					d(c.$$.fragment, $),
					(h = !0));
			},
			o($) {
				g(e.$$.fragment, $),
					g(t.$$.fragment, $),
					g(o.$$.fragment, $),
					g(a.$$.fragment, $),
					g(p, $),
					g(c.$$.fragment, $),
					(h = !1);
			},
			d($) {
				$ && (m(n), m(l), m(r), m(i), m(f), m(u)),
					k(e, $),
					k(t, $),
					k(o, $),
					k(a, $),
					p && p.d($),
					k(c, $);
			}
		}
	);
}
function k$(s) {
	let e,
		n,
		t,
		l,
		o,
		r,
		a,
		i,
		f,
		u,
		c,
		h,
		_,
		p,
		$,
		v,
		w,
		T,
		j,
		Y,
		V,
		F,
		U,
		ne,
		oe,
		O,
		G,
		q,
		K = $$();
	const z = [v$, b$],
		x = [];
	function M(H, W) {
		return H[0].isDesktop ? 0 : 1;
	}
	return (
		(oe = M(s)),
		(O = x[oe] = z[oe](s)),
		{
			c() {
				(e = y('meta')),
					(n = y('meta')),
					(t = y('meta')),
					(l = y('meta')),
					(o = y('meta')),
					(r = y('meta')),
					(a = y('meta')),
					(i = y('meta')),
					(f = y('meta')),
					(u = y('meta')),
					(c = y('meta')),
					(h = y('meta')),
					(_ = y('meta')),
					(p = y('meta')),
					($ = y('meta')),
					(v = y('meta')),
					(w = y('meta')),
					(T = y('meta')),
					(j = y('meta')),
					(Y = y('meta')),
					(V = y('meta')),
					(F = y('meta')),
					K && K.c(),
					(U = te()),
					(ne = L()),
					O.c(),
					(G = te()),
					this.h();
			},
			l(H) {
				const W = bo('svelte-1iuphgd', document.head);
				(e = D(W, 'META', { name: !0, content: !0 })),
					(n = D(W, 'META', { name: !0, content: !0 })),
					(t = D(W, 'META', { name: !0, content: !0 })),
					(l = D(W, 'META', { name: !0, content: !0 })),
					(o = D(W, 'META', { name: !0, content: !0 })),
					(r = D(W, 'META', { name: !0, content: !0 })),
					(a = D(W, 'META', { name: !0, content: !0 })),
					(i = D(W, 'META', { property: !0, content: !0 })),
					(f = D(W, 'META', { property: !0, content: !0 })),
					(u = D(W, 'META', { property: !0, content: !0 })),
					(c = D(W, 'META', { property: !0, content: !0 })),
					(h = D(W, 'META', { property: !0, content: !0 })),
					(_ = D(W, 'META', { property: !0, content: !0 })),
					(p = D(W, 'META', { property: !0, content: !0 })),
					($ = D(W, 'META', { property: !0, content: !0 })),
					(v = D(W, 'META', { property: !0, content: !0 })),
					(w = D(W, 'META', { property: !0, content: !0 })),
					(T = D(W, 'META', { property: !0, content: !0 })),
					(j = D(W, 'META', { property: !0, content: !0 })),
					(Y = D(W, 'META', { property: !0, content: !0 })),
					(V = D(W, 'META', { property: !0, content: !0 })),
					(F = D(W, 'META', { property: !0, content: !0 })),
					K && K.l(W),
					(U = te()),
					W.forEach(m),
					(ne = R(H)),
					O.l(H),
					(G = te()),
					this.h();
			},
			h() {
				(document.title = 'Typyst'),
					P(e, 'name', 'description'),
					P(
						e,
						'content',
						"Typyst is a new local-first & privacy-focused home for your markdown notes. It's a minimalistic, lightweight and fast note-taking app that's designed to be distraction-free."
					),
					P(n, 'name', 'keywords'),
					P(
						n,
						'content',
						'Typyst, Note-taking, Markdown, Local-first, Privacy-focused, Open-source, Online Markdown Editor, Fast Note-taking, Minimalistic Design'
					),
					P(t, 'name', 'author'),
					P(t, 'content', 'Typyst'),
					P(l, 'name', 'robots'),
					P(l, 'content', 'index, follow'),
					P(o, 'name', 'viewport'),
					P(o, 'content', 'width=device-width, initial-scale=1'),
					P(r, 'name', 'theme-color'),
					P(r, 'content', '#0F0F0F'),
					P(a, 'name', 'apple-mobile-web-app-status-bar-style'),
					P(a, 'content', 'black-translucent'),
					P(i, 'property', 'og:site_name'),
					P(i, 'content', 'Typyst'),
					P(f, 'property', 'og:locale'),
					P(f, 'content', 'en'),
					P(u, 'property', 'og:type'),
					P(u, 'content', 'website'),
					P(c, 'property', 'og:url'),
					P(c, 'content', 'https://typyst.md/'),
					P(h, 'property', 'og:title'),
					P(h, 'content', 'Typyst - Write Notes at the speed of touch'),
					P(_, 'property', 'og:description'),
					P(
						_,
						'content',
						"Typyst is a new local-first & privacy-focused home for your markdown notes. It's a minimalistic, lightweight and fast note-taking app that's designed to be distraction-free."
					),
					P(p, 'property', 'og:image'),
					P(p, 'content', 'https://typyst.md/landing.png'),
					P($, 'property', 'og:image:alt'),
					P($, 'content', 'Typyst - Markdown Editor'),
					P(v, 'property', 'og:image:width'),
					P(v, 'content', '1200'),
					P(w, 'property', 'og:image:height'),
					P(w, 'content', '627'),
					P(T, 'property', 'twitter:card'),
					P(T, 'content', 'summary_large_image'),
					P(j, 'property', 'twitter:url'),
					P(j, 'content', 'https://typyst.md/'),
					P(Y, 'property', 'twitter:title'),
					P(Y, 'content', 'Typyst - Write Notes at the speed of touch'),
					P(V, 'property', 'twitter:description'),
					P(
						V,
						'content',
						"Typyst is a new local-first & privacy-focused home for your markdown notes. It's a minimalistic, lightweight and fast note-taking app that's designed to be distraction-free."
					),
					P(F, 'property', 'twitter:image'),
					P(F, 'content', 'https://typyst.md/landing.png');
			},
			m(H, W) {
				N(document.head, e),
					N(document.head, n),
					N(document.head, t),
					N(document.head, l),
					N(document.head, o),
					N(document.head, r),
					N(document.head, a),
					N(document.head, i),
					N(document.head, f),
					N(document.head, u),
					N(document.head, c),
					N(document.head, h),
					N(document.head, _),
					N(document.head, p),
					N(document.head, $),
					N(document.head, v),
					N(document.head, w),
					N(document.head, T),
					N(document.head, j),
					N(document.head, Y),
					N(document.head, V),
					N(document.head, F),
					K && K.m(document.head, null),
					N(document.head, U),
					b(H, ne, W),
					x[oe].m(H, W),
					b(H, G, W),
					(q = !0);
			},
			p(H, [W]) {
				let Te = oe;
				(oe = M(H)),
					oe === Te
						? x[oe].p(H, W)
						: (Ce(),
							g(x[Te], 1, 1, () => {
								x[Te] = null;
							}),
							Ee(),
							(O = x[oe]),
							O ? O.p(H, W) : ((O = x[oe] = z[oe](H)), O.c()),
							d(O, 1),
							O.m(G.parentNode, G));
			},
			i(H) {
				q || (d(O), (q = !0));
			},
			o(H) {
				g(O), (q = !1);
			},
			d(H) {
				H && (m(ne), m(G)),
					m(e),
					m(n),
					m(t),
					m(l),
					m(o),
					m(r),
					m(a),
					m(i),
					m(f),
					m(u),
					m(c),
					m(h),
					m(_),
					m(p),
					m($),
					m(v),
					m(w),
					m(T),
					m(j),
					m(Y),
					m(V),
					m(F),
					K && K.d(H),
					m(U),
					x[oe].d(H);
			}
		}
	);
}
async function C$() {}
function E$(s, e, n) {
	let t,
		{ $$slots: l = {}, $$scope: o } = e,
		{ data: r } = e;
	const a = Mr();
	Ae(s, a, (f) => n(0, (t = f)));
	async function i() {
		const f = await un.select().from(pl);
		if (!f || f.length === 0) return;
		const u = f.reduce((c, h) => (c.lastOpened > h.lastOpened ? c : h));
		It.set(u.path);
	}
	return (
		dn(async () => {
			r.session
				? hi.set({ user: r.user, session: r.session, isLoading: !1, error: null })
				: await pi.refreshSession(),
				await C$(),
				console.log(await un.select().from(pl)),
				await i(),
				Ci();
		}),
		(s.$$set = (f) => {
			'data' in f && n(2, (r = f.data)), '$$scope' in f && n(3, (o = f.$$scope));
		}),
		[t, a, r, o, l]
	);
}
class Q$ extends he {
	constructor(e) {
		super(), pe(this, e, E$, k$, me, { data: 2 });
	}
}
export { Q$ as component };
