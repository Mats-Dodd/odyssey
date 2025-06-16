import {
	s as H,
	l as z,
	d as m,
	a as S,
	u as B,
	m as G,
	o as J,
	i as w,
	b as d,
	q as k,
	c as L,
	e as T,
	f as j,
	g as V,
	h as E,
	t as q,
	j as A
} from './CZvU1ekx.js';
import { S as K, i as M, t as N, a as O } from './ZuwjM_kn.js';
function C(a) {
	let e, t;
	return {
		c() {
			(e = E('p')), (t = q(a[1])), this.h();
		},
		l(l) {
			e = L(l, 'P', { class: !0 });
			var s = T(e);
			(t = j(s, a[1])), s.forEach(m), this.h();
		},
		h() {
			k(e, 'class', 'text-muted-foreground mt-2');
		},
		m(l, s) {
			w(l, e, s), d(e, t);
		},
		p(l, s) {
			s & 2 && S(t, l[1]);
		},
		d(l) {
			l && m(e);
		}
	};
}
function F(a) {
	let e, t, l, s, f, v;
	return {
		c() {
			(e = E('div')), (t = E('p')), (l = q(a[2])), (s = A()), (f = E('a')), (v = q(a[4])), this.h();
		},
		l(c) {
			e = L(c, 'DIV', { class: !0 });
			var r = T(e);
			t = L(r, 'P', { class: !0 });
			var b = T(t);
			(l = j(b, a[2])), (s = V(b)), (f = L(b, 'A', { href: !0, class: !0 }));
			var h = T(f);
			(v = j(h, a[4])), h.forEach(m), b.forEach(m), r.forEach(m), this.h();
		},
		h() {
			k(f, 'href', a[3]),
				k(f, 'class', 'text-primary hover:underline'),
				k(t, 'class', 'text-sm text-muted-foreground'),
				k(e, 'class', 'text-center');
		},
		m(c, r) {
			w(c, e, r), d(e, t), d(t, l), d(t, s), d(t, f), d(f, v);
		},
		p(c, r) {
			r & 4 && S(l, c[2]), r & 16 && S(v, c[4]), r & 8 && k(f, 'href', c[3]);
		},
		d(c) {
			c && m(e);
		}
	};
}
function Q(a) {
	let e,
		t,
		l,
		s,
		f,
		v,
		c,
		r,
		b,
		h,
		n = a[1] && C(a);
	const u = a[8].default,
		_ = z(u, a, a[7], null);
	let o = a[2] && a[3] && a[4] && F(a);
	return {
		c() {
			(e = E('div')),
				(t = E('div')),
				(l = E('div')),
				(s = E('h1')),
				(f = q(a[0])),
				(v = A()),
				n && n.c(),
				(c = A()),
				(r = E('div')),
				_ && _.c(),
				(b = A()),
				o && o.c(),
				this.h();
		},
		l(i) {
			e = L(i, 'DIV', { class: !0 });
			var g = T(e);
			t = L(g, 'DIV', { class: !0 });
			var D = T(t);
			l = L(D, 'DIV', { class: !0 });
			var I = T(l);
			s = L(I, 'H1', { class: !0 });
			var P = T(s);
			(f = j(P, a[0])),
				P.forEach(m),
				(v = V(I)),
				n && n.l(I),
				I.forEach(m),
				(c = V(D)),
				(r = L(D, 'DIV', { class: !0 }));
			var y = T(r);
			_ && _.l(y), y.forEach(m), (b = V(D)), o && o.l(D), D.forEach(m), g.forEach(m), this.h();
		},
		h() {
			k(s, 'class', 'text-2xl font-bold'),
				k(l, 'class', 'text-center'),
				k(r, 'class', 'space-y-4'),
				k(t, 'class', 'w-full max-w-md space-y-6'),
				k(e, 'class', 'flex min-h-screen items-center justify-center p-4');
		},
		m(i, g) {
			w(i, e, g),
				d(e, t),
				d(t, l),
				d(l, s),
				d(s, f),
				d(l, v),
				n && n.m(l, null),
				d(t, c),
				d(t, r),
				_ && _.m(r, null),
				d(t, b),
				o && o.m(t, null),
				(h = !0);
		},
		p(i, [g]) {
			(!h || g & 1) && S(f, i[0]),
				i[1] ? (n ? n.p(i, g) : ((n = C(i)), n.c(), n.m(l, null))) : n && (n.d(1), (n = null)),
				_ && _.p && (!h || g & 128) && B(_, u, i, i[7], h ? J(u, i[7], g, null) : G(i[7]), null),
				i[2] && i[3] && i[4]
					? o
						? o.p(i, g)
						: ((o = F(i)), o.c(), o.m(t, null))
					: o && (o.d(1), (o = null));
		},
		i(i) {
			h || (O(_, i), (h = !0));
		},
		o(i) {
			N(_, i), (h = !1);
		},
		d(i) {
			i && m(e), n && n.d(), _ && _.d(i), o && o.d();
		}
	};
}
function R(a, e, t) {
	let { $$slots: l = {}, $$scope: s } = e,
		{ title: f } = e,
		{ subtitle: v = '' } = e;
	const c = 'Submit',
		r = !1;
	let { alternativeText: b = '' } = e,
		{ alternativeLink: h = '' } = e,
		{ alternativeLinkText: n = '' } = e;
	return (
		(a.$$set = (u) => {
			'title' in u && t(0, (f = u.title)),
				'subtitle' in u && t(1, (v = u.subtitle)),
				'alternativeText' in u && t(2, (b = u.alternativeText)),
				'alternativeLink' in u && t(3, (h = u.alternativeLink)),
				'alternativeLinkText' in u && t(4, (n = u.alternativeLinkText)),
				'$$scope' in u && t(7, (s = u.$$scope));
		}),
		[f, v, b, h, n, c, r, s, l]
	);
}
class X extends K {
	constructor(e) {
		super(),
			M(this, e, R, Q, H, {
				title: 0,
				subtitle: 1,
				submitText: 5,
				isLoading: 6,
				alternativeText: 2,
				alternativeLink: 3,
				alternativeLinkText: 4
			});
	}
	get submitText() {
		return this.$$.ctx[5];
	}
	get isLoading() {
		return this.$$.ctx[6];
	}
}
export { X as A };
