import {
	s as Ae,
	d as $,
	q as _,
	i as j,
	b as m,
	w as Ne,
	c as x,
	e as S,
	g as N,
	h as E,
	j as L,
	k as q,
	B as Be,
	M as Oe,
	a as Y,
	f as W,
	t as C,
	n as fe,
	R as Re,
	Q as we,
	P as xe,
	l as Fe,
	u as He,
	m as qe,
	o as Ue
} from './CZvU1ekx.js';
import {
	S as Le,
	i as Te,
	d as y,
	t as k,
	a as M,
	g as Pe,
	e as je,
	m as V,
	c as T,
	b as z
} from './ZuwjM_kn.js';
import {
	o as $e,
	q as Se,
	i as Ee,
	r as be,
	t as ge,
	v as De,
	w as ke,
	n as Me,
	y as Ie,
	z as ie,
	I as We,
	A as Xe,
	B as Ge,
	D as Qe
} from './Dz2apFQ9.js';
import { c as ue, B as Ce } from './CTLOy2q2.js';
import { L as oe } from './oMhdKTtd.js';
function ye(n, e, t) {
	const a = n.slice();
	return (a[19] = e[t]), a;
}
function Je(n) {
	let e, t;
	return (
		(e = new We({ props: { name: 'identityGhost', class: 'w-[18px] h-[18px]' } })),
		{
			c() {
				z(e.$$.fragment);
			},
			l(a) {
				T(e.$$.fragment, a);
			},
			m(a, s) {
				V(e, a, s), (t = !0);
			},
			p: fe,
			i(a) {
				t || (M(e.$$.fragment, a), (t = !0));
			},
			o(a) {
				k(e.$$.fragment, a), (t = !1);
			},
			d(a) {
				y(e, a);
			}
		}
	);
}
function Ke(n) {
	let e, t;
	return (
		(e = new Ce({
			props: {
				size: 'icon',
				variant: 'ghost',
				scale: 'md',
				class: ue(
					'h-7 w-7 fill-muted-foreground hover:fill-foreground transition-all',
					n[0] === 'metadata' && 'fill-foreground bg-accent'
				),
				$$slots: { default: [Je] },
				$$scope: { ctx: n }
			}
		})),
		e.$on('click', n[10]),
		{
			c() {
				z(e.$$.fragment);
			},
			l(a) {
				T(e.$$.fragment, a);
			},
			m(a, s) {
				V(e, a, s), (t = !0);
			},
			p(a, s) {
				const l = {};
				s & 1 &&
					(l.class = ue(
						'h-7 w-7 fill-muted-foreground hover:fill-foreground transition-all',
						a[0] === 'metadata' && 'fill-foreground bg-accent'
					)),
					s & 4194304 && (l.$$scope = { dirty: s, ctx: a }),
					e.$set(l);
			},
			i(a) {
				t || (M(e.$$.fragment, a), (t = !0));
			},
			o(a) {
				k(e.$$.fragment, a), (t = !1);
			},
			d(a) {
				y(e, a);
			}
		}
	);
}
function Ye(n) {
	let e, t;
	return (
		(e = new We({ props: { name: 'layer', class: 'w-[16px] h-[16px]' } })),
		{
			c() {
				z(e.$$.fragment);
			},
			l(a) {
				T(e.$$.fragment, a);
			},
			m(a, s) {
				V(e, a, s), (t = !0);
			},
			p: fe,
			i(a) {
				t || (M(e.$$.fragment, a), (t = !0));
			},
			o(a) {
				k(e.$$.fragment, a), (t = !1);
			},
			d(a) {
				y(e, a);
			}
		}
	);
}
function Ze(n) {
	let e, t;
	return (
		(e = new Ce({
			props: {
				size: 'icon',
				variant: 'ghost',
				scale: 'md',
				class: ue(
					'h-7 w-7 fill-muted-foreground hover:fill-foreground transition-all',
					n[0] === 'toc' && 'fill-foreground bg-accent'
				),
				$$slots: { default: [Ye] },
				$$scope: { ctx: n }
			}
		})),
		e.$on('click', n[11]),
		{
			c() {
				z(e.$$.fragment);
			},
			l(a) {
				T(e.$$.fragment, a);
			},
			m(a, s) {
				V(e, a, s), (t = !0);
			},
			p(a, s) {
				const l = {};
				s & 1 &&
					(l.class = ue(
						'h-7 w-7 fill-muted-foreground hover:fill-foreground transition-all',
						a[0] === 'toc' && 'fill-foreground bg-accent'
					)),
					s & 4194304 && (l.$$scope = { dirty: s, ctx: a }),
					e.$set(l);
			},
			i(a) {
				t || (M(e.$$.fragment, a), (t = !0));
			},
			o(a) {
				k(e.$$.fragment, a), (t = !1);
			},
			d(a) {
				y(e, a);
			}
		}
	);
}
function et(n) {
	let e,
		t,
		a = n[0] === 'metadata' ? 'No metadata available' : 'No headings found',
		s;
	return {
		c() {
			(e = E('div')), (t = E('p')), (s = C(a)), this.h();
		},
		l(l) {
			e = x(l, 'DIV', { class: !0 });
			var p = S(e);
			t = x(p, 'P', { class: !0 });
			var r = S(t);
			(s = W(r, a)), r.forEach($), p.forEach($), this.h();
		},
		h() {
			_(t, 'class', 'text-[13px] text-muted-foreground'),
				_(e, 'class', 'flex flex-col items-center justify-center w-full h-full');
		},
		m(l, p) {
			j(l, e, p), m(e, t), m(t, s);
		},
		p(l, p) {
			p & 1 &&
				a !== (a = l[0] === 'metadata' ? 'No metadata available' : 'No headings found') &&
				Y(s, a);
		},
		i: fe,
		o: fe,
		d(l) {
			l && $(e);
		}
	};
}
function tt(n) {
	let e,
		t,
		a = Me(n[5]),
		s = [];
	for (let l = 0; l < a.length; l += 1) s[l] = Ve(ye(n, a, l));
	return {
		c() {
			(e = E('div')), (t = E('div'));
			for (let l = 0; l < s.length; l += 1) s[l].c();
			this.h();
		},
		l(l) {
			e = x(l, 'DIV', { class: !0 });
			var p = S(e);
			t = x(p, 'DIV', { class: !0 });
			var r = S(t);
			for (let c = 0; c < s.length; c += 1) s[c].l(r);
			r.forEach($), p.forEach($), this.h();
		},
		h() {
			_(t, 'class', 'flex flex-col gap-1.5 items-start w-full h-full overflow-auto px-4 py-2.5'),
				_(e, 'class', 'w-full h-full overflow-auto');
		},
		m(l, p) {
			j(l, e, p), m(e, t);
			for (let r = 0; r < s.length; r += 1) s[r] && s[r].m(t, null);
		},
		p(l, p) {
			if (p & 98) {
				a = Me(l[5]);
				let r;
				for (r = 0; r < a.length; r += 1) {
					const c = ye(l, a, r);
					s[r] ? s[r].p(c, p) : ((s[r] = Ve(c)), s[r].c(), s[r].m(t, null));
				}
				for (; r < s.length; r += 1) s[r].d(1);
				s.length = a.length;
			}
		},
		i: fe,
		o: fe,
		d(l) {
			l && $(e), Re(s, l);
		}
	};
}
function at(n) {
	let e,
		t,
		a,
		s,
		l,
		p,
		r,
		c,
		u,
		f,
		D,
		o,
		i,
		w,
		A,
		O = ke(n[2].fileMetadata.size) + '',
		P,
		U,
		g,
		b,
		B,
		v,
		I = n[2].editorMetadata.characters + '',
		R,
		X,
		F,
		H,
		he,
		le,
		ce = n[2].editorMetadata.words + '',
		pe,
		_e,
		G,
		Q,
		ve,
		J,
		Z;
	return (
		(a = new oe({
			props: {
				class: 'text-[13px] font-normal text-muted-foreground',
				$$slots: { default: [st] },
				$$scope: { ctx: n }
			}
		})),
		(l = new $e({
			props: {
				text: new Date(n[2].fileMetadata.createdAt).toLocaleString(),
				$$slots: { default: [nt] },
				$$scope: { ctx: n }
			}
		})),
		(c = new oe({
			props: {
				class: 'text-[13px] font-normal text-muted-foreground',
				$$slots: { default: [lt] },
				$$scope: { ctx: n }
			}
		})),
		(f = new $e({
			props: {
				text: new Date(n[2].fileMetadata.modifiedAt).toLocaleString(),
				$$slots: { default: [rt] },
				$$scope: { ctx: n }
			}
		})),
		(i = new oe({
			props: {
				class: 'text-[13px] font-normal text-muted-foreground',
				$$slots: { default: [ot] },
				$$scope: { ctx: n }
			}
		})),
		(b = new oe({
			props: {
				class: 'text-[13px] font-normal text-muted-foreground',
				$$slots: { default: [it] },
				$$scope: { ctx: n }
			}
		})),
		(H = new oe({
			props: {
				class: 'text-[13px] font-normal text-muted-foreground',
				$$slots: { default: [ft] },
				$$scope: { ctx: n }
			}
		})),
		(Q = new oe({
			props: {
				class: 'text-[13px] font-normal text-muted-foreground',
				$$slots: { default: [ut] },
				$$scope: { ctx: n }
			}
		})),
		(J = new $e({
			props: {
				text: 'Estimated read time based on 200 words per minute',
				$$slots: { default: [ct] },
				$$scope: { ctx: n }
			}
		})),
		{
			c() {
				(e = E('div')),
					(t = E('div')),
					z(a.$$.fragment),
					(s = L()),
					z(l.$$.fragment),
					(p = L()),
					(r = E('div')),
					z(c.$$.fragment),
					(u = L()),
					z(f.$$.fragment),
					(D = L()),
					(o = E('div')),
					z(i.$$.fragment),
					(w = L()),
					(A = E('span')),
					(P = C(O)),
					(U = L()),
					(g = E('div')),
					z(b.$$.fragment),
					(B = L()),
					(v = E('span')),
					(R = C(I)),
					(X = L()),
					(F = E('div')),
					z(H.$$.fragment),
					(he = L()),
					(le = E('span')),
					(pe = C(ce)),
					(_e = L()),
					(G = E('div')),
					z(Q.$$.fragment),
					(ve = L()),
					z(J.$$.fragment),
					this.h();
			},
			l(d) {
				e = x(d, 'DIV', { class: !0 });
				var h = S(e);
				t = x(h, 'DIV', { class: !0 });
				var ee = S(t);
				T(a.$$.fragment, ee),
					(s = N(ee)),
					T(l.$$.fragment, ee),
					ee.forEach($),
					(p = N(h)),
					(r = x(h, 'DIV', { class: !0 }));
				var K = S(r);
				T(c.$$.fragment, K),
					(u = N(K)),
					T(f.$$.fragment, K),
					K.forEach($),
					(D = N(h)),
					(o = x(h, 'DIV', { class: !0 }));
				var te = S(o);
				T(i.$$.fragment, te), (w = N(te)), (A = x(te, 'SPAN', { class: !0 }));
				var re = S(A);
				(P = W(re, O)), re.forEach($), te.forEach($), (U = N(h)), (g = x(h, 'DIV', { class: !0 }));
				var ae = S(g);
				T(b.$$.fragment, ae), (B = N(ae)), (v = x(ae, 'SPAN', { class: !0 }));
				var de = S(v);
				(R = W(de, I)), de.forEach($), ae.forEach($), (X = N(h)), (F = x(h, 'DIV', { class: !0 }));
				var se = S(F);
				T(H.$$.fragment, se), (he = N(se)), (le = x(se, 'SPAN', { class: !0 }));
				var me = S(le);
				(pe = W(me, ce)),
					me.forEach($),
					se.forEach($),
					(_e = N(h)),
					(G = x(h, 'DIV', { class: !0 }));
				var ne = S(G);
				T(Q.$$.fragment, ne),
					(ve = N(ne)),
					T(J.$$.fragment, ne),
					ne.forEach($),
					h.forEach($),
					this.h();
			},
			h() {
				_(t, 'class', 'flex flex-row items-center justify-between w-full h-6 cursor-default'),
					_(r, 'class', 'flex flex-row items-center justify-between w-full h-6 cursor-default'),
					_(A, 'class', 'text-[13px] text-secondary-foreground'),
					_(o, 'class', 'flex flex-row items-center justify-between w-full h-6 cursor-default'),
					_(v, 'class', 'text-[13px] text-secondary-foreground'),
					_(g, 'class', 'flex flex-row items-center justify-between w-full h-6 cursor-default'),
					_(le, 'class', 'text-[13px] text-secondary-foreground'),
					_(F, 'class', 'flex flex-row items-center justify-between w-full h-6 cursor-default'),
					_(G, 'class', 'flex flex-row items-center justify-between w-full h-6 cursor-default'),
					_(
						e,
						'class',
						'flex flex-col gap-1.5 items-start w-full px-4 py-2.5 h-full overflow-auto'
					);
			},
			m(d, h) {
				j(d, e, h),
					m(e, t),
					V(a, t, null),
					m(t, s),
					V(l, t, null),
					m(e, p),
					m(e, r),
					V(c, r, null),
					m(r, u),
					V(f, r, null),
					m(e, D),
					m(e, o),
					V(i, o, null),
					m(o, w),
					m(o, A),
					m(A, P),
					m(e, U),
					m(e, g),
					V(b, g, null),
					m(g, B),
					m(g, v),
					m(v, R),
					m(e, X),
					m(e, F),
					V(H, F, null),
					m(F, he),
					m(F, le),
					m(le, pe),
					m(e, _e),
					m(e, G),
					V(Q, G, null),
					m(G, ve),
					V(J, G, null),
					(Z = !0);
			},
			p(d, h) {
				const ee = {};
				h & 4194304 && (ee.$$scope = { dirty: h, ctx: d }), a.$set(ee);
				const K = {};
				h & 4 && (K.text = new Date(d[2].fileMetadata.createdAt).toLocaleString()),
					h & 4194312 && (K.$$scope = { dirty: h, ctx: d }),
					l.$set(K);
				const te = {};
				h & 4194304 && (te.$$scope = { dirty: h, ctx: d }), c.$set(te);
				const re = {};
				h & 4 && (re.text = new Date(d[2].fileMetadata.modifiedAt).toLocaleString()),
					h & 4194320 && (re.$$scope = { dirty: h, ctx: d }),
					f.$set(re);
				const ae = {};
				h & 4194304 && (ae.$$scope = { dirty: h, ctx: d }),
					i.$set(ae),
					(!Z || h & 4) && O !== (O = ke(d[2].fileMetadata.size) + '') && Y(P, O);
				const de = {};
				h & 4194304 && (de.$$scope = { dirty: h, ctx: d }),
					b.$set(de),
					(!Z || h & 4) && I !== (I = d[2].editorMetadata.characters + '') && Y(R, I);
				const se = {};
				h & 4194304 && (se.$$scope = { dirty: h, ctx: d }),
					H.$set(se),
					(!Z || h & 4) && ce !== (ce = d[2].editorMetadata.words + '') && Y(pe, ce);
				const me = {};
				h & 4194304 && (me.$$scope = { dirty: h, ctx: d }), Q.$set(me);
				const ne = {};
				h & 4194308 && (ne.$$scope = { dirty: h, ctx: d }), J.$set(ne);
			},
			i(d) {
				Z ||
					(M(a.$$.fragment, d),
					M(l.$$.fragment, d),
					M(c.$$.fragment, d),
					M(f.$$.fragment, d),
					M(i.$$.fragment, d),
					M(b.$$.fragment, d),
					M(H.$$.fragment, d),
					M(Q.$$.fragment, d),
					M(J.$$.fragment, d),
					(Z = !0));
			},
			o(d) {
				k(a.$$.fragment, d),
					k(l.$$.fragment, d),
					k(c.$$.fragment, d),
					k(f.$$.fragment, d),
					k(i.$$.fragment, d),
					k(b.$$.fragment, d),
					k(H.$$.fragment, d),
					k(Q.$$.fragment, d),
					k(J.$$.fragment, d),
					(Z = !1);
			},
			d(d) {
				d && $(e), y(a), y(l), y(c), y(f), y(i), y(b), y(H), y(Q), y(J);
			}
		}
	);
}
function Ve(n) {
	let e,
		t,
		a = n[19].text + '',
		s,
		l,
		p,
		r;
	function c() {
		return n[12](n[19]);
	}
	return {
		c() {
			(e = E('button')), (t = E('p')), (s = C(a)), (l = L()), this.h();
		},
		l(u) {
			e = x(u, 'BUTTON', { type: !0, class: !0, style: !0 });
			var f = S(e);
			t = x(f, 'P', { class: !0 });
			var D = S(t);
			(s = W(D, a)), D.forEach($), (l = N(f)), f.forEach($), this.h();
		},
		h() {
			_(t, 'class', 'truncate'),
				_(e, 'type', 'button'),
				_(
					e,
					'class',
					'flex flex-row items-center justify-between w-full min-h-[24px] h-6 text-[13px] truncate font-normal text-muted-foreground hover:text-primary transition-all'
				),
				we(e, 'padding-left', n[19].indent + 'rem');
		},
		m(u, f) {
			j(u, e, f), m(e, t), m(t, s), m(e, l), p || ((r = Ne(e, 'click', c)), (p = !0));
		},
		p(u, f) {
			(n = u),
				f & 32 && a !== (a = n[19].text + '') && Y(s, a),
				f & 32 && we(e, 'padding-left', n[19].indent + 'rem');
		},
		d(u) {
			u && $(e), (p = !1), r();
		}
	};
}
function st(n) {
	let e;
	return {
		c() {
			e = C('Created');
		},
		l(t) {
			e = W(t, 'Created');
		},
		m(t, a) {
			j(t, e, a);
		},
		d(t) {
			t && $(e);
		}
	};
}
function nt(n) {
	let e, t;
	return {
		c() {
			(e = E('span')), (t = C(n[3])), this.h();
		},
		l(a) {
			e = x(a, 'SPAN', { class: !0 });
			var s = S(e);
			(t = W(s, n[3])), s.forEach($), this.h();
		},
		h() {
			_(e, 'class', 'text-[13px] text-secondary-foreground');
		},
		m(a, s) {
			j(a, e, s), m(e, t);
		},
		p(a, s) {
			s & 8 && Y(t, a[3]);
		},
		d(a) {
			a && $(e);
		}
	};
}
function lt(n) {
	let e;
	return {
		c() {
			e = C('Modified');
		},
		l(t) {
			e = W(t, 'Modified');
		},
		m(t, a) {
			j(t, e, a);
		},
		d(t) {
			t && $(e);
		}
	};
}
function rt(n) {
	let e, t;
	return {
		c() {
			(e = E('span')), (t = C(n[4])), this.h();
		},
		l(a) {
			e = x(a, 'SPAN', { class: !0 });
			var s = S(e);
			(t = W(s, n[4])), s.forEach($), this.h();
		},
		h() {
			_(e, 'class', 'text-[13px] text-secondary-foreground');
		},
		m(a, s) {
			j(a, e, s), m(e, t);
		},
		p(a, s) {
			s & 16 && Y(t, a[4]);
		},
		d(a) {
			a && $(e);
		}
	};
}
function ot(n) {
	let e;
	return {
		c() {
			e = C('File Size');
		},
		l(t) {
			e = W(t, 'File Size');
		},
		m(t, a) {
			j(t, e, a);
		},
		d(t) {
			t && $(e);
		}
	};
}
function it(n) {
	let e;
	return {
		c() {
			e = C('Characters');
		},
		l(t) {
			e = W(t, 'Characters');
		},
		m(t, a) {
			j(t, e, a);
		},
		d(t) {
			t && $(e);
		}
	};
}
function ft(n) {
	let e;
	return {
		c() {
			e = C('Words');
		},
		l(t) {
			e = W(t, 'Words');
		},
		m(t, a) {
			j(t, e, a);
		},
		d(t) {
			t && $(e);
		}
	};
}
function ut(n) {
	let e;
	return {
		c() {
			e = C('Read Time');
		},
		l(t) {
			e = W(t, 'Read Time');
		},
		m(t, a) {
			j(t, e, a);
		},
		d(t) {
			t && $(e);
		}
	};
}
function ct(n) {
	let e,
		t = n[2].editorMetadata.avgReadingTime + '',
		a;
	return {
		c() {
			(e = E('span')), (a = C(t)), this.h();
		},
		l(s) {
			e = x(s, 'SPAN', { class: !0 });
			var l = S(e);
			(a = W(l, t)), l.forEach($), this.h();
		},
		h() {
			_(e, 'class', 'text-[13px] text-secondary-foreground');
		},
		m(s, l) {
			j(s, e, l), m(e, a);
		},
		p(s, l) {
			l & 4 && t !== (t = s[2].editorMetadata.avgReadingTime + '') && Y(a, t);
		},
		d(s) {
			s && $(e);
		}
	};
}
function dt(n) {
	let e, t, a, s, l, p, r, c, u, f, D, o, i, w, A;
	(l = new $e({
		props: { text: 'Metadata', side: 'bottom', $$slots: { default: [Ke] }, $$scope: { ctx: n } }
	})),
		(r = new $e({
			props: {
				text: 'Table of Contents',
				side: 'bottom',
				$$slots: { default: [Ze] },
				$$scope: { ctx: n }
			}
		}));
	const O = [at, tt, et],
		P = [];
	function U(g, b) {
		return g[2] && g[0] === 'metadata'
			? 0
			: g[0] === 'toc' && g[1] && g[1].length > 0 && g[5].length > 0
				? 1
				: 2;
	}
	return (
		(u = U(n)),
		(f = P[u] = O[u](n)),
		{
			c() {
				(e = E('div')),
					(t = E('div')),
					(a = L()),
					(s = E('div')),
					z(l.$$.fragment),
					(p = L()),
					z(r.$$.fragment),
					(c = L()),
					f.c(),
					this.h();
			},
			l(g) {
				e = x(g, 'DIV', { class: !0, style: !0 });
				var b = S(e);
				(t = x(b, 'DIV', { class: !0, role: !0 })),
					S(t).forEach($),
					(a = N(b)),
					(s = x(b, 'DIV', { class: !0 }));
				var B = S(s);
				T(l.$$.fragment, B),
					(p = N(B)),
					T(r.$$.fragment, B),
					B.forEach($),
					(c = N(b)),
					f.l(b),
					b.forEach($),
					this.h();
			},
			h() {
				_(
					t,
					'class',
					'h-full w-1 border-l cursor-col-resize absolute top-0 left-0 z-10 hover:bg-foreground/10 hover:delay-75 transition-all duration-200 active:bg-foreground/20 active:!cursor-col-resize'
				),
					_(t, 'role', 'presentation'),
					_(
						s,
						'class',
						'relative top-0 flex flex-row h-10 w-full border-b bg-background overflow-hidden items-center justify-center px-3.5 gap-2 shrink-0 transform transition-all translate-y-0'
					),
					_(
						e,
						'class',
						(D = ue(
							'fixed right-0 h-[calc(100vh-4.5rem)] flex flex-col justify-start items-center bg-background overflow-y-auto transform transition-transform duration-300',
							!n[8] && 'translate-x-full'
						))
					),
					_(e, 'style', (o = `width: ${n[7]}px`));
			},
			m(g, b) {
				j(g, e, b),
					m(e, t),
					m(e, a),
					m(e, s),
					V(l, s, null),
					m(s, p),
					V(r, s, null),
					m(e, c),
					P[u].m(e, null),
					(i = !0),
					w || ((A = Ne(t, 'mousedown', n[9])), (w = !0));
			},
			p(g, [b]) {
				const B = {};
				b & 4194305 && (B.$$scope = { dirty: b, ctx: g }), l.$set(B);
				const v = {};
				b & 4194305 && (v.$$scope = { dirty: b, ctx: g }), r.$set(v);
				let I = u;
				(u = U(g)),
					u === I
						? P[u].p(g, b)
						: (Pe(),
							k(P[I], 1, 1, () => {
								P[I] = null;
							}),
							je(),
							(f = P[u]),
							f ? f.p(g, b) : ((f = P[u] = O[u](g)), f.c()),
							M(f, 1),
							f.m(e, null)),
					(!i ||
						(b & 256 &&
							D !==
								(D = ue(
									'fixed right-0 h-[calc(100vh-4.5rem)] flex flex-col justify-start items-center bg-background overflow-y-auto transform transition-transform duration-300',
									!g[8] && 'translate-x-full'
								)))) &&
						_(e, 'class', D),
					(!i || (b & 128 && o !== (o = `width: ${g[7]}px`))) && _(e, 'style', o);
			},
			i(g) {
				i || (M(l.$$.fragment, g), M(r.$$.fragment, g), M(f), (i = !0));
			},
			o(g) {
				k(l.$$.fragment, g), k(r.$$.fragment, g), k(f), (i = !1);
			},
			d(g) {
				g && $(e), y(l), y(r), P[u].d(), (w = !1), A();
			}
		}
	);
}
function ze(n) {
	let e = Math.min(...n.map((t) => t.attributes.level));
	return n.map((t) => ({ text: t.textContent, indent: Math.max(0, t.attributes.level - e) }));
}
function mt(n, e, t) {
	let a, s, l, p, r;
	q(n, Se, (v) => t(6, (s = v))),
		q(n, Ee, (v) => t(14, (l = v))),
		q(n, be, (v) => t(7, (p = v))),
		q(n, ge, (v) => t(8, (r = v)));
	let c = 'metadata',
		u = null,
		f = null,
		D,
		o,
		i;
	const w = (v) => {
			ie.set(!0);
			const I = v.x,
				R = document.body.clientWidth;
			if (R - I < 100) {
				ie.set(!1), ge.set(!1);
				return;
			} else if (I > 100 && !r) {
				ie.set(!1), ge.set(!0);
				return;
			}
			R - I < 245 ||
				R - I > 500 ||
				(p - v.movementX >= 210 && p - v.movementX <= 500 && be.update((X) => X - v.movementX));
		},
		A = () => {
			ie.set(!0), s.commands.blur(), document.body.classList.toggle('cursor-col-resize');
			const v = () => {
				document.removeEventListener('mousemove', w),
					document.removeEventListener('mouseup', v),
					document.body.classList.remove('cursor-col-resize'),
					ie.set(!1);
			};
			document.addEventListener('mousemove', w), document.addEventListener('mouseup', v);
		};
	function O() {
		f &&
			c === 'metadata' &&
			(t(3, (D = Ie(f.fileMetadata.createdAt))), t(4, (o = Ie(f.fileMetadata.modifiedAt))));
	}
	const P = Ee.subscribe(async (v) => {
			v
				? (t(1, (u = s.$nodes('heading'))), t(2, (f = await De(v))))
				: (t(1, (u = null)), t(2, (f = null)));
		}),
		U = Se.subscribeToSaveEvents(async () => {
			c === 'metadata'
				? t(2, (f = await De(l)))
				: c === 'toc' && (t(1, (u = s.$nodes('heading'))), u && t(5, (a = ze(u))));
		});
	Be(() => {
		i = setInterval(O, 1e3);
	}),
		Oe(() => {
			U(), P(), clearInterval(i);
		});
	const g = () => {
			t(0, (c = 'metadata'));
		},
		b = () => {
			t(0, (c = 'toc'));
		},
		B = (v) => {
			if (!u) return;
			s.chain().focus('end', { scrollIntoView: !1 }).setTextSelection(u[a.indexOf(v)].pos).run();
			const { node: I } = s.view.domAtPos(s.state.selection.anchor);
			if (I instanceof HTMLElement) {
				const R = I.getBoundingClientRect(),
					X = R.top < 0,
					F = R.bottom > window.innerHeight;
				if (X || F) {
					const H = X ? 'auto' : 'smooth';
					I.scrollIntoView({ behavior: H, block: 'center' });
				}
			}
		};
	return (
		(n.$$.update = () => {
			n.$$.dirty & 5 && f && c === 'metadata' && O(),
				n.$$.dirty & 3 && t(5, (a = c === 'toc' && u ? ze(u) : []));
		}),
		[c, u, f, D, o, a, s, p, r, A, g, b, B]
	);
}
class $t extends Le {
	constructor(e) {
		super(), Te(this, e, mt, dt, Ae, {});
	}
}
function pt(n) {
	let e, t, a, s, l, p, r, c;
	var u = n[0];
	function f(i, w) {
		return {};
	}
	u && (t = xe(u, f()));
	const D = n[8].default,
		o = Fe(D, n, n[7], null);
	return (
		(r = new $t({})),
		{
			c() {
				(e = E('div')),
					t && z(t.$$.fragment),
					(a = L()),
					(s = E('div')),
					o && o.c(),
					(p = L()),
					z(r.$$.fragment),
					this.h();
			},
			l(i) {
				e = x(i, 'DIV', { class: !0 });
				var w = S(e);
				t && T(t.$$.fragment, w), (a = N(w)), (s = x(w, 'DIV', { class: !0, style: !0 }));
				var A = S(s);
				o && o.l(A), A.forEach($), (p = N(w)), T(r.$$.fragment, w), w.forEach($), this.h();
			},
			h() {
				_(s, 'class', 'h-full overflow-y-auto'),
					_(
						s,
						'style',
						(l = `
					margin-left: ${n[1] ? n[2] : 0}px; 
					margin-right: ${n[3] ? n[4] : 0}px; 
					transition: ${n[5] || n[6] ? 'none' : 'margin-left 300ms, margin-right 300ms'}
			`)
					),
					_(
						e,
						'class',
						'flex flex-col w-full h-[calc(100vh-4.5rem)] bg-secondary-background ml-12 overflow-hidden'
					);
			},
			m(i, w) {
				j(i, e, w),
					t && V(t, e, null),
					m(e, a),
					m(e, s),
					o && o.m(s, null),
					m(e, p),
					V(r, e, null),
					(c = !0);
			},
			p(i, [w]) {
				if (w & 1 && u !== (u = i[0])) {
					if (t) {
						Pe();
						const A = t;
						k(A.$$.fragment, 1, 0, () => {
							y(A, 1);
						}),
							je();
					}
					u ? ((t = xe(u, f())), z(t.$$.fragment), M(t.$$.fragment, 1), V(t, e, a)) : (t = null);
				}
				o && o.p && (!c || w & 128) && He(o, D, i, i[7], c ? Ue(D, i[7], w, null) : qe(i[7]), null),
					(!c ||
						(w & 126 &&
							l !==
								(l = `
					margin-left: ${i[1] ? i[2] : 0}px; 
					margin-right: ${i[3] ? i[4] : 0}px; 
					transition: ${i[5] || i[6] ? 'none' : 'margin-left 300ms, margin-right 300ms'}
			`))) &&
						_(s, 'style', l);
			},
			i(i) {
				c || (t && M(t.$$.fragment, i), M(o, i), M(r.$$.fragment, i), (c = !0));
			},
			o(i) {
				t && k(t.$$.fragment, i), k(o, i), k(r.$$.fragment, i), (c = !1);
			},
			d(i) {
				i && $(e), t && y(t), o && o.d(i), y(r);
			}
		}
	);
}
function gt(n, e, t) {
	let a, s, l, p, r, c;
	q(n, Xe, (o) => t(1, (a = o))),
		q(n, Ge, (o) => t(2, (s = o))),
		q(n, ge, (o) => t(3, (l = o))),
		q(n, be, (o) => t(4, (p = o))),
		q(n, Qe, (o) => t(5, (r = o))),
		q(n, ie, (o) => t(6, (c = o)));
	let { $$slots: u = {}, $$scope: f } = e,
		{ sidebar: D } = e;
	return (
		(n.$$set = (o) => {
			'sidebar' in o && t(0, (D = o.sidebar)), '$$scope' in o && t(7, (f = o.$$scope));
		}),
		[D, a, s, l, p, r, c, f, u]
	);
}
class xt extends Le {
	constructor(e) {
		super(), Te(this, e, gt, pt, Ae, { sidebar: 0 });
	}
}
export { xt as L };
