import {
	s as Q,
	D as C,
	y as Y,
	d,
	z as Z,
	i as m,
	b as k,
	q as E,
	c as y,
	e as D,
	g as A,
	h as I,
	j as S,
	G as L,
	H as w,
	a as N,
	f as P,
	C as q,
	t as j,
	I as p,
	r as x,
	n as V
} from './CZvU1ekx.js';
import {
	S as R,
	i as T,
	f as $,
	d as z,
	t as G,
	a as H,
	m as M,
	c as B,
	b as F
} from './ZuwjM_kn.js';
import { g as ee, a as te } from './CTLOy2q2.js';
import { I as le } from './BRhspWxV.js';
import { L as re } from './oMhdKTtd.js';
function J(a) {
	let e,
		t = '*';
	return {
		c() {
			(e = I('span')), (e.textContent = t), this.h();
		},
		l(r) {
			(e = y(r, 'SPAN', { class: !0, 'data-svelte-h': !0 })),
				x(e) !== 'svelte-1n3raya' && (e.textContent = t),
				this.h();
		},
		h() {
			E(e, 'class', 'text-red-500');
		},
		m(r, l) {
			m(r, e, l);
		},
		d(r) {
			r && d(e);
		}
	};
}
function ae(a) {
	let e,
		t,
		r,
		l = a[3] && J();
	return {
		c() {
			(e = j(a[1])), (t = S()), l && l.c(), (r = q());
		},
		l(s) {
			(e = P(s, a[1])), (t = A(s)), l && l.l(s), (r = q());
		},
		m(s, u) {
			m(s, e, u), m(s, t, u), l && l.m(s, u), m(s, r, u);
		},
		p(s, u) {
			u & 2 && N(e, s[1]),
				s[3] ? l || ((l = J()), l.c(), l.m(r.parentNode, r)) : l && (l.d(1), (l = null));
		},
		d(s) {
			s && (d(e), d(t), d(r)), l && l.d(s);
		}
	};
}
function K(a) {
	let e, t;
	return {
		c() {
			(e = I('p')), (t = j(a[2])), this.h();
		},
		l(r) {
			e = y(r, 'P', { class: !0 });
			var l = D(e);
			(t = P(l, a[2])), l.forEach(d), this.h();
		},
		h() {
			E(e, 'class', 'text-sm text-red-600');
		},
		m(r, l) {
			m(r, e, l), k(e, t);
		},
		p(r, l) {
			l & 4 && N(t, r[2]);
		},
		d(r) {
			r && d(e);
		}
	};
}
function ie(a) {
	let e, t, r, l, s, u, h;
	t = new re({
		props: {
			for: a[7],
			class: 'text-sm font-medium',
			$$slots: { default: [ae] },
			$$scope: { ctx: a }
		}
	});
	const _ = [
		{ id: a[4] },
		{ type: a[5] },
		{ placeholder: a[6] },
		{ required: a[3] },
		{ class: 'w-full ' + (a[2] ? 'border-red-500 focus-visible:ring-red-500' : '') },
		a[8]
	];
	function g(i) {
		a[9](i);
	}
	let c = {};
	for (let i = 0; i < _.length; i += 1) c = C(c, _[i]);
	a[0] !== void 0 && (c.value = a[0]),
		(l = new le({ props: c })),
		Y.push(() => $(l, 'value', g)),
		l.$on('blur', a[10]),
		l.$on('change', a[11]),
		l.$on('input', a[12]),
		l.$on('focus', a[13]),
		l.$on('keydown', a[14]);
	let f = a[2] && K(a);
	return {
		c() {
			(e = I('div')),
				F(t.$$.fragment),
				(r = S()),
				F(l.$$.fragment),
				(u = S()),
				f && f.c(),
				this.h();
		},
		l(i) {
			e = y(i, 'DIV', { class: !0 });
			var o = D(e);
			B(t.$$.fragment, o),
				(r = A(o)),
				B(l.$$.fragment, o),
				(u = A(o)),
				f && f.l(o),
				o.forEach(d),
				this.h();
		},
		h() {
			E(e, 'class', 'space-y-2');
		},
		m(i, o) {
			m(i, e, o), M(t, e, null), k(e, r), M(l, e, null), k(e, u), f && f.m(e, null), (h = !0);
		},
		p(i, [o]) {
			const b = {};
			o & 128 && (b.for = i[7]), o & 32778 && (b.$$scope = { dirty: o, ctx: i }), t.$set(b);
			const v =
				o & 380
					? ee(_, [
							o & 16 && { id: i[4] },
							o & 32 && { type: i[5] },
							o & 64 && { placeholder: i[6] },
							o & 8 && { required: i[3] },
							o & 4 && {
								class: 'w-full ' + (i[2] ? 'border-red-500 focus-visible:ring-red-500' : '')
							},
							o & 256 && te(i[8])
						])
					: {};
			!s && o & 1 && ((s = !0), (v.value = i[0]), Z(() => (s = !1))),
				l.$set(v),
				i[2] ? (f ? f.p(i, o) : ((f = K(i)), f.c(), f.m(e, null))) : f && (f.d(1), (f = null));
		},
		i(i) {
			h || (H(t.$$.fragment, i), H(l.$$.fragment, i), (h = !0));
		},
		o(i) {
			G(t.$$.fragment, i), G(l.$$.fragment, i), (h = !1);
		},
		d(i) {
			i && d(e), z(t), z(l), f && f.d();
		}
	};
}
function ne(a, e, t) {
	let r;
	const l = ['value', 'label', 'error', 'required', 'id', 'type', 'placeholder'];
	let s = L(e, l),
		{ value: u = '' } = e,
		{ label: h } = e,
		{ error: _ = '' } = e,
		{ required: g = !1 } = e,
		{ id: c = '' } = e,
		{ type: f = 'text' } = e,
		{ placeholder: i = '' } = e;
	function o(n) {
		(u = n), t(0, u);
	}
	function b(n) {
		p.call(this, a, n);
	}
	function v(n) {
		p.call(this, a, n);
	}
	function U(n) {
		p.call(this, a, n);
	}
	function W(n) {
		p.call(this, a, n);
	}
	function X(n) {
		p.call(this, a, n);
	}
	return (
		(a.$$set = (n) => {
			(e = C(C({}, e), w(n))),
				t(8, (s = L(e, l))),
				'value' in n && t(0, (u = n.value)),
				'label' in n && t(1, (h = n.label)),
				'error' in n && t(2, (_ = n.error)),
				'required' in n && t(3, (g = n.required)),
				'id' in n && t(4, (c = n.id)),
				'type' in n && t(5, (f = n.type)),
				'placeholder' in n && t(6, (i = n.placeholder));
		}),
		(a.$$.update = () => {
			a.$$.dirty & 16 &&
				t(7, (r = c || `auth-input-${Math.random().toString(36).substring(2, 9)}`));
		}),
		[u, h, _, g, c, f, i, r, s, o, b, v, U, W, X]
	);
}
class he extends R {
	constructor(e) {
		super(),
			T(this, e, ne, ie, Q, {
				value: 0,
				label: 1,
				error: 2,
				required: 3,
				id: 4,
				type: 5,
				placeholder: 6
			});
	}
}
function O(a) {
	let e, t;
	return {
		c() {
			(e = I('div')), (t = j(a[0])), this.h();
		},
		l(r) {
			e = y(r, 'DIV', { class: !0 });
			var l = D(e);
			(t = P(l, a[0])), l.forEach(d), this.h();
		},
		h() {
			E(
				e,
				'class',
				'text-sm text-red-600 bg-red-50 dark:bg-red-950/20 dark:text-red-400 p-3 rounded-md border border-red-200 dark:border-red-800'
			);
		},
		m(r, l) {
			m(r, e, l), k(e, t);
		},
		p(r, l) {
			l & 1 && N(t, r[0]);
		},
		d(r) {
			r && d(e);
		}
	};
}
function se(a) {
	let e,
		t = a[0] && O(a);
	return {
		c() {
			t && t.c(), (e = q());
		},
		l(r) {
			t && t.l(r), (e = q());
		},
		m(r, l) {
			t && t.m(r, l), m(r, e, l);
		},
		p(r, [l]) {
			r[0]
				? t
					? t.p(r, l)
					: ((t = O(r)), t.c(), t.m(e.parentNode, e))
				: t && (t.d(1), (t = null));
		},
		i: V,
		o: V,
		d(r) {
			r && d(e), t && t.d(r);
		}
	};
}
function oe(a, e, t) {
	let r,
		{ error: l = null } = e,
		{ localError: s = '' } = e;
	return (
		(a.$$set = (u) => {
			'error' in u && t(1, (l = u.error)), 'localError' in u && t(2, (s = u.localError));
		}),
		(a.$$.update = () => {
			a.$$.dirty & 6 && t(0, (r = s || l));
		}),
		[r, l, s]
	);
}
class _e extends R {
	constructor(e) {
		super(), T(this, e, oe, se, Q, { error: 1, localError: 2 });
	}
}
export { he as A, _e as a };
