var le = Object.defineProperty,
	fe = Object.defineProperties,
	de = Object.getOwnPropertyDescriptors,
	Y = Object.getOwnPropertySymbols,
	ce = Object.prototype.hasOwnProperty,
	he = Object.prototype.propertyIsEnumerable,
	b = (e, t, r) =>
		t in e ? le(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r),
	T = (e, t) => {
		for (var r in t || (t = {})) ce.call(t, r) && b(e, r, t[r]);
		if (Y) for (var r of Y(t)) he.call(t, r) && b(e, r, t[r]);
		return e;
	},
	O = (e, t) => fe(e, de(t)),
	ge = class extends Error {
		constructor(e, t, r) {
			super(t || e.toString(), { cause: r }),
				(this.status = e),
				(this.statusText = t),
				(this.error = r);
		}
	},
	ye = async (e, t) => {
		var r, i, n, s, a, u;
		let f = t || {};
		const o = {
			onRequest: [t == null ? void 0 : t.onRequest],
			onResponse: [t == null ? void 0 : t.onResponse],
			onSuccess: [t == null ? void 0 : t.onSuccess],
			onError: [t == null ? void 0 : t.onError],
			onRetry: [t == null ? void 0 : t.onRetry]
		};
		if (!t || !(t != null && t.plugins)) return { url: e, options: f, hooks: o };
		for (const l of (t == null ? void 0 : t.plugins) || []) {
			if (l.init) {
				const d = await ((r = l.init) == null ? void 0 : r.call(l, e.toString(), t));
				(f = d.options || f), (e = d.url);
			}
			o.onRequest.push((i = l.hooks) == null ? void 0 : i.onRequest),
				o.onResponse.push((n = l.hooks) == null ? void 0 : n.onResponse),
				o.onSuccess.push((s = l.hooks) == null ? void 0 : s.onSuccess),
				o.onError.push((a = l.hooks) == null ? void 0 : a.onError),
				o.onRetry.push((u = l.hooks) == null ? void 0 : u.onRetry);
		}
		return { url: e, options: f, hooks: o };
	},
	Z = class {
		constructor(e) {
			this.options = e;
		}
		shouldAttemptRetry(e, t) {
			return this.options.shouldRetry
				? Promise.resolve(e < this.options.attempts && this.options.shouldRetry(t))
				: Promise.resolve(e < this.options.attempts);
		}
		getDelay() {
			return this.options.delay;
		}
	},
	pe = class {
		constructor(e) {
			this.options = e;
		}
		shouldAttemptRetry(e, t) {
			return this.options.shouldRetry
				? Promise.resolve(e < this.options.attempts && this.options.shouldRetry(t))
				: Promise.resolve(e < this.options.attempts);
		}
		getDelay(e) {
			return Math.min(this.options.maxDelay, this.options.baseDelay * 2 ** e);
		}
	};
function me(e) {
	if (typeof e == 'number') return new Z({ type: 'linear', attempts: e, delay: 1e3 });
	switch (e.type) {
		case 'linear':
			return new Z(e);
		case 'exponential':
			return new pe(e);
		default:
			throw new Error('Invalid retry strategy');
	}
}
var ve = async (e) => {
		const t = {},
			r = async (i) => (typeof i == 'function' ? await i() : i);
		if (e != null && e.auth) {
			if (e.auth.type === 'Bearer') {
				const i = await r(e.auth.token);
				if (!i) return t;
				t.authorization = `Bearer ${i}`;
			} else if (e.auth.type === 'Basic') {
				const i = r(e.auth.username),
					n = r(e.auth.password);
				if (!i || !n) return t;
				t.authorization = `Basic ${btoa(`${i}:${n}`)}`;
			} else if (e.auth.type === 'Custom') {
				const i = r(e.auth.value);
				if (!i) return t;
				t.authorization = `${r(e.auth.prefix)} ${i}`;
			}
		}
		return t;
	},
	we = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function _e(e) {
	const t = e.headers.get('content-type'),
		r = new Set(['image/svg', 'application/xml', 'application/xhtml', 'application/html']);
	if (!t) return 'json';
	const i = t.split(';').shift() || '';
	return we.test(i) ? 'json' : r.has(i) || i.startsWith('text/') ? 'text' : 'blob';
}
function Re(e) {
	try {
		return JSON.parse(e), !0;
	} catch {
		return !1;
	}
}
function te(e) {
	if (e === void 0) return !1;
	const t = typeof e;
	return t === 'string' || t === 'number' || t === 'boolean' || t === null
		? !0
		: t !== 'object'
			? !1
			: Array.isArray(e)
				? !0
				: e.buffer
					? !1
					: (e.constructor && e.constructor.name === 'Object') || typeof e.toJSON == 'function';
}
function K(e) {
	try {
		return JSON.parse(e);
	} catch {
		return e;
	}
}
function k(e) {
	return typeof e == 'function';
}
function Se(e) {
	if (e != null && e.customFetchImpl) return e.customFetchImpl;
	if (typeof globalThis < 'u' && k(globalThis.fetch)) return globalThis.fetch;
	if (typeof window < 'u' && k(window.fetch)) return window.fetch;
	throw new Error('No fetch implementation found');
}
async function Te(e) {
	const t = new Headers(e == null ? void 0 : e.headers),
		r = await ve(e);
	for (const [i, n] of Object.entries(r || {})) t.set(i, n);
	if (!t.has('content-type')) {
		const i = Ee(e == null ? void 0 : e.body);
		i && t.set('content-type', i);
	}
	return t;
}
function Ee(e) {
	return te(e) ? 'application/json' : null;
}
function Oe(e) {
	if (!(e != null && e.body)) return null;
	const t = new Headers(e == null ? void 0 : e.headers);
	if (te(e.body) && !t.has('content-type')) {
		for (const [r, i] of Object.entries(e == null ? void 0 : e.body))
			i instanceof Date && (e.body[r] = i.toISOString());
		return JSON.stringify(e.body);
	}
	return e.body;
}
function Pe(e, t) {
	var r;
	if (t != null && t.method) return t.method.toUpperCase();
	if (e.startsWith('@')) {
		const i = (r = e.split('@')[1]) == null ? void 0 : r.split('/')[0];
		return ne.includes(i) ? i.toUpperCase() : t != null && t.body ? 'POST' : 'GET';
	}
	return t != null && t.body ? 'POST' : 'GET';
}
function Le(e, t) {
	let r;
	return (
		!(e != null && e.signal) &&
			e != null &&
			e.timeout &&
			(r = setTimeout(() => (t == null ? void 0 : t.abort()), e == null ? void 0 : e.timeout)),
		{
			abortTimeout: r,
			clearTimeout: () => {
				r && clearTimeout(r);
			}
		}
	);
}
var Ue = class re extends Error {
	constructor(t, r) {
		super(r || JSON.stringify(t, null, 2)),
			(this.issues = t),
			Object.setPrototypeOf(this, re.prototype);
	}
};
async function V(e, t) {
	let r = await e['~standard'].validate(t);
	if (r.issues) throw new Ue(r.issues);
	return r.value;
}
var ne = ['get', 'post', 'put', 'patch', 'delete'],
	Ae = (e) => ({
		id: 'apply-schema',
		name: 'Apply Schema',
		version: '1.0.0',
		async init(t, r) {
			var i, n, s, a;
			const u =
				((n =
					(i = e.plugins) == null
						? void 0
						: i.find((f) => {
								var o;
								return (o = f.schema) != null && o.config
									? t.startsWith(f.schema.config.baseURL || '') ||
											t.startsWith(f.schema.config.prefix || '')
									: !1;
							})) == null
					? void 0
					: n.schema) || e.schema;
			if (u) {
				let f = t;
				(s = u.config) != null &&
					s.prefix &&
					f.startsWith(u.config.prefix) &&
					((f = f.replace(u.config.prefix, '')),
					u.config.baseURL && (t = t.replace(u.config.prefix, u.config.baseURL))),
					(a = u.config) != null &&
						a.baseURL &&
						f.startsWith(u.config.baseURL) &&
						(f = f.replace(u.config.baseURL, ''));
				const o = u.schema[f];
				if (o) {
					let l = O(T({}, r), { method: o.method, output: o.output });
					return (
						(r != null && r.disableValidation) ||
							(l = O(T({}, l), {
								body: o.input
									? await V(o.input, r == null ? void 0 : r.body)
									: r == null
										? void 0
										: r.body,
								params: o.params
									? await V(o.params, r == null ? void 0 : r.params)
									: r == null
										? void 0
										: r.params,
								query: o.query
									? await V(o.query, r == null ? void 0 : r.query)
									: r == null
										? void 0
										: r.query
							})),
						{ url: t, options: l }
					);
				}
			}
			return { url: t, options: r };
		}
	}),
	Ie = (e) => {
		async function t(r, i) {
			const n = O(T(T({}, e), i), {
				plugins: [...((e == null ? void 0 : e.plugins) || []), Ae(e || {})]
			});
			if (e != null && e.catchAllError)
				try {
					return await z(r, n);
				} catch (s) {
					return {
						data: null,
						error: {
							status: 500,
							statusText: 'Fetch Error',
							message:
								'Fetch related error. Captured by catchAllError option. See error property for more details.',
							error: s
						}
					};
				}
			return await z(r, n);
		}
		return t;
	};
function Ne(e, t) {
	let { baseURL: r, params: i, query: n } = t || { query: {}, params: {}, baseURL: '' },
		s = e.startsWith('http') ? e.split('/').slice(0, 3).join('/') : r || '';
	if (e.startsWith('@')) {
		const d = e.toString().split('@')[1].split('/')[0];
		ne.includes(d) && (e = e.replace(`@${d}/`, '/'));
	}
	s.endsWith('/') || (s += '/');
	let [a, u] = e.replace(s, '').split('?');
	const f = new URLSearchParams(u);
	for (const [d, h] of Object.entries(n || {})) h != null && f.set(d, String(h));
	if (i)
		if (Array.isArray(i)) {
			const d = a.split('/').filter((h) => h.startsWith(':'));
			for (const [h, _] of d.entries()) {
				const P = i[h];
				a = a.replace(_, P);
			}
		} else for (const [d, h] of Object.entries(i)) a = a.replace(`:${d}`, String(h));
	(a = a.split('/').map(encodeURIComponent).join('/')), a.startsWith('/') && (a = a.slice(1));
	let o = f.toString();
	return (
		(o = o.length > 0 ? `?${o}`.replace(/\+/g, '%20') : ''),
		s.startsWith('http') ? new URL(`${a}${o}`, s) : `${s}${a}${o}`
	);
}
var z = async (e, t) => {
		var r, i, n, s, a, u, f, o;
		const { hooks: l, url: d, options: h } = await ye(e, t),
			_ = Se(h),
			P = new AbortController(),
			x = (r = h.signal) != null ? r : P.signal,
			m = Ne(d, h),
			N = Oe(h),
			c = await Te(h),
			E = Pe(d, h);
		let p = O(T({}, h), { url: m, headers: c, body: N, method: E, signal: x });
		for (const R of l.onRequest)
			if (R) {
				const w = await R(p);
				w instanceof Object && (p = w);
			}
		(('pipeTo' in p && typeof p.pipeTo == 'function') ||
			typeof ((i = t == null ? void 0 : t.body) == null ? void 0 : i.pipe) == 'function') &&
			('duplex' in p || (p.duplex = 'half'));
		const { clearTimeout: J } = Le(h, P);
		let y = await _(p.url, p);
		J();
		const C = { response: y, request: p };
		for (const R of l.onResponse)
			if (R) {
				const w = await R(
					O(T({}, C), {
						response:
							(n = t == null ? void 0 : t.hookOptions) != null && n.cloneResponse ? y.clone() : y
					})
				);
				w instanceof Response ? (y = w) : w instanceof Object && (y = w.response);
			}
		if (y.ok) {
			if (!(p.method !== 'HEAD')) return { data: '', error: null };
			const w = _e(y),
				L = { data: '', response: y, request: p };
			if (w === 'json' || w === 'text') {
				const U = await y.text(),
					ae = await ((s = p.jsonParser) != null ? s : K)(U);
				L.data = ae;
			} else L.data = await y[w]();
			p != null &&
				p.output &&
				p.output &&
				!p.disableValidation &&
				(L.data = await V(p.output, L.data));
			for (const U of l.onSuccess)
				U &&
					(await U(
						O(T({}, L), {
							response:
								(a = t == null ? void 0 : t.hookOptions) != null && a.cloneResponse ? y.clone() : y
						})
					));
			return t != null && t.throw ? L.data : { data: L.data, error: null };
		}
		const oe = (u = t == null ? void 0 : t.jsonParser) != null ? u : K,
			F = await y.text(),
			X = Re(F),
			G = X ? await oe(F) : null,
			ue = {
				response: y,
				responseText: F,
				request: p,
				error: O(T({}, G), { status: y.status, statusText: y.statusText })
			};
		for (const R of l.onError)
			R &&
				(await R(
					O(T({}, ue), {
						response:
							(f = t == null ? void 0 : t.hookOptions) != null && f.cloneResponse ? y.clone() : y
					})
				));
		if (t != null && t.retry) {
			const R = me(t.retry),
				w = (o = t.retryAttempt) != null ? o : 0;
			if (await R.shouldAttemptRetry(w, y)) {
				for (const U of l.onRetry) U && (await U(C));
				const L = R.getDelay(w);
				return (
					await new Promise((U) => setTimeout(U, L)),
					await z(e, O(T({}, t), { retryAttempt: w + 1 }))
				);
			}
		}
		if (t != null && t.throw) throw new ge(y.status, y.statusText, X ? G : F);
		return { data: null, error: O(T({}, G), { status: y.status, statusText: y.statusText }) };
	},
	xe = {},
	qe = {};
const H = Object.create(null),
	q = (e) => {
		var t;
		return (
			xe ||
			((t = globalThis.Deno) == null ? void 0 : t.env.toObject()) ||
			globalThis.__env__ ||
			(e ? H : globalThis)
		);
	},
	I = new Proxy(H, {
		get(e, t) {
			return q()[t] ?? H[t];
		},
		has(e, t) {
			const r = q();
			return t in r || t in H;
		},
		set(e, t, r) {
			const i = q(!0);
			return (i[t] = r), !0;
		},
		deleteProperty(e, t) {
			if (!t) return !1;
			const r = q(!0);
			return delete r[t], !0;
		},
		ownKeys() {
			const e = q(!0);
			return Object.keys(e);
		}
	});
function Me(e) {
	return e ? e !== 'false' : !1;
}
const Ce = (typeof process < 'u' && qe && 'production') || '';
Ce === 'test' || Me(I.TEST);
class Fe extends Error {
	constructor(t, r) {
		super(t),
			(this.name = 'BetterAuthError'),
			(this.message = t),
			(this.cause = r),
			(this.stack = '');
	}
}
function Be(e) {
	try {
		return new URL(e).pathname !== '/';
	} catch {
		throw new Fe(`Invalid base URL: ${e}. Please provide a valid base URL.`);
	}
}
function Q(e, t = '/api/auth') {
	return Be(e) ? e : ((t = t.startsWith('/') ? t : `/${t}`), `${e.replace(/\/+$/, '')}${t}`);
}
function $e(e, t, r) {
	if (e) return Q(e, t);
	const i =
		I.BETTER_AUTH_URL ||
		I.NEXT_PUBLIC_BETTER_AUTH_URL ||
		I.PUBLIC_BETTER_AUTH_URL ||
		I.NUXT_PUBLIC_BETTER_AUTH_URL ||
		I.NUXT_PUBLIC_AUTH_URL ||
		(I.BASE_URL !== '/' ? I.BASE_URL : void 0);
	if (i) return Q(i, t);
	if (typeof window < 'u' && window.location) return Q(window.location.origin, t);
}
let S = [],
	A = 0;
const B = 4;
let se = (e) => {
	let t = [],
		r = {
			get() {
				return r.lc || r.listen(() => {})(), r.value;
			},
			lc: 0,
			listen(i) {
				return (
					(r.lc = t.push(i)),
					() => {
						for (let s = A + B; s < S.length; ) S[s] === i ? S.splice(s, B) : (s += B);
						let n = t.indexOf(i);
						~n && (t.splice(n, 1), --r.lc || r.off());
					}
				);
			},
			notify(i, n) {
				let s = !S.length;
				for (let a of t) S.push(a, r.value, i, n);
				if (s) {
					for (A = 0; A < S.length; A += B) S[A](S[A + 1], S[A + 2], S[A + 3]);
					S.length = 0;
				}
			},
			off() {},
			set(i) {
				let n = r.value;
				n !== i && ((r.value = i), r.notify(n));
			},
			subscribe(i) {
				let n = r.listen(i);
				return i(r.value), n;
			},
			value: e
		};
	return r;
};
const je = 5,
	$ = 6,
	j = 10;
let De = (e, t, r, i) => (
		(e.events = e.events || {}),
		e.events[r + j] ||
			(e.events[r + j] = i((n) => {
				e.events[r].reduceRight((s, a) => (a(s), s), { shared: {}, ...n });
			})),
		(e.events[r] = e.events[r] || []),
		e.events[r].push(t),
		() => {
			let n = e.events[r],
				s = n.indexOf(t);
			n.splice(s, 1), n.length || (delete e.events[r], e.events[r + j](), delete e.events[r + j]);
		}
	),
	We = 1e3,
	Ve = (e, t) =>
		De(
			e,
			(i) => {
				let n = t(i);
				n && e.events[$].push(n);
			},
			je,
			(i) => {
				let n = e.listen;
				e.listen = (...a) => (!e.lc && !e.active && ((e.active = !0), i()), n(...a));
				let s = e.off;
				return (
					(e.events[$] = []),
					(e.off = () => {
						s(),
							setTimeout(() => {
								if (e.active && !e.lc) {
									e.active = !1;
									for (let a of e.events[$]) a();
									e.events[$] = [];
								}
							}, We);
					}),
					() => {
						(e.listen = n), (e.off = s);
					}
				);
			}
		);
const He = typeof window > 'u',
	Je = (e, t, r, i) => {
		const n = se({ data: null, error: null, isPending: !0, isRefetching: !1, refetch: () => s() }),
			s = () => {
				const u =
					typeof i == 'function'
						? i({ data: n.get().data, error: n.get().error, isPending: n.get().isPending })
						: i;
				return r(t, {
					...u,
					async onSuccess(f) {
						var o;
						n.set({
							data: f.data,
							error: null,
							isPending: !1,
							isRefetching: !1,
							refetch: n.value.refetch
						}),
							await ((o = u == null ? void 0 : u.onSuccess) == null ? void 0 : o.call(u, f));
					},
					async onError(f) {
						var h, _;
						const { request: o } = f,
							l =
								typeof o.retry == 'number' ? o.retry : (h = o.retry) == null ? void 0 : h.attempts,
							d = o.retryAttempt || 0;
						(l && d < l) ||
							(n.set({
								error: f.error,
								data: null,
								isPending: !1,
								isRefetching: !1,
								refetch: n.value.refetch
							}),
							await ((_ = u == null ? void 0 : u.onError) == null ? void 0 : _.call(u, f)));
					},
					async onRequest(f) {
						var l;
						const o = n.get();
						n.set({
							isPending: o.data === null,
							data: o.data,
							error: null,
							isRefetching: !0,
							refetch: n.value.refetch
						}),
							await ((l = u == null ? void 0 : u.onRequest) == null ? void 0 : l.call(u, f));
					}
				});
			};
		e = Array.isArray(e) ? e : [e];
		let a = !1;
		for (const u of e)
			u.subscribe(() => {
				He ||
					(a
						? s()
						: Ve(
								n,
								() => (
									setTimeout(() => {
										s();
									}, 0),
									(a = !0),
									() => {
										n.off(), u.off();
									}
								)
							));
			});
		return n;
	},
	Ge = {
		proto:
			/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
		constructor:
			/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
		protoShort: /"__proto__"\s*:/,
		constructorShort: /"constructor"\s*:/
	},
	Qe = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/,
	ee = {
		true: !0,
		false: !1,
		null: null,
		undefined: void 0,
		nan: Number.NaN,
		infinity: Number.POSITIVE_INFINITY,
		'-infinity': Number.NEGATIVE_INFINITY
	},
	ze =
		/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,7}))?(?:Z|([+-])(\d{2}):(\d{2}))$/;
function Xe(e) {
	return e instanceof Date && !isNaN(e.getTime());
}
function Ye(e) {
	const t = ze.exec(e);
	if (!t) return null;
	const [, r, i, n, s, a, u, f, o, l, d] = t;
	let h = new Date(
		Date.UTC(
			parseInt(r, 10),
			parseInt(i, 10) - 1,
			parseInt(n, 10),
			parseInt(s, 10),
			parseInt(a, 10),
			parseInt(u, 10),
			f ? parseInt(f.padEnd(3, '0'), 10) : 0
		)
	);
	if (o) {
		const _ = (parseInt(l, 10) * 60 + parseInt(d, 10)) * (o === '+' ? -1 : 1);
		h.setUTCMinutes(h.getUTCMinutes() + _);
	}
	return Xe(h) ? h : null;
}
function be(e, t = {}) {
	const { strict: r = !1, warnings: i = !1, reviver: n, parseDates: s = !0 } = t;
	if (typeof e != 'string') return e;
	const a = e.trim();
	if (a[0] === '"' && a.endsWith('"') && !a.slice(1, -1).includes('"')) return a.slice(1, -1);
	const u = a.toLowerCase();
	if (u.length <= 9 && u in ee) return ee[u];
	if (!Qe.test(a)) {
		if (r) throw new SyntaxError('[better-json] Invalid JSON');
		return e;
	}
	if (
		Object.entries(Ge).some(([o, l]) => {
			const d = l.test(a);
			return (
				d &&
					i &&
					console.warn(
						`[better-json] Detected potential prototype pollution attempt using ${o} pattern`
					),
				d
			);
		}) &&
		r
	)
		throw new Error('[better-json] Potential prototype pollution attempt detected');
	try {
		return JSON.parse(a, (l, d) => {
			if (
				l === '__proto__' ||
				(l === 'constructor' && d && typeof d == 'object' && 'prototype' in d)
			) {
				i && console.warn(`[better-json] Dropping "${l}" key to prevent prototype pollution`);
				return;
			}
			if (s && typeof d == 'string') {
				const h = Ye(d);
				if (h) return h;
			}
			return n ? n(l, d) : d;
		});
	} catch (o) {
		if (r) throw o;
		return e;
	}
}
function Ze(e, t = { strict: !0 }) {
	return be(e, t);
}
const Ke = {
	id: 'redirect',
	name: 'Redirect',
	hooks: {
		onSuccess(e) {
			var t, r;
			if (
				(t = e.data) != null &&
				t.url &&
				(r = e.data) != null &&
				r.redirect &&
				typeof window < 'u' &&
				window.location &&
				window.location
			)
				try {
					window.location.href = e.data.url;
				} catch {}
		}
	}
};
function ke(e) {
	const t = se(!1);
	return { session: Je(t, '/get-session', e, { method: 'GET' }), $sessionSignal: t };
}
const et = (e) => {
	var _, P, x, m, N;
	const t = 'credentials' in Request.prototype,
		r = $e(e == null ? void 0 : e.baseURL, e == null ? void 0 : e.basePath),
		i =
			((_ = e == null ? void 0 : e.plugins) == null
				? void 0
				: _.flatMap((c) => c.fetchPlugins).filter((c) => c !== void 0)) || [],
		n = Ie({
			baseURL: r,
			...(t ? { credentials: 'include' } : {}),
			method: 'GET',
			jsonParser(c) {
				return c ? Ze(c, { strict: !1 }) : null;
			},
			customFetchImpl: async (c, E) => {
				try {
					return await fetch(c, E);
				} catch {
					return Response.error();
				}
			},
			...(e == null ? void 0 : e.fetchOptions),
			plugins:
				e != null && e.disableDefaultFetchPlugins
					? [
							...(((P = e == null ? void 0 : e.fetchOptions) == null ? void 0 : P.plugins) || []),
							...i
						]
					: [
							Ke,
							...(((x = e == null ? void 0 : e.fetchOptions) == null ? void 0 : x.plugins) || []),
							...i
						]
		}),
		{ $sessionSignal: s, session: a } = ke(n),
		u = (e == null ? void 0 : e.plugins) || [];
	let f = {},
		o = { $sessionSignal: s, session: a },
		l = {
			'/sign-out': 'POST',
			'/revoke-sessions': 'POST',
			'/revoke-other-sessions': 'POST',
			'/delete-user': 'POST'
		};
	const d = [
		{
			signal: '$sessionSignal',
			matcher(c) {
				return (
					c === '/sign-out' ||
					c === '/update-user' ||
					c.startsWith('/sign-in') ||
					c.startsWith('/sign-up') ||
					c === '/delete-user' ||
					c === '/verify-email'
				);
			}
		}
	];
	for (const c of u)
		c.getAtoms && Object.assign(o, (m = c.getAtoms) == null ? void 0 : m.call(c, n)),
			c.pathMethods && Object.assign(l, c.pathMethods),
			c.atomListeners && d.push(...c.atomListeners);
	const h = {
		notify: (c) => {
			o[c].set(!o[c].get());
		},
		listen: (c, E) => {
			o[c].subscribe(E);
		},
		atoms: o
	};
	for (const c of u)
		c.getActions && Object.assign(f, (N = c.getActions) == null ? void 0 : N.call(c, n, h, e));
	return {
		pluginsActions: f,
		pluginsAtoms: o,
		pluginPathMethods: l,
		atomListeners: d,
		$fetch: n,
		$store: h
	};
};
function tt(e, t, r) {
	const i = t[e],
		{ fetchOptions: n, query: s, ...a } = r || {};
	return i || (n != null && n.method ? n.method : a && Object.keys(a).length > 0 ? 'POST' : 'GET');
}
function rt(e, t, r, i, n) {
	function s(a = []) {
		return new Proxy(function () {}, {
			get(u, f) {
				const o = [...a, f];
				let l = e;
				for (const d of o)
					if (l && typeof l == 'object' && d in l) l = l[d];
					else {
						l = void 0;
						break;
					}
				return typeof l == 'function' ? l : s(o);
			},
			apply: async (u, f, o) => {
				const l = '/' + a.map((c) => c.replace(/[A-Z]/g, (E) => `-${E.toLowerCase()}`)).join('/'),
					d = o[0] || {},
					h = o[1] || {},
					{ query: _, fetchOptions: P, ...x } = d,
					m = { ...h, ...P },
					N = tt(l, r, d);
				return await t(l, {
					...m,
					body: N === 'GET' ? void 0 : { ...x, ...((m == null ? void 0 : m.body) || {}) },
					query: _ || (m == null ? void 0 : m.query),
					method: N,
					async onSuccess(c) {
						var y;
						await ((y = m == null ? void 0 : m.onSuccess) == null ? void 0 : y.call(m, c));
						const E = n == null ? void 0 : n.find((C) => C.matcher(l));
						if (!E) return;
						const p = i[E.signal];
						if (!p) return;
						const J = p.get();
						setTimeout(() => {
							p.set(!J);
						}, 10);
					}
				});
			}
		});
	}
	return s();
}
function nt(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
function st(e) {
	const {
		pluginPathMethods: t,
		pluginsActions: r,
		pluginsAtoms: i,
		$fetch: n,
		atomListeners: s,
		$store: a
	} = et(e);
	let u = {};
	for (const [l, d] of Object.entries(i)) u[`use${nt(l)}`] = d;
	const f = { ...r, ...u, $fetch: n, $store: a };
	return rt(f, n, t, i, s);
}
let v = [],
	ie = (e, t) => {
		let r = [],
			i = {
				get() {
					return i.lc || i.listen(() => {})(), i.value;
				},
				l: t || 0,
				lc: 0,
				listen(n, s) {
					return (
						(i.lc = r.push(n, s || i.l) / 2),
						() => {
							let a = r.indexOf(n);
							~a && (r.splice(a, 2), --i.lc || i.off());
						}
					);
				},
				notify(n, s) {
					let a = !v.length;
					for (let u = 0; u < r.length; u += 2) v.push(r[u], r[u + 1], i.value, n, s);
					if (a) {
						for (let u = 0; u < v.length; u += 5) {
							let f;
							for (let o = u + 1; !f && (o += 5) < v.length; )
								v[o] < v[u + 1] && (f = v.push(v[u], v[u + 1], v[u + 2], v[u + 3], v[u + 4]));
							f || v[u](v[u + 2], v[u + 3], v[u + 4]);
						}
						v.length = 0;
					}
				},
				off() {},
				set(n) {
					let s = i.value;
					s !== n && ((i.value = n), i.notify(s));
				},
				subscribe(n, s) {
					let a = i.listen(n, s);
					return n(i.value), a;
				},
				value: e
			};
		return i;
	};
const it = 5,
	D = 6,
	W = 10;
let ot = (e, t, r, i) => (
		(e.events = e.events || {}),
		e.events[r + W] ||
			(e.events[r + W] = i((n) => {
				e.events[r].reduceRight((s, a) => (a(s), s), { shared: {}, ...n });
			})),
		(e.events[r] = e.events[r] || []),
		e.events[r].push(t),
		() => {
			let n = e.events[r],
				s = n.indexOf(t);
			n.splice(s, 1), n.length || (delete e.events[r], e.events[r + W](), delete e.events[r + W]);
		}
	),
	ut = 1e3,
	at = (e, t) =>
		ot(
			e,
			(i) => {
				let n = t(i);
				n && e.events[D].push(n);
			},
			it,
			(i) => {
				let n = e.listen;
				e.listen = (...a) => (!e.lc && !e.active && ((e.active = !0), i()), n(...a));
				let s = e.off;
				return (
					(e.events[D] = []),
					(e.off = () => {
						s(),
							setTimeout(() => {
								if (e.active && !e.lc) {
									e.active = !1;
									for (let a of e.events[D]) a();
									e.events[D] = [];
								}
							}, ut);
					}),
					() => {
						(e.listen = n), (e.off = s);
					}
				);
			}
		),
	lt = (e, t, r) => {
		Array.isArray(e) || (e = [e]);
		let i,
			n = 0,
			s = () => {
				let f = e.map((o) => o.get());
				if (i === void 0 || f.some((o, l) => o !== i[l])) {
					let o = ++n;
					i = f;
					let l = t(...f);
					l && l.then && l.t
						? l.then((d) => {
								o === n && a.set(d);
							})
						: a.set(l);
				}
			},
			a = ie(void 0, Math.max(...e.map((f) => f.l)) + 1),
			u = s;
		return (
			at(a, () => {
				let f = e.map((o) => o.listen(u, -1 / a.l));
				return (
					s(),
					() => {
						for (let o of f) o();
					}
				);
			}),
			a
		);
	},
	M = (e, t) => lt(e, t);
const g = ie({ user: null, session: null, isLoading: !0, error: null }),
	ft = M(g, (e) => e.user),
	dt = M(g, (e) => e.session),
	ct = M(g, (e) => !!e.user),
	ht = M(g, (e) => e.isLoading),
	gt = M(g, (e) => e.error);
function yt(e = {}) {
	const t = st({
		baseURL: e.baseURL || (typeof window < 'u' ? window.location.origin : ''),
		basePath: e.basePath || '/api/auth'
	});
	let r = !1;
	const i = async () => {
		if (!r) {
			r = !0;
			try {
				g.set({ ...g.get(), isLoading: !0, error: null });
				const { data: n, error: s } = await t.getSession();
				s
					? g.set({
							user: null,
							session: null,
							isLoading: !1,
							error: s.message || 'Failed to get session'
						})
					: g.set({
							user: (n == null ? void 0 : n.user) || null,
							session: (n == null ? void 0 : n.session) || null,
							isLoading: !1,
							error: null
						});
			} catch (n) {
				g.set({
					user: null,
					session: null,
					isLoading: !1,
					error: n instanceof Error ? n.message : 'Failed to initialize session'
				});
			}
		}
	};
	return (
		typeof window < 'u' && i(),
		{
			signUp: async (n, s) => {
				var a, u;
				try {
					return (
						(a = s == null ? void 0 : s.onRequest) == null || a.call(s),
						g.set({ ...g.get(), isLoading: !0, error: null }),
						await t.signUp.email(
							{
								email: n.email,
								password: n.password,
								name: n.name,
								image: n.image,
								callbackURL: n.callbackURL
							},
							{
								onRequest: s == null ? void 0 : s.onRequest,
								onSuccess: (o) => {
									var l, d, h;
									g.set({
										user: ((l = o.data) == null ? void 0 : l.user) || null,
										session: ((d = o.data) == null ? void 0 : d.session) || null,
										isLoading: !1,
										error: null
									}),
										(h = s == null ? void 0 : s.onSuccess) == null || h.call(s, o.data);
								},
								onError: (o) => {
									var l;
									g.set({ ...g.get(), isLoading: !1, error: o.error.message }),
										(l = s == null ? void 0 : s.onError) == null || l.call(s, o.error);
								}
							}
						)
					);
				} catch (f) {
					const o = f instanceof Error ? f.message : 'Sign up failed';
					return (
						g.set({ ...g.get(), isLoading: !1, error: o }),
						(u = s == null ? void 0 : s.onError) == null || u.call(s, { error: { message: o } }),
						{ data: null, error: { message: o } }
					);
				}
			},
			signIn: async (n, s) => {
				var a, u;
				try {
					return (
						(a = s == null ? void 0 : s.onRequest) == null || a.call(s),
						g.set({ ...g.get(), isLoading: !0, error: null }),
						await t.signIn.email(
							{
								email: n.email,
								password: n.password,
								callbackURL: n.callbackURL,
								rememberMe: n.rememberMe
							},
							{
								onRequest: s == null ? void 0 : s.onRequest,
								onSuccess: (o) => {
									var l, d, h;
									g.set({
										user: ((l = o.data) == null ? void 0 : l.user) || null,
										session: ((d = o.data) == null ? void 0 : d.session) || null,
										isLoading: !1,
										error: null
									}),
										(h = s == null ? void 0 : s.onSuccess) == null || h.call(s, o.data);
								},
								onError: (o) => {
									var l;
									g.set({ ...g.get(), isLoading: !1, error: o.error.message }),
										(l = s == null ? void 0 : s.onError) == null || l.call(s, o.error);
								}
							}
						)
					);
				} catch (f) {
					const o = f instanceof Error ? f.message : 'Sign in failed';
					return (
						g.set({ ...g.get(), isLoading: !1, error: o }),
						(u = s == null ? void 0 : s.onError) == null || u.call(s, { error: { message: o } }),
						{ data: null, error: { message: o } }
					);
				}
			},
			signOut: async (n) => {
				var s, a;
				try {
					return (
						(s = n == null ? void 0 : n.onRequest) == null || s.call(n),
						g.set({ ...g.get(), isLoading: !0, error: null }),
						await t.signOut({
							fetchOptions: {
								onSuccess: () => {
									g.set({ user: null, session: null, isLoading: !1, error: null });
								}
							}
						})
					);
				} catch (u) {
					const f = u instanceof Error ? u.message : 'Sign out failed';
					return (
						g.set({ ...g.get(), isLoading: !1, error: f }),
						(a = n == null ? void 0 : n.onError) == null || a.call(n, { error: { message: f } }),
						{ data: null, error: { message: f } }
					);
				}
			},
			getSession: async () => {
				try {
					const { data: n, error: s } = await t.getSession();
					return s
						? { data: null, error: s }
						: {
								data: {
									user: (n == null ? void 0 : n.user) || null,
									session: (n == null ? void 0 : n.session) || null
								},
								error: null
							};
				} catch (n) {
					return {
						data: null,
						error: { message: n instanceof Error ? n.message : 'Failed to get session' }
					};
				}
			},
			refreshSession: async () => {
				await i();
			},
			stores: {
				authState: g,
				user: ft,
				session: dt,
				isAuthenticated: ct,
				isLoading: ht,
				authError: gt
			},
			client: t
		}
	);
}
const pt = yt({
		baseURL: typeof window < 'u' ? window.location.origin : 'http://localhost:5173',
		basePath: '/api/auth'
	}),
	{ signIn: wt, signUp: _t, signOut: Rt, stores: mt } = pt,
	{ authState: St, user: Tt, isAuthenticated: Et, isLoading: Ot, authError: Pt } = mt;
export { Pt as a, Rt as b, _t as c, Et as d, St as e, pt as f, Ot as i, wt as s, Tt as u };
