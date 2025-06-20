var H = Object.defineProperty;
var J = (t, e, n) =>
	e in t ? H(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n);
var I = (t, e, n) => J(t, typeof e != 'symbol' ? e + '' : e, n);
import {
	n as w,
	Y as Q,
	Z as T,
	d as Y,
	v as E,
	K as j,
	_ as N,
	$ as O,
	a0 as W,
	a1 as X,
	a2 as tt,
	a3 as U,
	e as et,
	a4 as nt,
	a5 as V,
	a6 as it,
	a7 as st,
	a8 as rt,
	a9 as at,
	aa as ot,
	ab as ft
} from './CZvU1ekx.js';
const Z = typeof window < 'u';
let B = Z ? () => window.performance.now() : () => Date.now(),
	D = Z ? (t) => requestAnimationFrame(t) : w;
const k = new Set();
function q(t) {
	k.forEach((e) => {
		e.c(t) || (k.delete(e), e.f());
	}),
		k.size !== 0 && D(q);
}
function F(t) {
	let e;
	return (
		k.size === 0 && D(q),
		{
			promise: new Promise((n) => {
				k.add((e = { c: t, f: n }));
			}),
			abort() {
				k.delete(e);
			}
		}
	);
}
const P = new Map();
let R = 0;
function ut(t) {
	let e = 5381,
		n = t.length;
	for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
	return e >>> 0;
}
function lt(t, e) {
	const n = { stylesheet: T(e), rules: {} };
	return P.set(t, n), n;
}
function z(t, e, n, s, u, a, l, i = 0) {
	const c = 16.666 / s;
	let r = `{
`;
	for (let $ = 0; $ <= 1; $ += c) {
		const m = e + (n - e) * a($);
		r +=
			$ * 100 +
			`%{${l(m, 1 - m)}}
`;
	}
	const d =
			r +
			`100% {${l(n, 1 - n)}}
}`,
		f = `__svelte_${ut(d)}_${i}`,
		g = Q(t),
		{ stylesheet: h, rules: o } = P.get(g) || lt(g, t);
	o[f] || ((o[f] = !0), h.insertRule(`@keyframes ${f} ${d}`, h.cssRules.length));
	const _ = t.style.animation || '';
	return (t.style.animation = `${_ ? `${_}, ` : ''}${f} ${s}ms linear ${u}ms 1 both`), (R += 1), f;
}
function A(t, e) {
	const n = (t.style.animation || '').split(', '),
		s = n.filter(e ? (a) => a.indexOf(e) < 0 : (a) => a.indexOf('__svelte') === -1),
		u = n.length - s.length;
	u && ((t.style.animation = s.join(', ')), (R -= u), R || ct());
}
function ct() {
	D(() => {
		R ||
			(P.forEach((t) => {
				const { ownerNode: e } = t.stylesheet;
				e && Y(e);
			}),
			P.clear());
	});
}
let S;
function K() {
	return (
		S ||
			((S = Promise.resolve()),
			S.then(() => {
				S = null;
			})),
		S
	);
}
function v(t, e, n) {
	t.dispatchEvent(W(`${e ? 'intro' : 'outro'}${n}`));
}
const M = new Set();
let p;
function yt() {
	p = { r: 0, c: [], p };
}
function xt() {
	p.r || E(p.c), (p = p.p);
}
function dt(t, e) {
	t && t.i && (M.delete(t), t.i(e));
}
function vt(t, e, n, s) {
	if (t && t.o) {
		if (M.has(t)) return;
		M.add(t),
			p.c.push(() => {
				M.delete(t), s && (n && t.d(1), s());
			}),
			t.o(e);
	} else s && s();
}
const L = { duration: 0 };
function wt(t, e, n) {
	const s = { direction: 'in' };
	let u = e(t, n, s),
		a = !1,
		l,
		i,
		c = 0;
	function r() {
		l && A(t, l);
	}
	function d() {
		const { delay: g = 0, duration: h = 300, easing: o = N, tick: _ = w, css: $ } = u || L;
		$ && (l = z(t, 0, 1, h, g, o, $, c++)), _(0, 1);
		const m = B() + g,
			y = m + h;
		i && i.abort(),
			(a = !0),
			O(() => v(t, !0, 'start')),
			(i = F((x) => {
				if (a) {
					if (x >= y) return _(1, 0), v(t, !0, 'end'), r(), (a = !1);
					if (x >= m) {
						const b = o((x - m) / h);
						_(b, 1 - b);
					}
				}
				return a;
			}));
	}
	let f = !1;
	return {
		start() {
			f || ((f = !0), A(t), j(u) ? ((u = u(s)), K().then(d)) : d());
		},
		invalidate() {
			f = !1;
		},
		end() {
			a && (r(), (a = !1));
		}
	};
}
function bt(t, e, n) {
	const s = { direction: 'out' };
	let u = e(t, n, s),
		a = !0,
		l;
	const i = p;
	i.r += 1;
	let c;
	function r() {
		const { delay: d = 0, duration: f = 300, easing: g = N, tick: h = w, css: o } = u || L;
		o && (l = z(t, 1, 0, f, d, g, o));
		const _ = B() + d,
			$ = _ + f;
		O(() => v(t, !1, 'start')),
			'inert' in t && ((c = t.inert), (t.inert = !0)),
			F((m) => {
				if (a) {
					if (m >= $) return h(0, 1), v(t, !1, 'end'), --i.r || E(i.c), !1;
					if (m >= _) {
						const y = g((m - _) / f);
						h(1 - y, y);
					}
				}
				return a;
			});
	}
	return (
		j(u)
			? K().then(() => {
					(u = u(s)), r();
				})
			: r(),
		{
			end(d) {
				d && 'inert' in t && (t.inert = c),
					d && u.tick && u.tick(1, 0),
					a && (l && A(t, l), (a = !1));
			}
		}
	);
}
function kt(t, e, n, s) {
	let a = e(t, n, { direction: 'both' }),
		l = s ? 0 : 1,
		i = null,
		c = null,
		r = null,
		d;
	function f() {
		r && A(t, r);
	}
	function g(o, _) {
		const $ = o.b - l;
		return (
			(_ *= Math.abs($)),
			{ a: l, b: o.b, d: $, duration: _, start: o.start, end: o.start + _, group: o.group }
		);
	}
	function h(o) {
		const { delay: _ = 0, duration: $ = 300, easing: m = N, tick: y = w, css: x } = a || L,
			b = { start: B() + _, b: o };
		o || ((b.group = p), (p.r += 1)),
			'inert' in t && (o ? d !== void 0 && (t.inert = d) : ((d = t.inert), (t.inert = !0))),
			i || c
				? (c = b)
				: (x && (f(), (r = z(t, l, o, $, _, m, x))),
					o && y(0, 1),
					(i = g(b, $)),
					O(() => v(t, o, 'start')),
					F((C) => {
						if (
							(c &&
								C > c.start &&
								((i = g(c, $)),
								(c = null),
								v(t, i.b, 'start'),
								x && (f(), (r = z(t, l, i.b, i.duration, 0, m, a.css)))),
							i)
						) {
							if (C >= i.end)
								y((l = i.b), 1 - l),
									v(t, i.b, 'end'),
									c || (i.b ? f() : --i.group.r || E(i.group.c)),
									(i = null);
							else if (C >= i.start) {
								const G = C - i.start;
								(l = i.a + i.d * m(G / i.duration)), y(l, 1 - l);
							}
						}
						return !!(i || c);
					}));
	}
	return {
		run(o) {
			j(a)
				? K().then(() => {
						(a = a({ direction: o ? 'in' : 'out' })), h(o);
					})
				: h(o);
		},
		end() {
			f(), (i = c = null);
		}
	};
}
function Et(t, e, n) {
	const s = t.$$.props[e];
	s !== void 0 && ((t.$$.bound[s] = n), n(t.$$.ctx[s]));
}
function St(t) {
	t && t.c();
}
function Ot(t, e) {
	t && t.l(e);
}
function _t(t, e, n) {
	const { fragment: s, after_update: u } = t.$$;
	s && s.m(e, n),
		O(() => {
			const a = t.$$.on_mount.map(st).filter(j);
			t.$$.on_destroy ? t.$$.on_destroy.push(...a) : E(a), (t.$$.on_mount = []);
		}),
		u.forEach(O);
}
function $t(t, e) {
	const n = t.$$;
	n.fragment !== null &&
		(it(n.after_update),
		E(n.on_destroy),
		n.fragment && n.fragment.d(e),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []));
}
function ht(t, e) {
	t.$$.dirty[0] === -1 && (ot.push(t), ft(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function jt(t, e, n, s, u, a, l = null, i = [-1]) {
	const c = tt;
	V(t);
	const r = (t.$$ = {
		fragment: null,
		ctx: [],
		props: a,
		update: w,
		not_equal: u,
		bound: U(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(e.context || (c ? c.$$.context : [])),
		callbacks: U(),
		dirty: i,
		skip_bound: !1,
		root: e.target || c.$$.root
	});
	l && l(r.root);
	let d = !1;
	if (
		((r.ctx = n
			? n(t, e.props || {}, (f, g, ...h) => {
					const o = h.length ? h[0] : g;
					return (
						r.ctx &&
							u(r.ctx[f], (r.ctx[f] = o)) &&
							(!r.skip_bound && r.bound[f] && r.bound[f](o), d && ht(t, f)),
						g
					);
				})
			: []),
		r.update(),
		(d = !0),
		E(r.before_update),
		(r.fragment = s ? s(r.ctx) : !1),
		e.target)
	) {
		if (e.hydrate) {
			rt();
			const f = et(e.target);
			r.fragment && r.fragment.l(f), f.forEach(Y);
		} else r.fragment && r.fragment.c();
		e.intro && dt(t.$$.fragment), _t(t, e.target, e.anchor), at(), nt();
	}
	V(c);
}
class Ct {
	constructor() {
		I(this, '$$');
		I(this, '$$set');
	}
	$destroy() {
		$t(this, 1), (this.$destroy = w);
	}
	$on(e, n) {
		if (!j(n)) return w;
		const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
		return (
			s.push(n),
			() => {
				const u = s.indexOf(n);
				u !== -1 && s.splice(u, 1);
			}
		);
	}
	$set(e) {
		this.$$set && !X(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
	}
}
const gt = '4';
typeof window < 'u' && (window.__svelte || (window.__svelte = { v: new Set() })).v.add(gt);
export {
	Ct as S,
	dt as a,
	St as b,
	Ot as c,
	$t as d,
	xt as e,
	Et as f,
	yt as g,
	kt as h,
	jt as i,
	bt as j,
	wt as k,
	_t as m,
	vt as t
};
