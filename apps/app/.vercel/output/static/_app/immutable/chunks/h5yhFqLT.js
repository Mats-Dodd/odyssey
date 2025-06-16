var _t = Object.defineProperty;
var vt = (e, t, n) =>
	t in e ? _t(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
var x = (e, t, n) => vt(e, typeof t != 'symbol' ? t + '' : t, n);
import { w as Ve, M as bt } from './wdwkOUVI.js';
import { w as Se } from './YlZQZqOj.js';
new URL('sveltekit-internal://');
function At(e, t) {
	return e === '/' || t === 'ignore'
		? e
		: t === 'never'
			? e.endsWith('/')
				? e.slice(0, -1)
				: e
			: t === 'always' && !e.endsWith('/')
				? e + '/'
				: e;
}
function kt(e) {
	return e.split('%25').map(decodeURI).join('%25');
}
function St(e) {
	for (const t in e) e[t] = decodeURIComponent(e[t]);
	return e;
}
function me({ href: e }) {
	return e.split('#')[0];
}
function Et(e, t, n, r = !1) {
	const a = new URL(e);
	Object.defineProperty(a, 'searchParams', {
		value: new Proxy(a.searchParams, {
			get(i, o) {
				if (o === 'get' || o === 'getAll' || o === 'has') return (l) => (n(l), i[o](l));
				t();
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
				return t(), e[i];
			},
			enumerable: !0,
			configurable: !0
		});
	return a;
}
function Rt(...e) {
	let t = 5381;
	for (const n of e)
		if (typeof n == 'string') {
			let r = n.length;
			for (; r; ) t = (t * 33) ^ n.charCodeAt(--r);
		} else if (ArrayBuffer.isView(n)) {
			const r = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
			let a = r.length;
			for (; a; ) t = (t * 33) ^ r[--a];
		} else throw new TypeError('value must be a string or TypedArray');
	return (t >>> 0).toString(36);
}
function It(e) {
	const t = atob(e),
		n = new Uint8Array(t.length);
	for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
	return n.buffer;
}
const Ut = window.fetch;
window.fetch = (e, t) => (
	(e instanceof Request ? e.method : (t == null ? void 0 : t.method) || 'GET') !== 'GET' &&
		q.delete(Ee(e)),
	Ut(e, t)
);
const q = new Map();
function Lt(e, t) {
	const n = Ee(e, t),
		r = document.querySelector(n);
	if (r != null && r.textContent) {
		let { body: a, ...s } = JSON.parse(r.textContent);
		const i = r.getAttribute('data-ttl');
		return (
			i && q.set(n, { body: a, init: s, ttl: 1e3 * Number(i) }),
			r.getAttribute('data-b64') !== null && (a = It(a)),
			Promise.resolve(new Response(a, s))
		);
	}
	return window.fetch(e, t);
}
function Tt(e, t, n) {
	if (q.size > 0) {
		const r = Ee(e, n),
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
	return window.fetch(t, n);
}
function Ee(e, t) {
	let r = `script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request ? e.url : e)}]`;
	if ((t != null && t.headers) || (t != null && t.body)) {
		const a = [];
		t.headers && a.push([...new Headers(t.headers)].join(',')),
			t.body && (typeof t.body == 'string' || ArrayBuffer.isView(t.body)) && a.push(t.body),
			(r += `[data-hash="${Rt(...a)}"]`);
	}
	return r;
}
const xt = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function Pt(e) {
	const t = [];
	return {
		pattern:
			e === '/'
				? /^\/$/
				: new RegExp(
						`^${Ot(e)
							.map((r) => {
								const a = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);
								if (a)
									return (
										t.push({ name: a[1], matcher: a[2], optional: !1, rest: !0, chained: !0 }),
										'(?:/(.*))?'
									);
								const s = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);
								if (s)
									return (
										t.push({ name: s[1], matcher: s[2], optional: !0, rest: !1, chained: !0 }),
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
													return we(String.fromCharCode(parseInt(c.slice(2), 16)));
												if (c.startsWith('u+'))
													return we(
														String.fromCharCode(
															...c
																.slice(2)
																.split('-')
																.map((p) => parseInt(p, 16))
														)
													);
												const h = xt.exec(c),
													[, u, w, f, m] = h;
												return (
													t.push({
														name: f,
														matcher: m,
														optional: !!u,
														rest: !!w,
														chained: w ? l === 1 && i[0] === '' : !1
													}),
													w ? '(.*?)' : u ? '([^/]*)?' : '([^/]+?)'
												);
											}
											return we(c);
										})
										.join('')
								);
							})
							.join('')}/?$`
					),
		params: t
	};
}
function Ct(e) {
	return !/^\([^)]+\)$/.test(e);
}
function Ot(e) {
	return e.slice(1).split('/').filter(Ct);
}
function Nt(e, t, n) {
	const r = {},
		a = e.slice(1),
		s = a.filter((o) => o !== void 0);
	let i = 0;
	for (let o = 0; o < t.length; o += 1) {
		const c = t[o];
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
			const h = t[o + 1],
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
function we(e) {
	return e
		.normalize()
		.replace(/[[\]]/g, '\\$&')
		.replace(/%/g, '%25')
		.replace(/\//g, '%2[Ff]')
		.replace(/\?/g, '%3[Ff]')
		.replace(/#/g, '%23')
		.replace(/[.*+?^${}()|\\]/g, '\\$&');
}
function $t({ nodes: e, server_loads: t, dictionary: n, matchers: r }) {
	const a = new Set(t);
	return Object.entries(n).map(([o, [c, l, h]]) => {
		const { pattern: u, params: w } = Pt(o),
			f = {
				id: o,
				exec: (m) => {
					const p = u.exec(m);
					if (p) return Nt(p, w, r);
				},
				errors: [1, ...(h || [])].map((m) => e[m]),
				layouts: [0, ...(l || [])].map(i),
				leaf: s(c)
			};
		return (f.errors.length = f.layouts.length = Math.max(f.errors.length, f.layouts.length)), f;
	});
	function s(o) {
		const c = o < 0;
		return c && (o = ~o), [c, e[o]];
	}
	function i(o) {
		return o === void 0 ? o : [a.has(o), e[o]];
	}
}
function Ze(e, t = JSON.parse) {
	try {
		return t(sessionStorage[e]);
	} catch {}
}
function Be(e, t, n = JSON.stringify) {
	const r = n(t);
	try {
		sessionStorage[e] = r;
	} catch {}
}
var Je;
const T = ((Je = globalThis.__sveltekit_z98e6p) == null ? void 0 : Je.base) ?? '';
var Xe;
const jt = ((Xe = globalThis.__sveltekit_z98e6p) == null ? void 0 : Xe.assets) ?? T,
	Dt = '1750040715132',
	Qe = 'sveltekit:snapshot',
	et = 'sveltekit:scroll',
	tt = 'sveltekit:states',
	Ft = 'sveltekit:pageurl',
	F = 'sveltekit:history',
	W = 'sveltekit:navigation',
	$ = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1, false: -1 },
	X = location.origin;
function Re(e) {
	if (e instanceof URL) return e;
	let t = document.baseURI;
	if (!t) {
		const n = document.getElementsByTagName('base');
		t = n.length ? n[0].href : document.URL;
	}
	return new URL(e, t);
}
function ce() {
	return { x: pageXOffset, y: pageYOffset };
}
function D(e, t) {
	return e.getAttribute(`data-sveltekit-${t}`);
}
const Me = { ...$, '': $.hover };
function nt(e) {
	let t = e.assignedSlot ?? e.parentNode;
	return (t == null ? void 0 : t.nodeType) === 11 && (t = t.host), t;
}
function at(e, t) {
	for (; e && e !== t; ) {
		if (e.nodeName.toUpperCase() === 'A' && e.hasAttribute('href')) return e;
		e = nt(e);
	}
}
function be(e, t, n) {
	let r;
	try {
		if (
			((r = new URL(e instanceof SVGAElement ? e.href.baseVal : e.href, document.baseURI)),
			n && r.hash.match(/^#[^/]/))
		) {
			const o = location.hash.split('#')[1] || '/';
			r.hash = `#${o}${r.hash}`;
		}
	} catch {}
	const a = e instanceof SVGAElement ? e.target.baseVal : e.target,
		s = !r || !!a || le(r, t, n) || (e.getAttribute('rel') || '').split(/\s+/).includes('external'),
		i = (r == null ? void 0 : r.origin) === X && e.hasAttribute('download');
	return { url: r, external: s, target: a, download: i };
}
function ee(e) {
	let t = null,
		n = null,
		r = null,
		a = null,
		s = null,
		i = null,
		o = e;
	for (; o && o !== document.documentElement; )
		r === null && (r = D(o, 'preload-code')),
			a === null && (a = D(o, 'preload-data')),
			t === null && (t = D(o, 'keepfocus')),
			n === null && (n = D(o, 'noscroll')),
			s === null && (s = D(o, 'reload')),
			i === null && (i = D(o, 'replacestate')),
			(o = nt(o));
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
		preload_code: Me[r ?? 'off'],
		preload_data: Me[a ?? 'off'],
		keepfocus: c(t),
		noscroll: c(n),
		reload: c(s),
		replace_state: c(i)
	};
}
function qe(e) {
	const t = Se(e);
	let n = !0;
	function r() {
		(n = !0), t.update((i) => i);
	}
	function a(i) {
		(n = !1), t.set(i);
	}
	function s(i) {
		let o;
		return t.subscribe((c) => {
			(o === void 0 || (n && c !== o)) && i((o = c));
		});
	}
	return { notify: r, set: a, subscribe: s };
}
const rt = { v: () => {} };
function Vt() {
	const { set: e, subscribe: t } = Se(!1);
	let n;
	async function r() {
		clearTimeout(n);
		try {
			const a = await fetch(`${jt}/_app/version.json`, {
				headers: { pragma: 'no-cache', 'cache-control': 'no-cache' }
			});
			if (!a.ok) return !1;
			const i = (await a.json()).version !== Dt;
			return i && (e(!0), rt.v(), clearTimeout(n)), i;
		} catch {
			return !1;
		}
	}
	return { subscribe: t, check: r };
}
function le(e, t, n) {
	return e.origin !== X || !e.pathname.startsWith(t)
		? !0
		: n
			? !(
					e.pathname === t + '/' ||
					e.pathname === t + '/index.html' ||
					(e.protocol === 'file:' && e.pathname.replace(/\/[^/]+\.html?$/, '') === t)
				)
			: !1;
}
function Sn(e) {}
function Ge(e) {
	const t = Mt(e),
		n = new ArrayBuffer(t.length),
		r = new DataView(n);
	for (let a = 0; a < n.byteLength; a++) r.setUint8(a, t.charCodeAt(a));
	return n;
}
const Bt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function Mt(e) {
	e.length % 4 === 0 && (e = e.replace(/==?$/, ''));
	let t = '',
		n = 0,
		r = 0;
	for (let a = 0; a < e.length; a++)
		(n <<= 6),
			(n |= Bt.indexOf(e[a])),
			(r += 6),
			r === 24 &&
				((t += String.fromCharCode((n & 16711680) >> 16)),
				(t += String.fromCharCode((n & 65280) >> 8)),
				(t += String.fromCharCode(n & 255)),
				(n = r = 0));
	return (
		r === 12
			? ((n >>= 4), (t += String.fromCharCode(n)))
			: r === 18 &&
				((n >>= 2),
				(t += String.fromCharCode((n & 65280) >> 8)),
				(t += String.fromCharCode(n & 255))),
		t
	);
}
const qt = -1,
	Gt = -2,
	Ht = -3,
	Kt = -4,
	Wt = -5,
	Yt = -6;
function zt(e, t) {
	if (typeof e == 'number') return a(e, !0);
	if (!Array.isArray(e) || e.length === 0) throw new Error('Invalid input');
	const n = e,
		r = Array(n.length);
	function a(s, i = !1) {
		if (s === qt) return;
		if (s === Ht) return NaN;
		if (s === Kt) return 1 / 0;
		if (s === Wt) return -1 / 0;
		if (s === Yt) return -0;
		if (i) throw new Error('Invalid input');
		if (s in r) return r[s];
		const o = n[s];
		if (!o || typeof o != 'object') r[s] = o;
		else if (Array.isArray(o))
			if (typeof o[0] == 'string') {
				const c = o[0],
					l = t == null ? void 0 : t[c];
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
							p = Ge(m),
							d = new f(p);
						r[s] = d;
						break;
					}
					case 'ArrayBuffer': {
						const f = o[1],
							m = Ge(f);
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
					h !== Gt && (c[l] = a(h));
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
const ot = new Set(['load', 'prerender', 'csr', 'ssr', 'trailingSlash', 'config']);
[...ot];
const Jt = new Set([...ot]);
[...Jt];
function Xt(e) {
	return e.filter((t) => t != null);
}
class fe {
	constructor(t, n) {
		(this.status = t),
			typeof n == 'string'
				? (this.body = { message: n })
				: n
					? (this.body = n)
					: (this.body = { message: `Error: ${t}` });
	}
	toString() {
		return JSON.stringify(this.body);
	}
}
class Ie {
	constructor(t, n) {
		(this.status = t), (this.location = n);
	}
}
class Ue extends Error {
	constructor(t, n, r) {
		super(r), (this.status = t), (this.text = n);
	}
}
const Zt = 'x-sveltekit-invalidated',
	Qt = 'x-sveltekit-trailing-slash';
function te(e) {
	return e instanceof fe || e instanceof Ue ? e.status : 500;
}
function en(e) {
	return e instanceof Ue ? e.text : 'Internal Error';
}
let E, Y, ye;
const tn = Ve.toString().includes('$$') || /function \w+\(\) \{\}/.test(Ve.toString());
tn
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
		(ye = { current: !1 }))
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
		(ye = new (class {
			constructor() {
				x(this, 'current', $state.raw(!1));
			}
		})()),
		(rt.v = () => (ye.current = !0)));
function st(e) {
	Object.assign(E, e);
}
const nn = '/__data.json',
	an = '.html__data.json';
function rn(e) {
	return e.endsWith('.html') ? e.replace(/\.html$/, an) : e.replace(/\/$/, '') + nn;
}
const on = new Set(['icon', 'shortcut icon', 'apple-touch-icon']),
	j = Ze(et) ?? {},
	z = Ze(Qe) ?? {},
	O = { url: qe({}), page: qe({}), navigating: Se(null), updated: Vt() };
function Le(e) {
	j[e] = ce();
}
function sn(e, t) {
	let n = e + 1;
	for (; j[n]; ) delete j[n], (n += 1);
	for (n = t + 1; z[n]; ) delete z[n], (n += 1);
}
function B(e) {
	return (location.href = e.href), new Promise(() => {});
}
async function it() {
	if ('serviceWorker' in navigator) {
		const e = await navigator.serviceWorker.getRegistration(T || '/');
		e && (await e.update());
	}
}
function He() {}
let Te, Ae, ne, P, ke, A;
const ae = [],
	re = [];
let U = null;
const Q = new Map(),
	ct = new Set(),
	cn = new Set(),
	G = new Set();
let y = { branch: [], error: null, url: null },
	xe = !1,
	oe = !1,
	Ke = !0,
	J = !1,
	M = !1,
	lt = !1,
	ue = !1,
	Pe,
	S,
	L,
	C;
const H = new Set();
let _e;
async function Un(e, t, n) {
	var s, i, o, c;
	document.URL !== location.href && (location.href = location.href),
		(A = e),
		await ((i = (s = e.hooks).init) == null ? void 0 : i.call(s)),
		(Te = $t(e)),
		(P = document.documentElement),
		(ke = t),
		(Ae = e.nodes[0]),
		(ne = e.nodes[1]),
		Ae(),
		ne(),
		(S = (o = history.state) == null ? void 0 : o[F]),
		(L = (c = history.state) == null ? void 0 : c[W]),
		S || ((S = L = Date.now()), history.replaceState({ ...history.state, [F]: S, [W]: L }, ''));
	const r = j[S];
	function a() {
		r && ((history.scrollRestoration = 'manual'), scrollTo(r.x, r.y));
	}
	n
		? (a(), await yn(ke, n))
		: (await K({
				type: 'enter',
				url: Re(A.hash ? vn(new URL(location.href)) : location.href),
				replace_state: !0
			}),
			a()),
		wn();
}
async function ln() {
	if ((await (_e || (_e = Promise.resolve())), !_e)) return;
	_e = null;
	const e = (C = {}),
		t = await Z(y.url, !0);
	U = null;
	const n = t && (await Ne(t));
	if (!(!n || e !== C)) {
		if (n.type === 'redirect') return de(new URL(n.location, y.url).href, {}, 1, e);
		n.props.page && Object.assign(E, n.props.page),
			(y = n.state),
			ft(),
			Pe.$set(n.props),
			st(n.props.page);
	}
}
function ft() {
	(ae.length = 0), (ue = !1);
}
function ut(e) {
	re.some((t) => (t == null ? void 0 : t.snapshot)) &&
		(z[e] = re.map((t) => {
			var n;
			return (n = t == null ? void 0 : t.snapshot) == null ? void 0 : n.capture();
		}));
}
function dt(e) {
	var t;
	(t = z[e]) == null ||
		t.forEach((n, r) => {
			var a, s;
			(s = (a = re[r]) == null ? void 0 : a.snapshot) == null || s.restore(n);
		});
}
function We() {
	Le(S), Be(et, j), ut(L), Be(Qe, z);
}
async function de(e, t, n, r) {
	return K({
		type: 'goto',
		url: Re(e),
		keepfocus: t.keepFocus,
		noscroll: t.noScroll,
		replace_state: t.replaceState,
		state: t.state,
		redirect_count: n,
		nav_token: r,
		accept: () => {
			t.invalidateAll && (ue = !0), t.invalidate && t.invalidate.forEach(mn);
		}
	});
}
async function fn(e) {
	if (e.id !== (U == null ? void 0 : U.id)) {
		const t = {};
		H.add(t),
			(U = {
				id: e.id,
				token: t,
				promise: Ne({ ...e, preload: t }).then(
					(n) => (H.delete(t), n.type === 'loaded' && n.state.error && (U = null), n)
				)
			});
	}
	return U.promise;
}
async function ve(e) {
	var n;
	const t = (n = await Z(e, !1)) == null ? void 0 : n.route;
	t && (await Promise.all([...t.layouts, t.leaf].map((r) => (r == null ? void 0 : r[1]()))));
}
function ht(e, t, n) {
	var a;
	y = e.state;
	const r = document.querySelector('style[data-sveltekit]');
	if (
		(r && r.remove(),
		Object.assign(E, e.props.page),
		(Pe = new A.root({
			target: t,
			props: { ...e.props, stores: O, components: re },
			hydrate: n,
			sync: !1
		})),
		dt(L),
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
	oe = !0;
}
function se({ url: e, params: t, branch: n, status: r, error: a, route: s, form: i }) {
	let o = 'never';
	if (T && (e.pathname === T || e.pathname === T + '/')) o = 'always';
	else for (const f of n) (f == null ? void 0 : f.slash) !== void 0 && (o = f.slash);
	(e.pathname = At(e.pathname, o)), (e.search = e.search);
	const c = {
		type: 'loaded',
		state: { url: e, params: t, branch: n, error: a, route: s },
		props: { constructors: Xt(n).map((f) => f.node.component), page: je(E) }
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
		(!y.url || e.href !== y.url.href || y.error !== a || (i !== void 0 && i !== E.form) || h) &&
			(c.props.page = {
				error: a,
				params: t,
				route: { id: (s == null ? void 0 : s.id) ?? null },
				state: {},
				status: r,
				url: new URL(e),
				form: i ?? null,
				data: h ? l : E.data
			}),
		c
	);
}
async function Ce({ loader: e, parent: t, url: n, params: r, route: a, server_data_node: s }) {
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
		l = await e();
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
			url: Et(
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
				const { resolved: v, promise: R } = pt(p, d, n);
				return o && f(v.href), R;
			},
			setHeaders: () => {},
			depends: f,
			parent() {
				return o && (c.parent = !0), t();
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
		loader: e,
		server: s,
		universal: (u = l.universal) != null && u.load ? { type: 'data', data: i, uses: c } : null,
		data: i ?? (s == null ? void 0 : s.data) ?? null,
		slash: ((w = l.universal) == null ? void 0 : w.trailingSlash) ?? (s == null ? void 0 : s.slash)
	};
}
function pt(e, t, n) {
	let r = e instanceof Request ? e.url : e;
	const a = new URL(r, n);
	a.origin === n.origin && (r = a.href.slice(n.origin.length));
	const s = oe ? Tt(r, a.href, t) : Lt(r, t);
	return { resolved: a, promise: s };
}
function Ye(e, t, n, r, a, s) {
	if (ue) return !0;
	if (!a) return !1;
	if ((a.parent && e) || (a.route && t) || (a.url && n)) return !0;
	for (const i of a.search_params) if (r.has(i)) return !0;
	for (const i of a.params) if (s[i] !== y.params[i]) return !0;
	for (const i of a.dependencies) if (ae.some((o) => o(new URL(i)))) return !0;
	return !1;
}
function Oe(e, t) {
	return (e == null ? void 0 : e.type) === 'data'
		? e
		: (e == null ? void 0 : e.type) === 'skip'
			? (t ?? null)
			: null;
}
function un(e, t) {
	if (!e) return new Set(t.searchParams.keys());
	const n = new Set([...e.searchParams.keys(), ...t.searchParams.keys()]);
	for (const r of n) {
		const a = e.searchParams.getAll(r),
			s = t.searchParams.getAll(r);
		a.every((i) => s.includes(i)) && s.every((i) => a.includes(i)) && n.delete(r);
	}
	return n;
}
function ze({ error: e, url: t, route: n, params: r }) {
	return {
		type: 'loaded',
		state: { error: e, url: t, route: n, params: r, branch: [] },
		props: { page: je(E), constructors: [] }
	};
}
async function Ne({ id: e, invalidating: t, url: n, params: r, route: a, preload: s }) {
	if ((U == null ? void 0 : U.id) === e) return H.delete(U.token), U.promise;
	const { errors: i, layouts: o, leaf: c } = a,
		l = [...o, c];
	i.forEach((g) => (g == null ? void 0 : g().catch(() => {}))),
		l.forEach((g) => (g == null ? void 0 : g[1]().catch(() => {})));
	let h = null;
	const u = y.url ? e !== ie(y.url) : !1,
		w = y.route ? a.id !== y.route.id : !1,
		f = un(y.url, n);
	let m = !1;
	const p = l.map((g, _) => {
		var N;
		const b = y.branch[_],
			k =
				!!(g != null && g[0]) &&
				((b == null ? void 0 : b.loader) !== g[1] ||
					Ye(m, w, u, f, (N = b.server) == null ? void 0 : N.uses, r));
		return k && (m = !0), k;
	});
	if (p.some(Boolean)) {
		try {
			h = await wt(n, p);
		} catch (g) {
			const _ = await V(g, { url: n, params: r, route: { id: e } });
			return H.has(s)
				? ze({ error: _, url: n, params: r, route: a })
				: he({ status: te(g), error: _, url: n, route: a });
		}
		if (h.type === 'redirect') return h;
	}
	const d = h == null ? void 0 : h.nodes;
	let v = !1;
	const R = l.map(async (g, _) => {
		var pe;
		if (!g) return;
		const b = y.branch[_],
			k = d == null ? void 0 : d[_];
		if (
			(!k || k.type === 'skip') &&
			g[1] === (b == null ? void 0 : b.loader) &&
			!Ye(v, w, u, f, (pe = b.universal) == null ? void 0 : pe.uses, r)
		)
			return b;
		if (((v = !0), (k == null ? void 0 : k.type) === 'error')) throw k;
		return Ce({
			loader: g[1],
			url: n,
			params: r,
			route: a,
			parent: async () => {
				var Fe;
				const De = {};
				for (let ge = 0; ge < _; ge += 1)
					Object.assign(De, (Fe = await R[ge]) == null ? void 0 : Fe.data);
				return De;
			},
			server_data_node: Oe(
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
				if (_ instanceof Ie) return { type: 'redirect', location: _.location };
				if (H.has(s))
					return ze({
						error: await V(_, { params: r, url: n, route: { id: a.id } }),
						url: n,
						params: r,
						route: a
					});
				let b = te(_),
					k;
				if (d != null && d.includes(_)) (b = _.status ?? b), (k = _.error);
				else if (_ instanceof fe) k = _.body;
				else {
					if (await O.updated.check()) return await it(), await B(n);
					k = await V(_, { params: r, url: n, route: { id: a.id } });
				}
				const N = await dn(g, I, i);
				return N
					? se({
							url: n,
							params: r,
							branch: I.slice(0, N.idx).concat(N.node),
							status: b,
							error: k,
							route: a
						})
					: await mt(n, { id: a.id }, k, b);
			}
		else I.push(void 0);
	return se({
		url: n,
		params: r,
		branch: I,
		status: 200,
		error: null,
		route: a,
		form: t ? void 0 : null
	});
}
async function dn(e, t, n) {
	for (; e--; )
		if (n[e]) {
			let r = e;
			for (; !t[r]; ) r -= 1;
			try {
				return {
					idx: r + 1,
					node: { node: await n[e](), loader: n[e], data: {}, server: null, universal: null }
				};
			} catch {
				continue;
			}
		}
}
async function he({ status: e, error: t, url: n, route: r }) {
	const a = {};
	let s = null;
	if (A.server_loads[0] === 0)
		try {
			const o = await wt(n, [!0]);
			if (o.type !== 'data' || (o.nodes[0] && o.nodes[0].type !== 'data')) throw 0;
			s = o.nodes[0] ?? null;
		} catch {
			(n.origin !== X || n.pathname !== location.pathname || xe) && (await B(n));
		}
	try {
		const o = await Ce({
				loader: Ae,
				url: n,
				params: a,
				route: r,
				parent: () => Promise.resolve({}),
				server_data_node: Oe(s)
			}),
			c = { node: await ne(), loader: ne, universal: null, server: null, data: null };
		return se({ url: n, params: a, branch: [o, c], status: e, error: t, route: null });
	} catch (o) {
		if (o instanceof Ie) return de(new URL(o.location, location.href), {}, 0);
		throw o;
	}
}
async function hn(e) {
	const t = e.href;
	if (Q.has(t)) return Q.get(t);
	let n;
	try {
		const r = (async () => {
			let a =
				(await A.hooks.reroute({ url: new URL(e), fetch: async (s, i) => pt(s, i, e).promise })) ??
				e;
			if (typeof a == 'string') {
				const s = new URL(e);
				A.hash ? (s.hash = a) : (s.pathname = a), (a = s);
			}
			return a;
		})();
		Q.set(t, r), (n = await r);
	} catch {
		Q.delete(t);
		return;
	}
	return n;
}
async function Z(e, t) {
	if (e && !le(e, T, A.hash)) {
		const n = await hn(e);
		if (!n) return;
		const r = pn(n);
		for (const a of Te) {
			const s = a.exec(r);
			if (s) return { id: ie(e), invalidating: t, route: a, params: St(s), url: e };
		}
	}
}
function pn(e) {
	return (
		kt(A.hash ? e.hash.replace(/^#/, '').replace(/[?#].+/, '') : e.pathname.slice(T.length)) || '/'
	);
}
function ie(e) {
	return (A.hash ? e.hash.replace(/^#/, '') : e.pathname) + e.search;
}
function gt({ url: e, type: t, intent: n, delta: r }) {
	let a = !1;
	const s = $e(y, n, e, t);
	r !== void 0 && (s.navigation.delta = r);
	const i = {
		...s.navigation,
		cancel: () => {
			(a = !0), s.reject(new Error('navigation cancelled'));
		}
	};
	return J || ct.forEach((o) => o(i)), a ? null : s;
}
async function K({
	type: e,
	url: t,
	popped: n,
	keepfocus: r,
	noscroll: a,
	replace_state: s,
	state: i = {},
	redirect_count: o = 0,
	nav_token: c = {},
	accept: l = He,
	block: h = He
}) {
	const u = C;
	C = c;
	const w = await Z(t, !1),
		f =
			e === 'enter'
				? $e(y, w, t, e)
				: gt({ url: t, type: e, delta: n == null ? void 0 : n.delta, intent: w });
	if (!f) {
		h(), C === c && (C = u);
		return;
	}
	const m = S,
		p = L;
	l(),
		(J = !0),
		oe && f.navigation.type !== 'enter' && O.navigating.set((Y.current = f.navigation));
	let d = w && (await Ne(w));
	if (!d) {
		if (le(t, T, A.hash)) return await B(t);
		d = await mt(
			t,
			{ id: null },
			await V(new Ue(404, 'Not Found', `Not found: ${t.pathname}`), {
				url: t,
				params: {},
				route: { id: null }
			}),
			404
		);
	}
	if (((t = (w == null ? void 0 : w.url) || t), C !== c))
		return f.reject(new Error('navigation aborted')), !1;
	if (d.type === 'redirect')
		if (o >= 20)
			d = await he({
				status: 500,
				error: await V(new Error('Redirect loop'), { url: t, params: {}, route: { id: null } }),
				url: t,
				route: { id: null }
			});
		else return await de(new URL(d.location, t).href, {}, o + 1, c), !1;
	else d.props.page.status >= 400 && (await O.updated.check()) && (await it(), await B(t));
	if (
		(ft(),
		Le(m),
		ut(p),
		d.props.page.url.pathname !== t.pathname && (t.pathname = d.props.page.url.pathname),
		(i = n ? n.state : i),
		!n)
	) {
		const g = s ? 0 : 1,
			_ = { [F]: (S += g), [W]: (L += g), [tt]: i };
		(s ? history.replaceState : history.pushState).call(history, _, '', t), s || sn(S, L);
	}
	if (((U = null), (d.props.page.state = i), oe)) {
		(y = d.state), d.props.page && (d.props.page.url = t);
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
		Pe.$set(d.props), st(d.props.page), (lt = !0);
	} else ht(d, ke, !1);
	const { activeElement: v } = document;
	await bt();
	const R = n ? n.scroll : a ? ce() : null;
	if (Ke) {
		const g =
			t.hash &&
			document.getElementById(
				decodeURIComponent(A.hash ? (t.hash.split('#')[2] ?? '') : t.hash.slice(1))
			);
		R ? scrollTo(R.x, R.y) : g ? g.scrollIntoView() : scrollTo(0, 0);
	}
	const I = document.activeElement !== v && document.activeElement !== document.body;
	!r && !I && _n(),
		(Ke = !0),
		d.props.page && Object.assign(E, d.props.page),
		(J = !1),
		e === 'popstate' && dt(L),
		f.fulfil(void 0),
		G.forEach((g) => g(f.navigation)),
		O.navigating.set((Y.current = null));
}
async function mt(e, t, n, r) {
	return e.origin === X && e.pathname === location.pathname && !xe
		? await he({ status: r, error: n, url: e, route: t })
		: await B(e);
}
function gn() {
	let e, t, n;
	P.addEventListener('mousemove', (o) => {
		const c = o.target;
		clearTimeout(e),
			(e = setTimeout(() => {
				s(c, $.hover);
			}, 20));
	});
	function r(o) {
		o.defaultPrevented || s(o.composedPath()[0], $.tap);
	}
	P.addEventListener('mousedown', r), P.addEventListener('touchstart', r, { passive: !0 });
	const a = new IntersectionObserver(
		(o) => {
			for (const c of o) c.isIntersecting && (ve(new URL(c.target.href)), a.unobserve(c.target));
		},
		{ threshold: 0 }
	);
	async function s(o, c) {
		const l = at(o, P),
			h = l === t && c >= n;
		if (!l || h) return;
		const { url: u, external: w, download: f } = be(l, T, A.hash);
		if (w || f) return;
		const m = ee(l),
			p = u && ie(y.url) === ie(u);
		if (!(m.reload || p))
			if (c <= m.preload_data) {
				(t = l), (n = $.tap);
				const d = await Z(u, !1);
				if (!d) return;
				fn(d);
			} else c <= m.preload_code && ((t = l), (n = c), ve(u));
	}
	function i() {
		a.disconnect();
		for (const o of P.querySelectorAll('a')) {
			const { url: c, external: l, download: h } = be(o, T, A.hash);
			if (l || h) continue;
			const u = ee(o);
			u.reload ||
				(u.preload_code === $.viewport && a.observe(o), u.preload_code === $.eager && ve(c));
		}
	}
	G.add(i), i();
}
function V(e, t) {
	if (e instanceof fe) return e.body;
	const n = te(e),
		r = en(e);
	return A.hooks.handleError({ error: e, event: t, status: n, message: r }) ?? { message: r };
}
function Ln(e, t = {}) {
	return (
		(e = new URL(Re(e))),
		e.origin !== X ? Promise.reject(new Error('goto: invalid URL')) : de(e, t, 0)
	);
}
function mn(e) {
	if (typeof e == 'function') ae.push(e);
	else {
		const { href: t } = new URL(e, location.href);
		ae.push((n) => n.href === t);
	}
}
function Tn() {
	return (ue = !0), ln();
}
function wn() {
	var t;
	(history.scrollRestoration = 'manual'),
		addEventListener('beforeunload', (n) => {
			let r = !1;
			if ((We(), !J)) {
				const a = $e(y, void 0, null, 'leave'),
					s = {
						...a.navigation,
						cancel: () => {
							(r = !0), a.reject(new Error('navigation cancelled'));
						}
					};
				ct.forEach((i) => i(s));
			}
			r ? (n.preventDefault(), (n.returnValue = '')) : (history.scrollRestoration = 'auto');
		}),
		addEventListener('visibilitychange', () => {
			document.visibilityState === 'hidden' && We();
		}),
		((t = navigator.connection) != null && t.saveData) || gn(),
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
			const r = at(n.composedPath()[0], P);
			if (!r) return;
			const { url: a, external: s, target: i, download: o } = be(r, T, A.hash);
			if (!a) return;
			if (i === '_parent' || i === '_top') {
				if (window.parent !== window) return;
			} else if (i && i !== '_self') return;
			const c = ee(r);
			if (
				(!(r instanceof SVGAElement) &&
					a.protocol !== location.protocol &&
					!(a.protocol === 'https:' || a.protocol === 'http:')) ||
				o
			)
				return;
			const [h, u] = (A.hash ? a.hash.replace(/^#/, '') : a.href).split('#'),
				w = h === me(location);
			if (s || (c.reload && (!w || !u))) {
				gt({ url: a, type: 'link' }) ? (J = !0) : n.preventDefault();
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
				if (((M = !0), Le(S), e(a), !c.replace_state)) return;
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
			if (le(o, T, !1)) return;
			const c = n.target,
				l = ee(c);
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
					i = n.state[tt] ?? {},
					o = new URL(n.state[Ft] ?? location.href),
					c = n.state[W],
					l = y.url ? me(location) === me(y.url) : !1;
				if (c === L && (lt || l)) {
					i !== E.state && (E.state = i), e(o), (j[S] = ce()), s && scrollTo(s.x, s.y), (S = a);
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
				e(a), A.hash && location.reload();
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
	function e(n) {
		(y.url = E.url = n), O.page.set(je(E)), O.page.notify();
	}
}
async function yn(
	e,
	{ status: t = 200, error: n, node_ids: r, params: a, route: s, server_route: i, data: o, form: c }
) {
	xe = !0;
	const l = new URL(location.href);
	let h;
	({ params: a = {}, route: s = { id: null } } = (await Z(l, !1)) || {}),
		(h = Te.find(({ id: f }) => f === s.id));
	let u,
		w = !0;
	try {
		const f = r.map(async (p, d) => {
				const v = o[d];
				return (
					v != null && v.uses && (v.uses = yt(v.uses)),
					Ce({
						loader: A.nodes[p],
						url: l,
						params: a,
						route: s,
						parent: async () => {
							const R = {};
							for (let I = 0; I < d; I += 1) Object.assign(R, (await f[I]).data);
							return R;
						},
						server_data_node: Oe(v)
					})
				);
			}),
			m = await Promise.all(f);
		if (h) {
			const p = h.layouts;
			for (let d = 0; d < p.length; d++) p[d] || m.splice(d, 0, void 0);
		}
		u = se({ url: l, params: a, branch: m, status: t, error: n, form: c, route: h ?? null });
	} catch (f) {
		if (f instanceof Ie) {
			await B(new URL(f.location, location.href));
			return;
		}
		(u = await he({
			status: te(f),
			error: await V(f, { url: l, params: a, route: s }),
			url: l,
			route: s
		})),
			(e.textContent = ''),
			(w = !1);
	}
	u.props.page && (u.props.page.state = {}), ht(u, e, w);
}
async function wt(e, t) {
	var s;
	const n = new URL(e);
	(n.pathname = rn(e.pathname)),
		e.pathname.endsWith('/') && n.searchParams.append(Qt, '1'),
		n.searchParams.append(Zt, t.map((i) => (i ? '1' : '0')).join(''));
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
			new fe(a.status, i))
		);
	}
	return new Promise(async (i) => {
		var w;
		const o = new Map(),
			c = a.body.getReader(),
			l = new TextDecoder();
		function h(f) {
			return zt(f, {
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
								((v.uses = yt(v.uses)), (v.data = h(v.data)));
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
function yt(e) {
	return {
		dependencies: new Set((e == null ? void 0 : e.dependencies) ?? []),
		params: new Set((e == null ? void 0 : e.params) ?? []),
		parent: !!(e != null && e.parent),
		route: !!(e != null && e.route),
		url: !!(e != null && e.url),
		search_params: new Set((e == null ? void 0 : e.search_params) ?? [])
	};
}
function _n() {
	const e = document.querySelector('[autofocus]');
	if (e) e.focus();
	else {
		if (!A.hash && location.hash && document.querySelector(location.hash)) {
			const { x: n, y: r } = ce();
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
		const t = getSelection();
		if (t && t.type !== 'None') {
			const n = [];
			for (let r = 0; r < t.rangeCount; r += 1) n.push(t.getRangeAt(r));
			setTimeout(() => {
				if (t.rangeCount === n.length) {
					for (let r = 0; r < t.rangeCount; r += 1) {
						const a = n[r],
							s = t.getRangeAt(r);
						if (
							a.commonAncestorContainer !== s.commonAncestorContainer ||
							a.startContainer !== s.startContainer ||
							a.endContainer !== s.endContainer ||
							a.startOffset !== s.startOffset ||
							a.endOffset !== s.endOffset
						)
							return;
					}
					t.removeAllRanges();
				}
			});
		}
	}
}
function $e(e, t, n, r) {
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
					params: e.params,
					route: { id: ((c = e.route) == null ? void 0 : c.id) ?? null },
					url: e.url
				},
				to: n && {
					params: (t == null ? void 0 : t.params) ?? null,
					route: { id: ((l = t == null ? void 0 : t.route) == null ? void 0 : l.id) ?? null },
					url: n
				},
				willUnload: !t,
				type: r,
				complete: i
			},
			fulfil: a,
			reject: s
		}
	);
}
function je(e) {
	return {
		data: e.data,
		error: e.error,
		form: e.form,
		params: e.params,
		route: e.route,
		state: e.state,
		status: e.status,
		url: e.url
	};
}
function vn(e) {
	const t = new URL(e);
	return (t.hash = decodeURIComponent(e.hash)), t;
}
export { Un as a, Ln as g, Tn as i, Sn as l, O as s };
