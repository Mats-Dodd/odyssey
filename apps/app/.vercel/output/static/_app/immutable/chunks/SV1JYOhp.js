import {
	J as zr,
	w as Mr,
	l as Xe,
	s as ye,
	d as te,
	i as be,
	L as ie,
	z as me,
	x as oe,
	A as Qe,
	B as L,
	P as Er,
	E as Ge,
	r as $e,
	F as Pe,
	G as Te,
	H as Ie,
	ae as he,
	q as B,
	K as Rr,
	c as er,
	e as rr,
	h as tr,
	D as Gr
} from './wdwkOUVI.js';
import {
	S as or,
	i as nr,
	t as $,
	a as ee,
	g as Pr,
	e as Tr,
	d as Ir,
	m as jr,
	c as Or,
	b as Lr
} from './JshcQj11.js';
import { d as Nr, a as je } from './YlZQZqOj.js';
function Oe(e, r) {
	const t = {},
		o = {},
		s = { $$scope: 1 };
	let n = e.length;
	for (; n--; ) {
		const i = e[n],
			a = r[n];
		if (a) {
			for (const l in i) l in a || (o[l] = 1);
			for (const l in a) s[l] || ((t[l] = a[l]), (s[l] = 1));
			e[n] = a;
		} else for (const l in i) s[l] = 1;
	}
	for (const i in o) i in t || (t[i] = void 0);
	return t;
}
function Wr(e) {
	return typeof e == 'object' && e !== null ? e : {};
}
function sr(e) {
	var r,
		t,
		o = '';
	if (typeof e == 'string' || typeof e == 'number') o += e;
	else if (typeof e == 'object')
		if (Array.isArray(e)) {
			var s = e.length;
			for (r = 0; r < s; r++) e[r] && (t = sr(e[r])) && (o && (o += ' '), (o += t));
		} else for (t in e) e[t] && (o && (o += ' '), (o += t));
	return o;
}
function Fr() {
	for (var e, r, t = 0, o = '', s = arguments.length; t < s; t++)
		(e = arguments[t]) && (r = sr(e)) && (o && (o += ' '), (o += r));
	return o;
}
function Br(e) {
	const r = e - 1;
	return r * r * r + 1;
}
const Le = '-',
	Vr = (e) => {
		const r = Hr(e),
			{ conflictingClassGroups: t, conflictingClassGroupModifiers: o } = e;
		return {
			getClassGroupId: (i) => {
				const a = i.split(Le);
				return a[0] === '' && a.length !== 1 && a.shift(), ir(a, r) || Ur(i);
			},
			getConflictingClassGroupIds: (i, a) => {
				const l = t[i] || [];
				return a && o[i] ? [...l, ...o[i]] : l;
			}
		};
	},
	ir = (e, r) => {
		var i;
		if (e.length === 0) return r.classGroupId;
		const t = e[0],
			o = r.nextPart.get(t),
			s = o ? ir(e.slice(1), o) : void 0;
		if (s) return s;
		if (r.validators.length === 0) return;
		const n = e.join(Le);
		return (i = r.validators.find(({ validator: a }) => a(n))) == null ? void 0 : i.classGroupId;
	},
	Fe = /^\[(.+)\]$/,
	Ur = (e) => {
		if (Fe.test(e)) {
			const r = Fe.exec(e)[1],
				t = r == null ? void 0 : r.substring(0, r.indexOf(':'));
			if (t) return 'arbitrary..' + t;
		}
	},
	Hr = (e) => {
		const { theme: r, prefix: t } = e,
			o = { nextPart: new Map(), validators: [] };
		return (
			qr(Object.entries(e.classGroups), t).forEach(([n, i]) => {
				Ce(i, o, n, r);
			}),
			o
		);
	},
	Ce = (e, r, t, o) => {
		e.forEach((s) => {
			if (typeof s == 'string') {
				const n = s === '' ? r : Be(r, s);
				n.classGroupId = t;
				return;
			}
			if (typeof s == 'function') {
				if (Kr(s)) {
					Ce(s(o), r, t, o);
					return;
				}
				r.validators.push({ validator: s, classGroupId: t });
				return;
			}
			Object.entries(s).forEach(([n, i]) => {
				Ce(i, Be(r, n), t, o);
			});
		});
	},
	Be = (e, r) => {
		let t = e;
		return (
			r.split(Le).forEach((o) => {
				t.nextPart.has(o) || t.nextPart.set(o, { nextPart: new Map(), validators: [] }),
					(t = t.nextPart.get(o));
			}),
			t
		);
	},
	Kr = (e) => e.isThemeGetter,
	qr = (e, r) =>
		r
			? e.map(([t, o]) => {
					const s = o.map((n) =>
						typeof n == 'string'
							? r + n
							: typeof n == 'object'
								? Object.fromEntries(Object.entries(n).map(([i, a]) => [r + i, a]))
								: n
					);
					return [t, s];
				})
			: e,
	Jr = (e) => {
		if (e < 1) return { get: () => {}, set: () => {} };
		let r = 0,
			t = new Map(),
			o = new Map();
		const s = (n, i) => {
			t.set(n, i), r++, r > e && ((r = 0), (o = t), (t = new Map()));
		};
		return {
			get(n) {
				let i = t.get(n);
				if (i !== void 0) return i;
				if ((i = o.get(n)) !== void 0) return s(n, i), i;
			},
			set(n, i) {
				t.has(n) ? t.set(n, i) : s(n, i);
			}
		};
	},
	ar = '!',
	Yr = (e) => {
		const { separator: r, experimentalParseClassName: t } = e,
			o = r.length === 1,
			s = r[0],
			n = r.length,
			i = (a) => {
				const l = [];
				let f = 0,
					c = 0,
					d;
				for (let A = 0; A < a.length; A++) {
					let m = a[A];
					if (f === 0) {
						if (m === s && (o || a.slice(A, A + n) === r)) {
							l.push(a.slice(c, A)), (c = A + n);
							continue;
						}
						if (m === '/') {
							d = A;
							continue;
						}
					}
					m === '[' ? f++ : m === ']' && f--;
				}
				const p = l.length === 0 ? a : a.substring(c),
					S = p.startsWith(ar),
					b = S ? p.substring(1) : p,
					v = d && d > c ? d - c : void 0;
				return {
					modifiers: l,
					hasImportantModifier: S,
					baseClassName: b,
					maybePostfixModifierPosition: v
				};
			};
		return t ? (a) => t({ className: a, parseClassName: i }) : i;
	},
	Zr = (e) => {
		if (e.length <= 1) return e;
		const r = [];
		let t = [];
		return (
			e.forEach((o) => {
				o[0] === '[' ? (r.push(...t.sort(), o), (t = [])) : t.push(o);
			}),
			r.push(...t.sort()),
			r
		);
	},
	Dr = (e) => ({ cache: Jr(e.cacheSize), parseClassName: Yr(e), ...Vr(e) }),
	Xr = /\s+/,
	Qr = (e, r) => {
		const { parseClassName: t, getClassGroupId: o, getConflictingClassGroupIds: s } = r,
			n = [],
			i = e.trim().split(Xr);
		let a = '';
		for (let l = i.length - 1; l >= 0; l -= 1) {
			const f = i[l],
				{
					modifiers: c,
					hasImportantModifier: d,
					baseClassName: p,
					maybePostfixModifierPosition: S
				} = t(f);
			let b = !!S,
				v = o(b ? p.substring(0, S) : p);
			if (!v) {
				if (!b) {
					a = f + (a.length > 0 ? ' ' + a : a);
					continue;
				}
				if (((v = o(p)), !v)) {
					a = f + (a.length > 0 ? ' ' + a : a);
					continue;
				}
				b = !1;
			}
			const A = Zr(c).join(':'),
				m = d ? A + ar : A,
				E = m + v;
			if (n.includes(E)) continue;
			n.push(E);
			const N = s(v, b);
			for (let j = 0; j < N.length; ++j) {
				const V = N[j];
				n.push(m + V);
			}
			a = f + (a.length > 0 ? ' ' + a : a);
		}
		return a;
	};
function $r() {
	let e = 0,
		r,
		t,
		o = '';
	for (; e < arguments.length; ) (r = arguments[e++]) && (t = lr(r)) && (o && (o += ' '), (o += t));
	return o;
}
const lr = (e) => {
	if (typeof e == 'string') return e;
	let r,
		t = '';
	for (let o = 0; o < e.length; o++) e[o] && (r = lr(e[o])) && (t && (t += ' '), (t += r));
	return t;
};
function et(e, ...r) {
	let t,
		o,
		s,
		n = i;
	function i(l) {
		const f = r.reduce((c, d) => d(c), e());
		return (t = Dr(f)), (o = t.cache.get), (s = t.cache.set), (n = a), a(l);
	}
	function a(l) {
		const f = o(l);
		if (f) return f;
		const c = Qr(l, t);
		return s(l, c), c;
	}
	return function () {
		return n($r.apply(null, arguments));
	};
}
const R = (e) => {
		const r = (t) => t[e] || [];
		return (r.isThemeGetter = !0), r;
	},
	cr = /^\[(?:([a-z-]+):)?(.+)\]$/i,
	rt = /^\d+\/\d+$/,
	tt = new Set(['px', 'full', 'screen']),
	ot = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
	nt =
		/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
	st = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
	it = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
	at =
		/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
	Z = (e) => se(e) || tt.has(e) || rt.test(e),
	D = (e) => ae(e, 'length', gt),
	se = (e) => !!e && !Number.isNaN(Number(e)),
	xe = (e) => ae(e, 'number', se),
	le = (e) => !!e && Number.isInteger(Number(e)),
	lt = (e) => e.endsWith('%') && se(e.slice(0, -1)),
	y = (e) => cr.test(e),
	X = (e) => ot.test(e),
	ct = new Set(['length', 'size', 'percentage']),
	dt = (e) => ae(e, ct, dr),
	ut = (e) => ae(e, 'position', dr),
	ft = new Set(['image', 'url']),
	pt = (e) => ae(e, ft, ht),
	bt = (e) => ae(e, '', mt),
	ce = () => !0,
	ae = (e, r, t) => {
		const o = cr.exec(e);
		return o ? (o[1] ? (typeof r == 'string' ? o[1] === r : r.has(o[1])) : t(o[2])) : !1;
	},
	gt = (e) => nt.test(e) && !st.test(e),
	dr = () => !1,
	mt = (e) => it.test(e),
	ht = (e) => at.test(e),
	vt = () => {
		const e = R('colors'),
			r = R('spacing'),
			t = R('blur'),
			o = R('brightness'),
			s = R('borderColor'),
			n = R('borderRadius'),
			i = R('borderSpacing'),
			a = R('borderWidth'),
			l = R('contrast'),
			f = R('grayscale'),
			c = R('hueRotate'),
			d = R('invert'),
			p = R('gap'),
			S = R('gradientColorStops'),
			b = R('gradientColorStopPositions'),
			v = R('inset'),
			A = R('margin'),
			m = R('opacity'),
			E = R('padding'),
			N = R('saturate'),
			j = R('scale'),
			V = R('sepia'),
			H = R('skew'),
			K = R('space'),
			q = R('translate'),
			g = () => ['auto', 'contain', 'none'],
			J = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
			Y = () => ['auto', y, r],
			u = () => [y, r],
			w = () => ['', Z, D],
			h = () => ['auto', se, y],
			_ = () => [
				'bottom',
				'center',
				'left',
				'left-bottom',
				'left-top',
				'right',
				'right-bottom',
				'right-top',
				'top'
			],
			x = () => ['solid', 'dashed', 'dotted', 'double', 'none'],
			C = () => [
				'normal',
				'multiply',
				'screen',
				'overlay',
				'darken',
				'lighten',
				'color-dodge',
				'color-burn',
				'hard-light',
				'soft-light',
				'difference',
				'exclusion',
				'hue',
				'saturation',
				'color',
				'luminosity'
			],
			z = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'],
			M = () => ['', '0', y],
			P = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
			T = () => [se, y];
		return {
			cacheSize: 500,
			separator: ':',
			theme: {
				colors: [ce],
				spacing: [Z, D],
				blur: ['none', '', X, y],
				brightness: T(),
				borderColor: [e],
				borderRadius: ['none', '', 'full', X, y],
				borderSpacing: u(),
				borderWidth: w(),
				contrast: T(),
				grayscale: M(),
				hueRotate: T(),
				invert: M(),
				gap: u(),
				gradientColorStops: [e],
				gradientColorStopPositions: [lt, D],
				inset: Y(),
				margin: Y(),
				opacity: T(),
				padding: u(),
				saturate: T(),
				scale: T(),
				sepia: M(),
				skew: T(),
				space: u(),
				translate: u()
			},
			classGroups: {
				aspect: [{ aspect: ['auto', 'square', 'video', y] }],
				container: ['container'],
				columns: [{ columns: [X] }],
				'break-after': [{ 'break-after': P() }],
				'break-before': [{ 'break-before': P() }],
				'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }],
				'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
				box: [{ box: ['border', 'content'] }],
				display: [
					'block',
					'inline-block',
					'inline',
					'flex',
					'inline-flex',
					'table',
					'inline-table',
					'table-caption',
					'table-cell',
					'table-column',
					'table-column-group',
					'table-footer-group',
					'table-header-group',
					'table-row-group',
					'table-row',
					'flow-root',
					'grid',
					'inline-grid',
					'contents',
					'list-item',
					'hidden'
				],
				float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
				clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
				isolation: ['isolate', 'isolation-auto'],
				'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
				'object-position': [{ object: [..._(), y] }],
				overflow: [{ overflow: J() }],
				'overflow-x': [{ 'overflow-x': J() }],
				'overflow-y': [{ 'overflow-y': J() }],
				overscroll: [{ overscroll: g() }],
				'overscroll-x': [{ 'overscroll-x': g() }],
				'overscroll-y': [{ 'overscroll-y': g() }],
				position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
				inset: [{ inset: [v] }],
				'inset-x': [{ 'inset-x': [v] }],
				'inset-y': [{ 'inset-y': [v] }],
				start: [{ start: [v] }],
				end: [{ end: [v] }],
				top: [{ top: [v] }],
				right: [{ right: [v] }],
				bottom: [{ bottom: [v] }],
				left: [{ left: [v] }],
				visibility: ['visible', 'invisible', 'collapse'],
				z: [{ z: ['auto', le, y] }],
				basis: [{ basis: Y() }],
				'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
				'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
				flex: [{ flex: ['1', 'auto', 'initial', 'none', y] }],
				grow: [{ grow: M() }],
				shrink: [{ shrink: M() }],
				order: [{ order: ['first', 'last', 'none', le, y] }],
				'grid-cols': [{ 'grid-cols': [ce] }],
				'col-start-end': [{ col: ['auto', { span: ['full', le, y] }, y] }],
				'col-start': [{ 'col-start': h() }],
				'col-end': [{ 'col-end': h() }],
				'grid-rows': [{ 'grid-rows': [ce] }],
				'row-start-end': [{ row: ['auto', { span: [le, y] }, y] }],
				'row-start': [{ 'row-start': h() }],
				'row-end': [{ 'row-end': h() }],
				'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
				'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', y] }],
				'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', y] }],
				gap: [{ gap: [p] }],
				'gap-x': [{ 'gap-x': [p] }],
				'gap-y': [{ 'gap-y': [p] }],
				'justify-content': [{ justify: ['normal', ...z()] }],
				'justify-items': [{ 'justify-items': ['start', 'end', 'center', 'stretch'] }],
				'justify-self': [{ 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
				'align-content': [{ content: ['normal', ...z(), 'baseline'] }],
				'align-items': [{ items: ['start', 'end', 'center', 'baseline', 'stretch'] }],
				'align-self': [{ self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] }],
				'place-content': [{ 'place-content': [...z(), 'baseline'] }],
				'place-items': [{ 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] }],
				'place-self': [{ 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
				p: [{ p: [E] }],
				px: [{ px: [E] }],
				py: [{ py: [E] }],
				ps: [{ ps: [E] }],
				pe: [{ pe: [E] }],
				pt: [{ pt: [E] }],
				pr: [{ pr: [E] }],
				pb: [{ pb: [E] }],
				pl: [{ pl: [E] }],
				m: [{ m: [A] }],
				mx: [{ mx: [A] }],
				my: [{ my: [A] }],
				ms: [{ ms: [A] }],
				me: [{ me: [A] }],
				mt: [{ mt: [A] }],
				mr: [{ mr: [A] }],
				mb: [{ mb: [A] }],
				ml: [{ ml: [A] }],
				'space-x': [{ 'space-x': [K] }],
				'space-x-reverse': ['space-x-reverse'],
				'space-y': [{ 'space-y': [K] }],
				'space-y-reverse': ['space-y-reverse'],
				w: [{ w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', y, r] }],
				'min-w': [{ 'min-w': [y, r, 'min', 'max', 'fit'] }],
				'max-w': [
					{ 'max-w': [y, r, 'none', 'full', 'min', 'max', 'fit', 'prose', { screen: [X] }, X] }
				],
				h: [{ h: [y, r, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
				'min-h': [{ 'min-h': [y, r, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
				'max-h': [{ 'max-h': [y, r, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
				size: [{ size: [y, r, 'auto', 'min', 'max', 'fit'] }],
				'font-size': [{ text: ['base', X, D] }],
				'font-smoothing': ['antialiased', 'subpixel-antialiased'],
				'font-style': ['italic', 'not-italic'],
				'font-weight': [
					{
						font: [
							'thin',
							'extralight',
							'light',
							'normal',
							'medium',
							'semibold',
							'bold',
							'extrabold',
							'black',
							xe
						]
					}
				],
				'font-family': [{ font: [ce] }],
				'fvn-normal': ['normal-nums'],
				'fvn-ordinal': ['ordinal'],
				'fvn-slashed-zero': ['slashed-zero'],
				'fvn-figure': ['lining-nums', 'oldstyle-nums'],
				'fvn-spacing': ['proportional-nums', 'tabular-nums'],
				'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
				tracking: [{ tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', y] }],
				'line-clamp': [{ 'line-clamp': ['none', se, xe] }],
				leading: [{ leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', Z, y] }],
				'list-image': [{ 'list-image': ['none', y] }],
				'list-style-type': [{ list: ['none', 'disc', 'decimal', y] }],
				'list-style-position': [{ list: ['inside', 'outside'] }],
				'placeholder-color': [{ placeholder: [e] }],
				'placeholder-opacity': [{ 'placeholder-opacity': [m] }],
				'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
				'text-color': [{ text: [e] }],
				'text-opacity': [{ 'text-opacity': [m] }],
				'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
				'text-decoration-style': [{ decoration: [...x(), 'wavy'] }],
				'text-decoration-thickness': [{ decoration: ['auto', 'from-font', Z, D] }],
				'underline-offset': [{ 'underline-offset': ['auto', Z, y] }],
				'text-decoration-color': [{ decoration: [e] }],
				'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
				'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
				'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
				indent: [{ indent: u() }],
				'vertical-align': [
					{
						align: [
							'baseline',
							'top',
							'middle',
							'bottom',
							'text-top',
							'text-bottom',
							'sub',
							'super',
							y
						]
					}
				],
				whitespace: [
					{ whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] }
				],
				break: [{ break: ['normal', 'words', 'all', 'keep'] }],
				hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
				content: [{ content: ['none', y] }],
				'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
				'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
				'bg-opacity': [{ 'bg-opacity': [m] }],
				'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
				'bg-position': [{ bg: [..._(), ut] }],
				'bg-repeat': [{ bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] }],
				'bg-size': [{ bg: ['auto', 'cover', 'contain', dt] }],
				'bg-image': [
					{ bg: ['none', { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, pt] }
				],
				'bg-color': [{ bg: [e] }],
				'gradient-from-pos': [{ from: [b] }],
				'gradient-via-pos': [{ via: [b] }],
				'gradient-to-pos': [{ to: [b] }],
				'gradient-from': [{ from: [S] }],
				'gradient-via': [{ via: [S] }],
				'gradient-to': [{ to: [S] }],
				rounded: [{ rounded: [n] }],
				'rounded-s': [{ 'rounded-s': [n] }],
				'rounded-e': [{ 'rounded-e': [n] }],
				'rounded-t': [{ 'rounded-t': [n] }],
				'rounded-r': [{ 'rounded-r': [n] }],
				'rounded-b': [{ 'rounded-b': [n] }],
				'rounded-l': [{ 'rounded-l': [n] }],
				'rounded-ss': [{ 'rounded-ss': [n] }],
				'rounded-se': [{ 'rounded-se': [n] }],
				'rounded-ee': [{ 'rounded-ee': [n] }],
				'rounded-es': [{ 'rounded-es': [n] }],
				'rounded-tl': [{ 'rounded-tl': [n] }],
				'rounded-tr': [{ 'rounded-tr': [n] }],
				'rounded-br': [{ 'rounded-br': [n] }],
				'rounded-bl': [{ 'rounded-bl': [n] }],
				'border-w': [{ border: [a] }],
				'border-w-x': [{ 'border-x': [a] }],
				'border-w-y': [{ 'border-y': [a] }],
				'border-w-s': [{ 'border-s': [a] }],
				'border-w-e': [{ 'border-e': [a] }],
				'border-w-t': [{ 'border-t': [a] }],
				'border-w-r': [{ 'border-r': [a] }],
				'border-w-b': [{ 'border-b': [a] }],
				'border-w-l': [{ 'border-l': [a] }],
				'border-opacity': [{ 'border-opacity': [m] }],
				'border-style': [{ border: [...x(), 'hidden'] }],
				'divide-x': [{ 'divide-x': [a] }],
				'divide-x-reverse': ['divide-x-reverse'],
				'divide-y': [{ 'divide-y': [a] }],
				'divide-y-reverse': ['divide-y-reverse'],
				'divide-opacity': [{ 'divide-opacity': [m] }],
				'divide-style': [{ divide: x() }],
				'border-color': [{ border: [s] }],
				'border-color-x': [{ 'border-x': [s] }],
				'border-color-y': [{ 'border-y': [s] }],
				'border-color-s': [{ 'border-s': [s] }],
				'border-color-e': [{ 'border-e': [s] }],
				'border-color-t': [{ 'border-t': [s] }],
				'border-color-r': [{ 'border-r': [s] }],
				'border-color-b': [{ 'border-b': [s] }],
				'border-color-l': [{ 'border-l': [s] }],
				'divide-color': [{ divide: [s] }],
				'outline-style': [{ outline: ['', ...x()] }],
				'outline-offset': [{ 'outline-offset': [Z, y] }],
				'outline-w': [{ outline: [Z, D] }],
				'outline-color': [{ outline: [e] }],
				'ring-w': [{ ring: w() }],
				'ring-w-inset': ['ring-inset'],
				'ring-color': [{ ring: [e] }],
				'ring-opacity': [{ 'ring-opacity': [m] }],
				'ring-offset-w': [{ 'ring-offset': [Z, D] }],
				'ring-offset-color': [{ 'ring-offset': [e] }],
				shadow: [{ shadow: ['', 'inner', 'none', X, bt] }],
				'shadow-color': [{ shadow: [ce] }],
				opacity: [{ opacity: [m] }],
				'mix-blend': [{ 'mix-blend': [...C(), 'plus-lighter', 'plus-darker'] }],
				'bg-blend': [{ 'bg-blend': C() }],
				filter: [{ filter: ['', 'none'] }],
				blur: [{ blur: [t] }],
				brightness: [{ brightness: [o] }],
				contrast: [{ contrast: [l] }],
				'drop-shadow': [{ 'drop-shadow': ['', 'none', X, y] }],
				grayscale: [{ grayscale: [f] }],
				'hue-rotate': [{ 'hue-rotate': [c] }],
				invert: [{ invert: [d] }],
				saturate: [{ saturate: [N] }],
				sepia: [{ sepia: [V] }],
				'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
				'backdrop-blur': [{ 'backdrop-blur': [t] }],
				'backdrop-brightness': [{ 'backdrop-brightness': [o] }],
				'backdrop-contrast': [{ 'backdrop-contrast': [l] }],
				'backdrop-grayscale': [{ 'backdrop-grayscale': [f] }],
				'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [c] }],
				'backdrop-invert': [{ 'backdrop-invert': [d] }],
				'backdrop-opacity': [{ 'backdrop-opacity': [m] }],
				'backdrop-saturate': [{ 'backdrop-saturate': [N] }],
				'backdrop-sepia': [{ 'backdrop-sepia': [V] }],
				'border-collapse': [{ border: ['collapse', 'separate'] }],
				'border-spacing': [{ 'border-spacing': [i] }],
				'border-spacing-x': [{ 'border-spacing-x': [i] }],
				'border-spacing-y': [{ 'border-spacing-y': [i] }],
				'table-layout': [{ table: ['auto', 'fixed'] }],
				caption: [{ caption: ['top', 'bottom'] }],
				transition: [
					{ transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', y] }
				],
				duration: [{ duration: T() }],
				ease: [{ ease: ['linear', 'in', 'out', 'in-out', y] }],
				delay: [{ delay: T() }],
				animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', y] }],
				transform: [{ transform: ['', 'gpu', 'none'] }],
				scale: [{ scale: [j] }],
				'scale-x': [{ 'scale-x': [j] }],
				'scale-y': [{ 'scale-y': [j] }],
				rotate: [{ rotate: [le, y] }],
				'translate-x': [{ 'translate-x': [q] }],
				'translate-y': [{ 'translate-y': [q] }],
				'skew-x': [{ 'skew-x': [H] }],
				'skew-y': [{ 'skew-y': [H] }],
				'transform-origin': [
					{
						origin: [
							'center',
							'top',
							'top-right',
							'right',
							'bottom-right',
							'bottom',
							'bottom-left',
							'left',
							'top-left',
							y
						]
					}
				],
				accent: [{ accent: ['auto', e] }],
				appearance: [{ appearance: ['none', 'auto'] }],
				cursor: [
					{
						cursor: [
							'auto',
							'default',
							'pointer',
							'wait',
							'text',
							'move',
							'help',
							'not-allowed',
							'none',
							'context-menu',
							'progress',
							'cell',
							'crosshair',
							'vertical-text',
							'alias',
							'copy',
							'no-drop',
							'grab',
							'grabbing',
							'all-scroll',
							'col-resize',
							'row-resize',
							'n-resize',
							'e-resize',
							's-resize',
							'w-resize',
							'ne-resize',
							'nw-resize',
							'se-resize',
							'sw-resize',
							'ew-resize',
							'ns-resize',
							'nesw-resize',
							'nwse-resize',
							'zoom-in',
							'zoom-out',
							y
						]
					}
				],
				'caret-color': [{ caret: [e] }],
				'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
				resize: [{ resize: ['none', 'y', 'x', ''] }],
				'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
				'scroll-m': [{ 'scroll-m': u() }],
				'scroll-mx': [{ 'scroll-mx': u() }],
				'scroll-my': [{ 'scroll-my': u() }],
				'scroll-ms': [{ 'scroll-ms': u() }],
				'scroll-me': [{ 'scroll-me': u() }],
				'scroll-mt': [{ 'scroll-mt': u() }],
				'scroll-mr': [{ 'scroll-mr': u() }],
				'scroll-mb': [{ 'scroll-mb': u() }],
				'scroll-ml': [{ 'scroll-ml': u() }],
				'scroll-p': [{ 'scroll-p': u() }],
				'scroll-px': [{ 'scroll-px': u() }],
				'scroll-py': [{ 'scroll-py': u() }],
				'scroll-ps': [{ 'scroll-ps': u() }],
				'scroll-pe': [{ 'scroll-pe': u() }],
				'scroll-pt': [{ 'scroll-pt': u() }],
				'scroll-pr': [{ 'scroll-pr': u() }],
				'scroll-pb': [{ 'scroll-pb': u() }],
				'scroll-pl': [{ 'scroll-pl': u() }],
				'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
				'snap-stop': [{ snap: ['normal', 'always'] }],
				'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
				'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
				touch: [{ touch: ['auto', 'none', 'manipulation'] }],
				'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
				'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
				'touch-pz': ['touch-pinch-zoom'],
				select: [{ select: ['none', 'text', 'all', 'auto'] }],
				'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', y] }],
				fill: [{ fill: [e, 'none'] }],
				'stroke-w': [{ stroke: [Z, D, xe] }],
				stroke: [{ stroke: [e, 'none'] }],
				sr: ['sr-only', 'not-sr-only'],
				'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }]
			},
			conflictingClassGroups: {
				overflow: ['overflow-x', 'overflow-y'],
				overscroll: ['overscroll-x', 'overscroll-y'],
				inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
				'inset-x': ['right', 'left'],
				'inset-y': ['top', 'bottom'],
				flex: ['basis', 'grow', 'shrink'],
				gap: ['gap-x', 'gap-y'],
				p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
				px: ['pr', 'pl'],
				py: ['pt', 'pb'],
				m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
				mx: ['mr', 'ml'],
				my: ['mt', 'mb'],
				size: ['w', 'h'],
				'font-size': ['leading'],
				'fvn-normal': [
					'fvn-ordinal',
					'fvn-slashed-zero',
					'fvn-figure',
					'fvn-spacing',
					'fvn-fraction'
				],
				'fvn-ordinal': ['fvn-normal'],
				'fvn-slashed-zero': ['fvn-normal'],
				'fvn-figure': ['fvn-normal'],
				'fvn-spacing': ['fvn-normal'],
				'fvn-fraction': ['fvn-normal'],
				'line-clamp': ['display', 'overflow'],
				rounded: [
					'rounded-s',
					'rounded-e',
					'rounded-t',
					'rounded-r',
					'rounded-b',
					'rounded-l',
					'rounded-ss',
					'rounded-se',
					'rounded-ee',
					'rounded-es',
					'rounded-tl',
					'rounded-tr',
					'rounded-br',
					'rounded-bl'
				],
				'rounded-s': ['rounded-ss', 'rounded-es'],
				'rounded-e': ['rounded-se', 'rounded-ee'],
				'rounded-t': ['rounded-tl', 'rounded-tr'],
				'rounded-r': ['rounded-tr', 'rounded-br'],
				'rounded-b': ['rounded-br', 'rounded-bl'],
				'rounded-l': ['rounded-tl', 'rounded-bl'],
				'border-spacing': ['border-spacing-x', 'border-spacing-y'],
				'border-w': [
					'border-w-s',
					'border-w-e',
					'border-w-t',
					'border-w-r',
					'border-w-b',
					'border-w-l'
				],
				'border-w-x': ['border-w-r', 'border-w-l'],
				'border-w-y': ['border-w-t', 'border-w-b'],
				'border-color': [
					'border-color-s',
					'border-color-e',
					'border-color-t',
					'border-color-r',
					'border-color-b',
					'border-color-l'
				],
				'border-color-x': ['border-color-r', 'border-color-l'],
				'border-color-y': ['border-color-t', 'border-color-b'],
				'scroll-m': [
					'scroll-mx',
					'scroll-my',
					'scroll-ms',
					'scroll-me',
					'scroll-mt',
					'scroll-mr',
					'scroll-mb',
					'scroll-ml'
				],
				'scroll-mx': ['scroll-mr', 'scroll-ml'],
				'scroll-my': ['scroll-mt', 'scroll-mb'],
				'scroll-p': [
					'scroll-px',
					'scroll-py',
					'scroll-ps',
					'scroll-pe',
					'scroll-pt',
					'scroll-pr',
					'scroll-pb',
					'scroll-pl'
				],
				'scroll-px': ['scroll-pr', 'scroll-pl'],
				'scroll-py': ['scroll-pt', 'scroll-pb'],
				touch: ['touch-x', 'touch-y', 'touch-pz'],
				'touch-x': ['touch'],
				'touch-y': ['touch'],
				'touch-pz': ['touch']
			},
			conflictingClassGroupModifiers: { 'font-size': ['leading'] }
		};
	},
	yt = et(vt);
var Ve = (e) => (typeof e == 'boolean' ? `${e}` : e === 0 ? '0' : e),
	F = (e) => !e || typeof e != 'object' || Object.keys(e).length === 0,
	wt = (e, r) => JSON.stringify(e) === JSON.stringify(r);
function ur(e, r) {
	e.forEach(function (t) {
		Array.isArray(t) ? ur(t, r) : r.push(t);
	});
}
function fr(e) {
	let r = [];
	return ur(e, r), r;
}
var pr = (...e) => fr(e).filter(Boolean),
	br = (e, r) => {
		let t = {},
			o = Object.keys(e),
			s = Object.keys(r);
		for (let n of o)
			if (s.includes(n)) {
				let i = e[n],
					a = r[n];
				typeof i == 'object' && typeof a == 'object'
					? (t[n] = br(i, a))
					: Array.isArray(i) || Array.isArray(a)
						? (t[n] = pr(a, i))
						: (t[n] = a + ' ' + i);
			} else t[n] = e[n];
		for (let n of s) o.includes(n) || (t[n] = r[n]);
		return t;
	},
	Ue = (e) => (!e || typeof e != 'string' ? e : e.replace(/\s+/g, ' ').trim());
function xt() {
	for (var e = 0, r, t, o = ''; e < arguments.length; )
		(r = arguments[e++]) && (t = gr(r)) && (o && (o += ' '), (o += t));
	return o;
}
function gr(e) {
	if (typeof e == 'string') return e;
	for (var r, t = '', o = 0; o < e.length; o++)
		e[o] && (r = gr(e[o])) && (t && (t += ' '), (t += r));
	return t;
}
var Ne = '-';
function At(e) {
	var r = _t(e),
		t = e.conflictingClassGroups,
		o = e.conflictingClassGroupModifiers,
		s = o === void 0 ? {} : o;
	function n(a) {
		var l = a.split(Ne);
		return l[0] === '' && l.length !== 1 && l.shift(), mr(l, r) || kt(a);
	}
	function i(a, l) {
		var f = t[a] || [];
		return l && s[a] ? [].concat(f, s[a]) : f;
	}
	return { getClassGroupId: n, getConflictingClassGroupIds: i };
}
function mr(e, r) {
	var i;
	if (e.length === 0) return r.classGroupId;
	var t = e[0],
		o = r.nextPart.get(t),
		s = o ? mr(e.slice(1), o) : void 0;
	if (s) return s;
	if (r.validators.length !== 0) {
		var n = e.join(Ne);
		return (i = r.validators.find(function (a) {
			var l = a.validator;
			return l(n);
		})) == null
			? void 0
			: i.classGroupId;
	}
}
var He = /^\[(.+)\]$/;
function kt(e) {
	if (He.test(e)) {
		var r = He.exec(e)[1],
			t = r == null ? void 0 : r.substring(0, r.indexOf(':'));
		if (t) return 'arbitrary..' + t;
	}
}
function _t(e) {
	var r = e.theme,
		t = e.prefix,
		o = { nextPart: new Map(), validators: [] },
		s = St(Object.entries(e.classGroups), t);
	return (
		s.forEach(function (n) {
			var i = n[0],
				a = n[1];
			Se(a, o, i, r);
		}),
		o
	);
}
function Se(e, r, t, o) {
	e.forEach(function (s) {
		if (typeof s == 'string') {
			var n = s === '' ? r : Ke(r, s);
			n.classGroupId = t;
			return;
		}
		if (typeof s == 'function') {
			if (Ct(s)) {
				Se(s(o), r, t, o);
				return;
			}
			r.validators.push({ validator: s, classGroupId: t });
			return;
		}
		Object.entries(s).forEach(function (i) {
			var a = i[0],
				l = i[1];
			Se(l, Ke(r, a), t, o);
		});
	});
}
function Ke(e, r) {
	var t = e;
	return (
		r.split(Ne).forEach(function (o) {
			t.nextPart.has(o) || t.nextPart.set(o, { nextPart: new Map(), validators: [] }),
				(t = t.nextPart.get(o));
		}),
		t
	);
}
function Ct(e) {
	return e.isThemeGetter;
}
function St(e, r) {
	return r
		? e.map(function (t) {
				var o = t[0],
					s = t[1],
					n = s.map(function (i) {
						return typeof i == 'string'
							? r + i
							: typeof i == 'object'
								? Object.fromEntries(
										Object.entries(i).map(function (a) {
											var l = a[0],
												f = a[1];
											return [r + l, f];
										})
									)
								: i;
					});
				return [o, n];
			})
		: e;
}
function zt(e) {
	if (e < 1) return { get: function () {}, set: function () {} };
	var r = 0,
		t = new Map(),
		o = new Map();
	function s(n, i) {
		t.set(n, i), r++, r > e && ((r = 0), (o = t), (t = new Map()));
	}
	return {
		get: function (i) {
			var a = t.get(i);
			if (a !== void 0) return a;
			if ((a = o.get(i)) !== void 0) return s(i, a), a;
		},
		set: function (i, a) {
			t.has(i) ? t.set(i, a) : s(i, a);
		}
	};
}
var hr = '!';
function Mt(e) {
	var r = e.separator || ':',
		t = r.length === 1,
		o = r[0],
		s = r.length;
	return function (i) {
		for (var a = [], l = 0, f = 0, c, d = 0; d < i.length; d++) {
			var p = i[d];
			if (l === 0) {
				if (p === o && (t || i.slice(d, d + s) === r)) {
					a.push(i.slice(f, d)), (f = d + s);
					continue;
				}
				if (p === '/') {
					c = d;
					continue;
				}
			}
			p === '[' ? l++ : p === ']' && l--;
		}
		var S = a.length === 0 ? i : i.substring(f),
			b = S.startsWith(hr),
			v = b ? S.substring(1) : S,
			A = c && c > f ? c - f : void 0;
		return {
			modifiers: a,
			hasImportantModifier: b,
			baseClassName: v,
			maybePostfixModifierPosition: A
		};
	};
}
function Et(e) {
	if (e.length <= 1) return e;
	var r = [],
		t = [];
	return (
		e.forEach(function (o) {
			var s = o[0] === '[';
			s ? (r.push.apply(r, t.sort().concat([o])), (t = [])) : t.push(o);
		}),
		r.push.apply(r, t.sort()),
		r
	);
}
function Rt(e) {
	return { cache: zt(e.cacheSize), splitModifiers: Mt(e), ...At(e) };
}
var Gt = /\s+/;
function Pt(e, r) {
	var t = r.splitModifiers,
		o = r.getClassGroupId,
		s = r.getConflictingClassGroupIds,
		n = new Set();
	return e
		.trim()
		.split(Gt)
		.map(function (i) {
			var a = t(i),
				l = a.modifiers,
				f = a.hasImportantModifier,
				c = a.baseClassName,
				d = a.maybePostfixModifierPosition,
				p = o(d ? c.substring(0, d) : c),
				S = !!d;
			if (!p) {
				if (!d) return { isTailwindClass: !1, originalClassName: i };
				if (((p = o(c)), !p)) return { isTailwindClass: !1, originalClassName: i };
				S = !1;
			}
			var b = Et(l).join(':'),
				v = f ? b + hr : b;
			return {
				isTailwindClass: !0,
				modifierId: v,
				classGroupId: p,
				originalClassName: i,
				hasPostfixModifier: S
			};
		})
		.reverse()
		.filter(function (i) {
			if (!i.isTailwindClass) return !0;
			var a = i.modifierId,
				l = i.classGroupId,
				f = i.hasPostfixModifier,
				c = a + l;
			return n.has(c)
				? !1
				: (n.add(c),
					s(l, f).forEach(function (d) {
						return n.add(a + d);
					}),
					!0);
		})
		.reverse()
		.map(function (i) {
			return i.originalClassName;
		})
		.join(' ');
}
function ze() {
	for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
	var o,
		s,
		n,
		i = a;
	function a(f) {
		var c = r[0],
			d = r.slice(1),
			p = d.reduce(function (S, b) {
				return b(S);
			}, c());
		return (o = Rt(p)), (s = o.cache.get), (n = o.cache.set), (i = l), l(f);
	}
	function l(f) {
		var c = s(f);
		if (c) return c;
		var d = Pt(f, o);
		return n(f, d), d;
	}
	return function () {
		return i(xt.apply(null, arguments));
	};
}
function G(e) {
	var r = function (o) {
		return o[e] || [];
	};
	return (r.isThemeGetter = !0), r;
}
var vr = /^\[(?:([a-z-]+):)?(.+)\]$/i,
	Tt = /^\d+\/\d+$/,
	It = new Set(['px', 'full', 'screen']),
	jt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
	Ot =
		/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
	Lt = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function U(e) {
	return re(e) || It.has(e) || Tt.test(e) || Me(e);
}
function Me(e) {
	return ne(e, 'length', Ut);
}
function Nt(e) {
	return ne(e, 'size', yr);
}
function Wt(e) {
	return ne(e, 'position', yr);
}
function Ft(e) {
	return ne(e, 'url', Ht);
}
function ge(e) {
	return ne(e, 'number', re);
}
function re(e) {
	return !Number.isNaN(Number(e));
}
function Bt(e) {
	return e.endsWith('%') && re(e.slice(0, -1));
}
function de(e) {
	return qe(e) || ne(e, 'number', qe);
}
function k(e) {
	return vr.test(e);
}
function ue() {
	return !0;
}
function Q(e) {
	return jt.test(e);
}
function Vt(e) {
	return ne(e, '', Kt);
}
function ne(e, r, t) {
	var o = vr.exec(e);
	return o ? (o[1] ? o[1] === r : t(o[2])) : !1;
}
function Ut(e) {
	return Ot.test(e);
}
function yr() {
	return !1;
}
function Ht(e) {
	return e.startsWith('url(');
}
function qe(e) {
	return Number.isInteger(Number(e));
}
function Kt(e) {
	return Lt.test(e);
}
function Ee() {
	var e = G('colors'),
		r = G('spacing'),
		t = G('blur'),
		o = G('brightness'),
		s = G('borderColor'),
		n = G('borderRadius'),
		i = G('borderSpacing'),
		a = G('borderWidth'),
		l = G('contrast'),
		f = G('grayscale'),
		c = G('hueRotate'),
		d = G('invert'),
		p = G('gap'),
		S = G('gradientColorStops'),
		b = G('gradientColorStopPositions'),
		v = G('inset'),
		A = G('margin'),
		m = G('opacity'),
		E = G('padding'),
		N = G('saturate'),
		j = G('scale'),
		V = G('sepia'),
		H = G('skew'),
		K = G('space'),
		q = G('translate'),
		g = function () {
			return ['auto', 'contain', 'none'];
		},
		J = function () {
			return ['auto', 'hidden', 'clip', 'visible', 'scroll'];
		},
		Y = function () {
			return ['auto', k, r];
		},
		u = function () {
			return [k, r];
		},
		w = function () {
			return ['', U];
		},
		h = function () {
			return ['auto', re, k];
		},
		_ = function () {
			return [
				'bottom',
				'center',
				'left',
				'left-bottom',
				'left-top',
				'right',
				'right-bottom',
				'right-top',
				'top'
			];
		},
		x = function () {
			return ['solid', 'dashed', 'dotted', 'double', 'none'];
		},
		C = function () {
			return [
				'normal',
				'multiply',
				'screen',
				'overlay',
				'darken',
				'lighten',
				'color-dodge',
				'color-burn',
				'hard-light',
				'soft-light',
				'difference',
				'exclusion',
				'hue',
				'saturation',
				'color',
				'luminosity',
				'plus-lighter'
			];
		},
		z = function () {
			return ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'];
		},
		M = function () {
			return ['', '0', k];
		},
		P = function () {
			return ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
		},
		T = function () {
			return [re, ge];
		},
		W = function () {
			return [re, k];
		};
	return {
		cacheSize: 500,
		theme: {
			colors: [ue],
			spacing: [U],
			blur: ['none', '', Q, k],
			brightness: T(),
			borderColor: [e],
			borderRadius: ['none', '', 'full', Q, k],
			borderSpacing: u(),
			borderWidth: w(),
			contrast: T(),
			grayscale: M(),
			hueRotate: W(),
			invert: M(),
			gap: u(),
			gradientColorStops: [e],
			gradientColorStopPositions: [Bt, Me],
			inset: Y(),
			margin: Y(),
			opacity: T(),
			padding: u(),
			saturate: T(),
			scale: T(),
			sepia: M(),
			skew: W(),
			space: u(),
			translate: u()
		},
		classGroups: {
			aspect: [{ aspect: ['auto', 'square', 'video', k] }],
			container: ['container'],
			columns: [{ columns: [Q] }],
			'break-after': [{ 'break-after': P() }],
			'break-before': [{ 'break-before': P() }],
			'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }],
			'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
			box: [{ box: ['border', 'content'] }],
			display: [
				'block',
				'inline-block',
				'inline',
				'flex',
				'inline-flex',
				'table',
				'inline-table',
				'table-caption',
				'table-cell',
				'table-column',
				'table-column-group',
				'table-footer-group',
				'table-header-group',
				'table-row-group',
				'table-row',
				'flow-root',
				'grid',
				'inline-grid',
				'contents',
				'list-item',
				'hidden'
			],
			float: [{ float: ['right', 'left', 'none'] }],
			clear: [{ clear: ['left', 'right', 'both', 'none'] }],
			isolation: ['isolate', 'isolation-auto'],
			'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
			'object-position': [{ object: [].concat(_(), [k]) }],
			overflow: [{ overflow: J() }],
			'overflow-x': [{ 'overflow-x': J() }],
			'overflow-y': [{ 'overflow-y': J() }],
			overscroll: [{ overscroll: g() }],
			'overscroll-x': [{ 'overscroll-x': g() }],
			'overscroll-y': [{ 'overscroll-y': g() }],
			position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
			inset: [{ inset: [v] }],
			'inset-x': [{ 'inset-x': [v] }],
			'inset-y': [{ 'inset-y': [v] }],
			start: [{ start: [v] }],
			end: [{ end: [v] }],
			top: [{ top: [v] }],
			right: [{ right: [v] }],
			bottom: [{ bottom: [v] }],
			left: [{ left: [v] }],
			visibility: ['visible', 'invisible', 'collapse'],
			z: [{ z: ['auto', de] }],
			basis: [{ basis: Y() }],
			'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
			'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
			flex: [{ flex: ['1', 'auto', 'initial', 'none', k] }],
			grow: [{ grow: M() }],
			shrink: [{ shrink: M() }],
			order: [{ order: ['first', 'last', 'none', de] }],
			'grid-cols': [{ 'grid-cols': [ue] }],
			'col-start-end': [{ col: ['auto', { span: ['full', de] }, k] }],
			'col-start': [{ 'col-start': h() }],
			'col-end': [{ 'col-end': h() }],
			'grid-rows': [{ 'grid-rows': [ue] }],
			'row-start-end': [{ row: ['auto', { span: [de] }, k] }],
			'row-start': [{ 'row-start': h() }],
			'row-end': [{ 'row-end': h() }],
			'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
			'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', k] }],
			'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', k] }],
			gap: [{ gap: [p] }],
			'gap-x': [{ 'gap-x': [p] }],
			'gap-y': [{ 'gap-y': [p] }],
			'justify-content': [{ justify: ['normal'].concat(z()) }],
			'justify-items': [{ 'justify-items': ['start', 'end', 'center', 'stretch'] }],
			'justify-self': [{ 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
			'align-content': [{ content: ['normal'].concat(z(), ['baseline']) }],
			'align-items': [{ items: ['start', 'end', 'center', 'baseline', 'stretch'] }],
			'align-self': [{ self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] }],
			'place-content': [{ 'place-content': [].concat(z(), ['baseline']) }],
			'place-items': [{ 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] }],
			'place-self': [{ 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
			p: [{ p: [E] }],
			px: [{ px: [E] }],
			py: [{ py: [E] }],
			ps: [{ ps: [E] }],
			pe: [{ pe: [E] }],
			pt: [{ pt: [E] }],
			pr: [{ pr: [E] }],
			pb: [{ pb: [E] }],
			pl: [{ pl: [E] }],
			m: [{ m: [A] }],
			mx: [{ mx: [A] }],
			my: [{ my: [A] }],
			ms: [{ ms: [A] }],
			me: [{ me: [A] }],
			mt: [{ mt: [A] }],
			mr: [{ mr: [A] }],
			mb: [{ mb: [A] }],
			ml: [{ ml: [A] }],
			'space-x': [{ 'space-x': [K] }],
			'space-x-reverse': ['space-x-reverse'],
			'space-y': [{ 'space-y': [K] }],
			'space-y-reverse': ['space-y-reverse'],
			w: [{ w: ['auto', 'min', 'max', 'fit', k, r] }],
			'min-w': [{ 'min-w': ['min', 'max', 'fit', k, U] }],
			'max-w': [
				{ 'max-w': ['0', 'none', 'full', 'min', 'max', 'fit', 'prose', { screen: [Q] }, Q, k] }
			],
			h: [{ h: [k, r, 'auto', 'min', 'max', 'fit'] }],
			'min-h': [{ 'min-h': ['min', 'max', 'fit', k, U] }],
			'max-h': [{ 'max-h': [k, r, 'min', 'max', 'fit'] }],
			'font-size': [{ text: ['base', Q, Me] }],
			'font-smoothing': ['antialiased', 'subpixel-antialiased'],
			'font-style': ['italic', 'not-italic'],
			'font-weight': [
				{
					font: [
						'thin',
						'extralight',
						'light',
						'normal',
						'medium',
						'semibold',
						'bold',
						'extrabold',
						'black',
						ge
					]
				}
			],
			'font-family': [{ font: [ue] }],
			'fvn-normal': ['normal-nums'],
			'fvn-ordinal': ['ordinal'],
			'fvn-slashed-zero': ['slashed-zero'],
			'fvn-figure': ['lining-nums', 'oldstyle-nums'],
			'fvn-spacing': ['proportional-nums', 'tabular-nums'],
			'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
			tracking: [{ tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', k] }],
			'line-clamp': [{ 'line-clamp': ['none', re, ge] }],
			leading: [{ leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', k, U] }],
			'list-image': [{ 'list-image': ['none', k] }],
			'list-style-type': [{ list: ['none', 'disc', 'decimal', k] }],
			'list-style-position': [{ list: ['inside', 'outside'] }],
			'placeholder-color': [{ placeholder: [e] }],
			'placeholder-opacity': [{ 'placeholder-opacity': [m] }],
			'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
			'text-color': [{ text: [e] }],
			'text-opacity': [{ 'text-opacity': [m] }],
			'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
			'text-decoration-style': [{ decoration: [].concat(x(), ['wavy']) }],
			'text-decoration-thickness': [{ decoration: ['auto', 'from-font', U] }],
			'underline-offset': [{ 'underline-offset': ['auto', k, U] }],
			'text-decoration-color': [{ decoration: [e] }],
			'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
			'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
			indent: [{ indent: u() }],
			'vertical-align': [
				{
					align: [
						'baseline',
						'top',
						'middle',
						'bottom',
						'text-top',
						'text-bottom',
						'sub',
						'super',
						k
					]
				}
			],
			whitespace: [
				{ whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] }
			],
			break: [{ break: ['normal', 'words', 'all', 'keep'] }],
			hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
			content: [{ content: ['none', k] }],
			'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
			'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
			'bg-opacity': [{ 'bg-opacity': [m] }],
			'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
			'bg-position': [{ bg: [].concat(_(), [Wt]) }],
			'bg-repeat': [{ bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] }],
			'bg-size': [{ bg: ['auto', 'cover', 'contain', Nt] }],
			'bg-image': [
				{ bg: ['none', { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, Ft] }
			],
			'bg-color': [{ bg: [e] }],
			'gradient-from-pos': [{ from: [b] }],
			'gradient-via-pos': [{ via: [b] }],
			'gradient-to-pos': [{ to: [b] }],
			'gradient-from': [{ from: [S] }],
			'gradient-via': [{ via: [S] }],
			'gradient-to': [{ to: [S] }],
			rounded: [{ rounded: [n] }],
			'rounded-s': [{ 'rounded-s': [n] }],
			'rounded-e': [{ 'rounded-e': [n] }],
			'rounded-t': [{ 'rounded-t': [n] }],
			'rounded-r': [{ 'rounded-r': [n] }],
			'rounded-b': [{ 'rounded-b': [n] }],
			'rounded-l': [{ 'rounded-l': [n] }],
			'rounded-ss': [{ 'rounded-ss': [n] }],
			'rounded-se': [{ 'rounded-se': [n] }],
			'rounded-ee': [{ 'rounded-ee': [n] }],
			'rounded-es': [{ 'rounded-es': [n] }],
			'rounded-tl': [{ 'rounded-tl': [n] }],
			'rounded-tr': [{ 'rounded-tr': [n] }],
			'rounded-br': [{ 'rounded-br': [n] }],
			'rounded-bl': [{ 'rounded-bl': [n] }],
			'border-w': [{ border: [a] }],
			'border-w-x': [{ 'border-x': [a] }],
			'border-w-y': [{ 'border-y': [a] }],
			'border-w-s': [{ 'border-s': [a] }],
			'border-w-e': [{ 'border-e': [a] }],
			'border-w-t': [{ 'border-t': [a] }],
			'border-w-r': [{ 'border-r': [a] }],
			'border-w-b': [{ 'border-b': [a] }],
			'border-w-l': [{ 'border-l': [a] }],
			'border-opacity': [{ 'border-opacity': [m] }],
			'border-style': [{ border: [].concat(x(), ['hidden']) }],
			'divide-x': [{ 'divide-x': [a] }],
			'divide-x-reverse': ['divide-x-reverse'],
			'divide-y': [{ 'divide-y': [a] }],
			'divide-y-reverse': ['divide-y-reverse'],
			'divide-opacity': [{ 'divide-opacity': [m] }],
			'divide-style': [{ divide: x() }],
			'border-color': [{ border: [s] }],
			'border-color-x': [{ 'border-x': [s] }],
			'border-color-y': [{ 'border-y': [s] }],
			'border-color-t': [{ 'border-t': [s] }],
			'border-color-r': [{ 'border-r': [s] }],
			'border-color-b': [{ 'border-b': [s] }],
			'border-color-l': [{ 'border-l': [s] }],
			'divide-color': [{ divide: [s] }],
			'outline-style': [{ outline: [''].concat(x()) }],
			'outline-offset': [{ 'outline-offset': [k, U] }],
			'outline-w': [{ outline: [U] }],
			'outline-color': [{ outline: [e] }],
			'ring-w': [{ ring: w() }],
			'ring-w-inset': ['ring-inset'],
			'ring-color': [{ ring: [e] }],
			'ring-opacity': [{ 'ring-opacity': [m] }],
			'ring-offset-w': [{ 'ring-offset': [U] }],
			'ring-offset-color': [{ 'ring-offset': [e] }],
			shadow: [{ shadow: ['', 'inner', 'none', Q, Vt] }],
			'shadow-color': [{ shadow: [ue] }],
			opacity: [{ opacity: [m] }],
			'mix-blend': [{ 'mix-blend': C() }],
			'bg-blend': [{ 'bg-blend': C() }],
			filter: [{ filter: ['', 'none'] }],
			blur: [{ blur: [t] }],
			brightness: [{ brightness: [o] }],
			contrast: [{ contrast: [l] }],
			'drop-shadow': [{ 'drop-shadow': ['', 'none', Q, k] }],
			grayscale: [{ grayscale: [f] }],
			'hue-rotate': [{ 'hue-rotate': [c] }],
			invert: [{ invert: [d] }],
			saturate: [{ saturate: [N] }],
			sepia: [{ sepia: [V] }],
			'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
			'backdrop-blur': [{ 'backdrop-blur': [t] }],
			'backdrop-brightness': [{ 'backdrop-brightness': [o] }],
			'backdrop-contrast': [{ 'backdrop-contrast': [l] }],
			'backdrop-grayscale': [{ 'backdrop-grayscale': [f] }],
			'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [c] }],
			'backdrop-invert': [{ 'backdrop-invert': [d] }],
			'backdrop-opacity': [{ 'backdrop-opacity': [m] }],
			'backdrop-saturate': [{ 'backdrop-saturate': [N] }],
			'backdrop-sepia': [{ 'backdrop-sepia': [V] }],
			'border-collapse': [{ border: ['collapse', 'separate'] }],
			'border-spacing': [{ 'border-spacing': [i] }],
			'border-spacing-x': [{ 'border-spacing-x': [i] }],
			'border-spacing-y': [{ 'border-spacing-y': [i] }],
			'table-layout': [{ table: ['auto', 'fixed'] }],
			caption: [{ caption: ['top', 'bottom'] }],
			transition: [
				{ transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', k] }
			],
			duration: [{ duration: W() }],
			ease: [{ ease: ['linear', 'in', 'out', 'in-out', k] }],
			delay: [{ delay: W() }],
			animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', k] }],
			transform: [{ transform: ['', 'gpu', 'none'] }],
			scale: [{ scale: [j] }],
			'scale-x': [{ 'scale-x': [j] }],
			'scale-y': [{ 'scale-y': [j] }],
			rotate: [{ rotate: [de, k] }],
			'translate-x': [{ 'translate-x': [q] }],
			'translate-y': [{ 'translate-y': [q] }],
			'skew-x': [{ 'skew-x': [H] }],
			'skew-y': [{ 'skew-y': [H] }],
			'transform-origin': [
				{
					origin: [
						'center',
						'top',
						'top-right',
						'right',
						'bottom-right',
						'bottom',
						'bottom-left',
						'left',
						'top-left',
						k
					]
				}
			],
			accent: [{ accent: ['auto', e] }],
			appearance: ['appearance-none'],
			cursor: [
				{
					cursor: [
						'auto',
						'default',
						'pointer',
						'wait',
						'text',
						'move',
						'help',
						'not-allowed',
						'none',
						'context-menu',
						'progress',
						'cell',
						'crosshair',
						'vertical-text',
						'alias',
						'copy',
						'no-drop',
						'grab',
						'grabbing',
						'all-scroll',
						'col-resize',
						'row-resize',
						'n-resize',
						'e-resize',
						's-resize',
						'w-resize',
						'ne-resize',
						'nw-resize',
						'se-resize',
						'sw-resize',
						'ew-resize',
						'ns-resize',
						'nesw-resize',
						'nwse-resize',
						'zoom-in',
						'zoom-out',
						k
					]
				}
			],
			'caret-color': [{ caret: [e] }],
			'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
			resize: [{ resize: ['none', 'y', 'x', ''] }],
			'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
			'scroll-m': [{ 'scroll-m': u() }],
			'scroll-mx': [{ 'scroll-mx': u() }],
			'scroll-my': [{ 'scroll-my': u() }],
			'scroll-ms': [{ 'scroll-ms': u() }],
			'scroll-me': [{ 'scroll-me': u() }],
			'scroll-mt': [{ 'scroll-mt': u() }],
			'scroll-mr': [{ 'scroll-mr': u() }],
			'scroll-mb': [{ 'scroll-mb': u() }],
			'scroll-ml': [{ 'scroll-ml': u() }],
			'scroll-p': [{ 'scroll-p': u() }],
			'scroll-px': [{ 'scroll-px': u() }],
			'scroll-py': [{ 'scroll-py': u() }],
			'scroll-ps': [{ 'scroll-ps': u() }],
			'scroll-pe': [{ 'scroll-pe': u() }],
			'scroll-pt': [{ 'scroll-pt': u() }],
			'scroll-pr': [{ 'scroll-pr': u() }],
			'scroll-pb': [{ 'scroll-pb': u() }],
			'scroll-pl': [{ 'scroll-pl': u() }],
			'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
			'snap-stop': [{ snap: ['normal', 'always'] }],
			'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
			'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
			touch: [
				{
					touch: [
						'auto',
						'none',
						'pinch-zoom',
						'manipulation',
						{ pan: ['x', 'left', 'right', 'y', 'up', 'down'] }
					]
				}
			],
			select: [{ select: ['none', 'text', 'all', 'auto'] }],
			'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', k] }],
			fill: [{ fill: [e, 'none'] }],
			'stroke-w': [{ stroke: [U, ge] }],
			stroke: [{ stroke: [e, 'none'] }],
			sr: ['sr-only', 'not-sr-only']
		},
		conflictingClassGroups: {
			overflow: ['overflow-x', 'overflow-y'],
			overscroll: ['overscroll-x', 'overscroll-y'],
			inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
			'inset-x': ['right', 'left'],
			'inset-y': ['top', 'bottom'],
			flex: ['basis', 'grow', 'shrink'],
			gap: ['gap-x', 'gap-y'],
			p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
			px: ['pr', 'pl'],
			py: ['pt', 'pb'],
			m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
			mx: ['mr', 'ml'],
			my: ['mt', 'mb'],
			'font-size': ['leading'],
			'fvn-normal': [
				'fvn-ordinal',
				'fvn-slashed-zero',
				'fvn-figure',
				'fvn-spacing',
				'fvn-fraction'
			],
			'fvn-ordinal': ['fvn-normal'],
			'fvn-slashed-zero': ['fvn-normal'],
			'fvn-figure': ['fvn-normal'],
			'fvn-spacing': ['fvn-normal'],
			'fvn-fraction': ['fvn-normal'],
			rounded: [
				'rounded-s',
				'rounded-e',
				'rounded-t',
				'rounded-r',
				'rounded-b',
				'rounded-l',
				'rounded-ss',
				'rounded-se',
				'rounded-ee',
				'rounded-es',
				'rounded-tl',
				'rounded-tr',
				'rounded-br',
				'rounded-bl'
			],
			'rounded-s': ['rounded-ss', 'rounded-es'],
			'rounded-e': ['rounded-se', 'rounded-ee'],
			'rounded-t': ['rounded-tl', 'rounded-tr'],
			'rounded-r': ['rounded-tr', 'rounded-br'],
			'rounded-b': ['rounded-br', 'rounded-bl'],
			'rounded-l': ['rounded-tl', 'rounded-bl'],
			'border-spacing': ['border-spacing-x', 'border-spacing-y'],
			'border-w': [
				'border-w-s',
				'border-w-e',
				'border-w-t',
				'border-w-r',
				'border-w-b',
				'border-w-l'
			],
			'border-w-x': ['border-w-r', 'border-w-l'],
			'border-w-y': ['border-w-t', 'border-w-b'],
			'border-color': ['border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
			'border-color-x': ['border-color-r', 'border-color-l'],
			'border-color-y': ['border-color-t', 'border-color-b'],
			'scroll-m': [
				'scroll-mx',
				'scroll-my',
				'scroll-ms',
				'scroll-me',
				'scroll-mt',
				'scroll-mr',
				'scroll-mb',
				'scroll-ml'
			],
			'scroll-mx': ['scroll-mr', 'scroll-ml'],
			'scroll-my': ['scroll-mt', 'scroll-mb'],
			'scroll-p': [
				'scroll-px',
				'scroll-py',
				'scroll-ps',
				'scroll-pe',
				'scroll-pt',
				'scroll-pr',
				'scroll-pb',
				'scroll-pl'
			],
			'scroll-px': ['scroll-pr', 'scroll-pl'],
			'scroll-py': ['scroll-pt', 'scroll-pb']
		},
		conflictingClassGroupModifiers: { 'font-size': ['leading'] }
	};
}
function qt(e, r) {
	for (var t in r) wr(e, t, r[t]);
	return e;
}
var Jt = Object.prototype.hasOwnProperty,
	Yt = new Set(['string', 'number', 'boolean']);
function wr(e, r, t) {
	if (!Jt.call(e, r) || Yt.has(typeof t) || t === null) {
		e[r] = t;
		return;
	}
	if (Array.isArray(t) && Array.isArray(e[r])) {
		e[r] = e[r].concat(t);
		return;
	}
	if (typeof t == 'object' && typeof e[r] == 'object') {
		if (e[r] === null) {
			e[r] = t;
			return;
		}
		for (var o in t) wr(e[r], o, t[o]);
	}
}
function Zt(e) {
	for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
		t[o - 1] = arguments[o];
	return typeof e == 'function'
		? ze.apply(void 0, [Ee, e].concat(t))
		: ze.apply(
				void 0,
				[
					function () {
						return qt(Ee(), e);
					}
				].concat(t)
			);
}
var Dt = ze(Ee),
	Xt = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 },
	xr = (e) => e || void 0,
	pe = (...e) => xr(fr(e).filter(Boolean).join(' ')),
	Ae = null,
	ve = {},
	Re = !1,
	fe =
		(...e) =>
		(r) =>
			r.twMerge ? ((!Ae || Re) && ((Re = !1), (Ae = F(ve) ? Dt : Zt(ve))), xr(Ae(pe(e)))) : pe(e),
	Je = (e, r) => {
		for (let t in r) e.hasOwnProperty(t) ? (e[t] = pe(e[t], r[t])) : (e[t] = r[t]);
		return e;
	},
	Qt = (e, r) => {
		let {
				extend: t = null,
				slots: o = {},
				variants: s = {},
				compoundVariants: n = [],
				compoundSlots: i = [],
				defaultVariants: a = {}
			} = e,
			l = { ...Xt, ...r },
			f =
				t != null && t.base ? pe(t.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base,
			c = t != null && t.variants && !F(t.variants) ? br(s, t.variants) : s,
			d =
				t != null && t.defaultVariants && !F(t.defaultVariants)
					? { ...t.defaultVariants, ...a }
					: a;
		!F(l.twMergeConfig) && !wt(l.twMergeConfig, ve) && ((Re = !0), (ve = l.twMergeConfig));
		let p = F(t == null ? void 0 : t.slots),
			S = F(o)
				? {}
				: { base: pe(e == null ? void 0 : e.base, p && (t == null ? void 0 : t.base)), ...o },
			b = p
				? S
				: Je(
						{ ...(t == null ? void 0 : t.slots) },
						F(S) ? { base: e == null ? void 0 : e.base } : S
					),
			v = (m) => {
				if (F(c) && F(o) && p)
					return fe(f, m == null ? void 0 : m.class, m == null ? void 0 : m.className)(l);
				if (n && !Array.isArray(n))
					throw new TypeError(
						`The "compoundVariants" prop must be an array. Received: ${typeof n}`
					);
				if (i && !Array.isArray(i))
					throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof i}`);
				let E = (u, w, h = [], _) => {
						let x = h;
						if (typeof w == 'string')
							x = x.concat(
								Ue(w)
									.split(' ')
									.map((C) => `${u}:${C}`)
							);
						else if (Array.isArray(w)) x = x.concat(w.reduce((C, z) => C.concat(`${u}:${z}`), []));
						else if (typeof w == 'object' && typeof _ == 'string') {
							for (let C in w)
								if (w.hasOwnProperty(C) && C === _) {
									let z = w[C];
									if (z && typeof z == 'string') {
										let M = Ue(z);
										x[_]
											? (x[_] = x[_].concat(M.split(' ').map((P) => `${u}:${P}`)))
											: (x[_] = M.split(' ').map((P) => `${u}:${P}`));
									} else
										Array.isArray(z) &&
											z.length > 0 &&
											(x[_] = z.reduce((M, P) => M.concat(`${u}:${P}`), []));
								}
						}
						return x;
					},
					N = (u, w = c, h = null, _ = null) => {
						var x;
						let C = w[u];
						if (!C || F(C)) return null;
						let z = (x = _ == null ? void 0 : _[u]) != null ? x : m == null ? void 0 : m[u];
						if (z === null) return null;
						let M = Ve(z),
							P =
								(Array.isArray(l.responsiveVariants) && l.responsiveVariants.length > 0) ||
								l.responsiveVariants === !0,
							T = d == null ? void 0 : d[u],
							W = [];
						if (typeof M == 'object' && P)
							for (let [we, We] of Object.entries(M)) {
								let Sr = C[We];
								if (we === 'initial') {
									T = We;
									continue;
								}
								(Array.isArray(l.responsiveVariants) && !l.responsiveVariants.includes(we)) ||
									(W = E(we, Sr, W, h));
							}
						let I = C[M] || C[Ve(T)];
						return typeof W == 'object' && typeof h == 'string' && W[h]
							? Je(W, I)
							: W.length > 0
								? (W.push(I), W)
								: I;
					},
					j = () => (c ? Object.keys(c).map((u) => N(u, c)) : null),
					V = (u, w) => {
						if (!c || typeof c != 'object') return null;
						let h = new Array();
						for (let _ in c) {
							let x = N(_, c, u, w),
								C = u === 'base' && typeof x == 'string' ? x : x && x[u];
							C && (h[h.length] = C);
						}
						return h;
					},
					H = {};
				for (let u in m) m[u] !== void 0 && (H[u] = m[u]);
				let K = (u, w) => {
						var h;
						let _ =
							typeof (m == null ? void 0 : m[u]) == 'object'
								? { [u]: (h = m[u]) == null ? void 0 : h.initial }
								: {};
						return { ...d, ...H, ..._, ...w };
					},
					q = (u = [], w) => {
						let h = [];
						for (let { class: _, className: x, ...C } of u) {
							let z = !0;
							for (let [M, P] of Object.entries(C)) {
								let T = K(M, w);
								if (Array.isArray(P)) {
									if (!P.includes(T[M])) {
										z = !1;
										break;
									}
								} else if (T[M] !== P) {
									z = !1;
									break;
								}
							}
							z && (_ && h.push(_), x && h.push(x));
						}
						return h;
					},
					g = (u) => {
						let w = q(n, u),
							h = q(t == null ? void 0 : t.compoundVariants, u);
						return pr(h, w);
					},
					J = (u) => {
						let w = g(u);
						if (!Array.isArray(w)) return w;
						let h = {};
						for (let _ of w)
							if ((typeof _ == 'string' && (h.base = fe(h.base, _)(l)), typeof _ == 'object'))
								for (let [x, C] of Object.entries(_)) h[x] = fe(h[x], C)(l);
						return h;
					},
					Y = (u) => {
						if (i.length < 1) return null;
						let w = {};
						for (let { slots: h = [], class: _, className: x, ...C } of i) {
							if (!F(C)) {
								let z = !0;
								for (let M of Object.keys(C)) {
									let P = K(M, u)[M];
									if (P === void 0 || (Array.isArray(C[M]) ? !C[M].includes(P) : C[M] !== P)) {
										z = !1;
										break;
									}
								}
								if (!z) continue;
							}
							for (let z of h) (w[z] = w[z] || []), w[z].push([_, x]);
						}
						return w;
					};
				if (!F(o) || !p) {
					let u = {};
					if (typeof b == 'object' && !F(b))
						for (let w of Object.keys(b))
							u[w] = (h) => {
								var _, x;
								return fe(
									b[w],
									V(w, h),
									((_ = J(h)) != null ? _ : [])[w],
									((x = Y(h)) != null ? x : [])[w],
									h == null ? void 0 : h.class,
									h == null ? void 0 : h.className
								)(l);
							};
					return u;
				}
				return fe(f, j(), g(), m == null ? void 0 : m.class, m == null ? void 0 : m.className)(l);
			},
			A = () => {
				if (!(!c || typeof c != 'object')) return Object.keys(c);
			};
		return (
			(v.variantKeys = A()),
			(v.extend = t),
			(v.base = f),
			(v.slots = b),
			(v.variants = c),
			(v.defaultVariants = d),
			(v.compoundSlots = i),
			(v.compoundVariants = n),
			v
		);
	};
function $t(e) {
	return Object.keys(e).reduce((r, t) => (e[t] === void 0 ? r : r + `${t}:${e[t]};`), '');
}
function zo(e) {
	return e ? !0 : void 0;
}
const Mo = {
		type: 'hidden',
		'aria-hidden': !0,
		hidden: !0,
		tabIndex: -1,
		style: $t({
			position: 'absolute',
			opacity: 0,
			'pointer-events': 'none',
			margin: 0,
			transform: 'translateX(-100%)'
		})
	},
	Eo = typeof document < 'u',
	Ar = (e) => typeof e == 'function';
function Ro(e) {
	return e instanceof Element;
}
function kr(e) {
	return e instanceof HTMLElement;
}
function Go(e) {
	return e instanceof HTMLInputElement;
}
function Po(e) {
	return e instanceof HTMLLabelElement;
}
function To(e) {
	return e instanceof HTMLButtonElement;
}
function Io(e) {
	const r = e.getAttribute('aria-disabled'),
		t = e.getAttribute('disabled'),
		o = e.hasAttribute('data-disabled');
	return !!(r === 'true' || t !== null || o);
}
function jo(e) {
	return e.pointerType === 'touch';
}
function Oo(e) {
	return e.button === 0 && e.ctrlKey === !1 && e.metaKey === !1;
}
function eo(e) {
	return e !== null && typeof e == 'object';
}
function ro(e) {
	return eo(e) && 'subscribe' in e;
}
function to(...e) {
	return (...r) => {
		for (const t of e) typeof t == 'function' && t(...r);
	};
}
function oo() {}
function _r(e, r, t, o) {
	const s = Array.isArray(r) ? r : [r];
	return (
		s.forEach((n) => e.addEventListener(n, t, o)),
		() => {
			s.forEach((n) => e.removeEventListener(n, t, o));
		}
	);
}
function Lo(e, r, t, o) {
	const s = Array.isArray(r) ? r : [r];
	if (typeof t == 'function') {
		const n = so((i) => t(i));
		return (
			s.forEach((i) => e.addEventListener(i, n, o)),
			() => {
				s.forEach((i) => e.removeEventListener(i, n, o));
			}
		);
	}
	return () => void 0;
}
function no(e) {
	const r = e.currentTarget;
	if (!kr(r)) return null;
	const t = new CustomEvent(`m-${e.type}`, { detail: { originalEvent: e }, cancelable: !0 });
	return r.dispatchEvent(t), t;
}
function so(e) {
	return (r) => {
		const t = no(r);
		if (!(t != null && t.defaultPrevented)) return e(r);
	};
}
const O = {
		ALT: 'Alt',
		ARROW_DOWN: 'ArrowDown',
		ARROW_LEFT: 'ArrowLeft',
		ARROW_RIGHT: 'ArrowRight',
		ARROW_UP: 'ArrowUp',
		BACKSPACE: 'Backspace',
		CAPS_LOCK: 'CapsLock',
		CONTROL: 'Control',
		END: 'End',
		ENTER: 'Enter',
		ESCAPE: 'Escape',
		F1: 'F1',
		F10: 'F10',
		F11: 'F11',
		F12: 'F12',
		F2: 'F2',
		F3: 'F3',
		F4: 'F4',
		F5: 'F5',
		F6: 'F6',
		F7: 'F7',
		F8: 'F8',
		F9: 'F9',
		HOME: 'Home',
		META: 'Meta',
		PAGE_DOWN: 'PageDown',
		PAGE_UP: 'PageUp',
		SHIFT: 'Shift',
		SPACE: ' ',
		TAB: 'Tab'
	},
	io = [O.ARROW_DOWN, O.PAGE_UP, O.HOME],
	ao = [O.ARROW_UP, O.PAGE_DOWN, O.END],
	No = [...io, ...ao],
	Wo = [O.ENTER, O.SPACE],
	lo = (e = 'ltr', r = 'horizontal') =>
		({ horizontal: e === 'rtl' ? O.ARROW_LEFT : O.ARROW_RIGHT, vertical: O.ARROW_DOWN })[r],
	co = (e = 'ltr', r = 'horizontal') =>
		({ horizontal: e === 'rtl' ? O.ARROW_RIGHT : O.ARROW_LEFT, vertical: O.ARROW_UP })[r],
	Fo = (e = 'ltr', r = 'horizontal') => ({ nextKey: lo(e, r), prevKey: co(e, r) }),
	Bo = (e) => {
		try {
			Mr(e);
		} catch {
			return e();
		}
	},
	Cr = (e) => {
		try {
			zr(e);
		} catch {
			return e();
		}
	};
function uo(e, r) {
	let t = [];
	const o = (a) => {
			t.push(a);
		},
		s = () => {
			t.forEach((a) => a()), (t = []);
		},
		n = Nr(e, (a) => (s(), r(a, o)));
	return (
		Cr(s),
		{
			...n,
			subscribe: (...a) => {
				const l = n.subscribe(...a);
				return () => {
					l(), s();
				};
			}
		}
	);
}
function fo(e, r) {
	const t = uo(e, (o, s) => ({ stores: o, onUnsubscribe: s })).subscribe(
		({ stores: o, onUnsubscribe: s }) => {
			const n = r(o);
			n && s(n);
		}
	);
	return Cr(t), t;
}
const po = je(void 0, (e) => {
		function r(o) {
			e(o), e(void 0);
		}
		return _r(document, 'pointerup', r, { passive: !1, capture: !0 });
	}),
	Vo = (e, r = {}) => {
		let t = { enabled: !0, ...r };
		function o() {
			return typeof t.enabled == 'boolean' ? t.enabled : Xe(t.enabled);
		}
		const s = po.subscribe((n) => {
			var a;
			if (!o() || !n || n.target === e) return;
			const i = n.composedPath();
			if (!i.includes(e)) {
				if (t.ignore) {
					if (Ar(t.ignore)) {
						if (t.ignore(n)) return;
					} else if (
						Array.isArray(t.ignore) &&
						t.ignore.length > 0 &&
						t.ignore.some((l) => l && (n.target === l || i.includes(l)))
					)
						return;
				}
				(a = t.handler) == null || a.call(t, n);
			}
		});
		return {
			update(n) {
				t = { ...t, ...n };
			},
			destroy() {
				s();
			}
		};
	},
	bo = je(void 0, (e) => {
		function r(o) {
			o && o.key === O.ESCAPE && e(o), e(void 0);
		}
		return _r(document, 'keydown', r, { passive: !1 });
	}),
	Uo = (e, r = {}) => {
		let t = oo;
		function o(s = {}) {
			t();
			const n = { enabled: !0, ...s },
				i = ro(n.enabled) ? n.enabled : je(n.enabled);
			t = to(
				bo.subscribe((a) => {
					var f;
					if (!a || !Xe(i)) return;
					const l = a.target;
					if (!(!kr(l) || l.closest('[data-escapee]') !== e)) {
						if ((a.preventDefault(), n.ignore)) {
							if (Ar(n.ignore)) {
								if (n.ignore(a)) return;
							} else if (
								Array.isArray(n.ignore) &&
								n.ignore.length > 0 &&
								n.ignore.some((c) => c && l === c)
							)
								return;
						}
						(f = n.handler) == null || f.call(n, a);
					}
				}),
				fo(i, (a) => {
					a ? (e.dataset.escapee = '') : delete e.dataset.escapee;
				})
			);
		}
		return (
			o(r),
			{
				update: o,
				destroy() {
					e.removeAttribute('data-escapee'), t();
				}
			}
		);
	};
function go(e, r) {
	const t = [];
	return (
		r.builders.forEach((o) => {
			const s = o.action(e);
			s && t.push(s);
		}),
		{
			destroy: () => {
				t.forEach((o) => {
					o.destroy && o.destroy();
				});
			}
		}
	);
}
function Ye(e) {
	const r = {};
	return (
		e.forEach((t) => {
			Object.keys(t).forEach((o) => {
				o !== 'action' && (r[o] = t[o]);
			});
		}),
		r
	);
}
function mo(e) {
	let r = e[1] ? 'a' : 'button',
		t,
		o,
		s = (e[1] ? 'a' : 'button') && ke(e);
	return {
		c() {
			s && s.c(), (t = ie());
		},
		l(n) {
			s && s.l(n), (t = ie());
		},
		m(n, i) {
			s && s.m(n, i), be(n, t, i), (o = !0);
		},
		p(n, i) {
			n[1],
				r
					? ye(r, n[1] ? 'a' : 'button')
						? (s.d(1), (s = ke(n)), (r = n[1] ? 'a' : 'button'), s.c(), s.m(t.parentNode, t))
						: s.p(n, i)
					: ((s = ke(n)), (r = n[1] ? 'a' : 'button'), s.c(), s.m(t.parentNode, t));
		},
		i(n) {
			o || (ee(s, n), (o = !0));
		},
		o(n) {
			$(s, n), (o = !1);
		},
		d(n) {
			n && te(t), s && s.d(n);
		}
	};
}
function ho(e) {
	let r = e[1] ? 'a' : 'button',
		t,
		o,
		s = (e[1] ? 'a' : 'button') && _e(e);
	return {
		c() {
			s && s.c(), (t = ie());
		},
		l(n) {
			s && s.l(n), (t = ie());
		},
		m(n, i) {
			s && s.m(n, i), be(n, t, i), (o = !0);
		},
		p(n, i) {
			n[1],
				r
					? ye(r, n[1] ? 'a' : 'button')
						? (s.d(1), (s = _e(n)), (r = n[1] ? 'a' : 'button'), s.c(), s.m(t.parentNode, t))
						: s.p(n, i)
					: ((s = _e(n)), (r = n[1] ? 'a' : 'button'), s.c(), s.m(t.parentNode, t));
		},
		i(n) {
			o || (ee(s, n), (o = !0));
		},
		o(n) {
			$(s, n), (o = !1);
		},
		d(n) {
			n && te(t), s && s.d(n);
		}
	};
}
function ke(e) {
	let r, t, o, s, n;
	const i = e[7].default,
		a = Ge(i, e, e[6], null);
	let l = [{ type: (t = e[1] ? void 0 : e[2]) }, { href: e[1] }, { tabindex: '0' }, e[5], e[4]],
		f = {};
	for (let c = 0; c < l.length; c += 1) f = oe(f, l[c]);
	return {
		c() {
			(r = tr(e[1] ? 'a' : 'button')), a && a.c(), this.h();
		},
		l(c) {
			r = er(c, ((e[1] ? 'a' : 'button') || 'null').toUpperCase(), {
				type: !0,
				href: !0,
				tabindex: !0
			});
			var d = rr(r);
			a && a.l(d), d.forEach(te), this.h();
		},
		h() {
			he(e[1] ? 'a' : 'button')(r, f);
		},
		m(c, d) {
			be(c, r, d),
				a && a.m(r, null),
				(o = !0),
				s ||
					((n = [
						B(r, 'click', e[14]),
						B(r, 'change', e[15]),
						B(r, 'keydown', e[16]),
						B(r, 'keyup', e[17]),
						B(r, 'mouseenter', e[18]),
						B(r, 'mouseleave', e[19])
					]),
					(s = !0));
		},
		p(c, d) {
			a && a.p && (!o || d & 64) && Pe(a, i, c, c[6], o ? Ie(i, c[6], d, null) : Te(c[6]), null),
				he(c[1] ? 'a' : 'button')(
					r,
					(f = Oe(l, [
						(!o || (d & 6 && t !== (t = c[1] ? void 0 : c[2]))) && { type: t },
						(!o || d & 2) && { href: c[1] },
						{ tabindex: '0' },
						d & 32 && c[5],
						c[4]
					]))
				);
		},
		i(c) {
			o || (ee(a, c), (o = !0));
		},
		o(c) {
			$(a, c), (o = !1);
		},
		d(c) {
			c && te(r), a && a.d(c), (s = !1), $e(n);
		}
	};
}
function _e(e) {
	let r, t, o, s, n, i;
	const a = e[7].default,
		l = Ge(a, e, e[6], null);
	let f = [
			{ type: (t = e[1] ? void 0 : e[2]) },
			{ href: e[1] },
			{ tabindex: '0' },
			Ye(e[3]),
			e[5],
			e[4]
		],
		c = {};
	for (let d = 0; d < f.length; d += 1) c = oe(c, f[d]);
	return {
		c() {
			(r = tr(e[1] ? 'a' : 'button')), l && l.c(), this.h();
		},
		l(d) {
			r = er(d, ((e[1] ? 'a' : 'button') || 'null').toUpperCase(), {
				type: !0,
				href: !0,
				tabindex: !0
			});
			var p = rr(r);
			l && l.l(p), p.forEach(te), this.h();
		},
		h() {
			he(e[1] ? 'a' : 'button')(r, c);
		},
		m(d, p) {
			be(d, r, p),
				l && l.m(r, null),
				e[20](r),
				(s = !0),
				n ||
					((i = [
						B(r, 'click', e[8]),
						B(r, 'change', e[9]),
						B(r, 'keydown', e[10]),
						B(r, 'keyup', e[11]),
						B(r, 'mouseenter', e[12]),
						B(r, 'mouseleave', e[13]),
						Rr((o = go.call(null, r, { builders: e[3] })))
					]),
					(n = !0));
		},
		p(d, p) {
			l && l.p && (!s || p & 64) && Pe(l, a, d, d[6], s ? Ie(a, d[6], p, null) : Te(d[6]), null),
				he(d[1] ? 'a' : 'button')(
					r,
					(c = Oe(f, [
						(!s || (p & 6 && t !== (t = d[1] ? void 0 : d[2]))) && { type: t },
						(!s || p & 2) && { href: d[1] },
						{ tabindex: '0' },
						p & 8 && Ye(d[3]),
						p & 32 && d[5],
						d[4]
					]))
				),
				o && Gr(o.update) && p & 8 && o.update.call(null, { builders: d[3] });
		},
		i(d) {
			s || (ee(l, d), (s = !0));
		},
		o(d) {
			$(l, d), (s = !1);
		},
		d(d) {
			d && te(r), l && l.d(d), e[20](null), (n = !1), $e(i);
		}
	};
}
function vo(e) {
	let r, t, o, s;
	const n = [ho, mo],
		i = [];
	function a(l, f) {
		return l[3] && l[3].length ? 0 : 1;
	}
	return (
		(r = a(e)),
		(t = i[r] = n[r](e)),
		{
			c() {
				t.c(), (o = ie());
			},
			l(l) {
				t.l(l), (o = ie());
			},
			m(l, f) {
				i[r].m(l, f), be(l, o, f), (s = !0);
			},
			p(l, [f]) {
				let c = r;
				(r = a(l)),
					r === c
						? i[r].p(l, f)
						: (Pr(),
							$(i[c], 1, 1, () => {
								i[c] = null;
							}),
							Tr(),
							(t = i[r]),
							t ? t.p(l, f) : ((t = i[r] = n[r](l)), t.c()),
							ee(t, 1),
							t.m(o.parentNode, o));
			},
			i(l) {
				s || (ee(t), (s = !0));
			},
			o(l) {
				$(t), (s = !1);
			},
			d(l) {
				l && te(o), i[r].d(l);
			}
		}
	);
}
function yo(e, r, t) {
	const o = ['href', 'type', 'builders', 'el'];
	let s = me(r, o),
		{ $$slots: n = {}, $$scope: i } = r,
		{ href: a = void 0 } = r,
		{ type: l = void 0 } = r,
		{ builders: f = [] } = r,
		{ el: c = void 0 } = r;
	const d = { 'data-button-root': '' };
	function p(g) {
		L.call(this, e, g);
	}
	function S(g) {
		L.call(this, e, g);
	}
	function b(g) {
		L.call(this, e, g);
	}
	function v(g) {
		L.call(this, e, g);
	}
	function A(g) {
		L.call(this, e, g);
	}
	function m(g) {
		L.call(this, e, g);
	}
	function E(g) {
		L.call(this, e, g);
	}
	function N(g) {
		L.call(this, e, g);
	}
	function j(g) {
		L.call(this, e, g);
	}
	function V(g) {
		L.call(this, e, g);
	}
	function H(g) {
		L.call(this, e, g);
	}
	function K(g) {
		L.call(this, e, g);
	}
	function q(g) {
		Er[g ? 'unshift' : 'push'](() => {
			(c = g), t(0, c);
		});
	}
	return (
		(e.$$set = (g) => {
			(r = oe(oe({}, r), Qe(g))),
				t(5, (s = me(r, o))),
				'href' in g && t(1, (a = g.href)),
				'type' in g && t(2, (l = g.type)),
				'builders' in g && t(3, (f = g.builders)),
				'el' in g && t(0, (c = g.el)),
				'$$scope' in g && t(6, (i = g.$$scope));
		}),
		[c, a, l, f, d, s, i, n, p, S, b, v, A, m, E, N, j, V, H, K, q]
	);
}
let wo = class extends or {
	constructor(r) {
		super(), nr(this, r, yo, vo, ye, { href: 1, type: 2, builders: 3, el: 0 });
	}
};
function Ze(...e) {
	return yt(Fr(e));
}
const Ko = (e, r = { y: -8, x: 0, start: 0.95, duration: 150 }) => {
	const t = getComputedStyle(e),
		o = t.transform === 'none' ? '' : t.transform,
		s = (i, a, l) => {
			const [f, c] = a,
				[d, p] = l;
			return ((i - f) / (c - f)) * (p - d) + d;
		},
		n = (i) =>
			Object.keys(i).reduce((a, l) => (i[l] === void 0 ? a : a + l + ':' + i[l] + ';'), '');
	return {
		duration: r.duration ?? 200,
		delay: 0,
		css: (i) => {
			const a = s(i, [0, 1], [r.y ?? 5, 0]),
				l = s(i, [0, 1], [r.x ?? 0, 0]),
				f = s(i, [0, 1], [r.start ?? 0.95, 1]);
			return n({
				transform: o + 'translate3d(' + l + 'px, ' + a + 'px, 0) scale(' + f + ')',
				opacity: i
			});
		},
		easing: Br
	};
};
function xo(e) {
	let r;
	const t = e[6].default,
		o = Ge(t, e, e[9], null);
	return {
		c() {
			o && o.c();
		},
		l(s) {
			o && o.l(s);
		},
		m(s, n) {
			o && o.m(s, n), (r = !0);
		},
		p(s, n) {
			o && o.p && (!r || n & 512) && Pe(o, t, s, s[9], r ? Ie(t, s[9], n, null) : Te(s[9]), null);
		},
		i(s) {
			r || (ee(o, s), (r = !0));
		},
		o(s) {
			$(o, s), (r = !1);
		},
		d(s) {
			o && o.d(s);
		}
	};
}
function Ao(e) {
	let r, t;
	const o = [
		{ builders: e[4] },
		{ class: Ze(De({ variant: e[1], size: e[2], scale: e[3], className: e[0] })) },
		{ type: 'button' },
		e[5]
	];
	let s = { $$slots: { default: [xo] }, $$scope: { ctx: e } };
	for (let n = 0; n < o.length; n += 1) s = oe(s, o[n]);
	return (
		(r = new wo({ props: s })),
		r.$on('click', e[7]),
		r.$on('keydown', e[8]),
		{
			c() {
				Lr(r.$$.fragment);
			},
			l(n) {
				Or(r.$$.fragment, n);
			},
			m(n, i) {
				jr(r, n, i), (t = !0);
			},
			p(n, [i]) {
				const a =
					i & 63
						? Oe(o, [
								i & 16 && { builders: n[4] },
								i & 15 && {
									class: Ze(De({ variant: n[1], size: n[2], scale: n[3], className: n[0] }))
								},
								o[2],
								i & 32 && Wr(n[5])
							])
						: {};
				i & 512 && (a.$$scope = { dirty: i, ctx: n }), r.$set(a);
			},
			i(n) {
				t || (ee(r.$$.fragment, n), (t = !0));
			},
			o(n) {
				$(r.$$.fragment, n), (t = !1);
			},
			d(n) {
				Ir(r, n);
			}
		}
	);
}
function ko(e, r, t) {
	const o = ['class', 'variant', 'size', 'scale', 'builders'];
	let s = me(r, o),
		{ $$slots: n = {}, $$scope: i } = r,
		{ class: a = void 0 } = r,
		{ variant: l = 'default' } = r,
		{ size: f = 'default' } = r,
		{ scale: c = void 0 } = r,
		{ builders: d = [] } = r;
	function p(b) {
		L.call(this, e, b);
	}
	function S(b) {
		L.call(this, e, b);
	}
	return (
		(e.$$set = (b) => {
			(r = oe(oe({}, r), Qe(b))),
				t(5, (s = me(r, o))),
				'class' in b && t(0, (a = b.class)),
				'variant' in b && t(1, (l = b.variant)),
				'size' in b && t(2, (f = b.size)),
				'scale' in b && t(3, (c = b.scale)),
				'builders' in b && t(4, (d = b.builders)),
				'$$scope' in b && t(9, (i = b.$$scope));
		}),
		[a, l, f, c, d, s, n, p, S, i]
	);
}
class qo extends or {
	constructor(r) {
		super(), nr(this, r, ko, Ao, ye, { class: 0, variant: 1, size: 2, scale: 3, builders: 4 });
	}
}
const De = Qt({
	base: 'inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
	variants: {
		variant: {
			default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
			destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
			outline:
				'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground',
			secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
			ghost: 'hover:bg-accent hover:text-accent-foreground',
			link: 'text-primary underline-offset-4 hover:underline'
		},
		size: {
			default: 'h-9 px-4 py-2',
			sm: 'h-8 rounded-md px-3 text-xs',
			lg: 'h-10 rounded-md px-8',
			icon: 'h-9 w-9'
		},
		scale: {
			sm: 'transition-transform active:scale-[98%]',
			md: 'transition-transform active:scale-95'
		}
	},
	defaultVariants: { variant: 'default', size: 'default' }
});
export {
	Ro as A,
	qo as B,
	Po as C,
	eo as D,
	To as E,
	No as F,
	Go as G,
	Mo as H,
	Fo as I,
	Qt as J,
	Wo as S,
	Wr as a,
	Lo as b,
	Ze as c,
	zo as d,
	Br as e,
	Ko as f,
	Oe as g,
	uo as h,
	fo as i,
	kr as j,
	to as k,
	O as l,
	Io as m,
	oo as n,
	Bo as o,
	_r as p,
	Eo as q,
	Oo as r,
	$t as s,
	Ar as t,
	Vo as u,
	Uo as v,
	De as w,
	yt as x,
	Fr as y,
	jo as z
};
