import ye, { useState as Z, useEffect as be, forwardRef as ke, useRef as me, useCallback as ze, Children as Ct, isValidElement as lt, cloneElement as Nr, createContext as Er, useContext as Rr } from "react";
import { createPortal as De } from "react-dom";
import ne from "dayjs";
import { useReactTable as Sr, getPaginationRowModel as Cr, getSortedRowModel as Tr, getCoreRowModel as Pr, flexRender as Tt } from "@tanstack/react-table";
var Ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var mt = { exports: {} }, Ke = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pt;
function Ar() {
  if (Pt) return Ke;
  Pt = 1;
  var t = ye, r = Symbol.for("react.element"), a = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(i, d, g) {
    var f, u = {}, k = null, p = null;
    g !== void 0 && (k = "" + g), d.key !== void 0 && (k = "" + d.key), d.ref !== void 0 && (p = d.ref);
    for (f in d) s.call(d, f) && !l.hasOwnProperty(f) && (u[f] = d[f]);
    if (i && i.defaultProps) for (f in d = i.defaultProps, d) u[f] === void 0 && (u[f] = d[f]);
    return { $$typeof: r, type: i, key: k, ref: p, props: u, _owner: o.current };
  }
  return Ke.Fragment = a, Ke.jsx = c, Ke.jsxs = c, Ke;
}
var qe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var At;
function Mr() {
  return At || (At = 1, process.env.NODE_ENV !== "production" && function() {
    var t = ye, r = Symbol.for("react.element"), a = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), i = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), b = Symbol.iterator, w = "@@iterator";
    function h(n) {
      if (n === null || typeof n != "object")
        return null;
      var E = b && n[b] || n[w];
      return typeof E == "function" ? E : null;
    }
    var x = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(n) {
      {
        for (var E = arguments.length, D = new Array(E > 1 ? E - 1 : 0), W = 1; W < E; W++)
          D[W - 1] = arguments[W];
        P("error", n, D);
      }
    }
    function P(n, E, D) {
      {
        var W = x.ReactDebugCurrentFrame, re = W.getStackAddendum();
        re !== "" && (E += "%s", D = D.concat([re]));
        var se = D.map(function(ee) {
          return String(ee);
        });
        se.unshift("Warning: " + E), Function.prototype.apply.call(console[n], console, se);
      }
    }
    var A = !1, M = !1, H = !1, F = !1, N = !1, _;
    _ = Symbol.for("react.module.reference");
    function R(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === s || n === l || N || n === o || n === g || n === f || F || n === p || A || M || H || typeof n == "object" && n !== null && (n.$$typeof === k || n.$$typeof === u || n.$$typeof === c || n.$$typeof === i || n.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === _ || n.getModuleId !== void 0));
    }
    function O(n, E, D) {
      var W = n.displayName;
      if (W)
        return W;
      var re = E.displayName || E.name || "";
      return re !== "" ? D + "(" + re + ")" : D;
    }
    function S(n) {
      return n.displayName || "Context";
    }
    function T(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case s:
          return "Fragment";
        case a:
          return "Portal";
        case l:
          return "Profiler";
        case o:
          return "StrictMode";
        case g:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case i:
            var E = n;
            return S(E) + ".Consumer";
          case c:
            var D = n;
            return S(D._context) + ".Provider";
          case d:
            return O(n, n.render, "ForwardRef");
          case u:
            var W = n.displayName || null;
            return W !== null ? W : T(n.type) || "Memo";
          case k: {
            var re = n, se = re._payload, ee = re._init;
            try {
              return T(ee(se));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, L = 0, m, j, $, C, B, I, G;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function de() {
      {
        if (L === 0) {
          m = console.log, j = console.info, $ = console.warn, C = console.error, B = console.group, I = console.groupCollapsed, G = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        L++;
      }
    }
    function he() {
      {
        if (L--, L === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, n, {
              value: m
            }),
            info: z({}, n, {
              value: j
            }),
            warn: z({}, n, {
              value: $
            }),
            error: z({}, n, {
              value: C
            }),
            group: z({}, n, {
              value: B
            }),
            groupCollapsed: z({}, n, {
              value: I
            }),
            groupEnd: z({}, n, {
              value: G
            })
          });
        }
        L < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = x.ReactCurrentDispatcher, Y;
    function te(n, E, D) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (re) {
            var W = re.stack.trim().match(/\n( *(at )?)/);
            Y = W && W[1] || "";
          }
        return `
` + Y + n;
      }
    }
    var Te = !1, Ce;
    {
      var _e = typeof WeakMap == "function" ? WeakMap : Map;
      Ce = new _e();
    }
    function Q(n, E) {
      if (!n || Te)
        return "";
      {
        var D = Ce.get(n);
        if (D !== void 0)
          return D;
      }
      var W;
      Te = !0;
      var re = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var se;
      se = ie.current, ie.current = null, de();
      try {
        if (E) {
          var ee = function() {
            throw Error();
          };
          if (Object.defineProperty(ee.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ee, []);
            } catch (Se) {
              W = Se;
            }
            Reflect.construct(n, [], ee);
          } else {
            try {
              ee.call();
            } catch (Se) {
              W = Se;
            }
            n.call(ee.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Se) {
            W = Se;
          }
          n();
        }
      } catch (Se) {
        if (Se && W && typeof Se.stack == "string") {
          for (var J = Se.stack.split(`
`), Ne = W.stack.split(`
`), ge = J.length - 1, pe = Ne.length - 1; ge >= 1 && pe >= 0 && J[ge] !== Ne[pe]; )
            pe--;
          for (; ge >= 1 && pe >= 0; ge--, pe--)
            if (J[ge] !== Ne[pe]) {
              if (ge !== 1 || pe !== 1)
                do
                  if (ge--, pe--, pe < 0 || J[ge] !== Ne[pe]) {
                    var Pe = `
` + J[ge].replace(" at new ", " at ");
                    return n.displayName && Pe.includes("<anonymous>") && (Pe = Pe.replace("<anonymous>", n.displayName)), typeof n == "function" && Ce.set(n, Pe), Pe;
                  }
                while (ge >= 1 && pe >= 0);
              break;
            }
        }
      } finally {
        Te = !1, ie.current = se, he(), Error.prepareStackTrace = re;
      }
      var Ge = n ? n.displayName || n.name : "", Be = Ge ? te(Ge) : "";
      return typeof n == "function" && Ce.set(n, Be), Be;
    }
    function ae(n, E, D) {
      return Q(n, !1);
    }
    function V(n) {
      var E = n.prototype;
      return !!(E && E.isReactComponent);
    }
    function oe(n, E, D) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Q(n, V(n));
      if (typeof n == "string")
        return te(n);
      switch (n) {
        case g:
          return te("Suspense");
        case f:
          return te("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case d:
            return ae(n.render);
          case u:
            return oe(n.type, E, D);
          case k: {
            var W = n, re = W._payload, se = W._init;
            try {
              return oe(se(re), E, D);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, ue = {}, fe = x.ReactDebugCurrentFrame;
    function Re(n) {
      if (n) {
        var E = n._owner, D = oe(n.type, n._source, E ? E.type : null);
        fe.setExtraStackFrame(D);
      } else
        fe.setExtraStackFrame(null);
    }
    function ve(n, E, D, W, re) {
      {
        var se = Function.call.bind(q);
        for (var ee in n)
          if (se(n, ee)) {
            var J = void 0;
            try {
              if (typeof n[ee] != "function") {
                var Ne = Error((W || "React class") + ": " + D + " type `" + ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ne.name = "Invariant Violation", Ne;
              }
              J = n[ee](E, ee, W, D, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ge) {
              J = ge;
            }
            J && !(J instanceof Error) && (Re(re), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", W || "React class", D, ee, typeof J), Re(null)), J instanceof Error && !(J.message in ue) && (ue[J.message] = !0, Re(re), y("Failed %s type: %s", D, J.message), Re(null));
          }
      }
    }
    var Ae = Array.isArray;
    function Me(n) {
      return Ae(n);
    }
    function tt(n) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, D = E && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return D;
      }
    }
    function rt(n) {
      try {
        return Ye(n), !1;
      } catch {
        return !0;
      }
    }
    function Ye(n) {
      return "" + n;
    }
    function Ue(n) {
      if (rt(n))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tt(n)), Ye(n);
    }
    var Qe = x.ReactCurrentOwner, $e = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, vt, yt;
    function lr(n) {
      if (q.call(n, "ref")) {
        var E = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function ir(n) {
      if (q.call(n, "key")) {
        var E = Object.getOwnPropertyDescriptor(n, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function cr(n, E) {
      typeof n.ref == "string" && Qe.current;
    }
    function dr(n, E) {
      {
        var D = function() {
          vt || (vt = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        D.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: D,
          configurable: !0
        });
      }
    }
    function ur(n, E) {
      {
        var D = function() {
          yt || (yt = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        D.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: D,
          configurable: !0
        });
      }
    }
    var fr = function(n, E, D, W, re, se, ee) {
      var J = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: n,
        key: E,
        ref: D,
        props: ee,
        // Record the component responsible for creating this element.
        _owner: se
      };
      return J._store = {}, Object.defineProperty(J._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(J, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: W
      }), Object.defineProperty(J, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: re
      }), Object.freeze && (Object.freeze(J.props), Object.freeze(J)), J;
    };
    function mr(n, E, D, W, re) {
      {
        var se, ee = {}, J = null, Ne = null;
        D !== void 0 && (Ue(D), J = "" + D), ir(E) && (Ue(E.key), J = "" + E.key), lr(E) && (Ne = E.ref, cr(E, re));
        for (se in E)
          q.call(E, se) && !$e.hasOwnProperty(se) && (ee[se] = E[se]);
        if (n && n.defaultProps) {
          var ge = n.defaultProps;
          for (se in ge)
            ee[se] === void 0 && (ee[se] = ge[se]);
        }
        if (J || Ne) {
          var pe = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          J && dr(ee, pe), Ne && ur(ee, pe);
        }
        return fr(n, J, Ne, re, W, Qe.current, ee);
      }
    }
    var at = x.ReactCurrentOwner, wt = x.ReactDebugCurrentFrame;
    function Ve(n) {
      if (n) {
        var E = n._owner, D = oe(n.type, n._source, E ? E.type : null);
        wt.setExtraStackFrame(D);
      } else
        wt.setExtraStackFrame(null);
    }
    var st;
    st = !1;
    function nt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === r;
    }
    function kt() {
      {
        if (at.current) {
          var n = T(at.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function gr(n) {
      return "";
    }
    var jt = {};
    function pr(n) {
      {
        var E = kt();
        if (!E) {
          var D = typeof n == "string" ? n : n.displayName || n.name;
          D && (E = `

Check the top-level render call using <` + D + ">.");
        }
        return E;
      }
    }
    function Nt(n, E) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var D = pr(E);
        if (jt[D])
          return;
        jt[D] = !0;
        var W = "";
        n && n._owner && n._owner !== at.current && (W = " It was passed a child from " + T(n._owner.type) + "."), Ve(n), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', D, W), Ve(null);
      }
    }
    function Et(n, E) {
      {
        if (typeof n != "object")
          return;
        if (Me(n))
          for (var D = 0; D < n.length; D++) {
            var W = n[D];
            nt(W) && Nt(W, E);
          }
        else if (nt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var re = h(n);
          if (typeof re == "function" && re !== n.entries)
            for (var se = re.call(n), ee; !(ee = se.next()).done; )
              nt(ee.value) && Nt(ee.value, E);
        }
      }
    }
    function br(n) {
      {
        var E = n.type;
        if (E == null || typeof E == "string")
          return;
        var D;
        if (typeof E == "function")
          D = E.propTypes;
        else if (typeof E == "object" && (E.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        E.$$typeof === u))
          D = E.propTypes;
        else
          return;
        if (D) {
          var W = T(E);
          ve(D, n.props, "prop", W, n);
        } else if (E.PropTypes !== void 0 && !st) {
          st = !0;
          var re = T(E);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", re || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(n) {
      {
        for (var E = Object.keys(n.props), D = 0; D < E.length; D++) {
          var W = E[D];
          if (W !== "children" && W !== "key") {
            Ve(n), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", W), Ve(null);
            break;
          }
        }
        n.ref !== null && (Ve(n), y("Invalid attribute `ref` supplied to `React.Fragment`."), Ve(null));
      }
    }
    var Rt = {};
    function St(n, E, D, W, re, se) {
      {
        var ee = R(n);
        if (!ee) {
          var J = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ne = gr();
          Ne ? J += Ne : J += kt();
          var ge;
          n === null ? ge = "null" : Me(n) ? ge = "array" : n !== void 0 && n.$$typeof === r ? (ge = "<" + (T(n.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof n, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, J);
        }
        var pe = mr(n, E, D, re, se);
        if (pe == null)
          return pe;
        if (ee) {
          var Pe = E.children;
          if (Pe !== void 0)
            if (W)
              if (Me(Pe)) {
                for (var Ge = 0; Ge < Pe.length; Ge++)
                  Et(Pe[Ge], n);
                Object.freeze && Object.freeze(Pe);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Et(Pe, n);
        }
        if (q.call(E, "key")) {
          var Be = T(n), Se = Object.keys(E).filter(function(jr) {
            return jr !== "key";
          }), ot = Se.length > 0 ? "{key: someKey, " + Se.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Rt[Be + ot]) {
            var kr = Se.length > 0 ? "{" + Se.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ot, Be, kr, Be), Rt[Be + ot] = !0;
          }
        }
        return n === s ? hr(pe) : br(pe), pe;
      }
    }
    function xr(n, E, D) {
      return St(n, E, D, !0);
    }
    function vr(n, E, D) {
      return St(n, E, D, !1);
    }
    var yr = vr, wr = xr;
    qe.Fragment = s, qe.jsx = yr, qe.jsxs = wr;
  }()), qe;
}
process.env.NODE_ENV === "production" ? mt.exports = Ar() : mt.exports = Mr();
var e = mt.exports;
function Gt(t) {
  var r, a, s = "";
  if (typeof t == "string" || typeof t == "number") s += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (r = 0; r < o; r++) t[r] && (a = Gt(t[r])) && (s && (s += " "), s += a);
  } else for (a in t) t[a] && (s && (s += " "), s += a);
  return s;
}
function X() {
  for (var t, r, a = 0, s = "", o = arguments.length; a < o; a++) (t = arguments[a]) && (r = Gt(t)) && (s && (s += " "), s += r);
  return s;
}
const Mt = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, _t = X, we = (t, r) => (a) => {
  var s;
  if ((r == null ? void 0 : r.variants) == null) return _t(t, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: o, defaultVariants: l } = r, c = Object.keys(o).map((g) => {
    const f = a == null ? void 0 : a[g], u = l == null ? void 0 : l[g];
    if (f === null) return null;
    const k = Mt(f) || Mt(u);
    return o[g][k];
  }), i = a && Object.entries(a).reduce((g, f) => {
    let [u, k] = f;
    return k === void 0 || (g[u] = k), g;
  }, {}), d = r == null || (s = r.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((g, f) => {
    let { class: u, className: k, ...p } = f;
    return Object.entries(p).every((b) => {
      let [w, h] = b;
      return Array.isArray(h) ? h.includes({
        ...l,
        ...i
      }[w]) : {
        ...l,
        ...i
      }[w] === h;
    }) ? [
      ...g,
      u,
      k
    ] : g;
  }, []);
  return _t(t, c, d, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, ht = "-", _r = (t) => {
  const r = zr(t), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: s
  } = t;
  return {
    getClassGroupId: (c) => {
      const i = c.split(ht);
      return i[0] === "" && i.length !== 1 && i.shift(), Ht(i, r) || Ir(c);
    },
    getConflictingClassGroupIds: (c, i) => {
      const d = a[c] || [];
      return i && s[c] ? [...d, ...s[c]] : d;
    }
  };
}, Ht = (t, r) => {
  var c;
  if (t.length === 0)
    return r.classGroupId;
  const a = t[0], s = r.nextPart.get(a), o = s ? Ht(t.slice(1), s) : void 0;
  if (o)
    return o;
  if (r.validators.length === 0)
    return;
  const l = t.join(ht);
  return (c = r.validators.find(({
    validator: i
  }) => i(l))) == null ? void 0 : c.classGroupId;
}, It = /^\[(.+)\]$/, Ir = (t) => {
  if (It.test(t)) {
    const r = It.exec(t)[1], a = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, zr = (t) => {
  const {
    theme: r,
    prefix: a
  } = t, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Or(Object.entries(t.classGroups), a).forEach(([l, c]) => {
    gt(c, s, l, r);
  }), s;
}, gt = (t, r, a, s) => {
  t.forEach((o) => {
    if (typeof o == "string") {
      const l = o === "" ? r : zt(r, o);
      l.classGroupId = a;
      return;
    }
    if (typeof o == "function") {
      if (Dr(o)) {
        gt(o(s), r, a, s);
        return;
      }
      r.validators.push({
        validator: o,
        classGroupId: a
      });
      return;
    }
    Object.entries(o).forEach(([l, c]) => {
      gt(c, zt(r, l), a, s);
    });
  });
}, zt = (t, r) => {
  let a = t;
  return r.split(ht).forEach((s) => {
    a.nextPart.has(s) || a.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(s);
  }), a;
}, Dr = (t) => t.isThemeGetter, Or = (t, r) => r ? t.map(([a, s]) => {
  const o = s.map((l) => typeof l == "string" ? r + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([c, i]) => [r + c, i])) : l);
  return [a, o];
}) : t, Lr = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, a = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  const o = (l, c) => {
    a.set(l, c), r++, r > t && (r = 0, s = a, a = /* @__PURE__ */ new Map());
  };
  return {
    get(l) {
      let c = a.get(l);
      if (c !== void 0)
        return c;
      if ((c = s.get(l)) !== void 0)
        return o(l, c), c;
    },
    set(l, c) {
      a.has(l) ? a.set(l, c) : o(l, c);
    }
  };
}, Wt = "!", $r = (t) => {
  const {
    separator: r,
    experimentalParseClassName: a
  } = t, s = r.length === 1, o = r[0], l = r.length, c = (i) => {
    const d = [];
    let g = 0, f = 0, u;
    for (let h = 0; h < i.length; h++) {
      let x = i[h];
      if (g === 0) {
        if (x === o && (s || i.slice(h, h + l) === r)) {
          d.push(i.slice(f, h)), f = h + l;
          continue;
        }
        if (x === "/") {
          u = h;
          continue;
        }
      }
      x === "[" ? g++ : x === "]" && g--;
    }
    const k = d.length === 0 ? i : i.substring(f), p = k.startsWith(Wt), b = p ? k.substring(1) : k, w = u && u > f ? u - f : void 0;
    return {
      modifiers: d,
      hasImportantModifier: p,
      baseClassName: b,
      maybePostfixModifierPosition: w
    };
  };
  return a ? (i) => a({
    className: i,
    parseClassName: c
  }) : c;
}, Br = (t) => {
  if (t.length <= 1)
    return t;
  const r = [];
  let a = [];
  return t.forEach((s) => {
    s[0] === "[" ? (r.push(...a.sort(), s), a = []) : a.push(s);
  }), r.push(...a.sort()), r;
}, Fr = (t) => ({
  cache: Lr(t.cacheSize),
  parseClassName: $r(t),
  ..._r(t)
}), Vr = /\s+/, Gr = (t, r) => {
  const {
    parseClassName: a,
    getClassGroupId: s,
    getConflictingClassGroupIds: o
  } = r, l = [], c = t.trim().split(Vr);
  let i = "";
  for (let d = c.length - 1; d >= 0; d -= 1) {
    const g = c[d], {
      modifiers: f,
      hasImportantModifier: u,
      baseClassName: k,
      maybePostfixModifierPosition: p
    } = a(g);
    let b = !!p, w = s(b ? k.substring(0, p) : k);
    if (!w) {
      if (!b) {
        i = g + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (w = s(k), !w) {
        i = g + (i.length > 0 ? " " + i : i);
        continue;
      }
      b = !1;
    }
    const h = Br(f).join(":"), x = u ? h + Wt : h, y = x + w;
    if (l.includes(y))
      continue;
    l.push(y);
    const P = o(w, b);
    for (let A = 0; A < P.length; ++A) {
      const M = P[A];
      l.push(x + M);
    }
    i = g + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Hr() {
  let t = 0, r, a, s = "";
  for (; t < arguments.length; )
    (r = arguments[t++]) && (a = Yt(r)) && (s && (s += " "), s += a);
  return s;
}
const Yt = (t) => {
  if (typeof t == "string")
    return t;
  let r, a = "";
  for (let s = 0; s < t.length; s++)
    t[s] && (r = Yt(t[s])) && (a && (a += " "), a += r);
  return a;
};
function Wr(t, ...r) {
  let a, s, o, l = c;
  function c(d) {
    const g = r.reduce((f, u) => u(f), t());
    return a = Fr(g), s = a.cache.get, o = a.cache.set, l = i, i(d);
  }
  function i(d) {
    const g = s(d);
    if (g)
      return g;
    const f = Gr(d, a);
    return o(d, f), f;
  }
  return function() {
    return l(Hr.apply(null, arguments));
  };
}
const ce = (t) => {
  const r = (a) => a[t] || [];
  return r.isThemeGetter = !0, r;
}, Ut = /^\[(?:([a-z-]+):)?(.+)\]$/i, Yr = /^\d+\/\d+$/, Ur = /* @__PURE__ */ new Set(["px", "full", "screen"]), Kr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, qr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Zr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Jr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Xr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ie = (t) => He(t) || Ur.has(t) || Yr.test(t), Oe = (t) => We(t, "length", oa), He = (t) => !!t && !Number.isNaN(Number(t)), it = (t) => We(t, "number", He), Ze = (t) => !!t && Number.isInteger(Number(t)), Qr = (t) => t.endsWith("%") && He(t.slice(0, -1)), U = (t) => Ut.test(t), Le = (t) => Kr.test(t), ea = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ta = (t) => We(t, ea, Kt), ra = (t) => We(t, "position", Kt), aa = /* @__PURE__ */ new Set(["image", "url"]), sa = (t) => We(t, aa, ia), na = (t) => We(t, "", la), Je = () => !0, We = (t, r, a) => {
  const s = Ut.exec(t);
  return s ? s[1] ? typeof r == "string" ? s[1] === r : r.has(s[1]) : a(s[2]) : !1;
}, oa = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  qr.test(t) && !Zr.test(t)
), Kt = () => !1, la = (t) => Jr.test(t), ia = (t) => Xr.test(t), ca = () => {
  const t = ce("colors"), r = ce("spacing"), a = ce("blur"), s = ce("brightness"), o = ce("borderColor"), l = ce("borderRadius"), c = ce("borderSpacing"), i = ce("borderWidth"), d = ce("contrast"), g = ce("grayscale"), f = ce("hueRotate"), u = ce("invert"), k = ce("gap"), p = ce("gradientColorStops"), b = ce("gradientColorStopPositions"), w = ce("inset"), h = ce("margin"), x = ce("opacity"), y = ce("padding"), P = ce("saturate"), A = ce("scale"), M = ce("sepia"), H = ce("skew"), F = ce("space"), N = ce("translate"), _ = () => ["auto", "contain", "none"], R = () => ["auto", "hidden", "clip", "visible", "scroll"], O = () => ["auto", U, r], S = () => [U, r], T = () => ["", Ie, Oe], z = () => ["auto", He, U], L = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], m = () => ["solid", "dashed", "dotted", "double", "none"], j = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], $ = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], C = () => ["", "0", U], B = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], I = () => [He, U];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Je],
      spacing: [Ie, Oe],
      blur: ["none", "", Le, U],
      brightness: I(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Le, U],
      borderSpacing: S(),
      borderWidth: T(),
      contrast: I(),
      grayscale: C(),
      hueRotate: I(),
      invert: C(),
      gap: S(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Qr, Oe],
      inset: O(),
      margin: O(),
      opacity: I(),
      padding: S(),
      saturate: I(),
      scale: I(),
      sepia: C(),
      skew: I(),
      space: S(),
      translate: S()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", U]
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
        columns: [Le]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": B()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": B()
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
        object: [...L(), U]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: R()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": R()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": R()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: _()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": _()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": _()
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
        inset: [w]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [w]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [w]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [w]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [w]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [w]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [w]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [w]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [w]
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
        z: ["auto", Ze, U]
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
        flex: ["1", "auto", "initial", "none", U]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: C()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: C()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ze, U]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Je]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ze, U]
        }, U]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Je]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ze, U]
        }, U]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
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
        "auto-cols": ["auto", "min", "max", "fr", U]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", U]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [k]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [k]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [k]
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
        p: [y]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [y]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [y]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [y]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [y]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [y]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [y]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [y]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [y]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [h]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [h]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [h]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [h]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [h]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [h]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [h]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [h]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [h]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [F]
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
        "space-y": [F]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", U, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [U, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [U, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [Le]
        }, Le]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [U, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [U, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [U, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [U, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Le, Oe]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", it]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Je]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", U]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", He, it]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ie, U]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", U]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", U]
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
        placeholder: [t]
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
        text: [t]
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
        decoration: [...m(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ie, Oe]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ie, U]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [t]
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
        indent: S()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", U]
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
        content: ["none", U]
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
        bg: [...L(), ra]
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
        bg: ["auto", "cover", "contain", ta]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, sa]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [t]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [b]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [b]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [p]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [l]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [l]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [l]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [l]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [l]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [l]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [l]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [l]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [l]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [l]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [l]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [l]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [l]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [l]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [l]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [i]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [i]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [i]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [i]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [i]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [i]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [i]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [i]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [i]
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
        border: [...m(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [i]
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
        "divide-y": [i]
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
        divide: m()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...m()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ie, U]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ie, Oe]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [t]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: T()
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
        ring: [t]
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
        "ring-offset": [Ie, Oe]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [t]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Le, na]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Je]
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
        "mix-blend": [...j(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": j()
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
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Le, U]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [g]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [u]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [P]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [M]
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
        "backdrop-contrast": [d]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [g]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [u]
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
        "backdrop-saturate": [P]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [M]
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
        "border-spacing": [c]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [c]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [c]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", U]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: I()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", U]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: I()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", U]
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
        scale: [A]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [A]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [A]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ze, U]
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
        "skew-x": [H]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [H]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", U]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", t]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", U]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [t]
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
        "scroll-m": S()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": S()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": S()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": S()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": S()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": S()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": S()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": S()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": S()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": S()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": S()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": S()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": S()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": S()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": S()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": S()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": S()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": S()
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
        "will-change": ["auto", "scroll", "contents", "transform", U]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [t, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ie, Oe, it]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [t, "none"]
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
}, Fe = /* @__PURE__ */ Wr(ca);
function v(...t) {
  return Fe(X(t));
}
const K = ({
  icon: t,
  className: r,
  size: a,
  color: s,
  rotate: o,
  flip: l,
  spin: c,
  inline: i = !0,
  mode: d = "svg",
  ...g
}) => {
  const [f, u] = Z(null), [k, p] = Z(!0), [b, w] = Z(null);
  return be(() => {
    let h = !0;
    return (async () => {
      try {
        const { Icon: y } = await import("./iconify-Dqt3MVen.mjs");
        h && (u(() => y), p(!1));
      } catch (y) {
        console.error("Failed to load icon:", y), h && (w(y), p(!1));
      }
    })(), () => {
      h = !1;
    };
  }, []), k ? /* @__PURE__ */ e.jsx("span", { style: { width: a, height: a } }) : b || !f ? null : /* @__PURE__ */ e.jsx(
    f,
    {
      icon: t,
      className: v(
        c && "animate-spin",
        r
      ),
      style: {
        color: s,
        transform: `rotate(${o || 0}deg)`
      },
      height: a,
      width: a,
      flip: l,
      inline: i,
      mode: d,
      ...g
    }
  );
}, da = we(
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
), qt = ke(
  ({
    className: t,
    variant: r = "default",
    size: a = "md",
    rounded: s = "md",
    error: o = !1,
    errorText: l,
    helperText: c,
    label: i,
    required: d = !1,
    labelPlacement: g = "top",
    fullWidth: f = !1,
    leftIcon: u,
    rightIcon: k,
    onRightIconClick: p,
    id: b,
    ...w
  }, h) => {
    const x = b || ye.useId(), y = `${x}-helper`, P = `${x}-error`, A = /* @__PURE__ */ e.jsxs("div", { className: v("relative", !f && "inline-block"), children: [
      u && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ e.jsx(K, { icon: u, className: "w-4 h-4" }) }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          id: x,
          type: "text",
          ref: h,
          className: v(
            da({ variant: o ? "error" : r, size: a, rounded: s, fullWidth: f }),
            u && "pl-10",
            k && "pr-10",
            t
          ),
          "aria-describedby": o ? P : c ? y : void 0,
          "aria-invalid": o,
          "aria-required": d,
          ...w
        }
      ),
      k && /* @__PURE__ */ e.jsx(
        "div",
        {
          className: v(
            "absolute right-3 top-1/2 -translate-y-1/2 text-neutral",
            p && "cursor-pointer hover:text-primary-600"
          ),
          onClick: p,
          role: p ? "button" : void 0,
          tabIndex: p ? 0 : void 0,
          children: /* @__PURE__ */ e.jsx(K, { icon: k, className: "w-4 h-4" })
        }
      )
    ] }), M = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      o && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: P, children: l }),
      !o && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: y, children: c })
    ] });
    return g === "left" ? /* @__PURE__ */ e.jsx("div", { className: v(f ? "w-full" : "inline-block", t), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
      i && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: x,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            i,
            d && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: v("flex-1", !f && "inline-block"), children: [
        A,
        M
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: v(f ? "w-full" : "inline-block", t), children: [
      i && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: x,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            i,
            d && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      A,
      M
    ] });
  }
);
qt.displayName = "Input";
const et = ye.forwardRef(
  ({ className: t, children: r, selected: a, disabled: s, ...o }, l) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: l,
      className: v(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
        "hover:bg-primary-50",
        a && "bg-primary-50 text-primary-900",
        s && "pointer-events-none opacity-50",
        t
      ),
      ...o,
      children: r
    }
  )
);
et.displayName = "SelectItem";
const Zt = typeof window < "u", Ee = () => Zt ? window : {
  innerHeight: 0,
  innerWidth: 0,
  addEventListener: () => {
  },
  removeEventListener: () => {
  }
}, xe = () => Zt ? document : {
  addEventListener: () => {
  },
  removeEventListener: () => {
  },
  dispatchEvent: () => {
  }
}, ct = "autocomplete-dropdown-opened", ua = we(
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
), fa = ke(
  ({
    className: t,
    options: r,
    onSelect: a,
    isOpen: s,
    dropdownPosition: o = "bottom",
    loading: l = !1,
    renderOption: c,
    variant: i = "default",
    size: d = "md",
    rounded: g = "md",
    leftIcon: f,
    rightIcon: u,
    error: k = !1,
    errorText: p,
    helperText: b,
    label: w,
    required: h = !1,
    labelPlacement: x = "top",
    fullWidth: y = !1,
    value: P,
    onChange: A,
    onFocus: M,
    onBlur: H,
    showClear: F = !1,
    onClear: N,
    ..._
  }, R) => {
    const [O, S] = Z(!1), [T, z] = Z(P || ""), L = me(null), m = me(null), j = me(null), $ = s !== void 0, B = `autocomplete-${ye.useId().replace(/:/g, "")}`, I = () => {
      if (!O || !m.current || !j.current) return;
      const { bottom: Q, top: ae, left: V, width: oe } = m.current.getBoundingClientRect(), q = j.current, ue = Ee(), fe = {
        position: "fixed",
        left: `${V}px`,
        width: `${oe}px`
      }, Re = o === "bottom" ? {
        ...fe,
        top: `${Q + 4}px`,
        maxHeight: `${ue.innerHeight - Q - 8}px`
      } : {
        ...fe,
        bottom: `${ue.innerHeight - ae + 4}px`,
        maxHeight: `${ae - 8}px`
      };
      Object.assign(q.style, Re);
    };
    be(() => {
      const Q = Ee(), ae = xe(), V = () => {
        O && I();
      }, oe = () => {
        O && I();
      }, q = (fe) => {
        fe.detail.id !== B && S(!1);
      }, ue = (fe) => {
        const Re = fe.target;
        L.current && !L.current.contains(Re) && j.current && !j.current.contains(Re) && S(!1);
      };
      return O && (I(), Q.addEventListener("scroll", V, !0), Q.addEventListener("resize", oe)), ae.addEventListener(ct, q), ae.addEventListener("click", ue), () => {
        Q.removeEventListener("scroll", V, !0), Q.removeEventListener("resize", oe), ae.removeEventListener(ct, q), ae.removeEventListener("click", ue);
      };
    }, [O, B]), be(() => {
      z(P || "");
    }, [P]);
    const G = (Q) => {
      const { value: ae } = Q.target;
      if (z(ae), !ae.trim()) {
        S(!1);
        return;
      }
      S(!0), A == null || A(Q);
    }, le = (Q) => {
      Q.stopPropagation(), z(""), N == null || N();
      const ae = new Event("change");
      ae.target = { value: "" }, A == null || A(ae);
    }, de = (Q) => {
      var q;
      if (!Q) return;
      const { value: ae, label: V } = Q;
      z(V), S(!1), a == null || a(ae);
      const oe = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: Q }
      });
      (q = m.current) == null || q.dispatchEvent(oe);
    }, he = (Q) => {
      $ || (xe().dispatchEvent(
        new CustomEvent(ct, {
          detail: { id: B }
        })
      ), S(!0)), M == null || M(Q);
    }, ie = (Q) => {
      H == null || H(Q);
    }, Y = r.filter(
      ({ label: Q }) => Q.toLowerCase().includes((T || "").toLowerCase().trim())
    ), te = $ ? s : O, Te = F && T && !_.disabled && !_.readOnly, Ce = Te ? "mdi:close" : u, _e = () => {
      if (!te) return null;
      const Q = xe();
      if (!("body" in Q)) return null;
      const ae = /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: j,
          className: v(
            ua({ position: o }),
            "overflow-auto"
          ),
          onClick: (V) => V.stopPropagation(),
          children: l ? /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ e.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }) }) : Y.length > 0 ? Y.map((V) => /* @__PURE__ */ e.jsx(
            et,
            {
              value: V.value,
              selected: V.label === T,
              onClick: () => de(V),
              children: c ? c(V) : V.label
            },
            V.value
          )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-2 text-sm text-neutral", children: "No options found" })
        }
      );
      return De(ae, Q.body);
    };
    return /* @__PURE__ */ e.jsxs("div", { ref: L, className: v("relative", y ? "w-full" : "inline-block"), children: [
      /* @__PURE__ */ e.jsx("div", { ref: m, className: v(!y && "inline-block"), children: /* @__PURE__ */ e.jsx(
        qt,
        {
          ref: R,
          value: T,
          onChange: G,
          onFocus: he,
          onBlur: ie,
          variant: i,
          size: d,
          rounded: g,
          leftIcon: f,
          rightIcon: Ce,
          error: k,
          errorText: p,
          helperText: b,
          label: w,
          required: h,
          labelPlacement: x,
          fullWidth: y,
          className: t,
          ..._,
          onClick: Te ? le : _.onClick
        }
      ) }),
      _e()
    ] });
  }
);
fa.displayName = "AutoComplete";
const ma = {
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
}, ga = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, pa = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
}, Es = ({
  items: t,
  multiple: r = !1,
  defaultOpenIds: a = [],
  icon: s = "mdi:chevron-down",
  iconPosition: o = "right",
  className: l,
  contentClassName: c,
  variant: i = "primary",
  shadow: d = "none",
  rounded: g = "lg"
}) => {
  const [f, u] = Z(a), k = (b) => {
    u(
      r ? (w) => w.includes(b) ? w.filter((h) => h !== b) : [...w, b] : (w) => w.includes(b) ? [] : [b]
    );
  }, p = ma[i];
  return /* @__PURE__ */ e.jsx("div", { className: X("w-full space-y-2", l), children: t.map((b) => {
    const w = f.includes(b.id), h = !!b.disabled;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: X(
          "border overflow-hidden",
          "bg-white",
          "border-gray-200",
          ga[d],
          pa[g],
          "transition-shadow duration-200"
        ),
        children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => !h && k(b.id),
              disabled: h,
              className: X(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                p.hover,
                w && p.active,
                p.text,
                h && "opacity-50 cursor-not-allowed"
              ),
              children: [
                o === "left" && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: X(
                      "mr-3 transition-transform duration-200",
                      w && "rotate-180"
                    ),
                    children: /* @__PURE__ */ e.jsx(K, { icon: s, className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ e.jsx("div", { className: "flex-1", children: b.title }),
                o === "right" && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: X(
                      "ml-3 transition-transform duration-200",
                      w && "rotate-180"
                    ),
                    children: /* @__PURE__ */ e.jsx(K, { icon: s, className: "w-5 h-5" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: X(
                "grid transition-all duration-200 ease-in-out",
                w ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              ),
              children: /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: X(
                    "p-4 border-t border-gray-200",
                    c
                  ),
                  children: b.content
                }
              ) })
            }
          )
        ]
      },
      b.id
    );
  }) });
}, Rs = ({
  src: t,
  alt: r = "avatar",
  size: a = "medium",
  shape: s = "circle",
  className: o = "",
  variant: l = "cover"
}) => {
  const c = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  }, i = {
    circle: "rounded-full",
    square: "rounded-lg"
  }, d = Fe(
    "inline-flex items-center justify-center overflow-hidden bg-gray-200",
    c[a],
    i[s],
    o
  );
  return /* @__PURE__ */ e.jsx("div", { className: d, children: t ? /* @__PURE__ */ e.jsx(
    "img",
    {
      src: t,
      alt: r,
      className: Fe("w-full h-full", l === "cover" ? "object-cover" : "object-contain")
    }
  ) : /* @__PURE__ */ e.jsx(
    "svg",
    {
      className: "w-6 h-6 text-gray",
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
}, Ss = ({
  children: t,
  variant: r = "primary",
  size: a = "medium",
  rounded: s = "md",
  className: o = ""
}) => {
  const l = {
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800"
  }, c = {
    small: "px-2 py-0.5 text-xs",
    medium: "px-2.5 py-1 text-sm",
    large: "px-3 py-1.5 text-base"
  }, i = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full"
  }, d = Fe(
    "inline-flex items-center font-medium",
    l[r],
    c[a],
    i[s],
    o
  );
  return /* @__PURE__ */ e.jsx("span", { className: d, children: t });
}, ba = we(
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
), je = ke(
  ({
    className: t,
    variant: r = "primary",
    size: a = "md",
    rounded: s = "md",
    fullWidth: o = !1,
    isLoading: l = !1,
    leftIcon: c,
    rightIcon: i,
    isIconOnly: d = !1,
    children: g,
    ...f
  }, u) => {
    const p = d || !!(c || i) && !g;
    return /* @__PURE__ */ e.jsxs(
      "button",
      {
        className: v(
          ba({
            variant: r,
            size: a,
            rounded: p ? "full" : s,
            fullWidth: o,
            isIconOnly: p,
            className: t
          })
        ),
        ref: u,
        disabled: f.disabled || l,
        ...f,
        children: [
          l && /* @__PURE__ */ e.jsx("span", { className: "animate-spin inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full" }),
          c && !l && /* @__PURE__ */ e.jsx(K, { icon: c, className: "w-4 h-4", inline: !0 }),
          g && /* @__PURE__ */ e.jsx("span", { children: g }),
          i && !l && /* @__PURE__ */ e.jsx(K, { icon: i, className: "w-4 h-4", inline: !0 })
        ]
      }
    );
  }
);
je.displayName = "Button";
const ha = we(
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
), xt = ke(
  ({
    className: t,
    variant: r = "default",
    padding: a = "md",
    shadow: s = "none",
    rounded: o = "md",
    asChild: l = !1,
    ...c
  }, i) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: v(ha({ variant: r, padding: a, shadow: s, rounded: o, className: t })),
      ref: i,
      ...c
    }
  )
);
xt.displayName = "Card";
const Cs = ({
  label: t,
  error: r,
  disabled: a = !1,
  indeterminate: s = !1,
  variantSize: o = "sm",
  variant: l = "square",
  color: c = "primary",
  className: i = "",
  ...d
}) => {
  const g = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }, f = {
    primary: "checked:bg-primary-600 checked:border-primary-600 hover:border-primary-600",
    secondary: "checked:bg-secondary-600 checked:border-secondary-600 hover:border-secondary-600",
    success: "checked:bg-success-600 checked:border-success-600 hover:border-success-600",
    warning: "checked:bg-warning-600 checked:border-warning-600 hover:border-warning-600",
    error: "checked:bg-danger-600 checked:border-danger-600 hover:border-danger-600"
  }, k = Fe(
    "border-2 transition-colors duration-200",
    "appearance-none cursor-pointer",
    "checked:bg-no-repeat checked:bg-center",
    l === "circle" ? 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]' : 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM0w0LjUgOC41TDIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=")]',
    {
      square: "rounded",
      circle: "rounded-full"
    }[l],
    g[o],
    f[c],
    a && "opacity-50 cursor-not-allowed",
    i
  ), p = Fe(
    "ml-2 text-sm font-medium",
    a && "opacity-50 cursor-not-allowed",
    r && "text-danger-600"
  );
  return /* @__PURE__ */ e.jsxs("div", { className: "items-center", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "checkbox",
          className: k,
          disabled: a,
          ref: (b) => {
            b && (b.indeterminate = s);
          },
          ...d
        }
      ),
      t && /* @__PURE__ */ e.jsx("label", { className: p, children: t })
    ] }),
    r && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-danger-600", children: r })
  ] });
}, xa = {
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
}, va = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5"
}, ya = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, Ts = ({
  children: t,
  variant: r = "solid",
  color: a = "primary",
  size: s = "md",
  rounded: o = "md",
  onClose: l,
  className: c,
  icon: i
}) => /* @__PURE__ */ e.jsxs(
  "div",
  {
    className: v(
      "inline-flex items-center gap-1.5 font-medium",
      xa[r][a],
      va[s],
      ya[o],
      c
    ),
    children: [
      i && /* @__PURE__ */ e.jsx("span", { className: "inline-flex items-center", children: /* @__PURE__ */ e.jsx(K, { icon: i, className: "w-4 h-4" }) }),
      t,
      l && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: l,
          className: "ml-1 rounded-full hover:bg-black/10 p-0.5",
          "aria-label": "Close",
          children: /* @__PURE__ */ e.jsx(K, { icon: "mdi:close", className: "w-3 h-3" })
        }
      )
    ]
  }
);
var Jt = { exports: {} };
(function(t, r) {
  (function(a, s) {
    t.exports = s();
  })(Ft, function() {
    return function(a, s) {
      s.prototype.isSameOrAfter = function(o, l) {
        return this.isSame(o, l) || this.isAfter(o, l);
      };
    };
  });
})(Jt);
var wa = Jt.exports;
const ka = /* @__PURE__ */ Vt(wa);
var Xt = { exports: {} };
(function(t, r) {
  (function(a, s) {
    t.exports = s();
  })(Ft, function() {
    return function(a, s) {
      s.prototype.isSameOrBefore = function(o, l) {
        return this.isSame(o, l) || this.isBefore(o, l);
      };
    };
  });
})(Xt);
var ja = Xt.exports;
const Na = /* @__PURE__ */ Vt(ja);
ne.extend(ka);
ne.extend(Na);
const Ea = we(
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
), pt = ke(
  ({
    value: t,
    onChange: r,
    minDate: a,
    maxDate: s,
    variant: o = "default",
    size: l = "md",
    rounded: c = "md",
    disabled: i = !1,
    error: d = !1,
    errorText: g,
    helperText: f,
    label: u,
    required: k = !1,
    labelPlacement: p = "top",
    fullWidth: b = !1,
    className: w,
    placeholder: h = "Select date",
    leftIcon: x,
    rightIcon: y,
    monthsToShow: P = 1,
    valueFormatter: A,
    rangeStart: M,
    rangeEnd: H,
    closeOnSelect: F = !0,
    calendarFooter: N,
    ..._
  }, R) => {
    const [O, S] = Z(!1), [T, z] = Z(t), [L, m] = Z(t || /* @__PURE__ */ new Date()), [j, $] = Z(!1), C = me(null), B = me(null), I = me(null);
    be(() => {
      z(t || void 0);
    }, [t]);
    const G = () => {
      if (!O || !B.current || !I.current) return;
      const { bottom: V, left: oe, width: q } = B.current.getBoundingClientRect(), ue = I.current, fe = Ee();
      P === 2 ? Object.assign(ue.style, {
        position: "fixed",
        left: `${oe}px`,
        top: `${V + 4}px`,
        minWidth: "500px",
        width: "auto",
        maxHeight: `${fe.innerHeight - V - 8}px`,
        transform: ""
      }) : Object.assign(ue.style, {
        position: "fixed",
        left: `${oe + q / 2}px`,
        top: `${V + 4}px`,
        width: "320px",
        maxWidth: "100vw",
        maxHeight: `${fe.innerHeight - V - 8}px`,
        transform: "translateX(-50%)"
      });
    };
    be(() => {
      const V = Ee(), oe = xe(), q = () => {
        O && G();
      }, ue = () => {
        O && G();
      }, fe = (Re) => {
        Re.key === "Escape" && O && (S(!1), $(!1));
      };
      return O && (G(), V.addEventListener("scroll", q, !0), V.addEventListener("resize", ue), oe.addEventListener("keydown", fe)), () => {
        V.removeEventListener("scroll", q, !0), V.removeEventListener("resize", ue), oe.removeEventListener("keydown", fe);
      };
    }, [O]);
    const le = (V) => {
      if (M !== void 0 && H !== void 0)
        if (M && H)
          z(V), r == null || r(V);
        else if (M) {
          const q = V;
          ne(q).isBefore(M), z(q), r == null || r(q), S(!1), $(!1);
        } else
          z(V), r == null || r(V);
      else
        z(V), r == null || r(V), S(!1), $(!1);
    }, de = () => {
      m(ne(L).subtract(1, "month").toDate());
    }, he = () => {
      m(ne(L).add(1, "month").toDate());
    }, ie = (V) => {
      const oe = ne(V).startOf("month"), q = ne(V).endOf("month"), ue = [];
      let fe = oe;
      for (; fe.isBefore(q) || fe.isSame(q, "day"); )
        ue.push(fe.toDate()), fe = fe.add(1, "day");
      return ue;
    }, Y = (V) => !!(a && ne(V).isBefore(a, "day") || s && ne(V).isAfter(s, "day")), te = () => T ? ne(T).format("DD MMM YYYY") : "", Te = (V) => {
      const oe = ne(L).year(V).toDate();
      m(oe), $(!1);
    }, Ce = () => {
      if (!j) return null;
      const V = ne(L).year(), oe = Array.from({ length: 50 }, (q, ue) => V - 25 + ue);
      return /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-5 gap-2 p-2 overflow-y-auto max-h-[300px]", children: oe.map((q) => /* @__PURE__ */ e.jsx(
        "div",
        {
          onClick: () => Te(q),
          className: v(
            q === V && "bg-primary-50 text-primary",
            "text-sm cursor-pointer p-2"
          ),
          children: q
        },
        q
      )) });
    }, _e = () => {
      if (!O) return null;
      const V = xe();
      if (!("body" in V)) return null;
      const oe = Array.from({ length: P }).map(
        (q, ue) => ne(L).add(ue, "month").toDate()
      );
      return De(
        /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "fixed inset-0 z-[9998]",
              onClick: () => {
                j || S(!1);
              }
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: I,
              className: "fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-lg",
              onClick: (q) => q.stopPropagation(),
              children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between p-2 border-b border-gray-200", children: [
                  /* @__PURE__ */ e.jsx(
                    je,
                    {
                      onClick: de,
                      variant: "ghost",
                      size: "sm",
                      leftIcon: "mdi:chevron-left"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-900", children: P === 1 ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e.jsx("span", { children: ne(L).format("MMMM") }),
                    /* @__PURE__ */ e.jsxs(
                      "div",
                      {
                        className: "cursor-pointer flex items-center gap-1",
                        onClick: () => $(!j),
                        children: [
                          /* @__PURE__ */ e.jsx("span", { children: ne(L).format("YYYY") }),
                          /* @__PURE__ */ e.jsx(je, { variant: "ghost", size: "sm", leftIcon: j ? "mdi:chevron-up" : "mdi:chevron-down" })
                        ]
                      }
                    )
                  ] }) : `${ne(L).format("MMMM YYYY")} - ${ne(
                    L
                  ).add(P - 1, "month").format("MMMM YYYY")}` }) }),
                  /* @__PURE__ */ e.jsx(
                    je,
                    {
                      onClick: he,
                      variant: "ghost",
                      size: "sm",
                      rightIcon: "mdi:chevron-right"
                    }
                  )
                ] }),
                j ? Ce() : /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: v(
                      P === 2 ? "flex gap-5 p-2 mx-auto w-fit" : "justify-between p-2 mx-auto w-fit"
                    ),
                    children: oe.map((q, ue) => {
                      const fe = ie(q), Re = ne(q).startOf("month").day();
                      return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-7 gap-y-1 my-1", children: [
                          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                            (ve, Ae) => {
                              const Me = Ae === 0 || Ae === 6;
                              return /* @__PURE__ */ e.jsx(
                                "div",
                                {
                                  className: v(
                                    "text-center text-xs font-medium text-neutral",
                                    Me && "text-danger"
                                  ),
                                  children: ve
                                },
                                ve
                              );
                            }
                          ),
                          Array.from({ length: Re }).map(
                            (ve, Ae) => /* @__PURE__ */ e.jsx("div", {}, `empty-${Ae}`)
                          ),
                          fe.map((ve) => {
                            const Ae = T && ne(ve).isSame(T, "day"), Me = Y(ve), tt = ne(ve).isSame(
                              q,
                              "month"
                            ), rt = M && H && ne(ve).isSameOrAfter(M, "day") && ne(ve).isSameOrBefore(H, "day"), Ye = M && ne(ve).isSame(M, "day"), Ue = H && ne(ve).isSame(H, "day"), Qe = ne(ve).day() === 0 || ne(ve).day() === 6, $e = M && H;
                            return /* @__PURE__ */ e.jsx("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ e.jsx(
                              "div",
                              {
                                className: v(
                                  rt && "rounded-none bg-primary-50",
                                  $e && Ye && "rounded-l-full",
                                  $e && Ue && "rounded-r-full"
                                ),
                                children: /* @__PURE__ */ e.jsx(
                                  "button",
                                  {
                                    onClick: () => !Me && le(ve),
                                    disabled: Me,
                                    className: v(
                                      "p-2 text-sm transition-colors duration-200 w-10 h-10 rounded-full",
                                      Qe && "!text-danger",
                                      Ae && "bg-primary !text-white hover:bg-primary-600 active:bg-primary-700",
                                      Ae && !$e && "rounded-full",
                                      !Ae && !Me && "hover:bg-primary-50 active:bg-primary-100",
                                      !tt && "text-neutral-400",
                                      Me && "opacity-50 cursor-not-allowed",
                                      // inRange && "bg-primary-50 text-primary-900 rounded-none",
                                      $e && Ye && "!bg-primary !text-white !rounded-full",
                                      $e && Ue && "!bg-primary !text-white !rounded-full"
                                    ),
                                    children: ne(ve).format("D")
                                  },
                                  ve.toString()
                                )
                              }
                            ) });
                          })
                        ] }),
                        N
                      ] }, ue);
                    })
                  }
                )
              ]
            }
          )
        ] }),
        V.body
      );
    }, Q = /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: v("relative", !b && "inline-block"),
        ref: B,
        onClick: () => !i && S(!O),
        children: [
          x && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ e.jsx(K, { icon: x, className: "w-4 h-4" }) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: R,
              type: "text",
              value: A ? A() : te(),
              placeholder: h,
              readOnly: !0,
              className: v(
                Ea({ variant: d ? "error" : o, size: l, rounded: c, fullWidth: b }),
                x && "pl-10",
                y && "pr-10",
                w
              ),
              disabled: i,
              ..._
            }
          ),
          y && /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ e.jsx(K, { icon: y, className: "w-4 h-4" }) })
        ]
      }
    ), ae = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      g && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", children: g }),
      !g && f && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", children: f })
    ] });
    return p === "left" ? /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: v(b ? "w-full" : "inline-block", w),
        ref: C,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
            u && /* @__PURE__ */ e.jsxs("label", { className: "block text-sm text-neutral-900 pt-2", children: [
              u,
              k && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: v("flex-1", !b && "inline-block"), children: [
              Q,
              ae
            ] })
          ] }),
          _e()
        ]
      }
    ) : /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: v(b ? "w-full" : "inline-block", w),
        ref: C,
        children: [
          u && /* @__PURE__ */ e.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
            u,
            k && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          Q,
          ae,
          _e()
        ]
      }
    );
  }
);
pt.displayName = "PrimitiveDatePicker";
const Ra = ({
  mode: t = "single",
  value: r,
  onChange: a,
  monthsToShow: s = 1,
  calendarFooter: o,
  error: l = !1,
  errorText: c,
  ...i
}) => {
  const [d, g] = Z([
    void 0,
    void 0
  ]);
  if (t === "single") {
    const f = Array.isArray(r) ? r[0] : r;
    return /* @__PURE__ */ e.jsx(
      pt,
      {
        value: f === null ? void 0 : f,
        onChange: (u) => a == null ? void 0 : a(u),
        monthsToShow: s,
        calendarFooter: o,
        error: l,
        errorText: c,
        ...i
      }
    );
  }
  if (t === "range") {
    let [f, u] = Array.isArray(r) ? r : d;
    const k = (b) => {
      !f || f && u ? (g([b, void 0]), a == null || a([b, void 0])) : f && !u && (b < f ? (g([b, f]), a == null || a([b, f])) : (g([f, b]), a == null || a([f, b])));
    }, p = () => {
      if (!f) return "";
      const b = (w) => w ? w.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }) : "";
      return f && u ? `${b(f)} - ${b(u)}` : b(f);
    };
    return /* @__PURE__ */ e.jsx(
      pt,
      {
        value: f,
        onChange: k,
        monthsToShow: s,
        placeholder: i.placeholder || "Select date range",
        valueFormatter: p,
        rangeStart: f,
        rangeEnd: u,
        closeOnSelect: !!u,
        calendarFooter: o,
        error: l,
        errorText: c,
        ...i
      }
    );
  }
  return null;
};
Ra.displayName = "DatePicker";
const Qt = ke(
  ({ children: t, onClose: r, className: a, ...s }, o) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: o,
      className: v("mb-4 flex items-center justify-between", a),
      ...s,
      children: [
        t,
        r && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: r,
            className: "ml-4 rounded-full p-1 text-gray hover:bg-gray-100 hover:text-gray-700",
            "aria-label": "Close dialog",
            children: /* @__PURE__ */ e.jsx(K, { icon: "mdi:close", className: "h-5 w-5" })
          }
        )
      ]
    }
  )
), Sa = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-4xl",
  fullscreen: "w-full h-full max-w-none max-h-none rounded-none"
}, Ca = ke(
  ({
    isOpen: t,
    onClose: r,
    children: a,
    className: s,
    backdrop: o = "dark",
    header: l,
    closeOnBackdropClick: c = !0,
    size: i = "md",
    ...d
  }, g) => {
    const [f, u] = Z(!1), [k, p] = Z(!1);
    if (be(() => {
      if (t) {
        u(!0), p(!0);
        const x = xe();
        "body" in x && (x.body.style.overflow = "hidden");
      } else {
        p(!1);
        const x = setTimeout(() => {
          u(!1);
          const y = xe();
          "body" in y && (y.body.style.overflow = "");
        }, 300);
        return () => clearTimeout(x);
      }
    }, [t]), be(() => {
      const x = (y) => {
        y instanceof KeyboardEvent && y.key === "Escape" && r();
      };
      return t && xe().addEventListener("keydown", x), () => {
        xe().removeEventListener("keydown", x);
      };
    }, [t, r]), !f) return null;
    const b = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, w = () => {
      c && r();
    }, h = xe();
    return "body" in h ? De(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: v(
            "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300",
            b[o],
            k ? "opacity-100" : "opacity-0",
            i === "fullscreen" && "items-start"
          ),
          onClick: w,
          children: /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: g,
              className: v(
                "relative transform rounded-lg bg-white p-6 shadow-xl transition-all duration-300",
                Sa[i],
                k ? "scale-100 opacity-100" : "scale-95 opacity-0",
                s
              ),
              onClick: (x) => x.stopPropagation(),
              ...d,
              children: [
                l && /* @__PURE__ */ e.jsx(Qt, { onClose: r, children: l }),
                a
              ]
            }
          )
        }
      ),
      h.body
    ) : null;
  }
), Ta = ke(
  ({ children: t, className: r, ...a }, s) => /* @__PURE__ */ e.jsx(
    "h2",
    {
      ref: s,
      className: v("text-xl font-semibold text-gray-900", r),
      ...a,
      children: t
    }
  )
), Pa = ke(
  ({ children: t, className: r, ...a }, s) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: s,
      className: v("text-gray-600", r),
      ...a,
      children: t
    }
  )
), Aa = ke(
  ({ children: t, className: r, ...a }, s) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: s,
      className: v("mt-6 flex justify-end gap-3", r),
      ...a,
      children: t
    }
  )
);
Ca.displayName = "Dialog";
Ta.displayName = "DialogTitle";
Pa.displayName = "DialogBody";
Aa.displayName = "DialogActions";
Qt.displayName = "DialogHeader";
const Ma = ({
  orientation: t = "horizontal",
  variant: r = "solid",
  color: a = "neutral",
  size: s = "sm",
  className: o = ""
}) => {
  const l = {
    horizontal: "w-full border-t-0 border-l-0 border-r-0 border-b",
    vertical: "h-full border-l border-t-0 border-r-0 border-b-0"
  }, c = {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted"
  }, i = {
    primary: "border-primary-300",
    secondary: "border-secondary-300",
    neutral: "border-neutral-300",
    success: "border-success-300",
    warning: "border-warning-300",
    error: "border-error-300"
  }, d = {
    sm: t === "horizontal" ? "border-b" : "border-l",
    md: t === "horizontal" ? "border-b-2" : "border-l-2",
    lg: t === "horizontal" ? "border-b-4" : "border-l-4"
  }, g = Fe(
    "inline-block",
    l[t],
    c[r],
    i[a],
    d[s],
    o
  );
  return /* @__PURE__ */ e.jsx("div", { className: g });
}, _a = {
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
}, Ia = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, Dt = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
}, Ps = ({
  accept: t = ["*"],
  maxSize: r = 5 * 1024 * 1024,
  // 5MB default
  multiple: a = !1,
  value: s = [],
  onChange: o,
  className: l,
  disabled: c = !1,
  placeholder: i = "Drag and drop files here or click to browse",
  variant: d = "default",
  shadow: g = "none",
  rounded: f = "lg",
  children: u,
  showFileList: k = !0,
  showPlaceholder: p = !0,
  showMaxSize: b = !0,
  icon: w = "mdi:upload"
}) => {
  const [h, x] = Z(!1), [y, P] = Z(null), A = me(null), M = ze((T) => {
    T.preventDefault(), c || x(!0);
  }, [c]), H = ze((T) => {
    T.preventDefault(), x(!1);
  }, []), F = ze((T) => T.size > r ? `File size exceeds ${r / (1024 * 1024)}MB limit` : t[0] !== "*" && !t.some((z) => z.startsWith(".") ? T.name.toLowerCase().endsWith(z.toLowerCase()) : T.type.startsWith(z)) ? `File type not allowed. Allowed types: ${t.join(", ")}` : null, [t, r]), N = ze((T) => {
    if (T.preventDefault(), x(!1), P(null), c) return;
    const z = Array.from(T.dataTransfer.files), L = [], m = [];
    if (z.forEach((j) => {
      const $ = F(j);
      $ ? m.push(`${j.name}: ${$}`) : L.push(j);
    }), m.length > 0 && P(m.join(`
`)), L.length > 0) {
      const j = a ? [...s, ...L] : L;
      o == null || o(j);
    }
  }, [c, a, o, F, s]), _ = ze((T) => {
    if (P(null), c || !T.target.files) return;
    const z = Array.from(T.target.files), L = [], m = [];
    if (z.forEach((j) => {
      const $ = F(j);
      $ ? m.push(`${j.name}: ${$}`) : L.push(j);
    }), m.length > 0 && P(m.join(`
`)), L.length > 0) {
      const j = a ? [...s, ...L] : L;
      o == null || o(j);
    }
    A.current && (A.current.value = "");
  }, [c, a, o, F, s]), R = ze((T) => {
    const z = [...s];
    z.splice(T, 1), o == null || o(z);
  }, [o, s]), O = (T) => T.type.startsWith("image/") ? /* @__PURE__ */ e.jsx(K, { icon: "mdi:image", className: "w-5 h-5" }) : T.type.startsWith("text/") ? /* @__PURE__ */ e.jsx(K, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ e.jsx(K, { icon: "mdi:file", className: "w-5 h-5" }), S = _a[d];
  return /* @__PURE__ */ e.jsxs("div", { className: X("w-full", l), children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: X(
          "p-6 text-center transition-colors",
          !u && [
            "border-2 border-dashed",
            S.border,
            S.bg,
            h && S.active,
            !c && S.hover
          ],
          c && "opacity-50 cursor-not-allowed",
          Ia[g],
          Dt[f],
          !u && "cursor-pointer"
        ),
        onDragOver: M,
        onDragLeave: H,
        onDrop: N,
        onClick: () => {
          var T;
          return !c && !u && ((T = A.current) == null ? void 0 : T.click());
        },
        children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: A,
              type: "file",
              accept: t.join(","),
              multiple: a,
              onChange: _,
              className: "hidden",
              disabled: c
            }
          ),
          u ? /* @__PURE__ */ e.jsx("div", { onClick: () => {
            var T;
            return !c && ((T = A.current) == null ? void 0 : T.click());
          }, children: u }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(K, { icon: w, className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
            p && /* @__PURE__ */ e.jsx("p", { className: X("text-neutral-600", S.text), children: i }),
            b && /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-neutral mt-2", children: [
              "Max file size: ",
              r / (1024 * 1024),
              "MB"
            ] })
          ] })
        ]
      }
    ),
    y && /* @__PURE__ */ e.jsx("p", { className: "mt-2 text-sm text-danger", children: y }),
    k && s.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "mt-4 space-y-2", children: s.map((T, z) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: X(
          "flex items-center justify-between p-2",
          Dt[f],
          S.bg
        ),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
            O(T),
            /* @__PURE__ */ e.jsx("span", { className: X("text-sm", S.text), children: T.name }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-neutral", children: [
              "(",
              (T.size / 1024).toFixed(1),
              " KB)"
            ] })
          ] }),
          !c && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => R(z),
              className: "p-1 text-neutral hover:text-danger",
              children: /* @__PURE__ */ e.jsx(K, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${T.name}-${z}`
    )) })
  ] });
}, za = we(
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
), As = ({
  title: t,
  children: r,
  icon: a,
  variant: s = "default",
  rounded: o = "md",
  showClose: l = !1,
  onClose: c,
  className: i
}) => {
  const d = () => {
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
  }, g = () => {
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
  return /* @__PURE__ */ e.jsxs("div", { className: v(za({ variant: s, rounded: o }), i), children: [
    a && /* @__PURE__ */ e.jsx(K, { icon: g(), className: v("h-5 w-5 flex-shrink-0", d()) }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
      t && /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-medium text-neutral-900", children: t }),
      /* @__PURE__ */ e.jsx("div", { className: "mt-1 text-sm text-neutral", children: r })
    ] }),
    l && /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        className: "ml-auto flex-shrink-0 text-neutral-400 hover:text-neutral",
        onClick: c,
        children: /* @__PURE__ */ e.jsx(K, { icon: "mdi:close", className: "h-5 w-5" })
      }
    )
  ] });
}, dt = "select-dropdown-opened", Da = we(
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
), er = ke(
  ({
    className: t,
    variant: r = "default",
    size: a = "md",
    rounded: s = "md",
    options: o,
    label: l,
    error: c = !1,
    helperText: i,
    required: d = !1,
    placeholder: g,
    value: f,
    onChange: u,
    disabled: k = !1,
    position: p = "bottom",
    fullWidth: b = !1,
    children: w,
    leftIcon: h,
    rightIcon: x,
    ...y
  }, P) => {
    const [A, M] = Z(!1), H = me(null), F = me(null), _ = `select-${ye.useId().replace(/:/g, "")}`, R = () => {
      if (A && H.current && F.current) {
        const m = H.current.getBoundingClientRect(), j = F.current, $ = Ee(), C = $.innerHeight - m.bottom, B = m.top, G = m.bottom + j.offsetHeight + 4 >= $.innerHeight, le = B > C, de = G && le;
        p === "bottom" || p === "top" ? (j.style.position = "fixed", j.style.left = `${m.left}px`, j.style.width = `${m.width}px`, p === "bottom" && de ? (j.style.bottom = `${$.innerHeight - m.top + 4}px`, j.style.top = "auto", j.style.maxHeight = `${B - 8}px`) : p === "bottom" ? (j.style.top = `${m.bottom + 4}px`, j.style.bottom = "auto", j.style.maxHeight = `${C - 8}px`) : p === "top" && !de ? (j.style.top = `${m.bottom + 4}px`, j.style.bottom = "auto", j.style.maxHeight = `${C - 8}px`) : (j.style.bottom = `${$.innerHeight - m.top + 4}px`, j.style.top = "auto", j.style.maxHeight = `${B - 8}px`)) : p === "left" ? (j.style.position = "fixed", j.style.right = `${$.innerWidth - m.left + 4}px`, j.style.top = `${m.top}px`, j.style.maxHeight = `${$.innerHeight - m.top - 8}px`) : p === "right" && (j.style.position = "fixed", j.style.left = `${m.right + 4}px`, j.style.top = `${m.top}px`, j.style.maxHeight = `${$.innerHeight - m.top - 8}px`);
      }
    };
    be(() => {
      const m = Ee(), j = () => {
        A && R();
      }, $ = () => {
        A && R();
      };
      return A && (R(), m.addEventListener("scroll", j, !0), m.addEventListener("resize", $)), () => {
        m.removeEventListener("scroll", j, !0), m.removeEventListener("resize", $);
      };
    }, [A, p]), be(() => {
      const m = xe(), j = (C) => {
        C.detail.id !== _ && M(!1);
      }, $ = (C) => {
        const B = C.target, I = H.current, G = F.current;
        I && G && !I.contains(B) && !G.contains(B) && M(!1);
      };
      return m.addEventListener(dt, j), m.addEventListener("click", $), () => {
        m.removeEventListener(dt, j), m.removeEventListener("click", $);
      };
    }, [_]);
    const O = () => {
      if (k) return;
      if (A) {
        M(!1);
        return;
      }
      xe().dispatchEvent(
        new CustomEvent(dt, {
          detail: { id: _ }
        })
      ), M(!0);
    }, S = () => {
      if (o) {
        const m = o.find((j) => j.value === f);
        return m == null ? void 0 : m.label;
      }
      if (w) {
        const j = Ct.toArray(w).find(
          ($) => lt($) && "value" in $.props && $.props.value === f
        );
        return lt(j) ? j.props.children : null;
      }
      return null;
    }, T = (m) => {
      k || (u == null || u(m), M(!1));
    }, z = () => o ? o.map((m) => /* @__PURE__ */ e.jsx(
      et,
      {
        value: m.value,
        disabled: m.disabled,
        selected: m.value === f,
        onClick: () => {
          m.onClick && m.onClick(m.value), T(m.value);
        },
        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          m.icon,
          m.label
        ] })
      },
      m.value
    )) : w ? Ct.map(w, (m) => lt(m) && "value" in m.props ? Nr(m, {
      selected: m.props.value === f,
      onClick: () => T(m.props.value)
    }) : null) : null, L = () => {
      if (!A || k) return null;
      const m = /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: F,
          className: v(
            "fixed z-[9999] min-w-[8rem] border border-neutral-200 bg-white py-1 shadow-lg rounded-lg",
            p === "left" || p === "right" ? "w-max" : "w-full"
          ),
          onClick: ($) => $.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: z()
        }
      ), j = xe();
      return "body" in j ? De(m, j.body) : null;
    };
    return /* @__PURE__ */ e.jsxs("div", { className: v(b ? "w-full" : "inline-block"), ref: P, ...y, children: [
      l && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: _,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            l,
            d && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: v("relative", !b && "inline-block"),
          onClick: O,
          children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                id: _,
                ref: H,
                type: "button",
                className: v(
                  Da({ variant: c ? "error" : r, size: a, rounded: s, fullWidth: b }),
                  "flex items-center justify-between",
                  k && "cursor-not-allowed opacity-50",
                  h && "pl-10",
                  x && "pr-10",
                  t
                ),
                "aria-haspopup": "listbox",
                "aria-expanded": A,
                "aria-describedby": c ? `${_}-error` : i ? `${_}-helper` : void 0,
                disabled: k,
                children: [
                  h && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ e.jsx(K, { icon: h, className: "w-4 h-4" }) }),
                  /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center text-neutral gap-2 min-w-0 flex-1", children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: S() || g }) }),
                  x ? /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ e.jsx(K, { icon: x, className: "w-4 h-4" }) }) : /* @__PURE__ */ e.jsx(
                    K,
                    {
                      icon: "mdi:chevron-down",
                      className: v("transition-transform flex-shrink-0 ml-2 w-4 h-4", A && "rotate-180")
                    }
                  )
                ]
              }
            ),
            L()
          ]
        }
      ),
      c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: `${_}-error`, children: c }),
      !c && i && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: `${_}-helper`, children: i })
    ] });
  }
);
er.displayName = "Select";
const Oa = ({
  currentPage: t,
  totalPages: r,
  totalData: a,
  onPageChange: s,
  siblingCount: o = 1,
  className: l,
  perPageOptions: c,
  perPage: i = 10,
  label: d = "",
  onPerPageChange: g
}) => {
  const f = (p, b) => {
    const w = b - p + 1;
    return Array.from({ length: w }, (h, x) => x + p);
  }, k = (() => {
    const p = o * 2 + 3, b = p + 2;
    if (r > b) {
      const w = Math.max(2, t - o), h = Math.min(r - 1, t + o);
      let x = f(w, h);
      const y = w > 2, P = r - h > 1, A = p - (x.length + 1);
      if (y && !P)
        x = [...f(w - A, w - 1), ...x];
      else if (!y && P) {
        const M = f(h + 1, h + A);
        x = [...x, ...M];
      } else y && P && (x = [...x]);
      return [1, ...x, r];
    }
    return f(1, r);
  })();
  return /* @__PURE__ */ e.jsxs(
    "nav",
    {
      className: X("flex items-center justify-between space-x-1", l),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "hidden sm:block text-sm text-neutral-700", children: [
          /* @__PURE__ */ e.jsx("b", { children: `${t} - ${r}` }),
          " dari ",
          a,
          " ",
          d
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          c && c.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 mr-4", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-neutral-700 text-sm", children: "Menampilkan" }),
            /* @__PURE__ */ e.jsx(
              er,
              {
                value: i == null ? void 0 : i.toString(),
                onChange: (p) => g && g(Number(p)),
                size: "sm",
                className: "w-16",
                fullWidth: !1,
                "aria-label": "Items per page",
                children: c.map((p) => /* @__PURE__ */ e.jsx(et, { value: p.toString(), children: p }, p))
              }
            ),
            /* @__PURE__ */ e.jsx("span", { className: "text-neutral-700 text-sm", children: "data per halaman" })
          ] }),
          /* @__PURE__ */ e.jsx(
            je,
            {
              variant: "ghost",
              onClick: () => s(t - 1),
              disabled: t === 1,
              className: X(
                "px-3 py-1 rounded-md text-sm",
                t === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              ),
              children: /* @__PURE__ */ e.jsx(K, { size: "18", icon: "mdi:chevron-left" })
            }
          ),
          k.map((p, b) => {
            const w = p === t, h = typeof p == "string" && p === "...";
            return /* @__PURE__ */ e.jsx(
              je,
              {
                variant: "ghost",
                onClick: () => !h && s(p),
                className: X(
                  "px-3 py-1 rounded-md text-sm",
                  w ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  h && "cursor-default"
                ),
                children: p
              },
              b
            );
          }),
          /* @__PURE__ */ e.jsx(
            je,
            {
              variant: "ghost",
              onClick: () => s(t + 1),
              disabled: t === r,
              className: X(
                "px-3 py-1 rounded-md text-sm",
                t === r ? "text-gray-400 cursor-not-allowed" : "text-gray-700"
              ),
              children: /* @__PURE__ */ e.jsx(K, { size: "18", icon: "mdi:chevron-right" })
            }
          )
        ] })
      ]
    }
  );
}, Ms = ({
  label: t,
  checked: r = !1,
  disabled: a = !1,
  onChange: s,
  name: o,
  value: l
}) => {
  const c = (i) => {
    s && s(i.target.checked);
  };
  return /* @__PURE__ */ e.jsxs(
    "label",
    {
      className: X(
        "inline-flex items-center cursor-pointer",
        a && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "radio",
            className: X(
              "w-5 h-5 border-2 rounded-full appearance-none",
              "focus:outline-none focus:ring-2 focus:ring-primary/25",
              r ? "border-primary bg-primary" : "border-gray-300 hover:border-primary",
              a && "cursor-not-allowed"
            ),
            checked: r,
            disabled: a,
            onChange: c,
            name: o,
            value: l
          }
        ),
        t && /* @__PURE__ */ e.jsx("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-300", children: t })
      ]
    }
  );
}, La = we(
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
), $a = ({
  width: t,
  height: r,
  variant: a = "default",
  rounded: s = "md",
  fullWidth: o = !1,
  className: l
}) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: v(La({ variant: a, rounded: s, fullWidth: o }), l),
    style: {
      width: !o && typeof t == "number" ? `${t}px` : t,
      height: typeof r == "number" ? `${r}px` : r
    }
  }
), _s = ({
  min: t = 0,
  max: r = 100,
  step: a = 1,
  value: s,
  defaultValue: o = t,
  onChange: l,
  className: c,
  disabled: i = !1,
  showValue: d = !1,
  marks: g = [],
  range: f = !1
}) => {
  const u = f, [k, p] = Z(
    s !== void 0 ? s : o !== void 0 ? o : u ? [t, r] : t
  ), [b, w] = Z(null), h = me(null), x = s !== void 0 ? s : k, [y, P] = u ? Array.isArray(x) ? x : [t, r] : [typeof x == "number" ? x : t, r], A = (m) => Math.min(Math.max(m, t), r), M = (m) => {
    if (i) return;
    let j;
    u && Array.isArray(m) ? j = [A(m[0]), A(m[1])] : !u && typeof m == "number" ? j = A(m) : j = u ? [t, r] : t, s === void 0 && p(j), l == null || l(j);
  }, H = (m) => {
    if (!h.current) return t;
    const j = h.current.getBoundingClientRect(), C = (m - j.left) / j.width, B = t + (r - t) * C, I = Math.round(B / a) * a;
    return A(I);
  }, F = (m) => (j) => {
    i || (w(m), j.stopPropagation());
  }, N = (m) => {
    if (!i)
      if (!u)
        w(0), _(m, 0);
      else {
        const j = H(m.clientX), $ = Math.abs(j - y), C = Math.abs(j - P), B = $ < C ? 0 : 1;
        w(B), _(m, B);
      }
  }, _ = ye.useCallback((m, j) => {
    const $ = H(m.clientX);
    if (!u)
      M($);
    else {
      let C = [y, P];
      j === 0 ? C = [Math.min($, P - a), P] : C = [y, Math.max($, y + a)], C[0] > C[1] && (C = [C[1], C[0]]), M(C);
    }
  }, [u, y, P, a, M, H]), R = ye.useRef(b);
  R.current = b;
  const O = ye.useCallback(function(m) {
    R.current === null || i || _(m, R.current);
  }, [i, _]), S = ye.useCallback(function() {
    w(null);
  }, []);
  be(() => {
    if (b !== null) {
      const m = Ee();
      return m.addEventListener("mousemove", O), m.addEventListener("mouseup", S), () => {
        m.removeEventListener("mousemove", O), m.removeEventListener("mouseup", S);
      };
    }
  }, [b, O, S]);
  const T = (m) => (m - t) / (r - t) * 100, z = T(y), L = T(P);
  return /* @__PURE__ */ e.jsxs("div", { className: X("relative w-full", c), children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: h,
        className: X(
          "relative h-2 bg-gray-200 rounded-full cursor-pointer",
          i && "opacity-50 cursor-not-allowed"
        ),
        onMouseDown: N,
        children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute h-full bg-primary rounded-full",
              style: { left: `${u ? z : 0}%`, width: `${u ? L - z : z}%` }
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: X(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                i && "cursor-not-allowed"
              ),
              style: { left: `${z}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: F(0)
            }
          ),
          u && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: X(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                i && "cursor-not-allowed"
              ),
              style: { left: `${L}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: F(1)
            }
          )
        ]
      }
    ),
    g.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex justify-between mt-2", children: g.map((m) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "text-xs text-gray",
        style: { left: `${(m.value - t) / (r - t) * 100}%` },
        children: m.label
      },
      m.value
    )) }),
    d && /* @__PURE__ */ e.jsx("div", { className: "mt-2 text-sm text-gray-600", children: u ? `${y} - ${P}` : y })
  ] });
}, Ba = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}, Fa = {
  primary: "text-primary",
  warning: "text-warning",
  default: "text-default-400"
}, Is = ({
  rating: t,
  maxRating: r = 5,
  size: a = "md",
  color: s = "primary",
  readOnly: o = !1,
  onRatingChange: l,
  className: c
}) => {
  const [i, d] = Z(null), g = (p) => {
    o || d(p);
  }, f = () => {
    o || d(null);
  }, u = (p) => {
    !o && l && l(p);
  }, k = i !== null ? i : t;
  return /* @__PURE__ */ e.jsx("div", { className: v("flex items-center gap-1", c), children: [...Array(r)].map((p, b) => {
    const w = b + 1, h = w <= k, x = i !== null && w <= i;
    return /* @__PURE__ */ e.jsx(
      "button",
      {
        className: v(
          "transition-colors duration-200",
          Ba[a],
          h || x ? Fa[s] : "text-default-200",
          !o && "cursor-pointer"
        ),
        onMouseEnter: () => g(w),
        onMouseLeave: f,
        onClick: () => u(w),
        disabled: o,
        "aria-label": `Rate ${w} out of ${r}`,
        children: /* @__PURE__ */ e.jsx(
          K,
          {
            icon: h || x ? "mdi:star" : "mdi:star-outline",
            className: "w-full h-full"
          }
        )
      },
      b
    );
  }) });
}, Va = {
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
}, Ga = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4"
}, zs = ({
  status: t,
  size: r = "md",
  withLabel: a = !1,
  className: s
}) => {
  const { bgColor: o, label: l } = Va[t], c = Ga[r];
  return /* @__PURE__ */ e.jsxs("div", { className: v("flex items-center gap-2", s), children: [
    /* @__PURE__ */ e.jsx("div", { className: v("rounded-full animate-pulse", o, c) }),
    a && /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: l })
  ] });
}, tr = (t, r) => {
  if (r) return r;
  switch (t) {
    case "completed":
      return "mdi:check";
    case "active":
      return "mdi:circle-medium";
    default:
      return "mdi:circle-outline";
  }
}, rr = (t) => {
  switch (t) {
    case "completed":
      return "text-white bg-primary ring-4 ring-primary-50";
    case "active":
      return "text-primary bg-primary-50 ring-4 ring-primary-50";
    default:
      return "text-neutral bg-neutral-50 ring-4 ring-neutral-50";
  }
}, Ha = ({
  steps: t,
  activeStep: r,
  className: a,
  variant: s = "default"
}) => /* @__PURE__ */ e.jsx("div", { className: v("flex flex-row items-center w-full justify-between", a), children: t.map((o, l) => {
  const c = l < r ? "completed" : l === r ? "active" : "pending";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "flex items-center flex-1",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: v(
          "flex flex-col items-center z-10",
          s === "default" ? "gap-4" : "gap-2",
          s === "default" ? "px-5" : "px-3"
        ), children: [
          s === "default" && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: v(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                rr(c)
              ),
              children: /* @__PURE__ */ e.jsx(
                K,
                {
                  icon: tr(c, o.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ e.jsx(
              "span",
              {
                className: v(
                  "text-sm font-medium",
                  c === "active" ? "text-primary" : c === "completed" ? "text-neutral-900" : "text-neutral"
                ),
                children: o.label
              }
            ),
            o.description && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-neutral", children: o.description })
          ] })
        ] }),
        l < t.length - 1 && /* @__PURE__ */ e.jsx(
          Ma,
          {
            className: v(
              "transition-all duration-200",
              l < r ? "bg-primary" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    l
  );
}) }), Wa = ({
  steps: t,
  activeStep: r,
  className: a,
  variant: s = "default"
}) => /* @__PURE__ */ e.jsx("div", { className: v("flex flex-col items-start gap-8", a), children: t.map((o, l) => {
  const c = l < r ? "completed" : l === r ? "active" : "pending";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "flex flex-row w-full items-center relative",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: v(
          "flex flex-row items-center z-10",
          s === "default" ? "gap-4" : "gap-2"
        ), children: [
          s === "default" && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: v(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                rr(c)
              ),
              children: /* @__PURE__ */ e.jsx(
                K,
                {
                  icon: tr(c, o.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-start", children: [
            /* @__PURE__ */ e.jsx(
              "span",
              {
                className: v(
                  "text-sm font-medium",
                  c === "active" ? "text-primary00" : c === "completed" ? "text-neutral-900" : "text-neutral"
                ),
                children: o.label
              }
            ),
            o.description && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-neutral", children: o.description })
          ] })
        ] }),
        l < t.length - 1 && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: v(
              "absolute transition-all duration-200",
              s === "default" ? "left-4 w-[1px] top-10 bottom-[-24px]" : "left-0 w-[1px] top-6 bottom-[-24px]",
              l < r ? "bg-primary" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    l
  );
}) }), Ds = ({
  orientation: t = "horizontal",
  variant: r = "default",
  ...a
}) => t === "vertical" ? /* @__PURE__ */ e.jsx(Wa, { variant: r, ...a }) : /* @__PURE__ */ e.jsx(Ha, { variant: r, ...a }), Os = ({
  label: t,
  checked: r = !1,
  disabled: a = !1,
  onChange: s,
  size: o = "md"
}) => {
  const l = (d) => {
    s && s(d.target.checked);
  }, c = {
    sm: "w-8 h-4",
    md: "w-11 h-6",
    lg: "w-14 h-7"
  }, i = {
    sm: "w-3 h-3",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  return /* @__PURE__ */ e.jsxs(
    "label",
    {
      className: X(
        "inline-flex items-center cursor-pointer",
        a && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "checkbox",
              className: "sr-only",
              checked: r,
              disabled: a,
              onChange: l
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: X(
                "block rounded-full transition-colors duration-200 ease-in-out",
                c[o],
                r ? "bg-primary" : "bg-gray-200 dark:bg-gray-700",
                a && "cursor-not-allowed"
              )
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: X(
                "absolute rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out",
                i[o],
                r ? o === "sm" ? "translate-x-4" : o === "md" ? "translate-x-5" : "translate-x-7" : "translate-x-0.5",
                "top-1/2 -translate-y-1/2"
              )
            }
          )
        ] }),
        t && /* @__PURE__ */ e.jsx("span", { className: "ml-3 text-sm text-gray-700 dark:text-gray-300", children: t })
      ]
    }
  );
}, Ls = ({
  items: t,
  defaultActiveId: r,
  variant: a = "default",
  size: s = "md",
  className: o,
  tabListClassName: l,
  tabClassName: c,
  contentClassName: i,
  onChange: d
}) => {
  var x, y;
  const [g, f] = Z(r || ((x = t[0]) == null ? void 0 : x.id) || ""), u = ye.useRef(null), [k, p] = Z({ left: 0, width: 0 });
  ye.useEffect(() => {
    var P;
    if (a === "active-underline" && u.current) {
      const A = u.current.getBoundingClientRect(), M = (P = u.current.parentElement) == null ? void 0 : P.getBoundingClientRect();
      M && p({
        left: A.left - M.left,
        width: A.width
      });
    }
  }, [a, t, g]), ye.useEffect(() => {
    if (a === "active-underline") {
      const P = () => {
        var A;
        if (u.current) {
          const M = u.current.getBoundingClientRect(), H = (A = u.current.parentElement) == null ? void 0 : A.getBoundingClientRect();
          H && p({
            left: M.left - H.left,
            width: M.width
          });
        }
      };
      return window.addEventListener("resize", P), () => window.removeEventListener("resize", P);
    }
  }, [a, t, g]);
  const b = ze((P) => {
    f(P), d == null || d(P);
  }, [d]), w = () => {
    switch (s) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  }, h = (P, A) => {
    const M = X(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      w(),
      A && "opacity-50 cursor-not-allowed",
      !A && "cursor-pointer"
    );
    switch (a) {
      case "pills":
        return X(
          M,
          "rounded-full",
          P ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return X(
          M,
          "border-b-2",
          P ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      case "active-underline":
        return X(
          M,
          "border-b-0",
          P ? "text-primary" : "text-gray-600 dark:text-gray-300 hover:text-primary"
        );
      default:
        return X(
          M,
          "border-b-2",
          P ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: X("w-full", o), children: [
    /* @__PURE__ */ e.jsxs("div", { className: X(
      a === "active-underline" ? "relative" : "",
      "flex space-x-1",
      a === "pills" && "space-x-2 border-b-0",
      a !== "active-underline" && "border-b border-gray-200 dark:border-gray-700",
      l
    ), children: [
      t.map((P) => {
        const A = P.id === g, M = !!P.disabled;
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            ref: a === "active-underline" && A ? u : void 0,
            onClick: () => !M && b(P.id),
            disabled: M,
            className: X(
              h(A, M),
              c
            ),
            children: [
              P.icon && /* @__PURE__ */ e.jsx(
                K,
                {
                  icon: P.icon,
                  className: "w-5 h-5 flex-shrink-0"
                }
              ),
              /* @__PURE__ */ e.jsx("span", { children: P.label })
            ]
          },
          P.id
        );
      }),
      a === "active-underline" && /* @__PURE__ */ e.jsx(
        "span",
        {
          className: "absolute bottom-0 h-0.5 bg-primary transition-all duration-300",
          style: { left: k.left, width: k.width }
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: X("mt-4", i), children: (y = t.find((P) => P.id === g)) == null ? void 0 : y.content })
  ] });
}, Xe = ({
  variant: t = "p",
  children: r,
  className: a,
  as: s
}) => {
  const o = {
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
  }, c = s || ((i) => {
    switch (i) {
      case "display1":
      case "display2":
      case "heading1":
      case "heading2":
      case "heading3":
      case "heading4":
        return "h" + i.slice(-1);
      case "body1":
      case "body2":
      case "subtitle1":
      case "subtitle2":
        return "p";
      case "caption":
      case "value":
        return "span";
      default:
        return i;
    }
  })(t);
  return /* @__PURE__ */ e.jsx(c, { className: v("text-gray-900", o[t], a), children: r });
}, ut = "timepicker-dropdown-opened", Ya = we(
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
), ar = ke(
  ({
    value: t,
    onChange: r,
    use24Hour: a = !1,
    variant: s = "default",
    size: o = "md",
    rounded: l = "md",
    disabled: c = !1,
    errorText: i,
    helperText: d,
    label: g,
    required: f = !1,
    labelPlacement: u = "top",
    fullWidth: k = !1,
    className: p,
    placeholder: b = "Select time",
    leftIcon: w,
    rightIcon: h,
    valueFormatter: x,
    closeOnSelect: y = !0,
    ...P
  }, A) => {
    const [M, H] = Z(!1), [F, N] = Z(t || ""), [_, R] = Z(0), [O, S] = Z(0), [T, z] = Z(!0), L = me(null), m = me(null), j = me(null), C = `timepicker-${ye.useId().replace(/:/g, "")}`, B = () => {
      if (!M || !m.current || !j.current) return;
      const Y = m.current.getBoundingClientRect(), te = j.current, Ce = Ee().innerHeight - Y.bottom;
      te.style.top = `${Y.bottom + 4}px`, te.style.bottom = "auto", te.style.left = `${Y.left}px`, te.style.maxHeight = `${Ce - 8}px`, te.style.width = `${Y.width}px`;
    };
    be(() => {
      const Y = Ee(), te = xe(), Te = () => {
        M && B();
      }, Ce = () => {
        M && B();
      }, _e = (ae) => {
        ae.detail.id !== C && H(!1);
      }, Q = (ae) => {
        const V = ae.target;
        L.current && j.current && !L.current.contains(V) && !j.current.contains(V) && H(!1);
      };
      return M && (B(), Y.addEventListener("scroll", Te, !0), Y.addEventListener("resize", Ce)), te.addEventListener(ut, _e), te.addEventListener("mousedown", Q), () => {
        Y.removeEventListener("scroll", Te, !0), Y.removeEventListener("resize", Ce), te.removeEventListener(ut, _e), te.removeEventListener("mousedown", Q);
      };
    }, [M, C]);
    const I = () => {
      c || (M || xe().dispatchEvent(
        new CustomEvent(ut, {
          detail: { id: C }
        })
      ), H(!M));
    };
    be(() => {
      if (t) {
        N(t);
        const [Y, te] = t.split(":").map(Number);
        a ? R(Y) : (R(Y % 12 || 12), z(Y < 12)), S(te);
      }
    }, [t, a]);
    const G = () => {
      const te = `${(a || T ? _ : _ + 12).toString().padStart(2, "0")}:${O.toString().padStart(2, "0")}`;
      N(te), r == null || r(te), y && H(!1);
    }, le = () => a ? Array.from({ length: 24 }, (Y, te) => te) : Array.from({ length: 12 }, (Y, te) => te + 1), de = () => Array.from({ length: 60 }, (Y, te) => te), he = x ? x(F) : F, ie = xe();
    return "body" in ie ? /* @__PURE__ */ e.jsxs("div", { ref: L, className: v("relative", k && "w-full", p), children: [
      g && /* @__PURE__ */ e.jsxs(
        "label",
        {
          className: v(
            "block text-sm font-medium text-gray-700 mb-1",
            u === "left" && "inline-block mr-2"
          ),
          children: [
            g,
            f && /* @__PURE__ */ e.jsx("span", { className: "text-red ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: m,
          className: "relative",
          onClick: I,
          children: [
            w && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ e.jsx(K, { icon: w, size: 20 }) }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: A,
                type: "text",
                value: he,
                placeholder: b,
                readOnly: !0,
                className: v(
                  Ya({ variant: s, size: o, rounded: l, fullWidth: k }),
                  w && "pl-10",
                  h && "pr-10",
                  "text-left"
                ),
                disabled: c,
                ...P
              }
            ),
            h && /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ e.jsx(K, { icon: h, size: 20 }) })
          ]
        }
      ),
      M && De(
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: j,
            className: "fixed z-[9999] w-fit rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (Y) => Y.stopPropagation(),
            children: /* @__PURE__ */ e.jsxs("div", { className: "p-0", children: [
              /* @__PURE__ */ e.jsxs(xt, { variant: "ghost", className: v(
                "flex mx-2 my-1 p-0",
                a ? "justify-start gap-8" : "justify-start gap-4"
              ), children: [
                /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2", children: le().map((Y) => /* @__PURE__ */ e.jsx(
                  je,
                  {
                    variant: "ghost",
                    onClick: () => R(Y),
                    className: v(_ === Y && "bg-primary text-white"),
                    children: Y.toString().padStart(2, "0")
                  },
                  Y
                )) }) }) }),
                /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2", children: de().map((Y) => /* @__PURE__ */ e.jsx(
                  je,
                  {
                    variant: "ghost",
                    onClick: () => S(Y),
                    className: v(O === Y && "bg-primary text-white"),
                    children: Y.toString().padStart(2, "0")
                  },
                  Y
                )) }) }) }),
                !a && /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ e.jsx(
                    je,
                    {
                      variant: "ghost",
                      onClick: () => z(!0),
                      className: v(T && "bg-primary text-white"),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    je,
                    {
                      variant: "ghost",
                      onClick: () => z(!1),
                      className: v(!T && "bg-primary text-white"),
                      children: "PM"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "mb-2 mx-2", children: /* @__PURE__ */ e.jsx(
                je,
                {
                  variant: "primary",
                  onClick: G,
                  size: "sm",
                  fullWidth: !0,
                  children: "Select"
                }
              ) })
            ] })
          }
        ),
        ie.body
      ),
      i && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-danger-600", children: i }),
      d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-gray", children: d })
    ] }) : null;
  }
);
ar.displayName = "PrimitiveTimePicker";
const Ua = ({
  value: t,
  onChange: r,
  valueFormatter: a,
  closeOnSelect: s,
  ...o
}) => /* @__PURE__ */ e.jsx(
  ar,
  {
    value: t,
    onChange: r,
    valueFormatter: a,
    closeOnSelect: s,
    ...o
  }
);
Ua.displayName = "TimePicker";
const Ka = we(
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
), qa = we(
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
), Za = ke(
  ({
    checked: t = !1,
    onCheckedChange: r,
    variant: a = "primary",
    size: s = "md",
    label: o,
    required: l = !1,
    helperText: c,
    errorText: i,
    error: d = !1,
    className: g,
    ...f
  }, u) => {
    const k = ye.useId(), p = `${k}-helper`, b = `${k}-error`;
    return /* @__PURE__ */ e.jsxs("div", { className: "inline-flex flex-col gap-1.5", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            role: "switch",
            "aria-checked": t,
            "data-state": t ? "checked" : "unchecked",
            onClick: () => r == null ? void 0 : r(!t),
            ref: u,
            className: v(Ka({ variant: d ? "danger" : a, size: s }), g),
            "aria-describedby": d ? b : c ? p : void 0,
            "aria-invalid": d,
            "aria-required": l,
            ...f,
            children: /* @__PURE__ */ e.jsx(
              "span",
              {
                "data-state": t ? "checked" : "unchecked",
                className: v(
                  qa({ size: s }),
                  t ? "translate-x-5" : "translate-x-1"
                )
              }
            )
          }
        ),
        o && /* @__PURE__ */ e.jsxs(
          "label",
          {
            htmlFor: k,
            className: "text-sm text-neutral-900",
            children: [
              o,
              l && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ]
          }
        )
      ] }),
      d && i && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-danger", id: b, children: i }),
      !d && c && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-neutral", id: p, children: c })
    ] });
  }
);
Za.displayName = "Toggle";
const Ja = we(
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
), Xa = we("absolute w-2 h-2 transform rotate-45", {
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
}), $s = ({
  content: t,
  children: r,
  position: a = "top",
  delay: s = 0,
  className: o,
  color: l = "light",
  size: c = "md",
  isOpen: i,
  onOpenChange: d,
  trigger: g = "hover"
}) => {
  const [f, u] = Z(!1), [k, p] = Z({ top: 0, left: 0 }), b = me(null), w = me(null), h = me(), x = i !== void 0, y = x ? i : f, P = () => {
    if (!b.current || !w.current) return;
    const N = w.current.getBoundingClientRect(), _ = b.current.getBoundingClientRect(), R = Ee(), O = R.scrollX || R.pageXOffset, S = R.scrollY || R.pageYOffset;
    let T = 0, z = 0;
    const L = 8;
    switch (a) {
      case "top":
        T = N.top + S - _.height - L, z = N.left + O + (N.width - _.width) / 2;
        break;
      case "bottom":
        T = N.bottom + S + L, z = N.left + O + (N.width - _.width) / 2;
        break;
      case "left":
        T = N.top + S + (N.height - _.height) / 2, z = N.left + O - _.width - L;
        break;
      case "right":
        T = N.top + S + (N.height - _.height) / 2, z = N.right + O + L;
        break;
    }
    const m = R.innerWidth, j = R.innerHeight;
    z < 0 && (z = 0), z + _.width > m && (z = m - _.width), T < 0 && (T = 0), T + _.height > j && (T = j - _.height), p({ top: T, left: z });
  };
  be(() => {
    if (y) {
      P();
      const N = Ee();
      N.addEventListener("scroll", P, !0), N.addEventListener("resize", P);
    }
    return () => {
      const N = Ee();
      N.removeEventListener("scroll", P, !0), N.removeEventListener("resize", P);
    };
  }, [y, a]);
  const A = () => {
    x ? d == null || d(!0) : h.current = setTimeout(() => {
      u(!0);
    }, s);
  }, M = () => {
    h.current && clearTimeout(h.current), x ? d == null || d(!1) : u(!1);
  }, H = (N) => {
    N.stopPropagation(), g === "click" && (x ? d == null || d(!i) : u(!f));
  };
  be(() => {
    const N = (_) => {
      g === "click" && b.current && !b.current.contains(_.target) && w.current && !w.current.contains(_.target) && M();
    };
    return y && document.addEventListener("click", N), () => {
      document.removeEventListener("click", N);
    };
  }, [y, g]);
  const F = () => {
    if (!y) return null;
    const N = xe();
    return "body" in N ? De(
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: b,
          className: v(Ja({ color: l, size: c }), o),
          style: {
            top: `${k.top}px`,
            left: `${k.left}px`
          },
          children: [
            t,
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: v(
                  Xa({ color: l }),
                  a === "top" && "bottom-[-4px] left-1/2 -translate-x-1/2",
                  a === "bottom" && "top-[-4px] left-1/2 -translate-x-1/2",
                  a === "left" && "right-[-4px] top-1/2 -translate-y-1/2",
                  a === "right" && "left-[-4px] top-1/2 -translate-y-1/2",
                  l === "light" && a === "top" && "border-r border-b border-neutral-200",
                  l === "light" && a === "bottom" && "border-l border-t border-neutral-200",
                  l === "light" && a === "left" && "border-t border-r border-neutral-200",
                  l === "light" && a === "right" && "border-l border-b border-neutral-200"
                )
              }
            )
          ]
        }
      ),
      N.body
    ) : null;
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: w,
      className: "relative inline-block",
      onMouseEnter: g === "hover" ? A : void 0,
      onMouseLeave: g === "hover" ? M : void 0,
      onClick: H,
      children: [
        r,
        F()
      ]
    }
  ) });
}, Qa = we(
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
), es = {
  sm: 24,
  md: 36,
  lg: 48
}, ts = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  info: "bg-info"
}, rs = {
  primary: "#007C99",
  // Tailwind primary
  secondary: "#CEEAE7",
  success: "#00B37D",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#0EA5E9"
}, as = ye.forwardRef(
  ({
    className: t,
    variant: r = "bar",
    color: a = "primary",
    size: s = "md",
    value: o = 0,
    isIndeterminate: l = !1,
    showValue: c = !1,
    label: i,
    rounded: d = "full",
    icon: g,
    ...f
  }, u) => {
    const k = Math.min(Math.max(o, 0), 100), p = es[s], b = s === "sm" ? 2 : s === "md" ? 3 : 4, w = (p - b) / 2, h = 2 * Math.PI * w, x = h - k / 100 * h;
    let y = "";
    return r === "loading" ? y = "rounded-full" : d ? y = d === "none" ? "" : `rounded-${d}` : y = "rounded-md", r === "circular" ? /* @__PURE__ */ e.jsxs("div", { className: "inline-flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative", style: { width: p, height: p }, children: [
        /* @__PURE__ */ e.jsxs(
          "svg",
          {
            className: v(
              "transform -rotate-90",
              l ? "animate-spin" : ""
            ),
            width: p,
            height: p,
            children: [
              /* @__PURE__ */ e.jsx(
                "circle",
                {
                  strokeWidth: b,
                  stroke: "#e5e7eb",
                  fill: "transparent",
                  r: w,
                  cx: p / 2,
                  cy: p / 2
                }
              ),
              /* @__PURE__ */ e.jsx(
                "circle",
                {
                  className: v(
                    "transition-all duration-300 ease-in-out",
                    l ? "animate-dash" : ""
                  ),
                  strokeWidth: b,
                  strokeDasharray: h,
                  strokeDashoffset: l ? 0 : x,
                  strokeLinecap: "round",
                  stroke: rs[a],
                  fill: "transparent",
                  r: w,
                  cx: p / 2,
                  cy: p / 2
                }
              )
            ]
          }
        ),
        g && /* @__PURE__ */ e.jsx("span", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ e.jsx(K, { icon: g, size: p * 0.5 }) }),
        c && !l && !g && /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 flex items-center justify-center text-xs font-medium", children: [
          Math.round(k),
          "%"
        ] })
      ] }),
      i && /* @__PURE__ */ e.jsx("span", { className: "text-sm text-neutral-600", children: i })
    ] }) : /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: u,
          className: v(Qa({ variant: r === "loading" ? "bar" : r, size: s }), y, t),
          role: "progressbar",
          "aria-valuenow": l ? void 0 : k,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...f,
          children: /* @__PURE__ */ e.jsx(
            "div",
            {
              className: v(
                "h-full transition-all duration-300 ease-in-out",
                l ? "animate-progress-indeterminate" : "",
                ts[a],
                y
              ),
              style: {
                width: l ? "100%" : `${k}%`
              }
            }
          )
        }
      ),
      (c || i) && /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between text-xs text-neutral-600", children: [
        i && /* @__PURE__ */ e.jsx("span", { children: i }),
        c && !l && /* @__PURE__ */ e.jsxs("span", { children: [
          Math.round(k),
          "%"
        ] })
      ] })
    ] });
  }
);
as.displayName = "Progress";
const ft = [
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
], ss = we(
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
), ns = ke(
  ({
    className: t,
    variant: r = "default",
    size: a = "md",
    rounded: s = "md",
    error: o = !1,
    errorText: l,
    helperText: c,
    label: i,
    required: d = !1,
    fullWidth: g = !1,
    value: f = "",
    onChange: u,
    disabled: k = !1,
    defaultCountry: p = "id",
    placeholder: b = "Enter phone number",
    ...w
  }) => {
    const [h, x] = Z(!1), [y, P] = Z(
      () => ft.find((C) => C.iso === p) || ft[0]
    ), [A, M] = Z(""), [H, F] = Z(() => {
      const C = y.code;
      return f.startsWith(C) ? f.slice(C.length) : f;
    }), N = me(null), _ = me(null), R = ye.useId(), O = `${R}-helper`, S = `${R}-error`, T = ft.filter(
      (C) => C.name.toLowerCase().includes(A.toLowerCase()) || C.code.includes(A)
    ), z = me(null), L = () => {
      if (h && N.current && _.current) {
        const C = N.current.getBoundingClientRect(), B = _.current, I = typeof window < "u" ? window : { innerHeight: 0 }, G = I.innerHeight - C.bottom, le = C.top, he = C.bottom + (B.offsetHeight || 0) + 4 >= I.innerHeight, ie = le > G, Y = he && ie;
        B.style.position = "fixed", B.style.left = `${C.left}px`, B.style.minWidth = `${C.width}px`, B.style.maxWidth = "340px", B.style.width = "auto", Y ? (B.style.bottom = `${I.innerHeight - C.top + 4}px`, B.style.top = "auto", B.style.maxHeight = `${le - 8}px`) : (B.style.top = `${C.bottom + 4}px`, B.style.bottom = "auto", B.style.maxHeight = `${G - 8}px`);
      }
    };
    be(() => {
      const C = typeof window < "u" ? window : void 0, B = () => {
        h && L();
      }, I = () => {
        h && L();
      };
      return h && (L(), C == null || C.addEventListener("scroll", B, !0), C == null || C.addEventListener("resize", I)), () => {
        C == null || C.removeEventListener("scroll", B, !0), C == null || C.removeEventListener("resize", I);
      };
    }, [h]), be(() => {
      if (!h) return;
      const C = (B) => {
        const I = B.target;
        N.current && _.current && !N.current.contains(I) && !_.current.contains(I) && x(!1);
      };
      return document.addEventListener("click", C), () => document.removeEventListener("click", C);
    }, [h]);
    const m = (C) => {
      P(C), x(!1), M("");
      const B = C.code + H;
      u == null || u(B);
    }, j = (C) => {
      const B = C.target.value.replace(/[^\d]/g, "");
      F(B);
      const I = y.code + B;
      u == null || u(I);
    }, $ = v(
      ss({
        variant: o ? "error" : r,
        size: a,
        rounded: s,
        fullWidth: g
      }),
      "!w-full"
    );
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: z,
        className: v(g ? "w-full" : "inline-block", t),
        ...w,
        children: [
          i && /* @__PURE__ */ e.jsxs("label", { htmlFor: R, className: "mb-1.5 block text-sm text-neutral-900", children: [
            i,
            d && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: v("relative", !g && "inline-block"), children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex", children: [
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  ref: N,
                  onClick: () => !k && x(!h),
                  className: v(
                    $,
                    "flex items-center gap-2 rounded-r-none justify-between max-w-[100px]",
                    k && "cursor-not-allowed opacity-50"
                  ),
                  children: [
                    /* @__PURE__ */ e.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ e.jsx(K, { icon: y.flag, className: "w-5 h-5" }),
                      /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: y.code })
                    ] }),
                    /* @__PURE__ */ e.jsx(
                      K,
                      {
                        icon: "mdi:chevron-down",
                        className: v("transition-transform", h && "rotate-180")
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "tel",
                  id: R,
                  value: H,
                  onChange: j,
                  disabled: k,
                  className: v(
                    $,
                    "rounded-l-none flex-1 min-w-0 w-full"
                  ),
                  placeholder: b
                }
              )
            ] }),
            h && De(
              /* @__PURE__ */ e.jsxs(
                "div",
                {
                  ref: _,
                  className: v(
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
                    /* @__PURE__ */ e.jsx("div", { className: "p-2 border-b border-neutral-200", children: /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: A,
                        onChange: (C) => M(C.target.value),
                        placeholder: "Search countries...",
                        className: "w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:border-primary-300"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "max-h-[300px] overflow-y-auto", children: T.map((C) => /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => m(C),
                        className: v(
                          "w-full px-3 py-2 text-sm text-left hover:bg-primary-50 cursor-pointer",
                          y.iso === C.iso && "bg-primary-50"
                        ),
                        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ e.jsx(K, { icon: C.flag, className: "w-5 h-5" }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-sm font-medium", children: C.code }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-sm text-neutral-600", children: C.name })
                        ] })
                      },
                      C.iso + C.code
                    )) })
                  ]
                }
              ),
              typeof document < "u" ? document.body : document
            )
          ] }),
          o && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: S, children: l }),
          !o && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: O, children: c })
        ]
      }
    );
  }
);
ns.displayName = "PhoneInput";
const os = we(
  "absolute z-50 p-4 transition-opacity duration-200",
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
        light: "bg-white text-neutral-900 border border-neutral-200",
        custom: ""
        // for custom color
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      },
      shadow: {
        none: "shadow-none",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
        xl: "shadow-xl"
      }
    },
    defaultVariants: {
      color: "neutral",
      rounded: "md",
      shadow: "md"
    }
  }
), Bs = ({
  content: t,
  children: r,
  position: a = "bottom",
  color: s = "light",
  customColor: o,
  rounded: l = "md",
  shadow: c = "md",
  className: i,
  trigger: d = "click",
  autoFocus: g = !1,
  isOpen: f,
  onOpenChange: u,
  closeOnClickOutside: k = !0
}) => {
  const [p, b] = Z(!1), [w, h] = Z({ top: 0, left: 0 }), x = me(null), y = me(null), P = f !== void 0, A = P ? f : p, M = () => {
    if (!x.current || !y.current) return;
    const R = y.current.getBoundingClientRect(), O = x.current.getBoundingClientRect(), S = Ee(), T = S.scrollX || S.pageXOffset, z = S.scrollY || S.pageYOffset;
    let L = 0, m = 0;
    const j = 8;
    switch (a) {
      case "top":
        L = R.top + z - O.height - j, m = R.left + T + (R.width - O.width) / 2;
        break;
      case "bottom":
        L = R.bottom + z + j, m = R.left + T + (R.width - O.width) / 2;
        break;
      case "left":
        L = R.top + z + (R.height - O.height) / 2, m = R.left + T - O.width - j;
        break;
      case "right":
        L = R.top + z + (R.height - O.height) / 2, m = R.right + T + j;
        break;
    }
    const $ = S.innerWidth, C = S.innerHeight;
    m < 0 && (m = 0), m + O.width > $ && (m = $ - O.width), L < 0 && (L = 0), L + O.height > C && (L = C - O.height), h({ top: L, left: m });
  };
  be(() => {
    if (A) {
      M();
      const R = Ee();
      R.addEventListener("scroll", M, !0), R.addEventListener("resize", M);
    }
    return () => {
      const R = Ee();
      R.removeEventListener("scroll", M, !0), R.removeEventListener("resize", M);
    };
  }, [A, a]), be(() => {
    if (A && g && x.current) {
      const R = x.current.querySelector(
        "input, select, textarea, button, [tabindex]:not([tabindex='-1'])"
      );
      R && R.focus();
    }
  }, [A, g]);
  const H = () => {
    P ? u == null || u(!0) : b(!0);
  }, F = () => {
    P ? u == null || u(!1) : b(!1);
  }, N = (R) => {
    R.stopPropagation(), d === "click" && (P ? u == null || u(!f) : b(!p));
  };
  be(() => {
    if (!k) return;
    const R = (O) => {
      d === "click" && x.current && !x.current.contains(O.target) && y.current && !y.current.contains(O.target) && F();
    };
    return A && document.addEventListener("pointerdown", R, !0), () => {
      document.removeEventListener("pointerdown", R, !0);
    };
  }, [A, d, k]);
  const _ = () => {
    if (!A) return null;
    const R = xe();
    return "body" in R ? De(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: x,
          className: v(
            os({ color: s, rounded: l, shadow: c }),
            s === "custom" && o ? o : "",
            i
          ),
          style: {
            top: `${w.top}px`,
            left: `${w.left}px`,
            background: s === "custom" && o ? o : void 0
          },
          tabIndex: -1,
          children: t
        }
      ),
      R.body
    ) : null;
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: y,
      className: "relative inline-block",
      onMouseEnter: d === "hover" ? H : void 0,
      onMouseLeave: d === "hover" ? F : void 0,
      onClick: N,
      tabIndex: 0,
      children: [
        r,
        _()
      ]
    }
  ) });
}, ls = we("flex items-center text-sm", {
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
}), is = ke(
  ({
    className: t,
    variant: r = "default",
    size: a = "md",
    items: s,
    separator: o = /* @__PURE__ */ e.jsx(K, { icon: "mdi:slash-forward", className: "h-4 w-4 flex-shrink-0" }),
    activeLastItem: l = !0,
    ...c
  }, i) => /* @__PURE__ */ e.jsx(
    "nav",
    {
      ref: i,
      className: v(ls({ variant: r, size: a }), t),
      "aria-label": "Breadcrumb",
      ...c,
      children: /* @__PURE__ */ e.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: s.map((d, g) => {
        const f = g === s.length - 1, u = f && l;
        return /* @__PURE__ */ e.jsxs(
          "li",
          {
            className: v(
              "flex items-center gap-1.5",
              u && "text-primary font-medium"
            ),
            children: [
              d.icon && /* @__PURE__ */ e.jsx(
                K,
                {
                  icon: d.icon,
                  className: v(
                    "flex-shrink-0",
                    a === "sm" && "h-3.5 w-3.5",
                    a === "md" && "h-4 w-4",
                    a === "lg" && "h-5 w-5"
                  )
                }
              ),
              d.href && !u ? /* @__PURE__ */ e.jsx(
                "a",
                {
                  href: d.href,
                  className: v(
                    "transition-colors duration-200",
                    "hover:text-primary hover:underline focus:outline-none",
                    "focus-visible:text-primary focus-visible:underline",
                    "active:text-primary-600"
                  ),
                  children: /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[200px] inline-block align-bottom", children: d.label })
                }
              ) : /* @__PURE__ */ e.jsx("span", { className: v(
                "truncate max-w-[200px] inline-block",
                u && "text-primary"
              ), children: d.label }),
              !f && /* @__PURE__ */ e.jsx("span", { className: v(
                "text-neutral-400 flex-shrink-0",
                a === "sm" && "scale-90",
                a === "lg" && "scale-110"
              ), children: o })
            ]
          },
          d.label
        );
      }) })
    }
  )
);
is.displayName = "Breadcrumbs";
const sr = (t) => {
  const r = {
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
    header: r.header[t],
    row: r.row[t],
    border: r.border[t],
    stripe: r.stripe[t]
  };
}, cs = ({ schema: t, variant: r = "primary" }) => {
  const a = [{ name: "no", label: "No.", accessorKey: "no", type: "number" }, ...t], s = sr(r);
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white rounded-md", children: /* @__PURE__ */ e.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full border-spacing-0 border-separate", children: [
    /* @__PURE__ */ e.jsx("thead", { className: v("border-2 sticky top-0 z-10 rounded-t-md", s.border), children: /* @__PURE__ */ e.jsx("tr", { children: a.map((o, l) => /* @__PURE__ */ e.jsx(
      "th",
      {
        className: v(
          "text-sm text-wrap border-y p-4 text-left",
          s.header,
          {
            "rounded-tl-md": l === 0,
            "rounded-tr-md": l === a.length - 1
          }
        ),
        children: o.label
      },
      l
    )) }) }),
    /* @__PURE__ */ e.jsx("tbody", { className: "max-h-[50vh]", children: [...Array(5)].map((o, l) => /* @__PURE__ */ e.jsx(
      "tr",
      {
        className: v("p-3", {
          [s.stripe]: l % 2 !== 0,
          "bg-white": l % 2 === 0
        }),
        children: a.map((c, i) => /* @__PURE__ */ e.jsx(
          "td",
          {
            className: "text-left text-nowrap text-sm p-4",
            children: /* @__PURE__ */ e.jsx($a, { className: "h-10 w-full rounded-md" })
          },
          `${l}-${i}`
        ))
      },
      l
    )) })
  ] }) }) });
}, Fs = ({
  schema: t,
  data: r,
  className: a,
  headerClassName: s,
  rowClassName: o,
  cellClassName: l,
  emptyState: c,
  isLoading: i,
  loadingState: d,
  showIndex: g = !1,
  onPageChange: f,
  onPageSizeChange: u,
  onSortChange: k,
  onRowClick: p,
  showPagination: b = !1,
  variant: w = "primary",
  meta: h = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [x, y] = Z(() => {
    const F = t.find((N) => N.sortable && N.sort);
    return F ? [{
      id: F.accessorKey.toString(),
      desc: F.sort === "desc"
    }] : [];
  }), P = ye.useMemo(() => {
    const F = t.map((N) => ({
      accessorKey: N.accessorKey,
      header: N.label,
      enableSorting: !!N.sortable,
      cell: N.render ? ({ row: _ }) => {
        var R;
        return (R = N.render) == null ? void 0 : R.call(N, _.original[N.accessorKey], _.original, _.index);
      } : ({ row: _ }) => _.original[N.accessorKey] || "-",
      meta: {
        align: N.align || "left"
      }
    }));
    return g ? [{
      accessorKey: "no",
      header: "No.",
      enableSorting: !1,
      cell: ({ row: N }) => (h.current_page - 1) * h.limit_number + N.index + 1,
      meta: {
        align: "left"
      }
    }, ...F] : F;
  }, [t, g, h]), A = Sr({
    data: r,
    columns: P,
    state: {
      sorting: x
    },
    onSortingChange: (F) => {
      const N = typeof F == "function" ? F(x) : F;
      y(N), N.length > 0 ? k == null || k(N[0].desc ? "desc" : "asc", N[0].id) : k == null || k("", "");
    },
    getCoreRowModel: Pr(),
    getSortedRowModel: Tr(),
    getPaginationRowModel: Cr(),
    manualPagination: !0,
    pageCount: h.total_page
  }), M = sr(w);
  if (i)
    return d || /* @__PURE__ */ e.jsx(cs, { schema: t, variant: w });
  const H = (F, N, _) => {
    const R = F.target;
    R.tagName === "BUTTON" || R.tagName === "A" || R.tagName === "INPUT" || R.tagName === "SELECT" || R.closest("button") !== null || R.closest("a") !== null || R.closest("input") !== null || R.closest("select") !== null || p == null || p(N, _);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-md", children: [
    /* @__PURE__ */ e.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ e.jsxs("table", { className: v("w-full border-spacing-0 border-separate", a), children: [
      /* @__PURE__ */ e.jsx("thead", { className: v("border-2 sticky top-0 z-10 rounded-t-md", M.border), children: A.getHeaderGroups().map((F) => /* @__PURE__ */ e.jsx("tr", { children: F.headers.map((N, _) => {
        var R, O, S;
        return /* @__PURE__ */ e.jsx(
          "th",
          {
            className: v(
              "text-sm text-wrap border-y p-4",
              M.header,
              {
                "cursor-pointer": N.column.getCanSort(),
                "rounded-tl-md": _ === 0,
                "rounded-tr-md": _ === F.headers.length - 1,
                "text-left": ((R = N.column.columnDef.meta) == null ? void 0 : R.align) === "left",
                "text-center": ((O = N.column.columnDef.meta) == null ? void 0 : O.align) === "center",
                "text-right": ((S = N.column.columnDef.meta) == null ? void 0 : S.align) === "right"
              },
              s
            ),
            onClick: N.column.getCanSort() ? N.column.getToggleSortingHandler() : void 0,
            children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsx("span", { className: v({
                "font-semibold": _ === 0
              }), children: Tt(N.column.columnDef.header, N.getContext()) }),
              N.column.getCanSort() && /* @__PURE__ */ e.jsx(
                K,
                {
                  icon: N.column.getIsSorted() ? N.column.getIsSorted() === "desc" ? "mdi:keyboard-arrow-up" : "mdi:keyboard-arrow-down" : "mdi:unfold-more-horizontal",
                  className: v("h-4 w-4", {
                    "text-white": w !== "ghost",
                    "text-gray-700": w === "ghost"
                  })
                }
              )
            ] })
          },
          N.id
        );
      }) }, F.id)) }),
      /* @__PURE__ */ e.jsx("tbody", { className: "max-h-[50vh]", children: A.getRowModel().rows.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx(
        "td",
        {
          colSpan: A.getAllColumns().length,
          className: v(
            "text-center border h-full w-full rounded-b-md"
          ),
          children: c || /* @__PURE__ */ e.jsxs("div", { className: "flex mx-auto w-full text-center justify-center gap-3 items-center", children: [
            /* @__PURE__ */ e.jsx("p", { children: "Data Not Found" }),
            /* @__PURE__ */ e.jsx(K, { icon: "mdi:face-frown-open", size: 34 })
          ] })
        }
      ) }) : A.getRowModel().rows.map((F, N) => /* @__PURE__ */ e.jsx(
        "tr",
        {
          className: v(
            "p-3",
            M.row,
            {
              [M.stripe]: N % 2 !== 0,
              "bg-white": N % 2 === 0,
              "cursor-pointer": p
            },
            o
          ),
          onClick: (_) => H(_, F.original, N),
          children: F.getVisibleCells().map((_) => {
            var R, O, S;
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: v(
                  "px-4 py-3 text-sm text-gray-900",
                  {
                    "text-left": ((R = _.column.columnDef.meta) == null ? void 0 : R.align) === "left",
                    "text-center": ((O = _.column.columnDef.meta) == null ? void 0 : O.align) === "center",
                    "text-right": ((S = _.column.columnDef.meta) == null ? void 0 : S.align) === "right"
                  },
                  l
                ),
                children: Tt(_.column.columnDef.cell, _.getContext())
              },
              _.id
            );
          })
        },
        F.id
      )) })
    ] }) }),
    !!r.length && b && /* @__PURE__ */ e.jsx("div", { className: "p-4 bg-white rounded-b-md", children: /* @__PURE__ */ e.jsx(
      Oa,
      {
        currentPage: h.current_page,
        totalPages: h.total_page,
        totalData: h.total_data,
        onPageChange: f || (() => {
        }),
        perPage: h.limit_number,
        onPerPageChange: u || (() => {
        }),
        perPageOptions: [5, 10, 20, 50, 100],
        siblingCount: 1
      }
    ) })
  ] });
}, ds = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, nr = ke(
  ({
    className: t,
    variant: r = "default",
    rounded: a = "lg",
    title: s,
    description: o,
    onClose: l,
    icon: c,
    showIcon: i = !0,
    showClose: d = !0,
    ...g
  }, f) => {
    const k = c || (i ? {
      default: "mdi:information",
      success: "mdi:check-circle",
      error: "mdi:alert-circle",
      warning: "mdi:alert",
      info: "mdi:information"
    }[r] : void 0), p = s || o;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: f,
        className: v(
          "flex",
          o ? "items-start gap-3 p-4" : "items-center gap-2 py-2.5 px-3",
          "border border-gray-200",
          ds[a],
          {
            "bg-white": r === "default",
            "bg-success-50": r === "success",
            "bg-danger-50": r === "error",
            "bg-warning-50": r === "warning",
            "bg-info-50": r === "info"
          },
          t
        ),
        ...g,
        children: [
          k && /* @__PURE__ */ e.jsx(
            K,
            {
              icon: k,
              className: v(
                "flex-shrink-0",
                o ? "h-5 w-5 mt-0.5" : "h-4 w-4",
                {
                  "text-gray": r === "default",
                  "text-success": r === "success",
                  "text-danger": r === "error",
                  "text-warning": r === "warning",
                  "text-info": r === "info"
                }
              )
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
            s && /* @__PURE__ */ e.jsx(
              "h3",
              {
                className: v("text-sm font-medium leading-5", {
                  "text-gray-900": r === "default",
                  "text-success-900": r === "success",
                  "text-danger-900": r === "error",
                  "text-warning-900": r === "warning",
                  "text-info-900": r === "info"
                }),
                children: s
              }
            ),
            o && /* @__PURE__ */ e.jsx(
              "p",
              {
                className: v(s ? "mt-1" : "", "text-sm leading-5", {
                  "text-gray": r === "default",
                  "text-success-700": r === "success",
                  "text-danger-700": r === "error",
                  "text-warning-700": r === "warning",
                  "text-info-700": r === "info"
                }),
                children: o
              }
            ),
            !p && /* @__PURE__ */ e.jsx("span", { className: "text-sm leading-5", children: g.children })
          ] }),
          d && l && /* @__PURE__ */ e.jsx(
            je,
            {
              variant: "ghost",
              size: "sm",
              onClick: l,
              className: v(
                "flex-shrink-0 !p-1",
                o ? "ml-4" : "ml-2",
                {
                  "text-gray-400 hover:text-gray": r === "default",
                  "text-success-400 hover:text-success": r === "success",
                  "text-danger-400 hover:text-danger": r === "error",
                  "text-warning-400 hover:text-warning": r === "warning",
                  "text-info-400 hover:text-info": r === "info"
                }
              ),
              children: /* @__PURE__ */ e.jsx(K, { icon: "mdi:close", className: v(o ? "h-5 w-5" : "h-4 w-4") })
            }
          )
        ]
      }
    );
  }
);
nr.displayName = "Toast";
const bt = Er(void 0), us = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, Vs = ({ children: t }) => {
  const [r, a] = Z([]), s = ze((i) => {
    a((d) => d.filter((g) => g.id !== i));
  }, []), o = ze((i) => {
    const d = Math.random().toString(36).substr(2, 9), g = i.position || "top-right", f = i.duration || 5e3, u = {
      ...i,
      id: d,
      position: g
    };
    return a((k) => [...k, u]), f > 0 && setTimeout(() => {
      s(d);
    }, f), d;
  }, [s]), l = r.reduce((i, d) => (i[d.position] || (i[d.position] = []), i[d.position].push(d), i), {
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-right": [],
    "top-center": [],
    "bottom-center": []
  }), c = xe();
  return "body" in c ? /* @__PURE__ */ e.jsxs(bt.Provider, { value: { showToast: o, removeToast: s }, children: [
    t,
    De(
      /* @__PURE__ */ e.jsx(e.Fragment, { children: Object.entries(l).map(([i, d]) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: v(
            "fixed z-[100] flex flex-col gap-2 min-w-[320px] max-w-[420px]",
            us[i],
            i.includes("bottom") ? "flex-col-reverse" : "flex-col"
          ),
          children: d.map((g) => /* @__PURE__ */ e.jsx(
            nr,
            {
              ...g,
              onClose: () => s(g.id),
              className: "animate-slide-in"
            },
            g.id
          ))
        },
        i
      )) }),
      c.body
    )
  ] }) : /* @__PURE__ */ e.jsx(bt.Provider, { value: { showToast: o, removeToast: s }, children: t });
}, Gs = () => {
  const t = Rr(bt);
  if (!t)
    throw new Error("useToast must be used within a ToastProvider");
  return t;
}, fs = ({
  label: t,
  value: r,
  icon: a,
  className: s
}) => /* @__PURE__ */ e.jsxs(xt, { className: v(
  "flex items-center gap-4 rounded-lg w-full bg-white p-4 shadow-sm hover:bg-neutral-50 transition-shadow duration-200 justify-between",
  s
), children: [
  /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-gray", children: t }),
    /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-2xl font-semibold text-gray-900", children: r })
  ] }),
  a && /* @__PURE__ */ e.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50", children: /* @__PURE__ */ e.jsx(K, { icon: a, className: "h-6 w-6 text-primary-600" }) })
] }), ms = {
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
}, or = {
  PAGE_NOT_FOUND: {
    image: "https://design-system-eaip.onrender.com/img/page-not-found.svg",
    message: "The page you are looking for does not exist."
  },
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
  PAYMENT_SUCCESS: {
    image: "https://design-system-eaip.onrender.com/img/payment-success.svg",
    message: "Operation completed successfully."
  },
  PAYMENT_FAILED: {
    image: "https://design-system-eaip.onrender.com/img/payment-failed.svg",
    message: "Payment failed. Please try again."
  },
  NO_ORDER: {
    image: "https://design-system-eaip.onrender.com/img/no-order.svg",
    message: "No order found."
  },
  TIMEOUT: {
    image: "https://design-system-eaip.onrender.com/img/timeout.svg",
    message: "Request timed out. Please try again."
  },
  ON_PROCESS: {
    image: "https://design-system-eaip.onrender.com/img/on-process.svg",
    message: "Your request is being processed. Please wait for a moment."
  }
}, gs = {
  "no-internet": "NO_INTERNET",
  "data-not-found": "DATA_NOT_FOUND",
  "under-development": "UNDER_DEVELOPMENT",
  "information-unavailable": "INFORMATION_UNAVAILABLE",
  "payment-success": "PAYMENT_SUCCESS",
  "payment-failed": "PAYMENT_FAILED",
  "no-order": "NO_ORDER",
  timeout: "TIMEOUT",
  "on-process": "ON_PROCESS",
  "page-not-found": "PAGE_NOT_FOUND"
}, Ot = {
  ...ms,
  ...or
}, Lt = {
  image: "https://design-system-eaip.onrender.com/img/error.svg",
  message: "An unexpected error occurred. Our team is currently investigating the issue."
}, $t = (t) => typeof t == "object" && t !== null && ("code" in t || "message" in t), Hs = ({
  error: t,
  reload: r,
  children: a,
  className: s = "",
  variant: o,
  customImage: l,
  customMessage: c
}) => {
  if (!t && !o)
    return a ? /* @__PURE__ */ e.jsx(e.Fragment, { children: a }) : null;
  const d = (() => {
    if (o) {
      const u = gs[o];
      return or[u];
    }
    return $t(t) && t.code && Ot[t.code] ? Ot[t.code] : Lt;
  })(), g = l || d.image, f = c || ($t(t) ? t.message : null) || d.message;
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${s}`, children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: g,
        alt: "Error illustration",
        className: "max-w-[300px] h-auto"
      }
    ),
    typeof f == "string" ? /* @__PURE__ */ e.jsx(Xe, { variant: "body1", className: "m-0", children: f }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: f }),
    r && /* @__PURE__ */ e.jsx(
      je,
      {
        onClick: r,
        rounded: "full",
        variant: "primary",
        size: "md",
        children: "Try Again"
      }
    )
  ] });
}, ps = we(
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
), bs = ke(
  ({
    className: t,
    variant: r = "default",
    size: a = "md",
    rounded: s = "md",
    error: o = !1,
    errorText: l,
    helperText: c,
    label: i,
    bottomLabel: d,
    required: g = !1,
    showSubmitButton: f = !1,
    submitButtonLabel: u = "Submit",
    submitButtonVariant: k = "primary",
    length: p = 6,
    numericOnly: b = !0,
    onComplete: w,
    onChange: h,
    onSubmit: x,
    value: y,
    defaultValue: P = "",
    disabled: A = !1,
    autoFocus: M = !1,
    ...H
  }, F) => {
    const [N, _] = Z(P || ""), R = me([]);
    be(() => {
      y !== void 0 && _(y);
    }, [y]);
    const O = y !== void 0, S = O ? y : N, T = (I) => {
      O || _(I), h == null || h(I), I.length === p && (w == null || w(I), f || x == null || x(I));
    }, z = (I) => (G) => {
      R.current[I] = G;
    }, L = (I) => {
      I.target.select();
    }, m = (I, G) => {
      var Y;
      const le = I.target.value;
      let de = "";
      if (le.length >= 1)
        de = le.slice(-1);
      else if (le.length === 0) {
        const te = S.split("");
        te[G] = "", T(te.join(""));
        return;
      }
      if (b && !/^\d$/.test(de))
        return;
      const he = S.split("");
      for (; he.length <= G; )
        he.push("");
      he[G] = de;
      const ie = he.join("");
      T(ie), G < p - 1 && de && ((Y = R.current[G + 1]) == null || Y.focus());
    }, j = (I, G) => {
      var le, de, he;
      if (I.key === "Backspace") {
        const ie = S.split("");
        S[G] ? (I.preventDefault(), ie[G] = "", T(ie.join(""))) : G > 0 && (I.preventDefault(), ie[G - 1] = "", T(ie.join("")), (le = R.current[G - 1]) == null || le.focus());
      } else if (I.key === "Delete") {
        if (S[G]) {
          I.preventDefault();
          const ie = S.split("");
          ie[G] = "", T(ie.join(""));
        }
      } else if (I.key === "ArrowLeft" && G > 0)
        I.preventDefault(), (de = R.current[G - 1]) == null || de.focus();
      else if (I.key === "ArrowRight" && G < p - 1)
        I.preventDefault(), (he = R.current[G + 1]) == null || he.focus();
      else if (!I.ctrlKey && !I.altKey && !I.metaKey && I.key.length === 1 && b && !/^\d$/.test(I.key)) {
        I.preventDefault();
        return;
      }
    }, $ = (I) => {
      var ie;
      I.preventDefault();
      const G = I.clipboardData.getData("text/plain").trim();
      if (b && !/^\d+$/.test(G))
        return;
      const de = G.slice(0, p).padEnd(S.length, "").slice(0, p);
      T(de);
      const he = de.length < p ? de.length : p - 1;
      (ie = R.current[he]) == null || ie.focus();
    }, C = () => {
      S.length === p && (x == null || x(S));
    }, B = S.split("").concat(Array(p - S.length).fill(""));
    return /* @__PURE__ */ e.jsxs("div", { ref: F, className: v("w-full", t), ...H, children: [
      i && /* @__PURE__ */ e.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        i,
        g && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: p }).map((I, G) => /* @__PURE__ */ e.jsx(
          "input",
          {
            ref: z(G),
            type: b ? "tel" : "text",
            inputMode: b ? "numeric" : "text",
            maxLength: 1,
            value: B[G] || "",
            onChange: (le) => m(le, G),
            onKeyDown: (le) => j(le, G),
            onPaste: G === 0 ? $ : void 0,
            onFocus: L,
            disabled: A,
            autoFocus: M && G === 0,
            className: v(
              ps({
                variant: o ? "error" : r,
                size: a,
                rounded: s
              })
            ),
            "aria-invalid": o
          },
          G
        )) }),
        o && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger self-start", children: l }),
        !o && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral self-start", children: c }),
        d && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-neutral-600", children: d }),
        f && /* @__PURE__ */ e.jsx(
          je,
          {
            variant: k,
            disabled: S.length !== p || A,
            onClick: C,
            className: "mt-4",
            children: u
          }
        )
      ] })
    ] });
  }
);
bs.displayName = "InputOTP";
const Bt = {
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
}, Ws = ({
  icon: t,
  className: r,
  color: a = "primary",
  value: s,
  maxValue: o = 99,
  children: l,
  ...c
}) => {
  const i = "top-0 right-0", d = typeof s == "number" && !isNaN(s);
  let g = "";
  d && (s > o ? g = `${o}+` : g = String(s));
  const f = d ? "px-2" : "", u = d ? "min-w-[20px]" : "w-2.5 h-2.5", k = d ? "h-5" : "h-2.5", p = typeof a == "string" && a in Bt ? Bt[a] : a;
  return /* @__PURE__ */ e.jsxs("div", { className: v("relative inline-block", r), children: [
    l || (t ? /* @__PURE__ */ e.jsx(K, { icon: t, color: p, size: 32, ...c }) : null),
    /* @__PURE__ */ e.jsx(
      "span",
      {
        className: v(
          "absolute flex items-center justify-center rounded-xl bg-[#FF4C4C] text-white text-[10px] font-semibold",
          i,
          f,
          u,
          k,
          !d && "p-0",
          !d && "rounded-full"
        ),
        style: {
          transform: "translate(50%,-50%)"
        },
        children: d ? g : ""
      }
    )
  ] });
}, hs = {
  FLIGHT_LIGHT: {
    image: "https://design-system-eaip.onrender.com/img/flight-loader-light.gif",
    message: "Loading, please wait..."
  },
  FLIGHT_DARK: {
    image: "https://design-system-eaip.onrender.com/img/flight-loader-dark.gif",
    message: "Loading, please wait..."
  }
}, xs = {
  "flight-light": "FLIGHT_LIGHT",
  "flight-dark": "FLIGHT_DARK"
}, Ys = ({
  variant: t,
  customImage: r,
  customMessage: a,
  width: s,
  height: o,
  className: l = ""
}) => {
  const c = xs[t], i = hs[c];
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${l}`, children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: r || i.image,
        alt: "Loading animation",
        className: "max-w-[200px] h-auto",
        style: { width: s, height: o }
      }
    ),
    a ? typeof a == "string" ? /* @__PURE__ */ e.jsx(Xe, { variant: "body1", className: "m-0", children: a }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: a }) : /* @__PURE__ */ e.jsx(Xe, { variant: "body1", className: "m-0", children: i.message })
  ] });
}, vs = {
  PAGE_NOT_FOUND: {
    image: "https://design-system-eaip.onrender.com/img/page-not-found.svg",
    message: "The page you are looking for does not exist."
  },
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
  PAYMENT_SUCCESS: {
    image: "https://design-system-eaip.onrender.com/img/payment-success.svg",
    message: "Operation completed successfully."
  },
  PAYMENT_FAILED: {
    image: "https://design-system-eaip.onrender.com/img/payment-failed.svg",
    message: "Payment failed. Please try again."
  },
  NO_ORDER: {
    image: "https://design-system-eaip.onrender.com/img/no-order.svg",
    message: "No order found."
  },
  TIMEOUT: {
    image: "https://design-system-eaip.onrender.com/img/timeout.svg",
    message: "Request timed out. Please try again."
  },
  ON_PROCESS: {
    image: "https://design-system-eaip.onrender.com/img/on-process.svg",
    message: "Your request is being processed. Please wait for a moment."
  }
}, ys = {
  "no-internet": "NO_INTERNET",
  "data-not-found": "DATA_NOT_FOUND",
  "under-development": "UNDER_DEVELOPMENT",
  "information-unavailable": "INFORMATION_UNAVAILABLE",
  "payment-success": "PAYMENT_SUCCESS",
  "payment-failed": "PAYMENT_FAILED",
  "no-order": "NO_ORDER",
  timeout: "TIMEOUT",
  "on-process": "ON_PROCESS",
  "page-not-found": "PAGE_NOT_FOUND"
}, Us = ({
  variant: t,
  customMessage: r,
  reload: a,
  reloadText: s = "Try Again",
  customImage: o,
  width: l,
  height: c,
  className: i = ""
}) => {
  const d = ys[t], g = vs[d];
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${i}`, children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: o || g.image,
        alt: "Negative case illustration",
        className: "max-w-[300px] h-auto",
        style: { width: l, height: c }
      }
    ),
    r ? typeof r == "string" ? /* @__PURE__ */ e.jsx(Xe, { variant: "body1", className: "m-0", children: r }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: r }) : /* @__PURE__ */ e.jsx(Xe, { variant: "body1", className: "m-0", children: g.message }),
    a && /* @__PURE__ */ e.jsx(
      je,
      {
        onClick: a,
        rounded: "full",
        variant: "primary",
        size: "md",
        children: s
      }
    )
  ] });
}, Ks = ({
  widgets: t,
  className: r
}) => /* @__PURE__ */ e.jsx("div", { className: v("w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", r), children: t.map((a, s) => /* @__PURE__ */ e.jsx(fs, { ...a }, s)) });
export {
  Es as Accordion,
  fa as AutoComplete,
  Rs as Avatar,
  Ss as Badge,
  Ws as BadgeNotif,
  is as Breadcrumbs,
  je as Button,
  xt as Card,
  Cs as Checkbox,
  Ts as Chip,
  Ra as DatePicker,
  Ca as Dialog,
  Aa as DialogActions,
  Pa as DialogBody,
  Qt as DialogHeader,
  Ta as DialogTitle,
  Ma as Divider,
  Hs as ErrorWrapper,
  Ps as FileUpload,
  K as Icon,
  qt as Input,
  bs as InputOTP,
  Ys as Loader,
  Us as NegativeCase,
  As as Notification,
  Oa as Pagination,
  ns as PhoneInput,
  Bs as Popover,
  pt as PrimitiveDatePicker,
  as as Progress,
  Ms as Radio,
  er as Select,
  et as SelectItem,
  $a as Skeleton,
  _s as Slider,
  Is as StarRating,
  zs as StatusIndicator,
  Ds as Stepper,
  Os as Switch,
  Fs as Table,
  Ls as Tabs,
  Xe as Text,
  Ua as TimePicker,
  nr as Toast,
  Vs as ToastProvider,
  Za as Toggle,
  $s as Tooltip,
  fs as WidgetCard,
  Ks as WidgetCardGroup,
  ba as buttonVariants,
  ha as cardVariants,
  v as cn,
  ps as inputOTPVariants,
  Ka as toggleVariants,
  Gs as useToast
};
