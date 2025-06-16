var is = (s) => {
	throw TypeError(s);
};
var Rl = (s, e, n) => e.has(s) || is('Cannot ' + n);
var Y = (s, e, n) => (Rl(s, e, 'read from private field'), n ? n.call(s) : e.get(s)),
	ze = (s, e, n) =>
		e.has(s)
			? is('Cannot add the same private member more than once')
			: e instanceof WeakSet
				? e.add(s)
				: e.set(s, n),
	Ve = (s, e, n, t) => (Rl(s, e, 'write to private field'), t ? t.call(s, n) : e.set(s, n), n),
	mt = (s, e, n) => (Rl(s, e, 'access private method'), n);
var pl = (s, e, n, t) => ({
	set _(l) {
		Ve(s, e, l, n);
	},
	get _() {
		return Y(s, e, t);
	}
});
import {
	ag as wi,
	ah as yi,
	a5 as $l,
	a4 as Ti,
	p as de,
	s as me,
	n as we,
	d as _,
	b as O,
	x as Io,
	C as le,
	k as Ae,
	B as wn,
	q as N,
	i as v,
	c as M,
	h as R,
	V as Mo,
	W as Ro,
	O as gn,
	ac as Dt,
	ad as _n,
	l as ae,
	u as ue,
	m as fe,
	o as ce,
	G as ne,
	D,
	H as Ce,
	y as Pe,
	af as as,
	N as Ke,
	e as K,
	v as lt,
	E as ie,
	w as _e,
	$ as Xt,
	I as ke,
	a as dt,
	f as J,
	t as X,
	ai as Yl,
	g as L,
	j as q,
	r as it,
	z as ut,
	R as It,
	S as zn,
	T as Hn,
	U as Qn,
	P as us,
	aj as Ai,
	F as fs,
	M as Oi,
	ak as cs
} from '../chunks/CZvU1ekx.js';
import {
	g as Ee,
	t as g,
	e as Se,
	a as m,
	S as pe,
	i as $e,
	h as Gn,
	j as Xn,
	k as Yn,
	d as k,
	m as C,
	c as S,
	b as E,
	f as ft
} from '../chunks/ZuwjM_kn.js';
import {
	aC as kl,
	d as Wn,
	aD as Cl,
	a as Pi,
	h as Qt,
	c as Jt,
	aE as ds,
	aF as ms,
	aG as Ni,
	aH as Di,
	aI as _s,
	aJ as Cn,
	aK as Ii,
	aL as Mi,
	aM as Ri,
	aN as Fi,
	aO as Vi,
	aP as Li,
	aQ as zl,
	aR as qi,
	O as sl,
	M as Jn,
	N as Tl,
	_ as Fo,
	a1 as xn,
	aS as ji,
	$ as Vo,
	aT as Ki,
	a2 as Bi,
	P as fl,
	Q as cl,
	a0 as Ui,
	S as Qe,
	f as zi,
	X as Hi,
	a9 as Qi,
	E as Gi,
	aU as nl,
	A as Wi,
	t as Ji,
	aB as Xi,
	V as Yi,
	W as Zi,
	q as Hl,
	o as ht,
	aV as Zl,
	i as El,
	aW as xi,
	I as He,
	n as tt,
	s as Ql,
	a8 as zt,
	G as Lo,
	aX as ea,
	m as ta,
	e as hs,
	y as gs,
	aY as na,
	a4 as ps
} from '../chunks/Dz2apFQ9.js';
import {
	d as vt,
	A as qo,
	C as la,
	D as sa,
	l as Wt,
	b as kt,
	m as Fe,
	E as $s,
	F as ra,
	o as bs,
	v as Gl,
	n as wt,
	e as En,
	G as oa,
	k as Pt,
	s as rl,
	H as ia,
	p as aa,
	i as Mn,
	u as ua,
	I as fa,
	g as ge,
	a as Xe,
	c as ve,
	J as ca,
	B as nt,
	h as jo
} from '../chunks/CTLOy2q2.js';
import {
	f as Ko,
	a as vs,
	I as da,
	R as ma,
	T as _a,
	C as ha,
	s as ga
} from '../chunks/3VOIDKNN.js';
import { I as pa } from '../chunks/BRhspWxV.js';
import { w as bt, d as Ct, a as Bo } from '../chunks/DOOmkYa6.js';
import {
	c as $a,
	d as ba,
	m as ll,
	n as va,
	o as ka,
	p as Uo,
	q as zo,
	u as Ca,
	i as Ea,
	r as Sa,
	t as wa,
	b as Ho,
	v as ya,
	j as ks,
	s as Ta,
	a as Aa,
	f as Oa,
	w as Cs,
	x as Pa
} from '../chunks/9GWM-mdJ.js';
import { g as Na, d as dl, b as ot, c as ml, a as yn } from '../chunks/Wn8UfayS.js';
import { c as Da } from '../chunks/BvlBTpYA.js';
import { S as Qo } from '../chunks/CBpdtyLw.js';
import { a as Ia, I as Ma } from '../chunks/JG2H3kjg.js';
import { C as Ra, L as Fa } from '../chunks/D0VC51h9.js';
import { c as Va, u as La, d as qa, f as ja } from '../chunks/jFyWpFis.js';
import { p as Ka } from '../chunks/iLYtrjRH.js';
import { c as Ba, L as rt } from '../chunks/oMhdKTtd.js';
import { i as Ua, g as Es } from '../chunks/Ckl9wd6U.js';
const za = typeof window < 'u' ? window : typeof globalThis < 'u' ? globalThis : global;
function xl(s, e) {
	const n = (e.token = {});
	function t(l, r, o, a) {
		if (e.token !== n) return;
		e.resolved = a;
		let i = e.ctx;
		o !== void 0 && ((i = i.slice()), (i[o] = a));
		const u = l && (e.current = l)(i);
		let f = !1;
		e.block &&
			(e.blocks
				? e.blocks.forEach((c, h) => {
						h !== r &&
							c &&
							(Ee(),
							g(c, 1, 1, () => {
								e.blocks[h] === c && (e.blocks[h] = null);
							}),
							Se());
					})
				: e.block.d(1),
			u.c(),
			m(u, 1),
			u.m(e.mount(), e.anchor),
			(f = !0)),
			(e.block = u),
			e.blocks && (e.blocks[r] = u),
			f && Ti();
	}
	if (wi(s)) {
		const l = yi();
		if (
			(s.then(
				(r) => {
					$l(l), t(e.then, 1, e.value, r), $l(null);
				},
				(r) => {
					if (($l(l), t(e.catch, 2, e.error, r), $l(null), !e.hasCatch)) throw r;
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
function es(s, e, n) {
	const t = e.slice(),
		{ resolved: l } = s;
	s.current === s.then && (t[s.value] = l),
		s.current === s.catch && (t[s.error] = l),
		s.block.p(t, n);
}
const Ha = async (s, e) => {
		{
			const n = window.localStorage.getItem('appSettings');
			n ? kl.set(JSON.parse(n)) : qt('app');
		}
		{
			const n = await Wn.select()
				.from(Cl)
				.where(Pi(Cl.collectionPath, de(Jt)));
			!n || n.length === 0 ? qt('collection') : Qt.set({ editor: n[0].editor, notes: n[0].notes });
		}
	},
	qt = async (s, e) => {
		s === 'app' &&
			(kl.set(e ?? de(kl)),
			window.localStorage.setItem('appSettings', JSON.stringify(e ?? de(kl)))),
			s === 'collection' &&
				(Qt.set(e ?? de(Qt)),
				await Wn.insert(Cl)
					.values({
						collectionPath: de(Jt),
						editor: (e ?? de(Qt)).editor,
						notes: (e ?? de(Qt)).notes
					})
					.onConflictDoUpdate({
						target: Cl.collectionPath,
						set: { editor: (e ?? de(Qt)).editor, notes: (e ?? de(Qt)).notes }
					}));
	};
function Ss(s) {
	let e, n;
	return {
		c() {
			(e = R('meta')), this.h();
		},
		l(t) {
			(e = M(t, 'META', { name: !0, content: !0 })), this.h();
		},
		h() {
			N(e, 'name', 'theme-color'), N(e, 'content', (n = s[0].dark));
		},
		m(t, l) {
			v(t, e, l);
		},
		p(t, l) {
			l & 1 && n !== (n = t[0].dark) && N(e, 'content', n);
		},
		d(t) {
			t && _(e);
		}
	};
}
function Qa(s) {
	let e,
		n = '<script>(' + zl.toString() + ')(' + JSON.stringify(s[2]) + ');<\/script>',
		t;
	return {
		c() {
			(e = new Ro(!1)), (t = le()), this.h();
		},
		l(l) {
			(e = Mo(l, !1)), (t = le()), this.h();
		},
		h() {
			e.a = t;
		},
		m(l, r) {
			e.m(n, l, r), v(l, t, r);
		},
		p: we,
		d(l) {
			l && (_(t), e.d());
		}
	};
}
function Ga(s) {
	let e,
		n = `<script nonce=${s[1]}>(` + zl.toString() + ')(' + JSON.stringify(s[2]) + ');<\/script>',
		t;
	return {
		c() {
			(e = new Ro(!1)), (t = le()), this.h();
		},
		l(l) {
			(e = Mo(l, !1)), (t = le()), this.h();
		},
		h() {
			e.a = t;
		},
		m(l, r) {
			e.m(n, l, r), v(l, t, r);
		},
		p(l, r) {
			r & 2 &&
				n !==
					(n =
						`<script nonce=${l[1]}>(` +
						zl.toString() +
						')(' +
						JSON.stringify(l[2]) +
						');<\/script>') &&
				e.p(n);
		},
		d(l) {
			l && (_(t), e.d());
		}
	};
}
function Wa(s) {
	let e,
		n,
		t = s[0] && Ss(s);
	function l(a, i) {
		return a[1] ? Ga : Qa;
	}
	let r = l(s),
		o = r(s);
	return {
		c() {
			t && t.c(), (e = le()), o.c(), (n = le());
		},
		l(a) {
			const i = Io('svelte-1nen96w', document.head);
			t && t.l(i), (e = le()), o.l(i), (n = le()), i.forEach(_);
		},
		m(a, i) {
			t && t.m(document.head, null),
				O(document.head, e),
				o.m(document.head, null),
				O(document.head, n);
		},
		p(a, [i]) {
			a[0]
				? t
					? t.p(a, i)
					: ((t = Ss(a)), t.c(), t.m(e.parentNode, e))
				: t && (t.d(1), (t = null)),
				r === (r = l(a)) && o
					? o.p(a, i)
					: (o.d(1), (o = r(a)), o && (o.c(), o.m(n.parentNode, n)));
		},
		i: we,
		o: we,
		d(a) {
			t && t.d(a), _(e), o.d(a), _(n);
		}
	};
}
function Ja(s, e, n) {
	let t, l, r;
	Ae(s, ds, (w) => n(12, (l = w))), Ae(s, ms, (w) => n(13, (r = w)));
	let { track: o = !0 } = e,
		{ defaultMode: a = 'system' } = e,
		{ themeColors: i = void 0 } = e,
		{ disableTransitions: u = !0 } = e,
		{ darkClassNames: f = ['dark'] } = e,
		{ lightClassNames: c = [] } = e,
		{ defaultTheme: h = '' } = e,
		{ nonce: d = '' } = e,
		{ themeStorageKey: $ = 'mode-watcher-theme' } = e,
		{ modeStorageKey: p = 'mode-watcher-mode' } = e;
	wn(() => {
		const w = Ni.subscribe(() => {}),
			y = Di.subscribe(() => {});
		_s.tracking(o), _s.query();
		const I = localStorage.getItem(r);
		Cn(qi(I) ? I : a);
		const Q = localStorage.getItem(l);
		return (
			Ii(Q || h),
			() => {
				w(), y();
			}
		);
	});
	const b = Li({
		defaultMode: a,
		themeColors: i,
		darkClassNames: f,
		lightClassNames: c,
		defaultTheme: h,
		modeStorageKey: p,
		themeStorageKey: $
	});
	return (
		(s.$$set = (w) => {
			'track' in w && n(3, (o = w.track)),
				'defaultMode' in w && n(4, (a = w.defaultMode)),
				'themeColors' in w && n(0, (i = w.themeColors)),
				'disableTransitions' in w && n(5, (u = w.disableTransitions)),
				'darkClassNames' in w && n(6, (f = w.darkClassNames)),
				'lightClassNames' in w && n(7, (c = w.lightClassNames)),
				'defaultTheme' in w && n(8, (h = w.defaultTheme)),
				'nonce' in w && n(9, (d = w.nonce)),
				'themeStorageKey' in w && n(10, ($ = w.themeStorageKey)),
				'modeStorageKey' in w && n(11, (p = w.modeStorageKey));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 32 && Mi.set(u),
				s.$$.dirty & 1 && Ri.set(i),
				s.$$.dirty & 64 && Fi.set(f),
				s.$$.dirty & 128 && Vi.set(c),
				s.$$.dirty & 2048 && ms.set(p),
				s.$$.dirty & 1024 && ds.set($),
				s.$$.dirty & 512 && n(1, (t = typeof window > 'u' ? d : ''));
		}),
		[i, t, b, o, a, u, f, c, h, d, $, p]
	);
}
class Xa extends pe {
	constructor(e) {
		super(),
			$e(this, e, Ja, Wa, me, {
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
function Fl(s) {
	return Array.from(s.querySelectorAll('[role="option"]:not([data-disabled])')).filter((e) =>
		vt(e)
	);
}
function Ya(s) {
	return window.getComputedStyle(s).getPropertyValue('direction');
}
function Za(s) {
	return (e) => {
		const n = e.target,
			t = Na(s);
		if (!t || !qo(n)) return !1;
		const l = t.id;
		return !!((la(n) && l === n.htmlFor) || n.closest(`label[for="${l}"]`));
	};
}
const xa = [
		Fe.ARROW_LEFT,
		Fe.ESCAPE,
		Fe.ARROW_RIGHT,
		Fe.SHIFT,
		Fe.CAPS_LOCK,
		Fe.CONTROL,
		Fe.ALT,
		Fe.META,
		Fe.ENTER,
		Fe.F1,
		Fe.F2,
		Fe.F3,
		Fe.F4,
		Fe.F5,
		Fe.F6,
		Fe.F7,
		Fe.F8,
		Fe.F9,
		Fe.F10,
		Fe.F11,
		Fe.F12
	],
	eu = {
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
	tu = ['trigger', 'menu', 'label'];
function nu(s) {
	const e = { ...eu, ...s },
		n = bt(null),
		t = bt(null),
		l = e.selected ?? bt(e.defaultSelected),
		r = sl(l, e == null ? void 0 : e.onSelectedChange),
		o = Ct(t, (A) => (A ? j(A) : void 0)),
		a = e.open ?? bt(e.defaultOpen),
		i = sl(a, e == null ? void 0 : e.onOpenChange),
		u = Jn({ ...Tl(e, 'open', 'defaultOpen', 'builder', 'ids'), multiple: e.multiple ?? !1 }),
		{
			scrollAlignment: f,
			loop: c,
			closeOnOutsideClick: h,
			closeOnEscape: d,
			preventScroll: $,
			portal: p,
			forceVisible: b,
			positioning: w,
			multiple: y,
			arrowSize: I,
			disabled: Q,
			required: P,
			typeahead: V,
			name: z,
			highlightOnHover: ee,
			onOutsideClick: se
		} = u,
		{ name: T, selector: W } = dl(e.builder),
		U = Jn({ ...Fo(tu), ...e.ids }),
		{ handleTypeaheadSearch: B } = $a({
			onMatch: (A) => {
				t.set(A), A.scrollIntoView({ block: de(f) });
			},
			getCurrentItem() {
				return de(t);
			}
		});
	function j(A) {
		const x = A.getAttribute('data-value'),
			Oe = A.getAttribute('data-label'),
			Le = A.hasAttribute('data-disabled');
		return { value: x && JSON.parse(x), label: Oe ?? A.textContent ?? void 0, disabled: !!Le };
	}
	const te = (A) => {
		r.update((x) => {
			if (de(y)) {
				const Le = Array.isArray(x) ? x : [];
				return wa(A, Le, (qe, Re) => xn(qe.value, Re.value));
			}
			return A;
		});
	};
	function F(A) {
		const x = j(A);
		te(x);
	}
	async function H() {
		i.set(!0);
		const A = document.getElementById(de(U.trigger));
		if (!A) return;
		n.set(A), await gn();
		const x = document.getElementById(de(U.menu));
		if (!vt(x)) return;
		const Oe = x.querySelector('[aria-selected=true]');
		vt(Oe) && t.set(Oe);
	}
	function G() {
		i.set(!1), t.set(null);
	}
	const Te = ba({ open: i, forceVisible: b, activeTrigger: n }),
		Ne = Ct(
			[r],
			([A]) =>
				(x) =>
					Array.isArray(A)
						? A.some((Oe) => xn(Oe.value, x))
						: sa(x)
							? xn(A == null ? void 0 : A.value, ji(x, void 0))
							: xn(A == null ? void 0 : A.value, x)
		),
		Ie = Ct(
			[o],
			([A]) =>
				(x) =>
					xn(A == null ? void 0 : A.value, x)
		),
		De = ot(T('trigger'), {
			stores: [i, t, Q, U.menu, U.trigger, U.label],
			returned: ([A, x, Oe, Le, qe, Re]) => ({
				'aria-activedescendant': x == null ? void 0 : x.id,
				'aria-autocomplete': 'list',
				'aria-controls': Le,
				'aria-expanded': A,
				'aria-labelledby': Re,
				id: qe,
				role: 'combobox',
				disabled: En(Oe)
			}),
			action: (A) => {
				const x = oa(A),
					Oe = Wt(
						kt(A, 'click', () => {
							A.focus(), de(i) ? G() : H();
						}),
						kt(A, 'keydown', (Re) => {
							if (!de(i)) {
								if (
									xa.includes(Re.key) ||
									Re.key === Fe.TAB ||
									(Re.key === Fe.BACKSPACE && x && A.value === '') ||
									(Re.key === Fe.SPACE && $s(A))
								)
									return;
								H(),
									gn().then(() => {
										if (de(r)) return;
										const Je = document.getElementById(de(U.menu));
										if (!vt(Je)) return;
										const Ue = Array.from(
											Je.querySelectorAll(`${W('item')}:not([data-disabled]):not([data-hidden])`)
										).filter((xe) => vt(xe));
										Ue.length &&
											(Re.key === Fe.ARROW_DOWN
												? (t.set(Ue[0]), Ue[0].scrollIntoView({ block: de(f) }))
												: Re.key === Fe.ARROW_UP &&
													(t.set(ll(Ue)), ll(Ue).scrollIntoView({ block: de(f) })));
									});
							}
							if (Re.key === Fe.TAB) {
								G();
								return;
							}
							if (Re.key === Fe.ENTER || (Re.key === Fe.SPACE && $s(A))) {
								Re.preventDefault();
								const Ye = de(t);
								Ye && F(Ye), de(y) || G();
							}
							if ((Re.key === Fe.ARROW_UP && Re.altKey && G(), ra.includes(Re.key))) {
								Re.preventDefault();
								const Ye = document.getElementById(de(U.menu));
								if (!vt(Ye)) return;
								const Je = Fl(Ye);
								if (!Je.length) return;
								const Ue = Je.filter((Nn) => !bs(Nn) && Nn.dataset.hidden === void 0),
									xe = de(t),
									at = xe ? Ue.indexOf(xe) : -1,
									Et = de(c),
									St = de(f);
								let ct;
								switch (Re.key) {
									case Fe.ARROW_DOWN:
										ct = zo(Ue, at, Et);
										break;
									case Fe.ARROW_UP:
										ct = Uo(Ue, at, Et);
										break;
									case Fe.PAGE_DOWN:
										ct = ka(Ue, at, 10, Et);
										break;
									case Fe.PAGE_UP:
										ct = va(Ue, at, 10, Et);
										break;
									case Fe.HOME:
										ct = Ue[0];
										break;
									case Fe.END:
										ct = ll(Ue);
										break;
									default:
										return;
								}
								t.set(ct), ct == null || ct.scrollIntoView({ block: St });
							} else if (de(V)) {
								const Ye = document.getElementById(de(U.menu));
								if (!vt(Ye)) return;
								B(Re.key, Fl(Ye));
							}
						})
					);
				let Le = wt;
				const qe = Gl(A, { handler: G, enabled: Ct([i, d], ([Re, Ze]) => Re && Ze) });
				return (
					qe && qe.destroy && (Le = qe.destroy),
					{
						destroy() {
							Oe(), Le();
						}
					}
				);
			}
		}),
		ye = ot(T('menu'), {
			stores: [Te, U.menu],
			returned: ([A, x]) => ({
				hidden: A ? void 0 : !0,
				id: x,
				role: 'listbox',
				style: rl({ display: A ? void 0 : 'none' })
			}),
			action: (A) => {
				let x = wt;
				const Oe = Wt(
					Pt([Te, p, h, w, n], ([Le, qe, Re, Ze, Ye]) => {
						if ((x(), !Le || !Ye)) return;
						const Je = Za(de(U.trigger)),
							Ue = Ca(A, {
								anchorElement: Ye,
								open: i,
								options: {
									floating: Ze,
									focusTrap: null,
									clickOutside: Re
										? {
												handler: (xe) => {
													var Et;
													if (((Et = de(se)) == null || Et(xe), xe.defaultPrevented)) return;
													const at = xe.target;
													qo(at) && (at === Ye || Ye.contains(at) || G());
												},
												ignore: Je
											}
										: null,
									escapeKeydown: null,
									portal: Vo(A, qe)
								}
							});
						Ue && Ue.destroy && (x = Ue.destroy);
					})
				);
				return {
					destroy: () => {
						Oe(), x();
					}
				};
			}
		}),
		{
			elements: { root: re }
		} = Ba(),
		{ action: oe } = de(re),
		be = ot(T('label'), {
			stores: [U.label, U.trigger],
			returned: ([A, x]) => ({ id: A, for: x }),
			action: oe
		}),
		We = ot(T('option'), {
			stores: [Ne],
			returned:
				([A]) =>
				(x) => {
					const Oe = A(x.value);
					return {
						'data-value': JSON.stringify(x.value),
						'data-label': x.label,
						'data-disabled': En(x.disabled),
						'aria-disabled': x.disabled ? !0 : void 0,
						'aria-selected': Oe,
						'data-selected': Oe ? '' : void 0,
						id: Ki(),
						role: 'option'
					};
				},
			action: (A) => ({
				destroy: Wt(
					kt(A, 'click', (Oe) => {
						if (bs(A)) {
							Oe.preventDefault();
							return;
						}
						F(A), de(y) || G();
					}),
					Pt(ee, (Oe) =>
						Oe
							? Wt(
									kt(A, 'mouseover', () => {
										t.set(A);
									}),
									kt(A, 'mouseleave', () => {
										t.set(null);
									})
								)
							: void 0
					)
				)
			})
		}),
		Ge = ot(T('hidden-input'), {
			stores: [r, P, z],
			returned: ([A, x, Oe]) => {
				const Le = Array.isArray(A) ? A.map((qe) => qe.value) : A == null ? void 0 : A.value;
				return { ...ia, required: x ? !0 : void 0, value: Le, name: Oe };
			}
		}),
		Be = ot(T('arrow'), {
			stores: I,
			returned: (A) => ({
				'data-arrow': !0,
				style: rl({
					position: 'absolute',
					width: `var(--arrow-size, ${A}px)`,
					height: `var(--arrow-size, ${A}px)`
				})
			})
		});
	return (
		aa(() => {
			if (!Mn) return;
			const A = document.getElementById(de(U.menu));
			if (!A) return;
			const x = document.getElementById(de(U.trigger));
			x && n.set(x);
			const Oe = A.querySelector('[data-selected]');
			vt(Oe);
		}),
		Pt([t], ([A]) => {
			if (!Mn) return;
			const x = document.getElementById(de(U.menu));
			vt(x) &&
				Fl(x).forEach((Oe) => {
					Oe === A ? Ea(Oe) : Sa(Oe);
				});
		}),
		Pt([i], ([A]) => {
			if (!Mn) return;
			let x = wt;
			return (
				de($) && A && (x = Ho()),
				() => {
					x();
				}
			);
		}),
		{
			ids: U,
			elements: { trigger: De, option: We, menu: ye, label: be, hiddenInput: Ge, arrow: Be },
			states: { open: i, selected: r, highlighted: o, highlightedItem: t },
			helpers: { isSelected: Ne, isHighlighted: Ie, closeMenu: G },
			options: u
		}
	);
}
const { name: hn } = dl('dialog'),
	lu = {
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
	Vl = bt([]),
	su = ['content', 'title', 'description'];
function ru(s) {
	const e = { ...lu, ...s },
		n = Jn(Tl(e, 'ids')),
		{
			preventScroll: t,
			closeOnEscape: l,
			closeOnOutsideClick: r,
			role: o,
			portal: a,
			forceVisible: i,
			openFocus: u,
			closeFocus: f,
			onOutsideClick: c
		} = n,
		h = bt(null),
		d = Jn({ ...Fo(su), ...e.ids }),
		$ = e.open ?? bt(e.defaultOpen),
		p = sl($, e == null ? void 0 : e.onOpenChange),
		b = Ct([p, i], ([W, U]) => W || U);
	let w = wt;
	function y(W) {
		const U = W.currentTarget,
			B = W.currentTarget;
		!vt(U) || !vt(B) || (p.set(!0), h.set(B));
	}
	function I() {
		p.set(!1), ks({ prop: de(f), defaultEl: de(h) });
	}
	Pt([p], ([W]) => {
		Ta(100).then(() => {
			W
				? Vl.update((U) => (U.push(de(d.content)), U))
				: Vl.update((U) => U.filter((B) => B !== de(d.content)));
		});
	});
	const Q = ot(hn('trigger'), {
			stores: [p],
			returned: ([W]) => ({ 'aria-haspopup': 'dialog', 'aria-expanded': W, type: 'button' }),
			action: (W) => ({
				destroy: Wt(
					kt(W, 'click', (B) => {
						y(B);
					}),
					kt(W, 'keydown', (B) => {
						(B.key !== Fe.ENTER && B.key !== Fe.SPACE) || (B.preventDefault(), y(B));
					})
				)
			})
		}),
		P = ot(hn('overlay'), {
			stores: [b],
			returned: ([W]) => ({
				hidden: W ? void 0 : !0,
				tabindex: -1,
				style: rl({ display: W ? void 0 : 'none' }),
				'aria-hidden': !0,
				'data-state': W ? 'open' : 'closed'
			}),
			action: (W) => {
				let U = wt;
				if (de(l)) {
					const B = Gl(W, {
						handler: () => {
							I();
						}
					});
					B && B.destroy && (U = B.destroy);
				}
				return {
					destroy() {
						U();
					}
				};
			}
		}),
		V = ot(hn('content'), {
			stores: [b, d.content, d.description, d.title],
			returned: ([W, U, B, j]) => ({
				id: U,
				role: de(o),
				'aria-describedby': B,
				'aria-labelledby': j,
				'aria-modal': W ? 'true' : void 0,
				'data-state': W ? 'open' : 'closed',
				tabindex: -1,
				hidden: W ? void 0 : !0,
				style: rl({ display: W ? void 0 : 'none' })
			}),
			action: (W) => {
				let U = wt,
					B = wt;
				const j = Wt(
					Pt([p], ([te]) => {
						if (!te) return;
						const F = ya({
							immediate: !1,
							escapeDeactivates: !0,
							clickOutsideDeactivates: !0,
							returnFocusOnDeactivate: !1,
							fallbackFocus: W
						});
						(U = F.activate), (B = F.deactivate);
						const H = F.useFocusTrap(W);
						return H && H.destroy ? H.destroy : F.deactivate;
					}),
					Pt(
						[r, p],
						([te, F]) =>
							ua(W, {
								enabled: F,
								handler: (H) => {
									var Ne;
									if (((Ne = de(c)) == null || Ne(H), H.defaultPrevented)) return;
									const G = de(Vl),
										Te = ll(G) === de(d.content);
									te && Te && I();
								}
							}).destroy
					),
					Pt([l], ([te]) => {
						if (!te) return wt;
						const F = Gl(W, {
							handler: () => {
								I();
							}
						});
						return F && F.destroy ? F.destroy : wt;
					}),
					Pt([b], ([te]) => {
						gn().then(() => {
							te ? U() : B();
						});
					})
				);
				return {
					destroy: () => {
						w(), j();
					}
				};
			}
		}),
		z = ot(hn('portalled'), {
			stores: a,
			returned: (W) => ({ 'data-portal': W ? '' : void 0 }),
			action: (W) => {
				const U = Pt([a], ([B]) => {
					if (!B) return wt;
					const j = Vo(W, B);
					if (j === null) return wt;
					const te = Bi(W, j);
					return te && te.destroy ? te.destroy : wt;
				});
				return {
					destroy() {
						U();
					}
				};
			}
		}),
		ee = ot(hn('title'), { stores: [d.title], returned: ([W]) => ({ id: W }) }),
		se = ot(hn('description'), { stores: [d.description], returned: ([W]) => ({ id: W }) }),
		T = ot(hn('close'), {
			returned: () => ({ type: 'button' }),
			action: (W) => ({
				destroy: Wt(
					kt(W, 'click', () => {
						I();
					}),
					kt(W, 'keydown', (B) => {
						(B.key !== Fe.SPACE && B.key !== Fe.ENTER) || (B.preventDefault(), I());
					})
				)
			})
		});
	return (
		Pt([p, t], ([W, U]) => {
			if (Mn) {
				if ((U && W && (w = Ho()), W)) {
					const B = document.getElementById(de(d.content));
					ks({ prop: de(u), defaultEl: B });
				}
				return () => {
					de(i) || w();
				};
			}
		}),
		{
			ids: d,
			elements: {
				content: V,
				trigger: Q,
				title: ee,
				description: se,
				overlay: P,
				close: T,
				portalled: z
			},
			states: { open: p },
			options: n
		}
	);
}
const { name: ws } = dl('select');
function ou(s) {
	const e = nu({ ...s, builder: 'select' }),
		n = ot(ws('group'), { returned: () => (r) => ({ role: 'group', 'aria-labelledby': r }) }),
		t = ot(ws('group-label'), { returned: () => (r) => ({ id: r }) }),
		l = Ct(e.states.selected, (r) =>
			Array.isArray(r) ? r.map((o) => o.label).join(', ') : ((r == null ? void 0 : r.label) ?? '')
		);
	return {
		...e,
		elements: { ...e.elements, group: n, groupLabel: t },
		states: { ...e.states, selectedLabel: l }
	};
}
const iu = { defaultChecked: !1, disabled: !1, required: !1, name: '', value: '' },
	{ name: ys } = dl('switch');
function au(s) {
	const e = { ...iu, ...s },
		n = Jn(Tl(e, 'checked')),
		{ disabled: t, required: l, name: r, value: o } = n,
		a = e.checked ?? bt(e.defaultChecked),
		i = sl(a, e == null ? void 0 : e.onCheckedChange);
	function u() {
		de(t) || i.update((h) => !h);
	}
	const f = ot(ys(), {
			stores: [i, t, l],
			returned: ([h, d, $]) => ({
				'data-disabled': En(d),
				disabled: En(d),
				'data-state': h ? 'checked' : 'unchecked',
				type: 'button',
				role: 'switch',
				'aria-checked': h ? 'true' : 'false',
				'aria-required': $ ? 'true' : void 0
			}),
			action(h) {
				return {
					destroy: Wt(
						kt(h, 'click', () => {
							u();
						}),
						kt(h, 'keydown', ($) => {
							($.key !== Fe.ENTER && $.key !== Fe.SPACE) || ($.preventDefault(), u());
						})
					)
				};
			}
		}),
		c = ot(ys('input'), {
			stores: [i, r, l, t, o],
			returned: ([h, d, $, p, b]) => ({
				type: 'checkbox',
				'aria-hidden': !0,
				hidden: !0,
				tabindex: -1,
				name: d,
				value: b,
				checked: h,
				required: $,
				disabled: En(p),
				style: rl({
					position: 'absolute',
					opacity: 0,
					'pointer-events': 'none',
					margin: 0,
					transform: 'translateX(-100%)'
				})
			})
		});
	return { elements: { root: f, input: c }, states: { checked: i }, options: n };
}
const uu = { orientation: 'horizontal', activateOnFocus: !0, loop: !0, autoSet: !0 },
	{ name: bl, selector: fu } = dl('tabs');
function cu(s) {
	const e = { ...uu, ...s },
		n = Jn(Tl(e, 'defaultValue', 'value', 'onValueChange', 'autoSet')),
		{ orientation: t, activateOnFocus: l, loop: r } = n,
		o = e.value ?? bt(e.defaultValue),
		a = sl(o, e == null ? void 0 : e.onValueChange);
	let i = e.defaultValue ?? de(a);
	const u = ot(bl(), { stores: t, returned: ($) => ({ 'data-orientation': $ }) }),
		f = ot(bl('list'), {
			stores: t,
			returned: ($) => ({ role: 'tablist', 'aria-orientation': $, 'data-orientation': $ })
		}),
		c = ($) => (typeof $ == 'string' ? { value: $ } : $),
		h = ot(bl('trigger'), {
			stores: [a, t],
			returned:
				([$, p]) =>
				(b) => {
					const { value: w, disabled: y } = c(b);
					!$ && !i && e.autoSet && ((i = w), ($ = w), a.set(w));
					const Q = (Mn ? $ : i) === w;
					return {
						type: 'button',
						role: 'tab',
						'data-state': Q ? 'active' : 'inactive',
						tabindex: Q ? 0 : -1,
						'data-value': w,
						'data-orientation': p,
						'data-disabled': En(y),
						disabled: En(y)
					};
				},
			action: ($) => ({
				destroy: Wt(
					kt($, 'focus', () => {
						const b = $.dataset.disabled === 'true',
							w = $.dataset.value;
						de(l) && !b && w !== void 0 && a.set(w);
					}),
					kt($, 'click', (b) => {
						if (($.focus(), b.preventDefault(), $.dataset.disabled === 'true')) return;
						const y = $.dataset.value;
						$.focus(), y !== void 0 && a.set(y);
					}),
					kt($, 'keydown', (b) => {
						const w = $.dataset.value;
						if (!w) return;
						const y = b.currentTarget;
						if (!vt(y)) return;
						const I = y.closest(fu());
						if (!vt(I)) return;
						const Q = de(r),
							V = Array.from(I.querySelectorAll('[role="tab"]'))
								.filter((W) => vt(W))
								.filter((W) => !W.hasAttribute('data-disabled')),
							z = V.findIndex((W) => W === b.target),
							ee = Ya(I),
							{ nextKey: se, prevKey: T } = fa(ee, de(t));
						b.key === se
							? (b.preventDefault(), zo(V, z, Q).focus())
							: b.key === T
								? (b.preventDefault(), Uo(V, z, Q).focus())
								: b.key === Fe.ENTER || b.key === Fe.SPACE
									? (b.preventDefault(), a.set(w))
									: b.key === Fe.HOME
										? (b.preventDefault(), V[0].focus())
										: b.key === Fe.END && (b.preventDefault(), ll(V).focus());
					})
				)
			})
		}),
		d = ot(bl('content'), {
			stores: a,
			returned: ($) => (p) => ({
				role: 'tabpanel',
				'aria-labelledby': p,
				hidden: Mn ? ($ === p ? void 0 : !0) : i === p ? void 0 : !0,
				tabindex: 0
			})
		});
	return {
		elements: { root: u, list: f, trigger: h, content: d },
		states: { value: a },
		options: n
	};
}
function Go() {
	return {
		NAME: 'dialog',
		PARTS: ['close', 'content', 'description', 'overlay', 'portal', 'title', 'trigger']
	};
}
function du(s) {
	const { NAME: e, PARTS: n } = Go(),
		t = ml(e, n),
		l = { ...ru({ ...fl(s), role: 'dialog', forceVisible: !0 }), getAttrs: t };
	return Dt(e, l), { ...l, updateOption: cl(l.options) };
}
function Tn() {
	const { NAME: s } = Go();
	return _n(s);
}
const mu = (s) => ({ ids: s & 1 }),
	Ts = (s) => ({ ids: s[0] });
function _u(s) {
	let e;
	const n = s[12].default,
		t = ae(n, s, s[11], Ts);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, [r]) {
			t && t.p && (!e || r & 2049) && ue(t, n, l, l[11], e ? ce(n, l[11], r, mu) : fe(l[11]), Ts);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function hu(s, e, n) {
	let t,
		{ $$slots: l = {}, $$scope: r } = e,
		{ preventScroll: o = void 0 } = e,
		{ closeOnEscape: a = void 0 } = e,
		{ closeOnOutsideClick: i = void 0 } = e,
		{ portal: u = void 0 } = e,
		{ open: f = void 0 } = e,
		{ onOpenChange: c = void 0 } = e,
		{ openFocus: h = void 0 } = e,
		{ closeFocus: d = void 0 } = e,
		{ onOutsideClick: $ = void 0 } = e;
	const {
			states: { open: p },
			updateOption: b,
			ids: w
		} = du({
			closeOnEscape: a,
			preventScroll: o,
			closeOnOutsideClick: i,
			portal: u,
			forceVisible: !0,
			defaultOpen: f,
			openFocus: h,
			closeFocus: d,
			onOutsideClick: $,
			onOpenChange: ({ next: I }) => (f !== I && (c == null || c(I), n(2, (f = I))), I)
		}),
		y = Ct([w.content, w.description, w.title], ([I, Q, P]) => ({
			content: I,
			description: Q,
			title: P
		}));
	return (
		Ae(s, y, (I) => n(0, (t = I))),
		(s.$$set = (I) => {
			'preventScroll' in I && n(3, (o = I.preventScroll)),
				'closeOnEscape' in I && n(4, (a = I.closeOnEscape)),
				'closeOnOutsideClick' in I && n(5, (i = I.closeOnOutsideClick)),
				'portal' in I && n(6, (u = I.portal)),
				'open' in I && n(2, (f = I.open)),
				'onOpenChange' in I && n(7, (c = I.onOpenChange)),
				'openFocus' in I && n(8, (h = I.openFocus)),
				'closeFocus' in I && n(9, (d = I.closeFocus)),
				'onOutsideClick' in I && n(10, ($ = I.onOutsideClick)),
				'$$scope' in I && n(11, (r = I.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 4 && f !== void 0 && p.set(f),
				s.$$.dirty & 8 && b('preventScroll', o),
				s.$$.dirty & 16 && b('closeOnEscape', a),
				s.$$.dirty & 32 && b('closeOnOutsideClick', i),
				s.$$.dirty & 64 && b('portal', u),
				s.$$.dirty & 256 && b('openFocus', h),
				s.$$.dirty & 512 && b('closeFocus', d),
				s.$$.dirty & 1024 && b('onOutsideClick', $);
		}),
		[t, y, f, o, a, i, u, c, h, d, $, r, l]
	);
}
class Wo extends pe {
	constructor(e) {
		super(),
			$e(this, e, hu, _u, me, {
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
const gu = (s) => ({ builder: s & 8 }),
	As = (s) => ({ builder: s[3] }),
	pu = (s) => ({ builder: s & 8 }),
	Os = (s) => ({ builder: s[3] });
function $u(s) {
	let e = s[1],
		n,
		t,
		l = s[1] && Ll(s);
	return {
		c() {
			l && l.c(), (n = le());
		},
		l(r) {
			l && l.l(r), (n = le());
		},
		m(r, o) {
			l && l.m(r, o), v(r, n, o), (t = !0);
		},
		p(r, o) {
			r[1]
				? e
					? me(e, r[1])
						? (l.d(1), (l = Ll(r)), (e = r[1]), l.c(), l.m(n.parentNode, n))
						: l.p(r, o)
					: ((l = Ll(r)), (e = r[1]), l.c(), l.m(n.parentNode, n))
				: e && (l.d(1), (l = null), (e = r[1]));
		},
		i(r) {
			t || (m(l, r), (t = !0));
		},
		o(r) {
			g(l, r), (t = !1);
		},
		d(r) {
			r && _(n), l && l.d(r);
		}
	};
}
function bu(s) {
	let e;
	const n = s[9].default,
		t = ae(n, s, s[8], Os);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 264) && ue(t, n, l, l[8], e ? ce(n, l[8], r, pu) : fe(l[8]), Os);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Ll(s) {
	let e, n, t, l;
	const r = s[9].default,
		o = ae(r, s, s[8], As);
	let a = [s[3], s[5]],
		i = {};
	for (let u = 0; u < a.length; u += 1) i = D(i, a[u]);
	return {
		c() {
			(e = R(s[1])), o && o.c(), this.h();
		},
		l(u) {
			e = M(u, (s[1] || 'null').toUpperCase(), {});
			var f = K(e);
			o && o.l(f), f.forEach(_), this.h();
		},
		h() {
			as(s[1])(e, i);
		},
		m(u, f) {
			v(u, e, f), o && o.m(e, null), s[10](e), (n = !0), t || ((l = Ke(s[3].action(e))), (t = !0));
		},
		p(u, f) {
			o && o.p && (!n || f & 264) && ue(o, r, u, u[8], n ? ce(r, u[8], f, gu) : fe(u[8]), As),
				as(u[1])(e, (i = ge(a, [f & 8 && u[3], f & 32 && u[5]])));
		},
		i(u) {
			n || (m(o, u), (n = !0));
		},
		o(u) {
			g(o, u), (n = !1);
		},
		d(u) {
			u && _(e), o && o.d(u), s[10](null), (t = !1), l();
		}
	};
}
function vu(s) {
	let e, n, t, l;
	const r = [bu, $u],
		o = [];
	function a(i, u) {
		return i[2] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = o[e] = r[e](s)),
		{
			c() {
				n.c(), (t = le());
			},
			l(i) {
				n.l(i), (t = le());
			},
			m(i, u) {
				o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, [u]) {
				let f = e;
				(e = a(i)),
					e === f
						? o[e].p(i, u)
						: (Ee(),
							g(o[f], 1, 1, () => {
								o[f] = null;
							}),
							Se(),
							(n = o[e]),
							n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
							m(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function ku(s, e, n) {
	let t;
	const l = ['level', 'asChild', 'id', 'el'];
	let r = ne(e, l),
		o,
		{ $$slots: a = {}, $$scope: i } = e,
		{ level: u = 'h2' } = e,
		{ asChild: f = !1 } = e,
		{ id: c = void 0 } = e,
		{ el: h = void 0 } = e;
	const {
		elements: { title: d },
		ids: $,
		getAttrs: p
	} = Tn();
	Ae(s, d, (y) => n(7, (o = y)));
	const b = p('title');
	function w(y) {
		Pe[y ? 'unshift' : 'push'](() => {
			(h = y), n(0, h);
		});
	}
	return (
		(s.$$set = (y) => {
			(e = D(D({}, e), Ce(y))),
				n(5, (r = ne(e, l))),
				'level' in y && n(1, (u = y.level)),
				'asChild' in y && n(2, (f = y.asChild)),
				'id' in y && n(6, (c = y.id)),
				'el' in y && n(0, (h = y.el)),
				'$$scope' in y && n(8, (i = y.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 64 && c && $.title.set(c),
				s.$$.dirty & 128 && n(3, (t = o)),
				s.$$.dirty & 8 && Object.assign(t, b);
		}),
		[h, u, f, t, d, r, c, o, i, a, w]
	);
}
class Cu extends pe {
	constructor(e) {
		super(), $e(this, e, ku, vu, me, { level: 1, asChild: 2, id: 6, el: 0 });
	}
}
const Eu = (s) => ({ builder: s & 4 }),
	Ps = (s) => ({ builder: s[2] }),
	Su = (s) => ({ builder: s & 4 }),
	Ns = (s) => ({ builder: s[2] });
function wu(s) {
	let e, n, t, l;
	const r = s[8].default,
		o = ae(r, s, s[7], Ps);
	let a = [s[2], { type: 'button' }, s[5]],
		i = {};
	for (let u = 0; u < a.length; u += 1) i = D(i, a[u]);
	return {
		c() {
			(e = R('button')), o && o.c(), this.h();
		},
		l(u) {
			e = M(u, 'BUTTON', { type: !0 });
			var f = K(e);
			o && o.l(f), f.forEach(_), this.h();
		},
		h() {
			ie(e, i);
		},
		m(u, f) {
			v(u, e, f),
				o && o.m(e, null),
				e.autofocus && e.focus(),
				s[9](e),
				(n = !0),
				t ||
					((l = [Ke(s[2].action(e)), _e(e, 'm-click', s[4]), _e(e, 'm-keydown', s[4])]), (t = !0));
		},
		p(u, f) {
			o && o.p && (!n || f & 132) && ue(o, r, u, u[7], n ? ce(r, u[7], f, Eu) : fe(u[7]), Ps),
				ie(e, (i = ge(a, [f & 4 && u[2], { type: 'button' }, f & 32 && u[5]])));
		},
		i(u) {
			n || (m(o, u), (n = !0));
		},
		o(u) {
			g(o, u), (n = !1);
		},
		d(u) {
			u && _(e), o && o.d(u), s[9](null), (t = !1), lt(l);
		}
	};
}
function yu(s) {
	let e;
	const n = s[8].default,
		t = ae(n, s, s[7], Ns);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 132) && ue(t, n, l, l[7], e ? ce(n, l[7], r, Su) : fe(l[7]), Ns);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Tu(s) {
	let e, n, t, l;
	const r = [yu, wu],
		o = [];
	function a(i, u) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = o[e] = r[e](s)),
		{
			c() {
				n.c(), (t = le());
			},
			l(i) {
				n.l(i), (t = le());
			},
			m(i, u) {
				o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, [u]) {
				let f = e;
				(e = a(i)),
					e === f
						? o[e].p(i, u)
						: (Ee(),
							g(o[f], 1, 1, () => {
								o[f] = null;
							}),
							Se(),
							(n = o[e]),
							n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
							m(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function Au(s, e, n) {
	let t;
	const l = ['asChild', 'el'];
	let r = ne(e, l),
		o,
		{ $$slots: a = {}, $$scope: i } = e,
		{ asChild: u = !1 } = e,
		{ el: f = void 0 } = e;
	const {
		elements: { close: c },
		getAttrs: h
	} = Tn();
	Ae(s, c, (b) => n(6, (o = b)));
	const d = yn(),
		$ = h('close');
	function p(b) {
		Pe[b ? 'unshift' : 'push'](() => {
			(f = b), n(0, f);
		});
	}
	return (
		(s.$$set = (b) => {
			(e = D(D({}, e), Ce(b))),
				n(5, (r = ne(e, l))),
				'asChild' in b && n(1, (u = b.asChild)),
				'el' in b && n(0, (f = b.el)),
				'$$scope' in b && n(7, (i = b.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 64 && n(2, (t = o)), s.$$.dirty & 4 && Object.assign(t, $);
		}),
		[f, u, t, c, d, r, o, i, a, p]
	);
}
class Jo extends pe {
	constructor(e) {
		super(), $e(this, e, Au, Tu, me, { asChild: 1, el: 0 });
	}
}
const Ou = (s) => ({ builder: s & 4 }),
	Ds = (s) => ({ builder: s[2] }),
	Pu = (s) => ({ builder: s & 4 }),
	Is = (s) => ({ builder: s[2] });
function Nu(s) {
	let e, n, t, l;
	const r = s[7].default,
		o = ae(r, s, s[6], Ds);
	let a = [s[2], s[4]],
		i = {};
	for (let u = 0; u < a.length; u += 1) i = D(i, a[u]);
	return {
		c() {
			(e = R('div')), o && o.c(), this.h();
		},
		l(u) {
			e = M(u, 'DIV', {});
			var f = K(e);
			o && o.l(f), f.forEach(_), this.h();
		},
		h() {
			ie(e, i);
		},
		m(u, f) {
			v(u, e, f), o && o.m(e, null), s[8](e), (n = !0), t || ((l = Ke(s[2].action(e))), (t = !0));
		},
		p(u, f) {
			o && o.p && (!n || f & 68) && ue(o, r, u, u[6], n ? ce(r, u[6], f, Ou) : fe(u[6]), Ds),
				ie(e, (i = ge(a, [f & 4 && u[2], f & 16 && u[4]])));
		},
		i(u) {
			n || (m(o, u), (n = !0));
		},
		o(u) {
			g(o, u), (n = !1);
		},
		d(u) {
			u && _(e), o && o.d(u), s[8](null), (t = !1), l();
		}
	};
}
function Du(s) {
	let e;
	const n = s[7].default,
		t = ae(n, s, s[6], Is);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 68) && ue(t, n, l, l[6], e ? ce(n, l[6], r, Pu) : fe(l[6]), Is);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Iu(s) {
	let e, n, t, l;
	const r = [Du, Nu],
		o = [];
	function a(i, u) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = o[e] = r[e](s)),
		{
			c() {
				n.c(), (t = le());
			},
			l(i) {
				n.l(i), (t = le());
			},
			m(i, u) {
				o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, [u]) {
				let f = e;
				(e = a(i)),
					e === f
						? o[e].p(i, u)
						: (Ee(),
							g(o[f], 1, 1, () => {
								o[f] = null;
							}),
							Se(),
							(n = o[e]),
							n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
							m(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function Mu(s, e, n) {
	let t;
	const l = ['asChild', 'el'];
	let r = ne(e, l),
		o,
		{ $$slots: a = {}, $$scope: i } = e,
		{ asChild: u = !1 } = e,
		{ el: f = void 0 } = e;
	const {
		elements: { portalled: c },
		getAttrs: h
	} = Tn();
	Ae(s, c, (p) => n(5, (o = p)));
	const d = h('portal');
	function $(p) {
		Pe[p ? 'unshift' : 'push'](() => {
			(f = p), n(0, f);
		});
	}
	return (
		(s.$$set = (p) => {
			(e = D(D({}, e), Ce(p))),
				n(4, (r = ne(e, l))),
				'asChild' in p && n(1, (u = p.asChild)),
				'el' in p && n(0, (f = p.el)),
				'$$scope' in p && n(6, (i = p.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 32 && n(2, (t = o)), s.$$.dirty & 4 && Object.assign(t, d);
		}),
		[f, u, t, c, r, o, i, a, $]
	);
}
let Xo = class extends pe {
	constructor(e) {
		super(), $e(this, e, Mu, Iu, me, { asChild: 1, el: 0 });
	}
};
const Ru = (s) => ({ builder: s[0] & 256 }),
	Ms = (s) => ({ builder: s[8] }),
	Fu = (s) => ({ builder: s[0] & 256 }),
	Rs = (s) => ({ builder: s[8] }),
	Vu = (s) => ({ builder: s[0] & 256 }),
	Fs = (s) => ({ builder: s[8] }),
	Lu = (s) => ({ builder: s[0] & 256 }),
	Vs = (s) => ({ builder: s[8] }),
	qu = (s) => ({ builder: s[0] & 256 }),
	Ls = (s) => ({ builder: s[8] }),
	ju = (s) => ({ builder: s[0] & 256 }),
	qs = (s) => ({ builder: s[8] });
function Ku(s) {
	let e, n, t, l;
	const r = s[16].default,
		o = ae(r, s, s[15], Ms);
	let a = [s[8], s[12]],
		i = {};
	for (let u = 0; u < a.length; u += 1) i = D(i, a[u]);
	return {
		c() {
			(e = R('div')), o && o.c(), this.h();
		},
		l(u) {
			e = M(u, 'DIV', {});
			var f = K(e);
			o && o.l(f), f.forEach(_), this.h();
		},
		h() {
			ie(e, i);
		},
		m(u, f) {
			v(u, e, f),
				o && o.m(e, null),
				s[56](e),
				(n = !0),
				t ||
					((l = [
						Ke(s[8].action(e)),
						_e(e, 'pointerdown', s[45]),
						_e(e, 'pointermove', s[46]),
						_e(e, 'pointerup', s[47]),
						_e(e, 'touchend', s[48]),
						_e(e, 'touchstart', s[49]),
						_e(e, 'touchcancel', s[50]),
						_e(e, 'touchmove', s[51])
					]),
					(t = !0));
		},
		p(u, f) {
			o &&
				o.p &&
				(!n || f[0] & 33024) &&
				ue(o, r, u, u[15], n ? ce(r, u[15], f, Ru) : fe(u[15]), Ms),
				ie(e, (i = ge(a, [f[0] & 256 && u[8], f[0] & 4096 && u[12]])));
		},
		i(u) {
			n || (m(o, u), (n = !0));
		},
		o(u) {
			g(o, u), (n = !1);
		},
		d(u) {
			u && _(e), o && o.d(u), s[56](null), (t = !1), lt(l);
		}
	};
}
function Bu(s) {
	let e, n, t, l, r;
	const o = s[16].default,
		a = ae(o, s, s[15], Rs);
	let i = [s[8], s[12]],
		u = {};
	for (let f = 0; f < i.length; f += 1) u = D(u, i[f]);
	return {
		c() {
			(e = R('div')), a && a.c(), this.h();
		},
		l(f) {
			e = M(f, 'DIV', {});
			var c = K(e);
			a && a.l(c), c.forEach(_), this.h();
		},
		h() {
			ie(e, u);
		},
		m(f, c) {
			v(f, e, c),
				a && a.m(e, null),
				s[55](e),
				(t = !0),
				l ||
					((r = [
						Ke(s[8].action(e)),
						_e(e, 'pointerdown', s[38]),
						_e(e, 'pointermove', s[39]),
						_e(e, 'pointerup', s[40]),
						_e(e, 'touchend', s[41]),
						_e(e, 'touchstart', s[42]),
						_e(e, 'touchcancel', s[43]),
						_e(e, 'touchmove', s[44])
					]),
					(l = !0));
		},
		p(f, c) {
			(s = f),
				a &&
					a.p &&
					(!t || c[0] & 33024) &&
					ue(a, o, s, s[15], t ? ce(o, s[15], c, Fu) : fe(s[15]), Rs),
				ie(e, (u = ge(i, [c[0] & 256 && s[8], c[0] & 4096 && s[12]])));
		},
		i(f) {
			t || (m(a, f), n && n.end(1), (t = !0));
		},
		o(f) {
			g(a, f), f && (n = Xn(e, s[5], s[6])), (t = !1);
		},
		d(f) {
			f && _(e), a && a.d(f), s[55](null), f && n && n.end(), (l = !1), lt(r);
		}
	};
}
function Uu(s) {
	let e, n, t, l, r;
	const o = s[16].default,
		a = ae(o, s, s[15], Fs);
	let i = [s[8], s[12]],
		u = {};
	for (let f = 0; f < i.length; f += 1) u = D(u, i[f]);
	return {
		c() {
			(e = R('div')), a && a.c(), this.h();
		},
		l(f) {
			e = M(f, 'DIV', {});
			var c = K(e);
			a && a.l(c), c.forEach(_), this.h();
		},
		h() {
			ie(e, u);
		},
		m(f, c) {
			v(f, e, c),
				a && a.m(e, null),
				s[54](e),
				(t = !0),
				l ||
					((r = [
						Ke(s[8].action(e)),
						_e(e, 'pointerdown', s[31]),
						_e(e, 'pointermove', s[32]),
						_e(e, 'pointerup', s[33]),
						_e(e, 'touchend', s[34]),
						_e(e, 'touchstart', s[35]),
						_e(e, 'touchcancel', s[36]),
						_e(e, 'touchmove', s[37])
					]),
					(l = !0));
		},
		p(f, c) {
			(s = f),
				a &&
					a.p &&
					(!t || c[0] & 33024) &&
					ue(a, o, s, s[15], t ? ce(o, s[15], c, Vu) : fe(s[15]), Fs),
				ie(e, (u = ge(i, [c[0] & 256 && s[8], c[0] & 4096 && s[12]])));
		},
		i(f) {
			t ||
				(m(a, f),
				f &&
					(n ||
						Xt(() => {
							(n = Yn(e, s[3], s[4])), n.start();
						})),
				(t = !0));
		},
		o(f) {
			g(a, f), (t = !1);
		},
		d(f) {
			f && _(e), a && a.d(f), s[54](null), (l = !1), lt(r);
		}
	};
}
function zu(s) {
	let e, n, t, l, r, o;
	const a = s[16].default,
		i = ae(a, s, s[15], Vs);
	let u = [s[8], s[12]],
		f = {};
	for (let c = 0; c < u.length; c += 1) f = D(f, u[c]);
	return {
		c() {
			(e = R('div')), i && i.c(), this.h();
		},
		l(c) {
			e = M(c, 'DIV', {});
			var h = K(e);
			i && i.l(h), h.forEach(_), this.h();
		},
		h() {
			ie(e, f);
		},
		m(c, h) {
			v(c, e, h),
				i && i.m(e, null),
				s[53](e),
				(l = !0),
				r ||
					((o = [
						Ke(s[8].action(e)),
						_e(e, 'pointerdown', s[24]),
						_e(e, 'pointermove', s[25]),
						_e(e, 'pointerup', s[26]),
						_e(e, 'touchend', s[27]),
						_e(e, 'touchstart', s[28]),
						_e(e, 'touchcancel', s[29]),
						_e(e, 'touchmove', s[30])
					]),
					(r = !0));
		},
		p(c, h) {
			(s = c),
				i &&
					i.p &&
					(!l || h[0] & 33024) &&
					ue(i, a, s, s[15], l ? ce(a, s[15], h, Lu) : fe(s[15]), Vs),
				ie(e, (f = ge(u, [h[0] & 256 && s[8], h[0] & 4096 && s[12]])));
		},
		i(c) {
			l ||
				(m(i, c),
				c &&
					Xt(() => {
						l && (t && t.end(1), (n = Yn(e, s[3], s[4])), n.start());
					}),
				(l = !0));
		},
		o(c) {
			g(i, c), n && n.invalidate(), c && (t = Xn(e, s[5], s[6])), (l = !1);
		},
		d(c) {
			c && _(e), i && i.d(c), s[53](null), c && t && t.end(), (r = !1), lt(o);
		}
	};
}
function Hu(s) {
	let e, n, t, l, r;
	const o = s[16].default,
		a = ae(o, s, s[15], Ls);
	let i = [s[8], s[12]],
		u = {};
	for (let f = 0; f < i.length; f += 1) u = D(u, i[f]);
	return {
		c() {
			(e = R('div')), a && a.c(), this.h();
		},
		l(f) {
			e = M(f, 'DIV', {});
			var c = K(e);
			a && a.l(c), c.forEach(_), this.h();
		},
		h() {
			ie(e, u);
		},
		m(f, c) {
			v(f, e, c),
				a && a.m(e, null),
				s[52](e),
				(t = !0),
				l ||
					((r = [
						Ke(s[8].action(e)),
						_e(e, 'pointerdown', s[17]),
						_e(e, 'pointermove', s[18]),
						_e(e, 'pointerup', s[19]),
						_e(e, 'touchend', s[20]),
						_e(e, 'touchstart', s[21]),
						_e(e, 'touchcancel', s[22]),
						_e(e, 'touchmove', s[23])
					]),
					(l = !0));
		},
		p(f, c) {
			(s = f),
				a &&
					a.p &&
					(!t || c[0] & 33024) &&
					ue(a, o, s, s[15], t ? ce(o, s[15], c, qu) : fe(s[15]), Ls),
				ie(e, (u = ge(i, [c[0] & 256 && s[8], c[0] & 4096 && s[12]])));
		},
		i(f) {
			t ||
				(m(a, f),
				f &&
					Xt(() => {
						t && (n || (n = Gn(e, s[1], s[2], !0)), n.run(1));
					}),
				(t = !0));
		},
		o(f) {
			g(a, f), f && (n || (n = Gn(e, s[1], s[2], !1)), n.run(0)), (t = !1);
		},
		d(f) {
			f && _(e), a && a.d(f), s[52](null), f && n && n.end(), (l = !1), lt(r);
		}
	};
}
function Qu(s) {
	let e;
	const n = s[16].default,
		t = ae(n, s, s[15], qs);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t &&
				t.p &&
				(!e || r[0] & 33024) &&
				ue(t, n, l, l[15], e ? ce(n, l[15], r, ju) : fe(l[15]), qs);
		},
		i(l) {
			e || (m(t, l), (e = !0));
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
	let e, n, t, l;
	const r = [Qu, Hu, zu, Uu, Bu, Ku],
		o = [];
	function a(i, u) {
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
		~(e = a(s)) && (n = o[e] = r[e](s)),
		{
			c() {
				n && n.c(), (t = le());
			},
			l(i) {
				n && n.l(i), (t = le());
			},
			m(i, u) {
				~e && o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, u) {
				let f = e;
				(e = a(i)),
					e === f
						? ~e && o[e].p(i, u)
						: (n &&
								(Ee(),
								g(o[f], 1, 1, () => {
									o[f] = null;
								}),
								Se()),
							~e
								? ((n = o[e]),
									n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
									m(n, 1),
									n.m(t.parentNode, t))
								: (n = null));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), ~e && o[e].d(i);
			}
		}
	);
}
function Wu(s, e, n) {
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
	let r = ne(e, l),
		o,
		a,
		{ $$slots: i = {}, $$scope: u } = e,
		{ transition: f = void 0 } = e,
		{ transitionConfig: c = void 0 } = e,
		{ inTransition: h = void 0 } = e,
		{ inTransitionConfig: d = void 0 } = e,
		{ outTransition: $ = void 0 } = e,
		{ outTransitionConfig: p = void 0 } = e,
		{ asChild: b = !1 } = e,
		{ id: w = void 0 } = e,
		{ el: y = void 0 } = e;
	const {
		elements: { content: I },
		states: { open: Q },
		ids: P,
		getAttrs: V
	} = Tn();
	Ae(s, I, (Z) => n(14, (o = Z))), Ae(s, Q, (Z) => n(9, (a = Z)));
	const z = V('content');
	function ee(Z) {
		ke.call(this, s, Z);
	}
	function se(Z) {
		ke.call(this, s, Z);
	}
	function T(Z) {
		ke.call(this, s, Z);
	}
	function W(Z) {
		ke.call(this, s, Z);
	}
	function U(Z) {
		ke.call(this, s, Z);
	}
	function B(Z) {
		ke.call(this, s, Z);
	}
	function j(Z) {
		ke.call(this, s, Z);
	}
	function te(Z) {
		ke.call(this, s, Z);
	}
	function F(Z) {
		ke.call(this, s, Z);
	}
	function H(Z) {
		ke.call(this, s, Z);
	}
	function G(Z) {
		ke.call(this, s, Z);
	}
	function Te(Z) {
		ke.call(this, s, Z);
	}
	function Ne(Z) {
		ke.call(this, s, Z);
	}
	function Ie(Z) {
		ke.call(this, s, Z);
	}
	function De(Z) {
		ke.call(this, s, Z);
	}
	function ye(Z) {
		ke.call(this, s, Z);
	}
	function re(Z) {
		ke.call(this, s, Z);
	}
	function oe(Z) {
		ke.call(this, s, Z);
	}
	function be(Z) {
		ke.call(this, s, Z);
	}
	function We(Z) {
		ke.call(this, s, Z);
	}
	function Ge(Z) {
		ke.call(this, s, Z);
	}
	function Be(Z) {
		ke.call(this, s, Z);
	}
	function A(Z) {
		ke.call(this, s, Z);
	}
	function x(Z) {
		ke.call(this, s, Z);
	}
	function Oe(Z) {
		ke.call(this, s, Z);
	}
	function Le(Z) {
		ke.call(this, s, Z);
	}
	function qe(Z) {
		ke.call(this, s, Z);
	}
	function Re(Z) {
		ke.call(this, s, Z);
	}
	function Ze(Z) {
		ke.call(this, s, Z);
	}
	function Ye(Z) {
		ke.call(this, s, Z);
	}
	function Je(Z) {
		ke.call(this, s, Z);
	}
	function Ue(Z) {
		ke.call(this, s, Z);
	}
	function xe(Z) {
		ke.call(this, s, Z);
	}
	function at(Z) {
		ke.call(this, s, Z);
	}
	function Et(Z) {
		ke.call(this, s, Z);
	}
	function St(Z) {
		Pe[Z ? 'unshift' : 'push'](() => {
			(y = Z), n(0, y);
		});
	}
	function ct(Z) {
		Pe[Z ? 'unshift' : 'push'](() => {
			(y = Z), n(0, y);
		});
	}
	function Nn(Z) {
		Pe[Z ? 'unshift' : 'push'](() => {
			(y = Z), n(0, y);
		});
	}
	function gl(Z) {
		Pe[Z ? 'unshift' : 'push'](() => {
			(y = Z), n(0, y);
		});
	}
	function Dl(Z) {
		Pe[Z ? 'unshift' : 'push'](() => {
			(y = Z), n(0, y);
		});
	}
	return (
		(s.$$set = (Z) => {
			(e = D(D({}, e), Ce(Z))),
				n(12, (r = ne(e, l))),
				'transition' in Z && n(1, (f = Z.transition)),
				'transitionConfig' in Z && n(2, (c = Z.transitionConfig)),
				'inTransition' in Z && n(3, (h = Z.inTransition)),
				'inTransitionConfig' in Z && n(4, (d = Z.inTransitionConfig)),
				'outTransition' in Z && n(5, ($ = Z.outTransition)),
				'outTransitionConfig' in Z && n(6, (p = Z.outTransitionConfig)),
				'asChild' in Z && n(7, (b = Z.asChild)),
				'id' in Z && n(13, (w = Z.id)),
				'el' in Z && n(0, (y = Z.el)),
				'$$scope' in Z && n(15, (u = Z.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty[0] & 8192 && w && P.content.set(w),
				s.$$.dirty[0] & 16384 && n(8, (t = o)),
				s.$$.dirty[0] & 256 && Object.assign(t, z);
		}),
		[
			y,
			f,
			c,
			h,
			d,
			$,
			p,
			b,
			t,
			a,
			I,
			Q,
			r,
			w,
			o,
			u,
			i,
			ee,
			se,
			T,
			W,
			U,
			B,
			j,
			te,
			F,
			H,
			G,
			Te,
			Ne,
			Ie,
			De,
			ye,
			re,
			oe,
			be,
			We,
			Ge,
			Be,
			A,
			x,
			Oe,
			Le,
			qe,
			Re,
			Ze,
			Ye,
			Je,
			Ue,
			xe,
			at,
			Et,
			St,
			ct,
			Nn,
			gl,
			Dl
		]
	);
}
let Yo = class extends pe {
	constructor(e) {
		super(),
			$e(
				this,
				e,
				Wu,
				Gu,
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
const Ju = (s) => ({ builder: s & 256 }),
	js = (s) => ({ builder: s[8] });
function Xu(s) {
	let e,
		n,
		t,
		l = [s[8], s[12]],
		r = {};
	for (let o = 0; o < l.length; o += 1) r = D(r, l[o]);
	return {
		c() {
			(e = R('div')), this.h();
		},
		l(o) {
			(e = M(o, 'DIV', {})), K(e).forEach(_), this.h();
		},
		h() {
			ie(e, r);
		},
		m(o, a) {
			v(o, e, a), s[25](e), n || ((t = [Ke(s[8].action(e)), _e(e, 'mouseup', s[20])]), (n = !0));
		},
		p(o, a) {
			ie(e, (r = ge(l, [a & 256 && o[8], a & 4096 && o[12]])));
		},
		i: we,
		o: we,
		d(o) {
			o && _(e), s[25](null), (n = !1), lt(t);
		}
	};
}
function Yu(s) {
	let e,
		n,
		t,
		l,
		r,
		o = [s[8], s[12]],
		a = {};
	for (let i = 0; i < o.length; i += 1) a = D(a, o[i]);
	return {
		c() {
			(e = R('div')), this.h();
		},
		l(i) {
			(e = M(i, 'DIV', {})), K(e).forEach(_), this.h();
		},
		h() {
			ie(e, a);
		},
		m(i, u) {
			v(i, e, u),
				s[24](e),
				(t = !0),
				l || ((r = [Ke(s[8].action(e)), _e(e, 'mouseup', s[19])]), (l = !0));
		},
		p(i, u) {
			(s = i), ie(e, (a = ge(o, [u & 256 && s[8], u & 4096 && s[12]])));
		},
		i(i) {
			t || (n && n.end(1), (t = !0));
		},
		o(i) {
			i && (n = Xn(e, s[5], s[6])), (t = !1);
		},
		d(i) {
			i && _(e), s[24](null), i && n && n.end(), (l = !1), lt(r);
		}
	};
}
function Zu(s) {
	let e,
		n,
		t,
		l,
		r = [s[8], s[12]],
		o = {};
	for (let a = 0; a < r.length; a += 1) o = D(o, r[a]);
	return {
		c() {
			(e = R('div')), this.h();
		},
		l(a) {
			(e = M(a, 'DIV', {})), K(e).forEach(_), this.h();
		},
		h() {
			ie(e, o);
		},
		m(a, i) {
			v(a, e, i), s[23](e), t || ((l = [Ke(s[8].action(e)), _e(e, 'mouseup', s[18])]), (t = !0));
		},
		p(a, i) {
			(s = a), ie(e, (o = ge(r, [i & 256 && s[8], i & 4096 && s[12]])));
		},
		i(a) {
			a &&
				(n ||
					Xt(() => {
						(n = Yn(e, s[3], s[4])), n.start();
					}));
		},
		o: we,
		d(a) {
			a && _(e), s[23](null), (t = !1), lt(l);
		}
	};
}
function xu(s) {
	let e,
		n,
		t,
		l,
		r,
		o,
		a = [s[8], s[12]],
		i = {};
	for (let u = 0; u < a.length; u += 1) i = D(i, a[u]);
	return {
		c() {
			(e = R('div')), this.h();
		},
		l(u) {
			(e = M(u, 'DIV', {})), K(e).forEach(_), this.h();
		},
		h() {
			ie(e, i);
		},
		m(u, f) {
			v(u, e, f),
				s[22](e),
				(l = !0),
				r || ((o = [Ke(s[8].action(e)), _e(e, 'mouseup', s[17])]), (r = !0));
		},
		p(u, f) {
			(s = u), ie(e, (i = ge(a, [f & 256 && s[8], f & 4096 && s[12]])));
		},
		i(u) {
			l ||
				(u &&
					Xt(() => {
						l && (t && t.end(1), (n = Yn(e, s[3], s[4])), n.start());
					}),
				(l = !0));
		},
		o(u) {
			n && n.invalidate(), u && (t = Xn(e, s[5], s[6])), (l = !1);
		},
		d(u) {
			u && _(e), s[22](null), u && t && t.end(), (r = !1), lt(o);
		}
	};
}
function ef(s) {
	let e,
		n,
		t,
		l,
		r,
		o = [s[8], s[12]],
		a = {};
	for (let i = 0; i < o.length; i += 1) a = D(a, o[i]);
	return {
		c() {
			(e = R('div')), this.h();
		},
		l(i) {
			(e = M(i, 'DIV', {})), K(e).forEach(_), this.h();
		},
		h() {
			ie(e, a);
		},
		m(i, u) {
			v(i, e, u),
				s[21](e),
				(t = !0),
				l || ((r = [_e(e, 'mouseup', s[16]), Ke(s[8].action(e))]), (l = !0));
		},
		p(i, u) {
			(s = i), ie(e, (a = ge(o, [u & 256 && s[8], u & 4096 && s[12]])));
		},
		i(i) {
			t ||
				(i &&
					Xt(() => {
						t && (n || (n = Gn(e, s[1], s[2], !0)), n.run(1));
					}),
				(t = !0));
		},
		o(i) {
			i && (n || (n = Gn(e, s[1], s[2], !1)), n.run(0)), (t = !1);
		},
		d(i) {
			i && _(e), s[21](null), i && n && n.end(), (l = !1), lt(r);
		}
	};
}
function tf(s) {
	let e;
	const n = s[15].default,
		t = ae(n, s, s[14], js);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 16640) && ue(t, n, l, l[14], e ? ce(n, l[14], r, Ju) : fe(l[14]), js);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function nf(s) {
	let e, n, t, l;
	const r = [tf, ef, xu, Zu, Yu, Xu],
		o = [];
	function a(i, u) {
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
		~(e = a(s)) && (n = o[e] = r[e](s)),
		{
			c() {
				n && n.c(), (t = le());
			},
			l(i) {
				n && n.l(i), (t = le());
			},
			m(i, u) {
				~e && o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, [u]) {
				let f = e;
				(e = a(i)),
					e === f
						? ~e && o[e].p(i, u)
						: (n &&
								(Ee(),
								g(o[f], 1, 1, () => {
									o[f] = null;
								}),
								Se()),
							~e
								? ((n = o[e]),
									n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
									m(n, 1),
									n.m(t.parentNode, t))
								: (n = null));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), ~e && o[e].d(i);
			}
		}
	);
}
function lf(s, e, n) {
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
	let r = ne(e, l),
		o,
		a,
		{ $$slots: i = {}, $$scope: u } = e,
		{ transition: f = void 0 } = e,
		{ transitionConfig: c = void 0 } = e,
		{ inTransition: h = void 0 } = e,
		{ inTransitionConfig: d = void 0 } = e,
		{ outTransition: $ = void 0 } = e,
		{ outTransitionConfig: p = void 0 } = e,
		{ asChild: b = !1 } = e,
		{ el: w = void 0 } = e;
	const {
		elements: { overlay: y },
		states: { open: I },
		getAttrs: Q
	} = Tn();
	Ae(s, y, (F) => n(13, (o = F))), Ae(s, I, (F) => n(9, (a = F)));
	const P = Q('overlay');
	function V(F) {
		ke.call(this, s, F);
	}
	function z(F) {
		ke.call(this, s, F);
	}
	function ee(F) {
		ke.call(this, s, F);
	}
	function se(F) {
		ke.call(this, s, F);
	}
	function T(F) {
		ke.call(this, s, F);
	}
	function W(F) {
		Pe[F ? 'unshift' : 'push'](() => {
			(w = F), n(0, w);
		});
	}
	function U(F) {
		Pe[F ? 'unshift' : 'push'](() => {
			(w = F), n(0, w);
		});
	}
	function B(F) {
		Pe[F ? 'unshift' : 'push'](() => {
			(w = F), n(0, w);
		});
	}
	function j(F) {
		Pe[F ? 'unshift' : 'push'](() => {
			(w = F), n(0, w);
		});
	}
	function te(F) {
		Pe[F ? 'unshift' : 'push'](() => {
			(w = F), n(0, w);
		});
	}
	return (
		(s.$$set = (F) => {
			(e = D(D({}, e), Ce(F))),
				n(12, (r = ne(e, l))),
				'transition' in F && n(1, (f = F.transition)),
				'transitionConfig' in F && n(2, (c = F.transitionConfig)),
				'inTransition' in F && n(3, (h = F.inTransition)),
				'inTransitionConfig' in F && n(4, (d = F.inTransitionConfig)),
				'outTransition' in F && n(5, ($ = F.outTransition)),
				'outTransitionConfig' in F && n(6, (p = F.outTransitionConfig)),
				'asChild' in F && n(7, (b = F.asChild)),
				'el' in F && n(0, (w = F.el)),
				'$$scope' in F && n(14, (u = F.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 8192 && n(8, (t = o)), s.$$.dirty & 256 && Object.assign(t, P);
		}),
		[w, f, c, h, d, $, p, b, t, a, y, I, r, o, u, i, V, z, ee, se, T, W, U, B, j, te]
	);
}
let Zo = class extends pe {
	constructor(e) {
		super(),
			$e(this, e, lf, nf, me, {
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
const sf = (s) => ({ builder: s & 4 }),
	Ks = (s) => ({ builder: s[2] }),
	rf = (s) => ({ builder: s & 4 }),
	Bs = (s) => ({ builder: s[2] });
function of(s) {
	let e, n, t, l;
	const r = s[8].default,
		o = ae(r, s, s[7], Ks);
	let a = [s[2], { type: 'button' }, s[5]],
		i = {};
	for (let u = 0; u < a.length; u += 1) i = D(i, a[u]);
	return {
		c() {
			(e = R('button')), o && o.c(), this.h();
		},
		l(u) {
			e = M(u, 'BUTTON', { type: !0 });
			var f = K(e);
			o && o.l(f), f.forEach(_), this.h();
		},
		h() {
			ie(e, i);
		},
		m(u, f) {
			v(u, e, f),
				o && o.m(e, null),
				e.autofocus && e.focus(),
				s[9](e),
				(n = !0),
				t ||
					((l = [Ke(s[2].action(e)), _e(e, 'm-click', s[4]), _e(e, 'm-keydown', s[4])]), (t = !0));
		},
		p(u, f) {
			o && o.p && (!n || f & 132) && ue(o, r, u, u[7], n ? ce(r, u[7], f, sf) : fe(u[7]), Ks),
				ie(e, (i = ge(a, [f & 4 && u[2], { type: 'button' }, f & 32 && u[5]])));
		},
		i(u) {
			n || (m(o, u), (n = !0));
		},
		o(u) {
			g(o, u), (n = !1);
		},
		d(u) {
			u && _(e), o && o.d(u), s[9](null), (t = !1), lt(l);
		}
	};
}
function af(s) {
	let e;
	const n = s[8].default,
		t = ae(n, s, s[7], Bs);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 132) && ue(t, n, l, l[7], e ? ce(n, l[7], r, rf) : fe(l[7]), Bs);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function uf(s) {
	let e, n, t, l;
	const r = [af, of],
		o = [];
	function a(i, u) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = o[e] = r[e](s)),
		{
			c() {
				n.c(), (t = le());
			},
			l(i) {
				n.l(i), (t = le());
			},
			m(i, u) {
				o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, [u]) {
				let f = e;
				(e = a(i)),
					e === f
						? o[e].p(i, u)
						: (Ee(),
							g(o[f], 1, 1, () => {
								o[f] = null;
							}),
							Se(),
							(n = o[e]),
							n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
							m(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function ff(s, e, n) {
	let t;
	const l = ['asChild', 'el'];
	let r = ne(e, l),
		o,
		{ $$slots: a = {}, $$scope: i } = e,
		{ asChild: u = !1 } = e,
		{ el: f = void 0 } = e;
	const {
		elements: { trigger: c },
		getAttrs: h
	} = Tn();
	Ae(s, c, (b) => n(6, (o = b)));
	const d = yn(),
		$ = h('trigger');
	function p(b) {
		Pe[b ? 'unshift' : 'push'](() => {
			(f = b), n(0, f);
		});
	}
	return (
		(s.$$set = (b) => {
			(e = D(D({}, e), Ce(b))),
				n(5, (r = ne(e, l))),
				'asChild' in b && n(1, (u = b.asChild)),
				'el' in b && n(0, (f = b.el)),
				'$$scope' in b && n(7, (i = b.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 64 && n(2, (t = o)), s.$$.dirty & 4 && Object.assign(t, $);
		}),
		[f, u, t, c, d, r, o, i, a, p]
	);
}
class xo extends pe {
	constructor(e) {
		super(), $e(this, e, ff, uf, me, { asChild: 1, el: 0 });
	}
}
const cf = (s) => ({ builder: s & 4 }),
	Us = (s) => ({ builder: s[2] }),
	df = (s) => ({ builder: s & 4 }),
	zs = (s) => ({ builder: s[2] });
function mf(s) {
	let e, n, t, l;
	const r = s[8].default,
		o = ae(r, s, s[7], Us);
	let a = [s[2], s[4]],
		i = {};
	for (let u = 0; u < a.length; u += 1) i = D(i, a[u]);
	return {
		c() {
			(e = R('div')), o && o.c(), this.h();
		},
		l(u) {
			e = M(u, 'DIV', {});
			var f = K(e);
			o && o.l(f), f.forEach(_), this.h();
		},
		h() {
			ie(e, i);
		},
		m(u, f) {
			v(u, e, f), o && o.m(e, null), s[9](e), (n = !0), t || ((l = Ke(s[2].action(e))), (t = !0));
		},
		p(u, f) {
			o && o.p && (!n || f & 132) && ue(o, r, u, u[7], n ? ce(r, u[7], f, cf) : fe(u[7]), Us),
				ie(e, (i = ge(a, [f & 4 && u[2], f & 16 && u[4]])));
		},
		i(u) {
			n || (m(o, u), (n = !0));
		},
		o(u) {
			g(o, u), (n = !1);
		},
		d(u) {
			u && _(e), o && o.d(u), s[9](null), (t = !1), l();
		}
	};
}
function _f(s) {
	let e;
	const n = s[8].default,
		t = ae(n, s, s[7], zs);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 132) && ue(t, n, l, l[7], e ? ce(n, l[7], r, df) : fe(l[7]), zs);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function hf(s) {
	let e, n, t, l;
	const r = [_f, mf],
		o = [];
	function a(i, u) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = o[e] = r[e](s)),
		{
			c() {
				n.c(), (t = le());
			},
			l(i) {
				n.l(i), (t = le());
			},
			m(i, u) {
				o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, [u]) {
				let f = e;
				(e = a(i)),
					e === f
						? o[e].p(i, u)
						: (Ee(),
							g(o[f], 1, 1, () => {
								o[f] = null;
							}),
							Se(),
							(n = o[e]),
							n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
							m(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function gf(s, e, n) {
	let t;
	const l = ['asChild', 'id', 'el'];
	let r = ne(e, l),
		o,
		{ $$slots: a = {}, $$scope: i } = e,
		{ asChild: u = !1 } = e,
		{ id: f = void 0 } = e,
		{ el: c = void 0 } = e;
	const {
		elements: { description: h },
		ids: d,
		getAttrs: $
	} = Tn();
	Ae(s, h, (w) => n(6, (o = w)));
	const p = $('description');
	function b(w) {
		Pe[w ? 'unshift' : 'push'](() => {
			(c = w), n(0, c);
		});
	}
	return (
		(s.$$set = (w) => {
			(e = D(D({}, e), Ce(w))),
				n(4, (r = ne(e, l))),
				'asChild' in w && n(1, (u = w.asChild)),
				'id' in w && n(5, (f = w.id)),
				'el' in w && n(0, (c = w.el)),
				'$$scope' in w && n(7, (i = w.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 32 && f && d.description.set(f),
				s.$$.dirty & 64 && n(2, (t = o)),
				s.$$.dirty & 4 && Object.assign(t, p);
		}),
		[c, u, t, h, r, f, o, i, a, b]
	);
}
class pf extends pe {
	constructor(e) {
		super(), $e(this, e, gf, hf, me, { asChild: 1, id: 5, el: 0 });
	}
}
function Al() {
	return {
		NAME: 'select',
		GROUP_NAME: 'select-group',
		ITEM_NAME: 'select-item',
		PARTS: ['arrow', 'content', 'group', 'item', 'indicator', 'input', 'label', 'trigger', 'value']
	};
}
function Zn() {
	const { NAME: s } = Al();
	return _n(s);
}
function $f(s) {
	const { NAME: e, PARTS: n } = Al(),
		t = ml(e, n),
		l = { ...ou({ ...fl(s), forceVisible: !0 }), getAttrs: t };
	return Dt(e, l), { ...l, updateOption: cl(l.options) };
}
function bf(s) {
	const { ITEM_NAME: e } = Al(),
		n = Zn();
	return Dt(e, s), n;
}
function vf() {
	const { ITEM_NAME: s } = Al(),
		{
			helpers: { isSelected: e },
			getAttrs: n
		} = Zn();
	return { value: _n(s), isSelected: e, getAttrs: n };
}
function kf(s) {
	const n = { ...{ side: 'bottom', align: 'center', sameWidth: !0 }, ...s },
		{
			options: { positioning: t }
		} = Zn();
	Ui(t)(n);
}
const Cf = (s) => ({ ids: s & 1 }),
	Hs = (s) => ({ ids: s[0] });
function Ef(s) {
	let e;
	const n = s[18].default,
		t = ae(n, s, s[17], Hs);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, [r]) {
			t && t.p && (!e || r & 131073) && ue(t, n, l, l[17], e ? ce(n, l[17], r, Cf) : fe(l[17]), Hs);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Sf(s, e, n) {
	let t,
		{ $$slots: l = {}, $$scope: r } = e,
		{ required: o = void 0 } = e,
		{ disabled: a = void 0 } = e,
		{ preventScroll: i = void 0 } = e,
		{ loop: u = void 0 } = e,
		{ closeOnEscape: f = void 0 } = e,
		{ closeOnOutsideClick: c = void 0 } = e,
		{ portal: h = void 0 } = e,
		{ name: d = void 0 } = e,
		{ multiple: $ = !1 } = e,
		{ selected: p = void 0 } = e,
		{ onSelectedChange: b = void 0 } = e,
		{ open: w = void 0 } = e,
		{ onOpenChange: y = void 0 } = e,
		{ items: I = [] } = e,
		{ onOutsideClick: Q = void 0 } = e;
	const {
			states: { open: P, selected: V },
			updateOption: z,
			ids: ee
		} = $f({
			required: o,
			disabled: a,
			preventScroll: i,
			loop: u,
			closeOnEscape: f,
			closeOnOutsideClick: c,
			portal: h,
			name: d,
			onOutsideClick: Q,
			multiple: $,
			forceVisible: !0,
			defaultSelected: Array.isArray(p) ? [...p] : p,
			defaultOpen: w,
			onSelectedChange: ({ next: T }) =>
				Array.isArray(T)
					? ((!Array.isArray(p) || !Ia(p, T)) && (b == null || b(T), n(2, (p = T))), T)
					: (p !== T && (b == null || b(T), n(2, (p = T))), T),
			onOpenChange: ({ next: T }) => (w !== T && (y == null || y(T), n(3, (w = T))), T),
			items: I
		}),
		se = Ct([ee.menu, ee.trigger, ee.label], ([T, W, U]) => ({ menu: T, trigger: W, label: U }));
	return (
		Ae(s, se, (T) => n(0, (t = T))),
		(s.$$set = (T) => {
			'required' in T && n(4, (o = T.required)),
				'disabled' in T && n(5, (a = T.disabled)),
				'preventScroll' in T && n(6, (i = T.preventScroll)),
				'loop' in T && n(7, (u = T.loop)),
				'closeOnEscape' in T && n(8, (f = T.closeOnEscape)),
				'closeOnOutsideClick' in T && n(9, (c = T.closeOnOutsideClick)),
				'portal' in T && n(10, (h = T.portal)),
				'name' in T && n(11, (d = T.name)),
				'multiple' in T && n(12, ($ = T.multiple)),
				'selected' in T && n(2, (p = T.selected)),
				'onSelectedChange' in T && n(13, (b = T.onSelectedChange)),
				'open' in T && n(3, (w = T.open)),
				'onOpenChange' in T && n(14, (y = T.onOpenChange)),
				'items' in T && n(15, (I = T.items)),
				'onOutsideClick' in T && n(16, (Q = T.onOutsideClick)),
				'$$scope' in T && n(17, (r = T.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 8 && w !== void 0 && P.set(w),
				s.$$.dirty & 4 && p !== void 0 && V.set(Array.isArray(p) ? [...p] : p),
				s.$$.dirty & 16 && z('required', o),
				s.$$.dirty & 32 && z('disabled', a),
				s.$$.dirty & 64 && z('preventScroll', i),
				s.$$.dirty & 128 && z('loop', u),
				s.$$.dirty & 256 && z('closeOnEscape', f),
				s.$$.dirty & 512 && z('closeOnOutsideClick', c),
				s.$$.dirty & 1024 && z('portal', h),
				s.$$.dirty & 2048 && z('name', d),
				s.$$.dirty & 4096 && z('multiple', $),
				s.$$.dirty & 65536 && z('onOutsideClick', Q);
		}),
		[t, se, p, w, o, a, i, u, f, c, h, d, $, b, y, I, Q, r, l]
	);
}
class wf extends pe {
	constructor(e) {
		super(),
			$e(this, e, Sf, Ef, me, {
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
const yf = (s) => ({ builder: s[0] & 256 }),
	Qs = (s) => ({ builder: s[8] }),
	Tf = (s) => ({ builder: s[0] & 256 }),
	Gs = (s) => ({ builder: s[8] }),
	Af = (s) => ({ builder: s[0] & 256 }),
	Ws = (s) => ({ builder: s[8] }),
	Of = (s) => ({ builder: s[0] & 256 }),
	Js = (s) => ({ builder: s[8] }),
	Pf = (s) => ({ builder: s[0] & 256 }),
	Xs = (s) => ({ builder: s[8] }),
	Nf = (s) => ({ builder: s[0] & 256 }),
	Ys = (s) => ({ builder: s[8] });
function Df(s) {
	let e, n, t, l;
	const r = s[28].default,
		o = ae(r, s, s[27], Qs);
	let a = [s[8], s[13]],
		i = {};
	for (let u = 0; u < a.length; u += 1) i = D(i, a[u]);
	return {
		c() {
			(e = R('div')), o && o.c(), this.h();
		},
		l(u) {
			e = M(u, 'DIV', {});
			var f = K(e);
			o && o.l(f), f.forEach(_), this.h();
		},
		h() {
			ie(e, i);
		},
		m(u, f) {
			v(u, e, f),
				o && o.m(e, null),
				s[38](e),
				(n = !0),
				t ||
					((l = [Ke(s[8].action(e)), _e(e, 'm-pointerleave', s[12]), _e(e, 'keydown', s[33])]),
					(t = !0));
		},
		p(u, f) {
			o &&
				o.p &&
				(!n || f[0] & 134217984) &&
				ue(o, r, u, u[27], n ? ce(r, u[27], f, yf) : fe(u[27]), Qs),
				ie(e, (i = ge(a, [f[0] & 256 && u[8], f[0] & 8192 && u[13]])));
		},
		i(u) {
			n || (m(o, u), (n = !0));
		},
		o(u) {
			g(o, u), (n = !1);
		},
		d(u) {
			u && _(e), o && o.d(u), s[38](null), (t = !1), lt(l);
		}
	};
}
function If(s) {
	let e, n, t, l, r;
	const o = s[28].default,
		a = ae(o, s, s[27], Gs);
	let i = [s[8], s[13]],
		u = {};
	for (let f = 0; f < i.length; f += 1) u = D(u, i[f]);
	return {
		c() {
			(e = R('div')), a && a.c(), this.h();
		},
		l(f) {
			e = M(f, 'DIV', {});
			var c = K(e);
			a && a.l(c), c.forEach(_), this.h();
		},
		h() {
			ie(e, u);
		},
		m(f, c) {
			v(f, e, c),
				a && a.m(e, null),
				s[37](e),
				(t = !0),
				l ||
					((r = [Ke(s[8].action(e)), _e(e, 'm-pointerleave', s[12]), _e(e, 'keydown', s[32])]),
					(l = !0));
		},
		p(f, c) {
			(s = f),
				a &&
					a.p &&
					(!t || c[0] & 134217984) &&
					ue(a, o, s, s[27], t ? ce(o, s[27], c, Tf) : fe(s[27]), Gs),
				ie(e, (u = ge(i, [c[0] & 256 && s[8], c[0] & 8192 && s[13]])));
		},
		i(f) {
			t || (m(a, f), n && n.end(1), (t = !0));
		},
		o(f) {
			g(a, f), f && (n = Xn(e, s[5], s[6])), (t = !1);
		},
		d(f) {
			f && _(e), a && a.d(f), s[37](null), f && n && n.end(), (l = !1), lt(r);
		}
	};
}
function Mf(s) {
	let e, n, t, l, r;
	const o = s[28].default,
		a = ae(o, s, s[27], Ws);
	let i = [s[8], s[13]],
		u = {};
	for (let f = 0; f < i.length; f += 1) u = D(u, i[f]);
	return {
		c() {
			(e = R('div')), a && a.c(), this.h();
		},
		l(f) {
			e = M(f, 'DIV', {});
			var c = K(e);
			a && a.l(c), c.forEach(_), this.h();
		},
		h() {
			ie(e, u);
		},
		m(f, c) {
			v(f, e, c),
				a && a.m(e, null),
				s[36](e),
				(t = !0),
				l ||
					((r = [Ke(s[8].action(e)), _e(e, 'm-pointerleave', s[12]), _e(e, 'keydown', s[31])]),
					(l = !0));
		},
		p(f, c) {
			(s = f),
				a &&
					a.p &&
					(!t || c[0] & 134217984) &&
					ue(a, o, s, s[27], t ? ce(o, s[27], c, Af) : fe(s[27]), Ws),
				ie(e, (u = ge(i, [c[0] & 256 && s[8], c[0] & 8192 && s[13]])));
		},
		i(f) {
			t ||
				(m(a, f),
				f &&
					(n ||
						Xt(() => {
							(n = Yn(e, s[3], s[4])), n.start();
						})),
				(t = !0));
		},
		o(f) {
			g(a, f), (t = !1);
		},
		d(f) {
			f && _(e), a && a.d(f), s[36](null), (l = !1), lt(r);
		}
	};
}
function Rf(s) {
	let e, n, t, l, r, o;
	const a = s[28].default,
		i = ae(a, s, s[27], Js);
	let u = [s[8], s[13]],
		f = {};
	for (let c = 0; c < u.length; c += 1) f = D(f, u[c]);
	return {
		c() {
			(e = R('div')), i && i.c(), this.h();
		},
		l(c) {
			e = M(c, 'DIV', {});
			var h = K(e);
			i && i.l(h), h.forEach(_), this.h();
		},
		h() {
			ie(e, f);
		},
		m(c, h) {
			v(c, e, h),
				i && i.m(e, null),
				s[35](e),
				(l = !0),
				r ||
					((o = [Ke(s[8].action(e)), _e(e, 'm-pointerleave', s[12]), _e(e, 'keydown', s[30])]),
					(r = !0));
		},
		p(c, h) {
			(s = c),
				i &&
					i.p &&
					(!l || h[0] & 134217984) &&
					ue(i, a, s, s[27], l ? ce(a, s[27], h, Of) : fe(s[27]), Js),
				ie(e, (f = ge(u, [h[0] & 256 && s[8], h[0] & 8192 && s[13]])));
		},
		i(c) {
			l ||
				(m(i, c),
				c &&
					Xt(() => {
						l && (t && t.end(1), (n = Yn(e, s[3], s[4])), n.start());
					}),
				(l = !0));
		},
		o(c) {
			g(i, c), n && n.invalidate(), c && (t = Xn(e, s[5], s[6])), (l = !1);
		},
		d(c) {
			c && _(e), i && i.d(c), s[35](null), c && t && t.end(), (r = !1), lt(o);
		}
	};
}
function Ff(s) {
	let e, n, t, l, r;
	const o = s[28].default,
		a = ae(o, s, s[27], Xs);
	let i = [s[8], s[13]],
		u = {};
	for (let f = 0; f < i.length; f += 1) u = D(u, i[f]);
	return {
		c() {
			(e = R('div')), a && a.c(), this.h();
		},
		l(f) {
			e = M(f, 'DIV', {});
			var c = K(e);
			a && a.l(c), c.forEach(_), this.h();
		},
		h() {
			ie(e, u);
		},
		m(f, c) {
			v(f, e, c),
				a && a.m(e, null),
				s[34](e),
				(t = !0),
				l ||
					((r = [Ke(s[8].action(e)), _e(e, 'm-pointerleave', s[12]), _e(e, 'keydown', s[29])]),
					(l = !0));
		},
		p(f, c) {
			(s = f),
				a &&
					a.p &&
					(!t || c[0] & 134217984) &&
					ue(a, o, s, s[27], t ? ce(o, s[27], c, Pf) : fe(s[27]), Xs),
				ie(e, (u = ge(i, [c[0] & 256 && s[8], c[0] & 8192 && s[13]])));
		},
		i(f) {
			t ||
				(m(a, f),
				f &&
					Xt(() => {
						t && (n || (n = Gn(e, s[1], s[2], !0)), n.run(1));
					}),
				(t = !0));
		},
		o(f) {
			g(a, f), f && (n || (n = Gn(e, s[1], s[2], !1)), n.run(0)), (t = !1);
		},
		d(f) {
			f && _(e), a && a.d(f), s[34](null), f && n && n.end(), (l = !1), lt(r);
		}
	};
}
function Vf(s) {
	let e;
	const n = s[28].default,
		t = ae(n, s, s[27], Ys);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t &&
				t.p &&
				(!e || r[0] & 134217984) &&
				ue(t, n, l, l[27], e ? ce(n, l[27], r, Nf) : fe(l[27]), Ys);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Lf(s) {
	let e, n, t, l;
	const r = [Vf, Ff, Rf, Mf, If, Df],
		o = [];
	function a(i, u) {
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
		~(e = a(s)) && (n = o[e] = r[e](s)),
		{
			c() {
				n && n.c(), (t = le());
			},
			l(i) {
				n && n.l(i), (t = le());
			},
			m(i, u) {
				~e && o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, u) {
				let f = e;
				(e = a(i)),
					e === f
						? ~e && o[e].p(i, u)
						: (n &&
								(Ee(),
								g(o[f], 1, 1, () => {
									o[f] = null;
								}),
								Se()),
							~e
								? ((n = o[e]),
									n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
									m(n, 1),
									n.m(t.parentNode, t))
								: (n = null));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), ~e && o[e].d(i);
			}
		}
	);
}
function qf(s, e, n) {
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
	let r = ne(e, l),
		o,
		a,
		{ $$slots: i = {}, $$scope: u } = e,
		{ transition: f = void 0 } = e,
		{ transitionConfig: c = void 0 } = e,
		{ inTransition: h = void 0 } = e,
		{ inTransitionConfig: d = void 0 } = e,
		{ outTransition: $ = void 0 } = e,
		{ outTransitionConfig: p = void 0 } = e,
		{ asChild: b = !1 } = e,
		{ id: w = void 0 } = e,
		{ side: y = 'bottom' } = e,
		{ align: I = 'center' } = e,
		{ sideOffset: Q = 0 } = e,
		{ alignOffset: P = 0 } = e,
		{ collisionPadding: V = 8 } = e,
		{ avoidCollisions: z = !0 } = e,
		{ collisionBoundary: ee = void 0 } = e,
		{ sameWidth: se = !0 } = e,
		{ fitViewport: T = !1 } = e,
		{ strategy: W = 'absolute' } = e,
		{ overlap: U = !1 } = e,
		{ el: B = void 0 } = e;
	const {
		elements: { menu: j },
		states: { open: te },
		ids: F,
		getAttrs: H
	} = Zn();
	Ae(s, j, (A) => n(26, (a = A))), Ae(s, te, (A) => n(9, (o = A)));
	const G = yn(),
		Te = H('content');
	function Ne(A) {
		ke.call(this, s, A);
	}
	function Ie(A) {
		ke.call(this, s, A);
	}
	function De(A) {
		ke.call(this, s, A);
	}
	function ye(A) {
		ke.call(this, s, A);
	}
	function re(A) {
		ke.call(this, s, A);
	}
	function oe(A) {
		Pe[A ? 'unshift' : 'push'](() => {
			(B = A), n(0, B);
		});
	}
	function be(A) {
		Pe[A ? 'unshift' : 'push'](() => {
			(B = A), n(0, B);
		});
	}
	function We(A) {
		Pe[A ? 'unshift' : 'push'](() => {
			(B = A), n(0, B);
		});
	}
	function Ge(A) {
		Pe[A ? 'unshift' : 'push'](() => {
			(B = A), n(0, B);
		});
	}
	function Be(A) {
		Pe[A ? 'unshift' : 'push'](() => {
			(B = A), n(0, B);
		});
	}
	return (
		(s.$$set = (A) => {
			(e = D(D({}, e), Ce(A))),
				n(13, (r = ne(e, l))),
				'transition' in A && n(1, (f = A.transition)),
				'transitionConfig' in A && n(2, (c = A.transitionConfig)),
				'inTransition' in A && n(3, (h = A.inTransition)),
				'inTransitionConfig' in A && n(4, (d = A.inTransitionConfig)),
				'outTransition' in A && n(5, ($ = A.outTransition)),
				'outTransitionConfig' in A && n(6, (p = A.outTransitionConfig)),
				'asChild' in A && n(7, (b = A.asChild)),
				'id' in A && n(14, (w = A.id)),
				'side' in A && n(15, (y = A.side)),
				'align' in A && n(16, (I = A.align)),
				'sideOffset' in A && n(17, (Q = A.sideOffset)),
				'alignOffset' in A && n(18, (P = A.alignOffset)),
				'collisionPadding' in A && n(19, (V = A.collisionPadding)),
				'avoidCollisions' in A && n(20, (z = A.avoidCollisions)),
				'collisionBoundary' in A && n(21, (ee = A.collisionBoundary)),
				'sameWidth' in A && n(22, (se = A.sameWidth)),
				'fitViewport' in A && n(23, (T = A.fitViewport)),
				'strategy' in A && n(24, (W = A.strategy)),
				'overlap' in A && n(25, (U = A.overlap)),
				'el' in A && n(0, (B = A.el)),
				'$$scope' in A && n(27, (u = A.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty[0] & 16384 && w && F.menu.set(w),
				s.$$.dirty[0] & 67108864 && n(8, (t = a)),
				s.$$.dirty[0] & 256 && Object.assign(t, Te),
				s.$$.dirty[0] & 67076608 &&
					o &&
					kf({
						side: y,
						align: I,
						sideOffset: Q,
						alignOffset: P,
						collisionPadding: V,
						avoidCollisions: z,
						collisionBoundary: ee,
						sameWidth: se,
						fitViewport: T,
						strategy: W,
						overlap: U
					});
		}),
		[
			B,
			f,
			c,
			h,
			d,
			$,
			p,
			b,
			t,
			o,
			j,
			te,
			G,
			r,
			w,
			y,
			I,
			Q,
			P,
			V,
			z,
			ee,
			se,
			T,
			W,
			U,
			a,
			u,
			i,
			Ne,
			Ie,
			De,
			ye,
			re,
			oe,
			be,
			We,
			Ge,
			Be
		]
	);
}
let jf = class extends pe {
	constructor(e) {
		super(),
			$e(
				this,
				e,
				qf,
				Lf,
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
const Kf = (s) => ({ builder: s & 16, isSelected: s & 32 }),
	Zs = (s) => ({ builder: s[4], isSelected: s[5] }),
	Bf = (s) => ({ builder: s & 16, isSelected: s & 32 }),
	xs = (s) => ({ builder: s[4], isSelected: s[5] });
function Uf(s) {
	let e, n, t, l;
	const r = s[14].default,
		o = ae(r, s, s[13], Zs),
		a = o || Hf(s);
	let i = [s[4], s[9]],
		u = {};
	for (let f = 0; f < i.length; f += 1) u = D(u, i[f]);
	return {
		c() {
			(e = R('div')), a && a.c(), this.h();
		},
		l(f) {
			e = M(f, 'DIV', {});
			var c = K(e);
			a && a.l(c), c.forEach(_), this.h();
		},
		h() {
			ie(e, u);
		},
		m(f, c) {
			v(f, e, c),
				a && a.m(e, null),
				s[19](e),
				(n = !0),
				t ||
					((l = [
						Ke(s[4].action(e)),
						_e(e, 'm-click', s[8]),
						_e(e, 'm-pointermove', s[8]),
						_e(e, 'focusin', s[15]),
						_e(e, 'keydown', s[16]),
						_e(e, 'focusout', s[17]),
						_e(e, 'pointerleave', s[18])
					]),
					(t = !0));
		},
		p(f, c) {
			o
				? o.p && (!n || c & 8240) && ue(o, r, f, f[13], n ? ce(r, f[13], c, Kf) : fe(f[13]), Zs)
				: a && a.p && (!n || c & 6) && a.p(f, n ? c : -1),
				ie(e, (u = ge(i, [c & 16 && f[4], c & 512 && f[9]])));
		},
		i(f) {
			n || (m(a, f), (n = !0));
		},
		o(f) {
			g(a, f), (n = !1);
		},
		d(f) {
			f && _(e), a && a.d(f), s[19](null), (t = !1), lt(l);
		}
	};
}
function zf(s) {
	let e;
	const n = s[14].default,
		t = ae(n, s, s[13], xs);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 8240) && ue(t, n, l, l[13], e ? ce(n, l[13], r, Bf) : fe(l[13]), xs);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Hf(s) {
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
			v(t, n, l);
		},
		p(t, l) {
			l & 6 && e !== (e = (t[2] ? t[2] : t[1]) + '') && dt(n, e);
		},
		d(t) {
			t && _(n);
		}
	};
}
function Qf(s) {
	let e, n, t, l;
	const r = [zf, Uf],
		o = [];
	function a(i, u) {
		return i[3] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = o[e] = r[e](s)),
		{
			c() {
				n.c(), (t = le());
			},
			l(i) {
				n.l(i), (t = le());
			},
			m(i, u) {
				o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, [u]) {
				let f = e;
				(e = a(i)),
					e === f
						? o[e].p(i, u)
						: (Ee(),
							g(o[f], 1, 1, () => {
								o[f] = null;
							}),
							Se(),
							(n = o[e]),
							n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
							m(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function Gf(s, e, n) {
	let t, l;
	const r = ['value', 'disabled', 'label', 'asChild', 'el'];
	let o = ne(e, r),
		a,
		i,
		{ $$slots: u = {}, $$scope: f } = e,
		{ value: c } = e,
		{ disabled: h = void 0 } = e,
		{ label: d = void 0 } = e,
		{ asChild: $ = !1 } = e,
		{ el: p = void 0 } = e;
	const {
		elements: { option: b },
		helpers: { isSelected: w },
		getAttrs: y
	} = bf(c);
	Ae(s, b, (T) => n(12, (i = T))), Ae(s, w, (T) => n(11, (a = T)));
	const I = yn(),
		Q = y('item');
	function P(T) {
		ke.call(this, s, T);
	}
	function V(T) {
		ke.call(this, s, T);
	}
	function z(T) {
		ke.call(this, s, T);
	}
	function ee(T) {
		ke.call(this, s, T);
	}
	function se(T) {
		Pe[T ? 'unshift' : 'push'](() => {
			(p = T), n(0, p);
		});
	}
	return (
		(s.$$set = (T) => {
			(e = D(D({}, e), Ce(T))),
				n(9, (o = ne(e, r))),
				'value' in T && n(1, (c = T.value)),
				'disabled' in T && n(10, (h = T.disabled)),
				'label' in T && n(2, (d = T.label)),
				'asChild' in T && n(3, ($ = T.asChild)),
				'el' in T && n(0, (p = T.el)),
				'$$scope' in T && n(13, (f = T.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 5126 && n(4, (t = i({ value: c, disabled: h, label: d }))),
				s.$$.dirty & 16 && Object.assign(t, Q),
				s.$$.dirty & 2050 && n(5, (l = a(c)));
		}),
		[p, c, d, $, t, l, b, w, I, o, h, a, i, f, u, P, V, z, ee, se]
	);
}
let Wf = class extends pe {
	constructor(e) {
		super(), $e(this, e, Gf, Qf, me, { value: 1, disabled: 10, label: 2, asChild: 3, el: 0 });
	}
};
const Jf = (s) => ({ isSelected: s & 4 }),
	er = (s) => ({ attrs: s[5], isSelected: s[2](s[4]) }),
	Xf = (s) => ({ isSelected: s & 4 }),
	tr = (s) => ({ attrs: s[5], isSelected: s[2](s[4]) });
function Yf(s) {
	let e,
		n = s[2](s[4]),
		t,
		l = n && nr(s),
		r = [s[6], s[5]],
		o = {};
	for (let a = 0; a < r.length; a += 1) o = D(o, r[a]);
	return {
		c() {
			(e = R('div')), l && l.c(), this.h();
		},
		l(a) {
			e = M(a, 'DIV', {});
			var i = K(e);
			l && l.l(i), i.forEach(_), this.h();
		},
		h() {
			ie(e, o);
		},
		m(a, i) {
			v(a, e, i), l && l.m(e, null), s[9](e), (t = !0);
		},
		p(a, i) {
			i & 4 && (n = a[2](a[4])),
				n
					? l
						? (l.p(a, i), i & 4 && m(l, 1))
						: ((l = nr(a)), l.c(), m(l, 1), l.m(e, null))
					: l &&
						(Ee(),
						g(l, 1, 1, () => {
							l = null;
						}),
						Se()),
				ie(e, (o = ge(r, [i & 64 && a[6], a[5]])));
		},
		i(a) {
			t || (m(l), (t = !0));
		},
		o(a) {
			g(l), (t = !1);
		},
		d(a) {
			a && _(e), l && l.d(), s[9](null);
		}
	};
}
function Zf(s) {
	let e;
	const n = s[8].default,
		t = ae(n, s, s[7], tr);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 132) && ue(t, n, l, l[7], e ? ce(n, l[7], r, Xf) : fe(l[7]), tr);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function nr(s) {
	let e;
	const n = s[8].default,
		t = ae(n, s, s[7], er);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 132) && ue(t, n, l, l[7], e ? ce(n, l[7], r, Jf) : fe(l[7]), er);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function xf(s) {
	let e, n, t, l;
	const r = [Zf, Yf],
		o = [];
	function a(i, u) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = o[e] = r[e](s)),
		{
			c() {
				n.c(), (t = le());
			},
			l(i) {
				n.l(i), (t = le());
			},
			m(i, u) {
				o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, [u]) {
				let f = e;
				(e = a(i)),
					e === f
						? o[e].p(i, u)
						: (Ee(),
							g(o[f], 1, 1, () => {
								o[f] = null;
							}),
							Se(),
							(n = o[e]),
							n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
							m(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function ec(s, e, n) {
	const t = ['asChild', 'el'];
	let l = ne(e, t),
		r,
		{ $$slots: o = {}, $$scope: a } = e,
		{ asChild: i = !1 } = e,
		{ el: u = void 0 } = e;
	const { isSelected: f, value: c, getAttrs: h } = vf();
	Ae(s, f, (p) => n(2, (r = p)));
	const d = h('indicator');
	function $(p) {
		Pe[p ? 'unshift' : 'push'](() => {
			(u = p), n(0, u);
		});
	}
	return (
		(s.$$set = (p) => {
			(e = D(D({}, e), Ce(p))),
				n(6, (l = ne(e, t))),
				'asChild' in p && n(1, (i = p.asChild)),
				'el' in p && n(0, (u = p.el)),
				'$$scope' in p && n(7, (a = p.$$scope));
		}),
		[u, i, r, f, c, d, l, a, o, $]
	);
}
class tc extends pe {
	constructor(e) {
		super(), $e(this, e, ec, xf, me, { asChild: 1, el: 0 });
	}
}
function nc() {
	return { NAME: 'separator', PARTS: ['root'] };
}
function lc(s) {
	const { NAME: e, PARTS: n } = nc(),
		t = ml(e, n),
		l = { ...Aa(fl(s)), getAttrs: t };
	return { ...l, updateOption: cl(l.options) };
}
const sc = (s) => ({ builder: s & 4 }),
	lr = (s) => ({ builder: s[2] });
function rc(s) {
	let e,
		n,
		t,
		l = [s[2], s[4]],
		r = {};
	for (let o = 0; o < l.length; o += 1) r = D(r, l[o]);
	return {
		c() {
			(e = R('div')), this.h();
		},
		l(o) {
			(e = M(o, 'DIV', {})), K(e).forEach(_), this.h();
		},
		h() {
			ie(e, r);
		},
		m(o, a) {
			v(o, e, a), s[10](e), n || ((t = Ke(s[2].action(e))), (n = !0));
		},
		p(o, a) {
			ie(e, (r = ge(l, [a & 4 && o[2], a & 16 && o[4]])));
		},
		i: we,
		o: we,
		d(o) {
			o && _(e), s[10](null), (n = !1), t();
		}
	};
}
function oc(s) {
	let e;
	const n = s[9].default,
		t = ae(n, s, s[8], lr);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 260) && ue(t, n, l, l[8], e ? ce(n, l[8], r, sc) : fe(l[8]), lr);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function ic(s) {
	let e, n, t, l;
	const r = [oc, rc],
		o = [];
	function a(i, u) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = o[e] = r[e](s)),
		{
			c() {
				n.c(), (t = le());
			},
			l(i) {
				n.l(i), (t = le());
			},
			m(i, u) {
				o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, [u]) {
				let f = e;
				(e = a(i)),
					e === f
						? o[e].p(i, u)
						: (Ee(),
							g(o[f], 1, 1, () => {
								o[f] = null;
							}),
							Se(),
							(n = o[e]),
							n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
							m(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function ac(s, e, n) {
	let t;
	const l = ['orientation', 'decorative', 'asChild', 'el'];
	let r = ne(e, l),
		o,
		{ $$slots: a = {}, $$scope: i } = e,
		{ orientation: u = 'horizontal' } = e,
		{ decorative: f = !0 } = e,
		{ asChild: c = !1 } = e,
		{ el: h = void 0 } = e;
	const {
		elements: { root: d },
		updateOption: $,
		getAttrs: p
	} = lc({ orientation: u, decorative: f });
	Ae(s, d, (y) => n(7, (o = y)));
	const b = p('root');
	function w(y) {
		Pe[y ? 'unshift' : 'push'](() => {
			(h = y), n(0, h);
		});
	}
	return (
		(s.$$set = (y) => {
			(e = D(D({}, e), Ce(y))),
				n(4, (r = ne(e, l))),
				'orientation' in y && n(5, (u = y.orientation)),
				'decorative' in y && n(6, (f = y.decorative)),
				'asChild' in y && n(1, (c = y.asChild)),
				'el' in y && n(0, (h = y.el)),
				'$$scope' in y && n(8, (i = y.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 32 && $('orientation', u),
				s.$$.dirty & 64 && $('decorative', f),
				s.$$.dirty & 128 && n(2, (t = o)),
				s.$$.dirty & 4 && Object.assign(t, b);
		}),
		[h, c, t, d, r, u, f, o, i, a, w]
	);
}
let uc = class extends pe {
	constructor(e) {
		super(), $e(this, e, ac, ic, me, { orientation: 5, decorative: 6, asChild: 1, el: 0 });
	}
};
const fc = (s) => ({ builder: s & 4 }),
	sr = (s) => ({ builder: s[2] }),
	cc = (s) => ({ builder: s & 4 }),
	rr = (s) => ({ builder: s[2] });
function dc(s) {
	let e, n, t, l;
	const r = s[9].default,
		o = ae(r, s, s[8], sr);
	let a = [s[2], { type: 'button' }, s[5]],
		i = {};
	for (let u = 0; u < a.length; u += 1) i = D(i, a[u]);
	return {
		c() {
			(e = R('button')), o && o.c(), this.h();
		},
		l(u) {
			e = M(u, 'BUTTON', { type: !0 });
			var f = K(e);
			o && o.l(f), f.forEach(_), this.h();
		},
		h() {
			ie(e, i);
		},
		m(u, f) {
			v(u, e, f),
				o && o.m(e, null),
				e.autofocus && e.focus(),
				s[10](e),
				(n = !0),
				t ||
					((l = [Ke(s[2].action(e)), _e(e, 'm-click', s[4]), _e(e, 'm-keydown', s[4])]), (t = !0));
		},
		p(u, f) {
			o && o.p && (!n || f & 260) && ue(o, r, u, u[8], n ? ce(r, u[8], f, fc) : fe(u[8]), sr),
				ie(e, (i = ge(a, [f & 4 && u[2], { type: 'button' }, f & 32 && u[5]])));
		},
		i(u) {
			n || (m(o, u), (n = !0));
		},
		o(u) {
			g(o, u), (n = !1);
		},
		d(u) {
			u && _(e), o && o.d(u), s[10](null), (t = !1), lt(l);
		}
	};
}
function mc(s) {
	let e;
	const n = s[9].default,
		t = ae(n, s, s[8], rr);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 260) && ue(t, n, l, l[8], e ? ce(n, l[8], r, cc) : fe(l[8]), rr);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function _c(s) {
	let e, n, t, l;
	const r = [mc, dc],
		o = [];
	function a(i, u) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = o[e] = r[e](s)),
		{
			c() {
				n.c(), (t = le());
			},
			l(i) {
				n.l(i), (t = le());
			},
			m(i, u) {
				o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, [u]) {
				let f = e;
				(e = a(i)),
					e === f
						? o[e].p(i, u)
						: (Ee(),
							g(o[f], 1, 1, () => {
								o[f] = null;
							}),
							Se(),
							(n = o[e]),
							n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
							m(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function hc(s, e, n) {
	let t;
	const l = ['asChild', 'id', 'el'];
	let r = ne(e, l),
		o,
		{ $$slots: a = {}, $$scope: i } = e,
		{ asChild: u = !1 } = e,
		{ id: f = void 0 } = e,
		{ el: c = void 0 } = e;
	const {
		elements: { trigger: h },
		ids: d,
		getAttrs: $
	} = Zn();
	Ae(s, h, (y) => n(7, (o = y)));
	const p = yn(),
		b = $('trigger');
	function w(y) {
		Pe[y ? 'unshift' : 'push'](() => {
			(c = y), n(0, c);
		});
	}
	return (
		(s.$$set = (y) => {
			(e = D(D({}, e), Ce(y))),
				n(5, (r = ne(e, l))),
				'asChild' in y && n(1, (u = y.asChild)),
				'id' in y && n(6, (f = y.id)),
				'el' in y && n(0, (c = y.el)),
				'$$scope' in y && n(8, (i = y.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 64 && f && d.trigger.set(f),
				s.$$.dirty & 128 && n(2, (t = o)),
				s.$$.dirty & 4 && Object.assign(t, b);
		}),
		[c, u, t, h, p, r, f, o, i, a, w]
	);
}
let gc = class extends pe {
	constructor(e) {
		super(), $e(this, e, hc, _c, me, { asChild: 1, id: 6, el: 0 });
	}
};
const pc = (s) => ({ label: s & 8 }),
	or = (s) => ({ label: s[3], attrs: s[5] });
function $c(s) {
	let e,
		n = (s[3] ? s[3] : s[1]) + '',
		t,
		l,
		r = [s[6], s[5], { 'data-placeholder': (l = s[3] ? void 0 : '') }],
		o = {};
	for (let a = 0; a < r.length; a += 1) o = D(o, r[a]);
	return {
		c() {
			(e = R('span')), (t = X(n)), this.h();
		},
		l(a) {
			e = M(a, 'SPAN', { 'data-placeholder': !0 });
			var i = K(e);
			(t = J(i, n)), i.forEach(_), this.h();
		},
		h() {
			ie(e, o);
		},
		m(a, i) {
			v(a, e, i), O(e, t), s[10](e);
		},
		p(a, i) {
			i & 10 && n !== (n = (a[3] ? a[3] : a[1]) + '') && Yl(t, n, o.contenteditable),
				ie(
					e,
					(o = ge(r, [
						i & 64 && a[6],
						a[5],
						i & 8 && l !== (l = a[3] ? void 0 : '') && { 'data-placeholder': l }
					]))
				);
		},
		i: we,
		o: we,
		d(a) {
			a && _(e), s[10](null);
		}
	};
}
function bc(s) {
	let e;
	const n = s[9].default,
		t = ae(n, s, s[8], or);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 264) && ue(t, n, l, l[8], e ? ce(n, l[8], r, pc) : fe(l[8]), or);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function vc(s) {
	let e, n, t, l;
	const r = [bc, $c],
		o = [];
	function a(i, u) {
		return i[2] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = o[e] = r[e](s)),
		{
			c() {
				n.c(), (t = le());
			},
			l(i) {
				n.l(i), (t = le());
			},
			m(i, u) {
				o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, [u]) {
				let f = e;
				(e = a(i)),
					e === f
						? o[e].p(i, u)
						: (Ee(),
							g(o[f], 1, 1, () => {
								o[f] = null;
							}),
							Se(),
							(n = o[e]),
							n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
							m(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function kc(s, e, n) {
	let t;
	const l = ['placeholder', 'asChild', 'el'];
	let r = ne(e, l),
		o,
		{ $$slots: a = {}, $$scope: i } = e,
		{ placeholder: u = '' } = e,
		{ asChild: f = !1 } = e,
		{ el: c = void 0 } = e;
	const {
		states: { selectedLabel: h },
		getAttrs: d
	} = Zn();
	Ae(s, h, (b) => n(7, (o = b)));
	const $ = d('value');
	function p(b) {
		Pe[b ? 'unshift' : 'push'](() => {
			(c = b), n(0, c);
		});
	}
	return (
		(s.$$set = (b) => {
			(e = D(D({}, e), Ce(b))),
				n(6, (r = ne(e, l))),
				'placeholder' in b && n(1, (u = b.placeholder)),
				'asChild' in b && n(2, (f = b.asChild)),
				'el' in b && n(0, (c = b.el)),
				'$$scope' in b && n(8, (i = b.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 128 && n(3, (t = o));
		}),
		[c, u, f, t, h, $, r, o, i, a, p]
	);
}
class Cc extends pe {
	constructor(e) {
		super(), $e(this, e, kc, vc, me, { placeholder: 1, asChild: 2, el: 0 });
	}
}
function ei() {
	return { NAME: 'switch', PARTS: ['root', 'input', 'thumb'] };
}
function Ec(s) {
	const { NAME: e, PARTS: n } = ei(),
		t = ml(e, n),
		l = { ...au(fl(s)), getAttrs: t };
	return Dt(e, l), { ...l, updateOption: cl(l.options) };
}
function ti() {
	const { NAME: s } = ei();
	return _n(s);
}
function Sc(s) {
	let e,
		n,
		t,
		l = [s[2], { name: s[3] }, { disabled: s[4] }, { required: s[5] }, { value: s[1] }, s[11]],
		r = {};
	for (let o = 0; o < l.length; o += 1) r = D(r, l[o]);
	return {
		c() {
			(e = R('input')), this.h();
		},
		l(o) {
			(e = M(o, 'INPUT', { name: !0 })), this.h();
		},
		h() {
			ie(e, r);
		},
		m(o, a) {
			v(o, e, a),
				'value' in r && (e.value = r.value),
				e.autofocus && e.focus(),
				s[13](e),
				n || ((t = Ke(s[2].action(e))), (n = !0));
		},
		p(o, [a]) {
			ie(
				e,
				(r = ge(l, [
					a & 4 && o[2],
					a & 8 && { name: o[3] },
					a & 16 && { disabled: o[4] },
					a & 32 && { required: o[5] },
					a & 2 && e.value !== o[1] && { value: o[1] },
					a & 2048 && o[11]
				]))
			),
				'value' in r && (e.value = r.value);
		},
		i: we,
		o: we,
		d(o) {
			o && _(e), s[13](null), (n = !1), t();
		}
	};
}
function wc(s, e, n) {
	let t;
	const l = ['el'];
	let r = ne(e, l),
		o,
		a,
		i,
		u,
		f,
		{ el: c = void 0 } = e;
	const {
		elements: { input: h },
		options: { value: d, name: $, disabled: p, required: b }
	} = ti();
	Ae(s, h, (y) => n(2, (a = y))),
		Ae(s, d, (y) => n(12, (o = y))),
		Ae(s, $, (y) => n(3, (i = y))),
		Ae(s, p, (y) => n(4, (u = y))),
		Ae(s, b, (y) => n(5, (f = y)));
	function w(y) {
		Pe[y ? 'unshift' : 'push'](() => {
			(c = y), n(0, c);
		});
	}
	return (
		(s.$$set = (y) => {
			(e = D(D({}, e), Ce(y))), n(11, (r = ne(e, l))), 'el' in y && n(0, (c = y.el));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 4096 && n(1, (t = o === void 0 || o === '' ? 'on' : o));
		}),
		[c, t, a, i, u, f, h, d, $, p, b, r, o, w]
	);
}
class yc extends pe {
	constructor(e) {
		super(), $e(this, e, wc, Sc, me, { el: 0 });
	}
}
const Tc = (s) => ({ builder: s & 16 }),
	ir = (s) => ({ builder: s[4] }),
	Ac = (s) => ({ builder: s & 16 }),
	ar = (s) => ({ builder: s[4] });
function Oc(s) {
	let e, n, t, l;
	const r = s[17].default,
		o = ae(r, s, s[16], ir);
	let a = [s[4], { type: 'button' }, s[7]],
		i = {};
	for (let u = 0; u < a.length; u += 1) i = D(i, a[u]);
	return {
		c() {
			(e = R('button')), o && o.c(), this.h();
		},
		l(u) {
			e = M(u, 'BUTTON', { type: !0 });
			var f = K(e);
			o && o.l(f), f.forEach(_), this.h();
		},
		h() {
			ie(e, i);
		},
		m(u, f) {
			v(u, e, f),
				o && o.m(e, null),
				e.autofocus && e.focus(),
				s[18](e),
				(n = !0),
				t ||
					((l = [Ke(s[4].action(e)), _e(e, 'm-click', s[6]), _e(e, 'm-keydown', s[6])]), (t = !0));
		},
		p(u, f) {
			o && o.p && (!n || f & 65552) && ue(o, r, u, u[16], n ? ce(r, u[16], f, Tc) : fe(u[16]), ir),
				ie(e, (i = ge(a, [f & 16 && u[4], { type: 'button' }, f & 128 && u[7]])));
		},
		i(u) {
			n || (m(o, u), (n = !0));
		},
		o(u) {
			g(o, u), (n = !1);
		},
		d(u) {
			u && _(e), o && o.d(u), s[18](null), (t = !1), lt(l);
		}
	};
}
function Pc(s) {
	let e;
	const n = s[17].default,
		t = ae(n, s, s[16], ar);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 65552) && ue(t, n, l, l[16], e ? ce(n, l[16], r, Ac) : fe(l[16]), ar);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function ur(s) {
	let e, n;
	const t = [s[3]];
	let l = {};
	for (let r = 0; r < t.length; r += 1) l = D(l, t[r]);
	return (
		(e = new yc({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), (n = !0);
			},
			p(r, o) {
				const a = o & 8 ? ge(t, [Xe(r[3])]) : {};
				e.$set(a);
			},
			i(r) {
				n || (m(e.$$.fragment, r), (n = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (n = !1);
			},
			d(r) {
				k(e, r);
			}
		}
	);
}
function Nc(s) {
	let e, n, t, l, r;
	const o = [Pc, Oc],
		a = [];
	function i(f, c) {
		return f[2] ? 0 : 1;
	}
	(e = i(s)), (n = a[e] = o[e](s));
	let u = s[1] && ur(s);
	return {
		c() {
			n.c(), (t = q()), u && u.c(), (l = le());
		},
		l(f) {
			n.l(f), (t = L(f)), u && u.l(f), (l = le());
		},
		m(f, c) {
			a[e].m(f, c), v(f, t, c), u && u.m(f, c), v(f, l, c), (r = !0);
		},
		p(f, [c]) {
			let h = e;
			(e = i(f)),
				e === h
					? a[e].p(f, c)
					: (Ee(),
						g(a[h], 1, 1, () => {
							a[h] = null;
						}),
						Se(),
						(n = a[e]),
						n ? n.p(f, c) : ((n = a[e] = o[e](f)), n.c()),
						m(n, 1),
						n.m(t.parentNode, t)),
				f[1]
					? u
						? (u.p(f, c), c & 2 && m(u, 1))
						: ((u = ur(f)), u.c(), m(u, 1), u.m(l.parentNode, l))
					: u &&
						(Ee(),
						g(u, 1, 1, () => {
							u = null;
						}),
						Se());
		},
		i(f) {
			r || (m(n), m(u), (r = !0));
		},
		o(f) {
			g(n), g(u), (r = !1);
		},
		d(f) {
			f && (_(t), _(l)), a[e].d(f), u && u.d(f);
		}
	};
}
function Dc(s, e, n) {
	let t, l;
	const r = [
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
	let o = ne(e, r),
		a,
		{ $$slots: i = {}, $$scope: u } = e,
		{ checked: f = void 0 } = e,
		{ onCheckedChange: c = void 0 } = e,
		{ disabled: h = void 0 } = e,
		{ name: d = void 0 } = e,
		{ value: $ = void 0 } = e,
		{ includeInput: p = !0 } = e,
		{ required: b = void 0 } = e,
		{ asChild: w = !1 } = e,
		{ inputAttrs: y = void 0 } = e,
		{ el: I = void 0 } = e;
	const {
		elements: { root: Q },
		states: { checked: P },
		updateOption: V,
		getAttrs: z
	} = Ec({
		disabled: h,
		name: d,
		value: $,
		required: b,
		defaultChecked: f,
		onCheckedChange: ({ next: T }) => (f !== T && (c == null || c(T), n(8, (f = T))), T)
	});
	Ae(s, Q, (T) => n(15, (a = T)));
	const ee = yn();
	function se(T) {
		Pe[T ? 'unshift' : 'push'](() => {
			(I = T), n(0, I);
		});
	}
	return (
		(s.$$set = (T) => {
			(e = D(D({}, e), Ce(T))),
				n(7, (o = ne(e, r))),
				'checked' in T && n(8, (f = T.checked)),
				'onCheckedChange' in T && n(9, (c = T.onCheckedChange)),
				'disabled' in T && n(10, (h = T.disabled)),
				'name' in T && n(11, (d = T.name)),
				'value' in T && n(12, ($ = T.value)),
				'includeInput' in T && n(1, (p = T.includeInput)),
				'required' in T && n(13, (b = T.required)),
				'asChild' in T && n(2, (w = T.asChild)),
				'inputAttrs' in T && n(3, (y = T.inputAttrs)),
				'el' in T && n(0, (I = T.el)),
				'$$scope' in T && n(16, (u = T.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 256 && f !== void 0 && P.set(f),
				s.$$.dirty & 1024 && V('disabled', h),
				s.$$.dirty & 2048 && V('name', d),
				s.$$.dirty & 4096 && V('value', $),
				s.$$.dirty & 8192 && V('required', b),
				s.$$.dirty & 32768 && n(4, (t = a)),
				s.$$.dirty & 256 && n(14, (l = { ...z('root'), 'data-checked': f ? '' : void 0 })),
				s.$$.dirty & 16400 && Object.assign(t, l);
		}),
		[I, p, w, y, t, Q, ee, o, f, c, h, d, $, b, l, a, u, i, se]
	);
}
let Ic = class extends pe {
	constructor(e) {
		super(),
			$e(this, e, Dc, Nc, me, {
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
const Mc = (s) => ({ attrs: s & 8, checked: s & 4 }),
	fr = (s) => ({ attrs: s[3], checked: s[2] });
function Rc(s) {
	let e,
		n = [s[5], s[3]],
		t = {};
	for (let l = 0; l < n.length; l += 1) t = D(t, n[l]);
	return {
		c() {
			(e = R('span')), this.h();
		},
		l(l) {
			(e = M(l, 'SPAN', {})), K(e).forEach(_), this.h();
		},
		h() {
			ie(e, t);
		},
		m(l, r) {
			v(l, e, r), s[8](e);
		},
		p(l, r) {
			ie(e, (t = ge(n, [r & 32 && l[5], r & 8 && l[3]])));
		},
		i: we,
		o: we,
		d(l) {
			l && _(e), s[8](null);
		}
	};
}
function Fc(s) {
	let e;
	const n = s[7].default,
		t = ae(n, s, s[6], fr);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 76) && ue(t, n, l, l[6], e ? ce(n, l[6], r, Mc) : fe(l[6]), fr);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Vc(s) {
	let e, n, t, l;
	const r = [Fc, Rc],
		o = [];
	function a(i, u) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = o[e] = r[e](s)),
		{
			c() {
				n.c(), (t = le());
			},
			l(i) {
				n.l(i), (t = le());
			},
			m(i, u) {
				o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, [u]) {
				let f = e;
				(e = a(i)),
					e === f
						? o[e].p(i, u)
						: (Ee(),
							g(o[f], 1, 1, () => {
								o[f] = null;
							}),
							Se(),
							(n = o[e]),
							n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
							m(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function Lc(s, e, n) {
	let t;
	const l = ['asChild', 'el'];
	let r = ne(e, l),
		o,
		{ $$slots: a = {}, $$scope: i } = e,
		{ asChild: u = !1 } = e,
		{ el: f = void 0 } = e;
	const {
		states: { checked: c },
		getAttrs: h
	} = ti();
	Ae(s, c, ($) => n(2, (o = $)));
	function d($) {
		Pe[$ ? 'unshift' : 'push'](() => {
			(f = $), n(0, f);
		});
	}
	return (
		(s.$$set = ($) => {
			(e = D(D({}, e), Ce($))),
				n(5, (r = ne(e, l))),
				'asChild' in $ && n(1, (u = $.asChild)),
				'el' in $ && n(0, (f = $.el)),
				'$$scope' in $ && n(6, (i = $.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 4 &&
				n(
					3,
					(t = {
						...h('thumb'),
						'data-state': o ? 'checked' : 'unchecked',
						'data-checked': o ? '' : void 0
					})
				);
		}),
		[f, u, o, t, c, r, i, a, d]
	);
}
class qc extends pe {
	constructor(e) {
		super(), $e(this, e, Lc, Vc, me, { asChild: 1, el: 0 });
	}
}
function ni() {
	return { NAME: 'tabs', PARTS: ['root', 'content', 'list', 'trigger'] };
}
function jc(s) {
	const { NAME: e, PARTS: n } = ni(),
		t = ml(e, n),
		l = { ...cu(fl(s)), getAttrs: t };
	return Dt(e, l), { ...l, updateOption: cl(l.options) };
}
function ts() {
	const { NAME: s } = ni();
	return _n(s);
}
const Kc = (s) => ({ builder: s & 4, value: s & 8 }),
	cr = (s) => ({ builder: s[2], value: s[3] }),
	Bc = (s) => ({ builder: s & 4, value: s & 8 }),
	dr = (s) => ({ builder: s[2], value: s[3] });
function Uc(s) {
	let e, n, t, l;
	const r = s[15].default,
		o = ae(r, s, s[14], cr);
	let a = [s[2], s[6]],
		i = {};
	for (let u = 0; u < a.length; u += 1) i = D(i, a[u]);
	return {
		c() {
			(e = R('div')), o && o.c(), this.h();
		},
		l(u) {
			e = M(u, 'DIV', {});
			var f = K(e);
			o && o.l(f), f.forEach(_), this.h();
		},
		h() {
			ie(e, i);
		},
		m(u, f) {
			v(u, e, f), o && o.m(e, null), s[16](e), (n = !0), t || ((l = Ke(s[2].action(e))), (t = !0));
		},
		p(u, f) {
			o && o.p && (!n || f & 16396) && ue(o, r, u, u[14], n ? ce(r, u[14], f, Kc) : fe(u[14]), cr),
				ie(e, (i = ge(a, [f & 4 && u[2], f & 64 && u[6]])));
		},
		i(u) {
			n || (m(o, u), (n = !0));
		},
		o(u) {
			g(o, u), (n = !1);
		},
		d(u) {
			u && _(e), o && o.d(u), s[16](null), (t = !1), l();
		}
	};
}
function zc(s) {
	let e;
	const n = s[15].default,
		t = ae(n, s, s[14], dr);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 16396) && ue(t, n, l, l[14], e ? ce(n, l[14], r, Bc) : fe(l[14]), dr);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Hc(s) {
	let e, n, t, l;
	const r = [zc, Uc],
		o = [];
	function a(i, u) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = o[e] = r[e](s)),
		{
			c() {
				n.c(), (t = le());
			},
			l(i) {
				n.l(i), (t = le());
			},
			m(i, u) {
				o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, [u]) {
				let f = e;
				(e = a(i)),
					e === f
						? o[e].p(i, u)
						: (Ee(),
							g(o[f], 1, 1, () => {
								o[f] = null;
							}),
							Se(),
							(n = o[e]),
							n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
							m(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function Qc(s, e, n) {
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
	let r = ne(e, l),
		o,
		a,
		{ $$slots: i = {}, $$scope: u } = e,
		{ orientation: f = void 0 } = e,
		{ activateOnFocus: c = void 0 } = e,
		{ loop: h = void 0 } = e,
		{ autoSet: d = void 0 } = e,
		{ value: $ = void 0 } = e,
		{ onValueChange: p = void 0 } = e,
		{ asChild: b = !1 } = e,
		{ el: w = void 0 } = e;
	const {
		elements: { root: y },
		states: { value: I },
		updateOption: Q,
		getAttrs: P
	} = jc({
		orientation: f,
		activateOnFocus: c,
		loop: h,
		autoSet: d,
		defaultValue: $,
		onValueChange: ({ next: ee }) => ($ !== ee && (p == null || p(ee), n(7, ($ = ee))), ee)
	});
	Ae(s, y, (ee) => n(13, (o = ee))), Ae(s, I, (ee) => n(3, (a = ee)));
	const V = P('root');
	function z(ee) {
		Pe[ee ? 'unshift' : 'push'](() => {
			(w = ee), n(0, w);
		});
	}
	return (
		(s.$$set = (ee) => {
			(e = D(D({}, e), Ce(ee))),
				n(6, (r = ne(e, l))),
				'orientation' in ee && n(8, (f = ee.orientation)),
				'activateOnFocus' in ee && n(9, (c = ee.activateOnFocus)),
				'loop' in ee && n(10, (h = ee.loop)),
				'autoSet' in ee && n(11, (d = ee.autoSet)),
				'value' in ee && n(7, ($ = ee.value)),
				'onValueChange' in ee && n(12, (p = ee.onValueChange)),
				'asChild' in ee && n(1, (b = ee.asChild)),
				'el' in ee && n(0, (w = ee.el)),
				'$$scope' in ee && n(14, (u = ee.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 128 && $ !== void 0 && I.set($),
				s.$$.dirty & 256 && Q('orientation', f),
				s.$$.dirty & 512 && Q('activateOnFocus', c),
				s.$$.dirty & 1024 && Q('loop', h),
				s.$$.dirty & 2048 && Q('autoSet', d),
				s.$$.dirty & 8192 && n(2, (t = o)),
				s.$$.dirty & 4 && Object.assign(t, V);
		}),
		[w, b, t, a, y, I, r, $, f, c, h, d, p, o, u, i, z]
	);
}
class Gc extends pe {
	constructor(e) {
		super(),
			$e(this, e, Qc, Hc, me, {
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
const Wc = (s) => ({ builder: s & 4 }),
	mr = (s) => ({ builder: s[2] }),
	Jc = (s) => ({ builder: s & 4 }),
	_r = (s) => ({ builder: s[2] });
function Xc(s) {
	let e, n, t, l;
	const r = s[8].default,
		o = ae(r, s, s[7], mr);
	let a = [s[2], s[4]],
		i = {};
	for (let u = 0; u < a.length; u += 1) i = D(i, a[u]);
	return {
		c() {
			(e = R('div')), o && o.c(), this.h();
		},
		l(u) {
			e = M(u, 'DIV', {});
			var f = K(e);
			o && o.l(f), f.forEach(_), this.h();
		},
		h() {
			ie(e, i);
		},
		m(u, f) {
			v(u, e, f), o && o.m(e, null), s[9](e), (n = !0), t || ((l = Ke(s[2].action(e))), (t = !0));
		},
		p(u, f) {
			o && o.p && (!n || f & 132) && ue(o, r, u, u[7], n ? ce(r, u[7], f, Wc) : fe(u[7]), mr),
				ie(e, (i = ge(a, [f & 4 && u[2], f & 16 && u[4]])));
		},
		i(u) {
			n || (m(o, u), (n = !0));
		},
		o(u) {
			g(o, u), (n = !1);
		},
		d(u) {
			u && _(e), o && o.d(u), s[9](null), (t = !1), l();
		}
	};
}
function Yc(s) {
	let e;
	const n = s[8].default,
		t = ae(n, s, s[7], _r);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 132) && ue(t, n, l, l[7], e ? ce(n, l[7], r, Jc) : fe(l[7]), _r);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Zc(s) {
	let e, n, t, l;
	const r = [Yc, Xc],
		o = [];
	function a(i, u) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = o[e] = r[e](s)),
		{
			c() {
				n.c(), (t = le());
			},
			l(i) {
				n.l(i), (t = le());
			},
			m(i, u) {
				o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, [u]) {
				let f = e;
				(e = a(i)),
					e === f
						? o[e].p(i, u)
						: (Ee(),
							g(o[f], 1, 1, () => {
								o[f] = null;
							}),
							Se(),
							(n = o[e]),
							n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
							m(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function xc(s, e, n) {
	let t;
	const l = ['value', 'asChild', 'el'];
	let r = ne(e, l),
		o,
		{ $$slots: a = {}, $$scope: i } = e,
		{ value: u } = e,
		{ asChild: f = !1 } = e,
		{ el: c = void 0 } = e;
	const {
		elements: { content: h },
		getAttrs: d
	} = ts();
	Ae(s, h, (b) => n(6, (o = b)));
	const $ = d('content');
	function p(b) {
		Pe[b ? 'unshift' : 'push'](() => {
			(c = b), n(0, c);
		});
	}
	return (
		(s.$$set = (b) => {
			(e = D(D({}, e), Ce(b))),
				n(4, (r = ne(e, l))),
				'value' in b && n(5, (u = b.value)),
				'asChild' in b && n(1, (f = b.asChild)),
				'el' in b && n(0, (c = b.el)),
				'$$scope' in b && n(7, (i = b.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 96 && n(2, (t = o(u))), s.$$.dirty & 4 && Object.assign(t, $);
		}),
		[c, f, t, h, r, u, o, i, a, p]
	);
}
let ed = class extends pe {
	constructor(e) {
		super(), $e(this, e, xc, Zc, me, { value: 5, asChild: 1, el: 0 });
	}
};
const td = (s) => ({ builder: s & 4 }),
	hr = (s) => ({ builder: s[2] }),
	nd = (s) => ({ builder: s & 4 }),
	gr = (s) => ({ builder: s[2] });
function ld(s) {
	let e, n, t, l;
	const r = s[7].default,
		o = ae(r, s, s[6], hr);
	let a = [s[2], s[4]],
		i = {};
	for (let u = 0; u < a.length; u += 1) i = D(i, a[u]);
	return {
		c() {
			(e = R('div')), o && o.c(), this.h();
		},
		l(u) {
			e = M(u, 'DIV', {});
			var f = K(e);
			o && o.l(f), f.forEach(_), this.h();
		},
		h() {
			ie(e, i);
		},
		m(u, f) {
			v(u, e, f), o && o.m(e, null), s[8](e), (n = !0), t || ((l = Ke(s[2].action(e))), (t = !0));
		},
		p(u, f) {
			o && o.p && (!n || f & 68) && ue(o, r, u, u[6], n ? ce(r, u[6], f, td) : fe(u[6]), hr),
				ie(e, (i = ge(a, [f & 4 && u[2], f & 16 && u[4]])));
		},
		i(u) {
			n || (m(o, u), (n = !0));
		},
		o(u) {
			g(o, u), (n = !1);
		},
		d(u) {
			u && _(e), o && o.d(u), s[8](null), (t = !1), l();
		}
	};
}
function sd(s) {
	let e;
	const n = s[7].default,
		t = ae(n, s, s[6], gr);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 68) && ue(t, n, l, l[6], e ? ce(n, l[6], r, nd) : fe(l[6]), gr);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function rd(s) {
	let e, n, t, l;
	const r = [sd, ld],
		o = [];
	function a(i, u) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = o[e] = r[e](s)),
		{
			c() {
				n.c(), (t = le());
			},
			l(i) {
				n.l(i), (t = le());
			},
			m(i, u) {
				o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, [u]) {
				let f = e;
				(e = a(i)),
					e === f
						? o[e].p(i, u)
						: (Ee(),
							g(o[f], 1, 1, () => {
								o[f] = null;
							}),
							Se(),
							(n = o[e]),
							n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
							m(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function od(s, e, n) {
	let t;
	const l = ['asChild', 'el'];
	let r = ne(e, l),
		o,
		{ $$slots: a = {}, $$scope: i } = e,
		{ asChild: u = !1 } = e,
		{ el: f = void 0 } = e;
	const {
		elements: { list: c },
		getAttrs: h
	} = ts();
	Ae(s, c, (p) => n(5, (o = p)));
	const d = h('list');
	function $(p) {
		Pe[p ? 'unshift' : 'push'](() => {
			(f = p), n(0, f);
		});
	}
	return (
		(s.$$set = (p) => {
			(e = D(D({}, e), Ce(p))),
				n(4, (r = ne(e, l))),
				'asChild' in p && n(1, (u = p.asChild)),
				'el' in p && n(0, (f = p.el)),
				'$$scope' in p && n(6, (i = p.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 32 && n(2, (t = o)), s.$$.dirty & 4 && Object.assign(t, d);
		}),
		[f, u, t, c, r, o, i, a, $]
	);
}
let id = class extends pe {
	constructor(e) {
		super(), $e(this, e, od, rd, me, { asChild: 1, el: 0 });
	}
};
const ad = (s) => ({ builder: s & 4 }),
	pr = (s) => ({ builder: s[2] }),
	ud = (s) => ({ builder: s & 4 }),
	$r = (s) => ({ builder: s[2] });
function fd(s) {
	let e, n, t, l;
	const r = s[10].default,
		o = ae(r, s, s[9], pr);
	let a = [s[2], { type: 'button' }, s[5]],
		i = {};
	for (let u = 0; u < a.length; u += 1) i = D(i, a[u]);
	return {
		c() {
			(e = R('button')), o && o.c(), this.h();
		},
		l(u) {
			e = M(u, 'BUTTON', { type: !0 });
			var f = K(e);
			o && o.l(f), f.forEach(_), this.h();
		},
		h() {
			ie(e, i);
		},
		m(u, f) {
			v(u, e, f),
				o && o.m(e, null),
				e.autofocus && e.focus(),
				s[11](e),
				(n = !0),
				t ||
					((l = [
						Ke(s[2].action(e)),
						_e(e, 'm-click', s[4]),
						_e(e, 'm-focus', s[4]),
						_e(e, 'm-keydown', s[4])
					]),
					(t = !0));
		},
		p(u, f) {
			o && o.p && (!n || f & 516) && ue(o, r, u, u[9], n ? ce(r, u[9], f, ad) : fe(u[9]), pr),
				ie(e, (i = ge(a, [f & 4 && u[2], { type: 'button' }, f & 32 && u[5]])));
		},
		i(u) {
			n || (m(o, u), (n = !0));
		},
		o(u) {
			g(o, u), (n = !1);
		},
		d(u) {
			u && _(e), o && o.d(u), s[11](null), (t = !1), lt(l);
		}
	};
}
function cd(s) {
	let e;
	const n = s[10].default,
		t = ae(n, s, s[9], $r);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 516) && ue(t, n, l, l[9], e ? ce(n, l[9], r, ud) : fe(l[9]), $r);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function dd(s) {
	let e, n, t, l;
	const r = [cd, fd],
		o = [];
	function a(i, u) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = o[e] = r[e](s)),
		{
			c() {
				n.c(), (t = le());
			},
			l(i) {
				n.l(i), (t = le());
			},
			m(i, u) {
				o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, [u]) {
				let f = e;
				(e = a(i)),
					e === f
						? o[e].p(i, u)
						: (Ee(),
							g(o[f], 1, 1, () => {
								o[f] = null;
							}),
							Se(),
							(n = o[e]),
							n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
							m(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function md(s, e, n) {
	let t;
	const l = ['value', 'disabled', 'asChild', 'el'];
	let r = ne(e, l),
		o,
		{ $$slots: a = {}, $$scope: i } = e,
		{ value: u } = e,
		{ disabled: f = void 0 } = e,
		{ asChild: c = !1 } = e,
		{ el: h = void 0 } = e;
	const {
		elements: { trigger: d },
		getAttrs: $
	} = ts();
	Ae(s, d, (y) => n(8, (o = y)));
	const p = yn(),
		b = $('trigger');
	function w(y) {
		Pe[y ? 'unshift' : 'push'](() => {
			(h = y), n(0, h);
		});
	}
	return (
		(s.$$set = (y) => {
			(e = D(D({}, e), Ce(y))),
				n(5, (r = ne(e, l))),
				'value' in y && n(6, (u = y.value)),
				'disabled' in y && n(7, (f = y.disabled)),
				'asChild' in y && n(1, (c = y.asChild)),
				'el' in y && n(0, (h = y.el)),
				'$$scope' in y && n(9, (i = y.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 448 && n(2, (t = o({ value: u, disabled: f }))),
				s.$$.dirty & 4 && Object.assign(t, b);
		}),
		[h, c, t, d, p, r, u, f, o, i, a, w]
	);
}
let _d = class extends pe {
	constructor(e) {
		super(), $e(this, e, md, dd, me, { value: 6, disabled: 7, asChild: 1, el: 0 });
	}
};
function hd(s) {
	let e;
	const n = s[2].default,
		t = ae(n, s, s[3], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 8) && ue(t, n, l, l[3], e ? ce(n, l[3], r, null) : fe(l[3]), null);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function gd(s) {
	let e, n;
	const t = [{ class: ve(s[0]) }, s[1]];
	let l = { $$slots: { default: [hd] }, $$scope: { ctx: s } };
	for (let r = 0; r < t.length; r += 1) l = D(l, t[r]);
	return (
		(e = new Xo({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), (n = !0);
			},
			p(r, [o]) {
				const a = o & 3 ? ge(t, [o & 1 && { class: ve(r[0]) }, o & 2 && Xe(r[1])]) : {};
				o & 8 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
			},
			i(r) {
				n || (m(e.$$.fragment, r), (n = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (n = !1);
			},
			d(r) {
				k(e, r);
			}
		}
	);
}
function pd(s, e, n) {
	const t = ['class'];
	let l = ne(e, t),
		{ $$slots: r = {}, $$scope: o } = e,
		{ class: a = void 0 } = e;
	return (
		(s.$$set = (i) => {
			(e = D(D({}, e), Ce(i))),
				n(1, (l = ne(e, t))),
				'class' in i && n(0, (a = i.class)),
				'$$scope' in i && n(3, (o = i.$$scope));
		}),
		[a, l, r, o]
	);
}
class $d extends pe {
	constructor(e) {
		super(), $e(this, e, pd, gd, me, { class: 0 });
	}
}
function bd(s) {
	let e, n;
	const t = [
		{ transition: s[1] },
		{ transitionConfig: s[2] },
		{ class: ve('fixed inset-0 z-50 bg-background/80 backdrop-blur-sm ', s[0]) },
		s[3]
	];
	let l = {};
	for (let r = 0; r < t.length; r += 1) l = D(l, t[r]);
	return (
		(e = new Zo({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), (n = !0);
			},
			p(r, [o]) {
				const a =
					o & 15
						? ge(t, [
								o & 2 && { transition: r[1] },
								o & 4 && { transitionConfig: r[2] },
								o & 1 && {
									class: ve('fixed inset-0 z-50 bg-background/80 backdrop-blur-sm ', r[0])
								},
								o & 8 && Xe(r[3])
							])
						: {};
				e.$set(a);
			},
			i(r) {
				n || (m(e.$$.fragment, r), (n = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (n = !1);
			},
			d(r) {
				k(e, r);
			}
		}
	);
}
function vd(s, e, n) {
	const t = ['class', 'transition', 'transitionConfig'];
	let l = ne(e, t),
		{ class: r = void 0 } = e,
		{ transition: o = Ko } = e,
		{ transitionConfig: a = { duration: 150 } } = e;
	return (
		(s.$$set = (i) => {
			(e = D(D({}, e), Ce(i))),
				n(3, (l = ne(e, t))),
				'class' in i && n(0, (r = i.class)),
				'transition' in i && n(1, (o = i.transition)),
				'transitionConfig' in i && n(2, (a = i.transitionConfig));
		}),
		[r, o, a, l]
	);
}
class kd extends pe {
	constructor(e) {
		super(), $e(this, e, vd, bd, me, { class: 0, transition: 1, transitionConfig: 2 });
	}
}
function Cd(s) {
	let e;
	const n = s[2].default,
		t = ae(n, s, s[3], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 8) && ue(t, n, l, l[3], e ? ce(n, l[3], r, null) : fe(l[3]), null);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Ed(s) {
	let e, n;
	const t = [{ name: 'x' }, s[1], { iconNode: s[0] }];
	let l = { $$slots: { default: [Cd] }, $$scope: { ctx: s } };
	for (let r = 0; r < t.length; r += 1) l = D(l, t[r]);
	return (
		(e = new Ma({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), (n = !0);
			},
			p(r, [o]) {
				const a = o & 3 ? ge(t, [t[0], o & 2 && Xe(r[1]), o & 1 && { iconNode: r[0] }]) : {};
				o & 8 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
			},
			i(r) {
				n || (m(e.$$.fragment, r), (n = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (n = !1);
			},
			d(r) {
				k(e, r);
			}
		}
	);
}
function Sd(s, e, n) {
	let { $$slots: t = {}, $$scope: l } = e;
	const r = [
		['path', { d: 'M18 6 6 18' }],
		['path', { d: 'm6 6 12 12' }]
	];
	return (
		(s.$$set = (o) => {
			n(1, (e = D(D({}, e), Ce(o)))), '$$scope' in o && n(3, (l = o.$$scope));
		}),
		(e = Ce(e)),
		[r, e, t, l]
	);
}
class wd extends pe {
	constructor(e) {
		super(), $e(this, e, Sd, Ed, me, {});
	}
}
function yd(s) {
	let e,
		n,
		t,
		l = 'Close',
		r;
	return (
		(e = new wd({ props: { class: 'h-4 w-4' } })),
		{
			c() {
				E(e.$$.fragment), (n = q()), (t = R('span')), (t.textContent = l), this.h();
			},
			l(o) {
				S(e.$$.fragment, o),
					(n = L(o)),
					(t = M(o, 'SPAN', { class: !0, 'data-svelte-h': !0 })),
					it(t) !== 'svelte-1pewzs3' && (t.textContent = l),
					this.h();
			},
			h() {
				N(t, 'class', 'sr-only');
			},
			m(o, a) {
				C(e, o, a), v(o, n, a), v(o, t, a), (r = !0);
			},
			p: we,
			i(o) {
				r || (m(e.$$.fragment, o), (r = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (r = !1);
			},
			d(o) {
				o && (_(n), _(t)), k(e, o);
			}
		}
	);
}
function Td(s) {
	let e, n, t;
	const l = s[7].default,
		r = ae(l, s, s[8], null);
	return (
		(n = new Jo({
			props: {
				autofocus: !1,
				class:
					'absolute right-5 top-5 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary',
				$$slots: { default: [yd] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				r && r.c(), (e = q()), E(n.$$.fragment);
			},
			l(o) {
				r && r.l(o), (e = L(o)), S(n.$$.fragment, o);
			},
			m(o, a) {
				r && r.m(o, a), v(o, e, a), C(n, o, a), (t = !0);
			},
			p(o, a) {
				r && r.p && (!t || a & 256) && ue(r, l, o, o[8], t ? ce(l, o[8], a, null) : fe(o[8]), null);
				const i = {};
				a & 256 && (i.$$scope = { dirty: a, ctx: o }), n.$set(i);
			},
			i(o) {
				t || (m(r, o), m(n.$$.fragment, o), (t = !0));
			},
			o(o) {
				g(r, o), g(n.$$.fragment, o), (t = !1);
			},
			d(o) {
				o && _(e), r && r.d(o), k(n, o);
			}
		}
	);
}
function Ad(s) {
	let e, n, t, l;
	e = new kd({});
	const r = [
		{ inTransition: s[2] },
		{ inTransitionConfig: s[3] },
		{ outTransition: s[4] },
		{ outTransitionConfig: s[5] },
		{ class: ve(br({ side: s[1] }), s[0]) },
		s[6]
	];
	let o = { $$slots: { default: [Td] }, $$scope: { ctx: s } };
	for (let a = 0; a < r.length; a += 1) o = D(o, r[a]);
	return (
		(t = new Yo({ props: o })),
		{
			c() {
				E(e.$$.fragment), (n = q()), E(t.$$.fragment);
			},
			l(a) {
				S(e.$$.fragment, a), (n = L(a)), S(t.$$.fragment, a);
			},
			m(a, i) {
				C(e, a, i), v(a, n, i), C(t, a, i), (l = !0);
			},
			p(a, i) {
				const u =
					i & 127
						? ge(r, [
								i & 4 && { inTransition: a[2] },
								i & 8 && { inTransitionConfig: a[3] },
								i & 16 && { outTransition: a[4] },
								i & 32 && { outTransitionConfig: a[5] },
								i & 3 && { class: ve(br({ side: a[1] }), a[0]) },
								i & 64 && Xe(a[6])
							])
						: {};
				i & 256 && (u.$$scope = { dirty: i, ctx: a }), t.$set(u);
			},
			i(a) {
				l || (m(e.$$.fragment, a), m(t.$$.fragment, a), (l = !0));
			},
			o(a) {
				g(e.$$.fragment, a), g(t.$$.fragment, a), (l = !1);
			},
			d(a) {
				a && _(n), k(e, a), k(t, a);
			}
		}
	);
}
function Od(s) {
	let e, n;
	return (
		(e = new $d({ props: { $$slots: { default: [Ad] }, $$scope: { ctx: s } } })),
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
				const r = {};
				l & 383 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function Pd(s, e, n) {
	const t = [
		'class',
		'side',
		'inTransition',
		'inTransitionConfig',
		'outTransition',
		'outTransitionConfig'
	];
	let l = ne(e, t),
		{ $$slots: r = {}, $$scope: o } = e,
		{ class: a = void 0 } = e,
		{ side: i = 'right' } = e,
		{ inTransition: u = vs } = e,
		{ inTransitionConfig: f = vr[i ?? 'right'].in } = e,
		{ outTransition: c = vs } = e,
		{ outTransitionConfig: h = vr[i ?? 'right'].out } = e;
	return (
		(s.$$set = (d) => {
			(e = D(D({}, e), Ce(d))),
				n(6, (l = ne(e, t))),
				'class' in d && n(0, (a = d.class)),
				'side' in d && n(1, (i = d.side)),
				'inTransition' in d && n(2, (u = d.inTransition)),
				'inTransitionConfig' in d && n(3, (f = d.inTransitionConfig)),
				'outTransition' in d && n(4, (c = d.outTransition)),
				'outTransitionConfig' in d && n(5, (h = d.outTransitionConfig)),
				'$$scope' in d && n(8, (o = d.$$scope));
		}),
		[a, i, u, f, c, h, l, r, o]
	);
}
class Nd extends pe {
	constructor(e) {
		super(),
			$e(this, e, Pd, Od, me, {
				class: 0,
				side: 1,
				inTransition: 2,
				inTransitionConfig: 3,
				outTransition: 4,
				outTransitionConfig: 5
			});
	}
}
function Dd(s) {
	let e, n, t;
	const l = s[3].default,
		r = ae(l, s, s[2], null);
	let o = [{ class: (n = ve('flex flex-col space-y-2 text-center sm:text-left', s[0])) }, s[1]],
		a = {};
	for (let i = 0; i < o.length; i += 1) a = D(a, o[i]);
	return {
		c() {
			(e = R('div')), r && r.c(), this.h();
		},
		l(i) {
			e = M(i, 'DIV', { class: !0 });
			var u = K(e);
			r && r.l(u), u.forEach(_), this.h();
		},
		h() {
			ie(e, a);
		},
		m(i, u) {
			v(i, e, u), r && r.m(e, null), (t = !0);
		},
		p(i, [u]) {
			r && r.p && (!t || u & 4) && ue(r, l, i, i[2], t ? ce(l, i[2], u, null) : fe(i[2]), null),
				ie(
					e,
					(a = ge(o, [
						(!t ||
							(u & 1 &&
								n !== (n = ve('flex flex-col space-y-2 text-center sm:text-left', i[0])))) && {
							class: n
						},
						u & 2 && i[1]
					]))
				);
		},
		i(i) {
			t || (m(r, i), (t = !0));
		},
		o(i) {
			g(r, i), (t = !1);
		},
		d(i) {
			i && _(e), r && r.d(i);
		}
	};
}
function Id(s, e, n) {
	const t = ['class'];
	let l = ne(e, t),
		{ $$slots: r = {}, $$scope: o } = e,
		{ class: a = void 0 } = e;
	return (
		(s.$$set = (i) => {
			(e = D(D({}, e), Ce(i))),
				n(1, (l = ne(e, t))),
				'class' in i && n(0, (a = i.class)),
				'$$scope' in i && n(2, (o = i.$$scope));
		}),
		[a, l, o, r]
	);
}
class Md extends pe {
	constructor(e) {
		super(), $e(this, e, Id, Dd, me, { class: 0 });
	}
}
function Rd(s) {
	let e;
	const n = s[2].default,
		t = ae(n, s, s[3], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 8) && ue(t, n, l, l[3], e ? ce(n, l[3], r, null) : fe(l[3]), null);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Fd(s) {
	let e, n;
	const t = [{ class: ve('text-lg text-foreground', s[0]) }, s[1]];
	let l = { $$slots: { default: [Rd] }, $$scope: { ctx: s } };
	for (let r = 0; r < t.length; r += 1) l = D(l, t[r]);
	return (
		(e = new Cu({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), (n = !0);
			},
			p(r, [o]) {
				const a =
					o & 3
						? ge(t, [o & 1 && { class: ve('text-lg text-foreground', r[0]) }, o & 2 && Xe(r[1])])
						: {};
				o & 8 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
			},
			i(r) {
				n || (m(e.$$.fragment, r), (n = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (n = !1);
			},
			d(r) {
				k(e, r);
			}
		}
	);
}
function Vd(s, e, n) {
	const t = ['class'];
	let l = ne(e, t),
		{ $$slots: r = {}, $$scope: o } = e,
		{ class: a = void 0 } = e;
	return (
		(s.$$set = (i) => {
			(e = D(D({}, e), Ce(i))),
				n(1, (l = ne(e, t))),
				'class' in i && n(0, (a = i.class)),
				'$$scope' in i && n(3, (o = i.$$scope));
		}),
		[a, l, r, o]
	);
}
class Ld extends pe {
	constructor(e) {
		super(), $e(this, e, Vd, Fd, me, { class: 0 });
	}
}
function qd(s) {
	let e;
	const n = s[2].default,
		t = ae(n, s, s[3], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 8) && ue(t, n, l, l[3], e ? ce(n, l[3], r, null) : fe(l[3]), null);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function jd(s) {
	let e, n;
	const t = [{ class: ve('text-sm text-muted-foreground', s[0]) }, s[1]];
	let l = { $$slots: { default: [qd] }, $$scope: { ctx: s } };
	for (let r = 0; r < t.length; r += 1) l = D(l, t[r]);
	return (
		(e = new pf({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), (n = !0);
			},
			p(r, [o]) {
				const a =
					o & 3
						? ge(t, [
								o & 1 && { class: ve('text-sm text-muted-foreground', r[0]) },
								o & 2 && Xe(r[1])
							])
						: {};
				o & 8 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
			},
			i(r) {
				n || (m(e.$$.fragment, r), (n = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (n = !1);
			},
			d(r) {
				k(e, r);
			}
		}
	);
}
function Kd(s, e, n) {
	const t = ['class'];
	let l = ne(e, t),
		{ $$slots: r = {}, $$scope: o } = e,
		{ class: a = void 0 } = e;
	return (
		(s.$$set = (i) => {
			(e = D(D({}, e), Ce(i))),
				n(1, (l = ne(e, t))),
				'class' in i && n(0, (a = i.class)),
				'$$scope' in i && n(3, (o = i.$$scope));
		}),
		[a, l, r, o]
	);
}
class Bd extends pe {
	constructor(e) {
		super(), $e(this, e, Kd, jd, me, { class: 0 });
	}
}
const Ud = Wo,
	zd = xo,
	br = ca({
		base: 'fixed z-50 gap-4 bg-background px-5 py-4 shadow-lg m-2.5 border rounded-lg',
		variants: {
			side: {
				left: 'inset-y-0 left-0 h-[calc(100vh-20px)] w-[calc(100vw-20px)] sm:w-3/4 sm:max-w-sm',
				right: 'inset-y-0 right-0 h-[calc(100vh-20px)] w-[calc(100vw-20px)] sm:w-3/4 sm:max-w-sm'
			}
		},
		defaultVariants: { side: 'right' }
	}),
	vr = {
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
function Hd(s) {
	let e;
	const n = s[2].default,
		t = ae(n, s, s[3], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 8) && ue(t, n, l, l[3], e ? ce(n, l[3], r, null) : fe(l[3]), null);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Qd(s) {
	let e, n;
	const t = [{ name: 'twitter' }, s[1], { iconNode: s[0] }];
	let l = { $$slots: { default: [Hd] }, $$scope: { ctx: s } };
	for (let r = 0; r < t.length; r += 1) l = D(l, t[r]);
	return (
		(e = new da({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), (n = !0);
			},
			p(r, [o]) {
				const a = o & 3 ? ge(t, [t[0], o & 2 && Xe(r[1]), o & 1 && { iconNode: r[0] }]) : {};
				o & 8 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
			},
			i(r) {
				n || (m(e.$$.fragment, r), (n = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (n = !1);
			},
			d(r) {
				k(e, r);
			}
		}
	);
}
function Gd(s, e, n) {
	let { $$slots: t = {}, $$scope: l } = e;
	const r = [
		[
			'path',
			{
				d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'
			}
		]
	];
	return (
		(s.$$set = (o) => {
			n(1, (e = D(D({}, e), Ce(o)))), '$$scope' in o && n(3, (l = o.$$scope));
		}),
		(e = Ce(e)),
		[r, e, t, l]
	);
}
class Wd extends pe {
	constructor(e) {
		super(), $e(this, e, Gd, Qd, me, {});
	}
}
const mn = [
		{
			name: 'Notes',
			commands: [
				{
					title: 'New note',
					icon: 'notePlus',
					shortcut: Qe['notes:create'],
					onSelect: () => {
						zi(de(Jt));
					}
				},
				{
					title: 'New folder',
					icon: 'folderPlus',
					shortcut: Qe['notes:create-folder'],
					onSelect: () => {
						Da(de(Jt));
					}
				},
				{
					title: 'Open note',
					icon: 'note',
					shortcut: Qe['command:open-note'],
					onSelect: () => 'open_note'
				},
				{
					title: 'Search collection',
					icon: 'searchDocument',
					shortcut: Qe['notes:search'],
					onSelect: () => {
						Hi.set(!0);
					}
				},
				{
					title: 'Toggle editor mode',
					icon: 'cursorI',
					shortcut: Qe['editor:toggle-mode'],
					onSelect: () => {
						de(Hl).setEditable(!de(Hl).isEditable),
							Qi.update((s) => (s === 'edit' ? 'view' : 'edit'));
					}
				},
				{
					title: 'Find in note',
					icon: 'searchDocument',
					shortcut: Qe['editor:search'],
					onSelect: () => {
						Gi.set(!0);
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
					shortcut: Qe['notes:history-back'],
					onSelect: () => {
						window.dispatchEvent(
							new KeyboardEvent('keydown', { key: 'ArrowLeft', altKey: !0, metaKey: !0 })
						);
					}
				},
				{
					title: 'Go to next note',
					icon: 'arrowRight',
					shortcut: Qe['notes:history-forward'],
					onSelect: () => {
						window.dispatchEvent(
							new KeyboardEvent('keydown', { key: 'ArrowRight', altKey: !0, metaKey: !0 })
						);
					}
				},
				{
					title: 'Open other collection',
					icon: 'folder',
					shortcut: Qe['app:open-collection'],
					onSelect: () => 'open_collection'
				},
				{
					title: 'Go to settings',
					icon: 'settings',
					shortcut: Qe['app:settings'],
					onSelect: () => {
						nl.update((s) => ({ ...s, isOpen: !0 }));
					}
				},
				{
					title: 'Go to help',
					icon: 'lifebouy',
					shortcut: Qe['app:help'],
					onSelect: () => 'help_and_feedback'
				},
				{ title: 'View shortcuts', icon: 'bolt', shortcut: Qe['app:shortcuts'] },
				{
					title: 'Send feedback',
					icon: 'lifebouy',
					shortcut: Qe['app:help'],
					onSelect: () => 'help_and_feedback'
				},
				{
					title: 'Share with friends',
					icon: 'share',
					shortcut: Qe['app:share'],
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
					shortcut: Qe['settings:toggle-theme'],
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
					shortcut: Qe['notes:toggle-sidebar'],
					onSelect: () => {
						Wi.update((s) => !s);
					}
				},
				{
					title: 'Toggle note details',
					icon: 'sidebarMenuRight',
					shortcut: Qe['notes:toggle-details'],
					onSelect: () => {
						Ji.update((s) => !s);
					}
				}
			]
		}
	],
	li = (s) => ({
		name: s.split('/').pop(),
		commands: [
			{
				title: 'Save note',
				icon: 'floppy',
				shortcut: Qe['note:save'],
				onSelect: () => {
					Xi(s);
				}
			},
			{
				title: 'Duplicate note',
				icon: 'copy',
				shortcut: Qe['note:duplicate'],
				onSelect() {
					Yi(s);
				}
			},
			{
				title: 'Rename note',
				icon: 'editPencil',
				shortcut: Qe['note:rename'],
				onSelect: () => {
					de(Hl).commands.blur();
					const e = document.getElementById('inline-title-input');
					window.setTimeout(() => {
						e == null || e.focus(), e == null || e.select();
					}, 50);
				}
			},
			{
				title: 'Delete note',
				icon: 'bin',
				shortcut: Qe['note:delete'],
				onSelect: () => {
					Zi(s);
				}
			},
			{
				title: 'Move note to...',
				icon: 'motionCirclesLines',
				shortcut: Qe['command:move-note'],
				onSelect: () => 'move_note'
			},
			{
				title: 'Copy note path',
				icon: 'copy',
				shortcut: Qe['note:copy-path'],
				onSelect: () => {
					navigator.clipboard.writeText(s);
				}
			}
		]
	});
function kr(s, e, n) {
	const t = s.slice();
	return (t[12] = e[n]), t;
}
function Cr(s, e, n) {
	const t = s.slice();
	return (t[15] = e[n]), t;
}
function Jd(s) {
	let e, n;
	return (
		(e = new He({ props: { name: 'monitor', class: 'w-4 h-4' } })),
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
				n || (m(e.$$.fragment, t), (n = !0));
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
function Xd(s) {
	let e, n;
	return (
		(e = new He({ props: { name: 'sun', class: 'w-4 h-4' } })),
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
				n || (m(e.$$.fragment, t), (n = !0));
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
function Yd(s) {
	let e, n;
	return (
		(e = new He({ props: { name: 'moon', class: 'w-4 h-4' } })),
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
				n || (m(e.$$.fragment, t), (n = !0));
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
function Zd(s) {
	let e, n, t, l;
	const r = [Yd, Xd, Jd],
		o = [];
	function a(i, u) {
		return i[4] === 'dark' ? 0 : i[4] === 'light' ? 1 : 2;
	}
	return (
		(e = a(s)),
		(n = o[e] = r[e](s)),
		{
			c() {
				n.c(), (t = le());
			},
			l(i) {
				n.l(i), (t = le());
			},
			m(i, u) {
				o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, u) {
				let f = e;
				(e = a(i)),
					e !== f &&
						(Ee(),
						g(o[f], 1, 1, () => {
							o[f] = null;
						}),
						Se(),
						(n = o[e]),
						n || ((n = o[e] = r[e](i)), n.c()),
						m(n, 1),
						n.m(t.parentNode, t));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function xd(s) {
	let e, n;
	return (
		(e = new nt({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: 'h-6 w-6 fill-muted-foreground hover:fill-foreground transition-all',
				scale: 'md',
				$$slots: { default: [Zd] },
				$$scope: { ctx: s }
			}
		})),
		e.$on('click', xi),
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
				const r = {};
				l & 262160 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function em(s) {
	let e, n;
	return (
		(e = new He({ props: { name: 'cloudX', class: 'w-4 h-4' } })),
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
			p: we,
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function tm(s) {
	let e, n;
	return (
		(e = new nt({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: 'h-6 w-6 fill-muted-foreground hover:fill-foreground transition-all',
				scale: 'md',
				$$slots: { default: [em] },
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
				const r = {};
				l & 262144 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function nm(s) {
	let e, n;
	return (
		(e = new He({ props: { name: 'lifebouy', class: 'w-4 h-4' } })),
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
			p: we,
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function lm(s) {
	let e, n;
	return (
		(e = new nt({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: 'h-6 w-6 fill-muted-foreground hover:fill-foreground transition-all',
				scale: 'md',
				$$slots: { default: [nm] },
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
				const r = {};
				l & 262144 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
	let e, n, t, l;
	return (
		(e = new Qo({ props: { options: Qe['app:shortcuts'], callback: s[7] } })),
		(t = new He({ props: { name: 'bolt', class: 'w-4 h-4' } })),
		{
			c() {
				E(e.$$.fragment), (n = q()), E(t.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r), (n = L(r)), S(t.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), v(r, n, o), C(t, r, o), (l = !0);
			},
			p(r, o) {
				const a = {};
				o & 2 && (a.callback = r[7]), e.$set(a);
			},
			i(r) {
				l || (m(e.$$.fragment, r), m(t.$$.fragment, r), (l = !0));
			},
			o(r) {
				g(e.$$.fragment, r), g(t.$$.fragment, r), (l = !1);
			},
			d(r) {
				r && _(n), k(e, r), k(t, r);
			}
		}
	);
}
function rm(s) {
	let e, n;
	return (
		(e = new nt({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: 'h-6 w-6 fill-muted-foreground hover:fill-foreground transition-all',
				scale: 'md',
				$$slots: { default: [sm] },
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
				const r = {};
				l & 262146 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
		(e = new ht({
			props: {
				text: 'Shortcuts',
				shortcut: Qe['app:shortcuts'],
				$$slots: { default: [rm] },
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
				const r = {};
				l & 262146 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
	let e;
	return {
		c() {
			e = X('Shortcuts');
		},
		l(n) {
			e = J(n, 'Shortcuts');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function am(s) {
	let e, n, t;
	function l(o) {
		s[8](o);
	}
	let r = {
		placeholder: 'Search shortcuts',
		autocorrect: 'off',
		autocomplete: 'off',
		class: 'w-full text-foreground font-light'
	};
	return (
		s[0] !== void 0 && (r.value = s[0]),
		(e = new pa({ props: r })),
		Pe.push(() => ft(e, 'value', l)),
		{
			c() {
				E(e.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o);
			},
			m(o, a) {
				C(e, o, a), (t = !0);
			},
			p(o, a) {
				const i = {};
				!n && a & 1 && ((n = !0), (i.value = o[0]), ut(() => (n = !1))), e.$set(i);
			},
			i(o) {
				t || (m(e.$$.fragment, o), (t = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (t = !1);
			},
			d(o) {
				k(e, o);
			}
		}
	);
}
function um(s) {
	let e, n, t, l;
	return (
		(e = new Ld({ props: { class: 'px-5', $$slots: { default: [im] }, $$scope: { ctx: s } } })),
		(t = new Bd({
			props: { class: 'px-5 py-1', $$slots: { default: [am] }, $$scope: { ctx: s } }
		})),
		{
			c() {
				E(e.$$.fragment), (n = q()), E(t.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r), (n = L(r)), S(t.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), v(r, n, o), C(t, r, o), (l = !0);
			},
			p(r, o) {
				const a = {};
				o & 262144 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
				const i = {};
				o & 262145 && (i.$$scope = { dirty: o, ctx: r }), t.$set(i);
			},
			i(r) {
				l || (m(e.$$.fragment, r), m(t.$$.fragment, r), (l = !0));
			},
			o(r) {
				g(e.$$.fragment, r), g(t.$$.fragment, r), (l = !1);
			},
			d(r) {
				r && _(n), k(e, r), k(t, r);
			}
		}
	);
}
function fm(s) {
	let e,
		n,
		t = s[12].name + '',
		l,
		r;
	return (
		(e = new Ra({
			props: {
				class: ve(
					'w-4 h-4 transition-all text-muted-foreground group-hover:text-foreground',
					s[2].includes(s[12].name) && 'transform -rotate-90'
				)
			}
		})),
		{
			c() {
				E(e.$$.fragment), (n = q()), (l = X(t));
			},
			l(o) {
				S(e.$$.fragment, o), (n = L(o)), (l = J(o, t));
			},
			m(o, a) {
				C(e, o, a), v(o, n, a), v(o, l, a), (r = !0);
			},
			p(o, a) {
				const i = {};
				a & 12 &&
					(i.class = ve(
						'w-4 h-4 transition-all text-muted-foreground group-hover:text-foreground',
						o[2].includes(o[12].name) && 'transform -rotate-90'
					)),
					e.$set(i),
					(!r || a & 8) && t !== (t = o[12].name + '') && dt(l, t);
			},
			i(o) {
				r || (m(e.$$.fragment, o), (r = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (r = !1);
			},
			d(o) {
				o && (_(n), _(l)), k(e, o);
			}
		}
	);
}
function Er(s) {
	let e,
		n = Ql(s[15].shortcut) + '',
		t;
	return {
		c() {
			(e = R('span')), (t = X(n)), this.h();
		},
		l(l) {
			e = M(l, 'SPAN', { class: !0 });
			var r = K(e);
			(t = J(r, n)), r.forEach(_), this.h();
		},
		h() {
			N(
				e,
				'class',
				'pointer-events-none inline-flex h-[18px] pl-1.5 tracking-widest -mr-2 select-none items-center gap-1 rounded bg-secondary px-1 font-mono text-muted-foreground opacity-100'
			);
		},
		m(l, r) {
			v(l, e, r), O(e, t);
		},
		p(l, r) {
			r & 8 && n !== (n = Ql(l[15].shortcut) + '') && dt(t, n);
		},
		d(l) {
			l && _(e);
		}
	};
}
function Sr(s) {
	let e,
		n,
		t = s[15].title + '',
		l,
		r,
		o,
		a = s[15].shortcut && Er(s);
	return {
		c() {
			(e = R('div')), (n = R('span')), (l = X(t)), (r = q()), a && a.c(), (o = q()), this.h();
		},
		l(i) {
			e = M(i, 'DIV', { class: !0 });
			var u = K(e);
			n = M(u, 'SPAN', { class: !0 });
			var f = K(n);
			(l = J(f, t)), f.forEach(_), (r = L(u)), a && a.l(u), (o = L(u)), u.forEach(_), this.h();
		},
		h() {
			N(n, 'class', 'font-light'), N(e, 'class', 'flex items-center justify-between gap-2');
		},
		m(i, u) {
			v(i, e, u), O(e, n), O(n, l), O(e, r), a && a.m(e, null), O(e, o);
		},
		p(i, u) {
			u & 8 && t !== (t = i[15].title + '') && dt(l, t),
				i[15].shortcut
					? a
						? a.p(i, u)
						: ((a = Er(i)), a.c(), a.m(e, o))
					: a && (a.d(1), (a = null));
		},
		d(i) {
			i && _(e), a && a.d();
		}
	};
}
function cm(s) {
	let e,
		n = tt(s[12].commands),
		t = [];
	for (let l = 0; l < n.length; l += 1) t[l] = Sr(Cr(s, n, l));
	return {
		c() {
			for (let l = 0; l < t.length; l += 1) t[l].c();
			e = le();
		},
		l(l) {
			for (let r = 0; r < t.length; r += 1) t[r].l(l);
			e = le();
		},
		m(l, r) {
			for (let o = 0; o < t.length; o += 1) t[o] && t[o].m(l, r);
			v(l, e, r);
		},
		p(l, r) {
			if (r & 8) {
				n = tt(l[12].commands);
				let o;
				for (o = 0; o < n.length; o += 1) {
					const a = Cr(l, n, o);
					t[o] ? t[o].p(a, r) : ((t[o] = Sr(a)), t[o].c(), t[o].m(e.parentNode, e));
				}
				for (; o < t.length; o += 1) t[o].d(1);
				t.length = n.length;
			}
		},
		d(l) {
			l && _(e), It(t, l);
		}
	};
}
function dm(s) {
	let e, n, t, l;
	return (
		(e = new _a({
			props: {
				class: 'flex items-center gap-2 group w-full text-sm font-normal',
				$$slots: { default: [fm] },
				$$scope: { ctx: s }
			}
		})),
		(t = new ha({
			props: {
				class: 'text-sm text-muted-foreground pt-3 space-y-3',
				$$slots: { default: [cm] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment), (n = q()), E(t.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r), (n = L(r)), S(t.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), v(r, n, o), C(t, r, o), (l = !0);
			},
			p(r, o) {
				const a = {};
				o & 262156 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
				const i = {};
				o & 262152 && (i.$$scope = { dirty: o, ctx: r }), t.$set(i);
			},
			i(r) {
				l || (m(e.$$.fragment, r), m(t.$$.fragment, r), (l = !0));
			},
			o(r) {
				g(e.$$.fragment, r), g(t.$$.fragment, r), (l = !1);
			},
			d(r) {
				r && _(n), k(e, r), k(t, r);
			}
		}
	);
}
function wr(s) {
	let e, n, t, l;
	function r(...o) {
		return s[9](s[12], ...o);
	}
	return (
		(n = new ma({
			props: {
				open: !s[2].includes(s[12].name),
				onOpenChange: r,
				$$slots: { default: [dm] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = R('div')), E(n.$$.fragment), (t = q()), this.h();
			},
			l(o) {
				e = M(o, 'DIV', { class: !0 });
				var a = K(e);
				S(n.$$.fragment, a), (t = L(a)), a.forEach(_), this.h();
			},
			h() {
				N(e, 'class', 'w-full h-full py-3 px-5');
			},
			m(o, a) {
				v(o, e, a), C(n, e, null), O(e, t), (l = !0);
			},
			p(o, a) {
				s = o;
				const i = {};
				a & 12 && (i.open = !s[2].includes(s[12].name)),
					a & 12 && (i.onOpenChange = r),
					a & 262156 && (i.$$scope = { dirty: a, ctx: s }),
					n.$set(i);
			},
			i(o) {
				l || (m(n.$$.fragment, o), (l = !0));
			},
			o(o) {
				g(n.$$.fragment, o), (l = !1);
			},
			d(o) {
				o && _(e), k(n);
			}
		}
	);
}
function yr(s) {
	let e,
		n,
		t,
		l,
		r = 'No shortcuts found',
		o;
	return (
		(n = new He({ props: { name: 'searchBars', class: 'w-5 h-5 fill-muted-foreground' } })),
		{
			c() {
				(e = R('div')), E(n.$$.fragment), (t = q()), (l = R('p')), (l.textContent = r), this.h();
			},
			l(a) {
				e = M(a, 'DIV', { class: !0 });
				var i = K(e);
				S(n.$$.fragment, i),
					(t = L(i)),
					(l = M(i, 'P', { class: !0, 'data-svelte-h': !0 })),
					it(l) !== 'svelte-1q4u1hw' && (l.textContent = r),
					i.forEach(_),
					this.h();
			},
			h() {
				N(l, 'class', 'text-muted-foreground text-sm'),
					N(e, 'class', 'w-full h-full flex flex-col gap-1 items-center justify-center pt-14');
			},
			m(a, i) {
				v(a, e, i), C(n, e, null), O(e, t), O(e, l), (o = !0);
			},
			i(a) {
				o || (m(n.$$.fragment, a), (o = !0));
			},
			o(a) {
				g(n.$$.fragment, a), (o = !1);
			},
			d(a) {
				a && _(e), k(n);
			}
		}
	);
}
function mm(s) {
	let e, n, t, l, r;
	e = new Md({ props: { $$slots: { default: [um] }, $$scope: { ctx: s } } });
	let o = tt(s[3]),
		a = [];
	for (let f = 0; f < o.length; f += 1) a[f] = wr(kr(s, o, f));
	const i = (f) =>
		g(a[f], 1, 1, () => {
			a[f] = null;
		});
	let u = s[3].length === 0 && yr();
	return {
		c() {
			E(e.$$.fragment), (n = q()), (t = R('div'));
			for (let f = 0; f < a.length; f += 1) a[f].c();
			(l = q()), u && u.c();
		},
		l(f) {
			S(e.$$.fragment, f), (n = L(f)), (t = M(f, 'DIV', {}));
			var c = K(t);
			for (let h = 0; h < a.length; h += 1) a[h].l(c);
			(l = L(c)), u && u.l(c), c.forEach(_);
		},
		m(f, c) {
			C(e, f, c), v(f, n, c), v(f, t, c);
			for (let h = 0; h < a.length; h += 1) a[h] && a[h].m(t, null);
			O(t, l), u && u.m(t, null), (r = !0);
		},
		p(f, c) {
			const h = {};
			if ((c & 262145 && (h.$$scope = { dirty: c, ctx: f }), e.$set(h), c & 12)) {
				o = tt(f[3]);
				let d;
				for (d = 0; d < o.length; d += 1) {
					const $ = kr(f, o, d);
					a[d] ? (a[d].p($, c), m(a[d], 1)) : ((a[d] = wr($)), a[d].c(), m(a[d], 1), a[d].m(t, l));
				}
				for (Ee(), d = o.length; d < a.length; d += 1) i(d);
				Se();
			}
			f[3].length === 0
				? u
					? c & 8 && m(u, 1)
					: ((u = yr()), u.c(), m(u, 1), u.m(t, null))
				: u &&
					(Ee(),
					g(u, 1, 1, () => {
						u = null;
					}),
					Se());
		},
		i(f) {
			if (!r) {
				m(e.$$.fragment, f);
				for (let c = 0; c < o.length; c += 1) m(a[c]);
				m(u), (r = !0);
			}
		},
		o(f) {
			g(e.$$.fragment, f), (a = a.filter(Boolean));
			for (let c = 0; c < a.length; c += 1) g(a[c]);
			g(u), (r = !1);
		},
		d(f) {
			f && (_(n), _(t)), k(e, f), It(a, f), u && u.d();
		}
	};
}
function _m(s) {
	let e, n, t, l;
	return (
		(e = new zd({ props: { $$slots: { default: [om] }, $$scope: { ctx: s } } })),
		(t = new Nd({
			props: { class: 'px-0 overflow-y-auto', $$slots: { default: [mm] }, $$scope: { ctx: s } }
		})),
		{
			c() {
				E(e.$$.fragment), (n = q()), E(t.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r), (n = L(r)), S(t.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), v(r, n, o), C(t, r, o), (l = !0);
			},
			p(r, o) {
				const a = {};
				o & 262146 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
				const i = {};
				o & 262157 && (i.$$scope = { dirty: o, ctx: r }), t.$set(i);
			},
			i(r) {
				l || (m(e.$$.fragment, r), m(t.$$.fragment, r), (l = !0));
			},
			o(r) {
				g(e.$$.fragment, r), g(t.$$.fragment, r), (l = !1);
			},
			d(r) {
				r && _(n), k(e, r), k(t, r);
			}
		}
	);
}
function hm(s) {
	let e, n;
	return (
		(e = new He({ props: { name: 'share', class: 'w-4 h-4' } })),
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
			p: we,
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function gm(s) {
	let e, n;
	return (
		(e = new nt({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: 'h-6 w-6 fill-muted-foreground hover:fill-foreground transition-all',
				scale: 'md',
				$$slots: { default: [hm] },
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
				const r = {};
				l & 262144 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function pm(s) {
	let e, n, t, l, r, o, a, i, u, f, c, h, d, $;
	(t = new ht({
		props: {
			text: 'Toggle theme',
			shortcut: Qe['settings:toggle-theme'],
			$$slots: { default: [xd] },
			$$scope: { ctx: s }
		}
	})),
		(r = new ht({
			props: { text: 'Typyst Sync', $$slots: { default: [tm] }, $$scope: { ctx: s } }
		})),
		(i = new ht({
			props: {
				text: 'Help & feedback',
				shortcut: Qe['app:help'],
				$$slots: { default: [lm] },
				$$scope: { ctx: s }
			}
		}));
	function p(w) {
		s[10](w);
	}
	let b = { $$slots: { default: [_m] }, $$scope: { ctx: s } };
	return (
		s[1] !== void 0 && (b.open = s[1]),
		(f = new Ud({ props: b })),
		Pe.push(() => ft(f, 'open', p)),
		(d = new ht({
			props: {
				text: 'Share',
				shortcut: Qe['app:share'],
				$$slots: { default: [gm] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = R('footer')),
					(n = R('div')),
					E(t.$$.fragment),
					(l = q()),
					E(r.$$.fragment),
					(o = q()),
					(a = R('div')),
					E(i.$$.fragment),
					(u = q()),
					E(f.$$.fragment),
					(h = q()),
					E(d.$$.fragment),
					this.h();
			},
			l(w) {
				e = M(w, 'FOOTER', { class: !0 });
				var y = K(e);
				n = M(y, 'DIV', { class: !0 });
				var I = K(n);
				S(t.$$.fragment, I),
					(l = L(I)),
					S(r.$$.fragment, I),
					I.forEach(_),
					(o = L(y)),
					(a = M(y, 'DIV', { class: !0 }));
				var Q = K(a);
				S(i.$$.fragment, Q),
					(u = L(Q)),
					S(f.$$.fragment, Q),
					(h = L(Q)),
					S(d.$$.fragment, Q),
					Q.forEach(_),
					y.forEach(_),
					this.h();
			},
			h() {
				N(n, 'class', 'cursor-default space-x-0.5'),
					N(a, 'class', 'cursor-default space-x-0.5'),
					N(
						e,
						'class',
						'fixed bottom-0 w-full flex justify-between items-center h-9 border-t pb-0.5 px-1.5 bg-background z-20'
					);
			},
			m(w, y) {
				v(w, e, y),
					O(e, n),
					C(t, n, null),
					O(n, l),
					C(r, n, null),
					O(e, o),
					O(e, a),
					C(i, a, null),
					O(a, u),
					C(f, a, null),
					O(a, h),
					C(d, a, null),
					($ = !0);
			},
			p(w, [y]) {
				const I = {};
				y & 262160 && (I.$$scope = { dirty: y, ctx: w }), t.$set(I);
				const Q = {};
				y & 262144 && (Q.$$scope = { dirty: y, ctx: w }), r.$set(Q);
				const P = {};
				y & 262144 && (P.$$scope = { dirty: y, ctx: w }), i.$set(P);
				const V = {};
				y & 262159 && (V.$$scope = { dirty: y, ctx: w }),
					!c && y & 2 && ((c = !0), (V.open = w[1]), ut(() => (c = !1))),
					f.$set(V);
				const z = {};
				y & 262144 && (z.$$scope = { dirty: y, ctx: w }), d.$set(z);
			},
			i(w) {
				$ ||
					(m(t.$$.fragment, w),
					m(r.$$.fragment, w),
					m(i.$$.fragment, w),
					m(f.$$.fragment, w),
					m(d.$$.fragment, w),
					($ = !0));
			},
			o(w) {
				g(t.$$.fragment, w),
					g(r.$$.fragment, w),
					g(i.$$.fragment, w),
					g(f.$$.fragment, w),
					g(d.$$.fragment, w),
					($ = !1);
			},
			d(w) {
				w && _(e), k(t), k(r), k(i), k(f), k(d);
			}
		}
	);
}
function $m(s, e, n) {
	let t;
	Ae(s, Zl, (p) => n(4, (t = p)));
	let l = !1,
		r = '',
		o = [],
		a = [...mn];
	El.subscribe((p) => {
		a[0].name !== 'Notes' && a.shift(), p && a.unshift(li(p));
	});
	const i = () => {
			nl.set({ isOpen: !0, activePage: 'typyst sync' });
		},
		u = () => {
			document.dispatchEvent(new KeyboardEvent('keydown', { key: 'h', metaKey: !0, shiftKey: !0 }));
		},
		f = () => n(1, (l = !l));
	function c(p) {
		(r = p), n(0, r);
	}
	const h = (p, b) => {
		n(2, (o = b ? o.filter((w) => w !== p.name) : [...o, p.name]));
	};
	function d(p) {
		(l = p), n(1, l);
	}
	const $ = () => {
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'l', metaKey: !0, shiftKey: !0 }));
	};
	return (
		(s.$$.update = () => {
			s.$$.dirty & 1 &&
				n(
					3,
					(a = mn
						.map((p) => ({
							...p,
							commands: p.commands.filter((b) => b.title.toLowerCase().includes(r.toLowerCase()))
						}))
						.filter((p) => p.commands.length > 0))
				);
		}),
		[r, l, o, a, t, i, u, f, c, h, d, $]
	);
}
class bm extends pe {
	constructor(e) {
		super(), $e(this, e, $m, pm, me, {});
	}
}
function vm(s) {
	let e, n, t, l, r, o;
	return (
		(n = new nt({
			props: {
				variant: 'secondary',
				size: 'sm',
				scale: 'sm',
				class: 'rounded-full h-[27px] px-2.5',
				$$slots: { default: [Cm] },
				$$scope: { ctx: s }
			}
		})),
		(r = new nt({
			props: {
				size: 'sm',
				scale: 'sm',
				class: 'rounded-full h-[27px] px-2.5',
				$$slots: { default: [Em] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = R('a')), E(n.$$.fragment), (t = q()), (l = R('a')), E(r.$$.fragment), this.h();
			},
			l(a) {
				e = M(a, 'A', { href: !0 });
				var i = K(e);
				S(n.$$.fragment, i), i.forEach(_), (t = L(a)), (l = M(a, 'A', { href: !0 }));
				var u = K(l);
				S(r.$$.fragment, u), u.forEach(_), this.h();
			},
			h() {
				N(e, 'href', '/auth/sign-in'), N(l, 'href', '/auth/sign-up');
			},
			m(a, i) {
				v(a, e, i), C(n, e, null), v(a, t, i), v(a, l, i), C(r, l, null), (o = !0);
			},
			p(a, i) {
				const u = {};
				i & 8 && (u.$$scope = { dirty: i, ctx: a }), n.$set(u);
				const f = {};
				i & 8 && (f.$$scope = { dirty: i, ctx: a }), r.$set(f);
			},
			i(a) {
				o || (m(n.$$.fragment, a), m(r.$$.fragment, a), (o = !0));
			},
			o(a) {
				g(n.$$.fragment, a), g(r.$$.fragment, a), (o = !1);
			},
			d(a) {
				a && (_(e), _(t), _(l)), k(n), k(r);
			}
		}
	);
}
function km(s) {
	var u, f;
	let e,
		n,
		t = (((u = s[2]) == null ? void 0 : u.name) || ((f = s[2]) == null ? void 0 : f.email)) + '',
		l,
		r,
		o,
		a,
		i;
	return (
		(a = new nt({
			props: {
				variant: 'secondary',
				size: 'sm',
				scale: 'sm',
				class: 'rounded-full h-[27px] px-2.5',
				$$slots: { default: [Sm] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = R('span')),
					(n = X('Welcome, ')),
					(l = X(t)),
					(r = q()),
					(o = R('a')),
					E(a.$$.fragment),
					this.h();
			},
			l(c) {
				e = M(c, 'SPAN', { class: !0 });
				var h = K(e);
				(n = J(h, 'Welcome, ')),
					(l = J(h, t)),
					h.forEach(_),
					(r = L(c)),
					(o = M(c, 'A', { href: !0 }));
				var d = K(o);
				S(a.$$.fragment, d), d.forEach(_), this.h();
			},
			h() {
				N(e, 'class', 'text-sm text-muted-foreground mr-2'), N(o, 'href', '/auth/sign-out');
			},
			m(c, h) {
				v(c, e, h), O(e, n), O(e, l), v(c, r, h), v(c, o, h), C(a, o, null), (i = !0);
			},
			p(c, h) {
				var $, p;
				(!i || h & 4) &&
					t !==
						(t =
							((($ = c[2]) == null ? void 0 : $.name) || ((p = c[2]) == null ? void 0 : p.email)) +
							'') &&
					dt(l, t);
				const d = {};
				h & 8 && (d.$$scope = { dirty: h, ctx: c }), a.$set(d);
			},
			i(c) {
				i || (m(a.$$.fragment, c), (i = !0));
			},
			o(c) {
				g(a.$$.fragment, c), (i = !1);
			},
			d(c) {
				c && (_(e), _(r), _(o)), k(a);
			}
		}
	);
}
function Cm(s) {
	let e;
	return {
		c() {
			e = X('Sign In');
		},
		l(n) {
			e = J(n, 'Sign In');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function Em(s) {
	let e;
	return {
		c() {
			e = X('Sign Up');
		},
		l(n) {
			e = J(n, 'Sign Up');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function Sm(s) {
	let e;
	return {
		c() {
			e = X('Sign Out');
		},
		l(n) {
			e = J(n, 'Sign Out');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function wm(s) {
	let e;
	return {
		c() {
			e = X('Star on Github');
		},
		l(n) {
			e = J(n, 'Star on Github');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function ym(s) {
	let e;
	return {
		c() {
			e = X('Download');
		},
		l(n) {
			e = J(n, 'Download');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function Tm(s) {
	var P;
	let e,
		n,
		t,
		l,
		r = (((P = s[0]) == null ? void 0 : P.split('/').pop()) || '') + '',
		o,
		a,
		i,
		u,
		f,
		c,
		h,
		d,
		$,
		p,
		b,
		w;
	const y = [km, vm],
		I = [];
	function Q(V, z) {
		return V[1] ? 0 : 1;
	}
	return (
		(u = Q(s)),
		(f = I[u] = y[u](s)),
		(d = new nt({
			props: {
				variant: 'secondary',
				size: 'sm',
				scale: 'sm',
				class: 'rounded-full h-[27px] px-2.5',
				$$slots: { default: [wm] },
				$$scope: { ctx: s }
			}
		})),
		(b = new nt({
			props: {
				size: 'sm',
				scale: 'sm',
				class: 'rounded-full h-[27px] px-2.5',
				$$slots: { default: [ym] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = R('header')),
					(n = R('div')),
					(t = q()),
					(l = R('p')),
					(o = X(r)),
					(a = q()),
					(i = R('div')),
					f.c(),
					(c = q()),
					(h = R('a')),
					E(d.$$.fragment),
					($ = q()),
					(p = R('a')),
					E(b.$$.fragment),
					this.h();
			},
			l(V) {
				e = M(V, 'HEADER', { class: !0 });
				var z = K(e);
				(n = M(z, 'DIV', {})), K(n).forEach(_), (t = L(z)), (l = M(z, 'P', { class: !0 }));
				var ee = K(l);
				(o = J(ee, r)), ee.forEach(_), (a = L(z)), (i = M(z, 'DIV', { class: !0 }));
				var se = K(i);
				f.l(se), (c = L(se)), (h = M(se, 'A', { href: !0, target: !0, rel: !0 }));
				var T = K(h);
				S(d.$$.fragment, T),
					T.forEach(_),
					($ = L(se)),
					(p = M(se, 'A', { href: !0, target: !0, rel: !0 }));
				var W = K(p);
				S(b.$$.fragment, W), W.forEach(_), se.forEach(_), z.forEach(_), this.h();
			},
			h() {
				N(
					l,
					'class',
					'pointer-events-none text-sm text-foreground/85 hover:text-foreground/100 transition-all cursor-default outline-none -mr-[159px]'
				),
					N(h, 'href', 'https://go.typyst.md/github'),
					N(h, 'target', '_blank'),
					N(h, 'rel', 'noopener noreferrer'),
					N(p, 'href', 'https://go.typyst.md/download'),
					N(p, 'target', '_blank'),
					N(p, 'rel', 'noopener noreferrer'),
					N(i, 'class', 'flex gap-1 items-center'),
					N(
						e,
						'class',
						'absolute top-0 w-full flex justify-between items-center h-9 border-b pl-20 bg-background z-40 px-1.5'
					);
			},
			m(V, z) {
				v(V, e, z),
					O(e, n),
					O(e, t),
					O(e, l),
					O(l, o),
					O(e, a),
					O(e, i),
					I[u].m(i, null),
					O(i, c),
					O(i, h),
					C(d, h, null),
					O(i, $),
					O(i, p),
					C(b, p, null),
					(w = !0);
			},
			p(V, [z]) {
				var W;
				(!w || z & 1) &&
					r !== (r = (((W = V[0]) == null ? void 0 : W.split('/').pop()) || '') + '') &&
					dt(o, r);
				let ee = u;
				(u = Q(V)),
					u === ee
						? I[u].p(V, z)
						: (Ee(),
							g(I[ee], 1, 1, () => {
								I[ee] = null;
							}),
							Se(),
							(f = I[u]),
							f ? f.p(V, z) : ((f = I[u] = y[u](V)), f.c()),
							m(f, 1),
							f.m(i, c));
				const se = {};
				z & 8 && (se.$$scope = { dirty: z, ctx: V }), d.$set(se);
				const T = {};
				z & 8 && (T.$$scope = { dirty: z, ctx: V }), b.$set(T);
			},
			i(V) {
				w || (m(f), m(d.$$.fragment, V), m(b.$$.fragment, V), (w = !0));
			},
			o(V) {
				g(f), g(d.$$.fragment, V), g(b.$$.fragment, V), (w = !1);
			},
			d(V) {
				V && _(e), I[u].d(), k(d), k(b);
			}
		}
	);
}
function Am(s, e, n) {
	let t, l, r;
	return (
		Ae(s, Jt, (o) => n(0, (t = o))),
		Ae(s, Va, (o) => n(1, (l = o))),
		Ae(s, La, (o) => n(2, (r = o))),
		[t, l, r]
	);
}
class Om extends pe {
	constructor(e) {
		super(), $e(this, e, Am, Tm, me, {});
	}
}
function Pm(s) {
	let e;
	const n = s[1].default,
		t = ae(n, s, s[2], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 4) && ue(t, n, l, l[2], e ? ce(n, l[2], r, null) : fe(l[2]), null);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Nm(s) {
	let e, n;
	const t = [s[0]];
	let l = { $$slots: { default: [Pm] }, $$scope: { ctx: s } };
	for (let r = 0; r < t.length; r += 1) l = D(l, t[r]);
	return (
		(e = new Xo({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), (n = !0);
			},
			p(r, [o]) {
				const a = o & 1 ? ge(t, [Xe(r[0])]) : {};
				o & 4 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
			},
			i(r) {
				n || (m(e.$$.fragment, r), (n = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (n = !1);
			},
			d(r) {
				k(e, r);
			}
		}
	);
}
function Dm(s, e, n) {
	const t = [];
	let l = ne(e, t),
		{ $$slots: r = {}, $$scope: o } = e;
	return (
		(s.$$set = (a) => {
			(e = D(D({}, e), Ce(a))), n(0, (l = ne(e, t))), '$$scope' in a && n(2, (o = a.$$scope));
		}),
		[l, r, o]
	);
}
class Im extends pe {
	constructor(e) {
		super(), $e(this, e, Dm, Nm, me, {});
	}
}
function Mm(s) {
	let e, n;
	const t = [
		{ transition: s[1] },
		{ transitionConfig: s[2] },
		{ class: ve('fixed inset-0 z-50 bg-background/80 backdrop-blur-sm ', s[0]) },
		s[3]
	];
	let l = {};
	for (let r = 0; r < t.length; r += 1) l = D(l, t[r]);
	return (
		(e = new Zo({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), (n = !0);
			},
			p(r, [o]) {
				const a =
					o & 15
						? ge(t, [
								o & 2 && { transition: r[1] },
								o & 4 && { transitionConfig: r[2] },
								o & 1 && {
									class: ve('fixed inset-0 z-50 bg-background/80 backdrop-blur-sm ', r[0])
								},
								o & 8 && Xe(r[3])
							])
						: {};
				e.$set(a);
			},
			i(r) {
				n || (m(e.$$.fragment, r), (n = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (n = !1);
			},
			d(r) {
				k(e, r);
			}
		}
	);
}
function Rm(s, e, n) {
	const t = ['class', 'transition', 'transitionConfig'];
	let l = ne(e, t),
		{ class: r = void 0 } = e,
		{ transition: o = Ko } = e,
		{ transitionConfig: a = { duration: 150 } } = e;
	return (
		(s.$$set = (i) => {
			(e = D(D({}, e), Ce(i))),
				n(3, (l = ne(e, t))),
				'class' in i && n(0, (r = i.class)),
				'transition' in i && n(1, (o = i.transition)),
				'transitionConfig' in i && n(2, (a = i.transitionConfig));
		}),
		[r, o, a, l]
	);
}
class Fm extends pe {
	constructor(e) {
		super(), $e(this, e, Rm, Mm, me, { class: 0, transition: 1, transitionConfig: 2 });
	}
}
function Vm(s) {
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
	for (let r = 0; r < t.length; r += 1) l = D(l, t[r]);
	return {
		c() {
			(e = Qn('svg')), (n = Qn('path')), this.h();
		},
		l(r) {
			e = Hn(r, 'svg', { width: !0, height: !0, viewBox: !0, fill: !0, xmlns: !0 });
			var o = K(e);
			(n = Hn(o, 'path', { 'fill-rule': !0, 'clip-rule': !0, d: !0, fill: !0 })),
				K(n).forEach(_),
				o.forEach(_),
				this.h();
		},
		h() {
			N(n, 'fill-rule', 'evenodd'),
				N(n, 'clip-rule', 'evenodd'),
				N(
					n,
					'd',
					'M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z'
				),
				N(n, 'fill', s[0]),
				zn(e, l);
		},
		m(r, o) {
			v(r, e, o), O(e, n);
		},
		p(r, [o]) {
			o & 1 && N(n, 'fill', r[0]),
				zn(
					e,
					(l = ge(t, [
						o & 2 && { width: r[1] },
						o & 2 && { height: r[1] },
						{ viewBox: '0 0 15 15' },
						{ fill: 'none' },
						{ xmlns: 'http://www.w3.org/2000/svg' },
						o & 4 && r[2]
					]))
				);
		},
		i: we,
		o: we,
		d(r) {
			r && _(e);
		}
	};
}
function Lm(s, e, n) {
	const t = ['color', 'size'];
	let l = ne(e, t),
		{ color: r = 'currentColor' } = e,
		{ size: o = 15 } = e;
	return (
		(s.$$set = (a) => {
			(e = D(D({}, e), Ce(a))),
				n(2, (l = ne(e, t))),
				'color' in a && n(0, (r = a.color)),
				'size' in a && n(1, (o = a.size));
		}),
		[r, o, l]
	);
}
class qm extends pe {
	constructor(e) {
		super(), $e(this, e, Lm, Vm, me, { color: 0, size: 1 });
	}
}
function jm(s) {
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
	for (let r = 0; r < t.length; r += 1) l = D(l, t[r]);
	return {
		c() {
			(e = Qn('svg')), (n = Qn('path')), this.h();
		},
		l(r) {
			e = Hn(r, 'svg', { width: !0, height: !0, viewBox: !0, fill: !0, xmlns: !0 });
			var o = K(e);
			(n = Hn(o, 'path', { 'fill-rule': !0, 'clip-rule': !0, d: !0, fill: !0 })),
				K(n).forEach(_),
				o.forEach(_),
				this.h();
		},
		h() {
			N(n, 'fill-rule', 'evenodd'),
				N(n, 'clip-rule', 'evenodd'),
				N(
					n,
					'd',
					'M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z'
				),
				N(n, 'fill', s[0]),
				zn(e, l);
		},
		m(r, o) {
			v(r, e, o), O(e, n);
		},
		p(r, [o]) {
			o & 1 && N(n, 'fill', r[0]),
				zn(
					e,
					(l = ge(t, [
						o & 2 && { width: r[1] },
						o & 2 && { height: r[1] },
						{ viewBox: '0 0 15 15' },
						{ fill: 'none' },
						{ xmlns: 'http://www.w3.org/2000/svg' },
						o & 4 && r[2]
					]))
				);
		},
		i: we,
		o: we,
		d(r) {
			r && _(e);
		}
	};
}
function Km(s, e, n) {
	const t = ['color', 'size'];
	let l = ne(e, t),
		{ color: r = 'currentColor' } = e,
		{ size: o = 15 } = e;
	return (
		(s.$$set = (a) => {
			(e = D(D({}, e), Ce(a))),
				n(2, (l = ne(e, t))),
				'color' in a && n(0, (r = a.color)),
				'size' in a && n(1, (o = a.size));
		}),
		[r, o, l]
	);
}
class Bm extends pe {
	constructor(e) {
		super(), $e(this, e, Km, jm, me, { color: 0, size: 1 });
	}
}
function Um(s) {
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
	for (let r = 0; r < t.length; r += 1) l = D(l, t[r]);
	return {
		c() {
			(e = Qn('svg')), (n = Qn('path')), this.h();
		},
		l(r) {
			e = Hn(r, 'svg', { width: !0, height: !0, viewBox: !0, fill: !0, xmlns: !0 });
			var o = K(e);
			(n = Hn(o, 'path', { 'fill-rule': !0, 'clip-rule': !0, d: !0, fill: !0 })),
				K(n).forEach(_),
				o.forEach(_),
				this.h();
		},
		h() {
			N(n, 'fill-rule', 'evenodd'),
				N(n, 'clip-rule', 'evenodd'),
				N(
					n,
					'd',
					'M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z'
				),
				N(n, 'fill', s[0]),
				zn(e, l);
		},
		m(r, o) {
			v(r, e, o), O(e, n);
		},
		p(r, [o]) {
			o & 1 && N(n, 'fill', r[0]),
				zn(
					e,
					(l = ge(t, [
						o & 2 && { width: r[1] },
						o & 2 && { height: r[1] },
						{ viewBox: '0 0 15 15' },
						{ fill: 'none' },
						{ xmlns: 'http://www.w3.org/2000/svg' },
						o & 4 && r[2]
					]))
				);
		},
		i: we,
		o: we,
		d(r) {
			r && _(e);
		}
	};
}
function zm(s, e, n) {
	const t = ['color', 'size'];
	let l = ne(e, t),
		{ color: r = 'currentColor' } = e,
		{ size: o = 15 } = e;
	return (
		(s.$$set = (a) => {
			(e = D(D({}, e), Ce(a))),
				n(2, (l = ne(e, t))),
				'color' in a && n(0, (r = a.color)),
				'size' in a && n(1, (o = a.size));
		}),
		[r, o, l]
	);
}
class Hm extends pe {
	constructor(e) {
		super(), $e(this, e, zm, Um, me, { color: 0, size: 1 });
	}
}
function Qm(s) {
	let e,
		n,
		t,
		l = 'Close',
		r;
	return (
		(e = new Hm({ props: { class: 'h-4 w-4' } })),
		{
			c() {
				E(e.$$.fragment), (n = q()), (t = R('span')), (t.textContent = l), this.h();
			},
			l(o) {
				S(e.$$.fragment, o),
					(n = L(o)),
					(t = M(o, 'SPAN', { class: !0, 'data-svelte-h': !0 })),
					it(t) !== 'svelte-1pewzs3' && (t.textContent = l),
					this.h();
			},
			h() {
				N(t, 'class', 'sr-only');
			},
			m(o, a) {
				C(e, o, a), v(o, n, a), v(o, t, a), (r = !0);
			},
			p: we,
			i(o) {
				r || (m(e.$$.fragment, o), (r = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (r = !1);
			},
			d(o) {
				o && (_(n), _(t)), k(e, o);
			}
		}
	);
}
function Gm(s) {
	let e, n, t;
	const l = s[4].default,
		r = ae(l, s, s[5], null);
	return (
		(n = new Jo({
			props: {
				class:
					'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
				$$slots: { default: [Qm] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				r && r.c(), (e = q()), E(n.$$.fragment);
			},
			l(o) {
				r && r.l(o), (e = L(o)), S(n.$$.fragment, o);
			},
			m(o, a) {
				r && r.m(o, a), v(o, e, a), C(n, o, a), (t = !0);
			},
			p(o, a) {
				r && r.p && (!t || a & 32) && ue(r, l, o, o[5], t ? ce(l, o[5], a, null) : fe(o[5]), null);
				const i = {};
				a & 32 && (i.$$scope = { dirty: a, ctx: o }), n.$set(i);
			},
			i(o) {
				t || (m(r, o), m(n.$$.fragment, o), (t = !0));
			},
			o(o) {
				g(r, o), g(n.$$.fragment, o), (t = !1);
			},
			d(o) {
				o && _(e), r && r.d(o), k(n, o);
			}
		}
	);
}
function Wm(s) {
	let e, n, t, l;
	e = new Fm({});
	const r = [
		{ transition: s[1] },
		{ transitionConfig: s[2] },
		{
			class: ve(
				'fixed z-50 grid w-full gap-4 border bg-background p-6 shadow-lg rounded-lg max-w-full max-h-full',
				s[0]
			)
		},
		s[3]
	];
	let o = { $$slots: { default: [Gm] }, $$scope: { ctx: s } };
	for (let a = 0; a < r.length; a += 1) o = D(o, r[a]);
	return (
		(t = new Yo({ props: o })),
		{
			c() {
				E(e.$$.fragment), (n = q()), E(t.$$.fragment);
			},
			l(a) {
				S(e.$$.fragment, a), (n = L(a)), S(t.$$.fragment, a);
			},
			m(a, i) {
				C(e, a, i), v(a, n, i), C(t, a, i), (l = !0);
			},
			p(a, i) {
				const u =
					i & 15
						? ge(r, [
								i & 2 && { transition: a[1] },
								i & 4 && { transitionConfig: a[2] },
								i & 1 && {
									class: ve(
										'fixed z-50 grid w-full gap-4 border bg-background p-6 shadow-lg rounded-lg max-w-full max-h-full',
										a[0]
									)
								},
								i & 8 && Xe(a[3])
							])
						: {};
				i & 32 && (u.$$scope = { dirty: i, ctx: a }), t.$set(u);
			},
			i(a) {
				l || (m(e.$$.fragment, a), m(t.$$.fragment, a), (l = !0));
			},
			o(a) {
				g(e.$$.fragment, a), g(t.$$.fragment, a), (l = !1);
			},
			d(a) {
				a && _(n), k(e, a), k(t, a);
			}
		}
	);
}
function Jm(s) {
	let e, n;
	return (
		(e = new Im({
			props: {
				class: 'flex items-center justify-center w-full h-full z-50',
				$$slots: { default: [Wm] },
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
				const r = {};
				l & 47 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function Xm(s, e, n) {
	const t = ['class', 'transition', 'transitionConfig'];
	let l = ne(e, t),
		{ $$slots: r = {}, $$scope: o } = e,
		{ class: a = void 0 } = e,
		{ transition: i = jo } = e,
		{ transitionConfig: u = { duration: 200 } } = e;
	return (
		(s.$$set = (f) => {
			(e = D(D({}, e), Ce(f))),
				n(3, (l = ne(e, t))),
				'class' in f && n(0, (a = f.class)),
				'transition' in f && n(1, (i = f.transition)),
				'transitionConfig' in f && n(2, (u = f.transitionConfig)),
				'$$scope' in f && n(5, (o = f.$$scope));
		}),
		[a, i, u, l, r, o]
	);
}
class si extends pe {
	constructor(e) {
		super(), $e(this, e, Xm, Jm, me, { class: 0, transition: 1, transitionConfig: 2 });
	}
}
const ri = Wo,
	Ym = xo;
function Zm(s) {
	let e, n;
	const t = [
		{
			class: ve(
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
	for (let r = 0; r < t.length; r += 1) l = D(l, t[r]);
	return (
		(e = new uc({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), (n = !0);
			},
			p(r, [o]) {
				const a =
					o & 15
						? ge(t, [
								o & 3 && {
									class: ve(
										'shrink-0 bg-border',
										r[1] === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
										r[0]
									)
								},
								o & 2 && { orientation: r[1] },
								o & 4 && { decorative: r[2] },
								o & 8 && Xe(r[3])
							])
						: {};
				e.$set(a);
			},
			i(r) {
				n || (m(e.$$.fragment, r), (n = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (n = !1);
			},
			d(r) {
				k(e, r);
			}
		}
	);
}
function xm(s, e, n) {
	const t = ['class', 'orientation', 'decorative'];
	let l = ne(e, t),
		{ class: r = void 0 } = e,
		{ orientation: o = 'horizontal' } = e,
		{ decorative: a = void 0 } = e;
	return (
		(s.$$set = (i) => {
			(e = D(D({}, e), Ce(i))),
				n(3, (l = ne(e, t))),
				'class' in i && n(0, (r = i.class)),
				'orientation' in i && n(1, (o = i.orientation)),
				'decorative' in i && n(2, (a = i.decorative));
		}),
		[r, o, a, l]
	);
}
class e_ extends pe {
	constructor(e) {
		super(), $e(this, e, xm, Zm, me, { class: 0, orientation: 1, decorative: 2 });
	}
}
function t_(s) {
	let e;
	const n = s[3].default,
		t = ae(n, s, s[4], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 16) && ue(t, n, l, l[4], e ? ce(n, l[4], r, null) : fe(l[4]), null);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function n_(s) {
	let e, n;
	const t = [
		{
			class: ve(
				'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
				s[0]
			)
		},
		{ value: s[1] },
		s[2]
	];
	let l = { $$slots: { default: [t_] }, $$scope: { ctx: s } };
	for (let r = 0; r < t.length; r += 1) l = D(l, t[r]);
	return (
		(e = new ed({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), (n = !0);
			},
			p(r, [o]) {
				const a =
					o & 7
						? ge(t, [
								o & 1 && {
									class: ve(
										'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
										r[0]
									)
								},
								o & 2 && { value: r[1] },
								o & 4 && Xe(r[2])
							])
						: {};
				o & 16 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
			},
			i(r) {
				n || (m(e.$$.fragment, r), (n = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (n = !1);
			},
			d(r) {
				k(e, r);
			}
		}
	);
}
function l_(s, e, n) {
	const t = ['class', 'value'];
	let l = ne(e, t),
		{ $$slots: r = {}, $$scope: o } = e,
		{ class: a = void 0 } = e,
		{ value: i } = e;
	return (
		(s.$$set = (u) => {
			(e = D(D({}, e), Ce(u))),
				n(2, (l = ne(e, t))),
				'class' in u && n(0, (a = u.class)),
				'value' in u && n(1, (i = u.value)),
				'$$scope' in u && n(4, (o = u.$$scope));
		}),
		[a, i, l, r, o]
	);
}
class s_ extends pe {
	constructor(e) {
		super(), $e(this, e, l_, n_, me, { class: 0, value: 1 });
	}
}
function r_(s) {
	let e;
	const n = s[2].default,
		t = ae(n, s, s[3], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 8) && ue(t, n, l, l[3], e ? ce(n, l[3], r, null) : fe(l[3]), null);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function o_(s) {
	let e, n;
	const t = [
		{
			class: ve(
				'inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
				s[0]
			)
		},
		s[1]
	];
	let l = { $$slots: { default: [r_] }, $$scope: { ctx: s } };
	for (let r = 0; r < t.length; r += 1) l = D(l, t[r]);
	return (
		(e = new id({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), (n = !0);
			},
			p(r, [o]) {
				const a =
					o & 3
						? ge(t, [
								o & 1 && {
									class: ve(
										'inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
										r[0]
									)
								},
								o & 2 && Xe(r[1])
							])
						: {};
				o & 8 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
			},
			i(r) {
				n || (m(e.$$.fragment, r), (n = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (n = !1);
			},
			d(r) {
				k(e, r);
			}
		}
	);
}
function i_(s, e, n) {
	const t = ['class'];
	let l = ne(e, t),
		{ $$slots: r = {}, $$scope: o } = e,
		{ class: a = void 0 } = e;
	return (
		(s.$$set = (i) => {
			(e = D(D({}, e), Ce(i))),
				n(1, (l = ne(e, t))),
				'class' in i && n(0, (a = i.class)),
				'$$scope' in i && n(3, (o = i.$$scope));
		}),
		[a, l, r, o]
	);
}
class a_ extends pe {
	constructor(e) {
		super(), $e(this, e, i_, o_, me, { class: 0 });
	}
}
function u_(s) {
	let e;
	const n = s[3].default,
		t = ae(n, s, s[7], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 128) && ue(t, n, l, l[7], e ? ce(n, l[7], r, null) : fe(l[7]), null);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function f_(s) {
	let e, n;
	const t = [
		{
			class: ve(
				'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground',
				s[0]
			)
		},
		{ value: s[1] },
		s[2]
	];
	let l = { $$slots: { default: [u_] }, $$scope: { ctx: s } };
	for (let r = 0; r < t.length; r += 1) l = D(l, t[r]);
	return (
		(e = new _d({ props: l })),
		e.$on('click', s[4]),
		e.$on('keydown', s[5]),
		e.$on('focus', s[6]),
		{
			c() {
				E(e.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), (n = !0);
			},
			p(r, [o]) {
				const a =
					o & 7
						? ge(t, [
								o & 1 && {
									class: ve(
										'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground',
										r[0]
									)
								},
								o & 2 && { value: r[1] },
								o & 4 && Xe(r[2])
							])
						: {};
				o & 128 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
			},
			i(r) {
				n || (m(e.$$.fragment, r), (n = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (n = !1);
			},
			d(r) {
				k(e, r);
			}
		}
	);
}
function c_(s, e, n) {
	const t = ['class', 'value'];
	let l = ne(e, t),
		{ $$slots: r = {}, $$scope: o } = e,
		{ class: a = void 0 } = e,
		{ value: i } = e;
	function u(h) {
		ke.call(this, s, h);
	}
	function f(h) {
		ke.call(this, s, h);
	}
	function c(h) {
		ke.call(this, s, h);
	}
	return (
		(s.$$set = (h) => {
			(e = D(D({}, e), Ce(h))),
				n(2, (l = ne(e, t))),
				'class' in h && n(0, (a = h.class)),
				'value' in h && n(1, (i = h.value)),
				'$$scope' in h && n(7, (o = h.$$scope));
		}),
		[a, i, l, r, u, f, c, o]
	);
}
class d_ extends pe {
	constructor(e) {
		super(), $e(this, e, c_, f_, me, { class: 0, value: 1 });
	}
}
const m_ = Gc;
function __(s) {
	let e, n;
	return (
		(e = new Bm({ props: { class: 'h-4 w-4' } })),
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
			p: we,
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function h_(s) {
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
			v(t, n, l);
		},
		p(t, l) {
			l & 6 && e !== (e = (t[2] ? t[2] : t[1]) + '') && dt(n, e);
		},
		d(t) {
			t && _(n);
		}
	};
}
function g_(s) {
	let e, n, t, l;
	n = new tc({ props: { $$slots: { default: [__] }, $$scope: { ctx: s } } });
	const r = s[5].default,
		o = ae(r, s, s[9], null),
		a = o || h_(s);
	return {
		c() {
			(e = R('span')), E(n.$$.fragment), (t = q()), a && a.c(), this.h();
		},
		l(i) {
			e = M(i, 'SPAN', { class: !0 });
			var u = K(e);
			S(n.$$.fragment, u), u.forEach(_), (t = L(i)), a && a.l(i), this.h();
		},
		h() {
			N(e, 'class', 'absolute right-2 flex h-3.5 w-3.5 items-center justify-center');
		},
		m(i, u) {
			v(i, e, u), C(n, e, null), v(i, t, u), a && a.m(i, u), (l = !0);
		},
		p(i, u) {
			const f = {};
			u & 512 && (f.$$scope = { dirty: u, ctx: i }),
				n.$set(f),
				o
					? o.p && (!l || u & 512) && ue(o, r, i, i[9], l ? ce(r, i[9], u, null) : fe(i[9]), null)
					: a && a.p && (!l || u & 6) && a.p(i, l ? u : -1);
		},
		i(i) {
			l || (m(n.$$.fragment, i), m(a, i), (l = !0));
		},
		o(i) {
			g(n.$$.fragment, i), g(a, i), (l = !1);
		},
		d(i) {
			i && (_(e), _(t)), k(n), a && a.d(i);
		}
	};
}
function p_(s) {
	let e, n;
	const t = [
		{ value: s[1] },
		{ disabled: s[3] },
		{ label: s[2] },
		{
			class: ve(
				'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1 pl-2 pr-8 text-xs outline-none data-[disabled]:pointer-events-none text-secondary-foreground/85 data-[highlighted]:bg-accent data-[highlighted]:text-foreground data-[disabled]:opacity-50',
				s[0]
			)
		},
		s[4]
	];
	let l = { $$slots: { default: [g_] }, $$scope: { ctx: s } };
	for (let r = 0; r < t.length; r += 1) l = D(l, t[r]);
	return (
		(e = new Wf({ props: l })),
		e.$on('click', s[6]),
		e.$on('pointermove', s[7]),
		e.$on('focusin', s[8]),
		{
			c() {
				E(e.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), (n = !0);
			},
			p(r, [o]) {
				const a =
					o & 31
						? ge(t, [
								o & 2 && { value: r[1] },
								o & 8 && { disabled: r[3] },
								o & 4 && { label: r[2] },
								o & 1 && {
									class: ve(
										'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1 pl-2 pr-8 text-xs outline-none data-[disabled]:pointer-events-none text-secondary-foreground/85 data-[highlighted]:bg-accent data-[highlighted]:text-foreground data-[disabled]:opacity-50',
										r[0]
									)
								},
								o & 16 && Xe(r[4])
							])
						: {};
				o & 518 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
			},
			i(r) {
				n || (m(e.$$.fragment, r), (n = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (n = !1);
			},
			d(r) {
				k(e, r);
			}
		}
	);
}
function $_(s, e, n) {
	const t = ['class', 'value', 'label', 'disabled'];
	let l = ne(e, t),
		{ $$slots: r = {}, $$scope: o } = e,
		{ class: a = void 0 } = e,
		{ value: i } = e,
		{ label: u = void 0 } = e,
		{ disabled: f = void 0 } = e;
	function c($) {
		ke.call(this, s, $);
	}
	function h($) {
		ke.call(this, s, $);
	}
	function d($) {
		ke.call(this, s, $);
	}
	return (
		(s.$$set = ($) => {
			(e = D(D({}, e), Ce($))),
				n(4, (l = ne(e, t))),
				'class' in $ && n(0, (a = $.class)),
				'value' in $ && n(1, (i = $.value)),
				'label' in $ && n(2, (u = $.label)),
				'disabled' in $ && n(3, (f = $.disabled)),
				'$$scope' in $ && n(9, (o = $.$$scope));
		}),
		[a, i, u, f, l, r, c, h, d, o]
	);
}
class je extends pe {
	constructor(e) {
		super(), $e(this, e, $_, p_, me, { class: 0, value: 1, label: 2, disabled: 3 });
	}
}
function b_(s) {
	let e, n;
	const t = s[7].default,
		l = ae(t, s, s[8], null);
	return {
		c() {
			(e = R('div')), l && l.c(), this.h();
		},
		l(r) {
			e = M(r, 'DIV', { class: !0 });
			var o = K(e);
			l && l.l(o), o.forEach(_), this.h();
		},
		h() {
			N(e, 'class', 'w-full p-1');
		},
		m(r, o) {
			v(r, e, o), l && l.m(e, null), (n = !0);
		},
		p(r, o) {
			l && l.p && (!n || o & 256) && ue(l, t, r, r[8], n ? ce(t, r[8], o, null) : fe(r[8]), null);
		},
		i(r) {
			n || (m(l, r), (n = !0));
		},
		o(r) {
			g(l, r), (n = !1);
		},
		d(r) {
			r && _(e), l && l.d(r);
		}
	};
}
function v_(s) {
	let e, n;
	const t = [
		{ inTransition: s[2] },
		{ inTransitionConfig: s[3] },
		{ outTransition: s[4] },
		{ outTransitionConfig: s[5] },
		{ sideOffset: s[1] },
		{
			class: ve(
				'relative z-50 min-w-[8rem] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md focus:outline-none',
				s[0]
			)
		},
		s[6]
	];
	let l = { $$slots: { default: [b_] }, $$scope: { ctx: s } };
	for (let r = 0; r < t.length; r += 1) l = D(l, t[r]);
	return (
		(e = new jf({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), (n = !0);
			},
			p(r, [o]) {
				const a =
					o & 127
						? ge(t, [
								o & 4 && { inTransition: r[2] },
								o & 8 && { inTransitionConfig: r[3] },
								o & 16 && { outTransition: r[4] },
								o & 32 && { outTransitionConfig: r[5] },
								o & 2 && { sideOffset: r[1] },
								o & 1 && {
									class: ve(
										'relative z-50 min-w-[8rem] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md focus:outline-none',
										r[0]
									)
								},
								o & 64 && Xe(r[6])
							])
						: {};
				o & 256 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
			},
			i(r) {
				n || (m(e.$$.fragment, r), (n = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (n = !1);
			},
			d(r) {
				k(e, r);
			}
		}
	);
}
function k_(s, e, n) {
	const t = [
		'class',
		'sideOffset',
		'inTransition',
		'inTransitionConfig',
		'outTransition',
		'outTransitionConfig'
	];
	let l = ne(e, t),
		{ $$slots: r = {}, $$scope: o } = e,
		{ class: a = void 0 } = e,
		{ sideOffset: i = 4 } = e,
		{ inTransition: u = jo } = e,
		{ inTransitionConfig: f = void 0 } = e,
		{ outTransition: c = ga } = e,
		{ outTransitionConfig: h = { start: 0.95, opacity: 0, duration: 50 } } = e;
	return (
		(s.$$set = (d) => {
			(e = D(D({}, e), Ce(d))),
				n(6, (l = ne(e, t))),
				'class' in d && n(0, (a = d.class)),
				'sideOffset' in d && n(1, (i = d.sideOffset)),
				'inTransition' in d && n(2, (u = d.inTransition)),
				'inTransitionConfig' in d && n(3, (f = d.inTransitionConfig)),
				'outTransition' in d && n(4, (c = d.outTransition)),
				'outTransitionConfig' in d && n(5, (h = d.outTransitionConfig)),
				'$$scope' in d && n(8, (o = d.$$scope));
		}),
		[a, i, u, f, c, h, l, r, o]
	);
}
class An extends pe {
	constructor(e) {
		super(),
			$e(this, e, k_, v_, me, {
				class: 0,
				sideOffset: 1,
				inTransition: 2,
				inTransitionConfig: 3,
				outTransition: 4,
				outTransitionConfig: 5
			});
	}
}
function C_(s) {
	let e, n, t, l;
	const r = s[2].default,
		o = ae(r, s, s[3], null);
	return (
		(t = new qm({ props: { class: 'h-4 w-4 opacity-50' } })),
		{
			c() {
				o && o.c(), (e = q()), (n = R('div')), E(t.$$.fragment);
			},
			l(a) {
				o && o.l(a), (e = L(a)), (n = M(a, 'DIV', {}));
				var i = K(n);
				S(t.$$.fragment, i), i.forEach(_);
			},
			m(a, i) {
				o && o.m(a, i), v(a, e, i), v(a, n, i), C(t, n, null), (l = !0);
			},
			p(a, i) {
				o && o.p && (!l || i & 8) && ue(o, r, a, a[3], l ? ce(r, a[3], i, null) : fe(a[3]), null);
			},
			i(a) {
				l || (m(o, a), m(t.$$.fragment, a), (l = !0));
			},
			o(a) {
				g(o, a), g(t.$$.fragment, a), (l = !1);
			},
			d(a) {
				a && (_(e), _(n)), o && o.d(a), k(t);
			}
		}
	);
}
function E_(s) {
	let e, n;
	const t = [
		{
			class: ve(
				'flex h-7 w-fit gap-2.5 items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 text-xs shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
				s[0]
			)
		},
		s[1]
	];
	let l = { $$slots: { default: [C_] }, $$scope: { ctx: s } };
	for (let r = 0; r < t.length; r += 1) l = D(l, t[r]);
	return (
		(e = new gc({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), (n = !0);
			},
			p(r, [o]) {
				const a =
					o & 3
						? ge(t, [
								o & 1 && {
									class: ve(
										'flex h-7 w-fit gap-2.5 items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 text-xs shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
										r[0]
									)
								},
								o & 2 && Xe(r[1])
							])
						: {};
				o & 8 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
			},
			i(r) {
				n || (m(e.$$.fragment, r), (n = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (n = !1);
			},
			d(r) {
				k(e, r);
			}
		}
	);
}
function S_(s, e, n) {
	const t = ['class'];
	let l = ne(e, t),
		{ $$slots: r = {}, $$scope: o } = e,
		{ class: a = void 0 } = e;
	return (
		(s.$$set = (i) => {
			(e = D(D({}, e), Ce(i))),
				n(1, (l = ne(e, t))),
				'class' in i && n(0, (a = i.class)),
				'$$scope' in i && n(3, (o = i.$$scope));
		}),
		[a, l, r, o]
	);
}
class On extends pe {
	constructor(e) {
		super(), $e(this, e, S_, E_, me, { class: 0 });
	}
}
const Sn = wf,
	Pn = Cc;
function w_(s) {
	let e;
	return {
		c() {
			e = X('Color scheme');
		},
		l(n) {
			e = J(n, 'Color scheme');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function y_(s) {
	let e, n;
	return (
		(e = new He({ props: { name: 'monitor', class: 'w-4 h-4' } })),
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
			p: we,
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
	let e, n;
	return (
		(e = new nt({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: ve(
					'h-7 w-7 fill-muted-foreground hover:fill-foreground',
					s[2] === 'system' && 'bg-accent fill-foreground'
				),
				scale: 'md',
				$$slots: { default: [y_] },
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
				const r = {};
				l & 4 &&
					(r.class = ve(
						'h-7 w-7 fill-muted-foreground hover:fill-foreground',
						t[2] === 'system' && 'bg-accent fill-foreground'
					)),
					l & 256 && (r.$$scope = { dirty: l, ctx: t }),
					e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function A_(s) {
	let e, n;
	return (
		(e = new He({ props: { name: 'sun', class: 'w-4 h-4' } })),
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
			p: we,
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function O_(s) {
	let e, n;
	return (
		(e = new nt({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: ve(
					'h-7 w-7 fill-muted-foreground hover:fill-foreground',
					s[2] === 'light' && 'bg-accent fill-foreground'
				),
				scale: 'md',
				$$slots: { default: [A_] },
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
				const r = {};
				l & 4 &&
					(r.class = ve(
						'h-7 w-7 fill-muted-foreground hover:fill-foreground',
						t[2] === 'light' && 'bg-accent fill-foreground'
					)),
					l & 256 && (r.$$scope = { dirty: l, ctx: t }),
					e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function P_(s) {
	let e, n;
	return (
		(e = new He({ props: { name: 'moon', class: 'w-4 h-4' } })),
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
			p: we,
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function N_(s) {
	let e, n;
	return (
		(e = new nt({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: ve(
					'h-7 w-7 fill-muted-foreground hover:fill-foreground',
					s[2] === 'dark' && 'bg-accent fill-foreground'
				),
				scale: 'md',
				$$slots: { default: [P_] },
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
				const r = {};
				l & 4 &&
					(r.class = ve(
						'h-7 w-7 fill-muted-foreground hover:fill-foreground',
						t[2] === 'dark' && 'bg-accent fill-foreground'
					)),
					l & 256 && (r.$$scope = { dirty: l, ctx: t }),
					e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function D_(s) {
	let e;
	return {
		c() {
			e = X('Theme');
		},
		l(n) {
			e = J(n, 'Theme');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function I_(s) {
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
			v(t, n, l);
		},
		p(t, l) {
			l & 1 && e !== (e = t[0].label + '') && dt(n, e);
		},
		d(t) {
			t && _(n);
		}
	};
}
function M_(s) {
	let e, n;
	return (
		(e = new Pn({
			props: {
				class: 'text-sm text-foreground/85',
				$$slots: { default: [I_] },
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
				const r = {};
				l & 257 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
			e = X('Typyst');
		},
		l(n) {
			e = J(n, 'Typyst');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function F_(s) {
	let e, n;
	return (
		(e = new je({ props: { value: 'typyst', $$slots: { default: [R_] }, $$scope: { ctx: s } } })),
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
				const r = {};
				l & 256 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function V_(s) {
	let e, n, t, l;
	return (
		(e = new On({ props: { $$slots: { default: [M_] }, $$scope: { ctx: s } } })),
		(t = new An({ props: { $$slots: { default: [F_] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment), (n = q()), E(t.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r), (n = L(r)), S(t.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), v(r, n, o), C(t, r, o), (l = !0);
			},
			p(r, o) {
				const a = {};
				o & 257 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
				const i = {};
				o & 256 && (i.$$scope = { dirty: o, ctx: r }), t.$set(i);
			},
			i(r) {
				l || (m(e.$$.fragment, r), m(t.$$.fragment, r), (l = !0));
			},
			o(r) {
				g(e.$$.fragment, r), g(t.$$.fragment, r), (l = !1);
			},
			d(r) {
				r && _(n), k(e, r), k(t, r);
			}
		}
	);
}
function L_(s) {
	let e;
	return {
		c() {
			e = X('Browse');
		},
		l(n) {
			e = J(n, 'Browse');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function q_(s) {
	let e;
	return {
		c() {
			e = X('Fonts');
		},
		l(n) {
			e = J(n, 'Fonts');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function j_(s) {
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
			v(t, n, l);
		},
		p(t, l) {
			l & 2 && e !== (e = t[1].label + '') && dt(n, e);
		},
		d(t) {
			t && _(n);
		}
	};
}
function K_(s) {
	let e, n;
	return (
		(e = new Pn({
			props: {
				class: 'text-sm text-foreground/85',
				$$slots: { default: [j_] },
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
				const r = {};
				l & 258 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function B_(s) {
	let e;
	return {
		c() {
			e = X('Inter');
		},
		l(n) {
			e = J(n, 'Inter');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function U_(s) {
	let e;
	return {
		c() {
			e = X('Roboto');
		},
		l(n) {
			e = J(n, 'Roboto');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function z_(s) {
	let e;
	return {
		c() {
			e = X('Lato');
		},
		l(n) {
			e = J(n, 'Lato');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function H_(s) {
	let e;
	return {
		c() {
			e = X('Poppins');
		},
		l(n) {
			e = J(n, 'Poppins');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function Q_(s) {
	let e;
	return {
		c() {
			e = X('Nunito');
		},
		l(n) {
			e = J(n, 'Nunito');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function G_(s) {
	let e;
	return {
		c() {
			e = X('Open Sans');
		},
		l(n) {
			e = J(n, 'Open Sans');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function W_(s) {
	let e, n, t, l, r, o, a, i, u, f, c, h;
	return (
		(e = new je({ props: { value: 'inter', $$slots: { default: [B_] }, $$scope: { ctx: s } } })),
		(t = new je({ props: { value: 'roboto', $$slots: { default: [U_] }, $$scope: { ctx: s } } })),
		(r = new je({ props: { value: 'lato', $$slots: { default: [z_] }, $$scope: { ctx: s } } })),
		(a = new je({ props: { value: 'poppins', $$slots: { default: [H_] }, $$scope: { ctx: s } } })),
		(u = new je({ props: { value: 'nunito', $$slots: { default: [Q_] }, $$scope: { ctx: s } } })),
		(c = new je({ props: { value: 'openSans', $$slots: { default: [G_] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment),
					(n = q()),
					E(t.$$.fragment),
					(l = q()),
					E(r.$$.fragment),
					(o = q()),
					E(a.$$.fragment),
					(i = q()),
					E(u.$$.fragment),
					(f = q()),
					E(c.$$.fragment);
			},
			l(d) {
				S(e.$$.fragment, d),
					(n = L(d)),
					S(t.$$.fragment, d),
					(l = L(d)),
					S(r.$$.fragment, d),
					(o = L(d)),
					S(a.$$.fragment, d),
					(i = L(d)),
					S(u.$$.fragment, d),
					(f = L(d)),
					S(c.$$.fragment, d);
			},
			m(d, $) {
				C(e, d, $),
					v(d, n, $),
					C(t, d, $),
					v(d, l, $),
					C(r, d, $),
					v(d, o, $),
					C(a, d, $),
					v(d, i, $),
					C(u, d, $),
					v(d, f, $),
					C(c, d, $),
					(h = !0);
			},
			p(d, $) {
				const p = {};
				$ & 256 && (p.$$scope = { dirty: $, ctx: d }), e.$set(p);
				const b = {};
				$ & 256 && (b.$$scope = { dirty: $, ctx: d }), t.$set(b);
				const w = {};
				$ & 256 && (w.$$scope = { dirty: $, ctx: d }), r.$set(w);
				const y = {};
				$ & 256 && (y.$$scope = { dirty: $, ctx: d }), a.$set(y);
				const I = {};
				$ & 256 && (I.$$scope = { dirty: $, ctx: d }), u.$set(I);
				const Q = {};
				$ & 256 && (Q.$$scope = { dirty: $, ctx: d }), c.$set(Q);
			},
			i(d) {
				h ||
					(m(e.$$.fragment, d),
					m(t.$$.fragment, d),
					m(r.$$.fragment, d),
					m(a.$$.fragment, d),
					m(u.$$.fragment, d),
					m(c.$$.fragment, d),
					(h = !0));
			},
			o(d) {
				g(e.$$.fragment, d),
					g(t.$$.fragment, d),
					g(r.$$.fragment, d),
					g(a.$$.fragment, d),
					g(u.$$.fragment, d),
					g(c.$$.fragment, d),
					(h = !1);
			},
			d(d) {
				d && (_(n), _(l), _(o), _(i), _(f)), k(e, d), k(t, d), k(r, d), k(a, d), k(u, d), k(c, d);
			}
		}
	);
}
function J_(s) {
	let e, n, t, l;
	return (
		(e = new On({ props: { $$slots: { default: [K_] }, $$scope: { ctx: s } } })),
		(t = new An({ props: { $$slots: { default: [W_] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment), (n = q()), E(t.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r), (n = L(r)), S(t.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), v(r, n, o), C(t, r, o), (l = !0);
			},
			p(r, o) {
				const a = {};
				o & 258 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
				const i = {};
				o & 256 && (i.$$scope = { dirty: o, ctx: r }), t.$set(i);
			},
			i(r) {
				l || (m(e.$$.fragment, r), m(t.$$.fragment, r), (l = !0));
			},
			o(r) {
				g(e.$$.fragment, r), g(t.$$.fragment, r), (l = !1);
			},
			d(r) {
				r && _(n), k(e, r), k(t, r);
			}
		}
	);
}
function X_(s) {
	let e,
		n,
		t,
		l,
		r,
		o = 'Change the color scheme of the app.',
		a,
		i,
		u,
		f,
		c,
		h,
		d,
		$,
		p,
		b,
		w,
		y,
		I = 'Change the theme of the app.',
		Q,
		P,
		V,
		z,
		ee,
		se,
		T,
		W,
		U,
		B,
		j,
		te = 'Change the interface font.',
		F,
		H,
		G,
		Te,
		Ne;
	(t = new rt({ props: { class: 'text-sm', $$slots: { default: [w_] }, $$scope: { ctx: s } } })),
		(u = new ht({
			props: { text: 'System', side: 'bottom', $$slots: { default: [T_] }, $$scope: { ctx: s } }
		})),
		(c = new ht({
			props: { text: 'Light', side: 'bottom', $$slots: { default: [O_] }, $$scope: { ctx: s } }
		})),
		(d = new ht({
			props: { text: 'Dark', side: 'bottom', $$slots: { default: [N_] }, $$scope: { ctx: s } }
		})),
		(b = new rt({ props: { class: 'text-sm', $$slots: { default: [D_] }, $$scope: { ctx: s } } }));
	function Ie(oe) {
		s[6](oe);
	}
	let De = { $$slots: { default: [V_] }, $$scope: { ctx: s } };
	s[0] !== void 0 && (De.selected = s[0]),
		(V = new Sn({ props: De })),
		Pe.push(() => ft(V, 'selected', Ie)),
		(se = new nt({
			props: {
				variant: 'default',
				size: 'sm',
				class: 'h-7 text-primary-foreground/85 hover:text-primary-foreground text-sm font-normal',
				scale: 'sm',
				disabled: !0,
				$$slots: { default: [L_] },
				$$scope: { ctx: s }
			}
		})),
		(U = new rt({ props: { class: 'text-sm', $$slots: { default: [q_] }, $$scope: { ctx: s } } }));
	function ye(oe) {
		s[7](oe);
	}
	let re = { disabled: !0, $$slots: { default: [J_] }, $$scope: { ctx: s } };
	return (
		s[1] !== void 0 && (re.selected = s[1]),
		(G = new Sn({ props: re })),
		Pe.push(() => ft(G, 'selected', ye)),
		{
			c() {
				(e = R('div')),
					(n = R('div')),
					E(t.$$.fragment),
					(l = q()),
					(r = R('p')),
					(r.textContent = o),
					(a = q()),
					(i = R('div')),
					E(u.$$.fragment),
					(f = q()),
					E(c.$$.fragment),
					(h = q()),
					E(d.$$.fragment),
					($ = q()),
					(p = R('div')),
					E(b.$$.fragment),
					(w = q()),
					(y = R('p')),
					(y.textContent = I),
					(Q = q()),
					(P = R('div')),
					E(V.$$.fragment),
					(ee = q()),
					E(se.$$.fragment),
					(T = q()),
					(W = R('div')),
					E(U.$$.fragment),
					(B = q()),
					(j = R('p')),
					(j.textContent = te),
					(F = q()),
					(H = R('div')),
					E(G.$$.fragment),
					this.h();
			},
			l(oe) {
				e = M(oe, 'DIV', { class: !0 });
				var be = K(e);
				n = M(be, 'DIV', { class: !0 });
				var We = K(n);
				S(t.$$.fragment, We),
					(l = L(We)),
					(r = M(We, 'P', { class: !0, 'data-svelte-h': !0 })),
					it(r) !== 'svelte-s0ry01' && (r.textContent = o),
					(a = L(We)),
					(i = M(We, 'DIV', { class: !0 }));
				var Ge = K(i);
				S(u.$$.fragment, Ge),
					(f = L(Ge)),
					S(c.$$.fragment, Ge),
					(h = L(Ge)),
					S(d.$$.fragment, Ge),
					Ge.forEach(_),
					We.forEach(_),
					($ = L(be)),
					(p = M(be, 'DIV', { class: !0 }));
				var Be = K(p);
				S(b.$$.fragment, Be),
					(w = L(Be)),
					(y = M(Be, 'P', { class: !0, 'data-svelte-h': !0 })),
					it(y) !== 'svelte-utwwgq' && (y.textContent = I),
					(Q = L(Be)),
					(P = M(Be, 'DIV', { class: !0 }));
				var A = K(P);
				S(V.$$.fragment, A),
					(ee = L(A)),
					S(se.$$.fragment, A),
					A.forEach(_),
					Be.forEach(_),
					(T = L(be)),
					(W = M(be, 'DIV', { class: !0 }));
				var x = K(W);
				S(U.$$.fragment, x),
					(B = L(x)),
					(j = M(x, 'P', { class: !0, 'data-svelte-h': !0 })),
					it(j) !== 'svelte-1vsjk6s' && (j.textContent = te),
					(F = L(x)),
					(H = M(x, 'DIV', { class: !0 }));
				var Oe = K(H);
				S(G.$$.fragment, Oe), Oe.forEach(_), x.forEach(_), be.forEach(_), this.h();
			},
			h() {
				N(r, 'class', 'text-muted-foreground text-xs'),
					N(i, 'class', 'flex items-center gap-2 pt-2'),
					N(n, 'class', 'space-y-1'),
					N(y, 'class', 'text-muted-foreground text-xs'),
					N(P, 'class', 'flex items-center gap-2 pt-2'),
					N(p, 'class', 'space-y-1'),
					N(j, 'class', 'text-muted-foreground text-xs'),
					N(H, 'class', 'flex items-center gap-2 pt-2'),
					N(W, 'class', 'space-y-1'),
					N(e, 'class', 'space-y-5');
			},
			m(oe, be) {
				v(oe, e, be),
					O(e, n),
					C(t, n, null),
					O(n, l),
					O(n, r),
					O(n, a),
					O(n, i),
					C(u, i, null),
					O(i, f),
					C(c, i, null),
					O(i, h),
					C(d, i, null),
					O(e, $),
					O(e, p),
					C(b, p, null),
					O(p, w),
					O(p, y),
					O(p, Q),
					O(p, P),
					C(V, P, null),
					O(P, ee),
					C(se, P, null),
					O(e, T),
					O(e, W),
					C(U, W, null),
					O(W, B),
					O(W, j),
					O(W, F),
					O(W, H),
					C(G, H, null),
					(Ne = !0);
			},
			p(oe, [be]) {
				const We = {};
				be & 256 && (We.$$scope = { dirty: be, ctx: oe }), t.$set(We);
				const Ge = {};
				be & 260 && (Ge.$$scope = { dirty: be, ctx: oe }), u.$set(Ge);
				const Be = {};
				be & 260 && (Be.$$scope = { dirty: be, ctx: oe }), c.$set(Be);
				const A = {};
				be & 260 && (A.$$scope = { dirty: be, ctx: oe }), d.$set(A);
				const x = {};
				be & 256 && (x.$$scope = { dirty: be, ctx: oe }), b.$set(x);
				const Oe = {};
				be & 257 && (Oe.$$scope = { dirty: be, ctx: oe }),
					!z && be & 1 && ((z = !0), (Oe.selected = oe[0]), ut(() => (z = !1))),
					V.$set(Oe);
				const Le = {};
				be & 256 && (Le.$$scope = { dirty: be, ctx: oe }), se.$set(Le);
				const qe = {};
				be & 256 && (qe.$$scope = { dirty: be, ctx: oe }), U.$set(qe);
				const Re = {};
				be & 258 && (Re.$$scope = { dirty: be, ctx: oe }),
					!Te && be & 2 && ((Te = !0), (Re.selected = oe[1]), ut(() => (Te = !1))),
					G.$set(Re);
			},
			i(oe) {
				Ne ||
					(m(t.$$.fragment, oe),
					m(u.$$.fragment, oe),
					m(c.$$.fragment, oe),
					m(d.$$.fragment, oe),
					m(b.$$.fragment, oe),
					m(V.$$.fragment, oe),
					m(se.$$.fragment, oe),
					m(U.$$.fragment, oe),
					m(G.$$.fragment, oe),
					(Ne = !0));
			},
			o(oe) {
				g(t.$$.fragment, oe),
					g(u.$$.fragment, oe),
					g(c.$$.fragment, oe),
					g(d.$$.fragment, oe),
					g(b.$$.fragment, oe),
					g(V.$$.fragment, oe),
					g(se.$$.fragment, oe),
					g(U.$$.fragment, oe),
					g(G.$$.fragment, oe),
					(Ne = !1);
			},
			d(oe) {
				oe && _(e), k(t), k(u), k(c), k(d), k(b), k(V), k(se), k(U), k(G);
			}
		}
	);
}
function Y_(s, e, n) {
	let t;
	Ae(s, Zl, (c) => n(2, (t = c)));
	let l = { value: 'typyst', label: 'Typyst' },
		r = { value: 'inter', label: 'Inter' };
	const o = () => Cn('system'),
		a = () => Cn('light'),
		i = () => Cn('dark');
	function u(c) {
		(l = c), n(0, l);
	}
	function f(c) {
		(r = c), n(1, r);
	}
	return [l, r, t, o, a, i, u, f];
}
class Z_ extends pe {
	constructor(e) {
		super(), $e(this, e, Y_, X_, me, {});
	}
}
function x_(s) {
	let e, n;
	return (
		(e = new qc({
			props: {
				class: ve(
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
			p: we,
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function eh(s) {
	let e, n, t;
	const l = [
		{
			class: ve(
				'peer inline-flex h-[18px] w-[28px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
				s[1]
			)
		},
		s[2]
	];
	function r(a) {
		s[3](a);
	}
	let o = { $$slots: { default: [x_] }, $$scope: { ctx: s } };
	for (let a = 0; a < l.length; a += 1) o = D(o, l[a]);
	return (
		s[0] !== void 0 && (o.checked = s[0]),
		(e = new Ic({ props: o })),
		Pe.push(() => ft(e, 'checked', r)),
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
				const u =
					i & 6
						? ge(l, [
								i & 2 && {
									class: ve(
										'peer inline-flex h-[18px] w-[28px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
										a[1]
									)
								},
								i & 4 && Xe(a[2])
							])
						: {};
				i & 16 && (u.$$scope = { dirty: i, ctx: a }),
					!n && i & 1 && ((n = !0), (u.checked = a[0]), ut(() => (n = !1))),
					e.$set(u);
			},
			i(a) {
				t || (m(e.$$.fragment, a), (t = !0));
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
function th(s, e, n) {
	const t = ['class', 'checked'];
	let l = ne(e, t),
		{ class: r = void 0 } = e,
		{ checked: o = void 0 } = e;
	function a(i) {
		(o = i), n(0, o);
	}
	return (
		(s.$$set = (i) => {
			(e = D(D({}, e), Ce(i))),
				n(2, (l = ne(e, t))),
				'class' in i && n(1, (r = i.class)),
				'checked' in i && n(0, (o = i.checked));
		}),
		[o, r, l, a]
	);
}
class on extends pe {
	constructor(e) {
		super(), $e(this, e, th, eh, me, { class: 1, checked: 0 });
	}
}
function nh(s) {
	let e;
	return {
		c() {
			e = X('Font');
		},
		l(n) {
			e = J(n, 'Font');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function lh(s) {
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
			v(t, n, l);
		},
		p(t, l) {
			l & 1 && e !== (e = t[0].label + '') && dt(n, e);
		},
		d(t) {
			t && _(n);
		}
	};
}
function sh(s) {
	let e, n;
	return (
		(e = new Pn({
			props: {
				class: 'text-sm text-foreground/85',
				$$slots: { default: [lh] },
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
				const r = {};
				l & 2049 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function rh(s) {
	let e;
	return {
		c() {
			e = X('Inter');
		},
		l(n) {
			e = J(n, 'Inter');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function oh(s) {
	let e;
	return {
		c() {
			e = X('Roboto');
		},
		l(n) {
			e = J(n, 'Roboto');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function ih(s) {
	let e;
	return {
		c() {
			e = X('Lato');
		},
		l(n) {
			e = J(n, 'Lato');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function ah(s) {
	let e;
	return {
		c() {
			e = X('Poppins');
		},
		l(n) {
			e = J(n, 'Poppins');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function uh(s) {
	let e;
	return {
		c() {
			e = X('Nunito');
		},
		l(n) {
			e = J(n, 'Nunito');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function fh(s) {
	let e;
	return {
		c() {
			e = X('Open Sans');
		},
		l(n) {
			e = J(n, 'Open Sans');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function ch(s) {
	let e, n, t, l, r, o, a, i, u, f, c, h;
	return (
		(e = new je({ props: { value: 'inter', $$slots: { default: [rh] }, $$scope: { ctx: s } } })),
		(t = new je({ props: { value: 'roboto', $$slots: { default: [oh] }, $$scope: { ctx: s } } })),
		(r = new je({ props: { value: 'lato', $$slots: { default: [ih] }, $$scope: { ctx: s } } })),
		(a = new je({ props: { value: 'poppins', $$slots: { default: [ah] }, $$scope: { ctx: s } } })),
		(u = new je({ props: { value: 'nunito', $$slots: { default: [uh] }, $$scope: { ctx: s } } })),
		(c = new je({ props: { value: 'openSans', $$slots: { default: [fh] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment),
					(n = q()),
					E(t.$$.fragment),
					(l = q()),
					E(r.$$.fragment),
					(o = q()),
					E(a.$$.fragment),
					(i = q()),
					E(u.$$.fragment),
					(f = q()),
					E(c.$$.fragment);
			},
			l(d) {
				S(e.$$.fragment, d),
					(n = L(d)),
					S(t.$$.fragment, d),
					(l = L(d)),
					S(r.$$.fragment, d),
					(o = L(d)),
					S(a.$$.fragment, d),
					(i = L(d)),
					S(u.$$.fragment, d),
					(f = L(d)),
					S(c.$$.fragment, d);
			},
			m(d, $) {
				C(e, d, $),
					v(d, n, $),
					C(t, d, $),
					v(d, l, $),
					C(r, d, $),
					v(d, o, $),
					C(a, d, $),
					v(d, i, $),
					C(u, d, $),
					v(d, f, $),
					C(c, d, $),
					(h = !0);
			},
			p(d, $) {
				const p = {};
				$ & 2048 && (p.$$scope = { dirty: $, ctx: d }), e.$set(p);
				const b = {};
				$ & 2048 && (b.$$scope = { dirty: $, ctx: d }), t.$set(b);
				const w = {};
				$ & 2048 && (w.$$scope = { dirty: $, ctx: d }), r.$set(w);
				const y = {};
				$ & 2048 && (y.$$scope = { dirty: $, ctx: d }), a.$set(y);
				const I = {};
				$ & 2048 && (I.$$scope = { dirty: $, ctx: d }), u.$set(I);
				const Q = {};
				$ & 2048 && (Q.$$scope = { dirty: $, ctx: d }), c.$set(Q);
			},
			i(d) {
				h ||
					(m(e.$$.fragment, d),
					m(t.$$.fragment, d),
					m(r.$$.fragment, d),
					m(a.$$.fragment, d),
					m(u.$$.fragment, d),
					m(c.$$.fragment, d),
					(h = !0));
			},
			o(d) {
				g(e.$$.fragment, d),
					g(t.$$.fragment, d),
					g(r.$$.fragment, d),
					g(a.$$.fragment, d),
					g(u.$$.fragment, d),
					g(c.$$.fragment, d),
					(h = !1);
			},
			d(d) {
				d && (_(n), _(l), _(o), _(i), _(f)), k(e, d), k(t, d), k(r, d), k(a, d), k(u, d), k(c, d);
			}
		}
	);
}
function dh(s) {
	let e, n, t, l;
	return (
		(e = new On({ props: { $$slots: { default: [sh] }, $$scope: { ctx: s } } })),
		(t = new An({ props: { $$slots: { default: [ch] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment), (n = q()), E(t.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r), (n = L(r)), S(t.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), v(r, n, o), C(t, r, o), (l = !0);
			},
			p(r, o) {
				const a = {};
				o & 2049 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
				const i = {};
				o & 2048 && (i.$$scope = { dirty: o, ctx: r }), t.$set(i);
			},
			i(r) {
				l || (m(e.$$.fragment, r), m(t.$$.fragment, r), (l = !0));
			},
			o(r) {
				g(e.$$.fragment, r), g(t.$$.fragment, r), (l = !1);
			},
			d(r) {
				r && _(n), k(e, r), k(t, r);
			}
		}
	);
}
function mh(s) {
	let e;
	return {
		c() {
			e = X('Font size');
		},
		l(n) {
			e = J(n, 'Font size');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function _h(s) {
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
			v(t, n, l);
		},
		p(t, l) {
			l & 2 && e !== (e = t[1].label + '') && dt(n, e);
		},
		d(t) {
			t && _(n);
		}
	};
}
function hh(s) {
	let e, n;
	return (
		(e = new Pn({
			props: {
				class: 'text-sm text-foreground/85',
				$$slots: { default: [_h] },
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
				const r = {};
				l & 2050 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function gh(s) {
	let e;
	return {
		c() {
			e = X('Smaller');
		},
		l(n) {
			e = J(n, 'Smaller');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function ph(s) {
	let e;
	return {
		c() {
			e = X('Small');
		},
		l(n) {
			e = J(n, 'Small');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function $h(s) {
	let e;
	return {
		c() {
			e = X('Normal');
		},
		l(n) {
			e = J(n, 'Normal');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function bh(s) {
	let e;
	return {
		c() {
			e = X('Large');
		},
		l(n) {
			e = J(n, 'Large');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function vh(s) {
	let e;
	return {
		c() {
			e = X('Larger');
		},
		l(n) {
			e = J(n, 'Larger');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function kh(s) {
	let e, n, t, l, r, o, a, i, u, f;
	return (
		(e = new je({ props: { value: 'smaller', $$slots: { default: [gh] }, $$scope: { ctx: s } } })),
		(t = new je({ props: { value: 'small', $$slots: { default: [ph] }, $$scope: { ctx: s } } })),
		(r = new je({ props: { value: 'normal', $$slots: { default: [$h] }, $$scope: { ctx: s } } })),
		(a = new je({ props: { value: 'large', $$slots: { default: [bh] }, $$scope: { ctx: s } } })),
		(u = new je({ props: { value: 'larger', $$slots: { default: [vh] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment),
					(n = q()),
					E(t.$$.fragment),
					(l = q()),
					E(r.$$.fragment),
					(o = q()),
					E(a.$$.fragment),
					(i = q()),
					E(u.$$.fragment);
			},
			l(c) {
				S(e.$$.fragment, c),
					(n = L(c)),
					S(t.$$.fragment, c),
					(l = L(c)),
					S(r.$$.fragment, c),
					(o = L(c)),
					S(a.$$.fragment, c),
					(i = L(c)),
					S(u.$$.fragment, c);
			},
			m(c, h) {
				C(e, c, h),
					v(c, n, h),
					C(t, c, h),
					v(c, l, h),
					C(r, c, h),
					v(c, o, h),
					C(a, c, h),
					v(c, i, h),
					C(u, c, h),
					(f = !0);
			},
			p(c, h) {
				const d = {};
				h & 2048 && (d.$$scope = { dirty: h, ctx: c }), e.$set(d);
				const $ = {};
				h & 2048 && ($.$$scope = { dirty: h, ctx: c }), t.$set($);
				const p = {};
				h & 2048 && (p.$$scope = { dirty: h, ctx: c }), r.$set(p);
				const b = {};
				h & 2048 && (b.$$scope = { dirty: h, ctx: c }), a.$set(b);
				const w = {};
				h & 2048 && (w.$$scope = { dirty: h, ctx: c }), u.$set(w);
			},
			i(c) {
				f ||
					(m(e.$$.fragment, c),
					m(t.$$.fragment, c),
					m(r.$$.fragment, c),
					m(a.$$.fragment, c),
					m(u.$$.fragment, c),
					(f = !0));
			},
			o(c) {
				g(e.$$.fragment, c),
					g(t.$$.fragment, c),
					g(r.$$.fragment, c),
					g(a.$$.fragment, c),
					g(u.$$.fragment, c),
					(f = !1);
			},
			d(c) {
				c && (_(n), _(l), _(o), _(i)), k(e, c), k(t, c), k(r, c), k(a, c), k(u, c);
			}
		}
	);
}
function Ch(s) {
	let e, n, t, l;
	return (
		(e = new On({ props: { $$slots: { default: [hh] }, $$scope: { ctx: s } } })),
		(t = new An({ props: { $$slots: { default: [kh] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment), (n = q()), E(t.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r), (n = L(r)), S(t.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), v(r, n, o), C(t, r, o), (l = !0);
			},
			p(r, o) {
				const a = {};
				o & 2050 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
				const i = {};
				o & 2048 && (i.$$scope = { dirty: o, ctx: r }), t.$set(i);
			},
			i(r) {
				l || (m(e.$$.fragment, r), m(t.$$.fragment, r), (l = !0));
			},
			o(r) {
				g(e.$$.fragment, r), g(t.$$.fragment, r), (l = !1);
			},
			d(r) {
				r && _(n), k(e, r), k(t, r);
			}
		}
	);
}
function Eh(s) {
	let e;
	return {
		c() {
			e = X('Text correction');
		},
		l(n) {
			e = J(n, 'Text correction');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function Sh(s) {
	let e;
	return {
		c() {
			e = X('Auto Correct');
		},
		l(n) {
			e = J(n, 'Auto Correct');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function wh(s) {
	let e;
	return {
		c() {
			e = X('Spell Check');
		},
		l(n) {
			e = J(n, 'Spell Check');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function yh(s) {
	let e;
	return {
		c() {
			e = X('Additional settings');
		},
		l(n) {
			e = J(n, 'Additional settings');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function Th(s) {
	let e;
	return {
		c() {
			e = X('Show inline title');
		},
		l(n) {
			e = J(n, 'Show inline title');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function Ah(s) {
	let e;
	return {
		c() {
			e = X('Show line numbers');
		},
		l(n) {
			e = J(n, 'Show line numbers');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function Oh(s) {
	let e;
	return {
		c() {
			e = X('Show editor toolbar');
		},
		l(n) {
			e = J(n, 'Show editor toolbar');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function Ph(s) {
	let e,
		n,
		t,
		l,
		r,
		o = 'Change the editor font.',
		a,
		i,
		u,
		f,
		c,
		h,
		d,
		$,
		p,
		b = 'Change the editor font size.',
		w,
		y,
		I,
		Q,
		P,
		V,
		z,
		ee,
		se,
		T = 'Enable or disable various text correction features.',
		W,
		U,
		B,
		j,
		te,
		F,
		H,
		G,
		Te,
		Ne,
		Ie,
		De,
		ye,
		re,
		oe,
		be,
		We = 'Additional settings for the editor.',
		Ge,
		Be,
		A,
		x,
		Oe,
		Le,
		qe,
		Re,
		Ze,
		Ye,
		Je,
		Ue,
		xe,
		at,
		Et,
		St,
		ct;
	t = new rt({ props: { class: 'text-sm', $$slots: { default: [nh] }, $$scope: { ctx: s } } });
	function Nn(he) {
		s[4](he);
	}
	let gl = { disabled: !0, $$slots: { default: [dh] }, $$scope: { ctx: s } };
	s[0] !== void 0 && (gl.selected = s[0]),
		(u = new Sn({ props: gl })),
		Pe.push(() => ft(u, 'selected', Nn)),
		(d = new rt({ props: { class: 'text-sm', $$slots: { default: [mh] }, $$scope: { ctx: s } } }));
	function Dl(he) {
		s[5](he);
	}
	let Z = { disabled: !0, $$slots: { default: [Ch] }, $$scope: { ctx: s } };
	return (
		s[1] !== void 0 && (Z.selected = s[1]),
		(I = new Sn({ props: Z })),
		Pe.push(() => ft(I, 'selected', Dl)),
		(z = new rt({ props: { class: 'text-sm', $$slots: { default: [Eh] }, $$scope: { ctx: s } } })),
		(j = new on({ props: { checked: s[2].editor.auto_correct, onCheckedChange: s[6] } })),
		(F = new rt({
			props: {
				class: zt(
					'text-sm font-normal transition-colors',
					s[2].editor.auto_correct ? 'text-foreground/90' : 'text-foreground/60'
				),
				$$slots: { default: [Sh] },
				$$scope: { ctx: s }
			}
		})),
		(Te = new on({ props: { checked: s[2].editor.spell_check, onCheckedChange: s[7] } })),
		(Ie = new rt({
			props: {
				class: zt(
					'text-sm font-normal transition-colors',
					s[2].editor.spell_check ? 'text-foreground/90' : 'text-foreground/60'
				),
				$$slots: { default: [wh] },
				$$scope: { ctx: s }
			}
		})),
		(re = new rt({ props: { class: 'text-sm', $$slots: { default: [yh] }, $$scope: { ctx: s } } })),
		(x = new on({ props: { checked: s[2].editor.show_inline_title, onCheckedChange: s[8] } })),
		(Le = new rt({
			props: {
				class: zt(
					'text-sm font-normal transition-colors',
					s[2].editor.show_inline_title ? 'text-foreground/90' : 'text-foreground/60'
				),
				$$slots: { default: [Th] },
				$$scope: { ctx: s }
			}
		})),
		(Ze = new on({
			props: { disabled: !0, checked: s[2].editor.show_line_numbers, onCheckedChange: s[9] }
		})),
		(Je = new rt({
			props: {
				class: zt('text-sm font-normal transition-colors text-foreground/60'),
				$$slots: { default: [Ah] },
				$$scope: { ctx: s }
			}
		})),
		(at = new on({ props: { checked: s[2].editor.show_toolbar, onCheckedChange: s[10] } })),
		(St = new rt({
			props: {
				class: zt(
					'text-sm font-normal transition-colors',
					s[2].editor.show_toolbar ? 'text-foreground/90' : 'text-foreground/60'
				),
				$$slots: { default: [Oh] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = R('div')),
					(n = R('div')),
					E(t.$$.fragment),
					(l = q()),
					(r = R('p')),
					(r.textContent = o),
					(a = q()),
					(i = R('div')),
					E(u.$$.fragment),
					(c = q()),
					(h = R('div')),
					E(d.$$.fragment),
					($ = q()),
					(p = R('p')),
					(p.textContent = b),
					(w = q()),
					(y = R('div')),
					E(I.$$.fragment),
					(P = q()),
					(V = R('div')),
					E(z.$$.fragment),
					(ee = q()),
					(se = R('p')),
					(se.textContent = T),
					(W = q()),
					(U = R('div')),
					(B = R('div')),
					E(j.$$.fragment),
					(te = q()),
					E(F.$$.fragment),
					(H = q()),
					(G = R('div')),
					E(Te.$$.fragment),
					(Ne = q()),
					E(Ie.$$.fragment),
					(De = q()),
					(ye = R('div')),
					E(re.$$.fragment),
					(oe = q()),
					(be = R('p')),
					(be.textContent = We),
					(Ge = q()),
					(Be = R('div')),
					(A = R('div')),
					E(x.$$.fragment),
					(Oe = q()),
					E(Le.$$.fragment),
					(qe = q()),
					(Re = R('div')),
					E(Ze.$$.fragment),
					(Ye = q()),
					E(Je.$$.fragment),
					(Ue = q()),
					(xe = R('div')),
					E(at.$$.fragment),
					(Et = q()),
					E(St.$$.fragment),
					this.h();
			},
			l(he) {
				e = M(he, 'DIV', { class: !0 });
				var Me = K(e);
				n = M(Me, 'DIV', { class: !0 });
				var jt = K(n);
				S(t.$$.fragment, jt),
					(l = L(jt)),
					(r = M(jt, 'P', { class: !0, 'data-svelte-h': !0 })),
					it(r) !== 'svelte-1156gyu' && (r.textContent = o),
					(a = L(jt)),
					(i = M(jt, 'DIV', { class: !0 }));
				var Dn = K(i);
				S(u.$$.fragment, Dn),
					Dn.forEach(_),
					jt.forEach(_),
					(c = L(Me)),
					(h = M(Me, 'DIV', { class: !0 }));
				var Kt = K(h);
				S(d.$$.fragment, Kt),
					($ = L(Kt)),
					(p = M(Kt, 'P', { class: !0, 'data-svelte-h': !0 })),
					it(p) !== 'svelte-cssfsb' && (p.textContent = b),
					(w = L(Kt)),
					(y = M(Kt, 'DIV', { class: !0 }));
				var In = K(y);
				S(I.$$.fragment, In),
					In.forEach(_),
					Kt.forEach(_),
					(P = L(Me)),
					(V = M(Me, 'DIV', { class: !0 }));
				var Bt = K(V);
				S(z.$$.fragment, Bt),
					(ee = L(Bt)),
					(se = M(Bt, 'P', { class: !0, 'data-svelte-h': !0 })),
					it(se) !== 'svelte-97tti4' && (se.textContent = T),
					(W = L(Bt)),
					(U = M(Bt, 'DIV', { class: !0 }));
				var Zt = K(U);
				B = M(Zt, 'DIV', { class: !0 });
				var xt = K(B);
				S(j.$$.fragment, xt),
					(te = L(xt)),
					S(F.$$.fragment, xt),
					xt.forEach(_),
					(H = L(Zt)),
					(G = M(Zt, 'DIV', { class: !0 }));
				var en = K(G);
				S(Te.$$.fragment, en),
					(Ne = L(en)),
					S(Ie.$$.fragment, en),
					en.forEach(_),
					Zt.forEach(_),
					Bt.forEach(_),
					(De = L(Me)),
					(ye = M(Me, 'DIV', { class: !0 }));
				var Mt = K(ye);
				S(re.$$.fragment, Mt),
					(oe = L(Mt)),
					(be = M(Mt, 'P', { class: !0, 'data-svelte-h': !0 })),
					it(be) !== 'svelte-x7ikiw' && (be.textContent = We),
					(Ge = L(Mt)),
					(Be = M(Mt, 'DIV', { class: !0 }));
				var Ut = K(Be);
				A = M(Ut, 'DIV', { class: !0 });
				var tn = K(A);
				S(x.$$.fragment, tn),
					(Oe = L(tn)),
					S(Le.$$.fragment, tn),
					tn.forEach(_),
					(qe = L(Ut)),
					(Re = M(Ut, 'DIV', { class: !0 }));
				var nn = K(Re);
				S(Ze.$$.fragment, nn),
					(Ye = L(nn)),
					S(Je.$$.fragment, nn),
					nn.forEach(_),
					(Ue = L(Ut)),
					(xe = M(Ut, 'DIV', { class: !0 }));
				var ln = K(xe);
				S(at.$$.fragment, ln),
					(Et = L(ln)),
					S(St.$$.fragment, ln),
					ln.forEach(_),
					Ut.forEach(_),
					Mt.forEach(_),
					Me.forEach(_),
					this.h();
			},
			h() {
				N(r, 'class', 'text-muted-foreground text-xs'),
					N(i, 'class', 'flex items-center gap-2 pt-2'),
					N(n, 'class', 'space-y-1'),
					N(p, 'class', 'text-muted-foreground text-xs'),
					N(y, 'class', 'flex items-center gap-2 pt-2'),
					N(h, 'class', 'space-y-1'),
					N(se, 'class', 'text-muted-foreground text-xs'),
					N(B, 'class', 'flex items-center gap-2'),
					N(G, 'class', 'flex items-center gap-2'),
					N(U, 'class', 'flex flex-col items-start gap-2.5 pt-2'),
					N(V, 'class', 'space-y-1'),
					N(be, 'class', 'text-muted-foreground text-xs'),
					N(A, 'class', 'flex items-center gap-2'),
					N(Re, 'class', 'flex items-center gap-2'),
					N(xe, 'class', 'flex items-center gap-2'),
					N(Be, 'class', 'flex flex-col items-start gap-2.5 pt-2'),
					N(ye, 'class', 'space-y-1'),
					N(e, 'class', 'space-y-5');
			},
			m(he, Me) {
				v(he, e, Me),
					O(e, n),
					C(t, n, null),
					O(n, l),
					O(n, r),
					O(n, a),
					O(n, i),
					C(u, i, null),
					O(e, c),
					O(e, h),
					C(d, h, null),
					O(h, $),
					O(h, p),
					O(h, w),
					O(h, y),
					C(I, y, null),
					O(e, P),
					O(e, V),
					C(z, V, null),
					O(V, ee),
					O(V, se),
					O(V, W),
					O(V, U),
					O(U, B),
					C(j, B, null),
					O(B, te),
					C(F, B, null),
					O(U, H),
					O(U, G),
					C(Te, G, null),
					O(G, Ne),
					C(Ie, G, null),
					O(e, De),
					O(e, ye),
					C(re, ye, null),
					O(ye, oe),
					O(ye, be),
					O(ye, Ge),
					O(ye, Be),
					O(Be, A),
					C(x, A, null),
					O(A, Oe),
					C(Le, A, null),
					O(Be, qe),
					O(Be, Re),
					C(Ze, Re, null),
					O(Re, Ye),
					C(Je, Re, null),
					O(Be, Ue),
					O(Be, xe),
					C(at, xe, null),
					O(xe, Et),
					C(St, xe, null),
					(ct = !0);
			},
			p(he, [Me]) {
				const jt = {};
				Me & 2048 && (jt.$$scope = { dirty: Me, ctx: he }), t.$set(jt);
				const Dn = {};
				Me & 2049 && (Dn.$$scope = { dirty: Me, ctx: he }),
					!f && Me & 1 && ((f = !0), (Dn.selected = he[0]), ut(() => (f = !1))),
					u.$set(Dn);
				const Kt = {};
				Me & 2048 && (Kt.$$scope = { dirty: Me, ctx: he }), d.$set(Kt);
				const In = {};
				Me & 2050 && (In.$$scope = { dirty: Me, ctx: he }),
					!Q && Me & 2 && ((Q = !0), (In.selected = he[1]), ut(() => (Q = !1))),
					I.$set(In);
				const Bt = {};
				Me & 2048 && (Bt.$$scope = { dirty: Me, ctx: he }), z.$set(Bt);
				const Zt = {};
				Me & 4 && (Zt.checked = he[2].editor.auto_correct),
					Me & 4 && (Zt.onCheckedChange = he[6]),
					j.$set(Zt);
				const xt = {};
				Me & 4 &&
					(xt.class = zt(
						'text-sm font-normal transition-colors',
						he[2].editor.auto_correct ? 'text-foreground/90' : 'text-foreground/60'
					)),
					Me & 2048 && (xt.$$scope = { dirty: Me, ctx: he }),
					F.$set(xt);
				const en = {};
				Me & 4 && (en.checked = he[2].editor.spell_check),
					Me & 4 && (en.onCheckedChange = he[7]),
					Te.$set(en);
				const Mt = {};
				Me & 4 &&
					(Mt.class = zt(
						'text-sm font-normal transition-colors',
						he[2].editor.spell_check ? 'text-foreground/90' : 'text-foreground/60'
					)),
					Me & 2048 && (Mt.$$scope = { dirty: Me, ctx: he }),
					Ie.$set(Mt);
				const Ut = {};
				Me & 2048 && (Ut.$$scope = { dirty: Me, ctx: he }), re.$set(Ut);
				const tn = {};
				Me & 4 && (tn.checked = he[2].editor.show_inline_title),
					Me & 12 && (tn.onCheckedChange = he[8]),
					x.$set(tn);
				const nn = {};
				Me & 4 &&
					(nn.class = zt(
						'text-sm font-normal transition-colors',
						he[2].editor.show_inline_title ? 'text-foreground/90' : 'text-foreground/60'
					)),
					Me & 2048 && (nn.$$scope = { dirty: Me, ctx: he }),
					Le.$set(nn);
				const ln = {};
				Me & 4 && (ln.checked = he[2].editor.show_line_numbers),
					Me & 4 && (ln.onCheckedChange = he[9]),
					Ze.$set(ln);
				const os = {};
				Me & 2048 && (os.$$scope = { dirty: Me, ctx: he }), Je.$set(os);
				const Il = {};
				Me & 4 && (Il.checked = he[2].editor.show_toolbar),
					Me & 4 && (Il.onCheckedChange = he[10]),
					at.$set(Il);
				const Ml = {};
				Me & 4 &&
					(Ml.class = zt(
						'text-sm font-normal transition-colors',
						he[2].editor.show_toolbar ? 'text-foreground/90' : 'text-foreground/60'
					)),
					Me & 2048 && (Ml.$$scope = { dirty: Me, ctx: he }),
					St.$set(Ml);
			},
			i(he) {
				ct ||
					(m(t.$$.fragment, he),
					m(u.$$.fragment, he),
					m(d.$$.fragment, he),
					m(I.$$.fragment, he),
					m(z.$$.fragment, he),
					m(j.$$.fragment, he),
					m(F.$$.fragment, he),
					m(Te.$$.fragment, he),
					m(Ie.$$.fragment, he),
					m(re.$$.fragment, he),
					m(x.$$.fragment, he),
					m(Le.$$.fragment, he),
					m(Ze.$$.fragment, he),
					m(Je.$$.fragment, he),
					m(at.$$.fragment, he),
					m(St.$$.fragment, he),
					(ct = !0));
			},
			o(he) {
				g(t.$$.fragment, he),
					g(u.$$.fragment, he),
					g(d.$$.fragment, he),
					g(I.$$.fragment, he),
					g(z.$$.fragment, he),
					g(j.$$.fragment, he),
					g(F.$$.fragment, he),
					g(Te.$$.fragment, he),
					g(Ie.$$.fragment, he),
					g(re.$$.fragment, he),
					g(x.$$.fragment, he),
					g(Le.$$.fragment, he),
					g(Ze.$$.fragment, he),
					g(Je.$$.fragment, he),
					g(at.$$.fragment, he),
					g(St.$$.fragment, he),
					(ct = !1);
			},
			d(he) {
				he && _(e),
					k(t),
					k(u),
					k(d),
					k(I),
					k(z),
					k(j),
					k(F),
					k(Te),
					k(Ie),
					k(re),
					k(x),
					k(Le),
					k(Ze),
					k(Je),
					k(at),
					k(St);
			}
		}
	);
}
function Nh(s, e, n) {
	let t, l;
	Ae(s, Qt, ($) => n(2, (t = $))), Ae(s, El, ($) => n(3, (l = $)));
	let r = { value: 'inter', label: 'Inter' },
		o = { value: 'normal', label: 'Normal' };
	function a($) {
		(r = $), n(0, r);
	}
	function i($) {
		(o = $), n(1, o);
	}
	return [
		r,
		o,
		t,
		l,
		a,
		i,
		($) => qt('collection', { ...t, editor: { ...t.editor, auto_correct: $ } }),
		($) => qt('collection', { ...t, editor: { ...t.editor, spell_check: $ } }),
		($) => {
			qt('collection', { ...t, editor: { ...t.editor, show_inline_title: $ } }),
				Ua(),
				Lo(l || '', !0);
		},
		($) => qt('collection', { ...t, editor: { ...t.editor, show_line_numbers: $ } }),
		($) => qt('collection', { ...t, editor: { ...t.editor, show_toolbar: $ } })
	];
}
class Dh extends pe {
	constructor(e) {
		super(), $e(this, e, Nh, Ph, me, {});
	}
}
function Ih(s) {
	let e;
	return {
		c() {
			e = X('Auto save');
		},
		l(n) {
			e = J(n, 'Auto save');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function Mh(s) {
	let e;
	return {
		c() {
			e = X('Note: Disabling auto save may result in data loss and is strongly discouraged.');
		},
		l(n) {
			e = J(n, 'Note: Disabling auto save may result in data loss and is strongly discouraged.');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function Rh(s) {
	let e;
	return {
		c() {
			e = X('Auto save debounce');
		},
		l(n) {
			e = J(n, 'Auto save debounce');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function Fh(s) {
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
		m(l, r) {
			v(l, n, r), v(l, t, r);
		},
		p(l, r) {
			r & 1 && e !== (e = l[0].editor.auto_save_debounce + '') && dt(n, e);
		},
		d(l) {
			l && (_(n), _(t));
		}
	};
}
function Vh(s) {
	let e, n;
	return (
		(e = new Pn({
			props: {
				class: 'text-xs text-foreground/85',
				$$slots: { default: [Fh] },
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
				const r = {};
				l & 17 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function Lh(s) {
	let e;
	return {
		c() {
			e = X('250ms');
		},
		l(n) {
			e = J(n, '250ms');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function qh(s) {
	let e;
	return {
		c() {
			e = X('500ms');
		},
		l(n) {
			e = J(n, '500ms');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function jh(s) {
	let e;
	return {
		c() {
			e = X('750ms');
		},
		l(n) {
			e = J(n, '750ms');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function Kh(s) {
	let e;
	return {
		c() {
			e = X('1000ms');
		},
		l(n) {
			e = J(n, '1000ms');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function Bh(s) {
	let e;
	return {
		c() {
			e = X('1500ms');
		},
		l(n) {
			e = J(n, '1500ms');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function Uh(s) {
	let e;
	return {
		c() {
			e = X('2000ms');
		},
		l(n) {
			e = J(n, '2000ms');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function zh(s) {
	let e;
	return {
		c() {
			e = X('3000ms');
		},
		l(n) {
			e = J(n, '3000ms');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function Hh(s) {
	let e, n, t, l, r, o, a, i, u, f, c, h, d, $;
	return (
		(e = new je({ props: { value: '250', $$slots: { default: [Lh] }, $$scope: { ctx: s } } })),
		(t = new je({ props: { value: '500', $$slots: { default: [qh] }, $$scope: { ctx: s } } })),
		(r = new je({ props: { value: '750', $$slots: { default: [jh] }, $$scope: { ctx: s } } })),
		(a = new je({ props: { value: '1000', $$slots: { default: [Kh] }, $$scope: { ctx: s } } })),
		(u = new je({ props: { value: '1500', $$slots: { default: [Bh] }, $$scope: { ctx: s } } })),
		(c = new je({ props: { value: '2000', $$slots: { default: [Uh] }, $$scope: { ctx: s } } })),
		(d = new je({ props: { value: '3000', $$slots: { default: [zh] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment),
					(n = q()),
					E(t.$$.fragment),
					(l = q()),
					E(r.$$.fragment),
					(o = q()),
					E(a.$$.fragment),
					(i = q()),
					E(u.$$.fragment),
					(f = q()),
					E(c.$$.fragment),
					(h = q()),
					E(d.$$.fragment);
			},
			l(p) {
				S(e.$$.fragment, p),
					(n = L(p)),
					S(t.$$.fragment, p),
					(l = L(p)),
					S(r.$$.fragment, p),
					(o = L(p)),
					S(a.$$.fragment, p),
					(i = L(p)),
					S(u.$$.fragment, p),
					(f = L(p)),
					S(c.$$.fragment, p),
					(h = L(p)),
					S(d.$$.fragment, p);
			},
			m(p, b) {
				C(e, p, b),
					v(p, n, b),
					C(t, p, b),
					v(p, l, b),
					C(r, p, b),
					v(p, o, b),
					C(a, p, b),
					v(p, i, b),
					C(u, p, b),
					v(p, f, b),
					C(c, p, b),
					v(p, h, b),
					C(d, p, b),
					($ = !0);
			},
			p(p, b) {
				const w = {};
				b & 16 && (w.$$scope = { dirty: b, ctx: p }), e.$set(w);
				const y = {};
				b & 16 && (y.$$scope = { dirty: b, ctx: p }), t.$set(y);
				const I = {};
				b & 16 && (I.$$scope = { dirty: b, ctx: p }), r.$set(I);
				const Q = {};
				b & 16 && (Q.$$scope = { dirty: b, ctx: p }), a.$set(Q);
				const P = {};
				b & 16 && (P.$$scope = { dirty: b, ctx: p }), u.$set(P);
				const V = {};
				b & 16 && (V.$$scope = { dirty: b, ctx: p }), c.$set(V);
				const z = {};
				b & 16 && (z.$$scope = { dirty: b, ctx: p }), d.$set(z);
			},
			i(p) {
				$ ||
					(m(e.$$.fragment, p),
					m(t.$$.fragment, p),
					m(r.$$.fragment, p),
					m(a.$$.fragment, p),
					m(u.$$.fragment, p),
					m(c.$$.fragment, p),
					m(d.$$.fragment, p),
					($ = !0));
			},
			o(p) {
				g(e.$$.fragment, p),
					g(t.$$.fragment, p),
					g(r.$$.fragment, p),
					g(a.$$.fragment, p),
					g(u.$$.fragment, p),
					g(c.$$.fragment, p),
					g(d.$$.fragment, p),
					($ = !1);
			},
			d(p) {
				p && (_(n), _(l), _(o), _(i), _(f), _(h)),
					k(e, p),
					k(t, p),
					k(r, p),
					k(a, p),
					k(u, p),
					k(c, p),
					k(d, p);
			}
		}
	);
}
function Qh(s) {
	let e, n, t, l;
	return (
		(e = new On({ props: { $$slots: { default: [Vh] }, $$scope: { ctx: s } } })),
		(t = new An({
			props: { align: 'start', class: '!w-28', $$slots: { default: [Hh] }, $$scope: { ctx: s } }
		})),
		{
			c() {
				E(e.$$.fragment), (n = q()), E(t.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r), (n = L(r)), S(t.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), v(r, n, o), C(t, r, o), (l = !0);
			},
			p(r, o) {
				const a = {};
				o & 17 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
				const i = {};
				o & 16 && (i.$$scope = { dirty: o, ctx: r }), t.$set(i);
			},
			i(r) {
				l || (m(e.$$.fragment, r), m(t.$$.fragment, r), (l = !0));
			},
			o(r) {
				g(e.$$.fragment, r), g(t.$$.fragment, r), (l = !1);
			},
			d(r) {
				r && _(n), k(e, r), k(t, r);
			}
		}
	);
}
function Tr(s) {
	let e, n;
	return (
		(e = new ht({
			props: {
				text: 'Reset to default',
				side: 'bottom',
				$$slots: { default: [Wh] },
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
				const r = {};
				l & 17 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function Gh(s) {
	let e, n;
	return (
		(e = new He({ props: { name: 'undoCircle', class: 'h-3.5 w-3.5' } })),
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
			p: we,
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function Wh(s) {
	let e, n;
	return (
		(e = new nt({
			props: {
				variant: 'ghost',
				size: 'icon',
				class: 'h-7 w-7 fill-muted-foreground hover:fill-foreground',
				scale: 'md',
				disabled: !s[0].editor.auto_save,
				$$slots: { default: [Gh] },
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
				const r = {};
				l & 1 && (r.disabled = !t[0].editor.auto_save),
					l & 16 && (r.$$scope = { dirty: l, ctx: t }),
					e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function Jh(s) {
	let e;
	return {
		c() {
			e = X('Hidden files');
		},
		l(n) {
			e = J(n, 'Hidden files');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function Xh(s) {
	let e;
	return {
		c() {
			e = X('Add');
		},
		l(n) {
			e = J(n, 'Add');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function Yh(s) {
	let e,
		n,
		t,
		l,
		r,
		o = 'Automatically save your notes.',
		a,
		i,
		u,
		f,
		c,
		h,
		d,
		$,
		p,
		b,
		w = 'The delay before auto save is triggered.',
		y,
		I,
		Q,
		P,
		V,
		z,
		ee,
		se,
		T,
		W = 'Exclude files or extensions from the notes view.',
		U,
		B,
		j,
		te;
	(t = new rt({ props: { class: 'text-sm', $$slots: { default: [Ih] }, $$scope: { ctx: s } } })),
		(u = new on({ props: { checked: s[0].editor.auto_save, onCheckedChange: s[1] } })),
		(c = new rt({
			props: {
				class: ve('text-destructive text-xs font-normal', s[0].editor.auto_save && 'hidden'),
				$$slots: { default: [Mh] },
				$$scope: { ctx: s }
			}
		})),
		($ = new rt({ props: { class: 'text-sm', $$slots: { default: [Rh] }, $$scope: { ctx: s } } })),
		(Q = new Sn({
			props: {
				selected: {
					value: s[0].editor.auto_save_debounce,
					label: s[0].editor.auto_save_debounce + 'ms'
				},
				onSelectedChange: s[2],
				disabled: !s[0].editor.auto_save,
				$$slots: { default: [Qh] },
				$$scope: { ctx: s }
			}
		}));
	let F = s[0].editor.auto_save_debounce != 750 && Tr(s);
	return (
		(ee = new rt({ props: { class: 'text-sm', $$slots: { default: [Jh] }, $$scope: { ctx: s } } })),
		(j = new nt({
			props: {
				variant: 'default',
				size: 'sm',
				class: 'h-7 text-primary-foreground/85 hover:text-primary-foreground text-sm font-normal',
				scale: 'sm',
				disabled: !0,
				$$slots: { default: [Xh] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = R('div')),
					(n = R('div')),
					E(t.$$.fragment),
					(l = q()),
					(r = R('p')),
					(r.textContent = o),
					(a = q()),
					(i = R('div')),
					E(u.$$.fragment),
					(f = q()),
					E(c.$$.fragment),
					(h = q()),
					(d = R('div')),
					E($.$$.fragment),
					(p = q()),
					(b = R('p')),
					(b.textContent = w),
					(y = q()),
					(I = R('div')),
					E(Q.$$.fragment),
					(P = q()),
					F && F.c(),
					(V = q()),
					(z = R('div')),
					E(ee.$$.fragment),
					(se = q()),
					(T = R('p')),
					(T.textContent = W),
					(U = q()),
					(B = R('div')),
					E(j.$$.fragment),
					this.h();
			},
			l(H) {
				e = M(H, 'DIV', { class: !0 });
				var G = K(e);
				n = M(G, 'DIV', { class: !0 });
				var Te = K(n);
				S(t.$$.fragment, Te),
					(l = L(Te)),
					(r = M(Te, 'P', { class: !0, 'data-svelte-h': !0 })),
					it(r) !== 'svelte-38f7td' && (r.textContent = o),
					(a = L(Te)),
					(i = M(Te, 'DIV', { class: !0 }));
				var Ne = K(i);
				S(u.$$.fragment, Ne),
					(f = L(Ne)),
					S(c.$$.fragment, Ne),
					Ne.forEach(_),
					Te.forEach(_),
					(h = L(G)),
					(d = M(G, 'DIV', { class: !0 }));
				var Ie = K(d);
				S($.$$.fragment, Ie),
					(p = L(Ie)),
					(b = M(Ie, 'P', { class: !0, 'data-svelte-h': !0 })),
					it(b) !== 'svelte-1t81uw1' && (b.textContent = w),
					(y = L(Ie)),
					(I = M(Ie, 'DIV', { class: !0 }));
				var De = K(I);
				S(Q.$$.fragment, De),
					(P = L(De)),
					F && F.l(De),
					De.forEach(_),
					Ie.forEach(_),
					(V = L(G)),
					(z = M(G, 'DIV', { class: !0 }));
				var ye = K(z);
				S(ee.$$.fragment, ye),
					(se = L(ye)),
					(T = M(ye, 'P', { class: !0, 'data-svelte-h': !0 })),
					it(T) !== 'svelte-1ik7fhu' && (T.textContent = W),
					(U = L(ye)),
					(B = M(ye, 'DIV', { class: !0 }));
				var re = K(B);
				S(j.$$.fragment, re), re.forEach(_), ye.forEach(_), G.forEach(_), this.h();
			},
			h() {
				N(r, 'class', 'text-muted-foreground text-xs'),
					N(i, 'class', 'flex flex-col items-start gap-3 pt-2'),
					N(n, 'class', 'space-y-1'),
					N(b, 'class', 'text-muted-foreground text-xs'),
					N(I, 'class', 'flex items-center gap-1 pt-2'),
					N(d, 'class', 'space-y-1'),
					N(T, 'class', 'text-muted-foreground text-xs'),
					N(B, 'class', 'flex items-center gap-2 pt-2'),
					N(z, 'class', 'space-y-1'),
					N(e, 'class', 'space-y-5');
			},
			m(H, G) {
				v(H, e, G),
					O(e, n),
					C(t, n, null),
					O(n, l),
					O(n, r),
					O(n, a),
					O(n, i),
					C(u, i, null),
					O(i, f),
					C(c, i, null),
					O(e, h),
					O(e, d),
					C($, d, null),
					O(d, p),
					O(d, b),
					O(d, y),
					O(d, I),
					C(Q, I, null),
					O(I, P),
					F && F.m(I, null),
					O(e, V),
					O(e, z),
					C(ee, z, null),
					O(z, se),
					O(z, T),
					O(z, U),
					O(z, B),
					C(j, B, null),
					(te = !0);
			},
			p(H, [G]) {
				const Te = {};
				G & 16 && (Te.$$scope = { dirty: G, ctx: H }), t.$set(Te);
				const Ne = {};
				G & 1 && (Ne.checked = H[0].editor.auto_save),
					G & 1 && (Ne.onCheckedChange = H[1]),
					u.$set(Ne);
				const Ie = {};
				G & 1 &&
					(Ie.class = ve(
						'text-destructive text-xs font-normal',
						H[0].editor.auto_save && 'hidden'
					)),
					G & 16 && (Ie.$$scope = { dirty: G, ctx: H }),
					c.$set(Ie);
				const De = {};
				G & 16 && (De.$$scope = { dirty: G, ctx: H }), $.$set(De);
				const ye = {};
				G & 1 &&
					(ye.selected = {
						value: H[0].editor.auto_save_debounce,
						label: H[0].editor.auto_save_debounce + 'ms'
					}),
					G & 1 && (ye.onSelectedChange = H[2]),
					G & 1 && (ye.disabled = !H[0].editor.auto_save),
					G & 17 && (ye.$$scope = { dirty: G, ctx: H }),
					Q.$set(ye),
					H[0].editor.auto_save_debounce != 750
						? F
							? (F.p(H, G), G & 1 && m(F, 1))
							: ((F = Tr(H)), F.c(), m(F, 1), F.m(I, null))
						: F &&
							(Ee(),
							g(F, 1, 1, () => {
								F = null;
							}),
							Se());
				const re = {};
				G & 16 && (re.$$scope = { dirty: G, ctx: H }), ee.$set(re);
				const oe = {};
				G & 16 && (oe.$$scope = { dirty: G, ctx: H }), j.$set(oe);
			},
			i(H) {
				te ||
					(m(t.$$.fragment, H),
					m(u.$$.fragment, H),
					m(c.$$.fragment, H),
					m($.$$.fragment, H),
					m(Q.$$.fragment, H),
					m(F),
					m(ee.$$.fragment, H),
					m(j.$$.fragment, H),
					(te = !0));
			},
			o(H) {
				g(t.$$.fragment, H),
					g(u.$$.fragment, H),
					g(c.$$.fragment, H),
					g($.$$.fragment, H),
					g(Q.$$.fragment, H),
					g(F),
					g(ee.$$.fragment, H),
					g(j.$$.fragment, H),
					(te = !1);
			},
			d(H) {
				H && _(e), k(t), k(u), k(c), k($), k(Q), F && F.d(), k(ee), k(j);
			}
		}
	);
}
function Zh(s, e, n) {
	let t;
	return (
		Ae(s, Qt, (a) => n(0, (t = a))),
		[
			t,
			(a) => {
				qt('collection', { ...t, editor: { ...t.editor, auto_save: a } });
			},
			(a) => {
				a && qt('collection', { ...t, editor: { ...t.editor, auto_save_debounce: a.value } });
			},
			() => {
				qt('collection', { ...t, editor: { ...t.editor, auto_save_debounce: 750 } });
			}
		]
	);
}
class xh extends pe {
	constructor(e) {
		super(), $e(this, e, Zh, Yh, me, {});
	}
}
function eg(s) {
	let e;
	return {
		c() {
			e = X('Auto sync');
		},
		l(n) {
			e = J(n, 'Auto sync');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function tg(s) {
	let e, n, t;
	function l(o) {
		s[4](o);
	}
	let r = { disabled: !0 };
	return (
		s[0] !== void 0 && (r.checked = s[0]),
		(e = new on({ props: r })),
		Pe.push(() => ft(e, 'checked', l)),
		{
			c() {
				E(e.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o);
			},
			m(o, a) {
				C(e, o, a), (t = !0);
			},
			p(o, a) {
				const i = {};
				!n && a & 1 && ((n = !0), (i.checked = o[0]), ut(() => (n = !1))), e.$set(i);
			},
			i(o) {
				t || (m(e.$$.fragment, o), (t = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (t = !1);
			},
			d(o) {
				k(e, o);
			}
		}
	);
}
function ng(s) {
	let e;
	return {
		c() {
			e = X('Sync interval');
		},
		l(n) {
			e = J(n, 'Sync interval');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function lg(s) {
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
			v(t, n, l);
		},
		p(t, l) {
			l & 4 && e !== (e = t[2].label + '') && dt(n, e);
		},
		d(t) {
			t && _(n);
		}
	};
}
function sg(s) {
	let e, n;
	return (
		(e = new Pn({
			props: {
				class: 'text-sm text-foreground/85',
				$$slots: { default: [lg] },
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
				const r = {};
				l & 260 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function rg(s) {
	let e;
	return {
		c() {
			e = X('5 minutes');
		},
		l(n) {
			e = J(n, '5 minutes');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function og(s) {
	let e;
	return {
		c() {
			e = X('10 minutes');
		},
		l(n) {
			e = J(n, '10 minutes');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function ig(s) {
	let e;
	return {
		c() {
			e = X('15 minutes');
		},
		l(n) {
			e = J(n, '15 minutes');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function ag(s) {
	let e;
	return {
		c() {
			e = X('30 minutes');
		},
		l(n) {
			e = J(n, '30 minutes');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function ug(s) {
	let e;
	return {
		c() {
			e = X('1 hour');
		},
		l(n) {
			e = J(n, '1 hour');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function fg(s) {
	let e;
	return {
		c() {
			e = X('2 hours');
		},
		l(n) {
			e = J(n, '2 hours');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function cg(s) {
	let e;
	return {
		c() {
			e = X('4 hours');
		},
		l(n) {
			e = J(n, '4 hours');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function dg(s) {
	let e;
	return {
		c() {
			e = X('6 hours');
		},
		l(n) {
			e = J(n, '6 hours');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function mg(s) {
	let e;
	return {
		c() {
			e = X('12 hours');
		},
		l(n) {
			e = J(n, '12 hours');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function _g(s) {
	let e;
	return {
		c() {
			e = X('24 hours');
		},
		l(n) {
			e = J(n, '24 hours');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function hg(s) {
	let e, n, t, l, r, o, a, i, u, f, c, h, d, $, p, b, w, y, I, Q;
	return (
		(e = new je({ props: { value: '5m', $$slots: { default: [rg] }, $$scope: { ctx: s } } })),
		(t = new je({ props: { value: '10m', $$slots: { default: [og] }, $$scope: { ctx: s } } })),
		(r = new je({ props: { value: '15m', $$slots: { default: [ig] }, $$scope: { ctx: s } } })),
		(a = new je({ props: { value: '30m', $$slots: { default: [ag] }, $$scope: { ctx: s } } })),
		(u = new je({ props: { value: '1h', $$slots: { default: [ug] }, $$scope: { ctx: s } } })),
		(c = new je({ props: { value: '2h', $$slots: { default: [fg] }, $$scope: { ctx: s } } })),
		(d = new je({ props: { value: '4h', $$slots: { default: [cg] }, $$scope: { ctx: s } } })),
		(p = new je({ props: { value: '6h', $$slots: { default: [dg] }, $$scope: { ctx: s } } })),
		(w = new je({ props: { value: '12h', $$slots: { default: [mg] }, $$scope: { ctx: s } } })),
		(I = new je({ props: { value: '24h', $$slots: { default: [_g] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment),
					(n = q()),
					E(t.$$.fragment),
					(l = q()),
					E(r.$$.fragment),
					(o = q()),
					E(a.$$.fragment),
					(i = q()),
					E(u.$$.fragment),
					(f = q()),
					E(c.$$.fragment),
					(h = q()),
					E(d.$$.fragment),
					($ = q()),
					E(p.$$.fragment),
					(b = q()),
					E(w.$$.fragment),
					(y = q()),
					E(I.$$.fragment);
			},
			l(P) {
				S(e.$$.fragment, P),
					(n = L(P)),
					S(t.$$.fragment, P),
					(l = L(P)),
					S(r.$$.fragment, P),
					(o = L(P)),
					S(a.$$.fragment, P),
					(i = L(P)),
					S(u.$$.fragment, P),
					(f = L(P)),
					S(c.$$.fragment, P),
					(h = L(P)),
					S(d.$$.fragment, P),
					($ = L(P)),
					S(p.$$.fragment, P),
					(b = L(P)),
					S(w.$$.fragment, P),
					(y = L(P)),
					S(I.$$.fragment, P);
			},
			m(P, V) {
				C(e, P, V),
					v(P, n, V),
					C(t, P, V),
					v(P, l, V),
					C(r, P, V),
					v(P, o, V),
					C(a, P, V),
					v(P, i, V),
					C(u, P, V),
					v(P, f, V),
					C(c, P, V),
					v(P, h, V),
					C(d, P, V),
					v(P, $, V),
					C(p, P, V),
					v(P, b, V),
					C(w, P, V),
					v(P, y, V),
					C(I, P, V),
					(Q = !0);
			},
			p(P, V) {
				const z = {};
				V & 256 && (z.$$scope = { dirty: V, ctx: P }), e.$set(z);
				const ee = {};
				V & 256 && (ee.$$scope = { dirty: V, ctx: P }), t.$set(ee);
				const se = {};
				V & 256 && (se.$$scope = { dirty: V, ctx: P }), r.$set(se);
				const T = {};
				V & 256 && (T.$$scope = { dirty: V, ctx: P }), a.$set(T);
				const W = {};
				V & 256 && (W.$$scope = { dirty: V, ctx: P }), u.$set(W);
				const U = {};
				V & 256 && (U.$$scope = { dirty: V, ctx: P }), c.$set(U);
				const B = {};
				V & 256 && (B.$$scope = { dirty: V, ctx: P }), d.$set(B);
				const j = {};
				V & 256 && (j.$$scope = { dirty: V, ctx: P }), p.$set(j);
				const te = {};
				V & 256 && (te.$$scope = { dirty: V, ctx: P }), w.$set(te);
				const F = {};
				V & 256 && (F.$$scope = { dirty: V, ctx: P }), I.$set(F);
			},
			i(P) {
				Q ||
					(m(e.$$.fragment, P),
					m(t.$$.fragment, P),
					m(r.$$.fragment, P),
					m(a.$$.fragment, P),
					m(u.$$.fragment, P),
					m(c.$$.fragment, P),
					m(d.$$.fragment, P),
					m(p.$$.fragment, P),
					m(w.$$.fragment, P),
					m(I.$$.fragment, P),
					(Q = !0));
			},
			o(P) {
				g(e.$$.fragment, P),
					g(t.$$.fragment, P),
					g(r.$$.fragment, P),
					g(a.$$.fragment, P),
					g(u.$$.fragment, P),
					g(c.$$.fragment, P),
					g(d.$$.fragment, P),
					g(p.$$.fragment, P),
					g(w.$$.fragment, P),
					g(I.$$.fragment, P),
					(Q = !1);
			},
			d(P) {
				P && (_(n), _(l), _(o), _(i), _(f), _(h), _($), _(b), _(y)),
					k(e, P),
					k(t, P),
					k(r, P),
					k(a, P),
					k(u, P),
					k(c, P),
					k(d, P),
					k(p, P),
					k(w, P),
					k(I, P);
			}
		}
	);
}
function gg(s) {
	let e, n, t, l;
	return (
		(e = new On({ props: { $$slots: { default: [sg] }, $$scope: { ctx: s } } })),
		(t = new An({ props: { $$slots: { default: [hg] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment), (n = q()), E(t.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r), (n = L(r)), S(t.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), v(r, n, o), C(t, r, o), (l = !0);
			},
			p(r, o) {
				const a = {};
				o & 260 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
				const i = {};
				o & 256 && (i.$$scope = { dirty: o, ctx: r }), t.$set(i);
			},
			i(r) {
				l || (m(e.$$.fragment, r), m(t.$$.fragment, r), (l = !0));
			},
			o(r) {
				g(e.$$.fragment, r), g(t.$$.fragment, r), (l = !1);
			},
			d(r) {
				r && _(n), k(e, r), k(t, r);
			}
		}
	);
}
function pg(s) {
	let e;
	return {
		c() {
			e = X('Backups');
		},
		l(n) {
			e = J(n, 'Backups');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function $g(s) {
	let e, n, t;
	function l(o) {
		s[6](o);
	}
	let r = { disabled: !0 };
	return (
		s[1] !== void 0 && (r.checked = s[1]),
		(e = new on({ props: r })),
		Pe.push(() => ft(e, 'checked', l)),
		{
			c() {
				E(e.$$.fragment);
			},
			l(o) {
				S(e.$$.fragment, o);
			},
			m(o, a) {
				C(e, o, a), (t = !0);
			},
			p(o, a) {
				const i = {};
				!n && a & 2 && ((n = !0), (i.checked = o[1]), ut(() => (n = !1))), e.$set(i);
			},
			i(o) {
				t || (m(e.$$.fragment, o), (t = !0));
			},
			o(o) {
				g(e.$$.fragment, o), (t = !1);
			},
			d(o) {
				k(e, o);
			}
		}
	);
}
function bg(s) {
	let e;
	return {
		c() {
			e = X('Backup interval');
		},
		l(n) {
			e = J(n, 'Backup interval');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function vg(s) {
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
			v(t, n, l);
		},
		p(t, l) {
			l & 8 && e !== (e = t[3].label + '') && dt(n, e);
		},
		d(t) {
			t && _(n);
		}
	};
}
function kg(s) {
	let e, n;
	return (
		(e = new Pn({
			props: {
				class: 'text-sm text-foreground/85',
				$$slots: { default: [vg] },
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
				const r = {};
				l & 264 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
	let e;
	return {
		c() {
			e = X('1 week');
		},
		l(n) {
			e = J(n, '1 week');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function Eg(s) {
	let e;
	return {
		c() {
			e = X('2 weeks');
		},
		l(n) {
			e = J(n, '2 weeks');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function Sg(s) {
	let e;
	return {
		c() {
			e = X('1 month');
		},
		l(n) {
			e = J(n, '1 month');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function wg(s) {
	let e, n, t, l, r, o;
	return (
		(e = new je({ props: { value: '1w', $$slots: { default: [Cg] }, $$scope: { ctx: s } } })),
		(t = new je({ props: { value: '2w', $$slots: { default: [Eg] }, $$scope: { ctx: s } } })),
		(r = new je({ props: { value: '1m', $$slots: { default: [Sg] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment), (n = q()), E(t.$$.fragment), (l = q()), E(r.$$.fragment);
			},
			l(a) {
				S(e.$$.fragment, a), (n = L(a)), S(t.$$.fragment, a), (l = L(a)), S(r.$$.fragment, a);
			},
			m(a, i) {
				C(e, a, i), v(a, n, i), C(t, a, i), v(a, l, i), C(r, a, i), (o = !0);
			},
			p(a, i) {
				const u = {};
				i & 256 && (u.$$scope = { dirty: i, ctx: a }), e.$set(u);
				const f = {};
				i & 256 && (f.$$scope = { dirty: i, ctx: a }), t.$set(f);
				const c = {};
				i & 256 && (c.$$scope = { dirty: i, ctx: a }), r.$set(c);
			},
			i(a) {
				o || (m(e.$$.fragment, a), m(t.$$.fragment, a), m(r.$$.fragment, a), (o = !0));
			},
			o(a) {
				g(e.$$.fragment, a), g(t.$$.fragment, a), g(r.$$.fragment, a), (o = !1);
			},
			d(a) {
				a && (_(n), _(l)), k(e, a), k(t, a), k(r, a);
			}
		}
	);
}
function yg(s) {
	let e, n, t, l;
	return (
		(e = new On({ props: { $$slots: { default: [kg] }, $$scope: { ctx: s } } })),
		(t = new An({ props: { $$slots: { default: [wg] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment), (n = q()), E(t.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r), (n = L(r)), S(t.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), v(r, n, o), C(t, r, o), (l = !0);
			},
			p(r, o) {
				const a = {};
				o & 264 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
				const i = {};
				o & 256 && (i.$$scope = { dirty: o, ctx: r }), t.$set(i);
			},
			i(r) {
				l || (m(e.$$.fragment, r), m(t.$$.fragment, r), (l = !0));
			},
			o(r) {
				g(e.$$.fragment, r), g(t.$$.fragment, r), (l = !1);
			},
			d(r) {
				r && _(n), k(e, r), k(t, r);
			}
		}
	);
}
function Tg(s) {
	let e;
	return {
		c() {
			e = X('Backup now');
		},
		l(n) {
			e = J(n, 'Backup now');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function Ag(s) {
	let e,
		n,
		t,
		l,
		r,
		o = 'Automatically sync your notes.',
		a,
		i,
		u,
		f,
		c,
		h,
		d,
		$,
		p = 'How often to sync your notes.',
		b,
		w,
		y,
		I,
		Q,
		P,
		V,
		z,
		ee,
		se = 'Wheter or not to create scheduled backups.',
		T,
		W,
		U,
		B,
		j,
		te,
		F,
		H,
		G = 'How often to create backups of your notes.',
		Te,
		Ne,
		Ie,
		De,
		ye,
		re,
		oe;
	(t = new rt({ props: { class: 'text-sm', $$slots: { default: [eg] }, $$scope: { ctx: s } } })),
		(u = new ht({
			props: { text: 'Coming soon', $$slots: { default: [tg] }, $$scope: { ctx: s } }
		})),
		(h = new rt({ props: { class: 'text-sm', $$slots: { default: [ng] }, $$scope: { ctx: s } } }));
	function be(A) {
		s[5](A);
	}
	let We = { disabled: !s[0], $$slots: { default: [gg] }, $$scope: { ctx: s } };
	s[2] !== void 0 && (We.selected = s[2]),
		(y = new Sn({ props: We })),
		Pe.push(() => ft(y, 'selected', be)),
		(V = new rt({ props: { class: 'text-sm', $$slots: { default: [pg] }, $$scope: { ctx: s } } })),
		(U = new ht({
			props: { text: 'Coming soon', $$slots: { default: [$g] }, $$scope: { ctx: s } }
		})),
		(te = new rt({ props: { class: 'text-sm', $$slots: { default: [bg] }, $$scope: { ctx: s } } }));
	function Ge(A) {
		s[7](A);
	}
	let Be = { disabled: !s[1], $$slots: { default: [yg] }, $$scope: { ctx: s } };
	return (
		s[3] !== void 0 && (Be.selected = s[3]),
		(Ie = new Sn({ props: Be })),
		Pe.push(() => ft(Ie, 'selected', Ge)),
		(re = new nt({
			props: {
				variant: 'default',
				size: 'sm',
				class: 'h-7 text-primary-foreground/85 hover:text-primary-foreground text-sm font-normal',
				scale: 'sm',
				disabled: !s[1],
				$$slots: { default: [Tg] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = R('div')),
					(n = R('div')),
					E(t.$$.fragment),
					(l = q()),
					(r = R('p')),
					(r.textContent = o),
					(a = q()),
					(i = R('div')),
					E(u.$$.fragment),
					(f = q()),
					(c = R('div')),
					E(h.$$.fragment),
					(d = q()),
					($ = R('p')),
					($.textContent = p),
					(b = q()),
					(w = R('div')),
					E(y.$$.fragment),
					(Q = q()),
					(P = R('div')),
					E(V.$$.fragment),
					(z = q()),
					(ee = R('p')),
					(ee.textContent = se),
					(T = q()),
					(W = R('div')),
					E(U.$$.fragment),
					(B = q()),
					(j = R('div')),
					E(te.$$.fragment),
					(F = q()),
					(H = R('p')),
					(H.textContent = G),
					(Te = q()),
					(Ne = R('div')),
					E(Ie.$$.fragment),
					(ye = q()),
					E(re.$$.fragment),
					this.h();
			},
			l(A) {
				e = M(A, 'DIV', { class: !0 });
				var x = K(e);
				n = M(x, 'DIV', { class: !0 });
				var Oe = K(n);
				S(t.$$.fragment, Oe),
					(l = L(Oe)),
					(r = M(Oe, 'P', { class: !0, 'data-svelte-h': !0 })),
					it(r) !== 'svelte-1yu1p17' && (r.textContent = o),
					(a = L(Oe)),
					(i = M(Oe, 'DIV', { class: !0 }));
				var Le = K(i);
				S(u.$$.fragment, Le),
					Le.forEach(_),
					Oe.forEach(_),
					(f = L(x)),
					(c = M(x, 'DIV', { class: !0 }));
				var qe = K(c);
				S(h.$$.fragment, qe),
					(d = L(qe)),
					($ = M(qe, 'P', { class: !0, 'data-svelte-h': !0 })),
					it($) !== 'svelte-ro757h' && ($.textContent = p),
					(b = L(qe)),
					(w = M(qe, 'DIV', { class: !0 }));
				var Re = K(w);
				S(y.$$.fragment, Re),
					Re.forEach(_),
					qe.forEach(_),
					(Q = L(x)),
					(P = M(x, 'DIV', { class: !0 }));
				var Ze = K(P);
				S(V.$$.fragment, Ze),
					(z = L(Ze)),
					(ee = M(Ze, 'P', { class: !0, 'data-svelte-h': !0 })),
					it(ee) !== 'svelte-1yks4d5' && (ee.textContent = se),
					(T = L(Ze)),
					(W = M(Ze, 'DIV', { class: !0 }));
				var Ye = K(W);
				S(U.$$.fragment, Ye),
					Ye.forEach(_),
					Ze.forEach(_),
					(B = L(x)),
					(j = M(x, 'DIV', { class: !0 }));
				var Je = K(j);
				S(te.$$.fragment, Je),
					(F = L(Je)),
					(H = M(Je, 'P', { class: !0, 'data-svelte-h': !0 })),
					it(H) !== 'svelte-10tebei' && (H.textContent = G),
					(Te = L(Je)),
					(Ne = M(Je, 'DIV', { class: !0 }));
				var Ue = K(Ne);
				S(Ie.$$.fragment, Ue),
					(ye = L(Ue)),
					S(re.$$.fragment, Ue),
					Ue.forEach(_),
					Je.forEach(_),
					x.forEach(_),
					this.h();
			},
			h() {
				N(r, 'class', 'text-muted-foreground text-xs'),
					N(i, 'class', 'flex items-center gap-2 pt-2'),
					N(n, 'class', 'space-y-1'),
					N($, 'class', 'text-muted-foreground text-xs'),
					N(w, 'class', 'flex items-center gap-2 pt-2'),
					N(c, 'class', 'space-y-1'),
					N(ee, 'class', 'text-muted-foreground text-xs'),
					N(W, 'class', 'flex items-center gap-2 pt-2'),
					N(P, 'class', 'space-y-1'),
					N(H, 'class', 'text-muted-foreground text-xs'),
					N(Ne, 'class', 'flex items-center gap-2 pt-2'),
					N(j, 'class', 'space-y-1'),
					N(e, 'class', 'space-y-5');
			},
			m(A, x) {
				v(A, e, x),
					O(e, n),
					C(t, n, null),
					O(n, l),
					O(n, r),
					O(n, a),
					O(n, i),
					C(u, i, null),
					O(e, f),
					O(e, c),
					C(h, c, null),
					O(c, d),
					O(c, $),
					O(c, b),
					O(c, w),
					C(y, w, null),
					O(e, Q),
					O(e, P),
					C(V, P, null),
					O(P, z),
					O(P, ee),
					O(P, T),
					O(P, W),
					C(U, W, null),
					O(e, B),
					O(e, j),
					C(te, j, null),
					O(j, F),
					O(j, H),
					O(j, Te),
					O(j, Ne),
					C(Ie, Ne, null),
					O(Ne, ye),
					C(re, Ne, null),
					(oe = !0);
			},
			p(A, [x]) {
				const Oe = {};
				x & 256 && (Oe.$$scope = { dirty: x, ctx: A }), t.$set(Oe);
				const Le = {};
				x & 257 && (Le.$$scope = { dirty: x, ctx: A }), u.$set(Le);
				const qe = {};
				x & 256 && (qe.$$scope = { dirty: x, ctx: A }), h.$set(qe);
				const Re = {};
				x & 1 && (Re.disabled = !A[0]),
					x & 260 && (Re.$$scope = { dirty: x, ctx: A }),
					!I && x & 4 && ((I = !0), (Re.selected = A[2]), ut(() => (I = !1))),
					y.$set(Re);
				const Ze = {};
				x & 256 && (Ze.$$scope = { dirty: x, ctx: A }), V.$set(Ze);
				const Ye = {};
				x & 258 && (Ye.$$scope = { dirty: x, ctx: A }), U.$set(Ye);
				const Je = {};
				x & 256 && (Je.$$scope = { dirty: x, ctx: A }), te.$set(Je);
				const Ue = {};
				x & 2 && (Ue.disabled = !A[1]),
					x & 264 && (Ue.$$scope = { dirty: x, ctx: A }),
					!De && x & 8 && ((De = !0), (Ue.selected = A[3]), ut(() => (De = !1))),
					Ie.$set(Ue);
				const xe = {};
				x & 2 && (xe.disabled = !A[1]), x & 256 && (xe.$$scope = { dirty: x, ctx: A }), re.$set(xe);
			},
			i(A) {
				oe ||
					(m(t.$$.fragment, A),
					m(u.$$.fragment, A),
					m(h.$$.fragment, A),
					m(y.$$.fragment, A),
					m(V.$$.fragment, A),
					m(U.$$.fragment, A),
					m(te.$$.fragment, A),
					m(Ie.$$.fragment, A),
					m(re.$$.fragment, A),
					(oe = !0));
			},
			o(A) {
				g(t.$$.fragment, A),
					g(u.$$.fragment, A),
					g(h.$$.fragment, A),
					g(y.$$.fragment, A),
					g(V.$$.fragment, A),
					g(U.$$.fragment, A),
					g(te.$$.fragment, A),
					g(Ie.$$.fragment, A),
					g(re.$$.fragment, A),
					(oe = !1);
			},
			d(A) {
				A && _(e), k(t), k(u), k(h), k(y), k(V), k(U), k(te), k(Ie), k(re);
			}
		}
	);
}
function Og(s, e, n) {
	let t = !1,
		l = !1,
		r = { value: '5m', label: '5 minutes' },
		o = { value: '1w', label: '1 week' };
	function a(c) {
		(t = c), n(0, t);
	}
	function i(c) {
		(r = c), n(2, r);
	}
	function u(c) {
		(l = c), n(1, l);
	}
	function f(c) {
		(o = c), n(3, o);
	}
	return [t, l, r, o, a, i, u, f];
}
class Pg extends pe {
	constructor(e) {
		super(), $e(this, e, Og, Ag, me, {});
	}
}
function Ar(s, e, n) {
	const t = s.slice();
	return (t[6] = e[n]), t;
}
function Or(s, e, n) {
	const t = s.slice();
	return (t[9] = e[n]), t;
}
function Pr(s, e, n) {
	const t = s.slice();
	return (t[6] = e[n]), t;
}
function Nr(s, e, n) {
	const t = s.slice();
	return (t[9] = e[n]), t;
}
function Ng(s) {
	let e, n, t, l;
	return (
		(e = new Qo({ props: { options: Qe['app:settings'] } })),
		(t = new He({ props: { name: 'settings', class: 'w-[18px] h-[18px]' } })),
		{
			c() {
				E(e.$$.fragment), (n = q()), E(t.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r), (n = L(r)), S(t.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), v(r, n, o), C(t, r, o), (l = !0);
			},
			p: we,
			i(r) {
				l || (m(e.$$.fragment, r), m(t.$$.fragment, r), (l = !0));
			},
			o(r) {
				g(e.$$.fragment, r), g(t.$$.fragment, r), (l = !1);
			},
			d(r) {
				r && _(n), k(e, r), k(t, r);
			}
		}
	);
}
function Dg(s) {
	let e, n;
	return (
		(e = new nt({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: 'h-7 w-7 fill-muted-foreground hover:fill-foreground',
				scale: 'md',
				$$slots: { default: [Ng] },
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
				const r = {};
				l & 65536 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function Ig(s) {
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
			v(t, n, l);
		},
		p: we,
		d(t) {
			t && _(n);
		}
	};
}
function Mg(s) {
	let e,
		n,
		t = s[9].name + '',
		l,
		r,
		o;
	return (
		(e = new He({ props: { name: s[9].icon, class: 'w-4 h-4' } })),
		{
			c() {
				E(e.$$.fragment), (n = q()), (l = X(t)), (r = q());
			},
			l(a) {
				S(e.$$.fragment, a), (n = L(a)), (l = J(a, t)), (r = L(a));
			},
			m(a, i) {
				C(e, a, i), v(a, n, i), v(a, l, i), v(a, r, i), (o = !0);
			},
			p: we,
			i(a) {
				o || (m(e.$$.fragment, a), (o = !0));
			},
			o(a) {
				g(e.$$.fragment, a), (o = !1);
			},
			d(a) {
				a && (_(n), _(l), _(r)), k(e, a);
			}
		}
	);
}
function Dr(s) {
	let e, n;
	return (
		(e = new d_({
			props: {
				value: s[9].name.toLocaleLowerCase(),
				class:
					'w-full h-7 rounded-lg px-3 hover:bg-accent hover:text-accent-foreground transition-transform active:scale-[98%] data-[state=active]:bg-accent text-foreground data-[state=active]:fill-foreground fill-muted-foreground/80 text-foreground/70 hover:fill-foreground items-center justify-start gap-2 text-sm font-normal',
				$$slots: { default: [Mg] },
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
				const r = {};
				l & 65536 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function Rg(s) {
	let e,
		n,
		t = tt(s[2][s[6]]),
		l = [];
	for (let o = 0; o < t.length; o += 1) l[o] = Dr(Nr(s, t, o));
	const r = (o) =>
		g(l[o], 1, 1, () => {
			l[o] = null;
		});
	return {
		c() {
			for (let o = 0; o < l.length; o += 1) l[o].c();
			e = le();
		},
		l(o) {
			for (let a = 0; a < l.length; a += 1) l[a].l(o);
			e = le();
		},
		m(o, a) {
			for (let i = 0; i < l.length; i += 1) l[i] && l[i].m(o, a);
			v(o, e, a), (n = !0);
		},
		p(o, a) {
			if (a & 4) {
				t = tt(o[2][o[6]]);
				let i;
				for (i = 0; i < t.length; i += 1) {
					const u = Nr(o, t, i);
					l[i]
						? (l[i].p(u, a), m(l[i], 1))
						: ((l[i] = Dr(u)), l[i].c(), m(l[i], 1), l[i].m(e.parentNode, e));
				}
				for (Ee(), i = t.length; i < l.length; i += 1) r(i);
				Se();
			}
		},
		i(o) {
			if (!n) {
				for (let a = 0; a < t.length; a += 1) m(l[a]);
				n = !0;
			}
		},
		o(o) {
			l = l.filter(Boolean);
			for (let a = 0; a < l.length; a += 1) g(l[a]);
			n = !1;
		},
		d(o) {
			o && _(e), It(l, o);
		}
	};
}
function Fg(s) {
	let e, n;
	return (
		(e = new e_({})),
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
				n || (m(e.$$.fragment, t), (n = !0));
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
function Ir(s) {
	let e,
		n,
		t,
		l,
		r,
		o = s[6] !== Object.keys(s[2])[Object.keys(s[2]).length - 1],
		a,
		i;
	(n = new rt({
		props: {
			class: 'text-foreground/70 text-xs pl-2',
			$$slots: { default: [Ig] },
			$$scope: { ctx: s }
		}
	})),
		(l = new a_({
			props: {
				class: 'flex items-center justify-start flex-col w-full h-fit bg-transparent p-0 gap-1.5',
				$$slots: { default: [Rg] },
				$$scope: { ctx: s }
			}
		}));
	let u = o && Fg();
	return {
		c() {
			(e = R('div')),
				E(n.$$.fragment),
				(t = q()),
				E(l.$$.fragment),
				(r = q()),
				u && u.c(),
				(a = le()),
				this.h();
		},
		l(f) {
			e = M(f, 'DIV', { class: !0 });
			var c = K(e);
			S(n.$$.fragment, c),
				(t = L(c)),
				S(l.$$.fragment, c),
				c.forEach(_),
				(r = L(f)),
				u && u.l(f),
				(a = le()),
				this.h();
		},
		h() {
			N(e, 'class', 'flex flex-col items-start gap-2 w-full');
		},
		m(f, c) {
			v(f, e, c),
				C(n, e, null),
				O(e, t),
				C(l, e, null),
				v(f, r, c),
				u && u.m(f, c),
				v(f, a, c),
				(i = !0);
		},
		p(f, c) {
			const h = {};
			c & 65536 && (h.$$scope = { dirty: c, ctx: f }), n.$set(h);
			const d = {};
			c & 65536 && (d.$$scope = { dirty: c, ctx: f }), l.$set(d);
		},
		i(f) {
			i || (m(n.$$.fragment, f), m(l.$$.fragment, f), m(u), (i = !0));
		},
		o(f) {
			g(n.$$.fragment, f), g(l.$$.fragment, f), g(u), (i = !1);
		},
		d(f) {
			f && (_(e), _(r), _(a)), k(n), k(l), u && u.d(f);
		}
	};
}
function Vg(s) {
	let e,
		n,
		t = s[9].name + '',
		l,
		r,
		o,
		a,
		i;
	var u = s[9].content;
	function f(c, h) {
		return {};
	}
	return (
		u && (o = us(u, f())),
		{
			c() {
				(e = R('div')),
					(n = R('h1')),
					(l = X(t)),
					(r = q()),
					o && E(o.$$.fragment),
					(a = q()),
					this.h();
			},
			l(c) {
				e = M(c, 'DIV', { class: !0 });
				var h = K(e);
				n = M(h, 'H1', { class: !0 });
				var d = K(n);
				(l = J(d, t)),
					d.forEach(_),
					(r = L(h)),
					o && S(o.$$.fragment, h),
					h.forEach(_),
					(a = L(c)),
					this.h();
			},
			h() {
				N(n, 'class', 'text-lg font-medium'),
					N(e, 'class', 'flex flex-col items-start justify-start h-full w-full gap-3 px-1');
			},
			m(c, h) {
				v(c, e, h), O(e, n), O(n, l), O(e, r), o && C(o, e, null), v(c, a, h), (i = !0);
			},
			p(c, h) {
				if (u !== (u = c[9].content)) {
					if (o) {
						Ee();
						const d = o;
						g(d.$$.fragment, 1, 0, () => {
							k(d, 1);
						}),
							Se();
					}
					u ? ((o = us(u, f())), E(o.$$.fragment), m(o.$$.fragment, 1), C(o, e, null)) : (o = null);
				}
			},
			i(c) {
				i || (o && m(o.$$.fragment, c), (i = !0));
			},
			o(c) {
				o && g(o.$$.fragment, c), (i = !1);
			},
			d(c) {
				c && (_(e), _(a)), o && k(o);
			}
		}
	);
}
function Mr(s) {
	let e, n;
	return (
		(e = new s_({
			props: {
				value: s[9].name.toLocaleLowerCase(),
				class: 'w-full h-full -mt-2.5 overflow-y-auto pb-10',
				$$slots: { default: [Vg] },
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
				const r = {};
				l & 65536 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function Rr(s) {
	let e,
		n,
		t = tt(s[2][s[6]]),
		l = [];
	for (let o = 0; o < t.length; o += 1) l[o] = Mr(Or(s, t, o));
	const r = (o) =>
		g(l[o], 1, 1, () => {
			l[o] = null;
		});
	return {
		c() {
			for (let o = 0; o < l.length; o += 1) l[o].c();
			e = le();
		},
		l(o) {
			for (let a = 0; a < l.length; a += 1) l[a].l(o);
			e = le();
		},
		m(o, a) {
			for (let i = 0; i < l.length; i += 1) l[i] && l[i].m(o, a);
			v(o, e, a), (n = !0);
		},
		p(o, a) {
			if (a & 4) {
				t = tt(o[2][o[6]]);
				let i;
				for (i = 0; i < t.length; i += 1) {
					const u = Or(o, t, i);
					l[i]
						? (l[i].p(u, a), m(l[i], 1))
						: ((l[i] = Mr(u)), l[i].c(), m(l[i], 1), l[i].m(e.parentNode, e));
				}
				for (Ee(), i = t.length; i < l.length; i += 1) r(i);
				Se();
			}
		},
		i(o) {
			if (!n) {
				for (let a = 0; a < t.length; a += 1) m(l[a]);
				n = !0;
			}
		},
		o(o) {
			l = l.filter(Boolean);
			for (let a = 0; a < l.length; a += 1) g(l[a]);
			n = !1;
		},
		d(o) {
			o && _(e), It(l, o);
		}
	};
}
function Lg(s) {
	let e,
		n,
		t,
		l,
		r = tt(Object.keys(s[2])),
		o = [];
	for (let c = 0; c < r.length; c += 1) o[c] = Ir(Pr(s, r, c));
	const a = (c) =>
		g(o[c], 1, 1, () => {
			o[c] = null;
		});
	let i = tt(Object.keys(s[2])),
		u = [];
	for (let c = 0; c < i.length; c += 1) u[c] = Rr(Ar(s, i, c));
	const f = (c) =>
		g(u[c], 1, 1, () => {
			u[c] = null;
		});
	return {
		c() {
			e = R('div');
			for (let c = 0; c < o.length; c += 1) o[c].c();
			(n = q()), (t = R('div'));
			for (let c = 0; c < u.length; c += 1) u[c].c();
			this.h();
		},
		l(c) {
			e = M(c, 'DIV', { class: !0 });
			var h = K(e);
			for (let $ = 0; $ < o.length; $ += 1) o[$].l(h);
			h.forEach(_), (n = L(c)), (t = M(c, 'DIV', { class: !0 }));
			var d = K(t);
			for (let $ = 0; $ < u.length; $ += 1) u[$].l(d);
			d.forEach(_), this.h();
		},
		h() {
			N(e, 'class', 'flex flex-col items-center gap-4 h-full justify-start min-w-[160px]'),
				N(t, 'class', 'flex flex-col items-center justify-center gap-2 h-full w-2/4');
		},
		m(c, h) {
			v(c, e, h);
			for (let d = 0; d < o.length; d += 1) o[d] && o[d].m(e, null);
			v(c, n, h), v(c, t, h);
			for (let d = 0; d < u.length; d += 1) u[d] && u[d].m(t, null);
			l = !0;
		},
		p(c, h) {
			if (h & 4) {
				r = tt(Object.keys(c[2]));
				let d;
				for (d = 0; d < r.length; d += 1) {
					const $ = Pr(c, r, d);
					o[d]
						? (o[d].p($, h), m(o[d], 1))
						: ((o[d] = Ir($)), o[d].c(), m(o[d], 1), o[d].m(e, null));
				}
				for (Ee(), d = r.length; d < o.length; d += 1) a(d);
				Se();
			}
			if (h & 4) {
				i = tt(Object.keys(c[2]));
				let d;
				for (d = 0; d < i.length; d += 1) {
					const $ = Ar(c, i, d);
					u[d]
						? (u[d].p($, h), m(u[d], 1))
						: ((u[d] = Rr($)), u[d].c(), m(u[d], 1), u[d].m(t, null));
				}
				for (Ee(), d = i.length; d < u.length; d += 1) f(d);
				Se();
			}
		},
		i(c) {
			if (!l) {
				for (let h = 0; h < r.length; h += 1) m(o[h]);
				for (let h = 0; h < i.length; h += 1) m(u[h]);
				l = !0;
			}
		},
		o(c) {
			o = o.filter(Boolean);
			for (let h = 0; h < o.length; h += 1) g(o[h]);
			u = u.filter(Boolean);
			for (let h = 0; h < u.length; h += 1) g(u[h]);
			l = !1;
		},
		d(c) {
			c && (_(e), _(n), _(t)), It(o, c), It(u, c);
		}
	};
}
function qg(s) {
	let e, n;
	return (
		(e = new m_({
			props: {
				value: s[0],
				onValueChange: s[4],
				class: 'flex items-center justify-center h-full w-full gap-10',
				$$slots: { default: [Lg] },
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
				const r = {};
				l & 1 && (r.value = t[0]), l & 65536 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function jg(s) {
	let e, n, t, l;
	return (
		(e = new Ym({ props: { $$slots: { default: [Dg] }, $$scope: { ctx: s } } })),
		(t = new si({
			props: {
				class:
					'flex items-center justify-center !w-[90%] !h-[90%] !top-[5%] !right-[5%] !bottom-[5%] !left-[5%] pt-16',
				$$slots: { default: [qg] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment), (n = q()), E(t.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r), (n = L(r)), S(t.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), v(r, n, o), C(t, r, o), (l = !0);
			},
			p(r, o) {
				const a = {};
				o & 65536 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
				const i = {};
				o & 65537 && (i.$$scope = { dirty: o, ctx: r }), t.$set(i);
			},
			i(r) {
				l || (m(e.$$.fragment, r), m(t.$$.fragment, r), (l = !0));
			},
			o(r) {
				g(e.$$.fragment, r), g(t.$$.fragment, r), (l = !1);
			},
			d(r) {
				r && _(n), k(e, r), k(t, r);
			}
		}
	);
}
function Kg(s) {
	let e, n;
	return (
		(e = new ri({
			props: { open: s[1], onOpenChange: s[5], $$slots: { default: [jg] }, $$scope: { ctx: s } }
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
				const r = {};
				l & 2 && (r.open = t[1]), l & 65537 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function Bg(s, e, n) {
	let t, l, r;
	Ae(s, nl, (u) => n(3, (r = u)));
	const o = {
			App: [
				{ name: 'General', icon: 'settingsSolid', content: xh },
				{ name: 'Appearance', icon: 'opactiySolid', content: Z_ },
				{ name: 'Editor', icon: 'editPencilSolid', content: Dh }
			],
			Syncronization: [{ name: 'Typyst Sync', icon: 'cloudSolid', content: Pg }]
		},
		a = (u) => {
			nl.update((f) => ((f.activePage = u ?? 'general'), f));
		},
		i = (u) => {
			nl.set({ isOpen: u, activePage: 'general' });
		};
	return (
		(s.$$.update = () => {
			s.$$.dirty & 8 && n(1, ({ isOpen: t, activePage: l } = r), t, (n(0, l), n(3, r)));
		}),
		[l, t, o, r, a, i]
	);
}
class Ug extends pe {
	constructor(e) {
		super(), $e(this, e, Bg, Kg, me, {});
	}
}
function zg(s) {
	let e, n;
	return (
		(e = new He({ props: { name: 'inboxFull', class: 'w-[18px] h-[18px]' } })),
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
			p: we,
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function Hg(s) {
	let e, n, t;
	return (
		(n = new nt({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: ve(
					'h-7 w-7 fill-muted-foreground hover:fill-foreground transition-all',
					s[0] === 'notes' && 'fill-foreground bg-accent'
				),
				scale: 'md',
				$$slots: { default: [zg] },
				$$scope: { ctx: s }
			}
		})),
		n.$on('click', s[1]),
		{
			c() {
				(e = R('a')), E(n.$$.fragment), this.h();
			},
			l(l) {
				e = M(l, 'A', { href: !0 });
				var r = K(e);
				S(n.$$.fragment, r), r.forEach(_), this.h();
			},
			h() {
				N(e, 'href', '/notes');
			},
			m(l, r) {
				v(l, e, r), C(n, e, null), (t = !0);
			},
			p(l, r) {
				const o = {};
				r & 1 &&
					(o.class = ve(
						'h-7 w-7 fill-muted-foreground hover:fill-foreground transition-all',
						l[0] === 'notes' && 'fill-foreground bg-accent'
					)),
					r & 32 && (o.$$scope = { dirty: r, ctx: l }),
					n.$set(o);
			},
			i(l) {
				t || (m(n.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(n.$$.fragment, l), (t = !1);
			},
			d(l) {
				l && _(e), k(n);
			}
		}
	);
}
function Qg(s) {
	let e, n;
	return (
		(e = new He({ props: { name: 'calendarEdit', class: 'w-[18px] h-[18px]' } })),
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
			p: we,
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function Gg(s) {
	let e, n, t;
	return (
		(n = new nt({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: ve(
					'h-7 w-7 fill-muted-foreground hover:fill-foreground transition-all',
					s[0] === 'daily' && 'fill-foreground bg-accent'
				),
				scale: 'md',
				$$slots: { default: [Qg] },
				$$scope: { ctx: s }
			}
		})),
		n.$on('click', s[2]),
		{
			c() {
				(e = R('a')), E(n.$$.fragment), this.h();
			},
			l(l) {
				e = M(l, 'A', { href: !0 });
				var r = K(e);
				S(n.$$.fragment, r), r.forEach(_), this.h();
			},
			h() {
				N(e, 'href', '/daily');
			},
			m(l, r) {
				v(l, e, r), C(n, e, null), (t = !0);
			},
			p(l, r) {
				const o = {};
				r & 1 &&
					(o.class = ve(
						'h-7 w-7 fill-muted-foreground hover:fill-foreground transition-all',
						l[0] === 'daily' && 'fill-foreground bg-accent'
					)),
					r & 32 && (o.$$scope = { dirty: r, ctx: l }),
					n.$set(o);
			},
			i(l) {
				t || (m(n.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(n.$$.fragment, l), (t = !1);
			},
			d(l) {
				l && _(e), k(n);
			}
		}
	);
}
function Wg(s) {
	let e, n;
	return (
		(e = new He({ props: { name: 'checkSquare', class: 'w-[18px] h-[18px]' } })),
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
			p: we,
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function Jg(s) {
	let e, n, t;
	return (
		(n = new nt({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: ve(
					'h-7 w-7 fill-muted-foreground hover:fill-foreground transition-all',
					s[0] === 'tasks' && 'fill-foreground bg-accent'
				),
				scale: 'md',
				$$slots: { default: [Wg] },
				$$scope: { ctx: s }
			}
		})),
		n.$on('click', s[3]),
		{
			c() {
				(e = R('a')), E(n.$$.fragment), this.h();
			},
			l(l) {
				e = M(l, 'A', { href: !0 });
				var r = K(e);
				S(n.$$.fragment, r), r.forEach(_), this.h();
			},
			h() {
				N(e, 'href', 'tasks');
			},
			m(l, r) {
				v(l, e, r), C(n, e, null), (t = !0);
			},
			p(l, r) {
				const o = {};
				r & 1 &&
					(o.class = ve(
						'h-7 w-7 fill-muted-foreground hover:fill-foreground transition-all',
						l[0] === 'tasks' && 'fill-foreground bg-accent'
					)),
					r & 32 && (o.$$scope = { dirty: r, ctx: l }),
					n.$set(o);
			},
			i(l) {
				t || (m(n.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(n.$$.fragment, l), (t = !1);
			},
			d(l) {
				l && _(e), k(n);
			}
		}
	);
}
function Xg(s) {
	let e, n, t, l;
	return (
		(e = new He({ props: { name: 'folder', class: 'w-[18px] h-[18px] group-hover:hidden' } })),
		(t = new He({
			props: { name: 'folderOpen', class: 'w-[18px] h-[18px] hidden group-hover:block' }
		})),
		{
			c() {
				E(e.$$.fragment), (n = q()), E(t.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r), (n = L(r)), S(t.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), v(r, n, o), C(t, r, o), (l = !0);
			},
			p: we,
			i(r) {
				l || (m(e.$$.fragment, r), m(t.$$.fragment, r), (l = !0));
			},
			o(r) {
				g(e.$$.fragment, r), g(t.$$.fragment, r), (l = !1);
			},
			d(r) {
				r && _(n), k(e, r), k(t, r);
			}
		}
	);
}
function Yg(s) {
	let e, n;
	return (
		(e = new nt({
			props: {
				size: 'icon',
				variant: 'ghost',
				class: 'h-7 w-7 fill-muted-foreground hover:fill-foreground group relative',
				scale: 'md',
				$$slots: { default: [Xg] },
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
				const r = {};
				l & 32 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function Zg(s) {
	let e, n;
	return (
		(e = new Ug({})),
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
				n || (m(e.$$.fragment, t), (n = !0));
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
function xg(s) {
	let e, n, t, l, r, o, a, i, u, f, c, h, d;
	return (
		(t = new ht({
			props: { text: 'Notes', side: 'right', $$slots: { default: [Hg] }, $$scope: { ctx: s } }
		})),
		(r = new ht({
			props: { text: 'Daily desk', side: 'right', $$slots: { default: [Gg] }, $$scope: { ctx: s } }
		})),
		(a = new ht({
			props: { text: 'Tasks', side: 'right', $$slots: { default: [Jg] }, $$scope: { ctx: s } }
		})),
		(f = new ht({
			props: {
				text: 'Open collection',
				side: 'right',
				shortcut: Qe['app:open-collection'],
				$$slots: { default: [Yg] },
				$$scope: { ctx: s }
			}
		})),
		(h = new ht({
			props: {
				text: 'Settings',
				side: 'right',
				shortcut: Qe['app:settings'],
				$$slots: { default: [Zg] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = R('div')),
					(n = R('div')),
					E(t.$$.fragment),
					(l = q()),
					E(r.$$.fragment),
					(o = q()),
					E(a.$$.fragment),
					(i = q()),
					(u = R('div')),
					E(f.$$.fragment),
					(c = q()),
					E(h.$$.fragment),
					this.h();
			},
			l($) {
				e = M($, 'DIV', { class: !0 });
				var p = K(e);
				n = M(p, 'DIV', { class: !0 });
				var b = K(n);
				S(t.$$.fragment, b),
					(l = L(b)),
					S(r.$$.fragment, b),
					(o = L(b)),
					S(a.$$.fragment, b),
					b.forEach(_),
					(i = L(p)),
					(u = M(p, 'DIV', { class: !0 }));
				var w = K(u);
				S(f.$$.fragment, w), (c = L(w)), S(h.$$.fragment, w), w.forEach(_), p.forEach(_), this.h();
			},
			h() {
				N(n, 'class', 'flex flex-col items-center gap-2'),
					N(u, 'class', 'flex flex-col items-center gap-2'),
					N(
						e,
						'class',
						'fixed left-0 h-full flex flex-col justify-between items-center w-12 py-12 border-r z-10 bg-background'
					);
			},
			m($, p) {
				v($, e, p),
					O(e, n),
					C(t, n, null),
					O(n, l),
					C(r, n, null),
					O(n, o),
					C(a, n, null),
					O(e, i),
					O(e, u),
					C(f, u, null),
					O(u, c),
					C(h, u, null),
					(d = !0);
			},
			p($, [p]) {
				const b = {};
				p & 33 && (b.$$scope = { dirty: p, ctx: $ }), t.$set(b);
				const w = {};
				p & 33 && (w.$$scope = { dirty: p, ctx: $ }), r.$set(w);
				const y = {};
				p & 33 && (y.$$scope = { dirty: p, ctx: $ }), a.$set(y);
				const I = {};
				p & 32 && (I.$$scope = { dirty: p, ctx: $ }), f.$set(I);
				const Q = {};
				p & 32 && (Q.$$scope = { dirty: p, ctx: $ }), h.$set(Q);
			},
			i($) {
				d ||
					(m(t.$$.fragment, $),
					m(r.$$.fragment, $),
					m(a.$$.fragment, $),
					m(f.$$.fragment, $),
					m(h.$$.fragment, $),
					(d = !0));
			},
			o($) {
				g(t.$$.fragment, $),
					g(r.$$.fragment, $),
					g(a.$$.fragment, $),
					g(f.$$.fragment, $),
					g(h.$$.fragment, $),
					(d = !1);
			},
			d($) {
				$ && _(e), k(t), k(r), k(a), k(f), k(h);
			}
		}
	);
}
function e1(s, e, n) {
	let t = 'notes';
	return (
		Ka.subscribe((i) => {
			const u = i.url.pathname;
			(u === '/notes' || u === '/daily' || u === '/tasks') && n(0, (t = u.slice(1)));
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
class t1 extends pe {
	constructor(e) {
		super(), $e(this, e, e1, xg, me, {});
	}
}
const Fr = 1,
	n1 = 0.9,
	l1 = 0.8,
	s1 = 0.17,
	ql = 0.1,
	jl = 0.999,
	r1 = 0.9999,
	o1 = 0.99,
	i1 = /[\\/_+.#"@[({&]/,
	a1 = /[\\/_+.#"@[({&]/g,
	u1 = /[\s-]/,
	oi = /[\s-]/g;
function Wl(s, e, n, t, l, r, o) {
	if (r === e.length) return l === s.length ? Fr : o1;
	const a = `${l},${r}`;
	if (o[a] !== void 0) return o[a];
	const i = t.charAt(r);
	let u = n.indexOf(i, l),
		f = 0,
		c,
		h,
		d,
		$;
	for (; u >= 0; )
		(c = Wl(s, e, n, t, u + 1, r + 1, o)),
			c > f &&
				(u === l
					? (c *= Fr)
					: i1.test(s.charAt(u - 1))
						? ((c *= l1),
							(d = s.slice(l, u - 1).match(a1)),
							d && l > 0 && (c *= Math.pow(jl, d.length)))
						: u1.test(s.charAt(u - 1))
							? ((c *= n1),
								($ = s.slice(l, u - 1).match(oi)),
								$ && l > 0 && (c *= Math.pow(jl, $.length)))
							: ((c *= s1), l > 0 && (c *= Math.pow(jl, u - l))),
				s.charAt(u) !== e.charAt(r) && (c *= r1)),
			((c < ql && n.charAt(u - 1) === t.charAt(r + 1)) ||
				(t.charAt(r + 1) === t.charAt(r) && n.charAt(u - 1) !== t.charAt(r))) &&
				((h = Wl(s, e, n, t, u + 1, r + 2, o)), h * ql > c && (c = h * ql)),
			c > f && (f = c),
			(u = n.indexOf(i, u + 1));
	return (o[a] = f), f;
}
function Vr(s) {
	return s.toLowerCase().replace(oi, ' ');
}
function f1(s, e) {
	return Wl(s, e, Vr(s), Vr(e), 0, 0, {});
}
const c1 = typeof document < 'u';
function sn(s) {
	return s instanceof HTMLElement;
}
function d1(s) {
	return s instanceof HTMLInputElement;
}
function ns(s) {
	return s === void 0;
}
function Nt() {
	return ea(10);
}
const el = {
	ARROW_DOWN: 'ArrowDown',
	ARROW_UP: 'ArrowUp',
	END: 'End',
	ENTER: 'Enter',
	HOME: 'Home'
};
function m1(s, ...e) {
	const n = {};
	for (const t of Object.keys(s)) e.includes(t) || (n[t] = s[t]);
	return n;
}
function ii(s) {
	const e = {};
	for (const n in s) {
		const t = s[n];
		t !== void 0 && (e[n] = t);
	}
	return e;
}
function _1(s) {
	const e = {};
	return (
		Object.keys(s).forEach((n) => {
			const t = n,
				l = s[t];
			e[t] = bt(l);
		}),
		e
	);
}
function h1(s) {
	return Object.keys(s).reduce((e, n) => (s[n] === void 0 ? e : e + `${n}:${s[n]};`), '');
}
const g1 = {
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
function Sl(s, e, n, t) {
	const l = Array.isArray(e) ? e : [e];
	return (
		l.forEach((r) => s.addEventListener(r, n, t)),
		() => {
			l.forEach((r) => s.removeEventListener(r, n, t));
		}
	);
}
function ai(...s) {
	return (...e) => {
		for (const n of s) typeof n == 'function' && n(...e);
	};
}
const ui = 'Command',
	fi = 'CommandState',
	ci = 'CommandGroup',
	p1 = '[data-cmdk-list-sizer]',
	tl = '[data-cmdk-group]',
	Lr = '[data-cmdk-group-items]',
	$1 = '[data-cmdk-group-heading]',
	di = '[data-cmdk-item]',
	Kl = `${di}:not([aria-disabled="true"])`,
	Lt = 'data-value',
	mi = (s, e) => f1(s, e);
function Ol() {
	return _n(ui);
}
function _l() {
	return _n(fi);
}
function b1(s) {
	const e = Nt();
	return Dt(ci, { id: e, alwaysRender: ns(s) ? !1 : s }), { id: e };
}
function v1() {
	const s = _n(ci);
	if (s) return s;
}
function k1(s) {
	const e = { search: '', value: '', filtered: { count: 0, items: new Map(), groups: new Set() } };
	return bt(s ? { ...e, ...ii(s) } : e);
}
const C1 = {
	label: 'Command menu',
	shouldFilter: !0,
	loop: !1,
	onValueChange: void 0,
	value: void 0,
	filter: mi,
	ids: { root: Nt(), list: Nt(), label: Nt(), input: Nt() }
};
function E1(s) {
	const e = { root: Nt(), list: Nt(), label: Nt(), input: Nt(), ...s.ids },
		n = { ...C1, ...ii(s) },
		t = s.state ?? k1({ value: n.value }),
		l = bt(new Set()),
		r = bt(new Map()),
		o = bt(new Map()),
		a = bt(null),
		i = _1(m1(n, 'value', 'ids')),
		{ shouldFilter: u, loop: f, filter: c, label: h } = i,
		d = {
			value: (j, te) => {
				te !== de(o).get(j) &&
					(o.update((F) => (F.set(j, te), F)),
					t.update((F) => (F.filtered.items.set(j, y(te, F.search)), b(F, de(u)))));
			},
			item: (j, te) => (
				l.update((F) => F.add(j)),
				te &&
					r.update((F) => {
						var H;
						return F.has(te) ? (H = F.get(te)) == null || H.add(j) : F.set(te, new Set([j])), F;
					}),
				t.update((F) => {
					const H = de(u),
						G = p(F, H),
						Te = b(G, H);
					if (!Te.value) {
						const Ne = w();
						Te.value = Ne ?? '';
					}
					return Te;
				}),
				() => {
					o.update((F) => (F.delete(j), F)),
						l.update((F) => (F.delete(j), F)),
						t.update((F) => {
							F.filtered.items.delete(j);
							const H = P(),
								G = p(F);
							return (H == null ? void 0 : H.getAttribute('id')) === j && (G.value = w() ?? ''), F;
						});
				}
			),
			group: (j) => (
				r.update((te) => (te.has(j) || te.set(j, new Set()), te)),
				() => {
					o.update((te) => (te.delete(j), te)), r.update((te) => (te.delete(j), te));
				}
			),
			filter: () => de(u),
			label: de(h) || s['aria-label'] || '',
			commandEl: a,
			ids: e,
			updateState: $
		};
	function $(j, te, F) {
		const H = de(u);
		t.update((G) => {
			var Te;
			return (
				Object.is(G[j], te) ||
					((G[j] = te),
					j === 'search'
						? ((G = p(G, H)),
							(G = b(G, H)),
							gn().then(() => t.update((De) => ((De.value = w() ?? ''), De))))
						: j === 'value' &&
							((Te = s.onValueChange) == null || Te.call(s, G.value), F || gn().then(() => I()))),
				G
			);
		});
	}
	function p(j, te) {
		const F = te ?? de(u),
			H = de(l),
			G = de(o);
		if (!j.search || !F) return (j.filtered.count = H.size), j;
		j.filtered.groups = new Set();
		let Te = 0;
		for (const Ne of H) {
			const Ie = G.get(Ne),
				De = y(Ie, j.search);
			j.filtered.items.set(Ne, De), De > 0 && Te++;
		}
		for (const [Ne, Ie] of de(r))
			for (const De of Ie) {
				const ye = j.filtered.items.get(De);
				ye && ye > 0 && j.filtered.groups.add(Ne);
			}
		return (j.filtered.count = Te), j;
	}
	function b(j, te) {
		const F = te ?? de(u);
		if (!j.search || !F) return j;
		const H = j.filtered.items,
			G = [],
			Te = de(r);
		j.filtered.groups.forEach((De) => {
			const ye = Te.get(De);
			if (!ye) return;
			let re = 0;
			ye.forEach((oe) => {
				const be = H.get(oe);
				ns(be) || (re = Math.max(be, re));
			}),
				G.push([De, re]);
		});
		const Ne = document.getElementById(e.root);
		if (!Ne) return j;
		const Ie = Ne.querySelector(p1);
		return (
			Q(Ne)
				.sort((De, ye) => {
					const re = De.getAttribute(Lt) ?? '',
						oe = ye.getAttribute(Lt) ?? '';
					return (H.get(re) ?? 0) - (H.get(oe) ?? 0);
				})
				.forEach((De) => {
					const ye = De.closest(Lr),
						re = De.closest(`${Lr} > *`);
					if (sn(ye))
						if (De.parentElement === ye) ye.appendChild(De);
						else {
							if (!sn(re)) return;
							ye.appendChild(re);
						}
					else {
						if (!sn(Ie)) return;
						if (De.parentElement === Ie) Ie.appendChild(De);
						else {
							if (!sn(re)) return;
							Ie.appendChild(re);
						}
					}
				}),
			G.sort((De, ye) => ye[1] - De[1]).forEach((De) => {
				var re;
				const ye = Ne.querySelector(`${tl}[${Lt}="${De[0]}"]`);
				sn(ye) && ((re = ye.parentElement) == null || re.appendChild(ye));
			}),
			j
		);
	}
	function w() {
		const j = Q().find((F) => !F.ariaDisabled);
		if (!j) return;
		const te = j.getAttribute(Lt);
		if (te) return te;
	}
	function y(j, te) {
		const F = j == null ? void 0 : j.toLowerCase().trim(),
			H = de(c);
		return H ? (F ? H(F, te) : 0) : F ? mi(F, te) : 0;
	}
	function I() {
		var te;
		const j = P();
		j &&
			(((te = j.parentElement) == null ? void 0 : te.firstChild) === j &&
				gn().then(() => {
					var F, H;
					return (H = (F = j.closest(tl)) == null ? void 0 : F.querySelector($1)) == null
						? void 0
						: H.scrollIntoView({ block: 'nearest' });
				}),
			gn().then(() => j.scrollIntoView({ block: 'nearest' })));
	}
	function Q(j) {
		const te = j ?? document.getElementById(e.root);
		return te ? Array.from(te.querySelectorAll(Kl)).filter((F) => sn(F)) : [];
	}
	function P(j) {
		const te = document.getElementById(e.root);
		if (!te) return;
		const F = te.querySelector(`${Kl}[aria-selected="true"]`);
		return sn(F) ? F : null;
	}
	function V(j) {
		const te = document.getElementById(e.root);
		!te || Q(te)[j];
	}
	function z(j) {
		const te = P(),
			F = Q(),
			H = F.findIndex((Te) => Te === te);
		let G = F[H + j];
		de(f) && (H + j < 0 ? (G = F[F.length - 1]) : H + j === F.length ? (G = F[0]) : (G = F[H + j])),
			G && $('value', G.getAttribute(Lt) ?? '');
	}
	function ee(j) {
		const te = P();
		let F = te == null ? void 0 : te.closest(tl),
			H;
		for (; F && !H; )
			(F = j > 0 ? S1(F, tl) : w1(F, tl)), (H = F == null ? void 0 : F.querySelector(Kl));
		H ? $('value', H.getAttribute(Lt) ?? '') : z(j);
	}
	function se() {
		return V(Q().length - 1);
	}
	function T(j) {
		j.preventDefault(), j.metaKey ? se() : j.altKey ? ee(1) : z(1);
	}
	function W(j) {
		j.preventDefault(), j.metaKey ? V(0) : j.altKey ? ee(-1) : z(-1);
	}
	function U(j) {
		switch (j.key) {
			case el.ARROW_DOWN:
				T(j);
				break;
			case el.ARROW_UP:
				W(j);
				break;
			case el.HOME:
				j.preventDefault(), V(0);
				break;
			case el.END:
				j.preventDefault(), se();
				break;
			case el.ENTER: {
				j.preventDefault();
				const te = P();
				te && te.click();
			}
		}
	}
	Dt(ui, d);
	const B = { subscribe: t.subscribe, update: t.update, set: t.set, updateState: $ };
	return Dt(fi, B), { state: B, handleRootKeydown: U, commandEl: a, ids: e };
}
function S1(s, e) {
	let n = s.nextElementSibling;
	for (; n; ) {
		if (n.matches(e)) return n;
		n = n.nextElementSibling;
	}
}
function w1(s, e) {
	let n = s.previousElementSibling;
	for (; n; ) {
		if (n.matches(e)) return n;
		n = n.previousElementSibling;
	}
}
const y1 = (s) => s & 4,
	T1 = (s) => ({}),
	qr = (s) => ({ ...s[2] }),
	A1 = (s) => s & 4,
	O1 = (s) => ({}),
	jr = (s) => ({ ...s[2] });
function P1(s) {
	let e,
		n,
		t = (s[0] ?? '') + '',
		l,
		r,
		o,
		a,
		i,
		u = [s[6]],
		f = {};
	for (let p = 0; p < u.length; p += 1) f = D(f, u[p]);
	const c = s[18].default,
		h = ae(c, s, s[17], qr);
	let d = [s[5], s[7]],
		$ = {};
	for (let p = 0; p < d.length; p += 1) $ = D($, d[p]);
	return {
		c() {
			(e = R('div')), (n = R('label')), (l = X(t)), (r = q()), h && h.c(), this.h();
		},
		l(p) {
			e = M(p, 'DIV', {});
			var b = K(e);
			n = M(b, 'LABEL', {});
			var w = K(n);
			(l = J(w, t)), w.forEach(_), (r = L(b)), h && h.l(b), b.forEach(_), this.h();
		},
		h() {
			ie(n, f), ie(e, $);
		},
		m(p, b) {
			v(p, e, b),
				O(e, n),
				O(n, l),
				O(e, r),
				h && h.m(e, null),
				(o = !0),
				a || ((i = Ke(s[4].call(null, e))), (a = !0));
		},
		p(p, b) {
			(!o || b & 1) && t !== (t = (p[0] ?? '') + '') && Yl(l, t, f.contenteditable),
				h &&
					h.p &&
					(!o || b & 131076) &&
					ue(h, c, p, p[17], y1(b) || !o ? fe(p[17]) : ce(c, p[17], b, T1), qr),
				ie(e, ($ = ge(d, [p[5], b & 128 && p[7]])));
		},
		i(p) {
			o || (m(h, p), (o = !0));
		},
		o(p) {
			g(h, p), (o = !1);
		},
		d(p) {
			p && _(e), h && h.d(p), (a = !1), i();
		}
	};
}
function N1(s) {
	let e;
	const n = s[18].default,
		t = ae(n, s, s[17], jr);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t &&
				t.p &&
				(!e || r & 131076) &&
				ue(t, n, l, l[17], A1(r) || !e ? fe(l[17]) : ce(n, l[17], r, O1), jr);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function D1(s) {
	let e, n, t, l;
	const r = [N1, P1],
		o = [];
	function a(i, u) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = o[e] = r[e](s)),
		{
			c() {
				n.c(), (t = le());
			},
			l(i) {
				n.l(i), (t = le());
			},
			m(i, u) {
				o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, [u]) {
				let f = e;
				(e = a(i)),
					e === f
						? o[e].p(i, u)
						: (Ee(),
							g(o[f], 1, 1, () => {
								o[f] = null;
							}),
							Se(),
							(n = o[e]),
							n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
							m(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function I1(s, e, n) {
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
	let r = ne(e, l),
		o,
		{ $$slots: a = {}, $$scope: i } = e,
		{ label: u = void 0 } = e,
		{ shouldFilter: f = !0 } = e,
		{ filter: c = void 0 } = e,
		{ value: h = void 0 } = e,
		{ onValueChange: d = void 0 } = e,
		{ loop: $ = void 0 } = e,
		{ onKeydown: p = void 0 } = e,
		{ state: b = void 0 } = e,
		{ ids: w = void 0 } = e,
		{ asChild: y = !1 } = e;
	const {
		commandEl: I,
		handleRootKeydown: Q,
		ids: P,
		state: V
	} = E1({
		label: u,
		shouldFilter: f,
		filter: c,
		value: h,
		onValueChange: (B) => {
			B !== h && (n(8, (h = B)), d == null || d(B));
		},
		loop: $,
		state: b,
		ids: w
	});
	Ae(s, V, (B) => n(16, (o = B)));
	function z(B) {
		B && B !== o.value && Ai(V, (o.value = B), o);
	}
	function ee(B) {
		return I.set(B), { destroy: ai(Sl(B, 'keydown', W)) };
	}
	const se = { role: 'application', id: P.root, 'data-cmdk-root': '' },
		T = { 'data-cmdk-label': '', for: P.input, id: P.label, style: h1(g1) };
	function W(B) {
		p == null || p(B), !B.defaultPrevented && Q(B);
	}
	const U = { action: ee, attrs: se };
	return (
		(s.$$set = (B) => {
			(e = D(D({}, e), Ce(B))),
				n(7, (r = ne(e, l))),
				'label' in B && n(0, (u = B.label)),
				'shouldFilter' in B && n(9, (f = B.shouldFilter)),
				'filter' in B && n(10, (c = B.filter)),
				'value' in B && n(8, (h = B.value)),
				'onValueChange' in B && n(11, (d = B.onValueChange)),
				'loop' in B && n(12, ($ = B.loop)),
				'onKeydown' in B && n(13, (p = B.onKeydown)),
				'state' in B && n(14, (b = B.state)),
				'ids' in B && n(15, (w = B.ids)),
				'asChild' in B && n(1, (y = B.asChild)),
				'$$scope' in B && n(17, (i = B.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 256 && z(h),
				s.$$.dirty & 65536 && n(2, (t = { root: U, label: { attrs: T }, stateStore: V, state: o }));
		}),
		[u, y, t, V, ee, se, T, r, h, f, c, d, $, p, b, w, o, i, a]
	);
}
let M1 = class extends pe {
	constructor(e) {
		super(),
			$e(this, e, I1, D1, me, {
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
function R1(s) {
	return Object.keys(s).reduce((e, n) => (s[n] === void 0 ? e : e + `${n}:${s[n]};`), '');
}
R1({
	position: 'absolute',
	opacity: 0,
	'pointer-events': 'none',
	margin: 0,
	transform: 'translateX(-100%)'
});
function _i(s, e, n, t) {
	const l = Array.isArray(e) ? e : [e];
	return (
		l.forEach((r) => s.addEventListener(r, n, t)),
		() => {
			l.forEach((r) => s.removeEventListener(r, n, t));
		}
	);
}
const F1 = { ESCAPE: 'Escape' };
Bo(void 0, (s) => {
	function e(t) {
		s(t), s(void 0);
	}
	return _i(document, 'pointerup', e, { passive: !1, capture: !0 });
});
Bo(void 0, (s) => {
	function e(t) {
		t && t.key === F1.ESCAPE && s(t), s(void 0);
	}
	return _i(document, 'keydown', e, { passive: !1, capture: !0 });
});
function st(s, e) {
	const n = {};
	return (
		e.forEach((t) => {
			n[t] = { [`data-bits-${s}-${t}`]: '' };
		}),
		(t) => n[t]
	);
}
function hi(s) {
	return Object.keys(s).reduce((e, n) => (s[n] === void 0 ? e : e + `${n}:${s[n]};`), '');
}
hi({
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
hi({
	position: 'absolute',
	width: '25px',
	height: '25px',
	opacity: '0',
	margin: '0px',
	pointerEvents: 'none',
	transform: 'translateX(-100%)'
});
const V1 = 'accordion',
	L1 = ['root', 'content', 'header', 'item', 'trigger'];
st(V1, L1);
const q1 = 'alert-dialog',
	j1 = ['action', 'cancel', 'content', 'description', 'overlay', 'portal', 'title', 'trigger'];
st(q1, j1);
const K1 = 'avatar',
	B1 = ['root', 'image', 'fallback'];
st(K1, B1);
const U1 = 'checkbox',
	z1 = ['root', 'input', 'indicator'];
st(U1, z1);
const H1 = 'collapsible',
	Q1 = ['root', 'content', 'trigger'];
st(H1, Q1);
const G1 = 'context-menu',
	W1 = [
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
st(G1, W1);
const J1 = 'dialog',
	X1 = ['close', 'content', 'description', 'overlay', 'portal', 'title', 'trigger'];
st(J1, X1);
const Y1 = 'dropdown-menu',
	Z1 = [
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
st(Y1, Z1);
const x1 = 'link-preview',
	ep = ['arrow', 'content', 'trigger'];
st(x1, ep);
const tp = 'label',
	np = ['root'];
st(tp, np);
const lp = 'menubar',
	sp = [
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
st(lp, sp);
const rp = 'popover',
	op = ['arrow', 'close', 'content', 'trigger'];
st(rp, op);
const ip = 'progress',
	ap = ['root'];
st(ip, ap);
const up = 'radio-group',
	fp = ['root', 'item', 'input'];
st(up, fp);
const cp = 'select',
	dp = ['arrow', 'content', 'group', 'item', 'input', 'label', 'trigger', 'value'];
st(cp, dp);
const mp = 'separator',
	_p = ['root'];
st(mp, _p);
const hp = 'slider',
	gp = ['root', 'input', 'range', 'thumb', 'tick'];
st(hp, gp);
const pp = 'switch',
	$p = ['root', 'input', 'thumb'];
st(pp, $p);
const bp = 'tabs',
	vp = ['root', 'content', 'list', 'trigger'];
st(bp, vp);
const kp = 'toggle',
	Cp = ['root', 'input'];
st(kp, Cp);
const Ep = 'toggle-group',
	Sp = ['root', 'item'];
st(Ep, Sp);
const wp = 'tooltip',
	yp = ['arrow', 'content', 'trigger'];
st(wp, yp);
const Tp = (s) => ({}),
	Kr = (s) => ({ attrs: s[4] });
function Br(s) {
	let e, n, t, l;
	const r = [Op, Ap],
		o = [];
	function a(i, u) {
		return i[0] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = o[e] = r[e](s)),
		{
			c() {
				n.c(), (t = le());
			},
			l(i) {
				n.l(i), (t = le());
			},
			m(i, u) {
				o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, u) {
				let f = e;
				(e = a(i)),
					e === f
						? o[e].p(i, u)
						: (Ee(),
							g(o[f], 1, 1, () => {
								o[f] = null;
							}),
							Se(),
							(n = o[e]),
							n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
							m(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function Ap(s) {
	let e, n;
	const t = s[8].default,
		l = ae(t, s, s[7], null);
	let r = [s[4], s[5]],
		o = {};
	for (let a = 0; a < r.length; a += 1) o = D(o, r[a]);
	return {
		c() {
			(e = R('div')), l && l.c(), this.h();
		},
		l(a) {
			e = M(a, 'DIV', {});
			var i = K(e);
			l && l.l(i), i.forEach(_), this.h();
		},
		h() {
			ie(e, o);
		},
		m(a, i) {
			v(a, e, i), l && l.m(e, null), (n = !0);
		},
		p(a, i) {
			l && l.p && (!n || i & 128) && ue(l, t, a, a[7], n ? ce(t, a[7], i, null) : fe(a[7]), null),
				ie(e, (o = ge(r, [a[4], i & 32 && a[5]])));
		},
		i(a) {
			n || (m(l, a), (n = !0));
		},
		o(a) {
			g(l, a), (n = !1);
		},
		d(a) {
			a && _(e), l && l.d(a);
		}
	};
}
function Op(s) {
	let e;
	const n = s[8].default,
		t = ae(n, s, s[7], Kr);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 128) && ue(t, n, l, l[7], e ? ce(n, l[7], r, Tp) : fe(l[7]), Kr);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Pp(s) {
	let e,
		n,
		t = !s[1] && s[2] && Br(s);
	return {
		c() {
			t && t.c(), (e = le());
		},
		l(l) {
			t && t.l(l), (e = le());
		},
		m(l, r) {
			t && t.m(l, r), v(l, e, r), (n = !0);
		},
		p(l, [r]) {
			!l[1] && l[2]
				? t
					? (t.p(l, r), r & 6 && m(t, 1))
					: ((t = Br(l)), t.c(), m(t, 1), t.m(e.parentNode, e))
				: t &&
					(Ee(),
					g(t, 1, 1, () => {
						t = null;
					}),
					Se());
		},
		i(l) {
			n || (m(t), (n = !0));
		},
		o(l) {
			g(t), (n = !1);
		},
		d(l) {
			l && _(e), t && t.d(l);
		}
	};
}
function Np(s, e, n) {
	let t;
	const l = ['asChild'];
	let r = ne(e, l),
		o,
		{ $$slots: a = {}, $$scope: i } = e,
		{ asChild: u = !1 } = e,
		f = !0;
	wn(() => {
		n(1, (f = !1));
	});
	const c = _l();
	Ae(s, c, (d) => n(6, (o = d)));
	const h = { 'data-cmdk-empty': '', role: 'presentation' };
	return (
		(s.$$set = (d) => {
			(e = D(D({}, e), Ce(d))),
				n(5, (r = ne(e, l))),
				'asChild' in d && n(0, (u = d.asChild)),
				'$$scope' in d && n(7, (i = d.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 64 && n(2, (t = o.filtered.count === 0));
		}),
		[u, f, t, c, h, r, o, i, a]
	);
}
class Dp extends pe {
	constructor(e) {
		super(), $e(this, e, Np, Pp, me, { asChild: 0 });
	}
}
const Ip = (s) => ({ container: s & 32, group: s & 16 }),
	Ur = (s) => ({ container: s[5], group: s[4], heading: { attrs: s[8] } }),
	Mp = (s) => ({ container: s & 32, group: s & 16 }),
	zr = (s) => ({ container: s[5], group: s[4], heading: { attrs: s[8] } });
function Rp(s) {
	let e,
		n,
		t,
		l,
		r,
		o,
		a = s[0] && Hr(s);
	const i = s[14].default,
		u = ae(i, s, s[13], Ur);
	let f = [s[2]],
		c = {};
	for (let $ = 0; $ < f.length; $ += 1) c = D(c, f[$]);
	let h = [s[3], s[9]],
		d = {};
	for (let $ = 0; $ < h.length; $ += 1) d = D(d, h[$]);
	return {
		c() {
			(e = R('div')), a && a.c(), (n = q()), (t = R('div')), u && u.c(), this.h();
		},
		l($) {
			e = M($, 'DIV', {});
			var p = K(e);
			a && a.l(p), (n = L(p)), (t = M(p, 'DIV', {}));
			var b = K(t);
			u && u.l(b), b.forEach(_), p.forEach(_), this.h();
		},
		h() {
			ie(t, c), ie(e, d);
		},
		m($, p) {
			v($, e, p),
				a && a.m(e, null),
				O(e, n),
				O(e, t),
				u && u.m(t, null),
				(l = !0),
				r || ((o = Ke(s[7].call(null, e))), (r = !0));
		},
		p($, p) {
			$[0] ? (a ? a.p($, p) : ((a = Hr($)), a.c(), a.m(e, n))) : a && (a.d(1), (a = null)),
				u && u.p && (!l || p & 8240) && ue(u, i, $, $[13], l ? ce(i, $[13], p, Ip) : fe($[13]), Ur),
				ie(t, (c = ge(f, [p & 4 && $[2]]))),
				ie(e, (d = ge(h, [p & 8 && $[3], p & 512 && $[9]])));
		},
		i($) {
			l || (m(u, $), (l = !0));
		},
		o($) {
			g(u, $), (l = !1);
		},
		d($) {
			$ && _(e), a && a.d(), u && u.d($), (r = !1), o();
		}
	};
}
function Fp(s) {
	let e;
	const n = s[14].default,
		t = ae(n, s, s[13], zr);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 8240) && ue(t, n, l, l[13], e ? ce(n, l[13], r, Mp) : fe(l[13]), zr);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Hr(s) {
	let e,
		n,
		t = [s[8]],
		l = {};
	for (let r = 0; r < t.length; r += 1) l = D(l, t[r]);
	return {
		c() {
			(e = R('div')), (n = X(s[0])), this.h();
		},
		l(r) {
			e = M(r, 'DIV', {});
			var o = K(e);
			(n = J(o, s[0])), o.forEach(_), this.h();
		},
		h() {
			ie(e, l);
		},
		m(r, o) {
			v(r, e, o), O(e, n);
		},
		p(r, o) {
			o & 1 && Yl(n, r[0], l.contenteditable);
		},
		d(r) {
			r && _(e);
		}
	};
}
function Vp(s) {
	let e, n, t, l;
	const r = [Fp, Rp],
		o = [];
	function a(i, u) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = o[e] = r[e](s)),
		{
			c() {
				n.c(), (t = le());
			},
			l(i) {
				n.l(i), (t = le());
			},
			m(i, u) {
				o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, [u]) {
				let f = e;
				(e = a(i)),
					e === f
						? o[e].p(i, u)
						: (Ee(),
							g(o[f], 1, 1, () => {
								o[f] = null;
							}),
							Se(),
							(n = o[e]),
							n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
							m(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function Lp(s, e, n) {
	let t, l, r, o;
	const a = ['heading', 'value', 'alwaysRender', 'asChild'];
	let i = ne(e, a),
		u,
		{ $$slots: f = {}, $$scope: c } = e,
		{ heading: h = void 0 } = e,
		{ value: d = '' } = e,
		{ alwaysRender: $ = !1 } = e,
		{ asChild: p = !1 } = e;
	const { id: b } = b1($),
		w = Ol(),
		y = _l(),
		I = Nt(),
		Q = Ct(y, (z) => ($ || w.filter() === !1 || !z.search ? !0 : z.filtered.groups.has(b)));
	Ae(s, Q, (z) => n(12, (u = z))), wn(() => w.group(b));
	function P(z) {
		if (d) {
			w.value(b, d), z.setAttribute(Lt, d);
			return;
		}
		h
			? n(10, (d = h.trim().toLowerCase()))
			: z.textContent && n(10, (d = z.textContent.trim().toLowerCase())),
			w.value(b, d),
			z.setAttribute(Lt, d);
	}
	const V = { 'data-cmdk-group-heading': '', 'aria-hidden': !0, id: I };
	return (
		(s.$$set = (z) => {
			(e = D(D({}, e), Ce(z))),
				n(9, (i = ne(e, a))),
				'heading' in z && n(0, (h = z.heading)),
				'value' in z && n(10, (d = z.value)),
				'alwaysRender' in z && n(11, ($ = z.alwaysRender)),
				'asChild' in z && n(1, (p = z.asChild)),
				'$$scope' in z && n(13, (c = z.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 5120 &&
				n(
					3,
					(t = {
						'data-cmdk-group': '',
						role: 'presentation',
						hidden: u ? void 0 : !0,
						'data-value': d
					})
				),
				s.$$.dirty & 1 &&
					n(
						2,
						(l = { 'data-cmdk-group-items': '', role: 'group', 'aria-labelledby': h ? I : void 0 })
					),
				s.$$.dirty & 8 && n(5, (r = { action: P, attrs: t })),
				s.$$.dirty & 4 && n(4, (o = { attrs: l }));
		}),
		[h, p, l, t, o, r, Q, P, V, i, d, $, u, c, f]
	);
}
class qp extends pe {
	constructor(e) {
		super(), $e(this, e, Lp, Vp, me, { heading: 0, value: 10, alwaysRender: 11, asChild: 1 });
	}
}
function jp(s) {
	return new Promise((e) => setTimeout(e, s));
}
const Kp = (s) => ({ attrs: s & 8 }),
	Qr = (s) => ({ action: s[6], attrs: s[3] });
function Bp(s) {
	let e,
		n,
		t,
		l = [s[3], s[7]],
		r = {};
	for (let o = 0; o < l.length; o += 1) r = D(r, l[o]);
	return {
		c() {
			(e = R('input')), this.h();
		},
		l(o) {
			(e = M(o, 'INPUT', {})), this.h();
		},
		h() {
			ie(e, r);
		},
		m(o, a) {
			v(o, e, a),
				e.autofocus && e.focus(),
				s[16](e),
				fs(e, s[0]),
				n ||
					((t = [
						_e(e, 'input', s[17]),
						Ke(s[6].call(null, e)),
						_e(e, 'input', s[12]),
						_e(e, 'focus', s[13]),
						_e(e, 'blur', s[14]),
						_e(e, 'change', s[15])
					]),
					(n = !0));
		},
		p(o, a) {
			ie(e, (r = ge(l, [a & 8 && o[3], a & 128 && o[7]]))),
				a & 1 && e.value !== o[0] && fs(e, o[0]);
		},
		i: we,
		o: we,
		d(o) {
			o && _(e), s[16](null), (n = !1), lt(t);
		}
	};
}
function Up(s) {
	let e;
	const n = s[11].default,
		t = ae(n, s, s[10], Qr);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 1032) && ue(t, n, l, l[10], e ? ce(n, l[10], r, Kp) : fe(l[10]), Qr);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function zp(s) {
	let e, n, t, l;
	const r = [Up, Bp],
		o = [];
	function a(i, u) {
		return i[2] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = o[e] = r[e](s)),
		{
			c() {
				n.c(), (t = le());
			},
			l(i) {
				n.l(i), (t = le());
			},
			m(i, u) {
				o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, [u]) {
				let f = e;
				(e = a(i)),
					e === f
						? o[e].p(i, u)
						: (Ee(),
							g(o[f], 1, 1, () => {
								o[f] = null;
							}),
							Se(),
							(n = o[e]),
							n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
							m(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function Hp(s, e, n) {
	const t = ['autofocus', 'value', 'asChild', 'el'];
	let l = ne(e, t),
		r,
		o,
		{ $$slots: a = {}, $$scope: i } = e;
	const { ids: u, commandEl: f } = Ol(),
		c = _l(),
		h = Ct(c, (U) => U.search);
	Ae(s, h, (U) => n(18, (o = U)));
	const d = Ct(c, (U) => U.value);
	let { autofocus: $ = void 0 } = e,
		{ value: p = o } = e,
		{ asChild: b = !1 } = e,
		{ el: w = void 0 } = e;
	const y = Ct([d, f], ([U, B]) => {
		if (!c1) return;
		const j = B == null ? void 0 : B.querySelector(`${di}[${Lt}="${U}"]`);
		return j == null ? void 0 : j.getAttribute('id');
	});
	Ae(s, y, (U) => n(9, (r = U)));
	function I(U) {
		c.updateState('search', U);
	}
	function Q(U) {
		return (
			$ && jp(10).then(() => U.focus()),
			{
				destroy: Sl(U, 'change', (j) => {
					d1(j.target) && c.updateState('search', j.target.value);
				})
			}
		);
	}
	let P;
	function V(U) {
		ke.call(this, s, U);
	}
	function z(U) {
		ke.call(this, s, U);
	}
	function ee(U) {
		ke.call(this, s, U);
	}
	function se(U) {
		ke.call(this, s, U);
	}
	function T(U) {
		Pe[U ? 'unshift' : 'push'](() => {
			(w = U), n(1, w);
		});
	}
	function W() {
		(p = this.value), n(0, p);
	}
	return (
		(s.$$set = (U) => {
			(e = D(D({}, e), Ce(U))),
				n(7, (l = ne(e, t))),
				'autofocus' in U && n(8, ($ = U.autofocus)),
				'value' in U && n(0, (p = U.value)),
				'asChild' in U && n(2, (b = U.asChild)),
				'el' in U && n(1, (w = U.el)),
				'$$scope' in U && n(10, (i = U.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 1 && I(p),
				s.$$.dirty & 512 &&
					n(
						3,
						(P = {
							type: 'text',
							'data-cmdk-input': '',
							autocomplete: 'off',
							autocorrect: 'off',
							spellcheck: !1,
							'aria-autocomplete': 'list',
							role: 'combobox',
							'aria-expanded': !0,
							'aria-controls': u.list,
							'aria-labelledby': u.label,
							'aria-activedescendant': r ?? void 0,
							id: u.input
						})
					);
		}),
		[p, w, b, P, h, y, Q, l, $, r, i, a, V, z, ee, se, T, W]
	);
}
class Qp extends pe {
	constructor(e) {
		super(), $e(this, e, Hp, zp, me, { autofocus: 8, value: 0, asChild: 2, el: 1 });
	}
}
const Gp = (s) => ({ attrs: s & 4 }),
	Gr = (s) => ({ action: s[6], attrs: s[2] }),
	Wp = (s) => ({ attrs: s & 4 }),
	Wr = (s) => ({ action: s[6], attrs: s[2] });
function Jr(s) {
	let e, n, t, l;
	const r = [Xp, Jp],
		o = [];
	function a(i, u) {
		return i[0] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = o[e] = r[e](s)),
		{
			c() {
				n.c(), (t = le());
			},
			l(i) {
				n.l(i), (t = le());
			},
			m(i, u) {
				o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, u) {
				let f = e;
				(e = a(i)),
					e === f
						? o[e].p(i, u)
						: (Ee(),
							g(o[f], 1, 1, () => {
								o[f] = null;
							}),
							Se(),
							(n = o[e]),
							n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
							m(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function Jp(s) {
	let e, n, t, l;
	const r = s[15].default,
		o = ae(r, s, s[14], Gr);
	let a = [s[2], s[7]],
		i = {};
	for (let u = 0; u < a.length; u += 1) i = D(i, a[u]);
	return {
		c() {
			(e = R('div')), o && o.c(), this.h();
		},
		l(u) {
			e = M(u, 'DIV', {});
			var f = K(e);
			o && o.l(f), f.forEach(_), this.h();
		},
		h() {
			ie(e, i);
		},
		m(u, f) {
			v(u, e, f), o && o.m(e, null), (n = !0), t || ((l = Ke(s[6].call(null, e))), (t = !0));
		},
		p(u, f) {
			o && o.p && (!n || f & 16388) && ue(o, r, u, u[14], n ? ce(r, u[14], f, Gp) : fe(u[14]), Gr),
				ie(e, (i = ge(a, [f & 4 && u[2], f & 128 && u[7]])));
		},
		i(u) {
			n || (m(o, u), (n = !0));
		},
		o(u) {
			g(o, u), (n = !1);
		},
		d(u) {
			u && _(e), o && o.d(u), (t = !1), l();
		}
	};
}
function Xp(s) {
	let e;
	const n = s[15].default,
		t = ae(n, s, s[14], Wr);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 16388) && ue(t, n, l, l[14], e ? ce(n, l[14], r, Wp) : fe(l[14]), Wr);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Yp(s) {
	let e,
		n,
		t = (s[3] || s[1]) && Jr(s);
	return {
		c() {
			t && t.c(), (e = le());
		},
		l(l) {
			t && t.l(l), (e = le());
		},
		m(l, r) {
			t && t.m(l, r), v(l, e, r), (n = !0);
		},
		p(l, [r]) {
			l[3] || l[1]
				? t
					? (t.p(l, r), r & 10 && m(t, 1))
					: ((t = Jr(l)), t.c(), m(t, 1), t.m(e.parentNode, e))
				: t &&
					(Ee(),
					g(t, 1, 1, () => {
						t = null;
					}),
					Se());
		},
		i(l) {
			n || (m(t), (n = !0));
		},
		o(l) {
			g(t), (n = !1);
		},
		d(l) {
			l && _(e), t && t.d(l);
		}
	};
}
function Zp(s, e, n) {
	let t;
	const l = ['disabled', 'value', 'onSelect', 'alwaysRender', 'asChild', 'id'];
	let r = ne(e, l),
		o,
		a,
		{ $$slots: i = {}, $$scope: u } = e,
		{ disabled: f = !1 } = e,
		{ value: c = '' } = e,
		{ onSelect: h = void 0 } = e,
		{ alwaysRender: d = !1 } = e,
		{ asChild: $ = !1 } = e,
		{ id: p = Nt() } = e;
	const b = v1(),
		w = Ol(),
		y = _l(),
		I = d ?? (b == null ? void 0 : b.alwaysRender),
		Q = Ct(y, (T) => {
			if (I || w.filter() === !1 || !T.search) return !0;
			const W = T.filtered.items.get(p);
			return ns(W) ? !1 : W > 0;
		});
	Ae(s, Q, (T) => n(3, (a = T)));
	let P = !0;
	wn(() => (n(1, (P = !1)), w.item(p, b == null ? void 0 : b.id)));
	const V = Ct(y, (T) => T.value === c);
	Ae(s, V, (T) => n(13, (o = T)));
	function z(T) {
		!c && T.textContent && n(8, (c = T.textContent.trim().toLowerCase())),
			w.value(p, c),
			T.setAttribute(Lt, c);
		const W = ai(
			Sl(T, 'pointermove', () => {
				f || se();
			}),
			Sl(T, 'click', () => {
				f || ee();
			})
		);
		return {
			destroy() {
				W();
			}
		};
	}
	function ee() {
		se(), h == null || h(c);
	}
	function se() {
		y.updateState('value', c, !0);
	}
	return (
		(s.$$set = (T) => {
			(e = D(D({}, e), Ce(T))),
				n(7, (r = ne(e, l))),
				'disabled' in T && n(9, (f = T.disabled)),
				'value' in T && n(8, (c = T.value)),
				'onSelect' in T && n(10, (h = T.onSelect)),
				'alwaysRender' in T && n(11, (d = T.alwaysRender)),
				'asChild' in T && n(0, ($ = T.asChild)),
				'id' in T && n(12, (p = T.id)),
				'$$scope' in T && n(14, (u = T.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 13056 &&
				n(
					2,
					(t = {
						'aria-disabled': f ? !0 : void 0,
						'aria-selected': o ? !0 : void 0,
						'data-disabled': f ? !0 : void 0,
						'data-selected': o ? !0 : void 0,
						'data-cmdk-item': '',
						'data-value': c,
						role: 'option',
						id: p
					})
				);
		}),
		[$, P, t, a, Q, V, z, r, c, f, h, d, p, o, u, i]
	);
}
class xp extends pe {
	constructor(e) {
		super(),
			$e(this, e, Zp, Yp, me, {
				disabled: 9,
				value: 8,
				onSelect: 10,
				alwaysRender: 11,
				asChild: 0,
				id: 12
			});
	}
}
const e$ = (s) => ({}),
	Xr = (s) => ({ list: s[7], sizer: s[8] });
function t$(s) {
	let e,
		n,
		t = s[2].search === '',
		l,
		r,
		o,
		a = Yr(s),
		i = [s[6]],
		u = {};
	for (let h = 0; h < i.length; h += 1) u = D(u, i[h]);
	let f = [s[5], s[9]],
		c = {};
	for (let h = 0; h < f.length; h += 1) c = D(c, f[h]);
	return {
		c() {
			(e = R('div')), (n = R('div')), a.c(), this.h();
		},
		l(h) {
			e = M(h, 'DIV', {});
			var d = K(e);
			n = M(d, 'DIV', {});
			var $ = K(n);
			a.l($), $.forEach(_), d.forEach(_), this.h();
		},
		h() {
			ie(n, u), ie(e, c);
		},
		m(h, d) {
			v(h, e, d),
				O(e, n),
				a.m(n, null),
				s[12](e),
				(l = !0),
				r || ((o = Ke(s[4].call(null, n))), (r = !0));
		},
		p(h, d) {
			d & 4 && me(t, (t = h[2].search === ''))
				? (Ee(), g(a, 1, 1, we), Se(), (a = Yr(h)), a.c(), m(a, 1), a.m(n, null))
				: a.p(h, d),
				ie(e, (c = ge(f, [h[5], d & 512 && h[9]])));
		},
		i(h) {
			l || (m(a), (l = !0));
		},
		o(h) {
			g(a), (l = !1);
		},
		d(h) {
			h && _(e), a.d(h), s[12](null), (r = !1), o();
		}
	};
}
function n$(s) {
	let e = s[2].search === '',
		n,
		t,
		l = Zr(s);
	return {
		c() {
			l.c(), (n = le());
		},
		l(r) {
			l.l(r), (n = le());
		},
		m(r, o) {
			l.m(r, o), v(r, n, o), (t = !0);
		},
		p(r, o) {
			o & 4 && me(e, (e = r[2].search === ''))
				? (Ee(), g(l, 1, 1, we), Se(), (l = Zr(r)), l.c(), m(l, 1), l.m(n.parentNode, n))
				: l.p(r, o);
		},
		i(r) {
			t || (m(l), (t = !0));
		},
		o(r) {
			g(l), (t = !1);
		},
		d(r) {
			r && _(n), l.d(r);
		}
	};
}
function Yr(s) {
	let e;
	const n = s[11].default,
		t = ae(n, s, s[10], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t &&
				t.p &&
				(!e || r & 1024) &&
				ue(t, n, l, l[10], e ? ce(n, l[10], r, null) : fe(l[10]), null);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Zr(s) {
	let e;
	const n = s[11].default,
		t = ae(n, s, s[10], Xr);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 1024) && ue(t, n, l, l[10], e ? ce(n, l[10], r, e$) : fe(l[10]), Xr);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function l$(s) {
	let e, n, t, l;
	const r = [n$, t$],
		o = [];
	function a(i, u) {
		return i[1] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = o[e] = r[e](s)),
		{
			c() {
				n.c(), (t = le());
			},
			l(i) {
				n.l(i), (t = le());
			},
			m(i, u) {
				o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, [u]) {
				let f = e;
				(e = a(i)),
					e === f
						? o[e].p(i, u)
						: (Ee(),
							g(o[f], 1, 1, () => {
								o[f] = null;
							}),
							Se(),
							(n = o[e]),
							n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
							m(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function s$(s, e, n) {
	const t = ['el', 'asChild'];
	let l = ne(e, t),
		r,
		{ $$slots: o = {}, $$scope: a } = e;
	const { ids: i } = Ol(),
		u = _l();
	Ae(s, u, (y) => n(2, (r = y)));
	let { el: f = void 0 } = e,
		{ asChild: c = !1 } = e;
	function h(y) {
		let I;
		const Q = y.closest('[data-cmdk-list]');
		if (!sn(Q)) return;
		const P = new ResizeObserver(() => {
			I = requestAnimationFrame(() => {
				const V = y.offsetHeight;
				Q.style.setProperty('--cmdk-list-height', V.toFixed(1) + 'px');
			});
		});
		return (
			P.observe(y),
			{
				destroy() {
					cancelAnimationFrame(I), P.unobserve(y);
				}
			}
		);
	}
	const d = {
			'data-cmdk-list': '',
			role: 'listbox',
			'aria-label': 'Suggestions',
			id: i.list,
			'aria-labelledby': i.input
		},
		$ = { 'data-cmdk-list-sizer': '' },
		p = { attrs: d },
		b = { attrs: $, action: h };
	function w(y) {
		Pe[y ? 'unshift' : 'push'](() => {
			(f = y), n(0, f);
		});
	}
	return (
		(s.$$set = (y) => {
			(e = D(D({}, e), Ce(y))),
				n(9, (l = ne(e, t))),
				'el' in y && n(0, (f = y.el)),
				'asChild' in y && n(1, (c = y.asChild)),
				'$$scope' in y && n(10, (a = y.$$scope));
		}),
		[f, c, r, u, h, d, $, p, b, l, a, o, w]
	);
}
class r$ extends pe {
	constructor(e) {
		super(), $e(this, e, s$, l$, me, { el: 0, asChild: 1 });
	}
}
const o$ = (s) => ({ attrs: s & 2 }),
	xr = (s) => ({ attrs: s[1] }),
	i$ = (s) => ({ attrs: s & 2 }),
	eo = (s) => ({ attrs: s[1] });
function a$(s) {
	let e, n, t;
	const l = s[5].default,
		r = ae(l, s, s[4], xr);
	let o = [s[1], s[2]],
		a = {};
	for (let i = 0; i < o.length; i += 1) a = D(a, o[i]);
	return {
		c() {
			(e = R('div')), (n = R('div')), r && r.c(), this.h();
		},
		l(i) {
			e = M(i, 'DIV', {});
			var u = K(e);
			n = M(u, 'DIV', { 'aria-hidden': !0 });
			var f = K(n);
			r && r.l(f), f.forEach(_), u.forEach(_), this.h();
		},
		h() {
			N(n, 'aria-hidden', ''), ie(e, a);
		},
		m(i, u) {
			v(i, e, u), O(e, n), r && r.m(n, null), (t = !0);
		},
		p(i, u) {
			r && r.p && (!t || u & 18) && ue(r, l, i, i[4], t ? ce(l, i[4], u, o$) : fe(i[4]), xr),
				ie(e, (a = ge(o, [u & 2 && i[1], u & 4 && i[2]])));
		},
		i(i) {
			t || (m(r, i), (t = !0));
		},
		o(i) {
			g(r, i), (t = !1);
		},
		d(i) {
			i && _(e), r && r.d(i);
		}
	};
}
function u$(s) {
	let e;
	const n = s[5].default,
		t = ae(n, s, s[4], eo);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 18) && ue(t, n, l, l[4], e ? ce(n, l[4], r, i$) : fe(l[4]), eo);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function f$(s) {
	let e, n, t, l;
	const r = [u$, a$],
		o = [];
	function a(i, u) {
		return i[0] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = o[e] = r[e](s)),
		{
			c() {
				n.c(), (t = le());
			},
			l(i) {
				n.l(i), (t = le());
			},
			m(i, u) {
				o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, [u]) {
				let f = e;
				(e = a(i)),
					e === f
						? o[e].p(i, u)
						: (Ee(),
							g(o[f], 1, 1, () => {
								o[f] = null;
							}),
							Se(),
							(n = o[e]),
							n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
							m(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function c$(s, e, n) {
	let t;
	const l = ['progress', 'asChild'];
	let r = ne(e, l),
		{ $$slots: o = {}, $$scope: a } = e,
		{ progress: i = 0 } = e,
		{ asChild: u = !1 } = e;
	return (
		(s.$$set = (f) => {
			(e = D(D({}, e), Ce(f))),
				n(2, (r = ne(e, l))),
				'progress' in f && n(3, (i = f.progress)),
				'asChild' in f && n(0, (u = f.asChild)),
				'$$scope' in f && n(4, (a = f.$$scope));
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
		[u, t, r, i, a, o]
	);
}
class d$ extends pe {
	constructor(e) {
		super(), $e(this, e, c$, f$, me, { progress: 3, asChild: 0 });
	}
}
function m$(s) {
	let e;
	const n = s[3].default,
		t = ae(n, s, s[5], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 32) && ue(t, n, l, l[5], e ? ce(n, l[5], r, null) : fe(l[5]), null);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function _$(s) {
	let e, n, t;
	const l = [
		{
			class: ve(
				'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
				s[1]
			)
		},
		s[2]
	];
	function r(a) {
		s[4](a);
	}
	let o = { $$slots: { default: [m$] }, $$scope: { ctx: s } };
	for (let a = 0; a < l.length; a += 1) o = D(o, l[a]);
	return (
		s[0] !== void 0 && (o.value = s[0]),
		(e = new M1({ props: o })),
		Pe.push(() => ft(e, 'value', r)),
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
				const u =
					i & 6
						? ge(l, [
								i & 2 && {
									class: ve(
										'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
										a[1]
									)
								},
								i & 4 && Xe(a[2])
							])
						: {};
				i & 32 && (u.$$scope = { dirty: i, ctx: a }),
					!n && i & 1 && ((n = !0), (u.value = a[0]), ut(() => (n = !1))),
					e.$set(u);
			},
			i(a) {
				t || (m(e.$$.fragment, a), (t = !0));
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
function h$(s, e, n) {
	const t = ['value', 'class'];
	let l = ne(e, t),
		{ $$slots: r = {}, $$scope: o } = e,
		{ value: a = void 0 } = e,
		{ class: i = void 0 } = e;
	function u(f) {
		(a = f), n(0, a);
	}
	return (
		(s.$$set = (f) => {
			(e = D(D({}, e), Ce(f))),
				n(2, (l = ne(e, t))),
				'value' in f && n(0, (a = f.value)),
				'class' in f && n(1, (i = f.class)),
				'$$scope' in f && n(5, (o = f.$$scope));
		}),
		[a, i, l, r, u, o]
	);
}
class g$ extends pe {
	constructor(e) {
		super(), $e(this, e, h$, _$, me, { value: 0, class: 1 });
	}
}
function p$(s) {
	let e;
	const n = s[3].default,
		t = ae(n, s, s[6], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 64) && ue(t, n, l, l[6], e ? ce(n, l[6], r, null) : fe(l[6]), null);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function $$(s) {
	let e, n, t;
	const l = [
		{
			class:
				'[&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:font-medium [&_[data-cmdk-group-heading]]:text-muted-foreground [&_[data-cmdk-group]:not([hidden])_~[data-cmdk-group]]:pt-0 [&_[data-cmdk-group]]:px-2 [&_[data-cmdk-input-wrapper]_svg]:h-5 [&_[data-cmdk-input-wrapper]_svg]:w-5 [&_[data-cmdk-input]]:h-12 [&_[data-cmdk-item]]:px-4 [&_[data-cmdk-item]]:py-3 [&_[data-cmdk-item]_svg]:h-4 [&_[data-cmdk-item]_svg]:w-4'
		},
		s[2]
	];
	function r(a) {
		s[4](a);
	}
	let o = { $$slots: { default: [p$] }, $$scope: { ctx: s } };
	for (let a = 0; a < l.length; a += 1) o = D(o, l[a]);
	return (
		s[1] !== void 0 && (o.value = s[1]),
		(e = new g$({ props: o })),
		Pe.push(() => ft(e, 'value', r)),
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
				const u = i & 4 ? ge(l, [l[0], Xe(a[2])]) : {};
				i & 64 && (u.$$scope = { dirty: i, ctx: a }),
					!n && i & 2 && ((n = !0), (u.value = a[1]), ut(() => (n = !1))),
					e.$set(u);
			},
			i(a) {
				t || (m(e.$$.fragment, a), (t = !0));
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
function b$(s) {
	let e, n;
	return (
		(e = new si({
			props: {
				class: 'overflow-hidden p-0 !w-[518px] top-[15%]',
				$$slots: { default: [$$] },
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
				const r = {};
				l & 70 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function v$(s) {
	let e, n, t;
	const l = [s[2]];
	function r(a) {
		s[5](a);
	}
	let o = { $$slots: { default: [b$] }, $$scope: { ctx: s } };
	for (let a = 0; a < l.length; a += 1) o = D(o, l[a]);
	return (
		s[0] !== void 0 && (o.open = s[0]),
		(e = new ri({ props: o })),
		Pe.push(() => ft(e, 'open', r)),
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
				const u = i & 4 ? ge(l, [Xe(a[2])]) : {};
				i & 70 && (u.$$scope = { dirty: i, ctx: a }),
					!n && i & 1 && ((n = !0), (u.open = a[0]), ut(() => (n = !1))),
					e.$set(u);
			},
			i(a) {
				t || (m(e.$$.fragment, a), (t = !0));
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
function k$(s, e, n) {
	const t = ['open', 'value'];
	let l = ne(e, t),
		{ $$slots: r = {}, $$scope: o } = e,
		{ open: a = !1 } = e,
		{ value: i = void 0 } = e;
	function u(c) {
		(i = c), n(1, i);
	}
	function f(c) {
		(a = c), n(0, a);
	}
	return (
		(s.$$set = (c) => {
			(e = D(D({}, e), Ce(c))),
				n(2, (l = ne(e, t))),
				'open' in c && n(0, (a = c.open)),
				'value' in c && n(1, (i = c.value)),
				'$$scope' in c && n(6, (o = c.$$scope));
		}),
		[a, i, l, r, u, f, o]
	);
}
class C$ extends pe {
	constructor(e) {
		super(), $e(this, e, k$, v$, me, { open: 0, value: 1 });
	}
}
function E$(s) {
	let e;
	const n = s[2].default,
		t = ae(n, s, s[3], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 8) && ue(t, n, l, l[3], e ? ce(n, l[3], r, null) : fe(l[3]), null);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function S$(s) {
	let e, n;
	const t = [{ class: ve('py-6 text-center text-sm', s[0]) }, s[1]];
	let l = { $$slots: { default: [E$] }, $$scope: { ctx: s } };
	for (let r = 0; r < t.length; r += 1) l = D(l, t[r]);
	return (
		(e = new Dp({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), (n = !0);
			},
			p(r, [o]) {
				const a =
					o & 3
						? ge(t, [o & 1 && { class: ve('py-6 text-center text-sm', r[0]) }, o & 2 && Xe(r[1])])
						: {};
				o & 8 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
			},
			i(r) {
				n || (m(e.$$.fragment, r), (n = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (n = !1);
			},
			d(r) {
				k(e, r);
			}
		}
	);
}
function w$(s, e, n) {
	const t = ['class'];
	let l = ne(e, t),
		{ $$slots: r = {}, $$scope: o } = e,
		{ class: a = void 0 } = e;
	return (
		(s.$$set = (i) => {
			(e = D(D({}, e), Ce(i))),
				n(1, (l = ne(e, t))),
				'class' in i && n(0, (a = i.class)),
				'$$scope' in i && n(3, (o = i.$$scope));
		}),
		[a, l, r, o]
	);
}
class gi extends pe {
	constructor(e) {
		super(), $e(this, e, w$, S$, me, { class: 0 });
	}
}
function y$(s) {
	let e;
	const n = s[2].default,
		t = ae(n, s, s[3], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 8) && ue(t, n, l, l[3], e ? ce(n, l[3], r, null) : fe(l[3]), null);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function T$(s) {
	let e, n;
	const t = [
		{
			class: ve(
				'overflow-hidden p-0 text-foreground [&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:py-1.5 [&_[data-cmdk-group-heading]]:text-xs [&_[data-cmdk-group-heading]]:font-medium [&_[data-cmdk-group-heading]]:text-muted-foreground',
				s[0]
			)
		},
		s[1]
	];
	let l = { $$slots: { default: [y$] }, $$scope: { ctx: s } };
	for (let r = 0; r < t.length; r += 1) l = D(l, t[r]);
	return (
		(e = new qp({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), (n = !0);
			},
			p(r, [o]) {
				const a =
					o & 3
						? ge(t, [
								o & 1 && {
									class: ve(
										'overflow-hidden p-0 text-foreground [&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:py-1.5 [&_[data-cmdk-group-heading]]:text-xs [&_[data-cmdk-group-heading]]:font-medium [&_[data-cmdk-group-heading]]:text-muted-foreground',
										r[0]
									)
								},
								o & 2 && Xe(r[1])
							])
						: {};
				o & 8 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
			},
			i(r) {
				n || (m(e.$$.fragment, r), (n = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (n = !1);
			},
			d(r) {
				k(e, r);
			}
		}
	);
}
function A$(s, e, n) {
	const t = ['class'];
	let l = ne(e, t),
		{ $$slots: r = {}, $$scope: o } = e,
		{ class: a = void 0 } = e;
	return (
		(s.$$set = (i) => {
			(e = D(D({}, e), Ce(i))),
				n(1, (l = ne(e, t))),
				'class' in i && n(0, (a = i.class)),
				'$$scope' in i && n(3, (o = i.$$scope));
		}),
		[a, l, r, o]
	);
}
class Yt extends pe {
	constructor(e) {
		super(), $e(this, e, A$, T$, me, { class: 0 });
	}
}
const O$ = (s) => ({ action: s & 32, attrs: s & 64 }),
	to = (s) => ({ action: s[5], attrs: s[6] });
function P$(s) {
	let e;
	const n = s[3].default,
		t = ae(n, s, s[4], to);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 112) && ue(t, n, l, l[4], e ? ce(n, l[4], r, O$) : fe(l[4]), to);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function N$(s) {
	let e, n;
	const t = [
		{ asChild: s[0] },
		{
			class: ve(
				'relative flex cursor-default select-none items-center font-light rounded-lg h-10 px-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				s[1]
			)
		},
		s[2]
	];
	let l = {
		$$slots: {
			default: [
				P$,
				({ action: r, attrs: o }) => ({ 5: r, 6: o }),
				({ action: r, attrs: o }) => (r ? 32 : 0) | (o ? 64 : 0)
			]
		},
		$$scope: { ctx: s }
	};
	for (let r = 0; r < t.length; r += 1) l = D(l, t[r]);
	return (
		(e = new xp({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), (n = !0);
			},
			p(r, [o]) {
				const a =
					o & 7
						? ge(t, [
								o & 1 && { asChild: r[0] },
								o & 2 && {
									class: ve(
										'relative flex cursor-default select-none items-center font-light rounded-lg h-10 px-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
										r[1]
									)
								},
								o & 4 && Xe(r[2])
							])
						: {};
				o & 112 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
			},
			i(r) {
				n || (m(e.$$.fragment, r), (n = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (n = !1);
			},
			d(r) {
				k(e, r);
			}
		}
	);
}
function D$(s, e, n) {
	const t = ['asChild', 'class'];
	let l = ne(e, t),
		{ $$slots: r = {}, $$scope: o } = e,
		{ asChild: a = !1 } = e,
		{ class: i = void 0 } = e;
	return (
		(s.$$set = (u) => {
			(e = D(D({}, e), Ce(u))),
				n(2, (l = ne(e, t))),
				'asChild' in u && n(0, (a = u.asChild)),
				'class' in u && n(1, (i = u.class)),
				'$$scope' in u && n(4, (o = u.$$scope));
		}),
		[a, i, l, r, o]
	);
}
class gt extends pe {
	constructor(e) {
		super(), $e(this, e, D$, N$, me, { asChild: 0, class: 1 });
	}
}
function I$(s) {
	let e, n, t, l;
	const r = [
		{
			class: ve(
				'flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
				s[1]
			)
		},
		s[2]
	];
	function o(i) {
		s[3](i);
	}
	let a = {};
	for (let i = 0; i < r.length; i += 1) a = D(a, r[i]);
	return (
		s[0] !== void 0 && (a.value = s[0]),
		(n = new Qp({ props: a })),
		Pe.push(() => ft(n, 'value', o)),
		{
			c() {
				(e = R('div')), E(n.$$.fragment), this.h();
			},
			l(i) {
				e = M(i, 'DIV', { class: !0, 'data-cmdk-input-wrapper': !0 });
				var u = K(e);
				S(n.$$.fragment, u), u.forEach(_), this.h();
			},
			h() {
				N(e, 'class', 'flex items-center border-b px-3'), N(e, 'data-cmdk-input-wrapper', '');
			},
			m(i, u) {
				v(i, e, u), C(n, e, null), (l = !0);
			},
			p(i, [u]) {
				const f =
					u & 6
						? ge(r, [
								u & 2 && {
									class: ve(
										'flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
										i[1]
									)
								},
								u & 4 && Xe(i[2])
							])
						: {};
				!t && u & 1 && ((t = !0), (f.value = i[0]), ut(() => (t = !1))), n.$set(f);
			},
			i(i) {
				l || (m(n.$$.fragment, i), (l = !0));
			},
			o(i) {
				g(n.$$.fragment, i), (l = !1);
			},
			d(i) {
				i && _(e), k(n);
			}
		}
	);
}
function M$(s, e, n) {
	const t = ['class', 'value'];
	let l = ne(e, t),
		{ class: r = void 0 } = e,
		{ value: o = '' } = e;
	function a(i) {
		(o = i), n(0, o);
	}
	return (
		(s.$$set = (i) => {
			(e = D(D({}, e), Ce(i))),
				n(2, (l = ne(e, t))),
				'class' in i && n(1, (r = i.class)),
				'value' in i && n(0, (o = i.value));
		}),
		[o, r, l, a]
	);
}
class R$ extends pe {
	constructor(e) {
		super(), $e(this, e, M$, I$, me, { class: 1, value: 0 });
	}
}
function F$(s) {
	let e;
	const n = s[2].default,
		t = ae(n, s, s[3], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 8) && ue(t, n, l, l[3], e ? ce(n, l[3], r, null) : fe(l[3]), null);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function V$(s) {
	let e, n;
	const t = [{ class: ve('max-h-[300px] overflow-y-auto overflow-x-hidden', s[0]) }, s[1]];
	let l = { $$slots: { default: [F$] }, $$scope: { ctx: s } };
	for (let r = 0; r < t.length; r += 1) l = D(l, t[r]);
	return (
		(e = new r$({ props: l })),
		{
			c() {
				E(e.$$.fragment);
			},
			l(r) {
				S(e.$$.fragment, r);
			},
			m(r, o) {
				C(e, r, o), (n = !0);
			},
			p(r, [o]) {
				const a =
					o & 3
						? ge(t, [
								o & 1 && { class: ve('max-h-[300px] overflow-y-auto overflow-x-hidden', r[0]) },
								o & 2 && Xe(r[1])
							])
						: {};
				o & 8 && (a.$$scope = { dirty: o, ctx: r }), e.$set(a);
			},
			i(r) {
				n || (m(e.$$.fragment, r), (n = !0));
			},
			o(r) {
				g(e.$$.fragment, r), (n = !1);
			},
			d(r) {
				k(e, r);
			}
		}
	);
}
function L$(s, e, n) {
	const t = ['class'];
	let l = ne(e, t),
		{ $$slots: r = {}, $$scope: o } = e,
		{ class: a = void 0 } = e;
	return (
		(s.$$set = (i) => {
			(e = D(D({}, e), Ce(i))),
				n(1, (l = ne(e, t))),
				'class' in i && n(0, (a = i.class)),
				'$$scope' in i && n(3, (o = i.$$scope));
		}),
		[a, l, r, o]
	);
}
class q$ extends pe {
	constructor(e) {
		super(), $e(this, e, L$, V$, me, { class: 0 });
	}
}
const ls = d$,
	wl = async (s, e) => {
		const n = [];
		return (
			e || (e = await Oa().catch(() => [])),
			e.forEach(async (t) => {
				var l, r;
				if (s) {
					if (t.children !== void 0 && !((l = t.name) != null && l.startsWith('.'))) {
						const o = t.path,
							a = t.path.replace(de(Jt), '');
						n.push({ path: o, name: a });
						const i = await wl(s, t.children);
						n.push(...i);
					}
				} else if (t.children === void 0 && !((r = t.name) != null && r.startsWith('.'))) {
					const o = t.path,
						a = t.path.replace(de(Jt), '');
					n.push({ path: o, name: a });
				} else {
					const o = await wl(s, t.children);
					n.push(...o);
				}
			}),
			n
		);
	},
	{ Boolean: hl } = za;
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
function ro(s, e, n) {
	const t = s.slice();
	return (t[37] = e[n]), t;
}
function oo(s, e, n) {
	const t = s.slice();
	return (t[40] = e[n]), t;
}
function io(s) {
	let e, n;
	return (
		(e = new gi({
			props: {
				class: 'text-foreground/60 font-light',
				$$slots: { default: [j$] },
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
				n || (m(e.$$.fragment, t), (n = !0));
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
function j$(s) {
	let e;
	return {
		c() {
			e = X('No commands found');
		},
		l(n) {
			e = J(n, 'No commands found');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function K$(s) {
	let e, n;
	return (
		(e = new Yt({ props: { heading: 'Share', $$slots: { default: [X$] }, $$scope: { ctx: s } } })),
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
				const r = {};
				l[1] & 33554432 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function B$(s) {
	let e, n;
	return (
		(e = new Yt({
			props: { heading: 'Help & Support', $$slots: { default: [e0] }, $$scope: { ctx: s } }
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
				const r = {};
				l[1] & 33554432 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function U$(s) {
	let e, n, t, l;
	const r = [n0, t0],
		o = [];
	function a(i, u) {
		return i[7] ? 0 : 1;
	}
	return (
		(e = a(s)),
		(n = o[e] = r[e](s)),
		{
			c() {
				n.c(), (t = le());
			},
			l(i) {
				n.l(i), (t = le());
			},
			m(i, u) {
				o[e].m(i, u), v(i, t, u), (l = !0);
			},
			p(i, u) {
				let f = e;
				(e = a(i)),
					e === f
						? o[e].p(i, u)
						: (Ee(),
							g(o[f], 1, 1, () => {
								o[f] = null;
							}),
							Se(),
							(n = o[e]),
							n ? n.p(i, u) : ((n = o[e] = r[e](i)), n.c()),
							m(n, 1),
							n.m(t.parentNode, t));
			},
			i(i) {
				l || (m(n), (l = !0));
			},
			o(i) {
				g(n), (l = !1);
			},
			d(i) {
				i && _(t), o[e].d(i);
			}
		}
	);
}
function z$(s) {
	let e, n;
	return (
		(e = new Yt({
			props: { heading: 'Change theme...', $$slots: { default: [p0] }, $$scope: { ctx: s } }
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
				const r = {};
				(l[0] & 512) | (l[1] & 33554432) && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function H$(s) {
	let e, n;
	return (
		(e = new Yt({
			props: { heading: 'Open note...', $$slots: { default: [S0] }, $$scope: { ctx: s } }
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
				const r = {};
				l[1] & 33554432 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function Q$(s) {
	let e, n;
	return (
		(e = new Yt({
			props: { heading: 'Move note to...', $$slots: { default: [N0] }, $$scope: { ctx: s } }
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
				const r = {};
				(l[0] & 256) | (l[1] & 33554432) && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function G$(s) {
	let e,
		n,
		t = tt(mn),
		l = [];
	for (let o = 0; o < t.length; o += 1) l[o] = $o(ro(s, t, o));
	const r = (o) =>
		g(l[o], 1, 1, () => {
			l[o] = null;
		});
	return {
		c() {
			for (let o = 0; o < l.length; o += 1) l[o].c();
			e = le();
		},
		l(o) {
			for (let a = 0; a < l.length; a += 1) l[a].l(o);
			e = le();
		},
		m(o, a) {
			for (let i = 0; i < l.length; i += 1) l[i] && l[i].m(o, a);
			v(o, e, a), (n = !0);
		},
		p(o, a) {
			if (a[0] & 2048) {
				t = tt(mn);
				let i;
				for (i = 0; i < t.length; i += 1) {
					const u = ro(o, t, i);
					l[i]
						? (l[i].p(u, a), m(l[i], 1))
						: ((l[i] = $o(u)), l[i].c(), m(l[i], 1), l[i].m(e.parentNode, e));
				}
				for (Ee(), i = t.length; i < l.length; i += 1) r(i);
				Se();
			}
		},
		i(o) {
			if (!n) {
				for (let a = 0; a < t.length; a += 1) m(l[a]);
				n = !0;
			}
		},
		o(o) {
			l = l.filter(hl);
			for (let a = 0; a < l.length; a += 1) g(l[a]);
			n = !1;
		},
		d(o) {
			o && _(e), It(l, o);
		}
	};
}
function W$(s) {
	let e, n, t;
	return (
		(e = new He({ props: { name: 'browserUrl' } })),
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
			m(l, r) {
				C(e, l, r), v(l, n, r), (t = !0);
			},
			p: we,
			i(l) {
				t || (m(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				l && _(n), k(e, l);
			}
		}
	);
}
function J$(s) {
	let e, n, t;
	return (
		(e = new Wd({})),
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
			m(l, r) {
				C(e, l, r), v(l, n, r), (t = !0);
			},
			i(l) {
				t || (m(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				l && _(n), k(e, l);
			}
		}
	);
}
function X$(s) {
	let e, n, t, l, r;
	return (
		(e = new gt({
			props: {
				class:
					'text-foreground/90 gap-3 [&>*]:text-foreground/90 [&>*]:aria-selected:text-foreground [&>*]:fill-foreground/50 [&>*]:aria-selected:fill-foreground',
				value: 'copy_link',
				onSelect: s[29],
				$$slots: { default: [W$] },
				$$scope: { ctx: s }
			}
		})),
		(l = new gt({
			props: {
				class:
					'text-foreground/90 gap-3 [&>*]:text-foreground/90 [&>*]:aria-selected:stroke-foreground [&>*]:stroke-foreground/50 [&>*]:stroke-[2px]',
				value: 'share_on_twitter',
				onSelect: s[30],
				$$slots: { default: [J$] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				E(e.$$.fragment), (n = q()), (t = R('a')), E(l.$$.fragment), this.h();
			},
			l(o) {
				S(e.$$.fragment, o), (n = L(o)), (t = M(o, 'A', { href: !0, target: !0, rel: !0 }));
				var a = K(t);
				S(l.$$.fragment, a), a.forEach(_), this.h();
			},
			h() {
				N(t, 'href', 'https://go.typyst.md/tweet'),
					N(t, 'target', '_blank'),
					N(t, 'rel', 'noopener noreferrer');
			},
			m(o, a) {
				C(e, o, a), v(o, n, a), v(o, t, a), C(l, t, null), (r = !0);
			},
			p(o, a) {
				const i = {};
				a[1] & 33554432 && (i.$$scope = { dirty: a, ctx: o }), e.$set(i);
				const u = {};
				a[1] & 33554432 && (u.$$scope = { dirty: a, ctx: o }), l.$set(u);
			},
			i(o) {
				r || (m(e.$$.fragment, o), m(l.$$.fragment, o), (r = !0));
			},
			o(o) {
				g(e.$$.fragment, o), g(l.$$.fragment, o), (r = !1);
			},
			d(o) {
				o && (_(n), _(t)), k(e, o), k(l);
			}
		}
	);
}
function Y$(s) {
	let e, n, t;
	return (
		(e = new He({ props: { name: 'heart' } })),
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
			m(l, r) {
				C(e, l, r), v(l, n, r), (t = !0);
			},
			p: we,
			i(l) {
				t || (m(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				l && _(n), k(e, l);
			}
		}
	);
}
function Z$(s) {
	let e, n, t;
	return (
		(e = new He({ props: { name: 'lifebouy' } })),
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
			m(l, r) {
				C(e, l, r), v(l, n, r), (t = !0);
			},
			p: we,
			i(l) {
				t || (m(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				l && _(n), k(e, l);
			}
		}
	);
}
function x$(s) {
	let e, n, t;
	return (
		(e = new He({ props: { name: 'commentSquareText' } })),
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
			m(l, r) {
				C(e, l, r), v(l, n, r), (t = !0);
			},
			p: we,
			i(l) {
				t || (m(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				l && _(n), k(e, l);
			}
		}
	);
}
function e0(s) {
	let e, n, t, l, r, o, a, i, u;
	return (
		(n = new gt({
			props: {
				class:
					'text-foreground/90 gap-3 [&>*]:text-foreground/90 [&>*]:aria-selected:text-foreground [&>*]:fill-foreground/50 [&>*]:aria-selected:fill-foreground',
				value: 'sponsor',
				onSelect: s[26],
				$$slots: { default: [Y$] },
				$$scope: { ctx: s }
			}
		})),
		(r = new gt({
			props: {
				class:
					'text-foreground/90 gap-3 [&>*]:text-foreground/90 [&>*]:aria-selected:text-foreground [&>*]:fill-foreground/50 [&>*]:aria-selected:fill-foreground',
				value: 'help',
				onSelect: s[27],
				$$slots: { default: [Z$] },
				$$scope: { ctx: s }
			}
		})),
		(i = new gt({
			props: {
				class:
					'text-foreground/90 gap-3 [&>*]:text-foreground/90 [&>*]:aria-selected:text-foreground [&>*]:fill-foreground/50 [&>*]:aria-selected:fill-foreground',
				value: 'feedback',
				onSelect: s[28],
				$$slots: { default: [x$] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = R('a')),
					E(n.$$.fragment),
					(t = q()),
					(l = R('a')),
					E(r.$$.fragment),
					(o = q()),
					(a = R('a')),
					E(i.$$.fragment),
					this.h();
			},
			l(f) {
				e = M(f, 'A', { href: !0, target: !0, rel: !0 });
				var c = K(e);
				S(n.$$.fragment, c),
					c.forEach(_),
					(t = L(f)),
					(l = M(f, 'A', { href: !0, target: !0, rel: !0 }));
				var h = K(l);
				S(r.$$.fragment, h),
					h.forEach(_),
					(o = L(f)),
					(a = M(f, 'A', { href: !0, target: !0, rel: !0 }));
				var d = K(a);
				S(i.$$.fragment, d), d.forEach(_), this.h();
			},
			h() {
				N(e, 'href', 'https://go.typyst.md/sponsor'),
					N(e, 'target', '_blank'),
					N(e, 'rel', 'noopener noreferrer'),
					N(l, 'href', 'https://go.typyst.md/help'),
					N(l, 'target', '_blank'),
					N(l, 'rel', 'noopener noreferrer'),
					N(a, 'href', 'https://go.typyst.md/feedback'),
					N(a, 'target', '_blank'),
					N(a, 'rel', 'noopener noreferrer');
			},
			m(f, c) {
				v(f, e, c),
					C(n, e, null),
					v(f, t, c),
					v(f, l, c),
					C(r, l, null),
					v(f, o, c),
					v(f, a, c),
					C(i, a, null),
					(u = !0);
			},
			p(f, c) {
				const h = {};
				c[1] & 33554432 && (h.$$scope = { dirty: c, ctx: f }), n.$set(h);
				const d = {};
				c[1] & 33554432 && (d.$$scope = { dirty: c, ctx: f }), r.$set(d);
				const $ = {};
				c[1] & 33554432 && ($.$$scope = { dirty: c, ctx: f }), i.$set($);
			},
			i(f) {
				u || (m(n.$$.fragment, f), m(r.$$.fragment, f), m(i.$$.fragment, f), (u = !0));
			},
			o(f) {
				g(n.$$.fragment, f), g(r.$$.fragment, f), g(i.$$.fragment, f), (u = !1);
			},
			d(f) {
				f && (_(e), _(t), _(l), _(o), _(a)), k(n), k(r), k(i);
			}
		}
	);
}
function t0(s) {
	let e, n, t, l;
	e = new Yt({
		props: { heading: 'Open collection', $$slots: { default: [s0] }, $$scope: { ctx: s } }
	});
	let r = {
		ctx: s,
		current: null,
		token: null,
		hasCatch: !0,
		pending: c0,
		then: a0,
		catch: r0,
		value: 52,
		error: 47,
		blocks: [, , ,]
	};
	return (
		xl(Pa(), r),
		{
			c() {
				E(e.$$.fragment), (n = q()), (t = le()), r.block.c();
			},
			l(o) {
				S(e.$$.fragment, o), (n = L(o)), (t = le()), r.block.l(o);
			},
			m(o, a) {
				C(e, o, a),
					v(o, n, a),
					v(o, t, a),
					r.block.m(o, (r.anchor = a)),
					(r.mount = () => t.parentNode),
					(r.anchor = t),
					(l = !0);
			},
			p(o, a) {
				s = o;
				const i = {};
				(a[0] & 65) | (a[1] & 33554432) && (i.$$scope = { dirty: a, ctx: s }),
					e.$set(i),
					es(r, s, a);
			},
			i(o) {
				l || (m(e.$$.fragment, o), m(r.block), (l = !0));
			},
			o(o) {
				g(e.$$.fragment, o);
				for (let a = 0; a < 3; a += 1) {
					const i = r.blocks[a];
					g(i);
				}
				l = !1;
			},
			d(o) {
				o && (_(n), _(t)), k(e, o), r.block.d(o), (r.token = null), (r = null);
			}
		}
	);
}
function n0(s) {
	let e, n;
	return (
		(e = new gi({
			props: {
				class: 'text-foreground/60 font-light',
				$$slots: { default: [m0] },
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
				const r = {};
				(l[0] & 128) | (l[1] & 33554432) && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function l0(s) {
	let e, n, t, l, r, o, a;
	return (
		(e = new He({ props: { name: 'folderPlus' } })),
		{
			c() {
				E(e.$$.fragment),
					(n = q()),
					(t = R('input')),
					(l = X(`
						Open new collection`)),
					this.h();
			},
			l(i) {
				S(e.$$.fragment, i),
					(n = L(i)),
					(t = M(i, 'INPUT', { type: !0, class: !0, webkitdirectory: !0 })),
					(l = J(
						i,
						`
						Open new collection`
					)),
					this.h();
			},
			h() {
				N(t, 'type', 'file'),
					N(t, 'class', 'hidden'),
					N(t, 'webkitdirectory', !0),
					(t.multiple = !0);
			},
			m(i, u) {
				C(e, i, u),
					v(i, n, u),
					v(i, t, u),
					s[21](t),
					v(i, l, u),
					(r = !0),
					o || ((a = _e(t, 'change', s[20])), (o = !0));
			},
			p: we,
			i(i) {
				r || (m(e.$$.fragment, i), (r = !0));
			},
			o(i) {
				g(e.$$.fragment, i), (r = !1);
			},
			d(i) {
				i && (_(n), _(t), _(l)), k(e, i), s[21](null), (o = !1), a();
			}
		}
	);
}
function s0(s) {
	let e, n;
	return (
		(e = new gt({
			props: {
				class:
					'text-foreground/90 gap-3 [&>*]:text-foreground/90 [&>*]:aria-selected:text-foreground [&>*]:fill-foreground/50 [&>*]:aria-selected:fill-foreground',
				onSelect: s[22],
				$$slots: { default: [l0] },
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
				const r = {};
				l[0] & 64 && (r.onSelect = t[22]),
					(l[0] & 65) | (l[1] & 33554432) && (r.$$scope = { dirty: l, ctx: t }),
					e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function r0(s) {
	let e, n;
	return (
		(e = new Yt({
			props: {
				heading: 'Browse recent collections',
				$$slots: { default: [i0] },
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
				const r = {};
				l[1] & 33554432 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function o0(s) {
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
		m(l, r) {
			v(l, e, r), v(l, t, r);
		},
		p: we,
		d(l) {
			l && (_(e), _(t));
		}
	};
}
function i0(s) {
	let e, n;
	return (
		(e = new gt({
			props: { class: 'text-foreground/90', $$slots: { default: [o0] }, $$scope: { ctx: s } }
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
				const r = {};
				l[1] & 33554432 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function a0(s) {
	let e = s[52].filter(s[12]).length > 0,
		n,
		t,
		l = e && ao(s);
	return {
		c() {
			l && l.c(), (n = le());
		},
		l(r) {
			l && l.l(r), (n = le());
		},
		m(r, o) {
			l && l.m(r, o), v(r, n, o), (t = !0);
		},
		p(r, o) {
			o[0] & 1024 && (e = r[52].filter(r[12]).length > 0),
				e
					? l
						? (l.p(r, o), o[0] & 1024 && m(l, 1))
						: ((l = ao(r)), l.c(), m(l, 1), l.m(n.parentNode, n))
					: l &&
						(Ee(),
						g(l, 1, 1, () => {
							l = null;
						}),
						Se());
		},
		i(r) {
			t || (m(l), (t = !0));
		},
		o(r) {
			g(l), (t = !1);
		},
		d(r) {
			r && _(n), l && l.d(r);
		}
	};
}
function ao(s) {
	let e, n;
	return (
		(e = new Yt({
			props: {
				heading: 'Browse recent collections',
				$$slots: { default: [f0] },
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
				const r = {};
				(l[0] & 1024) | (l[1] & 33554432) && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function u0(s) {
	let e,
		n,
		t,
		l,
		r,
		o,
		a = s[53].name + '',
		i,
		u,
		f,
		c = gs(new Date(s[53].lastOpened)) + '',
		h,
		d,
		$;
	return (
		(t = new He({ props: { name: 'folder' } })),
		{
			c() {
				(e = R('div')),
					(n = R('div')),
					E(t.$$.fragment),
					(l = q()),
					(r = R('span')),
					(o = q()),
					(i = X(a)),
					(u = q()),
					(f = R('span')),
					(h = X(c)),
					(d = q()),
					this.h();
			},
			l(p) {
				e = M(p, 'DIV', { class: !0 });
				var b = K(e);
				n = M(b, 'DIV', { class: !0 });
				var w = K(n);
				S(t.$$.fragment, w),
					(l = L(w)),
					(r = M(w, 'SPAN', { class: !0 })),
					K(r).forEach(_),
					(o = L(w)),
					(i = J(w, a)),
					w.forEach(_),
					(u = L(b)),
					(f = M(b, 'SPAN', { class: !0 }));
				var y = K(f);
				(h = J(y, c)), y.forEach(_), b.forEach(_), (d = L(p)), this.h();
			},
			h() {
				N(r, 'class', 'text-foreground/80 group:hover:text-foreground/100'),
					N(n, 'class', 'flex items-center gap-1.5'),
					N(f, 'class', 'ml-auto text-xs text-muted-foreground h-full'),
					N(e, 'class', 'flex w-full items-center justify-between');
			},
			m(p, b) {
				v(p, e, b),
					O(e, n),
					C(t, n, null),
					O(n, l),
					O(n, r),
					O(n, o),
					O(n, i),
					O(e, u),
					O(e, f),
					O(f, h),
					v(p, d, b),
					($ = !0);
			},
			p(p, b) {
				(!$ || b[0] & 1024) && a !== (a = p[53].name + '') && dt(i, a),
					(!$ || b[0] & 1024) && c !== (c = gs(new Date(p[53].lastOpened)) + '') && dt(h, c);
			},
			i(p) {
				$ || (m(t.$$.fragment, p), ($ = !0));
			},
			o(p) {
				g(t.$$.fragment, p), ($ = !1);
			},
			d(p) {
				p && (_(e), _(d)), k(t);
			}
		}
	);
}
function uo(s) {
	let e, n;
	function t() {
		return s[25](s[53]);
	}
	return (
		(e = new gt({
			props: {
				class:
					'text-foreground/90 gap-3 [&>*]:text-foreground/90 [&>*]:aria-selected:text-foreground [&>*]:fill-foreground/50 [&>*]:aria-selected:fill-foreground',
				value: s[53].path,
				onSelect: t,
				$$slots: { default: [u0] },
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
			m(l, r) {
				C(e, l, r), (n = !0);
			},
			p(l, r) {
				s = l;
				const o = {};
				r[0] & 1024 && (o.value = s[53].path),
					r[0] & 1024 && (o.onSelect = t),
					(r[0] & 1024) | (r[1] & 33554432) && (o.$$scope = { dirty: r, ctx: s }),
					e.$set(o);
			},
			i(l) {
				n || (m(e.$$.fragment, l), (n = !0));
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
function f0(s) {
	let e,
		n,
		t = tt(s[52].filter(s[23]).sort(s[24])),
		l = [];
	for (let o = 0; o < t.length; o += 1) l[o] = uo(no(s, t, o));
	const r = (o) =>
		g(l[o], 1, 1, () => {
			l[o] = null;
		});
	return {
		c() {
			for (let o = 0; o < l.length; o += 1) l[o].c();
			e = le();
		},
		l(o) {
			for (let a = 0; a < l.length; a += 1) l[a].l(o);
			e = le();
		},
		m(o, a) {
			for (let i = 0; i < l.length; i += 1) l[i] && l[i].m(o, a);
			v(o, e, a), (n = !0);
		},
		p(o, a) {
			if (a[0] & 3072) {
				t = tt(o[52].filter(o[23]).sort(o[24]));
				let i;
				for (i = 0; i < t.length; i += 1) {
					const u = no(o, t, i);
					l[i]
						? (l[i].p(u, a), m(l[i], 1))
						: ((l[i] = uo(u)), l[i].c(), m(l[i], 1), l[i].m(e.parentNode, e));
				}
				for (Ee(), i = t.length; i < l.length; i += 1) r(i);
				Se();
			}
		},
		i(o) {
			if (!n) {
				for (let a = 0; a < t.length; a += 1) m(l[a]);
				n = !0;
			}
		},
		o(o) {
			l = l.filter(hl);
			for (let a = 0; a < l.length; a += 1) g(l[a]);
			n = !1;
		},
		d(o) {
			o && _(e), It(l, o);
		}
	};
}
function c0(s) {
	let e, n;
	return (
		(e = new ls({
			props: { class: 'text-foreground/90', $$slots: { default: [d0] }, $$scope: { ctx: s } }
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
				const r = {};
				l[1] & 33554432 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function d0(s) {
	let e;
	return {
		c() {
			e = X('Recent collections');
		},
		l(n) {
			e = J(n, 'Recent collections');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function m0(s) {
	let e,
		n,
		t,
		l,
		r,
		o = s[7].progress + '',
		a,
		i,
		u,
		f = 'Hint: You can close this window and continue working.',
		c;
	return (
		(n = new Fa({ props: { class: 'w-3.5 h-3.5 animate-spin text-muted-foreground' } })),
		{
			c() {
				(e = R('div')),
					E(n.$$.fragment),
					(t = q()),
					(l = R('div')),
					(r = X('Loading collection... (')),
					(a = X(o)),
					(i = X(`%)
							`)),
					(u = R('span')),
					(u.textContent = f),
					this.h();
			},
			l(h) {
				e = M(h, 'DIV', { class: !0 });
				var d = K(e);
				S(n.$$.fragment, d), (t = L(d)), (l = M(d, 'DIV', { class: !0 }));
				var $ = K(l);
				(r = J($, 'Loading collection... (')),
					(a = J($, o)),
					(i = J(
						$,
						`%)
							`
					)),
					(u = M($, 'SPAN', { class: !0, 'data-svelte-h': !0 })),
					it(u) !== 'svelte-1fkx81n' && (u.textContent = f),
					$.forEach(_),
					d.forEach(_),
					this.h();
			},
			h() {
				N(u, 'class', 'text-xs text-muted-foreground'),
					N(l, 'class', 'flex flex-col gap-0.5'),
					N(e, 'class', 'flex flex-col items-center gap-1.5');
			},
			m(h, d) {
				v(h, e, d), C(n, e, null), O(e, t), O(e, l), O(l, r), O(l, a), O(l, i), O(l, u), (c = !0);
			},
			p(h, d) {
				(!c || d[0] & 128) && o !== (o = h[7].progress + '') && dt(a, o);
			},
			i(h) {
				c || (m(n.$$.fragment, h), (c = !0));
			},
			o(h) {
				g(n.$$.fragment, h), (c = !1);
			},
			d(h) {
				h && _(e), k(n);
			}
		}
	);
}
function fo(s) {
	let e, n;
	return (
		(e = new gt({
			props: {
				class:
					'text-foreground/90 gap-3 [&>*]:text-foreground/90 [&>*]:aria-selected:text-foreground [&>*]:fill-foreground/50 [&>*]:aria-selected:fill-foreground',
				value: 'light',
				onSelect: s[17],
				$$slots: { default: [_0] },
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
				const r = {};
				l[1] & 33554432 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function _0(s) {
	let e, n, t;
	return (
		(e = new He({ props: { name: 'sun' } })),
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
			m(l, r) {
				C(e, l, r), v(l, n, r), (t = !0);
			},
			p: we,
			i(l) {
				t || (m(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				l && _(n), k(e, l);
			}
		}
	);
}
function co(s) {
	let e, n;
	return (
		(e = new gt({
			props: {
				class:
					'text-foreground/90 gap-3 [&>*]:text-foreground/90 [&>*]:aria-selected:text-foreground [&>*]:fill-foreground/50 [&>*]:aria-selected:fill-foreground',
				value: 'dark',
				onSelect: s[18],
				$$slots: { default: [h0] },
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
				const r = {};
				l[1] & 33554432 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function h0(s) {
	let e, n, t;
	return (
		(e = new He({ props: { name: 'moon' } })),
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
			m(l, r) {
				C(e, l, r), v(l, n, r), (t = !0);
			},
			p: we,
			i(l) {
				t || (m(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				l && _(n), k(e, l);
			}
		}
	);
}
function mo(s) {
	let e, n;
	return (
		(e = new gt({
			props: {
				class:
					'text-foreground/90 gap-3 [&>*]:text-foreground/90 [&>*]:aria-selected:text-foreground [&>*]:fill-foreground/50 [&>*]:aria-selected:fill-foreground',
				value: 'system',
				onSelect: s[19],
				$$slots: { default: [g0] },
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
				const r = {};
				l[1] & 33554432 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function g0(s) {
	let e, n, t;
	return (
		(e = new He({ props: { name: 'monitor' } })),
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
			m(l, r) {
				C(e, l, r), v(l, n, r), (t = !0);
			},
			p: we,
			i(l) {
				t || (m(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				l && _(n), k(e, l);
			}
		}
	);
}
function p0(s) {
	let e,
		n,
		t,
		l,
		r = s[9] !== 'light' && fo(s),
		o = s[9] !== 'dark' && co(s),
		a = s[9] !== 'system' && mo(s);
	return {
		c() {
			r && r.c(), (e = q()), o && o.c(), (n = q()), a && a.c(), (t = le());
		},
		l(i) {
			r && r.l(i), (e = L(i)), o && o.l(i), (n = L(i)), a && a.l(i), (t = le());
		},
		m(i, u) {
			r && r.m(i, u), v(i, e, u), o && o.m(i, u), v(i, n, u), a && a.m(i, u), v(i, t, u), (l = !0);
		},
		p(i, u) {
			i[9] !== 'light'
				? r
					? (r.p(i, u), u[0] & 512 && m(r, 1))
					: ((r = fo(i)), r.c(), m(r, 1), r.m(e.parentNode, e))
				: r &&
					(Ee(),
					g(r, 1, 1, () => {
						r = null;
					}),
					Se()),
				i[9] !== 'dark'
					? o
						? (o.p(i, u), u[0] & 512 && m(o, 1))
						: ((o = co(i)), o.c(), m(o, 1), o.m(n.parentNode, n))
					: o &&
						(Ee(),
						g(o, 1, 1, () => {
							o = null;
						}),
						Se()),
				i[9] !== 'system'
					? a
						? (a.p(i, u), u[0] & 512 && m(a, 1))
						: ((a = mo(i)), a.c(), m(a, 1), a.m(t.parentNode, t))
					: a &&
						(Ee(),
						g(a, 1, 1, () => {
							a = null;
						}),
						Se());
		},
		i(i) {
			l || (m(r), m(o), m(a), (l = !0));
		},
		o(i) {
			g(r), g(o), g(a), (l = !1);
		},
		d(i) {
			i && (_(e), _(n), _(t)), r && r.d(i), o && o.d(i), a && a.d(i);
		}
	};
}
function $0(s) {
	let e, n;
	return (
		(e = new gt({
			props: { class: 'text-foreground/90', $$slots: { default: [b0] }, $$scope: { ctx: s } }
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
				const r = {};
				l[1] & 33554432 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function b0(s) {
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
		m(l, r) {
			v(l, e, r), v(l, t, r);
		},
		p: we,
		d(l) {
			l && (_(e), _(t));
		}
	};
}
function v0(s) {
	let e,
		n,
		t = tt(s[48]),
		l = [];
	for (let o = 0; o < t.length; o += 1) l[o] = _o(lo(s, t, o));
	const r = (o) =>
		g(l[o], 1, 1, () => {
			l[o] = null;
		});
	return {
		c() {
			for (let o = 0; o < l.length; o += 1) l[o].c();
			e = le();
		},
		l(o) {
			for (let a = 0; a < l.length; a += 1) l[a].l(o);
			e = le();
		},
		m(o, a) {
			for (let i = 0; i < l.length; i += 1) l[i] && l[i].m(o, a);
			v(o, e, a), (n = !0);
		},
		p(o, a) {
			if (a[0] & 2048) {
				t = tt(o[48]);
				let i;
				for (i = 0; i < t.length; i += 1) {
					const u = lo(o, t, i);
					l[i]
						? (l[i].p(u, a), m(l[i], 1))
						: ((l[i] = _o(u)), l[i].c(), m(l[i], 1), l[i].m(e.parentNode, e));
				}
				for (Ee(), i = t.length; i < l.length; i += 1) r(i);
				Se();
			}
		},
		i(o) {
			if (!n) {
				for (let a = 0; a < t.length; a += 1) m(l[a]);
				n = !0;
			}
		},
		o(o) {
			l = l.filter(hl);
			for (let a = 0; a < l.length; a += 1) g(l[a]);
			n = !1;
		},
		d(o) {
			o && _(e), It(l, o);
		}
	};
}
function k0(s) {
	let e,
		n,
		t = s[49].name.slice(1).replaceAll('/', ' > ') + '',
		l,
		r,
		o;
	return (
		(e = new He({ props: { name: 'note' } })),
		{
			c() {
				E(e.$$.fragment), (n = q()), (l = X(t)), (r = q());
			},
			l(a) {
				S(e.$$.fragment, a), (n = L(a)), (l = J(a, t)), (r = L(a));
			},
			m(a, i) {
				C(e, a, i), v(a, n, i), v(a, l, i), v(a, r, i), (o = !0);
			},
			p: we,
			i(a) {
				o || (m(e.$$.fragment, a), (o = !0));
			},
			o(a) {
				g(e.$$.fragment, a), (o = !1);
			},
			d(a) {
				a && (_(n), _(l), _(r)), k(e, a);
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
		(e = new gt({
			props: {
				class:
					'text-foreground/90 gap-3 [&>*]:text-foreground/90 [&>*]:aria-selected:text-foreground [&>*]:fill-foreground/50 [&>*]:aria-selected:fill-foreground',
				value: s[49].path,
				onSelect: t,
				$$slots: { default: [k0] },
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
			m(l, r) {
				C(e, l, r), (n = !0);
			},
			p(l, r) {
				s = l;
				const o = {};
				r[1] & 33554432 && (o.$$scope = { dirty: r, ctx: s }), e.$set(o);
			},
			i(l) {
				n || (m(e.$$.fragment, l), (n = !0));
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
function C0(s) {
	let e, n;
	return (
		(e = new ls({
			props: { class: 'text-foreground/90', $$slots: { default: [E0] }, $$scope: { ctx: s } }
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
				const r = {};
				l[1] & 33554432 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function E0(s) {
	let e;
	return {
		c() {
			e = X('Loading notes...');
		},
		l(n) {
			e = J(n, 'Loading notes...');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function S0(s) {
	let e,
		n,
		t = {
			ctx: s,
			current: null,
			token: null,
			hasCatch: !0,
			pending: C0,
			then: v0,
			catch: $0,
			value: 48,
			error: 47,
			blocks: [, , ,]
		};
	return (
		xl(wl(), t),
		{
			c() {
				(e = le()), t.block.c();
			},
			l(l) {
				(e = le()), t.block.l(l);
			},
			m(l, r) {
				v(l, e, r),
					t.block.m(l, (t.anchor = r)),
					(t.mount = () => e.parentNode),
					(t.anchor = e),
					(n = !0);
			},
			p(l, r) {
				(s = l), es(t, s, r);
			},
			i(l) {
				n || (m(t.block), (n = !0));
			},
			o(l) {
				for (let r = 0; r < 3; r += 1) {
					const o = t.blocks[r];
					g(o);
				}
				n = !1;
			},
			d(l) {
				l && _(e), t.block.d(l), (t.token = null), (t = null);
			}
		}
	);
}
function w0(s) {
	let e, n;
	return (
		(e = new gt({
			props: { class: 'text-foreground/90', $$slots: { default: [y0] }, $$scope: { ctx: s } }
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
				const r = {};
				l[1] & 33554432 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function y0(s) {
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
		m(l, r) {
			v(l, e, r), v(l, t, r);
		},
		p: we,
		d(l) {
			l && (_(e), _(t));
		}
	};
}
function T0(s) {
	let e,
		n,
		t = tt(s[43]),
		l = [];
	for (let o = 0; o < t.length; o += 1) l[o] = go(so(s, t, o));
	const r = (o) =>
		g(l[o], 1, 1, () => {
			l[o] = null;
		});
	return {
		c() {
			for (let o = 0; o < l.length; o += 1) l[o].c();
			e = le();
		},
		l(o) {
			for (let a = 0; a < l.length; a += 1) l[a].l(o);
			e = le();
		},
		m(o, a) {
			for (let i = 0; i < l.length; i += 1) l[i] && l[i].m(o, a);
			v(o, e, a), (n = !0);
		},
		p(o, a) {
			if (a[0] & 2304) {
				t = tt(o[43]);
				let i;
				for (i = 0; i < t.length; i += 1) {
					const u = so(o, t, i);
					l[i]
						? (l[i].p(u, a), m(l[i], 1))
						: ((l[i] = go(u)), l[i].c(), m(l[i], 1), l[i].m(e.parentNode, e));
				}
				for (Ee(), i = t.length; i < l.length; i += 1) r(i);
				Se();
			}
		},
		i(o) {
			if (!n) {
				for (let a = 0; a < t.length; a += 1) m(l[a]);
				n = !0;
			}
		},
		o(o) {
			l = l.filter(hl);
			for (let a = 0; a < l.length; a += 1) g(l[a]);
			n = !1;
		},
		d(o) {
			o && _(e), It(l, o);
		}
	};
}
function ho(s) {
	let e, n;
	function t() {
		return s[15](s[44]);
	}
	return (
		(e = new gt({
			props: {
				class:
					'text-foreground/90 gap-3 [&>*]:text-foreground/90 [&>*]:aria-selected:text-foreground [&>*]:fill-foreground/50 [&>*]:aria-selected:fill-foreground',
				value: s[44].path,
				onSelect: t,
				$$slots: { default: [A0] },
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
			m(l, r) {
				C(e, l, r), (n = !0);
			},
			p(l, r) {
				s = l;
				const o = {};
				r[0] & 256 && (o.onSelect = t),
					r[1] & 33554432 && (o.$$scope = { dirty: r, ctx: s }),
					e.$set(o);
			},
			i(l) {
				n || (m(e.$$.fragment, l), (n = !0));
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
function A0(s) {
	let e,
		n,
		t = s[44].name.slice(1).replaceAll('/', ' > ') + '',
		l,
		r,
		o;
	return (
		(e = new He({ props: { name: 'folder' } })),
		{
			c() {
				E(e.$$.fragment), (n = q()), (l = X(t)), (r = q());
			},
			l(a) {
				S(e.$$.fragment, a), (n = L(a)), (l = J(a, t)), (r = L(a));
			},
			m(a, i) {
				C(e, a, i), v(a, n, i), v(a, l, i), v(a, r, i), (o = !0);
			},
			p: we,
			i(a) {
				o || (m(e.$$.fragment, a), (o = !0));
			},
			o(a) {
				g(e.$$.fragment, a), (o = !1);
			},
			d(a) {
				a && (_(n), _(l), _(r)), k(e, a);
			}
		}
	);
}
function go(s) {
	var r;
	let e = s[44].path + `/${(r = s[8]) == null ? void 0 : r.split('/').pop()}` !== s[8],
		n,
		t,
		l = e && ho(s);
	return {
		c() {
			l && l.c(), (n = le());
		},
		l(o) {
			l && l.l(o), (n = le());
		},
		m(o, a) {
			l && l.m(o, a), v(o, n, a), (t = !0);
		},
		p(o, a) {
			var i;
			a[0] & 256 &&
				(e = o[44].path + `/${(i = o[8]) == null ? void 0 : i.split('/').pop()}` !== o[8]),
				e
					? l
						? (l.p(o, a), a[0] & 256 && m(l, 1))
						: ((l = ho(o)), l.c(), m(l, 1), l.m(n.parentNode, n))
					: l &&
						(Ee(),
						g(l, 1, 1, () => {
							l = null;
						}),
						Se());
		},
		i(o) {
			t || (m(l), (t = !0));
		},
		o(o) {
			g(l), (t = !1);
		},
		d(o) {
			o && _(n), l && l.d(o);
		}
	};
}
function O0(s) {
	let e, n;
	return (
		(e = new ls({
			props: { class: 'text-foreground/90', $$slots: { default: [P0] }, $$scope: { ctx: s } }
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
				const r = {};
				l[1] & 33554432 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function P0(s) {
	let e;
	return {
		c() {
			e = X('Loading folders...');
		},
		l(n) {
			e = J(n, 'Loading folders...');
		},
		m(n, t) {
			v(n, e, t);
		},
		d(n) {
			n && _(e);
		}
	};
}
function N0(s) {
	let e,
		n,
		t = {
			ctx: s,
			current: null,
			token: null,
			hasCatch: !0,
			pending: O0,
			then: T0,
			catch: w0,
			value: 43,
			error: 47,
			blocks: [, , ,]
		};
	return (
		xl(wl(!0), t),
		{
			c() {
				(e = le()), t.block.c();
			},
			l(l) {
				(e = le()), t.block.l(l);
			},
			m(l, r) {
				v(l, e, r),
					t.block.m(l, (t.anchor = r)),
					(t.mount = () => e.parentNode),
					(t.anchor = e),
					(n = !0);
			},
			p(l, r) {
				(s = l), es(t, s, r);
			},
			i(l) {
				n || (m(t.block), (n = !0));
			},
			o(l) {
				for (let r = 0; r < 3; r += 1) {
					const o = t.blocks[r];
					g(o);
				}
				n = !1;
			},
			d(l) {
				l && _(e), t.block.d(l), (t.token = null), (t = null);
			}
		}
	);
}
function D0(s) {
	let e, n;
	return (
		(e = new He({ props: { name: s[40].icon } })),
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
				n || (m(e.$$.fragment, t), (n = !0));
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
function I0(s) {
	let e,
		n = Ql(s[40].shortcut) + '',
		t;
	return {
		c() {
			(e = R('span')), (t = X(n)), this.h();
		},
		l(l) {
			e = M(l, 'SPAN', { class: !0 });
			var r = K(e);
			(t = J(r, n)), r.forEach(_), this.h();
		},
		h() {
			N(e, 'class', 'ml-auto text-xs tracking-widest text-muted-foreground h-full');
		},
		m(l, r) {
			v(l, e, r), O(e, t);
		},
		d(l) {
			l && _(e);
		}
	};
}
function M0(s) {
	let e,
		n,
		t,
		l,
		r,
		o = s[40].title + '',
		a,
		i,
		u,
		f = s[40].icon && D0(s),
		c = s[40].shortcut && I0(s);
	return {
		c() {
			(e = R('div')),
				(n = R('div')),
				f && f.c(),
				(t = q()),
				(l = R('span')),
				(r = q()),
				(a = X(o)),
				(i = q()),
				c && c.c(),
				this.h();
		},
		l(h) {
			e = M(h, 'DIV', { class: !0 });
			var d = K(e);
			n = M(d, 'DIV', { class: !0 });
			var $ = K(n);
			f && f.l($),
				(t = L($)),
				(l = M($, 'SPAN', { class: !0 })),
				K(l).forEach(_),
				(r = L($)),
				(a = J($, o)),
				$.forEach(_),
				(i = L(d)),
				c && c.l(d),
				d.forEach(_),
				this.h();
		},
		h() {
			N(l, 'class', 'text-foreground/80 group:hover:text-foreground/100'),
				N(n, 'class', 'flex items-center gap-1.5'),
				N(e, 'class', 'flex w-full items-center justify-between');
		},
		m(h, d) {
			v(h, e, d),
				O(e, n),
				f && f.m(n, null),
				O(n, t),
				O(n, l),
				O(n, r),
				O(n, a),
				O(e, i),
				c && c.m(e, null),
				(u = !0);
		},
		p: we,
		i(h) {
			u || (m(f), (u = !0));
		},
		o(h) {
			g(f), (u = !1);
		},
		d(h) {
			h && _(e), f && f.d(), c && c.d();
		}
	};
}
function po(s) {
	let e, n;
	function t() {
		return s[14](s[40]);
	}
	return (
		(e = new gt({
			props: {
				class:
					'[&>*]:text-foreground/90 [&>*]:aria-selected:text-foreground [&>*]:fill-foreground/50 [&>*]:aria-selected:fill-foreground',
				value: s[40].title,
				onSelect: t,
				$$slots: { default: [M0] },
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
			m(l, r) {
				C(e, l, r), (n = !0);
			},
			p(l, r) {
				s = l;
				const o = {};
				r[1] & 33554432 && (o.$$scope = { dirty: r, ctx: s }), e.$set(o);
			},
			i(l) {
				n || (m(e.$$.fragment, l), (n = !0));
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
function R0(s) {
	let e,
		n,
		t = tt(s[37].commands),
		l = [];
	for (let o = 0; o < t.length; o += 1) l[o] = po(oo(s, t, o));
	const r = (o) =>
		g(l[o], 1, 1, () => {
			l[o] = null;
		});
	return {
		c() {
			for (let o = 0; o < l.length; o += 1) l[o].c();
			e = q();
		},
		l(o) {
			for (let a = 0; a < l.length; a += 1) l[a].l(o);
			e = L(o);
		},
		m(o, a) {
			for (let i = 0; i < l.length; i += 1) l[i] && l[i].m(o, a);
			v(o, e, a), (n = !0);
		},
		p(o, a) {
			if (a[0] & 2048) {
				t = tt(o[37].commands);
				let i;
				for (i = 0; i < t.length; i += 1) {
					const u = oo(o, t, i);
					l[i]
						? (l[i].p(u, a), m(l[i], 1))
						: ((l[i] = po(u)), l[i].c(), m(l[i], 1), l[i].m(e.parentNode, e));
				}
				for (Ee(), i = t.length; i < l.length; i += 1) r(i);
				Se();
			}
		},
		i(o) {
			if (!n) {
				for (let a = 0; a < t.length; a += 1) m(l[a]);
				n = !0;
			}
		},
		o(o) {
			l = l.filter(hl);
			for (let a = 0; a < l.length; a += 1) g(l[a]);
			n = !1;
		},
		d(o) {
			o && _(e), It(l, o);
		}
	};
}
function $o(s) {
	let e, n;
	return (
		(e = new Yt({
			props: { heading: s[37].name, $$slots: { default: [R0] }, $$scope: { ctx: s } }
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
				const r = {};
				l[1] & 33554432 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function F0(s) {
	let e,
		n,
		t,
		l,
		r,
		o = !s[7] && io(s);
	const a = [G$, Q$, H$, z$, U$, B$, K$],
		i = [];
	function u(f, c) {
		return f[4] === 'default'
			? 0
			: f[4] === 'move_note'
				? 1
				: f[4] === 'open_note'
					? 2
					: f[4] === 'change_theme'
						? 3
						: f[4] === 'open_collection'
							? 4
							: f[4] === 'help_and_feedback'
								? 5
								: f[4] === 'share'
									? 6
									: -1;
	}
	return (
		~(n = u(s)) && (t = i[n] = a[n](s)),
		{
			c() {
				o && o.c(), (e = q()), t && t.c(), (l = le());
			},
			l(f) {
				o && o.l(f), (e = L(f)), t && t.l(f), (l = le());
			},
			m(f, c) {
				o && o.m(f, c), v(f, e, c), ~n && i[n].m(f, c), v(f, l, c), (r = !0);
			},
			p(f, c) {
				f[7]
					? o &&
						(Ee(),
						g(o, 1, 1, () => {
							o = null;
						}),
						Se())
					: o
						? c[0] & 128 && m(o, 1)
						: ((o = io(f)), o.c(), m(o, 1), o.m(e.parentNode, e));
				let h = n;
				(n = u(f)),
					n === h
						? ~n && i[n].p(f, c)
						: (t &&
								(Ee(),
								g(i[h], 1, 1, () => {
									i[h] = null;
								}),
								Se()),
							~n
								? ((t = i[n]),
									t ? t.p(f, c) : ((t = i[n] = a[n](f)), t.c()),
									m(t, 1),
									t.m(l.parentNode, l))
								: (t = null));
			},
			i(f) {
				r || (m(o), m(t), (r = !0));
			},
			o(f) {
				g(o), g(t), (r = !1);
			},
			d(f) {
				f && (_(e), _(l)), o && o.d(f), ~n && i[n].d(f);
			}
		}
	);
}
function V0(s) {
	let e, n, t, l, r;
	function o(i) {
		s[13](i);
	}
	let a = { placeholder: 'Search or jump to...' };
	return (
		s[2] !== void 0 && (a.value = s[2]),
		(e = new R$({ props: a })),
		Pe.push(() => ft(e, 'value', o)),
		(l = new q$({ props: { $$slots: { default: [F0] }, $$scope: { ctx: s } } })),
		{
			c() {
				E(e.$$.fragment), (t = q()), E(l.$$.fragment);
			},
			l(i) {
				S(e.$$.fragment, i), (t = L(i)), S(l.$$.fragment, i);
			},
			m(i, u) {
				C(e, i, u), v(i, t, u), C(l, i, u), (r = !0);
			},
			p(i, u) {
				const f = {};
				!n && u[0] & 4 && ((n = !0), (f.value = i[2]), ut(() => (n = !1))), e.$set(f);
				const c = {};
				(u[0] & 2001) | (u[1] & 33554432) && (c.$$scope = { dirty: u, ctx: i }), l.$set(c);
			},
			i(i) {
				r || (m(e.$$.fragment, i), m(l.$$.fragment, i), (r = !0));
			},
			o(i) {
				g(e.$$.fragment, i), g(l.$$.fragment, i), (r = !1);
			},
			d(i) {
				i && _(t), k(e, i), k(l, i);
			}
		}
	);
}
function L0(s) {
	let e, n, t, l;
	function r(i) {
		s[32](i);
	}
	function o(i) {
		s[33](i);
	}
	let a = { loop: !0, onKeydown: s[31], $$slots: { default: [V0] }, $$scope: { ctx: s } };
	return (
		s[1] !== void 0 && (a.open = s[1]),
		s[3] !== void 0 && (a.value = s[3]),
		(e = new C$({ props: a })),
		Pe.push(() => ft(e, 'open', r)),
		Pe.push(() => ft(e, 'value', o)),
		{
			c() {
				E(e.$$.fragment);
			},
			l(i) {
				S(e.$$.fragment, i);
			},
			m(i, u) {
				C(e, i, u), (l = !0);
			},
			p(i, u) {
				const f = {};
				u[0] & 52 && (f.onKeydown = i[31]),
					(u[0] & 2005) | (u[1] & 33554432) && (f.$$scope = { dirty: u, ctx: i }),
					!n && u[0] & 2 && ((n = !0), (f.open = i[1]), ut(() => (n = !1))),
					!t && u[0] & 8 && ((t = !0), (f.value = i[3]), ut(() => (t = !1))),
					e.$set(f);
			},
			i(i) {
				l || (m(e.$$.fragment, i), (l = !0));
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
function q0(s, e, n) {
	let t, l, r;
	Ae(s, El, (re) => n(8, (t = re))),
		Ae(s, Zl, (re) => n(9, (l = re))),
		Ae(s, Jt, (re) => n(10, (r = re)));
	let o = !1,
		a = '',
		i,
		u,
		f = '',
		c = null,
		h;
	const d = {
		'cmd+k': 'default',
		'cmd+j': 'open_note',
		'cmd+shift+m': 'move_note',
		'cmd+shift+t': 'change_theme',
		'cmd+o': 'open_collection',
		'cmd+shift+h': 'help_and_feedback',
		'cmd+shift+l': 'share'
	};
	function $(re) {
		if (!re) n(1, (o = !1)), n(5, (f = ''));
		else {
			const oe = document.querySelector('[data-dialog-content]');
			oe &&
				oe.animate(
					[
						{ transform: 'scale(1)' },
						{ transform: 'scale(0.98, 0.98)' },
						{ transform: 'scale(1, 1)' }
					],
					{ duration: 225, easing: 'ease' }
				);
		}
		n(4, (u = re)), n(2, (a = ''));
	}
	wn(() => {
		function re(oe) {
			const be = `${oe.metaKey || oe.ctrlKey ? 'cmd+' : ''}${oe.shiftKey ? 'shift+' : ''}${oe.key}`;
			(oe.metaKey || oe.ctrlKey || oe.shiftKey) &&
				d[be] &&
				(f === be || f === '') &&
				(oe.preventDefault(), n(5, (f = be)), n(4, (u = d[be])), n(1, (o = !o)), o || $(void 0));
		}
		return (
			document.addEventListener('keydown', re),
			() => {
				document.removeEventListener('keydown', re);
			}
		);
	}),
		El.subscribe((re) => {
			mn[0].name !== 'Notes' && mn.shift(),
				re && (mn.unshift(li(re)), n(3, (i = mn[0].commands[0].title)));
		});
	async function p() {
		var be;
		if (!w || w.length === 0) return console.error('No files selected');
		n(7, (h = { loading: !0, progress: 0 }));
		const re = (be = w[0]) == null ? void 0 : be.webkitRelativePath.split('/')[0];
		await Cs(`/${re}`);
		const oe = new Set();
		for (let We = 0; We < w.length; We++) {
			const Ge = w[We];
			if (!Ge) continue;
			const Be = `/${Ge.webkitRelativePath}`,
				A = Ge.webkitRelativePath.split('/'),
				x = A[A.length - 1];
			let Oe = Math.round(((We + 1) / w.length) * 100);
			n(7, (h = { loading: !0, progress: Oe }));
			let Le = '';
			for (let qe = 0; qe < A.length - 1; qe++)
				(Le += '/' + A[qe]), oe.has(Le) || (await b(Le, re), oe.add(Le));
			if (Ge.name.toLowerCase().endsWith('.md'))
				try {
					const qe = await Ge.text();
					await Wn.insert(hs).values({
						name: x,
						path: Be,
						content: qe,
						parentPath: Le,
						collectionPath: `/${re}`,
						size: Ge.size,
						isFolder: !1
					}),
						console.log('Inserted file:', x);
				} catch (qe) {
					console.error('Error processing file:', x, qe);
				}
			else console.warn('Skipping non-Markdown file:', x);
		}
		n(7, (h = void 0)), await Es('/notes'), $(void 0);
	}
	async function b(re, oe) {
		const be = re.split('/').filter(Boolean),
			We = be[be.length - 1],
			Ge = '/' + be.slice(0, -1).join('/');
		try {
			await Wn.insert(hs).values({
				name: We,
				path: re,
				content: void 0,
				parentPath: Ge,
				collectionPath: `/${oe}`,
				isFolder: !0
			}),
				console.log('Created folder entry:', re);
		} catch (Be) {
			console.error('Error creating folder entry:', re, Be);
		}
	}
	let w;
	const y = (re) => re.path !== r;
	function I(re) {
		(a = re), n(2, a);
	}
	const Q = (re) => {
			var be;
			const oe = (be = re.onSelect) == null ? void 0 : be.call(re);
			$(typeof oe > 'u' ? void 0 : oe);
		},
		P = (re) => {
			ta(t || '', re.path), $(void 0);
		},
		V = (re) => {
			Lo(re.path), $(void 0);
		},
		z = () => {
			Cn('light'), $(void 0);
		},
		ee = () => {
			Cn('dark'), $(void 0);
		},
		se = () => {
			Cn('system'), $(void 0);
		};
	function T() {
		(w = this.files), n(0, w);
	}
	function W(re) {
		Pe[re ? 'unshift' : 'push'](() => {
			(c = re), n(6, c);
		});
	}
	const U = async () => {
			c == null || c.click();
		},
		B = (re) => re.path !== r,
		j = (re, oe) => +new Date(oe.lastOpened) - +new Date(re.lastOpened),
		te = async (re) => {
			await Es('/notes'), Cs(re.path), $(void 0);
		},
		F = () => {
			$(void 0);
		},
		H = () => {
			$(void 0);
		},
		G = () => {
			$(void 0);
		},
		Te = () => {
			navigator.clipboard.writeText('https://typyst.md'), $(void 0);
		},
		Ne = () => {
			$(void 0);
		},
		Ie = (re) => {
			re.key === 'Escape'
				? ($(void 0), n(5, (f = '')))
				: re.key === 'Backspace' && !a && u !== 'default' && f === 'cmd+k' && $('default');
		};
	function De(re) {
		(o = re), n(1, o);
	}
	function ye(re) {
		(i = re), n(3, i);
	}
	return (
		(s.$$.update = () => {
			s.$$.dirty[0] & 1 && w && p();
		}),
		[
			w,
			o,
			a,
			i,
			u,
			f,
			c,
			h,
			t,
			l,
			r,
			$,
			y,
			I,
			Q,
			P,
			V,
			z,
			ee,
			se,
			T,
			W,
			U,
			B,
			j,
			te,
			F,
			H,
			G,
			Te,
			Ne,
			Ie,
			De,
			ye
		]
	);
}
class j0 extends pe {
	constructor(e) {
		super(), $e(this, e, q0, L0, me, {}, null, [-1, -1]);
	}
}
var Pl = class {
		constructor() {
			(this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
		}
		subscribe(s) {
			return (
				this.listeners.add(s),
				this.onSubscribe(),
				() => {
					this.listeners.delete(s), this.onUnsubscribe();
				}
			);
		}
		hasListeners() {
			return this.listeners.size > 0;
		}
		onSubscribe() {}
		onUnsubscribe() {}
	},
	Nl = typeof window > 'u' || 'Deno' in globalThis;
function Tt() {}
function K0(s, e) {
	return typeof s == 'function' ? s(e) : s;
}
function B0(s) {
	return typeof s == 'number' && s >= 0 && s !== 1 / 0;
}
function U0(s, e) {
	return Math.max(s + (e || 0) - Date.now(), 0);
}
function Jl(s, e) {
	return typeof s == 'function' ? s(e) : s;
}
function z0(s, e) {
	return typeof s == 'function' ? s(e) : s;
}
function bo(s, e) {
	const { type: n = 'all', exact: t, fetchStatus: l, predicate: r, queryKey: o, stale: a } = s;
	if (o) {
		if (t) {
			if (e.queryHash !== ss(o, e.options)) return !1;
		} else if (!il(e.queryKey, o)) return !1;
	}
	if (n !== 'all') {
		const i = e.isActive();
		if ((n === 'active' && !i) || (n === 'inactive' && i)) return !1;
	}
	return !(
		(typeof a == 'boolean' && e.isStale() !== a) ||
		(l && l !== e.state.fetchStatus) ||
		(r && !r(e))
	);
}
function vo(s, e) {
	const { exact: n, status: t, predicate: l, mutationKey: r } = s;
	if (r) {
		if (!e.options.mutationKey) return !1;
		if (n) {
			if (ol(e.options.mutationKey) !== ol(r)) return !1;
		} else if (!il(e.options.mutationKey, r)) return !1;
	}
	return !((t && e.state.status !== t) || (l && !l(e)));
}
function ss(s, e) {
	return ((e == null ? void 0 : e.queryKeyHashFn) || ol)(s);
}
function ol(s) {
	return JSON.stringify(s, (e, n) =>
		Xl(n)
			? Object.keys(n)
					.sort()
					.reduce((t, l) => ((t[l] = n[l]), t), {})
			: n
	);
}
function il(s, e) {
	return s === e
		? !0
		: typeof s != typeof e
			? !1
			: s && e && typeof s == 'object' && typeof e == 'object'
				? Object.keys(e).every((n) => il(s[n], e[n]))
				: !1;
}
function pi(s, e) {
	if (s === e) return s;
	const n = ko(s) && ko(e);
	if (n || (Xl(s) && Xl(e))) {
		const t = n ? s : Object.keys(s),
			l = t.length,
			r = n ? e : Object.keys(e),
			o = r.length,
			a = n ? [] : {},
			i = new Set(t);
		let u = 0;
		for (let f = 0; f < o; f++) {
			const c = n ? f : r[f];
			((!n && i.has(c)) || n) && s[c] === void 0 && e[c] === void 0
				? ((a[c] = void 0), u++)
				: ((a[c] = pi(s[c], e[c])), a[c] === s[c] && s[c] !== void 0 && u++);
		}
		return l === o && u === l ? s : a;
	}
	return e;
}
function ko(s) {
	return Array.isArray(s) && s.length === Object.keys(s).length;
}
function Xl(s) {
	if (!Co(s)) return !1;
	const e = s.constructor;
	if (e === void 0) return !0;
	const n = e.prototype;
	return !(
		!Co(n) ||
		!n.hasOwnProperty('isPrototypeOf') ||
		Object.getPrototypeOf(s) !== Object.prototype
	);
}
function Co(s) {
	return Object.prototype.toString.call(s) === '[object Object]';
}
function H0(s) {
	return new Promise((e) => {
		setTimeout(e, s);
	});
}
function Q0(s, e, n) {
	return typeof n.structuralSharing == 'function'
		? n.structuralSharing(s, e)
		: n.structuralSharing !== !1
			? pi(s, e)
			: e;
}
function G0(s, e, n = 0) {
	const t = [...s, e];
	return n && t.length > n ? t.slice(1) : t;
}
function W0(s, e, n = 0) {
	const t = [e, ...s];
	return n && t.length > n ? t.slice(0, -1) : t;
}
var rs = Symbol();
function $i(s, e) {
	return !s.queryFn && e != null && e.initialPromise
		? () => e.initialPromise
		: !s.queryFn || s.queryFn === rs
			? () => Promise.reject(new Error(`Missing queryFn: '${s.queryHash}'`))
			: s.queryFn;
}
var pn,
	an,
	Rn,
	wo,
	J0 =
		((wo = class extends Pl {
			constructor() {
				super();
				ze(this, pn);
				ze(this, an);
				ze(this, Rn);
				Ve(this, Rn, (e) => {
					if (!Nl && window.addEventListener) {
						const n = () => e();
						return (
							window.addEventListener('visibilitychange', n, !1),
							() => {
								window.removeEventListener('visibilitychange', n);
							}
						);
					}
				});
			}
			onSubscribe() {
				Y(this, an) || this.setEventListener(Y(this, Rn));
			}
			onUnsubscribe() {
				var e;
				this.hasListeners() || ((e = Y(this, an)) == null || e.call(this), Ve(this, an, void 0));
			}
			setEventListener(e) {
				var n;
				Ve(this, Rn, e),
					(n = Y(this, an)) == null || n.call(this),
					Ve(
						this,
						an,
						e((t) => {
							typeof t == 'boolean' ? this.setFocused(t) : this.onFocus();
						})
					);
			}
			setFocused(e) {
				Y(this, pn) !== e && (Ve(this, pn, e), this.onFocus());
			}
			onFocus() {
				const e = this.isFocused();
				this.listeners.forEach((n) => {
					n(e);
				});
			}
			isFocused() {
				var e;
				return typeof Y(this, pn) == 'boolean'
					? Y(this, pn)
					: ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== 'hidden';
			}
		}),
		(pn = new WeakMap()),
		(an = new WeakMap()),
		(Rn = new WeakMap()),
		wo),
	bi = new J0(),
	Fn,
	un,
	Vn,
	yo,
	X0 =
		((yo = class extends Pl {
			constructor() {
				super();
				ze(this, Fn, !0);
				ze(this, un);
				ze(this, Vn);
				Ve(this, Vn, (e) => {
					if (!Nl && window.addEventListener) {
						const n = () => e(!0),
							t = () => e(!1);
						return (
							window.addEventListener('online', n, !1),
							window.addEventListener('offline', t, !1),
							() => {
								window.removeEventListener('online', n), window.removeEventListener('offline', t);
							}
						);
					}
				});
			}
			onSubscribe() {
				Y(this, un) || this.setEventListener(Y(this, Vn));
			}
			onUnsubscribe() {
				var e;
				this.hasListeners() || ((e = Y(this, un)) == null || e.call(this), Ve(this, un, void 0));
			}
			setEventListener(e) {
				var n;
				Ve(this, Vn, e),
					(n = Y(this, un)) == null || n.call(this),
					Ve(this, un, e(this.setOnline.bind(this)));
			}
			setOnline(e) {
				Y(this, Fn) !== e &&
					(Ve(this, Fn, e),
					this.listeners.forEach((t) => {
						t(e);
					}));
			}
			isOnline() {
				return Y(this, Fn);
			}
		}),
		(Fn = new WeakMap()),
		(un = new WeakMap()),
		(Vn = new WeakMap()),
		yo),
	yl = new X0();
function Y0() {
	let s, e;
	const n = new Promise((l, r) => {
		(s = l), (e = r);
	});
	(n.status = 'pending'), n.catch(() => {});
	function t(l) {
		Object.assign(n, l), delete n.resolve, delete n.reject;
	}
	return (
		(n.resolve = (l) => {
			t({ status: 'fulfilled', value: l }), s(l);
		}),
		(n.reject = (l) => {
			t({ status: 'rejected', reason: l }), e(l);
		}),
		n
	);
}
function Z0(s) {
	return Math.min(1e3 * 2 ** s, 3e4);
}
function vi(s) {
	return (s ?? 'online') === 'online' ? yl.isOnline() : !0;
}
var ki = class extends Error {
	constructor(s) {
		super('CancelledError'),
			(this.revert = s == null ? void 0 : s.revert),
			(this.silent = s == null ? void 0 : s.silent);
	}
};
function Bl(s) {
	return s instanceof ki;
}
function Ci(s) {
	let e = !1,
		n = 0,
		t = !1,
		l;
	const r = Y0(),
		o = (p) => {
			var b;
			t || (h(new ki(p)), (b = s.abort) == null || b.call(s));
		},
		a = () => {
			e = !0;
		},
		i = () => {
			e = !1;
		},
		u = () => bi.isFocused() && (s.networkMode === 'always' || yl.isOnline()) && s.canRun(),
		f = () => vi(s.networkMode) && s.canRun(),
		c = (p) => {
			var b;
			t || ((t = !0), (b = s.onSuccess) == null || b.call(s, p), l == null || l(), r.resolve(p));
		},
		h = (p) => {
			var b;
			t || ((t = !0), (b = s.onError) == null || b.call(s, p), l == null || l(), r.reject(p));
		},
		d = () =>
			new Promise((p) => {
				var b;
				(l = (w) => {
					(t || u()) && p(w);
				}),
					(b = s.onPause) == null || b.call(s);
			}).then(() => {
				var p;
				(l = void 0), t || (p = s.onContinue) == null || p.call(s);
			}),
		$ = () => {
			if (t) return;
			let p;
			const b = n === 0 ? s.initialPromise : void 0;
			try {
				p = b ?? s.fn();
			} catch (w) {
				p = Promise.reject(w);
			}
			Promise.resolve(p)
				.then(c)
				.catch((w) => {
					var V;
					if (t) return;
					const y = s.retry ?? (Nl ? 0 : 3),
						I = s.retryDelay ?? Z0,
						Q = typeof I == 'function' ? I(n, w) : I,
						P = y === !0 || (typeof y == 'number' && n < y) || (typeof y == 'function' && y(n, w));
					if (e || !P) {
						h(w);
						return;
					}
					n++,
						(V = s.onFail) == null || V.call(s, n, w),
						H0(Q)
							.then(() => (u() ? void 0 : d()))
							.then(() => {
								e ? h(w) : $();
							});
				});
		};
	return {
		promise: r,
		cancel: o,
		continue: () => (l == null || l(), r),
		cancelRetry: a,
		continueRetry: i,
		canStart: f,
		start: () => (f() ? $() : d().then($), r)
	};
}
var x0 = (s) => setTimeout(s, 0);
function eb() {
	let s = [],
		e = 0,
		n = (a) => {
			a();
		},
		t = (a) => {
			a();
		},
		l = x0;
	const r = (a) => {
			e
				? s.push(a)
				: l(() => {
						n(a);
					});
		},
		o = () => {
			const a = s;
			(s = []),
				a.length &&
					l(() => {
						t(() => {
							a.forEach((i) => {
								n(i);
							});
						});
					});
		};
	return {
		batch: (a) => {
			let i;
			e++;
			try {
				i = a();
			} finally {
				e--, e || o();
			}
			return i;
		},
		batchCalls:
			(a) =>
			(...i) => {
				r(() => {
					a(...i);
				});
			},
		schedule: r,
		setNotifyFunction: (a) => {
			n = a;
		},
		setBatchNotifyFunction: (a) => {
			t = a;
		},
		setScheduler: (a) => {
			l = a;
		}
	};
}
var $t = eb(),
	$n,
	To,
	Ei =
		((To = class {
			constructor() {
				ze(this, $n);
			}
			destroy() {
				this.clearGcTimeout();
			}
			scheduleGc() {
				this.clearGcTimeout(),
					B0(this.gcTime) &&
						Ve(
							this,
							$n,
							setTimeout(() => {
								this.optionalRemove();
							}, this.gcTime)
						);
			}
			updateGcTime(s) {
				this.gcTime = Math.max(this.gcTime || 0, s ?? (Nl ? 1 / 0 : 5 * 60 * 1e3));
			}
			clearGcTimeout() {
				Y(this, $n) && (clearTimeout(Y(this, $n)), Ve(this, $n, void 0));
			}
		}),
		($n = new WeakMap()),
		To),
	Ln,
	qn,
	yt,
	bn,
	_t,
	al,
	vn,
	At,
	Ht,
	Ao,
	tb =
		((Ao = class extends Ei {
			constructor(e) {
				super();
				ze(this, At);
				ze(this, Ln);
				ze(this, qn);
				ze(this, yt);
				ze(this, bn);
				ze(this, _t);
				ze(this, al);
				ze(this, vn);
				Ve(this, vn, !1),
					Ve(this, al, e.defaultOptions),
					this.setOptions(e.options),
					(this.observers = []),
					Ve(this, bn, e.client),
					Ve(this, yt, Y(this, bn).getQueryCache()),
					(this.queryKey = e.queryKey),
					(this.queryHash = e.queryHash),
					Ve(this, Ln, lb(this.options)),
					(this.state = e.state ?? Y(this, Ln)),
					this.scheduleGc();
			}
			get meta() {
				return this.options.meta;
			}
			get promise() {
				var e;
				return (e = Y(this, _t)) == null ? void 0 : e.promise;
			}
			setOptions(e) {
				(this.options = { ...Y(this, al), ...e }), this.updateGcTime(this.options.gcTime);
			}
			optionalRemove() {
				!this.observers.length && this.state.fetchStatus === 'idle' && Y(this, yt).remove(this);
			}
			setData(e, n) {
				const t = Q0(this.state.data, e, this.options);
				return (
					mt(this, At, Ht).call(this, {
						data: t,
						type: 'success',
						dataUpdatedAt: n == null ? void 0 : n.updatedAt,
						manual: n == null ? void 0 : n.manual
					}),
					t
				);
			}
			setState(e, n) {
				mt(this, At, Ht).call(this, { type: 'setState', state: e, setStateOptions: n });
			}
			cancel(e) {
				var t, l;
				const n = (t = Y(this, _t)) == null ? void 0 : t.promise;
				return (
					(l = Y(this, _t)) == null || l.cancel(e), n ? n.then(Tt).catch(Tt) : Promise.resolve()
				);
			}
			destroy() {
				super.destroy(), this.cancel({ silent: !0 });
			}
			reset() {
				this.destroy(), this.setState(Y(this, Ln));
			}
			isActive() {
				return this.observers.some((e) => z0(e.options.enabled, this) !== !1);
			}
			isDisabled() {
				return this.getObserversCount() > 0
					? !this.isActive()
					: this.options.queryFn === rs ||
							this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
			}
			isStatic() {
				return this.getObserversCount() > 0
					? this.observers.some((e) => Jl(e.options.staleTime, this) === 'static')
					: !1;
			}
			isStale() {
				return this.getObserversCount() > 0
					? this.observers.some((e) => e.getCurrentResult().isStale)
					: this.state.data === void 0 || this.state.isInvalidated;
			}
			isStaleByTime(e = 0) {
				return this.state.data === void 0
					? !0
					: e === 'static'
						? !1
						: this.state.isInvalidated
							? !0
							: !U0(this.state.dataUpdatedAt, e);
			}
			onFocus() {
				var n;
				const e = this.observers.find((t) => t.shouldFetchOnWindowFocus());
				e == null || e.refetch({ cancelRefetch: !1 }), (n = Y(this, _t)) == null || n.continue();
			}
			onOnline() {
				var n;
				const e = this.observers.find((t) => t.shouldFetchOnReconnect());
				e == null || e.refetch({ cancelRefetch: !1 }), (n = Y(this, _t)) == null || n.continue();
			}
			addObserver(e) {
				this.observers.includes(e) ||
					(this.observers.push(e),
					this.clearGcTimeout(),
					Y(this, yt).notify({ type: 'observerAdded', query: this, observer: e }));
			}
			removeObserver(e) {
				this.observers.includes(e) &&
					((this.observers = this.observers.filter((n) => n !== e)),
					this.observers.length ||
						(Y(this, _t) &&
							(Y(this, vn) ? Y(this, _t).cancel({ revert: !0 }) : Y(this, _t).cancelRetry()),
						this.scheduleGc()),
					Y(this, yt).notify({ type: 'observerRemoved', query: this, observer: e }));
			}
			getObserversCount() {
				return this.observers.length;
			}
			invalidate() {
				this.state.isInvalidated || mt(this, At, Ht).call(this, { type: 'invalidate' });
			}
			fetch(e, n) {
				var u, f, c;
				if (this.state.fetchStatus !== 'idle') {
					if (this.state.data !== void 0 && n != null && n.cancelRefetch)
						this.cancel({ silent: !0 });
					else if (Y(this, _t)) return Y(this, _t).continueRetry(), Y(this, _t).promise;
				}
				if ((e && this.setOptions(e), !this.options.queryFn)) {
					const h = this.observers.find((d) => d.options.queryFn);
					h && this.setOptions(h.options);
				}
				const t = new AbortController(),
					l = (h) => {
						Object.defineProperty(h, 'signal', {
							enumerable: !0,
							get: () => (Ve(this, vn, !0), t.signal)
						});
					},
					r = () => {
						const h = $i(this.options, n),
							$ = (() => {
								const p = { client: Y(this, bn), queryKey: this.queryKey, meta: this.meta };
								return l(p), p;
							})();
						return (
							Ve(this, vn, !1), this.options.persister ? this.options.persister(h, $, this) : h($)
						);
					},
					a = (() => {
						const h = {
							fetchOptions: n,
							options: this.options,
							queryKey: this.queryKey,
							client: Y(this, bn),
							state: this.state,
							fetchFn: r
						};
						return l(h), h;
					})();
				(u = this.options.behavior) == null || u.onFetch(a, this),
					Ve(this, qn, this.state),
					(this.state.fetchStatus === 'idle' ||
						this.state.fetchMeta !== ((f = a.fetchOptions) == null ? void 0 : f.meta)) &&
						mt(this, At, Ht).call(this, {
							type: 'fetch',
							meta: (c = a.fetchOptions) == null ? void 0 : c.meta
						});
				const i = (h) => {
					var d, $, p, b;
					(Bl(h) && h.silent) || mt(this, At, Ht).call(this, { type: 'error', error: h }),
						Bl(h) ||
							(($ = (d = Y(this, yt).config).onError) == null || $.call(d, h, this),
							(b = (p = Y(this, yt).config).onSettled) == null ||
								b.call(p, this.state.data, h, this)),
						this.scheduleGc();
				};
				return (
					Ve(
						this,
						_t,
						Ci({
							initialPromise: n == null ? void 0 : n.initialPromise,
							fn: a.fetchFn,
							abort: t.abort.bind(t),
							onSuccess: (h) => {
								var d, $, p, b;
								if (h === void 0) {
									i(new Error(`${this.queryHash} data is undefined`));
									return;
								}
								try {
									this.setData(h);
								} catch (w) {
									i(w);
									return;
								}
								($ = (d = Y(this, yt).config).onSuccess) == null || $.call(d, h, this),
									(b = (p = Y(this, yt).config).onSettled) == null ||
										b.call(p, h, this.state.error, this),
									this.scheduleGc();
							},
							onError: i,
							onFail: (h, d) => {
								mt(this, At, Ht).call(this, { type: 'failed', failureCount: h, error: d });
							},
							onPause: () => {
								mt(this, At, Ht).call(this, { type: 'pause' });
							},
							onContinue: () => {
								mt(this, At, Ht).call(this, { type: 'continue' });
							},
							retry: a.options.retry,
							retryDelay: a.options.retryDelay,
							networkMode: a.options.networkMode,
							canRun: () => !0
						})
					),
					Y(this, _t).start()
				);
			}
		}),
		(Ln = new WeakMap()),
		(qn = new WeakMap()),
		(yt = new WeakMap()),
		(bn = new WeakMap()),
		(_t = new WeakMap()),
		(al = new WeakMap()),
		(vn = new WeakMap()),
		(At = new WeakSet()),
		(Ht = function (e) {
			const n = (t) => {
				switch (e.type) {
					case 'failed':
						return { ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error };
					case 'pause':
						return { ...t, fetchStatus: 'paused' };
					case 'continue':
						return { ...t, fetchStatus: 'fetching' };
					case 'fetch':
						return { ...t, ...nb(t.data, this.options), fetchMeta: e.meta ?? null };
					case 'success':
						return {
							...t,
							data: e.data,
							dataUpdateCount: t.dataUpdateCount + 1,
							dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
							error: null,
							isInvalidated: !1,
							status: 'success',
							...(!e.manual && {
								fetchStatus: 'idle',
								fetchFailureCount: 0,
								fetchFailureReason: null
							})
						};
					case 'error':
						const l = e.error;
						return Bl(l) && l.revert && Y(this, qn)
							? { ...Y(this, qn), fetchStatus: 'idle' }
							: {
									...t,
									error: l,
									errorUpdateCount: t.errorUpdateCount + 1,
									errorUpdatedAt: Date.now(),
									fetchFailureCount: t.fetchFailureCount + 1,
									fetchFailureReason: l,
									fetchStatus: 'idle',
									status: 'error'
								};
					case 'invalidate':
						return { ...t, isInvalidated: !0 };
					case 'setState':
						return { ...t, ...e.state };
				}
			};
			(this.state = n(this.state)),
				$t.batch(() => {
					this.observers.forEach((t) => {
						t.onQueryUpdate();
					}),
						Y(this, yt).notify({ query: this, type: 'updated', action: e });
				});
		}),
		Ao);
function nb(s, e) {
	return {
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchStatus: vi(e.networkMode) ? 'fetching' : 'paused',
		...(s === void 0 && { error: null, status: 'pending' })
	};
}
function lb(s) {
	const e = typeof s.initialData == 'function' ? s.initialData() : s.initialData,
		n = e !== void 0,
		t = n
			? typeof s.initialDataUpdatedAt == 'function'
				? s.initialDataUpdatedAt()
				: s.initialDataUpdatedAt
			: 0;
	return {
		data: e,
		dataUpdateCount: 0,
		dataUpdatedAt: n ? (t ?? Date.now()) : 0,
		error: null,
		errorUpdateCount: 0,
		errorUpdatedAt: 0,
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchMeta: null,
		isInvalidated: !1,
		status: n ? 'success' : 'pending',
		fetchStatus: 'idle'
	};
}
var Rt,
	Oo,
	sb =
		((Oo = class extends Pl {
			constructor(e = {}) {
				super();
				ze(this, Rt);
				(this.config = e), Ve(this, Rt, new Map());
			}
			build(e, n, t) {
				const l = n.queryKey,
					r = n.queryHash ?? ss(l, n);
				let o = this.get(r);
				return (
					o ||
						((o = new tb({
							client: e,
							queryKey: l,
							queryHash: r,
							options: e.defaultQueryOptions(n),
							state: t,
							defaultOptions: e.getQueryDefaults(l)
						})),
						this.add(o)),
					o
				);
			}
			add(e) {
				Y(this, Rt).has(e.queryHash) ||
					(Y(this, Rt).set(e.queryHash, e), this.notify({ type: 'added', query: e }));
			}
			remove(e) {
				const n = Y(this, Rt).get(e.queryHash);
				n &&
					(e.destroy(),
					n === e && Y(this, Rt).delete(e.queryHash),
					this.notify({ type: 'removed', query: e }));
			}
			clear() {
				$t.batch(() => {
					this.getAll().forEach((e) => {
						this.remove(e);
					});
				});
			}
			get(e) {
				return Y(this, Rt).get(e);
			}
			getAll() {
				return [...Y(this, Rt).values()];
			}
			find(e) {
				const n = { exact: !0, ...e };
				return this.getAll().find((t) => bo(n, t));
			}
			findAll(e = {}) {
				const n = this.getAll();
				return Object.keys(e).length > 0 ? n.filter((t) => bo(e, t)) : n;
			}
			notify(e) {
				$t.batch(() => {
					this.listeners.forEach((n) => {
						n(e);
					});
				});
			}
			onFocus() {
				$t.batch(() => {
					this.getAll().forEach((e) => {
						e.onFocus();
					});
				});
			}
			onOnline() {
				$t.batch(() => {
					this.getAll().forEach((e) => {
						e.onOnline();
					});
				});
			}
		}),
		(Rt = new WeakMap()),
		Oo),
	Ft,
	pt,
	kn,
	Vt,
	rn,
	Po,
	rb =
		((Po = class extends Ei {
			constructor(e) {
				super();
				ze(this, Vt);
				ze(this, Ft);
				ze(this, pt);
				ze(this, kn);
				(this.mutationId = e.mutationId),
					Ve(this, pt, e.mutationCache),
					Ve(this, Ft, []),
					(this.state = e.state || ob()),
					this.setOptions(e.options),
					this.scheduleGc();
			}
			setOptions(e) {
				(this.options = e), this.updateGcTime(this.options.gcTime);
			}
			get meta() {
				return this.options.meta;
			}
			addObserver(e) {
				Y(this, Ft).includes(e) ||
					(Y(this, Ft).push(e),
					this.clearGcTimeout(),
					Y(this, pt).notify({ type: 'observerAdded', mutation: this, observer: e }));
			}
			removeObserver(e) {
				Ve(
					this,
					Ft,
					Y(this, Ft).filter((n) => n !== e)
				),
					this.scheduleGc(),
					Y(this, pt).notify({ type: 'observerRemoved', mutation: this, observer: e });
			}
			optionalRemove() {
				Y(this, Ft).length ||
					(this.state.status === 'pending' ? this.scheduleGc() : Y(this, pt).remove(this));
			}
			continue() {
				var e;
				return (
					((e = Y(this, kn)) == null ? void 0 : e.continue()) ?? this.execute(this.state.variables)
				);
			}
			async execute(e) {
				var r, o, a, i, u, f, c, h, d, $, p, b, w, y, I, Q, P, V, z, ee;
				const n = () => {
					mt(this, Vt, rn).call(this, { type: 'continue' });
				};
				Ve(
					this,
					kn,
					Ci({
						fn: () =>
							this.options.mutationFn
								? this.options.mutationFn(e)
								: Promise.reject(new Error('No mutationFn found')),
						onFail: (se, T) => {
							mt(this, Vt, rn).call(this, { type: 'failed', failureCount: se, error: T });
						},
						onPause: () => {
							mt(this, Vt, rn).call(this, { type: 'pause' });
						},
						onContinue: n,
						retry: this.options.retry ?? 0,
						retryDelay: this.options.retryDelay,
						networkMode: this.options.networkMode,
						canRun: () => Y(this, pt).canRun(this)
					})
				);
				const t = this.state.status === 'pending',
					l = !Y(this, kn).canStart();
				try {
					if (t) n();
					else {
						mt(this, Vt, rn).call(this, { type: 'pending', variables: e, isPaused: l }),
							await ((o = (r = Y(this, pt).config).onMutate) == null ? void 0 : o.call(r, e, this));
						const T = await ((i = (a = this.options).onMutate) == null ? void 0 : i.call(a, e));
						T !== this.state.context &&
							mt(this, Vt, rn).call(this, {
								type: 'pending',
								context: T,
								variables: e,
								isPaused: l
							});
					}
					const se = await Y(this, kn).start();
					return (
						await ((f = (u = Y(this, pt).config).onSuccess) == null
							? void 0
							: f.call(u, se, e, this.state.context, this)),
						await ((h = (c = this.options).onSuccess) == null
							? void 0
							: h.call(c, se, e, this.state.context)),
						await (($ = (d = Y(this, pt).config).onSettled) == null
							? void 0
							: $.call(d, se, null, this.state.variables, this.state.context, this)),
						await ((b = (p = this.options).onSettled) == null
							? void 0
							: b.call(p, se, null, e, this.state.context)),
						mt(this, Vt, rn).call(this, { type: 'success', data: se }),
						se
					);
				} catch (se) {
					try {
						throw (
							(await ((y = (w = Y(this, pt).config).onError) == null
								? void 0
								: y.call(w, se, e, this.state.context, this)),
							await ((Q = (I = this.options).onError) == null
								? void 0
								: Q.call(I, se, e, this.state.context)),
							await ((V = (P = Y(this, pt).config).onSettled) == null
								? void 0
								: V.call(P, void 0, se, this.state.variables, this.state.context, this)),
							await ((ee = (z = this.options).onSettled) == null
								? void 0
								: ee.call(z, void 0, se, e, this.state.context)),
							se)
						);
					} finally {
						mt(this, Vt, rn).call(this, { type: 'error', error: se });
					}
				} finally {
					Y(this, pt).runNext(this);
				}
			}
		}),
		(Ft = new WeakMap()),
		(pt = new WeakMap()),
		(kn = new WeakMap()),
		(Vt = new WeakSet()),
		(rn = function (e) {
			const n = (t) => {
				switch (e.type) {
					case 'failed':
						return { ...t, failureCount: e.failureCount, failureReason: e.error };
					case 'pause':
						return { ...t, isPaused: !0 };
					case 'continue':
						return { ...t, isPaused: !1 };
					case 'pending':
						return {
							...t,
							context: e.context,
							data: void 0,
							failureCount: 0,
							failureReason: null,
							error: null,
							isPaused: e.isPaused,
							status: 'pending',
							variables: e.variables,
							submittedAt: Date.now()
						};
					case 'success':
						return {
							...t,
							data: e.data,
							failureCount: 0,
							failureReason: null,
							error: null,
							status: 'success',
							isPaused: !1
						};
					case 'error':
						return {
							...t,
							data: void 0,
							error: e.error,
							failureCount: t.failureCount + 1,
							failureReason: e.error,
							isPaused: !1,
							status: 'error'
						};
				}
			};
			(this.state = n(this.state)),
				$t.batch(() => {
					Y(this, Ft).forEach((t) => {
						t.onMutationUpdate(e);
					}),
						Y(this, pt).notify({ mutation: this, type: 'updated', action: e });
				});
		}),
		Po);
function ob() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		failureReason: null,
		isPaused: !1,
		status: 'idle',
		variables: void 0,
		submittedAt: 0
	};
}
var Gt,
	Ot,
	ul,
	No,
	ib =
		((No = class extends Pl {
			constructor(e = {}) {
				super();
				ze(this, Gt);
				ze(this, Ot);
				ze(this, ul);
				(this.config = e), Ve(this, Gt, new Set()), Ve(this, Ot, new Map()), Ve(this, ul, 0);
			}
			build(e, n, t) {
				const l = new rb({
					mutationCache: this,
					mutationId: ++pl(this, ul)._,
					options: e.defaultMutationOptions(n),
					state: t
				});
				return this.add(l), l;
			}
			add(e) {
				Y(this, Gt).add(e);
				const n = vl(e);
				if (typeof n == 'string') {
					const t = Y(this, Ot).get(n);
					t ? t.push(e) : Y(this, Ot).set(n, [e]);
				}
				this.notify({ type: 'added', mutation: e });
			}
			remove(e) {
				if (Y(this, Gt).delete(e)) {
					const n = vl(e);
					if (typeof n == 'string') {
						const t = Y(this, Ot).get(n);
						if (t)
							if (t.length > 1) {
								const l = t.indexOf(e);
								l !== -1 && t.splice(l, 1);
							} else t[0] === e && Y(this, Ot).delete(n);
					}
				}
				this.notify({ type: 'removed', mutation: e });
			}
			canRun(e) {
				const n = vl(e);
				if (typeof n == 'string') {
					const t = Y(this, Ot).get(n),
						l = t == null ? void 0 : t.find((r) => r.state.status === 'pending');
					return !l || l === e;
				} else return !0;
			}
			runNext(e) {
				var t;
				const n = vl(e);
				if (typeof n == 'string') {
					const l =
						(t = Y(this, Ot).get(n)) == null ? void 0 : t.find((r) => r !== e && r.state.isPaused);
					return (l == null ? void 0 : l.continue()) ?? Promise.resolve();
				} else return Promise.resolve();
			}
			clear() {
				$t.batch(() => {
					Y(this, Gt).forEach((e) => {
						this.notify({ type: 'removed', mutation: e });
					}),
						Y(this, Gt).clear(),
						Y(this, Ot).clear();
				});
			}
			getAll() {
				return Array.from(Y(this, Gt));
			}
			find(e) {
				const n = { exact: !0, ...e };
				return this.getAll().find((t) => vo(n, t));
			}
			findAll(e = {}) {
				return this.getAll().filter((n) => vo(e, n));
			}
			notify(e) {
				$t.batch(() => {
					this.listeners.forEach((n) => {
						n(e);
					});
				});
			}
			resumePausedMutations() {
				const e = this.getAll().filter((n) => n.state.isPaused);
				return $t.batch(() => Promise.all(e.map((n) => n.continue().catch(Tt))));
			}
		}),
		(Gt = new WeakMap()),
		(Ot = new WeakMap()),
		(ul = new WeakMap()),
		No);
function vl(s) {
	var e;
	return (e = s.options.scope) == null ? void 0 : e.id;
}
function Eo(s) {
	return {
		onFetch: (e, n) => {
			var f, c, h, d, $;
			const t = e.options,
				l =
					(h =
						(c = (f = e.fetchOptions) == null ? void 0 : f.meta) == null ? void 0 : c.fetchMore) ==
					null
						? void 0
						: h.direction,
				r = ((d = e.state.data) == null ? void 0 : d.pages) || [],
				o = (($ = e.state.data) == null ? void 0 : $.pageParams) || [];
			let a = { pages: [], pageParams: [] },
				i = 0;
			const u = async () => {
				let p = !1;
				const b = (I) => {
						Object.defineProperty(I, 'signal', {
							enumerable: !0,
							get: () => (
								e.signal.aborted
									? (p = !0)
									: e.signal.addEventListener('abort', () => {
											p = !0;
										}),
								e.signal
							)
						});
					},
					w = $i(e.options, e.fetchOptions),
					y = async (I, Q, P) => {
						if (p) return Promise.reject();
						if (Q == null && I.pages.length) return Promise.resolve(I);
						const z = (() => {
								const W = {
									client: e.client,
									queryKey: e.queryKey,
									pageParam: Q,
									direction: P ? 'backward' : 'forward',
									meta: e.options.meta
								};
								return b(W), W;
							})(),
							ee = await w(z),
							{ maxPages: se } = e.options,
							T = P ? W0 : G0;
						return { pages: T(I.pages, ee, se), pageParams: T(I.pageParams, Q, se) };
					};
				if (l && r.length) {
					const I = l === 'backward',
						Q = I ? ab : So,
						P = { pages: r, pageParams: o },
						V = Q(t, P);
					a = await y(P, V, I);
				} else {
					const I = s ?? r.length;
					do {
						const Q = i === 0 ? (o[0] ?? t.initialPageParam) : So(t, a);
						if (i > 0 && Q == null) break;
						(a = await y(a, Q)), i++;
					} while (i < I);
				}
				return a;
			};
			e.options.persister
				? (e.fetchFn = () => {
						var p, b;
						return (b = (p = e.options).persister) == null
							? void 0
							: b.call(
									p,
									u,
									{
										client: e.client,
										queryKey: e.queryKey,
										meta: e.options.meta,
										signal: e.signal
									},
									n
								);
					})
				: (e.fetchFn = u);
		}
	};
}
function So(s, { pages: e, pageParams: n }) {
	const t = e.length - 1;
	return e.length > 0 ? s.getNextPageParam(e[t], e, n[t], n) : void 0;
}
function ab(s, { pages: e, pageParams: n }) {
	var t;
	return e.length > 0
		? (t = s.getPreviousPageParam) == null
			? void 0
			: t.call(s, e[0], e, n[0], n)
		: void 0;
}
var et,
	fn,
	cn,
	jn,
	Kn,
	dn,
	Bn,
	Un,
	Do,
	Si =
		((Do = class {
			constructor(s = {}) {
				ze(this, et);
				ze(this, fn);
				ze(this, cn);
				ze(this, jn);
				ze(this, Kn);
				ze(this, dn);
				ze(this, Bn);
				ze(this, Un);
				Ve(this, et, s.queryCache || new sb()),
					Ve(this, fn, s.mutationCache || new ib()),
					Ve(this, cn, s.defaultOptions || {}),
					Ve(this, jn, new Map()),
					Ve(this, Kn, new Map()),
					Ve(this, dn, 0);
			}
			mount() {
				pl(this, dn)._++,
					Y(this, dn) === 1 &&
						(Ve(
							this,
							Bn,
							bi.subscribe(async (s) => {
								s && (await this.resumePausedMutations(), Y(this, et).onFocus());
							})
						),
						Ve(
							this,
							Un,
							yl.subscribe(async (s) => {
								s && (await this.resumePausedMutations(), Y(this, et).onOnline());
							})
						));
			}
			unmount() {
				var s, e;
				pl(this, dn)._--,
					Y(this, dn) === 0 &&
						((s = Y(this, Bn)) == null || s.call(this),
						Ve(this, Bn, void 0),
						(e = Y(this, Un)) == null || e.call(this),
						Ve(this, Un, void 0));
			}
			isFetching(s) {
				return Y(this, et).findAll({ ...s, fetchStatus: 'fetching' }).length;
			}
			isMutating(s) {
				return Y(this, fn).findAll({ ...s, status: 'pending' }).length;
			}
			getQueryData(s) {
				var n;
				const e = this.defaultQueryOptions({ queryKey: s });
				return (n = Y(this, et).get(e.queryHash)) == null ? void 0 : n.state.data;
			}
			ensureQueryData(s) {
				const e = this.defaultQueryOptions(s),
					n = Y(this, et).build(this, e),
					t = n.state.data;
				return t === void 0
					? this.fetchQuery(s)
					: (s.revalidateIfStale && n.isStaleByTime(Jl(e.staleTime, n)) && this.prefetchQuery(e),
						Promise.resolve(t));
			}
			getQueriesData(s) {
				return Y(this, et)
					.findAll(s)
					.map(({ queryKey: e, state: n }) => {
						const t = n.data;
						return [e, t];
					});
			}
			setQueryData(s, e, n) {
				const t = this.defaultQueryOptions({ queryKey: s }),
					l = Y(this, et).get(t.queryHash),
					r = l == null ? void 0 : l.state.data,
					o = K0(e, r);
				if (o !== void 0)
					return Y(this, et)
						.build(this, t)
						.setData(o, { ...n, manual: !0 });
			}
			setQueriesData(s, e, n) {
				return $t.batch(() =>
					Y(this, et)
						.findAll(s)
						.map(({ queryKey: t }) => [t, this.setQueryData(t, e, n)])
				);
			}
			getQueryState(s) {
				var n;
				const e = this.defaultQueryOptions({ queryKey: s });
				return (n = Y(this, et).get(e.queryHash)) == null ? void 0 : n.state;
			}
			removeQueries(s) {
				const e = Y(this, et);
				$t.batch(() => {
					e.findAll(s).forEach((n) => {
						e.remove(n);
					});
				});
			}
			resetQueries(s, e) {
				const n = Y(this, et);
				return $t.batch(
					() => (
						n.findAll(s).forEach((t) => {
							t.reset();
						}),
						this.refetchQueries({ type: 'active', ...s }, e)
					)
				);
			}
			cancelQueries(s, e = {}) {
				const n = { revert: !0, ...e },
					t = $t.batch(() =>
						Y(this, et)
							.findAll(s)
							.map((l) => l.cancel(n))
					);
				return Promise.all(t).then(Tt).catch(Tt);
			}
			invalidateQueries(s, e = {}) {
				return $t.batch(
					() => (
						Y(this, et)
							.findAll(s)
							.forEach((n) => {
								n.invalidate();
							}),
						(s == null ? void 0 : s.refetchType) === 'none'
							? Promise.resolve()
							: this.refetchQueries(
									{
										...s,
										type:
											(s == null ? void 0 : s.refetchType) ??
											(s == null ? void 0 : s.type) ??
											'active'
									},
									e
								)
					)
				);
			}
			refetchQueries(s, e = {}) {
				const n = { ...e, cancelRefetch: e.cancelRefetch ?? !0 },
					t = $t.batch(() =>
						Y(this, et)
							.findAll(s)
							.filter((l) => !l.isDisabled() && !l.isStatic())
							.map((l) => {
								let r = l.fetch(void 0, n);
								return (
									n.throwOnError || (r = r.catch(Tt)),
									l.state.fetchStatus === 'paused' ? Promise.resolve() : r
								);
							})
					);
				return Promise.all(t).then(Tt);
			}
			fetchQuery(s) {
				const e = this.defaultQueryOptions(s);
				e.retry === void 0 && (e.retry = !1);
				const n = Y(this, et).build(this, e);
				return n.isStaleByTime(Jl(e.staleTime, n)) ? n.fetch(e) : Promise.resolve(n.state.data);
			}
			prefetchQuery(s) {
				return this.fetchQuery(s).then(Tt).catch(Tt);
			}
			fetchInfiniteQuery(s) {
				return (s.behavior = Eo(s.pages)), this.fetchQuery(s);
			}
			prefetchInfiniteQuery(s) {
				return this.fetchInfiniteQuery(s).then(Tt).catch(Tt);
			}
			ensureInfiniteQueryData(s) {
				return (s.behavior = Eo(s.pages)), this.ensureQueryData(s);
			}
			resumePausedMutations() {
				return yl.isOnline() ? Y(this, fn).resumePausedMutations() : Promise.resolve();
			}
			getQueryCache() {
				return Y(this, et);
			}
			getMutationCache() {
				return Y(this, fn);
			}
			getDefaultOptions() {
				return Y(this, cn);
			}
			setDefaultOptions(s) {
				Ve(this, cn, s);
			}
			setQueryDefaults(s, e) {
				Y(this, jn).set(ol(s), { queryKey: s, defaultOptions: e });
			}
			getQueryDefaults(s) {
				const e = [...Y(this, jn).values()],
					n = {};
				return (
					e.forEach((t) => {
						il(s, t.queryKey) && Object.assign(n, t.defaultOptions);
					}),
					n
				);
			}
			setMutationDefaults(s, e) {
				Y(this, Kn).set(ol(s), { mutationKey: s, defaultOptions: e });
			}
			getMutationDefaults(s) {
				const e = [...Y(this, Kn).values()],
					n = {};
				return (
					e.forEach((t) => {
						il(s, t.mutationKey) && Object.assign(n, t.defaultOptions);
					}),
					n
				);
			}
			defaultQueryOptions(s) {
				if (s._defaulted) return s;
				const e = {
					...Y(this, cn).queries,
					...this.getQueryDefaults(s.queryKey),
					...s,
					_defaulted: !0
				};
				return (
					e.queryHash || (e.queryHash = ss(e.queryKey, e)),
					e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== 'always'),
					e.throwOnError === void 0 && (e.throwOnError = !!e.suspense),
					!e.networkMode && e.persister && (e.networkMode = 'offlineFirst'),
					e.queryFn === rs && (e.enabled = !1),
					e
				);
			}
			defaultMutationOptions(s) {
				return s != null && s._defaulted
					? s
					: {
							...Y(this, cn).mutations,
							...((s == null ? void 0 : s.mutationKey) && this.getMutationDefaults(s.mutationKey)),
							...s,
							_defaulted: !0
						};
			}
			clear() {
				Y(this, et).clear(), Y(this, fn).clear();
			}
		}),
		(et = new WeakMap()),
		(fn = new WeakMap()),
		(cn = new WeakMap()),
		(jn = new WeakMap()),
		(Kn = new WeakMap()),
		(dn = new WeakMap()),
		(Bn = new WeakMap()),
		(Un = new WeakMap()),
		Do);
const ub = '$$_queryClient',
	fb = (s) => {
		Dt(ub, s);
	};
function cb(s) {
	let e;
	const n = s[2].default,
		t = ae(n, s, s[1], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, [r]) {
			t && t.p && (!e || r & 2) && ue(t, n, l, l[1], e ? ce(n, l[1], r, null) : fe(l[1]), null);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function db(s, e, n) {
	let { $$slots: t = {}, $$scope: l } = e,
		{ client: r = new Si() } = e;
	return (
		wn(() => {
			r.mount();
		}),
		fb(r),
		Oi(() => {
			r.unmount();
		}),
		(s.$$set = (o) => {
			'client' in o && n(0, (r = o.client)), '$$scope' in o && n(1, (l = o.$$scope));
		}),
		[r, l, t]
	);
}
class mb extends pe {
	constructor(e) {
		super(), $e(this, e, db, cb, me, { client: 0 });
	}
}
const _b = Symbol('typyst-api-client'),
	hb = Symbol('typyst-user');
function gb(s) {
	Dt(_b, s);
}
function pb(s) {
	Dt(hb, s);
}
function $b(s = {}) {
	const { baseUrl: e = '/api/rpc', headers: n = {}, timeout: t = 3e4 } = s,
		l = async (r, o) => {
			const a = await fetch(`${e}/${r}`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', ...n },
				body: o ? JSON.stringify(o) : void 0,
				signal: AbortSignal.timeout(t)
			});
			if (!a.ok) throw new Error(`API error: ${a.status}`);
			return a.json();
		};
	return {
		auth: {
			getSession: () => l('auth.getSession'),
			getUser: () => l('auth.getUser'),
			signIn: (r) => l('auth.signIn', r),
			signOut: () => l('auth.signOut'),
			signUp: (r) => l('auth.signUp', r),
			updateProfile: (r) => l('auth.updateProfile', r),
			changePassword: (r) => l('auth.changePassword', r),
			forgotPassword: (r) => l('auth.forgotPassword', r),
			resetPassword: (r) => l('auth.resetPassword', r)
		},
		collections: {
			list: (r) => l('collections.list', r),
			get: (r) => l('collections.get', r),
			create: (r) => l('collections.create', r),
			update: (r) => l('collections.update', r),
			delete: (r) => l('collections.delete', r),
			getRecent: (r) => l('collections.getRecent', r)
		},
		entries: {
			list: (r) => l('entries.list', r),
			get: (r) => l('entries.get', r),
			create: (r) => l('entries.create', r),
			update: (r) => l('entries.update', r),
			delete: (r) => l('entries.delete', r),
			search: (r) => l('entries.search', r),
			getTree: (r) => l('entries.getTree', r),
			bulkDelete: (r) => l('entries.bulkDelete', r),
			bulkMove: (r) => l('entries.bulkMove', r)
		}
	};
}
const bb = typeof globalThis < 'u' && 'window' in globalThis && typeof globalThis.window < 'u';
function vb() {
	return new Si({
		defaultOptions: {
			queries: {
				staleTime: 1e3 * 60 * 5,
				gcTime: 1e3 * 60 * 30,
				refetchOnWindowFocus: !1,
				refetchOnMount: !0,
				refetchOnReconnect: !0,
				retry: (s, e) => {
					var n;
					return (n = e == null ? void 0 : e.message) != null && n.includes('4') ? !1 : s < 3;
				},
				enabled: bb
			},
			mutations: {
				retry: (s, e) => {
					var n;
					return (n = e == null ? void 0 : e.message) != null && n.includes('4') ? !1 : s < 2;
				}
			}
		}
	});
}
let Ul;
function kb() {
	return Ul || (Ul = vb()), Ul;
}
function Cb(s) {
	let e;
	const n = s[3].default,
		t = ae(n, s, s[4], null);
	return {
		c() {
			t && t.c();
		},
		l(l) {
			t && t.l(l);
		},
		m(l, r) {
			t && t.m(l, r), (e = !0);
		},
		p(l, r) {
			t && t.p && (!e || r & 16) && ue(t, n, l, l[4], e ? ce(n, l[4], r, null) : fe(l[4]), null);
		},
		i(l) {
			e || (m(t, l), (e = !0));
		},
		o(l) {
			g(t, l), (e = !1);
		},
		d(l) {
			t && t.d(l);
		}
	};
}
function Eb(s) {
	let e, n;
	return (
		(e = new mb({ props: { client: s[0], $$slots: { default: [Cb] }, $$scope: { ctx: s } } })),
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
				const r = {};
				l & 16 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function Sb(s, e, n) {
	let { $$slots: t = {}, $$scope: l } = e,
		{ apiOptions: r = {} } = e,
		{ user: o = null } = e;
	const a = kb(),
		i = $b(r);
	return (
		gb(i),
		pb(o),
		(s.$$set = (u) => {
			'apiOptions' in u && n(1, (r = u.apiOptions)),
				'user' in u && n(2, (o = u.user)),
				'$$scope' in u && n(4, (l = u.$$scope));
		}),
		[a, r, o, t, l]
	);
}
class wb extends pe {
	constructor(e) {
		super(), $e(this, e, Sb, Eb, me, { apiOptions: 1, user: 2 });
	}
}
function yb(s) {
	let e,
		n = '',
		t,
		l,
		r,
		o = '',
		a;
	return {
		c() {
			(e = R('script')),
				(e.innerHTML = n),
				(l = q()),
				(r = R('script')),
				(r.innerHTML = o),
				this.h();
		},
		l(i) {
			(e = M(i, 'SCRIPT', { src: !0, 'data-website-id': !0, 'data-svelte-h': !0 })),
				it(e) !== 'svelte-131wei2' && (e.innerHTML = n),
				(l = L(i)),
				(r = M(i, 'SCRIPT', { src: !0, 'data-token': !0, 'data-svelte-h': !0 })),
				it(r) !== 'svelte-1q1jjuo' && (r.innerHTML = o),
				this.h();
		},
		h() {
			(e.defer = !0),
				cs(e.src, (t = 'https://cloud.umami.is/script.js')) || N(e, 'src', t),
				N(e, 'data-website-id', '279d8c15-20ea-4cc9-91b0-647c90767f15'),
				(r.async = !0),
				cs(r.src, (a = 'https://cdn.seline.so/seline.js')) || N(r, 'src', a),
				N(r, 'data-token', 'd028e058129b859');
		},
		m(i, u) {
			v(i, e, u), v(i, l, u), v(i, r, u);
		},
		d(i) {
			i && (_(e), _(l), _(r));
		}
	};
}
function Tb(s) {
	let e,
		n,
		t,
		l,
		r =
			'<h1 class="text-secondary-foreground">Seems like you&#39;re on mobile</h1> <p class="text-muted-foreground text-sm leading-relaxed">Typyst isn&#39;t yet supported on mobile devices.<br/>Please try again on a desktop.</p>',
		o;
	return (
		(n = new He({
			props: { name: 'phoneOff', class: 'w-9 h-9 fill-none text-secondary-foreground' }
		})),
		{
			c() {
				(e = R('main')), E(n.$$.fragment), (t = q()), (l = R('div')), (l.innerHTML = r), this.h();
			},
			l(a) {
				e = M(a, 'MAIN', { class: !0 });
				var i = K(e);
				S(n.$$.fragment, i),
					(t = L(i)),
					(l = M(i, 'DIV', { class: !0, 'data-svelte-h': !0 })),
					it(l) !== 'svelte-14tnufy' && (l.innerHTML = r),
					i.forEach(_),
					this.h();
			},
			h() {
				N(l, 'class', 'flex flex-col text-center gap-2'),
					N(e, 'class', 'flex min-h-[100dvh] w-full flex-col items-center justify-center gap-5');
			},
			m(a, i) {
				v(a, e, i), C(n, e, null), O(e, t), O(e, l), (o = !0);
			},
			p: we,
			i(a) {
				o || (m(n.$$.fragment, a), (o = !0));
			},
			o(a) {
				g(n.$$.fragment, a), (o = !1);
			},
			d(a) {
				a && _(e), k(n);
			}
		}
	);
}
function Ab(s) {
	let e, n;
	return (
		(e = new wb({
			props: { apiOptions: s[0], user: s[2], $$slots: { default: [Ob] }, $$scope: { ctx: s } }
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
				const r = {};
				l & 1 && (r.apiOptions = t[0]),
					l & 4 && (r.user = t[2]),
					l & 64 && (r.$$scope = { dirty: l, ctx: t }),
					e.$set(r);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
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
function Ob(s) {
	let e, n, t, l, r, o, a, i, u, f, c, h;
	(e = new j0({})), (t = new Xa({})), (r = new Om({})), (a = new t1({}));
	const d = s[5].default,
		$ = ae(d, s, s[6], null);
	return (
		(c = new bm({})),
		{
			c() {
				E(e.$$.fragment),
					(n = q()),
					E(t.$$.fragment),
					(l = q()),
					E(r.$$.fragment),
					(o = q()),
					E(a.$$.fragment),
					(i = q()),
					(u = R('main')),
					$ && $.c(),
					(f = q()),
					E(c.$$.fragment),
					this.h();
			},
			l(p) {
				S(e.$$.fragment, p),
					(n = L(p)),
					S(t.$$.fragment, p),
					(l = L(p)),
					S(r.$$.fragment, p),
					(o = L(p)),
					S(a.$$.fragment, p),
					(i = L(p)),
					(u = M(p, 'MAIN', { class: !0 }));
				var b = K(u);
				$ && $.l(b), b.forEach(_), (f = L(p)), S(c.$$.fragment, p), this.h();
			},
			h() {
				N(u, 'class', 'flex min-h-screen w-full items-center justify-center');
			},
			m(p, b) {
				C(e, p, b),
					v(p, n, b),
					C(t, p, b),
					v(p, l, b),
					C(r, p, b),
					v(p, o, b),
					C(a, p, b),
					v(p, i, b),
					v(p, u, b),
					$ && $.m(u, null),
					v(p, f, b),
					C(c, p, b),
					(h = !0);
			},
			p(p, b) {
				$ && $.p && (!h || b & 64) && ue($, d, p, p[6], h ? ce(d, p[6], b, null) : fe(p[6]), null);
			},
			i(p) {
				h ||
					(m(e.$$.fragment, p),
					m(t.$$.fragment, p),
					m(r.$$.fragment, p),
					m(a.$$.fragment, p),
					m($, p),
					m(c.$$.fragment, p),
					(h = !0));
			},
			o(p) {
				g(e.$$.fragment, p),
					g(t.$$.fragment, p),
					g(r.$$.fragment, p),
					g(a.$$.fragment, p),
					g($, p),
					g(c.$$.fragment, p),
					(h = !1);
			},
			d(p) {
				p && (_(n), _(l), _(o), _(i), _(u), _(f)),
					k(e, p),
					k(t, p),
					k(r, p),
					k(a, p),
					$ && $.d(p),
					k(c, p);
			}
		}
	);
}
function Pb(s) {
	let e,
		n,
		t,
		l,
		r,
		o,
		a,
		i,
		u,
		f,
		c,
		h,
		d,
		$,
		p,
		b,
		w,
		y,
		I,
		Q,
		P,
		V,
		z,
		ee,
		se,
		T,
		W,
		U,
		B = yb();
	const j = [Ab, Tb],
		te = [];
	function F(H, G) {
		return H[1].isDesktop ? 0 : 1;
	}
	return (
		(se = F(s)),
		(T = te[se] = j[se](s)),
		{
			c() {
				(e = R('meta')),
					(n = R('meta')),
					(t = R('meta')),
					(l = R('meta')),
					(r = R('meta')),
					(o = R('meta')),
					(a = R('meta')),
					(i = R('meta')),
					(u = R('meta')),
					(f = R('meta')),
					(c = R('meta')),
					(h = R('meta')),
					(d = R('meta')),
					($ = R('meta')),
					(p = R('meta')),
					(b = R('meta')),
					(w = R('meta')),
					(y = R('meta')),
					(I = R('meta')),
					(Q = R('meta')),
					(P = R('meta')),
					(V = R('meta')),
					B && B.c(),
					(z = le()),
					(ee = q()),
					T.c(),
					(W = le()),
					this.h();
			},
			l(H) {
				const G = Io('svelte-1iuphgd', document.head);
				(e = M(G, 'META', { name: !0, content: !0 })),
					(n = M(G, 'META', { name: !0, content: !0 })),
					(t = M(G, 'META', { name: !0, content: !0 })),
					(l = M(G, 'META', { name: !0, content: !0 })),
					(r = M(G, 'META', { name: !0, content: !0 })),
					(o = M(G, 'META', { name: !0, content: !0 })),
					(a = M(G, 'META', { name: !0, content: !0 })),
					(i = M(G, 'META', { property: !0, content: !0 })),
					(u = M(G, 'META', { property: !0, content: !0 })),
					(f = M(G, 'META', { property: !0, content: !0 })),
					(c = M(G, 'META', { property: !0, content: !0 })),
					(h = M(G, 'META', { property: !0, content: !0 })),
					(d = M(G, 'META', { property: !0, content: !0 })),
					($ = M(G, 'META', { property: !0, content: !0 })),
					(p = M(G, 'META', { property: !0, content: !0 })),
					(b = M(G, 'META', { property: !0, content: !0 })),
					(w = M(G, 'META', { property: !0, content: !0 })),
					(y = M(G, 'META', { property: !0, content: !0 })),
					(I = M(G, 'META', { property: !0, content: !0 })),
					(Q = M(G, 'META', { property: !0, content: !0 })),
					(P = M(G, 'META', { property: !0, content: !0 })),
					(V = M(G, 'META', { property: !0, content: !0 })),
					B && B.l(G),
					(z = le()),
					G.forEach(_),
					(ee = L(H)),
					T.l(H),
					(W = le()),
					this.h();
			},
			h() {
				(document.title = 'Typyst'),
					N(e, 'name', 'description'),
					N(
						e,
						'content',
						"Typyst is a new local-first & privacy-focused home for your markdown notes. It's a minimalistic, lightweight and fast note-taking app that's designed to be distraction-free."
					),
					N(n, 'name', 'keywords'),
					N(
						n,
						'content',
						'Typyst, Note-taking, Markdown, Local-first, Privacy-focused, Open-source, Online Markdown Editor, Fast Note-taking, Minimalistic Design'
					),
					N(t, 'name', 'author'),
					N(t, 'content', 'Typyst'),
					N(l, 'name', 'robots'),
					N(l, 'content', 'index, follow'),
					N(r, 'name', 'viewport'),
					N(r, 'content', 'width=device-width, initial-scale=1'),
					N(o, 'name', 'theme-color'),
					N(o, 'content', '#0F0F0F'),
					N(a, 'name', 'apple-mobile-web-app-status-bar-style'),
					N(a, 'content', 'black-translucent'),
					N(i, 'property', 'og:site_name'),
					N(i, 'content', 'Typyst'),
					N(u, 'property', 'og:locale'),
					N(u, 'content', 'en'),
					N(f, 'property', 'og:type'),
					N(f, 'content', 'website'),
					N(c, 'property', 'og:url'),
					N(c, 'content', 'https://typyst.md/'),
					N(h, 'property', 'og:title'),
					N(h, 'content', 'Typyst - Write Notes at the speed of touch'),
					N(d, 'property', 'og:description'),
					N(
						d,
						'content',
						"Typyst is a new local-first & privacy-focused home for your markdown notes. It's a minimalistic, lightweight and fast note-taking app that's designed to be distraction-free."
					),
					N($, 'property', 'og:image'),
					N($, 'content', 'https://typyst.md/landing.png'),
					N(p, 'property', 'og:image:alt'),
					N(p, 'content', 'Typyst - Markdown Editor'),
					N(b, 'property', 'og:image:width'),
					N(b, 'content', '1200'),
					N(w, 'property', 'og:image:height'),
					N(w, 'content', '627'),
					N(y, 'property', 'twitter:card'),
					N(y, 'content', 'summary_large_image'),
					N(I, 'property', 'twitter:url'),
					N(I, 'content', 'https://typyst.md/'),
					N(Q, 'property', 'twitter:title'),
					N(Q, 'content', 'Typyst - Write Notes at the speed of touch'),
					N(P, 'property', 'twitter:description'),
					N(
						P,
						'content',
						"Typyst is a new local-first & privacy-focused home for your markdown notes. It's a minimalistic, lightweight and fast note-taking app that's designed to be distraction-free."
					),
					N(V, 'property', 'twitter:image'),
					N(V, 'content', 'https://typyst.md/landing.png');
			},
			m(H, G) {
				O(document.head, e),
					O(document.head, n),
					O(document.head, t),
					O(document.head, l),
					O(document.head, r),
					O(document.head, o),
					O(document.head, a),
					O(document.head, i),
					O(document.head, u),
					O(document.head, f),
					O(document.head, c),
					O(document.head, h),
					O(document.head, d),
					O(document.head, $),
					O(document.head, p),
					O(document.head, b),
					O(document.head, w),
					O(document.head, y),
					O(document.head, I),
					O(document.head, Q),
					O(document.head, P),
					O(document.head, V),
					B && B.m(document.head, null),
					O(document.head, z),
					v(H, ee, G),
					te[se].m(H, G),
					v(H, W, G),
					(U = !0);
			},
			p(H, [G]) {
				let Te = se;
				(se = F(H)),
					se === Te
						? te[se].p(H, G)
						: (Ee(),
							g(te[Te], 1, 1, () => {
								te[Te] = null;
							}),
							Se(),
							(T = te[se]),
							T ? T.p(H, G) : ((T = te[se] = j[se](H)), T.c()),
							m(T, 1),
							T.m(W.parentNode, W));
			},
			i(H) {
				U || (m(T), (U = !0));
			},
			o(H) {
				g(T), (U = !1);
			},
			d(H) {
				H && (_(ee), _(W)),
					_(e),
					_(n),
					_(t),
					_(l),
					_(r),
					_(o),
					_(a),
					_(i),
					_(u),
					_(f),
					_(c),
					_(h),
					_(d),
					_($),
					_(p),
					_(b),
					_(w),
					_(y),
					_(I),
					_(Q),
					_(P),
					_(V),
					B && B.d(H),
					_(z),
					te[se].d(H);
			}
		}
	);
}
async function Nb() {}
function Db(s, e, n) {
	let t, l, r;
	Ae(s, ja, (c) => n(2, (r = c)));
	let { $$slots: o = {}, $$scope: a } = e,
		{ data: i } = e;
	const u = na();
	Ae(s, u, (c) => n(1, (l = c)));
	async function f() {
		const c = await Wn.select().from(ps);
		if (!c || c.length === 0) return;
		const h = c.reduce((d, $) => (d.lastOpened > $.lastOpened ? d : $));
		Jt.set(h.path);
	}
	return (
		wn(async () => {
			i.session && i.user
				? console.log('Auth data from server:', { session: i.session, user: i.user })
				: await qa.refreshSession(),
				await Nb(),
				console.log(await Wn.select().from(ps)),
				await f(),
				Ha();
		}),
		(s.$$set = (c) => {
			'data' in c && n(4, (i = c.data)), '$$scope' in c && n(6, (a = c.$$scope));
		}),
		n(0, (t = { baseUrl: '/api/rpc' })),
		[t, l, r, u, i, o, a]
	);
}
class uv extends pe {
	constructor(e) {
		super(), $e(this, e, Db, Pb, me, { data: 4 });
	}
}
export { uv as component };
