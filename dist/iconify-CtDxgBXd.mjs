import I from "react";
const P = /^[a-z0-9]+(-[a-z0-9]+)*$/, M = (t, e, n, r = "") => {
  const o = t.split(":");
  if (t.slice(0, 1) === "@") {
    if (o.length < 2 || o.length > 3)
      return null;
    r = o.shift().slice(1);
  }
  if (o.length > 3 || !o.length)
    return null;
  if (o.length > 1) {
    const c = o.pop(), l = o.pop(), f = {
      // Allow provider without '@': "provider:prefix:name"
      provider: o.length > 0 ? o[0] : r,
      prefix: l,
      name: c
    };
    return e && !D(f) ? null : f;
  }
  const i = o[0], s = i.split("-");
  if (s.length > 1) {
    const c = {
      provider: r,
      prefix: s.shift(),
      name: s.join("-")
    };
    return e && !D(c) ? null : c;
  }
  if (n && r === "") {
    const c = {
      provider: r,
      prefix: "",
      name: i
    };
    return e && !D(c, n) ? null : c;
  }
  return null;
}, D = (t, e) => t ? !!((t.provider === "" || t.provider.match(P)) && (e && t.prefix === "" || t.prefix.match(P)) && t.name.match(P)) : !1, pt = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), R = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), O = Object.freeze({
  ...pt,
  ...R
}), K = Object.freeze({
  ...O,
  body: "",
  hidden: !1
});
function Dt(t, e) {
  const n = {};
  !t.hFlip != !e.hFlip && (n.hFlip = !0), !t.vFlip != !e.vFlip && (n.vFlip = !0);
  const r = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function rt(t, e) {
  const n = Dt(t, e);
  for (const r in K)
    r in R ? r in t && !(r in n) && (n[r] = R[r]) : r in e ? n[r] = e[r] : r in t && (n[r] = t[r]);
  return n;
}
function Nt(t, e) {
  const n = t.icons, r = t.aliases || /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  function i(s) {
    if (n[s])
      return o[s] = [];
    if (!(s in o)) {
      o[s] = null;
      const c = r[s] && r[s].parent, l = c && i(c);
      l && (o[s] = [c].concat(l));
    }
    return o[s];
  }
  return Object.keys(n).concat(Object.keys(r)).forEach(i), o;
}
function Rt(t, e, n) {
  const r = t.icons, o = t.aliases || /* @__PURE__ */ Object.create(null);
  let i = {};
  function s(c) {
    i = rt(
      r[c] || o[c],
      i
    );
  }
  return s(e), n.forEach(s), rt(t, i);
}
function gt(t, e) {
  const n = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return n;
  t.not_found instanceof Array && t.not_found.forEach((o) => {
    e(o, null), n.push(o);
  });
  const r = Nt(t);
  for (const o in r) {
    const i = r[o];
    i && (e(o, Rt(t, o, i)), n.push(o));
  }
  return n;
}
const Bt = {
  provider: "",
  aliases: {},
  not_found: {},
  ...pt
};
function $(t, e) {
  for (const n in e)
    if (n in t && typeof t[n] != typeof e[n])
      return !1;
  return !0;
}
function mt(t) {
  if (typeof t != "object" || t === null)
    return null;
  const e = t;
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !$(t, Bt))
    return null;
  const n = e.icons;
  for (const o in n) {
    const i = n[o];
    if (!o.match(P) || typeof i.body != "string" || !$(
      i,
      K
    ))
      return null;
  }
  const r = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const o in r) {
    const i = r[o], s = i.parent;
    if (!o.match(P) || typeof s != "string" || !n[s] && !r[s] || !$(
      i,
      K
    ))
      return null;
  }
  return e;
}
const B = /* @__PURE__ */ Object.create(null);
function Ht(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function S(t, e) {
  const n = B[t] || (B[t] = /* @__PURE__ */ Object.create(null));
  return n[e] || (n[e] = Ht(t, e));
}
function tt(t, e) {
  return mt(e) ? gt(e, (n, r) => {
    r ? t.icons[n] = r : t.missing.add(n);
  }) : [];
}
function Ut(t, e, n) {
  try {
    if (typeof n.body == "string")
      return t.icons[e] = { ...n }, !0;
  } catch {
  }
  return !1;
}
function Re(t, e) {
  let n = [];
  return (typeof t == "string" ? [t] : Object.keys(B)).forEach((o) => {
    (typeof o == "string" && typeof e == "string" ? [e] : Object.keys(B[o] || {})).forEach((s) => {
      const c = S(o, s);
      n = n.concat(
        Object.keys(c.icons).map(
          (l) => (o !== "" ? "@" + o + ":" : "") + s + ":" + l
        )
      );
    });
  }), n;
}
let E = !1;
function yt(t) {
  return typeof t == "boolean" && (E = t), E;
}
function U(t) {
  const e = typeof t == "string" ? M(t, !0, E) : t;
  if (e) {
    const n = S(e.provider, e.prefix), r = e.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function zt(t, e) {
  const n = M(t, !0, E);
  if (!n)
    return !1;
  const r = S(n.provider, n.prefix);
  return Ut(r, n.name, e);
}
function Qt(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), E && !e && !t.prefix) {
    let o = !1;
    return mt(t) && (t.prefix = "", gt(t, (i, s) => {
      s && zt(i, s) && (o = !0);
    })), o;
  }
  const n = t.prefix;
  if (!D({
    provider: e,
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = S(e, n);
  return !!tt(r, t);
}
function Be(t) {
  return !!U(t);
}
function He(t) {
  const e = U(t);
  return e ? {
    ...O,
    ...e
  } : null;
}
const bt = Object.freeze({
  width: null,
  height: null
}), wt = Object.freeze({
  // Dimensions
  ...bt,
  // Transformations
  ...R
}), qt = /(-?[0-9.]*[0-9]+[0-9.]*)/g, $t = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function it(t, e, n) {
  if (e === 1)
    return t;
  if (n = n || 100, typeof t == "number")
    return Math.ceil(t * e * n) / n;
  if (typeof t != "string")
    return t;
  const r = t.split(qt);
  if (r === null || !r.length)
    return t;
  const o = [];
  let i = r.shift(), s = $t.test(i);
  for (; ; ) {
    if (s) {
      const c = parseFloat(i);
      isNaN(c) ? o.push(i) : o.push(Math.ceil(c * e * n) / n);
    } else
      o.push(i);
    if (i = r.shift(), i === void 0)
      return o.join("");
    s = !s;
  }
}
const Vt = (t) => t === "unset" || t === "undefined" || t === "none";
function Kt(t, e) {
  const n = {
    ...O,
    ...t
  }, r = {
    ...wt,
    ...e
  }, o = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let i = n.body;
  [n, r].forEach((w) => {
    const g = [], C = w.hFlip, m = w.vFlip;
    let u = w.rotate;
    C ? m ? u += 2 : (g.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), g.push("scale(-1 1)"), o.top = o.left = 0) : m && (g.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), g.push("scale(1 -1)"), o.top = o.left = 0);
    let b;
    switch (u < 0 && (u -= Math.floor(u / 4) * 4), u = u % 4, u) {
      case 1:
        b = o.height / 2 + o.top, g.unshift(
          "rotate(90 " + b.toString() + " " + b.toString() + ")"
        );
        break;
      case 2:
        g.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        b = o.width / 2 + o.left, g.unshift(
          "rotate(-90 " + b.toString() + " " + b.toString() + ")"
        );
        break;
    }
    u % 2 === 1 && (o.left !== o.top && (b = o.left, o.left = o.top, o.top = b), o.width !== o.height && (b = o.width, o.width = o.height, o.height = b)), g.length && (i = '<g transform="' + g.join(" ") + '">' + i + "</g>");
  });
  const s = r.width, c = r.height, l = o.width, f = o.height;
  let a, d;
  s === null ? (d = c === null ? "1em" : c === "auto" ? f : c, a = it(d, l / f)) : (a = s === "auto" ? l : s, d = c === null ? it(a, f / l) : c === "auto" ? f : c);
  const p = {}, y = (w, g) => {
    Vt(g) || (p[w] = g.toString());
  };
  return y("width", a), y("height", d), p.viewBox = o.left.toString() + " " + o.top.toString() + " " + l.toString() + " " + f.toString(), {
    attributes: p,
    body: i
  };
}
const Wt = /\sid="(\S+)"/g, Gt = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Jt = 0;
function Xt(t, e = Gt) {
  const n = [];
  let r;
  for (; r = Wt.exec(t); )
    n.push(r[1]);
  if (!n.length)
    return t;
  const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((i) => {
    const s = typeof e == "function" ? e(i) : e + (Jt++).toString(), c = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])', "g"),
      "$1" + s + o + "$3"
    );
  }), t = t.replace(new RegExp(o, "g"), ""), t;
}
const W = /* @__PURE__ */ Object.create(null);
function xt(t, e) {
  W[t] = e;
}
function G(t) {
  return W[t] || W[""];
}
function et(t) {
  let e;
  if (typeof t.resources == "string")
    e = [t.resources];
  else if (e = t.resources, !(e instanceof Array) || !e.length)
    return null;
  return {
    // API hosts
    resources: e,
    // Root path
    path: t.path || "/",
    // URL length limit
    maxURL: t.maxURL || 500,
    // Timeout before next host is used.
    rotate: t.rotate || 750,
    // Timeout before failing query.
    timeout: t.timeout || 5e3,
    // Randomise default API end point.
    random: t.random === !0,
    // Start index
    index: t.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: t.dataAfterTimeout !== !1
  };
}
const z = /* @__PURE__ */ Object.create(null), _ = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], N = [];
for (; _.length > 0; )
  _.length === 1 || Math.random() > 0.5 ? N.push(_.shift()) : N.push(_.pop());
z[""] = et({
  resources: ["https://api.iconify.design"].concat(N)
});
function Yt(t, e) {
  const n = et(e);
  return n === null ? !1 : (z[t] = n, !0);
}
function Q(t) {
  return z[t];
}
function Zt() {
  return Object.keys(z);
}
const te = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let H = te();
function ee(t) {
  H = t;
}
function ne() {
  return H;
}
function oe(t, e) {
  const n = Q(t);
  if (!n)
    return 0;
  let r;
  if (!n.maxURL)
    r = 0;
  else {
    let o = 0;
    n.resources.forEach((s) => {
      o = Math.max(o, s.length);
    });
    const i = e + ".json?icons=";
    r = n.maxURL - o - n.path.length - i.length;
  }
  return r;
}
function re(t) {
  return t === 404;
}
const ie = (t, e, n) => {
  const r = [], o = oe(t, e), i = "icons";
  let s = {
    type: i,
    provider: t,
    prefix: e,
    icons: []
  }, c = 0;
  return n.forEach((l, f) => {
    c += l.length + 1, c >= o && f > 0 && (r.push(s), s = {
      type: i,
      provider: t,
      prefix: e,
      icons: []
    }, c = l.length), s.icons.push(l);
  }), r.push(s), r;
};
function se(t) {
  if (typeof t == "string") {
    const e = Q(t);
    if (e)
      return e.path;
  }
  return "/";
}
const ce = (t, e, n) => {
  if (!H) {
    n("abort", 424);
    return;
  }
  let r = se(e.provider);
  switch (e.type) {
    case "icons": {
      const i = e.prefix, c = e.icons.join(","), l = new URLSearchParams({
        icons: c
      });
      r += i + ".json?" + l.toString();
      break;
    }
    case "custom": {
      const i = e.uri;
      r += i.slice(0, 1) === "/" ? i.slice(1) : i;
      break;
    }
    default:
      n("abort", 400);
      return;
  }
  let o = 503;
  H(t + r).then((i) => {
    const s = i.status;
    if (s !== 200) {
      setTimeout(() => {
        n(re(s) ? "abort" : "next", s);
      });
      return;
    }
    return o = 501, i.json();
  }).then((i) => {
    if (typeof i != "object" || i === null) {
      setTimeout(() => {
        i === 404 ? n("abort", i) : n("next", o);
      });
      return;
    }
    setTimeout(() => {
      n("success", i);
    });
  }).catch(() => {
    n("next", o);
  });
}, le = {
  prepare: ie,
  send: ce
};
function fe(t) {
  const e = {
    loaded: [],
    missing: [],
    pending: []
  }, n = /* @__PURE__ */ Object.create(null);
  t.sort((o, i) => o.provider !== i.provider ? o.provider.localeCompare(i.provider) : o.prefix !== i.prefix ? o.prefix.localeCompare(i.prefix) : o.name.localeCompare(i.name));
  let r = {
    provider: "",
    prefix: "",
    name: ""
  };
  return t.forEach((o) => {
    if (r.name === o.name && r.prefix === o.prefix && r.provider === o.provider)
      return;
    r = o;
    const i = o.provider, s = o.prefix, c = o.name, l = n[i] || (n[i] = /* @__PURE__ */ Object.create(null)), f = l[s] || (l[s] = S(i, s));
    let a;
    c in f.icons ? a = e.loaded : s === "" || f.missing.has(c) ? a = e.missing : a = e.pending;
    const d = {
      provider: i,
      prefix: s,
      name: c
    };
    a.push(d);
  }), e;
}
function It(t, e) {
  t.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((o) => o.id !== e));
  });
}
function ae(t) {
  t.pendingCallbacksFlag || (t.pendingCallbacksFlag = !0, setTimeout(() => {
    t.pendingCallbacksFlag = !1;
    const e = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
    if (!e.length)
      return;
    let n = !1;
    const r = t.provider, o = t.prefix;
    e.forEach((i) => {
      const s = i.icons, c = s.pending.length;
      s.pending = s.pending.filter((l) => {
        if (l.prefix !== o)
          return !0;
        const f = l.name;
        if (t.icons[f])
          s.loaded.push({
            provider: r,
            prefix: o,
            name: f
          });
        else if (t.missing.has(f))
          s.missing.push({
            provider: r,
            prefix: o,
            name: f
          });
        else
          return n = !0, !0;
        return !1;
      }), s.pending.length !== c && (n || It([t], i.id), i.callback(
        s.loaded.slice(0),
        s.missing.slice(0),
        s.pending.slice(0),
        i.abort
      ));
    });
  }));
}
let ue = 0;
function de(t, e, n) {
  const r = ue++, o = It.bind(null, n, r);
  if (!e.pending.length)
    return o;
  const i = {
    id: r,
    icons: e,
    callback: t,
    abort: o
  };
  return n.forEach((s) => {
    (s.loaderCallbacks || (s.loaderCallbacks = [])).push(i);
  }), o;
}
function he(t, e = !0, n = !1) {
  const r = [];
  return t.forEach((o) => {
    const i = typeof o == "string" ? M(o, e, n) : o;
    i && r.push(i);
  }), r;
}
var pe = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function ge(t, e, n, r) {
  const o = t.resources.length, i = t.random ? Math.floor(Math.random() * o) : t.index;
  let s;
  if (t.random) {
    let h = t.resources.slice(0);
    for (s = []; h.length > 1; ) {
      const x = Math.floor(Math.random() * h.length);
      s.push(h[x]), h = h.slice(0, x).concat(h.slice(x + 1));
    }
    s = s.concat(h);
  } else
    s = t.resources.slice(i).concat(t.resources.slice(0, i));
  const c = Date.now();
  let l = "pending", f = 0, a, d = null, p = [], y = [];
  typeof r == "function" && y.push(r);
  function w() {
    d && (clearTimeout(d), d = null);
  }
  function g() {
    l === "pending" && (l = "aborted"), w(), p.forEach((h) => {
      h.status === "pending" && (h.status = "aborted");
    }), p = [];
  }
  function C(h, x) {
    x && (y = []), typeof h == "function" && y.push(h);
  }
  function m() {
    return {
      startTime: c,
      payload: e,
      status: l,
      queriesSent: f,
      queriesPending: p.length,
      subscribe: C,
      abort: g
    };
  }
  function u() {
    l = "failed", y.forEach((h) => {
      h(void 0, a);
    });
  }
  function b() {
    p.forEach((h) => {
      h.status === "pending" && (h.status = "aborted");
    }), p = [];
  }
  function At(h, x, T) {
    const F = x !== "success";
    switch (p = p.filter((v) => v !== h), l) {
      case "pending":
        break;
      case "failed":
        if (F || !t.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (x === "abort") {
      a = T, u();
      return;
    }
    if (F) {
      a = T, p.length || (s.length ? q() : u());
      return;
    }
    if (w(), b(), !t.random) {
      const v = t.resources.indexOf(h.resource);
      v !== -1 && v !== t.index && (t.index = v);
    }
    l = "completed", y.forEach((v) => {
      v(T);
    });
  }
  function q() {
    if (l !== "pending")
      return;
    w();
    const h = s.shift();
    if (h === void 0) {
      if (p.length) {
        d = setTimeout(() => {
          w(), l === "pending" && (b(), u());
        }, t.timeout);
        return;
      }
      u();
      return;
    }
    const x = {
      status: "pending",
      resource: h,
      callback: (T, F) => {
        At(x, T, F);
      }
    };
    p.push(x), f++, d = setTimeout(q, t.rotate), n(h, e, x.callback);
  }
  return setTimeout(q), m;
}
function St(t) {
  const e = {
    ...pe,
    ...t
  };
  let n = [];
  function r() {
    n = n.filter((c) => c().status === "pending");
  }
  function o(c, l, f) {
    const a = ge(
      e,
      c,
      l,
      (d, p) => {
        r(), f && f(d, p);
      }
    );
    return n.push(a), a;
  }
  function i(c) {
    return n.find((l) => c(l)) || null;
  }
  return {
    query: o,
    find: i,
    setIndex: (c) => {
      e.index = c;
    },
    getIndex: () => e.index,
    cleanup: r
  };
}
function st() {
}
const V = /* @__PURE__ */ Object.create(null);
function me(t) {
  if (!V[t]) {
    const e = Q(t);
    if (!e)
      return;
    const n = St(e), r = {
      config: e,
      redundancy: n
    };
    V[t] = r;
  }
  return V[t];
}
function vt(t, e, n) {
  let r, o;
  if (typeof t == "string") {
    const i = G(t);
    if (!i)
      return n(void 0, 424), st;
    o = i.send;
    const s = me(t);
    s && (r = s.redundancy);
  } else {
    const i = et(t);
    if (i) {
      r = St(i);
      const s = t.resources ? t.resources[0] : "", c = G(s);
      c && (o = c.send);
    }
  }
  return !r || !o ? (n(void 0, 424), st) : r.query(e, o, n)().abort;
}
const ct = "iconify2", L = "iconify", kt = L + "-count", lt = L + "-version", Ct = 36e5, ye = 168;
function J(t, e) {
  try {
    return t.getItem(e);
  } catch {
  }
}
function nt(t, e, n) {
  try {
    return t.setItem(e, n), !0;
  } catch {
  }
}
function ft(t, e) {
  try {
    t.removeItem(e);
  } catch {
  }
}
function X(t, e) {
  return nt(t, kt, e.toString());
}
function Y(t) {
  return parseInt(J(t, kt)) || 0;
}
const k = {
  local: !0,
  session: !0
}, Tt = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let ot = !1;
function be(t) {
  ot = t;
}
let A = typeof window > "u" ? {} : window;
function _t(t) {
  const e = t + "Storage";
  try {
    if (A && A[e] && typeof A[e].length == "number")
      return A[e];
  } catch {
  }
  k[t] = !1;
}
function Pt(t, e) {
  const n = _t(t);
  if (!n)
    return;
  const r = J(n, lt);
  if (r !== ct) {
    if (r) {
      const c = Y(n);
      for (let l = 0; l < c; l++)
        ft(n, L + l.toString());
    }
    nt(n, lt, ct), X(n, 0);
    return;
  }
  const o = Math.floor(Date.now() / Ct) - ye, i = (c) => {
    const l = L + c.toString(), f = J(n, l);
    if (typeof f == "string") {
      try {
        const a = JSON.parse(f);
        if (typeof a == "object" && typeof a.cached == "number" && a.cached > o && typeof a.provider == "string" && typeof a.data == "object" && typeof a.data.prefix == "string" && // Valid item: run callback
        e(a, c))
          return !0;
      } catch {
      }
      ft(n, l);
    }
  };
  let s = Y(n);
  for (let c = s - 1; c >= 0; c--)
    i(c) || (c === s - 1 ? (s--, X(n, s)) : Tt[t].add(c));
}
function jt() {
  if (!ot) {
    be(!0);
    for (const t in k)
      Pt(t, (e) => {
        const n = e.data, r = e.provider, o = n.prefix, i = S(
          r,
          o
        );
        if (!tt(i, n).length)
          return !1;
        const s = n.lastModified || -1;
        return i.lastModifiedCached = i.lastModifiedCached ? Math.min(i.lastModifiedCached, s) : s, !0;
      });
  }
}
function we(t, e) {
  const n = t.lastModifiedCached;
  if (
    // Matches or newer
    n && n >= e
  )
    return n === e;
  if (t.lastModifiedCached = e, n)
    for (const r in k)
      Pt(r, (o) => {
        const i = o.data;
        return o.provider !== t.provider || i.prefix !== t.prefix || i.lastModified === e;
      });
  return !0;
}
function xe(t, e) {
  ot || jt();
  function n(r) {
    let o;
    if (!k[r] || !(o = _t(r)))
      return;
    const i = Tt[r];
    let s;
    if (i.size)
      i.delete(s = Array.from(i).shift());
    else if (s = Y(o), !X(o, s + 1))
      return;
    const c = {
      cached: Math.floor(Date.now() / Ct),
      provider: t.provider,
      data: e
    };
    return nt(
      o,
      L + s.toString(),
      JSON.stringify(c)
    );
  }
  e.lastModified && !we(t, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), n("local") || n("session"));
}
function at() {
}
function Ie(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, ae(t);
  }));
}
function Se(t, e) {
  t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(e).sort() : t.iconsToLoad = e, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
    t.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = t, o = t.iconsToLoad;
    delete t.iconsToLoad;
    let i;
    if (!o || !(i = G(n)))
      return;
    i.prepare(n, r, o).forEach((c) => {
      vt(n, c, (l) => {
        if (typeof l != "object")
          c.icons.forEach((f) => {
            t.missing.add(f);
          });
        else
          try {
            const f = tt(
              t,
              l
            );
            if (!f.length)
              return;
            const a = t.pendingIcons;
            a && f.forEach((d) => {
              a.delete(d);
            }), xe(t, l);
          } catch (f) {
            console.error(f);
          }
        Ie(t);
      });
    });
  }));
}
const Et = (t, e) => {
  const n = he(t, !0, yt()), r = fe(n);
  if (!r.pending.length) {
    let l = !0;
    return e && setTimeout(() => {
      l && e(
        r.loaded,
        r.missing,
        r.pending,
        at
      );
    }), () => {
      l = !1;
    };
  }
  const o = /* @__PURE__ */ Object.create(null), i = [];
  let s, c;
  return r.pending.forEach((l) => {
    const { provider: f, prefix: a } = l;
    if (a === c && f === s)
      return;
    s = f, c = a, i.push(S(f, a));
    const d = o[f] || (o[f] = /* @__PURE__ */ Object.create(null));
    d[a] || (d[a] = []);
  }), r.pending.forEach((l) => {
    const { provider: f, prefix: a, name: d } = l, p = S(f, a), y = p.pendingIcons || (p.pendingIcons = /* @__PURE__ */ new Set());
    y.has(d) || (y.add(d), o[f][a].push(d));
  }), i.forEach((l) => {
    const { provider: f, prefix: a } = l;
    o[f][a].length && Se(l, o[f][a]);
  }), e ? de(e, r, i) : at;
}, Ue = (t) => new Promise((e, n) => {
  const r = typeof t == "string" ? M(t, !0) : t;
  if (!r) {
    n(t);
    return;
  }
  Et([r || t], (o) => {
    if (o.length && r) {
      const i = U(r);
      if (i) {
        e({
          ...O,
          ...i
        });
        return;
      }
    }
    n(t);
  });
});
function Lt(t, e) {
  switch (t) {
    case "local":
    case "session":
      k[t] = e;
      break;
    case "all":
      for (const n in k)
        k[n] = e;
      break;
  }
}
function ve(t, e) {
  const n = {
    ...t
  };
  for (const r in e) {
    const o = e[r], i = typeof o;
    r in bt ? (o === null || o && (i === "string" || i === "number")) && (n[r] = o) : i === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o);
  }
  return n;
}
const ke = /[\s,]+/;
function Ce(t, e) {
  e.split(ke).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        t.hFlip = !0;
        break;
      case "vertical":
        t.vFlip = !0;
        break;
    }
  });
}
function Te(t, e = 0) {
  const n = t.replace(/^-?[0-9.]*/, "");
  function r(o) {
    for (; o < 0; )
      o += 4;
    return o % 4;
  }
  if (n === "") {
    const o = parseInt(t);
    return isNaN(o) ? 0 : r(o);
  } else if (n !== t) {
    let o = 0;
    switch (n) {
      case "%":
        o = 25;
        break;
      case "deg":
        o = 90;
    }
    if (o) {
      let i = parseFloat(t.slice(0, t.length - n.length));
      return isNaN(i) ? 0 : (i = i / o, i % 1 === 0 ? r(i) : 0);
    }
  }
  return e;
}
function _e(t, e) {
  let n = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in e)
    n += " " + r + '="' + e[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + t + "</svg>";
}
function Pe(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function je(t) {
  return "data:image/svg+xml," + Pe(t);
}
function Ee(t) {
  return 'url("' + je(t) + '")';
}
let j;
function Le() {
  try {
    j = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (t) => t
    });
  } catch {
    j = null;
  }
}
function Me(t) {
  return j === void 0 && Le(), j ? j.createHTML(t) : t;
}
const Mt = {
  ...wt,
  inline: !1
}, Oe = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Fe = {
  display: "inline-block"
}, Z = {
  backgroundColor: "currentColor"
}, Ot = {
  backgroundColor: "transparent"
}, ut = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, dt = {
  WebkitMask: Z,
  mask: Z,
  background: Ot
};
for (const t in dt) {
  const e = dt[t];
  for (const n in ut)
    e[t + n] = ut[n];
}
const Ae = {
  ...Mt,
  inline: !0
};
function ht(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
const De = (t, e, n, r) => {
  const o = n ? Ae : Mt, i = ve(o, e), s = e.mode || "svg", c = {}, l = e.style || {}, f = {
    ...s === "svg" ? Oe : {},
    ref: r
  };
  for (let m in e) {
    const u = e[m];
    if (u !== void 0)
      switch (m) {
        case "icon":
        case "style":
        case "children":
        case "onLoad":
        case "mode":
        case "_ref":
        case "_inline":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          i[m] = u === !0 || u === "true" || u === 1;
          break;
        case "flip":
          typeof u == "string" && Ce(i, u);
          break;
        case "color":
          c.color = u;
          break;
        case "rotate":
          typeof u == "string" ? i[m] = Te(u) : typeof u == "number" && (i[m] = u);
          break;
        case "ariaHidden":
        case "aria-hidden":
          u !== !0 && u !== "true" && delete f["aria-hidden"];
          break;
        default:
          o[m] === void 0 && (f[m] = u);
      }
  }
  const a = Kt(t, i), d = a.attributes;
  if (i.inline && (c.verticalAlign = "-0.125em"), s === "svg") {
    f.style = {
      ...c,
      ...l
    }, Object.assign(f, d);
    let m = 0, u = e.id;
    return typeof u == "string" && (u = u.replace(/-/g, "_")), f.dangerouslySetInnerHTML = {
      __html: Me(Xt(a.body, u ? () => u + "ID" + m++ : "iconifyReact"))
    }, I.createElement("svg", f);
  }
  const { body: p, width: y, height: w } = t, g = s === "mask" || (s === "bg" ? !1 : p.indexOf("currentColor") !== -1), C = _e(p, {
    ...d,
    width: y + "",
    height: w + ""
  });
  return f.style = {
    ...c,
    "--svg": Ee(C),
    width: ht(d.width),
    height: ht(d.height),
    ...Fe,
    ...g ? Z : Ot,
    ...l
  }, I.createElement("span", f);
};
function ze(t) {
  Lt(t, !0);
}
function Qe(t) {
  Lt(t, !1);
}
yt(!0);
xt("", le);
if (typeof document < "u" && typeof window < "u") {
  jt();
  const t = window;
  if (t.IconifyPreload !== void 0) {
    const e = t.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof e == "object" && e !== null && (e instanceof Array ? e : [e]).forEach((r) => {
      try {
        // Check if item is an object and not null/array
        (typeof r != "object" || r === null || r instanceof Array || // Check for 'icons' and 'prefix'
        typeof r.icons != "object" || typeof r.prefix != "string" || // Add icon set
        !Qt(r)) && console.error(n);
      } catch {
        console.error(n);
      }
    });
  }
  if (t.IconifyProviders !== void 0) {
    const e = t.IconifyProviders;
    if (typeof e == "object" && e !== null)
      for (let n in e) {
        const r = "IconifyProviders[" + n + "] is invalid.";
        try {
          const o = e[n];
          if (typeof o != "object" || !o || o.resources === void 0)
            continue;
          Yt(n, o) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
class Ft extends I.Component {
  constructor(e) {
    super(e), this.state = {
      // Render placeholder before component is mounted
      icon: null
    };
  }
  /**
   * Abort loading icon
   */
  _abortLoading() {
    this._loading && (this._loading.abort(), this._loading = null);
  }
  /**
   * Update state
   */
  _setData(e) {
    this.state.icon !== e && this.setState({
      icon: e
    });
  }
  /**
   * Check if icon should be loaded
   */
  _checkIcon(e) {
    const n = this.state, r = this.props.icon;
    if (typeof r == "object" && r !== null && typeof r.body == "string") {
      this._icon = "", this._abortLoading(), (e || n.icon === null) && this._setData({
        data: r
      });
      return;
    }
    let o;
    if (typeof r != "string" || (o = M(r, !1, !0)) === null) {
      this._abortLoading(), this._setData(null);
      return;
    }
    const i = U(o);
    if (!i) {
      (!this._loading || this._loading.name !== r) && (this._abortLoading(), this._icon = "", this._setData(null), i !== null && (this._loading = {
        name: r,
        abort: Et([o], this._checkIcon.bind(this, !1))
      }));
      return;
    }
    if (this._icon !== r || n.icon === null) {
      this._abortLoading(), this._icon = r;
      const s = ["iconify"];
      o.prefix !== "" && s.push("iconify--" + o.prefix), o.provider !== "" && s.push("iconify--" + o.provider), this._setData({
        data: i,
        classes: s
      }), this.props.onLoad && this.props.onLoad(r);
    }
  }
  /**
   * Component mounted
   */
  componentDidMount() {
    this._checkIcon(!1);
  }
  /**
   * Component updated
   */
  componentDidUpdate(e) {
    e.icon !== this.props.icon && this._checkIcon(!0);
  }
  /**
   * Abort loading
   */
  componentWillUnmount() {
    this._abortLoading();
  }
  /**
   * Render
   */
  render() {
    const e = this.props, n = this.state.icon;
    if (n === null)
      return e.children ? e.children : I.createElement("span", {});
    let r = e;
    return n.classes && (r = {
      ...e,
      className: (typeof e.className == "string" ? e.className + " " : "") + n.classes.join(" ")
    }), De({
      ...O,
      ...n.data
    }, r, e._inline, e._ref);
  }
}
const qe = I.forwardRef(function(e, n) {
  const r = {
    ...e,
    _ref: n,
    _inline: !1
  };
  return I.createElement(Ft, r);
}), $e = I.forwardRef(function(e, n) {
  const r = {
    ...e,
    _ref: n,
    _inline: !0
  };
  return I.createElement(Ft, r);
}), Ve = {
  getAPIConfig: Q,
  setAPIModule: xt,
  sendAPIQuery: vt,
  setFetch: ee,
  getFetch: ne,
  listAPIProviders: Zt
};
export {
  qe as Icon,
  $e as InlineIcon,
  Ve as _api,
  Yt as addAPIProvider,
  Qt as addCollection,
  zt as addIcon,
  Kt as buildIcon,
  it as calculateSize,
  Qe as disableCache,
  ze as enableCache,
  He as getIcon,
  Be as iconExists,
  Re as listIcons,
  Ue as loadIcon,
  Et as loadIcons,
  Xt as replaceIDs
};
