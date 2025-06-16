import Me, { useState as re, useEffect as xe, forwardRef as ve, useRef as pe, useCallback as Ie, Children as Sr, isValidElement as nr, cloneElement as jt, createContext as Nt, useContext as Et } from "react";
import { createPortal as Le } from "react-dom";
import le from "dayjs";
import { useReactTable as St, getPaginationRowModel as Ct, getSortedRowModel as Rt, getCoreRowModel as Mt, flexRender as Cr } from "@tanstack/react-table";
var $r = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vr(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ur = { exports: {} }, Ue = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rr;
function zt() {
  if (Rr) return Ue;
  Rr = 1;
  var r = Me, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(i, c, f) {
    var g, v = {}, p = null, u = null;
    f !== void 0 && (p = "" + f), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (u = c.ref);
    for (g in c) s.call(c, g) && !l.hasOwnProperty(g) && (v[g] = c[g]);
    if (i && i.defaultProps) for (g in c = i.defaultProps, c) v[g] === void 0 && (v[g] = c[g]);
    return { $$typeof: t, type: i, key: p, ref: u, props: v, _owner: o.current };
  }
  return Ue.Fragment = a, Ue.jsx = d, Ue.jsxs = d, Ue;
}
var Ke = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mr;
function At() {
  return Mr || (Mr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Me, t = Symbol.for("react.element"), a = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), u = Symbol.for("react.offscreen"), j = Symbol.iterator, h = "@@iterator";
    function m(n) {
      if (n === null || typeof n != "object")
        return null;
      var w = j && n[j] || n[h];
      return typeof w == "function" ? w : null;
    }
    var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(n) {
      {
        for (var w = arguments.length, z = new Array(w > 1 ? w - 1 : 0), F = 1; F < w; F++)
          z[F - 1] = arguments[F];
        $("error", n, z);
      }
    }
    function $(n, w, z) {
      {
        var F = x.ReactDebugCurrentFrame, ae = F.getStackAddendum();
        ae !== "" && (w += "%s", z = z.concat([ae]));
        var oe = z.map(function(Q) {
          return String(Q);
        });
        oe.unshift("Warning: " + w), Function.prototype.apply.call(console[n], console, oe);
      }
    }
    var A = !1, D = !1, V = !1, _ = !1, k = !1, M;
    M = Symbol.for("react.module.reference");
    function I(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === s || n === l || k || n === o || n === f || n === g || _ || n === u || A || D || V || typeof n == "object" && n !== null && (n.$$typeof === p || n.$$typeof === v || n.$$typeof === d || n.$$typeof === i || n.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === M || n.getModuleId !== void 0));
    }
    function W(n, w, z) {
      var F = n.displayName;
      if (F)
        return F;
      var ae = w.displayName || w.name || "";
      return ae !== "" ? z + "(" + ae + ")" : z;
    }
    function R(n) {
      return n.displayName || "Context";
    }
    function C(n) {
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
        case f:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case i:
            var w = n;
            return R(w) + ".Consumer";
          case d:
            var z = n;
            return R(z._context) + ".Provider";
          case c:
            return W(n, n.render, "ForwardRef");
          case v:
            var F = n.displayName || null;
            return F !== null ? F : C(n.type) || "Memo";
          case p: {
            var ae = n, oe = ae._payload, Q = ae._init;
            try {
              return C(Q(oe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, G = 0, E, S, N, L, K, P, B;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function de() {
      {
        if (G === 0) {
          E = console.log, S = console.info, N = console.warn, L = console.error, K = console.group, P = console.groupCollapsed, B = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: ue,
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
        G++;
      }
    }
    function be() {
      {
        if (G--, G === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, n, {
              value: E
            }),
            info: T({}, n, {
              value: S
            }),
            warn: T({}, n, {
              value: N
            }),
            error: T({}, n, {
              value: L
            }),
            group: T({}, n, {
              value: K
            }),
            groupCollapsed: T({}, n, {
              value: P
            }),
            groupEnd: T({}, n, {
              value: B
            })
          });
        }
        G < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = x.ReactCurrentDispatcher, H;
    function te(n, w, z) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (ae) {
            var F = ae.stack.trim().match(/\n( *(at )?)/);
            H = F && F[1] || "";
          }
        return `
` + H + n;
      }
    }
    var Ce = !1, je;
    {
      var Ae = typeof WeakMap == "function" ? WeakMap : Map;
      je = new Ae();
    }
    function X(n, w) {
      if (!n || Ce)
        return "";
      {
        var z = je.get(n);
        if (z !== void 0)
          return z;
      }
      var F;
      Ce = !0;
      var ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var oe;
      oe = ie.current, ie.current = null, de();
      try {
        if (w) {
          var Q = function() {
            throw Error();
          };
          if (Object.defineProperty(Q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Q, []);
            } catch (Ne) {
              F = Ne;
            }
            Reflect.construct(n, [], Q);
          } else {
            try {
              Q.call();
            } catch (Ne) {
              F = Ne;
            }
            n.call(Q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ne) {
            F = Ne;
          }
          n();
        }
      } catch (Ne) {
        if (Ne && F && typeof Ne.stack == "string") {
          for (var J = Ne.stack.split(`
`), we = F.stack.split(`
`), me = J.length - 1, ge = we.length - 1; me >= 1 && ge >= 0 && J[me] !== we[ge]; )
            ge--;
          for (; me >= 1 && ge >= 0; me--, ge--)
            if (J[me] !== we[ge]) {
              if (me !== 1 || ge !== 1)
                do
                  if (me--, ge--, ge < 0 || J[me] !== we[ge]) {
                    var Re = `
` + J[me].replace(" at new ", " at ");
                    return n.displayName && Re.includes("<anonymous>") && (Re = Re.replace("<anonymous>", n.displayName)), typeof n == "function" && je.set(n, Re), Re;
                  }
                while (me >= 1 && ge >= 0);
              break;
            }
        }
      } finally {
        Ce = !1, ie.current = oe, be(), Error.prepareStackTrace = ae;
      }
      var Be = n ? n.displayName || n.name : "", $e = Be ? te(Be) : "";
      return typeof n == "function" && je.set(n, $e), $e;
    }
    function O(n, w, z) {
      return X(n, !1);
    }
    function Z(n) {
      var w = n.prototype;
      return !!(w && w.isReactComponent);
    }
    function q(n, w, z) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return X(n, Z(n));
      if (typeof n == "string")
        return te(n);
      switch (n) {
        case f:
          return te("Suspense");
        case g:
          return te("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case c:
            return O(n.render);
          case v:
            return q(n.type, w, z);
          case p: {
            var F = n, ae = F._payload, oe = F._init;
            try {
              return q(oe(ae), w, z);
            } catch {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, fe = {}, Ee = x.ReactDebugCurrentFrame;
    function ne(n) {
      if (n) {
        var w = n._owner, z = q(n.type, n._source, w ? w.type : null);
        Ee.setExtraStackFrame(z);
      } else
        Ee.setExtraStackFrame(null);
    }
    function ze(n, w, z, F, ae) {
      {
        var oe = Function.call.bind(se);
        for (var Q in n)
          if (oe(n, Q)) {
            var J = void 0;
            try {
              if (typeof n[Q] != "function") {
                var we = Error((F || "React class") + ": " + z + " type `" + Q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[Q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw we.name = "Invariant Violation", we;
              }
              J = n[Q](w, Q, F, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (me) {
              J = me;
            }
            J && !(J instanceof Error) && (ne(ae), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", z, Q, typeof J), ne(null)), J instanceof Error && !(J.message in fe) && (fe[J.message] = !0, ne(ae), y("Failed %s type: %s", z, J.message), ne(null));
          }
      }
    }
    var Pe = Array.isArray;
    function Ge(n) {
      return Pe(n);
    }
    function er(n) {
      {
        var w = typeof Symbol == "function" && Symbol.toStringTag, z = w && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return z;
      }
    }
    function Je(n) {
      try {
        return Ye(n), !1;
      } catch {
        return !0;
      }
    }
    function Ye(n) {
      return "" + n;
    }
    function Xe(n) {
      if (Je(n))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(n)), Ye(n);
    }
    var _e = x.ReactCurrentOwner, nt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, hr, xr;
    function ot(n) {
      if (se.call(n, "ref")) {
        var w = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function lt(n) {
      if (se.call(n, "key")) {
        var w = Object.getOwnPropertyDescriptor(n, "key").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function it(n, w) {
      typeof n.ref == "string" && _e.current;
    }
    function ct(n, w) {
      {
        var z = function() {
          hr || (hr = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        z.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: z,
          configurable: !0
        });
      }
    }
    function dt(n, w) {
      {
        var z = function() {
          xr || (xr = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        z.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: z,
          configurable: !0
        });
      }
    }
    var ut = function(n, w, z, F, ae, oe, Q) {
      var J = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: w,
        ref: z,
        props: Q,
        // Record the component responsible for creating this element.
        _owner: oe
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
        value: F
      }), Object.defineProperty(J, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ae
      }), Object.freeze && (Object.freeze(J.props), Object.freeze(J)), J;
    };
    function ft(n, w, z, F, ae) {
      {
        var oe, Q = {}, J = null, we = null;
        z !== void 0 && (Xe(z), J = "" + z), lt(w) && (Xe(w.key), J = "" + w.key), ot(w) && (we = w.ref, it(w, ae));
        for (oe in w)
          se.call(w, oe) && !nt.hasOwnProperty(oe) && (Q[oe] = w[oe]);
        if (n && n.defaultProps) {
          var me = n.defaultProps;
          for (oe in me)
            Q[oe] === void 0 && (Q[oe] = me[oe]);
        }
        if (J || we) {
          var ge = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          J && ct(Q, ge), we && dt(Q, ge);
        }
        return ut(n, J, we, ae, F, _e.current, Q);
      }
    }
    var rr = x.ReactCurrentOwner, vr = x.ReactDebugCurrentFrame;
    function Ve(n) {
      if (n) {
        var w = n._owner, z = q(n.type, n._source, w ? w.type : null);
        vr.setExtraStackFrame(z);
      } else
        vr.setExtraStackFrame(null);
    }
    var tr;
    tr = !1;
    function ar(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function yr() {
      {
        if (rr.current) {
          var n = C(rr.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function mt(n) {
      return "";
    }
    var wr = {};
    function gt(n) {
      {
        var w = yr();
        if (!w) {
          var z = typeof n == "string" ? n : n.displayName || n.name;
          z && (w = `

Check the top-level render call using <` + z + ">.");
        }
        return w;
      }
    }
    function kr(n, w) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var z = gt(w);
        if (wr[z])
          return;
        wr[z] = !0;
        var F = "";
        n && n._owner && n._owner !== rr.current && (F = " It was passed a child from " + C(n._owner.type) + "."), Ve(n), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, F), Ve(null);
      }
    }
    function jr(n, w) {
      {
        if (typeof n != "object")
          return;
        if (Ge(n))
          for (var z = 0; z < n.length; z++) {
            var F = n[z];
            ar(F) && kr(F, w);
          }
        else if (ar(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var ae = m(n);
          if (typeof ae == "function" && ae !== n.entries)
            for (var oe = ae.call(n), Q; !(Q = oe.next()).done; )
              ar(Q.value) && kr(Q.value, w);
        }
      }
    }
    function pt(n) {
      {
        var w = n.type;
        if (w == null || typeof w == "string")
          return;
        var z;
        if (typeof w == "function")
          z = w.propTypes;
        else if (typeof w == "object" && (w.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        w.$$typeof === v))
          z = w.propTypes;
        else
          return;
        if (z) {
          var F = C(w);
          ze(z, n.props, "prop", F, n);
        } else if (w.PropTypes !== void 0 && !tr) {
          tr = !0;
          var ae = C(w);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ae || "Unknown");
        }
        typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function bt(n) {
      {
        for (var w = Object.keys(n.props), z = 0; z < w.length; z++) {
          var F = w[z];
          if (F !== "children" && F !== "key") {
            Ve(n), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), Ve(null);
            break;
          }
        }
        n.ref !== null && (Ve(n), y("Invalid attribute `ref` supplied to `React.Fragment`."), Ve(null));
      }
    }
    var Nr = {};
    function Er(n, w, z, F, ae, oe) {
      {
        var Q = I(n);
        if (!Q) {
          var J = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var we = mt();
          we ? J += we : J += yr();
          var me;
          n === null ? me = "null" : Ge(n) ? me = "array" : n !== void 0 && n.$$typeof === t ? (me = "<" + (C(n.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : me = typeof n, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", me, J);
        }
        var ge = ft(n, w, z, ae, oe);
        if (ge == null)
          return ge;
        if (Q) {
          var Re = w.children;
          if (Re !== void 0)
            if (F)
              if (Ge(Re)) {
                for (var Be = 0; Be < Re.length; Be++)
                  jr(Re[Be], n);
                Object.freeze && Object.freeze(Re);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              jr(Re, n);
        }
        if (se.call(w, "key")) {
          var $e = C(n), Ne = Object.keys(w).filter(function(kt) {
            return kt !== "key";
          }), sr = Ne.length > 0 ? "{key: someKey, " + Ne.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Nr[$e + sr]) {
            var wt = Ne.length > 0 ? "{" + Ne.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, sr, $e, wt, $e), Nr[$e + sr] = !0;
          }
        }
        return n === s ? bt(ge) : pt(ge), ge;
      }
    }
    function ht(n, w, z) {
      return Er(n, w, z, !0);
    }
    function xt(n, w, z) {
      return Er(n, w, z, !1);
    }
    var vt = xt, yt = ht;
    Ke.Fragment = s, Ke.jsx = vt, Ke.jsxs = yt;
  }()), Ke;
}
process.env.NODE_ENV === "production" ? ur.exports = zt() : ur.exports = At();
var e = ur.exports;
function Br(r) {
  var t, a, s = "";
  if (typeof r == "string" || typeof r == "number") s += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var o = r.length;
    for (t = 0; t < o; t++) r[t] && (a = Br(r[t])) && (s && (s += " "), s += a);
  } else for (a in r) r[a] && (s && (s += " "), s += a);
  return s;
}
function ee() {
  for (var r, t, a = 0, s = "", o = arguments.length; a < o; a++) (r = arguments[a]) && (t = Br(r)) && (s && (s += " "), s += t);
  return s;
}
const zr = (r) => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r, Ar = ee, ye = (r, t) => (a) => {
  var s;
  if ((t == null ? void 0 : t.variants) == null) return Ar(r, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: o, defaultVariants: l } = t, d = Object.keys(o).map((f) => {
    const g = a == null ? void 0 : a[f], v = l == null ? void 0 : l[f];
    if (g === null) return null;
    const p = zr(g) || zr(v);
    return o[f][p];
  }), i = a && Object.entries(a).reduce((f, g) => {
    let [v, p] = g;
    return p === void 0 || (f[v] = p), f;
  }, {}), c = t == null || (s = t.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((f, g) => {
    let { class: v, className: p, ...u } = g;
    return Object.entries(u).every((j) => {
      let [h, m] = j;
      return Array.isArray(m) ? m.includes({
        ...l,
        ...i
      }[h]) : {
        ...l,
        ...i
      }[h] === m;
    }) ? [
      ...f,
      v,
      p
    ] : f;
  }, []);
  return Ar(r, d, c, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, pr = "-", Tt = (r) => {
  const t = Pt(r), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: s
  } = r;
  return {
    getClassGroupId: (d) => {
      const i = d.split(pr);
      return i[0] === "" && i.length !== 1 && i.shift(), Fr(i, t) || It(d);
    },
    getConflictingClassGroupIds: (d, i) => {
      const c = a[d] || [];
      return i && s[d] ? [...c, ...s[d]] : c;
    }
  };
}, Fr = (r, t) => {
  var d;
  if (r.length === 0)
    return t.classGroupId;
  const a = r[0], s = t.nextPart.get(a), o = s ? Fr(r.slice(1), s) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const l = r.join(pr);
  return (d = t.validators.find(({
    validator: i
  }) => i(l))) == null ? void 0 : d.classGroupId;
}, Tr = /^\[(.+)\]$/, It = (r) => {
  if (Tr.test(r)) {
    const t = Tr.exec(r)[1], a = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, Pt = (r) => {
  const {
    theme: t,
    prefix: a
  } = r, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Dt(Object.entries(r.classGroups), a).forEach(([l, d]) => {
    fr(d, s, l, t);
  }), s;
}, fr = (r, t, a, s) => {
  r.forEach((o) => {
    if (typeof o == "string") {
      const l = o === "" ? t : Ir(t, o);
      l.classGroupId = a;
      return;
    }
    if (typeof o == "function") {
      if (_t(o)) {
        fr(o(s), t, a, s);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: a
      });
      return;
    }
    Object.entries(o).forEach(([l, d]) => {
      fr(d, Ir(t, l), a, s);
    });
  });
}, Ir = (r, t) => {
  let a = r;
  return t.split(pr).forEach((s) => {
    a.nextPart.has(s) || a.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(s);
  }), a;
}, _t = (r) => r.isThemeGetter, Dt = (r, t) => t ? r.map(([a, s]) => {
  const o = s.map((l) => typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([d, i]) => [t + d, i])) : l);
  return [a, o];
}) : r, Ot = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, a = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  const o = (l, d) => {
    a.set(l, d), t++, t > r && (t = 0, s = a, a = /* @__PURE__ */ new Map());
  };
  return {
    get(l) {
      let d = a.get(l);
      if (d !== void 0)
        return d;
      if ((d = s.get(l)) !== void 0)
        return o(l, d), d;
    },
    set(l, d) {
      a.has(l) ? a.set(l, d) : o(l, d);
    }
  };
}, Wr = "!", Lt = (r) => {
  const {
    separator: t,
    experimentalParseClassName: a
  } = r, s = t.length === 1, o = t[0], l = t.length, d = (i) => {
    const c = [];
    let f = 0, g = 0, v;
    for (let m = 0; m < i.length; m++) {
      let x = i[m];
      if (f === 0) {
        if (x === o && (s || i.slice(m, m + l) === t)) {
          c.push(i.slice(g, m)), g = m + l;
          continue;
        }
        if (x === "/") {
          v = m;
          continue;
        }
      }
      x === "[" ? f++ : x === "]" && f--;
    }
    const p = c.length === 0 ? i : i.substring(g), u = p.startsWith(Wr), j = u ? p.substring(1) : p, h = v && v > g ? v - g : void 0;
    return {
      modifiers: c,
      hasImportantModifier: u,
      baseClassName: j,
      maybePostfixModifierPosition: h
    };
  };
  return a ? (i) => a({
    className: i,
    parseClassName: d
  }) : d;
}, $t = (r) => {
  if (r.length <= 1)
    return r;
  const t = [];
  let a = [];
  return r.forEach((s) => {
    s[0] === "[" ? (t.push(...a.sort(), s), a = []) : a.push(s);
  }), t.push(...a.sort()), t;
}, Vt = (r) => ({
  cache: Ot(r.cacheSize),
  parseClassName: Lt(r),
  ...Tt(r)
}), Bt = /\s+/, Ft = (r, t) => {
  const {
    parseClassName: a,
    getClassGroupId: s,
    getConflictingClassGroupIds: o
  } = t, l = [], d = r.trim().split(Bt);
  let i = "";
  for (let c = d.length - 1; c >= 0; c -= 1) {
    const f = d[c], {
      modifiers: g,
      hasImportantModifier: v,
      baseClassName: p,
      maybePostfixModifierPosition: u
    } = a(f);
    let j = !!u, h = s(j ? p.substring(0, u) : p);
    if (!h) {
      if (!j) {
        i = f + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (h = s(p), !h) {
        i = f + (i.length > 0 ? " " + i : i);
        continue;
      }
      j = !1;
    }
    const m = $t(g).join(":"), x = v ? m + Wr : m, y = x + h;
    if (l.includes(y))
      continue;
    l.push(y);
    const $ = o(h, j);
    for (let A = 0; A < $.length; ++A) {
      const D = $[A];
      l.push(x + D);
    }
    i = f + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Wt() {
  let r = 0, t, a, s = "";
  for (; r < arguments.length; )
    (t = arguments[r++]) && (a = Hr(t)) && (s && (s += " "), s += a);
  return s;
}
const Hr = (r) => {
  if (typeof r == "string")
    return r;
  let t, a = "";
  for (let s = 0; s < r.length; s++)
    r[s] && (t = Hr(r[s])) && (a && (a += " "), a += t);
  return a;
};
function Ht(r, ...t) {
  let a, s, o, l = d;
  function d(c) {
    const f = t.reduce((g, v) => v(g), r());
    return a = Vt(f), s = a.cache.get, o = a.cache.set, l = i, i(c);
  }
  function i(c) {
    const f = s(c);
    if (f)
      return f;
    const g = Ft(c, a);
    return o(c, g), g;
  }
  return function() {
    return l(Wt.apply(null, arguments));
  };
}
const ce = (r) => {
  const t = (a) => a[r] || [];
  return t.isThemeGetter = !0, t;
}, Gr = /^\[(?:([a-z-]+):)?(.+)\]$/i, Gt = /^\d+\/\d+$/, Yt = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ut = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Kt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, qt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Zt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Jt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Te = (r) => Fe(r) || Yt.has(r) || Gt.test(r), De = (r) => He(r, "length", na), Fe = (r) => !!r && !Number.isNaN(Number(r)), or = (r) => He(r, "number", Fe), qe = (r) => !!r && Number.isInteger(Number(r)), Xt = (r) => r.endsWith("%") && Fe(r.slice(0, -1)), Y = (r) => Gr.test(r), Oe = (r) => Ut.test(r), Qt = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ea = (r) => He(r, Qt, Yr), ra = (r) => He(r, "position", Yr), ta = /* @__PURE__ */ new Set(["image", "url"]), aa = (r) => He(r, ta, la), sa = (r) => He(r, "", oa), Ze = () => !0, He = (r, t, a) => {
  const s = Gr.exec(r);
  return s ? s[1] ? typeof t == "string" ? s[1] === t : t.has(s[1]) : a(s[2]) : !1;
}, na = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Kt.test(r) && !qt.test(r)
), Yr = () => !1, oa = (r) => Zt.test(r), la = (r) => Jt.test(r), ia = () => {
  const r = ce("colors"), t = ce("spacing"), a = ce("blur"), s = ce("brightness"), o = ce("borderColor"), l = ce("borderRadius"), d = ce("borderSpacing"), i = ce("borderWidth"), c = ce("contrast"), f = ce("grayscale"), g = ce("hueRotate"), v = ce("invert"), p = ce("gap"), u = ce("gradientColorStops"), j = ce("gradientColorStopPositions"), h = ce("inset"), m = ce("margin"), x = ce("opacity"), y = ce("padding"), $ = ce("saturate"), A = ce("scale"), D = ce("sepia"), V = ce("skew"), _ = ce("space"), k = ce("translate"), M = () => ["auto", "contain", "none"], I = () => ["auto", "hidden", "clip", "visible", "scroll"], W = () => ["auto", Y, t], R = () => [Y, t], C = () => ["", Te, De], T = () => ["auto", Fe, Y], G = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], E = () => ["solid", "dashed", "dotted", "double", "none"], S = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], N = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], L = () => ["", "0", Y], K = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], P = () => [Fe, Y];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Ze],
      spacing: [Te, De],
      blur: ["none", "", Oe, Y],
      brightness: P(),
      borderColor: [r],
      borderRadius: ["none", "", "full", Oe, Y],
      borderSpacing: R(),
      borderWidth: C(),
      contrast: P(),
      grayscale: L(),
      hueRotate: P(),
      invert: L(),
      gap: R(),
      gradientColorStops: [r],
      gradientColorStopPositions: [Xt, De],
      inset: W(),
      margin: W(),
      opacity: P(),
      padding: R(),
      saturate: P(),
      scale: P(),
      sepia: L(),
      skew: P(),
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
        aspect: ["auto", "square", "video", Y]
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
        columns: [Oe]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": K()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": K()
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
        object: [...G(), Y]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: I()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": I()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": I()
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
        z: ["auto", qe, Y]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: W()
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
        flex: ["1", "auto", "initial", "none", Y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: L()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: L()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", qe, Y]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Ze]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", qe, Y]
        }, Y]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": T()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": T()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Ze]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [qe, Y]
        }, Y]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": T()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": T()
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
        "auto-cols": ["auto", "min", "max", "fr", Y]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Y]
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
        m: [m]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [m]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [m]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [m]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [m]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [m]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [m]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [m]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [m]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [_]
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
        "space-y": [_]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Y, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Y, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Y, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Oe]
        }, Oe]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Y, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Y, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Y, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Y, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Oe, De]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", or]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ze]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Fe, or]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Te, Y]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Y]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Y]
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
        text: [r]
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
        decoration: [...E(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Te, De]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Te, Y]
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
        indent: R()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Y]
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
        content: ["none", Y]
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
        bg: [...G(), ra]
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
        bg: ["auto", "cover", "contain", ea]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, aa]
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
        border: [...E(), "hidden"]
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
        divide: E()
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
        outline: ["", ...E()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Te, Y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Te, De]
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
        ring: [r]
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
        "ring-offset": [Te, De]
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
        shadow: ["", "inner", "none", Oe, sa]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ze]
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
        "drop-shadow": ["", "none", Oe, Y]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [f]
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
        invert: [v]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [$]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [D]
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
        "backdrop-grayscale": [f]
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
        "backdrop-saturate": [$]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [D]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Y]
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
        ease: ["linear", "in", "out", "in-out", Y]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", Y]
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
        rotate: [qe, Y]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [k]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [k]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [V]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [V]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Y]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Y]
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
        "will-change": ["auto", "scroll", "contents", "transform", Y]
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
        stroke: [Te, De, or]
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
}, We = /* @__PURE__ */ Ht(ia);
function b(...r) {
  return We(ee(r));
}
const U = ({
  icon: r,
  className: t,
  size: a,
  color: s,
  rotate: o,
  flip: l,
  spin: d,
  inline: i = !0,
  mode: c = "svg",
  ...f
}) => {
  const [g, v] = re(null), [p, u] = re(!0), [j, h] = re(null);
  return xe(() => {
    let m = !0;
    return (async () => {
      try {
        const { Icon: y } = await import("./iconify-Dqt3MVen.mjs");
        m && (v(() => y), u(!1));
      } catch (y) {
        console.error("Failed to load icon:", y), m && (h(y), u(!1));
      }
    })(), () => {
      m = !1;
    };
  }, []), p ? /* @__PURE__ */ e.jsx("span", { style: { width: a, height: a } }) : j || !g ? null : /* @__PURE__ */ e.jsx(
    g,
    {
      icon: r,
      className: b(
        d && "animate-spin",
        t
      ),
      style: {
        color: s,
        transform: `rotate(${o || 0}deg)`
      },
      height: a,
      width: a,
      flip: l,
      inline: i,
      mode: c,
      ...f
    }
  );
}, ca = ye(
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
), Ur = ve(
  ({
    className: r,
    variant: t = "default",
    size: a = "md",
    rounded: s = "md",
    error: o = !1,
    errorText: l,
    helperText: d,
    label: i,
    required: c = !1,
    labelPlacement: f = "top",
    fullWidth: g = !1,
    leftIcon: v,
    rightIcon: p,
    onRightIconClick: u,
    id: j,
    ...h
  }, m) => {
    const x = j || Me.useId(), y = `${x}-helper`, $ = `${x}-error`, A = /* @__PURE__ */ e.jsxs("div", { className: b("relative", !g && "inline-block"), children: [
      v && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ e.jsx(U, { icon: v, className: "w-4 h-4" }) }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          id: x,
          type: "text",
          ref: m,
          className: b(
            ca({ variant: o ? "error" : t, size: a, rounded: s, fullWidth: g }),
            v && "pl-10",
            p && "pr-10",
            r
          ),
          "aria-describedby": o ? $ : d ? y : void 0,
          "aria-invalid": o,
          "aria-required": c,
          ...h
        }
      ),
      p && /* @__PURE__ */ e.jsx(
        "div",
        {
          className: b(
            "absolute right-3 top-1/2 -translate-y-1/2 text-neutral",
            u && "cursor-pointer hover:text-primary-600"
          ),
          onClick: u,
          role: u ? "button" : void 0,
          tabIndex: u ? 0 : void 0,
          children: /* @__PURE__ */ e.jsx(U, { icon: p, className: "w-4 h-4" })
        }
      )
    ] }), D = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      o && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: $, children: l }),
      !o && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: y, children: d })
    ] });
    return f === "left" ? /* @__PURE__ */ e.jsx("div", { className: b(g ? "w-full" : "inline-block", r), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
      i && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: x,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            i,
            c && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: b("flex-1", !g && "inline-block"), children: [
        A,
        D
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: b(g ? "w-full" : "inline-block", r), children: [
      i && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: x,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            i,
            c && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      A,
      D
    ] });
  }
);
Ur.displayName = "Input";
const Qe = Me.forwardRef(
  ({ className: r, children: t, selected: a, disabled: s, ...o }, l) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: l,
      className: b(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
        "hover:bg-primary-50",
        a && "bg-primary-50 text-primary-900",
        s && "pointer-events-none opacity-50",
        r
      ),
      ...o,
      children: t
    }
  )
);
Qe.displayName = "SelectItem";
const Kr = typeof window < "u", Se = () => Kr ? window : {
  innerHeight: 0,
  innerWidth: 0,
  addEventListener: () => {
  },
  removeEventListener: () => {
  }
}, he = () => Kr ? document : {
  addEventListener: () => {
  },
  removeEventListener: () => {
  },
  dispatchEvent: () => {
  }
}, lr = "autocomplete-dropdown-opened", da = ye(
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
), ua = ve(
  ({
    className: r,
    options: t,
    onSelect: a,
    isOpen: s,
    dropdownPosition: o = "bottom",
    loading: l = !1,
    renderOption: d,
    variant: i = "default",
    size: c = "md",
    rounded: f = "md",
    leftIcon: g,
    rightIcon: v,
    error: p = !1,
    errorText: u,
    helperText: j,
    label: h,
    required: m = !1,
    labelPlacement: x = "top",
    fullWidth: y = !1,
    value: $,
    onChange: A,
    onFocus: D,
    onBlur: V,
    showClear: _ = !1,
    onClear: k,
    ...M
  }, I) => {
    const [W, R] = re(!1), [C, T] = re($ || ""), G = pe(null), E = pe(null), S = pe(null), N = s !== void 0, K = `autocomplete-${Me.useId().replace(/:/g, "")}`, P = () => {
      if (!W || !E.current || !S.current) return;
      const { bottom: X, top: O, left: Z, width: q } = E.current.getBoundingClientRect(), se = S.current, fe = Se(), Ee = {
        position: "fixed",
        left: `${Z}px`,
        width: `${q}px`
      }, ne = o === "bottom" ? {
        ...Ee,
        top: `${X + 4}px`,
        maxHeight: `${fe.innerHeight - X - 8}px`
      } : {
        ...Ee,
        bottom: `${fe.innerHeight - O + 4}px`,
        maxHeight: `${O - 8}px`
      };
      Object.assign(se.style, ne);
    };
    xe(() => {
      const X = Se(), O = he(), Z = () => {
        W && P();
      }, q = () => {
        W && P();
      }, se = (Ee) => {
        Ee.detail.id !== K && R(!1);
      }, fe = (Ee) => {
        const ne = Ee.target;
        G.current && !G.current.contains(ne) && S.current && !S.current.contains(ne) && R(!1);
      };
      return W && (P(), X.addEventListener("scroll", Z, !0), X.addEventListener("resize", q)), O.addEventListener(lr, se), O.addEventListener("click", fe), () => {
        X.removeEventListener("scroll", Z, !0), X.removeEventListener("resize", q), O.removeEventListener(lr, se), O.removeEventListener("click", fe);
      };
    }, [W, K]), xe(() => {
      T($ || "");
    }, [$]);
    const B = (X) => {
      const { value: O } = X.target;
      if (T(O), !O.trim()) {
        R(!1);
        return;
      }
      R(!0), A == null || A(X);
    }, ue = (X) => {
      X.stopPropagation(), T(""), k == null || k();
      const O = new Event("change");
      O.target = { value: "" }, A == null || A(O);
    }, de = (X) => {
      var se;
      if (!X) return;
      const { value: O, label: Z } = X;
      T(Z), R(!1), a == null || a(O);
      const q = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: X }
      });
      (se = E.current) == null || se.dispatchEvent(q);
    }, be = (X) => {
      N || (he().dispatchEvent(
        new CustomEvent(lr, {
          detail: { id: K }
        })
      ), R(!0)), D == null || D(X);
    }, ie = (X) => {
      V == null || V(X);
    }, H = t.filter(
      ({ label: X }) => X.toLowerCase().includes((C || "").toLowerCase().trim())
    ), te = N ? s : W, Ce = _ && C && !M.disabled && !M.readOnly, je = Ce ? "mdi:close" : v, Ae = () => {
      if (!te) return null;
      const X = he();
      if (!("body" in X)) return null;
      const O = /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: S,
          className: b(
            da({ position: o }),
            "overflow-auto"
          ),
          onClick: (Z) => Z.stopPropagation(),
          children: l ? /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ e.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }) }) : H.length > 0 ? H.map((Z) => /* @__PURE__ */ e.jsx(
            Qe,
            {
              value: Z.value,
              selected: Z.label === C,
              onClick: () => de(Z),
              children: d ? d(Z) : Z.label
            },
            Z.value
          )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-2 text-sm text-neutral", children: "No options found" })
        }
      );
      return Le(O, X.body);
    };
    return /* @__PURE__ */ e.jsxs("div", { ref: G, className: b("relative", y ? "w-full" : "inline-block"), children: [
      /* @__PURE__ */ e.jsx("div", { ref: E, className: b(!y && "inline-block"), children: /* @__PURE__ */ e.jsx(
        Ur,
        {
          ref: I,
          value: C,
          onChange: B,
          onFocus: be,
          onBlur: ie,
          variant: i,
          size: c,
          rounded: f,
          leftIcon: g,
          rightIcon: je,
          error: p,
          errorText: u,
          helperText: j,
          label: h,
          required: m,
          labelPlacement: x,
          fullWidth: y,
          className: r,
          ...M,
          onClick: Ce ? ue : M.onClick
        }
      ) }),
      Ae()
    ] });
  }
);
ua.displayName = "AutoComplete";
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
}, ma = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, ga = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
}, ys = ({
  items: r,
  multiple: t = !1,
  defaultOpenIds: a = [],
  icon: s = "mdi:chevron-down",
  iconPosition: o = "right",
  className: l,
  contentClassName: d,
  variant: i = "primary",
  shadow: c = "none",
  rounded: f = "lg"
}) => {
  const [g, v] = re(a), p = (j) => {
    v(
      t ? (h) => h.includes(j) ? h.filter((m) => m !== j) : [...h, j] : (h) => h.includes(j) ? [] : [j]
    );
  }, u = fa[i];
  return /* @__PURE__ */ e.jsx("div", { className: ee("w-full space-y-2", l), children: r.map((j) => {
    const h = g.includes(j.id), m = !!j.disabled;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: ee(
          "border overflow-hidden",
          "bg-white",
          "border-gray-200",
          ma[c],
          ga[f],
          "transition-shadow duration-200"
        ),
        children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => !m && p(j.id),
              disabled: m,
              className: ee(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                u.hover,
                h && u.active,
                u.text,
                m && "opacity-50 cursor-not-allowed"
              ),
              children: [
                o === "left" && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: ee(
                      "mr-3 transition-transform duration-200",
                      h && "rotate-180"
                    ),
                    children: /* @__PURE__ */ e.jsx(U, { icon: s, className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ e.jsx("div", { className: "flex-1", children: j.title }),
                o === "right" && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: ee(
                      "ml-3 transition-transform duration-200",
                      h && "rotate-180"
                    ),
                    children: /* @__PURE__ */ e.jsx(U, { icon: s, className: "w-5 h-5" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: ee(
                "grid transition-all duration-200 ease-in-out",
                h ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              ),
              children: /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: ee(
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
}, ws = ({
  src: r,
  alt: t = "avatar",
  size: a = "medium",
  shape: s = "circle",
  className: o = ""
}) => {
  const l = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  }, d = {
    circle: "rounded-full",
    square: "rounded-lg"
  }, i = We(
    "inline-flex items-center justify-center overflow-hidden bg-gray-200",
    l[a],
    d[s],
    o
  );
  return /* @__PURE__ */ e.jsx("div", { className: i, children: r ? /* @__PURE__ */ e.jsx("img", { src: r, alt: t, className: "w-full h-full object-cover" }) : /* @__PURE__ */ e.jsx(
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
}, ks = ({
  children: r,
  variant: t = "primary",
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
  }, d = {
    small: "px-2 py-0.5 text-xs",
    medium: "px-2.5 py-1 text-sm",
    large: "px-3 py-1.5 text-base"
  }, i = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full"
  }, c = We(
    "inline-flex items-center font-medium",
    l[t],
    d[a],
    i[s],
    o
  );
  return /* @__PURE__ */ e.jsx("span", { className: c, children: r });
}, pa = ye(
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
), ke = ve(
  ({
    className: r,
    variant: t = "primary",
    size: a = "md",
    rounded: s = "md",
    fullWidth: o = !1,
    isLoading: l = !1,
    leftIcon: d,
    rightIcon: i,
    isIconOnly: c = !1,
    children: f,
    ...g
  }, v) => {
    const u = c || !!(d || i) && !f;
    return /* @__PURE__ */ e.jsxs(
      "button",
      {
        className: b(
          pa({
            variant: t,
            size: a,
            rounded: u ? "full" : s,
            fullWidth: o,
            isIconOnly: u,
            className: r
          })
        ),
        ref: v,
        disabled: g.disabled || l,
        ...g,
        children: [
          l && /* @__PURE__ */ e.jsx("span", { className: "animate-spin inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full" }),
          d && !l && /* @__PURE__ */ e.jsx(U, { icon: d, className: "w-4 h-4", inline: !0 }),
          f && /* @__PURE__ */ e.jsx("span", { children: f }),
          i && !l && /* @__PURE__ */ e.jsx(U, { icon: i, className: "w-4 h-4", inline: !0 })
        ]
      }
    );
  }
);
ke.displayName = "Button";
const ba = ye(
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
), br = ve(
  ({
    className: r,
    variant: t = "default",
    padding: a = "md",
    shadow: s = "none",
    rounded: o = "md",
    asChild: l = !1,
    ...d
  }, i) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: b(ba({ variant: t, padding: a, shadow: s, rounded: o, className: r })),
      ref: i,
      ...d
    }
  )
);
br.displayName = "Card";
const js = ({
  label: r,
  error: t,
  disabled: a = !1,
  indeterminate: s = !1,
  variantSize: o = "sm",
  variant: l = "square",
  color: d = "primary",
  className: i = "",
  ...c
}) => {
  const f = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }, g = {
    primary: "checked:bg-primary-600 checked:border-primary-600 hover:border-primary-600",
    secondary: "checked:bg-secondary-600 checked:border-secondary-600 hover:border-secondary-600",
    success: "checked:bg-success-600 checked:border-success-600 hover:border-success-600",
    warning: "checked:bg-warning-600 checked:border-warning-600 hover:border-warning-600",
    error: "checked:bg-danger-600 checked:border-danger-600 hover:border-danger-600"
  }, p = We(
    "border-2 transition-colors duration-200",
    "appearance-none cursor-pointer",
    "checked:bg-no-repeat checked:bg-center",
    l === "circle" ? 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]' : 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM0w0LjUgOC41TDIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=")]',
    {
      square: "rounded",
      circle: "rounded-full"
    }[l],
    f[o],
    g[d],
    a && "opacity-50 cursor-not-allowed",
    i
  ), u = We(
    "ml-2 text-sm font-medium",
    a && "opacity-50 cursor-not-allowed",
    t && "text-danger-600"
  );
  return /* @__PURE__ */ e.jsxs("div", { className: "items-center", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "checkbox",
          className: p,
          disabled: a,
          ref: (j) => {
            j && (j.indeterminate = s);
          },
          ...c
        }
      ),
      r && /* @__PURE__ */ e.jsx("label", { className: u, children: r })
    ] }),
    t && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-danger-600", children: t })
  ] });
}, ha = {
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
}, xa = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5"
}, va = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, Ns = ({
  children: r,
  variant: t = "solid",
  color: a = "primary",
  size: s = "md",
  rounded: o = "md",
  onClose: l,
  className: d,
  icon: i
}) => /* @__PURE__ */ e.jsxs(
  "div",
  {
    className: b(
      "inline-flex items-center gap-1.5 font-medium",
      ha[t][a],
      xa[s],
      va[o],
      d
    ),
    children: [
      i && /* @__PURE__ */ e.jsx("span", { className: "inline-flex items-center", children: /* @__PURE__ */ e.jsx(U, { icon: i, className: "w-4 h-4" }) }),
      r,
      l && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: l,
          className: "ml-1 rounded-full hover:bg-black/10 p-0.5",
          "aria-label": "Close",
          children: /* @__PURE__ */ e.jsx(U, { icon: "mdi:close", className: "w-3 h-3" })
        }
      )
    ]
  }
);
var qr = { exports: {} };
(function(r, t) {
  (function(a, s) {
    r.exports = s();
  })($r, function() {
    return function(a, s) {
      s.prototype.isSameOrAfter = function(o, l) {
        return this.isSame(o, l) || this.isAfter(o, l);
      };
    };
  });
})(qr);
var ya = qr.exports;
const wa = /* @__PURE__ */ Vr(ya);
var Zr = { exports: {} };
(function(r, t) {
  (function(a, s) {
    r.exports = s();
  })($r, function() {
    return function(a, s) {
      s.prototype.isSameOrBefore = function(o, l) {
        return this.isSame(o, l) || this.isBefore(o, l);
      };
    };
  });
})(Zr);
var ka = Zr.exports;
const ja = /* @__PURE__ */ Vr(ka);
le.extend(wa);
le.extend(ja);
const Na = ye(
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
), mr = ve(
  ({
    value: r,
    onChange: t,
    minDate: a,
    maxDate: s,
    variant: o = "default",
    size: l = "md",
    rounded: d = "md",
    disabled: i = !1,
    errorText: c,
    helperText: f,
    label: g,
    required: v = !1,
    labelPlacement: p = "top",
    fullWidth: u = !1,
    className: j,
    placeholder: h = "Select date",
    leftIcon: m,
    rightIcon: x,
    monthsToShow: y = 1,
    valueFormatter: $,
    rangeStart: A,
    rangeEnd: D,
    closeOnSelect: V = !0,
    calendarFooter: _,
    ...k
  }, M) => {
    const [I, W] = re(!1), [R, C] = re(r), [T, G] = re(r || /* @__PURE__ */ new Date()), [E, S] = re(!1), N = pe(null), L = pe(null), K = pe(null);
    xe(() => {
      C(r || void 0);
    }, [r]);
    const P = () => {
      if (!I || !L.current || !K.current) return;
      const { bottom: O, left: Z, width: q } = L.current.getBoundingClientRect(), se = K.current, fe = Se();
      y === 2 ? Object.assign(se.style, {
        position: "fixed",
        left: `${Z}px`,
        top: `${O + 4}px`,
        minWidth: "500px",
        width: "auto",
        maxHeight: `${fe.innerHeight - O - 8}px`,
        transform: ""
      }) : Object.assign(se.style, {
        position: "fixed",
        left: `${Z + q / 2}px`,
        top: `${O + 4}px`,
        width: "320px",
        maxWidth: "100vw",
        maxHeight: `${fe.innerHeight - O - 8}px`,
        transform: "translateX(-50%)"
      });
    };
    xe(() => {
      const O = Se(), Z = he(), q = () => {
        I && P();
      }, se = () => {
        I && P();
      }, fe = (Ee) => {
        Ee.key === "Escape" && I && (W(!1), S(!1));
      };
      return I && (P(), O.addEventListener("scroll", q, !0), O.addEventListener("resize", se), Z.addEventListener("keydown", fe)), () => {
        O.removeEventListener("scroll", q, !0), O.removeEventListener("resize", se), Z.removeEventListener("keydown", fe);
      };
    }, [I]);
    const B = (O) => {
      if (A !== void 0 && D !== void 0)
        if (A && D)
          C(O), t == null || t(O);
        else if (A) {
          const q = O;
          le(q).isBefore(A), C(q), t == null || t(q), W(!1), S(!1);
        } else
          C(O), t == null || t(O);
      else
        C(O), t == null || t(O), W(!1), S(!1);
    }, ue = () => {
      G(le(T).subtract(1, "month").toDate());
    }, de = () => {
      G(le(T).add(1, "month").toDate());
    }, be = (O) => {
      const Z = le(O).startOf("month"), q = le(O).endOf("month"), se = [];
      let fe = Z;
      for (; fe.isBefore(q) || fe.isSame(q, "day"); )
        se.push(fe.toDate()), fe = fe.add(1, "day");
      return se;
    }, ie = (O) => !!(a && le(O).isBefore(a, "day") || s && le(O).isAfter(s, "day")), H = () => R ? le(R).format("DD MMM YYYY") : "", te = (O) => {
      const Z = le(T).year(O).toDate();
      G(Z), S(!1);
    }, Ce = () => {
      if (!E) return null;
      const O = le(T).year(), Z = Array.from({ length: 50 }, (q, se) => O - 25 + se);
      return /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-5 gap-2 p-2 overflow-y-auto max-h-[300px]", children: Z.map((q) => /* @__PURE__ */ e.jsx(
        "div",
        {
          onClick: () => te(q),
          className: b(
            q === O && "bg-primary-50 text-primary",
            "text-sm cursor-pointer p-2"
          ),
          children: q
        },
        q
      )) });
    }, je = () => {
      if (!I) return null;
      const O = he();
      if (!("body" in O)) return null;
      const Z = Array.from({ length: y }).map(
        (q, se) => le(T).add(se, "month").toDate()
      );
      return Le(
        /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "fixed inset-0 z-[9998]",
              onClick: () => {
                E || W(!1);
              }
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: K,
              className: "fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-lg",
              onClick: (q) => q.stopPropagation(),
              children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between p-2 border-b border-gray-200", children: [
                  /* @__PURE__ */ e.jsx(
                    ke,
                    {
                      onClick: ue,
                      variant: "ghost",
                      size: "sm",
                      leftIcon: "mdi:chevron-left"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-900", children: y === 1 ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e.jsx("span", { children: le(T).format("MMMM") }),
                    /* @__PURE__ */ e.jsxs(
                      "div",
                      {
                        className: "cursor-pointer flex items-center gap-1",
                        onClick: () => S(!E),
                        children: [
                          /* @__PURE__ */ e.jsx("span", { children: le(T).format("YYYY") }),
                          /* @__PURE__ */ e.jsx(ke, { variant: "ghost", size: "sm", leftIcon: E ? "mdi:chevron-up" : "mdi:chevron-down" })
                        ]
                      }
                    )
                  ] }) : `${le(T).format("MMMM YYYY")} - ${le(
                    T
                  ).add(y - 1, "month").format("MMMM YYYY")}` }) }),
                  /* @__PURE__ */ e.jsx(
                    ke,
                    {
                      onClick: de,
                      variant: "ghost",
                      size: "sm",
                      rightIcon: "mdi:chevron-right"
                    }
                  )
                ] }),
                E ? Ce() : /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: b(
                      y === 2 ? "flex gap-5 p-2 mx-auto w-fit" : "justify-between p-2 mx-auto w-fit"
                    ),
                    children: Z.map((q, se) => {
                      const fe = be(q), Ee = le(q).startOf("month").day();
                      return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-7 gap-y-1 my-1", children: [
                          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                            (ne, ze) => {
                              const Pe = ze === 0 || ze === 6;
                              return /* @__PURE__ */ e.jsx(
                                "div",
                                {
                                  className: b(
                                    "text-center text-xs font-medium text-neutral",
                                    Pe && "text-danger"
                                  ),
                                  children: ne
                                },
                                ne
                              );
                            }
                          ),
                          Array.from({ length: Ee }).map(
                            (ne, ze) => /* @__PURE__ */ e.jsx("div", {}, `empty-${ze}`)
                          ),
                          fe.map((ne) => {
                            const ze = R && le(ne).isSame(R, "day"), Pe = ie(ne), Ge = le(ne).isSame(
                              q,
                              "month"
                            ), er = A && D && le(ne).isSameOrAfter(A, "day") && le(ne).isSameOrBefore(D, "day"), Je = A && le(ne).isSame(A, "day"), Ye = D && le(ne).isSame(D, "day"), Xe = le(ne).day() === 0 || le(ne).day() === 6, _e = A && D;
                            return /* @__PURE__ */ e.jsx("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ e.jsx(
                              "div",
                              {
                                className: b(
                                  er && "rounded-none bg-primary-50",
                                  _e && Je && "rounded-l-full",
                                  _e && Ye && "rounded-r-full"
                                ),
                                children: /* @__PURE__ */ e.jsx(
                                  "button",
                                  {
                                    onClick: () => !Pe && B(ne),
                                    disabled: Pe,
                                    className: b(
                                      "p-2 text-sm transition-colors duration-200 w-10 h-10 rounded-full",
                                      Xe && "!text-danger",
                                      ze && "bg-primary !text-white hover:bg-primary-600 active:bg-primary-700",
                                      ze && !_e && "rounded-full",
                                      !ze && !Pe && "hover:bg-primary-50 active:bg-primary-100",
                                      !Ge && "text-neutral-400",
                                      Pe && "opacity-50 cursor-not-allowed",
                                      // inRange && "bg-primary-50 text-primary-900 rounded-none",
                                      _e && Je && "!bg-primary !text-white !rounded-full",
                                      _e && Ye && "!bg-primary !text-white !rounded-full"
                                    ),
                                    children: le(ne).format("D")
                                  },
                                  ne.toString()
                                )
                              }
                            ) });
                          })
                        ] }),
                        _
                      ] }, se);
                    })
                  }
                )
              ]
            }
          )
        ] }),
        O.body
      );
    }, Ae = /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: b("relative", !u && "inline-block"),
        ref: L,
        onClick: () => !i && W(!I),
        children: [
          m && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ e.jsx(U, { icon: m, className: "w-4 h-4" }) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: M,
              type: "text",
              value: $ ? $() : H(),
              placeholder: h,
              readOnly: !0,
              className: b(
                Na({ variant: o, size: l, rounded: d, fullWidth: u }),
                m && "pl-10",
                x && "pr-10",
                j
              ),
              disabled: i,
              ...k
            }
          ),
          x && /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ e.jsx(U, { icon: x, className: "w-4 h-4" }) })
        ]
      }
    ), X = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", children: c }),
      !c && f && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", children: f })
    ] });
    return p === "left" ? /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: b(u ? "w-full" : "inline-block", j),
        ref: N,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
            g && /* @__PURE__ */ e.jsxs("label", { className: "block text-sm text-neutral-900 pt-2", children: [
              g,
              v && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: b("flex-1", !u && "inline-block"), children: [
              Ae,
              X
            ] })
          ] }),
          je()
        ]
      }
    ) : /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: b(u ? "w-full" : "inline-block", j),
        ref: N,
        children: [
          g && /* @__PURE__ */ e.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
            g,
            v && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          Ae,
          X,
          je()
        ]
      }
    );
  }
);
mr.displayName = "PrimitiveDatePicker";
const Ea = ({
  mode: r = "single",
  value: t,
  onChange: a,
  monthsToShow: s = 1,
  calendarFooter: o,
  ...l
}) => {
  const [d, i] = re([
    void 0,
    void 0
  ]);
  if (r === "single") {
    const c = Array.isArray(t) ? t[0] : t;
    return /* @__PURE__ */ e.jsx(
      mr,
      {
        value: c === null ? void 0 : c,
        onChange: (f) => a == null ? void 0 : a(f),
        monthsToShow: s,
        calendarFooter: o,
        ...l
      }
    );
  }
  if (r === "range") {
    let [c, f] = Array.isArray(t) ? t : d;
    const g = (p) => {
      !c || c && f ? (i([p, void 0]), a == null || a([p, void 0])) : c && !f && (p < c ? (i([p, c]), a == null || a([p, c])) : (i([c, p]), a == null || a([c, p])));
    }, v = () => {
      if (!c) return "";
      const p = (u) => u ? u.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }) : "";
      return c && f ? `${p(c)} - ${p(f)}` : p(c);
    };
    return /* @__PURE__ */ e.jsx(
      mr,
      {
        value: c,
        onChange: g,
        monthsToShow: s,
        placeholder: l.placeholder || "Select date range",
        valueFormatter: v,
        rangeStart: c,
        rangeEnd: f,
        closeOnSelect: !!f,
        calendarFooter: o,
        ...l
      }
    );
  }
  return null;
};
Ea.displayName = "DatePicker";
const Jr = ve(
  ({ children: r, onClose: t, className: a, ...s }, o) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: o,
      className: b("mb-4 flex items-center justify-between", a),
      ...s,
      children: [
        r,
        t && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: t,
            className: "ml-4 rounded-full p-1 text-gray hover:bg-gray-100 hover:text-gray-700",
            "aria-label": "Close dialog",
            children: /* @__PURE__ */ e.jsx(U, { icon: "mdi:close", className: "h-5 w-5" })
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
}, Ca = ve(
  ({
    isOpen: r,
    onClose: t,
    children: a,
    className: s,
    backdrop: o = "dark",
    header: l,
    closeOnBackdropClick: d = !0,
    size: i = "md",
    ...c
  }, f) => {
    const [g, v] = re(!1), [p, u] = re(!1);
    if (xe(() => {
      if (r) {
        v(!0), u(!0);
        const x = he();
        "body" in x && (x.body.style.overflow = "hidden");
      } else {
        u(!1);
        const x = setTimeout(() => {
          v(!1);
          const y = he();
          "body" in y && (y.body.style.overflow = "");
        }, 300);
        return () => clearTimeout(x);
      }
    }, [r]), xe(() => {
      const x = (y) => {
        y instanceof KeyboardEvent && y.key === "Escape" && t();
      };
      return r && he().addEventListener("keydown", x), () => {
        he().removeEventListener("keydown", x);
      };
    }, [r, t]), !g) return null;
    const j = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, h = () => {
      d && t();
    }, m = he();
    return "body" in m ? Le(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: b(
            "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300",
            j[o],
            p ? "opacity-100" : "opacity-0",
            i === "fullscreen" && "items-start"
          ),
          onClick: h,
          children: /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: f,
              className: b(
                "relative transform rounded-lg bg-white p-6 shadow-xl transition-all duration-300",
                Sa[i],
                p ? "scale-100 opacity-100" : "scale-95 opacity-0",
                s
              ),
              onClick: (x) => x.stopPropagation(),
              ...c,
              children: [
                l && /* @__PURE__ */ e.jsx(Jr, { onClose: t, children: l }),
                a
              ]
            }
          )
        }
      ),
      m.body
    ) : null;
  }
), Ra = ve(
  ({ children: r, className: t, ...a }, s) => /* @__PURE__ */ e.jsx(
    "h2",
    {
      ref: s,
      className: b("text-xl font-semibold text-gray-900", t),
      ...a,
      children: r
    }
  )
), Ma = ve(
  ({ children: r, className: t, ...a }, s) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: s,
      className: b("text-gray-600", t),
      ...a,
      children: r
    }
  )
), za = ve(
  ({ children: r, className: t, ...a }, s) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: s,
      className: b("mt-6 flex justify-end gap-3", t),
      ...a,
      children: r
    }
  )
);
Ca.displayName = "Dialog";
Ra.displayName = "DialogTitle";
Ma.displayName = "DialogBody";
za.displayName = "DialogActions";
Jr.displayName = "DialogHeader";
const Aa = ({
  orientation: r = "horizontal",
  variant: t = "solid",
  color: a = "neutral",
  size: s = "sm",
  className: o = ""
}) => {
  const l = {
    horizontal: "w-full border-t-0 border-l-0 border-r-0 border-b",
    vertical: "h-full border-l border-t-0 border-r-0 border-b-0"
  }, d = {
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
  }, c = {
    sm: r === "horizontal" ? "border-b" : "border-l",
    md: r === "horizontal" ? "border-b-2" : "border-l-2",
    lg: r === "horizontal" ? "border-b-4" : "border-l-4"
  }, f = We(
    "inline-block",
    l[r],
    d[t],
    i[a],
    c[s],
    o
  );
  return /* @__PURE__ */ e.jsx("div", { className: f });
}, Ta = {
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
}, Pr = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
}, Es = ({
  accept: r = ["*"],
  maxSize: t = 5 * 1024 * 1024,
  // 5MB default
  multiple: a = !1,
  value: s = [],
  onChange: o,
  className: l,
  disabled: d = !1,
  placeholder: i = "Drag and drop files here or click to browse",
  variant: c = "default",
  shadow: f = "none",
  rounded: g = "lg",
  children: v,
  showFileList: p = !0,
  showPlaceholder: u = !0,
  showMaxSize: j = !0,
  icon: h = "mdi:upload"
}) => {
  const [m, x] = re(!1), [y, $] = re(null), A = pe(null), D = Ie((C) => {
    C.preventDefault(), d || x(!0);
  }, [d]), V = Ie((C) => {
    C.preventDefault(), x(!1);
  }, []), _ = Ie((C) => C.size > t ? `File size exceeds ${t / (1024 * 1024)}MB limit` : r[0] !== "*" && !r.some((T) => T.startsWith(".") ? C.name.toLowerCase().endsWith(T.toLowerCase()) : C.type.startsWith(T)) ? `File type not allowed. Allowed types: ${r.join(", ")}` : null, [r, t]), k = Ie((C) => {
    if (C.preventDefault(), x(!1), $(null), d) return;
    const T = Array.from(C.dataTransfer.files), G = [], E = [];
    if (T.forEach((S) => {
      const N = _(S);
      N ? E.push(`${S.name}: ${N}`) : G.push(S);
    }), E.length > 0 && $(E.join(`
`)), G.length > 0) {
      const S = a ? [...s, ...G] : G;
      o == null || o(S);
    }
  }, [d, a, o, _, s]), M = Ie((C) => {
    if ($(null), d || !C.target.files) return;
    const T = Array.from(C.target.files), G = [], E = [];
    if (T.forEach((S) => {
      const N = _(S);
      N ? E.push(`${S.name}: ${N}`) : G.push(S);
    }), E.length > 0 && $(E.join(`
`)), G.length > 0) {
      const S = a ? [...s, ...G] : G;
      o == null || o(S);
    }
    A.current && (A.current.value = "");
  }, [d, a, o, _, s]), I = Ie((C) => {
    const T = [...s];
    T.splice(C, 1), o == null || o(T);
  }, [o, s]), W = (C) => C.type.startsWith("image/") ? /* @__PURE__ */ e.jsx(U, { icon: "mdi:image", className: "w-5 h-5" }) : C.type.startsWith("text/") ? /* @__PURE__ */ e.jsx(U, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ e.jsx(U, { icon: "mdi:file", className: "w-5 h-5" }), R = Ta[c];
  return /* @__PURE__ */ e.jsxs("div", { className: ee("w-full", l), children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: ee(
          "p-6 text-center transition-colors",
          !v && [
            "border-2 border-dashed",
            R.border,
            R.bg,
            m && R.active,
            !d && R.hover
          ],
          d && "opacity-50 cursor-not-allowed",
          Ia[f],
          Pr[g],
          !v && "cursor-pointer"
        ),
        onDragOver: D,
        onDragLeave: V,
        onDrop: k,
        onClick: () => {
          var C;
          return !d && !v && ((C = A.current) == null ? void 0 : C.click());
        },
        children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: A,
              type: "file",
              accept: r.join(","),
              multiple: a,
              onChange: M,
              className: "hidden",
              disabled: d
            }
          ),
          v ? /* @__PURE__ */ e.jsx("div", { onClick: () => {
            var C;
            return !d && ((C = A.current) == null ? void 0 : C.click());
          }, children: v }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(U, { icon: h, className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
            u && /* @__PURE__ */ e.jsx("p", { className: ee("text-neutral-600", R.text), children: i }),
            j && /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-neutral mt-2", children: [
              "Max file size: ",
              t / (1024 * 1024),
              "MB"
            ] })
          ] })
        ]
      }
    ),
    y && /* @__PURE__ */ e.jsx("p", { className: "mt-2 text-sm text-danger", children: y }),
    p && s.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "mt-4 space-y-2", children: s.map((C, T) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: ee(
          "flex items-center justify-between p-2",
          Pr[g],
          R.bg
        ),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
            W(C),
            /* @__PURE__ */ e.jsx("span", { className: ee("text-sm", R.text), children: C.name }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-neutral", children: [
              "(",
              (C.size / 1024).toFixed(1),
              " KB)"
            ] })
          ] }),
          !d && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => I(T),
              className: "p-1 text-neutral hover:text-danger",
              children: /* @__PURE__ */ e.jsx(U, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${C.name}-${T}`
    )) })
  ] });
}, Pa = ye(
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
), Ss = ({
  title: r,
  children: t,
  icon: a,
  variant: s = "default",
  rounded: o = "md",
  showClose: l = !1,
  onClose: d,
  className: i
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
  }, f = () => {
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
  return /* @__PURE__ */ e.jsxs("div", { className: b(Pa({ variant: s, rounded: o }), i), children: [
    a && /* @__PURE__ */ e.jsx(U, { icon: f(), className: b("h-5 w-5 flex-shrink-0", c()) }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
      r && /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-medium text-neutral-900", children: r }),
      /* @__PURE__ */ e.jsx("div", { className: "mt-1 text-sm text-neutral", children: t })
    ] }),
    l && /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        className: "ml-auto flex-shrink-0 text-neutral-400 hover:text-neutral",
        onClick: d,
        children: /* @__PURE__ */ e.jsx(U, { icon: "mdi:close", className: "h-5 w-5" })
      }
    )
  ] });
}, ir = "select-dropdown-opened", _a = ye(
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
), Xr = ve(
  ({
    className: r,
    variant: t = "default",
    size: a = "md",
    rounded: s = "md",
    options: o,
    label: l,
    error: d = !1,
    helperText: i,
    required: c = !1,
    placeholder: f,
    value: g,
    onChange: v,
    disabled: p = !1,
    position: u = "bottom",
    fullWidth: j = !1,
    children: h,
    leftIcon: m,
    rightIcon: x,
    ...y
  }, $) => {
    const [A, D] = re(!1), V = pe(null), _ = pe(null), M = `select-${Me.useId().replace(/:/g, "")}`, I = () => {
      if (A && V.current && _.current) {
        const E = V.current.getBoundingClientRect(), S = _.current, N = Se(), L = N.innerHeight - E.bottom, K = E.top, B = E.bottom + S.offsetHeight + 4 >= N.innerHeight, ue = K > L, de = B && ue;
        u === "bottom" || u === "top" ? (S.style.position = "fixed", S.style.left = `${E.left}px`, S.style.width = `${E.width}px`, u === "bottom" && de ? (S.style.bottom = `${N.innerHeight - E.top + 4}px`, S.style.top = "auto", S.style.maxHeight = `${K - 8}px`) : u === "bottom" ? (S.style.top = `${E.bottom + 4}px`, S.style.bottom = "auto", S.style.maxHeight = `${L - 8}px`) : u === "top" && !de ? (S.style.top = `${E.bottom + 4}px`, S.style.bottom = "auto", S.style.maxHeight = `${L - 8}px`) : (S.style.bottom = `${N.innerHeight - E.top + 4}px`, S.style.top = "auto", S.style.maxHeight = `${K - 8}px`)) : u === "left" ? (S.style.position = "fixed", S.style.right = `${N.innerWidth - E.left + 4}px`, S.style.top = `${E.top}px`, S.style.maxHeight = `${N.innerHeight - E.top - 8}px`) : u === "right" && (S.style.position = "fixed", S.style.left = `${E.right + 4}px`, S.style.top = `${E.top}px`, S.style.maxHeight = `${N.innerHeight - E.top - 8}px`);
      }
    };
    xe(() => {
      const E = Se(), S = () => {
        A && I();
      }, N = () => {
        A && I();
      };
      return A && (I(), E.addEventListener("scroll", S, !0), E.addEventListener("resize", N)), () => {
        E.removeEventListener("scroll", S, !0), E.removeEventListener("resize", N);
      };
    }, [A, u]), xe(() => {
      const E = he(), S = (L) => {
        L.detail.id !== M && D(!1);
      }, N = (L) => {
        const K = L.target, P = V.current, B = _.current;
        P && B && !P.contains(K) && !B.contains(K) && D(!1);
      };
      return E.addEventListener(ir, S), E.addEventListener("click", N), () => {
        E.removeEventListener(ir, S), E.removeEventListener("click", N);
      };
    }, [M]);
    const W = () => {
      if (p) return;
      if (A) {
        D(!1);
        return;
      }
      he().dispatchEvent(
        new CustomEvent(ir, {
          detail: { id: M }
        })
      ), D(!0);
    }, R = () => {
      if (o) {
        const E = o.find((S) => S.value === g);
        return E == null ? void 0 : E.label;
      }
      if (h) {
        const S = Sr.toArray(h).find(
          (N) => nr(N) && "value" in N.props && N.props.value === g
        );
        return nr(S) ? S.props.children : null;
      }
      return null;
    }, C = (E) => {
      p || (v == null || v(E), D(!1));
    }, T = () => o ? o.map((E) => /* @__PURE__ */ e.jsx(
      Qe,
      {
        value: E.value,
        disabled: E.disabled,
        selected: E.value === g,
        onClick: () => C(E.value),
        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          E.icon,
          E.label
        ] })
      },
      E.value
    )) : h ? Sr.map(h, (E) => nr(E) && "value" in E.props ? jt(E, {
      selected: E.props.value === g,
      onClick: () => C(E.props.value)
    }) : null) : null, G = () => {
      if (!A || p) return null;
      const E = /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: _,
          className: b(
            "fixed z-[9999] min-w-[8rem] border border-neutral-200 bg-white py-1 shadow-lg",
            {
              "rounded-none": s === "none",
              "rounded-sm": s === "sm",
              "rounded-md": s === "md",
              "rounded-lg": s === "lg",
              "rounded-xl": s === "full"
            },
            u === "left" || u === "right" ? "w-max" : "w-full"
          ),
          onClick: (N) => N.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: T()
        }
      ), S = he();
      return "body" in S ? Le(E, S.body) : null;
    };
    return /* @__PURE__ */ e.jsxs("div", { className: b(j ? "w-full" : "inline-block"), ref: $, ...y, children: [
      l && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: M,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            l,
            c && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: b("relative", !j && "inline-block"),
          onClick: W,
          children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                id: M,
                ref: V,
                type: "button",
                className: b(
                  _a({ variant: d ? "error" : t, size: a, rounded: s, fullWidth: j }),
                  "flex items-center justify-between",
                  p && "cursor-not-allowed opacity-50",
                  m && "pl-10",
                  x && "pr-10",
                  r
                ),
                "aria-haspopup": "listbox",
                "aria-expanded": A,
                "aria-describedby": d ? `${M}-error` : i ? `${M}-helper` : void 0,
                disabled: p,
                children: [
                  m && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ e.jsx(U, { icon: m, className: "w-4 h-4" }) }),
                  /* @__PURE__ */ e.jsx("span", { className: "flex items-center text-neutral gap-2 min-w-0 flex-1", children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: R() || f }) }),
                  x ? /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ e.jsx(U, { icon: x, className: "w-4 h-4" }) }) : /* @__PURE__ */ e.jsx(
                    U,
                    {
                      icon: "mdi:chevron-down",
                      className: b("transition-transform flex-shrink-0 ml-2", A && "rotate-180")
                    }
                  )
                ]
              }
            ),
            G()
          ]
        }
      ),
      d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: `${M}-error`, children: d }),
      !d && i && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: `${M}-helper`, children: i })
    ] });
  }
);
Xr.displayName = "Select";
const Da = ({
  currentPage: r,
  totalPages: t,
  totalData: a,
  onPageChange: s,
  siblingCount: o = 1,
  className: l,
  perPageOptions: d,
  perPage: i = 10,
  label: c = "",
  onPerPageChange: f
}) => {
  const g = (u, j) => {
    const h = j - u + 1;
    return Array.from({ length: h }, (m, x) => x + u);
  }, p = (() => {
    const u = o * 2 + 3, j = u + 2;
    if (t > j) {
      const h = Math.max(2, r - o), m = Math.min(t - 1, r + o);
      let x = g(h, m);
      const y = h > 2, $ = t - m > 1, A = u - (x.length + 1);
      if (y && !$)
        x = [...g(h - A, h - 1), ...x];
      else if (!y && $) {
        const D = g(m + 1, m + A);
        x = [...x, ...D];
      } else y && $ && (x = [...x]);
      return [1, ...x, t];
    }
    return g(1, t);
  })();
  return /* @__PURE__ */ e.jsxs(
    "nav",
    {
      className: ee("flex items-center justify-between space-x-1", l),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "hidden sm:block text-sm text-neutral-700", children: [
          /* @__PURE__ */ e.jsx("b", { children: `${r} - ${t}` }),
          " dari ",
          a,
          " ",
          c
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          d && d.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 mr-4", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-neutral-700 text-sm", children: "Menampilkan" }),
            /* @__PURE__ */ e.jsx(
              Xr,
              {
                value: i == null ? void 0 : i.toString(),
                onChange: (u) => f && f(Number(u)),
                size: "sm",
                className: "w-16",
                fullWidth: !1,
                "aria-label": "Items per page",
                children: d.map((u) => /* @__PURE__ */ e.jsx(Qe, { value: u.toString(), children: u }, u))
              }
            ),
            /* @__PURE__ */ e.jsx("span", { className: "text-neutral-700 text-sm", children: "data per halaman" })
          ] }),
          /* @__PURE__ */ e.jsx(
            ke,
            {
              variant: "ghost",
              onClick: () => s(r - 1),
              disabled: r === 1,
              className: ee(
                "px-3 py-1 rounded-md text-sm",
                r === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              ),
              children: /* @__PURE__ */ e.jsx(U, { size: "18", icon: "mdi:chevron-left" })
            }
          ),
          p.map((u, j) => {
            const h = u === r, m = typeof u == "string" && u === "...";
            return /* @__PURE__ */ e.jsx(
              ke,
              {
                variant: "ghost",
                onClick: () => !m && s(u),
                className: ee(
                  "px-3 py-1 rounded-md text-sm",
                  h ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  m && "cursor-default"
                ),
                children: u
              },
              j
            );
          }),
          /* @__PURE__ */ e.jsx(
            ke,
            {
              variant: "ghost",
              onClick: () => s(r + 1),
              disabled: r === t,
              className: ee(
                "px-3 py-1 rounded-md text-sm",
                r === t ? "text-gray-400 cursor-not-allowed" : "text-gray-700"
              ),
              children: /* @__PURE__ */ e.jsx(U, { size: "18", icon: "mdi:chevron-right" })
            }
          )
        ] })
      ]
    }
  );
}, Cs = ({
  label: r,
  checked: t = !1,
  disabled: a = !1,
  onChange: s,
  name: o,
  value: l
}) => {
  const d = (i) => {
    s && s(i.target.checked);
  };
  return /* @__PURE__ */ e.jsxs(
    "label",
    {
      className: ee(
        "inline-flex items-center cursor-pointer",
        a && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "radio",
            className: ee(
              "w-5 h-5 border-2 rounded-full appearance-none",
              "focus:outline-none focus:ring-2 focus:ring-primary/25",
              t ? "border-primary bg-primary" : "border-gray-300 hover:border-primary",
              a && "cursor-not-allowed"
            ),
            checked: t,
            disabled: a,
            onChange: d,
            name: o,
            value: l
          }
        ),
        r && /* @__PURE__ */ e.jsx("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-300", children: r })
      ]
    }
  );
}, Oa = ye(
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
), La = ({
  width: r,
  height: t,
  variant: a = "default",
  rounded: s = "md",
  fullWidth: o = !1,
  className: l
}) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: b(Oa({ variant: a, rounded: s, fullWidth: o }), l),
    style: {
      width: !o && typeof r == "number" ? `${r}px` : r,
      height: typeof t == "number" ? `${t}px` : t
    }
  }
), Rs = ({
  min: r = 0,
  max: t = 100,
  step: a = 1,
  value: s,
  defaultValue: o = r,
  onChange: l,
  className: d,
  disabled: i = !1,
  showValue: c = !1,
  marks: f = []
}) => {
  const [g, v] = re(o), [p, u] = re(!1), j = pe(null), h = s !== void 0 ? s : g, m = (V) => {
    if (i) return;
    const _ = Math.min(Math.max(V, r), t);
    s === void 0 && v(_), l == null || l(_);
  }, x = (V) => {
    i || (u(!0), A(V));
  }, y = (V) => {
    !p || i || A(V);
  }, $ = () => {
    u(!1);
  }, A = (V) => {
    if (!j.current) return;
    const _ = j.current.getBoundingClientRect(), M = (V.clientX - _.left) / _.width, I = r + (t - r) * M, W = Math.round(I / a) * a;
    m(W);
  };
  xe(() => {
    if (p) {
      const V = Se();
      V.addEventListener("mousemove", y), V.addEventListener("mouseup", $);
    }
    return () => {
      const V = Se();
      V.removeEventListener("mousemove", y), V.removeEventListener("mouseup", $);
    };
  }, [p]);
  const D = (h - r) / (t - r) * 100;
  return /* @__PURE__ */ e.jsxs("div", { className: ee("relative w-full", d), children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: j,
        className: ee(
          "relative h-2 bg-gray-200 rounded-full cursor-pointer",
          i && "opacity-50 cursor-not-allowed"
        ),
        onMouseDown: x,
        children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute h-full bg-primary rounded-full",
              style: { width: `${D}%` }
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: ee(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                i && "cursor-not-allowed"
              ),
              style: { left: `${D}%`, transform: "translate(-50%, -50%)" }
            }
          )
        ]
      }
    ),
    f.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex justify-between mt-2", children: f.map((V) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "text-xs text-gray",
        style: { left: `${(V.value - r) / (t - r) * 100}%` },
        children: V.label
      },
      V.value
    )) }),
    c && /* @__PURE__ */ e.jsx("div", { className: "mt-2 text-sm text-gray-600", children: h })
  ] });
}, $a = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}, Va = {
  primary: "text-primary",
  warning: "text-warning",
  default: "text-default-400"
}, Ms = ({
  rating: r,
  maxRating: t = 5,
  size: a = "md",
  color: s = "primary",
  readOnly: o = !1,
  onRatingChange: l,
  className: d
}) => {
  const [i, c] = re(null), f = (u) => {
    o || c(u);
  }, g = () => {
    o || c(null);
  }, v = (u) => {
    !o && l && l(u);
  }, p = i !== null ? i : r;
  return /* @__PURE__ */ e.jsx("div", { className: b("flex items-center gap-1", d), children: [...Array(t)].map((u, j) => {
    const h = j + 1, m = h <= p, x = i !== null && h <= i;
    return /* @__PURE__ */ e.jsx(
      "button",
      {
        className: b(
          "transition-colors duration-200",
          $a[a],
          m || x ? Va[s] : "text-default-200",
          !o && "cursor-pointer"
        ),
        onMouseEnter: () => f(h),
        onMouseLeave: g,
        onClick: () => v(h),
        disabled: o,
        "aria-label": `Rate ${h} out of ${t}`,
        children: /* @__PURE__ */ e.jsx(
          U,
          {
            icon: m || x ? "mdi:star" : "mdi:star-outline",
            className: "w-full h-full"
          }
        )
      },
      j
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
}, Fa = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4"
}, zs = ({
  status: r,
  size: t = "md",
  withLabel: a = !1,
  className: s
}) => {
  const { bgColor: o, label: l } = Ba[r], d = Fa[t];
  return /* @__PURE__ */ e.jsxs("div", { className: b("flex items-center gap-2", s), children: [
    /* @__PURE__ */ e.jsx("div", { className: b("rounded-full animate-pulse", o, d) }),
    a && /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: l })
  ] });
}, Qr = (r, t) => {
  if (t) return t;
  switch (r) {
    case "completed":
      return "mdi:check";
    case "active":
      return "mdi:circle-medium";
    default:
      return "mdi:circle-outline";
  }
}, et = (r) => {
  switch (r) {
    case "completed":
      return "text-white bg-primary ring-4 ring-primary-50";
    case "active":
      return "text-primary bg-primary-50 ring-4 ring-primary-50";
    default:
      return "text-neutral bg-neutral-50 ring-4 ring-neutral-50";
  }
}, Wa = ({
  steps: r,
  activeStep: t,
  className: a,
  variant: s = "default"
}) => /* @__PURE__ */ e.jsx("div", { className: b("flex flex-row items-center w-full justify-between", a), children: r.map((o, l) => {
  const d = l < t ? "completed" : l === t ? "active" : "pending";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "flex items-center flex-1",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: b(
          "flex flex-col items-center z-10",
          s === "default" ? "gap-4" : "gap-2",
          s === "default" ? "px-5" : "px-3"
        ), children: [
          s === "default" && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: b(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                et(d)
              ),
              children: /* @__PURE__ */ e.jsx(
                U,
                {
                  icon: Qr(d, o.icon),
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
                  d === "active" ? "text-primary" : d === "completed" ? "text-neutral-900" : "text-neutral"
                ),
                children: o.label
              }
            ),
            o.description && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-neutral", children: o.description })
          ] })
        ] }),
        l < r.length - 1 && /* @__PURE__ */ e.jsx(
          Aa,
          {
            className: b(
              "transition-all duration-200",
              l < t ? "bg-primary" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    l
  );
}) }), Ha = ({
  steps: r,
  activeStep: t,
  className: a,
  variant: s = "default"
}) => /* @__PURE__ */ e.jsx("div", { className: b("flex flex-col items-start gap-8", a), children: r.map((o, l) => {
  const d = l < t ? "completed" : l === t ? "active" : "pending";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "flex flex-row w-full items-center relative",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: b(
          "flex flex-row items-center z-10",
          s === "default" ? "gap-4" : "gap-2"
        ), children: [
          s === "default" && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: b(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                et(d)
              ),
              children: /* @__PURE__ */ e.jsx(
                U,
                {
                  icon: Qr(d, o.icon),
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
                  d === "active" ? "text-primary00" : d === "completed" ? "text-neutral-900" : "text-neutral"
                ),
                children: o.label
              }
            ),
            o.description && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-neutral", children: o.description })
          ] })
        ] }),
        l < r.length - 1 && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: b(
              "absolute transition-all duration-200",
              s === "default" ? "left-4 w-[1px] top-10 bottom-[-24px]" : "left-0 w-[1px] top-6 bottom-[-24px]",
              l < t ? "bg-primary" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    l
  );
}) }), As = ({
  orientation: r = "horizontal",
  variant: t = "default",
  ...a
}) => r === "vertical" ? /* @__PURE__ */ e.jsx(Ha, { variant: t, ...a }) : /* @__PURE__ */ e.jsx(Wa, { variant: t, ...a }), Ts = ({
  label: r,
  checked: t = !1,
  disabled: a = !1,
  onChange: s,
  size: o = "md"
}) => {
  const l = (c) => {
    s && s(c.target.checked);
  }, d = {
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
      className: ee(
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
              checked: t,
              disabled: a,
              onChange: l
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: ee(
                "block rounded-full transition-colors duration-200 ease-in-out",
                d[o],
                t ? "bg-primary" : "bg-gray-200 dark:bg-gray-700",
                a && "cursor-not-allowed"
              )
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: ee(
                "absolute rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out",
                i[o],
                t ? o === "sm" ? "translate-x-4" : o === "md" ? "translate-x-5" : "translate-x-7" : "translate-x-0.5",
                "top-1/2 -translate-y-1/2"
              )
            }
          )
        ] }),
        r && /* @__PURE__ */ e.jsx("span", { className: "ml-3 text-sm text-gray-700 dark:text-gray-300", children: r })
      ]
    }
  );
}, Is = ({
  items: r,
  defaultActiveId: t,
  variant: a = "default",
  size: s = "md",
  className: o,
  tabListClassName: l,
  tabClassName: d,
  contentClassName: i,
  onChange: c
}) => {
  var j, h;
  const [f, g] = re(t || ((j = r[0]) == null ? void 0 : j.id) || ""), v = Ie((m) => {
    g(m), c == null || c(m);
  }, [c]), p = () => {
    switch (s) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  }, u = (m, x) => {
    const y = ee(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      p(),
      x && "opacity-50 cursor-not-allowed",
      !x && "cursor-pointer"
    );
    switch (a) {
      case "pills":
        return ee(
          y,
          "rounded-full",
          m ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return ee(
          y,
          "border-b-2",
          m ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      default:
        return ee(
          y,
          "border-b-2",
          m ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: ee("w-full", o), children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: ee(
          "flex space-x-1 border-b border-gray-200 dark:border-gray-700",
          a === "pills" && "space-x-2 border-b-0",
          l
        ),
        children: r.map((m) => {
          const x = m.id === f, y = !!m.disabled;
          return /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => !y && v(m.id),
              disabled: y,
              className: ee(
                u(x, y),
                d
              ),
              children: [
                m.icon && /* @__PURE__ */ e.jsx(
                  U,
                  {
                    icon: m.icon,
                    className: "w-5 h-5 flex-shrink-0"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { children: m.label })
              ]
            },
            m.id
          );
        })
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: ee("mt-4", i), children: (h = r.find((m) => m.id === f)) == null ? void 0 : h.content })
  ] });
}, Ga = ({
  variant: r = "p",
  children: t,
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
  }, d = s || ((i) => {
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
  })(r);
  return /* @__PURE__ */ e.jsx(d, { className: b("text-gray-900", o[r], a), children: t });
}, cr = "timepicker-dropdown-opened", Ya = ye(
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
), rt = ve(
  ({
    value: r,
    onChange: t,
    use24Hour: a = !1,
    variant: s = "default",
    size: o = "md",
    rounded: l = "md",
    disabled: d = !1,
    errorText: i,
    helperText: c,
    label: f,
    required: g = !1,
    labelPlacement: v = "top",
    fullWidth: p = !1,
    className: u,
    placeholder: j = "Select time",
    leftIcon: h,
    rightIcon: m,
    valueFormatter: x,
    closeOnSelect: y = !0,
    ...$
  }, A) => {
    const [D, V] = re(!1), [_, k] = re(r || ""), [M, I] = re(0), [W, R] = re(0), [C, T] = re(!0), G = pe(null), E = pe(null), S = pe(null), L = `timepicker-${Me.useId().replace(/:/g, "")}`, K = () => {
      if (!D || !E.current || !S.current) return;
      const H = E.current.getBoundingClientRect(), te = S.current, je = Se().innerHeight - H.bottom;
      te.style.top = `${H.bottom + 4}px`, te.style.bottom = "auto", te.style.left = `${H.left}px`, te.style.maxHeight = `${je - 8}px`, te.style.width = `${H.width}px`;
    };
    xe(() => {
      const H = Se(), te = he(), Ce = () => {
        D && K();
      }, je = () => {
        D && K();
      }, Ae = (O) => {
        O.detail.id !== L && V(!1);
      }, X = (O) => {
        const Z = O.target;
        G.current && S.current && !G.current.contains(Z) && !S.current.contains(Z) && V(!1);
      };
      return D && (K(), H.addEventListener("scroll", Ce, !0), H.addEventListener("resize", je)), te.addEventListener(cr, Ae), te.addEventListener("mousedown", X), () => {
        H.removeEventListener("scroll", Ce, !0), H.removeEventListener("resize", je), te.removeEventListener(cr, Ae), te.removeEventListener("mousedown", X);
      };
    }, [D, L]);
    const P = () => {
      d || (D || he().dispatchEvent(
        new CustomEvent(cr, {
          detail: { id: L }
        })
      ), V(!D));
    };
    xe(() => {
      if (r) {
        k(r);
        const [H, te] = r.split(":").map(Number);
        a ? I(H) : (I(H % 12 || 12), T(H < 12)), R(te);
      }
    }, [r, a]);
    const B = () => {
      const te = `${(a || C ? M : M + 12).toString().padStart(2, "0")}:${W.toString().padStart(2, "0")}`;
      k(te), t == null || t(te), y && V(!1);
    }, ue = () => a ? Array.from({ length: 24 }, (H, te) => te) : Array.from({ length: 12 }, (H, te) => te + 1), de = () => Array.from({ length: 60 }, (H, te) => te), be = x ? x(_) : _, ie = he();
    return "body" in ie ? /* @__PURE__ */ e.jsxs("div", { ref: G, className: b("relative", p && "w-full", u), children: [
      f && /* @__PURE__ */ e.jsxs(
        "label",
        {
          className: b(
            "block text-sm font-medium text-gray-700 mb-1",
            v === "left" && "inline-block mr-2"
          ),
          children: [
            f,
            g && /* @__PURE__ */ e.jsx("span", { className: "text-red ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: E,
          className: "relative",
          onClick: P,
          children: [
            h && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ e.jsx(U, { icon: h, size: 20 }) }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: A,
                type: "text",
                value: be,
                placeholder: j,
                readOnly: !0,
                className: b(
                  Ya({ variant: s, size: o, rounded: l, fullWidth: p }),
                  h && "pl-10",
                  m && "pr-10",
                  "text-left"
                ),
                disabled: d,
                ...$
              }
            ),
            m && /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ e.jsx(U, { icon: m, size: 20 }) })
          ]
        }
      ),
      D && Le(
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: S,
            className: "fixed z-[9999] w-fit rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (H) => H.stopPropagation(),
            children: /* @__PURE__ */ e.jsxs("div", { className: "p-0", children: [
              /* @__PURE__ */ e.jsxs(br, { variant: "ghost", className: b(
                "flex mx-2 my-1 p-0",
                a ? "justify-start gap-8" : "justify-start gap-4"
              ), children: [
                /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2", children: ue().map((H) => /* @__PURE__ */ e.jsx(
                  ke,
                  {
                    variant: "ghost",
                    onClick: () => I(H),
                    className: b(M === H && "bg-primary text-white"),
                    children: H.toString().padStart(2, "0")
                  },
                  H
                )) }) }) }),
                /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2", children: de().map((H) => /* @__PURE__ */ e.jsx(
                  ke,
                  {
                    variant: "ghost",
                    onClick: () => R(H),
                    className: b(W === H && "bg-primary text-white"),
                    children: H.toString().padStart(2, "0")
                  },
                  H
                )) }) }) }),
                !a && /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ e.jsx(
                    ke,
                    {
                      variant: "ghost",
                      onClick: () => T(!0),
                      className: b(C && "bg-primary text-white"),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    ke,
                    {
                      variant: "ghost",
                      onClick: () => T(!1),
                      className: b(!C && "bg-primary text-white"),
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
        ie.body
      ),
      i && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-danger-600", children: i }),
      c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-gray", children: c })
    ] }) : null;
  }
);
rt.displayName = "PrimitiveTimePicker";
const Ua = ({
  value: r,
  onChange: t,
  valueFormatter: a,
  closeOnSelect: s,
  ...o
}) => /* @__PURE__ */ e.jsx(
  rt,
  {
    value: r,
    onChange: t,
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
), Za = ve(
  ({
    checked: r = !1,
    onCheckedChange: t,
    variant: a = "primary",
    size: s = "md",
    label: o,
    required: l = !1,
    helperText: d,
    errorText: i,
    error: c = !1,
    className: f,
    ...g
  }, v) => {
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
            ref: v,
            className: b(Ka({ variant: c ? "danger" : a, size: s }), f),
            "aria-describedby": c ? j : d ? u : void 0,
            "aria-invalid": c,
            "aria-required": l,
            ...g,
            children: /* @__PURE__ */ e.jsx(
              "span",
              {
                "data-state": r ? "checked" : "unchecked",
                className: b(
                  qa({ size: s }),
                  r ? "translate-x-5" : "translate-x-1"
                )
              }
            )
          }
        ),
        o && /* @__PURE__ */ e.jsxs(
          "label",
          {
            htmlFor: p,
            className: "text-sm text-neutral-900",
            children: [
              o,
              l && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ]
          }
        )
      ] }),
      c && i && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-danger", id: j, children: i }),
      !c && d && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-neutral", id: u, children: d })
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
}), Ps = ({
  content: r,
  children: t,
  position: a = "top",
  delay: s = 0,
  className: o,
  color: l = "light",
  size: d = "md",
  isOpen: i,
  onOpenChange: c,
  trigger: f = "hover"
}) => {
  const [g, v] = re(!1), [p, u] = re({ top: 0, left: 0 }), j = pe(null), h = pe(null), m = pe(), x = i !== void 0, y = x ? i : g, $ = () => {
    if (!j.current || !h.current) return;
    const k = h.current.getBoundingClientRect(), M = j.current.getBoundingClientRect(), I = Se(), W = I.scrollX || I.pageXOffset, R = I.scrollY || I.pageYOffset;
    let C = 0, T = 0;
    const G = 8;
    switch (a) {
      case "top":
        C = k.top + R - M.height - G, T = k.left + W + (k.width - M.width) / 2;
        break;
      case "bottom":
        C = k.bottom + R + G, T = k.left + W + (k.width - M.width) / 2;
        break;
      case "left":
        C = k.top + R + (k.height - M.height) / 2, T = k.left + W - M.width - G;
        break;
      case "right":
        C = k.top + R + (k.height - M.height) / 2, T = k.right + W + G;
        break;
    }
    const E = I.innerWidth, S = I.innerHeight;
    T < 0 && (T = 0), T + M.width > E && (T = E - M.width), C < 0 && (C = 0), C + M.height > S && (C = S - M.height), u({ top: C, left: T });
  };
  xe(() => {
    if (y) {
      $();
      const k = Se();
      k.addEventListener("scroll", $, !0), k.addEventListener("resize", $);
    }
    return () => {
      const k = Se();
      k.removeEventListener("scroll", $, !0), k.removeEventListener("resize", $);
    };
  }, [y, a]);
  const A = () => {
    x ? c == null || c(!0) : m.current = setTimeout(() => {
      v(!0);
    }, s);
  }, D = () => {
    m.current && clearTimeout(m.current), x ? c == null || c(!1) : v(!1);
  }, V = (k) => {
    k.stopPropagation(), f === "click" && (x ? c == null || c(!i) : v(!g));
  };
  xe(() => {
    const k = (M) => {
      f === "click" && j.current && !j.current.contains(M.target) && h.current && !h.current.contains(M.target) && D();
    };
    return y && document.addEventListener("click", k), () => {
      document.removeEventListener("click", k);
    };
  }, [y, f]);
  const _ = () => {
    if (!y) return null;
    const k = he();
    return "body" in k ? Le(
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: j,
          className: b(Ja({ color: l, size: d }), o),
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
      k.body
    ) : null;
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: h,
      className: "relative inline-block",
      onMouseEnter: f === "hover" ? A : void 0,
      onMouseLeave: f === "hover" ? D : void 0,
      onClick: V,
      children: [
        t,
        _()
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
}, rs = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  info: "bg-info"
}, ts = {
  primary: "#007C99",
  // Tailwind primary
  secondary: "#CEEAE7",
  success: "#00B37D",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#0EA5E9"
}, as = Me.forwardRef(
  ({
    className: r,
    variant: t = "bar",
    color: a = "primary",
    size: s = "md",
    value: o = 0,
    isIndeterminate: l = !1,
    showValue: d = !1,
    label: i,
    rounded: c = "full",
    icon: f,
    ...g
  }, v) => {
    const p = Math.min(Math.max(o, 0), 100), u = es[s], j = s === "sm" ? 2 : s === "md" ? 3 : 4, h = (u - j) / 2, m = 2 * Math.PI * h, x = m - p / 100 * m;
    let y = "";
    return t === "loading" ? y = "rounded-full" : c ? y = c === "none" ? "" : `rounded-${c}` : y = "rounded-md", t === "circular" ? /* @__PURE__ */ e.jsxs("div", { className: "inline-flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative", style: { width: u, height: u }, children: [
        /* @__PURE__ */ e.jsxs(
          "svg",
          {
            className: b(
              "transform -rotate-90",
              l ? "animate-spin" : ""
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
                  r: h,
                  cx: u / 2,
                  cy: u / 2
                }
              ),
              /* @__PURE__ */ e.jsx(
                "circle",
                {
                  className: b(
                    "transition-all duration-300 ease-in-out",
                    l ? "animate-dash" : ""
                  ),
                  strokeWidth: j,
                  strokeDasharray: m,
                  strokeDashoffset: l ? 0 : x,
                  strokeLinecap: "round",
                  stroke: ts[a],
                  fill: "transparent",
                  r: h,
                  cx: u / 2,
                  cy: u / 2
                }
              )
            ]
          }
        ),
        f && /* @__PURE__ */ e.jsx("span", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ e.jsx(U, { icon: f, size: u * 0.5 }) }),
        d && !l && !f && /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 flex items-center justify-center text-xs font-medium", children: [
          Math.round(p),
          "%"
        ] })
      ] }),
      i && /* @__PURE__ */ e.jsx("span", { className: "text-sm text-neutral-600", children: i })
    ] }) : /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: v,
          className: b(Qa({ variant: t === "loading" ? "bar" : t, size: s }), y, r),
          role: "progressbar",
          "aria-valuenow": l ? void 0 : p,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...g,
          children: /* @__PURE__ */ e.jsx(
            "div",
            {
              className: b(
                "h-full transition-all duration-300 ease-in-out",
                l ? "animate-progress-indeterminate" : "",
                rs[a],
                y
              ),
              style: {
                width: l ? "100%" : `${p}%`
              }
            }
          )
        }
      ),
      (d || i) && /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between text-xs text-neutral-600", children: [
        i && /* @__PURE__ */ e.jsx("span", { children: i }),
        d && !l && /* @__PURE__ */ e.jsxs("span", { children: [
          Math.round(p),
          "%"
        ] })
      ] })
    ] });
  }
);
as.displayName = "Progress";
const dr = [
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
), ns = ve(
  ({
    className: r,
    variant: t = "default",
    size: a = "md",
    rounded: s = "md",
    error: o = !1,
    errorText: l,
    helperText: d,
    label: i,
    required: c = !1,
    fullWidth: f = !1,
    value: g = "",
    onChange: v,
    disabled: p = !1,
    defaultCountry: u = "id",
    ...j
  }) => {
    const [h, m] = re(!1), [x, y] = re(
      () => dr.find((N) => N.iso === u) || dr[0]
    ), [$, A] = re(""), [D, V] = re(() => {
      const N = x.code;
      return g.startsWith(N) ? g.slice(N.length) : g;
    }), _ = pe(null), k = pe(null), M = Me.useId(), I = `${M}-helper`, W = `${M}-error`, R = dr.filter(
      (N) => N.name.toLowerCase().includes($.toLowerCase()) || N.code.includes($)
    ), C = pe(null), T = () => {
      if (h && _.current && k.current) {
        const N = _.current.getBoundingClientRect(), L = k.current, K = typeof window < "u" ? window : { innerHeight: 0 }, P = K.innerHeight - N.bottom, B = N.top, de = N.bottom + (L.offsetHeight || 0) + 4 >= K.innerHeight, be = B > P, ie = de && be;
        L.style.position = "fixed", L.style.left = `${N.left}px`, L.style.minWidth = `${N.width}px`, L.style.maxWidth = "340px", L.style.width = "auto", ie ? (L.style.bottom = `${K.innerHeight - N.top + 4}px`, L.style.top = "auto", L.style.maxHeight = `${B - 8}px`) : (L.style.top = `${N.bottom + 4}px`, L.style.bottom = "auto", L.style.maxHeight = `${P - 8}px`);
      }
    };
    xe(() => {
      const N = typeof window < "u" ? window : void 0, L = () => {
        h && T();
      }, K = () => {
        h && T();
      };
      return h && (T(), N == null || N.addEventListener("scroll", L, !0), N == null || N.addEventListener("resize", K)), () => {
        N == null || N.removeEventListener("scroll", L, !0), N == null || N.removeEventListener("resize", K);
      };
    }, [h]), xe(() => {
      if (!h) return;
      const N = (L) => {
        const K = L.target;
        _.current && k.current && !_.current.contains(K) && !k.current.contains(K) && m(!1);
      };
      return document.addEventListener("click", N), () => document.removeEventListener("click", N);
    }, [h]);
    const G = (N) => {
      y(N), m(!1), A("");
      const L = N.code + D;
      v == null || v(L);
    }, E = (N) => {
      const L = N.target.value.replace(/[^\d]/g, "");
      V(L);
      const K = x.code + L;
      v == null || v(K);
    }, S = b(
      ss({
        variant: o ? "error" : t,
        size: a,
        rounded: s,
        fullWidth: f
      }),
      "!w-full"
    );
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: C,
        className: b(f ? "w-full" : "inline-block", r),
        ...j,
        children: [
          i && /* @__PURE__ */ e.jsxs("label", { htmlFor: M, className: "mb-1.5 block text-sm text-neutral-900", children: [
            i,
            c && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: b("relative", !f && "inline-block"), children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex", children: [
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  ref: _,
                  onClick: () => !p && m(!h),
                  className: b(
                    S,
                    "flex items-center gap-2 rounded-r-none justify-between max-w-[100px]",
                    p && "cursor-not-allowed opacity-50"
                  ),
                  children: [
                    /* @__PURE__ */ e.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ e.jsx(U, { icon: x.flag, className: "w-5 h-5" }),
                      /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: x.code })
                    ] }),
                    /* @__PURE__ */ e.jsx(
                      U,
                      {
                        icon: "mdi:chevron-down",
                        className: b("transition-transform", h && "rotate-180")
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "tel",
                  id: M,
                  value: D,
                  onChange: E,
                  disabled: p,
                  className: b(
                    S,
                    "rounded-l-none flex-1 min-w-0 w-full"
                  ),
                  placeholder: "Enter phone number"
                }
              )
            ] }),
            h && Le(
              /* @__PURE__ */ e.jsxs(
                "div",
                {
                  ref: k,
                  className: b(
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
                        value: $,
                        onChange: (N) => A(N.target.value),
                        placeholder: "Search countries...",
                        className: "w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:border-primary-300"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "max-h-[300px] overflow-y-auto", children: R.map((N) => /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => G(N),
                        className: b(
                          "w-full px-3 py-2 text-sm text-left hover:bg-primary-50 cursor-pointer",
                          x.iso === N.iso && "bg-primary-50"
                        ),
                        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ e.jsx(U, { icon: N.flag, className: "w-5 h-5" }),
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
          o && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: W, children: l }),
          !o && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: I, children: d })
        ]
      }
    );
  }
);
ns.displayName = "PhoneInput";
const os = ye("flex items-center text-sm", {
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
}), ls = ve(
  ({
    className: r,
    variant: t = "default",
    size: a = "md",
    items: s,
    separator: o = /* @__PURE__ */ e.jsx(U, { icon: "mdi:slash-forward", className: "h-4 w-4 flex-shrink-0" }),
    activeLastItem: l = !0,
    ...d
  }, i) => /* @__PURE__ */ e.jsx(
    "nav",
    {
      ref: i,
      className: b(os({ variant: t, size: a }), r),
      "aria-label": "Breadcrumb",
      ...d,
      children: /* @__PURE__ */ e.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: s.map((c, f) => {
        const g = f === s.length - 1, v = g && l;
        return /* @__PURE__ */ e.jsxs(
          "li",
          {
            className: b(
              "flex items-center gap-1.5",
              v && "text-primary font-medium"
            ),
            children: [
              c.icon && /* @__PURE__ */ e.jsx(
                U,
                {
                  icon: c.icon,
                  className: b(
                    "flex-shrink-0",
                    a === "sm" && "h-3.5 w-3.5",
                    a === "md" && "h-4 w-4",
                    a === "lg" && "h-5 w-5"
                  )
                }
              ),
              c.href && !v ? /* @__PURE__ */ e.jsx(
                "a",
                {
                  href: c.href,
                  className: b(
                    "transition-colors duration-200",
                    "hover:text-primary hover:underline focus:outline-none",
                    "focus-visible:text-primary focus-visible:underline",
                    "active:text-primary-600"
                  ),
                  children: /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[200px] inline-block align-bottom", children: c.label })
                }
              ) : /* @__PURE__ */ e.jsx("span", { className: b(
                "truncate max-w-[200px] inline-block",
                v && "text-primary"
              ), children: c.label }),
              !g && /* @__PURE__ */ e.jsx("span", { className: b(
                "text-neutral-400 flex-shrink-0",
                a === "sm" && "scale-90",
                a === "lg" && "scale-110"
              ), children: o })
            ]
          },
          c.label
        );
      }) })
    }
  )
);
ls.displayName = "Breadcrumbs";
const tt = (r) => {
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
}, is = ({ schema: r, variant: t = "primary" }) => {
  const a = [{ name: "no", label: "No.", accessorKey: "no", type: "number" }, ...r], s = tt(t);
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white rounded-md", children: /* @__PURE__ */ e.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full border-spacing-0 border-separate", children: [
    /* @__PURE__ */ e.jsx("thead", { className: b("border-2 sticky top-0 z-10 rounded-t-md", s.border), children: /* @__PURE__ */ e.jsx("tr", { children: a.map((o, l) => /* @__PURE__ */ e.jsx(
      "th",
      {
        className: b(
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
        className: b("p-3", {
          [s.stripe]: l % 2 !== 0,
          "bg-white": l % 2 === 0
        }),
        children: a.map((d, i) => /* @__PURE__ */ e.jsx(
          "td",
          {
            className: "text-left text-nowrap text-sm p-4",
            children: /* @__PURE__ */ e.jsx(La, { className: "h-10 w-full rounded-md" })
          },
          `${l}-${i}`
        ))
      },
      l
    )) })
  ] }) }) });
}, _s = ({
  schema: r,
  data: t,
  className: a,
  headerClassName: s,
  rowClassName: o,
  cellClassName: l,
  emptyState: d,
  isLoading: i,
  loadingState: c,
  showIndex: f = !1,
  onPageChange: g,
  onPageSizeChange: v,
  onSortChange: p,
  onRowClick: u,
  showPagination: j = !1,
  variant: h = "primary",
  meta: m = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [x, y] = re(() => {
    const _ = r.find((k) => k.sortable && k.sort);
    return _ ? [{
      id: _.accessorKey.toString(),
      desc: _.sort === "desc"
    }] : [];
  }), $ = Me.useMemo(() => {
    const _ = r.map((k) => ({
      accessorKey: k.accessorKey,
      header: k.label,
      enableSorting: !!k.sortable,
      cell: k.render ? ({ row: M }) => {
        var I;
        return (I = k.render) == null ? void 0 : I.call(k, M.original[k.accessorKey], M.original, M.index);
      } : ({ row: M }) => M.original[k.accessorKey] || "-",
      meta: {
        align: k.align || "left"
      }
    }));
    return f ? [{
      accessorKey: "no",
      header: "No.",
      enableSorting: !1,
      cell: ({ row: k }) => (m.current_page - 1) * m.limit_number + k.index + 1,
      meta: {
        align: "left"
      }
    }, ..._] : _;
  }, [r, f, m]), A = St({
    data: t,
    columns: $,
    state: {
      sorting: x
    },
    onSortingChange: (_) => {
      const k = typeof _ == "function" ? _(x) : _;
      y(k), k.length > 0 ? p == null || p(k[0].desc ? "desc" : "asc", k[0].id) : p == null || p("", "");
    },
    getCoreRowModel: Mt(),
    getSortedRowModel: Rt(),
    getPaginationRowModel: Ct(),
    manualPagination: !0,
    pageCount: m.total_page
  }), D = tt(h);
  if (i)
    return c || /* @__PURE__ */ e.jsx(is, { schema: r, variant: h });
  const V = (_, k, M) => {
    const I = _.target;
    I.tagName === "BUTTON" || I.tagName === "A" || I.tagName === "INPUT" || I.tagName === "SELECT" || I.closest("button") !== null || I.closest("a") !== null || I.closest("input") !== null || I.closest("select") !== null || u == null || u(k, M);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-md", children: [
    /* @__PURE__ */ e.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ e.jsxs("table", { className: b("w-full border-spacing-0 border-separate", a), children: [
      /* @__PURE__ */ e.jsx("thead", { className: b("border-2 sticky top-0 z-10 rounded-t-md", D.border), children: A.getHeaderGroups().map((_) => /* @__PURE__ */ e.jsx("tr", { children: _.headers.map((k, M) => {
        var I, W, R;
        return /* @__PURE__ */ e.jsx(
          "th",
          {
            className: b(
              "text-sm text-wrap border-y p-4",
              D.header,
              {
                "cursor-pointer": k.column.getCanSort(),
                "rounded-tl-md": M === 0,
                "rounded-tr-md": M === _.headers.length - 1,
                "text-left": ((I = k.column.columnDef.meta) == null ? void 0 : I.align) === "left",
                "text-center": ((W = k.column.columnDef.meta) == null ? void 0 : W.align) === "center",
                "text-right": ((R = k.column.columnDef.meta) == null ? void 0 : R.align) === "right"
              },
              s
            ),
            onClick: k.column.getCanSort() ? k.column.getToggleSortingHandler() : void 0,
            children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsx("span", { className: b({
                "font-semibold": M === 0
              }), children: Cr(k.column.columnDef.header, k.getContext()) }),
              k.column.getCanSort() && /* @__PURE__ */ e.jsx(
                U,
                {
                  icon: k.column.getIsSorted() ? k.column.getIsSorted() === "desc" ? "mdi:keyboard-arrow-up" : "mdi:keyboard-arrow-down" : "mdi:unfold-more-horizontal",
                  className: b("h-4 w-4", {
                    "text-white": h !== "ghost",
                    "text-gray-700": h === "ghost"
                  })
                }
              )
            ] })
          },
          k.id
        );
      }) }, _.id)) }),
      /* @__PURE__ */ e.jsx("tbody", { className: "max-h-[50vh]", children: A.getRowModel().rows.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx(
        "td",
        {
          colSpan: A.getAllColumns().length,
          className: b(
            "text-center border h-full w-full rounded-b-md"
          ),
          children: d || /* @__PURE__ */ e.jsxs("div", { className: "flex mx-auto w-full text-center justify-center gap-3 items-center", children: [
            /* @__PURE__ */ e.jsx("p", { children: "Data Not Found" }),
            /* @__PURE__ */ e.jsx(U, { icon: "mdi:face-frown-open", size: 34 })
          ] })
        }
      ) }) : A.getRowModel().rows.map((_, k) => /* @__PURE__ */ e.jsx(
        "tr",
        {
          className: b(
            "p-3",
            D.row,
            {
              [D.stripe]: k % 2 !== 0,
              "bg-white": k % 2 === 0,
              "cursor-pointer": u
            },
            o
          ),
          onClick: (M) => V(M, _.original, k),
          children: _.getVisibleCells().map((M) => {
            var I, W, R;
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: b(
                  "px-4 py-3 text-sm text-gray-900",
                  {
                    "text-left": ((I = M.column.columnDef.meta) == null ? void 0 : I.align) === "left",
                    "text-center": ((W = M.column.columnDef.meta) == null ? void 0 : W.align) === "center",
                    "text-right": ((R = M.column.columnDef.meta) == null ? void 0 : R.align) === "right"
                  },
                  l
                ),
                children: Cr(M.column.columnDef.cell, M.getContext())
              },
              M.id
            );
          })
        },
        _.id
      )) })
    ] }) }),
    !!t.length && j && /* @__PURE__ */ e.jsx("div", { className: "p-4 bg-white rounded-b-md", children: /* @__PURE__ */ e.jsx(
      Da,
      {
        currentPage: m.current_page,
        totalPages: m.total_page,
        totalData: m.total_data,
        onPageChange: g || (() => {
        }),
        perPage: m.limit_number,
        onPerPageChange: v || (() => {
        }),
        perPageOptions: [5, 10, 20, 50, 100],
        siblingCount: 1
      }
    ) })
  ] });
}, cs = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, at = ve(
  ({
    className: r,
    variant: t = "default",
    rounded: a = "lg",
    title: s,
    description: o,
    onClose: l,
    icon: d,
    showIcon: i = !0,
    showClose: c = !0,
    ...f
  }, g) => {
    const p = d || (i ? {
      default: "mdi:information",
      success: "mdi:check-circle",
      error: "mdi:alert-circle",
      warning: "mdi:alert",
      info: "mdi:information"
    }[t] : void 0), u = s || o;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: g,
        className: b(
          "flex",
          o ? "items-start gap-3 p-4" : "items-center gap-2 py-2.5 px-3",
          "border border-gray-200",
          cs[a],
          {
            "bg-white": t === "default",
            "bg-success-50": t === "success",
            "bg-danger-50": t === "error",
            "bg-warning-50": t === "warning",
            "bg-info-50": t === "info"
          },
          r
        ),
        ...f,
        children: [
          p && /* @__PURE__ */ e.jsx(
            U,
            {
              icon: p,
              className: b(
                "flex-shrink-0",
                o ? "h-5 w-5 mt-0.5" : "h-4 w-4",
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
          /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
            s && /* @__PURE__ */ e.jsx(
              "h3",
              {
                className: b("text-sm font-medium leading-5", {
                  "text-gray-900": t === "default",
                  "text-success-900": t === "success",
                  "text-danger-900": t === "error",
                  "text-warning-900": t === "warning",
                  "text-info-900": t === "info"
                }),
                children: s
              }
            ),
            o && /* @__PURE__ */ e.jsx(
              "p",
              {
                className: b(s ? "mt-1" : "", "text-sm leading-5", {
                  "text-gray": t === "default",
                  "text-success-700": t === "success",
                  "text-danger-700": t === "error",
                  "text-warning-700": t === "warning",
                  "text-info-700": t === "info"
                }),
                children: o
              }
            ),
            !u && /* @__PURE__ */ e.jsx("span", { className: "text-sm leading-5", children: f.children })
          ] }),
          c && l && /* @__PURE__ */ e.jsx(
            ke,
            {
              variant: "ghost",
              size: "sm",
              onClick: l,
              className: b(
                "flex-shrink-0 !p-1",
                o ? "ml-4" : "ml-2",
                {
                  "text-gray-400 hover:text-gray": t === "default",
                  "text-success-400 hover:text-success": t === "success",
                  "text-danger-400 hover:text-danger": t === "error",
                  "text-warning-400 hover:text-warning": t === "warning",
                  "text-info-400 hover:text-info": t === "info"
                }
              ),
              children: /* @__PURE__ */ e.jsx(U, { icon: "mdi:close", className: b(o ? "h-5 w-5" : "h-4 w-4") })
            }
          )
        ]
      }
    );
  }
);
at.displayName = "Toast";
const gr = Nt(void 0), ds = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, Ds = ({ children: r }) => {
  const [t, a] = re([]), s = Ie((i) => {
    a((c) => c.filter((f) => f.id !== i));
  }, []), o = Ie((i) => {
    const c = Math.random().toString(36).substr(2, 9), f = i.position || "top-right", g = i.duration || 5e3, v = {
      ...i,
      id: c,
      position: f
    };
    return a((p) => [...p, v]), g > 0 && setTimeout(() => {
      s(c);
    }, g), c;
  }, [s]), l = t.reduce((i, c) => (i[c.position] || (i[c.position] = []), i[c.position].push(c), i), {
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-right": [],
    "top-center": [],
    "bottom-center": []
  }), d = he();
  return "body" in d ? /* @__PURE__ */ e.jsxs(gr.Provider, { value: { showToast: o, removeToast: s }, children: [
    r,
    Le(
      /* @__PURE__ */ e.jsx(e.Fragment, { children: Object.entries(l).map(([i, c]) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: b(
            "fixed z-[100] flex flex-col gap-2 min-w-[320px] max-w-[420px]",
            ds[i],
            i.includes("bottom") ? "flex-col-reverse" : "flex-col"
          ),
          children: c.map((f) => /* @__PURE__ */ e.jsx(
            at,
            {
              ...f,
              onClose: () => s(f.id),
              className: "animate-slide-in"
            },
            f.id
          ))
        },
        i
      )) }),
      d.body
    )
  ] }) : /* @__PURE__ */ e.jsx(gr.Provider, { value: { showToast: o, removeToast: s }, children: r });
}, Os = () => {
  const r = Et(gr);
  if (!r)
    throw new Error("useToast must be used within a ToastProvider");
  return r;
}, us = ({
  label: r,
  value: t,
  icon: a,
  className: s
}) => /* @__PURE__ */ e.jsxs(br, { className: b(
  "flex items-center gap-4 rounded-lg w-full bg-white p-4 shadow-sm hover:bg-neutral-50 transition-shadow duration-200 justify-between",
  s
), children: [
  /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-gray", children: r }),
    /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-2xl font-semibold text-gray-900", children: t })
  ] }),
  a && /* @__PURE__ */ e.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50", children: /* @__PURE__ */ e.jsx(U, { icon: a, className: "h-6 w-6 text-primary-600" }) })
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
}, st = {
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
}, ms = {
  "no-internet": "NO_INTERNET",
  "data-not-found": "DATA_NOT_FOUND",
  "under-development": "UNDER_DEVELOPMENT",
  "information-unavailable": "INFORMATION_UNAVAILABLE",
  success: "SUCCESS",
  checked: "CHECKED"
}, _r = {
  ...fs,
  ...st
}, Dr = {
  image: "https://design-system-eaip.onrender.com/img/error.svg",
  message: "An unexpected error occurred. Our team is currently investigating the issue."
}, Or = (r) => typeof r == "object" && r !== null && ("code" in r || "message" in r), Ls = ({
  error: r,
  reload: t,
  children: a,
  className: s = "",
  variant: o,
  customImage: l,
  customMessage: d
}) => {
  if (!r && !o)
    return a ? /* @__PURE__ */ e.jsx(e.Fragment, { children: a }) : null;
  const c = (() => {
    if (o) {
      const v = ms[o];
      return st[v];
    }
    return Or(r) && r.code && _r[r.code] ? _r[r.code] : Dr;
  })(), f = l || c.image, g = d || (Or(r) ? r.message : null) || c.message;
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${s}`, children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: f,
        alt: "Error illustration",
        className: "max-w-[300px] h-auto"
      }
    ),
    /* @__PURE__ */ e.jsx(Ga, { variant: "body1", className: "m-0", children: g }),
    t && /* @__PURE__ */ e.jsx(
      ke,
      {
        onClick: t,
        rounded: "full",
        variant: "primary",
        size: "md",
        children: "Try Again"
      }
    )
  ] });
}, gs = ye(
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
), ps = ve(
  ({
    className: r,
    variant: t = "default",
    size: a = "md",
    rounded: s = "md",
    error: o = !1,
    errorText: l,
    helperText: d,
    label: i,
    bottomLabel: c,
    required: f = !1,
    showSubmitButton: g = !1,
    submitButtonLabel: v = "Submit",
    submitButtonVariant: p = "primary",
    length: u = 6,
    numericOnly: j = !0,
    onComplete: h,
    onChange: m,
    onSubmit: x,
    value: y,
    defaultValue: $ = "",
    disabled: A = !1,
    autoFocus: D = !1,
    ...V
  }, _) => {
    const [k, M] = re($ || ""), I = pe([]);
    xe(() => {
      y !== void 0 && M(y);
    }, [y]);
    const W = y !== void 0, R = W ? y : k, C = (P) => {
      W || M(P), m == null || m(P), P.length === u && (h == null || h(P), g || x == null || x(P));
    }, T = (P) => (B) => {
      I.current[P] = B;
    }, G = (P) => {
      P.target.select();
    }, E = (P, B) => {
      var H;
      const ue = P.target.value;
      let de = "";
      if (ue.length >= 1)
        de = ue.slice(-1);
      else if (ue.length === 0) {
        const te = R.split("");
        te[B] = "", C(te.join(""));
        return;
      }
      if (j && !/^\d$/.test(de))
        return;
      const be = R.split("");
      for (; be.length <= B; )
        be.push("");
      be[B] = de;
      const ie = be.join("");
      C(ie), B < u - 1 && de && ((H = I.current[B + 1]) == null || H.focus());
    }, S = (P, B) => {
      var ue, de, be;
      if (P.key === "Backspace") {
        const ie = R.split("");
        R[B] ? (P.preventDefault(), ie[B] = "", C(ie.join(""))) : B > 0 && (P.preventDefault(), ie[B - 1] = "", C(ie.join("")), (ue = I.current[B - 1]) == null || ue.focus());
      } else if (P.key === "Delete") {
        if (R[B]) {
          P.preventDefault();
          const ie = R.split("");
          ie[B] = "", C(ie.join(""));
        }
      } else if (P.key === "ArrowLeft" && B > 0)
        P.preventDefault(), (de = I.current[B - 1]) == null || de.focus();
      else if (P.key === "ArrowRight" && B < u - 1)
        P.preventDefault(), (be = I.current[B + 1]) == null || be.focus();
      else if (!P.ctrlKey && !P.altKey && !P.metaKey && P.key.length === 1 && j && !/^\d$/.test(P.key)) {
        P.preventDefault();
        return;
      }
    }, N = (P) => {
      var ie;
      P.preventDefault();
      const B = P.clipboardData.getData("text/plain").trim();
      if (j && !/^\d+$/.test(B))
        return;
      const de = B.slice(0, u).padEnd(R.length, "").slice(0, u);
      C(de);
      const be = de.length < u ? de.length : u - 1;
      (ie = I.current[be]) == null || ie.focus();
    }, L = () => {
      R.length === u && (x == null || x(R));
    }, K = R.split("").concat(Array(u - R.length).fill(""));
    return /* @__PURE__ */ e.jsxs("div", { ref: _, className: b("w-full", r), ...V, children: [
      i && /* @__PURE__ */ e.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        i,
        f && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: u }).map((P, B) => /* @__PURE__ */ e.jsx(
          "input",
          {
            ref: T(B),
            type: j ? "tel" : "text",
            inputMode: j ? "numeric" : "text",
            maxLength: 1,
            value: K[B] || "",
            onChange: (ue) => E(ue, B),
            onKeyDown: (ue) => S(ue, B),
            onPaste: B === 0 ? N : void 0,
            onFocus: G,
            disabled: A,
            autoFocus: D && B === 0,
            className: b(
              gs({
                variant: o ? "error" : t,
                size: a,
                rounded: s
              })
            ),
            "aria-invalid": o
          },
          B
        )) }),
        o && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger self-start", children: l }),
        !o && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral self-start", children: d }),
        c && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-neutral-600", children: c }),
        g && /* @__PURE__ */ e.jsx(
          ke,
          {
            variant: p,
            disabled: R.length !== u || A,
            onClick: L,
            className: "mt-4",
            children: v
          }
        )
      ] })
    ] });
  }
);
ps.displayName = "InputOTP";
const Lr = {
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
}, $s = ({
  icon: r,
  className: t,
  color: a = "primary",
  value: s,
  maxValue: o = 99,
  children: l,
  ...d
}) => {
  const i = "top-0 right-0", c = typeof s == "number" && !isNaN(s);
  let f = "";
  c && (s > o ? f = `${o}+` : f = String(s));
  const g = c ? "px-2" : "", v = c ? "min-w-[20px]" : "w-2.5 h-2.5", p = c ? "h-5" : "h-2.5", u = typeof a == "string" && a in Lr ? Lr[a] : a;
  return /* @__PURE__ */ e.jsxs("div", { className: b("relative inline-block", t), children: [
    l || (r ? /* @__PURE__ */ e.jsx(U, { icon: r, color: u, size: 32, ...d }) : null),
    /* @__PURE__ */ e.jsx(
      "span",
      {
        className: b(
          "absolute flex items-center justify-center rounded-xl bg-[#FF4C4C] text-white text-[10px] font-semibold",
          i,
          g,
          v,
          p,
          !c && "p-0",
          !c && "rounded-full"
        ),
        style: {
          transform: "translate(50%,-50%)"
        },
        children: c ? f : ""
      }
    )
  ] });
}, Vs = ({
  widgets: r,
  className: t
}) => /* @__PURE__ */ e.jsx("div", { className: b("w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", t), children: r.map((a, s) => /* @__PURE__ */ e.jsx(us, { ...a }, s)) });
export {
  ys as Accordion,
  ua as AutoComplete,
  ws as Avatar,
  ks as Badge,
  $s as BadgeNotif,
  ls as Breadcrumbs,
  ke as Button,
  br as Card,
  js as Checkbox,
  Ns as Chip,
  Ea as DatePicker,
  Ca as Dialog,
  za as DialogActions,
  Ma as DialogBody,
  Jr as DialogHeader,
  Ra as DialogTitle,
  Aa as Divider,
  Ls as ErrorWrapper,
  Es as FileUpload,
  U as Icon,
  Ur as Input,
  ps as InputOTP,
  Ss as Notification,
  Da as Pagination,
  ns as PhoneInput,
  mr as PrimitiveDatePicker,
  as as Progress,
  Cs as Radio,
  Xr as Select,
  Qe as SelectItem,
  La as Skeleton,
  Rs as Slider,
  Ms as StarRating,
  zs as StatusIndicator,
  As as Stepper,
  Ts as Switch,
  _s as Table,
  Is as Tabs,
  Ga as Text,
  Ua as TimePicker,
  at as Toast,
  Ds as ToastProvider,
  Za as Toggle,
  Ps as Tooltip,
  us as WidgetCard,
  Vs as WidgetCardGroup,
  pa as buttonVariants,
  ba as cardVariants,
  b as cn,
  gs as inputOTPVariants,
  Ka as toggleVariants,
  Os as useToast
};
