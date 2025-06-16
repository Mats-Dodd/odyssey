var $a = Object.defineProperty;
var Ba = (e, t, I) =>
	t in e ? $a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: I }) : (e[t] = I);
var Ar = (e, t, I) => Ba(e, typeof t != 'symbol' ? t + '' : t, I);
import {
	a as transition_in,
	t as transition_out,
	S as SvelteComponent,
	i as init,
	g as group_outros,
	e as check_outros,
	h as create_bidirectional_transition,
	j as create_out_transition,
	k as create_in_transition,
	d as destroy_component,
	m as mount_component,
	c as claim_component,
	b as create_component
} from './ZuwjM_kn.js';
import {
	v as run_all,
	p as get_store_value,
	O as tick,
	ac as setContext,
	ad as getContext,
	s as safe_not_equal,
	l as create_slot,
	u as update_slot_base,
	m as get_all_dirty_from_scope,
	o as get_slot_changes,
	k as component_subscribe,
	d as detach,
	i as insert_hydration,
	C as empty,
	G as compute_rest_props,
	D as assign,
	H as exclude_internal_props,
	$ as add_render_callback,
	E as set_attributes,
	N as action_destroyer,
	w as listen,
	c as claim_element,
	e as children,
	h as element,
	y as binding_callbacks,
	n as noop$1,
	S as set_svg_attributes,
	T as claim_svg_element,
	V as claim_html_tag,
	U as svg_element,
	W as HtmlTagHydration,
	q as attr,
	g as claim_space,
	j as space,
	a as set_data,
	f as claim_text,
	t as text$1,
	b as append_hydration
} from './CZvU1ekx.js';
import {
	x as twMerge,
	y as clsx,
	d as isHTMLElement$1,
	n as noop,
	l as executeCallbacks,
	q as addEventListener$1,
	b as addMeltEventListener,
	k as effect,
	s as styleToString,
	z as isTouch,
	i as isBrowser$1,
	m as kbd,
	g as get_spread_update,
	c as cn$2,
	a as get_spread_object,
	h as flyAndScale
} from './CTLOy2q2.js';
import { w as writable, d as derived, a as readable } from './DOOmkYa6.js';
import {
	b as builder,
	d as createElHelpers,
	c as createBitAttrs,
	a as createDispatcher
} from './Wn8UfayS.js';
import { _ as __vitePreload } from './C1FmrZbK.js';
function ensure_array_like(e) {
	return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function destroy_block(e, t) {
	e.d(1), t.delete(e.key);
}
function outro_and_destroy_block(e, t) {
	transition_out(e, 1, 1, () => {
		t.delete(e.key);
	});
}
function update_keyed_each(e, t, I, B, tr, rr, ir, lr, dr, mr, _r, fr) {
	let hr = e.length,
		Mr = rr.length,
		gr = hr;
	const yr = {};
	for (; gr--; ) yr[e[gr].key] = gr;
	const xr = [],
		vr = new Map(),
		Sr = new Map(),
		wr = [];
	for (gr = Mr; gr--; ) {
		const kr = fr(tr, rr, gr),
			Or = I(kr);
		let Lr = ir.get(Or);
		Lr ? wr.push(() => Lr.p(kr, t)) : ((Lr = mr(Or, kr)), Lr.c()),
			vr.set(Or, (xr[gr] = Lr)),
			Or in yr && Sr.set(Or, Math.abs(gr - yr[Or]));
	}
	const br = new Set(),
		Fr = new Set();
	function Ir(kr) {
		transition_in(kr, 1), kr.m(lr, _r), ir.set(kr.key, kr), (_r = kr.first), Mr--;
	}
	for (; hr && Mr; ) {
		const kr = xr[Mr - 1],
			Or = e[hr - 1],
			Lr = kr.key,
			Gr = Or.key;
		kr === Or
			? ((_r = kr.first), hr--, Mr--)
			: vr.has(Gr)
				? !ir.has(Lr) || br.has(Lr)
					? Ir(kr)
					: Fr.has(Gr)
						? hr--
						: Sr.get(Lr) > Sr.get(Gr)
							? (Fr.add(Lr), Ir(kr))
							: (br.add(Gr), hr--)
				: (dr(Or, ir), hr--);
	}
	for (; hr--; ) {
		const kr = e[hr];
		vr.has(kr.key) || dr(kr, ir);
	}
	for (; Mr; ) Ir(xr[Mr - 1]);
	return run_all(wr), xr;
}
const entityKind = Symbol.for('drizzle:entityKind');
function is(e, t) {
	if (!e || typeof e != 'object') return !1;
	if (e instanceof t) return !0;
	if (!Object.prototype.hasOwnProperty.call(t, entityKind))
		throw new Error(
			`Class "${t.name ?? '<unknown>'}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`
		);
	let I = e.constructor;
	if (I)
		for (; I; ) {
			if (entityKind in I && I[entityKind] === t[entityKind]) return !0;
			I = Object.getPrototypeOf(I);
		}
	return !1;
}
var Ss;
Ss = entityKind;
class ConsoleLogWriter {
	write(t) {
		console.log(t);
	}
}
Ar(ConsoleLogWriter, Ss, 'ConsoleLogWriter');
var Cs;
Cs = entityKind;
class DefaultLogger {
	constructor(t) {
		Ar(this, 'writer');
		this.writer = (t == null ? void 0 : t.writer) ?? new ConsoleLogWriter();
	}
	logQuery(t, I) {
		const B = I.map((rr) => {
				try {
					return JSON.stringify(rr);
				} catch {
					return String(rr);
				}
			}),
			tr = B.length ? ` -- params: [${B.join(', ')}]` : '';
		this.writer.write(`Query: ${t}${tr}`);
	}
}
Ar(DefaultLogger, Cs, 'DefaultLogger');
var Es;
Es = entityKind;
class NoopLogger {
	logQuery() {}
}
Ar(NoopLogger, Es, 'NoopLogger');
var ys, xs;
(xs = entityKind), (ys = Symbol.toStringTag);
class QueryPromise {
	constructor() {
		Ar(this, ys, 'QueryPromise');
	}
	catch(t) {
		return this.then(void 0, t);
	}
	finally(t) {
		return this.then(
			(I) => (t == null || t(), I),
			(I) => {
				throw (t == null || t(), I);
			}
		);
	}
	then(t, I) {
		return this.execute().then(t, I);
	}
}
Ar(QueryPromise, xs, 'QueryPromise');
const TableName = Symbol.for('drizzle:Name'),
	Schema$1 = Symbol.for('drizzle:Schema'),
	Columns = Symbol.for('drizzle:Columns'),
	ExtraConfigColumns = Symbol.for('drizzle:ExtraConfigColumns'),
	OriginalName = Symbol.for('drizzle:OriginalName'),
	BaseName = Symbol.for('drizzle:BaseName'),
	IsAlias = Symbol.for('drizzle:IsAlias'),
	ExtraConfigBuilder = Symbol.for('drizzle:ExtraConfigBuilder'),
	IsDrizzleTable = Symbol.for('drizzle:IsDrizzleTable');
var bs, vs, As, ks, Ts, Ps, Fs, Is, Ls, Rs;
(Rs = entityKind),
	(Ls = TableName),
	(Is = OriginalName),
	(Fs = Schema$1),
	(Ps = Columns),
	(Ts = ExtraConfigColumns),
	(ks = BaseName),
	(As = IsAlias),
	(vs = IsDrizzleTable),
	(bs = ExtraConfigBuilder);
class Table {
	constructor(t, I, B) {
		Ar(this, Ls);
		Ar(this, Is);
		Ar(this, Fs);
		Ar(this, Ps);
		Ar(this, Ts);
		Ar(this, ks);
		Ar(this, As, !1);
		Ar(this, vs, !0);
		Ar(this, bs);
		(this[TableName] = this[OriginalName] = t), (this[Schema$1] = I), (this[BaseName] = B);
	}
}
Ar(Table, Rs, 'Table'),
	Ar(Table, 'Symbol', {
		Name: TableName,
		Schema: Schema$1,
		OriginalName,
		Columns,
		ExtraConfigColumns,
		BaseName,
		IsAlias,
		ExtraConfigBuilder
	});
function getTableName(e) {
	return e[TableName];
}
function getTableUniqueName(e) {
	return `${e[Schema$1] ?? 'public'}.${e[TableName]}`;
}
function iife(e, ...t) {
	return e(...t);
}
const tracer = {
	startActiveSpan(e, t) {
		return t();
	}
};
var qs;
qs = entityKind;
class Column {
	constructor(t, I) {
		Ar(this, 'name');
		Ar(this, 'primary');
		Ar(this, 'notNull');
		Ar(this, 'default');
		Ar(this, 'defaultFn');
		Ar(this, 'onUpdateFn');
		Ar(this, 'hasDefault');
		Ar(this, 'isUnique');
		Ar(this, 'uniqueName');
		Ar(this, 'uniqueType');
		Ar(this, 'dataType');
		Ar(this, 'columnType');
		Ar(this, 'enumValues');
		Ar(this, 'generated');
		Ar(this, 'generatedIdentity');
		Ar(this, 'config');
		(this.table = t),
			(this.config = I),
			(this.name = I.name),
			(this.notNull = I.notNull),
			(this.default = I.default),
			(this.defaultFn = I.defaultFn),
			(this.onUpdateFn = I.onUpdateFn),
			(this.hasDefault = I.hasDefault),
			(this.primary = I.primaryKey),
			(this.isUnique = I.isUnique),
			(this.uniqueName = I.uniqueName),
			(this.uniqueType = I.uniqueType),
			(this.dataType = I.dataType),
			(this.columnType = I.columnType),
			(this.generated = I.generated),
			(this.generatedIdentity = I.generatedIdentity);
	}
	mapFromDriverValue(t) {
		return t;
	}
	mapToDriverValue(t) {
		return t;
	}
	shouldDisableInsert() {
		return this.config.generated !== void 0 && this.config.generated.type !== 'byDefault';
	}
}
Ar(Column, qs, 'Column');
var Ns;
Ns = entityKind;
class ColumnBuilder {
	constructor(t, I, B) {
		Ar(this, 'config');
		Ar(this, '$default', this.$defaultFn);
		Ar(this, '$onUpdate', this.$onUpdateFn);
		this.config = {
			name: t,
			notNull: !1,
			default: void 0,
			hasDefault: !1,
			primaryKey: !1,
			isUnique: !1,
			uniqueName: void 0,
			uniqueType: void 0,
			dataType: I,
			columnType: B,
			generated: void 0
		};
	}
	$type() {
		return this;
	}
	notNull() {
		return (this.config.notNull = !0), this;
	}
	default(t) {
		return (this.config.default = t), (this.config.hasDefault = !0), this;
	}
	$defaultFn(t) {
		return (this.config.defaultFn = t), (this.config.hasDefault = !0), this;
	}
	$onUpdateFn(t) {
		return (this.config.onUpdateFn = t), (this.config.hasDefault = !0), this;
	}
	primaryKey() {
		return (this.config.primaryKey = !0), (this.config.notNull = !0), this;
	}
}
Ar(ColumnBuilder, Ns, 'ColumnBuilder');
const InlineForeignKeys = Symbol.for('drizzle:PgInlineForeignKeys');
var Os, Ds, zs, Us;
class PgTable extends ((Us = Table),
(zs = entityKind),
(Ds = InlineForeignKeys),
(Os = Table.Symbol.ExtraConfigBuilder),
Us) {
	constructor() {
		super(...arguments);
		Ar(this, Ds, []);
		Ar(this, Os);
	}
}
Ar(PgTable, zs, 'PgTable'),
	Ar(PgTable, 'Symbol', Object.assign({}, Table.Symbol, { InlineForeignKeys }));
function pgTableWithSchema(e, t, I, B, tr = e) {
	const rr = new PgTable(e, B, tr),
		ir = Object.fromEntries(
			Object.entries(t).map(([mr, _r]) => {
				const fr = _r,
					hr = fr.build(rr);
				return rr[InlineForeignKeys].push(...fr.buildForeignKeys(hr, rr)), [mr, hr];
			})
		),
		lr = Object.fromEntries(
			Object.entries(t).map(([mr, _r]) => {
				const hr = _r.buildExtraConfigColumn(rr);
				return [mr, hr];
			})
		),
		dr = Object.assign(rr, ir);
	return (dr[Table.Symbol.Columns] = ir), (dr[Table.Symbol.ExtraConfigColumns] = lr), dr;
}
const pgTable = (e, t, I) => pgTableWithSchema(e, t, I, void 0);
var $s;
$s = entityKind;
class ForeignKeyBuilder {
	constructor(t, I) {
		Ar(this, 'reference');
		Ar(this, '_onUpdate', 'no action');
		Ar(this, '_onDelete', 'no action');
		(this.reference = () => {
			const { name: B, columns: tr, foreignColumns: rr } = t();
			return { name: B, columns: tr, foreignTable: rr[0].table, foreignColumns: rr };
		}),
			I && ((this._onUpdate = I.onUpdate), (this._onDelete = I.onDelete));
	}
	onUpdate(t) {
		return (this._onUpdate = t === void 0 ? 'no action' : t), this;
	}
	onDelete(t) {
		return (this._onDelete = t === void 0 ? 'no action' : t), this;
	}
	build(t) {
		return new ForeignKey(t, this);
	}
}
Ar(ForeignKeyBuilder, $s, 'PgForeignKeyBuilder');
var Bs;
Bs = entityKind;
class ForeignKey {
	constructor(t, I) {
		Ar(this, 'reference');
		Ar(this, 'onUpdate');
		Ar(this, 'onDelete');
		(this.table = t),
			(this.reference = I.reference),
			(this.onUpdate = I._onUpdate),
			(this.onDelete = I._onDelete);
	}
	getName() {
		const { name: t, columns: I, foreignColumns: B } = this.reference(),
			tr = I.map((lr) => lr.name),
			rr = B.map((lr) => lr.name),
			ir = [this.table[PgTable.Symbol.Name], ...tr, B[0].table[PgTable.Symbol.Name], ...rr];
		return t ?? `${ir.join('_')}_fk`;
	}
}
Ar(ForeignKey, Bs, 'PgForeignKey');
function uniqueKeyName(e, t) {
	return `${e[PgTable.Symbol.Name]}_${t.join('_')}_unique`;
}
function parsePgArrayValue(e, t, I) {
	for (let B = t; B < e.length; B++) {
		const tr = e[B];
		if (tr === '\\') {
			B++;
			continue;
		}
		if (tr === '"') return [e.slice(t, B).replace(/\\/g, ''), B + 1];
		if (!I && (tr === ',' || tr === '}')) return [e.slice(t, B).replace(/\\/g, ''), B];
	}
	return [e.slice(t).replace(/\\/g, ''), e.length];
}
function parsePgNestedArray(e, t = 0) {
	const I = [];
	let B = t,
		tr = !1;
	for (; B < e.length; ) {
		const rr = e[B];
		if (rr === ',') {
			(tr || B === t) && I.push(''), (tr = !0), B++;
			continue;
		}
		if (((tr = !1), rr === '\\')) {
			B += 2;
			continue;
		}
		if (rr === '"') {
			const [dr, mr] = parsePgArrayValue(e, B + 1, !0);
			I.push(dr), (B = mr);
			continue;
		}
		if (rr === '}') return [I, B + 1];
		if (rr === '{') {
			const [dr, mr] = parsePgNestedArray(e, B + 1);
			I.push(dr), (B = mr);
			continue;
		}
		const [ir, lr] = parsePgArrayValue(e, B, !1);
		I.push(ir), (B = lr);
	}
	return [I, B];
}
function parsePgArray(e) {
	const [t] = parsePgNestedArray(e, 1);
	return t;
}
function makePgArray(e) {
	return `{${e.map((t) => (Array.isArray(t) ? makePgArray(t) : typeof t == 'string' ? `"${t.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"` : `${t}`)).join(',')}}`;
}
var Hs, Ws;
class PgColumnBuilder extends ((Ws = ColumnBuilder), (Hs = entityKind), Ws) {
	constructor() {
		super(...arguments);
		Ar(this, 'foreignKeyConfigs', []);
	}
	array(I) {
		return new PgArrayBuilder(this.config.name, this, I);
	}
	references(I, B = {}) {
		return this.foreignKeyConfigs.push({ ref: I, actions: B }), this;
	}
	unique(I, B) {
		return (
			(this.config.isUnique = !0),
			(this.config.uniqueName = I),
			(this.config.uniqueType = B == null ? void 0 : B.nulls),
			this
		);
	}
	generatedAlwaysAs(I) {
		return (this.config.generated = { as: I, type: 'always', mode: 'stored' }), this;
	}
	buildForeignKeys(I, B) {
		return this.foreignKeyConfigs.map(({ ref: tr, actions: rr }) =>
			iife(
				(ir, lr) => {
					const dr = new ForeignKeyBuilder(() => {
						const mr = ir();
						return { columns: [I], foreignColumns: [mr] };
					});
					return (
						lr.onUpdate && dr.onUpdate(lr.onUpdate),
						lr.onDelete && dr.onDelete(lr.onDelete),
						dr.build(B)
					);
				},
				tr,
				rr
			)
		);
	}
	buildExtraConfigColumn(I) {
		return new ExtraConfigColumn(I, this.config);
	}
}
Ar(PgColumnBuilder, Hs, 'PgColumnBuilder');
var js, Gs;
class PgColumn extends ((Gs = Column), (js = entityKind), Gs) {
	constructor(t, I) {
		I.uniqueName || (I.uniqueName = uniqueKeyName(t, [I.name])), super(t, I), (this.table = t);
	}
}
Ar(PgColumn, js, 'PgColumn');
var Vs, Ks;
class ExtraConfigColumn extends ((Ks = PgColumn), (Vs = entityKind), Ks) {
	constructor() {
		super(...arguments);
		Ar(this, 'indexConfig', {
			order: this.config.order ?? 'asc',
			nulls: this.config.nulls ?? 'last',
			opClass: this.config.opClass
		});
		Ar(this, 'defaultConfig', { order: 'asc', nulls: 'last', opClass: void 0 });
	}
	getSQLType() {
		return this.getSQLType();
	}
	asc() {
		return (this.indexConfig.order = 'asc'), this;
	}
	desc() {
		return (this.indexConfig.order = 'desc'), this;
	}
	nullsFirst() {
		return (this.indexConfig.nulls = 'first'), this;
	}
	nullsLast() {
		return (this.indexConfig.nulls = 'last'), this;
	}
	op(I) {
		return (this.indexConfig.opClass = I), this;
	}
}
Ar(ExtraConfigColumn, Vs, 'ExtraConfigColumn');
var Xs, Qs;
class PgArrayBuilder extends ((Qs = PgColumnBuilder), (Xs = entityKind), Qs) {
	constructor(t, I, B) {
		super(t, 'array', 'PgArray'), (this.config.baseBuilder = I), (this.config.size = B);
	}
	build(t) {
		const I = this.config.baseBuilder.build(t);
		return new PgArray(t, this.config, I);
	}
}
Ar(PgArrayBuilder, Xs, 'PgArrayBuilder');
var Js, Zs;
const cs = class cs extends ((Zs = PgColumn), (Js = entityKind), Zs) {
	constructor(I, B, tr, rr) {
		super(I, B);
		Ar(this, 'size');
		(this.baseColumn = tr), (this.range = rr), (this.size = B.size);
	}
	getSQLType() {
		return `${this.baseColumn.getSQLType()}[${typeof this.size == 'number' ? this.size : ''}]`;
	}
	mapFromDriverValue(I) {
		return (
			typeof I == 'string' && (I = parsePgArray(I)),
			I.map((B) => this.baseColumn.mapFromDriverValue(B))
		);
	}
	mapToDriverValue(I, B = !1) {
		const tr = I.map((rr) =>
			rr === null
				? null
				: is(this.baseColumn, cs)
					? this.baseColumn.mapToDriverValue(rr, !0)
					: this.baseColumn.mapToDriverValue(rr)
		);
		return B ? tr : makePgArray(tr);
	}
};
Ar(cs, Js, 'PgArray');
let PgArray = cs;
const isPgEnumSym = Symbol.for('drizzle:isPgEnum');
function isPgEnum(e) {
	return !!e && typeof e == 'function' && isPgEnumSym in e && e[isPgEnumSym] === !0;
}
var Ys;
Ys = entityKind;
class Subquery {
	constructor(t, I, B, tr = !1) {
		this._ = { brand: 'Subquery', sql: t, selectedFields: I, alias: B, isWith: tr };
	}
}
Ar(Subquery, Ys, 'Subquery');
var qn, $n;
class WithSubquery extends (($n = Subquery), (qn = entityKind), $n) {}
Ar(WithSubquery, qn, 'WithSubquery');
const ViewBaseConfig = Symbol.for('drizzle:ViewBaseConfig');
function isSQLWrapper(e) {
	return e != null && typeof e.getSQL == 'function';
}
function mergeQueries(e) {
	var I;
	const t = { sql: '', params: [] };
	for (const B of e)
		(t.sql += B.sql),
			t.params.push(...B.params),
			(I = B.typings) != null &&
				I.length &&
				(t.typings || (t.typings = []), t.typings.push(...B.typings));
	return t;
}
var Hn;
Hn = entityKind;
class StringChunk {
	constructor(t) {
		Ar(this, 'value');
		this.value = Array.isArray(t) ? t : [t];
	}
	getSQL() {
		return new SQL([this]);
	}
}
Ar(StringChunk, Hn, 'StringChunk');
var Kn;
Kn = entityKind;
const us = class us {
	constructor(t) {
		Ar(this, 'decoder', noopDecoder);
		Ar(this, 'shouldInlineParams', !1);
		this.queryChunks = t;
	}
	append(t) {
		return this.queryChunks.push(...t.queryChunks), this;
	}
	toQuery(t) {
		return tracer.startActiveSpan('drizzle.buildSQL', (I) => {
			const B = this.buildQueryFromSourceParams(this.queryChunks, t);
			return (
				I == null ||
					I.setAttributes({
						'drizzle.query.text': B.sql,
						'drizzle.query.params': JSON.stringify(B.params)
					}),
				B
			);
		});
	}
	buildQueryFromSourceParams(t, I) {
		const B = Object.assign({}, I, {
				inlineParams: I.inlineParams || this.shouldInlineParams,
				paramStartIndex: I.paramStartIndex || { value: 0 }
			}),
			{
				escapeName: tr,
				escapeParam: rr,
				prepareTyping: ir,
				inlineParams: lr,
				paramStartIndex: dr
			} = B;
		return mergeQueries(
			t.map((mr) => {
				var _r;
				if (is(mr, StringChunk)) return { sql: mr.value.join(''), params: [] };
				if (is(mr, Name)) return { sql: tr(mr.value), params: [] };
				if (mr === void 0) return { sql: '', params: [] };
				if (Array.isArray(mr)) {
					const fr = [new StringChunk('(')];
					for (const [hr, Mr] of mr.entries())
						fr.push(Mr), hr < mr.length - 1 && fr.push(new StringChunk(', '));
					return fr.push(new StringChunk(')')), this.buildQueryFromSourceParams(fr, B);
				}
				if (is(mr, us))
					return this.buildQueryFromSourceParams(mr.queryChunks, {
						...B,
						inlineParams: lr || mr.shouldInlineParams
					});
				if (is(mr, Table)) {
					const fr = mr[Table.Symbol.Schema],
						hr = mr[Table.Symbol.Name];
					return { sql: fr === void 0 ? tr(hr) : tr(fr) + '.' + tr(hr), params: [] };
				}
				if (is(mr, Column))
					return I.invokeSource === 'indexes'
						? { sql: tr(mr.name), params: [] }
						: { sql: tr(mr.table[Table.Symbol.Name]) + '.' + tr(mr.name), params: [] };
				if (is(mr, View)) {
					const fr = mr[ViewBaseConfig].schema,
						hr = mr[ViewBaseConfig].name;
					return { sql: fr === void 0 ? tr(hr) : tr(fr) + '.' + tr(hr), params: [] };
				}
				if (is(mr, Param)) {
					if (is(mr.value, Placeholder))
						return { sql: rr(dr.value++, mr), params: [mr], typings: ['none'] };
					const fr = mr.value === null ? null : mr.encoder.mapToDriverValue(mr.value);
					if (is(fr, us)) return this.buildQueryFromSourceParams([fr], B);
					if (lr) return { sql: this.mapInlineParam(fr, B), params: [] };
					let hr = ['none'];
					return (
						ir && (hr = [ir(mr.encoder)]), { sql: rr(dr.value++, fr), params: [fr], typings: hr }
					);
				}
				return is(mr, Placeholder)
					? { sql: rr(dr.value++, mr), params: [mr], typings: ['none'] }
					: is(mr, us.Aliased) && mr.fieldAlias !== void 0
						? { sql: tr(mr.fieldAlias), params: [] }
						: is(mr, Subquery)
							? mr._.isWith
								? { sql: tr(mr._.alias), params: [] }
								: this.buildQueryFromSourceParams(
										[new StringChunk('('), mr._.sql, new StringChunk(') '), new Name(mr._.alias)],
										B
									)
							: isPgEnum(mr)
								? mr.schema
									? { sql: tr(mr.schema) + '.' + tr(mr.enumName), params: [] }
									: { sql: tr(mr.enumName), params: [] }
								: isSQLWrapper(mr)
									? (_r = mr.shouldOmitSQLParens) != null && _r.call(mr)
										? this.buildQueryFromSourceParams([mr.getSQL()], B)
										: this.buildQueryFromSourceParams(
												[new StringChunk('('), mr.getSQL(), new StringChunk(')')],
												B
											)
									: lr
										? { sql: this.mapInlineParam(mr, B), params: [] }
										: { sql: rr(dr.value++, mr), params: [mr], typings: ['none'] };
			})
		);
	}
	mapInlineParam(t, { escapeString: I }) {
		if (t === null) return 'null';
		if (typeof t == 'number' || typeof t == 'boolean') return t.toString();
		if (typeof t == 'string') return I(t);
		if (typeof t == 'object') {
			const B = t.toString();
			return I(B === '[object Object]' ? JSON.stringify(t) : B);
		}
		throw new Error('Unexpected param value: ' + t);
	}
	getSQL() {
		return this;
	}
	as(t) {
		return t === void 0 ? this : new us.Aliased(this, t);
	}
	mapWith(t) {
		return (this.decoder = typeof t == 'function' ? { mapFromDriverValue: t } : t), this;
	}
	inlineParams() {
		return (this.shouldInlineParams = !0), this;
	}
	if(t) {
		return t ? this : void 0;
	}
};
Ar(us, Kn, 'SQL');
let SQL = us;
var Xn;
Xn = entityKind;
class Name {
	constructor(t) {
		Ar(this, 'brand');
		this.value = t;
	}
	getSQL() {
		return new SQL([this]);
	}
}
Ar(Name, Xn, 'Name');
function isDriverValueEncoder(e) {
	return (
		typeof e == 'object' &&
		e !== null &&
		'mapToDriverValue' in e &&
		typeof e.mapToDriverValue == 'function'
	);
}
const noopDecoder = { mapFromDriverValue: (e) => e },
	noopEncoder = { mapToDriverValue: (e) => e };
({ ...noopDecoder, ...noopEncoder });
var Jn;
Jn = entityKind;
class Param {
	constructor(t, I = noopEncoder) {
		Ar(this, 'brand');
		(this.value = t), (this.encoder = I);
	}
	getSQL() {
		return new SQL([this]);
	}
}
Ar(Param, Jn, 'Param');
function sql(e, ...t) {
	const I = [];
	(t.length > 0 || (e.length > 0 && e[0] !== '')) && I.push(new StringChunk(e[0]));
	for (const [B, tr] of t.entries()) I.push(tr, new StringChunk(e[B + 1]));
	return new SQL(I);
}
((e) => {
	function t() {
		return new SQL([]);
	}
	e.empty = t;
	function I(dr) {
		return new SQL(dr);
	}
	e.fromList = I;
	function B(dr) {
		return new SQL([new StringChunk(dr)]);
	}
	e.raw = B;
	function tr(dr, mr) {
		const _r = [];
		for (const [fr, hr] of dr.entries()) fr > 0 && mr !== void 0 && _r.push(mr), _r.push(hr);
		return new SQL(_r);
	}
	e.join = tr;
	function rr(dr) {
		return new Name(dr);
	}
	e.identifier = rr;
	function ir(dr) {
		return new Placeholder(dr);
	}
	e.placeholder = ir;
	function lr(dr, mr) {
		return new Param(dr, mr);
	}
	e.param = lr;
})(sql || (sql = {}));
((e) => {
	var I;
	I = entityKind;
	const B = class B {
		constructor(rr, ir) {
			Ar(this, 'isSelectionField', !1);
			(this.sql = rr), (this.fieldAlias = ir);
		}
		getSQL() {
			return this.sql;
		}
		clone() {
			return new B(this.sql, this.fieldAlias);
		}
	};
	Ar(B, I, 'SQL.Aliased');
	let t = B;
	e.Aliased = t;
})(SQL || (SQL = {}));
var Zn;
Zn = entityKind;
class Placeholder {
	constructor(t) {
		this.name = t;
	}
	getSQL() {
		return new SQL([this]);
	}
}
Ar(Placeholder, Zn, 'Placeholder');
function fillPlaceholders(e, t) {
	return e.map((I) => {
		if (is(I, Placeholder)) {
			if (!(I.name in t)) throw new Error(`No value for placeholder "${I.name}" was provided`);
			return t[I.name];
		}
		if (is(I, Param) && is(I.value, Placeholder)) {
			if (!(I.value.name in t))
				throw new Error(`No value for placeholder "${I.value.name}" was provided`);
			return I.encoder.mapToDriverValue(t[I.value.name]);
		}
		return I;
	});
}
var Yn, eo;
(eo = entityKind), (Yn = ViewBaseConfig);
class View {
	constructor({ name: t, schema: I, selectedFields: B, query: tr }) {
		Ar(this, Yn);
		this[ViewBaseConfig] = {
			name: t,
			originalName: t,
			schema: I,
			selectedFields: B,
			query: tr,
			isExisting: !tr,
			isAlias: !1
		};
	}
	getSQL() {
		return new SQL([this]);
	}
}
Ar(View, eo, 'View');
Column.prototype.getSQL = function () {
	return new SQL([this]);
};
Table.prototype.getSQL = function () {
	return new SQL([this]);
};
Subquery.prototype.getSQL = function () {
	return new SQL([this]);
};
function mapResultRow(e, t, I) {
	const B = {},
		tr = e.reduce((rr, { path: ir, field: lr }, dr) => {
			let mr;
			is(lr, Column) ? (mr = lr) : is(lr, SQL) ? (mr = lr.decoder) : (mr = lr.sql.decoder);
			let _r = rr;
			for (const [fr, hr] of ir.entries())
				if (fr < ir.length - 1) hr in _r || (_r[hr] = {}), (_r = _r[hr]);
				else {
					const Mr = t[dr],
						gr = (_r[hr] = Mr === null ? null : mr.mapFromDriverValue(Mr));
					if (I && is(lr, Column) && ir.length === 2) {
						const yr = ir[0];
						yr in B
							? typeof B[yr] == 'string' && B[yr] !== getTableName(lr.table) && (B[yr] = !1)
							: (B[yr] = gr === null ? getTableName(lr.table) : !1);
					}
				}
			return rr;
		}, {});
	if (I && Object.keys(B).length > 0)
		for (const [rr, ir] of Object.entries(B)) typeof ir == 'string' && !I[ir] && (tr[rr] = null);
	return tr;
}
function orderSelectedFields(e, t) {
	return Object.entries(e).reduce((I, [B, tr]) => {
		if (typeof B != 'string') return I;
		const rr = t ? [...t, B] : [B];
		return (
			is(tr, Column) || is(tr, SQL) || is(tr, SQL.Aliased)
				? I.push({ path: rr, field: tr })
				: is(tr, Table)
					? I.push(...orderSelectedFields(tr[Table.Symbol.Columns], rr))
					: I.push(...orderSelectedFields(tr, rr)),
			I
		);
	}, []);
}
function haveSameKeys(e, t) {
	const I = Object.keys(e),
		B = Object.keys(t);
	if (I.length !== B.length) return !1;
	for (const [tr, rr] of I.entries()) if (rr !== B[tr]) return !1;
	return !0;
}
function mapUpdateSet(e, t) {
	const I = Object.entries(t)
		.filter(([, B]) => B !== void 0)
		.map(([B, tr]) => (is(tr, SQL) ? [B, tr] : [B, new Param(tr, e[Table.Symbol.Columns][B])]));
	if (I.length === 0) throw new Error('No values to set');
	return Object.fromEntries(I);
}
function applyMixins(e, t) {
	for (const I of t)
		for (const B of Object.getOwnPropertyNames(I.prototype))
			B !== 'constructor' &&
				Object.defineProperty(
					e.prototype,
					B,
					Object.getOwnPropertyDescriptor(I.prototype, B) || Object.create(null)
				);
}
function getTableColumns(e) {
	return e[Table.Symbol.Columns];
}
function getTableLikeName(e) {
	return is(e, Subquery)
		? e._.alias
		: is(e, View)
			? e[ViewBaseConfig].name
			: is(e, SQL)
				? void 0
				: e[Table.Symbol.IsAlias]
					? e[Table.Symbol.Name]
					: e[Table.Symbol.BaseName];
}
var to, ro;
class PgDeleteBase extends ((ro = QueryPromise), (to = entityKind), ro) {
	constructor(I, B, tr, rr) {
		super();
		Ar(this, 'config');
		Ar(this, 'execute', (I) =>
			tracer.startActiveSpan('drizzle.operation', () => this._prepare().execute(I))
		);
		(this.session = B), (this.dialect = tr), (this.config = { table: I, withList: rr });
	}
	where(I) {
		return (this.config.where = I), this;
	}
	returning(I = this.config.table[Table.Symbol.Columns]) {
		return (this.config.returning = orderSelectedFields(I)), this;
	}
	getSQL() {
		return this.dialect.buildDeleteQuery(this.config);
	}
	toSQL() {
		const { typings: I, ...B } = this.dialect.sqlToQuery(this.getSQL());
		return B;
	}
	_prepare(I) {
		return tracer.startActiveSpan('drizzle.prepareQuery', () =>
			this.session.prepareQuery(
				this.dialect.sqlToQuery(this.getSQL()),
				this.config.returning,
				I,
				!0
			)
		);
	}
	prepare(I) {
		return this._prepare(I);
	}
	$dynamic() {
		return this;
	}
}
Ar(PgDeleteBase, to, 'PgDelete');
var so;
so = entityKind;
class PgInsertBuilder {
	constructor(t, I, B, tr) {
		(this.table = t), (this.session = I), (this.dialect = B), (this.withList = tr);
	}
	values(t) {
		if (((t = Array.isArray(t) ? t : [t]), t.length === 0))
			throw new Error('values() must be called with at least one value');
		const I = t.map((B) => {
			const tr = {},
				rr = this.table[Table.Symbol.Columns];
			for (const ir of Object.keys(B)) {
				const lr = B[ir];
				tr[ir] = is(lr, SQL) ? lr : new Param(lr, rr[ir]);
			}
			return tr;
		});
		return new PgInsertBase(this.table, I, this.session, this.dialect, this.withList);
	}
}
Ar(PgInsertBuilder, so, 'PgInsertBuilder');
var no, oo;
class PgInsertBase extends ((oo = QueryPromise), (no = entityKind), oo) {
	constructor(I, B, tr, rr, ir) {
		super();
		Ar(this, 'config');
		Ar(this, 'execute', (I) =>
			tracer.startActiveSpan('drizzle.operation', () => this._prepare().execute(I))
		);
		(this.session = tr), (this.dialect = rr), (this.config = { table: I, values: B, withList: ir });
	}
	returning(I = this.config.table[Table.Symbol.Columns]) {
		return (this.config.returning = orderSelectedFields(I)), this;
	}
	onConflictDoNothing(I = {}) {
		if (I.target === void 0) this.config.onConflict = sql`do nothing`;
		else {
			let B = '';
			B = Array.isArray(I.target)
				? I.target.map((rr) => this.dialect.escapeName(rr.name)).join(',')
				: this.dialect.escapeName(I.target.name);
			const tr = I.where ? sql` where ${I.where}` : void 0;
			this.config.onConflict = sql`(${sql.raw(B)})${tr} do nothing`;
		}
		return this;
	}
	onConflictDoUpdate(I) {
		if (I.where && (I.targetWhere || I.setWhere))
			throw new Error(
				'You cannot use both "where" and "targetWhere"/"setWhere" at the same time - "where" is deprecated, use "targetWhere" or "setWhere" instead.'
			);
		const B = I.where ? sql` where ${I.where}` : void 0,
			tr = I.targetWhere ? sql` where ${I.targetWhere}` : void 0,
			rr = I.setWhere ? sql` where ${I.setWhere}` : void 0,
			ir = this.dialect.buildUpdateSet(this.config.table, mapUpdateSet(this.config.table, I.set));
		let lr = '';
		return (
			(lr = Array.isArray(I.target)
				? I.target.map((dr) => this.dialect.escapeName(dr.name)).join(',')
				: this.dialect.escapeName(I.target.name)),
			(this.config.onConflict = sql`(${sql.raw(lr)})${tr} do update set ${ir}${B}${rr}`),
			this
		);
	}
	getSQL() {
		return this.dialect.buildInsertQuery(this.config);
	}
	toSQL() {
		const { typings: I, ...B } = this.dialect.sqlToQuery(this.getSQL());
		return B;
	}
	_prepare(I) {
		return tracer.startActiveSpan('drizzle.prepareQuery', () =>
			this.session.prepareQuery(
				this.dialect.sqlToQuery(this.getSQL()),
				this.config.returning,
				I,
				!0
			)
		);
	}
	prepare(I) {
		return this._prepare(I);
	}
	$dynamic() {
		return this;
	}
}
Ar(PgInsertBase, no, 'PgInsert');
var ao;
ao = entityKind;
class ColumnAliasProxyHandler {
	constructor(t) {
		this.table = t;
	}
	get(t, I) {
		return I === 'table' ? this.table : t[I];
	}
}
Ar(ColumnAliasProxyHandler, ao, 'ColumnAliasProxyHandler');
var io;
io = entityKind;
class TableAliasProxyHandler {
	constructor(t, I) {
		(this.alias = t), (this.replaceOriginalName = I);
	}
	get(t, I) {
		if (I === Table.Symbol.IsAlias) return !0;
		if (I === Table.Symbol.Name) return this.alias;
		if (this.replaceOriginalName && I === Table.Symbol.OriginalName) return this.alias;
		if (I === ViewBaseConfig) return { ...t[ViewBaseConfig], name: this.alias, isAlias: !0 };
		if (I === Table.Symbol.Columns) {
			const tr = t[Table.Symbol.Columns];
			if (!tr) return tr;
			const rr = {};
			return (
				Object.keys(tr).map((ir) => {
					rr[ir] = new Proxy(tr[ir], new ColumnAliasProxyHandler(new Proxy(t, this)));
				}),
				rr
			);
		}
		const B = t[I];
		return is(B, Column) ? new Proxy(B, new ColumnAliasProxyHandler(new Proxy(t, this))) : B;
	}
}
Ar(TableAliasProxyHandler, io, 'TableAliasProxyHandler');
function aliasedTable(e, t) {
	return new Proxy(e, new TableAliasProxyHandler(t, !1));
}
function aliasedTableColumn(e, t) {
	return new Proxy(
		e,
		new ColumnAliasProxyHandler(new Proxy(e.table, new TableAliasProxyHandler(t, !1)))
	);
}
function mapColumnsInAliasedSQLToAlias(e, t) {
	return new SQL.Aliased(mapColumnsInSQLToAlias(e.sql, t), e.fieldAlias);
}
function mapColumnsInSQLToAlias(e, t) {
	return sql.join(
		e.queryChunks.map((I) =>
			is(I, Column)
				? aliasedTableColumn(I, t)
				: is(I, SQL)
					? mapColumnsInSQLToAlias(I, t)
					: is(I, SQL.Aliased)
						? mapColumnsInAliasedSQLToAlias(I, t)
						: I
		)
	);
}
var lo, uo;
class DrizzleError extends ((uo = Error), (lo = entityKind), uo) {
	constructor({ message: t, cause: I }) {
		super(t), (this.name = 'DrizzleError'), (this.cause = I);
	}
}
Ar(DrizzleError, lo, 'DrizzleError');
var co, po;
class TransactionRollbackError extends ((po = DrizzleError), (co = entityKind), po) {
	constructor() {
		super({ message: 'Rollback' });
	}
}
Ar(TransactionRollbackError, co, 'TransactionRollbackError');
var mo, _o;
class PgIntColumnBaseBuilder extends ((_o = PgColumnBuilder), (mo = entityKind), _o) {
	generatedAlwaysAsIdentity(t) {
		if (t) {
			const { name: I, ...B } = t;
			this.config.generatedIdentity = { type: 'always', sequenceName: I, sequenceOptions: B };
		} else this.config.generatedIdentity = { type: 'always' };
		return (this.config.hasDefault = !0), (this.config.notNull = !0), this;
	}
	generatedByDefaultAsIdentity(t) {
		if (t) {
			const { name: I, ...B } = t;
			this.config.generatedIdentity = { type: 'byDefault', sequenceName: I, sequenceOptions: B };
		} else this.config.generatedIdentity = { type: 'byDefault' };
		return (this.config.hasDefault = !0), (this.config.notNull = !0), this;
	}
}
Ar(PgIntColumnBaseBuilder, mo, 'PgIntColumnBaseBuilder');
var fo, ho;
class PgBigInt53Builder extends ((ho = PgIntColumnBaseBuilder), (fo = entityKind), ho) {
	constructor(t) {
		super(t, 'number', 'PgBigInt53');
	}
	build(t) {
		return new PgBigInt53(t, this.config);
	}
}
Ar(PgBigInt53Builder, fo, 'PgBigInt53Builder');
var go, Mo;
class PgBigInt53 extends ((Mo = PgColumn), (go = entityKind), Mo) {
	getSQLType() {
		return 'bigint';
	}
	mapFromDriverValue(t) {
		return typeof t == 'number' ? t : Number(t);
	}
}
Ar(PgBigInt53, go, 'PgBigInt53');
function bigint(e, t) {
	return new PgBigInt53Builder(e);
}
var wo, So;
class PgBooleanBuilder extends ((So = PgColumnBuilder), (wo = entityKind), So) {
	constructor(t) {
		super(t, 'boolean', 'PgBoolean');
	}
	build(t) {
		return new PgBoolean(t, this.config);
	}
}
Ar(PgBooleanBuilder, wo, 'PgBooleanBuilder');
var Co, Eo;
class PgBoolean extends ((Eo = PgColumn), (Co = entityKind), Eo) {
	getSQLType() {
		return 'boolean';
	}
}
Ar(PgBoolean, Co, 'PgBoolean');
function boolean(e) {
	return new PgBooleanBuilder(e);
}
var yo, xo;
class PgDateColumnBaseBuilder extends ((xo = PgColumnBuilder), (yo = entityKind), xo) {
	defaultNow() {
		return this.default(sql`now()`);
	}
}
Ar(PgDateColumnBaseBuilder, yo, 'PgDateColumnBaseBuilder');
var bo, vo;
class PgDate extends ((vo = PgColumn), (bo = entityKind), vo) {
	getSQLType() {
		return 'date';
	}
	mapFromDriverValue(t) {
		return new Date(t);
	}
	mapToDriverValue(t) {
		return t.toISOString();
	}
}
Ar(PgDate, bo, 'PgDate');
var Ao, ko;
class PgDateString extends ((ko = PgColumn), (Ao = entityKind), ko) {
	getSQLType() {
		return 'date';
	}
}
Ar(PgDateString, Ao, 'PgDateString');
var To, Po;
class PgJson extends ((Po = PgColumn), (To = entityKind), Po) {
	constructor(t, I) {
		super(t, I);
	}
	getSQLType() {
		return 'json';
	}
	mapToDriverValue(t) {
		return JSON.stringify(t);
	}
	mapFromDriverValue(t) {
		if (typeof t == 'string')
			try {
				return JSON.parse(t);
			} catch {
				return t;
			}
		return t;
	}
}
Ar(PgJson, To, 'PgJson');
var Fo, Io;
class PgJsonbBuilder extends ((Io = PgColumnBuilder), (Fo = entityKind), Io) {
	constructor(t) {
		super(t, 'json', 'PgJsonb');
	}
	build(t) {
		return new PgJsonb(t, this.config);
	}
}
Ar(PgJsonbBuilder, Fo, 'PgJsonbBuilder');
var Lo, Ro;
class PgJsonb extends ((Ro = PgColumn), (Lo = entityKind), Ro) {
	constructor(t, I) {
		super(t, I);
	}
	getSQLType() {
		return 'jsonb';
	}
	mapToDriverValue(t) {
		return JSON.stringify(t);
	}
	mapFromDriverValue(t) {
		if (typeof t == 'string')
			try {
				return JSON.parse(t);
			} catch {
				return t;
			}
		return t;
	}
}
Ar(PgJsonb, Lo, 'PgJsonb');
function jsonb(e) {
	return new PgJsonbBuilder(e);
}
var qo, No;
class PgNumeric extends ((No = PgColumn), (qo = entityKind), No) {
	constructor(I, B) {
		super(I, B);
		Ar(this, 'precision');
		Ar(this, 'scale');
		(this.precision = B.precision), (this.scale = B.scale);
	}
	getSQLType() {
		return this.precision !== void 0 && this.scale !== void 0
			? `numeric(${this.precision}, ${this.scale})`
			: this.precision === void 0
				? 'numeric'
				: `numeric(${this.precision})`;
	}
}
Ar(PgNumeric, qo, 'PgNumeric');
var Oo, Do;
class PgTextBuilder extends ((Do = PgColumnBuilder), (Oo = entityKind), Do) {
	constructor(t, I) {
		super(t, 'string', 'PgText'), (this.config.enumValues = I.enum);
	}
	build(t) {
		return new PgText(t, this.config);
	}
}
Ar(PgTextBuilder, Oo, 'PgTextBuilder');
var zo, Uo;
class PgText extends ((Uo = PgColumn), (zo = entityKind), Uo) {
	constructor() {
		super(...arguments);
		Ar(this, 'enumValues', this.config.enumValues);
	}
	getSQLType() {
		return 'text';
	}
}
Ar(PgText, zo, 'PgText');
function text(e, t = {}) {
	return new PgTextBuilder(e, t);
}
var $o, Bo;
class PgTime extends ((Bo = PgColumn), ($o = entityKind), Bo) {
	constructor(I, B) {
		super(I, B);
		Ar(this, 'withTimezone');
		Ar(this, 'precision');
		(this.withTimezone = B.withTimezone), (this.precision = B.precision);
	}
	getSQLType() {
		return `time${this.precision === void 0 ? '' : `(${this.precision})`}${this.withTimezone ? ' with time zone' : ''}`;
	}
}
Ar(PgTime, $o, 'PgTime');
var Ho, Wo;
class PgTimestampBuilder extends ((Wo = PgDateColumnBaseBuilder), (Ho = entityKind), Wo) {
	constructor(t, I, B) {
		super(t, 'date', 'PgTimestamp'), (this.config.withTimezone = I), (this.config.precision = B);
	}
	build(t) {
		return new PgTimestamp(t, this.config);
	}
}
Ar(PgTimestampBuilder, Ho, 'PgTimestampBuilder');
var jo, Go;
class PgTimestamp extends ((Go = PgColumn), (jo = entityKind), Go) {
	constructor(I, B) {
		super(I, B);
		Ar(this, 'withTimezone');
		Ar(this, 'precision');
		Ar(this, 'mapFromDriverValue', (I) => new Date(this.withTimezone ? I : I + '+0000'));
		Ar(this, 'mapToDriverValue', (I) => I.toISOString());
		(this.withTimezone = B.withTimezone), (this.precision = B.precision);
	}
	getSQLType() {
		return `timestamp${this.precision === void 0 ? '' : ` (${this.precision})`}${this.withTimezone ? ' with time zone' : ''}`;
	}
}
Ar(PgTimestamp, jo, 'PgTimestamp');
var Vo, Ko;
class PgTimestampStringBuilder extends ((Ko = PgDateColumnBaseBuilder), (Vo = entityKind), Ko) {
	constructor(t, I, B) {
		super(t, 'string', 'PgTimestampString'),
			(this.config.withTimezone = I),
			(this.config.precision = B);
	}
	build(t) {
		return new PgTimestampString(t, this.config);
	}
}
Ar(PgTimestampStringBuilder, Vo, 'PgTimestampStringBuilder');
var Xo, Qo;
class PgTimestampString extends ((Qo = PgColumn), (Xo = entityKind), Qo) {
	constructor(I, B) {
		super(I, B);
		Ar(this, 'withTimezone');
		Ar(this, 'precision');
		(this.withTimezone = B.withTimezone), (this.precision = B.precision);
	}
	getSQLType() {
		return `timestamp${this.precision === void 0 ? '' : `(${this.precision})`}${this.withTimezone ? ' with time zone' : ''}`;
	}
}
Ar(PgTimestampString, Xo, 'PgTimestampString');
function timestamp(e, t = {}) {
	return t.mode === 'string'
		? new PgTimestampStringBuilder(e, t.withTimezone ?? !1, t.precision)
		: new PgTimestampBuilder(e, t.withTimezone ?? !1, t.precision);
}
var Jo, Zo;
class PgUUID extends ((Zo = PgColumn), (Jo = entityKind), Zo) {
	getSQLType() {
		return 'uuid';
	}
}
Ar(PgUUID, Jo, 'PgUUID');
var Yo;
Yo = entityKind;
class PrimaryKeyBuilder {
	constructor(t, I) {
		Ar(this, 'columns');
		Ar(this, 'name');
		(this.columns = t), (this.name = I);
	}
	build(t) {
		return new PrimaryKey(t, this.columns, this.name);
	}
}
Ar(PrimaryKeyBuilder, Yo, 'PgPrimaryKeyBuilder');
var ea;
ea = entityKind;
class PrimaryKey {
	constructor(t, I, B) {
		Ar(this, 'columns');
		Ar(this, 'name');
		(this.table = t), (this.columns = I), (this.name = B);
	}
	getName() {
		return (
			this.name ??
			`${this.table[PgTable.Symbol.Name]}_${this.columns.map((t) => t.name).join('_')}_pk`
		);
	}
}
Ar(PrimaryKey, ea, 'PgPrimaryKey');
function bindIfParam(e, t) {
	return isDriverValueEncoder(t) &&
		!isSQLWrapper(e) &&
		!is(e, Param) &&
		!is(e, Placeholder) &&
		!is(e, Column) &&
		!is(e, Table) &&
		!is(e, View)
		? new Param(e, t)
		: e;
}
const eq = (e, t) => sql`${e} = ${bindIfParam(t, e)}`,
	ne$1 = (e, t) => sql`${e} <> ${bindIfParam(t, e)}`;
function and(...e) {
	const t = e.filter((I) => I !== void 0);
	if (t.length !== 0)
		return t.length === 1
			? new SQL(t)
			: new SQL([
					new StringChunk('('),
					sql.join(t, new StringChunk(' and ')),
					new StringChunk(')')
				]);
}
function or$1(...e) {
	const t = e.filter((I) => I !== void 0);
	if (t.length !== 0)
		return t.length === 1
			? new SQL(t)
			: new SQL([new StringChunk('('), sql.join(t, new StringChunk(' or ')), new StringChunk(')')]);
}
function not(e) {
	return sql`not ${e}`;
}
const gt$1 = (e, t) => sql`${e} > ${bindIfParam(t, e)}`,
	gte = (e, t) => sql`${e} >= ${bindIfParam(t, e)}`,
	lt$1 = (e, t) => sql`${e} < ${bindIfParam(t, e)}`,
	lte = (e, t) => sql`${e} <= ${bindIfParam(t, e)}`;
function inArray(e, t) {
	return Array.isArray(t)
		? t.length === 0
			? sql`false`
			: sql`${e} in ${t.map((I) => bindIfParam(I, e))}`
		: sql`${e} in ${bindIfParam(t, e)}`;
}
function notInArray(e, t) {
	return Array.isArray(t)
		? t.length === 0
			? sql`true`
			: sql`${e} not in ${t.map((I) => bindIfParam(I, e))}`
		: sql`${e} not in ${bindIfParam(t, e)}`;
}
function isNull(e) {
	return sql`${e} is null`;
}
function isNotNull(e) {
	return sql`${e} is not null`;
}
function exists(e) {
	return sql`exists ${e}`;
}
function notExists(e) {
	return sql`not exists ${e}`;
}
function between(e, t, I) {
	return sql`${e} between ${bindIfParam(t, e)} and ${bindIfParam(I, e)}`;
}
function notBetween(e, t, I) {
	return sql`${e} not between ${bindIfParam(t, e)} and ${bindIfParam(I, e)}`;
}
function like(e, t) {
	return sql`${e} like ${t}`;
}
function notLike(e, t) {
	return sql`${e} not like ${t}`;
}
function ilike(e, t) {
	return sql`${e} ilike ${t}`;
}
function notIlike(e, t) {
	return sql`${e} not ilike ${t}`;
}
function asc(e) {
	return sql`${e} asc`;
}
function desc(e) {
	return sql`${e} desc`;
}
var ta;
ta = entityKind;
class Relation {
	constructor(t, I, B) {
		Ar(this, 'referencedTableName');
		Ar(this, 'fieldName');
		(this.sourceTable = t),
			(this.referencedTable = I),
			(this.relationName = B),
			(this.referencedTableName = I[Table.Symbol.Name]);
	}
}
Ar(Relation, ta, 'Relation');
var ra;
ra = entityKind;
class Relations {
	constructor(t, I) {
		(this.table = t), (this.config = I);
	}
}
Ar(Relations, ra, 'Relations');
var sa, na;
const ps = class ps extends ((na = Relation), (sa = entityKind), na) {
	constructor(t, I, B, tr) {
		super(t, I, B == null ? void 0 : B.relationName), (this.config = B), (this.isNullable = tr);
	}
	withFieldName(t) {
		const I = new ps(this.sourceTable, this.referencedTable, this.config, this.isNullable);
		return (I.fieldName = t), I;
	}
};
Ar(ps, sa, 'One');
let One = ps;
var oa, aa;
const ms = class ms extends ((aa = Relation), (oa = entityKind), aa) {
	constructor(t, I, B) {
		super(t, I, B == null ? void 0 : B.relationName), (this.config = B);
	}
	withFieldName(t) {
		const I = new ms(this.sourceTable, this.referencedTable, this.config);
		return (I.fieldName = t), I;
	}
};
Ar(ms, oa, 'Many');
let Many = ms;
function getOperators() {
	return {
		and,
		between,
		eq,
		exists,
		gt: gt$1,
		gte,
		ilike,
		inArray,
		isNull,
		isNotNull,
		like,
		lt: lt$1,
		lte,
		ne: ne$1,
		not,
		notBetween,
		notExists,
		notLike,
		notIlike,
		notInArray,
		or: or$1,
		sql
	};
}
function getOrderByOperators() {
	return { sql, asc, desc };
}
function extractTablesRelationalConfig(e, t) {
	var rr;
	Object.keys(e).length === 1 && 'default' in e && !is(e.default, Table) && (e = e.default);
	const I = {},
		B = {},
		tr = {};
	for (const [ir, lr] of Object.entries(e))
		if (is(lr, Table)) {
			const dr = getTableUniqueName(lr),
				mr = B[dr];
			(I[dr] = ir),
				(tr[ir] = {
					tsName: ir,
					dbName: lr[Table.Symbol.Name],
					schema: lr[Table.Symbol.Schema],
					columns: lr[Table.Symbol.Columns],
					relations: (mr == null ? void 0 : mr.relations) ?? {},
					primaryKey: (mr == null ? void 0 : mr.primaryKey) ?? []
				});
			for (const fr of Object.values(lr[Table.Symbol.Columns]))
				fr.primary && tr[ir].primaryKey.push(fr);
			const _r =
				(rr = lr[Table.Symbol.ExtraConfigBuilder]) == null
					? void 0
					: rr.call(lr, lr[Table.Symbol.ExtraConfigColumns]);
			if (_r)
				for (const fr of Object.values(_r))
					is(fr, PrimaryKeyBuilder) && tr[ir].primaryKey.push(...fr.columns);
		} else if (is(lr, Relations)) {
			const dr = getTableUniqueName(lr.table),
				mr = I[dr],
				_r = lr.config(t(lr.table));
			let fr;
			for (const [hr, Mr] of Object.entries(_r))
				if (mr) {
					const gr = tr[mr];
					gr.relations[hr] = Mr;
				} else dr in B || (B[dr] = { relations: {}, primaryKey: fr }), (B[dr].relations[hr] = Mr);
		}
	return { tables: tr, tableNamesMap: I };
}
function createOne(e) {
	return function (I, B) {
		return new One(
			e,
			I,
			B,
			(B == null ? void 0 : B.fields.reduce((tr, rr) => tr && rr.notNull, !0)) ?? !1
		);
	};
}
function createMany(e) {
	return function (I, B) {
		return new Many(e, I, B);
	};
}
function normalizeRelation(e, t, I) {
	if (is(I, One) && I.config) return { fields: I.config.fields, references: I.config.references };
	const B = t[getTableUniqueName(I.referencedTable)];
	if (!B) throw new Error(`Table "${I.referencedTable[Table.Symbol.Name]}" not found in schema`);
	const tr = e[B];
	if (!tr) throw new Error(`Table "${B}" not found in schema`);
	const rr = I.sourceTable,
		ir = t[getTableUniqueName(rr)];
	if (!ir) throw new Error(`Table "${rr[Table.Symbol.Name]}" not found in schema`);
	const lr = [];
	for (const dr of Object.values(tr.relations))
		((I.relationName && I !== dr && dr.relationName === I.relationName) ||
			(!I.relationName && dr.referencedTable === I.sourceTable)) &&
			lr.push(dr);
	if (lr.length > 1)
		throw I.relationName
			? new Error(`There are multiple relations with name "${I.relationName}" in table "${B}"`)
			: new Error(
					`There are multiple relations between "${B}" and "${I.sourceTable[Table.Symbol.Name]}". Please specify relation name`
				);
	if (lr[0] && is(lr[0], One) && lr[0].config)
		return { fields: lr[0].config.references, references: lr[0].config.fields };
	throw new Error(`There is not enough information to infer relation "${ir}.${I.fieldName}"`);
}
function createTableRelationsHelpers(e) {
	return { one: createOne(e), many: createMany(e) };
}
function mapRelationalRow(e, t, I, B, tr = (rr) => rr) {
	const rr = {};
	for (const [ir, lr] of B.entries())
		if (lr.isJson) {
			const dr = t.relations[lr.tsKey],
				mr = I[ir],
				_r = typeof mr == 'string' ? JSON.parse(mr) : mr;
			rr[lr.tsKey] = is(dr, One)
				? _r && mapRelationalRow(e, e[lr.relationTableTsKey], _r, lr.selection, tr)
				: _r.map((fr) => mapRelationalRow(e, e[lr.relationTableTsKey], fr, lr.selection, tr));
		} else {
			const dr = tr(I[ir]),
				mr = lr.field;
			let _r;
			is(mr, Column) ? (_r = mr) : is(mr, SQL) ? (_r = mr.decoder) : (_r = mr.sql.decoder),
				(rr[lr.tsKey] = dr === null ? null : _r.mapFromDriverValue(dr));
		}
	return rr;
}
var ia, la;
class PgViewBase extends ((la = View), (ia = entityKind), la) {}
Ar(PgViewBase, ia, 'PgViewBase');
var ua;
ua = entityKind;
class PgDialect {
	async migrate(t, I, B) {
		const tr =
				typeof B == 'string'
					? '__drizzle_migrations'
					: (B.migrationsTable ?? '__drizzle_migrations'),
			rr = typeof B == 'string' ? 'drizzle' : (B.migrationsSchema ?? 'drizzle'),
			ir = sql`
			CREATE TABLE IF NOT EXISTS ${sql.identifier(rr)}.${sql.identifier(tr)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at bigint
			)
		`;
		await I.execute(sql`CREATE SCHEMA IF NOT EXISTS ${sql.identifier(rr)}`), await I.execute(ir);
		const dr = (
			await I.all(
				sql`select id, hash, created_at from ${sql.identifier(rr)}.${sql.identifier(tr)} order by created_at desc limit 1`
			)
		)[0];
		await I.transaction(async (mr) => {
			for await (const _r of t)
				if (!dr || Number(dr.created_at) < _r.folderMillis) {
					for (const fr of _r.sql) await mr.execute(sql.raw(fr));
					await mr.execute(
						sql`insert into ${sql.identifier(rr)}.${sql.identifier(tr)} ("hash", "created_at") values(${_r.hash}, ${_r.folderMillis})`
					);
				}
		});
	}
	escapeName(t) {
		return `"${t}"`;
	}
	escapeParam(t) {
		return `$${t + 1}`;
	}
	escapeString(t) {
		return `'${t.replace(/'/g, "''")}'`;
	}
	buildWithCTE(t) {
		if (!(t != null && t.length)) return;
		const I = [sql`with `];
		for (const [B, tr] of t.entries())
			I.push(sql`${sql.identifier(tr._.alias)} as (${tr._.sql})`),
				B < t.length - 1 && I.push(sql`, `);
		return I.push(sql` `), sql.join(I);
	}
	buildDeleteQuery({ table: t, where: I, returning: B, withList: tr }) {
		const rr = this.buildWithCTE(tr),
			ir = B ? sql` returning ${this.buildSelection(B, { isSingleTable: !0 })}` : void 0,
			lr = I ? sql` where ${I}` : void 0;
		return sql`${rr}delete from ${t}${lr}${ir}`;
	}
	buildUpdateSet(t, I) {
		const B = t[Table.Symbol.Columns],
			tr = Object.keys(B).filter((ir) => {
				var lr;
				return I[ir] !== void 0 || ((lr = B[ir]) == null ? void 0 : lr.onUpdateFn) !== void 0;
			}),
			rr = tr.length;
		return sql.join(
			tr.flatMap((ir, lr) => {
				const dr = B[ir],
					mr = I[ir] ?? sql.param(dr.onUpdateFn(), dr),
					_r = sql`${sql.identifier(dr.name)} = ${mr}`;
				return lr < rr - 1 ? [_r, sql.raw(', ')] : [_r];
			})
		);
	}
	buildUpdateQuery({ table: t, set: I, where: B, returning: tr, withList: rr }) {
		const ir = this.buildWithCTE(rr),
			lr = this.buildUpdateSet(t, I),
			dr = tr ? sql` returning ${this.buildSelection(tr, { isSingleTable: !0 })}` : void 0,
			mr = B ? sql` where ${B}` : void 0;
		return sql`${ir}update ${t} set ${lr}${mr}${dr}`;
	}
	buildSelection(t, { isSingleTable: I = !1 } = {}) {
		const B = t.length,
			tr = t.flatMap(({ field: rr }, ir) => {
				const lr = [];
				if (is(rr, SQL.Aliased) && rr.isSelectionField) lr.push(sql.identifier(rr.fieldAlias));
				else if (is(rr, SQL.Aliased) || is(rr, SQL)) {
					const dr = is(rr, SQL.Aliased) ? rr.sql : rr;
					I
						? lr.push(
								new SQL(
									dr.queryChunks.map((mr) => (is(mr, PgColumn) ? sql.identifier(mr.name) : mr))
								)
							)
						: lr.push(dr),
						is(rr, SQL.Aliased) && lr.push(sql` as ${sql.identifier(rr.fieldAlias)}`);
				} else is(rr, Column) && (I ? lr.push(sql.identifier(rr.name)) : lr.push(rr));
				return ir < B - 1 && lr.push(sql`, `), lr;
			});
		return sql.join(tr);
	}
	buildSelectQuery({
		withList: t,
		fields: I,
		fieldsFlat: B,
		where: tr,
		having: rr,
		table: ir,
		joins: lr,
		orderBy: dr,
		groupBy: mr,
		limit: _r,
		offset: fr,
		lockingClause: hr,
		distinct: Mr,
		setOperators: gr
	}) {
		const yr = B ?? orderSelectedFields(I);
		for (const Qr of yr)
			if (
				is(Qr.field, Column) &&
				getTableName(Qr.field.table) !==
					(is(ir, Subquery)
						? ir._.alias
						: is(ir, PgViewBase)
							? ir[ViewBaseConfig].name
							: is(ir, SQL)
								? void 0
								: getTableName(ir)) &&
				!((ts) =>
					lr == null
						? void 0
						: lr.some(
								({ alias: rs }) =>
									rs === (ts[Table.Symbol.IsAlias] ? getTableName(ts) : ts[Table.Symbol.BaseName])
							))(Qr.field.table)
			) {
				const ts = getTableName(Qr.field.table);
				throw new Error(
					`Your "${Qr.path.join('->')}" field references a column "${ts}"."${Qr.field.name}", but the table "${ts}" is not part of the query! Did you forget to join it?`
				);
			}
		const xr = !lr || lr.length === 0,
			vr = this.buildWithCTE(t);
		let Sr;
		Mr && (Sr = Mr === !0 ? sql` distinct` : sql` distinct on (${sql.join(Mr.on, sql`, `)})`);
		const wr = this.buildSelection(yr, { isSingleTable: xr }),
			br = (() => {
				if (is(ir, Table) && ir[Table.Symbol.OriginalName] !== ir[Table.Symbol.Name]) {
					let Qr = sql`${sql.identifier(ir[Table.Symbol.OriginalName])}`;
					return (
						ir[Table.Symbol.Schema] && (Qr = sql`${sql.identifier(ir[Table.Symbol.Schema])}.${Qr}`),
						sql`${Qr} ${sql.identifier(ir[Table.Symbol.Name])}`
					);
				}
				return ir;
			})(),
			Fr = [];
		if (lr)
			for (const [Qr, ts] of lr.entries()) {
				Qr === 0 && Fr.push(sql` `);
				const rs = ts.table,
					ss = ts.lateral ? sql` lateral` : void 0;
				if (is(rs, PgTable)) {
					const ns = rs[PgTable.Symbol.Name],
						os = rs[PgTable.Symbol.Schema],
						ls = rs[PgTable.Symbol.OriginalName],
						as = ns === ls ? void 0 : ts.alias;
					Fr.push(
						sql`${sql.raw(ts.joinType)} join${ss} ${os ? sql`${sql.identifier(os)}.` : void 0}${sql.identifier(ls)}${as && sql` ${sql.identifier(as)}`} on ${ts.on}`
					);
				} else if (is(rs, View)) {
					const ns = rs[ViewBaseConfig].name,
						os = rs[ViewBaseConfig].schema,
						ls = rs[ViewBaseConfig].originalName,
						as = ns === ls ? void 0 : ts.alias;
					Fr.push(
						sql`${sql.raw(ts.joinType)} join${ss} ${os ? sql`${sql.identifier(os)}.` : void 0}${sql.identifier(ls)}${as && sql` ${sql.identifier(as)}`} on ${ts.on}`
					);
				} else Fr.push(sql`${sql.raw(ts.joinType)} join${ss} ${rs} on ${ts.on}`);
				Qr < lr.length - 1 && Fr.push(sql` `);
			}
		const Ir = sql.join(Fr),
			kr = tr ? sql` where ${tr}` : void 0,
			Or = rr ? sql` having ${rr}` : void 0;
		let Lr;
		dr && dr.length > 0 && (Lr = sql` order by ${sql.join(dr, sql`, `)}`);
		let Gr;
		mr && mr.length > 0 && (Gr = sql` group by ${sql.join(mr, sql`, `)}`);
		const es =
				typeof _r == 'object' || (typeof _r == 'number' && _r >= 0) ? sql` limit ${_r}` : void 0,
			Dr = fr ? sql` offset ${fr}` : void 0,
			zr = sql.empty();
		if (hr) {
			const Qr = sql` for ${sql.raw(hr.strength)}`;
			hr.config.of &&
				Qr.append(
					sql` of ${sql.join(Array.isArray(hr.config.of) ? hr.config.of : [hr.config.of], sql`, `)}`
				),
				hr.config.noWait
					? Qr.append(sql` no wait`)
					: hr.config.skipLocked && Qr.append(sql` skip locked`),
				zr.append(Qr);
		}
		const Jr = sql`${vr}select${Sr} ${wr} from ${br}${Ir}${kr}${Gr}${Or}${Lr}${es}${Dr}${zr}`;
		return gr.length > 0 ? this.buildSetOperations(Jr, gr) : Jr;
	}
	buildSetOperations(t, I) {
		const [B, ...tr] = I;
		if (!B) throw new Error('Cannot pass undefined values to any set operator');
		return tr.length === 0
			? this.buildSetOperationQuery({ leftSelect: t, setOperator: B })
			: this.buildSetOperations(this.buildSetOperationQuery({ leftSelect: t, setOperator: B }), tr);
	}
	buildSetOperationQuery({
		leftSelect: t,
		setOperator: { type: I, isAll: B, rightSelect: tr, limit: rr, orderBy: ir, offset: lr }
	}) {
		const dr = sql`(${t.getSQL()}) `,
			mr = sql`(${tr.getSQL()})`;
		let _r;
		if (ir && ir.length > 0) {
			const gr = [];
			for (const yr of ir)
				if (is(yr, PgColumn)) gr.push(sql.identifier(yr.name));
				else if (is(yr, SQL)) {
					for (let xr = 0; xr < yr.queryChunks.length; xr++) {
						const vr = yr.queryChunks[xr];
						is(vr, PgColumn) && (yr.queryChunks[xr] = sql.identifier(vr.name));
					}
					gr.push(sql`${yr}`);
				} else gr.push(sql`${yr}`);
			_r = sql` order by ${sql.join(gr, sql`, `)} `;
		}
		const fr =
				typeof rr == 'object' || (typeof rr == 'number' && rr >= 0) ? sql` limit ${rr}` : void 0,
			hr = sql.raw(`${I} ${B ? 'all ' : ''}`),
			Mr = lr ? sql` offset ${lr}` : void 0;
		return sql`${dr}${hr}${mr}${_r}${fr}${Mr}`;
	}
	buildInsertQuery({ table: t, values: I, onConflict: B, returning: tr, withList: rr }) {
		const ir = [],
			lr = t[Table.Symbol.Columns],
			dr = Object.entries(lr).filter(([gr, yr]) => !yr.shouldDisableInsert()),
			mr = dr.map(([, gr]) => sql.identifier(gr.name));
		for (const [gr, yr] of I.entries()) {
			const xr = [];
			for (const [vr, Sr] of dr) {
				const wr = yr[vr];
				if (wr === void 0 || (is(wr, Param) && wr.value === void 0))
					if (Sr.defaultFn !== void 0) {
						const br = Sr.defaultFn(),
							Fr = is(br, SQL) ? br : sql.param(br, Sr);
						xr.push(Fr);
					} else if (!Sr.default && Sr.onUpdateFn !== void 0) {
						const br = Sr.onUpdateFn(),
							Fr = is(br, SQL) ? br : sql.param(br, Sr);
						xr.push(Fr);
					} else xr.push(sql`default`);
				else xr.push(wr);
			}
			ir.push(xr), gr < I.length - 1 && ir.push(sql`, `);
		}
		const _r = this.buildWithCTE(rr),
			fr = sql.join(ir),
			hr = tr ? sql` returning ${this.buildSelection(tr, { isSingleTable: !0 })}` : void 0,
			Mr = B ? sql` on conflict ${B}` : void 0;
		return sql`${_r}insert into ${t} ${mr} values ${fr}${Mr}${hr}`;
	}
	buildRefreshMaterializedViewQuery({ view: t, concurrently: I, withNoData: B }) {
		const tr = I ? sql` concurrently` : void 0,
			rr = B ? sql` with no data` : void 0;
		return sql`refresh materialized view${tr} ${t}${rr}`;
	}
	prepareTyping(t) {
		return is(t, PgJsonb) || is(t, PgJson)
			? 'json'
			: is(t, PgNumeric)
				? 'decimal'
				: is(t, PgTime)
					? 'time'
					: is(t, PgTimestamp) || is(t, PgTimestampString)
						? 'timestamp'
						: is(t, PgDate) || is(t, PgDateString)
							? 'date'
							: is(t, PgUUID)
								? 'uuid'
								: 'none';
	}
	sqlToQuery(t, I) {
		return t.toQuery({
			escapeName: this.escapeName,
			escapeParam: this.escapeParam,
			escapeString: this.escapeString,
			prepareTyping: this.prepareTyping,
			invokeSource: I
		});
	}
	buildRelationalQueryWithoutPK({
		fullSchema: t,
		schema: I,
		tableNamesMap: B,
		table: tr,
		tableConfig: rr,
		queryConfig: ir,
		tableAlias: lr,
		nestedQueryRelation: dr,
		joinOn: mr
	}) {
		let _r = [],
			fr,
			hr,
			Mr = [],
			gr;
		const yr = [];
		if (ir === !0)
			_r = Object.entries(rr.columns).map(([Sr, wr]) => ({
				dbKey: wr.name,
				tsKey: Sr,
				field: aliasedTableColumn(wr, lr),
				relationTableTsKey: void 0,
				isJson: !1,
				selection: []
			}));
		else {
			const vr = Object.fromEntries(
				Object.entries(rr.columns).map(([kr, Or]) => [kr, aliasedTableColumn(Or, lr)])
			);
			if (ir.where) {
				const kr = typeof ir.where == 'function' ? ir.where(vr, getOperators()) : ir.where;
				gr = kr && mapColumnsInSQLToAlias(kr, lr);
			}
			const Sr = [];
			let wr = [];
			if (ir.columns) {
				let kr = !1;
				for (const [Or, Lr] of Object.entries(ir.columns))
					Lr !== void 0 && Or in rr.columns && (!kr && Lr === !0 && (kr = !0), wr.push(Or));
				wr.length > 0 &&
					(wr = kr
						? wr.filter((Or) => {
								var Lr;
								return ((Lr = ir.columns) == null ? void 0 : Lr[Or]) === !0;
							})
						: Object.keys(rr.columns).filter((Or) => !wr.includes(Or)));
			} else wr = Object.keys(rr.columns);
			for (const kr of wr) {
				const Or = rr.columns[kr];
				Sr.push({ tsKey: kr, value: Or });
			}
			let br = [];
			ir.with &&
				(br = Object.entries(ir.with)
					.filter((kr) => !!kr[1])
					.map(([kr, Or]) => ({ tsKey: kr, queryConfig: Or, relation: rr.relations[kr] })));
			let Fr;
			if (ir.extras) {
				Fr = typeof ir.extras == 'function' ? ir.extras(vr, { sql }) : ir.extras;
				for (const [kr, Or] of Object.entries(Fr))
					Sr.push({ tsKey: kr, value: mapColumnsInAliasedSQLToAlias(Or, lr) });
			}
			for (const { tsKey: kr, value: Or } of Sr)
				_r.push({
					dbKey: is(Or, SQL.Aliased) ? Or.fieldAlias : rr.columns[kr].name,
					tsKey: kr,
					field: is(Or, Column) ? aliasedTableColumn(Or, lr) : Or,
					relationTableTsKey: void 0,
					isJson: !1,
					selection: []
				});
			let Ir =
				typeof ir.orderBy == 'function'
					? ir.orderBy(vr, getOrderByOperators())
					: (ir.orderBy ?? []);
			Array.isArray(Ir) || (Ir = [Ir]),
				(Mr = Ir.map((kr) =>
					is(kr, Column) ? aliasedTableColumn(kr, lr) : mapColumnsInSQLToAlias(kr, lr)
				)),
				(fr = ir.limit),
				(hr = ir.offset);
			for (const { tsKey: kr, queryConfig: Or, relation: Lr } of br) {
				const Gr = normalizeRelation(I, B, Lr),
					es = getTableUniqueName(Lr.referencedTable),
					Dr = B[es],
					zr = `${lr}_${kr}`,
					Jr = and(
						...Gr.fields.map((rs, ss) =>
							eq(aliasedTableColumn(Gr.references[ss], zr), aliasedTableColumn(rs, lr))
						)
					),
					Qr = this.buildRelationalQueryWithoutPK({
						fullSchema: t,
						schema: I,
						tableNamesMap: B,
						table: t[Dr],
						tableConfig: I[Dr],
						queryConfig: is(Lr, One) ? (Or === !0 ? { limit: 1 } : { ...Or, limit: 1 }) : Or,
						tableAlias: zr,
						joinOn: Jr,
						nestedQueryRelation: Lr
					}),
					ts = sql`${sql.identifier(zr)}.${sql.identifier('data')}`.as(kr);
				yr.push({
					on: sql`true`,
					table: new Subquery(Qr.sql, {}, zr),
					alias: zr,
					joinType: 'left',
					lateral: !0
				}),
					_r.push({
						dbKey: kr,
						tsKey: kr,
						field: ts,
						relationTableTsKey: Dr,
						isJson: !0,
						selection: Qr.selection
					});
			}
		}
		if (_r.length === 0)
			throw new DrizzleError({ message: `No fields selected for table "${rr.tsName}" ("${lr}")` });
		let xr;
		if (((gr = and(mr, gr)), dr)) {
			let vr = sql`json_build_array(${sql.join(
				_r.map(({ field: br, tsKey: Fr, isJson: Ir }) =>
					Ir
						? sql`${sql.identifier(`${lr}_${Fr}`)}.${sql.identifier('data')}`
						: is(br, SQL.Aliased)
							? br.sql
							: br
				),
				sql`, `
			)})`;
			is(dr, Many) &&
				(vr = sql`coalesce(json_agg(${vr}${Mr.length > 0 ? sql` order by ${sql.join(Mr, sql`, `)}` : void 0}), '[]'::json)`);
			const Sr = [
				{
					dbKey: 'data',
					tsKey: 'data',
					field: vr.as('data'),
					isJson: !0,
					relationTableTsKey: rr.tsName,
					selection: _r
				}
			];
			fr !== void 0 || hr !== void 0 || Mr.length > 0
				? ((xr = this.buildSelectQuery({
						table: aliasedTable(tr, lr),
						fields: {},
						fieldsFlat: [{ path: [], field: sql.raw('*') }],
						where: gr,
						limit: fr,
						offset: hr,
						orderBy: Mr,
						setOperators: []
					})),
					(gr = void 0),
					(fr = void 0),
					(hr = void 0),
					(Mr = []))
				: (xr = aliasedTable(tr, lr)),
				(xr = this.buildSelectQuery({
					table: is(xr, PgTable) ? xr : new Subquery(xr, {}, lr),
					fields: {},
					fieldsFlat: Sr.map(({ field: br }) => ({
						path: [],
						field: is(br, Column) ? aliasedTableColumn(br, lr) : br
					})),
					joins: yr,
					where: gr,
					limit: fr,
					offset: hr,
					orderBy: Mr,
					setOperators: []
				}));
		} else
			xr = this.buildSelectQuery({
				table: aliasedTable(tr, lr),
				fields: {},
				fieldsFlat: _r.map(({ field: vr }) => ({
					path: [],
					field: is(vr, Column) ? aliasedTableColumn(vr, lr) : vr
				})),
				joins: yr,
				where: gr,
				limit: fr,
				offset: hr,
				orderBy: Mr,
				setOperators: []
			});
		return { tableTsKey: rr.tsName, sql: xr, selection: _r };
	}
}
Ar(PgDialect, ua, 'PgDialect');
var da;
da = entityKind;
const _s = class _s {
	constructor(t) {
		Ar(this, 'config');
		this.config = { ...t };
	}
	get(t, I) {
		if (I === '_') return { ...t._, selectedFields: new Proxy(t._.selectedFields, this) };
		if (I === ViewBaseConfig)
			return {
				...t[ViewBaseConfig],
				selectedFields: new Proxy(t[ViewBaseConfig].selectedFields, this)
			};
		if (typeof I == 'symbol') return t[I];
		const tr = (
			is(t, Subquery) ? t._.selectedFields : is(t, View) ? t[ViewBaseConfig].selectedFields : t
		)[I];
		if (is(tr, SQL.Aliased)) {
			if (this.config.sqlAliasedBehavior === 'sql' && !tr.isSelectionField) return tr.sql;
			const rr = tr.clone();
			return (rr.isSelectionField = !0), rr;
		}
		if (is(tr, SQL)) {
			if (this.config.sqlBehavior === 'sql') return tr;
			throw new Error(
				`You tried to reference "${I}" field from a subquery, which is a raw SQL field, but it doesn't have an alias declared. Please add an alias to the field using ".as('alias')" method.`
			);
		}
		return is(tr, Column)
			? this.config.alias
				? new Proxy(
						tr,
						new ColumnAliasProxyHandler(
							new Proxy(
								tr.table,
								new TableAliasProxyHandler(this.config.alias, this.config.replaceOriginalName ?? !1)
							)
						)
					)
				: tr
			: typeof tr != 'object' || tr === null
				? tr
				: new Proxy(tr, new _s(this.config));
	}
};
Ar(_s, da, 'SelectionProxyHandler');
let SelectionProxyHandler = _s;
var ca;
ca = entityKind;
class TypedQueryBuilder {
	getSelectedFields() {
		return this._.selectedFields;
	}
}
Ar(TypedQueryBuilder, ca, 'TypedQueryBuilder');
var pa;
pa = entityKind;
class PgSelectBuilder {
	constructor(t) {
		Ar(this, 'fields');
		Ar(this, 'session');
		Ar(this, 'dialect');
		Ar(this, 'withList', []);
		Ar(this, 'distinct');
		(this.fields = t.fields),
			(this.session = t.session),
			(this.dialect = t.dialect),
			t.withList && (this.withList = t.withList),
			(this.distinct = t.distinct);
	}
	from(t) {
		const I = !!this.fields;
		let B;
		return (
			this.fields
				? (B = this.fields)
				: is(t, Subquery)
					? (B = Object.fromEntries(Object.keys(t._.selectedFields).map((tr) => [tr, t[tr]])))
					: is(t, PgViewBase)
						? (B = t[ViewBaseConfig].selectedFields)
						: is(t, SQL)
							? (B = {})
							: (B = getTableColumns(t)),
			new PgSelectBase({
				table: t,
				fields: B,
				isPartialSelect: I,
				session: this.session,
				dialect: this.dialect,
				withList: this.withList,
				distinct: this.distinct
			})
		);
	}
}
Ar(PgSelectBuilder, pa, 'PgSelectBuilder');
var ma, _a;
class PgSelectQueryBuilderBase extends ((_a = TypedQueryBuilder), (ma = entityKind), _a) {
	constructor({
		table: I,
		fields: B,
		isPartialSelect: tr,
		session: rr,
		dialect: ir,
		withList: lr,
		distinct: dr
	}) {
		super();
		Ar(this, '_');
		Ar(this, 'config');
		Ar(this, 'joinsNotNullableMap');
		Ar(this, 'tableName');
		Ar(this, 'isPartialSelect');
		Ar(this, 'session');
		Ar(this, 'dialect');
		Ar(this, 'leftJoin', this.createJoin('left'));
		Ar(this, 'rightJoin', this.createJoin('right'));
		Ar(this, 'innerJoin', this.createJoin('inner'));
		Ar(this, 'fullJoin', this.createJoin('full'));
		Ar(this, 'union', this.createSetOperator('union', !1));
		Ar(this, 'unionAll', this.createSetOperator('union', !0));
		Ar(this, 'intersect', this.createSetOperator('intersect', !1));
		Ar(this, 'intersectAll', this.createSetOperator('intersect', !0));
		Ar(this, 'except', this.createSetOperator('except', !1));
		Ar(this, 'exceptAll', this.createSetOperator('except', !0));
		(this.config = { withList: lr, table: I, fields: { ...B }, distinct: dr, setOperators: [] }),
			(this.isPartialSelect = tr),
			(this.session = rr),
			(this.dialect = ir),
			(this._ = { selectedFields: B }),
			(this.tableName = getTableLikeName(I)),
			(this.joinsNotNullableMap =
				typeof this.tableName == 'string' ? { [this.tableName]: !0 } : {});
	}
	createJoin(I) {
		return (B, tr) => {
			var lr;
			const rr = this.tableName,
				ir = getTableLikeName(B);
			if (
				typeof ir == 'string' &&
				(lr = this.config.joins) != null &&
				lr.some((dr) => dr.alias === ir)
			)
				throw new Error(`Alias "${ir}" is already used in this query`);
			if (
				!this.isPartialSelect &&
				(Object.keys(this.joinsNotNullableMap).length === 1 &&
					typeof rr == 'string' &&
					(this.config.fields = { [rr]: this.config.fields }),
				typeof ir == 'string' && !is(B, SQL))
			) {
				const dr = is(B, Subquery)
					? B._.selectedFields
					: is(B, View)
						? B[ViewBaseConfig].selectedFields
						: B[Table.Symbol.Columns];
				this.config.fields[ir] = dr;
			}
			if (
				(typeof tr == 'function' &&
					(tr = tr(
						new Proxy(
							this.config.fields,
							new SelectionProxyHandler({ sqlAliasedBehavior: 'sql', sqlBehavior: 'sql' })
						)
					)),
				this.config.joins || (this.config.joins = []),
				this.config.joins.push({ on: tr, table: B, joinType: I, alias: ir }),
				typeof ir == 'string')
			)
				switch (I) {
					case 'left': {
						this.joinsNotNullableMap[ir] = !1;
						break;
					}
					case 'right': {
						(this.joinsNotNullableMap = Object.fromEntries(
							Object.entries(this.joinsNotNullableMap).map(([dr]) => [dr, !1])
						)),
							(this.joinsNotNullableMap[ir] = !0);
						break;
					}
					case 'inner': {
						this.joinsNotNullableMap[ir] = !0;
						break;
					}
					case 'full': {
						(this.joinsNotNullableMap = Object.fromEntries(
							Object.entries(this.joinsNotNullableMap).map(([dr]) => [dr, !1])
						)),
							(this.joinsNotNullableMap[ir] = !1);
						break;
					}
				}
			return this;
		};
	}
	createSetOperator(I, B) {
		return (tr) => {
			const rr = typeof tr == 'function' ? tr(getPgSetOperators()) : tr;
			if (!haveSameKeys(this.getSelectedFields(), rr.getSelectedFields()))
				throw new Error(
					'Set operator error (union / intersect / except): selected fields are not the same or are in a different order'
				);
			return this.config.setOperators.push({ type: I, isAll: B, rightSelect: rr }), this;
		};
	}
	addSetOperators(I) {
		return this.config.setOperators.push(...I), this;
	}
	where(I) {
		return (
			typeof I == 'function' &&
				(I = I(
					new Proxy(
						this.config.fields,
						new SelectionProxyHandler({ sqlAliasedBehavior: 'sql', sqlBehavior: 'sql' })
					)
				)),
			(this.config.where = I),
			this
		);
	}
	having(I) {
		return (
			typeof I == 'function' &&
				(I = I(
					new Proxy(
						this.config.fields,
						new SelectionProxyHandler({ sqlAliasedBehavior: 'sql', sqlBehavior: 'sql' })
					)
				)),
			(this.config.having = I),
			this
		);
	}
	groupBy(...I) {
		if (typeof I[0] == 'function') {
			const B = I[0](
				new Proxy(
					this.config.fields,
					new SelectionProxyHandler({ sqlAliasedBehavior: 'alias', sqlBehavior: 'sql' })
				)
			);
			this.config.groupBy = Array.isArray(B) ? B : [B];
		} else this.config.groupBy = I;
		return this;
	}
	orderBy(...I) {
		if (typeof I[0] == 'function') {
			const B = I[0](
					new Proxy(
						this.config.fields,
						new SelectionProxyHandler({ sqlAliasedBehavior: 'alias', sqlBehavior: 'sql' })
					)
				),
				tr = Array.isArray(B) ? B : [B];
			this.config.setOperators.length > 0
				? (this.config.setOperators.at(-1).orderBy = tr)
				: (this.config.orderBy = tr);
		} else {
			const B = I;
			this.config.setOperators.length > 0
				? (this.config.setOperators.at(-1).orderBy = B)
				: (this.config.orderBy = B);
		}
		return this;
	}
	limit(I) {
		return (
			this.config.setOperators.length > 0
				? (this.config.setOperators.at(-1).limit = I)
				: (this.config.limit = I),
			this
		);
	}
	offset(I) {
		return (
			this.config.setOperators.length > 0
				? (this.config.setOperators.at(-1).offset = I)
				: (this.config.offset = I),
			this
		);
	}
	for(I, B = {}) {
		return (this.config.lockingClause = { strength: I, config: B }), this;
	}
	getSQL() {
		return this.dialect.buildSelectQuery(this.config);
	}
	toSQL() {
		const { typings: I, ...B } = this.dialect.sqlToQuery(this.getSQL());
		return B;
	}
	as(I) {
		return new Proxy(
			new Subquery(this.getSQL(), this.config.fields, I),
			new SelectionProxyHandler({ alias: I, sqlAliasedBehavior: 'alias', sqlBehavior: 'error' })
		);
	}
	getSelectedFields() {
		return new Proxy(
			this.config.fields,
			new SelectionProxyHandler({
				alias: this.tableName,
				sqlAliasedBehavior: 'alias',
				sqlBehavior: 'error'
			})
		);
	}
	$dynamic() {
		return this;
	}
}
Ar(PgSelectQueryBuilderBase, ma, 'PgSelectQueryBuilder');
var fa, ha;
class PgSelectBase extends ((ha = PgSelectQueryBuilderBase), (fa = entityKind), ha) {
	constructor() {
		super(...arguments);
		Ar(this, 'execute', (I) =>
			tracer.startActiveSpan('drizzle.operation', () => this._prepare().execute(I))
		);
	}
	_prepare(I) {
		const { session: B, config: tr, dialect: rr, joinsNotNullableMap: ir } = this;
		if (!B)
			throw new Error(
				'Cannot execute a query on a query builder. Please use a database instance instead.'
			);
		return tracer.startActiveSpan('drizzle.prepareQuery', () => {
			const lr = orderSelectedFields(tr.fields),
				dr = B.prepareQuery(rr.sqlToQuery(this.getSQL()), lr, I, !0);
			return (dr.joinsNotNullableMap = ir), dr;
		});
	}
	prepare(I) {
		return this._prepare(I);
	}
}
Ar(PgSelectBase, fa, 'PgSelect');
applyMixins(PgSelectBase, [QueryPromise]);
function createSetOperator(e, t) {
	return (I, B, ...tr) => {
		const rr = [B, ...tr].map((ir) => ({ type: e, isAll: t, rightSelect: ir }));
		for (const ir of rr)
			if (!haveSameKeys(I.getSelectedFields(), ir.rightSelect.getSelectedFields()))
				throw new Error(
					'Set operator error (union / intersect / except): selected fields are not the same or are in a different order'
				);
		return I.addSetOperators(rr);
	};
}
const getPgSetOperators = () => ({ union, unionAll, intersect, intersectAll, except, exceptAll }),
	union = createSetOperator('union', !1),
	unionAll = createSetOperator('union', !0),
	intersect = createSetOperator('intersect', !1),
	intersectAll = createSetOperator('intersect', !0),
	except = createSetOperator('except', !1),
	exceptAll = createSetOperator('except', !0);
var ga;
ga = entityKind;
class QueryBuilder {
	constructor() {
		Ar(this, 'dialect');
	}
	$with(t) {
		const I = this;
		return {
			as(B) {
				return (
					typeof B == 'function' && (B = B(I)),
					new Proxy(
						new WithSubquery(B.getSQL(), B.getSelectedFields(), t, !0),
						new SelectionProxyHandler({
							alias: t,
							sqlAliasedBehavior: 'alias',
							sqlBehavior: 'error'
						})
					)
				);
			}
		};
	}
	with(...t) {
		const I = this;
		function B(ir) {
			return new PgSelectBuilder({
				fields: ir ?? void 0,
				session: void 0,
				dialect: I.getDialect(),
				withList: t
			});
		}
		function tr(ir) {
			return new PgSelectBuilder({
				fields: ir ?? void 0,
				session: void 0,
				dialect: I.getDialect(),
				distinct: !0
			});
		}
		function rr(ir, lr) {
			return new PgSelectBuilder({
				fields: lr ?? void 0,
				session: void 0,
				dialect: I.getDialect(),
				distinct: { on: ir }
			});
		}
		return { select: B, selectDistinct: tr, selectDistinctOn: rr };
	}
	select(t) {
		return new PgSelectBuilder({
			fields: t ?? void 0,
			session: void 0,
			dialect: this.getDialect()
		});
	}
	selectDistinct(t) {
		return new PgSelectBuilder({
			fields: t ?? void 0,
			session: void 0,
			dialect: this.getDialect(),
			distinct: !0
		});
	}
	selectDistinctOn(t, I) {
		return new PgSelectBuilder({
			fields: I ?? void 0,
			session: void 0,
			dialect: this.getDialect(),
			distinct: { on: t }
		});
	}
	getDialect() {
		return this.dialect || (this.dialect = new PgDialect()), this.dialect;
	}
}
Ar(QueryBuilder, ga, 'PgQueryBuilder');
var Ma, wa;
class PgRefreshMaterializedView extends ((wa = QueryPromise), (Ma = entityKind), wa) {
	constructor(I, B, tr) {
		super();
		Ar(this, 'config');
		Ar(this, 'execute', (I) =>
			tracer.startActiveSpan('drizzle.operation', () => this._prepare().execute(I))
		);
		(this.session = B), (this.dialect = tr), (this.config = { view: I });
	}
	concurrently() {
		if (this.config.withNoData !== void 0)
			throw new Error('Cannot use concurrently and withNoData together');
		return (this.config.concurrently = !0), this;
	}
	withNoData() {
		if (this.config.concurrently !== void 0)
			throw new Error('Cannot use concurrently and withNoData together');
		return (this.config.withNoData = !0), this;
	}
	getSQL() {
		return this.dialect.buildRefreshMaterializedViewQuery(this.config);
	}
	toSQL() {
		const { typings: I, ...B } = this.dialect.sqlToQuery(this.getSQL());
		return B;
	}
	_prepare(I) {
		return tracer.startActiveSpan('drizzle.prepareQuery', () =>
			this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), void 0, I, !0)
		);
	}
	prepare(I) {
		return this._prepare(I);
	}
}
Ar(PgRefreshMaterializedView, Ma, 'PgRefreshMaterializedView');
var Sa;
Sa = entityKind;
class PgUpdateBuilder {
	constructor(t, I, B, tr) {
		(this.table = t), (this.session = I), (this.dialect = B), (this.withList = tr);
	}
	set(t) {
		return new PgUpdateBase(
			this.table,
			mapUpdateSet(this.table, t),
			this.session,
			this.dialect,
			this.withList
		);
	}
}
Ar(PgUpdateBuilder, Sa, 'PgUpdateBuilder');
var Ca, Ea;
class PgUpdateBase extends ((Ea = QueryPromise), (Ca = entityKind), Ea) {
	constructor(I, B, tr, rr, ir) {
		super();
		Ar(this, 'config');
		Ar(this, 'execute', (I) => this._prepare().execute(I));
		(this.session = tr), (this.dialect = rr), (this.config = { set: B, table: I, withList: ir });
	}
	where(I) {
		return (this.config.where = I), this;
	}
	returning(I = this.config.table[Table.Symbol.Columns]) {
		return (this.config.returning = orderSelectedFields(I)), this;
	}
	getSQL() {
		return this.dialect.buildUpdateQuery(this.config);
	}
	toSQL() {
		const { typings: I, ...B } = this.dialect.sqlToQuery(this.getSQL());
		return B;
	}
	_prepare(I) {
		return this.session.prepareQuery(
			this.dialect.sqlToQuery(this.getSQL()),
			this.config.returning,
			I,
			!0
		);
	}
	prepare(I) {
		return this._prepare(I);
	}
	$dynamic() {
		return this;
	}
}
Ar(PgUpdateBase, Ca, 'PgUpdate');
var ya;
ya = entityKind;
class RelationalQueryBuilder {
	constructor(t, I, B, tr, rr, ir, lr) {
		(this.fullSchema = t),
			(this.schema = I),
			(this.tableNamesMap = B),
			(this.table = tr),
			(this.tableConfig = rr),
			(this.dialect = ir),
			(this.session = lr);
	}
	findMany(t) {
		return new PgRelationalQuery(
			this.fullSchema,
			this.schema,
			this.tableNamesMap,
			this.table,
			this.tableConfig,
			this.dialect,
			this.session,
			t || {},
			'many'
		);
	}
	findFirst(t) {
		return new PgRelationalQuery(
			this.fullSchema,
			this.schema,
			this.tableNamesMap,
			this.table,
			this.tableConfig,
			this.dialect,
			this.session,
			t ? { ...t, limit: 1 } : { limit: 1 },
			'first'
		);
	}
}
Ar(RelationalQueryBuilder, ya, 'PgRelationalQueryBuilder');
var xa, ba;
class PgRelationalQuery extends ((ba = QueryPromise), (xa = entityKind), ba) {
	constructor(t, I, B, tr, rr, ir, lr, dr, mr) {
		super(),
			(this.fullSchema = t),
			(this.schema = I),
			(this.tableNamesMap = B),
			(this.table = tr),
			(this.tableConfig = rr),
			(this.dialect = ir),
			(this.session = lr),
			(this.config = dr),
			(this.mode = mr);
	}
	_prepare(t) {
		return tracer.startActiveSpan('drizzle.prepareQuery', () => {
			const { query: I, builtQuery: B } = this._toSQL();
			return this.session.prepareQuery(B, void 0, t, !0, (tr, rr) => {
				const ir = tr.map((lr) =>
					mapRelationalRow(this.schema, this.tableConfig, lr, I.selection, rr)
				);
				return this.mode === 'first' ? ir[0] : ir;
			});
		});
	}
	prepare(t) {
		return this._prepare(t);
	}
	_getQuery() {
		return this.dialect.buildRelationalQueryWithoutPK({
			fullSchema: this.fullSchema,
			schema: this.schema,
			tableNamesMap: this.tableNamesMap,
			table: this.table,
			tableConfig: this.tableConfig,
			queryConfig: this.config,
			tableAlias: this.tableConfig.tsName
		});
	}
	getSQL() {
		return this._getQuery().sql;
	}
	_toSQL() {
		const t = this._getQuery(),
			I = this.dialect.sqlToQuery(t.sql);
		return { query: t, builtQuery: I };
	}
	toSQL() {
		return this._toSQL().builtQuery;
	}
	execute() {
		return tracer.startActiveSpan('drizzle.operation', () => this._prepare().execute());
	}
}
Ar(PgRelationalQuery, xa, 'PgRelationalQuery');
var va, Aa;
class PgRaw extends ((Aa = QueryPromise), (va = entityKind), Aa) {
	constructor(t, I, B, tr) {
		super(), (this.execute = t), (this.sql = I), (this.query = B), (this.mapBatchResult = tr);
	}
	getSQL() {
		return this.sql;
	}
	getQuery() {
		return this.query;
	}
	mapResult(t, I) {
		return I ? this.mapBatchResult(t) : t;
	}
	_prepare() {
		return this;
	}
	isResponseInArrayMode() {
		return !1;
	}
}
Ar(PgRaw, va, 'PgRaw');
var ka;
ka = entityKind;
class PgDatabase {
	constructor(t, I, B) {
		Ar(this, 'query');
		if (
			((this.dialect = t),
			(this.session = I),
			(this._ = B
				? { schema: B.schema, fullSchema: B.fullSchema, tableNamesMap: B.tableNamesMap, session: I }
				: { schema: void 0, fullSchema: {}, tableNamesMap: {}, session: I }),
			(this.query = {}),
			this._.schema)
		)
			for (const [tr, rr] of Object.entries(this._.schema))
				this.query[tr] = new RelationalQueryBuilder(
					B.fullSchema,
					this._.schema,
					this._.tableNamesMap,
					B.fullSchema[tr],
					rr,
					t,
					I
				);
	}
	$with(t) {
		return {
			as(I) {
				return (
					typeof I == 'function' && (I = I(new QueryBuilder())),
					new Proxy(
						new WithSubquery(I.getSQL(), I.getSelectedFields(), t, !0),
						new SelectionProxyHandler({
							alias: t,
							sqlAliasedBehavior: 'alias',
							sqlBehavior: 'error'
						})
					)
				);
			}
		};
	}
	with(...t) {
		const I = this;
		function B(mr) {
			return new PgSelectBuilder({
				fields: mr ?? void 0,
				session: I.session,
				dialect: I.dialect,
				withList: t
			});
		}
		function tr(mr) {
			return new PgSelectBuilder({
				fields: mr ?? void 0,
				session: I.session,
				dialect: I.dialect,
				withList: t,
				distinct: !0
			});
		}
		function rr(mr, _r) {
			return new PgSelectBuilder({
				fields: _r ?? void 0,
				session: I.session,
				dialect: I.dialect,
				withList: t,
				distinct: { on: mr }
			});
		}
		function ir(mr) {
			return new PgUpdateBuilder(mr, I.session, I.dialect, t);
		}
		function lr(mr) {
			return new PgInsertBuilder(mr, I.session, I.dialect, t);
		}
		function dr(mr) {
			return new PgDeleteBase(mr, I.session, I.dialect, t);
		}
		return {
			select: B,
			selectDistinct: tr,
			selectDistinctOn: rr,
			update: ir,
			insert: lr,
			delete: dr
		};
	}
	select(t) {
		return new PgSelectBuilder({
			fields: t ?? void 0,
			session: this.session,
			dialect: this.dialect
		});
	}
	selectDistinct(t) {
		return new PgSelectBuilder({
			fields: t ?? void 0,
			session: this.session,
			dialect: this.dialect,
			distinct: !0
		});
	}
	selectDistinctOn(t, I) {
		return new PgSelectBuilder({
			fields: I ?? void 0,
			session: this.session,
			dialect: this.dialect,
			distinct: { on: t }
		});
	}
	update(t) {
		return new PgUpdateBuilder(t, this.session, this.dialect);
	}
	insert(t) {
		return new PgInsertBuilder(t, this.session, this.dialect);
	}
	delete(t) {
		return new PgDeleteBase(t, this.session, this.dialect);
	}
	refreshMaterializedView(t) {
		return new PgRefreshMaterializedView(t, this.session, this.dialect);
	}
	execute(t) {
		const I = t.getSQL(),
			B = this.dialect.sqlToQuery(I),
			tr = this.session.prepareQuery(B, void 0, void 0, !1);
		return new PgRaw(
			() => tr.execute(),
			I,
			B,
			(rr) => tr.mapResult(rr, !0)
		);
	}
	transaction(t, I) {
		return this.session.transaction(t, I);
	}
}
Ar(PgDatabase, ka, 'PgDatabase');
var Ta;
Ta = entityKind;
class PgPreparedQuery {
	constructor(t) {
		Ar(this, 'joinsNotNullableMap');
		this.query = t;
	}
	getQuery() {
		return this.query;
	}
	mapResult(t, I) {
		return t;
	}
}
Ar(PgPreparedQuery, Ta, 'PgPreparedQuery');
var Pa;
Pa = entityKind;
class PgSession {
	constructor(t) {
		this.dialect = t;
	}
	execute(t) {
		return tracer.startActiveSpan('drizzle.operation', () =>
			tracer
				.startActiveSpan('drizzle.prepareQuery', () =>
					this.prepareQuery(this.dialect.sqlToQuery(t), void 0, void 0, !1)
				)
				.execute()
		);
	}
	all(t) {
		return this.prepareQuery(this.dialect.sqlToQuery(t), void 0, void 0, !1).all();
	}
}
Ar(PgSession, Pa, 'PgSession');
var Fa, Ia;
class PgTransaction extends ((Ia = PgDatabase), (Fa = entityKind), Ia) {
	constructor(t, I, B, tr = 0) {
		super(t, I, B), (this.schema = B), (this.nestedIndex = tr);
	}
	rollback() {
		throw new TransactionRollbackError();
	}
	getTransactionConfigSQL(t) {
		const I = [];
		return (
			t.isolationLevel && I.push(`isolation level ${t.isolationLevel}`),
			t.accessMode && I.push(t.accessMode),
			typeof t.deferrable == 'boolean' && I.push(t.deferrable ? 'deferrable' : 'not deferrable'),
			sql.raw(I.join(' '))
		);
	}
	setTransaction(t) {
		return this.session.execute(sql`set transaction ${this.getTransactionConfigSQL(t)}`);
	}
}
Ar(PgTransaction, Fa, 'PgTransaction');
var p = Object.create,
	i = Object.defineProperty,
	c = Object.getOwnPropertyDescriptor,
	f = Object.getOwnPropertyNames,
	l$2 = Object.getPrototypeOf,
	s$1 = Object.prototype.hasOwnProperty,
	a = (e) => {
		throw TypeError(e);
	},
	_$1 = (e, t, I) =>
		t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: I }) : (e[t] = I),
	d = (e, t) => () => (e && (t = e((e = 0))), t),
	D$2 = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
	F$2 = (e, t) => {
		for (var I in t) i(e, I, { get: t[I], enumerable: !0 });
	},
	g$4 = (e, t, I, B) => {
		if ((t && typeof t == 'object') || typeof t == 'function')
			for (let tr of f(t))
				!s$1.call(e, tr) &&
					tr !== I &&
					i(e, tr, { get: () => t[tr], enumerable: !(B = c(t, tr)) || B.enumerable });
		return e;
	},
	L$2 = (e, t, I) => (
		(I = e != null ? p(l$2(e)) : {}), g$4(i(I, 'default', { value: e, enumerable: !0 }), e)
	),
	P$1 = (e, t, I) => _$1(e, typeof t != 'symbol' ? t + '' : t, I),
	n = (e, t, I) => t.has(e) || a('Cannot ' + I),
	h$1 = (e, t, I) => (n(e, t, 'read from private field'), I ? I.call(e) : t.get(e)),
	R$2 = (e, t, I) =>
		t.has(e)
			? a('Cannot add the same private member more than once')
			: t instanceof WeakSet
				? t.add(e)
				: t.set(e, I),
	x$2 = (e, t, I, B) => (n(e, t, 'write to private field'), t.set(e, I), I),
	T = (e, t, I) => (n(e, t, 'access private method'), I),
	U$2 = (e, t, I, B) => ({
		set _(tr) {
			x$2(e, t, tr);
		},
		get _() {
			return h$1(e, t, B);
		}
	}),
	u$1 = d(() => {}),
	hn = {};
F$2(hn, {
	ABSTIME: () => Et,
	ACLITEM: () => Vt,
	BIT: () => Wt,
	BOOL: () => be,
	BPCHAR: () => _e$1,
	BYTEA: () => ge$1,
	CHAR: () => gt,
	CID: () => St,
	CIDR: () => Tt,
	CIRCLE: () => Ut,
	DATE: () => He$1,
	FLOAT4: () => je$1,
	FLOAT8: () => Qe$1,
	GTSVECTOR: () => rn,
	INET: () => kt,
	INT2: () => ve,
	INT4: () => Ge,
	INT8: () => we,
	INTERVAL: () => vt,
	JSON: () => Ae$1,
	JSONB: () => Ye,
	MACADDR: () => Ot,
	MACADDR8: () => Nt,
	MONEY: () => Lt,
	NUMERIC: () => Qt,
	OID: () => We$1,
	PATH: () => Mt,
	PG_DEPENDENCIES: () => en,
	PG_LSN: () => Xt,
	PG_NDISTINCT: () => Zt,
	PG_NODE_TREE: () => Bt,
	POLYGON: () => Rt,
	REFCURSOR: () => _t,
	REGCLASS: () => Yt,
	REGCONFIG: () => sn,
	REGDICTIONARY: () => an,
	REGNAMESPACE: () => on,
	REGOPER: () => Ht,
	REGOPERATOR: () => qt,
	REGPROC: () => wt,
	REGPROCEDURE: () => zt,
	REGROLE: () => un,
	REGTYPE: () => $t,
	RELTIME: () => Ct,
	SMGR: () => It,
	TEXT: () => F$1,
	TID: () => At,
	TIME: () => Ft,
	TIMESTAMP: () => qe$1,
	TIMESTAMPTZ: () => xe,
	TIMETZ: () => Gt,
	TINTERVAL: () => Pt,
	TSQUERY: () => nn,
	TSVECTOR: () => tn,
	TXID_SNAPSHOT: () => Jt,
	UUID: () => Kt,
	VARBIT: () => jt,
	VARCHAR: () => ze,
	XID: () => xt,
	XML: () => Dt,
	arrayParser: () => yn,
	arraySerializer: () => Ke$1,
	parseType: () => ue,
	parsers: () => ln,
	serializers: () => cn$1,
	types: () => $e
});
u$1();
var ht = globalThis.JSON.parse,
	bt = globalThis.JSON.stringify,
	be = 16,
	ge$1 = 17,
	gt = 18,
	we = 20,
	ve = 21,
	Ge = 23,
	wt = 24,
	F$1 = 25,
	We$1 = 26,
	At = 27,
	xt = 28,
	St = 29,
	Ae$1 = 114,
	Dt = 142,
	Bt = 194,
	It = 210,
	Mt = 602,
	Rt = 604,
	Tt = 650,
	je$1 = 700,
	Qe$1 = 701,
	Et = 702,
	Ct = 703,
	Pt = 704,
	Ut = 718,
	Nt = 774,
	Lt = 790,
	Ot = 829,
	kt = 869,
	Vt = 1033,
	_e$1 = 1042,
	ze = 1043,
	He$1 = 1082,
	Ft = 1083,
	qe$1 = 1114,
	xe = 1184,
	vt = 1186,
	Gt = 1266,
	Wt = 1560,
	jt = 1562,
	Qt = 1700,
	_t = 1790,
	zt = 2202,
	Ht = 2203,
	qt = 2204,
	Yt = 2205,
	$t = 2206,
	Kt = 2950,
	Jt = 2970,
	Xt = 3220,
	Zt = 3361,
	en = 3402,
	tn = 3614,
	nn = 3615,
	rn = 3642,
	sn = 3734,
	an = 3769,
	Ye = 3802,
	on = 4089,
	un = 4096,
	$e = {
		string: {
			to: F$1,
			from: [F$1, ze, _e$1],
			serialize: (e) => {
				if (typeof e == 'string') return e;
				if (typeof e == 'number') return e.toString();
				throw new Error('Invalid input for string type');
			},
			parse: (e) => e
		},
		number: {
			to: 0,
			from: [ve, Ge, We$1, je$1, Qe$1],
			serialize: (e) => e.toString(),
			parse: (e) => +e
		},
		bigint: {
			to: we,
			from: [we],
			serialize: (e) => e.toString(),
			parse: (e) => {
				let t = BigInt(e);
				return t < Number.MIN_SAFE_INTEGER || t > Number.MAX_SAFE_INTEGER ? t : Number(t);
			}
		},
		json: {
			to: Ae$1,
			from: [Ae$1, Ye],
			serialize: (e) => (typeof e == 'string' ? e : bt(e)),
			parse: (e) => ht(e)
		},
		boolean: {
			to: be,
			from: [be],
			serialize: (e) => {
				if (typeof e != 'boolean') throw new Error('Invalid input for boolean type');
				return e ? 't' : 'f';
			},
			parse: (e) => e === 't'
		},
		date: {
			to: xe,
			from: [He$1, qe$1, xe],
			serialize: (e) => {
				if (typeof e == 'string') return e;
				if (typeof e == 'number') return new Date(e).toISOString();
				if (e instanceof Date) return e.toISOString();
				throw new Error('Invalid input for date type');
			},
			parse: (e) => new Date(e)
		},
		bytea: {
			to: ge$1,
			from: [ge$1],
			serialize: (e) => {
				if (!(e instanceof Uint8Array)) throw new Error('Invalid input for bytea type');
				return (
					'\\x' +
					Array.from(e)
						.map((t) => t.toString(16).padStart(2, '0'))
						.join('')
				);
			},
			parse: (e) => {
				let t = e.slice(2);
				return Uint8Array.from({ length: t.length / 2 }, (I, B) =>
					parseInt(t.substring(B * 2, (B + 1) * 2), 16)
				);
			}
		}
	},
	Se = pn($e),
	ln = Se.parsers,
	cn$1 = Se.serializers;
function ue(e, t, I) {
	if (e === null) return null;
	let B = (I == null ? void 0 : I[t]) ?? Se.parsers[t];
	return B ? B(e, t) : e;
}
function pn(e) {
	return Object.keys(e).reduce(
		({ parsers: t, serializers: I }, B) => {
			let { to: tr, from: rr, serialize: ir, parse: lr } = e[B];
			return (
				(I[tr] = ir),
				(I[B] = ir),
				(t[B] = lr),
				Array.isArray(rr)
					? rr.forEach((dr) => {
							(t[dr] = lr), (I[dr] = ir);
						})
					: ((t[rr] = lr), (I[rr] = ir)),
				{ parsers: t, serializers: I }
			);
		},
		{ parsers: {}, serializers: {} }
	);
}
var dn = /\\/g,
	fn = /"/g;
function mn(e) {
	return e.replace(dn, '\\\\').replace(fn, '\\"');
}
function Ke$1(e, t, I) {
	if (Array.isArray(e) === !1) return e;
	if (!e.length) return '{}';
	let B = e[0],
		tr = I === 1020 ? ';' : ',';
	return Array.isArray(B)
		? `{${e.map((rr) => Ke$1(rr, t, I)).join(tr)}}`
		: `{${e.map((rr) => (rr === void 0 && (rr = null), rr === null ? 'null' : '"' + mn(t ? t(rr) : rr.toString()) + '"')).join(tr)}}`;
}
var he = { i: 0, char: null, str: '', quoted: !1, last: 0, p: null };
function yn(e, t, I) {
	return (he.i = he.last = 0), Je(he, e, t, I)[0];
}
function Je(e, t, I, B) {
	let tr = [],
		rr = B === 1020 ? ';' : ',';
	for (; e.i < t.length; e.i++) {
		if (((e.char = t[e.i]), e.quoted))
			e.char === '\\'
				? (e.str += t[++e.i])
				: e.char === '"'
					? (tr.push(I ? I(e.str) : e.str),
						(e.str = ''),
						(e.quoted = t[e.i + 1] === '"'),
						(e.last = e.i + 2))
					: (e.str += e.char);
		else if (e.char === '"') e.quoted = !0;
		else if (e.char === '{') (e.last = ++e.i), tr.push(Je(e, t, I, B));
		else if (e.char === '}') {
			(e.quoted = !1),
				e.last < e.i && tr.push(I ? I(t.slice(e.last, e.i)) : t.slice(e.last, e.i)),
				(e.last = e.i + 1);
			break;
		} else
			e.char === rr &&
				e.p !== '}' &&
				e.p !== '"' &&
				(tr.push(I ? I(t.slice(e.last, e.i)) : t.slice(e.last, e.i)), (e.last = e.i + 1));
		e.p = e.char;
	}
	return e.last < e.i && tr.push(I ? I(t.slice(e.last, e.i + 1)) : t.slice(e.last, e.i + 1)), tr;
}
var wn = {};
F$2(wn, { parseDescribeStatementResults: () => De, parseResults: () => bn });
u$1();
function bn(e, t, I, B) {
	let tr = [],
		rr = { rows: [], fields: [] },
		ir = 0,
		lr = { ...t, ...(I == null ? void 0 : I.parsers) };
	return (
		e.forEach((dr) => {
			switch (dr.name) {
				case 'rowDescription': {
					let mr = dr;
					rr.fields = mr.fields.map((_r) => ({ name: _r.name, dataTypeID: _r.dataTypeID }));
					break;
				}
				case 'dataRow': {
					if (!rr) break;
					let mr = dr;
					(I == null ? void 0 : I.rowMode) === 'array'
						? rr.rows.push(mr.fields.map((_r, fr) => ue(_r, rr.fields[fr].dataTypeID, lr)))
						: rr.rows.push(
								Object.fromEntries(
									mr.fields.map((_r, fr) => [
										rr.fields[fr].name,
										ue(_r, rr.fields[fr].dataTypeID, lr)
									])
								)
							);
					break;
				}
				case 'commandComplete': {
					(ir += gn(dr)),
						tr.push({ ...rr, affectedRows: ir, ...(B ? { blob: B } : {}) }),
						(rr = { rows: [], fields: [] });
					break;
				}
			}
		}),
		tr.length === 0 && tr.push({ affectedRows: 0, rows: [], fields: [] }),
		tr
	);
}
function gn(e) {
	let t = e.text.split(' ');
	switch (t[0]) {
		case 'INSERT':
			return parseInt(t[2], 10);
		case 'UPDATE':
		case 'DELETE':
		case 'COPY':
			return parseInt(t[1], 10);
		default:
			return 0;
	}
}
function De(e) {
	let t = e.find((I) => I.name === 'parameterDescription');
	return t ? t.dataTypeIDs : [];
}
var Ue$1 = {};
F$2(Ue$1, {
	AuthenticationCleartextPassword: () => G$1,
	AuthenticationMD5Password: () => W$1,
	AuthenticationOk: () => v,
	AuthenticationSASL: () => j$2,
	AuthenticationSASLContinue: () => Q,
	AuthenticationSASLFinal: () => _,
	BackendKeyDataMessage: () => J$1,
	CommandCompleteMessage: () => ee$1,
	CopyDataMessage: () => z$1,
	CopyResponse: () => H$2,
	DataRowMessage: () => te$1,
	DatabaseError: () => E,
	Field: () => q$1,
	NoticeMessage: () => ne,
	NotificationResponseMessage: () => X,
	ParameterDescriptionMessage: () => $$1,
	ParameterStatusMessage: () => K$1,
	ReadyForQueryMessage: () => Z$1,
	RowDescriptionMessage: () => Y$1,
	bindComplete: () => Ie$1,
	closeComplete: () => Me,
	copyDone: () => Pe$1,
	emptyQuery: () => Ce,
	noData: () => Re,
	parseComplete: () => Be,
	portalSuspended: () => Te$1,
	replicationStart: () => Ee
});
u$1();
var Be = { name: 'parseComplete', length: 5 },
	Ie$1 = { name: 'bindComplete', length: 5 },
	Me = { name: 'closeComplete', length: 5 },
	Re = { name: 'noData', length: 5 },
	Te$1 = { name: 'portalSuspended', length: 5 },
	Ee = { name: 'replicationStart', length: 4 },
	Ce = { name: 'emptyQuery', length: 4 },
	Pe$1 = { name: 'copyDone', length: 4 },
	v = class {
		constructor(e) {
			(this.length = e), (this.name = 'authenticationOk');
		}
	},
	G$1 = class {
		constructor(t) {
			(this.length = t), (this.name = 'authenticationCleartextPassword');
		}
	},
	W$1 = class {
		constructor(t, I) {
			(this.length = t), (this.salt = I), (this.name = 'authenticationMD5Password');
		}
	},
	j$2 = class {
		constructor(t, I) {
			(this.length = t), (this.mechanisms = I), (this.name = 'authenticationSASL');
		}
	},
	Q = class {
		constructor(e, t) {
			(this.length = e), (this.data = t), (this.name = 'authenticationSASLContinue');
		}
	},
	_ = class {
		constructor(e, t) {
			(this.length = e), (this.data = t), (this.name = 'authenticationSASLFinal');
		}
	},
	E = class extends Error {
		constructor(e, t, I) {
			super(e), (this.length = t), (this.name = I);
		}
	},
	z$1 = class {
		constructor(t, I) {
			(this.length = t), (this.chunk = I), (this.name = 'copyData');
		}
	},
	H$2 = class {
		constructor(t, I, B, tr) {
			(this.length = t), (this.name = I), (this.binary = B), (this.columnTypes = new Array(tr));
		}
	},
	q$1 = class {
		constructor(t, I, B, tr, rr, ir, lr) {
			(this.name = t),
				(this.tableID = I),
				(this.columnID = B),
				(this.dataTypeID = tr),
				(this.dataTypeSize = rr),
				(this.dataTypeModifier = ir),
				(this.format = lr);
		}
	},
	Y$1 = class {
		constructor(t, I) {
			(this.length = t),
				(this.fieldCount = I),
				(this.name = 'rowDescription'),
				(this.fields = new Array(this.fieldCount));
		}
	},
	$$1 = class {
		constructor(t, I) {
			(this.length = t),
				(this.parameterCount = I),
				(this.name = 'parameterDescription'),
				(this.dataTypeIDs = new Array(this.parameterCount));
		}
	},
	K$1 = class {
		constructor(t, I, B) {
			(this.length = t),
				(this.parameterName = I),
				(this.parameterValue = B),
				(this.name = 'parameterStatus');
		}
	},
	J$1 = class {
		constructor(t, I, B) {
			(this.length = t), (this.processID = I), (this.secretKey = B), (this.name = 'backendKeyData');
		}
	},
	X = class {
		constructor(e, t, I, B) {
			(this.length = e),
				(this.processId = t),
				(this.channel = I),
				(this.payload = B),
				(this.name = 'notification');
		}
	},
	Z$1 = class {
		constructor(t, I) {
			(this.length = t), (this.status = I), (this.name = 'readyForQuery');
		}
	},
	ee$1 = class {
		constructor(t, I) {
			(this.length = t), (this.text = I), (this.name = 'commandComplete');
		}
	},
	te$1 = class {
		constructor(t, I) {
			(this.length = t), (this.fields = I), (this.name = 'dataRow'), (this.fieldCount = I.length);
		}
	},
	ne = class {
		constructor(e, t) {
			(this.length = e), (this.message = t), (this.name = 'notice');
		}
	},
	zn = {};
F$2(zn, { Parser: () => ye, messages: () => Ue$1, serialize: () => O$1 });
u$1();
u$1();
u$1();
u$1();
function C$1(e) {
	let t = e.length;
	for (let I = e.length - 1; I >= 0; I--) {
		let B = e.charCodeAt(I);
		B > 127 && B <= 2047 ? t++ : B > 2047 && B <= 65535 && (t += 2),
			B >= 56320 && B <= 57343 && I--;
	}
	return t;
}
var b$1,
	g$3,
	U$1,
	ce$2,
	N,
	x$1,
	le,
	P,
	Xe,
	R$1 = class {
		constructor(t = 256) {
			(this.size = t),
				R$2(this, x$1),
				R$2(this, b$1),
				R$2(this, g$3, 5),
				R$2(this, U$1, !1),
				R$2(this, ce$2, new TextEncoder()),
				R$2(this, N, 0),
				x$2(this, b$1, T(this, x$1, le).call(this, t));
		}
		addInt32(t) {
			return (
				T(this, x$1, P).call(this, 4),
				h$1(this, b$1).setInt32(h$1(this, g$3), t, h$1(this, U$1)),
				x$2(this, g$3, h$1(this, g$3) + 4),
				this
			);
		}
		addInt16(t) {
			return (
				T(this, x$1, P).call(this, 2),
				h$1(this, b$1).setInt16(h$1(this, g$3), t, h$1(this, U$1)),
				x$2(this, g$3, h$1(this, g$3) + 2),
				this
			);
		}
		addCString(t) {
			return (
				t && this.addString(t),
				T(this, x$1, P).call(this, 1),
				h$1(this, b$1).setUint8(h$1(this, g$3), 0),
				U$2(this, g$3)._++,
				this
			);
		}
		addString(t = '') {
			let I = C$1(t);
			return (
				T(this, x$1, P).call(this, I),
				h$1(this, ce$2).encodeInto(t, new Uint8Array(h$1(this, b$1).buffer, h$1(this, g$3))),
				x$2(this, g$3, h$1(this, g$3) + I),
				this
			);
		}
		add(t) {
			return (
				T(this, x$1, P).call(this, t.byteLength),
				new Uint8Array(h$1(this, b$1).buffer).set(new Uint8Array(t), h$1(this, g$3)),
				x$2(this, g$3, h$1(this, g$3) + t.byteLength),
				this
			);
		}
		flush(t) {
			let I = T(this, x$1, Xe).call(this, t);
			return (
				x$2(this, g$3, 5), x$2(this, b$1, T(this, x$1, le).call(this, this.size)), new Uint8Array(I)
			);
		}
	};
(b$1 = new WeakMap()),
	(g$3 = new WeakMap()),
	(U$1 = new WeakMap()),
	(ce$2 = new WeakMap()),
	(N = new WeakMap()),
	(x$1 = new WeakSet()),
	(le = function (e) {
		return new DataView(new ArrayBuffer(e));
	}),
	(P = function (e) {
		if (h$1(this, b$1).byteLength - h$1(this, g$3) < e) {
			let t = h$1(this, b$1).buffer,
				I = t.byteLength + (t.byteLength >> 1) + e;
			x$2(this, b$1, T(this, x$1, le).call(this, I)),
				new Uint8Array(h$1(this, b$1).buffer).set(new Uint8Array(t));
		}
	}),
	(Xe = function (e) {
		if (e) {
			h$1(this, b$1).setUint8(h$1(this, N), e);
			let t = h$1(this, g$3) - (h$1(this, N) + 1);
			h$1(this, b$1).setInt32(h$1(this, N) + 1, t, h$1(this, U$1));
		}
		return h$1(this, b$1).buffer.slice(e ? 0 : 5, h$1(this, g$3));
	});
var m = new R$1(),
	An = (e) => {
		m.addInt16(3).addInt16(0);
		for (let B of Object.keys(e)) m.addCString(B).addCString(e[B]);
		m.addCString('client_encoding').addCString('UTF8');
		let t = m.addCString('').flush(),
			I = t.byteLength + 4;
		return new R$1().addInt32(I).add(t).flush();
	},
	xn = () => {
		let e = new DataView(new ArrayBuffer(8));
		return e.setInt32(0, 8, !1), e.setInt32(4, 80877103, !1), new Uint8Array(e.buffer);
	},
	Sn = (e) => m.addCString(e).flush(112),
	Dn = (e, t) => (m.addCString(e).addInt32(C$1(t)).addString(t), m.flush(112)),
	Bn = (e) => m.addString(e).flush(112),
	In = (e) => m.addCString(e).flush(81),
	Mn = [],
	Rn = (e) => {
		var B, tr;
		let t = e.name ?? '';
		t.length > 63 &&
			(console.error('Warning! Postgres only supports 63 characters for query names.'),
			console.error('You supplied %s (%s)', t, t.length),
			console.error('This can cause conflicts and silent errors executing queries'));
		let I = m
			.addCString(t)
			.addCString(e.text)
			.addInt16(((B = e.types) == null ? void 0 : B.length) ?? 0);
		return (tr = e.types) == null || tr.forEach((rr) => I.addInt32(rr)), m.flush(80);
	},
	L$1 = new R$1(),
	Tn = (e, t) => {
		for (let I = 0; I < e.length; I++) {
			let B = t ? t(e[I], I) : e[I];
			if (B === null) m.addInt16(0), L$1.addInt32(-1);
			else if (B instanceof ArrayBuffer || ArrayBuffer.isView(B)) {
				let tr = ArrayBuffer.isView(B)
					? B.buffer.slice(B.byteOffset, B.byteOffset + B.byteLength)
					: B;
				m.addInt16(1), L$1.addInt32(tr.byteLength), L$1.add(tr);
			} else m.addInt16(0), L$1.addInt32(C$1(B)), L$1.addString(B);
		}
	},
	En = (e = {}) => {
		let t = e.portal ?? '',
			I = e.statement ?? '',
			B = e.binary ?? !1,
			tr = e.values ?? Mn,
			rr = tr.length;
		return (
			m.addCString(t).addCString(I),
			m.addInt16(rr),
			Tn(tr, e.valueMapper),
			m.addInt16(rr),
			m.add(L$1.flush()),
			m.addInt16(B ? 1 : 0),
			m.flush(66)
		);
	},
	Cn = new Uint8Array([69, 0, 0, 0, 9, 0, 0, 0, 0, 0]),
	Pn = (e) => {
		if (!e || (!e.portal && !e.rows)) return Cn;
		let t = e.portal ?? '',
			I = e.rows ?? 0,
			B = C$1(t),
			tr = 4 + B + 1 + 4,
			rr = new DataView(new ArrayBuffer(1 + tr));
		return (
			rr.setUint8(0, 69),
			rr.setInt32(1, tr, !1),
			new TextEncoder().encodeInto(t, new Uint8Array(rr.buffer, 5)),
			rr.setUint8(B + 5, 0),
			rr.setUint32(rr.byteLength - 4, I, !1),
			new Uint8Array(rr.buffer)
		);
	},
	Un = (e, t) => {
		let I = new DataView(new ArrayBuffer(16));
		return (
			I.setInt32(0, 16, !1),
			I.setInt16(4, 1234, !1),
			I.setInt16(6, 5678, !1),
			I.setInt32(8, e, !1),
			I.setInt32(12, t, !1),
			new Uint8Array(I.buffer)
		);
	},
	Ne = (e, t) => {
		let I = new R$1();
		return I.addCString(t), I.flush(e);
	},
	Nn = m.addCString('P').flush(68),
	Ln = m.addCString('S').flush(68),
	On = (e) => (e.name ? Ne(68, `${e.type}${e.name ?? ''}`) : e.type === 'P' ? Nn : Ln),
	kn = (e) => {
		let t = `${e.type}${e.name ?? ''}`;
		return Ne(67, t);
	},
	Vn = (e) => m.add(e).flush(100),
	Fn = (e) => Ne(102, e),
	pe$1 = (e) => new Uint8Array([e, 0, 0, 0, 4]),
	vn = pe$1(72),
	Gn = pe$1(83),
	Wn = pe$1(88),
	jn = pe$1(99),
	O$1 = {
		startup: An,
		password: Sn,
		requestSsl: xn,
		sendSASLInitialResponseMessage: Dn,
		sendSCRAMClientFinalMessage: Bn,
		query: In,
		parse: Rn,
		bind: En,
		execute: Pn,
		describe: On,
		close: kn,
		flush: () => vn,
		sync: () => Gn,
		end: () => Wn,
		copyData: Vn,
		copyDone: () => jn,
		copyFail: Fn,
		cancel: Un
	};
u$1();
u$1();
var Le = { text: 0, binary: 1 };
u$1();
var Qn = new ArrayBuffer(0),
	M$1,
	w$1,
	fe,
	me$1,
	re$1,
	de = class {
		constructor(e = 0) {
			R$2(this, M$1, new DataView(Qn)),
				R$2(this, w$1),
				R$2(this, fe, 'utf-8'),
				R$2(this, me$1, new TextDecoder(h$1(this, fe))),
				R$2(this, re$1, !1),
				x$2(this, w$1, e);
		}
		setBuffer(e, t) {
			x$2(this, w$1, e), x$2(this, M$1, new DataView(t));
		}
		int16() {
			let e = h$1(this, M$1).getInt16(h$1(this, w$1), h$1(this, re$1));
			return x$2(this, w$1, h$1(this, w$1) + 2), e;
		}
		byte() {
			let e = h$1(this, M$1).getUint8(h$1(this, w$1));
			return U$2(this, w$1)._++, e;
		}
		int32() {
			let e = h$1(this, M$1).getInt32(h$1(this, w$1), h$1(this, re$1));
			return x$2(this, w$1, h$1(this, w$1) + 4), e;
		}
		string(e) {
			return h$1(this, me$1).decode(this.bytes(e));
		}
		cstring() {
			let e = h$1(this, w$1),
				t = e;
			for (; h$1(this, M$1).getUint8(t++) !== 0; );
			let I = this.string(t - e - 1);
			return x$2(this, w$1, t), I;
		}
		bytes(e) {
			let t = h$1(this, M$1).buffer.slice(h$1(this, w$1), h$1(this, w$1) + e);
			return x$2(this, w$1, h$1(this, w$1) + e), new Uint8Array(t);
		}
	};
(M$1 = new WeakMap()),
	(w$1 = new WeakMap()),
	(fe = new WeakMap()),
	(me$1 = new WeakMap()),
	(re$1 = new WeakMap());
var Oe = 1,
	_n = 4,
	Ze = Oe + _n,
	et = new ArrayBuffer(0),
	A,
	S$1,
	D$1,
	o$1,
	l$1,
	tt,
	nt,
	rt,
	st,
	it,
	at,
	ot,
	ke$1,
	ut,
	lt,
	ct,
	pt,
	dt,
	ft,
	mt,
	yt,
	Ve$1,
	ye = class {
		constructor() {
			R$2(this, l$1),
				R$2(this, A, new DataView(et)),
				R$2(this, S$1, 0),
				R$2(this, D$1, 0),
				R$2(this, o$1, new de());
		}
		parse(e, t) {
			T(this, l$1, tt).call(
				this,
				ArrayBuffer.isView(e) ? e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength) : e
			);
			let I = h$1(this, D$1) + h$1(this, S$1),
				B = h$1(this, D$1);
			for (; B + Ze <= I; ) {
				let tr = h$1(this, A).getUint8(B),
					rr = h$1(this, A).getUint32(B + Oe, !1),
					ir = Oe + rr;
				if (ir + B <= I) {
					let lr = T(this, l$1, nt).call(this, B + Ze, tr, rr, h$1(this, A).buffer);
					t(lr), (B += ir);
				} else break;
			}
			B === I
				? (x$2(this, A, new DataView(et)), x$2(this, S$1, 0), x$2(this, D$1, 0))
				: (x$2(this, S$1, I - B), x$2(this, D$1, B));
		}
	};
(A = new WeakMap()),
	(S$1 = new WeakMap()),
	(D$1 = new WeakMap()),
	(o$1 = new WeakMap()),
	(l$1 = new WeakSet()),
	(tt = function (e) {
		if (h$1(this, S$1) > 0) {
			let t = h$1(this, S$1) + e.byteLength;
			if (t + h$1(this, D$1) > h$1(this, A).byteLength) {
				let I;
				if (t <= h$1(this, A).byteLength && h$1(this, D$1) >= h$1(this, S$1))
					I = h$1(this, A).buffer;
				else {
					let B = h$1(this, A).byteLength * 2;
					for (; t >= B; ) B *= 2;
					I = new ArrayBuffer(B);
				}
				new Uint8Array(I).set(new Uint8Array(h$1(this, A).buffer, h$1(this, D$1), h$1(this, S$1))),
					x$2(this, A, new DataView(I)),
					x$2(this, D$1, 0);
			}
			new Uint8Array(h$1(this, A).buffer).set(new Uint8Array(e), h$1(this, D$1) + h$1(this, S$1)),
				x$2(this, S$1, t);
		} else x$2(this, A, new DataView(e)), x$2(this, D$1, 0), x$2(this, S$1, e.byteLength);
	}),
	(nt = function (e, t, I, B) {
		switch (t) {
			case 50:
				return Ie$1;
			case 49:
				return Be;
			case 51:
				return Me;
			case 110:
				return Re;
			case 115:
				return Te$1;
			case 99:
				return Pe$1;
			case 87:
				return Ee;
			case 73:
				return Ce;
			case 68:
				return T(this, l$1, dt).call(this, e, I, B);
			case 67:
				return T(this, l$1, st).call(this, e, I, B);
			case 90:
				return T(this, l$1, rt).call(this, e, I, B);
			case 65:
				return T(this, l$1, ut).call(this, e, I, B);
			case 82:
				return T(this, l$1, yt).call(this, e, I, B);
			case 83:
				return T(this, l$1, ft).call(this, e, I, B);
			case 75:
				return T(this, l$1, mt).call(this, e, I, B);
			case 69:
				return T(this, l$1, Ve$1).call(this, e, I, B, 'error');
			case 78:
				return T(this, l$1, Ve$1).call(this, e, I, B, 'notice');
			case 84:
				return T(this, l$1, lt).call(this, e, I, B);
			case 116:
				return T(this, l$1, pt).call(this, e, I, B);
			case 71:
				return T(this, l$1, at).call(this, e, I, B);
			case 72:
				return T(this, l$1, ot).call(this, e, I, B);
			case 100:
				return T(this, l$1, it).call(this, e, I, B);
			default:
				return new E('received invalid response: ' + t.toString(16), I, 'error');
		}
	}),
	(rt = function (e, t, I) {
		h$1(this, o$1).setBuffer(e, I);
		let B = h$1(this, o$1).string(1);
		return new Z$1(t, B);
	}),
	(st = function (e, t, I) {
		h$1(this, o$1).setBuffer(e, I);
		let B = h$1(this, o$1).cstring();
		return new ee$1(t, B);
	}),
	(it = function (e, t, I) {
		let B = I.slice(e, e + (t - 4));
		return new z$1(t, new Uint8Array(B));
	}),
	(at = function (e, t, I) {
		return T(this, l$1, ke$1).call(this, e, t, I, 'copyInResponse');
	}),
	(ot = function (e, t, I) {
		return T(this, l$1, ke$1).call(this, e, t, I, 'copyOutResponse');
	}),
	(ke$1 = function (e, t, I, B) {
		h$1(this, o$1).setBuffer(e, I);
		let tr = h$1(this, o$1).byte() !== 0,
			rr = h$1(this, o$1).int16(),
			ir = new H$2(t, B, tr, rr);
		for (let lr = 0; lr < rr; lr++) ir.columnTypes[lr] = h$1(this, o$1).int16();
		return ir;
	}),
	(ut = function (e, t, I) {
		h$1(this, o$1).setBuffer(e, I);
		let B = h$1(this, o$1).int32(),
			tr = h$1(this, o$1).cstring(),
			rr = h$1(this, o$1).cstring();
		return new X(t, B, tr, rr);
	}),
	(lt = function (e, t, I) {
		h$1(this, o$1).setBuffer(e, I);
		let B = h$1(this, o$1).int16(),
			tr = new Y$1(t, B);
		for (let rr = 0; rr < B; rr++) tr.fields[rr] = T(this, l$1, ct).call(this);
		return tr;
	}),
	(ct = function () {
		let e = h$1(this, o$1).cstring(),
			t = h$1(this, o$1).int32(),
			I = h$1(this, o$1).int16(),
			B = h$1(this, o$1).int32(),
			tr = h$1(this, o$1).int16(),
			rr = h$1(this, o$1).int32(),
			ir = h$1(this, o$1).int16() === 0 ? Le.text : Le.binary;
		return new q$1(e, t, I, B, tr, rr, ir);
	}),
	(pt = function (e, t, I) {
		h$1(this, o$1).setBuffer(e, I);
		let B = h$1(this, o$1).int16(),
			tr = new $$1(t, B);
		for (let rr = 0; rr < B; rr++) tr.dataTypeIDs[rr] = h$1(this, o$1).int32();
		return tr;
	}),
	(dt = function (e, t, I) {
		h$1(this, o$1).setBuffer(e, I);
		let B = h$1(this, o$1).int16(),
			tr = new Array(B);
		for (let rr = 0; rr < B; rr++) {
			let ir = h$1(this, o$1).int32();
			tr[rr] = ir === -1 ? null : h$1(this, o$1).string(ir);
		}
		return new te$1(t, tr);
	}),
	(ft = function (e, t, I) {
		h$1(this, o$1).setBuffer(e, I);
		let B = h$1(this, o$1).cstring(),
			tr = h$1(this, o$1).cstring();
		return new K$1(t, B, tr);
	}),
	(mt = function (e, t, I) {
		h$1(this, o$1).setBuffer(e, I);
		let B = h$1(this, o$1).int32(),
			tr = h$1(this, o$1).int32();
		return new J$1(t, B, tr);
	}),
	(yt = function (e, t, I) {
		h$1(this, o$1).setBuffer(e, I);
		let B = h$1(this, o$1).int32();
		switch (B) {
			case 0:
				return new v(t);
			case 3:
				return new G$1(t);
			case 5:
				return new W$1(t, h$1(this, o$1).bytes(4));
			case 10: {
				let tr = [];
				for (;;) {
					let rr = h$1(this, o$1).cstring();
					if (rr.length === 0) return new j$2(t, tr);
					tr.push(rr);
				}
			}
			case 11:
				return new Q(t, h$1(this, o$1).string(t - 8));
			case 12:
				return new _(t, h$1(this, o$1).string(t - 8));
			default:
				throw new Error('Unknown authenticationOk message type ' + B);
		}
	}),
	(Ve$1 = function (e, t, I, B) {
		h$1(this, o$1).setBuffer(e, I);
		let tr = {},
			rr = h$1(this, o$1).string(1);
		for (; rr !== '\0'; ) (tr[rr] = h$1(this, o$1).cstring()), (rr = h$1(this, o$1).string(1));
		let ir = tr.M,
			lr = B === 'notice' ? new ne(t, ir) : new E(ir, t, B);
		return (
			(lr.severity = tr.S),
			(lr.code = tr.C),
			(lr.detail = tr.D),
			(lr.hint = tr.H),
			(lr.position = tr.P),
			(lr.internalPosition = tr.p),
			(lr.internalQuery = tr.q),
			(lr.where = tr.W),
			(lr.schema = tr.s),
			(lr.table = tr.t),
			(lr.column = tr.c),
			(lr.dataType = tr.d),
			(lr.constraint = tr.n),
			(lr.file = tr.F),
			(lr.line = tr.L),
			(lr.routine = tr.R),
			lr
		);
	});
u$1();
var Fe$1 =
		typeof process == 'object' &&
		typeof process.versions == 'object' &&
		typeof process.versions.node == 'string',
	se$1;
async function Rr() {
	if (Fe$1 || se$1) return;
	let e = new URL(
		'' + new URL('../assets/postgres.CyuUVpXN.wasm', import.meta.url).href,
		import.meta.url
	);
	se$1 = fetch(e);
}
var k$1;
async function Tr(e, t) {
	if (t || k$1)
		return (
			WebAssembly.instantiate(t || k$1, e),
			{ instance: await WebAssembly.instantiate(t || k$1, e), module: t || k$1 }
		);
	let I = new URL(
		'' + new URL('../assets/postgres.CyuUVpXN.wasm', import.meta.url).href,
		import.meta.url
	);
	if (Fe$1) {
		let B = await (
				await __vitePreload(
					async () => {
						const { readFile: ir } = await import('./BIHI7g3E.js');
						return { readFile: ir };
					},
					[],
					import.meta.url
				)
			).readFile(I),
			{ module: tr, instance: rr } = await WebAssembly.instantiate(B, e);
		return (k$1 = tr), { instance: rr, module: tr };
	} else {
		se$1 || (se$1 = fetch(I));
		let B = await se$1,
			{ module: tr, instance: rr } = await WebAssembly.instantiateStreaming(B, e);
		return (k$1 = tr), { instance: rr, module: tr };
	}
}
async function Er() {
	let e = new URL(
		'' + new URL('../assets/postgres.CkP7QCDB.data', import.meta.url).href,
		import.meta.url
	);
	return Fe$1
		? (
				await (
					await __vitePreload(
						async () => {
							const { readFile: t } = await import('./BIHI7g3E.js');
							return { readFile: t };
						},
						[],
						import.meta.url
					)
				).readFile(e)
			).buffer
		: (await fetch(e)).arrayBuffer();
}
var Cr = () => {
	var I, B;
	if ((I = globalThis.crypto) != null && I.randomUUID) return globalThis.crypto.randomUUID();
	let e = new Uint8Array(16);
	if ((B = globalThis.crypto) != null && B.getRandomValues) globalThis.crypto.getRandomValues(e);
	else for (let tr = 0; tr < e.length; tr++) e[tr] = Math.floor(Math.random() * 256);
	(e[6] = (e[6] & 15) | 64), (e[8] = (e[8] & 63) | 128);
	let t = [];
	return (
		e.forEach((tr) => {
			t.push(tr.toString(16).padStart(2, '0'));
		}),
		t.slice(0, 4).join('') +
			'-' +
			t.slice(4, 6).join('') +
			'-' +
			t.slice(6, 8).join('') +
			'-' +
			t.slice(8, 10).join('') +
			'-' +
			t.slice(10).join('')
	);
};
async function Pr(e, t, I, B) {
	if (!I || I.length === 0) return t;
	B = B ?? e;
	let tr;
	try {
		await e.execProtocol(O$1.parse({ text: t }), { syncToFs: !1 }),
			(tr = De((await e.execProtocol(O$1.describe({ type: 'S' }), { syncToFs: !1 })).messages));
	} finally {
		await e.execProtocol(O$1.sync(), { syncToFs: !1 });
	}
	let rr = t.replace(/\$([0-9]+)/g, (ir, lr) => '%' + lr + 'L');
	return (
		await B.query(
			`SELECT format($1, ${I.map((ir, lr) => `$${lr + 2}`).join(', ')}) as query`,
			[rr, ...I],
			{ paramTypes: [F$1, ...tr] }
		)
	).rows[0].query;
}
function Ur(e) {
	let t,
		I = !1,
		B = async () => {
			if (!t) {
				I = !1;
				return;
			}
			I = !0;
			let { args: tr, resolve: rr, reject: ir } = t;
			t = void 0;
			try {
				let lr = await e(...tr);
				rr(lr);
			} catch (lr) {
				ir(lr);
			} finally {
				B();
			}
		};
	return async (...tr) => {
		t && t.resolve(void 0);
		let rr = new Promise((ir, lr) => {
			t = { args: tr, resolve: ir, reject: lr };
		});
		return I || B(), rr;
	};
}
function Nr(e) {
	let t;
	return (
		e.startsWith('"') && e.endsWith('"')
			? (t = e.substring(1, e.length - 1))
			: (t = e.toLowerCase()),
		t
	);
}
u$1();
var o = { part: 'part', container: 'container' };
function s(e, t, ...I) {
	let B = e.length - 1,
		tr = I.length - 1;
	if (tr !== -1) {
		if (tr === 0) {
			e[B] = e[B] + I[0] + t;
			return;
		}
		(e[B] = e[B] + I[0]), e.push(...I.slice(1, tr)), e.push(I[tr] + t);
	}
}
function y(e, ...t) {
	let I = [e[0]];
	I.raw = [e.raw[0]];
	let B = [];
	for (let tr = 0; tr < t.length; tr++) {
		let rr = t[tr],
			ir = tr + 1;
		if ((rr == null ? void 0 : rr._templateType) === o.part) {
			s(I, e[ir], rr.str), s(I.raw, e.raw[ir], rr.str);
			continue;
		}
		if ((rr == null ? void 0 : rr._templateType) === o.container) {
			s(I, e[ir], ...rr.strings), s(I.raw, e.raw[ir], ...rr.strings.raw), B.push(...rr.values);
			continue;
		}
		I.push(e[ir]), I.raw.push(e.raw[ir]), B.push(rr);
	}
	return { _templateType: 'container', strings: I, values: B };
}
function g$2(e, ...t) {
	let { strings: I, values: B } = y(e, ...t);
	return { query: [I[0], ...B.flatMap((tr, rr) => [`$${rr + 1}`, I[rr + 1]])].join(''), params: B };
}
u$1();
var b,
	u,
	r,
	l,
	g$1,
	h,
	R,
	z = class {
		constructor() {
			R$2(this, r),
				(this.serializers = { ...cn$1 }),
				(this.parsers = { ...ln }),
				R$2(this, b, !1),
				R$2(this, u, !1);
		}
		async _initArrayTypes({ force: e = !1 } = {}) {
			if (h$1(this, b) && !e) return;
			x$2(this, b, !0);
			let t = await this.query(`
      SELECT b.oid, b.typarray
      FROM pg_catalog.pg_type a
      LEFT JOIN pg_catalog.pg_type b ON b.oid = a.typelem
      WHERE a.typcategory = 'A'
      GROUP BY b.oid, b.typarray
      ORDER BY b.oid
    `);
			for (let I of t.rows)
				(this.serializers[I.typarray] = (B) => Ke$1(B, this.serializers[I.oid], I.typarray)),
					(this.parsers[I.typarray] = (B) => yn(B, this.parsers[I.oid], I.typarray));
		}
		async refreshArrayTypes() {
			await this._initArrayTypes({ force: !0 });
		}
		async query(e, t, I) {
			return (
				await this._checkReady(),
				await this._runExclusiveTransaction(async () => await T(this, r, g$1).call(this, e, t, I))
			);
		}
		async sql(e, ...t) {
			let { query: I, params: B } = g$2(e, ...t);
			return await this.query(I, B);
		}
		async exec(e, t) {
			return (
				await this._checkReady(),
				await this._runExclusiveTransaction(async () => await T(this, r, h).call(this, e, t))
			);
		}
		async describeQuery(e, t) {
			try {
				await T(this, r, l).call(
					this,
					O$1.parse({ text: e, types: t == null ? void 0 : t.paramTypes }),
					t
				);
				let I = await T(this, r, l).call(this, O$1.describe({ type: 'S' }), t),
					B = I.messages.find((lr) => lr.name === 'parameterDescription'),
					tr = I.messages.find((lr) => lr.name === 'rowDescription'),
					rr =
						(B == null
							? void 0
							: B.dataTypeIDs.map((lr) => ({
									dataTypeID: lr,
									serializer: this.serializers[lr]
								}))) ?? [],
					ir =
						(tr == null
							? void 0
							: tr.fields.map((lr) => ({
									name: lr.name,
									dataTypeID: lr.dataTypeID,
									parser: this.parsers[lr.dataTypeID]
								}))) ?? [];
				return { queryParams: rr, resultFields: ir };
			} finally {
				await T(this, r, l).call(this, O$1.sync(), t);
			}
		}
		async transaction(e) {
			return (
				await this._checkReady(),
				await this._runExclusiveTransaction(async () => {
					await T(this, r, h).call(this, 'BEGIN'), x$2(this, u, !0);
					let t = !1,
						I = () => {
							if (t) throw new Error('Transaction is closed');
						},
						B = {
							query: async (tr, rr, ir) => (I(), await T(this, r, g$1).call(this, tr, rr, ir)),
							sql: async (tr, ...rr) => {
								let { query: ir, params: lr } = g$2(tr, ...rr);
								return await T(this, r, g$1).call(this, ir, lr);
							},
							exec: async (tr, rr) => (I(), await T(this, r, h).call(this, tr, rr)),
							rollback: async () => {
								I(), await T(this, r, h).call(this, 'ROLLBACK'), (t = !0);
							},
							get closed() {
								return t;
							}
						};
					try {
						let tr = await e(B);
						return t || ((t = !0), await T(this, r, h).call(this, 'COMMIT')), x$2(this, u, !1), tr;
					} catch (tr) {
						throw (t || (await T(this, r, h).call(this, 'ROLLBACK')), x$2(this, u, !1), tr);
					}
				})
			);
		}
		async runExclusive(e) {
			return await this._runExclusiveQuery(e);
		}
	};
(b = new WeakMap()),
	(u = new WeakMap()),
	(r = new WeakSet()),
	(l = async function (e, t = {}) {
		return await this.execProtocol(e, { ...t, syncToFs: !1 });
	}),
	(g$1 = async function (e, t = [], I) {
		return await this._runExclusiveQuery(async () => {
			T(this, r, R).call(this, 'runQuery', e, t, I),
				await this._handleBlob(I == null ? void 0 : I.blob);
			let B;
			try {
				let { messages: rr } = await T(this, r, l).call(
						this,
						O$1.parse({ text: e, types: I == null ? void 0 : I.paramTypes }),
						I
					),
					ir = De((await T(this, r, l).call(this, O$1.describe({ type: 'S' }), I)).messages),
					lr = t.map((dr, mr) => {
						var hr;
						let _r = ir[mr];
						if (dr == null) return null;
						let fr =
							((hr = I == null ? void 0 : I.serializers) == null ? void 0 : hr[_r]) ??
							this.serializers[_r];
						return fr ? fr(dr) : dr.toString();
					});
				B = [
					...rr,
					...(await T(this, r, l).call(this, O$1.bind({ values: lr }), I)).messages,
					...(await T(this, r, l).call(this, O$1.describe({ type: 'P' }), I)).messages,
					...(await T(this, r, l).call(this, O$1.execute({}), I)).messages
				];
			} finally {
				await T(this, r, l).call(this, O$1.sync(), I);
			}
			await this._cleanupBlob(), h$1(this, u) || (await this.syncToFs());
			let tr = await this._getWrittenBlob();
			return bn(B, this.parsers, I, tr)[0];
		});
	}),
	(h = async function (e, t) {
		return await this._runExclusiveQuery(async () => {
			T(this, r, R).call(this, 'runExec', e, t),
				await this._handleBlob(t == null ? void 0 : t.blob);
			let I;
			try {
				I = (await T(this, r, l).call(this, O$1.query(e), t)).messages;
			} finally {
				await T(this, r, l).call(this, O$1.sync(), t);
			}
			this._cleanupBlob(), h$1(this, u) || (await this.syncToFs());
			let B = await this._getWrittenBlob();
			return bn(I, this.parsers, t, B);
		});
	}),
	(R = function (...e) {
		this.debug > 0 && console.log(...e);
	});
var w = D$2((e, t) => {
		u$1();
		var I = 9007199254740991,
			B = (function (vr) {
				return vr;
			})();
		function tr(vr) {
			return vr === B;
		}
		function rr(vr) {
			return typeof vr == 'string' || Object.prototype.toString.call(vr) == '[object String]';
		}
		function ir(vr) {
			return Object.prototype.toString.call(vr) == '[object Date]';
		}
		function lr(vr) {
			return vr !== null && typeof vr == 'object';
		}
		function dr(vr) {
			return typeof vr == 'function';
		}
		function mr(vr) {
			return typeof vr == 'number' && vr > -1 && vr % 1 == 0 && vr <= I;
		}
		function _r(vr) {
			return Object.prototype.toString.call(vr) == '[object Array]';
		}
		function fr(vr) {
			return lr(vr) && !dr(vr) && mr(vr.length);
		}
		function hr(vr) {
			return Object.prototype.toString.call(vr) == '[object ArrayBuffer]';
		}
		function Mr(vr, Sr) {
			return Array.prototype.map.call(vr, Sr);
		}
		function gr(vr, Sr) {
			var wr = B;
			return (
				dr(Sr) &&
					Array.prototype.every.call(vr, function (br, Fr, Ir) {
						var kr = Sr(br, Fr, Ir);
						return kr && (wr = br), !kr;
					}),
				wr
			);
		}
		function yr(vr) {
			return Object.assign.apply(null, arguments);
		}
		function xr(vr) {
			var Sr, wr, br;
			if (rr(vr)) {
				for (wr = vr.length, br = new Uint8Array(wr), Sr = 0; Sr < wr; Sr++)
					br[Sr] = vr.charCodeAt(Sr) & 255;
				return br;
			}
			return hr(vr)
				? new Uint8Array(vr)
				: lr(vr) && hr(vr.buffer)
					? new Uint8Array(vr.buffer)
					: fr(vr)
						? new Uint8Array(vr)
						: lr(vr) && dr(vr.toString)
							? xr(vr.toString())
							: new Uint8Array();
		}
		(t.exports.MAX_SAFE_INTEGER = I),
			(t.exports.isUndefined = tr),
			(t.exports.isString = rr),
			(t.exports.isObject = lr),
			(t.exports.isDateTime = ir),
			(t.exports.isFunction = dr),
			(t.exports.isArray = _r),
			(t.exports.isArrayLike = fr),
			(t.exports.isArrayBuffer = hr),
			(t.exports.map = Mr),
			(t.exports.find = gr),
			(t.exports.extend = yr),
			(t.exports.toUint8Array = xr);
	}),
	x = D$2((e, t) => {
		u$1();
		var I = '\0';
		t.exports = {
			NULL_CHAR: I,
			TMAGIC: 'ustar' + I + '00',
			OLDGNU_MAGIC: 'ustar  ' + I,
			REGTYPE: 0,
			LNKTYPE: 1,
			SYMTYPE: 2,
			CHRTYPE: 3,
			BLKTYPE: 4,
			DIRTYPE: 5,
			FIFOTYPE: 6,
			CONTTYPE: 7,
			TSUID: parseInt('4000', 8),
			TSGID: parseInt('2000', 8),
			TSVTX: parseInt('1000', 8),
			TUREAD: parseInt('0400', 8),
			TUWRITE: parseInt('0200', 8),
			TUEXEC: parseInt('0100', 8),
			TGREAD: parseInt('0040', 8),
			TGWRITE: parseInt('0020', 8),
			TGEXEC: parseInt('0010', 8),
			TOREAD: parseInt('0004', 8),
			TOWRITE: parseInt('0002', 8),
			TOEXEC: parseInt('0001', 8),
			TPERMALL: parseInt('0777', 8),
			TPERMMASK: parseInt('0777', 8)
		};
	}),
	L = D$2((e, t) => {
		u$1();
		var I = w(),
			B = x(),
			tr = 512,
			rr = B.TPERMALL,
			ir = 0,
			lr = 0,
			dr = [
				[
					'name',
					100,
					0,
					function (Sr, wr) {
						return fr(Sr[wr[0]], wr[1]);
					},
					function (Sr, wr, br) {
						return gr(Sr.slice(wr, wr + br[1]));
					}
				],
				[
					'mode',
					8,
					100,
					function (Sr, wr) {
						var br = Sr[wr[0]] || rr;
						return (br = br & B.TPERMMASK), hr(br, wr[1], rr);
					},
					function (Sr, wr, br) {
						var Fr = yr(Sr.slice(wr, wr + br[1]));
						return (Fr &= B.TPERMMASK), Fr;
					}
				],
				[
					'uid',
					8,
					108,
					function (Sr, wr) {
						return hr(Sr[wr[0]], wr[1], ir);
					},
					function (Sr, wr, br) {
						return yr(Sr.slice(wr, wr + br[1]));
					}
				],
				[
					'gid',
					8,
					116,
					function (Sr, wr) {
						return hr(Sr[wr[0]], wr[1], lr);
					},
					function (Sr, wr, br) {
						return yr(Sr.slice(wr, wr + br[1]));
					}
				],
				[
					'size',
					12,
					124,
					function (Sr, wr) {
						return hr(Sr.data.length, wr[1]);
					},
					function (Sr, wr, br) {
						return yr(Sr.slice(wr, wr + br[1]));
					}
				],
				[
					'modifyTime',
					12,
					136,
					function (Sr, wr) {
						return Mr(Sr[wr[0]], wr[1]);
					},
					function (Sr, wr, br) {
						return xr(Sr.slice(wr, wr + br[1]));
					}
				],
				[
					'checksum',
					8,
					148,
					function (Sr, wr) {
						return '        ';
					},
					function (Sr, wr, br) {
						return yr(Sr.slice(wr, wr + br[1]));
					}
				],
				[
					'type',
					1,
					156,
					function (Sr, wr) {
						return '' + ((parseInt(Sr[wr[0]], 10) || 0) % 8);
					},
					function (Sr, wr, br) {
						return (parseInt(String.fromCharCode(Sr[wr]), 10) || 0) % 8;
					}
				],
				[
					'linkName',
					100,
					157,
					function (Sr, wr) {
						return '';
					},
					function (Sr, wr, br) {
						return gr(Sr.slice(wr, wr + br[1]));
					}
				],
				[
					'ustar',
					8,
					257,
					function (Sr, wr) {
						return B.TMAGIC;
					},
					function (Sr, wr, br) {
						return _r(gr(Sr.slice(wr, wr + br[1]), !0));
					},
					function (Sr, wr) {
						return Sr[wr[0]] == B.TMAGIC || Sr[wr[0]] == B.OLDGNU_MAGIC;
					}
				],
				[
					'owner',
					32,
					265,
					function (Sr, wr) {
						return fr(Sr[wr[0]], wr[1]);
					},
					function (Sr, wr, br) {
						return gr(Sr.slice(wr, wr + br[1]));
					}
				],
				[
					'group',
					32,
					297,
					function (Sr, wr) {
						return fr(Sr[wr[0]], wr[1]);
					},
					function (Sr, wr, br) {
						return gr(Sr.slice(wr, wr + br[1]));
					}
				],
				[
					'majorNumber',
					8,
					329,
					function (Sr, wr) {
						return '';
					},
					function (Sr, wr, br) {
						return yr(Sr.slice(wr, wr + br[1]));
					}
				],
				[
					'minorNumber',
					8,
					337,
					function (Sr, wr) {
						return '';
					},
					function (Sr, wr, br) {
						return yr(Sr.slice(wr, wr + br[1]));
					}
				],
				[
					'prefix',
					131,
					345,
					function (Sr, wr) {
						return fr(Sr[wr[0]], wr[1]);
					},
					function (Sr, wr, br) {
						return gr(Sr.slice(wr, wr + br[1]));
					}
				],
				[
					'accessTime',
					12,
					476,
					function (Sr, wr) {
						return Mr(Sr[wr[0]], wr[1]);
					},
					function (Sr, wr, br) {
						return xr(Sr.slice(wr, wr + br[1]));
					}
				],
				[
					'createTime',
					12,
					488,
					function (Sr, wr) {
						return Mr(Sr[wr[0]], wr[1]);
					},
					function (Sr, wr, br) {
						return xr(Sr.slice(wr, wr + br[1]));
					}
				]
			],
			mr = (function (Sr) {
				var wr = Sr[Sr.length - 1];
				return wr[2] + wr[1];
			})(dr);
		function _r(Sr) {
			if (Sr.length == 8) {
				var wr = Sr.split('');
				if (wr[5] == B.NULL_CHAR)
					return (
						(wr[6] == ' ' || wr[6] == B.NULL_CHAR) && (wr[6] = '0'),
						(wr[7] == ' ' || wr[7] == B.NULL_CHAR) && (wr[7] = '0'),
						(wr = wr.join('')),
						wr == B.TMAGIC ? wr : Sr
					);
				if (wr[7] == B.NULL_CHAR)
					return (
						wr[5] == B.NULL_CHAR && (wr[5] = ' '),
						wr[6] == B.NULL_CHAR && (wr[6] = ' '),
						wr == B.OLDGNU_MAGIC ? wr : Sr
					);
			}
			return Sr;
		}
		function fr(Sr, wr) {
			return (
				(wr -= 1), I.isUndefined(Sr) && (Sr = ''), (Sr = ('' + Sr).substr(0, wr)), Sr + B.NULL_CHAR
			);
		}
		function hr(Sr, wr, br) {
			for (
				br = parseInt(br) || 0, wr -= 1, Sr = (parseInt(Sr) || br).toString(8).substr(-wr, wr);
				Sr.length < wr;

			)
				Sr = '0' + Sr;
			return Sr + B.NULL_CHAR;
		}
		function Mr(Sr, wr) {
			if (I.isDateTime(Sr)) Sr = Math.floor((1 * Sr) / 1e3);
			else if (((Sr = parseInt(Sr, 10)), isFinite(Sr))) {
				if (Sr <= 0) return '';
			} else Sr = Math.floor((1 * new Date()) / 1e3);
			return hr(Sr, wr, 0);
		}
		function gr(Sr, wr) {
			var br = String.fromCharCode.apply(null, Sr);
			if (wr) return br;
			var Fr = br.indexOf(B.NULL_CHAR);
			return Fr >= 0 ? br.substr(0, Fr) : br;
		}
		function yr(Sr) {
			var wr = String.fromCharCode.apply(null, Sr);
			return parseInt(wr.replace(/^0+$/g, ''), 8) || 0;
		}
		function xr(Sr) {
			return Sr.length == 0 || Sr[0] == 0 ? null : new Date(1e3 * yr(Sr));
		}
		function vr(Sr, wr, br) {
			var Fr = parseInt(wr, 10) || 0,
				Ir = Math.min(Fr + mr, Sr.length),
				kr = 0,
				Or = 0,
				Lr = 0;
			br &&
				dr.every(function (zr) {
					return zr[0] == 'checksum' ? ((Or = Fr + zr[2]), (Lr = Or + zr[1]), !1) : !0;
				});
			for (var Gr = 32, es = Fr; es < Ir; es++) {
				var Dr = es >= Or && es < Lr ? Gr : Sr[es];
				kr = (kr + Dr) % 262144;
			}
			return kr;
		}
		(t.exports.recordSize = tr),
			(t.exports.defaultFileMode = rr),
			(t.exports.defaultUid = ir),
			(t.exports.defaultGid = lr),
			(t.exports.posixHeader = dr),
			(t.exports.effectiveHeaderSize = mr),
			(t.exports.calculateChecksum = vr),
			(t.exports.formatTarString = fr),
			(t.exports.formatTarNumber = hr),
			(t.exports.formatTarDateTime = Mr),
			(t.exports.parseTarString = gr),
			(t.exports.parseTarNumber = yr),
			(t.exports.parseTarDateTime = xr);
	}),
	er = D$2((e, t) => {
		u$1();
		var I = x(),
			B = w(),
			tr = L();
		function rr(fr) {
			return tr.recordSize;
		}
		function ir(fr) {
			return Math.ceil(fr.data.length / tr.recordSize) * tr.recordSize;
		}
		function lr(fr) {
			var hr = 0;
			return (
				fr.forEach(function (Mr) {
					hr += rr() + ir(Mr);
				}),
				(hr += tr.recordSize * 2),
				new Uint8Array(hr)
			);
		}
		function dr(fr, hr, Mr) {
			Mr = parseInt(Mr) || 0;
			var gr = Mr;
			tr.posixHeader.forEach(function (wr) {
				for (var br = wr[3](hr, wr), Fr = br.length, Ir = 0; Ir < Fr; Ir += 1)
					fr[gr + Ir] = br.charCodeAt(Ir) & 255;
				gr += wr[1];
			});
			var yr = B.find(tr.posixHeader, function (wr) {
				return wr[0] == 'checksum';
			});
			if (yr) {
				var xr = tr.calculateChecksum(fr, Mr, !0),
					vr = tr.formatTarNumber(xr, yr[1] - 2) + I.NULL_CHAR + ' ';
				gr = Mr + yr[2];
				for (var Sr = 0; Sr < vr.length; Sr += 1) (fr[gr] = vr.charCodeAt(Sr) & 255), gr++;
			}
			return Mr + rr();
		}
		function mr(fr, hr, Mr) {
			return (Mr = parseInt(Mr, 10) || 0), fr.set(hr.data, Mr), Mr + ir(hr);
		}
		function _r(fr) {
			fr = B.map(fr, function (gr) {
				return B.extend({}, gr, { data: B.toUint8Array(gr.data) });
			});
			var hr = lr(fr),
				Mr = 0;
			return (
				fr.forEach(function (gr) {
					(Mr = dr(hr, gr, Mr)), (Mr = mr(hr, gr, Mr));
				}),
				hr
			);
		}
		t.exports.tar = _r;
	}),
	nr = D$2((e, t) => {
		u$1();
		var I = x(),
			B = w(),
			tr = L(),
			rr = { extractData: !0, checkHeader: !0, checkChecksum: !0, checkFileSize: !0 },
			ir = { size: !0, checksum: !0, ustar: !0 },
			lr = {
				unexpectedEndOfFile: 'Unexpected end of file.',
				fileCorrupted: 'File is corrupted.',
				checksumCheckFailed: 'Checksum check failed.'
			};
		function dr(yr) {
			return tr.recordSize;
		}
		function mr(yr) {
			return Math.ceil(yr / tr.recordSize) * tr.recordSize;
		}
		function _r(yr, xr) {
			for (var vr = xr, Sr = Math.min(yr.length, xr + tr.recordSize * 2), wr = vr; wr < Sr; wr++)
				if (yr[wr] != 0) return !1;
			return !0;
		}
		function fr(yr, xr, vr) {
			if (yr.length - xr < tr.recordSize) {
				if (vr.checkFileSize) throw new Error(lr.unexpectedEndOfFile);
				return null;
			}
			xr = parseInt(xr) || 0;
			var Sr = {},
				wr = xr;
			if (
				(tr.posixHeader.forEach(function (Ir) {
					(Sr[Ir[0]] = Ir[4](yr, wr, Ir)), (wr += Ir[1]);
				}),
				Sr.type != 0 && (Sr.size = 0),
				vr.checkHeader &&
					tr.posixHeader.forEach(function (Ir) {
						if (B.isFunction(Ir[5]) && !Ir[5](Sr, Ir)) {
							var kr = new Error(lr.fileCorrupted);
							throw ((kr.data = { offset: xr + Ir[2], field: Ir[0] }), kr);
						}
					}),
				vr.checkChecksum)
			) {
				var br = tr.calculateChecksum(yr, xr, !0);
				if (br != Sr.checksum) {
					var Fr = new Error(lr.checksumCheckFailed);
					throw ((Fr.data = { offset: xr, header: Sr, checksum: br }), Fr);
				}
			}
			return Sr;
		}
		function hr(yr, xr, vr, Sr) {
			return Sr.extractData ? (vr.size <= 0 ? new Uint8Array() : yr.slice(xr, xr + vr.size)) : null;
		}
		function Mr(yr, xr) {
			var vr = {};
			return (
				tr.posixHeader.forEach(function (Sr) {
					var wr = Sr[0];
					ir[wr] || (vr[wr] = yr[wr]);
				}),
				(vr.isOldGNUFormat = yr.ustar == I.OLDGNU_MAGIC),
				xr && (vr.data = xr),
				vr
			);
		}
		function gr(yr, xr) {
			xr = B.extend({}, rr, xr);
			for (var vr = [], Sr = 0, wr = yr.length; wr - Sr >= tr.recordSize; ) {
				yr = B.toUint8Array(yr);
				var br = fr(yr, Sr, xr);
				if (!br) break;
				Sr += dr();
				var Fr = hr(yr, Sr, br, xr);
				if ((vr.push(Mr(br, Fr)), (Sr += mr(br.size)), _r(yr, Sr))) break;
			}
			return vr;
		}
		t.exports.untar = gr;
	}),
	or = D$2((e, t) => {
		u$1();
		var I = w(),
			B = x(),
			tr = er(),
			rr = nr();
		I.extend(t.exports, tr, rr, B);
	});
u$1();
u$1();
var g = L$2(or());
async function H$1(e, t, I = 'pgdata', B = 'auto') {
	let tr = Br(e, t),
		[rr, ir] = await qr(tr, B),
		lr = I + (ir ? '.tar.gz' : '.tar'),
		dr = ir ? 'application/x-gzip' : 'application/x-tar';
	return typeof File < 'u' ? new File([rr], lr, { type: dr }) : new Blob([rr], { type: dr });
}
var Hr = ['application/x-gtar', 'application/x-tar+gzip', 'application/x-gzip', 'application/gzip'];
async function ce$1(e, t, I) {
	let B = new Uint8Array(await t.arrayBuffer()),
		tr = typeof File < 'u' && t instanceof File ? t.name : void 0;
	(Hr.includes(t.type) ||
		(tr != null && tr.endsWith('.tgz')) ||
		(tr != null && tr.endsWith('.tar.gz'))) &&
		(B = await ar(B));
	let rr;
	try {
		rr = (0, g.untar)(B);
	} catch (ir) {
		if (ir instanceof Error && ir.message.includes('File is corrupted'))
			(B = await ar(B)), (rr = (0, g.untar)(B));
		else throw ir;
	}
	for (let ir of rr) {
		let lr = I + ir.name,
			dr = lr.split('/').slice(0, -1);
		for (let mr = 1; mr <= dr.length; mr++) {
			let _r = dr.slice(0, mr).join('/');
			e.analyzePath(_r).exists || e.mkdir(_r);
		}
		ir.type === g.REGTYPE
			? (e.writeFile(lr, ir.data), e.utime(lr, sr(ir.modifyTime), sr(ir.modifyTime)))
			: ir.type === g.DIRTYPE && e.mkdir(lr);
	}
}
function jr(e, t) {
	let I = [],
		B = (tr) => {
			e.readdir(tr).forEach((rr) => {
				if (rr === '.' || rr === '..') return;
				let ir = tr + '/' + rr,
					lr = e.stat(ir),
					dr = e.isFile(lr.mode) ? e.readFile(ir, { encoding: 'binary' }) : new Uint8Array(0);
				I.push({
					name: ir.substring(t.length),
					mode: lr.mode,
					size: lr.size,
					type: e.isFile(lr.mode) ? g.REGTYPE : g.DIRTYPE,
					modifyTime: lr.mtime,
					data: dr
				}),
					e.isDir(lr.mode) && B(ir);
			});
		};
	return B(t), I;
}
function Br(e, t) {
	let I = jr(e, t);
	return (0, g.tar)(I);
}
async function qr(e, t = 'auto') {
	if (t === 'none') return [e, !1];
	if (typeof CompressionStream < 'u') return [await Yr(e), !0];
	if (typeof process < 'u' && process.versions && process.versions.node) return [await Wr(e), !0];
	if (t === 'auto') return [e, !1];
	throw new Error('Compression not supported in this environment');
}
async function Yr(e) {
	let t = new CompressionStream('gzip'),
		I = t.writable.getWriter(),
		B = t.readable.getReader();
	I.write(e), I.close();
	let tr = [];
	for (;;) {
		let { value: lr, done: dr } = await B.read();
		if (dr) break;
		lr && tr.push(lr);
	}
	let rr = new Uint8Array(tr.reduce((lr, dr) => lr + dr.length, 0)),
		ir = 0;
	return (
		tr.forEach((lr) => {
			rr.set(lr, ir), (ir += lr.length);
		}),
		rr
	);
}
async function Wr(e) {
	let { promisify: t } = await __vitePreload(() => import('./BIHI7g3E.js'), [], import.meta.url),
		{ gzip: I } = await __vitePreload(
			async () => {
				const { gzip: B } = await import('./BIHI7g3E.js');
				return { gzip: B };
			},
			[],
			import.meta.url
		);
	return await t(I)(e);
}
async function ar(e) {
	if (typeof CompressionStream < 'u') return await Xr(e);
	if (typeof process < 'u' && process.versions && process.versions.node) return await Kr(e);
	throw new Error('Unsupported environment for decompression');
}
async function Xr(e) {
	let t = new DecompressionStream('gzip'),
		I = t.writable.getWriter(),
		B = t.readable.getReader();
	I.write(e), I.close();
	let tr = [];
	for (;;) {
		let { value: lr, done: dr } = await B.read();
		if (dr) break;
		lr && tr.push(lr);
	}
	let rr = new Uint8Array(tr.reduce((lr, dr) => lr + dr.length, 0)),
		ir = 0;
	return (
		tr.forEach((lr) => {
			rr.set(lr, ir), (ir += lr.length);
		}),
		rr
	);
}
async function Kr(e) {
	let { promisify: t } = await __vitePreload(() => import('./BIHI7g3E.js'), [], import.meta.url),
		{ gunzip: I } = await __vitePreload(
			async () => {
				const { gunzip: B } = await import('./BIHI7g3E.js');
				return { gunzip: B };
			},
			[],
			import.meta.url
		);
	return await t(I)(e);
}
function sr(e) {
	return e
		? typeof e == 'number'
			? e
			: Math.floor(e.getTime() / 1e3)
		: Math.floor(Date.now() / 1e3);
}
var Vr = '/tmp/pglite',
	C = Vr + '/base',
	ur = class {
		constructor(e) {
			this.dataDir = e;
		}
		async init(e, t) {
			return (this.pg = e), { emscriptenOpts: t };
		}
		async syncToFs(e) {}
		async initialSyncFs() {}
		async closeFs() {}
		async dumpTar(e, t) {
			return H$1(this.pg.Module.FS, C, e, t);
		}
	},
	cr = class {
		constructor(e, { debug: t = !1 } = {}) {
			(this.dataDir = e), (this.debug = t);
		}
		async syncToFs(e) {}
		async initialSyncFs() {}
		async closeFs() {}
		async dumpTar(e, t) {
			return H$1(this.pg.Module.FS, C, e, t);
		}
		async init(e, t) {
			return (
				(this.pg = e),
				{
					emscriptenOpts: {
						...t,
						preRun: [
							...(t.preRun || []),
							(I) => {
								let B = Zr(I, this);
								I.FS.mkdir(C), I.FS.mount(B, {}, C);
							}
						]
					}
				}
			);
		}
	},
	pr = {
		EBADF: 8,
		EBADFD: 127,
		EEXIST: 20,
		EINVAL: 28,
		EISDIR: 31,
		ENODEV: 43,
		ENOENT: 44,
		ENOTDIR: 54,
		ENOTEMPTY: 55
	},
	Zr = (e, t) => {
		let I = e.FS,
			B = t.debug ? console.log : null,
			tr = {
				tryFSOperation(rr) {
					try {
						return rr();
					} catch (ir) {
						throw ir.code
							? ir.code === 'UNKNOWN'
								? new I.ErrnoError(pr.EINVAL)
								: new I.ErrnoError(ir.code)
							: ir;
					}
				},
				mount(rr) {
					return tr.createNode(null, '/', 16895, 0);
				},
				syncfs(rr, ir, lr) {},
				createNode(rr, ir, lr, dr) {
					if (!I.isDir(lr) && !I.isFile(lr)) throw new I.ErrnoError(28);
					let mr = I.createNode(rr, ir, lr);
					return (mr.node_ops = tr.node_ops), (mr.stream_ops = tr.stream_ops), mr;
				},
				getMode: function (rr) {
					return B == null || B('getMode', rr), tr.tryFSOperation(() => t.lstat(rr).mode);
				},
				realPath: function (rr) {
					let ir = [];
					for (; rr.parent !== rr; ) ir.push(rr.name), (rr = rr.parent);
					return ir.push(rr.mount.opts.root), ir.reverse(), ir.join('/');
				},
				node_ops: {
					getattr(rr) {
						B == null || B('getattr', tr.realPath(rr));
						let ir = tr.realPath(rr);
						return tr.tryFSOperation(() => {
							let lr = t.lstat(ir);
							return {
								...lr,
								dev: 0,
								ino: rr.id,
								nlink: 1,
								rdev: rr.rdev,
								atime: new Date(lr.atime),
								mtime: new Date(lr.mtime),
								ctime: new Date(lr.ctime)
							};
						});
					},
					setattr(rr, ir) {
						B == null || B('setattr', tr.realPath(rr), ir);
						let lr = tr.realPath(rr);
						tr.tryFSOperation(() => {
							ir.mode !== void 0 && t.chmod(lr, ir.mode),
								ir.size !== void 0 && t.truncate(lr, ir.size),
								ir.timestamp !== void 0 && t.utimes(lr, ir.timestamp, ir.timestamp),
								ir.size !== void 0 && t.truncate(lr, ir.size);
						});
					},
					lookup(rr, ir) {
						B == null || B('lookup', tr.realPath(rr), ir);
						let lr = [tr.realPath(rr), ir].join('/'),
							dr = tr.getMode(lr);
						return tr.createNode(rr, ir, dr);
					},
					mknod(rr, ir, lr, dr) {
						B == null || B('mknod', tr.realPath(rr), ir, lr, dr);
						let mr = tr.createNode(rr, ir, lr, dr),
							_r = tr.realPath(mr);
						return tr.tryFSOperation(
							() => (
								I.isDir(mr.mode) ? t.mkdir(_r, { mode: lr }) : t.writeFile(_r, '', { mode: lr }), mr
							)
						);
					},
					rename(rr, ir, lr) {
						B == null || B('rename', tr.realPath(rr), tr.realPath(ir), lr);
						let dr = tr.realPath(rr),
							mr = [tr.realPath(ir), lr].join('/');
						tr.tryFSOperation(() => {
							t.rename(dr, mr);
						}),
							(rr.name = lr);
					},
					unlink(rr, ir) {
						B == null || B('unlink', tr.realPath(rr), ir);
						let lr = [tr.realPath(rr), ir].join('/');
						try {
							t.unlink(lr);
						} catch {}
					},
					rmdir(rr, ir) {
						B == null || B('rmdir', tr.realPath(rr), ir);
						let lr = [tr.realPath(rr), ir].join('/');
						return tr.tryFSOperation(() => {
							t.rmdir(lr);
						});
					},
					readdir(rr) {
						B == null || B('readdir', tr.realPath(rr));
						let ir = tr.realPath(rr);
						return tr.tryFSOperation(() => t.readdir(ir));
					},
					symlink(rr, ir, lr) {
						throw (B == null || B('symlink', tr.realPath(rr), ir, lr), new I.ErrnoError(63));
					},
					readlink(rr) {
						throw (B == null || B('readlink', tr.realPath(rr)), new I.ErrnoError(63));
					}
				},
				stream_ops: {
					open(rr) {
						B == null || B('open stream', tr.realPath(rr.node));
						let ir = tr.realPath(rr.node);
						return tr.tryFSOperation(() => {
							I.isFile(rr.node.mode) && ((rr.shared.refcount = 1), (rr.nfd = t.open(ir)));
						});
					},
					close(rr) {
						return (
							B == null || B('close stream', tr.realPath(rr.node)),
							tr.tryFSOperation(() => {
								I.isFile(rr.node.mode) && rr.nfd && --rr.shared.refcount === 0 && t.close(rr.nfd);
							})
						);
					},
					dup(rr) {
						B == null || B('dup stream', tr.realPath(rr.node)), rr.shared.refcount++;
					},
					read(rr, ir, lr, dr, mr) {
						return (
							B == null || B('read stream', tr.realPath(rr.node), lr, dr, mr),
							dr === 0 ? 0 : tr.tryFSOperation(() => t.read(rr.nfd, ir, lr, dr, mr))
						);
					},
					write(rr, ir, lr, dr, mr) {
						return (
							B == null || B('write stream', tr.realPath(rr.node), lr, dr, mr),
							tr.tryFSOperation(() => t.write(rr.nfd, ir.buffer, lr, dr, mr))
						);
					},
					llseek(rr, ir, lr) {
						B == null || B('llseek stream', tr.realPath(rr.node), ir, lr);
						let dr = ir;
						if (
							(lr === 1
								? (dr += rr.position)
								: lr === 2 &&
									I.isFile(rr.node.mode) &&
									tr.tryFSOperation(() => {
										let mr = t.fstat(rr.nfd);
										dr += mr.size;
									}),
							dr < 0)
						)
							throw new I.ErrnoError(28);
						return dr;
					},
					mmap(rr, ir, lr, dr, mr) {
						if (
							(B == null || B('mmap stream', tr.realPath(rr.node), ir, lr, dr, mr),
							!I.isFile(rr.node.mode))
						)
							throw new I.ErrnoError(pr.ENODEV);
						let _r = e.mmapAlloc(ir);
						return tr.stream_ops.read(rr, e.HEAP8, _r, ir, lr), { ptr: _r, allocated: !0 };
					},
					msync(rr, ir, lr, dr, mr) {
						return (
							B == null || B('msync stream', tr.realPath(rr.node), lr, dr, mr),
							tr.stream_ops.write(rr, ir, 0, dr, lr),
							0
						);
					}
				}
			};
		return tr;
	};
u$1();
u$1();
u$1();
var He = new Error('request for lock canceled'),
	We = function (e, t, I, B) {
		function tr(rr) {
			return rr instanceof I
				? rr
				: new I(function (ir) {
						ir(rr);
					});
		}
		return new (I || (I = Promise))(function (rr, ir) {
			function lr(_r) {
				try {
					mr(B.next(_r));
				} catch (fr) {
					ir(fr);
				}
			}
			function dr(_r) {
				try {
					mr(B.throw(_r));
				} catch (fr) {
					ir(fr);
				}
			}
			function mr(_r) {
				_r.done ? rr(_r.value) : tr(_r.value).then(lr, dr);
			}
			mr((B = B.apply(e, [])).next());
		});
	},
	ce = class {
		constructor(e, t = He) {
			(this._value = e),
				(this._cancelError = t),
				(this._weightedQueues = []),
				(this._weightedWaiters = []);
		}
		acquire(e = 1) {
			if (e <= 0) throw new Error(`invalid weight ${e}: must be positive`);
			return new Promise((t, I) => {
				this._weightedQueues[e - 1] || (this._weightedQueues[e - 1] = []),
					this._weightedQueues[e - 1].push({ resolve: t, reject: I }),
					this._dispatch();
			});
		}
		runExclusive(e, t = 1) {
			return We(this, void 0, void 0, function* () {
				let [I, B] = yield this.acquire(t);
				try {
					return yield e(I);
				} finally {
					B();
				}
			});
		}
		waitForUnlock(e = 1) {
			if (e <= 0) throw new Error(`invalid weight ${e}: must be positive`);
			return new Promise((t) => {
				this._weightedWaiters[e - 1] || (this._weightedWaiters[e - 1] = []),
					this._weightedWaiters[e - 1].push(t),
					this._dispatch();
			});
		}
		isLocked() {
			return this._value <= 0;
		}
		getValue() {
			return this._value;
		}
		setValue(e) {
			(this._value = e), this._dispatch();
		}
		release(e = 1) {
			if (e <= 0) throw new Error(`invalid weight ${e}: must be positive`);
			(this._value += e), this._dispatch();
		}
		cancel() {
			this._weightedQueues.forEach((e) => e.forEach((t) => t.reject(this._cancelError))),
				(this._weightedQueues = []);
		}
		_dispatch() {
			var e;
			for (let t = this._value; t > 0; t--) {
				let I = (e = this._weightedQueues[t - 1]) === null || e === void 0 ? void 0 : e.shift();
				if (!I) continue;
				let B = this._value,
					tr = t;
				(this._value -= t), (t = this._value + 1), I.resolve([B, this._newReleaser(tr)]);
			}
			this._drainUnlockWaiters();
		}
		_newReleaser(e) {
			let t = !1;
			return () => {
				t || ((t = !0), this.release(e));
			};
		}
		_drainUnlockWaiters() {
			for (let e = this._value; e > 0; e--)
				this._weightedWaiters[e - 1] &&
					(this._weightedWaiters[e - 1].forEach((t) => t()), (this._weightedWaiters[e - 1] = []));
		}
	},
	je = function (e, t, I, B) {
		function tr(rr) {
			return rr instanceof I
				? rr
				: new I(function (ir) {
						ir(rr);
					});
		}
		return new (I || (I = Promise))(function (rr, ir) {
			function lr(_r) {
				try {
					mr(B.next(_r));
				} catch (fr) {
					ir(fr);
				}
			}
			function dr(_r) {
				try {
					mr(B.throw(_r));
				} catch (fr) {
					ir(fr);
				}
			}
			function mr(_r) {
				_r.done ? rr(_r.value) : tr(_r.value).then(lr, dr);
			}
			mr((B = B.apply(e, [])).next());
		});
	},
	H = class {
		constructor(e) {
			this._semaphore = new ce(1, e);
		}
		acquire() {
			return je(this, void 0, void 0, function* () {
				let [, e] = yield this._semaphore.acquire();
				return e;
			});
		}
		runExclusive(e) {
			return this._semaphore.runExclusive(() => e());
		}
		isLocked() {
			return this._semaphore.isLocked();
		}
		waitForUnlock() {
			return this._semaphore.waitForUnlock();
		}
		release() {
			this._semaphore.isLocked() && this._semaphore.release();
		}
		cancel() {
			return this._semaphore.cancel();
		}
	};
u$1();
var Ie = L$2(or());
async function ge(e) {
	if (Fe$1) {
		let t = await __vitePreload(() => import('./BIHI7g3E.js'), [], import.meta.url),
			I = await __vitePreload(() => import('./BIHI7g3E.js'), [], import.meta.url),
			{ Writable: B } = await __vitePreload(
				async () => {
					const { Writable: lr } = await import('./BIHI7g3E.js');
					return { Writable: lr };
				},
				[],
				import.meta.url
			),
			{ pipeline: tr } = await __vitePreload(
				async () => {
					const { pipeline: lr } = await import('./BIHI7g3E.js');
					return { pipeline: lr };
				},
				[],
				import.meta.url
			);
		if (!t.existsSync(e)) throw new Error(`Extension bundle not found: ${e}`);
		let rr = I.createGunzip(),
			ir = [];
		return (
			await tr(
				t.createReadStream(e),
				rr,
				new B({
					write(lr, dr, mr) {
						ir.push(lr), mr();
					}
				})
			),
			new Blob(ir)
		);
	} else {
		let t = await fetch(e.toString());
		if (!t.ok || !t.body) return null;
		if (t.headers.get('Content-Encoding') === 'gzip') return t.blob();
		{
			let I = new DecompressionStream('gzip');
			return new Response(t.body.pipeThrough(I)).blob();
		}
	}
}
async function Pe(e, t) {
	for (let I in e.pg_extensions) {
		let B;
		try {
			B = await e.pg_extensions[I];
		} catch (tr) {
			console.error('Failed to fetch extension:', I, tr);
			continue;
		}
		if (B) {
			let tr = new Uint8Array(await B.arrayBuffer());
			Ve(e, I, tr, t);
		} else console.error('Could not get binary data for extension:', I);
	}
}
function Ve(e, t, I, B) {
	Ie.default.untar(I).forEach((tr) => {
		if (!tr.name.startsWith('.')) {
			let rr = e.WASM_PREFIX + '/' + tr.name;
			if (tr.name.endsWith('.so')) {
				let ir = (...dr) => {
						B('pgfs:ext OK', rr, dr);
					},
					lr = (...dr) => {
						B('pgfs:ext FAIL', rr, dr);
					};
				e.FS.createPreloadedFile(
					Ke(rr),
					tr.name.split('/').pop().slice(0, -3),
					tr.data,
					!0,
					!0,
					ir,
					lr,
					!1
				);
			} else e.FS.writeFile(rr, tr.data);
		}
	});
}
function Ke(e) {
	let t = e.lastIndexOf('/');
	return t > 0 ? e.slice(0, t) : e;
}
u$1();
u$1();
var ee = class extends ur {
	async init(e, t) {
		return (
			(this.pg = e),
			{
				emscriptenOpts: {
					...t,
					preRun: [
						...(t.preRun || []),
						(I) => {
							let B = I.FS.filesystems.IDBFS;
							I.FS.mkdir('/pglite'),
								I.FS.mkdir(`/pglite/${this.dataDir}`),
								I.FS.mount(B, {}, `/pglite/${this.dataDir}`),
								I.FS.symlink(`/pglite/${this.dataDir}`, C);
						}
					]
				}
			}
		);
	}
	initialSyncFs() {
		return new Promise((e, t) => {
			this.pg.Module.FS.syncfs(!0, (I) => {
				I ? t(I) : e();
			});
		});
	}
	syncToFs(e) {
		return new Promise((t, I) => {
			this.pg.Module.FS.syncfs(!1, (B) => {
				B ? I(B) : t();
			});
		});
	}
	async closeFs() {
		let e = this.pg.Module.FS.filesystems.IDBFS.dbs[this.dataDir];
		e && e.close(), this.pg.Module.FS.quit();
	}
};
u$1();
var te = class extends ur {
	async closeFs() {
		this.pg.Module.FS.quit();
	}
};
function Fe(e) {
	let t;
	if (e != null && e.startsWith('file://')) {
		if (((e = e.slice(7)), !e)) throw new Error('Invalid dataDir, must be a valid path');
		t = 'nodefs';
	} else
		e != null && e.startsWith('idb://')
			? ((e = e.slice(6)), (t = 'idbfs'))
			: e != null && e.startsWith('opfs-ahp://')
				? ((e = e.slice(11)), (t = 'opfs-ahp'))
				: !e || (e != null && e.startsWith('memory://'))
					? (t = 'memoryfs')
					: (t = 'nodefs');
	return { dataDir: e, fsType: t };
}
async function Ae(e, t) {
	let I;
	if (e && t === 'nodefs') {
		let { NodeFS: B } = await __vitePreload(() => import('./D0Sv_CKL.js'), [], import.meta.url);
		I = new B(e);
	} else if (e && t === 'idbfs') I = new ee(e);
	else if (e && t === 'opfs-ahp') {
		let { OpfsAhpFS: B } = await __vitePreload(() => import('./D4Eo1LN7.js'), [], import.meta.url);
		I = new B(e);
	} else I = new te();
	return I;
}
u$1();
u$1();
var Qe = (() => {
		var _scriptName = import.meta.url;
		return async function (moduleArg = {}) {
			var moduleRtn,
				Module = moduleArg,
				readyPromiseResolve,
				readyPromiseReject,
				readyPromise = new Promise((e, t) => {
					(readyPromiseResolve = e), (readyPromiseReject = t);
				}),
				ENVIRONMENT_IS_WEB = typeof window == 'object',
				ENVIRONMENT_IS_WORKER = typeof WorkerGlobalScope < 'u',
				ENVIRONMENT_IS_NODE =
					typeof process == 'object' &&
					typeof process.versions == 'object' &&
					typeof process.versions.node == 'string' &&
					process.type != 'renderer';
			if (ENVIRONMENT_IS_NODE) {
				let { createRequire: e } = await __vitePreload(
						() => import('./BIHI7g3E.js'),
						[],
						import.meta.url
					),
					t = import.meta.url;
				t.startsWith('data:') && (t = '/');
				var require = e(t);
			}
			Module.expectedDataFileDownloads ?? (Module.expectedDataFileDownloads = 0),
				Module.expectedDataFileDownloads++,
				(() => {
					var e = typeof ENVIRONMENT_IS_PTHREAD < 'u' && ENVIRONMENT_IS_PTHREAD,
						t = typeof ENVIRONMENT_IS_WASM_WORKER < 'u' && ENVIRONMENT_IS_WASM_WORKER;
					if (e || t) return;
					var I =
						typeof process == 'object' &&
						typeof process.versions == 'object' &&
						typeof process.versions.node == 'string';
					function B(tr) {
						typeof window == 'object'
							? window.encodeURIComponent(
									window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')) +
										'/'
								)
							: typeof process > 'u' &&
								typeof location < 'u' &&
								encodeURIComponent(
									location.pathname.substring(0, location.pathname.lastIndexOf('/')) + '/'
								);
						var rr = 'postgres.data',
							ir = 'postgres.data',
							lr = Module.locateFile ? Module.locateFile(ir, '') : ir,
							dr = tr.remote_package_size;
						function mr(gr, yr, xr, vr) {
							if (I) {
								require('fs').readFile(gr, (Sr, wr) => {
									Sr ? vr(Sr) : xr(wr.buffer);
								});
								return;
							}
							Module.dataFileDownloads ?? (Module.dataFileDownloads = {}),
								fetch(gr)
									.catch((Sr) => Promise.reject(new Error(`Network Error: ${gr}`, { cause: Sr })))
									.then((Sr) => {
										var Gr;
										if (!Sr.ok) return Promise.reject(new Error(`${Sr.status}: ${Sr.url}`));
										if (!Sr.body && Sr.arrayBuffer) return Sr.arrayBuffer().then(xr);
										let wr = Sr.body.getReader(),
											br = () =>
												wr
													.read()
													.then(Lr)
													.catch((es) =>
														Promise.reject(
															new Error(`Unexpected error while handling : ${Sr.url} ${es}`, {
																cause: es
															})
														)
													),
											Fr = [],
											Ir = Sr.headers,
											kr = Number(Ir.get('Content-Length') ?? yr),
											Or = 0,
											Lr = ({ done: es, value: Dr }) => {
												var zr;
												if (es) {
													let Jr = new Uint8Array(
															Fr.map((ts) => ts.length).reduce((ts, rs) => ts + rs, 0)
														),
														Qr = 0;
													for (let ts of Fr) Jr.set(ts, Qr), (Qr += ts.length);
													xr(Jr.buffer);
												} else {
													Fr.push(Dr),
														(Or += Dr.length),
														(Module.dataFileDownloads[gr] = { loaded: Or, total: kr });
													let Jr = 0,
														Qr = 0;
													for (let ts of Object.values(Module.dataFileDownloads))
														(Jr += ts.loaded), (Qr += ts.total);
													return (
														(zr = Module.setStatus) == null ||
															zr.call(Module, `Downloading data... (${Jr}/${Qr})`),
														br()
													);
												}
											};
										return (
											(Gr = Module.setStatus) == null || Gr.call(Module, 'Downloading data...'),
											br()
										);
									});
						}
						function _r(gr) {
							console.error('package error:', gr);
						}
						var fr = null,
							hr = Module.getPreloadedPackage ? Module.getPreloadedPackage(lr, dr) : null;
						hr ||
							mr(
								lr,
								dr,
								(gr) => {
									fr ? (fr(gr), (fr = null)) : (hr = gr);
								},
								_r
							);
						function Mr(gr) {
							function yr(br, Fr) {
								if (!br) throw Fr + new Error().stack;
							}
							gr.FS_createPath('/', 'home', !0, !0),
								gr.FS_createPath('/home', 'web_user', !0, !0),
								gr.FS_createPath('/', 'tmp', !0, !0),
								gr.FS_createPath('/tmp', 'pglite', !0, !0),
								gr.FS_createPath('/tmp/pglite', 'bin', !0, !0),
								gr.FS_createPath('/tmp/pglite', 'lib', !0, !0),
								gr.FS_createPath('/tmp/pglite/lib', 'postgresql', !0, !0),
								gr.FS_createPath('/tmp/pglite/lib/postgresql', 'pgxs', !0, !0),
								gr.FS_createPath('/tmp/pglite/lib/postgresql/pgxs', 'config', !0, !0),
								gr.FS_createPath('/tmp/pglite/lib/postgresql/pgxs', 'src', !0, !0),
								gr.FS_createPath('/tmp/pglite/lib/postgresql/pgxs/src', 'makefiles', !0, !0),
								gr.FS_createPath('/tmp/pglite/lib/postgresql/pgxs/src', 'test', !0, !0),
								gr.FS_createPath('/tmp/pglite/lib/postgresql/pgxs/src/test', 'isolation', !0, !0),
								gr.FS_createPath('/tmp/pglite/lib/postgresql/pgxs/src/test', 'regress', !0, !0),
								gr.FS_createPath('/tmp/pglite', 'share', !0, !0),
								gr.FS_createPath('/tmp/pglite/share', 'postgresql', !0, !0),
								gr.FS_createPath('/tmp/pglite/share/postgresql', 'extension', !0, !0),
								gr.FS_createPath('/tmp/pglite/share/postgresql', 'timezone', !0, !0),
								gr.FS_createPath('/tmp/pglite/share/postgresql/timezone', 'Africa', !0, !0),
								gr.FS_createPath('/tmp/pglite/share/postgresql/timezone', 'America', !0, !0),
								gr.FS_createPath(
									'/tmp/pglite/share/postgresql/timezone/America',
									'Argentina',
									!0,
									!0
								),
								gr.FS_createPath(
									'/tmp/pglite/share/postgresql/timezone/America',
									'Indiana',
									!0,
									!0
								),
								gr.FS_createPath(
									'/tmp/pglite/share/postgresql/timezone/America',
									'Kentucky',
									!0,
									!0
								),
								gr.FS_createPath(
									'/tmp/pglite/share/postgresql/timezone/America',
									'North_Dakota',
									!0,
									!0
								),
								gr.FS_createPath('/tmp/pglite/share/postgresql/timezone', 'Antarctica', !0, !0),
								gr.FS_createPath('/tmp/pglite/share/postgresql/timezone', 'Arctic', !0, !0),
								gr.FS_createPath('/tmp/pglite/share/postgresql/timezone', 'Asia', !0, !0),
								gr.FS_createPath('/tmp/pglite/share/postgresql/timezone', 'Atlantic', !0, !0),
								gr.FS_createPath('/tmp/pglite/share/postgresql/timezone', 'Australia', !0, !0),
								gr.FS_createPath('/tmp/pglite/share/postgresql/timezone', 'Brazil', !0, !0),
								gr.FS_createPath('/tmp/pglite/share/postgresql/timezone', 'Canada', !0, !0),
								gr.FS_createPath('/tmp/pglite/share/postgresql/timezone', 'Chile', !0, !0),
								gr.FS_createPath('/tmp/pglite/share/postgresql/timezone', 'Etc', !0, !0),
								gr.FS_createPath('/tmp/pglite/share/postgresql/timezone', 'Europe', !0, !0),
								gr.FS_createPath('/tmp/pglite/share/postgresql/timezone', 'Indian', !0, !0),
								gr.FS_createPath('/tmp/pglite/share/postgresql/timezone', 'Mexico', !0, !0),
								gr.FS_createPath('/tmp/pglite/share/postgresql/timezone', 'Pacific', !0, !0),
								gr.FS_createPath('/tmp/pglite/share/postgresql/timezone', 'US', !0, !0),
								gr.FS_createPath('/tmp/pglite/share/postgresql', 'timezonesets', !0, !0),
								gr.FS_createPath('/tmp/pglite/share/postgresql', 'tsearch_data', !0, !0);
							function xr(br, Fr, Ir) {
								(this.start = br), (this.end = Fr), (this.audio = Ir);
							}
							xr.prototype = {
								requests: {},
								open: function (br, Fr) {
									(this.name = Fr),
										(this.requests[Fr] = this),
										gr.addRunDependency(`fp ${this.name}`);
								},
								send: function () {},
								onload: function () {
									var br = this.byteArray.subarray(this.start, this.end);
									this.finish(br);
								},
								finish: function (br) {
									var Fr = this;
									gr.FS_createDataFile(this.name, null, br, !0, !0, !0),
										gr.removeRunDependency(`fp ${Fr.name}`),
										(this.requests[this.name] = null);
								}
							};
							for (var vr = tr.files, Sr = 0; Sr < vr.length; ++Sr)
								new xr(vr[Sr].start, vr[Sr].end, vr[Sr].audio || 0).open('GET', vr[Sr].filename);
							function wr(br) {
								yr(br, 'Loading data file failed.'),
									yr(br.constructor.name === ArrayBuffer.name, 'bad input to processPackageData');
								var Fr = new Uint8Array(br);
								xr.prototype.byteArray = Fr;
								for (var Ir = tr.files, kr = 0; kr < Ir.length; ++kr)
									xr.prototype.requests[Ir[kr].filename].onload();
								gr.removeRunDependency('datafile_postgres.data');
							}
							gr.addRunDependency('datafile_postgres.data'),
								gr.preloadResults ?? (gr.preloadResults = {}),
								(gr.preloadResults[rr] = { fromCache: !1 }),
								hr ? (wr(hr), (hr = null)) : (fr = wr);
						}
						Module.calledRun ? Mr(Module) : (Module.preRun ?? (Module.preRun = [])).push(Mr);
					}
					B({
						files: [
							{ filename: '/home/web_user/.pgpass', start: 0, end: 204 },
							{ filename: '/tmp/pglite/bin/initdb', start: 204, end: 216 },
							{ filename: '/tmp/pglite/bin/postgres', start: 216, end: 228 },
							{
								filename: '/tmp/pglite/lib/postgresql/cyrillic_and_mic.so',
								start: 228,
								end: 20397
							},
							{
								filename: '/tmp/pglite/lib/postgresql/dict_snowball.so',
								start: 20397,
								end: 1581299
							},
							{
								filename: '/tmp/pglite/lib/postgresql/euc2004_sjis2004.so',
								start: 1581299,
								end: 1592382
							},
							{
								filename: '/tmp/pglite/lib/postgresql/euc_cn_and_mic.so',
								start: 1592382,
								end: 1599256
							},
							{
								filename: '/tmp/pglite/lib/postgresql/euc_jp_and_sjis.so',
								start: 1599256,
								end: 1622931
							},
							{
								filename: '/tmp/pglite/lib/postgresql/euc_kr_and_mic.so',
								start: 1622931,
								end: 1630057
							},
							{
								filename: '/tmp/pglite/lib/postgresql/euc_tw_and_big5.so',
								start: 1630057,
								end: 1651566
							},
							{
								filename: '/tmp/pglite/lib/postgresql/latin2_and_win1250.so',
								start: 1651566,
								end: 1660345
							},
							{
								filename: '/tmp/pglite/lib/postgresql/latin_and_mic.so',
								start: 1660345,
								end: 1668272
							},
							{
								filename: '/tmp/pglite/lib/postgresql/libpqwalreceiver.so',
								start: 1668272,
								end: 2186522
							},
							{ filename: '/tmp/pglite/lib/postgresql/pgoutput.so', start: 2186522, end: 2303364 },
							{
								filename: '/tmp/pglite/lib/postgresql/pgxs/config/install-sh',
								start: 2303364,
								end: 2317361
							},
							{
								filename: '/tmp/pglite/lib/postgresql/pgxs/config/missing',
								start: 2317361,
								end: 2318709
							},
							{
								filename: '/tmp/pglite/lib/postgresql/pgxs/src/Makefile.global',
								start: 2318709,
								end: 2354956
							},
							{
								filename: '/tmp/pglite/lib/postgresql/pgxs/src/Makefile.port',
								start: 2354956,
								end: 2355232
							},
							{
								filename: '/tmp/pglite/lib/postgresql/pgxs/src/Makefile.shlib',
								start: 2355232,
								end: 2371270
							},
							{
								filename: '/tmp/pglite/lib/postgresql/pgxs/src/makefiles/pgxs.mk',
								start: 2371270,
								end: 2386198
							},
							{
								filename: '/tmp/pglite/lib/postgresql/pgxs/src/nls-global.mk',
								start: 2386198,
								end: 2393083
							},
							{
								filename: '/tmp/pglite/lib/postgresql/pgxs/src/test/isolation/isolationtester.cjs',
								start: 2393083,
								end: 2589770
							},
							{
								filename:
									'/tmp/pglite/lib/postgresql/pgxs/src/test/isolation/pg_isolation_regress.cjs',
								start: 2589770,
								end: 2742128
							},
							{
								filename: '/tmp/pglite/lib/postgresql/pgxs/src/test/regress/pg_regress.cjs',
								start: 2742128,
								end: 2894476
							},
							{ filename: '/tmp/pglite/lib/postgresql/plpgsql.so', start: 2894476, end: 3653241 },
							{ filename: '/tmp/pglite/password', start: 3653241, end: 3653250 },
							{
								filename: '/tmp/pglite/share/postgresql/errcodes.txt',
								start: 3653250,
								end: 3686708
							},
							{
								filename: '/tmp/pglite/share/postgresql/extension/plpgsql--1.0.sql',
								start: 3686708,
								end: 3687366
							},
							{
								filename: '/tmp/pglite/share/postgresql/extension/plpgsql.control',
								start: 3687366,
								end: 3687559
							},
							{
								filename: '/tmp/pglite/share/postgresql/fix-CVE-2024-4317.sql',
								start: 3687559,
								end: 3693324
							},
							{
								filename: '/tmp/pglite/share/postgresql/information_schema.sql',
								start: 3693324,
								end: 3808299
							},
							{
								filename: '/tmp/pglite/share/postgresql/pg_hba.conf.sample',
								start: 3808299,
								end: 3813924
							},
							{
								filename: '/tmp/pglite/share/postgresql/pg_ident.conf.sample',
								start: 3813924,
								end: 3816564
							},
							{
								filename: '/tmp/pglite/share/postgresql/pg_service.conf.sample',
								start: 3816564,
								end: 3817168
							},
							{
								filename: '/tmp/pglite/share/postgresql/postgres.bki',
								start: 3817168,
								end: 4761272
							},
							{
								filename: '/tmp/pglite/share/postgresql/postgresql.conf.sample',
								start: 4761272,
								end: 4790919
							},
							{
								filename: '/tmp/pglite/share/postgresql/psqlrc.sample',
								start: 4790919,
								end: 4791197
							},
							{
								filename: '/tmp/pglite/share/postgresql/snowball_create.sql',
								start: 4791197,
								end: 4835373
							},
							{
								filename: '/tmp/pglite/share/postgresql/sql_features.txt',
								start: 4835373,
								end: 4871054
							},
							{
								filename: '/tmp/pglite/share/postgresql/system_constraints.sql',
								start: 4871054,
								end: 4879949
							},
							{
								filename: '/tmp/pglite/share/postgresql/system_functions.sql',
								start: 4879949,
								end: 4903264
							},
							{
								filename: '/tmp/pglite/share/postgresql/system_views.sql',
								start: 4903264,
								end: 4953537
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Abidjan',
								start: 4953537,
								end: 4953667
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Accra',
								start: 4953667,
								end: 4953797
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Addis_Ababa',
								start: 4953797,
								end: 4953988
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Algiers',
								start: 4953988,
								end: 4954458
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Asmara',
								start: 4954458,
								end: 4954649
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Asmera',
								start: 4954649,
								end: 4954840
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Bamako',
								start: 4954840,
								end: 4954970
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Bangui',
								start: 4954970,
								end: 4955150
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Banjul',
								start: 4955150,
								end: 4955280
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Bissau',
								start: 4955280,
								end: 4955429
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Blantyre',
								start: 4955429,
								end: 4955560
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Brazzaville',
								start: 4955560,
								end: 4955740
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Bujumbura',
								start: 4955740,
								end: 4955871
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Cairo',
								start: 4955871,
								end: 4957180
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Casablanca',
								start: 4957180,
								end: 4959099
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Ceuta',
								start: 4959099,
								end: 4959661
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Conakry',
								start: 4959661,
								end: 4959791
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Dakar',
								start: 4959791,
								end: 4959921
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Dar_es_Salaam',
								start: 4959921,
								end: 4960112
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Djibouti',
								start: 4960112,
								end: 4960303
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Douala',
								start: 4960303,
								end: 4960483
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/El_Aaiun',
								start: 4960483,
								end: 4962313
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Freetown',
								start: 4962313,
								end: 4962443
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Gaborone',
								start: 4962443,
								end: 4962574
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Harare',
								start: 4962574,
								end: 4962705
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Johannesburg',
								start: 4962705,
								end: 4962895
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Juba',
								start: 4962895,
								end: 4963353
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Kampala',
								start: 4963353,
								end: 4963544
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Khartoum',
								start: 4963544,
								end: 4964002
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Kigali',
								start: 4964002,
								end: 4964133
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Kinshasa',
								start: 4964133,
								end: 4964313
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Lagos',
								start: 4964313,
								end: 4964493
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Libreville',
								start: 4964493,
								end: 4964673
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Lome',
								start: 4964673,
								end: 4964803
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Luanda',
								start: 4964803,
								end: 4964983
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Lubumbashi',
								start: 4964983,
								end: 4965114
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Lusaka',
								start: 4965114,
								end: 4965245
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Malabo',
								start: 4965245,
								end: 4965425
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Maputo',
								start: 4965425,
								end: 4965556
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Maseru',
								start: 4965556,
								end: 4965746
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Mbabane',
								start: 4965746,
								end: 4965936
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Mogadishu',
								start: 4965936,
								end: 4966127
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Monrovia',
								start: 4966127,
								end: 4966291
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Nairobi',
								start: 4966291,
								end: 4966482
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Ndjamena',
								start: 4966482,
								end: 4966642
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Niamey',
								start: 4966642,
								end: 4966822
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Nouakchott',
								start: 4966822,
								end: 4966952
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Ouagadougou',
								start: 4966952,
								end: 4967082
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Porto-Novo',
								start: 4967082,
								end: 4967262
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Sao_Tome',
								start: 4967262,
								end: 4967435
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Timbuktu',
								start: 4967435,
								end: 4967565
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Tripoli',
								start: 4967565,
								end: 4967996
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Tunis',
								start: 4967996,
								end: 4968445
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Africa/Windhoek',
								start: 4968445,
								end: 4969083
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Adak',
								start: 4969083,
								end: 4970052
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Anchorage',
								start: 4970052,
								end: 4971029
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Anguilla',
								start: 4971029,
								end: 4971206
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Antigua',
								start: 4971206,
								end: 4971383
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Araguaina',
								start: 4971383,
								end: 4971975
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Argentina/Buenos_Aires',
								start: 4971975,
								end: 4972683
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Argentina/Catamarca',
								start: 4972683,
								end: 4973391
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Argentina/ComodRivadavia',
								start: 4973391,
								end: 4974099
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Argentina/Cordoba',
								start: 4974099,
								end: 4974807
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Argentina/Jujuy',
								start: 4974807,
								end: 4975497
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Argentina/La_Rioja',
								start: 4975497,
								end: 4976214
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Argentina/Mendoza',
								start: 4976214,
								end: 4976922
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Argentina/Rio_Gallegos',
								start: 4976922,
								end: 4977630
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Argentina/Salta',
								start: 4977630,
								end: 4978320
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Argentina/San_Juan',
								start: 4978320,
								end: 4979037
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Argentina/San_Luis',
								start: 4979037,
								end: 4979754
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Argentina/Tucuman',
								start: 4979754,
								end: 4980480
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Argentina/Ushuaia',
								start: 4980480,
								end: 4981188
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Aruba',
								start: 4981188,
								end: 4981365
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Asuncion',
								start: 4981365,
								end: 4982249
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Atikokan',
								start: 4982249,
								end: 4982398
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Atka',
								start: 4982398,
								end: 4983367
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Bahia',
								start: 4983367,
								end: 4984049
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Bahia_Banderas',
								start: 4984049,
								end: 4984777
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Barbados',
								start: 4984777,
								end: 4985055
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Belem',
								start: 4985055,
								end: 4985449
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Belize',
								start: 4985449,
								end: 4986494
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Blanc-Sablon',
								start: 4986494,
								end: 4986671
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Boa_Vista',
								start: 4986671,
								end: 4987101
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Bogota',
								start: 4987101,
								end: 4987280
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Boise',
								start: 4987280,
								end: 4988279
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Buenos_Aires',
								start: 4988279,
								end: 4988987
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Cambridge_Bay',
								start: 4988987,
								end: 4989870
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Campo_Grande',
								start: 4989870,
								end: 4990822
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Cancun',
								start: 4990822,
								end: 4991351
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Caracas',
								start: 4991351,
								end: 4991541
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Catamarca',
								start: 4991541,
								end: 4992249
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Cayenne',
								start: 4992249,
								end: 4992400
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Cayman',
								start: 4992400,
								end: 4992549
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Chicago',
								start: 4992549,
								end: 4994303
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Chihuahua',
								start: 4994303,
								end: 4994994
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Ciudad_Juarez',
								start: 4994994,
								end: 4995712
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Coral_Harbour',
								start: 4995712,
								end: 4995861
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Cordoba',
								start: 4995861,
								end: 4996569
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Costa_Rica',
								start: 4996569,
								end: 4996801
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Creston',
								start: 4996801,
								end: 4997041
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Cuiaba',
								start: 4997041,
								end: 4997975
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Curacao',
								start: 4997975,
								end: 4998152
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Danmarkshavn',
								start: 4998152,
								end: 4998599
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Dawson',
								start: 4998599,
								end: 4999628
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Dawson_Creek',
								start: 4999628,
								end: 5000311
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Denver',
								start: 5000311,
								end: 5001353
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Detroit',
								start: 5001353,
								end: 5002252
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Dominica',
								start: 5002252,
								end: 5002429
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Edmonton',
								start: 5002429,
								end: 5003399
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Eirunepe',
								start: 5003399,
								end: 5003835
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/El_Salvador',
								start: 5003835,
								end: 5004011
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Ensenada',
								start: 5004011,
								end: 5005036
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Fort_Nelson',
								start: 5005036,
								end: 5006484
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Fort_Wayne',
								start: 5006484,
								end: 5007015
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Fortaleza',
								start: 5007015,
								end: 5007499
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Glace_Bay',
								start: 5007499,
								end: 5008379
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Godthab',
								start: 5008379,
								end: 5009344
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Goose_Bay',
								start: 5009344,
								end: 5010924
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Grand_Turk',
								start: 5010924,
								end: 5011777
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Grenada',
								start: 5011777,
								end: 5011954
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Guadeloupe',
								start: 5011954,
								end: 5012131
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Guatemala',
								start: 5012131,
								end: 5012343
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Guayaquil',
								start: 5012343,
								end: 5012522
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Guyana',
								start: 5012522,
								end: 5012703
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Halifax',
								start: 5012703,
								end: 5014375
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Havana',
								start: 5014375,
								end: 5015492
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Hermosillo',
								start: 5015492,
								end: 5015778
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Indiana/Indianapolis',
								start: 5015778,
								end: 5016309
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Indiana/Knox',
								start: 5016309,
								end: 5017325
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Indiana/Marengo',
								start: 5017325,
								end: 5017892
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Indiana/Petersburg',
								start: 5017892,
								end: 5018575
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Indiana/Tell_City',
								start: 5018575,
								end: 5019097
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Indiana/Vevay',
								start: 5019097,
								end: 5019466
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Indiana/Vincennes',
								start: 5019466,
								end: 5020024
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Indiana/Winamac',
								start: 5020024,
								end: 5020636
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Indianapolis',
								start: 5020636,
								end: 5021167
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Inuvik',
								start: 5021167,
								end: 5021984
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Iqaluit',
								start: 5021984,
								end: 5022839
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Jamaica',
								start: 5022839,
								end: 5023178
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Jujuy',
								start: 5023178,
								end: 5023868
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Juneau',
								start: 5023868,
								end: 5024834
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Kentucky/Louisville',
								start: 5024834,
								end: 5026076
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Kentucky/Monticello',
								start: 5026076,
								end: 5027048
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Knox_IN',
								start: 5027048,
								end: 5028064
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Kralendijk',
								start: 5028064,
								end: 5028241
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/La_Paz',
								start: 5028241,
								end: 5028411
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Lima',
								start: 5028411,
								end: 5028694
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Los_Angeles',
								start: 5028694,
								end: 5029988
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Louisville',
								start: 5029988,
								end: 5031230
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Lower_Princes',
								start: 5031230,
								end: 5031407
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Maceio',
								start: 5031407,
								end: 5031909
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Managua',
								start: 5031909,
								end: 5032204
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Manaus',
								start: 5032204,
								end: 5032616
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Marigot',
								start: 5032616,
								end: 5032793
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Martinique',
								start: 5032793,
								end: 5032971
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Matamoros',
								start: 5032971,
								end: 5033408
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Mazatlan',
								start: 5033408,
								end: 5034126
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Mendoza',
								start: 5034126,
								end: 5034834
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Menominee',
								start: 5034834,
								end: 5035751
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Merida',
								start: 5035751,
								end: 5036405
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Metlakatla',
								start: 5036405,
								end: 5037e3
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Mexico_City',
								start: 5037e3,
								end: 5037773
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Miquelon',
								start: 5037773,
								end: 5038323
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Moncton',
								start: 5038323,
								end: 5039816
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Monterrey',
								start: 5039816,
								end: 5040460
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Montevideo',
								start: 5040460,
								end: 5041429
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Montreal',
								start: 5041429,
								end: 5043146
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Montserrat',
								start: 5043146,
								end: 5043323
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Nassau',
								start: 5043323,
								end: 5045040
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/New_York',
								start: 5045040,
								end: 5046784
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Nipigon',
								start: 5046784,
								end: 5048501
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Nome',
								start: 5048501,
								end: 5049476
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Noronha',
								start: 5049476,
								end: 5049960
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/North_Dakota/Beulah',
								start: 5049960,
								end: 5051003
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/North_Dakota/Center',
								start: 5051003,
								end: 5051993
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/North_Dakota/New_Salem',
								start: 5051993,
								end: 5052983
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Nuuk',
								start: 5052983,
								end: 5053948
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Ojinaga',
								start: 5053948,
								end: 5054657
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Panama',
								start: 5054657,
								end: 5054806
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Pangnirtung',
								start: 5054806,
								end: 5055661
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Paramaribo',
								start: 5055661,
								end: 5055848
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Phoenix',
								start: 5055848,
								end: 5056088
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Port-au-Prince',
								start: 5056088,
								end: 5056653
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Port_of_Spain',
								start: 5056653,
								end: 5056830
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Porto_Acre',
								start: 5056830,
								end: 5057248
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Porto_Velho',
								start: 5057248,
								end: 5057642
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Puerto_Rico',
								start: 5057642,
								end: 5057819
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Punta_Arenas',
								start: 5057819,
								end: 5059037
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Rainy_River',
								start: 5059037,
								end: 5060331
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Rankin_Inlet',
								start: 5060331,
								end: 5061138
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Recife',
								start: 5061138,
								end: 5061622
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Regina',
								start: 5061622,
								end: 5062260
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Resolute',
								start: 5062260,
								end: 5063067
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Rio_Branco',
								start: 5063067,
								end: 5063485
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Rosario',
								start: 5063485,
								end: 5064193
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Santa_Isabel',
								start: 5064193,
								end: 5065218
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Santarem',
								start: 5065218,
								end: 5065627
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Santiago',
								start: 5065627,
								end: 5066981
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Santo_Domingo',
								start: 5066981,
								end: 5067298
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Sao_Paulo',
								start: 5067298,
								end: 5068250
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Scoresbysund',
								start: 5068250,
								end: 5069234
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Shiprock',
								start: 5069234,
								end: 5070276
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Sitka',
								start: 5070276,
								end: 5071232
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/St_Barthelemy',
								start: 5071232,
								end: 5071409
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/St_Johns',
								start: 5071409,
								end: 5073287
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/St_Kitts',
								start: 5073287,
								end: 5073464
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/St_Lucia',
								start: 5073464,
								end: 5073641
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/St_Thomas',
								start: 5073641,
								end: 5073818
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/St_Vincent',
								start: 5073818,
								end: 5073995
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Swift_Current',
								start: 5073995,
								end: 5074363
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Tegucigalpa',
								start: 5074363,
								end: 5074557
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Thule',
								start: 5074557,
								end: 5075012
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Thunder_Bay',
								start: 5075012,
								end: 5076729
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Tijuana',
								start: 5076729,
								end: 5077754
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Toronto',
								start: 5077754,
								end: 5079471
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Tortola',
								start: 5079471,
								end: 5079648
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Vancouver',
								start: 5079648,
								end: 5080978
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Virgin',
								start: 5080978,
								end: 5081155
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Whitehorse',
								start: 5081155,
								end: 5082184
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Winnipeg',
								start: 5082184,
								end: 5083478
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Yakutat',
								start: 5083478,
								end: 5084424
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/America/Yellowknife',
								start: 5084424,
								end: 5085394
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Antarctica/Casey',
								start: 5085394,
								end: 5085681
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Antarctica/Davis',
								start: 5085681,
								end: 5085878
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Antarctica/DumontDUrville',
								start: 5085878,
								end: 5086032
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Antarctica/Macquarie',
								start: 5086032,
								end: 5087008
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Antarctica/Mawson',
								start: 5087008,
								end: 5087160
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Antarctica/McMurdo',
								start: 5087160,
								end: 5088203
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Antarctica/Palmer',
								start: 5088203,
								end: 5089090
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Antarctica/Rothera',
								start: 5089090,
								end: 5089222
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Antarctica/South_Pole',
								start: 5089222,
								end: 5090265
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Antarctica/Syowa',
								start: 5090265,
								end: 5090398
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Antarctica/Troll',
								start: 5090398,
								end: 5090575
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Antarctica/Vostok',
								start: 5090575,
								end: 5090745
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Arctic/Longyearbyen',
								start: 5090745,
								end: 5091450
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Aden',
								start: 5091450,
								end: 5091583
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Almaty',
								start: 5091583,
								end: 5092201
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Amman',
								start: 5092201,
								end: 5093129
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Anadyr',
								start: 5093129,
								end: 5093872
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Aqtau',
								start: 5093872,
								end: 5094478
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Aqtobe',
								start: 5094478,
								end: 5095093
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Ashgabat',
								start: 5095093,
								end: 5095468
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Ashkhabad',
								start: 5095468,
								end: 5095843
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Atyrau',
								start: 5095843,
								end: 5096459
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Baghdad',
								start: 5096459,
								end: 5097089
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Bahrain',
								start: 5097089,
								end: 5097241
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Baku',
								start: 5097241,
								end: 5097985
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Bangkok',
								start: 5097985,
								end: 5098137
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Barnaul',
								start: 5098137,
								end: 5098890
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Beirut',
								start: 5098890,
								end: 5099622
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Bishkek',
								start: 5099622,
								end: 5100240
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Brunei',
								start: 5100240,
								end: 5100560
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Calcutta',
								start: 5100560,
								end: 5100780
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Chita',
								start: 5100780,
								end: 5101530
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Choibalsan',
								start: 5101530,
								end: 5102149
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Chongqing',
								start: 5102149,
								end: 5102542
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Chungking',
								start: 5102542,
								end: 5102935
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Colombo',
								start: 5102935,
								end: 5103182
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Dacca',
								start: 5103182,
								end: 5103413
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Damascus',
								start: 5103413,
								end: 5104647
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Dhaka',
								start: 5104647,
								end: 5104878
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Dili',
								start: 5104878,
								end: 5105048
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Dubai',
								start: 5105048,
								end: 5105181
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Dushanbe',
								start: 5105181,
								end: 5105547
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Famagusta',
								start: 5105547,
								end: 5106487
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Gaza',
								start: 5106487,
								end: 5108933
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Harbin',
								start: 5108933,
								end: 5109326
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Hebron',
								start: 5109326,
								end: 5111790
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Ho_Chi_Minh',
								start: 5111790,
								end: 5112026
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Hong_Kong',
								start: 5112026,
								end: 5112801
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Hovd',
								start: 5112801,
								end: 5113395
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Irkutsk',
								start: 5113395,
								end: 5114155
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Istanbul',
								start: 5114155,
								end: 5115355
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Jakarta',
								start: 5115355,
								end: 5115603
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Jayapura',
								start: 5115603,
								end: 5115774
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Jerusalem',
								start: 5115774,
								end: 5116848
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Kabul',
								start: 5116848,
								end: 5117007
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Kamchatka',
								start: 5117007,
								end: 5117734
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Karachi',
								start: 5117734,
								end: 5118e3
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Kashgar',
								start: 5118e3,
								end: 5118133
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Kathmandu',
								start: 5118133,
								end: 5118294
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Katmandu',
								start: 5118294,
								end: 5118455
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Khandyga',
								start: 5118455,
								end: 5119230
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Kolkata',
								start: 5119230,
								end: 5119450
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Krasnoyarsk',
								start: 5119450,
								end: 5120191
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Kuala_Lumpur',
								start: 5120191,
								end: 5120447
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Kuching',
								start: 5120447,
								end: 5120767
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Kuwait',
								start: 5120767,
								end: 5120900
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Macao',
								start: 5120900,
								end: 5121691
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Macau',
								start: 5121691,
								end: 5122482
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Magadan',
								start: 5122482,
								end: 5123233
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Makassar',
								start: 5123233,
								end: 5123423
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Manila',
								start: 5123423,
								end: 5123661
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Muscat',
								start: 5123661,
								end: 5123794
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Nicosia',
								start: 5123794,
								end: 5124391
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Novokuznetsk',
								start: 5124391,
								end: 5125117
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Novosibirsk',
								start: 5125117,
								end: 5125870
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Omsk',
								start: 5125870,
								end: 5126611
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Oral',
								start: 5126611,
								end: 5127236
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Phnom_Penh',
								start: 5127236,
								end: 5127388
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Pontianak',
								start: 5127388,
								end: 5127635
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Pyongyang',
								start: 5127635,
								end: 5127818
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Qatar',
								start: 5127818,
								end: 5127970
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Qostanay',
								start: 5127970,
								end: 5128594
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Qyzylorda',
								start: 5128594,
								end: 5129218
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Rangoon',
								start: 5129218,
								end: 5129405
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Riyadh',
								start: 5129405,
								end: 5129538
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Saigon',
								start: 5129538,
								end: 5129774
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Sakhalin',
								start: 5129774,
								end: 5130529
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Samarkand',
								start: 5130529,
								end: 5130895
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Seoul',
								start: 5130895,
								end: 5131310
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Shanghai',
								start: 5131310,
								end: 5131703
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Singapore',
								start: 5131703,
								end: 5131959
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Srednekolymsk',
								start: 5131959,
								end: 5132701
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Taipei',
								start: 5132701,
								end: 5133212
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Tashkent',
								start: 5133212,
								end: 5133578
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Tbilisi',
								start: 5133578,
								end: 5134207
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Tehran',
								start: 5134207,
								end: 5135019
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Tel_Aviv',
								start: 5135019,
								end: 5136093
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Thimbu',
								start: 5136093,
								end: 5136247
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Thimphu',
								start: 5136247,
								end: 5136401
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Tokyo',
								start: 5136401,
								end: 5136614
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Tomsk',
								start: 5136614,
								end: 5137367
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Ujung_Pandang',
								start: 5137367,
								end: 5137557
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Ulaanbaatar',
								start: 5137557,
								end: 5138151
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Ulan_Bator',
								start: 5138151,
								end: 5138745
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Urumqi',
								start: 5138745,
								end: 5138878
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Ust-Nera',
								start: 5138878,
								end: 5139649
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Vientiane',
								start: 5139649,
								end: 5139801
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Vladivostok',
								start: 5139801,
								end: 5140543
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Yakutsk',
								start: 5140543,
								end: 5141284
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Yangon',
								start: 5141284,
								end: 5141471
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Yekaterinburg',
								start: 5141471,
								end: 5142231
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Asia/Yerevan',
								start: 5142231,
								end: 5142939
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Atlantic/Azores',
								start: 5142939,
								end: 5144392
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Atlantic/Bermuda',
								start: 5144392,
								end: 5145416
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Atlantic/Canary',
								start: 5145416,
								end: 5145894
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Atlantic/Cape_Verde',
								start: 5145894,
								end: 5146069
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Atlantic/Faeroe',
								start: 5146069,
								end: 5146510
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Atlantic/Faroe',
								start: 5146510,
								end: 5146951
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Atlantic/Jan_Mayen',
								start: 5146951,
								end: 5147656
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Atlantic/Madeira',
								start: 5147656,
								end: 5149109
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Atlantic/Reykjavik',
								start: 5149109,
								end: 5149239
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Atlantic/South_Georgia',
								start: 5149239,
								end: 5149371
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Atlantic/St_Helena',
								start: 5149371,
								end: 5149501
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Atlantic/Stanley',
								start: 5149501,
								end: 5150290
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Australia/ACT',
								start: 5150290,
								end: 5151194
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Australia/Adelaide',
								start: 5151194,
								end: 5152115
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Australia/Brisbane',
								start: 5152115,
								end: 5152404
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Australia/Broken_Hill',
								start: 5152404,
								end: 5153345
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Australia/Canberra',
								start: 5153345,
								end: 5154249
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Australia/Currie',
								start: 5154249,
								end: 5155252
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Australia/Darwin',
								start: 5155252,
								end: 5155486
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Australia/Eucla',
								start: 5155486,
								end: 5155800
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Australia/Hobart',
								start: 5155800,
								end: 5156803
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Australia/LHI',
								start: 5156803,
								end: 5157495
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Australia/Lindeman',
								start: 5157495,
								end: 5157820
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Australia/Lord_Howe',
								start: 5157820,
								end: 5158512
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Australia/Melbourne',
								start: 5158512,
								end: 5159416
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Australia/NSW',
								start: 5159416,
								end: 5160320
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Australia/North',
								start: 5160320,
								end: 5160554
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Australia/Perth',
								start: 5160554,
								end: 5160860
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Australia/Queensland',
								start: 5160860,
								end: 5161149
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Australia/South',
								start: 5161149,
								end: 5162070
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Australia/Sydney',
								start: 5162070,
								end: 5162974
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Australia/Tasmania',
								start: 5162974,
								end: 5163977
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Australia/Victoria',
								start: 5163977,
								end: 5164881
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Australia/West',
								start: 5164881,
								end: 5165187
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Australia/Yancowinna',
								start: 5165187,
								end: 5166128
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Brazil/Acre',
								start: 5166128,
								end: 5166546
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Brazil/DeNoronha',
								start: 5166546,
								end: 5167030
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Brazil/East',
								start: 5167030,
								end: 5167982
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Brazil/West',
								start: 5167982,
								end: 5168394
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/CET',
								start: 5168394,
								end: 5169015
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/CST6CDT',
								start: 5169015,
								end: 5169966
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Canada/Atlantic',
								start: 5169966,
								end: 5171638
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Canada/Central',
								start: 5171638,
								end: 5172932
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Canada/Eastern',
								start: 5172932,
								end: 5174649
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Canada/Mountain',
								start: 5174649,
								end: 5175619
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Canada/Newfoundland',
								start: 5175619,
								end: 5177497
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Canada/Pacific',
								start: 5177497,
								end: 5178827
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Canada/Saskatchewan',
								start: 5178827,
								end: 5179465
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Canada/Yukon',
								start: 5179465,
								end: 5180494
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Chile/Continental',
								start: 5180494,
								end: 5181848
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Chile/EasterIsland',
								start: 5181848,
								end: 5183022
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Cuba',
								start: 5183022,
								end: 5184139
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/EET',
								start: 5184139,
								end: 5184636
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/EST',
								start: 5184636,
								end: 5184747
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/EST5EDT',
								start: 5184747,
								end: 5185698
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Egypt',
								start: 5185698,
								end: 5187007
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Eire',
								start: 5187007,
								end: 5188503
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT',
								start: 5188503,
								end: 5188614
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT+0',
								start: 5188614,
								end: 5188725
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT+1',
								start: 5188725,
								end: 5188838
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT+10',
								start: 5188838,
								end: 5188952
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT+11',
								start: 5188952,
								end: 5189066
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT+12',
								start: 5189066,
								end: 5189180
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT+2',
								start: 5189180,
								end: 5189293
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT+3',
								start: 5189293,
								end: 5189406
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT+4',
								start: 5189406,
								end: 5189519
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT+5',
								start: 5189519,
								end: 5189632
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT+6',
								start: 5189632,
								end: 5189745
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT+7',
								start: 5189745,
								end: 5189858
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT+8',
								start: 5189858,
								end: 5189971
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT+9',
								start: 5189971,
								end: 5190084
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT-0',
								start: 5190084,
								end: 5190195
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT-1',
								start: 5190195,
								end: 5190309
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT-10',
								start: 5190309,
								end: 5190424
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT-11',
								start: 5190424,
								end: 5190539
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT-12',
								start: 5190539,
								end: 5190654
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT-13',
								start: 5190654,
								end: 5190769
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT-14',
								start: 5190769,
								end: 5190884
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT-2',
								start: 5190884,
								end: 5190998
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT-3',
								start: 5190998,
								end: 5191112
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT-4',
								start: 5191112,
								end: 5191226
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT-5',
								start: 5191226,
								end: 5191340
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT-6',
								start: 5191340,
								end: 5191454
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT-7',
								start: 5191454,
								end: 5191568
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT-8',
								start: 5191568,
								end: 5191682
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT-9',
								start: 5191682,
								end: 5191796
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/GMT0',
								start: 5191796,
								end: 5191907
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/Greenwich',
								start: 5191907,
								end: 5192018
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/UCT',
								start: 5192018,
								end: 5192129
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/UTC',
								start: 5192129,
								end: 5192240
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/Universal',
								start: 5192240,
								end: 5192351
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Etc/Zulu',
								start: 5192351,
								end: 5192462
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Amsterdam',
								start: 5192462,
								end: 5193565
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Andorra',
								start: 5193565,
								end: 5193954
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Astrakhan',
								start: 5193954,
								end: 5194680
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Athens',
								start: 5194680,
								end: 5195362
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Belfast',
								start: 5195362,
								end: 5196961
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Belgrade',
								start: 5196961,
								end: 5197439
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Berlin',
								start: 5197439,
								end: 5198144
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Bratislava',
								start: 5198144,
								end: 5198867
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Brussels',
								start: 5198867,
								end: 5199970
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Bucharest',
								start: 5199970,
								end: 5200631
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Budapest',
								start: 5200631,
								end: 5201397
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Busingen',
								start: 5201397,
								end: 5201894
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Chisinau',
								start: 5201894,
								end: 5202649
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Copenhagen',
								start: 5202649,
								end: 5203354
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Dublin',
								start: 5203354,
								end: 5204850
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Gibraltar',
								start: 5204850,
								end: 5206070
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Guernsey',
								start: 5206070,
								end: 5207669
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Helsinki',
								start: 5207669,
								end: 5208150
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Isle_of_Man',
								start: 5208150,
								end: 5209749
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Istanbul',
								start: 5209749,
								end: 5210949
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Jersey',
								start: 5210949,
								end: 5212548
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Kaliningrad',
								start: 5212548,
								end: 5213452
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Kiev',
								start: 5213452,
								end: 5214010
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Kirov',
								start: 5214010,
								end: 5214745
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Kyiv',
								start: 5214745,
								end: 5215303
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Lisbon',
								start: 5215303,
								end: 5216757
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Ljubljana',
								start: 5216757,
								end: 5217235
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/London',
								start: 5217235,
								end: 5218834
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Luxembourg',
								start: 5218834,
								end: 5219937
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Madrid',
								start: 5219937,
								end: 5220834
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Malta',
								start: 5220834,
								end: 5221762
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Mariehamn',
								start: 5221762,
								end: 5222243
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Minsk',
								start: 5222243,
								end: 5223051
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Monaco',
								start: 5223051,
								end: 5224156
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Moscow',
								start: 5224156,
								end: 5225064
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Nicosia',
								start: 5225064,
								end: 5225661
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Oslo',
								start: 5225661,
								end: 5226366
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Paris',
								start: 5226366,
								end: 5227471
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Podgorica',
								start: 5227471,
								end: 5227949
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Prague',
								start: 5227949,
								end: 5228672
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Riga',
								start: 5228672,
								end: 5229366
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Rome',
								start: 5229366,
								end: 5230313
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Samara',
								start: 5230313,
								end: 5231045
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/San_Marino',
								start: 5231045,
								end: 5231992
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Sarajevo',
								start: 5231992,
								end: 5232470
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Saratov',
								start: 5232470,
								end: 5233196
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Simferopol',
								start: 5233196,
								end: 5234061
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Skopje',
								start: 5234061,
								end: 5234539
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Sofia',
								start: 5234539,
								end: 5235131
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Stockholm',
								start: 5235131,
								end: 5235836
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Tallinn',
								start: 5235836,
								end: 5236511
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Tirane',
								start: 5236511,
								end: 5237115
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Tiraspol',
								start: 5237115,
								end: 5237870
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Ulyanovsk',
								start: 5237870,
								end: 5238630
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Uzhgorod',
								start: 5238630,
								end: 5239188
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Vaduz',
								start: 5239188,
								end: 5239685
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Vatican',
								start: 5239685,
								end: 5240632
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Vienna',
								start: 5240632,
								end: 5241290
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Vilnius',
								start: 5241290,
								end: 5241966
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Volgograd',
								start: 5241966,
								end: 5242719
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Warsaw',
								start: 5242719,
								end: 5243642
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Zagreb',
								start: 5243642,
								end: 5244120
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Zaporozhye',
								start: 5244120,
								end: 5244678
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Europe/Zurich',
								start: 5244678,
								end: 5245175
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Factory',
								start: 5245175,
								end: 5245288
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/GB',
								start: 5245288,
								end: 5246887
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/GB-Eire',
								start: 5246887,
								end: 5248486
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/GMT',
								start: 5248486,
								end: 5248597
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/GMT+0',
								start: 5248597,
								end: 5248708
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/GMT-0',
								start: 5248708,
								end: 5248819
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/GMT0',
								start: 5248819,
								end: 5248930
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Greenwich',
								start: 5248930,
								end: 5249041
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/HST',
								start: 5249041,
								end: 5249153
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Hongkong',
								start: 5249153,
								end: 5249928
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Iceland',
								start: 5249928,
								end: 5250058
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Indian/Antananarivo',
								start: 5250058,
								end: 5250249
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Indian/Chagos',
								start: 5250249,
								end: 5250401
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Indian/Christmas',
								start: 5250401,
								end: 5250553
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Indian/Cocos',
								start: 5250553,
								end: 5250740
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Indian/Comoro',
								start: 5250740,
								end: 5250931
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Indian/Kerguelen',
								start: 5250931,
								end: 5251083
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Indian/Mahe',
								start: 5251083,
								end: 5251216
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Indian/Maldives',
								start: 5251216,
								end: 5251368
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Indian/Mauritius',
								start: 5251368,
								end: 5251547
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Indian/Mayotte',
								start: 5251547,
								end: 5251738
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Indian/Reunion',
								start: 5251738,
								end: 5251871
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Iran',
								start: 5251871,
								end: 5252683
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Israel',
								start: 5252683,
								end: 5253757
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Jamaica',
								start: 5253757,
								end: 5254096
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Japan',
								start: 5254096,
								end: 5254309
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Kwajalein',
								start: 5254309,
								end: 5254528
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Libya',
								start: 5254528,
								end: 5254959
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/MET',
								start: 5254959,
								end: 5255580
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/MST',
								start: 5255580,
								end: 5255691
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/MST7MDT',
								start: 5255691,
								end: 5256642
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Mexico/BajaNorte',
								start: 5256642,
								end: 5257667
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Mexico/BajaSur',
								start: 5257667,
								end: 5258385
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Mexico/General',
								start: 5258385,
								end: 5259158
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/NZ',
								start: 5259158,
								end: 5260201
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/NZ-CHAT',
								start: 5260201,
								end: 5261009
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Navajo',
								start: 5261009,
								end: 5262051
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/PRC',
								start: 5262051,
								end: 5262444
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/PST8PDT',
								start: 5262444,
								end: 5263395
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Apia',
								start: 5263395,
								end: 5263802
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Auckland',
								start: 5263802,
								end: 5264845
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Bougainville',
								start: 5264845,
								end: 5265046
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Chatham',
								start: 5265046,
								end: 5265854
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Chuuk',
								start: 5265854,
								end: 5266008
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Easter',
								start: 5266008,
								end: 5267182
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Efate',
								start: 5267182,
								end: 5267524
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Enderbury',
								start: 5267524,
								end: 5267696
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Fakaofo',
								start: 5267696,
								end: 5267849
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Fiji',
								start: 5267849,
								end: 5268245
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Funafuti',
								start: 5268245,
								end: 5268379
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Galapagos',
								start: 5268379,
								end: 5268554
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Gambier',
								start: 5268554,
								end: 5268686
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Guadalcanal',
								start: 5268686,
								end: 5268820
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Guam',
								start: 5268820,
								end: 5269170
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Honolulu',
								start: 5269170,
								end: 5269391
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Johnston',
								start: 5269391,
								end: 5269612
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Kanton',
								start: 5269612,
								end: 5269784
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Kiritimati',
								start: 5269784,
								end: 5269958
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Kosrae',
								start: 5269958,
								end: 5270200
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Kwajalein',
								start: 5270200,
								end: 5270419
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Majuro',
								start: 5270419,
								end: 5270553
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Marquesas',
								start: 5270553,
								end: 5270692
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Midway',
								start: 5270692,
								end: 5270838
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Nauru',
								start: 5270838,
								end: 5271021
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Niue',
								start: 5271021,
								end: 5271175
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Norfolk',
								start: 5271175,
								end: 5271422
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Noumea',
								start: 5271422,
								end: 5271620
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Pago_Pago',
								start: 5271620,
								end: 5271766
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Palau',
								start: 5271766,
								end: 5271914
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Pitcairn',
								start: 5271914,
								end: 5272067
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Pohnpei',
								start: 5272067,
								end: 5272201
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Ponape',
								start: 5272201,
								end: 5272335
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Port_Moresby',
								start: 5272335,
								end: 5272489
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Rarotonga',
								start: 5272489,
								end: 5272895
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Saipan',
								start: 5272895,
								end: 5273245
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Samoa',
								start: 5273245,
								end: 5273391
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Tahiti',
								start: 5273391,
								end: 5273524
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Tarawa',
								start: 5273524,
								end: 5273658
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Tongatapu',
								start: 5273658,
								end: 5273895
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Truk',
								start: 5273895,
								end: 5274049
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Wake',
								start: 5274049,
								end: 5274183
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Wallis',
								start: 5274183,
								end: 5274317
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Pacific/Yap',
								start: 5274317,
								end: 5274471
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Poland',
								start: 5274471,
								end: 5275394
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Portugal',
								start: 5275394,
								end: 5276848
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/ROC',
								start: 5276848,
								end: 5277359
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/ROK',
								start: 5277359,
								end: 5277774
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Singapore',
								start: 5277774,
								end: 5278030
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Turkey',
								start: 5278030,
								end: 5279230
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/UCT',
								start: 5279230,
								end: 5279341
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/US/Alaska',
								start: 5279341,
								end: 5280318
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/US/Aleutian',
								start: 5280318,
								end: 5281287
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/US/Arizona',
								start: 5281287,
								end: 5281527
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/US/Central',
								start: 5281527,
								end: 5283281
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/US/East-Indiana',
								start: 5283281,
								end: 5283812
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/US/Eastern',
								start: 5283812,
								end: 5285556
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/US/Hawaii',
								start: 5285556,
								end: 5285777
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/US/Indiana-Starke',
								start: 5285777,
								end: 5286793
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/US/Michigan',
								start: 5286793,
								end: 5287692
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/US/Mountain',
								start: 5287692,
								end: 5288734
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/US/Pacific',
								start: 5288734,
								end: 5290028
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/US/Samoa',
								start: 5290028,
								end: 5290174
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/UTC',
								start: 5290174,
								end: 5290285
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Universal',
								start: 5290285,
								end: 5290396
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/W-SU',
								start: 5290396,
								end: 5291304
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/WET',
								start: 5291304,
								end: 5291798
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezone/Zulu',
								start: 5291798,
								end: 5291909
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezonesets/Africa.txt',
								start: 5291909,
								end: 5298882
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezonesets/America.txt',
								start: 5298882,
								end: 5309889
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezonesets/Antarctica.txt',
								start: 5309889,
								end: 5311023
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezonesets/Asia.txt',
								start: 5311023,
								end: 5319334
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezonesets/Atlantic.txt',
								start: 5319334,
								end: 5322867
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezonesets/Australia',
								start: 5322867,
								end: 5324002
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezonesets/Australia.txt',
								start: 5324002,
								end: 5327386
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezonesets/Default',
								start: 5327386,
								end: 5354636
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezonesets/Etc.txt',
								start: 5354636,
								end: 5355886
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezonesets/Europe.txt',
								start: 5355886,
								end: 5364668
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezonesets/India',
								start: 5364668,
								end: 5365261
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezonesets/Indian.txt',
								start: 5365261,
								end: 5366522
							},
							{
								filename: '/tmp/pglite/share/postgresql/timezonesets/Pacific.txt',
								start: 5366522,
								end: 5370290
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/danish.stop',
								start: 5370290,
								end: 5370714
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/dutch.stop',
								start: 5370714,
								end: 5371167
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/english.stop',
								start: 5371167,
								end: 5371789
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/finnish.stop',
								start: 5371789,
								end: 5373368
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/french.stop',
								start: 5373368,
								end: 5374173
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/german.stop',
								start: 5374173,
								end: 5375522
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/hungarian.stop',
								start: 5375522,
								end: 5376749
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/hunspell_sample.affix',
								start: 5376749,
								end: 5376992
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/hunspell_sample_long.affix',
								start: 5376992,
								end: 5377625
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/hunspell_sample_long.dict',
								start: 5377625,
								end: 5377723
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/hunspell_sample_num.affix',
								start: 5377723,
								end: 5378185
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/hunspell_sample_num.dict',
								start: 5378185,
								end: 5378314
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/ispell_sample.affix',
								start: 5378314,
								end: 5378779
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/ispell_sample.dict',
								start: 5378779,
								end: 5378860
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/italian.stop',
								start: 5378860,
								end: 5380514
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/nepali.stop',
								start: 5380514,
								end: 5384775
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/norwegian.stop',
								start: 5384775,
								end: 5385626
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/portuguese.stop',
								start: 5385626,
								end: 5386893
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/russian.stop',
								start: 5386893,
								end: 5388128
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/spanish.stop',
								start: 5388128,
								end: 5390306
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/swedish.stop',
								start: 5390306,
								end: 5390865
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/synonym_sample.syn',
								start: 5390865,
								end: 5390938
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/thesaurus_sample.ths',
								start: 5390938,
								end: 5391411
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/turkish.stop',
								start: 5391411,
								end: 5391671
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/unaccent.rules',
								start: 5391671,
								end: 5401610
							},
							{
								filename: '/tmp/pglite/share/postgresql/tsearch_data/xsyn_sample.rules',
								start: 5401610,
								end: 5401749
							}
						],
						remote_package_size: 5401749
					});
				})();
			var moduleOverrides = Object.assign({}, Module),
				arguments_ = [],
				thisProgram = './this.program',
				quit_ = (e, t) => {
					throw t;
				},
				scriptDirectory = '';
			function locateFile(e) {
				return Module.locateFile ? Module.locateFile(e, scriptDirectory) : scriptDirectory + e;
			}
			var readAsync, readBinary;
			if (ENVIRONMENT_IS_NODE) {
				var fs = require('fs'),
					nodePath = require('path');
				import.meta.url.startsWith('data:') ||
					(scriptDirectory = nodePath.dirname(require('url').fileURLToPath(import.meta.url)) + '/'),
					(readBinary = (e) => {
						e = isFileURI(e) ? new URL(e) : e;
						var t = fs.readFileSync(e);
						return t;
					}),
					(readAsync = async (e, t = !0) => {
						e = isFileURI(e) ? new URL(e) : e;
						var I = fs.readFileSync(e, t ? void 0 : 'utf8');
						return I;
					}),
					!Module.thisProgram &&
						process.argv.length > 1 &&
						(thisProgram = process.argv[1].replace(/\\/g, '/')),
					(arguments_ = process.argv.slice(2)),
					(quit_ = (e, t) => {
						throw ((process.exitCode = e), t);
					});
			} else
				(ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) &&
					(ENVIRONMENT_IS_WORKER
						? (scriptDirectory = self.location.href)
						: typeof document < 'u' &&
							document.currentScript &&
							(scriptDirectory = document.currentScript.src),
					_scriptName && (scriptDirectory = _scriptName),
					scriptDirectory.startsWith('blob:')
						? (scriptDirectory = '')
						: (scriptDirectory = scriptDirectory.substr(
								0,
								scriptDirectory.replace(/[?#].*/, '').lastIndexOf('/') + 1
							)),
					(readAsync = async (e) => {
						var t = await fetch(e, { credentials: 'same-origin' });
						if (t.ok) return t.arrayBuffer();
						throw new Error(t.status + ' : ' + t.url);
					}));
			var out = Module.print || console.log.bind(console),
				err = Module.printErr || console.error.bind(console);
			Object.assign(Module, moduleOverrides),
				(moduleOverrides = null),
				Module.arguments && (arguments_ = Module.arguments),
				Module.thisProgram && (thisProgram = Module.thisProgram);
			var dynamicLibraries = Module.dynamicLibraries || [],
				wasmBinary = Module.wasmBinary,
				wasmMemory,
				ABORT = !1,
				EXITSTATUS;
			function assert(e, t) {
				e || abort(t);
			}
			var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAP64, HEAPF64;
			function updateMemoryViews() {
				var e = wasmMemory.buffer;
				(Module.HEAP8 = HEAP8 = new Int8Array(e)),
					(Module.HEAP16 = HEAP16 = new Int16Array(e)),
					(Module.HEAPU8 = HEAPU8 = new Uint8Array(e)),
					(Module.HEAPU16 = HEAPU16 = new Uint16Array(e)),
					(Module.HEAP32 = HEAP32 = new Int32Array(e)),
					(Module.HEAPU32 = HEAPU32 = new Uint32Array(e)),
					(Module.HEAPF32 = HEAPF32 = new Float32Array(e)),
					(Module.HEAPF64 = HEAPF64 = new Float64Array(e)),
					(Module.HEAP64 = HEAP64 = new BigInt64Array(e)),
					(Module.HEAPU64 = new BigUint64Array(e));
			}
			if (Module.wasmMemory) wasmMemory = Module.wasmMemory;
			else {
				var INITIAL_MEMORY = Module.INITIAL_MEMORY || 134217728;
				wasmMemory = new WebAssembly.Memory({ initial: INITIAL_MEMORY / 65536, maximum: 32768 });
			}
			updateMemoryViews();
			var __ATPRERUN__ = [],
				__ATINIT__ = [],
				__ATMAIN__ = [],
				__ATPOSTRUN__ = [],
				__RELOC_FUNCS__ = [],
				runtimeInitialized = !1;
			function preRun() {
				if (Module.preRun)
					for (
						typeof Module.preRun == 'function' && (Module.preRun = [Module.preRun]);
						Module.preRun.length;

					)
						addOnPreRun(Module.preRun.shift());
				callRuntimeCallbacks(__ATPRERUN__);
			}
			function initRuntime() {
				(runtimeInitialized = !0),
					callRuntimeCallbacks(__RELOC_FUNCS__),
					!Module.noFSInit && !FS.initialized && FS.init(),
					(FS.ignorePermissions = !1),
					(SOCKFS.root = FS.mount(SOCKFS, {}, null)),
					(PIPEFS.root = FS.mount(PIPEFS, {}, null)),
					callRuntimeCallbacks(__ATINIT__);
			}
			function preMain() {
				callRuntimeCallbacks(__ATMAIN__);
			}
			function postRun() {
				if (Module.postRun)
					for (
						typeof Module.postRun == 'function' && (Module.postRun = [Module.postRun]);
						Module.postRun.length;

					)
						addOnPostRun(Module.postRun.shift());
				callRuntimeCallbacks(__ATPOSTRUN__);
			}
			function addOnPreRun(e) {
				__ATPRERUN__.unshift(e);
			}
			function addOnInit(e) {
				__ATINIT__.unshift(e);
			}
			function addOnPostRun(e) {
				__ATPOSTRUN__.unshift(e);
			}
			var runDependencies = 0,
				dependenciesFulfilled = null;
			function addRunDependency(e) {
				var t;
				runDependencies++,
					(t = Module.monitorRunDependencies) == null || t.call(Module, runDependencies);
			}
			function removeRunDependency(e) {
				var I;
				if (
					(runDependencies--,
					(I = Module.monitorRunDependencies) == null || I.call(Module, runDependencies),
					runDependencies == 0 && dependenciesFulfilled)
				) {
					var t = dependenciesFulfilled;
					(dependenciesFulfilled = null), t();
				}
			}
			function abort(e) {
				var I;
				(I = Module.onAbort) == null || I.call(Module, e),
					(e = 'Aborted(' + e + ')'),
					err(e),
					(ABORT = !0),
					(e += '. Build with -sASSERTIONS for more info.');
				var t = new WebAssembly.RuntimeError(e);
				throw (readyPromiseReject(t), t);
			}
			var dataURIPrefix = 'data:application/octet-stream;base64,',
				isDataURI = (e) => e.startsWith(dataURIPrefix),
				isFileURI = (e) => e.startsWith('file://');
			function findWasmBinary() {
				if (Module.locateFile) {
					var e = 'postgres.wasm';
					return isDataURI(e) ? e : locateFile(e);
				}
				return new URL(
					'' + new URL('../assets/postgres.CyuUVpXN.wasm', import.meta.url).href,
					import.meta.url
				).href;
			}
			var wasmBinaryFile;
			function getBinarySync(e) {
				if (e == wasmBinaryFile && wasmBinary) return new Uint8Array(wasmBinary);
				if (readBinary) return readBinary(e);
				throw 'both async and sync fetching of the wasm failed';
			}
			async function getWasmBinary(e) {
				if (!wasmBinary)
					try {
						var t = await readAsync(e);
						return new Uint8Array(t);
					} catch {}
				return getBinarySync(e);
			}
			async function instantiateArrayBuffer(e, t) {
				try {
					var I = await getWasmBinary(e),
						B = await WebAssembly.instantiate(I, t);
					return B;
				} catch (tr) {
					err(`failed to asynchronously prepare wasm: ${tr}`), abort(tr);
				}
			}
			async function instantiateAsync(e, t, I) {
				if (
					!e &&
					typeof WebAssembly.instantiateStreaming == 'function' &&
					!isDataURI(t) &&
					!ENVIRONMENT_IS_NODE &&
					typeof fetch == 'function'
				)
					try {
						var B = fetch(t, { credentials: 'same-origin' }),
							tr = await WebAssembly.instantiateStreaming(B, I);
						return tr;
					} catch (rr) {
						err(`wasm streaming compile failed: ${rr}`),
							err('falling back to ArrayBuffer instantiation');
					}
				return instantiateArrayBuffer(t, I);
			}
			function getWasmImports() {
				return {
					env: wasmImports,
					wasi_snapshot_preview1: wasmImports,
					'GOT.mem': new Proxy(wasmImports, GOTHandler),
					'GOT.func': new Proxy(wasmImports, GOTHandler)
				};
			}
			async function createWasm() {
				function e(tr, rr) {
					(wasmExports = tr.exports), (wasmExports = relocateExports(wasmExports, 16777216));
					var ir = getDylinkMetadata(rr);
					return (
						ir.neededDynlibs && (dynamicLibraries = ir.neededDynlibs.concat(dynamicLibraries)),
						mergeLibSymbols(wasmExports),
						LDSO.init(),
						loadDylibs(),
						addOnInit(wasmExports.__wasm_call_ctors),
						__RELOC_FUNCS__.push(wasmExports.__wasm_apply_data_relocs),
						removeRunDependency(),
						wasmExports
					);
				}
				addRunDependency();
				function t(tr) {
					e(tr.instance, tr.module);
				}
				var I = getWasmImports();
				if (Module.instantiateWasm)
					try {
						return Module.instantiateWasm(I, e);
					} catch (tr) {
						err(`Module.instantiateWasm callback failed with error: ${tr}`), readyPromiseReject(tr);
					}
				wasmBinaryFile ?? (wasmBinaryFile = findWasmBinary());
				try {
					var B = await instantiateAsync(wasmBinary, wasmBinaryFile, I);
					return t(B), B;
				} catch (tr) {
					readyPromiseReject(tr);
					return;
				}
			}
			var ASM_CONSTS = {
				18792944: (e) => {
					(Module.is_worker = typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope),
						(Module.FD_BUFFER_MAX = e),
						(Module.emscripten_copy_to = console.warn);
				},
				18793117: () => {
					Module.postMessage = function (e) {
						console.log('# 1252: onCustomMessage:', __FILE__, e);
					};
				},
				18793242: () => {
					if (Module.is_worker) {
						let e = function (t) {
							console.log('onCustomMessage:', t);
						};
						Module.onCustomMessage = e;
					} else
						Module.postMessage = function (e) {
							switch (e.type) {
								case 'raw': {
									stringToUTF8(e.data, shm_rawinput, Module.FD_BUFFER_MAX);
									break;
								}
								case 'stdin': {
									stringToUTF8(e.data, 1, Module.FD_BUFFER_MAX);
									break;
								}
								case 'rcon': {
									stringToUTF8(e.data, shm_rcon, Module.FD_BUFFER_MAX);
									break;
								}
								default:
									console.warn('custom_postMessage?', e);
							}
						};
				}
			};
			function is_web_env() {
				try {
					if (window) return 1;
				} catch {
					return 0;
				}
			}
			is_web_env.sig = 'i';
			class ExitStatus {
				constructor(t) {
					P$1(this, 'name', 'ExitStatus'),
						(this.message = `Program terminated with exit(${t})`),
						(this.status = t);
				}
			}
			var GOT = {},
				currentModuleWeakSymbols = new Set([]),
				GOTHandler = {
					get(e, t) {
						var I = GOT[t];
						return (
							I || (I = GOT[t] = new WebAssembly.Global({ value: 'i32', mutable: !0 })),
							currentModuleWeakSymbols.has(t) || (I.required = !0),
							I
						);
					}
				},
				callRuntimeCallbacks = (e) => {
					for (; e.length > 0; ) e.shift()(Module);
				},
				UTF8Decoder = typeof TextDecoder < 'u' ? new TextDecoder() : void 0,
				UTF8ArrayToString = (e, t = 0, I = NaN) => {
					for (var B = t + I, tr = t; e[tr] && !(tr >= B); ) ++tr;
					if (tr - t > 16 && e.buffer && UTF8Decoder) return UTF8Decoder.decode(e.subarray(t, tr));
					for (var rr = ''; t < tr; ) {
						var ir = e[t++];
						if (!(ir & 128)) {
							rr += String.fromCharCode(ir);
							continue;
						}
						var lr = e[t++] & 63;
						if ((ir & 224) == 192) {
							rr += String.fromCharCode(((ir & 31) << 6) | lr);
							continue;
						}
						var dr = e[t++] & 63;
						if (
							((ir & 240) == 224
								? (ir = ((ir & 15) << 12) | (lr << 6) | dr)
								: (ir = ((ir & 7) << 18) | (lr << 12) | (dr << 6) | (e[t++] & 63)),
							ir < 65536)
						)
							rr += String.fromCharCode(ir);
						else {
							var mr = ir - 65536;
							rr += String.fromCharCode(55296 | (mr >> 10), 56320 | (mr & 1023));
						}
					}
					return rr;
				},
				getDylinkMetadata = (e) => {
					var t = 0,
						I = 0;
					function B() {
						return e[t++];
					}
					function tr() {
						for (var Dr = 0, zr = 1; ; ) {
							var Jr = e[t++];
							if (((Dr += (Jr & 127) * zr), (zr *= 128), !(Jr & 128))) break;
						}
						return Dr;
					}
					function rr() {
						var Dr = tr();
						return (t += Dr), UTF8ArrayToString(e, t - Dr, Dr);
					}
					function ir(Dr, zr) {
						if (Dr) throw new Error(zr);
					}
					var lr = 'dylink.0';
					if (e instanceof WebAssembly.Module) {
						var dr = WebAssembly.Module.customSections(e, lr);
						dr.length === 0 && ((lr = 'dylink'), (dr = WebAssembly.Module.customSections(e, lr))),
							ir(dr.length === 0, 'need dylink section'),
							(e = new Uint8Array(dr[0])),
							(I = e.length);
					} else {
						var mr = new Uint32Array(new Uint8Array(e.subarray(0, 24)).buffer),
							_r = mr[0] == 1836278016;
						ir(!_r, 'need to see wasm magic number'),
							ir(e[8] !== 0, 'need the dylink section to be first'),
							(t = 9);
						var fr = tr();
						(I = t + fr), (lr = rr());
					}
					var hr = { neededDynlibs: [], tlsExports: new Set(), weakImports: new Set() };
					if (lr == 'dylink') {
						(hr.memorySize = tr()),
							(hr.memoryAlign = tr()),
							(hr.tableSize = tr()),
							(hr.tableAlign = tr());
						for (var Mr = tr(), gr = 0; gr < Mr; ++gr) {
							var yr = rr();
							hr.neededDynlibs.push(yr);
						}
					} else {
						ir(lr !== 'dylink.0');
						for (var xr = 1, vr = 2, Sr = 3, wr = 4, br = 256, Fr = 3, Ir = 1; t < I; ) {
							var kr = B(),
								Or = tr();
							if (kr === xr)
								(hr.memorySize = tr()),
									(hr.memoryAlign = tr()),
									(hr.tableSize = tr()),
									(hr.tableAlign = tr());
							else if (kr === vr)
								for (var Mr = tr(), gr = 0; gr < Mr; ++gr) (yr = rr()), hr.neededDynlibs.push(yr);
							else if (kr === Sr)
								for (var Lr = tr(); Lr--; ) {
									var Gr = rr(),
										es = tr();
									es & br && hr.tlsExports.add(Gr);
								}
							else if (kr === wr)
								for (var Lr = tr(); Lr--; ) {
									rr();
									var Gr = rr(),
										es = tr();
									(es & Fr) == Ir && hr.weakImports.add(Gr);
								}
							else t += Or;
						}
					}
					return hr;
				};
			function getValue(e, t = 'i8') {
				switch ((t.endsWith('*') && (t = '*'), t)) {
					case 'i1':
						return HEAP8[e];
					case 'i8':
						return HEAP8[e];
					case 'i16':
						return HEAP16[e >> 1];
					case 'i32':
						return HEAP32[e >> 2];
					case 'i64':
						return HEAP64[e >> 3];
					case 'float':
						return HEAPF32[e >> 2];
					case 'double':
						return HEAPF64[e >> 3];
					case '*':
						return HEAPU32[e >> 2];
					default:
						abort(`invalid type for getValue: ${t}`);
				}
			}
			var newDSO = (e, t, I) => {
					var B = { refcount: 1 / 0, name: e, exports: I, global: !0 };
					return (LDSO.loadedLibsByName[e] = B), t != null && (LDSO.loadedLibsByHandle[t] = B), B;
				},
				LDSO = {
					loadedLibsByName: {},
					loadedLibsByHandle: {},
					init() {
						newDSO('__main__', 0, wasmImports);
					}
				},
				___heap_base = 23144432,
				alignMemory = (e, t) => Math.ceil(e / t) * t,
				getMemory = (e) => {
					if (runtimeInitialized) return _calloc(e, 1);
					var t = ___heap_base,
						I = t + alignMemory(e, 16);
					return (___heap_base = I), (GOT.__heap_base.value = I), t;
				},
				isInternalSym = (e) =>
					[
						'__cpp_exception',
						'__c_longjmp',
						'__wasm_apply_data_relocs',
						'__dso_handle',
						'__tls_size',
						'__tls_align',
						'__set_stack_limits',
						'_emscripten_tls_init',
						'__wasm_init_tls',
						'__wasm_call_ctors',
						'__start_em_asm',
						'__stop_em_asm',
						'__start_em_js',
						'__stop_em_js'
					].includes(e) || e.startsWith('__em_js__'),
				uleb128Encode = (e, t) => {
					e < 128 ? t.push(e) : t.push(e % 128 | 128, e >> 7);
				},
				sigToWasmTypes = (e) => {
					for (
						var t = { i: 'i32', j: 'i64', f: 'f32', d: 'f64', e: 'externref', p: 'i32' },
							I = { parameters: [], results: e[0] == 'v' ? [] : [t[e[0]]] },
							B = 1;
						B < e.length;
						++B
					)
						I.parameters.push(t[e[B]]);
					return I;
				},
				generateFuncType = (e, t) => {
					var I = e.slice(0, 1),
						B = e.slice(1),
						tr = { i: 127, p: 127, j: 126, f: 125, d: 124, e: 111 };
					t.push(96), uleb128Encode(B.length, t);
					for (var rr = 0; rr < B.length; ++rr) t.push(tr[B[rr]]);
					I == 'v' ? t.push(0) : t.push(1, tr[I]);
				},
				convertJsFunctionToWasm = (e, t) => {
					if (typeof WebAssembly.Function == 'function')
						return new WebAssembly.Function(sigToWasmTypes(t), e);
					var I = [1];
					generateFuncType(t, I);
					var B = [0, 97, 115, 109, 1, 0, 0, 0, 1];
					uleb128Encode(I.length, B),
						B.push(...I),
						B.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
					var tr = new WebAssembly.Module(new Uint8Array(B)),
						rr = new WebAssembly.Instance(tr, { e: { f: e } }),
						ir = rr.exports.f;
					return ir;
				},
				wasmTableMirror = [],
				wasmTable = new WebAssembly.Table({ initial: 5360, element: 'anyfunc' }),
				getWasmTableEntry = (e) => {
					var t = wasmTableMirror[e];
					return (
						t ||
							(e >= wasmTableMirror.length && (wasmTableMirror.length = e + 1),
							(wasmTableMirror[e] = t = wasmTable.get(e))),
						t
					);
				},
				updateTableMap = (e, t) => {
					if (functionsInTableMap)
						for (var I = e; I < e + t; I++) {
							var B = getWasmTableEntry(I);
							B && functionsInTableMap.set(B, I);
						}
				},
				functionsInTableMap,
				getFunctionAddress = (e) => (
					functionsInTableMap ||
						((functionsInTableMap = new WeakMap()), updateTableMap(0, wasmTable.length)),
					functionsInTableMap.get(e) || 0
				),
				freeTableIndexes = [],
				getEmptyTableSlot = () => {
					if (freeTableIndexes.length) return freeTableIndexes.pop();
					try {
						wasmTable.grow(1);
					} catch (e) {
						throw e instanceof RangeError
							? 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.'
							: e;
					}
					return wasmTable.length - 1;
				},
				setWasmTableEntry = (e, t) => {
					wasmTable.set(e, t), (wasmTableMirror[e] = wasmTable.get(e));
				},
				addFunction = (e, t) => {
					var I = getFunctionAddress(e);
					if (I) return I;
					var B = getEmptyTableSlot();
					try {
						setWasmTableEntry(B, e);
					} catch (rr) {
						if (!(rr instanceof TypeError)) throw rr;
						var tr = convertJsFunctionToWasm(e, t);
						setWasmTableEntry(B, tr);
					}
					return functionsInTableMap.set(e, B), B;
				},
				updateGOT = (e, t) => {
					for (var I in e)
						if (!isInternalSym(I)) {
							var B = e[I];
							GOT[I] || (GOT[I] = new WebAssembly.Global({ value: 'i32', mutable: !0 })),
								GOT[I].value == 0 &&
									(typeof B == 'function'
										? (GOT[I].value = addFunction(B))
										: typeof B == 'number'
											? (GOT[I].value = B)
											: err(`unhandled export type for '${I}': ${typeof B}`));
						}
				},
				relocateExports = (e, t, I) => {
					var B = {};
					for (var tr in e) {
						var rr = e[tr];
						typeof rr == 'object' && (rr = rr.value),
							typeof rr == 'number' && (rr += t),
							(B[tr] = rr);
					}
					return updateGOT(B), B;
				},
				isSymbolDefined = (e) => {
					var t = wasmImports[e];
					return !(!t || t.stub);
				},
				dynCall = (e, t, I = []) => {
					var B = getWasmTableEntry(t)(...I);
					return B;
				},
				stackSave = () => _emscripten_stack_get_current(),
				stackRestore = (e) => __emscripten_stack_restore(e),
				createInvokeFunction =
					(e) =>
					(t, ...I) => {
						var B = stackSave();
						try {
							return dynCall(e, t, I);
						} catch (tr) {
							if ((stackRestore(B), tr !== tr + 0)) throw tr;
							if ((_setThrew(1, 0), e[0] == 'j')) return 0n;
						}
					},
				resolveGlobalSymbol = (e, t = !1) => {
					var I;
					return (
						isSymbolDefined(e)
							? (I = wasmImports[e])
							: e.startsWith('invoke_') &&
								(I = wasmImports[e] = createInvokeFunction(e.split('_')[1])),
						{ sym: I, name: e }
					);
				},
				UTF8ToString = (e, t) => (e ? UTF8ArrayToString(HEAPU8, e, t) : ''),
				loadWebAssemblyModule = (binary, flags, libName, localScope, handle) => {
					var metadata = getDylinkMetadata(binary);
					currentModuleWeakSymbols = metadata.weakImports;
					function loadModule() {
						var firstLoad = !handle || !HEAP8[handle + 8];
						if (firstLoad) {
							var memAlign = Math.pow(2, metadata.memoryAlign),
								memoryBase = metadata.memorySize
									? alignMemory(getMemory(metadata.memorySize + memAlign), memAlign)
									: 0,
								tableBase = metadata.tableSize ? wasmTable.length : 0;
							handle &&
								((HEAP8[handle + 8] = 1),
								(HEAPU32[(handle + 12) >> 2] = memoryBase),
								(HEAP32[(handle + 16) >> 2] = metadata.memorySize),
								(HEAPU32[(handle + 20) >> 2] = tableBase),
								(HEAP32[(handle + 24) >> 2] = metadata.tableSize));
						} else
							(memoryBase = HEAPU32[(handle + 12) >> 2]), (tableBase = HEAPU32[(handle + 20) >> 2]);
						var tableGrowthNeeded = tableBase + metadata.tableSize - wasmTable.length;
						tableGrowthNeeded > 0 && wasmTable.grow(tableGrowthNeeded);
						var moduleExports;
						function resolveSymbol(e) {
							var t = resolveGlobalSymbol(e).sym;
							return !t && localScope && (t = localScope[e]), t || (t = moduleExports[e]), t;
						}
						var proxyHandler = {
								get(e, t) {
									switch (t) {
										case '__memory_base':
											return memoryBase;
										case '__table_base':
											return tableBase;
									}
									if (t in wasmImports && !wasmImports[t].stub) return wasmImports[t];
									if (!(t in e)) {
										var I;
										e[t] = (...B) => (I || (I = resolveSymbol(t)), I(...B));
									}
									return e[t];
								}
							},
							proxy = new Proxy({}, proxyHandler),
							info = {
								'GOT.mem': new Proxy({}, GOTHandler),
								'GOT.func': new Proxy({}, GOTHandler),
								env: proxy,
								wasi_snapshot_preview1: proxy
							};
						function postInstantiation(module, instance) {
							updateTableMap(tableBase, metadata.tableSize),
								(moduleExports = relocateExports(instance.exports, memoryBase)),
								flags.allowUndefined || reportUndefinedSymbols();
							function addEmAsm(addr, body) {
								for (
									var args = [], arity = 0;
									arity < 16 && body.indexOf('$' + arity) != -1;
									arity++
								)
									args.push('$' + arity);
								args = args.join(',');
								var func = `(${args}) => { ${body} };`;
								ASM_CONSTS[start] = eval(func);
							}
							if ('__start_em_asm' in moduleExports)
								for (
									var start = moduleExports.__start_em_asm, stop = moduleExports.__stop_em_asm;
									start < stop;

								) {
									var jsString = UTF8ToString(start);
									addEmAsm(start, jsString), (start = HEAPU8.indexOf(0, start) + 1);
								}
							function addEmJs(name, cSig, body) {
								var jsArgs = [];
								if (((cSig = cSig.slice(1, -1)), cSig != 'void')) {
									cSig = cSig.split(',');
									for (var i in cSig) {
										var jsArg = cSig[i].split(' ').pop();
										jsArgs.push(jsArg.replaceAll('*', ''));
									}
								}
								var func = `(${jsArgs}) => ${body};`;
								moduleExports[name] = eval(func);
							}
							for (var name in moduleExports)
								if (name.startsWith('__em_js__')) {
									var start = moduleExports[name],
										jsString = UTF8ToString(start),
										parts = jsString.split('<::>');
									addEmJs(name.replace('__em_js__', ''), parts[0], parts[1]),
										delete moduleExports[name];
								}
							var applyRelocs = moduleExports.__wasm_apply_data_relocs;
							applyRelocs &&
								(runtimeInitialized ? applyRelocs() : __RELOC_FUNCS__.push(applyRelocs));
							var init = moduleExports.__wasm_call_ctors;
							return init && (runtimeInitialized ? init() : __ATINIT__.push(init)), moduleExports;
						}
						if (flags.loadAsync) {
							if (binary instanceof WebAssembly.Module) {
								var instance = new WebAssembly.Instance(binary, info);
								return Promise.resolve(postInstantiation(binary, instance));
							}
							return WebAssembly.instantiate(binary, info).then((e) =>
								postInstantiation(e.module, e.instance)
							);
						}
						var module =
								binary instanceof WebAssembly.Module ? binary : new WebAssembly.Module(binary),
							instance = new WebAssembly.Instance(module, info);
						return postInstantiation(module, instance);
					}
					return flags.loadAsync
						? metadata.neededDynlibs
								.reduce(
									(e, t) => e.then(() => loadDynamicLibrary(t, flags, localScope)),
									Promise.resolve()
								)
								.then(loadModule)
						: (metadata.neededDynlibs.forEach((e) => loadDynamicLibrary(e, flags, localScope)),
							loadModule());
				},
				mergeLibSymbols = (e, t) => {
					for (var [I, B] of Object.entries(e)) {
						let tr = (ir) => {
							isSymbolDefined(ir) || (wasmImports[ir] = B);
						};
						tr(I);
						let rr = '__main_argc_argv';
						I == 'main' && tr(rr), I == rr && tr('main');
					}
				},
				asyncLoad = async (e) => {
					var t = await readAsync(e);
					return new Uint8Array(t);
				},
				preloadPlugins = Module.preloadPlugins || [],
				registerWasmPlugin = () => {
					var e = {
						promiseChainEnd: Promise.resolve(),
						canHandle: (t) => !Module.noWasmDecoding && t.endsWith('.so'),
						handle: (t, I, B, tr) => {
							e.promiseChainEnd = e.promiseChainEnd
								.then(() => loadWebAssemblyModule(t, { loadAsync: !0, nodelete: !0 }, I, {}))
								.then(
									(rr) => {
										(preloadedWasm[I] = rr), B(t);
									},
									(rr) => {
										err(`failed to instantiate wasm: ${I}: ${rr}`), tr();
									}
								);
						}
					};
					preloadPlugins.push(e);
				},
				preloadedWasm = {};
			function loadDynamicLibrary(e, t = { global: !0, nodelete: !0 }, I, B) {
				var tr = LDSO.loadedLibsByName[e];
				if (tr)
					return (
						t.global
							? tr.global || ((tr.global = !0), mergeLibSymbols(tr.exports))
							: I && Object.assign(I, tr.exports),
						t.nodelete && tr.refcount !== 1 / 0 && (tr.refcount = 1 / 0),
						tr.refcount++,
						B && (LDSO.loadedLibsByHandle[B] = tr),
						t.loadAsync ? Promise.resolve(!0) : !0
					);
				(tr = newDSO(e, B, 'loading')),
					(tr.refcount = t.nodelete ? 1 / 0 : 1),
					(tr.global = t.global);
				function rr() {
					if (B) {
						var dr = HEAPU32[(B + 28) >> 2],
							mr = HEAPU32[(B + 32) >> 2];
						if (dr && mr) {
							var _r = HEAP8.slice(dr, dr + mr);
							return t.loadAsync ? Promise.resolve(_r) : _r;
						}
					}
					var fr = locateFile(e);
					if (t.loadAsync) return asyncLoad(fr);
					if (!readBinary)
						throw new Error(
							`${fr}: file not found, and synchronous loading of external files is not available`
						);
					return readBinary(fr);
				}
				function ir() {
					var dr = preloadedWasm[e];
					return dr
						? t.loadAsync
							? Promise.resolve(dr)
							: dr
						: t.loadAsync
							? rr().then((mr) => loadWebAssemblyModule(mr, t, e, I, B))
							: loadWebAssemblyModule(rr(), t, e, I, B);
				}
				function lr(dr) {
					tr.global ? mergeLibSymbols(dr) : I && Object.assign(I, dr), (tr.exports = dr);
				}
				return t.loadAsync ? ir().then((dr) => (lr(dr), !0)) : (lr(ir()), !0);
			}
			var reportUndefinedSymbols = () => {
					for (var [e, t] of Object.entries(GOT))
						if (t.value == 0) {
							var I = resolveGlobalSymbol(e, !0).sym;
							if (!I && !t.required) continue;
							if (typeof I == 'function') t.value = addFunction(I, I.sig);
							else if (typeof I == 'number') t.value = I;
							else throw new Error(`bad export type for '${e}': ${typeof I}`);
						}
				},
				loadDylibs = () => {
					if (!dynamicLibraries.length) {
						reportUndefinedSymbols();
						return;
					}
					addRunDependency(),
						dynamicLibraries
							.reduce(
								(e, t) =>
									e.then(() =>
										loadDynamicLibrary(t, {
											loadAsync: !0,
											global: !0,
											nodelete: !0,
											allowUndefined: !0
										})
									),
								Promise.resolve()
							)
							.then(() => {
								reportUndefinedSymbols(), removeRunDependency();
							});
				},
				noExitRuntime = Module.noExitRuntime || !0;
			function setValue(e, t, I = 'i8') {
				switch ((I.endsWith('*') && (I = '*'), I)) {
					case 'i1':
						HEAP8[e] = t;
						break;
					case 'i8':
						HEAP8[e] = t;
						break;
					case 'i16':
						HEAP16[e >> 1] = t;
						break;
					case 'i32':
						HEAP32[e >> 2] = t;
						break;
					case 'i64':
						HEAP64[e >> 3] = BigInt(t);
						break;
					case 'float':
						HEAPF32[e >> 2] = t;
						break;
					case 'double':
						HEAPF64[e >> 3] = t;
						break;
					case '*':
						HEAPU32[e >> 2] = t;
						break;
					default:
						abort(`invalid type for setValue: ${I}`);
				}
			}
			var ___assert_fail = (e, t, I, B) =>
				abort(
					`Assertion failed: ${UTF8ToString(e)}, at: ` +
						[t ? UTF8ToString(t) : 'unknown filename', I, B ? UTF8ToString(B) : 'unknown function']
				);
			___assert_fail.sig = 'vppip';
			var ___call_sighandler = (e, t) => getWasmTableEntry(e)(t);
			___call_sighandler.sig = 'vpi';
			var ___memory_base = new WebAssembly.Global({ value: 'i32', mutable: !1 }, 16777216),
				___stack_pointer = new WebAssembly.Global({ value: 'i32', mutable: !0 }, 23144432),
				PATH = {
					isAbs: (e) => e.charAt(0) === '/',
					splitPath: (e) => {
						var t = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
						return t.exec(e).slice(1);
					},
					normalizeArray: (e, t) => {
						for (var I = 0, B = e.length - 1; B >= 0; B--) {
							var tr = e[B];
							tr === '.'
								? e.splice(B, 1)
								: tr === '..'
									? (e.splice(B, 1), I++)
									: I && (e.splice(B, 1), I--);
						}
						if (t) for (; I; I--) e.unshift('..');
						return e;
					},
					normalize: (e) => {
						var t = PATH.isAbs(e),
							I = e.substr(-1) === '/';
						return (
							(e = PATH.normalizeArray(
								e.split('/').filter((B) => !!B),
								!t
							).join('/')),
							!e && !t && (e = '.'),
							e && I && (e += '/'),
							(t ? '/' : '') + e
						);
					},
					dirname: (e) => {
						var t = PATH.splitPath(e),
							I = t[0],
							B = t[1];
						return !I && !B ? '.' : (B && (B = B.substr(0, B.length - 1)), I + B);
					},
					basename: (e) => {
						if (e === '/') return '/';
						(e = PATH.normalize(e)), (e = e.replace(/\/$/, ''));
						var t = e.lastIndexOf('/');
						return t === -1 ? e : e.substr(t + 1);
					},
					join: (...e) => PATH.normalize(e.join('/')),
					join2: (e, t) => PATH.normalize(e + '/' + t)
				},
				initRandomFill = () => {
					if (typeof crypto == 'object' && typeof crypto.getRandomValues == 'function')
						return (B) => crypto.getRandomValues(B);
					if (ENVIRONMENT_IS_NODE)
						try {
							var e = require('crypto'),
								t = e.randomFillSync;
							if (t) return (B) => e.randomFillSync(B);
							var I = e.randomBytes;
							return (B) => (B.set(I(B.byteLength)), B);
						} catch {}
					abort('initRandomDevice');
				},
				randomFill = (e) => (randomFill = initRandomFill())(e),
				PATH_FS = {
					resolve: (...e) => {
						for (var t = '', I = !1, B = e.length - 1; B >= -1 && !I; B--) {
							var tr = B >= 0 ? e[B] : FS.cwd();
							if (typeof tr != 'string')
								throw new TypeError('Arguments to path.resolve must be strings');
							if (!tr) return '';
							(t = tr + '/' + t), (I = PATH.isAbs(tr));
						}
						return (
							(t = PATH.normalizeArray(
								t.split('/').filter((rr) => !!rr),
								!I
							).join('/')),
							(I ? '/' : '') + t || '.'
						);
					},
					relative: (e, t) => {
						(e = PATH_FS.resolve(e).substr(1)), (t = PATH_FS.resolve(t).substr(1));
						function I(mr) {
							for (var _r = 0; _r < mr.length && mr[_r] === ''; _r++);
							for (var fr = mr.length - 1; fr >= 0 && mr[fr] === ''; fr--);
							return _r > fr ? [] : mr.slice(_r, fr - _r + 1);
						}
						for (
							var B = I(e.split('/')),
								tr = I(t.split('/')),
								rr = Math.min(B.length, tr.length),
								ir = rr,
								lr = 0;
							lr < rr;
							lr++
						)
							if (B[lr] !== tr[lr]) {
								ir = lr;
								break;
							}
						for (var dr = [], lr = ir; lr < B.length; lr++) dr.push('..');
						return (dr = dr.concat(tr.slice(ir))), dr.join('/');
					}
				},
				FS_stdin_getChar_buffer = [],
				lengthBytesUTF8 = (e) => {
					for (var t = 0, I = 0; I < e.length; ++I) {
						var B = e.charCodeAt(I);
						B <= 127
							? t++
							: B <= 2047
								? (t += 2)
								: B >= 55296 && B <= 57343
									? ((t += 4), ++I)
									: (t += 3);
					}
					return t;
				},
				stringToUTF8Array = (e, t, I, B) => {
					if (!(B > 0)) return 0;
					for (var tr = I, rr = I + B - 1, ir = 0; ir < e.length; ++ir) {
						var lr = e.charCodeAt(ir);
						if (lr >= 55296 && lr <= 57343) {
							var dr = e.charCodeAt(++ir);
							lr = (65536 + ((lr & 1023) << 10)) | (dr & 1023);
						}
						if (lr <= 127) {
							if (I >= rr) break;
							t[I++] = lr;
						} else if (lr <= 2047) {
							if (I + 1 >= rr) break;
							(t[I++] = 192 | (lr >> 6)), (t[I++] = 128 | (lr & 63));
						} else if (lr <= 65535) {
							if (I + 2 >= rr) break;
							(t[I++] = 224 | (lr >> 12)),
								(t[I++] = 128 | ((lr >> 6) & 63)),
								(t[I++] = 128 | (lr & 63));
						} else {
							if (I + 3 >= rr) break;
							(t[I++] = 240 | (lr >> 18)),
								(t[I++] = 128 | ((lr >> 12) & 63)),
								(t[I++] = 128 | ((lr >> 6) & 63)),
								(t[I++] = 128 | (lr & 63));
						}
					}
					return (t[I] = 0), I - tr;
				};
			function intArrayFromString(e, t, I) {
				var B = lengthBytesUTF8(e) + 1,
					tr = new Array(B),
					rr = stringToUTF8Array(e, tr, 0, tr.length);
				return (tr.length = rr), tr;
			}
			var FS_stdin_getChar = () => {
					if (!FS_stdin_getChar_buffer.length) {
						var e = null;
						if (ENVIRONMENT_IS_NODE) {
							var t = 256,
								I = Buffer.alloc(t),
								B = 0,
								tr = process.stdin.fd;
							try {
								B = fs.readSync(tr, I, 0, t);
							} catch (rr) {
								if (rr.toString().includes('EOF')) B = 0;
								else throw rr;
							}
							B > 0 && (e = I.slice(0, B).toString('utf-8'));
						} else
							typeof window < 'u' &&
								typeof window.prompt == 'function' &&
								((e = window.prompt('Input: ')),
								e !== null &&
									(e += `
`));
						if (!e) return null;
						FS_stdin_getChar_buffer = intArrayFromString(e);
					}
					return FS_stdin_getChar_buffer.shift();
				},
				TTY = {
					ttys: [],
					init() {},
					shutdown() {},
					register(e, t) {
						(TTY.ttys[e] = { input: [], output: [], ops: t }), FS.registerDevice(e, TTY.stream_ops);
					},
					stream_ops: {
						open(e) {
							var t = TTY.ttys[e.node.rdev];
							if (!t) throw new FS.ErrnoError(43);
							(e.tty = t), (e.seekable = !1);
						},
						close(e) {
							e.tty.ops.fsync(e.tty);
						},
						fsync(e) {
							e.tty.ops.fsync(e.tty);
						},
						read(e, t, I, B, tr) {
							if (!e.tty || !e.tty.ops.get_char) throw new FS.ErrnoError(60);
							for (var rr = 0, ir = 0; ir < B; ir++) {
								var lr;
								try {
									lr = e.tty.ops.get_char(e.tty);
								} catch {
									throw new FS.ErrnoError(29);
								}
								if (lr === void 0 && rr === 0) throw new FS.ErrnoError(6);
								if (lr == null) break;
								rr++, (t[I + ir] = lr);
							}
							return rr && (e.node.atime = Date.now()), rr;
						},
						write(e, t, I, B, tr) {
							if (!e.tty || !e.tty.ops.put_char) throw new FS.ErrnoError(60);
							try {
								for (var rr = 0; rr < B; rr++) e.tty.ops.put_char(e.tty, t[I + rr]);
							} catch {
								throw new FS.ErrnoError(29);
							}
							return B && (e.node.mtime = e.node.ctime = Date.now()), rr;
						}
					},
					default_tty_ops: {
						get_char(e) {
							return FS_stdin_getChar();
						},
						put_char(e, t) {
							t === null || t === 10
								? (out(UTF8ArrayToString(e.output)), (e.output = []))
								: t != 0 && e.output.push(t);
						},
						fsync(e) {
							e.output &&
								e.output.length > 0 &&
								(out(UTF8ArrayToString(e.output)), (e.output = []));
						},
						ioctl_tcgets(e) {
							return {
								c_iflag: 25856,
								c_oflag: 5,
								c_cflag: 191,
								c_lflag: 35387,
								c_cc: [
									3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0,
									0, 0, 0, 0, 0, 0, 0, 0
								]
							};
						},
						ioctl_tcsets(e, t, I) {
							return 0;
						},
						ioctl_tiocgwinsz(e) {
							return [24, 80];
						}
					},
					default_tty1_ops: {
						put_char(e, t) {
							t === null || t === 10
								? (err(UTF8ArrayToString(e.output)), (e.output = []))
								: t != 0 && e.output.push(t);
						},
						fsync(e) {
							e.output &&
								e.output.length > 0 &&
								(err(UTF8ArrayToString(e.output)), (e.output = []));
						}
					}
				},
				zeroMemory = (e, t) => {
					HEAPU8.fill(0, e, e + t);
				},
				mmapAlloc = (e) => {
					e = alignMemory(e, 65536);
					var t = _emscripten_builtin_memalign(65536, e);
					return t && zeroMemory(t, e), t;
				},
				MEMFS = {
					ops_table: null,
					mount(e) {
						return MEMFS.createNode(null, '/', 16895, 0);
					},
					createNode(e, t, I, B) {
						if (FS.isBlkdev(I) || FS.isFIFO(I)) throw new FS.ErrnoError(63);
						MEMFS.ops_table ||
							(MEMFS.ops_table = {
								dir: {
									node: {
										getattr: MEMFS.node_ops.getattr,
										setattr: MEMFS.node_ops.setattr,
										lookup: MEMFS.node_ops.lookup,
										mknod: MEMFS.node_ops.mknod,
										rename: MEMFS.node_ops.rename,
										unlink: MEMFS.node_ops.unlink,
										rmdir: MEMFS.node_ops.rmdir,
										readdir: MEMFS.node_ops.readdir,
										symlink: MEMFS.node_ops.symlink
									},
									stream: { llseek: MEMFS.stream_ops.llseek }
								},
								file: {
									node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr },
									stream: {
										llseek: MEMFS.stream_ops.llseek,
										read: MEMFS.stream_ops.read,
										write: MEMFS.stream_ops.write,
										allocate: MEMFS.stream_ops.allocate,
										mmap: MEMFS.stream_ops.mmap,
										msync: MEMFS.stream_ops.msync
									}
								},
								link: {
									node: {
										getattr: MEMFS.node_ops.getattr,
										setattr: MEMFS.node_ops.setattr,
										readlink: MEMFS.node_ops.readlink
									},
									stream: {}
								},
								chrdev: {
									node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr },
									stream: FS.chrdev_stream_ops
								}
							});
						var tr = FS.createNode(e, t, I, B);
						return (
							FS.isDir(tr.mode)
								? ((tr.node_ops = MEMFS.ops_table.dir.node),
									(tr.stream_ops = MEMFS.ops_table.dir.stream),
									(tr.contents = {}))
								: FS.isFile(tr.mode)
									? ((tr.node_ops = MEMFS.ops_table.file.node),
										(tr.stream_ops = MEMFS.ops_table.file.stream),
										(tr.usedBytes = 0),
										(tr.contents = null))
									: FS.isLink(tr.mode)
										? ((tr.node_ops = MEMFS.ops_table.link.node),
											(tr.stream_ops = MEMFS.ops_table.link.stream))
										: FS.isChrdev(tr.mode) &&
											((tr.node_ops = MEMFS.ops_table.chrdev.node),
											(tr.stream_ops = MEMFS.ops_table.chrdev.stream)),
							(tr.atime = tr.mtime = tr.ctime = Date.now()),
							e && ((e.contents[t] = tr), (e.atime = e.mtime = e.ctime = tr.atime)),
							tr
						);
					},
					getFileDataAsTypedArray(e) {
						return e.contents
							? e.contents.subarray
								? e.contents.subarray(0, e.usedBytes)
								: new Uint8Array(e.contents)
							: new Uint8Array(0);
					},
					expandFileStorage(e, t) {
						var I = e.contents ? e.contents.length : 0;
						if (!(I >= t)) {
							var B = 1048576;
							(t = Math.max(t, (I * (I < B ? 2 : 1.125)) >>> 0)), I != 0 && (t = Math.max(t, 256));
							var tr = e.contents;
							(e.contents = new Uint8Array(t)),
								e.usedBytes > 0 && e.contents.set(tr.subarray(0, e.usedBytes), 0);
						}
					},
					resizeFileStorage(e, t) {
						if (e.usedBytes != t)
							if (t == 0) (e.contents = null), (e.usedBytes = 0);
							else {
								var I = e.contents;
								(e.contents = new Uint8Array(t)),
									I && e.contents.set(I.subarray(0, Math.min(t, e.usedBytes))),
									(e.usedBytes = t);
							}
					},
					node_ops: {
						getattr(e) {
							var t = {};
							return (
								(t.dev = FS.isChrdev(e.mode) ? e.id : 1),
								(t.ino = e.id),
								(t.mode = e.mode),
								(t.nlink = 1),
								(t.uid = 0),
								(t.gid = 0),
								(t.rdev = e.rdev),
								FS.isDir(e.mode)
									? (t.size = 4096)
									: FS.isFile(e.mode)
										? (t.size = e.usedBytes)
										: FS.isLink(e.mode)
											? (t.size = e.link.length)
											: (t.size = 0),
								(t.atime = new Date(e.atime)),
								(t.mtime = new Date(e.mtime)),
								(t.ctime = new Date(e.ctime)),
								(t.blksize = 4096),
								(t.blocks = Math.ceil(t.size / t.blksize)),
								t
							);
						},
						setattr(e, t) {
							for (let I of ['mode', 'atime', 'mtime', 'ctime']) t[I] && (e[I] = t[I]);
							t.size !== void 0 && MEMFS.resizeFileStorage(e, t.size);
						},
						lookup(e, t) {
							throw MEMFS.doesNotExistError;
						},
						mknod(e, t, I, B) {
							return MEMFS.createNode(e, t, I, B);
						},
						rename(e, t, I) {
							var B;
							try {
								B = FS.lookupNode(t, I);
							} catch {}
							if (B) {
								if (FS.isDir(e.mode)) for (var tr in B.contents) throw new FS.ErrnoError(55);
								FS.hashRemoveNode(B);
							}
							delete e.parent.contents[e.name],
								(t.contents[I] = e),
								(e.name = I),
								(t.ctime = t.mtime = e.parent.ctime = e.parent.mtime = Date.now());
						},
						unlink(e, t) {
							delete e.contents[t], (e.ctime = e.mtime = Date.now());
						},
						rmdir(e, t) {
							var I = FS.lookupNode(e, t);
							for (var B in I.contents) throw new FS.ErrnoError(55);
							delete e.contents[t], (e.ctime = e.mtime = Date.now());
						},
						readdir(e) {
							return ['.', '..', ...Object.keys(e.contents)];
						},
						symlink(e, t, I) {
							var B = MEMFS.createNode(e, t, 41471, 0);
							return (B.link = I), B;
						},
						readlink(e) {
							if (!FS.isLink(e.mode)) throw new FS.ErrnoError(28);
							return e.link;
						}
					},
					stream_ops: {
						read(e, t, I, B, tr) {
							var rr = e.node.contents;
							if (tr >= e.node.usedBytes) return 0;
							var ir = Math.min(e.node.usedBytes - tr, B);
							if (ir > 8 && rr.subarray) t.set(rr.subarray(tr, tr + ir), I);
							else for (var lr = 0; lr < ir; lr++) t[I + lr] = rr[tr + lr];
							return ir;
						},
						write(e, t, I, B, tr, rr) {
							if ((t.buffer === HEAP8.buffer && (rr = !1), !B)) return 0;
							var ir = e.node;
							if (
								((ir.mtime = ir.ctime = Date.now()),
								t.subarray && (!ir.contents || ir.contents.subarray))
							) {
								if (rr) return (ir.contents = t.subarray(I, I + B)), (ir.usedBytes = B), B;
								if (ir.usedBytes === 0 && tr === 0)
									return (ir.contents = t.slice(I, I + B)), (ir.usedBytes = B), B;
								if (tr + B <= ir.usedBytes) return ir.contents.set(t.subarray(I, I + B), tr), B;
							}
							if ((MEMFS.expandFileStorage(ir, tr + B), ir.contents.subarray && t.subarray))
								ir.contents.set(t.subarray(I, I + B), tr);
							else for (var lr = 0; lr < B; lr++) ir.contents[tr + lr] = t[I + lr];
							return (ir.usedBytes = Math.max(ir.usedBytes, tr + B)), B;
						},
						llseek(e, t, I) {
							var B = t;
							if (
								(I === 1
									? (B += e.position)
									: I === 2 && FS.isFile(e.node.mode) && (B += e.node.usedBytes),
								B < 0)
							)
								throw new FS.ErrnoError(28);
							return B;
						},
						allocate(e, t, I) {
							MEMFS.expandFileStorage(e.node, t + I),
								(e.node.usedBytes = Math.max(e.node.usedBytes, t + I));
						},
						mmap(e, t, I, B, tr) {
							if (!FS.isFile(e.node.mode)) throw new FS.ErrnoError(43);
							var rr,
								ir,
								lr = e.node.contents;
							if (!(tr & 2) && lr && lr.buffer === HEAP8.buffer) (ir = !1), (rr = lr.byteOffset);
							else {
								if (((ir = !0), (rr = mmapAlloc(t)), !rr)) throw new FS.ErrnoError(48);
								lr &&
									((I > 0 || I + t < lr.length) &&
										(lr.subarray
											? (lr = lr.subarray(I, I + t))
											: (lr = Array.prototype.slice.call(lr, I, I + t))),
									HEAP8.set(lr, rr));
							}
							return { ptr: rr, allocated: ir };
						},
						msync(e, t, I, B, tr) {
							return MEMFS.stream_ops.write(e, t, 0, B, I, !1), 0;
						}
					}
				},
				FS_createDataFile = (e, t, I, B, tr, rr) => {
					FS.createDataFile(e, t, I, B, tr, rr);
				},
				FS_handledByPreloadPlugin = (e, t, I, B) => {
					typeof Browser < 'u' && Browser.init();
					var tr = !1;
					return (
						preloadPlugins.forEach((rr) => {
							tr || (rr.canHandle(t) && (rr.handle(e, t, I, B), (tr = !0)));
						}),
						tr
					);
				},
				FS_createPreloadedFile = (e, t, I, B, tr, rr, ir, lr, dr, mr) => {
					var _r = t ? PATH_FS.resolve(PATH.join2(e, t)) : e;
					function fr(hr) {
						function Mr(gr) {
							mr == null || mr(),
								lr || FS_createDataFile(e, t, gr, B, tr, dr),
								rr == null || rr(),
								removeRunDependency();
						}
						FS_handledByPreloadPlugin(hr, _r, Mr, () => {
							ir == null || ir(), removeRunDependency();
						}) || Mr(hr);
					}
					addRunDependency(), typeof I == 'string' ? asyncLoad(I).then(fr, ir) : fr(I);
				},
				FS_modeStringToFlags = (e) => {
					var t = { r: 0, 'r+': 2, w: 577, 'w+': 578, a: 1089, 'a+': 1090 },
						I = t[e];
					if (typeof I > 'u') throw new Error(`Unknown file open mode: ${e}`);
					return I;
				},
				FS_getMode = (e, t) => {
					var I = 0;
					return e && (I |= 365), t && (I |= 146), I;
				},
				IDBFS = {
					dbs: {},
					indexedDB: () => {
						if (typeof indexedDB < 'u') return indexedDB;
						var e = null;
						return (
							typeof window == 'object' &&
								(e =
									window.indexedDB ||
									window.mozIndexedDB ||
									window.webkitIndexedDB ||
									window.msIndexedDB),
							e
						);
					},
					DB_VERSION: 21,
					DB_STORE_NAME: 'FILE_DATA',
					queuePersist: (e) => {
						function t() {
							e.idbPersistState === 'again' ? I() : (e.idbPersistState = 0);
						}
						function I() {
							(e.idbPersistState = 'idb'), IDBFS.syncfs(e, !1, t);
						}
						e.idbPersistState
							? e.idbPersistState === 'idb' && (e.idbPersistState = 'again')
							: (e.idbPersistState = setTimeout(I, 0));
					},
					mount: (e) => {
						var B;
						var t = MEMFS.mount(e);
						if ((B = e == null ? void 0 : e.opts) != null && B.autoPersist) {
							t.idbPersistState = 0;
							var I = t.node_ops;
							(t.node_ops = Object.assign({}, t.node_ops)),
								(t.node_ops.mknod = (tr, rr, ir, lr) => {
									var dr = I.mknod(tr, rr, ir, lr);
									return (
										(dr.node_ops = t.node_ops),
										(dr.idbfs_mount = t.mount),
										(dr.memfs_stream_ops = dr.stream_ops),
										(dr.stream_ops = Object.assign({}, dr.stream_ops)),
										(dr.stream_ops.write = (mr, _r, fr, hr, Mr, gr) => (
											(mr.node.isModified = !0), dr.memfs_stream_ops.write(mr, _r, fr, hr, Mr, gr)
										)),
										(dr.stream_ops.close = (mr) => {
											var _r = mr.node;
											if (
												(_r.isModified &&
													(IDBFS.queuePersist(_r.idbfs_mount), (_r.isModified = !1)),
												_r.memfs_stream_ops.close)
											)
												return _r.memfs_stream_ops.close(mr);
										}),
										dr
									);
								}),
								(t.node_ops.mkdir = (...tr) => (IDBFS.queuePersist(t.mount), I.mkdir(...tr))),
								(t.node_ops.rmdir = (...tr) => (IDBFS.queuePersist(t.mount), I.rmdir(...tr))),
								(t.node_ops.symlink = (...tr) => (IDBFS.queuePersist(t.mount), I.symlink(...tr))),
								(t.node_ops.unlink = (...tr) => (IDBFS.queuePersist(t.mount), I.unlink(...tr))),
								(t.node_ops.rename = (...tr) => (IDBFS.queuePersist(t.mount), I.rename(...tr)));
						}
						return t;
					},
					syncfs: (e, t, I) => {
						IDBFS.getLocalSet(e, (B, tr) => {
							if (B) return I(B);
							IDBFS.getRemoteSet(e, (rr, ir) => {
								if (rr) return I(rr);
								var lr = t ? ir : tr,
									dr = t ? tr : ir;
								IDBFS.reconcile(lr, dr, I);
							});
						});
					},
					quit: () => {
						Object.values(IDBFS.dbs).forEach((e) => e.close()), (IDBFS.dbs = {});
					},
					getDB: (e, t) => {
						var I = IDBFS.dbs[e];
						if (I) return t(null, I);
						var B;
						try {
							B = IDBFS.indexedDB().open(e, IDBFS.DB_VERSION);
						} catch (tr) {
							return t(tr);
						}
						if (!B) return t('Unable to connect to IndexedDB');
						(B.onupgradeneeded = (tr) => {
							var rr = tr.target.result,
								ir = tr.target.transaction,
								lr;
							rr.objectStoreNames.contains(IDBFS.DB_STORE_NAME)
								? (lr = ir.objectStore(IDBFS.DB_STORE_NAME))
								: (lr = rr.createObjectStore(IDBFS.DB_STORE_NAME)),
								lr.indexNames.contains('timestamp') ||
									lr.createIndex('timestamp', 'timestamp', { unique: !1 });
						}),
							(B.onsuccess = () => {
								(I = B.result), (IDBFS.dbs[e] = I), t(null, I);
							}),
							(B.onerror = (tr) => {
								t(tr.target.error), tr.preventDefault();
							});
					},
					getLocalSet: (e, t) => {
						var I = {};
						function B(dr) {
							return dr !== '.' && dr !== '..';
						}
						function tr(dr) {
							return (mr) => PATH.join2(dr, mr);
						}
						for (var rr = FS.readdir(e.mountpoint).filter(B).map(tr(e.mountpoint)); rr.length; ) {
							var ir = rr.pop(),
								lr;
							try {
								lr = FS.stat(ir);
							} catch (dr) {
								return t(dr);
							}
							FS.isDir(lr.mode) && rr.push(...FS.readdir(ir).filter(B).map(tr(ir))),
								(I[ir] = { timestamp: lr.mtime });
						}
						return t(null, { type: 'local', entries: I });
					},
					getRemoteSet: (e, t) => {
						var I = {};
						IDBFS.getDB(e.mountpoint, (B, tr) => {
							if (B) return t(B);
							try {
								var rr = tr.transaction([IDBFS.DB_STORE_NAME], 'readonly');
								rr.onerror = (dr) => {
									t(dr.target.error), dr.preventDefault();
								};
								var ir = rr.objectStore(IDBFS.DB_STORE_NAME),
									lr = ir.index('timestamp');
								lr.openKeyCursor().onsuccess = (dr) => {
									var mr = dr.target.result;
									if (!mr) return t(null, { type: 'remote', db: tr, entries: I });
									(I[mr.primaryKey] = { timestamp: mr.key }), mr.continue();
								};
							} catch (dr) {
								return t(dr);
							}
						});
					},
					loadLocalEntry: (e, t) => {
						var I, B;
						try {
							var tr = FS.lookupPath(e);
							(B = tr.node), (I = FS.stat(e));
						} catch (rr) {
							return t(rr);
						}
						return FS.isDir(I.mode)
							? t(null, { timestamp: I.mtime, mode: I.mode })
							: FS.isFile(I.mode)
								? ((B.contents = MEMFS.getFileDataAsTypedArray(B)),
									t(null, { timestamp: I.mtime, mode: I.mode, contents: B.contents }))
								: t(new Error('node type not supported'));
					},
					storeLocalEntry: (e, t, I) => {
						try {
							if (FS.isDir(t.mode)) FS.mkdirTree(e, t.mode);
							else if (FS.isFile(t.mode)) FS.writeFile(e, t.contents, { canOwn: !0 });
							else return I(new Error('node type not supported'));
							FS.chmod(e, t.mode), FS.utime(e, t.timestamp, t.timestamp);
						} catch (B) {
							return I(B);
						}
						I(null);
					},
					removeLocalEntry: (e, t) => {
						try {
							var I = FS.stat(e);
							FS.isDir(I.mode) ? FS.rmdir(e) : FS.isFile(I.mode) && FS.unlink(e);
						} catch (B) {
							return t(B);
						}
						t(null);
					},
					loadRemoteEntry: (e, t, I) => {
						var B = e.get(t);
						(B.onsuccess = (tr) => I(null, tr.target.result)),
							(B.onerror = (tr) => {
								I(tr.target.error), tr.preventDefault();
							});
					},
					storeRemoteEntry: (e, t, I, B) => {
						try {
							var tr = e.put(I, t);
						} catch (rr) {
							B(rr);
							return;
						}
						(tr.onsuccess = (rr) => B()),
							(tr.onerror = (rr) => {
								B(rr.target.error), rr.preventDefault();
							});
					},
					removeRemoteEntry: (e, t, I) => {
						var B = e.delete(t);
						(B.onsuccess = (tr) => I()),
							(B.onerror = (tr) => {
								I(tr.target.error), tr.preventDefault();
							});
					},
					reconcile: (e, t, I) => {
						var B = 0,
							tr = [];
						Object.keys(e.entries).forEach((fr) => {
							var hr = e.entries[fr],
								Mr = t.entries[fr];
							(!Mr || hr.timestamp.getTime() != Mr.timestamp.getTime()) && (tr.push(fr), B++);
						});
						var rr = [];
						if (
							(Object.keys(t.entries).forEach((fr) => {
								e.entries[fr] || (rr.push(fr), B++);
							}),
							!B)
						)
							return I(null);
						var ir = !1,
							lr = e.type === 'remote' ? e.db : t.db,
							dr = lr.transaction([IDBFS.DB_STORE_NAME], 'readwrite'),
							mr = dr.objectStore(IDBFS.DB_STORE_NAME);
						function _r(fr) {
							if (fr && !ir) return (ir = !0), I(fr);
						}
						(dr.onerror = dr.onabort =
							(fr) => {
								_r(fr.target.error), fr.preventDefault();
							}),
							(dr.oncomplete = (fr) => {
								ir || I(null);
							}),
							tr.sort().forEach((fr) => {
								t.type === 'local'
									? IDBFS.loadRemoteEntry(mr, fr, (hr, Mr) => {
											if (hr) return _r(hr);
											IDBFS.storeLocalEntry(fr, Mr, _r);
										})
									: IDBFS.loadLocalEntry(fr, (hr, Mr) => {
											if (hr) return _r(hr);
											IDBFS.storeRemoteEntry(mr, fr, Mr, _r);
										});
							}),
							rr
								.sort()
								.reverse()
								.forEach((fr) => {
									t.type === 'local'
										? IDBFS.removeLocalEntry(fr, _r)
										: IDBFS.removeRemoteEntry(mr, fr, _r);
								});
					}
				},
				ERRNO_CODES = {
					EPERM: 63,
					ENOENT: 44,
					ESRCH: 71,
					EINTR: 27,
					EIO: 29,
					ENXIO: 60,
					E2BIG: 1,
					ENOEXEC: 45,
					EBADF: 8,
					ECHILD: 12,
					EAGAIN: 6,
					EWOULDBLOCK: 6,
					ENOMEM: 48,
					EACCES: 2,
					EFAULT: 21,
					ENOTBLK: 105,
					EBUSY: 10,
					EEXIST: 20,
					EXDEV: 75,
					ENODEV: 43,
					ENOTDIR: 54,
					EISDIR: 31,
					EINVAL: 28,
					ENFILE: 41,
					EMFILE: 33,
					ENOTTY: 59,
					ETXTBSY: 74,
					EFBIG: 22,
					ENOSPC: 51,
					ESPIPE: 70,
					EROFS: 69,
					EMLINK: 34,
					EPIPE: 64,
					EDOM: 18,
					ERANGE: 68,
					ENOMSG: 49,
					EIDRM: 24,
					ECHRNG: 106,
					EL2NSYNC: 156,
					EL3HLT: 107,
					EL3RST: 108,
					ELNRNG: 109,
					EUNATCH: 110,
					ENOCSI: 111,
					EL2HLT: 112,
					EDEADLK: 16,
					ENOLCK: 46,
					EBADE: 113,
					EBADR: 114,
					EXFULL: 115,
					ENOANO: 104,
					EBADRQC: 103,
					EBADSLT: 102,
					EDEADLOCK: 16,
					EBFONT: 101,
					ENOSTR: 100,
					ENODATA: 116,
					ETIME: 117,
					ENOSR: 118,
					ENONET: 119,
					ENOPKG: 120,
					EREMOTE: 121,
					ENOLINK: 47,
					EADV: 122,
					ESRMNT: 123,
					ECOMM: 124,
					EPROTO: 65,
					EMULTIHOP: 36,
					EDOTDOT: 125,
					EBADMSG: 9,
					ENOTUNIQ: 126,
					EBADFD: 127,
					EREMCHG: 128,
					ELIBACC: 129,
					ELIBBAD: 130,
					ELIBSCN: 131,
					ELIBMAX: 132,
					ELIBEXEC: 133,
					ENOSYS: 52,
					ENOTEMPTY: 55,
					ENAMETOOLONG: 37,
					ELOOP: 32,
					EOPNOTSUPP: 138,
					EPFNOSUPPORT: 139,
					ECONNRESET: 15,
					ENOBUFS: 42,
					EAFNOSUPPORT: 5,
					EPROTOTYPE: 67,
					ENOTSOCK: 57,
					ENOPROTOOPT: 50,
					ESHUTDOWN: 140,
					ECONNREFUSED: 14,
					EADDRINUSE: 3,
					ECONNABORTED: 13,
					ENETUNREACH: 40,
					ENETDOWN: 38,
					ETIMEDOUT: 73,
					EHOSTDOWN: 142,
					EHOSTUNREACH: 23,
					EINPROGRESS: 26,
					EALREADY: 7,
					EDESTADDRREQ: 17,
					EMSGSIZE: 35,
					EPROTONOSUPPORT: 66,
					ESOCKTNOSUPPORT: 137,
					EADDRNOTAVAIL: 4,
					ENETRESET: 39,
					EISCONN: 30,
					ENOTCONN: 53,
					ETOOMANYREFS: 141,
					EUSERS: 136,
					EDQUOT: 19,
					ESTALE: 72,
					ENOTSUP: 138,
					ENOMEDIUM: 148,
					EILSEQ: 25,
					EOVERFLOW: 61,
					ECANCELED: 11,
					ENOTRECOVERABLE: 56,
					EOWNERDEAD: 62,
					ESTRPIPE: 135
				},
				NODEFS = {
					isWindows: !1,
					staticInit() {
						NODEFS.isWindows = !!process.platform.match(/^win/);
						var e = process.binding('constants');
						e.fs && (e = e.fs),
							(NODEFS.flagsForNodeMap = {
								1024: e.O_APPEND,
								64: e.O_CREAT,
								128: e.O_EXCL,
								256: e.O_NOCTTY,
								0: e.O_RDONLY,
								2: e.O_RDWR,
								4096: e.O_SYNC,
								512: e.O_TRUNC,
								1: e.O_WRONLY,
								131072: e.O_NOFOLLOW
							});
					},
					convertNodeCode(e) {
						var t = e.code;
						return ERRNO_CODES[t];
					},
					tryFSOperation(e) {
						try {
							return e();
						} catch (t) {
							throw t.code
								? t.code === 'UNKNOWN'
									? new FS.ErrnoError(28)
									: new FS.ErrnoError(NODEFS.convertNodeCode(t))
								: t;
						}
					},
					mount(e) {
						return NODEFS.createNode(null, '/', NODEFS.getMode(e.opts.root), 0);
					},
					createNode(e, t, I, B) {
						if (!FS.isDir(I) && !FS.isFile(I) && !FS.isLink(I)) throw new FS.ErrnoError(28);
						var tr = FS.createNode(e, t, I);
						return (tr.node_ops = NODEFS.node_ops), (tr.stream_ops = NODEFS.stream_ops), tr;
					},
					getMode(e) {
						return NODEFS.tryFSOperation(() => {
							var t = fs.lstatSync(e).mode;
							return NODEFS.isWindows && (t |= (t & 292) >> 2), t;
						});
					},
					realPath(e) {
						for (var t = []; e.parent !== e; ) t.push(e.name), (e = e.parent);
						return t.push(e.mount.opts.root), t.reverse(), PATH.join(...t);
					},
					flagsForNode(e) {
						(e &= -2097153), (e &= -2049), (e &= -32769), (e &= -524289), (e &= -65537);
						var t = 0;
						for (var I in NODEFS.flagsForNodeMap)
							e & I && ((t |= NODEFS.flagsForNodeMap[I]), (e ^= I));
						if (e) throw new FS.ErrnoError(28);
						return t;
					},
					node_ops: {
						getattr(e) {
							var t = NODEFS.realPath(e),
								I;
							return (
								NODEFS.tryFSOperation(() => (I = fs.lstatSync(t))),
								NODEFS.isWindows &&
									(I.blksize || (I.blksize = 4096),
									I.blocks || (I.blocks = ((I.size + I.blksize - 1) / I.blksize) | 0),
									(I.mode |= (I.mode & 292) >> 2)),
								{
									dev: I.dev,
									ino: I.ino,
									mode: I.mode,
									nlink: I.nlink,
									uid: I.uid,
									gid: I.gid,
									rdev: I.rdev,
									size: I.size,
									atime: I.atime,
									mtime: I.mtime,
									ctime: I.ctime,
									blksize: I.blksize,
									blocks: I.blocks
								}
							);
						},
						setattr(e, t) {
							var I = NODEFS.realPath(e);
							NODEFS.tryFSOperation(() => {
								if (t.mode !== void 0) {
									var B = t.mode;
									NODEFS.isWindows && (B &= 384), fs.chmodSync(I, B), (e.mode = t.mode);
								}
								if (t.atime || t.mtime) {
									var tr = t.atime && new Date(t.atime),
										rr = t.mtime && new Date(t.mtime);
									fs.utimesSync(I, tr, rr);
								}
								t.size !== void 0 && fs.truncateSync(I, t.size);
							});
						},
						lookup(e, t) {
							var I = PATH.join2(NODEFS.realPath(e), t),
								B = NODEFS.getMode(I);
							return NODEFS.createNode(e, t, B);
						},
						mknod(e, t, I, B) {
							var tr = NODEFS.createNode(e, t, I, B),
								rr = NODEFS.realPath(tr);
							return (
								NODEFS.tryFSOperation(() => {
									FS.isDir(tr.mode)
										? fs.mkdirSync(rr, tr.mode)
										: fs.writeFileSync(rr, '', { mode: tr.mode });
								}),
								tr
							);
						},
						rename(e, t, I) {
							var B = NODEFS.realPath(e),
								tr = PATH.join2(NODEFS.realPath(t), I);
							try {
								FS.unlink(tr);
							} catch {}
							NODEFS.tryFSOperation(() => fs.renameSync(B, tr)), (e.name = I);
						},
						unlink(e, t) {
							var I = PATH.join2(NODEFS.realPath(e), t);
							NODEFS.tryFSOperation(() => fs.unlinkSync(I));
						},
						rmdir(e, t) {
							var I = PATH.join2(NODEFS.realPath(e), t);
							NODEFS.tryFSOperation(() => fs.rmdirSync(I));
						},
						readdir(e) {
							var t = NODEFS.realPath(e);
							return NODEFS.tryFSOperation(() => fs.readdirSync(t));
						},
						symlink(e, t, I) {
							var B = PATH.join2(NODEFS.realPath(e), t);
							NODEFS.tryFSOperation(() => fs.symlinkSync(I, B));
						},
						readlink(e) {
							var t = NODEFS.realPath(e);
							return NODEFS.tryFSOperation(() => fs.readlinkSync(t));
						},
						statfs(e) {
							var t = NODEFS.tryFSOperation(() => fs.statfsSync(e));
							return (t.frsize = t.bsize), t;
						}
					},
					stream_ops: {
						open(e) {
							var t = NODEFS.realPath(e.node);
							NODEFS.tryFSOperation(() => {
								FS.isFile(e.node.mode) &&
									((e.shared.refcount = 1), (e.nfd = fs.openSync(t, NODEFS.flagsForNode(e.flags))));
							});
						},
						close(e) {
							NODEFS.tryFSOperation(() => {
								FS.isFile(e.node.mode) && e.nfd && --e.shared.refcount === 0 && fs.closeSync(e.nfd);
							});
						},
						dup(e) {
							e.shared.refcount++;
						},
						read(e, t, I, B, tr) {
							return B === 0
								? 0
								: NODEFS.tryFSOperation(() =>
										fs.readSync(e.nfd, new Int8Array(t.buffer, I, B), 0, B, tr)
									);
						},
						write(e, t, I, B, tr) {
							return NODEFS.tryFSOperation(() =>
								fs.writeSync(e.nfd, new Int8Array(t.buffer, I, B), 0, B, tr)
							);
						},
						llseek(e, t, I) {
							var B = t;
							if (
								(I === 1
									? (B += e.position)
									: I === 2 &&
										FS.isFile(e.node.mode) &&
										NODEFS.tryFSOperation(() => {
											var tr = fs.fstatSync(e.nfd);
											B += tr.size;
										}),
								B < 0)
							)
								throw new FS.ErrnoError(28);
							return B;
						},
						mmap(e, t, I, B, tr) {
							if (!FS.isFile(e.node.mode)) throw new FS.ErrnoError(43);
							var rr = mmapAlloc(t);
							return NODEFS.stream_ops.read(e, HEAP8, rr, t, I), { ptr: rr, allocated: !0 };
						},
						msync(e, t, I, B, tr) {
							return NODEFS.stream_ops.write(e, t, 0, B, I, !1), 0;
						}
					}
				},
				FS = {
					root: null,
					mounts: [],
					devices: {},
					streams: [],
					nextInode: 1,
					nameTable: null,
					currentPath: '/',
					initialized: !1,
					ignorePermissions: !0,
					ErrnoError: class {
						constructor(e) {
							P$1(this, 'name', 'ErrnoError'), (this.errno = e);
						}
					},
					filesystems: null,
					syncFSRequests: 0,
					readFiles: {},
					FSStream: class {
						constructor() {
							P$1(this, 'shared', {});
						}
						get object() {
							return this.node;
						}
						set object(e) {
							this.node = e;
						}
						get isRead() {
							return (this.flags & 2097155) !== 1;
						}
						get isWrite() {
							return (this.flags & 2097155) !== 0;
						}
						get isAppend() {
							return this.flags & 1024;
						}
						get flags() {
							return this.shared.flags;
						}
						set flags(e) {
							this.shared.flags = e;
						}
						get position() {
							return this.shared.position;
						}
						set position(e) {
							this.shared.position = e;
						}
					},
					FSNode: class {
						constructor(e, t, I, B) {
							P$1(this, 'node_ops', {}),
								P$1(this, 'stream_ops', {}),
								P$1(this, 'readMode', 365),
								P$1(this, 'writeMode', 146),
								P$1(this, 'mounted', null),
								e || (e = this),
								(this.parent = e),
								(this.mount = e.mount),
								(this.id = FS.nextInode++),
								(this.name = t),
								(this.mode = I),
								(this.rdev = B),
								(this.atime = this.mtime = this.ctime = Date.now());
						}
						get read() {
							return (this.mode & this.readMode) === this.readMode;
						}
						set read(e) {
							e ? (this.mode |= this.readMode) : (this.mode &= ~this.readMode);
						}
						get write() {
							return (this.mode & this.writeMode) === this.writeMode;
						}
						set write(e) {
							e ? (this.mode |= this.writeMode) : (this.mode &= ~this.writeMode);
						}
						get isFolder() {
							return FS.isDir(this.mode);
						}
						get isDevice() {
							return FS.isChrdev(this.mode);
						}
					},
					lookupPath(e, t = {}) {
						if (!e) return { path: '', node: null };
						t.follow_mount ?? (t.follow_mount = !0), PATH.isAbs(e) || (e = FS.cwd() + '/' + e);
						e: for (var I = 0; I < 40; I++) {
							for (
								var B = e.split('/').filter((mr) => !!mr && mr !== '.'),
									tr = FS.root,
									rr = '/',
									ir = 0;
								ir < B.length;
								ir++
							) {
								var lr = ir === B.length - 1;
								if (lr && t.parent) break;
								if (B[ir] === '..') {
									(rr = PATH.dirname(rr)), (tr = tr.parent);
									continue;
								}
								rr = PATH.join2(rr, B[ir]);
								try {
									tr = FS.lookupNode(tr, B[ir]);
								} catch (mr) {
									if ((mr == null ? void 0 : mr.errno) === 44 && lr && t.noent_okay)
										return { path: rr };
									throw mr;
								}
								if (
									(FS.isMountpoint(tr) && (!lr || t.follow_mount) && (tr = tr.mounted.root),
									FS.isLink(tr.mode) && (!lr || t.follow))
								) {
									if (!tr.node_ops.readlink) throw new FS.ErrnoError(52);
									var dr = tr.node_ops.readlink(tr);
									PATH.isAbs(dr) || (dr = PATH.dirname(rr) + '/' + dr),
										(e = dr + '/' + B.slice(ir + 1).join('/'));
									continue e;
								}
							}
							return { path: rr, node: tr };
						}
						throw new FS.ErrnoError(32);
					},
					getPath(e) {
						for (var t; ; ) {
							if (FS.isRoot(e)) {
								var I = e.mount.mountpoint;
								return t ? (I[I.length - 1] !== '/' ? `${I}/${t}` : I + t) : I;
							}
							(t = t ? `${e.name}/${t}` : e.name), (e = e.parent);
						}
					},
					hashName(e, t) {
						for (var I = 0, B = 0; B < t.length; B++) I = ((I << 5) - I + t.charCodeAt(B)) | 0;
						return ((e + I) >>> 0) % FS.nameTable.length;
					},
					hashAddNode(e) {
						var t = FS.hashName(e.parent.id, e.name);
						(e.name_next = FS.nameTable[t]), (FS.nameTable[t] = e);
					},
					hashRemoveNode(e) {
						var t = FS.hashName(e.parent.id, e.name);
						if (FS.nameTable[t] === e) FS.nameTable[t] = e.name_next;
						else
							for (var I = FS.nameTable[t]; I; ) {
								if (I.name_next === e) {
									I.name_next = e.name_next;
									break;
								}
								I = I.name_next;
							}
					},
					lookupNode(e, t) {
						var I = FS.mayLookup(e);
						if (I) throw new FS.ErrnoError(I);
						for (var B = FS.hashName(e.id, t), tr = FS.nameTable[B]; tr; tr = tr.name_next) {
							var rr = tr.name;
							if (tr.parent.id === e.id && rr === t) return tr;
						}
						return FS.lookup(e, t);
					},
					createNode(e, t, I, B) {
						var tr = new FS.FSNode(e, t, I, B);
						return FS.hashAddNode(tr), tr;
					},
					destroyNode(e) {
						FS.hashRemoveNode(e);
					},
					isRoot(e) {
						return e === e.parent;
					},
					isMountpoint(e) {
						return !!e.mounted;
					},
					isFile(e) {
						return (e & 61440) === 32768;
					},
					isDir(e) {
						return (e & 61440) === 16384;
					},
					isLink(e) {
						return (e & 61440) === 40960;
					},
					isChrdev(e) {
						return (e & 61440) === 8192;
					},
					isBlkdev(e) {
						return (e & 61440) === 24576;
					},
					isFIFO(e) {
						return (e & 61440) === 4096;
					},
					isSocket(e) {
						return (e & 49152) === 49152;
					},
					flagsToPermissionString(e) {
						var t = ['r', 'w', 'rw'][e & 3];
						return e & 512 && (t += 'w'), t;
					},
					nodePermissions(e, t) {
						return FS.ignorePermissions
							? 0
							: (t.includes('r') && !(e.mode & 292)) ||
								  (t.includes('w') && !(e.mode & 146)) ||
								  (t.includes('x') && !(e.mode & 73))
								? 2
								: 0;
					},
					mayLookup(e) {
						if (!FS.isDir(e.mode)) return 54;
						var t = FS.nodePermissions(e, 'x');
						return t || (e.node_ops.lookup ? 0 : 2);
					},
					mayCreate(e, t) {
						if (!FS.isDir(e.mode)) return 54;
						try {
							var I = FS.lookupNode(e, t);
							return 20;
						} catch {}
						return FS.nodePermissions(e, 'wx');
					},
					mayDelete(e, t, I) {
						var B;
						try {
							B = FS.lookupNode(e, t);
						} catch (rr) {
							return rr.errno;
						}
						var tr = FS.nodePermissions(e, 'wx');
						if (tr) return tr;
						if (I) {
							if (!FS.isDir(B.mode)) return 54;
							if (FS.isRoot(B) || FS.getPath(B) === FS.cwd()) return 10;
						} else if (FS.isDir(B.mode)) return 31;
						return 0;
					},
					mayOpen(e, t) {
						return e
							? FS.isLink(e.mode)
								? 32
								: FS.isDir(e.mode) && (FS.flagsToPermissionString(t) !== 'r' || t & 512)
									? 31
									: FS.nodePermissions(e, FS.flagsToPermissionString(t))
							: 44;
					},
					MAX_OPEN_FDS: 4096,
					nextfd() {
						for (var e = 0; e <= FS.MAX_OPEN_FDS; e++) if (!FS.streams[e]) return e;
						throw new FS.ErrnoError(33);
					},
					getStreamChecked(e) {
						var t = FS.getStream(e);
						if (!t) throw new FS.ErrnoError(8);
						return t;
					},
					getStream: (e) => FS.streams[e],
					createStream(e, t = -1) {
						return (
							(e = Object.assign(new FS.FSStream(), e)),
							t == -1 && (t = FS.nextfd()),
							(e.fd = t),
							(FS.streams[t] = e),
							e
						);
					},
					closeStream(e) {
						FS.streams[e] = null;
					},
					dupStream(e, t = -1) {
						var B, tr;
						var I = FS.createStream(e, t);
						return (tr = (B = I.stream_ops) == null ? void 0 : B.dup) == null || tr.call(B, I), I;
					},
					chrdev_stream_ops: {
						open(e) {
							var I, B;
							var t = FS.getDevice(e.node.rdev);
							(e.stream_ops = t.stream_ops), (B = (I = e.stream_ops).open) == null || B.call(I, e);
						},
						llseek() {
							throw new FS.ErrnoError(70);
						}
					},
					major: (e) => e >> 8,
					minor: (e) => e & 255,
					makedev: (e, t) => (e << 8) | t,
					registerDevice(e, t) {
						FS.devices[e] = { stream_ops: t };
					},
					getDevice: (e) => FS.devices[e],
					getMounts(e) {
						for (var t = [], I = [e]; I.length; ) {
							var B = I.pop();
							t.push(B), I.push(...B.mounts);
						}
						return t;
					},
					syncfs(e, t) {
						typeof e == 'function' && ((t = e), (e = !1)),
							FS.syncFSRequests++,
							FS.syncFSRequests > 1 &&
								err(
									`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`
								);
						var I = FS.getMounts(FS.root.mount),
							B = 0;
						function tr(ir) {
							return FS.syncFSRequests--, t(ir);
						}
						function rr(ir) {
							if (ir) return rr.errored ? void 0 : ((rr.errored = !0), tr(ir));
							++B >= I.length && tr(null);
						}
						I.forEach((ir) => {
							if (!ir.type.syncfs) return rr(null);
							ir.type.syncfs(ir, e, rr);
						});
					},
					mount(e, t, I) {
						var B = I === '/',
							tr = !I,
							rr;
						if (B && FS.root) throw new FS.ErrnoError(10);
						if (!B && !tr) {
							var ir = FS.lookupPath(I, { follow_mount: !1 });
							if (((I = ir.path), (rr = ir.node), FS.isMountpoint(rr))) throw new FS.ErrnoError(10);
							if (!FS.isDir(rr.mode)) throw new FS.ErrnoError(54);
						}
						var lr = { type: e, opts: t, mountpoint: I, mounts: [] },
							dr = e.mount(lr);
						return (
							(dr.mount = lr),
							(lr.root = dr),
							B ? (FS.root = dr) : rr && ((rr.mounted = lr), rr.mount && rr.mount.mounts.push(lr)),
							dr
						);
					},
					unmount(e) {
						var t = FS.lookupPath(e, { follow_mount: !1 });
						if (!FS.isMountpoint(t.node)) throw new FS.ErrnoError(28);
						var I = t.node,
							B = I.mounted,
							tr = FS.getMounts(B);
						Object.keys(FS.nameTable).forEach((ir) => {
							for (var lr = FS.nameTable[ir]; lr; ) {
								var dr = lr.name_next;
								tr.includes(lr.mount) && FS.destroyNode(lr), (lr = dr);
							}
						}),
							(I.mounted = null);
						var rr = I.mount.mounts.indexOf(B);
						I.mount.mounts.splice(rr, 1);
					},
					lookup(e, t) {
						return e.node_ops.lookup(e, t);
					},
					mknod(e, t, I) {
						var B = FS.lookupPath(e, { parent: !0 }),
							tr = B.node,
							rr = PATH.basename(e);
						if (!rr || rr === '.' || rr === '..') throw new FS.ErrnoError(28);
						var ir = FS.mayCreate(tr, rr);
						if (ir) throw new FS.ErrnoError(ir);
						if (!tr.node_ops.mknod) throw new FS.ErrnoError(63);
						return tr.node_ops.mknod(tr, rr, t, I);
					},
					statfs(e) {
						var t = {
								bsize: 4096,
								frsize: 4096,
								blocks: 1e6,
								bfree: 5e5,
								bavail: 5e5,
								files: FS.nextInode,
								ffree: FS.nextInode - 1,
								fsid: 42,
								flags: 2,
								namelen: 255
							},
							I = FS.lookupPath(e, { follow: !0 }).node;
						return (
							I != null &&
								I.node_ops.statfs &&
								Object.assign(t, I.node_ops.statfs(I.mount.opts.root)),
							t
						);
					},
					create(e, t = 438) {
						return (t &= 4095), (t |= 32768), FS.mknod(e, t, 0);
					},
					mkdir(e, t = 511) {
						return (t &= 1023), (t |= 16384), FS.mknod(e, t, 0);
					},
					mkdirTree(e, t) {
						for (var I = e.split('/'), B = '', tr = 0; tr < I.length; ++tr)
							if (I[tr]) {
								B += '/' + I[tr];
								try {
									FS.mkdir(B, t);
								} catch (rr) {
									if (rr.errno != 20) throw rr;
								}
							}
					},
					mkdev(e, t, I) {
						return typeof I > 'u' && ((I = t), (t = 438)), (t |= 8192), FS.mknod(e, t, I);
					},
					symlink(e, t) {
						if (!PATH_FS.resolve(e)) throw new FS.ErrnoError(44);
						var I = FS.lookupPath(t, { parent: !0 }),
							B = I.node;
						if (!B) throw new FS.ErrnoError(44);
						var tr = PATH.basename(t),
							rr = FS.mayCreate(B, tr);
						if (rr) throw new FS.ErrnoError(rr);
						if (!B.node_ops.symlink) throw new FS.ErrnoError(63);
						return B.node_ops.symlink(B, tr, e);
					},
					rename(e, t) {
						var I = PATH.dirname(e),
							B = PATH.dirname(t),
							tr = PATH.basename(e),
							rr = PATH.basename(t),
							ir,
							lr,
							dr;
						if (
							((ir = FS.lookupPath(e, { parent: !0 })),
							(lr = ir.node),
							(ir = FS.lookupPath(t, { parent: !0 })),
							(dr = ir.node),
							!lr || !dr)
						)
							throw new FS.ErrnoError(44);
						if (lr.mount !== dr.mount) throw new FS.ErrnoError(75);
						var mr = FS.lookupNode(lr, tr),
							_r = PATH_FS.relative(e, B);
						if (_r.charAt(0) !== '.') throw new FS.ErrnoError(28);
						if (((_r = PATH_FS.relative(t, I)), _r.charAt(0) !== '.')) throw new FS.ErrnoError(55);
						var fr;
						try {
							fr = FS.lookupNode(dr, rr);
						} catch {}
						if (mr !== fr) {
							var hr = FS.isDir(mr.mode),
								Mr = FS.mayDelete(lr, tr, hr);
							if (Mr) throw new FS.ErrnoError(Mr);
							if (((Mr = fr ? FS.mayDelete(dr, rr, hr) : FS.mayCreate(dr, rr)), Mr))
								throw new FS.ErrnoError(Mr);
							if (!lr.node_ops.rename) throw new FS.ErrnoError(63);
							if (FS.isMountpoint(mr) || (fr && FS.isMountpoint(fr))) throw new FS.ErrnoError(10);
							if (dr !== lr && ((Mr = FS.nodePermissions(lr, 'w')), Mr))
								throw new FS.ErrnoError(Mr);
							FS.hashRemoveNode(mr);
							try {
								lr.node_ops.rename(mr, dr, rr), (mr.parent = dr);
							} catch (gr) {
								throw gr;
							} finally {
								FS.hashAddNode(mr);
							}
						}
					},
					rmdir(e) {
						var t = FS.lookupPath(e, { parent: !0 }),
							I = t.node,
							B = PATH.basename(e),
							tr = FS.lookupNode(I, B),
							rr = FS.mayDelete(I, B, !0);
						if (rr) throw new FS.ErrnoError(rr);
						if (!I.node_ops.rmdir) throw new FS.ErrnoError(63);
						if (FS.isMountpoint(tr)) throw new FS.ErrnoError(10);
						I.node_ops.rmdir(I, B), FS.destroyNode(tr);
					},
					readdir(e) {
						var t = FS.lookupPath(e, { follow: !0 }),
							I = t.node;
						if (!I.node_ops.readdir) throw new FS.ErrnoError(54);
						return I.node_ops.readdir(I);
					},
					unlink(e) {
						var t = FS.lookupPath(e, { parent: !0 }),
							I = t.node;
						if (!I) throw new FS.ErrnoError(44);
						var B = PATH.basename(e),
							tr = FS.lookupNode(I, B),
							rr = FS.mayDelete(I, B, !1);
						if (rr) throw new FS.ErrnoError(rr);
						if (!I.node_ops.unlink) throw new FS.ErrnoError(63);
						if (FS.isMountpoint(tr)) throw new FS.ErrnoError(10);
						I.node_ops.unlink(I, B), FS.destroyNode(tr);
					},
					readlink(e) {
						var t = FS.lookupPath(e),
							I = t.node;
						if (!I) throw new FS.ErrnoError(44);
						if (!I.node_ops.readlink) throw new FS.ErrnoError(28);
						return I.node_ops.readlink(I);
					},
					stat(e, t) {
						var I = FS.lookupPath(e, { follow: !t }),
							B = I.node;
						if (!B) throw new FS.ErrnoError(44);
						if (!B.node_ops.getattr) throw new FS.ErrnoError(63);
						return B.node_ops.getattr(B);
					},
					lstat(e) {
						return FS.stat(e, !0);
					},
					chmod(e, t, I) {
						var B;
						if (typeof e == 'string') {
							var tr = FS.lookupPath(e, { follow: !I });
							B = tr.node;
						} else B = e;
						if (!B.node_ops.setattr) throw new FS.ErrnoError(63);
						B.node_ops.setattr(B, { mode: (t & 4095) | (B.mode & -4096), ctime: Date.now() });
					},
					lchmod(e, t) {
						FS.chmod(e, t, !0);
					},
					fchmod(e, t) {
						var I = FS.getStreamChecked(e);
						FS.chmod(I.node, t);
					},
					chown(e, t, I, B) {
						var tr;
						if (typeof e == 'string') {
							var rr = FS.lookupPath(e, { follow: !B });
							tr = rr.node;
						} else tr = e;
						if (!tr.node_ops.setattr) throw new FS.ErrnoError(63);
						tr.node_ops.setattr(tr, { timestamp: Date.now() });
					},
					lchown(e, t, I) {
						FS.chown(e, t, I, !0);
					},
					fchown(e, t, I) {
						var B = FS.getStreamChecked(e);
						FS.chown(B.node, t, I);
					},
					truncate(e, t) {
						if (t < 0) throw new FS.ErrnoError(28);
						var I;
						if (typeof e == 'string') {
							var B = FS.lookupPath(e, { follow: !0 });
							I = B.node;
						} else I = e;
						if (!I.node_ops.setattr) throw new FS.ErrnoError(63);
						if (FS.isDir(I.mode)) throw new FS.ErrnoError(31);
						if (!FS.isFile(I.mode)) throw new FS.ErrnoError(28);
						var tr = FS.nodePermissions(I, 'w');
						if (tr) throw new FS.ErrnoError(tr);
						I.node_ops.setattr(I, { size: t, timestamp: Date.now() });
					},
					ftruncate(e, t) {
						var I = FS.getStreamChecked(e);
						if (!(I.flags & 2097155)) throw new FS.ErrnoError(28);
						FS.truncate(I.node, t);
					},
					utime(e, t, I) {
						var B = FS.lookupPath(e, { follow: !0 }),
							tr = B.node;
						tr.node_ops.setattr(tr, { atime: t, mtime: I });
					},
					open(e, t, I = 438) {
						if (e === '') throw new FS.ErrnoError(44);
						(t = typeof t == 'string' ? FS_modeStringToFlags(t) : t),
							t & 64 ? (I = (I & 4095) | 32768) : (I = 0);
						var B;
						if (typeof e == 'object') B = e;
						else {
							var tr = FS.lookupPath(e, { follow: !(t & 131072), noent_okay: !0 });
							(B = tr.node), (e = tr.path);
						}
						var rr = !1;
						if (t & 64)
							if (B) {
								if (t & 128) throw new FS.ErrnoError(20);
							} else (B = FS.mknod(e, I, 0)), (rr = !0);
						if (!B) throw new FS.ErrnoError(44);
						if ((FS.isChrdev(B.mode) && (t &= -513), t & 65536 && !FS.isDir(B.mode)))
							throw new FS.ErrnoError(54);
						if (!rr) {
							var ir = FS.mayOpen(B, t);
							if (ir) throw new FS.ErrnoError(ir);
						}
						t & 512 && !rr && FS.truncate(B, 0), (t &= -131713);
						var lr = FS.createStream({
							node: B,
							path: FS.getPath(B),
							flags: t,
							seekable: !0,
							position: 0,
							stream_ops: B.stream_ops,
							ungotten: [],
							error: !1
						});
						return (
							lr.stream_ops.open && lr.stream_ops.open(lr),
							Module.logReadFiles && !(t & 1) && (e in FS.readFiles || (FS.readFiles[e] = 1)),
							lr
						);
					},
					close(e) {
						if (FS.isClosed(e)) throw new FS.ErrnoError(8);
						e.getdents && (e.getdents = null);
						try {
							e.stream_ops.close && e.stream_ops.close(e);
						} catch (t) {
							throw t;
						} finally {
							FS.closeStream(e.fd);
						}
						e.fd = null;
					},
					isClosed(e) {
						return e.fd === null;
					},
					llseek(e, t, I) {
						if (FS.isClosed(e)) throw new FS.ErrnoError(8);
						if (!e.seekable || !e.stream_ops.llseek) throw new FS.ErrnoError(70);
						if (I != 0 && I != 1 && I != 2) throw new FS.ErrnoError(28);
						return (e.position = e.stream_ops.llseek(e, t, I)), (e.ungotten = []), e.position;
					},
					read(e, t, I, B, tr) {
						if (B < 0 || tr < 0) throw new FS.ErrnoError(28);
						if (FS.isClosed(e)) throw new FS.ErrnoError(8);
						if ((e.flags & 2097155) === 1) throw new FS.ErrnoError(8);
						if (FS.isDir(e.node.mode)) throw new FS.ErrnoError(31);
						if (!e.stream_ops.read) throw new FS.ErrnoError(28);
						var rr = typeof tr < 'u';
						if (!rr) tr = e.position;
						else if (!e.seekable) throw new FS.ErrnoError(70);
						var ir = e.stream_ops.read(e, t, I, B, tr);
						return rr || (e.position += ir), ir;
					},
					write(e, t, I, B, tr, rr) {
						if (B < 0 || tr < 0) throw new FS.ErrnoError(28);
						if (FS.isClosed(e)) throw new FS.ErrnoError(8);
						if (!(e.flags & 2097155)) throw new FS.ErrnoError(8);
						if (FS.isDir(e.node.mode)) throw new FS.ErrnoError(31);
						if (!e.stream_ops.write) throw new FS.ErrnoError(28);
						e.seekable && e.flags & 1024 && FS.llseek(e, 0, 2);
						var ir = typeof tr < 'u';
						if (!ir) tr = e.position;
						else if (!e.seekable) throw new FS.ErrnoError(70);
						var lr = e.stream_ops.write(e, t, I, B, tr, rr);
						return ir || (e.position += lr), lr;
					},
					allocate(e, t, I) {
						if (FS.isClosed(e)) throw new FS.ErrnoError(8);
						if (t < 0 || I <= 0) throw new FS.ErrnoError(28);
						if (!(e.flags & 2097155)) throw new FS.ErrnoError(8);
						if (!FS.isFile(e.node.mode) && !FS.isDir(e.node.mode)) throw new FS.ErrnoError(43);
						if (!e.stream_ops.allocate) throw new FS.ErrnoError(138);
						e.stream_ops.allocate(e, t, I);
					},
					mmap(e, t, I, B, tr) {
						if (B & 2 && !(tr & 2) && (e.flags & 2097155) !== 2) throw new FS.ErrnoError(2);
						if ((e.flags & 2097155) === 1) throw new FS.ErrnoError(2);
						if (!e.stream_ops.mmap) throw new FS.ErrnoError(43);
						if (!t) throw new FS.ErrnoError(28);
						return e.stream_ops.mmap(e, t, I, B, tr);
					},
					msync(e, t, I, B, tr) {
						return e.stream_ops.msync ? e.stream_ops.msync(e, t, I, B, tr) : 0;
					},
					ioctl(e, t, I) {
						if (!e.stream_ops.ioctl) throw new FS.ErrnoError(59);
						return e.stream_ops.ioctl(e, t, I);
					},
					readFile(e, t = {}) {
						if (
							((t.flags = t.flags || 0),
							(t.encoding = t.encoding || 'binary'),
							t.encoding !== 'utf8' && t.encoding !== 'binary')
						)
							throw new Error(`Invalid encoding type "${t.encoding}"`);
						var I,
							B = FS.open(e, t.flags),
							tr = FS.stat(e),
							rr = tr.size,
							ir = new Uint8Array(rr);
						return (
							FS.read(B, ir, 0, rr, 0),
							t.encoding === 'utf8'
								? (I = UTF8ArrayToString(ir))
								: t.encoding === 'binary' && (I = ir),
							FS.close(B),
							I
						);
					},
					writeFile(e, t, I = {}) {
						I.flags = I.flags || 577;
						var B = FS.open(e, I.flags, I.mode);
						if (typeof t == 'string') {
							var tr = new Uint8Array(lengthBytesUTF8(t) + 1),
								rr = stringToUTF8Array(t, tr, 0, tr.length);
							FS.write(B, tr, 0, rr, void 0, I.canOwn);
						} else if (ArrayBuffer.isView(t)) FS.write(B, t, 0, t.byteLength, void 0, I.canOwn);
						else throw new Error('Unsupported data type');
						FS.close(B);
					},
					cwd: () => FS.currentPath,
					chdir(e) {
						var t = FS.lookupPath(e, { follow: !0 });
						if (t.node === null) throw new FS.ErrnoError(44);
						if (!FS.isDir(t.node.mode)) throw new FS.ErrnoError(54);
						var I = FS.nodePermissions(t.node, 'x');
						if (I) throw new FS.ErrnoError(I);
						FS.currentPath = t.path;
					},
					createDefaultDirectories() {
						FS.mkdir('/tmp'), FS.mkdir('/home'), FS.mkdir('/home/web_user');
					},
					createDefaultDevices() {
						FS.mkdir('/dev'),
							FS.registerDevice(FS.makedev(1, 3), {
								read: () => 0,
								write: (B, tr, rr, ir, lr) => ir,
								llseek: () => 0
							}),
							FS.mkdev('/dev/null', FS.makedev(1, 3)),
							TTY.register(FS.makedev(5, 0), TTY.default_tty_ops),
							TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops),
							FS.mkdev('/dev/tty', FS.makedev(5, 0)),
							FS.mkdev('/dev/tty1', FS.makedev(6, 0));
						var e = new Uint8Array(1024),
							t = 0,
							I = () => (t === 0 && (t = randomFill(e).byteLength), e[--t]);
						FS.createDevice('/dev', 'random', I),
							FS.createDevice('/dev', 'urandom', I),
							FS.mkdir('/dev/shm'),
							FS.mkdir('/dev/shm/tmp');
					},
					createSpecialDirectories() {
						FS.mkdir('/proc');
						var e = FS.mkdir('/proc/self');
						FS.mkdir('/proc/self/fd'),
							FS.mount(
								{
									mount() {
										var t = FS.createNode(e, 'fd', 16895, 73);
										return (
											(t.stream_ops = { llseek: MEMFS.stream_ops.llseek }),
											(t.node_ops = {
												lookup(I, B) {
													var tr = +B,
														rr = FS.getStreamChecked(tr),
														ir = {
															parent: null,
															mount: { mountpoint: 'fake' },
															node_ops: { readlink: () => rr.path },
															id: tr + 1
														};
													return (ir.parent = ir), ir;
												},
												readdir() {
													return Array.from(FS.streams.entries())
														.filter(([I, B]) => B)
														.map(([I, B]) => I.toString());
												}
											}),
											t
										);
									}
								},
								{},
								'/proc/self/fd'
							);
					},
					createStandardStreams(e, t, I) {
						e ? FS.createDevice('/dev', 'stdin', e) : FS.symlink('/dev/tty', '/dev/stdin'),
							t
								? FS.createDevice('/dev', 'stdout', null, t)
								: FS.symlink('/dev/tty', '/dev/stdout'),
							I
								? FS.createDevice('/dev', 'stderr', null, I)
								: FS.symlink('/dev/tty1', '/dev/stderr'),
							FS.open('/dev/stdin', 0),
							FS.open('/dev/stdout', 1),
							FS.open('/dev/stderr', 1);
					},
					staticInit() {
						(FS.nameTable = new Array(4096)),
							FS.mount(MEMFS, {}, '/'),
							FS.createDefaultDirectories(),
							FS.createDefaultDevices(),
							FS.createSpecialDirectories(),
							(FS.filesystems = { MEMFS, IDBFS, NODEFS });
					},
					init(e, t, I) {
						(FS.initialized = !0),
							e ?? (e = Module.stdin),
							t ?? (t = Module.stdout),
							I ?? (I = Module.stderr),
							FS.createStandardStreams(e, t, I);
					},
					quit() {
						(FS.initialized = !1), _fflush(0);
						for (var e = 0; e < FS.streams.length; e++) {
							var t = FS.streams[e];
							t && FS.close(t);
						}
					},
					findObject(e, t) {
						var I = FS.analyzePath(e, t);
						return I.exists ? I.object : null;
					},
					analyzePath(e, t) {
						try {
							var I = FS.lookupPath(e, { follow: !t });
							e = I.path;
						} catch {}
						var B = {
							isRoot: !1,
							exists: !1,
							error: 0,
							name: null,
							path: null,
							object: null,
							parentExists: !1,
							parentPath: null,
							parentObject: null
						};
						try {
							var I = FS.lookupPath(e, { parent: !0 });
							(B.parentExists = !0),
								(B.parentPath = I.path),
								(B.parentObject = I.node),
								(B.name = PATH.basename(e)),
								(I = FS.lookupPath(e, { follow: !t })),
								(B.exists = !0),
								(B.path = I.path),
								(B.object = I.node),
								(B.name = I.node.name),
								(B.isRoot = I.path === '/');
						} catch (tr) {
							B.error = tr.errno;
						}
						return B;
					},
					createPath(e, t, I, B) {
						e = typeof e == 'string' ? e : FS.getPath(e);
						for (var tr = t.split('/').reverse(); tr.length; ) {
							var rr = tr.pop();
							if (rr) {
								var ir = PATH.join2(e, rr);
								try {
									FS.mkdir(ir);
								} catch {}
								e = ir;
							}
						}
						return ir;
					},
					createFile(e, t, I, B, tr) {
						var rr = PATH.join2(typeof e == 'string' ? e : FS.getPath(e), t),
							ir = FS_getMode(B, tr);
						return FS.create(rr, ir);
					},
					createDataFile(e, t, I, B, tr, rr) {
						var ir = t;
						e && ((e = typeof e == 'string' ? e : FS.getPath(e)), (ir = t ? PATH.join2(e, t) : e));
						var lr = FS_getMode(B, tr),
							dr = FS.create(ir, lr);
						if (I) {
							if (typeof I == 'string') {
								for (var mr = new Array(I.length), _r = 0, fr = I.length; _r < fr; ++_r)
									mr[_r] = I.charCodeAt(_r);
								I = mr;
							}
							FS.chmod(dr, lr | 146);
							var hr = FS.open(dr, 577);
							FS.write(hr, I, 0, I.length, 0, rr), FS.close(hr), FS.chmod(dr, lr);
						}
					},
					createDevice(e, t, I, B) {
						var tr,
							rr = PATH.join2(typeof e == 'string' ? e : FS.getPath(e), t),
							ir = FS_getMode(!!I, !!B);
						(tr = FS.createDevice).major ?? (tr.major = 64);
						var lr = FS.makedev(FS.createDevice.major++, 0);
						return (
							FS.registerDevice(lr, {
								open(dr) {
									dr.seekable = !1;
								},
								close(dr) {
									var mr;
									(mr = B == null ? void 0 : B.buffer) != null && mr.length && B(10);
								},
								read(dr, mr, _r, fr, hr) {
									for (var Mr = 0, gr = 0; gr < fr; gr++) {
										var yr;
										try {
											yr = I();
										} catch {
											throw new FS.ErrnoError(29);
										}
										if (yr === void 0 && Mr === 0) throw new FS.ErrnoError(6);
										if (yr == null) break;
										Mr++, (mr[_r + gr] = yr);
									}
									return Mr && (dr.node.atime = Date.now()), Mr;
								},
								write(dr, mr, _r, fr, hr) {
									for (var Mr = 0; Mr < fr; Mr++)
										try {
											B(mr[_r + Mr]);
										} catch {
											throw new FS.ErrnoError(29);
										}
									return fr && (dr.node.mtime = dr.node.ctime = Date.now()), Mr;
								}
							}),
							FS.mkdev(rr, ir, lr)
						);
					},
					forceLoadFile(e) {
						if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
						if (typeof XMLHttpRequest < 'u')
							throw new Error(
								'Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.'
							);
						try {
							(e.contents = readBinary(e.url)), (e.usedBytes = e.contents.length);
						} catch {
							throw new FS.ErrnoError(29);
						}
					},
					createLazyFile(e, t, I, B, tr) {
						class rr {
							constructor() {
								P$1(this, 'lengthKnown', !1), P$1(this, 'chunks', []);
							}
							get(Mr) {
								if (!(Mr > this.length - 1 || Mr < 0)) {
									var gr = Mr % this.chunkSize,
										yr = (Mr / this.chunkSize) | 0;
									return this.getter(yr)[gr];
								}
							}
							setDataGetter(Mr) {
								this.getter = Mr;
							}
							cacheLength() {
								var Mr = new XMLHttpRequest();
								if (
									(Mr.open('HEAD', I, !1),
									Mr.send(null),
									!((Mr.status >= 200 && Mr.status < 300) || Mr.status === 304))
								)
									throw new Error("Couldn't load " + I + '. Status: ' + Mr.status);
								var gr = Number(Mr.getResponseHeader('Content-length')),
									yr,
									xr = (yr = Mr.getResponseHeader('Accept-Ranges')) && yr === 'bytes',
									vr = (yr = Mr.getResponseHeader('Content-Encoding')) && yr === 'gzip',
									Sr = 1024 * 1024;
								xr || (Sr = gr);
								var wr = (Fr, Ir) => {
										if (Fr > Ir)
											throw new Error(
												'invalid range (' + Fr + ', ' + Ir + ') or no bytes requested!'
											);
										if (Ir > gr - 1)
											throw new Error('only ' + gr + ' bytes available! programmer error!');
										var kr = new XMLHttpRequest();
										if (
											(kr.open('GET', I, !1),
											gr !== Sr && kr.setRequestHeader('Range', 'bytes=' + Fr + '-' + Ir),
											(kr.responseType = 'arraybuffer'),
											kr.overrideMimeType &&
												kr.overrideMimeType('text/plain; charset=x-user-defined'),
											kr.send(null),
											!((kr.status >= 200 && kr.status < 300) || kr.status === 304))
										)
											throw new Error("Couldn't load " + I + '. Status: ' + kr.status);
										return kr.response !== void 0
											? new Uint8Array(kr.response || [])
											: intArrayFromString(kr.responseText || '');
									},
									br = this;
								br.setDataGetter((Fr) => {
									var Ir = Fr * Sr,
										kr = (Fr + 1) * Sr - 1;
									if (
										((kr = Math.min(kr, gr - 1)),
										typeof br.chunks[Fr] > 'u' && (br.chunks[Fr] = wr(Ir, kr)),
										typeof br.chunks[Fr] > 'u')
									)
										throw new Error('doXHR failed!');
									return br.chunks[Fr];
								}),
									(vr || !gr) &&
										((Sr = gr = 1),
										(gr = this.getter(0).length),
										(Sr = gr),
										out(
											'LazyFiles on gzip forces download of the whole file when length is accessed'
										)),
									(this._length = gr),
									(this._chunkSize = Sr),
									(this.lengthKnown = !0);
							}
							get length() {
								return this.lengthKnown || this.cacheLength(), this._length;
							}
							get chunkSize() {
								return this.lengthKnown || this.cacheLength(), this._chunkSize;
							}
						}
						if (typeof XMLHttpRequest < 'u') {
							if (!ENVIRONMENT_IS_WORKER)
								throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
							var ir = new rr(),
								lr = { isDevice: !1, contents: ir };
						} else var lr = { isDevice: !1, url: I };
						var dr = FS.createFile(e, t, lr, B, tr);
						lr.contents
							? (dr.contents = lr.contents)
							: lr.url && ((dr.contents = null), (dr.url = lr.url)),
							Object.defineProperties(dr, {
								usedBytes: {
									get: function () {
										return this.contents.length;
									}
								}
							});
						var mr = {},
							_r = Object.keys(dr.stream_ops);
						_r.forEach((hr) => {
							var Mr = dr.stream_ops[hr];
							mr[hr] = (...gr) => (FS.forceLoadFile(dr), Mr(...gr));
						});
						function fr(hr, Mr, gr, yr, xr) {
							var vr = hr.node.contents;
							if (xr >= vr.length) return 0;
							var Sr = Math.min(vr.length - xr, yr);
							if (vr.slice) for (var wr = 0; wr < Sr; wr++) Mr[gr + wr] = vr[xr + wr];
							else for (var wr = 0; wr < Sr; wr++) Mr[gr + wr] = vr.get(xr + wr);
							return Sr;
						}
						return (
							(mr.read = (hr, Mr, gr, yr, xr) => (FS.forceLoadFile(dr), fr(hr, Mr, gr, yr, xr))),
							(mr.mmap = (hr, Mr, gr, yr, xr) => {
								FS.forceLoadFile(dr);
								var vr = mmapAlloc(Mr);
								if (!vr) throw new FS.ErrnoError(48);
								return fr(hr, HEAP8, vr, Mr, gr), { ptr: vr, allocated: !0 };
							}),
							(dr.stream_ops = mr),
							dr
						);
					}
				},
				SYSCALLS = {
					DEFAULT_POLLMASK: 5,
					calculateAt(e, t, I) {
						if (PATH.isAbs(t)) return t;
						var B;
						if (e === -100) B = FS.cwd();
						else {
							var tr = SYSCALLS.getStreamFromFD(e);
							B = tr.path;
						}
						if (t.length == 0) {
							if (!I) throw new FS.ErrnoError(44);
							return B;
						}
						return B + '/' + t;
					},
					doStat(e, t, I) {
						var B = e(t);
						(HEAP32[I >> 2] = B.dev),
							(HEAP32[(I + 4) >> 2] = B.mode),
							(HEAPU32[(I + 8) >> 2] = B.nlink),
							(HEAP32[(I + 12) >> 2] = B.uid),
							(HEAP32[(I + 16) >> 2] = B.gid),
							(HEAP32[(I + 20) >> 2] = B.rdev),
							(HEAP64[(I + 24) >> 3] = BigInt(B.size)),
							(HEAP32[(I + 32) >> 2] = 4096),
							(HEAP32[(I + 36) >> 2] = B.blocks);
						var tr = B.atime.getTime(),
							rr = B.mtime.getTime(),
							ir = B.ctime.getTime();
						return (
							(HEAP64[(I + 40) >> 3] = BigInt(Math.floor(tr / 1e3))),
							(HEAPU32[(I + 48) >> 2] = (tr % 1e3) * 1e3 * 1e3),
							(HEAP64[(I + 56) >> 3] = BigInt(Math.floor(rr / 1e3))),
							(HEAPU32[(I + 64) >> 2] = (rr % 1e3) * 1e3 * 1e3),
							(HEAP64[(I + 72) >> 3] = BigInt(Math.floor(ir / 1e3))),
							(HEAPU32[(I + 80) >> 2] = (ir % 1e3) * 1e3 * 1e3),
							(HEAP64[(I + 88) >> 3] = BigInt(B.ino)),
							0
						);
					},
					doMsync(e, t, I, B, tr) {
						if (!FS.isFile(t.node.mode)) throw new FS.ErrnoError(43);
						if (B & 2) return 0;
						var rr = HEAPU8.slice(e, e + I);
						FS.msync(t, rr, tr, I, B);
					},
					getStreamFromFD(e) {
						var t = FS.getStreamChecked(e);
						return t;
					},
					varargs: void 0,
					getStr(e) {
						var t = UTF8ToString(e);
						return t;
					}
				},
				___syscall__newselect = function (e, t, I, B, tr) {
					try {
						for (
							var rr = 0,
								ir = t ? HEAP32[t >> 2] : 0,
								lr = t ? HEAP32[(t + 4) >> 2] : 0,
								dr = I ? HEAP32[I >> 2] : 0,
								mr = I ? HEAP32[(I + 4) >> 2] : 0,
								_r = B ? HEAP32[B >> 2] : 0,
								fr = B ? HEAP32[(B + 4) >> 2] : 0,
								hr = 0,
								Mr = 0,
								gr = 0,
								yr = 0,
								xr = 0,
								vr = 0,
								Sr = (t ? HEAP32[t >> 2] : 0) | (I ? HEAP32[I >> 2] : 0) | (B ? HEAP32[B >> 2] : 0),
								wr =
									(t ? HEAP32[(t + 4) >> 2] : 0) |
									(I ? HEAP32[(I + 4) >> 2] : 0) |
									(B ? HEAP32[(B + 4) >> 2] : 0),
								br = (Dr, zr, Jr, Qr) => (Dr < 32 ? zr & Qr : Jr & Qr),
								Fr = 0;
							Fr < e;
							Fr++
						) {
							var Ir = 1 << Fr % 32;
							if (br(Fr, Sr, wr, Ir)) {
								var kr = SYSCALLS.getStreamFromFD(Fr),
									Or = SYSCALLS.DEFAULT_POLLMASK;
								if (kr.stream_ops.poll) {
									var Lr = -1;
									if (tr) {
										var Gr = t ? HEAP32[tr >> 2] : 0,
											es = t ? HEAP32[(tr + 4) >> 2] : 0;
										Lr = (Gr + es / 1e6) * 1e3;
									}
									Or = kr.stream_ops.poll(kr, Lr);
								}
								Or & 1 && br(Fr, ir, lr, Ir) && (Fr < 32 ? (hr = hr | Ir) : (Mr = Mr | Ir), rr++),
									Or & 4 && br(Fr, dr, mr, Ir) && (Fr < 32 ? (gr = gr | Ir) : (yr = yr | Ir), rr++),
									Or & 2 && br(Fr, _r, fr, Ir) && (Fr < 32 ? (xr = xr | Ir) : (vr = vr | Ir), rr++);
							}
						}
						return (
							t && ((HEAP32[t >> 2] = hr), (HEAP32[(t + 4) >> 2] = Mr)),
							I && ((HEAP32[I >> 2] = gr), (HEAP32[(I + 4) >> 2] = yr)),
							B && ((HEAP32[B >> 2] = xr), (HEAP32[(B + 4) >> 2] = vr)),
							rr
						);
					} catch (Dr) {
						if (typeof FS > 'u' || Dr.name !== 'ErrnoError') throw Dr;
						return -Dr.errno;
					}
				};
			___syscall__newselect.sig = 'iipppp';
			var SOCKFS = {
					websocketArgs: {},
					callbacks: {},
					on(e, t) {
						SOCKFS.callbacks[e] = t;
					},
					emit(e, t) {
						var I, B;
						(B = (I = SOCKFS.callbacks)[e]) == null || B.call(I, t);
					},
					mount(e) {
						return (
							(SOCKFS.websocketArgs = Module.websocket || {}),
							((Module.websocket ?? (Module.websocket = {})).on = SOCKFS.on),
							FS.createNode(null, '/', 16895, 0)
						);
					},
					createSocket(e, t, I) {
						t &= -526337;
						var B = t == 1;
						if (B && I && I != 6) throw new FS.ErrnoError(66);
						var tr = {
								family: e,
								type: t,
								protocol: I,
								server: null,
								error: null,
								peers: {},
								pending: [],
								recv_queue: [],
								sock_ops: SOCKFS.websocket_sock_ops
							},
							rr = SOCKFS.nextname(),
							ir = FS.createNode(SOCKFS.root, rr, 49152, 0);
						ir.sock = tr;
						var lr = FS.createStream({
							path: rr,
							node: ir,
							flags: 2,
							seekable: !1,
							stream_ops: SOCKFS.stream_ops
						});
						return (tr.stream = lr), tr;
					},
					getSocket(e) {
						var t = FS.getStream(e);
						return !t || !FS.isSocket(t.node.mode) ? null : t.node.sock;
					},
					stream_ops: {
						poll(e) {
							var t = e.node.sock;
							return t.sock_ops.poll(t);
						},
						ioctl(e, t, I) {
							var B = e.node.sock;
							return B.sock_ops.ioctl(B, t, I);
						},
						read(e, t, I, B, tr) {
							var rr = e.node.sock,
								ir = rr.sock_ops.recvmsg(rr, B);
							return ir ? (t.set(ir.buffer, I), ir.buffer.length) : 0;
						},
						write(e, t, I, B, tr) {
							var rr = e.node.sock;
							return rr.sock_ops.sendmsg(rr, t, I, B);
						},
						close(e) {
							var t = e.node.sock;
							t.sock_ops.close(t);
						}
					},
					nextname() {
						return (
							SOCKFS.nextname.current || (SOCKFS.nextname.current = 0),
							`socket[${SOCKFS.nextname.current++}]`
						);
					},
					websocket_sock_ops: {
						createPeer(e, t, I) {
							var B;
							if ((typeof t == 'object' && ((B = t), (t = null), (I = null)), B))
								if (B._socket) (t = B._socket.remoteAddress), (I = B._socket.remotePort);
								else {
									var tr = /ws[s]?:\/\/([^:]+):(\d+)/.exec(B.url);
									if (!tr)
										throw new Error('WebSocket URL must be in the format ws(s)://address:port');
									(t = tr[1]), (I = parseInt(tr[2], 10));
								}
							else
								try {
									var rr = 'ws:#'.replace('#', '//'),
										ir = 'binary',
										lr = void 0;
									if (
										(SOCKFS.websocketArgs.url && (rr = SOCKFS.websocketArgs.url),
										SOCKFS.websocketArgs.subprotocol
											? (ir = SOCKFS.websocketArgs.subprotocol)
											: SOCKFS.websocketArgs.subprotocol === null && (ir = 'null'),
										rr === 'ws://' || rr === 'wss://')
									) {
										var dr = t.split('/');
										rr = rr + dr[0] + ':' + I + '/' + dr.slice(1).join('/');
									}
									ir !== 'null' && ((ir = ir.replace(/^ +| +$/g, '').split(/ *, */)), (lr = ir));
									var mr;
									ENVIRONMENT_IS_NODE ? (mr = require('ws')) : (mr = WebSocket),
										(B = new mr(rr, lr)),
										(B.binaryType = 'arraybuffer');
								} catch {
									throw new FS.ErrnoError(23);
								}
							var _r = { addr: t, port: I, socket: B, msg_send_queue: [] };
							return (
								SOCKFS.websocket_sock_ops.addPeer(e, _r),
								SOCKFS.websocket_sock_ops.handlePeerEvents(e, _r),
								e.type === 2 &&
									typeof e.sport < 'u' &&
									_r.msg_send_queue.push(
										new Uint8Array([
											255,
											255,
											255,
											255,
											112,
											111,
											114,
											116,
											(e.sport & 65280) >> 8,
											e.sport & 255
										])
									),
								_r
							);
						},
						getPeer(e, t, I) {
							return e.peers[t + ':' + I];
						},
						addPeer(e, t) {
							e.peers[t.addr + ':' + t.port] = t;
						},
						removePeer(e, t) {
							delete e.peers[t.addr + ':' + t.port];
						},
						handlePeerEvents(e, t) {
							var I = !0,
								B = function () {
									(e.connecting = !1), SOCKFS.emit('open', e.stream.fd);
									try {
										for (var rr = t.msg_send_queue.shift(); rr; )
											t.socket.send(rr), (rr = t.msg_send_queue.shift());
									} catch {
										t.socket.close();
									}
								};
							function tr(rr) {
								if (typeof rr == 'string') {
									var ir = new TextEncoder();
									rr = ir.encode(rr);
								} else {
									if ((assert(rr.byteLength !== void 0), rr.byteLength == 0)) return;
									rr = new Uint8Array(rr);
								}
								var lr = I;
								if (
									((I = !1),
									lr &&
										rr.length === 10 &&
										rr[0] === 255 &&
										rr[1] === 255 &&
										rr[2] === 255 &&
										rr[3] === 255 &&
										rr[4] === 112 &&
										rr[5] === 111 &&
										rr[6] === 114 &&
										rr[7] === 116)
								) {
									var dr = (rr[8] << 8) | rr[9];
									SOCKFS.websocket_sock_ops.removePeer(e, t),
										(t.port = dr),
										SOCKFS.websocket_sock_ops.addPeer(e, t);
									return;
								}
								e.recv_queue.push({ addr: t.addr, port: t.port, data: rr }),
									SOCKFS.emit('message', e.stream.fd);
							}
							ENVIRONMENT_IS_NODE
								? (t.socket.on('open', B),
									t.socket.on('message', function (rr, ir) {
										ir && tr(new Uint8Array(rr).buffer);
									}),
									t.socket.on('close', function () {
										SOCKFS.emit('close', e.stream.fd);
									}),
									t.socket.on('error', function (rr) {
										(e.error = 14),
											SOCKFS.emit('error', [
												e.stream.fd,
												e.error,
												'ECONNREFUSED: Connection refused'
											]);
									}))
								: ((t.socket.onopen = B),
									(t.socket.onclose = function () {
										SOCKFS.emit('close', e.stream.fd);
									}),
									(t.socket.onmessage = function (rr) {
										tr(rr.data);
									}),
									(t.socket.onerror = function (rr) {
										(e.error = 14),
											SOCKFS.emit('error', [
												e.stream.fd,
												e.error,
												'ECONNREFUSED: Connection refused'
											]);
									}));
						},
						poll(e) {
							if (e.type === 1 && e.server) return e.pending.length ? 65 : 0;
							var t = 0,
								I = e.type === 1 ? SOCKFS.websocket_sock_ops.getPeer(e, e.daddr, e.dport) : null;
							return (
								(e.recv_queue.length ||
									!I ||
									(I && I.socket.readyState === I.socket.CLOSING) ||
									(I && I.socket.readyState === I.socket.CLOSED)) &&
									(t |= 65),
								(!I || (I && I.socket.readyState === I.socket.OPEN)) && (t |= 4),
								((I && I.socket.readyState === I.socket.CLOSING) ||
									(I && I.socket.readyState === I.socket.CLOSED)) &&
									(e.connecting ? (t |= 4) : (t |= 16)),
								t
							);
						},
						ioctl(e, t, I) {
							switch (t) {
								case 21531:
									var B = 0;
									return (
										e.recv_queue.length && (B = e.recv_queue[0].data.length),
										(HEAP32[I >> 2] = B),
										0
									);
								default:
									return 28;
							}
						},
						close(e) {
							if (e.server) {
								try {
									e.server.close();
								} catch {}
								e.server = null;
							}
							for (var t = Object.keys(e.peers), I = 0; I < t.length; I++) {
								var B = e.peers[t[I]];
								try {
									B.socket.close();
								} catch {}
								SOCKFS.websocket_sock_ops.removePeer(e, B);
							}
							return 0;
						},
						bind(e, t, I) {
							if (typeof e.saddr < 'u' || typeof e.sport < 'u') throw new FS.ErrnoError(28);
							if (((e.saddr = t), (e.sport = I), e.type === 2)) {
								e.server && (e.server.close(), (e.server = null));
								try {
									e.sock_ops.listen(e, 0);
								} catch (B) {
									if (B.name !== 'ErrnoError' || B.errno !== 138) throw B;
								}
							}
						},
						connect(e, t, I) {
							if (e.server) throw new FS.ErrnoError(138);
							if (typeof e.daddr < 'u' && typeof e.dport < 'u') {
								var B = SOCKFS.websocket_sock_ops.getPeer(e, e.daddr, e.dport);
								if (B)
									throw B.socket.readyState === B.socket.CONNECTING
										? new FS.ErrnoError(7)
										: new FS.ErrnoError(30);
							}
							var tr = SOCKFS.websocket_sock_ops.createPeer(e, t, I);
							(e.daddr = tr.addr), (e.dport = tr.port), (e.connecting = !0);
						},
						listen(e, t) {
							if (!ENVIRONMENT_IS_NODE) throw new FS.ErrnoError(138);
							if (e.server) throw new FS.ErrnoError(28);
							var I = require('ws').Server,
								B = e.saddr;
							(e.server = new I({ host: B, port: e.sport })),
								SOCKFS.emit('listen', e.stream.fd),
								e.server.on('connection', function (tr) {
									if (e.type === 1) {
										var rr = SOCKFS.createSocket(e.family, e.type, e.protocol),
											ir = SOCKFS.websocket_sock_ops.createPeer(rr, tr);
										(rr.daddr = ir.addr),
											(rr.dport = ir.port),
											e.pending.push(rr),
											SOCKFS.emit('connection', rr.stream.fd);
									} else
										SOCKFS.websocket_sock_ops.createPeer(e, tr),
											SOCKFS.emit('connection', e.stream.fd);
								}),
								e.server.on('close', function () {
									SOCKFS.emit('close', e.stream.fd), (e.server = null);
								}),
								e.server.on('error', function (tr) {
									(e.error = 23),
										SOCKFS.emit('error', [
											e.stream.fd,
											e.error,
											'EHOSTUNREACH: Host is unreachable'
										]);
								});
						},
						accept(e) {
							if (!e.server || !e.pending.length) throw new FS.ErrnoError(28);
							var t = e.pending.shift();
							return (t.stream.flags = e.stream.flags), t;
						},
						getname(e, t) {
							var I, B;
							if (t) {
								if (e.daddr === void 0 || e.dport === void 0) throw new FS.ErrnoError(53);
								(I = e.daddr), (B = e.dport);
							} else (I = e.saddr || 0), (B = e.sport || 0);
							return { addr: I, port: B };
						},
						sendmsg(e, t, I, B, tr, rr) {
							if (e.type === 2) {
								if (
									((tr === void 0 || rr === void 0) && ((tr = e.daddr), (rr = e.dport)),
									tr === void 0 || rr === void 0)
								)
									throw new FS.ErrnoError(17);
							} else (tr = e.daddr), (rr = e.dport);
							var ir = SOCKFS.websocket_sock_ops.getPeer(e, tr, rr);
							if (
								e.type === 1 &&
								(!ir ||
									ir.socket.readyState === ir.socket.CLOSING ||
									ir.socket.readyState === ir.socket.CLOSED)
							)
								throw new FS.ErrnoError(53);
							ArrayBuffer.isView(t) && ((I += t.byteOffset), (t = t.buffer));
							var lr = t.slice(I, I + B);
							if (!ir || ir.socket.readyState !== ir.socket.OPEN)
								return (
									e.type === 2 &&
										(!ir ||
											ir.socket.readyState === ir.socket.CLOSING ||
											ir.socket.readyState === ir.socket.CLOSED) &&
										(ir = SOCKFS.websocket_sock_ops.createPeer(e, tr, rr)),
									ir.msg_send_queue.push(lr),
									B
								);
							try {
								return ir.socket.send(lr), B;
							} catch {
								throw new FS.ErrnoError(28);
							}
						},
						recvmsg(e, t) {
							if (e.type === 1 && e.server) throw new FS.ErrnoError(53);
							var I = e.recv_queue.shift();
							if (!I) {
								if (e.type === 1) {
									var B = SOCKFS.websocket_sock_ops.getPeer(e, e.daddr, e.dport);
									if (!B) throw new FS.ErrnoError(53);
									if (
										B.socket.readyState === B.socket.CLOSING ||
										B.socket.readyState === B.socket.CLOSED
									)
										return null;
									throw new FS.ErrnoError(6);
								}
								throw new FS.ErrnoError(6);
							}
							var tr = I.data.byteLength || I.data.length,
								rr = I.data.byteOffset || 0,
								ir = I.data.buffer || I.data,
								lr = Math.min(t, tr),
								dr = { buffer: new Uint8Array(ir, rr, lr), addr: I.addr, port: I.port };
							if (e.type === 1 && lr < tr) {
								var mr = tr - lr;
								(I.data = new Uint8Array(ir, rr + lr, mr)), e.recv_queue.unshift(I);
							}
							return dr;
						}
					}
				},
				getSocketFromFD = (e) => {
					var t = SOCKFS.getSocket(e);
					if (!t) throw new FS.ErrnoError(8);
					return t;
				},
				inetNtop4 = (e) =>
					(e & 255) + '.' + ((e >> 8) & 255) + '.' + ((e >> 16) & 255) + '.' + ((e >> 24) & 255),
				inetNtop6 = (e) => {
					var t = '',
						I = 0,
						B = 0,
						tr = 0,
						rr = 0,
						ir = 0,
						lr = 0,
						dr = [
							e[0] & 65535,
							e[0] >> 16,
							e[1] & 65535,
							e[1] >> 16,
							e[2] & 65535,
							e[2] >> 16,
							e[3] & 65535,
							e[3] >> 16
						],
						mr = !0,
						_r = '';
					for (lr = 0; lr < 5; lr++)
						if (dr[lr] !== 0) {
							mr = !1;
							break;
						}
					if (mr) {
						if (((_r = inetNtop4(dr[6] | (dr[7] << 16))), dr[5] === -1))
							return (t = '::ffff:'), (t += _r), t;
						if (dr[5] === 0)
							return (
								(t = '::'),
								_r === '0.0.0.0' && (_r = ''),
								_r === '0.0.0.1' && (_r = '1'),
								(t += _r),
								t
							);
					}
					for (I = 0; I < 8; I++)
						dr[I] === 0 && (I - tr > 1 && (ir = 0), (tr = I), ir++),
							ir > B && ((B = ir), (rr = I - B + 1));
					for (I = 0; I < 8; I++) {
						if (B > 1 && dr[I] === 0 && I >= rr && I < rr + B) {
							I === rr && ((t += ':'), rr === 0 && (t += ':'));
							continue;
						}
						(t += Number(_ntohs(dr[I] & 65535)).toString(16)), (t += I < 7 ? ':' : '');
					}
					return t;
				},
				readSockaddr = (e, t) => {
					var I = HEAP16[e >> 1],
						B = _ntohs(HEAPU16[(e + 2) >> 1]),
						tr;
					switch (I) {
						case 2:
							if (t !== 16) return { errno: 28 };
							(tr = HEAP32[(e + 4) >> 2]), (tr = inetNtop4(tr));
							break;
						case 10:
							if (t !== 28) return { errno: 28 };
							(tr = [
								HEAP32[(e + 8) >> 2],
								HEAP32[(e + 12) >> 2],
								HEAP32[(e + 16) >> 2],
								HEAP32[(e + 20) >> 2]
							]),
								(tr = inetNtop6(tr));
							break;
						default:
							return { errno: 5 };
					}
					return { family: I, addr: tr, port: B };
				},
				inetPton4 = (e) => {
					for (var t = e.split('.'), I = 0; I < 4; I++) {
						var B = Number(t[I]);
						if (isNaN(B)) return null;
						t[I] = B;
					}
					return (t[0] | (t[1] << 8) | (t[2] << 16) | (t[3] << 24)) >>> 0;
				},
				jstoi_q = (e) => parseInt(e),
				inetPton6 = (e) => {
					var t,
						I,
						B,
						tr,
						rr =
							/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,
						ir = [];
					if (!rr.test(e)) return null;
					if (e === '::') return [0, 0, 0, 0, 0, 0, 0, 0];
					for (
						e.startsWith('::') ? (e = e.replace('::', 'Z:')) : (e = e.replace('::', ':Z:')),
							e.indexOf('.') > 0
								? ((e = e.replace(new RegExp('[.]', 'g'), ':')),
									(t = e.split(':')),
									(t[t.length - 4] = jstoi_q(t[t.length - 4]) + jstoi_q(t[t.length - 3]) * 256),
									(t[t.length - 3] = jstoi_q(t[t.length - 2]) + jstoi_q(t[t.length - 1]) * 256),
									(t = t.slice(0, t.length - 2)))
								: (t = e.split(':')),
							B = 0,
							tr = 0,
							I = 0;
						I < t.length;
						I++
					)
						if (typeof t[I] == 'string')
							if (t[I] === 'Z') {
								for (tr = 0; tr < 8 - t.length + 1; tr++) ir[I + tr] = 0;
								B = tr - 1;
							} else ir[I + B] = _htons(parseInt(t[I], 16));
						else ir[I + B] = t[I];
					return [
						(ir[1] << 16) | ir[0],
						(ir[3] << 16) | ir[2],
						(ir[5] << 16) | ir[4],
						(ir[7] << 16) | ir[6]
					];
				},
				DNS = {
					address_map: { id: 1, addrs: {}, names: {} },
					lookup_name(e) {
						var t = inetPton4(e);
						if (t !== null || ((t = inetPton6(e)), t !== null)) return e;
						var I;
						if (DNS.address_map.addrs[e]) I = DNS.address_map.addrs[e];
						else {
							var B = DNS.address_map.id++;
							assert(B < 65535, 'exceeded max address mappings of 65535'),
								(I = '172.29.' + (B & 255) + '.' + (B & 65280)),
								(DNS.address_map.names[I] = e),
								(DNS.address_map.addrs[e] = I);
						}
						return I;
					},
					lookup_addr(e) {
						return DNS.address_map.names[e] ? DNS.address_map.names[e] : null;
					}
				},
				getSocketAddress = (e, t) => {
					var I = readSockaddr(e, t);
					if (I.errno) throw new FS.ErrnoError(I.errno);
					return (I.addr = DNS.lookup_addr(I.addr) || I.addr), I;
				};
			function ___syscall_bind(e, t, I, B, tr, rr) {
				try {
					var ir = getSocketFromFD(e),
						lr = getSocketAddress(t, I);
					return ir.sock_ops.bind(ir, lr.addr, lr.port), 0;
				} catch (dr) {
					if (typeof FS > 'u' || dr.name !== 'ErrnoError') throw dr;
					return -dr.errno;
				}
			}
			___syscall_bind.sig = 'iippiii';
			function ___syscall_chdir(e) {
				try {
					return (e = SYSCALLS.getStr(e)), FS.chdir(e), 0;
				} catch (t) {
					if (typeof FS > 'u' || t.name !== 'ErrnoError') throw t;
					return -t.errno;
				}
			}
			___syscall_chdir.sig = 'ip';
			function ___syscall_chmod(e, t) {
				try {
					return (e = SYSCALLS.getStr(e)), FS.chmod(e, t), 0;
				} catch (I) {
					if (typeof FS > 'u' || I.name !== 'ErrnoError') throw I;
					return -I.errno;
				}
			}
			___syscall_chmod.sig = 'ipi';
			function ___syscall_connect(e, t, I, B, tr, rr) {
				try {
					var ir = getSocketFromFD(e),
						lr = getSocketAddress(t, I);
					return ir.sock_ops.connect(ir, lr.addr, lr.port), 0;
				} catch (dr) {
					if (typeof FS > 'u' || dr.name !== 'ErrnoError') throw dr;
					return -dr.errno;
				}
			}
			___syscall_connect.sig = 'iippiii';
			function ___syscall_dup(e) {
				try {
					var t = SYSCALLS.getStreamFromFD(e);
					return FS.dupStream(t).fd;
				} catch (I) {
					if (typeof FS > 'u' || I.name !== 'ErrnoError') throw I;
					return -I.errno;
				}
			}
			___syscall_dup.sig = 'ii';
			function ___syscall_dup3(e, t, I) {
				try {
					var B = SYSCALLS.getStreamFromFD(e);
					if (B.fd === t) return -28;
					if (t < 0 || t >= FS.MAX_OPEN_FDS) return -8;
					var tr = FS.getStream(t);
					return tr && FS.close(tr), FS.dupStream(B, t).fd;
				} catch (rr) {
					if (typeof FS > 'u' || rr.name !== 'ErrnoError') throw rr;
					return -rr.errno;
				}
			}
			___syscall_dup3.sig = 'iiii';
			function ___syscall_faccessat(e, t, I, B) {
				try {
					if (((t = SYSCALLS.getStr(t)), (t = SYSCALLS.calculateAt(e, t)), I & -8)) return -28;
					var tr = FS.lookupPath(t, { follow: !0 }),
						rr = tr.node;
					if (!rr) return -44;
					var ir = '';
					return (
						I & 4 && (ir += 'r'),
						I & 2 && (ir += 'w'),
						I & 1 && (ir += 'x'),
						ir && FS.nodePermissions(rr, ir) ? -2 : 0
					);
				} catch (lr) {
					if (typeof FS > 'u' || lr.name !== 'ErrnoError') throw lr;
					return -lr.errno;
				}
			}
			___syscall_faccessat.sig = 'iipii';
			var ___syscall_fadvise64 = (e, t, I, B) => 0;
			___syscall_fadvise64.sig = 'iijji';
			var INT53_MAX = 9007199254740992,
				INT53_MIN = -9007199254740992,
				bigintToI53Checked = (e) => (e < INT53_MIN || e > INT53_MAX ? NaN : Number(e));
			function ___syscall_fallocate(e, t, I, B) {
				(I = bigintToI53Checked(I)), (B = bigintToI53Checked(B));
				try {
					if (isNaN(I)) return 61;
					var tr = SYSCALLS.getStreamFromFD(e);
					return FS.allocate(tr, I, B), 0;
				} catch (rr) {
					if (typeof FS > 'u' || rr.name !== 'ErrnoError') throw rr;
					return -rr.errno;
				}
			}
			___syscall_fallocate.sig = 'iiijj';
			var syscallGetVarargI = () => {
					var e = HEAP32[+SYSCALLS.varargs >> 2];
					return (SYSCALLS.varargs += 4), e;
				},
				syscallGetVarargP = syscallGetVarargI;
			function ___syscall_fcntl64(e, t, I) {
				SYSCALLS.varargs = I;
				try {
					var B = SYSCALLS.getStreamFromFD(e);
					switch (t) {
						case 0: {
							var tr = syscallGetVarargI();
							if (tr < 0) return -28;
							for (; FS.streams[tr]; ) tr++;
							var rr;
							return (rr = FS.dupStream(B, tr)), rr.fd;
						}
						case 1:
						case 2:
							return 0;
						case 3:
							return B.flags;
						case 4: {
							var tr = syscallGetVarargI();
							return (B.flags |= tr), 0;
						}
						case 12: {
							var tr = syscallGetVarargP(),
								ir = 0;
							return (HEAP16[(tr + ir) >> 1] = 2), 0;
						}
						case 13:
						case 14:
							return 0;
					}
					return -28;
				} catch (lr) {
					if (typeof FS > 'u' || lr.name !== 'ErrnoError') throw lr;
					return -lr.errno;
				}
			}
			___syscall_fcntl64.sig = 'iiip';
			function ___syscall_fdatasync(e) {
				try {
					var t = SYSCALLS.getStreamFromFD(e);
					return 0;
				} catch (I) {
					if (typeof FS > 'u' || I.name !== 'ErrnoError') throw I;
					return -I.errno;
				}
			}
			___syscall_fdatasync.sig = 'ii';
			function ___syscall_fstat64(e, t) {
				try {
					var I = SYSCALLS.getStreamFromFD(e);
					return SYSCALLS.doStat(FS.stat, I.path, t);
				} catch (B) {
					if (typeof FS > 'u' || B.name !== 'ErrnoError') throw B;
					return -B.errno;
				}
			}
			___syscall_fstat64.sig = 'iip';
			function ___syscall_ftruncate64(e, t) {
				t = bigintToI53Checked(t);
				try {
					return isNaN(t) ? 61 : (FS.ftruncate(e, t), 0);
				} catch (I) {
					if (typeof FS > 'u' || I.name !== 'ErrnoError') throw I;
					return -I.errno;
				}
			}
			___syscall_ftruncate64.sig = 'iij';
			var stringToUTF8 = (e, t, I) => stringToUTF8Array(e, HEAPU8, t, I);
			function ___syscall_getcwd(e, t) {
				try {
					if (t === 0) return -28;
					var I = FS.cwd(),
						B = lengthBytesUTF8(I) + 1;
					return t < B ? -68 : (stringToUTF8(I, e, t), B);
				} catch (tr) {
					if (typeof FS > 'u' || tr.name !== 'ErrnoError') throw tr;
					return -tr.errno;
				}
			}
			___syscall_getcwd.sig = 'ipp';
			function ___syscall_getdents64(e, t, I) {
				try {
					var B = SYSCALLS.getStreamFromFD(e);
					B.getdents || (B.getdents = FS.readdir(B.path));
					for (
						var tr = 280,
							rr = 0,
							ir = FS.llseek(B, 0, 1),
							lr = Math.floor(ir / tr),
							dr = Math.min(B.getdents.length, lr + Math.floor(I / tr)),
							mr = lr;
						mr < dr;
						mr++
					) {
						var _r,
							fr,
							hr = B.getdents[mr];
						if (hr === '.') (_r = B.node.id), (fr = 4);
						else if (hr === '..') {
							var Mr = FS.lookupPath(B.path, { parent: !0 });
							(_r = Mr.node.id), (fr = 4);
						} else {
							var gr;
							try {
								gr = FS.lookupNode(B.node, hr);
							} catch (yr) {
								if ((yr == null ? void 0 : yr.errno) === 28) continue;
								throw yr;
							}
							(_r = gr.id),
								(fr = FS.isChrdev(gr.mode)
									? 2
									: FS.isDir(gr.mode)
										? 4
										: FS.isLink(gr.mode)
											? 10
											: 8);
						}
						(HEAP64[(t + rr) >> 3] = BigInt(_r)),
							(HEAP64[(t + rr + 8) >> 3] = BigInt((mr + 1) * tr)),
							(HEAP16[(t + rr + 16) >> 1] = 280),
							(HEAP8[t + rr + 18] = fr),
							stringToUTF8(hr, t + rr + 19, 256),
							(rr += tr);
					}
					return FS.llseek(B, mr * tr, 0), rr;
				} catch (yr) {
					if (typeof FS > 'u' || yr.name !== 'ErrnoError') throw yr;
					return -yr.errno;
				}
			}
			___syscall_getdents64.sig = 'iipp';
			var writeSockaddr = (e, t, I, B, tr) => {
				switch (t) {
					case 2:
						(I = inetPton4(I)),
							zeroMemory(e, 16),
							tr && (HEAP32[tr >> 2] = 16),
							(HEAP16[e >> 1] = t),
							(HEAP32[(e + 4) >> 2] = I),
							(HEAP16[(e + 2) >> 1] = _htons(B));
						break;
					case 10:
						(I = inetPton6(I)),
							zeroMemory(e, 28),
							tr && (HEAP32[tr >> 2] = 28),
							(HEAP32[e >> 2] = t),
							(HEAP32[(e + 8) >> 2] = I[0]),
							(HEAP32[(e + 12) >> 2] = I[1]),
							(HEAP32[(e + 16) >> 2] = I[2]),
							(HEAP32[(e + 20) >> 2] = I[3]),
							(HEAP16[(e + 2) >> 1] = _htons(B));
						break;
					default:
						return 5;
				}
				return 0;
			};
			function ___syscall_getsockname(e, t, I, B, tr, rr) {
				try {
					var ir = getSocketFromFD(e),
						lr = writeSockaddr(t, ir.family, DNS.lookup_name(ir.saddr || '0.0.0.0'), ir.sport, I);
					return 0;
				} catch (dr) {
					if (typeof FS > 'u' || dr.name !== 'ErrnoError') throw dr;
					return -dr.errno;
				}
			}
			___syscall_getsockname.sig = 'iippiii';
			function ___syscall_getsockopt(e, t, I, B, tr, rr) {
				try {
					var ir = getSocketFromFD(e);
					return t === 1 && I === 4
						? ((HEAP32[B >> 2] = ir.error), (HEAP32[tr >> 2] = 4), (ir.error = null), 0)
						: -50;
				} catch (lr) {
					if (typeof FS > 'u' || lr.name !== 'ErrnoError') throw lr;
					return -lr.errno;
				}
			}
			___syscall_getsockopt.sig = 'iiiippi';
			function ___syscall_ioctl(e, t, I) {
				SYSCALLS.varargs = I;
				try {
					var B = SYSCALLS.getStreamFromFD(e);
					switch (t) {
						case 21509:
							return B.tty ? 0 : -59;
						case 21505: {
							if (!B.tty) return -59;
							if (B.tty.ops.ioctl_tcgets) {
								var tr = B.tty.ops.ioctl_tcgets(B),
									rr = syscallGetVarargP();
								(HEAP32[rr >> 2] = tr.c_iflag || 0),
									(HEAP32[(rr + 4) >> 2] = tr.c_oflag || 0),
									(HEAP32[(rr + 8) >> 2] = tr.c_cflag || 0),
									(HEAP32[(rr + 12) >> 2] = tr.c_lflag || 0);
								for (var ir = 0; ir < 32; ir++) HEAP8[rr + ir + 17] = tr.c_cc[ir] || 0;
								return 0;
							}
							return 0;
						}
						case 21510:
						case 21511:
						case 21512:
							return B.tty ? 0 : -59;
						case 21506:
						case 21507:
						case 21508: {
							if (!B.tty) return -59;
							if (B.tty.ops.ioctl_tcsets) {
								for (
									var rr = syscallGetVarargP(),
										lr = HEAP32[rr >> 2],
										dr = HEAP32[(rr + 4) >> 2],
										mr = HEAP32[(rr + 8) >> 2],
										_r = HEAP32[(rr + 12) >> 2],
										fr = [],
										ir = 0;
									ir < 32;
									ir++
								)
									fr.push(HEAP8[rr + ir + 17]);
								return B.tty.ops.ioctl_tcsets(B.tty, t, {
									c_iflag: lr,
									c_oflag: dr,
									c_cflag: mr,
									c_lflag: _r,
									c_cc: fr
								});
							}
							return 0;
						}
						case 21519: {
							if (!B.tty) return -59;
							var rr = syscallGetVarargP();
							return (HEAP32[rr >> 2] = 0), 0;
						}
						case 21520:
							return B.tty ? -28 : -59;
						case 21531: {
							var rr = syscallGetVarargP();
							return FS.ioctl(B, t, rr);
						}
						case 21523: {
							if (!B.tty) return -59;
							if (B.tty.ops.ioctl_tiocgwinsz) {
								var hr = B.tty.ops.ioctl_tiocgwinsz(B.tty),
									rr = syscallGetVarargP();
								(HEAP16[rr >> 1] = hr[0]), (HEAP16[(rr + 2) >> 1] = hr[1]);
							}
							return 0;
						}
						case 21524:
							return B.tty ? 0 : -59;
						case 21515:
							return B.tty ? 0 : -59;
						default:
							return -28;
					}
				} catch (Mr) {
					if (typeof FS > 'u' || Mr.name !== 'ErrnoError') throw Mr;
					return -Mr.errno;
				}
			}
			___syscall_ioctl.sig = 'iiip';
			function ___syscall_lstat64(e, t) {
				try {
					return (e = SYSCALLS.getStr(e)), SYSCALLS.doStat(FS.lstat, e, t);
				} catch (I) {
					if (typeof FS > 'u' || I.name !== 'ErrnoError') throw I;
					return -I.errno;
				}
			}
			___syscall_lstat64.sig = 'ipp';
			function ___syscall_mkdirat(e, t, I) {
				try {
					return (t = SYSCALLS.getStr(t)), (t = SYSCALLS.calculateAt(e, t)), FS.mkdir(t, I, 0), 0;
				} catch (B) {
					if (typeof FS > 'u' || B.name !== 'ErrnoError') throw B;
					return -B.errno;
				}
			}
			___syscall_mkdirat.sig = 'iipi';
			function ___syscall_newfstatat(e, t, I, B) {
				try {
					t = SYSCALLS.getStr(t);
					var tr = B & 256,
						rr = B & 4096;
					return (
						(B = B & -6401),
						(t = SYSCALLS.calculateAt(e, t, rr)),
						SYSCALLS.doStat(tr ? FS.lstat : FS.stat, t, I)
					);
				} catch (ir) {
					if (typeof FS > 'u' || ir.name !== 'ErrnoError') throw ir;
					return -ir.errno;
				}
			}
			___syscall_newfstatat.sig = 'iippi';
			function ___syscall_openat(e, t, I, B) {
				SYSCALLS.varargs = B;
				try {
					(t = SYSCALLS.getStr(t)), (t = SYSCALLS.calculateAt(e, t));
					var tr = B ? syscallGetVarargI() : 0;
					return FS.open(t, I, tr).fd;
				} catch (rr) {
					if (typeof FS > 'u' || rr.name !== 'ErrnoError') throw rr;
					return -rr.errno;
				}
			}
			___syscall_openat.sig = 'iipip';
			var PIPEFS = {
				BUCKET_BUFFER_SIZE: 8192,
				mount(e) {
					return FS.createNode(null, '/', 16895, 0);
				},
				createPipe() {
					var e = { buckets: [], refcnt: 2 };
					e.buckets.push({
						buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
						offset: 0,
						roffset: 0
					});
					var t = PIPEFS.nextname(),
						I = PIPEFS.nextname(),
						B = FS.createNode(PIPEFS.root, t, 4096, 0),
						tr = FS.createNode(PIPEFS.root, I, 4096, 0);
					(B.pipe = e), (tr.pipe = e);
					var rr = FS.createStream({
						path: t,
						node: B,
						flags: 0,
						seekable: !1,
						stream_ops: PIPEFS.stream_ops
					});
					B.stream = rr;
					var ir = FS.createStream({
						path: I,
						node: tr,
						flags: 1,
						seekable: !1,
						stream_ops: PIPEFS.stream_ops
					});
					return (tr.stream = ir), { readable_fd: rr.fd, writable_fd: ir.fd };
				},
				stream_ops: {
					poll(e) {
						var t = e.node.pipe;
						if ((e.flags & 2097155) === 1) return 260;
						if (t.buckets.length > 0)
							for (var I = 0; I < t.buckets.length; I++) {
								var B = t.buckets[I];
								if (B.offset - B.roffset > 0) return 65;
							}
						return 0;
					},
					ioctl(e, t, I) {
						return 28;
					},
					fsync(e) {
						return 28;
					},
					read(e, t, I, B, tr) {
						for (var rr = e.node.pipe, ir = 0, lr = 0; lr < rr.buckets.length; lr++) {
							var dr = rr.buckets[lr];
							ir += dr.offset - dr.roffset;
						}
						var mr = t.subarray(I, I + B);
						if (B <= 0) return 0;
						if (ir == 0) throw new FS.ErrnoError(6);
						for (var _r = Math.min(ir, B), fr = _r, hr = 0, lr = 0; lr < rr.buckets.length; lr++) {
							var Mr = rr.buckets[lr],
								gr = Mr.offset - Mr.roffset;
							if (_r <= gr) {
								var yr = Mr.buffer.subarray(Mr.roffset, Mr.offset);
								_r < gr ? ((yr = yr.subarray(0, _r)), (Mr.roffset += _r)) : hr++, mr.set(yr);
								break;
							} else {
								var yr = Mr.buffer.subarray(Mr.roffset, Mr.offset);
								mr.set(yr), (mr = mr.subarray(yr.byteLength)), (_r -= yr.byteLength), hr++;
							}
						}
						return (
							hr &&
								hr == rr.buckets.length &&
								(hr--, (rr.buckets[hr].offset = 0), (rr.buckets[hr].roffset = 0)),
							rr.buckets.splice(0, hr),
							fr
						);
					},
					write(e, t, I, B, tr) {
						var rr = e.node.pipe,
							ir = t.subarray(I, I + B),
							lr = ir.byteLength;
						if (lr <= 0) return 0;
						var dr = null;
						rr.buckets.length == 0
							? ((dr = {
									buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
									offset: 0,
									roffset: 0
								}),
								rr.buckets.push(dr))
							: (dr = rr.buckets[rr.buckets.length - 1]),
							assert(dr.offset <= PIPEFS.BUCKET_BUFFER_SIZE);
						var mr = PIPEFS.BUCKET_BUFFER_SIZE - dr.offset;
						if (mr >= lr) return dr.buffer.set(ir, dr.offset), (dr.offset += lr), lr;
						mr > 0 &&
							(dr.buffer.set(ir.subarray(0, mr), dr.offset),
							(dr.offset += mr),
							(ir = ir.subarray(mr, ir.byteLength)));
						for (
							var _r = (ir.byteLength / PIPEFS.BUCKET_BUFFER_SIZE) | 0,
								fr = ir.byteLength % PIPEFS.BUCKET_BUFFER_SIZE,
								hr = 0;
							hr < _r;
							hr++
						) {
							var Mr = {
								buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
								offset: PIPEFS.BUCKET_BUFFER_SIZE,
								roffset: 0
							};
							rr.buckets.push(Mr),
								Mr.buffer.set(ir.subarray(0, PIPEFS.BUCKET_BUFFER_SIZE)),
								(ir = ir.subarray(PIPEFS.BUCKET_BUFFER_SIZE, ir.byteLength));
						}
						if (fr > 0) {
							var Mr = {
								buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
								offset: ir.byteLength,
								roffset: 0
							};
							rr.buckets.push(Mr), Mr.buffer.set(ir);
						}
						return lr;
					},
					close(e) {
						var t = e.node.pipe;
						t.refcnt--, t.refcnt === 0 && (t.buckets = null);
					}
				},
				nextname() {
					return (
						PIPEFS.nextname.current || (PIPEFS.nextname.current = 0),
						'pipe[' + PIPEFS.nextname.current++ + ']'
					);
				}
			};
			function ___syscall_pipe(e) {
				try {
					if (e == 0) throw new FS.ErrnoError(21);
					var t = PIPEFS.createPipe();
					return (HEAP32[e >> 2] = t.readable_fd), (HEAP32[(e + 4) >> 2] = t.writable_fd), 0;
				} catch (I) {
					if (typeof FS > 'u' || I.name !== 'ErrnoError') throw I;
					return -I.errno;
				}
			}
			___syscall_pipe.sig = 'ip';
			function ___syscall_poll(e, t, I) {
				try {
					for (var B = 0, tr = 0; tr < t; tr++) {
						var rr = e + 8 * tr,
							ir = HEAP32[rr >> 2],
							lr = HEAP16[(rr + 4) >> 1],
							dr = 32,
							mr = FS.getStream(ir);
						mr &&
							((dr = SYSCALLS.DEFAULT_POLLMASK),
							mr.stream_ops.poll && (dr = mr.stream_ops.poll(mr, -1))),
							(dr &= lr | 8 | 16),
							dr && B++,
							(HEAP16[(rr + 6) >> 1] = dr);
					}
					return B;
				} catch (_r) {
					if (typeof FS > 'u' || _r.name !== 'ErrnoError') throw _r;
					return -_r.errno;
				}
			}
			___syscall_poll.sig = 'ipii';
			function ___syscall_readlinkat(e, t, I, B) {
				try {
					if (((t = SYSCALLS.getStr(t)), (t = SYSCALLS.calculateAt(e, t)), B <= 0)) return -28;
					var tr = FS.readlink(t),
						rr = Math.min(B, lengthBytesUTF8(tr)),
						ir = HEAP8[I + rr];
					return stringToUTF8(tr, I, B + 1), (HEAP8[I + rr] = ir), rr;
				} catch (lr) {
					if (typeof FS > 'u' || lr.name !== 'ErrnoError') throw lr;
					return -lr.errno;
				}
			}
			___syscall_readlinkat.sig = 'iippp';
			function ___syscall_recvfrom(e, t, I, B, tr, rr) {
				try {
					var ir = getSocketFromFD(e),
						lr = ir.sock_ops.recvmsg(ir, I);
					if (!lr) return 0;
					if (tr) var dr = writeSockaddr(tr, ir.family, DNS.lookup_name(lr.addr), lr.port, rr);
					return HEAPU8.set(lr.buffer, t), lr.buffer.byteLength;
				} catch (mr) {
					if (typeof FS > 'u' || mr.name !== 'ErrnoError') throw mr;
					return -mr.errno;
				}
			}
			___syscall_recvfrom.sig = 'iippipp';
			function ___syscall_renameat(e, t, I, B) {
				try {
					return (
						(t = SYSCALLS.getStr(t)),
						(B = SYSCALLS.getStr(B)),
						(t = SYSCALLS.calculateAt(e, t)),
						(B = SYSCALLS.calculateAt(I, B)),
						FS.rename(t, B),
						0
					);
				} catch (tr) {
					if (typeof FS > 'u' || tr.name !== 'ErrnoError') throw tr;
					return -tr.errno;
				}
			}
			___syscall_renameat.sig = 'iipip';
			function ___syscall_rmdir(e) {
				try {
					return (e = SYSCALLS.getStr(e)), FS.rmdir(e), 0;
				} catch (t) {
					if (typeof FS > 'u' || t.name !== 'ErrnoError') throw t;
					return -t.errno;
				}
			}
			___syscall_rmdir.sig = 'ip';
			function ___syscall_sendto(e, t, I, B, tr, rr) {
				try {
					var ir = getSocketFromFD(e);
					if (!tr) return FS.write(ir.stream, HEAP8, t, I);
					var lr = getSocketAddress(tr, rr);
					return ir.sock_ops.sendmsg(ir, HEAP8, t, I, lr.addr, lr.port);
				} catch (dr) {
					if (typeof FS > 'u' || dr.name !== 'ErrnoError') throw dr;
					return -dr.errno;
				}
			}
			___syscall_sendto.sig = 'iippipp';
			function ___syscall_socket(e, t, I) {
				try {
					var B = SOCKFS.createSocket(e, t, I);
					return B.stream.fd;
				} catch (tr) {
					if (typeof FS > 'u' || tr.name !== 'ErrnoError') throw tr;
					return -tr.errno;
				}
			}
			___syscall_socket.sig = 'iiiiiii';
			function ___syscall_stat64(e, t) {
				try {
					return (e = SYSCALLS.getStr(e)), SYSCALLS.doStat(FS.stat, e, t);
				} catch (I) {
					if (typeof FS > 'u' || I.name !== 'ErrnoError') throw I;
					return -I.errno;
				}
			}
			___syscall_stat64.sig = 'ipp';
			function ___syscall_symlinkat(e, t, I) {
				try {
					return (
						(e = SYSCALLS.getStr(e)),
						(I = SYSCALLS.getStr(I)),
						(I = SYSCALLS.calculateAt(t, I)),
						FS.symlink(e, I),
						0
					);
				} catch (B) {
					if (typeof FS > 'u' || B.name !== 'ErrnoError') throw B;
					return -B.errno;
				}
			}
			___syscall_symlinkat.sig = 'ipip';
			function ___syscall_truncate64(e, t) {
				t = bigintToI53Checked(t);
				try {
					return isNaN(t) ? 61 : ((e = SYSCALLS.getStr(e)), FS.truncate(e, t), 0);
				} catch (I) {
					if (typeof FS > 'u' || I.name !== 'ErrnoError') throw I;
					return -I.errno;
				}
			}
			___syscall_truncate64.sig = 'ipj';
			function ___syscall_unlinkat(e, t, I) {
				try {
					return (
						(t = SYSCALLS.getStr(t)),
						(t = SYSCALLS.calculateAt(e, t)),
						I === 0
							? FS.unlink(t)
							: I === 512
								? FS.rmdir(t)
								: abort('Invalid flags passed to unlinkat'),
						0
					);
				} catch (B) {
					if (typeof FS > 'u' || B.name !== 'ErrnoError') throw B;
					return -B.errno;
				}
			}
			___syscall_unlinkat.sig = 'iipi';
			var ___table_base = new WebAssembly.Global({ value: 'i32', mutable: !1 }, 1),
				__abort_js = () => abort('');
			__abort_js.sig = 'v';
			var ENV = {},
				stackAlloc = (e) => __emscripten_stack_alloc(e),
				stringToUTF8OnStack = (e) => {
					var t = lengthBytesUTF8(e) + 1,
						I = stackAlloc(t);
					return stringToUTF8(e, I, t), I;
				},
				dlSetError = (e) => {
					var t = stackSave(),
						I = stringToUTF8OnStack(e);
					___dl_seterr(I, 0), stackRestore(t);
				},
				dlopenInternal = (e, t) => {
					var I = UTF8ToString(e + 36),
						B = HEAP32[(e + 4) >> 2];
					I = PATH.normalize(I);
					var tr = !!(B & 256),
						rr = tr ? null : {},
						ir = { global: tr, nodelete: !!(B & 4096), loadAsync: t.loadAsync };
					try {
						return loadDynamicLibrary(I, ir, rr, e);
					} catch (lr) {
						return (
							dlSetError(`Could not load dynamic lib: ${I}
${lr}`),
							0
						);
					}
				},
				__dlopen_js = (e) => dlopenInternal(e, { loadAsync: !1 });
			__dlopen_js.sig = 'pp';
			var __dlsym_js = (e, t, I) => {
				t = UTF8ToString(t);
				var B,
					tr,
					rr = LDSO.loadedLibsByHandle[e];
				if (!rr.exports.hasOwnProperty(t) || rr.exports[t].stub)
					return dlSetError(`Tried to lookup unknown symbol "${t}" in dynamic lib: ${rr.name}`), 0;
				if (
					((tr = Object.keys(rr.exports).indexOf(t)), (B = rr.exports[t]), typeof B == 'function')
				) {
					var ir = getFunctionAddress(B);
					ir ? (B = ir) : ((B = addFunction(B, B.sig)), (HEAPU32[I >> 2] = tr));
				}
				return B;
			};
			__dlsym_js.sig = 'pppp';
			var __emscripten_memcpy_js = (e, t, I) => HEAPU8.copyWithin(e, t, t + I);
			__emscripten_memcpy_js.sig = 'vppp';
			var runtimeKeepaliveCounter = 0,
				__emscripten_runtime_keepalive_clear = () => {
					(noExitRuntime = !1), (runtimeKeepaliveCounter = 0);
				};
			__emscripten_runtime_keepalive_clear.sig = 'v';
			var __emscripten_system = (e) => {
				if (ENVIRONMENT_IS_NODE) {
					if (!e) return 1;
					var t = UTF8ToString(e);
					if (!t.length) return 0;
					var I = require('child_process'),
						B = I.spawnSync(t, [], { shell: !0, stdio: 'inherit' }),
						tr = (ir, lr) => (ir << 8) | lr;
					if (B.status === null) {
						var rr = (ir) => {
							switch (ir) {
								case 'SIGHUP':
									return 1;
								case 'SIGQUIT':
									return 3;
								case 'SIGFPE':
									return 8;
								case 'SIGKILL':
									return 9;
								case 'SIGALRM':
									return 14;
								case 'SIGTERM':
									return 15;
								default:
									return 2;
							}
						};
						return tr(0, rr(B.signal));
					}
					return tr(B.status, 0);
				}
				return e ? -52 : 0;
			};
			__emscripten_system.sig = 'ip';
			var __emscripten_throw_longjmp = () => {
				throw 1 / 0;
			};
			__emscripten_throw_longjmp.sig = 'v';
			function __gmtime_js(e, t) {
				e = bigintToI53Checked(e);
				var I = new Date(e * 1e3);
				(HEAP32[t >> 2] = I.getUTCSeconds()),
					(HEAP32[(t + 4) >> 2] = I.getUTCMinutes()),
					(HEAP32[(t + 8) >> 2] = I.getUTCHours()),
					(HEAP32[(t + 12) >> 2] = I.getUTCDate()),
					(HEAP32[(t + 16) >> 2] = I.getUTCMonth()),
					(HEAP32[(t + 20) >> 2] = I.getUTCFullYear() - 1900),
					(HEAP32[(t + 24) >> 2] = I.getUTCDay());
				var B = Date.UTC(I.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
					tr = ((I.getTime() - B) / (1e3 * 60 * 60 * 24)) | 0;
				HEAP32[(t + 28) >> 2] = tr;
			}
			__gmtime_js.sig = 'vjp';
			var isLeapYear = (e) => e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0),
				MONTH_DAYS_LEAP_CUMULATIVE = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
				MONTH_DAYS_REGULAR_CUMULATIVE = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
				ydayFromDate = (e) => {
					var t = isLeapYear(e.getFullYear()),
						I = t ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE,
						B = I[e.getMonth()] + e.getDate() - 1;
					return B;
				};
			function __localtime_js(e, t) {
				e = bigintToI53Checked(e);
				var I = new Date(e * 1e3);
				(HEAP32[t >> 2] = I.getSeconds()),
					(HEAP32[(t + 4) >> 2] = I.getMinutes()),
					(HEAP32[(t + 8) >> 2] = I.getHours()),
					(HEAP32[(t + 12) >> 2] = I.getDate()),
					(HEAP32[(t + 16) >> 2] = I.getMonth()),
					(HEAP32[(t + 20) >> 2] = I.getFullYear() - 1900),
					(HEAP32[(t + 24) >> 2] = I.getDay());
				var B = ydayFromDate(I) | 0;
				(HEAP32[(t + 28) >> 2] = B), (HEAP32[(t + 36) >> 2] = -(I.getTimezoneOffset() * 60));
				var tr = new Date(I.getFullYear(), 0, 1),
					rr = new Date(I.getFullYear(), 6, 1).getTimezoneOffset(),
					ir = tr.getTimezoneOffset(),
					lr = (rr != ir && I.getTimezoneOffset() == Math.min(ir, rr)) | 0;
				HEAP32[(t + 32) >> 2] = lr;
			}
			__localtime_js.sig = 'vjp';
			function __mmap_js(e, t, I, B, tr, rr, ir) {
				tr = bigintToI53Checked(tr);
				try {
					if (isNaN(tr)) return 61;
					var lr = SYSCALLS.getStreamFromFD(B),
						dr = FS.mmap(lr, e, tr, t, I),
						mr = dr.ptr;
					return (HEAP32[rr >> 2] = dr.allocated), (HEAPU32[ir >> 2] = mr), 0;
				} catch (_r) {
					if (typeof FS > 'u' || _r.name !== 'ErrnoError') throw _r;
					return -_r.errno;
				}
			}
			__mmap_js.sig = 'ipiiijpp';
			function __munmap_js(e, t, I, B, tr, rr) {
				rr = bigintToI53Checked(rr);
				try {
					var ir = SYSCALLS.getStreamFromFD(tr);
					I & 2 && SYSCALLS.doMsync(e, ir, t, B, rr);
				} catch (lr) {
					if (typeof FS > 'u' || lr.name !== 'ErrnoError') throw lr;
					return -lr.errno;
				}
			}
			__munmap_js.sig = 'ippiiij';
			var timers = {},
				handleException = (e) => {
					if (e instanceof ExitStatus || e == 'unwind') return EXITSTATUS;
					quit_(1, e);
				},
				keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0,
				_proc_exit = (e) => {
					var t;
					(EXITSTATUS = e),
						keepRuntimeAlive() || ((t = Module.onExit) == null || t.call(Module, e), (ABORT = !0)),
						quit_(e, new ExitStatus(e));
				};
			_proc_exit.sig = 'vi';
			var exitJS = (e, t) => {
					(EXITSTATUS = e), _proc_exit(e);
				},
				_exit = exitJS;
			_exit.sig = 'vi';
			var maybeExit = () => {
					if (!keepRuntimeAlive())
						try {
							_exit(EXITSTATUS);
						} catch (e) {
							handleException(e);
						}
				},
				callUserCallback = (e) => {
					if (!ABORT)
						try {
							e(), maybeExit();
						} catch (t) {
							handleException(t);
						}
				},
				_emscripten_get_now = () => performance.now();
			_emscripten_get_now.sig = 'd';
			var __setitimer_js = (e, t) => {
				if ((timers[e] && (clearTimeout(timers[e].id), delete timers[e]), !t)) return 0;
				var I = setTimeout(() => {
					delete timers[e], callUserCallback(() => __emscripten_timeout(e, _emscripten_get_now()));
				}, t);
				return (timers[e] = { id: I, timeout_ms: t }), 0;
			};
			__setitimer_js.sig = 'iid';
			var __tzset_js = (e, t, I, B) => {
				var tr = new Date().getFullYear(),
					rr = new Date(tr, 0, 1),
					ir = new Date(tr, 6, 1),
					lr = rr.getTimezoneOffset(),
					dr = ir.getTimezoneOffset(),
					mr = Math.max(lr, dr);
				(HEAPU32[e >> 2] = mr * 60), (HEAP32[t >> 2] = +(lr != dr));
				var _r = (Mr) => {
						var gr = Mr >= 0 ? '-' : '+',
							yr = Math.abs(Mr),
							xr = String(Math.floor(yr / 60)).padStart(2, '0'),
							vr = String(yr % 60).padStart(2, '0');
						return `UTC${gr}${xr}${vr}`;
					},
					fr = _r(lr),
					hr = _r(dr);
				dr < lr
					? (stringToUTF8(fr, I, 17), stringToUTF8(hr, B, 17))
					: (stringToUTF8(fr, B, 17), stringToUTF8(hr, I, 17));
			};
			__tzset_js.sig = 'vpppp';
			var _emscripten_date_now = () => Date.now();
			_emscripten_date_now.sig = 'd';
			var checkWasiClock = (e) => e >= 0 && e <= 3;
			function _clock_time_get(e, t, I) {
				if (!checkWasiClock(e)) return 28;
				var B;
				e === 0 ? (B = _emscripten_date_now()) : (B = _emscripten_get_now());
				var tr = Math.round(B * 1e3 * 1e3);
				return (HEAP64[I >> 3] = BigInt(tr)), 0;
			}
			_clock_time_get.sig = 'iijp';
			var readEmAsmArgsArray = [],
				readEmAsmArgs = (e, t) => {
					readEmAsmArgsArray.length = 0;
					for (var I; (I = HEAPU8[e++]); ) {
						var B = I != 105;
						(B &= I != 112),
							(t += B && t % 8 ? 4 : 0),
							readEmAsmArgsArray.push(
								I == 112
									? HEAPU32[t >> 2]
									: I == 106
										? HEAP64[t >> 3]
										: I == 105
											? HEAP32[t >> 2]
											: HEAPF64[t >> 3]
							),
							(t += B ? 8 : 4);
					}
					return readEmAsmArgsArray;
				},
				runEmAsmFunction = (e, t, I) => {
					var B = readEmAsmArgs(t, I);
					return ASM_CONSTS[e](...B);
				},
				_emscripten_asm_const_int = (e, t, I) => runEmAsmFunction(e, t, I);
			_emscripten_asm_const_int.sig = 'ippp';
			var _emscripten_force_exit = (e) => {
				__emscripten_runtime_keepalive_clear(), _exit(e);
			};
			_emscripten_force_exit.sig = 'vi';
			var getHeapMax = () => 2147483648,
				growMemory = (e) => {
					var t = wasmMemory.buffer,
						I = ((e - t.byteLength + 65535) / 65536) | 0;
					try {
						return wasmMemory.grow(I), updateMemoryViews(), 1;
					} catch {}
				},
				_emscripten_resize_heap = (e) => {
					var t = HEAPU8.length;
					e >>>= 0;
					var I = getHeapMax();
					if (e > I) return !1;
					for (var B = 1; B <= 4; B *= 2) {
						var tr = t * (1 + 0.2 / B);
						tr = Math.min(tr, e + 100663296);
						var rr = Math.min(I, alignMemory(Math.max(e, tr), 65536)),
							ir = growMemory(rr);
						if (ir) return !0;
					}
					return !1;
				};
			_emscripten_resize_heap.sig = 'ip';
			var _emscripten_set_main_loop_timing = (e, t) => {
				if (((MainLoop.timingMode = e), (MainLoop.timingValue = t), !MainLoop.func)) return 1;
				if ((MainLoop.running || (MainLoop.running = !0), e == 0))
					(MainLoop.scheduler = function () {
						var rr = Math.max(0, MainLoop.tickStartTime + t - _emscripten_get_now()) | 0;
						setTimeout(MainLoop.runner, rr);
					}),
						(MainLoop.method = 'timeout');
				else if (e == 1)
					(MainLoop.scheduler = function () {
						MainLoop.requestAnimationFrame(MainLoop.runner);
					}),
						(MainLoop.method = 'rAF');
				else if (e == 2) {
					if (typeof MainLoop.setImmediate > 'u')
						if (typeof setImmediate > 'u') {
							var I = [],
								B = 'setimmediate',
								tr = (rr) => {
									(rr.data === B || rr.data.target === B) && (rr.stopPropagation(), I.shift()());
								};
							addEventListener('message', tr, !0),
								(MainLoop.setImmediate = (rr) => {
									I.push(rr),
										ENVIRONMENT_IS_WORKER
											? (Module.setImmediates ?? (Module.setImmediates = []),
												Module.setImmediates.push(rr),
												postMessage({ target: B }))
											: postMessage(B, '*');
								});
						} else MainLoop.setImmediate = setImmediate;
					(MainLoop.scheduler = function () {
						MainLoop.setImmediate(MainLoop.runner);
					}),
						(MainLoop.method = 'immediate');
				}
				return 0;
			};
			_emscripten_set_main_loop_timing.sig = 'iii';
			var MainLoop = {
					running: !1,
					scheduler: null,
					method: '',
					currentlyRunningMainloop: 0,
					func: null,
					arg: 0,
					timingMode: 0,
					timingValue: 0,
					currentFrameNumber: 0,
					queue: [],
					preMainLoop: [],
					postMainLoop: [],
					pause() {
						(MainLoop.scheduler = null), MainLoop.currentlyRunningMainloop++;
					},
					resume() {
						MainLoop.currentlyRunningMainloop++;
						var e = MainLoop.timingMode,
							t = MainLoop.timingValue,
							I = MainLoop.func;
						(MainLoop.func = null),
							setMainLoop(I, 0, !1, MainLoop.arg, !0),
							_emscripten_set_main_loop_timing(e, t),
							MainLoop.scheduler();
					},
					updateStatus() {
						if (Module.setStatus) {
							var e = Module.statusMessage || 'Please wait...',
								t = MainLoop.remainingBlockers ?? 0,
								I = MainLoop.expectedBlockers ?? 0;
							t
								? t < I
									? Module.setStatus('{message} ({expected - remaining}/{expected})')
									: Module.setStatus(e)
								: Module.setStatus('');
						}
					},
					init() {
						Module.preMainLoop && MainLoop.preMainLoop.push(Module.preMainLoop),
							Module.postMainLoop && MainLoop.postMainLoop.push(Module.postMainLoop);
					},
					runIter(e) {
						if (!ABORT) {
							for (var t of MainLoop.preMainLoop) if (t() === !1) return;
							callUserCallback(e);
							for (var I of MainLoop.postMainLoop) I();
						}
					},
					nextRAF: 0,
					fakeRequestAnimationFrame(e) {
						var t = Date.now();
						if (MainLoop.nextRAF === 0) MainLoop.nextRAF = t + 1e3 / 60;
						else for (; t + 2 >= MainLoop.nextRAF; ) MainLoop.nextRAF += 1e3 / 60;
						var I = Math.max(MainLoop.nextRAF - t, 0);
						setTimeout(e, I);
					},
					requestAnimationFrame(e) {
						if (typeof requestAnimationFrame == 'function') {
							requestAnimationFrame(e);
							return;
						}
						var t = MainLoop.fakeRequestAnimationFrame;
						t(e);
					}
				},
				setMainLoop = (e, t, I, B, tr) => {
					(MainLoop.func = e), (MainLoop.arg = B);
					var rr = MainLoop.currentlyRunningMainloop;
					function ir() {
						return rr < MainLoop.currentlyRunningMainloop ? (maybeExit(), !1) : !0;
					}
					if (
						((MainLoop.running = !1),
						(MainLoop.runner = function () {
							if (!ABORT) {
								if (MainLoop.queue.length > 0) {
									var lr = MainLoop.queue.shift();
									if ((lr.func(lr.arg), MainLoop.remainingBlockers)) {
										var dr = MainLoop.remainingBlockers,
											mr = dr % 1 == 0 ? dr - 1 : Math.floor(dr);
										lr.counted
											? (MainLoop.remainingBlockers = mr)
											: ((mr = mr + 0.5), (MainLoop.remainingBlockers = (8 * dr + mr) / 9));
									}
									if ((MainLoop.updateStatus(), !ir())) return;
									setTimeout(MainLoop.runner, 0);
									return;
								}
								if (ir()) {
									if (
										((MainLoop.currentFrameNumber = (MainLoop.currentFrameNumber + 1) | 0),
										MainLoop.timingMode == 1 &&
											MainLoop.timingValue > 1 &&
											MainLoop.currentFrameNumber % MainLoop.timingValue != 0)
									) {
										MainLoop.scheduler();
										return;
									} else
										MainLoop.timingMode == 0 && (MainLoop.tickStartTime = _emscripten_get_now());
									MainLoop.runIter(e), ir() && MainLoop.scheduler();
								}
							}
						}),
						tr ||
							(t && t > 0
								? _emscripten_set_main_loop_timing(0, 1e3 / t)
								: _emscripten_set_main_loop_timing(1, 1),
							MainLoop.scheduler()),
						I)
					)
						throw 'unwind';
				},
				_emscripten_set_main_loop = (e, t, I) => {
					var B = getWasmTableEntry(e);
					setMainLoop(B, t, I);
				};
			_emscripten_set_main_loop.sig = 'vpii';
			var getExecutableName = () => thisProgram || './this.program',
				getEnvStrings = () => {
					if (!getEnvStrings.strings) {
						var e =
								(
									(typeof navigator == 'object' && navigator.languages && navigator.languages[0]) ||
									'C'
								).replace('-', '_') + '.UTF-8',
							t = {
								USER: 'web_user',
								LOGNAME: 'web_user',
								PATH: '/',
								PWD: '/',
								HOME: '/home/web_user',
								LANG: e,
								_: getExecutableName()
							};
						for (var I in ENV) ENV[I] === void 0 ? delete t[I] : (t[I] = ENV[I]);
						var B = [];
						for (var I in t) B.push(`${I}=${t[I]}`);
						getEnvStrings.strings = B;
					}
					return getEnvStrings.strings;
				},
				stringToAscii = (e, t) => {
					for (var I = 0; I < e.length; ++I) HEAP8[t++] = e.charCodeAt(I);
					HEAP8[t] = 0;
				},
				_environ_get = (e, t) => {
					var I = 0;
					return (
						getEnvStrings().forEach((B, tr) => {
							var rr = t + I;
							(HEAPU32[(e + tr * 4) >> 2] = rr), stringToAscii(B, rr), (I += B.length + 1);
						}),
						0
					);
				};
			_environ_get.sig = 'ipp';
			var _environ_sizes_get = (e, t) => {
				var I = getEnvStrings();
				HEAPU32[e >> 2] = I.length;
				var B = 0;
				return I.forEach((tr) => (B += tr.length + 1)), (HEAPU32[t >> 2] = B), 0;
			};
			_environ_sizes_get.sig = 'ipp';
			function _fd_close(e) {
				try {
					var t = SYSCALLS.getStreamFromFD(e);
					return FS.close(t), 0;
				} catch (I) {
					if (typeof FS > 'u' || I.name !== 'ErrnoError') throw I;
					return I.errno;
				}
			}
			_fd_close.sig = 'ii';
			function _fd_fdstat_get(e, t) {
				try {
					var I = 0,
						B = 0,
						tr = 0,
						rr = SYSCALLS.getStreamFromFD(e),
						ir = rr.tty ? 2 : FS.isDir(rr.mode) ? 3 : FS.isLink(rr.mode) ? 7 : 4;
					return (
						(HEAP8[t] = ir),
						(HEAP16[(t + 2) >> 1] = tr),
						(HEAP64[(t + 8) >> 3] = BigInt(I)),
						(HEAP64[(t + 16) >> 3] = BigInt(B)),
						0
					);
				} catch (lr) {
					if (typeof FS > 'u' || lr.name !== 'ErrnoError') throw lr;
					return lr.errno;
				}
			}
			_fd_fdstat_get.sig = 'iip';
			var doReadv = (e, t, I, B) => {
				for (var tr = 0, rr = 0; rr < I; rr++) {
					var ir = HEAPU32[t >> 2],
						lr = HEAPU32[(t + 4) >> 2];
					t += 8;
					var dr = FS.read(e, HEAP8, ir, lr, B);
					if (dr < 0) return -1;
					if (((tr += dr), dr < lr)) break;
					typeof B < 'u' && (B += dr);
				}
				return tr;
			};
			function _fd_pread(e, t, I, B, tr) {
				B = bigintToI53Checked(B);
				try {
					if (isNaN(B)) return 61;
					var rr = SYSCALLS.getStreamFromFD(e),
						ir = doReadv(rr, t, I, B);
					return (HEAPU32[tr >> 2] = ir), 0;
				} catch (lr) {
					if (typeof FS > 'u' || lr.name !== 'ErrnoError') throw lr;
					return lr.errno;
				}
			}
			_fd_pread.sig = 'iippjp';
			var doWritev = (e, t, I, B) => {
				for (var tr = 0, rr = 0; rr < I; rr++) {
					var ir = HEAPU32[t >> 2],
						lr = HEAPU32[(t + 4) >> 2];
					t += 8;
					var dr = FS.write(e, HEAP8, ir, lr, B);
					if (dr < 0) return -1;
					if (((tr += dr), dr < lr)) break;
					typeof B < 'u' && (B += dr);
				}
				return tr;
			};
			function _fd_pwrite(e, t, I, B, tr) {
				B = bigintToI53Checked(B);
				try {
					if (isNaN(B)) return 61;
					var rr = SYSCALLS.getStreamFromFD(e),
						ir = doWritev(rr, t, I, B);
					return (HEAPU32[tr >> 2] = ir), 0;
				} catch (lr) {
					if (typeof FS > 'u' || lr.name !== 'ErrnoError') throw lr;
					return lr.errno;
				}
			}
			_fd_pwrite.sig = 'iippjp';
			function _fd_read(e, t, I, B) {
				try {
					var tr = SYSCALLS.getStreamFromFD(e),
						rr = doReadv(tr, t, I);
					return (HEAPU32[B >> 2] = rr), 0;
				} catch (ir) {
					if (typeof FS > 'u' || ir.name !== 'ErrnoError') throw ir;
					return ir.errno;
				}
			}
			_fd_read.sig = 'iippp';
			function _fd_seek(e, t, I, B) {
				t = bigintToI53Checked(t);
				try {
					if (isNaN(t)) return 61;
					var tr = SYSCALLS.getStreamFromFD(e);
					return (
						FS.llseek(tr, t, I),
						(HEAP64[B >> 3] = BigInt(tr.position)),
						tr.getdents && t === 0 && I === 0 && (tr.getdents = null),
						0
					);
				} catch (rr) {
					if (typeof FS > 'u' || rr.name !== 'ErrnoError') throw rr;
					return rr.errno;
				}
			}
			_fd_seek.sig = 'iijip';
			function _fd_sync(e) {
				var I;
				try {
					var t = SYSCALLS.getStreamFromFD(e);
					return (I = t.stream_ops) != null && I.fsync ? t.stream_ops.fsync(t) : 0;
				} catch (B) {
					if (typeof FS > 'u' || B.name !== 'ErrnoError') throw B;
					return B.errno;
				}
			}
			_fd_sync.sig = 'ii';
			function _fd_write(e, t, I, B) {
				try {
					var tr = SYSCALLS.getStreamFromFD(e),
						rr = doWritev(tr, t, I);
					return (HEAPU32[B >> 2] = rr), 0;
				} catch (ir) {
					if (typeof FS > 'u' || ir.name !== 'ErrnoError') throw ir;
					return ir.errno;
				}
			}
			_fd_write.sig = 'iippp';
			var _getaddrinfo = (e, t, I, B) => {
				var tr = 0,
					rr = 0,
					ir = 0,
					lr = 0,
					dr = 0,
					mr = 0,
					_r;
				function fr(hr, Mr, gr, yr, xr, vr) {
					var Sr, wr, br, Fr;
					return (
						(wr = hr === 10 ? 28 : 16),
						(xr = hr === 10 ? inetNtop6(xr) : inetNtop4(xr)),
						(Sr = _malloc(wr)),
						(Fr = writeSockaddr(Sr, hr, xr, vr)),
						assert(!Fr),
						(br = _malloc(32)),
						(HEAP32[(br + 4) >> 2] = hr),
						(HEAP32[(br + 8) >> 2] = Mr),
						(HEAP32[(br + 12) >> 2] = gr),
						(HEAPU32[(br + 24) >> 2] = yr),
						(HEAPU32[(br + 20) >> 2] = Sr),
						hr === 10 ? (HEAP32[(br + 16) >> 2] = 28) : (HEAP32[(br + 16) >> 2] = 16),
						(HEAP32[(br + 28) >> 2] = 0),
						br
					);
				}
				if (
					(I &&
						((ir = HEAP32[I >> 2]),
						(lr = HEAP32[(I + 4) >> 2]),
						(dr = HEAP32[(I + 8) >> 2]),
						(mr = HEAP32[(I + 12) >> 2])),
					dr && !mr && (mr = dr === 2 ? 17 : 6),
					!dr && mr && (dr = mr === 17 ? 2 : 1),
					mr === 0 && (mr = 6),
					dr === 0 && (dr = 1),
					!e && !t)
				)
					return -2;
				if (ir & -1088 || (I !== 0 && HEAP32[I >> 2] & 2 && !e)) return -1;
				if (ir & 32) return -2;
				if (dr !== 0 && dr !== 1 && dr !== 2) return -7;
				if (lr !== 0 && lr !== 2 && lr !== 10) return -6;
				if (t && ((t = UTF8ToString(t)), (rr = parseInt(t, 10)), isNaN(rr)))
					return ir & 1024 ? -2 : -8;
				if (!e)
					return (
						lr === 0 && (lr = 2),
						ir & 1 || (lr === 2 ? (tr = _htonl(2130706433)) : (tr = [0, 0, 0, _htonl(1)])),
						(_r = fr(lr, dr, mr, null, tr, rr)),
						(HEAPU32[B >> 2] = _r),
						0
					);
				if (((e = UTF8ToString(e)), (tr = inetPton4(e)), tr !== null))
					if (lr === 0 || lr === 2) lr = 2;
					else if (lr === 10 && ir & 8) (tr = [0, 0, _htonl(65535), tr]), (lr = 10);
					else return -2;
				else if (((tr = inetPton6(e)), tr !== null))
					if (lr === 0 || lr === 10) lr = 10;
					else return -2;
				return tr != null
					? ((_r = fr(lr, dr, mr, e, tr, rr)), (HEAPU32[B >> 2] = _r), 0)
					: ir & 4
						? -2
						: ((e = DNS.lookup_name(e)),
							(tr = inetPton4(e)),
							lr === 0 ? (lr = 2) : lr === 10 && (tr = [0, 0, _htonl(65535), tr]),
							(_r = fr(lr, dr, mr, null, tr, rr)),
							(HEAPU32[B >> 2] = _r),
							0);
			};
			_getaddrinfo.sig = 'ipppp';
			var _getnameinfo = (e, t, I, B, tr, rr, ir) => {
				var lr = readSockaddr(e, t);
				if (lr.errno) return -6;
				var dr = lr.port,
					mr = lr.addr,
					_r = !1;
				if (I && B) {
					var fr;
					if (ir & 1 || !(fr = DNS.lookup_addr(mr))) {
						if (ir & 8) return -2;
					} else mr = fr;
					var hr = stringToUTF8(mr, I, B);
					hr + 1 >= B && (_r = !0);
				}
				if (tr && rr) {
					dr = '' + dr;
					var hr = stringToUTF8(dr, tr, rr);
					hr + 1 >= rr && (_r = !0);
				}
				return _r ? -12 : 0;
			};
			_getnameinfo.sig = 'ipipipii';
			var stringToNewUTF8 = (e) => {
					var t = lengthBytesUTF8(e) + 1,
						I = _malloc(t);
					return I && stringToUTF8(e, I, t), I;
				},
				getCFunc = (e) => {
					var t = Module['_' + e];
					return t;
				},
				writeArrayToMemory = (e, t) => {
					HEAP8.set(e, t);
				},
				ccall = (e, t, I, B, tr) => {
					var rr = {
						string: (gr) => {
							var yr = 0;
							return gr != null && gr !== 0 && (yr = stringToUTF8OnStack(gr)), yr;
						},
						array: (gr) => {
							var yr = stackAlloc(gr.length);
							return writeArrayToMemory(gr, yr), yr;
						}
					};
					function ir(gr) {
						return t === 'string' ? UTF8ToString(gr) : t === 'boolean' ? !!gr : gr;
					}
					var lr = getCFunc(e),
						dr = [],
						mr = 0;
					if (B)
						for (var _r = 0; _r < B.length; _r++) {
							var fr = rr[I[_r]];
							fr ? (mr === 0 && (mr = stackSave()), (dr[_r] = fr(B[_r]))) : (dr[_r] = B[_r]);
						}
					var hr = lr(...dr);
					function Mr(gr) {
						return mr !== 0 && stackRestore(mr), ir(gr);
					}
					return (hr = Mr(hr)), hr;
				},
				cwrap = (e, t, I, B) => {
					var tr = !I || I.every((ir) => ir === 'number' || ir === 'boolean'),
						rr = t !== 'string';
					return rr && tr && !B ? getCFunc(e) : (...ir) => ccall(e, t, I, ir);
				},
				FS_createPath = FS.createPath,
				FS_unlink = (e) => FS.unlink(e),
				FS_createLazyFile = FS.createLazyFile,
				FS_createDevice = FS.createDevice,
				setTempRet0 = (e) => __emscripten_tempret_set(e),
				_setTempRet0 = setTempRet0;
			Module._setTempRet0 = _setTempRet0;
			var getTempRet0 = (e) => __emscripten_tempret_get(),
				_getTempRet0 = getTempRet0;
			(Module._getTempRet0 = _getTempRet0),
				registerWasmPlugin(),
				(FS.createPreloadedFile = FS_createPreloadedFile),
				FS.staticInit(),
				(Module.FS_createPath = FS.createPath),
				(Module.FS_createDataFile = FS.createDataFile),
				(Module.FS_createPreloadedFile = FS.createPreloadedFile),
				(Module.FS_unlink = FS.unlink),
				(Module.FS_createLazyFile = FS.createLazyFile),
				(Module.FS_createDevice = FS.createDevice),
				(MEMFS.doesNotExistError = new FS.ErrnoError(44)),
				(MEMFS.doesNotExistError.stack = '<generic error, no stack>'),
				ENVIRONMENT_IS_NODE && NODEFS.staticInit(),
				(Module.requestAnimationFrame = MainLoop.requestAnimationFrame),
				(Module.pauseMainLoop = MainLoop.pause),
				(Module.resumeMainLoop = MainLoop.resume),
				MainLoop.init();
			var wasmImports = {
					__assert_fail: ___assert_fail,
					__call_sighandler: ___call_sighandler,
					__heap_base: ___heap_base,
					__indirect_function_table: wasmTable,
					__memory_base: ___memory_base,
					__stack_pointer: ___stack_pointer,
					__syscall__newselect: ___syscall__newselect,
					__syscall_bind: ___syscall_bind,
					__syscall_chdir: ___syscall_chdir,
					__syscall_chmod: ___syscall_chmod,
					__syscall_connect: ___syscall_connect,
					__syscall_dup: ___syscall_dup,
					__syscall_dup3: ___syscall_dup3,
					__syscall_faccessat: ___syscall_faccessat,
					__syscall_fadvise64: ___syscall_fadvise64,
					__syscall_fallocate: ___syscall_fallocate,
					__syscall_fcntl64: ___syscall_fcntl64,
					__syscall_fdatasync: ___syscall_fdatasync,
					__syscall_fstat64: ___syscall_fstat64,
					__syscall_ftruncate64: ___syscall_ftruncate64,
					__syscall_getcwd: ___syscall_getcwd,
					__syscall_getdents64: ___syscall_getdents64,
					__syscall_getsockname: ___syscall_getsockname,
					__syscall_getsockopt: ___syscall_getsockopt,
					__syscall_ioctl: ___syscall_ioctl,
					__syscall_lstat64: ___syscall_lstat64,
					__syscall_mkdirat: ___syscall_mkdirat,
					__syscall_newfstatat: ___syscall_newfstatat,
					__syscall_openat: ___syscall_openat,
					__syscall_pipe: ___syscall_pipe,
					__syscall_poll: ___syscall_poll,
					__syscall_readlinkat: ___syscall_readlinkat,
					__syscall_recvfrom: ___syscall_recvfrom,
					__syscall_renameat: ___syscall_renameat,
					__syscall_rmdir: ___syscall_rmdir,
					__syscall_sendto: ___syscall_sendto,
					__syscall_socket: ___syscall_socket,
					__syscall_stat64: ___syscall_stat64,
					__syscall_symlinkat: ___syscall_symlinkat,
					__syscall_truncate64: ___syscall_truncate64,
					__syscall_unlinkat: ___syscall_unlinkat,
					__table_base: ___table_base,
					_abort_js: __abort_js,
					_dlopen_js: __dlopen_js,
					_dlsym_js: __dlsym_js,
					_emscripten_memcpy_js: __emscripten_memcpy_js,
					_emscripten_runtime_keepalive_clear: __emscripten_runtime_keepalive_clear,
					_emscripten_system: __emscripten_system,
					_emscripten_throw_longjmp: __emscripten_throw_longjmp,
					_gmtime_js: __gmtime_js,
					_localtime_js: __localtime_js,
					_mmap_js: __mmap_js,
					_munmap_js: __munmap_js,
					_setitimer_js: __setitimer_js,
					_tzset_js: __tzset_js,
					clock_time_get: _clock_time_get,
					emscripten_asm_const_int: _emscripten_asm_const_int,
					emscripten_date_now: _emscripten_date_now,
					emscripten_force_exit: _emscripten_force_exit,
					emscripten_get_now: _emscripten_get_now,
					emscripten_resize_heap: _emscripten_resize_heap,
					emscripten_set_main_loop: _emscripten_set_main_loop,
					environ_get: _environ_get,
					environ_sizes_get: _environ_sizes_get,
					exit: _exit,
					fd_close: _fd_close,
					fd_fdstat_get: _fd_fdstat_get,
					fd_pread: _fd_pread,
					fd_pwrite: _fd_pwrite,
					fd_read: _fd_read,
					fd_seek: _fd_seek,
					fd_sync: _fd_sync,
					fd_write: _fd_write,
					getTempRet0: _getTempRet0,
					getaddrinfo: _getaddrinfo,
					getnameinfo: _getnameinfo,
					invoke_di,
					invoke_i,
					invoke_id,
					invoke_ii,
					invoke_iii,
					invoke_iiii,
					invoke_iiiii,
					invoke_iiiiii,
					invoke_iiiiiii,
					invoke_iiiiiiii,
					invoke_iiiiiiiii,
					invoke_iiiiiiiiii,
					invoke_iiiiiiiiiiiiiiiii,
					invoke_iiiiiji,
					invoke_iiiij,
					invoke_iiiijii,
					invoke_iiij,
					invoke_iiji,
					invoke_ij,
					invoke_ijiiiii,
					invoke_ijiiiiii,
					invoke_ji,
					invoke_jii,
					invoke_jiiii,
					invoke_jiiiii,
					invoke_jiiiiiiii,
					invoke_v,
					invoke_vi,
					invoke_vid,
					invoke_vii,
					invoke_viii,
					invoke_viiii,
					invoke_viiiii,
					invoke_viiiiii,
					invoke_viiiiiii,
					invoke_viiiiiiii,
					invoke_viiiiiiiii,
					invoke_viiiiiiiiiiii,
					invoke_viiij,
					invoke_viij,
					invoke_viiji,
					invoke_viijii,
					invoke_viijiiii,
					invoke_vij,
					invoke_viji,
					invoke_vijiji,
					invoke_vj,
					invoke_vji,
					is_web_env,
					memory: wasmMemory,
					proc_exit: _proc_exit,
					setTempRet0: _setTempRet0
				},
				wasmExports;
			createWasm(),
				(Module._ScanKeywordLookup = (e, t) =>
					(Module._ScanKeywordLookup = wasmExports.ScanKeywordLookup)(e, t)),
				(Module._pg_snprintf = (e, t, I, B) =>
					(Module._pg_snprintf = wasmExports.pg_snprintf)(e, t, I, B)),
				(Module._strlen = (e) => (Module._strlen = wasmExports.strlen)(e)),
				(Module._memset = (e, t, I) => (Module._memset = wasmExports.memset)(e, t, I)),
				(Module._strchr = (e, t) => (Module._strchr = wasmExports.strchr)(e, t)),
				(Module._PQserverVersion = (e) =>
					(Module._PQserverVersion = wasmExports.PQserverVersion)(e)),
				(Module._strstr = (e, t) => (Module._strstr = wasmExports.strstr)(e, t)),
				(Module._pg_fprintf = (e, t, I) => (Module._pg_fprintf = wasmExports.pg_fprintf)(e, t, I)),
				(Module._strspn = (e, t) => (Module._strspn = wasmExports.strspn)(e, t));
			var _malloc = (Module._malloc = (e) => (_malloc = Module._malloc = wasmExports.malloc)(e));
			(Module._pg_strcasecmp = (e, t) => (Module._pg_strcasecmp = wasmExports.pg_strcasecmp)(e, t)),
				(Module._strcmp = (e, t) => (Module._strcmp = wasmExports.strcmp)(e, t)),
				(Module._free = (e) => (Module._free = wasmExports.free)(e)),
				(Module._pg_tolower = (e) => (Module._pg_tolower = wasmExports.pg_tolower)(e)),
				(Module._memchr = (e, t, I) => (Module._memchr = wasmExports.memchr)(e, t, I)),
				(Module._getenv = (e) => (Module._getenv = wasmExports.getenv)(e)),
				(Module._fileno = (e) => (Module._fileno = wasmExports.fileno)(e)),
				(Module._isatty = (e) => (Module._isatty = wasmExports.isatty)(e)),
				(Module._strdup = (e) => (Module._strdup = wasmExports.strdup)(e)),
				(Module.___errno_location = () =>
					(Module.___errno_location = wasmExports.__errno_location)());
			var _fflush = (Module._fflush = (e) => (_fflush = Module._fflush = wasmExports.fflush)(e));
			(Module._pg_vsnprintf = (e, t, I, B) =>
				(Module._pg_vsnprintf = wasmExports.pg_vsnprintf)(e, t, I, B)),
				(Module._pg_malloc_extended = (e, t) =>
					(Module._pg_malloc_extended = wasmExports.pg_malloc_extended)(e, t)),
				(Module._PageInit = (e, t, I) => (Module._PageInit = wasmExports.PageInit)(e, t, I)),
				(Module._pg_checksum_page = (e, t) =>
					(Module._pg_checksum_page = wasmExports.pg_checksum_page)(e, t)),
				(Module._errstart = (e, t) => (Module._errstart = wasmExports.errstart)(e, t)),
				(Module._errcode = (e) => (Module._errcode = wasmExports.errcode)(e)),
				(Module._errmsg = (e, t) => (Module._errmsg = wasmExports.errmsg)(e, t)),
				(Module._errfinish = (e, t, I) => (Module._errfinish = wasmExports.errfinish)(e, t, I)),
				(Module._PageAddItemExtended = (e, t, I, B, tr) =>
					(Module._PageAddItemExtended = wasmExports.PageAddItemExtended)(e, t, I, B, tr)),
				(Module._errstart_cold = (e, t) =>
					(Module._errstart_cold = wasmExports.errstart_cold)(e, t)),
				(Module._puts = (e) => (Module._puts = wasmExports.puts)(e)),
				(Module._errmsg_internal = (e, t) =>
					(Module._errmsg_internal = wasmExports.errmsg_internal)(e, t)),
				(Module._memmove = (e, t, I) => (Module._memmove = wasmExports.memmove)(e, t, I)),
				(Module._memcpy = (e, t, I) => (Module._memcpy = wasmExports.memcpy)(e, t, I)),
				(Module._palloc = (e) => (Module._palloc = wasmExports.palloc)(e)),
				(Module._pfree = (e) => (Module._pfree = wasmExports.pfree)(e)),
				(Module._PageGetFreeSpace = (e) =>
					(Module._PageGetFreeSpace = wasmExports.PageGetFreeSpace)(e)),
				(Module._PageGetExactFreeSpace = (e) =>
					(Module._PageGetExactFreeSpace = wasmExports.PageGetExactFreeSpace)(e)),
				(Module._PageGetHeapFreeSpace = (e) =>
					(Module._PageGetHeapFreeSpace = wasmExports.PageGetHeapFreeSpace)(e)),
				(Module._PageIndexMultiDelete = (e, t, I) =>
					(Module._PageIndexMultiDelete = wasmExports.PageIndexMultiDelete)(e, t, I)),
				(Module._PageIndexTupleOverwrite = (e, t, I, B) =>
					(Module._PageIndexTupleOverwrite = wasmExports.PageIndexTupleOverwrite)(e, t, I, B)),
				(Module._ItemPointerEquals = (e, t) =>
					(Module._ItemPointerEquals = wasmExports.ItemPointerEquals)(e, t)),
				(Module._ItemPointerCompare = (e, t) =>
					(Module._ItemPointerCompare = wasmExports.ItemPointerCompare)(e, t)),
				(Module._add_size = (e, t) => (Module._add_size = wasmExports.add_size)(e, t)),
				(Module._ShmemInitStruct = (e, t, I) =>
					(Module._ShmemInitStruct = wasmExports.ShmemInitStruct)(e, t, I)),
				(Module._s_init_lock_sema = (e, t) =>
					(Module._s_init_lock_sema = wasmExports.s_init_lock_sema)(e, t)),
				(Module._LWLockAcquire = (e, t) =>
					(Module._LWLockAcquire = wasmExports.LWLockAcquire)(e, t)),
				(Module._LWLockRelease = (e) => (Module._LWLockRelease = wasmExports.LWLockRelease)(e)),
				(Module._on_shmem_exit = (e, t) =>
					(Module._on_shmem_exit = wasmExports.on_shmem_exit)(e, t)),
				(Module._tas_sema = (e) => (Module._tas_sema = wasmExports.tas_sema)(e)),
				(Module._s_lock = (e, t, I, B) => (Module._s_lock = wasmExports.s_lock)(e, t, I, B)),
				(Module._s_unlock_sema = (e) => (Module._s_unlock_sema = wasmExports.s_unlock_sema)(e)),
				(Module._StartTransactionCommand = () =>
					(Module._StartTransactionCommand = wasmExports.StartTransactionCommand)()),
				(Module._CommitTransactionCommand = () =>
					(Module._CommitTransactionCommand = wasmExports.CommitTransactionCommand)()),
				(Module._WaitLatch = (e, t, I, B) =>
					(Module._WaitLatch = wasmExports.WaitLatch)(e, t, I, B)),
				(Module._ResetLatch = (e) => (Module._ResetLatch = wasmExports.ResetLatch)(e)),
				(Module._ProcessInterrupts = () =>
					(Module._ProcessInterrupts = wasmExports.ProcessInterrupts)()),
				(Module._MemoryContextAlloc = (e, t) =>
					(Module._MemoryContextAlloc = wasmExports.MemoryContextAlloc)(e, t)),
				(Module._AllocateDir = (e) => (Module._AllocateDir = wasmExports.AllocateDir)(e)),
				(Module._ReadDir = (e, t) => (Module._ReadDir = wasmExports.ReadDir)(e, t)),
				(Module._strncmp = (e, t, I) => (Module._strncmp = wasmExports.strncmp)(e, t, I)),
				(Module._unlink = (e) => (Module._unlink = wasmExports.unlink)(e)),
				(Module._errcode_for_file_access = () =>
					(Module._errcode_for_file_access = wasmExports.errcode_for_file_access)()),
				(Module._FreeDir = (e) => (Module._FreeDir = wasmExports.FreeDir)(e)),
				(Module._pg_prng_uint32 = (e) => (Module._pg_prng_uint32 = wasmExports.pg_prng_uint32)(e)),
				(Module._dsm_create = (e, t) => (Module._dsm_create = wasmExports.dsm_create)(e, t)),
				(Module._dsm_attach = (e) => (Module._dsm_attach = wasmExports.dsm_attach)(e)),
				(Module._dsm_detach = (e) => (Module._dsm_detach = wasmExports.dsm_detach)(e)),
				(Module._dsm_segment_address = (e) =>
					(Module._dsm_segment_address = wasmExports.dsm_segment_address)(e)),
				(Module._dsm_segment_handle = (e) =>
					(Module._dsm_segment_handle = wasmExports.dsm_segment_handle)(e)),
				(Module._MemoryContextAllocZero = (e, t) =>
					(Module._MemoryContextAllocZero = wasmExports.MemoryContextAllocZero)(e, t)),
				(Module._read = (e, t, I) => (Module._read = wasmExports.read)(e, t, I)),
				(Module._hash_create = (e, t, I, B) =>
					(Module._hash_create = wasmExports.hash_create)(e, t, I, B)),
				(Module._hash_destroy = (e) => (Module._hash_destroy = wasmExports.hash_destroy)(e)),
				(Module._hash_seq_init = (e, t) =>
					(Module._hash_seq_init = wasmExports.hash_seq_init)(e, t)),
				(Module._hash_seq_search = (e) =>
					(Module._hash_seq_search = wasmExports.hash_seq_search)(e)),
				(Module._hash_search = (e, t, I, B) =>
					(Module._hash_search = wasmExports.hash_search)(e, t, I, B)),
				(Module._initStringInfo = (e) => (Module._initStringInfo = wasmExports.initStringInfo)(e)),
				(Module._appendStringInfo = (e, t, I) =>
					(Module._appendStringInfo = wasmExports.appendStringInfo)(e, t, I)),
				(Module._GetCurrentTimestamp = () =>
					(Module._GetCurrentTimestamp = wasmExports.GetCurrentTimestamp)()),
				(Module._pg_usleep = (e) => (Module._pg_usleep = wasmExports.pg_usleep)(e)),
				(Module._errdetail = (e, t) => (Module._errdetail = wasmExports.errdetail)(e, t)),
				(Module._TransactionIdDidCommit = (e) =>
					(Module._TransactionIdDidCommit = wasmExports.TransactionIdDidCommit)(e)),
				(Module._TransactionIdPrecedes = (e, t) =>
					(Module._TransactionIdPrecedes = wasmExports.TransactionIdPrecedes)(e, t)),
				(Module._XLogBeginInsert = () => (Module._XLogBeginInsert = wasmExports.XLogBeginInsert)()),
				(Module._XLogRegisterData = (e, t) =>
					(Module._XLogRegisterData = wasmExports.XLogRegisterData)(e, t)),
				(Module._XLogInsert = (e, t) => (Module._XLogInsert = wasmExports.XLogInsert)(e, t)),
				(Module._ConditionVariableInit = (e) =>
					(Module._ConditionVariableInit = wasmExports.ConditionVariableInit)(e)),
				(Module._ConditionVariableCancelSleep = () =>
					(Module._ConditionVariableCancelSleep = wasmExports.ConditionVariableCancelSleep)()),
				(Module._ConditionVariableSleep = (e, t) =>
					(Module._ConditionVariableSleep = wasmExports.ConditionVariableSleep)(e, t)),
				(Module.___wasm_setjmp = (e, t, I) =>
					(Module.___wasm_setjmp = wasmExports.__wasm_setjmp)(e, t, I)),
				(Module.___wasm_setjmp_test = (e, t) =>
					(Module.___wasm_setjmp_test = wasmExports.__wasm_setjmp_test)(e, t)),
				(Module._pg_re_throw = () => (Module._pg_re_throw = wasmExports.pg_re_throw)()),
				(Module._emscripten_longjmp = (e, t) =>
					(Module._emscripten_longjmp = wasmExports.emscripten_longjmp)(e, t)),
				(Module._procsignal_sigusr1_handler = (e) =>
					(Module._procsignal_sigusr1_handler = wasmExports.procsignal_sigusr1_handler)(e)),
				(Module._close = (e) => (Module._close = wasmExports.close)(e)),
				(Module._ReleaseExternalFD = () =>
					(Module._ReleaseExternalFD = wasmExports.ReleaseExternalFD)()),
				(Module._fcntl = (e, t, I) => (Module._fcntl = wasmExports.fcntl)(e, t, I)),
				(Module._pqsignal = (e, t) => (Module._pqsignal = wasmExports.pqsignal)(e, t)),
				(Module._write = (e, t, I) => (Module._write = wasmExports.write)(e, t, I)),
				(Module._AddWaitEventToSet = (e, t, I, B, tr) =>
					(Module._AddWaitEventToSet = wasmExports.AddWaitEventToSet)(e, t, I, B, tr)),
				(Module._clock_gettime = (e, t) =>
					(Module._clock_gettime = wasmExports.clock_gettime)(e, t)),
				(Module._poll = (e, t, I) => (Module._poll = wasmExports.poll)(e, t, I)),
				(Module._WaitLatchOrSocket = (e, t, I, B, tr) =>
					(Module._WaitLatchOrSocket = wasmExports.WaitLatchOrSocket)(e, t, I, B, tr)),
				(Module._GetNumRegisteredWaitEvents = (e) =>
					(Module._GetNumRegisteredWaitEvents = wasmExports.GetNumRegisteredWaitEvents)(e)),
				(Module._ShmemInitHash = (e, t, I, B, tr) =>
					(Module._ShmemInitHash = wasmExports.ShmemInitHash)(e, t, I, B, tr)),
				(Module._InitMaterializedSRF = (e, t) =>
					(Module._InitMaterializedSRF = wasmExports.InitMaterializedSRF)(e, t)),
				(Module._cstring_to_text = (e) =>
					(Module._cstring_to_text = wasmExports.cstring_to_text)(e)),
				(Module._Int64GetDatum = (e) => (Module._Int64GetDatum = wasmExports.Int64GetDatum)(e)),
				(Module._tuplestore_putvalues = (e, t, I, B) =>
					(Module._tuplestore_putvalues = wasmExports.tuplestore_putvalues)(e, t, I, B)),
				(Module._shm_toc_allocate = (e, t) =>
					(Module._shm_toc_allocate = wasmExports.shm_toc_allocate)(e, t)),
				(Module._shm_toc_insert = (e, t, I) =>
					(Module._shm_toc_insert = wasmExports.shm_toc_insert)(e, t, I)),
				(Module._shm_toc_lookup = (e, t, I) =>
					(Module._shm_toc_lookup = wasmExports.shm_toc_lookup)(e, t, I)),
				(Module._superuser_arg = (e) => (Module._superuser_arg = wasmExports.superuser_arg)(e)),
				(Module._superuser = () => (Module._superuser = wasmExports.superuser)()),
				(Module._GetUserId = () => (Module._GetUserId = wasmExports.GetUserId)()),
				(Module._has_privs_of_role = (e, t) =>
					(Module._has_privs_of_role = wasmExports.has_privs_of_role)(e, t)),
				(Module._errmsg_plural = (e, t, I, B) =>
					(Module._errmsg_plural = wasmExports.errmsg_plural)(e, t, I, B)),
				(Module._errhint = (e, t) => (Module._errhint = wasmExports.errhint)(e, t)),
				(Module._fstat = (e, t) => (Module._fstat = wasmExports.fstat)(e, t)),
				(Module._ftruncate = (e, t) => (Module._ftruncate = wasmExports.ftruncate)(e, t)),
				(Module._RequestAddinShmemSpace = (e) =>
					(Module._RequestAddinShmemSpace = wasmExports.RequestAddinShmemSpace)(e)),
				(Module._hash_estimate_size = (e, t) =>
					(Module._hash_estimate_size = wasmExports.hash_estimate_size)(e, t)),
				(Module._pg_sprintf = (e, t, I) => (Module._pg_sprintf = wasmExports.pg_sprintf)(e, t, I)),
				(Module._SetConfigOption = (e, t, I, B) =>
					(Module._SetConfigOption = wasmExports.SetConfigOption)(e, t, I, B)),
				(Module._pg_printf = (e, t) => (Module._pg_printf = wasmExports.pg_printf)(e, t)),
				(Module._before_shmem_exit = (e, t) =>
					(Module._before_shmem_exit = wasmExports.before_shmem_exit)(e, t)),
				(Module._cancel_before_shmem_exit = (e, t) =>
					(Module._cancel_before_shmem_exit = wasmExports.cancel_before_shmem_exit)(e, t)),
				(Module._pg_qsort = (e, t, I, B) => (Module._pg_qsort = wasmExports.pg_qsort)(e, t, I, B)),
				(Module._TransactionIdIsInProgress = (e) =>
					(Module._TransactionIdIsInProgress = wasmExports.TransactionIdIsInProgress)(e)),
				(Module._TransactionIdIsCurrentTransactionId = (e) =>
					(Module._TransactionIdIsCurrentTransactionId =
						wasmExports.TransactionIdIsCurrentTransactionId)(e)),
				(Module._RecoveryInProgress = () =>
					(Module._RecoveryInProgress = wasmExports.RecoveryInProgress)()),
				(Module._GetOldestNonRemovableTransactionId = (e) =>
					(Module._GetOldestNonRemovableTransactionId =
						wasmExports.GetOldestNonRemovableTransactionId)(e)),
				(Module._GetCurrentCommandId = (e) =>
					(Module._GetCurrentCommandId = wasmExports.GetCurrentCommandId)(e)),
				(Module._BackendXidGetPid = (e) =>
					(Module._BackendXidGetPid = wasmExports.BackendXidGetPid)(e)),
				(Module._lappend_int = (e, t) => (Module._lappend_int = wasmExports.lappend_int)(e, t)),
				(Module._index_close = (e, t) => (Module._index_close = wasmExports.index_close)(e, t)),
				(Module._table_close = (e, t) => (Module._table_close = wasmExports.table_close)(e, t)),
				(Module._CommandCounterIncrement = () =>
					(Module._CommandCounterIncrement = wasmExports.CommandCounterIncrement)()),
				(Module._GetActiveSnapshot = () =>
					(Module._GetActiveSnapshot = wasmExports.GetActiveSnapshot)()),
				(Module._ScanKeyInit = (e, t, I, B, tr) =>
					(Module._ScanKeyInit = wasmExports.ScanKeyInit)(e, t, I, B, tr)),
				(Module._table_open = (e, t) => (Module._table_open = wasmExports.table_open)(e, t)),
				(Module._systable_beginscan = (e, t, I, B, tr, rr) =>
					(Module._systable_beginscan = wasmExports.systable_beginscan)(e, t, I, B, tr, rr)),
				(Module._systable_getnext = (e) =>
					(Module._systable_getnext = wasmExports.systable_getnext)(e)),
				(Module._systable_endscan = (e) =>
					(Module._systable_endscan = wasmExports.systable_endscan)(e)),
				(Module._index_open = (e, t) => (Module._index_open = wasmExports.index_open)(e, t)),
				(Module._systable_beginscan_ordered = (e, t, I, B, tr) =>
					(Module._systable_beginscan_ordered = wasmExports.systable_beginscan_ordered)(
						e,
						t,
						I,
						B,
						tr
					)),
				(Module._systable_getnext_ordered = (e, t) =>
					(Module._systable_getnext_ordered = wasmExports.systable_getnext_ordered)(e, t)),
				(Module._systable_endscan_ordered = (e) =>
					(Module._systable_endscan_ordered = wasmExports.systable_endscan_ordered)(e)),
				(Module._heap_form_tuple = (e, t, I) =>
					(Module._heap_form_tuple = wasmExports.heap_form_tuple)(e, t, I)),
				(Module._heap_freetuple = (e) => (Module._heap_freetuple = wasmExports.heap_freetuple)(e)),
				(Module._AllocSetContextCreateInternal = (e, t, I, B, tr) =>
					(Module._AllocSetContextCreateInternal = wasmExports.AllocSetContextCreateInternal)(
						e,
						t,
						I,
						B,
						tr
					)),
				(Module._list_free_deep = (e) => (Module._list_free_deep = wasmExports.list_free_deep)(e)),
				(Module._lappend = (e, t) => (Module._lappend = wasmExports.lappend)(e, t)),
				(Module._LockBuffer = (e, t) => (Module._LockBuffer = wasmExports.LockBuffer)(e, t)),
				(Module._GetFreeIndexPage = (e) =>
					(Module._GetFreeIndexPage = wasmExports.GetFreeIndexPage)(e)),
				(Module._RecordFreeIndexPage = (e, t) =>
					(Module._RecordFreeIndexPage = wasmExports.RecordFreeIndexPage)(e, t)),
				(Module._IndexFreeSpaceMapVacuum = (e) =>
					(Module._IndexFreeSpaceMapVacuum = wasmExports.IndexFreeSpaceMapVacuum)(e)),
				(Module._UnlockReleaseBuffer = (e) =>
					(Module._UnlockReleaseBuffer = wasmExports.UnlockReleaseBuffer)(e)),
				(Module._smgropen = (e, t) => (Module._smgropen = wasmExports.smgropen)(e, t)),
				(Module._smgrsetowner = (e, t) => (Module._smgrsetowner = wasmExports.smgrsetowner)(e, t)),
				(Module._RelationGetNumberOfBlocksInFork = (e, t) =>
					(Module._RelationGetNumberOfBlocksInFork = wasmExports.RelationGetNumberOfBlocksInFork)(
						e,
						t
					)),
				(Module._ReleaseBuffer = (e) => (Module._ReleaseBuffer = wasmExports.ReleaseBuffer)(e)),
				(Module._GetRecordedFreeSpace = (e, t) =>
					(Module._GetRecordedFreeSpace = wasmExports.GetRecordedFreeSpace)(e, t)),
				(Module._smgrexists = (e, t) => (Module._smgrexists = wasmExports.smgrexists)(e, t)),
				(Module._ReadBufferExtended = (e, t, I, B, tr) =>
					(Module._ReadBufferExtended = wasmExports.ReadBufferExtended)(e, t, I, B, tr)),
				(Module._MarkBufferDirty = (e) =>
					(Module._MarkBufferDirty = wasmExports.MarkBufferDirty)(e)),
				(Module._log_newpage_buffer = (e, t) =>
					(Module._log_newpage_buffer = wasmExports.log_newpage_buffer)(e, t)),
				(Module._copy_file = (e, t) => (Module._copy_file = wasmExports.copy_file)(e, t)),
				(Module._fd_fsync_fname = (e, t) =>
					(Module._fd_fsync_fname = wasmExports.fd_fsync_fname)(e, t)),
				(Module._OpenTransientFile = (e, t) =>
					(Module._OpenTransientFile = wasmExports.OpenTransientFile)(e, t)),
				(Module._CloseTransientFile = (e) =>
					(Module._CloseTransientFile = wasmExports.CloseTransientFile)(e)),
				(Module._hash_bytes = (e, t) => (Module._hash_bytes = wasmExports.hash_bytes)(e, t)),
				(Module._pstrdup = (e) => (Module._pstrdup = wasmExports.pstrdup)(e)),
				(Module._repalloc = (e, t) => (Module._repalloc = wasmExports.repalloc)(e, t)),
				(Module._wasm_OpenPipeStream = (e, t) =>
					(Module._wasm_OpenPipeStream = wasmExports.wasm_OpenPipeStream)(e, t)),
				(Module._access = (e, t) => (Module._access = wasmExports.access)(e, t)),
				(Module._fopen = (e, t) => (Module._fopen = wasmExports.fopen)(e, t)),
				(Module._fiprintf = (e, t, I) => (Module._fiprintf = wasmExports.fiprintf)(e, t, I)),
				(Module._fclose = (e) => (Module._fclose = wasmExports.fclose)(e)),
				(Module._fsync_fname_ext = (e, t, I, B) =>
					(Module._fsync_fname_ext = wasmExports.fsync_fname_ext)(e, t, I, B)),
				(Module._fd_durable_rename = (e, t, I) =>
					(Module._fd_durable_rename = wasmExports.fd_durable_rename)(e, t, I)),
				(Module._rename = (e, t) => (Module._rename = wasmExports.rename)(e, t)),
				(Module._strlcpy = (e, t, I) => (Module._strlcpy = wasmExports.strlcpy)(e, t, I)),
				(Module._dup = (e) => (Module._dup = wasmExports.dup)(e)),
				(Module._open = (e, t, I) => (Module._open = wasmExports.open)(e, t, I)),
				(Module._AcquireExternalFD = () =>
					(Module._AcquireExternalFD = wasmExports.AcquireExternalFD)()),
				(Module._realloc = (e, t) => (Module._realloc = wasmExports.realloc)(e, t)),
				(Module._stat = (e, t) => (Module._stat = wasmExports.stat)(e, t)),
				(Module._pwrite = (e, t, I, B) => (Module._pwrite = wasmExports.pwrite)(e, t, I, B)),
				(Module._lseek = (e, t, I) => (Module._lseek = wasmExports.lseek)(e, t, I)),
				(Module._AllocateFile = (e, t) => (Module._AllocateFile = wasmExports.AllocateFile)(e, t)),
				(Module._GetCurrentSubTransactionId = () =>
					(Module._GetCurrentSubTransactionId = wasmExports.GetCurrentSubTransactionId)()),
				(Module._FreeFile = (e) => (Module._FreeFile = wasmExports.FreeFile)(e)),
				(Module._pclose = (e) => (Module._pclose = wasmExports.pclose)(e)),
				(Module._ClosePipeStream = (e) =>
					(Module._ClosePipeStream = wasmExports.ClosePipeStream)(e)),
				(Module._pg_prng_uint64_range = (e, t, I) =>
					(Module._pg_prng_uint64_range = wasmExports.pg_prng_uint64_range)(e, t, I)),
				(Module._AtEOSubXact_Files = (e, t, I) =>
					(Module._AtEOSubXact_Files = wasmExports.AtEOSubXact_Files)(e, t, I)),
				(Module._pre_format_elog_string = (e, t) =>
					(Module._pre_format_elog_string = wasmExports.pre_format_elog_string)(e, t)),
				(Module._format_elog_string = (e, t) =>
					(Module._format_elog_string = wasmExports.format_elog_string)(e, t)),
				(Module._list_free = (e) => (Module._list_free = wasmExports.list_free)(e)),
				(Module._guc_malloc = (e, t) => (Module._guc_malloc = wasmExports.guc_malloc)(e, t)),
				(Module._MemoryContextDelete = (e) =>
					(Module._MemoryContextDelete = wasmExports.MemoryContextDelete)(e)),
				(Module._strtoul = (e, t, I) => (Module._strtoul = wasmExports.strtoul)(e, t, I)),
				(Module._hash_get_num_entries = (e) =>
					(Module._hash_get_num_entries = wasmExports.hash_get_num_entries)(e)),
				(Module._LWLockInitialize = (e, t) =>
					(Module._LWLockInitialize = wasmExports.LWLockInitialize)(e, t)),
				(Module._PrefetchBuffer = (e, t, I, B) =>
					(Module._PrefetchBuffer = wasmExports.PrefetchBuffer)(e, t, I, B)),
				(Module._LockBufHdr = (e) => (Module._LockBufHdr = wasmExports.LockBufHdr)(e)),
				(Module._ReadBuffer = (e, t) => (Module._ReadBuffer = wasmExports.ReadBuffer)(e, t)),
				(Module._pgstat_assoc_relation = (e) =>
					(Module._pgstat_assoc_relation = wasmExports.pgstat_assoc_relation)(e)),
				(Module._ExtendBufferedRel = (e, t, I, B) =>
					(Module._ExtendBufferedRel = wasmExports.ExtendBufferedRel)(e, t, I, B)),
				(Module._LockBufferForCleanup = (e) =>
					(Module._LockBufferForCleanup = wasmExports.LockBufferForCleanup)(e)),
				(Module._smgrread = (e, t, I, B) => (Module._smgrread = wasmExports.smgrread)(e, t, I, B)),
				(Module._LockRelationForExtension = (e, t) =>
					(Module._LockRelationForExtension = wasmExports.LockRelationForExtension)(e, t)),
				(Module._UnlockRelationForExtension = (e, t) =>
					(Module._UnlockRelationForExtension = wasmExports.UnlockRelationForExtension)(e, t)),
				(Module._BufferGetBlockNumber = (e) =>
					(Module._BufferGetBlockNumber = wasmExports.BufferGetBlockNumber)(e)),
				(Module._bsearch = (e, t, I, B, tr) =>
					(Module._bsearch = wasmExports.bsearch)(e, t, I, B, tr)),
				(Module._set_errcontext_domain = (e) =>
					(Module._set_errcontext_domain = wasmExports.set_errcontext_domain)(e)),
				(Module._errcontext_msg = (e, t) =>
					(Module._errcontext_msg = wasmExports.errcontext_msg)(e, t)),
				(Module._GetAccessStrategy = (e) =>
					(Module._GetAccessStrategy = wasmExports.GetAccessStrategy)(e)),
				(Module._FreeAccessStrategy = (e) =>
					(Module._FreeAccessStrategy = wasmExports.FreeAccessStrategy)(e)),
				(Module._ConditionalLockBuffer = (e) =>
					(Module._ConditionalLockBuffer = wasmExports.ConditionalLockBuffer)(e)),
				(Module._TestForOldSnapshot_impl = (e, t) =>
					(Module._TestForOldSnapshot_impl = wasmExports.TestForOldSnapshot_impl)(e, t));
			var _calloc = (Module._calloc = (e, t) =>
				(_calloc = Module._calloc = wasmExports.calloc)(e, t));
			(Module._have_free_buffer = () =>
				(Module._have_free_buffer = wasmExports.have_free_buffer)()),
				(Module._palloc0 = (e) => (Module._palloc0 = wasmExports.palloc0)(e)),
				(Module._resetStringInfo = (e) =>
					(Module._resetStringInfo = wasmExports.resetStringInfo)(e)),
				(Module._appendStringInfoChar = (e, t) =>
					(Module._appendStringInfoChar = wasmExports.appendStringInfoChar)(e, t)),
				(Module._appendBinaryStringInfo = (e, t, I) =>
					(Module._appendBinaryStringInfo = wasmExports.appendBinaryStringInfo)(e, t, I)),
				(Module._errdetail_internal = (e, t) =>
					(Module._errdetail_internal = wasmExports.errdetail_internal)(e, t)),
				(Module._strcpy = (e, t) => (Module._strcpy = wasmExports.strcpy)(e, t)),
				(Module._LWLockRegisterTranche = (e, t) =>
					(Module._LWLockRegisterTranche = wasmExports.LWLockRegisterTranche)(e, t)),
				(Module._GetNamedLWLockTranche = (e) =>
					(Module._GetNamedLWLockTranche = wasmExports.GetNamedLWLockTranche)(e)),
				(Module._LWLockNewTrancheId = () =>
					(Module._LWLockNewTrancheId = wasmExports.LWLockNewTrancheId)()),
				(Module._RequestNamedLWLockTranche = (e, t) =>
					(Module._RequestNamedLWLockTranche = wasmExports.RequestNamedLWLockTranche)(e, t)),
				(Module._pg_prng_double = (e) => (Module._pg_prng_double = wasmExports.pg_prng_double)(e)),
				(Module._getpid = () => (Module._getpid = wasmExports.getpid)()),
				(Module._GetTransactionSnapshot = () =>
					(Module._GetTransactionSnapshot = wasmExports.GetTransactionSnapshot)()),
				(Module._ConditionVariableSignal = (e) =>
					(Module._ConditionVariableSignal = wasmExports.ConditionVariableSignal)(e)),
				(Module._LockPage = (e, t, I) => (Module._LockPage = wasmExports.LockPage)(e, t, I)),
				(Module._UnlockPage = (e, t, I) => (Module._UnlockPage = wasmExports.UnlockPage)(e, t, I)),
				(Module._pgstat_progress_update_param = (e, t) =>
					(Module._pgstat_progress_update_param = wasmExports.pgstat_progress_update_param)(e, t)),
				(Module._list_make1_impl = (e, t) =>
					(Module._list_make1_impl = wasmExports.list_make1_impl)(e, t)),
				(Module._psprintf = (e, t) => (Module._psprintf = wasmExports.psprintf)(e, t)),
				(Module._smgrtruncate = (e, t, I, B) =>
					(Module._smgrtruncate = wasmExports.smgrtruncate)(e, t, I, B)),
				(Module._log = (e) => (Module._log = wasmExports.log)(e)),
				(Module._pairingheap_allocate = (e, t) =>
					(Module._pairingheap_allocate = wasmExports.pairingheap_allocate)(e, t)),
				(Module._pairingheap_add = (e, t) =>
					(Module._pairingheap_add = wasmExports.pairingheap_add)(e, t)),
				(Module._pairingheap_first = (e) =>
					(Module._pairingheap_first = wasmExports.pairingheap_first)(e)),
				(Module._pairingheap_remove_first = (e) =>
					(Module._pairingheap_remove_first = wasmExports.pairingheap_remove_first)(e)),
				(Module._bloom_create = (e, t, I) =>
					(Module._bloom_create = wasmExports.bloom_create)(e, t, I)),
				(Module._bloom_free = (e) => (Module._bloom_free = wasmExports.bloom_free)(e)),
				(Module._bloom_add_element = (e, t, I) =>
					(Module._bloom_add_element = wasmExports.bloom_add_element)(e, t, I)),
				(Module._hash_bytes_extended = (e, t, I) =>
					(Module._hash_bytes_extended = wasmExports.hash_bytes_extended)(e, t, I)),
				(Module._bloom_lacks_element = (e, t, I) =>
					(Module._bloom_lacks_element = wasmExports.bloom_lacks_element)(e, t, I)),
				(Module._bloom_prop_bits_set = (e) =>
					(Module._bloom_prop_bits_set = wasmExports.bloom_prop_bits_set)(e)),
				(Module._pg_popcount = (e, t) => (Module._pg_popcount = wasmExports.pg_popcount)(e, t)),
				(Module._memcmp = (e, t, I) => (Module._memcmp = wasmExports.memcmp)(e, t, I)),
				(Module._bms_make_singleton = (e) =>
					(Module._bms_make_singleton = wasmExports.bms_make_singleton)(e)),
				(Module._bms_add_members = (e, t) =>
					(Module._bms_add_members = wasmExports.bms_add_members)(e, t)),
				(Module._bms_add_member = (e, t) =>
					(Module._bms_add_member = wasmExports.bms_add_member)(e, t)),
				(Module._bms_del_member = (e, t) =>
					(Module._bms_del_member = wasmExports.bms_del_member)(e, t)),
				(Module._check_stack_depth = () =>
					(Module._check_stack_depth = wasmExports.check_stack_depth)()),
				(Module._parser_errposition = (e, t) =>
					(Module._parser_errposition = wasmExports.parser_errposition)(e, t)),
				(Module._makeVar = (e, t, I, B, tr, rr) =>
					(Module._makeVar = wasmExports.makeVar)(e, t, I, B, tr, rr)),
				(Module._bms_union = (e, t) => (Module._bms_union = wasmExports.bms_union)(e, t)),
				(Module._varstr_levenshtein_less_equal = (e, t, I, B, tr, rr, ir, lr, dr) =>
					(Module._varstr_levenshtein_less_equal = wasmExports.varstr_levenshtein_less_equal)(
						e,
						t,
						I,
						B,
						tr,
						rr,
						ir,
						lr,
						dr
					)),
				(Module._SearchSysCacheExists = (e, t, I, B, tr) =>
					(Module._SearchSysCacheExists = wasmExports.SearchSysCacheExists)(e, t, I, B, tr)),
				(Module._MemoryContextAllocZeroAligned = (e, t) =>
					(Module._MemoryContextAllocZeroAligned = wasmExports.MemoryContextAllocZeroAligned)(
						e,
						t
					)),
				(Module._makeString = (e) => (Module._makeString = wasmExports.makeString)(e)),
				(Module._addRTEPermissionInfo = (e, t) =>
					(Module._addRTEPermissionInfo = wasmExports.addRTEPermissionInfo)(e, t)),
				(Module._copyObjectImpl = (e) => (Module._copyObjectImpl = wasmExports.copyObjectImpl)(e)),
				(Module._exprType = (e) => (Module._exprType = wasmExports.exprType)(e)),
				(Module._lappend_oid = (e, t) => (Module._lappend_oid = wasmExports.lappend_oid)(e, t)),
				(Module._exprTypmod = (e) => (Module._exprTypmod = wasmExports.exprTypmod)(e)),
				(Module._exprLocation = (e) => (Module._exprLocation = wasmExports.exprLocation)(e)),
				(Module._CreateTemplateTupleDesc = (e) =>
					(Module._CreateTemplateTupleDesc = wasmExports.CreateTemplateTupleDesc)(e)),
				(Module._TupleDescInitEntry = (e, t, I, B, tr, rr) =>
					(Module._TupleDescInitEntry = wasmExports.TupleDescInitEntry)(e, t, I, B, tr, rr)),
				(Module._TupleDescInitEntryCollation = (e, t, I) =>
					(Module._TupleDescInitEntryCollation = wasmExports.TupleDescInitEntryCollation)(e, t, I)),
				(Module._typenameTypeIdAndMod = (e, t, I, B) =>
					(Module._typenameTypeIdAndMod = wasmExports.typenameTypeIdAndMod)(e, t, I, B)),
				(Module._format_type_be = (e) => (Module._format_type_be = wasmExports.format_type_be)(e)),
				(Module._list_concat = (e, t) => (Module._list_concat = wasmExports.list_concat)(e, t)),
				(Module._list_copy = (e) => (Module._list_copy = wasmExports.list_copy)(e)),
				(Module._relation_open = (e, t) =>
					(Module._relation_open = wasmExports.relation_open)(e, t)),
				(Module._relation_close = (e, t) =>
					(Module._relation_close = wasmExports.relation_close)(e, t)),
				(Module._makeTargetEntry = (e, t, I, B) =>
					(Module._makeTargetEntry = wasmExports.makeTargetEntry)(e, t, I, B)),
				(Module._get_attname = (e, t, I) =>
					(Module._get_attname = wasmExports.get_attname)(e, t, I)),
				(Module._SearchSysCache2 = (e, t, I) =>
					(Module._SearchSysCache2 = wasmExports.SearchSysCache2)(e, t, I)),
				(Module._ReleaseSysCache = (e) =>
					(Module._ReleaseSysCache = wasmExports.ReleaseSysCache)(e)),
				(Module._RangeVarGetRelidExtended = (e, t, I, B, tr) =>
					(Module._RangeVarGetRelidExtended = wasmExports.RangeVarGetRelidExtended)(
						e,
						t,
						I,
						B,
						tr
					)),
				(Module._pg_mbstrlen_with_len = (e, t) =>
					(Module._pg_mbstrlen_with_len = wasmExports.pg_mbstrlen_with_len)(e, t)),
				(Module._errposition = (e) => (Module._errposition = wasmExports.errposition)(e)),
				(Module._numeric_in = (e) => (Module._numeric_in = wasmExports.numeric_in)(e)),
				(Module._DirectFunctionCall3Coll = (e, t, I, B, tr) =>
					(Module._DirectFunctionCall3Coll = wasmExports.DirectFunctionCall3Coll)(e, t, I, B, tr)),
				(Module._bit_in = (e) => (Module._bit_in = wasmExports.bit_in)(e)),
				(Module._NameListToString = (e) =>
					(Module._NameListToString = wasmExports.NameListToString)(e)),
				(Module._appendStringInfoString = (e, t) =>
					(Module._appendStringInfoString = wasmExports.appendStringInfoString)(e, t)),
				(Module._lookup_type_cache = (e, t) =>
					(Module._lookup_type_cache = wasmExports.lookup_type_cache)(e, t)),
				(Module._CacheRegisterSyscacheCallback = (e, t, I) =>
					(Module._CacheRegisterSyscacheCallback = wasmExports.CacheRegisterSyscacheCallback)(
						e,
						t,
						I
					)),
				(Module._SearchSysCache1 = (e, t) =>
					(Module._SearchSysCache1 = wasmExports.SearchSysCache1)(e, t)),
				(Module._list_make2_impl = (e, t, I) =>
					(Module._list_make2_impl = wasmExports.list_make2_impl)(e, t, I)),
				(Module._get_base_element_type = (e) =>
					(Module._get_base_element_type = wasmExports.get_base_element_type)(e)),
				(Module._downcase_truncate_identifier = (e, t, I) =>
					(Module._downcase_truncate_identifier = wasmExports.downcase_truncate_identifier)(
						e,
						t,
						I
					)),
				(Module._pg_database_encoding_max_length = () =>
					(Module._pg_database_encoding_max_length =
						wasmExports.pg_database_encoding_max_length)()),
				(Module._truncate_identifier = (e, t, I) =>
					(Module._truncate_identifier = wasmExports.truncate_identifier)(e, t, I)),
				(Module._scanner_isspace = (e) =>
					(Module._scanner_isspace = wasmExports.scanner_isspace)(e)),
				(Module._get_typcollation = (e) =>
					(Module._get_typcollation = wasmExports.get_typcollation)(e)),
				(Module._list_delete_cell = (e, t) =>
					(Module._list_delete_cell = wasmExports.list_delete_cell)(e, t)),
				(Module._makeTypeNameFromNameList = (e) =>
					(Module._makeTypeNameFromNameList = wasmExports.makeTypeNameFromNameList)(e)),
				(Module._SysCacheGetAttrNotNull = (e, t, I) =>
					(Module._SysCacheGetAttrNotNull = wasmExports.SysCacheGetAttrNotNull)(e, t, I)),
				(Module._text_to_cstring = (e) =>
					(Module._text_to_cstring = wasmExports.text_to_cstring)(e)),
				(Module._stringToNode = (e) => (Module._stringToNode = wasmExports.stringToNode)(e)),
				(Module._bms_is_member = (e, t) =>
					(Module._bms_is_member = wasmExports.bms_is_member)(e, t)),
				(Module._bms_free = (e) => (Module._bms_free = wasmExports.bms_free)(e)),
				(Module._core_yylex = (e, t, I) => (Module._core_yylex = wasmExports.core_yylex)(e, t, I)),
				(Module._getc = (e) => (Module._getc = wasmExports.getc)(e)),
				(Module._ferror = (e) => (Module._ferror = wasmExports.ferror)(e)),
				(Module._fread = (e, t, I, B) => (Module._fread = wasmExports.fread)(e, t, I, B)),
				(Module._clearerr = (e) => (Module._clearerr = wasmExports.clearerr)(e)),
				(Module._scanner_init = (e, t, I, B) =>
					(Module._scanner_init = wasmExports.scanner_init)(e, t, I, B)),
				(Module._scanner_finish = (e) => (Module._scanner_finish = wasmExports.scanner_finish)(e)),
				(Module._get_namespace_name = (e) =>
					(Module._get_namespace_name = wasmExports.get_namespace_name)(e)),
				(Module._lookup_rowtype_tupdesc = (e, t) =>
					(Module._lookup_rowtype_tupdesc = wasmExports.lookup_rowtype_tupdesc)(e, t)),
				(Module._DecrTupleDescRefCount = (e) =>
					(Module._DecrTupleDescRefCount = wasmExports.DecrTupleDescRefCount)(e)),
				(Module._relation_openrv = (e, t) =>
					(Module._relation_openrv = wasmExports.relation_openrv)(e, t)),
				(Module._errdetail_relkind_not_supported = (e) =>
					(Module._errdetail_relkind_not_supported = wasmExports.errdetail_relkind_not_supported)(
						e
					)),
				(Module._object_aclcheck = (e, t, I, B) =>
					(Module._object_aclcheck = wasmExports.object_aclcheck)(e, t, I, B)),
				(Module._aclcheck_error = (e, t, I) =>
					(Module._aclcheck_error = wasmExports.aclcheck_error)(e, t, I)),
				(Module._pg_class_aclcheck = (e, t, I) =>
					(Module._pg_class_aclcheck = wasmExports.pg_class_aclcheck)(e, t, I)),
				(Module._get_relkind_objtype = (e) =>
					(Module._get_relkind_objtype = wasmExports.get_relkind_objtype)(e)),
				(Module._list_make3_impl = (e, t, I, B) =>
					(Module._list_make3_impl = wasmExports.list_make3_impl)(e, t, I, B)),
				(Module._quote_qualified_identifier = (e, t) =>
					(Module._quote_qualified_identifier = wasmExports.quote_qualified_identifier)(e, t)),
				(Module._table_openrv = (e, t) => (Module._table_openrv = wasmExports.table_openrv)(e, t)),
				(Module._equal = (e, t) => (Module._equal = wasmExports.equal)(e, t)),
				(Module._RelationGetIndexList = (e) =>
					(Module._RelationGetIndexList = wasmExports.RelationGetIndexList)(e)),
				(Module._pg_detoast_datum = (e) =>
					(Module._pg_detoast_datum = wasmExports.pg_detoast_datum)(e)),
				(Module._SysCacheGetAttr = (e, t, I, B) =>
					(Module._SysCacheGetAttr = wasmExports.SysCacheGetAttr)(e, t, I, B)),
				(Module._deconstruct_array_builtin = (e, t, I, B, tr) =>
					(Module._deconstruct_array_builtin = wasmExports.deconstruct_array_builtin)(
						e,
						t,
						I,
						B,
						tr
					)),
				(Module._untransformRelOptions = (e) =>
					(Module._untransformRelOptions = wasmExports.untransformRelOptions)(e)),
				(Module._transformExpr = (e, t, I) =>
					(Module._transformExpr = wasmExports.transformExpr)(e, t, I)),
				(Module._get_rel_namespace = (e) =>
					(Module._get_rel_namespace = wasmExports.get_rel_namespace)(e)),
				(Module._get_rel_name = (e) => (Module._get_rel_name = wasmExports.get_rel_name)(e)),
				(Module._makeRangeVar = (e, t, I) =>
					(Module._makeRangeVar = wasmExports.makeRangeVar)(e, t, I)),
				(Module._makeDefElem = (e, t, I) =>
					(Module._makeDefElem = wasmExports.makeDefElem)(e, t, I)),
				(Module._makeRangeVarFromNameList = (e) =>
					(Module._makeRangeVarFromNameList = wasmExports.makeRangeVarFromNameList)(e)),
				(Module._coerce_to_target_type = (e, t, I, B, tr, rr, ir, lr) =>
					(Module._coerce_to_target_type = wasmExports.coerce_to_target_type)(
						e,
						t,
						I,
						B,
						tr,
						rr,
						ir,
						lr
					)),
				(Module._LookupTypeName = (e, t, I, B) =>
					(Module._LookupTypeName = wasmExports.LookupTypeName)(e, t, I, B)),
				(Module._GetSysCacheOid = (e, t, I, B, tr, rr) =>
					(Module._GetSysCacheOid = wasmExports.GetSysCacheOid)(e, t, I, B, tr, rr)),
				(Module._construct_array_builtin = (e, t, I) =>
					(Module._construct_array_builtin = wasmExports.construct_array_builtin)(e, t, I)),
				(Module._get_collation_oid = (e, t) =>
					(Module._get_collation_oid = wasmExports.get_collation_oid)(e, t)),
				(Module._typeStringToTypeName = (e, t) =>
					(Module._typeStringToTypeName = wasmExports.typeStringToTypeName)(e, t)),
				(Module._raw_parser = (e, t) => (Module._raw_parser = wasmExports.raw_parser)(e, t)),
				(Module._errsave_start = (e, t) =>
					(Module._errsave_start = wasmExports.errsave_start)(e, t)),
				(Module._errsave_finish = (e, t, I, B) =>
					(Module._errsave_finish = wasmExports.errsave_finish)(e, t, I, B)),
				(Module._defGetBoolean = (e) => (Module._defGetBoolean = wasmExports.defGetBoolean)(e)),
				(Module._list_delete_last = (e) =>
					(Module._list_delete_last = wasmExports.list_delete_last)(e)),
				(Module._format_type_with_typemod = (e, t) =>
					(Module._format_type_with_typemod = wasmExports.format_type_with_typemod)(e, t)),
				(Module._list_member = (e, t) => (Module._list_member = wasmExports.list_member)(e, t)),
				(Module._list_member_int = (e, t) =>
					(Module._list_member_int = wasmExports.list_member_int)(e, t)),
				(Module._list_sort = (e, t) => (Module._list_sort = wasmExports.list_sort)(e, t)),
				(Module._get_element_type = (e) =>
					(Module._get_element_type = wasmExports.get_element_type)(e)),
				(Module._makeBoolean = (e) => (Module._makeBoolean = wasmExports.makeBoolean)(e)),
				(Module._makeInteger = (e) => (Module._makeInteger = wasmExports.makeInteger)(e)),
				(Module._makeTypeName = (e) => (Module._makeTypeName = wasmExports.makeTypeName)(e)),
				(Module._list_make4_impl = (e, t, I, B, tr) =>
					(Module._list_make4_impl = wasmExports.list_make4_impl)(e, t, I, B, tr)),
				(Module._isxdigit = (e) => (Module._isxdigit = wasmExports.isxdigit)(e)),
				(Module._strip_implicit_coercions = (e) =>
					(Module._strip_implicit_coercions = wasmExports.strip_implicit_coercions)(e)),
				(Module._SearchSysCacheList = (e, t, I, B, tr) =>
					(Module._SearchSysCacheList = wasmExports.SearchSysCacheList)(e, t, I, B, tr)),
				(Module._ReleaseCatCacheList = (e) =>
					(Module._ReleaseCatCacheList = wasmExports.ReleaseCatCacheList)(e)),
				(Module._get_sortgroupref_tle = (e, t) =>
					(Module._get_sortgroupref_tle = wasmExports.get_sortgroupref_tle)(e, t)),
				(Module._type_is_rowtype = (e) =>
					(Module._type_is_rowtype = wasmExports.type_is_rowtype)(e)),
				(Module._bms_next_member = (e, t) =>
					(Module._bms_next_member = wasmExports.bms_next_member)(e, t)),
				(Module._MemoryContextReset = (e) =>
					(Module._MemoryContextReset = wasmExports.MemoryContextReset)(e)),
				(Module._abort = () => (Module._abort = wasmExports.abort)()),
				(Module._heap_getnext = (e, t) => (Module._heap_getnext = wasmExports.heap_getnext)(e, t)),
				(Module._OidOutputFunctionCall = (e, t) =>
					(Module._OidOutputFunctionCall = wasmExports.OidOutputFunctionCall)(e, t)),
				(Module._atoi = (e) => (Module._atoi = wasmExports.atoi)(e)),
				(Module._GetConfigOption = (e, t, I) =>
					(Module._GetConfigOption = wasmExports.GetConfigOption)(e, t, I)),
				(Module._pg_strong_random = (e, t) =>
					(Module._pg_strong_random = wasmExports.pg_strong_random)(e, t)),
				(Module._pg_prng_seed_check = (e) =>
					(Module._pg_prng_seed_check = wasmExports.pg_prng_seed_check)(e)),
				(Module._pg_prng_seed = (e, t) => (Module._pg_prng_seed = wasmExports.pg_prng_seed)(e, t)),
				(Module._fputc = (e, t) => (Module._fputc = wasmExports.fputc)(e, t)),
				(Module._time = (e) => (Module._time = wasmExports.time)(e)),
				(Module._TimestampDifferenceMilliseconds = (e, t) =>
					(Module._TimestampDifferenceMilliseconds = wasmExports.TimestampDifferenceMilliseconds)(
						e,
						t
					)),
				(Module._ProcessConfigFile = (e) =>
					(Module._ProcessConfigFile = wasmExports.ProcessConfigFile)(e)),
				(Module._send = (e, t, I, B) => (Module._send = wasmExports.send)(e, t, I, B)),
				(Module._parse_bool = (e, t) => (Module._parse_bool = wasmExports.parse_bool)(e, t)),
				(Module._enlargeStringInfo = (e, t) =>
					(Module._enlargeStringInfo = wasmExports.enlargeStringInfo)(e, t)),
				(Module._BackgroundWorkerInitializeConnectionByOid = (e, t, I) =>
					(Module._BackgroundWorkerInitializeConnectionByOid =
						wasmExports.BackgroundWorkerInitializeConnectionByOid)(e, t, I)),
				(Module._BackgroundWorkerUnblockSignals = () =>
					(Module._BackgroundWorkerUnblockSignals = wasmExports.BackgroundWorkerUnblockSignals)()),
				(Module._pg_getnameinfo_all = (e, t, I, B, tr, rr, ir) =>
					(Module._pg_getnameinfo_all = wasmExports.pg_getnameinfo_all)(e, t, I, B, tr, rr, ir)),
				(Module._gai_strerror = (e) => (Module._gai_strerror = wasmExports.gai_strerror)(e)),
				(Module._SignalHandlerForConfigReload = (e) =>
					(Module._SignalHandlerForConfigReload = wasmExports.SignalHandlerForConfigReload)(e)),
				(Module._fwrite = (e, t, I, B) => (Module._fwrite = wasmExports.fwrite)(e, t, I, B)),
				(Module._SignalHandlerForShutdownRequest = (e) =>
					(Module._SignalHandlerForShutdownRequest = wasmExports.SignalHandlerForShutdownRequest)(
						e
					)),
				(Module._EmitErrorReport = () => (Module._EmitErrorReport = wasmExports.EmitErrorReport)()),
				(Module._FlushErrorState = () => (Module._FlushErrorState = wasmExports.FlushErrorState)()),
				(Module._die = (e) => (Module._die = wasmExports.die)(e)),
				(Module._MultiXactIdPrecedes = (e, t) =>
					(Module._MultiXactIdPrecedes = wasmExports.MultiXactIdPrecedes)(e, t)),
				(Module._CreateTupleDescCopy = (e) =>
					(Module._CreateTupleDescCopy = wasmExports.CreateTupleDescCopy)(e)),
				(Module._pgstat_report_activity = (e, t) =>
					(Module._pgstat_report_activity = wasmExports.pgstat_report_activity)(e, t)),
				(Module._DirectFunctionCall2Coll = (e, t, I, B) =>
					(Module._DirectFunctionCall2Coll = wasmExports.DirectFunctionCall2Coll)(e, t, I, B)),
				(Module._RegisterBackgroundWorker = (e) =>
					(Module._RegisterBackgroundWorker = wasmExports.RegisterBackgroundWorker)(e)),
				(Module._RegisterDynamicBackgroundWorker = (e, t) =>
					(Module._RegisterDynamicBackgroundWorker = wasmExports.RegisterDynamicBackgroundWorker)(
						e,
						t
					)),
				(Module._WaitForBackgroundWorkerStartup = (e, t) =>
					(Module._WaitForBackgroundWorkerStartup = wasmExports.WaitForBackgroundWorkerStartup)(
						e,
						t
					)),
				(Module._WaitForBackgroundWorkerShutdown = (e) =>
					(Module._WaitForBackgroundWorkerShutdown = wasmExports.WaitForBackgroundWorkerShutdown)(
						e
					)),
				(Module._GetXLogReplayRecPtr = (e) =>
					(Module._GetXLogReplayRecPtr = wasmExports.GetXLogReplayRecPtr)(e)),
				(Module._gettimeofday = (e, t) => (Module._gettimeofday = wasmExports.gettimeofday)(e, t)),
				(Module._sscanf = (e, t, I) => (Module._sscanf = wasmExports.sscanf)(e, t, I)),
				(Module._get_call_result_type = (e, t, I) =>
					(Module._get_call_result_type = wasmExports.get_call_result_type)(e, t, I)),
				(Module._HeapTupleHeaderGetDatum = (e) =>
					(Module._HeapTupleHeaderGetDatum = wasmExports.HeapTupleHeaderGetDatum)(e)),
				(Module._wal_segment_close = (e) =>
					(Module._wal_segment_close = wasmExports.wal_segment_close)(e)),
				(Module._wal_segment_open = (e, t, I) =>
					(Module._wal_segment_open = wasmExports.wal_segment_open)(e, t, I)),
				(Module._GetFlushRecPtr = (e) => (Module._GetFlushRecPtr = wasmExports.GetFlushRecPtr)(e)),
				(Module._XLogReadRecord = (e, t) =>
					(Module._XLogReadRecord = wasmExports.XLogReadRecord)(e, t)),
				(Module._RmgrNotFound = (e) => (Module._RmgrNotFound = wasmExports.RmgrNotFound)(e)),
				(Module._CacheRegisterRelcacheCallback = (e, t) =>
					(Module._CacheRegisterRelcacheCallback = wasmExports.CacheRegisterRelcacheCallback)(
						e,
						t
					)),
				(Module._free_attrmap = (e) => (Module._free_attrmap = wasmExports.free_attrmap)(e)),
				(Module._BuildIndexInfo = (e) => (Module._BuildIndexInfo = wasmExports.BuildIndexInfo)(e)),
				(Module._hash_seq_term = (e) => (Module._hash_seq_term = wasmExports.hash_seq_term)(e)),
				(Module._PushActiveSnapshot = (e) =>
					(Module._PushActiveSnapshot = wasmExports.PushActiveSnapshot)(e)),
				(Module._PopActiveSnapshot = () =>
					(Module._PopActiveSnapshot = wasmExports.PopActiveSnapshot)()),
				(Module._MakePerTupleExprContext = (e) =>
					(Module._MakePerTupleExprContext = wasmExports.MakePerTupleExprContext)(e)),
				(Module._ExecInitExpr = (e, t) => (Module._ExecInitExpr = wasmExports.ExecInitExpr)(e, t)),
				(Module._FreeExecutorState = (e) =>
					(Module._FreeExecutorState = wasmExports.FreeExecutorState)(e)),
				(Module._list_member_oid = (e, t) =>
					(Module._list_member_oid = wasmExports.list_member_oid)(e, t)),
				(Module._MemoryContextStrdup = (e, t) =>
					(Module._MemoryContextStrdup = wasmExports.MemoryContextStrdup)(e, t)),
				(Module._pq_getmsgint = (e, t) => (Module._pq_getmsgint = wasmExports.pq_getmsgint)(e, t)),
				(Module._CreateExecutorState = () =>
					(Module._CreateExecutorState = wasmExports.CreateExecutorState)()),
				(Module._ExecInitRangeTable = (e, t, I) =>
					(Module._ExecInitRangeTable = wasmExports.ExecInitRangeTable)(e, t, I)),
				(Module._getTypeInputInfo = (e, t, I) =>
					(Module._getTypeInputInfo = wasmExports.getTypeInputInfo)(e, t, I)),
				(Module._ExecStoreVirtualTuple = (e) =>
					(Module._ExecStoreVirtualTuple = wasmExports.ExecStoreVirtualTuple)(e)),
				(Module._execute_attr_map_slot = (e, t, I) =>
					(Module._execute_attr_map_slot = wasmExports.execute_attr_map_slot)(e, t, I)),
				(Module._slot_getsomeattrs_int = (e, t) =>
					(Module._slot_getsomeattrs_int = wasmExports.slot_getsomeattrs_int)(e, t)),
				(Module._GetUserNameFromId = (e, t) =>
					(Module._GetUserNameFromId = wasmExports.GetUserNameFromId)(e, t)),
				(Module._makeStringInfo = () => (Module._makeStringInfo = wasmExports.makeStringInfo)()),
				(Module._list_member_xid = (e, t) =>
					(Module._list_member_xid = wasmExports.list_member_xid)(e, t)),
				(Module._lappend_xid = (e, t) => (Module._lappend_xid = wasmExports.lappend_xid)(e, t)),
				(Module._tuplestore_end = (e) => (Module._tuplestore_end = wasmExports.tuplestore_end)(e)),
				(Module._quote_literal_cstr = (e) =>
					(Module._quote_literal_cstr = wasmExports.quote_literal_cstr)(e)),
				(Module._MakeSingleTupleTableSlot = (e, t) =>
					(Module._MakeSingleTupleTableSlot = wasmExports.MakeSingleTupleTableSlot)(e, t)),
				(Module._ExecDropSingleTupleTableSlot = (e) =>
					(Module._ExecDropSingleTupleTableSlot = wasmExports.ExecDropSingleTupleTableSlot)(e)),
				(Module._tuplestore_tuple_count = (e) =>
					(Module._tuplestore_tuple_count = wasmExports.tuplestore_tuple_count)(e)),
				(Module._quote_identifier = (e) =>
					(Module._quote_identifier = wasmExports.quote_identifier)(e)),
				(Module._BeginCopyFrom = (e, t, I, B, tr, rr, ir, lr) =>
					(Module._BeginCopyFrom = wasmExports.BeginCopyFrom)(e, t, I, B, tr, rr, ir, lr)),
				(Module._array_contains_nulls = (e) =>
					(Module._array_contains_nulls = wasmExports.array_contains_nulls)(e)),
				(Module._format_procedure = (e) =>
					(Module._format_procedure = wasmExports.format_procedure)(e)),
				(Module._pg_detoast_datum_packed = (e) =>
					(Module._pg_detoast_datum_packed = wasmExports.pg_detoast_datum_packed)(e)),
				(Module._cstring_to_text_with_len = (e, t) =>
					(Module._cstring_to_text_with_len = wasmExports.cstring_to_text_with_len)(e, t)),
				(Module._GenerationContextCreate = (e, t, I, B, tr) =>
					(Module._GenerationContextCreate = wasmExports.GenerationContextCreate)(e, t, I, B, tr)),
				(Module._BeginInternalSubTransaction = (e) =>
					(Module._BeginInternalSubTransaction = wasmExports.BeginInternalSubTransaction)(e)),
				(Module._RollbackAndReleaseCurrentSubTransaction = () =>
					(Module._RollbackAndReleaseCurrentSubTransaction =
						wasmExports.RollbackAndReleaseCurrentSubTransaction)()),
				(Module._CopyErrorData = () => (Module._CopyErrorData = wasmExports.CopyErrorData)()),
				(Module._FreeErrorData = (e) => (Module._FreeErrorData = wasmExports.FreeErrorData)(e)),
				(Module._RelidByRelfilenumber = (e, t) =>
					(Module._RelidByRelfilenumber = wasmExports.RelidByRelfilenumber)(e, t)),
				(Module._RelationIdGetRelation = (e) =>
					(Module._RelationIdGetRelation = wasmExports.RelationIdGetRelation)(e)),
				(Module._heap_deform_tuple = (e, t, I, B) =>
					(Module._heap_deform_tuple = wasmExports.heap_deform_tuple)(e, t, I, B)),
				(Module._RelationClose = (e) => (Module._RelationClose = wasmExports.RelationClose)(e)),
				(Module._nocachegetattr = (e, t, I) =>
					(Module._nocachegetattr = wasmExports.nocachegetattr)(e, t, I)),
				(Module._XLogReaderAllocate = (e, t, I, B) =>
					(Module._XLogReaderAllocate = wasmExports.XLogReaderAllocate)(e, t, I, B)),
				(Module._XLogReaderFree = (e) => (Module._XLogReaderFree = wasmExports.XLogReaderFree)(e)),
				(Module._OutputPluginPrepareWrite = (e, t) =>
					(Module._OutputPluginPrepareWrite = wasmExports.OutputPluginPrepareWrite)(e, t)),
				(Module._OutputPluginWrite = (e, t) =>
					(Module._OutputPluginWrite = wasmExports.OutputPluginWrite)(e, t)),
				(Module._OutputPluginUpdateProgress = (e, t) =>
					(Module._OutputPluginUpdateProgress = wasmExports.OutputPluginUpdateProgress)(e, t)),
				(Module._replorigin_by_oid = (e, t, I) =>
					(Module._replorigin_by_oid = wasmExports.replorigin_by_oid)(e, t, I)),
				(Module._logicalrep_write_begin = (e, t) =>
					(Module._logicalrep_write_begin = wasmExports.logicalrep_write_begin)(e, t)),
				(Module._logicalrep_write_commit = (e, t, I) =>
					(Module._logicalrep_write_commit = wasmExports.logicalrep_write_commit)(e, t, I)),
				(Module._logicalrep_write_begin_prepare = (e, t) =>
					(Module._logicalrep_write_begin_prepare = wasmExports.logicalrep_write_begin_prepare)(
						e,
						t
					)),
				(Module._logicalrep_write_prepare = (e, t, I) =>
					(Module._logicalrep_write_prepare = wasmExports.logicalrep_write_prepare)(e, t, I)),
				(Module._logicalrep_write_commit_prepared = (e, t, I) =>
					(Module._logicalrep_write_commit_prepared = wasmExports.logicalrep_write_commit_prepared)(
						e,
						t,
						I
					)),
				(Module._logicalrep_write_rollback_prepared = (e, t, I, B) =>
					(Module._logicalrep_write_rollback_prepared =
						wasmExports.logicalrep_write_rollback_prepared)(e, t, I, B)),
				(Module._logicalrep_write_stream_prepare = (e, t, I) =>
					(Module._logicalrep_write_stream_prepare = wasmExports.logicalrep_write_stream_prepare)(
						e,
						t,
						I
					)),
				(Module._logicalrep_write_origin = (e, t, I) =>
					(Module._logicalrep_write_origin = wasmExports.logicalrep_write_origin)(e, t, I)),
				(Module._logicalrep_write_insert = (e, t, I, B, tr, rr) =>
					(Module._logicalrep_write_insert = wasmExports.logicalrep_write_insert)(
						e,
						t,
						I,
						B,
						tr,
						rr
					)),
				(Module._logicalrep_write_update = (e, t, I, B, tr, rr, ir) =>
					(Module._logicalrep_write_update = wasmExports.logicalrep_write_update)(
						e,
						t,
						I,
						B,
						tr,
						rr,
						ir
					)),
				(Module._logicalrep_write_delete = (e, t, I, B, tr, rr) =>
					(Module._logicalrep_write_delete = wasmExports.logicalrep_write_delete)(
						e,
						t,
						I,
						B,
						tr,
						rr
					)),
				(Module._logicalrep_write_truncate = (e, t, I, B, tr, rr) =>
					(Module._logicalrep_write_truncate = wasmExports.logicalrep_write_truncate)(
						e,
						t,
						I,
						B,
						tr,
						rr
					)),
				(Module._logicalrep_write_message = (e, t, I, B, tr, rr, ir) =>
					(Module._logicalrep_write_message = wasmExports.logicalrep_write_message)(
						e,
						t,
						I,
						B,
						tr,
						rr,
						ir
					)),
				(Module._logicalrep_write_rel = (e, t, I, B) =>
					(Module._logicalrep_write_rel = wasmExports.logicalrep_write_rel)(e, t, I, B)),
				(Module._logicalrep_write_typ = (e, t, I) =>
					(Module._logicalrep_write_typ = wasmExports.logicalrep_write_typ)(e, t, I)),
				(Module._logicalrep_write_stream_start = (e, t, I) =>
					(Module._logicalrep_write_stream_start = wasmExports.logicalrep_write_stream_start)(
						e,
						t,
						I
					)),
				(Module._logicalrep_write_stream_stop = (e) =>
					(Module._logicalrep_write_stream_stop = wasmExports.logicalrep_write_stream_stop)(e)),
				(Module._logicalrep_write_stream_commit = (e, t, I) =>
					(Module._logicalrep_write_stream_commit = wasmExports.logicalrep_write_stream_commit)(
						e,
						t,
						I
					)),
				(Module._logicalrep_write_stream_abort = (e, t, I, B, tr, rr) =>
					(Module._logicalrep_write_stream_abort = wasmExports.logicalrep_write_stream_abort)(
						e,
						t,
						I,
						B,
						tr,
						rr
					)),
				(Module._ProcessWalRcvInterrupts = () =>
					(Module._ProcessWalRcvInterrupts = wasmExports.ProcessWalRcvInterrupts)()),
				(Module._timestamptz_to_str = (e) =>
					(Module._timestamptz_to_str = wasmExports.timestamptz_to_str)(e)),
				(Module._GetDatabaseEncodingName = () =>
					(Module._GetDatabaseEncodingName = wasmExports.GetDatabaseEncodingName)()),
				(Module._PQconnectStartParams = (e, t, I) =>
					(Module._PQconnectStartParams = wasmExports.PQconnectStartParams)(e, t, I)),
				(Module._PQstatus = (e) => (Module._PQstatus = wasmExports.PQstatus)(e)),
				(Module._PQsocket = (e) => (Module._PQsocket = wasmExports.PQsocket)(e)),
				(Module._PQconnectPoll = (e) => (Module._PQconnectPoll = wasmExports.PQconnectPoll)(e)),
				(Module._PQconnectionUsedPassword = (e) =>
					(Module._PQconnectionUsedPassword = wasmExports.PQconnectionUsedPassword)(e)),
				(Module._PQfinish = (e) => (Module._PQfinish = wasmExports.PQfinish)(e)),
				(Module._PQresultStatus = (e) => (Module._PQresultStatus = wasmExports.PQresultStatus)(e)),
				(Module._PQclear = (e) => (Module._PQclear = wasmExports.PQclear)(e)),
				(Module._PQerrorMessage = (e) => (Module._PQerrorMessage = wasmExports.PQerrorMessage)(e)),
				(Module._pchomp = (e) => (Module._pchomp = wasmExports.pchomp)(e)),
				(Module._PQnfields = (e) => (Module._PQnfields = wasmExports.PQnfields)(e)),
				(Module._PQntuples = (e) => (Module._PQntuples = wasmExports.PQntuples)(e)),
				(Module._PQgetvalue = (e, t, I) => (Module._PQgetvalue = wasmExports.PQgetvalue)(e, t, I)),
				(Module._pg_strtoint32 = (e) => (Module._pg_strtoint32 = wasmExports.pg_strtoint32)(e)),
				(Module._PQconsumeInput = (e) => (Module._PQconsumeInput = wasmExports.PQconsumeInput)(e)),
				(Module._pg_lsn_in = (e) => (Module._pg_lsn_in = wasmExports.pg_lsn_in)(e)),
				(Module._DirectFunctionCall1Coll = (e, t, I) =>
					(Module._DirectFunctionCall1Coll = wasmExports.DirectFunctionCall1Coll)(e, t, I)),
				(Module._PQgetisnull = (e, t, I) =>
					(Module._PQgetisnull = wasmExports.PQgetisnull)(e, t, I)),
				(Module._tuplestore_begin_heap = (e, t, I) =>
					(Module._tuplestore_begin_heap = wasmExports.tuplestore_begin_heap)(e, t, I)),
				(Module._TupleDescGetAttInMetadata = (e) =>
					(Module._TupleDescGetAttInMetadata = wasmExports.TupleDescGetAttInMetadata)(e)),
				(Module._BuildTupleFromCStrings = (e, t) =>
					(Module._BuildTupleFromCStrings = wasmExports.BuildTupleFromCStrings)(e, t)),
				(Module._tuplestore_puttuple = (e, t) =>
					(Module._tuplestore_puttuple = wasmExports.tuplestore_puttuple)(e, t)),
				(Module._PQresultErrorField = (e, t) =>
					(Module._PQresultErrorField = wasmExports.PQresultErrorField)(e, t)),
				(Module._PQsendQuery = (e, t) => (Module._PQsendQuery = wasmExports.PQsendQuery)(e, t)),
				(Module._PQisBusy = (e) => (Module._PQisBusy = wasmExports.PQisBusy)(e)),
				(Module._PQgetResult = (e) => (Module._PQgetResult = wasmExports.PQgetResult)(e)),
				(Module._ResourceOwnerDelete = (e) =>
					(Module._ResourceOwnerDelete = wasmExports.ResourceOwnerDelete)(e)),
				(Module._CreateDestReceiver = (e) =>
					(Module._CreateDestReceiver = wasmExports.CreateDestReceiver)(e)),
				(Module._defGetString = (e) => (Module._defGetString = wasmExports.defGetString)(e)),
				(Module._pg_md5_encrypt = (e, t, I, B, tr) =>
					(Module._pg_md5_encrypt = wasmExports.pg_md5_encrypt)(e, t, I, B, tr)),
				(Module._plain_crypt_verify = (e, t, I, B) =>
					(Module._plain_crypt_verify = wasmExports.plain_crypt_verify)(e, t, I, B)),
				(Module._pg_b64_enc_len = (e) => (Module._pg_b64_enc_len = wasmExports.pg_b64_enc_len)(e)),
				(Module._pg_b64_encode = (e, t, I, B) =>
					(Module._pg_b64_encode = wasmExports.pg_b64_encode)(e, t, I, B)),
				(Module._pg_b64_dec_len = (e) => (Module._pg_b64_dec_len = wasmExports.pg_b64_dec_len)(e)),
				(Module._pg_b64_decode = (e, t, I, B) =>
					(Module._pg_b64_decode = wasmExports.pg_b64_decode)(e, t, I, B)),
				(Module._pg_hmac_create = (e) => (Module._pg_hmac_create = wasmExports.pg_hmac_create)(e)),
				(Module._pg_hmac_init = (e, t, I) =>
					(Module._pg_hmac_init = wasmExports.pg_hmac_init)(e, t, I)),
				(Module._pg_hmac_update = (e, t, I) =>
					(Module._pg_hmac_update = wasmExports.pg_hmac_update)(e, t, I)),
				(Module._pg_hmac_final = (e, t, I) =>
					(Module._pg_hmac_final = wasmExports.pg_hmac_final)(e, t, I)),
				(Module._pg_hmac_error = (e) => (Module._pg_hmac_error = wasmExports.pg_hmac_error)(e)),
				(Module._pg_hmac_free = (e) => (Module._pg_hmac_free = wasmExports.pg_hmac_free)(e)),
				(Module._scram_H = (e, t, I, B, tr) =>
					(Module._scram_H = wasmExports.scram_H)(e, t, I, B, tr)),
				(Module._pg_saslprep = (e, t) => (Module._pg_saslprep = wasmExports.pg_saslprep)(e, t)),
				(Module._scram_build_secret = (e, t, I, B, tr, rr, ir) =>
					(Module._scram_build_secret = wasmExports.scram_build_secret)(e, t, I, B, tr, rr, ir)),
				(Module._scram_SaltedPassword = (e, t, I, B, tr, rr, ir, lr) =>
					(Module._scram_SaltedPassword = wasmExports.scram_SaltedPassword)(
						e,
						t,
						I,
						B,
						tr,
						rr,
						ir,
						lr
					)),
				(Module._scram_ServerKey = (e, t, I, B, tr) =>
					(Module._scram_ServerKey = wasmExports.scram_ServerKey)(e, t, I, B, tr)),
				(Module._strtol = (e, t, I) => (Module._strtol = wasmExports.strtol)(e, t, I)),
				(Module._replace_percent_placeholders = (e, t, I, B) =>
					(Module._replace_percent_placeholders = wasmExports.replace_percent_placeholders)(
						e,
						t,
						I,
						B
					)),
				(Module._fgets = (e, t, I) => (Module._fgets = wasmExports.fgets)(e, t, I)),
				(Module._explicit_bzero = (e, t) =>
					(Module._explicit_bzero = wasmExports.explicit_bzero)(e, t)),
				(Module._wait_result_to_str = (e) =>
					(Module._wait_result_to_str = wasmExports.wait_result_to_str)(e)),
				(Module._pg_strip_crlf = (e) => (Module._pg_strip_crlf = wasmExports.pg_strip_crlf)(e)),
				(Module._geteuid = () => (Module._geteuid = wasmExports.geteuid)()),
				(Module._getpeereid = (e, t, I) => (Module._getpeereid = wasmExports.getpeereid)(e, t, I)),
				(Module._pg_getaddrinfo_all = (e, t, I, B) =>
					(Module._pg_getaddrinfo_all = wasmExports.pg_getaddrinfo_all)(e, t, I, B)),
				(Module._socket = (e, t, I) => (Module._socket = wasmExports.socket)(e, t, I)),
				(Module._connect = (e, t, I) => (Module._connect = wasmExports.connect)(e, t, I)),
				(Module._recv = (e, t, I, B) => (Module._recv = wasmExports.recv)(e, t, I, B)),
				(Module._pg_freeaddrinfo_all = (e, t) =>
					(Module._pg_freeaddrinfo_all = wasmExports.pg_freeaddrinfo_all)(e, t)),
				(Module._pq_sendtext = (e, t, I) =>
					(Module._pq_sendtext = wasmExports.pq_sendtext)(e, t, I)),
				(Module._pq_sendfloat4 = (e, t) =>
					(Module._pq_sendfloat4 = wasmExports.pq_sendfloat4)(e, t)),
				(Module._pq_sendfloat8 = (e, t) =>
					(Module._pq_sendfloat8 = wasmExports.pq_sendfloat8)(e, t)),
				(Module._pq_begintypsend = (e) =>
					(Module._pq_begintypsend = wasmExports.pq_begintypsend)(e)),
				(Module._pq_endtypsend = (e) => (Module._pq_endtypsend = wasmExports.pq_endtypsend)(e)),
				(Module._pq_getmsgfloat4 = (e) =>
					(Module._pq_getmsgfloat4 = wasmExports.pq_getmsgfloat4)(e)),
				(Module._pq_getmsgfloat8 = (e) =>
					(Module._pq_getmsgfloat8 = wasmExports.pq_getmsgfloat8)(e)),
				(Module._pq_getmsgtext = (e, t, I) =>
					(Module._pq_getmsgtext = wasmExports.pq_getmsgtext)(e, t, I)),
				(Module._feof = (e) => (Module._feof = wasmExports.feof)(e)),
				(Module._pg_mb2wchar_with_len = (e, t, I) =>
					(Module._pg_mb2wchar_with_len = wasmExports.pg_mb2wchar_with_len)(e, t, I)),
				(Module._pg_regcomp = (e, t, I, B, tr) =>
					(Module._pg_regcomp = wasmExports.pg_regcomp)(e, t, I, B, tr)),
				(Module._pg_regerror = (e, t, I, B) =>
					(Module._pg_regerror = wasmExports.pg_regerror)(e, t, I, B)),
				(Module._get_role_oid = (e, t) => (Module._get_role_oid = wasmExports.get_role_oid)(e, t)),
				(Module._strcat = (e, t) => (Module._strcat = wasmExports.strcat)(e, t)),
				(Module._sigemptyset = (e) => (Module._sigemptyset = wasmExports.sigemptyset)(e)),
				(Module._be_lo_unlink = (e) => (Module._be_lo_unlink = wasmExports.be_lo_unlink)(e)),
				(Module._object_ownercheck = (e, t, I) =>
					(Module._object_ownercheck = wasmExports.object_ownercheck)(e, t, I)),
				(Module._text_to_cstring_buffer = (e, t, I) =>
					(Module._text_to_cstring_buffer = wasmExports.text_to_cstring_buffer)(e, t, I)),
				(Module._setsockopt = (e, t, I, B, tr) =>
					(Module._setsockopt = wasmExports.setsockopt)(e, t, I, B, tr)),
				(Module._getsockname = (e, t, I) =>
					(Module._getsockname = wasmExports.getsockname)(e, t, I)),
				(Module._pq_recvbuf_fill = (e, t) =>
					(Module._pq_recvbuf_fill = wasmExports.pq_recvbuf_fill)(e, t)),
				(Module._getsockopt = (e, t, I, B, tr) =>
					(Module._getsockopt = wasmExports.getsockopt)(e, t, I, B, tr)),
				(Module._getmissingattr = (e, t, I) =>
					(Module._getmissingattr = wasmExports.getmissingattr)(e, t, I)),
				(Module._get_rel_relkind = (e) =>
					(Module._get_rel_relkind = wasmExports.get_rel_relkind)(e)),
				(Module._MemoryContextSetIdentifier = (e, t) =>
					(Module._MemoryContextSetIdentifier = wasmExports.MemoryContextSetIdentifier)(e, t)),
				(Module._MemoryContextSetParent = (e, t) =>
					(Module._MemoryContextSetParent = wasmExports.MemoryContextSetParent)(e, t)),
				(Module._find_base_rel = (e, t) =>
					(Module._find_base_rel = wasmExports.find_base_rel)(e, t)),
				(Module._bms_equal = (e, t) => (Module._bms_equal = wasmExports.bms_equal)(e, t)),
				(Module._bms_num_members = (e) =>
					(Module._bms_num_members = wasmExports.bms_num_members)(e)),
				(Module._fmgr_info_copy = (e, t, I) =>
					(Module._fmgr_info_copy = wasmExports.fmgr_info_copy)(e, t, I)),
				(Module._fmgr_info_cxt = (e, t, I) =>
					(Module._fmgr_info_cxt = wasmExports.fmgr_info_cxt)(e, t, I)),
				(Module._get_typlenbyvalalign = (e, t, I, B) =>
					(Module._get_typlenbyvalalign = wasmExports.get_typlenbyvalalign)(e, t, I, B)),
				(Module._deconstruct_array = (e, t, I, B, tr, rr, ir, lr) =>
					(Module._deconstruct_array = wasmExports.deconstruct_array)(e, t, I, B, tr, rr, ir, lr)),
				(Module._datumCopy = (e, t, I) => (Module._datumCopy = wasmExports.datumCopy)(e, t, I)),
				(Module._qsort_arg = (e, t, I, B, tr) =>
					(Module._qsort_arg = wasmExports.qsort_arg)(e, t, I, B, tr)),
				(Module._FunctionCall2Coll = (e, t, I, B) =>
					(Module._FunctionCall2Coll = wasmExports.FunctionCall2Coll)(e, t, I, B)),
				(Module._datumIsEqual = (e, t, I, B) =>
					(Module._datumIsEqual = wasmExports.datumIsEqual)(e, t, I, B)),
				(Module._bms_overlap = (e, t) => (Module._bms_overlap = wasmExports.bms_overlap)(e, t)),
				(Module._ExecPrepareExpr = (e, t) =>
					(Module._ExecPrepareExpr = wasmExports.ExecPrepareExpr)(e, t)),
				(Module._RegisterSnapshot = (e) =>
					(Module._RegisterSnapshot = wasmExports.RegisterSnapshot)(e)),
				(Module._UnregisterSnapshot = (e) =>
					(Module._UnregisterSnapshot = wasmExports.UnregisterSnapshot)(e)),
				(Module._get_fn_expr_argtype = (e, t) =>
					(Module._get_fn_expr_argtype = wasmExports.get_fn_expr_argtype)(e, t)),
				(Module._get_opfamily_member = (e, t, I, B) =>
					(Module._get_opfamily_member = wasmExports.get_opfamily_member)(e, t, I, B)),
				(Module._init_MultiFuncCall = (e) =>
					(Module._init_MultiFuncCall = wasmExports.init_MultiFuncCall)(e)),
				(Module._per_MultiFuncCall = (e) =>
					(Module._per_MultiFuncCall = wasmExports.per_MultiFuncCall)(e)),
				(Module._end_MultiFuncCall = (e, t) =>
					(Module._end_MultiFuncCall = wasmExports.end_MultiFuncCall)(e, t)),
				(Module._textToQualifiedNameList = (e) =>
					(Module._textToQualifiedNameList = wasmExports.textToQualifiedNameList)(e)),
				(Module._FunctionCall1Coll = (e, t, I) =>
					(Module._FunctionCall1Coll = wasmExports.FunctionCall1Coll)(e, t, I)),
				(Module._DirectFunctionCall4Coll = (e, t, I, B, tr, rr) =>
					(Module._DirectFunctionCall4Coll = wasmExports.DirectFunctionCall4Coll)(
						e,
						t,
						I,
						B,
						tr,
						rr
					)),
				(Module._pg_mblen = (e) => (Module._pg_mblen = wasmExports.pg_mblen)(e)),
				(Module._tsearch_readline_begin = (e, t) =>
					(Module._tsearch_readline_begin = wasmExports.tsearch_readline_begin)(e, t)),
				(Module._tsearch_readline = (e) =>
					(Module._tsearch_readline = wasmExports.tsearch_readline)(e)),
				(Module._t_isspace = (e) => (Module._t_isspace = wasmExports.t_isspace)(e)),
				(Module._lowerstr = (e) => (Module._lowerstr = wasmExports.lowerstr)(e)),
				(Module._tsearch_readline_end = (e) =>
					(Module._tsearch_readline_end = wasmExports.tsearch_readline_end)(e)),
				(Module._t_isdigit = (e) => (Module._t_isdigit = wasmExports.t_isdigit)(e)),
				(Module._pnstrdup = (e, t) => (Module._pnstrdup = wasmExports.pnstrdup)(e, t)),
				(Module._get_tsearch_config_filename = (e, t) =>
					(Module._get_tsearch_config_filename = wasmExports.get_tsearch_config_filename)(e, t)),
				(Module._lookup_ts_dictionary_cache = (e) =>
					(Module._lookup_ts_dictionary_cache = wasmExports.lookup_ts_dictionary_cache)(e)),
				(Module._FunctionCall4Coll = (e, t, I, B, tr, rr) =>
					(Module._FunctionCall4Coll = wasmExports.FunctionCall4Coll)(e, t, I, B, tr, rr)),
				(Module._t_isalnum = (e) => (Module._t_isalnum = wasmExports.t_isalnum)(e)),
				(Module._isalnum = (e) => (Module._isalnum = wasmExports.isalnum)(e)),
				(Module._pg_any_to_server = (e, t, I) =>
					(Module._pg_any_to_server = wasmExports.pg_any_to_server)(e, t, I)),
				(Module._lowerstr_with_len = (e, t) =>
					(Module._lowerstr_with_len = wasmExports.lowerstr_with_len)(e, t)),
				(Module._tolower = (e) => (Module._tolower = wasmExports.tolower)(e)),
				(Module._readstoplist = (e, t, I) =>
					(Module._readstoplist = wasmExports.readstoplist)(e, t, I)),
				(Module._searchstoplist = (e, t) =>
					(Module._searchstoplist = wasmExports.searchstoplist)(e, t)),
				(Module._GetDatabaseEncoding = () =>
					(Module._GetDatabaseEncoding = wasmExports.GetDatabaseEncoding)()),
				(Module._vacuum_delay_point = () =>
					(Module._vacuum_delay_point = wasmExports.vacuum_delay_point)()),
				(Module._get_restriction_variable = (e, t, I, B, tr, rr) =>
					(Module._get_restriction_variable = wasmExports.get_restriction_variable)(
						e,
						t,
						I,
						B,
						tr,
						rr
					)),
				(Module._get_attstatsslot = (e, t, I, B, tr) =>
					(Module._get_attstatsslot = wasmExports.get_attstatsslot)(e, t, I, B, tr)),
				(Module._free_attstatsslot = (e) =>
					(Module._free_attstatsslot = wasmExports.free_attstatsslot)(e)),
				(Module._Float8GetDatum = (e) => (Module._Float8GetDatum = wasmExports.Float8GetDatum)(e)),
				(Module._ExecReScan = (e) => (Module._ExecReScan = wasmExports.ExecReScan)(e)),
				(Module._ExecAsyncResponse = (e) =>
					(Module._ExecAsyncResponse = wasmExports.ExecAsyncResponse)(e)),
				(Module._ExecAsyncRequestDone = (e, t) =>
					(Module._ExecAsyncRequestDone = wasmExports.ExecAsyncRequestDone)(e, t)),
				(Module._ExecAsyncRequestPending = (e) =>
					(Module._ExecAsyncRequestPending = wasmExports.ExecAsyncRequestPending)(e)),
				(Module._tuplesort_end = (e) => (Module._tuplesort_end = wasmExports.tuplesort_end)(e)),
				(Module._ExecInitExprList = (e, t) =>
					(Module._ExecInitExprList = wasmExports.ExecInitExprList)(e, t)),
				(Module._fmgr_info = (e, t) => (Module._fmgr_info = wasmExports.fmgr_info)(e, t)),
				(Module._get_typlenbyval = (e, t, I) =>
					(Module._get_typlenbyval = wasmExports.get_typlenbyval)(e, t, I)),
				(Module._ExecForceStoreHeapTuple = (e, t, I) =>
					(Module._ExecForceStoreHeapTuple = wasmExports.ExecForceStoreHeapTuple)(e, t, I)),
				(Module._tuplesort_performsort = (e) =>
					(Module._tuplesort_performsort = wasmExports.tuplesort_performsort)(e)),
				(Module._tuplesort_begin_heap = (e, t, I, B, tr, rr, ir, lr, dr) =>
					(Module._tuplesort_begin_heap = wasmExports.tuplesort_begin_heap)(
						e,
						t,
						I,
						B,
						tr,
						rr,
						ir,
						lr,
						dr
					)),
				(Module._MemoryContextMemAllocated = (e, t) =>
					(Module._MemoryContextMemAllocated = wasmExports.MemoryContextMemAllocated)(e, t)),
				(Module._tuplesort_gettupleslot = (e, t, I, B, tr) =>
					(Module._tuplesort_gettupleslot = wasmExports.tuplesort_gettupleslot)(e, t, I, B, tr)),
				(Module._tuplesort_puttupleslot = (e, t) =>
					(Module._tuplesort_puttupleslot = wasmExports.tuplesort_puttupleslot)(e, t)),
				(Module._ExecStoreAllNullTuple = (e) =>
					(Module._ExecStoreAllNullTuple = wasmExports.ExecStoreAllNullTuple)(e)),
				(Module._MakeExpandedObjectReadOnlyInternal = (e) =>
					(Module._MakeExpandedObjectReadOnlyInternal =
						wasmExports.MakeExpandedObjectReadOnlyInternal)(e)),
				(Module._BlessTupleDesc = (e) => (Module._BlessTupleDesc = wasmExports.BlessTupleDesc)(e)),
				(Module._pg_detoast_datum_copy = (e) =>
					(Module._pg_detoast_datum_copy = wasmExports.pg_detoast_datum_copy)(e)),
				(Module._construct_md_array = (e, t, I, B, tr, rr, ir, lr, dr) =>
					(Module._construct_md_array = wasmExports.construct_md_array)(
						e,
						t,
						I,
						B,
						tr,
						rr,
						ir,
						lr,
						dr
					)),
				(Module._ArrayGetNItems = (e, t) =>
					(Module._ArrayGetNItems = wasmExports.ArrayGetNItems)(e, t)),
				(Module._construct_empty_array = (e) =>
					(Module._construct_empty_array = wasmExports.construct_empty_array)(e)),
				(Module._DatumGetEOHP = (e) => (Module._DatumGetEOHP = wasmExports.DatumGetEOHP)(e)),
				(Module._expanded_record_fetch_tupdesc = (e) =>
					(Module._expanded_record_fetch_tupdesc = wasmExports.expanded_record_fetch_tupdesc)(e)),
				(Module._expanded_record_fetch_field = (e, t, I) =>
					(Module._expanded_record_fetch_field = wasmExports.expanded_record_fetch_field)(e, t, I)),
				(Module._execute_attr_map_tuple = (e, t) =>
					(Module._execute_attr_map_tuple = wasmExports.execute_attr_map_tuple)(e, t)),
				(Module._MemoryContextAllocExtended = (e, t, I) =>
					(Module._MemoryContextAllocExtended = wasmExports.MemoryContextAllocExtended)(e, t, I)),
				(Module._lookup_rowtype_tupdesc_domain = (e, t, I) =>
					(Module._lookup_rowtype_tupdesc_domain = wasmExports.lookup_rowtype_tupdesc_domain)(
						e,
						t,
						I
					)),
				(Module._MemoryContextGetParent = (e) =>
					(Module._MemoryContextGetParent = wasmExports.MemoryContextGetParent)(e)),
				(Module._DeleteExpandedObject = (e) =>
					(Module._DeleteExpandedObject = wasmExports.DeleteExpandedObject)(e)),
				(Module._InstrAlloc = (e, t, I) => (Module._InstrAlloc = wasmExports.InstrAlloc)(e, t, I)),
				(Module._ExprEvalPushStep = (e, t) =>
					(Module._ExprEvalPushStep = wasmExports.ExprEvalPushStep)(e, t)),
				(Module._getTypeOutputInfo = (e, t, I) =>
					(Module._getTypeOutputInfo = wasmExports.getTypeOutputInfo)(e, t, I)),
				(Module._ExecInitExprWithParams = (e, t) =>
					(Module._ExecInitExprWithParams = wasmExports.ExecInitExprWithParams)(e, t)),
				(Module._ExecOpenScanRelation = (e, t, I) =>
					(Module._ExecOpenScanRelation = wasmExports.ExecOpenScanRelation)(e, t, I)),
				(Module._FreeExprContext = (e, t) =>
					(Module._FreeExprContext = wasmExports.FreeExprContext)(e, t)),
				(Module._CreateExprContext = (e) =>
					(Module._CreateExprContext = wasmExports.CreateExprContext)(e)),
				(Module._ExecGetReturningSlot = (e, t) =>
					(Module._ExecGetReturningSlot = wasmExports.ExecGetReturningSlot)(e, t)),
				(Module._build_attrmap_by_name_if_req = (e, t, I) =>
					(Module._build_attrmap_by_name_if_req = wasmExports.build_attrmap_by_name_if_req)(
						e,
						t,
						I
					)),
				(Module._ExecGetResultRelCheckAsUser = (e, t) =>
					(Module._ExecGetResultRelCheckAsUser = wasmExports.ExecGetResultRelCheckAsUser)(e, t)),
				(Module._InstrEndLoop = (e) => (Module._InstrEndLoop = wasmExports.InstrEndLoop)(e)),
				(Module._ExecStoreHeapTuple = (e, t, I) =>
					(Module._ExecStoreHeapTuple = wasmExports.ExecStoreHeapTuple)(e, t, I)),
				(Module._get_partition_ancestors = (e) =>
					(Module._get_partition_ancestors = wasmExports.get_partition_ancestors)(e)),
				(Module._pull_varattnos = (e, t, I) =>
					(Module._pull_varattnos = wasmExports.pull_varattnos)(e, t, I)),
				(Module._ExecFindJunkAttributeInTlist = (e, t) =>
					(Module._ExecFindJunkAttributeInTlist = wasmExports.ExecFindJunkAttributeInTlist)(e, t)),
				(Module._visibilitymap_get_status = (e, t, I) =>
					(Module._visibilitymap_get_status = wasmExports.visibilitymap_get_status)(e, t, I)),
				(Module._index_deform_tuple = (e, t, I, B) =>
					(Module._index_deform_tuple = wasmExports.index_deform_tuple)(e, t, I, B)),
				(Module._LaunchParallelWorkers = (e) =>
					(Module._LaunchParallelWorkers = wasmExports.LaunchParallelWorkers)(e)),
				(Module._standard_ExecutorStart = (e, t) =>
					(Module._standard_ExecutorStart = wasmExports.standard_ExecutorStart)(e, t)),
				(Module._GetCommandTagName = (e) =>
					(Module._GetCommandTagName = wasmExports.GetCommandTagName)(e)),
				(Module._standard_ExecutorRun = (e, t, I, B) =>
					(Module._standard_ExecutorRun = wasmExports.standard_ExecutorRun)(e, t, I, B)),
				(Module._EnterParallelMode = () =>
					(Module._EnterParallelMode = wasmExports.EnterParallelMode)()),
				(Module._ExitParallelMode = () =>
					(Module._ExitParallelMode = wasmExports.ExitParallelMode)()),
				(Module._standard_ExecutorFinish = (e) =>
					(Module._standard_ExecutorFinish = wasmExports.standard_ExecutorFinish)(e)),
				(Module._standard_ExecutorEnd = (e) =>
					(Module._standard_ExecutorEnd = wasmExports.standard_ExecutorEnd)(e)),
				(Module._MakeTupleTableSlot = (e, t) =>
					(Module._MakeTupleTableSlot = wasmExports.MakeTupleTableSlot)(e, t)),
				(Module._CreateParallelContext = (e, t, I) =>
					(Module._CreateParallelContext = wasmExports.CreateParallelContext)(e, t, I)),
				(Module._InitializeParallelDSM = (e) =>
					(Module._InitializeParallelDSM = wasmExports.InitializeParallelDSM)(e)),
				(Module._WaitForParallelWorkersToFinish = (e) =>
					(Module._WaitForParallelWorkersToFinish = wasmExports.WaitForParallelWorkersToFinish)(e)),
				(Module._DestroyParallelContext = (e) =>
					(Module._DestroyParallelContext = wasmExports.DestroyParallelContext)(e)),
				(Module._SPI_connect = () => (Module._SPI_connect = wasmExports.SPI_connect)()),
				(Module._SPI_connect_ext = (e) =>
					(Module._SPI_connect_ext = wasmExports.SPI_connect_ext)(e)),
				(Module._SPI_finish = () => (Module._SPI_finish = wasmExports.SPI_finish)()),
				(Module._SPI_commit = () => (Module._SPI_commit = wasmExports.SPI_commit)()),
				(Module._ReThrowError = (e) => (Module._ReThrowError = wasmExports.ReThrowError)(e)),
				(Module._SPI_commit_and_chain = () =>
					(Module._SPI_commit_and_chain = wasmExports.SPI_commit_and_chain)()),
				(Module._SPI_rollback = () => (Module._SPI_rollback = wasmExports.SPI_rollback)()),
				(Module._SPI_rollback_and_chain = () =>
					(Module._SPI_rollback_and_chain = wasmExports.SPI_rollback_and_chain)()),
				(Module._SPI_execute = (e, t, I) =>
					(Module._SPI_execute = wasmExports.SPI_execute)(e, t, I)),
				(Module._EnsurePortalSnapshotExists = () =>
					(Module._EnsurePortalSnapshotExists = wasmExports.EnsurePortalSnapshotExists)()),
				(Module._SPI_freetuptable = (e) =>
					(Module._SPI_freetuptable = wasmExports.SPI_freetuptable)(e)),
				(Module._ReleaseCachedPlan = (e, t) =>
					(Module._ReleaseCachedPlan = wasmExports.ReleaseCachedPlan)(e, t)),
				(Module._SPI_exec = (e, t) => (Module._SPI_exec = wasmExports.SPI_exec)(e, t)),
				(Module._SPI_execute_extended = (e, t) =>
					(Module._SPI_execute_extended = wasmExports.SPI_execute_extended)(e, t)),
				(Module._makeParamList = (e) => (Module._makeParamList = wasmExports.makeParamList)(e)),
				(Module._SPI_execp = (e, t, I, B) =>
					(Module._SPI_execp = wasmExports.SPI_execp)(e, t, I, B)),
				(Module._SPI_execute_plan_extended = (e, t) =>
					(Module._SPI_execute_plan_extended = wasmExports.SPI_execute_plan_extended)(e, t)),
				(Module._SPI_execute_plan_with_paramlist = (e, t, I, B) =>
					(Module._SPI_execute_plan_with_paramlist = wasmExports.SPI_execute_plan_with_paramlist)(
						e,
						t,
						I,
						B
					)),
				(Module._SPI_prepare = (e, t, I) =>
					(Module._SPI_prepare = wasmExports.SPI_prepare)(e, t, I)),
				(Module._SPI_prepare_extended = (e, t) =>
					(Module._SPI_prepare_extended = wasmExports.SPI_prepare_extended)(e, t)),
				(Module._SPI_keepplan = (e) => (Module._SPI_keepplan = wasmExports.SPI_keepplan)(e)),
				(Module._SPI_freeplan = (e) => (Module._SPI_freeplan = wasmExports.SPI_freeplan)(e)),
				(Module._SPI_copytuple = (e) => (Module._SPI_copytuple = wasmExports.SPI_copytuple)(e)),
				(Module._SPI_returntuple = (e, t) =>
					(Module._SPI_returntuple = wasmExports.SPI_returntuple)(e, t)),
				(Module._SPI_fnumber = (e, t) => (Module._SPI_fnumber = wasmExports.SPI_fnumber)(e, t)),
				(Module._SPI_fname = (e, t) => (Module._SPI_fname = wasmExports.SPI_fname)(e, t)),
				(Module._SPI_getvalue = (e, t, I) =>
					(Module._SPI_getvalue = wasmExports.SPI_getvalue)(e, t, I)),
				(Module._SPI_getbinval = (e, t, I, B) =>
					(Module._SPI_getbinval = wasmExports.SPI_getbinval)(e, t, I, B)),
				(Module._SPI_gettype = (e, t) => (Module._SPI_gettype = wasmExports.SPI_gettype)(e, t)),
				(Module._SPI_gettypeid = (e, t) =>
					(Module._SPI_gettypeid = wasmExports.SPI_gettypeid)(e, t)),
				(Module._SPI_getrelname = (e) => (Module._SPI_getrelname = wasmExports.SPI_getrelname)(e)),
				(Module._SPI_palloc = (e) => (Module._SPI_palloc = wasmExports.SPI_palloc)(e)),
				(Module._SPI_datumTransfer = (e, t, I) =>
					(Module._SPI_datumTransfer = wasmExports.SPI_datumTransfer)(e, t, I)),
				(Module._datumTransfer = (e, t, I) =>
					(Module._datumTransfer = wasmExports.datumTransfer)(e, t, I)),
				(Module._SPI_cursor_open_with_paramlist = (e, t, I, B) =>
					(Module._SPI_cursor_open_with_paramlist = wasmExports.SPI_cursor_open_with_paramlist)(
						e,
						t,
						I,
						B
					)),
				(Module._SPI_cursor_parse_open = (e, t, I) =>
					(Module._SPI_cursor_parse_open = wasmExports.SPI_cursor_parse_open)(e, t, I)),
				(Module._SPI_cursor_find = (e) =>
					(Module._SPI_cursor_find = wasmExports.SPI_cursor_find)(e)),
				(Module._SPI_cursor_fetch = (e, t, I) =>
					(Module._SPI_cursor_fetch = wasmExports.SPI_cursor_fetch)(e, t, I)),
				(Module._SPI_scroll_cursor_fetch = (e, t, I) =>
					(Module._SPI_scroll_cursor_fetch = wasmExports.SPI_scroll_cursor_fetch)(e, t, I)),
				(Module._SPI_scroll_cursor_move = (e, t, I) =>
					(Module._SPI_scroll_cursor_move = wasmExports.SPI_scroll_cursor_move)(e, t, I)),
				(Module._SPI_cursor_close = (e) =>
					(Module._SPI_cursor_close = wasmExports.SPI_cursor_close)(e)),
				(Module._SPI_result_code_string = (e) =>
					(Module._SPI_result_code_string = wasmExports.SPI_result_code_string)(e)),
				(Module._SPI_plan_get_plan_sources = (e) =>
					(Module._SPI_plan_get_plan_sources = wasmExports.SPI_plan_get_plan_sources)(e)),
				(Module._SPI_plan_get_cached_plan = (e) =>
					(Module._SPI_plan_get_cached_plan = wasmExports.SPI_plan_get_cached_plan)(e)),
				(Module._geterrposition = () => (Module._geterrposition = wasmExports.geterrposition)()),
				(Module._internalerrposition = (e) =>
					(Module._internalerrposition = wasmExports.internalerrposition)(e)),
				(Module._internalerrquery = (e) =>
					(Module._internalerrquery = wasmExports.internalerrquery)(e)),
				(Module._SPI_register_trigger_data = (e) =>
					(Module._SPI_register_trigger_data = wasmExports.SPI_register_trigger_data)(e)),
				(Module._EOH_get_flat_size = (e) =>
					(Module._EOH_get_flat_size = wasmExports.EOH_get_flat_size)(e)),
				(Module._EOH_flatten_into = (e, t, I) =>
					(Module._EOH_flatten_into = wasmExports.EOH_flatten_into)(e, t, I)),
				(Module._ExecFetchSlotHeapTuple = (e, t, I) =>
					(Module._ExecFetchSlotHeapTuple = wasmExports.ExecFetchSlotHeapTuple)(e, t, I)),
				(Module._InputFunctionCall = (e, t, I, B) =>
					(Module._InputFunctionCall = wasmExports.InputFunctionCall)(e, t, I, B)),
				(Module._convert_tuples_by_position = (e, t, I) =>
					(Module._convert_tuples_by_position = wasmExports.convert_tuples_by_position)(e, t, I)),
				(Module._SetTuplestoreDestReceiverParams = (e, t, I, B, tr, rr) =>
					(Module._SetTuplestoreDestReceiverParams = wasmExports.SetTuplestoreDestReceiverParams)(
						e,
						t,
						I,
						B,
						tr,
						rr
					)),
				(Module._detoast_external_attr = (e) =>
					(Module._detoast_external_attr = wasmExports.detoast_external_attr)(e)),
				(Module._bms_nonempty_difference = (e, t) =>
					(Module._bms_nonempty_difference = wasmExports.bms_nonempty_difference)(e, t)),
				(Module._table_parallelscan_estimate = (e, t) =>
					(Module._table_parallelscan_estimate = wasmExports.table_parallelscan_estimate)(e, t)),
				(Module._table_parallelscan_initialize = (e, t, I) =>
					(Module._table_parallelscan_initialize = wasmExports.table_parallelscan_initialize)(
						e,
						t,
						I
					)),
				(Module._table_beginscan_parallel = (e, t) =>
					(Module._table_beginscan_parallel = wasmExports.table_beginscan_parallel)(e, t)),
				(Module._BufferUsageAccumDiff = (e, t, I) =>
					(Module._BufferUsageAccumDiff = wasmExports.BufferUsageAccumDiff)(e, t, I)),
				(Module._WalUsageAccumDiff = (e, t, I) =>
					(Module._WalUsageAccumDiff = wasmExports.WalUsageAccumDiff)(e, t, I)),
				(Module._InstrUpdateTupleCount = (e, t) =>
					(Module._InstrUpdateTupleCount = wasmExports.InstrUpdateTupleCount)(e, t)),
				(Module._tuplesort_reset = (e) =>
					(Module._tuplesort_reset = wasmExports.tuplesort_reset)(e)),
				(Module._get_call_expr_argtype = (e, t) =>
					(Module._get_call_expr_argtype = wasmExports.get_call_expr_argtype)(e, t)),
				(Module._get_typtype = (e) => (Module._get_typtype = wasmExports.get_typtype)(e)),
				(Module._pull_var_clause = (e, t) =>
					(Module._pull_var_clause = wasmExports.pull_var_clause)(e, t)),
				(Module._bms_is_subset = (e, t) =>
					(Module._bms_is_subset = wasmExports.bms_is_subset)(e, t)),
				(Module._bms_membership = (e) => (Module._bms_membership = wasmExports.bms_membership)(e)),
				(Module._make_restrictinfo = (e, t, I, B, tr, rr, ir, lr, dr, mr) =>
					(Module._make_restrictinfo = wasmExports.make_restrictinfo)(
						e,
						t,
						I,
						B,
						tr,
						rr,
						ir,
						lr,
						dr,
						mr
					)),
				(Module._GetSysCacheHashValue = (e, t, I, B, tr) =>
					(Module._GetSysCacheHashValue = wasmExports.GetSysCacheHashValue)(e, t, I, B, tr)),
				(Module._tlist_member = (e, t) => (Module._tlist_member = wasmExports.tlist_member)(e, t)),
				(Module._add_path = (e, t) => (Module._add_path = wasmExports.add_path)(e, t)),
				(Module._contain_mutable_functions = (e) =>
					(Module._contain_mutable_functions = wasmExports.contain_mutable_functions)(e)),
				(Module._make_orclause = (e) => (Module._make_orclause = wasmExports.make_orclause)(e)),
				(Module._extract_actual_clauses = (e, t) =>
					(Module._extract_actual_clauses = wasmExports.extract_actual_clauses)(e, t)),
				(Module._cost_sort = (e, t, I, B, tr, rr, ir, lr, dr) =>
					(Module._cost_sort = wasmExports.cost_sort)(e, t, I, B, tr, rr, ir, lr, dr)),
				(Module._pathkeys_contained_in = (e, t) =>
					(Module._pathkeys_contained_in = wasmExports.pathkeys_contained_in)(e, t)),
				(Module._change_plan_targetlist = (e, t, I) =>
					(Module._change_plan_targetlist = wasmExports.change_plan_targetlist)(e, t, I)),
				(Module._make_foreignscan = (e, t, I, B, tr, rr, ir, lr) =>
					(Module._make_foreignscan = wasmExports.make_foreignscan)(e, t, I, B, tr, rr, ir, lr)),
				(Module._list_member_ptr = (e, t) =>
					(Module._list_member_ptr = wasmExports.list_member_ptr)(e, t)),
				(Module._clamp_row_est = (e) => (Module._clamp_row_est = wasmExports.clamp_row_est)(e)),
				(Module._standard_planner = (e, t, I, B) =>
					(Module._standard_planner = wasmExports.standard_planner)(e, t, I, B)),
				(Module._estimate_expression_value = (e, t) =>
					(Module._estimate_expression_value = wasmExports.estimate_expression_value)(e, t)),
				(Module._add_new_columns_to_pathtarget = (e, t) =>
					(Module._add_new_columns_to_pathtarget = wasmExports.add_new_columns_to_pathtarget)(
						e,
						t
					)),
				(Module._get_sortgroupref_clause_noerr = (e, t) =>
					(Module._get_sortgroupref_clause_noerr = wasmExports.get_sortgroupref_clause_noerr)(
						e,
						t
					)),
				(Module._get_agg_clause_costs = (e, t, I) =>
					(Module._get_agg_clause_costs = wasmExports.get_agg_clause_costs)(e, t, I)),
				(Module._grouping_is_sortable = (e) =>
					(Module._grouping_is_sortable = wasmExports.grouping_is_sortable)(e)),
				(Module._create_sort_path = (e, t, I, B, tr) =>
					(Module._create_sort_path = wasmExports.create_sort_path)(e, t, I, B, tr)),
				(Module._copy_pathtarget = (e) =>
					(Module._copy_pathtarget = wasmExports.copy_pathtarget)(e)),
				(Module._get_sortgrouplist_exprs = (e, t) =>
					(Module._get_sortgrouplist_exprs = wasmExports.get_sortgrouplist_exprs)(e, t)),
				(Module._estimate_num_groups = (e, t, I, B, tr) =>
					(Module._estimate_num_groups = wasmExports.estimate_num_groups)(e, t, I, B, tr)),
				(Module._cost_qual_eval = (e, t, I) =>
					(Module._cost_qual_eval = wasmExports.cost_qual_eval)(e, t, I)),
				(Module._plan_create_index_workers = (e, t) =>
					(Module._plan_create_index_workers = wasmExports.plan_create_index_workers)(e, t)),
				(Module._create_projection_path = (e, t, I, B) =>
					(Module._create_projection_path = wasmExports.create_projection_path)(e, t, I, B)),
				(Module._get_plan_rowmark = (e, t) =>
					(Module._get_plan_rowmark = wasmExports.get_plan_rowmark)(e, t)),
				(Module._find_join_rel = (e, t) =>
					(Module._find_join_rel = wasmExports.find_join_rel)(e, t)),
				(Module._make_canonical_pathkey = (e, t, I, B, tr) =>
					(Module._make_canonical_pathkey = wasmExports.make_canonical_pathkey)(e, t, I, B, tr)),
				(Module._eclass_useful_for_merging = (e, t, I) =>
					(Module._eclass_useful_for_merging = wasmExports.eclass_useful_for_merging)(e, t, I)),
				(Module._update_mergeclause_eclasses = (e, t) =>
					(Module._update_mergeclause_eclasses = wasmExports.update_mergeclause_eclasses)(e, t)),
				(Module._clauselist_selectivity = (e, t, I, B, tr) =>
					(Module._clauselist_selectivity = wasmExports.clauselist_selectivity)(e, t, I, B, tr)),
				(Module._join_clause_is_movable_to = (e, t) =>
					(Module._join_clause_is_movable_to = wasmExports.join_clause_is_movable_to)(e, t)),
				(Module._generate_implied_equalities_for_column = (e, t, I, B, tr) =>
					(Module._generate_implied_equalities_for_column =
						wasmExports.generate_implied_equalities_for_column)(e, t, I, B, tr)),
				(Module._get_tablespace_page_costs = (e, t, I) =>
					(Module._get_tablespace_page_costs = wasmExports.get_tablespace_page_costs)(e, t, I)),
				(Module._set_baserel_size_estimates = (e, t) =>
					(Module._set_baserel_size_estimates = wasmExports.set_baserel_size_estimates)(e, t)),
				(Module._add_to_flat_tlist = (e, t) =>
					(Module._add_to_flat_tlist = wasmExports.add_to_flat_tlist)(e, t)),
				(Module._get_baserel_parampathinfo = (e, t, I) =>
					(Module._get_baserel_parampathinfo = wasmExports.get_baserel_parampathinfo)(e, t, I)),
				(Module._create_foreignscan_path = (e, t, I, B, tr, rr, ir, lr, dr, mr) =>
					(Module._create_foreignscan_path = wasmExports.create_foreignscan_path)(
						e,
						t,
						I,
						B,
						tr,
						rr,
						ir,
						lr,
						dr,
						mr
					)),
				(Module._create_foreign_join_path = (e, t, I, B, tr, rr, ir, lr, dr, mr) =>
					(Module._create_foreign_join_path = wasmExports.create_foreign_join_path)(
						e,
						t,
						I,
						B,
						tr,
						rr,
						ir,
						lr,
						dr,
						mr
					)),
				(Module._create_foreign_upper_path = (e, t, I, B, tr, rr, ir, lr, dr) =>
					(Module._create_foreign_upper_path = wasmExports.create_foreign_upper_path)(
						e,
						t,
						I,
						B,
						tr,
						rr,
						ir,
						lr,
						dr
					)),
				(Module._adjust_limit_rows_costs = (e, t, I, B, tr) =>
					(Module._adjust_limit_rows_costs = wasmExports.adjust_limit_rows_costs)(e, t, I, B, tr)),
				(Module._SearchSysCacheAttName = (e, t) =>
					(Module._SearchSysCacheAttName = wasmExports.SearchSysCacheAttName)(e, t)),
				(Module._get_translated_update_targetlist = (e, t, I, B) =>
					(Module._get_translated_update_targetlist = wasmExports.get_translated_update_targetlist)(
						e,
						t,
						I,
						B
					)),
				(Module._add_row_identity_var = (e, t, I, B) =>
					(Module._add_row_identity_var = wasmExports.add_row_identity_var)(e, t, I, B)),
				(Module._get_rel_all_updated_cols = (e, t) =>
					(Module._get_rel_all_updated_cols = wasmExports.get_rel_all_updated_cols)(e, t)),
				(Module._list_append_unique_ptr = (e, t) =>
					(Module._list_append_unique_ptr = wasmExports.list_append_unique_ptr)(e, t)),
				(Module._palloc_extended = (e, t) =>
					(Module._palloc_extended = wasmExports.palloc_extended)(e, t)),
				(Module._pg_reg_getinitialstate = (e) =>
					(Module._pg_reg_getinitialstate = wasmExports.pg_reg_getinitialstate)(e)),
				(Module._pg_reg_getfinalstate = (e) =>
					(Module._pg_reg_getfinalstate = wasmExports.pg_reg_getfinalstate)(e)),
				(Module._pg_reg_getnumoutarcs = (e, t) =>
					(Module._pg_reg_getnumoutarcs = wasmExports.pg_reg_getnumoutarcs)(e, t)),
				(Module._pg_reg_getoutarcs = (e, t, I, B) =>
					(Module._pg_reg_getoutarcs = wasmExports.pg_reg_getoutarcs)(e, t, I, B)),
				(Module._pg_reg_getnumcolors = (e) =>
					(Module._pg_reg_getnumcolors = wasmExports.pg_reg_getnumcolors)(e)),
				(Module._pg_reg_colorisbegin = (e, t) =>
					(Module._pg_reg_colorisbegin = wasmExports.pg_reg_colorisbegin)(e, t)),
				(Module._pg_reg_colorisend = (e, t) =>
					(Module._pg_reg_colorisend = wasmExports.pg_reg_colorisend)(e, t)),
				(Module._pg_reg_getnumcharacters = (e, t) =>
					(Module._pg_reg_getnumcharacters = wasmExports.pg_reg_getnumcharacters)(e, t)),
				(Module._pg_reg_getcharacters = (e, t, I, B) =>
					(Module._pg_reg_getcharacters = wasmExports.pg_reg_getcharacters)(e, t, I, B)),
				(Module._toupper = (e) => (Module._toupper = wasmExports.toupper)(e)),
				(Module._pg_initdb = () => (Module._pg_initdb = wasmExports.pg_initdb)()),
				(Module._pg_initdb_main = () => (Module._pg_initdb_main = wasmExports.pg_initdb_main)()),
				(Module.___cxa_throw = (e, t, I) =>
					(Module.___cxa_throw = wasmExports.__cxa_throw)(e, t, I)),
				(Module._main_repl = () => (Module._main_repl = wasmExports.main_repl)()),
				(Module._main = (e, t) => (Module._main = wasmExports.__main_argc_argv)(e, t)),
				(Module._setenv = (e, t, I) => (Module._setenv = wasmExports.setenv)(e, t, I)),
				(Module._pg_repl_raf = () => (Module._pg_repl_raf = wasmExports.pg_repl_raf)()),
				(Module._GetForeignDataWrapper = (e) =>
					(Module._GetForeignDataWrapper = wasmExports.GetForeignDataWrapper)(e)),
				(Module._GetForeignServer = (e) =>
					(Module._GetForeignServer = wasmExports.GetForeignServer)(e)),
				(Module._GetForeignServerExtended = (e, t) =>
					(Module._GetForeignServerExtended = wasmExports.GetForeignServerExtended)(e, t)),
				(Module._GetForeignServerByName = (e, t) =>
					(Module._GetForeignServerByName = wasmExports.GetForeignServerByName)(e, t)),
				(Module._GetUserMapping = (e, t) =>
					(Module._GetUserMapping = wasmExports.GetUserMapping)(e, t)),
				(Module._GetForeignTable = (e) =>
					(Module._GetForeignTable = wasmExports.GetForeignTable)(e)),
				(Module._GetForeignColumnOptions = (e, t) =>
					(Module._GetForeignColumnOptions = wasmExports.GetForeignColumnOptions)(e, t)),
				(Module._initClosestMatch = (e, t, I) =>
					(Module._initClosestMatch = wasmExports.initClosestMatch)(e, t, I)),
				(Module._updateClosestMatch = (e, t) =>
					(Module._updateClosestMatch = wasmExports.updateClosestMatch)(e, t)),
				(Module._getClosestMatch = (e) =>
					(Module._getClosestMatch = wasmExports.getClosestMatch)(e)),
				(Module._GetExistingLocalJoinPath = (e) =>
					(Module._GetExistingLocalJoinPath = wasmExports.GetExistingLocalJoinPath)(e)),
				(Module._BaseBackupAddTarget = (e, t, I) =>
					(Module._BaseBackupAddTarget = wasmExports.BaseBackupAddTarget)(e, t, I)),
				(Module._bbsink_forward_begin_backup = (e) =>
					(Module._bbsink_forward_begin_backup = wasmExports.bbsink_forward_begin_backup)(e)),
				(Module._bbsink_forward_archive_contents = (e, t) =>
					(Module._bbsink_forward_archive_contents = wasmExports.bbsink_forward_archive_contents)(
						e,
						t
					)),
				(Module._bbsink_forward_end_archive = (e) =>
					(Module._bbsink_forward_end_archive = wasmExports.bbsink_forward_end_archive)(e)),
				(Module._bbsink_forward_begin_archive = (e, t) =>
					(Module._bbsink_forward_begin_archive = wasmExports.bbsink_forward_begin_archive)(e, t)),
				(Module._bbsink_forward_begin_manifest = (e) =>
					(Module._bbsink_forward_begin_manifest = wasmExports.bbsink_forward_begin_manifest)(e)),
				(Module._bbsink_forward_manifest_contents = (e, t) =>
					(Module._bbsink_forward_manifest_contents = wasmExports.bbsink_forward_manifest_contents)(
						e,
						t
					)),
				(Module._bbsink_forward_end_manifest = (e) =>
					(Module._bbsink_forward_end_manifest = wasmExports.bbsink_forward_end_manifest)(e)),
				(Module._bbsink_forward_end_backup = (e, t, I) =>
					(Module._bbsink_forward_end_backup = wasmExports.bbsink_forward_end_backup)(e, t, I)),
				(Module._bbsink_forward_cleanup = (e) =>
					(Module._bbsink_forward_cleanup = wasmExports.bbsink_forward_cleanup)(e)),
				(Module._ResourceOwnerCreate = (e, t) =>
					(Module._ResourceOwnerCreate = wasmExports.ResourceOwnerCreate)(e, t)),
				(Module._escape_json = (e, t) => (Module._escape_json = wasmExports.escape_json)(e, t)),
				(Module._exprIsLengthCoercion = (e, t) =>
					(Module._exprIsLengthCoercion = wasmExports.exprIsLengthCoercion)(e, t)),
				(Module._tbm_add_tuples = (e, t, I, B) =>
					(Module._tbm_add_tuples = wasmExports.tbm_add_tuples)(e, t, I, B)),
				(Module._appendStringInfoStringQuoted = (e, t, I) =>
					(Module._appendStringInfoStringQuoted = wasmExports.appendStringInfoStringQuoted)(
						e,
						t,
						I
					)),
				(Module._list_make5_impl = (e, t, I, B, tr, rr) =>
					(Module._list_make5_impl = wasmExports.list_make5_impl)(e, t, I, B, tr, rr)),
				(Module._list_delete = (e, t) => (Module._list_delete = wasmExports.list_delete)(e, t)),
				(Module._CleanQuerytext = (e, t, I) =>
					(Module._CleanQuerytext = wasmExports.CleanQuerytext)(e, t, I)),
				(Module._EnableQueryId = () => (Module._EnableQueryId = wasmExports.EnableQueryId)()),
				(Module._get_rel_type_id = (e) =>
					(Module._get_rel_type_id = wasmExports.get_rel_type_id)(e)),
				(Module._set_config_option = (e, t, I, B, tr, rr, ir, lr) =>
					(Module._set_config_option = wasmExports.set_config_option)(e, t, I, B, tr, rr, ir, lr)),
				(Module._NewGUCNestLevel = () => (Module._NewGUCNestLevel = wasmExports.NewGUCNestLevel)()),
				(Module._AtEOXact_GUC = (e, t) => (Module._AtEOXact_GUC = wasmExports.AtEOXact_GUC)(e, t)),
				(Module._parse_int = (e, t, I, B) =>
					(Module._parse_int = wasmExports.parse_int)(e, t, I, B)),
				(Module._strtod = (e, t) => (Module._strtod = wasmExports.strtod)(e, t)),
				(Module._parse_real = (e, t, I, B) =>
					(Module._parse_real = wasmExports.parse_real)(e, t, I, B)),
				(Module._DefineCustomBoolVariable = (e, t, I, B, tr, rr, ir, lr, dr, mr) =>
					(Module._DefineCustomBoolVariable = wasmExports.DefineCustomBoolVariable)(
						e,
						t,
						I,
						B,
						tr,
						rr,
						ir,
						lr,
						dr,
						mr
					)),
				(Module._DefineCustomIntVariable = (e, t, I, B, tr, rr, ir, lr, dr, mr, _r, fr) =>
					(Module._DefineCustomIntVariable = wasmExports.DefineCustomIntVariable)(
						e,
						t,
						I,
						B,
						tr,
						rr,
						ir,
						lr,
						dr,
						mr,
						_r,
						fr
					)),
				(Module._DefineCustomRealVariable = (e, t, I, B, tr, rr, ir, lr, dr, mr, _r, fr) =>
					(Module._DefineCustomRealVariable = wasmExports.DefineCustomRealVariable)(
						e,
						t,
						I,
						B,
						tr,
						rr,
						ir,
						lr,
						dr,
						mr,
						_r,
						fr
					)),
				(Module._DefineCustomStringVariable = (e, t, I, B, tr, rr, ir, lr, dr, mr) =>
					(Module._DefineCustomStringVariable = wasmExports.DefineCustomStringVariable)(
						e,
						t,
						I,
						B,
						tr,
						rr,
						ir,
						lr,
						dr,
						mr
					)),
				(Module._DefineCustomEnumVariable = (e, t, I, B, tr, rr, ir, lr, dr, mr, _r) =>
					(Module._DefineCustomEnumVariable = wasmExports.DefineCustomEnumVariable)(
						e,
						t,
						I,
						B,
						tr,
						rr,
						ir,
						lr,
						dr,
						mr,
						_r
					)),
				(Module._MarkGUCPrefixReserved = (e) =>
					(Module._MarkGUCPrefixReserved = wasmExports.MarkGUCPrefixReserved)(e)),
				(Module._strcspn = (e, t) => (Module._strcspn = wasmExports.strcspn)(e, t)),
				(Module._BlockSampler_Init = (e, t, I, B) =>
					(Module._BlockSampler_Init = wasmExports.BlockSampler_Init)(e, t, I, B)),
				(Module._sampler_random_init_state = (e, t) =>
					(Module._sampler_random_init_state = wasmExports.sampler_random_init_state)(e, t)),
				(Module._BlockSampler_HasMore = (e) =>
					(Module._BlockSampler_HasMore = wasmExports.BlockSampler_HasMore)(e)),
				(Module._BlockSampler_Next = (e) =>
					(Module._BlockSampler_Next = wasmExports.BlockSampler_Next)(e)),
				(Module._sampler_random_fract = (e) =>
					(Module._sampler_random_fract = wasmExports.sampler_random_fract)(e)),
				(Module._reservoir_init_selection_state = (e, t) =>
					(Module._reservoir_init_selection_state = wasmExports.reservoir_init_selection_state)(
						e,
						t
					)),
				(Module._reservoir_get_next_S = (e, t, I) =>
					(Module._reservoir_get_next_S = wasmExports.reservoir_get_next_S)(e, t, I)),
				(Module._canonicalize_path = (e) =>
					(Module._canonicalize_path = wasmExports.canonicalize_path)(e)),
				(Module.__bt_mkscankey = (e, t) =>
					(Module.__bt_mkscankey = wasmExports._bt_mkscankey)(e, t)),
				(Module._nocache_index_getattr = (e, t, I) =>
					(Module._nocache_index_getattr = wasmExports.nocache_index_getattr)(e, t, I)),
				(Module._tuplesort_estimate_shared = (e) =>
					(Module._tuplesort_estimate_shared = wasmExports.tuplesort_estimate_shared)(e)),
				(Module._tuplesort_initialize_shared = (e, t, I) =>
					(Module._tuplesort_initialize_shared = wasmExports.tuplesort_initialize_shared)(e, t, I)),
				(Module._tuplesort_attach_shared = (e, t) =>
					(Module._tuplesort_attach_shared = wasmExports.tuplesort_attach_shared)(e, t)),
				(Module._GetCurrentTransactionNestLevel = () =>
					(Module._GetCurrentTransactionNestLevel = wasmExports.GetCurrentTransactionNestLevel)()),
				(Module._in_error_recursion_trouble = () =>
					(Module._in_error_recursion_trouble = wasmExports.in_error_recursion_trouble)()),
				(Module._strrchr = (e, t) => (Module._strrchr = wasmExports.strrchr)(e, t)),
				(Module._errhidestmt = (e) => (Module._errhidestmt = wasmExports.errhidestmt)(e)),
				(Module._err_generic_string = (e, t) =>
					(Module._err_generic_string = wasmExports.err_generic_string)(e, t)),
				(Module._getinternalerrposition = () =>
					(Module._getinternalerrposition = wasmExports.getinternalerrposition)()),
				(Module._GetErrorContextStack = () =>
					(Module._GetErrorContextStack = wasmExports.GetErrorContextStack)()),
				(Module._SplitIdentifierString = (e, t, I) =>
					(Module._SplitIdentifierString = wasmExports.SplitIdentifierString)(e, t, I)),
				(Module._appendStringInfoSpaces = (e, t) =>
					(Module._appendStringInfoSpaces = wasmExports.appendStringInfoSpaces)(e, t)),
				(Module._unpack_sql_state = (e) =>
					(Module._unpack_sql_state = wasmExports.unpack_sql_state)(e)),
				(Module._CreateTupleDescCopyConstr = (e) =>
					(Module._CreateTupleDescCopyConstr = wasmExports.CreateTupleDescCopyConstr)(e)),
				(Module._CachedPlanAllowsSimpleValidityCheck = (e, t, I) =>
					(Module._CachedPlanAllowsSimpleValidityCheck =
						wasmExports.CachedPlanAllowsSimpleValidityCheck)(e, t, I)),
				(Module._CachedPlanIsSimplyValid = (e, t, I) =>
					(Module._CachedPlanIsSimplyValid = wasmExports.CachedPlanIsSimplyValid)(e, t, I)),
				(Module._GetCachedExpression = (e) =>
					(Module._GetCachedExpression = wasmExports.GetCachedExpression)(e)),
				(Module._FreeCachedExpression = (e) =>
					(Module._FreeCachedExpression = wasmExports.FreeCachedExpression)(e)),
				(Module._MemoryContextDeleteChildren = (e) =>
					(Module._MemoryContextDeleteChildren = wasmExports.MemoryContextDeleteChildren)(e)),
				(Module._is_publishable_relation = (e) =>
					(Module._is_publishable_relation = wasmExports.is_publishable_relation)(e)),
				(Module._GetRelationPublications = (e) =>
					(Module._GetRelationPublications = wasmExports.GetRelationPublications)(e)),
				(Module._GetSchemaPublications = (e) =>
					(Module._GetSchemaPublications = wasmExports.GetSchemaPublications)(e)),
				(Module._index_getprocid = (e, t, I) =>
					(Module._index_getprocid = wasmExports.index_getprocid)(e, t, I)),
				(Module._get_rel_relispartition = (e) =>
					(Module._get_rel_relispartition = wasmExports.get_rel_relispartition)(e)),
				(Module._get_func_namespace = (e) =>
					(Module._get_func_namespace = wasmExports.get_func_namespace)(e)),
				(Module._get_typsubscript = (e, t) =>
					(Module._get_typsubscript = wasmExports.get_typsubscript)(e, t)),
				(Module._get_namespace_name_or_temp = (e) =>
					(Module._get_namespace_name_or_temp = wasmExports.get_namespace_name_or_temp)(e)),
				(Module._texteq = (e) => (Module._texteq = wasmExports.texteq)(e)),
				(Module._GetUserIdAndSecContext = (e, t) =>
					(Module._GetUserIdAndSecContext = wasmExports.GetUserIdAndSecContext)(e, t)),
				(Module._SetUserIdAndSecContext = (e, t) =>
					(Module._SetUserIdAndSecContext = wasmExports.SetUserIdAndSecContext)(e, t)),
				(Module._DirectFunctionCall5Coll = (e, t, I, B, tr, rr, ir) =>
					(Module._DirectFunctionCall5Coll = wasmExports.DirectFunctionCall5Coll)(
						e,
						t,
						I,
						B,
						tr,
						rr,
						ir
					)),
				(Module._CallerFInfoFunctionCall2 = (e, t, I, B, tr) =>
					(Module._CallerFInfoFunctionCall2 = wasmExports.CallerFInfoFunctionCall2)(
						e,
						t,
						I,
						B,
						tr
					)),
				(Module._FunctionCall0Coll = (e, t) =>
					(Module._FunctionCall0Coll = wasmExports.FunctionCall0Coll)(e, t)),
				(Module._OutputFunctionCall = (e, t) =>
					(Module._OutputFunctionCall = wasmExports.OutputFunctionCall)(e, t)),
				(Module._get_fn_expr_rettype = (e) =>
					(Module._get_fn_expr_rettype = wasmExports.get_fn_expr_rettype)(e)),
				(Module._has_fn_opclass_options = (e) =>
					(Module._has_fn_opclass_options = wasmExports.has_fn_opclass_options)(e)),
				(Module._get_fn_opclass_options = (e) =>
					(Module._get_fn_opclass_options = wasmExports.get_fn_opclass_options)(e)),
				(Module._CheckFunctionValidatorAccess = (e, t) =>
					(Module._CheckFunctionValidatorAccess = wasmExports.CheckFunctionValidatorAccess)(e, t)),
				(Module._resolve_polymorphic_argtypes = (e, t, I, B) =>
					(Module._resolve_polymorphic_argtypes = wasmExports.resolve_polymorphic_argtypes)(
						e,
						t,
						I,
						B
					)),
				(Module._get_func_arg_info = (e, t, I, B) =>
					(Module._get_func_arg_info = wasmExports.get_func_arg_info)(e, t, I, B)),
				(Module._dlsym = (e, t) => (Module._dlsym = wasmExports.dlsym)(e, t)),
				(Module._dlopen = (e, t) => (Module._dlopen = wasmExports.dlopen)(e, t)),
				(Module._dlerror = () => (Module._dlerror = wasmExports.dlerror)()),
				(Module._dlclose = (e) => (Module._dlclose = wasmExports.dlclose)(e)),
				(Module._find_rendezvous_variable = (e) =>
					(Module._find_rendezvous_variable = wasmExports.find_rendezvous_variable)(e)),
				(Module._fscanf = (e, t, I) => (Module._fscanf = wasmExports.fscanf)(e, t, I)),
				(Module._strlcat = (e, t, I) => (Module._strlcat = wasmExports.strlcat)(e, t, I)),
				(Module._pg_bindtextdomain = (e) =>
					(Module._pg_bindtextdomain = wasmExports.pg_bindtextdomain)(e)),
				(Module._pg_do_encoding_conversion = (e, t, I, B) =>
					(Module._pg_do_encoding_conversion = wasmExports.pg_do_encoding_conversion)(e, t, I, B)),
				(Module._report_invalid_encoding = (e, t, I) =>
					(Module._report_invalid_encoding = wasmExports.report_invalid_encoding)(e, t, I)),
				(Module._pg_encoding_to_char_private = (e) =>
					(Module._pg_encoding_to_char_private = wasmExports.pg_encoding_to_char_private)(e)),
				(Module._MemoryContextAllocHuge = (e, t) =>
					(Module._MemoryContextAllocHuge = wasmExports.MemoryContextAllocHuge)(e, t)),
				(Module._namein = (e) => (Module._namein = wasmExports.namein)(e)),
				(Module._pg_char_to_encoding_private = (e) =>
					(Module._pg_char_to_encoding_private = wasmExports.pg_char_to_encoding_private)(e)),
				(Module._pg_encoding_max_length = (e) =>
					(Module._pg_encoding_max_length = wasmExports.pg_encoding_max_length)(e)),
				(Module._pg_server_to_any = (e, t, I) =>
					(Module._pg_server_to_any = wasmExports.pg_server_to_any)(e, t, I)),
				(Module._pg_utf_mblen = (e) => (Module._pg_utf_mblen = wasmExports.pg_utf_mblen)(e)),
				(Module._pg_wchar2mb_with_len = (e, t, I) =>
					(Module._pg_wchar2mb_with_len = wasmExports.pg_wchar2mb_with_len)(e, t, I)),
				(Module._pg_encoding_mblen = (e, t) =>
					(Module._pg_encoding_mblen = wasmExports.pg_encoding_mblen)(e, t)),
				(Module._check_encoding_conversion_args = (e, t, I, B, tr) =>
					(Module._check_encoding_conversion_args = wasmExports.check_encoding_conversion_args)(
						e,
						t,
						I,
						B,
						tr
					)),
				(Module._report_untranslatable_char = (e, t, I, B) =>
					(Module._report_untranslatable_char = wasmExports.report_untranslatable_char)(
						e,
						t,
						I,
						B
					)),
				(Module._local2local = (e, t, I, B, tr, rr, ir) =>
					(Module._local2local = wasmExports.local2local)(e, t, I, B, tr, rr, ir)),
				(Module._latin2mic = (e, t, I, B, tr, rr) =>
					(Module._latin2mic = wasmExports.latin2mic)(e, t, I, B, tr, rr)),
				(Module._mic2latin = (e, t, I, B, tr, rr) =>
					(Module._mic2latin = wasmExports.mic2latin)(e, t, I, B, tr, rr)),
				(Module._latin2mic_with_table = (e, t, I, B, tr, rr, ir) =>
					(Module._latin2mic_with_table = wasmExports.latin2mic_with_table)(
						e,
						t,
						I,
						B,
						tr,
						rr,
						ir
					)),
				(Module._mic2latin_with_table = (e, t, I, B, tr, rr, ir) =>
					(Module._mic2latin_with_table = wasmExports.mic2latin_with_table)(
						e,
						t,
						I,
						B,
						tr,
						rr,
						ir
					)),
				(Module._pg_encoding_verifymbchar = (e, t, I) =>
					(Module._pg_encoding_verifymbchar = wasmExports.pg_encoding_verifymbchar)(e, t, I)),
				(Module._float_overflow_error = () =>
					(Module._float_overflow_error = wasmExports.float_overflow_error)()),
				(Module._float_underflow_error = () =>
					(Module._float_underflow_error = wasmExports.float_underflow_error)()),
				(Module._float4in_internal = (e, t, I, B, tr) =>
					(Module._float4in_internal = wasmExports.float4in_internal)(e, t, I, B, tr)),
				(Module._strtof = (e, t) => (Module._strtof = wasmExports.strtof)(e, t)),
				(Module._float_to_shortest_decimal_buf = (e, t) =>
					(Module._float_to_shortest_decimal_buf = wasmExports.float_to_shortest_decimal_buf)(
						e,
						t
					)),
				(Module._float8in_internal = (e, t, I, B, tr) =>
					(Module._float8in_internal = wasmExports.float8in_internal)(e, t, I, B, tr)),
				(Module._float8out_internal = (e) =>
					(Module._float8out_internal = wasmExports.float8out_internal)(e)),
				(Module._btfloat4cmp = (e) => (Module._btfloat4cmp = wasmExports.btfloat4cmp)(e)),
				(Module._btfloat8cmp = (e) => (Module._btfloat8cmp = wasmExports.btfloat8cmp)(e)),
				(Module._pow = (e, t) => (Module._pow = wasmExports.pow)(e, t)),
				(Module._log10 = (e) => (Module._log10 = wasmExports.log10)(e)),
				(Module._acos = (e) => (Module._acos = wasmExports.acos)(e)),
				(Module._asin = (e) => (Module._asin = wasmExports.asin)(e)),
				(Module._cos = (e) => (Module._cos = wasmExports.cos)(e)),
				(Module._sin = (e) => (Module._sin = wasmExports.sin)(e)),
				(Module._fmod = (e, t) => (Module._fmod = wasmExports.fmod)(e, t)),
				(Module._construct_array = (e, t, I, B, tr, rr) =>
					(Module._construct_array = wasmExports.construct_array)(e, t, I, B, tr, rr)),
				(Module._try_relation_open = (e, t) =>
					(Module._try_relation_open = wasmExports.try_relation_open)(e, t)),
				(Module._forkname_to_number = (e) =>
					(Module._forkname_to_number = wasmExports.forkname_to_number)(e)),
				(Module._numeric_lt = (e) => (Module._numeric_lt = wasmExports.numeric_lt)(e)),
				(Module._int64_to_numeric = (e) =>
					(Module._int64_to_numeric = wasmExports.int64_to_numeric)(e)),
				(Module._numeric_sub = (e) => (Module._numeric_sub = wasmExports.numeric_sub)(e)),
				(Module._numeric_ge = (e) => (Module._numeric_ge = wasmExports.numeric_ge)(e)),
				(Module._inet_in = (e) => (Module._inet_in = wasmExports.inet_in)(e)),
				(Module._format_operator = (e) =>
					(Module._format_operator = wasmExports.format_operator)(e)),
				(Module._RelationIsVisible = (e) =>
					(Module._RelationIsVisible = wasmExports.RelationIsVisible)(e)),
				(Module._pg_get_indexdef_columns_extended = (e, t) =>
					(Module._pg_get_indexdef_columns_extended = wasmExports.pg_get_indexdef_columns_extended)(
						e,
						t
					)),
				(Module._accumArrayResult = (e, t, I, B, tr) =>
					(Module._accumArrayResult = wasmExports.accumArrayResult)(e, t, I, B, tr)),
				(Module._makeArrayResult = (e, t) =>
					(Module._makeArrayResult = wasmExports.makeArrayResult)(e, t)),
				(Module._init_local_reloptions = (e, t) =>
					(Module._init_local_reloptions = wasmExports.init_local_reloptions)(e, t)),
				(Module._add_local_int_reloption = (e, t, I, B, tr, rr, ir) =>
					(Module._add_local_int_reloption = wasmExports.add_local_int_reloption)(
						e,
						t,
						I,
						B,
						tr,
						rr,
						ir
					)),
				(Module._pg_inet_net_ntop = (e, t, I, B, tr) =>
					(Module._pg_inet_net_ntop = wasmExports.pg_inet_net_ntop)(e, t, I, B, tr)),
				(Module._network_cmp = (e) => (Module._network_cmp = wasmExports.network_cmp)(e)),
				(Module._convert_network_to_scalar = (e, t, I) =>
					(Module._convert_network_to_scalar = wasmExports.convert_network_to_scalar)(e, t, I)),
				(Module._JsonbValueToJsonb = (e) =>
					(Module._JsonbValueToJsonb = wasmExports.JsonbValueToJsonb)(e)),
				(Module._pushJsonbValue = (e, t, I) =>
					(Module._pushJsonbValue = wasmExports.pushJsonbValue)(e, t, I)),
				(Module._numeric_cmp = (e) => (Module._numeric_cmp = wasmExports.numeric_cmp)(e)),
				(Module._timetz_cmp = (e) => (Module._timetz_cmp = wasmExports.timetz_cmp)(e)),
				(Module._date_cmp = (e) => (Module._date_cmp = wasmExports.date_cmp)(e)),
				(Module._time_cmp = (e) => (Module._time_cmp = wasmExports.time_cmp)(e)),
				(Module._timestamp_cmp = (e) => (Module._timestamp_cmp = wasmExports.timestamp_cmp)(e)),
				(Module._domain_check = (e, t, I, B, tr) =>
					(Module._domain_check = wasmExports.domain_check)(e, t, I, B, tr)),
				(Module._initArrayResult = (e, t, I) =>
					(Module._initArrayResult = wasmExports.initArrayResult)(e, t, I)),
				(Module._path_is_prefix_of_path = (e, t) =>
					(Module._path_is_prefix_of_path = wasmExports.path_is_prefix_of_path)(e, t)),
				(Module._path_is_relative_and_below_cwd = (e) =>
					(Module._path_is_relative_and_below_cwd = wasmExports.path_is_relative_and_below_cwd)(e)),
				(Module._ArrayGetIntegerTypmods = (e, t) =>
					(Module._ArrayGetIntegerTypmods = wasmExports.ArrayGetIntegerTypmods)(e, t)),
				(Module._bpchareq = (e) => (Module._bpchareq = wasmExports.bpchareq)(e)),
				(Module._varstr_cmp = (e, t, I, B, tr) =>
					(Module._varstr_cmp = wasmExports.varstr_cmp)(e, t, I, B, tr)),
				(Module._bpcharlt = (e) => (Module._bpcharlt = wasmExports.bpcharlt)(e)),
				(Module._bpcharle = (e) => (Module._bpcharle = wasmExports.bpcharle)(e)),
				(Module._bpchargt = (e) => (Module._bpchargt = wasmExports.bpchargt)(e)),
				(Module._bpcharge = (e) => (Module._bpcharge = wasmExports.bpcharge)(e)),
				(Module._bpcharcmp = (e) => (Module._bpcharcmp = wasmExports.bpcharcmp)(e)),
				(Module._current_query = (e) => (Module._current_query = wasmExports.current_query)(e)),
				(Module._str_tolower = (e, t, I) =>
					(Module._str_tolower = wasmExports.str_tolower)(e, t, I)),
				(Module._TransferExpandedObject = (e, t) =>
					(Module._TransferExpandedObject = wasmExports.TransferExpandedObject)(e, t)),
				(Module._macaddr_cmp = (e) => (Module._macaddr_cmp = wasmExports.macaddr_cmp)(e)),
				(Module._macaddr_lt = (e) => (Module._macaddr_lt = wasmExports.macaddr_lt)(e)),
				(Module._macaddr_le = (e) => (Module._macaddr_le = wasmExports.macaddr_le)(e)),
				(Module._macaddr_eq = (e) => (Module._macaddr_eq = wasmExports.macaddr_eq)(e)),
				(Module._macaddr_ge = (e) => (Module._macaddr_ge = wasmExports.macaddr_ge)(e)),
				(Module._macaddr_gt = (e) => (Module._macaddr_gt = wasmExports.macaddr_gt)(e)),
				(Module._quote_ident = (e) => (Module._quote_ident = wasmExports.quote_ident)(e)),
				(Module._timestamp_in = (e) => (Module._timestamp_in = wasmExports.timestamp_in)(e)),
				(Module._ParseDateTime = (e, t, I, B, tr, rr, ir) =>
					(Module._ParseDateTime = wasmExports.ParseDateTime)(e, t, I, B, tr, rr, ir)),
				(Module._DecodeDateTime = (e, t, I, B, tr, rr, ir, lr) =>
					(Module._DecodeDateTime = wasmExports.DecodeDateTime)(e, t, I, B, tr, rr, ir, lr)),
				(Module.___multi3 = (e, t, I, B, tr) =>
					(Module.___multi3 = wasmExports.__multi3)(e, t, I, B, tr)),
				(Module._timestamptz_in = (e) => (Module._timestamptz_in = wasmExports.timestamptz_in)(e)),
				(Module._timestamp_eq = (e) => (Module._timestamp_eq = wasmExports.timestamp_eq)(e)),
				(Module._timestamp_lt = (e) => (Module._timestamp_lt = wasmExports.timestamp_lt)(e)),
				(Module._timestamp_gt = (e) => (Module._timestamp_gt = wasmExports.timestamp_gt)(e)),
				(Module._timestamp_le = (e) => (Module._timestamp_le = wasmExports.timestamp_le)(e)),
				(Module._timestamp_ge = (e) => (Module._timestamp_ge = wasmExports.timestamp_ge)(e)),
				(Module._interval_eq = (e) => (Module._interval_eq = wasmExports.interval_eq)(e)),
				(Module._interval_lt = (e) => (Module._interval_lt = wasmExports.interval_lt)(e)),
				(Module._interval_gt = (e) => (Module._interval_gt = wasmExports.interval_gt)(e)),
				(Module._interval_le = (e) => (Module._interval_le = wasmExports.interval_le)(e)),
				(Module._interval_ge = (e) => (Module._interval_ge = wasmExports.interval_ge)(e)),
				(Module._interval_cmp = (e) => (Module._interval_cmp = wasmExports.interval_cmp)(e)),
				(Module._timestamp_mi = (e) => (Module._timestamp_mi = wasmExports.timestamp_mi)(e)),
				(Module._interval_um = (e) => (Module._interval_um = wasmExports.interval_um)(e)),
				(Module._interval_mi = (e) => (Module._interval_mi = wasmExports.interval_mi)(e)),
				(Module._IsValidJsonNumber = (e, t) =>
					(Module._IsValidJsonNumber = wasmExports.IsValidJsonNumber)(e, t)),
				(Module._btnamecmp = (e) => (Module._btnamecmp = wasmExports.btnamecmp)(e)),
				(Module._strncpy = (e, t, I) => (Module._strncpy = wasmExports.strncpy)(e, t, I)),
				(Module._expand_array = (e, t, I) =>
					(Module._expand_array = wasmExports.expand_array)(e, t, I)),
				(Module._pg_get_encoding_from_locale = (e, t) =>
					(Module._pg_get_encoding_from_locale = wasmExports.pg_get_encoding_from_locale)(e, t)),
				(Module._localtime = (e) => (Module._localtime = wasmExports.localtime)(e)),
				(Module._strftime = (e, t, I, B) => (Module._strftime = wasmExports.strftime)(e, t, I, B)),
				(Module._numeric_is_nan = (e) => (Module._numeric_is_nan = wasmExports.numeric_is_nan)(e)),
				(Module._numeric_eq = (e) => (Module._numeric_eq = wasmExports.numeric_eq)(e)),
				(Module._numeric_gt = (e) => (Module._numeric_gt = wasmExports.numeric_gt)(e)),
				(Module._numeric_le = (e) => (Module._numeric_le = wasmExports.numeric_le)(e)),
				(Module._numeric_div = (e) => (Module._numeric_div = wasmExports.numeric_div)(e)),
				(Module._numeric_float8_no_overflow = (e) =>
					(Module._numeric_float8_no_overflow = wasmExports.numeric_float8_no_overflow)(e)),
				(Module._numeric_float4 = (e) => (Module._numeric_float4 = wasmExports.numeric_float4)(e)),
				(Module._date_eq = (e) => (Module._date_eq = wasmExports.date_eq)(e)),
				(Module._date_lt = (e) => (Module._date_lt = wasmExports.date_lt)(e)),
				(Module._date_le = (e) => (Module._date_le = wasmExports.date_le)(e)),
				(Module._date_gt = (e) => (Module._date_gt = wasmExports.date_gt)(e)),
				(Module._date_ge = (e) => (Module._date_ge = wasmExports.date_ge)(e)),
				(Module._date_mi = (e) => (Module._date_mi = wasmExports.date_mi)(e)),
				(Module._time_eq = (e) => (Module._time_eq = wasmExports.time_eq)(e)),
				(Module._time_lt = (e) => (Module._time_lt = wasmExports.time_lt)(e)),
				(Module._time_le = (e) => (Module._time_le = wasmExports.time_le)(e)),
				(Module._time_gt = (e) => (Module._time_gt = wasmExports.time_gt)(e)),
				(Module._time_ge = (e) => (Module._time_ge = wasmExports.time_ge)(e)),
				(Module._time_mi_time = (e) => (Module._time_mi_time = wasmExports.time_mi_time)(e)),
				(Module._get_extension_oid = (e, t) =>
					(Module._get_extension_oid = wasmExports.get_extension_oid)(e, t)),
				(Module._pg_ltoa = (e, t) => (Module._pg_ltoa = wasmExports.pg_ltoa)(e, t)),
				(Module._varbit_in = (e) => (Module._varbit_in = wasmExports.varbit_in)(e)),
				(Module._biteq = (e) => (Module._biteq = wasmExports.biteq)(e)),
				(Module._bitlt = (e) => (Module._bitlt = wasmExports.bitlt)(e)),
				(Module._bitle = (e) => (Module._bitle = wasmExports.bitle)(e)),
				(Module._bitgt = (e) => (Module._bitgt = wasmExports.bitgt)(e)),
				(Module._bitge = (e) => (Module._bitge = wasmExports.bitge)(e)),
				(Module._bitcmp = (e) => (Module._bitcmp = wasmExports.bitcmp)(e)),
				(Module._tidin = (e) => (Module._tidin = wasmExports.tidin)(e)),
				(Module._tidout = (e) => (Module._tidout = wasmExports.tidout)(e)),
				(Module._cash_cmp = (e) => (Module._cash_cmp = wasmExports.cash_cmp)(e)),
				(Module._arraycontsel = (e) => (Module._arraycontsel = wasmExports.arraycontsel)(e)),
				(Module._arraycontjoinsel = (e) =>
					(Module._arraycontjoinsel = wasmExports.arraycontjoinsel)(e)),
				(Module._text_lt = (e) => (Module._text_lt = wasmExports.text_lt)(e)),
				(Module._text_le = (e) => (Module._text_le = wasmExports.text_le)(e)),
				(Module._text_gt = (e) => (Module._text_gt = wasmExports.text_gt)(e)),
				(Module._text_ge = (e) => (Module._text_ge = wasmExports.text_ge)(e)),
				(Module._bttextcmp = (e) => (Module._bttextcmp = wasmExports.bttextcmp)(e)),
				(Module._byteaeq = (e) => (Module._byteaeq = wasmExports.byteaeq)(e)),
				(Module._bytealt = (e) => (Module._bytealt = wasmExports.bytealt)(e)),
				(Module._byteale = (e) => (Module._byteale = wasmExports.byteale)(e)),
				(Module._byteagt = (e) => (Module._byteagt = wasmExports.byteagt)(e)),
				(Module._byteage = (e) => (Module._byteage = wasmExports.byteage)(e)),
				(Module._byteacmp = (e) => (Module._byteacmp = wasmExports.byteacmp)(e)),
				(Module._to_hex32 = (e) => (Module._to_hex32 = wasmExports.to_hex32)(e)),
				(Module._varstr_levenshtein = (e, t, I, B, tr, rr, ir, lr) =>
					(Module._varstr_levenshtein = wasmExports.varstr_levenshtein)(
						e,
						t,
						I,
						B,
						tr,
						rr,
						ir,
						lr
					)),
				(Module._utf8_to_unicode = (e) =>
					(Module._utf8_to_unicode = wasmExports.utf8_to_unicode)(e)),
				(Module._format_type_extended = (e, t, I) =>
					(Module._format_type_extended = wasmExports.format_type_extended)(e, t, I)),
				(Module._array_create_iterator = (e, t, I) =>
					(Module._array_create_iterator = wasmExports.array_create_iterator)(e, t, I)),
				(Module._array_iterate = (e, t, I) =>
					(Module._array_iterate = wasmExports.array_iterate)(e, t, I)),
				(Module._make_expanded_record_from_typeid = (e, t, I) =>
					(Module._make_expanded_record_from_typeid = wasmExports.make_expanded_record_from_typeid)(
						e,
						t,
						I
					)),
				(Module._make_expanded_record_from_tupdesc = (e, t) =>
					(Module._make_expanded_record_from_tupdesc =
						wasmExports.make_expanded_record_from_tupdesc)(e, t)),
				(Module._make_expanded_record_from_exprecord = (e, t) =>
					(Module._make_expanded_record_from_exprecord =
						wasmExports.make_expanded_record_from_exprecord)(e, t)),
				(Module._expanded_record_set_tuple = (e, t, I, B) =>
					(Module._expanded_record_set_tuple = wasmExports.expanded_record_set_tuple)(e, t, I, B)),
				(Module._expanded_record_get_tuple = (e) =>
					(Module._expanded_record_get_tuple = wasmExports.expanded_record_get_tuple)(e)),
				(Module._deconstruct_expanded_record = (e) =>
					(Module._deconstruct_expanded_record = wasmExports.deconstruct_expanded_record)(e)),
				(Module._expanded_record_lookup_field = (e, t, I) =>
					(Module._expanded_record_lookup_field = wasmExports.expanded_record_lookup_field)(
						e,
						t,
						I
					)),
				(Module._expanded_record_set_field_internal = (e, t, I, B, tr, rr) =>
					(Module._expanded_record_set_field_internal =
						wasmExports.expanded_record_set_field_internal)(e, t, I, B, tr, rr)),
				(Module._expanded_record_set_fields = (e, t, I, B) =>
					(Module._expanded_record_set_fields = wasmExports.expanded_record_set_fields)(
						e,
						t,
						I,
						B
					)),
				(Module._macaddr8_cmp = (e) => (Module._macaddr8_cmp = wasmExports.macaddr8_cmp)(e)),
				(Module._macaddr8_lt = (e) => (Module._macaddr8_lt = wasmExports.macaddr8_lt)(e)),
				(Module._macaddr8_le = (e) => (Module._macaddr8_le = wasmExports.macaddr8_le)(e)),
				(Module._macaddr8_eq = (e) => (Module._macaddr8_eq = wasmExports.macaddr8_eq)(e)),
				(Module._macaddr8_ge = (e) => (Module._macaddr8_ge = wasmExports.macaddr8_ge)(e)),
				(Module._macaddr8_gt = (e) => (Module._macaddr8_gt = wasmExports.macaddr8_gt)(e)),
				(Module._enum_lt = (e) => (Module._enum_lt = wasmExports.enum_lt)(e)),
				(Module._enum_le = (e) => (Module._enum_le = wasmExports.enum_le)(e)),
				(Module._enum_ge = (e) => (Module._enum_ge = wasmExports.enum_ge)(e)),
				(Module._enum_gt = (e) => (Module._enum_gt = wasmExports.enum_gt)(e)),
				(Module._enum_cmp = (e) => (Module._enum_cmp = wasmExports.enum_cmp)(e)),
				(Module._uuid_in = (e) => (Module._uuid_in = wasmExports.uuid_in)(e)),
				(Module._uuid_out = (e) => (Module._uuid_out = wasmExports.uuid_out)(e)),
				(Module._uuid_cmp = (e) => (Module._uuid_cmp = wasmExports.uuid_cmp)(e)),
				(Module._gen_random_uuid = (e) =>
					(Module._gen_random_uuid = wasmExports.gen_random_uuid)(e)),
				(Module._generic_restriction_selectivity = (e, t, I, B, tr, rr) =>
					(Module._generic_restriction_selectivity = wasmExports.generic_restriction_selectivity)(
						e,
						t,
						I,
						B,
						tr,
						rr
					)),
				(Module._genericcostestimate = (e, t, I, B) =>
					(Module._genericcostestimate = wasmExports.genericcostestimate)(e, t, I, B)),
				(Module._pg_xml_init = (e) => (Module._pg_xml_init = wasmExports.pg_xml_init)(e)),
				(Module._xmlInitParser = () => (Module._xmlInitParser = wasmExports.xmlInitParser)()),
				(Module._xml_ereport = (e, t, I, B) =>
					(Module._xml_ereport = wasmExports.xml_ereport)(e, t, I, B)),
				(Module._pg_xml_done = (e, t) => (Module._pg_xml_done = wasmExports.pg_xml_done)(e, t)),
				(Module._xmlXPathNewContext = (e) =>
					(Module._xmlXPathNewContext = wasmExports.xmlXPathNewContext)(e)),
				(Module._xmlXPathFreeContext = (e) =>
					(Module._xmlXPathFreeContext = wasmExports.xmlXPathFreeContext)(e)),
				(Module._xmlFreeDoc = (e) => (Module._xmlFreeDoc = wasmExports.xmlFreeDoc)(e)),
				(Module._xmlXPathCompile = (e) =>
					(Module._xmlXPathCompile = wasmExports.xmlXPathCompile)(e)),
				(Module._xmlXPathCompiledEval = (e, t) =>
					(Module._xmlXPathCompiledEval = wasmExports.xmlXPathCompiledEval)(e, t)),
				(Module._xmlXPathFreeCompExpr = (e) =>
					(Module._xmlXPathFreeCompExpr = wasmExports.xmlXPathFreeCompExpr)(e)),
				(Module._xmlStrdup = (e) => (Module._xmlStrdup = wasmExports.xmlStrdup)(e)),
				(Module._strnlen = (e, t) => (Module._strnlen = wasmExports.strnlen)(e, t)),
				(Module._xmlXPathCastNodeToString = (e) =>
					(Module._xmlXPathCastNodeToString = wasmExports.xmlXPathCastNodeToString)(e)),
				(Module._heap_modify_tuple_by_cols = (e, t, I, B, tr, rr) =>
					(Module._heap_modify_tuple_by_cols = wasmExports.heap_modify_tuple_by_cols)(
						e,
						t,
						I,
						B,
						tr,
						rr
					)),
				(Module._ResourceOwnerReleaseAllPlanCacheRefs = (e) =>
					(Module._ResourceOwnerReleaseAllPlanCacheRefs =
						wasmExports.ResourceOwnerReleaseAllPlanCacheRefs)(e)),
				(Module._RegisterResourceReleaseCallback = (e, t) =>
					(Module._RegisterResourceReleaseCallback = wasmExports.RegisterResourceReleaseCallback)(
						e,
						t
					)),
				(Module._PinPortal = (e) => (Module._PinPortal = wasmExports.PinPortal)(e)),
				(Module._UnpinPortal = (e) => (Module._UnpinPortal = wasmExports.UnpinPortal)(e)),
				(Module._btint2cmp = (e) => (Module._btint2cmp = wasmExports.btint2cmp)(e)),
				(Module._btint4cmp = (e) => (Module._btint4cmp = wasmExports.btint4cmp)(e)),
				(Module._btoidcmp = (e) => (Module._btoidcmp = wasmExports.btoidcmp)(e)),
				(Module._btcharcmp = (e) => (Module._btcharcmp = wasmExports.btcharcmp)(e)),
				(Module._btint8cmp = (e) => (Module._btint8cmp = wasmExports.btint8cmp)(e)),
				(Module._btboolcmp = (e) => (Module._btboolcmp = wasmExports.btboolcmp)(e)),
				(Module._GetPublicationByName = (e, t) =>
					(Module._GetPublicationByName = wasmExports.GetPublicationByName)(e, t)),
				(Module._GetTopMostAncestorInPublication = (e, t, I) =>
					(Module._GetTopMostAncestorInPublication = wasmExports.GetTopMostAncestorInPublication)(
						e,
						t,
						I
					)),
				(Module._pub_collist_to_bitmapset = (e, t, I) =>
					(Module._pub_collist_to_bitmapset = wasmExports.pub_collist_to_bitmapset)(e, t, I)),
				(Module._getExtensionOfObject = (e, t) =>
					(Module._getExtensionOfObject = wasmExports.getExtensionOfObject)(e, t)),
				(Module._visibilitymap_prepare_truncate = (e, t) =>
					(Module._visibilitymap_prepare_truncate = wasmExports.visibilitymap_prepare_truncate)(
						e,
						t
					)),
				(Module._log_newpage_range = (e, t, I, B, tr) =>
					(Module._log_newpage_range = wasmExports.log_newpage_range)(e, t, I, B, tr)),
				(Module._function_parse_error_transpose = (e) =>
					(Module._function_parse_error_transpose = wasmExports.function_parse_error_transpose)(e)),
				(Module._IndexGetRelation = (e, t) =>
					(Module._IndexGetRelation = wasmExports.IndexGetRelation)(e, t)),
				(Module._RelnameGetRelid = (e) =>
					(Module._RelnameGetRelid = wasmExports.RelnameGetRelid)(e)),
				(Module._standard_ProcessUtility = (e, t, I, B, tr, rr, ir, lr) =>
					(Module._standard_ProcessUtility = wasmExports.standard_ProcessUtility)(
						e,
						t,
						I,
						B,
						tr,
						rr,
						ir,
						lr
					)),
				(Module._Async_Notify = (e, t) => (Module._Async_Notify = wasmExports.Async_Notify)(e, t)),
				(Module._sigaddset = (e, t) => (Module._sigaddset = wasmExports.sigaddset)(e, t)),
				(Module._fsync_pgdata = (e, t) => (Module._fsync_pgdata = wasmExports.fsync_pgdata)(e, t)),
				(Module._get_restricted_token = () =>
					(Module._get_restricted_token = wasmExports.get_restricted_token)()),
				(Module._pg_malloc = (e) => (Module._pg_malloc = wasmExports.pg_malloc)(e)),
				(Module._pg_realloc = (e, t) => (Module._pg_realloc = wasmExports.pg_realloc)(e, t)),
				(Module._pg_strdup = (e) => (Module._pg_strdup = wasmExports.pg_strdup)(e)),
				(Module._simple_prompt = (e, t) =>
					(Module._simple_prompt = wasmExports.simple_prompt)(e, t)),
				(Module._interactive_file = () =>
					(Module._interactive_file = wasmExports.interactive_file)()),
				(Module._interactive_one = () => (Module._interactive_one = wasmExports.interactive_one)()),
				(Module._pg_shutdown = () => (Module._pg_shutdown = wasmExports.pg_shutdown)()),
				(Module._interactive_write = (e) =>
					(Module._interactive_write = wasmExports.interactive_write)(e)),
				(Module._interactive_read = () =>
					(Module._interactive_read = wasmExports.interactive_read)()),
				(Module._visibilitymap_pin = (e, t, I) =>
					(Module._visibilitymap_pin = wasmExports.visibilitymap_pin)(e, t, I)),
				(Module._HeapTupleSatisfiesVacuum = (e, t, I) =>
					(Module._HeapTupleSatisfiesVacuum = wasmExports.HeapTupleSatisfiesVacuum)(e, t, I)),
				(Module._visibilitymap_clear = (e, t, I, B) =>
					(Module._visibilitymap_clear = wasmExports.visibilitymap_clear)(e, t, I, B)),
				(Module._vac_estimate_reltuples = (e, t, I, B) =>
					(Module._vac_estimate_reltuples = wasmExports.vac_estimate_reltuples)(e, t, I, B)),
				(Module._heap_tuple_needs_eventual_freeze = (e) =>
					(Module._heap_tuple_needs_eventual_freeze = wasmExports.heap_tuple_needs_eventual_freeze)(
						e
					)),
				(Module._HeapTupleSatisfiesUpdate = (e, t, I) =>
					(Module._HeapTupleSatisfiesUpdate = wasmExports.HeapTupleSatisfiesUpdate)(e, t, I)),
				(Module._HeapTupleGetUpdateXid = (e) =>
					(Module._HeapTupleGetUpdateXid = wasmExports.HeapTupleGetUpdateXid)(e)),
				(Module._HeapTupleSatisfiesVisibility = (e, t, I) =>
					(Module._HeapTupleSatisfiesVisibility = wasmExports.HeapTupleSatisfiesVisibility)(
						e,
						t,
						I
					)),
				(Module._GetMultiXactIdMembers = (e, t, I, B) =>
					(Module._GetMultiXactIdMembers = wasmExports.GetMultiXactIdMembers)(e, t, I, B)),
				(Module._XLogRecGetBlockTagExtended = (e, t, I, B, tr, rr) =>
					(Module._XLogRecGetBlockTagExtended = wasmExports.XLogRecGetBlockTagExtended)(
						e,
						t,
						I,
						B,
						tr,
						rr
					)),
				(Module._toast_open_indexes = (e, t, I, B) =>
					(Module._toast_open_indexes = wasmExports.toast_open_indexes)(e, t, I, B)),
				(Module._init_toast_snapshot = (e) =>
					(Module._init_toast_snapshot = wasmExports.init_toast_snapshot)(e)),
				(Module._toast_close_indexes = (e, t, I) =>
					(Module._toast_close_indexes = wasmExports.toast_close_indexes)(e, t, I)),
				(Module._index_getprocinfo = (e, t, I) =>
					(Module._index_getprocinfo = wasmExports.index_getprocinfo)(e, t, I)),
				(Module._identify_opfamily_groups = (e, t) =>
					(Module._identify_opfamily_groups = wasmExports.identify_opfamily_groups)(e, t)),
				(Module._check_amproc_signature = (e, t, I, B, tr, rr) =>
					(Module._check_amproc_signature = wasmExports.check_amproc_signature)(
						e,
						t,
						I,
						B,
						tr,
						rr
					)),
				(Module._check_amoptsproc_signature = (e) =>
					(Module._check_amoptsproc_signature = wasmExports.check_amoptsproc_signature)(e)),
				(Module._check_amop_signature = (e, t, I, B) =>
					(Module._check_amop_signature = wasmExports.check_amop_signature)(e, t, I, B)),
				(Module._RelationGetIndexScan = (e, t, I) =>
					(Module._RelationGetIndexScan = wasmExports.RelationGetIndexScan)(e, t, I)),
				(Module.__hash_get_indextuple_hashkey = (e) =>
					(Module.__hash_get_indextuple_hashkey = wasmExports._hash_get_indextuple_hashkey)(e)),
				(Module.__hash_getbuf = (e, t, I, B) =>
					(Module.__hash_getbuf = wasmExports._hash_getbuf)(e, t, I, B)),
				(Module.__hash_relbuf = (e, t) => (Module.__hash_relbuf = wasmExports._hash_relbuf)(e, t)),
				(Module.__hash_getbuf_with_strategy = (e, t, I, B, tr) =>
					(Module.__hash_getbuf_with_strategy = wasmExports._hash_getbuf_with_strategy)(
						e,
						t,
						I,
						B,
						tr
					)),
				(Module._build_reloptions = (e, t, I, B, tr, rr) =>
					(Module._build_reloptions = wasmExports.build_reloptions)(e, t, I, B, tr, rr)),
				(Module._index_form_tuple = (e, t, I) =>
					(Module._index_form_tuple = wasmExports.index_form_tuple)(e, t, I)),
				(Module.__hash_ovflblkno_to_bitno = (e, t) =>
					(Module.__hash_ovflblkno_to_bitno = wasmExports._hash_ovflblkno_to_bitno)(e, t)),
				(Module._brin_build_desc = (e) =>
					(Module._brin_build_desc = wasmExports.brin_build_desc)(e)),
				(Module._brin_deform_tuple = (e, t, I) =>
					(Module._brin_deform_tuple = wasmExports.brin_deform_tuple)(e, t, I)),
				(Module._brin_free_desc = (e) => (Module._brin_free_desc = wasmExports.brin_free_desc)(e)),
				(Module._XLogRecGetBlockRefInfo = (e, t, I, B, tr) =>
					(Module._XLogRecGetBlockRefInfo = wasmExports.XLogRecGetBlockRefInfo)(e, t, I, B, tr)),
				(Module._ginPostingListDecode = (e, t) =>
					(Module._ginPostingListDecode = wasmExports.ginPostingListDecode)(e, t)),
				(Module._add_reloption_kind = () =>
					(Module._add_reloption_kind = wasmExports.add_reloption_kind)()),
				(Module._register_reloptions_validator = (e, t) =>
					(Module._register_reloptions_validator = wasmExports.register_reloptions_validator)(
						e,
						t
					)),
				(Module._add_int_reloption = (e, t, I, B, tr, rr, ir) =>
					(Module._add_int_reloption = wasmExports.add_int_reloption)(e, t, I, B, tr, rr, ir)),
				(Module._XLogFindNextRecord = (e, t) =>
					(Module._XLogFindNextRecord = wasmExports.XLogFindNextRecord)(e, t)),
				(Module._RestoreBlockImage = (e, t, I) =>
					(Module._RestoreBlockImage = wasmExports.RestoreBlockImage)(e, t, I)),
				(Module._GenericXLogStart = (e) =>
					(Module._GenericXLogStart = wasmExports.GenericXLogStart)(e)),
				(Module._GenericXLogRegisterBuffer = (e, t, I) =>
					(Module._GenericXLogRegisterBuffer = wasmExports.GenericXLogRegisterBuffer)(e, t, I)),
				(Module._GenericXLogFinish = (e) =>
					(Module._GenericXLogFinish = wasmExports.GenericXLogFinish)(e)),
				(Module._GenericXLogAbort = (e) =>
					(Module._GenericXLogAbort = wasmExports.GenericXLogAbort)(e)),
				(Module._read_local_xlog_page_no_wait = (e, t, I, B, tr) =>
					(Module._read_local_xlog_page_no_wait = wasmExports.read_local_xlog_page_no_wait)(
						e,
						t,
						I,
						B,
						tr
					)),
				(Module._XLogRecStoreStats = (e, t) =>
					(Module._XLogRecStoreStats = wasmExports.XLogRecStoreStats)(e, t)),
				(Module._ReadMultiXactIdRange = (e, t) =>
					(Module._ReadMultiXactIdRange = wasmExports.ReadMultiXactIdRange)(e, t)),
				(Module._MultiXactIdPrecedesOrEquals = (e, t) =>
					(Module._MultiXactIdPrecedesOrEquals = wasmExports.MultiXactIdPrecedesOrEquals)(e, t)),
				(Module._RegisterXactCallback = (e, t) =>
					(Module._RegisterXactCallback = wasmExports.RegisterXactCallback)(e, t)),
				(Module._RegisterSubXactCallback = (e, t) =>
					(Module._RegisterSubXactCallback = wasmExports.RegisterSubXactCallback)(e, t)),
				(Module._ReleaseCurrentSubTransaction = () =>
					(Module._ReleaseCurrentSubTransaction = wasmExports.ReleaseCurrentSubTransaction)()),
				(Module._WaitForParallelWorkersToAttach = (e) =>
					(Module._WaitForParallelWorkersToAttach = wasmExports.WaitForParallelWorkersToAttach)(e)),
				(Module.__bt_allequalimage = (e, t) =>
					(Module.__bt_allequalimage = wasmExports._bt_allequalimage)(e, t)),
				(Module.__bt_checkpage = (e, t) =>
					(Module.__bt_checkpage = wasmExports._bt_checkpage)(e, t)),
				(Module.__bt_relbuf = (e, t) => (Module.__bt_relbuf = wasmExports._bt_relbuf)(e, t)),
				(Module.__bt_metaversion = (e, t, I) =>
					(Module.__bt_metaversion = wasmExports._bt_metaversion)(e, t, I)),
				(Module.__bt_search = (e, t, I, B, tr, rr) =>
					(Module.__bt_search = wasmExports._bt_search)(e, t, I, B, tr, rr)),
				(Module.__bt_compare = (e, t, I, B) =>
					(Module.__bt_compare = wasmExports._bt_compare)(e, t, I, B)),
				(Module.__bt_binsrch_insert = (e, t) =>
					(Module.__bt_binsrch_insert = wasmExports._bt_binsrch_insert)(e, t)),
				(Module.__bt_freestack = (e) => (Module.__bt_freestack = wasmExports._bt_freestack)(e)),
				(Module.__bt_form_posting = (e, t, I) =>
					(Module.__bt_form_posting = wasmExports._bt_form_posting)(e, t, I)),
				(Module.__bt_check_natts = (e, t, I, B) =>
					(Module.__bt_check_natts = wasmExports._bt_check_natts)(e, t, I, B)),
				(Module._gistcheckpage = (e, t) =>
					(Module._gistcheckpage = wasmExports.gistcheckpage)(e, t)),
				(Module._EndCopyFrom = (e) => (Module._EndCopyFrom = wasmExports.EndCopyFrom)(e)),
				(Module._ProcessCopyOptions = (e, t, I, B) =>
					(Module._ProcessCopyOptions = wasmExports.ProcessCopyOptions)(e, t, I, B)),
				(Module._CopyFromErrorCallback = (e) =>
					(Module._CopyFromErrorCallback = wasmExports.CopyFromErrorCallback)(e)),
				(Module._NextCopyFrom = (e, t, I, B) =>
					(Module._NextCopyFrom = wasmExports.NextCopyFrom)(e, t, I, B)),
				(Module._nextval = (e) => (Module._nextval = wasmExports.nextval)(e)),
				(Module._defGetStreamingMode = (e) =>
					(Module._defGetStreamingMode = wasmExports.defGetStreamingMode)(e)),
				(Module._ExplainBeginOutput = (e) =>
					(Module._ExplainBeginOutput = wasmExports.ExplainBeginOutput)(e)),
				(Module._NewExplainState = () => (Module._NewExplainState = wasmExports.NewExplainState)()),
				(Module._ExplainEndOutput = (e) =>
					(Module._ExplainEndOutput = wasmExports.ExplainEndOutput)(e)),
				(Module._ExplainPrintPlan = (e, t) =>
					(Module._ExplainPrintPlan = wasmExports.ExplainPrintPlan)(e, t)),
				(Module._ExplainPrintTriggers = (e, t) =>
					(Module._ExplainPrintTriggers = wasmExports.ExplainPrintTriggers)(e, t)),
				(Module._ExplainPrintJITSummary = (e, t) =>
					(Module._ExplainPrintJITSummary = wasmExports.ExplainPrintJITSummary)(e, t)),
				(Module._ExplainPropertyInteger = (e, t, I, B) =>
					(Module._ExplainPropertyInteger = wasmExports.ExplainPropertyInteger)(e, t, I, B)),
				(Module._ExplainQueryText = (e, t) =>
					(Module._ExplainQueryText = wasmExports.ExplainQueryText)(e, t)),
				(Module._ExplainPropertyText = (e, t, I) =>
					(Module._ExplainPropertyText = wasmExports.ExplainPropertyText)(e, t, I)),
				(Module._ExplainQueryParameters = (e, t, I) =>
					(Module._ExplainQueryParameters = wasmExports.ExplainQueryParameters)(e, t, I)),
				(Module._pg_is_ascii = (e) => (Module._pg_is_ascii = wasmExports.pg_is_ascii)(e)),
				(Module._fputs = (e, t) => (Module._fputs = wasmExports.fputs)(e, t)),
				(Module._popen = (e, t) => (Module._popen = wasmExports.popen)(e, t)),
				(Module._float_to_shortest_decimal_bufn = (e, t) =>
					(Module._float_to_shortest_decimal_bufn = wasmExports.float_to_shortest_decimal_bufn)(
						e,
						t
					)),
				(Module._pg_prng_uint64 = (e) => (Module._pg_prng_uint64 = wasmExports.pg_prng_uint64)(e)),
				(Module._scram_ClientKey = (e, t, I, B, tr) =>
					(Module._scram_ClientKey = wasmExports.scram_ClientKey)(e, t, I, B, tr)),
				(Module._pg_encoding_dsplen = (e, t) =>
					(Module._pg_encoding_dsplen = wasmExports.pg_encoding_dsplen)(e, t)),
				(Module._getcwd = (e, t) => (Module._getcwd = wasmExports.getcwd)(e, t)),
				(Module._pg_get_user_home_dir = (e, t, I) =>
					(Module._pg_get_user_home_dir = wasmExports.pg_get_user_home_dir)(e, t, I)),
				(Module._nanosleep = (e, t) => (Module._nanosleep = wasmExports.nanosleep)(e, t)),
				(Module._snprintf = (e, t, I, B) => (Module._snprintf = wasmExports.snprintf)(e, t, I, B)),
				(Module._pg_strerror_r = (e, t, I) =>
					(Module._pg_strerror_r = wasmExports.pg_strerror_r)(e, t, I)),
				(Module._pthread_mutex_lock = (e) =>
					(Module._pthread_mutex_lock = wasmExports.pthread_mutex_lock)(e)),
				(Module._pthread_mutex_unlock = (e) =>
					(Module._pthread_mutex_unlock = wasmExports.pthread_mutex_unlock)(e)),
				(Module._strncat = (e, t, I) => (Module._strncat = wasmExports.strncat)(e, t, I)),
				(Module._PQexec = (e, t) => (Module._PQexec = wasmExports.PQexec)(e, t)),
				(Module._PQsetSingleRowMode = (e) =>
					(Module._PQsetSingleRowMode = wasmExports.PQsetSingleRowMode)(e)),
				(Module._PQcmdStatus = (e) => (Module._PQcmdStatus = wasmExports.PQcmdStatus)(e)),
				(Module._pthread_sigmask = (e, t, I) =>
					(Module._pthread_sigmask = wasmExports.pthread_sigmask)(e, t, I)),
				(Module._sigismember = (e, t) => (Module._sigismember = wasmExports.sigismember)(e, t)),
				(Module._sigpending = (e) => (Module._sigpending = wasmExports.sigpending)(e)),
				(Module._sigwait = (e, t) => (Module._sigwait = wasmExports.sigwait)(e, t)),
				(Module._isolat1ToUTF8 = (e, t, I, B) =>
					(Module._isolat1ToUTF8 = wasmExports.isolat1ToUTF8)(e, t, I, B)),
				(Module._UTF8Toisolat1 = (e, t, I, B) =>
					(Module._UTF8Toisolat1 = wasmExports.UTF8Toisolat1)(e, t, I, B)),
				(Module._vfprintf = (e, t, I) => (Module._vfprintf = wasmExports.vfprintf)(e, t, I)),
				(Module._vsnprintf = (e, t, I, B) =>
					(Module._vsnprintf = wasmExports.vsnprintf)(e, t, I, B)),
				(Module._xmlParserValidityWarning = (e, t, I) =>
					(Module._xmlParserValidityWarning = wasmExports.xmlParserValidityWarning)(e, t, I)),
				(Module._xmlParserValidityError = (e, t, I) =>
					(Module._xmlParserValidityError = wasmExports.xmlParserValidityError)(e, t, I)),
				(Module._xmlParserError = (e, t, I) =>
					(Module._xmlParserError = wasmExports.xmlParserError)(e, t, I)),
				(Module._xmlParserWarning = (e, t, I) =>
					(Module._xmlParserWarning = wasmExports.xmlParserWarning)(e, t, I)),
				(Module._fprintf = (e, t, I) => (Module._fprintf = wasmExports.fprintf)(e, t, I)),
				(Module.___xmlParserInputBufferCreateFilename = (e, t) =>
					(Module.___xmlParserInputBufferCreateFilename =
						wasmExports.__xmlParserInputBufferCreateFilename)(e, t)),
				(Module.___xmlOutputBufferCreateFilename = (e, t, I) =>
					(Module.___xmlOutputBufferCreateFilename = wasmExports.__xmlOutputBufferCreateFilename)(
						e,
						t,
						I
					)),
				(Module._xmlSAX2InternalSubset = (e, t, I, B) =>
					(Module._xmlSAX2InternalSubset = wasmExports.xmlSAX2InternalSubset)(e, t, I, B)),
				(Module._xmlSAX2IsStandalone = (e) =>
					(Module._xmlSAX2IsStandalone = wasmExports.xmlSAX2IsStandalone)(e)),
				(Module._xmlSAX2HasInternalSubset = (e) =>
					(Module._xmlSAX2HasInternalSubset = wasmExports.xmlSAX2HasInternalSubset)(e)),
				(Module._xmlSAX2HasExternalSubset = (e) =>
					(Module._xmlSAX2HasExternalSubset = wasmExports.xmlSAX2HasExternalSubset)(e)),
				(Module._xmlSAX2ResolveEntity = (e, t, I) =>
					(Module._xmlSAX2ResolveEntity = wasmExports.xmlSAX2ResolveEntity)(e, t, I)),
				(Module._xmlSAX2GetEntity = (e, t) =>
					(Module._xmlSAX2GetEntity = wasmExports.xmlSAX2GetEntity)(e, t)),
				(Module._xmlSAX2EntityDecl = (e, t, I, B, tr, rr) =>
					(Module._xmlSAX2EntityDecl = wasmExports.xmlSAX2EntityDecl)(e, t, I, B, tr, rr)),
				(Module._xmlSAX2NotationDecl = (e, t, I, B) =>
					(Module._xmlSAX2NotationDecl = wasmExports.xmlSAX2NotationDecl)(e, t, I, B)),
				(Module._xmlSAX2AttributeDecl = (e, t, I, B, tr, rr, ir) =>
					(Module._xmlSAX2AttributeDecl = wasmExports.xmlSAX2AttributeDecl)(
						e,
						t,
						I,
						B,
						tr,
						rr,
						ir
					)),
				(Module._xmlSAX2ElementDecl = (e, t, I, B) =>
					(Module._xmlSAX2ElementDecl = wasmExports.xmlSAX2ElementDecl)(e, t, I, B)),
				(Module._xmlSAX2UnparsedEntityDecl = (e, t, I, B, tr) =>
					(Module._xmlSAX2UnparsedEntityDecl = wasmExports.xmlSAX2UnparsedEntityDecl)(
						e,
						t,
						I,
						B,
						tr
					)),
				(Module._xmlSAX2SetDocumentLocator = (e, t) =>
					(Module._xmlSAX2SetDocumentLocator = wasmExports.xmlSAX2SetDocumentLocator)(e, t)),
				(Module._xmlSAX2StartDocument = (e) =>
					(Module._xmlSAX2StartDocument = wasmExports.xmlSAX2StartDocument)(e)),
				(Module._xmlSAX2EndDocument = (e) =>
					(Module._xmlSAX2EndDocument = wasmExports.xmlSAX2EndDocument)(e)),
				(Module._xmlSAX2StartElement = (e, t, I) =>
					(Module._xmlSAX2StartElement = wasmExports.xmlSAX2StartElement)(e, t, I)),
				(Module._xmlSAX2EndElement = (e, t) =>
					(Module._xmlSAX2EndElement = wasmExports.xmlSAX2EndElement)(e, t)),
				(Module._xmlSAX2Reference = (e, t) =>
					(Module._xmlSAX2Reference = wasmExports.xmlSAX2Reference)(e, t)),
				(Module._xmlSAX2Characters = (e, t, I) =>
					(Module._xmlSAX2Characters = wasmExports.xmlSAX2Characters)(e, t, I)),
				(Module._xmlSAX2ProcessingInstruction = (e, t, I) =>
					(Module._xmlSAX2ProcessingInstruction = wasmExports.xmlSAX2ProcessingInstruction)(
						e,
						t,
						I
					)),
				(Module._xmlSAX2Comment = (e, t) =>
					(Module._xmlSAX2Comment = wasmExports.xmlSAX2Comment)(e, t)),
				(Module._xmlSAX2GetParameterEntity = (e, t) =>
					(Module._xmlSAX2GetParameterEntity = wasmExports.xmlSAX2GetParameterEntity)(e, t)),
				(Module._xmlSAX2CDataBlock = (e, t, I) =>
					(Module._xmlSAX2CDataBlock = wasmExports.xmlSAX2CDataBlock)(e, t, I)),
				(Module._xmlSAX2ExternalSubset = (e, t, I, B) =>
					(Module._xmlSAX2ExternalSubset = wasmExports.xmlSAX2ExternalSubset)(e, t, I, B)),
				(Module._xmlSAX2GetPublicId = (e) =>
					(Module._xmlSAX2GetPublicId = wasmExports.xmlSAX2GetPublicId)(e)),
				(Module._xmlSAX2GetSystemId = (e) =>
					(Module._xmlSAX2GetSystemId = wasmExports.xmlSAX2GetSystemId)(e)),
				(Module._xmlSAX2GetLineNumber = (e) =>
					(Module._xmlSAX2GetLineNumber = wasmExports.xmlSAX2GetLineNumber)(e)),
				(Module._xmlSAX2GetColumnNumber = (e) =>
					(Module._xmlSAX2GetColumnNumber = wasmExports.xmlSAX2GetColumnNumber)(e)),
				(Module._xmlSAX2IgnorableWhitespace = (e, t, I) =>
					(Module._xmlSAX2IgnorableWhitespace = wasmExports.xmlSAX2IgnorableWhitespace)(e, t, I)),
				(Module._xmlHashDefaultDeallocator = (e, t) =>
					(Module._xmlHashDefaultDeallocator = wasmExports.xmlHashDefaultDeallocator)(e, t)),
				(Module._iconv_open = (e, t) => (Module._iconv_open = wasmExports.iconv_open)(e, t)),
				(Module._iconv_close = (e) => (Module._iconv_close = wasmExports.iconv_close)(e)),
				(Module._iconv = (e, t, I, B, tr) => (Module._iconv = wasmExports.iconv)(e, t, I, B, tr)),
				(Module._UTF8ToHtml = (e, t, I, B) =>
					(Module._UTF8ToHtml = wasmExports.UTF8ToHtml)(e, t, I, B)),
				(Module._xmlReadMemory = (e, t, I, B, tr) =>
					(Module._xmlReadMemory = wasmExports.xmlReadMemory)(e, t, I, B, tr)),
				(Module._xmlSAX2StartElementNs = (e, t, I, B, tr, rr, ir, lr, dr) =>
					(Module._xmlSAX2StartElementNs = wasmExports.xmlSAX2StartElementNs)(
						e,
						t,
						I,
						B,
						tr,
						rr,
						ir,
						lr,
						dr
					)),
				(Module._xmlSAX2EndElementNs = (e, t, I, B) =>
					(Module._xmlSAX2EndElementNs = wasmExports.xmlSAX2EndElementNs)(e, t, I, B)),
				(Module.___cxa_atexit = (e, t, I) =>
					(Module.___cxa_atexit = wasmExports.__cxa_atexit)(e, t, I)),
				(Module._xmlDocGetRootElement = (e) =>
					(Module._xmlDocGetRootElement = wasmExports.xmlDocGetRootElement)(e)),
				(Module._xmlFileMatch = (e) => (Module._xmlFileMatch = wasmExports.xmlFileMatch)(e)),
				(Module._xmlFileOpen = (e) => (Module._xmlFileOpen = wasmExports.xmlFileOpen)(e)),
				(Module._xmlFileRead = (e, t, I) =>
					(Module._xmlFileRead = wasmExports.xmlFileRead)(e, t, I)),
				(Module._xmlFileClose = (e) => (Module._xmlFileClose = wasmExports.xmlFileClose)(e)),
				(Module._gzread = (e, t, I) => (Module._gzread = wasmExports.gzread)(e, t, I)),
				(Module._gzclose = (e) => (Module._gzclose = wasmExports.gzclose)(e)),
				(Module._gzdirect = (e) => (Module._gzdirect = wasmExports.gzdirect)(e)),
				(Module._gzdopen = (e, t) => (Module._gzdopen = wasmExports.gzdopen)(e, t)),
				(Module._gzopen = (e, t) => (Module._gzopen = wasmExports.gzopen)(e, t)),
				(Module._gzwrite = (e, t, I) => (Module._gzwrite = wasmExports.gzwrite)(e, t, I)),
				(Module._xmlUCSIsCatNd = (e) => (Module._xmlUCSIsCatNd = wasmExports.xmlUCSIsCatNd)(e)),
				(Module._xmlUCSIsCatP = (e) => (Module._xmlUCSIsCatP = wasmExports.xmlUCSIsCatP)(e)),
				(Module._xmlUCSIsCatZ = (e) => (Module._xmlUCSIsCatZ = wasmExports.xmlUCSIsCatZ)(e)),
				(Module._xmlUCSIsCatC = (e) => (Module._xmlUCSIsCatC = wasmExports.xmlUCSIsCatC)(e)),
				(Module._xmlUCSIsCatL = (e) => (Module._xmlUCSIsCatL = wasmExports.xmlUCSIsCatL)(e)),
				(Module._xmlUCSIsCatLu = (e) => (Module._xmlUCSIsCatLu = wasmExports.xmlUCSIsCatLu)(e)),
				(Module._xmlUCSIsCatLl = (e) => (Module._xmlUCSIsCatLl = wasmExports.xmlUCSIsCatLl)(e)),
				(Module._xmlUCSIsCatLt = (e) => (Module._xmlUCSIsCatLt = wasmExports.xmlUCSIsCatLt)(e)),
				(Module._xmlUCSIsCatLm = (e) => (Module._xmlUCSIsCatLm = wasmExports.xmlUCSIsCatLm)(e)),
				(Module._xmlUCSIsCatLo = (e) => (Module._xmlUCSIsCatLo = wasmExports.xmlUCSIsCatLo)(e)),
				(Module._xmlUCSIsCatM = (e) => (Module._xmlUCSIsCatM = wasmExports.xmlUCSIsCatM)(e)),
				(Module._xmlUCSIsCatMn = (e) => (Module._xmlUCSIsCatMn = wasmExports.xmlUCSIsCatMn)(e)),
				(Module._xmlUCSIsCatMc = (e) => (Module._xmlUCSIsCatMc = wasmExports.xmlUCSIsCatMc)(e)),
				(Module._xmlUCSIsCatMe = (e) => (Module._xmlUCSIsCatMe = wasmExports.xmlUCSIsCatMe)(e)),
				(Module._xmlUCSIsCatN = (e) => (Module._xmlUCSIsCatN = wasmExports.xmlUCSIsCatN)(e)),
				(Module._xmlUCSIsCatNl = (e) => (Module._xmlUCSIsCatNl = wasmExports.xmlUCSIsCatNl)(e)),
				(Module._xmlUCSIsCatNo = (e) => (Module._xmlUCSIsCatNo = wasmExports.xmlUCSIsCatNo)(e)),
				(Module._xmlUCSIsCatPc = (e) => (Module._xmlUCSIsCatPc = wasmExports.xmlUCSIsCatPc)(e)),
				(Module._xmlUCSIsCatPd = (e) => (Module._xmlUCSIsCatPd = wasmExports.xmlUCSIsCatPd)(e)),
				(Module._xmlUCSIsCatPs = (e) => (Module._xmlUCSIsCatPs = wasmExports.xmlUCSIsCatPs)(e)),
				(Module._xmlUCSIsCatPe = (e) => (Module._xmlUCSIsCatPe = wasmExports.xmlUCSIsCatPe)(e)),
				(Module._xmlUCSIsCatPi = (e) => (Module._xmlUCSIsCatPi = wasmExports.xmlUCSIsCatPi)(e)),
				(Module._xmlUCSIsCatPf = (e) => (Module._xmlUCSIsCatPf = wasmExports.xmlUCSIsCatPf)(e)),
				(Module._xmlUCSIsCatPo = (e) => (Module._xmlUCSIsCatPo = wasmExports.xmlUCSIsCatPo)(e)),
				(Module._xmlUCSIsCatZs = (e) => (Module._xmlUCSIsCatZs = wasmExports.xmlUCSIsCatZs)(e)),
				(Module._xmlUCSIsCatZl = (e) => (Module._xmlUCSIsCatZl = wasmExports.xmlUCSIsCatZl)(e)),
				(Module._xmlUCSIsCatZp = (e) => (Module._xmlUCSIsCatZp = wasmExports.xmlUCSIsCatZp)(e)),
				(Module._xmlUCSIsCatS = (e) => (Module._xmlUCSIsCatS = wasmExports.xmlUCSIsCatS)(e)),
				(Module._xmlUCSIsCatSm = (e) => (Module._xmlUCSIsCatSm = wasmExports.xmlUCSIsCatSm)(e)),
				(Module._xmlUCSIsCatSc = (e) => (Module._xmlUCSIsCatSc = wasmExports.xmlUCSIsCatSc)(e)),
				(Module._xmlUCSIsCatSk = (e) => (Module._xmlUCSIsCatSk = wasmExports.xmlUCSIsCatSk)(e)),
				(Module._xmlUCSIsCatSo = (e) => (Module._xmlUCSIsCatSo = wasmExports.xmlUCSIsCatSo)(e)),
				(Module._xmlUCSIsCatCc = (e) => (Module._xmlUCSIsCatCc = wasmExports.xmlUCSIsCatCc)(e)),
				(Module._xmlUCSIsCatCf = (e) => (Module._xmlUCSIsCatCf = wasmExports.xmlUCSIsCatCf)(e)),
				(Module._xmlUCSIsCatCo = (e) => (Module._xmlUCSIsCatCo = wasmExports.xmlUCSIsCatCo)(e)),
				(Module._xmlUCSIsAegeanNumbers = (e) =>
					(Module._xmlUCSIsAegeanNumbers = wasmExports.xmlUCSIsAegeanNumbers)(e)),
				(Module._xmlUCSIsAlphabeticPresentationForms = (e) =>
					(Module._xmlUCSIsAlphabeticPresentationForms =
						wasmExports.xmlUCSIsAlphabeticPresentationForms)(e)),
				(Module._xmlUCSIsArabic = (e) => (Module._xmlUCSIsArabic = wasmExports.xmlUCSIsArabic)(e)),
				(Module._xmlUCSIsArabicPresentationFormsA = (e) =>
					(Module._xmlUCSIsArabicPresentationFormsA = wasmExports.xmlUCSIsArabicPresentationFormsA)(
						e
					)),
				(Module._xmlUCSIsArabicPresentationFormsB = (e) =>
					(Module._xmlUCSIsArabicPresentationFormsB = wasmExports.xmlUCSIsArabicPresentationFormsB)(
						e
					)),
				(Module._xmlUCSIsArmenian = (e) =>
					(Module._xmlUCSIsArmenian = wasmExports.xmlUCSIsArmenian)(e)),
				(Module._xmlUCSIsArrows = (e) => (Module._xmlUCSIsArrows = wasmExports.xmlUCSIsArrows)(e)),
				(Module._xmlUCSIsBasicLatin = (e) =>
					(Module._xmlUCSIsBasicLatin = wasmExports.xmlUCSIsBasicLatin)(e)),
				(Module._xmlUCSIsBengali = (e) =>
					(Module._xmlUCSIsBengali = wasmExports.xmlUCSIsBengali)(e)),
				(Module._xmlUCSIsBlockElements = (e) =>
					(Module._xmlUCSIsBlockElements = wasmExports.xmlUCSIsBlockElements)(e)),
				(Module._xmlUCSIsBopomofo = (e) =>
					(Module._xmlUCSIsBopomofo = wasmExports.xmlUCSIsBopomofo)(e)),
				(Module._xmlUCSIsBopomofoExtended = (e) =>
					(Module._xmlUCSIsBopomofoExtended = wasmExports.xmlUCSIsBopomofoExtended)(e)),
				(Module._xmlUCSIsBoxDrawing = (e) =>
					(Module._xmlUCSIsBoxDrawing = wasmExports.xmlUCSIsBoxDrawing)(e)),
				(Module._xmlUCSIsBraillePatterns = (e) =>
					(Module._xmlUCSIsBraillePatterns = wasmExports.xmlUCSIsBraillePatterns)(e)),
				(Module._xmlUCSIsBuhid = (e) => (Module._xmlUCSIsBuhid = wasmExports.xmlUCSIsBuhid)(e)),
				(Module._xmlUCSIsByzantineMusicalSymbols = (e) =>
					(Module._xmlUCSIsByzantineMusicalSymbols = wasmExports.xmlUCSIsByzantineMusicalSymbols)(
						e
					)),
				(Module._xmlUCSIsCJKCompatibility = (e) =>
					(Module._xmlUCSIsCJKCompatibility = wasmExports.xmlUCSIsCJKCompatibility)(e)),
				(Module._xmlUCSIsCJKCompatibilityForms = (e) =>
					(Module._xmlUCSIsCJKCompatibilityForms = wasmExports.xmlUCSIsCJKCompatibilityForms)(e)),
				(Module._xmlUCSIsCJKCompatibilityIdeographs = (e) =>
					(Module._xmlUCSIsCJKCompatibilityIdeographs =
						wasmExports.xmlUCSIsCJKCompatibilityIdeographs)(e)),
				(Module._xmlUCSIsCJKCompatibilityIdeographsSupplement = (e) =>
					(Module._xmlUCSIsCJKCompatibilityIdeographsSupplement =
						wasmExports.xmlUCSIsCJKCompatibilityIdeographsSupplement)(e)),
				(Module._xmlUCSIsCJKRadicalsSupplement = (e) =>
					(Module._xmlUCSIsCJKRadicalsSupplement = wasmExports.xmlUCSIsCJKRadicalsSupplement)(e)),
				(Module._xmlUCSIsCJKSymbolsandPunctuation = (e) =>
					(Module._xmlUCSIsCJKSymbolsandPunctuation = wasmExports.xmlUCSIsCJKSymbolsandPunctuation)(
						e
					)),
				(Module._xmlUCSIsCJKUnifiedIdeographs = (e) =>
					(Module._xmlUCSIsCJKUnifiedIdeographs = wasmExports.xmlUCSIsCJKUnifiedIdeographs)(e)),
				(Module._xmlUCSIsCJKUnifiedIdeographsExtensionA = (e) =>
					(Module._xmlUCSIsCJKUnifiedIdeographsExtensionA =
						wasmExports.xmlUCSIsCJKUnifiedIdeographsExtensionA)(e)),
				(Module._xmlUCSIsCJKUnifiedIdeographsExtensionB = (e) =>
					(Module._xmlUCSIsCJKUnifiedIdeographsExtensionB =
						wasmExports.xmlUCSIsCJKUnifiedIdeographsExtensionB)(e)),
				(Module._xmlUCSIsCherokee = (e) =>
					(Module._xmlUCSIsCherokee = wasmExports.xmlUCSIsCherokee)(e)),
				(Module._xmlUCSIsCombiningDiacriticalMarks = (e) =>
					(Module._xmlUCSIsCombiningDiacriticalMarks =
						wasmExports.xmlUCSIsCombiningDiacriticalMarks)(e)),
				(Module._xmlUCSIsCombiningDiacriticalMarksforSymbols = (e) =>
					(Module._xmlUCSIsCombiningDiacriticalMarksforSymbols =
						wasmExports.xmlUCSIsCombiningDiacriticalMarksforSymbols)(e)),
				(Module._xmlUCSIsCombiningHalfMarks = (e) =>
					(Module._xmlUCSIsCombiningHalfMarks = wasmExports.xmlUCSIsCombiningHalfMarks)(e)),
				(Module._xmlUCSIsCombiningMarksforSymbols = (e) =>
					(Module._xmlUCSIsCombiningMarksforSymbols = wasmExports.xmlUCSIsCombiningMarksforSymbols)(
						e
					)),
				(Module._xmlUCSIsControlPictures = (e) =>
					(Module._xmlUCSIsControlPictures = wasmExports.xmlUCSIsControlPictures)(e)),
				(Module._xmlUCSIsCurrencySymbols = (e) =>
					(Module._xmlUCSIsCurrencySymbols = wasmExports.xmlUCSIsCurrencySymbols)(e)),
				(Module._xmlUCSIsCypriotSyllabary = (e) =>
					(Module._xmlUCSIsCypriotSyllabary = wasmExports.xmlUCSIsCypriotSyllabary)(e)),
				(Module._xmlUCSIsCyrillic = (e) =>
					(Module._xmlUCSIsCyrillic = wasmExports.xmlUCSIsCyrillic)(e)),
				(Module._xmlUCSIsCyrillicSupplement = (e) =>
					(Module._xmlUCSIsCyrillicSupplement = wasmExports.xmlUCSIsCyrillicSupplement)(e)),
				(Module._xmlUCSIsDeseret = (e) =>
					(Module._xmlUCSIsDeseret = wasmExports.xmlUCSIsDeseret)(e)),
				(Module._xmlUCSIsDevanagari = (e) =>
					(Module._xmlUCSIsDevanagari = wasmExports.xmlUCSIsDevanagari)(e)),
				(Module._xmlUCSIsDingbats = (e) =>
					(Module._xmlUCSIsDingbats = wasmExports.xmlUCSIsDingbats)(e)),
				(Module._xmlUCSIsEnclosedAlphanumerics = (e) =>
					(Module._xmlUCSIsEnclosedAlphanumerics = wasmExports.xmlUCSIsEnclosedAlphanumerics)(e)),
				(Module._xmlUCSIsEnclosedCJKLettersandMonths = (e) =>
					(Module._xmlUCSIsEnclosedCJKLettersandMonths =
						wasmExports.xmlUCSIsEnclosedCJKLettersandMonths)(e)),
				(Module._xmlUCSIsEthiopic = (e) =>
					(Module._xmlUCSIsEthiopic = wasmExports.xmlUCSIsEthiopic)(e)),
				(Module._xmlUCSIsGeneralPunctuation = (e) =>
					(Module._xmlUCSIsGeneralPunctuation = wasmExports.xmlUCSIsGeneralPunctuation)(e)),
				(Module._xmlUCSIsGeometricShapes = (e) =>
					(Module._xmlUCSIsGeometricShapes = wasmExports.xmlUCSIsGeometricShapes)(e)),
				(Module._xmlUCSIsGeorgian = (e) =>
					(Module._xmlUCSIsGeorgian = wasmExports.xmlUCSIsGeorgian)(e)),
				(Module._xmlUCSIsGothic = (e) => (Module._xmlUCSIsGothic = wasmExports.xmlUCSIsGothic)(e)),
				(Module._xmlUCSIsGreek = (e) => (Module._xmlUCSIsGreek = wasmExports.xmlUCSIsGreek)(e)),
				(Module._xmlUCSIsGreekExtended = (e) =>
					(Module._xmlUCSIsGreekExtended = wasmExports.xmlUCSIsGreekExtended)(e)),
				(Module._xmlUCSIsGreekandCoptic = (e) =>
					(Module._xmlUCSIsGreekandCoptic = wasmExports.xmlUCSIsGreekandCoptic)(e)),
				(Module._xmlUCSIsGujarati = (e) =>
					(Module._xmlUCSIsGujarati = wasmExports.xmlUCSIsGujarati)(e)),
				(Module._xmlUCSIsGurmukhi = (e) =>
					(Module._xmlUCSIsGurmukhi = wasmExports.xmlUCSIsGurmukhi)(e)),
				(Module._xmlUCSIsHalfwidthandFullwidthForms = (e) =>
					(Module._xmlUCSIsHalfwidthandFullwidthForms =
						wasmExports.xmlUCSIsHalfwidthandFullwidthForms)(e)),
				(Module._xmlUCSIsHangulCompatibilityJamo = (e) =>
					(Module._xmlUCSIsHangulCompatibilityJamo = wasmExports.xmlUCSIsHangulCompatibilityJamo)(
						e
					)),
				(Module._xmlUCSIsHangulJamo = (e) =>
					(Module._xmlUCSIsHangulJamo = wasmExports.xmlUCSIsHangulJamo)(e)),
				(Module._xmlUCSIsHangulSyllables = (e) =>
					(Module._xmlUCSIsHangulSyllables = wasmExports.xmlUCSIsHangulSyllables)(e)),
				(Module._xmlUCSIsHanunoo = (e) =>
					(Module._xmlUCSIsHanunoo = wasmExports.xmlUCSIsHanunoo)(e)),
				(Module._xmlUCSIsHebrew = (e) => (Module._xmlUCSIsHebrew = wasmExports.xmlUCSIsHebrew)(e)),
				(Module._xmlUCSIsHighPrivateUseSurrogates = (e) =>
					(Module._xmlUCSIsHighPrivateUseSurrogates = wasmExports.xmlUCSIsHighPrivateUseSurrogates)(
						e
					)),
				(Module._xmlUCSIsHighSurrogates = (e) =>
					(Module._xmlUCSIsHighSurrogates = wasmExports.xmlUCSIsHighSurrogates)(e)),
				(Module._xmlUCSIsHiragana = (e) =>
					(Module._xmlUCSIsHiragana = wasmExports.xmlUCSIsHiragana)(e)),
				(Module._xmlUCSIsIPAExtensions = (e) =>
					(Module._xmlUCSIsIPAExtensions = wasmExports.xmlUCSIsIPAExtensions)(e)),
				(Module._xmlUCSIsIdeographicDescriptionCharacters = (e) =>
					(Module._xmlUCSIsIdeographicDescriptionCharacters =
						wasmExports.xmlUCSIsIdeographicDescriptionCharacters)(e)),
				(Module._xmlUCSIsKanbun = (e) => (Module._xmlUCSIsKanbun = wasmExports.xmlUCSIsKanbun)(e)),
				(Module._xmlUCSIsKangxiRadicals = (e) =>
					(Module._xmlUCSIsKangxiRadicals = wasmExports.xmlUCSIsKangxiRadicals)(e)),
				(Module._xmlUCSIsKannada = (e) =>
					(Module._xmlUCSIsKannada = wasmExports.xmlUCSIsKannada)(e)),
				(Module._xmlUCSIsKatakana = (e) =>
					(Module._xmlUCSIsKatakana = wasmExports.xmlUCSIsKatakana)(e)),
				(Module._xmlUCSIsKatakanaPhoneticExtensions = (e) =>
					(Module._xmlUCSIsKatakanaPhoneticExtensions =
						wasmExports.xmlUCSIsKatakanaPhoneticExtensions)(e)),
				(Module._xmlUCSIsKhmer = (e) => (Module._xmlUCSIsKhmer = wasmExports.xmlUCSIsKhmer)(e)),
				(Module._xmlUCSIsKhmerSymbols = (e) =>
					(Module._xmlUCSIsKhmerSymbols = wasmExports.xmlUCSIsKhmerSymbols)(e)),
				(Module._xmlUCSIsLao = (e) => (Module._xmlUCSIsLao = wasmExports.xmlUCSIsLao)(e)),
				(Module._xmlUCSIsLatin1Supplement = (e) =>
					(Module._xmlUCSIsLatin1Supplement = wasmExports.xmlUCSIsLatin1Supplement)(e)),
				(Module._xmlUCSIsLatinExtendedA = (e) =>
					(Module._xmlUCSIsLatinExtendedA = wasmExports.xmlUCSIsLatinExtendedA)(e)),
				(Module._xmlUCSIsLatinExtendedB = (e) =>
					(Module._xmlUCSIsLatinExtendedB = wasmExports.xmlUCSIsLatinExtendedB)(e)),
				(Module._xmlUCSIsLatinExtendedAdditional = (e) =>
					(Module._xmlUCSIsLatinExtendedAdditional = wasmExports.xmlUCSIsLatinExtendedAdditional)(
						e
					)),
				(Module._xmlUCSIsLetterlikeSymbols = (e) =>
					(Module._xmlUCSIsLetterlikeSymbols = wasmExports.xmlUCSIsLetterlikeSymbols)(e)),
				(Module._xmlUCSIsLimbu = (e) => (Module._xmlUCSIsLimbu = wasmExports.xmlUCSIsLimbu)(e)),
				(Module._xmlUCSIsLinearBIdeograms = (e) =>
					(Module._xmlUCSIsLinearBIdeograms = wasmExports.xmlUCSIsLinearBIdeograms)(e)),
				(Module._xmlUCSIsLinearBSyllabary = (e) =>
					(Module._xmlUCSIsLinearBSyllabary = wasmExports.xmlUCSIsLinearBSyllabary)(e)),
				(Module._xmlUCSIsLowSurrogates = (e) =>
					(Module._xmlUCSIsLowSurrogates = wasmExports.xmlUCSIsLowSurrogates)(e)),
				(Module._xmlUCSIsMalayalam = (e) =>
					(Module._xmlUCSIsMalayalam = wasmExports.xmlUCSIsMalayalam)(e)),
				(Module._xmlUCSIsMathematicalAlphanumericSymbols = (e) =>
					(Module._xmlUCSIsMathematicalAlphanumericSymbols =
						wasmExports.xmlUCSIsMathematicalAlphanumericSymbols)(e)),
				(Module._xmlUCSIsMathematicalOperators = (e) =>
					(Module._xmlUCSIsMathematicalOperators = wasmExports.xmlUCSIsMathematicalOperators)(e)),
				(Module._xmlUCSIsMiscellaneousMathematicalSymbolsA = (e) =>
					(Module._xmlUCSIsMiscellaneousMathematicalSymbolsA =
						wasmExports.xmlUCSIsMiscellaneousMathematicalSymbolsA)(e)),
				(Module._xmlUCSIsMiscellaneousMathematicalSymbolsB = (e) =>
					(Module._xmlUCSIsMiscellaneousMathematicalSymbolsB =
						wasmExports.xmlUCSIsMiscellaneousMathematicalSymbolsB)(e)),
				(Module._xmlUCSIsMiscellaneousSymbols = (e) =>
					(Module._xmlUCSIsMiscellaneousSymbols = wasmExports.xmlUCSIsMiscellaneousSymbols)(e)),
				(Module._xmlUCSIsMiscellaneousSymbolsandArrows = (e) =>
					(Module._xmlUCSIsMiscellaneousSymbolsandArrows =
						wasmExports.xmlUCSIsMiscellaneousSymbolsandArrows)(e)),
				(Module._xmlUCSIsMiscellaneousTechnical = (e) =>
					(Module._xmlUCSIsMiscellaneousTechnical = wasmExports.xmlUCSIsMiscellaneousTechnical)(e)),
				(Module._xmlUCSIsMongolian = (e) =>
					(Module._xmlUCSIsMongolian = wasmExports.xmlUCSIsMongolian)(e)),
				(Module._xmlUCSIsMusicalSymbols = (e) =>
					(Module._xmlUCSIsMusicalSymbols = wasmExports.xmlUCSIsMusicalSymbols)(e)),
				(Module._xmlUCSIsMyanmar = (e) =>
					(Module._xmlUCSIsMyanmar = wasmExports.xmlUCSIsMyanmar)(e)),
				(Module._xmlUCSIsNumberForms = (e) =>
					(Module._xmlUCSIsNumberForms = wasmExports.xmlUCSIsNumberForms)(e)),
				(Module._xmlUCSIsOgham = (e) => (Module._xmlUCSIsOgham = wasmExports.xmlUCSIsOgham)(e)),
				(Module._xmlUCSIsOldItalic = (e) =>
					(Module._xmlUCSIsOldItalic = wasmExports.xmlUCSIsOldItalic)(e)),
				(Module._xmlUCSIsOpticalCharacterRecognition = (e) =>
					(Module._xmlUCSIsOpticalCharacterRecognition =
						wasmExports.xmlUCSIsOpticalCharacterRecognition)(e)),
				(Module._xmlUCSIsOriya = (e) => (Module._xmlUCSIsOriya = wasmExports.xmlUCSIsOriya)(e)),
				(Module._xmlUCSIsOsmanya = (e) =>
					(Module._xmlUCSIsOsmanya = wasmExports.xmlUCSIsOsmanya)(e)),
				(Module._xmlUCSIsPhoneticExtensions = (e) =>
					(Module._xmlUCSIsPhoneticExtensions = wasmExports.xmlUCSIsPhoneticExtensions)(e)),
				(Module._xmlUCSIsPrivateUse = (e) =>
					(Module._xmlUCSIsPrivateUse = wasmExports.xmlUCSIsPrivateUse)(e)),
				(Module._xmlUCSIsPrivateUseArea = (e) =>
					(Module._xmlUCSIsPrivateUseArea = wasmExports.xmlUCSIsPrivateUseArea)(e)),
				(Module._xmlUCSIsRunic = (e) => (Module._xmlUCSIsRunic = wasmExports.xmlUCSIsRunic)(e)),
				(Module._xmlUCSIsShavian = (e) =>
					(Module._xmlUCSIsShavian = wasmExports.xmlUCSIsShavian)(e)),
				(Module._xmlUCSIsSinhala = (e) =>
					(Module._xmlUCSIsSinhala = wasmExports.xmlUCSIsSinhala)(e)),
				(Module._xmlUCSIsSmallFormVariants = (e) =>
					(Module._xmlUCSIsSmallFormVariants = wasmExports.xmlUCSIsSmallFormVariants)(e)),
				(Module._xmlUCSIsSpacingModifierLetters = (e) =>
					(Module._xmlUCSIsSpacingModifierLetters = wasmExports.xmlUCSIsSpacingModifierLetters)(e)),
				(Module._xmlUCSIsSpecials = (e) =>
					(Module._xmlUCSIsSpecials = wasmExports.xmlUCSIsSpecials)(e)),
				(Module._xmlUCSIsSuperscriptsandSubscripts = (e) =>
					(Module._xmlUCSIsSuperscriptsandSubscripts =
						wasmExports.xmlUCSIsSuperscriptsandSubscripts)(e)),
				(Module._xmlUCSIsSupplementalArrowsA = (e) =>
					(Module._xmlUCSIsSupplementalArrowsA = wasmExports.xmlUCSIsSupplementalArrowsA)(e)),
				(Module._xmlUCSIsSupplementalArrowsB = (e) =>
					(Module._xmlUCSIsSupplementalArrowsB = wasmExports.xmlUCSIsSupplementalArrowsB)(e)),
				(Module._xmlUCSIsSupplementalMathematicalOperators = (e) =>
					(Module._xmlUCSIsSupplementalMathematicalOperators =
						wasmExports.xmlUCSIsSupplementalMathematicalOperators)(e)),
				(Module._xmlUCSIsSupplementaryPrivateUseAreaA = (e) =>
					(Module._xmlUCSIsSupplementaryPrivateUseAreaA =
						wasmExports.xmlUCSIsSupplementaryPrivateUseAreaA)(e)),
				(Module._xmlUCSIsSupplementaryPrivateUseAreaB = (e) =>
					(Module._xmlUCSIsSupplementaryPrivateUseAreaB =
						wasmExports.xmlUCSIsSupplementaryPrivateUseAreaB)(e)),
				(Module._xmlUCSIsSyriac = (e) => (Module._xmlUCSIsSyriac = wasmExports.xmlUCSIsSyriac)(e)),
				(Module._xmlUCSIsTagalog = (e) =>
					(Module._xmlUCSIsTagalog = wasmExports.xmlUCSIsTagalog)(e)),
				(Module._xmlUCSIsTagbanwa = (e) =>
					(Module._xmlUCSIsTagbanwa = wasmExports.xmlUCSIsTagbanwa)(e)),
				(Module._xmlUCSIsTags = (e) => (Module._xmlUCSIsTags = wasmExports.xmlUCSIsTags)(e)),
				(Module._xmlUCSIsTaiLe = (e) => (Module._xmlUCSIsTaiLe = wasmExports.xmlUCSIsTaiLe)(e)),
				(Module._xmlUCSIsTaiXuanJingSymbols = (e) =>
					(Module._xmlUCSIsTaiXuanJingSymbols = wasmExports.xmlUCSIsTaiXuanJingSymbols)(e)),
				(Module._xmlUCSIsTamil = (e) => (Module._xmlUCSIsTamil = wasmExports.xmlUCSIsTamil)(e)),
				(Module._xmlUCSIsTelugu = (e) => (Module._xmlUCSIsTelugu = wasmExports.xmlUCSIsTelugu)(e)),
				(Module._xmlUCSIsThaana = (e) => (Module._xmlUCSIsThaana = wasmExports.xmlUCSIsThaana)(e)),
				(Module._xmlUCSIsThai = (e) => (Module._xmlUCSIsThai = wasmExports.xmlUCSIsThai)(e)),
				(Module._xmlUCSIsTibetan = (e) =>
					(Module._xmlUCSIsTibetan = wasmExports.xmlUCSIsTibetan)(e)),
				(Module._xmlUCSIsUgaritic = (e) =>
					(Module._xmlUCSIsUgaritic = wasmExports.xmlUCSIsUgaritic)(e)),
				(Module._xmlUCSIsUnifiedCanadianAboriginalSyllabics = (e) =>
					(Module._xmlUCSIsUnifiedCanadianAboriginalSyllabics =
						wasmExports.xmlUCSIsUnifiedCanadianAboriginalSyllabics)(e)),
				(Module._xmlUCSIsVariationSelectors = (e) =>
					(Module._xmlUCSIsVariationSelectors = wasmExports.xmlUCSIsVariationSelectors)(e)),
				(Module._xmlUCSIsVariationSelectorsSupplement = (e) =>
					(Module._xmlUCSIsVariationSelectorsSupplement =
						wasmExports.xmlUCSIsVariationSelectorsSupplement)(e)),
				(Module._xmlUCSIsYiRadicals = (e) =>
					(Module._xmlUCSIsYiRadicals = wasmExports.xmlUCSIsYiRadicals)(e)),
				(Module._xmlUCSIsYiSyllables = (e) =>
					(Module._xmlUCSIsYiSyllables = wasmExports.xmlUCSIsYiSyllables)(e)),
				(Module._xmlUCSIsYijingHexagramSymbols = (e) =>
					(Module._xmlUCSIsYijingHexagramSymbols = wasmExports.xmlUCSIsYijingHexagramSymbols)(e)),
				(Module._xmlUCSIsCatCs = (e) => (Module._xmlUCSIsCatCs = wasmExports.xmlUCSIsCatCs)(e)),
				(Module.___small_fprintf = (e, t, I) =>
					(Module.___small_fprintf = wasmExports.__small_fprintf)(e, t, I)),
				(Module._xmlXPathBooleanFunction = (e, t) =>
					(Module._xmlXPathBooleanFunction = wasmExports.xmlXPathBooleanFunction)(e, t)),
				(Module._xmlXPathCeilingFunction = (e, t) =>
					(Module._xmlXPathCeilingFunction = wasmExports.xmlXPathCeilingFunction)(e, t)),
				(Module._xmlXPathCountFunction = (e, t) =>
					(Module._xmlXPathCountFunction = wasmExports.xmlXPathCountFunction)(e, t)),
				(Module._xmlXPathConcatFunction = (e, t) =>
					(Module._xmlXPathConcatFunction = wasmExports.xmlXPathConcatFunction)(e, t)),
				(Module._xmlXPathContainsFunction = (e, t) =>
					(Module._xmlXPathContainsFunction = wasmExports.xmlXPathContainsFunction)(e, t)),
				(Module._xmlXPathIdFunction = (e, t) =>
					(Module._xmlXPathIdFunction = wasmExports.xmlXPathIdFunction)(e, t)),
				(Module._xmlXPathFalseFunction = (e, t) =>
					(Module._xmlXPathFalseFunction = wasmExports.xmlXPathFalseFunction)(e, t)),
				(Module._xmlXPathFloorFunction = (e, t) =>
					(Module._xmlXPathFloorFunction = wasmExports.xmlXPathFloorFunction)(e, t)),
				(Module._xmlXPathLastFunction = (e, t) =>
					(Module._xmlXPathLastFunction = wasmExports.xmlXPathLastFunction)(e, t)),
				(Module._xmlXPathLangFunction = (e, t) =>
					(Module._xmlXPathLangFunction = wasmExports.xmlXPathLangFunction)(e, t)),
				(Module._xmlXPathLocalNameFunction = (e, t) =>
					(Module._xmlXPathLocalNameFunction = wasmExports.xmlXPathLocalNameFunction)(e, t)),
				(Module._xmlXPathNotFunction = (e, t) =>
					(Module._xmlXPathNotFunction = wasmExports.xmlXPathNotFunction)(e, t)),
				(Module._xmlXPathNamespaceURIFunction = (e, t) =>
					(Module._xmlXPathNamespaceURIFunction = wasmExports.xmlXPathNamespaceURIFunction)(e, t)),
				(Module._xmlXPathNormalizeFunction = (e, t) =>
					(Module._xmlXPathNormalizeFunction = wasmExports.xmlXPathNormalizeFunction)(e, t)),
				(Module._xmlXPathNumberFunction = (e, t) =>
					(Module._xmlXPathNumberFunction = wasmExports.xmlXPathNumberFunction)(e, t)),
				(Module._xmlXPathPositionFunction = (e, t) =>
					(Module._xmlXPathPositionFunction = wasmExports.xmlXPathPositionFunction)(e, t)),
				(Module._xmlXPathRoundFunction = (e, t) =>
					(Module._xmlXPathRoundFunction = wasmExports.xmlXPathRoundFunction)(e, t)),
				(Module._xmlXPathStringFunction = (e, t) =>
					(Module._xmlXPathStringFunction = wasmExports.xmlXPathStringFunction)(e, t)),
				(Module._xmlXPathStringLengthFunction = (e, t) =>
					(Module._xmlXPathStringLengthFunction = wasmExports.xmlXPathStringLengthFunction)(e, t)),
				(Module._xmlXPathStartsWithFunction = (e, t) =>
					(Module._xmlXPathStartsWithFunction = wasmExports.xmlXPathStartsWithFunction)(e, t)),
				(Module._xmlXPathSubstringFunction = (e, t) =>
					(Module._xmlXPathSubstringFunction = wasmExports.xmlXPathSubstringFunction)(e, t)),
				(Module._xmlXPathSubstringBeforeFunction = (e, t) =>
					(Module._xmlXPathSubstringBeforeFunction = wasmExports.xmlXPathSubstringBeforeFunction)(
						e,
						t
					)),
				(Module._xmlXPathSubstringAfterFunction = (e, t) =>
					(Module._xmlXPathSubstringAfterFunction = wasmExports.xmlXPathSubstringAfterFunction)(
						e,
						t
					)),
				(Module._xmlXPathSumFunction = (e, t) =>
					(Module._xmlXPathSumFunction = wasmExports.xmlXPathSumFunction)(e, t)),
				(Module._xmlXPathTrueFunction = (e, t) =>
					(Module._xmlXPathTrueFunction = wasmExports.xmlXPathTrueFunction)(e, t)),
				(Module._xmlXPathTranslateFunction = (e, t) =>
					(Module._xmlXPathTranslateFunction = wasmExports.xmlXPathTranslateFunction)(e, t)),
				(Module._xmlXPathNextSelf = (e, t) =>
					(Module._xmlXPathNextSelf = wasmExports.xmlXPathNextSelf)(e, t)),
				(Module._xmlXPathNextChild = (e, t) =>
					(Module._xmlXPathNextChild = wasmExports.xmlXPathNextChild)(e, t)),
				(Module._xmlXPathNextDescendant = (e, t) =>
					(Module._xmlXPathNextDescendant = wasmExports.xmlXPathNextDescendant)(e, t)),
				(Module._xmlXPathNextDescendantOrSelf = (e, t) =>
					(Module._xmlXPathNextDescendantOrSelf = wasmExports.xmlXPathNextDescendantOrSelf)(e, t)),
				(Module._xmlXPathNextParent = (e, t) =>
					(Module._xmlXPathNextParent = wasmExports.xmlXPathNextParent)(e, t)),
				(Module._xmlXPathNextAncestor = (e, t) =>
					(Module._xmlXPathNextAncestor = wasmExports.xmlXPathNextAncestor)(e, t)),
				(Module._xmlXPathNextAncestorOrSelf = (e, t) =>
					(Module._xmlXPathNextAncestorOrSelf = wasmExports.xmlXPathNextAncestorOrSelf)(e, t)),
				(Module._xmlXPathNextFollowingSibling = (e, t) =>
					(Module._xmlXPathNextFollowingSibling = wasmExports.xmlXPathNextFollowingSibling)(e, t)),
				(Module._xmlXPathNextPrecedingSibling = (e, t) =>
					(Module._xmlXPathNextPrecedingSibling = wasmExports.xmlXPathNextPrecedingSibling)(e, t)),
				(Module._xmlXPathNextFollowing = (e, t) =>
					(Module._xmlXPathNextFollowing = wasmExports.xmlXPathNextFollowing)(e, t)),
				(Module._xmlXPathNextNamespace = (e, t) =>
					(Module._xmlXPathNextNamespace = wasmExports.xmlXPathNextNamespace)(e, t)),
				(Module._xmlXPathNextAttribute = (e, t) =>
					(Module._xmlXPathNextAttribute = wasmExports.xmlXPathNextAttribute)(e, t)),
				(Module._zcalloc = (e, t, I) => (Module._zcalloc = wasmExports.zcalloc)(e, t, I)),
				(Module._zcfree = (e, t) => (Module._zcfree = wasmExports.zcfree)(e, t)),
				(Module._strerror = (e) => (Module._strerror = wasmExports.strerror)(e));
			var ___dl_seterr = (e, t) => (___dl_seterr = wasmExports.__dl_seterr)(e, t);
			(Module._putc = (e, t) => (Module._putc = wasmExports.putc)(e, t)),
				(Module._gmtime = (e) => (Module._gmtime = wasmExports.gmtime)(e));
			var _htonl = (e) => (_htonl = wasmExports.htonl)(e),
				_htons = (e) => (_htons = wasmExports.htons)(e);
			Module._ioctl = (e, t, I) => (Module._ioctl = wasmExports.ioctl)(e, t, I);
			var _emscripten_builtin_memalign = (e, t) =>
					(_emscripten_builtin_memalign = wasmExports.emscripten_builtin_memalign)(e, t),
				_ntohs = (e) => (_ntohs = wasmExports.ntohs)(e);
			(Module._srand = (e) => (Module._srand = wasmExports.srand)(e)),
				(Module._rand = () => (Module._rand = wasmExports.rand)());
			var __emscripten_timeout = (e, t) =>
				(__emscripten_timeout = wasmExports._emscripten_timeout)(e, t);
			(Module.___floatsitf = (e, t) => (Module.___floatsitf = wasmExports.__floatsitf)(e, t)),
				(Module.___multf3 = (e, t, I, B, tr) =>
					(Module.___multf3 = wasmExports.__multf3)(e, t, I, B, tr)),
				(Module.___extenddftf2 = (e, t) =>
					(Module.___extenddftf2 = wasmExports.__extenddftf2)(e, t)),
				(Module.___getf2 = (e, t, I, B) => (Module.___getf2 = wasmExports.__getf2)(e, t, I, B)),
				(Module.___subtf3 = (e, t, I, B, tr) =>
					(Module.___subtf3 = wasmExports.__subtf3)(e, t, I, B, tr)),
				(Module.___letf2 = (e, t, I, B) => (Module.___letf2 = wasmExports.__letf2)(e, t, I, B)),
				(Module.___lttf2 = (e, t, I, B) => (Module.___lttf2 = wasmExports.__lttf2)(e, t, I, B));
			var _setThrew = (e, t) => (_setThrew = wasmExports.setThrew)(e, t),
				__emscripten_tempret_set = (e) =>
					(__emscripten_tempret_set = wasmExports._emscripten_tempret_set)(e),
				__emscripten_tempret_get = () =>
					(__emscripten_tempret_get = wasmExports._emscripten_tempret_get)();
			Module.___fixtfsi = (e, t) => (Module.___fixtfsi = wasmExports.__fixtfsi)(e, t);
			var __emscripten_stack_restore = (e) =>
					(__emscripten_stack_restore = wasmExports._emscripten_stack_restore)(e),
				__emscripten_stack_alloc = (e) =>
					(__emscripten_stack_alloc = wasmExports._emscripten_stack_alloc)(e),
				_emscripten_stack_get_current = () =>
					(_emscripten_stack_get_current = wasmExports.emscripten_stack_get_current)();
			(Module._ScanKeywords = 18770052),
				(Module._stderr = 18792480),
				(Module._stdout = 18792784),
				(Module._TopMemoryContext = 18830716),
				(Module._MainLWLockArray = 18800668),
				(Module._MyProc = 18802328),
				(Module._MyProcPid = 18824228),
				(Module._MyLatch = 18824260),
				(Module._CurrentMemoryContext = 18830712),
				(Module._InterruptPending = 18824092),
				(Module._pg_global_prng_state = 18936304),
				(Module._CurrentResourceOwner = 18830692),
				(Module._InterruptHoldoffCount = 18824132),
				(Module._IsUnderPostmaster = 18824165),
				(Module._wal_level = 18758340),
				(Module._MyDatabaseId = 18824148),
				(Module._error_context_stack = 18816816),
				(Module._PG_exception_stack = 18816820),
				(Module.___THREW__ = 18950052),
				(Module.___threwValue = 18950056),
				(Module._ShmemVariableCache = 18849760),
				(Module._shmem_startup_hook = 18794508),
				(Module._debug_query_string = 18848300),
				(Module._CritSectionCount = 18824140),
				(Module._old_snapshot_threshold = 18823756),
				(Module._TopTransactionResourceOwner = 18830700),
				(Module._LocalBufferBlockPointers = 18800556),
				(Module._BufferBlocks = 18795304),
				(Module._pgBufferUsage = 18813728),
				(Module._GUC_check_errdetail_string = 18814680),
				(Module._NBuffers = 18690456),
				(Module._BufferDescriptors = 18795300),
				(Module._ParallelWorkerNumber = 18767008),
				(Module._stdin = 18792632),
				(Module._ScanKeywordTokens = 17487664),
				(Module._post_parse_analyze_hook = 18802584),
				(Module._progname = 18848060),
				(Module._DataDir = 18824144),
				(Module._MyStartTime = 18824232),
				(Module._MyProcPort = 18824248),
				(Module._Log_directory = 18803120),
				(Module._Log_filename = 18803124),
				(Module._ConfigReloadPending = 18803272),
				(Module._ShutdownRequestPending = 18803276),
				(Module._process_shared_preload_libraries_in_progress = 18824080),
				(Module._wal_segment_size = 18758360),
				(Module._application_name = 18815988),
				(Module._XactIsoLevel = 18758700),
				(Module._RmgrTable = 18758816),
				(Module._CacheMemoryContext = 18830728),
				(Module._TopTransactionContext = 18830736),
				(Module._TTSOpsVirtual = 18638668),
				(Module._WalReceiverFunctions = 18803712),
				(Module._TTSOpsMinimalTuple = 18638764),
				(Module._cluster_name = 18640444),
				(Module._work_mem = 18690432),
				(Module._ClientAuthentication_hook = 18804032),
				(Module._cma_rsize = 18848108),
				(Module._SOCKET_DATA = 18854312),
				(Module._SOCKET_FILE = 18854308),
				(Module._TTSOpsHeapTuple = 18638716),
				(Module._SnapshotAnyData = 18690240),
				(Module._ExecutorStart_hook = 18813600),
				(Module._ExecutorRun_hook = 18813604),
				(Module._ExecutorFinish_hook = 18813608),
				(Module._ExecutorEnd_hook = 18813612),
				(Module._SPI_processed = 18813624),
				(Module._SPI_tuptable = 18813632),
				(Module._SPI_result = 18813636),
				(Module._pgWalUsage = 18813840),
				(Module._cpu_operator_cost = 18638912),
				(Module._planner_hook = 18813876),
				(Module._maintenance_work_mem = 18690448),
				(Module._max_parallel_maintenance_workers = 18690452),
				(Module._cpu_tuple_cost = 18638896),
				(Module._seq_page_cost = 18638880),
				(Module._check_function_bodies = 18640389),
				(Module._quote_all_identifiers = 18848065),
				(Module._extra_float_digits = 18692128),
				(Module._IntervalStyle = 18824172),
				(Module._pg_crc32_table = 18115504),
				(Module._oldSnapshotControl = 18823760),
				(Module._shmem_request_hook = 18824084),
				(Module._DateStyle = 18690420),
				(Module._pg_number_of_ones = 18433360),
				(Module._xmlStructuredError = 18936668),
				(Module._xmlStructuredErrorContext = 18936676),
				(Module._xmlGenericErrorContext = 18936672),
				(Module._xmlGenericError = 18774356),
				(Module._xmlIsBaseCharGroup = 18774120),
				(Module._xmlIsDigitGroup = 18774152),
				(Module._xmlIsCombiningGroup = 18774136),
				(Module._xmlIsExtenderGroup = 18774168),
				(Module._xmlFree = 18774320),
				(Module._ProcessUtility_hook = 18848012),
				(Module._single_mode_feed = 18848076),
				(Module._cma_wsize = 18848116),
				(Module._check_password_hook = 18850784),
				(Module._IDB_STAGE = 18854320),
				(Module._IDB_PIPE_FP = 18854316),
				(Module._pg_scram_mech = 18774064),
				(Module._pg_g_threadlock = 18772168),
				(Module._pgresStatus = 18773856),
				(Module._xmlIsPubidChar_tab = 18433648),
				(Module._xmlGetWarningsDefaultValue = 18774348),
				(Module._xmlMalloc = 18774324),
				(Module._xmlRealloc = 18774332),
				(Module._xmlLastError = 18936688),
				(Module._xmlMallocAtomic = 18774328),
				(Module._xmlMemStrdup = 18774336),
				(Module._xmlBufferAllocScheme = 18774340),
				(Module._xmlDefaultBufferSize = 18774344),
				(Module._xmlParserDebugEntities = 18936628),
				(Module._xmlDoValidityCheckingDefaultValue = 18936632),
				(Module._xmlLoadExtDtdDefaultValue = 18936636),
				(Module._xmlPedanticParserDefaultValue = 18936640),
				(Module._xmlLineNumbersDefaultValue = 18936644),
				(Module._xmlKeepBlanksDefaultValue = 18774352),
				(Module._xmlSubstituteEntitiesDefaultValue = 18936648),
				(Module._xmlRegisterNodeDefaultValue = 18936652),
				(Module._xmlDeregisterNodeDefaultValue = 18936656),
				(Module._xmlParserInputBufferCreateFilenameValue = 18936660),
				(Module._xmlOutputBufferCreateFilenameValue = 18936664),
				(Module._xmlIndentTreeOutput = 18774360),
				(Module._xmlTreeIndentString = 18774364),
				(Module._xmlSaveNoEmptyTags = 18936680),
				(Module._xmlDefaultSAXHandler = 18774368),
				(Module._xmlDefaultSAXLocator = 18774480),
				(Module._xmlParserMaxDepth = 18775140),
				(Module._xmlStringText = 18435456),
				(Module._xmlStringComment = 18435471),
				(Module._xmlStringTextNoenc = 18435461),
				(Module._xmlXPathNAN = 18937352),
				(Module._xmlXPathNINF = 18937368),
				(Module._xmlXPathPINF = 18937360),
				(Module._z_errmsg = 18791696),
				(Module.__length_code = 18455120),
				(Module.__dist_code = 18454608);
			function invoke_i(e) {
				var t = stackSave();
				try {
					return getWasmTableEntry(e)();
				} catch (I) {
					if ((stackRestore(t), I !== I + 0)) throw I;
					_setThrew(1, 0);
				}
			}
			function invoke_v(e) {
				var t = stackSave();
				try {
					getWasmTableEntry(e)();
				} catch (I) {
					if ((stackRestore(t), I !== I + 0)) throw I;
					_setThrew(1, 0);
				}
			}
			function invoke_vi(e, t) {
				var I = stackSave();
				try {
					getWasmTableEntry(e)(t);
				} catch (B) {
					if ((stackRestore(I), B !== B + 0)) throw B;
					_setThrew(1, 0);
				}
			}
			function invoke_iii(e, t, I) {
				var B = stackSave();
				try {
					return getWasmTableEntry(e)(t, I);
				} catch (tr) {
					if ((stackRestore(B), tr !== tr + 0)) throw tr;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiii(e, t, I, B, tr, rr) {
				var ir = stackSave();
				try {
					return getWasmTableEntry(e)(t, I, B, tr, rr);
				} catch (lr) {
					if ((stackRestore(ir), lr !== lr + 0)) throw lr;
					_setThrew(1, 0);
				}
			}
			function invoke_viii(e, t, I, B) {
				var tr = stackSave();
				try {
					getWasmTableEntry(e)(t, I, B);
				} catch (rr) {
					if ((stackRestore(tr), rr !== rr + 0)) throw rr;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiiiii(e, t, I, B, tr, rr, ir, lr) {
				var dr = stackSave();
				try {
					getWasmTableEntry(e)(t, I, B, tr, rr, ir, lr);
				} catch (mr) {
					if ((stackRestore(dr), mr !== mr + 0)) throw mr;
					_setThrew(1, 0);
				}
			}
			function invoke_iiii(e, t, I, B) {
				var tr = stackSave();
				try {
					return getWasmTableEntry(e)(t, I, B);
				} catch (rr) {
					if ((stackRestore(tr), rr !== rr + 0)) throw rr;
					_setThrew(1, 0);
				}
			}
			function invoke_viiii(e, t, I, B, tr) {
				var rr = stackSave();
				try {
					getWasmTableEntry(e)(t, I, B, tr);
				} catch (ir) {
					if ((stackRestore(rr), ir !== ir + 0)) throw ir;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiii(e, t, I, B, tr) {
				var rr = stackSave();
				try {
					return getWasmTableEntry(e)(t, I, B, tr);
				} catch (ir) {
					if ((stackRestore(rr), ir !== ir + 0)) throw ir;
					_setThrew(1, 0);
				}
			}
			function invoke_vii(e, t, I) {
				var B = stackSave();
				try {
					getWasmTableEntry(e)(t, I);
				} catch (tr) {
					if ((stackRestore(B), tr !== tr + 0)) throw tr;
					_setThrew(1, 0);
				}
			}
			function invoke_ii(e, t) {
				var I = stackSave();
				try {
					return getWasmTableEntry(e)(t);
				} catch (B) {
					if ((stackRestore(I), B !== B + 0)) throw B;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiiiiii(e, t, I, B, tr, rr, ir, lr, dr) {
				var mr = stackSave();
				try {
					getWasmTableEntry(e)(t, I, B, tr, rr, ir, lr, dr);
				} catch (_r) {
					if ((stackRestore(mr), _r !== _r + 0)) throw _r;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiii(e, t, I, B, tr, rr) {
				var ir = stackSave();
				try {
					getWasmTableEntry(e)(t, I, B, tr, rr);
				} catch (lr) {
					if ((stackRestore(ir), lr !== lr + 0)) throw lr;
					_setThrew(1, 0);
				}
			}
			function invoke_ij(e, t) {
				var I = stackSave();
				try {
					return getWasmTableEntry(e)(t);
				} catch (B) {
					if ((stackRestore(I), B !== B + 0)) throw B;
					_setThrew(1, 0);
				}
			}
			function invoke_ji(e, t) {
				var I = stackSave();
				try {
					return getWasmTableEntry(e)(t);
				} catch (B) {
					if ((stackRestore(I), B !== B + 0)) throw B;
					return _setThrew(1, 0), 0n;
				}
			}
			function invoke_ijiiiiii(e, t, I, B, tr, rr, ir, lr) {
				var dr = stackSave();
				try {
					return getWasmTableEntry(e)(t, I, B, tr, rr, ir, lr);
				} catch (mr) {
					if ((stackRestore(dr), mr !== mr + 0)) throw mr;
					_setThrew(1, 0);
				}
			}
			function invoke_vij(e, t, I) {
				var B = stackSave();
				try {
					getWasmTableEntry(e)(t, I);
				} catch (tr) {
					if ((stackRestore(B), tr !== tr + 0)) throw tr;
					_setThrew(1, 0);
				}
			}
			function invoke_vj(e, t) {
				var I = stackSave();
				try {
					getWasmTableEntry(e)(t);
				} catch (B) {
					if ((stackRestore(I), B !== B + 0)) throw B;
					_setThrew(1, 0);
				}
			}
			function invoke_viijii(e, t, I, B, tr, rr) {
				var ir = stackSave();
				try {
					getWasmTableEntry(e)(t, I, B, tr, rr);
				} catch (lr) {
					if ((stackRestore(ir), lr !== lr + 0)) throw lr;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiiji(e, t, I, B, tr, rr, ir) {
				var lr = stackSave();
				try {
					return getWasmTableEntry(e)(t, I, B, tr, rr, ir);
				} catch (dr) {
					if ((stackRestore(lr), dr !== dr + 0)) throw dr;
					_setThrew(1, 0);
				}
			}
			function invoke_viijiiii(e, t, I, B, tr, rr, ir, lr) {
				var dr = stackSave();
				try {
					getWasmTableEntry(e)(t, I, B, tr, rr, ir, lr);
				} catch (mr) {
					if ((stackRestore(dr), mr !== mr + 0)) throw mr;
					_setThrew(1, 0);
				}
			}
			function invoke_viij(e, t, I, B) {
				var tr = stackSave();
				try {
					getWasmTableEntry(e)(t, I, B);
				} catch (rr) {
					if ((stackRestore(tr), rr !== rr + 0)) throw rr;
					_setThrew(1, 0);
				}
			}
			function invoke_jiiiiiiii(e, t, I, B, tr, rr, ir, lr, dr) {
				var mr = stackSave();
				try {
					return getWasmTableEntry(e)(t, I, B, tr, rr, ir, lr, dr);
				} catch (_r) {
					if ((stackRestore(mr), _r !== _r + 0)) throw _r;
					return _setThrew(1, 0), 0n;
				}
			}
			function invoke_jiiiii(e, t, I, B, tr, rr) {
				var ir = stackSave();
				try {
					return getWasmTableEntry(e)(t, I, B, tr, rr);
				} catch (lr) {
					if ((stackRestore(ir), lr !== lr + 0)) throw lr;
					return _setThrew(1, 0), 0n;
				}
			}
			function invoke_iiiiiiiii(e, t, I, B, tr, rr, ir, lr, dr) {
				var mr = stackSave();
				try {
					return getWasmTableEntry(e)(t, I, B, tr, rr, ir, lr, dr);
				} catch (_r) {
					if ((stackRestore(mr), _r !== _r + 0)) throw _r;
					_setThrew(1, 0);
				}
			}
			function invoke_vji(e, t, I) {
				var B = stackSave();
				try {
					getWasmTableEntry(e)(t, I);
				} catch (tr) {
					if ((stackRestore(B), tr !== tr + 0)) throw tr;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiijii(e, t, I, B, tr, rr, ir) {
				var lr = stackSave();
				try {
					return getWasmTableEntry(e)(t, I, B, tr, rr, ir);
				} catch (dr) {
					if ((stackRestore(lr), dr !== dr + 0)) throw dr;
					_setThrew(1, 0);
				}
			}
			function invoke_vijiji(e, t, I, B, tr, rr) {
				var ir = stackSave();
				try {
					getWasmTableEntry(e)(t, I, B, tr, rr);
				} catch (lr) {
					if ((stackRestore(ir), lr !== lr + 0)) throw lr;
					_setThrew(1, 0);
				}
			}
			function invoke_viji(e, t, I, B) {
				var tr = stackSave();
				try {
					getWasmTableEntry(e)(t, I, B);
				} catch (rr) {
					if ((stackRestore(tr), rr !== rr + 0)) throw rr;
					_setThrew(1, 0);
				}
			}
			function invoke_iiij(e, t, I, B) {
				var tr = stackSave();
				try {
					return getWasmTableEntry(e)(t, I, B);
				} catch (rr) {
					if ((stackRestore(tr), rr !== rr + 0)) throw rr;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiiiii(e, t, I, B, tr, rr, ir, lr) {
				var dr = stackSave();
				try {
					return getWasmTableEntry(e)(t, I, B, tr, rr, ir, lr);
				} catch (mr) {
					if ((stackRestore(dr), mr !== mr + 0)) throw mr;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiiii(e, t, I, B, tr, rr, ir) {
				var lr = stackSave();
				try {
					return getWasmTableEntry(e)(t, I, B, tr, rr, ir);
				} catch (dr) {
					if ((stackRestore(lr), dr !== dr + 0)) throw dr;
					_setThrew(1, 0);
				}
			}
			function invoke_di(e, t) {
				var I = stackSave();
				try {
					return getWasmTableEntry(e)(t);
				} catch (B) {
					if ((stackRestore(I), B !== B + 0)) throw B;
					_setThrew(1, 0);
				}
			}
			function invoke_id(e, t) {
				var I = stackSave();
				try {
					return getWasmTableEntry(e)(t);
				} catch (B) {
					if ((stackRestore(I), B !== B + 0)) throw B;
					_setThrew(1, 0);
				}
			}
			function invoke_ijiiiii(e, t, I, B, tr, rr, ir) {
				var lr = stackSave();
				try {
					return getWasmTableEntry(e)(t, I, B, tr, rr, ir);
				} catch (dr) {
					if ((stackRestore(lr), dr !== dr + 0)) throw dr;
					_setThrew(1, 0);
				}
			}
			function invoke_jiiii(e, t, I, B, tr) {
				var rr = stackSave();
				try {
					return getWasmTableEntry(e)(t, I, B, tr);
				} catch (ir) {
					if ((stackRestore(rr), ir !== ir + 0)) throw ir;
					return _setThrew(1, 0), 0n;
				}
			}
			function invoke_viiiiii(e, t, I, B, tr, rr, ir) {
				var lr = stackSave();
				try {
					getWasmTableEntry(e)(t, I, B, tr, rr, ir);
				} catch (dr) {
					if ((stackRestore(lr), dr !== dr + 0)) throw dr;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiiiiiiiiii(e, t, I, B, tr, rr, ir, lr, dr, mr, _r, fr, hr) {
				var Mr = stackSave();
				try {
					getWasmTableEntry(e)(t, I, B, tr, rr, ir, lr, dr, mr, _r, fr, hr);
				} catch (gr) {
					if ((stackRestore(Mr), gr !== gr + 0)) throw gr;
					_setThrew(1, 0);
				}
			}
			function invoke_jii(e, t, I) {
				var B = stackSave();
				try {
					return getWasmTableEntry(e)(t, I);
				} catch (tr) {
					if ((stackRestore(B), tr !== tr + 0)) throw tr;
					return _setThrew(1, 0), 0n;
				}
			}
			function invoke_iiiij(e, t, I, B, tr) {
				var rr = stackSave();
				try {
					return getWasmTableEntry(e)(t, I, B, tr);
				} catch (ir) {
					if ((stackRestore(rr), ir !== ir + 0)) throw ir;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiiiiiii(e, t, I, B, tr, rr, ir, lr, dr, mr) {
				var _r = stackSave();
				try {
					return getWasmTableEntry(e)(t, I, B, tr, rr, ir, lr, dr, mr);
				} catch (fr) {
					if ((stackRestore(_r), fr !== fr + 0)) throw fr;
					_setThrew(1, 0);
				}
			}
			function invoke_viiji(e, t, I, B, tr) {
				var rr = stackSave();
				try {
					getWasmTableEntry(e)(t, I, B, tr);
				} catch (ir) {
					if ((stackRestore(rr), ir !== ir + 0)) throw ir;
					_setThrew(1, 0);
				}
			}
			function invoke_iiji(e, t, I, B) {
				var tr = stackSave();
				try {
					return getWasmTableEntry(e)(t, I, B);
				} catch (rr) {
					if ((stackRestore(tr), rr !== rr + 0)) throw rr;
					_setThrew(1, 0);
				}
			}
			function invoke_vid(e, t, I) {
				var B = stackSave();
				try {
					getWasmTableEntry(e)(t, I);
				} catch (tr) {
					if ((stackRestore(B), tr !== tr + 0)) throw tr;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiiiiiii(e, t, I, B, tr, rr, ir, lr, dr, mr) {
				var _r = stackSave();
				try {
					getWasmTableEntry(e)(t, I, B, tr, rr, ir, lr, dr, mr);
				} catch (fr) {
					if ((stackRestore(_r), fr !== fr + 0)) throw fr;
					_setThrew(1, 0);
				}
			}
			function invoke_viiij(e, t, I, B, tr) {
				var rr = stackSave();
				try {
					getWasmTableEntry(e)(t, I, B, tr);
				} catch (ir) {
					if ((stackRestore(rr), ir !== ir + 0)) throw ir;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiiiiiiiiiiiiii(
				e,
				t,
				I,
				B,
				tr,
				rr,
				ir,
				lr,
				dr,
				mr,
				_r,
				fr,
				hr,
				Mr,
				gr,
				yr,
				xr
			) {
				var vr = stackSave();
				try {
					return getWasmTableEntry(e)(t, I, B, tr, rr, ir, lr, dr, mr, _r, fr, hr, Mr, gr, yr, xr);
				} catch (Sr) {
					if ((stackRestore(vr), Sr !== Sr + 0)) throw Sr;
					_setThrew(1, 0);
				}
			}
			(Module.addRunDependency = addRunDependency),
				(Module.removeRunDependency = removeRunDependency),
				(Module.callMain = callMain),
				(Module.ccall = ccall),
				(Module.cwrap = cwrap),
				(Module.setValue = setValue),
				(Module.getValue = getValue),
				(Module.UTF8ToString = UTF8ToString),
				(Module.stringToNewUTF8 = stringToNewUTF8),
				(Module.stringToUTF8OnStack = stringToUTF8OnStack),
				(Module.FS_createPreloadedFile = FS_createPreloadedFile),
				(Module.FS_unlink = FS_unlink),
				(Module.FS_createPath = FS_createPath),
				(Module.FS_createDevice = FS_createDevice),
				(Module.FS = FS),
				(Module.FS_createDataFile = FS_createDataFile),
				(Module.FS_createLazyFile = FS_createLazyFile);
			var calledRun;
			dependenciesFulfilled = function e() {
				calledRun || run(), calledRun || (dependenciesFulfilled = e);
			};
			function callMain(e = []) {
				var t = resolveGlobalSymbol('main').sym;
				if (t) {
					e.unshift(thisProgram);
					var I = e.length,
						B = stackAlloc((I + 1) * 4),
						tr = B;
					e.forEach((ir) => {
						(HEAPU32[tr >> 2] = stringToUTF8OnStack(ir)), (tr += 4);
					}),
						(HEAPU32[tr >> 2] = 0);
					try {
						var rr = t(I, B);
						return exitJS(rr, !0), rr;
					} catch (ir) {
						return handleException(ir);
					}
				}
			}
			function run(e = arguments_) {
				if (runDependencies > 0 || (preRun(), runDependencies > 0)) return;
				function t() {
					var I;
					calledRun ||
						((calledRun = !0),
						(Module.calledRun = !0),
						!ABORT &&
							(initRuntime(),
							preMain(),
							readyPromiseResolve(Module),
							(I = Module.onRuntimeInitialized) == null || I.call(Module),
							shouldRunNow && callMain(e),
							postRun()));
				}
				Module.setStatus
					? (Module.setStatus('Running...'),
						setTimeout(() => {
							setTimeout(() => Module.setStatus(''), 1), t();
						}, 1))
					: t();
			}
			if (Module.preInit)
				for (
					typeof Module.preInit == 'function' && (Module.preInit = [Module.preInit]);
					Module.preInit.length > 0;

				)
					Module.preInit.pop()();
			var shouldRunNow = !0;
			return (
				Module.noInitialRun && (shouldRunNow = !1), run(), (moduleRtn = readyPromise), moduleRtn
			);
		};
	})(),
	ke = Qe,
	Te = ke,
	Y,
	W,
	j$1,
	J,
	$,
	_e,
	ie,
	me,
	Z,
	ae,
	oe,
	se,
	V,
	G,
	k,
	K,
	O,
	qe,
	re,
	pe = class Ms extends z {
		constructor(t = {}, I = {}) {
			super(),
				R$2(this, O),
				R$2(this, Y, !1),
				R$2(this, W, !1),
				R$2(this, j$1, !1),
				R$2(this, J, !1),
				R$2(this, $, !1),
				R$2(this, _e, new H()),
				R$2(this, ie, new H()),
				R$2(this, me, new H()),
				R$2(this, Z, !1),
				(this.debug = 0),
				R$2(this, ae),
				R$2(this, oe, []),
				R$2(this, se, new ye()),
				R$2(this, V),
				R$2(this, G),
				R$2(this, k, new Map()),
				R$2(this, K, new Set()),
				typeof t == 'string' ? (I = { dataDir: t, ...I }) : (I = t),
				(this.dataDir = I.dataDir),
				I.parsers !== void 0 && (this.parsers = { ...this.parsers, ...I.parsers }),
				I.serializers !== void 0 && (this.serializers = { ...this.serializers, ...I.serializers }),
				(I == null ? void 0 : I.debug) !== void 0 && (this.debug = I.debug),
				(I == null ? void 0 : I.relaxedDurability) !== void 0 && x$2(this, $, I.relaxedDurability),
				x$2(this, ae, I.extensions ?? {}),
				(this.waitReady = T(this, O, qe).call(this, I ?? {}));
		}
		static async create(t, I) {
			let B = typeof t == 'string' ? { dataDir: t, ...(I ?? {}) } : (t ?? {}),
				tr = new Ms(B);
			return await tr.waitReady, tr;
		}
		get Module() {
			return this.mod;
		}
		get ready() {
			return h$1(this, Y) && !h$1(this, W) && !h$1(this, j$1);
		}
		get closed() {
			return h$1(this, j$1);
		}
		async close() {
			await this._checkReady(), x$2(this, W, !0);
			for (let t of h$1(this, oe)) await t();
			try {
				await this.execProtocol(O$1.end()), this.mod._pg_shutdown();
			} catch (t) {
				let I = t;
				if (!(I.name === 'ExitStatus' && I.status === 0)) throw t;
			}
			await this.fs.closeFs(), x$2(this, j$1, !0), x$2(this, W, !1);
		}
		async [Symbol.asyncDispose]() {
			await this.close();
		}
		async _handleBlob(t) {
			x$2(this, V, t ? await t.arrayBuffer() : void 0);
		}
		async _cleanupBlob() {
			x$2(this, V, void 0);
		}
		async _getWrittenBlob() {
			if (!h$1(this, G)) return;
			let t = new Blob(h$1(this, G));
			return x$2(this, G, void 0), t;
		}
		async _checkReady() {
			if (h$1(this, W)) throw new Error('PGlite is closing');
			if (h$1(this, j$1)) throw new Error('PGlite is closed');
			h$1(this, Y) || (await this.waitReady);
		}
		execProtocolRawSync(t) {
			let I = t.length,
				B = this.mod;
			B._interactive_write(I), B.HEAPU8.set(t, 1), B._interactive_one();
			let tr = I + 2,
				rr = tr + B._interactive_read();
			return B.HEAPU8.subarray(tr, rr);
		}
		async execProtocolRaw(t, { syncToFs: I = !0 } = {}) {
			let B = t.length,
				tr = this.mod;
			tr._interactive_write(B), tr.HEAPU8.set(t, 1), tr._interactive_one();
			let rr = B + 2,
				ir = rr + tr._interactive_read(),
				lr = tr.HEAPU8.subarray(rr, ir);
			return I && (await this.syncToFs()), lr;
		}
		async execProtocol(t, { syncToFs: I = !0, throwOnError: B = !0, onNotice: tr } = {}) {
			let rr = await this.execProtocolRaw(t, { syncToFs: I }),
				ir = [];
			return (
				h$1(this, se).parse(rr, (lr) => {
					if (lr instanceof E) {
						if ((x$2(this, se, new ye()), B)) throw lr;
					} else if (lr instanceof ne) this.debug > 0 && console.warn(lr), tr && tr(lr);
					else if (lr instanceof ee$1)
						switch (lr.text) {
							case 'BEGIN':
								x$2(this, J, !0);
								break;
							case 'COMMIT':
							case 'ROLLBACK':
								x$2(this, J, !1);
								break;
						}
					else if (lr instanceof X) {
						let dr = h$1(this, k).get(lr.channel);
						dr &&
							dr.forEach((mr) => {
								queueMicrotask(() => mr(lr.payload));
							}),
							h$1(this, K).forEach((mr) => {
								queueMicrotask(() => mr(lr.channel, lr.payload));
							});
					}
					ir.push(lr);
				}),
				{ messages: ir, data: rr }
			);
		}
		isInTransaction() {
			return h$1(this, J);
		}
		async syncToFs() {
			if (h$1(this, Z)) return;
			x$2(this, Z, !0);
			let t = async () => {
				await h$1(this, me).runExclusive(async () => {
					x$2(this, Z, !1), await this.fs.syncToFs(h$1(this, $));
				});
			};
			h$1(this, $) ? t() : await t();
		}
		async listen(t, I) {
			var tr;
			let B = Nr(t);
			h$1(this, k).has(B) || h$1(this, k).set(B, new Set()), h$1(this, k).get(B).add(I);
			try {
				await this.exec(`LISTEN ${t}`);
			} catch (rr) {
				throw (
					(h$1(this, k).get(B).delete(I),
					((tr = h$1(this, k).get(B)) == null ? void 0 : tr.size) === 0 && h$1(this, k).delete(B),
					rr)
				);
			}
			return async () => {
				await this.unlisten(B, I);
			};
		}
		async unlisten(t, I) {
			var tr, rr;
			let B = Nr(t);
			I
				? ((tr = h$1(this, k).get(B)) == null || tr.delete(I),
					((rr = h$1(this, k).get(B)) == null ? void 0 : rr.size) === 0 &&
						(await this.exec(`UNLISTEN ${t}`), h$1(this, k).delete(B)))
				: (await this.exec(`UNLISTEN ${t}`), h$1(this, k).delete(B));
		}
		onNotification(t) {
			return (
				h$1(this, K).add(t),
				() => {
					h$1(this, K).delete(t);
				}
			);
		}
		offNotification(t) {
			h$1(this, K).delete(t);
		}
		async dumpDataDir(t) {
			var B;
			let I = ((B = this.dataDir) == null ? void 0 : B.split('/').pop()) ?? 'pgdata';
			return this.fs.dumpTar(I, t);
		}
		_runExclusiveQuery(t) {
			return h$1(this, _e).runExclusive(t);
		}
		_runExclusiveTransaction(t) {
			return h$1(this, ie).runExclusive(t);
		}
		async clone() {
			let t = await this.dumpDataDir('none');
			return new Ms({ loadDataDir: t });
		}
	};
(Y = new WeakMap()),
	(W = new WeakMap()),
	(j$1 = new WeakMap()),
	(J = new WeakMap()),
	($ = new WeakMap()),
	(_e = new WeakMap()),
	(ie = new WeakMap()),
	(me = new WeakMap()),
	(Z = new WeakMap()),
	(ae = new WeakMap()),
	(oe = new WeakMap()),
	(se = new WeakMap()),
	(V = new WeakMap()),
	(G = new WeakMap()),
	(k = new WeakMap()),
	(K = new WeakMap()),
	(O = new WeakSet()),
	(qe = async function (e) {
		if (e.fs) this.fs = e.fs;
		else {
			let { dataDir: mr, fsType: _r } = Fe(e.dataDir);
			this.fs = await Ae(mr, _r);
		}
		let t = {},
			I = [],
			B = [
				`PGDATA=${C}`,
				`PREFIX=${Vr}`,
				`PGUSER=${e.username ?? 'postgres'}`,
				`PGDATABASE=${e.database ?? 'template1'}`,
				'MODE=REACT',
				'REPL=N',
				...(this.debug ? ['-d', this.debug.toString()] : [])
			];
		e.wasmModule || Rr();
		let tr = e.fsBundle ? e.fsBundle.arrayBuffer() : Er(),
			rr;
		tr.then((mr) => {
			rr = mr;
		});
		let ir = {
				WASM_PREFIX: Vr,
				arguments: B,
				INITIAL_MEMORY: e.initialMemory,
				noExitRuntime: !0,
				...(this.debug > 0
					? { print: console.info, printErr: console.error }
					: { print: () => {}, printErr: () => {} }),
				instantiateWasm: (mr, _r) => (
					Tr(mr, e.wasmModule).then(({ instance: fr, module: hr }) => {
						_r(fr, hr);
					}),
					{}
				),
				getPreloadedPackage: (mr, _r) => {
					if (mr === 'postgres.data') {
						if (rr.byteLength !== _r)
							throw new Error(`Invalid FS bundle size: ${rr.byteLength} !== ${_r}`);
						return rr;
					}
					throw new Error(`Unknown package: ${mr}`);
				},
				preRun: [
					(mr) => {
						let _r = mr.FS.makedev(64, 0),
							fr = {
								open: (hr) => {},
								close: (hr) => {},
								read: (hr, Mr, gr, yr, xr) => {
									let vr = h$1(this, V);
									if (!vr) throw new Error('No /dev/blob File or Blob provided to read from');
									let Sr = new Uint8Array(vr);
									if (xr >= Sr.length) return 0;
									let wr = Math.min(Sr.length - xr, yr);
									for (let br = 0; br < wr; br++) Mr[gr + br] = Sr[xr + br];
									return wr;
								},
								write: (hr, Mr, gr, yr, xr) => (
									h$1(this, G) ?? x$2(this, G, []), h$1(this, G).push(Mr.slice(gr, gr + yr)), yr
								),
								llseek: (hr, Mr, gr) => {
									let yr = h$1(this, V);
									if (!yr) throw new Error('No /dev/blob File or Blob provided to llseek');
									let xr = Mr;
									if (
										(gr === 1 ? (xr += hr.position) : gr === 2 && (xr = new Uint8Array(yr).length),
										xr < 0)
									)
										throw new mr.FS.ErrnoError(28);
									return xr;
								}
							};
						mr.FS.registerDevice(_r, fr), mr.FS.mkdev('/dev/blob', _r);
					}
				]
			},
			{ emscriptenOpts: lr } = await this.fs.init(this, ir);
		ir = lr;
		for (let [mr, _r] of Object.entries(h$1(this, ae)))
			if (_r instanceof URL) t[mr] = ge(_r);
			else {
				let fr = await _r.setup(this, ir);
				if ((fr.emscriptenOpts && (ir = fr.emscriptenOpts), fr.namespaceObj)) {
					let hr = this;
					hr[mr] = fr.namespaceObj;
				}
				fr.bundlePath && (t[mr] = ge(fr.bundlePath)),
					fr.init && I.push(fr.init),
					fr.close && h$1(this, oe).push(fr.close);
			}
		if (
			((ir.pg_extensions = t),
			await tr,
			(this.mod = await Te(ir)),
			await this.fs.initialSyncFs(),
			e.loadDataDir)
		) {
			if (this.mod.FS.analyzePath(C + '/PG_VERSION').exists)
				throw new Error('Database already exists, cannot load from tarball');
			T(this, O, re).call(this, 'pglite: loading data from tarball'),
				await ce$1(this.mod.FS, e.loadDataDir, C);
		}
		this.mod.FS.analyzePath(C + '/PG_VERSION').exists
			? T(this, O, re).call(this, 'pglite: found DB, resuming')
			: T(this, O, re).call(this, 'pglite: no db'),
			await Pe(this.mod, (...mr) => T(this, O, re).call(this, ...mr));
		let dr = this.mod._pg_initdb();
		if (!dr) throw new Error('INITDB failed to return value');
		if (dr & 1) throw new Error('INITDB failed');
		if (dr & 2) {
			let mr = e.username ?? 'postgres',
				_r = e.database ?? 'template1';
			if (dr & 4) {
				if (!(dr & 12)) throw new Error('Invalid db/user combination');
			} else if (_r !== 'template1' && mr !== 'postgres')
				throw new Error('INITDB created a new datadir, but an alternative db/user was requested');
		}
		await this.syncToFs(),
			x$2(this, Y, !0),
			await this.exec('SET search_path TO public;'),
			await this._initArrayTypes();
		for (let mr of I) await mr();
	}),
	(re = function (...e) {
		this.debug > 0 && console.log(...e);
	});
var Ue = pe;
u$1();
var La, Ra;
class PglitePreparedQuery extends ((Ra = PgPreparedQuery), (La = entityKind), Ra) {
	constructor(I, B, tr, rr, ir, lr, dr, mr) {
		super({ sql: B, params: tr });
		Ar(this, 'rawQueryConfig');
		Ar(this, 'queryConfig');
		(this.client = I),
			(this.queryString = B),
			(this.params = tr),
			(this.logger = rr),
			(this.fields = ir),
			(this._isResponseInArrayMode = dr),
			(this.customResultMapper = mr),
			(this.rawQueryConfig = {
				rowMode: 'object',
				parsers: {
					[hn.TIMESTAMP]: (_r) => _r,
					[hn.TIMESTAMPTZ]: (_r) => _r,
					[hn.INTERVAL]: (_r) => _r,
					[hn.DATE]: (_r) => _r
				}
			}),
			(this.queryConfig = {
				rowMode: 'array',
				parsers: {
					[hn.TIMESTAMP]: (_r) => _r,
					[hn.TIMESTAMPTZ]: (_r) => _r,
					[hn.INTERVAL]: (_r) => _r,
					[hn.DATE]: (_r) => _r
				}
			});
	}
	async execute(I = {}) {
		const B = fillPlaceholders(this.params, I);
		this.logger.logQuery(this.queryString, B);
		const {
			fields: tr,
			rawQueryConfig: rr,
			client: ir,
			queryConfig: lr,
			joinsNotNullableMap: dr,
			customResultMapper: mr,
			queryString: _r
		} = this;
		if (!tr && !mr) return ir.query(_r, B, rr);
		const fr = await ir.query(_r, B, lr);
		return mr ? mr(fr.rows) : fr.rows.map((hr) => mapResultRow(tr, hr, dr));
	}
	all(I = {}) {
		const B = fillPlaceholders(this.params, I);
		return (
			this.logger.logQuery(this.queryString, B),
			this.client.query(this.queryString, B, this.rawQueryConfig).then((tr) => tr.rows)
		);
	}
	isResponseInArrayMode() {
		return this._isResponseInArrayMode;
	}
}
Ar(PglitePreparedQuery, La, 'PglitePreparedQuery');
var qa, Na;
const hs = class hs extends ((Na = PgSession), (qa = entityKind), Na) {
	constructor(I, B, tr, rr = {}) {
		super(B);
		Ar(this, 'logger');
		(this.client = I),
			(this.schema = tr),
			(this.options = rr),
			(this.logger = rr.logger ?? new NoopLogger());
	}
	prepareQuery(I, B, tr, rr, ir) {
		return new PglitePreparedQuery(this.client, I.sql, I.params, this.logger, B, tr, rr, ir);
	}
	async transaction(I, B) {
		return this.client.transaction(async (tr) => {
			const rr = new hs(tr, this.dialect, this.schema, this.options),
				ir = new PgliteTransaction(this.dialect, rr, this.schema);
			return B && (await ir.setTransaction(B)), I(ir);
		});
	}
};
Ar(hs, qa, 'PgliteSession');
let PgliteSession = hs;
var Oa, Da;
const gs = class gs extends ((Da = PgTransaction), (Oa = entityKind), Da) {
	async transaction(t) {
		const I = `sp${this.nestedIndex + 1}`,
			B = new gs(this.dialect, this.session, this.schema, this.nestedIndex + 1);
		await B.execute(sql.raw(`savepoint ${I}`));
		try {
			const tr = await t(B);
			return await B.execute(sql.raw(`release savepoint ${I}`)), tr;
		} catch (tr) {
			throw (await B.execute(sql.raw(`rollback to savepoint ${I}`)), tr);
		}
	}
};
Ar(gs, Oa, 'PgliteTransaction');
let PgliteTransaction = gs;
var za;
za = entityKind;
class PgliteDriver {
	constructor(t, I, B = {}) {
		(this.client = t), (this.dialect = I), (this.options = B);
	}
	createSession(t) {
		return new PgliteSession(this.client, this.dialect, t, { logger: this.options.logger });
	}
}
Ar(PgliteDriver, za, 'PgliteDriver');
function drizzle(e, t = {}) {
	const I = new PgDialect();
	let B;
	t.logger === !0 ? (B = new DefaultLogger()) : t.logger !== !1 && (B = t.logger);
	let tr;
	if (t.schema) {
		const lr = extractTablesRelationalConfig(t.schema, createTableRelationsHelpers);
		tr = { fullSchema: t.schema, schema: lr.tables, tableNamesMap: lr.tableNamesMap };
	}
	const ir = new PgliteDriver(e, I, { logger: B }).createSession(tr);
	return new PgDatabase(I, ir, tr);
}
u$1();
var M = 5,
	U = async (e, t) => {
		let I = new Set(),
			B = {
				async query(tr, rr, ir) {
					let lr, dr, mr;
					if (
						(typeof tr != 'string' &&
							((lr = tr.signal),
							(rr = tr.params),
							(ir = tr.callback),
							(dr = tr.offset),
							(mr = tr.limit),
							(tr = tr.query)),
						(dr === void 0) != (mr === void 0))
					)
						throw new Error('offset and limit must be provided together');
					let _r = dr !== void 0 && mr !== void 0,
						fr;
					if (_r && (typeof dr != 'number' || isNaN(dr) || typeof mr != 'number' || isNaN(mr)))
						throw new Error('offset and limit must be numbers');
					let hr = ir ? [ir] : [],
						Mr = Cr().replace(/-/g, ''),
						gr = !1,
						yr,
						xr,
						vr = async () => {
							await e.transaction(async (Ir) => {
								let kr = rr && rr.length > 0 ? await Pr(e, tr, rr, Ir) : tr;
								await Ir.exec(`CREATE OR REPLACE TEMP VIEW live_query_${Mr}_view AS ${kr}`),
									(xr = await q(Ir, `live_query_${Mr}_view`)),
									await F(Ir, xr, I),
									_r
										? (await Ir.exec(`
              PREPARE live_query_${Mr}_get(int, int) AS
              SELECT * FROM live_query_${Mr}_view
              LIMIT $1 OFFSET $2;
            `),
											await Ir.exec(`
              PREPARE live_query_${Mr}_get_total_count AS
              SELECT COUNT(*) FROM live_query_${Mr}_view;
            `),
											(fr = (await Ir.query(`EXECUTE live_query_${Mr}_get_total_count;`)).rows[0]
												.count),
											(yr = {
												...(await Ir.query(`EXECUTE live_query_${Mr}_get(${mr}, ${dr});`)),
												offset: dr,
												limit: mr,
												totalCount: fr
											}))
										: (await Ir.exec(`
              PREPARE live_query_${Mr}_get AS
              SELECT * FROM live_query_${Mr}_view;
            `),
											(yr = await Ir.query(`EXECUTE live_query_${Mr}_get;`)));
							});
						};
					await vr();
					let Sr = Ur(async ({ offset: Ir, limit: kr } = {}) => {
							if (!_r && (Ir !== void 0 || kr !== void 0))
								throw new Error('offset and limit cannot be provided for non-windowed queries');
							if (
								(Ir && (typeof Ir != 'number' || isNaN(Ir))) ||
								(kr && (typeof kr != 'number' || isNaN(kr)))
							)
								throw new Error('offset and limit must be numbers');
							(dr = Ir ?? dr), (mr = kr ?? mr);
							let Or = async (Lr = 0) => {
								if (hr.length !== 0) {
									try {
										_r
											? (yr = {
													...(await e.query(`EXECUTE live_query_${Mr}_get(${mr}, ${dr});`)),
													offset: dr,
													limit: mr,
													totalCount: fr
												})
											: (yr = await e.query(`EXECUTE live_query_${Mr}_get;`));
									} catch (Gr) {
										let es = Gr.message;
										if (
											es.startsWith(`prepared statement "live_query_${Mr}`) &&
											es.endsWith('does not exist')
										) {
											if (Lr > M) throw Gr;
											await vr(), Or(Lr + 1);
										} else throw Gr;
									}
									if ((S(hr, yr), _r)) {
										let Gr = (await e.query(`EXECUTE live_query_${Mr}_get_total_count;`)).rows[0]
											.count;
										Gr !== fr && ((fr = Gr), Sr());
									}
								}
							};
							await Or();
						}),
						wr = await Promise.all(
							xr.map((Ir) =>
								e.listen(`table_change__${Ir.schema_name}__${Ir.table_name}`, async () => {
									Sr();
								})
							)
						),
						br = (Ir) => {
							if (gr) throw new Error('Live query is no longer active and cannot be subscribed to');
							hr.push(Ir);
						},
						Fr = async (Ir) => {
							Ir ? (hr = hr.filter((kr) => kr !== kr)) : (hr = []),
								hr.length === 0 &&
									((gr = !0),
									await Promise.all(wr.map((kr) => kr())),
									await e.exec(`
            DROP VIEW IF EXISTS live_query_${Mr}_view;
            DEALLOCATE live_query_${Mr}_get;
          `));
						};
					return (
						lr != null && lr.aborted
							? await Fr()
							: lr == null ||
								lr.addEventListener(
									'abort',
									() => {
										Fr();
									},
									{ once: !0 }
								),
						S(hr, yr),
						{ initialResults: yr, subscribe: br, unsubscribe: Fr, refresh: Sr }
					);
				},
				async changes(tr, rr, ir, lr) {
					let dr;
					if (
						(typeof tr != 'string' &&
							((dr = tr.signal),
							(rr = tr.params),
							(ir = tr.key),
							(lr = tr.callback),
							(tr = tr.query)),
						!ir)
					)
						throw new Error('key is required for changes queries');
					let mr = lr ? [lr] : [],
						_r = Cr().replace(/-/g, ''),
						fr = !1,
						hr,
						Mr = 1,
						gr,
						yr = async () => {
							await e.transaction(async (br) => {
								let Fr = await Pr(e, tr, rr, br);
								await br.query(`CREATE OR REPLACE TEMP VIEW live_query_${_r}_view AS ${Fr}`),
									(hr = await q(br, `live_query_${_r}_view`)),
									await F(br, hr, I);
								let Ir = [
									...(
										await br.query(`
                SELECT column_name, data_type, udt_name
                FROM information_schema.columns 
                WHERE table_name = 'live_query_${_r}_view'
              `)
									).rows,
									{ column_name: '__after__', data_type: 'integer' }
								];
								await br.exec(`
            CREATE TEMP TABLE live_query_${_r}_state1 (LIKE live_query_${_r}_view INCLUDING ALL);
            CREATE TEMP TABLE live_query_${_r}_state2 (LIKE live_query_${_r}_view INCLUDING ALL);
          `);
								for (let kr of [1, 2]) {
									let Or = kr === 1 ? 2 : 1;
									await br.exec(`
              PREPARE live_query_${_r}_diff${kr} AS
              WITH
                prev AS (SELECT LAG("${ir}") OVER () as __after__, * FROM live_query_${_r}_state${Or}),
                curr AS (SELECT LAG("${ir}") OVER () as __after__, * FROM live_query_${_r}_state${kr}),
                data_diff AS (
                  -- INSERT operations: Include all columns
                  SELECT 
                    'INSERT' AS __op__,
                    ${Ir.map(({ column_name: Lr }) => `curr."${Lr}" AS "${Lr}"`).join(`,
`)},
                    ARRAY[]::text[] AS __changed_columns__
                  FROM curr
                  LEFT JOIN prev ON curr.${ir} = prev.${ir}
                  WHERE prev.${ir} IS NULL
                UNION ALL
                  -- DELETE operations: Include only the primary key
                  SELECT 
                    'DELETE' AS __op__,
                    ${Ir.map(({ column_name: Lr, data_type: Gr, udt_name: es }) =>
											Lr === ir
												? `prev."${Lr}" AS "${Lr}"`
												: `NULL${Gr === 'USER-DEFINED' ? `::${es}` : ''} AS "${Lr}"`
										).join(`,
`)},
                      ARRAY[]::text[] AS __changed_columns__
                  FROM prev
                  LEFT JOIN curr ON prev.${ir} = curr.${ir}
                  WHERE curr.${ir} IS NULL
                UNION ALL
                  -- UPDATE operations: Include only changed columns
                  SELECT 
                    'UPDATE' AS __op__,
                    ${Ir.map(({ column_name: Lr, data_type: Gr, udt_name: es }) =>
											Lr === ir
												? `curr."${Lr}" AS "${Lr}"`
												: `CASE 
                              WHEN curr."${Lr}" IS DISTINCT FROM prev."${Lr}" 
                              THEN curr."${Lr}"
                              ELSE NULL${Gr === 'USER-DEFINED' ? `::${es}` : ''}
                              END AS "${Lr}"`
										).join(`,
`)},
                      ARRAY(SELECT unnest FROM unnest(ARRAY[${Ir.filter(
												({ column_name: Lr }) => Lr !== ir
											)
												.map(
													({ column_name: Lr }) => `CASE
                              WHEN curr."${Lr}" IS DISTINCT FROM prev."${Lr}" 
                              THEN '${Lr}' 
                              ELSE NULL 
                              END`
												)
												.join(', ')}]) WHERE unnest IS NOT NULL) AS __changed_columns__
                  FROM curr
                  INNER JOIN prev ON curr.${ir} = prev.${ir}
                  WHERE NOT (curr IS NOT DISTINCT FROM prev)
                )
              SELECT * FROM data_diff;
            `);
								}
							});
						};
					await yr();
					let xr = Ur(async () => {
							if (mr.length === 0 && gr) return;
							let br = !1;
							for (let Fr = 0; Fr < 5; Fr++)
								try {
									await e.transaction(async (Ir) => {
										await Ir.exec(`
                INSERT INTO live_query_${_r}_state${Mr} 
                  SELECT * FROM live_query_${_r}_view;
              `),
											(gr = await Ir.query(`EXECUTE live_query_${_r}_diff${Mr};`)),
											(Mr = Mr === 1 ? 2 : 1),
											await Ir.exec(`
                TRUNCATE live_query_${_r}_state${Mr};
              `);
									});
									break;
								} catch (Ir) {
									if (Ir.message === `relation "live_query_${_r}_state${Mr}" does not exist`) {
										(br = !0), await yr();
										continue;
									} else throw Ir;
								}
							D(mr, [...(br ? [{ __op__: 'RESET' }] : []), ...gr.rows]);
						}),
						vr = await Promise.all(
							hr.map((br) =>
								e.listen(`table_change__${br.schema_name}__${br.table_name}`, async () => xr())
							)
						),
						Sr = (br) => {
							if (fr) throw new Error('Live query is no longer active and cannot be subscribed to');
							mr.push(br);
						},
						wr = async (br) => {
							br ? (mr = mr.filter((Fr) => Fr !== Fr)) : (mr = []),
								mr.length === 0 &&
									((fr = !0),
									await Promise.all(vr.map((Fr) => Fr())),
									await e.exec(`
            DROP VIEW IF EXISTS live_query_${_r}_view;
            DROP TABLE IF EXISTS live_query_${_r}_state1;
            DROP TABLE IF EXISTS live_query_${_r}_state2;
            DEALLOCATE live_query_${_r}_diff1;
            DEALLOCATE live_query_${_r}_diff2;
          `));
						};
					return (
						dr != null && dr.aborted
							? await wr()
							: dr == null ||
								dr.addEventListener(
									'abort',
									() => {
										wr();
									},
									{ once: !0 }
								),
						await xr(),
						{
							fields: gr.fields.filter(
								(br) => !['__after__', '__op__', '__changed_columns__'].includes(br.name)
							),
							initialChanges: gr.rows,
							subscribe: Sr,
							unsubscribe: wr,
							refresh: xr
						}
					);
				},
				async incrementalQuery(tr, rr, ir, lr) {
					let dr;
					if (
						(typeof tr != 'string' &&
							((dr = tr.signal),
							(rr = tr.params),
							(ir = tr.key),
							(lr = tr.callback),
							(tr = tr.query)),
						!ir)
					)
						throw new Error('key is required for incremental queries');
					let mr = lr ? [lr] : [],
						_r = new Map(),
						fr = new Map(),
						hr = [],
						Mr = !0,
						{
							fields: gr,
							unsubscribe: yr,
							refresh: xr
						} = await B.changes(tr, rr, ir, (wr) => {
							for (let Ir of wr) {
								let { __op__: kr, __changed_columns__: Or, ...Lr } = Ir;
								switch (kr) {
									case 'RESET':
										_r.clear(), fr.clear();
										break;
									case 'INSERT':
										_r.set(Lr[ir], Lr), fr.set(Lr.__after__, Lr[ir]);
										break;
									case 'DELETE': {
										let Gr = _r.get(Lr[ir]);
										_r.delete(Lr[ir]), Gr.__after__ !== null && fr.delete(Gr.__after__);
										break;
									}
									case 'UPDATE': {
										let Gr = { ...(_r.get(Lr[ir]) ?? {}) };
										for (let es of Or)
											(Gr[es] = Lr[es]), es === '__after__' && fr.set(Lr.__after__, Lr[ir]);
										_r.set(Lr[ir], Gr);
										break;
									}
								}
							}
							let br = [],
								Fr = null;
							for (let Ir = 0; Ir < _r.size; Ir++) {
								let kr = fr.get(Fr),
									Or = _r.get(kr);
								if (!Or) break;
								let Lr = { ...Or };
								delete Lr.__after__, br.push(Lr), (Fr = kr);
							}
							(hr = br), Mr || S(mr, { rows: br, fields: gr });
						});
					(Mr = !1), S(mr, { rows: hr, fields: gr });
					let vr = (wr) => {
							mr.push(wr);
						},
						Sr = async (wr) => {
							wr ? (mr = mr.filter((br) => br !== br)) : (mr = []), mr.length === 0 && (await yr());
						};
					return (
						dr != null && dr.aborted
							? await Sr()
							: dr == null ||
								dr.addEventListener(
									'abort',
									() => {
										Sr();
									},
									{ once: !0 }
								),
						{
							initialResults: { rows: hr, fields: gr },
							subscribe: vr,
							unsubscribe: Sr,
							refresh: xr
						}
					);
				}
			};
		return { namespaceObj: B };
	},
	j = { name: 'Live Queries', setup: U };
async function q(e, t) {
	return (
		await e.query(
			`
      WITH RECURSIVE view_dependencies AS (
        -- Base case: Get the initial view's dependencies
        SELECT DISTINCT
          cl.relname AS dependent_name,
          n.nspname AS schema_name,
          cl.relkind = 'v' AS is_view
        FROM pg_rewrite r
        JOIN pg_depend d ON r.oid = d.objid
        JOIN pg_class cl ON d.refobjid = cl.oid
        JOIN pg_namespace n ON cl.relnamespace = n.oid
        WHERE
          r.ev_class = (
              SELECT oid FROM pg_class WHERE relname = $1 AND relkind = 'v'
          )
          AND d.deptype = 'n'

        UNION ALL

        -- Recursive case: Traverse dependencies for views
        SELECT DISTINCT
          cl.relname AS dependent_name,
          n.nspname AS schema_name,
          cl.relkind = 'v' AS is_view
        FROM view_dependencies vd
        JOIN pg_rewrite r ON vd.dependent_name = (
          SELECT relname FROM pg_class WHERE oid = r.ev_class AND relkind = 'v'
        )
        JOIN pg_depend d ON r.oid = d.objid
        JOIN pg_class cl ON d.refobjid = cl.oid
        JOIN pg_namespace n ON cl.relnamespace = n.oid
        WHERE d.deptype = 'n'
      )
      SELECT DISTINCT
        dependent_name AS table_name,
        schema_name
      FROM view_dependencies
      WHERE NOT is_view; -- Exclude intermediate views
    `,
			[t]
		)
	).rows.map((I) => ({ table_name: I.table_name, schema_name: I.schema_name }));
}
async function F(e, t, I) {
	let B = t
		.filter((tr) => !I.has(`${tr.schema_name}_${tr.table_name}`))
		.map(
			(tr) => `
      CREATE OR REPLACE FUNCTION "_notify_${tr.schema_name}_${tr.table_name}"() RETURNS TRIGGER AS $$
      BEGIN
        PERFORM pg_notify('table_change__${tr.schema_name}__${tr.table_name}', '');
        RETURN NULL;
      END;
      $$ LANGUAGE plpgsql;
      CREATE OR REPLACE TRIGGER "_notify_trigger_${tr.schema_name}_${tr.table_name}"
      AFTER INSERT OR UPDATE OR DELETE ON "${tr.schema_name}"."${tr.table_name}"
      FOR EACH STATEMENT EXECUTE FUNCTION "_notify_${tr.schema_name}_${tr.table_name}"();
      `
		).join(`
`);
	B.trim() !== '' && (await e.exec(B)), t.map((tr) => I.add(`${tr.schema_name}_${tr.table_name}`));
}
var S = (e, t) => {
		for (let I of e) I(t);
	},
	D = (e, t) => {
		for (let I of e) I(t);
	};
const user = pgTable('user', {
		id: text('id').primaryKey(),
		name: text('name').notNull(),
		email: text('email').notNull().unique(),
		emailVerified: boolean('email_verified').notNull().default(!1),
		image: text('image'),
		createdAt: timestamp('created_at', { withTimezone: !0 }).defaultNow().notNull(),
		updatedAt: timestamp('updated_at', { withTimezone: !0 }).defaultNow().notNull()
	}),
	session = pgTable('session', {
		id: text('id').primaryKey(),
		expiresAt: timestamp('expires_at', { withTimezone: !0 }).notNull(),
		token: text('token').notNull().unique(),
		createdAt: timestamp('created_at', { withTimezone: !0 }).defaultNow().notNull(),
		updatedAt: timestamp('updated_at', { withTimezone: !0 }).defaultNow().notNull(),
		ipAddress: text('ip_address'),
		userAgent: text('user_agent'),
		userId: text('user_id')
			.notNull()
			.references(() => user.id, { onDelete: 'cascade' })
	}),
	account = pgTable('account', {
		id: text('id').primaryKey(),
		accountId: text('account_id').notNull(),
		providerId: text('provider_id').notNull(),
		userId: text('user_id')
			.notNull()
			.references(() => user.id, { onDelete: 'cascade' }),
		accessToken: text('access_token'),
		refreshToken: text('refresh_token'),
		idToken: text('id_token'),
		accessTokenExpiresAt: timestamp('access_token_expires_at', { withTimezone: !0 }),
		refreshTokenExpiresAt: timestamp('refresh_token_expires_at', { withTimezone: !0 }),
		scope: text('scope'),
		password: text('password'),
		createdAt: timestamp('created_at', { withTimezone: !0 }).defaultNow().notNull(),
		updatedAt: timestamp('updated_at', { withTimezone: !0 }).defaultNow().notNull()
	}),
	verification = pgTable('verification', {
		id: text('id').primaryKey(),
		identifier: text('identifier').notNull(),
		value: text('value').notNull(),
		expiresAt: timestamp('expires_at', { withTimezone: !0 }).notNull(),
		createdAt: timestamp('created_at', { withTimezone: !0 }).defaultNow().notNull(),
		updatedAt: timestamp('updated_at', { withTimezone: !0 }).defaultNow().notNull()
	}),
	authSchema = { user, session, account, verification },
	collection$1 = pgTable('collection', {
		path: text('path').primaryKey(),
		name: text('name').notNull(),
		lastOpened: timestamp('last_opened', { withTimezone: !0 }).notNull(),
		userId: text('user_id').references(() => user.id, { onDelete: 'cascade' })
	}),
	collectionSettings$1 = pgTable('collection_settings', {
		collectionPath: text('collection_path')
			.primaryKey()
			.references(() => collection$1.path),
		editor: jsonb('editor').notNull(),
		notes: jsonb('notes').notNull(),
		userId: text('user_id').references(() => user.id, { onDelete: 'cascade' })
	}),
	entry = pgTable('entry', {
		path: text('path').primaryKey(),
		name: text('name'),
		parentPath: text('parent_path').notNull(),
		collectionPath: text('collection_path').references(() => collection$1.path),
		content: text('content'),
		isFolder: boolean('is_folder').default(!1),
		size: bigint('size'),
		createdAt: timestamp('created_at', { withTimezone: !0 }).defaultNow().notNull(),
		updatedAt: timestamp('updated_at', { withTimezone: !0 }).defaultNow().notNull(),
		userId: text('user_id').references(() => user.id, { onDelete: 'cascade' })
	}),
	appSchema = { collection: collection$1, collectionSettings: collectionSettings$1, entry },
	schema = { ...authSchema, ...appSchema };
function createPGLiteDatabase(e = {}) {
	const t = new Ue(e.dataDir || 'idb://typyst', { extensions: { live: j } });
	return { db: drizzle(t, { schema }), pgClient: t, schema, authSchema, appSchema };
}
let pgliteDb = null;
function initializeDB() {
	pgliteDb || (pgliteDb = createPGLiteDatabase({ dataDir: 'idb://typyst' }));
}
const pgClient = {
		get: async () => (initializeDB(), pgliteDb.pgClient),
		exec: async (e) => (await pgClient.get()).exec(e),
		query: async (e, t, I) => (await pgClient.get()).query(e, t, I),
		live: { query: async (e, t, I) => (await pgClient.get()).live.query(e, t, I) }
	},
	db = new Proxy(
		{},
		{
			get: (e, t) => {
				if ((initializeDB(), !pgliteDb)) throw new Error('Database not initialized');
				return pgliteDb.db[t];
			}
		}
	);
function createEditorStore() {
	const { subscribe: e, set: t, update: I } = writable(),
		B = [];
	return {
		subscribe: e,
		set: t,
		update: I,
		subscribeToSaveEvents: (tr) => (
			B.push(tr),
			() => {
				const rr = B.indexOf(tr);
				rr > -1 && B.splice(rr, 1);
			}
		),
		notifySaveEvent: () => {
			B.forEach((tr) => tr());
		}
	};
}
const SHORTCUTS = {
		'editor:toggle-mode': { command: !0, key: 'e' },
		'editor:search': { command: !0, key: 'f' },
		'command:open-note': { command: !0, key: 'j' },
		'command:move-note': { command: !0, shift: !0, key: 'm' },
		'notes:search': { command: !0, shift: !0, key: 'f' },
		'notes:toggle-sidebar': { command: !0, shift: !0, key: 's' },
		'notes:toggle-details': { command: !0, key: 'i' },
		'notes:history-back': { command: !0, key: 'ArrowLeft', alt: !0 },
		'notes:history-forward': { command: !0, key: 'ArrowRight', alt: !0 },
		'notes:create': { command: !0, key: 'n' },
		'notes:create-folder': { command: !0, shift: !0, key: 'n' },
		'note:save': { command: !0, key: 's' },
		'note:duplicate': { key: 'd', hover: !0 },
		'note:rename': { key: 'r', hover: !0 },
		'note:delete': { command: !0, key: 'Backspace', hover: !0 },
		'note:copy-path': { command: !0, key: 'c', shift: !0 },
		'folder:create': { key: 'f', hover: !0 },
		'folder:create-note': { key: 'n', hover: !0 },
		'folder:rename': { key: 'r', hover: !0 },
		'folder:delete': { command: !0, key: 'Backspace', hover: !0 },
		'app:settings': { command: !0, key: ',' },
		'app:shortcuts': { command: !0, key: '/' },
		'app:help': { command: !0, key: 'h', shift: !0 },
		'app:share': { command: !0, key: 'l', shift: !0 },
		'app:open-collection': { command: !0, key: 'o' },
		'settings:toggle-theme': { command: !0, key: 't', shift: !0 }
	},
	BASE_APP_SETTINGS = { theme: 'dark', theme_mode: 'system', interface_font: 'system-ui' },
	BASE_COLLECTION_SETTINGS = {
		editor: {
			font: 'system-ui',
			size: 14,
			auto_save: !0,
			auto_save_debounce: 750,
			auto_correct: !1,
			spell_check: !1,
			show_inline_title: !0,
			show_line_numbers: !1,
			show_toolbar: !0
		},
		notes: { trash_dir: 'system', excluded_files: [] }
	},
	editor = createEditorStore(),
	activeFile = writable(null),
	noteHistory = writable([]),
	editorMode = writable('edit'),
	editorSearchValue = writable(''),
	editorSearchActive = writable(!1),
	collection = writable(),
	collectionEntries = writable([]),
	tooltipsOpen = writable(0),
	collectionSearchActive = writable(!1),
	isPageSidebarOpen = writable(!0),
	pageSidebarWidth = writable(210),
	resizingPageSidebar = writable(!1),
	isNoteDetailSidebarOpen = writable(!1),
	noteDetailSidebarWidth = writable(210),
	resizingNoteDetailSidebar = writable(!1),
	settingsStore = writable({ isOpen: !1, activePage: 'general' }),
	appSettings = writable(BASE_APP_SETTINGS),
	collectionSettings = writable(BASE_COLLECTION_SETTINGS);
function OrderedMap(e) {
	this.content = e;
}
OrderedMap.prototype = {
	constructor: OrderedMap,
	find: function (e) {
		for (var t = 0; t < this.content.length; t += 2) if (this.content[t] === e) return t;
		return -1;
	},
	get: function (e) {
		var t = this.find(e);
		return t == -1 ? void 0 : this.content[t + 1];
	},
	update: function (e, t, I) {
		var B = I && I != e ? this.remove(I) : this,
			tr = B.find(e),
			rr = B.content.slice();
		return (
			tr == -1 ? rr.push(I || e, t) : ((rr[tr + 1] = t), I && (rr[tr] = I)), new OrderedMap(rr)
		);
	},
	remove: function (e) {
		var t = this.find(e);
		if (t == -1) return this;
		var I = this.content.slice();
		return I.splice(t, 2), new OrderedMap(I);
	},
	addToStart: function (e, t) {
		return new OrderedMap([e, t].concat(this.remove(e).content));
	},
	addToEnd: function (e, t) {
		var I = this.remove(e).content.slice();
		return I.push(e, t), new OrderedMap(I);
	},
	addBefore: function (e, t, I) {
		var B = this.remove(t),
			tr = B.content.slice(),
			rr = B.find(e);
		return tr.splice(rr == -1 ? tr.length : rr, 0, t, I), new OrderedMap(tr);
	},
	forEach: function (e) {
		for (var t = 0; t < this.content.length; t += 2) e(this.content[t], this.content[t + 1]);
	},
	prepend: function (e) {
		return (
			(e = OrderedMap.from(e)),
			e.size ? new OrderedMap(e.content.concat(this.subtract(e).content)) : this
		);
	},
	append: function (e) {
		return (
			(e = OrderedMap.from(e)),
			e.size ? new OrderedMap(this.subtract(e).content.concat(e.content)) : this
		);
	},
	subtract: function (e) {
		var t = this;
		e = OrderedMap.from(e);
		for (var I = 0; I < e.content.length; I += 2) t = t.remove(e.content[I]);
		return t;
	},
	toObject: function () {
		var e = {};
		return (
			this.forEach(function (t, I) {
				e[t] = I;
			}),
			e
		);
	},
	get size() {
		return this.content.length >> 1;
	}
};
OrderedMap.from = function (e) {
	if (e instanceof OrderedMap) return e;
	var t = [];
	if (e) for (var I in e) t.push(I, e[I]);
	return new OrderedMap(t);
};
function findDiffStart(e, t, I) {
	for (let B = 0; ; B++) {
		if (B == e.childCount || B == t.childCount) return e.childCount == t.childCount ? null : I;
		let tr = e.child(B),
			rr = t.child(B);
		if (tr == rr) {
			I += tr.nodeSize;
			continue;
		}
		if (!tr.sameMarkup(rr)) return I;
		if (tr.isText && tr.text != rr.text) {
			for (let ir = 0; tr.text[ir] == rr.text[ir]; ir++) I++;
			return I;
		}
		if (tr.content.size || rr.content.size) {
			let ir = findDiffStart(tr.content, rr.content, I + 1);
			if (ir != null) return ir;
		}
		I += tr.nodeSize;
	}
}
function findDiffEnd(e, t, I, B) {
	for (let tr = e.childCount, rr = t.childCount; ; ) {
		if (tr == 0 || rr == 0) return tr == rr ? null : { a: I, b: B };
		let ir = e.child(--tr),
			lr = t.child(--rr),
			dr = ir.nodeSize;
		if (ir == lr) {
			(I -= dr), (B -= dr);
			continue;
		}
		if (!ir.sameMarkup(lr)) return { a: I, b: B };
		if (ir.isText && ir.text != lr.text) {
			let mr = 0,
				_r = Math.min(ir.text.length, lr.text.length);
			for (; mr < _r && ir.text[ir.text.length - mr - 1] == lr.text[lr.text.length - mr - 1]; )
				mr++, I--, B--;
			return { a: I, b: B };
		}
		if (ir.content.size || lr.content.size) {
			let mr = findDiffEnd(ir.content, lr.content, I - 1, B - 1);
			if (mr) return mr;
		}
		(I -= dr), (B -= dr);
	}
}
class Fragment {
	constructor(t, I) {
		if (((this.content = t), (this.size = I || 0), I == null))
			for (let B = 0; B < t.length; B++) this.size += t[B].nodeSize;
	}
	nodesBetween(t, I, B, tr = 0, rr) {
		for (let ir = 0, lr = 0; lr < I; ir++) {
			let dr = this.content[ir],
				mr = lr + dr.nodeSize;
			if (mr > t && B(dr, tr + lr, rr || null, ir) !== !1 && dr.content.size) {
				let _r = lr + 1;
				dr.nodesBetween(Math.max(0, t - _r), Math.min(dr.content.size, I - _r), B, tr + _r);
			}
			lr = mr;
		}
	}
	descendants(t) {
		this.nodesBetween(0, this.size, t);
	}
	textBetween(t, I, B, tr) {
		let rr = '',
			ir = !0;
		return (
			this.nodesBetween(
				t,
				I,
				(lr, dr) => {
					let mr = lr.isText
						? lr.text.slice(Math.max(t, dr) - dr, I - dr)
						: lr.isLeaf
							? tr
								? typeof tr == 'function'
									? tr(lr)
									: tr
								: lr.type.spec.leafText
									? lr.type.spec.leafText(lr)
									: ''
							: '';
					lr.isBlock && ((lr.isLeaf && mr) || lr.isTextblock) && B && (ir ? (ir = !1) : (rr += B)),
						(rr += mr);
				},
				0
			),
			rr
		);
	}
	append(t) {
		if (!t.size) return this;
		if (!this.size) return t;
		let I = this.lastChild,
			B = t.firstChild,
			tr = this.content.slice(),
			rr = 0;
		for (
			I.isText && I.sameMarkup(B) && ((tr[tr.length - 1] = I.withText(I.text + B.text)), (rr = 1));
			rr < t.content.length;
			rr++
		)
			tr.push(t.content[rr]);
		return new Fragment(tr, this.size + t.size);
	}
	cut(t, I = this.size) {
		if (t == 0 && I == this.size) return this;
		let B = [],
			tr = 0;
		if (I > t)
			for (let rr = 0, ir = 0; ir < I; rr++) {
				let lr = this.content[rr],
					dr = ir + lr.nodeSize;
				dr > t &&
					((ir < t || dr > I) &&
						(lr.isText
							? (lr = lr.cut(Math.max(0, t - ir), Math.min(lr.text.length, I - ir)))
							: (lr = lr.cut(Math.max(0, t - ir - 1), Math.min(lr.content.size, I - ir - 1)))),
					B.push(lr),
					(tr += lr.nodeSize)),
					(ir = dr);
			}
		return new Fragment(B, tr);
	}
	cutByIndex(t, I) {
		return t == I
			? Fragment.empty
			: t == 0 && I == this.content.length
				? this
				: new Fragment(this.content.slice(t, I));
	}
	replaceChild(t, I) {
		let B = this.content[t];
		if (B == I) return this;
		let tr = this.content.slice(),
			rr = this.size + I.nodeSize - B.nodeSize;
		return (tr[t] = I), new Fragment(tr, rr);
	}
	addToStart(t) {
		return new Fragment([t].concat(this.content), this.size + t.nodeSize);
	}
	addToEnd(t) {
		return new Fragment(this.content.concat(t), this.size + t.nodeSize);
	}
	eq(t) {
		if (this.content.length != t.content.length) return !1;
		for (let I = 0; I < this.content.length; I++) if (!this.content[I].eq(t.content[I])) return !1;
		return !0;
	}
	get firstChild() {
		return this.content.length ? this.content[0] : null;
	}
	get lastChild() {
		return this.content.length ? this.content[this.content.length - 1] : null;
	}
	get childCount() {
		return this.content.length;
	}
	child(t) {
		let I = this.content[t];
		if (!I) throw new RangeError('Index ' + t + ' out of range for ' + this);
		return I;
	}
	maybeChild(t) {
		return this.content[t] || null;
	}
	forEach(t) {
		for (let I = 0, B = 0; I < this.content.length; I++) {
			let tr = this.content[I];
			t(tr, B, I), (B += tr.nodeSize);
		}
	}
	findDiffStart(t, I = 0) {
		return findDiffStart(this, t, I);
	}
	findDiffEnd(t, I = this.size, B = t.size) {
		return findDiffEnd(this, t, I, B);
	}
	findIndex(t, I = -1) {
		if (t == 0) return retIndex(0, t);
		if (t == this.size) return retIndex(this.content.length, t);
		if (t > this.size || t < 0) throw new RangeError(`Position ${t} outside of fragment (${this})`);
		for (let B = 0, tr = 0; ; B++) {
			let rr = this.child(B),
				ir = tr + rr.nodeSize;
			if (ir >= t) return ir == t || I > 0 ? retIndex(B + 1, ir) : retIndex(B, tr);
			tr = ir;
		}
	}
	toString() {
		return '<' + this.toStringInner() + '>';
	}
	toStringInner() {
		return this.content.join(', ');
	}
	toJSON() {
		return this.content.length ? this.content.map((t) => t.toJSON()) : null;
	}
	static fromJSON(t, I) {
		if (!I) return Fragment.empty;
		if (!Array.isArray(I)) throw new RangeError('Invalid input for Fragment.fromJSON');
		return new Fragment(I.map(t.nodeFromJSON));
	}
	static fromArray(t) {
		if (!t.length) return Fragment.empty;
		let I,
			B = 0;
		for (let tr = 0; tr < t.length; tr++) {
			let rr = t[tr];
			(B += rr.nodeSize),
				tr && rr.isText && t[tr - 1].sameMarkup(rr)
					? (I || (I = t.slice(0, tr)),
						(I[I.length - 1] = rr.withText(I[I.length - 1].text + rr.text)))
					: I && I.push(rr);
		}
		return new Fragment(I || t, B);
	}
	static from(t) {
		if (!t) return Fragment.empty;
		if (t instanceof Fragment) return t;
		if (Array.isArray(t)) return this.fromArray(t);
		if (t.attrs) return new Fragment([t], t.nodeSize);
		throw new RangeError(
			'Can not convert ' +
				t +
				' to a Fragment' +
				(t.nodesBetween ? ' (looks like multiple versions of prosemirror-model were loaded)' : '')
		);
	}
}
Fragment.empty = new Fragment([], 0);
const found = { index: 0, offset: 0 };
function retIndex(e, t) {
	return (found.index = e), (found.offset = t), found;
}
function compareDeep(e, t) {
	if (e === t) return !0;
	if (!(e && typeof e == 'object') || !(t && typeof t == 'object')) return !1;
	let I = Array.isArray(e);
	if (Array.isArray(t) != I) return !1;
	if (I) {
		if (e.length != t.length) return !1;
		for (let B = 0; B < e.length; B++) if (!compareDeep(e[B], t[B])) return !1;
	} else {
		for (let B in e) if (!(B in t) || !compareDeep(e[B], t[B])) return !1;
		for (let B in t) if (!(B in e)) return !1;
	}
	return !0;
}
class Mark {
	constructor(t, I) {
		(this.type = t), (this.attrs = I);
	}
	addToSet(t) {
		let I,
			B = !1;
		for (let tr = 0; tr < t.length; tr++) {
			let rr = t[tr];
			if (this.eq(rr)) return t;
			if (this.type.excludes(rr.type)) I || (I = t.slice(0, tr));
			else {
				if (rr.type.excludes(this.type)) return t;
				!B && rr.type.rank > this.type.rank && (I || (I = t.slice(0, tr)), I.push(this), (B = !0)),
					I && I.push(rr);
			}
		}
		return I || (I = t.slice()), B || I.push(this), I;
	}
	removeFromSet(t) {
		for (let I = 0; I < t.length; I++)
			if (this.eq(t[I])) return t.slice(0, I).concat(t.slice(I + 1));
		return t;
	}
	isInSet(t) {
		for (let I = 0; I < t.length; I++) if (this.eq(t[I])) return !0;
		return !1;
	}
	eq(t) {
		return this == t || (this.type == t.type && compareDeep(this.attrs, t.attrs));
	}
	toJSON() {
		let t = { type: this.type.name };
		for (let I in this.attrs) {
			t.attrs = this.attrs;
			break;
		}
		return t;
	}
	static fromJSON(t, I) {
		if (!I) throw new RangeError('Invalid input for Mark.fromJSON');
		let B = t.marks[I.type];
		if (!B) throw new RangeError(`There is no mark type ${I.type} in this schema`);
		let tr = B.create(I.attrs);
		return B.checkAttrs(tr.attrs), tr;
	}
	static sameSet(t, I) {
		if (t == I) return !0;
		if (t.length != I.length) return !1;
		for (let B = 0; B < t.length; B++) if (!t[B].eq(I[B])) return !1;
		return !0;
	}
	static setFrom(t) {
		if (!t || (Array.isArray(t) && t.length == 0)) return Mark.none;
		if (t instanceof Mark) return [t];
		let I = t.slice();
		return I.sort((B, tr) => B.type.rank - tr.type.rank), I;
	}
}
Mark.none = [];
class ReplaceError extends Error {}
class Slice {
	constructor(t, I, B) {
		(this.content = t), (this.openStart = I), (this.openEnd = B);
	}
	get size() {
		return this.content.size - this.openStart - this.openEnd;
	}
	insertAt(t, I) {
		let B = insertInto(this.content, t + this.openStart, I);
		return B && new Slice(B, this.openStart, this.openEnd);
	}
	removeBetween(t, I) {
		return new Slice(
			removeRange(this.content, t + this.openStart, I + this.openStart),
			this.openStart,
			this.openEnd
		);
	}
	eq(t) {
		return this.content.eq(t.content) && this.openStart == t.openStart && this.openEnd == t.openEnd;
	}
	toString() {
		return this.content + '(' + this.openStart + ',' + this.openEnd + ')';
	}
	toJSON() {
		if (!this.content.size) return null;
		let t = { content: this.content.toJSON() };
		return (
			this.openStart > 0 && (t.openStart = this.openStart),
			this.openEnd > 0 && (t.openEnd = this.openEnd),
			t
		);
	}
	static fromJSON(t, I) {
		if (!I) return Slice.empty;
		let B = I.openStart || 0,
			tr = I.openEnd || 0;
		if (typeof B != 'number' || typeof tr != 'number')
			throw new RangeError('Invalid input for Slice.fromJSON');
		return new Slice(Fragment.fromJSON(t, I.content), B, tr);
	}
	static maxOpen(t, I = !0) {
		let B = 0,
			tr = 0;
		for (
			let rr = t.firstChild;
			rr && !rr.isLeaf && (I || !rr.type.spec.isolating);
			rr = rr.firstChild
		)
			B++;
		for (
			let rr = t.lastChild;
			rr && !rr.isLeaf && (I || !rr.type.spec.isolating);
			rr = rr.lastChild
		)
			tr++;
		return new Slice(t, B, tr);
	}
}
Slice.empty = new Slice(Fragment.empty, 0, 0);
function removeRange(e, t, I) {
	let { index: B, offset: tr } = e.findIndex(t),
		rr = e.maybeChild(B),
		{ index: ir, offset: lr } = e.findIndex(I);
	if (tr == t || rr.isText) {
		if (lr != I && !e.child(ir).isText) throw new RangeError('Removing non-flat range');
		return e.cut(0, t).append(e.cut(I));
	}
	if (B != ir) throw new RangeError('Removing non-flat range');
	return e.replaceChild(B, rr.copy(removeRange(rr.content, t - tr - 1, I - tr - 1)));
}
function insertInto(e, t, I, B) {
	let { index: tr, offset: rr } = e.findIndex(t),
		ir = e.maybeChild(tr);
	if (rr == t || ir.isText) return e.cut(0, t).append(I).append(e.cut(t));
	let lr = insertInto(ir.content, t - rr - 1, I);
	return lr && e.replaceChild(tr, ir.copy(lr));
}
function replace(e, t, I) {
	if (I.openStart > e.depth)
		throw new ReplaceError('Inserted content deeper than insertion position');
	if (e.depth - I.openStart != t.depth - I.openEnd)
		throw new ReplaceError('Inconsistent open depths');
	return replaceOuter(e, t, I, 0);
}
function replaceOuter(e, t, I, B) {
	let tr = e.index(B),
		rr = e.node(B);
	if (tr == t.index(B) && B < e.depth - I.openStart) {
		let ir = replaceOuter(e, t, I, B + 1);
		return rr.copy(rr.content.replaceChild(tr, ir));
	} else if (I.content.size)
		if (!I.openStart && !I.openEnd && e.depth == B && t.depth == B) {
			let ir = e.parent,
				lr = ir.content;
			return close(ir, lr.cut(0, e.parentOffset).append(I.content).append(lr.cut(t.parentOffset)));
		} else {
			let { start: ir, end: lr } = prepareSliceForReplace(I, e);
			return close(rr, replaceThreeWay(e, ir, lr, t, B));
		}
	else return close(rr, replaceTwoWay(e, t, B));
}
function checkJoin(e, t) {
	if (!t.type.compatibleContent(e.type))
		throw new ReplaceError('Cannot join ' + t.type.name + ' onto ' + e.type.name);
}
function joinable$1(e, t, I) {
	let B = e.node(I);
	return checkJoin(B, t.node(I)), B;
}
function addNode(e, t) {
	let I = t.length - 1;
	I >= 0 && e.isText && e.sameMarkup(t[I]) ? (t[I] = e.withText(t[I].text + e.text)) : t.push(e);
}
function addRange(e, t, I, B) {
	let tr = (t || e).node(I),
		rr = 0,
		ir = t ? t.index(I) : tr.childCount;
	e && ((rr = e.index(I)), e.depth > I ? rr++ : e.textOffset && (addNode(e.nodeAfter, B), rr++));
	for (let lr = rr; lr < ir; lr++) addNode(tr.child(lr), B);
	t && t.depth == I && t.textOffset && addNode(t.nodeBefore, B);
}
function close(e, t) {
	return e.type.checkContent(t), e.copy(t);
}
function replaceThreeWay(e, t, I, B, tr) {
	let rr = e.depth > tr && joinable$1(e, t, tr + 1),
		ir = B.depth > tr && joinable$1(I, B, tr + 1),
		lr = [];
	return (
		addRange(null, e, tr, lr),
		rr && ir && t.index(tr) == I.index(tr)
			? (checkJoin(rr, ir), addNode(close(rr, replaceThreeWay(e, t, I, B, tr + 1)), lr))
			: (rr && addNode(close(rr, replaceTwoWay(e, t, tr + 1)), lr),
				addRange(t, I, tr, lr),
				ir && addNode(close(ir, replaceTwoWay(I, B, tr + 1)), lr)),
		addRange(B, null, tr, lr),
		new Fragment(lr)
	);
}
function replaceTwoWay(e, t, I) {
	let B = [];
	if ((addRange(null, e, I, B), e.depth > I)) {
		let tr = joinable$1(e, t, I + 1);
		addNode(close(tr, replaceTwoWay(e, t, I + 1)), B);
	}
	return addRange(t, null, I, B), new Fragment(B);
}
function prepareSliceForReplace(e, t) {
	let I = t.depth - e.openStart,
		tr = t.node(I).copy(e.content);
	for (let rr = I - 1; rr >= 0; rr--) tr = t.node(rr).copy(Fragment.from(tr));
	return {
		start: tr.resolveNoCache(e.openStart + I),
		end: tr.resolveNoCache(tr.content.size - e.openEnd - I)
	};
}
class ResolvedPos {
	constructor(t, I, B) {
		(this.pos = t), (this.path = I), (this.parentOffset = B), (this.depth = I.length / 3 - 1);
	}
	resolveDepth(t) {
		return t == null ? this.depth : t < 0 ? this.depth + t : t;
	}
	get parent() {
		return this.node(this.depth);
	}
	get doc() {
		return this.node(0);
	}
	node(t) {
		return this.path[this.resolveDepth(t) * 3];
	}
	index(t) {
		return this.path[this.resolveDepth(t) * 3 + 1];
	}
	indexAfter(t) {
		return (
			(t = this.resolveDepth(t)), this.index(t) + (t == this.depth && !this.textOffset ? 0 : 1)
		);
	}
	start(t) {
		return (t = this.resolveDepth(t)), t == 0 ? 0 : this.path[t * 3 - 1] + 1;
	}
	end(t) {
		return (t = this.resolveDepth(t)), this.start(t) + this.node(t).content.size;
	}
	before(t) {
		if (((t = this.resolveDepth(t)), !t))
			throw new RangeError('There is no position before the top-level node');
		return t == this.depth + 1 ? this.pos : this.path[t * 3 - 1];
	}
	after(t) {
		if (((t = this.resolveDepth(t)), !t))
			throw new RangeError('There is no position after the top-level node');
		return t == this.depth + 1 ? this.pos : this.path[t * 3 - 1] + this.path[t * 3].nodeSize;
	}
	get textOffset() {
		return this.pos - this.path[this.path.length - 1];
	}
	get nodeAfter() {
		let t = this.parent,
			I = this.index(this.depth);
		if (I == t.childCount) return null;
		let B = this.pos - this.path[this.path.length - 1],
			tr = t.child(I);
		return B ? t.child(I).cut(B) : tr;
	}
	get nodeBefore() {
		let t = this.index(this.depth),
			I = this.pos - this.path[this.path.length - 1];
		return I ? this.parent.child(t).cut(0, I) : t == 0 ? null : this.parent.child(t - 1);
	}
	posAtIndex(t, I) {
		I = this.resolveDepth(I);
		let B = this.path[I * 3],
			tr = I == 0 ? 0 : this.path[I * 3 - 1] + 1;
		for (let rr = 0; rr < t; rr++) tr += B.child(rr).nodeSize;
		return tr;
	}
	marks() {
		let t = this.parent,
			I = this.index();
		if (t.content.size == 0) return Mark.none;
		if (this.textOffset) return t.child(I).marks;
		let B = t.maybeChild(I - 1),
			tr = t.maybeChild(I);
		if (!B) {
			let lr = B;
			(B = tr), (tr = lr);
		}
		let rr = B.marks;
		for (var ir = 0; ir < rr.length; ir++)
			rr[ir].type.spec.inclusive === !1 &&
				(!tr || !rr[ir].isInSet(tr.marks)) &&
				(rr = rr[ir--].removeFromSet(rr));
		return rr;
	}
	marksAcross(t) {
		let I = this.parent.maybeChild(this.index());
		if (!I || !I.isInline) return null;
		let B = I.marks,
			tr = t.parent.maybeChild(t.index());
		for (var rr = 0; rr < B.length; rr++)
			B[rr].type.spec.inclusive === !1 &&
				(!tr || !B[rr].isInSet(tr.marks)) &&
				(B = B[rr--].removeFromSet(B));
		return B;
	}
	sharedDepth(t) {
		for (let I = this.depth; I > 0; I--) if (this.start(I) <= t && this.end(I) >= t) return I;
		return 0;
	}
	blockRange(t = this, I) {
		if (t.pos < this.pos) return t.blockRange(this);
		for (let B = this.depth - (this.parent.inlineContent || this.pos == t.pos ? 1 : 0); B >= 0; B--)
			if (t.pos <= this.end(B) && (!I || I(this.node(B)))) return new NodeRange(this, t, B);
		return null;
	}
	sameParent(t) {
		return this.pos - this.parentOffset == t.pos - t.parentOffset;
	}
	max(t) {
		return t.pos > this.pos ? t : this;
	}
	min(t) {
		return t.pos < this.pos ? t : this;
	}
	toString() {
		let t = '';
		for (let I = 1; I <= this.depth; I++)
			t += (t ? '/' : '') + this.node(I).type.name + '_' + this.index(I - 1);
		return t + ':' + this.parentOffset;
	}
	static resolve(t, I) {
		if (!(I >= 0 && I <= t.content.size)) throw new RangeError('Position ' + I + ' out of range');
		let B = [],
			tr = 0,
			rr = I;
		for (let ir = t; ; ) {
			let { index: lr, offset: dr } = ir.content.findIndex(rr),
				mr = rr - dr;
			if ((B.push(ir, lr, tr + dr), !mr || ((ir = ir.child(lr)), ir.isText))) break;
			(rr = mr - 1), (tr += dr + 1);
		}
		return new ResolvedPos(I, B, rr);
	}
	static resolveCached(t, I) {
		let B = resolveCache.get(t);
		if (B)
			for (let rr = 0; rr < B.elts.length; rr++) {
				let ir = B.elts[rr];
				if (ir.pos == I) return ir;
			}
		else resolveCache.set(t, (B = new ResolveCache()));
		let tr = (B.elts[B.i] = ResolvedPos.resolve(t, I));
		return (B.i = (B.i + 1) % resolveCacheSize), tr;
	}
}
class ResolveCache {
	constructor() {
		(this.elts = []), (this.i = 0);
	}
}
const resolveCacheSize = 12,
	resolveCache = new WeakMap();
class NodeRange {
	constructor(t, I, B) {
		(this.$from = t), (this.$to = I), (this.depth = B);
	}
	get start() {
		return this.$from.before(this.depth + 1);
	}
	get end() {
		return this.$to.after(this.depth + 1);
	}
	get parent() {
		return this.$from.node(this.depth);
	}
	get startIndex() {
		return this.$from.index(this.depth);
	}
	get endIndex() {
		return this.$to.indexAfter(this.depth);
	}
}
const emptyAttrs = Object.create(null);
let Node$1 = class ws {
	constructor(t, I, B, tr = Mark.none) {
		(this.type = t), (this.attrs = I), (this.marks = tr), (this.content = B || Fragment.empty);
	}
	get children() {
		return this.content.content;
	}
	get nodeSize() {
		return this.isLeaf ? 1 : 2 + this.content.size;
	}
	get childCount() {
		return this.content.childCount;
	}
	child(t) {
		return this.content.child(t);
	}
	maybeChild(t) {
		return this.content.maybeChild(t);
	}
	forEach(t) {
		this.content.forEach(t);
	}
	nodesBetween(t, I, B, tr = 0) {
		this.content.nodesBetween(t, I, B, tr, this);
	}
	descendants(t) {
		this.nodesBetween(0, this.content.size, t);
	}
	get textContent() {
		return this.isLeaf && this.type.spec.leafText
			? this.type.spec.leafText(this)
			: this.textBetween(0, this.content.size, '');
	}
	textBetween(t, I, B, tr) {
		return this.content.textBetween(t, I, B, tr);
	}
	get firstChild() {
		return this.content.firstChild;
	}
	get lastChild() {
		return this.content.lastChild;
	}
	eq(t) {
		return this == t || (this.sameMarkup(t) && this.content.eq(t.content));
	}
	sameMarkup(t) {
		return this.hasMarkup(t.type, t.attrs, t.marks);
	}
	hasMarkup(t, I, B) {
		return (
			this.type == t &&
			compareDeep(this.attrs, I || t.defaultAttrs || emptyAttrs) &&
			Mark.sameSet(this.marks, B || Mark.none)
		);
	}
	copy(t = null) {
		return t == this.content ? this : new ws(this.type, this.attrs, t, this.marks);
	}
	mark(t) {
		return t == this.marks ? this : new ws(this.type, this.attrs, this.content, t);
	}
	cut(t, I = this.content.size) {
		return t == 0 && I == this.content.size ? this : this.copy(this.content.cut(t, I));
	}
	slice(t, I = this.content.size, B = !1) {
		if (t == I) return Slice.empty;
		let tr = this.resolve(t),
			rr = this.resolve(I),
			ir = B ? 0 : tr.sharedDepth(I),
			lr = tr.start(ir),
			mr = tr.node(ir).content.cut(tr.pos - lr, rr.pos - lr);
		return new Slice(mr, tr.depth - ir, rr.depth - ir);
	}
	replace(t, I, B) {
		return replace(this.resolve(t), this.resolve(I), B);
	}
	nodeAt(t) {
		for (let I = this; ; ) {
			let { index: B, offset: tr } = I.content.findIndex(t);
			if (((I = I.maybeChild(B)), !I)) return null;
			if (tr == t || I.isText) return I;
			t -= tr + 1;
		}
	}
	childAfter(t) {
		let { index: I, offset: B } = this.content.findIndex(t);
		return { node: this.content.maybeChild(I), index: I, offset: B };
	}
	childBefore(t) {
		if (t == 0) return { node: null, index: 0, offset: 0 };
		let { index: I, offset: B } = this.content.findIndex(t);
		if (B < t) return { node: this.content.child(I), index: I, offset: B };
		let tr = this.content.child(I - 1);
		return { node: tr, index: I - 1, offset: B - tr.nodeSize };
	}
	resolve(t) {
		return ResolvedPos.resolveCached(this, t);
	}
	resolveNoCache(t) {
		return ResolvedPos.resolve(this, t);
	}
	rangeHasMark(t, I, B) {
		let tr = !1;
		return I > t && this.nodesBetween(t, I, (rr) => (B.isInSet(rr.marks) && (tr = !0), !tr)), tr;
	}
	get isBlock() {
		return this.type.isBlock;
	}
	get isTextblock() {
		return this.type.isTextblock;
	}
	get inlineContent() {
		return this.type.inlineContent;
	}
	get isInline() {
		return this.type.isInline;
	}
	get isText() {
		return this.type.isText;
	}
	get isLeaf() {
		return this.type.isLeaf;
	}
	get isAtom() {
		return this.type.isAtom;
	}
	toString() {
		if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
		let t = this.type.name;
		return (
			this.content.size && (t += '(' + this.content.toStringInner() + ')'), wrapMarks(this.marks, t)
		);
	}
	contentMatchAt(t) {
		let I = this.type.contentMatch.matchFragment(this.content, 0, t);
		if (!I) throw new Error('Called contentMatchAt on a node with invalid content');
		return I;
	}
	canReplace(t, I, B = Fragment.empty, tr = 0, rr = B.childCount) {
		let ir = this.contentMatchAt(t).matchFragment(B, tr, rr),
			lr = ir && ir.matchFragment(this.content, I);
		if (!lr || !lr.validEnd) return !1;
		for (let dr = tr; dr < rr; dr++) if (!this.type.allowsMarks(B.child(dr).marks)) return !1;
		return !0;
	}
	canReplaceWith(t, I, B, tr) {
		if (tr && !this.type.allowsMarks(tr)) return !1;
		let rr = this.contentMatchAt(t).matchType(B),
			ir = rr && rr.matchFragment(this.content, I);
		return ir ? ir.validEnd : !1;
	}
	canAppend(t) {
		return t.content.size
			? this.canReplace(this.childCount, this.childCount, t.content)
			: this.type.compatibleContent(t.type);
	}
	check() {
		this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
		let t = Mark.none;
		for (let I = 0; I < this.marks.length; I++) {
			let B = this.marks[I];
			B.type.checkAttrs(B.attrs), (t = B.addToSet(t));
		}
		if (!Mark.sameSet(t, this.marks))
			throw new RangeError(
				`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((I) => I.type.name)}`
			);
		this.content.forEach((I) => I.check());
	}
	toJSON() {
		let t = { type: this.type.name };
		for (let I in this.attrs) {
			t.attrs = this.attrs;
			break;
		}
		return (
			this.content.size && (t.content = this.content.toJSON()),
			this.marks.length && (t.marks = this.marks.map((I) => I.toJSON())),
			t
		);
	}
	static fromJSON(t, I) {
		if (!I) throw new RangeError('Invalid input for Node.fromJSON');
		let B;
		if (I.marks) {
			if (!Array.isArray(I.marks)) throw new RangeError('Invalid mark data for Node.fromJSON');
			B = I.marks.map(t.markFromJSON);
		}
		if (I.type == 'text') {
			if (typeof I.text != 'string') throw new RangeError('Invalid text node in JSON');
			return t.text(I.text, B);
		}
		let tr = Fragment.fromJSON(t, I.content),
			rr = t.nodeType(I.type).create(I.attrs, tr, B);
		return rr.type.checkAttrs(rr.attrs), rr;
	}
};
Node$1.prototype.text = void 0;
class TextNode extends Node$1 {
	constructor(t, I, B, tr) {
		if ((super(t, I, null, tr), !B)) throw new RangeError('Empty text nodes are not allowed');
		this.text = B;
	}
	toString() {
		return this.type.spec.toDebugString
			? this.type.spec.toDebugString(this)
			: wrapMarks(this.marks, JSON.stringify(this.text));
	}
	get textContent() {
		return this.text;
	}
	textBetween(t, I) {
		return this.text.slice(t, I);
	}
	get nodeSize() {
		return this.text.length;
	}
	mark(t) {
		return t == this.marks ? this : new TextNode(this.type, this.attrs, this.text, t);
	}
	withText(t) {
		return t == this.text ? this : new TextNode(this.type, this.attrs, t, this.marks);
	}
	cut(t = 0, I = this.text.length) {
		return t == 0 && I == this.text.length ? this : this.withText(this.text.slice(t, I));
	}
	eq(t) {
		return this.sameMarkup(t) && this.text == t.text;
	}
	toJSON() {
		let t = super.toJSON();
		return (t.text = this.text), t;
	}
}
function wrapMarks(e, t) {
	for (let I = e.length - 1; I >= 0; I--) t = e[I].type.name + '(' + t + ')';
	return t;
}
class ContentMatch {
	constructor(t) {
		(this.validEnd = t), (this.next = []), (this.wrapCache = []);
	}
	static parse(t, I) {
		let B = new TokenStream(t, I);
		if (B.next == null) return ContentMatch.empty;
		let tr = parseExpr(B);
		B.next && B.err('Unexpected trailing text');
		let rr = dfa(nfa(tr));
		return checkForDeadEnds(rr, B), rr;
	}
	matchType(t) {
		for (let I = 0; I < this.next.length; I++) if (this.next[I].type == t) return this.next[I].next;
		return null;
	}
	matchFragment(t, I = 0, B = t.childCount) {
		let tr = this;
		for (let rr = I; tr && rr < B; rr++) tr = tr.matchType(t.child(rr).type);
		return tr;
	}
	get inlineContent() {
		return this.next.length != 0 && this.next[0].type.isInline;
	}
	get defaultType() {
		for (let t = 0; t < this.next.length; t++) {
			let { type: I } = this.next[t];
			if (!(I.isText || I.hasRequiredAttrs())) return I;
		}
		return null;
	}
	compatible(t) {
		for (let I = 0; I < this.next.length; I++)
			for (let B = 0; B < t.next.length; B++) if (this.next[I].type == t.next[B].type) return !0;
		return !1;
	}
	fillBefore(t, I = !1, B = 0) {
		let tr = [this];
		function rr(ir, lr) {
			let dr = ir.matchFragment(t, B);
			if (dr && (!I || dr.validEnd)) return Fragment.from(lr.map((mr) => mr.createAndFill()));
			for (let mr = 0; mr < ir.next.length; mr++) {
				let { type: _r, next: fr } = ir.next[mr];
				if (!(_r.isText || _r.hasRequiredAttrs()) && tr.indexOf(fr) == -1) {
					tr.push(fr);
					let hr = rr(fr, lr.concat(_r));
					if (hr) return hr;
				}
			}
			return null;
		}
		return rr(this, []);
	}
	findWrapping(t) {
		for (let B = 0; B < this.wrapCache.length; B += 2)
			if (this.wrapCache[B] == t) return this.wrapCache[B + 1];
		let I = this.computeWrapping(t);
		return this.wrapCache.push(t, I), I;
	}
	computeWrapping(t) {
		let I = Object.create(null),
			B = [{ match: this, type: null, via: null }];
		for (; B.length; ) {
			let tr = B.shift(),
				rr = tr.match;
			if (rr.matchType(t)) {
				let ir = [];
				for (let lr = tr; lr.type; lr = lr.via) ir.push(lr.type);
				return ir.reverse();
			}
			for (let ir = 0; ir < rr.next.length; ir++) {
				let { type: lr, next: dr } = rr.next[ir];
				!lr.isLeaf &&
					!lr.hasRequiredAttrs() &&
					!(lr.name in I) &&
					(!tr.type || dr.validEnd) &&
					(B.push({ match: lr.contentMatch, type: lr, via: tr }), (I[lr.name] = !0));
			}
		}
		return null;
	}
	get edgeCount() {
		return this.next.length;
	}
	edge(t) {
		if (t >= this.next.length) throw new RangeError(`There's no ${t}th edge in this content match`);
		return this.next[t];
	}
	toString() {
		let t = [];
		function I(B) {
			t.push(B);
			for (let tr = 0; tr < B.next.length; tr++)
				t.indexOf(B.next[tr].next) == -1 && I(B.next[tr].next);
		}
		return (
			I(this),
			t.map((B, tr) => {
				let rr = tr + (B.validEnd ? '*' : ' ') + ' ';
				for (let ir = 0; ir < B.next.length; ir++)
					rr += (ir ? ', ' : '') + B.next[ir].type.name + '->' + t.indexOf(B.next[ir].next);
				return rr;
			}).join(`
`)
		);
	}
}
ContentMatch.empty = new ContentMatch(!0);
class TokenStream {
	constructor(t, I) {
		(this.string = t),
			(this.nodeTypes = I),
			(this.inline = null),
			(this.pos = 0),
			(this.tokens = t.split(/\s*(?=\b|\W|$)/)),
			this.tokens[this.tokens.length - 1] == '' && this.tokens.pop(),
			this.tokens[0] == '' && this.tokens.shift();
	}
	get next() {
		return this.tokens[this.pos];
	}
	eat(t) {
		return this.next == t && (this.pos++ || !0);
	}
	err(t) {
		throw new SyntaxError(t + " (in content expression '" + this.string + "')");
	}
}
function parseExpr(e) {
	let t = [];
	do t.push(parseExprSeq(e));
	while (e.eat('|'));
	return t.length == 1 ? t[0] : { type: 'choice', exprs: t };
}
function parseExprSeq(e) {
	let t = [];
	do t.push(parseExprSubscript(e));
	while (e.next && e.next != ')' && e.next != '|');
	return t.length == 1 ? t[0] : { type: 'seq', exprs: t };
}
function parseExprSubscript(e) {
	let t = parseExprAtom(e);
	for (;;)
		if (e.eat('+')) t = { type: 'plus', expr: t };
		else if (e.eat('*')) t = { type: 'star', expr: t };
		else if (e.eat('?')) t = { type: 'opt', expr: t };
		else if (e.eat('{')) t = parseExprRange(e, t);
		else break;
	return t;
}
function parseNum(e) {
	/\D/.test(e.next) && e.err("Expected number, got '" + e.next + "'");
	let t = Number(e.next);
	return e.pos++, t;
}
function parseExprRange(e, t) {
	let I = parseNum(e),
		B = I;
	return (
		e.eat(',') && (e.next != '}' ? (B = parseNum(e)) : (B = -1)),
		e.eat('}') || e.err('Unclosed braced range'),
		{ type: 'range', min: I, max: B, expr: t }
	);
}
function resolveName(e, t) {
	let I = e.nodeTypes,
		B = I[t];
	if (B) return [B];
	let tr = [];
	for (let rr in I) {
		let ir = I[rr];
		ir.isInGroup(t) && tr.push(ir);
	}
	return tr.length == 0 && e.err("No node type or group '" + t + "' found"), tr;
}
function parseExprAtom(e) {
	if (e.eat('(')) {
		let t = parseExpr(e);
		return e.eat(')') || e.err('Missing closing paren'), t;
	} else if (/\W/.test(e.next)) e.err("Unexpected token '" + e.next + "'");
	else {
		let t = resolveName(e, e.next).map(
			(I) => (
				e.inline == null
					? (e.inline = I.isInline)
					: e.inline != I.isInline && e.err('Mixing inline and block content'),
				{ type: 'name', value: I }
			)
		);
		return e.pos++, t.length == 1 ? t[0] : { type: 'choice', exprs: t };
	}
}
function nfa(e) {
	let t = [[]];
	return tr(rr(e, 0), I()), t;
	function I() {
		return t.push([]) - 1;
	}
	function B(ir, lr, dr) {
		let mr = { term: dr, to: lr };
		return t[ir].push(mr), mr;
	}
	function tr(ir, lr) {
		ir.forEach((dr) => (dr.to = lr));
	}
	function rr(ir, lr) {
		if (ir.type == 'choice') return ir.exprs.reduce((dr, mr) => dr.concat(rr(mr, lr)), []);
		if (ir.type == 'seq')
			for (let dr = 0; ; dr++) {
				let mr = rr(ir.exprs[dr], lr);
				if (dr == ir.exprs.length - 1) return mr;
				tr(mr, (lr = I()));
			}
		else if (ir.type == 'star') {
			let dr = I();
			return B(lr, dr), tr(rr(ir.expr, dr), dr), [B(dr)];
		} else if (ir.type == 'plus') {
			let dr = I();
			return tr(rr(ir.expr, lr), dr), tr(rr(ir.expr, dr), dr), [B(dr)];
		} else {
			if (ir.type == 'opt') return [B(lr)].concat(rr(ir.expr, lr));
			if (ir.type == 'range') {
				let dr = lr;
				for (let mr = 0; mr < ir.min; mr++) {
					let _r = I();
					tr(rr(ir.expr, dr), _r), (dr = _r);
				}
				if (ir.max == -1) tr(rr(ir.expr, dr), dr);
				else
					for (let mr = ir.min; mr < ir.max; mr++) {
						let _r = I();
						B(dr, _r), tr(rr(ir.expr, dr), _r), (dr = _r);
					}
				return [B(dr)];
			} else {
				if (ir.type == 'name') return [B(lr, void 0, ir.value)];
				throw new Error('Unknown expr type');
			}
		}
	}
}
function cmp(e, t) {
	return t - e;
}
function nullFrom(e, t) {
	let I = [];
	return B(t), I.sort(cmp);
	function B(tr) {
		let rr = e[tr];
		if (rr.length == 1 && !rr[0].term) return B(rr[0].to);
		I.push(tr);
		for (let ir = 0; ir < rr.length; ir++) {
			let { term: lr, to: dr } = rr[ir];
			!lr && I.indexOf(dr) == -1 && B(dr);
		}
	}
}
function dfa(e) {
	let t = Object.create(null);
	return I(nullFrom(e, 0));
	function I(B) {
		let tr = [];
		B.forEach((ir) => {
			e[ir].forEach(({ term: lr, to: dr }) => {
				if (!lr) return;
				let mr;
				for (let _r = 0; _r < tr.length; _r++) tr[_r][0] == lr && (mr = tr[_r][1]);
				nullFrom(e, dr).forEach((_r) => {
					mr || tr.push([lr, (mr = [])]), mr.indexOf(_r) == -1 && mr.push(_r);
				});
			});
		});
		let rr = (t[B.join(',')] = new ContentMatch(B.indexOf(e.length - 1) > -1));
		for (let ir = 0; ir < tr.length; ir++) {
			let lr = tr[ir][1].sort(cmp);
			rr.next.push({ type: tr[ir][0], next: t[lr.join(',')] || I(lr) });
		}
		return rr;
	}
}
function checkForDeadEnds(e, t) {
	for (let I = 0, B = [e]; I < B.length; I++) {
		let tr = B[I],
			rr = !tr.validEnd,
			ir = [];
		for (let lr = 0; lr < tr.next.length; lr++) {
			let { type: dr, next: mr } = tr.next[lr];
			ir.push(dr.name),
				rr && !(dr.isText || dr.hasRequiredAttrs()) && (rr = !1),
				B.indexOf(mr) == -1 && B.push(mr);
		}
		rr &&
			t.err(
				'Only non-generatable nodes (' +
					ir.join(', ') +
					') in a required position (see https://prosemirror.net/docs/guide/#generatable)'
			);
	}
}
function defaultAttrs(e) {
	let t = Object.create(null);
	for (let I in e) {
		let B = e[I];
		if (!B.hasDefault) return null;
		t[I] = B.default;
	}
	return t;
}
function computeAttrs(e, t) {
	let I = Object.create(null);
	for (let B in e) {
		let tr = t && t[B];
		if (tr === void 0) {
			let rr = e[B];
			if (rr.hasDefault) tr = rr.default;
			else throw new RangeError('No value supplied for attribute ' + B);
		}
		I[B] = tr;
	}
	return I;
}
function checkAttrs(e, t, I, B) {
	for (let tr in t)
		if (!(tr in e)) throw new RangeError(`Unsupported attribute ${tr} for ${I} of type ${tr}`);
	for (let tr in e) {
		let rr = e[tr];
		rr.validate && rr.validate(t[tr]);
	}
}
function initAttrs(e, t) {
	let I = Object.create(null);
	if (t) for (let B in t) I[B] = new Attribute(e, B, t[B]);
	return I;
}
class NodeType {
	constructor(t, I, B) {
		(this.name = t),
			(this.schema = I),
			(this.spec = B),
			(this.markSet = null),
			(this.groups = B.group ? B.group.split(' ') : []),
			(this.attrs = initAttrs(t, B.attrs)),
			(this.defaultAttrs = defaultAttrs(this.attrs)),
			(this.contentMatch = null),
			(this.inlineContent = null),
			(this.isBlock = !(B.inline || t == 'text')),
			(this.isText = t == 'text');
	}
	get isInline() {
		return !this.isBlock;
	}
	get isTextblock() {
		return this.isBlock && this.inlineContent;
	}
	get isLeaf() {
		return this.contentMatch == ContentMatch.empty;
	}
	get isAtom() {
		return this.isLeaf || !!this.spec.atom;
	}
	isInGroup(t) {
		return this.groups.indexOf(t) > -1;
	}
	get whitespace() {
		return this.spec.whitespace || (this.spec.code ? 'pre' : 'normal');
	}
	hasRequiredAttrs() {
		for (let t in this.attrs) if (this.attrs[t].isRequired) return !0;
		return !1;
	}
	compatibleContent(t) {
		return this == t || this.contentMatch.compatible(t.contentMatch);
	}
	computeAttrs(t) {
		return !t && this.defaultAttrs ? this.defaultAttrs : computeAttrs(this.attrs, t);
	}
	create(t = null, I, B) {
		if (this.isText) throw new Error("NodeType.create can't construct text nodes");
		return new Node$1(this, this.computeAttrs(t), Fragment.from(I), Mark.setFrom(B));
	}
	createChecked(t = null, I, B) {
		return (
			(I = Fragment.from(I)),
			this.checkContent(I),
			new Node$1(this, this.computeAttrs(t), I, Mark.setFrom(B))
		);
	}
	createAndFill(t = null, I, B) {
		if (((t = this.computeAttrs(t)), (I = Fragment.from(I)), I.size)) {
			let ir = this.contentMatch.fillBefore(I);
			if (!ir) return null;
			I = ir.append(I);
		}
		let tr = this.contentMatch.matchFragment(I),
			rr = tr && tr.fillBefore(Fragment.empty, !0);
		return rr ? new Node$1(this, t, I.append(rr), Mark.setFrom(B)) : null;
	}
	validContent(t) {
		let I = this.contentMatch.matchFragment(t);
		if (!I || !I.validEnd) return !1;
		for (let B = 0; B < t.childCount; B++) if (!this.allowsMarks(t.child(B).marks)) return !1;
		return !0;
	}
	checkContent(t) {
		if (!this.validContent(t))
			throw new RangeError(`Invalid content for node ${this.name}: ${t.toString().slice(0, 50)}`);
	}
	checkAttrs(t) {
		checkAttrs(this.attrs, t, 'node', this.name);
	}
	allowsMarkType(t) {
		return this.markSet == null || this.markSet.indexOf(t) > -1;
	}
	allowsMarks(t) {
		if (this.markSet == null) return !0;
		for (let I = 0; I < t.length; I++) if (!this.allowsMarkType(t[I].type)) return !1;
		return !0;
	}
	allowedMarks(t) {
		if (this.markSet == null) return t;
		let I;
		for (let B = 0; B < t.length; B++)
			this.allowsMarkType(t[B].type) ? I && I.push(t[B]) : I || (I = t.slice(0, B));
		return I ? (I.length ? I : Mark.none) : t;
	}
	static compile(t, I) {
		let B = Object.create(null);
		t.forEach((rr, ir) => (B[rr] = new NodeType(rr, I, ir)));
		let tr = I.spec.topNode || 'doc';
		if (!B[tr]) throw new RangeError("Schema is missing its top node type ('" + tr + "')");
		if (!B.text) throw new RangeError("Every schema needs a 'text' type");
		for (let rr in B.text.attrs)
			throw new RangeError('The text node type should not have attributes');
		return B;
	}
}
function validateType(e, t, I) {
	let B = I.split('|');
	return (tr) => {
		let rr = tr === null ? 'null' : typeof tr;
		if (B.indexOf(rr) < 0)
			throw new RangeError(
				`Expected value of type ${B} for attribute ${t} on type ${e}, got ${rr}`
			);
	};
}
class Attribute {
	constructor(t, I, B) {
		(this.hasDefault = Object.prototype.hasOwnProperty.call(B, 'default')),
			(this.default = B.default),
			(this.validate = typeof B.validate == 'string' ? validateType(t, I, B.validate) : B.validate);
	}
	get isRequired() {
		return !this.hasDefault;
	}
}
class MarkType {
	constructor(t, I, B, tr) {
		(this.name = t),
			(this.rank = I),
			(this.schema = B),
			(this.spec = tr),
			(this.attrs = initAttrs(t, tr.attrs)),
			(this.excluded = null);
		let rr = defaultAttrs(this.attrs);
		this.instance = rr ? new Mark(this, rr) : null;
	}
	create(t = null) {
		return !t && this.instance ? this.instance : new Mark(this, computeAttrs(this.attrs, t));
	}
	static compile(t, I) {
		let B = Object.create(null),
			tr = 0;
		return t.forEach((rr, ir) => (B[rr] = new MarkType(rr, tr++, I, ir))), B;
	}
	removeFromSet(t) {
		for (var I = 0; I < t.length; I++)
			t[I].type == this && ((t = t.slice(0, I).concat(t.slice(I + 1))), I--);
		return t;
	}
	isInSet(t) {
		for (let I = 0; I < t.length; I++) if (t[I].type == this) return t[I];
	}
	checkAttrs(t) {
		checkAttrs(this.attrs, t, 'mark', this.name);
	}
	excludes(t) {
		return this.excluded.indexOf(t) > -1;
	}
}
class Schema {
	constructor(t) {
		(this.linebreakReplacement = null), (this.cached = Object.create(null));
		let I = (this.spec = {});
		for (let tr in t) I[tr] = t[tr];
		(I.nodes = OrderedMap.from(t.nodes)),
			(I.marks = OrderedMap.from(t.marks || {})),
			(this.nodes = NodeType.compile(this.spec.nodes, this)),
			(this.marks = MarkType.compile(this.spec.marks, this));
		let B = Object.create(null);
		for (let tr in this.nodes) {
			if (tr in this.marks) throw new RangeError(tr + ' can not be both a node and a mark');
			let rr = this.nodes[tr],
				ir = rr.spec.content || '',
				lr = rr.spec.marks;
			if (
				((rr.contentMatch = B[ir] || (B[ir] = ContentMatch.parse(ir, this.nodes))),
				(rr.inlineContent = rr.contentMatch.inlineContent),
				rr.spec.linebreakReplacement)
			) {
				if (this.linebreakReplacement) throw new RangeError('Multiple linebreak nodes defined');
				if (!rr.isInline || !rr.isLeaf)
					throw new RangeError('Linebreak replacement nodes must be inline leaf nodes');
				this.linebreakReplacement = rr;
			}
			rr.markSet =
				lr == '_'
					? null
					: lr
						? gatherMarks(this, lr.split(' '))
						: lr == '' || !rr.inlineContent
							? []
							: null;
		}
		for (let tr in this.marks) {
			let rr = this.marks[tr],
				ir = rr.spec.excludes;
			rr.excluded = ir == null ? [rr] : ir == '' ? [] : gatherMarks(this, ir.split(' '));
		}
		(this.nodeFromJSON = this.nodeFromJSON.bind(this)),
			(this.markFromJSON = this.markFromJSON.bind(this)),
			(this.topNodeType = this.nodes[this.spec.topNode || 'doc']),
			(this.cached.wrappings = Object.create(null));
	}
	node(t, I = null, B, tr) {
		if (typeof t == 'string') t = this.nodeType(t);
		else if (t instanceof NodeType) {
			if (t.schema != this)
				throw new RangeError('Node type from different schema used (' + t.name + ')');
		} else throw new RangeError('Invalid node type: ' + t);
		return t.createChecked(I, B, tr);
	}
	text(t, I) {
		let B = this.nodes.text;
		return new TextNode(B, B.defaultAttrs, t, Mark.setFrom(I));
	}
	mark(t, I) {
		return typeof t == 'string' && (t = this.marks[t]), t.create(I);
	}
	nodeFromJSON(t) {
		return Node$1.fromJSON(this, t);
	}
	markFromJSON(t) {
		return Mark.fromJSON(this, t);
	}
	nodeType(t) {
		let I = this.nodes[t];
		if (!I) throw new RangeError('Unknown node type: ' + t);
		return I;
	}
}
function gatherMarks(e, t) {
	let I = [];
	for (let B = 0; B < t.length; B++) {
		let tr = t[B],
			rr = e.marks[tr],
			ir = rr;
		if (rr) I.push(rr);
		else
			for (let lr in e.marks) {
				let dr = e.marks[lr];
				(tr == '_' || (dr.spec.group && dr.spec.group.split(' ').indexOf(tr) > -1)) &&
					I.push((ir = dr));
			}
		if (!ir) throw new SyntaxError("Unknown mark type: '" + t[B] + "'");
	}
	return I;
}
function isTagRule(e) {
	return e.tag != null;
}
function isStyleRule(e) {
	return e.style != null;
}
class DOMParser {
	constructor(t, I) {
		(this.schema = t), (this.rules = I), (this.tags = []), (this.styles = []);
		let B = (this.matchedStyles = []);
		I.forEach((tr) => {
			if (isTagRule(tr)) this.tags.push(tr);
			else if (isStyleRule(tr)) {
				let rr = /[^=]*/.exec(tr.style)[0];
				B.indexOf(rr) < 0 && B.push(rr), this.styles.push(tr);
			}
		}),
			(this.normalizeLists = !this.tags.some((tr) => {
				if (!/^(ul|ol)\b/.test(tr.tag) || !tr.node) return !1;
				let rr = t.nodes[tr.node];
				return rr.contentMatch.matchType(rr);
			}));
	}
	parse(t, I = {}) {
		let B = new ParseContext(this, I, !1);
		return B.addAll(t, Mark.none, I.from, I.to), B.finish();
	}
	parseSlice(t, I = {}) {
		let B = new ParseContext(this, I, !0);
		return B.addAll(t, Mark.none, I.from, I.to), Slice.maxOpen(B.finish());
	}
	matchTag(t, I, B) {
		for (let tr = B ? this.tags.indexOf(B) + 1 : 0; tr < this.tags.length; tr++) {
			let rr = this.tags[tr];
			if (
				matches(t, rr.tag) &&
				(rr.namespace === void 0 || t.namespaceURI == rr.namespace) &&
				(!rr.context || I.matchesContext(rr.context))
			) {
				if (rr.getAttrs) {
					let ir = rr.getAttrs(t);
					if (ir === !1) continue;
					rr.attrs = ir || void 0;
				}
				return rr;
			}
		}
	}
	matchStyle(t, I, B, tr) {
		for (let rr = tr ? this.styles.indexOf(tr) + 1 : 0; rr < this.styles.length; rr++) {
			let ir = this.styles[rr],
				lr = ir.style;
			if (
				!(
					lr.indexOf(t) != 0 ||
					(ir.context && !B.matchesContext(ir.context)) ||
					(lr.length > t.length && (lr.charCodeAt(t.length) != 61 || lr.slice(t.length + 1) != I))
				)
			) {
				if (ir.getAttrs) {
					let dr = ir.getAttrs(I);
					if (dr === !1) continue;
					ir.attrs = dr || void 0;
				}
				return ir;
			}
		}
	}
	static schemaRules(t) {
		let I = [];
		function B(tr) {
			let rr = tr.priority == null ? 50 : tr.priority,
				ir = 0;
			for (; ir < I.length; ir++) {
				let lr = I[ir];
				if ((lr.priority == null ? 50 : lr.priority) < rr) break;
			}
			I.splice(ir, 0, tr);
		}
		for (let tr in t.marks) {
			let rr = t.marks[tr].spec.parseDOM;
			rr &&
				rr.forEach((ir) => {
					B((ir = copy(ir))), ir.mark || ir.ignore || ir.clearMark || (ir.mark = tr);
				});
		}
		for (let tr in t.nodes) {
			let rr = t.nodes[tr].spec.parseDOM;
			rr &&
				rr.forEach((ir) => {
					B((ir = copy(ir))), ir.node || ir.ignore || ir.mark || (ir.node = tr);
				});
		}
		return I;
	}
	static fromSchema(t) {
		return t.cached.domParser || (t.cached.domParser = new DOMParser(t, DOMParser.schemaRules(t)));
	}
}
const blockTags = {
		address: !0,
		article: !0,
		aside: !0,
		blockquote: !0,
		canvas: !0,
		dd: !0,
		div: !0,
		dl: !0,
		fieldset: !0,
		figcaption: !0,
		figure: !0,
		footer: !0,
		form: !0,
		h1: !0,
		h2: !0,
		h3: !0,
		h4: !0,
		h5: !0,
		h6: !0,
		header: !0,
		hgroup: !0,
		hr: !0,
		li: !0,
		noscript: !0,
		ol: !0,
		output: !0,
		p: !0,
		pre: !0,
		section: !0,
		table: !0,
		tfoot: !0,
		ul: !0
	},
	ignoreTags = { head: !0, noscript: !0, object: !0, script: !0, style: !0, title: !0 },
	listTags = { ol: !0, ul: !0 },
	OPT_PRESERVE_WS = 1,
	OPT_PRESERVE_WS_FULL = 2,
	OPT_OPEN_LEFT = 4;
function wsOptionsFor(e, t, I) {
	return t != null
		? (t ? OPT_PRESERVE_WS : 0) | (t === 'full' ? OPT_PRESERVE_WS_FULL : 0)
		: e && e.whitespace == 'pre'
			? OPT_PRESERVE_WS | OPT_PRESERVE_WS_FULL
			: I & ~OPT_OPEN_LEFT;
}
class NodeContext {
	constructor(t, I, B, tr, rr, ir) {
		(this.type = t),
			(this.attrs = I),
			(this.marks = B),
			(this.solid = tr),
			(this.options = ir),
			(this.content = []),
			(this.activeMarks = Mark.none),
			(this.match = rr || (ir & OPT_OPEN_LEFT ? null : t.contentMatch));
	}
	findWrapping(t) {
		if (!this.match) {
			if (!this.type) return [];
			let I = this.type.contentMatch.fillBefore(Fragment.from(t));
			if (I) this.match = this.type.contentMatch.matchFragment(I);
			else {
				let B = this.type.contentMatch,
					tr;
				return (tr = B.findWrapping(t.type)) ? ((this.match = B), tr) : null;
			}
		}
		return this.match.findWrapping(t.type);
	}
	finish(t) {
		if (!(this.options & OPT_PRESERVE_WS)) {
			let B = this.content[this.content.length - 1],
				tr;
			if (B && B.isText && (tr = /[ \t\r\n\u000c]+$/.exec(B.text))) {
				let rr = B;
				B.text.length == tr[0].length
					? this.content.pop()
					: (this.content[this.content.length - 1] = rr.withText(
							rr.text.slice(0, rr.text.length - tr[0].length)
						));
			}
		}
		let I = Fragment.from(this.content);
		return (
			!t && this.match && (I = I.append(this.match.fillBefore(Fragment.empty, !0))),
			this.type ? this.type.create(this.attrs, I, this.marks) : I
		);
	}
	inlineContext(t) {
		return this.type
			? this.type.inlineContent
			: this.content.length
				? this.content[0].isInline
				: t.parentNode && !blockTags.hasOwnProperty(t.parentNode.nodeName.toLowerCase());
	}
}
class ParseContext {
	constructor(t, I, B) {
		(this.parser = t),
			(this.options = I),
			(this.isOpen = B),
			(this.open = 0),
			(this.localPreserveWS = !1);
		let tr = I.topNode,
			rr,
			ir = wsOptionsFor(null, I.preserveWhitespace, 0) | (B ? OPT_OPEN_LEFT : 0);
		tr
			? (rr = new NodeContext(
					tr.type,
					tr.attrs,
					Mark.none,
					!0,
					I.topMatch || tr.type.contentMatch,
					ir
				))
			: B
				? (rr = new NodeContext(null, null, Mark.none, !0, null, ir))
				: (rr = new NodeContext(t.schema.topNodeType, null, Mark.none, !0, null, ir)),
			(this.nodes = [rr]),
			(this.find = I.findPositions),
			(this.needsBlock = !1);
	}
	get top() {
		return this.nodes[this.open];
	}
	addDOM(t, I) {
		t.nodeType == 3 ? this.addTextNode(t, I) : t.nodeType == 1 && this.addElement(t, I);
	}
	addTextNode(t, I) {
		let B = t.nodeValue,
			tr = this.top,
			rr =
				tr.options & OPT_PRESERVE_WS_FULL
					? 'full'
					: this.localPreserveWS || (tr.options & OPT_PRESERVE_WS) > 0;
		if (rr === 'full' || tr.inlineContext(t) || /[^ \t\r\n\u000c]/.test(B)) {
			if (rr)
				rr !== 'full'
					? (B = B.replace(/\r?\n|\r/g, ' '))
					: (B = B.replace(
							/\r\n?/g,
							`
`
						));
			else if (
				((B = B.replace(/[ \t\r\n\u000c]+/g, ' ')),
				/^[ \t\r\n\u000c]/.test(B) && this.open == this.nodes.length - 1)
			) {
				let ir = tr.content[tr.content.length - 1],
					lr = t.previousSibling;
				(!ir || (lr && lr.nodeName == 'BR') || (ir.isText && /[ \t\r\n\u000c]$/.test(ir.text))) &&
					(B = B.slice(1));
			}
			B && this.insertNode(this.parser.schema.text(B), I, !/\S/.test(B)), this.findInText(t);
		} else this.findInside(t);
	}
	addElement(t, I, B) {
		let tr = this.localPreserveWS,
			rr = this.top;
		(t.tagName == 'PRE' || /pre/.test(t.style && t.style.whiteSpace)) &&
			(this.localPreserveWS = !0);
		let ir = t.nodeName.toLowerCase(),
			lr;
		listTags.hasOwnProperty(ir) && this.parser.normalizeLists && normalizeList(t);
		let dr =
			(this.options.ruleFromNode && this.options.ruleFromNode(t)) ||
			(lr = this.parser.matchTag(t, this, B));
		e: if (dr ? dr.ignore : ignoreTags.hasOwnProperty(ir))
			this.findInside(t), this.ignoreFallback(t, I);
		else if (!dr || dr.skip || dr.closeParent) {
			dr && dr.closeParent
				? (this.open = Math.max(0, this.open - 1))
				: dr && dr.skip.nodeType && (t = dr.skip);
			let mr,
				_r = this.needsBlock;
			if (blockTags.hasOwnProperty(ir))
				rr.content.length && rr.content[0].isInline && this.open && (this.open--, (rr = this.top)),
					(mr = !0),
					rr.type || (this.needsBlock = !0);
			else if (!t.firstChild) {
				this.leafFallback(t, I);
				break e;
			}
			let fr = dr && dr.skip ? I : this.readStyles(t, I);
			fr && this.addAll(t, fr), mr && this.sync(rr), (this.needsBlock = _r);
		} else {
			let mr = this.readStyles(t, I);
			mr && this.addElementByRule(t, dr, mr, dr.consuming === !1 ? lr : void 0);
		}
		this.localPreserveWS = tr;
	}
	leafFallback(t, I) {
		t.nodeName == 'BR' &&
			this.top.type &&
			this.top.type.inlineContent &&
			this.addTextNode(
				t.ownerDocument.createTextNode(`
`),
				I
			);
	}
	ignoreFallback(t, I) {
		t.nodeName == 'BR' &&
			(!this.top.type || !this.top.type.inlineContent) &&
			this.findPlace(this.parser.schema.text('-'), I, !0);
	}
	readStyles(t, I) {
		let B = t.style;
		if (B && B.length)
			for (let tr = 0; tr < this.parser.matchedStyles.length; tr++) {
				let rr = this.parser.matchedStyles[tr],
					ir = B.getPropertyValue(rr);
				if (ir)
					for (let lr = void 0; ; ) {
						let dr = this.parser.matchStyle(rr, ir, this, lr);
						if (!dr) break;
						if (dr.ignore) return null;
						if (
							(dr.clearMark
								? (I = I.filter((mr) => !dr.clearMark(mr)))
								: (I = I.concat(this.parser.schema.marks[dr.mark].create(dr.attrs))),
							dr.consuming === !1)
						)
							lr = dr;
						else break;
					}
			}
		return I;
	}
	addElementByRule(t, I, B, tr) {
		let rr, ir;
		if (I.node)
			if (((ir = this.parser.schema.nodes[I.node]), ir.isLeaf))
				this.insertNode(ir.create(I.attrs), B, t.nodeName == 'BR') || this.leafFallback(t, B);
			else {
				let dr = this.enter(ir, I.attrs || null, B, I.preserveWhitespace);
				dr && ((rr = !0), (B = dr));
			}
		else {
			let dr = this.parser.schema.marks[I.mark];
			B = B.concat(dr.create(I.attrs));
		}
		let lr = this.top;
		if (ir && ir.isLeaf) this.findInside(t);
		else if (tr) this.addElement(t, B, tr);
		else if (I.getContent)
			this.findInside(t),
				I.getContent(t, this.parser.schema).forEach((dr) => this.insertNode(dr, B, !1));
		else {
			let dr = t;
			typeof I.contentElement == 'string'
				? (dr = t.querySelector(I.contentElement))
				: typeof I.contentElement == 'function'
					? (dr = I.contentElement(t))
					: I.contentElement && (dr = I.contentElement),
				this.findAround(t, dr, !0),
				this.addAll(dr, B),
				this.findAround(t, dr, !1);
		}
		rr && this.sync(lr) && this.open--;
	}
	addAll(t, I, B, tr) {
		let rr = B || 0;
		for (
			let ir = B ? t.childNodes[B] : t.firstChild, lr = tr == null ? null : t.childNodes[tr];
			ir != lr;
			ir = ir.nextSibling, ++rr
		)
			this.findAtPoint(t, rr), this.addDOM(ir, I);
		this.findAtPoint(t, rr);
	}
	findPlace(t, I, B) {
		let tr, rr;
		for (let ir = this.open, lr = 0; ir >= 0; ir--) {
			let dr = this.nodes[ir],
				mr = dr.findWrapping(t);
			if (mr && (!tr || tr.length > mr.length + lr) && ((tr = mr), (rr = dr), !mr.length)) break;
			if (dr.solid) {
				if (B) break;
				lr += 2;
			}
		}
		if (!tr) return null;
		this.sync(rr);
		for (let ir = 0; ir < tr.length; ir++) I = this.enterInner(tr[ir], null, I, !1);
		return I;
	}
	insertNode(t, I, B) {
		if (t.isInline && this.needsBlock && !this.top.type) {
			let rr = this.textblockFromContext();
			rr && (I = this.enterInner(rr, null, I));
		}
		let tr = this.findPlace(t, I, B);
		if (tr) {
			this.closeExtra();
			let rr = this.top;
			rr.match && (rr.match = rr.match.matchType(t.type));
			let ir = Mark.none;
			for (let lr of tr.concat(t.marks))
				(rr.type ? rr.type.allowsMarkType(lr.type) : markMayApply(lr.type, t.type)) &&
					(ir = lr.addToSet(ir));
			return rr.content.push(t.mark(ir)), !0;
		}
		return !1;
	}
	enter(t, I, B, tr) {
		let rr = this.findPlace(t.create(I), B, !1);
		return rr && (rr = this.enterInner(t, I, B, !0, tr)), rr;
	}
	enterInner(t, I, B, tr = !1, rr) {
		this.closeExtra();
		let ir = this.top;
		ir.match = ir.match && ir.match.matchType(t);
		let lr = wsOptionsFor(t, rr, ir.options);
		ir.options & OPT_OPEN_LEFT && ir.content.length == 0 && (lr |= OPT_OPEN_LEFT);
		let dr = Mark.none;
		return (
			(B = B.filter((mr) =>
				(ir.type ? ir.type.allowsMarkType(mr.type) : markMayApply(mr.type, t))
					? ((dr = mr.addToSet(dr)), !1)
					: !0
			)),
			this.nodes.push(new NodeContext(t, I, dr, tr, null, lr)),
			this.open++,
			B
		);
	}
	closeExtra(t = !1) {
		let I = this.nodes.length - 1;
		if (I > this.open) {
			for (; I > this.open; I--) this.nodes[I - 1].content.push(this.nodes[I].finish(t));
			this.nodes.length = this.open + 1;
		}
	}
	finish() {
		return (
			(this.open = 0),
			this.closeExtra(this.isOpen),
			this.nodes[0].finish(!!(this.isOpen || this.options.topOpen))
		);
	}
	sync(t) {
		for (let I = this.open; I >= 0; I--) {
			if (this.nodes[I] == t) return (this.open = I), !0;
			this.localPreserveWS && (this.nodes[I].options |= OPT_PRESERVE_WS);
		}
		return !1;
	}
	get currentPos() {
		this.closeExtra();
		let t = 0;
		for (let I = this.open; I >= 0; I--) {
			let B = this.nodes[I].content;
			for (let tr = B.length - 1; tr >= 0; tr--) t += B[tr].nodeSize;
			I && t++;
		}
		return t;
	}
	findAtPoint(t, I) {
		if (this.find)
			for (let B = 0; B < this.find.length; B++)
				this.find[B].node == t && this.find[B].offset == I && (this.find[B].pos = this.currentPos);
	}
	findInside(t) {
		if (this.find)
			for (let I = 0; I < this.find.length; I++)
				this.find[I].pos == null &&
					t.nodeType == 1 &&
					t.contains(this.find[I].node) &&
					(this.find[I].pos = this.currentPos);
	}
	findAround(t, I, B) {
		if (t != I && this.find)
			for (let tr = 0; tr < this.find.length; tr++)
				this.find[tr].pos == null &&
					t.nodeType == 1 &&
					t.contains(this.find[tr].node) &&
					I.compareDocumentPosition(this.find[tr].node) & (B ? 2 : 4) &&
					(this.find[tr].pos = this.currentPos);
	}
	findInText(t) {
		if (this.find)
			for (let I = 0; I < this.find.length; I++)
				this.find[I].node == t &&
					(this.find[I].pos = this.currentPos - (t.nodeValue.length - this.find[I].offset));
	}
	matchesContext(t) {
		if (t.indexOf('|') > -1) return t.split(/\s*\|\s*/).some(this.matchesContext, this);
		let I = t.split('/'),
			B = this.options.context,
			tr = !this.isOpen && (!B || B.parent.type == this.nodes[0].type),
			rr = -(B ? B.depth + 1 : 0) + (tr ? 0 : 1),
			ir = (lr, dr) => {
				for (; lr >= 0; lr--) {
					let mr = I[lr];
					if (mr == '') {
						if (lr == I.length - 1 || lr == 0) continue;
						for (; dr >= rr; dr--) if (ir(lr - 1, dr)) return !0;
						return !1;
					} else {
						let _r =
							dr > 0 || (dr == 0 && tr)
								? this.nodes[dr].type
								: B && dr >= rr
									? B.node(dr - rr).type
									: null;
						if (!_r || (_r.name != mr && !_r.isInGroup(mr))) return !1;
						dr--;
					}
				}
				return !0;
			};
		return ir(I.length - 1, this.open);
	}
	textblockFromContext() {
		let t = this.options.context;
		if (t)
			for (let I = t.depth; I >= 0; I--) {
				let B = t.node(I).contentMatchAt(t.indexAfter(I)).defaultType;
				if (B && B.isTextblock && B.defaultAttrs) return B;
			}
		for (let I in this.parser.schema.nodes) {
			let B = this.parser.schema.nodes[I];
			if (B.isTextblock && B.defaultAttrs) return B;
		}
	}
}
function normalizeList(e) {
	for (let t = e.firstChild, I = null; t; t = t.nextSibling) {
		let B = t.nodeType == 1 ? t.nodeName.toLowerCase() : null;
		B && listTags.hasOwnProperty(B) && I
			? (I.appendChild(t), (t = I))
			: B == 'li'
				? (I = t)
				: B && (I = null);
	}
}
function matches(e, t) {
	return (e.matches || e.msMatchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector).call(
		e,
		t
	);
}
function copy(e) {
	let t = {};
	for (let I in e) t[I] = e[I];
	return t;
}
function markMayApply(e, t) {
	let I = t.schema.nodes;
	for (let B in I) {
		let tr = I[B];
		if (!tr.allowsMarkType(e)) continue;
		let rr = [],
			ir = (lr) => {
				rr.push(lr);
				for (let dr = 0; dr < lr.edgeCount; dr++) {
					let { type: mr, next: _r } = lr.edge(dr);
					if (mr == t || (rr.indexOf(_r) < 0 && ir(_r))) return !0;
				}
			};
		if (ir(tr.contentMatch)) return !0;
	}
}
class DOMSerializer {
	constructor(t, I) {
		(this.nodes = t), (this.marks = I);
	}
	serializeFragment(t, I = {}, B) {
		B || (B = doc(I).createDocumentFragment());
		let tr = B,
			rr = [];
		return (
			t.forEach((ir) => {
				if (rr.length || ir.marks.length) {
					let lr = 0,
						dr = 0;
					for (; lr < rr.length && dr < ir.marks.length; ) {
						let mr = ir.marks[dr];
						if (!this.marks[mr.type.name]) {
							dr++;
							continue;
						}
						if (!mr.eq(rr[lr][0]) || mr.type.spec.spanning === !1) break;
						lr++, dr++;
					}
					for (; lr < rr.length; ) tr = rr.pop()[1];
					for (; dr < ir.marks.length; ) {
						let mr = ir.marks[dr++],
							_r = this.serializeMark(mr, ir.isInline, I);
						_r && (rr.push([mr, tr]), tr.appendChild(_r.dom), (tr = _r.contentDOM || _r.dom));
					}
				}
				tr.appendChild(this.serializeNodeInner(ir, I));
			}),
			B
		);
	}
	serializeNodeInner(t, I) {
		let { dom: B, contentDOM: tr } = renderSpec(doc(I), this.nodes[t.type.name](t), null, t.attrs);
		if (tr) {
			if (t.isLeaf) throw new RangeError('Content hole not allowed in a leaf node spec');
			this.serializeFragment(t.content, I, tr);
		}
		return B;
	}
	serializeNode(t, I = {}) {
		let B = this.serializeNodeInner(t, I);
		for (let tr = t.marks.length - 1; tr >= 0; tr--) {
			let rr = this.serializeMark(t.marks[tr], t.isInline, I);
			rr && ((rr.contentDOM || rr.dom).appendChild(B), (B = rr.dom));
		}
		return B;
	}
	serializeMark(t, I, B = {}) {
		let tr = this.marks[t.type.name];
		return tr && renderSpec(doc(B), tr(t, I), null, t.attrs);
	}
	static renderSpec(t, I, B = null, tr) {
		return renderSpec(t, I, B, tr);
	}
	static fromSchema(t) {
		return (
			t.cached.domSerializer ||
			(t.cached.domSerializer = new DOMSerializer(this.nodesFromSchema(t), this.marksFromSchema(t)))
		);
	}
	static nodesFromSchema(t) {
		let I = gatherToDOM(t.nodes);
		return I.text || (I.text = (B) => B.text), I;
	}
	static marksFromSchema(t) {
		return gatherToDOM(t.marks);
	}
}
function gatherToDOM(e) {
	let t = {};
	for (let I in e) {
		let B = e[I].spec.toDOM;
		B && (t[I] = B);
	}
	return t;
}
function doc(e) {
	return e.document || window.document;
}
const suspiciousAttributeCache = new WeakMap();
function suspiciousAttributes(e) {
	let t = suspiciousAttributeCache.get(e);
	return t === void 0 && suspiciousAttributeCache.set(e, (t = suspiciousAttributesInner(e))), t;
}
function suspiciousAttributesInner(e) {
	let t = null;
	function I(B) {
		if (B && typeof B == 'object')
			if (Array.isArray(B))
				if (typeof B[0] == 'string') t || (t = []), t.push(B);
				else for (let tr = 0; tr < B.length; tr++) I(B[tr]);
			else for (let tr in B) I(B[tr]);
	}
	return I(e), t;
}
function renderSpec(e, t, I, B) {
	if (typeof t == 'string') return { dom: e.createTextNode(t) };
	if (t.nodeType != null) return { dom: t };
	if (t.dom && t.dom.nodeType != null) return t;
	let tr = t[0],
		rr;
	if (typeof tr != 'string') throw new RangeError('Invalid array passed to renderSpec');
	if (B && (rr = suspiciousAttributes(B)) && rr.indexOf(t) > -1)
		throw new RangeError(
			'Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.'
		);
	let ir = tr.indexOf(' ');
	ir > 0 && ((I = tr.slice(0, ir)), (tr = tr.slice(ir + 1)));
	let lr,
		dr = I ? e.createElementNS(I, tr) : e.createElement(tr),
		mr = t[1],
		_r = 1;
	if (mr && typeof mr == 'object' && mr.nodeType == null && !Array.isArray(mr)) {
		_r = 2;
		for (let fr in mr)
			if (mr[fr] != null) {
				let hr = fr.indexOf(' ');
				hr > 0
					? dr.setAttributeNS(fr.slice(0, hr), fr.slice(hr + 1), mr[fr])
					: dr.setAttribute(fr, mr[fr]);
			}
	}
	for (let fr = _r; fr < t.length; fr++) {
		let hr = t[fr];
		if (hr === 0) {
			if (fr < t.length - 1 || fr > _r)
				throw new RangeError('Content hole must be the only child of its parent node');
			return { dom: dr, contentDOM: dr };
		} else {
			let { dom: Mr, contentDOM: gr } = renderSpec(e, hr, I, B);
			if ((dr.appendChild(Mr), gr)) {
				if (lr) throw new RangeError('Multiple content holes');
				lr = gr;
			}
		}
	}
	return { dom: dr, contentDOM: lr };
}
const lower16 = 65535,
	factor16 = Math.pow(2, 16);
function makeRecover(e, t) {
	return e + t * factor16;
}
function recoverIndex(e) {
	return e & lower16;
}
function recoverOffset(e) {
	return (e - (e & lower16)) / factor16;
}
const DEL_BEFORE = 1,
	DEL_AFTER = 2,
	DEL_ACROSS = 4,
	DEL_SIDE = 8;
class MapResult {
	constructor(t, I, B) {
		(this.pos = t), (this.delInfo = I), (this.recover = B);
	}
	get deleted() {
		return (this.delInfo & DEL_SIDE) > 0;
	}
	get deletedBefore() {
		return (this.delInfo & (DEL_BEFORE | DEL_ACROSS)) > 0;
	}
	get deletedAfter() {
		return (this.delInfo & (DEL_AFTER | DEL_ACROSS)) > 0;
	}
	get deletedAcross() {
		return (this.delInfo & DEL_ACROSS) > 0;
	}
}
class StepMap {
	constructor(t, I = !1) {
		if (((this.ranges = t), (this.inverted = I), !t.length && StepMap.empty)) return StepMap.empty;
	}
	recover(t) {
		let I = 0,
			B = recoverIndex(t);
		if (!this.inverted)
			for (let tr = 0; tr < B; tr++) I += this.ranges[tr * 3 + 2] - this.ranges[tr * 3 + 1];
		return this.ranges[B * 3] + I + recoverOffset(t);
	}
	mapResult(t, I = 1) {
		return this._map(t, I, !1);
	}
	map(t, I = 1) {
		return this._map(t, I, !0);
	}
	_map(t, I, B) {
		let tr = 0,
			rr = this.inverted ? 2 : 1,
			ir = this.inverted ? 1 : 2;
		for (let lr = 0; lr < this.ranges.length; lr += 3) {
			let dr = this.ranges[lr] - (this.inverted ? tr : 0);
			if (dr > t) break;
			let mr = this.ranges[lr + rr],
				_r = this.ranges[lr + ir],
				fr = dr + mr;
			if (t <= fr) {
				let hr = mr ? (t == dr ? -1 : t == fr ? 1 : I) : I,
					Mr = dr + tr + (hr < 0 ? 0 : _r);
				if (B) return Mr;
				let gr = t == (I < 0 ? dr : fr) ? null : makeRecover(lr / 3, t - dr),
					yr = t == dr ? DEL_AFTER : t == fr ? DEL_BEFORE : DEL_ACROSS;
				return (I < 0 ? t != dr : t != fr) && (yr |= DEL_SIDE), new MapResult(Mr, yr, gr);
			}
			tr += _r - mr;
		}
		return B ? t + tr : new MapResult(t + tr, 0, null);
	}
	touches(t, I) {
		let B = 0,
			tr = recoverIndex(I),
			rr = this.inverted ? 2 : 1,
			ir = this.inverted ? 1 : 2;
		for (let lr = 0; lr < this.ranges.length; lr += 3) {
			let dr = this.ranges[lr] - (this.inverted ? B : 0);
			if (dr > t) break;
			let mr = this.ranges[lr + rr],
				_r = dr + mr;
			if (t <= _r && lr == tr * 3) return !0;
			B += this.ranges[lr + ir] - mr;
		}
		return !1;
	}
	forEach(t) {
		let I = this.inverted ? 2 : 1,
			B = this.inverted ? 1 : 2;
		for (let tr = 0, rr = 0; tr < this.ranges.length; tr += 3) {
			let ir = this.ranges[tr],
				lr = ir - (this.inverted ? rr : 0),
				dr = ir + (this.inverted ? 0 : rr),
				mr = this.ranges[tr + I],
				_r = this.ranges[tr + B];
			t(lr, lr + mr, dr, dr + _r), (rr += _r - mr);
		}
	}
	invert() {
		return new StepMap(this.ranges, !this.inverted);
	}
	toString() {
		return (this.inverted ? '-' : '') + JSON.stringify(this.ranges);
	}
	static offset(t) {
		return t == 0 ? StepMap.empty : new StepMap(t < 0 ? [0, -t, 0] : [0, 0, t]);
	}
}
StepMap.empty = new StepMap([]);
class Mapping {
	constructor(t, I, B = 0, tr = t ? t.length : 0) {
		(this.mirror = I),
			(this.from = B),
			(this.to = tr),
			(this._maps = t || []),
			(this.ownData = !(t || I));
	}
	get maps() {
		return this._maps;
	}
	slice(t = 0, I = this.maps.length) {
		return new Mapping(this._maps, this.mirror, t, I);
	}
	appendMap(t, I) {
		this.ownData ||
			((this._maps = this._maps.slice()),
			(this.mirror = this.mirror && this.mirror.slice()),
			(this.ownData = !0)),
			(this.to = this._maps.push(t)),
			I != null && this.setMirror(this._maps.length - 1, I);
	}
	appendMapping(t) {
		for (let I = 0, B = this._maps.length; I < t._maps.length; I++) {
			let tr = t.getMirror(I);
			this.appendMap(t._maps[I], tr != null && tr < I ? B + tr : void 0);
		}
	}
	getMirror(t) {
		if (this.mirror) {
			for (let I = 0; I < this.mirror.length; I++)
				if (this.mirror[I] == t) return this.mirror[I + (I % 2 ? -1 : 1)];
		}
	}
	setMirror(t, I) {
		this.mirror || (this.mirror = []), this.mirror.push(t, I);
	}
	appendMappingInverted(t) {
		for (let I = t.maps.length - 1, B = this._maps.length + t._maps.length; I >= 0; I--) {
			let tr = t.getMirror(I);
			this.appendMap(t._maps[I].invert(), tr != null && tr > I ? B - tr - 1 : void 0);
		}
	}
	invert() {
		let t = new Mapping();
		return t.appendMappingInverted(this), t;
	}
	map(t, I = 1) {
		if (this.mirror) return this._map(t, I, !0);
		for (let B = this.from; B < this.to; B++) t = this._maps[B].map(t, I);
		return t;
	}
	mapResult(t, I = 1) {
		return this._map(t, I, !1);
	}
	_map(t, I, B) {
		let tr = 0;
		for (let rr = this.from; rr < this.to; rr++) {
			let ir = this._maps[rr],
				lr = ir.mapResult(t, I);
			if (lr.recover != null) {
				let dr = this.getMirror(rr);
				if (dr != null && dr > rr && dr < this.to) {
					(rr = dr), (t = this._maps[dr].recover(lr.recover));
					continue;
				}
			}
			(tr |= lr.delInfo), (t = lr.pos);
		}
		return B ? t : new MapResult(t, tr, null);
	}
}
const stepsByID = Object.create(null);
class Step {
	getMap() {
		return StepMap.empty;
	}
	merge(t) {
		return null;
	}
	static fromJSON(t, I) {
		if (!I || !I.stepType) throw new RangeError('Invalid input for Step.fromJSON');
		let B = stepsByID[I.stepType];
		if (!B) throw new RangeError(`No step type ${I.stepType} defined`);
		return B.fromJSON(t, I);
	}
	static jsonID(t, I) {
		if (t in stepsByID) throw new RangeError('Duplicate use of step JSON ID ' + t);
		return (stepsByID[t] = I), (I.prototype.jsonID = t), I;
	}
}
class StepResult {
	constructor(t, I) {
		(this.doc = t), (this.failed = I);
	}
	static ok(t) {
		return new StepResult(t, null);
	}
	static fail(t) {
		return new StepResult(null, t);
	}
	static fromReplace(t, I, B, tr) {
		try {
			return StepResult.ok(t.replace(I, B, tr));
		} catch (rr) {
			if (rr instanceof ReplaceError) return StepResult.fail(rr.message);
			throw rr;
		}
	}
}
function mapFragment(e, t, I) {
	let B = [];
	for (let tr = 0; tr < e.childCount; tr++) {
		let rr = e.child(tr);
		rr.content.size && (rr = rr.copy(mapFragment(rr.content, t, rr))),
			rr.isInline && (rr = t(rr, I, tr)),
			B.push(rr);
	}
	return Fragment.fromArray(B);
}
class AddMarkStep extends Step {
	constructor(t, I, B) {
		super(), (this.from = t), (this.to = I), (this.mark = B);
	}
	apply(t) {
		let I = t.slice(this.from, this.to),
			B = t.resolve(this.from),
			tr = B.node(B.sharedDepth(this.to)),
			rr = new Slice(
				mapFragment(
					I.content,
					(ir, lr) =>
						!ir.isAtom || !lr.type.allowsMarkType(this.mark.type)
							? ir
							: ir.mark(this.mark.addToSet(ir.marks)),
					tr
				),
				I.openStart,
				I.openEnd
			);
		return StepResult.fromReplace(t, this.from, this.to, rr);
	}
	invert() {
		return new RemoveMarkStep(this.from, this.to, this.mark);
	}
	map(t) {
		let I = t.mapResult(this.from, 1),
			B = t.mapResult(this.to, -1);
		return (I.deleted && B.deleted) || I.pos >= B.pos
			? null
			: new AddMarkStep(I.pos, B.pos, this.mark);
	}
	merge(t) {
		return t instanceof AddMarkStep &&
			t.mark.eq(this.mark) &&
			this.from <= t.to &&
			this.to >= t.from
			? new AddMarkStep(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark)
			: null;
	}
	toJSON() {
		return { stepType: 'addMark', mark: this.mark.toJSON(), from: this.from, to: this.to };
	}
	static fromJSON(t, I) {
		if (typeof I.from != 'number' || typeof I.to != 'number')
			throw new RangeError('Invalid input for AddMarkStep.fromJSON');
		return new AddMarkStep(I.from, I.to, t.markFromJSON(I.mark));
	}
}
Step.jsonID('addMark', AddMarkStep);
class RemoveMarkStep extends Step {
	constructor(t, I, B) {
		super(), (this.from = t), (this.to = I), (this.mark = B);
	}
	apply(t) {
		let I = t.slice(this.from, this.to),
			B = new Slice(
				mapFragment(I.content, (tr) => tr.mark(this.mark.removeFromSet(tr.marks)), t),
				I.openStart,
				I.openEnd
			);
		return StepResult.fromReplace(t, this.from, this.to, B);
	}
	invert() {
		return new AddMarkStep(this.from, this.to, this.mark);
	}
	map(t) {
		let I = t.mapResult(this.from, 1),
			B = t.mapResult(this.to, -1);
		return (I.deleted && B.deleted) || I.pos >= B.pos
			? null
			: new RemoveMarkStep(I.pos, B.pos, this.mark);
	}
	merge(t) {
		return t instanceof RemoveMarkStep &&
			t.mark.eq(this.mark) &&
			this.from <= t.to &&
			this.to >= t.from
			? new RemoveMarkStep(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark)
			: null;
	}
	toJSON() {
		return { stepType: 'removeMark', mark: this.mark.toJSON(), from: this.from, to: this.to };
	}
	static fromJSON(t, I) {
		if (typeof I.from != 'number' || typeof I.to != 'number')
			throw new RangeError('Invalid input for RemoveMarkStep.fromJSON');
		return new RemoveMarkStep(I.from, I.to, t.markFromJSON(I.mark));
	}
}
Step.jsonID('removeMark', RemoveMarkStep);
class AddNodeMarkStep extends Step {
	constructor(t, I) {
		super(), (this.pos = t), (this.mark = I);
	}
	apply(t) {
		let I = t.nodeAt(this.pos);
		if (!I) return StepResult.fail("No node at mark step's position");
		let B = I.type.create(I.attrs, null, this.mark.addToSet(I.marks));
		return StepResult.fromReplace(
			t,
			this.pos,
			this.pos + 1,
			new Slice(Fragment.from(B), 0, I.isLeaf ? 0 : 1)
		);
	}
	invert(t) {
		let I = t.nodeAt(this.pos);
		if (I) {
			let B = this.mark.addToSet(I.marks);
			if (B.length == I.marks.length) {
				for (let tr = 0; tr < I.marks.length; tr++)
					if (!I.marks[tr].isInSet(B)) return new AddNodeMarkStep(this.pos, I.marks[tr]);
				return new AddNodeMarkStep(this.pos, this.mark);
			}
		}
		return new RemoveNodeMarkStep(this.pos, this.mark);
	}
	map(t) {
		let I = t.mapResult(this.pos, 1);
		return I.deletedAfter ? null : new AddNodeMarkStep(I.pos, this.mark);
	}
	toJSON() {
		return { stepType: 'addNodeMark', pos: this.pos, mark: this.mark.toJSON() };
	}
	static fromJSON(t, I) {
		if (typeof I.pos != 'number')
			throw new RangeError('Invalid input for AddNodeMarkStep.fromJSON');
		return new AddNodeMarkStep(I.pos, t.markFromJSON(I.mark));
	}
}
Step.jsonID('addNodeMark', AddNodeMarkStep);
class RemoveNodeMarkStep extends Step {
	constructor(t, I) {
		super(), (this.pos = t), (this.mark = I);
	}
	apply(t) {
		let I = t.nodeAt(this.pos);
		if (!I) return StepResult.fail("No node at mark step's position");
		let B = I.type.create(I.attrs, null, this.mark.removeFromSet(I.marks));
		return StepResult.fromReplace(
			t,
			this.pos,
			this.pos + 1,
			new Slice(Fragment.from(B), 0, I.isLeaf ? 0 : 1)
		);
	}
	invert(t) {
		let I = t.nodeAt(this.pos);
		return !I || !this.mark.isInSet(I.marks) ? this : new AddNodeMarkStep(this.pos, this.mark);
	}
	map(t) {
		let I = t.mapResult(this.pos, 1);
		return I.deletedAfter ? null : new RemoveNodeMarkStep(I.pos, this.mark);
	}
	toJSON() {
		return { stepType: 'removeNodeMark', pos: this.pos, mark: this.mark.toJSON() };
	}
	static fromJSON(t, I) {
		if (typeof I.pos != 'number')
			throw new RangeError('Invalid input for RemoveNodeMarkStep.fromJSON');
		return new RemoveNodeMarkStep(I.pos, t.markFromJSON(I.mark));
	}
}
Step.jsonID('removeNodeMark', RemoveNodeMarkStep);
class ReplaceStep extends Step {
	constructor(t, I, B, tr = !1) {
		super(), (this.from = t), (this.to = I), (this.slice = B), (this.structure = tr);
	}
	apply(t) {
		return this.structure && contentBetween(t, this.from, this.to)
			? StepResult.fail('Structure replace would overwrite content')
			: StepResult.fromReplace(t, this.from, this.to, this.slice);
	}
	getMap() {
		return new StepMap([this.from, this.to - this.from, this.slice.size]);
	}
	invert(t) {
		return new ReplaceStep(this.from, this.from + this.slice.size, t.slice(this.from, this.to));
	}
	map(t) {
		let I = t.mapResult(this.from, 1),
			B = t.mapResult(this.to, -1);
		return I.deletedAcross && B.deletedAcross
			? null
			: new ReplaceStep(I.pos, Math.max(I.pos, B.pos), this.slice, this.structure);
	}
	merge(t) {
		if (!(t instanceof ReplaceStep) || t.structure || this.structure) return null;
		if (this.from + this.slice.size == t.from && !this.slice.openEnd && !t.slice.openStart) {
			let I =
				this.slice.size + t.slice.size == 0
					? Slice.empty
					: new Slice(
							this.slice.content.append(t.slice.content),
							this.slice.openStart,
							t.slice.openEnd
						);
			return new ReplaceStep(this.from, this.to + (t.to - t.from), I, this.structure);
		} else if (t.to == this.from && !this.slice.openStart && !t.slice.openEnd) {
			let I =
				this.slice.size + t.slice.size == 0
					? Slice.empty
					: new Slice(
							t.slice.content.append(this.slice.content),
							t.slice.openStart,
							this.slice.openEnd
						);
			return new ReplaceStep(t.from, this.to, I, this.structure);
		} else return null;
	}
	toJSON() {
		let t = { stepType: 'replace', from: this.from, to: this.to };
		return (
			this.slice.size && (t.slice = this.slice.toJSON()), this.structure && (t.structure = !0), t
		);
	}
	static fromJSON(t, I) {
		if (typeof I.from != 'number' || typeof I.to != 'number')
			throw new RangeError('Invalid input for ReplaceStep.fromJSON');
		return new ReplaceStep(I.from, I.to, Slice.fromJSON(t, I.slice), !!I.structure);
	}
}
Step.jsonID('replace', ReplaceStep);
class ReplaceAroundStep extends Step {
	constructor(t, I, B, tr, rr, ir, lr = !1) {
		super(),
			(this.from = t),
			(this.to = I),
			(this.gapFrom = B),
			(this.gapTo = tr),
			(this.slice = rr),
			(this.insert = ir),
			(this.structure = lr);
	}
	apply(t) {
		if (
			this.structure &&
			(contentBetween(t, this.from, this.gapFrom) || contentBetween(t, this.gapTo, this.to))
		)
			return StepResult.fail('Structure gap-replace would overwrite content');
		let I = t.slice(this.gapFrom, this.gapTo);
		if (I.openStart || I.openEnd) return StepResult.fail('Gap is not a flat range');
		let B = this.slice.insertAt(this.insert, I.content);
		return B
			? StepResult.fromReplace(t, this.from, this.to, B)
			: StepResult.fail('Content does not fit in gap');
	}
	getMap() {
		return new StepMap([
			this.from,
			this.gapFrom - this.from,
			this.insert,
			this.gapTo,
			this.to - this.gapTo,
			this.slice.size - this.insert
		]);
	}
	invert(t) {
		let I = this.gapTo - this.gapFrom;
		return new ReplaceAroundStep(
			this.from,
			this.from + this.slice.size + I,
			this.from + this.insert,
			this.from + this.insert + I,
			t.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
			this.gapFrom - this.from,
			this.structure
		);
	}
	map(t) {
		let I = t.mapResult(this.from, 1),
			B = t.mapResult(this.to, -1),
			tr = this.from == this.gapFrom ? I.pos : t.map(this.gapFrom, -1),
			rr = this.to == this.gapTo ? B.pos : t.map(this.gapTo, 1);
		return (I.deletedAcross && B.deletedAcross) || tr < I.pos || rr > B.pos
			? null
			: new ReplaceAroundStep(I.pos, B.pos, tr, rr, this.slice, this.insert, this.structure);
	}
	toJSON() {
		let t = {
			stepType: 'replaceAround',
			from: this.from,
			to: this.to,
			gapFrom: this.gapFrom,
			gapTo: this.gapTo,
			insert: this.insert
		};
		return (
			this.slice.size && (t.slice = this.slice.toJSON()), this.structure && (t.structure = !0), t
		);
	}
	static fromJSON(t, I) {
		if (
			typeof I.from != 'number' ||
			typeof I.to != 'number' ||
			typeof I.gapFrom != 'number' ||
			typeof I.gapTo != 'number' ||
			typeof I.insert != 'number'
		)
			throw new RangeError('Invalid input for ReplaceAroundStep.fromJSON');
		return new ReplaceAroundStep(
			I.from,
			I.to,
			I.gapFrom,
			I.gapTo,
			Slice.fromJSON(t, I.slice),
			I.insert,
			!!I.structure
		);
	}
}
Step.jsonID('replaceAround', ReplaceAroundStep);
function contentBetween(e, t, I) {
	let B = e.resolve(t),
		tr = I - t,
		rr = B.depth;
	for (; tr > 0 && rr > 0 && B.indexAfter(rr) == B.node(rr).childCount; ) rr--, tr--;
	if (tr > 0) {
		let ir = B.node(rr).maybeChild(B.indexAfter(rr));
		for (; tr > 0; ) {
			if (!ir || ir.isLeaf) return !0;
			(ir = ir.firstChild), tr--;
		}
	}
	return !1;
}
function addMark(e, t, I, B) {
	let tr = [],
		rr = [],
		ir,
		lr;
	e.doc.nodesBetween(t, I, (dr, mr, _r) => {
		if (!dr.isInline) return;
		let fr = dr.marks;
		if (!B.isInSet(fr) && _r.type.allowsMarkType(B.type)) {
			let hr = Math.max(mr, t),
				Mr = Math.min(mr + dr.nodeSize, I),
				gr = B.addToSet(fr);
			for (let yr = 0; yr < fr.length; yr++)
				fr[yr].isInSet(gr) ||
					(ir && ir.to == hr && ir.mark.eq(fr[yr])
						? (ir.to = Mr)
						: tr.push((ir = new RemoveMarkStep(hr, Mr, fr[yr]))));
			lr && lr.to == hr ? (lr.to = Mr) : rr.push((lr = new AddMarkStep(hr, Mr, B)));
		}
	}),
		tr.forEach((dr) => e.step(dr)),
		rr.forEach((dr) => e.step(dr));
}
function removeMark(e, t, I, B) {
	let tr = [],
		rr = 0;
	e.doc.nodesBetween(t, I, (ir, lr) => {
		if (!ir.isInline) return;
		rr++;
		let dr = null;
		if (B instanceof MarkType) {
			let mr = ir.marks,
				_r;
			for (; (_r = B.isInSet(mr)); ) (dr || (dr = [])).push(_r), (mr = _r.removeFromSet(mr));
		} else B ? B.isInSet(ir.marks) && (dr = [B]) : (dr = ir.marks);
		if (dr && dr.length) {
			let mr = Math.min(lr + ir.nodeSize, I);
			for (let _r = 0; _r < dr.length; _r++) {
				let fr = dr[_r],
					hr;
				for (let Mr = 0; Mr < tr.length; Mr++) {
					let gr = tr[Mr];
					gr.step == rr - 1 && fr.eq(tr[Mr].style) && (hr = gr);
				}
				hr
					? ((hr.to = mr), (hr.step = rr))
					: tr.push({ style: fr, from: Math.max(lr, t), to: mr, step: rr });
			}
		}
	}),
		tr.forEach((ir) => e.step(new RemoveMarkStep(ir.from, ir.to, ir.style)));
}
function clearIncompatible(e, t, I, B = I.contentMatch, tr = !0) {
	let rr = e.doc.nodeAt(t),
		ir = [],
		lr = t + 1;
	for (let dr = 0; dr < rr.childCount; dr++) {
		let mr = rr.child(dr),
			_r = lr + mr.nodeSize,
			fr = B.matchType(mr.type);
		if (!fr) ir.push(new ReplaceStep(lr, _r, Slice.empty));
		else {
			B = fr;
			for (let hr = 0; hr < mr.marks.length; hr++)
				I.allowsMarkType(mr.marks[hr].type) || e.step(new RemoveMarkStep(lr, _r, mr.marks[hr]));
			if (tr && mr.isText && I.whitespace != 'pre') {
				let hr,
					Mr = /\r?\n|\r/g,
					gr;
				for (; (hr = Mr.exec(mr.text)); )
					gr || (gr = new Slice(Fragment.from(I.schema.text(' ', I.allowedMarks(mr.marks))), 0, 0)),
						ir.push(new ReplaceStep(lr + hr.index, lr + hr.index + hr[0].length, gr));
			}
		}
		lr = _r;
	}
	if (!B.validEnd) {
		let dr = B.fillBefore(Fragment.empty, !0);
		e.replace(lr, lr, new Slice(dr, 0, 0));
	}
	for (let dr = ir.length - 1; dr >= 0; dr--) e.step(ir[dr]);
}
function canCut(e, t, I) {
	return (t == 0 || e.canReplace(t, e.childCount)) && (I == e.childCount || e.canReplace(0, I));
}
function liftTarget(e) {
	let I = e.parent.content.cutByIndex(e.startIndex, e.endIndex);
	for (let B = e.depth; ; --B) {
		let tr = e.$from.node(B),
			rr = e.$from.index(B),
			ir = e.$to.indexAfter(B);
		if (B < e.depth && tr.canReplace(rr, ir, I)) return B;
		if (B == 0 || tr.type.spec.isolating || !canCut(tr, rr, ir)) break;
	}
	return null;
}
function lift(e, t, I) {
	let { $from: B, $to: tr, depth: rr } = t,
		ir = B.before(rr + 1),
		lr = tr.after(rr + 1),
		dr = ir,
		mr = lr,
		_r = Fragment.empty,
		fr = 0;
	for (let gr = rr, yr = !1; gr > I; gr--)
		yr || B.index(gr) > 0 ? ((yr = !0), (_r = Fragment.from(B.node(gr).copy(_r))), fr++) : dr--;
	let hr = Fragment.empty,
		Mr = 0;
	for (let gr = rr, yr = !1; gr > I; gr--)
		yr || tr.after(gr + 1) < tr.end(gr)
			? ((yr = !0), (hr = Fragment.from(tr.node(gr).copy(hr))), Mr++)
			: mr++;
	e.step(new ReplaceAroundStep(dr, mr, ir, lr, new Slice(_r.append(hr), fr, Mr), _r.size - fr, !0));
}
function findWrapping(e, t, I = null, B = e) {
	let tr = findWrappingOutside(e, t),
		rr = tr && findWrappingInside(B, t);
	return rr ? tr.map(withAttrs).concat({ type: t, attrs: I }).concat(rr.map(withAttrs)) : null;
}
function withAttrs(e) {
	return { type: e, attrs: null };
}
function findWrappingOutside(e, t) {
	let { parent: I, startIndex: B, endIndex: tr } = e,
		rr = I.contentMatchAt(B).findWrapping(t);
	if (!rr) return null;
	let ir = rr.length ? rr[0] : t;
	return I.canReplaceWith(B, tr, ir) ? rr : null;
}
function findWrappingInside(e, t) {
	let { parent: I, startIndex: B, endIndex: tr } = e,
		rr = I.child(B),
		ir = t.contentMatch.findWrapping(rr.type);
	if (!ir) return null;
	let dr = (ir.length ? ir[ir.length - 1] : t).contentMatch;
	for (let mr = B; dr && mr < tr; mr++) dr = dr.matchType(I.child(mr).type);
	return !dr || !dr.validEnd ? null : ir;
}
function wrap(e, t, I) {
	let B = Fragment.empty;
	for (let ir = I.length - 1; ir >= 0; ir--) {
		if (B.size) {
			let lr = I[ir].type.contentMatch.matchFragment(B);
			if (!lr || !lr.validEnd)
				throw new RangeError(
					'Wrapper type given to Transform.wrap does not form valid content of its parent wrapper'
				);
		}
		B = Fragment.from(I[ir].type.create(I[ir].attrs, B));
	}
	let tr = t.start,
		rr = t.end;
	e.step(new ReplaceAroundStep(tr, rr, tr, rr, new Slice(B, 0, 0), I.length, !0));
}
function setBlockType(e, t, I, B, tr) {
	if (!B.isTextblock) throw new RangeError('Type given to setBlockType should be a textblock');
	let rr = e.steps.length;
	e.doc.nodesBetween(t, I, (ir, lr) => {
		let dr = typeof tr == 'function' ? tr(ir) : tr;
		if (
			ir.isTextblock &&
			!ir.hasMarkup(B, dr) &&
			canChangeType(e.doc, e.mapping.slice(rr).map(lr), B)
		) {
			let mr = null;
			if (B.schema.linebreakReplacement) {
				let Mr = B.whitespace == 'pre',
					gr = !!B.contentMatch.matchType(B.schema.linebreakReplacement);
				Mr && !gr ? (mr = !1) : !Mr && gr && (mr = !0);
			}
			mr === !1 && replaceLinebreaks(e, ir, lr, rr),
				clearIncompatible(e, e.mapping.slice(rr).map(lr, 1), B, void 0, mr === null);
			let _r = e.mapping.slice(rr),
				fr = _r.map(lr, 1),
				hr = _r.map(lr + ir.nodeSize, 1);
			return (
				e.step(
					new ReplaceAroundStep(
						fr,
						hr,
						fr + 1,
						hr - 1,
						new Slice(Fragment.from(B.create(dr, null, ir.marks)), 0, 0),
						1,
						!0
					)
				),
				mr === !0 && replaceNewlines(e, ir, lr, rr),
				!1
			);
		}
	});
}
function replaceNewlines(e, t, I, B) {
	t.forEach((tr, rr) => {
		if (tr.isText) {
			let ir,
				lr = /\r?\n|\r/g;
			for (; (ir = lr.exec(tr.text)); ) {
				let dr = e.mapping.slice(B).map(I + 1 + rr + ir.index);
				e.replaceWith(dr, dr + 1, t.type.schema.linebreakReplacement.create());
			}
		}
	});
}
function replaceLinebreaks(e, t, I, B) {
	t.forEach((tr, rr) => {
		if (tr.type == tr.type.schema.linebreakReplacement) {
			let ir = e.mapping.slice(B).map(I + 1 + rr);
			e.replaceWith(
				ir,
				ir + 1,
				t.type.schema.text(`
`)
			);
		}
	});
}
function canChangeType(e, t, I) {
	let B = e.resolve(t),
		tr = B.index();
	return B.parent.canReplaceWith(tr, tr + 1, I);
}
function setNodeMarkup(e, t, I, B, tr) {
	let rr = e.doc.nodeAt(t);
	if (!rr) throw new RangeError('No node at given position');
	I || (I = rr.type);
	let ir = I.create(B, null, tr || rr.marks);
	if (rr.isLeaf) return e.replaceWith(t, t + rr.nodeSize, ir);
	if (!I.validContent(rr.content)) throw new RangeError('Invalid content for node type ' + I.name);
	e.step(
		new ReplaceAroundStep(
			t,
			t + rr.nodeSize,
			t + 1,
			t + rr.nodeSize - 1,
			new Slice(Fragment.from(ir), 0, 0),
			1,
			!0
		)
	);
}
function canSplit(e, t, I = 1, B) {
	let tr = e.resolve(t),
		rr = tr.depth - I,
		ir = (B && B[B.length - 1]) || tr.parent;
	if (
		rr < 0 ||
		tr.parent.type.spec.isolating ||
		!tr.parent.canReplace(tr.index(), tr.parent.childCount) ||
		!ir.type.validContent(tr.parent.content.cutByIndex(tr.index(), tr.parent.childCount))
	)
		return !1;
	for (let mr = tr.depth - 1, _r = I - 2; mr > rr; mr--, _r--) {
		let fr = tr.node(mr),
			hr = tr.index(mr);
		if (fr.type.spec.isolating) return !1;
		let Mr = fr.content.cutByIndex(hr, fr.childCount),
			gr = B && B[_r + 1];
		gr && (Mr = Mr.replaceChild(0, gr.type.create(gr.attrs)));
		let yr = (B && B[_r]) || fr;
		if (!fr.canReplace(hr + 1, fr.childCount) || !yr.type.validContent(Mr)) return !1;
	}
	let lr = tr.indexAfter(rr),
		dr = B && B[0];
	return tr.node(rr).canReplaceWith(lr, lr, dr ? dr.type : tr.node(rr + 1).type);
}
function split(e, t, I = 1, B) {
	let tr = e.doc.resolve(t),
		rr = Fragment.empty,
		ir = Fragment.empty;
	for (let lr = tr.depth, dr = tr.depth - I, mr = I - 1; lr > dr; lr--, mr--) {
		rr = Fragment.from(tr.node(lr).copy(rr));
		let _r = B && B[mr];
		ir = Fragment.from(_r ? _r.type.create(_r.attrs, ir) : tr.node(lr).copy(ir));
	}
	e.step(new ReplaceStep(t, t, new Slice(rr.append(ir), I, I), !0));
}
function canJoin(e, t) {
	let I = e.resolve(t),
		B = I.index();
	return joinable(I.nodeBefore, I.nodeAfter) && I.parent.canReplace(B, B + 1);
}
function canAppendWithSubstitutedLinebreaks(e, t) {
	t.content.size || e.type.compatibleContent(t.type);
	let I = e.contentMatchAt(e.childCount),
		{ linebreakReplacement: B } = e.type.schema;
	for (let tr = 0; tr < t.childCount; tr++) {
		let rr = t.child(tr),
			ir = rr.type == B ? e.type.schema.nodes.text : rr.type;
		if (((I = I.matchType(ir)), !I || !e.type.allowsMarks(rr.marks))) return !1;
	}
	return I.validEnd;
}
function joinable(e, t) {
	return !!(e && t && !e.isLeaf && canAppendWithSubstitutedLinebreaks(e, t));
}
function joinPoint(e, t, I = -1) {
	let B = e.resolve(t);
	for (let tr = B.depth; ; tr--) {
		let rr,
			ir,
			lr = B.index(tr);
		if (
			(tr == B.depth
				? ((rr = B.nodeBefore), (ir = B.nodeAfter))
				: I > 0
					? ((rr = B.node(tr + 1)), lr++, (ir = B.node(tr).maybeChild(lr)))
					: ((rr = B.node(tr).maybeChild(lr - 1)), (ir = B.node(tr + 1))),
			rr && !rr.isTextblock && joinable(rr, ir) && B.node(tr).canReplace(lr, lr + 1))
		)
			return t;
		if (tr == 0) break;
		t = I < 0 ? B.before(tr) : B.after(tr);
	}
}
function join(e, t, I) {
	let B = null,
		{ linebreakReplacement: tr } = e.doc.type.schema,
		rr = e.doc.resolve(t - I),
		ir = rr.node().type;
	if (tr && ir.inlineContent) {
		let _r = ir.whitespace == 'pre',
			fr = !!ir.contentMatch.matchType(tr);
		_r && !fr ? (B = !1) : !_r && fr && (B = !0);
	}
	let lr = e.steps.length;
	if (B === !1) {
		let _r = e.doc.resolve(t + I);
		replaceLinebreaks(e, _r.node(), _r.before(), lr);
	}
	ir.inlineContent &&
		clearIncompatible(e, t + I - 1, ir, rr.node().contentMatchAt(rr.index()), B == null);
	let dr = e.mapping.slice(lr),
		mr = dr.map(t - I);
	if ((e.step(new ReplaceStep(mr, dr.map(t + I, -1), Slice.empty, !0)), B === !0)) {
		let _r = e.doc.resolve(mr);
		replaceNewlines(e, _r.node(), _r.before(), e.steps.length);
	}
	return e;
}
function insertPoint(e, t, I) {
	let B = e.resolve(t);
	if (B.parent.canReplaceWith(B.index(), B.index(), I)) return t;
	if (B.parentOffset == 0)
		for (let tr = B.depth - 1; tr >= 0; tr--) {
			let rr = B.index(tr);
			if (B.node(tr).canReplaceWith(rr, rr, I)) return B.before(tr + 1);
			if (rr > 0) return null;
		}
	if (B.parentOffset == B.parent.content.size)
		for (let tr = B.depth - 1; tr >= 0; tr--) {
			let rr = B.indexAfter(tr);
			if (B.node(tr).canReplaceWith(rr, rr, I)) return B.after(tr + 1);
			if (rr < B.node(tr).childCount) return null;
		}
	return null;
}
function dropPoint(e, t, I) {
	let B = e.resolve(t);
	if (!I.content.size) return t;
	let tr = I.content;
	for (let rr = 0; rr < I.openStart; rr++) tr = tr.firstChild.content;
	for (let rr = 1; rr <= (I.openStart == 0 && I.size ? 2 : 1); rr++)
		for (let ir = B.depth; ir >= 0; ir--) {
			let lr = ir == B.depth ? 0 : B.pos <= (B.start(ir + 1) + B.end(ir + 1)) / 2 ? -1 : 1,
				dr = B.index(ir) + (lr > 0 ? 1 : 0),
				mr = B.node(ir),
				_r = !1;
			if (rr == 1) _r = mr.canReplace(dr, dr, tr);
			else {
				let fr = mr.contentMatchAt(dr).findWrapping(tr.firstChild.type);
				_r = fr && mr.canReplaceWith(dr, dr, fr[0]);
			}
			if (_r) return lr == 0 ? B.pos : lr < 0 ? B.before(ir + 1) : B.after(ir + 1);
		}
	return null;
}
function replaceStep(e, t, I = t, B = Slice.empty) {
	if (t == I && !B.size) return null;
	let tr = e.resolve(t),
		rr = e.resolve(I);
	return fitsTrivially(tr, rr, B) ? new ReplaceStep(t, I, B) : new Fitter(tr, rr, B).fit();
}
function fitsTrivially(e, t, I) {
	return (
		!I.openStart &&
		!I.openEnd &&
		e.start() == t.start() &&
		e.parent.canReplace(e.index(), t.index(), I.content)
	);
}
class Fitter {
	constructor(t, I, B) {
		(this.$from = t),
			(this.$to = I),
			(this.unplaced = B),
			(this.frontier = []),
			(this.placed = Fragment.empty);
		for (let tr = 0; tr <= t.depth; tr++) {
			let rr = t.node(tr);
			this.frontier.push({ type: rr.type, match: rr.contentMatchAt(t.indexAfter(tr)) });
		}
		for (let tr = t.depth; tr > 0; tr--) this.placed = Fragment.from(t.node(tr).copy(this.placed));
	}
	get depth() {
		return this.frontier.length - 1;
	}
	fit() {
		for (; this.unplaced.size; ) {
			let mr = this.findFittable();
			mr ? this.placeNodes(mr) : this.openMore() || this.dropNode();
		}
		let t = this.mustMoveInline(),
			I = this.placed.size - this.depth - this.$from.depth,
			B = this.$from,
			tr = this.close(t < 0 ? this.$to : B.doc.resolve(t));
		if (!tr) return null;
		let rr = this.placed,
			ir = B.depth,
			lr = tr.depth;
		for (; ir && lr && rr.childCount == 1; ) (rr = rr.firstChild.content), ir--, lr--;
		let dr = new Slice(rr, ir, lr);
		return t > -1
			? new ReplaceAroundStep(B.pos, t, this.$to.pos, this.$to.end(), dr, I)
			: dr.size || B.pos != this.$to.pos
				? new ReplaceStep(B.pos, tr.pos, dr)
				: null;
	}
	findFittable() {
		let t = this.unplaced.openStart;
		for (let I = this.unplaced.content, B = 0, tr = this.unplaced.openEnd; B < t; B++) {
			let rr = I.firstChild;
			if ((I.childCount > 1 && (tr = 0), rr.type.spec.isolating && tr <= B)) {
				t = B;
				break;
			}
			I = rr.content;
		}
		for (let I = 1; I <= 2; I++)
			for (let B = I == 1 ? t : this.unplaced.openStart; B >= 0; B--) {
				let tr,
					rr = null;
				B
					? ((rr = contentAt(this.unplaced.content, B - 1).firstChild), (tr = rr.content))
					: (tr = this.unplaced.content);
				let ir = tr.firstChild;
				for (let lr = this.depth; lr >= 0; lr--) {
					let { type: dr, match: mr } = this.frontier[lr],
						_r,
						fr = null;
					if (
						I == 1 &&
						(ir
							? mr.matchType(ir.type) || (fr = mr.fillBefore(Fragment.from(ir), !1))
							: rr && dr.compatibleContent(rr.type))
					)
						return { sliceDepth: B, frontierDepth: lr, parent: rr, inject: fr };
					if (I == 2 && ir && (_r = mr.findWrapping(ir.type)))
						return { sliceDepth: B, frontierDepth: lr, parent: rr, wrap: _r };
					if (rr && mr.matchType(rr.type)) break;
				}
			}
	}
	openMore() {
		let { content: t, openStart: I, openEnd: B } = this.unplaced,
			tr = contentAt(t, I);
		return !tr.childCount || tr.firstChild.isLeaf
			? !1
			: ((this.unplaced = new Slice(t, I + 1, Math.max(B, tr.size + I >= t.size - B ? I + 1 : 0))),
				!0);
	}
	dropNode() {
		let { content: t, openStart: I, openEnd: B } = this.unplaced,
			tr = contentAt(t, I);
		if (tr.childCount <= 1 && I > 0) {
			let rr = t.size - I <= I + tr.size;
			this.unplaced = new Slice(dropFromFragment(t, I - 1, 1), I - 1, rr ? I - 1 : B);
		} else this.unplaced = new Slice(dropFromFragment(t, I, 1), I, B);
	}
	placeNodes({ sliceDepth: t, frontierDepth: I, parent: B, inject: tr, wrap: rr }) {
		for (; this.depth > I; ) this.closeFrontierNode();
		if (rr) for (let yr = 0; yr < rr.length; yr++) this.openFrontierNode(rr[yr]);
		let ir = this.unplaced,
			lr = B ? B.content : ir.content,
			dr = ir.openStart - t,
			mr = 0,
			_r = [],
			{ match: fr, type: hr } = this.frontier[I];
		if (tr) {
			for (let yr = 0; yr < tr.childCount; yr++) _r.push(tr.child(yr));
			fr = fr.matchFragment(tr);
		}
		let Mr = lr.size + t - (ir.content.size - ir.openEnd);
		for (; mr < lr.childCount; ) {
			let yr = lr.child(mr),
				xr = fr.matchType(yr.type);
			if (!xr) break;
			mr++,
				(mr > 1 || dr == 0 || yr.content.size) &&
					((fr = xr),
					_r.push(
						closeNodeStart(
							yr.mark(hr.allowedMarks(yr.marks)),
							mr == 1 ? dr : 0,
							mr == lr.childCount ? Mr : -1
						)
					));
		}
		let gr = mr == lr.childCount;
		gr || (Mr = -1),
			(this.placed = addToFragment(this.placed, I, Fragment.from(_r))),
			(this.frontier[I].match = fr),
			gr &&
				Mr < 0 &&
				B &&
				B.type == this.frontier[this.depth].type &&
				this.frontier.length > 1 &&
				this.closeFrontierNode();
		for (let yr = 0, xr = lr; yr < Mr; yr++) {
			let vr = xr.lastChild;
			this.frontier.push({ type: vr.type, match: vr.contentMatchAt(vr.childCount) }),
				(xr = vr.content);
		}
		this.unplaced = gr
			? t == 0
				? Slice.empty
				: new Slice(dropFromFragment(ir.content, t - 1, 1), t - 1, Mr < 0 ? ir.openEnd : t - 1)
			: new Slice(dropFromFragment(ir.content, t, mr), ir.openStart, ir.openEnd);
	}
	mustMoveInline() {
		if (!this.$to.parent.isTextblock) return -1;
		let t = this.frontier[this.depth],
			I;
		if (
			!t.type.isTextblock ||
			!contentAfterFits(this.$to, this.$to.depth, t.type, t.match, !1) ||
			(this.$to.depth == this.depth && (I = this.findCloseLevel(this.$to)) && I.depth == this.depth)
		)
			return -1;
		let { depth: B } = this.$to,
			tr = this.$to.after(B);
		for (; B > 1 && tr == this.$to.end(--B); ) ++tr;
		return tr;
	}
	findCloseLevel(t) {
		e: for (let I = Math.min(this.depth, t.depth); I >= 0; I--) {
			let { match: B, type: tr } = this.frontier[I],
				rr = I < t.depth && t.end(I + 1) == t.pos + (t.depth - (I + 1)),
				ir = contentAfterFits(t, I, tr, B, rr);
			if (ir) {
				for (let lr = I - 1; lr >= 0; lr--) {
					let { match: dr, type: mr } = this.frontier[lr],
						_r = contentAfterFits(t, lr, mr, dr, !0);
					if (!_r || _r.childCount) continue e;
				}
				return { depth: I, fit: ir, move: rr ? t.doc.resolve(t.after(I + 1)) : t };
			}
		}
	}
	close(t) {
		let I = this.findCloseLevel(t);
		if (!I) return null;
		for (; this.depth > I.depth; ) this.closeFrontierNode();
		I.fit.childCount && (this.placed = addToFragment(this.placed, I.depth, I.fit)), (t = I.move);
		for (let B = I.depth + 1; B <= t.depth; B++) {
			let tr = t.node(B),
				rr = tr.type.contentMatch.fillBefore(tr.content, !0, t.index(B));
			this.openFrontierNode(tr.type, tr.attrs, rr);
		}
		return t;
	}
	openFrontierNode(t, I = null, B) {
		let tr = this.frontier[this.depth];
		(tr.match = tr.match.matchType(t)),
			(this.placed = addToFragment(this.placed, this.depth, Fragment.from(t.create(I, B)))),
			this.frontier.push({ type: t, match: t.contentMatch });
	}
	closeFrontierNode() {
		let I = this.frontier.pop().match.fillBefore(Fragment.empty, !0);
		I.childCount && (this.placed = addToFragment(this.placed, this.frontier.length, I));
	}
}
function dropFromFragment(e, t, I) {
	return t == 0
		? e.cutByIndex(I, e.childCount)
		: e.replaceChild(0, e.firstChild.copy(dropFromFragment(e.firstChild.content, t - 1, I)));
}
function addToFragment(e, t, I) {
	return t == 0
		? e.append(I)
		: e.replaceChild(
				e.childCount - 1,
				e.lastChild.copy(addToFragment(e.lastChild.content, t - 1, I))
			);
}
function contentAt(e, t) {
	for (let I = 0; I < t; I++) e = e.firstChild.content;
	return e;
}
function closeNodeStart(e, t, I) {
	if (t <= 0) return e;
	let B = e.content;
	return (
		t > 1 &&
			(B = B.replaceChild(0, closeNodeStart(B.firstChild, t - 1, B.childCount == 1 ? I - 1 : 0))),
		t > 0 &&
			((B = e.type.contentMatch.fillBefore(B).append(B)),
			I <= 0 &&
				(B = B.append(e.type.contentMatch.matchFragment(B).fillBefore(Fragment.empty, !0)))),
		e.copy(B)
	);
}
function contentAfterFits(e, t, I, B, tr) {
	let rr = e.node(t),
		ir = tr ? e.indexAfter(t) : e.index(t);
	if (ir == rr.childCount && !I.compatibleContent(rr.type)) return null;
	let lr = B.fillBefore(rr.content, !0, ir);
	return lr && !invalidMarks(I, rr.content, ir) ? lr : null;
}
function invalidMarks(e, t, I) {
	for (let B = I; B < t.childCount; B++) if (!e.allowsMarks(t.child(B).marks)) return !0;
	return !1;
}
function definesContent(e) {
	return e.spec.defining || e.spec.definingForContent;
}
function replaceRange(e, t, I, B) {
	if (!B.size) return e.deleteRange(t, I);
	let tr = e.doc.resolve(t),
		rr = e.doc.resolve(I);
	if (fitsTrivially(tr, rr, B)) return e.step(new ReplaceStep(t, I, B));
	let ir = coveredDepths(tr, e.doc.resolve(I));
	ir[ir.length - 1] == 0 && ir.pop();
	let lr = -(tr.depth + 1);
	ir.unshift(lr);
	for (let hr = tr.depth, Mr = tr.pos - 1; hr > 0; hr--, Mr--) {
		let gr = tr.node(hr).type.spec;
		if (gr.defining || gr.definingAsContext || gr.isolating) break;
		ir.indexOf(hr) > -1 ? (lr = hr) : tr.before(hr) == Mr && ir.splice(1, 0, -hr);
	}
	let dr = ir.indexOf(lr),
		mr = [],
		_r = B.openStart;
	for (let hr = B.content, Mr = 0; ; Mr++) {
		let gr = hr.firstChild;
		if ((mr.push(gr), Mr == B.openStart)) break;
		hr = gr.content;
	}
	for (let hr = _r - 1; hr >= 0; hr--) {
		let Mr = mr[hr],
			gr = definesContent(Mr.type);
		if (gr && !Mr.sameMarkup(tr.node(Math.abs(lr) - 1))) _r = hr;
		else if (gr || !Mr.type.isTextblock) break;
	}
	for (let hr = B.openStart; hr >= 0; hr--) {
		let Mr = (hr + _r + 1) % (B.openStart + 1),
			gr = mr[Mr];
		if (gr)
			for (let yr = 0; yr < ir.length; yr++) {
				let xr = ir[(yr + dr) % ir.length],
					vr = !0;
				xr < 0 && ((vr = !1), (xr = -xr));
				let Sr = tr.node(xr - 1),
					wr = tr.index(xr - 1);
				if (Sr.canReplaceWith(wr, wr, gr.type, gr.marks))
					return e.replace(
						tr.before(xr),
						vr ? rr.after(xr) : I,
						new Slice(closeFragment(B.content, 0, B.openStart, Mr), Mr, B.openEnd)
					);
			}
	}
	let fr = e.steps.length;
	for (let hr = ir.length - 1; hr >= 0 && (e.replace(t, I, B), !(e.steps.length > fr)); hr--) {
		let Mr = ir[hr];
		Mr < 0 || ((t = tr.before(Mr)), (I = rr.after(Mr)));
	}
}
function closeFragment(e, t, I, B, tr) {
	if (t < I) {
		let rr = e.firstChild;
		e = e.replaceChild(0, rr.copy(closeFragment(rr.content, t + 1, I, B, rr)));
	}
	if (t > B) {
		let rr = tr.contentMatchAt(0),
			ir = rr.fillBefore(e).append(e);
		e = ir.append(rr.matchFragment(ir).fillBefore(Fragment.empty, !0));
	}
	return e;
}
function replaceRangeWith(e, t, I, B) {
	if (!B.isInline && t == I && e.doc.resolve(t).parent.content.size) {
		let tr = insertPoint(e.doc, t, B.type);
		tr != null && (t = I = tr);
	}
	e.replaceRange(t, I, new Slice(Fragment.from(B), 0, 0));
}
function deleteRange(e, t, I) {
	let B = e.doc.resolve(t),
		tr = e.doc.resolve(I),
		rr = coveredDepths(B, tr);
	for (let ir = 0; ir < rr.length; ir++) {
		let lr = rr[ir],
			dr = ir == rr.length - 1;
		if ((dr && lr == 0) || B.node(lr).type.contentMatch.validEnd)
			return e.delete(B.start(lr), tr.end(lr));
		if (lr > 0 && (dr || B.node(lr - 1).canReplace(B.index(lr - 1), tr.indexAfter(lr - 1))))
			return e.delete(B.before(lr), tr.after(lr));
	}
	for (let ir = 1; ir <= B.depth && ir <= tr.depth; ir++)
		if (
			t - B.start(ir) == B.depth - ir &&
			I > B.end(ir) &&
			tr.end(ir) - I != tr.depth - ir &&
			B.start(ir - 1) == tr.start(ir - 1) &&
			B.node(ir - 1).canReplace(B.index(ir - 1), tr.index(ir - 1))
		)
			return e.delete(B.before(ir), I);
	e.delete(t, I);
}
function coveredDepths(e, t) {
	let I = [],
		B = Math.min(e.depth, t.depth);
	for (let tr = B; tr >= 0; tr--) {
		let rr = e.start(tr);
		if (
			rr < e.pos - (e.depth - tr) ||
			t.end(tr) > t.pos + (t.depth - tr) ||
			e.node(tr).type.spec.isolating ||
			t.node(tr).type.spec.isolating
		)
			break;
		(rr == t.start(tr) ||
			(tr == e.depth &&
				tr == t.depth &&
				e.parent.inlineContent &&
				t.parent.inlineContent &&
				tr &&
				t.start(tr - 1) == rr - 1)) &&
			I.push(tr);
	}
	return I;
}
class AttrStep extends Step {
	constructor(t, I, B) {
		super(), (this.pos = t), (this.attr = I), (this.value = B);
	}
	apply(t) {
		let I = t.nodeAt(this.pos);
		if (!I) return StepResult.fail("No node at attribute step's position");
		let B = Object.create(null);
		for (let rr in I.attrs) B[rr] = I.attrs[rr];
		B[this.attr] = this.value;
		let tr = I.type.create(B, null, I.marks);
		return StepResult.fromReplace(
			t,
			this.pos,
			this.pos + 1,
			new Slice(Fragment.from(tr), 0, I.isLeaf ? 0 : 1)
		);
	}
	getMap() {
		return StepMap.empty;
	}
	invert(t) {
		return new AttrStep(this.pos, this.attr, t.nodeAt(this.pos).attrs[this.attr]);
	}
	map(t) {
		let I = t.mapResult(this.pos, 1);
		return I.deletedAfter ? null : new AttrStep(I.pos, this.attr, this.value);
	}
	toJSON() {
		return { stepType: 'attr', pos: this.pos, attr: this.attr, value: this.value };
	}
	static fromJSON(t, I) {
		if (typeof I.pos != 'number' || typeof I.attr != 'string')
			throw new RangeError('Invalid input for AttrStep.fromJSON');
		return new AttrStep(I.pos, I.attr, I.value);
	}
}
Step.jsonID('attr', AttrStep);
class DocAttrStep extends Step {
	constructor(t, I) {
		super(), (this.attr = t), (this.value = I);
	}
	apply(t) {
		let I = Object.create(null);
		for (let tr in t.attrs) I[tr] = t.attrs[tr];
		I[this.attr] = this.value;
		let B = t.type.create(I, t.content, t.marks);
		return StepResult.ok(B);
	}
	getMap() {
		return StepMap.empty;
	}
	invert(t) {
		return new DocAttrStep(this.attr, t.attrs[this.attr]);
	}
	map(t) {
		return this;
	}
	toJSON() {
		return { stepType: 'docAttr', attr: this.attr, value: this.value };
	}
	static fromJSON(t, I) {
		if (typeof I.attr != 'string') throw new RangeError('Invalid input for DocAttrStep.fromJSON');
		return new DocAttrStep(I.attr, I.value);
	}
}
Step.jsonID('docAttr', DocAttrStep);
let TransformError = class extends Error {};
TransformError = function e(t) {
	let I = Error.call(this, t);
	return (I.__proto__ = e.prototype), I;
};
TransformError.prototype = Object.create(Error.prototype);
TransformError.prototype.constructor = TransformError;
TransformError.prototype.name = 'TransformError';
class Transform {
	constructor(t) {
		(this.doc = t), (this.steps = []), (this.docs = []), (this.mapping = new Mapping());
	}
	get before() {
		return this.docs.length ? this.docs[0] : this.doc;
	}
	step(t) {
		let I = this.maybeStep(t);
		if (I.failed) throw new TransformError(I.failed);
		return this;
	}
	maybeStep(t) {
		let I = t.apply(this.doc);
		return I.failed || this.addStep(t, I.doc), I;
	}
	get docChanged() {
		return this.steps.length > 0;
	}
	addStep(t, I) {
		this.docs.push(this.doc),
			this.steps.push(t),
			this.mapping.appendMap(t.getMap()),
			(this.doc = I);
	}
	replace(t, I = t, B = Slice.empty) {
		let tr = replaceStep(this.doc, t, I, B);
		return tr && this.step(tr), this;
	}
	replaceWith(t, I, B) {
		return this.replace(t, I, new Slice(Fragment.from(B), 0, 0));
	}
	delete(t, I) {
		return this.replace(t, I, Slice.empty);
	}
	insert(t, I) {
		return this.replaceWith(t, t, I);
	}
	replaceRange(t, I, B) {
		return replaceRange(this, t, I, B), this;
	}
	replaceRangeWith(t, I, B) {
		return replaceRangeWith(this, t, I, B), this;
	}
	deleteRange(t, I) {
		return deleteRange(this, t, I), this;
	}
	lift(t, I) {
		return lift(this, t, I), this;
	}
	join(t, I = 1) {
		return join(this, t, I), this;
	}
	wrap(t, I) {
		return wrap(this, t, I), this;
	}
	setBlockType(t, I = t, B, tr = null) {
		return setBlockType(this, t, I, B, tr), this;
	}
	setNodeMarkup(t, I, B = null, tr) {
		return setNodeMarkup(this, t, I, B, tr), this;
	}
	setNodeAttribute(t, I, B) {
		return this.step(new AttrStep(t, I, B)), this;
	}
	setDocAttribute(t, I) {
		return this.step(new DocAttrStep(t, I)), this;
	}
	addNodeMark(t, I) {
		return this.step(new AddNodeMarkStep(t, I)), this;
	}
	removeNodeMark(t, I) {
		let B = this.doc.nodeAt(t);
		if (!B) throw new RangeError('No node at position ' + t);
		if (I instanceof Mark) I.isInSet(B.marks) && this.step(new RemoveNodeMarkStep(t, I));
		else {
			let tr = B.marks,
				rr,
				ir = [];
			for (; (rr = I.isInSet(tr)); )
				ir.push(new RemoveNodeMarkStep(t, rr)), (tr = rr.removeFromSet(tr));
			for (let lr = ir.length - 1; lr >= 0; lr--) this.step(ir[lr]);
		}
		return this;
	}
	split(t, I = 1, B) {
		return split(this, t, I, B), this;
	}
	addMark(t, I, B) {
		return addMark(this, t, I, B), this;
	}
	removeMark(t, I, B) {
		return removeMark(this, t, I, B), this;
	}
	clearIncompatible(t, I, B) {
		return clearIncompatible(this, t, I, B), this;
	}
}
const classesById = Object.create(null);
class Selection {
	constructor(t, I, B) {
		(this.$anchor = t),
			(this.$head = I),
			(this.ranges = B || [new SelectionRange(t.min(I), t.max(I))]);
	}
	get anchor() {
		return this.$anchor.pos;
	}
	get head() {
		return this.$head.pos;
	}
	get from() {
		return this.$from.pos;
	}
	get to() {
		return this.$to.pos;
	}
	get $from() {
		return this.ranges[0].$from;
	}
	get $to() {
		return this.ranges[0].$to;
	}
	get empty() {
		let t = this.ranges;
		for (let I = 0; I < t.length; I++) if (t[I].$from.pos != t[I].$to.pos) return !1;
		return !0;
	}
	content() {
		return this.$from.doc.slice(this.from, this.to, !0);
	}
	replace(t, I = Slice.empty) {
		let B = I.content.lastChild,
			tr = null;
		for (let lr = 0; lr < I.openEnd; lr++) (tr = B), (B = B.lastChild);
		let rr = t.steps.length,
			ir = this.ranges;
		for (let lr = 0; lr < ir.length; lr++) {
			let { $from: dr, $to: mr } = ir[lr],
				_r = t.mapping.slice(rr);
			t.replaceRange(_r.map(dr.pos), _r.map(mr.pos), lr ? Slice.empty : I),
				lr == 0 && selectionToInsertionEnd(t, rr, (B ? B.isInline : tr && tr.isTextblock) ? -1 : 1);
		}
	}
	replaceWith(t, I) {
		let B = t.steps.length,
			tr = this.ranges;
		for (let rr = 0; rr < tr.length; rr++) {
			let { $from: ir, $to: lr } = tr[rr],
				dr = t.mapping.slice(B),
				mr = dr.map(ir.pos),
				_r = dr.map(lr.pos);
			rr
				? t.deleteRange(mr, _r)
				: (t.replaceRangeWith(mr, _r, I), selectionToInsertionEnd(t, B, I.isInline ? -1 : 1));
		}
	}
	static findFrom(t, I, B = !1) {
		let tr = t.parent.inlineContent
			? new TextSelection(t)
			: findSelectionIn(t.node(0), t.parent, t.pos, t.index(), I, B);
		if (tr) return tr;
		for (let rr = t.depth - 1; rr >= 0; rr--) {
			let ir =
				I < 0
					? findSelectionIn(t.node(0), t.node(rr), t.before(rr + 1), t.index(rr), I, B)
					: findSelectionIn(t.node(0), t.node(rr), t.after(rr + 1), t.index(rr) + 1, I, B);
			if (ir) return ir;
		}
		return null;
	}
	static near(t, I = 1) {
		return this.findFrom(t, I) || this.findFrom(t, -I) || new AllSelection(t.node(0));
	}
	static atStart(t) {
		return findSelectionIn(t, t, 0, 0, 1) || new AllSelection(t);
	}
	static atEnd(t) {
		return findSelectionIn(t, t, t.content.size, t.childCount, -1) || new AllSelection(t);
	}
	static fromJSON(t, I) {
		if (!I || !I.type) throw new RangeError('Invalid input for Selection.fromJSON');
		let B = classesById[I.type];
		if (!B) throw new RangeError(`No selection type ${I.type} defined`);
		return B.fromJSON(t, I);
	}
	static jsonID(t, I) {
		if (t in classesById) throw new RangeError('Duplicate use of selection JSON ID ' + t);
		return (classesById[t] = I), (I.prototype.jsonID = t), I;
	}
	getBookmark() {
		return TextSelection.between(this.$anchor, this.$head).getBookmark();
	}
}
Selection.prototype.visible = !0;
class SelectionRange {
	constructor(t, I) {
		(this.$from = t), (this.$to = I);
	}
}
let warnedAboutTextSelection = !1;
function checkTextSelection(e) {
	!warnedAboutTextSelection &&
		!e.parent.inlineContent &&
		((warnedAboutTextSelection = !0),
		console.warn(
			'TextSelection endpoint not pointing into a node with inline content (' +
				e.parent.type.name +
				')'
		));
}
class TextSelection extends Selection {
	constructor(t, I = t) {
		checkTextSelection(t), checkTextSelection(I), super(t, I);
	}
	get $cursor() {
		return this.$anchor.pos == this.$head.pos ? this.$head : null;
	}
	map(t, I) {
		let B = t.resolve(I.map(this.head));
		if (!B.parent.inlineContent) return Selection.near(B);
		let tr = t.resolve(I.map(this.anchor));
		return new TextSelection(tr.parent.inlineContent ? tr : B, B);
	}
	replace(t, I = Slice.empty) {
		if ((super.replace(t, I), I == Slice.empty)) {
			let B = this.$from.marksAcross(this.$to);
			B && t.ensureMarks(B);
		}
	}
	eq(t) {
		return t instanceof TextSelection && t.anchor == this.anchor && t.head == this.head;
	}
	getBookmark() {
		return new TextBookmark(this.anchor, this.head);
	}
	toJSON() {
		return { type: 'text', anchor: this.anchor, head: this.head };
	}
	static fromJSON(t, I) {
		if (typeof I.anchor != 'number' || typeof I.head != 'number')
			throw new RangeError('Invalid input for TextSelection.fromJSON');
		return new TextSelection(t.resolve(I.anchor), t.resolve(I.head));
	}
	static create(t, I, B = I) {
		let tr = t.resolve(I);
		return new this(tr, B == I ? tr : t.resolve(B));
	}
	static between(t, I, B) {
		let tr = t.pos - I.pos;
		if (((!B || tr) && (B = tr >= 0 ? 1 : -1), !I.parent.inlineContent)) {
			let rr = Selection.findFrom(I, B, !0) || Selection.findFrom(I, -B, !0);
			if (rr) I = rr.$head;
			else return Selection.near(I, B);
		}
		return (
			t.parent.inlineContent ||
				(tr == 0
					? (t = I)
					: ((t = (Selection.findFrom(t, -B, !0) || Selection.findFrom(t, B, !0)).$anchor),
						t.pos < I.pos != tr < 0 && (t = I))),
			new TextSelection(t, I)
		);
	}
}
Selection.jsonID('text', TextSelection);
class TextBookmark {
	constructor(t, I) {
		(this.anchor = t), (this.head = I);
	}
	map(t) {
		return new TextBookmark(t.map(this.anchor), t.map(this.head));
	}
	resolve(t) {
		return TextSelection.between(t.resolve(this.anchor), t.resolve(this.head));
	}
}
class NodeSelection extends Selection {
	constructor(t) {
		let I = t.nodeAfter,
			B = t.node(0).resolve(t.pos + I.nodeSize);
		super(t, B), (this.node = I);
	}
	map(t, I) {
		let { deleted: B, pos: tr } = I.mapResult(this.anchor),
			rr = t.resolve(tr);
		return B ? Selection.near(rr) : new NodeSelection(rr);
	}
	content() {
		return new Slice(Fragment.from(this.node), 0, 0);
	}
	eq(t) {
		return t instanceof NodeSelection && t.anchor == this.anchor;
	}
	toJSON() {
		return { type: 'node', anchor: this.anchor };
	}
	getBookmark() {
		return new NodeBookmark(this.anchor);
	}
	static fromJSON(t, I) {
		if (typeof I.anchor != 'number')
			throw new RangeError('Invalid input for NodeSelection.fromJSON');
		return new NodeSelection(t.resolve(I.anchor));
	}
	static create(t, I) {
		return new NodeSelection(t.resolve(I));
	}
	static isSelectable(t) {
		return !t.isText && t.type.spec.selectable !== !1;
	}
}
NodeSelection.prototype.visible = !1;
Selection.jsonID('node', NodeSelection);
class NodeBookmark {
	constructor(t) {
		this.anchor = t;
	}
	map(t) {
		let { deleted: I, pos: B } = t.mapResult(this.anchor);
		return I ? new TextBookmark(B, B) : new NodeBookmark(B);
	}
	resolve(t) {
		let I = t.resolve(this.anchor),
			B = I.nodeAfter;
		return B && NodeSelection.isSelectable(B) ? new NodeSelection(I) : Selection.near(I);
	}
}
class AllSelection extends Selection {
	constructor(t) {
		super(t.resolve(0), t.resolve(t.content.size));
	}
	replace(t, I = Slice.empty) {
		if (I == Slice.empty) {
			t.delete(0, t.doc.content.size);
			let B = Selection.atStart(t.doc);
			B.eq(t.selection) || t.setSelection(B);
		} else super.replace(t, I);
	}
	toJSON() {
		return { type: 'all' };
	}
	static fromJSON(t) {
		return new AllSelection(t);
	}
	map(t) {
		return new AllSelection(t);
	}
	eq(t) {
		return t instanceof AllSelection;
	}
	getBookmark() {
		return AllBookmark;
	}
}
Selection.jsonID('all', AllSelection);
const AllBookmark = {
	map() {
		return this;
	},
	resolve(e) {
		return new AllSelection(e);
	}
};
function findSelectionIn(e, t, I, B, tr, rr = !1) {
	if (t.inlineContent) return TextSelection.create(e, I);
	for (let ir = B - (tr > 0 ? 0 : 1); tr > 0 ? ir < t.childCount : ir >= 0; ir += tr) {
		let lr = t.child(ir);
		if (lr.isAtom) {
			if (!rr && NodeSelection.isSelectable(lr))
				return NodeSelection.create(e, I - (tr < 0 ? lr.nodeSize : 0));
		} else {
			let dr = findSelectionIn(e, lr, I + tr, tr < 0 ? lr.childCount : 0, tr, rr);
			if (dr) return dr;
		}
		I += lr.nodeSize * tr;
	}
	return null;
}
function selectionToInsertionEnd(e, t, I) {
	let B = e.steps.length - 1;
	if (B < t) return;
	let tr = e.steps[B];
	if (!(tr instanceof ReplaceStep || tr instanceof ReplaceAroundStep)) return;
	let rr = e.mapping.maps[B],
		ir;
	rr.forEach((lr, dr, mr, _r) => {
		ir == null && (ir = _r);
	}),
		e.setSelection(Selection.near(e.doc.resolve(ir), I));
}
const UPDATED_SEL = 1,
	UPDATED_MARKS = 2,
	UPDATED_SCROLL = 4;
class Transaction extends Transform {
	constructor(t) {
		super(t.doc),
			(this.curSelectionFor = 0),
			(this.updated = 0),
			(this.meta = Object.create(null)),
			(this.time = Date.now()),
			(this.curSelection = t.selection),
			(this.storedMarks = t.storedMarks);
	}
	get selection() {
		return (
			this.curSelectionFor < this.steps.length &&
				((this.curSelection = this.curSelection.map(
					this.doc,
					this.mapping.slice(this.curSelectionFor)
				)),
				(this.curSelectionFor = this.steps.length)),
			this.curSelection
		);
	}
	setSelection(t) {
		if (t.$from.doc != this.doc)
			throw new RangeError('Selection passed to setSelection must point at the current document');
		return (
			(this.curSelection = t),
			(this.curSelectionFor = this.steps.length),
			(this.updated = (this.updated | UPDATED_SEL) & ~UPDATED_MARKS),
			(this.storedMarks = null),
			this
		);
	}
	get selectionSet() {
		return (this.updated & UPDATED_SEL) > 0;
	}
	setStoredMarks(t) {
		return (this.storedMarks = t), (this.updated |= UPDATED_MARKS), this;
	}
	ensureMarks(t) {
		return (
			Mark.sameSet(this.storedMarks || this.selection.$from.marks(), t) || this.setStoredMarks(t),
			this
		);
	}
	addStoredMark(t) {
		return this.ensureMarks(t.addToSet(this.storedMarks || this.selection.$head.marks()));
	}
	removeStoredMark(t) {
		return this.ensureMarks(t.removeFromSet(this.storedMarks || this.selection.$head.marks()));
	}
	get storedMarksSet() {
		return (this.updated & UPDATED_MARKS) > 0;
	}
	addStep(t, I) {
		super.addStep(t, I), (this.updated = this.updated & ~UPDATED_MARKS), (this.storedMarks = null);
	}
	setTime(t) {
		return (this.time = t), this;
	}
	replaceSelection(t) {
		return this.selection.replace(this, t), this;
	}
	replaceSelectionWith(t, I = !0) {
		let B = this.selection;
		return (
			I &&
				(t = t.mark(
					this.storedMarks || (B.empty ? B.$from.marks() : B.$from.marksAcross(B.$to) || Mark.none)
				)),
			B.replaceWith(this, t),
			this
		);
	}
	deleteSelection() {
		return this.selection.replace(this), this;
	}
	insertText(t, I, B) {
		let tr = this.doc.type.schema;
		if (I == null) return t ? this.replaceSelectionWith(tr.text(t), !0) : this.deleteSelection();
		{
			if ((B == null && (B = I), (B = B ?? I), !t)) return this.deleteRange(I, B);
			let rr = this.storedMarks;
			if (!rr) {
				let ir = this.doc.resolve(I);
				rr = B == I ? ir.marks() : ir.marksAcross(this.doc.resolve(B));
			}
			return (
				this.replaceRangeWith(I, B, tr.text(t, rr)),
				this.selection.empty || this.setSelection(Selection.near(this.selection.$to)),
				this
			);
		}
	}
	setMeta(t, I) {
		return (this.meta[typeof t == 'string' ? t : t.key] = I), this;
	}
	getMeta(t) {
		return this.meta[typeof t == 'string' ? t : t.key];
	}
	get isGeneric() {
		for (let t in this.meta) return !1;
		return !0;
	}
	scrollIntoView() {
		return (this.updated |= UPDATED_SCROLL), this;
	}
	get scrolledIntoView() {
		return (this.updated & UPDATED_SCROLL) > 0;
	}
}
function bind(e, t) {
	return !t || !e ? e : e.bind(t);
}
class FieldDesc {
	constructor(t, I, B) {
		(this.name = t), (this.init = bind(I.init, B)), (this.apply = bind(I.apply, B));
	}
}
const baseFields = [
	new FieldDesc('doc', {
		init(e) {
			return e.doc || e.schema.topNodeType.createAndFill();
		},
		apply(e) {
			return e.doc;
		}
	}),
	new FieldDesc('selection', {
		init(e, t) {
			return e.selection || Selection.atStart(t.doc);
		},
		apply(e) {
			return e.selection;
		}
	}),
	new FieldDesc('storedMarks', {
		init(e) {
			return e.storedMarks || null;
		},
		apply(e, t, I, B) {
			return B.selection.$cursor ? e.storedMarks : null;
		}
	}),
	new FieldDesc('scrollToSelection', {
		init() {
			return 0;
		},
		apply(e, t) {
			return e.scrolledIntoView ? t + 1 : t;
		}
	})
];
class Configuration {
	constructor(t, I) {
		(this.schema = t),
			(this.plugins = []),
			(this.pluginsByKey = Object.create(null)),
			(this.fields = baseFields.slice()),
			I &&
				I.forEach((B) => {
					if (this.pluginsByKey[B.key])
						throw new RangeError('Adding different instances of a keyed plugin (' + B.key + ')');
					this.plugins.push(B),
						(this.pluginsByKey[B.key] = B),
						B.spec.state && this.fields.push(new FieldDesc(B.key, B.spec.state, B));
				});
	}
}
class EditorState {
	constructor(t) {
		this.config = t;
	}
	get schema() {
		return this.config.schema;
	}
	get plugins() {
		return this.config.plugins;
	}
	apply(t) {
		return this.applyTransaction(t).state;
	}
	filterTransaction(t, I = -1) {
		for (let B = 0; B < this.config.plugins.length; B++)
			if (B != I) {
				let tr = this.config.plugins[B];
				if (tr.spec.filterTransaction && !tr.spec.filterTransaction.call(tr, t, this)) return !1;
			}
		return !0;
	}
	applyTransaction(t) {
		if (!this.filterTransaction(t)) return { state: this, transactions: [] };
		let I = [t],
			B = this.applyInner(t),
			tr = null;
		for (;;) {
			let rr = !1;
			for (let ir = 0; ir < this.config.plugins.length; ir++) {
				let lr = this.config.plugins[ir];
				if (lr.spec.appendTransaction) {
					let dr = tr ? tr[ir].n : 0,
						mr = tr ? tr[ir].state : this,
						_r = dr < I.length && lr.spec.appendTransaction.call(lr, dr ? I.slice(dr) : I, mr, B);
					if (_r && B.filterTransaction(_r, ir)) {
						if ((_r.setMeta('appendedTransaction', t), !tr)) {
							tr = [];
							for (let fr = 0; fr < this.config.plugins.length; fr++)
								tr.push(fr < ir ? { state: B, n: I.length } : { state: this, n: 0 });
						}
						I.push(_r), (B = B.applyInner(_r)), (rr = !0);
					}
					tr && (tr[ir] = { state: B, n: I.length });
				}
			}
			if (!rr) return { state: B, transactions: I };
		}
	}
	applyInner(t) {
		if (!t.before.eq(this.doc)) throw new RangeError('Applying a mismatched transaction');
		let I = new EditorState(this.config),
			B = this.config.fields;
		for (let tr = 0; tr < B.length; tr++) {
			let rr = B[tr];
			I[rr.name] = rr.apply(t, this[rr.name], this, I);
		}
		return I;
	}
	get tr() {
		return new Transaction(this);
	}
	static create(t) {
		let I = new Configuration(t.doc ? t.doc.type.schema : t.schema, t.plugins),
			B = new EditorState(I);
		for (let tr = 0; tr < I.fields.length; tr++) B[I.fields[tr].name] = I.fields[tr].init(t, B);
		return B;
	}
	reconfigure(t) {
		let I = new Configuration(this.schema, t.plugins),
			B = I.fields,
			tr = new EditorState(I);
		for (let rr = 0; rr < B.length; rr++) {
			let ir = B[rr].name;
			tr[ir] = this.hasOwnProperty(ir) ? this[ir] : B[rr].init(t, tr);
		}
		return tr;
	}
	toJSON(t) {
		let I = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
		if (
			(this.storedMarks && (I.storedMarks = this.storedMarks.map((B) => B.toJSON())),
			t && typeof t == 'object')
		)
			for (let B in t) {
				if (B == 'doc' || B == 'selection')
					throw new RangeError('The JSON fields `doc` and `selection` are reserved');
				let tr = t[B],
					rr = tr.spec.state;
				rr && rr.toJSON && (I[B] = rr.toJSON.call(tr, this[tr.key]));
			}
		return I;
	}
	static fromJSON(t, I, B) {
		if (!I) throw new RangeError('Invalid input for EditorState.fromJSON');
		if (!t.schema) throw new RangeError("Required config field 'schema' missing");
		let tr = new Configuration(t.schema, t.plugins),
			rr = new EditorState(tr);
		return (
			tr.fields.forEach((ir) => {
				if (ir.name == 'doc') rr.doc = Node$1.fromJSON(t.schema, I.doc);
				else if (ir.name == 'selection') rr.selection = Selection.fromJSON(rr.doc, I.selection);
				else if (ir.name == 'storedMarks')
					I.storedMarks && (rr.storedMarks = I.storedMarks.map(t.schema.markFromJSON));
				else {
					if (B)
						for (let lr in B) {
							let dr = B[lr],
								mr = dr.spec.state;
							if (
								dr.key == ir.name &&
								mr &&
								mr.fromJSON &&
								Object.prototype.hasOwnProperty.call(I, lr)
							) {
								rr[ir.name] = mr.fromJSON.call(dr, t, I[lr], rr);
								return;
							}
						}
					rr[ir.name] = ir.init(t, rr);
				}
			}),
			rr
		);
	}
}
function bindProps(e, t, I) {
	for (let B in e) {
		let tr = e[B];
		tr instanceof Function
			? (tr = tr.bind(t))
			: B == 'handleDOMEvents' && (tr = bindProps(tr, t, {})),
			(I[B] = tr);
	}
	return I;
}
class Plugin {
	constructor(t) {
		(this.spec = t),
			(this.props = {}),
			t.props && bindProps(t.props, this, this.props),
			(this.key = t.key ? t.key.key : createKey('plugin'));
	}
	getState(t) {
		return t[this.key];
	}
}
const keys = Object.create(null);
function createKey(e) {
	return e in keys ? e + '$' + ++keys[e] : ((keys[e] = 0), e + '$');
}
class PluginKey {
	constructor(t = 'key') {
		this.key = createKey(t);
	}
	get(t) {
		return t.config.pluginsByKey[this.key];
	}
	getState(t) {
		return t[this.key];
	}
}
let timeoutAction, timeoutEnable;
function withoutTransition(e) {
	if (typeof document > 'u') return;
	clearTimeout(timeoutAction), clearTimeout(timeoutEnable);
	const t = document.createElement('style'),
		I = document.createTextNode(`* {
     -webkit-transition: none !important;
     -moz-transition: none !important;
     -o-transition: none !important;
     -ms-transition: none !important;
     transition: none !important;
  }`);
	t.appendChild(I);
	const B = () => document.head.appendChild(t),
		tr = () => document.head.removeChild(t);
	if (typeof window.getComputedStyle < 'u') {
		B(), e(), window.getComputedStyle(t).opacity, tr();
		return;
	}
	if (typeof window.requestAnimationFrame < 'u') {
		B(), e(), window.requestAnimationFrame(tr);
		return;
	}
	B(),
		(timeoutAction = window.setTimeout(() => {
			e(), (timeoutEnable = window.setTimeout(tr, 120));
		}, 120));
}
function sanitizeClassNames(e) {
	return e.filter((t) => t.length > 0);
}
const noopStorage = { getItem: (e) => null, setItem: (e, t) => {} },
	isBrowser = typeof document < 'u',
	modes = ['dark', 'light', 'system'],
	modeStorageKey = writable('mode-watcher-mode'),
	themeStorageKey = writable('mode-watcher-theme'),
	userPrefersMode = createUserPrefersMode(),
	systemPrefersMode = createSystemMode(),
	themeColors = writable(void 0),
	theme = createCustomTheme(),
	disableTransitions = writable(!0),
	darkClassNames = writable([]),
	lightClassNames = writable([]),
	derivedMode = createDerivedMode(),
	derivedTheme = createDerivedTheme();
function createUserPrefersMode() {
	const e = 'system',
		t = isBrowser ? localStorage : noopStorage,
		I = t.getItem(tr());
	let B = isValidMode(I) ? I : e;
	function tr() {
		return get_store_value(modeStorageKey);
	}
	const { subscribe: rr, set: ir } = writable(B, () => {
		if (!isBrowser) return;
		const dr = (mr) => {
			if (mr.key !== tr()) return;
			const _r = mr.newValue;
			isValidMode(_r) ? ir((B = _r)) : ir((B = e));
		};
		return addEventListener('storage', dr), () => removeEventListener('storage', dr);
	});
	function lr(dr) {
		ir((B = dr)), t.setItem(tr(), B);
	}
	return { subscribe: rr, set: lr };
}
function createCustomTheme() {
	const e = isBrowser ? localStorage : noopStorage,
		t = e.getItem(B());
	let I = t ?? '';
	function B() {
		return get_store_value(themeStorageKey);
	}
	const { subscribe: tr, set: rr } = writable(I, () => {
		if (!isBrowser) return;
		const lr = (dr) => {
			if (dr.key !== B()) return;
			const mr = dr.newValue;
			rr(mr === null ? (I = '') : (I = mr));
		};
		return addEventListener('storage', lr), () => removeEventListener('storage', lr);
	});
	function ir(lr) {
		rr((I = lr)), e.setItem(B(), I);
	}
	return { subscribe: tr, set: ir };
}
function createSystemMode() {
	let t = !0;
	const { subscribe: I, set: B } = writable(void 0, () => {
		if (!isBrowser) return;
		const ir = (dr) => {
				t && B(dr.matches ? 'light' : 'dark');
			},
			lr = window.matchMedia('(prefers-color-scheme: light)');
		return lr.addEventListener('change', ir), () => lr.removeEventListener('change', ir);
	});
	function tr() {
		if (!isBrowser) return;
		const ir = window.matchMedia('(prefers-color-scheme: light)');
		B(ir.matches ? 'light' : 'dark');
	}
	function rr(ir) {
		t = ir;
	}
	return { subscribe: I, query: tr, tracking: rr };
}
function createDerivedMode() {
	const { subscribe: e } = derived(
		[
			userPrefersMode,
			systemPrefersMode,
			themeColors,
			disableTransitions,
			darkClassNames,
			lightClassNames
		],
		([t, I, B, tr, rr, ir]) => {
			if (!isBrowser) return;
			const lr = t === 'system' ? I : t,
				dr = sanitizeClassNames(rr),
				mr = sanitizeClassNames(ir);
			function _r() {
				const fr = document.documentElement,
					hr = document.querySelector('meta[name="theme-color"]');
				lr === 'light'
					? (dr.length && fr.classList.remove(...dr),
						mr.length && fr.classList.add(...mr),
						(fr.style.colorScheme = 'light'),
						hr && B && hr.setAttribute('content', B.light))
					: (mr.length && fr.classList.remove(...mr),
						dr.length && fr.classList.add(...dr),
						(fr.style.colorScheme = 'dark'),
						hr && B && hr.setAttribute('content', B.dark));
			}
			return tr ? withoutTransition(_r) : _r(), lr;
		}
	);
	return { subscribe: e };
}
function createDerivedTheme() {
	const { subscribe: e } = derived([theme, disableTransitions], ([t, I]) => {
		if (!isBrowser) return;
		function B() {
			document.documentElement.setAttribute('data-theme', t);
		}
		return I ? withoutTransition(B) : B(), t;
	});
	return { subscribe: e };
}
function isValidMode(e) {
	return typeof e != 'string' ? !1 : modes.includes(e);
}
function setMode(e) {
	userPrefersMode.set(e);
}
function setTheme(e) {
	theme.set(e);
}
function defineConfig(e) {
	return e;
}
function setInitialMode({
	defaultMode: e,
	themeColors: t,
	darkClassNames: I = ['dark'],
	lightClassNames: B = [],
	defaultTheme: tr = ''
}) {
	const rr = document.documentElement,
		ir = localStorage.getItem('mode-watcher-mode') || e,
		lr = localStorage.getItem('mode-watcher-theme') || tr,
		dr =
			ir === 'light' ||
			(ir === 'system' && window.matchMedia('(prefers-color-scheme: light)').matches);
	if (
		(dr
			? (I.length && rr.classList.remove(...I), B.length && rr.classList.add(...B))
			: (B.length && rr.classList.remove(...B), I.length && rr.classList.add(...I)),
		(rr.style.colorScheme = dr ? 'light' : 'dark'),
		t)
	) {
		const mr = document.querySelector('meta[name="theme-color"]');
		mr && mr.setAttribute('content', ir === 'light' ? t.light : t.dark);
	}
	lr && (rr.setAttribute('data-theme', lr), localStorage.setItem('mode-watcher-theme', lr)),
		localStorage.setItem('mode-watcher-mode', ir);
}
function cn(...e) {
	return twMerge(clsx(e));
}
function setEditorContent(e) {
	const t = get_store_value(editor);
	t.commands.setContent(e);
	const I = EditorState.create({
		doc: t.state.doc,
		plugins: t.state.plugins,
		schema: t.state.schema
	});
	t.view.updateState(I), t.chain().focus().run();
}
function shortcutToString(e) {
	const t = [];
	switch ((e.command && t.push('⌘'), e.alt && t.push('⌥'), e.shift && t.push('⇧'), e.key)) {
		case 'Backspace':
			t.push('⌫');
			break;
		case 'Enter':
			t.push('⏎');
			break;
		case 'Tab':
			t.push('⇥');
			break;
		case 'Delete':
			t.push('⌦');
			break;
		case 'Escape':
			t.push('⎋');
			break;
		case 'ArrowUp':
			t.push('↑');
			break;
		case 'ArrowDown':
			t.push('↓');
			break;
		case 'ArrowLeft':
			t.push('←');
			break;
		case 'ArrowRight':
			t.push('→');
			break;
		default:
			t.push(e.key.toUpperCase());
			break;
	}
	return t.join('');
}
function calculateReadingTime(e) {
	const I = Math.round((e / 200) * 60),
		B = Math.floor(I / 60),
		tr = I % 60;
	return B > 0 ? (tr > 0 ? `${B}m ${tr}s` : `${B}m`) : `${tr}s`;
}
function formatTimeAgo(e) {
	if (!e) return '';
	const I = new Date().getTime() - e.getTime(),
		B = Math.floor(I / 1e3),
		tr = Math.floor(B / 60),
		rr = Math.floor(tr / 60),
		ir = Math.floor(rr / 24);
	return ir > 0
		? `${ir} day${ir > 1 ? 's' : ''} ago`
		: rr > 0
			? `${rr} hour${rr > 1 ? 's' : ''} ago`
			: tr > 0
				? `${tr} minute${tr > 1 ? 's' : ''} ago`
				: `${B} second${B > 1 ? 's' : ''} ago`;
}
function formatFileSize(e) {
	if (e === 0) return '0 Bytes';
	const t = 1024,
		I = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
		B = Math.floor(Math.log(e) / Math.log(t)),
		tr = e / Math.pow(t, B);
	return B >= 3, Math.ceil(tr) + ' ' + I[B];
}
function toggleTheme() {
	const e = ['system', 'light', 'dark'],
		t = get_store_value(userPrefersMode),
		I = e.indexOf(t),
		B = e[(I + 1) % e.length];
	setMode(B);
}
function buildFileTree(e, t) {
	const I = new Map();
	e.forEach((tr) => {
		I.set(tr.path, { path: tr.path, name: tr.name || void 0, children: tr.isFolder ? [] : void 0 });
	});
	const B = [];
	return (
		e.forEach((tr) => {
			const rr = I.get(tr.path);
			if (tr.parentPath === get_store_value(collection) || tr.parentPath === t) B.push(rr);
			else {
				const ir = I.get(tr.parentPath);
				ir && ir.children && ir.children.push(rr);
			}
		}),
		B
	);
}
async function searchEntries(e, t, I = !1, B = !1) {
	const tr = t.replace(/'/g, "''"),
		rr = I ? 'LIKE' : 'ILIKE',
		ir = B ? ' ' : '',
		lr = `%${ir}${tr}${ir}%`,
		dr = `
    WITH matched_entries AS (
      SELECT path, content
      FROM entry
      WHERE collection_path = $1
        AND content ${rr} $2
    )
    SELECT path, content
    FROM matched_entries
  `,
		mr = await pgClient.query(dr, [e, lr]),
		_r = [];
	return (
		mr.rows.forEach((fr) => {
			extractAllContexts(fr.content, tr, I, B).forEach((Mr) => {
				_r.push({ path: fr.path, context_preview: Mr });
			});
		}),
		_r
	);
}
function extractAllContexts(e, t, I, B) {
	const tr = e.split(`
`),
		rr = [];
	return (
		tr.forEach((ir, lr) => {
			const dr = I ? ir : ir.toLowerCase(),
				mr = I ? t : t.toLowerCase();
			if (B) {
				if (new RegExp(`(^|\\s)${mr}($|\\s)`, I ? '' : 'i').test(dr)) {
					const fr = Math.max(0, lr - 1),
						hr = Math.min(tr.length - 1, lr + 1);
					rr.push(
						tr.slice(fr, hr + 1).join(`
`)
					);
				}
			} else if (dr.includes(mr)) {
				const _r = Math.max(0, lr - 1),
					fr = Math.min(tr.length - 1, lr + 1);
				rr.push(
					tr.slice(_r, fr + 1).join(`
`)
				);
			}
		}),
		rr
	);
}
const getNextUntitledName = (e, t, I = '') => {
	const B = e
		.filter((ir) => {
			var lr, dr;
			return (
				((lr = ir.name) == null ? void 0 : lr.toLowerCase().startsWith(t.toLowerCase())) &&
				(I ? ((dr = ir.name) == null ? void 0 : dr.toLowerCase().endsWith(I.toLowerCase())) : !0)
			);
		})
		.map((ir) => ir.name);
	let tr = 0;
	const rr = new RegExp(`^${t}(?: (\\d+))?${I}$`, 'i');
	B.forEach((ir) => {
		const lr = ir.match(rr);
		if (lr) {
			const dr = lr[1] ? parseInt(lr[1]) : 0;
			tr = Math.max(tr, dr);
		}
	});
	for (let ir = 0; ir <= tr + 1; ir++) {
		const lr = ir === 0 ? `${t}${I}` : `${t} ${ir}${I}`;
		if (!B.includes(lr)) return lr;
	}
	return `${t} ${tr + 1}${I}`;
};
function createDeviceDetector() {
	return readable({ isDesktop: !1, isMobileOrTablet: !1 }, (e) => {
		const t = () => {
			const I = 'ontouchstart' in window || navigator.maxTouchPoints > 0,
				B = 'onmousemove' in window,
				tr = 'onkeydown' in window,
				rr = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
					navigator.userAgent
				),
				ir = window.screen.width < 768 || window.screen.height < 768,
				lr = window.devicePixelRatio > 1.5,
				dr = I && rr ? !0 : I && (ir || lr) ? !(B && tr) : !1;
			e({ isDesktop: !dr, isMobileOrTablet: dr });
		};
		return (
			t(),
			window.addEventListener('orientationchange', t),
			window.addEventListener('resize', t),
			() => {
				window.removeEventListener('orientationchange', t), window.removeEventListener('resize', t);
			}
		);
	});
}
const sortFileEntry = (e, t) => {
		const I = (B) => B.children != null;
		return I(e) && I(t)
			? naturalSort(e.name, t.name)
			: I(e)
				? -1
				: I(t)
					? 1
					: naturalSort(e.name, t.name);
	},
	naturalSort = (e, t) => e.localeCompare(t, void 0, { numeric: !0, sensitivity: 'base' });
var has = Object.prototype.hasOwnProperty;
function find(e, t, I) {
	for (I of e.keys()) if (dequal(I, t)) return I;
}
function dequal(e, t) {
	var I, B, tr;
	if (e === t) return !0;
	if (e && t && (I = e.constructor) === t.constructor) {
		if (I === Date) return e.getTime() === t.getTime();
		if (I === RegExp) return e.toString() === t.toString();
		if (I === Array) {
			if ((B = e.length) === t.length) for (; B-- && dequal(e[B], t[B]); );
			return B === -1;
		}
		if (I === Set) {
			if (e.size !== t.size) return !1;
			for (B of e)
				if (((tr = B), (tr && typeof tr == 'object' && ((tr = find(t, tr)), !tr)) || !t.has(tr)))
					return !1;
			return !0;
		}
		if (I === Map) {
			if (e.size !== t.size) return !1;
			for (B of e)
				if (
					((tr = B[0]),
					(tr && typeof tr == 'object' && ((tr = find(t, tr)), !tr)) || !dequal(B[1], t.get(tr)))
				)
					return !1;
			return !0;
		}
		if (I === ArrayBuffer) (e = new Uint8Array(e)), (t = new Uint8Array(t));
		else if (I === DataView) {
			if ((B = e.byteLength) === t.byteLength) for (; B-- && e.getInt8(B) === t.getInt8(B); );
			return B === -1;
		}
		if (ArrayBuffer.isView(e)) {
			if ((B = e.byteLength) === t.byteLength) for (; B-- && e[B] === t[B]; );
			return B === -1;
		}
		if (!I || typeof e == 'object') {
			B = 0;
			for (I in e)
				if ((has.call(e, I) && ++B && !has.call(t, I)) || !(I in t) || !dequal(e[I], t[I]))
					return !1;
			return Object.keys(t).length === B;
		}
	}
	return e !== e && t !== t;
}
function omit(e, ...t) {
	const I = {};
	for (const B of Object.keys(e)) t.includes(B) || (I[B] = e[B]);
	return I;
}
function stripValues(e, t, I) {
	return Object.fromEntries(Object.entries(e).filter(([B, tr]) => !dequal(tr, t)));
}
const overridable = (e, t) => {
	const I = (tr, rr) => {
		e.update((ir) => {
			const lr = tr(ir);
			let dr = lr;
			return t && (dr = t({ curr: ir, next: lr })), rr == null || rr(dr), dr;
		});
	};
	return {
		...e,
		update: I,
		set: (tr) => {
			I(() => tr);
		}
	};
};
let urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict',
	nanoid = (e = 21) => {
		let t = '',
			I = e | 0;
		for (; I--; ) t += urlAlphabet[(Math.random() * 64) | 0];
		return t;
	};
function generateId() {
	return nanoid(10);
}
function generateIds(e) {
	return e.reduce((t, I) => ((t[I] = generateId()), t), {});
}
function makeHull(e) {
	const t = e.slice();
	return t.sort(POINT_COMPARATOR), makeHullPresorted(t);
}
function makeHullPresorted(e) {
	if (e.length <= 1) return e.slice();
	const t = [];
	for (let B = 0; B < e.length; B++) {
		const tr = e[B];
		for (; t.length >= 2; ) {
			const rr = t[t.length - 1],
				ir = t[t.length - 2];
			if ((rr.x - ir.x) * (tr.y - ir.y) >= (rr.y - ir.y) * (tr.x - ir.x)) t.pop();
			else break;
		}
		t.push(tr);
	}
	t.pop();
	const I = [];
	for (let B = e.length - 1; B >= 0; B--) {
		const tr = e[B];
		for (; I.length >= 2; ) {
			const rr = I[I.length - 1],
				ir = I[I.length - 2];
			if ((rr.x - ir.x) * (tr.y - ir.y) >= (rr.y - ir.y) * (tr.x - ir.x)) I.pop();
			else break;
		}
		I.push(tr);
	}
	return (
		I.pop(),
		t.length == 1 && I.length == 1 && t[0].x == I[0].x && t[0].y == I[0].y ? t : t.concat(I)
	);
}
function POINT_COMPARATOR(e, t) {
	return e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0;
}
function getPointsFromEl(e) {
	const t = e.getBoundingClientRect();
	return [
		{ x: t.left, y: t.top },
		{ x: t.right, y: t.top },
		{ x: t.right, y: t.bottom },
		{ x: t.left, y: t.bottom }
	];
}
function makeHullFromElements(e) {
	const t = e.flatMap((I) => getPointsFromEl(I));
	return makeHull(t);
}
function pointInPolygon(e, t) {
	let I = !1;
	for (let B = 0, tr = t.length - 1; B < t.length; tr = B++) {
		const rr = t[B].x,
			ir = t[B].y,
			lr = t[tr].x,
			dr = t[tr].y;
		ir > e.y != dr > e.y && e.x < ((lr - rr) * (e.y - ir)) / (dr - ir) + rr && (I = !I);
	}
	return I;
}
function toWritableStores(e) {
	const t = {};
	return (
		Object.keys(e).forEach((I) => {
			const B = I,
				tr = e[B];
			t[B] = writable(tr);
		}),
		t
	);
}
function getPortalParent(e) {
	let t = e.parentElement;
	for (; isHTMLElement$1(t) && !t.hasAttribute('data-portal'); ) t = t.parentElement;
	return t || 'body';
}
function getPortalDestination(e, t) {
	const I = getPortalParent(e);
	return t !== void 0 ? t : I === 'body' ? document.body : null;
}
const min = Math.min,
	max = Math.max,
	round = Math.round,
	floor = Math.floor,
	createCoords = (e) => ({ x: e, y: e }),
	oppositeSideMap = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
	oppositeAlignmentMap = { start: 'end', end: 'start' };
function clamp(e, t, I) {
	return max(e, min(t, I));
}
function evaluate(e, t) {
	return typeof e == 'function' ? e(t) : e;
}
function getSide(e) {
	return e.split('-')[0];
}
function getAlignment(e) {
	return e.split('-')[1];
}
function getOppositeAxis(e) {
	return e === 'x' ? 'y' : 'x';
}
function getAxisLength(e) {
	return e === 'y' ? 'height' : 'width';
}
function getSideAxis(e) {
	return ['top', 'bottom'].includes(getSide(e)) ? 'y' : 'x';
}
function getAlignmentAxis(e) {
	return getOppositeAxis(getSideAxis(e));
}
function getAlignmentSides(e, t, I) {
	I === void 0 && (I = !1);
	const B = getAlignment(e),
		tr = getAlignmentAxis(e),
		rr = getAxisLength(tr);
	let ir =
		tr === 'x'
			? B === (I ? 'end' : 'start')
				? 'right'
				: 'left'
			: B === 'start'
				? 'bottom'
				: 'top';
	return (
		t.reference[rr] > t.floating[rr] && (ir = getOppositePlacement(ir)),
		[ir, getOppositePlacement(ir)]
	);
}
function getExpandedPlacements(e) {
	const t = getOppositePlacement(e);
	return [getOppositeAlignmentPlacement(e), t, getOppositeAlignmentPlacement(t)];
}
function getOppositeAlignmentPlacement(e) {
	return e.replace(/start|end/g, (t) => oppositeAlignmentMap[t]);
}
function getSideList(e, t, I) {
	const B = ['left', 'right'],
		tr = ['right', 'left'],
		rr = ['top', 'bottom'],
		ir = ['bottom', 'top'];
	switch (e) {
		case 'top':
		case 'bottom':
			return I ? (t ? tr : B) : t ? B : tr;
		case 'left':
		case 'right':
			return t ? rr : ir;
		default:
			return [];
	}
}
function getOppositeAxisPlacements(e, t, I, B) {
	const tr = getAlignment(e);
	let rr = getSideList(getSide(e), I === 'start', B);
	return (
		tr &&
			((rr = rr.map((ir) => ir + '-' + tr)),
			t && (rr = rr.concat(rr.map(getOppositeAlignmentPlacement)))),
		rr
	);
}
function getOppositePlacement(e) {
	return e.replace(/left|right|bottom|top/g, (t) => oppositeSideMap[t]);
}
function expandPaddingObject(e) {
	return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function getPaddingObject(e) {
	return typeof e != 'number' ? expandPaddingObject(e) : { top: e, right: e, bottom: e, left: e };
}
function rectToClientRect(e) {
	const { x: t, y: I, width: B, height: tr } = e;
	return { width: B, height: tr, top: I, left: t, right: t + B, bottom: I + tr, x: t, y: I };
}
function computeCoordsFromPlacement(e, t, I) {
	let { reference: B, floating: tr } = e;
	const rr = getSideAxis(t),
		ir = getAlignmentAxis(t),
		lr = getAxisLength(ir),
		dr = getSide(t),
		mr = rr === 'y',
		_r = B.x + B.width / 2 - tr.width / 2,
		fr = B.y + B.height / 2 - tr.height / 2,
		hr = B[lr] / 2 - tr[lr] / 2;
	let Mr;
	switch (dr) {
		case 'top':
			Mr = { x: _r, y: B.y - tr.height };
			break;
		case 'bottom':
			Mr = { x: _r, y: B.y + B.height };
			break;
		case 'right':
			Mr = { x: B.x + B.width, y: fr };
			break;
		case 'left':
			Mr = { x: B.x - tr.width, y: fr };
			break;
		default:
			Mr = { x: B.x, y: B.y };
	}
	switch (getAlignment(t)) {
		case 'start':
			Mr[ir] -= hr * (I && mr ? -1 : 1);
			break;
		case 'end':
			Mr[ir] += hr * (I && mr ? -1 : 1);
			break;
	}
	return Mr;
}
const computePosition$1 = async (e, t, I) => {
	const {
			placement: B = 'bottom',
			strategy: tr = 'absolute',
			middleware: rr = [],
			platform: ir
		} = I,
		lr = rr.filter(Boolean),
		dr = await (ir.isRTL == null ? void 0 : ir.isRTL(t));
	let mr = await ir.getElementRects({ reference: e, floating: t, strategy: tr }),
		{ x: _r, y: fr } = computeCoordsFromPlacement(mr, B, dr),
		hr = B,
		Mr = {},
		gr = 0;
	for (let yr = 0; yr < lr.length; yr++) {
		const { name: xr, fn: vr } = lr[yr],
			{
				x: Sr,
				y: wr,
				data: br,
				reset: Fr
			} = await vr({
				x: _r,
				y: fr,
				initialPlacement: B,
				placement: hr,
				strategy: tr,
				middlewareData: Mr,
				rects: mr,
				platform: ir,
				elements: { reference: e, floating: t }
			});
		(_r = Sr ?? _r),
			(fr = wr ?? fr),
			(Mr = { ...Mr, [xr]: { ...Mr[xr], ...br } }),
			Fr &&
				gr <= 50 &&
				(gr++,
				typeof Fr == 'object' &&
					(Fr.placement && (hr = Fr.placement),
					Fr.rects &&
						(mr =
							Fr.rects === !0
								? await ir.getElementRects({ reference: e, floating: t, strategy: tr })
								: Fr.rects),
					({ x: _r, y: fr } = computeCoordsFromPlacement(mr, hr, dr))),
				(yr = -1));
	}
	return { x: _r, y: fr, placement: hr, strategy: tr, middlewareData: Mr };
};
async function detectOverflow(e, t) {
	var I;
	t === void 0 && (t = {});
	const { x: B, y: tr, platform: rr, rects: ir, elements: lr, strategy: dr } = e,
		{
			boundary: mr = 'clippingAncestors',
			rootBoundary: _r = 'viewport',
			elementContext: fr = 'floating',
			altBoundary: hr = !1,
			padding: Mr = 0
		} = evaluate(t, e),
		gr = getPaddingObject(Mr),
		xr = lr[hr ? (fr === 'floating' ? 'reference' : 'floating') : fr],
		vr = rectToClientRect(
			await rr.getClippingRect({
				element:
					(I = await (rr.isElement == null ? void 0 : rr.isElement(xr))) == null || I
						? xr
						: xr.contextElement ||
							(await (rr.getDocumentElement == null ? void 0 : rr.getDocumentElement(lr.floating))),
				boundary: mr,
				rootBoundary: _r,
				strategy: dr
			})
		),
		Sr =
			fr === 'floating'
				? { x: B, y: tr, width: ir.floating.width, height: ir.floating.height }
				: ir.reference,
		wr = await (rr.getOffsetParent == null ? void 0 : rr.getOffsetParent(lr.floating)),
		br = (await (rr.isElement == null ? void 0 : rr.isElement(wr)))
			? (await (rr.getScale == null ? void 0 : rr.getScale(wr))) || { x: 1, y: 1 }
			: { x: 1, y: 1 },
		Fr = rectToClientRect(
			rr.convertOffsetParentRelativeRectToViewportRelativeRect
				? await rr.convertOffsetParentRelativeRectToViewportRelativeRect({
						elements: lr,
						rect: Sr,
						offsetParent: wr,
						strategy: dr
					})
				: Sr
		);
	return {
		top: (vr.top - Fr.top + gr.top) / br.y,
		bottom: (Fr.bottom - vr.bottom + gr.bottom) / br.y,
		left: (vr.left - Fr.left + gr.left) / br.x,
		right: (Fr.right - vr.right + gr.right) / br.x
	};
}
const arrow$1 = (e) => ({
		name: 'arrow',
		options: e,
		async fn(t) {
			const {
					x: I,
					y: B,
					placement: tr,
					rects: rr,
					platform: ir,
					elements: lr,
					middlewareData: dr
				} = t,
				{ element: mr, padding: _r = 0 } = evaluate(e, t) || {};
			if (mr == null) return {};
			const fr = getPaddingObject(_r),
				hr = { x: I, y: B },
				Mr = getAlignmentAxis(tr),
				gr = getAxisLength(Mr),
				yr = await ir.getDimensions(mr),
				xr = Mr === 'y',
				vr = xr ? 'top' : 'left',
				Sr = xr ? 'bottom' : 'right',
				wr = xr ? 'clientHeight' : 'clientWidth',
				br = rr.reference[gr] + rr.reference[Mr] - hr[Mr] - rr.floating[gr],
				Fr = hr[Mr] - rr.reference[Mr],
				Ir = await (ir.getOffsetParent == null ? void 0 : ir.getOffsetParent(mr));
			let kr = Ir ? Ir[wr] : 0;
			(!kr || !(await (ir.isElement == null ? void 0 : ir.isElement(Ir)))) &&
				(kr = lr.floating[wr] || rr.floating[gr]);
			const Or = br / 2 - Fr / 2,
				Lr = kr / 2 - yr[gr] / 2 - 1,
				Gr = min(fr[vr], Lr),
				es = min(fr[Sr], Lr),
				Dr = Gr,
				zr = kr - yr[gr] - es,
				Jr = kr / 2 - yr[gr] / 2 + Or,
				Qr = clamp(Dr, Jr, zr),
				ts =
					!dr.arrow &&
					getAlignment(tr) != null &&
					Jr !== Qr &&
					rr.reference[gr] / 2 - (Jr < Dr ? Gr : es) - yr[gr] / 2 < 0,
				rs = ts ? (Jr < Dr ? Jr - Dr : Jr - zr) : 0;
			return {
				[Mr]: hr[Mr] + rs,
				data: { [Mr]: Qr, centerOffset: Jr - Qr - rs, ...(ts && { alignmentOffset: rs }) },
				reset: ts
			};
		}
	}),
	flip$1 = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'flip',
				options: e,
				async fn(t) {
					var I, B;
					const {
							placement: tr,
							middlewareData: rr,
							rects: ir,
							initialPlacement: lr,
							platform: dr,
							elements: mr
						} = t,
						{
							mainAxis: _r = !0,
							crossAxis: fr = !0,
							fallbackPlacements: hr,
							fallbackStrategy: Mr = 'bestFit',
							fallbackAxisSideDirection: gr = 'none',
							flipAlignment: yr = !0,
							...xr
						} = evaluate(e, t);
					if ((I = rr.arrow) != null && I.alignmentOffset) return {};
					const vr = getSide(tr),
						Sr = getSideAxis(lr),
						wr = getSide(lr) === lr,
						br = await (dr.isRTL == null ? void 0 : dr.isRTL(mr.floating)),
						Fr = hr || (wr || !yr ? [getOppositePlacement(lr)] : getExpandedPlacements(lr)),
						Ir = gr !== 'none';
					!hr && Ir && Fr.push(...getOppositeAxisPlacements(lr, yr, gr, br));
					const kr = [lr, ...Fr],
						Or = await detectOverflow(t, xr),
						Lr = [];
					let Gr = ((B = rr.flip) == null ? void 0 : B.overflows) || [];
					if ((_r && Lr.push(Or[vr]), fr)) {
						const Jr = getAlignmentSides(tr, ir, br);
						Lr.push(Or[Jr[0]], Or[Jr[1]]);
					}
					if (((Gr = [...Gr, { placement: tr, overflows: Lr }]), !Lr.every((Jr) => Jr <= 0))) {
						var es, Dr;
						const Jr = (((es = rr.flip) == null ? void 0 : es.index) || 0) + 1,
							Qr = kr[Jr];
						if (
							Qr &&
							(!(fr === 'alignment' ? Sr !== getSideAxis(Qr) : !1) ||
								Gr.every((ss) => ss.overflows[0] > 0 && getSideAxis(ss.placement) === Sr))
						)
							return { data: { index: Jr, overflows: Gr }, reset: { placement: Qr } };
						let ts =
							(Dr = Gr.filter((rs) => rs.overflows[0] <= 0).sort(
								(rs, ss) => rs.overflows[1] - ss.overflows[1]
							)[0]) == null
								? void 0
								: Dr.placement;
						if (!ts)
							switch (Mr) {
								case 'bestFit': {
									var zr;
									const rs =
										(zr = Gr.filter((ss) => {
											if (Ir) {
												const ns = getSideAxis(ss.placement);
												return ns === Sr || ns === 'y';
											}
											return !0;
										})
											.map((ss) => [
												ss.placement,
												ss.overflows.filter((ns) => ns > 0).reduce((ns, os) => ns + os, 0)
											])
											.sort((ss, ns) => ss[1] - ns[1])[0]) == null
											? void 0
											: zr[0];
									rs && (ts = rs);
									break;
								}
								case 'initialPlacement':
									ts = lr;
									break;
							}
						if (tr !== ts) return { reset: { placement: ts } };
					}
					return {};
				}
			}
		);
	};
async function convertValueToCoords(e, t) {
	const { placement: I, platform: B, elements: tr } = e,
		rr = await (B.isRTL == null ? void 0 : B.isRTL(tr.floating)),
		ir = getSide(I),
		lr = getAlignment(I),
		dr = getSideAxis(I) === 'y',
		mr = ['left', 'top'].includes(ir) ? -1 : 1,
		_r = rr && dr ? -1 : 1,
		fr = evaluate(t, e);
	let {
		mainAxis: hr,
		crossAxis: Mr,
		alignmentAxis: gr
	} = typeof fr == 'number'
		? { mainAxis: fr, crossAxis: 0, alignmentAxis: null }
		: { mainAxis: fr.mainAxis || 0, crossAxis: fr.crossAxis || 0, alignmentAxis: fr.alignmentAxis };
	return (
		lr && typeof gr == 'number' && (Mr = lr === 'end' ? gr * -1 : gr),
		dr ? { x: Mr * _r, y: hr * mr } : { x: hr * mr, y: Mr * _r }
	);
}
const offset$1 = function (e) {
		return (
			e === void 0 && (e = 0),
			{
				name: 'offset',
				options: e,
				async fn(t) {
					var I, B;
					const { x: tr, y: rr, placement: ir, middlewareData: lr } = t,
						dr = await convertValueToCoords(t, e);
					return ir === ((I = lr.offset) == null ? void 0 : I.placement) &&
						(B = lr.arrow) != null &&
						B.alignmentOffset
						? {}
						: { x: tr + dr.x, y: rr + dr.y, data: { ...dr, placement: ir } };
				}
			}
		);
	},
	shift$1 = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'shift',
				options: e,
				async fn(t) {
					const { x: I, y: B, placement: tr } = t,
						{
							mainAxis: rr = !0,
							crossAxis: ir = !1,
							limiter: lr = {
								fn: (xr) => {
									let { x: vr, y: Sr } = xr;
									return { x: vr, y: Sr };
								}
							},
							...dr
						} = evaluate(e, t),
						mr = { x: I, y: B },
						_r = await detectOverflow(t, dr),
						fr = getSideAxis(getSide(tr)),
						hr = getOppositeAxis(fr);
					let Mr = mr[hr],
						gr = mr[fr];
					if (rr) {
						const xr = hr === 'y' ? 'top' : 'left',
							vr = hr === 'y' ? 'bottom' : 'right',
							Sr = Mr + _r[xr],
							wr = Mr - _r[vr];
						Mr = clamp(Sr, Mr, wr);
					}
					if (ir) {
						const xr = fr === 'y' ? 'top' : 'left',
							vr = fr === 'y' ? 'bottom' : 'right',
							Sr = gr + _r[xr],
							wr = gr - _r[vr];
						gr = clamp(Sr, gr, wr);
					}
					const yr = lr.fn({ ...t, [hr]: Mr, [fr]: gr });
					return { ...yr, data: { x: yr.x - I, y: yr.y - B, enabled: { [hr]: rr, [fr]: ir } } };
				}
			}
		);
	},
	size$1 = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'size',
				options: e,
				async fn(t) {
					var I, B;
					const { placement: tr, rects: rr, platform: ir, elements: lr } = t,
						{ apply: dr = () => {}, ...mr } = evaluate(e, t),
						_r = await detectOverflow(t, mr),
						fr = getSide(tr),
						hr = getAlignment(tr),
						Mr = getSideAxis(tr) === 'y',
						{ width: gr, height: yr } = rr.floating;
					let xr, vr;
					fr === 'top' || fr === 'bottom'
						? ((xr = fr),
							(vr =
								hr ===
								((await (ir.isRTL == null ? void 0 : ir.isRTL(lr.floating))) ? 'start' : 'end')
									? 'left'
									: 'right'))
						: ((vr = fr), (xr = hr === 'end' ? 'top' : 'bottom'));
					const Sr = yr - _r.top - _r.bottom,
						wr = gr - _r.left - _r.right,
						br = min(yr - _r[xr], Sr),
						Fr = min(gr - _r[vr], wr),
						Ir = !t.middlewareData.shift;
					let kr = br,
						Or = Fr;
					if (
						((I = t.middlewareData.shift) != null && I.enabled.x && (Or = wr),
						(B = t.middlewareData.shift) != null && B.enabled.y && (kr = Sr),
						Ir && !hr)
					) {
						const Gr = max(_r.left, 0),
							es = max(_r.right, 0),
							Dr = max(_r.top, 0),
							zr = max(_r.bottom, 0);
						Mr
							? (Or = gr - 2 * (Gr !== 0 || es !== 0 ? Gr + es : max(_r.left, _r.right)))
							: (kr = yr - 2 * (Dr !== 0 || zr !== 0 ? Dr + zr : max(_r.top, _r.bottom)));
					}
					await dr({ ...t, availableWidth: Or, availableHeight: kr });
					const Lr = await ir.getDimensions(lr.floating);
					return gr !== Lr.width || yr !== Lr.height ? { reset: { rects: !0 } } : {};
				}
			}
		);
	};
function hasWindow() {
	return typeof window < 'u';
}
function getNodeName(e) {
	return isNode(e) ? (e.nodeName || '').toLowerCase() : '#document';
}
function getWindow(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function getDocumentElement(e) {
	var t;
	return (t = (isNode(e) ? e.ownerDocument : e.document) || window.document) == null
		? void 0
		: t.documentElement;
}
function isNode(e) {
	return hasWindow() ? e instanceof Node || e instanceof getWindow(e).Node : !1;
}
function isElement(e) {
	return hasWindow() ? e instanceof Element || e instanceof getWindow(e).Element : !1;
}
function isHTMLElement(e) {
	return hasWindow() ? e instanceof HTMLElement || e instanceof getWindow(e).HTMLElement : !1;
}
function isShadowRoot(e) {
	return !hasWindow() || typeof ShadowRoot > 'u'
		? !1
		: e instanceof ShadowRoot || e instanceof getWindow(e).ShadowRoot;
}
function isOverflowElement(e) {
	const { overflow: t, overflowX: I, overflowY: B, display: tr } = getComputedStyle$1(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + B + I) && !['inline', 'contents'].includes(tr);
}
function isTableElement(e) {
	return ['table', 'td', 'th'].includes(getNodeName(e));
}
function isTopLayer(e) {
	return [':popover-open', ':modal'].some((t) => {
		try {
			return e.matches(t);
		} catch {
			return !1;
		}
	});
}
function isContainingBlock(e) {
	const t = isWebKit(),
		I = isElement(e) ? getComputedStyle$1(e) : e;
	return (
		['transform', 'translate', 'scale', 'rotate', 'perspective'].some((B) =>
			I[B] ? I[B] !== 'none' : !1
		) ||
		(I.containerType ? I.containerType !== 'normal' : !1) ||
		(!t && (I.backdropFilter ? I.backdropFilter !== 'none' : !1)) ||
		(!t && (I.filter ? I.filter !== 'none' : !1)) ||
		['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'].some((B) =>
			(I.willChange || '').includes(B)
		) ||
		['paint', 'layout', 'strict', 'content'].some((B) => (I.contain || '').includes(B))
	);
}
function getContainingBlock(e) {
	let t = getParentNode(e);
	for (; isHTMLElement(t) && !isLastTraversableNode(t); ) {
		if (isContainingBlock(t)) return t;
		if (isTopLayer(t)) return null;
		t = getParentNode(t);
	}
	return null;
}
function isWebKit() {
	return typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(e) {
	return ['html', 'body', '#document'].includes(getNodeName(e));
}
function getComputedStyle$1(e) {
	return getWindow(e).getComputedStyle(e);
}
function getNodeScroll(e) {
	return isElement(e)
		? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
		: { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function getParentNode(e) {
	if (getNodeName(e) === 'html') return e;
	const t = e.assignedSlot || e.parentNode || (isShadowRoot(e) && e.host) || getDocumentElement(e);
	return isShadowRoot(t) ? t.host : t;
}
function getNearestOverflowAncestor(e) {
	const t = getParentNode(e);
	return isLastTraversableNode(t)
		? e.ownerDocument
			? e.ownerDocument.body
			: e.body
		: isHTMLElement(t) && isOverflowElement(t)
			? t
			: getNearestOverflowAncestor(t);
}
function getOverflowAncestors(e, t, I) {
	var B;
	t === void 0 && (t = []), I === void 0 && (I = !0);
	const tr = getNearestOverflowAncestor(e),
		rr = tr === ((B = e.ownerDocument) == null ? void 0 : B.body),
		ir = getWindow(tr);
	if (rr) {
		const lr = getFrameElement(ir);
		return t.concat(
			ir,
			ir.visualViewport || [],
			isOverflowElement(tr) ? tr : [],
			lr && I ? getOverflowAncestors(lr) : []
		);
	}
	return t.concat(tr, getOverflowAncestors(tr, [], I));
}
function getFrameElement(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function getCssDimensions(e) {
	const t = getComputedStyle$1(e);
	let I = parseFloat(t.width) || 0,
		B = parseFloat(t.height) || 0;
	const tr = isHTMLElement(e),
		rr = tr ? e.offsetWidth : I,
		ir = tr ? e.offsetHeight : B,
		lr = round(I) !== rr || round(B) !== ir;
	return lr && ((I = rr), (B = ir)), { width: I, height: B, $: lr };
}
function unwrapElement(e) {
	return isElement(e) ? e : e.contextElement;
}
function getScale(e) {
	const t = unwrapElement(e);
	if (!isHTMLElement(t)) return createCoords(1);
	const I = t.getBoundingClientRect(),
		{ width: B, height: tr, $: rr } = getCssDimensions(t);
	let ir = (rr ? round(I.width) : I.width) / B,
		lr = (rr ? round(I.height) : I.height) / tr;
	return (
		(!ir || !Number.isFinite(ir)) && (ir = 1),
		(!lr || !Number.isFinite(lr)) && (lr = 1),
		{ x: ir, y: lr }
	);
}
const noOffsets = createCoords(0);
function getVisualOffsets(e) {
	const t = getWindow(e);
	return !isWebKit() || !t.visualViewport
		? noOffsets
		: { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function shouldAddVisualOffsets(e, t, I) {
	return t === void 0 && (t = !1), !I || (t && I !== getWindow(e)) ? !1 : t;
}
function getBoundingClientRect(e, t, I, B) {
	t === void 0 && (t = !1), I === void 0 && (I = !1);
	const tr = e.getBoundingClientRect(),
		rr = unwrapElement(e);
	let ir = createCoords(1);
	t && (B ? isElement(B) && (ir = getScale(B)) : (ir = getScale(e)));
	const lr = shouldAddVisualOffsets(rr, I, B) ? getVisualOffsets(rr) : createCoords(0);
	let dr = (tr.left + lr.x) / ir.x,
		mr = (tr.top + lr.y) / ir.y,
		_r = tr.width / ir.x,
		fr = tr.height / ir.y;
	if (rr) {
		const hr = getWindow(rr),
			Mr = B && isElement(B) ? getWindow(B) : B;
		let gr = hr,
			yr = getFrameElement(gr);
		for (; yr && B && Mr !== gr; ) {
			const xr = getScale(yr),
				vr = yr.getBoundingClientRect(),
				Sr = getComputedStyle$1(yr),
				wr = vr.left + (yr.clientLeft + parseFloat(Sr.paddingLeft)) * xr.x,
				br = vr.top + (yr.clientTop + parseFloat(Sr.paddingTop)) * xr.y;
			(dr *= xr.x),
				(mr *= xr.y),
				(_r *= xr.x),
				(fr *= xr.y),
				(dr += wr),
				(mr += br),
				(gr = getWindow(yr)),
				(yr = getFrameElement(gr));
		}
	}
	return rectToClientRect({ width: _r, height: fr, x: dr, y: mr });
}
function getWindowScrollBarX(e, t) {
	const I = getNodeScroll(e).scrollLeft;
	return t ? t.left + I : getBoundingClientRect(getDocumentElement(e)).left + I;
}
function getHTMLOffset(e, t, I) {
	I === void 0 && (I = !1);
	const B = e.getBoundingClientRect(),
		tr = B.left + t.scrollLeft - (I ? 0 : getWindowScrollBarX(e, B)),
		rr = B.top + t.scrollTop;
	return { x: tr, y: rr };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(e) {
	let { elements: t, rect: I, offsetParent: B, strategy: tr } = e;
	const rr = tr === 'fixed',
		ir = getDocumentElement(B),
		lr = t ? isTopLayer(t.floating) : !1;
	if (B === ir || (lr && rr)) return I;
	let dr = { scrollLeft: 0, scrollTop: 0 },
		mr = createCoords(1);
	const _r = createCoords(0),
		fr = isHTMLElement(B);
	if (
		(fr || (!fr && !rr)) &&
		((getNodeName(B) !== 'body' || isOverflowElement(ir)) && (dr = getNodeScroll(B)),
		isHTMLElement(B))
	) {
		const Mr = getBoundingClientRect(B);
		(mr = getScale(B)), (_r.x = Mr.x + B.clientLeft), (_r.y = Mr.y + B.clientTop);
	}
	const hr = ir && !fr && !rr ? getHTMLOffset(ir, dr, !0) : createCoords(0);
	return {
		width: I.width * mr.x,
		height: I.height * mr.y,
		x: I.x * mr.x - dr.scrollLeft * mr.x + _r.x + hr.x,
		y: I.y * mr.y - dr.scrollTop * mr.y + _r.y + hr.y
	};
}
function getClientRects(e) {
	return Array.from(e.getClientRects());
}
function getDocumentRect(e) {
	const t = getDocumentElement(e),
		I = getNodeScroll(e),
		B = e.ownerDocument.body,
		tr = max(t.scrollWidth, t.clientWidth, B.scrollWidth, B.clientWidth),
		rr = max(t.scrollHeight, t.clientHeight, B.scrollHeight, B.clientHeight);
	let ir = -I.scrollLeft + getWindowScrollBarX(e);
	const lr = -I.scrollTop;
	return (
		getComputedStyle$1(B).direction === 'rtl' && (ir += max(t.clientWidth, B.clientWidth) - tr),
		{ width: tr, height: rr, x: ir, y: lr }
	);
}
function getViewportRect(e, t) {
	const I = getWindow(e),
		B = getDocumentElement(e),
		tr = I.visualViewport;
	let rr = B.clientWidth,
		ir = B.clientHeight,
		lr = 0,
		dr = 0;
	if (tr) {
		(rr = tr.width), (ir = tr.height);
		const mr = isWebKit();
		(!mr || (mr && t === 'fixed')) && ((lr = tr.offsetLeft), (dr = tr.offsetTop));
	}
	return { width: rr, height: ir, x: lr, y: dr };
}
function getInnerBoundingClientRect(e, t) {
	const I = getBoundingClientRect(e, !0, t === 'fixed'),
		B = I.top + e.clientTop,
		tr = I.left + e.clientLeft,
		rr = isHTMLElement(e) ? getScale(e) : createCoords(1),
		ir = e.clientWidth * rr.x,
		lr = e.clientHeight * rr.y,
		dr = tr * rr.x,
		mr = B * rr.y;
	return { width: ir, height: lr, x: dr, y: mr };
}
function getClientRectFromClippingAncestor(e, t, I) {
	let B;
	if (t === 'viewport') B = getViewportRect(e, I);
	else if (t === 'document') B = getDocumentRect(getDocumentElement(e));
	else if (isElement(t)) B = getInnerBoundingClientRect(t, I);
	else {
		const tr = getVisualOffsets(e);
		B = { x: t.x - tr.x, y: t.y - tr.y, width: t.width, height: t.height };
	}
	return rectToClientRect(B);
}
function hasFixedPositionAncestor(e, t) {
	const I = getParentNode(e);
	return I === t || !isElement(I) || isLastTraversableNode(I)
		? !1
		: getComputedStyle$1(I).position === 'fixed' || hasFixedPositionAncestor(I, t);
}
function getClippingElementAncestors(e, t) {
	const I = t.get(e);
	if (I) return I;
	let B = getOverflowAncestors(e, [], !1).filter(
			(lr) => isElement(lr) && getNodeName(lr) !== 'body'
		),
		tr = null;
	const rr = getComputedStyle$1(e).position === 'fixed';
	let ir = rr ? getParentNode(e) : e;
	for (; isElement(ir) && !isLastTraversableNode(ir); ) {
		const lr = getComputedStyle$1(ir),
			dr = isContainingBlock(ir);
		!dr && lr.position === 'fixed' && (tr = null),
			(
				rr
					? !dr && !tr
					: (!dr &&
							lr.position === 'static' &&
							!!tr &&
							['absolute', 'fixed'].includes(tr.position)) ||
						(isOverflowElement(ir) && !dr && hasFixedPositionAncestor(e, ir))
			)
				? (B = B.filter((_r) => _r !== ir))
				: (tr = lr),
			(ir = getParentNode(ir));
	}
	return t.set(e, B), B;
}
function getClippingRect(e) {
	let { element: t, boundary: I, rootBoundary: B, strategy: tr } = e;
	const ir = [
			...(I === 'clippingAncestors'
				? isTopLayer(t)
					? []
					: getClippingElementAncestors(t, this._c)
				: [].concat(I)),
			B
		],
		lr = ir[0],
		dr = ir.reduce(
			(mr, _r) => {
				const fr = getClientRectFromClippingAncestor(t, _r, tr);
				return (
					(mr.top = max(fr.top, mr.top)),
					(mr.right = min(fr.right, mr.right)),
					(mr.bottom = min(fr.bottom, mr.bottom)),
					(mr.left = max(fr.left, mr.left)),
					mr
				);
			},
			getClientRectFromClippingAncestor(t, lr, tr)
		);
	return { width: dr.right - dr.left, height: dr.bottom - dr.top, x: dr.left, y: dr.top };
}
function getDimensions(e) {
	const { width: t, height: I } = getCssDimensions(e);
	return { width: t, height: I };
}
function getRectRelativeToOffsetParent(e, t, I) {
	const B = isHTMLElement(t),
		tr = getDocumentElement(t),
		rr = I === 'fixed',
		ir = getBoundingClientRect(e, !0, rr, t);
	let lr = { scrollLeft: 0, scrollTop: 0 };
	const dr = createCoords(0);
	function mr() {
		dr.x = getWindowScrollBarX(tr);
	}
	if (B || (!B && !rr))
		if (((getNodeName(t) !== 'body' || isOverflowElement(tr)) && (lr = getNodeScroll(t)), B)) {
			const Mr = getBoundingClientRect(t, !0, rr, t);
			(dr.x = Mr.x + t.clientLeft), (dr.y = Mr.y + t.clientTop);
		} else tr && mr();
	rr && !B && tr && mr();
	const _r = tr && !B && !rr ? getHTMLOffset(tr, lr) : createCoords(0),
		fr = ir.left + lr.scrollLeft - dr.x - _r.x,
		hr = ir.top + lr.scrollTop - dr.y - _r.y;
	return { x: fr, y: hr, width: ir.width, height: ir.height };
}
function isStaticPositioned(e) {
	return getComputedStyle$1(e).position === 'static';
}
function getTrueOffsetParent(e, t) {
	if (!isHTMLElement(e) || getComputedStyle$1(e).position === 'fixed') return null;
	if (t) return t(e);
	let I = e.offsetParent;
	return getDocumentElement(e) === I && (I = I.ownerDocument.body), I;
}
function getOffsetParent(e, t) {
	const I = getWindow(e);
	if (isTopLayer(e)) return I;
	if (!isHTMLElement(e)) {
		let tr = getParentNode(e);
		for (; tr && !isLastTraversableNode(tr); ) {
			if (isElement(tr) && !isStaticPositioned(tr)) return tr;
			tr = getParentNode(tr);
		}
		return I;
	}
	let B = getTrueOffsetParent(e, t);
	for (; B && isTableElement(B) && isStaticPositioned(B); ) B = getTrueOffsetParent(B, t);
	return B && isLastTraversableNode(B) && isStaticPositioned(B) && !isContainingBlock(B)
		? I
		: B || getContainingBlock(e) || I;
}
const getElementRects = async function (e) {
	const t = this.getOffsetParent || getOffsetParent,
		I = this.getDimensions,
		B = await I(e.floating);
	return {
		reference: getRectRelativeToOffsetParent(e.reference, await t(e.floating), e.strategy),
		floating: { x: 0, y: 0, width: B.width, height: B.height }
	};
};
function isRTL(e) {
	return getComputedStyle$1(e).direction === 'rtl';
}
const platform = {
	convertOffsetParentRelativeRectToViewportRelativeRect,
	getDocumentElement,
	getClippingRect,
	getOffsetParent,
	getElementRects,
	getClientRects,
	getDimensions,
	getScale,
	isElement,
	isRTL
};
function rectsAreEqual(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function observeMove(e, t) {
	let I = null,
		B;
	const tr = getDocumentElement(e);
	function rr() {
		var lr;
		clearTimeout(B), (lr = I) == null || lr.disconnect(), (I = null);
	}
	function ir(lr, dr) {
		lr === void 0 && (lr = !1), dr === void 0 && (dr = 1), rr();
		const mr = e.getBoundingClientRect(),
			{ left: _r, top: fr, width: hr, height: Mr } = mr;
		if ((lr || t(), !hr || !Mr)) return;
		const gr = floor(fr),
			yr = floor(tr.clientWidth - (_r + hr)),
			xr = floor(tr.clientHeight - (fr + Mr)),
			vr = floor(_r),
			wr = {
				rootMargin: -gr + 'px ' + -yr + 'px ' + -xr + 'px ' + -vr + 'px',
				threshold: max(0, min(1, dr)) || 1
			};
		let br = !0;
		function Fr(Ir) {
			const kr = Ir[0].intersectionRatio;
			if (kr !== dr) {
				if (!br) return ir();
				kr
					? ir(!1, kr)
					: (B = setTimeout(() => {
							ir(!1, 1e-7);
						}, 1e3));
			}
			kr === 1 && !rectsAreEqual(mr, e.getBoundingClientRect()) && ir(), (br = !1);
		}
		try {
			I = new IntersectionObserver(Fr, { ...wr, root: tr.ownerDocument });
		} catch {
			I = new IntersectionObserver(Fr, wr);
		}
		I.observe(e);
	}
	return ir(!0), rr;
}
function autoUpdate(e, t, I, B) {
	B === void 0 && (B = {});
	const {
			ancestorScroll: tr = !0,
			ancestorResize: rr = !0,
			elementResize: ir = typeof ResizeObserver == 'function',
			layoutShift: lr = typeof IntersectionObserver == 'function',
			animationFrame: dr = !1
		} = B,
		mr = unwrapElement(e),
		_r = tr || rr ? [...(mr ? getOverflowAncestors(mr) : []), ...getOverflowAncestors(t)] : [];
	_r.forEach((vr) => {
		tr && vr.addEventListener('scroll', I, { passive: !0 }), rr && vr.addEventListener('resize', I);
	});
	const fr = mr && lr ? observeMove(mr, I) : null;
	let hr = -1,
		Mr = null;
	ir &&
		((Mr = new ResizeObserver((vr) => {
			let [Sr] = vr;
			Sr &&
				Sr.target === mr &&
				Mr &&
				(Mr.unobserve(t),
				cancelAnimationFrame(hr),
				(hr = requestAnimationFrame(() => {
					var wr;
					(wr = Mr) == null || wr.observe(t);
				}))),
				I();
		})),
		mr && !dr && Mr.observe(mr),
		Mr.observe(t));
	let gr,
		yr = dr ? getBoundingClientRect(e) : null;
	dr && xr();
	function xr() {
		const vr = getBoundingClientRect(e);
		yr && !rectsAreEqual(yr, vr) && I(), (yr = vr), (gr = requestAnimationFrame(xr));
	}
	return (
		I(),
		() => {
			var vr;
			_r.forEach((Sr) => {
				tr && Sr.removeEventListener('scroll', I), rr && Sr.removeEventListener('resize', I);
			}),
				fr == null || fr(),
				(vr = Mr) == null || vr.disconnect(),
				(Mr = null),
				dr && cancelAnimationFrame(gr);
		}
	);
}
const offset = offset$1,
	shift = shift$1,
	flip = flip$1,
	size = size$1,
	arrow = arrow$1,
	computePosition = (e, t, I) => {
		const B = new Map(),
			tr = { platform, ...I },
			rr = { ...tr.platform, _c: B };
		return computePosition$1(e, t, { ...tr, platform: rr });
	},
	defaultConfig = {
		strategy: 'absolute',
		placement: 'top',
		gutter: 5,
		flip: !0,
		sameWidth: !1,
		overflowPadding: 8
	},
	ARROW_TRANSFORM = {
		bottom: 'rotate(45deg)',
		left: 'rotate(135deg)',
		top: 'rotate(225deg)',
		right: 'rotate(315deg)'
	};
function useFloating(e, t, I = {}) {
	if (!t || !e || I === null) return { destroy: noop };
	const B = { ...defaultConfig, ...I },
		tr = t.querySelector('[data-arrow=true]'),
		rr = [];
	B.flip && rr.push(flip({ boundary: B.boundary, padding: B.overflowPadding }));
	const ir = isHTMLElement$1(tr) ? tr.offsetHeight / 2 : 0;
	if (B.gutter || B.offset) {
		const dr = B.gutter ? { mainAxis: B.gutter } : B.offset;
		(dr == null ? void 0 : dr.mainAxis) != null && (dr.mainAxis += ir), rr.push(offset(dr));
	}
	rr.push(shift({ boundary: B.boundary, crossAxis: B.overlap, padding: B.overflowPadding })),
		tr && rr.push(arrow({ element: tr, padding: 8 })),
		rr.push(
			size({
				padding: B.overflowPadding,
				apply({ rects: dr, availableHeight: mr, availableWidth: _r }) {
					B.sameWidth &&
						Object.assign(t.style, {
							width: `${Math.round(dr.reference.width)}px`,
							minWidth: 'unset'
						}),
						B.fitViewport && Object.assign(t.style, { maxWidth: `${_r}px`, maxHeight: `${mr}px` });
				}
			})
		);
	function lr() {
		if (!e || !t) return;
		const { placement: dr, strategy: mr } = B;
		computePosition(e, t, { placement: dr, middleware: rr, strategy: mr }).then((_r) => {
			const fr = Math.round(_r.x),
				hr = Math.round(_r.y);
			if (
				(Object.assign(t.style, { position: B.strategy, top: `${hr}px`, left: `${fr}px` }),
				isHTMLElement$1(tr) && _r.middlewareData.arrow)
			) {
				const { x: Mr, y: gr } = _r.middlewareData.arrow,
					yr = _r.placement.split('-')[0];
				Object.assign(tr.style, {
					position: 'absolute',
					left: Mr != null ? `${Mr}px` : '',
					top: gr != null ? `${gr}px` : '',
					[yr]: `calc(100% - ${ir}px)`,
					transform: ARROW_TRANSFORM[yr],
					backgroundColor: 'inherit',
					zIndex: 'inherit'
				});
			}
			return _r;
		});
	}
	return Object.assign(t.style, { position: B.strategy }), { destroy: autoUpdate(e, t, lr) };
}
const usePortal = (e, t = 'body') => {
		let I;
		if (!isHTMLElement$1(t) && typeof t != 'string') return { destroy: noop };
		async function B(rr) {
			if (((t = rr), typeof t == 'string')) {
				if (
					((I = document.querySelector(t)),
					I === null && (await tick(), (I = document.querySelector(t))),
					I === null)
				)
					throw new Error(`No element found matching css selector: "${t}"`);
			} else if (t instanceof HTMLElement) I = t;
			else
				throw new TypeError(
					`Unknown portal target type: ${t === null ? 'null' : typeof t}. Allowed types: string (CSS selector) or HTMLElement.`
				);
			(e.dataset.portal = ''), I.appendChild(e), (e.hidden = !1);
		}
		function tr() {
			e.remove();
		}
		return B(t), { update: B, destroy: tr };
	},
	defaults = {
		positioning: { placement: 'bottom' },
		arrowSize: 8,
		defaultOpen: !1,
		closeOnPointerDown: !0,
		openDelay: 1e3,
		closeDelay: 0,
		forceVisible: !1,
		portal: 'body',
		closeOnEscape: !0,
		disableHoverableContent: !1,
		group: void 0
	},
	{ name } = createElHelpers('tooltip'),
	groupMap = new Map(),
	tooltipIdParts = ['trigger', 'content'];
function createTooltip(e) {
	const t = { ...defaults, ...e },
		I = toWritableStores(omit(t, 'open', 'ids')),
		{
			positioning: B,
			arrowSize: tr,
			closeOnPointerDown: rr,
			openDelay: ir,
			closeDelay: lr,
			forceVisible: dr,
			portal: mr,
			closeOnEscape: _r,
			disableHoverableContent: fr,
			group: hr
		} = I,
		Mr = t.open ?? writable(t.defaultOpen),
		gr = overridable(Mr, t == null ? void 0 : t.onOpenChange),
		yr = writable(null),
		xr = toWritableStores({ ...generateIds(tooltipIdParts), ...t.ids });
	let vr = !1;
	const Sr = (Dr) => (isBrowser$1 ? document.getElementById(get_store_value(xr[Dr])) : null);
	let wr = null,
		br = null;
	function Fr(Dr) {
		br && (window.clearTimeout(br), (br = null)),
			wr ||
				(wr = window.setTimeout(() => {
					gr.set(!0), yr.update((zr) => zr ?? Dr), (wr = null);
				}, get_store_value(ir)));
	}
	function Ir(Dr) {
		if ((wr && (window.clearTimeout(wr), (wr = null)), Dr && es)) {
			yr.set('pointer');
			return;
		}
		br ||
			(br = window.setTimeout(() => {
				gr.set(!1), yr.set(null), Dr && (vr = !1), (br = null);
			}, get_store_value(lr)));
	}
	const kr = derived([gr, dr], ([Dr, zr]) => Dr || zr),
		Or = builder(name('trigger'), {
			stores: [xr.content, xr.trigger, gr],
			returned: ([Dr, zr, Jr]) => ({
				'aria-describedby': Dr,
				id: zr,
				'data-state': Jr ? 'open' : 'closed'
			}),
			action: (Dr) => {
				const zr = (Qr) => {
					get_store_value(_r) &&
						Qr.key === kbd.ESCAPE &&
						(wr && (window.clearTimeout(wr), (wr = null)), gr.set(!1));
				};
				return {
					destroy: executeCallbacks(
						addMeltEventListener(Dr, 'pointerdown', () => {
							get_store_value(rr) &&
								(gr.set(!1), (vr = !0), wr && (window.clearTimeout(wr), (wr = null)));
						}),
						addMeltEventListener(Dr, 'pointerenter', (Qr) => {
							isTouch(Qr) || Fr('pointer');
						}),
						addMeltEventListener(Dr, 'pointerleave', (Qr) => {
							isTouch(Qr) || (wr && (window.clearTimeout(wr), (wr = null)));
						}),
						addMeltEventListener(Dr, 'focus', () => {
							vr || Fr('focus');
						}),
						addMeltEventListener(Dr, 'blur', () => Ir(!0)),
						addMeltEventListener(Dr, 'keydown', zr),
						addEventListener$1(document, 'keydown', zr)
					)
				};
			}
		}),
		Lr = builder(name('content'), {
			stores: [kr, gr, mr, xr.content],
			returned: ([Dr, zr, Jr, Qr]) => ({
				role: 'tooltip',
				hidden: Dr ? void 0 : !0,
				tabindex: -1,
				style: styleToString({ display: Dr ? void 0 : 'none' }),
				id: Qr,
				'data-portal': Jr ? '' : void 0,
				'data-state': zr ? 'open' : 'closed'
			}),
			action: (Dr) => {
				let zr = noop,
					Jr = noop;
				const Qr = effect([kr, B, mr], ([rs, ss, ns]) => {
						const os = Sr('trigger');
						if (!rs || !os) {
							Jr(), zr();
							return;
						}
						if (((zr = useFloating(os, Dr, ss).destroy), !ns)) {
							Jr();
							return;
						}
						const as = getPortalDestination(Dr, ns);
						if (as) {
							const ds = usePortal(Dr, as);
							ds && ds.destroy && (Jr = ds.destroy);
						}
					}),
					ts = executeCallbacks(
						addMeltEventListener(Dr, 'pointerenter', () => Fr('pointer')),
						addMeltEventListener(Dr, 'pointerdown', () => Fr('pointer'))
					);
				return {
					destroy() {
						ts(), Jr(), zr(), Qr();
					}
				};
			}
		}),
		Gr = builder(name('arrow'), {
			stores: tr,
			returned: (Dr) => ({
				'data-arrow': !0,
				style: styleToString({
					position: 'absolute',
					width: `var(--arrow-size, ${Dr}px)`,
					height: `var(--arrow-size, ${Dr}px)`
				})
			})
		});
	let es = !1;
	return (
		effect(gr, (Dr) => {
			const zr = get_store_value(hr);
			if (zr === void 0 || zr === !1) return;
			if (!Dr) {
				groupMap.get(zr) === gr && groupMap.delete(zr);
				return;
			}
			const Jr = groupMap.get(zr);
			Jr == null || Jr.set(!1), groupMap.set(zr, gr);
		}),
		effect([gr, yr], ([Dr, zr]) => {
			if (!(!Dr || !isBrowser$1))
				return executeCallbacks(
					addEventListener$1(document, 'mousemove', (Jr) => {
						const Qr = Sr('content'),
							ts = Sr('trigger');
						if (!Qr || !ts) return;
						const rs = get_store_value(fr) ? [ts] : [ts, Qr],
							ss = makeHullFromElements(rs);
						(es = pointInPolygon({ x: Jr.clientX, y: Jr.clientY }, ss)),
							zr === 'pointer' && (es || Ir());
					})
				);
		}),
		{ ids: xr, elements: { trigger: Or, content: Lr, arrow: Gr }, states: { open: gr }, options: I }
	);
}
function removeUndefined(e) {
	const t = {};
	for (const I in e) {
		const B = e[I];
		B !== void 0 && (t[I] = B);
	}
	return t;
}
function getOptionUpdater(e) {
	return function (t, I) {
		if (I === void 0) return;
		const B = e[t];
		B && B.set(I);
	};
}
function getPositioningUpdater(e) {
	return (t = {}) => updatePositioning$1(e, t);
}
function updatePositioning$1(e, t) {
	const B = {
		...{
			side: 'bottom',
			align: 'center',
			sideOffset: 0,
			alignOffset: 0,
			sameWidth: !1,
			avoidCollisions: !0,
			collisionPadding: 8,
			fitViewport: !1,
			strategy: 'absolute',
			overlap: !1
		},
		...t
	};
	e.update((tr) => ({
		...tr,
		placement: joinPlacement(B.side, B.align),
		offset: { ...tr.offset, mainAxis: B.sideOffset, crossAxis: B.alignOffset },
		gutter: 0,
		sameWidth: B.sameWidth,
		flip: B.avoidCollisions,
		overflowPadding: B.collisionPadding,
		boundary: B.collisionBoundary,
		fitViewport: B.fitViewport,
		strategy: B.strategy,
		overlap: B.overlap
	}));
}
function joinPlacement(e, t) {
	return t === 'center' ? e : `${e}-${t}`;
}
function getTooltipData() {
	return { NAME: 'tooltip', PARTS: ['arrow', 'content', 'trigger'] };
}
function setCtx(e) {
	const { NAME: t, PARTS: I } = getTooltipData(),
		B = createBitAttrs(t, I),
		tr = {
			...createTooltip({
				positioning: { placement: 'top', gutter: 0 },
				openDelay: 700,
				...removeUndefined(e),
				forceVisible: !0
			}),
			getAttrs: B
		};
	return setContext(t, tr), { ...tr, updateOption: getOptionUpdater(tr.options) };
}
function getCtx() {
	const { NAME: e } = getTooltipData();
	return getContext(e);
}
function setArrow(e = 8) {
	const t = getCtx();
	return t.options.arrowSize.set(e), t;
}
function updatePositioning(e) {
	const I = { ...{ side: 'top', align: 'center', sideOffset: 1 }, ...e },
		{
			options: { positioning: B }
		} = getCtx();
	getPositioningUpdater(B)({ ...I });
}
const get_default_slot_changes$3 = (e) => ({ ids: e & 1 }),
	get_default_slot_context$3 = (e) => ({ ids: e[0] });
function create_fragment$6(e) {
	let t;
	const I = e[12].default,
		B = create_slot(I, e, e[11], get_default_slot_context$3);
	return {
		c() {
			B && B.c();
		},
		l(tr) {
			B && B.l(tr);
		},
		m(tr, rr) {
			B && B.m(tr, rr), (t = !0);
		},
		p(tr, [rr]) {
			B &&
				B.p &&
				(!t || rr & 2049) &&
				update_slot_base(
					B,
					I,
					tr,
					tr[11],
					t
						? get_slot_changes(I, tr[11], rr, get_default_slot_changes$3)
						: get_all_dirty_from_scope(tr[11]),
					get_default_slot_context$3
				);
		},
		i(tr) {
			t || (transition_in(B, tr), (t = !0));
		},
		o(tr) {
			transition_out(B, tr), (t = !1);
		},
		d(tr) {
			B && B.d(tr);
		}
	};
}
function instance$6(e, t, I) {
	let B,
		{ $$slots: tr = {}, $$scope: rr } = t,
		{ closeOnEscape: ir = void 0 } = t,
		{ portal: lr = void 0 } = t,
		{ closeOnPointerDown: dr = void 0 } = t,
		{ openDelay: mr = void 0 } = t,
		{ closeDelay: _r = void 0 } = t,
		{ open: fr = void 0 } = t,
		{ onOpenChange: hr = void 0 } = t,
		{ disableHoverableContent: Mr = void 0 } = t,
		{ group: gr = void 0 } = t;
	const {
			states: { open: yr },
			updateOption: xr,
			ids: vr
		} = setCtx({
			closeOnEscape: ir,
			portal: lr,
			closeOnPointerDown: dr,
			openDelay: mr,
			closeDelay: _r,
			forceVisible: !0,
			defaultOpen: fr,
			disableHoverableContent: Mr,
			group: gr,
			onOpenChange: ({ next: wr }) => (fr !== wr && (hr == null || hr(wr), I(2, (fr = wr))), wr),
			positioning: { gutter: 0, offset: { mainAxis: 1 } }
		}),
		Sr = derived([vr.content, vr.trigger], ([wr, br]) => ({ content: wr, trigger: br }));
	return (
		component_subscribe(e, Sr, (wr) => I(0, (B = wr))),
		(e.$$set = (wr) => {
			'closeOnEscape' in wr && I(3, (ir = wr.closeOnEscape)),
				'portal' in wr && I(4, (lr = wr.portal)),
				'closeOnPointerDown' in wr && I(5, (dr = wr.closeOnPointerDown)),
				'openDelay' in wr && I(6, (mr = wr.openDelay)),
				'closeDelay' in wr && I(7, (_r = wr.closeDelay)),
				'open' in wr && I(2, (fr = wr.open)),
				'onOpenChange' in wr && I(8, (hr = wr.onOpenChange)),
				'disableHoverableContent' in wr && I(9, (Mr = wr.disableHoverableContent)),
				'group' in wr && I(10, (gr = wr.group)),
				'$$scope' in wr && I(11, (rr = wr.$$scope));
		}),
		(e.$$.update = () => {
			e.$$.dirty & 4 && fr !== void 0 && yr.set(fr),
				e.$$.dirty & 8 && xr('closeOnEscape', ir),
				e.$$.dirty & 16 && xr('portal', lr),
				e.$$.dirty & 32 && xr('closeOnPointerDown', dr),
				e.$$.dirty & 64 && xr('openDelay', mr),
				e.$$.dirty & 128 && xr('closeDelay', _r),
				e.$$.dirty & 1024 && xr('group', gr),
				e.$$.dirty & 512 && xr('disableHoverableContent', Mr);
		}),
		[B, Sr, fr, ir, lr, dr, mr, _r, hr, Mr, gr, rr, tr]
	);
}
class Tooltip extends SvelteComponent {
	constructor(t) {
		super(),
			init(this, t, instance$6, create_fragment$6, safe_not_equal, {
				closeOnEscape: 3,
				portal: 4,
				closeOnPointerDown: 5,
				openDelay: 6,
				closeDelay: 7,
				open: 2,
				onOpenChange: 8,
				disableHoverableContent: 9,
				group: 10
			});
	}
}
const get_default_slot_changes_5 = (e) => ({ builder: e[0] & 256 }),
	get_default_slot_context_5 = (e) => ({ builder: e[8] }),
	get_default_slot_changes_4 = (e) => ({ builder: e[0] & 256 }),
	get_default_slot_context_4 = (e) => ({ builder: e[8] }),
	get_default_slot_changes_3 = (e) => ({ builder: e[0] & 256 }),
	get_default_slot_context_3 = (e) => ({ builder: e[8] }),
	get_default_slot_changes_2 = (e) => ({ builder: e[0] & 256 }),
	get_default_slot_context_2 = (e) => ({ builder: e[8] }),
	get_default_slot_changes_1$1 = (e) => ({ builder: e[0] & 256 }),
	get_default_slot_context_1$1 = (e) => ({ builder: e[8] }),
	get_default_slot_changes$2 = (e) => ({ builder: e[0] & 256 }),
	get_default_slot_context$2 = (e) => ({ builder: e[8] });
function create_if_block_5(e) {
	let t, I, B, tr;
	const rr = e[28].default,
		ir = create_slot(rr, e, e[27], get_default_slot_context_5);
	let lr = [e[8], e[13]],
		dr = {};
	for (let mr = 0; mr < lr.length; mr += 1) dr = assign(dr, lr[mr]);
	return {
		c() {
			(t = element('div')), ir && ir.c(), this.h();
		},
		l(mr) {
			t = claim_element(mr, 'DIV', {});
			var _r = children(t);
			ir && ir.l(_r), _r.forEach(detach), this.h();
		},
		h() {
			set_attributes(t, dr);
		},
		m(mr, _r) {
			insert_hydration(mr, t, _r),
				ir && ir.m(t, null),
				e[33](t),
				(I = !0),
				B ||
					((tr = [
						action_destroyer(e[8].action(t)),
						listen(t, 'm-pointerdown', e[12]),
						listen(t, 'm-pointerenter', e[12])
					]),
					(B = !0));
		},
		p(mr, _r) {
			ir &&
				ir.p &&
				(!I || _r[0] & 134217984) &&
				update_slot_base(
					ir,
					rr,
					mr,
					mr[27],
					I
						? get_slot_changes(rr, mr[27], _r, get_default_slot_changes_5)
						: get_all_dirty_from_scope(mr[27]),
					get_default_slot_context_5
				),
				set_attributes(
					t,
					(dr = get_spread_update(lr, [_r[0] & 256 && mr[8], _r[0] & 8192 && mr[13]]))
				);
		},
		i(mr) {
			I || (transition_in(ir, mr), (I = !0));
		},
		o(mr) {
			transition_out(ir, mr), (I = !1);
		},
		d(mr) {
			mr && detach(t), ir && ir.d(mr), e[33](null), (B = !1), run_all(tr);
		}
	};
}
function create_if_block_4(e) {
	let t, I, B, tr, rr;
	const ir = e[28].default,
		lr = create_slot(ir, e, e[27], get_default_slot_context_4);
	let dr = [e[8], e[13]],
		mr = {};
	for (let _r = 0; _r < dr.length; _r += 1) mr = assign(mr, dr[_r]);
	return {
		c() {
			(t = element('div')), lr && lr.c(), this.h();
		},
		l(_r) {
			t = claim_element(_r, 'DIV', {});
			var fr = children(t);
			lr && lr.l(fr), fr.forEach(detach), this.h();
		},
		h() {
			set_attributes(t, mr);
		},
		m(_r, fr) {
			insert_hydration(_r, t, fr),
				lr && lr.m(t, null),
				e[32](t),
				(B = !0),
				tr ||
					((rr = [
						action_destroyer(e[8].action(t)),
						listen(t, 'm-pointerdown', e[12]),
						listen(t, 'm-pointerenter', e[12])
					]),
					(tr = !0));
		},
		p(_r, fr) {
			(e = _r),
				lr &&
					lr.p &&
					(!B || fr[0] & 134217984) &&
					update_slot_base(
						lr,
						ir,
						e,
						e[27],
						B
							? get_slot_changes(ir, e[27], fr, get_default_slot_changes_4)
							: get_all_dirty_from_scope(e[27]),
						get_default_slot_context_4
					),
				set_attributes(
					t,
					(mr = get_spread_update(dr, [fr[0] & 256 && e[8], fr[0] & 8192 && e[13]]))
				);
		},
		i(_r) {
			B || (transition_in(lr, _r), I && I.end(1), (B = !0));
		},
		o(_r) {
			transition_out(lr, _r), _r && (I = create_out_transition(t, e[5], e[6])), (B = !1);
		},
		d(_r) {
			_r && detach(t), lr && lr.d(_r), e[32](null), _r && I && I.end(), (tr = !1), run_all(rr);
		}
	};
}
function create_if_block_3(e) {
	let t, I, B, tr, rr;
	const ir = e[28].default,
		lr = create_slot(ir, e, e[27], get_default_slot_context_3);
	let dr = [e[8], e[13]],
		mr = {};
	for (let _r = 0; _r < dr.length; _r += 1) mr = assign(mr, dr[_r]);
	return {
		c() {
			(t = element('div')), lr && lr.c(), this.h();
		},
		l(_r) {
			t = claim_element(_r, 'DIV', {});
			var fr = children(t);
			lr && lr.l(fr), fr.forEach(detach), this.h();
		},
		h() {
			set_attributes(t, mr);
		},
		m(_r, fr) {
			insert_hydration(_r, t, fr),
				lr && lr.m(t, null),
				e[31](t),
				(B = !0),
				tr ||
					((rr = [
						action_destroyer(e[8].action(t)),
						listen(t, 'm-pointerdown', e[12]),
						listen(t, 'm-pointerenter', e[12])
					]),
					(tr = !0));
		},
		p(_r, fr) {
			(e = _r),
				lr &&
					lr.p &&
					(!B || fr[0] & 134217984) &&
					update_slot_base(
						lr,
						ir,
						e,
						e[27],
						B
							? get_slot_changes(ir, e[27], fr, get_default_slot_changes_3)
							: get_all_dirty_from_scope(e[27]),
						get_default_slot_context_3
					),
				set_attributes(
					t,
					(mr = get_spread_update(dr, [fr[0] & 256 && e[8], fr[0] & 8192 && e[13]]))
				);
		},
		i(_r) {
			B ||
				(transition_in(lr, _r),
				_r &&
					(I ||
						add_render_callback(() => {
							(I = create_in_transition(t, e[3], e[4])), I.start();
						})),
				(B = !0));
		},
		o(_r) {
			transition_out(lr, _r), (B = !1);
		},
		d(_r) {
			_r && detach(t), lr && lr.d(_r), e[31](null), (tr = !1), run_all(rr);
		}
	};
}
function create_if_block_2(e) {
	let t, I, B, tr, rr, ir;
	const lr = e[28].default,
		dr = create_slot(lr, e, e[27], get_default_slot_context_2);
	let mr = [e[8], e[13]],
		_r = {};
	for (let fr = 0; fr < mr.length; fr += 1) _r = assign(_r, mr[fr]);
	return {
		c() {
			(t = element('div')), dr && dr.c(), this.h();
		},
		l(fr) {
			t = claim_element(fr, 'DIV', {});
			var hr = children(t);
			dr && dr.l(hr), hr.forEach(detach), this.h();
		},
		h() {
			set_attributes(t, _r);
		},
		m(fr, hr) {
			insert_hydration(fr, t, hr),
				dr && dr.m(t, null),
				e[30](t),
				(tr = !0),
				rr ||
					((ir = [
						action_destroyer(e[8].action(t)),
						listen(t, 'm-pointerdown', e[12]),
						listen(t, 'm-pointerenter', e[12])
					]),
					(rr = !0));
		},
		p(fr, hr) {
			(e = fr),
				dr &&
					dr.p &&
					(!tr || hr[0] & 134217984) &&
					update_slot_base(
						dr,
						lr,
						e,
						e[27],
						tr
							? get_slot_changes(lr, e[27], hr, get_default_slot_changes_2)
							: get_all_dirty_from_scope(e[27]),
						get_default_slot_context_2
					),
				set_attributes(
					t,
					(_r = get_spread_update(mr, [hr[0] & 256 && e[8], hr[0] & 8192 && e[13]]))
				);
		},
		i(fr) {
			tr ||
				(transition_in(dr, fr),
				fr &&
					add_render_callback(() => {
						tr && (B && B.end(1), (I = create_in_transition(t, e[3], e[4])), I.start());
					}),
				(tr = !0));
		},
		o(fr) {
			transition_out(dr, fr),
				I && I.invalidate(),
				fr && (B = create_out_transition(t, e[5], e[6])),
				(tr = !1);
		},
		d(fr) {
			fr && detach(t), dr && dr.d(fr), e[30](null), fr && B && B.end(), (rr = !1), run_all(ir);
		}
	};
}
function create_if_block_1(e) {
	let t, I, B, tr, rr;
	const ir = e[28].default,
		lr = create_slot(ir, e, e[27], get_default_slot_context_1$1);
	let dr = [e[8], e[13]],
		mr = {};
	for (let _r = 0; _r < dr.length; _r += 1) mr = assign(mr, dr[_r]);
	return {
		c() {
			(t = element('div')), lr && lr.c(), this.h();
		},
		l(_r) {
			t = claim_element(_r, 'DIV', {});
			var fr = children(t);
			lr && lr.l(fr), fr.forEach(detach), this.h();
		},
		h() {
			set_attributes(t, mr);
		},
		m(_r, fr) {
			insert_hydration(_r, t, fr),
				lr && lr.m(t, null),
				e[29](t),
				(B = !0),
				tr ||
					((rr = [
						action_destroyer(e[8].action(t)),
						listen(t, 'm-pointerdown', e[12]),
						listen(t, 'm-pointerenter', e[12])
					]),
					(tr = !0));
		},
		p(_r, fr) {
			(e = _r),
				lr &&
					lr.p &&
					(!B || fr[0] & 134217984) &&
					update_slot_base(
						lr,
						ir,
						e,
						e[27],
						B
							? get_slot_changes(ir, e[27], fr, get_default_slot_changes_1$1)
							: get_all_dirty_from_scope(e[27]),
						get_default_slot_context_1$1
					),
				set_attributes(
					t,
					(mr = get_spread_update(dr, [fr[0] & 256 && e[8], fr[0] & 8192 && e[13]]))
				);
		},
		i(_r) {
			B ||
				(transition_in(lr, _r),
				_r &&
					add_render_callback(() => {
						B && (I || (I = create_bidirectional_transition(t, e[1], e[2], !0)), I.run(1));
					}),
				(B = !0));
		},
		o(_r) {
			transition_out(lr, _r),
				_r && (I || (I = create_bidirectional_transition(t, e[1], e[2], !1)), I.run(0)),
				(B = !1);
		},
		d(_r) {
			_r && detach(t), lr && lr.d(_r), e[29](null), _r && I && I.end(), (tr = !1), run_all(rr);
		}
	};
}
function create_if_block$3(e) {
	let t;
	const I = e[28].default,
		B = create_slot(I, e, e[27], get_default_slot_context$2);
	return {
		c() {
			B && B.c();
		},
		l(tr) {
			B && B.l(tr);
		},
		m(tr, rr) {
			B && B.m(tr, rr), (t = !0);
		},
		p(tr, rr) {
			B &&
				B.p &&
				(!t || rr[0] & 134217984) &&
				update_slot_base(
					B,
					I,
					tr,
					tr[27],
					t
						? get_slot_changes(I, tr[27], rr, get_default_slot_changes$2)
						: get_all_dirty_from_scope(tr[27]),
					get_default_slot_context$2
				);
		},
		i(tr) {
			t || (transition_in(B, tr), (t = !0));
		},
		o(tr) {
			transition_out(B, tr), (t = !1);
		},
		d(tr) {
			B && B.d(tr);
		}
	};
}
function create_fragment$5(e) {
	let t, I, B, tr;
	const rr = [
			create_if_block$3,
			create_if_block_1,
			create_if_block_2,
			create_if_block_3,
			create_if_block_4,
			create_if_block_5
		],
		ir = [];
	function lr(dr, mr) {
		return dr[7] && dr[9]
			? 0
			: dr[1] && dr[9]
				? 1
				: dr[3] && dr[5] && dr[9]
					? 2
					: dr[3] && dr[9]
						? 3
						: dr[5] && dr[9]
							? 4
							: dr[9]
								? 5
								: -1;
	}
	return (
		~(t = lr(e)) && (I = ir[t] = rr[t](e)),
		{
			c() {
				I && I.c(), (B = empty());
			},
			l(dr) {
				I && I.l(dr), (B = empty());
			},
			m(dr, mr) {
				~t && ir[t].m(dr, mr), insert_hydration(dr, B, mr), (tr = !0);
			},
			p(dr, mr) {
				let _r = t;
				(t = lr(dr)),
					t === _r
						? ~t && ir[t].p(dr, mr)
						: (I &&
								(group_outros(),
								transition_out(ir[_r], 1, 1, () => {
									ir[_r] = null;
								}),
								check_outros()),
							~t
								? ((I = ir[t]),
									I ? I.p(dr, mr) : ((I = ir[t] = rr[t](dr)), I.c()),
									transition_in(I, 1),
									I.m(B.parentNode, B))
								: (I = null));
			},
			i(dr) {
				tr || (transition_in(I), (tr = !0));
			},
			o(dr) {
				transition_out(I), (tr = !1);
			},
			d(dr) {
				dr && detach(B), ~t && ir[t].d(dr);
			}
		}
	);
}
function instance$5(e, t, I) {
	let B;
	const tr = [
		'transition',
		'transitionConfig',
		'inTransition',
		'inTransitionConfig',
		'outTransition',
		'outTransitionConfig',
		'asChild',
		'id',
		'side',
		'align',
		'sideOffset',
		'alignOffset',
		'collisionPadding',
		'avoidCollisions',
		'collisionBoundary',
		'sameWidth',
		'fitViewport',
		'strategy',
		'overlap',
		'el'
	];
	let rr = compute_rest_props(t, tr),
		ir,
		lr,
		{ $$slots: dr = {}, $$scope: mr } = t,
		{ transition: _r = void 0 } = t,
		{ transitionConfig: fr = void 0 } = t,
		{ inTransition: hr = void 0 } = t,
		{ inTransitionConfig: Mr = void 0 } = t,
		{ outTransition: gr = void 0 } = t,
		{ outTransitionConfig: yr = void 0 } = t,
		{ asChild: xr = !1 } = t,
		{ id: vr = void 0 } = t,
		{ side: Sr = 'top' } = t,
		{ align: wr = 'center' } = t,
		{ sideOffset: br = 0 } = t,
		{ alignOffset: Fr = 0 } = t,
		{ collisionPadding: Ir = 8 } = t,
		{ avoidCollisions: kr = !0 } = t,
		{ collisionBoundary: Or = void 0 } = t,
		{ sameWidth: Lr = !1 } = t,
		{ fitViewport: Gr = !1 } = t,
		{ strategy: es = 'absolute' } = t,
		{ overlap: Dr = !1 } = t,
		{ el: zr = void 0 } = t;
	const {
		elements: { content: Jr },
		states: { open: Qr },
		ids: ts,
		getAttrs: rs
	} = getCtx();
	component_subscribe(e, Jr, ($r) => I(26, (lr = $r))),
		component_subscribe(e, Qr, ($r) => I(9, (ir = $r)));
	const ss = createDispatcher(),
		ns = rs('content');
	function os($r) {
		binding_callbacks[$r ? 'unshift' : 'push'](() => {
			(zr = $r), I(0, zr);
		});
	}
	function ls($r) {
		binding_callbacks[$r ? 'unshift' : 'push'](() => {
			(zr = $r), I(0, zr);
		});
	}
	function as($r) {
		binding_callbacks[$r ? 'unshift' : 'push'](() => {
			(zr = $r), I(0, zr);
		});
	}
	function ds($r) {
		binding_callbacks[$r ? 'unshift' : 'push'](() => {
			(zr = $r), I(0, zr);
		});
	}
	function Ua($r) {
		binding_callbacks[$r ? 'unshift' : 'push'](() => {
			(zr = $r), I(0, zr);
		});
	}
	return (
		(e.$$set = ($r) => {
			(t = assign(assign({}, t), exclude_internal_props($r))),
				I(13, (rr = compute_rest_props(t, tr))),
				'transition' in $r && I(1, (_r = $r.transition)),
				'transitionConfig' in $r && I(2, (fr = $r.transitionConfig)),
				'inTransition' in $r && I(3, (hr = $r.inTransition)),
				'inTransitionConfig' in $r && I(4, (Mr = $r.inTransitionConfig)),
				'outTransition' in $r && I(5, (gr = $r.outTransition)),
				'outTransitionConfig' in $r && I(6, (yr = $r.outTransitionConfig)),
				'asChild' in $r && I(7, (xr = $r.asChild)),
				'id' in $r && I(14, (vr = $r.id)),
				'side' in $r && I(15, (Sr = $r.side)),
				'align' in $r && I(16, (wr = $r.align)),
				'sideOffset' in $r && I(17, (br = $r.sideOffset)),
				'alignOffset' in $r && I(18, (Fr = $r.alignOffset)),
				'collisionPadding' in $r && I(19, (Ir = $r.collisionPadding)),
				'avoidCollisions' in $r && I(20, (kr = $r.avoidCollisions)),
				'collisionBoundary' in $r && I(21, (Or = $r.collisionBoundary)),
				'sameWidth' in $r && I(22, (Lr = $r.sameWidth)),
				'fitViewport' in $r && I(23, (Gr = $r.fitViewport)),
				'strategy' in $r && I(24, (es = $r.strategy)),
				'overlap' in $r && I(25, (Dr = $r.overlap)),
				'el' in $r && I(0, (zr = $r.el)),
				'$$scope' in $r && I(27, (mr = $r.$$scope));
		}),
		(e.$$.update = () => {
			e.$$.dirty[0] & 16384 && vr && ts.content.set(vr),
				e.$$.dirty[0] & 67108864 && I(8, (B = lr)),
				e.$$.dirty[0] & 256 && Object.assign(B, ns),
				e.$$.dirty[0] & 67076608 &&
					ir &&
					updatePositioning({
						side: Sr,
						align: wr,
						sideOffset: br,
						alignOffset: Fr,
						collisionPadding: Ir,
						avoidCollisions: kr,
						collisionBoundary: Or,
						sameWidth: Lr,
						fitViewport: Gr,
						strategy: es,
						overlap: Dr
					});
		}),
		[
			zr,
			_r,
			fr,
			hr,
			Mr,
			gr,
			yr,
			xr,
			B,
			ir,
			Jr,
			Qr,
			ss,
			rr,
			vr,
			Sr,
			wr,
			br,
			Fr,
			Ir,
			kr,
			Or,
			Lr,
			Gr,
			es,
			Dr,
			lr,
			mr,
			dr,
			os,
			ls,
			as,
			ds,
			Ua
		]
	);
}
let Tooltip_content$1 = class extends SvelteComponent {
	constructor(t) {
		super(),
			init(
				this,
				t,
				instance$5,
				create_fragment$5,
				safe_not_equal,
				{
					transition: 1,
					transitionConfig: 2,
					inTransition: 3,
					inTransitionConfig: 4,
					outTransition: 5,
					outTransitionConfig: 6,
					asChild: 7,
					id: 14,
					side: 15,
					align: 16,
					sideOffset: 17,
					alignOffset: 18,
					collisionPadding: 19,
					avoidCollisions: 20,
					collisionBoundary: 21,
					sameWidth: 22,
					fitViewport: 23,
					strategy: 24,
					overlap: 25,
					el: 0
				},
				null,
				[-1, -1]
			);
	}
};
const get_default_slot_changes_1 = (e) => ({ builder: e & 4 }),
	get_default_slot_context_1 = (e) => ({ builder: e[2] }),
	get_default_slot_changes$1 = (e) => ({ builder: e & 4 }),
	get_default_slot_context$1 = (e) => ({ builder: e[2] });
function create_else_block$1(e) {
	let t, I, B, tr;
	const rr = e[9].default,
		ir = create_slot(rr, e, e[8], get_default_slot_context_1);
	let lr = [e[2], { type: 'button' }, e[5]],
		dr = {};
	for (let mr = 0; mr < lr.length; mr += 1) dr = assign(dr, lr[mr]);
	return {
		c() {
			(t = element('button')), ir && ir.c(), this.h();
		},
		l(mr) {
			t = claim_element(mr, 'BUTTON', { type: !0 });
			var _r = children(t);
			ir && ir.l(_r), _r.forEach(detach), this.h();
		},
		h() {
			set_attributes(t, dr);
		},
		m(mr, _r) {
			insert_hydration(mr, t, _r),
				ir && ir.m(t, null),
				t.autofocus && t.focus(),
				e[10](t),
				(I = !0),
				B ||
					((tr = [
						action_destroyer(e[2].action(t)),
						listen(t, 'm-blur', e[4]),
						listen(t, 'm-focus', e[4]),
						listen(t, 'm-keydown', e[4]),
						listen(t, 'm-pointerdown', e[4]),
						listen(t, 'm-pointerenter', e[4]),
						listen(t, 'm-pointerleave', e[4])
					]),
					(B = !0));
		},
		p(mr, _r) {
			ir &&
				ir.p &&
				(!I || _r & 260) &&
				update_slot_base(
					ir,
					rr,
					mr,
					mr[8],
					I
						? get_slot_changes(rr, mr[8], _r, get_default_slot_changes_1)
						: get_all_dirty_from_scope(mr[8]),
					get_default_slot_context_1
				),
				set_attributes(
					t,
					(dr = get_spread_update(lr, [_r & 4 && mr[2], { type: 'button' }, _r & 32 && mr[5]]))
				);
		},
		i(mr) {
			I || (transition_in(ir, mr), (I = !0));
		},
		o(mr) {
			transition_out(ir, mr), (I = !1);
		},
		d(mr) {
			mr && detach(t), ir && ir.d(mr), e[10](null), (B = !1), run_all(tr);
		}
	};
}
function create_if_block$2(e) {
	let t;
	const I = e[9].default,
		B = create_slot(I, e, e[8], get_default_slot_context$1);
	return {
		c() {
			B && B.c();
		},
		l(tr) {
			B && B.l(tr);
		},
		m(tr, rr) {
			B && B.m(tr, rr), (t = !0);
		},
		p(tr, rr) {
			B &&
				B.p &&
				(!t || rr & 260) &&
				update_slot_base(
					B,
					I,
					tr,
					tr[8],
					t
						? get_slot_changes(I, tr[8], rr, get_default_slot_changes$1)
						: get_all_dirty_from_scope(tr[8]),
					get_default_slot_context$1
				);
		},
		i(tr) {
			t || (transition_in(B, tr), (t = !0));
		},
		o(tr) {
			transition_out(B, tr), (t = !1);
		},
		d(tr) {
			B && B.d(tr);
		}
	};
}
function create_fragment$4(e) {
	let t, I, B, tr;
	const rr = [create_if_block$2, create_else_block$1],
		ir = [];
	function lr(dr, mr) {
		return dr[1] ? 0 : 1;
	}
	return (
		(t = lr(e)),
		(I = ir[t] = rr[t](e)),
		{
			c() {
				I.c(), (B = empty());
			},
			l(dr) {
				I.l(dr), (B = empty());
			},
			m(dr, mr) {
				ir[t].m(dr, mr), insert_hydration(dr, B, mr), (tr = !0);
			},
			p(dr, [mr]) {
				let _r = t;
				(t = lr(dr)),
					t === _r
						? ir[t].p(dr, mr)
						: (group_outros(),
							transition_out(ir[_r], 1, 1, () => {
								ir[_r] = null;
							}),
							check_outros(),
							(I = ir[t]),
							I ? I.p(dr, mr) : ((I = ir[t] = rr[t](dr)), I.c()),
							transition_in(I, 1),
							I.m(B.parentNode, B));
			},
			i(dr) {
				tr || (transition_in(I), (tr = !0));
			},
			o(dr) {
				transition_out(I), (tr = !1);
			},
			d(dr) {
				dr && detach(B), ir[t].d(dr);
			}
		}
	);
}
function instance$4(e, t, I) {
	let B;
	const tr = ['asChild', 'id', 'el'];
	let rr = compute_rest_props(t, tr),
		ir,
		{ $$slots: lr = {}, $$scope: dr } = t,
		{ asChild: mr = !1 } = t,
		{ id: _r = void 0 } = t,
		{ el: fr = void 0 } = t;
	const {
		elements: { trigger: hr },
		ids: Mr,
		getAttrs: gr
	} = getCtx();
	component_subscribe(e, hr, (Sr) => I(7, (ir = Sr)));
	const yr = createDispatcher(),
		xr = gr('trigger');
	function vr(Sr) {
		binding_callbacks[Sr ? 'unshift' : 'push'](() => {
			(fr = Sr), I(0, fr);
		});
	}
	return (
		(e.$$set = (Sr) => {
			(t = assign(assign({}, t), exclude_internal_props(Sr))),
				I(5, (rr = compute_rest_props(t, tr))),
				'asChild' in Sr && I(1, (mr = Sr.asChild)),
				'id' in Sr && I(6, (_r = Sr.id)),
				'el' in Sr && I(0, (fr = Sr.el)),
				'$$scope' in Sr && I(8, (dr = Sr.$$scope));
		}),
		(e.$$.update = () => {
			e.$$.dirty & 64 && _r && Mr.trigger.set(_r),
				e.$$.dirty & 128 && I(2, (B = ir)),
				e.$$.dirty & 4 && Object.assign(B, xr);
		}),
		[fr, mr, B, hr, yr, rr, _r, ir, dr, lr, vr]
	);
}
class Tooltip_trigger extends SvelteComponent {
	constructor(t) {
		super(),
			init(this, t, instance$4, create_fragment$4, safe_not_equal, { asChild: 1, id: 6, el: 0 });
	}
}
const get_default_slot_changes = (e) => ({ builder: e & 4 }),
	get_default_slot_context = (e) => ({ builder: e[2] });
function create_else_block(e) {
	let t,
		I,
		B,
		tr = [e[2], e[4]],
		rr = {};
	for (let ir = 0; ir < tr.length; ir += 1) rr = assign(rr, tr[ir]);
	return {
		c() {
			(t = element('div')), this.h();
		},
		l(ir) {
			(t = claim_element(ir, 'DIV', {})), children(t).forEach(detach), this.h();
		},
		h() {
			set_attributes(t, rr);
		},
		m(ir, lr) {
			insert_hydration(ir, t, lr), e[9](t), I || ((B = action_destroyer(e[2].action(t))), (I = !0));
		},
		p(ir, lr) {
			set_attributes(t, (rr = get_spread_update(tr, [lr & 4 && ir[2], lr & 16 && ir[4]])));
		},
		i: noop$1,
		o: noop$1,
		d(ir) {
			ir && detach(t), e[9](null), (I = !1), B();
		}
	};
}
function create_if_block$1(e) {
	let t;
	const I = e[8].default,
		B = create_slot(I, e, e[7], get_default_slot_context);
	return {
		c() {
			B && B.c();
		},
		l(tr) {
			B && B.l(tr);
		},
		m(tr, rr) {
			B && B.m(tr, rr), (t = !0);
		},
		p(tr, rr) {
			B &&
				B.p &&
				(!t || rr & 132) &&
				update_slot_base(
					B,
					I,
					tr,
					tr[7],
					t
						? get_slot_changes(I, tr[7], rr, get_default_slot_changes)
						: get_all_dirty_from_scope(tr[7]),
					get_default_slot_context
				);
		},
		i(tr) {
			t || (transition_in(B, tr), (t = !0));
		},
		o(tr) {
			transition_out(B, tr), (t = !1);
		},
		d(tr) {
			B && B.d(tr);
		}
	};
}
function create_fragment$3(e) {
	let t, I, B, tr;
	const rr = [create_if_block$1, create_else_block],
		ir = [];
	function lr(dr, mr) {
		return dr[1] ? 0 : 1;
	}
	return (
		(t = lr(e)),
		(I = ir[t] = rr[t](e)),
		{
			c() {
				I.c(), (B = empty());
			},
			l(dr) {
				I.l(dr), (B = empty());
			},
			m(dr, mr) {
				ir[t].m(dr, mr), insert_hydration(dr, B, mr), (tr = !0);
			},
			p(dr, [mr]) {
				let _r = t;
				(t = lr(dr)),
					t === _r
						? ir[t].p(dr, mr)
						: (group_outros(),
							transition_out(ir[_r], 1, 1, () => {
								ir[_r] = null;
							}),
							check_outros(),
							(I = ir[t]),
							I ? I.p(dr, mr) : ((I = ir[t] = rr[t](dr)), I.c()),
							transition_in(I, 1),
							I.m(B.parentNode, B));
			},
			i(dr) {
				tr || (transition_in(I), (tr = !0));
			},
			o(dr) {
				transition_out(I), (tr = !1);
			},
			d(dr) {
				dr && detach(B), ir[t].d(dr);
			}
		}
	);
}
function instance$3(e, t, I) {
	let B;
	const tr = ['size', 'asChild', 'el'];
	let rr = compute_rest_props(t, tr),
		ir,
		{ $$slots: lr = {}, $$scope: dr } = t,
		{ size: mr = 8 } = t,
		{ asChild: _r = !1 } = t,
		{ el: fr = void 0 } = t;
	const {
		elements: { arrow: hr },
		getAttrs: Mr
	} = setArrow(mr);
	component_subscribe(e, hr, (xr) => I(6, (ir = xr)));
	const gr = Mr('arrow');
	function yr(xr) {
		binding_callbacks[xr ? 'unshift' : 'push'](() => {
			(fr = xr), I(0, fr);
		});
	}
	return (
		(e.$$set = (xr) => {
			(t = assign(assign({}, t), exclude_internal_props(xr))),
				I(4, (rr = compute_rest_props(t, tr))),
				'size' in xr && I(5, (mr = xr.size)),
				'asChild' in xr && I(1, (_r = xr.asChild)),
				'el' in xr && I(0, (fr = xr.el)),
				'$$scope' in xr && I(7, (dr = xr.$$scope));
		}),
		(e.$$.update = () => {
			e.$$.dirty & 64 && I(2, (B = ir)), e.$$.dirty & 4 && Object.assign(B, gr);
		}),
		[fr, _r, B, hr, rr, mr, ir, dr, lr, yr]
	);
}
class Tooltip_arrow extends SvelteComponent {
	constructor(t) {
		super(),
			init(this, t, instance$3, create_fragment$3, safe_not_equal, { size: 5, asChild: 1, el: 0 });
	}
}
const createNote = async (e, t) => {
	const I = await db.select().from(entry).where(eq(entry.path, e));
	let B = [];
	I.length === 0
		? (B = await db
				.select()
				.from(entry)
				.where(eq(entry.collectionPath, get_store_value(collection))))
		: (B = await db
				.select()
				.from(entry)
				.where(
					and(eq(entry.parentPath, e), eq(entry.collectionPath, get_store_value(collection)))
				)),
		t || (t = getNextUntitledName(B, 'Untitled', '.md')),
		await db
			.insert(entry)
			.values({
				name: t,
				path: `${e}/${t}`.replace('//', '/'),
				content: '',
				parentPath: e,
				collectionPath: get_store_value(collection)
			}),
		openNote(`${e}/${t}`.replace('//', '/'));
};
async function openNote(e, t = !1) {
	const I = await db.select().from(entry).where(eq(entry.path, e));
	setEditorContent(I[0].content ?? ''),
		activeFile.set(e),
		t || noteHistory.update((B) => (B[B.length - 1] !== e ? [...B, e] : B));
}
const deleteNote = async (e) => {
		await db.delete(entry).where(eq(entry.path, e)), activeFile.set(null);
	},
	renameNote = async (e, t) => {
		t.endsWith('.md') || (t += '.md'), (t = t.replace(/[/\\?%*:|"<>]/g, ''));
		const I = await db.select().from(entry).where(eq(entry.path, e));
		if (
			(await db.select().from(entry).where(eq(entry.parentPath, I[0].parentPath))).some((tr) => {
				var rr;
				return (
					((rr = tr.name) == null ? void 0 : rr.toLowerCase()) === t.toLowerCase() && !tr.isFolder
				);
			})
		)
			throw new Error('Name conflict');
		await db
			.update(entry)
			.set({ name: t, path: `${e.split('/').slice(0, -1).join('/')}/${t}` })
			.where(eq(entry.path, e)),
			activeFile.set(`${e.split('/').slice(0, -1).join('/')}/${t}`);
	},
	saveNote = async (e) => {
		let t = get_store_value(editor).storage.markdown.getMarkdown();
		t = t.replace(/^# .*\n/, '');
		const I = new TextEncoder().encode(t).length;
		await db
			.update(entry)
			.set({ content: t, updatedAt: new Date(), size: I })
			.where(eq(entry.path, e));
	},
	moveNote = async (e, t) => {
		const I = await db.select().from(entry).where(eq(entry.path, t));
		let B = [];
		I.length === 0
			? (B = await db.select().from(entry))
			: (B = await db.select().from(entry).where(eq(entry.parentPath, I[0].path)));
		const tr = e.split('/').pop();
		if (B.some((rr) => rr.name === tr && !rr.isFolder && rr.parentPath === t))
			throw new Error('Name conflict');
		await db
			.update(entry)
			.set({ path: `${t}/${tr}`.replace('//', '/'), parentPath: t })
			.where(eq(entry.path, e)),
			openNote(t + '/' + tr);
	},
	duplicateNote = async (e) => {
		var ir;
		const t = await db.select().from(entry).where(eq(entry.path, e)),
			I = e.split('.').pop(),
			tr = (await db.select().from(entry).where(eq(entry.parentPath, t[0].parentPath))).filter(
				(lr) => {
					var dr;
					return ((dr = lr.name) == null ? void 0 : dr.startsWith(t[0].name)) && !lr.isFolder;
				}
			),
			rr = `${(ir = t[0].name) == null ? void 0 : ir.replace(`.${I}`, '')} (${tr.length}).${I}`;
		await db
			.insert(entry)
			.values({
				name: rr,
				path: `${e.split('/').slice(0, -1).join('/')}/${rr}`,
				parentPath: t[0].parentPath,
				collectionPath: t[0].collectionPath,
				content: t[0].content
			}),
			openNote(`${e.split('/').slice(0, -1).join('/')}/${rr}`);
	},
	getNoteMetadataParams = async (e) => {
		const t = await db.select().from(entry).where(eq(entry.path, e)),
			I = get_store_value(editor).storage.characterCount.words(),
			B = get_store_value(editor).storage.characterCount.characters(),
			tr = calculateReadingTime(I);
		return {
			fileMetadata: { createdAt: t[0].createdAt, modifiedAt: t[0].updatedAt, size: t[0].size ?? 0 },
			editorMetadata: { words: I, characters: B, avgReadingTime: tr }
		};
	};
function create_fragment$2(e) {
	let t,
		I,
		B = e[0].svg + '',
		tr,
		rr,
		ir = [
			{ class: (tr = e[1].class) },
			{ width: '1em' },
			{ height: '1em' },
			{ viewBox: (rr = '0 0 ' + e[0].box + ' ' + e[0].box) },
			e[2]
		],
		lr = {};
	for (let dr = 0; dr < ir.length; dr += 1) lr = assign(lr, ir[dr]);
	return {
		c() {
			(t = svg_element('svg')), (I = new HtmlTagHydration(!0)), this.h();
		},
		l(dr) {
			t = claim_svg_element(dr, 'svg', { class: !0, width: !0, height: !0, viewBox: !0 });
			var mr = children(t);
			(I = claim_html_tag(mr, !0)), mr.forEach(detach), this.h();
		},
		h() {
			(I.a = null), set_svg_attributes(t, lr);
		},
		m(dr, mr) {
			insert_hydration(dr, t, mr), I.m(B, t);
		},
		p(dr, [mr]) {
			set_svg_attributes(
				t,
				(lr = get_spread_update(ir, [
					mr & 2 && tr !== (tr = dr[1].class) && { class: tr },
					{ width: '1em' },
					{ height: '1em' },
					{ viewBox: rr },
					mr & 4 && dr[2]
				]))
			);
		},
		i: noop$1,
		o: noop$1,
		d(dr) {
			dr && detach(t);
		}
	};
}
let icons = {
	moon: {
		box: 20,
		svg: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.60836 1.26638C8.2538 0.9498 7.83912 0.979647 7.58562 1.03502C7.36856 1.08244 7.11781 1.18225 6.8901 1.27289L6.84696 1.29005C6.62712 1.37743 6.41143 1.47279 6.20027 1.57574C5.64752 1.84523 5.12582 2.1668 4.6418 2.53393C2.43057 4.21115 1 6.84546 1 9.8112C1 14.898 5.19962 19 10.3531 19C13.5267 19 16.3348 17.446 18.026 15.0672C18.233 14.7761 18.4234 14.4724 18.5957 14.1577L18.6176 14.1177C18.7281 13.916 18.8533 13.6877 18.9237 13.4829C19.0093 13.2342 19.0762 12.8413 18.8161 12.4626C18.543 12.0649 18.1217 12.0026 17.8717 11.9962C17.6473 11.9904 17.3745 12.0261 17.1203 12.0593L17.0744 12.0653C12.2806 12.6904 10.0584 11.3722 9.0675 9.67189C8.01574 7.86708 8.14345 5.31473 8.75508 3.1013L8.76754 3.05626C8.84069 2.79187 8.91699 2.51612 8.94451 2.28716C8.97364 2.04487 8.98139 1.59946 8.60836 1.26638ZM6.87193 2.9466C6.9994 2.88445 7.12884 2.82561 7.26014 2.77019C6.62665 5.10784 6.39604 8.12373 7.74512 10.4387C9.15899 12.8649 12.1114 14.2253 17.1594 13.5928C17.0414 13.7959 16.9142 13.9934 16.7783 14.1846C15.3656 16.1717 13.0166 17.4742 10.3531 17.4742C6.02029 17.4742 2.52959 14.0314 2.52959 9.8112C2.52959 7.34818 3.71556 5.15331 5.56761 3.74853C5.97268 3.44129 6.40932 3.17215 6.87193 2.9466Z"></path>'
	},
	sun: {
		box: 20,
		svg: `<path d="M10 1C9.58224 1 9.24358 1.33866 9.24358 1.75642V2.67238C9.24358 3.09014 9.58224 3.4288 10 3.4288C10.4178 3.4288 10.7564 3.09014 10.7564 2.67238V1.75642C10.7564 1.33866 10.4178 1 10 1Z"></path>
  <path d="M4.70573 3.63599C4.41033 3.34059 3.93138 3.34059 3.63598 3.63599C3.34058 3.93139 3.34058 4.41033 3.63598 4.70574L4.28366 5.35341C4.57906 5.64882 5.058 5.64882 5.3534 5.35341C5.64881 5.05801 5.64881 4.57907 5.3534 4.28367L4.70573 3.63599Z"></path>
  <path d="M16.364 3.63604C16.0686 3.34064 15.5896 3.34064 15.2942 3.63604L14.6465 4.28372C14.3511 4.57912 14.3511 5.05806 14.6465 5.35346C14.9419 5.64887 15.4209 5.64887 15.7163 5.35346L16.364 4.70579C16.6594 4.41039 16.6594 3.93144 16.364 3.63604Z"></path>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.66381C7.0529 4.66381 4.66381 7.0529 4.66381 10C4.66381 12.9471 7.0529 15.3362 10 15.3362C12.9471 15.3362 15.3362 12.9471 15.3362 10C15.3362 7.0529 12.9471 4.66381 10 4.66381ZM6.17666 10C6.17666 7.88843 7.88843 6.17666 10 6.17666C12.1116 6.17666 13.8233 7.88843 13.8233 10C13.8233 12.1116 12.1116 13.8233 10 13.8233C7.88843 13.8233 6.17666 12.1116 6.17666 10Z"></path>
  <path d="M1.75642 9.24358C1.33866 9.24358 1 9.58224 1 10C1 10.4178 1.33866 10.7564 1.75642 10.7564H2.67238C3.09014 10.7564 3.4288 10.4178 3.4288 10C3.4288 9.58224 3.09014 9.24358 2.67238 9.24358H1.75642Z"></path>
  <path d="M17.3276 9.24358C16.9099 9.24358 16.5712 9.58224 16.5712 10C16.5712 10.4178 16.9099 10.7564 17.3276 10.7564H18.2436C18.6613 10.7564 19 10.4178 19 10C19 9.58224 18.6613 9.24358 18.2436 9.24358H17.3276Z"></path>
  <path d="M15.7163 14.6464C15.4209 14.351 14.9419 14.351 14.6465 14.6464C14.3511 14.9418 14.3511 15.4208 14.6465 15.7162L15.2942 16.3639C15.5896 16.6593 16.0686 16.6593 16.364 16.3639C16.6594 16.0685 16.6594 15.5895 16.364 15.2941L15.7163 14.6464Z"></path>
  <path d="M5.35341 14.6465C5.05801 14.3511 4.57907 14.3511 4.28367 14.6465L3.63599 15.2942C3.34059 15.5896 3.34059 16.0685 3.63599 16.3639C3.93139 16.6593 4.41033 16.6593 4.70574 16.3639L5.35341 15.7162C5.64882 15.4208 5.64882 14.9419 5.35341 14.6465Z"></path>
  <path d="M10 16.5712C9.58224 16.5712 9.24358 16.9099 9.24358 17.3276V18.2436C9.24358 18.6613 9.58224 19 10 19C10.4178 19 10.7564 18.6613 10.7564 18.2436V17.3276C10.7564 16.9099 10.4178 16.5712 10 16.5712Z"></path>`
	},
	cloudX: {
		box: 20,
		svg: '<path d="M12.3853 9.04389C12.0876 8.74619 11.6049 8.74619 11.3072 9.04389L10.0001 10.351L8.69294 9.04389C8.39524 8.74619 7.91258 8.74619 7.61488 9.04389C7.31718 9.34159 7.31718 9.82426 7.61488 10.122L8.922 11.4291L7.61488 12.7362C7.31718 13.0339 7.31718 13.5166 7.61488 13.8143C7.91258 14.112 8.39524 14.112 8.69294 13.8143L10.0001 12.5071L11.3072 13.8143C11.6049 14.112 12.0875 14.112 12.3853 13.8143C12.6829 13.5166 12.6829 13.0339 12.3853 12.7362L11.0781 11.4291L12.3853 10.122C12.6829 9.82426 12.6829 9.34159 12.3853 9.04389Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.84491 2C8.04054 2 6.28363 2.46981 5.07741 3.87002C4.52759 4.50827 4.14497 5.28162 3.91607 6.17055C3.90179 6.226 3.8899 6.27213 3.87919 6.3124C3.8357 6.32456 3.78566 6.33808 3.72496 6.35445C2.98604 6.55383 2.32201 6.89814 1.76073 7.38569C0.551545 8.43602 0 9.9867 0 11.6564C0 13.8022 0.645578 15.4732 1.91546 16.5785C3.14837 17.6516 4.7534 18 6.29458 18C6.34624 18 6.39777 17.9993 6.44916 17.9981C6.46672 17.9993 6.48444 18 6.50229 18H14.9294L14.9398 18L15.1449 18C15.1755 18 15.2056 17.9981 15.2352 17.9945C16.347 17.9522 17.5179 17.659 18.446 16.8516C19.4926 15.9412 20 14.5818 20 12.9037C20 11.6222 19.6172 10.3014 18.6786 9.35346C18.201 8.871 17.6149 8.52298 16.9442 8.33113C16.825 8.29703 16.7328 8.27053 16.6597 8.24834C16.6577 8.18401 16.6562 8.1048 16.6543 8.00471C16.6276 6.53175 16.1418 5.17383 15.1892 4.10977C13.9447 2.71968 12.0601 2 9.84491 2ZM6.45014 17.9583L6.45112 17.998L6.44916 17.9981L6.44718 17.9979L6.45014 17.9583ZM15.232 17.9548L15.2335 17.9945L15.2352 17.9945L15.237 17.9943L15.232 17.9548ZM3.87919 6.3124L3.90093 6.30628L3.91181 6.34457L3.87335 6.33421L3.87919 6.3124ZM6.19053 4.84034C7.0077 3.89175 8.26644 3.48166 9.84491 3.48166C11.7501 3.48166 13.194 4.09532 14.0947 5.1013C14.7852 5.87262 15.1607 6.87671 15.1817 8.03177L15.1822 8.05907C15.1855 8.24353 15.1888 8.4268 15.2044 8.57655C15.2195 8.72124 15.2562 8.97621 15.4284 9.20152C15.6061 9.43394 15.8566 9.53548 15.9891 9.58525C16.1355 9.64026 16.3216 9.69348 16.5155 9.74891L16.5413 9.7563C16.9724 9.87959 17.3371 10.0981 17.635 10.399C18.2244 10.9943 18.5271 11.8939 18.5271 12.9037C18.5271 14.2802 18.12 15.1764 17.4825 15.7309C16.8824 16.253 16.0604 16.4884 15.1265 16.5157C15.1114 16.5161 15.0964 16.517 15.0816 16.5183H14.9542L14.9412 16.5183H14.9399L14.9294 16.5183H6.5732C6.53997 16.515 6.50615 16.5139 6.47193 16.5151C6.41311 16.5172 6.35399 16.5183 6.29458 16.5183C4.94585 16.5183 3.74345 16.2103 2.87924 15.4581C2.0182 14.7086 1.47292 13.5006 1.47292 11.6564C1.47292 10.306 1.91351 9.21058 2.72338 8.50712C3.10554 8.17516 3.5674 7.931 4.10655 7.78553L4.12814 7.7797C4.25793 7.7447 4.39349 7.70815 4.50526 7.66826C4.6211 7.62693 4.80453 7.5517 4.96195 7.39185C5.11722 7.23418 5.1903 7.05305 5.23096 6.93529C5.26936 6.82408 5.30382 6.69015 5.33633 6.56382L5.34193 6.54208C5.52216 5.84213 5.80969 5.28243 6.19053 4.84034Z"></path>'
	},
	settings: {
		box: 20,
		svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3113 1.97927C11.1767 1.96258 10.9931 1.96144 10.6688 1.96148L9.33068 1.96164C9.00643 1.96168 8.82284 1.96287 8.68836 1.97959C8.62838 1.98704 8.59765 1.99568 8.58333 2.00077C8.57298 2.00445 8.56936 2.0073 8.56936 2.0073C8.56646 2.0095 8.56337 2.0119 8.55691 2.02077C8.54854 2.03227 8.53202 2.05815 8.50753 2.11232C8.45199 2.23513 8.39512 2.40944 8.29478 2.72381C8.26765 2.80881 8.23966 2.89735 8.21095 2.98914C7.97709 3.73696 7.45008 4.29399 6.86568 4.63662C6.30261 4.96674 5.61803 5.13735 4.92153 4.98034C4.79931 4.95279 4.68217 4.9269 4.57079 4.90269C4.25207 4.83341 4.07143 4.79535 3.93485 4.78308C3.82533 4.77325 3.79919 4.78627 3.79348 4.78911C3.79348 4.78911 3.76724 4.79516 3.6939 4.89443C3.60771 5.0111 3.50888 5.18106 3.33705 5.48052L2.74781 6.50741C2.5758 6.80718 2.47928 6.97771 2.42241 7.11009C2.39703 7.16916 2.38873 7.20062 2.386 7.21407C2.38552 7.2164 2.38504 7.21938 2.38504 7.21938L2.38636 7.22272C2.39044 7.23248 2.40265 7.25798 2.43603 7.30576C2.51219 7.41474 2.63242 7.55007 2.85242 7.79419C2.92683 7.87676 3.00534 7.96328 3.08761 8.05323C3.58749 8.59969 3.79049 9.3236 3.79049 10.0001C3.79049 10.6763 3.58756 11.3997 3.08797 11.9459C3.00543 12.0361 2.92668 12.1229 2.85205 12.2057C2.63202 12.4499 2.51177 12.5852 2.4356 12.6942C2.40221 12.742 2.38999 12.7675 2.38592 12.7773L2.38459 12.7806C2.38459 12.7806 2.38507 12.7836 2.38555 12.786C2.38828 12.7994 2.39659 12.8309 2.42198 12.89C2.47887 13.0223 2.57542 13.1929 2.74748 13.4927L3.33681 14.5195C3.50865 14.8189 3.60748 14.9888 3.69367 15.1055C3.76605 15.2034 3.79251 15.2104 3.79251 15.2104C3.79821 15.2133 3.82507 15.2266 3.93457 15.2168C4.07113 15.2045 4.25174 15.1665 4.57041 15.0972C4.68167 15.073 4.79866 15.0471 4.92074 15.0196C5.61746 14.8626 6.30225 15.0333 6.86548 15.3635C7.44998 15.7062 7.97711 16.2634 8.21101 17.0113C8.23968 17.103 8.26764 17.1915 8.29474 17.2764C8.39509 17.5908 8.45196 17.7651 8.50751 17.888C8.53201 17.9421 8.54853 17.968 8.5569 17.9795C8.56336 17.9884 8.56623 17.9906 8.56913 17.9928C8.56913 17.9928 8.57297 17.9958 8.58332 17.9995C8.59764 18.0046 8.62838 18.0132 8.68836 18.0207C8.82287 18.0374 9.00648 18.0386 9.33077 18.0386H10.6688C10.9931 18.0386 11.1767 18.0374 11.3113 18.0207C11.3712 18.0132 11.402 18.0046 11.4163 17.9995C11.4266 17.9958 11.4303 17.993 11.4303 17.993C11.4332 17.9908 11.4363 17.9884 11.4427 17.9795C11.4511 17.968 11.4676 17.9421 11.4921 17.888C11.5477 17.7651 11.6045 17.5908 11.7049 17.2764C11.7319 17.1916 11.7599 17.1033 11.7885 17.0117C12.0225 16.2635 12.5498 15.7062 13.1345 15.3633C13.6979 15.0329 14.383 14.862 15.0801 15.0191C15.2018 15.0466 15.3185 15.0724 15.4295 15.0965C15.4313 15.0969 15.4332 15.0973 15.4351 15.0977C15.438 15.0983 15.4409 15.0989 15.4437 15.0996C15.7536 15.1669 15.9308 15.204 16.0653 15.2161C16.1748 15.2259 16.201 15.2129 16.2067 15.21C16.2067 15.21 16.2339 15.2026 16.3063 15.1047C16.3925 14.9881 16.4913 14.8182 16.6631 14.5188L17.2525 13.492C17.4246 13.1922 17.5211 13.0216 17.578 12.8892C17.6034 12.8302 17.6117 12.7987 17.6144 12.7852C17.6149 12.7829 17.6154 12.7799 17.6154 12.7799L17.6141 12.7766C17.61 12.7668 17.5978 12.7413 17.5644 12.6935C17.4882 12.5845 17.368 12.4492 17.148 12.205C17.0731 12.1219 16.994 12.0348 16.9112 11.9443C16.4119 11.3986 16.2091 10.6757 16.2091 10.0001C16.2091 9.32397 16.412 8.6005 16.9116 8.05435C16.9941 7.96417 17.0728 7.87742 17.1475 7.79464C17.3675 7.55045 17.4878 7.41507 17.564 7.30605C17.5974 7.25827 17.6096 7.23275 17.6136 7.22299L17.615 7.21963C17.615 7.21963 17.6145 7.21665 17.614 7.21431C17.6113 7.20085 17.603 7.16938 17.5776 7.11029C17.5207 6.97789 17.4241 6.80733 17.252 6.50752L16.6625 5.48076C16.4906 5.18142 16.3918 5.01152 16.3056 4.89491C16.2333 4.79702 16.2068 4.78999 16.2068 4.78999C16.2011 4.78715 16.1742 4.77379 16.0647 4.78362C15.9282 4.79589 15.7476 4.83394 15.429 4.90319C15.3178 4.92736 15.2009 4.9532 15.0789 4.9807C14.3822 5.13774 13.6974 4.96704 13.1342 4.6368C12.5497 4.29408 12.0226 3.73693 11.7887 2.98898C11.76 2.89719 11.7321 2.80866 11.7049 2.72367C11.6046 2.40921 11.5477 2.23485 11.4921 2.11201C11.4676 2.05783 11.4511 2.03194 11.4427 2.02044C11.4363 2.01157 11.4334 2.00934 11.4305 2.00714C11.4305 2.00714 11.4267 2.00412 11.4163 2.00044C11.402 1.99535 11.3713 1.98672 11.3113 1.97927ZM11.4728 0.527798C11.7268 0.559309 11.99 0.632033 12.238 0.820103C12.483 1.00582 12.6319 1.2403 12.7414 1.48233C12.8374 1.69462 12.9203 1.95468 13.0064 2.22446L13.0168 2.25701C13.0448 2.34475 13.0737 2.43612 13.1033 2.53083C13.2051 2.85633 13.4548 3.15301 13.8064 3.35917C14.1394 3.55445 14.484 3.62039 14.7898 3.55145C14.9153 3.52318 15.0355 3.49661 15.1498 3.47175L15.1816 3.46484C15.4569 3.40495 15.7191 3.34793 15.9473 3.32742C16.2059 3.30419 16.4759 3.3209 16.7551 3.44806C17.0382 3.57701 17.2361 3.77817 17.397 3.99586C17.5396 4.18883 17.6806 4.43453 17.8294 4.69368L18.4531 5.78017C18.6017 6.03881 18.743 6.28482 18.8382 6.50639C18.9452 6.75547 19.0246 7.03933 18.9922 7.36955C18.9601 7.69684 18.8312 7.95436 18.678 8.17365C18.5439 8.36546 18.3616 8.56767 18.1737 8.77619L18.1504 8.80201C18.0735 8.88733 17.9924 8.9767 17.9074 9.06961C17.7091 9.28643 17.5934 9.61559 17.5934 10.0001C17.5934 10.384 17.7089 10.7126 17.9069 10.929C17.9922 11.0223 18.0737 11.112 18.1509 11.1977L18.1742 11.2235C18.3621 11.432 18.5444 11.6341 18.6784 11.8259C18.8316 12.0452 18.9606 12.3027 18.9927 12.6299C19.0251 12.9601 18.9457 13.2439 18.8387 13.493C18.7435 13.7145 18.6023 13.9605 18.4538 14.2191L17.8301 15.3057C17.6814 15.5649 17.5404 15.8107 17.3977 16.0037C17.2369 16.2214 17.039 16.4226 16.7558 16.5516C16.4766 16.6788 16.2066 16.6955 15.948 16.6723C15.7197 16.6518 15.4575 16.5947 15.1822 16.5348L15.1361 16.5248C15.0263 16.5009 14.911 16.4754 14.7911 16.4484C14.4849 16.3794 14.14 16.4454 13.8067 16.6409C13.4548 16.8472 13.2049 17.1441 13.103 17.4699C13.0735 17.5644 13.0447 17.6555 13.0167 17.743L13.0064 17.7756C12.9203 18.0453 12.8374 18.3054 12.7414 18.5176C12.6319 18.7596 12.483 18.9941 12.2381 19.1798C11.9901 19.3679 11.7269 19.4406 11.473 19.4721C11.2478 19.5001 10.9813 19.5001 10.7014 19.5H9.29825C9.0183 19.5001 8.75181 19.5001 8.52664 19.4721C8.27269 19.4406 8.00953 19.3679 7.76153 19.1798C7.51663 18.9941 7.3677 18.7596 7.25826 18.5176C7.16226 18.3054 7.07931 18.0453 6.99327 17.7756L6.98288 17.743C6.9549 17.6554 6.92605 17.5641 6.89646 17.4695C6.79467 17.144 6.54495 16.8473 6.19334 16.6411C5.86029 16.4459 5.51572 16.3799 5.20981 16.4489C5.08432 16.4772 4.96402 16.5038 4.84959 16.5286L4.81779 16.5355C4.54244 16.5954 4.28026 16.6525 4.05197 16.673C3.79335 16.6962 3.52336 16.6795 3.24412 16.5523C2.96096 16.4233 2.76307 16.2221 2.60218 16.0044C2.45956 15.8114 2.31857 15.5657 2.16985 15.3065L1.54621 14.2199C1.39773 13.9613 1.25649 13.7153 1.16129 13.4937C1.05427 13.2446 0.97492 12.9608 1.00733 12.6306C1.03945 12.3034 1.16838 12.0459 1.32159 11.8266C1.45561 11.6348 1.63789 11.4326 1.82585 11.2241L1.84911 11.1983C1.92603 11.113 2.00716 11.0236 2.09219 10.9306C2.29053 10.7138 2.40616 10.3846 2.40616 10.0001C2.40616 9.61514 2.29042 9.28557 2.09182 9.06846C2.00706 8.9758 1.92618 8.88666 1.84948 8.80156C1.84172 8.79295 1.83397 8.78435 1.82622 8.77575C1.63829 8.5673 1.45604 8.36513 1.32204 8.17337C1.16884 7.95413 1.03992 7.69668 1.00779 7.36946C0.975365 7.03932 1.05469 6.75551 1.16167 6.50646C1.25684 6.28493 1.39804 6.03895 1.54647 5.78034C1.55223 5.77031 1.558 5.76026 1.56378 5.75018L2.15303 4.72329C2.1587 4.7134 2.16436 4.70353 2.17001 4.69368C2.31872 4.43444 2.45971 4.18866 2.60233 3.99562C2.76322 3.77785 2.96111 3.5766 3.2443 3.44759C3.52356 3.32037 3.79357 3.30365 4.05222 3.32688C4.28053 3.34739 4.54274 3.40443 4.81813 3.46433C4.82871 3.46663 4.83932 3.46894 4.84994 3.47125C4.84994 3.47125 4.84765 3.46876 4.87561 3.47791L4.90129 3.48458L4.84994 3.47125C4.9645 3.49615 5.08494 3.52277 5.21059 3.55109C5.51632 3.62001 5.86071 3.55412 6.19358 3.35895C6.54505 3.15289 6.79466 2.85633 6.89641 2.53097C6.92603 2.43624 6.95492 2.34487 6.98292 2.25713C6.98639 2.24627 6.98985 2.23542 6.99331 2.22458C7.07935 1.95488 7.16229 1.69488 7.25828 1.48264C7.36771 1.24066 7.51662 1.00623 7.76148 0.820527C8.00944 0.632471 8.27257 0.55971 8.52649 0.528149C8.75162 0.500166 9.01808 0.500173 9.29799 0.50018C9.30881 0.500181 9.31965 0.500181 9.33052 0.500179L10.7011 0.500008C10.9811 0.499932 11.2476 0.499859 11.4728 0.527798Z" ></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0018 7.92367C8.85503 7.92367 7.92535 8.85349 7.92535 10.0005C7.92535 11.1475 8.85503 12.0773 10.0018 12.0773C11.1487 12.0773 12.0783 11.1475 12.0783 10.0005C12.0783 8.85349 11.1487 7.92367 10.0018 7.92367ZM6.54102 10.0005C6.54102 8.08883 8.09048 6.53912 10.0018 6.53912C11.9132 6.53912 13.4627 8.08883 13.4627 10.0005C13.4627 11.9121 11.9132 13.4619 10.0018 13.4619C8.09048 13.4619 6.54102 11.9121 6.54102 10.0005Z" ></path>`
	},
	folder: {
		box: 20,
		svg: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.59655 2.20712C7.10136 1.9989 6.56115 1.99943 5.9023 2.00007L4.40479 2.00015C3.57853 2.00013 2.88271 2.0001 2.32874 2.07318C1.74135 2.15066 1.20072 2.32242 0.764844 2.75008C0.328798 3.1779 0.153514 3.70882 0.0744639 4.28569C-4.74114e-05 4.82945 -2.52828e-05 5.51233 9.81743e-07 6.32281V11.8675C-1.65965e-05 13.1029 -3.08677e-05 14.1058 0.108284 14.8963C0.221156 15.72 0.464085 16.4241 1.03541 16.9846C1.60656 17.545 2.32369 17.7831 3.16265 17.8938C3.96804 18 4.99002 18 6.2493 18H13.7507C15.01 18 16.032 18 16.8374 17.8938C17.6763 17.7831 18.3934 17.545 18.9646 16.9846C19.5359 16.4241 19.7788 15.72 19.8917 14.8963C20 14.1058 20 13.1029 20 11.8676V9.94525C20 8.70992 20 7.70702 19.8917 6.91657C19.7788 6.09287 19.5359 5.38878 18.9646 4.82823C18.3934 4.26785 17.6763 4.02972 16.8374 3.91905C16.0319 3.81281 15.0099 3.81283 13.7506 3.81285L9.91202 3.81285C9.70527 3.81285 9.59336 3.81232 9.51046 3.80596C9.47861 3.80352 9.461 3.80081 9.45249 3.79919C9.44546 3.79427 9.43137 3.78367 9.40771 3.76281C9.34589 3.70835 9.26838 3.62926 9.12578 3.48235L8.91813 3.26831C8.46421 2.79975 8.09187 2.4154 7.59655 2.20712ZM2.53158 3.55817C2.97217 3.50005 3.5649 3.49846 4.45741 3.49846H5.77707C6.19724 3.49846 6.45952 3.50169 6.63994 3.51453C6.81907 3.52729 6.91262 3.54925 6.99675 3.58462C7.08084 3.61998 7.16148 3.67125 7.29433 3.78964C7.42818 3.90891 7.6114 4.09298 7.90119 4.39152L8.02253 4.51653L8.07907 4.57502C8.29018 4.79381 8.5293 5.04163 8.85233 5.17747C9.17524 5.31324 9.52282 5.31222 9.82983 5.31132L9.91202 5.31115H13.6951C15.023 5.31115 15.9424 5.31274 16.6345 5.40404C17.3048 5.49246 17.6468 5.6525 17.8873 5.88854C18.1277 6.12441 18.2906 6.45944 18.3807 7.11653C18.4737 7.79534 18.4753 8.69706 18.4753 10.0001V11.8128C18.4753 13.1158 18.4737 14.0175 18.3807 14.6963C18.2906 15.3534 18.1277 15.6884 17.8873 15.9243C17.6468 16.1603 17.3048 16.3204 16.6345 16.4088C15.9424 16.5001 15.023 16.5017 13.6951 16.5017H6.30494C4.97698 16.5017 4.05764 16.5001 3.36549 16.4088C2.69519 16.3204 2.35324 16.1603 2.11266 15.9243C1.87226 15.6884 1.70936 15.3534 1.61932 14.6963C1.5263 14.0175 1.52468 13.1158 1.52468 11.8128V6.37469C1.52468 5.49891 1.5263 4.91765 1.5855 4.48566C1.64172 4.07541 1.73696 3.91355 1.8421 3.81039C1.94741 3.70706 2.11288 3.6134 2.53158 3.55817Z"></path>'
	},
	folderOpen: {
		box: 20,
		svg: '<path fill-rule="evenodd" clip-rule="evenodd" d="M6.22891 18C4.9566 18 3.93097 18 3.1244 17.8935C2.28697 17.7828 1.58187 17.5461 1.02187 16.9958C0.461866 16.4455 0.221 15.7526 0.108411 14.9296C-3.31178e-05 14.137 -1.7645e-05 13.1291 1.54211e-06 11.8788L1.04302e-06 6.29541C-2.62958e-05 5.47395 -4.90919e-05 4.78896 0.0743487 4.24516C0.152876 3.67118 0.325617 3.15297 0.74937 2.73655C1.17312 2.32012 1.70045 2.15037 2.28453 2.0732C2.83789 2.00009 3.53494 2.00011 4.37086 2.00013L5.92613 2.00007C6.57085 1.99946 7.08108 1.99899 7.55104 2.18869C8.021 2.37838 8.38357 2.73117 8.84171 3.17694L9.0622 3.39116C9.20356 3.52844 9.28285 3.60481 9.3465 3.65795C9.37486 3.68162 9.3916 3.69332 9.4005 3.699C9.40472 3.70169 9.40712 3.70298 9.40801 3.70345L9.40913 3.70399L9.41032 3.70438C9.41129 3.70466 9.41391 3.7054 9.41884 3.7064C9.42923 3.70851 9.44951 3.71175 9.48661 3.7145C9.56989 3.72068 9.68092 3.72113 9.87965 3.72113L13.0938 3.72111C13.6755 3.72097 14.072 3.72087 14.4167 3.78961C15.79 4.06347 16.8634 5.11825 17.1421 6.46785C17.2021 6.75842 17.2105 7.08647 17.2116 7.53472C17.4034 7.54922 17.5834 7.56801 17.7514 7.59237C18.5137 7.70289 19.1943 7.94917 19.633 8.57761C20.0718 9.20605 20.0607 9.91867 19.8913 10.6574C19.7278 11.3702 19.3805 12.2551 18.9553 13.3383L18.6619 14.0858C18.3405 14.9047 18.0787 15.5717 17.8049 16.0905C17.5191 16.6321 17.1912 17.0712 16.7057 17.3985C16.2202 17.7258 15.6854 17.8685 15.0682 17.9356C14.4771 18 13.7497 18 12.8565 18L6.22891 18ZM5.81464 3.37155C6.62543 3.37155 6.83809 3.3835 7.0208 3.45726C7.20351 3.53101 7.36332 3.6694 7.94002 4.22946L8.08126 4.36662L8.13369 4.41774C8.34687 4.62596 8.57694 4.85067 8.8789 4.97256C9.18086 5.09444 9.50523 5.09353 9.8058 5.09268L9.87965 5.09254H13.0114C13.7067 5.09254 13.9504 5.096 14.1392 5.13363C14.9632 5.29795 15.6072 5.93081 15.7744 6.74058C15.805 6.88885 15.8134 7.07165 15.8155 7.48813C15.5174 7.48575 15.2019 7.48576 14.8692 7.48577H7.25505C6.70129 7.48575 6.23171 7.48573 5.84482 7.52626C5.43305 7.56939 5.05328 7.66313 4.69832 7.88867C4.34336 8.11422 4.10052 8.41609 3.89152 8.76739C3.69515 9.09748 3.50247 9.51829 3.27524 10.0146L2.3991 11.9279C2.00422 12.7902 1.66601 13.5287 1.435 14.1586C1.39636 13.5526 1.39555 12.7992 1.39555 11.8286V6.34295C1.39555 5.46158 1.39703 4.86953 1.45745 4.4279C1.51517 4.006 1.61493 3.82543 1.73617 3.70628C1.85741 3.58714 2.04116 3.48911 2.47048 3.43238C2.91988 3.37301 3.52235 3.37155 4.41923 3.37155H5.81464ZM14.8113 8.85718C16.0648 8.85718 16.9261 8.85897 17.5477 8.9491C18.1547 9.0371 18.3667 9.18785 18.4823 9.35347C18.5979 9.5191 18.6648 9.76768 18.5299 10.3559C18.3918 10.9583 18.0835 11.7486 17.6324 12.8979L17.3741 13.556C17.035 14.4199 16.8002 15.0155 16.5661 15.4591C16.34 15.8875 16.1443 16.1139 15.9162 16.2677C15.688 16.4215 15.4027 16.5194 14.9146 16.5726C14.4093 16.6276 13.7592 16.6285 12.8169 16.6285H6.4533C5.13332 16.6285 4.22286 16.6267 3.56903 16.5315C2.92754 16.438 2.71197 16.278 2.59893 16.1062C2.48589 15.9344 2.42586 15.6756 2.6024 15.0624C2.78233 14.4373 3.15427 13.6207 3.69594 12.4378L4.53327 10.6092C4.77905 10.0725 4.94187 9.71911 5.09629 9.45955C5.24227 9.21416 5.34986 9.1078 5.45606 9.04032C5.56226 8.97284 5.70511 8.92008 5.99273 8.88995C6.29696 8.85808 6.6917 8.85718 7.29063 8.85718H14.8113Z"></path>'
	},
	folderPlus: {
		box: 20,
		svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M10 8.75C10.4142 8.75 10.75 9.08579 10.75 9.5V10.75H12C12.4142 10.75 12.75 11.0858 12.75 11.5C12.75 11.9142 12.4142 12.25 12 12.25H10.75V13.5C10.75 13.9142 10.4142 14.25 10 14.25C9.58579 14.25 9.25 13.9142 9.25 13.5V12.25H8C7.58579 12.25 7.25 11.9142 7.25 11.5C7.25 11.0858 7.58579 10.75 8 10.75H9.25V9.5C9.25 9.08579 9.58579 8.75 10 8.75Z" ></path>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.54356 1H5.37683C4.56054 0.999976 3.87093 0.999955 3.32143 1.07383C2.73783 1.1523 2.19785 1.32663 1.76224 1.76224C1.32663 2.19785 1.1523 2.73783 1.07383 3.32143C0.999955 3.87093 0.999976 4.56048 1 5.37677V12.7983C0.999985 14.0429 0.999971 15.0553 1.10729 15.8535C1.21922 16.686 1.46048 17.4006 2.02993 17.9701C2.59937 18.5395 3.31398 18.7808 4.14647 18.8927C4.94475 19 5.95705 19 7.20173 19H12.7983C14.043 19 15.0553 19 15.8535 18.8927C16.686 18.7808 17.4006 18.5395 17.9701 17.9701C18.5395 17.4006 18.7808 16.686 18.8927 15.8535C19 15.0553 19 14.043 19 12.7983V10.4005C19 9.15583 19 8.14353 18.8927 7.34525C18.7808 6.51276 18.5395 5.79815 17.9701 5.22871C17.4006 4.65926 16.686 4.418 15.8535 4.30607C15.0553 4.19875 14.043 4.19877 12.7983 4.19878L11.5177 4.19878C11.2437 4.19878 11.0942 4.19791 10.9851 4.18711C10.9515 4.18379 10.9306 4.18021 10.9187 4.17768C10.9106 4.1686 10.8972 4.15227 10.8776 4.1247C10.8141 4.03534 10.7392 3.90601 10.6032 3.66806L10.3364 3.20108C10.0947 2.77812 9.88601 2.41293 9.68211 2.12595C9.46334 1.81806 9.21648 1.54999 8.87457 1.35157C8.53266 1.15315 8.17743 1.07182 7.80157 1.03463C7.45127 0.999976 7.03064 0.999987 6.54356 1ZM3.52785 2.60914C3.96198 2.55078 4.54667 2.54913 5.43032 2.54913H6.50758C7.04035 2.54913 7.38395 2.55 7.64905 2.57623C7.89714 2.60078 8.01344 2.64291 8.09703 2.69142C8.18061 2.73993 8.2749 2.82 8.4193 3.02323C8.57359 3.24038 8.74483 3.53828 9.00915 4.00085L9.27319 4.46291C9.38879 4.66527 9.50151 4.86259 9.61476 5.02197C9.74274 5.20209 9.90431 5.38312 10.1398 5.51981C10.3754 5.6565 10.6127 5.70696 10.8326 5.72871C11.0272 5.74797 11.2553 5.74794 11.4884 5.74791L12.7418 5.74791C14.0563 5.74791 14.9641 5.74956 15.6471 5.84138C16.3078 5.93021 16.641 6.09045 16.8747 6.3241C17.1083 6.55776 17.2686 6.89098 17.3574 7.55167C17.4492 8.23468 17.4509 9.14252 17.4509 10.457V12.7418C17.4509 14.0563 17.4492 14.9641 17.3574 15.6471C17.2686 16.3078 17.1083 16.641 16.8747 16.8747C16.641 17.1083 16.3078 17.2686 15.6471 17.3574C14.9641 17.4492 14.0563 17.4509 12.7418 17.4509H7.25819C5.94374 17.4509 5.0359 17.4492 4.35289 17.3574C3.6922 17.2686 3.35898 17.1083 3.12532 16.8747C2.89167 16.641 2.73143 16.3078 2.6426 15.6471C2.55077 14.9641 2.54913 14.0563 2.54913 12.7418V5.43032C2.54913 4.54667 2.55078 3.96198 2.60914 3.52785C2.6645 3.11609 2.7578 2.95747 2.85764 2.85764C2.95747 2.7578 3.11609 2.6645 3.52785 2.60914Z" ></path>`
	},
	notePlus: {
		box: 20,
		svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M10 10.25C10.4142 10.25 10.75 9.91421 10.75 9.5L10.75 8.25L12 8.25C12.4142 8.25 12.75 7.91421 12.75 7.5C12.75 7.08579 12.4142 6.75 12 6.75L10.75 6.75L10.75 5.5C10.75 5.08579 10.4142 4.75 10 4.75C9.58579 4.75 9.25 5.08579 9.25 5.5L9.25 6.75L8 6.75C7.58579 6.75 7.25 7.08579 7.25 7.5C7.25 7.91421 7.58579 8.25 8 8.25L9.25 8.25L9.25 9.5C9.25 9.91421 9.58579 10.25 10 10.25Z" ></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.43 19.9999C11.0553 20.0005 11.5687 20.0011 12.0425 19.801C12.4079 19.6468 12.7072 19.3912 13.0276 19.0754C13.0709 19.0331 13.1142 18.9896 13.1572 18.946C13.2106 18.892 13.2649 18.8365 13.3205 18.7798L16.803 15.2303C16.8581 15.1743 16.9119 15.1195 16.9644 15.0656C17.0081 15.0208 17.0518 14.9756 17.0943 14.9306C17.4037 14.6043 17.6539 14.2997 17.805 13.9281C18.001 13.4457 18.0005 12.923 17.9999 12.2854L17.9999 8.09515C17.9999 6.40174 17.9999 5.05339 17.8605 3.99652C17.7166 2.90602 17.4121 2.01239 16.719 1.30596C16.0257 0.59936 15.1485 0.288792 14.0779 0.142102C13.0408 -2.38534e-05 11.7177 -1.4201e-05 10.0564 -7.04314e-07L9.94344 -6.94438e-07C8.28219 -1.39006e-05 6.95908 -2.33217e-05 5.92191 0.142103C4.85139 0.288793 3.97413 0.599361 3.28085 1.30596C2.58774 2.01239 2.28324 2.90602 2.13939 3.99652C1.99997 5.05342 1.99999 6.40178 2 8.09523L2 11.9046C1.99999 13.5981 1.99998 14.9464 2.13939 16.0033C2.28324 17.0938 2.58774 17.9875 3.28085 18.6939C3.97413 19.4005 4.8514 19.7111 5.92191 19.8578C6.95912 19.9999 8.28226 19.9999 9.94358 19.9999L10.43 19.9999ZM11.0734 18.4633C11.0633 18.2993 11.0634 18.1178 11.0635 17.9433L11.0635 17.3374C11.0634 16.5111 11.0634 15.8153 11.1365 15.2613C11.214 14.6739 11.3857 14.1333 11.8134 13.6974C12.2412 13.2614 12.7721 13.0861 13.349 13.0071C13.8928 12.9326 14.5757 12.9326 15.3862 12.9326L15.9811 12.9326C16.1516 12.9325 16.3292 12.9325 16.4899 12.9427C16.4991 12.7707 16.5015 12.529 16.5015 12.1644L16.5015 8.15241C16.5015 6.389 16.5 5.14306 16.3755 4.19937C16.2539 3.27751 16.0275 2.75905 15.6587 2.38321C15.2901 2.00753 14.7819 1.77699 13.878 1.65313C12.9524 1.52629 11.7302 1.52466 9.99993 1.52467C8.26966 1.52467 7.04749 1.52629 6.12187 1.65313C5.21796 1.77699 4.70976 2.00753 4.34116 2.38321C3.9724 2.75906 3.74598 3.27751 3.62438 4.19937C3.49989 5.14306 3.49831 6.389 3.49831 8.15241L3.49831 11.8474C3.49831 13.6108 3.49989 14.8568 3.62438 15.8005C3.74598 16.7223 3.9724 17.2408 4.34116 17.6166C4.70976 17.9923 5.21796 18.2229 6.12187 18.3467C7.04749 18.4736 8.26966 18.4752 9.99993 18.4752L10.3109 18.4752C10.668 18.4752 10.9049 18.4727 11.0734 18.4633ZM12.5618 17.395L12.5618 17.39C12.5618 16.4975 12.5634 15.9048 12.6215 15.4642C12.6767 15.0455 12.7704 14.88 12.8737 14.7747C12.9769 14.6695 13.1387 14.5743 13.549 14.5181C13.981 14.4589 14.5622 14.4573 15.438 14.4573L15.4441 14.4573L12.5618 17.395Z" ></path>`
	},
	reload: {
		box: 20,
		svg: '<path fill-rule="evenodd" clip-rule="evenodd" d="M3.65992 1.26246C4.07171 1.29754 4.37709 1.65979 4.34202 2.07158L4.26037 3.03003C5.71164 1.83397 7.5493 1.08033 9.57323 0.988843C14.5386 0.764404 18.7458 4.60771 18.9703 9.57311C19.0699 11.7767 18.3675 13.8328 17.1218 15.4558C16.8702 15.7836 16.4004 15.8454 16.0726 15.5938C15.7447 15.3422 15.6829 14.8724 15.9346 14.5446C16.9735 13.1909 17.5583 11.479 17.4752 9.64069C17.2881 5.501 13.7805 2.29681 9.64081 2.48392C7.88669 2.56321 6.30071 3.23819 5.06899 4.30586L6.21349 4.28381C6.62669 4.27585 6.96811 4.60436 6.97607 5.01756C6.98403 5.43076 6.65552 5.77218 6.24231 5.78014L3.3485 5.83589C3.13653 5.83998 2.93277 5.75395 2.78786 5.59919C2.64295 5.44443 2.57049 5.23547 2.58848 5.02422L2.85081 1.94456C2.88588 1.53277 3.24813 1.22739 3.65992 1.26246ZM1.87873 8.23025C2.28898 8.28016 2.5811 8.65319 2.53119 9.06344C2.48142 9.47261 2.46476 9.89182 2.48403 10.3183C2.67115 14.458 6.17872 17.6622 10.3184 17.4751C11.3819 17.427 12.3817 17.1603 13.2781 16.7211C13.6493 16.5393 14.0975 16.6927 14.2794 17.0639C14.4612 17.435 14.3077 17.8832 13.9366 18.0651C12.8592 18.593 11.6585 18.9126 10.386 18.9701C5.42059 19.1946 1.21339 15.3513 0.98895 10.3859C0.965912 9.87618 0.985786 9.37391 1.04554 8.88272C1.09544 8.47247 1.46847 8.18035 1.87873 8.23025Z"></path>'
	},
	searchBars: {
		box: 20,
		svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9059 2C7.94242 2 4.72941 5.17565 4.72941 9.09302C4.72941 13.0104 7.94242 16.186 11.9059 16.186C13.4193 16.186 14.8233 15.723 15.9808 14.9324L18.7007 17.7677C18.9868 18.066 19.4633 18.0785 19.7651 17.7958C20.0669 17.513 20.0796 17.042 19.7935 16.7437L17.1248 13.9617C18.3384 12.6914 19.0823 10.9781 19.0823 9.09302C19.0823 5.17565 15.8693 2 11.9059 2ZM6.23529 9.09302C6.23529 5.99766 8.7741 3.48837 11.9059 3.48837C15.0377 3.48837 17.5765 5.99766 17.5765 9.09302C17.5765 12.1884 15.0377 14.6977 11.9059 14.6977C8.7741 14.6977 6.23529 12.1884 6.23529 9.09302Z" ></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 17.2558C0 16.8448 0.337103 16.5116 0.752941 16.5116H7.17647C7.5923 16.5116 7.92941 16.8448 7.92941 17.2558C7.92941 17.6668 7.5923 18 7.17647 18H0.752941C0.337103 18 0 17.6668 0 17.2558Z" ></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.6279C0 13.2169 0.337103 12.8837 0.752941 12.8837H3.50588C3.92172 12.8837 4.25882 13.2169 4.25882 13.6279C4.25882 14.0389 3.92172 14.3721 3.50588 14.3721H0.752941C0.337103 14.3721 0 14.0389 0 13.6279Z" ></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 9.589 0.337103 9.25581 0.752941 9.25581H2.58823C3.00407 9.25581 3.34117 9.589 3.34117 10C3.34117 10.411 3.00407 10.7442 2.58823 10.7442H0.752941C0.337103 10.7442 0 10.411 0 10Z" ></path>`
	},
	calendarEdit: {
		box: 20,
		svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5437 12.4323C16.9134 11.8028 15.8914 11.8027 15.2611 12.4323L12.4102 15.2797C12.0903 15.5992 11.9194 16.0381 11.939 16.4895L11.9794 17.4177C12.0158 18.2529 12.6855 18.9218 13.5218 18.9581L14.451 18.9985C14.903 19.0181 15.3425 18.8474 15.6624 18.5279L18.5133 15.6805C19.1436 15.0509 19.1436 14.0303 18.5133 13.4007L17.5437 12.4323ZM16.2394 13.4093C16.3294 13.3194 16.4754 13.3194 16.5654 13.4093L17.5351 14.3778C17.6251 14.4677 17.6251 14.6135 17.5351 14.7034L14.6842 17.5508C14.6385 17.5965 14.5757 17.6209 14.5111 17.6181L13.5819 17.5777C13.4624 17.5725 13.3667 17.477 13.3615 17.3576L13.3211 16.4295C13.3183 16.365 13.3428 16.3023 13.3885 16.2567L16.2394 13.4093Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.08337 1.74908C7.08337 1.33537 6.74759 1 6.33337 1C5.91916 1 5.58337 1.33537 5.58337 1.74908V2.04096C4.73981 2.14709 4.02824 2.34956 3.39705 2.75765C2.77511 3.15976 2.24543 3.68879 1.84283 4.30997C1.38996 5.00868 1.19 5.80602 1.09397 6.77216C0.999986 7.71777 0.999992 8.90232 1 10.4062V10.4879C0.999992 11.9917 0.999986 13.1763 1.09397 14.1219C1.19 15.088 1.38996 15.8854 1.84283 16.5841C2.24543 17.2052 2.77511 17.7343 3.39705 18.1364C4.09663 18.5887 4.89494 18.7884 5.86228 18.8843C6.80904 18.9782 7.99504 18.9782 9.50073 18.9782H10C10.4142 18.9782 10.75 18.6428 10.75 18.2291C10.75 17.8154 10.4142 17.48 10 17.48H9.54167C7.98611 17.48 6.87449 17.4792 6.01046 17.3935C5.15844 17.309 4.62858 17.148 4.21218 16.8787C3.76794 16.5915 3.38959 16.2136 3.10202 15.77C2.83246 15.3541 2.67121 14.8249 2.58663 13.9739C2.50086 13.1109 2.5 12.0007 2.5 10.447C2.5 9.71259 2.50019 9.07724 2.50946 8.52026C2.83765 8.4812 3.29276 8.43291 3.87478 8.38447C5.22914 8.27175 7.27086 8.15817 10 8.15817C12.7291 8.15817 14.7709 8.27175 16.1252 8.38447C16.712 8.43331 17.1698 8.482 17.4986 8.52122C17.5 8.80145 17.5 9.10724 17.5 9.44297V10.7838C17.5 11.1975 17.8358 11.5329 18.25 11.5329C18.6642 11.5329 19 11.1975 19 10.7838V9.4149C19 9.39855 19 9.38226 19 9.36602C19 9.34779 19 9.32963 19 9.31154C19 8.32003 18.9985 7.53279 18.954 6.89218C18.9071 6.21664 18.8099 5.64871 18.5875 5.12207C18.0555 3.86191 17.0516 2.85922 15.7898 2.32784C15.3696 2.15085 14.923 2.05321 14.4166 1.99715V1.74908C14.4166 1.33537 14.0808 1 13.6666 1C13.2524 1 12.9166 1.33537 12.9166 1.74908V1.92188C12.4931 1.91586 12.0209 1.91586 11.4917 1.91586H9.50078C8.58204 1.91586 7.78234 1.91586 7.08337 1.93718V1.74908ZM12.9166 3.58016V3.42019C12.5022 3.41413 12.0247 3.41402 11.4636 3.41402H9.54167C8.56273 3.41402 7.75961 3.41436 7.08337 3.43596V3.58016C7.08337 3.99386 6.74759 4.32923 6.33337 4.32923C5.91916 4.32923 5.58337 3.99386 5.58337 3.58016V3.55335C4.9727 3.64603 4.55417 3.79418 4.21218 4.0153C3.76794 4.30252 3.38959 4.6804 3.10202 5.12409C2.83246 5.53998 2.67121 6.06919 2.58663 6.92015C2.58387 6.94794 2.5812 6.97597 2.57861 7.00427C2.89187 6.96946 3.28241 6.93043 3.75021 6.89149C5.14586 6.77533 7.22914 6.66002 10 6.66002C12.7709 6.66002 14.8541 6.77533 16.2498 6.89149C16.7362 6.93198 17.1391 6.97257 17.4585 7.00841L17.4576 6.99579C17.4161 6.39783 17.3366 6.01497 17.2054 5.70417C16.8253 4.80405 16.1083 4.08784 15.207 3.70829C14.9931 3.61821 14.7452 3.55253 14.4166 3.5068V3.58016C14.4166 3.99386 14.0808 4.32923 13.6666 4.32923C13.2524 4.32923 12.9166 3.99386 12.9166 3.58016Z"></path>`
	},
	lifebouy: {
		box: 20,
		svg: '<path fill-rule="evenodd" clip-rule="evenodd" d="M19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19C14.9706 19 19 14.9706 19 10ZM17.0016 7.30596C17.3235 8.14209 17.5 9.05043 17.5 10C17.5 10.938 17.3278 11.8357 17.0133 12.6634L14.7805 11.5204C15.1482 10.4549 15.1543 9.29296 14.7988 8.22425L17.0016 7.30596ZM16.3225 5.96393C15.7283 5.03509 14.9351 4.24586 14.0029 3.65642L12.9447 5.69567C13.1603 5.85231 13.3661 6.0276 13.5598 6.22138C13.7674 6.42894 13.9537 6.6503 14.1187 6.88266L16.3225 5.96393ZM12.661 2.98577C11.834 2.67186 10.9371 2.5 10 2.5C9.05762 2.5 8.15584 2.67381 7.32496 2.99111L8.27993 4.99417C9.35946 4.62643 10.5366 4.62904 11.6147 5.002L12.661 2.98577ZM5.98427 3.66453C5.05561 4.25438 4.26547 5.0428 3.67359 5.97004L5.75869 6.87488C5.9222 6.64544 6.10668 6.4267 6.312 6.22138C6.51152 6.02186 6.72372 5.84201 6.94609 5.68197L5.98427 3.66453ZM2.99634 7.31129L5.07646 8.21397C4.71629 9.28916 4.72251 10.4594 5.09512 11.5313L2.98399 12.6563C2.67121 11.8306 2.5 10.9353 2.5 10C2.5 9.05245 2.67572 8.14595 2.99634 7.31129ZM3.65393 13.999C4.24483 14.9347 5.03697 15.7307 5.96956 16.3261L6.96608 14.023C6.73643 13.8593 6.51749 13.6747 6.312 13.4692C6.12001 13.2772 5.94624 13.0735 5.79081 12.8603L3.65393 13.999ZM7.31086 17.0035C8.14564 17.3242 9.05229 17.5 10 17.5C10.9431 17.5 11.8455 17.3259 12.6769 17.0082L11.5887 14.6975C10.5261 15.0587 9.36921 15.0612 8.30535 14.705L7.31086 17.0035ZM14.0175 16.3343C14.9537 15.7393 15.7491 14.9425 16.3423 14.005L14.0878 12.8509C13.9307 13.0676 13.7546 13.2744 13.5598 13.4692C13.3595 13.6695 13.1465 13.85 12.9231 14.0105L14.0175 16.3343ZM11.9347 6.82011C12.1336 6.95192 12.3229 7.10579 12.4992 7.28204C12.6754 7.4583 12.8293 7.64759 12.9611 7.84655C13.0305 7.95124 13.0938 8.0587 13.1511 8.16847C13.6975 9.21533 13.6975 10.4753 13.1511 11.5221C12.985 11.8404 12.768 12.1397 12.4992 12.4086C12.2304 12.6774 11.931 12.8944 11.6128 13.0605C10.5659 13.6069 9.30595 13.6069 8.25908 13.0605C7.94088 12.8944 7.64148 12.6774 7.37266 12.4086C7.10384 12.1397 6.88684 11.8403 6.72075 11.5221C6.17431 10.4753 6.17431 9.21533 6.72075 8.16846C6.88684 7.85026 7.10384 7.55086 7.37266 7.28204C7.64148 7.01322 7.94088 6.79623 8.25908 6.63014C9.30595 6.0837 10.5659 6.0837 11.6128 6.63014C11.7225 6.68743 11.83 6.75075 11.9347 6.82011Z"></path>'
	},
	inboxFull: {
		box: 20,
		svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 6C6.25 5.58579 6.58579 5.25 7 5.25L13 5.25C13.4142 5.25 13.75 5.58579 13.75 6C13.75 6.41421 13.4142 6.75 13 6.75L7 6.75C6.58579 6.75 6.25 6.41421 6.25 6Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 9C7.25 8.58579 7.58579 8.25 8 8.25L12 8.25C12.4142 8.25 12.75 8.58579 12.75 9C12.75 9.41421 12.4142 9.75 12 9.75H8C7.58579 9.75 7.25 9.41421 7.25 9Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.8535 1H8.10224C7.03401 0.999984 6.16813 0.999971 5.4753 1.08568C4.75356 1.17496 4.13677 1.36522 3.60915 1.80412C3.08152 2.24303 2.78216 2.81489 2.56299 3.50831C2.35259 4.17396 2.19498 5.02537 2.00053 6.07576L1.26696 10.0382C1.1442 10.7012 1.07566 11.0714 1.03518 11.4472C1.02396 11.5514 1.01438 11.6558 1.00644 11.7603C0.977835 12.1372 0.977838 12.5137 0.977845 13.1879V13.261C0.977832 14.3059 0.977822 15.1483 1.0531 15.8205C1.13093 16.5154 1.2964 17.1132 1.68719 17.6272C1.87736 17.8773 2.10055 18.1005 2.35066 18.2907C2.86462 18.6814 3.46247 18.8469 4.15738 18.9247C4.82954 19 5.67197 19 6.71676 19H13.2389C14.2837 19 15.1262 19 15.7983 18.9247C16.4932 18.8469 17.0911 18.6814 17.605 18.2907C17.8551 18.1005 18.0783 17.8773 18.2685 17.6272C18.6593 17.1132 18.8248 16.5154 18.9026 15.8205C18.9779 15.1483 18.9779 14.3059 18.9778 13.2611V13.1879C18.9779 12.5136 18.9779 12.1372 18.9492 11.7603C18.9413 11.6558 18.9317 11.5514 18.9205 11.4472C18.88 11.0714 18.8115 10.7012 18.6887 10.0381L17.9552 6.0758C17.7607 5.02539 17.6031 4.17397 17.3927 3.50831C17.1735 2.81489 16.8742 2.24303 16.3465 1.80412C15.8189 1.36522 15.2021 1.17496 14.4804 1.08568C13.7876 0.999971 12.9217 0.999984 11.8535 1ZM4.49877 2.87356C4.74447 2.66917 5.06772 2.53778 5.64608 2.46624C6.24357 2.39233 7.02316 2.39109 8.14758 2.39109H11.8081C12.9325 2.39109 13.7121 2.39233 14.3096 2.46624C14.888 2.53778 15.2112 2.66917 15.4569 2.87356C15.7026 3.07795 15.8907 3.37188 16.0663 3.92755C16.2477 4.5016 16.3909 5.26794 16.5956 6.37357L17.3152 10.2605C17.3727 10.5714 17.4162 10.8068 17.4498 11L15.3442 11C15.0354 11 14.7449 10.9999 14.5009 11.0273C14.2291 11.0578 13.9433 11.1282 13.6743 11.3166C13.4053 11.5051 13.2414 11.7496 13.1199 11.9946C13.0108 12.2145 12.9116 12.4875 12.8061 12.7777L12.7517 12.9272C12.6302 13.2613 12.5592 13.4534 12.4921 13.5888C12.4618 13.6498 12.4413 13.68 12.4304 13.694C12.4253 13.7005 12.4219 13.7039 12.4219 13.7039L12.4208 13.7048L12.4197 13.7054C12.4197 13.7054 12.4153 13.7075 12.4074 13.7101C12.3905 13.7156 12.3552 13.7245 12.2875 13.7321C12.1373 13.7489 11.9325 13.75 11.577 13.75H8.3787C8.02318 13.75 7.81834 13.7489 7.66817 13.7321C7.60049 13.7245 7.56517 13.7156 7.54825 13.7101C7.54449 13.7089 7.54171 13.7078 7.53974 13.7071C7.5376 13.7062 7.53599 13.7054 7.53599 13.7054L7.53485 13.7048L7.53384 13.7039C7.53384 13.7039 7.53034 13.7005 7.52528 13.694C7.51435 13.68 7.4939 13.6498 7.46364 13.5888C7.39648 13.4534 7.32546 13.2613 7.20396 12.9272L7.14963 12.7778C7.04412 12.4875 6.94489 12.2145 6.8358 11.9946C6.71424 11.7496 6.5504 11.5051 6.28139 11.3166C6.01238 11.1282 5.72659 11.0578 5.45475 11.0273C5.21081 10.9999 4.92033 11 4.6115 11L2.50594 11C2.53948 10.8068 2.58296 10.5714 2.64053 10.2605L3.36012 6.37357C3.56481 5.26794 3.70795 4.5016 3.88939 3.92755C4.06503 3.37188 4.25306 3.07795 4.49877 2.87356ZM2.37088 12.5C2.36901 12.69 2.36893 12.9203 2.36893 13.2194C2.36893 14.3156 2.36995 15.08 2.43554 15.6656C2.49959 16.2375 2.61785 16.5528 2.79454 16.7852C2.90864 16.9353 3.04255 17.0692 3.19262 17.1833C3.425 17.36 3.74039 17.4783 4.31221 17.5423C4.89787 17.6079 5.6622 17.6089 6.75841 17.6089H13.1973C14.2935 17.6089 15.0578 17.6079 15.6435 17.5423C16.2153 17.4783 16.5307 17.36 16.7631 17.1833C16.9131 17.0692 17.0471 16.9353 17.1612 16.7852C17.3378 16.5528 17.4561 16.2375 17.5201 15.6656C17.5857 15.08 17.5868 14.3156 17.5868 13.2194C17.5868 12.9203 17.5867 12.69 17.5848 12.5H15.3787C15.0232 12.5 14.8183 12.5011 14.6682 12.5179C14.6005 12.5255 14.5652 12.5345 14.5482 12.5399C14.5404 12.5425 14.536 12.5446 14.536 12.5446L14.5348 12.5452L14.5338 12.5461C14.5338 12.5461 14.5303 12.5495 14.5253 12.556C14.5143 12.57 14.4939 12.6002 14.4636 12.6612C14.3965 12.7966 14.3255 12.9887 14.204 13.3228L14.1496 13.4722C14.0441 13.7625 13.9449 14.0355 13.8358 14.2554C13.7142 14.5004 13.5504 14.745 13.2814 14.9334C13.0124 15.1218 12.7266 15.1922 12.4548 15.2227C12.2108 15.2501 11.9204 15.25 11.6115 15.25H8.34419C8.03538 15.25 7.74487 15.2501 7.50094 15.2227C7.22909 15.1922 6.94331 15.1218 6.6743 14.9334C6.40529 14.745 6.24145 14.5004 6.11989 14.2554C6.0108 14.0355 5.91156 13.7625 5.80606 13.4722L5.75173 13.3228C5.63023 12.9887 5.55921 12.7966 5.49205 12.6612C5.46179 12.6002 5.44134 12.57 5.43041 12.556C5.42535 12.5495 5.42185 12.5461 5.42185 12.5461L5.42084 12.5452L5.4197 12.5446C5.4197 12.5446 5.41529 12.5425 5.40744 12.5399C5.39052 12.5345 5.3552 12.5255 5.28752 12.5179C5.13735 12.5011 4.93251 12.5 4.57699 12.5H2.37088Z"></path>`
	},
	checkSquare: {
		box: 20,
		svg: `<path d="M13.2099 7.56915C12.8791 7.31398 12.4041 7.37527 12.1489 7.70605L9.15729 11.5841L7.8025 10.1472C7.51591 9.84325 7.03718 9.82917 6.73322 10.1158C6.42926 10.4024 6.41518 10.8811 6.70177 11.185L8.09909 12.6671C8.21506 12.7902 8.35038 12.9339 8.48268 13.0396C8.64031 13.1655 8.89566 13.3228 9.2425 13.3056C9.58934 13.2884 9.82791 13.1067 9.97233 12.9658C10.0935 12.8476 10.214 12.6913 10.3172 12.5573L13.3468 8.6301C13.6019 8.29933 13.5407 7.82432 13.2099 7.56915Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0456 1H9.95442C8.27568 0.999993 6.95402 0.999987 5.90414 1.11373C4.83065 1.23004 3.95202 1.47249 3.19966 2.01912C2.74664 2.34826 2.34826 2.74664 2.01912 3.19966C1.47249 3.95202 1.23004 4.83065 1.11373 5.90414C0.999987 6.95402 0.999993 8.27568 1 9.95442V10.0456C0.999993 11.7243 0.999987 13.046 1.11373 14.0959C1.23004 15.1693 1.47249 16.048 2.01912 16.8003C2.34826 17.2534 2.74664 17.6517 3.19966 17.9809C3.95202 18.5275 4.83065 18.77 5.90414 18.8863C6.954 19 8.27565 19 9.95436 19H10.0456C11.7244 19 13.046 19 14.0959 18.8863C15.1693 18.77 16.048 18.5275 16.8003 17.9809C17.2534 17.6517 17.6517 17.2534 17.9809 16.8003C18.5275 16.048 18.77 15.1693 18.8863 14.0959C19 13.046 19 11.7244 19 10.0456V9.95436C19 8.27565 19 6.954 18.8863 5.90414C18.77 4.83065 18.5275 3.95202 17.9809 3.19966C17.6517 2.74664 17.2534 2.34826 16.8003 2.01912C16.048 1.47249 15.1693 1.23004 14.0959 1.11373C13.046 0.999987 11.7243 0.999993 10.0456 1ZM6.06709 2.61778C7.02602 2.51389 8.26584 2.51285 10 2.51285C11.7342 2.51285 12.974 2.51389 13.9329 2.61778C14.8777 2.72014 15.4596 2.91501 15.9111 3.24304C16.2357 3.47886 16.5211 3.76431 16.757 4.08889C17.085 4.54038 17.2799 5.12233 17.3822 6.06709C17.4861 7.02602 17.4872 8.26584 17.4872 10C17.4872 11.7342 17.4861 12.974 17.3822 13.9329C17.2799 14.8777 17.085 15.4596 16.757 15.9111C16.5211 16.2357 16.2357 16.5211 15.9111 16.757C15.4596 17.085 14.8777 17.2799 13.9329 17.3822C12.974 17.4861 11.7342 17.4872 10 17.4872C8.26584 17.4872 7.02602 17.4861 6.06709 17.3822C5.12233 17.2799 4.54038 17.085 4.08889 16.757C3.76431 16.5211 3.47886 16.2357 3.24304 15.9111C2.91501 15.4596 2.72014 14.8777 2.61778 13.9329C2.51389 12.974 2.51285 11.7342 2.51285 10C2.51285 8.26584 2.51389 7.02602 2.61778 6.06709C2.72014 5.12233 2.91501 4.54038 3.24304 4.08889C3.47886 3.76431 3.76431 3.47886 4.08889 3.24304C4.54038 2.91501 5.12233 2.72014 6.06709 2.61778Z"></path>`
	},
	bolt: {
		box: 20,
		svg: '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0375 1.96605C9.63338 2.44878 9.1306 3.20526 8.41226 4.2891L4.65194 9.96274C4.14137 10.7331 3.80791 11.2398 3.62778 11.6241C3.54088 11.8094 3.51375 11.9183 3.50763 11.9765C3.50497 12.0018 3.507 12.013 3.507 12.013L3.50852 12.0162C3.5099 12.0188 3.51033 12.0193 3.51033 12.0193C3.51033 12.0193 3.5184 12.027 3.54119 12.0389C3.5932 12.0659 3.69904 12.1034 3.90178 12.1333C4.32204 12.1954 4.92923 12.1974 5.85429 12.1974L6.44677 12.1974C6.85987 12.1974 7.23304 12.1973 7.53867 12.2331C7.87039 12.272 8.21815 12.3615 8.52506 12.6102C8.62466 12.6909 8.71559 12.7817 8.79639 12.8811C9.04535 13.1876 9.13505 13.5349 9.17395 13.8662C9.20978 14.1714 9.20975 14.5441 9.20971 14.9566L9.20971 14.9962C9.20971 16.2959 9.21089 17.2039 9.28112 17.8292C9.31606 18.1403 9.36302 18.3254 9.40723 18.43C9.41648 18.4518 9.42414 18.4668 9.42971 18.4766C9.44629 18.4831 9.46334 18.4882 9.4807 18.492C9.49078 18.4869 9.50546 18.4786 9.52525 18.4654C9.6199 18.4026 9.76135 18.2742 9.96247 18.0339C10.3666 17.5512 10.8694 16.7947 11.5877 15.7109L15.3481 10.0373C15.8586 9.2669 16.1921 8.76015 16.3722 8.37592C16.4591 8.19056 16.4862 8.08173 16.4924 8.02349C16.4951 7.99797 16.493 7.98701 16.493 7.98701C16.493 7.98701 16.4929 7.98633 16.4915 7.98378C16.4901 7.98123 16.4897 7.98074 16.4897 7.98074C16.4897 7.98074 16.4814 7.97286 16.4588 7.96112C16.4068 7.93407 16.301 7.89659 16.0982 7.86665C15.678 7.80459 15.0708 7.80259 14.1457 7.80259L13.5532 7.80259C13.1401 7.80263 12.767 7.80266 12.4613 7.76687C12.1296 7.72803 11.7819 7.63845 11.4749 7.38983C11.3753 7.30914 11.2844 7.21832 11.2036 7.11886C10.9547 6.81236 10.865 6.46507 10.8261 6.13379C10.7902 5.82857 10.7903 5.4559 10.7903 5.04336L10.7903 5.00384C10.7903 3.70409 10.7891 2.79615 10.7189 2.17084C10.6839 1.85967 10.637 1.67459 10.5928 1.57004C10.5835 1.54818 10.5759 1.53317 10.5703 1.52336C10.5537 1.51694 10.5367 1.51182 10.5193 1.50803C10.5092 1.51314 10.4945 1.52143 10.4748 1.53457C10.3801 1.59738 10.2387 1.72584 10.0375 1.96605ZM10.6733 0.0103537C10.8808 0.0360226 11.0824 0.0966259 11.2696 0.189589C11.6304 0.368754 11.8481 0.673209 11.9799 0.985026C12.107 1.28538 12.1741 1.63682 12.2153 2.00323C12.2961 2.72283 12.2961 3.71616 12.2961 4.95103V5.00384C12.2961 5.46861 12.2973 5.75164 12.3216 5.95867C12.3329 6.05461 12.3467 6.10858 12.3572 6.13837C12.3656 6.16256 12.3714 6.1695 12.3729 6.17132C12.3879 6.18983 12.405 6.20694 12.4236 6.22196C12.4254 6.22346 12.4325 6.22935 12.4568 6.23783C12.4866 6.24827 12.5406 6.26208 12.6367 6.27333C12.844 6.2976 13.1274 6.29881 13.5928 6.29881L14.2065 6.29881C15.054 6.29877 15.7746 6.29873 16.3185 6.37905C16.8766 6.46147 17.4891 6.66096 17.8179 7.27201C18.1467 7.88305 17.9752 8.50329 17.736 9.01354C17.5028 9.51082 17.1051 10.1109 16.6372 10.8167L12.8142 16.5849C12.1318 17.6147 11.5828 18.443 11.1177 18.9985C10.8809 19.2814 10.6306 19.5374 10.3587 19.7179C10.0764 19.9052 9.72661 20.0391 9.32672 19.9896C9.11924 19.964 8.9176 19.9034 8.73039 19.8104C8.36958 19.6312 8.15191 19.3268 8.02006 19.015C7.89305 18.7146 7.82585 18.3632 7.7847 17.9968C7.70388 17.2772 7.7039 16.2838 7.70391 15.0489V14.9962C7.70391 14.5314 7.7027 14.2484 7.67839 14.0413C7.66713 13.9454 7.6533 13.8914 7.64285 13.8616C7.63436 13.8374 7.62862 13.8305 7.62713 13.8287C7.61208 13.8102 7.59499 13.7931 7.57645 13.778C7.57645 13.778 7.56849 13.771 7.54325 13.7622C7.51343 13.7517 7.45938 13.7379 7.36331 13.7267C7.156 13.7024 6.8726 13.7012 6.4072 13.7012L5.79354 13.7012C4.94598 13.7012 4.22542 13.7013 3.68151 13.6209C3.12342 13.5385 2.51085 13.339 2.18208 12.728C1.85331 12.1169 2.02483 11.4967 2.26404 10.9865C2.49717 10.4892 2.89491 9.88913 3.36275 9.18334L7.18575 3.41511C7.86823 2.38534 8.41722 1.557 8.88233 1.00147C9.11915 0.718611 9.36941 0.462585 9.64132 0.282128C9.92361 0.0947854 10.2734 -0.0391162 10.6733 0.0103537Z"></path>'
	},
	share: {
		box: 20,
		svg: `<path d="M10.5348 1.22155C10.2394 0.926149 9.7605 0.926149 9.4651 1.22155L5.80129 4.88536C5.50589 5.18076 5.50589 5.65971 5.80129 5.95511C6.09669 6.25051 6.57563 6.25051 6.87103 5.95511L9.24355 3.58259V12.7479C9.24355 13.1656 9.58221 13.5043 9.99997 13.5043C10.4177 13.5043 10.7564 13.1656 10.7564 12.7479V3.58259L13.1289 5.95511C13.4243 6.25051 13.9033 6.25051 14.1987 5.95511C14.4941 5.65971 14.4941 5.18076 14.1987 4.88536L10.5348 1.22155Z"></path>
<path d="M6.33619 9.24358H5.85138C5.23389 9.24357 4.73226 9.24357 4.32322 9.27148C3.90148 9.30025 3.52326 9.3612 3.16325 9.51032C2.3046 9.86599 1.62241 10.5482 1.26675 11.4068C1.11763 11.7668 1.05668 12.1451 1.0279 12.5668C0.999992 12.9758 0.999995 13.4775 1 14.095V14.1486C0.999995 14.7661 0.999992 15.2677 1.0279 15.6768C1.05668 16.0985 1.11763 16.4767 1.26675 16.8367C1.62241 17.6954 2.3046 18.3776 3.16325 18.7333C3.52326 18.8824 3.90148 18.9433 4.32322 18.9721C4.73228 19 5.23395 19 5.85148 19H14.1485C14.7661 19 15.2677 19 15.6768 18.9721C16.0985 18.9433 16.4767 18.8824 16.8367 18.7333C17.6954 18.3776 18.3776 17.6954 18.7333 16.8367C18.8824 16.4767 18.9433 16.0985 18.9721 15.6768C19 15.2677 19 14.7661 19 14.1485V14.0951C19 13.4775 19 12.9759 18.9721 12.5668C18.9433 12.1451 18.8824 11.7668 18.7333 11.4068C18.3776 10.5482 17.6954 9.86599 16.8367 9.51032C16.4767 9.3612 16.0985 9.30025 15.6768 9.27148C15.2677 9.24357 14.7661 9.24357 14.1486 9.24358H13.6638C13.2461 9.24358 12.9074 9.58224 12.9074 10C12.9074 10.4178 13.2461 10.7564 13.6638 10.7564H14.1218C14.7723 10.7564 15.2223 10.7568 15.5738 10.7808C15.9185 10.8043 16.1129 10.848 16.2578 10.908C16.7458 11.1101 17.1334 11.4978 17.3356 11.9858C17.3956 12.1307 17.4392 12.3251 17.4628 12.6698C17.4867 13.0213 17.4872 13.4712 17.4872 14.1218C17.4872 14.7723 17.4867 15.2223 17.4628 15.5738C17.4392 15.9185 17.3956 16.1129 17.3356 16.2578C17.1334 16.7458 16.7458 17.1334 16.2578 17.3356C16.1129 17.3956 15.9185 17.4392 15.5738 17.4628C15.2223 17.4867 14.7723 17.4872 14.1218 17.4872H5.87821C5.22767 17.4872 4.77768 17.4867 4.4262 17.4628C4.08148 17.4392 3.88714 17.3956 3.74219 17.3356C3.25424 17.1334 2.86656 16.7458 2.66444 16.2578C2.6044 16.1129 2.56076 15.9185 2.53724 15.5738C2.51326 15.2223 2.51285 14.7723 2.51285 14.1218C2.51285 13.4712 2.51326 13.0213 2.53724 12.6698C2.56076 12.3251 2.6044 12.1307 2.66444 11.9858C2.86656 11.4978 3.25424 11.1101 3.74219 10.908C3.88714 10.848 4.08148 10.8043 4.4262 10.7808C4.77768 10.7568 5.22767 10.7564 5.87821 10.7564H6.33619C6.75395 10.7564 7.09261 10.4178 7.09261 10C7.09261 9.58224 6.75395 9.24358 6.33619 9.24358Z"></path>`
	},
	editPencil: {
		box: 20,
		svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M15.157 2.54498C15.1692 2.55593 15.1815 2.56692 15.1938 2.57795L16.0902 3.38075C16.1025 3.39178 16.1148 3.40277 16.127 3.41372C16.6228 3.85774 17.0501 4.24031 17.3508 4.59246C17.6731 4.96987 17.9245 5.39523 17.953 5.93419C17.9815 6.47315 17.7764 6.92243 17.4957 7.33143C17.2338 7.71306 16.8493 8.13817 16.4031 8.63155L8.76197 17.0808C8.7375 17.1078 8.71334 17.1346 8.68947 17.161C8.26875 17.6271 7.93599 17.9956 7.49506 18.2258C7.05413 18.4559 6.56024 18.5187 5.93579 18.5982C5.90036 18.6027 5.8645 18.6073 5.82821 18.6119L4.07295 18.8368C3.57681 18.9004 3.12818 18.9579 2.76259 18.9534C2.36385 18.9485 1.92972 18.871 1.56533 18.5447C1.20094 18.2184 1.07792 17.7969 1.03113 17.4028C0.98822 17.0415 0.998592 16.5914 1.01007 16.0938L1.05046 14.3331C1.0513 14.2967 1.05209 14.2607 1.05288 14.2252C1.0667 13.5989 1.07764 13.1035 1.2613 12.643C1.44497 12.1824 1.77837 11.8144 2.1999 11.3491C2.22382 11.3227 2.24802 11.296 2.27249 11.2689L9.88048 2.85637C9.89156 2.84411 9.90261 2.8319 9.91362 2.81972C10.3598 2.32629 10.7442 1.90115 11.0981 1.6019C11.4774 1.28119 11.9048 1.03101 12.4464 1.00263C12.988 0.974255 13.4395 1.17838 13.8505 1.45768C14.234 1.71829 14.6612 2.10091 15.157 2.54498ZM13.0018 2.69441C12.7299 2.5096 12.6064 2.49391 12.5255 2.49815C12.4446 2.50239 12.3236 2.53089 12.0726 2.7431C11.805 2.96937 11.4879 3.31768 10.9991 3.85817L3.39111 12.2708C2.86247 12.8553 2.73154 13.0162 2.66008 13.1954C2.58862 13.3746 2.57302 13.5811 2.55498 14.3673L2.51571 16.079C2.5028 16.6416 2.49674 16.9836 2.52564 17.227C2.53901 17.3397 2.55662 17.3955 2.56699 17.4201C2.56933 17.4256 2.57114 17.4292 2.57227 17.4313C2.57444 17.4322 2.57821 17.4336 2.584 17.4353C2.6097 17.443 2.66731 17.4546 2.78127 17.456C3.02753 17.459 3.36874 17.4171 3.92961 17.3452L5.63605 17.1266C6.41984 17.0262 6.62454 16.989 6.79609 16.8995C6.96765 16.81 7.11472 16.6635 7.64336 16.079L15.2513 7.66638C15.7401 7.12589 16.0549 6.77545 16.2529 6.48688C16.4386 6.21626 16.4544 6.09344 16.4502 6.01294C16.4459 5.93244 16.4173 5.81194 16.204 5.56222C15.9766 5.29594 15.6266 4.98034 15.0835 4.49392L14.1871 3.69112C13.6439 3.20471 13.2918 2.89147 13.0018 2.69441Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.4722 18.2512C10.4722 17.8377 10.8091 17.5024 11.2246 17.5024H18.2475C18.6631 17.5024 19 17.8377 19 18.2512C19 18.6648 18.6631 19 18.2475 19H11.2246C10.8091 19 10.4722 18.6648 10.4722 18.2512Z"></path>`
	},
	bin: {
		box: 20,
		svg: `<path d="M7.9814 8.95183C7.56974 8.95183 7.23625 9.28784 7.23625 9.70204V14.5704C7.23625 14.9846 7.56974 15.3206 7.9814 15.3206C8.39306 15.3206 8.72656 14.9846 8.72656 14.5704V9.70204C8.72656 9.28784 8.39306 8.95183 7.9814 8.95183Z"></path>
<path d="M11.8492 8.95183C11.4375 8.95183 11.104 9.28784 11.104 9.70204V14.5704C11.104 14.9846 11.4375 15.3206 11.8492 15.3206C12.2608 15.3206 12.5943 14.9846 12.5943 14.5704V9.70204C12.5943 9.28784 12.2608 8.95183 11.8492 8.95183Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.511 3.18722C14.5353 3.42349 14.5449 3.69281 14.5486 3.99378C14.6333 4.00304 14.716 4.01323 14.7967 4.02444C15.7187 4.15257 16.4937 4.42758 17.0887 5.07168C17.6838 5.71577 17.9002 6.51395 17.9606 7.44913C18.0188 8.35066 17.9367 9.49329 17.8348 10.9118L17.5471 14.9158C17.458 16.1566 17.3858 17.161 17.2255 17.9494C17.0587 18.77 16.7784 19.4578 16.2031 19.9967C15.6278 20.5356 14.9263 20.7675 14.1014 20.8759C13.3088 20.98 12.3087 20.98 11.0733 20.98H9.07507C7.87246 20.98 6.89806 20.98 6.12376 20.8796C5.31738 20.775 4.63009 20.5514 4.05976 20.0323C3.48945 19.5133 3.19928 18.8473 3.0147 18.05C2.83745 17.2844 2.73928 16.3083 2.61811 15.1034L2.21541 11.0997C2.06924 9.64671 1.95162 8.4775 1.98601 7.55398C2.02164 6.5968 2.22247 5.77659 2.82031 5.11054C3.41817 4.44447 4.20839 4.1606 5.1506 4.02843C5.20847 4.02032 5.26739 4.01272 5.32737 4.0056C5.33098 3.69986 5.34042 3.42658 5.36506 3.18722C5.40726 2.77736 5.50038 2.38297 5.74317 2.02607C5.90997 1.78088 6.12045 1.56894 6.36395 1.40097C6.71842 1.15647 7.11014 1.06269 7.51722 1.02019C7.90272 0.979947 8.37779 0.979963 8.93426 0.979981H10.9428C11.4993 0.979963 11.9734 0.979947 12.3589 1.02019C12.7659 1.06269 13.1577 1.15647 13.5121 1.40097C13.7556 1.56894 13.9661 1.78088 14.1329 2.02607C14.3757 2.38297 14.4688 2.77736 14.511 3.18722ZM13.0287 3.34193C13.0449 3.4997 13.0529 3.68413 13.0568 3.9113C12.5417 3.90094 11.976 3.90095 11.3577 3.90096H8.67709C7.99624 3.90095 7.37781 3.90094 6.81919 3.91413C6.82311 3.68566 6.83112 3.50036 6.84743 3.34193C6.87715 3.0533 6.92787 2.93987 6.97274 2.87391C7.03549 2.78166 7.11468 2.70193 7.20628 2.63874C7.27174 2.59359 7.38433 2.54252 7.67093 2.5126C7.97041 2.48134 8.36657 2.4804 8.9711 2.4804H10.905C11.5095 2.4804 11.9057 2.48134 12.2051 2.5126C12.4917 2.54252 12.6043 2.59359 12.6698 2.63874C12.7614 2.70193 12.8406 2.78166 12.9033 2.87391C12.9482 2.93987 12.9989 3.0533 13.0287 3.34193ZM5.35625 5.51449C6.15042 5.40309 7.21329 5.40137 8.73467 5.40137H11.301C12.7834 5.40137 13.8179 5.40306 14.5929 5.51076C15.3465 5.61549 15.732 5.80619 15.9975 6.09355C16.263 6.38093 16.4241 6.78192 16.4734 7.54645C16.5242 8.33262 16.4512 9.37174 16.3443 10.8606L16.0645 14.7552C15.9707 16.0608 15.904 16.9671 15.7655 17.6485C15.6312 18.3087 15.4478 18.6548 15.1879 18.8982C14.9281 19.1416 14.5721 19.3009 13.9085 19.3881C13.2237 19.4781 12.3211 19.4796 11.0212 19.4796H9.12641C7.86032 19.4796 6.98218 19.4781 6.31418 19.3915C5.66728 19.3076 5.31727 19.1542 5.05916 18.9193C4.80103 18.6844 4.6142 18.3491 4.4661 17.7094C4.31318 17.0489 4.22325 16.1693 4.09567 14.9009L3.70394 11.0062C3.55063 9.48208 3.44523 8.41706 3.47527 7.61019C3.50451 6.82484 3.66004 6.41286 3.92602 6.11653C4.19199 5.82021 4.58331 5.62291 5.35625 5.51449Z"></path>`
	},
	copy: {
		box: 20,
		svg: `<path d="M10 1H7.19696C5.94841 0.999982 4.93496 0.999967 4.13625 1.10735C3.30412 1.21923 2.59283 1.45999 2.02643 2.02638C1.46003 2.59278 1.21927 3.30407 1.1074 4.1362C1.00001 4.93491 1.00003 5.94836 1.00005 7.19691L1.00002 10.1158C0.999776 10.8565 0.999603 11.3756 1.11945 11.8229C1.44348 13.0322 2.38806 13.9768 3.59736 14.3008C4.04464 14.4207 4.56382 14.4205 5.3045 14.4203L5.42028 14.4202C5.83804 14.4202 6.17671 14.0816 6.17671 13.6638C6.17671 13.246 5.83804 12.9074 5.42028 12.9074C4.5194 12.9074 4.21783 12.9009 3.98891 12.8395C3.30168 12.6554 2.7649 12.1186 2.58075 11.4314C2.51941 11.2025 2.5129 10.9009 2.5129 10V7.25214C2.5129 5.93537 2.5145 5.02394 2.60676 4.33779C2.69608 3.67343 2.85771 3.33459 3.09617 3.09613C3.33464 2.85766 3.67348 2.69603 4.33783 2.60671C5.02398 2.51446 5.93541 2.51285 7.25219 2.51285H10C11.0999 2.51285 11.9915 3.40445 11.9915 4.50428C11.9915 4.92205 12.3301 5.26071 12.7479 5.26071C13.1657 5.26071 13.5043 4.92205 13.5043 4.50428C13.5043 2.56892 11.9354 1 10 1Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8031 5.57976H12.6926C11.4441 5.57975 10.4306 5.57973 9.63192 5.68711C8.79979 5.79899 8.0885 6.03975 7.5221 6.60615C6.9557 7.17254 6.71495 7.88383 6.60307 8.71597C6.49569 9.51467 6.4957 10.5281 6.49572 11.7767V12.8031C6.4957 14.0516 6.49569 15.0651 6.60307 15.8638C6.71495 16.6959 6.9557 17.4072 7.5221 17.9736C8.0885 18.54 8.79979 18.7808 9.63192 18.8926C10.4306 19 11.4441 19 12.6927 19H12.803C14.0516 19 15.0651 19 15.8638 18.8926C16.6959 18.7808 17.4072 18.54 17.9736 17.9736C18.54 17.4072 18.7808 16.6959 18.8927 15.8638C19 15.0651 19 14.0516 19 12.803V11.7767C19 10.5281 19 9.51468 18.8927 8.71597C18.7808 7.88383 18.54 7.17254 17.9736 6.60615C17.4072 6.03975 16.6959 5.79899 15.8638 5.68711C15.0651 5.57973 14.0516 5.57975 12.8031 5.57976ZM9.8335 7.18647C10.5197 7.09422 11.4311 7.09261 12.7479 7.09261C14.0646 7.09261 14.9761 7.09422 15.6622 7.18647C16.3266 7.27579 16.6654 7.43742 16.9039 7.67589C17.1423 7.91436 17.304 8.25319 17.3933 8.91755C17.4855 9.6037 17.4872 10.5151 17.4872 11.8319V12.7479C17.4872 14.0646 17.4855 14.9761 17.3933 15.6622C17.304 16.3266 17.1423 16.6654 16.9039 16.9039C16.6654 17.1423 16.3266 17.304 15.6622 17.3933C14.9761 17.4855 14.0646 17.4871 12.7479 17.4871C11.4311 17.4871 10.5197 17.4855 9.8335 17.3933C9.16915 17.304 8.83031 17.1423 8.59185 16.9039C8.35338 16.6654 8.19175 16.3266 8.10243 15.6622C8.01018 14.9761 8.00857 14.0646 8.00857 12.7479V11.8319C8.00857 10.5151 8.01018 9.6037 8.10243 8.91755C8.19175 8.25319 8.35338 7.91436 8.59185 7.67589C8.83031 7.43742 9.16915 7.27579 9.8335 7.18647Z"></path>`
	},
	eye: {
		box: 20,
		svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.21314C8.8144 6.21314 7.83961 6.61698 7.16667 7.34639C6.50383 8.06485 6.20655 9.01986 6.20655 10C6.20655 10.9801 6.50383 11.9352 7.16667 12.6536C7.83961 13.383 8.8144 13.7869 10 13.7869C11.1856 13.7869 12.1604 13.383 12.8333 12.6536C13.4962 11.9352 13.7934 10.9801 13.7934 10C13.7934 9.01986 13.4962 8.06485 12.8333 7.34639C12.1604 6.61698 11.1856 6.21314 10 6.21314ZM8.36461 8.44777C8.68478 8.10074 9.19961 7.83891 10 7.83891C10.8004 7.83891 11.3152 8.10074 11.6354 8.44777C11.9657 8.80575 12.1648 9.33776 12.1648 10C12.1648 10.6622 11.9657 11.1943 11.6354 11.5522C11.3152 11.8993 10.8004 12.1611 10 12.1611C9.19961 12.1611 8.68478 11.8993 8.36461 11.5522C8.03435 11.1943 7.83515 10.6622 7.83515 10C7.83515 9.33776 8.03435 8.80575 8.36461 8.44777Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C6.11297 2 3.58698 3.31971 2.04049 5.02671C0.5183 6.7069 0 8.70232 0 10C0 11.2977 0.5183 13.2931 2.04049 14.9733C3.58698 16.6803 6.11297 18 10 18C13.887 18 16.413 16.6803 17.9595 14.9733C19.4817 13.2931 20 11.2977 20 10C20 8.70232 19.4817 6.7069 17.9595 5.02671C16.413 3.31971 13.887 2 10 2ZM3.17925 6.02303C4.40408 4.67107 6.49692 3.49832 10 3.49832C13.5031 3.49832 15.5959 4.67107 16.8208 6.02303C18.0699 7.4018 18.4753 9.03181 18.4753 10C18.4753 10.9682 18.0699 12.5982 16.8208 13.977C15.5959 15.3289 13.5031 16.5017 10 16.5017C6.49692 16.5017 4.40408 15.3289 3.17925 13.977C1.93013 12.5982 1.52468 10.9682 1.52468 10C1.52468 9.03181 1.93013 7.4018 3.17925 6.02303Z"></path>`
	},
	motionCirclesLines: {
		box: 20,
		svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M4.38425 10.7561C2.79307 10.7561 1.50317 12.0422 1.50317 13.6287C1.50317 15.2151 2.79307 16.5013 4.38425 16.5013C4.66189 16.5013 4.92915 16.4623 5.18144 16.3901C5.58041 16.2758 5.99671 16.5057 6.11129 16.9035C6.22586 17.3013 5.99532 17.7164 5.59635 17.8306C5.21052 17.9411 4.80365 18 4.38425 18C1.96289 18 0 16.0429 0 13.6287C0 11.2144 1.96289 9.2573 4.38425 9.2573C4.80365 9.2573 5.21052 9.31624 5.59635 9.42671C5.99532 9.54095 6.22586 9.95603 6.11129 10.3538C5.99671 10.7516 5.58041 10.9815 5.18144 10.8672C4.92915 10.795 4.66189 10.7561 4.38425 10.7561Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.90608 10.7561C8.31491 10.7561 7.02501 12.0422 7.02501 13.6287C7.02501 15.2151 8.31491 16.5013 9.90608 16.5013C10.1837 16.5013 10.451 16.4623 10.7033 16.3901C11.1022 16.2758 11.5185 16.5057 11.6331 16.9035C11.7477 17.3013 11.5172 17.7164 11.1182 17.8306C10.7324 17.9411 10.3255 18 9.90608 18C7.48473 18 5.52184 16.0429 5.52184 13.6287C5.52184 11.2144 7.48473 9.2573 9.90608 9.2573C10.3255 9.2573 10.7324 9.31624 11.1182 9.42671C11.5172 9.54095 11.7477 9.95603 11.6331 10.3538C11.5185 10.7516 11.1022 10.9815 10.7033 10.8672C10.451 10.795 10.1837 10.7561 9.90608 10.7561Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6471 16.5013C17.2209 16.5013 18.4968 15.2291 18.4968 13.6599C18.4968 12.0906 17.2209 10.8185 15.6471 10.8185C14.0732 10.8185 12.7973 12.0906 12.7973 13.6599C12.7973 15.2291 14.0732 16.5013 15.6471 16.5013ZM15.6471 18C18.0511 18 20 16.0569 20 13.6599C20 11.2629 18.0511 9.31975 15.6471 9.31975C13.243 9.31975 11.2941 11.2629 11.2941 13.6599C11.2941 16.0569 13.243 18 15.6471 18Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.74937C0 2.33551 0.336496 2 0.751585 2H6.76426C7.17935 2 7.51585 2.33551 7.51585 2.74937C7.51585 3.16324 7.17935 3.49875 6.76426 3.49875H0.751585C0.336496 3.49875 0 3.16324 0 2.74937Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.00634 5.74687C3.00634 5.333 3.34284 4.9975 3.75792 4.9975H13.278C13.6931 4.9975 14.0296 5.333 14.0296 5.74687C14.0296 6.16074 13.6931 6.49624 13.278 6.49624H3.75792C3.34284 6.49624 3.00634 6.16074 3.00634 5.74687Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.01691 2.74937C8.01691 2.33551 8.3534 2 8.76849 2H9.7706C10.1857 2 10.5222 2.33551 10.5222 2.74937C10.5222 3.16324 10.1857 3.49875 9.7706 3.49875H8.76849C8.3534 3.49875 8.01691 3.16324 8.01691 2.74937Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.74687C0 5.333 0.336496 4.9975 0.751585 4.9975H1.7537C2.16879 4.9975 2.50528 5.333 2.50528 5.74687C2.50528 6.16074 2.16879 6.49624 1.7537 6.49624H0.751585C0.336496 6.49624 0 6.16074 0 5.74687Z"></path>`
	},
	sidebarArrow: {
		box: 20,
		svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M5.47649 12.5371C5.7731 12.8262 6.24793 12.8201 6.53706 12.5235L8.53707 10.4717C8.67595 10.3293 8.75252 10.1375 8.74995 9.93852C8.74737 9.73958 8.66586 9.54982 8.52334 9.41099L6.52336 7.46279C6.22665 7.17376 5.75182 7.17999 5.46279 7.4767C5.17376 7.77341 5.17999 8.24824 5.4767 8.53727L6.93926 9.96196L5.46294 11.4765C5.17381 11.7731 5.17988 12.2479 5.47649 12.5371Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 9.89819C1 6.14846 1 4.2736 1.95491 2.95927C2.26331 2.53479 2.6366 2.16151 3.06107 1.85311C4.3754 0.898193 6.25027 0.898193 10 0.898193C13.7497 0.898193 15.6246 0.898193 16.9389 1.85311C17.3634 2.16151 17.7367 2.53479 18.0451 2.95927C19 4.2736 19 6.14846 19 9.89819C19 13.6479 19 15.5228 18.0451 16.8371C17.7367 17.2616 17.3634 17.6349 16.9389 17.9433C15.6246 18.8982 13.7497 18.8982 10 18.8982C6.25027 18.8982 4.3754 18.8982 3.06107 17.9433C2.6366 17.6349 2.26331 17.2616 1.95491 16.8371C1 15.5228 1 13.6479 1 9.89819ZM10 17.3982C8.09172 17.3982 6.781 17.3961 5.77883 17.2876C4.80473 17.182 4.3016 16.9905 3.94275 16.7298C3.64562 16.5139 3.38432 16.2526 3.16844 15.9554C2.90772 15.5966 2.71618 15.0935 2.61064 14.1194C2.50206 13.1172 2.5 11.8065 2.5 9.89819C2.5 7.98991 2.50206 6.67919 2.61064 5.67702C2.71618 4.70292 2.90772 4.19979 3.16844 3.84095C3.38432 3.54381 3.64562 3.28251 3.94275 3.06663C4.3016 2.80592 4.80473 2.61437 5.77883 2.50883C6.781 2.40025 8.09172 2.39819 10 2.39819C10.2563 2.39819 10.5019 2.39823 10.7373 2.39856L10.7373 17.3978C10.5019 17.3982 10.2563 17.3982 10 17.3982ZM12.2373 17.3875L12.2373 2.40893C13.0242 2.42157 13.6695 2.44906 14.2212 2.50883C15.1953 2.61437 15.6984 2.80592 16.0572 3.06663C16.3544 3.28251 16.6157 3.54381 16.8316 3.84095C17.0923 4.19979 17.2838 4.70292 17.3894 5.67702C17.4979 6.67919 17.5 7.98991 17.5 9.89819C17.5 11.8065 17.4979 13.1172 17.3894 14.1194C17.2838 15.0935 17.0923 15.5966 16.8316 15.9554C16.6157 16.2526 16.3544 16.5139 16.0572 16.7298C15.6984 16.9905 15.1953 17.182 14.2212 17.2876C13.6695 17.3473 13.0242 17.3748 12.2373 17.3875Z"></path>`
	},
	arrowLeft: {
		box: 20,
		svg: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.66723 4.75102C9.39224 4.44231 8.91851 4.41451 8.60914 4.68891L3.25155 9.44103C3.09155 9.58295 3 9.78638 3 10C3 10.2136 3.09155 10.417 3.25155 10.559L8.60914 15.3111C8.91851 15.5855 9.39224 15.5577 9.66723 15.249C9.94223 14.9403 9.91436 14.4676 9.60499 14.1932L5.72074 10.7479H16.2505C16.6644 10.7479 17 10.413 17 10C17 9.58696 16.6644 9.25213 16.2505 9.25213H5.72074L9.60499 5.80685C9.91436 5.53244 9.94223 5.05973 9.66723 4.75102Z"></path>'
	},
	arrowRight: {
		box: 20,
		svg: '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3328 4.75102C10.6078 4.44231 11.0815 4.41451 11.3909 4.68891L16.7484 9.44103C16.9085 9.58295 17 9.78638 17 10C17 10.2136 16.9085 10.417 16.7484 10.559L11.3909 15.3111C11.0815 15.5855 10.6078 15.5577 10.3328 15.249C10.0578 14.9403 10.0856 14.4676 10.395 14.1932L14.2793 10.7479H3.74948C3.33555 10.7479 3 10.413 3 10C3 9.58696 3.33555 9.25213 3.74948 9.25213H14.2793L10.395 5.80685C10.0856 5.53244 10.0578 5.05973 10.3328 4.75102Z"></path>'
	},
	arrowUp: {
		box: 20,
		svg: '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.75102 9.66723C4.44231 9.39224 4.41451 8.91851 4.68891 8.60914L9.44103 3.25155C9.58295 3.09155 9.78638 3 10 3C10.2136 3 10.417 3.09155 10.559 3.25155L15.3111 8.60914C15.5855 8.91851 15.5577 9.39224 15.249 9.66723C14.9403 9.94223 14.4676 9.91436 14.1932 9.60499L10.7479 5.72074L10.7479 16.2505C10.7479 16.6644 10.413 17 10 17C9.58696 17 9.25213 16.6644 9.25213 16.2505L9.25213 5.72074L5.80685 9.60499C5.53244 9.91436 5.05973 9.94223 4.75102 9.66723Z""></path>'
	},
	arrowDown: {
		box: 20,
		svg: '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.249 10.3328C15.5577 10.6078 15.5855 11.0815 15.3111 11.3909L10.559 16.7484C10.417 16.9085 10.2136 17 10 17C9.78638 17 9.58295 16.9085 9.44103 16.7484L4.68891 11.3909C4.41451 11.0815 4.44231 10.6078 4.75102 10.3328C5.05973 10.0578 5.53244 10.0856 5.80685 10.395L9.25213 14.2793L9.25213 3.74947C9.25213 3.33555 9.58696 3 10 3C10.413 3 10.7479 3.33555 10.7479 3.74948L10.7479 14.2793L14.1932 10.395C14.4676 10.0856 14.9403 10.0578 15.249 10.3328Z""></path>'
	},
	chevron: {
		box: 20,
		svg: '<path fill-rule="evenodd" clip-rule="evenodd" d="M6.96967 15.7803C6.67678 15.4874 6.67678 15.0126 6.96967 14.7197L11.4393 10.25L6.96967 5.78033C6.67678 5.48744 6.67678 5.01256 6.96967 4.71967C7.26256 4.42678 7.73744 4.42678 8.03033 4.71967L13.0303 9.71967C13.3232 10.0126 13.3232 10.4874 13.0303 10.7803L8.03033 15.7803C7.73744 16.0732 7.26256 16.0732 6.96967 15.7803Z"></path>'
	},
	glasses: {
		box: 20,
		svg: '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.37024 2L4.95017 2C5.33548 2 5.64784 2.30701 5.64784 2.68572C5.64784 3.06443 5.33548 3.37143 4.95017 3.37143H4.41861C3.52185 3.37143 2.91947 3.37289 2.47013 3.43226C2.04087 3.48899 1.85715 3.58702 1.73593 3.70617C1.6147 3.82531 1.51496 4.00588 1.45724 4.42779C1.39683 4.86942 1.39535 5.46148 1.39535 6.34286V10.2286H4.9194C5.54226 10.2286 6.062 10.2285 6.48277 10.2706C6.92321 10.3147 7.33193 10.4104 7.7003 10.6523C7.97962 10.8357 8.21945 11.0715 8.40609 11.346C8.65222 11.708 8.74963 12.1098 8.79444 12.5426C8.80819 12.6755 8.81752 12.8184 8.82385 12.9714H11.1761C11.1825 12.8184 11.1918 12.6755 11.2056 12.5426C11.2504 12.1098 11.3478 11.708 11.5939 11.346C11.7805 11.0715 12.0204 10.8357 12.2997 10.6523C12.6681 10.4104 13.0768 10.3147 13.5172 10.2706C13.938 10.2285 14.4577 10.2286 15.0806 10.2286H18.6046V6.34286C18.6046 5.46148 18.6032 4.86942 18.5427 4.42779C18.485 4.00588 18.3853 3.82531 18.2641 3.70617C18.1428 3.58702 17.9591 3.48899 17.5299 3.43226C17.0805 3.37289 16.4781 3.37143 15.5814 3.37143H15.0498C14.6645 3.37143 14.3521 3.06443 14.3521 2.68572C14.3521 2.30701 14.6645 2 15.0498 2L15.6298 2C16.4655 1.99998 17.1625 1.99995 17.7158 2.07306C18.2998 2.15023 18.827 2.31999 19.2507 2.73642C19.6744 3.15285 19.8471 3.67107 19.9256 4.24505C20 4.78884 20 5.47383 20 6.29528V13.7047C20 14.5261 20 15.2112 19.9256 15.755C19.8471 16.3289 19.6744 16.8472 19.2507 17.2636C18.827 17.68 18.2998 17.8498 17.7158 17.9269C17.1625 18 16.4655 18 15.6297 18H15.0806C14.4577 18 13.938 18 13.5172 17.958C13.0768 17.9139 12.6681 17.8182 12.2997 17.5763C12.0204 17.3928 11.7805 17.1571 11.5939 16.8826C11.3478 16.5205 11.2504 16.1188 11.2056 15.6859C11.1673 15.3167 11.1632 14.87 11.1628 14.3429H8.83716C8.83674 14.87 8.83265 15.3167 8.79444 15.6859C8.74963 16.1188 8.65222 16.5205 8.40609 16.8826C8.21945 17.1571 7.97962 17.3928 7.7003 17.5763C7.33193 17.8182 6.92321 17.9139 6.48277 17.958C6.062 18 5.54224 18 4.91937 18H4.37024C3.53444 18 2.83749 18 2.28421 17.9269C1.70021 17.8498 1.17296 17.68 0.749265 17.2636C0.325572 16.8472 0.152855 16.3289 0.074339 15.755C-4.73484e-05 15.2112 -2.53725e-05 14.5262 9.87685e-07 13.7047V6.29532C-2.53725e-05 5.47386 -4.73484e-05 4.78884 0.074339 4.24505C0.152855 3.67107 0.325572 3.15285 0.749265 2.73642C1.17296 2.31999 1.70021 2.15023 2.28421 2.07306C2.83749 1.99995 3.53445 1.99998 4.37024 2ZM1.39535 11.6V13.6571C1.39535 14.5385 1.39683 15.1306 1.45724 15.5722C1.51496 15.9941 1.6147 16.1747 1.73593 16.2938C1.85715 16.413 2.04087 16.511 2.47013 16.5677C2.91947 16.6271 3.52185 16.6286 4.41861 16.6286H4.88372C5.55148 16.6286 5.99979 16.6277 6.34156 16.5936C6.67167 16.5606 6.8242 16.5022 6.92508 16.436C7.05205 16.3526 7.16106 16.2454 7.2459 16.1207C7.31331 16.0215 7.37267 15.8716 7.40625 15.5471C7.44102 15.2112 7.44186 14.7706 7.44186 14.1143C7.44186 13.458 7.44102 13.0174 7.40625 12.6814C7.37267 12.357 7.31331 12.2071 7.2459 12.1079C7.16106 11.9831 7.05205 11.876 6.92508 11.7926C6.8242 11.7264 6.67167 11.668 6.34156 11.635C5.99979 11.6008 5.55148 11.6 4.88372 11.6H1.39535ZM18.6046 11.6H15.1163C14.4485 11.6 14.0002 11.6008 13.6584 11.635C13.3283 11.668 13.1758 11.7264 13.0749 11.7926C12.9479 11.876 12.8389 11.9831 12.7541 12.1079C12.6867 12.2071 12.6273 12.357 12.5937 12.6814C12.559 13.0174 12.5581 13.458 12.5581 14.1143C12.5581 14.7706 12.559 15.2112 12.5937 15.5471C12.6273 15.8716 12.6867 16.0215 12.7541 16.1207C12.8389 16.2454 12.9479 16.3526 13.0749 16.436C13.1758 16.5022 13.3283 16.5606 13.6584 16.5936C14.0002 16.6277 14.4485 16.6286 15.1163 16.6286H15.5814C16.4781 16.6286 17.0805 16.6271 17.5299 16.5677C17.9591 16.511 18.1428 16.413 18.2641 16.2938C18.3853 16.1747 18.485 15.9941 18.5427 15.5722C18.6032 15.1306 18.6046 14.5385 18.6046 13.6571V11.6Z"></path>'
	},
	floppy: {
		box: 20,
		svg: `<path d="M7.25213 4.66381C6.83437 4.66381 6.49571 5.00248 6.49571 5.42024C6.49571 5.838 6.83437 6.17666 7.25213 6.17666L12.7478 6.17666C13.1656 6.17666 13.5043 5.838 13.5043 5.42024C13.5043 5.00248 13.1656 4.66381 12.7478 4.66381L7.25213 4.66381Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5862 1H8.11197C6.64826 0.999984 5.47301 0.999972 4.54963 1.12412C3.59278 1.25276 2.79398 1.52706 2.16052 2.16052C1.52706 2.79398 1.25276 3.59278 1.12412 4.54963C0.999972 5.47302 0.999984 6.64826 1 8.11196V11.888C0.999984 13.3517 0.999972 14.527 1.12412 15.4504C1.25276 16.4072 1.52706 17.206 2.16052 17.8395C2.79398 18.4729 3.59278 18.7472 4.54963 18.8759C5.47302 19 6.64826 19 8.11197 19H11.888C13.3517 19 14.527 19 15.4504 18.8759C16.4072 18.7472 17.206 18.4729 17.8395 17.8395C18.4729 17.206 18.7472 16.4072 18.8759 15.4504C19 14.527 19 13.3517 19 11.888L19 8.63678C19.0001 7.60708 19.0002 6.96005 18.8461 6.33233C18.8211 6.23059 18.7931 6.12961 18.7622 6.02951C18.5714 5.41194 18.2384 4.85714 17.7085 3.97421L17.6412 3.86202C17.3076 3.306 17.0325 2.84754 16.7718 2.48765C16.4985 2.11041 16.2119 1.79893 15.8348 1.55655C15.7245 1.4856 15.6102 1.42091 15.4926 1.36278C15.0908 1.16417 14.6762 1.07864 14.2121 1.03839C13.7694 0.999986 13.2347 0.999992 12.5862 1ZM4.75121 2.62348C5.56208 2.51446 6.63543 2.51285 8.16809 2.51285H12.5536C13.2426 2.51285 13.7116 2.5135 14.0814 2.54558C14.4373 2.57645 14.6486 2.63316 14.8223 2.71901C14.8891 2.75205 14.9541 2.78881 15.0168 2.82913C15.1798 2.93391 15.3371 3.08588 15.5467 3.37518C15.7644 3.6758 16.0063 4.07763 16.3608 4.66841C16.9569 5.66194 17.1864 6.0543 17.3168 6.47609C17.3389 6.54781 17.359 6.62016 17.3769 6.69306C17.4821 7.12179 17.4871 7.57634 17.4871 8.73499V11.8319C17.4871 13.3646 17.4855 14.4379 17.3765 15.2488C17.2704 16.0379 17.0753 16.4642 16.7697 16.7697C16.4757 17.0638 16.0697 17.2556 15.3362 17.3642L15.3362 15.4434C15.3362 14.6243 15.3362 13.9342 15.2624 13.3848C15.184 12.8021 15.0103 12.2659 14.5781 11.8336C14.1458 11.4013 13.6095 11.2276 13.0268 11.1493C12.4774 11.0754 11.7874 11.0755 10.9682 11.0755H9.03172C8.21256 11.0755 7.52254 11.0754 6.97314 11.1493C6.39045 11.2276 5.85417 11.4013 5.4219 11.8336C4.98964 12.2659 4.81595 12.8021 4.73761 13.3848C4.66375 13.9342 4.66377 14.6243 4.6638 15.4434L4.6638 17.3642C3.93028 17.2556 3.52432 17.0638 3.23026 16.7697C2.92473 16.4642 2.72956 16.0379 2.62347 15.2488C2.51446 14.4379 2.51285 13.3646 2.51285 11.8319V8.1681C2.51285 6.63543 2.51446 5.56208 2.62347 4.75122C2.72956 3.96214 2.92473 3.5358 3.23026 3.23027C3.5358 2.92473 3.96214 2.72956 4.75121 2.62348ZM7.17473 12.6487C7.61145 12.5899 8.19902 12.5883 9.08403 12.5883H10.9159C11.8009 12.5883 12.3885 12.5899 12.8252 12.6487C13.2401 12.7044 13.404 12.799 13.5083 12.9033C13.6127 13.0077 13.7072 13.1715 13.763 13.5864C13.8217 14.0231 13.8233 14.6107 13.8233 15.4957V17.4724C13.2585 17.4868 12.6031 17.4872 11.8319 17.4872H8.16809C7.39688 17.4872 6.74149 17.4868 6.17665 17.4724V15.4957C6.17665 14.6107 6.17825 14.0231 6.23697 13.5864C6.29275 13.1715 6.3873 13.0077 6.49165 12.9033C6.59599 12.799 6.75983 12.7044 7.17473 12.6487Z"></path>`
	},
	searchDocument: {
		box: 20,
		svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66705 6.33374C4.66705 5.91953 5.00284 5.58374 5.41705 5.58374H11.8332C12.2474 5.58374 12.5832 5.91953 12.5832 6.33374C12.5832 6.74795 12.2474 7.08374 11.8332 7.08374H5.41705C5.00284 7.08374 4.66705 6.74795 4.66705 6.33374Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66705 9.0835C4.66705 8.66928 5.00284 8.3335 5.41705 8.3335H9.08339C9.49761 8.3335 9.83339 8.66928 9.83339 9.0835C9.83339 9.49771 9.49761 9.8335 9.08339 9.8335H5.41705C5.00284 9.8335 4.66705 9.49771 4.66705 9.0835Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.583 11.0833C12.6501 11.0833 11.0833 12.6501 11.0833 14.583C11.0833 16.5159 12.6501 18.0828 14.583 18.0828C15.278 18.0828 15.9257 17.8802 16.4702 17.5309L17.7189 18.7796C18.0118 19.0725 18.4867 19.0725 18.7796 18.7796C19.0725 18.4867 19.0725 18.0118 18.7796 17.7189L17.5309 16.4702C17.8802 15.9257 18.0828 15.278 18.0828 14.583C18.0828 12.6501 16.5159 11.0833 14.583 11.0833ZM12.5833 14.583C12.5833 13.4786 13.4786 12.5833 14.583 12.5833C15.6874 12.5833 16.5828 13.4786 16.5828 14.583C16.5828 15.6874 15.6874 16.5828 14.583 16.5828C13.4786 16.5828 12.5833 15.6874 12.5833 14.583Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9364 2.60578C12.9763 2.50176 11.7352 2.50073 10 2.50073C8.46866 2.50073 7.36903 2.50142 6.50849 2.57748C5.65785 2.65266 5.1128 2.797 4.67452 3.04239C3.99033 3.42545 3.42545 3.99033 3.04239 4.67452C2.797 5.1128 2.65266 5.65785 2.57748 6.50849C2.50142 7.36903 2.50073 8.46866 2.50073 10C2.50073 11.5313 2.50142 12.631 2.57748 13.4915C2.65266 14.3421 2.797 14.8872 3.04239 15.3255C3.42545 16.0097 3.99033 16.5746 4.67452 16.9576C5.1128 17.203 5.65785 17.3473 6.50849 17.4225C7.36903 17.4986 8.46866 17.4993 10 17.4993C10.4142 17.4993 10.75 17.8351 10.75 18.2493C10.75 18.6635 10.4142 18.9993 10 18.9993H9.96358C8.47653 18.9993 7.31071 18.9993 6.37643 18.9167C5.42462 18.8326 4.64163 18.6583 3.94174 18.2664C3.01607 17.7482 2.25182 16.9839 1.73356 16.0583C1.3417 15.3584 1.16743 14.5754 1.0833 13.6236C1.00072 12.6893 1.00073 11.5235 1.00073 10.0364V9.96356C1.00073 8.47652 1.00072 7.31071 1.0833 6.37643C1.16743 5.42462 1.3417 4.64163 1.73356 3.94174C2.25182 3.01607 3.01607 2.25182 3.94174 1.73356C4.64163 1.3417 5.42462 1.16743 6.37643 1.0833C7.31071 1.00072 8.47652 1.00073 9.96357 1.00073H10.045C11.7253 1.00072 13.0477 1.00072 14.0979 1.1145C15.1716 1.23083 16.0494 1.47323 16.801 2.01923C17.2537 2.34816 17.6518 2.74631 17.9808 3.19904C18.5268 3.95055 18.7692 4.82842 18.8855 5.90206C18.9993 6.9523 18.9993 8.27465 18.9993 9.955V10C18.9993 10.4142 18.6635 10.75 18.2493 10.75C17.8351 10.75 17.4993 10.4142 17.4993 10C17.4993 8.26482 17.4982 7.02368 17.3942 6.06363C17.2917 5.11762 17.0965 4.53391 16.7672 4.08072C16.5308 3.75533 16.2447 3.46917 15.9193 3.23276C15.4661 2.9035 14.8824 2.70827 13.9364 2.60578Z"></path>`
	},
	cursorI: {
		box: 20,
		svg: '<path fill-rule="evenodd" clip-rule="evenodd" d="M6.16351 0.754727C6.16351 0.337908 6.50141 1.00136e-05 6.91823 1.00136e-05H8.45911L8.46115 0C8.45911 1.27256e-05 8.45911 1.00136e-05 8.45911 1.00136e-05L8.46115 0L8.46335 2.13981e-05L8.46821 6.00815e-05L8.47976 0.00024718C8.48825 0.000429818 8.49834 0.000741036 8.50993 0.0012559C8.53307 0.00228443 8.56234 0.00413293 8.59687 0.00742233C8.66568 0.0139758 8.75702 0.0263994 8.86359 0.0500837C9.07481 0.0970196 9.3598 0.191315 9.64819 0.383578C9.77173 0.465938 9.88992 0.562185 9.99999 0.673359C10.1101 0.562185 10.2283 0.465938 10.3518 0.383578C10.6402 0.191315 10.9252 0.0970196 11.1364 0.0500837C11.243 0.0263994 11.3343 0.0139758 11.4031 0.00742233C11.4376 0.00413293 11.4669 0.00228443 11.4901 0.0012559C11.5016 0.000741036 11.5117 0.000429818 11.5202 0.00024718L11.5318 6.00815e-05L11.5366 2.13981e-05L11.5388 1.26958e-05L11.5399 1.06692e-05L13.0818 1.00136e-05C13.4986 1.00136e-05 13.8365 0.337908 13.8365 0.754727C13.8365 1.17155 13.4986 1.50944 13.0818 1.50944H11.5534C11.5534 1.50944 11.5492 1.50977 11.5462 1.51006C11.5308 1.51153 11.5017 1.51516 11.4638 1.52357C11.3861 1.54084 11.2859 1.57495 11.1891 1.6395C11.0395 1.73923 10.7547 2.00183 10.7547 2.80923V9.24529H12.0545C12.4713 9.24529 12.8092 9.58319 12.8092 10C12.8092 10.4168 12.4713 10.7547 12.0545 10.7547H10.7547V16.1635C10.7547 16.8129 10.9437 17.329 11.1739 17.7212C11.4727 18.2304 12.1555 18.4906 13.0818 18.4906C13.4986 18.4906 13.8365 18.8285 13.8365 19.2453C13.8365 19.6621 13.4986 20 13.0818 20C12.0596 20 10.7481 19.7409 9.99999 18.6834C9.25189 19.7409 7.94035 20 6.91823 20C6.50141 20 6.16351 19.6621 6.16351 19.2453C6.16351 18.8285 6.50141 18.4906 6.91823 18.4906C7.84449 18.4906 8.52724 18.2304 8.82608 17.7212C9.05624 17.329 9.24527 16.8129 9.24527 16.1635V10.7553L7.94548 10.7547C7.52867 10.7547 7.19077 10.4168 7.19077 10C7.19077 9.58319 7.52867 9.24529 7.94548 9.24529H9.24527V2.80923C9.24527 2.00183 8.9605 1.73923 8.81091 1.6395C8.71408 1.57495 8.61386 1.54084 8.53615 1.52357C8.49827 1.51516 8.46922 1.51153 8.45377 1.51006C8.45079 1.50977 8.4466 1.50944 8.4466 1.50944H6.91823C6.50141 1.50944 6.16351 1.17155 6.16351 0.754727Z"></path>'
	},
	note: {
		box: 20,
		svg: '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.43 19.9999C11.0553 20.0005 11.5687 20.0011 12.0425 19.801C12.4079 19.6468 12.7072 19.3912 13.0276 19.0754C13.0709 19.0331 13.1142 18.9896 13.1572 18.946C13.2106 18.892 13.2649 18.8365 13.3205 18.7798L16.803 15.2303C16.8581 15.1743 16.9119 15.1195 16.9644 15.0656C17.0081 15.0208 17.0518 14.9756 17.0943 14.9306C17.4037 14.6043 17.6539 14.2997 17.805 13.9281C18.001 13.4457 18.0005 12.923 17.9999 12.2854L17.9999 8.09515C17.9999 6.40174 17.9999 5.05339 17.8605 3.99652C17.7166 2.90602 17.4121 2.01239 16.719 1.30596C16.0257 0.59936 15.1485 0.288791 14.0779 0.142102C13.0408 -2.57607e-05 11.7177 -1.4201e-05 10.0564 -7.04314e-07L9.94344 -6.94438e-07C8.28219 -1.39006e-05 6.95908 -2.52291e-05 5.92191 0.142103C4.85139 0.288791 3.97413 0.599361 3.28085 1.30596C2.58774 2.01239 2.28324 2.90602 2.13939 3.99652C1.99997 5.05342 1.99999 6.40178 2 8.09523L2 11.9046C1.99999 13.5981 1.99998 14.9464 2.13939 16.0033C2.28324 17.0938 2.58774 17.9875 3.28085 18.6939C3.97413 19.4005 4.8514 19.7111 5.92191 19.8578C6.95912 19.9999 8.28226 19.9999 9.94358 19.9999L10.43 19.9999ZM11.0734 18.4633C11.0633 18.2993 11.0634 18.1178 11.0635 17.9433L11.0635 17.3374C11.0634 16.5111 11.0634 15.8153 11.1365 15.2613C11.214 14.6739 11.3857 14.1333 11.8134 13.6974C12.2412 13.2614 12.7721 13.0861 13.349 13.0071C13.8928 12.9326 14.5757 12.9326 15.3862 12.9326L15.9811 12.9326C16.1516 12.9325 16.3292 12.9325 16.4899 12.9427C16.4991 12.7707 16.5015 12.529 16.5015 12.1644L16.5015 8.15241C16.5015 6.389 16.5 5.14306 16.3755 4.19937C16.2539 3.27751 16.0275 2.75905 15.6587 2.38321C15.2901 2.00753 14.7819 1.77699 13.878 1.65313C12.9524 1.52629 11.7302 1.52466 9.99993 1.52467C8.26966 1.52467 7.04749 1.52629 6.12187 1.65313C5.21796 1.77699 4.70976 2.00753 4.34116 2.38321C3.9724 2.75905 3.74598 3.27751 3.62438 4.19937C3.49989 5.14306 3.49831 6.389 3.49831 8.15241L3.49831 11.8474C3.49831 13.6108 3.49989 14.8568 3.62438 15.8005C3.74598 16.7223 3.9724 17.2408 4.34116 17.6166C4.70976 17.9923 5.21796 18.2229 6.12187 18.3467C7.04749 18.4736 8.26966 18.4752 9.99993 18.4752L10.3109 18.4752C10.668 18.4752 10.9049 18.4727 11.0734 18.4633ZM12.5618 17.395L12.5618 17.39C12.5618 16.4975 12.5634 15.9048 12.6215 15.4642C12.6767 15.0455 12.7704 14.88 12.8737 14.7747C12.9769 14.6695 13.1387 14.5743 13.549 14.5181C13.981 14.4589 14.5622 14.4573 15.438 14.4573L15.4441 14.4573L12.5618 17.395Z"></path>'
	},
	sidebarMenuRight: {
		box: 20,
		svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M10 17.5C8.09172 17.5 6.781 17.4979 5.77883 17.3894C4.80473 17.2838 4.3016 17.0923 3.94275 16.8316C3.64562 16.6157 3.38432 16.3544 3.16844 16.0572C2.90772 15.6984 2.71617 15.1953 2.61064 14.2212C2.50206 13.219 2.5 11.9083 2.5 10C2.5 8.09172 2.50206 6.781 2.61064 5.77883C2.71617 4.80473 2.90772 4.3016 3.16844 3.94275C3.38432 3.64562 3.64562 3.38432 3.94275 3.16844C4.3016 2.90772 4.80473 2.71617 5.77883 2.61064C6.781 2.50206 8.09172 2.5 10 2.5C10.2563 2.5 10.5019 2.50004 10.7373 2.50036L10.7373 17.4996C10.5019 17.5 10.2563 17.5 10 17.5ZM12.2373 17.4893C13.0242 17.4766 13.6695 17.4491 14.2212 17.3894C15.1953 17.2838 15.6984 17.0923 16.0572 16.8316C16.3544 16.6157 16.6157 16.3544 16.8316 16.0572C17.0923 15.6984 17.2838 15.1953 17.3894 14.2212C17.4979 13.219 17.5 11.9083 17.5 10C17.5 8.09172 17.4979 6.781 17.3894 5.77883C17.2838 4.80473 17.0923 4.3016 16.8316 3.94275C16.6157 3.64562 16.3544 3.38432 16.0572 3.16844C15.6984 2.90772 15.1953 2.71617 14.2212 2.61064C13.6695 2.55086 13.0242 2.52337 12.2373 2.51073L12.2373 17.4893ZM1 10C1 6.25027 1 4.3754 1.95491 3.06107C2.26331 2.6366 2.6366 2.26331 3.06107 1.95491C4.3754 1 6.25027 1 10 1C13.7497 1 15.6246 1 16.9389 1.95491C17.3634 2.26331 17.7367 2.6366 18.0451 3.06107C19 4.3754 19 6.25027 19 10C19 13.7497 19 15.6246 18.0451 16.9389C17.7367 17.3634 17.3634 17.7367 16.9389 18.0451C15.6246 19 13.7497 19 10 19C6.25027 19 4.3754 19 3.06107 18.0451C2.6366 17.7367 2.26331 17.3634 1.95491 16.9389C1 15.6246 1 13.7497 1 10Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1157 5C13.1157 4.58579 13.4515 4.25 13.8657 4.25H15.3657C15.7799 4.25 16.1157 4.58579 16.1157 5C16.1157 5.41421 15.7799 5.75 15.3657 5.75H13.8657C13.4515 5.75 13.1157 5.41421 13.1157 5Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1157 7C13.1157 6.58579 13.4515 6.25 13.8657 6.25H15.3657C15.7799 6.25 16.1157 6.58579 16.1157 7C16.1157 7.41421 15.7799 7.75 15.3657 7.75H13.8657C13.4515 7.75 13.1157 7.41421 13.1157 7Z"></path>`
	},
	sidebarMenuLeft: {
		box: 20,
		svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M10 17.5C11.9083 17.5 13.219 17.4979 14.2212 17.3894C15.1953 17.2838 15.6984 17.0923 16.0572 16.8316C16.3544 16.6157 16.6157 16.3544 16.8316 16.0572C17.0923 15.6984 17.2838 15.1953 17.3894 14.2212C17.4979 13.219 17.5 11.9083 17.5 10C17.5 8.09172 17.4979 6.781 17.3894 5.77883C17.2838 4.80473 17.0923 4.3016 16.8316 3.94275C16.6157 3.64562 16.3544 3.38432 16.0572 3.16844C15.6984 2.90772 15.1953 2.71617 14.2212 2.61064C13.219 2.50206 11.9083 2.5 10 2.5C9.74368 2.5 9.49815 2.50004 9.2627 2.50036L9.26269 17.4996C9.49815 17.5 9.74368 17.5 10 17.5ZM7.76269 17.4893C6.97575 17.4766 6.33054 17.4491 5.77883 17.3894C4.80473 17.2838 4.3016 17.0923 3.94275 16.8316C3.64562 16.6157 3.38432 16.3544 3.16844 16.0572C2.90772 15.6984 2.71618 15.1953 2.61064 14.2212C2.50206 13.219 2.5 11.9083 2.5 10C2.5 8.09172 2.50206 6.781 2.61064 5.77883C2.71618 4.80473 2.90772 4.3016 3.16844 3.94275C3.38432 3.64562 3.64562 3.38432 3.94275 3.16844C4.3016 2.90772 4.80473 2.71617 5.77883 2.61064C6.33054 2.55086 6.97575 2.52337 7.7627 2.51073L7.76269 17.4893ZM19 10C19 6.25027 19 4.3754 18.0451 3.06107C17.7367 2.6366 17.3634 2.26331 16.9389 1.95491C15.6246 1 13.7497 1 10 1C6.25027 1 4.3754 1 3.06107 1.95491C2.6366 2.26331 2.26331 2.6366 1.95491 3.06107C1 4.3754 1 6.25027 1 10C1 13.7497 1 15.6246 1.95491 16.9389C2.26331 17.3634 2.6366 17.7367 3.06107 18.0451C4.3754 19 6.25027 19 10 19C13.7497 19 15.6246 19 16.9389 18.0451C17.3634 17.7367 17.7367 17.3634 18.0451 16.9389C19 15.6246 19 13.7497 19 10Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.88428 5C6.88428 4.58579 6.54849 4.25 6.13428 4.25H4.63428C4.22006 4.25 3.88428 4.58579 3.88428 5C3.88428 5.41421 4.22006 5.75 4.63428 5.75H6.13428C6.54849 5.75 6.88428 5.41421 6.88428 5Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.88428 7C6.88428 6.58579 6.54849 6.25 6.13428 6.25H4.63428C4.22006 6.25 3.88428 6.58579 3.88428 7C3.88428 7.41421 4.22006 7.75 4.63428 7.75H6.13428C6.54849 7.75 6.88428 7.41421 6.88428 7Z"></path>`
	},
	x: {
		box: 20,
		svg: '<path d="M5.05024 13.8891C4.75734 14.182 4.75734 14.6568 5.05024 14.9497C5.34313 15.2426 5.818 15.2426 6.1109 14.9497L10 11.0606L13.8891 14.9497C14.182 15.2426 14.6569 15.2426 14.9498 14.9497C15.2427 14.6568 15.2427 14.182 14.9498 13.8891L11.0607 9.99996L14.9497 6.1109C15.2426 5.818 15.2426 5.34313 14.9497 5.05024C14.6568 4.75734 14.182 4.75734 13.8891 5.05024L10 8.9393L6.11095 5.05024C5.81805 4.75734 5.34318 4.75734 5.05029 5.05024C4.75739 5.34313 4.75739 5.818 5.05029 6.1109L8.93935 9.99996L5.05024 13.8891Z""></path>'
	},
	expandCircle: {
		box: 20,
		svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5ZM1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.0312 6.625C10.617 6.625 10.2812 6.28921 10.2812 5.875C10.2812 5.46079 10.617 5.125 11.0312 5.125H14.125C14.5392 5.125 14.875 5.46079 14.875 5.875V8.96875C14.875 9.38296 14.5392 9.71875 14.125 9.71875C13.7108 9.71875 13.375 9.38296 13.375 8.96875V7.68566L11.5616 9.49908C11.2687 9.79197 10.7938 9.79197 10.5009 9.49908C10.208 9.20619 10.208 8.73131 10.5009 8.43842L12.3143 6.625H11.0312Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.96875 13.375C9.38296 13.375 9.71875 13.7108 9.71875 14.125C9.71875 14.5392 9.38296 14.875 8.96875 14.875H5.875C5.46079 14.875 5.125 14.5392 5.125 14.125L5.125 11.0312C5.125 10.617 5.46079 10.2812 5.875 10.2812C6.28921 10.2812 6.625 10.617 6.625 11.0312L6.625 12.3143L8.43842 10.5009C8.73131 10.208 9.20619 10.208 9.49908 10.5009C9.79197 10.7938 9.79197 11.2687 9.49908 11.5616L7.68566 13.375H8.96875Z"></path>`
	},
	collapseCircle: {
		box: 20,
		svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5ZM1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.125 8.21875C14.5392 8.21875 14.875 8.55454 14.875 8.96875C14.875 9.38296 14.5392 9.71875 14.125 9.71875H11.0312C10.617 9.71875 10.2812 9.38296 10.2812 8.96875V5.875C10.2812 5.46079 10.617 5.125 11.0312 5.125C11.4455 5.125 11.7812 5.46079 11.7812 5.875V7.15809L13.5947 5.34467C13.8876 5.05178 14.3624 5.05178 14.6553 5.34467C14.9482 5.63756 14.9482 6.11244 14.6553 6.40533L12.8419 8.21875H14.125Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.875 11.7812C5.46079 11.7812 5.125 11.4455 5.125 11.0312C5.125 10.617 5.46079 10.2812 5.875 10.2812H8.96875C9.38296 10.2812 9.71875 10.617 9.71875 11.0312V14.125C9.71875 14.5392 9.38296 14.875 8.96875 14.875C8.55454 14.875 8.21875 14.5392 8.21875 14.125V12.8419L6.40533 14.6553C6.11244 14.9482 5.63756 14.9482 5.34467 14.6553C5.05178 14.3624 5.05178 13.8876 5.34467 13.5947L7.15809 11.7812H5.875Z"></path>`
	},
	monitor: {
		box: 20,
		svg: '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4265 1H8.57353C7.10211 0.999989 5.93326 0.999981 5.00784 1.10937C4.05658 1.22181 3.2687 1.4584 2.60958 1.99932C2.38667 2.18226 2.18226 2.38667 1.99932 2.60958C1.4584 3.2687 1.22181 4.05658 1.10937 5.00784C0.999981 5.93326 0.999989 7.1021 1 8.57352V8.66797C0.999989 10.1394 0.999981 11.3082 1.10937 12.2337C1.22181 13.1849 1.4584 13.9728 1.99932 14.6319C2.18226 14.8548 2.38667 15.0592 2.60958 15.2422C3.2687 15.7831 4.05658 16.0197 5.00784 16.1321C5.93323 16.2415 7.10202 16.2415 8.57337 16.2415H9.27551V17.551H7.2415C6.84137 17.551 6.51701 17.8754 6.51701 18.2755C6.51701 18.6756 6.84137 19 7.2415 19H12.7585C13.1586 19 13.483 18.6756 13.483 18.2755C13.483 17.8754 13.1586 17.551 12.7585 17.551H10.7245V16.2415H11.4265C12.8978 16.2415 14.0668 16.2415 14.9922 16.1321C15.9434 16.0197 16.7313 15.7831 17.3904 15.2422C17.6133 15.0592 17.8177 14.8548 18.0007 14.6319C18.5416 13.9728 18.7782 13.1849 18.8906 12.2337C19 11.3083 19 10.1395 19 8.66814V8.5735C19 7.10216 19 5.93323 18.8906 5.00784C18.7782 4.05658 18.5416 3.2687 18.0007 2.60958C17.8177 2.38667 17.6133 2.18226 17.3904 1.99932C16.7313 1.4584 15.9434 1.22181 14.9922 1.10937C14.0667 0.999981 12.8979 0.999989 11.4265 1ZM5.17793 2.54833C6.0084 2.45017 7.09157 2.44898 8.62075 2.44898H11.3793C12.9084 2.44898 13.9916 2.45017 14.8221 2.54833C15.6365 2.6446 16.113 2.82545 16.4712 3.1194C16.6207 3.24213 16.7579 3.37926 16.8806 3.52881C17.1745 3.88698 17.3554 4.36347 17.4517 5.17793C17.5498 6.0084 17.551 7.09157 17.551 8.62075C17.551 9.51464 17.5506 10.2564 17.5306 10.8846H2.46936C2.44937 10.2564 2.44898 9.51464 2.44898 8.62075C2.44898 7.09157 2.45017 6.0084 2.54833 5.17793C2.6446 4.36347 2.82545 3.88698 3.1194 3.52881C3.24213 3.37926 3.37926 3.24213 3.52881 3.1194C3.88698 2.82545 4.36347 2.6446 5.17793 2.54833ZM3.1194 13.7127C2.85952 13.396 2.68806 12.9869 2.58528 12.3336H17.4147C17.3119 12.9869 17.1405 13.396 16.8806 13.7127C16.7579 13.8622 16.6207 13.9994 16.4712 14.1221C16.113 14.416 15.6365 14.5969 14.8221 14.6932C13.9916 14.7913 12.9084 14.7925 11.3793 14.7925H8.62075C7.09157 14.7925 6.0084 14.7913 5.17793 14.6932C4.36347 14.5969 3.88698 14.416 3.52881 14.1221C3.37926 13.9994 3.24213 13.8622 3.1194 13.7127Z"></path>'
	},
	opactiySolid: {
		box: 20,
		svg: '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.2706 14.6517C2.65459 13.6377 0.799744 11.0967 0.799744 8.12256C0.799744 4.25657 3.93375 1.12256 7.79974 1.12256C10.7739 1.12256 13.3148 2.9774 14.3289 5.59341C16.9449 6.60746 18.7997 9.1484 18.7997 12.1226C18.7997 15.9886 15.6657 19.1226 11.7997 19.1226C8.82558 19.1226 6.28464 17.2677 5.2706 14.6517ZM13.2997 8.12256C13.2997 7.66162 13.243 7.21393 13.1362 6.78607C12.7084 6.67926 12.2607 6.62256 11.7997 6.62256C11.6573 6.62256 11.5162 6.62797 11.3765 6.6386L13.2837 8.5458C13.2943 8.40611 13.2997 8.26497 13.2997 8.12256ZM12.8712 10.2546L9.66766 7.05108C9.24069 7.23079 8.84117 7.46286 8.47714 7.73923L12.1831 11.4452C12.4594 11.0811 12.6915 10.6816 12.8712 10.2546ZM11.1224 12.5058L7.41647 8.79988C7.14009 9.16391 6.90802 9.56343 6.7283 9.99039L9.93191 13.194C10.3589 13.0143 10.7584 12.7822 11.1224 12.5058ZM8.22309 13.6065L6.31579 11.6992C6.30516 11.8389 6.29974 11.9801 6.29974 12.1226C6.29974 12.5835 6.35645 13.0312 6.46326 13.459C6.89111 13.5659 7.33881 13.6226 7.79974 13.6226C7.94219 13.6226 8.08337 13.6171 8.22309 13.6065ZM7.79974 15.1226C7.58789 15.1226 7.37824 15.1131 7.17118 15.0947C8.14967 16.6154 9.85709 17.6226 11.7997 17.6226C14.8373 17.6226 17.2997 15.1601 17.2997 12.1226C17.2997 10.1799 16.2926 8.47249 14.7719 7.49399C14.7903 7.70105 14.7997 7.91071 14.7997 8.12256C14.7997 11.9886 11.6657 15.1226 7.79974 15.1226Z"></path>>'
	},
	editPencilSolid: {
		box: 20,
		svg: `<path d="M15.157 2.54498L16.127 3.41374C16.6228 3.85774 17.0501 4.24032 17.3508 4.59246C17.6731 4.96986 17.9245 5.39522 17.953 5.93418C17.9815 6.47315 17.7764 6.92243 17.4957 7.33142C17.2338 7.71306 16.8493 8.13816 16.4031 8.63154L8.68947 17.161C8.26875 17.627 7.93599 17.9956 7.49506 18.2258C7.05413 18.4559 6.56024 18.5187 5.93579 18.5982L4.07287 18.8368C3.57676 18.9004 3.12816 18.9579 2.76259 18.9534C2.36385 18.9485 1.92972 18.871 1.56533 18.5447C1.20094 18.2183 1.07792 17.7968 1.03113 17.4028C0.98822 17.0414 0.998592 16.5914 1.01007 16.0937L1.05288 14.2252C1.0667 13.5989 1.07764 13.1035 1.2613 12.643C1.44497 12.1824 1.77837 11.8144 2.1999 11.3491L9.91363 2.8197C10.3598 2.32628 10.7442 1.90114 11.0981 1.6019C11.4774 1.28119 11.9048 1.03101 12.4464 1.00263C12.988 0.974255 13.4395 1.17838 13.8505 1.45768C14.234 1.71828 14.6612 2.10092 15.157 2.54498Z"></path>
<path d="M11.2246 17.5024C10.8091 17.5024 10.4722 17.8377 10.4722 18.2512C10.4722 18.6648 10.8091 19 11.2246 19H18.2475C18.6631 19 19 18.6648 19 18.2512C19 17.8377 18.6631 17.5024 18.2475 17.5024H11.2246Z"></path>`
	},
	settingsSolid: {
		box: 20,
		svg: '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4728 0.527798C11.7268 0.559309 11.99 0.632032 12.2381 0.820103C12.483 1.00582 12.6319 1.2403 12.7414 1.48233C12.8374 1.69461 12.9204 1.95468 13.0064 2.22445L13.0168 2.25701C13.0448 2.34475 13.0737 2.43611 13.1033 2.53083C13.2051 2.85633 13.4548 3.15301 13.8064 3.35916C14.1394 3.55444 14.484 3.62039 14.7899 3.55144C14.9153 3.52317 15.0355 3.4966 15.1498 3.47175L15.1816 3.46483C15.4569 3.40495 15.7191 3.34793 15.9473 3.32742C16.2059 3.30418 16.4759 3.3209 16.7551 3.44806C17.0382 3.57701 17.2361 3.77817 17.397 3.99585C17.5396 4.18881 17.6807 4.43454 17.8294 4.69368L18.4531 5.78016C18.6017 6.0388 18.743 6.28482 18.8382 6.50638C18.9453 6.75546 19.0246 7.03932 18.9923 7.36954C18.9601 7.69683 18.8312 7.95435 18.678 8.17364C18.5439 8.36545 18.3617 8.56766 18.1737 8.77618L18.1504 8.802C18.0735 8.88731 17.9924 8.97669 17.9074 9.0696C17.7091 9.28642 17.5934 9.61558 17.5934 10.0001C17.5934 10.384 17.7089 10.7125 17.9069 10.9289C17.9923 11.0222 18.0737 11.112 18.1509 11.1976L18.1743 11.2236C18.3622 11.432 18.5444 11.6342 18.6784 11.8259C18.8316 12.0452 18.9606 12.3027 18.9927 12.6299C19.0251 12.9601 18.9457 13.2439 18.8387 13.493C18.7435 13.7145 18.6023 13.9605 18.4538 14.2191L17.8301 15.3057C17.6814 15.5649 17.5404 15.8106 17.3978 16.0037C17.2369 16.2214 17.039 16.4226 16.7558 16.5516C16.4766 16.6787 16.2066 16.6955 15.948 16.6722C15.7197 16.6517 15.4575 16.5947 15.1822 16.5348L15.1362 16.5248C15.0263 16.5009 14.911 16.4754 14.7911 16.4484C14.4849 16.3794 14.14 16.4454 13.8067 16.6409C13.4548 16.8472 13.2049 17.1441 13.103 17.4699C13.0735 17.5644 13.0447 17.6555 13.0167 17.743L13.0064 17.7756C12.9203 18.0453 12.8374 18.3053 12.7414 18.5176C12.6319 18.7596 12.483 18.9941 12.2381 19.1798C11.9901 19.3678 11.7269 19.4406 11.473 19.4721C11.2478 19.5001 10.9813 19.5 10.7014 19.5H9.2982C9.01827 19.5 8.75179 19.5001 8.52665 19.4721C8.2727 19.4406 8.00953 19.3678 7.76153 19.1798C7.51663 18.9941 7.3677 18.7596 7.25826 18.5176C7.16227 18.3053 7.07932 18.0453 6.99327 17.7756L6.98288 17.743C6.95491 17.6554 6.92605 17.5641 6.89647 17.4695C6.79467 17.144 6.54495 16.8473 6.19334 16.6411C5.86029 16.4458 5.51572 16.3799 5.20982 16.4489C5.08432 16.4771 4.96402 16.5037 4.84959 16.5286L4.81779 16.5355C4.54244 16.5954 4.28026 16.6525 4.05197 16.673C3.79335 16.6962 3.52336 16.6795 3.24412 16.5523C2.96096 16.4233 2.76307 16.2221 2.60218 16.0044C2.45957 15.8114 2.31856 15.5656 2.16985 15.3064L1.54621 14.2199C1.39773 13.9612 1.25649 13.7152 1.16129 13.4937C1.05427 13.2446 0.97492 12.9608 1.00733 12.6306C1.03945 12.3034 1.16838 12.0459 1.32159 11.8266C1.45561 11.6348 1.63789 11.4326 1.82585 11.2241L1.84911 11.1983C1.92603 11.113 2.00716 11.0236 2.09219 10.9306C2.29053 10.7138 2.40616 10.3846 2.40616 10.0001C2.40616 9.61513 2.29042 9.28555 2.09182 9.06845C2.00706 8.97579 1.92618 8.88665 1.84949 8.80155L1.82621 8.77572C1.63828 8.56727 1.45604 8.36512 1.32204 8.17335C1.16884 7.95412 1.03992 7.69667 1.00779 7.36946C0.975365 7.03931 1.05469 6.7555 1.16168 6.50646C1.25684 6.28492 1.39804 6.03894 1.54647 5.78034L2.17001 4.69368C2.31872 4.43443 2.45971 4.18865 2.60233 3.99561C2.76322 3.77784 2.96111 3.5766 3.2443 3.44759C3.52356 3.32037 3.79357 3.30364 4.05222 3.32688C4.28053 3.34739 4.54274 3.40442 4.81813 3.46432L4.84995 3.47124C4.86209 3.47388 4.86651 3.47367 4.86651 3.47367C4.86859 3.47357 4.86925 3.47354 4.88348 3.47854C4.98794 3.50133 5.09714 3.52551 5.2106 3.55109C5.51633 3.62001 5.86071 3.55411 6.19359 3.35895C6.54506 3.15289 6.79466 2.85633 6.89641 2.53097C6.92603 2.43624 6.95492 2.34487 6.98293 2.25713L6.99331 2.22458C7.07935 1.95487 7.1623 1.69487 7.25828 1.48264C7.36771 1.24066 7.51662 1.00623 7.76148 0.820526C8.00945 0.63247 8.27257 0.55971 8.52649 0.528149C8.75162 0.500166 9.01808 0.500173 9.29799 0.50018L10.7012 0.500008C10.9811 0.499932 11.2477 0.499859 11.4728 0.527798ZM10 13.25C11.7949 13.25 13.25 11.7949 13.25 10C13.25 8.20507 11.7949 6.75 10 6.75C8.20507 6.75 6.75 8.20507 6.75 10C6.75 11.7949 8.20507 13.25 10 13.25Z"></path>'
	},
	cloudSolid: {
		box: 20,
		svg: '<path d="M9.83258 2C8.00657 2 6.37894 2.48491 5.28687 3.7791C4.66431 4.51688 4.25773 5.46857 4.06763 6.63743C3.11166 6.77971 2.28566 7.15123 1.62529 7.73683C0.535565 8.70317 0 10.1612 0 11.8255C0 14.0241 0.642821 15.6105 1.79294 16.6325C2.92483 17.6383 4.44012 18 6 18C6.07438 18 6.14844 17.9986 6.22217 17.9958V18H15.3207L15.3333 18L15.3496 18H15.5555V17.9968C16.6708 17.9637 17.7622 17.6751 18.5974 16.9333C19.5063 16.1261 20 14.8834 20 13.2C20 11.9374 19.63 10.7139 18.8053 9.86363C18.1803 9.21916 17.3445 8.84101 16.3414 8.79259C16.547 6.95522 16.0932 5.28907 15.0109 4.05501C13.8532 2.73475 12.0566 2 9.83258 2Z"></path>'
	},
	undoCircle: {
		box: 20,
		svg: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.67953 2.51579C7.27091 2.51579 5.1265 3.64834 3.75346 5.41076L6.5609 5.20209C6.97926 5.171 7.34368 5.48417 7.37485 5.90159C7.40601 6.31901 7.09213 6.6826 6.67376 6.7137L2.36328 7.03408C2.16002 7.04919 1.95921 6.98217 1.80598 6.84808C1.65274 6.714 1.55995 6.5241 1.54844 6.32107L1.30122 1.95857C1.27754 1.54067 1.59789 1.18273 2.01675 1.1591C2.4356 1.13547 2.79435 1.4551 2.81803 1.87301L2.93961 4.01846C4.59127 2.16716 6.9984 1 9.67953 1C14.6614 1 18.7 5.02944 18.7 10C18.7 14.9706 14.6614 19 9.67953 19C7.48411 19 5.4701 18.2165 3.90602 16.9153C3.58381 16.6472 3.54041 16.1693 3.80908 15.8478C4.07774 15.5264 4.55674 15.4831 4.87895 15.7511C6.18011 16.8336 7.85267 17.4842 9.67953 17.4842C13.8223 17.4842 17.1808 14.1334 17.1808 10C17.1808 5.86658 13.8223 2.51579 9.67953 2.51579Z"></path>'
	},
	identityGhost: {
		box: 20,
		svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M7.89929 2H12.1007C13.567 1.99999 14.7288 1.99998 15.6529 2.10139C16.6005 2.20537 17.387 2.42327 18.0622 2.92107C18.4536 3.20973 18.7987 3.55727 19.0854 3.95152C19.5797 4.6314 19.7961 5.42348 19.8993 6.37778C20 7.30842 20 8.47838 20 9.95505V10.045C20 11.5216 20 12.6916 19.8993 13.6222C19.7961 14.5765 19.5797 15.3686 19.0854 16.0485C18.7987 16.4427 18.4536 16.7903 18.0622 17.0789C17.387 17.5767 16.6005 17.7946 15.6529 17.8986C14.7288 18 13.567 18 12.1007 18H7.89929C6.43298 18 5.27121 18 4.34709 17.8986C3.39948 17.7946 2.61296 17.5767 1.93784 17.0789C1.54635 16.7903 1.20125 16.4427 0.914616 16.0485C0.420303 15.3686 0.203929 14.5765 0.100675 13.6222C-1.82119e-05 12.6916 -1.00148e-05 11.5216 2.05305e-07 10.0449V9.95505C-1.00148e-05 8.47839 -1.82119e-05 7.30842 0.100675 6.37778C0.203929 5.42348 0.420303 4.6314 0.914616 3.95152C1.20125 3.55727 1.54635 3.20973 1.93784 2.92107C2.61296 2.42327 3.39948 2.20537 4.34709 2.10139C5.27121 1.99998 6.43298 1.99999 7.89929 2ZM4.50907 3.59841C3.68954 3.68834 3.19802 3.85825 2.82122 4.13609C2.55336 4.33359 2.31724 4.57138 2.12112 4.84113C1.84523 5.22059 1.6765 5.71558 1.5872 6.5409C1.49637 7.38045 1.49533 8.46835 1.49533 10C1.49533 11.5317 1.49637 12.6196 1.5872 13.4591C1.6765 14.2844 1.84523 14.7794 2.12112 15.1589C2.31724 15.4286 2.55336 15.6664 2.82122 15.8639C3.19802 16.1417 3.68954 16.3117 4.50907 16.4016C5.34274 16.4931 6.42301 16.4941 7.94393 16.4941H12.0561C13.577 16.4941 14.6573 16.4931 15.4909 16.4016C16.3105 16.3117 16.802 16.1417 17.1788 15.8639C17.4466 15.6664 17.6828 15.4286 17.8789 15.1589C18.1548 14.7794 18.3235 14.2844 18.4128 13.4591C18.5036 12.6196 18.5047 11.5317 18.5047 10C18.5047 8.46835 18.5036 7.38045 18.4128 6.5409C18.3235 5.71558 18.1548 5.22059 17.8789 4.84113C17.6828 4.57138 17.4466 4.33359 17.1788 4.13609C16.802 3.85825 16.3105 3.68834 15.4909 3.59841C14.6573 3.50693 13.577 3.50588 12.0561 3.50588H7.94393C6.42301 3.50588 5.34274 3.50693 4.50907 3.59841Z" ></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8349 6.82157C12.8349 6.40573 13.1696 6.06863 13.5826 6.06863H16.0125C16.4254 6.06863 16.7601 6.40573 16.7601 6.82157C16.7601 7.23741 16.4254 7.57451 16.0125 7.57451H13.5826C13.1696 7.57451 12.8349 7.23741 12.8349 6.82157Z" ></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8349 9.48824C12.8349 9.0724 13.1696 8.73529 13.5826 8.73529H16.0125C16.4254 8.73529 16.7601 9.0724 16.7601 9.48824C16.7601 9.90407 16.4254 10.2412 16.0125 10.2412H13.5826C13.1696 10.2412 12.8349 9.90407 12.8349 9.48824Z" ></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.35203 6.3902C5.69101 6.3902 4.42368 7.65491 4.42368 9.11961V13.2069L4.94141 13.0467C5.24619 12.9524 5.57702 13.0032 5.8401 13.1846L6.25879 13.4733L6.7883 13.1635C7.12233 12.9681 7.53609 12.9738 7.86465 13.1784L8.35756 13.4854L8.94889 13.1395C9.20299 12.9908 9.50745 12.9565 9.78786 13.0451L10.2804 13.2006V9.11961C10.2804 7.65491 9.01304 6.3902 7.35203 6.3902ZM2.92835 9.11961C2.92835 6.7378 4.95263 4.88431 7.35203 4.88431C9.75142 4.88431 11.7757 6.7378 11.7757 9.11961V14.0208C11.7757 14.6307 11.188 15.0654 10.6101 14.8829L9.52909 14.5416L8.87614 14.9236C8.54211 15.119 8.12836 15.1132 7.7998 14.9086L7.30689 14.6016L6.76494 14.9187C6.41575 15.123 5.98101 15.1068 5.64779 14.877L5.17376 14.5502L4.08898 14.8857C3.51213 15.0642 2.92835 14.6297 2.92835 14.022V9.11961Z" ></path>
<path d="M6.94704 9.48824C6.94704 9.90407 6.6123 10.2412 6.19938 10.2412C5.78645 10.2412 5.45171 9.90407 5.45171 9.48824C5.45171 9.0724 5.78645 8.73529 6.19938 8.73529C6.6123 8.73529 6.94704 9.0724 6.94704 9.48824Z" ></path>
<path d="M9.2757 9.48824C9.2757 9.90407 8.94096 10.2412 8.52804 10.2412C8.11511 10.2412 7.78037 9.90407 7.78037 9.48824C7.78037 9.0724 8.11511 8.73529 8.52804 8.73529C8.94096 8.73529 9.2757 9.0724 9.2757 9.48824Z" ></path>`
	},
	layer: {
		box: 20,
		svg: `<path fillRule="evenodd" clipRule="evenodd" d="M10 1C9.71122 1 9.46041 1.07192 9.22713 1.16699C9.01574 1.25313 8.77844 1.37604 8.52105 1.50936L2.82364 4.45984C2.38091 4.68905 1.9741 4.89966 1.68442 5.10796C1.3845 5.32363 1.00158 5.68295 1 6.25625C0.998426 6.82956 1.37937 7.19092 1.67809 7.40818C1.96662 7.61802 2.37226 7.8308 2.81371 8.06236L8.5057 11.0489C8.76568 11.1853 9.00525 11.311 9.21875 11.3992C9.4543 11.4964 9.7078 11.57 10 11.57C10.2922 11.57 10.5457 11.4964 10.7813 11.3992C10.9947 11.3111 11.2343 11.1853 11.4942 11.0489L17.1862 8.06241C17.6277 7.83083 18.0334 7.61804 18.3219 7.40818C18.6206 7.19092 19.0016 6.82956 19 6.25625C18.9984 5.68295 18.6155 5.32363 18.3156 5.10796C18.0259 4.89965 17.6191 4.68904 17.1763 4.45983L11.4789 1.50935C11.2216 1.37604 10.9843 1.25313 10.7729 1.16699C10.5396 1.07192 10.2888 1 10 1ZM9.82171 2.58362C9.94443 2.53361 9.98539 2.533 10 2.533C10.0146 2.533 10.0556 2.53361 10.1783 2.58362C10.3156 2.6396 10.4893 2.72869 10.7819 2.88022L16.4026 5.79095C16.8072 6.00052 17.081 6.14371 17.2697 6.26087C17.0817 6.37903 16.8087 6.52369 16.4052 6.7354L10.79 9.68166C10.4945 9.83668 10.319 9.92788 10.1802 9.98519C10.0561 10.0364 10.0147 10.037 10 10.037C9.98527 10.037 9.94387 10.0364 9.8198 9.98519C9.68096 9.92788 9.50549 9.83668 9.21005 9.68166L3.59481 6.7354C3.19131 6.52368 2.91834 6.37903 2.7303 6.26087C2.91899 6.14372 3.19276 6.00052 3.59742 5.79096L9.21808 2.88022C9.51068 2.72869 9.68435 2.6396 9.82171 2.58362Z"></path>
<path d="M2.14772 9.65427C1.77012 9.45433 1.29866 9.59298 1.09475 9.96582C0.890474 10.3393 1.03308 10.8044 1.41131 11.0047L8.49508 14.7555C8.75679 14.8941 8.99788 15.0218 9.2128 15.1113C9.44994 15.21 9.70533 15.2848 9.99992 15.2848C10.2945 15.2848 10.5499 15.21 10.787 15.1113C11.002 15.0218 11.2431 14.8941 11.5048 14.7555L18.5886 11.0047C18.9668 10.8044 19.1094 10.3393 18.9051 9.96582C18.7012 9.59298 18.2298 9.45433 17.8522 9.65427L10.7955 13.3907C10.4981 13.5482 10.3213 13.6409 10.1815 13.6992C10.0564 13.7512 10.0147 13.7518 9.99992 13.7518C9.98511 13.7518 9.9434 13.7512 9.81838 13.6992C9.6785 13.6409 9.50178 13.5482 9.20435 13.3907L2.14772 9.65427Z"></path>
<path d="M2.14772 13.3694C1.77012 13.1695 1.29866 13.3082 1.09475 13.681C0.890474 14.0545 1.03308 14.5196 1.41131 14.7198L8.49505 18.4707C8.75677 18.6093 8.99788 18.737 9.2128 18.8265C9.44994 18.9252 9.70533 19 9.99992 19C10.2945 19 10.5499 18.9252 10.787 18.8265C11.0019 18.737 11.243 18.6093 11.5047 18.4707L18.5886 14.7198C18.9668 14.5196 19.1094 14.0545 18.9051 13.681C18.7012 13.3082 18.2298 13.1695 17.8522 13.3694L10.7955 17.1059C10.4981 17.2634 10.3213 17.3561 10.1815 17.4144C10.0564 17.4664 10.0147 17.467 9.99992 17.467C9.98511 17.467 9.9434 17.4664 9.81838 17.4144C9.6785 17.3561 9.50178 17.2634 9.20435 17.1059L2.14772 13.3694Z"></path>`
	},
	commentSquareText: {
		box: 20,
		svg: `<path d="M5.42283 5.601C5.0022 5.601 4.66187 5.94366 4.66187 6.36553C4.66187 6.78741 5.0022 7.13007 5.42283 7.13007H12.7464C13.167 7.13007 13.5074 6.78741 13.5074 6.36553C13.5074 5.94366 13.167 5.601 12.7464 5.601H5.42283Z"></path>
<path d="M5.42283 8.36163C5.0022 8.36163 4.66187 8.70428 4.66187 9.12616C4.66187 9.54804 5.0022 9.89069 5.42283 9.89069H10.0001C10.4207 9.89069 10.761 9.54804 10.761 9.12616C10.761 8.70428 10.4207 8.36163 10.0001 8.36163H5.42283Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9596 1H9.04037C7.57676 0.999992 6.41796 0.999986 5.49454 1.09783C4.54831 1.19808 3.76203 1.40792 3.08102 1.88725C2.61466 2.21549 2.20906 2.62321 1.88254 3.09195C1.40577 3.77639 1.19706 4.56659 1.09733 5.51762C1 6.44578 1.00001 7.61054 1.00002 9.08181L1.00001 11.2924C0.999876 12.2702 0.999792 12.8908 1.11901 13.4235C1.53283 15.2724 2.96934 16.7166 4.80919 17.1327C5.33924 17.2526 5.95679 17.2525 6.92937 17.2523L7.0412 17.2523C7.3035 17.2523 7.36799 17.2538 7.42379 17.2609C7.65339 17.2902 7.8674 17.3935 8.03367 17.5556C8.07409 17.5949 8.11553 17.6447 8.27938 17.8506L8.38466 17.9829C8.51828 18.1508 8.64074 18.3047 8.75106 18.426C8.86761 18.5541 9.01244 18.6941 9.20387 18.7979C9.70076 19.0674 10.2992 19.0674 10.7961 18.7979C10.9876 18.6941 11.1324 18.5541 11.2489 18.426C11.3593 18.3046 11.4818 18.1506 11.6156 17.9826L11.7206 17.8506C11.8845 17.6447 11.9259 17.5949 11.9663 17.5556C12.1326 17.3935 12.3466 17.2902 12.5762 17.2609C12.632 17.2538 12.6965 17.2523 12.9588 17.2523L13.0706 17.2523C14.0432 17.2525 14.6608 17.2526 15.1908 17.1327C17.0307 16.7166 18.4672 15.2724 18.881 13.4235C19.0002 12.8908 19.0001 12.2701 19 11.2923L19 9.0819C19 7.61059 19 6.4458 18.9027 5.51762C18.8029 4.56659 18.5942 3.77639 18.1175 3.09195C17.7909 2.62321 17.3853 2.21549 16.919 1.88725C16.238 1.40792 15.4517 1.19808 14.5055 1.09783C13.582 0.999986 12.4232 0.999992 10.9596 1ZM5.65416 2.61846C6.48847 2.53006 7.56709 2.52907 9.08455 2.52907H10.9154C12.4329 2.52907 13.5115 2.53006 14.3458 2.61846C15.1666 2.70542 15.6628 2.87003 16.0457 3.13958C16.3667 3.36546 16.6458 3.64606 16.8706 3.96869C17.1388 4.35375 17.3026 4.85269 17.3891 5.67782C17.4771 6.51654 17.4781 7.60084 17.4781 9.12617V11.1801C17.4781 12.3063 17.4734 12.743 17.3961 13.088C17.1112 14.3609 16.1224 15.3547 14.8566 15.6409C14.5134 15.7186 14.0792 15.7233 12.9588 15.7233L12.9194 15.7233C12.7147 15.7232 12.548 15.7231 12.3845 15.744C11.828 15.815 11.3095 16.0655 10.9068 16.4579C10.7885 16.5732 10.6844 16.704 10.5566 16.8647L10.4407 17.0104C10.2887 17.2013 10.1977 17.315 10.1254 17.3946C10.0921 17.4311 10.0724 17.4495 10.0636 17.4571C10.0232 17.4755 9.97681 17.4755 9.93638 17.4571C9.92764 17.4495 9.90788 17.4311 9.87462 17.3946C9.80228 17.315 9.71127 17.2013 9.55934 17.0104L9.4434 16.8647C9.31562 16.704 9.21155 16.5732 9.09322 16.4579C8.69052 16.0655 8.172 15.815 7.6155 15.744C7.45196 15.7231 7.28528 15.7232 7.08063 15.7233L7.0412 15.7233C5.92083 15.7233 5.48656 15.7186 5.1434 15.6409C3.87757 15.3547 2.88876 14.3609 2.60387 13.088C2.52663 12.743 2.52195 12.3063 2.52195 11.1801V9.12617C2.52195 7.60084 2.52294 6.51654 2.61089 5.67782C2.69741 4.85269 2.86121 4.35375 3.12944 3.96869C3.35418 3.64606 3.63333 3.36546 3.95426 3.13958C4.33722 2.87003 4.83342 2.70542 5.65416 2.61846Z"></path>`
	},
	heart: {
		box: 20,
		svg: '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5122 2.8077C2.85688 3.44413 1.53846 5.02066 1.53846 7.10947C1.53846 8.76178 2.28329 10.3458 3.47608 11.8749C4.6691 13.4044 6.26102 14.8165 7.85113 16.1178C8.49862 16.6477 8.93109 16.9999 9.29134 17.2276C9.63403 17.4443 9.832 17.4953 10 17.4953C10.168 17.4953 10.366 17.4443 10.7087 17.2276C11.0689 16.9999 11.5014 16.6477 12.1489 16.1178C13.739 14.8165 15.3309 13.4044 16.5239 11.8749C17.7167 10.3458 18.4615 8.76178 18.4615 7.10947C18.4615 5.02066 17.1431 3.44413 15.4878 2.8077C13.8475 2.17705 11.9178 2.48026 10.611 4.15139C10.4655 4.33752 10.2396 4.4467 10 4.4467C9.76042 4.4467 9.53452 4.33752 9.38898 4.15139C8.08223 2.48026 6.15246 2.17705 4.5122 2.8077ZM10 2.56094C8.25986 0.89808 5.91428 0.65187 3.94934 1.40735C1.75851 2.24968 0 4.34818 0 7.10947C0 9.21775 0.950832 11.1183 2.25293 12.7876C3.55481 14.4566 5.25702 15.9568 6.86386 17.2718L6.90027 17.3016C7.50171 17.7938 8.0067 18.2071 8.45616 18.4913C8.93222 18.7922 9.423 19 10 19C10.577 19 11.0678 18.7922 11.5438 18.4913C11.9933 18.2071 12.4983 17.7938 13.0997 17.3016L13.1361 17.2718C14.743 15.9568 16.4452 14.4566 17.7471 12.7876C19.0492 11.1183 20 9.21775 20 7.10947C20 4.34818 18.2415 2.24968 16.0507 1.40735C14.0857 0.65187 11.7401 0.89808 10 2.56094Z"></path>'
	},
	circleInfo: {
		box: 20,
		svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M10 5.625C10.4142 5.625 10.75 5.96079 10.75 6.375V10.375C10.75 10.7892 10.4142 11.125 10 11.125C9.58579 11.125 9.25 10.7892 9.25 10.375V6.375C9.25 5.96079 9.58579 5.625 10 5.625Z"></path>
<path d="M11 13.375C11 13.9273 10.5523 14.375 10 14.375C9.44772 14.375 9 13.9273 9 13.375C9 12.8227 9.44772 12.375 10 12.375C10.5523 12.375 11 12.8227 11 13.375Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 2.38462C5.79414 2.38462 2.38462 5.79414 2.38462 10C2.38462 14.2059 5.79414 17.6154 10 17.6154C14.2059 17.6154 17.6154 14.2059 17.6154 10C17.6154 5.79414 14.2059 2.38462 10 2.38462ZM1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10Z"></path>`
	},
	browserUrl: {
		box: 20,
		svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9047 2H8.0953C6.40184 1.99999 5.05345 1.99998 3.99656 2.13939C2.90604 2.28325 2.01241 2.58774 1.30597 3.28086C0.599368 3.97415 0.288796 4.85142 0.142103 5.92195C-2.51979e-05 6.95916 -1.3896e-05 8.28232 2.82355e-07 9.94365V10.0564C-1.3896e-05 11.7177 -2.52128e-05 13.0408 0.142103 14.0781C0.288796 15.1486 0.599368 16.0259 1.30597 16.7191C2.01241 17.4123 2.90604 17.7168 3.99655 17.8606C5.05341 18 6.40185 18 8.09521 18H11.9049C13.5983 18 14.9466 18 16.0034 17.8606C17.094 17.7168 17.9876 17.4123 18.694 16.7191C19.4006 16.0259 19.7112 15.1486 19.8579 14.0781C20 13.0408 20 11.7177 20 10.0564V9.94366C20 8.28234 20 6.95916 19.8579 5.92195C19.7112 4.85142 19.4006 3.97415 18.694 3.28086C17.9876 2.58774 17.094 2.28325 16.0034 2.13939C14.9465 1.99998 13.5982 1.99999 11.9047 2ZM4.1994 3.62439C5.1431 3.49991 6.38905 3.49832 8.15247 3.49832H11.8475C13.611 3.49832 14.8569 3.49991 15.8006 3.62439C16.7225 3.746 17.2409 3.97241 17.6168 4.34118C17.9925 4.70978 18.223 5.21799 18.3469 6.12191C18.4737 7.04754 18.4753 8.26972 18.4753 10C18.4753 11.7303 18.4737 12.9525 18.3469 13.8781C18.223 14.782 17.9925 15.2902 17.6168 15.6588C17.2409 16.0276 16.7225 16.254 15.8006 16.3756C14.8569 16.5001 13.611 16.5017 11.8475 16.5017H8.15247C6.38905 16.5017 5.1431 16.5001 4.1994 16.3756C3.27753 16.254 2.75908 16.0276 2.38323 15.6588C2.00754 15.2902 1.777 14.782 1.65314 13.8781C1.5263 12.9525 1.52468 11.7303 1.52468 10C1.52468 8.26972 1.5263 7.04754 1.65314 6.12191C1.777 5.21799 2.00754 4.70978 2.38323 4.34118C2.75908 3.97241 3.27753 3.746 4.1994 3.62439Z"></path>
<path d="M5 6.00195C5 6.55424 4.55228 7.00195 4 7.00195C3.44772 7.00195 3 6.55424 3 6.00195C3 5.44967 3.44772 5.00195 4 5.00195C4.55228 5.00195 5 5.44967 5 6.00195Z"></path>
<path d="M6.76364 5.25195C6.34189 5.25195 6 5.58774 6 6.00195C6 6.41617 6.34189 6.75195 6.76364 6.75195H16.4364C16.8581 6.75195 17.2 6.41617 17.2 6.00195C17.2 5.58774 16.8581 5.25195 16.4364 5.25195H6.76364Z"></path>`
	},
	phoneOff: {
		box: 24,
		svg: `<path d="M9 2L9.089 2.53402C9.28188 3.69129 9.37832 4.26993 9.77519 4.62204C10.1892 4.98934 10.7761 5 12 5C13.2239 5 13.8108 4.98934 14.2248 4.62204C14.6217 4.26993 14.7181 3.69129 14.911 2.53402L15 2" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M11 19H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M2 2L22 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.9836 18.9959C18.8039 20.9154 17.4166 22.0002 15.4836 22.0002H8.49219C6.55919 22.0002 4.99219 20.4332 4.99219 18.5002L5.09241 5.48584" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M7.14062 2.27035C7.55637 2.09621 8.01286 2 8.49182 2H15.4833C17.4163 2 18.9833 3.567 18.9833 5.5V15.0051" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />`
	}
};
function instance$2(e, t, I) {
	const B = ['name'];
	let tr = compute_rest_props(t, B),
		{ name: rr } = t,
		ir = icons[rr];
	return (
		(e.$$set = (lr) => {
			I(1, (t = assign(assign({}, t), exclude_internal_props(lr)))),
				I(2, (tr = compute_rest_props(t, B))),
				'name' in lr && I(3, (rr = lr.name));
		}),
		(t = exclude_internal_props(t)),
		[ir, t, tr, rr]
	);
}
class Icon extends SvelteComponent {
	constructor(t) {
		super(), init(this, t, instance$2, create_fragment$2, safe_not_equal, { name: 3 });
	}
}
function create_default_slot$1(e) {
	let t, I, B, tr, rr;
	t = new Tooltip_arrow({ props: { class: 'bg-primary rounded-[1.5px] border' } });
	const ir = e[5].default,
		lr = create_slot(ir, e, e[6], null);
	return {
		c() {
			create_component(t.$$.fragment), (I = space()), (B = element('div')), lr && lr.c(), this.h();
		},
		l(dr) {
			claim_component(t.$$.fragment, dr),
				(I = claim_space(dr)),
				(B = claim_element(dr, 'DIV', { class: !0 }));
			var mr = children(B);
			lr && lr.l(mr), mr.forEach(detach), this.h();
		},
		h() {
			attr(
				B,
				'class',
				(tr = cn$2(
					'flex items-center gap-1.5 justify-center w-full h-full px-2.5 z-50 bg-secondary text-xs text-secondary-foreground rounded-md',
					e[0]
				))
			);
		},
		m(dr, mr) {
			mount_component(t, dr, mr),
				insert_hydration(dr, I, mr),
				insert_hydration(dr, B, mr),
				lr && lr.m(B, null),
				(rr = !0);
		},
		p(dr, mr) {
			lr &&
				lr.p &&
				(!rr || mr & 64) &&
				update_slot_base(
					lr,
					ir,
					dr,
					dr[6],
					rr ? get_slot_changes(ir, dr[6], mr, null) : get_all_dirty_from_scope(dr[6]),
					null
				),
				(!rr ||
					(mr & 1 &&
						tr !==
							(tr = cn$2(
								'flex items-center gap-1.5 justify-center w-full h-full px-2.5 z-50 bg-secondary text-xs text-secondary-foreground rounded-md',
								dr[0]
							)))) &&
					attr(B, 'class', tr);
		},
		i(dr) {
			rr || (transition_in(t.$$.fragment, dr), transition_in(lr, dr), (rr = !0));
		},
		o(dr) {
			transition_out(t.$$.fragment, dr), transition_out(lr, dr), (rr = !1);
		},
		d(dr) {
			dr && (detach(I), detach(B)), destroy_component(t, dr), lr && lr.d(dr);
		}
	};
}
function create_fragment$1(e) {
	let t, I;
	const B = [
		{ transition: e[2] },
		{ transitionConfig: e[3] },
		{ sideOffset: e[1] },
		{
			class: cn$2('flex items-center justify-center border z-50 rounded-md bg-secondary h-6', e[0])
		},
		e[4]
	];
	let tr = { $$slots: { default: [create_default_slot$1] }, $$scope: { ctx: e } };
	for (let rr = 0; rr < B.length; rr += 1) tr = assign(tr, B[rr]);
	return (
		(t = new Tooltip_content$1({ props: tr })),
		{
			c() {
				create_component(t.$$.fragment);
			},
			l(rr) {
				claim_component(t.$$.fragment, rr);
			},
			m(rr, ir) {
				mount_component(t, rr, ir), (I = !0);
			},
			p(rr, [ir]) {
				const lr =
					ir & 31
						? get_spread_update(B, [
								ir & 4 && { transition: rr[2] },
								ir & 8 && { transitionConfig: rr[3] },
								ir & 2 && { sideOffset: rr[1] },
								ir & 1 && {
									class: cn$2(
										'flex items-center justify-center border z-50 rounded-md bg-secondary h-6',
										rr[0]
									)
								},
								ir & 16 && get_spread_object(rr[4])
							])
						: {};
				ir & 65 && (lr.$$scope = { dirty: ir, ctx: rr }), t.$set(lr);
			},
			i(rr) {
				I || (transition_in(t.$$.fragment, rr), (I = !0));
			},
			o(rr) {
				transition_out(t.$$.fragment, rr), (I = !1);
			},
			d(rr) {
				destroy_component(t, rr);
			}
		}
	);
}
function instance$1(e, t, I) {
	const B = ['class', 'sideOffset', 'transition', 'transitionConfig'];
	let tr = compute_rest_props(t, B),
		{ $$slots: rr = {}, $$scope: ir } = t,
		{ class: lr = void 0 } = t,
		{ sideOffset: dr = 4 } = t,
		{ transition: mr = flyAndScale } = t,
		{ transitionConfig: _r = { y: 8, duration: 150 } } = t;
	return (
		(e.$$set = (fr) => {
			(t = assign(assign({}, t), exclude_internal_props(fr))),
				I(4, (tr = compute_rest_props(t, B))),
				'class' in fr && I(0, (lr = fr.class)),
				'sideOffset' in fr && I(1, (dr = fr.sideOffset)),
				'transition' in fr && I(2, (mr = fr.transition)),
				'transitionConfig' in fr && I(3, (_r = fr.transitionConfig)),
				'$$scope' in fr && I(6, (ir = fr.$$scope));
		}),
		[lr, dr, mr, _r, tr, rr, ir]
	);
}
class Tooltip_content extends SvelteComponent {
	constructor(t) {
		super(),
			init(this, t, instance$1, create_fragment$1, safe_not_equal, {
				class: 0,
				sideOffset: 1,
				transition: 2,
				transitionConfig: 3
			});
	}
}
const Root = Tooltip,
	Trigger = Tooltip_trigger;
function create_default_slot_2(e) {
	let t;
	const I = e[4].default,
		B = create_slot(I, e, e[6], null);
	return {
		c() {
			B && B.c();
		},
		l(tr) {
			B && B.l(tr);
		},
		m(tr, rr) {
			B && B.m(tr, rr), (t = !0);
		},
		p(tr, rr) {
			B &&
				B.p &&
				(!t || rr & 64) &&
				update_slot_base(
					B,
					I,
					tr,
					tr[6],
					t ? get_slot_changes(I, tr[6], rr, null) : get_all_dirty_from_scope(tr[6]),
					null
				);
		},
		i(tr) {
			t || (transition_in(B, tr), (t = !0));
		},
		o(tr) {
			transition_out(B, tr), (t = !1);
		},
		d(tr) {
			B && B.d(tr);
		}
	};
}
function create_if_block(e) {
	let t,
		I = shortcutToString(e[1]) + '',
		B;
	return {
		c() {
			(t = element('span')), (B = text$1(I)), this.h();
		},
		l(tr) {
			t = claim_element(tr, 'SPAN', { class: !0 });
			var rr = children(t);
			(B = claim_text(rr, I)), rr.forEach(detach), this.h();
		},
		h() {
			attr(
				t,
				'class',
				'pointer-events-none inline-flex h-[18px] pl-1.5 tracking-widest -mr-2 select-none items-center gap-1 rounded bg-muted px-1 font-mono font-medium text-foreground/70 opacity-100'
			);
		},
		m(tr, rr) {
			insert_hydration(tr, t, rr), append_hydration(t, B);
		},
		p(tr, rr) {
			rr & 2 && I !== (I = shortcutToString(tr[1]) + '') && set_data(B, I);
		},
		d(tr) {
			tr && detach(t);
		}
	};
}
function create_default_slot_1(e) {
	let t,
		I,
		B,
		tr = e[1] && create_if_block(e);
	return {
		c() {
			(t = text$1(e[0])), (I = space()), tr && tr.c(), (B = empty());
		},
		l(rr) {
			(t = claim_text(rr, e[0])), (I = claim_space(rr)), tr && tr.l(rr), (B = empty());
		},
		m(rr, ir) {
			insert_hydration(rr, t, ir),
				insert_hydration(rr, I, ir),
				tr && tr.m(rr, ir),
				insert_hydration(rr, B, ir);
		},
		p(rr, ir) {
			ir & 1 && set_data(t, rr[0]),
				rr[1]
					? tr
						? tr.p(rr, ir)
						: ((tr = create_if_block(rr)), tr.c(), tr.m(B.parentNode, B))
					: tr && (tr.d(1), (tr = null));
		},
		d(rr) {
			rr && (detach(t), detach(I), detach(B)), tr && tr.d(rr);
		}
	};
}
function create_default_slot(e) {
	let t, I, B, tr;
	t = new Trigger({
		props: { $$slots: { default: [create_default_slot_2] }, $$scope: { ctx: e } }
	});
	const rr = [e[3], { transitionConfig: { duration: e[2] > 1 ? 125 : 175 } }];
	let ir = { $$slots: { default: [create_default_slot_1] }, $$scope: { ctx: e } };
	for (let lr = 0; lr < rr.length; lr += 1) ir = assign(ir, rr[lr]);
	return (
		(B = new Tooltip_content({ props: ir })),
		{
			c() {
				create_component(t.$$.fragment), (I = space()), create_component(B.$$.fragment);
			},
			l(lr) {
				claim_component(t.$$.fragment, lr),
					(I = claim_space(lr)),
					claim_component(B.$$.fragment, lr);
			},
			m(lr, dr) {
				mount_component(t, lr, dr),
					insert_hydration(lr, I, dr),
					mount_component(B, lr, dr),
					(tr = !0);
			},
			p(lr, dr) {
				const mr = {};
				dr & 64 && (mr.$$scope = { dirty: dr, ctx: lr }), t.$set(mr);
				const _r =
					dr & 12
						? get_spread_update(rr, [
								dr & 8 && get_spread_object(lr[3]),
								dr & 4 && { transitionConfig: { duration: lr[2] > 1 ? 125 : 175 } }
							])
						: {};
				dr & 67 && (_r.$$scope = { dirty: dr, ctx: lr }), B.$set(_r);
			},
			i(lr) {
				tr || (transition_in(t.$$.fragment, lr), transition_in(B.$$.fragment, lr), (tr = !0));
			},
			o(lr) {
				transition_out(t.$$.fragment, lr), transition_out(B.$$.fragment, lr), (tr = !1);
			},
			d(lr) {
				lr && detach(I), destroy_component(t, lr), destroy_component(B, lr);
			}
		}
	);
}
function create_fragment(e) {
	let t, I;
	return (
		(t = new Root({
			props: {
				openDelay: e[2] >= 1 ? 0 : 300,
				closeDelay: e[2] >= 1 ? 0 : 50,
				onOpenChange: e[5],
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				create_component(t.$$.fragment);
			},
			l(B) {
				claim_component(t.$$.fragment, B);
			},
			m(B, tr) {
				mount_component(t, B, tr), (I = !0);
			},
			p(B, [tr]) {
				const rr = {};
				tr & 4 && (rr.openDelay = B[2] >= 1 ? 0 : 300),
					tr & 4 && (rr.closeDelay = B[2] >= 1 ? 0 : 50),
					tr & 79 && (rr.$$scope = { dirty: tr, ctx: B }),
					t.$set(rr);
			},
			i(B) {
				I || (transition_in(t.$$.fragment, B), (I = !0));
			},
			o(B) {
				transition_out(t.$$.fragment, B), (I = !1);
			},
			d(B) {
				destroy_component(t, B);
			}
		}
	);
}
function instance(e, t, I) {
	let B;
	component_subscribe(e, tooltipsOpen, (mr) => I(2, (B = mr)));
	let { $$slots: tr = {}, $$scope: rr } = t,
		{ text: ir = 'Tooltip' } = t,
		{ shortcut: lr = void 0 } = t;
	const dr = (mr) => {
		mr
			? tooltipsOpen.update((_r) => _r + 1)
			: setTimeout(() => {
					tooltipsOpen.update((_r) => _r - 1);
				}, 500);
	};
	return (
		(e.$$set = (mr) => {
			I(3, (t = assign(assign({}, t), exclude_internal_props(mr)))),
				'text' in mr && I(0, (ir = mr.text)),
				'shortcut' in mr && I(1, (lr = mr.shortcut)),
				'$$scope' in mr && I(6, (rr = mr.$$scope));
		}),
		(t = exclude_internal_props(t)),
		[ir, lr, B, t, tr, dr, rr]
	);
}
class Tooltip_1 extends SvelteComponent {
	constructor(t) {
		super(), init(this, t, instance, create_fragment, safe_not_equal, { text: 0, shortcut: 1 });
	}
}
export {
	getPortalDestination as $,
	isPageSidebarOpen as A,
	pageSidebarWidth as B,
	C,
	resizingPageSidebar as D,
	editorSearchActive as E,
	editorSearchValue as F,
	openNote as G,
	update_keyed_each as H,
	Icon as I,
	searchEntries as J,
	destroy_block as K,
	outro_and_destroy_block as L,
	toWritableStores as M,
	omit as N,
	overridable as O,
	removeUndefined as P,
	getOptionUpdater as Q,
	R$2 as R,
	SHORTCUTS as S,
	T,
	U$2 as U,
	duplicateNote as V,
	deleteNote as W,
	collectionSearchActive as X,
	collectionEntries as Y,
	pgClient as Z,
	generateIds as _,
	eq as a,
	getPositioningUpdater as a0,
	dequal as a1,
	usePortal as a2,
	useFloating as a3,
	collection$1 as a4,
	buildFileTree as a5,
	sortFileEntry as a6,
	noteHistory as a7,
	cn as a8,
	editorMode as a9,
	Mapping as aA,
	saveNote as aB,
	appSettings as aC,
	collectionSettings$1 as aD,
	themeStorageKey as aE,
	modeStorageKey as aF,
	derivedMode as aG,
	derivedTheme as aH,
	systemPrefersMode as aI,
	setMode as aJ,
	setTheme as aK,
	disableTransitions as aL,
	themeColors as aM,
	darkClassNames as aN,
	lightClassNames as aO,
	defineConfig as aP,
	setInitialMode as aQ,
	isValidMode as aR,
	stripValues as aS,
	generateId as aT,
	settingsStore as aU,
	userPrefersMode as aV,
	toggleTheme as aW,
	nanoid as aX,
	createDeviceDetector as aY,
	renameNote as aa,
	NodeSelection as ab,
	Selection as ac,
	TextSelection as ad,
	Slice as ae,
	DOMSerializer as af,
	Fragment as ag,
	DOMParser as ah,
	Mark as ai,
	dropPoint as aj,
	AllSelection as ak,
	Plugin as al,
	findWrapping as am,
	canSplit as an,
	liftTarget as ao,
	canJoin as ap,
	joinPoint as aq,
	replaceStep as ar,
	ReplaceStep as as,
	ReplaceAroundStep as at,
	NodeRange as au,
	Transform as av,
	EditorState as aw,
	PluginKey as ax,
	Schema as ay,
	Node$1 as az,
	and as b,
	collection as c,
	db as d,
	entry as e,
	createNote as f,
	getNextUntitledName as g,
	collectionSettings as h,
	activeFile as i,
	u$1 as j,
	cr as k,
	h$1 as l,
	moveNote as m,
	ensure_array_like as n,
	Tooltip_1 as o,
	pr as p,
	editor as q,
	noteDetailSidebarWidth as r,
	shortcutToString as s,
	isNoteDetailSidebarOpen as t,
	ur as u,
	getNoteMetadataParams as v,
	formatFileSize as w,
	x$2 as x,
	formatTimeAgo as y,
	resizingNoteDetailSidebar as z
};
