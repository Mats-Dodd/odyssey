import { d as $ } from './DOOmkYa6.js';
import { n as c, i as g, d as h } from './CTLOy2q2.js';
import { X as y } from './CZvU1ekx.js';
function b(t) {
	function n(r) {
		return r(t), () => {};
	}
	return { subscribe: n };
}
function w(t) {
	if (!g) return null;
	const n = document.querySelector(`[data-melt-id="${t}"]`);
	return h(n) ? n : null;
}
const l = (t) =>
		new Proxy(t, {
			get(n, r, e) {
				return Reflect.get(n, r, e);
			},
			ownKeys(n) {
				return Reflect.ownKeys(n).filter((r) => r !== 'action');
			}
		}),
	m = (t) => typeof t == 'function';
function A(t, n) {
	const { stores: r, action: e, returned: a } = n ?? {},
		o = (() => {
			if (r && a)
				return $(r, (i) => {
					const s = a(i);
					if (m(s)) {
						const u = (...d) => l({ ...s(...d), [`data-melt-${t}`]: '', action: e ?? c });
						return (u.action = e ?? c), u;
					}
					return l({ ...s, [`data-melt-${t}`]: '', action: e ?? c });
				});
			{
				const i = a,
					s = i == null ? void 0 : i();
				if (m(s)) {
					const u = (...d) => l({ ...s(...d), [`data-melt-${t}`]: '', action: e ?? c });
					return (u.action = e ?? c), b(u);
				}
				return b(l({ ...s, [`data-melt-${t}`]: '', action: e ?? c }));
			}
		})(),
		f = e ?? (() => {});
	return (f.subscribe = o.subscribe), f;
}
function B(t) {
	const n = (o) => (o ? `${t}-${o}` : t),
		r = (o) => `data-melt-${t}${o ? `-${o}` : ''}`,
		e = (o) => `[data-melt-${t}${o ? `-${o}` : ''}]`;
	return { name: n, attribute: r, selector: e, getEl: (o) => document.querySelector(e(o)) };
}
function D(t, n) {
	const r = {};
	return (
		n.forEach((e) => {
			r[e] = { [`data-${t}-${e}`]: '' };
		}),
		(e) => r[e]
	);
}
function S(t) {
	return t
		? { 'aria-disabled': 'true', 'data-disabled': '' }
		: { 'aria-disabled': void 0, 'data-disabled': void 0 };
}
function T() {
	const t = y();
	return (n) => {
		const { originalEvent: r } = n.detail,
			{ cancelable: e } = n,
			a = r.type;
		t(a, { originalEvent: r, currentTarget: r.currentTarget }, { cancelable: e }) ||
			n.preventDefault();
	};
}
export { T as a, A as b, D as c, B as d, S as e, w as g };
