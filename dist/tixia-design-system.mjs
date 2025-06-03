import Me, { useState as re, useEffect as Ne, forwardRef as ve, useRef as he, useCallback as Ae, Children as Nr, isValidElement as rr, cloneElement as jt, createContext as Nt, useContext as kt } from "react";
import { createPortal as ze } from "react-dom";
import le from "dayjs";
import { useReactTable as Et, getPaginationRowModel as Ct, getSortedRowModel as Rt, getCoreRowModel as St, flexRender as kr } from "@tanstack/react-table";
var Ir = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function zr(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ar = { exports: {} }, He = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Er;
function _t() {
  if (Er) return He;
  Er = 1;
  var r = Me, t = Symbol.for("react.element"), s = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(l, c, m) {
    var g, w = {}, p = null, u = null;
    m !== void 0 && (p = "" + m), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (u = c.ref);
    for (g in c) n.call(c, g) && !i.hasOwnProperty(g) && (w[g] = c[g]);
    if (l && l.defaultProps) for (g in c = l.defaultProps, c) w[g] === void 0 && (w[g] = c[g]);
    return { $$typeof: t, type: l, key: p, ref: u, props: w, _owner: a.current };
  }
  return He.Fragment = s, He.jsx = d, He.jsxs = d, He;
}
var Ye = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cr;
function Mt() {
  return Cr || (Cr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Me, t = Symbol.for("react.element"), s = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), u = Symbol.for("react.offscreen"), j = Symbol.iterator, v = "@@iterator";
    function f(o) {
      if (o === null || typeof o != "object")
        return null;
      var h = j && o[j] || o[v];
      return typeof h == "function" ? h : null;
    }
    var y = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(o) {
      {
        for (var h = arguments.length, _ = new Array(h > 1 ? h - 1 : 0), z = 1; z < h; z++)
          _[z - 1] = arguments[z];
        F("error", o, _);
      }
    }
    function F(o, h, _) {
      {
        var z = y.ReactDebugCurrentFrame, ee = z.getStackAddendum();
        ee !== "" && (h += "%s", _ = _.concat([ee]));
        var se = _.map(function(q) {
          return String(q);
        });
        se.unshift("Warning: " + h), Function.prototype.apply.call(console[o], console, se);
      }
    }
    var M = !1, O = !1, I = !1, D = !1, N = !1, S;
    S = Symbol.for("react.module.reference");
    function T(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === n || o === i || N || o === a || o === m || o === g || D || o === u || M || O || I || typeof o == "object" && o !== null && (o.$$typeof === p || o.$$typeof === w || o.$$typeof === d || o.$$typeof === l || o.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === S || o.getModuleId !== void 0));
    }
    function H(o, h, _) {
      var z = o.displayName;
      if (z)
        return z;
      var ee = h.displayName || h.name || "";
      return ee !== "" ? _ + "(" + ee + ")" : _;
    }
    function C(o) {
      return o.displayName || "Context";
    }
    function R(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case n:
          return "Fragment";
        case s:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case m:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case l:
            var h = o;
            return C(h) + ".Consumer";
          case d:
            var _ = o;
            return C(_._context) + ".Provider";
          case c:
            return H(o, o.render, "ForwardRef");
          case w:
            var z = o.displayName || null;
            return z !== null ? z : R(o.type) || "Memo";
          case p: {
            var ee = o, se = ee._payload, q = ee._init;
            try {
              return R(q(se));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, G = 0, k, E, $, te, ne, P, L;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function de() {
      {
        if (G === 0) {
          k = console.log, E = console.info, $ = console.warn, te = console.error, ne = console.group, P = console.groupCollapsed, L = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        G++;
      }
    }
    function xe() {
      {
        if (G--, G === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, o, {
              value: k
            }),
            info: A({}, o, {
              value: E
            }),
            warn: A({}, o, {
              value: $
            }),
            error: A({}, o, {
              value: te
            }),
            group: A({}, o, {
              value: ne
            }),
            groupCollapsed: A({}, o, {
              value: P
            }),
            groupEnd: A({}, o, {
              value: L
            })
          });
        }
        G < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = y.ReactCurrentDispatcher, B;
    function Z(o, h, _) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (ee) {
            var z = ee.stack.trim().match(/\n( *(at )?)/);
            B = z && z[1] || "";
          }
        return `
` + B + o;
      }
    }
    var X = !1, me;
    {
      var pe = typeof WeakMap == "function" ? WeakMap : Map;
      me = new pe();
    }
    function V(o, h) {
      if (!o || X)
        return "";
      {
        var _ = me.get(o);
        if (_ !== void 0)
          return _;
      }
      var z;
      X = !0;
      var ee = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var se;
      se = ie.current, ie.current = null, de();
      try {
        if (h) {
          var q = function() {
            throw Error();
          };
          if (Object.defineProperty(q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(q, []);
            } catch (ke) {
              z = ke;
            }
            Reflect.construct(o, [], q);
          } else {
            try {
              q.call();
            } catch (ke) {
              z = ke;
            }
            o.call(q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ke) {
            z = ke;
          }
          o();
        }
      } catch (ke) {
        if (ke && z && typeof ke.stack == "string") {
          for (var K = ke.stack.split(`
`), je = z.stack.split(`
`), fe = K.length - 1, ge = je.length - 1; fe >= 1 && ge >= 0 && K[fe] !== je[ge]; )
            ge--;
          for (; fe >= 1 && ge >= 0; fe--, ge--)
            if (K[fe] !== je[ge]) {
              if (fe !== 1 || ge !== 1)
                do
                  if (fe--, ge--, ge < 0 || K[fe] !== je[ge]) {
                    var Re = `
` + K[fe].replace(" at new ", " at ");
                    return o.displayName && Re.includes("<anonymous>") && (Re = Re.replace("<anonymous>", o.displayName)), typeof o == "function" && me.set(o, Re), Re;
                  }
                while (fe >= 1 && ge >= 0);
              break;
            }
        }
      } finally {
        X = !1, ie.current = se, xe(), Error.prepareStackTrace = ee;
      }
      var Le = o ? o.displayName || o.name : "", Ie = Le ? Z(Le) : "";
      return typeof o == "function" && me.set(o, Ie), Ie;
    }
    function U(o, h, _) {
      return V(o, !1);
    }
    function oe(o) {
      var h = o.prototype;
      return !!(h && h.isReactComponent);
    }
    function Q(o, h, _) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return V(o, oe(o));
      if (typeof o == "string")
        return Z(o);
      switch (o) {
        case m:
          return Z("Suspense");
        case g:
          return Z("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case c:
            return U(o.render);
          case w:
            return Q(o.type, h, _);
          case p: {
            var z = o, ee = z._payload, se = z._init;
            try {
              return Q(se(ee), h, _);
            } catch {
            }
          }
        }
      return "";
    }
    var ue = Object.prototype.hasOwnProperty, we = {}, _e = y.ReactDebugCurrentFrame;
    function Ce(o) {
      if (o) {
        var h = o._owner, _ = Q(o.type, o._source, h ? h.type : null);
        _e.setExtraStackFrame(_);
      } else
        _e.setExtraStackFrame(null);
    }
    function Ke(o, h, _, z, ee) {
      {
        var se = Function.call.bind(ue);
        for (var q in o)
          if (se(o, q)) {
            var K = void 0;
            try {
              if (typeof o[q] != "function") {
                var je = Error((z || "React class") + ": " + _ + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw je.name = "Invariant Violation", je;
              }
              K = o[q](h, q, z, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (fe) {
              K = fe;
            }
            K && !(K instanceof Error) && (Ce(ee), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", z || "React class", _, q, typeof K), Ce(null)), K instanceof Error && !(K.message in we) && (we[K.message] = !0, Ce(ee), x("Failed %s type: %s", _, K.message), Ce(null));
          }
      }
    }
    var Ze = Array.isArray;
    function We(o) {
      return Ze(o);
    }
    function Oe(o) {
      {
        var h = typeof Symbol == "function" && Symbol.toStringTag, _ = h && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return _;
      }
    }
    function st(o) {
      try {
        return ur(o), !1;
      } catch {
        return !0;
      }
    }
    function ur(o) {
      return "" + o;
    }
    function mr(o) {
      if (st(o))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Oe(o)), ur(o);
    }
    var fr = y.ReactCurrentOwner, nt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, gr, pr;
    function ot(o) {
      if (ue.call(o, "ref")) {
        var h = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function at(o) {
      if (ue.call(o, "key")) {
        var h = Object.getOwnPropertyDescriptor(o, "key").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function it(o, h) {
      typeof o.ref == "string" && fr.current;
    }
    function lt(o, h) {
      {
        var _ = function() {
          gr || (gr = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        _.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function ct(o, h) {
      {
        var _ = function() {
          pr || (pr = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        _.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var dt = function(o, h, _, z, ee, se, q) {
      var K = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: h,
        ref: _,
        props: q,
        // Record the component responsible for creating this element.
        _owner: se
      };
      return K._store = {}, Object.defineProperty(K._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(K, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.defineProperty(K, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ee
      }), Object.freeze && (Object.freeze(K.props), Object.freeze(K)), K;
    };
    function ut(o, h, _, z, ee) {
      {
        var se, q = {}, K = null, je = null;
        _ !== void 0 && (mr(_), K = "" + _), at(h) && (mr(h.key), K = "" + h.key), ot(h) && (je = h.ref, it(h, ee));
        for (se in h)
          ue.call(h, se) && !nt.hasOwnProperty(se) && (q[se] = h[se]);
        if (o && o.defaultProps) {
          var fe = o.defaultProps;
          for (se in fe)
            q[se] === void 0 && (q[se] = fe[se]);
        }
        if (K || je) {
          var ge = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          K && lt(q, ge), je && ct(q, ge);
        }
        return dt(o, K, je, ee, z, fr.current, q);
      }
    }
    var Je = y.ReactCurrentOwner, br = y.ReactDebugCurrentFrame;
    function $e(o) {
      if (o) {
        var h = o._owner, _ = Q(o.type, o._source, h ? h.type : null);
        br.setExtraStackFrame(_);
      } else
        br.setExtraStackFrame(null);
    }
    var Xe;
    Xe = !1;
    function Qe(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function xr() {
      {
        if (Je.current) {
          var o = R(Je.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function mt(o) {
      return "";
    }
    var hr = {};
    function ft(o) {
      {
        var h = xr();
        if (!h) {
          var _ = typeof o == "string" ? o : o.displayName || o.name;
          _ && (h = `

Check the top-level render call using <` + _ + ">.");
        }
        return h;
      }
    }
    function vr(o, h) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var _ = ft(h);
        if (hr[_])
          return;
        hr[_] = !0;
        var z = "";
        o && o._owner && o._owner !== Je.current && (z = " It was passed a child from " + R(o._owner.type) + "."), $e(o), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, z), $e(null);
      }
    }
    function yr(o, h) {
      {
        if (typeof o != "object")
          return;
        if (We(o))
          for (var _ = 0; _ < o.length; _++) {
            var z = o[_];
            Qe(z) && vr(z, h);
          }
        else if (Qe(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var ee = f(o);
          if (typeof ee == "function" && ee !== o.entries)
            for (var se = ee.call(o), q; !(q = se.next()).done; )
              Qe(q.value) && vr(q.value, h);
        }
      }
    }
    function gt(o) {
      {
        var h = o.type;
        if (h == null || typeof h == "string")
          return;
        var _;
        if (typeof h == "function")
          _ = h.propTypes;
        else if (typeof h == "object" && (h.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        h.$$typeof === w))
          _ = h.propTypes;
        else
          return;
        if (_) {
          var z = R(h);
          Ke(_, o.props, "prop", z, o);
        } else if (h.PropTypes !== void 0 && !Xe) {
          Xe = !0;
          var ee = R(h);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ee || "Unknown");
        }
        typeof h.getDefaultProps == "function" && !h.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pt(o) {
      {
        for (var h = Object.keys(o.props), _ = 0; _ < h.length; _++) {
          var z = h[_];
          if (z !== "children" && z !== "key") {
            $e(o), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", z), $e(null);
            break;
          }
        }
        o.ref !== null && ($e(o), x("Invalid attribute `ref` supplied to `React.Fragment`."), $e(null));
      }
    }
    var wr = {};
    function jr(o, h, _, z, ee, se) {
      {
        var q = T(o);
        if (!q) {
          var K = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (K += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var je = mt();
          je ? K += je : K += xr();
          var fe;
          o === null ? fe = "null" : We(o) ? fe = "array" : o !== void 0 && o.$$typeof === t ? (fe = "<" + (R(o.type) || "Unknown") + " />", K = " Did you accidentally export a JSX literal instead of a component?") : fe = typeof o, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", fe, K);
        }
        var ge = ut(o, h, _, ee, se);
        if (ge == null)
          return ge;
        if (q) {
          var Re = h.children;
          if (Re !== void 0)
            if (z)
              if (We(Re)) {
                for (var Le = 0; Le < Re.length; Le++)
                  yr(Re[Le], o);
                Object.freeze && Object.freeze(Re);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yr(Re, o);
        }
        if (ue.call(h, "key")) {
          var Ie = R(o), ke = Object.keys(h).filter(function(wt) {
            return wt !== "key";
          }), er = ke.length > 0 ? "{key: someKey, " + ke.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!wr[Ie + er]) {
            var yt = ke.length > 0 ? "{" + ke.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, er, Ie, yt, Ie), wr[Ie + er] = !0;
          }
        }
        return o === n ? pt(ge) : gt(ge), ge;
      }
    }
    function bt(o, h, _) {
      return jr(o, h, _, !0);
    }
    function xt(o, h, _) {
      return jr(o, h, _, !1);
    }
    var ht = xt, vt = bt;
    Ye.Fragment = n, Ye.jsx = ht, Ye.jsxs = vt;
  }()), Ye;
}
process.env.NODE_ENV === "production" ? ar.exports = _t() : ar.exports = Mt();
var e = ar.exports;
function $r(r) {
  var t, s, n = "";
  if (typeof r == "string" || typeof r == "number") n += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var a = r.length;
    for (t = 0; t < a; t++) r[t] && (s = $r(r[t])) && (n && (n += " "), n += s);
  } else for (s in r) r[s] && (n && (n += " "), n += s);
  return n;
}
function J() {
  for (var r, t, s = 0, n = "", a = arguments.length; s < a; s++) (r = arguments[s]) && (t = $r(r)) && (n && (n += " "), n += t);
  return n;
}
const Rr = (r) => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r, Sr = J, ye = (r, t) => (s) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return Sr(r, s == null ? void 0 : s.class, s == null ? void 0 : s.className);
  const { variants: a, defaultVariants: i } = t, d = Object.keys(a).map((m) => {
    const g = s == null ? void 0 : s[m], w = i == null ? void 0 : i[m];
    if (g === null) return null;
    const p = Rr(g) || Rr(w);
    return a[m][p];
  }), l = s && Object.entries(s).reduce((m, g) => {
    let [w, p] = g;
    return p === void 0 || (m[w] = p), m;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((m, g) => {
    let { class: w, className: p, ...u } = g;
    return Object.entries(u).every((j) => {
      let [v, f] = j;
      return Array.isArray(f) ? f.includes({
        ...i,
        ...l
      }[v]) : {
        ...i,
        ...l
      }[v] === f;
    }) ? [
      ...m,
      w,
      p
    ] : m;
  }, []);
  return Sr(r, d, c, s == null ? void 0 : s.class, s == null ? void 0 : s.className);
}, dr = "-", Tt = (r) => {
  const t = Pt(r), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: n
  } = r;
  return {
    getClassGroupId: (d) => {
      const l = d.split(dr);
      return l[0] === "" && l.length !== 1 && l.shift(), Lr(l, t) || At(d);
    },
    getConflictingClassGroupIds: (d, l) => {
      const c = s[d] || [];
      return l && n[d] ? [...c, ...n[d]] : c;
    }
  };
}, Lr = (r, t) => {
  var d;
  if (r.length === 0)
    return t.classGroupId;
  const s = r[0], n = t.nextPart.get(s), a = n ? Lr(r.slice(1), n) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const i = r.join(dr);
  return (d = t.validators.find(({
    validator: l
  }) => l(i))) == null ? void 0 : d.classGroupId;
}, _r = /^\[(.+)\]$/, At = (r) => {
  if (_r.test(r)) {
    const t = _r.exec(r)[1], s = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (s)
      return "arbitrary.." + s;
  }
}, Pt = (r) => {
  const {
    theme: t,
    prefix: s
  } = r, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ot(Object.entries(r.classGroups), s).forEach(([i, d]) => {
    ir(d, n, i, t);
  }), n;
}, ir = (r, t, s, n) => {
  r.forEach((a) => {
    if (typeof a == "string") {
      const i = a === "" ? t : Mr(t, a);
      i.classGroupId = s;
      return;
    }
    if (typeof a == "function") {
      if (Dt(a)) {
        ir(a(n), t, s, n);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: s
      });
      return;
    }
    Object.entries(a).forEach(([i, d]) => {
      ir(d, Mr(t, i), s, n);
    });
  });
}, Mr = (r, t) => {
  let s = r;
  return t.split(dr).forEach((n) => {
    s.nextPart.has(n) || s.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), s = s.nextPart.get(n);
  }), s;
}, Dt = (r) => r.isThemeGetter, Ot = (r, t) => t ? r.map(([s, n]) => {
  const a = n.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([d, l]) => [t + d, l])) : i);
  return [s, a];
}) : r, It = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, s = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const a = (i, d) => {
    s.set(i, d), t++, t > r && (t = 0, n = s, s = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let d = s.get(i);
      if (d !== void 0)
        return d;
      if ((d = n.get(i)) !== void 0)
        return a(i, d), d;
    },
    set(i, d) {
      s.has(i) ? s.set(i, d) : a(i, d);
    }
  };
}, Vr = "!", zt = (r) => {
  const {
    separator: t,
    experimentalParseClassName: s
  } = r, n = t.length === 1, a = t[0], i = t.length, d = (l) => {
    const c = [];
    let m = 0, g = 0, w;
    for (let f = 0; f < l.length; f++) {
      let y = l[f];
      if (m === 0) {
        if (y === a && (n || l.slice(f, f + i) === t)) {
          c.push(l.slice(g, f)), g = f + i;
          continue;
        }
        if (y === "/") {
          w = f;
          continue;
        }
      }
      y === "[" ? m++ : y === "]" && m--;
    }
    const p = c.length === 0 ? l : l.substring(g), u = p.startsWith(Vr), j = u ? p.substring(1) : p, v = w && w > g ? w - g : void 0;
    return {
      modifiers: c,
      hasImportantModifier: u,
      baseClassName: j,
      maybePostfixModifierPosition: v
    };
  };
  return s ? (l) => s({
    className: l,
    parseClassName: d
  }) : d;
}, $t = (r) => {
  if (r.length <= 1)
    return r;
  const t = [];
  let s = [];
  return r.forEach((n) => {
    n[0] === "[" ? (t.push(...s.sort(), n), s = []) : s.push(n);
  }), t.push(...s.sort()), t;
}, Lt = (r) => ({
  cache: It(r.cacheSize),
  parseClassName: zt(r),
  ...Tt(r)
}), Vt = /\s+/, Ft = (r, t) => {
  const {
    parseClassName: s,
    getClassGroupId: n,
    getConflictingClassGroupIds: a
  } = t, i = [], d = r.trim().split(Vt);
  let l = "";
  for (let c = d.length - 1; c >= 0; c -= 1) {
    const m = d[c], {
      modifiers: g,
      hasImportantModifier: w,
      baseClassName: p,
      maybePostfixModifierPosition: u
    } = s(m);
    let j = !!u, v = n(j ? p.substring(0, u) : p);
    if (!v) {
      if (!j) {
        l = m + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (v = n(p), !v) {
        l = m + (l.length > 0 ? " " + l : l);
        continue;
      }
      j = !1;
    }
    const f = $t(g).join(":"), y = w ? f + Vr : f, x = y + v;
    if (i.includes(x))
      continue;
    i.push(x);
    const F = a(v, j);
    for (let M = 0; M < F.length; ++M) {
      const O = F[M];
      i.push(y + O);
    }
    l = m + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Bt() {
  let r = 0, t, s, n = "";
  for (; r < arguments.length; )
    (t = arguments[r++]) && (s = Fr(t)) && (n && (n += " "), n += s);
  return n;
}
const Fr = (r) => {
  if (typeof r == "string")
    return r;
  let t, s = "";
  for (let n = 0; n < r.length; n++)
    r[n] && (t = Fr(r[n])) && (s && (s += " "), s += t);
  return s;
};
function Wt(r, ...t) {
  let s, n, a, i = d;
  function d(c) {
    const m = t.reduce((g, w) => w(g), r());
    return s = Lt(m), n = s.cache.get, a = s.cache.set, i = l, l(c);
  }
  function l(c) {
    const m = n(c);
    if (m)
      return m;
    const g = Ft(c, s);
    return a(c, g), g;
  }
  return function() {
    return i(Bt.apply(null, arguments));
  };
}
const ae = (r) => {
  const t = (s) => s[r] || [];
  return t.isThemeGetter = !0, t;
}, Br = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ht = /^\d+\/\d+$/, Yt = /* @__PURE__ */ new Set(["px", "full", "screen"]), Gt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ut = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Kt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Zt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, qt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Te = (r) => Ve(r) || Yt.has(r) || Ht.test(r), Pe = (r) => Be(r, "length", ns), Ve = (r) => !!r && !Number.isNaN(Number(r)), tr = (r) => Be(r, "number", Ve), Ge = (r) => !!r && Number.isInteger(Number(r)), Jt = (r) => r.endsWith("%") && Ve(r.slice(0, -1)), W = (r) => Br.test(r), De = (r) => Gt.test(r), Xt = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Qt = (r) => Be(r, Xt, Wr), es = (r) => Be(r, "position", Wr), rs = /* @__PURE__ */ new Set(["image", "url"]), ts = (r) => Be(r, rs, as), ss = (r) => Be(r, "", os), Ue = () => !0, Be = (r, t, s) => {
  const n = Br.exec(r);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : s(n[2]) : !1;
}, ns = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ut.test(r) && !Kt.test(r)
), Wr = () => !1, os = (r) => Zt.test(r), as = (r) => qt.test(r), is = () => {
  const r = ae("colors"), t = ae("spacing"), s = ae("blur"), n = ae("brightness"), a = ae("borderColor"), i = ae("borderRadius"), d = ae("borderSpacing"), l = ae("borderWidth"), c = ae("contrast"), m = ae("grayscale"), g = ae("hueRotate"), w = ae("invert"), p = ae("gap"), u = ae("gradientColorStops"), j = ae("gradientColorStopPositions"), v = ae("inset"), f = ae("margin"), y = ae("opacity"), x = ae("padding"), F = ae("saturate"), M = ae("scale"), O = ae("sepia"), I = ae("skew"), D = ae("space"), N = ae("translate"), S = () => ["auto", "contain", "none"], T = () => ["auto", "hidden", "clip", "visible", "scroll"], H = () => ["auto", W, t], C = () => [W, t], R = () => ["", Te, Pe], A = () => ["auto", Ve, W], G = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], k = () => ["solid", "dashed", "dotted", "double", "none"], E = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], $ = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], te = () => ["", "0", W], ne = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], P = () => [Ve, W];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Ue],
      spacing: [Te, Pe],
      blur: ["none", "", De, W],
      brightness: P(),
      borderColor: [r],
      borderRadius: ["none", "", "full", De, W],
      borderSpacing: C(),
      borderWidth: R(),
      contrast: P(),
      grayscale: te(),
      hueRotate: P(),
      invert: te(),
      gap: C(),
      gradientColorStops: [r],
      gradientColorStopPositions: [Jt, Pe],
      inset: H(),
      margin: H(),
      opacity: P(),
      padding: C(),
      saturate: P(),
      scale: P(),
      sepia: te(),
      skew: P(),
      space: C(),
      translate: C()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", W]
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
        columns: [De]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ne()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ne()
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
        object: [...G(), W]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: T()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": T()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": T()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: S()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": S()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": S()
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
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
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
        z: ["auto", Ge, W]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: H()
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
        flex: ["1", "auto", "initial", "none", W]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: te()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: te()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ge, W]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Ue]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ge, W]
        }, W]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": A()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": A()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Ue]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ge, W]
        }, W]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": A()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": A()
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
        "auto-cols": ["auto", "min", "max", "fr", W]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", W]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [p]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [p]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [p]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...$()]
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
        content: ["normal", ...$(), "baseline"]
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
        "place-content": [...$(), "baseline"]
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
        p: [x]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [x]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [x]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [x]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [x]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [x]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [x]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [x]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [x]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [f]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [f]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [f]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [f]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [f]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [f]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [f]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [f]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [f]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [D]
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
        "space-y": [D]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", W, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [W, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [W, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [De]
        }, De]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [W, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [W, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [W, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [W, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", De, Pe]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", tr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ue]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", W]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ve, tr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Te, W]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", W]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", W]
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
        placeholder: [r]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [y]
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
        text: [r]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [y]
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
        decoration: [...k(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Te, Pe]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Te, W]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [r]
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
        indent: C()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", W]
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
        content: ["none", W]
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
        "bg-opacity": [y]
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
        bg: [...G(), es]
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
        bg: ["auto", "cover", "contain", Qt]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ts]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [r]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [j]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [j]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [j]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [u]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [u]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [u]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
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
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...k(), "hidden"]
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
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: k()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [a]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...k()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Te, W]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Te, Pe]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [r]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: R()
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
        ring: [r]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Te, Pe]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [r]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", De, ss]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ue]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...E(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": E()
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
        blur: [s]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
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
        "drop-shadow": ["", "none", De, W]
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
        "hue-rotate": [g]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [w]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [F]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [O]
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
        "backdrop-blur": [s]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
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
        "backdrop-hue-rotate": [g]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [w]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [F]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [O]
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
        "border-spacing": [d]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [d]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [d]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", W]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: P()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", W]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: P()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", W]
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
        scale: [M]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [M]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [M]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ge, W]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [N]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [N]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [I]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [I]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", W]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", r]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", W]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [r]
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
        "scroll-m": C()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": C()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": C()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": C()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": C()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": C()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": C()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": C()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": C()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": C()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": C()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": C()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": C()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": C()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": C()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": C()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": C()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": C()
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
        "will-change": ["auto", "scroll", "contents", "transform", W]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [r, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Te, Pe, tr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [r, "none"]
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
}, Fe = /* @__PURE__ */ Wt(is);
function b(...r) {
  return Fe(J(r));
}
const Y = ({
  icon: r,
  className: t,
  size: s,
  color: n,
  rotate: a,
  flip: i,
  spin: d,
  inline: l = !0,
  mode: c = "svg",
  ...m
}) => {
  const [g, w] = re(null), [p, u] = re(!0), [j, v] = re(null);
  return Ne(() => {
    let f = !0;
    return (async () => {
      try {
        const { Icon: x } = await import("./iconify-Dqt3MVen.mjs");
        f && (w(() => x), u(!1));
      } catch (x) {
        console.error("Failed to load icon:", x), f && (v(x), u(!1));
      }
    })(), () => {
      f = !1;
    };
  }, []), p ? /* @__PURE__ */ e.jsx("span", { style: { width: s, height: s } }) : j || !g ? null : /* @__PURE__ */ e.jsx(
    g,
    {
      icon: r,
      className: b(
        d && "animate-spin",
        t
      ),
      style: {
        color: n,
        transform: `rotate(${a || 0}deg)`
      },
      height: s,
      width: s,
      flip: i,
      inline: l,
      mode: c,
      ...m
    }
  );
}, ls = ye(
  "border bg-white px-3 py-2 ring-0 transition-colors placeholder:text-neutral-500 placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50",
        error: "border-danger-500 hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50",
        success: "border-success-500 hover:border-success-600 focus:border-success-600 hover:bg-success-50",
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
), Hr = ve(
  ({
    className: r,
    variant: t = "default",
    size: s = "md",
    rounded: n = "md",
    error: a = !1,
    errorText: i,
    helperText: d,
    label: l,
    required: c = !1,
    labelPlacement: m = "top",
    fullWidth: g = !1,
    leftIcon: w,
    rightIcon: p,
    id: u,
    ...j
  }, v) => {
    const f = u || Me.useId(), y = `${f}-helper`, x = `${f}-error`, F = /* @__PURE__ */ e.jsxs("div", { className: b("relative", !g && "inline-block"), children: [
      w && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ e.jsx(Y, { icon: w, className: "w-4 h-4" }) }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          id: f,
          type: "text",
          ref: v,
          className: b(
            ls({ variant: a ? "error" : t, size: s, rounded: n, fullWidth: g }),
            w && "pl-10",
            p && "pr-10",
            r
          ),
          "aria-describedby": a ? x : d ? y : void 0,
          "aria-invalid": a,
          "aria-required": c,
          ...j
        }
      ),
      p && /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ e.jsx(Y, { icon: p, className: "w-4 h-4" }) })
    ] }), M = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      a && i && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger-500", id: x, children: i }),
      !a && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral-500", id: y, children: d })
    ] });
    return m === "left" ? /* @__PURE__ */ e.jsx("div", { className: b(g ? "w-full" : "inline-block", r), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
      l && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: f,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            l,
            c && /* @__PURE__ */ e.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: b("flex-1", !g && "inline-block"), children: [
        F,
        M
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: b(g ? "w-full" : "inline-block", r), children: [
      l && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: f,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            l,
            c && /* @__PURE__ */ e.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
          ]
        }
      ),
      F,
      M
    ] });
  }
);
Hr.displayName = "Input";
const qe = Me.forwardRef(
  ({ className: r, children: t, selected: s, disabled: n, ...a }, i) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: i,
      className: b(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
        "hover:bg-primary-50",
        s && "bg-primary-50 text-primary-900",
        n && "pointer-events-none opacity-50",
        r
      ),
      ...a,
      children: t
    }
  )
);
qe.displayName = "SelectItem";
const Yr = typeof window < "u", Ee = () => Yr ? window : {
  innerHeight: 0,
  innerWidth: 0,
  addEventListener: () => {
  },
  removeEventListener: () => {
  }
}, be = () => Yr ? document : {
  addEventListener: () => {
  },
  removeEventListener: () => {
  },
  dispatchEvent: () => {
  }
}, sr = "autocomplete-dropdown-opened", cs = ye(
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
), ds = ve(
  ({
    className: r,
    options: t,
    onSelect: s,
    isOpen: n,
    dropdownPosition: a = "bottom",
    loading: i = !1,
    renderOption: d,
    variant: l = "default",
    size: c = "md",
    rounded: m = "md",
    leftIcon: g,
    rightIcon: w,
    error: p = !1,
    errorText: u,
    helperText: j,
    label: v,
    required: f = !1,
    labelPlacement: y = "top",
    fullWidth: x = !1,
    value: F,
    onChange: M,
    onFocus: O,
    onBlur: I,
    showClear: D = !1,
    onClear: N,
    ...S
  }, T) => {
    const [H, C] = re(!1), [R, A] = re(F || ""), G = he(null), k = he(null), E = he(null), $ = n !== void 0, ne = `autocomplete-${Me.useId().replace(/:/g, "")}`, P = () => {
      if (!H || !k.current || !E.current) return;
      const { bottom: V, top: U, left: oe, width: Q } = k.current.getBoundingClientRect(), ue = E.current, we = Ee(), _e = {
        position: "fixed",
        left: `${oe}px`,
        width: `${Q}px`
      }, Ce = a === "bottom" ? {
        ..._e,
        top: `${V + 4}px`,
        maxHeight: `${we.innerHeight - V - 8}px`
      } : {
        ..._e,
        bottom: `${we.innerHeight - U + 4}px`,
        maxHeight: `${U - 8}px`
      };
      Object.assign(ue.style, Ce);
    };
    Ne(() => {
      const V = Ee(), U = be(), oe = () => {
        H && P();
      }, Q = () => {
        H && P();
      }, ue = (_e) => {
        _e.detail.id !== ne && C(!1);
      }, we = (_e) => {
        const Ce = _e.target;
        G.current && !G.current.contains(Ce) && E.current && !E.current.contains(Ce) && C(!1);
      };
      return H && (P(), V.addEventListener("scroll", oe, !0), V.addEventListener("resize", Q)), U.addEventListener(sr, ue), U.addEventListener("click", we), () => {
        V.removeEventListener("scroll", oe, !0), V.removeEventListener("resize", Q), U.removeEventListener(sr, ue), U.removeEventListener("click", we);
      };
    }, [H, ne]), Ne(() => {
      A(F || "");
    }, [F]);
    const L = (V) => {
      const { value: U } = V.target;
      if (A(U), !U.trim()) {
        C(!1);
        return;
      }
      C(!0), M == null || M(V);
    }, ce = (V) => {
      V.stopPropagation(), A(""), N == null || N();
      const U = new Event("change");
      U.target = { value: "" }, M == null || M(U);
    }, de = (V) => {
      var ue;
      if (!V) return;
      const { value: U, label: oe } = V;
      A(oe), C(!1), s == null || s(U);
      const Q = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: V }
      });
      (ue = k.current) == null || ue.dispatchEvent(Q);
    }, xe = (V) => {
      $ || (be().dispatchEvent(
        new CustomEvent(sr, {
          detail: { id: ne }
        })
      ), C(!0)), O == null || O(V);
    }, ie = (V) => {
      I == null || I(V);
    }, B = t.filter(
      ({ label: V }) => V.toLowerCase().includes((R || "").toLowerCase().trim())
    ), Z = $ ? n : H, X = D && R && !S.disabled && !S.readOnly, me = X ? "mdi:close" : w, pe = () => {
      if (!Z) return null;
      const V = be();
      if (!("body" in V)) return null;
      const U = /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: E,
          className: b(
            cs({ position: a }),
            "overflow-auto"
          ),
          onClick: (oe) => oe.stopPropagation(),
          children: i ? /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ e.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary-500 border-t-transparent" }) }) : B.length > 0 ? B.map((oe) => /* @__PURE__ */ e.jsx(
            qe,
            {
              value: oe.value,
              selected: oe.label === R,
              onClick: () => de(oe),
              children: d ? d(oe) : oe.label
            },
            oe.value
          )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500", children: "No options found" })
        }
      );
      return ze(U, V.body);
    };
    return /* @__PURE__ */ e.jsxs("div", { ref: G, className: b("relative", x ? "w-full" : "inline-block"), children: [
      /* @__PURE__ */ e.jsx("div", { ref: k, className: b(!x && "inline-block"), children: /* @__PURE__ */ e.jsx(
        Hr,
        {
          ref: T,
          value: R,
          onChange: L,
          onFocus: xe,
          onBlur: ie,
          variant: l,
          size: c,
          rounded: m,
          leftIcon: g,
          rightIcon: me,
          error: p,
          errorText: u,
          helperText: j,
          label: v,
          required: f,
          labelPlacement: y,
          fullWidth: x,
          className: r,
          ...S,
          onClick: X ? ce : S.onClick
        }
      ) }),
      pe()
    ] });
  }
);
ds.displayName = "AutoComplete";
const us = {
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
}, ms = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, fs = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
}, hn = ({
  items: r,
  multiple: t = !1,
  defaultOpenIds: s = [],
  icon: n = "mdi:chevron-down",
  iconPosition: a = "right",
  className: i,
  contentClassName: d,
  variant: l = "primary",
  shadow: c = "none",
  rounded: m = "lg"
}) => {
  const [g, w] = re(s), p = (j) => {
    w(
      t ? (v) => v.includes(j) ? v.filter((f) => f !== j) : [...v, j] : (v) => v.includes(j) ? [] : [j]
    );
  }, u = us[l];
  return /* @__PURE__ */ e.jsx("div", { className: J("w-full space-y-2", i), children: r.map((j) => {
    const v = g.includes(j.id), f = !!j.disabled;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: J(
          "border overflow-hidden",
          "bg-white",
          "border-gray-200",
          ms[c],
          fs[m],
          "transition-shadow duration-200"
        ),
        children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => !f && p(j.id),
              disabled: f,
              className: J(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                u.hover,
                v && u.active,
                u.text,
                f && "opacity-50 cursor-not-allowed"
              ),
              children: [
                a === "left" && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: J(
                      "mr-3 transition-transform duration-200",
                      v && "rotate-180"
                    ),
                    children: /* @__PURE__ */ e.jsx(Y, { icon: n, className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ e.jsx("div", { className: "flex-1", children: j.title }),
                a === "right" && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: J(
                      "ml-3 transition-transform duration-200",
                      v && "rotate-180"
                    ),
                    children: /* @__PURE__ */ e.jsx(Y, { icon: n, className: "w-5 h-5" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: J(
                "grid transition-all duration-200 ease-in-out",
                v ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              ),
              children: /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: J(
                    "p-4 border-t border-gray-200",
                    d
                  ),
                  children: j.content
                }
              ) })
            }
          )
        ]
      },
      j.id
    );
  }) });
}, vn = ({
  src: r,
  alt: t = "avatar",
  size: s = "medium",
  shape: n = "circle",
  className: a = ""
}) => {
  const i = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  }, d = {
    circle: "rounded-full",
    square: "rounded-lg"
  }, l = Fe(
    "inline-flex items-center justify-center overflow-hidden bg-gray-200",
    i[s],
    d[n],
    a
  );
  return /* @__PURE__ */ e.jsx("div", { className: l, children: r ? /* @__PURE__ */ e.jsx("img", { src: r, alt: t, className: "w-full h-full object-cover" }) : /* @__PURE__ */ e.jsx(
    "svg",
    {
      className: "w-6 h-6 text-gray-500",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z",
          fill: "currentColor"
        }
      )
    }
  ) });
}, yn = ({
  children: r,
  variant: t = "primary",
  size: s = "medium",
  rounded: n = "md",
  className: a = ""
}) => {
  const i = {
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800"
  }, d = {
    small: "px-2 py-0.5 text-xs",
    medium: "px-2.5 py-1 text-sm",
    large: "px-3 py-1.5 text-base"
  }, l = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full"
  }, c = Fe(
    "inline-flex items-center font-medium",
    i[t],
    d[s],
    l[n],
    a
  );
  return /* @__PURE__ */ e.jsx("span", { className: c, children: r });
}, gs = ye(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-sm hover:shadow-md active:shadow-none",
        secondary: "bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 shadow-sm hover:shadow-md active:shadow-none",
        outline: "border border-neutral-300 text-primary-500 hover:bg-primary-50 active:bg-primary-100 hover:border-primary-500",
        "outline-primary": "border border-primary-600 text-primary-600 hover:bg-primary-50",
        "outline-secondary": "border border-secondary-600 text-secondary-600 hover:bg-secondary-50",
        "outline-success": "border border-success-600 text-success-600 hover:bg-success-50",
        "outline-warning": "border border-warning-600 text-warning-600 hover:bg-warning-50",
        "outline-danger": "border border-danger-600 text-danger-600 hover:bg-danger-50",
        ghost: "text-primary-500 hover:bg-primary-50 active:bg-primary-100",
        link: "text-primary-500 hover:underline p-0",
        success: "bg-success-500 text-white hover:bg-success-600 active:bg-success-700 shadow-sm hover:shadow-md active:shadow-none",
        warning: "bg-warning-500 text-white hover:bg-warning-600 active:bg-warning-700 shadow-sm hover:shadow-md active:shadow-none",
        danger: "bg-danger-500 text-white hover:bg-danger-600 active:bg-danger-700 shadow-sm hover:shadow-md active:shadow-none"
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
), Se = ve(
  ({
    className: r,
    variant: t = "primary",
    size: s = "md",
    rounded: n = "md",
    fullWidth: a = !1,
    isLoading: i = !1,
    leftIcon: d,
    rightIcon: l,
    isIconOnly: c = !1,
    children: m,
    ...g
  }, w) => {
    const u = c || !!(d || l) && !m;
    return /* @__PURE__ */ e.jsxs(
      "button",
      {
        className: b(
          gs({
            variant: t,
            size: s,
            rounded: u ? "full" : n,
            fullWidth: a,
            isIconOnly: u,
            className: r
          })
        ),
        ref: w,
        disabled: g.disabled || i,
        ...g,
        children: [
          i && /* @__PURE__ */ e.jsx("span", { className: "animate-spin inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full" }),
          d && !i && /* @__PURE__ */ e.jsx(Y, { icon: d, className: "w-4 h-4", inline: !0 }),
          m && /* @__PURE__ */ e.jsx("span", { children: m }),
          l && !i && /* @__PURE__ */ e.jsx(Y, { icon: l, className: "w-4 h-4", inline: !0 })
        ]
      }
    );
  }
);
Se.displayName = "Button";
const ps = ye(
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
), Gr = ve(
  ({
    className: r,
    variant: t = "default",
    padding: s = "md",
    shadow: n = "none",
    rounded: a = "md",
    asChild: i = !1,
    ...d
  }, l) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: b(ps({ variant: t, padding: s, shadow: n, rounded: a, className: r })),
      ref: l,
      ...d
    }
  )
);
Gr.displayName = "Card";
const wn = ({
  label: r,
  error: t,
  disabled: s = !1,
  indeterminate: n = !1,
  variantSize: a = "sm",
  variant: i = "square",
  color: d = "primary",
  className: l = "",
  ...c
}) => {
  const m = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }, g = {
    primary: "checked:bg-primary-600 checked:border-primary-600 hover:border-primary-600",
    secondary: "checked:bg-secondary-600 checked:border-secondary-600 hover:border-secondary-600",
    success: "checked:bg-success-600 checked:border-success-600 hover:border-success-600",
    warning: "checked:bg-warning-600 checked:border-warning-600 hover:border-warning-600",
    error: "checked:bg-danger-600 checked:border-danger-600 hover:border-danger-600"
  }, p = Fe(
    "border-2 transition-colors duration-200",
    "appearance-none cursor-pointer",
    "checked:bg-no-repeat checked:bg-center",
    i === "circle" ? 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]' : 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM0w0LjUgOC41TDIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=")]',
    {
      square: "rounded",
      circle: "rounded-full"
    }[i],
    m[a],
    g[d],
    s && "opacity-50 cursor-not-allowed",
    l
  ), u = Fe(
    "ml-2 text-sm font-medium",
    s && "opacity-50 cursor-not-allowed",
    t && "text-danger-600"
  );
  return /* @__PURE__ */ e.jsxs("div", { className: "items-center", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "checkbox",
          className: p,
          disabled: s,
          ref: (j) => {
            j && (j.indeterminate = n);
          },
          ...c
        }
      ),
      r && /* @__PURE__ */ e.jsx("label", { className: u, children: r })
    ] }),
    t && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-danger-600", children: t })
  ] });
}, bs = {
  solid: {
    primary: "bg-primary-500 text-white",
    success: "bg-success-500 text-white",
    warning: "bg-warning-500 text-white",
    error: "bg-danger-500 text-white",
    info: "bg-info-500 text-white",
    danger: "bg-danger-500 text-white",
    default: "bg-neutral-500 text-white"
  },
  outline: {
    primary: "border border-primary-500 text-primary-500",
    success: "border border-success-500 text-success-500",
    warning: "border border-warning-500 text-warning-500",
    error: "border border-error-500 text-error-500",
    info: "border border-info-500 text-info-500",
    danger: "border border-danger-500 text-danger-500",
    default: "border border-neutral-500 text-neutral-500"
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
}, xs = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5"
}, hs = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, jn = ({
  children: r,
  variant: t = "solid",
  color: s = "primary",
  size: n = "md",
  rounded: a = "md",
  onClose: i,
  className: d,
  icon: l
}) => /* @__PURE__ */ e.jsxs(
  "div",
  {
    className: b(
      "inline-flex items-center gap-1.5 font-medium",
      bs[t][s],
      xs[n],
      hs[a],
      d
    ),
    children: [
      l && /* @__PURE__ */ e.jsx("span", { className: "inline-flex items-center", children: /* @__PURE__ */ e.jsx(Y, { icon: l, className: "w-4 h-4" }) }),
      r,
      i && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: i,
          className: "ml-1 rounded-full hover:bg-black/10 p-0.5",
          "aria-label": "Close",
          children: /* @__PURE__ */ e.jsx(Y, { icon: "mdi:close", className: "w-3 h-3" })
        }
      )
    ]
  }
);
var Ur = { exports: {} };
(function(r, t) {
  (function(s, n) {
    r.exports = n();
  })(Ir, function() {
    return function(s, n) {
      n.prototype.isSameOrAfter = function(a, i) {
        return this.isSame(a, i) || this.isAfter(a, i);
      };
    };
  });
})(Ur);
var vs = Ur.exports;
const ys = /* @__PURE__ */ zr(vs);
var Kr = { exports: {} };
(function(r, t) {
  (function(s, n) {
    r.exports = n();
  })(Ir, function() {
    return function(s, n) {
      n.prototype.isSameOrBefore = function(a, i) {
        return this.isSame(a, i) || this.isBefore(a, i);
      };
    };
  });
})(Kr);
var ws = Kr.exports;
const js = /* @__PURE__ */ zr(ws);
le.extend(ys);
le.extend(js);
const Ns = ye(
  "border bg-white px-3 py-2 ring-0 transition-colors placeholder:text-neutral-500 placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50",
        error: "border-danger-500 hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50",
        success: "border-success-500 hover:border-success-600 focus:border-success-600 hover:bg-success-50",
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
), lr = ve(
  ({
    value: r,
    onChange: t,
    minDate: s,
    maxDate: n,
    variant: a = "default",
    size: i = "md",
    rounded: d = "md",
    disabled: l = !1,
    errorText: c,
    helperText: m,
    label: g,
    required: w = !1,
    labelPlacement: p = "top",
    fullWidth: u = !1,
    className: j,
    placeholder: v = "Select date",
    leftIcon: f,
    rightIcon: y,
    monthsToShow: x = 1,
    valueFormatter: F,
    rangeStart: M,
    rangeEnd: O,
    closeOnSelect: I = !0,
    calendarFooter: D,
    ...N
  }, S) => {
    const [T, H] = re(!1), [C, R] = re(r), [A, G] = re(r || /* @__PURE__ */ new Date()), k = he(null), E = he(null), $ = he(null);
    Ne(() => {
      R(r || void 0);
    }, [r]);
    const te = () => {
      if (!T || !E.current || !$.current) return;
      const { bottom: X, left: me, width: pe } = E.current.getBoundingClientRect(), V = $.current, U = Ee();
      x === 2 ? Object.assign(V.style, {
        position: "fixed",
        left: `${me}px`,
        top: `${X + 4}px`,
        minWidth: "500px",
        width: "auto",
        maxHeight: `${U.innerHeight - X - 8}px`,
        transform: ""
      }) : Object.assign(V.style, {
        position: "fixed",
        left: `${me + pe / 2}px`,
        top: `${X + 4}px`,
        width: "320px",
        maxWidth: "100vw",
        maxHeight: `${U.innerHeight - X - 8}px`,
        transform: "translateX(-50%)"
      });
    };
    Ne(() => {
      const X = Ee(), me = be(), pe = () => {
        T && te();
      }, V = () => {
        T && te();
      }, U = (oe) => {
        const Q = oe.target;
        k.current && !k.current.contains(Q) && $.current && !$.current.contains(Q) && H(!1);
      };
      return T && (te(), X.addEventListener("scroll", pe, !0), X.addEventListener("resize", V)), me.addEventListener("click", U), () => {
        X.removeEventListener("scroll", pe, !0), X.removeEventListener("resize", V), me.removeEventListener("click", U);
      };
    }, [T]);
    const ne = (X) => {
      R(X), t == null || t(X), I !== !1 && H(!1);
    }, P = () => {
      G(le(A).subtract(1, "month").toDate());
    }, L = () => {
      G(le(A).add(1, "month").toDate());
    }, ce = (X) => {
      const me = le(X).startOf("month"), pe = le(X).endOf("month"), V = [];
      let U = me;
      for (; U.isBefore(pe) || U.isSame(pe, "day"); )
        V.push(U.toDate()), U = U.add(1, "day");
      return V;
    }, de = (X) => !!(s && le(X).isBefore(s, "day") || n && le(X).isAfter(n, "day")), xe = () => C ? le(C).format("DD MMM YYYY") : "", ie = () => {
      if (!T) return null;
      const X = be();
      if (!("body" in X)) return null;
      const me = Array.from({ length: x }).map(
        (pe, V) => le(A).add(V, "month").toDate()
      );
      return ze(
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            ref: $,
            className: "fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-lg",
            children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between p-2 border-b border-gray-200", children: [
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    onClick: P,
                    className: "p-1 rounded-full hover:bg-primary-50 active:bg-primary-100 transition-colors duration-200",
                    children: /* @__PURE__ */ e.jsx(Y, { icon: "mdi:chevron-left", className: "w-5 h-5 text-primary" })
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-900", children: x === 1 ? le(A).format("MMMM YYYY") : `${le(A).format("MMMM YYYY")} - ${le(
                  A
                ).add(x - 1, "month").format("MMMM YYYY")}` }),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    onClick: L,
                    className: "p-1 rounded-full hover:bg-primary-50 active:bg-primary-100 transition-colors duration-200",
                    children: /* @__PURE__ */ e.jsx(Y, { icon: "mdi:chevron-right", className: "w-5 h-5 text-primary" })
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: b(
                    x === 2 ? "flex gap-5 p-2" : "justify-between p-4"
                  ),
                  children: me.map((pe, V) => {
                    const U = ce(pe), oe = le(pe).startOf("month").day();
                    return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", children: [
                      /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-7 gap-y-1 mb-1", children: [
                        ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                          (Q, ue) => {
                            const we = ue === 0 || ue === 6;
                            return /* @__PURE__ */ e.jsx(
                              "div",
                              {
                                className: b(
                                  "text-center text-xs font-medium text-neutral-500",
                                  we && "text-danger-500"
                                ),
                                children: Q
                              },
                              Q
                            );
                          }
                        ),
                        Array.from({ length: oe }).map((Q, ue) => /* @__PURE__ */ e.jsx("div", {}, `empty-${ue}`)),
                        U.map((Q) => {
                          const ue = C && le(Q).isSame(C, "day"), we = de(Q), _e = le(Q).isSame(pe, "month"), Ce = M && O && le(Q).isSameOrAfter(M, "day") && le(Q).isSameOrBefore(O, "day"), Ke = M && le(Q).isSame(M, "day"), Ze = O && le(Q).isSame(O, "day"), We = le(Q).day() === 0 || le(Q).day() === 6, Oe = M && O;
                          return /* @__PURE__ */ e.jsx("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ e.jsx(
                            "div",
                            {
                              className: b(
                                Ce && "rounded-none bg-primary-50",
                                Oe && Ke && "rounded-l-full",
                                Oe && Ze && "rounded-r-full"
                              ),
                              children: /* @__PURE__ */ e.jsx(
                                "button",
                                {
                                  onClick: () => !we && ne(Q),
                                  disabled: we,
                                  className: b(
                                    "p-2 text-sm transition-colors duration-200 w-10 h-10 rounded-full",
                                    We && "!text-danger",
                                    ue && "bg-primary-500 !text-white hover:bg-primary-600 active:bg-primary-700",
                                    ue && !Oe && "rounded-full",
                                    !ue && !we && "hover:bg-primary-50 active:bg-primary-100",
                                    !_e && "text-neutral-400",
                                    we && "opacity-50 cursor-not-allowed",
                                    // inRange && "bg-primary-50 text-primary-900 rounded-none",
                                    Oe && Ke && "!bg-primary-500 !text-white !rounded-full",
                                    Oe && Ze && "!bg-primary-500 !text-white !rounded-full"
                                  ),
                                  children: le(Q).format("D")
                                },
                                Q.toString()
                              )
                            }
                          ) });
                        })
                      ] }),
                      D
                    ] }, V);
                  })
                }
              )
            ]
          }
        ),
        X.body
      );
    }, B = /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: b("relative", !u && "inline-block"),
        ref: E,
        children: [
          f && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ e.jsx(Y, { icon: f, className: "w-4 h-4" }) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: S,
              type: "text",
              value: F ? F() : xe(),
              placeholder: v,
              onClick: () => !l && H(!T),
              readOnly: !0,
              className: b(
                Ns({ variant: a, size: i, rounded: d, fullWidth: u }),
                f && "pl-10",
                y && "pr-10",
                j
              ),
              disabled: l,
              ...N
            }
          ),
          y && /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ e.jsx(Y, { icon: y, className: "w-4 h-4" }) })
        ]
      }
    ), Z = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger-500", children: c }),
      !c && m && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral-500", children: m })
    ] });
    return p === "left" ? /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: b(u ? "w-full" : "inline-block", j),
        ref: k,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
            g && /* @__PURE__ */ e.jsxs("label", { className: "block text-sm text-neutral-900 pt-2", children: [
              g,
              w && /* @__PURE__ */ e.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: b("flex-1", !u && "inline-block"), children: [
              B,
              Z
            ] })
          ] }),
          ie()
        ]
      }
    ) : /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: b(u ? "w-full" : "inline-block", j),
        ref: k,
        children: [
          g && /* @__PURE__ */ e.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
            g,
            w && /* @__PURE__ */ e.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
          ] }),
          B,
          Z,
          ie()
        ]
      }
    );
  }
);
lr.displayName = "PrimitiveDatePicker";
const ks = ({
  mode: r = "single",
  value: t,
  onChange: s,
  monthsToShow: n = 1,
  calendarFooter: a,
  ...i
}) => {
  const [d, l] = re([
    void 0,
    void 0
  ]);
  if (r === "single") {
    const c = Array.isArray(t) ? t[0] : t;
    return /* @__PURE__ */ e.jsx(
      lr,
      {
        value: c === null ? void 0 : c,
        onChange: (m) => s == null ? void 0 : s(m),
        monthsToShow: n,
        calendarFooter: a,
        ...i
      }
    );
  }
  if (r === "range") {
    let [c, m] = Array.isArray(t) ? t : d;
    const g = (p) => {
      !c || c && m ? (l([p, void 0]), s == null || s([p, void 0])) : c && !m && (p < c ? (l([p, c]), s == null || s([p, c])) : (l([c, p]), s == null || s([c, p])));
    }, w = () => {
      if (!c) return "";
      const p = (u) => u ? u.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }) : "";
      return c && m ? `${p(c)} - ${p(m)}` : p(c);
    };
    return /* @__PURE__ */ e.jsx(
      lr,
      {
        value: c,
        onChange: g,
        monthsToShow: n,
        placeholder: i.placeholder || "Select date range",
        valueFormatter: w,
        rangeStart: c,
        rangeEnd: m,
        closeOnSelect: !!m,
        calendarFooter: a,
        ...i
      }
    );
  }
  return null;
};
ks.displayName = "DatePicker";
const Zr = ve(
  ({ children: r, onClose: t, className: s, ...n }, a) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: a,
      className: b("mb-4 flex items-center justify-between", s),
      ...n,
      children: [
        r,
        t && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: t,
            className: "ml-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700",
            "aria-label": "Close dialog",
            children: /* @__PURE__ */ e.jsx(Y, { icon: "mdi:close", className: "h-5 w-5" })
          }
        )
      ]
    }
  )
), Es = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-4xl",
  fullscreen: "w-full h-full max-w-none max-h-none rounded-none"
}, Cs = ve(
  ({
    isOpen: r,
    onClose: t,
    children: s,
    className: n,
    backdrop: a = "dark",
    header: i,
    closeOnBackdropClick: d = !0,
    size: l = "md",
    ...c
  }, m) => {
    const [g, w] = re(!1), [p, u] = re(!1);
    if (Ne(() => {
      if (r) {
        w(!0), u(!0);
        const y = be();
        "body" in y && (y.body.style.overflow = "hidden");
      } else {
        u(!1);
        const y = setTimeout(() => {
          w(!1);
          const x = be();
          "body" in x && (x.body.style.overflow = "");
        }, 300);
        return () => clearTimeout(y);
      }
    }, [r]), Ne(() => {
      const y = (x) => {
        x instanceof KeyboardEvent && x.key === "Escape" && t();
      };
      return r && be().addEventListener("keydown", y), () => {
        be().removeEventListener("keydown", y);
      };
    }, [r, t]), !g) return null;
    const j = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, v = () => {
      d && t();
    }, f = be();
    return "body" in f ? ze(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: b(
            "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300",
            j[a],
            p ? "opacity-100" : "opacity-0",
            l === "fullscreen" && "items-start"
          ),
          onClick: v,
          children: /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: m,
              className: b(
                "relative transform rounded-lg bg-white p-6 shadow-xl transition-all duration-300",
                Es[l],
                p ? "scale-100 opacity-100" : "scale-95 opacity-0",
                n
              ),
              onClick: (y) => y.stopPropagation(),
              ...c,
              children: [
                i && /* @__PURE__ */ e.jsx(Zr, { onClose: t, children: i }),
                s
              ]
            }
          )
        }
      ),
      f.body
    ) : null;
  }
), Rs = ve(
  ({ children: r, className: t, ...s }, n) => /* @__PURE__ */ e.jsx(
    "h2",
    {
      ref: n,
      className: b("text-xl font-semibold text-gray-900", t),
      ...s,
      children: r
    }
  )
), Ss = ve(
  ({ children: r, className: t, ...s }, n) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: n,
      className: b("text-gray-600", t),
      ...s,
      children: r
    }
  )
), _s = ve(
  ({ children: r, className: t, ...s }, n) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: n,
      className: b("mt-6 flex justify-end gap-3", t),
      ...s,
      children: r
    }
  )
);
Cs.displayName = "Dialog";
Rs.displayName = "DialogTitle";
Ss.displayName = "DialogBody";
_s.displayName = "DialogActions";
Zr.displayName = "DialogHeader";
const Ms = ({
  orientation: r = "horizontal",
  variant: t = "solid",
  color: s = "neutral",
  size: n = "sm",
  className: a = ""
}) => {
  const i = {
    horizontal: "w-full border-t-0 border-l-0 border-r-0 border-b",
    vertical: "h-full border-l border-t-0 border-r-0 border-b-0"
  }, d = {
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
    sm: r === "horizontal" ? "border-b" : "border-l",
    md: r === "horizontal" ? "border-b-2" : "border-l-2",
    lg: r === "horizontal" ? "border-b-4" : "border-l-4"
  }, m = Fe(
    "inline-block",
    i[r],
    d[t],
    l[s],
    c[n],
    a
  );
  return /* @__PURE__ */ e.jsx("div", { className: m });
}, Ts = {
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
}, As = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, Tr = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
}, Nn = ({
  accept: r = ["*"],
  maxSize: t = 5 * 1024 * 1024,
  // 5MB default
  multiple: s = !1,
  value: n = [],
  onChange: a,
  className: i,
  disabled: d = !1,
  placeholder: l = "Drag and drop files here or click to browse",
  variant: c = "default",
  shadow: m = "none",
  rounded: g = "lg",
  children: w,
  showFileList: p = !0,
  showPlaceholder: u = !0,
  showMaxSize: j = !0,
  icon: v = "mdi:upload"
}) => {
  const [f, y] = re(!1), [x, F] = re(null), M = he(null), O = Ae((R) => {
    R.preventDefault(), d || y(!0);
  }, [d]), I = Ae((R) => {
    R.preventDefault(), y(!1);
  }, []), D = Ae((R) => R.size > t ? `File size exceeds ${t / (1024 * 1024)}MB limit` : r[0] !== "*" && !r.some((A) => A.startsWith(".") ? R.name.toLowerCase().endsWith(A.toLowerCase()) : R.type.startsWith(A)) ? `File type not allowed. Allowed types: ${r.join(", ")}` : null, [r, t]), N = Ae((R) => {
    if (R.preventDefault(), y(!1), F(null), d) return;
    const A = Array.from(R.dataTransfer.files), G = [], k = [];
    if (A.forEach((E) => {
      const $ = D(E);
      $ ? k.push(`${E.name}: ${$}`) : G.push(E);
    }), k.length > 0 && F(k.join(`
`)), G.length > 0) {
      const E = s ? [...n, ...G] : G;
      a == null || a(E);
    }
  }, [d, s, a, D, n]), S = Ae((R) => {
    if (F(null), d || !R.target.files) return;
    const A = Array.from(R.target.files), G = [], k = [];
    if (A.forEach((E) => {
      const $ = D(E);
      $ ? k.push(`${E.name}: ${$}`) : G.push(E);
    }), k.length > 0 && F(k.join(`
`)), G.length > 0) {
      const E = s ? [...n, ...G] : G;
      a == null || a(E);
    }
    M.current && (M.current.value = "");
  }, [d, s, a, D, n]), T = Ae((R) => {
    const A = [...n];
    A.splice(R, 1), a == null || a(A);
  }, [a, n]), H = (R) => R.type.startsWith("image/") ? /* @__PURE__ */ e.jsx(Y, { icon: "mdi:image", className: "w-5 h-5" }) : R.type.startsWith("text/") ? /* @__PURE__ */ e.jsx(Y, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ e.jsx(Y, { icon: "mdi:file", className: "w-5 h-5" }), C = Ts[c];
  return /* @__PURE__ */ e.jsxs("div", { className: J("w-full", i), children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: J(
          "p-6 text-center transition-colors",
          !w && [
            "border-2 border-dashed",
            C.border,
            C.bg,
            f && C.active,
            !d && C.hover
          ],
          d && "opacity-50 cursor-not-allowed",
          As[m],
          Tr[g],
          !w && "cursor-pointer"
        ),
        onDragOver: O,
        onDragLeave: I,
        onDrop: N,
        onClick: () => {
          var R;
          return !d && !w && ((R = M.current) == null ? void 0 : R.click());
        },
        children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: M,
              type: "file",
              accept: r.join(","),
              multiple: s,
              onChange: S,
              className: "hidden",
              disabled: d
            }
          ),
          w ? /* @__PURE__ */ e.jsx("div", { onClick: () => {
            var R;
            return !d && ((R = M.current) == null ? void 0 : R.click());
          }, children: w }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(Y, { icon: v, className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
            u && /* @__PURE__ */ e.jsx("p", { className: J("text-neutral-600", C.text), children: l }),
            j && /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-neutral-500 mt-2", children: [
              "Max file size: ",
              t / (1024 * 1024),
              "MB"
            ] })
          ] })
        ]
      }
    ),
    x && /* @__PURE__ */ e.jsx("p", { className: "mt-2 text-sm text-danger", children: x }),
    p && n.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "mt-4 space-y-2", children: n.map((R, A) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: J(
          "flex items-center justify-between p-2",
          Tr[g],
          C.bg
        ),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
            H(R),
            /* @__PURE__ */ e.jsx("span", { className: J("text-sm", C.text), children: R.name }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-neutral-500", children: [
              "(",
              (R.size / 1024).toFixed(1),
              " KB)"
            ] })
          ] }),
          !d && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => T(A),
              className: "p-1 text-neutral-500 hover:text-danger",
              children: /* @__PURE__ */ e.jsx(Y, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${R.name}-${A}`
    )) })
  ] });
}, Ps = ye(
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
), kn = ({
  title: r,
  children: t,
  icon: s,
  variant: n = "default",
  rounded: a = "md",
  showClose: i = !1,
  onClose: d,
  className: l
}) => {
  const c = () => {
    switch (n) {
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
    if (s) return s;
    switch (n) {
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
  return /* @__PURE__ */ e.jsxs("div", { className: b(Ps({ variant: n, rounded: a }), l), children: [
    s && /* @__PURE__ */ e.jsx(Y, { icon: m(), className: b("h-5 w-5 flex-shrink-0", c()) }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
      r && /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-medium text-neutral-900", children: r }),
      /* @__PURE__ */ e.jsx("div", { className: "mt-1 text-sm text-neutral-500", children: t })
    ] }),
    i && /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        className: "ml-auto flex-shrink-0 text-neutral-400 hover:text-neutral-500",
        onClick: d,
        children: /* @__PURE__ */ e.jsx(Y, { icon: "mdi:close", className: "h-5 w-5" })
      }
    )
  ] });
}, nr = "select-dropdown-opened", Ds = ye(
  "rounded-md px-3 py-2 text-sm ring-0 transition-colors placeholder:text-neutral-500 placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50 bg-white",
        error: "border border-danger-500 hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50 bg-white",
        success: "border border-success-500 hover:border-success-600 focus:border-success-600 bg-white",
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
), qr = ve(
  ({
    className: r,
    variant: t = "default",
    size: s = "md",
    rounded: n = "md",
    options: a,
    label: i,
    error: d = !1,
    helperText: l,
    required: c = !1,
    placeholder: m,
    value: g,
    onChange: w,
    disabled: p = !1,
    position: u = "bottom",
    fullWidth: j = !0,
    children: v,
    leftIcon: f,
    rightIcon: y,
    ...x
  }, F) => {
    const [M, O] = re(!1), I = he(null), D = he(null), S = `select-${Me.useId().replace(/:/g, "")}`, T = () => {
      if (M && I.current && D.current) {
        const k = I.current.getBoundingClientRect(), E = D.current, $ = Ee(), te = $.innerHeight - k.bottom, ne = k.top, L = k.bottom + E.offsetHeight + 4 >= $.innerHeight, ce = ne > te, de = L && ce;
        u === "bottom" || u === "top" ? (E.style.position = "fixed", E.style.left = `${k.left}px`, E.style.width = `${k.width}px`, u === "bottom" && de ? (E.style.bottom = `${$.innerHeight - k.top + 4}px`, E.style.top = "auto", E.style.maxHeight = `${ne - 8}px`) : u === "bottom" ? (E.style.top = `${k.bottom + 4}px`, E.style.bottom = "auto", E.style.maxHeight = `${te - 8}px`) : u === "top" && !de ? (E.style.top = `${k.bottom + 4}px`, E.style.bottom = "auto", E.style.maxHeight = `${te - 8}px`) : (E.style.bottom = `${$.innerHeight - k.top + 4}px`, E.style.top = "auto", E.style.maxHeight = `${ne - 8}px`)) : u === "left" ? (E.style.position = "fixed", E.style.right = `${$.innerWidth - k.left + 4}px`, E.style.top = `${k.top}px`, E.style.maxHeight = `${$.innerHeight - k.top - 8}px`) : u === "right" && (E.style.position = "fixed", E.style.left = `${k.right + 4}px`, E.style.top = `${k.top}px`, E.style.maxHeight = `${$.innerHeight - k.top - 8}px`);
      }
    };
    Ne(() => {
      const k = Ee(), E = () => {
        M && T();
      }, $ = () => {
        M && T();
      };
      return M && (T(), k.addEventListener("scroll", E, !0), k.addEventListener("resize", $)), () => {
        k.removeEventListener("scroll", E, !0), k.removeEventListener("resize", $);
      };
    }, [M, u]), Ne(() => {
      const k = be(), E = (te) => {
        te.detail.id !== S && O(!1);
      }, $ = (te) => {
        const ne = te.target, P = I.current, L = D.current;
        P && L && !P.contains(ne) && !L.contains(ne) && O(!1);
      };
      return k.addEventListener(nr, E), k.addEventListener("click", $), () => {
        k.removeEventListener(nr, E), k.removeEventListener("click", $);
      };
    }, [S]);
    const H = () => {
      if (p) return;
      if (M) {
        O(!1);
        return;
      }
      be().dispatchEvent(
        new CustomEvent(nr, {
          detail: { id: S }
        })
      ), O(!0);
    }, C = () => {
      if (a) {
        const k = a.find((E) => E.value === g);
        return k == null ? void 0 : k.label;
      }
      if (v) {
        const E = Nr.toArray(v).find(
          ($) => rr($) && "value" in $.props && $.props.value === g
        );
        return rr(E) ? E.props.children : null;
      }
      return null;
    }, R = (k) => {
      p || (w == null || w(k), O(!1));
    }, A = () => a ? a.map((k) => /* @__PURE__ */ e.jsx(
      qe,
      {
        value: k.value,
        disabled: k.disabled,
        selected: k.value === g,
        onClick: () => R(k.value),
        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          k.icon,
          k.label
        ] })
      },
      k.value
    )) : v ? Nr.map(v, (k) => rr(k) && "value" in k.props ? jt(k, {
      selected: k.props.value === g,
      onClick: () => R(k.props.value)
    }) : null) : null, G = () => {
      if (!M || p) return null;
      const k = /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: D,
          className: b(
            "fixed z-[9999] min-w-[8rem] border border-neutral-200 bg-white py-1 shadow-lg",
            {
              "rounded-none": n === "none",
              "rounded-sm": n === "sm",
              "rounded-md": n === "md",
              "rounded-lg": n === "lg",
              "rounded-xl": n === "full"
            },
            u === "left" || u === "right" ? "w-max" : "w-full"
          ),
          onClick: ($) => $.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: A()
        }
      ), E = be();
      return "body" in E ? ze(k, E.body) : null;
    };
    return /* @__PURE__ */ e.jsxs("div", { className: b(j ? "w-full" : "inline-block"), ref: F, ...x, children: [
      i && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: S,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            i,
            c && /* @__PURE__ */ e.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: b("relative", !j && "inline-block"), children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            id: S,
            ref: I,
            type: "button",
            className: b(
              Ds({ variant: d ? "error" : t, size: s, rounded: n, fullWidth: j }),
              "flex items-center justify-between",
              p && "cursor-not-allowed opacity-50",
              f && "pl-10",
              y && "pr-10",
              r
            ),
            onClick: H,
            "aria-haspopup": "listbox",
            "aria-expanded": M,
            "aria-describedby": d ? `${S}-error` : l ? `${S}-helper` : void 0,
            disabled: p,
            children: [
              f && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ e.jsx(Y, { icon: f, className: "w-4 h-4" }) }),
              /* @__PURE__ */ e.jsx("span", { className: "flex items-center text-neutral-500 gap-2 min-w-0 flex-1", children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: C() || m }) }),
              y ? /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ e.jsx(Y, { icon: y, className: "w-4 h-4" }) }) : /* @__PURE__ */ e.jsx(
                Y,
                {
                  icon: "mdi:chevron-down",
                  className: b("transition-transform flex-shrink-0 ml-2", M && "rotate-180")
                }
              )
            ]
          }
        ),
        G()
      ] }),
      d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger-500", id: `${S}-error`, children: d }),
      !d && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral-500", id: `${S}-helper`, children: l })
    ] });
  }
);
qr.displayName = "Select";
const Os = ({
  currentPage: r,
  totalPages: t,
  totalData: s,
  onPageChange: n,
  siblingCount: a = 1,
  className: i,
  perPageOptions: d,
  perPage: l = 10,
  label: c = "",
  onPerPageChange: m
}) => {
  const g = (u, j) => {
    const v = j - u + 1;
    return Array.from({ length: v }, (f, y) => y + u);
  }, p = (() => {
    const u = a * 2 + 3, j = u + 2;
    if (t > j) {
      const v = Math.max(2, r - a), f = Math.min(t - 1, r + a);
      let y = g(v, f);
      const x = v > 2, F = t - f > 1, M = u - (y.length + 1);
      if (x && !F)
        y = [...g(v - M, v - 1), ...y];
      else if (!x && F) {
        const O = g(f + 1, f + M);
        y = [...y, ...O];
      } else x && F && (y = [...y]);
      return [1, ...y, t];
    }
    return g(1, t);
  })();
  return /* @__PURE__ */ e.jsxs(
    "nav",
    {
      className: J("flex items-center justify-between space-x-1", i),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "hidden sm:block text-sm text-neutral-700", children: [
          /* @__PURE__ */ e.jsx("b", { children: `${r} - ${t}` }),
          " dari ",
          s,
          " ",
          c
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          d && d.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 mr-4", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-neutral-700 text-sm", children: "Menampilkan" }),
            /* @__PURE__ */ e.jsx(
              qr,
              {
                value: l == null ? void 0 : l.toString(),
                onChange: (u) => m && m(Number(u)),
                size: "sm",
                className: "w-16",
                fullWidth: !1,
                "aria-label": "Items per page",
                children: d.map((u) => /* @__PURE__ */ e.jsx(qe, { value: u.toString(), children: u }, u))
              }
            ),
            /* @__PURE__ */ e.jsx("span", { className: "text-neutral-700 text-sm", children: "data per halaman" })
          ] }),
          /* @__PURE__ */ e.jsx(
            Se,
            {
              variant: "ghost",
              onClick: () => n(r - 1),
              disabled: r === 1,
              className: J(
                "px-3 py-1 rounded-md text-sm",
                r === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              ),
              children: /* @__PURE__ */ e.jsx(Y, { size: "18", icon: "mdi:chevron-left" })
            }
          ),
          p.map((u, j) => {
            const v = u === r, f = typeof u == "string" && u === "...";
            return /* @__PURE__ */ e.jsx(
              Se,
              {
                variant: "ghost",
                onClick: () => !f && n(u),
                className: J(
                  "px-3 py-1 rounded-md text-sm",
                  v ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  f && "cursor-default"
                ),
                children: u
              },
              j
            );
          }),
          /* @__PURE__ */ e.jsx(
            Se,
            {
              variant: "ghost",
              onClick: () => n(r + 1),
              disabled: r === t,
              className: J(
                "px-3 py-1 rounded-md text-sm",
                r === t ? "text-gray-400 cursor-not-allowed" : "text-gray-700"
              ),
              children: /* @__PURE__ */ e.jsx(Y, { size: "18", icon: "mdi:chevron-right" })
            }
          )
        ] })
      ]
    }
  );
}, En = ({
  label: r,
  checked: t = !1,
  disabled: s = !1,
  onChange: n,
  name: a,
  value: i
}) => {
  const d = (l) => {
    n && n(l.target.checked);
  };
  return /* @__PURE__ */ e.jsxs(
    "label",
    {
      className: J(
        "inline-flex items-center cursor-pointer",
        s && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "radio",
            className: J(
              "w-5 h-5 border-2 rounded-full appearance-none",
              "focus:outline-none focus:ring-2 focus:ring-primary/25",
              t ? "border-primary bg-primary" : "border-gray-300 hover:border-primary",
              s && "cursor-not-allowed"
            ),
            checked: t,
            disabled: s,
            onChange: d,
            name: a,
            value: i
          }
        ),
        r && /* @__PURE__ */ e.jsx("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-300", children: r })
      ]
    }
  );
}, Is = ye(
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
), zs = ({
  width: r,
  height: t,
  variant: s = "default",
  rounded: n = "md",
  fullWidth: a = !1,
  className: i
}) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: b(Is({ variant: s, rounded: n, fullWidth: a }), i),
    style: {
      width: !a && typeof r == "number" ? `${r}px` : r,
      height: typeof t == "number" ? `${t}px` : t
    }
  }
), Cn = ({
  min: r = 0,
  max: t = 100,
  step: s = 1,
  value: n,
  defaultValue: a = r,
  onChange: i,
  className: d,
  disabled: l = !1,
  showValue: c = !1,
  marks: m = []
}) => {
  const [g, w] = re(a), [p, u] = re(!1), j = he(null), v = n !== void 0 ? n : g, f = (I) => {
    if (l) return;
    const D = Math.min(Math.max(I, r), t);
    n === void 0 && w(D), i == null || i(D);
  }, y = (I) => {
    l || (u(!0), M(I));
  }, x = (I) => {
    !p || l || M(I);
  }, F = () => {
    u(!1);
  }, M = (I) => {
    if (!j.current) return;
    const D = j.current.getBoundingClientRect(), S = (I.clientX - D.left) / D.width, T = r + (t - r) * S, H = Math.round(T / s) * s;
    f(H);
  };
  Ne(() => {
    if (p) {
      const I = Ee();
      I.addEventListener("mousemove", x), I.addEventListener("mouseup", F);
    }
    return () => {
      const I = Ee();
      I.removeEventListener("mousemove", x), I.removeEventListener("mouseup", F);
    };
  }, [p]);
  const O = (v - r) / (t - r) * 100;
  return /* @__PURE__ */ e.jsxs("div", { className: J("relative w-full", d), children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: j,
        className: J(
          "relative h-2 bg-gray-200 rounded-full cursor-pointer",
          l && "opacity-50 cursor-not-allowed"
        ),
        onMouseDown: y,
        children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute h-full bg-primary rounded-full",
              style: { width: `${O}%` }
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: J(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                l && "cursor-not-allowed"
              ),
              style: { left: `${O}%`, transform: "translate(-50%, -50%)" }
            }
          )
        ]
      }
    ),
    m.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex justify-between mt-2", children: m.map((I) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "text-xs text-gray-500",
        style: { left: `${(I.value - r) / (t - r) * 100}%` },
        children: I.label
      },
      I.value
    )) }),
    c && /* @__PURE__ */ e.jsx("div", { className: "mt-2 text-sm text-gray-600", children: v })
  ] });
}, $s = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}, Ls = {
  primary: "text-primary",
  warning: "text-warning-500",
  default: "text-default-400"
}, Rn = ({
  rating: r,
  maxRating: t = 5,
  size: s = "md",
  color: n = "primary",
  readOnly: a = !1,
  onRatingChange: i,
  className: d
}) => {
  const [l, c] = re(null), m = (u) => {
    a || c(u);
  }, g = () => {
    a || c(null);
  }, w = (u) => {
    !a && i && i(u);
  }, p = l !== null ? l : r;
  return /* @__PURE__ */ e.jsx("div", { className: b("flex items-center gap-1", d), children: [...Array(t)].map((u, j) => {
    const v = j + 1, f = v <= p, y = l !== null && v <= l;
    return /* @__PURE__ */ e.jsx(
      "button",
      {
        className: b(
          "transition-colors duration-200",
          $s[s],
          f || y ? Ls[n] : "text-default-200",
          !a && "cursor-pointer"
        ),
        onMouseEnter: () => m(v),
        onMouseLeave: g,
        onClick: () => w(v),
        disabled: a,
        "aria-label": `Rate ${v} out of ${t}`,
        children: /* @__PURE__ */ e.jsx(
          Y,
          {
            icon: f || y ? "mdi:star" : "mdi:star-outline",
            className: "w-full h-full"
          }
        )
      },
      j
    );
  }) });
}, Vs = {
  active: {
    bgColor: "bg-success-500",
    label: "Active"
  },
  inactive: {
    bgColor: "bg-default-400",
    label: "Inactive"
  },
  pending: {
    bgColor: "bg-warning-500",
    label: "Pending"
  },
  warning: {
    bgColor: "bg-warning-500",
    label: "Warning"
  },
  error: {
    bgColor: "bg-danger-500",
    label: "Error"
  }
}, Fs = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4"
}, Sn = ({
  status: r,
  size: t = "md",
  withLabel: s = !1,
  className: n
}) => {
  const { bgColor: a, label: i } = Vs[r], d = Fs[t];
  return /* @__PURE__ */ e.jsxs("div", { className: b("flex items-center gap-2", n), children: [
    /* @__PURE__ */ e.jsx("div", { className: b("rounded-full animate-pulse", a, d) }),
    s && /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: i })
  ] });
}, Jr = (r, t) => {
  if (t) return t;
  switch (r) {
    case "completed":
      return "mdi:check";
    case "active":
      return "mdi:circle-medium";
    default:
      return "mdi:circle-outline";
  }
}, Xr = (r) => {
  switch (r) {
    case "completed":
      return "text-white bg-primary-500 ring-4 ring-primary-50";
    case "active":
      return "text-primary-500 bg-primary-50 ring-4 ring-primary-50";
    default:
      return "text-neutral-400 bg-neutral-50 ring-4 ring-neutral-50";
  }
}, Bs = ({
  steps: r,
  activeStep: t,
  className: s,
  variant: n = "default"
}) => /* @__PURE__ */ e.jsx("div", { className: b("flex flex-row items-center w-full justify-between", s), children: r.map((a, i) => {
  const d = i < t ? "completed" : i === t ? "active" : "pending";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "flex items-center flex-1",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: b(
          "flex flex-col items-center z-10",
          n === "default" ? "gap-4" : "gap-2",
          n === "default" ? "px-5" : "px-3"
        ), children: [
          n === "default" && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: b(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                Xr(d)
              ),
              children: /* @__PURE__ */ e.jsx(
                Y,
                {
                  icon: Jr(d, a.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ e.jsx(
              "span",
              {
                className: b(
                  "text-sm font-medium",
                  d === "active" ? "text-primary-500" : d === "completed" ? "text-neutral-900" : "text-neutral-500"
                ),
                children: a.label
              }
            ),
            a.description && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-neutral-500", children: a.description })
          ] })
        ] }),
        i < r.length - 1 && /* @__PURE__ */ e.jsx(
          Ms,
          {
            className: b(
              "transition-all duration-200",
              i < t ? "bg-primary-500" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    i
  );
}) }), Ws = ({
  steps: r,
  activeStep: t,
  className: s,
  variant: n = "default"
}) => /* @__PURE__ */ e.jsx("div", { className: b("flex flex-col items-start gap-8", s), children: r.map((a, i) => {
  const d = i < t ? "completed" : i === t ? "active" : "pending";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "flex flex-row w-full items-center relative",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: b(
          "flex flex-row items-center z-10",
          n === "default" ? "gap-4" : "gap-2"
        ), children: [
          n === "default" && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: b(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                Xr(d)
              ),
              children: /* @__PURE__ */ e.jsx(
                Y,
                {
                  icon: Jr(d, a.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-start", children: [
            /* @__PURE__ */ e.jsx(
              "span",
              {
                className: b(
                  "text-sm font-medium",
                  d === "active" ? "text-primary-500" : d === "completed" ? "text-neutral-900" : "text-neutral-500"
                ),
                children: a.label
              }
            ),
            a.description && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-neutral-500", children: a.description })
          ] })
        ] }),
        i < r.length - 1 && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: b(
              "absolute transition-all duration-200",
              n === "default" ? "left-4 w-[1px] top-10 bottom-[-24px]" : "left-0 w-[1px] top-6 bottom-[-24px]",
              i < t ? "bg-primary-500" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    i
  );
}) }), _n = ({
  orientation: r = "horizontal",
  variant: t = "default",
  ...s
}) => r === "vertical" ? /* @__PURE__ */ e.jsx(Ws, { variant: t, ...s }) : /* @__PURE__ */ e.jsx(Bs, { variant: t, ...s }), Mn = ({
  label: r,
  checked: t = !1,
  disabled: s = !1,
  onChange: n,
  size: a = "md"
}) => {
  const i = (c) => {
    n && n(c.target.checked);
  }, d = {
    sm: "w-8 h-4",
    md: "w-11 h-6",
    lg: "w-14 h-7"
  }, l = {
    sm: "w-3 h-3",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  return /* @__PURE__ */ e.jsxs(
    "label",
    {
      className: J(
        "inline-flex items-center cursor-pointer",
        s && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "checkbox",
              className: "sr-only",
              checked: t,
              disabled: s,
              onChange: i
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: J(
                "block rounded-full transition-colors duration-200 ease-in-out",
                d[a],
                t ? "bg-primary" : "bg-gray-200 dark:bg-gray-700",
                s && "cursor-not-allowed"
              )
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: J(
                "absolute rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out",
                l[a],
                t ? a === "sm" ? "translate-x-4" : a === "md" ? "translate-x-5" : "translate-x-7" : "translate-x-0.5",
                "top-1/2 -translate-y-1/2"
              )
            }
          )
        ] }),
        r && /* @__PURE__ */ e.jsx("span", { className: "ml-3 text-sm text-gray-700 dark:text-gray-300", children: r })
      ]
    }
  );
}, Tn = ({
  items: r,
  defaultActiveId: t,
  variant: s = "default",
  size: n = "md",
  className: a,
  tabListClassName: i,
  tabClassName: d,
  contentClassName: l,
  onChange: c
}) => {
  var j, v;
  const [m, g] = re(t || ((j = r[0]) == null ? void 0 : j.id) || ""), w = Ae((f) => {
    g(f), c == null || c(f);
  }, [c]), p = () => {
    switch (n) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  }, u = (f, y) => {
    const x = J(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      p(),
      y && "opacity-50 cursor-not-allowed",
      !y && "cursor-pointer"
    );
    switch (s) {
      case "pills":
        return J(
          x,
          "rounded-full",
          f ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return J(
          x,
          "border-b-2",
          f ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      default:
        return J(
          x,
          "border-b-2",
          f ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: J("w-full", a), children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: J(
          "flex space-x-1 border-b border-gray-200 dark:border-gray-700",
          s === "pills" && "space-x-2 border-b-0",
          i
        ),
        children: r.map((f) => {
          const y = f.id === m, x = !!f.disabled;
          return /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => !x && w(f.id),
              disabled: x,
              className: J(
                u(y, x),
                d
              ),
              children: [
                f.icon && /* @__PURE__ */ e.jsx(
                  Y,
                  {
                    icon: f.icon,
                    className: "w-5 h-5 flex-shrink-0"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { children: f.label })
              ]
            },
            f.id
          );
        })
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: J("mt-4", l), children: (v = r.find((f) => f.id === m)) == null ? void 0 : v.content })
  ] });
}, Hs = ({
  variant: r = "p",
  children: t,
  className: s,
  as: n
}) => {
  const a = {
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
  }, d = n || ((l) => {
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
  })(r);
  return /* @__PURE__ */ e.jsx(d, { className: b("text-gray-900", a[r], s), children: t });
}, or = "timepicker-dropdown-opened", Ys = ye(
  "border bg-white px-3 py-2 ring-0 transition-colors placeholder:text-neutral-500 placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50",
        error: "border-danger-500 hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50",
        success: "border-success-500 hover:border-success-600 focus:border-success-600 hover:bg-success-50",
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
), Qr = ve(
  ({
    value: r,
    onChange: t,
    use24Hour: s = !1,
    variant: n = "default",
    size: a = "md",
    rounded: i = "md",
    disabled: d = !1,
    errorText: l,
    helperText: c,
    label: m,
    required: g = !1,
    labelPlacement: w = "top",
    fullWidth: p = !1,
    className: u,
    placeholder: j = "Select time",
    leftIcon: v,
    rightIcon: f,
    valueFormatter: y,
    closeOnSelect: x = !0,
    ...F
  }, M) => {
    const [O, I] = re(!1), [D, N] = re(r || ""), [S, T] = re(0), [H, C] = re(0), [R, A] = re(!0), G = he(null), k = he(null), E = he(null), te = `timepicker-${Me.useId().replace(/:/g, "")}`, ne = () => {
      if (!O || !k.current || !E.current) return;
      const B = k.current.getBoundingClientRect(), Z = E.current, me = Ee().innerHeight - B.bottom;
      Z.style.top = `${B.bottom + 4}px`, Z.style.bottom = "auto", Z.style.left = `${B.left}px`, Z.style.maxHeight = `${me - 8}px`, Z.style.width = `${B.width}px`;
    };
    Ne(() => {
      const B = Ee(), Z = be(), X = () => {
        O && ne();
      }, me = () => {
        O && ne();
      }, pe = (U) => {
        U.detail.id !== te && I(!1);
      }, V = (U) => {
        const oe = U.target;
        G.current && E.current && !G.current.contains(oe) && !E.current.contains(oe) && I(!1);
      };
      return O && (ne(), B.addEventListener("scroll", X, !0), B.addEventListener("resize", me)), Z.addEventListener(or, pe), Z.addEventListener("mousedown", V), () => {
        B.removeEventListener("scroll", X, !0), B.removeEventListener("resize", me), Z.removeEventListener(or, pe), Z.removeEventListener("mousedown", V);
      };
    }, [O, te]);
    const P = () => {
      d || (O || be().dispatchEvent(
        new CustomEvent(or, {
          detail: { id: te }
        })
      ), I(!O));
    };
    Ne(() => {
      if (r) {
        N(r);
        const [B, Z] = r.split(":").map(Number);
        s ? T(B) : (T(B % 12 || 12), A(B < 12)), C(Z);
      }
    }, [r, s]);
    const L = () => {
      const Z = `${(s || R ? S : S + 12).toString().padStart(2, "0")}:${H.toString().padStart(2, "0")}`;
      N(Z), t == null || t(Z), x && I(!1);
    }, ce = () => s ? Array.from({ length: 24 }, (B, Z) => Z) : Array.from({ length: 12 }, (B, Z) => Z + 1), de = () => Array.from({ length: 60 }, (B, Z) => Z), xe = y ? y(D) : D, ie = be();
    return "body" in ie ? /* @__PURE__ */ e.jsxs("div", { ref: G, className: b("relative", p && "w-full", u), children: [
      m && /* @__PURE__ */ e.jsxs(
        "label",
        {
          className: b(
            "block text-sm font-medium text-gray-700 mb-1",
            w === "left" && "inline-block mr-2"
          ),
          children: [
            m,
            g && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { ref: k, className: "relative", children: [
        v && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 flex items-center justify-center", children: /* @__PURE__ */ e.jsx(Y, { icon: v, size: 20 }) }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            ref: M,
            type: "text",
            value: xe,
            placeholder: j,
            onClick: P,
            readOnly: !0,
            className: b(
              Ys({ variant: n, size: a, rounded: i, fullWidth: p }),
              v && "pl-10",
              f && "pr-10",
              "text-left"
            ),
            disabled: d,
            ...F
          }
        ),
        f && /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 flex items-center justify-center", children: /* @__PURE__ */ e.jsx(Y, { icon: f, size: 20 }) })
      ] }),
      O && ze(
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: E,
            className: "fixed z-[9999] min-w-[320px] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (B) => B.stopPropagation(),
            children: /* @__PURE__ */ e.jsxs("div", { className: "p-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: b(
                "grid gap-4 text-sm font-medium text-gray-500",
                s ? "grid-cols-2" : "grid-cols-3"
              ), children: [
                /* @__PURE__ */ e.jsx("span", { children: "Hours" }),
                /* @__PURE__ */ e.jsx("span", { children: "Minutes" }),
                !s && /* @__PURE__ */ e.jsx("span", { children: "AM/PM" })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: b(
                "flex mt-2",
                s ? "justify-center gap-8" : "justify-center gap-4"
              ), children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-24 flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-1 py-1", children: ce().map((B) => /* @__PURE__ */ e.jsx(
                  Se,
                  {
                    variant: "ghost",
                    onClick: () => T(B),
                    className: b(
                      "px-3 py-1.5 text-sm rounded hover:bg-gray-100 w-full justify-start",
                      S === B && "bg-primary-100 text-primary-700"
                    ),
                    children: B.toString().padStart(2, "0")
                  },
                  B
                )) }) }) }),
                /* @__PURE__ */ e.jsx("div", { className: "w-24 flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-1 py-1", children: de().map((B) => /* @__PURE__ */ e.jsx(
                  Se,
                  {
                    variant: "ghost",
                    onClick: () => C(B),
                    className: b(
                      "px-3 py-1.5 text-sm rounded hover:bg-gray-100 w-full justify-start",
                      H === B && "bg-primary-100 text-primary-700"
                    ),
                    children: B.toString().padStart(2, "0")
                  },
                  B
                )) }) }) }),
                !s && /* @__PURE__ */ e.jsxs("div", { className: "w-24 flex flex-col gap-2", children: [
                  /* @__PURE__ */ e.jsx(
                    Se,
                    {
                      variant: "ghost",
                      onClick: () => A(!0),
                      className: b(
                        "px-3 py-1.5 text-sm rounded hover:bg-gray-100 w-full justify-start",
                        R && "bg-primary-100 text-primary-700"
                      ),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    Se,
                    {
                      variant: "ghost",
                      onClick: () => A(!1),
                      className: b(
                        "px-3 py-1.5 text-sm rounded hover:bg-gray-100 w-full justify-start",
                        !R && "bg-primary-100 text-primary-700"
                      ),
                      children: "PM"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "mt-4 flex justify-end", children: /* @__PURE__ */ e.jsx(
                Se,
                {
                  variant: "primary",
                  onClick: L,
                  size: "sm",
                  children: "Select"
                }
              ) })
            ] })
          }
        ),
        ie.body
      ),
      l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-danger-600", children: l }),
      c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-gray-500", children: c })
    ] }) : null;
  }
);
Qr.displayName = "PrimitiveTimePicker";
const Gs = ({
  value: r,
  onChange: t,
  valueFormatter: s,
  closeOnSelect: n,
  ...a
}) => /* @__PURE__ */ e.jsx(
  Qr,
  {
    value: r,
    onChange: t,
    valueFormatter: s,
    closeOnSelect: n,
    ...a
  }
);
Gs.displayName = "TimePicker";
const Us = ye(
  "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-neutral-200 data-[state=checked]:bg-primary-500 focus-visible:ring-primary-500",
        success: "bg-neutral-200 data-[state=checked]:bg-success-500 focus-visible:ring-success-500",
        warning: "bg-neutral-200 data-[state=checked]:bg-warning-500 focus-visible:ring-warning-500",
        danger: "bg-neutral-200 data-[state=checked]:bg-danger-500 focus-visible:ring-danger-500"
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
), Ks = ye(
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
), Zs = ve(
  ({
    checked: r = !1,
    onCheckedChange: t,
    variant: s = "primary",
    size: n = "md",
    label: a,
    required: i = !1,
    helperText: d,
    errorText: l,
    error: c = !1,
    className: m,
    ...g
  }, w) => {
    const p = Me.useId(), u = `${p}-helper`, j = `${p}-error`;
    return /* @__PURE__ */ e.jsxs("div", { className: "inline-flex flex-col gap-1.5", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            role: "switch",
            "aria-checked": r,
            "data-state": r ? "checked" : "unchecked",
            onClick: () => t == null ? void 0 : t(!r),
            ref: w,
            className: b(Us({ variant: c ? "danger" : s, size: n }), m),
            "aria-describedby": c ? j : d ? u : void 0,
            "aria-invalid": c,
            "aria-required": i,
            ...g,
            children: /* @__PURE__ */ e.jsx(
              "span",
              {
                "data-state": r ? "checked" : "unchecked",
                className: b(
                  Ks({ size: n }),
                  r ? "translate-x-5" : "translate-x-1"
                )
              }
            )
          }
        ),
        a && /* @__PURE__ */ e.jsxs(
          "label",
          {
            htmlFor: p,
            className: "text-sm text-neutral-900",
            children: [
              a,
              i && /* @__PURE__ */ e.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
            ]
          }
        )
      ] }),
      c && l && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-danger-500", id: j, children: l }),
      !c && d && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-neutral-500", id: u, children: d })
    ] });
  }
);
Zs.displayName = "Toggle";
const qs = ye(
  "absolute z-50 px-3 py-2 text-sm rounded-md shadow-lg transition-opacity duration-200",
  {
    variants: {
      color: {
        primary: "bg-primary-500 text-white",
        secondary: "bg-secondary-500 text-white",
        success: "bg-success-500 text-white",
        warning: "bg-warning-500 text-white",
        danger: "bg-danger-500 text-white",
        info: "bg-info-500 text-white",
        neutral: "bg-neutral-500 text-white",
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
), Js = ye("absolute w-2 h-2 transform rotate-45", {
  variants: {
    color: {
      primary: "bg-primary-500",
      secondary: "bg-secondary-500",
      success: "bg-success-500",
      warning: "bg-warning-500",
      danger: "bg-danger-500",
      info: "bg-info-500",
      neutral: "bg-neutral-500",
      light: "bg-white border-r border-b border-neutral-200"
    }
  },
  defaultVariants: {
    color: "primary"
  }
}), An = ({
  content: r,
  children: t,
  position: s = "top",
  delay: n = 0,
  className: a,
  color: i = "light",
  size: d = "md",
  isOpen: l,
  onOpenChange: c,
  trigger: m = "hover"
}) => {
  const [g, w] = re(!1), [p, u] = re({ top: 0, left: 0 }), j = he(null), v = he(null), f = he(), y = l !== void 0, x = y ? l : g, F = () => {
    if (!j.current || !v.current) return;
    const N = v.current.getBoundingClientRect(), S = j.current.getBoundingClientRect(), T = Ee(), H = T.scrollX || T.pageXOffset, C = T.scrollY || T.pageYOffset;
    let R = 0, A = 0;
    const G = 8;
    switch (s) {
      case "top":
        R = N.top + C - S.height - G, A = N.left + H + (N.width - S.width) / 2;
        break;
      case "bottom":
        R = N.bottom + C + G, A = N.left + H + (N.width - S.width) / 2;
        break;
      case "left":
        R = N.top + C + (N.height - S.height) / 2, A = N.left + H - S.width - G;
        break;
      case "right":
        R = N.top + C + (N.height - S.height) / 2, A = N.right + H + G;
        break;
    }
    const k = T.innerWidth, E = T.innerHeight;
    A < 0 && (A = 0), A + S.width > k && (A = k - S.width), R < 0 && (R = 0), R + S.height > E && (R = E - S.height), u({ top: R, left: A });
  };
  Ne(() => {
    if (x) {
      F();
      const N = Ee();
      N.addEventListener("scroll", F, !0), N.addEventListener("resize", F);
    }
    return () => {
      const N = Ee();
      N.removeEventListener("scroll", F, !0), N.removeEventListener("resize", F);
    };
  }, [x, s]);
  const M = () => {
    y ? c == null || c(!0) : f.current = setTimeout(() => {
      w(!0);
    }, n);
  }, O = () => {
    f.current && clearTimeout(f.current), y ? c == null || c(!1) : w(!1);
  }, I = (N) => {
    N.stopPropagation(), m === "click" && (y ? c == null || c(!l) : w(!g));
  };
  Ne(() => {
    const N = (S) => {
      m === "click" && j.current && !j.current.contains(S.target) && v.current && !v.current.contains(S.target) && O();
    };
    return x && document.addEventListener("click", N), () => {
      document.removeEventListener("click", N);
    };
  }, [x, m]);
  const D = () => {
    if (!x) return null;
    const N = be();
    return "body" in N ? ze(
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: j,
          className: b(qs({ color: i, size: d }), a),
          style: {
            top: `${p.top}px`,
            left: `${p.left}px`
          },
          children: [
            r,
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: b(
                  Js({ color: i }),
                  s === "top" && "bottom-[-4px] left-1/2 -translate-x-1/2",
                  s === "bottom" && "top-[-4px] left-1/2 -translate-x-1/2",
                  s === "left" && "right-[-4px] top-1/2 -translate-y-1/2",
                  s === "right" && "left-[-4px] top-1/2 -translate-y-1/2"
                )
              }
            )
          ]
        }
      ),
      N.body
    ) : null;
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: v,
      className: "relative inline-block",
      onMouseEnter: m === "hover" ? M : void 0,
      onMouseLeave: m === "hover" ? O : void 0,
      onClick: I,
      children: [
        t,
        D()
      ]
    }
  );
}, Xs = ye(
  "relative overflow-hidden",
  {
    variants: {
      variant: {
        bar: "w-full bg-neutral-100",
        circular: "inline-block"
      },
      color: {
        primary: "text-primary-500",
        secondary: "text-secondary-500",
        success: "text-success-500",
        warning: "text-warning-500",
        danger: "text-danger-500",
        info: "text-info-500"
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
), Qs = {
  sm: 24,
  md: 36,
  lg: 48
}, en = {
  primary: "bg-primary-500",
  secondary: "bg-secondary-500",
  success: "bg-success-500",
  warning: "bg-warning-500",
  danger: "bg-danger-500",
  info: "bg-info-500"
}, rn = {
  primary: "#007C99",
  // Tailwind primary-500
  secondary: "#CEEAE7",
  success: "#00B37D",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#0EA5E9"
}, tn = Me.forwardRef(
  ({
    className: r,
    variant: t = "bar",
    color: s = "primary",
    size: n = "md",
    value: a = 0,
    isIndeterminate: i = !1,
    showValue: d = !1,
    label: l,
    rounded: c = "full",
    icon: m,
    ...g
  }, w) => {
    const p = Math.min(Math.max(a, 0), 100), u = Qs[n], j = n === "sm" ? 2 : n === "md" ? 3 : 4, v = (u - j) / 2, f = 2 * Math.PI * v, y = f - p / 100 * f;
    let x = "";
    return t === "loading" ? x = "rounded-full" : c ? x = c === "none" ? "" : `rounded-${c}` : x = "rounded-md", t === "circular" ? /* @__PURE__ */ e.jsxs("div", { className: "inline-flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative", style: { width: u, height: u }, children: [
        /* @__PURE__ */ e.jsxs(
          "svg",
          {
            className: b(
              "transform -rotate-90",
              i ? "animate-spin" : ""
            ),
            width: u,
            height: u,
            children: [
              /* @__PURE__ */ e.jsx(
                "circle",
                {
                  strokeWidth: j,
                  stroke: "#e5e7eb",
                  fill: "transparent",
                  r: v,
                  cx: u / 2,
                  cy: u / 2
                }
              ),
              /* @__PURE__ */ e.jsx(
                "circle",
                {
                  className: b(
                    "transition-all duration-300 ease-in-out",
                    i ? "animate-dash" : ""
                  ),
                  strokeWidth: j,
                  strokeDasharray: f,
                  strokeDashoffset: i ? 0 : y,
                  strokeLinecap: "round",
                  stroke: rn[s],
                  fill: "transparent",
                  r: v,
                  cx: u / 2,
                  cy: u / 2
                }
              )
            ]
          }
        ),
        m && /* @__PURE__ */ e.jsx("span", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ e.jsx(Y, { icon: m, size: u * 0.5 }) }),
        d && !i && !m && /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 flex items-center justify-center text-xs font-medium", children: [
          Math.round(p),
          "%"
        ] })
      ] }),
      l && /* @__PURE__ */ e.jsx("span", { className: "text-sm text-neutral-600", children: l })
    ] }) : /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: w,
          className: b(Xs({ variant: t === "loading" ? "bar" : t, size: n }), x, r),
          role: "progressbar",
          "aria-valuenow": i ? void 0 : p,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...g,
          children: /* @__PURE__ */ e.jsx(
            "div",
            {
              className: b(
                "h-full transition-all duration-300 ease-in-out",
                i ? "animate-progress-indeterminate" : "",
                en[s],
                x
              ),
              style: {
                width: i ? "100%" : `${p}%`
              }
            }
          )
        }
      ),
      (d || l) && /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between text-xs text-neutral-600", children: [
        l && /* @__PURE__ */ e.jsx("span", { children: l }),
        d && !i && /* @__PURE__ */ e.jsxs("span", { children: [
          Math.round(p),
          "%"
        ] })
      ] })
    ] });
  }
);
tn.displayName = "Progress";
const sn = ye("flex items-center text-sm", {
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
}), nn = ve(
  ({
    className: r,
    variant: t = "default",
    size: s = "md",
    items: n,
    separator: a = /* @__PURE__ */ e.jsx(Y, { icon: "mdi:slash-forward", className: "h-4 w-4 flex-shrink-0" }),
    activeLastItem: i = !0,
    ...d
  }, l) => /* @__PURE__ */ e.jsx(
    "nav",
    {
      ref: l,
      className: b(sn({ variant: t, size: s }), r),
      "aria-label": "Breadcrumb",
      ...d,
      children: /* @__PURE__ */ e.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: n.map((c, m) => {
        const g = m === n.length - 1, w = g && i;
        return /* @__PURE__ */ e.jsxs(
          "li",
          {
            className: b(
              "flex items-center gap-1.5",
              w && "text-primary-500 font-medium"
            ),
            children: [
              c.icon && /* @__PURE__ */ e.jsx(
                Y,
                {
                  icon: c.icon,
                  className: b(
                    "flex-shrink-0",
                    s === "sm" && "h-3.5 w-3.5",
                    s === "md" && "h-4 w-4",
                    s === "lg" && "h-5 w-5"
                  )
                }
              ),
              c.href && !w ? /* @__PURE__ */ e.jsx(
                "a",
                {
                  href: c.href,
                  className: b(
                    "transition-colors duration-200",
                    "hover:text-primary-500 hover:underline focus:outline-none",
                    "focus-visible:text-primary-500 focus-visible:underline",
                    "active:text-primary-600"
                  ),
                  children: /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[200px] inline-block align-bottom", children: c.label })
                }
              ) : /* @__PURE__ */ e.jsx("span", { className: b(
                "truncate max-w-[200px] inline-block",
                w && "text-primary-500"
              ), children: c.label }),
              !g && /* @__PURE__ */ e.jsx("span", { className: b(
                "text-neutral-400 flex-shrink-0",
                s === "sm" && "scale-90",
                s === "lg" && "scale-110"
              ), children: a })
            ]
          },
          c.label
        );
      }) })
    }
  )
);
nn.displayName = "Breadcrumbs";
const et = (r) => {
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
    header: t.header[r],
    row: t.row[r],
    border: t.border[r],
    stripe: t.stripe[r]
  };
}, on = ({ schema: r, variant: t = "primary" }) => {
  const s = [{ name: "no", label: "No.", accessorKey: "no", type: "number" }, ...r], n = et(t);
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white rounded-md", children: /* @__PURE__ */ e.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full border-spacing-0 border-separate", children: [
    /* @__PURE__ */ e.jsx("thead", { className: b("border-2 sticky top-0 z-10 rounded-t-md", n.border), children: /* @__PURE__ */ e.jsx("tr", { children: s.map((a, i) => /* @__PURE__ */ e.jsx(
      "th",
      {
        className: b(
          "text-sm text-wrap border-y p-4 text-left",
          n.header,
          {
            "rounded-tl-md": i === 0,
            "rounded-tr-md": i === s.length - 1
          }
        ),
        children: a.label
      },
      i
    )) }) }),
    /* @__PURE__ */ e.jsx("tbody", { className: "max-h-[50vh]", children: [...Array(5)].map((a, i) => /* @__PURE__ */ e.jsx(
      "tr",
      {
        className: b("p-3", {
          [n.stripe]: i % 2 !== 0,
          "bg-white": i % 2 === 0
        }),
        children: s.map((d, l) => /* @__PURE__ */ e.jsx(
          "td",
          {
            className: "text-left text-nowrap text-sm p-4",
            children: /* @__PURE__ */ e.jsx(zs, { className: "h-10 w-full rounded-md" })
          },
          `${i}-${l}`
        ))
      },
      i
    )) })
  ] }) }) });
}, Pn = ({
  schema: r,
  data: t,
  className: s,
  headerClassName: n,
  rowClassName: a,
  cellClassName: i,
  emptyState: d,
  isLoading: l,
  loadingState: c,
  showIndex: m = !1,
  onPageChange: g,
  onPageSizeChange: w,
  onSortChange: p,
  onRowClick: u,
  showPagination: j = !1,
  variant: v = "primary",
  meta: f = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [y, x] = re(() => {
    const D = r.find((N) => N.sortable && N.sort);
    return D ? [{
      id: D.accessorKey.toString(),
      desc: D.sort === "desc"
    }] : [];
  }), F = Me.useMemo(() => {
    const D = r.map((N) => ({
      accessorKey: N.accessorKey,
      header: N.label,
      enableSorting: !!N.sortable,
      cell: N.render ? ({ row: S }) => {
        var T;
        return (T = N.render) == null ? void 0 : T.call(N, S.original[N.accessorKey], S.original, S.index);
      } : ({ row: S }) => S.original[N.accessorKey] || "-",
      meta: {
        align: N.align || "left"
      }
    }));
    return m ? [{
      accessorKey: "no",
      header: "No.",
      enableSorting: !1,
      cell: ({ row: N }) => (f.current_page - 1) * f.limit_number + N.index + 1,
      meta: {
        align: "left"
      }
    }, ...D] : D;
  }, [r, m, f]), M = Et({
    data: t,
    columns: F,
    state: {
      sorting: y
    },
    onSortingChange: (D) => {
      const N = typeof D == "function" ? D(y) : D;
      x(N), N.length > 0 ? p == null || p(N[0].desc ? "desc" : "asc", N[0].id) : p == null || p("", "");
    },
    getCoreRowModel: St(),
    getSortedRowModel: Rt(),
    getPaginationRowModel: Ct(),
    manualPagination: !0,
    pageCount: f.total_page
  }), O = et(v);
  if (l)
    return c || /* @__PURE__ */ e.jsx(on, { schema: r, variant: v });
  const I = (D, N, S) => {
    const T = D.target;
    T.tagName === "BUTTON" || T.tagName === "A" || T.tagName === "INPUT" || T.tagName === "SELECT" || T.closest("button") !== null || T.closest("a") !== null || T.closest("input") !== null || T.closest("select") !== null || u == null || u(N, S);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-md", children: [
    /* @__PURE__ */ e.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ e.jsxs("table", { className: b("w-full border-spacing-0 border-separate", s), children: [
      /* @__PURE__ */ e.jsx("thead", { className: b("border-2 sticky top-0 z-10 rounded-t-md", O.border), children: M.getHeaderGroups().map((D) => /* @__PURE__ */ e.jsx("tr", { children: D.headers.map((N, S) => {
        var T, H, C;
        return /* @__PURE__ */ e.jsx(
          "th",
          {
            className: b(
              "text-sm text-wrap border-y p-4",
              O.header,
              {
                "cursor-pointer": N.column.getCanSort(),
                "rounded-tl-md": S === 0,
                "rounded-tr-md": S === D.headers.length - 1,
                "text-left": ((T = N.column.columnDef.meta) == null ? void 0 : T.align) === "left",
                "text-center": ((H = N.column.columnDef.meta) == null ? void 0 : H.align) === "center",
                "text-right": ((C = N.column.columnDef.meta) == null ? void 0 : C.align) === "right"
              },
              n
            ),
            onClick: N.column.getCanSort() ? N.column.getToggleSortingHandler() : void 0,
            children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsx("span", { className: b({
                "font-semibold": S === 0
              }), children: kr(N.column.columnDef.header, N.getContext()) }),
              N.column.getCanSort() && /* @__PURE__ */ e.jsx(
                Y,
                {
                  icon: N.column.getIsSorted() ? N.column.getIsSorted() === "desc" ? "mdi:keyboard-arrow-up" : "mdi:keyboard-arrow-down" : "mdi:unfold-more-horizontal",
                  className: b("h-4 w-4", {
                    "text-white": v !== "ghost",
                    "text-gray-700": v === "ghost"
                  })
                }
              )
            ] })
          },
          N.id
        );
      }) }, D.id)) }),
      /* @__PURE__ */ e.jsx("tbody", { className: "max-h-[50vh]", children: M.getRowModel().rows.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx(
        "td",
        {
          colSpan: M.getAllColumns().length,
          className: b(
            "text-center border h-full w-full rounded-b-md"
          ),
          children: d || /* @__PURE__ */ e.jsxs("div", { className: "flex mx-auto w-full text-center justify-center gap-3 items-center", children: [
            /* @__PURE__ */ e.jsx("p", { children: "Data Not Found" }),
            /* @__PURE__ */ e.jsx(Y, { icon: "mdi:face-frown-open", size: 34 })
          ] })
        }
      ) }) : M.getRowModel().rows.map((D, N) => /* @__PURE__ */ e.jsx(
        "tr",
        {
          className: b(
            "p-3",
            O.row,
            {
              [O.stripe]: N % 2 !== 0,
              "bg-white": N % 2 === 0,
              "cursor-pointer": u
            },
            a
          ),
          onClick: (S) => I(S, D.original, N),
          children: D.getVisibleCells().map((S) => {
            var T, H, C;
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: b(
                  "px-4 py-3 text-sm text-gray-900",
                  {
                    "text-left": ((T = S.column.columnDef.meta) == null ? void 0 : T.align) === "left",
                    "text-center": ((H = S.column.columnDef.meta) == null ? void 0 : H.align) === "center",
                    "text-right": ((C = S.column.columnDef.meta) == null ? void 0 : C.align) === "right"
                  },
                  i
                ),
                children: kr(S.column.columnDef.cell, S.getContext())
              },
              S.id
            );
          })
        },
        D.id
      )) })
    ] }) }),
    !!t.length && j && /* @__PURE__ */ e.jsx("div", { className: "p-4 bg-white rounded-b-md", children: /* @__PURE__ */ e.jsx(
      Os,
      {
        currentPage: f.current_page,
        totalPages: f.total_page,
        totalData: f.total_data,
        onPageChange: g || (() => {
        }),
        perPage: f.limit_number,
        onPerPageChange: w || (() => {
        }),
        perPageOptions: [5, 10, 20, 50, 100],
        siblingCount: 1
      }
    ) })
  ] });
}, an = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, rt = ve(
  ({
    className: r,
    variant: t = "default",
    rounded: s = "lg",
    title: n,
    description: a,
    onClose: i,
    icon: d,
    showIcon: l = !0,
    showClose: c = !0,
    ...m
  }, g) => {
    const p = d || (l ? {
      default: "mdi:information",
      success: "mdi:check-circle",
      error: "mdi:alert-circle",
      warning: "mdi:alert",
      info: "mdi:information"
    }[t] : void 0), u = n || a;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: g,
        className: b(
          "flex",
          a ? "items-start gap-3 p-4" : "items-center gap-2 py-2.5 px-3",
          "border border-gray-200",
          an[s],
          {
            "bg-white": t === "default",
            "bg-success-50": t === "success",
            "bg-danger-50": t === "error",
            "bg-warning-50": t === "warning",
            "bg-info-50": t === "info"
          },
          r
        ),
        ...m,
        children: [
          p && /* @__PURE__ */ e.jsx(
            Y,
            {
              icon: p,
              className: b(
                "flex-shrink-0",
                a ? "h-5 w-5 mt-0.5" : "h-4 w-4",
                {
                  "text-gray-500": t === "default",
                  "text-success-500": t === "success",
                  "text-danger-500": t === "error",
                  "text-warning-500": t === "warning",
                  "text-info-500": t === "info"
                }
              )
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
            n && /* @__PURE__ */ e.jsx(
              "h3",
              {
                className: b("text-sm font-medium leading-5", {
                  "text-gray-900": t === "default",
                  "text-success-900": t === "success",
                  "text-danger-900": t === "error",
                  "text-warning-900": t === "warning",
                  "text-info-900": t === "info"
                }),
                children: n
              }
            ),
            a && /* @__PURE__ */ e.jsx(
              "p",
              {
                className: b(n ? "mt-1" : "", "text-sm leading-5", {
                  "text-gray-500": t === "default",
                  "text-success-700": t === "success",
                  "text-danger-700": t === "error",
                  "text-warning-700": t === "warning",
                  "text-info-700": t === "info"
                }),
                children: a
              }
            ),
            !u && /* @__PURE__ */ e.jsx("span", { className: "text-sm leading-5", children: m.children })
          ] }),
          c && i && /* @__PURE__ */ e.jsx(
            Se,
            {
              variant: "ghost",
              size: "sm",
              onClick: i,
              className: b(
                "flex-shrink-0 !p-1",
                a ? "ml-4" : "ml-2",
                {
                  "text-gray-400 hover:text-gray-500": t === "default",
                  "text-success-400 hover:text-success-500": t === "success",
                  "text-danger-400 hover:text-danger-500": t === "error",
                  "text-warning-400 hover:text-warning-500": t === "warning",
                  "text-info-400 hover:text-info-500": t === "info"
                }
              ),
              children: /* @__PURE__ */ e.jsx(Y, { icon: "mdi:close", className: b(a ? "h-5 w-5" : "h-4 w-4") })
            }
          )
        ]
      }
    );
  }
);
rt.displayName = "Toast";
const cr = Nt(void 0), ln = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, Dn = ({ children: r }) => {
  const [t, s] = re([]), n = Ae((l) => {
    s((c) => c.filter((m) => m.id !== l));
  }, []), a = Ae((l) => {
    const c = Math.random().toString(36).substr(2, 9), m = l.position || "top-right", g = l.duration || 5e3, w = {
      ...l,
      id: c,
      position: m
    };
    return s((p) => [...p, w]), g > 0 && setTimeout(() => {
      n(c);
    }, g), c;
  }, [n]), i = t.reduce((l, c) => (l[c.position] || (l[c.position] = []), l[c.position].push(c), l), {
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-right": [],
    "top-center": [],
    "bottom-center": []
  }), d = be();
  return "body" in d ? /* @__PURE__ */ e.jsxs(cr.Provider, { value: { showToast: a, removeToast: n }, children: [
    r,
    ze(
      /* @__PURE__ */ e.jsx(e.Fragment, { children: Object.entries(i).map(([l, c]) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: b(
            "fixed z-[100] flex flex-col gap-2 min-w-[320px] max-w-[420px]",
            ln[l],
            l.includes("bottom") ? "flex-col-reverse" : "flex-col"
          ),
          children: c.map((m) => /* @__PURE__ */ e.jsx(
            rt,
            {
              ...m,
              onClose: () => n(m.id),
              className: "animate-slide-in"
            },
            m.id
          ))
        },
        l
      )) }),
      d.body
    )
  ] }) : /* @__PURE__ */ e.jsx(cr.Provider, { value: { showToast: a, removeToast: n }, children: r });
}, On = () => {
  const r = kt(cr);
  if (!r)
    throw new Error("useToast must be used within a ToastProvider");
  return r;
}, cn = ({
  label: r,
  value: t,
  icon: s,
  className: n
}) => /* @__PURE__ */ e.jsxs(Gr, { className: b(
  "flex items-center gap-4 rounded-lg w-full bg-white p-4 shadow-sm hover:bg-neutral-50 transition-shadow duration-200 justify-between",
  n
), children: [
  /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-gray-500", children: r }),
    /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-2xl font-semibold text-gray-900", children: t })
  ] }),
  s && /* @__PURE__ */ e.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50", children: /* @__PURE__ */ e.jsx(Y, { icon: s, className: "h-6 w-6 text-primary-600" }) })
] }), dn = {
  400: {
    image: "/img/error.svg",
    message: "Bad request. Please check your input and try again."
  },
  401: {
    image: "/img/error.svg",
    message: "Please sign in to access this resource."
  },
  403: {
    image: "/img/error.svg",
    message: "You do not have permission to access this resource."
  },
  404: {
    image: "/img/page-not-found.svg",
    message: "The page you are looking for does not exist."
  },
  500: {
    image: "/img/error.svg",
    message: "Something went wrong on our end. Please try again later."
  },
  502: {
    image: "/img/error.svg",
    message: "Bad gateway. Our servers are having trouble connecting."
  },
  503: {
    image: "/img/error.svg",
    message: "Service unavailable. We are currently performing maintenance."
  },
  504: {
    image: "/img/error.svg",
    message: "Gateway timeout. The server took too long to respond."
  }
}, tt = {
  NO_INTERNET: {
    image: "/img/no-internet.svg",
    message: "Please check your internet connection and try again."
  },
  DATA_NOT_FOUND: {
    image: "/img/search-not-found.svg",
    message: "No data available for your request."
  },
  UNDER_DEVELOPMENT: {
    image: "/img/under-development.svg",
    message: "This feature is currently under development."
  },
  INFORMATION_UNAVAILABLE: {
    image: "/img/search-not-found.svg",
    message: "The requested information is currently unavailable."
  },
  SUCCESS: {
    image: "/img/payment-success.svg",
    message: "Operation completed successfully."
  },
  CHECKED: {
    image: "/img/payment-success.svg",
    message: "All checks have passed successfully."
  }
}, un = {
  "no-internet": "NO_INTERNET",
  "data-not-found": "DATA_NOT_FOUND",
  "under-development": "UNDER_DEVELOPMENT",
  "information-unavailable": "INFORMATION_UNAVAILABLE",
  success: "SUCCESS",
  checked: "CHECKED"
}, Ar = {
  ...dn,
  ...tt
}, Pr = {
  image: "/img/error.svg",
  message: "An unexpected error occurred. Our team is currently investigating the issue."
}, Dr = (r) => typeof r == "object" && r !== null && ("code" in r || "message" in r), In = ({
  error: r,
  reload: t,
  children: s,
  className: n = "",
  variant: a,
  customImage: i,
  customMessage: d
}) => {
  if (!r && !a)
    return s ? /* @__PURE__ */ e.jsx(e.Fragment, { children: s }) : null;
  const c = (() => {
    if (a) {
      const w = un[a];
      return tt[w];
    }
    return Dr(r) && r.code && Ar[r.code] ? Ar[r.code] : Pr;
  })(), m = i || c.image, g = d || (Dr(r) ? r.message : null) || c.message;
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${n}`, children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: m,
        alt: "Error illustration",
        className: "max-w-[300px] h-auto"
      }
    ),
    /* @__PURE__ */ e.jsx(Hs, { variant: "body1", className: "m-0", children: g }),
    t && /* @__PURE__ */ e.jsx(
      Se,
      {
        onClick: t,
        rounded: "full",
        variant: "primary",
        size: "md",
        children: "Try Again"
      }
    )
  ] });
}, mn = ye(
  "border bg-white flex items-center justify-center aspect-square transition-colors placeholder:text-neutral-500 placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-center",
  {
    variants: {
      variant: {
        default: "border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50",
        error: "border-danger-500 hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50",
        success: "border-success-500 hover:border-success-600 focus:border-success-600 hover:bg-success-50",
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
), fn = ve(
  ({
    className: r,
    variant: t = "default",
    size: s = "md",
    rounded: n = "md",
    error: a = !1,
    errorText: i,
    helperText: d,
    label: l,
    bottomLabel: c,
    required: m = !1,
    showSubmitButton: g = !1,
    submitButtonLabel: w = "Submit",
    submitButtonVariant: p = "primary",
    length: u = 6,
    numericOnly: j = !0,
    onComplete: v,
    onChange: f,
    onSubmit: y,
    value: x,
    defaultValue: F = "",
    disabled: M = !1,
    autoFocus: O = !1,
    ...I
  }, D) => {
    const [N, S] = re(F || ""), T = he([]);
    Ne(() => {
      x !== void 0 && S(x);
    }, [x]);
    const H = x !== void 0, C = H ? x : N, R = (P) => {
      H || S(P), f == null || f(P), P.length === u && (v == null || v(P), g || y == null || y(P));
    }, A = (P) => (L) => {
      T.current[P] = L;
    }, G = (P) => {
      P.target.select();
    }, k = (P, L) => {
      var B;
      const ce = P.target.value;
      let de = "";
      if (ce.length >= 1)
        de = ce.slice(-1);
      else if (ce.length === 0) {
        const Z = C.split("");
        Z[L] = "", R(Z.join(""));
        return;
      }
      if (j && !/^\d$/.test(de))
        return;
      const xe = C.split("");
      for (; xe.length <= L; )
        xe.push("");
      xe[L] = de;
      const ie = xe.join("");
      R(ie), L < u - 1 && de && ((B = T.current[L + 1]) == null || B.focus());
    }, E = (P, L) => {
      var ce, de, xe;
      if (P.key === "Backspace") {
        const ie = C.split("");
        C[L] ? (P.preventDefault(), ie[L] = "", R(ie.join(""))) : L > 0 && (P.preventDefault(), ie[L - 1] = "", R(ie.join("")), (ce = T.current[L - 1]) == null || ce.focus());
      } else if (P.key === "Delete") {
        if (C[L]) {
          P.preventDefault();
          const ie = C.split("");
          ie[L] = "", R(ie.join(""));
        }
      } else if (P.key === "ArrowLeft" && L > 0)
        P.preventDefault(), (de = T.current[L - 1]) == null || de.focus();
      else if (P.key === "ArrowRight" && L < u - 1)
        P.preventDefault(), (xe = T.current[L + 1]) == null || xe.focus();
      else if (!P.ctrlKey && !P.altKey && !P.metaKey && P.key.length === 1 && j && !/^\d$/.test(P.key)) {
        P.preventDefault();
        return;
      }
    }, $ = (P) => {
      var ie;
      P.preventDefault();
      const L = P.clipboardData.getData("text/plain").trim();
      if (j && !/^\d+$/.test(L))
        return;
      const de = L.slice(0, u).padEnd(C.length, "").slice(0, u);
      R(de);
      const xe = de.length < u ? de.length : u - 1;
      (ie = T.current[xe]) == null || ie.focus();
    }, te = () => {
      C.length === u && (y == null || y(C));
    }, ne = C.split("").concat(Array(u - C.length).fill(""));
    return /* @__PURE__ */ e.jsxs("div", { ref: D, className: b("w-full", r), ...I, children: [
      l && /* @__PURE__ */ e.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        l,
        m && /* @__PURE__ */ e.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: u }).map((P, L) => /* @__PURE__ */ e.jsx(
          "input",
          {
            ref: A(L),
            type: j ? "tel" : "text",
            inputMode: j ? "numeric" : "text",
            maxLength: 1,
            value: ne[L] || "",
            onChange: (ce) => k(ce, L),
            onKeyDown: (ce) => E(ce, L),
            onPaste: L === 0 ? $ : void 0,
            onFocus: G,
            disabled: M,
            autoFocus: O && L === 0,
            className: b(
              mn({
                variant: a ? "error" : t,
                size: s,
                rounded: n
              })
            ),
            "aria-invalid": a
          },
          L
        )) }),
        a && i && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger-500 self-start", children: i }),
        !a && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral-500 self-start", children: d }),
        c && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-neutral-600", children: c }),
        g && /* @__PURE__ */ e.jsx(
          Se,
          {
            variant: p,
            disabled: C.length !== u || M,
            onClick: te,
            className: "mt-4",
            children: w
          }
        )
      ] })
    ] });
  }
);
fn.displayName = "InputOTP";
const Or = {
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
}, zn = ({
  icon: r,
  className: t,
  color: s = "primary",
  value: n,
  maxValue: a = 99,
  children: i,
  ...d
}) => {
  const l = "top-0 right-0", c = typeof n == "number" && !isNaN(n);
  let m = "";
  c && (n > a ? m = `${a}+` : m = String(n));
  const g = c ? "px-2" : "", w = c ? "min-w-[20px]" : "w-2.5 h-2.5", p = c ? "h-5" : "h-2.5", u = typeof s == "string" && s in Or ? Or[s] : s;
  return /* @__PURE__ */ e.jsxs("div", { className: b("relative inline-block", t), children: [
    i || (r ? /* @__PURE__ */ e.jsx(Y, { icon: r, color: u, size: 32, ...d }) : null),
    /* @__PURE__ */ e.jsx(
      "span",
      {
        className: b(
          "absolute flex items-center justify-center rounded-xl bg-[#FF4C4C] text-white text-[10px] font-semibold",
          l,
          g,
          w,
          p,
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
}, $n = ({
  widgets: r,
  className: t
}) => /* @__PURE__ */ e.jsx("div", { className: b("w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", t), children: r.map((s, n) => /* @__PURE__ */ e.jsx(cn, { ...s }, n)) });
export {
  hn as Accordion,
  ds as AutoComplete,
  vn as Avatar,
  yn as Badge,
  zn as BadgeNotif,
  nn as Breadcrumbs,
  Se as Button,
  Gr as Card,
  wn as Checkbox,
  jn as Chip,
  ks as DatePicker,
  Cs as Dialog,
  _s as DialogActions,
  Ss as DialogBody,
  Zr as DialogHeader,
  Rs as DialogTitle,
  Ms as Divider,
  In as ErrorWrapper,
  Nn as FileUpload,
  Y as Icon,
  Hr as Input,
  fn as InputOTP,
  kn as Notification,
  Os as Pagination,
  lr as PrimitiveDatePicker,
  tn as Progress,
  En as Radio,
  qr as Select,
  qe as SelectItem,
  zs as Skeleton,
  Cn as Slider,
  Rn as StarRating,
  Sn as StatusIndicator,
  _n as Stepper,
  Mn as Switch,
  Pn as Table,
  Tn as Tabs,
  Hs as Text,
  Gs as TimePicker,
  rt as Toast,
  Dn as ToastProvider,
  Zs as Toggle,
  An as Tooltip,
  cn as WidgetCard,
  $n as WidgetCardGroup,
  gs as buttonVariants,
  ps as cardVariants,
  b as cn,
  mn as inputOTPVariants,
  Us as toggleVariants,
  On as useToast
};
