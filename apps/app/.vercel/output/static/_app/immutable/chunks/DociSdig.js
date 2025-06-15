import {
	w as r,
	I as f,
	J as u,
	s as h,
	n as l,
	d,
	i as k,
	K as m,
	m as y,
	c as b,
	e as p,
	h as _,
	D as v
} from './wdwkOUVI.js';
import { S as x, i as w } from './JshcQj11.js';
const i = [];
window.addEventListener('keydown', (o) => {
	var t, e, s;
	for (const n of i)
		!!n.alt !== o.altKey ||
			!!n.shift !== o.shiftKey ||
			!!n.command !== (o.ctrlKey || o.metaKey) ||
			(n.key.toLowerCase() !== o.key.toLowerCase() && !(n.code && n.code === o.code)) ||
			(n.hover &&
				!((e = (t = n.node) == null ? void 0 : t.parentNode) != null && e.matches(':hover'))) ||
			(o.preventDefault(), n.callback ? n.callback() : (s = n.node) == null || s.click());
});
const K = (o, t) => (
	(t.node = o),
	r(() => {
		i.push(t);
	}),
	f(() => {
		i.indexOf(t) === -1 && i.push(t);
	}),
	u(() => {
		const e = i.indexOf(t);
		e > -1 && i.splice(e, 1);
	}),
	{
		destroy: () => {
			const e = i.indexOf(t);
			e > -1 && i.splice(e, 1);
		}
	}
);
function S(o) {
	let t, e, s, n;
	return {
		c() {
			(t = _('div')), this.h();
		},
		l(c) {
			(t = b(c, 'DIV', { class: !0 })), p(t).forEach(d), this.h();
		},
		h() {
			y(t, 'class', 'hidden');
		},
		m(c, a) {
			k(c, t, a), s || ((n = m((e = K.call(null, t, { ...o[0], callback: o[1] })))), (s = !0));
		},
		p(c, [a]) {
			e && v(e.update) && a & 3 && e.update.call(null, { ...c[0], callback: c[1] });
		},
		i: l,
		o: l,
		d(c) {
			c && d(t), (s = !1), n();
		}
	};
}
function D(o, t, e) {
	let { options: s } = t,
		{ callback: n = void 0 } = t;
	return (
		(o.$$set = (c) => {
			'options' in c && e(0, (s = c.options)), 'callback' in c && e(1, (n = c.callback));
		}),
		[s, n]
	);
}
class O extends x {
	constructor(t) {
		super(), w(this, t, D, S, h, { options: 0, callback: 1 });
	}
}
export { O as S };
