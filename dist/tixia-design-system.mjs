import { jsx as r, jsxs as f, Fragment as ze } from "react/jsx-runtime";
import xe, { useState as Y, useEffect as ce, forwardRef as de, useRef as ne, useCallback as he, Children as Ke, isValidElement as je, cloneElement as Mt, createContext as Ct, useContext as It } from "react";
import { createPortal as Ne } from "react-dom";
import X from "dayjs";
import { useReactTable as At, getPaginationRowModel as Dt, getSortedRowModel as Rt, getCoreRowModel as Lt, flexRender as Ye } from "@tanstack/react-table";
function st(e) {
  var t, a, s = "";
  if (typeof e == "string" || typeof e == "number") s += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (a = st(e[t])) && (s && (s += " "), s += a);
  } else for (a in e) e[a] && (s && (s += " "), s += a);
  return s;
}
function K() {
  for (var e, t, a = 0, s = "", n = arguments.length; a < n; a++) (e = arguments[a]) && (t = st(e)) && (s && (s += " "), s += t);
  return s;
}
const Ze = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, qe = K, me = (e, t) => (a) => {
  var s;
  if ((t == null ? void 0 : t.variants) == null) return qe(e, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: n, defaultVariants: o } = t, i = Object.keys(n).map((m) => {
    const h = a == null ? void 0 : a[m], v = o == null ? void 0 : o[m];
    if (h === null) return null;
    const b = Ze(h) || Ze(v);
    return n[m][b];
  }), l = a && Object.entries(a).reduce((m, h) => {
    let [v, b] = h;
    return b === void 0 || (m[v] = b), m;
  }, {}), c = t == null || (s = t.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((m, h) => {
    let { class: v, className: b, ...d } = h;
    return Object.entries(d).every((w) => {
      let [p, u] = w;
      return Array.isArray(u) ? u.includes({
        ...o,
        ...l
      }[p]) : {
        ...o,
        ...l
      }[p] === u;
    }) ? [
      ...m,
      v,
      b
    ] : m;
  }, []);
  return qe(e, i, c, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, Fe = "-", jt = (e) => {
  const t = Pt(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: s
  } = e;
  return {
    getClassGroupId: (i) => {
      const l = i.split(Fe);
      return l[0] === "" && l.length !== 1 && l.shift(), nt(l, t) || $t(i);
    },
    getConflictingClassGroupIds: (i, l) => {
      const c = a[i] || [];
      return l && s[i] ? [...c, ...s[i]] : c;
    }
  };
}, nt = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const a = e[0], s = t.nextPart.get(a), n = s ? nt(e.slice(1), s) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const o = e.join(Fe);
  return (i = t.validators.find(({
    validator: l
  }) => l(o))) == null ? void 0 : i.classGroupId;
}, Je = /^\[(.+)\]$/, $t = (e) => {
  if (Je.test(e)) {
    const t = Je.exec(e)[1], a = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, Pt = (e) => {
  const {
    theme: t,
    prefix: a
  } = e, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Bt(Object.entries(e.classGroups), a).forEach(([o, i]) => {
    Oe(i, s, o, t);
  }), s;
}, Oe = (e, t, a, s) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const o = n === "" ? t : Xe(t, n);
      o.classGroupId = a;
      return;
    }
    if (typeof n == "function") {
      if (Tt(n)) {
        Oe(n(s), t, a, s);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: a
      });
      return;
    }
    Object.entries(n).forEach(([o, i]) => {
      Oe(i, Xe(t, o), a, s);
    });
  });
}, Xe = (e, t) => {
  let a = e;
  return t.split(Fe).forEach((s) => {
    a.nextPart.has(s) || a.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(s);
  }), a;
}, Tt = (e) => e.isThemeGetter, Bt = (e, t) => t ? e.map(([a, s]) => {
  const n = s.map((o) => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([i, l]) => [t + i, l])) : o);
  return [a, n];
}) : e, Vt = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, a = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  const n = (o, i) => {
    a.set(o, i), t++, t > e && (t = 0, s = a, a = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let i = a.get(o);
      if (i !== void 0)
        return i;
      if ((i = s.get(o)) !== void 0)
        return n(o, i), i;
    },
    set(o, i) {
      a.has(o) ? a.set(o, i) : n(o, i);
    }
  };
}, ot = "!", Ot = (e) => {
  const {
    separator: t,
    experimentalParseClassName: a
  } = e, s = t.length === 1, n = t[0], o = t.length, i = (l) => {
    const c = [];
    let m = 0, h = 0, v;
    for (let u = 0; u < l.length; u++) {
      let x = l[u];
      if (m === 0) {
        if (x === n && (s || l.slice(u, u + o) === t)) {
          c.push(l.slice(h, u)), h = u + o;
          continue;
        }
        if (x === "/") {
          v = u;
          continue;
        }
      }
      x === "[" ? m++ : x === "]" && m--;
    }
    const b = c.length === 0 ? l : l.substring(h), d = b.startsWith(ot), w = d ? b.substring(1) : b, p = v && v > h ? v - h : void 0;
    return {
      modifiers: c,
      hasImportantModifier: d,
      baseClassName: w,
      maybePostfixModifierPosition: p
    };
  };
  return a ? (l) => a({
    className: l,
    parseClassName: i
  }) : i;
}, Ht = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let a = [];
  return e.forEach((s) => {
    s[0] === "[" ? (t.push(...a.sort(), s), a = []) : a.push(s);
  }), t.push(...a.sort()), t;
}, Gt = (e) => ({
  cache: Vt(e.cacheSize),
  parseClassName: Ot(e),
  ...jt(e)
}), Ft = /\s+/, _t = (e, t) => {
  const {
    parseClassName: a,
    getClassGroupId: s,
    getConflictingClassGroupIds: n
  } = t, o = [], i = e.trim().split(Ft);
  let l = "";
  for (let c = i.length - 1; c >= 0; c -= 1) {
    const m = i[c], {
      modifiers: h,
      hasImportantModifier: v,
      baseClassName: b,
      maybePostfixModifierPosition: d
    } = a(m);
    let w = !!d, p = s(w ? b.substring(0, d) : b);
    if (!p) {
      if (!w) {
        l = m + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (p = s(b), !p) {
        l = m + (l.length > 0 ? " " + l : l);
        continue;
      }
      w = !1;
    }
    const u = Ht(h).join(":"), x = v ? u + ot : u, E = x + p;
    if (o.includes(E))
      continue;
    o.push(E);
    const T = n(p, w);
    for (let I = 0; I < T.length; ++I) {
      const $ = T[I];
      o.push(x + $);
    }
    l = m + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Wt() {
  let e = 0, t, a, s = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (a = lt(t)) && (s && (s += " "), s += a);
  return s;
}
const lt = (e) => {
  if (typeof e == "string")
    return e;
  let t, a = "";
  for (let s = 0; s < e.length; s++)
    e[s] && (t = lt(e[s])) && (a && (a += " "), a += t);
  return a;
};
function Ut(e, ...t) {
  let a, s, n, o = i;
  function i(c) {
    const m = t.reduce((h, v) => v(h), e());
    return a = Gt(m), s = a.cache.get, n = a.cache.set, o = l, l(c);
  }
  function l(c) {
    const m = s(c);
    if (m)
      return m;
    const h = _t(c, a);
    return n(c, h), h;
  }
  return function() {
    return o(Wt.apply(null, arguments));
  };
}
const Q = (e) => {
  const t = (a) => a[e] || [];
  return t.isThemeGetter = !0, t;
}, it = /^\[(?:([a-z-]+):)?(.+)\]$/i, Kt = /^\d+\/\d+$/, Yt = /* @__PURE__ */ new Set(["px", "full", "screen"]), Zt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, qt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Jt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Xt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Qt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, be = (e) => Se(e) || Yt.has(e) || Kt.test(e), we = (e) => Ce(e, "length", lr), Se = (e) => !!e && !Number.isNaN(Number(e)), $e = (e) => Ce(e, "number", Se), De = (e) => !!e && Number.isInteger(Number(e)), er = (e) => e.endsWith("%") && Se(e.slice(0, -1)), H = (e) => it.test(e), ke = (e) => Zt.test(e), tr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), rr = (e) => Ce(e, tr, ct), ar = (e) => Ce(e, "position", ct), sr = /* @__PURE__ */ new Set(["image", "url"]), nr = (e) => Ce(e, sr, cr), or = (e) => Ce(e, "", ir), Re = () => !0, Ce = (e, t, a) => {
  const s = it.exec(e);
  return s ? s[1] ? typeof t == "string" ? s[1] === t : t.has(s[1]) : a(s[2]) : !1;
}, lr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  qt.test(e) && !Jt.test(e)
), ct = () => !1, ir = (e) => Xt.test(e), cr = (e) => Qt.test(e), dr = () => {
  const e = Q("colors"), t = Q("spacing"), a = Q("blur"), s = Q("brightness"), n = Q("borderColor"), o = Q("borderRadius"), i = Q("borderSpacing"), l = Q("borderWidth"), c = Q("contrast"), m = Q("grayscale"), h = Q("hueRotate"), v = Q("invert"), b = Q("gap"), d = Q("gradientColorStops"), w = Q("gradientColorStopPositions"), p = Q("inset"), u = Q("margin"), x = Q("opacity"), E = Q("padding"), T = Q("saturate"), I = Q("scale"), $ = Q("sepia"), B = Q("skew"), R = Q("space"), y = Q("translate"), M = () => ["auto", "contain", "none"], A = () => ["auto", "hidden", "clip", "visible", "scroll"], O = () => ["auto", H, t], z = () => [H, t], C = () => ["", be, we], L = () => ["auto", Se, H], W = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], N = () => ["solid", "dashed", "dotted", "double", "none"], S = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], k = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], P = () => ["", "0", H], _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], D = () => [Se, H];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Re],
      spacing: [be, we],
      blur: ["none", "", ke, H],
      brightness: D(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ke, H],
      borderSpacing: z(),
      borderWidth: C(),
      contrast: D(),
      grayscale: P(),
      hueRotate: D(),
      invert: P(),
      gap: z(),
      gradientColorStops: [e],
      gradientColorStopPositions: [er, we],
      inset: O(),
      margin: O(),
      opacity: D(),
      padding: z(),
      saturate: D(),
      scale: D(),
      sepia: P(),
      skew: D(),
      space: z(),
      translate: z()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", H]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ke]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": _()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": _()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...W(), H]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: A()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": A()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": A()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: M()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": M()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": M()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [p]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [p]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [p]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [p]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [p]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [p]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [p]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [p]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [p]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", De, H]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: O()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", H]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: P()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: P()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", De, H]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Re]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", De, H]
        }, H]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": L()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": L()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Re]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [De, H]
        }, H]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": L()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": L()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", H]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", H]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [b]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [b]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [b]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...k()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...k(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...k(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [E]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [E]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [E]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [E]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [E]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [E]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [E]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [E]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [E]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [u]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [u]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [u]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [u]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [u]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [u]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [u]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [u]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [u]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [R]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [R]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", H, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [H, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [H, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [ke]
        }, ke]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [H, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [H, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ke, we]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", $e]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Re]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", H]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Se, $e]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", be, H]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", H]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", H]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [x]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [x]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...N(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", be, we]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", be, H]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: z()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", H]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", H]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [x]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...W(), ar]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", rr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, nr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [w]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [w]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [w]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [d]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [d]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [d]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [x]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...N(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [l]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [x]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: N()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [n]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [n]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [n]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [n]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [n]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [n]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [n]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [n]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [n]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [n]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...N()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [be, H]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [be, we]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: C()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [x]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [be, we]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", ke, or]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Re]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [x]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...S(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": S()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [a]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [s]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ke, H]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [m]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [h]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [v]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [T]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [$]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [a]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [s]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [m]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [h]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [v]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [T]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [$]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", H]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: D()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", H]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: D()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", H]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [I]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [I]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [I]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [De, H]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [y]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [y]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [B]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [B]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", H]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", H]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": z()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": z()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": z()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": z()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": z()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": z()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": z()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": z()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": z()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": z()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": z()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": z()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": z()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": z()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": z()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": z()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": z()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": z()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", H]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [be, we, $e]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, Me = /* @__PURE__ */ Ut(dr);
function g(...e) {
  return Me(K(e));
}
const G = ({
  icon: e,
  className: t,
  size: a,
  color: s,
  rotate: n,
  flip: o,
  spin: i,
  inline: l = !0,
  mode: c = "svg",
  ...m
}) => {
  const [h, v] = Y(null), [b, d] = Y(!0), [w, p] = Y(null);
  return ce(() => {
    let u = !0;
    return (async () => {
      try {
        const { Icon: E } = await import("./iconify-Dqt3MVen.mjs");
        u && (v(() => E), d(!1));
      } catch (E) {
        console.error("Failed to load icon:", E), u && (p(E), d(!1));
      }
    })(), () => {
      u = !1;
    };
  }, []), b ? /* @__PURE__ */ r("span", { style: { width: a, height: a } }) : w || !h ? null : /* @__PURE__ */ r(
    h,
    {
      icon: e,
      className: g(
        i && "animate-spin",
        t
      ),
      style: {
        color: s,
        transform: `rotate(${n || 0}deg)`
      },
      height: a,
      width: a,
      flip: o,
      inline: l,
      mode: c,
      ...m
    }
  );
}, mr = me(
  "border bg-white px-3 py-2 ring-0 transition-colors placeholder:text-neutral placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50",
        error: "border-danger hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50",
        success: "border-success hover:border-success-600 focus:border-success-600 hover:bg-success-50",
        ghost: "border-transparent bg-transparent hover:bg-primary-50 focus:bg-primary-50",
        underline: "border-0 border-b-2 border-neutral-200 rounded-none bg-transparent hover:border-primary-300 focus:border-primary-300 hover:bg-transparent focus:bg-transparent"
      },
      size: {
        sm: "h-8 px-2 py-1 text-sm",
        md: "h-10 px-3 py-2 text-base",
        lg: "h-12 px-4 py-3 text-lg"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "md",
      fullWidth: !0
    }
  }
), dt = de(
  ({
    className: e,
    variant: t = "default",
    size: a = "md",
    rounded: s = "md",
    error: n = !1,
    errorText: o,
    helperText: i,
    label: l,
    required: c = !1,
    labelPlacement: m = "top",
    fullWidth: h = !1,
    leftIcon: v,
    rightIcon: b,
    id: d,
    ...w
  }, p) => {
    const u = d || xe.useId(), x = `${u}-helper`, E = `${u}-error`, T = /* @__PURE__ */ f("div", { className: g("relative", !h && "inline-block"), children: [
      v && /* @__PURE__ */ r("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ r(G, { icon: v, className: "w-4 h-4" }) }),
      /* @__PURE__ */ r(
        "input",
        {
          id: u,
          type: "text",
          ref: p,
          className: g(
            mr({ variant: n ? "error" : t, size: a, rounded: s, fullWidth: h }),
            v && "pl-10",
            b && "pr-10",
            e
          ),
          "aria-describedby": n ? E : i ? x : void 0,
          "aria-invalid": n,
          "aria-required": c,
          ...w
        }
      ),
      b && /* @__PURE__ */ r("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ r(G, { icon: b, className: "w-4 h-4" }) })
    ] }), I = /* @__PURE__ */ f(ze, { children: [
      n && o && /* @__PURE__ */ r("p", { className: "mt-1 text-xs text-danger", id: E, children: o }),
      !n && i && /* @__PURE__ */ r("p", { className: "mt-1 text-xs text-neutral", id: x, children: i })
    ] });
    return m === "left" ? /* @__PURE__ */ r("div", { className: g(h ? "w-full" : "inline-block", e), children: /* @__PURE__ */ f("div", { className: "flex items-start gap-4", children: [
      l && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: u,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            l,
            c && /* @__PURE__ */ r("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ f("div", { className: g("flex-1", !h && "inline-block"), children: [
        T,
        I
      ] })
    ] }) }) : /* @__PURE__ */ f("div", { className: g(h ? "w-full" : "inline-block", e), children: [
      l && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: u,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            l,
            c && /* @__PURE__ */ r("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      T,
      I
    ] });
  }
);
dt.displayName = "Input";
const Le = xe.forwardRef(
  ({ className: e, children: t, selected: a, disabled: s, ...n }, o) => /* @__PURE__ */ r(
    "div",
    {
      ref: o,
      className: g(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
        "hover:bg-primary-50",
        a && "bg-primary-50 text-primary-900",
        s && "pointer-events-none opacity-50",
        e
      ),
      ...n,
      children: t
    }
  )
);
Le.displayName = "SelectItem";
const mt = typeof window < "u", ge = () => mt ? window : {
  innerHeight: 0,
  innerWidth: 0,
  addEventListener: () => {
  },
  removeEventListener: () => {
  }
}, le = () => mt ? document : {
  addEventListener: () => {
  },
  removeEventListener: () => {
  },
  dispatchEvent: () => {
  }
}, Pe = "autocomplete-dropdown-opened", ur = me(
  "fixed z-[9999] min-w-[8rem] rounded-md border border-neutral-200 bg-white py-1 shadow-lg",
  {
    variants: {
      position: {
        bottom: "top-full",
        top: "bottom-full"
      }
    },
    defaultVariants: {
      position: "bottom"
    }
  }
), gr = de(
  ({
    className: e,
    options: t,
    onSelect: a,
    isOpen: s,
    dropdownPosition: n = "bottom",
    loading: o = !1,
    renderOption: i,
    variant: l = "default",
    size: c = "md",
    rounded: m = "md",
    leftIcon: h,
    rightIcon: v,
    error: b = !1,
    errorText: d,
    helperText: w,
    label: p,
    required: u = !1,
    labelPlacement: x = "top",
    fullWidth: E = !1,
    value: T,
    onChange: I,
    onFocus: $,
    onBlur: B,
    showClear: R = !1,
    onClear: y,
    ...M
  }, A) => {
    const [O, z] = Y(!1), [C, L] = Y(T || ""), W = ne(null), N = ne(null), S = ne(null), k = s !== void 0, _ = `autocomplete-${xe.useId().replace(/:/g, "")}`, D = () => {
      if (!O || !N.current || !S.current) return;
      const { bottom: q, top: j, left: U, width: Z } = N.current.getBoundingClientRect(), te = S.current, oe = ge(), fe = {
        position: "fixed",
        left: `${U}px`,
        width: `${Z}px`
      }, re = n === "bottom" ? {
        ...fe,
        top: `${q + 4}px`,
        maxHeight: `${oe.innerHeight - q - 8}px`
      } : {
        ...fe,
        bottom: `${oe.innerHeight - j + 4}px`,
        maxHeight: `${j - 8}px`
      };
      Object.assign(te.style, re);
    };
    ce(() => {
      const q = ge(), j = le(), U = () => {
        O && D();
      }, Z = () => {
        O && D();
      }, te = (fe) => {
        fe.detail.id !== _ && z(!1);
      }, oe = (fe) => {
        const re = fe.target;
        W.current && !W.current.contains(re) && S.current && !S.current.contains(re) && z(!1);
      };
      return O && (D(), q.addEventListener("scroll", U, !0), q.addEventListener("resize", Z)), j.addEventListener(Pe, te), j.addEventListener("click", oe), () => {
        q.removeEventListener("scroll", U, !0), q.removeEventListener("resize", Z), j.removeEventListener(Pe, te), j.removeEventListener("click", oe);
      };
    }, [O, _]), ce(() => {
      L(T || "");
    }, [T]);
    const V = (q) => {
      const { value: j } = q.target;
      if (L(j), !j.trim()) {
        z(!1);
        return;
      }
      z(!0), I == null || I(q);
    }, se = (q) => {
      q.stopPropagation(), L(""), y == null || y();
      const j = new Event("change");
      j.target = { value: "" }, I == null || I(j);
    }, ee = (q) => {
      var te;
      if (!q) return;
      const { value: j, label: U } = q;
      L(U), z(!1), a == null || a(j);
      const Z = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: q }
      });
      (te = N.current) == null || te.dispatchEvent(Z);
    }, ie = (q) => {
      k || (le().dispatchEvent(
        new CustomEvent(Pe, {
          detail: { id: _ }
        })
      ), z(!0)), $ == null || $(q);
    }, ae = (q) => {
      B == null || B(q);
    }, F = t.filter(
      ({ label: q }) => q.toLowerCase().includes((C || "").toLowerCase().trim())
    ), J = k ? s : O, ye = R && C && !M.disabled && !M.readOnly, pe = ye ? "mdi:close" : v, Ee = () => {
      if (!J) return null;
      const q = le();
      if (!("body" in q)) return null;
      const j = /* @__PURE__ */ r(
        "div",
        {
          ref: S,
          className: g(
            ur({ position: n }),
            "overflow-auto"
          ),
          onClick: (U) => U.stopPropagation(),
          children: o ? /* @__PURE__ */ r("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ r("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }) }) : F.length > 0 ? F.map((U) => /* @__PURE__ */ r(
            Le,
            {
              value: U.value,
              selected: U.label === C,
              onClick: () => ee(U),
              children: i ? i(U) : U.label
            },
            U.value
          )) : /* @__PURE__ */ r("div", { className: "px-2 py-2 text-sm text-neutral", children: "No options found" })
        }
      );
      return Ne(j, q.body);
    };
    return /* @__PURE__ */ f("div", { ref: W, className: g("relative", E ? "w-full" : "inline-block"), children: [
      /* @__PURE__ */ r("div", { ref: N, className: g(!E && "inline-block"), children: /* @__PURE__ */ r(
        dt,
        {
          ref: A,
          value: C,
          onChange: V,
          onFocus: ie,
          onBlur: ae,
          variant: l,
          size: c,
          rounded: m,
          leftIcon: h,
          rightIcon: pe,
          error: b,
          errorText: d,
          helperText: w,
          label: p,
          required: u,
          labelPlacement: x,
          fullWidth: E,
          className: e,
          ...M,
          onClick: ye ? se : M.onClick
        }
      ) }),
      Ee()
    ] });
  }
);
gr.displayName = "AutoComplete";
const fr = {
  primary: {
    hover: "hover:bg-primary-50",
    active: "bg-primary-50",
    text: "text-primary-700"
  },
  secondary: {
    hover: "hover:bg-secondary-50",
    active: "bg-secondary-50",
    text: "text-secondary-700"
  },
  success: {
    hover: "hover:bg-success-50",
    active: "bg-success-50",
    text: "text-success-700"
  },
  warning: {
    hover: "hover:bg-warning-50",
    active: "bg-warning-50",
    text: "text-warning-700"
  },
  default: {
    hover: "hover:bg-gray-50",
    active: "bg-gray-50",
    text: "text-gray-700"
  },
  light: {
    hover: "hover:bg-light-50",
    active: "bg-light-50",
    text: "text-light-900"
  },
  dark: {
    hover: "hover:bg-dark-50",
    active: "bg-dark-50",
    text: "text-dark-50"
  },
  info: {
    hover: "hover:bg-info-50",
    active: "bg-info-50",
    text: "text-info-700"
  }
}, pr = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, br = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
}, Na = ({
  items: e,
  multiple: t = !1,
  defaultOpenIds: a = [],
  icon: s = "mdi:chevron-down",
  iconPosition: n = "right",
  className: o,
  contentClassName: i,
  variant: l = "primary",
  shadow: c = "none",
  rounded: m = "lg"
}) => {
  const [h, v] = Y(a), b = (w) => {
    v(
      t ? (p) => p.includes(w) ? p.filter((u) => u !== w) : [...p, w] : (p) => p.includes(w) ? [] : [w]
    );
  }, d = fr[l];
  return /* @__PURE__ */ r("div", { className: K("w-full space-y-2", o), children: e.map((w) => {
    const p = h.includes(w.id), u = !!w.disabled;
    return /* @__PURE__ */ f(
      "div",
      {
        className: K(
          "border overflow-hidden",
          "bg-white",
          "border-gray-200",
          pr[c],
          br[m],
          "transition-shadow duration-200"
        ),
        children: [
          /* @__PURE__ */ f(
            "button",
            {
              onClick: () => !u && b(w.id),
              disabled: u,
              className: K(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                d.hover,
                p && d.active,
                d.text,
                u && "opacity-50 cursor-not-allowed"
              ),
              children: [
                n === "left" && /* @__PURE__ */ r(
                  "div",
                  {
                    className: K(
                      "mr-3 transition-transform duration-200",
                      p && "rotate-180"
                    ),
                    children: /* @__PURE__ */ r(G, { icon: s, className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ r("div", { className: "flex-1", children: w.title }),
                n === "right" && /* @__PURE__ */ r(
                  "div",
                  {
                    className: K(
                      "ml-3 transition-transform duration-200",
                      p && "rotate-180"
                    ),
                    children: /* @__PURE__ */ r(G, { icon: s, className: "w-5 h-5" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ r(
            "div",
            {
              className: K(
                "grid transition-all duration-200 ease-in-out",
                p ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              ),
              children: /* @__PURE__ */ r("div", { className: "overflow-hidden", children: /* @__PURE__ */ r(
                "div",
                {
                  className: K(
                    "p-4 border-t border-gray-200",
                    i
                  ),
                  children: w.content
                }
              ) })
            }
          )
        ]
      },
      w.id
    );
  }) });
}, Ea = ({
  src: e,
  alt: t = "avatar",
  size: a = "medium",
  shape: s = "circle",
  className: n = ""
}) => {
  const o = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  }, i = {
    circle: "rounded-full",
    square: "rounded-lg"
  }, l = Me(
    "inline-flex items-center justify-center overflow-hidden bg-gray-200",
    o[a],
    i[s],
    n
  );
  return /* @__PURE__ */ r("div", { className: l, children: e ? /* @__PURE__ */ r("img", { src: e, alt: t, className: "w-full h-full object-cover" }) : /* @__PURE__ */ r(
    "svg",
    {
      className: "w-6 h-6 text-gray",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ r(
        "path",
        {
          d: "M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z",
          fill: "currentColor"
        }
      )
    }
  ) });
}, Sa = ({
  children: e,
  variant: t = "primary",
  size: a = "medium",
  rounded: s = "md",
  className: n = ""
}) => {
  const o = {
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800"
  }, i = {
    small: "px-2 py-0.5 text-xs",
    medium: "px-2.5 py-1 text-sm",
    large: "px-3 py-1.5 text-base"
  }, l = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full"
  }, c = Me(
    "inline-flex items-center font-medium",
    o[t],
    i[a],
    l[s],
    n
  );
  return /* @__PURE__ */ r("span", { className: c, children: e });
}, hr = me(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-600 active:bg-primary-700 shadow-sm hover:shadow-md active:shadow-none",
        secondary: "bg-secondary text-white hover:bg-secondary-600 active:bg-secondary-700 shadow-sm hover:shadow-md active:shadow-none",
        outline: "border border-neutral-300 text-primary hover:bg-primary-50 active:bg-primary-100 hover:border-primary",
        "outline-primary": "border border-primary-600 text-primary-600 hover:bg-primary-50",
        "outline-secondary": "border border-secondary-600 text-secondary-600 hover:bg-secondary-50",
        "outline-success": "border border-success-600 text-success-600 hover:bg-success-50",
        "outline-warning": "border border-warning-600 text-warning-600 hover:bg-warning-50",
        "outline-danger": "border border-danger-600 text-danger-600 hover:bg-danger-50",
        ghost: "text-primary hover:bg-primary-50 active:bg-primary-100",
        link: "text-primary hover:underline p-0",
        success: "bg-success text-white hover:bg-success-600 active:bg-success-700 shadow-sm hover:shadow-md active:shadow-none",
        warning: "bg-warning text-white hover:bg-warning-600 active:bg-warning-700 shadow-sm hover:shadow-md active:shadow-none",
        danger: "bg-danger text-white hover:bg-danger-600 active:bg-danger-700 shadow-sm hover:shadow-md active:shadow-none"
      },
      size: {
        xs: "text-xs px-2 py-1",
        sm: "text-sm px-3 py-1.5",
        md: "text-base px-4 py-2",
        lg: "text-lg px-5 py-2.5"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      },
      fullWidth: {
        true: "w-full"
      },
      isIconOnly: {
        true: "p-2 aspect-square"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "none",
      fullWidth: !1,
      isIconOnly: !1
    }
  }
), ue = de(
  ({
    className: e,
    variant: t = "primary",
    size: a = "md",
    rounded: s = "md",
    fullWidth: n = !1,
    isLoading: o = !1,
    leftIcon: i,
    rightIcon: l,
    isIconOnly: c = !1,
    children: m,
    ...h
  }, v) => {
    const d = c || !!(i || l) && !m;
    return /* @__PURE__ */ f(
      "button",
      {
        className: g(
          hr({
            variant: t,
            size: a,
            rounded: d ? "full" : s,
            fullWidth: n,
            isIconOnly: d,
            className: e
          })
        ),
        ref: v,
        disabled: h.disabled || o,
        ...h,
        children: [
          o && /* @__PURE__ */ r("span", { className: "animate-spin inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full" }),
          i && !o && /* @__PURE__ */ r(G, { icon: i, className: "w-4 h-4", inline: !0 }),
          m && /* @__PURE__ */ r("span", { children: m }),
          l && !o && /* @__PURE__ */ r(G, { icon: l, className: "w-4 h-4", inline: !0 })
        ]
      }
    );
  }
);
ue.displayName = "Button";
const xr = me(
  "border bg-card text-card-foreground",
  {
    variants: {
      variant: {
        default: "border-border shadow-sm",
        elevated: "border-border shadow-lg",
        outline: "border-border bg-transparent",
        ghost: "border-transparent bg-transparent"
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8"
      },
      shadow: {
        none: "",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
        xl: "shadow-xl"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
      shadow: "sm",
      rounded: "md"
    }
  }
), _e = de(
  ({
    className: e,
    variant: t = "default",
    padding: a = "md",
    shadow: s = "none",
    rounded: n = "md",
    asChild: o = !1,
    ...i
  }, l) => /* @__PURE__ */ r(
    "div",
    {
      className: g(xr({ variant: t, padding: a, shadow: s, rounded: n, className: e })),
      ref: l,
      ...i
    }
  )
);
_e.displayName = "Card";
const za = ({
  label: e,
  error: t,
  disabled: a = !1,
  indeterminate: s = !1,
  variantSize: n = "sm",
  variant: o = "square",
  color: i = "primary",
  className: l = "",
  ...c
}) => {
  const m = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }, h = {
    primary: "checked:bg-primary-600 checked:border-primary-600 hover:border-primary-600",
    secondary: "checked:bg-secondary-600 checked:border-secondary-600 hover:border-secondary-600",
    success: "checked:bg-success-600 checked:border-success-600 hover:border-success-600",
    warning: "checked:bg-warning-600 checked:border-warning-600 hover:border-warning-600",
    error: "checked:bg-danger-600 checked:border-danger-600 hover:border-danger-600"
  }, b = Me(
    "border-2 transition-colors duration-200",
    "appearance-none cursor-pointer",
    "checked:bg-no-repeat checked:bg-center",
    o === "circle" ? 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]' : 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM0w0LjUgOC41TDIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=")]',
    {
      square: "rounded",
      circle: "rounded-full"
    }[o],
    m[n],
    h[i],
    a && "opacity-50 cursor-not-allowed",
    l
  ), d = Me(
    "ml-2 text-sm font-medium",
    a && "opacity-50 cursor-not-allowed",
    t && "text-danger-600"
  );
  return /* @__PURE__ */ f("div", { className: "items-center", children: [
    /* @__PURE__ */ f("div", { className: "flex items-center", children: [
      /* @__PURE__ */ r(
        "input",
        {
          type: "checkbox",
          className: b,
          disabled: a,
          ref: (w) => {
            w && (w.indeterminate = s);
          },
          ...c
        }
      ),
      e && /* @__PURE__ */ r("label", { className: d, children: e })
    ] }),
    t && /* @__PURE__ */ r("p", { className: "mt-1 text-sm text-danger-600", children: t })
  ] });
}, yr = {
  solid: {
    primary: "bg-primary text-white",
    success: "bg-success text-white",
    warning: "bg-warning text-white",
    error: "bg-danger text-white",
    info: "bg-info text-white",
    danger: "bg-danger text-white",
    default: "bg-neutral text-white"
  },
  outline: {
    primary: "border border-primary text-primary",
    success: "border border-success text-success",
    warning: "border border-warning text-warning",
    error: "border border-error text-error",
    info: "border border-info text-info",
    danger: "border border-danger text-danger",
    default: "border border-neutral text-neutral"
  },
  subtle: {
    primary: "bg-primary-100 text-primary-700",
    success: "bg-success-100 text-success-700",
    warning: "bg-warning-100 text-warning-700",
    error: "bg-error-100 text-error-700",
    info: "bg-info-100 text-info-700",
    danger: "bg-danger-100 text-danger-700",
    default: "bg-neutral-100 text-neutral-700"
  },
  soft: {
    primary: "bg-primary-50 text-primary-600",
    success: "bg-success-50 text-success-600",
    warning: "bg-warning-50 text-warning-600",
    error: "bg-error-50 text-error-600",
    info: "bg-info-50 text-info-600",
    danger: "bg-danger-50 text-danger-600",
    default: "bg-neutral-50 text-neutral-600"
  }
}, vr = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5"
}, wr = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, Ma = ({
  children: e,
  variant: t = "solid",
  color: a = "primary",
  size: s = "md",
  rounded: n = "md",
  onClose: o,
  className: i,
  icon: l
}) => /* @__PURE__ */ f(
  "div",
  {
    className: g(
      "inline-flex items-center gap-1.5 font-medium",
      yr[t][a],
      vr[s],
      wr[n],
      i
    ),
    children: [
      l && /* @__PURE__ */ r("span", { className: "inline-flex items-center", children: /* @__PURE__ */ r(G, { icon: l, className: "w-4 h-4" }) }),
      e,
      o && /* @__PURE__ */ r(
        "button",
        {
          onClick: o,
          className: "ml-1 rounded-full hover:bg-black/10 p-0.5",
          "aria-label": "Close",
          children: /* @__PURE__ */ r(G, { icon: "mdi:close", className: "w-3 h-3" })
        }
      )
    ]
  }
);
var ut = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ft = { exports: {} };
(function(e, t) {
  (function(a, s) {
    e.exports = s();
  })(ut, function() {
    return function(a, s) {
      s.prototype.isSameOrAfter = function(n, o) {
        return this.isSame(n, o) || this.isAfter(n, o);
      };
    };
  });
})(ft);
var kr = ft.exports;
const Nr = /* @__PURE__ */ gt(kr);
var pt = { exports: {} };
(function(e, t) {
  (function(a, s) {
    e.exports = s();
  })(ut, function() {
    return function(a, s) {
      s.prototype.isSameOrBefore = function(n, o) {
        return this.isSame(n, o) || this.isBefore(n, o);
      };
    };
  });
})(pt);
var Er = pt.exports;
const Sr = /* @__PURE__ */ gt(Er);
X.extend(Nr);
X.extend(Sr);
const zr = me(
  "border bg-white px-3 py-2 ring-0 transition-colors placeholder:text-neutral placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50",
        error: "border-danger hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50",
        success: "border-success hover:border-success-600 focus:border-success-600 hover:bg-success-50",
        ghost: "border-transparent bg-transparent hover:bg-primary-50 focus:bg-primary-50",
        underline: "border-0 border-b-2 border-neutral-200 rounded-none bg-transparent hover:border-primary-300 focus:border-primary-300 hover:bg-transparent focus:bg-transparent"
      },
      size: {
        sm: "h-8 px-2 py-1 text-sm",
        md: "h-10 px-3 py-2 text-base",
        lg: "h-12 px-4 py-3 text-lg"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "md",
      fullWidth: !0
    }
  }
), He = de(
  ({
    value: e,
    onChange: t,
    minDate: a,
    maxDate: s,
    variant: n = "default",
    size: o = "md",
    rounded: i = "md",
    disabled: l = !1,
    errorText: c,
    helperText: m,
    label: h,
    required: v = !1,
    labelPlacement: b = "top",
    fullWidth: d = !1,
    className: w,
    placeholder: p = "Select date",
    leftIcon: u,
    rightIcon: x,
    monthsToShow: E = 1,
    valueFormatter: T,
    rangeStart: I,
    rangeEnd: $,
    closeOnSelect: B = !0,
    calendarFooter: R,
    ...y
  }, M) => {
    const [A, O] = Y(!1), [z, C] = Y(e), [L, W] = Y(e || /* @__PURE__ */ new Date()), [N, S] = Y(!1), k = ne(null), P = ne(null), _ = ne(null);
    ce(() => {
      C(e || void 0);
    }, [e]);
    const D = () => {
      if (!A || !P.current || !_.current) return;
      const { bottom: j, left: U, width: Z } = P.current.getBoundingClientRect(), te = _.current, oe = ge();
      E === 2 ? Object.assign(te.style, {
        position: "fixed",
        left: `${U}px`,
        top: `${j + 4}px`,
        minWidth: "500px",
        width: "auto",
        maxHeight: `${oe.innerHeight - j - 8}px`,
        transform: ""
      }) : Object.assign(te.style, {
        position: "fixed",
        left: `${U + Z / 2}px`,
        top: `${j + 4}px`,
        width: "320px",
        maxWidth: "100vw",
        maxHeight: `${oe.innerHeight - j - 8}px`,
        transform: "translateX(-50%)"
      });
    };
    ce(() => {
      const j = ge(), U = le(), Z = () => {
        A && D();
      }, te = () => {
        A && D();
      }, oe = (fe) => {
        fe.key === "Escape" && A && (O(!1), S(!1));
      };
      return A && (D(), j.addEventListener("scroll", Z, !0), j.addEventListener("resize", te), U.addEventListener("keydown", oe)), () => {
        j.removeEventListener("scroll", Z, !0), j.removeEventListener("resize", te), U.removeEventListener("keydown", oe);
      };
    }, [A]);
    const V = (j) => {
      if (I !== void 0 && $ !== void 0)
        if (I && $)
          C(j), t == null || t(j);
        else if (I) {
          const Z = j;
          X(Z).isBefore(I), C(Z), t == null || t(Z), O(!1), S(!1);
        } else
          C(j), t == null || t(j);
      else
        C(j), t == null || t(j), O(!1), S(!1);
    }, se = () => {
      W(X(L).subtract(1, "month").toDate());
    }, ee = () => {
      W(X(L).add(1, "month").toDate());
    }, ie = (j) => {
      const U = X(j).startOf("month"), Z = X(j).endOf("month"), te = [];
      let oe = U;
      for (; oe.isBefore(Z) || oe.isSame(Z, "day"); )
        te.push(oe.toDate()), oe = oe.add(1, "day");
      return te;
    }, ae = (j) => !!(a && X(j).isBefore(a, "day") || s && X(j).isAfter(s, "day")), F = () => z ? X(z).format("DD MMM YYYY") : "", J = (j) => {
      const U = X(L).year(j).toDate();
      W(U), S(!1);
    }, ye = () => {
      if (!N) return null;
      const j = X(L).year(), U = Array.from({ length: 50 }, (Z, te) => j - 25 + te);
      return /* @__PURE__ */ r("div", { className: "grid grid-cols-5 gap-2 p-2 overflow-y-auto max-h-[300px]", children: U.map((Z) => /* @__PURE__ */ r(
        "div",
        {
          onClick: () => J(Z),
          className: g(
            Z === j && "bg-primary-50 text-primary",
            "text-sm cursor-pointer p-2"
          ),
          children: Z
        },
        Z
      )) });
    }, pe = () => {
      if (!A) return null;
      const j = le();
      if (!("body" in j)) return null;
      const U = Array.from({ length: E }).map(
        (Z, te) => X(L).add(te, "month").toDate()
      );
      return Ne(
        /* @__PURE__ */ f(ze, { children: [
          /* @__PURE__ */ r(
            "div",
            {
              className: "fixed inset-0 z-[9998]",
              onClick: () => {
                N || O(!1);
              }
            }
          ),
          /* @__PURE__ */ f(
            "div",
            {
              ref: _,
              className: "fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-lg",
              onClick: (Z) => Z.stopPropagation(),
              children: [
                /* @__PURE__ */ f("div", { className: "flex items-center justify-between p-2 border-b border-gray-200", children: [
                  /* @__PURE__ */ r(
                    ue,
                    {
                      onClick: se,
                      variant: "ghost",
                      size: "sm",
                      leftIcon: "mdi:chevron-left"
                    }
                  ),
                  /* @__PURE__ */ r("div", { className: "relative", children: /* @__PURE__ */ r("span", { className: "font-medium text-gray-900", children: E === 1 ? /* @__PURE__ */ f("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ r("span", { children: X(L).format("MMMM") }),
                    /* @__PURE__ */ f(
                      "div",
                      {
                        className: "cursor-pointer flex items-center gap-1",
                        onClick: () => S(!N),
                        children: [
                          /* @__PURE__ */ r("span", { children: X(L).format("YYYY") }),
                          /* @__PURE__ */ r(ue, { variant: "ghost", size: "sm", leftIcon: N ? "mdi:chevron-up" : "mdi:chevron-down" })
                        ]
                      }
                    )
                  ] }) : `${X(L).format("MMMM YYYY")} - ${X(
                    L
                  ).add(E - 1, "month").format("MMMM YYYY")}` }) }),
                  /* @__PURE__ */ r(
                    ue,
                    {
                      onClick: ee,
                      variant: "ghost",
                      size: "sm",
                      rightIcon: "mdi:chevron-right"
                    }
                  )
                ] }),
                N ? ye() : /* @__PURE__ */ r(
                  "div",
                  {
                    className: g(
                      E === 2 ? "flex gap-5 p-2 mx-auto w-fit" : "justify-between p-2 mx-auto w-fit"
                    ),
                    children: U.map((Z, te) => {
                      const oe = ie(Z), fe = X(Z).startOf("month").day();
                      return /* @__PURE__ */ f("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ f("div", { className: "grid grid-cols-7 gap-y-1 my-1", children: [
                          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                            (re, ve) => /* @__PURE__ */ r(
                              "div",
                              {
                                className: g(
                                  "text-center text-xs font-medium text-neutral",
                                  (ve === 0 || ve === 6) && "text-danger"
                                ),
                                children: re
                              },
                              re
                            )
                          ),
                          Array.from({ length: fe }).map(
                            (re, ve) => /* @__PURE__ */ r("div", {}, `empty-${ve}`)
                          ),
                          oe.map((re) => {
                            const ve = z && X(re).isSame(z, "day"), Ie = ae(re), Et = X(re).isSame(
                              Z,
                              "month"
                            ), St = I && $ && X(re).isSameOrAfter(I, "day") && X(re).isSameOrBefore($, "day"), We = I && X(re).isSame(I, "day"), Ue = $ && X(re).isSame($, "day"), zt = X(re).day() === 0 || X(re).day() === 6, Ae = I && $;
                            return /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ r(
                              "div",
                              {
                                className: g(
                                  St && "rounded-none bg-primary-50",
                                  Ae && We && "rounded-l-full",
                                  Ae && Ue && "rounded-r-full"
                                ),
                                children: /* @__PURE__ */ r(
                                  "button",
                                  {
                                    onClick: () => !Ie && V(re),
                                    disabled: Ie,
                                    className: g(
                                      "p-2 text-sm transition-colors duration-200 w-10 h-10 rounded-full",
                                      zt && "!text-danger",
                                      ve && "bg-primary !text-white hover:bg-primary-600 active:bg-primary-700",
                                      ve && !Ae && "rounded-full",
                                      !ve && !Ie && "hover:bg-primary-50 active:bg-primary-100",
                                      !Et && "text-neutral-400",
                                      Ie && "opacity-50 cursor-not-allowed",
                                      // inRange && "bg-primary-50 text-primary-900 rounded-none",
                                      Ae && We && "!bg-primary !text-white !rounded-full",
                                      Ae && Ue && "!bg-primary !text-white !rounded-full"
                                    ),
                                    children: X(re).format("D")
                                  },
                                  re.toString()
                                )
                              }
                            ) });
                          })
                        ] }),
                        R
                      ] }, te);
                    })
                  }
                )
              ]
            }
          )
        ] }),
        j.body
      );
    }, Ee = /* @__PURE__ */ f(
      "div",
      {
        className: g("relative", !d && "inline-block"),
        ref: P,
        onClick: () => !l && O(!A),
        children: [
          u && /* @__PURE__ */ r("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ r(G, { icon: u, className: "w-4 h-4" }) }),
          /* @__PURE__ */ r(
            "input",
            {
              ref: M,
              type: "text",
              value: T ? T() : F(),
              placeholder: p,
              readOnly: !0,
              className: g(
                zr({ variant: n, size: o, rounded: i, fullWidth: d }),
                u && "pl-10",
                x && "pr-10",
                w
              ),
              disabled: l,
              ...y
            }
          ),
          x && /* @__PURE__ */ r("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ r(G, { icon: x, className: "w-4 h-4" }) })
        ]
      }
    ), q = /* @__PURE__ */ f(ze, { children: [
      c && /* @__PURE__ */ r("p", { className: "mt-1 text-xs text-danger", children: c }),
      !c && m && /* @__PURE__ */ r("p", { className: "mt-1 text-xs text-neutral", children: m })
    ] });
    return b === "left" ? /* @__PURE__ */ f(
      "div",
      {
        className: g(d ? "w-full" : "inline-block", w),
        ref: k,
        children: [
          /* @__PURE__ */ f("div", { className: "flex items-start gap-4", children: [
            h && /* @__PURE__ */ f("label", { className: "block text-sm text-neutral-900 pt-2", children: [
              h,
              v && /* @__PURE__ */ r("span", { className: "text-danger ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ f("div", { className: g("flex-1", !d && "inline-block"), children: [
              Ee,
              q
            ] })
          ] }),
          pe()
        ]
      }
    ) : /* @__PURE__ */ f(
      "div",
      {
        className: g(d ? "w-full" : "inline-block", w),
        ref: k,
        children: [
          h && /* @__PURE__ */ f("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
            h,
            v && /* @__PURE__ */ r("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          Ee,
          q,
          pe()
        ]
      }
    );
  }
);
He.displayName = "PrimitiveDatePicker";
const Mr = ({
  mode: e = "single",
  value: t,
  onChange: a,
  monthsToShow: s = 1,
  calendarFooter: n,
  ...o
}) => {
  const [i, l] = Y([
    void 0,
    void 0
  ]);
  if (e === "single") {
    const c = Array.isArray(t) ? t[0] : t;
    return /* @__PURE__ */ r(
      He,
      {
        value: c === null ? void 0 : c,
        onChange: (m) => a == null ? void 0 : a(m),
        monthsToShow: s,
        calendarFooter: n,
        ...o
      }
    );
  }
  if (e === "range") {
    let [c, m] = Array.isArray(t) ? t : i;
    const h = (b) => {
      !c || c && m ? (l([b, void 0]), a == null || a([b, void 0])) : c && !m && (b < c ? (l([b, c]), a == null || a([b, c])) : (l([c, b]), a == null || a([c, b])));
    }, v = () => {
      if (!c) return "";
      const b = (d) => d ? d.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }) : "";
      return c && m ? `${b(c)} - ${b(m)}` : b(c);
    };
    return /* @__PURE__ */ r(
      He,
      {
        value: c,
        onChange: h,
        monthsToShow: s,
        placeholder: o.placeholder || "Select date range",
        valueFormatter: v,
        rangeStart: c,
        rangeEnd: m,
        closeOnSelect: !!m,
        calendarFooter: n,
        ...o
      }
    );
  }
  return null;
};
Mr.displayName = "DatePicker";
const bt = de(
  ({ children: e, onClose: t, className: a, ...s }, n) => /* @__PURE__ */ f(
    "div",
    {
      ref: n,
      className: g("mb-4 flex items-center justify-between", a),
      ...s,
      children: [
        e,
        t && /* @__PURE__ */ r(
          "button",
          {
            onClick: t,
            className: "ml-4 rounded-full p-1 text-gray hover:bg-gray-100 hover:text-gray-700",
            "aria-label": "Close dialog",
            children: /* @__PURE__ */ r(G, { icon: "mdi:close", className: "h-5 w-5" })
          }
        )
      ]
    }
  )
), Cr = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-4xl",
  fullscreen: "w-full h-full max-w-none max-h-none rounded-none"
}, Ir = de(
  ({
    isOpen: e,
    onClose: t,
    children: a,
    className: s,
    backdrop: n = "dark",
    header: o,
    closeOnBackdropClick: i = !0,
    size: l = "md",
    ...c
  }, m) => {
    const [h, v] = Y(!1), [b, d] = Y(!1);
    if (ce(() => {
      if (e) {
        v(!0), d(!0);
        const x = le();
        "body" in x && (x.body.style.overflow = "hidden");
      } else {
        d(!1);
        const x = setTimeout(() => {
          v(!1);
          const E = le();
          "body" in E && (E.body.style.overflow = "");
        }, 300);
        return () => clearTimeout(x);
      }
    }, [e]), ce(() => {
      const x = (E) => {
        E instanceof KeyboardEvent && E.key === "Escape" && t();
      };
      return e && le().addEventListener("keydown", x), () => {
        le().removeEventListener("keydown", x);
      };
    }, [e, t]), !h) return null;
    const w = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, p = () => {
      i && t();
    }, u = le();
    return "body" in u ? Ne(
      /* @__PURE__ */ r(
        "div",
        {
          className: g(
            "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300",
            w[n],
            b ? "opacity-100" : "opacity-0",
            l === "fullscreen" && "items-start"
          ),
          onClick: p,
          children: /* @__PURE__ */ f(
            "div",
            {
              ref: m,
              className: g(
                "relative transform rounded-lg bg-white p-6 shadow-xl transition-all duration-300",
                Cr[l],
                b ? "scale-100 opacity-100" : "scale-95 opacity-0",
                s
              ),
              onClick: (x) => x.stopPropagation(),
              ...c,
              children: [
                o && /* @__PURE__ */ r(bt, { onClose: t, children: o }),
                a
              ]
            }
          )
        }
      ),
      u.body
    ) : null;
  }
), Ar = de(
  ({ children: e, className: t, ...a }, s) => /* @__PURE__ */ r(
    "h2",
    {
      ref: s,
      className: g("text-xl font-semibold text-gray-900", t),
      ...a,
      children: e
    }
  )
), Dr = de(
  ({ children: e, className: t, ...a }, s) => /* @__PURE__ */ r(
    "div",
    {
      ref: s,
      className: g("text-gray-600", t),
      ...a,
      children: e
    }
  )
), Rr = de(
  ({ children: e, className: t, ...a }, s) => /* @__PURE__ */ r(
    "div",
    {
      ref: s,
      className: g("mt-6 flex justify-end gap-3", t),
      ...a,
      children: e
    }
  )
);
Ir.displayName = "Dialog";
Ar.displayName = "DialogTitle";
Dr.displayName = "DialogBody";
Rr.displayName = "DialogActions";
bt.displayName = "DialogHeader";
const Lr = ({
  orientation: e = "horizontal",
  variant: t = "solid",
  color: a = "neutral",
  size: s = "sm",
  className: n = ""
}) => {
  const o = {
    horizontal: "w-full border-t-0 border-l-0 border-r-0 border-b",
    vertical: "h-full border-l border-t-0 border-r-0 border-b-0"
  }, i = {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted"
  }, l = {
    primary: "border-primary-300",
    secondary: "border-secondary-300",
    neutral: "border-neutral-300",
    success: "border-success-300",
    warning: "border-warning-300",
    error: "border-error-300"
  }, c = {
    sm: e === "horizontal" ? "border-b" : "border-l",
    md: e === "horizontal" ? "border-b-2" : "border-l-2",
    lg: e === "horizontal" ? "border-b-4" : "border-l-4"
  }, m = Me(
    "inline-block",
    o[e],
    i[t],
    l[a],
    c[s],
    n
  );
  return /* @__PURE__ */ r("div", { className: m });
}, jr = {
  primary: {
    border: "border-primary-200",
    hover: "hover:border-primary-300",
    active: "border-primary-400",
    text: "text-primary-700",
    bg: "bg-primary-50"
  },
  secondary: {
    border: "border-secondary-200",
    hover: "hover:border-secondary-300",
    active: "border-secondary-400",
    text: "text-secondary-700",
    bg: "bg-secondary-50"
  },
  success: {
    border: "border-success-200",
    hover: "hover:border-success-300",
    active: "border-success-400",
    text: "text-success-700",
    bg: "bg-success-50"
  },
  warning: {
    border: "border-warning-200",
    hover: "hover:border-warning-300",
    active: "border-warning-400",
    text: "text-warning-700",
    bg: "bg-warning-50"
  },
  default: {
    border: "border-gray-200",
    hover: "hover:border-gray-300",
    active: "border-gray-400",
    text: "text-gray-700",
    bg: "bg-gray-50"
  },
  light: {
    border: "border-light-200",
    hover: "hover:border-light-300",
    active: "border-light-400",
    text: "text-light-900",
    bg: "bg-light-50"
  },
  dark: {
    border: "border-dark-200",
    hover: "hover:border-dark-300",
    active: "border-dark-400",
    text: "text-dark-50",
    bg: "bg-dark-50"
  },
  info: {
    border: "border-info-200",
    hover: "hover:border-info-300",
    active: "border-info-400",
    text: "text-info-700",
    bg: "bg-info-50"
  }
}, $r = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, Qe = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
}, Ca = ({
  accept: e = ["*"],
  maxSize: t = 5 * 1024 * 1024,
  // 5MB default
  multiple: a = !1,
  value: s = [],
  onChange: n,
  className: o,
  disabled: i = !1,
  placeholder: l = "Drag and drop files here or click to browse",
  variant: c = "default",
  shadow: m = "none",
  rounded: h = "lg",
  children: v,
  showFileList: b = !0,
  showPlaceholder: d = !0,
  showMaxSize: w = !0,
  icon: p = "mdi:upload"
}) => {
  const [u, x] = Y(!1), [E, T] = Y(null), I = ne(null), $ = he((C) => {
    C.preventDefault(), i || x(!0);
  }, [i]), B = he((C) => {
    C.preventDefault(), x(!1);
  }, []), R = he((C) => C.size > t ? `File size exceeds ${t / (1024 * 1024)}MB limit` : e[0] !== "*" && !e.some((L) => L.startsWith(".") ? C.name.toLowerCase().endsWith(L.toLowerCase()) : C.type.startsWith(L)) ? `File type not allowed. Allowed types: ${e.join(", ")}` : null, [e, t]), y = he((C) => {
    if (C.preventDefault(), x(!1), T(null), i) return;
    const L = Array.from(C.dataTransfer.files), W = [], N = [];
    if (L.forEach((S) => {
      const k = R(S);
      k ? N.push(`${S.name}: ${k}`) : W.push(S);
    }), N.length > 0 && T(N.join(`
`)), W.length > 0) {
      const S = a ? [...s, ...W] : W;
      n == null || n(S);
    }
  }, [i, a, n, R, s]), M = he((C) => {
    if (T(null), i || !C.target.files) return;
    const L = Array.from(C.target.files), W = [], N = [];
    if (L.forEach((S) => {
      const k = R(S);
      k ? N.push(`${S.name}: ${k}`) : W.push(S);
    }), N.length > 0 && T(N.join(`
`)), W.length > 0) {
      const S = a ? [...s, ...W] : W;
      n == null || n(S);
    }
    I.current && (I.current.value = "");
  }, [i, a, n, R, s]), A = he((C) => {
    const L = [...s];
    L.splice(C, 1), n == null || n(L);
  }, [n, s]), O = (C) => C.type.startsWith("image/") ? /* @__PURE__ */ r(G, { icon: "mdi:image", className: "w-5 h-5" }) : C.type.startsWith("text/") ? /* @__PURE__ */ r(G, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ r(G, { icon: "mdi:file", className: "w-5 h-5" }), z = jr[c];
  return /* @__PURE__ */ f("div", { className: K("w-full", o), children: [
    /* @__PURE__ */ f(
      "div",
      {
        className: K(
          "p-6 text-center transition-colors",
          !v && [
            "border-2 border-dashed",
            z.border,
            z.bg,
            u && z.active,
            !i && z.hover
          ],
          i && "opacity-50 cursor-not-allowed",
          $r[m],
          Qe[h],
          !v && "cursor-pointer"
        ),
        onDragOver: $,
        onDragLeave: B,
        onDrop: y,
        onClick: () => {
          var C;
          return !i && !v && ((C = I.current) == null ? void 0 : C.click());
        },
        children: [
          /* @__PURE__ */ r(
            "input",
            {
              ref: I,
              type: "file",
              accept: e.join(","),
              multiple: a,
              onChange: M,
              className: "hidden",
              disabled: i
            }
          ),
          v ? /* @__PURE__ */ r("div", { onClick: () => {
            var C;
            return !i && ((C = I.current) == null ? void 0 : C.click());
          }, children: v }) : /* @__PURE__ */ f(ze, { children: [
            /* @__PURE__ */ r(G, { icon: p, className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
            d && /* @__PURE__ */ r("p", { className: K("text-neutral-600", z.text), children: l }),
            w && /* @__PURE__ */ f("p", { className: "text-sm text-neutral mt-2", children: [
              "Max file size: ",
              t / (1024 * 1024),
              "MB"
            ] })
          ] })
        ]
      }
    ),
    E && /* @__PURE__ */ r("p", { className: "mt-2 text-sm text-danger", children: E }),
    b && s.length > 0 && /* @__PURE__ */ r("div", { className: "mt-4 space-y-2", children: s.map((C, L) => /* @__PURE__ */ f(
      "div",
      {
        className: K(
          "flex items-center justify-between p-2",
          Qe[h],
          z.bg
        ),
        children: [
          /* @__PURE__ */ f("div", { className: "flex items-center space-x-2", children: [
            O(C),
            /* @__PURE__ */ r("span", { className: K("text-sm", z.text), children: C.name }),
            /* @__PURE__ */ f("span", { className: "text-xs text-neutral", children: [
              "(",
              (C.size / 1024).toFixed(1),
              " KB)"
            ] })
          ] }),
          !i && /* @__PURE__ */ r(
            "button",
            {
              onClick: () => A(L),
              className: "p-1 text-neutral hover:text-danger",
              children: /* @__PURE__ */ r(G, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${C.name}-${L}`
    )) })
  ] });
}, Pr = me(
  "flex items-start gap-3 p-4 shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-white border border-neutral-200",
        primary: "bg-primary-50 border border-primary-200",
        success: "bg-success-50 border border-success-200",
        warning: "bg-warning-50 border border-warning-200",
        danger: "bg-danger-50 border border-danger-200",
        info: "bg-info-50 border border-info-200"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      rounded: "md"
    }
  }
), Ia = ({
  title: e,
  children: t,
  icon: a,
  variant: s = "default",
  rounded: n = "md",
  showClose: o = !1,
  onClose: i,
  className: l
}) => {
  const c = () => {
    switch (s) {
      case "primary":
        return "text-primary-600";
      case "success":
        return "text-success-600";
      case "warning":
        return "text-warning-600";
      case "danger":
        return "text-danger-600";
      case "info":
        return "text-info-600";
      default:
        return "text-neutral-600";
    }
  }, m = () => {
    if (a) return a;
    switch (s) {
      case "primary":
        return "mdi:information";
      case "success":
        return "mdi:check-circle";
      case "warning":
        return "mdi:alert";
      case "danger":
        return "mdi:alert-circle";
      case "info":
        return "mdi:information";
      default:
        return "mdi:information";
    }
  };
  return /* @__PURE__ */ f("div", { className: g(Pr({ variant: s, rounded: n }), l), children: [
    a && /* @__PURE__ */ r(G, { icon: m(), className: g("h-5 w-5 flex-shrink-0", c()) }),
    /* @__PURE__ */ f("div", { className: "flex-1", children: [
      e && /* @__PURE__ */ r("h3", { className: "text-sm font-medium text-neutral-900", children: e }),
      /* @__PURE__ */ r("div", { className: "mt-1 text-sm text-neutral", children: t })
    ] }),
    o && /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        className: "ml-auto flex-shrink-0 text-neutral-400 hover:text-neutral",
        onClick: i,
        children: /* @__PURE__ */ r(G, { icon: "mdi:close", className: "h-5 w-5" })
      }
    )
  ] });
}, Te = "select-dropdown-opened", Tr = me(
  "rounded-md px-3 py-2 text-sm ring-0 transition-colors placeholder:text-neutral placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50 bg-white",
        error: "border border-danger hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50 bg-white",
        success: "border border-success hover:border-success-600 focus:border-success-600 bg-white",
        ghost: "border-0 hover:bg-neutral-100 focus:bg-neutral-100 bg-transparent",
        underline: "border-0 border-b-2 border-neutral-200 rounded-none bg-transparent hover:border-primary-300 focus:border-primary-300 hover:bg-transparent focus:bg-transparent"
      },
      size: {
        sm: "h-8 px-2 py-1 text-sm",
        md: "h-10 px-3 py-2 text-base",
        lg: "h-12 px-4 py-3 text-lg"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      fullWidth: !0
    }
  }
), ht = de(
  ({
    className: e,
    variant: t = "default",
    size: a = "md",
    rounded: s = "md",
    options: n,
    label: o,
    error: i = !1,
    helperText: l,
    required: c = !1,
    placeholder: m,
    value: h,
    onChange: v,
    disabled: b = !1,
    position: d = "bottom",
    fullWidth: w = !1,
    children: p,
    leftIcon: u,
    rightIcon: x,
    ...E
  }, T) => {
    const [I, $] = Y(!1), B = ne(null), R = ne(null), M = `select-${xe.useId().replace(/:/g, "")}`, A = () => {
      if (I && B.current && R.current) {
        const N = B.current.getBoundingClientRect(), S = R.current, k = ge(), P = k.innerHeight - N.bottom, _ = N.top, V = N.bottom + S.offsetHeight + 4 >= k.innerHeight, se = _ > P, ee = V && se;
        d === "bottom" || d === "top" ? (S.style.position = "fixed", S.style.left = `${N.left}px`, S.style.width = `${N.width}px`, d === "bottom" && ee ? (S.style.bottom = `${k.innerHeight - N.top + 4}px`, S.style.top = "auto", S.style.maxHeight = `${_ - 8}px`) : d === "bottom" ? (S.style.top = `${N.bottom + 4}px`, S.style.bottom = "auto", S.style.maxHeight = `${P - 8}px`) : d === "top" && !ee ? (S.style.top = `${N.bottom + 4}px`, S.style.bottom = "auto", S.style.maxHeight = `${P - 8}px`) : (S.style.bottom = `${k.innerHeight - N.top + 4}px`, S.style.top = "auto", S.style.maxHeight = `${_ - 8}px`)) : d === "left" ? (S.style.position = "fixed", S.style.right = `${k.innerWidth - N.left + 4}px`, S.style.top = `${N.top}px`, S.style.maxHeight = `${k.innerHeight - N.top - 8}px`) : d === "right" && (S.style.position = "fixed", S.style.left = `${N.right + 4}px`, S.style.top = `${N.top}px`, S.style.maxHeight = `${k.innerHeight - N.top - 8}px`);
      }
    };
    ce(() => {
      const N = ge(), S = () => {
        I && A();
      }, k = () => {
        I && A();
      };
      return I && (A(), N.addEventListener("scroll", S, !0), N.addEventListener("resize", k)), () => {
        N.removeEventListener("scroll", S, !0), N.removeEventListener("resize", k);
      };
    }, [I, d]), ce(() => {
      const N = le(), S = (P) => {
        P.detail.id !== M && $(!1);
      }, k = (P) => {
        const _ = P.target, D = B.current, V = R.current;
        D && V && !D.contains(_) && !V.contains(_) && $(!1);
      };
      return N.addEventListener(Te, S), N.addEventListener("click", k), () => {
        N.removeEventListener(Te, S), N.removeEventListener("click", k);
      };
    }, [M]);
    const O = () => {
      if (b) return;
      if (I) {
        $(!1);
        return;
      }
      le().dispatchEvent(
        new CustomEvent(Te, {
          detail: { id: M }
        })
      ), $(!0);
    }, z = () => {
      if (n) {
        const N = n.find((S) => S.value === h);
        return N == null ? void 0 : N.label;
      }
      if (p) {
        const S = Ke.toArray(p).find(
          (k) => je(k) && "value" in k.props && k.props.value === h
        );
        return je(S) ? S.props.children : null;
      }
      return null;
    }, C = (N) => {
      b || (v == null || v(N), $(!1));
    }, L = () => n ? n.map((N) => /* @__PURE__ */ r(
      Le,
      {
        value: N.value,
        disabled: N.disabled,
        selected: N.value === h,
        onClick: () => C(N.value),
        children: /* @__PURE__ */ f("div", { className: "flex items-center gap-2", children: [
          N.icon,
          N.label
        ] })
      },
      N.value
    )) : p ? Ke.map(p, (N) => je(N) && "value" in N.props ? Mt(N, {
      selected: N.props.value === h,
      onClick: () => C(N.props.value)
    }) : null) : null, W = () => {
      if (!I || b) return null;
      const N = /* @__PURE__ */ r(
        "div",
        {
          ref: R,
          className: g(
            "fixed z-[9999] min-w-[8rem] border border-neutral-200 bg-white py-1 shadow-lg",
            {
              "rounded-none": s === "none",
              "rounded-sm": s === "sm",
              "rounded-md": s === "md",
              "rounded-lg": s === "lg",
              "rounded-xl": s === "full"
            },
            d === "left" || d === "right" ? "w-max" : "w-full"
          ),
          onClick: (k) => k.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: L()
        }
      ), S = le();
      return "body" in S ? Ne(N, S.body) : null;
    };
    return /* @__PURE__ */ f("div", { className: g(w ? "w-full" : "inline-block"), ref: T, ...E, children: [
      o && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: M,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            o,
            c && /* @__PURE__ */ r("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ f(
        "div",
        {
          className: g("relative", !w && "inline-block"),
          onClick: O,
          children: [
            /* @__PURE__ */ f(
              "button",
              {
                id: M,
                ref: B,
                type: "button",
                className: g(
                  Tr({ variant: i ? "error" : t, size: a, rounded: s, fullWidth: w }),
                  "flex items-center justify-between",
                  b && "cursor-not-allowed opacity-50",
                  u && "pl-10",
                  x && "pr-10",
                  e
                ),
                "aria-haspopup": "listbox",
                "aria-expanded": I,
                "aria-describedby": i ? `${M}-error` : l ? `${M}-helper` : void 0,
                disabled: b,
                children: [
                  u && /* @__PURE__ */ r("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ r(G, { icon: u, className: "w-4 h-4" }) }),
                  /* @__PURE__ */ r("span", { className: "flex items-center text-neutral gap-2 min-w-0 flex-1", children: /* @__PURE__ */ r("span", { className: "truncate", children: z() || m }) }),
                  x ? /* @__PURE__ */ r("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ r(G, { icon: x, className: "w-4 h-4" }) }) : /* @__PURE__ */ r(
                    G,
                    {
                      icon: "mdi:chevron-down",
                      className: g("transition-transform flex-shrink-0 ml-2", I && "rotate-180")
                    }
                  )
                ]
              }
            ),
            W()
          ]
        }
      ),
      i && /* @__PURE__ */ r("p", { className: "mt-1 text-xs text-danger", id: `${M}-error`, children: i }),
      !i && l && /* @__PURE__ */ r("p", { className: "mt-1 text-xs text-neutral", id: `${M}-helper`, children: l })
    ] });
  }
);
ht.displayName = "Select";
const Br = ({
  currentPage: e,
  totalPages: t,
  totalData: a,
  onPageChange: s,
  siblingCount: n = 1,
  className: o,
  perPageOptions: i,
  perPage: l = 10,
  label: c = "",
  onPerPageChange: m
}) => {
  const h = (d, w) => {
    const p = w - d + 1;
    return Array.from({ length: p }, (u, x) => x + d);
  }, b = (() => {
    const d = n * 2 + 3, w = d + 2;
    if (t > w) {
      const p = Math.max(2, e - n), u = Math.min(t - 1, e + n);
      let x = h(p, u);
      const E = p > 2, T = t - u > 1, I = d - (x.length + 1);
      if (E && !T)
        x = [...h(p - I, p - 1), ...x];
      else if (!E && T) {
        const $ = h(u + 1, u + I);
        x = [...x, ...$];
      } else E && T && (x = [...x]);
      return [1, ...x, t];
    }
    return h(1, t);
  })();
  return /* @__PURE__ */ f(
    "nav",
    {
      className: K("flex items-center justify-between space-x-1", o),
      children: [
        /* @__PURE__ */ f("div", { className: "hidden sm:block text-sm text-neutral-700", children: [
          /* @__PURE__ */ r("b", { children: `${e} - ${t}` }),
          " dari ",
          a,
          " ",
          c
        ] }),
        /* @__PURE__ */ f("div", { className: "flex items-center gap-2", children: [
          i && i.length > 0 && /* @__PURE__ */ f("div", { className: "flex items-center gap-2 mr-4", children: [
            /* @__PURE__ */ r("span", { className: "text-neutral-700 text-sm", children: "Menampilkan" }),
            /* @__PURE__ */ r(
              ht,
              {
                value: l == null ? void 0 : l.toString(),
                onChange: (d) => m && m(Number(d)),
                size: "sm",
                className: "w-16",
                fullWidth: !1,
                "aria-label": "Items per page",
                children: i.map((d) => /* @__PURE__ */ r(Le, { value: d.toString(), children: d }, d))
              }
            ),
            /* @__PURE__ */ r("span", { className: "text-neutral-700 text-sm", children: "data per halaman" })
          ] }),
          /* @__PURE__ */ r(
            ue,
            {
              variant: "ghost",
              onClick: () => s(e - 1),
              disabled: e === 1,
              className: K(
                "px-3 py-1 rounded-md text-sm",
                e === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              ),
              children: /* @__PURE__ */ r(G, { size: "18", icon: "mdi:chevron-left" })
            }
          ),
          b.map((d, w) => {
            const p = d === e, u = typeof d == "string" && d === "...";
            return /* @__PURE__ */ r(
              ue,
              {
                variant: "ghost",
                onClick: () => !u && s(d),
                className: K(
                  "px-3 py-1 rounded-md text-sm",
                  p ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  u && "cursor-default"
                ),
                children: d
              },
              w
            );
          }),
          /* @__PURE__ */ r(
            ue,
            {
              variant: "ghost",
              onClick: () => s(e + 1),
              disabled: e === t,
              className: K(
                "px-3 py-1 rounded-md text-sm",
                e === t ? "text-gray-400 cursor-not-allowed" : "text-gray-700"
              ),
              children: /* @__PURE__ */ r(G, { size: "18", icon: "mdi:chevron-right" })
            }
          )
        ] })
      ]
    }
  );
}, Aa = ({
  label: e,
  checked: t = !1,
  disabled: a = !1,
  onChange: s,
  name: n,
  value: o
}) => {
  const i = (l) => {
    s && s(l.target.checked);
  };
  return /* @__PURE__ */ f(
    "label",
    {
      className: K(
        "inline-flex items-center cursor-pointer",
        a && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ r(
          "input",
          {
            type: "radio",
            className: K(
              "w-5 h-5 border-2 rounded-full appearance-none",
              "focus:outline-none focus:ring-2 focus:ring-primary/25",
              t ? "border-primary bg-primary" : "border-gray-300 hover:border-primary",
              a && "cursor-not-allowed"
            ),
            checked: t,
            disabled: a,
            onChange: i,
            name: n,
            value: o
          }
        ),
        e && /* @__PURE__ */ r("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-300", children: e })
      ]
    }
  );
}, Vr = me(
  "animate-pulse bg-neutral-200",
  {
    variants: {
      variant: {
        default: "bg-neutral-200",
        primary: "bg-primary-200",
        success: "bg-success-200",
        warning: "bg-warning-200",
        danger: "bg-danger-200",
        info: "bg-info-200"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit"
      }
    },
    defaultVariants: {
      variant: "default",
      rounded: "md",
      fullWidth: !1
    }
  }
), Or = ({
  width: e,
  height: t,
  variant: a = "default",
  rounded: s = "md",
  fullWidth: n = !1,
  className: o
}) => /* @__PURE__ */ r(
  "div",
  {
    className: g(Vr({ variant: a, rounded: s, fullWidth: n }), o),
    style: {
      width: !n && typeof e == "number" ? `${e}px` : e,
      height: typeof t == "number" ? `${t}px` : t
    }
  }
), Da = ({
  min: e = 0,
  max: t = 100,
  step: a = 1,
  value: s,
  defaultValue: n = e,
  onChange: o,
  className: i,
  disabled: l = !1,
  showValue: c = !1,
  marks: m = []
}) => {
  const [h, v] = Y(n), [b, d] = Y(!1), w = ne(null), p = s !== void 0 ? s : h, u = (B) => {
    if (l) return;
    const R = Math.min(Math.max(B, e), t);
    s === void 0 && v(R), o == null || o(R);
  }, x = (B) => {
    l || (d(!0), I(B));
  }, E = (B) => {
    !b || l || I(B);
  }, T = () => {
    d(!1);
  }, I = (B) => {
    if (!w.current) return;
    const R = w.current.getBoundingClientRect(), M = (B.clientX - R.left) / R.width, A = e + (t - e) * M, O = Math.round(A / a) * a;
    u(O);
  };
  ce(() => {
    if (b) {
      const B = ge();
      B.addEventListener("mousemove", E), B.addEventListener("mouseup", T);
    }
    return () => {
      const B = ge();
      B.removeEventListener("mousemove", E), B.removeEventListener("mouseup", T);
    };
  }, [b]);
  const $ = (p - e) / (t - e) * 100;
  return /* @__PURE__ */ f("div", { className: K("relative w-full", i), children: [
    /* @__PURE__ */ f(
      "div",
      {
        ref: w,
        className: K(
          "relative h-2 bg-gray-200 rounded-full cursor-pointer",
          l && "opacity-50 cursor-not-allowed"
        ),
        onMouseDown: x,
        children: [
          /* @__PURE__ */ r(
            "div",
            {
              className: "absolute h-full bg-primary rounded-full",
              style: { width: `${$}%` }
            }
          ),
          /* @__PURE__ */ r(
            "div",
            {
              className: K(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                l && "cursor-not-allowed"
              ),
              style: { left: `${$}%`, transform: "translate(-50%, -50%)" }
            }
          )
        ]
      }
    ),
    m.length > 0 && /* @__PURE__ */ r("div", { className: "flex justify-between mt-2", children: m.map((B) => /* @__PURE__ */ r(
      "div",
      {
        className: "text-xs text-gray",
        style: { left: `${(B.value - e) / (t - e) * 100}%` },
        children: B.label
      },
      B.value
    )) }),
    c && /* @__PURE__ */ r("div", { className: "mt-2 text-sm text-gray-600", children: p })
  ] });
}, Hr = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}, Gr = {
  primary: "text-primary",
  warning: "text-warning",
  default: "text-default-400"
}, Ra = ({
  rating: e,
  maxRating: t = 5,
  size: a = "md",
  color: s = "primary",
  readOnly: n = !1,
  onRatingChange: o,
  className: i
}) => {
  const [l, c] = Y(null), m = (d) => {
    n || c(d);
  }, h = () => {
    n || c(null);
  }, v = (d) => {
    !n && o && o(d);
  }, b = l !== null ? l : e;
  return /* @__PURE__ */ r("div", { className: g("flex items-center gap-1", i), children: [...Array(t)].map((d, w) => {
    const p = w + 1, u = p <= b, x = l !== null && p <= l;
    return /* @__PURE__ */ r(
      "button",
      {
        className: g(
          "transition-colors duration-200",
          Hr[a],
          u || x ? Gr[s] : "text-default-200",
          !n && "cursor-pointer"
        ),
        onMouseEnter: () => m(p),
        onMouseLeave: h,
        onClick: () => v(p),
        disabled: n,
        "aria-label": `Rate ${p} out of ${t}`,
        children: /* @__PURE__ */ r(
          G,
          {
            icon: u || x ? "mdi:star" : "mdi:star-outline",
            className: "w-full h-full"
          }
        )
      },
      w
    );
  }) });
}, Fr = {
  active: {
    bgColor: "bg-success",
    label: "Active"
  },
  inactive: {
    bgColor: "bg-default",
    label: "Inactive"
  },
  pending: {
    bgColor: "bg-warning",
    label: "Pending"
  },
  warning: {
    bgColor: "bg-warning",
    label: "Warning"
  },
  error: {
    bgColor: "bg-danger",
    label: "Error"
  }
}, _r = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4"
}, La = ({
  status: e,
  size: t = "md",
  withLabel: a = !1,
  className: s
}) => {
  const { bgColor: n, label: o } = Fr[e], i = _r[t];
  return /* @__PURE__ */ f("div", { className: g("flex items-center gap-2", s), children: [
    /* @__PURE__ */ r("div", { className: g("rounded-full animate-pulse", n, i) }),
    a && /* @__PURE__ */ r("span", { className: "text-sm", children: o })
  ] });
}, xt = (e, t) => {
  if (t) return t;
  switch (e) {
    case "completed":
      return "mdi:check";
    case "active":
      return "mdi:circle-medium";
    default:
      return "mdi:circle-outline";
  }
}, yt = (e) => {
  switch (e) {
    case "completed":
      return "text-white bg-primary ring-4 ring-primary-50";
    case "active":
      return "text-primary bg-primary-50 ring-4 ring-primary-50";
    default:
      return "text-neutral bg-neutral-50 ring-4 ring-neutral-50";
  }
}, Wr = ({
  steps: e,
  activeStep: t,
  className: a,
  variant: s = "default"
}) => /* @__PURE__ */ r("div", { className: g("flex flex-row items-center w-full justify-between", a), children: e.map((n, o) => {
  const i = o < t ? "completed" : o === t ? "active" : "pending";
  return /* @__PURE__ */ f(
    "div",
    {
      className: "flex items-center flex-1",
      children: [
        /* @__PURE__ */ f("div", { className: g(
          "flex flex-col items-center z-10",
          s === "default" ? "gap-4" : "gap-2",
          s === "default" ? "px-5" : "px-3"
        ), children: [
          s === "default" && /* @__PURE__ */ r(
            "div",
            {
              className: g(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                yt(i)
              ),
              children: /* @__PURE__ */ r(
                G,
                {
                  icon: xt(i, n.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ f("div", { className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ r(
              "span",
              {
                className: g(
                  "text-sm font-medium",
                  i === "active" ? "text-primary" : i === "completed" ? "text-neutral-900" : "text-neutral"
                ),
                children: n.label
              }
            ),
            n.description && /* @__PURE__ */ r("span", { className: "text-xs text-neutral", children: n.description })
          ] })
        ] }),
        o < e.length - 1 && /* @__PURE__ */ r(
          Lr,
          {
            className: g(
              "transition-all duration-200",
              o < t ? "bg-primary" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    o
  );
}) }), Ur = ({
  steps: e,
  activeStep: t,
  className: a,
  variant: s = "default"
}) => /* @__PURE__ */ r("div", { className: g("flex flex-col items-start gap-8", a), children: e.map((n, o) => {
  const i = o < t ? "completed" : o === t ? "active" : "pending";
  return /* @__PURE__ */ f(
    "div",
    {
      className: "flex flex-row w-full items-center relative",
      children: [
        /* @__PURE__ */ f("div", { className: g(
          "flex flex-row items-center z-10",
          s === "default" ? "gap-4" : "gap-2"
        ), children: [
          s === "default" && /* @__PURE__ */ r(
            "div",
            {
              className: g(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                yt(i)
              ),
              children: /* @__PURE__ */ r(
                G,
                {
                  icon: xt(i, n.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ f("div", { className: "flex flex-col items-start", children: [
            /* @__PURE__ */ r(
              "span",
              {
                className: g(
                  "text-sm font-medium",
                  i === "active" ? "text-primary00" : i === "completed" ? "text-neutral-900" : "text-neutral"
                ),
                children: n.label
              }
            ),
            n.description && /* @__PURE__ */ r("span", { className: "text-xs text-neutral", children: n.description })
          ] })
        ] }),
        o < e.length - 1 && /* @__PURE__ */ r(
          "div",
          {
            className: g(
              "absolute transition-all duration-200",
              s === "default" ? "left-4 w-[1px] top-10 bottom-[-24px]" : "left-0 w-[1px] top-6 bottom-[-24px]",
              o < t ? "bg-primary" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    o
  );
}) }), ja = ({
  orientation: e = "horizontal",
  variant: t = "default",
  ...a
}) => e === "vertical" ? /* @__PURE__ */ r(Ur, { variant: t, ...a }) : /* @__PURE__ */ r(Wr, { variant: t, ...a }), $a = ({
  label: e,
  checked: t = !1,
  disabled: a = !1,
  onChange: s,
  size: n = "md"
}) => {
  const o = (c) => {
    s && s(c.target.checked);
  }, i = {
    sm: "w-8 h-4",
    md: "w-11 h-6",
    lg: "w-14 h-7"
  }, l = {
    sm: "w-3 h-3",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  return /* @__PURE__ */ f(
    "label",
    {
      className: K(
        "inline-flex items-center cursor-pointer",
        a && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ f("div", { className: "relative", children: [
          /* @__PURE__ */ r(
            "input",
            {
              type: "checkbox",
              className: "sr-only",
              checked: t,
              disabled: a,
              onChange: o
            }
          ),
          /* @__PURE__ */ r(
            "div",
            {
              className: K(
                "block rounded-full transition-colors duration-200 ease-in-out",
                i[n],
                t ? "bg-primary" : "bg-gray-200 dark:bg-gray-700",
                a && "cursor-not-allowed"
              )
            }
          ),
          /* @__PURE__ */ r(
            "div",
            {
              className: K(
                "absolute rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out",
                l[n],
                t ? n === "sm" ? "translate-x-4" : n === "md" ? "translate-x-5" : "translate-x-7" : "translate-x-0.5",
                "top-1/2 -translate-y-1/2"
              )
            }
          )
        ] }),
        e && /* @__PURE__ */ r("span", { className: "ml-3 text-sm text-gray-700 dark:text-gray-300", children: e })
      ]
    }
  );
}, Pa = ({
  items: e,
  defaultActiveId: t,
  variant: a = "default",
  size: s = "md",
  className: n,
  tabListClassName: o,
  tabClassName: i,
  contentClassName: l,
  onChange: c
}) => {
  var w, p;
  const [m, h] = Y(t || ((w = e[0]) == null ? void 0 : w.id) || ""), v = he((u) => {
    h(u), c == null || c(u);
  }, [c]), b = () => {
    switch (s) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  }, d = (u, x) => {
    const E = K(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      b(),
      x && "opacity-50 cursor-not-allowed",
      !x && "cursor-pointer"
    );
    switch (a) {
      case "pills":
        return K(
          E,
          "rounded-full",
          u ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return K(
          E,
          "border-b-2",
          u ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      default:
        return K(
          E,
          "border-b-2",
          u ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
    }
  };
  return /* @__PURE__ */ f("div", { className: K("w-full", n), children: [
    /* @__PURE__ */ r(
      "div",
      {
        className: K(
          "flex space-x-1 border-b border-gray-200 dark:border-gray-700",
          a === "pills" && "space-x-2 border-b-0",
          o
        ),
        children: e.map((u) => {
          const x = u.id === m, E = !!u.disabled;
          return /* @__PURE__ */ f(
            "button",
            {
              onClick: () => !E && v(u.id),
              disabled: E,
              className: K(
                d(x, E),
                i
              ),
              children: [
                u.icon && /* @__PURE__ */ r(
                  G,
                  {
                    icon: u.icon,
                    className: "w-5 h-5 flex-shrink-0"
                  }
                ),
                /* @__PURE__ */ r("span", { children: u.label })
              ]
            },
            u.id
          );
        })
      }
    ),
    /* @__PURE__ */ r("div", { className: K("mt-4", l), children: (p = e.find((u) => u.id === m)) == null ? void 0 : p.content })
  ] });
}, Kr = ({
  variant: e = "p",
  children: t,
  className: a,
  as: s
}) => {
  const n = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-bold",
    h3: "text-2xl font-bold",
    h4: "text-xl font-bold",
    h5: "text-lg font-bold",
    h6: "text-base font-bold",
    p: "text-base",
    span: "text-base",
    label: "text-sm font-medium",
    heading3: "text-2xl font-bold",
    body1: "text-base",
    display1: "text-5xl font-bold",
    display2: "text-4xl font-bold",
    heading1: "text-4xl font-bold",
    heading2: "text-3xl font-bold",
    heading4: "text-xl font-bold",
    subtitle1: "text-lg font-medium",
    subtitle2: "text-base font-medium",
    body2: "text-sm",
    caption: "text-xs",
    value: "text-base font-medium"
  }, i = s || ((l) => {
    switch (l) {
      case "display1":
      case "display2":
      case "heading1":
      case "heading2":
      case "heading3":
      case "heading4":
        return "h" + l.slice(-1);
      case "body1":
      case "body2":
      case "subtitle1":
      case "subtitle2":
        return "p";
      case "caption":
      case "value":
        return "span";
      default:
        return l;
    }
  })(e);
  return /* @__PURE__ */ r(i, { className: g("text-gray-900", n[e], a), children: t });
}, Be = "timepicker-dropdown-opened", Yr = me(
  "border bg-white px-3 py-2 ring-0 transition-colors placeholder:text-neutral placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50",
        error: "border-danger hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50",
        success: "border-success hover:border-success-600 focus:border-success-600 hover:bg-success-50",
        ghost: "border-transparent bg-transparent hover:bg-primary-50 focus:bg-primary-50",
        underline: "border-0 border-b-2 border-neutral-200 rounded-none bg-transparent hover:border-primary-300 focus:border-primary-300 hover:bg-transparent focus:bg-transparent"
      },
      size: {
        sm: "h-8 px-2 py-1 text-sm",
        md: "h-10 px-3 py-2 text-base",
        lg: "h-12 px-4 py-3 text-lg"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "md",
      fullWidth: !0
    }
  }
), vt = de(
  ({
    value: e,
    onChange: t,
    use24Hour: a = !1,
    variant: s = "default",
    size: n = "md",
    rounded: o = "md",
    disabled: i = !1,
    errorText: l,
    helperText: c,
    label: m,
    required: h = !1,
    labelPlacement: v = "top",
    fullWidth: b = !1,
    className: d,
    placeholder: w = "Select time",
    leftIcon: p,
    rightIcon: u,
    valueFormatter: x,
    closeOnSelect: E = !0,
    ...T
  }, I) => {
    const [$, B] = Y(!1), [R, y] = Y(e || ""), [M, A] = Y(0), [O, z] = Y(0), [C, L] = Y(!0), W = ne(null), N = ne(null), S = ne(null), P = `timepicker-${xe.useId().replace(/:/g, "")}`, _ = () => {
      if (!$ || !N.current || !S.current) return;
      const F = N.current.getBoundingClientRect(), J = S.current, pe = ge().innerHeight - F.bottom;
      J.style.top = `${F.bottom + 4}px`, J.style.bottom = "auto", J.style.left = `${F.left}px`, J.style.maxHeight = `${pe - 8}px`, J.style.width = `${F.width}px`;
    };
    ce(() => {
      const F = ge(), J = le(), ye = () => {
        $ && _();
      }, pe = () => {
        $ && _();
      }, Ee = (j) => {
        j.detail.id !== P && B(!1);
      }, q = (j) => {
        const U = j.target;
        W.current && S.current && !W.current.contains(U) && !S.current.contains(U) && B(!1);
      };
      return $ && (_(), F.addEventListener("scroll", ye, !0), F.addEventListener("resize", pe)), J.addEventListener(Be, Ee), J.addEventListener("mousedown", q), () => {
        F.removeEventListener("scroll", ye, !0), F.removeEventListener("resize", pe), J.removeEventListener(Be, Ee), J.removeEventListener("mousedown", q);
      };
    }, [$, P]);
    const D = () => {
      i || ($ || le().dispatchEvent(
        new CustomEvent(Be, {
          detail: { id: P }
        })
      ), B(!$));
    };
    ce(() => {
      if (e) {
        y(e);
        const [F, J] = e.split(":").map(Number);
        a ? A(F) : (A(F % 12 || 12), L(F < 12)), z(J);
      }
    }, [e, a]);
    const V = () => {
      const J = `${(a || C ? M : M + 12).toString().padStart(2, "0")}:${O.toString().padStart(2, "0")}`;
      y(J), t == null || t(J), E && B(!1);
    }, se = () => a ? Array.from({ length: 24 }, (F, J) => J) : Array.from({ length: 12 }, (F, J) => J + 1), ee = () => Array.from({ length: 60 }, (F, J) => J), ie = x ? x(R) : R, ae = le();
    return "body" in ae ? /* @__PURE__ */ f("div", { ref: W, className: g("relative", b && "w-full", d), children: [
      m && /* @__PURE__ */ f(
        "label",
        {
          className: g(
            "block text-sm font-medium text-gray-700 mb-1",
            v === "left" && "inline-block mr-2"
          ),
          children: [
            m,
            h && /* @__PURE__ */ r("span", { className: "text-red ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ f(
        "div",
        {
          ref: N,
          className: "relative",
          onClick: D,
          children: [
            p && /* @__PURE__ */ r("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ r(G, { icon: p, size: 20 }) }),
            /* @__PURE__ */ r(
              "input",
              {
                ref: I,
                type: "text",
                value: ie,
                placeholder: w,
                readOnly: !0,
                className: g(
                  Yr({ variant: s, size: n, rounded: o, fullWidth: b }),
                  p && "pl-10",
                  u && "pr-10",
                  "text-left"
                ),
                disabled: i,
                ...T
              }
            ),
            u && /* @__PURE__ */ r("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ r(G, { icon: u, size: 20 }) })
          ]
        }
      ),
      $ && Ne(
        /* @__PURE__ */ r(
          "div",
          {
            ref: S,
            className: "fixed z-[9999] w-fit rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (F) => F.stopPropagation(),
            children: /* @__PURE__ */ f("div", { className: "p-0", children: [
              /* @__PURE__ */ f(_e, { variant: "ghost", className: g(
                "flex mx-2 my-1 p-0",
                a ? "justify-start gap-8" : "justify-start gap-4"
              ), children: [
                /* @__PURE__ */ r("div", { className: "flex flex-col", children: /* @__PURE__ */ r("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-2", children: se().map((F) => /* @__PURE__ */ r(
                  ue,
                  {
                    variant: "ghost",
                    onClick: () => A(F),
                    className: g(M === F && "bg-primary text-white"),
                    children: F.toString().padStart(2, "0")
                  },
                  F
                )) }) }) }),
                /* @__PURE__ */ r("div", { className: "flex flex-col", children: /* @__PURE__ */ r("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-2", children: ee().map((F) => /* @__PURE__ */ r(
                  ue,
                  {
                    variant: "ghost",
                    onClick: () => z(F),
                    className: g(O === F && "bg-primary text-white"),
                    children: F.toString().padStart(2, "0")
                  },
                  F
                )) }) }) }),
                !a && /* @__PURE__ */ f("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ r(
                    ue,
                    {
                      variant: "ghost",
                      onClick: () => L(!0),
                      className: g(C && "bg-primary text-white"),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ r(
                    ue,
                    {
                      variant: "ghost",
                      onClick: () => L(!1),
                      className: g(!C && "bg-primary text-white"),
                      children: "PM"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ r("div", { className: "mb-2 mx-2", children: /* @__PURE__ */ r(
                ue,
                {
                  variant: "primary",
                  onClick: V,
                  size: "sm",
                  fullWidth: !0,
                  children: "Select"
                }
              ) })
            ] })
          }
        ),
        ae.body
      ),
      l && /* @__PURE__ */ r("p", { className: "mt-1 text-sm text-danger-600", children: l }),
      c && /* @__PURE__ */ r("p", { className: "mt-1 text-sm text-gray", children: c })
    ] }) : null;
  }
);
vt.displayName = "PrimitiveTimePicker";
const Zr = ({
  value: e,
  onChange: t,
  valueFormatter: a,
  closeOnSelect: s,
  ...n
}) => /* @__PURE__ */ r(
  vt,
  {
    value: e,
    onChange: t,
    valueFormatter: a,
    closeOnSelect: s,
    ...n
  }
);
Zr.displayName = "TimePicker";
const qr = me(
  "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-neutral-200 data-[state=checked]:bg-primary focus-visible:ring-primary",
        success: "bg-neutral-200 data-[state=checked]:bg-success focus-visible:ring-success",
        warning: "bg-neutral-200 data-[state=checked]:bg-warning focus-visible:ring-warning",
        danger: "bg-neutral-200 data-[state=checked]:bg-danger focus-visible:ring-danger"
      },
      size: {
        sm: "h-4 w-7",
        md: "h-6 w-11",
        lg: "h-7 w-14"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
), Jr = me(
  "pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform",
  {
    variants: {
      size: {
        sm: "h-3 w-3 data-[state=checked]:translate-x-3",
        md: "h-5 w-5 data-[state=checked]:translate-x-5",
        lg: "h-6 w-6 data-[state=checked]:translate-x-7"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), Xr = de(
  ({
    checked: e = !1,
    onCheckedChange: t,
    variant: a = "primary",
    size: s = "md",
    label: n,
    required: o = !1,
    helperText: i,
    errorText: l,
    error: c = !1,
    className: m,
    ...h
  }, v) => {
    const b = xe.useId(), d = `${b}-helper`, w = `${b}-error`;
    return /* @__PURE__ */ f("div", { className: "inline-flex flex-col gap-1.5", children: [
      /* @__PURE__ */ f("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            role: "switch",
            "aria-checked": e,
            "data-state": e ? "checked" : "unchecked",
            onClick: () => t == null ? void 0 : t(!e),
            ref: v,
            className: g(qr({ variant: c ? "danger" : a, size: s }), m),
            "aria-describedby": c ? w : i ? d : void 0,
            "aria-invalid": c,
            "aria-required": o,
            ...h,
            children: /* @__PURE__ */ r(
              "span",
              {
                "data-state": e ? "checked" : "unchecked",
                className: g(
                  Jr({ size: s }),
                  e ? "translate-x-5" : "translate-x-1"
                )
              }
            )
          }
        ),
        n && /* @__PURE__ */ f(
          "label",
          {
            htmlFor: b,
            className: "text-sm text-neutral-900",
            children: [
              n,
              o && /* @__PURE__ */ r("span", { className: "text-danger ml-0.5", children: "*" })
            ]
          }
        )
      ] }),
      c && l && /* @__PURE__ */ r("p", { className: "text-xs text-danger", id: w, children: l }),
      !c && i && /* @__PURE__ */ r("p", { className: "text-xs text-neutral", id: d, children: i })
    ] });
  }
);
Xr.displayName = "Toggle";
const Qr = me(
  "absolute z-50 px-3 py-2 text-sm rounded-md shadow-lg transition-opacity duration-200",
  {
    variants: {
      color: {
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-white",
        success: "bg-success text-white",
        warning: "bg-warning text-white",
        danger: "bg-danger text-white",
        info: "bg-info text-white",
        neutral: "bg-neutral text-white",
        light: "bg-white text-neutral-900 border border-neutral-200"
      },
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
      }
    },
    defaultVariants: {
      color: "primary",
      size: "md"
    }
  }
), ea = me("absolute w-2 h-2 transform rotate-45", {
  variants: {
    color: {
      primary: "bg-primary",
      secondary: "bg-secondary",
      success: "bg-success",
      warning: "bg-warning",
      danger: "bg-danger",
      info: "bg-info",
      neutral: "bg-neutral",
      light: "bg-white"
    }
  },
  defaultVariants: {
    color: "primary"
  }
}), Ta = ({
  content: e,
  children: t,
  position: a = "top",
  delay: s = 0,
  className: n,
  color: o = "light",
  size: i = "md",
  isOpen: l,
  onOpenChange: c,
  trigger: m = "hover"
}) => {
  const [h, v] = Y(!1), [b, d] = Y({ top: 0, left: 0 }), w = ne(null), p = ne(null), u = ne(), x = l !== void 0, E = x ? l : h, T = () => {
    if (!w.current || !p.current) return;
    const y = p.current.getBoundingClientRect(), M = w.current.getBoundingClientRect(), A = ge(), O = A.scrollX || A.pageXOffset, z = A.scrollY || A.pageYOffset;
    let C = 0, L = 0;
    const W = 8;
    switch (a) {
      case "top":
        C = y.top + z - M.height - W, L = y.left + O + (y.width - M.width) / 2;
        break;
      case "bottom":
        C = y.bottom + z + W, L = y.left + O + (y.width - M.width) / 2;
        break;
      case "left":
        C = y.top + z + (y.height - M.height) / 2, L = y.left + O - M.width - W;
        break;
      case "right":
        C = y.top + z + (y.height - M.height) / 2, L = y.right + O + W;
        break;
    }
    const N = A.innerWidth, S = A.innerHeight;
    L < 0 && (L = 0), L + M.width > N && (L = N - M.width), C < 0 && (C = 0), C + M.height > S && (C = S - M.height), d({ top: C, left: L });
  };
  ce(() => {
    if (E) {
      T();
      const y = ge();
      y.addEventListener("scroll", T, !0), y.addEventListener("resize", T);
    }
    return () => {
      const y = ge();
      y.removeEventListener("scroll", T, !0), y.removeEventListener("resize", T);
    };
  }, [E, a]);
  const I = () => {
    x ? c == null || c(!0) : u.current = setTimeout(() => {
      v(!0);
    }, s);
  }, $ = () => {
    u.current && clearTimeout(u.current), x ? c == null || c(!1) : v(!1);
  }, B = (y) => {
    y.stopPropagation(), m === "click" && (x ? c == null || c(!l) : v(!h));
  };
  return ce(() => {
    const y = (M) => {
      m === "click" && w.current && !w.current.contains(M.target) && p.current && !p.current.contains(M.target) && $();
    };
    return E && document.addEventListener("click", y), () => {
      document.removeEventListener("click", y);
    };
  }, [E, m]), /* @__PURE__ */ r("div", { className: "relative", children: /* @__PURE__ */ f(
    "div",
    {
      ref: p,
      className: "relative inline-block",
      onMouseEnter: m === "hover" ? I : void 0,
      onMouseLeave: m === "hover" ? $ : void 0,
      onClick: B,
      children: [
        t,
        (() => {
          if (!E) return null;
          const y = le();
          return "body" in y ? Ne(
            /* @__PURE__ */ f(
              "div",
              {
                ref: w,
                className: g(Qr({ color: o, size: i }), n),
                style: {
                  top: `${b.top}px`,
                  left: `${b.left}px`
                },
                children: [
                  e,
                  /* @__PURE__ */ r(
                    "div",
                    {
                      className: g(
                        ea({ color: o }),
                        a === "top" && "bottom-[-4px] left-1/2 -translate-x-1/2",
                        a === "bottom" && "top-[-4px] left-1/2 -translate-x-1/2",
                        a === "left" && "right-[-4px] top-1/2 -translate-y-1/2",
                        a === "right" && "left-[-4px] top-1/2 -translate-y-1/2",
                        o === "light" && a === "top" && "border-r border-b border-neutral-200",
                        o === "light" && a === "bottom" && "border-l border-t border-neutral-200",
                        o === "light" && a === "left" && "border-t border-r border-neutral-200",
                        o === "light" && a === "right" && "border-l border-b border-neutral-200"
                      )
                    }
                  )
                ]
              }
            ),
            y.body
          ) : null;
        })()
      ]
    }
  ) });
}, ta = me(
  "relative overflow-hidden",
  {
    variants: {
      variant: {
        bar: "w-full bg-neutral-100",
        circular: "inline-block"
      },
      color: {
        primary: "text-primary",
        secondary: "text-secondary",
        success: "text-success",
        warning: "text-warning",
        danger: "text-danger",
        info: "text-info"
      },
      size: {
        sm: "h-1",
        md: "h-2",
        lg: "h-3"
      }
    },
    defaultVariants: {
      variant: "bar",
      color: "primary",
      size: "md"
    }
  }
), ra = {
  sm: 24,
  md: 36,
  lg: 48
}, aa = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  info: "bg-info"
}, sa = {
  primary: "#007C99",
  // Tailwind primary
  secondary: "#CEEAE7",
  success: "#00B37D",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#0EA5E9"
}, na = xe.forwardRef(
  ({
    className: e,
    variant: t = "bar",
    color: a = "primary",
    size: s = "md",
    value: n = 0,
    isIndeterminate: o = !1,
    showValue: i = !1,
    label: l,
    rounded: c = "full",
    icon: m,
    ...h
  }, v) => {
    const b = Math.min(Math.max(n, 0), 100), d = ra[s], w = s === "sm" ? 2 : s === "md" ? 3 : 4, p = (d - w) / 2, u = 2 * Math.PI * p, x = u - b / 100 * u;
    let E = "";
    return t === "loading" ? E = "rounded-full" : c ? E = c === "none" ? "" : `rounded-${c}` : E = "rounded-md", t === "circular" ? /* @__PURE__ */ f("div", { className: "inline-flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ f("div", { className: "relative", style: { width: d, height: d }, children: [
        /* @__PURE__ */ f(
          "svg",
          {
            className: g(
              "transform -rotate-90",
              o ? "animate-spin" : ""
            ),
            width: d,
            height: d,
            children: [
              /* @__PURE__ */ r(
                "circle",
                {
                  strokeWidth: w,
                  stroke: "#e5e7eb",
                  fill: "transparent",
                  r: p,
                  cx: d / 2,
                  cy: d / 2
                }
              ),
              /* @__PURE__ */ r(
                "circle",
                {
                  className: g(
                    "transition-all duration-300 ease-in-out",
                    o ? "animate-dash" : ""
                  ),
                  strokeWidth: w,
                  strokeDasharray: u,
                  strokeDashoffset: o ? 0 : x,
                  strokeLinecap: "round",
                  stroke: sa[a],
                  fill: "transparent",
                  r: p,
                  cx: d / 2,
                  cy: d / 2
                }
              )
            ]
          }
        ),
        m && /* @__PURE__ */ r("span", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ r(G, { icon: m, size: d * 0.5 }) }),
        i && !o && !m && /* @__PURE__ */ f("div", { className: "absolute inset-0 flex items-center justify-center text-xs font-medium", children: [
          Math.round(b),
          "%"
        ] })
      ] }),
      l && /* @__PURE__ */ r("span", { className: "text-sm text-neutral-600", children: l })
    ] }) : /* @__PURE__ */ f("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ r(
        "div",
        {
          ref: v,
          className: g(ta({ variant: t === "loading" ? "bar" : t, size: s }), E, e),
          role: "progressbar",
          "aria-valuenow": o ? void 0 : b,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...h,
          children: /* @__PURE__ */ r(
            "div",
            {
              className: g(
                "h-full transition-all duration-300 ease-in-out",
                o ? "animate-progress-indeterminate" : "",
                aa[a],
                E
              ),
              style: {
                width: o ? "100%" : `${b}%`
              }
            }
          )
        }
      ),
      (i || l) && /* @__PURE__ */ f("div", { className: "flex justify-between text-xs text-neutral-600", children: [
        l && /* @__PURE__ */ r("span", { children: l }),
        i && !o && /* @__PURE__ */ f("span", { children: [
          Math.round(b),
          "%"
        ] })
      ] })
    ] });
  }
);
na.displayName = "Progress";
const Ve = [
  { name: "Afghanistan", code: "+93", iso: "af", flag: "flagpack:af" },
  { name: "Albania", code: "+355", iso: "al", flag: "flagpack:al" },
  { name: "Algeria", code: "+213", iso: "dz", flag: "flagpack:dz" },
  { name: "American Samoa", code: "+1684", iso: "as", flag: "flagpack:as" },
  { name: "Andorra", code: "+376", iso: "ad", flag: "flagpack:ad" },
  { name: "Angola", code: "+244", iso: "ao", flag: "flagpack:ao" },
  { name: "Anguilla", code: "+1264", iso: "ai", flag: "flagpack:ai" },
  { name: "Antarctica", code: "+672", iso: "aq", flag: "flagpack:aq" },
  { name: "Antigua and Barbuda", code: "+1268", iso: "ag", flag: "flagpack:ag" },
  { name: "Argentina", code: "+54", iso: "ar", flag: "flagpack:ar" },
  { name: "Armenia", code: "+374", iso: "am", flag: "flagpack:am" },
  { name: "Aruba", code: "+297", iso: "aw", flag: "flagpack:aw" },
  { name: "Australia", code: "+61", iso: "au", flag: "flagpack:au" },
  { name: "Austria", code: "+43", iso: "at", flag: "flagpack:at" },
  { name: "Azerbaijan", code: "+994", iso: "az", flag: "flagpack:az" },
  { name: "Bahamas", code: "+1242", iso: "bs", flag: "flagpack:bs" },
  { name: "Bahrain", code: "+973", iso: "bh", flag: "flagpack:bh" },
  { name: "Bangladesh", code: "+880", iso: "bd", flag: "flagpack:bd" },
  { name: "Barbados", code: "+1246", iso: "bb", flag: "flagpack:bb" },
  { name: "Belarus", code: "+375", iso: "by", flag: "flagpack:by" },
  { name: "Belgium", code: "+32", iso: "be", flag: "flagpack:be" },
  { name: "Belize", code: "+501", iso: "bz", flag: "flagpack:bz" },
  { name: "Benin", code: "+229", iso: "bj", flag: "flagpack:bj" },
  { name: "Bermuda", code: "+1441", iso: "bm", flag: "flagpack:bm" },
  { name: "Bhutan", code: "+975", iso: "bt", flag: "flagpack:bt" },
  { name: "Bolivia", code: "+591", iso: "bo", flag: "flagpack:bo" },
  { name: "Bosnia and Herzegovina", code: "+387", iso: "ba", flag: "flagpack:ba" },
  { name: "Botswana", code: "+267", iso: "bw", flag: "flagpack:bw" },
  { name: "Brazil", code: "+55", iso: "br", flag: "flagpack:br" },
  { name: "British Indian Ocean Territory", code: "+246", iso: "io", flag: "flagpack:io" },
  { name: "British Virgin Islands", code: "+1284", iso: "vg", flag: "flagpack:vg" },
  { name: "Brunei", code: "+673", iso: "bn", flag: "flagpack:bn" },
  { name: "Bulgaria", code: "+359", iso: "bg", flag: "flagpack:bg" },
  { name: "Burkina Faso", code: "+226", iso: "bf", flag: "flagpack:bf" },
  { name: "Burundi", code: "+257", iso: "bi", flag: "flagpack:bi" },
  { name: "Cambodia", code: "+855", iso: "kh", flag: "flagpack:kh" },
  { name: "Cameroon", code: "+237", iso: "cm", flag: "flagpack:cm" },
  { name: "Canada", code: "+1", iso: "ca", flag: "flagpack:ca" },
  { name: "Cape Verde", code: "+238", iso: "cv", flag: "flagpack:cv" },
  { name: "Cayman Islands", code: "+1345", iso: "ky", flag: "flagpack:ky" },
  { name: "Central African Republic", code: "+236", iso: "cf", flag: "flagpack:cf" },
  { name: "Chad", code: "+235", iso: "td", flag: "flagpack:td" },
  { name: "Chile", code: "+56", iso: "cl", flag: "flagpack:cl" },
  { name: "China", code: "+86", iso: "cn", flag: "flagpack:cn" },
  { name: "Christmas Island", code: "+61", iso: "cx", flag: "flagpack:cx" },
  { name: "Cocos Islands", code: "+61", iso: "cc", flag: "flagpack:cc" },
  { name: "Colombia", code: "+57", iso: "co", flag: "flagpack:co" },
  { name: "Comoros", code: "+269", iso: "km", flag: "flagpack:km" },
  { name: "Cook Islands", code: "+682", iso: "ck", flag: "flagpack:ck" },
  { name: "Costa Rica", code: "+506", iso: "cr", flag: "flagpack:cr" },
  { name: "Croatia", code: "+385", iso: "hr", flag: "flagpack:hr" },
  { name: "Cuba", code: "+53", iso: "cu", flag: "flagpack:cu" },
  { name: "Curacao", code: "+599", iso: "cw", flag: "flagpack:cw" },
  { name: "Cyprus", code: "+357", iso: "cy", flag: "flagpack:cy" },
  { name: "Czech Republic", code: "+420", iso: "cz", flag: "flagpack:cz" },
  { name: "Democratic Republic of the Congo", code: "+243", iso: "cd", flag: "flagpack:cd" },
  { name: "Denmark", code: "+45", iso: "dk", flag: "flagpack:dk" },
  { name: "Djibouti", code: "+253", iso: "dj", flag: "flagpack:dj" },
  { name: "Dominica", code: "+1767", iso: "dm", flag: "flagpack:dm" },
  { name: "Dominican Republic", code: "+1809", iso: "do", flag: "flagpack:do" },
  { name: "East Timor", code: "+670", iso: "tl", flag: "flagpack:tl" },
  { name: "Ecuador", code: "+593", iso: "ec", flag: "flagpack:ec" },
  { name: "Egypt", code: "+20", iso: "eg", flag: "flagpack:eg" },
  { name: "El Salvador", code: "+503", iso: "sv", flag: "flagpack:sv" },
  { name: "Equatorial Guinea", code: "+240", iso: "gq", flag: "flagpack:gq" },
  { name: "Eritrea", code: "+291", iso: "er", flag: "flagpack:er" },
  { name: "Estonia", code: "+372", iso: "ee", flag: "flagpack:ee" },
  { name: "Ethiopia", code: "+251", iso: "et", flag: "flagpack:et" },
  { name: "Falkland Islands", code: "+500", iso: "fk", flag: "flagpack:fk" },
  { name: "Faroe Islands", code: "+298", iso: "fo", flag: "flagpack:fo" },
  { name: "Fiji", code: "+679", iso: "fj", flag: "flagpack:fj" },
  { name: "Finland", code: "+358", iso: "fi", flag: "flagpack:fi" },
  { name: "France", code: "+33", iso: "fr", flag: "flagpack:fr" },
  { name: "French Polynesia", code: "+689", iso: "pf", flag: "flagpack:pf" },
  { name: "Gabon", code: "+241", iso: "ga", flag: "flagpack:ga" },
  { name: "Gambia", code: "+220", iso: "gm", flag: "flagpack:gm" },
  { name: "Georgia", code: "+995", iso: "ge", flag: "flagpack:ge" },
  { name: "Germany", code: "+49", iso: "de", flag: "flagpack:de" },
  { name: "Ghana", code: "+233", iso: "gh", flag: "flagpack:gh" },
  { name: "Gibraltar", code: "+350", iso: "gi", flag: "flagpack:gi" },
  { name: "Greece", code: "+30", iso: "gr", flag: "flagpack:gr" },
  { name: "Greenland", code: "+299", iso: "gl", flag: "flagpack:gl" },
  { name: "Grenada", code: "+1473", iso: "gd", flag: "flagpack:gd" },
  { name: "Guam", code: "+1671", iso: "gu", flag: "flagpack:gu" },
  { name: "Guatemala", code: "+502", iso: "gt", flag: "flagpack:gt" },
  { name: "Guernsey", code: "+441481", iso: "gg", flag: "flagpack:gg" },
  { name: "Guinea", code: "+224", iso: "gn", flag: "flagpack:gn" },
  { name: "GuineaBissau", code: "+245", iso: "gw", flag: "flagpack:gw" },
  { name: "Guyana", code: "+592", iso: "gy", flag: "flagpack:gy" },
  { name: "Haiti", code: "+509", iso: "ht", flag: "flagpack:ht" },
  { name: "Honduras", code: "+504", iso: "hn", flag: "flagpack:hn" },
  { name: "Hong Kong", code: "+852", iso: "hk", flag: "flagpack:hk" },
  { name: "Hungary", code: "+36", iso: "hu", flag: "flagpack:hu" },
  { name: "Iceland", code: "+354", iso: "is", flag: "flagpack:is" },
  { name: "India", code: "+91", iso: "in", flag: "flagpack:in" },
  { name: "Indonesia", code: "+62", iso: "id", flag: "flagpack:id" },
  { name: "Iran", code: "+98", iso: "ir", flag: "flagpack:ir" },
  { name: "Iraq", code: "+964", iso: "iq", flag: "flagpack:iq" },
  { name: "Ireland", code: "+353", iso: "ie", flag: "flagpack:ie" },
  { name: "Isle of Man", code: "+441624", iso: "im", flag: "flagpack:im" },
  { name: "Israel", code: "+972", iso: "il", flag: "flagpack:il" },
  { name: "Italy", code: "+39", iso: "it", flag: "flagpack:it" },
  { name: "Ivory Coast", code: "+225", iso: "ci", flag: "flagpack:ci" },
  { name: "Jamaica", code: "+1876", iso: "jm", flag: "flagpack:jm" },
  { name: "Japan", code: "+81", iso: "jp", flag: "flagpack:jp" },
  { name: "Jersey", code: "+441534", iso: "je", flag: "flagpack:je" },
  { name: "Jordan", code: "+962", iso: "jo", flag: "flagpack:jo" },
  { name: "Kazakhstan", code: "+7", iso: "kz", flag: "flagpack:kz" },
  { name: "Kenya", code: "+254", iso: "ke", flag: "flagpack:ke" },
  { name: "Kiribati", code: "+686", iso: "ki", flag: "flagpack:ki" },
  { name: "Kosovo", code: "+383", iso: "xk", flag: "flagpack:xk" },
  { name: "Kuwait", code: "+965", iso: "kw", flag: "flagpack:kw" },
  { name: "Kyrgyzstan", code: "+996", iso: "kg", flag: "flagpack:kg" },
  { name: "Laos", code: "+856", iso: "la", flag: "flagpack:la" },
  { name: "Latvia", code: "+371", iso: "lv", flag: "flagpack:lv" },
  { name: "Lebanon", code: "+961", iso: "lb", flag: "flagpack:lb" },
  { name: "Lesotho", code: "+266", iso: "ls", flag: "flagpack:ls" },
  { name: "Liberia", code: "+231", iso: "lr", flag: "flagpack:lr" },
  { name: "Libya", code: "+218", iso: "ly", flag: "flagpack:ly" },
  { name: "Liechtenstein", code: "+423", iso: "li", flag: "flagpack:li" },
  { name: "Lithuania", code: "+370", iso: "lv", flag: "flagpack:lv" },
  { name: "Luxembourg", code: "+352", iso: "lu", flag: "flagpack:lu" },
  { name: "Macao", code: "+853", iso: "mo", flag: "flagpack:mo" },
  { name: "Macedonia", code: "+389", iso: "mk", flag: "flagpack:mk" },
  { name: "Madagascar", code: "+261", iso: "mg", flag: "flagpack:mg" },
  { name: "Malawi", code: "+265", iso: "mw", flag: "flagpack:mw" },
  { name: "Malaysia", code: "+60", iso: "my", flag: "flagpack:my" },
  { name: "Maldives", code: "+960", iso: "mv", flag: "flagpack:mv" },
  { name: "Mali", code: "+223", iso: "ml", flag: "flagpack:ml" },
  { name: "Malta", code: "+356", iso: "mt", flag: "flagpack:mt" },
  { name: "Marshall Islands", code: "+692", iso: "mh", flag: "flagpack:mh" },
  { name: "Mauritania", code: "+222", iso: "mr", flag: "flagpack:mr" },
  { name: "Mauritius", code: "+230", iso: "mu", flag: "flagpack:mu" },
  { name: "Mayotte", code: "+262", iso: "yt", flag: "flagpack:yt" },
  { name: "Mexico", code: "+52", iso: "mx", flag: "flagpack:mx" },
  { name: "Micronesia", code: "+691", iso: "fm", flag: "flagpack:fm" },
  { name: "Moldova", code: "+373", iso: "md", flag: "flagpack:md" },
  { name: "Monaco", code: "+377", iso: "mc", flag: "flagpack:mc" },
  { name: "Mongolia", code: "+976", iso: "mn", flag: "flagpack:mn" },
  { name: "Montenegro", code: "+382", iso: "me", flag: "flagpack:me" },
  { name: "Montserrat", code: "+1664", iso: "ms", flag: "flagpack:ms" },
  { name: "Morocco", code: "+212", iso: "ma", flag: "flagpack:ma" },
  { name: "Mozambique", code: "+258", iso: "mz", flag: "flagpack:mz" },
  { name: "Myanmar", code: "+95", iso: "mm", flag: "flagpack:mm" },
  { name: "Namibia", code: "+264", iso: "na", flag: "flagpack:na" },
  { name: "Nauru", code: "+674", iso: "nr", flag: "flagpack:nr" },
  { name: "Nepal", code: "+977", iso: "np", flag: "flagpack:np" },
  { name: "Netherlands", code: "+31", iso: "nl", flag: "flagpack:nl" },
  { name: "Netherlands Antilles", code: "+599", iso: "an", flag: "flagpack:an" },
  { name: "New Caledonia", code: "+687", iso: "nc", flag: "flagpack:nc" },
  { name: "New Zealand", code: "+64", iso: "nz", flag: "flagpack:nz" },
  { name: "Nicaragua", code: "+505", iso: "ni", flag: "flagpack:ni" },
  { name: "Niger", code: "+227", iso: "ne", flag: "flagpack:ne" },
  { name: "Nigeria", code: "+234", iso: "ng", flag: "flagpack:ng" },
  { name: "Niue", code: "+683", iso: "nu", flag: "flagpack:nu" },
  { name: "North Korea", code: "+850", iso: "kp", flag: "flagpack:kp" },
  { name: "Northern Mariana Islands", code: "+1670", iso: "mp", flag: "flagpack:mp" },
  { name: "Norway", code: "+47", iso: "no", flag: "flagpack:no" },
  { name: "Oman", code: "+968", iso: "om", flag: "flagpack:om" },
  { name: "Pakistan", code: "+92", iso: "pk", flag: "flagpack:pk" },
  { name: "Palau", code: "+680", iso: "pw", flag: "flagpack:pw" },
  { name: "Palestine", code: "+970", iso: "ps", flag: "flagpack:ps" },
  { name: "Panama", code: "+507", iso: "pa", flag: "flagpack:pa" },
  { name: "Papua New Guinea", code: "+675", iso: "pg", flag: "flagpack:pg" },
  { name: "Paraguay", code: "+595", iso: "py", flag: "flagpack:py" },
  { name: "Peru", code: "+51", iso: "pe", flag: "flagpack:pe" },
  { name: "Philippines", code: "+63", iso: "ph", flag: "flagpack:ph" },
  { name: "Pitcairn", code: "+64", iso: "pn", flag: "flagpack:pn" },
  { name: "Poland", code: "+48", iso: "pl", flag: "flagpack:pl" },
  { name: "Portugal", code: "+351", iso: "pt", flag: "flagpack:pt" },
  { name: "Puerto Rico", code: "+1787, +1939", iso: "pr", flag: "flagpack:pr" },
  { name: "Qatar", code: "+974", iso: "qa", flag: "flagpack:qa" },
  { name: "Republic of the Congo", code: "+242", iso: "cg", flag: "flagpack:cg" },
  { name: "Reunion", code: "+262", iso: "re", flag: "flagpack:re" },
  { name: "Romania", code: "+40", iso: "ro", flag: "flagpack:ro" },
  { name: "Russia", code: "+7", iso: "ru", flag: "flagpack:ru" },
  { name: "Rwanda", code: "+250", iso: "rw", flag: "flagpack:rw" },
  { name: "Saint Barthelemy", code: "+590", iso: "bl", flag: "flagpack:bl" },
  { name: "Saint Helena", code: "+290", iso: "sh", flag: "flagpack:sh" },
  { name: "Saint Kitts and Nevis", code: "+1869", iso: "kn", flag: "flagpack:kn" },
  { name: "Saint Lucia", code: "+1758", iso: "lc", flag: "flagpack:lc" },
  { name: "Saint Martin", code: "+590", iso: "mf", flag: "flagpack:mf" },
  { name: "Saint Pierre and Miquelon", code: "+508", iso: "pm", flag: "flagpack:pm" },
  { name: "Saint Vincent and the Grenadines", code: "+1784", iso: "vc", flag: "flagpack:vc" },
  { name: "Samoa", code: "+685", iso: "ws", flag: "flagpack:ws" },
  { name: "San Marino", code: "+378", iso: "sm", flag: "flagpack:sm" },
  { name: "Sao Tome and Principe", code: "+239", iso: "st", flag: "flagpack:st" },
  { name: "Saudi Arabia", code: "+966", iso: "sa", flag: "flagpack:sa" },
  { name: "Senegal", code: "+221", iso: "sn", flag: "flagpack:sn" },
  { name: "Serbia", code: "+381", iso: "rs", flag: "flagpack:rs" },
  { name: "Seychelles", code: "+248", iso: "sc", flag: "flagpack:sc" },
  { name: "Sierra Leone", code: "+232", iso: "sl", flag: "flagpack:sl" },
  { name: "Singapore", code: "+65", iso: "sg", flag: "flagpack:sg" },
  { name: "Sint Maarten", code: "+1721", iso: "sx", flag: "flagpack:sx" },
  { name: "Slovakia", code: "+421", iso: "sk", flag: "flagpack:sk" },
  { name: "Slovenia", code: "+386", iso: "si", flag: "flagpack:si" },
  { name: "Solomon Islands", code: "+677", iso: "sb", flag: "flagpack:sb" },
  { name: "Somalia", code: "+252", iso: "so", flag: "flagpack:so" },
  { name: "South Africa", code: "+27", iso: "za", flag: "flagpack:za" },
  { name: "South Korea", code: "+82", iso: "kr", flag: "flagpack:kr" },
  { name: "South Sudan", code: "+211", iso: "ss", flag: "flagpack:ss" },
  { name: "Spain", code: "+34", iso: "es", flag: "flagpack:es" },
  { name: "Sri Lanka", code: "+94", iso: "lk", flag: "flagpack:lk" },
  { name: "Sudan", code: "+249", iso: "sd", flag: "flagpack:sd" },
  { name: "Suriname", code: "+597", iso: "sr", flag: "flagpack:sr" },
  { name: "Svalbard and Jan Mayen", code: "+47", iso: "sj", flag: "flagpack:sj" },
  { name: "Swaziland", code: "+268", iso: "sz", flag: "flagpack:sz" },
  { name: "Sweden", code: "+46", iso: "se", flag: "flagpack:se" },
  { name: "Switzerland", code: "+41", iso: "ch", flag: "flagpack:ch" },
  { name: "Syria", code: "+963", iso: "sy", flag: "flagpack:sy" },
  { name: "Taiwan", code: "+886", iso: "tw", flag: "flagpack:tw" },
  { name: "Tajikistan", code: "+992", iso: "tj", flag: "flagpack:tj" },
  { name: "Tanzania", code: "+255", iso: "tz", flag: "flagpack:tz" },
  { name: "Thailand", code: "+66", iso: "th", flag: "flagpack:th" },
  { name: "Togo", code: "+228", iso: "tg", flag: "flagpack:tg" },
  { name: "Tokelau", code: "+690", iso: "tk", flag: "flagpack:tk" },
  { name: "Tonga", code: "+676", iso: "to", flag: "flagpack:to" },
  { name: "Trinidad and Tobago", code: "+1868", iso: "tt", flag: "flagpack:tt" },
  { name: "Tunisia", code: "+216", iso: "tn", flag: "flagpack:tn" },
  { name: "Turkey", code: "+90", iso: "tr", flag: "flagpack:tr" },
  { name: "Turkmenistan", code: "+993", iso: "tm", flag: "flagpack:tm" },
  { name: "Turks and Caicos Islands", code: "+1649", iso: "tc", flag: "flagpack:tc" },
  { name: "Tuvalu", code: "+688", iso: "tv", flag: "flagpack:tv" },
  { name: "U.S. Virgin Islands", code: "+1340", iso: "vi", flag: "flagpack:vi" },
  { name: "Uganda", code: "+256", iso: "ug", flag: "flagpack:ug" },
  { name: "Ukraine", code: "+380", iso: "ua", flag: "flagpack:ua" },
  { name: "United Arab Emirates", code: "+971", iso: "ae", flag: "flagpack:ae" },
  { name: "United Kingdom", code: "+44", iso: "gb", flag: "flagpack:gb" },
  { name: "United States", code: "+1", iso: "us", flag: "flagpack:us" },
  { name: "Uruguay", code: "+598", iso: "uy", flag: "flagpack:uy" },
  { name: "Uzbekistan", code: "+998", iso: "uz", flag: "flagpack:uz" },
  { name: "Vanuatu", code: "+678", iso: "vu", flag: "flagpack:vu" },
  { name: "Vatican", code: "+379", iso: "va", flag: "flagpack:va" },
  { name: "Venezuela", code: "+58", iso: "ve", flag: "flagpack:ve" },
  { name: "Vietnam", code: "+84", iso: "vn", flag: "flagpack:vn" },
  { name: "Wallis and Futuna", code: "+681", iso: "wf", flag: "flagpack:wf" },
  { name: "Western Sahara", code: "+212", iso: "eh", flag: "flagpack:eh" },
  { name: "Yemen", code: "+967", iso: "ye", flag: "flagpack:ye" },
  { name: "Zambia", code: "+260", iso: "zm", flag: "flagpack:zm" },
  { name: "Zimbabwe", code: "+263", iso: "zw", flag: "flagpack:zw" }
], oa = me(
  "border bg-white px-3 py-2 ring-0 transition-colors placeholder:text-neutral placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50",
        error: "border-danger hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50",
        success: "border-success hover:border-success-600 focus:border-success-600 hover:bg-success-50",
        ghost: "border-transparent bg-transparent hover:bg-primary-50 focus:bg-primary-50",
        underline: "border-0 border-b-2 border-neutral-200 rounded-none bg-transparent hover:border-primary-300 focus:border-primary-300 hover:bg-transparent focus:bg-transparent"
      },
      size: {
        sm: "h-8 px-2 py-1 text-sm",
        md: "h-10 px-3 py-2 text-base",
        lg: "h-12 px-4 py-3 text-lg"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "md",
      fullWidth: !0
    }
  }
), la = de(
  ({
    className: e,
    variant: t = "default",
    size: a = "md",
    rounded: s = "md",
    error: n = !1,
    errorText: o,
    helperText: i,
    label: l,
    required: c = !1,
    fullWidth: m = !1,
    value: h = "",
    onChange: v,
    disabled: b = !1,
    defaultCountry: d = "id",
    ...w
  }) => {
    const [p, u] = Y(!1), [x, E] = Y(
      () => Ve.find((k) => k.iso === d) || Ve[0]
    ), [T, I] = Y(""), [$, B] = Y(() => {
      const k = x.code;
      return h.startsWith(k) ? h.slice(k.length) : h;
    }), R = ne(null), y = ne(null), M = xe.useId(), A = `${M}-helper`, O = `${M}-error`, z = Ve.filter(
      (k) => k.name.toLowerCase().includes(T.toLowerCase()) || k.code.includes(T)
    ), C = ne(null), L = () => {
      if (p && R.current && y.current) {
        const k = R.current.getBoundingClientRect(), P = y.current, _ = typeof window < "u" ? window : { innerHeight: 0 }, D = _.innerHeight - k.bottom, V = k.top, ee = k.bottom + (P.offsetHeight || 0) + 4 >= _.innerHeight, ie = V > D, ae = ee && ie;
        P.style.position = "fixed", P.style.left = `${k.left}px`, P.style.minWidth = `${k.width}px`, P.style.maxWidth = "340px", P.style.width = "auto", ae ? (P.style.bottom = `${_.innerHeight - k.top + 4}px`, P.style.top = "auto", P.style.maxHeight = `${V - 8}px`) : (P.style.top = `${k.bottom + 4}px`, P.style.bottom = "auto", P.style.maxHeight = `${D - 8}px`);
      }
    };
    ce(() => {
      const k = typeof window < "u" ? window : void 0, P = () => {
        p && L();
      }, _ = () => {
        p && L();
      };
      return p && (L(), k == null || k.addEventListener("scroll", P, !0), k == null || k.addEventListener("resize", _)), () => {
        k == null || k.removeEventListener("scroll", P, !0), k == null || k.removeEventListener("resize", _);
      };
    }, [p]), ce(() => {
      if (!p) return;
      const k = (P) => {
        const _ = P.target;
        R.current && y.current && !R.current.contains(_) && !y.current.contains(_) && u(!1);
      };
      return document.addEventListener("click", k), () => document.removeEventListener("click", k);
    }, [p]);
    const W = (k) => {
      E(k), u(!1), I("");
      const P = k.code + $;
      v == null || v(P);
    }, N = (k) => {
      const P = k.target.value.replace(/[^\d]/g, "");
      B(P);
      const _ = x.code + P;
      v == null || v(_);
    }, S = g(
      oa({
        variant: n ? "error" : t,
        size: a,
        rounded: s,
        fullWidth: m
      }),
      "!w-full"
    );
    return /* @__PURE__ */ f(
      "div",
      {
        ref: C,
        className: g(m ? "w-full" : "inline-block", e),
        ...w,
        children: [
          l && /* @__PURE__ */ f("label", { htmlFor: M, className: "mb-1.5 block text-sm text-neutral-900", children: [
            l,
            c && /* @__PURE__ */ r("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          /* @__PURE__ */ f("div", { className: g("relative", !m && "inline-block"), children: [
            /* @__PURE__ */ f("div", { className: "flex", children: [
              /* @__PURE__ */ f(
                "button",
                {
                  type: "button",
                  ref: R,
                  onClick: () => !b && u(!p),
                  className: g(
                    S,
                    "flex items-center gap-2 rounded-r-none justify-between max-w-[100px]",
                    b && "cursor-not-allowed opacity-50"
                  ),
                  children: [
                    /* @__PURE__ */ f("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ r(G, { icon: x.flag, className: "w-5 h-5" }),
                      /* @__PURE__ */ r("span", { className: "text-sm", children: x.code })
                    ] }),
                    /* @__PURE__ */ r(
                      G,
                      {
                        icon: "mdi:chevron-down",
                        className: g("transition-transform", p && "rotate-180")
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ r(
                "input",
                {
                  type: "tel",
                  id: M,
                  value: $,
                  onChange: N,
                  disabled: b,
                  className: g(
                    S,
                    "rounded-l-none flex-1 min-w-0 w-full"
                  ),
                  placeholder: "Enter phone number"
                }
              )
            ] }),
            p && Ne(
              /* @__PURE__ */ f(
                "div",
                {
                  ref: y,
                  className: g(
                    "border border-neutral-200 bg-white shadow-lg overflow-y-auto",
                    {
                      "rounded-none": s === "none",
                      "rounded-sm": s === "sm",
                      "rounded-md": s === "md",
                      "rounded-lg": s === "lg",
                      "rounded-xl": s === "full"
                    }
                  ),
                  children: [
                    /* @__PURE__ */ r("div", { className: "p-2 border-b border-neutral-200", children: /* @__PURE__ */ r(
                      "input",
                      {
                        type: "text",
                        value: T,
                        onChange: (k) => I(k.target.value),
                        placeholder: "Search countries...",
                        className: "w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:border-primary-300"
                      }
                    ) }),
                    /* @__PURE__ */ r("div", { className: "max-h-[300px] overflow-y-auto", children: z.map((k) => /* @__PURE__ */ r(
                      "button",
                      {
                        type: "button",
                        onClick: () => W(k),
                        className: g(
                          "w-full px-3 py-2 text-sm text-left hover:bg-primary-50 cursor-pointer",
                          x.iso === k.iso && "bg-primary-50"
                        ),
                        children: /* @__PURE__ */ f("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ r(G, { icon: k.flag, className: "w-5 h-5" }),
                          /* @__PURE__ */ r("span", { className: "text-sm font-medium", children: k.code }),
                          /* @__PURE__ */ r("span", { className: "text-sm text-neutral-600", children: k.name })
                        ] })
                      },
                      k.iso + k.code
                    )) })
                  ]
                }
              ),
              typeof document < "u" ? document.body : document
            )
          ] }),
          n && o && /* @__PURE__ */ r("p", { className: "mt-1 text-xs text-danger", id: O, children: o }),
          !n && i && /* @__PURE__ */ r("p", { className: "mt-1 text-xs text-neutral", id: A, children: i })
        ]
      }
    );
  }
);
la.displayName = "PhoneInput";
const ia = me("flex items-center text-sm", {
  variants: {
    variant: {
      default: "text-neutral-600",
      light: "text-neutral-400",
      dark: "text-neutral-800"
    },
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
}), ca = de(
  ({
    className: e,
    variant: t = "default",
    size: a = "md",
    items: s,
    separator: n = /* @__PURE__ */ r(G, { icon: "mdi:slash-forward", className: "h-4 w-4 flex-shrink-0" }),
    activeLastItem: o = !0,
    ...i
  }, l) => /* @__PURE__ */ r(
    "nav",
    {
      ref: l,
      className: g(ia({ variant: t, size: a }), e),
      "aria-label": "Breadcrumb",
      ...i,
      children: /* @__PURE__ */ r("ol", { className: "flex flex-wrap items-center gap-1.5", children: s.map((c, m) => {
        const h = m === s.length - 1, v = h && o;
        return /* @__PURE__ */ f(
          "li",
          {
            className: g(
              "flex items-center gap-1.5",
              v && "text-primary font-medium"
            ),
            children: [
              c.icon && /* @__PURE__ */ r(
                G,
                {
                  icon: c.icon,
                  className: g(
                    "flex-shrink-0",
                    a === "sm" && "h-3.5 w-3.5",
                    a === "md" && "h-4 w-4",
                    a === "lg" && "h-5 w-5"
                  )
                }
              ),
              c.href && !v ? /* @__PURE__ */ r(
                "a",
                {
                  href: c.href,
                  className: g(
                    "transition-colors duration-200",
                    "hover:text-primary hover:underline focus:outline-none",
                    "focus-visible:text-primary focus-visible:underline",
                    "active:text-primary-600"
                  ),
                  children: /* @__PURE__ */ r("span", { className: "truncate max-w-[200px] inline-block align-bottom", children: c.label })
                }
              ) : /* @__PURE__ */ r("span", { className: g(
                "truncate max-w-[200px] inline-block",
                v && "text-primary"
              ), children: c.label }),
              !h && /* @__PURE__ */ r("span", { className: g(
                "text-neutral-400 flex-shrink-0",
                a === "sm" && "scale-90",
                a === "lg" && "scale-110"
              ), children: n })
            ]
          },
          c.label
        );
      }) })
    }
  )
);
ca.displayName = "Breadcrumbs";
const wt = (e) => {
  const t = {
    header: {
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-white",
      warning: "bg-warning text-white",
      danger: "bg-danger text-white",
      ghost: "bg-gray-100 text-gray-700",
      success: "bg-success text-white"
    },
    row: {
      primary: "hover:bg-primary/5",
      secondary: "hover:bg-secondary/5",
      warning: "hover:bg-warning/5",
      danger: "hover:bg-danger/5",
      ghost: "hover:bg-gray-50",
      success: "hover:bg-success/5"
    },
    border: {
      primary: "border-primary",
      secondary: "border-secondary",
      warning: "border-warning",
      danger: "border-danger",
      ghost: "border-gray-200",
      success: "border-success"
    },
    stripe: {
      primary: "bg-primary/5",
      secondary: "bg-secondary/5",
      warning: "bg-warning/5",
      danger: "bg-danger/5",
      ghost: "bg-gray-50",
      success: "bg-success/5"
    }
  };
  return {
    header: t.header[e],
    row: t.row[e],
    border: t.border[e],
    stripe: t.stripe[e]
  };
}, da = ({ schema: e, variant: t = "primary" }) => {
  const a = [{ name: "no", label: "No.", accessorKey: "no", type: "number" }, ...e], s = wt(t);
  return /* @__PURE__ */ r("div", { className: "bg-white rounded-md", children: /* @__PURE__ */ r("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ f("table", { className: "w-full border-spacing-0 border-separate", children: [
    /* @__PURE__ */ r("thead", { className: g("border-2 sticky top-0 z-10 rounded-t-md", s.border), children: /* @__PURE__ */ r("tr", { children: a.map((n, o) => /* @__PURE__ */ r(
      "th",
      {
        className: g(
          "text-sm text-wrap border-y p-4 text-left",
          s.header,
          {
            "rounded-tl-md": o === 0,
            "rounded-tr-md": o === a.length - 1
          }
        ),
        children: n.label
      },
      o
    )) }) }),
    /* @__PURE__ */ r("tbody", { className: "max-h-[50vh]", children: [...Array(5)].map((n, o) => /* @__PURE__ */ r(
      "tr",
      {
        className: g("p-3", {
          [s.stripe]: o % 2 !== 0,
          "bg-white": o % 2 === 0
        }),
        children: a.map((i, l) => /* @__PURE__ */ r(
          "td",
          {
            className: "text-left text-nowrap text-sm p-4",
            children: /* @__PURE__ */ r(Or, { className: "h-10 w-full rounded-md" })
          },
          `${o}-${l}`
        ))
      },
      o
    )) })
  ] }) }) });
}, Ba = ({
  schema: e,
  data: t,
  className: a,
  headerClassName: s,
  rowClassName: n,
  cellClassName: o,
  emptyState: i,
  isLoading: l,
  loadingState: c,
  showIndex: m = !1,
  onPageChange: h,
  onPageSizeChange: v,
  onSortChange: b,
  onRowClick: d,
  showPagination: w = !1,
  variant: p = "primary",
  meta: u = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [x, E] = Y(() => {
    const R = e.find((y) => y.sortable && y.sort);
    return R ? [{
      id: R.accessorKey.toString(),
      desc: R.sort === "desc"
    }] : [];
  }), T = xe.useMemo(() => {
    const R = e.map((y) => ({
      accessorKey: y.accessorKey,
      header: y.label,
      enableSorting: !!y.sortable,
      cell: y.render ? ({ row: M }) => {
        var A;
        return (A = y.render) == null ? void 0 : A.call(y, M.original[y.accessorKey], M.original, M.index);
      } : ({ row: M }) => M.original[y.accessorKey] || "-",
      meta: {
        align: y.align || "left"
      }
    }));
    return m ? [{
      accessorKey: "no",
      header: "No.",
      enableSorting: !1,
      cell: ({ row: y }) => (u.current_page - 1) * u.limit_number + y.index + 1,
      meta: {
        align: "left"
      }
    }, ...R] : R;
  }, [e, m, u]), I = At({
    data: t,
    columns: T,
    state: {
      sorting: x
    },
    onSortingChange: (R) => {
      const y = typeof R == "function" ? R(x) : R;
      E(y), y.length > 0 ? b == null || b(y[0].desc ? "desc" : "asc", y[0].id) : b == null || b("", "");
    },
    getCoreRowModel: Lt(),
    getSortedRowModel: Rt(),
    getPaginationRowModel: Dt(),
    manualPagination: !0,
    pageCount: u.total_page
  }), $ = wt(p);
  if (l)
    return c || /* @__PURE__ */ r(da, { schema: e, variant: p });
  const B = (R, y, M) => {
    const A = R.target;
    A.tagName === "BUTTON" || A.tagName === "A" || A.tagName === "INPUT" || A.tagName === "SELECT" || A.closest("button") !== null || A.closest("a") !== null || A.closest("input") !== null || A.closest("select") !== null || d == null || d(y, M);
  };
  return /* @__PURE__ */ f("div", { className: "bg-white rounded-md", children: [
    /* @__PURE__ */ r("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ f("table", { className: g("w-full border-spacing-0 border-separate", a), children: [
      /* @__PURE__ */ r("thead", { className: g("border-2 sticky top-0 z-10 rounded-t-md", $.border), children: I.getHeaderGroups().map((R) => /* @__PURE__ */ r("tr", { children: R.headers.map((y, M) => {
        var A, O, z;
        return /* @__PURE__ */ r(
          "th",
          {
            className: g(
              "text-sm text-wrap border-y p-4",
              $.header,
              {
                "cursor-pointer": y.column.getCanSort(),
                "rounded-tl-md": M === 0,
                "rounded-tr-md": M === R.headers.length - 1,
                "text-left": ((A = y.column.columnDef.meta) == null ? void 0 : A.align) === "left",
                "text-center": ((O = y.column.columnDef.meta) == null ? void 0 : O.align) === "center",
                "text-right": ((z = y.column.columnDef.meta) == null ? void 0 : z.align) === "right"
              },
              s
            ),
            onClick: y.column.getCanSort() ? y.column.getToggleSortingHandler() : void 0,
            children: /* @__PURE__ */ f("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ r("span", { className: g({
                "font-semibold": M === 0
              }), children: Ye(y.column.columnDef.header, y.getContext()) }),
              y.column.getCanSort() && /* @__PURE__ */ r(
                G,
                {
                  icon: y.column.getIsSorted() ? y.column.getIsSorted() === "desc" ? "mdi:keyboard-arrow-up" : "mdi:keyboard-arrow-down" : "mdi:unfold-more-horizontal",
                  className: g("h-4 w-4", {
                    "text-white": p !== "ghost",
                    "text-gray-700": p === "ghost"
                  })
                }
              )
            ] })
          },
          y.id
        );
      }) }, R.id)) }),
      /* @__PURE__ */ r("tbody", { className: "max-h-[50vh]", children: I.getRowModel().rows.length === 0 ? /* @__PURE__ */ r("tr", { children: /* @__PURE__ */ r(
        "td",
        {
          colSpan: I.getAllColumns().length,
          className: g(
            "text-center border h-full w-full rounded-b-md"
          ),
          children: i || /* @__PURE__ */ f("div", { className: "flex mx-auto w-full text-center justify-center gap-3 items-center", children: [
            /* @__PURE__ */ r("p", { children: "Data Not Found" }),
            /* @__PURE__ */ r(G, { icon: "mdi:face-frown-open", size: 34 })
          ] })
        }
      ) }) : I.getRowModel().rows.map((R, y) => /* @__PURE__ */ r(
        "tr",
        {
          className: g(
            "p-3",
            $.row,
            {
              [$.stripe]: y % 2 !== 0,
              "bg-white": y % 2 === 0,
              "cursor-pointer": d
            },
            n
          ),
          onClick: (M) => B(M, R.original, y),
          children: R.getVisibleCells().map((M) => {
            var A, O, z;
            return /* @__PURE__ */ r(
              "td",
              {
                className: g(
                  "px-4 py-3 text-sm text-gray-900",
                  {
                    "text-left": ((A = M.column.columnDef.meta) == null ? void 0 : A.align) === "left",
                    "text-center": ((O = M.column.columnDef.meta) == null ? void 0 : O.align) === "center",
                    "text-right": ((z = M.column.columnDef.meta) == null ? void 0 : z.align) === "right"
                  },
                  o
                ),
                children: Ye(M.column.columnDef.cell, M.getContext())
              },
              M.id
            );
          })
        },
        R.id
      )) })
    ] }) }),
    !!t.length && w && /* @__PURE__ */ r("div", { className: "p-4 bg-white rounded-b-md", children: /* @__PURE__ */ r(
      Br,
      {
        currentPage: u.current_page,
        totalPages: u.total_page,
        totalData: u.total_data,
        onPageChange: h || (() => {
        }),
        perPage: u.limit_number,
        onPerPageChange: v || (() => {
        }),
        perPageOptions: [5, 10, 20, 50, 100],
        siblingCount: 1
      }
    ) })
  ] });
}, ma = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, kt = de(
  ({
    className: e,
    variant: t = "default",
    rounded: a = "lg",
    title: s,
    description: n,
    onClose: o,
    icon: i,
    showIcon: l = !0,
    showClose: c = !0,
    ...m
  }, h) => {
    const b = i || (l ? {
      default: "mdi:information",
      success: "mdi:check-circle",
      error: "mdi:alert-circle",
      warning: "mdi:alert",
      info: "mdi:information"
    }[t] : void 0), d = s || n;
    return /* @__PURE__ */ f(
      "div",
      {
        ref: h,
        className: g(
          "flex",
          n ? "items-start gap-3 p-4" : "items-center gap-2 py-2.5 px-3",
          "border border-gray-200",
          ma[a],
          {
            "bg-white": t === "default",
            "bg-success-50": t === "success",
            "bg-danger-50": t === "error",
            "bg-warning-50": t === "warning",
            "bg-info-50": t === "info"
          },
          e
        ),
        ...m,
        children: [
          b && /* @__PURE__ */ r(
            G,
            {
              icon: b,
              className: g(
                "flex-shrink-0",
                n ? "h-5 w-5 mt-0.5" : "h-4 w-4",
                {
                  "text-gray": t === "default",
                  "text-success": t === "success",
                  "text-danger": t === "error",
                  "text-warning": t === "warning",
                  "text-info": t === "info"
                }
              )
            }
          ),
          /* @__PURE__ */ f("div", { className: "flex-1", children: [
            s && /* @__PURE__ */ r(
              "h3",
              {
                className: g("text-sm font-medium leading-5", {
                  "text-gray-900": t === "default",
                  "text-success-900": t === "success",
                  "text-danger-900": t === "error",
                  "text-warning-900": t === "warning",
                  "text-info-900": t === "info"
                }),
                children: s
              }
            ),
            n && /* @__PURE__ */ r(
              "p",
              {
                className: g(s ? "mt-1" : "", "text-sm leading-5", {
                  "text-gray": t === "default",
                  "text-success-700": t === "success",
                  "text-danger-700": t === "error",
                  "text-warning-700": t === "warning",
                  "text-info-700": t === "info"
                }),
                children: n
              }
            ),
            !d && /* @__PURE__ */ r("span", { className: "text-sm leading-5", children: m.children })
          ] }),
          c && o && /* @__PURE__ */ r(
            ue,
            {
              variant: "ghost",
              size: "sm",
              onClick: o,
              className: g(
                "flex-shrink-0 !p-1",
                n ? "ml-4" : "ml-2",
                {
                  "text-gray-400 hover:text-gray": t === "default",
                  "text-success-400 hover:text-success": t === "success",
                  "text-danger-400 hover:text-danger": t === "error",
                  "text-warning-400 hover:text-warning": t === "warning",
                  "text-info-400 hover:text-info": t === "info"
                }
              ),
              children: /* @__PURE__ */ r(G, { icon: "mdi:close", className: g(n ? "h-5 w-5" : "h-4 w-4") })
            }
          )
        ]
      }
    );
  }
);
kt.displayName = "Toast";
const Ge = Ct(void 0), ua = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, Va = ({ children: e }) => {
  const [t, a] = Y([]), s = he((l) => {
    a((c) => c.filter((m) => m.id !== l));
  }, []), n = he((l) => {
    const c = Math.random().toString(36).substr(2, 9), m = l.position || "top-right", h = l.duration || 5e3, v = {
      ...l,
      id: c,
      position: m
    };
    return a((b) => [...b, v]), h > 0 && setTimeout(() => {
      s(c);
    }, h), c;
  }, [s]), o = t.reduce((l, c) => (l[c.position] || (l[c.position] = []), l[c.position].push(c), l), {
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-right": [],
    "top-center": [],
    "bottom-center": []
  }), i = le();
  return "body" in i ? /* @__PURE__ */ f(Ge.Provider, { value: { showToast: n, removeToast: s }, children: [
    e,
    Ne(
      /* @__PURE__ */ r(ze, { children: Object.entries(o).map(([l, c]) => /* @__PURE__ */ r(
        "div",
        {
          className: g(
            "fixed z-[100] flex flex-col gap-2 min-w-[320px] max-w-[420px]",
            ua[l],
            l.includes("bottom") ? "flex-col-reverse" : "flex-col"
          ),
          children: c.map((m) => /* @__PURE__ */ r(
            kt,
            {
              ...m,
              onClose: () => s(m.id),
              className: "animate-slide-in"
            },
            m.id
          ))
        },
        l
      )) }),
      i.body
    )
  ] }) : /* @__PURE__ */ r(Ge.Provider, { value: { showToast: n, removeToast: s }, children: e });
}, Oa = () => {
  const e = It(Ge);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, ga = ({
  label: e,
  value: t,
  icon: a,
  className: s
}) => /* @__PURE__ */ f(_e, { className: g(
  "flex items-center gap-4 rounded-lg w-full bg-white p-4 shadow-sm hover:bg-neutral-50 transition-shadow duration-200 justify-between",
  s
), children: [
  /* @__PURE__ */ f("div", { children: [
    /* @__PURE__ */ r("p", { className: "text-sm font-medium text-gray", children: e }),
    /* @__PURE__ */ r("p", { className: "mt-1 text-2xl font-semibold text-gray-900", children: t })
  ] }),
  a && /* @__PURE__ */ r("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50", children: /* @__PURE__ */ r(G, { icon: a, className: "h-6 w-6 text-primary-600" }) })
] }), fa = {
  400: {
    image: "https://design-system-eaip.onrender.com/img/error.svg",
    message: "Bad request. Please check your input and try again."
  },
  401: {
    image: "https://design-system-eaip.onrender.com/img/error.svg",
    message: "Please sign in to access this resource."
  },
  403: {
    image: "https://design-system-eaip.onrender.com/img/error.svg",
    message: "You do not have permission to access this resource."
  },
  404: {
    image: "https://design-system-eaip.onrender.com/img/page-not-found.svg",
    message: "The page you are looking for does not exist."
  },
  500: {
    image: "https://design-system-eaip.onrender.com/img/error.svg",
    message: "Something went wrong on our end. Please try again later."
  },
  502: {
    image: "https://design-system-eaip.onrender.com/img/error.svg",
    message: "Bad gateway. Our servers are having trouble connecting."
  },
  503: {
    image: "https://design-system-eaip.onrender.com/img/error.svg",
    message: "Service unavailable. We are currently performing maintenance."
  },
  504: {
    image: "https://design-system-eaip.onrender.com/img/error.svg",
    message: "Gateway timeout. The server took too long to respond."
  }
}, Nt = {
  NO_INTERNET: {
    image: "https://design-system-eaip.onrender.com/img/no-internet.svg",
    message: "Please check your internet connection and try again."
  },
  DATA_NOT_FOUND: {
    image: "https://design-system-eaip.onrender.com/img/search-not-found.svg",
    message: "No data available for your request."
  },
  UNDER_DEVELOPMENT: {
    image: "https://design-system-eaip.onrender.com/img/under-development.svg",
    message: "This feature is currently under development."
  },
  INFORMATION_UNAVAILABLE: {
    image: "https://design-system-eaip.onrender.com/img/search-not-found.svg",
    message: "The requested information is currently unavailable."
  },
  SUCCESS: {
    image: "https://design-system-eaip.onrender.com/img/payment-success.svg",
    message: "Operation completed successfully."
  },
  CHECKED: {
    image: "https://design-system-eaip.onrender.com/img/payment-success.svg",
    message: "All checks have passed successfully."
  }
}, pa = {
  "no-internet": "NO_INTERNET",
  "data-not-found": "DATA_NOT_FOUND",
  "under-development": "UNDER_DEVELOPMENT",
  "information-unavailable": "INFORMATION_UNAVAILABLE",
  success: "SUCCESS",
  checked: "CHECKED"
}, et = {
  ...fa,
  ...Nt
}, tt = {
  image: "https://design-system-eaip.onrender.com/img/error.svg",
  message: "An unexpected error occurred. Our team is currently investigating the issue."
}, rt = (e) => typeof e == "object" && e !== null && ("code" in e || "message" in e), Ha = ({
  error: e,
  reload: t,
  children: a,
  className: s = "",
  variant: n,
  customImage: o,
  customMessage: i
}) => {
  if (!e && !n)
    return a ? /* @__PURE__ */ r(ze, { children: a }) : null;
  const c = (() => {
    if (n) {
      const v = pa[n];
      return Nt[v];
    }
    return rt(e) && e.code && et[e.code] ? et[e.code] : tt;
  })(), m = o || c.image, h = i || (rt(e) ? e.message : null) || c.message;
  return /* @__PURE__ */ f("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${s}`, children: [
    /* @__PURE__ */ r(
      "img",
      {
        src: m,
        alt: "Error illustration",
        className: "max-w-[300px] h-auto"
      }
    ),
    /* @__PURE__ */ r(Kr, { variant: "body1", className: "m-0", children: h }),
    t && /* @__PURE__ */ r(
      ue,
      {
        onClick: t,
        rounded: "full",
        variant: "primary",
        size: "md",
        children: "Try Again"
      }
    )
  ] });
}, ba = me(
  "border bg-white flex items-center justify-center aspect-square transition-colors placeholder:text-neutral placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-center",
  {
    variants: {
      variant: {
        default: "border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50",
        error: "border-danger hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50",
        success: "border-success hover:border-success-600 focus:border-success-600 hover:bg-success-50",
        ghost: "border-transparent bg-transparent hover:bg-primary-50 focus:bg-primary-50",
        underline: "border-0 border-b-2 border-neutral-200 rounded-none bg-transparent hover:border-primary-300 focus:border-primary-300 hover:bg-transparent focus:bg-transparent"
      },
      size: {
        sm: "h-8 w-8 text-sm",
        md: "h-12 w-12 text-lg",
        lg: "h-16 w-16 text-xl"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "md"
    }
  }
), ha = de(
  ({
    className: e,
    variant: t = "default",
    size: a = "md",
    rounded: s = "md",
    error: n = !1,
    errorText: o,
    helperText: i,
    label: l,
    bottomLabel: c,
    required: m = !1,
    showSubmitButton: h = !1,
    submitButtonLabel: v = "Submit",
    submitButtonVariant: b = "primary",
    length: d = 6,
    numericOnly: w = !0,
    onComplete: p,
    onChange: u,
    onSubmit: x,
    value: E,
    defaultValue: T = "",
    disabled: I = !1,
    autoFocus: $ = !1,
    ...B
  }, R) => {
    const [y, M] = Y(T || ""), A = ne([]);
    ce(() => {
      E !== void 0 && M(E);
    }, [E]);
    const O = E !== void 0, z = O ? E : y, C = (D) => {
      O || M(D), u == null || u(D), D.length === d && (p == null || p(D), h || x == null || x(D));
    }, L = (D) => (V) => {
      A.current[D] = V;
    }, W = (D) => {
      D.target.select();
    }, N = (D, V) => {
      var F;
      const se = D.target.value;
      let ee = "";
      if (se.length >= 1)
        ee = se.slice(-1);
      else if (se.length === 0) {
        const J = z.split("");
        J[V] = "", C(J.join(""));
        return;
      }
      if (w && !/^\d$/.test(ee))
        return;
      const ie = z.split("");
      for (; ie.length <= V; )
        ie.push("");
      ie[V] = ee;
      const ae = ie.join("");
      C(ae), V < d - 1 && ee && ((F = A.current[V + 1]) == null || F.focus());
    }, S = (D, V) => {
      var se, ee, ie;
      if (D.key === "Backspace") {
        const ae = z.split("");
        z[V] ? (D.preventDefault(), ae[V] = "", C(ae.join(""))) : V > 0 && (D.preventDefault(), ae[V - 1] = "", C(ae.join("")), (se = A.current[V - 1]) == null || se.focus());
      } else if (D.key === "Delete") {
        if (z[V]) {
          D.preventDefault();
          const ae = z.split("");
          ae[V] = "", C(ae.join(""));
        }
      } else if (D.key === "ArrowLeft" && V > 0)
        D.preventDefault(), (ee = A.current[V - 1]) == null || ee.focus();
      else if (D.key === "ArrowRight" && V < d - 1)
        D.preventDefault(), (ie = A.current[V + 1]) == null || ie.focus();
      else if (!D.ctrlKey && !D.altKey && !D.metaKey && D.key.length === 1 && w && !/^\d$/.test(D.key)) {
        D.preventDefault();
        return;
      }
    }, k = (D) => {
      var ae;
      D.preventDefault();
      const V = D.clipboardData.getData("text/plain").trim();
      if (w && !/^\d+$/.test(V))
        return;
      const ee = V.slice(0, d).padEnd(z.length, "").slice(0, d);
      C(ee);
      const ie = ee.length < d ? ee.length : d - 1;
      (ae = A.current[ie]) == null || ae.focus();
    }, P = () => {
      z.length === d && (x == null || x(z));
    }, _ = z.split("").concat(Array(d - z.length).fill(""));
    return /* @__PURE__ */ f("div", { ref: R, className: g("w-full", e), ...B, children: [
      l && /* @__PURE__ */ f("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        l,
        m && /* @__PURE__ */ r("span", { className: "text-danger ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ f("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ r("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: d }).map((D, V) => /* @__PURE__ */ r(
          "input",
          {
            ref: L(V),
            type: w ? "tel" : "text",
            inputMode: w ? "numeric" : "text",
            maxLength: 1,
            value: _[V] || "",
            onChange: (se) => N(se, V),
            onKeyDown: (se) => S(se, V),
            onPaste: V === 0 ? k : void 0,
            onFocus: W,
            disabled: I,
            autoFocus: $ && V === 0,
            className: g(
              ba({
                variant: n ? "error" : t,
                size: a,
                rounded: s
              })
            ),
            "aria-invalid": n
          },
          V
        )) }),
        n && o && /* @__PURE__ */ r("p", { className: "mt-1 text-xs text-danger self-start", children: o }),
        !n && i && /* @__PURE__ */ r("p", { className: "mt-1 text-xs text-neutral self-start", children: i }),
        c && /* @__PURE__ */ r("p", { className: "text-sm text-neutral-600", children: c }),
        h && /* @__PURE__ */ r(
          ue,
          {
            variant: b,
            disabled: z.length !== d || I,
            onClick: P,
            className: "mt-4",
            children: v
          }
        )
      ] })
    ] });
  }
);
ha.displayName = "InputOTP";
const at = {
  primary: "#007C99",
  // tailwind primary.DEFAULT
  secondary: "#CEEAE7",
  // tailwind secondary.DEFAULT
  danger: "#CA0000",
  // tailwind danger.DEFAULT
  warning: "#FF9319",
  // tailwind warning.DEFAULT
  info: "#0073E6",
  // tailwind info.DEFAULT
  success: "#00B37D",
  // tailwind success.DEFAULT
  disabled: "#959595"
  // tailwind disabled.DEFAULT
}, Ga = ({
  icon: e,
  className: t,
  color: a = "primary",
  value: s,
  maxValue: n = 99,
  children: o,
  ...i
}) => {
  const l = "top-0 right-0", c = typeof s == "number" && !isNaN(s);
  let m = "";
  c && (s > n ? m = `${n}+` : m = String(s));
  const h = c ? "px-2" : "", v = c ? "min-w-[20px]" : "w-2.5 h-2.5", b = c ? "h-5" : "h-2.5", d = typeof a == "string" && a in at ? at[a] : a;
  return /* @__PURE__ */ f("div", { className: g("relative inline-block", t), children: [
    o || (e ? /* @__PURE__ */ r(G, { icon: e, color: d, size: 32, ...i }) : null),
    /* @__PURE__ */ r(
      "span",
      {
        className: g(
          "absolute flex items-center justify-center rounded-xl bg-[#FF4C4C] text-white text-[10px] font-semibold",
          l,
          h,
          v,
          b,
          !c && "p-0",
          !c && "rounded-full"
        ),
        style: {
          transform: "translate(50%,-50%)"
        },
        children: c ? m : ""
      }
    )
  ] });
}, Fa = ({
  widgets: e,
  className: t
}) => /* @__PURE__ */ r("div", { className: g("w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", t), children: e.map((a, s) => /* @__PURE__ */ r(ga, { ...a }, s)) });
export {
  Na as Accordion,
  gr as AutoComplete,
  Ea as Avatar,
  Sa as Badge,
  Ga as BadgeNotif,
  ca as Breadcrumbs,
  ue as Button,
  _e as Card,
  za as Checkbox,
  Ma as Chip,
  Mr as DatePicker,
  Ir as Dialog,
  Rr as DialogActions,
  Dr as DialogBody,
  bt as DialogHeader,
  Ar as DialogTitle,
  Lr as Divider,
  Ha as ErrorWrapper,
  Ca as FileUpload,
  G as Icon,
  dt as Input,
  ha as InputOTP,
  Ia as Notification,
  Br as Pagination,
  la as PhoneInput,
  He as PrimitiveDatePicker,
  na as Progress,
  Aa as Radio,
  ht as Select,
  Le as SelectItem,
  Or as Skeleton,
  Da as Slider,
  Ra as StarRating,
  La as StatusIndicator,
  ja as Stepper,
  $a as Switch,
  Ba as Table,
  Pa as Tabs,
  Kr as Text,
  Zr as TimePicker,
  kt as Toast,
  Va as ToastProvider,
  Xr as Toggle,
  Ta as Tooltip,
  ga as WidgetCard,
  Fa as WidgetCardGroup,
  hr as buttonVariants,
  xr as cardVariants,
  g as cn,
  ba as inputOTPVariants,
  qr as toggleVariants,
  Oa as useToast
};
