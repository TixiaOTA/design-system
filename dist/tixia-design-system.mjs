import Ne, { useState as J, useEffect as be, forwardRef as we, useRef as fe, useCallback as De, Children as Ct, isValidElement as lt, cloneElement as Nr, createContext as Er, useContext as Sr } from "react";
import { createPortal as ze } from "react-dom";
import ne from "dayjs";
import { useReactTable as Rr, getPaginationRowModel as Cr, getSortedRowModel as Tr, getCoreRowModel as Ar, flexRender as Tt } from "@tanstack/react-table";
var Vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ft = { exports: {} }, Ke = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var At;
function Pr() {
  if (At) return Ke;
  At = 1;
  var t = Ne, r = Symbol.for("react.element"), a = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(i, d, g) {
    var u, f = {}, j = null, p = null;
    g !== void 0 && (j = "" + g), d.key !== void 0 && (j = "" + d.key), d.ref !== void 0 && (p = d.ref);
    for (u in d) s.call(d, u) && !l.hasOwnProperty(u) && (f[u] = d[u]);
    if (i && i.defaultProps) for (u in d = i.defaultProps, d) f[u] === void 0 && (f[u] = d[u]);
    return { $$typeof: r, type: i, key: j, ref: p, props: f, _owner: o.current };
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
var Pt;
function Mr() {
  return Pt || (Pt = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Ne, r = Symbol.for("react.element"), a = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), i = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = Symbol.iterator, h = "@@iterator";
    function b(n) {
      if (n === null || typeof n != "object")
        return null;
      var S = v && n[v] || n[h];
      return typeof S == "function" ? S : null;
    }
    var x = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(n) {
      {
        for (var S = arguments.length, _ = new Array(S > 1 ? S - 1 : 0), G = 1; G < S; G++)
          _[G - 1] = arguments[G];
        L("error", n, _);
      }
    }
    function L(n, S, _) {
      {
        var G = x.ReactDebugCurrentFrame, re = G.getStackAddendum();
        re !== "" && (S += "%s", _ = _.concat([re]));
        var se = _.map(function(ee) {
          return String(ee);
        });
        se.unshift("Warning: " + S), Function.prototype.apply.call(console[n], console, se);
      }
    }
    var M = !1, I = !1, W = !1, F = !1, E = !1, A;
    A = Symbol.for("react.module.reference");
    function C(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === s || n === l || E || n === o || n === g || n === u || F || n === p || M || I || W || typeof n == "object" && n !== null && (n.$$typeof === j || n.$$typeof === f || n.$$typeof === c || n.$$typeof === i || n.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === A || n.getModuleId !== void 0));
    }
    function z(n, S, _) {
      var G = n.displayName;
      if (G)
        return G;
      var re = S.displayName || S.name || "";
      return re !== "" ? _ + "(" + re + ")" : _;
    }
    function R(n) {
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
        case u:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case i:
            var S = n;
            return R(S) + ".Consumer";
          case c:
            var _ = n;
            return R(_._context) + ".Provider";
          case d:
            return z(n, n.render, "ForwardRef");
          case f:
            var G = n.displayName || null;
            return G !== null ? G : T(n.type) || "Memo";
          case j: {
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
    var P = Object.assign, $ = 0, m, k, N, D, H, O, B;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function ce() {
      {
        if ($ === 0) {
          m = console.log, k = console.info, N = console.warn, D = console.error, H = console.group, O = console.groupCollapsed, B = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: de,
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
        $++;
      }
    }
    function he() {
      {
        if ($--, $ === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, n, {
              value: m
            }),
            info: P({}, n, {
              value: k
            }),
            warn: P({}, n, {
              value: N
            }),
            error: P({}, n, {
              value: D
            }),
            group: P({}, n, {
              value: H
            }),
            groupCollapsed: P({}, n, {
              value: O
            }),
            groupEnd: P({}, n, {
              value: B
            })
          });
        }
        $ < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = x.ReactCurrentDispatcher, Y;
    function te(n, S, _) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (re) {
            var G = re.stack.trim().match(/\n( *(at )?)/);
            Y = G && G[1] || "";
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
    function Q(n, S) {
      if (!n || Te)
        return "";
      {
        var _ = Ce.get(n);
        if (_ !== void 0)
          return _;
      }
      var G;
      Te = !0;
      var re = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var se;
      se = le.current, le.current = null, ce();
      try {
        if (S) {
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
            } catch (Re) {
              G = Re;
            }
            Reflect.construct(n, [], ee);
          } else {
            try {
              ee.call();
            } catch (Re) {
              G = Re;
            }
            n.call(ee.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Re) {
            G = Re;
          }
          n();
        }
      } catch (Re) {
        if (Re && G && typeof Re.stack == "string") {
          for (var Z = Re.stack.split(`
`), je = G.stack.split(`
`), ge = Z.length - 1, pe = je.length - 1; ge >= 1 && pe >= 0 && Z[ge] !== je[pe]; )
            pe--;
          for (; ge >= 1 && pe >= 0; ge--, pe--)
            if (Z[ge] !== je[pe]) {
              if (ge !== 1 || pe !== 1)
                do
                  if (ge--, pe--, pe < 0 || Z[ge] !== je[pe]) {
                    var Ae = `
` + Z[ge].replace(" at new ", " at ");
                    return n.displayName && Ae.includes("<anonymous>") && (Ae = Ae.replace("<anonymous>", n.displayName)), typeof n == "function" && Ce.set(n, Ae), Ae;
                  }
                while (ge >= 1 && pe >= 0);
              break;
            }
        }
      } finally {
        Te = !1, le.current = se, he(), Error.prepareStackTrace = re;
      }
      var Be = n ? n.displayName || n.name : "", Fe = Be ? te(Be) : "";
      return typeof n == "function" && Ce.set(n, Fe), Fe;
    }
    function ae(n, S, _) {
      return Q(n, !1);
    }
    function V(n) {
      var S = n.prototype;
      return !!(S && S.isReactComponent);
    }
    function oe(n, S, _) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Q(n, V(n));
      if (typeof n == "string")
        return te(n);
      switch (n) {
        case g:
          return te("Suspense");
        case u:
          return te("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case d:
            return ae(n.render);
          case f:
            return oe(n.type, S, _);
          case j: {
            var G = n, re = G._payload, se = G._init;
            try {
              return oe(se(re), S, _);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, ue = {}, me = x.ReactDebugCurrentFrame;
    function Se(n) {
      if (n) {
        var S = n._owner, _ = oe(n.type, n._source, S ? S.type : null);
        me.setExtraStackFrame(_);
      } else
        me.setExtraStackFrame(null);
    }
    function ve(n, S, _, G, re) {
      {
        var se = Function.call.bind(q);
        for (var ee in n)
          if (se(n, ee)) {
            var Z = void 0;
            try {
              if (typeof n[ee] != "function") {
                var je = Error((G || "React class") + ": " + _ + " type `" + ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw je.name = "Invariant Violation", je;
              }
              Z = n[ee](S, ee, G, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ge) {
              Z = ge;
            }
            Z && !(Z instanceof Error) && (Se(re), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", G || "React class", _, ee, typeof Z), Se(null)), Z instanceof Error && !(Z.message in ue) && (ue[Z.message] = !0, Se(re), y("Failed %s type: %s", _, Z.message), Se(null));
          }
      }
    }
    var Pe = Array.isArray;
    function Me(n) {
      return Pe(n);
    }
    function tt(n) {
      {
        var S = typeof Symbol == "function" && Symbol.toStringTag, _ = S && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return _;
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
        var S = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function ir(n) {
      if (q.call(n, "key")) {
        var S = Object.getOwnPropertyDescriptor(n, "key").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function cr(n, S) {
      typeof n.ref == "string" && Qe.current;
    }
    function dr(n, S) {
      {
        var _ = function() {
          vt || (vt = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        _.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function ur(n, S) {
      {
        var _ = function() {
          yt || (yt = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        _.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var mr = function(n, S, _, G, re, se, ee) {
      var Z = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: n,
        key: S,
        ref: _,
        props: ee,
        // Record the component responsible for creating this element.
        _owner: se
      };
      return Z._store = {}, Object.defineProperty(Z._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Z, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: G
      }), Object.defineProperty(Z, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: re
      }), Object.freeze && (Object.freeze(Z.props), Object.freeze(Z)), Z;
    };
    function fr(n, S, _, G, re) {
      {
        var se, ee = {}, Z = null, je = null;
        _ !== void 0 && (Ue(_), Z = "" + _), ir(S) && (Ue(S.key), Z = "" + S.key), lr(S) && (je = S.ref, cr(S, re));
        for (se in S)
          q.call(S, se) && !$e.hasOwnProperty(se) && (ee[se] = S[se]);
        if (n && n.defaultProps) {
          var ge = n.defaultProps;
          for (se in ge)
            ee[se] === void 0 && (ee[se] = ge[se]);
        }
        if (Z || je) {
          var pe = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          Z && dr(ee, pe), je && ur(ee, pe);
        }
        return mr(n, Z, je, re, G, Qe.current, ee);
      }
    }
    var at = x.ReactCurrentOwner, wt = x.ReactDebugCurrentFrame;
    function Ve(n) {
      if (n) {
        var S = n._owner, _ = oe(n.type, n._source, S ? S.type : null);
        wt.setExtraStackFrame(_);
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
        var S = kt();
        if (!S) {
          var _ = typeof n == "string" ? n : n.displayName || n.name;
          _ && (S = `

Check the top-level render call using <` + _ + ">.");
        }
        return S;
      }
    }
    function Nt(n, S) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var _ = pr(S);
        if (jt[_])
          return;
        jt[_] = !0;
        var G = "";
        n && n._owner && n._owner !== at.current && (G = " It was passed a child from " + T(n._owner.type) + "."), Ve(n), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, G), Ve(null);
      }
    }
    function Et(n, S) {
      {
        if (typeof n != "object")
          return;
        if (Me(n))
          for (var _ = 0; _ < n.length; _++) {
            var G = n[_];
            nt(G) && Nt(G, S);
          }
        else if (nt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var re = b(n);
          if (typeof re == "function" && re !== n.entries)
            for (var se = re.call(n), ee; !(ee = se.next()).done; )
              nt(ee.value) && Nt(ee.value, S);
        }
      }
    }
    function br(n) {
      {
        var S = n.type;
        if (S == null || typeof S == "string")
          return;
        var _;
        if (typeof S == "function")
          _ = S.propTypes;
        else if (typeof S == "object" && (S.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        S.$$typeof === f))
          _ = S.propTypes;
        else
          return;
        if (_) {
          var G = T(S);
          ve(_, n.props, "prop", G, n);
        } else if (S.PropTypes !== void 0 && !st) {
          st = !0;
          var re = T(S);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", re || "Unknown");
        }
        typeof S.getDefaultProps == "function" && !S.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(n) {
      {
        for (var S = Object.keys(n.props), _ = 0; _ < S.length; _++) {
          var G = S[_];
          if (G !== "children" && G !== "key") {
            Ve(n), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", G), Ve(null);
            break;
          }
        }
        n.ref !== null && (Ve(n), y("Invalid attribute `ref` supplied to `React.Fragment`."), Ve(null));
      }
    }
    var St = {};
    function Rt(n, S, _, G, re, se) {
      {
        var ee = C(n);
        if (!ee) {
          var Z = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (Z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var je = gr();
          je ? Z += je : Z += kt();
          var ge;
          n === null ? ge = "null" : Me(n) ? ge = "array" : n !== void 0 && n.$$typeof === r ? (ge = "<" + (T(n.type) || "Unknown") + " />", Z = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof n, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, Z);
        }
        var pe = fr(n, S, _, re, se);
        if (pe == null)
          return pe;
        if (ee) {
          var Ae = S.children;
          if (Ae !== void 0)
            if (G)
              if (Me(Ae)) {
                for (var Be = 0; Be < Ae.length; Be++)
                  Et(Ae[Be], n);
                Object.freeze && Object.freeze(Ae);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Et(Ae, n);
        }
        if (q.call(S, "key")) {
          var Fe = T(n), Re = Object.keys(S).filter(function(jr) {
            return jr !== "key";
          }), ot = Re.length > 0 ? "{key: someKey, " + Re.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!St[Fe + ot]) {
            var kr = Re.length > 0 ? "{" + Re.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ot, Fe, kr, Fe), St[Fe + ot] = !0;
          }
        }
        return n === s ? hr(pe) : br(pe), pe;
      }
    }
    function xr(n, S, _) {
      return Rt(n, S, _, !0);
    }
    function vr(n, S, _) {
      return Rt(n, S, _, !1);
    }
    var yr = vr, wr = xr;
    qe.Fragment = s, qe.jsx = yr, qe.jsxs = wr;
  }()), qe;
}
process.env.NODE_ENV === "production" ? ft.exports = Pr() : ft.exports = Mr();
var e = ft.exports;
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
const Mt = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, _t = X, ye = (t, r) => (a) => {
  var s;
  if ((r == null ? void 0 : r.variants) == null) return _t(t, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: o, defaultVariants: l } = r, c = Object.keys(o).map((g) => {
    const u = a == null ? void 0 : a[g], f = l == null ? void 0 : l[g];
    if (u === null) return null;
    const j = Mt(u) || Mt(f);
    return o[g][j];
  }), i = a && Object.entries(a).reduce((g, u) => {
    let [f, j] = u;
    return j === void 0 || (g[f] = j), g;
  }, {}), d = r == null || (s = r.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((g, u) => {
    let { class: f, className: j, ...p } = u;
    return Object.entries(p).every((v) => {
      let [h, b] = v;
      return Array.isArray(b) ? b.includes({
        ...l,
        ...i
      }[h]) : {
        ...l,
        ...i
      }[h] === b;
    }) ? [
      ...g,
      f,
      j
    ] : g;
  }, []);
  return _t(t, c, d, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, ht = "-", _r = (t) => {
  const r = Dr(t), {
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
}, Dr = (t) => {
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
      const l = o === "" ? r : Dt(r, o);
      l.classGroupId = a;
      return;
    }
    if (typeof o == "function") {
      if (zr(o)) {
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
      gt(c, Dt(r, l), a, s);
    });
  });
}, Dt = (t, r) => {
  let a = t;
  return r.split(ht).forEach((s) => {
    a.nextPart.has(s) || a.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(s);
  }), a;
}, zr = (t) => t.isThemeGetter, Or = (t, r) => r ? t.map(([a, s]) => {
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
    let g = 0, u = 0, f;
    for (let b = 0; b < i.length; b++) {
      let x = i[b];
      if (g === 0) {
        if (x === o && (s || i.slice(b, b + l) === r)) {
          d.push(i.slice(u, b)), u = b + l;
          continue;
        }
        if (x === "/") {
          f = b;
          continue;
        }
      }
      x === "[" ? g++ : x === "]" && g--;
    }
    const j = d.length === 0 ? i : i.substring(u), p = j.startsWith(Wt), v = p ? j.substring(1) : j, h = f && f > u ? f - u : void 0;
    return {
      modifiers: d,
      hasImportantModifier: p,
      baseClassName: v,
      maybePostfixModifierPosition: h
    };
  };
  return a ? (i) => a({
    className: i,
    parseClassName: c
  }) : c;
}, Fr = (t) => {
  if (t.length <= 1)
    return t;
  const r = [];
  let a = [];
  return t.forEach((s) => {
    s[0] === "[" ? (r.push(...a.sort(), s), a = []) : a.push(s);
  }), r.push(...a.sort()), r;
}, Vr = (t) => ({
  cache: Lr(t.cacheSize),
  parseClassName: $r(t),
  ..._r(t)
}), Br = /\s+/, Gr = (t, r) => {
  const {
    parseClassName: a,
    getClassGroupId: s,
    getConflictingClassGroupIds: o
  } = r, l = [], c = t.trim().split(Br);
  let i = "";
  for (let d = c.length - 1; d >= 0; d -= 1) {
    const g = c[d], {
      modifiers: u,
      hasImportantModifier: f,
      baseClassName: j,
      maybePostfixModifierPosition: p
    } = a(g);
    let v = !!p, h = s(v ? j.substring(0, p) : j);
    if (!h) {
      if (!v) {
        i = g + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (h = s(j), !h) {
        i = g + (i.length > 0 ? " " + i : i);
        continue;
      }
      v = !1;
    }
    const b = Fr(u).join(":"), x = f ? b + Wt : b, y = x + h;
    if (l.includes(y))
      continue;
    l.push(y);
    const L = o(h, v);
    for (let M = 0; M < L.length; ++M) {
      const I = L[M];
      l.push(x + I);
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
    const g = r.reduce((u, f) => f(u), t());
    return a = Vr(g), s = a.cache.get, o = a.cache.set, l = i, i(d);
  }
  function i(d) {
    const g = s(d);
    if (g)
      return g;
    const u = Gr(d, a);
    return o(d, u), u;
  }
  return function() {
    return l(Hr.apply(null, arguments));
  };
}
const ie = (t) => {
  const r = (a) => a[t] || [];
  return r.isThemeGetter = !0, r;
}, Ut = /^\[(?:([a-z-]+):)?(.+)\]$/i, Yr = /^\d+\/\d+$/, Ur = /* @__PURE__ */ new Set(["px", "full", "screen"]), Kr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, qr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Zr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Jr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Xr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ie = (t) => Ge(t) || Ur.has(t) || Yr.test(t), Oe = (t) => We(t, "length", oa), Ge = (t) => !!t && !Number.isNaN(Number(t)), it = (t) => We(t, "number", Ge), Ze = (t) => !!t && Number.isInteger(Number(t)), Qr = (t) => t.endsWith("%") && Ge(t.slice(0, -1)), U = (t) => Ut.test(t), Le = (t) => Kr.test(t), ea = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ta = (t) => We(t, ea, Kt), ra = (t) => We(t, "position", Kt), aa = /* @__PURE__ */ new Set(["image", "url"]), sa = (t) => We(t, aa, ia), na = (t) => We(t, "", la), Je = () => !0, We = (t, r, a) => {
  const s = Ut.exec(t);
  return s ? s[1] ? typeof r == "string" ? s[1] === r : r.has(s[1]) : a(s[2]) : !1;
}, oa = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  qr.test(t) && !Zr.test(t)
), Kt = () => !1, la = (t) => Jr.test(t), ia = (t) => Xr.test(t), ca = () => {
  const t = ie("colors"), r = ie("spacing"), a = ie("blur"), s = ie("brightness"), o = ie("borderColor"), l = ie("borderRadius"), c = ie("borderSpacing"), i = ie("borderWidth"), d = ie("contrast"), g = ie("grayscale"), u = ie("hueRotate"), f = ie("invert"), j = ie("gap"), p = ie("gradientColorStops"), v = ie("gradientColorStopPositions"), h = ie("inset"), b = ie("margin"), x = ie("opacity"), y = ie("padding"), L = ie("saturate"), M = ie("scale"), I = ie("sepia"), W = ie("skew"), F = ie("space"), E = ie("translate"), A = () => ["auto", "contain", "none"], C = () => ["auto", "hidden", "clip", "visible", "scroll"], z = () => ["auto", U, r], R = () => [U, r], T = () => ["", Ie, Oe], P = () => ["auto", Ge, U], $ = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], m = () => ["solid", "dashed", "dotted", "double", "none"], k = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], N = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], D = () => ["", "0", U], H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], O = () => [Ge, U];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Je],
      spacing: [Ie, Oe],
      blur: ["none", "", Le, U],
      brightness: O(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Le, U],
      borderSpacing: R(),
      borderWidth: T(),
      contrast: O(),
      grayscale: D(),
      hueRotate: O(),
      invert: D(),
      gap: R(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Qr, Oe],
      inset: z(),
      margin: z(),
      opacity: O(),
      padding: R(),
      saturate: O(),
      scale: O(),
      sepia: D(),
      skew: O(),
      space: R(),
      translate: R()
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
        "break-after": H()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": H()
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
        object: [...$(), U]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: C()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": C()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": C()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: A()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": A()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": A()
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
        inset: [h]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [h]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [h]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [h]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [h]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [h]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [h]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [h]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [h]
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
        basis: z()
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
        grow: D()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: D()
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
        "col-start": P()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": P()
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
        "row-start": P()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": P()
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
        gap: [j]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [j]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [j]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...N()]
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
        content: ["normal", ...N(), "baseline"]
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
        "place-content": [...N(), "baseline"]
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
        m: [b]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [b]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [b]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [b]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [b]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [b]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [b]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [b]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [b]
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
        "line-clamp": ["none", Ge, it]
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
        indent: R()
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
        bg: [...$(), ra]
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
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
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
        "mix-blend": [...k(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": k()
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
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [L]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [I]
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
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
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
        "backdrop-saturate": [L]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [I]
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
        duration: O()
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
        delay: O()
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
        rotate: [Ze, U]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [E]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [E]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [W]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [W]
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
        "scroll-m": R()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": R()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": R()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": R()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": R()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": R()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": R()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": R()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": R()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": R()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": R()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": R()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": R()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": R()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": R()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": R()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": R()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": R()
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
}, He = /* @__PURE__ */ Wr(ca);
function w(...t) {
  return He(X(t));
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
  const [u, f] = J(null), [j, p] = J(!0), [v, h] = J(null);
  return be(() => {
    let b = !0;
    return (async () => {
      try {
        const { Icon: y } = await import("./iconify-Dqt3MVen.mjs");
        b && (f(() => y), p(!1));
      } catch (y) {
        console.error("Failed to load icon:", y), b && (h(y), p(!1));
      }
    })(), () => {
      b = !1;
    };
  }, []), j ? /* @__PURE__ */ e.jsx("span", { style: { width: a, height: a } }) : v || !u ? null : /* @__PURE__ */ e.jsx(
    u,
    {
      icon: t,
      className: w(
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
}, da = ye(
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
), qt = we(
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
    fullWidth: u = !1,
    leftIcon: f,
    rightIcon: j,
    onRightIconClick: p,
    id: v,
    ...h
  }, b) => {
    const x = v || Ne.useId(), y = `${x}-helper`, L = `${x}-error`, M = /* @__PURE__ */ e.jsxs("div", { className: w("relative", !u && "inline-block"), children: [
      f && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ e.jsx(K, { icon: f, className: "w-4 h-4" }) }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          id: x,
          type: "text",
          ref: b,
          className: w(
            da({ variant: o ? "error" : r, size: a, rounded: s, fullWidth: u }),
            f && "pl-10",
            j && "pr-10",
            t
          ),
          "aria-describedby": o ? L : c ? y : void 0,
          "aria-invalid": o,
          "aria-required": d,
          ...h
        }
      ),
      j && /* @__PURE__ */ e.jsx(
        "div",
        {
          className: w(
            "absolute right-3 top-1/2 -translate-y-1/2 text-neutral",
            p && "cursor-pointer hover:text-primary-600"
          ),
          onClick: p,
          role: p ? "button" : void 0,
          tabIndex: p ? 0 : void 0,
          children: /* @__PURE__ */ e.jsx(K, { icon: j, className: "w-4 h-4" })
        }
      )
    ] }), I = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      o && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: L, children: l }),
      !o && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: y, children: c })
    ] });
    return g === "left" ? /* @__PURE__ */ e.jsx("div", { className: w(u ? "w-full" : "inline-block", t), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
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
      /* @__PURE__ */ e.jsxs("div", { className: w("flex-1", !u && "inline-block"), children: [
        M,
        I
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: w(u ? "w-full" : "inline-block", t), children: [
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
      M,
      I
    ] });
  }
);
qt.displayName = "Input";
const et = Ne.forwardRef(
  ({ className: t, children: r, selected: a, disabled: s, ...o }, l) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: l,
      className: w(
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
}, ct = "autocomplete-dropdown-opened", ua = ye(
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
), ma = we(
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
    leftIcon: u,
    rightIcon: f,
    error: j = !1,
    errorText: p,
    helperText: v,
    label: h,
    required: b = !1,
    labelPlacement: x = "top",
    fullWidth: y = !1,
    value: L,
    onChange: M,
    onFocus: I,
    onBlur: W,
    showClear: F = !1,
    onClear: E,
    ...A
  }, C) => {
    const [z, R] = J(!1), [T, P] = J(L || ""), $ = fe(null), m = fe(null), k = fe(null), N = s !== void 0, H = `autocomplete-${Ne.useId().replace(/:/g, "")}`, O = () => {
      if (!z || !m.current || !k.current) return;
      const { bottom: Q, top: ae, left: V, width: oe } = m.current.getBoundingClientRect(), q = k.current, ue = Ee(), me = {
        position: "fixed",
        left: `${V}px`,
        width: `${oe}px`
      }, Se = o === "bottom" ? {
        ...me,
        top: `${Q + 4}px`,
        maxHeight: `${ue.innerHeight - Q - 8}px`
      } : {
        ...me,
        bottom: `${ue.innerHeight - ae + 4}px`,
        maxHeight: `${ae - 8}px`
      };
      Object.assign(q.style, Se);
    };
    be(() => {
      const Q = Ee(), ae = xe(), V = () => {
        z && O();
      }, oe = () => {
        z && O();
      }, q = (me) => {
        me.detail.id !== H && R(!1);
      }, ue = (me) => {
        const Se = me.target;
        $.current && !$.current.contains(Se) && k.current && !k.current.contains(Se) && R(!1);
      };
      return z && (O(), Q.addEventListener("scroll", V, !0), Q.addEventListener("resize", oe)), ae.addEventListener(ct, q), ae.addEventListener("click", ue), () => {
        Q.removeEventListener("scroll", V, !0), Q.removeEventListener("resize", oe), ae.removeEventListener(ct, q), ae.removeEventListener("click", ue);
      };
    }, [z, H]), be(() => {
      P(L || "");
    }, [L]);
    const B = (Q) => {
      const { value: ae } = Q.target;
      if (P(ae), !ae.trim()) {
        R(!1);
        return;
      }
      R(!0), M == null || M(Q);
    }, de = (Q) => {
      Q.stopPropagation(), P(""), E == null || E();
      const ae = new Event("change");
      ae.target = { value: "" }, M == null || M(ae);
    }, ce = (Q) => {
      var q;
      if (!Q) return;
      const { value: ae, label: V } = Q;
      P(V), R(!1), a == null || a(ae);
      const oe = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: Q }
      });
      (q = m.current) == null || q.dispatchEvent(oe);
    }, he = (Q) => {
      N || (xe().dispatchEvent(
        new CustomEvent(ct, {
          detail: { id: H }
        })
      ), R(!0)), I == null || I(Q);
    }, le = (Q) => {
      W == null || W(Q);
    }, Y = r.filter(
      ({ label: Q }) => Q.toLowerCase().includes((T || "").toLowerCase().trim())
    ), te = N ? s : z, Te = F && T && !A.disabled && !A.readOnly, Ce = Te ? "mdi:close" : f, _e = () => {
      if (!te) return null;
      const Q = xe();
      if (!("body" in Q)) return null;
      const ae = /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: k,
          className: w(
            ua({ position: o }),
            "overflow-auto"
          ),
          onClick: (V) => V.stopPropagation(),
          children: l ? /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ e.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }) }) : Y.length > 0 ? Y.map((V) => /* @__PURE__ */ e.jsx(
            et,
            {
              value: V.value,
              selected: V.label === T,
              onClick: () => ce(V),
              children: c ? c(V) : V.label
            },
            V.value
          )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-2 text-sm text-neutral", children: "No options found" })
        }
      );
      return ze(ae, Q.body);
    };
    return /* @__PURE__ */ e.jsxs("div", { ref: $, className: w("relative", y ? "w-full" : "inline-block"), children: [
      /* @__PURE__ */ e.jsx("div", { ref: m, className: w(!y && "inline-block"), children: /* @__PURE__ */ e.jsx(
        qt,
        {
          ref: C,
          value: T,
          onChange: B,
          onFocus: he,
          onBlur: le,
          variant: i,
          size: d,
          rounded: g,
          leftIcon: u,
          rightIcon: Ce,
          error: j,
          errorText: p,
          helperText: v,
          label: h,
          required: b,
          labelPlacement: x,
          fullWidth: y,
          className: t,
          ...A,
          onClick: Te ? de : A.onClick
        }
      ) }),
      _e()
    ] });
  }
);
ma.displayName = "AutoComplete";
const fa = {
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
  const [u, f] = J(a), j = (v) => {
    f(
      r ? (h) => h.includes(v) ? h.filter((b) => b !== v) : [...h, v] : (h) => h.includes(v) ? [] : [v]
    );
  }, p = fa[i];
  return /* @__PURE__ */ e.jsx("div", { className: X("w-full space-y-2", l), children: t.map((v) => {
    const h = u.includes(v.id), b = !!v.disabled;
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
              onClick: () => !b && j(v.id),
              disabled: b,
              className: X(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                p.hover,
                h && p.active,
                p.text,
                b && "opacity-50 cursor-not-allowed"
              ),
              children: [
                o === "left" && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: X(
                      "mr-3 transition-transform duration-200",
                      h && "rotate-180"
                    ),
                    children: /* @__PURE__ */ e.jsx(K, { icon: s, className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ e.jsx("div", { className: "flex-1", children: v.title }),
                o === "right" && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: X(
                      "ml-3 transition-transform duration-200",
                      h && "rotate-180"
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
                h ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              ),
              children: /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: X(
                    "p-4 border-t border-gray-200",
                    c
                  ),
                  children: v.content
                }
              ) })
            }
          )
        ]
      },
      v.id
    );
  }) });
}, Ss = ({
  src: t,
  alt: r = "avatar",
  size: a = "medium",
  shape: s = "circle",
  className: o = ""
}) => {
  const l = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  }, c = {
    circle: "rounded-full",
    square: "rounded-lg"
  }, i = He(
    "inline-flex items-center justify-center overflow-hidden bg-gray-200",
    l[a],
    c[s],
    o
  );
  return /* @__PURE__ */ e.jsx("div", { className: i, children: t ? /* @__PURE__ */ e.jsx("img", { src: t, alt: r, className: "w-full h-full object-cover" }) : /* @__PURE__ */ e.jsx(
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
}, Rs = ({
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
  }, d = He(
    "inline-flex items-center font-medium",
    l[r],
    c[a],
    i[s],
    o
  );
  return /* @__PURE__ */ e.jsx("span", { className: d, children: t });
}, ba = ye(
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
), ke = we(
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
    ...u
  }, f) => {
    const p = d || !!(c || i) && !g;
    return /* @__PURE__ */ e.jsxs(
      "button",
      {
        className: w(
          ba({
            variant: r,
            size: a,
            rounded: p ? "full" : s,
            fullWidth: o,
            isIconOnly: p,
            className: t
          })
        ),
        ref: f,
        disabled: u.disabled || l,
        ...u,
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
ke.displayName = "Button";
const ha = ye(
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
), xt = we(
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
      className: w(ha({ variant: r, padding: a, shadow: s, rounded: o, className: t })),
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
  }, u = {
    primary: "checked:bg-primary-600 checked:border-primary-600 hover:border-primary-600",
    secondary: "checked:bg-secondary-600 checked:border-secondary-600 hover:border-secondary-600",
    success: "checked:bg-success-600 checked:border-success-600 hover:border-success-600",
    warning: "checked:bg-warning-600 checked:border-warning-600 hover:border-warning-600",
    error: "checked:bg-danger-600 checked:border-danger-600 hover:border-danger-600"
  }, j = He(
    "border-2 transition-colors duration-200",
    "appearance-none cursor-pointer",
    "checked:bg-no-repeat checked:bg-center",
    l === "circle" ? 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]' : 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM0w0LjUgOC41TDIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=")]',
    {
      square: "rounded",
      circle: "rounded-full"
    }[l],
    g[o],
    u[c],
    a && "opacity-50 cursor-not-allowed",
    i
  ), p = He(
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
          className: j,
          disabled: a,
          ref: (v) => {
            v && (v.indeterminate = s);
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
    className: w(
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
  })(Vt, function() {
    return function(a, s) {
      s.prototype.isSameOrAfter = function(o, l) {
        return this.isSame(o, l) || this.isAfter(o, l);
      };
    };
  });
})(Jt);
var wa = Jt.exports;
const ka = /* @__PURE__ */ Bt(wa);
var Xt = { exports: {} };
(function(t, r) {
  (function(a, s) {
    t.exports = s();
  })(Vt, function() {
    return function(a, s) {
      s.prototype.isSameOrBefore = function(o, l) {
        return this.isSame(o, l) || this.isBefore(o, l);
      };
    };
  });
})(Xt);
var ja = Xt.exports;
const Na = /* @__PURE__ */ Bt(ja);
ne.extend(ka);
ne.extend(Na);
const Ea = ye(
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
), pt = we(
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
    helperText: u,
    label: f,
    required: j = !1,
    labelPlacement: p = "top",
    fullWidth: v = !1,
    className: h,
    placeholder: b = "Select date",
    leftIcon: x,
    rightIcon: y,
    monthsToShow: L = 1,
    valueFormatter: M,
    rangeStart: I,
    rangeEnd: W,
    closeOnSelect: F = !0,
    calendarFooter: E,
    ...A
  }, C) => {
    const [z, R] = J(!1), [T, P] = J(t), [$, m] = J(t || /* @__PURE__ */ new Date()), [k, N] = J(!1), D = fe(null), H = fe(null), O = fe(null);
    be(() => {
      P(t || void 0);
    }, [t]);
    const B = () => {
      if (!z || !H.current || !O.current) return;
      const { bottom: V, left: oe, width: q } = H.current.getBoundingClientRect(), ue = O.current, me = Ee();
      L === 2 ? Object.assign(ue.style, {
        position: "fixed",
        left: `${oe}px`,
        top: `${V + 4}px`,
        minWidth: "500px",
        width: "auto",
        maxHeight: `${me.innerHeight - V - 8}px`,
        transform: ""
      }) : Object.assign(ue.style, {
        position: "fixed",
        left: `${oe + q / 2}px`,
        top: `${V + 4}px`,
        width: "320px",
        maxWidth: "100vw",
        maxHeight: `${me.innerHeight - V - 8}px`,
        transform: "translateX(-50%)"
      });
    };
    be(() => {
      const V = Ee(), oe = xe(), q = () => {
        z && B();
      }, ue = () => {
        z && B();
      }, me = (Se) => {
        Se.key === "Escape" && z && (R(!1), N(!1));
      };
      return z && (B(), V.addEventListener("scroll", q, !0), V.addEventListener("resize", ue), oe.addEventListener("keydown", me)), () => {
        V.removeEventListener("scroll", q, !0), V.removeEventListener("resize", ue), oe.removeEventListener("keydown", me);
      };
    }, [z]);
    const de = (V) => {
      if (I !== void 0 && W !== void 0)
        if (I && W)
          P(V), r == null || r(V);
        else if (I) {
          const q = V;
          ne(q).isBefore(I), P(q), r == null || r(q), R(!1), N(!1);
        } else
          P(V), r == null || r(V);
      else
        P(V), r == null || r(V), R(!1), N(!1);
    }, ce = () => {
      m(ne($).subtract(1, "month").toDate());
    }, he = () => {
      m(ne($).add(1, "month").toDate());
    }, le = (V) => {
      const oe = ne(V).startOf("month"), q = ne(V).endOf("month"), ue = [];
      let me = oe;
      for (; me.isBefore(q) || me.isSame(q, "day"); )
        ue.push(me.toDate()), me = me.add(1, "day");
      return ue;
    }, Y = (V) => !!(a && ne(V).isBefore(a, "day") || s && ne(V).isAfter(s, "day")), te = () => T ? ne(T).format("DD MMM YYYY") : "", Te = (V) => {
      const oe = ne($).year(V).toDate();
      m(oe), N(!1);
    }, Ce = () => {
      if (!k) return null;
      const V = ne($).year(), oe = Array.from({ length: 50 }, (q, ue) => V - 25 + ue);
      return /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-5 gap-2 p-2 overflow-y-auto max-h-[300px]", children: oe.map((q) => /* @__PURE__ */ e.jsx(
        "div",
        {
          onClick: () => Te(q),
          className: w(
            q === V && "bg-primary-50 text-primary",
            "text-sm cursor-pointer p-2"
          ),
          children: q
        },
        q
      )) });
    }, _e = () => {
      if (!z) return null;
      const V = xe();
      if (!("body" in V)) return null;
      const oe = Array.from({ length: L }).map(
        (q, ue) => ne($).add(ue, "month").toDate()
      );
      return ze(
        /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "fixed inset-0 z-[9998]",
              onClick: () => {
                k || R(!1);
              }
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: O,
              className: "fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-lg",
              onClick: (q) => q.stopPropagation(),
              children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between p-2 border-b border-gray-200", children: [
                  /* @__PURE__ */ e.jsx(
                    ke,
                    {
                      onClick: ce,
                      variant: "ghost",
                      size: "sm",
                      leftIcon: "mdi:chevron-left"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-900", children: L === 1 ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e.jsx("span", { children: ne($).format("MMMM") }),
                    /* @__PURE__ */ e.jsxs(
                      "div",
                      {
                        className: "cursor-pointer flex items-center gap-1",
                        onClick: () => N(!k),
                        children: [
                          /* @__PURE__ */ e.jsx("span", { children: ne($).format("YYYY") }),
                          /* @__PURE__ */ e.jsx(ke, { variant: "ghost", size: "sm", leftIcon: k ? "mdi:chevron-up" : "mdi:chevron-down" })
                        ]
                      }
                    )
                  ] }) : `${ne($).format("MMMM YYYY")} - ${ne(
                    $
                  ).add(L - 1, "month").format("MMMM YYYY")}` }) }),
                  /* @__PURE__ */ e.jsx(
                    ke,
                    {
                      onClick: he,
                      variant: "ghost",
                      size: "sm",
                      rightIcon: "mdi:chevron-right"
                    }
                  )
                ] }),
                k ? Ce() : /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: w(
                      L === 2 ? "flex gap-5 p-2 mx-auto w-fit" : "justify-between p-2 mx-auto w-fit"
                    ),
                    children: oe.map((q, ue) => {
                      const me = le(q), Se = ne(q).startOf("month").day();
                      return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-7 gap-y-1 my-1", children: [
                          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                            (ve, Pe) => {
                              const Me = Pe === 0 || Pe === 6;
                              return /* @__PURE__ */ e.jsx(
                                "div",
                                {
                                  className: w(
                                    "text-center text-xs font-medium text-neutral",
                                    Me && "text-danger"
                                  ),
                                  children: ve
                                },
                                ve
                              );
                            }
                          ),
                          Array.from({ length: Se }).map(
                            (ve, Pe) => /* @__PURE__ */ e.jsx("div", {}, `empty-${Pe}`)
                          ),
                          me.map((ve) => {
                            const Pe = T && ne(ve).isSame(T, "day"), Me = Y(ve), tt = ne(ve).isSame(
                              q,
                              "month"
                            ), rt = I && W && ne(ve).isSameOrAfter(I, "day") && ne(ve).isSameOrBefore(W, "day"), Ye = I && ne(ve).isSame(I, "day"), Ue = W && ne(ve).isSame(W, "day"), Qe = ne(ve).day() === 0 || ne(ve).day() === 6, $e = I && W;
                            return /* @__PURE__ */ e.jsx("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ e.jsx(
                              "div",
                              {
                                className: w(
                                  rt && "rounded-none bg-primary-50",
                                  $e && Ye && "rounded-l-full",
                                  $e && Ue && "rounded-r-full"
                                ),
                                children: /* @__PURE__ */ e.jsx(
                                  "button",
                                  {
                                    onClick: () => !Me && de(ve),
                                    disabled: Me,
                                    className: w(
                                      "p-2 text-sm transition-colors duration-200 w-10 h-10 rounded-full",
                                      Qe && "!text-danger",
                                      Pe && "bg-primary !text-white hover:bg-primary-600 active:bg-primary-700",
                                      Pe && !$e && "rounded-full",
                                      !Pe && !Me && "hover:bg-primary-50 active:bg-primary-100",
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
                        E
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
        className: w("relative", !v && "inline-block"),
        ref: H,
        onClick: () => !i && R(!z),
        children: [
          x && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ e.jsx(K, { icon: x, className: "w-4 h-4" }) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: C,
              type: "text",
              value: M ? M() : te(),
              placeholder: b,
              readOnly: !0,
              className: w(
                Ea({ variant: d ? "error" : o, size: l, rounded: c, fullWidth: v }),
                x && "pl-10",
                y && "pr-10",
                h
              ),
              disabled: i,
              ...A
            }
          ),
          y && /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ e.jsx(K, { icon: y, className: "w-4 h-4" }) })
        ]
      }
    ), ae = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      g && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", children: g }),
      !g && u && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", children: u })
    ] });
    return p === "left" ? /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: w(v ? "w-full" : "inline-block", h),
        ref: D,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
            f && /* @__PURE__ */ e.jsxs("label", { className: "block text-sm text-neutral-900 pt-2", children: [
              f,
              j && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: w("flex-1", !v && "inline-block"), children: [
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
        className: w(v ? "w-full" : "inline-block", h),
        ref: D,
        children: [
          f && /* @__PURE__ */ e.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
            f,
            j && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
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
const Sa = ({
  mode: t = "single",
  value: r,
  onChange: a,
  monthsToShow: s = 1,
  calendarFooter: o,
  error: l = !1,
  errorText: c,
  ...i
}) => {
  const [d, g] = J([
    void 0,
    void 0
  ]);
  if (t === "single") {
    const u = Array.isArray(r) ? r[0] : r;
    return /* @__PURE__ */ e.jsx(
      pt,
      {
        value: u === null ? void 0 : u,
        onChange: (f) => a == null ? void 0 : a(f),
        monthsToShow: s,
        calendarFooter: o,
        error: l,
        errorText: c,
        ...i
      }
    );
  }
  if (t === "range") {
    let [u, f] = Array.isArray(r) ? r : d;
    const j = (v) => {
      !u || u && f ? (g([v, void 0]), a == null || a([v, void 0])) : u && !f && (v < u ? (g([v, u]), a == null || a([v, u])) : (g([u, v]), a == null || a([u, v])));
    }, p = () => {
      if (!u) return "";
      const v = (h) => h ? h.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }) : "";
      return u && f ? `${v(u)} - ${v(f)}` : v(u);
    };
    return /* @__PURE__ */ e.jsx(
      pt,
      {
        value: u,
        onChange: j,
        monthsToShow: s,
        placeholder: i.placeholder || "Select date range",
        valueFormatter: p,
        rangeStart: u,
        rangeEnd: f,
        closeOnSelect: !!f,
        calendarFooter: o,
        error: l,
        errorText: c,
        ...i
      }
    );
  }
  return null;
};
Sa.displayName = "DatePicker";
const Qt = we(
  ({ children: t, onClose: r, className: a, ...s }, o) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: o,
      className: w("mb-4 flex items-center justify-between", a),
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
), Ra = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-4xl",
  fullscreen: "w-full h-full max-w-none max-h-none rounded-none"
}, Ca = we(
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
    const [u, f] = J(!1), [j, p] = J(!1);
    if (be(() => {
      if (t) {
        f(!0), p(!0);
        const x = xe();
        "body" in x && (x.body.style.overflow = "hidden");
      } else {
        p(!1);
        const x = setTimeout(() => {
          f(!1);
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
    }, [t, r]), !u) return null;
    const v = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, h = () => {
      c && r();
    }, b = xe();
    return "body" in b ? ze(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: w(
            "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300",
            v[o],
            j ? "opacity-100" : "opacity-0",
            i === "fullscreen" && "items-start"
          ),
          onClick: h,
          children: /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: g,
              className: w(
                "relative transform rounded-lg bg-white p-6 shadow-xl transition-all duration-300",
                Ra[i],
                j ? "scale-100 opacity-100" : "scale-95 opacity-0",
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
      b.body
    ) : null;
  }
), Ta = we(
  ({ children: t, className: r, ...a }, s) => /* @__PURE__ */ e.jsx(
    "h2",
    {
      ref: s,
      className: w("text-xl font-semibold text-gray-900", r),
      ...a,
      children: t
    }
  )
), Aa = we(
  ({ children: t, className: r, ...a }, s) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: s,
      className: w("text-gray-600", r),
      ...a,
      children: t
    }
  )
), Pa = we(
  ({ children: t, className: r, ...a }, s) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: s,
      className: w("mt-6 flex justify-end gap-3", r),
      ...a,
      children: t
    }
  )
);
Ca.displayName = "Dialog";
Ta.displayName = "DialogTitle";
Aa.displayName = "DialogBody";
Pa.displayName = "DialogActions";
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
  }, g = He(
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
}, zt = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
}, As = ({
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
  rounded: u = "lg",
  children: f,
  showFileList: j = !0,
  showPlaceholder: p = !0,
  showMaxSize: v = !0,
  icon: h = "mdi:upload"
}) => {
  const [b, x] = J(!1), [y, L] = J(null), M = fe(null), I = De((T) => {
    T.preventDefault(), c || x(!0);
  }, [c]), W = De((T) => {
    T.preventDefault(), x(!1);
  }, []), F = De((T) => T.size > r ? `File size exceeds ${r / (1024 * 1024)}MB limit` : t[0] !== "*" && !t.some((P) => P.startsWith(".") ? T.name.toLowerCase().endsWith(P.toLowerCase()) : T.type.startsWith(P)) ? `File type not allowed. Allowed types: ${t.join(", ")}` : null, [t, r]), E = De((T) => {
    if (T.preventDefault(), x(!1), L(null), c) return;
    const P = Array.from(T.dataTransfer.files), $ = [], m = [];
    if (P.forEach((k) => {
      const N = F(k);
      N ? m.push(`${k.name}: ${N}`) : $.push(k);
    }), m.length > 0 && L(m.join(`
`)), $.length > 0) {
      const k = a ? [...s, ...$] : $;
      o == null || o(k);
    }
  }, [c, a, o, F, s]), A = De((T) => {
    if (L(null), c || !T.target.files) return;
    const P = Array.from(T.target.files), $ = [], m = [];
    if (P.forEach((k) => {
      const N = F(k);
      N ? m.push(`${k.name}: ${N}`) : $.push(k);
    }), m.length > 0 && L(m.join(`
`)), $.length > 0) {
      const k = a ? [...s, ...$] : $;
      o == null || o(k);
    }
    M.current && (M.current.value = "");
  }, [c, a, o, F, s]), C = De((T) => {
    const P = [...s];
    P.splice(T, 1), o == null || o(P);
  }, [o, s]), z = (T) => T.type.startsWith("image/") ? /* @__PURE__ */ e.jsx(K, { icon: "mdi:image", className: "w-5 h-5" }) : T.type.startsWith("text/") ? /* @__PURE__ */ e.jsx(K, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ e.jsx(K, { icon: "mdi:file", className: "w-5 h-5" }), R = _a[d];
  return /* @__PURE__ */ e.jsxs("div", { className: X("w-full", l), children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: X(
          "p-6 text-center transition-colors",
          !f && [
            "border-2 border-dashed",
            R.border,
            R.bg,
            b && R.active,
            !c && R.hover
          ],
          c && "opacity-50 cursor-not-allowed",
          Ia[g],
          zt[u],
          !f && "cursor-pointer"
        ),
        onDragOver: I,
        onDragLeave: W,
        onDrop: E,
        onClick: () => {
          var T;
          return !c && !f && ((T = M.current) == null ? void 0 : T.click());
        },
        children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: M,
              type: "file",
              accept: t.join(","),
              multiple: a,
              onChange: A,
              className: "hidden",
              disabled: c
            }
          ),
          f ? /* @__PURE__ */ e.jsx("div", { onClick: () => {
            var T;
            return !c && ((T = M.current) == null ? void 0 : T.click());
          }, children: f }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(K, { icon: h, className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
            p && /* @__PURE__ */ e.jsx("p", { className: X("text-neutral-600", R.text), children: i }),
            v && /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-neutral mt-2", children: [
              "Max file size: ",
              r / (1024 * 1024),
              "MB"
            ] })
          ] })
        ]
      }
    ),
    y && /* @__PURE__ */ e.jsx("p", { className: "mt-2 text-sm text-danger", children: y }),
    j && s.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "mt-4 space-y-2", children: s.map((T, P) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: X(
          "flex items-center justify-between p-2",
          zt[u],
          R.bg
        ),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
            z(T),
            /* @__PURE__ */ e.jsx("span", { className: X("text-sm", R.text), children: T.name }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-neutral", children: [
              "(",
              (T.size / 1024).toFixed(1),
              " KB)"
            ] })
          ] }),
          !c && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => C(P),
              className: "p-1 text-neutral hover:text-danger",
              children: /* @__PURE__ */ e.jsx(K, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${T.name}-${P}`
    )) })
  ] });
}, Da = ye(
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
), Ps = ({
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
  return /* @__PURE__ */ e.jsxs("div", { className: w(Da({ variant: s, rounded: o }), i), children: [
    a && /* @__PURE__ */ e.jsx(K, { icon: g(), className: w("h-5 w-5 flex-shrink-0", d()) }),
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
}, dt = "select-dropdown-opened", za = ye(
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
), er = we(
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
    value: u,
    onChange: f,
    disabled: j = !1,
    position: p = "bottom",
    fullWidth: v = !1,
    children: h,
    leftIcon: b,
    rightIcon: x,
    ...y
  }, L) => {
    const [M, I] = J(!1), W = fe(null), F = fe(null), A = `select-${Ne.useId().replace(/:/g, "")}`, C = () => {
      if (M && W.current && F.current) {
        const m = W.current.getBoundingClientRect(), k = F.current, N = Ee(), D = N.innerHeight - m.bottom, H = m.top, B = m.bottom + k.offsetHeight + 4 >= N.innerHeight, de = H > D, ce = B && de;
        p === "bottom" || p === "top" ? (k.style.position = "fixed", k.style.left = `${m.left}px`, k.style.width = `${m.width}px`, p === "bottom" && ce ? (k.style.bottom = `${N.innerHeight - m.top + 4}px`, k.style.top = "auto", k.style.maxHeight = `${H - 8}px`) : p === "bottom" ? (k.style.top = `${m.bottom + 4}px`, k.style.bottom = "auto", k.style.maxHeight = `${D - 8}px`) : p === "top" && !ce ? (k.style.top = `${m.bottom + 4}px`, k.style.bottom = "auto", k.style.maxHeight = `${D - 8}px`) : (k.style.bottom = `${N.innerHeight - m.top + 4}px`, k.style.top = "auto", k.style.maxHeight = `${H - 8}px`)) : p === "left" ? (k.style.position = "fixed", k.style.right = `${N.innerWidth - m.left + 4}px`, k.style.top = `${m.top}px`, k.style.maxHeight = `${N.innerHeight - m.top - 8}px`) : p === "right" && (k.style.position = "fixed", k.style.left = `${m.right + 4}px`, k.style.top = `${m.top}px`, k.style.maxHeight = `${N.innerHeight - m.top - 8}px`);
      }
    };
    be(() => {
      const m = Ee(), k = () => {
        M && C();
      }, N = () => {
        M && C();
      };
      return M && (C(), m.addEventListener("scroll", k, !0), m.addEventListener("resize", N)), () => {
        m.removeEventListener("scroll", k, !0), m.removeEventListener("resize", N);
      };
    }, [M, p]), be(() => {
      const m = xe(), k = (D) => {
        D.detail.id !== A && I(!1);
      }, N = (D) => {
        const H = D.target, O = W.current, B = F.current;
        O && B && !O.contains(H) && !B.contains(H) && I(!1);
      };
      return m.addEventListener(dt, k), m.addEventListener("click", N), () => {
        m.removeEventListener(dt, k), m.removeEventListener("click", N);
      };
    }, [A]);
    const z = () => {
      if (j) return;
      if (M) {
        I(!1);
        return;
      }
      xe().dispatchEvent(
        new CustomEvent(dt, {
          detail: { id: A }
        })
      ), I(!0);
    }, R = () => {
      if (o) {
        const m = o.find((k) => k.value === u);
        return m == null ? void 0 : m.label;
      }
      if (h) {
        const k = Ct.toArray(h).find(
          (N) => lt(N) && "value" in N.props && N.props.value === u
        );
        return lt(k) ? k.props.children : null;
      }
      return null;
    }, T = (m) => {
      j || (f == null || f(m), I(!1));
    }, P = () => o ? o.map((m) => /* @__PURE__ */ e.jsx(
      et,
      {
        value: m.value,
        disabled: m.disabled,
        selected: m.value === u,
        onClick: () => {
          m.onClick && m.onClick(m.value), T(m.value);
        },
        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          m.icon,
          m.label
        ] })
      },
      m.value
    )) : h ? Ct.map(h, (m) => lt(m) && "value" in m.props ? Nr(m, {
      selected: m.props.value === u,
      onClick: () => T(m.props.value)
    }) : null) : null, $ = () => {
      if (!M || j) return null;
      const m = /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: F,
          className: w(
            "fixed z-[9999] min-w-[8rem] border border-neutral-200 bg-white py-1 shadow-lg rounded-lg",
            p === "left" || p === "right" ? "w-max" : "w-full"
          ),
          onClick: (N) => N.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: P()
        }
      ), k = xe();
      return "body" in k ? ze(m, k.body) : null;
    };
    return /* @__PURE__ */ e.jsxs("div", { className: w(v ? "w-full" : "inline-block"), ref: L, ...y, children: [
      l && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: A,
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
          className: w("relative", !v && "inline-block"),
          onClick: z,
          children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                id: A,
                ref: W,
                type: "button",
                className: w(
                  za({ variant: c ? "error" : r, size: a, rounded: s, fullWidth: v }),
                  "flex items-center justify-between",
                  j && "cursor-not-allowed opacity-50",
                  b && "pl-10",
                  x && "pr-10",
                  t
                ),
                "aria-haspopup": "listbox",
                "aria-expanded": M,
                "aria-describedby": c ? `${A}-error` : i ? `${A}-helper` : void 0,
                disabled: j,
                children: [
                  b && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ e.jsx(K, { icon: b, className: "w-4 h-4" }) }),
                  /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center text-neutral gap-2 min-w-0 flex-1", children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: R() || g }) }),
                  x ? /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ e.jsx(K, { icon: x, className: "w-4 h-4" }) }) : /* @__PURE__ */ e.jsx(
                    K,
                    {
                      icon: "mdi:chevron-down",
                      className: w("transition-transform flex-shrink-0 ml-2 w-4 h-4", M && "rotate-180")
                    }
                  )
                ]
              }
            ),
            $()
          ]
        }
      ),
      c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: `${A}-error`, children: c }),
      !c && i && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: `${A}-helper`, children: i })
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
  const u = (p, v) => {
    const h = v - p + 1;
    return Array.from({ length: h }, (b, x) => x + p);
  }, j = (() => {
    const p = o * 2 + 3, v = p + 2;
    if (r > v) {
      const h = Math.max(2, t - o), b = Math.min(r - 1, t + o);
      let x = u(h, b);
      const y = h > 2, L = r - b > 1, M = p - (x.length + 1);
      if (y && !L)
        x = [...u(h - M, h - 1), ...x];
      else if (!y && L) {
        const I = u(b + 1, b + M);
        x = [...x, ...I];
      } else y && L && (x = [...x]);
      return [1, ...x, r];
    }
    return u(1, r);
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
            ke,
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
          j.map((p, v) => {
            const h = p === t, b = typeof p == "string" && p === "...";
            return /* @__PURE__ */ e.jsx(
              ke,
              {
                variant: "ghost",
                onClick: () => !b && s(p),
                className: X(
                  "px-3 py-1 rounded-md text-sm",
                  h ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  b && "cursor-default"
                ),
                children: p
              },
              v
            );
          }),
          /* @__PURE__ */ e.jsx(
            ke,
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
}, La = ye(
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
    className: w(La({ variant: a, rounded: s, fullWidth: o }), l),
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
  range: u = !1
}) => {
  const f = u, [j, p] = J(
    s !== void 0 ? s : o !== void 0 ? o : f ? [t, r] : t
  ), [v, h] = J(null), b = fe(null), x = s !== void 0 ? s : j, [y, L] = f ? Array.isArray(x) ? x : [t, r] : [typeof x == "number" ? x : t, r], M = (m) => Math.min(Math.max(m, t), r), I = (m) => {
    if (i) return;
    let k;
    f && Array.isArray(m) ? k = [M(m[0]), M(m[1])] : !f && typeof m == "number" ? k = M(m) : k = f ? [t, r] : t, s === void 0 && p(k), l == null || l(k);
  }, W = (m) => {
    if (!b.current) return t;
    const k = b.current.getBoundingClientRect(), D = (m - k.left) / k.width, H = t + (r - t) * D, O = Math.round(H / a) * a;
    return M(O);
  }, F = (m) => (k) => {
    i || (h(m), k.stopPropagation());
  }, E = (m) => {
    if (!i)
      if (!f)
        h(0), A(m, 0);
      else {
        const k = W(m.clientX), N = Math.abs(k - y), D = Math.abs(k - L), H = N < D ? 0 : 1;
        h(H), A(m, H);
      }
  }, A = Ne.useCallback((m, k) => {
    const N = W(m.clientX);
    if (!f)
      I(N);
    else {
      let D = [y, L];
      k === 0 ? D = [Math.min(N, L - a), L] : D = [y, Math.max(N, y + a)], D[0] > D[1] && (D = [D[1], D[0]]), I(D);
    }
  }, [f, y, L, a, I, W]), C = Ne.useRef(v);
  C.current = v;
  const z = Ne.useCallback(function(m) {
    C.current === null || i || A(m, C.current);
  }, [i, A]), R = Ne.useCallback(function() {
    h(null);
  }, []);
  be(() => {
    if (v !== null) {
      const m = Ee();
      return m.addEventListener("mousemove", z), m.addEventListener("mouseup", R), () => {
        m.removeEventListener("mousemove", z), m.removeEventListener("mouseup", R);
      };
    }
  }, [v, z, R]);
  const T = (m) => (m - t) / (r - t) * 100, P = T(y), $ = T(L);
  return /* @__PURE__ */ e.jsxs("div", { className: X("relative w-full", c), children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: b,
        className: X(
          "relative h-2 bg-gray-200 rounded-full cursor-pointer",
          i && "opacity-50 cursor-not-allowed"
        ),
        onMouseDown: E,
        children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute h-full bg-primary rounded-full",
              style: { left: `${f ? P : 0}%`, width: `${f ? $ - P : P}%` }
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
              style: { left: `${P}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: F(0)
            }
          ),
          f && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: X(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                i && "cursor-not-allowed"
              ),
              style: { left: `${$}%`, transform: "translate(-50%, -50%)" },
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
    d && /* @__PURE__ */ e.jsx("div", { className: "mt-2 text-sm text-gray-600", children: f ? `${y} - ${L}` : y })
  ] });
}, Fa = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}, Va = {
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
  const [i, d] = J(null), g = (p) => {
    o || d(p);
  }, u = () => {
    o || d(null);
  }, f = (p) => {
    !o && l && l(p);
  }, j = i !== null ? i : t;
  return /* @__PURE__ */ e.jsx("div", { className: w("flex items-center gap-1", c), children: [...Array(r)].map((p, v) => {
    const h = v + 1, b = h <= j, x = i !== null && h <= i;
    return /* @__PURE__ */ e.jsx(
      "button",
      {
        className: w(
          "transition-colors duration-200",
          Fa[a],
          b || x ? Va[s] : "text-default-200",
          !o && "cursor-pointer"
        ),
        onMouseEnter: () => g(h),
        onMouseLeave: u,
        onClick: () => f(h),
        disabled: o,
        "aria-label": `Rate ${h} out of ${r}`,
        children: /* @__PURE__ */ e.jsx(
          K,
          {
            icon: b || x ? "mdi:star" : "mdi:star-outline",
            className: "w-full h-full"
          }
        )
      },
      v
    );
  }) });
}, Ba = {
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
}, Ds = ({
  status: t,
  size: r = "md",
  withLabel: a = !1,
  className: s
}) => {
  const { bgColor: o, label: l } = Ba[t], c = Ga[r];
  return /* @__PURE__ */ e.jsxs("div", { className: w("flex items-center gap-2", s), children: [
    /* @__PURE__ */ e.jsx("div", { className: w("rounded-full animate-pulse", o, c) }),
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
}) => /* @__PURE__ */ e.jsx("div", { className: w("flex flex-row items-center w-full justify-between", a), children: t.map((o, l) => {
  const c = l < r ? "completed" : l === r ? "active" : "pending";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "flex items-center flex-1",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: w(
          "flex flex-col items-center z-10",
          s === "default" ? "gap-4" : "gap-2",
          s === "default" ? "px-5" : "px-3"
        ), children: [
          s === "default" && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: w(
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
                className: w(
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
            className: w(
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
}) => /* @__PURE__ */ e.jsx("div", { className: w("flex flex-col items-start gap-8", a), children: t.map((o, l) => {
  const c = l < r ? "completed" : l === r ? "active" : "pending";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "flex flex-row w-full items-center relative",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: w(
          "flex flex-row items-center z-10",
          s === "default" ? "gap-4" : "gap-2"
        ), children: [
          s === "default" && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: w(
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
                className: w(
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
            className: w(
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
}) }), zs = ({
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
  var v, h;
  const [g, u] = J(r || ((v = t[0]) == null ? void 0 : v.id) || ""), f = De((b) => {
    u(b), d == null || d(b);
  }, [d]), j = () => {
    switch (s) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  }, p = (b, x) => {
    const y = X(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      j(),
      x && "opacity-50 cursor-not-allowed",
      !x && "cursor-pointer"
    );
    switch (a) {
      case "pills":
        return X(
          y,
          "rounded-full",
          b ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return X(
          y,
          "border-b-2",
          b ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      default:
        return X(
          y,
          "border-b-2",
          b ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: X("w-full", o), children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: X(
          "flex space-x-1 border-b border-gray-200 dark:border-gray-700",
          a === "pills" && "space-x-2 border-b-0",
          l
        ),
        children: t.map((b) => {
          const x = b.id === g, y = !!b.disabled;
          return /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => !y && f(b.id),
              disabled: y,
              className: X(
                p(x, y),
                c
              ),
              children: [
                b.icon && /* @__PURE__ */ e.jsx(
                  K,
                  {
                    icon: b.icon,
                    className: "w-5 h-5 flex-shrink-0"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { children: b.label })
              ]
            },
            b.id
          );
        })
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: X("mt-4", i), children: (h = t.find((b) => b.id === g)) == null ? void 0 : h.content })
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
  return /* @__PURE__ */ e.jsx(c, { className: w("text-gray-900", o[t], a), children: r });
}, ut = "timepicker-dropdown-opened", Ya = ye(
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
), ar = we(
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
    required: u = !1,
    labelPlacement: f = "top",
    fullWidth: j = !1,
    className: p,
    placeholder: v = "Select time",
    leftIcon: h,
    rightIcon: b,
    valueFormatter: x,
    closeOnSelect: y = !0,
    ...L
  }, M) => {
    const [I, W] = J(!1), [F, E] = J(t || ""), [A, C] = J(0), [z, R] = J(0), [T, P] = J(!0), $ = fe(null), m = fe(null), k = fe(null), D = `timepicker-${Ne.useId().replace(/:/g, "")}`, H = () => {
      if (!I || !m.current || !k.current) return;
      const Y = m.current.getBoundingClientRect(), te = k.current, Ce = Ee().innerHeight - Y.bottom;
      te.style.top = `${Y.bottom + 4}px`, te.style.bottom = "auto", te.style.left = `${Y.left}px`, te.style.maxHeight = `${Ce - 8}px`, te.style.width = `${Y.width}px`;
    };
    be(() => {
      const Y = Ee(), te = xe(), Te = () => {
        I && H();
      }, Ce = () => {
        I && H();
      }, _e = (ae) => {
        ae.detail.id !== D && W(!1);
      }, Q = (ae) => {
        const V = ae.target;
        $.current && k.current && !$.current.contains(V) && !k.current.contains(V) && W(!1);
      };
      return I && (H(), Y.addEventListener("scroll", Te, !0), Y.addEventListener("resize", Ce)), te.addEventListener(ut, _e), te.addEventListener("mousedown", Q), () => {
        Y.removeEventListener("scroll", Te, !0), Y.removeEventListener("resize", Ce), te.removeEventListener(ut, _e), te.removeEventListener("mousedown", Q);
      };
    }, [I, D]);
    const O = () => {
      c || (I || xe().dispatchEvent(
        new CustomEvent(ut, {
          detail: { id: D }
        })
      ), W(!I));
    };
    be(() => {
      if (t) {
        E(t);
        const [Y, te] = t.split(":").map(Number);
        a ? C(Y) : (C(Y % 12 || 12), P(Y < 12)), R(te);
      }
    }, [t, a]);
    const B = () => {
      const te = `${(a || T ? A : A + 12).toString().padStart(2, "0")}:${z.toString().padStart(2, "0")}`;
      E(te), r == null || r(te), y && W(!1);
    }, de = () => a ? Array.from({ length: 24 }, (Y, te) => te) : Array.from({ length: 12 }, (Y, te) => te + 1), ce = () => Array.from({ length: 60 }, (Y, te) => te), he = x ? x(F) : F, le = xe();
    return "body" in le ? /* @__PURE__ */ e.jsxs("div", { ref: $, className: w("relative", j && "w-full", p), children: [
      g && /* @__PURE__ */ e.jsxs(
        "label",
        {
          className: w(
            "block text-sm font-medium text-gray-700 mb-1",
            f === "left" && "inline-block mr-2"
          ),
          children: [
            g,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-red ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: m,
          className: "relative",
          onClick: O,
          children: [
            h && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ e.jsx(K, { icon: h, size: 20 }) }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: M,
                type: "text",
                value: he,
                placeholder: v,
                readOnly: !0,
                className: w(
                  Ya({ variant: s, size: o, rounded: l, fullWidth: j }),
                  h && "pl-10",
                  b && "pr-10",
                  "text-left"
                ),
                disabled: c,
                ...L
              }
            ),
            b && /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ e.jsx(K, { icon: b, size: 20 }) })
          ]
        }
      ),
      I && ze(
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: k,
            className: "fixed z-[9999] w-fit rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (Y) => Y.stopPropagation(),
            children: /* @__PURE__ */ e.jsxs("div", { className: "p-0", children: [
              /* @__PURE__ */ e.jsxs(xt, { variant: "ghost", className: w(
                "flex mx-2 my-1 p-0",
                a ? "justify-start gap-8" : "justify-start gap-4"
              ), children: [
                /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2", children: de().map((Y) => /* @__PURE__ */ e.jsx(
                  ke,
                  {
                    variant: "ghost",
                    onClick: () => C(Y),
                    className: w(A === Y && "bg-primary text-white"),
                    children: Y.toString().padStart(2, "0")
                  },
                  Y
                )) }) }) }),
                /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2", children: ce().map((Y) => /* @__PURE__ */ e.jsx(
                  ke,
                  {
                    variant: "ghost",
                    onClick: () => R(Y),
                    className: w(z === Y && "bg-primary text-white"),
                    children: Y.toString().padStart(2, "0")
                  },
                  Y
                )) }) }) }),
                !a && /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ e.jsx(
                    ke,
                    {
                      variant: "ghost",
                      onClick: () => P(!0),
                      className: w(T && "bg-primary text-white"),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    ke,
                    {
                      variant: "ghost",
                      onClick: () => P(!1),
                      className: w(!T && "bg-primary text-white"),
                      children: "PM"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "mb-2 mx-2", children: /* @__PURE__ */ e.jsx(
                ke,
                {
                  variant: "primary",
                  onClick: B,
                  size: "sm",
                  fullWidth: !0,
                  children: "Select"
                }
              ) })
            ] })
          }
        ),
        le.body
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
const Ka = ye(
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
), qa = ye(
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
), Za = we(
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
    ...u
  }, f) => {
    const j = Ne.useId(), p = `${j}-helper`, v = `${j}-error`;
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
            ref: f,
            className: w(Ka({ variant: d ? "danger" : a, size: s }), g),
            "aria-describedby": d ? v : c ? p : void 0,
            "aria-invalid": d,
            "aria-required": l,
            ...u,
            children: /* @__PURE__ */ e.jsx(
              "span",
              {
                "data-state": t ? "checked" : "unchecked",
                className: w(
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
            htmlFor: j,
            className: "text-sm text-neutral-900",
            children: [
              o,
              l && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ]
          }
        )
      ] }),
      d && i && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-danger", id: v, children: i }),
      !d && c && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-neutral", id: p, children: c })
    ] });
  }
);
Za.displayName = "Toggle";
const Ja = ye(
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
), Xa = ye("absolute w-2 h-2 transform rotate-45", {
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
  const [u, f] = J(!1), [j, p] = J({ top: 0, left: 0 }), v = fe(null), h = fe(null), b = fe(), x = i !== void 0, y = x ? i : u, L = () => {
    if (!v.current || !h.current) return;
    const E = h.current.getBoundingClientRect(), A = v.current.getBoundingClientRect(), C = Ee(), z = C.scrollX || C.pageXOffset, R = C.scrollY || C.pageYOffset;
    let T = 0, P = 0;
    const $ = 8;
    switch (a) {
      case "top":
        T = E.top + R - A.height - $, P = E.left + z + (E.width - A.width) / 2;
        break;
      case "bottom":
        T = E.bottom + R + $, P = E.left + z + (E.width - A.width) / 2;
        break;
      case "left":
        T = E.top + R + (E.height - A.height) / 2, P = E.left + z - A.width - $;
        break;
      case "right":
        T = E.top + R + (E.height - A.height) / 2, P = E.right + z + $;
        break;
    }
    const m = C.innerWidth, k = C.innerHeight;
    P < 0 && (P = 0), P + A.width > m && (P = m - A.width), T < 0 && (T = 0), T + A.height > k && (T = k - A.height), p({ top: T, left: P });
  };
  be(() => {
    if (y) {
      L();
      const E = Ee();
      E.addEventListener("scroll", L, !0), E.addEventListener("resize", L);
    }
    return () => {
      const E = Ee();
      E.removeEventListener("scroll", L, !0), E.removeEventListener("resize", L);
    };
  }, [y, a]);
  const M = () => {
    x ? d == null || d(!0) : b.current = setTimeout(() => {
      f(!0);
    }, s);
  }, I = () => {
    b.current && clearTimeout(b.current), x ? d == null || d(!1) : f(!1);
  }, W = (E) => {
    E.stopPropagation(), g === "click" && (x ? d == null || d(!i) : f(!u));
  };
  be(() => {
    const E = (A) => {
      g === "click" && v.current && !v.current.contains(A.target) && h.current && !h.current.contains(A.target) && I();
    };
    return y && document.addEventListener("click", E), () => {
      document.removeEventListener("click", E);
    };
  }, [y, g]);
  const F = () => {
    if (!y) return null;
    const E = xe();
    return "body" in E ? ze(
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: v,
          className: w(Ja({ color: l, size: c }), o),
          style: {
            top: `${j.top}px`,
            left: `${j.left}px`
          },
          children: [
            t,
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: w(
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
      E.body
    ) : null;
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: h,
      className: "relative inline-block",
      onMouseEnter: g === "hover" ? M : void 0,
      onMouseLeave: g === "hover" ? I : void 0,
      onClick: W,
      children: [
        r,
        F()
      ]
    }
  ) });
}, Qa = ye(
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
}, as = Ne.forwardRef(
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
    ...u
  }, f) => {
    const j = Math.min(Math.max(o, 0), 100), p = es[s], v = s === "sm" ? 2 : s === "md" ? 3 : 4, h = (p - v) / 2, b = 2 * Math.PI * h, x = b - j / 100 * b;
    let y = "";
    return r === "loading" ? y = "rounded-full" : d ? y = d === "none" ? "" : `rounded-${d}` : y = "rounded-md", r === "circular" ? /* @__PURE__ */ e.jsxs("div", { className: "inline-flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative", style: { width: p, height: p }, children: [
        /* @__PURE__ */ e.jsxs(
          "svg",
          {
            className: w(
              "transform -rotate-90",
              l ? "animate-spin" : ""
            ),
            width: p,
            height: p,
            children: [
              /* @__PURE__ */ e.jsx(
                "circle",
                {
                  strokeWidth: v,
                  stroke: "#e5e7eb",
                  fill: "transparent",
                  r: h,
                  cx: p / 2,
                  cy: p / 2
                }
              ),
              /* @__PURE__ */ e.jsx(
                "circle",
                {
                  className: w(
                    "transition-all duration-300 ease-in-out",
                    l ? "animate-dash" : ""
                  ),
                  strokeWidth: v,
                  strokeDasharray: b,
                  strokeDashoffset: l ? 0 : x,
                  strokeLinecap: "round",
                  stroke: rs[a],
                  fill: "transparent",
                  r: h,
                  cx: p / 2,
                  cy: p / 2
                }
              )
            ]
          }
        ),
        g && /* @__PURE__ */ e.jsx("span", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ e.jsx(K, { icon: g, size: p * 0.5 }) }),
        c && !l && !g && /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 flex items-center justify-center text-xs font-medium", children: [
          Math.round(j),
          "%"
        ] })
      ] }),
      i && /* @__PURE__ */ e.jsx("span", { className: "text-sm text-neutral-600", children: i })
    ] }) : /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: f,
          className: w(Qa({ variant: r === "loading" ? "bar" : r, size: s }), y, t),
          role: "progressbar",
          "aria-valuenow": l ? void 0 : j,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...u,
          children: /* @__PURE__ */ e.jsx(
            "div",
            {
              className: w(
                "h-full transition-all duration-300 ease-in-out",
                l ? "animate-progress-indeterminate" : "",
                ts[a],
                y
              ),
              style: {
                width: l ? "100%" : `${j}%`
              }
            }
          )
        }
      ),
      (c || i) && /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between text-xs text-neutral-600", children: [
        i && /* @__PURE__ */ e.jsx("span", { children: i }),
        c && !l && /* @__PURE__ */ e.jsxs("span", { children: [
          Math.round(j),
          "%"
        ] })
      ] })
    ] });
  }
);
as.displayName = "Progress";
const mt = [
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
], ss = ye(
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
), ns = we(
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
    value: u = "",
    onChange: f,
    disabled: j = !1,
    defaultCountry: p = "id",
    ...v
  }) => {
    const [h, b] = J(!1), [x, y] = J(
      () => mt.find((N) => N.iso === p) || mt[0]
    ), [L, M] = J(""), [I, W] = J(() => {
      const N = x.code;
      return u.startsWith(N) ? u.slice(N.length) : u;
    }), F = fe(null), E = fe(null), A = Ne.useId(), C = `${A}-helper`, z = `${A}-error`, R = mt.filter(
      (N) => N.name.toLowerCase().includes(L.toLowerCase()) || N.code.includes(L)
    ), T = fe(null), P = () => {
      if (h && F.current && E.current) {
        const N = F.current.getBoundingClientRect(), D = E.current, H = typeof window < "u" ? window : { innerHeight: 0 }, O = H.innerHeight - N.bottom, B = N.top, ce = N.bottom + (D.offsetHeight || 0) + 4 >= H.innerHeight, he = B > O, le = ce && he;
        D.style.position = "fixed", D.style.left = `${N.left}px`, D.style.minWidth = `${N.width}px`, D.style.maxWidth = "340px", D.style.width = "auto", le ? (D.style.bottom = `${H.innerHeight - N.top + 4}px`, D.style.top = "auto", D.style.maxHeight = `${B - 8}px`) : (D.style.top = `${N.bottom + 4}px`, D.style.bottom = "auto", D.style.maxHeight = `${O - 8}px`);
      }
    };
    be(() => {
      const N = typeof window < "u" ? window : void 0, D = () => {
        h && P();
      }, H = () => {
        h && P();
      };
      return h && (P(), N == null || N.addEventListener("scroll", D, !0), N == null || N.addEventListener("resize", H)), () => {
        N == null || N.removeEventListener("scroll", D, !0), N == null || N.removeEventListener("resize", H);
      };
    }, [h]), be(() => {
      if (!h) return;
      const N = (D) => {
        const H = D.target;
        F.current && E.current && !F.current.contains(H) && !E.current.contains(H) && b(!1);
      };
      return document.addEventListener("click", N), () => document.removeEventListener("click", N);
    }, [h]);
    const $ = (N) => {
      y(N), b(!1), M("");
      const D = N.code + I;
      f == null || f(D);
    }, m = (N) => {
      const D = N.target.value.replace(/[^\d]/g, "");
      W(D);
      const H = x.code + D;
      f == null || f(H);
    }, k = w(
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
        ref: T,
        className: w(g ? "w-full" : "inline-block", t),
        ...v,
        children: [
          i && /* @__PURE__ */ e.jsxs("label", { htmlFor: A, className: "mb-1.5 block text-sm text-neutral-900", children: [
            i,
            d && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: w("relative", !g && "inline-block"), children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex", children: [
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  ref: F,
                  onClick: () => !j && b(!h),
                  className: w(
                    k,
                    "flex items-center gap-2 rounded-r-none justify-between max-w-[100px]",
                    j && "cursor-not-allowed opacity-50"
                  ),
                  children: [
                    /* @__PURE__ */ e.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ e.jsx(K, { icon: x.flag, className: "w-5 h-5" }),
                      /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: x.code })
                    ] }),
                    /* @__PURE__ */ e.jsx(
                      K,
                      {
                        icon: "mdi:chevron-down",
                        className: w("transition-transform", h && "rotate-180")
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "tel",
                  id: A,
                  value: I,
                  onChange: m,
                  disabled: j,
                  className: w(
                    k,
                    "rounded-l-none flex-1 min-w-0 w-full"
                  ),
                  placeholder: "Enter phone number"
                }
              )
            ] }),
            h && ze(
              /* @__PURE__ */ e.jsxs(
                "div",
                {
                  ref: E,
                  className: w(
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
                        value: L,
                        onChange: (N) => M(N.target.value),
                        placeholder: "Search countries...",
                        className: "w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:border-primary-300"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "max-h-[300px] overflow-y-auto", children: R.map((N) => /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => $(N),
                        className: w(
                          "w-full px-3 py-2 text-sm text-left hover:bg-primary-50 cursor-pointer",
                          x.iso === N.iso && "bg-primary-50"
                        ),
                        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ e.jsx(K, { icon: N.flag, className: "w-5 h-5" }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-sm font-medium", children: N.code }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-sm text-neutral-600", children: N.name })
                        ] })
                      },
                      N.iso + N.code
                    )) })
                  ]
                }
              ),
              typeof document < "u" ? document.body : document
            )
          ] }),
          o && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: z, children: l }),
          !o && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: C, children: c })
        ]
      }
    );
  }
);
ns.displayName = "PhoneInput";
const os = ye(
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
), Fs = ({
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
  isOpen: u,
  onOpenChange: f,
  closeOnClickOutside: j = !0
}) => {
  const [p, v] = J(!1), [h, b] = J({ top: 0, left: 0 }), x = fe(null), y = fe(null), L = u !== void 0, M = L ? u : p, I = () => {
    if (!x.current || !y.current) return;
    const C = y.current.getBoundingClientRect(), z = x.current.getBoundingClientRect(), R = Ee(), T = R.scrollX || R.pageXOffset, P = R.scrollY || R.pageYOffset;
    let $ = 0, m = 0;
    const k = 8;
    switch (a) {
      case "top":
        $ = C.top + P - z.height - k, m = C.left + T + (C.width - z.width) / 2;
        break;
      case "bottom":
        $ = C.bottom + P + k, m = C.left + T + (C.width - z.width) / 2;
        break;
      case "left":
        $ = C.top + P + (C.height - z.height) / 2, m = C.left + T - z.width - k;
        break;
      case "right":
        $ = C.top + P + (C.height - z.height) / 2, m = C.right + T + k;
        break;
    }
    const N = R.innerWidth, D = R.innerHeight;
    m < 0 && (m = 0), m + z.width > N && (m = N - z.width), $ < 0 && ($ = 0), $ + z.height > D && ($ = D - z.height), b({ top: $, left: m });
  };
  be(() => {
    if (M) {
      I();
      const C = Ee();
      C.addEventListener("scroll", I, !0), C.addEventListener("resize", I);
    }
    return () => {
      const C = Ee();
      C.removeEventListener("scroll", I, !0), C.removeEventListener("resize", I);
    };
  }, [M, a]), be(() => {
    if (M && g && x.current) {
      const C = x.current.querySelector(
        "input, select, textarea, button, [tabindex]:not([tabindex='-1'])"
      );
      C && C.focus();
    }
  }, [M, g]);
  const W = () => {
    L ? f == null || f(!0) : v(!0);
  }, F = () => {
    L ? f == null || f(!1) : v(!1);
  }, E = (C) => {
    C.stopPropagation(), d === "click" && (L ? f == null || f(!u) : v(!p));
  };
  be(() => {
    if (!j) return;
    const C = (z) => {
      d === "click" && x.current && !x.current.contains(z.target) && y.current && !y.current.contains(z.target) && F();
    };
    return M && document.addEventListener("pointerdown", C, !0), () => {
      document.removeEventListener("pointerdown", C, !0);
    };
  }, [M, d, j]);
  const A = () => {
    if (!M) return null;
    const C = xe();
    return "body" in C ? ze(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: x,
          className: w(
            os({ color: s, rounded: l, shadow: c }),
            s === "custom" && o ? o : "",
            i
          ),
          style: {
            top: `${h.top}px`,
            left: `${h.left}px`,
            background: s === "custom" && o ? o : void 0
          },
          tabIndex: -1,
          children: t
        }
      ),
      C.body
    ) : null;
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: y,
      className: "relative inline-block",
      onMouseEnter: d === "hover" ? W : void 0,
      onMouseLeave: d === "hover" ? F : void 0,
      onClick: E,
      tabIndex: 0,
      children: [
        r,
        A()
      ]
    }
  ) });
}, ls = ye("flex items-center text-sm", {
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
}), is = we(
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
      className: w(ls({ variant: r, size: a }), t),
      "aria-label": "Breadcrumb",
      ...c,
      children: /* @__PURE__ */ e.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: s.map((d, g) => {
        const u = g === s.length - 1, f = u && l;
        return /* @__PURE__ */ e.jsxs(
          "li",
          {
            className: w(
              "flex items-center gap-1.5",
              f && "text-primary font-medium"
            ),
            children: [
              d.icon && /* @__PURE__ */ e.jsx(
                K,
                {
                  icon: d.icon,
                  className: w(
                    "flex-shrink-0",
                    a === "sm" && "h-3.5 w-3.5",
                    a === "md" && "h-4 w-4",
                    a === "lg" && "h-5 w-5"
                  )
                }
              ),
              d.href && !f ? /* @__PURE__ */ e.jsx(
                "a",
                {
                  href: d.href,
                  className: w(
                    "transition-colors duration-200",
                    "hover:text-primary hover:underline focus:outline-none",
                    "focus-visible:text-primary focus-visible:underline",
                    "active:text-primary-600"
                  ),
                  children: /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[200px] inline-block align-bottom", children: d.label })
                }
              ) : /* @__PURE__ */ e.jsx("span", { className: w(
                "truncate max-w-[200px] inline-block",
                f && "text-primary"
              ), children: d.label }),
              !u && /* @__PURE__ */ e.jsx("span", { className: w(
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
    /* @__PURE__ */ e.jsx("thead", { className: w("border-2 sticky top-0 z-10 rounded-t-md", s.border), children: /* @__PURE__ */ e.jsx("tr", { children: a.map((o, l) => /* @__PURE__ */ e.jsx(
      "th",
      {
        className: w(
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
        className: w("p-3", {
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
}, Vs = ({
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
  onPageChange: u,
  onPageSizeChange: f,
  onSortChange: j,
  onRowClick: p,
  showPagination: v = !1,
  variant: h = "primary",
  meta: b = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [x, y] = J(() => {
    const F = t.find((E) => E.sortable && E.sort);
    return F ? [{
      id: F.accessorKey.toString(),
      desc: F.sort === "desc"
    }] : [];
  }), L = Ne.useMemo(() => {
    const F = t.map((E) => ({
      accessorKey: E.accessorKey,
      header: E.label,
      enableSorting: !!E.sortable,
      cell: E.render ? ({ row: A }) => {
        var C;
        return (C = E.render) == null ? void 0 : C.call(E, A.original[E.accessorKey], A.original, A.index);
      } : ({ row: A }) => A.original[E.accessorKey] || "-",
      meta: {
        align: E.align || "left"
      }
    }));
    return g ? [{
      accessorKey: "no",
      header: "No.",
      enableSorting: !1,
      cell: ({ row: E }) => (b.current_page - 1) * b.limit_number + E.index + 1,
      meta: {
        align: "left"
      }
    }, ...F] : F;
  }, [t, g, b]), M = Rr({
    data: r,
    columns: L,
    state: {
      sorting: x
    },
    onSortingChange: (F) => {
      const E = typeof F == "function" ? F(x) : F;
      y(E), E.length > 0 ? j == null || j(E[0].desc ? "desc" : "asc", E[0].id) : j == null || j("", "");
    },
    getCoreRowModel: Ar(),
    getSortedRowModel: Tr(),
    getPaginationRowModel: Cr(),
    manualPagination: !0,
    pageCount: b.total_page
  }), I = sr(h);
  if (i)
    return d || /* @__PURE__ */ e.jsx(cs, { schema: t, variant: h });
  const W = (F, E, A) => {
    const C = F.target;
    C.tagName === "BUTTON" || C.tagName === "A" || C.tagName === "INPUT" || C.tagName === "SELECT" || C.closest("button") !== null || C.closest("a") !== null || C.closest("input") !== null || C.closest("select") !== null || p == null || p(E, A);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-md", children: [
    /* @__PURE__ */ e.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ e.jsxs("table", { className: w("w-full border-spacing-0 border-separate", a), children: [
      /* @__PURE__ */ e.jsx("thead", { className: w("border-2 sticky top-0 z-10 rounded-t-md", I.border), children: M.getHeaderGroups().map((F) => /* @__PURE__ */ e.jsx("tr", { children: F.headers.map((E, A) => {
        var C, z, R;
        return /* @__PURE__ */ e.jsx(
          "th",
          {
            className: w(
              "text-sm text-wrap border-y p-4",
              I.header,
              {
                "cursor-pointer": E.column.getCanSort(),
                "rounded-tl-md": A === 0,
                "rounded-tr-md": A === F.headers.length - 1,
                "text-left": ((C = E.column.columnDef.meta) == null ? void 0 : C.align) === "left",
                "text-center": ((z = E.column.columnDef.meta) == null ? void 0 : z.align) === "center",
                "text-right": ((R = E.column.columnDef.meta) == null ? void 0 : R.align) === "right"
              },
              s
            ),
            onClick: E.column.getCanSort() ? E.column.getToggleSortingHandler() : void 0,
            children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsx("span", { className: w({
                "font-semibold": A === 0
              }), children: Tt(E.column.columnDef.header, E.getContext()) }),
              E.column.getCanSort() && /* @__PURE__ */ e.jsx(
                K,
                {
                  icon: E.column.getIsSorted() ? E.column.getIsSorted() === "desc" ? "mdi:keyboard-arrow-up" : "mdi:keyboard-arrow-down" : "mdi:unfold-more-horizontal",
                  className: w("h-4 w-4", {
                    "text-white": h !== "ghost",
                    "text-gray-700": h === "ghost"
                  })
                }
              )
            ] })
          },
          E.id
        );
      }) }, F.id)) }),
      /* @__PURE__ */ e.jsx("tbody", { className: "max-h-[50vh]", children: M.getRowModel().rows.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx(
        "td",
        {
          colSpan: M.getAllColumns().length,
          className: w(
            "text-center border h-full w-full rounded-b-md"
          ),
          children: c || /* @__PURE__ */ e.jsxs("div", { className: "flex mx-auto w-full text-center justify-center gap-3 items-center", children: [
            /* @__PURE__ */ e.jsx("p", { children: "Data Not Found" }),
            /* @__PURE__ */ e.jsx(K, { icon: "mdi:face-frown-open", size: 34 })
          ] })
        }
      ) }) : M.getRowModel().rows.map((F, E) => /* @__PURE__ */ e.jsx(
        "tr",
        {
          className: w(
            "p-3",
            I.row,
            {
              [I.stripe]: E % 2 !== 0,
              "bg-white": E % 2 === 0,
              "cursor-pointer": p
            },
            o
          ),
          onClick: (A) => W(A, F.original, E),
          children: F.getVisibleCells().map((A) => {
            var C, z, R;
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: w(
                  "px-4 py-3 text-sm text-gray-900",
                  {
                    "text-left": ((C = A.column.columnDef.meta) == null ? void 0 : C.align) === "left",
                    "text-center": ((z = A.column.columnDef.meta) == null ? void 0 : z.align) === "center",
                    "text-right": ((R = A.column.columnDef.meta) == null ? void 0 : R.align) === "right"
                  },
                  l
                ),
                children: Tt(A.column.columnDef.cell, A.getContext())
              },
              A.id
            );
          })
        },
        F.id
      )) })
    ] }) }),
    !!r.length && v && /* @__PURE__ */ e.jsx("div", { className: "p-4 bg-white rounded-b-md", children: /* @__PURE__ */ e.jsx(
      Oa,
      {
        currentPage: b.current_page,
        totalPages: b.total_page,
        totalData: b.total_data,
        onPageChange: u || (() => {
        }),
        perPage: b.limit_number,
        onPerPageChange: f || (() => {
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
}, nr = we(
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
  }, u) => {
    const j = c || (i ? {
      default: "mdi:information",
      success: "mdi:check-circle",
      error: "mdi:alert-circle",
      warning: "mdi:alert",
      info: "mdi:information"
    }[r] : void 0), p = s || o;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: u,
        className: w(
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
          j && /* @__PURE__ */ e.jsx(
            K,
            {
              icon: j,
              className: w(
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
                className: w("text-sm font-medium leading-5", {
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
                className: w(s ? "mt-1" : "", "text-sm leading-5", {
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
            ke,
            {
              variant: "ghost",
              size: "sm",
              onClick: l,
              className: w(
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
              children: /* @__PURE__ */ e.jsx(K, { icon: "mdi:close", className: w(o ? "h-5 w-5" : "h-4 w-4") })
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
}, Bs = ({ children: t }) => {
  const [r, a] = J([]), s = De((i) => {
    a((d) => d.filter((g) => g.id !== i));
  }, []), o = De((i) => {
    const d = Math.random().toString(36).substr(2, 9), g = i.position || "top-right", u = i.duration || 5e3, f = {
      ...i,
      id: d,
      position: g
    };
    return a((j) => [...j, f]), u > 0 && setTimeout(() => {
      s(d);
    }, u), d;
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
    ze(
      /* @__PURE__ */ e.jsx(e.Fragment, { children: Object.entries(l).map(([i, d]) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: w(
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
  const t = Sr(bt);
  if (!t)
    throw new Error("useToast must be used within a ToastProvider");
  return t;
}, ms = ({
  label: t,
  value: r,
  icon: a,
  className: s
}) => /* @__PURE__ */ e.jsxs(xt, { className: w(
  "flex items-center gap-4 rounded-lg w-full bg-white p-4 shadow-sm hover:bg-neutral-50 transition-shadow duration-200 justify-between",
  s
), children: [
  /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-gray", children: t }),
    /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-2xl font-semibold text-gray-900", children: r })
  ] }),
  a && /* @__PURE__ */ e.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50", children: /* @__PURE__ */ e.jsx(K, { icon: a, className: "h-6 w-6 text-primary-600" }) })
] }), fs = {
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
  ...fs,
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
      const f = gs[o];
      return or[f];
    }
    return $t(t) && t.code && Ot[t.code] ? Ot[t.code] : Lt;
  })(), g = l || d.image, u = c || ($t(t) ? t.message : null) || d.message;
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${s}`, children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: g,
        alt: "Error illustration",
        className: "max-w-[300px] h-auto"
      }
    ),
    typeof u == "string" ? /* @__PURE__ */ e.jsx(Xe, { variant: "body1", className: "m-0", children: u }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: u }),
    r && /* @__PURE__ */ e.jsx(
      ke,
      {
        onClick: r,
        rounded: "full",
        variant: "primary",
        size: "md",
        children: "Try Again"
      }
    )
  ] });
}, ps = ye(
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
), bs = we(
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
    showSubmitButton: u = !1,
    submitButtonLabel: f = "Submit",
    submitButtonVariant: j = "primary",
    length: p = 6,
    numericOnly: v = !0,
    onComplete: h,
    onChange: b,
    onSubmit: x,
    value: y,
    defaultValue: L = "",
    disabled: M = !1,
    autoFocus: I = !1,
    ...W
  }, F) => {
    const [E, A] = J(L || ""), C = fe([]);
    be(() => {
      y !== void 0 && A(y);
    }, [y]);
    const z = y !== void 0, R = z ? y : E, T = (O) => {
      z || A(O), b == null || b(O), O.length === p && (h == null || h(O), u || x == null || x(O));
    }, P = (O) => (B) => {
      C.current[O] = B;
    }, $ = (O) => {
      O.target.select();
    }, m = (O, B) => {
      var Y;
      const de = O.target.value;
      let ce = "";
      if (de.length >= 1)
        ce = de.slice(-1);
      else if (de.length === 0) {
        const te = R.split("");
        te[B] = "", T(te.join(""));
        return;
      }
      if (v && !/^\d$/.test(ce))
        return;
      const he = R.split("");
      for (; he.length <= B; )
        he.push("");
      he[B] = ce;
      const le = he.join("");
      T(le), B < p - 1 && ce && ((Y = C.current[B + 1]) == null || Y.focus());
    }, k = (O, B) => {
      var de, ce, he;
      if (O.key === "Backspace") {
        const le = R.split("");
        R[B] ? (O.preventDefault(), le[B] = "", T(le.join(""))) : B > 0 && (O.preventDefault(), le[B - 1] = "", T(le.join("")), (de = C.current[B - 1]) == null || de.focus());
      } else if (O.key === "Delete") {
        if (R[B]) {
          O.preventDefault();
          const le = R.split("");
          le[B] = "", T(le.join(""));
        }
      } else if (O.key === "ArrowLeft" && B > 0)
        O.preventDefault(), (ce = C.current[B - 1]) == null || ce.focus();
      else if (O.key === "ArrowRight" && B < p - 1)
        O.preventDefault(), (he = C.current[B + 1]) == null || he.focus();
      else if (!O.ctrlKey && !O.altKey && !O.metaKey && O.key.length === 1 && v && !/^\d$/.test(O.key)) {
        O.preventDefault();
        return;
      }
    }, N = (O) => {
      var le;
      O.preventDefault();
      const B = O.clipboardData.getData("text/plain").trim();
      if (v && !/^\d+$/.test(B))
        return;
      const ce = B.slice(0, p).padEnd(R.length, "").slice(0, p);
      T(ce);
      const he = ce.length < p ? ce.length : p - 1;
      (le = C.current[he]) == null || le.focus();
    }, D = () => {
      R.length === p && (x == null || x(R));
    }, H = R.split("").concat(Array(p - R.length).fill(""));
    return /* @__PURE__ */ e.jsxs("div", { ref: F, className: w("w-full", t), ...W, children: [
      i && /* @__PURE__ */ e.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        i,
        g && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: p }).map((O, B) => /* @__PURE__ */ e.jsx(
          "input",
          {
            ref: P(B),
            type: v ? "tel" : "text",
            inputMode: v ? "numeric" : "text",
            maxLength: 1,
            value: H[B] || "",
            onChange: (de) => m(de, B),
            onKeyDown: (de) => k(de, B),
            onPaste: B === 0 ? N : void 0,
            onFocus: $,
            disabled: M,
            autoFocus: I && B === 0,
            className: w(
              ps({
                variant: o ? "error" : r,
                size: a,
                rounded: s
              })
            ),
            "aria-invalid": o
          },
          B
        )) }),
        o && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger self-start", children: l }),
        !o && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral self-start", children: c }),
        d && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-neutral-600", children: d }),
        u && /* @__PURE__ */ e.jsx(
          ke,
          {
            variant: j,
            disabled: R.length !== p || M,
            onClick: D,
            className: "mt-4",
            children: f
          }
        )
      ] })
    ] });
  }
);
bs.displayName = "InputOTP";
const Ft = {
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
  const u = d ? "px-2" : "", f = d ? "min-w-[20px]" : "w-2.5 h-2.5", j = d ? "h-5" : "h-2.5", p = typeof a == "string" && a in Ft ? Ft[a] : a;
  return /* @__PURE__ */ e.jsxs("div", { className: w("relative inline-block", r), children: [
    l || (t ? /* @__PURE__ */ e.jsx(K, { icon: t, color: p, size: 32, ...c }) : null),
    /* @__PURE__ */ e.jsx(
      "span",
      {
        className: w(
          "absolute flex items-center justify-center rounded-xl bg-[#FF4C4C] text-white text-[10px] font-semibold",
          i,
          u,
          f,
          j,
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
      ke,
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
}) => /* @__PURE__ */ e.jsx("div", { className: w("w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", r), children: t.map((a, s) => /* @__PURE__ */ e.jsx(ms, { ...a }, s)) });
export {
  Es as Accordion,
  ma as AutoComplete,
  Ss as Avatar,
  Rs as Badge,
  Ws as BadgeNotif,
  is as Breadcrumbs,
  ke as Button,
  xt as Card,
  Cs as Checkbox,
  Ts as Chip,
  Sa as DatePicker,
  Ca as Dialog,
  Pa as DialogActions,
  Aa as DialogBody,
  Qt as DialogHeader,
  Ta as DialogTitle,
  Ma as Divider,
  Hs as ErrorWrapper,
  As as FileUpload,
  K as Icon,
  qt as Input,
  bs as InputOTP,
  Ys as Loader,
  Us as NegativeCase,
  Ps as Notification,
  Oa as Pagination,
  ns as PhoneInput,
  Fs as Popover,
  pt as PrimitiveDatePicker,
  as as Progress,
  Ms as Radio,
  er as Select,
  et as SelectItem,
  $a as Skeleton,
  _s as Slider,
  Is as StarRating,
  Ds as StatusIndicator,
  zs as Stepper,
  Os as Switch,
  Vs as Table,
  Ls as Tabs,
  Xe as Text,
  Ua as TimePicker,
  nr as Toast,
  Bs as ToastProvider,
  Za as Toggle,
  $s as Tooltip,
  ms as WidgetCard,
  Ks as WidgetCardGroup,
  ba as buttonVariants,
  ha as cardVariants,
  w as cn,
  ps as inputOTPVariants,
  Ka as toggleVariants,
  Gs as useToast
};
