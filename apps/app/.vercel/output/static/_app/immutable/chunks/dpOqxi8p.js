import {
	s as q,
	E as O,
	x as k,
	d as g,
	Q as P,
	F as Q,
	G as R,
	H as T,
	R as v,
	i as W,
	b as w,
	S as B,
	e as I,
	L as b,
	T as F,
	z as S,
	A as z
} from './wdwkOUVI.js';
import { S as y, i as D, t as J, a as K } from './JshcQj11.js';
import { n as C } from './DZQ4DMzf.js';
import { g as G } from './SV1JYOhp.js';
function p(o, e) {
	return o.length !== e.length ? !1 : o.every((n, s) => n === e[s]);
}
/**
 * @license lucide-svelte v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const E = {
	xmlns: 'http://www.w3.org/2000/svg',
	width: 24,
	height: 24,
	viewBox: '0 0 24 24',
	fill: 'none',
	stroke: 'currentColor',
	'stroke-width': 2,
	'stroke-linecap': 'round',
	'stroke-linejoin': 'round'
};
function A(o, e, n) {
	const s = o.slice();
	return (s[11] = e[n][0]), (s[12] = e[n][1]), s;
}
function N(o) {
	let e,
		n = [o[12]],
		s = {};
	for (let i = 0; i < n.length; i += 1) s = k(s, n[i]);
	return {
		c() {
			(e = F(o[11])), this.h();
		},
		l(i) {
			(e = B(i, o[11], {})), I(e).forEach(g), this.h();
		},
		h() {
			v(e, s);
		},
		m(i, r) {
			W(i, e, r);
		},
		p(i, r) {
			v(e, (s = G(n, [r & 32 && i[12]])));
		},
		d(i) {
			i && g(e);
		}
	};
}
function j(o) {
	let e = o[11],
		n,
		s = o[11] && N(o);
	return {
		c() {
			s && s.c(), (n = b());
		},
		l(i) {
			s && s.l(i), (n = b());
		},
		m(i, r) {
			s && s.m(i, r), W(i, n, r);
		},
		p(i, r) {
			i[11]
				? e
					? q(e, i[11])
						? (s.d(1), (s = N(i)), (e = i[11]), s.c(), s.m(n.parentNode, n))
						: s.p(i, r)
					: ((s = N(i)), (e = i[11]), s.c(), s.m(n.parentNode, n))
				: e && (s.d(1), (s = null), (e = i[11]));
		},
		d(i) {
			i && g(n), s && s.d(i);
		}
	};
}
function M(o) {
	let e,
		n,
		s,
		i,
		r,
		f = C(o[5]),
		a = [];
	for (let t = 0; t < f.length; t += 1) a[t] = j(A(o, f, t));
	const d = o[10].default,
		h = O(d, o, o[9], null);
	let m = [
			E,
			o[7],
			{ width: o[2] },
			{ height: o[2] },
			{ stroke: o[1] },
			{ 'stroke-width': (s = o[4] ? (Number(o[3]) * 24) / Number(o[2]) : o[3]) },
			{ class: (i = o[6]('lucide-icon', 'lucide', o[0] ? `lucide-${o[0]}` : '', o[8].class)) }
		],
		_ = {};
	for (let t = 0; t < m.length; t += 1) _ = k(_, m[t]);
	return {
		c() {
			e = F('svg');
			for (let t = 0; t < a.length; t += 1) a[t].c();
			(n = b()), h && h.c(), this.h();
		},
		l(t) {
			e = B(t, 'svg', { width: !0, height: !0, stroke: !0, 'stroke-width': !0, class: !0 });
			var u = I(e);
			for (let l = 0; l < a.length; l += 1) a[l].l(u);
			(n = b()), h && h.l(u), u.forEach(g), this.h();
		},
		h() {
			v(e, _);
		},
		m(t, u) {
			W(t, e, u);
			for (let l = 0; l < a.length; l += 1) a[l] && a[l].m(e, null);
			w(e, n), h && h.m(e, null), (r = !0);
		},
		p(t, [u]) {
			if (u & 32) {
				f = C(t[5]);
				let l;
				for (l = 0; l < f.length; l += 1) {
					const c = A(t, f, l);
					a[l] ? a[l].p(c, u) : ((a[l] = j(c)), a[l].c(), a[l].m(e, n));
				}
				for (; l < a.length; l += 1) a[l].d(1);
				a.length = f.length;
			}
			h && h.p && (!r || u & 512) && Q(h, d, t, t[9], r ? T(d, t[9], u, null) : R(t[9]), null),
				v(
					e,
					(_ = G(m, [
						E,
						u & 128 && t[7],
						(!r || u & 4) && { width: t[2] },
						(!r || u & 4) && { height: t[2] },
						(!r || u & 2) && { stroke: t[1] },
						(!r || (u & 28 && s !== (s = t[4] ? (Number(t[3]) * 24) / Number(t[2]) : t[3]))) && {
							'stroke-width': s
						},
						(!r ||
							(u & 257 &&
								i !==
									(i = t[6](
										'lucide-icon',
										'lucide',
										t[0] ? `lucide-${t[0]}` : '',
										t[8].class
									)))) && { class: i }
					]))
				);
		},
		i(t) {
			r || (K(h, t), (r = !0));
		},
		o(t) {
			J(h, t), (r = !1);
		},
		d(t) {
			t && g(e), P(a, t), h && h.d(t);
		}
	};
}
function U(o, e, n) {
	const s = ['name', 'color', 'size', 'strokeWidth', 'absoluteStrokeWidth', 'iconNode'];
	let i = S(e, s),
		{ $$slots: r = {}, $$scope: f } = e,
		{ name: a = void 0 } = e,
		{ color: d = 'currentColor' } = e,
		{ size: h = 24 } = e,
		{ strokeWidth: m = 2 } = e,
		{ absoluteStrokeWidth: _ = !1 } = e,
		{ iconNode: t = [] } = e;
	const u = (...l) => l.filter((c, H, L) => !!c && L.indexOf(c) === H).join(' ');
	return (
		(o.$$set = (l) => {
			n(8, (e = k(k({}, e), z(l)))),
				n(7, (i = S(e, s))),
				'name' in l && n(0, (a = l.name)),
				'color' in l && n(1, (d = l.color)),
				'size' in l && n(2, (h = l.size)),
				'strokeWidth' in l && n(3, (m = l.strokeWidth)),
				'absoluteStrokeWidth' in l && n(4, (_ = l.absoluteStrokeWidth)),
				'iconNode' in l && n(5, (t = l.iconNode)),
				'$$scope' in l && n(9, (f = l.$$scope));
		}),
		(e = z(e)),
		[a, d, h, m, _, t, u, i, e, f, r]
	);
}
class x extends y {
	constructor(e) {
		super(),
			D(this, e, U, M, q, {
				name: 0,
				color: 1,
				size: 2,
				strokeWidth: 3,
				absoluteStrokeWidth: 4,
				iconNode: 5
			});
	}
}
export { x as I, p as a };
