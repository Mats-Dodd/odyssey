var _e = Object.defineProperty;
var ve = (t, e, n) =>
	e in t ? _e(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n);
var x = (t, e, n) => ve(t, typeof e != 'symbol' ? e + '' : e, n);
import { w as Vt, M as be } from './wdwkOUVI.js';
import { w as St } from './YlZQZqOj.js';
new URL('sveltekit-internal://');
function Ae(t, e) {
	return t === '/' || e === 'ignore'
		? t
		: e === 'never'
			? t.endsWith('/')
				? t.slice(0, -1)
				: t
			: e === 'always' && !t.endsWith('/')
				? t + '/'
				: t;
}
function ke(t) {
	return t.split('%25').map(decodeURI).join('%25');
}
function Se(t) {
	for (const e in t) t[e] = decodeURIComponent(t[e]);
	return t;
}
function mt({ href: t }) {
	return t.split('#')[0];
}
function Ee(t, e, n, r = !1) {
	const a = new URL(t);
	Object.defineProperty(a, 'searchParams', {
		value: new Proxy(a.searchParams, {
			get(i, o) {
				if (o === 'get' || o === 'getAll' || o === 'has') return (l) => (n(l), i[o](l));
				e();
				const c = Reflect.get(i, o);
				return typeof c == 'function' ? c.bind(i) : c;
			}
		}),
		enumerable: !0,
		configurable: !0
	});
	const s = ['href', 'pathname', 'search', 'toString', 'toJSON'];
	r && s.push('hash');
	for (const i of s)
		Object.defineProperty(a, i, {
			get() {
				return e(), t[i];
			},
			enumerable: !0,
			configurable: !0
		});
	return a;
}
function Re(...t) {
	let e = 5381;
	for (const n of t)
		if (typeof n == 'string') {
			let r = n.length;
			for (; r; ) e = (e * 33) ^ n.charCodeAt(--r);
		} else if (ArrayBuffer.isView(n)) {
			const r = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
			let a = r.length;
			for (; a; ) e = (e * 33) ^ r[--a];
		} else throw new TypeError('value must be a string or TypedArray');
	return (e >>> 0).toString(36);
}
function Ie(t) {
	const e = atob(t),
		n = new Uint8Array(e.length);
	for (let r = 0; r < e.length; r++) n[r] = e.charCodeAt(r);
	return n.buffer;
}
const Ue = window.fetch;
window.fetch = (t, e) => (
	(t instanceof Request ? t.method : (e == null ? void 0 : e.method) || 'GET') !== 'GET' &&
		q.delete(Et(t)),
	Ue(t, e)
);
const q = new Map();
function Le(t, e) {
	const n = Et(t, e),
		r = document.querySelector(n);
	if (r != null && r.textContent) {
		let { body: a, ...s } = JSON.parse(r.textContent);
		const i = r.getAttribute('data-ttl');
		return (
			i && q.set(n, { body: a, init: s, ttl: 1e3 * Number(i) }),
			r.getAttribute('data-b64') !== null && (a = Ie(a)),
			Promise.resolve(new Response(a, s))
		);
	}
	return window.fetch(t, e);
}
function Te(t, e, n) {
	if (q.size > 0) {
		const r = Et(t, n),
			a = q.get(r);
		if (a) {
			if (
				performance.now() < a.ttl &&
				['default', 'force-cache', 'only-if-cached', void 0].includes(n == null ? void 0 : n.cache)
			)
				return new Response(a.body, a.init);
			q.delete(r);
		}
	}
	return window.fetch(e, n);
}
function Et(t, e) {
	let r = `script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request ? t.url : t)}]`;
	if ((e != null && e.headers) || (e != null && e.body)) {
		const a = [];
		e.headers && a.push([...new Headers(e.headers)].join(',')),
			e.body && (typeof e.body == 'string' || ArrayBuffer.isView(e.body)) && a.push(e.body),
			(r += `[data-hash="${Re(...a)}"]`);
	}
	return r;
}
const xe = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function Pe(t) {
	const e = [];
	return {
		pattern:
			t === '/'
				? /^\/$/
				: new RegExp(
						`^${Oe(t)
							.map((r) => {
								const a = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);
								if (a)
									return (
										e.push({ name: a[1], matcher: a[2], optional: !1, rest: !0, chained: !0 }),
										'(?:/(.*))?'
									);
								const s = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);
								if (s)
									return (
										e.push({ name: s[1], matcher: s[2], optional: !0, rest: !1, chained: !0 }),
										'(?:/([^/]+))?'
									);
								if (!r) return;
								const i = r.split(/\[(.+?)\](?!\])/);
								return (
									'/' +
									i
										.map((c, l) => {
											if (l % 2) {
												if (c.startsWith('x+'))
													return wt(String.fromCharCode(parseInt(c.slice(2), 16)));
												if (c.startsWith('u+'))
													return wt(
														String.fromCharCode(
															...c
																.slice(2)
																.split('-')
																.map((p) => parseInt(p, 16))
														)
													);
												const h = xe.exec(c),
													[, u, w, f, m] = h;
												return (
													e.push({
														name: f,
														matcher: m,
														optional: !!u,
														rest: !!w,
														chained: w ? l === 1 && i[0] === '' : !1
													}),
													w ? '(.*?)' : u ? '([^/]*)?' : '([^/]+?)'
												);
											}
											return wt(c);
										})
										.join('')
								);
							})
							.join('')}/?$`
					),
		params: e
	};
}
function Ce(t) {
	return !/^\([^)]+\)$/.test(t);
}
function Oe(t) {
	return t.slice(1).split('/').filter(Ce);
}
function Ne(t, e, n) {
	const r = {},
		a = t.slice(1),
		s = a.filter((o) => o !== void 0);
	let i = 0;
	for (let o = 0; o < e.length; o += 1) {
		const c = e[o];
		let l = a[o - i];
		if (
			(c.chained &&
				c.rest &&
				i &&
				((l = a
					.slice(o - i, o + 1)
					.filter((h) => h)
					.join('/')),
				(i = 0)),
			l === void 0)
		) {
			c.rest && (r[c.name] = '');
			continue;
		}
		if (!c.matcher || n[c.matcher](l)) {
			r[c.name] = l;
			const h = e[o + 1],
				u = a[o + 1];
			h && !h.rest && h.optional && u && c.chained && (i = 0),
				!h && !u && Object.keys(r).length === s.length && (i = 0);
			continue;
		}
		if (c.optional && c.chained) {
			i++;
			continue;
		}
		return;
	}
	if (!i) return r;
}
function wt(t) {
	return t
		.normalize()
		.replace(/[[\]]/g, '\\$&')
		.replace(/%/g, '%25')
		.replace(/\//g, '%2[Ff]')
		.replace(/\?/g, '%3[Ff]')
		.replace(/#/g, '%23')
		.replace(/[.*+?^${}()|\\]/g, '\\$&');
}
function $e({ nodes: t, server_loads: e, dictionary: n, matchers: r }) {
	const a = new Set(e);
	return Object.entries(n).map(([o, [c, l, h]]) => {
		const { pattern: u, params: w } = Pe(o),
			f = {
				id: o,
				exec: (m) => {
					const p = u.exec(m);
					if (p) return Ne(p, w, r);
				},
				errors: [1, ...(h || [])].map((m) => t[m]),
				layouts: [0, ...(l || [])].map(i),
				leaf: s(c)
			};
		return (f.errors.length = f.layouts.length = Math.max(f.errors.length, f.layouts.length)), f;
	});
	function s(o) {
		const c = o < 0;
		return c && (o = ~o), [c, t[o]];
	}
	function i(o) {
		return o === void 0 ? o : [a.has(o), t[o]];
	}
}
function Zt(t, e = JSON.parse) {
	try {
		return e(sessionStorage[t]);
	} catch {}
}
function Bt(t, e, n = JSON.stringify) {
	const r = n(e);
	try {
		sessionStorage[t] = r;
	} catch {}
}
var zt;
const T = ((zt = globalThis.__sveltekit_u1lwtt) == null ? void 0 : zt.base) ?? '';
var Xt;
const je = ((Xt = globalThis.__sveltekit_u1lwtt) == null ? void 0 : Xt.assets) ?? T,
	De = '1750026833496',
	Qt = 'sveltekit:snapshot',
	te = 'sveltekit:scroll',
	ee = 'sveltekit:states',
	Fe = 'sveltekit:pageurl',
	F = 'sveltekit:history',
	W = 'sveltekit:navigation',
	$ = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1, false: -1 },
	X = location.origin;
function Rt(t) {
	if (t instanceof URL) return t;
	let e = document.baseURI;
	if (!e) {
		const n = document.getElementsByTagName('base');
		e = n.length ? n[0].href : document.URL;
	}
	return new URL(t, e);
}
function ct() {
	return { x: pageXOffset, y: pageYOffset };
}
function D(t, e) {
	return t.getAttribute(`data-sveltekit-${e}`);
}
const Mt = { ...$, '': $.hover };
function ne(t) {
	let e = t.assignedSlot ?? t.parentNode;
	return (e == null ? void 0 : e.nodeType) === 11 && (e = e.host), e;
}
function ae(t, e) {
	for (; t && t !== e; ) {
		if (t.nodeName.toUpperCase() === 'A' && t.hasAttribute('href')) return t;
		t = ne(t);
	}
}
function bt(t, e, n) {
	let r;
	try {
		if (
			((r = new URL(t instanceof SVGAElement ? t.href.baseVal : t.href, document.baseURI)),
			n && r.hash.match(/^#[^/]/))
		) {
			const o = location.hash.split('#')[1] || '/';
			r.hash = `#${o}${r.hash}`;
		}
	} catch {}
	const a = t instanceof SVGAElement ? t.target.baseVal : t.target,
		s = !r || !!a || lt(r, e, n) || (t.getAttribute('rel') || '').split(/\s+/).includes('external'),
		i = (r == null ? void 0 : r.origin) === X && t.hasAttribute('download');
	return { url: r, external: s, target: a, download: i };
}
function tt(t) {
	let e = null,
		n = null,
		r = null,
		a = null,
		s = null,
		i = null,
		o = t;
	for (; o && o !== document.documentElement; )
		r === null && (r = D(o, 'preload-code')),
			a === null && (a = D(o, 'preload-data')),
			e === null && (e = D(o, 'keepfocus')),
			n === null && (n = D(o, 'noscroll')),
			s === null && (s = D(o, 'reload')),
			i === null && (i = D(o, 'replacestate')),
			(o = ne(o));
	function c(l) {
		switch (l) {
			case '':
			case 'true':
				return !0;
			case 'off':
			case 'false':
				return !1;
			default:
				return;
		}
	}
	return {
		preload_code: Mt[r ?? 'off'],
		preload_data: Mt[a ?? 'off'],
		keepfocus: c(e),
		noscroll: c(n),
		reload: c(s),
		replace_state: c(i)
	};
}
function qt(t) {
	const e = St(t);
	let n = !0;
	function r() {
		(n = !0), e.update((i) => i);
	}
	function a(i) {
		(n = !1), e.set(i);
	}
	function s(i) {
		let o;
		return e.subscribe((c) => {
			(o === void 0 || (n && c !== o)) && i((o = c));
		});
	}
	return { notify: r, set: a, subscribe: s };
}
const re = { v: () => {} };
function Ve() {
	const { set: t, subscribe: e } = St(!1);
	let n;
	async function r() {
		clearTimeout(n);
		try {
			const a = await fetch(`${je}/_app/version.json`, {
				headers: { pragma: 'no-cache', 'cache-control': 'no-cache' }
			});
			if (!a.ok) return !1;
			const i = (await a.json()).version !== De;
			return i && (t(!0), re.v(), clearTimeout(n)), i;
		} catch {
			return !1;
		}
	}
	return { subscribe: e, check: r };
}
function lt(t, e, n) {
	return t.origin !== X || !t.pathname.startsWith(e)
		? !0
		: n
			? !(
					t.pathname === e + '/' ||
					t.pathname === e + '/index.html' ||
					(t.protocol === 'file:' && t.pathname.replace(/\/[^/]+\.html?$/, '') === e)
				)
			: !1;
}
function Sn(t) {}
function Gt(t) {
	const e = Me(t),
		n = new ArrayBuffer(e.length),
		r = new DataView(n);
	for (let a = 0; a < n.byteLength; a++) r.setUint8(a, e.charCodeAt(a));
	return n;
}
const Be = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function Me(t) {
	t.length % 4 === 0 && (t = t.replace(/==?$/, ''));
	let e = '',
		n = 0,
		r = 0;
	for (let a = 0; a < t.length; a++)
		(n <<= 6),
			(n |= Be.indexOf(t[a])),
			(r += 6),
			r === 24 &&
				((e += String.fromCharCode((n & 16711680) >> 16)),
				(e += String.fromCharCode((n & 65280) >> 8)),
				(e += String.fromCharCode(n & 255)),
				(n = r = 0));
	return (
		r === 12
			? ((n >>= 4), (e += String.fromCharCode(n)))
			: r === 18 &&
				((n >>= 2),
				(e += String.fromCharCode((n & 65280) >> 8)),
				(e += String.fromCharCode(n & 255))),
		e
	);
}
const qe = -1,
	Ge = -2,
	He = -3,
	Ke = -4,
	We = -5,
	Ye = -6;
function Je(t, e) {
	if (typeof t == 'number') return a(t, !0);
	if (!Array.isArray(t) || t.length === 0) throw new Error('Invalid input');
	const n = t,
		r = Array(n.length);
	function a(s, i = !1) {
		if (s === qe) return;
		if (s === He) return NaN;
		if (s === Ke) return 1 / 0;
		if (s === We) return -1 / 0;
		if (s === Ye) return -0;
		if (i) throw new Error('Invalid input');
		if (s in r) return r[s];
		const o = n[s];
		if (!o || typeof o != 'object') r[s] = o;
		else if (Array.isArray(o))
			if (typeof o[0] == 'string') {
				const c = o[0],
					l = e == null ? void 0 : e[c];
				if (l) return (r[s] = l(a(o[1])));
				switch (c) {
					case 'Date':
						r[s] = new Date(o[1]);
						break;
					case 'Set':
						const h = new Set();
						r[s] = h;
						for (let f = 1; f < o.length; f += 1) h.add(a(o[f]));
						break;
					case 'Map':
						const u = new Map();
						r[s] = u;
						for (let f = 1; f < o.length; f += 2) u.set(a(o[f]), a(o[f + 1]));
						break;
					case 'RegExp':
						r[s] = new RegExp(o[1], o[2]);
						break;
					case 'Object':
						r[s] = Object(o[1]);
						break;
					case 'BigInt':
						r[s] = BigInt(o[1]);
						break;
					case 'null':
						const w = Object.create(null);
						r[s] = w;
						for (let f = 1; f < o.length; f += 2) w[o[f]] = a(o[f + 1]);
						break;
					case 'Int8Array':
					case 'Uint8Array':
					case 'Uint8ClampedArray':
					case 'Int16Array':
					case 'Uint16Array':
					case 'Int32Array':
					case 'Uint32Array':
					case 'Float32Array':
					case 'Float64Array':
					case 'BigInt64Array':
					case 'BigUint64Array': {
						const f = globalThis[c],
							m = o[1],
							p = Gt(m),
							d = new f(p);
						r[s] = d;
						break;
					}
					case 'ArrayBuffer': {
						const f = o[1],
							m = Gt(f);
						r[s] = m;
						break;
					}
					default:
						throw new Error(`Unknown type ${c}`);
				}
			} else {
				const c = new Array(o.length);
				r[s] = c;
				for (let l = 0; l < o.length; l += 1) {
					const h = o[l];
					h !== Ge && (c[l] = a(h));
				}
			}
		else {
			const c = {};
			r[s] = c;
			for (const l in o) {
				const h = o[l];
				c[l] = a(h);
			}
		}
		return r[s];
	}
	return a(0);
}
const oe = new Set(['load', 'prerender', 'csr', 'ssr', 'trailingSlash', 'config']);
[...oe];
const ze = new Set([...oe]);
[...ze];
function Xe(t) {
	return t.filter((e) => e != null);
}
class ft {
	constructor(e, n) {
		(this.status = e),
			typeof n == 'string'
				? (this.body = { message: n })
				: n
					? (this.body = n)
					: (this.body = { message: `Error: ${e}` });
	}
	toString() {
		return JSON.stringify(this.body);
	}
}
class It {
	constructor(e, n) {
		(this.status = e), (this.location = n);
	}
}
class Ut extends Error {
	constructor(e, n, r) {
		super(r), (this.status = e), (this.text = n);
	}
}
const Ze = 'x-sveltekit-invalidated',
	Qe = 'x-sveltekit-trailing-slash';
function et(t) {
	return t instanceof ft || t instanceof Ut ? t.status : 500;
}
function tn(t) {
	return t instanceof Ut ? t.text : 'Internal Error';
}
let E, Y, yt;
const en = Vt.toString().includes('$$') || /function \w+\(\) \{\}/.test(Vt.toString());
en
	? ((E = {
			data: {},
			form: null,
			error: null,
			params: {},
			route: { id: null },
			state: {},
			status: -1,
			url: new URL('https://example.com')
		}),
		(Y = { current: null }),
		(yt = { current: !1 }))
	: ((E = new (class {
			constructor() {
				x(this, 'data', $state.raw({}));
				x(this, 'form', $state.raw(null));
				x(this, 'error', $state.raw(null));
				x(this, 'params', $state.raw({}));
				x(this, 'route', $state.raw({ id: null }));
				x(this, 'state', $state.raw({}));
				x(this, 'status', $state.raw(-1));
				x(this, 'url', $state.raw(new URL('https://example.com')));
			}
		})()),
		(Y = new (class {
			constructor() {
				x(this, 'current', $state.raw(null));
			}
		})()),
		(yt = new (class {
			constructor() {
				x(this, 'current', $state.raw(!1));
			}
		})()),
		(re.v = () => (yt.current = !0)));
function se(t) {
	Object.assign(E, t);
}
const nn = '/__data.json',
	an = '.html__data.json';
function rn(t) {
	return t.endsWith('.html') ? t.replace(/\.html$/, an) : t.replace(/\/$/, '') + nn;
}
const on = new Set(['icon', 'shortcut icon', 'apple-touch-icon']),
	j = Zt(te) ?? {},
	J = Zt(Qt) ?? {},
	O = { url: qt({}), page: qt({}), navigating: St(null), updated: Ve() };
function Lt(t) {
	j[t] = ct();
}
function sn(t, e) {
	let n = t + 1;
	for (; j[n]; ) delete j[n], (n += 1);
	for (n = e + 1; J[n]; ) delete J[n], (n += 1);
}
function B(t) {
	return (location.href = t.href), new Promise(() => {});
}
async function ie() {
	if ('serviceWorker' in navigator) {
		const t = await navigator.serviceWorker.getRegistration(T || '/');
		t && (await t.update());
	}
}
function Ht() {}
let Tt, At, nt, P, kt, A;
const at = [],
	rt = [];
let U = null;
const Q = new Map(),
	ce = new Set(),
	cn = new Set(),
	G = new Set();
let y = { branch: [], error: null, url: null },
	xt = !1,
	ot = !1,
	Kt = !0,
	z = !1,
	M = !1,
	le = !1,
	ut = !1,
	Pt,
	S,
	L,
	C;
const H = new Set();
let _t;
async function Un(t, e, n) {
	var s, i, o, c;
	document.URL !== location.href && (location.href = location.href),
		(A = t),
		await ((i = (s = t.hooks).init) == null ? void 0 : i.call(s)),
		(Tt = $e(t)),
		(P = document.documentElement),
		(kt = e),
		(At = t.nodes[0]),
		(nt = t.nodes[1]),
		At(),
		nt(),
		(S = (o = history.state) == null ? void 0 : o[F]),
		(L = (c = history.state) == null ? void 0 : c[W]),
		S || ((S = L = Date.now()), history.replaceState({ ...history.state, [F]: S, [W]: L }, ''));
	const r = j[S];
	function a() {
		r && ((history.scrollRestoration = 'manual'), scrollTo(r.x, r.y));
	}
	n
		? (a(), await yn(kt, n))
		: (await K({
				type: 'enter',
				url: Rt(A.hash ? vn(new URL(location.href)) : location.href),
				replace_state: !0
			}),
			a()),
		wn();
}
async function ln() {
	if ((await (_t || (_t = Promise.resolve())), !_t)) return;
	_t = null;
	const t = (C = {}),
		e = await Z(y.url, !0);
	U = null;
	const n = e && (await Nt(e));
	if (!(!n || t !== C)) {
		if (n.type === 'redirect') return dt(new URL(n.location, y.url).href, {}, 1, t);
		n.props.page && Object.assign(E, n.props.page),
			(y = n.state),
			fe(),
			Pt.$set(n.props),
			se(n.props.page);
	}
}
function fe() {
	(at.length = 0), (ut = !1);
}
function ue(t) {
	rt.some((e) => (e == null ? void 0 : e.snapshot)) &&
		(J[t] = rt.map((e) => {
			var n;
			return (n = e == null ? void 0 : e.snapshot) == null ? void 0 : n.capture();
		}));
}
function de(t) {
	var e;
	(e = J[t]) == null ||
		e.forEach((n, r) => {
			var a, s;
			(s = (a = rt[r]) == null ? void 0 : a.snapshot) == null || s.restore(n);
		});
}
function Wt() {
	Lt(S), Bt(te, j), ue(L), Bt(Qt, J);
}
async function dt(t, e, n, r) {
	return K({
		type: 'goto',
		url: Rt(t),
		keepfocus: e.keepFocus,
		noscroll: e.noScroll,
		replace_state: e.replaceState,
		state: e.state,
		redirect_count: n,
		nav_token: r,
		accept: () => {
			e.invalidateAll && (ut = !0), e.invalidate && e.invalidate.forEach(mn);
		}
	});
}
async function fn(t) {
	if (t.id !== (U == null ? void 0 : U.id)) {
		const e = {};
		H.add(e),
			(U = {
				id: t.id,
				token: e,
				promise: Nt({ ...t, preload: e }).then(
					(n) => (H.delete(e), n.type === 'loaded' && n.state.error && (U = null), n)
				)
			});
	}
	return U.promise;
}
async function vt(t) {
	var n;
	const e = (n = await Z(t, !1)) == null ? void 0 : n.route;
	e && (await Promise.all([...e.layouts, e.leaf].map((r) => (r == null ? void 0 : r[1]()))));
}
function he(t, e, n) {
	var a;
	y = t.state;
	const r = document.querySelector('style[data-sveltekit]');
	if (
		(r && r.remove(),
		Object.assign(E, t.props.page),
		(Pt = new A.root({
			target: e,
			props: { ...t.props, stores: O, components: rt },
			hydrate: n,
			sync: !1
		})),
		de(L),
		n)
	) {
		const s = {
			from: null,
			to: {
				params: y.params,
				route: { id: ((a = y.route) == null ? void 0 : a.id) ?? null },
				url: new URL(location.href)
			},
			willUnload: !1,
			type: 'enter',
			complete: Promise.resolve()
		};
		G.forEach((i) => i(s));
	}
	ot = !0;
}
function st({ url: t, params: e, branch: n, status: r, error: a, route: s, form: i }) {
	let o = 'never';
	if (T && (t.pathname === T || t.pathname === T + '/')) o = 'always';
	else for (const f of n) (f == null ? void 0 : f.slash) !== void 0 && (o = f.slash);
	(t.pathname = Ae(t.pathname, o)), (t.search = t.search);
	const c = {
		type: 'loaded',
		state: { url: t, params: e, branch: n, error: a, route: s },
		props: { constructors: Xe(n).map((f) => f.node.component), page: jt(E) }
	};
	i !== void 0 && (c.props.form = i);
	let l = {},
		h = !E,
		u = 0;
	for (let f = 0; f < Math.max(n.length, y.branch.length); f += 1) {
		const m = n[f],
			p = y.branch[f];
		(m == null ? void 0 : m.data) !== (p == null ? void 0 : p.data) && (h = !0),
			m && ((l = { ...l, ...m.data }), h && (c.props[`data_${u}`] = l), (u += 1));
	}
	return (
		(!y.url || t.href !== y.url.href || y.error !== a || (i !== void 0 && i !== E.form) || h) &&
			(c.props.page = {
				error: a,
				params: e,
				route: { id: (s == null ? void 0 : s.id) ?? null },
				state: {},
				status: r,
				url: new URL(t),
				form: i ?? null,
				data: h ? l : E.data
			}),
		c
	);
}
async function Ct({ loader: t, parent: e, url: n, params: r, route: a, server_data_node: s }) {
	var h, u, w;
	let i = null,
		o = !0;
	const c = {
			dependencies: new Set(),
			params: new Set(),
			parent: !1,
			route: !1,
			url: !1,
			search_params: new Set()
		},
		l = await t();
	if ((h = l.universal) != null && h.load) {
		let f = function (...p) {
			for (const d of p) {
				const { href: v } = new URL(d, n);
				c.dependencies.add(v);
			}
		};
		const m = {
			route: new Proxy(a, { get: (p, d) => (o && (c.route = !0), p[d]) }),
			params: new Proxy(r, { get: (p, d) => (o && c.params.add(d), p[d]) }),
			data: (s == null ? void 0 : s.data) ?? null,
			url: Ee(
				n,
				() => {
					o && (c.url = !0);
				},
				(p) => {
					o && c.search_params.add(p);
				},
				A.hash
			),
			async fetch(p, d) {
				p instanceof Request &&
					(d = {
						body: p.method === 'GET' || p.method === 'HEAD' ? void 0 : await p.blob(),
						cache: p.cache,
						credentials: p.credentials,
						headers: [...p.headers].length ? p.headers : void 0,
						integrity: p.integrity,
						keepalive: p.keepalive,
						method: p.method,
						mode: p.mode,
						redirect: p.redirect,
						referrer: p.referrer,
						referrerPolicy: p.referrerPolicy,
						signal: p.signal,
						...d
					});
				const { resolved: v, promise: R } = pe(p, d, n);
				return o && f(v.href), R;
			},
			setHeaders: () => {},
			depends: f,
			parent() {
				return o && (c.parent = !0), e();
			},
			untrack(p) {
				o = !1;
				try {
					return p();
				} finally {
					o = !0;
				}
			}
		};
		i = (await l.universal.load.call(null, m)) ?? null;
	}
	return {
		node: l,
		loader: t,
		server: s,
		universal: (u = l.universal) != null && u.load ? { type: 'data', data: i, uses: c } : null,
		data: i ?? (s == null ? void 0 : s.data) ?? null,
		slash: ((w = l.universal) == null ? void 0 : w.trailingSlash) ?? (s == null ? void 0 : s.slash)
	};
}
function pe(t, e, n) {
	let r = t instanceof Request ? t.url : t;
	const a = new URL(r, n);
	a.origin === n.origin && (r = a.href.slice(n.origin.length));
	const s = ot ? Te(r, a.href, e) : Le(r, e);
	return { resolved: a, promise: s };
}
function Yt(t, e, n, r, a, s) {
	if (ut) return !0;
	if (!a) return !1;
	if ((a.parent && t) || (a.route && e) || (a.url && n)) return !0;
	for (const i of a.search_params) if (r.has(i)) return !0;
	for (const i of a.params) if (s[i] !== y.params[i]) return !0;
	for (const i of a.dependencies) if (at.some((o) => o(new URL(i)))) return !0;
	return !1;
}
function Ot(t, e) {
	return (t == null ? void 0 : t.type) === 'data'
		? t
		: (t == null ? void 0 : t.type) === 'skip'
			? (e ?? null)
			: null;
}
function un(t, e) {
	if (!t) return new Set(e.searchParams.keys());
	const n = new Set([...t.searchParams.keys(), ...e.searchParams.keys()]);
	for (const r of n) {
		const a = t.searchParams.getAll(r),
			s = e.searchParams.getAll(r);
		a.every((i) => s.includes(i)) && s.every((i) => a.includes(i)) && n.delete(r);
	}
	return n;
}
function Jt({ error: t, url: e, route: n, params: r }) {
	return {
		type: 'loaded',
		state: { error: t, url: e, route: n, params: r, branch: [] },
		props: { page: jt(E), constructors: [] }
	};
}
async function Nt({ id: t, invalidating: e, url: n, params: r, route: a, preload: s }) {
	if ((U == null ? void 0 : U.id) === t) return H.delete(U.token), U.promise;
	const { errors: i, layouts: o, leaf: c } = a,
		l = [...o, c];
	i.forEach((g) => (g == null ? void 0 : g().catch(() => {}))),
		l.forEach((g) => (g == null ? void 0 : g[1]().catch(() => {})));
	let h = null;
	const u = y.url ? t !== it(y.url) : !1,
		w = y.route ? a.id !== y.route.id : !1,
		f = un(y.url, n);
	let m = !1;
	const p = l.map((g, _) => {
		var N;
		const b = y.branch[_],
			k =
				!!(g != null && g[0]) &&
				((b == null ? void 0 : b.loader) !== g[1] ||
					Yt(m, w, u, f, (N = b.server) == null ? void 0 : N.uses, r));
		return k && (m = !0), k;
	});
	if (p.some(Boolean)) {
		try {
			h = await we(n, p);
		} catch (g) {
			const _ = await V(g, { url: n, params: r, route: { id: t } });
			return H.has(s)
				? Jt({ error: _, url: n, params: r, route: a })
				: ht({ status: et(g), error: _, url: n, route: a });
		}
		if (h.type === 'redirect') return h;
	}
	const d = h == null ? void 0 : h.nodes;
	let v = !1;
	const R = l.map(async (g, _) => {
		var pt;
		if (!g) return;
		const b = y.branch[_],
			k = d == null ? void 0 : d[_];
		if (
			(!k || k.type === 'skip') &&
			g[1] === (b == null ? void 0 : b.loader) &&
			!Yt(v, w, u, f, (pt = b.universal) == null ? void 0 : pt.uses, r)
		)
			return b;
		if (((v = !0), (k == null ? void 0 : k.type) === 'error')) throw k;
		return Ct({
			loader: g[1],
			url: n,
			params: r,
			route: a,
			parent: async () => {
				var Ft;
				const Dt = {};
				for (let gt = 0; gt < _; gt += 1)
					Object.assign(Dt, (Ft = await R[gt]) == null ? void 0 : Ft.data);
				return Dt;
			},
			server_data_node: Ot(
				k === void 0 && g[0] ? { type: 'skip' } : (k ?? null),
				g[0] ? (b == null ? void 0 : b.server) : void 0
			)
		});
	});
	for (const g of R) g.catch(() => {});
	const I = [];
	for (let g = 0; g < l.length; g += 1)
		if (l[g])
			try {
				I.push(await R[g]);
			} catch (_) {
				if (_ instanceof It) return { type: 'redirect', location: _.location };
				if (H.has(s))
					return Jt({
						error: await V(_, { params: r, url: n, route: { id: a.id } }),
						url: n,
						params: r,
						route: a
					});
				let b = et(_),
					k;
				if (d != null && d.includes(_)) (b = _.status ?? b), (k = _.error);
				else if (_ instanceof ft) k = _.body;
				else {
					if (await O.updated.check()) return await ie(), await B(n);
					k = await V(_, { params: r, url: n, route: { id: a.id } });
				}
				const N = await dn(g, I, i);
				return N
					? st({
							url: n,
							params: r,
							branch: I.slice(0, N.idx).concat(N.node),
							status: b,
							error: k,
							route: a
						})
					: await me(n, { id: a.id }, k, b);
			}
		else I.push(void 0);
	return st({
		url: n,
		params: r,
		branch: I,
		status: 200,
		error: null,
		route: a,
		form: e ? void 0 : null
	});
}
async function dn(t, e, n) {
	for (; t--; )
		if (n[t]) {
			let r = t;
			for (; !e[r]; ) r -= 1;
			try {
				return {
					idx: r + 1,
					node: { node: await n[t](), loader: n[t], data: {}, server: null, universal: null }
				};
			} catch {
				continue;
			}
		}
}
async function ht({ status: t, error: e, url: n, route: r }) {
	const a = {};
	let s = null;
	if (A.server_loads[0] === 0)
		try {
			const o = await we(n, [!0]);
			if (o.type !== 'data' || (o.nodes[0] && o.nodes[0].type !== 'data')) throw 0;
			s = o.nodes[0] ?? null;
		} catch {
			(n.origin !== X || n.pathname !== location.pathname || xt) && (await B(n));
		}
	try {
		const o = await Ct({
				loader: At,
				url: n,
				params: a,
				route: r,
				parent: () => Promise.resolve({}),
				server_data_node: Ot(s)
			}),
			c = { node: await nt(), loader: nt, universal: null, server: null, data: null };
		return st({ url: n, params: a, branch: [o, c], status: t, error: e, route: null });
	} catch (o) {
		if (o instanceof It) return dt(new URL(o.location, location.href), {}, 0);
		throw o;
	}
}
async function hn(t) {
	const e = t.href;
	if (Q.has(e)) return Q.get(e);
	let n;
	try {
		const r = (async () => {
			let a =
				(await A.hooks.reroute({ url: new URL(t), fetch: async (s, i) => pe(s, i, t).promise })) ??
				t;
			if (typeof a == 'string') {
				const s = new URL(t);
				A.hash ? (s.hash = a) : (s.pathname = a), (a = s);
			}
			return a;
		})();
		Q.set(e, r), (n = await r);
	} catch {
		Q.delete(e);
		return;
	}
	return n;
}
async function Z(t, e) {
	if (t && !lt(t, T, A.hash)) {
		const n = await hn(t);
		if (!n) return;
		const r = pn(n);
		for (const a of Tt) {
			const s = a.exec(r);
			if (s) return { id: it(t), invalidating: e, route: a, params: Se(s), url: t };
		}
	}
}
function pn(t) {
	return (
		ke(A.hash ? t.hash.replace(/^#/, '').replace(/[?#].+/, '') : t.pathname.slice(T.length)) || '/'
	);
}
function it(t) {
	return (A.hash ? t.hash.replace(/^#/, '') : t.pathname) + t.search;
}
function ge({ url: t, type: e, intent: n, delta: r }) {
	let a = !1;
	const s = $t(y, n, t, e);
	r !== void 0 && (s.navigation.delta = r);
	const i = {
		...s.navigation,
		cancel: () => {
			(a = !0), s.reject(new Error('navigation cancelled'));
		}
	};
	return z || ce.forEach((o) => o(i)), a ? null : s;
}
async function K({
	type: t,
	url: e,
	popped: n,
	keepfocus: r,
	noscroll: a,
	replace_state: s,
	state: i = {},
	redirect_count: o = 0,
	nav_token: c = {},
	accept: l = Ht,
	block: h = Ht
}) {
	const u = C;
	C = c;
	const w = await Z(e, !1),
		f =
			t === 'enter'
				? $t(y, w, e, t)
				: ge({ url: e, type: t, delta: n == null ? void 0 : n.delta, intent: w });
	if (!f) {
		h(), C === c && (C = u);
		return;
	}
	const m = S,
		p = L;
	l(),
		(z = !0),
		ot && f.navigation.type !== 'enter' && O.navigating.set((Y.current = f.navigation));
	let d = w && (await Nt(w));
	if (!d) {
		if (lt(e, T, A.hash)) return await B(e);
		d = await me(
			e,
			{ id: null },
			await V(new Ut(404, 'Not Found', `Not found: ${e.pathname}`), {
				url: e,
				params: {},
				route: { id: null }
			}),
			404
		);
	}
	if (((e = (w == null ? void 0 : w.url) || e), C !== c))
		return f.reject(new Error('navigation aborted')), !1;
	if (d.type === 'redirect')
		if (o >= 20)
			d = await ht({
				status: 500,
				error: await V(new Error('Redirect loop'), { url: e, params: {}, route: { id: null } }),
				url: e,
				route: { id: null }
			});
		else return await dt(new URL(d.location, e).href, {}, o + 1, c), !1;
	else d.props.page.status >= 400 && (await O.updated.check()) && (await ie(), await B(e));
	if (
		(fe(),
		Lt(m),
		ue(p),
		d.props.page.url.pathname !== e.pathname && (e.pathname = d.props.page.url.pathname),
		(i = n ? n.state : i),
		!n)
	) {
		const g = s ? 0 : 1,
			_ = { [F]: (S += g), [W]: (L += g), [ee]: i };
		(s ? history.replaceState : history.pushState).call(history, _, '', e), s || sn(S, L);
	}
	if (((U = null), (d.props.page.state = i), ot)) {
		(y = d.state), d.props.page && (d.props.page.url = e);
		const g = (await Promise.all(Array.from(cn, (_) => _(f.navigation)))).filter(
			(_) => typeof _ == 'function'
		);
		if (g.length > 0) {
			let _ = function () {
				g.forEach((b) => {
					G.delete(b);
				});
			};
			g.push(_),
				g.forEach((b) => {
					G.add(b);
				});
		}
		Pt.$set(d.props), se(d.props.page), (le = !0);
	} else he(d, kt, !1);
	const { activeElement: v } = document;
	await be();
	const R = n ? n.scroll : a ? ct() : null;
	if (Kt) {
		const g =
			e.hash &&
			document.getElementById(
				decodeURIComponent(A.hash ? (e.hash.split('#')[2] ?? '') : e.hash.slice(1))
			);
		R ? scrollTo(R.x, R.y) : g ? g.scrollIntoView() : scrollTo(0, 0);
	}
	const I = document.activeElement !== v && document.activeElement !== document.body;
	!r && !I && _n(),
		(Kt = !0),
		d.props.page && Object.assign(E, d.props.page),
		(z = !1),
		t === 'popstate' && de(L),
		f.fulfil(void 0),
		G.forEach((g) => g(f.navigation)),
		O.navigating.set((Y.current = null));
}
async function me(t, e, n, r) {
	return t.origin === X && t.pathname === location.pathname && !xt
		? await ht({ status: r, error: n, url: t, route: e })
		: await B(t);
}
function gn() {
	let t, e, n;
	P.addEventListener('mousemove', (o) => {
		const c = o.target;
		clearTimeout(t),
			(t = setTimeout(() => {
				s(c, $.hover);
			}, 20));
	});
	function r(o) {
		o.defaultPrevented || s(o.composedPath()[0], $.tap);
	}
	P.addEventListener('mousedown', r), P.addEventListener('touchstart', r, { passive: !0 });
	const a = new IntersectionObserver(
		(o) => {
			for (const c of o) c.isIntersecting && (vt(new URL(c.target.href)), a.unobserve(c.target));
		},
		{ threshold: 0 }
	);
	async function s(o, c) {
		const l = ae(o, P),
			h = l === e && c >= n;
		if (!l || h) return;
		const { url: u, external: w, download: f } = bt(l, T, A.hash);
		if (w || f) return;
		const m = tt(l),
			p = u && it(y.url) === it(u);
		if (!(m.reload || p))
			if (c <= m.preload_data) {
				(e = l), (n = $.tap);
				const d = await Z(u, !1);
				if (!d) return;
				fn(d);
			} else c <= m.preload_code && ((e = l), (n = c), vt(u));
	}
	function i() {
		a.disconnect();
		for (const o of P.querySelectorAll('a')) {
			const { url: c, external: l, download: h } = bt(o, T, A.hash);
			if (l || h) continue;
			const u = tt(o);
			u.reload ||
				(u.preload_code === $.viewport && a.observe(o), u.preload_code === $.eager && vt(c));
		}
	}
	G.add(i), i();
}
function V(t, e) {
	if (t instanceof ft) return t.body;
	const n = et(t),
		r = tn(t);
	return A.hooks.handleError({ error: t, event: e, status: n, message: r }) ?? { message: r };
}
function Ln(t, e = {}) {
	return (
		(t = new URL(Rt(t))),
		t.origin !== X ? Promise.reject(new Error('goto: invalid URL')) : dt(t, e, 0)
	);
}
function mn(t) {
	if (typeof t == 'function') at.push(t);
	else {
		const { href: e } = new URL(t, location.href);
		at.push((n) => n.href === e);
	}
}
function Tn() {
	return (ut = !0), ln();
}
function wn() {
	var e;
	(history.scrollRestoration = 'manual'),
		addEventListener('beforeunload', (n) => {
			let r = !1;
			if ((Wt(), !z)) {
				const a = $t(y, void 0, null, 'leave'),
					s = {
						...a.navigation,
						cancel: () => {
							(r = !0), a.reject(new Error('navigation cancelled'));
						}
					};
				ce.forEach((i) => i(s));
			}
			r ? (n.preventDefault(), (n.returnValue = '')) : (history.scrollRestoration = 'auto');
		}),
		addEventListener('visibilitychange', () => {
			document.visibilityState === 'hidden' && Wt();
		}),
		((e = navigator.connection) != null && e.saveData) || gn(),
		P.addEventListener('click', async (n) => {
			if (
				n.button ||
				n.which !== 1 ||
				n.metaKey ||
				n.ctrlKey ||
				n.shiftKey ||
				n.altKey ||
				n.defaultPrevented
			)
				return;
			const r = ae(n.composedPath()[0], P);
			if (!r) return;
			const { url: a, external: s, target: i, download: o } = bt(r, T, A.hash);
			if (!a) return;
			if (i === '_parent' || i === '_top') {
				if (window.parent !== window) return;
			} else if (i && i !== '_self') return;
			const c = tt(r);
			if (
				(!(r instanceof SVGAElement) &&
					a.protocol !== location.protocol &&
					!(a.protocol === 'https:' || a.protocol === 'http:')) ||
				o
			)
				return;
			const [h, u] = (A.hash ? a.hash.replace(/^#/, '') : a.href).split('#'),
				w = h === mt(location);
			if (s || (c.reload && (!w || !u))) {
				ge({ url: a, type: 'link' }) ? (z = !0) : n.preventDefault();
				return;
			}
			if (u !== void 0 && w) {
				const [, f] = y.url.href.split('#');
				if (f === u) {
					if (
						(n.preventDefault(),
						u === '' || (u === 'top' && r.ownerDocument.getElementById('top') === null))
					)
						window.scrollTo({ top: 0 });
					else {
						const m = r.ownerDocument.getElementById(decodeURIComponent(u));
						m && (m.scrollIntoView(), m.focus());
					}
					return;
				}
				if (((M = !0), Lt(S), t(a), !c.replace_state)) return;
				M = !1;
			}
			n.preventDefault(),
				await new Promise((f) => {
					requestAnimationFrame(() => {
						setTimeout(f, 0);
					}),
						setTimeout(f, 100);
				}),
				await K({
					type: 'link',
					url: a,
					keepfocus: c.keepfocus,
					noscroll: c.noscroll,
					replace_state: c.replace_state ?? a.href === location.href
				});
		}),
		P.addEventListener('submit', (n) => {
			if (n.defaultPrevented) return;
			const r = HTMLFormElement.prototype.cloneNode.call(n.target),
				a = n.submitter;
			if (
				((a == null ? void 0 : a.formTarget) || r.target) === '_blank' ||
				((a == null ? void 0 : a.formMethod) || r.method) !== 'get'
			)
				return;
			const o = new URL(
				((a == null ? void 0 : a.hasAttribute('formaction')) &&
					(a == null ? void 0 : a.formAction)) ||
					r.action
			);
			if (lt(o, T, !1)) return;
			const c = n.target,
				l = tt(c);
			if (l.reload) return;
			n.preventDefault(), n.stopPropagation();
			const h = new FormData(c),
				u = a == null ? void 0 : a.getAttribute('name');
			u && h.append(u, (a == null ? void 0 : a.getAttribute('value')) ?? ''),
				(o.search = new URLSearchParams(h).toString()),
				K({
					type: 'form',
					url: o,
					keepfocus: l.keepfocus,
					noscroll: l.noscroll,
					replace_state: l.replace_state ?? o.href === location.href
				});
		}),
		addEventListener('popstate', async (n) => {
			var r;
			if ((r = n.state) != null && r[F]) {
				const a = n.state[F];
				if (((C = {}), a === S)) return;
				const s = j[a],
					i = n.state[ee] ?? {},
					o = new URL(n.state[Fe] ?? location.href),
					c = n.state[W],
					l = y.url ? mt(location) === mt(y.url) : !1;
				if (c === L && (le || l)) {
					i !== E.state && (E.state = i), t(o), (j[S] = ct()), s && scrollTo(s.x, s.y), (S = a);
					return;
				}
				const u = a - S;
				await K({
					type: 'popstate',
					url: o,
					popped: { state: i, scroll: s, delta: u },
					accept: () => {
						(S = a), (L = c);
					},
					block: () => {
						history.go(-u);
					},
					nav_token: C
				});
			} else if (!M) {
				const a = new URL(location.href);
				t(a), A.hash && location.reload();
			}
		}),
		addEventListener('hashchange', () => {
			M &&
				((M = !1), history.replaceState({ ...history.state, [F]: ++S, [W]: L }, '', location.href));
		});
	for (const n of document.querySelectorAll('link')) on.has(n.rel) && (n.href = n.href);
	addEventListener('pageshow', (n) => {
		n.persisted && O.navigating.set((Y.current = null));
	});
	function t(n) {
		(y.url = E.url = n), O.page.set(jt(E)), O.page.notify();
	}
}
async function yn(
	t,
	{ status: e = 200, error: n, node_ids: r, params: a, route: s, server_route: i, data: o, form: c }
) {
	xt = !0;
	const l = new URL(location.href);
	let h;
	({ params: a = {}, route: s = { id: null } } = (await Z(l, !1)) || {}),
		(h = Tt.find(({ id: f }) => f === s.id));
	let u,
		w = !0;
	try {
		const f = r.map(async (p, d) => {
				const v = o[d];
				return (
					v != null && v.uses && (v.uses = ye(v.uses)),
					Ct({
						loader: A.nodes[p],
						url: l,
						params: a,
						route: s,
						parent: async () => {
							const R = {};
							for (let I = 0; I < d; I += 1) Object.assign(R, (await f[I]).data);
							return R;
						},
						server_data_node: Ot(v)
					})
				);
			}),
			m = await Promise.all(f);
		if (h) {
			const p = h.layouts;
			for (let d = 0; d < p.length; d++) p[d] || m.splice(d, 0, void 0);
		}
		u = st({ url: l, params: a, branch: m, status: e, error: n, form: c, route: h ?? null });
	} catch (f) {
		if (f instanceof It) {
			await B(new URL(f.location, location.href));
			return;
		}
		(u = await ht({
			status: et(f),
			error: await V(f, { url: l, params: a, route: s }),
			url: l,
			route: s
		})),
			(t.textContent = ''),
			(w = !1);
	}
	u.props.page && (u.props.page.state = {}), he(u, t, w);
}
async function we(t, e) {
	var s;
	const n = new URL(t);
	(n.pathname = rn(t.pathname)),
		t.pathname.endsWith('/') && n.searchParams.append(Qe, '1'),
		n.searchParams.append(Ze, e.map((i) => (i ? '1' : '0')).join(''));
	const r = window.fetch,
		a = await r(n.href, {});
	if (!a.ok) {
		let i;
		throw (
			((s = a.headers.get('content-type')) != null && s.includes('application/json')
				? (i = await a.json())
				: a.status === 404
					? (i = 'Not Found')
					: a.status === 500 && (i = 'Internal Error'),
			new ft(a.status, i))
		);
	}
	return new Promise(async (i) => {
		var w;
		const o = new Map(),
			c = a.body.getReader(),
			l = new TextDecoder();
		function h(f) {
			return Je(f, {
				...A.decoders,
				Promise: (m) =>
					new Promise((p, d) => {
						o.set(m, { fulfil: p, reject: d });
					})
			});
		}
		let u = '';
		for (;;) {
			const { done: f, value: m } = await c.read();
			if (f && !u) break;
			for (
				u +=
					!m && u
						? `
`
						: l.decode(m, { stream: !0 });
				;

			) {
				const p = u.indexOf(`
`);
				if (p === -1) break;
				const d = JSON.parse(u.slice(0, p));
				if (((u = u.slice(p + 1)), d.type === 'redirect')) return i(d);
				if (d.type === 'data')
					(w = d.nodes) == null ||
						w.forEach((v) => {
							(v == null ? void 0 : v.type) === 'data' &&
								((v.uses = ye(v.uses)), (v.data = h(v.data)));
						}),
						i(d);
				else if (d.type === 'chunk') {
					const { id: v, data: R, error: I } = d,
						g = o.get(v);
					o.delete(v), I ? g.reject(h(I)) : g.fulfil(h(R));
				}
			}
		}
	});
}
function ye(t) {
	return {
		dependencies: new Set((t == null ? void 0 : t.dependencies) ?? []),
		params: new Set((t == null ? void 0 : t.params) ?? []),
		parent: !!(t != null && t.parent),
		route: !!(t != null && t.route),
		url: !!(t != null && t.url),
		search_params: new Set((t == null ? void 0 : t.search_params) ?? [])
	};
}
function _n() {
	const t = document.querySelector('[autofocus]');
	if (t) t.focus();
	else {
		if (!A.hash && location.hash && document.querySelector(location.hash)) {
			const { x: n, y: r } = ct();
			setTimeout(() => {
				const a = history.state;
				location.replace(location.hash), history.replaceState(a, '', location.hash), scrollTo(n, r);
			});
		} else {
			const n = document.body,
				r = n.getAttribute('tabindex');
			(n.tabIndex = -1),
				n.focus({ preventScroll: !0, focusVisible: !1 }),
				r !== null ? n.setAttribute('tabindex', r) : n.removeAttribute('tabindex');
		}
		const e = getSelection();
		if (e && e.type !== 'None') {
			const n = [];
			for (let r = 0; r < e.rangeCount; r += 1) n.push(e.getRangeAt(r));
			setTimeout(() => {
				if (e.rangeCount === n.length) {
					for (let r = 0; r < e.rangeCount; r += 1) {
						const a = n[r],
							s = e.getRangeAt(r);
						if (
							a.commonAncestorContainer !== s.commonAncestorContainer ||
							a.startContainer !== s.startContainer ||
							a.endContainer !== s.endContainer ||
							a.startOffset !== s.startOffset ||
							a.endOffset !== s.endOffset
						)
							return;
					}
					e.removeAllRanges();
				}
			});
		}
	}
}
function $t(t, e, n, r) {
	var c, l;
	let a, s;
	const i = new Promise((h, u) => {
		(a = h), (s = u);
	});
	return (
		i.catch(() => {}),
		{
			navigation: {
				from: {
					params: t.params,
					route: { id: ((c = t.route) == null ? void 0 : c.id) ?? null },
					url: t.url
				},
				to: n && {
					params: (e == null ? void 0 : e.params) ?? null,
					route: { id: ((l = e == null ? void 0 : e.route) == null ? void 0 : l.id) ?? null },
					url: n
				},
				willUnload: !e,
				type: r,
				complete: i
			},
			fulfil: a,
			reject: s
		}
	);
}
function jt(t) {
	return {
		data: t.data,
		error: t.error,
		form: t.form,
		params: t.params,
		route: t.route,
		state: t.state,
		status: t.status,
		url: t.url
	};
}
function vn(t) {
	const e = new URL(t);
	return (e.hash = decodeURIComponent(t.hash)), e;
}
export { Un as a, Ln as g, Tn as i, Sn as l, O as s };
