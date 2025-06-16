import { d as r, e, a as s, b as p, g as w, m, c } from './DZQ4DMzf.js';
import { l as i } from './wdwkOUVI.js';
const F = async (t) => {
		const a = await r.select().from(e).where(s(e.path, t));
		let l = [];
		a.length === 0
			? (l = await r
					.select()
					.from(e)
					.where(s(e.collectionPath, i(c))))
			: (l = await r
					.select()
					.from(e)
					.where(p(s(e.parentPath, t), s(e.collectionPath, i(c)))));
		const o = w(l, 'Untitled');
		return (
			await r.insert(e).values({
				name: o,
				path: `${t}/${o}`.replace('//', '/'),
				parentPath: t,
				collectionPath: i(c),
				isFolder: !0
			}),
			`${t}/${o}`.replace('//', '/')
		);
	},
	y = async (t, a = !1) => {
		if (!a) {
			let l = await r.select().from(e).where(s(e.parentPath, t));
			if (((l = l.filter((o) => o.name !== '.DS_Store')), l.length > 0))
				throw new Error('Folder is not empty');
		}
		await r.delete(e).where(s(e.path, t));
	},
	u = async (t, a) => {
		await r
			.update(e)
			.set({ name: a, path: `${t.split('/').slice(0, -1).join('/')}/${a}` })
			.where(s(e.path, t));
	},
	f = async (t, a) => {
		const l = await r.select().from(e).where(s(e.parentPath, a)),
			o = t.split('/').pop();
		if (l.some((n) => n.name === o && n.isFolder)) throw new Error('Name conflict');
		const h = await r.select().from(e).where(s(e.parentPath, t));
		for (const n of h) n.isFolder ? await f(n.path, `${a}/${o}`) : await m(n.path, `${a}/${o}`);
		await r
			.update(e)
			.set({ path: `${a}/${o}`, parentPath: a })
			.where(s(e.path, t));
	};
export { F as c, y as d, f as m, u as r };
