import {
	M as et,
	l as p,
	ab as dt,
	aa as fn,
	s as _e,
	E as x,
	F as $,
	G as ee,
	H as te,
	k as Xe,
	d as z,
	i as fe,
	L as Ie,
	z as re,
	x as U,
	A as Ue,
	P as we,
	r as je,
	ae as zt,
	K as Le,
	q as J,
	c as De,
	e as Fe,
	h as Ne,
	Z as Rt,
	y as se,
	n as Ht,
	w as Sn,
	B as Be
} from './wdwkOUVI.js';
import {
	S as ye,
	i as Ce,
	t as R,
	a as w,
	g as mt,
	e as gt,
	f as Yt,
	h as dn,
	j as mn,
	d as _t,
	m as ht,
	c as bt,
	b as pt
} from './JshcQj11.js';
import {
	h as gn,
	i as Ae,
	j as y,
	n as Mt,
	k as ke,
	b as O,
	F as St,
	l as ue,
	s as Qe,
	S as Dt,
	m as Me,
	o as qt,
	p as We,
	q as Ge,
	d as It,
	r as Dn,
	g as he,
	c as Ve,
	a as wt,
	f as Fn
} from './SV1JYOhp.js';
import { w as Q, d as nt } from './YlZQZqOj.js';
import {
	P as ct,
	a3 as Gt,
	M as ce,
	a4 as _n,
	W as hn,
	V as ft,
	Q as bn,
	N as Nn,
	X as pn,
	Y as vn,
	a5 as kn,
	O as Vt,
	Z as Kn
} from './DZQ4DMzf.js';
import {
	c as Bn,
	d as Ft,
	u as Nt,
	h as le,
	a as Rn,
	r as qe,
	b as wn,
	s as it,
	g as yn,
	e as Cn,
	i as Vn,
	j as Un
} from './DCdvB3a6.js';
const Ln = { ltr: [...Dt, ue.ARROW_RIGHT] },
	Wn = { ltr: [ue.ARROW_LEFT] },
	Zt = ['menu', 'trigger'],
	Xn = {
		arrowSize: 8,
		positioning: { placement: 'bottom' },
		preventScroll: !0,
		closeOnEscape: !0,
		closeOnOutsideClick: !0,
		portal: 'body',
		loop: !1,
		dir: 'ltr',
		defaultOpen: !1,
		typeahead: !0,
		closeOnItemClick: !0,
		onOutsideClick: void 0
	};
function jn(t) {
	const { name: e, selector: n } = hn(t.selector),
		{
			preventScroll: i,
			arrowSize: r,
			positioning: s,
			closeOnEscape: o,
			closeOnOutsideClick: c,
			portal: l,
			forceVisible: u,
			typeahead: a,
			loop: d,
			closeFocus: A,
			disableFocusFirstItem: E,
			closeOnItemClick: W,
			onOutsideClick: K
		} = t.rootOptions,
		b = t.rootOpen,
		H = t.rootActiveTrigger,
		C = t.nextFocusable,
		X = t.prevFocusable,
		ne = Q(!1),
		be = Q(0),
		v = Q(null),
		Ee = Q('right'),
		pe = Q(null),
		ie = gn(
			[Ee, v],
			([f, g]) =>
				(m) =>
					f === (g == null ? void 0 : g.side) && zn(m, g == null ? void 0 : g.area)
		),
		{ typed: de, handleTypeaheadSearch: Ke } = Bn(),
		me = ct({ ...Gt(Zt), ...t.ids }),
		ze = Ft({ open: b, forceVisible: u, activeTrigger: H }),
		Je = ce(e(), {
			stores: [ze, l, me.menu, me.trigger],
			returned: ([f, g, m, h]) => ({
				role: 'menu',
				hidden: f ? void 0 : !0,
				style: Qe({ display: f ? void 0 : 'none' }),
				id: m,
				'aria-labelledby': h,
				'data-state': f ? 'open' : 'closed',
				'data-portal': g ? '' : void 0,
				tabindex: -1
			}),
			action: (f) => {
				let g = Mt;
				const m = Ae([ze, H, s, c, l, o], ([M, j, ae, L, I, F]) => {
						g(),
							!(!M || !j) &&
								et().then(() => {
									Ze(f, n);
									const T = Nt(f, {
										anchorElement: j,
										open: b,
										options: {
											floating: ae,
											clickOutside: L
												? {
														handler: (P) => {
															var ve;
															(ve = p(K)) == null || ve(P),
																!P.defaultPrevented &&
																	y(j) &&
																	!j.contains(P.target) &&
																	(b.set(!1), j.focus());
														}
													}
												: null,
											portal: _n(f, I),
											escapeKeydown: F ? void 0 : null
										}
									});
									T && T.destroy && (g = T.destroy);
								});
					}),
					h = ke(
						O(f, 'keydown', (M) => {
							const j = M.target,
								ae = M.currentTarget;
							if (!y(j) || !y(ae) || !(j.closest('[role="menu"]') === ae)) return;
							if ((St.includes(M.key) && Bt(M, p(d) ?? !1), M.key === ue.TAB)) {
								M.preventDefault(), b.set(!1), Kt(M, C, X);
								return;
							}
							const I = M.key.length === 1;
							!(M.ctrlKey || M.altKey || M.metaKey) && I && p(a) === !0 && Ke(M.key, Re(ae));
						})
					);
				return {
					destroy() {
						m(), h(), g();
					}
				};
			}
		}),
		N = ce(e('trigger'), {
			stores: [b, me.menu, me.trigger],
			returned: ([f, g, m]) => ({
				'aria-controls': g,
				'aria-expanded': f,
				'data-state': f ? 'open' : 'closed',
				id: m,
				tabindex: 0
			}),
			action: (f) => (
				tt(f),
				H.update((m) => m || f),
				{
					destroy: ke(
						O(f, 'click', (m) => {
							const h = p(b),
								M = m.currentTarget;
							y(M) && (He(M), h || m.preventDefault());
						}),
						O(f, 'keydown', (m) => {
							const h = m.currentTarget;
							if (!y(h) || !(Dt.includes(m.key) || m.key === ue.ARROW_DOWN)) return;
							m.preventDefault(), He(h);
							const M = h.getAttribute('aria-controls');
							if (!M) return;
							const j = document.getElementById(M);
							if (!j) return;
							const ae = Re(j);
							ae.length && le(ae[0]);
						})
					)
				}
			)
		}),
		G = ce(e('arrow'), {
			stores: r,
			returned: (f) => ({
				'data-arrow': !0,
				style: Qe({
					position: 'absolute',
					width: `var(--arrow-size, ${f}px)`,
					height: `var(--arrow-size, ${f}px)`
				})
			})
		}),
		Te = ce(e('item'), {
			returned: () => ({ role: 'menuitem', tabindex: -1, 'data-orientation': 'vertical' }),
			action: (f) => (
				Ze(f, n),
				tt(f),
				{
					destroy: ke(
						O(f, 'pointerdown', (m) => {
							const h = m.currentTarget;
							if (y(h) && Me(h)) {
								m.preventDefault();
								return;
							}
						}),
						O(f, 'click', (m) => {
							const h = m.currentTarget;
							if (y(h)) {
								if (Me(h)) {
									m.preventDefault();
									return;
								}
								if (m.defaultPrevented) {
									le(h);
									return;
								}
								p(W) &&
									it(1).then(() => {
										b.set(!1);
									});
							}
						}),
						O(f, 'keydown', (m) => {
							Tt(m);
						}),
						O(f, 'pointermove', (m) => {
							Ct(m);
						}),
						O(f, 'pointerleave', (m) => {
							Et(m);
						}),
						O(f, 'focusin', (m) => {
							lt(m);
						}),
						O(f, 'focusout', (m) => {
							kt(m);
						})
					)
				}
			)
		}),
		ge = ce(e('group'), { returned: () => (f) => ({ role: 'group', 'aria-labelledby': f }) }),
		D = ce(e('group-label'), { returned: () => (f) => ({ id: f }) }),
		Pe = { defaultChecked: !1, disabled: !1 },
		_ = (f) => {
			const g = { ...Pe, ...f },
				m = g.checked ?? Q(g.defaultChecked ?? null),
				h = ft(m, g.onCheckedChange),
				M = Q(g.disabled),
				j = ce(e('checkbox-item'), {
					stores: [h, M],
					returned: ([I, F]) => ({
						role: 'menuitemcheckbox',
						tabindex: -1,
						'data-orientation': 'vertical',
						'aria-checked': Ot(I) ? 'mixed' : I ? 'true' : 'false',
						'data-disabled': It(F),
						'data-state': An(I)
					}),
					action: (I) => (
						Ze(I, n),
						tt(I),
						{
							destroy: ke(
								O(I, 'pointerdown', (T) => {
									const P = T.currentTarget;
									if (y(P) && Me(P)) {
										T.preventDefault();
										return;
									}
								}),
								O(I, 'click', (T) => {
									const P = T.currentTarget;
									if (y(P)) {
										if (Me(P)) {
											T.preventDefault();
											return;
										}
										if (T.defaultPrevented) {
											le(P);
											return;
										}
										h.update((ve) => (Ot(ve) ? !0 : !ve)),
											p(W) &&
												et().then(() => {
													b.set(!1);
												});
									}
								}),
								O(I, 'keydown', (T) => {
									Tt(T);
								}),
								O(I, 'pointermove', (T) => {
									const P = T.currentTarget;
									if (y(P)) {
										if (Me(P)) {
											yt(T);
											return;
										}
										Ct(T, P);
									}
								}),
								O(I, 'pointerleave', (T) => {
									Et(T);
								}),
								O(I, 'focusin', (T) => {
									lt(T);
								}),
								O(I, 'focusout', (T) => {
									kt(T);
								})
							)
						}
					)
				}),
				ae = nt(h, (I) => I === !0),
				L = nt(h, (I) => I === 'indeterminate');
			return {
				elements: { checkboxItem: j },
				states: { checked: h },
				helpers: { isChecked: ae, isIndeterminate: L },
				options: { disabled: M }
			};
		},
		rt = (f = {}) => {
			const g = f.value ?? Q(f.defaultValue ?? null),
				m = ft(g, f.onValueChange),
				h = ce(e('radio-group'), { returned: () => ({ role: 'group' }) }),
				M = { disabled: !1 },
				j = ce(e('radio-item'), {
					stores: [m],
					returned:
						([L]) =>
						(I) => {
							const { value: F, disabled: T } = { ...M, ...I },
								P = L === F;
							return {
								disabled: T,
								role: 'menuitemradio',
								'data-state': P ? 'checked' : 'unchecked',
								'aria-checked': P,
								'data-disabled': It(T),
								'data-value': F,
								'data-orientation': 'vertical',
								tabindex: -1
							};
						},
					action: (L) => (
						Ze(L, n),
						{
							destroy: ke(
								O(L, 'pointerdown', (F) => {
									const T = F.currentTarget;
									if (!y(T)) return;
									const P = L.dataset.value;
									if (L.dataset.disabled || P === void 0) {
										F.preventDefault();
										return;
									}
								}),
								O(L, 'click', (F) => {
									const T = F.currentTarget;
									if (!y(T)) return;
									const P = L.dataset.value;
									if (L.dataset.disabled || P === void 0) {
										F.preventDefault();
										return;
									}
									if (F.defaultPrevented) {
										if (!y(T)) return;
										le(T);
										return;
									}
									m.set(P),
										p(W) &&
											et().then(() => {
												b.set(!1);
											});
								}),
								O(L, 'keydown', (F) => {
									Tt(F);
								}),
								O(L, 'pointermove', (F) => {
									const T = F.currentTarget;
									if (!y(T)) return;
									const P = L.dataset.value;
									if (L.dataset.disabled || P === void 0) {
										yt(F);
										return;
									}
									Ct(F, T);
								}),
								O(L, 'pointerleave', (F) => {
									Et(F);
								}),
								O(L, 'focusin', (F) => {
									lt(F);
								}),
								O(L, 'focusout', (F) => {
									kt(F);
								})
							)
						}
					)
				}),
				ae = nt(m, (L) => (I) => L === I);
			return {
				elements: { radioGroup: h, radioItem: j },
				states: { value: m },
				helpers: { isChecked: ae }
			};
		},
		{
			elements: { root: xe }
		} = Rn({ orientation: 'horizontal' }),
		st = { ...Xn, disabled: !1, positioning: { placement: 'right-start', gutter: 8 } },
		ot = (f) => {
			const g = { ...st, ...f },
				m = g.open ?? Q(!1),
				h = ft(m, g == null ? void 0 : g.onOpenChange),
				M = ct(bn(g, 'ids')),
				{ positioning: j, arrowSize: ae, disabled: L } = M,
				I = Q(null),
				F = Q(null),
				T = Q(0),
				P = ct({ ...Gt(Zt), ...g.ids });
			qt(() => {
				const S = document.getElementById(p(P.trigger));
				S && I.set(S);
			});
			const ve = Ft({ open: h, forceVisible: u, activeTrigger: I }),
				In = ce(e('submenu'), {
					stores: [ve, P.menu, P.trigger],
					returned: ([S, oe, Z]) => ({
						role: 'menu',
						hidden: S ? void 0 : !0,
						style: Qe({ display: S ? void 0 : 'none' }),
						id: oe,
						'aria-labelledby': Z,
						'data-state': S ? 'open' : 'closed',
						'data-id': oe,
						tabindex: -1
					}),
					action: (S) => {
						let oe = Mt;
						const Z = Ae([ve, j], ([k, V]) => {
								if ((oe(), !k)) return;
								const Y = p(I);
								Y &&
									et().then(() => {
										const q = Xt(Y),
											Oe = Nt(S, {
												anchorElement: Y,
												open: h,
												options: {
													floating: V,
													portal: y(q) ? q : void 0,
													clickOutside: null,
													focusTrap: null,
													escapeKeydown: null
												}
											});
										Oe && Oe.destroy && (oe = Oe.destroy);
									});
							}),
							B = ke(
								O(S, 'keydown', (k) => {
									if (k.key === ue.ESCAPE) return;
									const V = k.target,
										Y = k.currentTarget;
									if (!y(V) || !y(Y) || !(V.closest('[role="menu"]') === Y)) return;
									if (St.includes(k.key)) {
										k.stopImmediatePropagation(), Bt(k, p(d) ?? !1);
										return;
									}
									const Oe = Wn.ltr.includes(k.key),
										Ye = k.ctrlKey || k.altKey || k.metaKey,
										ut = k.key.length === 1;
									if (Oe) {
										const jt = p(I);
										k.preventDefault(), h.update(() => (jt && le(jt), !1));
										return;
									}
									if (k.key === ue.TAB) {
										k.preventDefault(), b.set(!1), Kt(k, C, X);
										return;
									}
									!Ye && ut && p(a) === !0 && Ke(k.key, Re(Y));
								}),
								O(S, 'pointermove', (k) => {
									On(k);
								}),
								O(S, 'focusout', (k) => {
									const V = p(I);
									if (p(ne)) {
										const Y = k.target,
											q = document.getElementById(p(P.menu));
										if (!y(q) || !y(Y)) return;
										!q.contains(Y) && Y !== V && h.set(!1);
									} else {
										const Y = k.currentTarget,
											q = k.relatedTarget;
										if (!y(q) || !y(Y)) return;
										!Y.contains(q) && q !== V && h.set(!1);
									}
								})
							);
						return {
							destroy() {
								Z(), oe(), B();
							}
						};
					}
				}),
				Pn = ce(e('subtrigger'), {
					stores: [h, L, P.menu, P.trigger],
					returned: ([S, oe, Z, B]) => ({
						role: 'menuitem',
						id: B,
						tabindex: -1,
						'aria-controls': Z,
						'aria-expanded': S,
						'data-state': S ? 'open' : 'closed',
						'data-disabled': It(oe),
						'aria-haspopop': 'menu'
					}),
					action: (S) => {
						Ze(S, n), tt(S), I.update((B) => B || S);
						const oe = () => {
								Se(F), window.clearTimeout(p(T)), v.set(null);
							},
							Z = ke(
								O(S, 'click', (B) => {
									if (B.defaultPrevented) return;
									const k = B.currentTarget;
									!y(k) || Me(k) || (le(k), p(h) || h.update((V) => V || (I.set(k), !V)));
								}),
								O(S, 'keydown', (B) => {
									const k = p(de),
										V = B.currentTarget;
									if (
										!(!y(V) || Me(V) || (k.length > 0 && B.key === ue.SPACE)) &&
										Ln.ltr.includes(B.key)
									) {
										if (!p(h)) {
											V.click(), B.preventDefault();
											return;
										}
										const q = V.getAttribute('aria-controls');
										if (!q) return;
										const Oe = document.getElementById(q);
										if (!y(Oe)) return;
										const Ye = Re(Oe)[0];
										le(Ye);
									}
								}),
								O(S, 'pointermove', (B) => {
									if (!$e(B) || (Wt(B), B.defaultPrevented)) return;
									const k = B.currentTarget;
									if (!y(k)) return;
									Yn(p(P.menu)) || le(k);
									const V = p(F);
									!p(h) &&
										!V &&
										!Me(k) &&
										F.set(
											window.setTimeout(() => {
												h.update(() => (I.set(k), !0)), Se(F);
											}, 100)
										);
								}),
								O(S, 'pointerleave', (B) => {
									if (!$e(B)) return;
									Se(F);
									const k = document.getElementById(p(P.menu)),
										V = k == null ? void 0 : k.getBoundingClientRect();
									if (V) {
										const Y = k == null ? void 0 : k.dataset.side,
											q = Y === 'right',
											Oe = q ? -5 : 5,
											Ye = V[q ? 'left' : 'right'],
											ut = V[q ? 'right' : 'left'];
										v.set({
											area: [
												{ x: B.clientX + Oe, y: B.clientY },
												{ x: Ye, y: V.top },
												{ x: ut, y: V.top },
												{ x: ut, y: V.bottom },
												{ x: Ye, y: V.bottom }
											],
											side: Y
										}),
											window.clearTimeout(p(T)),
											T.set(
												window.setTimeout(() => {
													v.set(null);
												}, 300)
											);
									} else {
										if ((Tn(B), B.defaultPrevented)) return;
										v.set(null);
									}
								}),
								O(S, 'focusout', (B) => {
									const k = B.currentTarget;
									if (!y(k)) return;
									qe(k);
									const V = B.relatedTarget;
									if (!y(V)) return;
									const Y = k.getAttribute('aria-controls');
									if (!Y) return;
									const q = document.getElementById(Y);
									q && !q.contains(V) && h.set(!1);
								}),
								O(S, 'focusin', (B) => {
									lt(B);
								})
							);
						return {
							destroy() {
								oe(), Z();
							}
						};
					}
				}),
				Mn = ce(e('subarrow'), {
					stores: ae,
					returned: (S) => ({
						'data-arrow': !0,
						style: Qe({
							position: 'absolute',
							width: `var(--arrow-size, ${S}px)`,
							height: `var(--arrow-size, ${S}px)`
						})
					})
				});
			return (
				Ae([b], ([S]) => {
					S || (I.set(null), h.set(!1));
				}),
				Ae([v], ([S]) => {
					!Ge || S || window.clearTimeout(p(T));
				}),
				Ae([h], ([S]) => {
					Ge &&
						it(1).then(() => {
							const oe = document.getElementById(p(P.menu));
							if (oe) {
								if (S && p(ne)) {
									const Z = Re(oe);
									if (!Z.length) return;
									le(Z[0]);
								}
								if (!S) {
									const Z = p(pe);
									Z && oe.contains(Z) && qe(Z);
								}
								if (oe && !S) {
									const Z = document.getElementById(p(P.trigger));
									if (!Z || document.activeElement === Z) return;
									qe(Z);
								}
							}
						});
				}),
				{
					ids: P,
					elements: { subTrigger: Pn, subMenu: In, subArrow: Mn },
					states: { subOpen: h },
					options: M
				}
			);
		};
	qt(() => {
		const f = document.getElementById(p(me.trigger));
		y(f) && p(b) && H.set(f);
		const g = [],
			m = () => ne.set(!1),
			h = () => {
				ne.set(!0),
					g.push(
						ke(
							We(document, 'pointerdown', m, { capture: !0, once: !0 }),
							We(document, 'pointermove', m, { capture: !0, once: !0 })
						)
					);
			},
			M = (j) => {
				if (j.key === ue.ESCAPE && p(o)) {
					b.set(!1);
					return;
				}
			};
		return (
			g.push(We(document, 'keydown', h, { capture: !0 })),
			g.push(We(document, 'keydown', M)),
			() => {
				g.forEach((j) => j());
			}
		);
	}),
		Ae([b, pe], ([f, g]) => {
			!f && g && qe(g);
		}),
		Ae([b], ([f]) => {
			if (Ge && !f) {
				const g = p(H);
				if (!g) return;
				const m = p(A);
				!f && g && Un({ prop: m, defaultEl: g });
			}
		}),
		Ae([b, i], ([f, g]) => {
			if (!Ge) return;
			const m = [];
			return (
				f && g && m.push(wn()),
				it(1).then(() => {
					const h = document.getElementById(p(me.menu));
					if (h && f && p(ne)) {
						if (p(E)) {
							le(h);
							return;
						}
						const M = Re(h);
						if (!M.length) return;
						le(M[0]);
					}
				}),
				() => {
					m.forEach((h) => h());
				}
			);
		}),
		Ae(b, (f) => {
			if (!Ge) return;
			const g = () => ne.set(!1),
				m = (h) => {
					if ((ne.set(!0), h.key === ue.ESCAPE && f && p(o))) {
						b.set(!1);
						return;
					}
				};
			return ke(
				We(document, 'pointerdown', g, { capture: !0, once: !0 }),
				We(document, 'pointermove', g, { capture: !0, once: !0 }),
				We(document, 'keydown', m, { capture: !0 })
			);
		});
	function He(f) {
		b.update((g) => {
			const m = !g;
			return m && (C.set(yn(f)), X.set(Cn(f)), H.set(f)), m;
		});
	}
	function lt(f) {
		const g = f.currentTarget;
		if (!y(g)) return;
		const m = p(pe);
		m && qe(m), Vn(g), pe.set(g);
	}
	function kt(f) {
		const g = f.currentTarget;
		y(g) && qe(g);
	}
	function Wt(f) {
		At(f) && f.preventDefault();
	}
	function yt(f) {
		if (At(f)) return;
		const g = f.target;
		if (!y(g)) return;
		const m = Xt(g);
		m && le(m);
	}
	function Tn(f) {
		At(f) && f.preventDefault();
	}
	function On(f) {
		if (!$e(f)) return;
		const g = f.target,
			m = f.currentTarget;
		if (!y(m) || !y(g)) return;
		const h = p(be),
			M = h !== f.clientX;
		if (m.contains(g) && M) {
			const j = f.clientX > h ? 'right' : 'left';
			Ee.set(j), be.set(f.clientX);
		}
	}
	function Ct(f, g = null) {
		if (!$e(f) || (Wt(f), f.defaultPrevented)) return;
		if (g) {
			le(g);
			return;
		}
		const m = f.currentTarget;
		y(m) && le(m);
	}
	function Et(f) {
		$e(f) && yt(f);
	}
	function Tt(f) {
		if (p(de).length > 0 && f.key === ue.SPACE) {
			f.preventDefault();
			return;
		}
		if (Dt.includes(f.key)) {
			f.preventDefault();
			const h = f.currentTarget;
			if (!y(h)) return;
			h.click();
		}
	}
	function Ot(f) {
		return f === 'indeterminate';
	}
	function An(f) {
		return Ot(f) ? 'indeterminate' : f ? 'checked' : 'unchecked';
	}
	function At(f) {
		return p(ie)(f);
	}
	function Xt(f) {
		const g = f.closest('[role="menu"]');
		return y(g) ? g : null;
	}
	return {
		ids: me,
		trigger: N,
		menu: Je,
		open: b,
		item: Te,
		group: ge,
		groupLabel: D,
		arrow: G,
		options: t.rootOptions,
		createCheckboxItem: _,
		createSubmenu: ot,
		createMenuRadioGroup: rt,
		separator: xe,
		handleTypeaheadSearch: Ke
	};
}
function Kt(t, e, n) {
	if (t.shiftKey) {
		const i = p(n);
		i && (t.preventDefault(), it(1).then(() => i.focus()), n.set(null));
	} else {
		const i = p(e);
		i && (t.preventDefault(), it(1).then(() => i.focus()), e.set(null));
	}
}
function Re(t) {
	return Array.from(t.querySelectorAll(`[data-melt-menu-id="${t.id}"]`)).filter((e) => y(e));
}
function tt(t) {
	!t || !Me(t) || (t.setAttribute('data-disabled', ''), t.setAttribute('aria-disabled', 'true'));
}
function Se(t) {
	if (!Ge) return;
	const e = p(t);
	e && (window.clearTimeout(e), t.set(null));
}
function $e(t) {
	return t.pointerType === 'mouse';
}
function Ze(t, e) {
	if (!t) return;
	const n = t.closest(`${e()}, ${e('submenu')}`);
	y(n) && t.setAttribute('data-melt-menu-id', n.id);
}
function Bt(t, e) {
	t.preventDefault();
	const n = document.activeElement,
		i = t.currentTarget;
	if (!y(n) || !y(i)) return;
	const r = Re(i);
	if (!r.length) return;
	const s = r.filter(
			(l) => !(l.hasAttribute('data-disabled') || l.getAttribute('disabled') === 'true')
		),
		o = s.indexOf(n);
	let c;
	switch (t.key) {
		case ue.ARROW_DOWN:
			e ? (c = o < s.length - 1 ? o + 1 : 0) : (c = o < s.length - 1 ? o + 1 : o);
			break;
		case ue.ARROW_UP:
			e ? (c = o > 0 ? o - 1 : s.length - 1) : (c = o < 0 ? s.length - 1 : o > 0 ? o - 1 : 0);
			break;
		case ue.HOME:
			c = 0;
			break;
		case ue.END:
			c = s.length - 1;
			break;
		default:
			return;
	}
	le(s[c]);
}
function zn(t, e) {
	if (!e) return !1;
	const n = { x: t.clientX, y: t.clientY };
	return Hn(n, e);
}
function Hn(t, e) {
	const { x: n, y: i } = t;
	let r = !1;
	for (let s = 0, o = e.length - 1; s < e.length; o = s++) {
		const c = e[s].x,
			l = e[s].y,
			u = e[o].x,
			a = e[o].y;
		l > i != a > i && n < ((u - c) * (i - l)) / (a - l) + c && (r = !r);
	}
	return r;
}
function Yn(t) {
	const e = document.activeElement;
	if (!y(e)) return !1;
	const n = e.closest(`[data-id="${t}"]`);
	return y(n);
}
const qn = {
		arrowSize: 8,
		positioning: { placement: 'bottom-start' },
		preventScroll: !0,
		closeOnEscape: !0,
		closeOnOutsideClick: !0,
		portal: void 0,
		loop: !1,
		dir: 'ltr',
		defaultOpen: !1,
		forceVisible: !1,
		typeahead: !0,
		disableFocusFirstItem: !0,
		closeFocus: void 0,
		closeOnItemClick: !0,
		onOutsideClick: void 0
	},
	{ name: Qt, selector: Gn } = hn('context-menu');
function Zn(t) {
	const e = { ...qn, ...t },
		n = ct(bn(e, 'ids')),
		{
			positioning: i,
			closeOnOutsideClick: r,
			portal: s,
			forceVisible: o,
			closeOnEscape: c,
			loop: l
		} = n,
		u = e.open ?? Q(e.defaultOpen),
		a = ft(u, e == null ? void 0 : e.onOpenChange),
		d = Q(null),
		A = Q(null),
		E = Q(null),
		{
			item: W,
			createCheckboxItem: K,
			arrow: b,
			createSubmenu: H,
			createMenuRadioGroup: C,
			ids: X,
			separator: ne,
			handleTypeaheadSearch: be,
			group: v,
			groupLabel: Ee
		} = jn({
			rootOpen: a,
			rootActiveTrigger: d,
			rootOptions: n,
			nextFocusable: A,
			prevFocusable: E,
			selector: 'context-menu',
			ids: e.ids
		}),
		pe = Q(null),
		ie = gn([pe], ([N]) =>
			N === null
				? null
				: { getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...N }) }
		),
		de = Q(0);
	function Ke(N) {
		var ge;
		if (((ge = p(n.onOutsideClick)) == null || ge(N), N.defaultPrevented)) return;
		const G = N.target;
		if (!(G instanceof Element)) return;
		if (!(G.closest(`[data-id="${p(X.trigger)}"]`) !== null) || Dn(N)) {
			a.set(!1);
			return;
		}
	}
	const me = Ft({ open: a, forceVisible: o, activeTrigger: d }),
		ze = ce(Qt(), {
			stores: [me, s, X.menu, X.trigger],
			returned: ([N, G, Te, ge]) => ({
				role: 'menu',
				hidden: N ? void 0 : !0,
				style: Qe({ display: N ? void 0 : 'none' }),
				id: Te,
				'aria-labelledby': ge,
				'data-state': N ? 'open' : 'closed',
				'data-portal': G ? '' : void 0,
				tabindex: -1
			}),
			action: (N) => {
				let G = Mt;
				const Te = Ae([me, d, i, r, s, c], ([D, Pe, _, rt, xe, st]) => {
						G(),
							!(!D || !Pe) &&
								et().then(() => {
									Ze(N, Gn);
									const ot = p(ie),
										He = Nt(N, {
											anchorElement: ot || Pe,
											open: a,
											options: {
												floating: _,
												clickOutside: rt ? { handler: Ke } : null,
												portal: _n(N, xe),
												escapeKeydown: st ? void 0 : null
											}
										});
									!He || !He.destroy || (G = He.destroy);
								});
					}),
					ge = ke(
						O(N, 'keydown', (D) => {
							const Pe = D.target,
								_ = D.currentTarget;
							if (!y(Pe) || !y(_) || !(Pe.closest("[role='menu']") === _)) return;
							if ((St.includes(D.key) && Bt(D, p(l)), D.key === ue.TAB)) {
								D.preventDefault(), a.set(!1), Kt(D, A, E);
								return;
							}
							const xe = D.key.length === 1;
							!(D.ctrlKey || D.altKey || D.metaKey) && xe && be(D.key, Re(_));
						})
					);
				return {
					destroy() {
						Te(), ge(), G();
					}
				};
			}
		}),
		Je = ce(Qt('trigger'), {
			stores: [a, X.trigger],
			returned: ([N, G]) => ({
				'data-state': N ? 'open' : 'closed',
				id: G,
				style: Qe({ WebkitTouchCallout: 'none' }),
				'data-id': G
			}),
			action: (N) => {
				tt(N);
				const G = (D) => {
						pe.set({ x: D.clientX, y: D.clientY }), A.set(yn(N)), E.set(Cn(N)), d.set(N), a.set(!0);
					},
					Te = () => {
						Se(de);
					},
					ge = ke(
						O(N, 'contextmenu', (D) => {
							Se(de), G(D), D.preventDefault();
						}),
						O(N, 'pointerdown', (D) => {
							at(D) && (Se(de), de.set(window.setTimeout(() => G(D), 700)));
						}),
						O(N, 'pointermove', (D) => {
							at(D) && Se(de);
						}),
						O(N, 'pointercancel', (D) => {
							at(D) && Se(de);
						}),
						O(N, 'pointerup', (D) => {
							at(D) && Se(de);
						})
					);
				return {
					destroy() {
						Te(), ge();
					}
				};
			}
		});
	return {
		ids: X,
		elements: { menu: ze, trigger: Je, item: W, arrow: b, separator: ne, group: v, groupLabel: Ee },
		states: { open: a },
		builders: { createSubmenu: H, createCheckboxItem: K, createMenuRadioGroup: C },
		options: n
	};
}
function at(t) {
	return t.pointerType !== 'mouse';
}
function En() {
	return {
		NAME: 'menu',
		PARTS: [
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
		]
	};
}
function Qn(t) {
	const { NAME: e, PARTS: n } = En(),
		i = Nn('menu', n),
		r = { ...Zn(pn(t)), getAttrs: i };
	return fn(e, r), { ...r, updateOption: vn(r.options) };
}
function Ut() {
	const { NAME: t } = En();
	return dt(t);
}
function Jn(t) {
	const n = { ...{ side: 'bottom', align: 'start' }, ...t },
		{
			options: { positioning: i }
		} = Ut();
	kn(i)(n);
}
const xn = (t) => ({ ids: t & 1 }),
	Jt = (t) => ({ ids: t[0] });
function $n(t) {
	let e;
	const n = t[15].default,
		i = x(n, t, t[14], Jt);
	return {
		c() {
			i && i.c();
		},
		l(r) {
			i && i.l(r);
		},
		m(r, s) {
			i && i.m(r, s), (e = !0);
		},
		p(r, [s]) {
			i && i.p && (!e || s & 16385) && $(i, n, r, r[14], e ? te(n, r[14], s, xn) : ee(r[14]), Jt);
		},
		i(r) {
			e || (w(i, r), (e = !0));
		},
		o(r) {
			R(i, r), (e = !1);
		},
		d(r) {
			i && i.d(r);
		}
	};
}
function ei(t, e, n) {
	let i,
		{ $$slots: r = {}, $$scope: s } = e,
		{ closeOnOutsideClick: o = void 0 } = e,
		{ closeOnEscape: c = void 0 } = e,
		{ portal: l = void 0 } = e,
		{ open: u = void 0 } = e,
		{ onOpenChange: a = void 0 } = e,
		{ preventScroll: d = void 0 } = e,
		{ loop: A = void 0 } = e,
		{ dir: E = void 0 } = e,
		{ typeahead: W = void 0 } = e,
		{ closeFocus: K = void 0 } = e,
		{ disableFocusFirstItem: b = void 0 } = e,
		{ onOutsideClick: H = void 0 } = e;
	const {
			states: { open: C },
			updateOption: X,
			ids: ne
		} = Qn({
			closeOnOutsideClick: o,
			closeOnEscape: c,
			portal: l,
			forceVisible: !0,
			defaultOpen: u,
			preventScroll: d,
			loop: A,
			dir: E,
			typeahead: W,
			disableFocusFirstItem: b,
			closeFocus: K,
			onOutsideClick: H,
			onOpenChange: ({ next: v }) => (u !== v && (a == null || a(v), n(2, (u = v))), v)
		}),
		be = nt([ne.menu, ne.trigger], ([v, Ee]) => ({ menu: v, trigger: Ee }));
	return (
		Xe(t, be, (v) => n(0, (i = v))),
		(t.$$set = (v) => {
			'closeOnOutsideClick' in v && n(3, (o = v.closeOnOutsideClick)),
				'closeOnEscape' in v && n(4, (c = v.closeOnEscape)),
				'portal' in v && n(5, (l = v.portal)),
				'open' in v && n(2, (u = v.open)),
				'onOpenChange' in v && n(6, (a = v.onOpenChange)),
				'preventScroll' in v && n(7, (d = v.preventScroll)),
				'loop' in v && n(8, (A = v.loop)),
				'dir' in v && n(9, (E = v.dir)),
				'typeahead' in v && n(10, (W = v.typeahead)),
				'closeFocus' in v && n(11, (K = v.closeFocus)),
				'disableFocusFirstItem' in v && n(12, (b = v.disableFocusFirstItem)),
				'onOutsideClick' in v && n(13, (H = v.onOutsideClick)),
				'$$scope' in v && n(14, (s = v.$$scope));
		}),
		(t.$$.update = () => {
			t.$$.dirty & 4 && u !== void 0 && C.set(u),
				t.$$.dirty & 8 && X('closeOnOutsideClick', o),
				t.$$.dirty & 16 && X('closeOnEscape', c),
				t.$$.dirty & 32 && X('portal', l),
				t.$$.dirty & 128 && X('preventScroll', d),
				t.$$.dirty & 256 && X('loop', A),
				t.$$.dirty & 512 && X('dir', E),
				t.$$.dirty & 2048 && X('closeFocus', K),
				t.$$.dirty & 4096 && X('disableFocusFirstItem', b),
				t.$$.dirty & 1024 && X('typeahead', W),
				t.$$.dirty & 8192 && X('onOutsideClick', H);
		}),
		[i, be, u, o, c, l, a, d, A, E, W, K, b, H, s, r]
	);
}
class ti extends ye {
	constructor(e) {
		super(),
			Ce(this, e, ei, $n, _e, {
				closeOnOutsideClick: 3,
				closeOnEscape: 4,
				portal: 5,
				open: 2,
				onOpenChange: 6,
				preventScroll: 7,
				loop: 8,
				dir: 9,
				typeahead: 10,
				closeFocus: 11,
				disableFocusFirstItem: 12,
				onOutsideClick: 13
			});
	}
}
function vt() {
	return {
		NAME: 'menu',
		SUB_NAME: 'menu-submenu',
		RADIO_GROUP_NAME: 'menu-radiogroup',
		CHECKBOX_ITEM_NAME: 'menu-checkboxitem',
		RADIO_ITEM_NAME: 'menu-radioitem',
		GROUP_NAME: 'menu-group',
		PARTS: [
			'arrow',
			'checkbox-indicator',
			'checkbox-item',
			'content',
			'group',
			'item',
			'label',
			'radio-group',
			'radio-item',
			'radio-indicator',
			'separator',
			'sub-content',
			'sub-trigger',
			'trigger'
		]
	};
}
function Lt() {
	const { NAME: t } = vt();
	return dt(t);
}
function ni(t) {
	const { SUB_NAME: e } = vt(),
		{
			builders: { createSubmenu: n },
			getAttrs: i
		} = Lt(),
		r = { ...n(pn(t)), getAttrs: i };
	return fn(e, r), { ...r, updateOption: vn(r.options) };
}
function ar() {
	const { SUB_NAME: t } = vt();
	return dt(t);
}
function ii() {
	const { SUB_NAME: t } = vt();
	return dt(t);
}
function cr(t) {
	const n = { ...{ side: 'right', align: 'start' }, ...t },
		{
			options: { positioning: i }
		} = ii();
	kn(i)(n);
}
const ri = (t) => ({ subIds: t & 1 }),
	xt = (t) => ({ subIds: t[0] });
function si(t) {
	let e;
	const n = t[6].default,
		i = x(n, t, t[5], xt);
	return {
		c() {
			i && i.c();
		},
		l(r) {
			i && i.l(r);
		},
		m(r, s) {
			i && i.m(r, s), (e = !0);
		},
		p(r, [s]) {
			i && i.p && (!e || s & 33) && $(i, n, r, r[5], e ? te(n, r[5], s, ri) : ee(r[5]), xt);
		},
		i(r) {
			e || (w(i, r), (e = !0));
		},
		o(r) {
			R(i, r), (e = !1);
		},
		d(r) {
			i && i.d(r);
		}
	};
}
function oi(t, e, n) {
	let i,
		{ $$slots: r = {}, $$scope: s } = e,
		{ disabled: o = void 0 } = e,
		{ open: c = void 0 } = e,
		{ onOpenChange: l = void 0 } = e;
	const {
			updateOption: u,
			ids: a,
			states: { subOpen: d }
		} = ni({
			disabled: o,
			onOpenChange: ({ next: E }) => (c !== E && (l == null || l(E), n(2, (c = E))), E)
		}),
		A = nt([a.menu, a.trigger], ([E, W]) => ({ menu: E, trigger: W }));
	return (
		Xe(t, A, (E) => n(0, (i = E))),
		(t.$$set = (E) => {
			'disabled' in E && n(3, (o = E.disabled)),
				'open' in E && n(2, (c = E.open)),
				'onOpenChange' in E && n(4, (l = E.onOpenChange)),
				'$$scope' in E && n(5, (s = E.$$scope));
		}),
		(t.$$.update = () => {
			t.$$.dirty & 4 && c !== void 0 && d.set(c), t.$$.dirty & 8 && u('disabled', o);
		}),
		[i, A, c, o, l, s, r]
	);
}
class li extends ye {
	constructor(e) {
		super(), Ce(this, e, oi, si, _e, { disabled: 3, open: 2, onOpenChange: 4 });
	}
}
const ui = (t) => ({ builder: t & 8 }),
	$t = (t) => ({ builder: t[3] }),
	ai = (t) => ({ builder: t & 8 }),
	en = (t) => ({ builder: t[3] });
function ci(t) {
	let e = t[1] ? 'a' : 'div',
		n,
		i,
		r = (t[1] ? 'a' : 'div') && Pt(t);
	return {
		c() {
			r && r.c(), (n = Ie());
		},
		l(s) {
			r && r.l(s), (n = Ie());
		},
		m(s, o) {
			r && r.m(s, o), fe(s, n, o), (i = !0);
		},
		p(s, o) {
			s[1],
				e
					? _e(e, s[1] ? 'a' : 'div')
						? (r.d(1), (r = Pt(s)), (e = s[1] ? 'a' : 'div'), r.c(), r.m(n.parentNode, n))
						: r.p(s, o)
					: ((r = Pt(s)), (e = s[1] ? 'a' : 'div'), r.c(), r.m(n.parentNode, n));
		},
		i(s) {
			i || (w(r, s), (i = !0));
		},
		o(s) {
			R(r, s), (i = !1);
		},
		d(s) {
			s && z(n), r && r.d(s);
		}
	};
}
function fi(t) {
	let e;
	const n = t[11].default,
		i = x(n, t, t[10], en);
	return {
		c() {
			i && i.c();
		},
		l(r) {
			i && i.l(r);
		},
		m(r, s) {
			i && i.m(r, s), (e = !0);
		},
		p(r, s) {
			i && i.p && (!e || s & 1032) && $(i, n, r, r[10], e ? te(n, r[10], s, ai) : ee(r[10]), en);
		},
		i(r) {
			e || (w(i, r), (e = !0));
		},
		o(r) {
			R(i, r), (e = !1);
		},
		d(r) {
			i && i.d(r);
		}
	};
}
function Pt(t) {
	let e, n, i, r;
	const s = t[11].default,
		o = x(s, t, t[10], $t);
	let c = [{ href: t[1] }, t[3], t[6]],
		l = {};
	for (let u = 0; u < c.length; u += 1) l = U(l, c[u]);
	return {
		c() {
			(e = Ne(t[1] ? 'a' : 'div')), o && o.c(), this.h();
		},
		l(u) {
			e = De(u, ((t[1] ? 'a' : 'div') || 'null').toUpperCase(), { href: !0 });
			var a = Fe(e);
			o && o.l(a), a.forEach(z), this.h();
		},
		h() {
			zt(t[1] ? 'a' : 'div')(e, l);
		},
		m(u, a) {
			fe(u, e, a),
				o && o.m(e, null),
				t[12](e),
				(n = !0),
				i ||
					((r = [
						Le(t[3].action(e)),
						J(e, 'm-click', t[5]),
						J(e, 'm-focusin', t[5]),
						J(e, 'm-focusout', t[5]),
						J(e, 'm-keydown', t[5]),
						J(e, 'm-pointerdown', t[5]),
						J(e, 'm-pointerleave', t[5]),
						J(e, 'm-pointermove', t[5])
					]),
					(i = !0));
		},
		p(u, a) {
			o && o.p && (!n || a & 1032) && $(o, s, u, u[10], n ? te(s, u[10], a, ui) : ee(u[10]), $t),
				zt(u[1] ? 'a' : 'div')(
					e,
					(l = he(c, [(!n || a & 2) && { href: u[1] }, a & 8 && u[3], a & 64 && u[6]]))
				);
		},
		i(u) {
			n || (w(o, u), (n = !0));
		},
		o(u) {
			R(o, u), (n = !1);
		},
		d(u) {
			u && z(e), o && o.d(u), t[12](null), (i = !1), je(r);
		}
	};
}
function di(t) {
	let e, n, i, r;
	const s = [fi, ci],
		o = [];
	function c(l, u) {
		return l[2] ? 0 : 1;
	}
	return (
		(e = c(t)),
		(n = o[e] = s[e](t)),
		{
			c() {
				n.c(), (i = Ie());
			},
			l(l) {
				n.l(l), (i = Ie());
			},
			m(l, u) {
				o[e].m(l, u), fe(l, i, u), (r = !0);
			},
			p(l, [u]) {
				let a = e;
				(e = c(l)),
					e === a
						? o[e].p(l, u)
						: (mt(),
							R(o[a], 1, 1, () => {
								o[a] = null;
							}),
							gt(),
							(n = o[e]),
							n ? n.p(l, u) : ((n = o[e] = s[e](l)), n.c()),
							w(n, 1),
							n.m(i.parentNode, i));
			},
			i(l) {
				r || (w(n), (r = !0));
			},
			o(l) {
				R(n), (r = !1);
			},
			d(l) {
				l && z(i), o[e].d(l);
			}
		}
	);
}
function mi(t, e, n) {
	let i, r;
	const s = ['href', 'asChild', 'disabled', 'el'];
	let o = re(e, s),
		c,
		{ $$slots: l = {}, $$scope: u } = e,
		{ href: a = void 0 } = e,
		{ asChild: d = !1 } = e,
		{ disabled: A = !1 } = e,
		{ el: E = void 0 } = e;
	const {
		elements: { item: W },
		getAttrs: K
	} = Lt();
	Xe(t, W, (C) => n(9, (c = C)));
	const b = Vt();
	function H(C) {
		we[C ? 'unshift' : 'push'](() => {
			(E = C), n(0, E);
		});
	}
	return (
		(t.$$set = (C) => {
			(e = U(U({}, e), Ue(C))),
				n(6, (o = re(e, s))),
				'href' in C && n(1, (a = C.href)),
				'asChild' in C && n(2, (d = C.asChild)),
				'disabled' in C && n(7, (A = C.disabled)),
				'el' in C && n(0, (E = C.el)),
				'$$scope' in C && n(10, (u = C.$$scope));
		}),
		(t.$$.update = () => {
			t.$$.dirty & 512 && n(3, (i = c)),
				t.$$.dirty & 128 && n(8, (r = { ...K('item'), ...Kn(A) })),
				t.$$.dirty & 264 && Object.assign(i, r);
		}),
		[E, a, d, i, W, b, o, A, r, c, u, l, H]
	);
}
class gi extends ye {
	constructor(e) {
		super(), Ce(this, e, mi, di, _e, { href: 1, asChild: 2, disabled: 7, el: 0 });
	}
}
const _i = (t) => ({ builder: t[0] & 256 }),
	tn = (t) => ({ builder: t[8] }),
	hi = (t) => ({ builder: t[0] & 256 }),
	nn = (t) => ({ builder: t[8] }),
	bi = (t) => ({ builder: t[0] & 256 }),
	rn = (t) => ({ builder: t[8] }),
	pi = (t) => ({ builder: t[0] & 256 }),
	sn = (t) => ({ builder: t[8] }),
	vi = (t) => ({ builder: t[0] & 256 }),
	on = (t) => ({ builder: t[8] }),
	ki = (t) => ({ builder: t[0] & 256 }),
	ln = (t) => ({ builder: t[8] });
function yi(t) {
	let e, n, i, r;
	const s = t[24].default,
		o = x(s, t, t[23], tn);
	let c = [t[8], t[13]],
		l = {};
	for (let u = 0; u < c.length; u += 1) l = U(l, c[u]);
	return {
		c() {
			(e = Ne('div')), o && o.c(), this.h();
		},
		l(u) {
			e = De(u, 'DIV', {});
			var a = Fe(e);
			o && o.l(a), a.forEach(z), this.h();
		},
		h() {
			se(e, l);
		},
		m(u, a) {
			fe(u, e, a),
				o && o.m(e, null),
				t[29](e),
				(n = !0),
				i || ((r = [Le(t[8].action(e)), J(e, 'm-keydown', t[12])]), (i = !0));
		},
		p(u, a) {
			o &&
				o.p &&
				(!n || a[0] & 8388864) &&
				$(o, s, u, u[23], n ? te(s, u[23], a, _i) : ee(u[23]), tn),
				se(e, (l = he(c, [a[0] & 256 && u[8], a[0] & 8192 && u[13]])));
		},
		i(u) {
			n || (w(o, u), (n = !0));
		},
		o(u) {
			R(o, u), (n = !1);
		},
		d(u) {
			u && z(e), o && o.d(u), t[29](null), (i = !1), je(r);
		}
	};
}
function Ci(t) {
	let e, n, i, r, s;
	const o = t[24].default,
		c = x(o, t, t[23], nn);
	let l = [t[8], t[13]],
		u = {};
	for (let a = 0; a < l.length; a += 1) u = U(u, l[a]);
	return {
		c() {
			(e = Ne('div')), c && c.c(), this.h();
		},
		l(a) {
			e = De(a, 'DIV', {});
			var d = Fe(e);
			c && c.l(d), d.forEach(z), this.h();
		},
		h() {
			se(e, u);
		},
		m(a, d) {
			fe(a, e, d),
				c && c.m(e, null),
				t[28](e),
				(i = !0),
				r || ((s = [Le(t[8].action(e)), J(e, 'm-keydown', t[12])]), (r = !0));
		},
		p(a, d) {
			(t = a),
				c &&
					c.p &&
					(!i || d[0] & 8388864) &&
					$(c, o, t, t[23], i ? te(o, t[23], d, hi) : ee(t[23]), nn),
				se(e, (u = he(l, [d[0] & 256 && t[8], d[0] & 8192 && t[13]])));
		},
		i(a) {
			i || (w(c, a), n && n.end(1), (i = !0));
		},
		o(a) {
			R(c, a), a && (n = dn(e, t[5], t[6])), (i = !1);
		},
		d(a) {
			a && z(e), c && c.d(a), t[28](null), a && n && n.end(), (r = !1), je(s);
		}
	};
}
function Ei(t) {
	let e, n, i, r, s;
	const o = t[24].default,
		c = x(o, t, t[23], rn);
	let l = [t[8], t[13]],
		u = {};
	for (let a = 0; a < l.length; a += 1) u = U(u, l[a]);
	return {
		c() {
			(e = Ne('div')), c && c.c(), this.h();
		},
		l(a) {
			e = De(a, 'DIV', {});
			var d = Fe(e);
			c && c.l(d), d.forEach(z), this.h();
		},
		h() {
			se(e, u);
		},
		m(a, d) {
			fe(a, e, d),
				c && c.m(e, null),
				t[27](e),
				(i = !0),
				r || ((s = [Le(t[8].action(e)), J(e, 'm-keydown', t[12])]), (r = !0));
		},
		p(a, d) {
			(t = a),
				c &&
					c.p &&
					(!i || d[0] & 8388864) &&
					$(c, o, t, t[23], i ? te(o, t[23], d, bi) : ee(t[23]), rn),
				se(e, (u = he(l, [d[0] & 256 && t[8], d[0] & 8192 && t[13]])));
		},
		i(a) {
			i ||
				(w(c, a),
				a &&
					(n ||
						Rt(() => {
							(n = mn(e, t[3], t[4])), n.start();
						})),
				(i = !0));
		},
		o(a) {
			R(c, a), (i = !1);
		},
		d(a) {
			a && z(e), c && c.d(a), t[27](null), (r = !1), je(s);
		}
	};
}
function Ti(t) {
	let e, n, i, r, s, o;
	const c = t[24].default,
		l = x(c, t, t[23], sn);
	let u = [t[8], t[13]],
		a = {};
	for (let d = 0; d < u.length; d += 1) a = U(a, u[d]);
	return {
		c() {
			(e = Ne('div')), l && l.c(), this.h();
		},
		l(d) {
			e = De(d, 'DIV', {});
			var A = Fe(e);
			l && l.l(A), A.forEach(z), this.h();
		},
		h() {
			se(e, a);
		},
		m(d, A) {
			fe(d, e, A),
				l && l.m(e, null),
				t[26](e),
				(r = !0),
				s || ((o = [Le(t[8].action(e)), J(e, 'm-keydown', t[12])]), (s = !0));
		},
		p(d, A) {
			(t = d),
				l &&
					l.p &&
					(!r || A[0] & 8388864) &&
					$(l, c, t, t[23], r ? te(c, t[23], A, pi) : ee(t[23]), sn),
				se(e, (a = he(u, [A[0] & 256 && t[8], A[0] & 8192 && t[13]])));
		},
		i(d) {
			r ||
				(w(l, d),
				d &&
					Rt(() => {
						r && (i && i.end(1), (n = mn(e, t[3], t[4])), n.start());
					}),
				(r = !0));
		},
		o(d) {
			R(l, d), n && n.invalidate(), d && (i = dn(e, t[5], t[6])), (r = !1);
		},
		d(d) {
			d && z(e), l && l.d(d), t[26](null), d && i && i.end(), (s = !1), je(o);
		}
	};
}
function Oi(t) {
	let e, n, i, r, s;
	const o = t[24].default,
		c = x(o, t, t[23], on);
	let l = [t[8], t[13]],
		u = {};
	for (let a = 0; a < l.length; a += 1) u = U(u, l[a]);
	return {
		c() {
			(e = Ne('div')), c && c.c(), this.h();
		},
		l(a) {
			e = De(a, 'DIV', {});
			var d = Fe(e);
			c && c.l(d), d.forEach(z), this.h();
		},
		h() {
			se(e, u);
		},
		m(a, d) {
			fe(a, e, d),
				c && c.m(e, null),
				t[25](e),
				(i = !0),
				r || ((s = [Le(t[8].action(e)), J(e, 'm-keydown', t[12])]), (r = !0));
		},
		p(a, d) {
			(t = a),
				c &&
					c.p &&
					(!i || d[0] & 8388864) &&
					$(c, o, t, t[23], i ? te(o, t[23], d, vi) : ee(t[23]), on),
				se(e, (u = he(l, [d[0] & 256 && t[8], d[0] & 8192 && t[13]])));
		},
		i(a) {
			i ||
				(w(c, a),
				a &&
					Rt(() => {
						i && (n || (n = Yt(e, t[1], t[2], !0)), n.run(1));
					}),
				(i = !0));
		},
		o(a) {
			R(c, a), a && (n || (n = Yt(e, t[1], t[2], !1)), n.run(0)), (i = !1);
		},
		d(a) {
			a && z(e), c && c.d(a), t[25](null), a && n && n.end(), (r = !1), je(s);
		}
	};
}
function Ai(t) {
	let e;
	const n = t[24].default,
		i = x(n, t, t[23], ln);
	return {
		c() {
			i && i.c();
		},
		l(r) {
			i && i.l(r);
		},
		m(r, s) {
			i && i.m(r, s), (e = !0);
		},
		p(r, s) {
			i &&
				i.p &&
				(!e || s[0] & 8388864) &&
				$(i, n, r, r[23], e ? te(n, r[23], s, ki) : ee(r[23]), ln);
		},
		i(r) {
			e || (w(i, r), (e = !0));
		},
		o(r) {
			R(i, r), (e = !1);
		},
		d(r) {
			i && i.d(r);
		}
	};
}
function Ii(t) {
	let e, n, i, r;
	const s = [Ai, Oi, Ti, Ei, Ci, yi],
		o = [];
	function c(l, u) {
		return l[7] && l[9]
			? 0
			: l[1] && l[9]
				? 1
				: l[3] && l[5] && l[9]
					? 2
					: l[3] && l[9]
						? 3
						: l[5] && l[9]
							? 4
							: l[9]
								? 5
								: -1;
	}
	return (
		~(e = c(t)) && (n = o[e] = s[e](t)),
		{
			c() {
				n && n.c(), (i = Ie());
			},
			l(l) {
				n && n.l(l), (i = Ie());
			},
			m(l, u) {
				~e && o[e].m(l, u), fe(l, i, u), (r = !0);
			},
			p(l, u) {
				let a = e;
				(e = c(l)),
					e === a
						? ~e && o[e].p(l, u)
						: (n &&
								(mt(),
								R(o[a], 1, 1, () => {
									o[a] = null;
								}),
								gt()),
							~e
								? ((n = o[e]),
									n ? n.p(l, u) : ((n = o[e] = s[e](l)), n.c()),
									w(n, 1),
									n.m(i.parentNode, i))
								: (n = null));
			},
			i(l) {
				r || (w(n), (r = !0));
			},
			o(l) {
				R(n), (r = !1);
			},
			d(l) {
				l && z(i), ~e && o[e].d(l);
			}
		}
	);
}
function Pi(t, e, n) {
	let i;
	const r = [
		'transition',
		'transitionConfig',
		'inTransition',
		'inTransitionConfig',
		'outTransition',
		'outTransitionConfig',
		'asChild',
		'id',
		'alignOffset',
		'collisionPadding',
		'avoidCollisions',
		'collisionBoundary',
		'fitViewport',
		'strategy',
		'overlap',
		'el'
	];
	let s = re(e, r),
		o,
		c,
		{ $$slots: l = {}, $$scope: u } = e,
		{ transition: a = void 0 } = e,
		{ transitionConfig: d = void 0 } = e,
		{ inTransition: A = void 0 } = e,
		{ inTransitionConfig: E = void 0 } = e,
		{ outTransition: W = void 0 } = e,
		{ outTransitionConfig: K = void 0 } = e,
		{ asChild: b = !1 } = e,
		{ id: H = void 0 } = e,
		{ alignOffset: C = 0 } = e,
		{ collisionPadding: X = 8 } = e,
		{ avoidCollisions: ne = !0 } = e,
		{ collisionBoundary: be = void 0 } = e,
		{ fitViewport: v = !1 } = e,
		{ strategy: Ee = 'absolute' } = e,
		{ overlap: pe = !1 } = e,
		{ el: ie = void 0 } = e;
	const {
		elements: { menu: de },
		states: { open: Ke },
		ids: me,
		getAttrs: ze
	} = Ut();
	Xe(t, de, (_) => n(22, (o = _))), Xe(t, Ke, (_) => n(9, (c = _)));
	const Je = Vt(),
		N = ze('content');
	function G(_) {
		we[_ ? 'unshift' : 'push'](() => {
			(ie = _), n(0, ie);
		});
	}
	function Te(_) {
		we[_ ? 'unshift' : 'push'](() => {
			(ie = _), n(0, ie);
		});
	}
	function ge(_) {
		we[_ ? 'unshift' : 'push'](() => {
			(ie = _), n(0, ie);
		});
	}
	function D(_) {
		we[_ ? 'unshift' : 'push'](() => {
			(ie = _), n(0, ie);
		});
	}
	function Pe(_) {
		we[_ ? 'unshift' : 'push'](() => {
			(ie = _), n(0, ie);
		});
	}
	return (
		(t.$$set = (_) => {
			(e = U(U({}, e), Ue(_))),
				n(13, (s = re(e, r))),
				'transition' in _ && n(1, (a = _.transition)),
				'transitionConfig' in _ && n(2, (d = _.transitionConfig)),
				'inTransition' in _ && n(3, (A = _.inTransition)),
				'inTransitionConfig' in _ && n(4, (E = _.inTransitionConfig)),
				'outTransition' in _ && n(5, (W = _.outTransition)),
				'outTransitionConfig' in _ && n(6, (K = _.outTransitionConfig)),
				'asChild' in _ && n(7, (b = _.asChild)),
				'id' in _ && n(14, (H = _.id)),
				'alignOffset' in _ && n(15, (C = _.alignOffset)),
				'collisionPadding' in _ && n(16, (X = _.collisionPadding)),
				'avoidCollisions' in _ && n(17, (ne = _.avoidCollisions)),
				'collisionBoundary' in _ && n(18, (be = _.collisionBoundary)),
				'fitViewport' in _ && n(19, (v = _.fitViewport)),
				'strategy' in _ && n(20, (Ee = _.strategy)),
				'overlap' in _ && n(21, (pe = _.overlap)),
				'el' in _ && n(0, (ie = _.el)),
				'$$scope' in _ && n(23, (u = _.$$scope));
		}),
		(t.$$.update = () => {
			t.$$.dirty[0] & 16384 && H && me.menu.set(H),
				t.$$.dirty[0] & 4194304 && n(8, (i = o)),
				t.$$.dirty[0] & 256 && Object.assign(i, N),
				t.$$.dirty[0] & 4161536 &&
					Jn({
						alignOffset: C,
						collisionPadding: X,
						avoidCollisions: ne,
						collisionBoundary: be,
						fitViewport: v,
						strategy: Ee,
						overlap: pe
					});
		}),
		[
			ie,
			a,
			d,
			A,
			E,
			W,
			K,
			b,
			i,
			c,
			de,
			Ke,
			Je,
			s,
			H,
			C,
			X,
			ne,
			be,
			v,
			Ee,
			pe,
			o,
			u,
			l,
			G,
			Te,
			ge,
			D,
			Pe
		]
	);
}
let Mi = class extends ye {
	constructor(e) {
		super(),
			Ce(
				this,
				e,
				Pi,
				Ii,
				_e,
				{
					transition: 1,
					transitionConfig: 2,
					inTransition: 3,
					inTransitionConfig: 4,
					outTransition: 5,
					outTransitionConfig: 6,
					asChild: 7,
					id: 14,
					alignOffset: 15,
					collisionPadding: 16,
					avoidCollisions: 17,
					collisionBoundary: 18,
					fitViewport: 19,
					strategy: 20,
					overlap: 21,
					el: 0
				},
				null,
				[-1, -1]
			);
	}
};
const Si = (t) => ({ builder: t & 4 }),
	un = (t) => ({ builder: t[2] }),
	Di = (t) => ({ builder: t & 4 }),
	an = (t) => ({ builder: t[2] });
function Fi(t) {
	let e, n, i, r;
	const s = t[9].default,
		o = x(s, t, t[8], un);
	let c = [t[2], t[5]],
		l = {};
	for (let u = 0; u < c.length; u += 1) l = U(l, c[u]);
	return {
		c() {
			(e = Ne('div')), o && o.c(), this.h();
		},
		l(u) {
			e = De(u, 'DIV', {});
			var a = Fe(e);
			o && o.l(a), a.forEach(z), this.h();
		},
		h() {
			se(e, l);
		},
		m(u, a) {
			fe(u, e, a),
				o && o.m(e, null),
				t[10](e),
				(n = !0),
				i ||
					((r = [
						Le(t[2].action(e)),
						J(e, 'm-contextmenu', t[4]),
						J(e, 'm-pointercancel', t[4]),
						J(e, 'm-pointerdown', t[4]),
						J(e, 'm-pointermove', t[4]),
						J(e, 'm-pointerup', t[4])
					]),
					(i = !0));
		},
		p(u, a) {
			o && o.p && (!n || a & 260) && $(o, s, u, u[8], n ? te(s, u[8], a, Si) : ee(u[8]), un),
				se(e, (l = he(c, [a & 4 && u[2], a & 32 && u[5]])));
		},
		i(u) {
			n || (w(o, u), (n = !0));
		},
		o(u) {
			R(o, u), (n = !1);
		},
		d(u) {
			u && z(e), o && o.d(u), t[10](null), (i = !1), je(r);
		}
	};
}
function Ni(t) {
	let e;
	const n = t[9].default,
		i = x(n, t, t[8], an);
	return {
		c() {
			i && i.c();
		},
		l(r) {
			i && i.l(r);
		},
		m(r, s) {
			i && i.m(r, s), (e = !0);
		},
		p(r, s) {
			i && i.p && (!e || s & 260) && $(i, n, r, r[8], e ? te(n, r[8], s, Di) : ee(r[8]), an);
		},
		i(r) {
			e || (w(i, r), (e = !0));
		},
		o(r) {
			R(i, r), (e = !1);
		},
		d(r) {
			i && i.d(r);
		}
	};
}
function Ki(t) {
	let e, n, i, r;
	const s = [Ni, Fi],
		o = [];
	function c(l, u) {
		return l[1] ? 0 : 1;
	}
	return (
		(e = c(t)),
		(n = o[e] = s[e](t)),
		{
			c() {
				n.c(), (i = Ie());
			},
			l(l) {
				n.l(l), (i = Ie());
			},
			m(l, u) {
				o[e].m(l, u), fe(l, i, u), (r = !0);
			},
			p(l, [u]) {
				let a = e;
				(e = c(l)),
					e === a
						? o[e].p(l, u)
						: (mt(),
							R(o[a], 1, 1, () => {
								o[a] = null;
							}),
							gt(),
							(n = o[e]),
							n ? n.p(l, u) : ((n = o[e] = s[e](l)), n.c()),
							w(n, 1),
							n.m(i.parentNode, i));
			},
			i(l) {
				r || (w(n), (r = !0));
			},
			o(l) {
				R(n), (r = !1);
			},
			d(l) {
				l && z(i), o[e].d(l);
			}
		}
	);
}
function Bi(t, e, n) {
	let i;
	const r = ['asChild', 'id', 'el'];
	let s = re(e, r),
		o,
		{ $$slots: c = {}, $$scope: l } = e,
		{ asChild: u = !1 } = e,
		{ id: a = void 0 } = e,
		{ el: d = void 0 } = e;
	const {
		elements: { trigger: A },
		ids: E,
		getAttrs: W
	} = Ut();
	Xe(t, A, (C) => n(7, (o = C)));
	const K = Vt(),
		b = W('trigger');
	function H(C) {
		we[C ? 'unshift' : 'push'](() => {
			(d = C), n(0, d);
		});
	}
	return (
		(t.$$set = (C) => {
			(e = U(U({}, e), Ue(C))),
				n(5, (s = re(e, r))),
				'asChild' in C && n(1, (u = C.asChild)),
				'id' in C && n(6, (a = C.id)),
				'el' in C && n(0, (d = C.el)),
				'$$scope' in C && n(8, (l = C.$$scope));
		}),
		(t.$$.update = () => {
			t.$$.dirty & 64 && a && E.trigger.set(a),
				t.$$.dirty & 128 && n(2, (i = o)),
				t.$$.dirty & 4 && Object.assign(i, b);
		}),
		[d, u, i, A, K, s, a, o, l, c, H]
	);
}
class Ri extends ye {
	constructor(e) {
		super(), Ce(this, e, Bi, Ki, _e, { asChild: 1, id: 6, el: 0 });
	}
}
const wi = (t) => ({ builder: t & 4 }),
	cn = (t) => ({ builder: t[2] });
function Vi(t) {
	let e,
		n,
		i,
		r = [t[3], t[5]],
		s = {};
	for (let o = 0; o < r.length; o += 1) s = U(s, r[o]);
	return {
		c() {
			(e = Ne('div')), this.h();
		},
		l(o) {
			(e = De(o, 'DIV', {})), Fe(e).forEach(z), this.h();
		},
		h() {
			se(e, s);
		},
		m(o, c) {
			fe(o, e, c), t[8](e), n || ((i = Le(t[3].action(e))), (n = !0));
		},
		p(o, c) {
			se(e, (s = he(r, [c & 8 && o[3], c & 32 && o[5]])));
		},
		i: Ht,
		o: Ht,
		d(o) {
			o && z(e), t[8](null), (n = !1), i();
		}
	};
}
function Ui(t) {
	let e;
	const n = t[7].default,
		i = x(n, t, t[6], cn);
	return {
		c() {
			i && i.c();
		},
		l(r) {
			i && i.l(r);
		},
		m(r, s) {
			i && i.m(r, s), (e = !0);
		},
		p(r, s) {
			i && i.p && (!e || s & 68) && $(i, n, r, r[6], e ? te(n, r[6], s, wi) : ee(r[6]), cn);
		},
		i(r) {
			e || (w(i, r), (e = !0));
		},
		o(r) {
			R(i, r), (e = !1);
		},
		d(r) {
			i && i.d(r);
		}
	};
}
function Li(t) {
	let e, n, i, r;
	const s = [Ui, Vi],
		o = [];
	function c(l, u) {
		return l[1] ? 0 : 1;
	}
	return (
		(e = c(t)),
		(n = o[e] = s[e](t)),
		{
			c() {
				n.c(), (i = Ie());
			},
			l(l) {
				n.l(l), (i = Ie());
			},
			m(l, u) {
				o[e].m(l, u), fe(l, i, u), (r = !0);
			},
			p(l, [u]) {
				let a = e;
				(e = c(l)),
					e === a
						? o[e].p(l, u)
						: (mt(),
							R(o[a], 1, 1, () => {
								o[a] = null;
							}),
							gt(),
							(n = o[e]),
							n ? n.p(l, u) : ((n = o[e] = s[e](l)), n.c()),
							w(n, 1),
							n.m(i.parentNode, i));
			},
			i(l) {
				r || (w(n), (r = !0));
			},
			o(l) {
				R(n), (r = !1);
			},
			d(l) {
				l && z(i), o[e].d(l);
			}
		}
	);
}
function Wi(t, e, n) {
	let i;
	const r = ['asChild', 'el'];
	let s = re(e, r),
		o,
		{ $$slots: c = {}, $$scope: l } = e,
		{ asChild: u = !1 } = e,
		{ el: a = void 0 } = e;
	const {
		elements: { separator: d },
		getAttrs: A
	} = Lt();
	Xe(t, d, (K) => n(3, (o = K)));
	const E = A('separator');
	function W(K) {
		we[K ? 'unshift' : 'push'](() => {
			(a = K), n(0, a);
		});
	}
	return (
		(t.$$set = (K) => {
			(e = U(U({}, e), Ue(K))),
				n(5, (s = re(e, r))),
				'asChild' in K && n(1, (u = K.asChild)),
				'el' in K && n(0, (a = K.el)),
				'$$scope' in K && n(6, (l = K.$$scope));
		}),
		(t.$$.update = () => {
			t.$$.dirty & 8 && n(2, (i = o)), t.$$.dirty & 4 && Object.assign(i, E);
		}),
		[a, u, i, o, d, s, l, c, W]
	);
}
class Xi extends ye {
	constructor(e) {
		super(), Ce(this, e, Wi, Li, _e, { asChild: 1, el: 0 });
	}
}
function ji(t) {
	let e;
	const n = t[1].default,
		i = x(n, t, t[3], null);
	return {
		c() {
			i && i.c();
		},
		l(r) {
			i && i.l(r);
		},
		m(r, s) {
			i && i.m(r, s), (e = !0);
		},
		p(r, s) {
			i && i.p && (!e || s & 8) && $(i, n, r, r[3], e ? te(n, r[3], s, null) : ee(r[3]), null);
		},
		i(r) {
			e || (w(i, r), (e = !0));
		},
		o(r) {
			R(i, r), (e = !1);
		},
		d(r) {
			i && i.d(r);
		}
	};
}
function zi(t) {
	let e, n;
	return (
		(e = new ti({
			props: {
				open: t[0],
				onOpenChange: t[2],
				closeOnOutsideClick: !0,
				onOutsideClick: Hi,
				$$slots: { default: [ji] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				pt(e.$$.fragment);
			},
			l(i) {
				bt(e.$$.fragment, i);
			},
			m(i, r) {
				ht(e, i, r), (n = !0);
			},
			p(i, [r]) {
				const s = {};
				r & 1 && (s.open = i[0]),
					r & 1 && (s.onOpenChange = i[2]),
					r & 8 && (s.$$scope = { dirty: r, ctx: i }),
					e.$set(s);
			},
			i(i) {
				n || (w(e.$$.fragment, i), (n = !0));
			},
			o(i) {
				R(e.$$.fragment, i), (n = !1);
			},
			d(i) {
				_t(e, i);
			}
		}
	);
}
const Hi = (t) => t.preventDefault();
function Yi(t, e, n) {
	let { $$slots: i = {}, $$scope: r } = e,
		s = !1;
	function o(l) {
		if (l.button === 0 || l.button === 2) {
			if (l.target.closest('[data-menu-content]')) return;
			n(0, (s = !1));
		}
	}
	Sn(
		() => (
			window.addEventListener('mousedown', o),
			() => {
				window.removeEventListener('mousedown', o);
			}
		)
	);
	const c = (l) => n(0, (s = l));
	return (
		(t.$$set = (l) => {
			'$$scope' in l && n(3, (r = l.$$scope));
		}),
		[s, i, c, r]
	);
}
class dr extends ye {
	constructor(e) {
		super(), Ce(this, e, Yi, zi, _e, {});
	}
}
function qi(t) {
	let e;
	const n = t[3].default,
		i = x(n, t, t[11], null);
	return {
		c() {
			i && i.c();
		},
		l(r) {
			i && i.l(r);
		},
		m(r, s) {
			i && i.m(r, s), (e = !0);
		},
		p(r, s) {
			i &&
				i.p &&
				(!e || s & 2048) &&
				$(i, n, r, r[11], e ? te(n, r[11], s, null) : ee(r[11]), null);
		},
		i(r) {
			e || (w(i, r), (e = !0));
		},
		o(r) {
			R(i, r), (e = !1);
		},
		d(r) {
			i && i.d(r);
		}
	};
}
function Gi(t) {
	let e, n;
	const i = [
		{
			class: Ve(
				'relative h-7 flex text-foreground cursor-pointer select-none text-me items-center rounded-sm px-2 py-1.5 text-xs outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				t[1] && 'pl-8',
				t[0]
			)
		},
		t[2]
	];
	let r = { $$slots: { default: [qi] }, $$scope: { ctx: t } };
	for (let s = 0; s < i.length; s += 1) r = U(r, i[s]);
	return (
		(e = new gi({ props: r })),
		e.$on('click', t[4]),
		e.$on('keydown', t[5]),
		e.$on('focusin', t[6]),
		e.$on('focusout', t[7]),
		e.$on('pointerdown', t[8]),
		e.$on('pointerleave', t[9]),
		e.$on('pointermove', t[10]),
		{
			c() {
				pt(e.$$.fragment);
			},
			l(s) {
				bt(e.$$.fragment, s);
			},
			m(s, o) {
				ht(e, s, o), (n = !0);
			},
			p(s, [o]) {
				const c =
					o & 7
						? he(i, [
								o & 3 && {
									class: Ve(
										'relative h-7 flex text-foreground cursor-pointer select-none text-me items-center rounded-sm px-2 py-1.5 text-xs outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
										s[1] && 'pl-8',
										s[0]
									)
								},
								o & 4 && wt(s[2])
							])
						: {};
				o & 2048 && (c.$$scope = { dirty: o, ctx: s }), e.$set(c);
			},
			i(s) {
				n || (w(e.$$.fragment, s), (n = !0));
			},
			o(s) {
				R(e.$$.fragment, s), (n = !1);
			},
			d(s) {
				_t(e, s);
			}
		}
	);
}
function Zi(t, e, n) {
	const i = ['class', 'inset'];
	let r = re(e, i),
		{ $$slots: s = {}, $$scope: o } = e,
		{ class: c = void 0 } = e,
		{ inset: l = void 0 } = e;
	function u(b) {
		Be.call(this, t, b);
	}
	function a(b) {
		Be.call(this, t, b);
	}
	function d(b) {
		Be.call(this, t, b);
	}
	function A(b) {
		Be.call(this, t, b);
	}
	function E(b) {
		Be.call(this, t, b);
	}
	function W(b) {
		Be.call(this, t, b);
	}
	function K(b) {
		Be.call(this, t, b);
	}
	return (
		(t.$$set = (b) => {
			(e = U(U({}, e), Ue(b))),
				n(2, (r = re(e, i))),
				'class' in b && n(0, (c = b.class)),
				'inset' in b && n(1, (l = b.inset)),
				'$$scope' in b && n(11, (o = b.$$scope));
		}),
		[c, l, r, s, u, a, d, A, E, W, K, o]
	);
}
class mr extends ye {
	constructor(e) {
		super(), Ce(this, e, Zi, Gi, _e, { class: 0, inset: 1 });
	}
}
function Qi(t) {
	let e;
	const n = t[4].default,
		i = x(n, t, t[6], null);
	return {
		c() {
			i && i.c();
		},
		l(r) {
			i && i.l(r);
		},
		m(r, s) {
			i && i.m(r, s), (e = !0);
		},
		p(r, s) {
			i && i.p && (!e || s & 64) && $(i, n, r, r[6], e ? te(n, r[6], s, null) : ee(r[6]), null);
		},
		i(r) {
			e || (w(i, r), (e = !0));
		},
		o(r) {
			R(i, r), (e = !1);
		},
		d(r) {
			i && i.d(r);
		}
	};
}
function Ji(t) {
	let e, n;
	const i = [
		{ transition: t[1] },
		{ transitionConfig: t[2] },
		{
			class: Ve(
				'z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md focus:outline-none',
				t[0]
			)
		},
		t[3]
	];
	let r = { $$slots: { default: [Qi] }, $$scope: { ctx: t } };
	for (let s = 0; s < i.length; s += 1) r = U(r, i[s]);
	return (
		(e = new Mi({ props: r })),
		e.$on('keydown', t[5]),
		{
			c() {
				pt(e.$$.fragment);
			},
			l(s) {
				bt(e.$$.fragment, s);
			},
			m(s, o) {
				ht(e, s, o), (n = !0);
			},
			p(s, [o]) {
				const c =
					o & 15
						? he(i, [
								o & 2 && { transition: s[1] },
								o & 4 && { transitionConfig: s[2] },
								o & 1 && {
									class: Ve(
										'z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md focus:outline-none',
										s[0]
									)
								},
								o & 8 && wt(s[3])
							])
						: {};
				o & 64 && (c.$$scope = { dirty: o, ctx: s }), e.$set(c);
			},
			i(s) {
				n || (w(e.$$.fragment, s), (n = !0));
			},
			o(s) {
				R(e.$$.fragment, s), (n = !1);
			},
			d(s) {
				_t(e, s);
			}
		}
	);
}
function xi(t, e, n) {
	const i = ['class', 'transition', 'transitionConfig'];
	let r = re(e, i),
		{ $$slots: s = {}, $$scope: o } = e,
		{ class: c = void 0 } = e,
		{ transition: l = Fn } = e,
		{ transitionConfig: u = void 0 } = e;
	function a(d) {
		Be.call(this, t, d);
	}
	return (
		(t.$$set = (d) => {
			(e = U(U({}, e), Ue(d))),
				n(3, (r = re(e, i))),
				'class' in d && n(0, (c = d.class)),
				'transition' in d && n(1, (l = d.transition)),
				'transitionConfig' in d && n(2, (u = d.transitionConfig)),
				'$$scope' in d && n(6, (o = d.$$scope));
		}),
		[c, l, u, r, s, a, o]
	);
}
class gr extends ye {
	constructor(e) {
		super(), Ce(this, e, xi, Ji, _e, { class: 0, transition: 1, transitionConfig: 2 });
	}
}
function $i(t) {
	let e, n, i;
	const r = t[3].default,
		s = x(r, t, t[2], null);
	let o = [
			{ class: (n = Ve('ml-auto text-xs tracking-widest text-muted-foreground', t[0])) },
			t[1]
		],
		c = {};
	for (let l = 0; l < o.length; l += 1) c = U(c, o[l]);
	return {
		c() {
			(e = Ne('span')), s && s.c(), this.h();
		},
		l(l) {
			e = De(l, 'SPAN', { class: !0 });
			var u = Fe(e);
			s && s.l(u), u.forEach(z), this.h();
		},
		h() {
			se(e, c);
		},
		m(l, u) {
			fe(l, e, u), s && s.m(e, null), (i = !0);
		},
		p(l, [u]) {
			s && s.p && (!i || u & 4) && $(s, r, l, l[2], i ? te(r, l[2], u, null) : ee(l[2]), null),
				se(
					e,
					(c = he(o, [
						(!i ||
							(u & 1 &&
								n !== (n = Ve('ml-auto text-xs tracking-widest text-muted-foreground', l[0])))) && {
							class: n
						},
						u & 2 && l[1]
					]))
				);
		},
		i(l) {
			i || (w(s, l), (i = !0));
		},
		o(l) {
			R(s, l), (i = !1);
		},
		d(l) {
			l && z(e), s && s.d(l);
		}
	};
}
function er(t, e, n) {
	const i = ['class'];
	let r = re(e, i),
		{ $$slots: s = {}, $$scope: o } = e,
		{ class: c = void 0 } = e;
	return (
		(t.$$set = (l) => {
			(e = U(U({}, e), Ue(l))),
				n(1, (r = re(e, i))),
				'class' in l && n(0, (c = l.class)),
				'$$scope' in l && n(2, (o = l.$$scope));
		}),
		[c, r, o, s]
	);
}
class _r extends ye {
	constructor(e) {
		super(), Ce(this, e, er, $i, _e, { class: 0 });
	}
}
function tr(t) {
	let e, n;
	const i = [{ class: Ve('-mx-1 my-1 h-px bg-border', t[0]) }, t[1]];
	let r = {};
	for (let s = 0; s < i.length; s += 1) r = U(r, i[s]);
	return (
		(e = new Xi({ props: r })),
		{
			c() {
				pt(e.$$.fragment);
			},
			l(s) {
				bt(e.$$.fragment, s);
			},
			m(s, o) {
				ht(e, s, o), (n = !0);
			},
			p(s, [o]) {
				const c =
					o & 3
						? he(i, [o & 1 && { class: Ve('-mx-1 my-1 h-px bg-border', s[0]) }, o & 2 && wt(s[1])])
						: {};
				e.$set(c);
			},
			i(s) {
				n || (w(e.$$.fragment, s), (n = !0));
			},
			o(s) {
				R(e.$$.fragment, s), (n = !1);
			},
			d(s) {
				_t(e, s);
			}
		}
	);
}
function nr(t, e, n) {
	const i = ['class'];
	let r = re(e, i),
		{ class: s = void 0 } = e;
	return (
		(t.$$set = (o) => {
			(e = U(U({}, e), Ue(o))), n(1, (r = re(e, i))), 'class' in o && n(0, (s = o.class));
		}),
		[s, r]
	);
}
class hr extends ye {
	constructor(e) {
		super(), Ce(this, e, nr, tr, _e, { class: 0 });
	}
}
const br = li,
	pr = Ri;
export { dr as C, br as S, pr as T, ar as a, gr as b, mr as c, hr as d, _r as e, ii as g, cr as u };
