import * as ca from "react";
import ae, { useState as ne, useEffect as de, forwardRef as _e, useRef as oe, useImperativeHandle as yn, useLayoutEffect as Ds, useCallback as fe, Children as pr, isValidElement as lr, cloneElement as xn, useContext as mt, useMemo as Ae, createContext as zs, useId as $d } from "react";
import Gs, { createPortal as Qt, flushSync as hd } from "react-dom";
import Te from "dayjs";
import { LazyMotion as an, AnimatePresence as Oo, m as sn, useInView as vd, motion as yd } from "framer-motion";
import { useReactTable as xd, getPaginationRowModel as wd, getSortedRowModel as kd, getCoreRowModel as Ed, flexRender as ua } from "@tanstack/react-table";
var Bs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qn = { exports: {} }, xr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fa;
function Nd() {
  if (fa) return xr;
  fa = 1;
  var e = ae, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, d, u) {
    var c, f = {}, m = null, p = null;
    u !== void 0 && (m = "" + u), d.key !== void 0 && (m = "" + d.key), d.ref !== void 0 && (p = d.ref);
    for (c in d) n.call(d, c) && !a.hasOwnProperty(c) && (f[c] = d[c]);
    if (i && i.defaultProps) for (c in d = i.defaultProps, d) f[c] === void 0 && (f[c] = d[c]);
    return { $$typeof: t, type: i, key: m, ref: p, props: f, _owner: o.current };
  }
  return xr.Fragment = r, xr.jsx = s, xr.jsxs = s, xr;
}
var wr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pa;
function Pd() {
  return pa || (pa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ae, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), $ = Symbol.iterator, k = "@@iterator";
    function x(w) {
      if (w === null || typeof w != "object")
        return null;
      var U = $ && w[$] || w[k];
      return typeof U == "function" ? U : null;
    }
    var N = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(w) {
      {
        for (var U = arguments.length, q = new Array(U > 1 ? U - 1 : 0), le = 1; le < U; le++)
          q[le - 1] = arguments[le];
        j("error", w, q);
      }
    }
    function j(w, U, q) {
      {
        var le = N.ReactDebugCurrentFrame, ke = le.getStackAddendum();
        ke !== "" && (U += "%s", q = q.concat([ke]));
        var Pe = q.map(function(ye) {
          return String(ye);
        });
        Pe.unshift("Warning: " + U), Function.prototype.apply.call(console[w], console, Pe);
      }
    }
    var T = !1, O = !1, I = !1, H = !1, F = !1, R;
    R = Symbol.for("react.module.reference");
    function D(w) {
      return !!(typeof w == "string" || typeof w == "function" || w === n || w === a || F || w === o || w === u || w === c || H || w === p || T || O || I || typeof w == "object" && w !== null && (w.$$typeof === m || w.$$typeof === f || w.$$typeof === s || w.$$typeof === i || w.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      w.$$typeof === R || w.getModuleId !== void 0));
    }
    function g(w, U, q) {
      var le = w.displayName;
      if (le)
        return le;
      var ke = U.displayName || U.name || "";
      return ke !== "" ? q + "(" + ke + ")" : q;
    }
    function C(w) {
      return w.displayName || "Context";
    }
    function h(w) {
      if (w == null)
        return null;
      if (typeof w.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof w == "function")
        return w.displayName || w.name || null;
      if (typeof w == "string")
        return w;
      switch (w) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case i:
            var U = w;
            return C(U) + ".Consumer";
          case s:
            var q = w;
            return C(q._context) + ".Provider";
          case d:
            return g(w, w.render, "ForwardRef");
          case f:
            var le = w.displayName || null;
            return le !== null ? le : h(w.type) || "Memo";
          case m: {
            var ke = w, Pe = ke._payload, ye = ke._init;
            try {
              return h(ye(Pe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, A = 0, b, y, E, S, W, M, B;
    function K() {
    }
    K.__reactDisabledLog = !0;
    function _() {
      {
        if (A === 0) {
          b = console.log, y = console.info, E = console.warn, S = console.error, W = console.group, M = console.groupCollapsed, B = console.groupEnd;
          var w = {
            configurable: !0,
            enumerable: !0,
            value: K,
            writable: !0
          };
          Object.defineProperties(console, {
            info: w,
            log: w,
            warn: w,
            error: w,
            group: w,
            groupCollapsed: w,
            groupEnd: w
          });
        }
        A++;
      }
    }
    function G() {
      {
        if (A--, A === 0) {
          var w = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, w, {
              value: b
            }),
            info: P({}, w, {
              value: y
            }),
            warn: P({}, w, {
              value: E
            }),
            error: P({}, w, {
              value: S
            }),
            group: P({}, w, {
              value: W
            }),
            groupCollapsed: P({}, w, {
              value: M
            }),
            groupEnd: P({}, w, {
              value: B
            })
          });
        }
        A < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = N.ReactCurrentDispatcher, L;
    function Y(w, U, q) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (ke) {
            var le = ke.stack.trim().match(/\n( *(at )?)/);
            L = le && le[1] || "";
          }
        return `
` + L + w;
      }
    }
    var ce = !1, be;
    {
      var $e = typeof WeakMap == "function" ? WeakMap : Map;
      be = new $e();
    }
    function Ee(w, U) {
      if (!w || ce)
        return "";
      {
        var q = be.get(w);
        if (q !== void 0)
          return q;
      }
      var le;
      ce = !0;
      var ke = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Pe;
      Pe = X.current, X.current = null, _();
      try {
        if (U) {
          var ye = function() {
            throw Error();
          };
          if (Object.defineProperty(ye.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ye, []);
            } catch (rt) {
              le = rt;
            }
            Reflect.construct(w, [], ye);
          } else {
            try {
              ye.call();
            } catch (rt) {
              le = rt;
            }
            w.call(ye.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (rt) {
            le = rt;
          }
          w();
        }
      } catch (rt) {
        if (rt && le && typeof rt.stack == "string") {
          for (var he = rt.stack.split(`
`), et = le.stack.split(`
`), Le = he.length - 1, De = et.length - 1; Le >= 1 && De >= 0 && he[Le] !== et[De]; )
            De--;
          for (; Le >= 1 && De >= 0; Le--, De--)
            if (he[Le] !== et[De]) {
              if (Le !== 1 || De !== 1)
                do
                  if (Le--, De--, De < 0 || he[Le] !== et[De]) {
                    var ct = `
` + he[Le].replace(" at new ", " at ");
                    return w.displayName && ct.includes("<anonymous>") && (ct = ct.replace("<anonymous>", w.displayName)), typeof w == "function" && be.set(w, ct), ct;
                  }
                while (Le >= 1 && De >= 0);
              break;
            }
        }
      } finally {
        ce = !1, X.current = Pe, G(), Error.prepareStackTrace = ke;
      }
      var rr = w ? w.displayName || w.name : "", Ht = rr ? Y(rr) : "";
      return typeof w == "function" && be.set(w, Ht), Ht;
    }
    function Ye(w, U, q) {
      return Ee(w, !1);
    }
    function Oe(w) {
      var U = w.prototype;
      return !!(U && U.isReactComponent);
    }
    function He(w, U, q) {
      if (w == null)
        return "";
      if (typeof w == "function")
        return Ee(w, Oe(w));
      if (typeof w == "string")
        return Y(w);
      switch (w) {
        case u:
          return Y("Suspense");
        case c:
          return Y("SuspenseList");
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case d:
            return Ye(w.render);
          case f:
            return He(w.type, U, q);
          case m: {
            var le = w, ke = le._payload, Pe = le._init;
            try {
              return He(Pe(ke), U, q);
            } catch {
            }
          }
        }
      return "";
    }
    var Ce = Object.prototype.hasOwnProperty, Xe = {}, Re = N.ReactDebugCurrentFrame;
    function lt(w) {
      if (w) {
        var U = w._owner, q = He(w.type, w._source, U ? U.type : null);
        Re.setExtraStackFrame(q);
      } else
        Re.setExtraStackFrame(null);
    }
    function tt(w, U, q, le, ke) {
      {
        var Pe = Function.call.bind(Ce);
        for (var ye in w)
          if (Pe(w, ye)) {
            var he = void 0;
            try {
              if (typeof w[ye] != "function") {
                var et = Error((le || "React class") + ": " + q + " type `" + ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof w[ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw et.name = "Invariant Violation", et;
              }
              he = w[ye](U, ye, le, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Le) {
              he = Le;
            }
            he && !(he instanceof Error) && (lt(ke), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", le || "React class", q, ye, typeof he), lt(null)), he instanceof Error && !(he.message in Xe) && (Xe[he.message] = !0, lt(ke), v("Failed %s type: %s", q, he.message), lt(null));
          }
      }
    }
    var Qe = Array.isArray;
    function Ge(w) {
      return Qe(w);
    }
    function wt(w) {
      {
        var U = typeof Symbol == "function" && Symbol.toStringTag, q = U && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return q;
      }
    }
    function kt(w) {
      try {
        return ee(w), !1;
      } catch {
        return !0;
      }
    }
    function ee(w) {
      return "" + w;
    }
    function we(w) {
      if (kt(w))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wt(w)), ee(w);
    }
    var te = N.ReactCurrentOwner, Z = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, V, re;
    function se(w) {
      if (Ce.call(w, "ref")) {
        var U = Object.getOwnPropertyDescriptor(w, "ref").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return w.ref !== void 0;
    }
    function ge(w) {
      if (Ce.call(w, "key")) {
        var U = Object.getOwnPropertyDescriptor(w, "key").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return w.key !== void 0;
    }
    function Ue(w, U) {
      typeof w.ref == "string" && te.current;
    }
    function st(w, U) {
      {
        var q = function() {
          V || (V = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        q.isReactWarning = !0, Object.defineProperty(w, "key", {
          get: q,
          configurable: !0
        });
      }
    }
    function dt(w, U) {
      {
        var q = function() {
          re || (re = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        q.isReactWarning = !0, Object.defineProperty(w, "ref", {
          get: q,
          configurable: !0
        });
      }
    }
    var Et = function(w, U, q, le, ke, Pe, ye) {
      var he = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: w,
        key: U,
        ref: q,
        props: ye,
        // Record the component responsible for creating this element.
        _owner: Pe
      };
      return he._store = {}, Object.defineProperty(he._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(he, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: le
      }), Object.defineProperty(he, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ke
      }), Object.freeze && (Object.freeze(he.props), Object.freeze(he)), he;
    };
    function er(w, U, q, le, ke) {
      {
        var Pe, ye = {}, he = null, et = null;
        q !== void 0 && (we(q), he = "" + q), ge(U) && (we(U.key), he = "" + U.key), se(U) && (et = U.ref, Ue(U, ke));
        for (Pe in U)
          Ce.call(U, Pe) && !Z.hasOwnProperty(Pe) && (ye[Pe] = U[Pe]);
        if (w && w.defaultProps) {
          var Le = w.defaultProps;
          for (Pe in Le)
            ye[Pe] === void 0 && (ye[Pe] = Le[Pe]);
        }
        if (he || et) {
          var De = typeof w == "function" ? w.displayName || w.name || "Unknown" : w;
          he && st(ye, De), et && dt(ye, De);
        }
        return Et(w, he, et, ke, le, te.current, ye);
      }
    }
    var Vt = N.ReactCurrentOwner, $t = N.ReactDebugCurrentFrame;
    function tr(w) {
      if (w) {
        var U = w._owner, q = He(w.type, w._source, U ? U.type : null);
        $t.setExtraStackFrame(q);
      } else
        $t.setExtraStackFrame(null);
    }
    var An;
    An = !1;
    function _n(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function oa() {
      {
        if (Vt.current) {
          var w = h(Vt.current.type);
          if (w)
            return `

Check the render method of \`` + w + "`.";
        }
        return "";
      }
    }
    function id(w) {
      return "";
    }
    var aa = {};
    function ld(w) {
      {
        var U = oa();
        if (!U) {
          var q = typeof w == "string" ? w : w.displayName || w.name;
          q && (U = `

Check the top-level render call using <` + q + ">.");
        }
        return U;
      }
    }
    function sa(w, U) {
      {
        if (!w._store || w._store.validated || w.key != null)
          return;
        w._store.validated = !0;
        var q = ld(U);
        if (aa[q])
          return;
        aa[q] = !0;
        var le = "";
        w && w._owner && w._owner !== Vt.current && (le = " It was passed a child from " + h(w._owner.type) + "."), tr(w), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, le), tr(null);
      }
    }
    function ia(w, U) {
      {
        if (typeof w != "object")
          return;
        if (Ge(w))
          for (var q = 0; q < w.length; q++) {
            var le = w[q];
            _n(le) && sa(le, U);
          }
        else if (_n(w))
          w._store && (w._store.validated = !0);
        else if (w) {
          var ke = x(w);
          if (typeof ke == "function" && ke !== w.entries)
            for (var Pe = ke.call(w), ye; !(ye = Pe.next()).done; )
              _n(ye.value) && sa(ye.value, U);
        }
      }
    }
    function dd(w) {
      {
        var U = w.type;
        if (U == null || typeof U == "string")
          return;
        var q;
        if (typeof U == "function")
          q = U.propTypes;
        else if (typeof U == "object" && (U.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        U.$$typeof === f))
          q = U.propTypes;
        else
          return;
        if (q) {
          var le = h(U);
          tt(q, w.props, "prop", le, w);
        } else if (U.PropTypes !== void 0 && !An) {
          An = !0;
          var ke = h(U);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ke || "Unknown");
        }
        typeof U.getDefaultProps == "function" && !U.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cd(w) {
      {
        for (var U = Object.keys(w.props), q = 0; q < U.length; q++) {
          var le = U[q];
          if (le !== "children" && le !== "key") {
            tr(w), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", le), tr(null);
            break;
          }
        }
        w.ref !== null && (tr(w), v("Invalid attribute `ref` supplied to `React.Fragment`."), tr(null));
      }
    }
    var la = {};
    function da(w, U, q, le, ke, Pe) {
      {
        var ye = D(w);
        if (!ye) {
          var he = "";
          (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (he += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var et = id();
          et ? he += et : he += oa();
          var Le;
          w === null ? Le = "null" : Ge(w) ? Le = "array" : w !== void 0 && w.$$typeof === t ? (Le = "<" + (h(w.type) || "Unknown") + " />", he = " Did you accidentally export a JSX literal instead of a component?") : Le = typeof w, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Le, he);
        }
        var De = er(w, U, q, ke, Pe);
        if (De == null)
          return De;
        if (ye) {
          var ct = U.children;
          if (ct !== void 0)
            if (le)
              if (Ge(ct)) {
                for (var rr = 0; rr < ct.length; rr++)
                  ia(ct[rr], w);
                Object.freeze && Object.freeze(ct);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ia(ct, w);
        }
        if (Ce.call(U, "key")) {
          var Ht = h(w), rt = Object.keys(U).filter(function(bd) {
            return bd !== "key";
          }), Rn = rt.length > 0 ? "{key: someKey, " + rt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!la[Ht + Rn]) {
            var md = rt.length > 0 ? "{" + rt.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Rn, Ht, md, Ht), la[Ht + Rn] = !0;
          }
        }
        return w === n ? cd(De) : dd(De), De;
      }
    }
    function ud(w, U, q) {
      return da(w, U, q, !0);
    }
    function fd(w, U, q) {
      return da(w, U, q, !1);
    }
    var pd = fd, gd = ud;
    wr.Fragment = n, wr.jsx = pd, wr.jsxs = gd;
  }()), wr;
}
process.env.NODE_ENV === "production" ? Qn.exports = Nd() : Qn.exports = Pd();
var l = Qn.exports;
function Hs(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Hs(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ve() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Hs(e)) && (n && (n += " "), n += t);
  return n;
}
const Io = "-", Td = (e) => {
  const t = Sd(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(Io);
      return i[0] === "" && i.length !== 1 && i.shift(), Us(i, t) || Cd(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const d = r[s] || [];
      return i && n[s] ? [...d, ...n[s]] : d;
    }
  };
}, Us = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? Us(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Io);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}, ga = /^\[(.+)\]$/, Cd = (e) => {
  if (ga.test(e)) {
    const t = ga.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Sd = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Od(Object.entries(e.classGroups), r).forEach(([a, s]) => {
    eo(s, n, a, t);
  }), n;
}, eo = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : ma(t, o);
      a.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (jd(o)) {
        eo(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      eo(s, ma(t, a), r, n);
    });
  });
}, ma = (e, t) => {
  let r = e;
  return t.split(Io).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, jd = (e) => e.isThemeGetter, Od = (e, t) => t ? e.map(([r, n]) => {
  const o = n.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([s, i]) => [t + s, i])) : a);
  return [r, o];
}) : e, Id = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (a, s) => {
    r.set(a, s), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let s = r.get(a);
      if (s !== void 0)
        return s;
      if ((s = n.get(a)) !== void 0)
        return o(a, s), s;
    },
    set(a, s) {
      r.has(a) ? r.set(a, s) : o(a, s);
    }
  };
}, Ks = "!", Ad = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, o = t[0], a = t.length, s = (i) => {
    const d = [];
    let u = 0, c = 0, f;
    for (let x = 0; x < i.length; x++) {
      let N = i[x];
      if (u === 0) {
        if (N === o && (n || i.slice(x, x + a) === t)) {
          d.push(i.slice(c, x)), c = x + a;
          continue;
        }
        if (N === "/") {
          f = x;
          continue;
        }
      }
      N === "[" ? u++ : N === "]" && u--;
    }
    const m = d.length === 0 ? i : i.substring(c), p = m.startsWith(Ks), $ = p ? m.substring(1) : m, k = f && f > c ? f - c : void 0;
    return {
      modifiers: d,
      hasImportantModifier: p,
      baseClassName: $,
      maybePostfixModifierPosition: k
    };
  };
  return r ? (i) => r({
    className: i,
    parseClassName: s
  }) : s;
}, _d = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, Rd = (e) => ({
  cache: Id(e.cacheSize),
  parseClassName: Ad(e),
  ...Td(e)
}), Ld = /\s+/, Md = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, a = [], s = e.trim().split(Ld);
  let i = "";
  for (let d = s.length - 1; d >= 0; d -= 1) {
    const u = s[d], {
      modifiers: c,
      hasImportantModifier: f,
      baseClassName: m,
      maybePostfixModifierPosition: p
    } = r(u);
    let $ = !!p, k = n($ ? m.substring(0, p) : m);
    if (!k) {
      if (!$) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (k = n(m), !k) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      $ = !1;
    }
    const x = _d(c).join(":"), N = f ? x + Ks : x, v = N + k;
    if (a.includes(v))
      continue;
    a.push(v);
    const j = o(k, $);
    for (let T = 0; T < j.length; ++T) {
      const O = j[T];
      a.push(N + O);
    }
    i = u + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Fd() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Ws(t)) && (n && (n += " "), n += r);
  return n;
}
const Ws = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Ws(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Dd(e, ...t) {
  let r, n, o, a = s;
  function s(d) {
    const u = t.reduce((c, f) => f(c), e());
    return r = Rd(u), n = r.cache.get, o = r.cache.set, a = i, i(d);
  }
  function i(d) {
    const u = n(d);
    if (u)
      return u;
    const c = Md(d, r);
    return o(d, c), c;
  }
  return function() {
    return a(Fd.apply(null, arguments));
  };
}
const je = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Ys = /^\[(?:([a-z-]+):)?(.+)\]$/i, zd = /^\d+\/\d+$/, Gd = /* @__PURE__ */ new Set(["px", "full", "screen"]), Bd = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Vd = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Hd = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Ud = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Kd = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Nt = (e) => dr(e) || Gd.has(e) || zd.test(e), Lt = (e) => $r(e, "length", ec), dr = (e) => !!e && !Number.isNaN(Number(e)), Ln = (e) => $r(e, "number", dr), kr = (e) => !!e && Number.isInteger(Number(e)), Wd = (e) => e.endsWith("%") && dr(e.slice(0, -1)), ue = (e) => Ys.test(e), Mt = (e) => Bd.test(e), Yd = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Xd = (e) => $r(e, Yd, Xs), Zd = (e) => $r(e, "position", Xs), qd = /* @__PURE__ */ new Set(["image", "url"]), Jd = (e) => $r(e, qd, rc), Qd = (e) => $r(e, "", tc), Er = () => !0, $r = (e, t, r) => {
  const n = Ys.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, ec = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Vd.test(e) && !Hd.test(e)
), Xs = () => !1, tc = (e) => Ud.test(e), rc = (e) => Kd.test(e), nc = () => {
  const e = je("colors"), t = je("spacing"), r = je("blur"), n = je("brightness"), o = je("borderColor"), a = je("borderRadius"), s = je("borderSpacing"), i = je("borderWidth"), d = je("contrast"), u = je("grayscale"), c = je("hueRotate"), f = je("invert"), m = je("gap"), p = je("gradientColorStops"), $ = je("gradientColorStopPositions"), k = je("inset"), x = je("margin"), N = je("opacity"), v = je("padding"), j = je("saturate"), T = je("scale"), O = je("sepia"), I = je("skew"), H = je("space"), F = je("translate"), R = () => ["auto", "contain", "none"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], g = () => ["auto", ue, t], C = () => [ue, t], h = () => ["", Nt, Lt], P = () => ["auto", dr, ue], A = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], b = () => ["solid", "dashed", "dotted", "double", "none"], y = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], E = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], S = () => ["", "0", ue], W = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], M = () => [dr, ue];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Er],
      spacing: [Nt, Lt],
      blur: ["none", "", Mt, ue],
      brightness: M(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Mt, ue],
      borderSpacing: C(),
      borderWidth: h(),
      contrast: M(),
      grayscale: S(),
      hueRotate: M(),
      invert: S(),
      gap: C(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Wd, Lt],
      inset: g(),
      margin: g(),
      opacity: M(),
      padding: C(),
      saturate: M(),
      scale: M(),
      sepia: S(),
      skew: M(),
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
        aspect: ["auto", "square", "video", ue]
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
        columns: [Mt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": W()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": W()
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
        object: [...A(), ue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: D()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": D()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": D()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: R()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": R()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": R()
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
        inset: [k]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [k]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [k]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [k]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [k]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [k]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [k]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [k]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [k]
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
        z: ["auto", kr, ue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: g()
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
        flex: ["1", "auto", "initial", "none", ue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: S()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: S()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", kr, ue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Er]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", kr, ue]
        }, ue]
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
        "grid-rows": [Er]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [kr, ue]
        }, ue]
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
        "auto-cols": ["auto", "min", "max", "fr", ue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [m]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [m]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [m]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...E()]
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
        content: ["normal", ...E(), "baseline"]
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
        "place-content": [...E(), "baseline"]
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
        p: [v]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [v]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [v]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [v]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [v]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [v]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [v]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [v]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [v]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [x]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [x]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [x]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [x]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [x]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [x]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [x]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [x]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [x]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [H]
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
        "space-y": [H]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ue, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ue, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ue, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Mt]
        }, Mt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ue, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ue, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ue, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ue, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Mt, Lt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ln]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Er]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", dr, Ln]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Nt, ue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ue]
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
        "placeholder-opacity": [N]
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
        "text-opacity": [N]
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
        decoration: [...b(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Nt, Lt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Nt, ue]
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
        indent: C()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ue]
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
        content: ["none", ue]
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
        "bg-opacity": [N]
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
        bg: [...A(), Zd]
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
        bg: ["auto", "cover", "contain", Xd]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Jd]
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
        from: [$]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [$]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [$]
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
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
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
        "border-opacity": [N]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...b(), "hidden"]
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
        "divide-opacity": [N]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: b()
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
        outline: ["", ...b()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Nt, ue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Nt, Lt]
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
        ring: h()
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
        "ring-opacity": [N]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Nt, Lt]
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
        shadow: ["", "inner", "none", Mt, Qd]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Er]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [N]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...y(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": y()
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
        blur: [r]
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
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Mt, ue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [c]
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
        saturate: [j]
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
        "backdrop-blur": [r]
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
        "backdrop-contrast": [d]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [c]
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
        "backdrop-opacity": [N]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [j]
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
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: M()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: M()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ue]
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
        scale: [T]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [T]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [T]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [kr, ue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [F]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [F]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ue]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ue]
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
        "will-change": ["auto", "scroll", "contents", "transform", ue]
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
        stroke: [Nt, Lt, Ln]
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
}, xt = /* @__PURE__ */ Dd(nc);
function z(...e) {
  return xt(ve(e));
}
const ba = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, $a = ve, Ve = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return $a(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((u) => {
    const c = r == null ? void 0 : r[u], f = a == null ? void 0 : a[u];
    if (c === null) return null;
    const m = ba(c) || ba(f);
    return o[u][m];
  }), i = r && Object.entries(r).reduce((u, c) => {
    let [f, m] = c;
    return m === void 0 || (u[f] = m), u;
  }, {}), d = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, c) => {
    let { class: f, className: m, ...p } = c;
    return Object.entries(p).every(($) => {
      let [k, x] = $;
      return Array.isArray(x) ? x.includes({
        ...a,
        ...i
      }[k]) : {
        ...a,
        ...i
      }[k] === x;
    }) ? [
      ...u,
      f,
      m
    ] : u;
  }, []);
  return $a(e, s, d, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, pe = ({
  icon: e,
  className: t,
  size: r,
  color: n,
  rotate: o,
  flip: a,
  spin: s,
  inline: i = !0,
  mode: d = "svg",
  ...u
}) => {
  const [c, f] = ne(null), [m, p] = ne(!0), [$, k] = ne(null);
  return de(() => {
    let x = !0;
    return (async () => {
      try {
        const { Icon: v } = await import("./iconify-Dqt3MVen.mjs");
        x && (f(() => v), p(!1));
      } catch (v) {
        console.error("Failed to load icon:", v), x && (k(v), p(!1));
      }
    })(), () => {
      x = !1;
    };
  }, []), m ? /* @__PURE__ */ l.jsx("span", { style: { width: r, height: r } }) : $ || !c ? null : /* @__PURE__ */ l.jsx(
    c,
    {
      icon: e,
      className: z(
        s && "animate-spin",
        t
      ),
      style: {
        color: n,
        transform: `rotate(${o || 0}deg)`
      },
      height: r,
      width: r,
      flip: a,
      inline: i,
      mode: d,
      ...u
    }
  );
}, oc = Ve(
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
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
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
      rounded: "xl",
      fullWidth: !0
    }
  }
), Zs = _e(
  ({
    className: e,
    variant: t = "default",
    size: r = "md",
    rounded: n = "xl",
    error: o = !1,
    errorText: a,
    helperText: s,
    label: i,
    required: d = !1,
    labelPlacement: u = "top",
    fullWidth: c = !1,
    leftIcon: f,
    rightIcon: m,
    onRightIconClick: p,
    id: $,
    ...k
  }, x) => {
    const N = $ || ae.useId(), v = `${N}-helper`, j = `${N}-error`, T = /* @__PURE__ */ l.jsxs("div", { className: z("relative", !c && "inline-block"), children: [
      f && /* @__PURE__ */ l.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ l.jsx(pe, { icon: f, className: "w-4 h-4" }) }),
      /* @__PURE__ */ l.jsx(
        "input",
        {
          id: N,
          type: "text",
          ref: x,
          className: z(
            oc({ variant: o ? "error" : t, size: r, rounded: n, fullWidth: c }),
            f && "pl-10",
            m && "pr-10",
            e
          ),
          "aria-describedby": o ? j : s ? v : void 0,
          "aria-invalid": o,
          "aria-required": d,
          ...k
        }
      ),
      m && /* @__PURE__ */ l.jsx(
        "div",
        {
          className: z(
            "absolute right-3 top-1/2 -translate-y-1/2 text-neutral",
            p && "cursor-pointer hover:text-primary-600"
          ),
          onClick: p,
          role: p ? "button" : void 0,
          tabIndex: p ? 0 : void 0,
          children: /* @__PURE__ */ l.jsx(pe, { icon: m, className: "w-4 h-4" })
        }
      )
    ] }), O = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      o && a && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger", id: j, children: a }),
      !o && s && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral", id: v, children: s })
    ] });
    return u === "left" ? /* @__PURE__ */ l.jsx("div", { className: z(c ? "w-full" : "inline-block", e), children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-4", children: [
      i && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: N,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            i,
            d && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: z("flex-1", !c && "inline-block"), children: [
        T,
        O
      ] })
    ] }) }) : /* @__PURE__ */ l.jsxs("div", { className: z(c ? "w-full" : "inline-block", e), children: [
      i && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: N,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            i,
            d && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      T,
      O
    ] });
  }
);
Zs.displayName = "Input";
const wn = ae.forwardRef(
  ({ className: e, children: t, selected: r, disabled: n, ...o }, a) => /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: a,
      className: z(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
        "hover:bg-primary-50",
        r && "bg-primary-50 text-primary-900",
        n && "pointer-events-none opacity-50",
        e
      ),
      ...o,
      children: t
    }
  )
);
wn.displayName = "SelectItem";
const qs = typeof window < "u", It = () => qs ? window : {
  innerHeight: 0,
  innerWidth: 0,
  addEventListener: () => {
  },
  removeEventListener: () => {
  }
}, Ze = () => qs ? document : {
  addEventListener: () => {
  },
  removeEventListener: () => {
  },
  dispatchEvent: () => {
  }
}, Mn = "autocomplete-dropdown-opened", ac = _e(
  ({
    className: e,
    options: t,
    onSelect: r,
    isOpen: n,
    loading: o = !1,
    renderOption: a,
    variant: s = "default",
    size: i = "md",
    rounded: d = "xl",
    leftIcon: u,
    rightIcon: c,
    error: f = !1,
    errorText: m,
    helperText: p,
    label: $,
    required: k = !1,
    labelPlacement: x = "top",
    fullWidth: N = !1,
    value: v,
    onChange: j,
    onFocus: T,
    onBlur: O,
    showClear: I = !1,
    onClear: H,
    searchType: F = "include",
    initialItemsToShow: R,
    itemsToLoad: D = 10,
    maxDropdownHeight: g = 300,
    noOptionsMessage: C = "No options found",
    scrollMoreMessage: h = "",
    allOptionsShownMessage: P = "",
    resetInvalidOnBlur: A = !1,
    onInvalidReset: b,
    ...y
  }, E) => {
    const [S, W] = ne(!1), [M, B] = ne(v || ""), [K, _] = ne(
      R || 0
    ), G = oe(null), X = oe(null), L = oe(null), Y = oe(null), ce = n !== void 0, $e = `autocomplete-${ae.useId().replace(/:/g, "")}`, Ee = () => {
      if (!S || !X.current || !L.current) return;
      const { bottom: Z, top: V, left: re, width: se } = X.current.getBoundingClientRect(), ge = L.current, Ue = It(), st = Ue.innerHeight - Z, dt = V, Et = Math.min(g, 300), er = st < Et, Vt = dt > st, $t = er && Vt;
      Object.assign(ge.style, {
        position: "fixed",
        left: `${re}px`,
        width: `${se}px`
      }), $t ? Object.assign(ge.style, {
        bottom: `${Ue.innerHeight - V + 4}px`,
        top: "auto",
        maxHeight: `${dt - 8}px`
      }) : Object.assign(ge.style, {
        top: `${Z + 4}px`,
        bottom: "auto",
        maxHeight: `${st - 8}px`
      });
    };
    de(() => {
      const Z = It(), V = Ze(), re = () => {
        S && Ee();
      }, se = () => {
        S && Ee();
      }, ge = (st) => {
        st.detail.id !== $e && W(!1);
      }, Ue = (st) => {
        const dt = st.target;
        G.current && !G.current.contains(dt) && L.current && !L.current.contains(dt) && W(!1);
      };
      return S && (Ee(), Z.addEventListener("scroll", re, !0), Z.addEventListener("resize", se)), V.addEventListener(
        Mn,
        ge
      ), V.addEventListener("click", Ue), () => {
        Z.removeEventListener("scroll", re, !0), Z.removeEventListener("resize", se), V.removeEventListener(
          Mn,
          ge
        ), V.removeEventListener("click", Ue);
      };
    }, [S, $e]), de(() => {
      B(v || "");
    }, [v]);
    const Ye = (Z) => {
      const { value: V } = Z.target;
      if (B(V), !V.trim()) {
        W(!1);
        return;
      }
      const re = t.some(({ label: se }) => {
        const ge = V.toLowerCase().trim(), Ue = se.toLowerCase();
        return F === "startsWith" ? Ue.startsWith(ge) : Ue.includes(ge);
      });
      W(re), j == null || j(Z);
    }, Oe = (Z) => {
      Z.stopPropagation(), B(""), H == null || H();
      const V = new Event(
        "change"
      );
      V.target = { value: "" }, j == null || j(V);
    }, He = (Z) => {
      var ge;
      if (!Z) return;
      const { value: V, label: re } = Z;
      B(re), W(!1), r == null || r(V);
      const se = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: Z }
      });
      (ge = X.current) == null || ge.dispatchEvent(se);
    }, Ce = (Z) => Z.trim() ? t.some(({ label: V }) => {
      const re = Z.toLowerCase().trim(), se = V.toLowerCase();
      return F === "startsWith" ? se.startsWith(re) : se.includes(re);
    }) : !0, Xe = (Z) => {
      if (A && M.trim() && !Ce(M)) {
        B(""), b == null || b();
        const V = new Event(
          "change"
        );
        V.target = { value: "" }, j == null || j(V);
      }
      O == null || O(Z);
    }, Re = t.filter(({ label: Z }) => {
      const V = M.toLowerCase().trim(), re = Z.toLowerCase();
      return F === "startsWith" ? re.startsWith(V) : re.includes(V);
    }), lt = (Z) => {
      ce || (Ze().dispatchEvent(
        new CustomEvent(Mn, {
          detail: { id: $e }
        })
      ), Re.length > 0 && W(!0)), T == null || T(Z);
    }, tt = () => {
      if (!Y.current || R === void 0 || R <= 0)
        return;
      const { scrollTop: Z, scrollHeight: V, clientHeight: re } = Y.current;
      Z + re >= V - 10 && _(
        (ge) => Math.min(ge + D, Re.length)
      );
    };
    de(() => {
      R !== void 0 && R > 0 && _(R);
    }, [M, R]);
    const Qe = R !== void 0 && R > 0 ? Re.slice(0, K) : Re, Ge = (Z, V) => Z ? Z.replace(/\{(\w+)\}/g, (re, se) => {
      var ge;
      return ((ge = V[se]) == null ? void 0 : ge.toString()) || re;
    }) : "", wt = ce ? n : S, kt = I && M && !y.disabled && !y.readOnly, ee = kt ? "mdi:close" : c, we = (Z) => {
      if (!(!wt || Qe.length === 0))
        switch (Z.key) {
          case "Enter":
            Z.preventDefault(), Qe.length === 1 && He(Qe[0]);
            break;
          case "Tab":
            Qe.length === 1 && (Z.preventDefault(), He(Qe[0]));
            break;
          case "Escape":
            Z.preventDefault(), W(!1);
            break;
        }
    }, te = () => {
      if (!wt) return null;
      const Z = Ze();
      if (!("body" in Z)) return null;
      const V = /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: L,
          className: "fixed z-[9999] min-w-[8rem] rounded-md border border-neutral-200 bg-white py-1 shadow-lg overflow-hidden",
          style: { maxHeight: `${g}px` },
          onClick: (re) => re.stopPropagation(),
          children: /* @__PURE__ */ l.jsx(
            "div",
            {
              ref: Y,
              className: "overflow-auto",
              style: { maxHeight: `${g}px` },
              onScroll: tt,
              children: o ? /* @__PURE__ */ l.jsx("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ l.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }) }) : Qe.length > 0 ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                Qe.map((re) => /* @__PURE__ */ l.jsx(
                  wn,
                  {
                    value: re.value,
                    selected: re.label === M,
                    onClick: () => He(re),
                    children: a ? a(re) : re.label
                  },
                  re.value
                )),
                R !== void 0 && R > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                  K < Re.length && h && /* @__PURE__ */ l.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: Ge(h, {
                    current: K,
                    total: Re.length
                  }) }),
                  K >= Re.length && Re.length > 0 && P && /* @__PURE__ */ l.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: Ge(P, {
                    total: Re.length
                  }) })
                ] })
              ] }) : /* @__PURE__ */ l.jsx("div", { className: "px-2 py-2 text-sm text-neutral", children: C })
            }
          )
        }
      );
      return Qt(V, Z.body);
    };
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: G,
        className: z("relative", N ? "w-full" : "inline-block"),
        children: [
          /* @__PURE__ */ l.jsx("div", { ref: X, className: z(!N && "inline-block"), children: /* @__PURE__ */ l.jsx(
            Zs,
            {
              ref: E,
              value: M,
              onChange: Ye,
              onFocus: lt,
              onBlur: Xe,
              onKeyDown: we,
              variant: s,
              size: i,
              rounded: d,
              leftIcon: u,
              rightIcon: ee,
              error: f,
              errorText: m,
              helperText: p,
              label: $,
              required: k,
              labelPlacement: x,
              fullWidth: N,
              className: e,
              ...y,
              onClick: kt ? Oe : y.onClick
            }
          ) }),
          te()
        ]
      }
    );
  }
);
ac.displayName = "AutoComplete";
const sc = {
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
}, ic = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, lc = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full"
}, Am = ({
  items: e,
  multiple: t = !1,
  defaultOpenIds: r = [],
  openIds: n,
  onOpenChange: o,
  icon: a = "mdi:chevron-down",
  iconPosition: s = "right",
  className: i,
  contentClassName: d,
  variant: u = "primary",
  shadow: c = "none",
  rounded: f = "xl"
}) => {
  const [m, p] = ne(r), $ = n !== void 0 ? n : m, k = n !== void 0, x = (v) => {
    let j;
    t ? j = $.includes(v) ? $.filter((T) => T !== v) : [...$, v] : j = $.includes(v) ? [] : [v], k ? o == null || o(j) : p(j);
  }, N = sc[u];
  return /* @__PURE__ */ l.jsx("div", { className: ve("w-full space-y-2", i), children: e.map((v) => {
    const j = $.includes(v.id), T = !!v.disabled;
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: ve(
          "border overflow-hidden",
          "bg-white",
          "border-gray-200",
          ic[c],
          lc[f],
          "transition-shadow duration-200"
        ),
        children: [
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              onClick: () => !T && x(v.id),
              disabled: T,
              className: ve(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                N.hover,
                j && N.active,
                N.text,
                T && "opacity-50 cursor-not-allowed"
              ),
              children: [
                s === "left" && /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: ve(
                      "mr-3 transition-transform duration-200",
                      j && "rotate-180"
                    ),
                    children: /* @__PURE__ */ l.jsx(pe, { icon: a, className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ l.jsx("div", { className: "flex-1", children: v.title }),
                s === "right" && /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: ve(
                      "ml-3 transition-transform duration-200",
                      j && "rotate-180"
                    ),
                    children: /* @__PURE__ */ l.jsx(pe, { icon: a, className: "w-5 h-5" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: ve(
                "grid transition-all duration-200 ease-in-out",
                j ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              ),
              children: /* @__PURE__ */ l.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ l.jsx(
                "div",
                {
                  className: ve(
                    "p-4 border-t border-gray-200",
                    d
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
}, _m = ({
  src: e,
  alt: t = "avatar",
  size: r = "medium",
  shape: n = "circle",
  className: o = "",
  variant: a = "cover"
}) => {
  const s = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  }, i = {
    circle: "rounded-full",
    square: "rounded-lg"
  }, d = xt(
    "inline-flex items-center justify-center overflow-hidden bg-gray-200",
    s[r],
    i[n],
    o
  );
  return /* @__PURE__ */ l.jsx("div", { className: d, children: e ? /* @__PURE__ */ l.jsx(
    "img",
    {
      src: e,
      alt: t,
      className: xt("w-full h-full", a === "cover" ? "object-cover" : "object-contain")
    }
  ) : /* @__PURE__ */ l.jsx(
    "svg",
    {
      className: "w-6 h-6 text-gray",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ l.jsx(
        "path",
        {
          d: "M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z",
          fill: "currentColor"
        }
      )
    }
  ) });
}, Rm = ({
  children: e,
  variant: t = "primary",
  size: r = "medium",
  rounded: n = "xl",
  className: o = ""
}) => {
  const a = {
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800"
  }, s = {
    small: "px-2 py-0.5 text-xs",
    medium: "px-2.5 py-1 text-sm",
    large: "px-3 py-1.5 text-base"
  }, i = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full"
  }, d = xt(
    "inline-flex items-center font-medium",
    a[t],
    s[r],
    i[n],
    o
  );
  return /* @__PURE__ */ l.jsx("span", { className: d, children: e });
}, dc = Ve(
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
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
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
), qe = _e(
  ({
    className: e,
    variant: t = "primary",
    size: r = "md",
    rounded: n = "xl",
    fullWidth: o = !1,
    isLoading: a = !1,
    leftIcon: s,
    rightIcon: i,
    isIconOnly: d = !1,
    children: u,
    ...c
  }, f) => {
    const p = d || !!(s || i) && !u;
    return /* @__PURE__ */ l.jsxs(
      "button",
      {
        className: z(
          dc({
            variant: t,
            size: r,
            rounded: p ? "full" : n,
            fullWidth: o,
            isIconOnly: p,
            className: e
          })
        ),
        ref: f,
        disabled: c.disabled || a,
        ...c,
        children: [
          a && /* @__PURE__ */ l.jsx("span", { className: "animate-spin inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full" }),
          s && !a && /* @__PURE__ */ l.jsx(pe, { icon: s, className: "w-4 h-4", inline: !0 }),
          u && /* @__PURE__ */ l.jsx("span", { children: u }),
          i && !a && /* @__PURE__ */ l.jsx(pe, { icon: i, className: "w-4 h-4", inline: !0 })
        ]
      }
    );
  }
);
qe.displayName = "Button";
const cc = Ve(
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
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
      shadow: "sm",
      rounded: "xl"
    }
  }
), Js = _e(
  ({
    className: e,
    variant: t = "default",
    padding: r = "md",
    shadow: n = "none",
    rounded: o = "2xl",
    asChild: a = !1,
    ...s
  }, i) => /* @__PURE__ */ l.jsx(
    "div",
    {
      className: z(cc({ variant: t, padding: r, shadow: n, rounded: o, className: e })),
      ref: i,
      ...s
    }
  )
);
Js.displayName = "Card";
const Fn = ({
  label: e,
  error: t,
  disabled: r = !1,
  indeterminate: n = !1,
  variantSize: o = "sm",
  variant: a = "square",
  color: s = "primary",
  className: i = "",
  ...d
}) => {
  const u = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }, c = {
    primary: "checked:bg-primary-600 checked:border-primary-600 hover:border-primary-600",
    secondary: "checked:bg-secondary-600 checked:border-secondary-600 hover:border-secondary-600",
    success: "checked:bg-success-600 checked:border-success-600 hover:border-success-600",
    warning: "checked:bg-warning-600 checked:border-warning-600 hover:border-warning-600",
    error: "checked:bg-danger-600 checked:border-danger-600 hover:border-danger-600"
  }, f = t ? "border-danger-600 hover:border-danger-700" : "", p = xt(
    "border-2 transition-colors duration-200",
    "appearance-none cursor-pointer",
    "checked:bg-no-repeat checked:bg-center",
    a === "circle" ? 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]' : 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM0w0LjUgOC41TDIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=")]',
    {
      square: "rounded",
      circle: "rounded-full"
    }[a],
    u[o],
    c[s],
    f,
    r && "opacity-50 cursor-not-allowed",
    i
  ), $ = xt(
    "ml-2 text-sm font-medium",
    r && "opacity-50 cursor-not-allowed",
    t && "text-danger-600"
  );
  return /* @__PURE__ */ l.jsxs("div", { className: "items-center", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ l.jsx(
        "input",
        {
          type: "checkbox",
          className: p,
          disabled: r,
          ref: (k) => {
            k && (k.indeterminate = n);
          },
          ...d
        }
      ),
      e && /* @__PURE__ */ l.jsx("label", { className: $, children: e })
    ] }),
    t && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-sm text-danger-600", children: t })
  ] });
}, Dn = Ve(
  "flex flex-col",
  {
    variants: {
      layout: {
        vertical: "flex-col",
        horizontal: "flex-row flex-wrap",
        grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      },
      size: {
        sm: "gap-1",
        md: "gap-2",
        lg: "gap-3"
      }
    },
    defaultVariants: {
      layout: "vertical",
      size: "md"
    }
  }
), uc = _e(
  ({
    className: e,
    options: t = [],
    value: r,
    defaultValue: n = [],
    onChange: o,
    layout: a = "vertical",
    size: s = "md",
    error: i = !1,
    errorText: d,
    helperText: u,
    label: c,
    required: f = !1,
    labelPlacement: m = "top",
    fullWidth: p = !1,
    disabled: $ = !1,
    variant: k = "square",
    color: x = "primary",
    checkboxSize: N = "sm",
    showSelectAll: v = !1,
    selectAllText: j = "Select All",
    indeterminateSelectAll: T = !0,
    gap: O,
    selectAllGap: I,
    id: H,
    ...F
  }, R) => {
    const D = H || ae.useId(), g = `${D}-helper`, C = `${D}-error`, h = `${D}-group`, [P, A] = ae.useState(n), b = r !== void 0 ? r : P, y = (L, Y) => {
      const ce = Y ? [...b, L] : b.filter((be) => be !== L);
      r === void 0 && A(ce), o == null || o(ce);
    }, E = (L) => {
      const Y = L ? t.map((ce) => ce.value) : [];
      r === void 0 && A(Y), o == null || o(Y);
    }, S = t.length > 0 && b.length === t.length, W = b.length > 0 && b.length < t.length, M = T && W, B = (L) => L === "none" ? "gap-0" : L === "xs" ? "gap-1" : L === "sm" ? "gap-2" : L === "md" ? "gap-3" : L === "lg" ? "gap-4" : L === "xl" ? "gap-6" : null, K = B(O), _ = B(I), G = /* @__PURE__ */ l.jsx("div", { className: z("relative", !p && "inline-block"), children: /* @__PURE__ */ l.jsxs(
      "fieldset",
      {
        ref: R,
        id: h,
        className: z(
          Dn({ layout: a, size: s }),
          K,
          e
        ),
        "aria-describedby": i ? C : u ? g : void 0,
        "aria-invalid": i,
        "aria-required": f,
        ...F,
        children: [
          v && t.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: z(
            "flex flex-col",
            _ || K || Dn({ layout: "vertical", size: s })
          ), children: [
            /* @__PURE__ */ l.jsx(
              Fn,
              {
                label: j,
                checked: S,
                indeterminate: M,
                onChange: (L) => E(L.target.checked),
                disabled: $,
                variant: k,
                color: i ? "error" : x,
                variantSize: N,
                error: i ? " " : void 0
              }
            ),
            /* @__PURE__ */ l.jsx("div", { className: z(
              "flex",
              a === "vertical" && "flex-col",
              a === "horizontal" && "flex-row flex-wrap",
              a === "grid" && "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
              K || Dn({ layout: a, size: s })
            ), children: t.map((L) => /* @__PURE__ */ l.jsx(
              Fn,
              {
                label: L.label,
                checked: b.includes(L.value),
                onChange: (Y) => y(L.value, Y.target.checked),
                disabled: $ || L.disabled,
                indeterminate: L.indeterminate,
                variant: k,
                color: i ? "error" : x,
                variantSize: N,
                error: i ? " " : void 0
              },
              L.value
            )) })
          ] }),
          !v && /* @__PURE__ */ l.jsx(l.Fragment, { children: t.map((L) => /* @__PURE__ */ l.jsx(
            Fn,
            {
              label: L.label,
              checked: b.includes(L.value),
              onChange: (Y) => y(L.value, Y.target.checked),
              disabled: $ || L.disabled,
              indeterminate: L.indeterminate,
              variant: k,
              color: i ? "error" : x,
              variantSize: N,
              error: i ? " " : void 0
            },
            L.value
          )) })
        ]
      }
    ) }), X = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      i && d && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger", id: C, children: d }),
      !i && u && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral", id: g, children: u })
    ] });
    return m === "left" ? /* @__PURE__ */ l.jsx("div", { className: z(p ? "w-full" : "inline-block", e), children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-4", children: [
      c && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: h,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            c,
            f && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: z("flex-1", !p && "inline-block"), children: [
        G,
        X
      ] })
    ] }) }) : /* @__PURE__ */ l.jsxs("div", { className: z(p ? "w-full" : "inline-block", e), children: [
      c && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: h,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            c,
            f && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      G,
      X
    ] });
  }
);
uc.displayName = "CheckBoxGroup";
const fc = {
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
}, pc = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5"
}, gc = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full"
}, Lm = ({
  children: e,
  variant: t = "solid",
  color: r = "primary",
  size: n = "md",
  rounded: o = "xl",
  onClose: a,
  className: s,
  icon: i
}) => /* @__PURE__ */ l.jsxs(
  "div",
  {
    className: z(
      "inline-flex items-center gap-1.5 font-medium",
      fc[t][r],
      pc[n],
      gc[o],
      s
    ),
    children: [
      i && /* @__PURE__ */ l.jsx("span", { className: "inline-flex items-center", children: /* @__PURE__ */ l.jsx(pe, { icon: i, className: "w-4 h-4" }) }),
      e,
      a && /* @__PURE__ */ l.jsx(
        "button",
        {
          onClick: a,
          className: "ml-1 rounded-full hover:bg-black/10 p-0.5",
          "aria-label": "Close",
          children: /* @__PURE__ */ l.jsx(pe, { icon: "mdi:close", className: "w-3 h-3" })
        }
      )
    ]
  }
);
var Qs = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(Bs, function() {
    return function(r, n) {
      n.prototype.isSameOrAfter = function(o, a) {
        return this.isSame(o, a) || this.isAfter(o, a);
      };
    };
  });
})(Qs);
var mc = Qs.exports;
const bc = /* @__PURE__ */ Vs(mc);
var ei = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(Bs, function() {
    return function(r, n) {
      n.prototype.isSameOrBefore = function(o, a) {
        return this.isSame(o, a) || this.isBefore(o, a);
      };
    };
  });
})(ei);
var $c = ei.exports;
const hc = /* @__PURE__ */ Vs($c);
Te.extend(bc);
Te.extend(hc);
const vc = Ve(
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
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
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
      rounded: "xl",
      fullWidth: !0
    }
  }
), to = _e(
  ({
    value: e,
    onChange: t,
    minDate: r,
    maxDate: n,
    variant: o = "default",
    size: a = "md",
    rounded: s = "xl",
    disabled: i = !1,
    error: d = !1,
    errorText: u,
    helperText: c,
    label: f,
    required: m = !1,
    labelPlacement: p = "top",
    fullWidth: $ = !1,
    className: k,
    placeholder: x = "Select date",
    leftIcon: N,
    rightIcon: v,
    monthsToShow: j = 1,
    valueFormatter: T,
    rangeStart: O,
    rangeEnd: I,
    closeOnSelect: H = !0,
    calendarFooter: F,
    format: R = "DD-MM-YYYY",
    allowInput: D = !1,
    ...g
  }, C) => {
    const [h, P] = ne(!1), [A, b] = ne(e), [y, E] = ne(e || /* @__PURE__ */ new Date()), [S, W] = ne(!1), [M, B] = ne(""), K = oe(null), _ = oe(null), G = oe(null), X = oe(null), L = oe(null);
    yn(C, () => L.current, []), de(() => {
      b(e || void 0), B(e ? Y(e, R) : "");
    }, [e, R]), de(() => {
      B(A ? Y(A, R) : "");
    }, [A, R]);
    const Y = (ee, we) => {
      const te = ee.getDate().toString().padStart(2, "0"), Z = (ee.getMonth() + 1).toString().padStart(2, "0"), V = ee.getFullYear().toString();
      switch (we) {
        case "DD-MM-YYYY":
          return `${te}-${Z}-${V}`;
        case "YYYY-MM-DD":
          return `${V}-${Z}-${te}`;
        case "MM-DD-YYYY":
          return `${Z}-${te}-${V}`;
        default:
          return `${te}-${Z}-${V}`;
      }
    }, ce = (ee, we) => {
      const Z = ee.replace(/[^\d-]/g, "").split("-");
      if (Z.length !== 3) return null;
      let V, re, se;
      switch (we) {
        case "DD-MM-YYYY":
          [V, re, se] = Z.map(Number);
          break;
        case "YYYY-MM-DD":
          [se, re, V] = Z.map(Number);
          break;
        case "MM-DD-YYYY":
          [re, V, se] = Z.map(Number);
          break;
        default:
          [V, re, se] = Z.map(Number);
      }
      if (isNaN(V) || isNaN(re) || isNaN(se) || re < 1 || re > 12 || V < 1 || V > 31 || se < 1900 || se > 2099) return null;
      const ge = new Date(se, re - 1, V);
      return ge.getDate() !== V || ge.getMonth() !== re - 1 || ge.getFullYear() !== se ? null : ge;
    };
    de(() => {
      if (S && X.current) {
        const ee = Te(y).year(), we = X.current.querySelectorAll("[data-year]"), te = Array.from(we).find(
          (Z) => parseInt(Z.getAttribute("data-year") || "0") === ee
        );
        te && te.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center"
        });
      }
    }, [S, y]);
    const be = () => {
      if (!h || !_.current || !G.current) return;
      const { bottom: ee, left: we, width: te, top: Z } = _.current.getBoundingClientRect(), V = G.current, re = It(), se = re.innerHeight - ee, ge = Z, st = se < (j === 2 ? 400 : 350), dt = ge > se, Et = st && dt;
      j === 2 ? (Object.assign(V.style, {
        position: "fixed",
        left: `${we}px`,
        minWidth: "500px",
        width: "auto",
        transform: ""
      }), Et ? Object.assign(V.style, {
        bottom: `${re.innerHeight - Z + 4}px`,
        top: "auto",
        maxHeight: `${ge - 8}px`
      }) : Object.assign(V.style, {
        top: `${ee + 4}px`,
        bottom: "auto",
        maxHeight: `${se - 8}px`
      })) : (Object.assign(V.style, {
        position: "fixed",
        left: `${we + te / 2}px`,
        width: "320px",
        maxWidth: "100vw",
        transform: "translateX(-50%)"
      }), Et ? Object.assign(V.style, {
        bottom: `${re.innerHeight - Z + 4}px`,
        top: "auto",
        maxHeight: `${ge - 8}px`
      }) : Object.assign(V.style, {
        top: `${ee + 4}px`,
        bottom: "auto",
        maxHeight: `${se - 8}px`
      }));
    };
    de(() => {
      const ee = It(), we = Ze(), te = () => {
        h && be();
      }, Z = () => {
        h && be();
      }, V = (re) => {
        re.key === "Escape" && h && (P(!1), W(!1));
      };
      return h && (be(), ee.addEventListener("scroll", te, !0), ee.addEventListener("resize", Z), we.addEventListener("keydown", V)), () => {
        ee.removeEventListener("scroll", te, !0), ee.removeEventListener("resize", Z), we.removeEventListener("keydown", V);
      };
    }, [h]);
    const $e = (ee) => {
      if (O !== void 0 && I !== void 0)
        if (O && I)
          b(ee), B(Y(ee, R)), t == null || t(ee);
        else if (O) {
          const te = ee;
          Te(te).isBefore(O), b(te), B(Y(te, R)), t == null || t(te), P(!1), W(!1);
        } else
          b(ee), B(Y(ee, R)), t == null || t(ee);
      else
        b(ee), B(Y(ee, R)), t == null || t(ee), P(!1), W(!1);
    }, Ee = () => {
      E(Te(y).subtract(1, "month").toDate());
    }, Ye = () => {
      E(Te(y).add(1, "month").toDate());
    }, Oe = (ee) => {
      const we = Te(ee).startOf("month"), te = Te(ee).endOf("month"), Z = [];
      let V = we;
      for (; V.isBefore(te) || V.isSame(te, "day"); )
        Z.push(V.toDate()), V = V.add(1, "day");
      return Z;
    }, He = (ee) => !!(r && Te(ee).isBefore(r, "day") || n && Te(ee).isAfter(n, "day")), Ce = (ee) => {
      if (!D) return;
      const te = ee.target.value.replace(/[^\d-]/g, "");
      if (te.length < M.length) {
        B(te);
        return;
      }
      if (te.replace(/-/g, "").length > 8)
        return;
      let V = te;
      R === "DD-MM-YYYY" ? (te.length === 2 && !te.includes("-") || te.length === 5 && te.split("-").length === 2) && (V = te + "-") : R === "YYYY-MM-DD" ? (te.length === 4 && !te.includes("-") || te.length === 7 && te.split("-").length === 2) && (V = te + "-") : R === "MM-DD-YYYY" && (te.length === 2 && !te.includes("-") || te.length === 5 && te.split("-").length === 2) && (V = te + "-"), B(V);
    }, Xe = () => {
      if (!D) return;
      const ee = ce(M, R);
      if (ee) {
        if (r && ee < r) {
          B(Y(r, R)), b(r), t == null || t(r);
          return;
        }
        if (n && ee > n) {
          B(Y(n, R)), b(n), t == null || t(n);
          return;
        }
        b(ee), t == null || t(ee), B(Y(ee, R));
      } else
        B(A ? Y(A, R) : "");
    }, Re = () => {
      D && P(!1);
    }, lt = (ee) => {
      D && ee.key === "Enter" && (ee.preventDefault(), Xe());
    }, tt = (ee) => {
      const we = Te(y).year(ee).toDate();
      E(we), W(!1);
    }, Qe = () => {
      if (!S) return null;
      const ee = Te(y).year(), we = 1900, Z = Array.from(
        { length: 2099 - we + 1 },
        (V, re) => we + re
      );
      return /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: X,
          className: "grid grid-cols-5 gap-2 p-2 overflow-y-auto max-h-[300px]",
          children: Z.map((V) => /* @__PURE__ */ l.jsx(
            "div",
            {
              "data-year": V,
              onClick: () => tt(V),
              className: z(
                V === ee && "bg-primary-50 text-primary",
                "text-sm cursor-pointer p-2"
              ),
              children: V
            },
            V
          ))
        }
      );
    }, Ge = () => {
      if (!h) return null;
      const ee = Ze();
      if (!("body" in ee)) return null;
      const we = Array.from({ length: j }).map(
        (te, Z) => Te(y).add(Z, "month").toDate()
      );
      return Qt(
        /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "fixed inset-0 z-[9998]",
              onClick: () => {
                S || P(!1);
              }
            }
          ),
          /* @__PURE__ */ l.jsxs(
            "div",
            {
              ref: G,
              className: "fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-lg",
              onClick: (te) => te.stopPropagation(),
              children: [
                /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between p-2 border-b border-gray-200", children: [
                  /* @__PURE__ */ l.jsx(
                    qe,
                    {
                      onClick: Ee,
                      variant: "ghost",
                      size: "sm",
                      leftIcon: "mdi:chevron-left"
                    }
                  ),
                  /* @__PURE__ */ l.jsx("div", { className: "relative", children: /* @__PURE__ */ l.jsx("span", { className: "font-medium text-gray-900", children: j === 1 ? /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ l.jsx("span", { children: Te(y).format("MMMM") }),
                    /* @__PURE__ */ l.jsxs(
                      "div",
                      {
                        className: "cursor-pointer flex items-center gap-1",
                        onClick: () => W(!S),
                        children: [
                          /* @__PURE__ */ l.jsx("span", { children: Te(y).format("YYYY") }),
                          /* @__PURE__ */ l.jsx(qe, { variant: "ghost", size: "sm", leftIcon: S ? "mdi:chevron-up" : "mdi:chevron-down" })
                        ]
                      }
                    )
                  ] }) : `${Te(y).format("MMMM YYYY")} - ${Te(
                    y
                  ).add(j - 1, "month").format("MMMM YYYY")}` }) }),
                  /* @__PURE__ */ l.jsx(
                    qe,
                    {
                      onClick: Ye,
                      variant: "ghost",
                      size: "sm",
                      rightIcon: "mdi:chevron-right"
                    }
                  )
                ] }),
                S ? Qe() : /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: z(
                      j === 2 ? "flex gap-5 p-2 mx-auto w-fit" : "justify-between p-2 mx-auto w-fit"
                    ),
                    children: we.map((te, Z) => {
                      const V = Oe(te), re = Te(te).startOf("month").day();
                      return /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ l.jsxs("div", { className: "grid grid-cols-7 gap-y-1 my-1", children: [
                          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                            (se, ge) => {
                              const Ue = ge === 0 || ge === 6;
                              return /* @__PURE__ */ l.jsx(
                                "div",
                                {
                                  className: z(
                                    "text-center text-xs font-medium text-neutral",
                                    Ue && "text-danger"
                                  ),
                                  children: se
                                },
                                se
                              );
                            }
                          ),
                          Array.from({ length: re }).map(
                            (se, ge) => /* @__PURE__ */ l.jsx("div", {}, `empty-${ge}`)
                          ),
                          V.map((se) => {
                            const ge = A && Te(se).isSame(A, "day"), Ue = He(se), st = Te(se).isSame(
                              te,
                              "month"
                            ), dt = O && I && Te(se).isSameOrAfter(O, "day") && Te(se).isSameOrBefore(I, "day"), Et = O && Te(se).isSame(O, "day"), er = I && Te(se).isSame(I, "day"), Vt = Te(se).day() === 0 || Te(se).day() === 6, $t = O && I;
                            return /* @__PURE__ */ l.jsx("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ l.jsx(
                              "div",
                              {
                                className: z(
                                  dt && "rounded-none bg-primary-50",
                                  $t && Et && "rounded-l-full",
                                  $t && er && "rounded-r-full"
                                ),
                                children: /* @__PURE__ */ l.jsx(
                                  "button",
                                  {
                                    onClick: () => !Ue && $e(se),
                                    disabled: Ue,
                                    className: z(
                                      "p-2 text-sm transition-colors duration-200 w-10 h-10 rounded-full",
                                      Vt && "!text-danger",
                                      ge && "bg-primary !text-white hover:bg-primary-600 active:bg-primary-700",
                                      ge && !$t && "rounded-full",
                                      !ge && !Ue && "hover:bg-primary-50 active:bg-primary-100",
                                      !st && "text-neutral-400",
                                      Ue && "opacity-50 cursor-not-allowed",
                                      // inRange && "bg-primary-50 text-primary-900 rounded-none",
                                      $t && Et && "!bg-primary !text-white !rounded-full",
                                      $t && er && "!bg-primary !text-white !rounded-full"
                                    ),
                                    children: Te(se).format("D")
                                  },
                                  se.toString()
                                )
                              }
                            ) });
                          })
                        ] }),
                        F
                      ] }, Z);
                    })
                  }
                )
              ]
            }
          )
        ] }),
        ee.body
      );
    }, wt = /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: z("relative", !$ && "inline-block"),
        ref: _,
        onClick: () => !i && !D && P(!h),
        children: [
          N && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (ee) => {
                ee.stopPropagation(), i || P(!h);
              },
              children: /* @__PURE__ */ l.jsx(pe, { icon: N, className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "input",
            {
              ref: L,
              type: "text",
              value: D ? M : T ? T() : A ? Y(A, R) : "",
              placeholder: D ? R : x,
              readOnly: !D,
              maxLength: D ? 10 : void 0,
              onChange: Ce,
              onBlur: Xe,
              onFocus: Re,
              onKeyDown: lt,
              className: z(
                vc({ variant: d ? "error" : o, size: a, rounded: s, fullWidth: $ }),
                N && "pl-10",
                v && "pr-10",
                k
              ),
              disabled: i,
              ...g
            }
          ),
          v && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (ee) => {
                ee.stopPropagation(), i || P(!h);
              },
              children: /* @__PURE__ */ l.jsx(pe, { icon: v, className: "w-4 h-4" })
            }
          )
        ]
      }
    ), kt = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      u && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger", children: u }),
      !u && c && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral", children: c })
    ] });
    return p === "left" ? /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: z($ ? "w-full" : "inline-block", k),
        ref: K,
        children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-4", children: [
            f && /* @__PURE__ */ l.jsxs("label", { className: "block text-sm text-neutral-900 pt-2", children: [
              f,
              m && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: z("flex-1", !$ && "inline-block"), children: [
              wt,
              kt
            ] })
          ] }),
          Ge()
        ]
      }
    ) : /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: z($ ? "w-full" : "inline-block", k),
        ref: K,
        children: [
          f && /* @__PURE__ */ l.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
            f,
            m && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          wt,
          kt,
          Ge()
        ]
      }
    );
  }
);
to.displayName = "PrimitiveDatePicker";
const yc = _e(
  ({
    mode: e = "single",
    value: t,
    onChange: r,
    monthsToShow: n = 1,
    calendarFooter: o,
    error: a = !1,
    errorText: s,
    format: i = "DD-MM-YYYY",
    allowInput: d = !1,
    ...u
  }, c) => {
    const [f, m] = ne([
      void 0,
      void 0
    ]);
    if (e === "single") {
      const p = Array.isArray(t) ? t[0] : t;
      return /* @__PURE__ */ l.jsx(
        to,
        {
          ref: c,
          value: p === null ? void 0 : p,
          onChange: ($) => r == null ? void 0 : r($),
          monthsToShow: n,
          calendarFooter: o,
          error: a,
          errorText: s,
          format: i,
          allowInput: d,
          ...u
        }
      );
    }
    if (e === "range") {
      let [p, $] = Array.isArray(t) ? t : f;
      const k = (N) => {
        !p || p && $ ? (m([N, void 0]), r == null || r([N, void 0])) : p && !$ && (N < p ? (m([N, p]), r == null || r([N, p])) : (m([p, N]), r == null || r([p, N])));
      }, x = () => {
        if (!p) return "";
        const N = (v) => v ? v.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric"
        }) : "";
        return p && $ ? `${N(p)} - ${N($)}` : N(p);
      };
      return /* @__PURE__ */ l.jsx(
        to,
        {
          ref: c,
          value: p,
          onChange: k,
          monthsToShow: n,
          placeholder: u.placeholder || "Select date range",
          valueFormatter: x,
          rangeStart: p,
          rangeEnd: $,
          closeOnSelect: !!$,
          calendarFooter: o,
          error: a,
          errorText: s,
          format: i,
          allowInput: d,
          ...u
        }
      );
    }
    return null;
  }
);
yc.displayName = "DatePicker";
const ti = _e(
  ({ children: e, onClose: t, className: r, ...n }, o) => /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: o,
      className: z("mb-4 flex items-center justify-between", r),
      ...n,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "flex-1", children: e }),
        t && /* @__PURE__ */ l.jsx(
          "button",
          {
            onClick: t,
            className: "rounded-full p-1 text-gray hover:bg-gray-100 hover:text-gray-700",
            "aria-label": "Close dialog",
            children: /* @__PURE__ */ l.jsx(pe, { icon: "mdi:close", className: "h-5 w-5" })
          }
        )
      ]
    }
  )
), ha = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  // Historically `xl` used a larger cap; keep behavior for backward compatibility
  xl: "max-w-4xl",
  "2xl": "max-w-5xl",
  "3xl": "max-w-6xl",
  "4xl": "max-w-7xl",
  // Tailwind default stops at 7xl; for 5xl we use an explicit size
  "5xl": "max-w-[96rem]",
  fullscreen: "w-full h-full max-w-none max-h-none rounded-none"
}, xc = {
  sm: "w-64",
  // 16rem
  md: "w-80",
  // 20rem
  lg: "w-96",
  // 24rem
  xl: "w-[32rem]",
  "2xl": "w-[36rem]",
  "3xl": "w-[42rem]",
  "4xl": "w-[48rem]",
  "5xl": "w-[56rem]",
  fullscreen: "w-full"
}, wc = _e(
  ({
    isOpen: e,
    onClose: t,
    children: r,
    className: n,
    backdrop: o = "dark",
    header: a,
    closeOnBackdropClick: s = !0,
    size: i = "md",
    sizeClassName: d,
    rounded: u = "xl",
    position: c = "center",
    scrollBehavior: f = "normal",
    animationDuration: m = 300,
    animationDelay: p = 0,
    ...$
  }, k) => {
    const [x, N] = ne(e), [v, j] = ne(!1), T = oe(!1);
    if (Ds(() => {
      if (e) {
        N(!0), j(!1);
        const C = Ze();
        "body" in C && (f !== "outside" ? (C.body.style.overflow = "hidden", T.current = !0) : T.current = !1);
        const h = requestAnimationFrame(() => j(!0));
        return () => cancelAnimationFrame(h);
      }
      j(!1);
      const g = setTimeout(() => {
        N(!1);
        const C = Ze();
        "body" in C && T.current && (C.body.style.overflow = "", T.current = !1);
      }, m + p);
      return () => clearTimeout(g);
    }, [e, f, m, p]), de(() => {
      const g = (C) => {
        C instanceof KeyboardEvent && C.key === "Escape" && t();
      };
      return e && Ze().addEventListener("keydown", g), () => {
        Ze().removeEventListener("keydown", g);
      };
    }, [e, t]), !x) return null;
    const O = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, I = () => {
      s && t();
    }, H = Ze();
    if (!("body" in H)) return null;
    const F = (g) => {
      switch (g) {
        case "none":
          return "rounded-none";
        case "sm":
          return "rounded-sm";
        case "md":
          return "rounded-md";
        case "lg":
          return "rounded-lg";
        case "xl":
          return "rounded-xl";
        case "2xl":
          return "rounded-2xl";
        case "3xl":
          return "rounded-3xl";
        case "full":
          return "rounded-full";
        default:
          return "rounded-lg";
      }
    }, R = (() => {
      if (f === "inside")
        return i === "fullscreen" || c === "left" || c === "right" ? "overflow-y-auto" : "max-h-screen overflow-y-auto";
    })(), D = {
      transitionDuration: `${m}ms`,
      transitionDelay: `${p}ms`
    };
    return Qt(
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: z(
            "fixed inset-0 z-50 flex transition-opacity",
            O[o],
            v ? "opacity-100" : "opacity-0",
            c === "center" && "items-center justify-center",
            c === "top" && "items-start justify-center",
            c === "bottom" && "items-end justify-center",
            c === "left" && "items-stretch justify-start",
            c === "right" && "items-stretch justify-end"
          ),
          style: D,
          onClick: I,
          children: /* @__PURE__ */ l.jsxs(
            "div",
            {
              ref: k,
              className: z(
                "relative transform bg-white p-6 shadow-xl transition-all",
                // Width/Max-width behavior depends on position.
                // If `sizeClassName` is provided, it takes precedence except in fullscreen mode.
                i === "fullscreen" ? ha.fullscreen : d ?? (c === "left" || c === "right" ? xc[i] : ha[i]),
                // Position-based animations
                c === "center" && (v ? "scale-100 opacity-100" : "scale-95 opacity-0"),
                c === "left" && (v ? "translate-x-0 h-full" : "-translate-x-full h-full"),
                c === "right" && (v ? "translate-x-0 h-full" : "translate-x-full h-full"),
                c === "top" && (v ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"),
                c === "bottom" && (v ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"),
                n,
                i === "fullscreen" ? "rounded-none" : F(u),
                // Corner overrides so the edge touching the viewport is not rounded
                c === "left" && "rounded-l-none",
                c === "right" && "rounded-r-none",
                c === "top" && "rounded-t-none",
                c === "bottom" && "rounded-b-none",
                R
              ),
              style: D,
              onClick: (g) => g.stopPropagation(),
              ...$,
              children: [
                a && /* @__PURE__ */ l.jsx(ti, { onClose: t, children: a }),
                r
              ]
            }
          )
        }
      ),
      H.body
    );
  }
), kc = _e(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ l.jsx(
    "h2",
    {
      ref: n,
      className: z("text-xl font-semibold text-gray-900", t),
      ...r,
      children: e
    }
  )
), Ec = _e(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ l.jsx("div", { ref: n, className: z("text-gray-600", t), ...r, children: e })
), Nc = _e(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: n,
      className: z("mt-6 flex justify-end gap-3", t),
      ...r,
      children: e
    }
  )
);
wc.displayName = "Dialog";
kc.displayName = "DialogTitle";
Ec.displayName = "DialogBody";
Nc.displayName = "DialogActions";
ti.displayName = "DialogHeader";
const Pc = ({
  orientation: e = "horizontal",
  variant: t = "solid",
  color: r = "neutral",
  size: n = "sm",
  className: o = ""
}) => {
  const a = {
    horizontal: "w-full border-t-0 border-l-0 border-r-0 border-b",
    vertical: "h-full border-l border-t-0 border-r-0 border-b-0"
  }, s = {
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
    sm: e === "horizontal" ? "border-b" : "border-l",
    md: e === "horizontal" ? "border-b-2" : "border-l-2",
    lg: e === "horizontal" ? "border-b-4" : "border-l-4"
  }, u = xt(
    "inline-block",
    a[e],
    s[t],
    i[r],
    d[n],
    o
  );
  return /* @__PURE__ */ l.jsx("div", { className: u });
}, Tc = {
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
}, Cc = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, va = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
}, Mm = ({
  accept: e = ["*"],
  maxSize: t = 5 * 1024 * 1024,
  // 5MB default
  multiple: r = !1,
  value: n = [],
  onChange: o,
  className: a,
  disabled: s = !1,
  placeholder: i = "Drag and drop files here or click to browse",
  variant: d = "default",
  shadow: u = "none",
  rounded: c = "lg",
  children: f,
  showFileList: m = !0,
  showPlaceholder: p = !0,
  showMaxSize: $ = !0,
  icon: k = "mdi:upload"
}) => {
  const [x, N] = ne(!1), [v, j] = ne(null), T = oe(null), O = fe((h) => {
    h.preventDefault(), s || N(!0);
  }, [s]), I = fe((h) => {
    h.preventDefault(), N(!1);
  }, []), H = fe((h) => h.size > t ? `File size exceeds ${t / (1024 * 1024)}MB limit` : e[0] !== "*" && !e.some((P) => P.startsWith(".") ? h.name.toLowerCase().endsWith(P.toLowerCase()) : h.type.startsWith(P)) ? `File type not allowed. Allowed types: ${e.join(", ")}` : null, [e, t]), F = fe((h) => {
    if (h.preventDefault(), N(!1), j(null), s) return;
    const P = Array.from(h.dataTransfer.files), A = [], b = [];
    if (P.forEach((y) => {
      const E = H(y);
      E ? b.push(`${y.name}: ${E}`) : A.push(y);
    }), b.length > 0 && j(b.join(`
`)), A.length > 0) {
      const y = r ? [...n, ...A] : A;
      o == null || o(y);
    }
  }, [s, r, o, H, n]), R = fe((h) => {
    if (j(null), s || !h.target.files) return;
    const P = Array.from(h.target.files), A = [], b = [];
    if (P.forEach((y) => {
      const E = H(y);
      E ? b.push(`${y.name}: ${E}`) : A.push(y);
    }), b.length > 0 && j(b.join(`
`)), A.length > 0) {
      const y = r ? [...n, ...A] : A;
      o == null || o(y);
    }
    T.current && (T.current.value = "");
  }, [s, r, o, H, n]), D = fe((h) => {
    const P = [...n];
    P.splice(h, 1), o == null || o(P);
  }, [o, n]), g = (h) => h.type.startsWith("image/") ? /* @__PURE__ */ l.jsx(pe, { icon: "mdi:image", className: "w-5 h-5" }) : h.type.startsWith("text/") ? /* @__PURE__ */ l.jsx(pe, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ l.jsx(pe, { icon: "mdi:file", className: "w-5 h-5" }), C = Tc[d];
  return /* @__PURE__ */ l.jsxs("div", { className: ve("w-full", a), children: [
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: ve(
          "p-6 text-center transition-colors",
          !f && [
            "border-2 border-dashed",
            C.border,
            C.bg,
            x && C.active,
            !s && C.hover
          ],
          s && "opacity-50 cursor-not-allowed",
          Cc[u],
          va[c],
          !f && "cursor-pointer"
        ),
        onDragOver: O,
        onDragLeave: I,
        onDrop: F,
        onClick: () => {
          var h;
          return !s && !f && ((h = T.current) == null ? void 0 : h.click());
        },
        children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              ref: T,
              type: "file",
              accept: e.join(","),
              multiple: r,
              onChange: R,
              className: "hidden",
              disabled: s
            }
          ),
          f ? /* @__PURE__ */ l.jsx("div", { onClick: () => {
            var h;
            return !s && ((h = T.current) == null ? void 0 : h.click());
          }, children: f }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsx(pe, { icon: k, className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
            p && /* @__PURE__ */ l.jsx("p", { className: ve("text-neutral-600", C.text), children: i }),
            $ && /* @__PURE__ */ l.jsxs("p", { className: "text-sm text-neutral mt-2", children: [
              "Max file size: ",
              t / (1024 * 1024),
              "MB"
            ] })
          ] })
        ]
      }
    ),
    v && /* @__PURE__ */ l.jsx("p", { className: "mt-2 text-sm text-danger", children: v }),
    m && n.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "mt-4 space-y-2", children: n.map((h, P) => /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: ve(
          "flex items-center justify-between p-2",
          va[c],
          C.bg
        ),
        children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex items-center space-x-2", children: [
            g(h),
            /* @__PURE__ */ l.jsx("span", { className: ve("text-sm", C.text), children: h.name }),
            /* @__PURE__ */ l.jsxs("span", { className: "text-xs text-neutral", children: [
              "(",
              (h.size / 1024).toFixed(1),
              " KB)"
            ] })
          ] }),
          !s && /* @__PURE__ */ l.jsx(
            "button",
            {
              onClick: () => D(P),
              className: "p-1 text-neutral hover:text-danger",
              children: /* @__PURE__ */ l.jsx(pe, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${h.name}-${P}`
    )) })
  ] });
}, Sc = Ve(
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
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      rounded: "xl"
    }
  }
), Fm = ({
  title: e,
  children: t,
  icon: r,
  variant: n = "default",
  rounded: o = "xl",
  showClose: a = !1,
  onClose: s,
  className: i
}) => {
  const d = () => {
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
  }, u = () => {
    if (r) return r;
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
  return /* @__PURE__ */ l.jsxs("div", { className: z(Sc({ variant: n, rounded: o }), i), children: [
    r && /* @__PURE__ */ l.jsx(pe, { icon: u(), className: z("h-5 w-5 flex-shrink-0", d()) }),
    /* @__PURE__ */ l.jsxs("div", { className: "flex-1", children: [
      e && /* @__PURE__ */ l.jsx("h3", { className: "text-sm font-medium text-neutral-900", children: e }),
      /* @__PURE__ */ l.jsx("div", { className: "mt-1 text-sm text-neutral", children: t })
    ] }),
    a && /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        className: "ml-auto flex-shrink-0 text-neutral-400 hover:text-neutral",
        onClick: s,
        children: /* @__PURE__ */ l.jsx(pe, { icon: "mdi:close", className: "h-5 w-5" })
      }
    )
  ] });
}, zn = "select-dropdown-opened", jc = Ve(
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
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
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
      fullWidth: !0,
      rounded: "xl"
    }
  }
), ri = _e(
  ({
    className: e,
    variant: t = "default",
    size: r = "md",
    rounded: n = "xl",
    options: o,
    label: a,
    error: s = !1,
    errorText: i,
    helperText: d,
    required: u = !1,
    placeholder: c,
    value: f,
    onChange: m,
    disabled: p = !1,
    position: $ = "bottom",
    fullWidth: k = !1,
    children: x,
    leftIcon: N,
    rightIcon: v,
    ...j
  }, T) => {
    const [O, I] = ne(!1), H = oe(null), F = oe(null), D = `select-${ae.useId().replace(/:/g, "")}`, g = () => {
      if (O && H.current && F.current) {
        const y = H.current.getBoundingClientRect(), E = F.current, S = It(), W = S.innerHeight - y.bottom, M = y.top, K = y.bottom + E.offsetHeight + 4 >= S.innerHeight, _ = M > W, G = K && _;
        $ === "bottom" || $ === "top" ? (E.style.position = "fixed", E.style.left = `${y.left}px`, E.style.width = `${y.width}px`, $ === "bottom" && G ? (E.style.bottom = `${S.innerHeight - y.top + 4}px`, E.style.top = "auto", E.style.maxHeight = `${M - 8}px`) : $ === "bottom" ? (E.style.top = `${y.bottom + 4}px`, E.style.bottom = "auto", E.style.maxHeight = `${W - 8}px`) : $ === "top" && !G ? (E.style.top = `${y.bottom + 4}px`, E.style.bottom = "auto", E.style.maxHeight = `${W - 8}px`) : (E.style.bottom = `${S.innerHeight - y.top + 4}px`, E.style.top = "auto", E.style.maxHeight = `${M - 8}px`)) : $ === "left" ? (E.style.position = "fixed", E.style.right = `${S.innerWidth - y.left + 4}px`, E.style.top = `${y.top}px`, E.style.maxHeight = `${S.innerHeight - y.top - 8}px`) : $ === "right" && (E.style.position = "fixed", E.style.left = `${y.right + 4}px`, E.style.top = `${y.top}px`, E.style.maxHeight = `${S.innerHeight - y.top - 8}px`);
      }
    };
    de(() => {
      const y = It(), E = () => {
        O && g();
      }, S = () => {
        O && g();
      };
      return O && (g(), y.addEventListener("scroll", E, !0), y.addEventListener("resize", S)), () => {
        y.removeEventListener("scroll", E, !0), y.removeEventListener("resize", S);
      };
    }, [O, $]), de(() => {
      const y = Ze(), E = (W) => {
        W.detail.id !== D && I(!1);
      }, S = (W) => {
        const M = W.target, B = H.current, K = F.current;
        B && K && !B.contains(M) && !K.contains(M) && I(!1);
      };
      return y.addEventListener(zn, E), y.addEventListener("click", S), () => {
        y.removeEventListener(zn, E), y.removeEventListener("click", S);
      };
    }, [D]);
    const C = () => {
      if (p) return;
      if (O) {
        I(!1);
        return;
      }
      Ze().dispatchEvent(
        new CustomEvent(zn, {
          detail: { id: D }
        })
      ), I(!0);
    }, h = () => {
      if (o) {
        const y = o.find((E) => E.value === f);
        return y == null ? void 0 : y.label;
      }
      if (x) {
        const E = pr.toArray(x).find(
          (S) => lr(S) && "value" in S.props && S.props.value === f
        );
        return lr(E) ? E.props.children : null;
      }
      return null;
    }, P = (y) => {
      p || (m == null || m(y), I(!1));
    }, A = () => o ? o.map((y) => /* @__PURE__ */ l.jsx(
      wn,
      {
        value: y.value,
        disabled: y.disabled,
        selected: y.value === f,
        onClick: () => {
          y.onClick && y.onClick(y.value), P(y.value);
        },
        children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
          y.icon,
          y.label
        ] })
      },
      y.value
    )) : x ? pr.map(x, (y) => lr(y) && "value" in y.props ? xn(y, {
      selected: y.props.value === f,
      onClick: () => P(y.props.value)
    }) : null) : null, b = () => {
      if (!O || p) return null;
      const y = /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: F,
          className: z(
            "fixed z-[9999] min-w-[8rem] border border-neutral-200 bg-white py-1 shadow-lg rounded-lg",
            $ === "left" || $ === "right" ? "w-max" : "w-full"
          ),
          onClick: (S) => S.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: A()
        }
      ), E = Ze();
      return "body" in E ? Qt(y, E.body) : null;
    };
    return /* @__PURE__ */ l.jsxs("div", { className: z(k ? "w-full" : "inline-block"), ref: T, ...j, children: [
      a && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: D,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            a,
            u && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsxs(
        "div",
        {
          className: z("relative", !k && "inline-block"),
          onClick: C,
          children: [
            /* @__PURE__ */ l.jsxs(
              "button",
              {
                id: D,
                ref: H,
                type: "button",
                className: z(
                  jc({ variant: s ? "error" : t, size: r, rounded: n, fullWidth: k }),
                  "flex items-center justify-between",
                  p && "cursor-not-allowed opacity-50",
                  N && "pl-10",
                  v && "pr-10",
                  e
                ),
                "aria-haspopup": "listbox",
                "aria-expanded": O,
                "aria-describedby": s ? `${D}-error` : d ? `${D}-helper` : void 0,
                disabled: p,
                children: [
                  N && /* @__PURE__ */ l.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ l.jsx(pe, { icon: N, className: "w-4 h-4" }) }),
                  /* @__PURE__ */ l.jsx("span", { className: "flex items-center gap-2 min-w-0 flex-1", children: /* @__PURE__ */ l.jsx("span", { className: z(
                    "truncate text-left",
                    h() ? "text-neutral-900" : "text-neutral"
                  ), children: h() || c }) }),
                  v ? /* @__PURE__ */ l.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ l.jsx(pe, { icon: v, className: "w-4 h-4" }) }) : /* @__PURE__ */ l.jsx(
                    pe,
                    {
                      icon: "mdi:chevron-down",
                      className: z("transition-transform flex-shrink-0 ml-2 w-4 h-4", O && "rotate-180")
                    }
                  )
                ]
              }
            ),
            b()
          ]
        }
      ),
      s && i && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger", id: `${D}-error`, children: i }),
      !s && d && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral", id: `${D}-helper`, children: d })
    ] });
  }
);
ri.displayName = "Select";
const Oc = ({
  currentPage: e,
  totalPages: t,
  totalData: r,
  onPageChange: n,
  siblingCount: o = 1,
  className: a,
  perPageOptions: s,
  perPage: i = 10,
  label: d = "",
  onPerPageChange: u
}) => {
  const c = (p, $) => {
    const k = $ - p + 1;
    return Array.from({ length: k }, (x, N) => N + p);
  }, m = (() => {
    const p = o * 2 + 3, $ = p + 2;
    if (t > $) {
      const k = Math.max(2, e - o), x = Math.min(t - 1, e + o);
      let N = c(k, x);
      const v = k > 2, j = t - x > 1, T = p - (N.length + 1);
      if (v && !j)
        N = [...c(k - T, k - 1), ...N];
      else if (!v && j) {
        const O = c(x + 1, x + T);
        N = [...N, ...O];
      } else v && j && (N = [...N]);
      return [1, ...N, t];
    }
    return c(1, t);
  })();
  return /* @__PURE__ */ l.jsxs(
    "nav",
    {
      className: ve("flex items-center justify-between space-x-1", a),
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "hidden sm:block text-sm text-neutral-700", children: [
          /* @__PURE__ */ l.jsx("b", { children: `${e} - ${t}` }),
          " dari ",
          r,
          " ",
          d
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
          s && s.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2 mr-4", children: [
            /* @__PURE__ */ l.jsx("span", { className: "text-neutral-700 text-sm", children: "Menampilkan" }),
            /* @__PURE__ */ l.jsx(
              ri,
              {
                value: i == null ? void 0 : i.toString(),
                onChange: (p) => u && u(Number(p)),
                size: "sm",
                className: "w-16",
                fullWidth: !1,
                "aria-label": "Items per page",
                children: s.map((p) => /* @__PURE__ */ l.jsx(wn, { value: p.toString(), children: p }, p))
              }
            ),
            /* @__PURE__ */ l.jsx("span", { className: "text-neutral-700 text-sm", children: "data per halaman" })
          ] }),
          /* @__PURE__ */ l.jsx(
            qe,
            {
              variant: "ghost",
              onClick: () => n(e - 1),
              disabled: e === 1,
              className: ve(
                "px-3 py-1 rounded-md text-sm",
                e === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              ),
              children: /* @__PURE__ */ l.jsx(pe, { size: "18", icon: "mdi:chevron-left" })
            }
          ),
          m.map((p, $) => {
            const k = p === e, x = typeof p == "string" && p === "...";
            return /* @__PURE__ */ l.jsx(
              qe,
              {
                variant: "ghost",
                onClick: () => !x && n(p),
                className: ve(
                  "px-3 py-1 rounded-md text-sm",
                  k ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  x && "cursor-default"
                ),
                children: p
              },
              $
            );
          }),
          /* @__PURE__ */ l.jsx(
            qe,
            {
              variant: "ghost",
              onClick: () => n(e + 1),
              disabled: e === t,
              className: ve(
                "px-3 py-1 rounded-md text-sm",
                e === t ? "text-gray-400 cursor-not-allowed" : "text-gray-700"
              ),
              children: /* @__PURE__ */ l.jsx(pe, { size: "18", icon: "mdi:chevron-right" })
            }
          )
        ] })
      ]
    }
  );
}, Ic = ({
  label: e,
  checked: t = !1,
  disabled: r = !1,
  onChange: n,
  name: o,
  value: a,
  error: s,
  color: i = "primary",
  variantSize: d = "sm"
}) => {
  const u = (m) => {
    n == null || n(m.target.checked);
  }, c = {
    sm: "h-4 w-4 before:h-2 before:w-2",
    md: "h-5 w-5 before:h-2.5 before:w-2.5",
    lg: "h-6 w-6 before:h-3 before:w-3"
  }, f = {
    primary: "text-primary-600 checked:border-primary-600 hover:border-primary-600",
    secondary: "text-secondary-600 checked:border-secondary-600 hover:border-secondary-600",
    success: "text-success-600 checked:border-success-600 hover:border-success-600",
    warning: "text-warning-600 checked:border-warning-600 hover:border-warning-600",
    error: "text-danger-600 checked:border-danger-600 hover:border-danger-600"
  };
  return /* @__PURE__ */ l.jsxs(
    "label",
    {
      className: xt(
        "inline-flex items-center gap-2 cursor-pointer select-none",
        r && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "radio",
            name: o,
            value: a,
            checked: t,
            disabled: r,
            onChange: u,
            className: xt(
              // Base control
              "appearance-none rounded-full border-2 bg-white shrink-0",
              // Center a pseudo-element dot
              "grid place-items-center",
              // Inner dot (smooth, perfectly centered)
              "before:content-[''] before:rounded-full before:bg-current before:scale-0",
              "before:transition-transform before:duration-150 before:ease-out",
              "checked:before:scale-100",
              // Sizes
              c[d],
              // Colors (currentColor + checked border color)
              f[i],
              t ? "" : s ? "border-danger-600" : "border-gray-300",
              !t && s && "hover:border-danger-700",
              // Focus only when keyboard navigating (prevents extra “ring” on click)
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-current"
            )
          }
        ),
        e && /* @__PURE__ */ l.jsx(
          "span",
          {
            className: xt(
              "text-sm font-medium leading-none",
              s && "text-danger-600"
            ),
            children: e
          }
        )
      ]
    }
  );
}, Ac = Ve(
  "flex flex-col",
  {
    variants: {
      layout: {
        vertical: "flex-col",
        horizontal: "flex-row flex-wrap",
        grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      },
      size: {
        sm: "gap-1",
        md: "gap-2",
        lg: "gap-3"
      }
    },
    defaultVariants: {
      layout: "vertical",
      size: "md"
    }
  }
), _c = _e(
  ({
    className: e,
    options: t = [],
    value: r,
    defaultValue: n,
    onChange: o,
    layout: a = "vertical",
    size: s = "md",
    error: i = !1,
    errorText: d,
    helperText: u,
    label: c,
    required: f = !1,
    labelPlacement: m = "top",
    fullWidth: p = !1,
    disabled: $ = !1,
    name: k,
    gap: x,
    color: N = "primary",
    radioSize: v = "sm",
    id: j,
    ...T
  }, O) => {
    const I = j || ae.useId(), H = `${I}-helper`, F = `${I}-error`, R = `${I}-group`, D = k || `radio-group-${I}`, [g, C] = ae.useState(n), h = r !== void 0 ? r : g, P = (S) => {
      r === void 0 && C(S), o == null || o(S);
    }, b = ((S) => S === "none" ? "gap-0" : S === "xs" ? "gap-1" : S === "sm" ? "gap-2" : S === "md" ? "gap-3" : S === "lg" ? "gap-4" : S === "xl" ? "gap-6" : null)(x), y = /* @__PURE__ */ l.jsx("div", { className: z("relative", !p && "inline-block"), children: /* @__PURE__ */ l.jsx(
      "fieldset",
      {
        ref: O,
        id: R,
        className: z(
          Ac({ layout: a, size: s }),
          b,
          e
        ),
        "aria-describedby": i ? F : u ? H : void 0,
        "aria-invalid": i,
        "aria-required": f,
        ...T,
        children: t.map((S) => /* @__PURE__ */ l.jsx(
          Ic,
          {
            label: S.label,
            checked: h === S.value,
            onChange: () => P(S.value),
            disabled: $ || S.disabled,
            name: D,
            value: S.value,
            color: i ? "error" : N,
            error: i ? " " : void 0,
            variantSize: v
          },
          S.value
        ))
      }
    ) }), E = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      i && d && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger", id: F, children: d }),
      !i && u && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral", id: H, children: u })
    ] });
    return m === "left" ? /* @__PURE__ */ l.jsx("div", { className: z(p ? "w-full" : "inline-block", e), children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-4", children: [
      c && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: R,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            c,
            f && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: z("flex-1", !p && "inline-block"), children: [
        y,
        E
      ] })
    ] }) }) : /* @__PURE__ */ l.jsxs("div", { className: z(p ? "w-full" : "inline-block", e), children: [
      c && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: R,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            c,
            f && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      y,
      E
    ] });
  }
);
_c.displayName = "RadioGroup";
const ya = Ve("animate-pulse bg-neutral-200", {
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
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      full: "rounded-full"
    },
    fullWidth: {
      true: "w-full",
      false: "w-fit"
    },
    pulseVariant: {
      default: "",
      "left-to-right": "relative overflow-hidden"
    }
  },
  defaultVariants: {
    variant: "default",
    rounded: "md",
    fullWidth: !1,
    pulseVariant: "default"
  }
}), Rc = ({
  width: e,
  height: t,
  variant: r = "default",
  rounded: n = "xl",
  fullWidth: o = !1,
  pulseVariant: a = "default",
  className: s
}) => a === "left-to-right" ? /* @__PURE__ */ l.jsxs("div", { className: "relative overflow-hidden", children: [
  /* @__PURE__ */ l.jsx(
    "div",
    {
      className: z(
        ya({ variant: r, rounded: n, fullWidth: o, pulseVariant: "default" }),
        s
      ),
      style: {
        width: !o && typeof e == "number" ? `${e}px` : e,
        height: typeof t == "number" ? `${t}px` : t
      }
    }
  ),
  /* @__PURE__ */ l.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-pulse-left-to-right pointer-events-none" })
] }) : /* @__PURE__ */ l.jsx(
  "div",
  {
    className: z(
      ya({ variant: r, rounded: n, fullWidth: o, pulseVariant: a }),
      s
    ),
    style: {
      width: !o && typeof e == "number" ? `${e}px` : e,
      height: typeof t == "number" ? `${t}px` : t
    }
  }
), Dm = ({
  min: e = 0,
  max: t = 100,
  step: r = 1,
  value: n,
  defaultValue: o = e,
  onChange: a,
  className: s,
  disabled: i = !1,
  showValue: d = !1,
  marks: u = [],
  range: c = !1
}) => {
  const f = c, [m, p] = ne(
    n !== void 0 ? n : o !== void 0 ? o : f ? [e, t] : e
  ), [$, k] = ne(null), x = oe(null), N = n !== void 0 ? n : m, [v, j] = f ? Array.isArray(N) ? N : [e, t] : [typeof N == "number" ? N : e, t], T = (b) => Math.min(Math.max(b, e), t), O = (b) => {
    if (i) return;
    let y;
    f && Array.isArray(b) ? y = [T(b[0]), T(b[1])] : !f && typeof b == "number" ? y = T(b) : y = f ? [e, t] : e, n === void 0 && p(y), a == null || a(y);
  }, I = (b) => {
    if (!x.current) return e;
    const y = x.current.getBoundingClientRect(), S = (b - y.left) / y.width, W = e + (t - e) * S, M = Math.round(W / r) * r;
    return T(M);
  }, H = (b) => (y) => {
    i || (k(b), y.stopPropagation());
  }, F = (b) => {
    if (!i)
      if (!f)
        k(0), R(b, 0);
      else {
        const y = I(b.clientX), E = Math.abs(y - v), S = Math.abs(y - j), W = E < S ? 0 : 1;
        k(W), R(b, W);
      }
  }, R = ae.useCallback((b, y) => {
    const E = I(b.clientX);
    if (!f)
      O(E);
    else {
      let S = [v, j];
      y === 0 ? S = [Math.min(E, j - r), j] : S = [v, Math.max(E, v + r)], S[0] > S[1] && (S = [S[1], S[0]]), O(S);
    }
  }, [f, v, j, r, O, I]), D = ae.useRef($);
  D.current = $;
  const g = ae.useCallback(function(b) {
    D.current === null || i || R(b, D.current);
  }, [i, R]), C = ae.useCallback(function() {
    k(null);
  }, []);
  de(() => {
    if ($ !== null) {
      const b = It();
      return b.addEventListener("mousemove", g), b.addEventListener("mouseup", C), () => {
        b.removeEventListener("mousemove", g), b.removeEventListener("mouseup", C);
      };
    }
  }, [$, g, C]);
  const h = (b) => (b - e) / (t - e) * 100, P = h(v), A = h(j);
  return /* @__PURE__ */ l.jsxs("div", { className: ve("relative w-full", s), children: [
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: x,
        className: ve(
          "relative h-2 bg-gray-200 rounded-full cursor-pointer",
          i && "opacity-50 cursor-not-allowed"
        ),
        onMouseDown: F,
        children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "absolute h-full bg-primary rounded-full",
              style: { left: `${f ? P : 0}%`, width: `${f ? A - P : P}%` }
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: ve(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                i && "cursor-not-allowed"
              ),
              style: { left: `${P}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: H(0)
            }
          ),
          f && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: ve(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                i && "cursor-not-allowed"
              ),
              style: { left: `${A}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: H(1)
            }
          )
        ]
      }
    ),
    u.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "flex justify-between mt-2", children: u.map((b) => /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "text-xs text-gray",
        style: { left: `${(b.value - e) / (t - e) * 100}%` },
        children: b.label
      },
      b.value
    )) }),
    d && /* @__PURE__ */ l.jsx("div", { className: "mt-2 text-sm text-gray-600", children: f ? `${v} - ${j}` : v })
  ] });
}, Lc = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}, Mc = {
  primary: "text-primary",
  warning: "text-warning",
  default: "text-default-400"
}, zm = ({
  rating: e,
  maxRating: t = 5,
  size: r = "md",
  color: n = "primary",
  readOnly: o = !1,
  onRatingChange: a,
  className: s
}) => {
  const [i, d] = ne(null), u = (p) => {
    o || d(p);
  }, c = () => {
    o || d(null);
  }, f = (p) => {
    !o && a && a(p);
  }, m = i !== null ? i : e;
  return /* @__PURE__ */ l.jsx("div", { className: z("flex items-center gap-1", s), children: [...Array(t)].map((p, $) => {
    const k = $ + 1, x = k <= m, N = i !== null && k <= i;
    return /* @__PURE__ */ l.jsx(
      "button",
      {
        className: z(
          "transition-colors duration-200",
          Lc[r],
          x || N ? Mc[n] : "text-default-200",
          !o && "cursor-pointer"
        ),
        onMouseEnter: () => u(k),
        onMouseLeave: c,
        onClick: () => f(k),
        disabled: o,
        "aria-label": `Rate ${k} out of ${t}`,
        children: /* @__PURE__ */ l.jsx(
          pe,
          {
            icon: x || N ? "mdi:star" : "mdi:star-outline",
            className: "w-full h-full"
          }
        )
      },
      $
    );
  }) });
}, Fc = {
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
}, Dc = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4"
}, Gm = ({
  status: e,
  size: t = "md",
  withLabel: r = !1,
  className: n
}) => {
  const { bgColor: o, label: a } = Fc[e], s = Dc[t];
  return /* @__PURE__ */ l.jsxs("div", { className: z("flex items-center gap-2", n), children: [
    /* @__PURE__ */ l.jsx("div", { className: z("rounded-full animate-pulse", o, s) }),
    r && /* @__PURE__ */ l.jsx("span", { className: "text-sm", children: a })
  ] });
}, ni = (e, t) => {
  if (t) return t;
  switch (e) {
    case "completed":
      return "mdi:check";
    case "active":
      return "mdi:circle-medium";
    default:
      return "mdi:circle-outline";
  }
}, oi = (e) => {
  switch (e) {
    case "completed":
      return "text-white bg-primary ring-4 ring-primary-50";
    case "active":
      return "text-primary bg-primary-50 ring-4 ring-primary-50";
    default:
      return "text-neutral bg-neutral-50 ring-4 ring-neutral-50";
  }
}, zc = ({
  steps: e,
  activeStep: t,
  className: r,
  variant: n = "default"
}) => /* @__PURE__ */ l.jsx("div", { className: z("flex flex-row items-center w-full justify-between", r), children: e.map((o, a) => {
  const s = a < t ? "completed" : a === t ? "active" : "pending";
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "flex items-center flex-1",
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: z(
          "flex flex-col items-center z-10",
          n === "default" ? "gap-4" : "gap-2",
          n === "default" ? "px-5" : "px-3"
        ), children: [
          n === "default" && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: z(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                oi(s)
              ),
              children: /* @__PURE__ */ l.jsx(
                pe,
                {
                  icon: ni(s, o.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ l.jsx(
              "span",
              {
                className: z(
                  "text-sm font-medium",
                  s === "active" ? "text-primary" : s === "completed" ? "text-neutral-900" : "text-neutral"
                ),
                children: o.label
              }
            ),
            o.description && /* @__PURE__ */ l.jsx("span", { className: "text-xs text-neutral", children: o.description })
          ] })
        ] }),
        a < e.length - 1 && /* @__PURE__ */ l.jsx(
          Pc,
          {
            className: z(
              "transition-all duration-200",
              a < t ? "bg-primary" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    a
  );
}) }), Gc = ({
  steps: e,
  activeStep: t,
  className: r,
  variant: n = "default"
}) => /* @__PURE__ */ l.jsx("div", { className: z("flex flex-col items-start gap-8", r), children: e.map((o, a) => {
  const s = a < t ? "completed" : a === t ? "active" : "pending";
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "flex flex-row w-full items-center relative",
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: z(
          "flex flex-row items-center z-10",
          n === "default" ? "gap-4" : "gap-2"
        ), children: [
          n === "default" && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: z(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                oi(s)
              ),
              children: /* @__PURE__ */ l.jsx(
                pe,
                {
                  icon: ni(s, o.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-start", children: [
            /* @__PURE__ */ l.jsx(
              "span",
              {
                className: z(
                  "text-sm font-medium",
                  s === "active" ? "text-primary00" : s === "completed" ? "text-neutral-900" : "text-neutral"
                ),
                children: o.label
              }
            ),
            o.description && /* @__PURE__ */ l.jsx("span", { className: "text-xs text-neutral", children: o.description })
          ] })
        ] }),
        a < e.length - 1 && /* @__PURE__ */ l.jsx(
          "div",
          {
            className: z(
              "absolute transition-all duration-200",
              n === "default" ? "left-4 w-[1px] top-10 bottom-[-24px]" : "left-0 w-[1px] top-6 bottom-[-24px]",
              a < t ? "bg-primary" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    a
  );
}) }), Bm = ({
  orientation: e = "horizontal",
  variant: t = "default",
  ...r
}) => e === "vertical" ? /* @__PURE__ */ l.jsx(Gc, { variant: t, ...r }) : /* @__PURE__ */ l.jsx(zc, { variant: t, ...r }), Vm = ({
  label: e,
  checked: t = !1,
  disabled: r = !1,
  onChange: n,
  size: o = "md"
}) => {
  const a = (d) => {
    n && n(d.target.checked);
  }, s = {
    sm: "w-8 h-4",
    md: "w-11 h-6",
    lg: "w-14 h-7"
  }, i = {
    sm: "w-3 h-3",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  return /* @__PURE__ */ l.jsxs(
    "label",
    {
      className: ve(
        "inline-flex items-center cursor-pointer",
        r && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              className: "sr-only",
              checked: t,
              disabled: r,
              onChange: a
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: ve(
                "block rounded-full transition-colors duration-200 ease-in-out",
                s[o],
                t ? "bg-primary" : "bg-gray-200 dark:bg-gray-700",
                r && "cursor-not-allowed"
              )
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: ve(
                "absolute rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out",
                i[o],
                t ? o === "sm" ? "translate-x-4" : o === "md" ? "translate-x-5" : "translate-x-7" : "translate-x-0.5",
                "top-1/2 -translate-y-1/2"
              )
            }
          )
        ] }),
        e && /* @__PURE__ */ l.jsx("span", { className: "ml-3 text-sm text-gray-700 dark:text-gray-300", children: e })
      ]
    }
  );
}, Hm = ({
  items: e,
  defaultActiveId: t,
  variant: r = "default",
  size: n = "md",
  className: o,
  tabListClassName: a,
  tabClassName: s,
  contentClassName: i,
  onChange: d
}) => {
  var N, v;
  const [u, c] = ne(t || ((N = e[0]) == null ? void 0 : N.id) || ""), f = ae.useRef(null), [m, p] = ne({ left: 0, width: 0 });
  ae.useEffect(() => {
    var j;
    if (r === "active-underline" && f.current) {
      const T = f.current.getBoundingClientRect(), O = (j = f.current.parentElement) == null ? void 0 : j.getBoundingClientRect();
      O && p({
        left: T.left - O.left,
        width: T.width
      });
    }
  }, [r, e, u]), ae.useEffect(() => {
    if (r === "active-underline") {
      const j = () => {
        var T;
        if (f.current) {
          const O = f.current.getBoundingClientRect(), I = (T = f.current.parentElement) == null ? void 0 : T.getBoundingClientRect();
          I && p({
            left: O.left - I.left,
            width: O.width
          });
        }
      };
      return window.addEventListener("resize", j), () => window.removeEventListener("resize", j);
    }
  }, [r, e, u]);
  const $ = fe((j) => {
    c(j), d == null || d(j);
  }, [d]), k = () => {
    switch (n) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  }, x = (j, T) => {
    const O = ve(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      k(),
      T && "opacity-50 cursor-not-allowed",
      !T && "cursor-pointer"
    );
    switch (r) {
      case "pills":
        return ve(
          O,
          "rounded-full",
          j ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return ve(
          O,
          "border-b-2",
          j ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      case "active-underline":
        return ve(
          O,
          "border-b-0",
          j ? "text-primary" : "text-gray-600 dark:text-gray-300 hover:text-primary"
        );
      default:
        return ve(
          O,
          "border-b-2",
          j ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: ve("w-full", o), children: [
    /* @__PURE__ */ l.jsxs("div", { className: ve(
      r === "active-underline" ? "relative" : "",
      "flex space-x-1",
      r === "pills" && "space-x-2 border-b-0",
      r !== "active-underline" && "border-b border-gray-200 dark:border-gray-700",
      a
    ), children: [
      e.map((j) => {
        const T = j.id === u, O = !!j.disabled;
        return /* @__PURE__ */ l.jsxs(
          "button",
          {
            ref: r === "active-underline" && T ? f : void 0,
            onClick: () => !O && $(j.id),
            disabled: O,
            className: ve(
              x(T, O),
              s
            ),
            children: [
              j.icon && /* @__PURE__ */ l.jsx(
                pe,
                {
                  icon: j.icon,
                  className: "w-5 h-5 flex-shrink-0"
                }
              ),
              /* @__PURE__ */ l.jsx("span", { children: j.label })
            ]
          },
          j.id
        );
      }),
      r === "active-underline" && /* @__PURE__ */ l.jsx(
        "span",
        {
          className: "absolute bottom-0 h-0.5 bg-primary transition-all duration-300",
          style: { left: m.left, width: m.width }
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: ve("mt-4", i), children: (v = e.find((j) => j.id === u)) == null ? void 0 : v.content })
  ] });
}, _r = ({
  variant: e = "p",
  children: t,
  className: r,
  as: n
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
  }, s = n || ((i) => {
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
  })(e);
  return /* @__PURE__ */ l.jsx(s, { className: z("text-gray-900", o[e], r), children: t });
}, Bc = Ve(
  "border bg-white px-3 py-2 ring-0 transition-colors placeholder:text-neutral placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-none",
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
        sm: "min-h-[60px] px-2 py-1 text-sm",
        md: "min-h-[80px] px-3 py-2 text-base",
        lg: "min-h-[100px] px-4 py-3 text-lg"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        full: "rounded-full"
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit"
      },
      resize: {
        none: "resize-none",
        vertical: "resize-y",
        horizontal: "resize-x",
        both: "resize"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "xl",
      fullWidth: !0,
      resize: "vertical"
    }
  }
), Vc = _e(
  ({
    className: e,
    variant: t = "default",
    size: r = "md",
    rounded: n = "xl",
    error: o = !1,
    errorText: a,
    helperText: s,
    label: i,
    required: d = !1,
    labelPlacement: u = "top",
    fullWidth: c = !1,
    resize: f = "vertical",
    showCharCount: m = !1,
    maxLength: p,
    minRows: $ = 3,
    maxRows: k = 10,
    id: x,
    value: N,
    ...v
  }, j) => {
    const T = x || ae.useId(), O = `${T}-helper`, I = `${T}-error`, H = `${T}-char-count`, F = typeof N == "string" ? N.length : 0, R = p && F > p, D = /* @__PURE__ */ l.jsxs("div", { className: z("relative", !c && "inline-block"), children: [
      /* @__PURE__ */ l.jsx(
        "textarea",
        {
          id: T,
          ref: j,
          rows: $,
          maxLength: p,
          className: z(
            Bc({
              variant: o ? "error" : t,
              size: r,
              rounded: n,
              fullWidth: c,
              resize: f === "none" ? "none" : f
            }),
            e
          ),
          "aria-describedby": z(
            o ? I : s ? O : void 0,
            m ? H : void 0
          ),
          "aria-invalid": o,
          "aria-required": d,
          style: {
            minHeight: `${$ * 1.5}em`,
            maxHeight: `${k * 1.5}em`
          },
          value: N,
          ...v
        }
      ),
      m && p && /* @__PURE__ */ l.jsx("div", { className: "absolute bottom-2 right-2 text-xs text-neutral-500 bg-white px-1 rounded", children: /* @__PURE__ */ l.jsxs("span", { id: H, className: R ? "text-danger" : "", children: [
        F,
        "/",
        p
      ] }) })
    ] }), g = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      o && a && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger", id: I, children: a }),
      !o && s && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral", id: O, children: s }),
      m && p && !o && !s && /* @__PURE__ */ l.jsxs("p", { className: "mt-1 text-xs text-neutral", id: H, children: [
        F,
        " of ",
        p,
        " characters"
      ] })
    ] });
    return u === "left" ? /* @__PURE__ */ l.jsx("div", { className: z(c ? "w-full" : "inline-block", e), children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-4", children: [
      i && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: T,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            i,
            d && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: z("flex-1", !c && "inline-block"), children: [
        D,
        g
      ] })
    ] }) }) : /* @__PURE__ */ l.jsxs("div", { className: z(c ? "w-full" : "inline-block", e), children: [
      i && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: T,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            i,
            d && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      D,
      g
    ] });
  }
);
Vc.displayName = "Textarea";
const Gn = "timepicker-dropdown-opened", Hc = Ve(
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
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
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
      rounded: "xl",
      fullWidth: !0
    }
  }
), ai = _e(
  ({
    value: e,
    onChange: t,
    use24Hour: r = !1,
    variant: n = "default",
    size: o = "md",
    rounded: a = "xl",
    disabled: s = !1,
    errorText: i,
    helperText: d,
    label: u,
    required: c = !1,
    labelPlacement: f = "top",
    fullWidth: m = !1,
    className: p,
    placeholder: $ = "Select time",
    leftIcon: k,
    rightIcon: x,
    valueFormatter: N,
    closeOnSelect: v = !0,
    ...j
  }, T) => {
    const [O, I] = ne(!1), [H, F] = ne(e || ""), [R, D] = ne(0), [g, C] = ne(0), [h, P] = ne(!0), A = oe(null), b = oe(null), y = oe(null), S = `timepicker-${ae.useId().replace(/:/g, "")}`, W = () => {
      if (!O || !b.current || !y.current) return;
      const L = b.current.getBoundingClientRect(), Y = y.current, be = It().innerHeight - L.bottom;
      Y.style.top = `${L.bottom + 4}px`, Y.style.bottom = "auto", Y.style.left = `${L.left}px`, Y.style.maxHeight = `${be - 8}px`, Y.style.width = `${L.width}px`;
    };
    de(() => {
      const L = It(), Y = Ze(), ce = () => {
        O && W();
      }, be = () => {
        O && W();
      }, $e = (Ye) => {
        Ye.detail.id !== S && I(!1);
      }, Ee = (Ye) => {
        const Oe = Ye.target;
        A.current && y.current && !A.current.contains(Oe) && !y.current.contains(Oe) && I(!1);
      };
      return O && (W(), L.addEventListener("scroll", ce, !0), L.addEventListener("resize", be)), Y.addEventListener(Gn, $e), Y.addEventListener("mousedown", Ee), () => {
        L.removeEventListener("scroll", ce, !0), L.removeEventListener("resize", be), Y.removeEventListener(Gn, $e), Y.removeEventListener("mousedown", Ee);
      };
    }, [O, S]);
    const M = () => {
      s || (O || Ze().dispatchEvent(
        new CustomEvent(Gn, {
          detail: { id: S }
        })
      ), I(!O));
    };
    de(() => {
      if (e) {
        F(e);
        const [L, Y] = e.split(":").map(Number);
        r ? D(L) : (D(L % 12 || 12), P(L < 12)), C(Y);
      }
    }, [e, r]);
    const B = () => {
      const Y = `${(r || h ? R : R + 12).toString().padStart(2, "0")}:${g.toString().padStart(2, "0")}`;
      F(Y), t == null || t(Y), v && I(!1);
    }, K = () => r ? Array.from({ length: 24 }, (L, Y) => Y) : Array.from({ length: 12 }, (L, Y) => Y + 1), _ = () => Array.from({ length: 60 }, (L, Y) => Y), G = N ? N(H) : H, X = Ze();
    return "body" in X ? /* @__PURE__ */ l.jsxs("div", { ref: A, className: z("relative", m && "w-full", p), children: [
      u && /* @__PURE__ */ l.jsxs(
        "label",
        {
          className: z(
            "block text-sm font-medium text-gray-700 mb-1",
            f === "left" && "inline-block mr-2"
          ),
          children: [
            u,
            c && /* @__PURE__ */ l.jsx("span", { className: "text-red ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsxs(
        "div",
        {
          ref: b,
          className: "relative",
          onClick: M,
          children: [
            k && /* @__PURE__ */ l.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ l.jsx(pe, { icon: k, size: 20 }) }),
            /* @__PURE__ */ l.jsx(
              "input",
              {
                ref: T,
                type: "text",
                value: G,
                placeholder: $,
                readOnly: !0,
                className: z(
                  Hc({ variant: n, size: o, rounded: a, fullWidth: m }),
                  k && "pl-10",
                  x && "pr-10",
                  "text-left"
                ),
                disabled: s,
                ...j
              }
            ),
            x && /* @__PURE__ */ l.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ l.jsx(pe, { icon: x, size: 20 }) })
          ]
        }
      ),
      O && Qt(
        /* @__PURE__ */ l.jsx(
          "div",
          {
            ref: y,
            className: "fixed z-[9999] w-fit rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (L) => L.stopPropagation(),
            children: /* @__PURE__ */ l.jsxs("div", { className: "p-0", children: [
              /* @__PURE__ */ l.jsxs(Js, { variant: "ghost", className: z(
                "flex mx-2 my-1 p-0",
                r ? "justify-start gap-8" : "justify-start gap-4"
              ), children: [
                /* @__PURE__ */ l.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ l.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ l.jsx("div", { className: "flex flex-col gap-2", children: K().map((L) => /* @__PURE__ */ l.jsx(
                  qe,
                  {
                    variant: "ghost",
                    onClick: () => D(L),
                    className: z(R === L && "bg-primary text-white"),
                    children: L.toString().padStart(2, "0")
                  },
                  L
                )) }) }) }),
                /* @__PURE__ */ l.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ l.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ l.jsx("div", { className: "flex flex-col gap-2", children: _().map((L) => /* @__PURE__ */ l.jsx(
                  qe,
                  {
                    variant: "ghost",
                    onClick: () => C(L),
                    className: z(g === L && "bg-primary text-white"),
                    children: L.toString().padStart(2, "0")
                  },
                  L
                )) }) }) }),
                !r && /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ l.jsx(
                    qe,
                    {
                      variant: "ghost",
                      onClick: () => P(!0),
                      className: z(h && "bg-primary text-white"),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    qe,
                    {
                      variant: "ghost",
                      onClick: () => P(!1),
                      className: z(!h && "bg-primary text-white"),
                      children: "PM"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "mb-2 mx-2", children: /* @__PURE__ */ l.jsx(
                qe,
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
        X.body
      ),
      i && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-sm text-danger-600", children: i }),
      d && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-sm text-gray", children: d })
    ] }) : null;
  }
);
ai.displayName = "PrimitiveTimePicker";
const Uc = ({
  value: e,
  onChange: t,
  valueFormatter: r,
  closeOnSelect: n,
  ...o
}) => /* @__PURE__ */ l.jsx(
  ai,
  {
    value: e,
    onChange: t,
    valueFormatter: r,
    closeOnSelect: n,
    ...o
  }
);
Uc.displayName = "TimePicker";
const Kc = Ve(
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
), Wc = Ve(
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
), Yc = _e(
  ({
    checked: e = !1,
    onCheckedChange: t,
    variant: r = "primary",
    size: n = "md",
    label: o,
    required: a = !1,
    helperText: s,
    errorText: i,
    error: d = !1,
    className: u,
    ...c
  }, f) => {
    const m = ae.useId(), p = `${m}-helper`, $ = `${m}-error`;
    return /* @__PURE__ */ l.jsxs("div", { className: "inline-flex flex-col gap-1.5", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            role: "switch",
            "aria-checked": e,
            "data-state": e ? "checked" : "unchecked",
            onClick: () => t == null ? void 0 : t(!e),
            ref: f,
            className: z(Kc({ variant: d ? "danger" : r, size: n }), u),
            "aria-describedby": d ? $ : s ? p : void 0,
            "aria-invalid": d,
            "aria-required": a,
            ...c,
            children: /* @__PURE__ */ l.jsx(
              "span",
              {
                "data-state": e ? "checked" : "unchecked",
                className: z(
                  Wc({ size: n }),
                  e ? "translate-x-5" : "translate-x-1"
                )
              }
            )
          }
        ),
        o && /* @__PURE__ */ l.jsxs(
          "label",
          {
            htmlFor: m,
            className: "text-sm text-neutral-900",
            children: [
              o,
              a && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ]
          }
        )
      ] }),
      d && i && /* @__PURE__ */ l.jsx("p", { className: "text-xs text-danger", id: $, children: i }),
      !d && s && /* @__PURE__ */ l.jsx("p", { className: "text-xs text-neutral", id: p, children: s })
    ] });
  }
);
Yc.displayName = "Toggle";
function Ao(e = {}) {
  const {
    strict: t = !0,
    errorMessage: r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: n
  } = e, o = ca.createContext(void 0);
  o.displayName = n;
  function a() {
    var s;
    const i = ca.useContext(o);
    if (!i && t) {
      const d = new Error(r);
      throw d.name = "ContextError", (s = Error.captureStackTrace) == null || s.call(Error, d, a), d;
    }
    return i;
  }
  return [o.Provider, a, o];
}
function Xc(e) {
  return {
    UNSAFE_getDOMNode() {
      return e.current;
    }
  };
}
function si(e) {
  const t = oe(null);
  return yn(e, () => t.current), t;
}
process.env.NODE_ENV;
process.env.NODE_ENV;
function Zc(e) {
  return typeof e == "function";
}
var We = (e) => e ? "true" : void 0;
function ii(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = ii(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Xt(...e) {
  for (var t = 0, r, n, o = ""; t < e.length; )
    (r = e[t++]) && (n = ii(r)) && (o && (o += " "), o += n);
  return o;
}
function qc(e) {
  return `${e}-${Math.floor(Math.random() * 1e6)}`;
}
function _o(e) {
  if (!e || typeof e != "object")
    return "";
  try {
    return JSON.stringify(e);
  } catch {
    return "";
  }
}
function Jc(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
var xa = {};
function Qc(e, t, ...r) {
  const o = `[Hero UI] : ${e}`;
  if (!(typeof console > "u") && !xa[o] && (xa[o] = !0, process.env.NODE_ENV !== "production"))
    return console.warn(o, r);
}
function li(...e) {
  return (...t) => {
    for (let r of e)
      typeof r == "function" && r(...t);
  };
}
var wa = /* @__PURE__ */ new Map();
function eu(e, t) {
  if (e === t)
    return e;
  let r = wa.get(e);
  if (r)
    return r.forEach((o) => o.current = t), t;
  let n = wa.get(t);
  return n ? (n.forEach((o) => o.current = e), e) : t;
}
function it(...e) {
  let t = { ...e[0] };
  for (let r = 1; r < e.length; r++) {
    let n = e[r];
    for (let o in n) {
      let a = t[o], s = n[o];
      typeof a == "function" && typeof s == "function" && // This is a lot faster than a regex.
      o[0] === "o" && o[1] === "n" && o.charCodeAt(2) >= /* 'A' */
      65 && o.charCodeAt(2) <= /* 'Z' */
      90 ? t[o] = li(a, s) : (o === "className" || o === "UNSAFE_className") && typeof a == "string" && typeof s == "string" ? t[o] = Xt(a, s) : o === "id" && a && s ? t.id = eu(a, s) : t[o] = s !== void 0 ? s : a;
    }
  }
  return t;
}
function tu(...e) {
  return e.length === 1 && e[0] ? e[0] : (t) => {
    let r = !1;
    const n = e.map((o) => {
      const a = ka(o, t);
      return r || (r = typeof a == "function"), a;
    });
    if (r)
      return () => {
        n.forEach((o, a) => {
          typeof o == "function" ? o == null || o() : ka(e[a], null);
        });
      };
  };
}
function ka(e, t) {
  if (typeof e == "function")
    return () => e(t);
  e != null && "current" in e && (e.current = t);
}
function ru(e, t) {
  if (e != null) {
    if (Zc(e)) {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function nu(...e) {
  return (t) => {
    e.forEach((r) => ru(r, t));
  };
}
var ou = (e, t) => {
  var r;
  let n = [];
  const o = (r = pr.map(e, (s) => lr(s) && s.type === t ? (n.push(s), null) : s)) == null ? void 0 : r.filter(Boolean), a = n.length >= 0 ? n : void 0;
  return [o, a];
}, au = /* @__PURE__ */ new Set([
  "id",
  "type",
  "style",
  "title",
  "role",
  "tabIndex",
  "htmlFor",
  "width",
  "height",
  "abbr",
  "accept",
  "acceptCharset",
  "accessKey",
  "action",
  "allowFullScreen",
  "allowTransparency",
  "alt",
  "async",
  "autoComplete",
  "autoFocus",
  "autoPlay",
  "cellPadding",
  "cellSpacing",
  "challenge",
  "charset",
  "checked",
  "cite",
  "class",
  "className",
  "cols",
  "colSpan",
  "command",
  "content",
  "contentEditable",
  "contextMenu",
  "controls",
  "coords",
  "crossOrigin",
  "data",
  "dateTime",
  "default",
  "defer",
  "dir",
  "disabled",
  "download",
  "draggable",
  "dropzone",
  "encType",
  "enterKeyHint",
  "for",
  "form",
  "formAction",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "frameBorder",
  "headers",
  "hidden",
  "high",
  "href",
  "hrefLang",
  "httpEquiv",
  "icon",
  "inputMode",
  "isMap",
  "itemId",
  "itemProp",
  "itemRef",
  "itemScope",
  "itemType",
  "kind",
  "label",
  "lang",
  "list",
  "loop",
  "manifest",
  "max",
  "maxLength",
  "media",
  "mediaGroup",
  "method",
  "min",
  "minLength",
  "multiple",
  "muted",
  "name",
  "noValidate",
  "open",
  "optimum",
  "pattern",
  "ping",
  "placeholder",
  "poster",
  "preload",
  "radioGroup",
  "referrerPolicy",
  "readOnly",
  "rel",
  "required",
  "rows",
  "rowSpan",
  "sandbox",
  "scope",
  "scoped",
  "scrolling",
  "seamless",
  "selected",
  "shape",
  "size",
  "sizes",
  "slot",
  "sortable",
  "span",
  "spellCheck",
  "src",
  "srcDoc",
  "srcSet",
  "start",
  "step",
  "target",
  "translate",
  "typeMustMatch",
  "useMap",
  "value",
  "wmode",
  "wrap"
]), su = /* @__PURE__ */ new Set([
  "onCopy",
  "onCut",
  "onPaste",
  "onLoad",
  "onError",
  "onWheel",
  "onScroll",
  "onCompositionEnd",
  "onCompositionStart",
  "onCompositionUpdate",
  "onKeyDown",
  "onKeyPress",
  "onKeyUp",
  "onFocus",
  "onBlur",
  "onChange",
  "onInput",
  "onSubmit",
  "onClick",
  "onContextMenu",
  "onDoubleClick",
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  "onPointerDown",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerUp",
  "onSelect",
  "onTouchCancel",
  "onTouchEnd",
  "onTouchMove",
  "onTouchStart",
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration",
  "onTransitionEnd"
]), Ea = /^(data-.*)$/, iu = /^(aria-.*)$/, Vr = /^(on[A-Z].*)$/;
function Na(e, t = {}) {
  let {
    labelable: r = !0,
    enabled: n = !0,
    propNames: o,
    omitPropNames: a,
    omitEventNames: s,
    omitDataProps: i,
    omitEventProps: d
  } = t, u = {};
  if (!n)
    return e;
  for (const c in e)
    a != null && a.has(c) || s != null && s.has(c) && Vr.test(c) || Vr.test(c) && !su.has(c) || i && Ea.test(c) || d && Vr.test(c) || (Object.prototype.hasOwnProperty.call(e, c) && (au.has(c) || r && iu.test(c) || o != null && o.has(c) || Ea.test(c)) || Vr.test(c)) && (u[c] = e[c]);
  return u;
}
var [Um, kn] = Ao({
  name: "ProviderContext",
  strict: !1
});
const lu = /* @__PURE__ */ new Set([
  "Arab",
  "Syrc",
  "Samr",
  "Mand",
  "Thaa",
  "Mend",
  "Nkoo",
  "Adlm",
  "Rohg",
  "Hebr"
]), du = /* @__PURE__ */ new Set([
  "ae",
  "ar",
  "arc",
  "bcc",
  "bqi",
  "ckb",
  "dv",
  "fa",
  "glk",
  "he",
  "ku",
  "mzn",
  "nqo",
  "pnb",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi"
]);
function cu(e) {
  if (Intl.Locale) {
    let r = new Intl.Locale(e).maximize(), n = typeof r.getTextInfo == "function" ? r.getTextInfo() : r.textInfo;
    if (n) return n.direction === "rtl";
    if (r.script) return lu.has(r.script);
  }
  let t = e.split("-")[0];
  return du.has(t);
}
const ln = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, di = /* @__PURE__ */ ae.createContext(ln), uu = /* @__PURE__ */ ae.createContext(!1);
let fu = !!(typeof window < "u" && window.document && window.document.createElement), Bn = /* @__PURE__ */ new WeakMap();
function pu(e = !1) {
  let t = mt(di), r = oe(null);
  if (r.current === null && !e) {
    var n, o;
    let a = (o = ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || o === void 0 || (n = o.ReactCurrentOwner) === null || n === void 0 ? void 0 : n.current;
    if (a) {
      let s = Bn.get(a);
      s == null ? Bn.set(a, {
        id: t.current,
        state: a.memoizedState
      }) : a.memoizedState !== s.state && (t.current = s.id, Bn.delete(a));
    }
    r.current = ++t.current;
  }
  return r.current;
}
function gu(e) {
  let t = mt(di);
  t === ln && !fu && process.env.NODE_ENV !== "production" && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let r = pu(!!e), n = t === ln && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${n}-${r}`;
}
function mu(e) {
  let t = ae.useId(), [r] = ne(En()), n = r || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${ln.prefix}`;
  return e || `${n}-${t}`;
}
const bu = typeof ae.useId == "function" ? mu : gu;
function $u() {
  return !1;
}
function hu() {
  return !0;
}
function vu(e) {
  return () => {
  };
}
function En() {
  return typeof ae.useSyncExternalStore == "function" ? ae.useSyncExternalStore(vu, $u, hu) : mt(uu);
}
const yu = Symbol.for("react-aria.i18n.locale");
function ci() {
  let e = typeof window < "u" && window[yu] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      e
    ]);
  } catch {
    e = "en-US";
  }
  return {
    locale: e,
    direction: cu(e) ? "rtl" : "ltr"
  };
}
let ro = ci(), Sr = /* @__PURE__ */ new Set();
function Pa() {
  ro = ci();
  for (let e of Sr) e(ro);
}
function xu() {
  let e = En(), [t, r] = ne(ro);
  return de(() => (Sr.size === 0 && window.addEventListener("languagechange", Pa), Sr.add(r), () => {
    Sr.delete(r), Sr.size === 0 && window.removeEventListener("languagechange", Pa);
  }), []), e ? {
    locale: "en-US",
    direction: "ltr"
  } : t;
}
const wu = /* @__PURE__ */ ae.createContext(null);
function ui() {
  let e = xu();
  return mt(wu) || e;
}
const ku = Symbol.for("react-aria.i18n.locale"), Eu = Symbol.for("react-aria.i18n.strings");
let nr;
class Nn {
  /** Returns a localized string for the given key and locale. */
  getStringForLocale(t, r) {
    let o = this.getStringsForLocale(r)[t];
    if (!o) throw new Error(`Could not find intl message ${t} in ${r} locale`);
    return o;
  }
  /** Returns all localized strings for the given locale. */
  getStringsForLocale(t) {
    let r = this.strings[t];
    return r || (r = Nu(t, this.strings, this.defaultLocale), this.strings[t] = r), r;
  }
  static getGlobalDictionaryForPackage(t) {
    if (typeof window > "u") return null;
    let r = window[ku];
    if (nr === void 0) {
      let o = window[Eu];
      if (!o) return null;
      nr = {};
      for (let a in o) nr[a] = new Nn({
        [r]: o[a]
      }, r);
    }
    let n = nr == null ? void 0 : nr[t];
    if (!n) throw new Error(`Strings for package "${t}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
    return n;
  }
  constructor(t, r = "en-US") {
    this.strings = Object.fromEntries(Object.entries(t).filter(([, n]) => n)), this.defaultLocale = r;
  }
}
function Nu(e, t, r = "en-US") {
  if (t[e]) return t[e];
  let n = Pu(e);
  if (t[n]) return t[n];
  for (let o in t)
    if (o.startsWith(n + "-")) return t[o];
  return t[r];
}
function Pu(e) {
  return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
const Ta = /* @__PURE__ */ new Map(), Ca = /* @__PURE__ */ new Map();
class Tu {
  /** Formats a localized string for the given key with the provided variables. */
  format(t, r) {
    let n = this.strings.getStringForLocale(t, this.locale);
    return typeof n == "function" ? n(r, this) : n;
  }
  plural(t, r, n = "cardinal") {
    let o = r["=" + t];
    if (o) return typeof o == "function" ? o() : o;
    let a = this.locale + ":" + n, s = Ta.get(a);
    s || (s = new Intl.PluralRules(this.locale, {
      type: n
    }), Ta.set(a, s));
    let i = s.select(t);
    return o = r[i] || r.other, typeof o == "function" ? o() : o;
  }
  number(t) {
    let r = Ca.get(this.locale);
    return r || (r = new Intl.NumberFormat(this.locale), Ca.set(this.locale, r)), r.format(t);
  }
  select(t, r) {
    let n = t[r] || t.other;
    return typeof n == "function" ? n() : n;
  }
  constructor(t, r) {
    this.locale = t, this.strings = r;
  }
}
const Sa = /* @__PURE__ */ new WeakMap();
function Cu(e) {
  let t = Sa.get(e);
  return t || (t = new Nn(e), Sa.set(e, t)), t;
}
function Su(e, t) {
  return t && Nn.getGlobalDictionaryForPackage(t) || Cu(e);
}
function ju(e, t) {
  let { locale: r } = ui(), n = Su(e, t);
  return Ae(() => new Tu(r, n), [
    r,
    n
  ]);
}
function Ou(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Iu(e, t, r) {
  Ou(e, t), t.set(e, r);
}
const Fe = typeof document < "u" ? ae.useLayoutEffect : () => {
};
var Vn;
const Au = (Vn = ae.useInsertionEffect) !== null && Vn !== void 0 ? Vn : Fe;
function ut(e) {
  const t = oe(null);
  return Au(() => {
    t.current = e;
  }, [
    e
  ]), fe((...r) => {
    const n = t.current;
    return n == null ? void 0 : n(...r);
  }, []);
}
function _u(e) {
  let [t, r] = ne(e), n = oe(null), o = ut(() => {
    if (!n.current) return;
    let s = n.current.next();
    if (s.done) {
      n.current = null;
      return;
    }
    t === s.value ? o() : r(s.value);
  });
  Fe(() => {
    n.current && o();
  });
  let a = ut((s) => {
    n.current = s(t), o();
  });
  return [
    t,
    a
  ];
}
let Ru = !!(typeof window < "u" && window.document && window.document.createElement), cr = /* @__PURE__ */ new Map(), jr;
typeof FinalizationRegistry < "u" && (jr = new FinalizationRegistry((e) => {
  cr.delete(e);
}));
function Pn(e) {
  let [t, r] = ne(e), n = oe(null), o = bu(t), a = oe(null);
  if (jr && jr.register(a, o), Ru) {
    const s = cr.get(o);
    s && !s.includes(n) ? s.push(n) : cr.set(o, [
      n
    ]);
  }
  return Fe(() => {
    let s = o;
    return () => {
      jr && jr.unregister(a), cr.delete(s);
    };
  }, [
    o
  ]), de(() => {
    let s = n.current;
    return s && r(s), () => {
      s && (n.current = null);
    };
  }), o;
}
function Lu(e, t) {
  if (e === t) return e;
  let r = cr.get(e);
  if (r)
    return r.forEach((o) => o.current = t), t;
  let n = cr.get(t);
  return n ? (n.forEach((o) => o.current = e), e) : t;
}
function Mu(e = []) {
  let t = Pn(), [r, n] = _u(t), o = fe(() => {
    n(function* () {
      yield t, yield document.getElementById(t) ? t : void 0;
    });
  }, [
    t,
    n
  ]);
  return Fe(o, [
    t,
    o,
    ...e
  ]), r;
}
function Rr(...e) {
  return (...t) => {
    for (let r of e) typeof r == "function" && r(...t);
  };
}
const Ne = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, pt = (e) => e && "window" in e && e.window === e ? e : Ne(e).defaultView || window;
function Fu(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function Du(e) {
  return Fu(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let zu = !1;
function Tn() {
  return zu;
}
function Ie(e, t) {
  if (!Tn()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let r = t;
  for (; r !== null; ) {
    if (r === e) return !0;
    r.tagName === "SLOT" && r.assignedSlot ? r = r.assignedSlot.parentNode : Du(r) ? r = r.host : r = r.parentNode;
  }
  return !1;
}
const at = (e = document) => {
  var t;
  if (!Tn()) return e.activeElement;
  let r = e.activeElement;
  for (; r && "shadowRoot" in r && (!((t = r.shadowRoot) === null || t === void 0) && t.activeElement); ) r = r.shadowRoot.activeElement;
  return r;
};
function xe(e) {
  return Tn() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
class Gu {
  get currentNode() {
    return this._currentNode;
  }
  set currentNode(t) {
    if (!Ie(this.root, t)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
    const r = [];
    let n = t, o = t;
    for (this._currentNode = t; n && n !== this.root; ) if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      const s = n, i = this._doc.createTreeWalker(s, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      r.push(i), i.currentNode = o, this._currentSetFor.add(i), n = o = s.host;
    } else n = n.parentNode;
    const a = this._doc.createTreeWalker(this.root, this.whatToShow, {
      acceptNode: this._acceptNode
    });
    r.push(a), a.currentNode = o, this._currentSetFor.add(a), this._walkerStack = r;
  }
  get doc() {
    return this._doc;
  }
  firstChild() {
    let t = this.currentNode, r = this.nextNode();
    return Ie(t, r) ? (r && (this.currentNode = r), r) : (this.currentNode = t, null);
  }
  lastChild() {
    let r = this._walkerStack[0].lastChild();
    return r && (this.currentNode = r), r;
  }
  nextNode() {
    const t = this._walkerStack[0].nextNode();
    if (t) {
      if (t.shadowRoot) {
        var r;
        let o;
        if (typeof this.filter == "function" ? o = this.filter(t) : !((r = this.filter) === null || r === void 0) && r.acceptNode && (o = this.filter.acceptNode(t)), o === NodeFilter.FILTER_ACCEPT)
          return this.currentNode = t, t;
        let a = this.nextNode();
        return a && (this.currentNode = a), a;
      }
      return t && (this.currentNode = t), t;
    } else if (this._walkerStack.length > 1) {
      this._walkerStack.shift();
      let n = this.nextNode();
      return n && (this.currentNode = n), n;
    } else return null;
  }
  previousNode() {
    const t = this._walkerStack[0];
    if (t.currentNode === t.root) {
      if (this._currentSetFor.has(t))
        if (this._currentSetFor.delete(t), this._walkerStack.length > 1) {
          this._walkerStack.shift();
          let o = this.previousNode();
          return o && (this.currentNode = o), o;
        } else return null;
      return null;
    }
    const r = t.previousNode();
    if (r) {
      if (r.shadowRoot) {
        var n;
        let a;
        if (typeof this.filter == "function" ? a = this.filter(r) : !((n = this.filter) === null || n === void 0) && n.acceptNode && (a = this.filter.acceptNode(r)), a === NodeFilter.FILTER_ACCEPT)
          return r && (this.currentNode = r), r;
        let s = this.lastChild();
        return s && (this.currentNode = s), s;
      }
      return r && (this.currentNode = r), r;
    } else if (this._walkerStack.length > 1) {
      this._walkerStack.shift();
      let o = this.previousNode();
      return o && (this.currentNode = o), o;
    } else return null;
  }
  /**
   * @deprecated
   */
  nextSibling() {
    return null;
  }
  /**
   * @deprecated
   */
  previousSibling() {
    return null;
  }
  /**
   * @deprecated
   */
  parentNode() {
    return null;
  }
  constructor(t, r, n, o) {
    this._walkerStack = [], this._currentSetFor = /* @__PURE__ */ new Set(), this._acceptNode = (s) => {
      if (s.nodeType === Node.ELEMENT_NODE) {
        const d = s.shadowRoot;
        if (d) {
          const u = this._doc.createTreeWalker(d, this.whatToShow, {
            acceptNode: this._acceptNode
          });
          return this._walkerStack.unshift(u), NodeFilter.FILTER_ACCEPT;
        } else {
          var i;
          if (typeof this.filter == "function") return this.filter(s);
          if (!((i = this.filter) === null || i === void 0) && i.acceptNode) return this.filter.acceptNode(s);
          if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
        }
      }
      return NodeFilter.FILTER_SKIP;
    }, this._doc = t, this.root = r, this.filter = o ?? null, this.whatToShow = n ?? NodeFilter.SHOW_ALL, this._currentNode = r, this._walkerStack.unshift(t.createTreeWalker(r, n, this._acceptNode));
    const a = r.shadowRoot;
    if (a) {
      const s = this._doc.createTreeWalker(a, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      this._walkerStack.unshift(s);
    }
  }
}
function Bu(e, t, r, n) {
  return Tn() ? new Gu(e, t, r, n) : e.createTreeWalker(t, r, n);
}
function At(...e) {
  let t = {
    ...e[0]
  };
  for (let r = 1; r < e.length; r++) {
    let n = e[r];
    for (let o in n) {
      let a = t[o], s = n[o];
      typeof a == "function" && typeof s == "function" && // This is a lot faster than a regex.
      o[0] === "o" && o[1] === "n" && o.charCodeAt(2) >= /* 'A' */
      65 && o.charCodeAt(2) <= /* 'Z' */
      90 ? t[o] = Rr(a, s) : (o === "className" || o === "UNSAFE_className") && typeof a == "string" && typeof s == "string" ? t[o] = ve(a, s) : o === "id" && a && s ? t.id = Lu(a, s) : t[o] = s !== void 0 ? s : a;
    }
  }
  return t;
}
const Vu = /* @__PURE__ */ new Set([
  "id"
]), Hu = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), Uu = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), Ku = /* @__PURE__ */ new Set([
  "dir",
  "lang",
  "hidden",
  "inert",
  "translate"
]), ja = /* @__PURE__ */ new Set([
  "onClick",
  "onAuxClick",
  "onContextMenu",
  "onDoubleClick",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  "onTouchCancel",
  "onTouchEnd",
  "onTouchMove",
  "onTouchStart",
  "onPointerDown",
  "onPointerMove",
  "onPointerUp",
  "onPointerCancel",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerOver",
  "onPointerOut",
  "onGotPointerCapture",
  "onLostPointerCapture",
  "onScroll",
  "onWheel",
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration",
  "onTransitionCancel",
  "onTransitionEnd",
  "onTransitionRun",
  "onTransitionStart"
]), Wu = /^(data-.*)$/;
function Ro(e, t = {}) {
  let { labelable: r, isLink: n, global: o, events: a = o, propNames: s } = t, i = {};
  for (const d in e) Object.prototype.hasOwnProperty.call(e, d) && (Vu.has(d) || r && Hu.has(d) || n && Uu.has(d) || o && Ku.has(d) || a && ja.has(d) || d.endsWith("Capture") && ja.has(d.slice(0, -7)) || s != null && s.has(d) || Wu.test(d)) && (i[d] = e[d]);
  return i;
}
function gr(e) {
  if (Yu()) e.focus({
    preventScroll: !0
  });
  else {
    let t = Xu(e);
    e.focus(), Zu(t);
  }
}
let Hr = null;
function Yu() {
  if (Hr == null) {
    Hr = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return Hr = !0, !0;
        }
      });
    } catch {
    }
  }
  return Hr;
}
function Xu(e) {
  let t = e.parentNode, r = [], n = document.scrollingElement || document.documentElement;
  for (; t instanceof HTMLElement && t !== n; )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && r.push({
      element: t,
      scrollTop: t.scrollTop,
      scrollLeft: t.scrollLeft
    }), t = t.parentNode;
  return n instanceof HTMLElement && r.push({
    element: n,
    scrollTop: n.scrollTop,
    scrollLeft: n.scrollLeft
  }), r;
}
function Zu(e) {
  for (let { element: t, scrollTop: r, scrollLeft: n } of e)
    t.scrollTop = r, t.scrollLeft = n;
}
function Cn(e) {
  var t;
  if (typeof window > "u" || window.navigator == null) return !1;
  let r = (t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands;
  return Array.isArray(r) && r.some((n) => e.test(n.brand)) || e.test(window.navigator.userAgent);
}
function Lo(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Rt(e) {
  if (process.env.NODE_ENV === "test") return e;
  let t = null;
  return () => (t == null && (t = e()), t);
}
const mr = Rt(function() {
  return Lo(/^Mac/i);
}), qu = Rt(function() {
  return Lo(/^iPhone/i);
}), fi = Rt(function() {
  return Lo(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  mr() && navigator.maxTouchPoints > 1;
}), Sn = Rt(function() {
  return qu() || fi();
});
Rt(function() {
  return mr() || Sn();
});
const pi = Rt(function() {
  return Cn(/AppleWebKit/i) && !gi();
}), gi = Rt(function() {
  return Cn(/Chrome/i);
}), Mo = Rt(function() {
  return Cn(/Android/i);
}), Ju = Rt(function() {
  return Cn(/Firefox/i);
});
function Lr(e, t, r = !0) {
  var n, o;
  let { metaKey: a, ctrlKey: s, altKey: i, shiftKey: d } = t;
  Ju() && (!((o = window.event) === null || o === void 0 || (n = o.type) === null || n === void 0) && n.startsWith("key")) && e.target === "_blank" && (mr() ? a = !0 : s = !0);
  let u = pi() && mr() && !fi() && process.env.NODE_ENV !== "test" ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: a,
    ctrlKey: s,
    altKey: i,
    shiftKey: d
  }) : new MouseEvent("click", {
    metaKey: a,
    ctrlKey: s,
    altKey: i,
    shiftKey: d,
    bubbles: !0,
    cancelable: !0
  });
  Lr.isOpening = r, gr(e), e.dispatchEvent(u), Lr.isOpening = !1;
}
Lr.isOpening = !1;
let zt = /* @__PURE__ */ new Map(), no = /* @__PURE__ */ new Set();
function Oa() {
  if (typeof window > "u") return;
  function e(n) {
    return "propertyName" in n;
  }
  let t = (n) => {
    if (!e(n) || !n.target) return;
    let o = zt.get(n.target);
    o || (o = /* @__PURE__ */ new Set(), zt.set(n.target, o), n.target.addEventListener("transitioncancel", r, {
      once: !0
    })), o.add(n.propertyName);
  }, r = (n) => {
    if (!e(n) || !n.target) return;
    let o = zt.get(n.target);
    if (o && (o.delete(n.propertyName), o.size === 0 && (n.target.removeEventListener("transitioncancel", r), zt.delete(n.target)), zt.size === 0)) {
      for (let a of no) a();
      no.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", r);
}
typeof document < "u" && (document.readyState !== "loading" ? Oa() : document.addEventListener("DOMContentLoaded", Oa));
function Qu() {
  for (const [e] of zt)
    "isConnected" in e && !e.isConnected && zt.delete(e);
}
function mi(e) {
  requestAnimationFrame(() => {
    Qu(), zt.size === 0 ? e() : no.add(e);
  });
}
function Fo() {
  let e = oe(/* @__PURE__ */ new Map()), t = fe((o, a, s, i) => {
    let d = i != null && i.once ? (...u) => {
      e.current.delete(s), s(...u);
    } : s;
    e.current.set(s, {
      type: a,
      eventTarget: o,
      fn: d,
      options: i
    }), o.addEventListener(a, d, i);
  }, []), r = fe((o, a, s, i) => {
    var d;
    let u = ((d = e.current.get(s)) === null || d === void 0 ? void 0 : d.fn) || s;
    o.removeEventListener(a, u, i), e.current.delete(s);
  }, []), n = fe(() => {
    e.current.forEach((o, a) => {
      r(o.eventTarget, o.type, a, o.options);
    });
  }, [
    r
  ]);
  return de(() => n, [
    n
  ]), {
    addGlobalListener: t,
    removeGlobalListener: r,
    removeAllGlobalListeners: n
  };
}
function ef(e, t) {
  let { id: r, "aria-label": n, "aria-labelledby": o } = e;
  return r = Pn(r), o && n ? o = [
    .../* @__PURE__ */ new Set([
      r,
      ...o.trim().split(/\s+/)
    ])
  ].join(" ") : o && (o = o.trim().split(/\s+/).join(" ")), !n && !o && t && (n = t), {
    id: r,
    "aria-label": n,
    "aria-labelledby": o
  };
}
function tf() {
  return typeof window.ResizeObserver < "u";
}
function Ia(e) {
  const { ref: t, box: r, onResize: n } = e;
  de(() => {
    let o = t == null ? void 0 : t.current;
    if (o)
      if (tf()) {
        const a = new window.ResizeObserver((s) => {
          s.length && n();
        });
        return a.observe(o, {
          box: r
        }), () => {
          o && a.unobserve(o);
        };
      } else
        return window.addEventListener("resize", n, !1), () => {
          window.removeEventListener("resize", n, !1);
        };
  }, [
    n,
    t,
    r
  ]);
}
function bi(e, t) {
  Fe(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function Aa(e, t) {
  if (!e) return !1;
  let r = window.getComputedStyle(e), n = /(auto|scroll)/.test(r.overflow + r.overflowX + r.overflowY);
  return n && t && (n = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), n;
}
function $i(e, t) {
  let r = e;
  for (Aa(r, t) && (r = r.parentElement); r && !Aa(r, t); ) r = r.parentElement;
  return r || document.scrollingElement || document.documentElement;
}
function oo(e) {
  return e.pointerType === "" && e.isTrusted ? !0 : Mo() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function rf(e) {
  return !Mo() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
const nf = typeof Element < "u" && "checkVisibility" in Element.prototype;
function of(e) {
  const t = pt(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
  let { display: r, visibility: n } = e.style, o = r !== "none" && n !== "hidden" && n !== "collapse";
  if (o) {
    const { getComputedStyle: a } = e.ownerDocument.defaultView;
    let { display: s, visibility: i } = a(e);
    o = s !== "none" && i !== "hidden" && i !== "collapse";
  }
  return o;
}
function af(e, t) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function Do(e, t) {
  return nf ? e.checkVisibility() && !e.closest("[data-react-aria-prevent-focus]") : e.nodeName !== "#comment" && of(e) && af(e, t) && (!e.parentElement || Do(e.parentElement, e));
}
const zo = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable^="false"])',
  "permission"
], sf = zo.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
zo.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const lf = zo.join(':not([hidden]):not([tabindex="-1"]),');
function hi(e) {
  return e.matches(sf) && Do(e) && !vi(e);
}
function df(e) {
  return e.matches(lf) && Do(e) && !vi(e);
}
function vi(e) {
  let t = e;
  for (; t != null; ) {
    if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
    t = t.parentElement;
  }
  return !1;
}
function cf(e, t, r) {
  let [n, o] = ne(e || t), a = oe(e !== void 0), s = e !== void 0;
  de(() => {
    let u = a.current;
    u !== s && process.env.NODE_ENV !== "production" && console.warn(`WARN: A component changed from ${u ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}.`), a.current = s;
  }, [
    s
  ]);
  let i = s ? e : n, d = fe((u, ...c) => {
    let f = (m, ...p) => {
      r && (Object.is(i, m) || r(m, ...p)), s || (i = m);
    };
    typeof u == "function" ? (process.env.NODE_ENV !== "production" && console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), o((p, ...$) => {
      let k = u(s ? i : p, ...$);
      return f(k, ...c), s ? p : k;
    })) : (s || o(u), f(u, ...c));
  }, [
    s,
    i,
    r
  ]);
  return [
    i,
    d
  ];
}
function ao(e, t = -1 / 0, r = 1 / 0) {
  return Math.min(Math.max(e, t), r);
}
const yt = {
  top: "top",
  bottom: "top",
  left: "left",
  right: "left"
}, dn = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, uf = {
  top: "left",
  left: "top"
}, so = {
  top: "height",
  left: "width"
}, yi = {
  width: "totalWidth",
  height: "totalHeight"
}, Ur = {};
let Ke = typeof document < "u" ? window.visualViewport : null;
function _a(e) {
  let t = 0, r = 0, n = 0, o = 0, a = 0, s = 0, i = {};
  var d;
  let u = ((d = Ke == null ? void 0 : Ke.scale) !== null && d !== void 0 ? d : 1) > 1;
  if (e.tagName === "BODY") {
    let $ = document.documentElement;
    n = $.clientWidth, o = $.clientHeight;
    var c;
    t = (c = Ke == null ? void 0 : Ke.width) !== null && c !== void 0 ? c : n;
    var f;
    r = (f = Ke == null ? void 0 : Ke.height) !== null && f !== void 0 ? f : o, i.top = $.scrollTop || e.scrollTop, i.left = $.scrollLeft || e.scrollLeft, Ke && (a = Ke.offsetTop, s = Ke.offsetLeft);
  } else
    ({ width: t, height: r, top: a, left: s } = ur(e)), i.top = e.scrollTop, i.left = e.scrollLeft, n = t, o = r;
  if (pi() && (e.tagName === "BODY" || e.tagName === "HTML") && u) {
    i.top = 0, i.left = 0;
    var m;
    a = (m = Ke == null ? void 0 : Ke.pageTop) !== null && m !== void 0 ? m : 0;
    var p;
    s = (p = Ke == null ? void 0 : Ke.pageLeft) !== null && p !== void 0 ? p : 0;
  }
  return {
    width: t,
    height: r,
    totalWidth: n,
    totalHeight: o,
    scroll: i,
    top: a,
    left: s
  };
}
function ff(e) {
  return {
    top: e.scrollTop,
    left: e.scrollLeft,
    width: e.scrollWidth,
    height: e.scrollHeight
  };
}
function Ra(e, t, r, n, o, a, s) {
  var i;
  let d = (i = o.scroll[e]) !== null && i !== void 0 ? i : 0, u = n[so[e]], c = n.scroll[yt[e]] + a, f = u + n.scroll[yt[e]] - a, m = t - d + s[e] - n[yt[e]], p = t - d + r + s[e] - n[yt[e]];
  return m < c ? c - m : p > f ? Math.max(f - p, c - m) : 0;
}
function pf(e) {
  let t = window.getComputedStyle(e);
  return {
    top: parseInt(t.marginTop, 10) || 0,
    bottom: parseInt(t.marginBottom, 10) || 0,
    left: parseInt(t.marginLeft, 10) || 0,
    right: parseInt(t.marginRight, 10) || 0
  };
}
function La(e) {
  if (Ur[e]) return Ur[e];
  let [t, r] = e.split(" "), n = yt[t] || "right", o = uf[n];
  yt[r] || (r = "center");
  let a = so[n], s = so[o];
  return Ur[e] = {
    placement: t,
    crossPlacement: r,
    axis: n,
    crossAxis: o,
    size: a,
    crossSize: s
  }, Ur[e];
}
function Hn(e, t, r, n, o, a, s, i, d, u) {
  let { placement: c, crossPlacement: f, axis: m, crossAxis: p, size: $, crossSize: k } = n, x = {};
  var N;
  x[p] = (N = e[p]) !== null && N !== void 0 ? N : 0;
  var v, j, T, O;
  f === "center" ? x[p] += (((v = e[k]) !== null && v !== void 0 ? v : 0) - ((j = r[k]) !== null && j !== void 0 ? j : 0)) / 2 : f !== p && (x[p] += ((T = e[k]) !== null && T !== void 0 ? T : 0) - ((O = r[k]) !== null && O !== void 0 ? O : 0)), x[p] += a;
  const I = e[p] - r[k] + d + u, H = e[p] + e[k] - d - u;
  if (x[p] = ao(x[p], I, H), c === m) {
    const F = i ? s[$] : t[yi[$]];
    x[dn[m]] = Math.floor(F - e[m] + o);
  } else x[m] = Math.floor(e[m] + e[$] + o);
  return x;
}
function gf(e, t, r, n, o, a, s, i) {
  const d = n ? r.height : t[yi.height];
  var u;
  let c = e.top != null ? r.top + e.top : r.top + (d - ((u = e.bottom) !== null && u !== void 0 ? u : 0) - s);
  var f, m, p, $, k, x;
  let N = i !== "top" ? (
    // We want the distance between the top of the overlay to the bottom of the boundary
    Math.max(0, t.height + t.top + ((f = t.scroll.top) !== null && f !== void 0 ? f : 0) - c - (((m = o.top) !== null && m !== void 0 ? m : 0) + ((p = o.bottom) !== null && p !== void 0 ? p : 0) + a))
  ) : Math.max(0, c + s - (t.top + (($ = t.scroll.top) !== null && $ !== void 0 ? $ : 0)) - (((k = o.top) !== null && k !== void 0 ? k : 0) + ((x = o.bottom) !== null && x !== void 0 ? x : 0) + a));
  return Math.min(t.height - a * 2, N);
}
function Ma(e, t, r, n, o, a) {
  let { placement: s, axis: i, size: d } = a;
  var u, c;
  if (s === i) return Math.max(0, r[i] - e[i] - ((u = e.scroll[i]) !== null && u !== void 0 ? u : 0) + t[i] - ((c = n[i]) !== null && c !== void 0 ? c : 0) - n[dn[i]] - o);
  var f;
  return Math.max(0, e[d] + e[i] + e.scroll[i] - t[i] - r[i] - r[d] - ((f = n[i]) !== null && f !== void 0 ? f : 0) - n[dn[i]] - o);
}
function mf(e, t, r, n, o, a, s, i, d, u, c, f, m, p, $, k) {
  let x = La(e), { size: N, crossAxis: v, crossSize: j, placement: T, crossPlacement: O } = x, I = Hn(t, i, r, x, c, f, u, m, $, k), H = c, F = Ma(i, u, t, o, a + c, x);
  if (s && n[N] > F) {
    let L = La(`${dn[T]} ${O}`), Y = Hn(t, i, r, L, c, f, u, m, $, k);
    Ma(i, u, t, o, a + c, L) > F && (x = L, I = Y, H = c);
  }
  let R = "bottom";
  x.axis === "top" ? x.placement === "top" ? R = "top" : x.placement === "bottom" && (R = "bottom") : x.crossAxis === "top" && (x.crossPlacement === "top" ? R = "bottom" : x.crossPlacement === "bottom" && (R = "top"));
  let D = Ra(v, I[v], r[j], i, d, a, u);
  I[v] += D;
  let g = gf(I, i, u, m, o, a, r.height, R);
  p && p < g && (g = p), r.height = Math.min(r.height, g), I = Hn(t, i, r, x, H, f, u, m, $, k), D = Ra(v, I[v], r[j], i, d, a, u), I[v] += D;
  let C = {}, h = t[v] - I[v] - o[yt[v]], P = h + 0.5 * t[j];
  const A = $ / 2 + k;
  var b, y, E, S;
  const W = yt[v] === "left" ? ((b = o.left) !== null && b !== void 0 ? b : 0) + ((y = o.right) !== null && y !== void 0 ? y : 0) : ((E = o.top) !== null && E !== void 0 ? E : 0) + ((S = o.bottom) !== null && S !== void 0 ? S : 0), M = r[j] - W - $ / 2 - k, B = t[v] + $ / 2 - (I[v] + o[yt[v]]), K = t[v] + t[j] - $ / 2 - (I[v] + o[yt[v]]), _ = ao(P, B, K);
  C[v] = ao(_, A, M), { placement: T, crossPlacement: O } = x, $ ? h = C[v] : O === "right" ? h += t[j] : O === "center" && (h += t[j] / 2);
  let G = T === "left" || T === "top" ? r[N] : 0, X = {
    x: T === "top" || T === "bottom" ? h : G,
    y: T === "left" || T === "right" ? h : G
  };
  return {
    position: I,
    maxHeight: g,
    arrowOffsetLeft: C.left,
    arrowOffsetTop: C.top,
    placement: T,
    triggerAnchorPoint: X
  };
}
function bf(e) {
  let { placement: t, targetNode: r, overlayNode: n, scrollNode: o, padding: a, shouldFlip: s, boundaryElement: i, offset: d, crossOffset: u, maxHeight: c, arrowSize: f = 0, arrowBoundaryOffset: m = 0 } = e, p = n instanceof HTMLElement ? $f(n) : document.documentElement, $ = p === document.documentElement;
  const k = window.getComputedStyle(p).position;
  let x = !!k && k !== "static", N = $ ? ur(r) : Fa(r, p);
  if (!$) {
    let { marginTop: C, marginLeft: h } = window.getComputedStyle(r);
    N.top += parseInt(C, 10) || 0, N.left += parseInt(h, 10) || 0;
  }
  let v = ur(n), j = pf(n);
  var T, O;
  v.width += ((T = j.left) !== null && T !== void 0 ? T : 0) + ((O = j.right) !== null && O !== void 0 ? O : 0);
  var I, H;
  v.height += ((I = j.top) !== null && I !== void 0 ? I : 0) + ((H = j.bottom) !== null && H !== void 0 ? H : 0);
  let F = ff(o), R = _a(i), D = _a(p), g = i.tagName === "BODY" ? ur(p) : Fa(p, i);
  return p.tagName === "HTML" && i.tagName === "BODY" && (D.scroll.top = 0, D.scroll.left = 0), mf(t, N, v, F, j, a, s, R, D, g, d, u, x, c, f, m);
}
function ur(e) {
  let { top: t, left: r, width: n, height: o } = e.getBoundingClientRect(), { scrollTop: a, scrollLeft: s, clientTop: i, clientLeft: d } = document.documentElement;
  return {
    top: t + a - i,
    left: r + s - d,
    width: n,
    height: o
  };
}
function Fa(e, t) {
  let r = window.getComputedStyle(e), n;
  if (r.position === "fixed") {
    let { top: o, left: a, width: s, height: i } = e.getBoundingClientRect();
    n = {
      top: o,
      left: a,
      width: s,
      height: i
    };
  } else {
    n = ur(e);
    let o = ur(t), a = window.getComputedStyle(t);
    o.top += (parseInt(a.borderTopWidth, 10) || 0) - t.scrollTop, o.left += (parseInt(a.borderLeftWidth, 10) || 0) - t.scrollLeft, n.top -= o.top, n.left -= o.left;
  }
  return n.top -= parseInt(r.marginTop, 10) || 0, n.left -= parseInt(r.marginLeft, 10) || 0, n;
}
function $f(e) {
  let t = e.offsetParent;
  if (t && t === document.body && window.getComputedStyle(t).position === "static" && !Da(t) && (t = document.documentElement), t == null)
    for (t = e.parentElement; t && !Da(t); ) t = t.parentElement;
  return t || document.documentElement;
}
function Da(e) {
  let t = window.getComputedStyle(e);
  return t.transform !== "none" || /transform|perspective/.test(t.willChange) || t.filter !== "none" || t.contain === "paint" || "backdropFilter" in t && t.backdropFilter !== "none" || "WebkitBackdropFilter" in t && t.WebkitBackdropFilter !== "none";
}
const xi = /* @__PURE__ */ new WeakMap();
function hf(e) {
  let { triggerRef: t, isOpen: r, onClose: n } = e;
  de(() => {
    if (!r || n === null) return;
    let o = (a) => {
      let s = a.target;
      if (!t.current || s instanceof Node && !s.contains(t.current) || a.target instanceof HTMLInputElement || a.target instanceof HTMLTextAreaElement) return;
      let i = n || xi.get(t.current);
      i && i();
    };
    return window.addEventListener("scroll", o, !0), () => {
      window.removeEventListener("scroll", o, !0);
    };
  }, [
    r,
    n,
    t
  ]);
}
let Me = typeof document < "u" ? window.visualViewport : null;
function wi(e) {
  let { direction: t } = ui(), { arrowSize: r, targetRef: n, overlayRef: o, arrowRef: a, scrollRef: s = o, placement: i = "bottom", containerPadding: d = 12, shouldFlip: u = !0, boundaryElement: c = typeof document < "u" ? document.body : null, offset: f = 0, crossOffset: m = 0, shouldUpdatePosition: p = !0, isOpen: $ = !0, onClose: k, maxHeight: x, arrowBoundaryOffset: N = 0 } = e, [v, j] = ne(null), T = [
    p,
    i,
    o.current,
    n.current,
    a == null ? void 0 : a.current,
    s.current,
    d,
    u,
    c,
    f,
    m,
    $,
    t,
    x,
    N,
    r
  ], O = oe(Me == null ? void 0 : Me.scale);
  de(() => {
    $ && (O.current = Me == null ? void 0 : Me.scale);
  }, [
    $
  ]);
  let I = fe(() => {
    var C, h, P;
    if (p === !1 || !$ || !o.current || !n.current || !c || (Me == null ? void 0 : Me.scale) !== O.current || o.current.querySelector("[data-react-aria-incomplete]") || ((C = (h = o.current).getAnimations) === null || C === void 0 ? void 0 : C.call(h).length) > 0) return;
    let A = null;
    if (s.current && s.current.contains(document.activeElement)) {
      var b;
      let _ = (b = document.activeElement) === null || b === void 0 ? void 0 : b.getBoundingClientRect(), G = s.current.getBoundingClientRect();
      var y;
      if (A = {
        type: "top",
        offset: ((y = _ == null ? void 0 : _.top) !== null && y !== void 0 ? y : 0) - G.top
      }, A.offset > G.height / 2) {
        A.type = "bottom";
        var E;
        A.offset = ((E = _ == null ? void 0 : _.bottom) !== null && E !== void 0 ? E : 0) - G.bottom;
      }
    }
    let S = o.current;
    if (!x && o.current) {
      var W;
      S.style.top = "0px", S.style.bottom = "";
      var M;
      S.style.maxHeight = ((M = (W = window.visualViewport) === null || W === void 0 ? void 0 : W.height) !== null && M !== void 0 ? M : window.innerHeight) + "px";
    }
    var B;
    let K = bf({
      placement: yf(i, t),
      overlayNode: o.current,
      targetNode: n.current,
      scrollNode: s.current || o.current,
      padding: d,
      shouldFlip: u,
      boundaryElement: c,
      offset: f,
      crossOffset: m,
      maxHeight: x,
      arrowSize: (B = r ?? (a == null || (P = a.current) === null || P === void 0 ? void 0 : P.getBoundingClientRect().width)) !== null && B !== void 0 ? B : 0,
      arrowBoundaryOffset: N
    });
    if (K.position) {
      if (S.style.top = "", S.style.bottom = "", S.style.left = "", S.style.right = "", Object.keys(K.position).forEach((_) => S.style[_] = K.position[_] + "px"), S.style.maxHeight = K.maxHeight != null ? K.maxHeight + "px" : "", A && document.activeElement && s.current) {
        let _ = document.activeElement.getBoundingClientRect(), G = s.current.getBoundingClientRect(), X = _[A.type] - G[A.type];
        s.current.scrollTop += X - A.offset;
      }
      j(K);
    }
  }, T);
  Fe(I, T), vf(I), Ia({
    ref: o,
    onResize: I
  }), Ia({
    ref: n,
    onResize: I
  });
  let H = oe(!1);
  Fe(() => {
    let C, h = () => {
      H.current = !0, clearTimeout(C), C = setTimeout(() => {
        H.current = !1;
      }, 500), I();
    }, P = () => {
      H.current && h();
    };
    return Me == null || Me.addEventListener("resize", h), Me == null || Me.addEventListener("scroll", P), () => {
      Me == null || Me.removeEventListener("resize", h), Me == null || Me.removeEventListener("scroll", P);
    };
  }, [
    I
  ]);
  let F = fe(() => {
    H.current || k == null || k();
  }, [
    k,
    H
  ]);
  hf({
    triggerRef: n,
    isOpen: $,
    onClose: k && F
  });
  var R, D, g;
  return {
    overlayProps: {
      style: {
        position: v ? "absolute" : "fixed",
        top: v ? void 0 : 0,
        left: v ? void 0 : 0,
        zIndex: 1e5,
        ...v == null ? void 0 : v.position,
        maxHeight: (R = v == null ? void 0 : v.maxHeight) !== null && R !== void 0 ? R : "100vh"
      }
    },
    placement: (D = v == null ? void 0 : v.placement) !== null && D !== void 0 ? D : null,
    triggerAnchorPoint: (g = v == null ? void 0 : v.triggerAnchorPoint) !== null && g !== void 0 ? g : null,
    arrowProps: {
      "aria-hidden": "true",
      role: "presentation",
      style: {
        left: v == null ? void 0 : v.arrowOffsetLeft,
        top: v == null ? void 0 : v.arrowOffsetTop
      }
    },
    updatePosition: I
  };
}
function vf(e) {
  Fe(() => (window.addEventListener("resize", e, !1), () => {
    window.removeEventListener("resize", e, !1);
  }), [
    e
  ]);
}
function yf(e, t) {
  return t === "rtl" ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right");
}
function Go(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function ki(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function Ei(e) {
  let t = oe({
    isFocused: !1,
    observer: null
  });
  Fe(() => {
    const n = t.current;
    return () => {
      n.observer && (n.observer.disconnect(), n.observer = null);
    };
  }, []);
  let r = ut((n) => {
    e == null || e(n);
  });
  return fe((n) => {
    if (n.target instanceof HTMLButtonElement || n.target instanceof HTMLInputElement || n.target instanceof HTMLTextAreaElement || n.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let o = n.target, a = (s) => {
        if (t.current.isFocused = !1, o.disabled) {
          let i = Go(s);
          r(i);
        }
        t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      o.addEventListener("focusout", a, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && o.disabled) {
          var s;
          (s = t.current.observer) === null || s === void 0 || s.disconnect();
          let i = o === document.activeElement ? null : document.activeElement;
          o.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: i
          })), o.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: i
          }));
        }
      }), t.current.observer.observe(o, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    r
  ]);
}
let cn = !1;
function za(e) {
  for (; e && !hi(e); ) e = e.parentElement;
  let t = pt(e), r = t.document.activeElement;
  if (!r || r === e) return;
  cn = !0;
  let n = !1, o = (c) => {
    (c.target === r || n) && c.stopImmediatePropagation();
  }, a = (c) => {
    (c.target === r || n) && (c.stopImmediatePropagation(), !e && !n && (n = !0, gr(r), d()));
  }, s = (c) => {
    (c.target === e || n) && c.stopImmediatePropagation();
  }, i = (c) => {
    (c.target === e || n) && (c.stopImmediatePropagation(), n || (n = !0, gr(r), d()));
  };
  t.addEventListener("blur", o, !0), t.addEventListener("focusout", a, !0), t.addEventListener("focusin", i, !0), t.addEventListener("focus", s, !0);
  let d = () => {
    cancelAnimationFrame(u), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", a, !0), t.removeEventListener("focusin", i, !0), t.removeEventListener("focus", s, !0), cn = !1, n = !1;
  }, u = requestAnimationFrame(d);
  return d;
}
let ir = "default", io = "", on = /* @__PURE__ */ new WeakMap();
function Ga(e) {
  if (Sn()) {
    if (ir === "default") {
      const t = Ne(e);
      io = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    ir = "disabled";
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    on.set(e, e.style[t]), e.style[t] = "none";
  }
}
function Un(e) {
  if (Sn()) {
    if (ir !== "disabled") return;
    ir = "restoring", setTimeout(() => {
      mi(() => {
        if (ir === "restoring") {
          const t = Ne(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = io || ""), io = "", ir = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && on.has(e)) {
    let t = on.get(e), r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    e.style[r] === "none" && (e.style[r] = t), e.getAttribute("style") === "" && e.removeAttribute("style"), on.delete(e);
  }
}
const Bo = ae.createContext({
  register: () => {
  }
});
Bo.displayName = "PressResponderContext";
function xf(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function Ni(e, t, r) {
  if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
  return t.get(e);
}
function wf(e, t) {
  var r = Ni(e, t, "get");
  return xf(e, r);
}
function kf(e, t, r) {
  if (t.set) t.set.call(e, r);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = r;
  }
}
function Ba(e, t, r) {
  var n = Ni(e, t, "set");
  return kf(e, n, r), r;
}
function Ef(e) {
  let t = mt(Bo);
  if (t) {
    let { register: r, ...n } = t;
    e = At(n, e), r();
  }
  return bi(t, e.ref), e;
}
var Kr = /* @__PURE__ */ new WeakMap();
class Wr {
  continuePropagation() {
    Ba(this, Kr, !1);
  }
  get shouldStopPropagation() {
    return wf(this, Kr);
  }
  constructor(t, r, n, o) {
    Iu(this, Kr, {
      writable: !0,
      value: void 0
    }), Ba(this, Kr, !0);
    var a;
    let s = (a = o == null ? void 0 : o.target) !== null && a !== void 0 ? a : n.currentTarget;
    const i = s == null ? void 0 : s.getBoundingClientRect();
    let d, u = 0, c, f = null;
    n.clientX != null && n.clientY != null && (c = n.clientX, f = n.clientY), i && (c != null && f != null ? (d = c - i.left, u = f - i.top) : (d = i.width / 2, u = i.height / 2)), this.type = t, this.pointerType = r, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = d, this.y = u;
  }
}
const Va = Symbol("linkClicked"), Ha = "react-aria-pressable-style", Ua = "data-react-aria-pressable";
function Nf(e) {
  let { onPress: t, onPressChange: r, onPressStart: n, onPressEnd: o, onPressUp: a, onClick: s, isDisabled: i, isPressed: d, preventFocusOnPress: u, shouldCancelOnPointerExit: c, allowTextSelectionOnPress: f, ref: m, ...p } = Ef(e), [$, k] = ne(!1), x = oe({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: N, removeAllGlobalListeners: v } = Fo(), j = ut((g, C) => {
    let h = x.current;
    if (i || h.didFirePressStart) return !1;
    let P = !0;
    if (h.isTriggeringEvent = !0, n) {
      let A = new Wr("pressstart", C, g);
      n(A), P = A.shouldStopPropagation;
    }
    return r && r(!0), h.isTriggeringEvent = !1, h.didFirePressStart = !0, k(!0), P;
  }), T = ut((g, C, h = !0) => {
    let P = x.current;
    if (!P.didFirePressStart) return !1;
    P.didFirePressStart = !1, P.isTriggeringEvent = !0;
    let A = !0;
    if (o) {
      let b = new Wr("pressend", C, g);
      o(b), A = b.shouldStopPropagation;
    }
    if (r && r(!1), k(!1), t && h && !i) {
      let b = new Wr("press", C, g);
      t(b), A && (A = b.shouldStopPropagation);
    }
    return P.isTriggeringEvent = !1, A;
  }), O = ut((g, C) => {
    let h = x.current;
    if (i) return !1;
    if (a) {
      h.isTriggeringEvent = !0;
      let P = new Wr("pressup", C, g);
      return a(P), h.isTriggeringEvent = !1, P.shouldStopPropagation;
    }
    return !0;
  }), I = ut((g) => {
    let C = x.current;
    if (C.isPressed && C.target) {
      C.didFirePressStart && C.pointerType != null && T(Ut(C.target, g), C.pointerType, !1), C.isPressed = !1, C.isOverTarget = !1, C.activePointerId = null, C.pointerType = null, v(), f || Un(C.target);
      for (let h of C.disposables) h();
      C.disposables = [];
    }
  }), H = ut((g) => {
    c && I(g);
  }), F = ut((g) => {
    s == null || s(g);
  }), R = ut((g, C) => {
    if (s) {
      let h = new MouseEvent("click", g);
      ki(h, C), s(Go(h));
    }
  }), D = Ae(() => {
    let g = x.current, C = {
      onKeyDown(P) {
        if (Kn(P.nativeEvent, P.currentTarget) && Ie(P.currentTarget, xe(P.nativeEvent))) {
          var A;
          Ya(xe(P.nativeEvent), P.key) && P.preventDefault();
          let b = !0;
          if (!g.isPressed && !P.repeat) {
            g.target = P.currentTarget, g.isPressed = !0, g.pointerType = "keyboard", b = j(P, "keyboard");
            let y = P.currentTarget, E = (S) => {
              Kn(S, y) && !S.repeat && Ie(y, xe(S)) && g.target && O(Ut(g.target, S), "keyboard");
            };
            N(Ne(P.currentTarget), "keyup", Rr(E, h), !0);
          }
          b && P.stopPropagation(), P.metaKey && mr() && ((A = g.metaKeyEvents) === null || A === void 0 || A.set(P.key, P.nativeEvent));
        } else P.key === "Meta" && (g.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(P) {
        if (!(P && !Ie(P.currentTarget, xe(P.nativeEvent))) && P && P.button === 0 && !g.isTriggeringEvent && !Lr.isOpening) {
          let A = !0;
          if (i && P.preventDefault(), !g.ignoreEmulatedMouseEvents && !g.isPressed && (g.pointerType === "virtual" || oo(P.nativeEvent))) {
            let b = j(P, "virtual"), y = O(P, "virtual"), E = T(P, "virtual");
            F(P), A = b && y && E;
          } else if (g.isPressed && g.pointerType !== "keyboard") {
            let b = g.pointerType || P.nativeEvent.pointerType || "virtual", y = O(Ut(P.currentTarget, P), b), E = T(Ut(P.currentTarget, P), b, !0);
            A = y && E, g.isOverTarget = !1, F(P), I(P);
          }
          g.ignoreEmulatedMouseEvents = !1, A && P.stopPropagation();
        }
      }
    }, h = (P) => {
      var A;
      if (g.isPressed && g.target && Kn(P, g.target)) {
        var b;
        Ya(xe(P), P.key) && P.preventDefault();
        let E = xe(P), S = Ie(g.target, xe(P));
        T(Ut(g.target, P), "keyboard", S), S && R(P, g.target), v(), P.key !== "Enter" && Vo(g.target) && Ie(g.target, E) && !P[Va] && (P[Va] = !0, Lr(g.target, P, !1)), g.isPressed = !1, (b = g.metaKeyEvents) === null || b === void 0 || b.delete(P.key);
      } else if (P.key === "Meta" && (!((A = g.metaKeyEvents) === null || A === void 0) && A.size)) {
        var y;
        let E = g.metaKeyEvents;
        g.metaKeyEvents = void 0;
        for (let S of E.values()) (y = g.target) === null || y === void 0 || y.dispatchEvent(new KeyboardEvent("keyup", S));
      }
    };
    if (typeof PointerEvent < "u") {
      C.onPointerDown = (b) => {
        if (b.button !== 0 || !Ie(b.currentTarget, xe(b.nativeEvent))) return;
        if (rf(b.nativeEvent)) {
          g.pointerType = "virtual";
          return;
        }
        g.pointerType = b.pointerType;
        let y = !0;
        if (!g.isPressed) {
          g.isPressed = !0, g.isOverTarget = !0, g.activePointerId = b.pointerId, g.target = b.currentTarget, f || Ga(g.target), y = j(b, g.pointerType);
          let E = xe(b.nativeEvent);
          "releasePointerCapture" in E && E.releasePointerCapture(b.pointerId), N(Ne(b.currentTarget), "pointerup", P, !1), N(Ne(b.currentTarget), "pointercancel", A, !1);
        }
        y && b.stopPropagation();
      }, C.onMouseDown = (b) => {
        if (Ie(b.currentTarget, xe(b.nativeEvent)) && b.button === 0) {
          if (u) {
            let y = za(b.target);
            y && g.disposables.push(y);
          }
          b.stopPropagation();
        }
      }, C.onPointerUp = (b) => {
        !Ie(b.currentTarget, xe(b.nativeEvent)) || g.pointerType === "virtual" || b.button === 0 && !g.isPressed && O(b, g.pointerType || b.pointerType);
      }, C.onPointerEnter = (b) => {
        b.pointerId === g.activePointerId && g.target && !g.isOverTarget && g.pointerType != null && (g.isOverTarget = !0, j(Ut(g.target, b), g.pointerType));
      }, C.onPointerLeave = (b) => {
        b.pointerId === g.activePointerId && g.target && g.isOverTarget && g.pointerType != null && (g.isOverTarget = !1, T(Ut(g.target, b), g.pointerType, !1), H(b));
      };
      let P = (b) => {
        if (b.pointerId === g.activePointerId && g.isPressed && b.button === 0 && g.target) {
          if (Ie(g.target, xe(b)) && g.pointerType != null) {
            let y = !1, E = setTimeout(() => {
              g.isPressed && g.target instanceof HTMLElement && (y ? I(b) : (gr(g.target), g.target.click()));
            }, 80);
            N(b.currentTarget, "click", () => y = !0, !0), g.disposables.push(() => clearTimeout(E));
          } else I(b);
          g.isOverTarget = !1;
        }
      }, A = (b) => {
        I(b);
      };
      C.onDragStart = (b) => {
        Ie(b.currentTarget, xe(b.nativeEvent)) && I(b);
      };
    } else if (process.env.NODE_ENV === "test") {
      C.onMouseDown = (b) => {
        if (b.button !== 0 || !Ie(b.currentTarget, xe(b.nativeEvent))) return;
        if (g.ignoreEmulatedMouseEvents) {
          b.stopPropagation();
          return;
        }
        if (g.isPressed = !0, g.isOverTarget = !0, g.target = b.currentTarget, g.pointerType = oo(b.nativeEvent) ? "virtual" : "mouse", hd(() => j(b, g.pointerType)) && b.stopPropagation(), u) {
          let E = za(b.target);
          E && g.disposables.push(E);
        }
        N(Ne(b.currentTarget), "mouseup", P, !1);
      }, C.onMouseEnter = (b) => {
        if (!Ie(b.currentTarget, xe(b.nativeEvent))) return;
        let y = !0;
        g.isPressed && !g.ignoreEmulatedMouseEvents && g.pointerType != null && (g.isOverTarget = !0, y = j(b, g.pointerType)), y && b.stopPropagation();
      }, C.onMouseLeave = (b) => {
        if (!Ie(b.currentTarget, xe(b.nativeEvent))) return;
        let y = !0;
        g.isPressed && !g.ignoreEmulatedMouseEvents && g.pointerType != null && (g.isOverTarget = !1, y = T(b, g.pointerType, !1), H(b)), y && b.stopPropagation();
      }, C.onMouseUp = (b) => {
        Ie(b.currentTarget, xe(b.nativeEvent)) && !g.ignoreEmulatedMouseEvents && b.button === 0 && !g.isPressed && O(b, g.pointerType || "mouse");
      };
      let P = (b) => {
        if (b.button === 0) {
          if (g.ignoreEmulatedMouseEvents) {
            g.ignoreEmulatedMouseEvents = !1;
            return;
          }
          g.target && g.target.contains(b.target) && g.pointerType != null || I(b), g.isOverTarget = !1;
        }
      };
      C.onTouchStart = (b) => {
        if (!Ie(b.currentTarget, xe(b.nativeEvent))) return;
        let y = Pf(b.nativeEvent);
        if (!y) return;
        g.activePointerId = y.identifier, g.ignoreEmulatedMouseEvents = !0, g.isOverTarget = !0, g.isPressed = !0, g.target = b.currentTarget, g.pointerType = "touch", f || Ga(g.target), j(Ft(g.target, b), g.pointerType) && b.stopPropagation(), N(pt(b.currentTarget), "scroll", A, !0);
      }, C.onTouchMove = (b) => {
        if (!Ie(b.currentTarget, xe(b.nativeEvent))) return;
        if (!g.isPressed) {
          b.stopPropagation();
          return;
        }
        let y = Ka(b.nativeEvent, g.activePointerId), E = !0;
        y && Wa(y, b.currentTarget) ? !g.isOverTarget && g.pointerType != null && (g.isOverTarget = !0, E = j(Ft(g.target, b), g.pointerType)) : g.isOverTarget && g.pointerType != null && (g.isOverTarget = !1, E = T(Ft(g.target, b), g.pointerType, !1), H(Ft(g.target, b))), E && b.stopPropagation();
      }, C.onTouchEnd = (b) => {
        if (!Ie(b.currentTarget, xe(b.nativeEvent))) return;
        if (!g.isPressed) {
          b.stopPropagation();
          return;
        }
        let y = Ka(b.nativeEvent, g.activePointerId), E = !0;
        y && Wa(y, b.currentTarget) && g.pointerType != null ? (O(Ft(g.target, b), g.pointerType), E = T(Ft(g.target, b), g.pointerType), R(b.nativeEvent, g.target)) : g.isOverTarget && g.pointerType != null && (E = T(Ft(g.target, b), g.pointerType, !1)), E && b.stopPropagation(), g.isPressed = !1, g.activePointerId = null, g.isOverTarget = !1, g.ignoreEmulatedMouseEvents = !0, g.target && !f && Un(g.target), v();
      }, C.onTouchCancel = (b) => {
        Ie(b.currentTarget, xe(b.nativeEvent)) && (b.stopPropagation(), g.isPressed && I(Ft(g.target, b)));
      };
      let A = (b) => {
        g.isPressed && Ie(xe(b), g.target) && I({
          currentTarget: g.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      C.onDragStart = (b) => {
        Ie(b.currentTarget, xe(b.nativeEvent)) && I(b);
      };
    }
    return C;
  }, [
    N,
    i,
    u,
    v,
    f,
    I,
    H,
    T,
    j,
    O,
    F,
    R
  ]);
  return de(() => {
    if (!m || process.env.NODE_ENV === "test") return;
    const g = Ne(m.current);
    if (!g || !g.head || g.getElementById(Ha)) return;
    const C = g.createElement("style");
    C.id = Ha, C.textContent = `
@layer {
  [${Ua}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), g.head.prepend(C);
  }, [
    m
  ]), de(() => {
    let g = x.current;
    return () => {
      var C;
      f || Un((C = g.target) !== null && C !== void 0 ? C : void 0);
      for (let h of g.disposables) h();
      g.disposables = [];
    };
  }, [
    f
  ]), {
    isPressed: d || $,
    pressProps: At(p, D, {
      [Ua]: !0
    })
  };
}
function Vo(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function Kn(e, t) {
  const { key: r, code: n } = e, o = t, a = o.getAttribute("role");
  return (r === "Enter" || r === " " || r === "Spacebar" || n === "Space") && !(o instanceof pt(o).HTMLInputElement && !Pi(o, r) || o instanceof pt(o).HTMLTextAreaElement || o.isContentEditable) && // Links should only trigger with Enter key
  !((a === "link" || !a && Vo(o)) && r !== "Enter");
}
function Pf(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function Ka(e, t) {
  const r = e.changedTouches;
  for (let n = 0; n < r.length; n++) {
    const o = r[n];
    if (o.identifier === t) return o;
  }
  return null;
}
function Ft(e, t) {
  let r = 0, n = 0;
  return t.targetTouches && t.targetTouches.length === 1 && (r = t.targetTouches[0].clientX, n = t.targetTouches[0].clientY), {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
    clientX: r,
    clientY: n
  };
}
function Ut(e, t) {
  let r = t.clientX, n = t.clientY;
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
    clientX: r,
    clientY: n
  };
}
function Tf(e) {
  let t = 0, r = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? r = e.height / 2 : e.radiusY !== void 0 && (r = e.radiusY), {
    top: e.clientY - r,
    right: e.clientX + t,
    bottom: e.clientY + r,
    left: e.clientX - t
  };
}
function Cf(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function Wa(e, t) {
  let r = t.getBoundingClientRect(), n = Tf(e);
  return Cf(r, n);
}
function Sf(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Vo(e);
}
function Ya(e, t) {
  return e instanceof HTMLInputElement ? !Pi(e, t) : Sf(e);
}
const jf = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function Pi(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : jf.has(e.type);
}
let hr = null, lo = /* @__PURE__ */ new Set(), Ar = /* @__PURE__ */ new Map(), Jt = !1, co = !1;
const Of = {
  Tab: !0,
  Escape: !0
};
function Ho(e, t) {
  for (let r of lo) r(e, t);
}
function If(e) {
  return !(e.metaKey || !mr() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function un(e) {
  Jt = !0, If(e) && (hr = "keyboard", Ho("keyboard", e));
}
function ft(e) {
  hr = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Jt = !0, Ho("pointer", e));
}
function Ti(e) {
  oo(e) && (Jt = !0, hr = "virtual");
}
function Ci(e) {
  e.target === window || e.target === document || cn || !e.isTrusted || (!Jt && !co && (hr = "virtual", Ho("virtual", e)), Jt = !1, co = !1);
}
function Si() {
  cn || (Jt = !1, co = !0);
}
function uo(e) {
  if (typeof window > "u" || typeof document > "u" || Ar.get(pt(e))) return;
  const t = pt(e), r = Ne(e);
  let n = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Jt = !0, n.apply(this, arguments);
  }, r.addEventListener("keydown", un, !0), r.addEventListener("keyup", un, !0), r.addEventListener("click", Ti, !0), t.addEventListener("focus", Ci, !0), t.addEventListener("blur", Si, !1), typeof PointerEvent < "u" ? (r.addEventListener("pointerdown", ft, !0), r.addEventListener("pointermove", ft, !0), r.addEventListener("pointerup", ft, !0)) : process.env.NODE_ENV === "test" && (r.addEventListener("mousedown", ft, !0), r.addEventListener("mousemove", ft, !0), r.addEventListener("mouseup", ft, !0)), t.addEventListener("beforeunload", () => {
    ji(e);
  }, {
    once: !0
  }), Ar.set(t, {
    focus: n
  });
}
const ji = (e, t) => {
  const r = pt(e), n = Ne(e);
  t && n.removeEventListener("DOMContentLoaded", t), Ar.has(r) && (r.HTMLElement.prototype.focus = Ar.get(r).focus, n.removeEventListener("keydown", un, !0), n.removeEventListener("keyup", un, !0), n.removeEventListener("click", Ti, !0), r.removeEventListener("focus", Ci, !0), r.removeEventListener("blur", Si, !1), typeof PointerEvent < "u" ? (n.removeEventListener("pointerdown", ft, !0), n.removeEventListener("pointermove", ft, !0), n.removeEventListener("pointerup", ft, !0)) : process.env.NODE_ENV === "test" && (n.removeEventListener("mousedown", ft, !0), n.removeEventListener("mousemove", ft, !0), n.removeEventListener("mouseup", ft, !0)), Ar.delete(r));
};
function Af(e) {
  const t = Ne(e);
  let r;
  return t.readyState !== "loading" ? uo(e) : (r = () => {
    uo(e);
  }, t.addEventListener("DOMContentLoaded", r)), () => ji(e, r);
}
typeof document < "u" && Af();
function Uo() {
  return hr !== "pointer";
}
function Ko() {
  return hr;
}
const _f = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function Rf(e, t, r) {
  let n = Ne(r == null ? void 0 : r.target);
  const o = typeof window < "u" ? pt(r == null ? void 0 : r.target).HTMLInputElement : HTMLInputElement, a = typeof window < "u" ? pt(r == null ? void 0 : r.target).HTMLTextAreaElement : HTMLTextAreaElement, s = typeof window < "u" ? pt(r == null ? void 0 : r.target).HTMLElement : HTMLElement, i = typeof window < "u" ? pt(r == null ? void 0 : r.target).KeyboardEvent : KeyboardEvent;
  return e = e || n.activeElement instanceof o && !_f.has(n.activeElement.type) || n.activeElement instanceof a || n.activeElement instanceof s && n.activeElement.isContentEditable, !(e && t === "keyboard" && r instanceof i && !Of[r.key]);
}
function Lf(e, t, r) {
  uo(), de(() => {
    let n = (o, a) => {
      Rf(!!(r != null && r.isTextInput), o, a) && e(Uo());
    };
    return lo.add(n), () => {
      lo.delete(n);
    };
  }, t);
}
function fn(e) {
  const t = Ne(e), r = at(t);
  if (Ko() === "virtual") {
    let n = r;
    mi(() => {
      at(t) === n && e.isConnected && gr(e);
    });
  } else gr(e);
}
function Oi(e) {
  let { isDisabled: t, onFocus: r, onBlur: n, onFocusChange: o } = e;
  const a = fe((d) => {
    if (d.target === d.currentTarget)
      return n && n(d), o && o(!1), !0;
  }, [
    n,
    o
  ]), s = Ei(a), i = fe((d) => {
    const u = Ne(d.target), c = u ? at(u) : at();
    d.target === d.currentTarget && c === xe(d.nativeEvent) && (r && r(d), o && o(!0), s(d));
  }, [
    o,
    r,
    s
  ]);
  return {
    focusProps: {
      onFocus: !t && (r || o || n) ? i : void 0,
      onBlur: !t && (n || o) ? a : void 0
    }
  };
}
function Xa(e) {
  if (!e) return;
  let t = !0;
  return (r) => {
    let n = {
      ...r,
      preventDefault() {
        r.preventDefault();
      },
      isDefaultPrevented() {
        return r.isDefaultPrevented();
      },
      stopPropagation() {
        t && process.env.NODE_ENV !== "production" ? console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.") : t = !0;
      },
      continuePropagation() {
        t = !1;
      },
      isPropagationStopped() {
        return t;
      }
    };
    e(n), t && r.stopPropagation();
  };
}
function Mf(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: Xa(e.onKeyDown),
      onKeyUp: Xa(e.onKeyUp)
    }
  };
}
let Ff = /* @__PURE__ */ ae.createContext(null);
function Df(e) {
  let t = mt(Ff) || {};
  bi(t, e);
  let { ref: r, ...n } = t;
  return n;
}
function Ii(e, t) {
  let { focusProps: r } = Oi(e), { keyboardProps: n } = Mf(e), o = At(r, n), a = Df(t), s = e.isDisabled ? {} : a, i = oe(e.autoFocus);
  de(() => {
    i.current && t.current && fn(t.current), i.current = !1;
  }, [
    t
  ]);
  let d = e.excludeFromTabOrder ? -1 : 0;
  return e.isDisabled && (d = void 0), {
    focusableProps: At({
      ...o,
      tabIndex: d
    }, s)
  };
}
function zf({ children: e }) {
  let t = Ae(() => ({
    register: () => {
    }
  }), []);
  return /* @__PURE__ */ ae.createElement(Bo.Provider, {
    value: t
  }, e);
}
function Wo(e) {
  let { isDisabled: t, onBlurWithin: r, onFocusWithin: n, onFocusWithinChange: o } = e, a = oe({
    isFocusWithin: !1
  }), { addGlobalListener: s, removeAllGlobalListeners: i } = Fo(), d = fe((f) => {
    f.currentTarget.contains(f.target) && a.current.isFocusWithin && !f.currentTarget.contains(f.relatedTarget) && (a.current.isFocusWithin = !1, i(), r && r(f), o && o(!1));
  }, [
    r,
    o,
    a,
    i
  ]), u = Ei(d), c = fe((f) => {
    if (!f.currentTarget.contains(f.target)) return;
    const m = Ne(f.target), p = at(m);
    if (!a.current.isFocusWithin && p === xe(f.nativeEvent)) {
      n && n(f), o && o(!0), a.current.isFocusWithin = !0, u(f);
      let $ = f.currentTarget;
      s(m, "focus", (k) => {
        if (a.current.isFocusWithin && !Ie($, k.target)) {
          let x = new m.defaultView.FocusEvent("blur", {
            relatedTarget: k.target
          });
          ki(x, $);
          let N = Go(x);
          d(N);
        }
      }, {
        capture: !0
      });
    }
  }, [
    n,
    o,
    u,
    s,
    d
  ]);
  return t ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: c,
      onBlur: d
    }
  };
}
let pn = !1, Yr = 0;
function fo() {
  pn = !0, setTimeout(() => {
    pn = !1;
  }, 50);
}
function Za(e) {
  e.pointerType === "touch" && fo();
}
function Gf() {
  if (!(typeof document > "u"))
    return Yr === 0 && (typeof PointerEvent < "u" ? document.addEventListener("pointerup", Za) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", fo)), Yr++, () => {
      Yr--, !(Yr > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", Za) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", fo));
    };
}
function Yo(e) {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, isDisabled: o } = e, [a, s] = ne(!1), i = oe({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  de(Gf, []);
  let { addGlobalListener: d, removeAllGlobalListeners: u } = Fo(), { hoverProps: c, triggerHoverEnd: f } = Ae(() => {
    let m = (k, x) => {
      if (i.pointerType = x, o || x === "touch" || i.isHovered || !k.currentTarget.contains(k.target)) return;
      i.isHovered = !0;
      let N = k.currentTarget;
      i.target = N, d(Ne(k.target), "pointerover", (v) => {
        i.isHovered && i.target && !Ie(i.target, v.target) && p(v, v.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: N,
        pointerType: x
      }), r && r(!0), s(!0);
    }, p = (k, x) => {
      let N = i.target;
      i.pointerType = "", i.target = null, !(x === "touch" || !i.isHovered || !N) && (i.isHovered = !1, u(), n && n({
        type: "hoverend",
        target: N,
        pointerType: x
      }), r && r(!1), s(!1));
    }, $ = {};
    return typeof PointerEvent < "u" ? ($.onPointerEnter = (k) => {
      pn && k.pointerType === "mouse" || m(k, k.pointerType);
    }, $.onPointerLeave = (k) => {
      !o && k.currentTarget.contains(k.target) && p(k, k.pointerType);
    }) : process.env.NODE_ENV === "test" && ($.onTouchStart = () => {
      i.ignoreEmulatedMouseEvents = !0;
    }, $.onMouseEnter = (k) => {
      !i.ignoreEmulatedMouseEvents && !pn && m(k, "mouse"), i.ignoreEmulatedMouseEvents = !1;
    }, $.onMouseLeave = (k) => {
      !o && k.currentTarget.contains(k.target) && p(k, "mouse");
    }), {
      hoverProps: $,
      triggerHoverEnd: p
    };
  }, [
    t,
    r,
    n,
    o,
    i,
    d,
    u
  ]);
  return de(() => {
    o && f({
      currentTarget: i.target
    }, i.pointerType);
  }, [
    o
  ]), {
    hoverProps: c,
    isHovered: a
  };
}
function Bf(e) {
  let { ref: t, onInteractOutside: r, isDisabled: n, onInteractOutsideStart: o } = e, a = oe({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), s = ut((d) => {
    r && Xr(d, t) && (o && o(d), a.current.isPointerDown = !0);
  }), i = ut((d) => {
    r && r(d);
  });
  de(() => {
    let d = a.current;
    if (n) return;
    const u = t.current, c = Ne(u);
    if (typeof PointerEvent < "u") {
      let f = (m) => {
        d.isPointerDown && Xr(m, t) && i(m), d.isPointerDown = !1;
      };
      return c.addEventListener("pointerdown", s, !0), c.addEventListener("click", f, !0), () => {
        c.removeEventListener("pointerdown", s, !0), c.removeEventListener("click", f, !0);
      };
    } else if (process.env.NODE_ENV === "test") {
      let f = (p) => {
        d.ignoreEmulatedMouseEvents ? d.ignoreEmulatedMouseEvents = !1 : d.isPointerDown && Xr(p, t) && i(p), d.isPointerDown = !1;
      }, m = (p) => {
        d.ignoreEmulatedMouseEvents = !0, d.isPointerDown && Xr(p, t) && i(p), d.isPointerDown = !1;
      };
      return c.addEventListener("mousedown", s, !0), c.addEventListener("mouseup", f, !0), c.addEventListener("touchstart", s, !0), c.addEventListener("touchend", m, !0), () => {
        c.removeEventListener("mousedown", s, !0), c.removeEventListener("mouseup", f, !0), c.removeEventListener("touchstart", s, !0), c.removeEventListener("touchend", m, !0);
      };
    }
  }, [
    t,
    n,
    s,
    i
  ]);
}
function Xr(e, t) {
  if (e.button > 0) return !1;
  if (e.target) {
    const r = e.target.ownerDocument;
    if (!r || !r.documentElement.contains(e.target) || e.target.closest("[data-react-aria-top-layer]")) return !1;
  }
  return t.current ? !e.composedPath().includes(t.current) : !1;
}
const qa = /* @__PURE__ */ ae.createContext(null), po = "react-aria-focus-scope-restore";
let Se = null;
function Vf(e) {
  let { children: t, contain: r, restoreFocus: n, autoFocus: o } = e, a = oe(null), s = oe(null), i = oe([]), { parentNode: d } = mt(qa) || {}, u = Ae(() => new mo({
    scopeRef: i
  }), [
    i
  ]);
  Fe(() => {
    let m = d || ze.root;
    if (ze.getTreeNode(m.scopeRef) && Se && !gn(Se, m.scopeRef)) {
      let p = ze.getTreeNode(Se);
      p && (m = p);
    }
    m.addChild(u), ze.addNode(u);
  }, [
    u,
    d
  ]), Fe(() => {
    let m = ze.getTreeNode(i);
    m && (m.contain = !!r);
  }, [
    r
  ]), Fe(() => {
    var m;
    let p = (m = a.current) === null || m === void 0 ? void 0 : m.nextSibling, $ = [], k = (x) => x.stopPropagation();
    for (; p && p !== s.current; )
      $.push(p), p.addEventListener(po, k), p = p.nextSibling;
    return i.current = $, () => {
      for (let x of $) x.removeEventListener(po, k);
    };
  }, [
    t
  ]), Xf(i, n, r), Kf(i, r), Zf(i, n, r), Yf(i, o), de(() => {
    const m = at(Ne(i.current ? i.current[0] : void 0));
    let p = null;
    if (gt(m, i.current)) {
      for (let $ of ze.traverse()) $.scopeRef && gt(m, $.scopeRef.current) && (p = $);
      p === ze.getTreeNode(i) && (Se = p.scopeRef);
    }
  }, [
    i
  ]), Fe(() => () => {
    var m, p, $;
    let k = ($ = (p = ze.getTreeNode(i)) === null || p === void 0 || (m = p.parent) === null || m === void 0 ? void 0 : m.scopeRef) !== null && $ !== void 0 ? $ : null;
    (i === Se || gn(i, Se)) && (!k || ze.getTreeNode(k)) && (Se = k), ze.removeTreeNode(i);
  }, [
    i
  ]);
  let c = Ae(() => Hf(i), []), f = Ae(() => ({
    focusManager: c,
    parentNode: u
  }), [
    u,
    c
  ]);
  return /* @__PURE__ */ ae.createElement(qa.Provider, {
    value: f
  }, /* @__PURE__ */ ae.createElement("span", {
    "data-focus-scope-start": !0,
    hidden: !0,
    ref: a
  }), t, /* @__PURE__ */ ae.createElement("span", {
    "data-focus-scope-end": !0,
    hidden: !0,
    ref: s
  }));
}
function Hf(e) {
  return {
    focusNext(t = {}) {
      let r = e.current, { from: n, tabbable: o, wrap: a, accept: s } = t;
      var i;
      let d = n || at(Ne((i = r[0]) !== null && i !== void 0 ? i : void 0)), u = r[0].previousElementSibling, c = Zt(r), f = Bt(c, {
        tabbable: o,
        accept: s
      }, r);
      f.currentNode = gt(d, r) ? d : u;
      let m = f.nextNode();
      return !m && a && (f.currentNode = u, m = f.nextNode()), m && Ot(m, !0), m;
    },
    focusPrevious(t = {}) {
      let r = e.current, { from: n, tabbable: o, wrap: a, accept: s } = t;
      var i;
      let d = n || at(Ne((i = r[0]) !== null && i !== void 0 ? i : void 0)), u = r[r.length - 1].nextElementSibling, c = Zt(r), f = Bt(c, {
        tabbable: o,
        accept: s
      }, r);
      f.currentNode = gt(d, r) ? d : u;
      let m = f.previousNode();
      return !m && a && (f.currentNode = u, m = f.previousNode()), m && Ot(m, !0), m;
    },
    focusFirst(t = {}) {
      let r = e.current, { tabbable: n, accept: o } = t, a = Zt(r), s = Bt(a, {
        tabbable: n,
        accept: o
      }, r);
      s.currentNode = r[0].previousElementSibling;
      let i = s.nextNode();
      return i && Ot(i, !0), i;
    },
    focusLast(t = {}) {
      let r = e.current, { tabbable: n, accept: o } = t, a = Zt(r), s = Bt(a, {
        tabbable: n,
        accept: o
      }, r);
      s.currentNode = r[r.length - 1].nextElementSibling;
      let i = s.previousNode();
      return i && Ot(i, !0), i;
    }
  };
}
function Zt(e) {
  return e[0].parentElement;
}
function Or(e) {
  let t = ze.getTreeNode(Se);
  for (; t && t.scopeRef !== e; ) {
    if (t.contain) return !1;
    t = t.parent;
  }
  return !0;
}
function Uf(e) {
  if (e.checked) return !0;
  let t = [];
  if (!e.form) t = [
    ...Ne(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)
  ].filter((a) => !a.form);
  else {
    var r, n;
    let a = (n = e.form) === null || n === void 0 || (r = n.elements) === null || r === void 0 ? void 0 : r.namedItem(e.name);
    t = [
      ...a ?? []
    ];
  }
  return t ? !t.some((a) => a.checked) : !1;
}
function Kf(e, t) {
  let r = oe(void 0), n = oe(void 0);
  Fe(() => {
    let o = e.current;
    if (!t) {
      n.current && (cancelAnimationFrame(n.current), n.current = void 0);
      return;
    }
    const a = Ne(o ? o[0] : void 0);
    let s = (u) => {
      if (u.key !== "Tab" || u.altKey || u.ctrlKey || u.metaKey || !Or(e) || u.isComposing) return;
      let c = at(a), f = e.current;
      if (!f || !gt(c, f)) return;
      let m = Zt(f), p = Bt(m, {
        tabbable: !0
      }, f);
      if (!c) return;
      p.currentNode = c;
      let $ = u.shiftKey ? p.previousNode() : p.nextNode();
      $ || (p.currentNode = u.shiftKey ? f[f.length - 1].nextElementSibling : f[0].previousElementSibling, $ = u.shiftKey ? p.previousNode() : p.nextNode()), u.preventDefault(), $ && Ot($, !0);
    }, i = (u) => {
      (!Se || gn(Se, e)) && gt(xe(u), e.current) ? (Se = e, r.current = xe(u)) : Or(e) && !Gt(xe(u), e) ? r.current ? r.current.focus() : Se && Se.current && go(Se.current) : Or(e) && (r.current = xe(u));
    }, d = (u) => {
      n.current && cancelAnimationFrame(n.current), n.current = requestAnimationFrame(() => {
        let c = Ko(), f = (c === "virtual" || c === null) && Mo() && gi(), m = at(a);
        if (!f && m && Or(e) && !Gt(m, e)) {
          Se = e;
          let $ = xe(u);
          if ($ && $.isConnected) {
            var p;
            r.current = $, (p = r.current) === null || p === void 0 || p.focus();
          } else Se.current && go(Se.current);
        }
      });
    };
    return a.addEventListener("keydown", s, !1), a.addEventListener("focusin", i, !1), o == null || o.forEach((u) => u.addEventListener("focusin", i, !1)), o == null || o.forEach((u) => u.addEventListener("focusout", d, !1)), () => {
      a.removeEventListener("keydown", s, !1), a.removeEventListener("focusin", i, !1), o == null || o.forEach((u) => u.removeEventListener("focusin", i, !1)), o == null || o.forEach((u) => u.removeEventListener("focusout", d, !1));
    };
  }, [
    e,
    t
  ]), Fe(() => () => {
    n.current && cancelAnimationFrame(n.current);
  }, [
    n
  ]);
}
function Ai(e) {
  return Gt(e);
}
function gt(e, t) {
  return !e || !t ? !1 : t.some((r) => r.contains(e));
}
function Gt(e, t = null) {
  if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
  for (let { scopeRef: r } of ze.traverse(ze.getTreeNode(t)))
    if (r && gt(e, r.current)) return !0;
  return !1;
}
function Wf(e) {
  return Gt(e, Se);
}
function gn(e, t) {
  var r;
  let n = (r = ze.getTreeNode(t)) === null || r === void 0 ? void 0 : r.parent;
  for (; n; ) {
    if (n.scopeRef === e) return !0;
    n = n.parent;
  }
  return !1;
}
function Ot(e, t = !1) {
  if (e != null && !t) try {
    fn(e);
  } catch {
  }
  else if (e != null) try {
    e.focus();
  } catch {
  }
}
function _i(e, t = !0) {
  let r = e[0].previousElementSibling, n = Zt(e), o = Bt(n, {
    tabbable: t
  }, e);
  o.currentNode = r;
  let a = o.nextNode();
  return t && !a && (n = Zt(e), o = Bt(n, {
    tabbable: !1
  }, e), o.currentNode = r, a = o.nextNode()), a;
}
function go(e, t = !0) {
  Ot(_i(e, t));
}
function Yf(e, t) {
  const r = ae.useRef(t);
  de(() => {
    if (r.current) {
      Se = e;
      const n = Ne(e.current ? e.current[0] : void 0);
      !gt(at(n), Se.current) && e.current && go(e.current);
    }
    r.current = !1;
  }, [
    e
  ]);
}
function Xf(e, t, r) {
  Fe(() => {
    if (t || r) return;
    let n = e.current;
    const o = Ne(n ? n[0] : void 0);
    let a = (s) => {
      let i = xe(s);
      gt(i, e.current) ? Se = e : Ai(i) || (Se = null);
    };
    return o.addEventListener("focusin", a, !1), n == null || n.forEach((s) => s.addEventListener("focusin", a, !1)), () => {
      o.removeEventListener("focusin", a, !1), n == null || n.forEach((s) => s.removeEventListener("focusin", a, !1));
    };
  }, [
    e,
    t,
    r
  ]);
}
function Ja(e) {
  let t = ze.getTreeNode(Se);
  for (; t && t.scopeRef !== e; ) {
    if (t.nodeToRestore) return !1;
    t = t.parent;
  }
  return (t == null ? void 0 : t.scopeRef) === e;
}
function Zf(e, t, r) {
  const n = oe(typeof document < "u" ? at(Ne(e.current ? e.current[0] : void 0)) : null);
  Fe(() => {
    let o = e.current;
    const a = Ne(o ? o[0] : void 0);
    if (!t || r) return;
    let s = () => {
      (!Se || gn(Se, e)) && gt(at(a), e.current) && (Se = e);
    };
    return a.addEventListener("focusin", s, !1), o == null || o.forEach((i) => i.addEventListener("focusin", s, !1)), () => {
      a.removeEventListener("focusin", s, !1), o == null || o.forEach((i) => i.removeEventListener("focusin", s, !1));
    };
  }, [
    e,
    r
  ]), Fe(() => {
    const o = Ne(e.current ? e.current[0] : void 0);
    if (!t) return;
    let a = (s) => {
      if (s.key !== "Tab" || s.altKey || s.ctrlKey || s.metaKey || !Or(e) || s.isComposing) return;
      let i = o.activeElement;
      if (!Gt(i, e) || !Ja(e)) return;
      let d = ze.getTreeNode(e);
      if (!d) return;
      let u = d.nodeToRestore, c = Bt(o.body, {
        tabbable: !0
      });
      c.currentNode = i;
      let f = s.shiftKey ? c.previousNode() : c.nextNode();
      if ((!u || !u.isConnected || u === o.body) && (u = void 0, d.nodeToRestore = void 0), (!f || !Gt(f, e)) && u) {
        c.currentNode = u;
        do
          f = s.shiftKey ? c.previousNode() : c.nextNode();
        while (Gt(f, e));
        s.preventDefault(), s.stopPropagation(), f ? Ot(f, !0) : Ai(u) ? Ot(u, !0) : i.blur();
      }
    };
    return r || o.addEventListener("keydown", a, !0), () => {
      r || o.removeEventListener("keydown", a, !0);
    };
  }, [
    e,
    t,
    r
  ]), Fe(() => {
    const o = Ne(e.current ? e.current[0] : void 0);
    if (!t) return;
    let a = ze.getTreeNode(e);
    if (a) {
      var s;
      return a.nodeToRestore = (s = n.current) !== null && s !== void 0 ? s : void 0, () => {
        let i = ze.getTreeNode(e);
        if (!i) return;
        let d = i.nodeToRestore, u = at(o);
        if (t && d && (u && Gt(u, e) || u === o.body && Ja(e))) {
          let c = ze.clone();
          requestAnimationFrame(() => {
            if (o.activeElement === o.body) {
              let f = c.getTreeNode(e);
              for (; f; ) {
                if (f.nodeToRestore && f.nodeToRestore.isConnected) {
                  Qa(f.nodeToRestore);
                  return;
                }
                f = f.parent;
              }
              for (f = c.getTreeNode(e); f; ) {
                if (f.scopeRef && f.scopeRef.current && ze.getTreeNode(f.scopeRef)) {
                  let m = _i(f.scopeRef.current, !0);
                  Qa(m);
                  return;
                }
                f = f.parent;
              }
            }
          });
        }
      };
    }
  }, [
    e,
    t
  ]);
}
function Qa(e) {
  e.dispatchEvent(new CustomEvent(po, {
    bubbles: !0,
    cancelable: !0
  })) && Ot(e);
}
function Bt(e, t, r) {
  let n = t != null && t.tabbable ? df : hi, o = (e == null ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null, a = Ne(o), s = Bu(a, e || a, NodeFilter.SHOW_ELEMENT, {
    acceptNode(i) {
      var d;
      return !(t == null || (d = t.from) === null || d === void 0) && d.contains(i) || t != null && t.tabbable && i.tagName === "INPUT" && i.getAttribute("type") === "radio" && (!Uf(i) || s.currentNode.tagName === "INPUT" && s.currentNode.type === "radio" && s.currentNode.name === i.name) ? NodeFilter.FILTER_REJECT : n(i) && (!r || gt(i, r)) && (!(t != null && t.accept) || t.accept(i)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  return t != null && t.from && (s.currentNode = t.from), s;
}
class Xo {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(t) {
    return this.fastMap.get(t);
  }
  addTreeNode(t, r, n) {
    let o = this.fastMap.get(r ?? null);
    if (!o) return;
    let a = new mo({
      scopeRef: t
    });
    o.addChild(a), a.parent = o, this.fastMap.set(t, a), n && (a.nodeToRestore = n);
  }
  addNode(t) {
    this.fastMap.set(t.scopeRef, t);
  }
  removeTreeNode(t) {
    if (t === null) return;
    let r = this.fastMap.get(t);
    if (!r) return;
    let n = r.parent;
    for (let a of this.traverse()) a !== r && r.nodeToRestore && a.nodeToRestore && r.scopeRef && r.scopeRef.current && gt(a.nodeToRestore, r.scopeRef.current) && (a.nodeToRestore = r.nodeToRestore);
    let o = r.children;
    n && (n.removeChild(r), o.size > 0 && o.forEach((a) => n && n.addChild(a))), this.fastMap.delete(r.scopeRef);
  }
  // Pre Order Depth First
  *traverse(t = this.root) {
    if (t.scopeRef != null && (yield t), t.children.size > 0) for (let r of t.children) yield* this.traverse(r);
  }
  clone() {
    var t;
    let r = new Xo();
    var n;
    for (let o of this.traverse()) r.addTreeNode(o.scopeRef, (n = (t = o.parent) === null || t === void 0 ? void 0 : t.scopeRef) !== null && n !== void 0 ? n : null, o.nodeToRestore);
    return r;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map(), this.root = new mo({
      scopeRef: null
    }), this.fastMap.set(null, this.root);
  }
}
class mo {
  addChild(t) {
    this.children.add(t), t.parent = this;
  }
  removeChild(t) {
    this.children.delete(t), t.parent = void 0;
  }
  constructor(t) {
    this.children = /* @__PURE__ */ new Set(), this.contain = !1, this.scopeRef = t.scopeRef;
  }
}
let ze = new Xo();
function Ri(e = {}) {
  let { autoFocus: t = !1, isTextInput: r, within: n } = e, o = oe({
    isFocused: !1,
    isFocusVisible: t || Uo()
  }), [a, s] = ne(!1), [i, d] = ne(() => o.current.isFocused && o.current.isFocusVisible), u = fe(() => d(o.current.isFocused && o.current.isFocusVisible), []), c = fe((p) => {
    o.current.isFocused = p, s(p), u();
  }, [
    u
  ]);
  Lf((p) => {
    o.current.isFocusVisible = p, u();
  }, [], {
    isTextInput: r
  });
  let { focusProps: f } = Oi({
    isDisabled: n,
    onFocusChange: c
  }), { focusWithinProps: m } = Wo({
    isDisabled: !n,
    onFocusWithinChange: c
  });
  return {
    isFocused: a,
    isFocusVisible: i,
    focusProps: n ? m : f
  };
}
function qf(e, t, r) {
  let { type: n } = e, { isOpen: o } = t;
  de(() => {
    r && r.current && xi.set(r.current, t.close);
  });
  let a;
  n === "menu" ? a = !0 : n === "listbox" && (a = "listbox");
  let s = Pn();
  return {
    triggerProps: {
      "aria-haspopup": a,
      "aria-expanded": o,
      "aria-controls": o ? s : void 0,
      onPress: t.toggle
    },
    overlayProps: {
      id: s
    }
  };
}
const Wn = typeof document < "u" && window.visualViewport, Jf = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
let Zr = 0, Yn;
function Qf(e = {}) {
  let { isDisabled: t } = e;
  Fe(() => {
    if (!t)
      return Zr++, Zr === 1 && (Sn() ? Yn = t0() : Yn = e0()), () => {
        Zr--, Zr === 0 && Yn();
      };
  }, [
    t
  ]);
}
function e0() {
  let e = window.innerWidth - document.documentElement.clientWidth;
  return Rr(e > 0 && // Use scrollbar-gutter when supported because it also works for fixed positioned elements.
  ("scrollbarGutter" in document.documentElement.style ? qt(document.documentElement, "scrollbarGutter", "stable") : qt(document.documentElement, "paddingRight", `${e}px`)), qt(document.documentElement, "overflow", "hidden"));
}
function t0() {
  let e, t, r = (u) => {
    e = $i(u.target, !0), !(e === document.documentElement && e === document.body) && e instanceof HTMLElement && window.getComputedStyle(e).overscrollBehavior === "auto" && (t = qt(e, "overscrollBehavior", "contain"));
  }, n = (u) => {
    if (!e || e === document.documentElement || e === document.body) {
      u.preventDefault();
      return;
    }
    e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && u.preventDefault();
  }, o = () => {
    t && t();
  }, a = (u) => {
    let c = u.target;
    r0(c) && (i(), c.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      c.style.transform = "", Wn && (Wn.height < window.innerHeight ? requestAnimationFrame(() => {
        es(c);
      }) : Wn.addEventListener("resize", () => es(c), {
        once: !0
      }));
    }));
  }, s = null, i = () => {
    if (s) return;
    let u = () => {
      window.scrollTo(0, 0);
    }, c = window.pageXOffset, f = window.pageYOffset;
    s = Rr(Nr(window, "scroll", u), qt(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), qt(document.documentElement, "overflow", "hidden"), qt(document.body, "marginTop", `-${f}px`), () => {
      window.scrollTo(c, f);
    }), window.scrollTo(0, 0);
  }, d = Rr(Nr(document, "touchstart", r, {
    passive: !1,
    capture: !0
  }), Nr(document, "touchmove", n, {
    passive: !1,
    capture: !0
  }), Nr(document, "touchend", o, {
    passive: !1,
    capture: !0
  }), Nr(document, "focus", a, !0));
  return () => {
    t == null || t(), s == null || s(), d();
  };
}
function qt(e, t, r) {
  let n = e.style[t];
  return e.style[t] = r, () => {
    e.style[t] = n;
  };
}
function Nr(e, t, r, n) {
  return e.addEventListener(t, r, n), () => {
    e.removeEventListener(t, r, n);
  };
}
function es(e) {
  let t = document.scrollingElement || document.documentElement, r = e;
  for (; r && r !== t; ) {
    let n = $i(r);
    if (n !== document.documentElement && n !== document.body && n !== r) {
      let o = n.getBoundingClientRect().top, a = r.getBoundingClientRect().top;
      a > o + r.clientHeight && (n.scrollTop += a - o);
    }
    r = n.parentElement;
  }
}
function r0(e) {
  return e instanceof HTMLInputElement && !Jf.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
const n0 = /* @__PURE__ */ zs({});
function Li() {
  var e;
  return (e = mt(n0)) !== null && e !== void 0 ? e : {};
}
const bo = /* @__PURE__ */ ae.createContext(null);
function o0(e) {
  let { children: t } = e, r = mt(bo), [n, o] = ne(0), a = Ae(() => ({
    parent: r,
    modalCount: n,
    addModal() {
      o((s) => s + 1), r && r.addModal();
    },
    removeModal() {
      o((s) => s - 1), r && r.removeModal();
    }
  }), [
    r,
    n
  ]);
  return /* @__PURE__ */ ae.createElement(bo.Provider, {
    value: a
  }, t);
}
function a0() {
  let e = mt(bo);
  return {
    modalProviderProps: {
      "aria-hidden": e && e.modalCount > 0 ? !0 : void 0
    }
  };
}
function s0(e) {
  let { modalProviderProps: t } = a0();
  return /* @__PURE__ */ ae.createElement("div", {
    "data-overlay-container": !0,
    ...e,
    ...t
  });
}
function i0(e) {
  return /* @__PURE__ */ ae.createElement(o0, null, /* @__PURE__ */ ae.createElement(s0, e));
}
function ts(e) {
  let t = En(), { portalContainer: r = t ? null : document.body, ...n } = e, { getContainer: o } = Li();
  if (!e.portalContainer && o && (r = o()), ae.useEffect(() => {
    if (r != null && r.closest("[data-overlay-container]")) throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.");
  }, [
    r
  ]), !r) return null;
  let a = /* @__PURE__ */ ae.createElement(i0, n);
  return /* @__PURE__ */ Gs.createPortal(a, r);
}
var Mi = {};
Mi = {
  dismiss: "تجاهل"
};
var Fi = {};
Fi = {
  dismiss: "Отхвърляне"
};
var Di = {};
Di = {
  dismiss: "Odstranit"
};
var zi = {};
zi = {
  dismiss: "Luk"
};
var Gi = {};
Gi = {
  dismiss: "Schließen"
};
var Bi = {};
Bi = {
  dismiss: "Απόρριψη"
};
var Vi = {};
Vi = {
  dismiss: "Dismiss"
};
var Hi = {};
Hi = {
  dismiss: "Descartar"
};
var Ui = {};
Ui = {
  dismiss: "Lõpeta"
};
var Ki = {};
Ki = {
  dismiss: "Hylkää"
};
var Wi = {};
Wi = {
  dismiss: "Rejeter"
};
var Yi = {};
Yi = {
  dismiss: "התעלם"
};
var Xi = {};
Xi = {
  dismiss: "Odbaci"
};
var Zi = {};
Zi = {
  dismiss: "Elutasítás"
};
var qi = {};
qi = {
  dismiss: "Ignora"
};
var Ji = {};
Ji = {
  dismiss: "閉じる"
};
var Qi = {};
Qi = {
  dismiss: "무시"
};
var el = {};
el = {
  dismiss: "Atmesti"
};
var tl = {};
tl = {
  dismiss: "Nerādīt"
};
var rl = {};
rl = {
  dismiss: "Lukk"
};
var nl = {};
nl = {
  dismiss: "Negeren"
};
var ol = {};
ol = {
  dismiss: "Zignoruj"
};
var al = {};
al = {
  dismiss: "Descartar"
};
var sl = {};
sl = {
  dismiss: "Dispensar"
};
var il = {};
il = {
  dismiss: "Revocare"
};
var ll = {};
ll = {
  dismiss: "Пропустить"
};
var dl = {};
dl = {
  dismiss: "Zrušiť"
};
var cl = {};
cl = {
  dismiss: "Opusti"
};
var ul = {};
ul = {
  dismiss: "Odbaci"
};
var fl = {};
fl = {
  dismiss: "Avvisa"
};
var pl = {};
pl = {
  dismiss: "Kapat"
};
var gl = {};
gl = {
  dismiss: "Скасувати"
};
var ml = {};
ml = {
  dismiss: "取消"
};
var bl = {};
bl = {
  dismiss: "關閉"
};
var $l = {};
$l = {
  "ar-AE": Mi,
  "bg-BG": Fi,
  "cs-CZ": Di,
  "da-DK": zi,
  "de-DE": Gi,
  "el-GR": Bi,
  "en-US": Vi,
  "es-ES": Hi,
  "et-EE": Ui,
  "fi-FI": Ki,
  "fr-FR": Wi,
  "he-IL": Yi,
  "hr-HR": Xi,
  "hu-HU": Zi,
  "it-IT": qi,
  "ja-JP": Ji,
  "ko-KR": Qi,
  "lt-LT": el,
  "lv-LV": tl,
  "nb-NO": rl,
  "nl-NL": nl,
  "pl-PL": ol,
  "pt-BR": al,
  "pt-PT": sl,
  "ro-RO": il,
  "ru-RU": ll,
  "sk-SK": dl,
  "sl-SI": cl,
  "sr-SP": ul,
  "sv-SE": fl,
  "tr-TR": pl,
  "uk-UA": gl,
  "zh-CN": ml,
  "zh-TW": bl
};
const rs = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap"
};
function l0(e = {}) {
  let { style: t, isFocusable: r } = e, [n, o] = ne(!1), { focusWithinProps: a } = Wo({
    isDisabled: !r,
    onFocusWithinChange: (i) => o(i)
  }), s = Ae(() => n ? t : t ? {
    ...rs,
    ...t
  } : rs, [
    n
  ]);
  return {
    visuallyHiddenProps: {
      ...a,
      style: s
    }
  };
}
function d0(e) {
  let { children: t, elementType: r = "div", isFocusable: n, style: o, ...a } = e, { visuallyHiddenProps: s } = l0(e);
  return /* @__PURE__ */ ae.createElement(r, At(a, s), t);
}
function c0(e) {
  return e && e.__esModule ? e.default : e;
}
function ns(e) {
  let { onDismiss: t, ...r } = e, n = ju(c0($l), "@react-aria/overlays"), o = ef(r, n.format("dismiss")), a = () => {
    t && t();
  };
  return /* @__PURE__ */ ae.createElement(d0, null, /* @__PURE__ */ ae.createElement("button", {
    ...o,
    tabIndex: -1,
    onClick: a,
    style: {
      width: 1,
      height: 1
    }
  }));
}
const hl = /* @__PURE__ */ ae.createContext(null);
function u0(e) {
  let t = En(), { portalContainer: r = t ? null : document.body, isExiting: n } = e, [o, a] = ne(!1), s = Ae(() => ({
    contain: o,
    setContain: a
  }), [
    o,
    a
  ]), { getContainer: i } = Li();
  if (!e.portalContainer && i && (r = i()), !r) return null;
  let d = e.children;
  return e.disableFocusManagement || (d = /* @__PURE__ */ ae.createElement(Vf, {
    restoreFocus: !0,
    contain: (e.shouldContainFocus || o) && !n
  }, d)), d = /* @__PURE__ */ ae.createElement(hl.Provider, {
    value: s
  }, /* @__PURE__ */ ae.createElement(zf, null, d)), /* @__PURE__ */ Gs.createPortal(d, r);
}
function f0() {
  let e = mt(hl), t = e == null ? void 0 : e.setContain;
  Fe(() => {
    t == null || t(!0);
  }, [
    t
  ]);
}
function Zo(e) {
  return _e(e);
}
var vl = (e, t, r = !0) => {
  if (!t)
    return [e, {}];
  const n = t.reduce((o, a) => a in e ? { ...o, [a]: e[a] } : o, {});
  return r ? [Object.keys(e).filter((a) => !t.includes(a)).reduce((a, s) => ({ ...a, [s]: e[s] }), {}), n] : [e, n];
}, p0 = {
  default: "bg-default text-default-foreground",
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  success: "bg-success text-success-foreground",
  warning: "bg-warning text-warning-foreground",
  danger: "bg-danger text-danger-foreground",
  foreground: "bg-foreground text-background"
}, g0 = {
  default: "shadow-lg shadow-default/50 bg-default text-default-foreground",
  primary: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
  secondary: "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
  success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
  warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
  danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground"
}, m0 = {
  default: "bg-transparent border-default text-foreground",
  primary: "bg-transparent border-primary text-primary",
  secondary: "bg-transparent border-secondary text-secondary",
  success: "bg-transparent border-success text-success",
  warning: "bg-transparent border-warning text-warning",
  danger: "bg-transparent border-danger text-danger"
}, b0 = {
  default: "bg-default/40 text-default-700",
  primary: "bg-primary/20 text-primary-600",
  secondary: "bg-secondary/20 text-secondary-600",
  success: "bg-success/20 text-success-700 dark:text-success",
  warning: "bg-warning/20 text-warning-700 dark:text-warning",
  danger: "bg-danger/20 text-danger-600 dark:text-danger-500"
}, $0 = {
  default: "border-default bg-default-100 text-default-foreground",
  primary: "border-default bg-default-100 text-primary",
  secondary: "border-default bg-default-100 text-secondary",
  success: "border-default bg-default-100 text-success",
  warning: "border-default bg-default-100 text-warning",
  danger: "border-default bg-default-100 text-danger"
}, h0 = {
  default: "bg-transparent text-default-foreground",
  primary: "bg-transparent text-primary",
  secondary: "bg-transparent text-secondary",
  success: "bg-transparent text-success",
  warning: "bg-transparent text-warning",
  danger: "bg-transparent text-danger"
}, v0 = {
  default: "border-default text-default-foreground",
  primary: "border-primary text-primary",
  secondary: "border-secondary text-secondary",
  success: "border-success text-success",
  warning: "border-warning text-warning",
  danger: "border-danger text-danger"
}, ie = {
  solid: p0,
  shadow: g0,
  bordered: m0,
  flat: b0,
  faded: $0,
  light: h0,
  ghost: v0
}, y0 = {
  /** Animation Utilities */
  ".spinner-bar-animation": {
    "animation-delay": "calc(-1.2s + (0.1s * var(--bar-index)))",
    transform: "rotate(calc(30deg * var(--bar-index)))translate(140%)"
  },
  ".spinner-dot-animation": {
    "animation-delay": "calc(250ms * var(--dot-index))"
  },
  ".spinner-dot-blink-animation": {
    "animation-delay": "calc(200ms * var(--dot-index))"
  }
}, x0 = {
  /**
   * Custom utilities
   */
  ".leading-inherit": {
    "line-height": "inherit"
  },
  ".bg-img-inherit": {
    "background-image": "inherit"
  },
  ".bg-clip-inherit": {
    "background-clip": "inherit"
  },
  ".text-fill-inherit": {
    "-webkit-text-fill-color": "inherit"
  },
  ".tap-highlight-transparent": {
    "-webkit-tap-highlight-color": "transparent"
  },
  ".input-search-cancel-button-none": {
    "&::-webkit-search-cancel-button": {
      "-webkit-appearance": "none"
    }
  }
}, w0 = {
  /**
   * Scroll Hide
   */
  ".scrollbar-hide": {
    /* IE and Edge */
    "-ms-overflow-style": "none",
    /* Firefox */
    "scrollbar-width": "none",
    /* Safari and Chrome */
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  ".scrollbar-default": {
    /* IE and Edge */
    "-ms-overflow-style": "auto",
    /* Firefox */
    "scrollbar-width": "auto",
    /* Safari and Chrome */
    "&::-webkit-scrollbar": {
      display: "block"
    }
  }
}, k0 = {
  /**
   * Text utilities
   */
  ".text-tiny": {
    "font-size": "var(--heroui-font-size-tiny)",
    "line-height": "var(--heroui-line-height-tiny)"
  },
  ".text-small": {
    "font-size": "var(--heroui-font-size-small)",
    "line-height": "var(--heroui-line-height-small)"
  },
  ".text-medium": {
    "font-size": "var(--heroui-font-size-medium)",
    "line-height": "var(--heroui-line-height-medium)"
  },
  ".text-large": {
    "font-size": "var(--heroui-font-size-large)",
    "line-height": "var(--heroui-line-height-large)"
  }
}, ht = "250ms", E0 = {
  /**
   * Transition utilities
   */
  ".transition-background": {
    "transition-property": "background",
    "transition-timing-function": "ease",
    "transition-duration": ht
  },
  ".transition-colors-opacity": {
    "transition-property": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity",
    "transition-timing-function": "ease",
    "transition-duration": ht
  },
  ".transition-width": {
    "transition-property": "width",
    "transition-timing-function": "ease",
    "transition-duration": ht
  },
  ".transition-height": {
    "transition-property": "height",
    "transition-timing-function": "ease",
    "transition-duration": ht
  },
  ".transition-size": {
    "transition-property": "width, height",
    "transition-timing-function": "ease",
    "transition-duration": ht
  },
  ".transition-left": {
    "transition-property": "left",
    "transition-timing-function": "ease",
    "transition-duration": ht
  },
  ".transition-transform-opacity": {
    "transition-property": "transform, scale, opacity rotate",
    "transition-timing-function": "ease",
    "transition-duration": ht
  },
  ".transition-transform-background": {
    "transition-property": "transform, scale, background",
    "transition-timing-function": "ease",
    "transition-duration": ht
  },
  ".transition-transform-colors": {
    "transition-property": "transform, scale, color, background, background-color, border-color, text-decoration-color, fill, stroke",
    "transition-timing-function": "ease",
    "transition-duration": ht
  },
  ".transition-transform-colors-opacity": {
    "transition-property": "transform, scale, color, background, background-color, border-color, text-decoration-color, fill, stroke, opacity",
    "transition-timing-function": "ease",
    "transition-duration": ht
  }
}, N0 = {
  ...x0,
  ...E0,
  ...w0,
  ...k0,
  ...y0
}, qr = ["small", "medium", "large"], os = {
  theme: {
    spacing: ["divider"],
    radius: qr
  },
  classGroups: {
    shadow: [{ shadow: qr }],
    opacity: [{ opacity: ["disabled"] }],
    "font-size": [{ text: ["tiny", ...qr] }],
    "border-w": [{ border: qr }],
    "bg-image": [
      "bg-stripe-gradient-default",
      "bg-stripe-gradient-primary",
      "bg-stripe-gradient-secondary",
      "bg-stripe-gradient-success",
      "bg-stripe-gradient-warning",
      "bg-stripe-gradient-danger"
    ],
    transition: Object.keys(N0).filter((e) => e.includes(".transition")).map((e) => e.replace(".", ""))
    // remove the dot from the key, .transition-background -> transition-background
  }
}, P0 = /\s+/g, $o = (e) => typeof e != "string" || !e ? e : e.replace(P0, " ").trim(), mn = (...e) => {
  let t = [], r = (n) => {
    if (!n && n !== 0 && n !== 0n) return;
    if (Array.isArray(n)) {
      for (let a = 0, s = n.length; a < s; a++) r(n[a]);
      return;
    }
    let o = typeof n;
    if (o === "string" || o === "number" || o === "bigint") {
      if (o === "number" && n !== n) return;
      t.push(String(n));
    } else if (o === "object") {
      let a = Object.keys(n);
      for (let s = 0, i = a.length; s < i; s++) {
        let d = a[s];
        n[d] && t.push(d);
      }
    }
  };
  for (let n = 0, o = e.length; n < o; n++) {
    let a = e[n];
    a != null && r(a);
  }
  return t.length > 0 ? $o(t.join(" ")) : void 0;
}, as = (e) => e === !1 ? "false" : e === !0 ? "true" : e === 0 ? "0" : e, nt = (e) => {
  if (!e || typeof e != "object") return !0;
  for (let t in e) return !1;
  return !0;
}, T0 = (e, t) => {
  if (e === t) return !0;
  if (!e || !t) return !1;
  let r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++) {
    let a = r[o];
    if (!n.includes(a) || e[a] !== t[a]) return !1;
  }
  return !0;
}, ss = (e, t) => {
  for (let r in t) if (Object.prototype.hasOwnProperty.call(t, r)) {
    let n = t[r];
    r in e ? e[r] = mn(e[r], n) : e[r] = n;
  }
  return e;
}, yl = (e, t) => {
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    Array.isArray(n) ? yl(n, t) : n && t.push(n);
  }
}, xl = (...e) => {
  let t = [];
  yl(e, t);
  let r = [];
  for (let n = 0; n < t.length; n++) t[n] && r.push(t[n]);
  return r;
}, ho = (e, t) => {
  let r = {};
  for (let n in e) {
    let o = e[n];
    if (n in t) {
      let a = t[n];
      Array.isArray(o) || Array.isArray(a) ? r[n] = xl(a, o) : typeof o == "object" && typeof a == "object" && o && a ? r[n] = ho(o, a) : r[n] = a + " " + o;
    } else r[n] = o;
  }
  for (let n in t) n in e || (r[n] = t[n]);
  return r;
}, C0 = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 };
function S0() {
  let e = null, t = {}, r = !1;
  return { get cachedTwMerge() {
    return e;
  }, set cachedTwMerge(n) {
    e = n;
  }, get cachedTwMergeConfig() {
    return t;
  }, set cachedTwMergeConfig(n) {
    t = n;
  }, get didTwMergeConfigChange() {
    return r;
  }, set didTwMergeConfigChange(n) {
    r = n;
  }, reset() {
    e = null, t = {}, r = !1;
  } };
}
var St = S0(), j0 = (e) => {
  let t = (r, n) => {
    let { extend: o = null, slots: a = {}, variants: s = {}, compoundVariants: i = [], compoundSlots: d = [], defaultVariants: u = {} } = r, c = { ...C0, ...n }, f = o != null && o.base ? mn(o.base, r == null ? void 0 : r.base) : r == null ? void 0 : r.base, m = o != null && o.variants && !nt(o.variants) ? ho(s, o.variants) : s, p = o != null && o.defaultVariants && !nt(o.defaultVariants) ? { ...o.defaultVariants, ...u } : u;
    !nt(c.twMergeConfig) && !T0(c.twMergeConfig, St.cachedTwMergeConfig) && (St.didTwMergeConfigChange = !0, St.cachedTwMergeConfig = c.twMergeConfig);
    let $ = nt(o == null ? void 0 : o.slots), k = nt(a) ? {} : { base: mn(r == null ? void 0 : r.base, $ && (o == null ? void 0 : o.base)), ...a }, x = $ ? k : ss({ ...o == null ? void 0 : o.slots }, nt(k) ? { base: r == null ? void 0 : r.base } : k), N = nt(o == null ? void 0 : o.compoundVariants) ? i : xl(o == null ? void 0 : o.compoundVariants, i), v = (T) => {
      if (nt(m) && nt(a) && $) return e(f, T == null ? void 0 : T.class, T == null ? void 0 : T.className)(c);
      if (N && !Array.isArray(N)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof N}`);
      if (d && !Array.isArray(d)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof d}`);
      let O = (P, A, b = [], y) => {
        let E = b;
        if (typeof A == "string") {
          let S = $o(A).split(" ");
          for (let W = 0; W < S.length; W++) E.push(`${P}:${S[W]}`);
        } else if (Array.isArray(A)) for (let S = 0; S < A.length; S++) E.push(`${P}:${A[S]}`);
        else if (typeof A == "object" && typeof y == "string" && y in A) {
          let S = A[y];
          if (S && typeof S == "string") {
            let W = $o(S).split(" "), M = [];
            for (let B = 0; B < W.length; B++) M.push(`${P}:${W[B]}`);
            E[y] = E[y] ? E[y].concat(M) : M;
          } else if (Array.isArray(S) && S.length > 0) {
            let W = [];
            for (let M = 0; M < S.length; M++) W.push(`${P}:${S[M]}`);
            E[y] = W;
          }
        }
        return E;
      }, I = (P, A = m, b = null, y = null) => {
        let E = A[P];
        if (!E || nt(E)) return null;
        let S = (y == null ? void 0 : y[P]) ?? (T == null ? void 0 : T[P]);
        if (S === null) return null;
        let W = as(S), M = Array.isArray(c.responsiveVariants) && c.responsiveVariants.length > 0 || c.responsiveVariants === !0, B = p == null ? void 0 : p[P], K = [];
        if (typeof W == "object" && M) for (let [X, L] of Object.entries(W)) {
          let Y = E[L];
          if (X === "initial") {
            B = L;
            continue;
          }
          Array.isArray(c.responsiveVariants) && !c.responsiveVariants.includes(X) || (K = O(X, Y, K, b));
        }
        let _ = W != null && typeof W != "object" ? W : as(B), G = E[_ || "false"];
        return typeof K == "object" && typeof b == "string" && K[b] ? ss(K, G) : K.length > 0 ? (K.push(G), b === "base" ? K.join(" ") : K) : G;
      }, H = () => {
        if (!m) return null;
        let P = Object.keys(m), A = [];
        for (let b = 0; b < P.length; b++) {
          let y = I(P[b], m);
          y && A.push(y);
        }
        return A;
      }, F = (P, A) => {
        if (!m || typeof m != "object") return null;
        let b = [];
        for (let y in m) {
          let E = I(y, m, P, A), S = P === "base" && typeof E == "string" ? E : E && E[P];
          S && b.push(S);
        }
        return b;
      }, R = {};
      for (let P in T) {
        let A = T[P];
        A !== void 0 && (R[P] = A);
      }
      let D = (P, A) => {
        var y;
        let b = typeof (T == null ? void 0 : T[P]) == "object" ? { [P]: (y = T[P]) == null ? void 0 : y.initial } : {};
        return { ...p, ...R, ...b, ...A };
      }, g = (P = [], A) => {
        let b = [], y = P.length;
        for (let E = 0; E < y; E++) {
          let { class: S, className: W, ...M } = P[E], B = !0, K = D(null, A);
          for (let _ in M) {
            let G = M[_], X = K[_];
            if (Array.isArray(G)) {
              if (!G.includes(X)) {
                B = !1;
                break;
              }
            } else {
              if ((G == null || G === !1) && (X == null || X === !1)) continue;
              if (X !== G) {
                B = !1;
                break;
              }
            }
          }
          B && (S && b.push(S), W && b.push(W));
        }
        return b;
      }, C = (P) => {
        let A = g(N, P);
        if (!Array.isArray(A)) return A;
        let b = {}, y = e;
        for (let E = 0; E < A.length; E++) {
          let S = A[E];
          if (typeof S == "string") b.base = y(b.base, S)(c);
          else if (typeof S == "object") for (let W in S) b[W] = y(b[W], S[W])(c);
        }
        return b;
      }, h = (P) => {
        if (d.length < 1) return null;
        let A = {}, b = D(null, P);
        for (let y = 0; y < d.length; y++) {
          let { slots: E = [], class: S, className: W, ...M } = d[y];
          if (!nt(M)) {
            let B = !0;
            for (let K in M) {
              let _ = b[K], G = M[K];
              if (_ === void 0 || (Array.isArray(G) ? !G.includes(_) : G !== _)) {
                B = !1;
                break;
              }
            }
            if (!B) continue;
          }
          for (let B = 0; B < E.length; B++) {
            let K = E[B];
            A[K] || (A[K] = []), A[K].push([S, W]);
          }
        }
        return A;
      };
      if (!nt(a) || !$) {
        let P = {};
        if (typeof x == "object" && !nt(x)) {
          let A = e;
          for (let b in x) P[b] = (y) => {
            let E = C(y), S = h(y);
            return A(x[b], F(b, y), E ? E[b] : void 0, S ? S[b] : void 0, y == null ? void 0 : y.class, y == null ? void 0 : y.className)(c);
          };
        }
        return P;
      }
      return e(f, H(), g(N), T == null ? void 0 : T.class, T == null ? void 0 : T.className)(c);
    }, j = () => {
      if (!(!m || typeof m != "object")) return Object.keys(m);
    };
    return v.variantKeys = j(), v.extend = o, v.base = f, v.slots = x, v.variants = m, v.defaultVariants = p, v.compoundSlots = d, v.compoundVariants = N, v;
  };
  return { tv: t, createTV: (r) => (n, o) => t(n, o ? ho(r, o) : r) };
};
const qo = "-", O0 = (e) => {
  const t = A0(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(qo);
      return i[0] === "" && i.length !== 1 && i.shift(), wl(i, t) || I0(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const d = r[s] || [];
      return i && n[s] ? [...d, ...n[s]] : d;
    }
  };
}, wl = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? wl(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(qo);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}, is = /^\[(.+)\]$/, I0 = (e) => {
  if (is.test(e)) {
    const t = is.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, A0 = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in r)
    vo(r[o], n, o, t);
  return n;
}, vo = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : ls(t, o);
      a.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (_0(o)) {
        vo(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      vo(s, ls(t, a), r, n);
    });
  });
}, ls = (e, t) => {
  let r = e;
  return t.split(qo).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, _0 = (e) => e.isThemeGetter, R0 = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (a, s) => {
    r.set(a, s), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let s = r.get(a);
      if (s !== void 0)
        return s;
      if ((s = n.get(a)) !== void 0)
        return o(a, s), s;
    },
    set(a, s) {
      r.has(a) ? r.set(a, s) : o(a, s);
    }
  };
}, yo = "!", xo = ":", L0 = xo.length, M0 = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const a = [];
    let s = 0, i = 0, d = 0, u;
    for (let $ = 0; $ < o.length; $++) {
      let k = o[$];
      if (s === 0 && i === 0) {
        if (k === xo) {
          a.push(o.slice(d, $)), d = $ + L0;
          continue;
        }
        if (k === "/") {
          u = $;
          continue;
        }
      }
      k === "[" ? s++ : k === "]" ? s-- : k === "(" ? i++ : k === ")" && i--;
    }
    const c = a.length === 0 ? o : o.substring(d), f = F0(c), m = f !== c, p = u && u > d ? u - d : void 0;
    return {
      modifiers: a,
      hasImportantModifier: m,
      baseClassName: f,
      maybePostfixModifierPosition: p
    };
  };
  if (t) {
    const o = t + xo, a = n;
    n = (s) => s.startsWith(o) ? a(s.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: s,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const o = n;
    n = (a) => r({
      className: a,
      parseClassName: o
    });
  }
  return n;
}, F0 = (e) => e.endsWith(yo) ? e.substring(0, e.length - 1) : e.startsWith(yo) ? e.substring(1) : e, D0 = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const o = [];
    let a = [];
    return n.forEach((s) => {
      s[0] === "[" || t[s] ? (o.push(...a.sort(), s), a = []) : a.push(s);
    }), o.push(...a.sort()), o;
  };
}, z0 = (e) => ({
  cache: R0(e.cacheSize),
  parseClassName: M0(e),
  sortModifiers: D0(e),
  ...O0(e)
}), G0 = /\s+/, B0 = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, s = [], i = e.trim().split(G0);
  let d = "";
  for (let u = i.length - 1; u >= 0; u -= 1) {
    const c = i[u], {
      isExternal: f,
      modifiers: m,
      hasImportantModifier: p,
      baseClassName: $,
      maybePostfixModifierPosition: k
    } = r(c);
    if (f) {
      d = c + (d.length > 0 ? " " + d : d);
      continue;
    }
    let x = !!k, N = n(x ? $.substring(0, k) : $);
    if (!N) {
      if (!x) {
        d = c + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (N = n($), !N) {
        d = c + (d.length > 0 ? " " + d : d);
        continue;
      }
      x = !1;
    }
    const v = a(m).join(":"), j = p ? v + yo : v, T = j + N;
    if (s.includes(T))
      continue;
    s.push(T);
    const O = o(N, x);
    for (let I = 0; I < O.length; ++I) {
      const H = O[I];
      s.push(j + H);
    }
    d = c + (d.length > 0 ? " " + d : d);
  }
  return d;
};
function V0() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = kl(t)) && (n && (n += " "), n += r);
  return n;
}
const kl = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = kl(e[n])) && (r && (r += " "), r += t);
  return r;
};
function wo(e, ...t) {
  let r, n, o, a = s;
  function s(d) {
    const u = t.reduce((c, f) => f(c), e());
    return r = z0(u), n = r.cache.get, o = r.cache.set, a = i, i(d);
  }
  function i(d) {
    const u = n(d);
    if (u)
      return u;
    const c = B0(d, r);
    return o(d, c), c;
  }
  return function() {
    return a(V0.apply(null, arguments));
  };
}
const Be = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, El = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Nl = /^\((?:(\w[\w-]*):)?(.+)\)$/i, H0 = /^\d+\/\d+$/, U0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, K0 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, W0 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Y0 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, X0 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, or = (e) => H0.test(e), me = (e) => !!e && !Number.isNaN(Number(e)), Dt = (e) => !!e && Number.isInteger(Number(e)), Xn = (e) => e.endsWith("%") && me(e.slice(0, -1)), Pt = (e) => U0.test(e), Z0 = () => !0, q0 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  K0.test(e) && !W0.test(e)
), Pl = () => !1, J0 = (e) => Y0.test(e), Q0 = (e) => X0.test(e), ep = (e) => !J(e) && !Q(e), tp = (e) => vr(e, Sl, Pl), J = (e) => El.test(e), Kt = (e) => vr(e, jl, q0), Zn = (e) => vr(e, sp, me), ds = (e) => vr(e, Tl, Pl), rp = (e) => vr(e, Cl, Q0), Jr = (e) => vr(e, Ol, J0), Q = (e) => Nl.test(e), Pr = (e) => yr(e, jl), np = (e) => yr(e, ip), cs = (e) => yr(e, Tl), op = (e) => yr(e, Sl), ap = (e) => yr(e, Cl), Qr = (e) => yr(e, Ol, !0), vr = (e, t, r) => {
  const n = El.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, yr = (e, t, r = !1) => {
  const n = Nl.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, Tl = (e) => e === "position" || e === "percentage", Cl = (e) => e === "image" || e === "url", Sl = (e) => e === "length" || e === "size" || e === "bg-size", jl = (e) => e === "length", sp = (e) => e === "number", ip = (e) => e === "family-name", Ol = (e) => e === "shadow", ko = () => {
  const e = Be("color"), t = Be("font"), r = Be("text"), n = Be("font-weight"), o = Be("tracking"), a = Be("leading"), s = Be("breakpoint"), i = Be("container"), d = Be("spacing"), u = Be("radius"), c = Be("shadow"), f = Be("inset-shadow"), m = Be("text-shadow"), p = Be("drop-shadow"), $ = Be("blur"), k = Be("perspective"), x = Be("aspect"), N = Be("ease"), v = Be("animate"), j = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], T = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], O = () => [...T(), Q, J], I = () => ["auto", "hidden", "clip", "visible", "scroll"], H = () => ["auto", "contain", "none"], F = () => [Q, J, d], R = () => [or, "full", "auto", ...F()], D = () => [Dt, "none", "subgrid", Q, J], g = () => ["auto", {
    span: ["full", Dt, Q, J]
  }, Dt, Q, J], C = () => [Dt, "auto", Q, J], h = () => ["auto", "min", "max", "fr", Q, J], P = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], A = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], b = () => ["auto", ...F()], y = () => [or, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...F()], E = () => [e, Q, J], S = () => [...T(), cs, ds, {
    position: [Q, J]
  }], W = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], M = () => ["auto", "cover", "contain", op, tp, {
    size: [Q, J]
  }], B = () => [Xn, Pr, Kt], K = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    Q,
    J
  ], _ = () => ["", me, Pr, Kt], G = () => ["solid", "dashed", "dotted", "double"], X = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], L = () => [me, Xn, cs, ds], Y = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    $,
    Q,
    J
  ], ce = () => ["none", me, Q, J], be = () => ["none", me, Q, J], $e = () => [me, Q, J], Ee = () => [or, "full", ...F()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Pt],
      breakpoint: [Pt],
      color: [Z0],
      container: [Pt],
      "drop-shadow": [Pt],
      ease: ["in", "out", "in-out"],
      font: [ep],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Pt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Pt],
      shadow: [Pt],
      spacing: ["px", me],
      text: [Pt],
      "text-shadow": [Pt],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", or, J, Q, x]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [me, J, Q, i]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": j()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": j()
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
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
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
        object: O()
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
        overscroll: H()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": H()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": H()
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
        inset: R()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": R()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": R()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: R()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: R()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: R()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: R()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: R()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: R()
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
        z: [Dt, "auto", Q, J]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [or, "full", "auto", i, ...F()]
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
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [me, or, "auto", "initial", "none", J]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", me, Q, J]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", me, Q, J]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Dt, "first", "last", "none", Q, J]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": D()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: g()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": C()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": C()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": D()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: g()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": C()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": C()
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
        "auto-cols": h()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": h()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: F()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": F()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": F()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...P(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...A(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...A()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...P()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...A(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...A(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": P()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...A(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...A()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: F()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: F()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: F()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: F()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: F()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: F()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: F()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: F()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: F()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: b()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: b()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: b()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: b()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: b()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: b()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: b()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: b()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: b()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": F()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": F()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: y()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...y()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          i,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...y()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          i,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [s]
          },
          ...y()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...y()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...y()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...y()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Pr, Kt]
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
        font: [n, Q, Zn]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Xn, J]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [np, J, t]
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
        tracking: [o, Q, J]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [me, "none", Q, Zn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...F()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Q, J]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", Q, J]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: E()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: E()
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
        decoration: [...G(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [me, "from-font", "auto", Q, Kt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: E()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [me, "auto", Q, J]
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
        indent: F()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Q, J]
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
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
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
        content: ["none", Q, J]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
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
        bg: S()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: W()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: M()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Dt, Q, J],
          radial: ["", Q, J],
          conic: [Dt, Q, J]
        }, ap, rp]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: E()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: B()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: B()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: B()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: E()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: E()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: E()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: K()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": K()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": K()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": K()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": K()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": K()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": K()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": K()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": K()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": K()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": K()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": K()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": K()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": K()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": K()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: _()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": _()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": _()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": _()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": _()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": _()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": _()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": _()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": _()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": _()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": _()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...G(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...G(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: E()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": E()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": E()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": E()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": E()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": E()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": E()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": E()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": E()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: E()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...G(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [me, Q, J]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", me, Pr, Kt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: E()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          c,
          Qr,
          Jr
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: E()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, Qr, Jr]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": E()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: _()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: E()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [me, Kt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": E()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": _()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": E()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", m, Qr, Jr]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": E()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [me, Q, J]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...X(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": X()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [me]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": L()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": L()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": E()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": E()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": L()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": L()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": E()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": E()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": L()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": L()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": E()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": E()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": L()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": L()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": E()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": E()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": L()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": L()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": E()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": E()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": L()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": L()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": E()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": E()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": L()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": L()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": E()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": E()
      }],
      "mask-image-radial": [{
        "mask-radial": [Q, J]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": L()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": L()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": E()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": E()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": T()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [me]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": L()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": L()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": E()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": E()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: S()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: W()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: M()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", Q, J]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          Q,
          J
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Y()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [me, Q, J]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [me, Q, J]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          p,
          Qr,
          Jr
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": E()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", me, Q, J]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [me, Q, J]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", me, Q, J]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [me, Q, J]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", me, Q, J]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          Q,
          J
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Y()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [me, Q, J]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [me, Q, J]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", me, Q, J]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [me, Q, J]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", me, Q, J]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [me, Q, J]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [me, Q, J]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", me, Q, J]
      }],
      // --------------
      // --- Tables ---
      // --------------
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
        "border-spacing": F()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": F()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": F()
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
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Q, J]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [me, "initial", Q, J]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", N, Q, J]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [me, Q, J]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", v, Q, J]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [k, Q, J]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": O()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ce()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ce()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ce()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ce()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: be()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": be()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": be()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": be()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: $e()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": $e()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": $e()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [Q, J, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: O()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Ee()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Ee()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Ee()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Ee()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: E()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: E()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Q, J]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
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
        "scroll-m": F()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": F()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": F()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": F()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": F()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": F()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": F()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": F()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": F()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": F()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": F()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": F()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": F()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": F()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": F()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": F()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": F()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": F()
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
        "will-change": ["auto", "scroll", "contents", "transform", Q, J]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...E()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [me, Pr, Kt, Zn]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...E()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
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
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
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
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, lp = (e, {
  cacheSize: t,
  prefix: r,
  experimentalParseClassName: n,
  extend: o = {},
  override: a = {}
}) => (Ir(e, "cacheSize", t), Ir(e, "prefix", r), Ir(e, "experimentalParseClassName", n), en(e.theme, a.theme), en(e.classGroups, a.classGroups), en(e.conflictingClassGroups, a.conflictingClassGroups), en(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), Ir(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), tn(e.theme, o.theme), tn(e.classGroups, o.classGroups), tn(e.conflictingClassGroups, o.conflictingClassGroups), tn(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Il(e, o, "orderSensitiveModifiers"), e), Ir = (e, t, r) => {
  r !== void 0 && (e[t] = r);
}, en = (e, t) => {
  if (t)
    for (const r in t)
      Ir(e, r, t[r]);
}, tn = (e, t) => {
  if (t)
    for (const r in t)
      Il(e, t, r);
}, Il = (e, t, r) => {
  const n = t[r];
  n !== void 0 && (e[r] = e[r] ? e[r].concat(n) : n);
}, dp = (e, ...t) => typeof e == "function" ? wo(ko, e, ...t) : wo(() => lp(ko(), e), ...t), cp = /* @__PURE__ */ wo(ko);
var up = (e) => nt(e) ? cp : dp({ ...e, extend: { theme: e.theme, classGroups: e.classGroups, conflictingClassGroupModifiers: e.conflictingClassGroupModifiers, conflictingClassGroups: e.conflictingClassGroups, ...e.extend } }), fp = (...e) => (t) => {
  let r = mn(e);
  return !r || !t.twMerge ? r : ((!St.cachedTwMerge || St.didTwMergeConfigChange) && (St.didTwMergeConfigChange = !1, St.cachedTwMerge = up(St.cachedTwMergeConfig)), St.cachedTwMerge(r) || void 0);
}, { tv: pp } = j0(fp), jn = (e, t) => {
  var r, n, o;
  return pp(e, {
    ...t,
    twMerge: (r = void 0) != null ? r : !0,
    twMergeConfig: {
      theme: {
        ...(n = void 0) == null ? void 0 : n.theme,
        ...os.theme
      },
      classGroups: {
        ...(o = void 0) == null ? void 0 : o.classGroups,
        ...os.classGroups
      }
    }
  });
}, us = jn({
  slots: {
    base: "relative inline-flex flex-col gap-2 items-center justify-center",
    wrapper: "relative flex",
    label: "text-foreground dark:text-foreground-dark font-regular",
    circle1: "absolute w-full h-full rounded-full",
    circle2: "absolute w-full h-full rounded-full",
    dots: "relative rounded-full mx-auto",
    spinnerBars: [
      "absolute",
      "animate-fade-out",
      "rounded-full",
      "w-[25%]",
      "h-[8%]",
      "left-[calc(37.5%)]",
      "top-[calc(46%)]",
      "spinner-bar-animation"
    ]
  },
  variants: {
    size: {
      sm: {
        wrapper: "w-5 h-5",
        circle1: "border-2",
        circle2: "border-2",
        dots: "size-1",
        label: "text-small"
      },
      md: {
        wrapper: "w-8 h-8",
        circle1: "border-3",
        circle2: "border-3",
        dots: "size-1.5",
        label: "text-medium"
      },
      lg: {
        wrapper: "w-10 h-10",
        circle1: "border-3",
        circle2: "border-3",
        dots: "size-2",
        label: "text-large"
      }
    },
    color: {
      current: {
        circle1: "border-b-current",
        circle2: "border-b-current",
        dots: "bg-current",
        spinnerBars: "bg-current"
      },
      white: {
        circle1: "border-b-white",
        circle2: "border-b-white",
        dots: "bg-white",
        spinnerBars: "bg-white"
      },
      default: {
        circle1: "border-b-default",
        circle2: "border-b-default",
        dots: "bg-default",
        spinnerBars: "bg-default"
      },
      primary: {
        circle1: "border-b-primary",
        circle2: "border-b-primary",
        dots: "bg-primary",
        spinnerBars: "bg-primary"
      },
      secondary: {
        circle1: "border-b-secondary",
        circle2: "border-b-secondary",
        dots: "bg-secondary",
        spinnerBars: "bg-secondary"
      },
      success: {
        circle1: "border-b-success",
        circle2: "border-b-success",
        dots: "bg-success",
        spinnerBars: "bg-success"
      },
      warning: {
        circle1: "border-b-warning",
        circle2: "border-b-warning",
        dots: "bg-warning",
        spinnerBars: "bg-warning"
      },
      danger: {
        circle1: "border-b-danger",
        circle2: "border-b-danger",
        dots: "bg-danger",
        spinnerBars: "bg-danger"
      }
    },
    labelColor: {
      foreground: {
        label: "text-foreground"
      },
      primary: {
        label: "text-primary"
      },
      secondary: {
        label: "text-secondary"
      },
      success: {
        label: "text-success"
      },
      warning: {
        label: "text-warning"
      },
      danger: {
        label: "text-danger"
      }
    },
    variant: {
      default: {
        circle1: [
          "animate-spinner-ease-spin",
          "border-solid",
          "border-t-transparent",
          "border-l-transparent",
          "border-r-transparent"
        ],
        circle2: [
          "opacity-75",
          "animate-spinner-linear-spin",
          "border-dotted",
          "border-t-transparent",
          "border-l-transparent",
          "border-r-transparent"
        ]
      },
      gradient: {
        circle1: [
          "border-0",
          "bg-gradient-to-b",
          "from-transparent",
          "via-transparent",
          "to-primary",
          "animate-spinner-linear-spin",
          "[animation-duration:1s]",
          "[-webkit-mask:radial-gradient(closest-side,rgba(0,0,0,0.0)calc(100%-3px),rgba(0,0,0,1)calc(100%-3px))]"
        ],
        circle2: ["hidden"]
      },
      wave: {
        wrapper: "translate-y-3/4",
        dots: ["animate-sway", "spinner-dot-animation"]
      },
      dots: {
        wrapper: "translate-y-2/4",
        dots: ["animate-blink", "spinner-dot-blink-animation"]
      },
      spinner: {},
      simple: {
        wrapper: "text-foreground h-5 w-5 animate-spin",
        circle1: "opacity-25",
        circle2: "opacity-75"
      }
    }
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    labelColor: "foreground",
    variant: "default"
  },
  compoundVariants: [
    { variant: "gradient", color: "current", class: { circle1: "to-current" } },
    { variant: "gradient", color: "white", class: { circle1: "to-white" } },
    { variant: "gradient", color: "default", class: { circle1: "to-default" } },
    { variant: "gradient", color: "primary", class: { circle1: "to-primary" } },
    { variant: "gradient", color: "secondary", class: { circle1: "to-secondary" } },
    { variant: "gradient", color: "success", class: { circle1: "to-success" } },
    { variant: "gradient", color: "warning", class: { circle1: "to-warning" } },
    { variant: "gradient", color: "danger", class: { circle1: "to-danger" } },
    {
      variant: "wave",
      size: "sm",
      class: {
        wrapper: "w-5 h-5"
      }
    },
    {
      variant: "wave",
      size: "md",
      class: {
        wrapper: "w-8 h-8"
      }
    },
    {
      variant: "wave",
      size: "lg",
      class: {
        wrapper: "w-12 h-12"
      }
    },
    {
      variant: "dots",
      size: "sm",
      class: {
        wrapper: "w-5 h-5"
      }
    },
    {
      variant: "dots",
      size: "md",
      class: {
        wrapper: "w-8 h-8"
      }
    },
    {
      variant: "dots",
      size: "lg",
      class: {
        wrapper: "w-12 h-12"
      }
    },
    // Simple variants
    // Size
    {
      variant: "simple",
      size: "sm",
      class: {
        wrapper: "w-5 h-5"
      }
    },
    {
      variant: "simple",
      size: "md",
      class: {
        wrapper: "w-8 h-8"
      }
    },
    {
      variant: "simple",
      size: "lg",
      class: {
        wrapper: "w-12 h-12"
      }
    },
    // Color
    {
      variant: "simple",
      color: "current",
      class: {
        wrapper: "text-current"
      }
    },
    {
      variant: "simple",
      color: "white",
      class: {
        wrapper: "text-white"
      }
    },
    {
      variant: "simple",
      color: "default",
      class: {
        wrapper: "text-default"
      }
    },
    {
      variant: "simple",
      color: "primary",
      class: {
        wrapper: "text-primary"
      }
    },
    {
      variant: "simple",
      color: "secondary",
      class: {
        wrapper: "text-secondary"
      }
    },
    {
      variant: "simple",
      color: "success",
      class: {
        wrapper: "text-success"
      }
    },
    {
      variant: "simple",
      color: "warning",
      class: {
        wrapper: "text-warning"
      }
    },
    {
      variant: "simple",
      color: "danger",
      class: {
        wrapper: "text-danger"
      }
    }
  ]
}), Al = [
  "outline-solid outline-transparent",
  "data-[focus-visible=true]:z-10",
  "data-[focus-visible=true]:outline-2",
  "data-[focus-visible=true]:outline-focus",
  "data-[focus-visible=true]:outline-offset-2"
], ar = {
  default: ["[&+.border-medium.border-default]:ms-[calc(var(--heroui-border-width-medium)*-1)]"],
  primary: ["[&+.border-medium.border-primary]:ms-[calc(var(--heroui-border-width-medium)*-1)]"],
  secondary: [
    "[&+.border-medium.border-secondary]:ms-[calc(var(--heroui-border-width-medium)*-1)]"
  ],
  success: ["[&+.border-medium.border-success]:ms-[calc(var(--heroui-border-width-medium)*-1)]"],
  warning: ["[&+.border-medium.border-warning]:ms-[calc(var(--heroui-border-width-medium)*-1)]"],
  danger: ["[&+.border-medium.border-danger]:ms-[calc(var(--heroui-border-width-medium)*-1)]"]
}, bn = jn({
  slots: {
    base: [
      "z-0",
      "relative",
      "bg-transparent",
      "[transform-origin:var(--trigger-anchor-point)]",
      // arrow
      "before:content-['']",
      "before:hidden",
      "before:z-[-1]",
      "before:absolute",
      "before:rotate-45",
      "before:w-2.5",
      "before:h-2.5",
      "before:rounded-sm",
      // visibility
      "data-[arrow=true]:before:block",
      // top
      "data-[placement=top]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
      "data-[placement=top]:before:left-1/2",
      "data-[placement=top]:before:-translate-x-1/2",
      "data-[placement=top-start]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
      "data-[placement=top-start]:before:left-3",
      "data-[placement=top-end]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
      "data-[placement=top-end]:before:right-3",
      // bottom
      "data-[placement=bottom]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
      "data-[placement=bottom]:before:left-1/2",
      "data-[placement=bottom]:before:-translate-x-1/2",
      "data-[placement=bottom-start]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
      "data-[placement=bottom-start]:before:left-3",
      "data-[placement=bottom-end]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
      "data-[placement=bottom-end]:before:right-3",
      // left
      "data-[placement=left]:before:-right-[calc(theme(spacing.5)/4_-_2px)]",
      "data-[placement=left]:before:top-1/2",
      "data-[placement=left]:before:-translate-y-1/2",
      "data-[placement=left-start]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
      "data-[placement=left-start]:before:top-1/4",
      "data-[placement=left-end]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
      "data-[placement=left-end]:before:bottom-1/4",
      // right
      "data-[placement=right]:before:-left-[calc(theme(spacing.5)/4_-_2px)]",
      "data-[placement=right]:before:top-1/2",
      "data-[placement=right]:before:-translate-y-1/2",
      "data-[placement=right-start]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
      "data-[placement=right-start]:before:top-1/4",
      "data-[placement=right-end]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
      "data-[placement=right-end]:before:bottom-1/4",
      // focus ring
      ...Al
    ],
    content: [
      "z-10",
      "px-2.5",
      "py-1",
      "w-full",
      "inline-flex",
      "flex-col",
      "items-center",
      "justify-center",
      "box-border",
      "subpixel-antialiased",
      "outline-solid outline-transparent",
      "box-border"
    ],
    trigger: ["z-10"],
    backdrop: ["hidden"],
    arrow: []
  },
  variants: {
    size: {
      sm: { content: "text-tiny" },
      md: { content: "text-small" },
      lg: { content: "text-medium" }
    },
    color: {
      default: {
        base: "before:bg-content1 before:shadow-small",
        content: "bg-content1"
      },
      foreground: {
        base: "before:bg-foreground",
        content: ie.solid.foreground
      },
      primary: {
        base: "before:bg-primary",
        content: ie.solid.primary
      },
      secondary: {
        base: "before:bg-secondary",
        content: ie.solid.secondary
      },
      success: {
        base: "before:bg-success",
        content: ie.solid.success
      },
      warning: {
        base: "before:bg-warning",
        content: ie.solid.warning
      },
      danger: {
        base: "before:bg-danger",
        content: ie.solid.danger
      }
    },
    radius: {
      none: { content: "rounded-none" },
      sm: { content: "rounded-small" },
      md: { content: "rounded-medium" },
      lg: { content: "rounded-large" },
      full: { content: "rounded-full" }
    },
    shadow: {
      none: {
        content: "shadow-none"
      },
      sm: {
        content: "shadow-small"
      },
      md: {
        content: "shadow-medium"
      },
      lg: {
        content: "shadow-large"
      }
    },
    backdrop: {
      transparent: {},
      opaque: {
        backdrop: "bg-overlay/50 backdrop-opacity-disabled"
      },
      blur: {
        backdrop: "backdrop-blur-sm backdrop-saturate-150 bg-overlay/30"
      }
    },
    triggerScaleOnOpen: {
      true: {
        trigger: ["aria-expanded:scale-[0.97]", "aria-expanded:opacity-70", "subpixel-antialiased"]
      },
      false: {}
    },
    disableAnimation: {
      true: {
        base: "animate-none"
      }
    },
    isTriggerDisabled: {
      true: {
        trigger: "opacity-disabled pointer-events-none"
      },
      false: {}
    }
  },
  defaultVariants: {
    color: "default",
    radius: "lg",
    size: "md",
    shadow: "md",
    backdrop: "transparent",
    triggerScaleOnOpen: !0
  },
  compoundVariants: [
    // backdrop (opaque/blur)
    {
      backdrop: ["opaque", "blur"],
      class: {
        backdrop: "block w-full h-full fixed inset-0 -z-30"
      }
    }
  ]
}), gp = jn({
  base: [
    "z-0",
    "group",
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "box-border",
    "appearance-none",
    "outline-solid outline-transparent",
    "select-none",
    "whitespace-nowrap",
    "min-w-max",
    "font-normal",
    "subpixel-antialiased",
    "overflow-hidden",
    "tap-highlight-transparent",
    "transform-gpu data-[pressed=true]:scale-[0.97]",
    "cursor-pointer",
    // focus ring
    ...Al
  ],
  variants: {
    variant: {
      solid: "",
      bordered: "border-medium bg-transparent",
      light: "bg-transparent",
      flat: "",
      faded: "border-medium",
      shadow: "",
      ghost: "border-medium bg-transparent"
    },
    size: {
      sm: "px-3 min-w-16 h-8 text-tiny gap-2 rounded-small",
      md: "px-4 min-w-20 h-10 text-small gap-2 rounded-medium",
      lg: "px-6 min-w-24 h-12 text-medium gap-3 rounded-large"
    },
    color: {
      default: "",
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: ""
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-small",
      md: "rounded-medium",
      lg: "rounded-large",
      full: "rounded-full"
    },
    fullWidth: {
      true: "w-full"
    },
    isDisabled: {
      true: "opacity-disabled pointer-events-none"
    },
    isInGroup: {
      true: "[&:not(:first-child):not(:last-child)]:rounded-none"
    },
    isIconOnly: {
      true: "px-0 !gap-0",
      false: "[&>svg]:max-w-[theme(spacing.8)]"
    },
    disableAnimation: {
      true: "!transition-none data-[pressed=true]:scale-100",
      false: "transition-transform-colors-opacity motion-reduce:transition-none"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
    color: "default",
    fullWidth: !1,
    isDisabled: !1,
    isInGroup: !1
  },
  compoundVariants: [
    // solid / color
    {
      variant: "solid",
      color: "default",
      class: ie.solid.default
    },
    {
      variant: "solid",
      color: "primary",
      class: ie.solid.primary
    },
    {
      variant: "solid",
      color: "secondary",
      class: ie.solid.secondary
    },
    {
      variant: "solid",
      color: "success",
      class: ie.solid.success
    },
    {
      variant: "solid",
      color: "warning",
      class: ie.solid.warning
    },
    {
      variant: "solid",
      color: "danger",
      class: ie.solid.danger
    },
    // shadow / color
    {
      variant: "shadow",
      color: "default",
      class: ie.shadow.default
    },
    {
      variant: "shadow",
      color: "primary",
      class: ie.shadow.primary
    },
    {
      variant: "shadow",
      color: "secondary",
      class: ie.shadow.secondary
    },
    {
      variant: "shadow",
      color: "success",
      class: ie.shadow.success
    },
    {
      variant: "shadow",
      color: "warning",
      class: ie.shadow.warning
    },
    {
      variant: "shadow",
      color: "danger",
      class: ie.shadow.danger
    },
    // bordered / color
    {
      variant: "bordered",
      color: "default",
      class: ie.bordered.default
    },
    {
      variant: "bordered",
      color: "primary",
      class: ie.bordered.primary
    },
    {
      variant: "bordered",
      color: "secondary",
      class: ie.bordered.secondary
    },
    {
      variant: "bordered",
      color: "success",
      class: ie.bordered.success
    },
    {
      variant: "bordered",
      color: "warning",
      class: ie.bordered.warning
    },
    {
      variant: "bordered",
      color: "danger",
      class: ie.bordered.danger
    },
    // flat / color
    {
      variant: "flat",
      color: "default",
      class: ie.flat.default
    },
    {
      variant: "flat",
      color: "primary",
      class: ie.flat.primary
    },
    {
      variant: "flat",
      color: "secondary",
      class: ie.flat.secondary
    },
    {
      variant: "flat",
      color: "success",
      class: ie.flat.success
    },
    {
      variant: "flat",
      color: "warning",
      class: ie.flat.warning
    },
    {
      variant: "flat",
      color: "danger",
      class: ie.flat.danger
    },
    // faded / color
    {
      variant: "faded",
      color: "default",
      class: ie.faded.default
    },
    {
      variant: "faded",
      color: "primary",
      class: ie.faded.primary
    },
    {
      variant: "faded",
      color: "secondary",
      class: ie.faded.secondary
    },
    {
      variant: "faded",
      color: "success",
      class: ie.faded.success
    },
    {
      variant: "faded",
      color: "warning",
      class: ie.faded.warning
    },
    {
      variant: "faded",
      color: "danger",
      class: ie.faded.danger
    },
    // light / color
    {
      variant: "light",
      color: "default",
      class: [ie.light.default, "data-[hover=true]:bg-default/40"]
    },
    {
      variant: "light",
      color: "primary",
      class: [ie.light.primary, "data-[hover=true]:bg-primary/20"]
    },
    {
      variant: "light",
      color: "secondary",
      class: [ie.light.secondary, "data-[hover=true]:bg-secondary/20"]
    },
    {
      variant: "light",
      color: "success",
      class: [ie.light.success, "data-[hover=true]:bg-success/20"]
    },
    {
      variant: "light",
      color: "warning",
      class: [ie.light.warning, "data-[hover=true]:bg-warning/20"]
    },
    {
      variant: "light",
      color: "danger",
      class: [ie.light.danger, "data-[hover=true]:bg-danger/20"]
    },
    // ghost / color
    {
      variant: "ghost",
      color: "default",
      class: [ie.ghost.default, "data-[hover=true]:!bg-default"]
    },
    {
      variant: "ghost",
      color: "primary",
      class: [
        ie.ghost.primary,
        "data-[hover=true]:!bg-primary data-[hover=true]:!text-primary-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "secondary",
      class: [
        ie.ghost.secondary,
        "data-[hover=true]:!bg-secondary data-[hover=true]:!text-secondary-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "success",
      class: [
        ie.ghost.success,
        "data-[hover=true]:!bg-success data-[hover=true]:!text-success-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "warning",
      class: [
        ie.ghost.warning,
        "data-[hover=true]:!bg-warning data-[hover=true]:!text-warning-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "danger",
      class: [
        ie.ghost.danger,
        "data-[hover=true]:!bg-danger data-[hover=true]:!text-danger-foreground"
      ]
    },
    // isInGroup / radius / size <-- radius not provided
    {
      isInGroup: !0,
      class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
    },
    {
      isInGroup: !0,
      size: "sm",
      class: "rounded-none first:rounded-s-small last:rounded-e-small"
    },
    {
      isInGroup: !0,
      size: "md",
      class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
    },
    {
      isInGroup: !0,
      size: "lg",
      class: "rounded-none first:rounded-s-large last:rounded-e-large"
    },
    {
      isInGroup: !0,
      isRounded: !0,
      class: "rounded-none first:rounded-s-full last:rounded-e-full"
    },
    // isInGroup / radius <-- radius provided
    {
      isInGroup: !0,
      radius: "none",
      class: "rounded-none first:rounded-s-none last:rounded-e-none"
    },
    {
      isInGroup: !0,
      radius: "sm",
      class: "rounded-none first:rounded-s-small last:rounded-e-small"
    },
    {
      isInGroup: !0,
      radius: "md",
      class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
    },
    {
      isInGroup: !0,
      radius: "lg",
      class: "rounded-none first:rounded-s-large last:rounded-e-large"
    },
    {
      isInGroup: !0,
      radius: "full",
      class: "rounded-none first:rounded-s-full last:rounded-e-full"
    },
    // isInGroup / bordered / ghost
    {
      isInGroup: !0,
      variant: ["ghost", "bordered"],
      color: "default",
      className: ar.default
    },
    {
      isInGroup: !0,
      variant: ["ghost", "bordered"],
      color: "primary",
      className: ar.primary
    },
    {
      isInGroup: !0,
      variant: ["ghost", "bordered"],
      color: "secondary",
      className: ar.secondary
    },
    {
      isInGroup: !0,
      variant: ["ghost", "bordered"],
      color: "success",
      className: ar.success
    },
    {
      isInGroup: !0,
      variant: ["ghost", "bordered"],
      color: "warning",
      className: ar.warning
    },
    {
      isInGroup: !0,
      variant: ["ghost", "bordered"],
      color: "danger",
      className: ar.danger
    },
    {
      isIconOnly: !0,
      size: "sm",
      class: "min-w-8 w-8 h-8"
    },
    {
      isIconOnly: !0,
      size: "md",
      class: "min-w-10 w-10 h-10"
    },
    {
      isIconOnly: !0,
      size: "lg",
      class: "min-w-12 w-12 h-12"
    },
    // variant / hover
    {
      variant: ["solid", "faded", "flat", "bordered", "shadow"],
      class: "data-[hover=true]:opacity-hover"
    }
  ]
});
jn({
  base: "inline-flex items-center justify-center h-auto",
  variants: {
    fullWidth: {
      true: "w-full"
    }
  },
  defaultVariants: {
    fullWidth: !1
  }
});
var fs = {
  ease: [0.36, 0.66, 0.4, 1]
}, Eo = {
  scaleSpring: {
    enter: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.2
      }
    },
    exit: {
      transform: "scale(0.85)",
      opacity: 0,
      transition: {
        type: "easeOut",
        duration: 0.15
      }
    }
  },
  scaleSpringOpacity: {
    initial: {
      opacity: 0,
      transform: "scale(0.8)"
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      transform: "scale(0.96)",
      transition: {
        type: "easeOut",
        bounce: 0,
        duration: 0.15
      }
    }
  },
  fade: {
    enter: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: fs.ease
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: fs.ease
      }
    }
  }
};
function mp(e) {
  return _e(e);
}
var bp = (e, t, r = !0) => {
  if (!t)
    return [e, {}];
  const n = t.reduce((o, a) => a in e ? { ...o, [a]: e[a] } : o, {});
  return r ? [Object.keys(e).filter((a) => !t.includes(a)).reduce((a, s) => ({ ...a, [s]: e[s] }), {}), n] : [e, n];
}, _l = (e) => {
  const t = {
    top: {
      originY: 1
    },
    bottom: {
      originY: 0
    },
    left: {
      originX: 1
    },
    right: {
      originX: 0
    },
    "top-start": {
      originX: 0,
      originY: 1
    },
    "top-end": {
      originX: 1,
      originY: 1
    },
    "bottom-start": {
      originX: 0,
      originY: 0
    },
    "bottom-end": {
      originX: 1,
      originY: 0
    },
    "right-start": {
      originX: 0,
      originY: 0
    },
    "right-end": {
      originX: 0,
      originY: 1
    },
    "left-start": {
      originX: 1,
      originY: 0
    },
    "left-end": {
      originX: 1,
      originY: 1
    }
  };
  return (t == null ? void 0 : t[e]) || {};
}, Rl = (e) => ({
  top: "top",
  bottom: "bottom",
  left: "left",
  right: "right",
  "top-start": "top start",
  "top-end": "top end",
  "bottom-start": "bottom start",
  "bottom-end": "bottom end",
  "left-start": "left top",
  "left-end": "left bottom",
  "right-start": "right top",
  "right-end": "right bottom"
})[e], $p = (e, t) => {
  if (t.includes("-")) {
    const [r] = t.split("-");
    if (r.includes(e))
      return !1;
  }
  return !0;
}, $n = (e, t) => {
  if (t.includes("-")) {
    const [, r] = t.split("-");
    return `${e}-${r}`;
  }
  return e;
}, Tr = /* @__PURE__ */ new WeakMap(), ot = [];
function hp(e, t = document.body) {
  let r = new Set(e), n = /* @__PURE__ */ new Set(), o = (d) => {
    for (let m of d.querySelectorAll(
      "[data-live-announcer], [data-react-aria-top-layer]"
    ))
      r.add(m);
    let u = (m) => {
      if (r.has(m) || m.parentElement && n.has(m.parentElement) && m.parentElement.getAttribute("role") !== "row")
        return NodeFilter.FILTER_REJECT;
      for (let p of r)
        if (m.contains(p))
          return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }, c = document.createTreeWalker(d, NodeFilter.SHOW_ELEMENT, { acceptNode: u }), f = u(d);
    if (f === NodeFilter.FILTER_ACCEPT && a(d), f !== NodeFilter.FILTER_REJECT) {
      let m = c.nextNode();
      for (; m != null; )
        a(m), m = c.nextNode();
    }
  }, a = (d) => {
    var u;
    let c = (u = Tr.get(d)) != null ? u : 0;
    d.getAttribute("aria-hidden") === "true" && c === 0 || (c === 0 && d.setAttribute("aria-hidden", "true"), n.add(d), Tr.set(d, c + 1));
  };
  ot.length && ot[ot.length - 1].disconnect(), o(t);
  let s = new MutationObserver((d) => {
    for (let u of d)
      if (!(u.type !== "childList" || u.addedNodes.length === 0) && ![...r, ...n].some((c) => c.contains(u.target))) {
        for (let c of u.removedNodes)
          c instanceof Element && (r.delete(c), n.delete(c));
        for (let c of u.addedNodes)
          (c instanceof HTMLElement || c instanceof SVGElement) && (c.dataset.liveAnnouncer === "true" || c.dataset.reactAriaTopLayer === "true") ? r.add(c) : c instanceof Element && o(c);
      }
  });
  s.observe(t, { childList: !0, subtree: !0 });
  let i = {
    visibleNodes: r,
    hiddenNodes: n,
    observe() {
      s.observe(t, { childList: !0, subtree: !0 });
    },
    disconnect() {
      s.disconnect();
    }
  };
  return ot.push(i), () => {
    s.disconnect();
    for (let d of n) {
      let u = Tr.get(d);
      u != null && (u === 1 ? (d.removeAttribute("aria-hidden"), Tr.delete(d)) : Tr.set(d, u - 1));
    }
    i === ot[ot.length - 1] ? (ot.pop(), ot.length && ot[ot.length - 1].observe()) : ot.splice(ot.indexOf(i), 1);
  };
}
function vp(e) {
  let t = ot[ot.length - 1];
  if (t && !t.visibleNodes.has(e))
    return t.visibleNodes.add(e), () => {
      t.visibleNodes.delete(e);
    };
}
var Ll = globalThis != null && globalThis.document ? Ds : de, [Km, yp] = Ao({
  name: "ButtonGroupContext",
  strict: !1
});
function Ml(e, t) {
  let {
    elementType: r = "button",
    isDisabled: n,
    onPress: o,
    onPressStart: a,
    onPressEnd: s,
    onPressUp: i,
    onPressChange: d,
    // @ts-ignore - undocumented
    preventFocusOnPress: u,
    // @ts-ignore - undocumented
    allowFocusWhenDisabled: c,
    onClick: f,
    href: m,
    target: p,
    rel: $,
    type: k = "button",
    allowTextSelectionOnPress: x
  } = e, N;
  r === "button" ? N = {
    type: k,
    disabled: n
  } : N = {
    role: "button",
    href: r === "a" && !n ? m : void 0,
    target: r === "a" ? p : void 0,
    type: r === "input" ? k : void 0,
    disabled: r === "input" ? n : void 0,
    "aria-disabled": !n || r === "input" ? void 0 : n,
    rel: r === "a" ? $ : void 0
  };
  let { pressProps: v, isPressed: j } = Nf({
    onClick: f,
    onPressStart: a,
    onPressEnd: s,
    onPressUp: i,
    onPressChange: d,
    onPress: o,
    isDisabled: n,
    preventFocusOnPress: u,
    allowTextSelectionOnPress: x,
    ref: t
  }), { focusableProps: T } = Ii(e, t);
  c && (T.tabIndex = n ? -1 : T.tabIndex);
  let O = At(
    T,
    v,
    Ro(e, { labelable: !0 })
  );
  return {
    isPressed: j,
    // Used to indicate press state for visual
    buttonProps: At(N, O, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"]
    })
  };
}
var xp = () => import("./index-SfZMAM5z.mjs").then((e) => e.default), Fl = (e) => {
  const { ripples: t = [], motionProps: r, color: n = "currentColor", style: o, onClear: a } = e;
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: t.map((s) => {
    const i = Jc(0.01 * s.size, 0.2, s.size > 100 ? 0.75 : 0.5);
    return /* @__PURE__ */ l.jsx(an, { features: xp, children: /* @__PURE__ */ l.jsx(Oo, { mode: "popLayout", children: /* @__PURE__ */ l.jsx(
      sn.span,
      {
        animate: { transform: "scale(2)", opacity: 0 },
        className: "heroui-ripple",
        exit: { opacity: 0 },
        initial: { transform: "scale(0)", opacity: 0.35 },
        style: {
          position: "absolute",
          backgroundColor: n,
          borderRadius: "100%",
          transformOrigin: "center",
          pointerEvents: "none",
          overflow: "hidden",
          inset: 0,
          zIndex: 0,
          top: s.y,
          left: s.x,
          width: `${s.size}px`,
          height: `${s.size}px`,
          ...o
        },
        transition: { duration: i },
        onAnimationComplete: () => {
          a(s.key);
        },
        ...r
      }
    ) }) }, s.key);
  }) });
};
Fl.displayName = "HeroUI.Ripple";
var wp = Fl;
function kp(e = {}) {
  const [t, r] = ne([]), n = fe((a) => {
    const s = a.target, i = Math.max(s.clientWidth, s.clientHeight);
    r((d) => [
      ...d,
      {
        key: qc(d.length.toString()),
        size: i,
        x: a.x - i / 2,
        y: a.y - i / 2
      }
    ]);
  }, []), o = fe((a) => {
    r((s) => s.filter((i) => i.key !== a));
  }, []);
  return { ripples: t, onClear: o, onPress: n, ...e };
}
function Ep(e) {
  var t, r, n, o, a, s, i, d, u;
  const c = yp(), f = kn(), m = !!c, {
    ref: p,
    as: $,
    children: k,
    startContent: x,
    endContent: N,
    autoFocus: v,
    className: j,
    spinner: T,
    isLoading: O = !1,
    disableRipple: I = !1,
    fullWidth: H = (t = c == null ? void 0 : c.fullWidth) != null ? t : !1,
    radius: F = c == null ? void 0 : c.radius,
    size: R = (r = c == null ? void 0 : c.size) != null ? r : "md",
    color: D = (n = c == null ? void 0 : c.color) != null ? n : "default",
    variant: g = (o = c == null ? void 0 : c.variant) != null ? o : "solid",
    disableAnimation: C = (s = (a = c == null ? void 0 : c.disableAnimation) != null ? a : f == null ? void 0 : f.disableAnimation) != null ? s : !1,
    isDisabled: h = (i = c == null ? void 0 : c.isDisabled) != null ? i : !1,
    isIconOnly: P = (d = c == null ? void 0 : c.isIconOnly) != null ? d : !1,
    spinnerPlacement: A = "start",
    onPress: b,
    onClick: y,
    ...E
  } = e, S = $ || "button", W = typeof S == "string", M = si(p), B = (u = I || (f == null ? void 0 : f.disableRipple)) != null ? u : C, { isFocusVisible: K, isFocused: _, focusProps: G } = Ri({
    autoFocus: v
  }), X = h || O, L = Ae(
    () => gp({
      size: R,
      color: D,
      variant: g,
      radius: F,
      fullWidth: H,
      isDisabled: X,
      isInGroup: m,
      disableAnimation: C,
      isIconOnly: P,
      className: j
    }),
    [
      R,
      D,
      g,
      F,
      H,
      X,
      m,
      P,
      C,
      j
    ]
  ), { onPress: Y, onClear: ce, ripples: be } = kp(), $e = fe(
    (Ge) => {
      B || X || C || M.current && Y(Ge);
    },
    [B, X, C, M, Y]
  ), { buttonProps: Ee, isPressed: Ye } = Ml(
    {
      elementType: $,
      isDisabled: X,
      onPress: li(b, $e),
      onClick: y,
      ...E
    },
    M
  ), { isHovered: Oe, hoverProps: He } = Yo({ isDisabled: X }), Ce = fe(
    (Ge = {}) => ({
      "data-disabled": We(X),
      "data-focus": We(_),
      "data-pressed": We(Ye),
      "data-focus-visible": We(K),
      "data-hover": We(Oe),
      "data-loading": We(O),
      ...it(
        Ee,
        G,
        He,
        Na(E, {
          enabled: W
        }),
        Na(Ge)
      ),
      className: L
    }),
    [
      O,
      X,
      _,
      Ye,
      W,
      K,
      Oe,
      Ee,
      G,
      He,
      E,
      L
    ]
  ), Xe = (Ge) => lr(Ge) ? xn(Ge, {
    // @ts-ignore
    "aria-hidden": !0,
    focusable: !1
  }) : null, Re = Xe(x), lt = Xe(N), tt = Ae(() => ({
    sm: "sm",
    md: "sm",
    lg: "md"
  })[R], [R]), Qe = fe(
    () => ({ ripples: be, onClear: ce }),
    [be, ce]
  );
  return {
    Component: S,
    children: k,
    domRef: M,
    spinner: T,
    styles: L,
    startContent: Re,
    endContent: lt,
    isLoading: O,
    spinnerPlacement: A,
    spinnerSize: tt,
    disableRipple: B,
    getButtonProps: Ce,
    getRippleProps: Qe,
    isIconOnly: P
  };
}
function Np(e) {
  var t, r;
  const [n, o] = bp(e, us.variantKeys), a = kn(), s = (r = (t = e == null ? void 0 : e.variant) != null ? t : a == null ? void 0 : a.spinnerVariant) != null ? r : "default", { children: i, className: d, classNames: u, label: c, ...f } = n, m = Ae(() => us({ ...o }), [_o(o)]), p = Xt(u == null ? void 0 : u.base, d), $ = c || i, k = Ae(() => $ && typeof $ == "string" ? $ : f["aria-label"] ? "" : "Loading", [i, $, f["aria-label"]]), x = fe(
    () => ({
      "aria-label": k,
      className: m.base({
        class: p
      }),
      ...f
    }),
    [k, m, p, f]
  );
  return { label: $, slots: m, classNames: u, variant: s, getSpinnerProps: x };
}
var Dl = mp((e, t) => {
  const { slots: r, classNames: n, label: o, variant: a, getSpinnerProps: s } = Np({ ...e });
  return a === "wave" || a === "dots" ? /* @__PURE__ */ l.jsxs("div", { ref: t, ...s(), children: [
    /* @__PURE__ */ l.jsx("div", { className: r.wrapper({ class: n == null ? void 0 : n.wrapper }), children: [...new Array(3)].map((i, d) => /* @__PURE__ */ l.jsx(
      "i",
      {
        className: r.dots({ class: n == null ? void 0 : n.dots }),
        style: {
          "--dot-index": d
        }
      },
      `dot-${d}`
    )) }),
    o && /* @__PURE__ */ l.jsx("span", { className: r.label({ class: n == null ? void 0 : n.label }), children: o })
  ] }) : a === "simple" ? /* @__PURE__ */ l.jsxs("div", { ref: t, ...s(), children: [
    /* @__PURE__ */ l.jsxs(
      "svg",
      {
        className: r.wrapper({ class: n == null ? void 0 : n.wrapper }),
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
          /* @__PURE__ */ l.jsx(
            "circle",
            {
              className: r.circle1({ class: n == null ? void 0 : n.circle1 }),
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              strokeWidth: "4"
            }
          ),
          /* @__PURE__ */ l.jsx(
            "path",
            {
              className: r.circle2({ class: n == null ? void 0 : n.circle2 }),
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
              fill: "currentColor"
            }
          )
        ]
      }
    ),
    o && /* @__PURE__ */ l.jsx("span", { className: r.label({ class: n == null ? void 0 : n.label }), children: o })
  ] }) : a === "spinner" ? /* @__PURE__ */ l.jsxs("div", { ref: t, ...s(), children: [
    /* @__PURE__ */ l.jsx("div", { className: r.wrapper({ class: n == null ? void 0 : n.wrapper }), children: [...new Array(12)].map((i, d) => /* @__PURE__ */ l.jsx(
      "i",
      {
        className: r.spinnerBars({ class: n == null ? void 0 : n.spinnerBars }),
        style: {
          "--bar-index": d
        }
      },
      `star-${d}`
    )) }),
    o && /* @__PURE__ */ l.jsx("span", { className: r.label({ class: n == null ? void 0 : n.label }), children: o })
  ] }) : /* @__PURE__ */ l.jsxs("div", { ref: t, ...s(), children: [
    /* @__PURE__ */ l.jsxs("div", { className: r.wrapper({ class: n == null ? void 0 : n.wrapper }), children: [
      /* @__PURE__ */ l.jsx("i", { className: r.circle1({ class: n == null ? void 0 : n.circle1 }) }),
      /* @__PURE__ */ l.jsx("i", { className: r.circle2({ class: n == null ? void 0 : n.circle2 }) })
    ] }),
    o && /* @__PURE__ */ l.jsx("span", { className: r.label({ class: n == null ? void 0 : n.label }), children: o })
  ] });
});
Dl.displayName = "HeroUI.Spinner";
var Pp = Dl, zl = Zo((e, t) => {
  const {
    Component: r,
    domRef: n,
    children: o,
    spinnerSize: a,
    spinner: s = /* @__PURE__ */ l.jsx(Pp, { color: "current", size: a }),
    spinnerPlacement: i,
    startContent: d,
    endContent: u,
    isLoading: c,
    disableRipple: f,
    getButtonProps: m,
    getRippleProps: p,
    isIconOnly: $
  } = Ep({ ...e, ref: t });
  return /* @__PURE__ */ l.jsxs(r, { ref: n, ...m(), children: [
    d,
    c && i === "start" && s,
    c && $ ? null : o,
    c && i === "end" && s,
    u,
    !f && /* @__PURE__ */ l.jsx(wp, { ...p() })
  ] });
});
zl.displayName = "HeroUI.Button";
var Tp = zl;
function Gl(e) {
  let [t, r] = cf(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
  const n = fe(() => {
    r(!0);
  }, [
    r
  ]), o = fe(() => {
    r(!1);
  }, [
    r
  ]), a = fe(() => {
    r(!t);
  }, [
    r,
    t
  ]);
  return {
    isOpen: t,
    setOpen: r,
    open: n,
    close: o,
    toggle: a
  };
}
const Cp = 1500, ps = 500;
let Wt = {}, Sp = 0, Cr = !1, Tt = null, Yt = null;
function jp(e = {}) {
  let { delay: t = Cp, closeDelay: r = ps } = e, { isOpen: n, open: o, close: a } = Gl(e), s = Ae(() => `${++Sp}`, []), i = oe(null), d = oe(a), u = () => {
    Wt[s] = m;
  }, c = () => {
    for (let $ in Wt) $ !== s && (Wt[$](!0), delete Wt[$]);
  }, f = () => {
    i.current && clearTimeout(i.current), i.current = null, c(), u(), Cr = !0, o(), Tt && (clearTimeout(Tt), Tt = null), Yt && (clearTimeout(Yt), Yt = null);
  }, m = ($) => {
    $ || r <= 0 ? (i.current && clearTimeout(i.current), i.current = null, d.current()) : i.current || (i.current = setTimeout(() => {
      i.current = null, d.current();
    }, r)), Tt && (clearTimeout(Tt), Tt = null), Cr && (Yt && clearTimeout(Yt), Yt = setTimeout(() => {
      delete Wt[s], Yt = null, Cr = !1;
    }, Math.max(ps, r)));
  }, p = () => {
    c(), u(), !n && !Tt && !Cr ? Tt = setTimeout(() => {
      Tt = null, Cr = !0, f();
    }, t) : n || f();
  };
  return de(() => {
    d.current = a;
  }, [
    a
  ]), de(() => () => {
    i.current && clearTimeout(i.current), Wt[s] && delete Wt[s];
  }, [
    s
  ]), {
    isOpen: n,
    open: ($) => {
      !$ && t > 0 && !i.current ? p() : f();
    },
    close: m
  };
}
function Op(e, t) {
  let r = Ro(e, {
    labelable: !0
  }), { hoverProps: n } = Yo({
    onHoverStart: () => t == null ? void 0 : t.open(!0),
    onHoverEnd: () => t == null ? void 0 : t.close()
  });
  return {
    tooltipProps: At(r, n, {
      role: "tooltip"
    })
  };
}
function Ip(e, t, r) {
  let { isDisabled: n, trigger: o } = e, a = Pn(), s = oe(!1), i = oe(!1), d = () => {
    (s.current || i.current) && t.open(i.current);
  }, u = (N) => {
    !s.current && !i.current && t.close(N);
  };
  de(() => {
    let N = (v) => {
      r && r.current && v.key === "Escape" && (v.stopPropagation(), t.close(!0));
    };
    if (t.isOpen)
      return document.addEventListener("keydown", N, !0), () => {
        document.removeEventListener("keydown", N, !0);
      };
  }, [
    r,
    t
  ]);
  let c = () => {
    o !== "focus" && (Ko() === "pointer" ? s.current = !0 : s.current = !1, d());
  }, f = () => {
    o !== "focus" && (i.current = !1, s.current = !1, u());
  }, m = () => {
    i.current = !1, s.current = !1, u(!0);
  }, p = () => {
    Uo() && (i.current = !0, d());
  }, $ = () => {
    i.current = !1, s.current = !1, u(!0);
  }, { hoverProps: k } = Yo({
    isDisabled: n,
    onHoverStart: c,
    onHoverEnd: f
  }), { focusableProps: x } = Ii({
    isDisabled: n,
    onFocus: p,
    onBlur: $
  }, r);
  return {
    triggerProps: {
      "aria-describedby": t.isOpen ? a : void 0,
      ...At(x, k, {
        onPointerDown: m,
        onKeyDown: m
      }),
      tabIndex: void 0
    },
    tooltipProps: {
      id: a
    }
  };
}
var vt = [];
function Bl(e, t) {
  const {
    disableOutsideEvents: r = !0,
    isDismissable: n = !1,
    isKeyboardDismissDisabled: o = !1,
    isOpen: a,
    onClose: s,
    shouldCloseOnBlur: i,
    shouldCloseOnInteractOutside: d
  } = e;
  de(() => {
    if (a && !vt.includes(t))
      return vt.push(t), () => {
        let x = vt.indexOf(t);
        x >= 0 && vt.splice(x, 1);
      };
  }, [a, t]);
  const u = () => {
    vt[vt.length - 1] === t && s && s();
  }, c = (x) => {
    (!d || d(x.target)) && (vt[vt.length - 1] === t && r && (x.stopPropagation(), x.preventDefault()), k(t) !== "pressEnd" && u());
  }, f = (x) => {
    (!d || d(x.target)) && (vt[vt.length - 1] === t && r && (x.stopPropagation(), x.preventDefault()), u());
  }, m = (x) => {
    x.key === "Escape" && !o && !x.nativeEvent.isComposing && (x.stopPropagation(), x.preventDefault(), u());
  };
  Bf({
    isDisabled: !(n && a),
    onInteractOutside: n && a ? f : void 0,
    onInteractOutsideStart: c,
    ref: t
  });
  const { focusWithinProps: p } = Wo({
    isDisabled: !i,
    onBlurWithin: (x) => {
      !x.relatedTarget || Wf(x.relatedTarget) || (!d || d(x.relatedTarget)) && u();
    }
  }), $ = (x) => {
    x.target === x.currentTarget && x.preventDefault();
  };
  function k(x) {
    const N = x.current;
    if (!N) return "unknown";
    const v = (N.getAttribute("role") || "").toLowerCase(), j = N.getAttribute("aria-modal");
    return (v === "dialog" || v === "alertdialog") && (j === null || j.toLowerCase() === "true") ? "pressEnd" : ["listbox", "menu", "tree", "grid", "combobox"].includes(v) ? "pressStart" : "unknown";
  }
  return {
    overlayProps: {
      onKeyDown: m,
      ...p
    },
    underlayProps: {
      onPointerDown: $
    }
  };
}
function Ap(e) {
  var t, r;
  const n = kn(), [o, a] = vl(e, bn.variantKeys), {
    ref: s,
    as: i,
    isOpen: d,
    content: u,
    children: c,
    defaultOpen: f,
    onOpenChange: m,
    isDisabled: p,
    trigger: $,
    shouldFlip: k = !0,
    containerPadding: x = 12,
    placement: N = "top",
    delay: v = 0,
    closeDelay: j = 500,
    showArrow: T = !1,
    offset: O = 7,
    crossOffset: I = 0,
    isDismissable: H,
    shouldCloseOnBlur: F = !0,
    portalContainer: R,
    isKeyboardDismissDisabled: D = !1,
    updatePositionDeps: g = [],
    shouldCloseOnInteractOutside: C,
    className: h,
    onClose: P,
    motionProps: A,
    classNames: b,
    ...y
  } = o, E = i || "div", S = (r = (t = e == null ? void 0 : e.disableAnimation) != null ? t : n == null ? void 0 : n.disableAnimation) != null ? r : !1, W = jp({
    delay: v,
    closeDelay: j,
    isDisabled: p,
    defaultOpen: f,
    isOpen: d,
    onOpenChange: (Ce) => {
      m == null || m(Ce), Ce || P == null || P();
    }
  }), M = oe(null), B = oe(null), K = $d(), _ = W.isOpen && !p;
  yn(
    s,
    () => (
      // @ts-ignore
      Xc(B)
    )
  );
  const { triggerProps: G, tooltipProps: X } = Ip(
    {
      isDisabled: p,
      trigger: $
    },
    W,
    M
  ), { tooltipProps: L } = Op(
    {
      isOpen: _,
      ...it(o, X)
    },
    W
  ), {
    overlayProps: Y,
    placement: ce,
    updatePosition: be
  } = wi({
    isOpen: _,
    targetRef: M,
    placement: Rl(N),
    overlayRef: B,
    offset: T ? O + 3 : O,
    crossOffset: I,
    shouldFlip: k,
    containerPadding: x
  });
  Ll(() => {
    g.length && be();
  }, g);
  const { overlayProps: $e } = Bl(
    {
      isOpen: _,
      onClose: W.close,
      isDismissable: H,
      shouldCloseOnBlur: F,
      isKeyboardDismissDisabled: D,
      shouldCloseOnInteractOutside: C
    },
    B
  ), Ee = Ae(
    () => {
      var Ce, Xe, Re;
      return bn({
        ...a,
        disableAnimation: S,
        radius: (Ce = e == null ? void 0 : e.radius) != null ? Ce : "md",
        size: (Xe = e == null ? void 0 : e.size) != null ? Xe : "md",
        shadow: (Re = e == null ? void 0 : e.shadow) != null ? Re : "sm"
      });
    },
    [
      _o(a),
      S,
      e == null ? void 0 : e.radius,
      e == null ? void 0 : e.size,
      e == null ? void 0 : e.shadow
    ]
  ), Ye = fe(
    (Ce = {}, Xe = null) => ({
      ...it(G, Ce),
      ref: nu(Xe, M),
      "aria-describedby": _ ? K : void 0
    }),
    [G, _, K, W]
  ), Oe = fe(
    () => ({
      ref: B,
      "data-slot": "base",
      "data-open": We(_),
      "data-arrow": We(T),
      "data-disabled": We(p),
      "data-placement": $n(ce || "top", N),
      ...it(L, $e, y),
      style: it(Y.style, y.style, o.style),
      className: Ee.base({ class: b == null ? void 0 : b.base }),
      id: K
    }),
    [
      Ee,
      _,
      T,
      p,
      ce,
      N,
      L,
      $e,
      y,
      Y,
      o,
      K
    ]
  ), He = fe(
    () => ({
      "data-slot": "content",
      "data-open": We(_),
      "data-arrow": We(T),
      "data-disabled": We(p),
      "data-placement": $n(ce || "top", N),
      className: Ee.content({ class: Xt(b == null ? void 0 : b.content, h) })
    }),
    [Ee, _, T, p, ce, N, b]
  );
  return {
    Component: E,
    content: u,
    children: c,
    isOpen: _,
    triggerRef: M,
    showArrow: T,
    portalContainer: R,
    placement: N,
    disableAnimation: S,
    isDisabled: p,
    motionProps: A,
    getTooltipContentProps: He,
    getTriggerProps: Ye,
    getTooltipProps: Oe
  };
}
var _p = () => import("./index-SfZMAM5z.mjs").then((e) => e.default), Vl = Zo((e, t) => {
  var r;
  const {
    Component: n,
    children: o,
    content: a,
    isOpen: s,
    portalContainer: i,
    placement: d,
    disableAnimation: u,
    motionProps: c,
    getTriggerProps: f,
    getTooltipProps: m,
    getTooltipContentProps: p
  } = Ap({
    ...e,
    ref: t
  });
  let $;
  try {
    if (pr.count(o) !== 1) throw new Error();
    if (!lr(o))
      $ = /* @__PURE__ */ l.jsx("p", { ...f(), children: o });
    else {
      const O = o, I = (r = O.props.ref) != null ? r : O.ref;
      $ = xn(O, f(O.props, I));
    }
  } catch {
    $ = /* @__PURE__ */ l.jsx("span", {}), Qc("Tooltip must have only one child node. Please, check your code.");
  }
  const { ref: k, id: x, style: N, ...v } = m(), j = /* @__PURE__ */ l.jsx("div", { ref: k, id: x, style: N, children: /* @__PURE__ */ l.jsx(
    sn.div,
    {
      animate: "enter",
      exit: "exit",
      initial: "exit",
      variants: Eo.scaleSpring,
      ...it(c, v),
      style: {
        ..._l(d)
      },
      children: /* @__PURE__ */ l.jsx(n, { ...p(), children: a })
    },
    `${x}-tooltip-inner`
  ) }, `${x}-tooltip-content`);
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    $,
    u ? s && /* @__PURE__ */ l.jsx(ts, { portalContainer: i, children: /* @__PURE__ */ l.jsx("div", { ref: k, id: x, style: N, ...v, children: /* @__PURE__ */ l.jsx(n, { ...p(), children: a }) }) }) : /* @__PURE__ */ l.jsx(an, { features: _p, children: /* @__PURE__ */ l.jsx(Oo, { children: s && /* @__PURE__ */ l.jsx(ts, { portalContainer: i, children: j }) }) })
  ] });
});
Vl.displayName = "HeroUI.Tooltip";
var Rp = Vl;
function Lp(e, t) {
  const {
    groupRef: r,
    triggerRef: n,
    popoverRef: o,
    showArrow: a,
    offset: s = 7,
    crossOffset: i = 0,
    scrollRef: d,
    shouldFlip: u,
    boundaryElement: c,
    isDismissable: f = !0,
    shouldCloseOnBlur: m = !0,
    shouldCloseOnScroll: p = !0,
    placement: $ = "top",
    containerPadding: k,
    shouldCloseOnInteractOutside: x,
    isNonModal: N,
    isKeyboardDismissDisabled: v,
    updatePositionDeps: j = [],
    ...T
  } = e, O = N ?? !0, I = T.trigger === "SubmenuTrigger", { overlayProps: H, underlayProps: F } = Bl(
    {
      isOpen: t.isOpen,
      onClose: t.close,
      shouldCloseOnBlur: m,
      isDismissable: f || I,
      isKeyboardDismissDisabled: v,
      shouldCloseOnInteractOutside: x || ((P) => {
        var A;
        return !((A = n.current) != null && A.contains(P));
      }),
      disableOutsideEvents: !O
    },
    o
  ), {
    overlayProps: R,
    arrowProps: D,
    placement: g,
    updatePosition: C,
    triggerAnchorPoint: h
  } = wi({
    ...T,
    shouldFlip: u,
    crossOffset: i,
    targetRef: n,
    overlayRef: o,
    isOpen: t.isOpen,
    scrollRef: d,
    boundaryElement: c,
    containerPadding: k,
    placement: Rl($),
    offset: a ? s + 3 : s,
    onClose: O && !I && p ? t.close : () => {
    }
  });
  return Ll(() => {
    j.length && C();
  }, j), de(() => {
    var P, A;
    if (t.isOpen && o.current)
      return O ? vp((P = r == null ? void 0 : r.current) != null ? P : o.current) : hp([(A = r == null ? void 0 : r.current) != null ? A : o.current]);
  }, [O, t.isOpen, o, r]), {
    popoverProps: it(H, R),
    arrowProps: D,
    underlayProps: F,
    placement: g,
    triggerAnchorPoint: h
  };
}
var Mp = "top";
function Fp(e) {
  var t, r, n;
  const o = kn(), [a, s] = vl(e, bn.variantKeys), {
    as: i,
    ref: d,
    children: u,
    state: c,
    triggerRef: f,
    scrollRef: m,
    defaultOpen: p,
    onOpenChange: $,
    isOpen: k,
    isNonModal: x = !0,
    shouldFlip: N = !0,
    containerPadding: v = 12,
    shouldBlockScroll: j = !1,
    isDismissable: T = !0,
    shouldCloseOnBlur: O,
    portalContainer: I,
    updatePositionDeps: H,
    dialogProps: F,
    placement: R = Mp,
    triggerType: D = "dialog",
    showArrow: g = !1,
    offset: C = 7,
    crossOffset: h = 0,
    boundaryElement: P,
    isKeyboardDismissDisabled: A,
    shouldCloseOnInteractOutside: b,
    shouldCloseOnScroll: y,
    triggerAnchorPoint: E,
    motionProps: S,
    className: W,
    classNames: M,
    onClose: B,
    ...K
  } = a, _ = i || "div", G = si(d), X = oe(null), L = oe(!1), Y = f || X, ce = (r = (t = e.disableAnimation) != null ? t : o == null ? void 0 : o.disableAnimation) != null ? r : !1, be = Gl({
    isOpen: k,
    defaultOpen: p,
    onOpenChange: (V) => {
      $ == null || $(V), V || B == null || B();
    }
  }), $e = c || be, {
    popoverProps: Ee,
    underlayProps: Ye,
    placement: Oe
  } = Lp(
    {
      triggerRef: Y,
      isNonModal: x,
      popoverRef: G,
      placement: R,
      offset: C,
      scrollRef: m,
      isDismissable: T,
      shouldCloseOnBlur: O,
      boundaryElement: P,
      crossOffset: h,
      shouldFlip: N,
      containerPadding: v,
      updatePositionDeps: H,
      isKeyboardDismissDisabled: A,
      shouldCloseOnScroll: y,
      shouldCloseOnInteractOutside: b,
      triggerAnchorPoint: E
    },
    $e
  ), He = Ae(() => Oe ? $p(Oe, R) ? Oe : R : null, [Oe, R]), { triggerProps: Ce } = qf({ type: D }, $e, Y), { isFocusVisible: Xe, isFocused: Re, focusProps: lt } = Ri(), tt = Ae(
    () => bn({
      ...s
    }),
    [_o(s)]
  ), Qe = Xt(M == null ? void 0 : M.base, W), Ge = {
    "--trigger-anchor-point": E ? `${E.x}px ${E.y}px` : void 0
  };
  Qf({
    isDisabled: !(j && $e.isOpen)
  });
  const wt = (V = {}) => ({
    ref: G,
    ...it(Ee, K, V),
    style: it(Ee.style, K.style, V.style)
  }), kt = (V = {}) => ({
    // `ref` and `dialogProps` from `useDialog` are passed from props
    // if we use `useDialog` here, dialogRef won't be focused on mount
    "data-slot": "base",
    "data-open": We($e.isOpen),
    "data-focus": We(Re),
    "data-arrow": We(g),
    "data-focus-visible": We(Xe),
    "data-placement": Oe ? $n(Oe, R) : void 0,
    ...it(lt, F, V),
    className: tt.base({ class: Xt(Qe) }),
    style: {
      // this prevent the dialog to have a default outline
      outline: "none",
      ...Ge
    }
  }), ee = fe(
    (V = {}) => ({
      "data-slot": "content",
      "data-open": We($e.isOpen),
      "data-arrow": We(g),
      "data-placement": Oe ? $n(Oe, R) : void 0,
      className: tt.content({ class: Xt(M == null ? void 0 : M.content, V.className) })
    }),
    [tt, $e.isOpen, g, He, R, M, Oe]
  ), we = fe(
    (V) => {
      var re;
      let se;
      return V.pointerType === "touch" && ((e == null ? void 0 : e.backdrop) === "blur" || (e == null ? void 0 : e.backdrop) === "opaque") ? se = setTimeout(() => {
        L.current = !0;
      }, 100) : L.current = !0, (re = Ce.onPress) == null || re.call(Ce, V), () => {
        clearTimeout(se);
      };
    },
    [Ce == null ? void 0 : Ce.onPress]
  ), te = fe(
    (V = {}, re = null) => {
      const { isDisabled: se, ...ge } = V;
      return {
        "data-slot": "trigger",
        ...it({ "aria-haspopup": "dialog" }, Ce, ge),
        onPress: we,
        isDisabled: se,
        className: tt.trigger({
          class: Xt(M == null ? void 0 : M.trigger, V.className),
          // apply isDisabled class names to make the trigger child disabled
          // e.g. for elements like div or HeroUI elements that don't have `isDisabled` prop
          isTriggerDisabled: se
        }),
        ref: tu(re, Y)
      };
    },
    [$e, Ce, we, Y]
  ), Z = fe(
    (V = {}) => ({
      "data-slot": "backdrop",
      className: tt.backdrop({ class: M == null ? void 0 : M.backdrop }),
      onClick: (re) => {
        if (!L.current) {
          re.preventDefault();
          return;
        }
        $e.close(), L.current = !1;
      },
      ...Ye,
      ...V
    }),
    [tt, $e.isOpen, M, Ye]
  );
  return {
    state: $e,
    Component: _,
    children: u,
    classNames: M,
    showArrow: g,
    triggerRef: Y,
    placement: He,
    isNonModal: x,
    popoverRef: G,
    portalContainer: I,
    isOpen: $e.isOpen,
    onClose: $e.close,
    disableAnimation: ce,
    shouldBlockScroll: j,
    backdrop: (n = e.backdrop) != null ? n : "transparent",
    motionProps: S,
    getBackdropProps: Z,
    getPopoverProps: wt,
    getTriggerProps: te,
    getDialogProps: kt,
    getContentProps: ee
  };
}
function Dp(e, t) {
  let { role: r = "dialog" } = e, n = Mu();
  n = e["aria-label"] ? void 0 : n;
  let o = oe(!1);
  return de(() => {
    if (t.current && !t.current.contains(document.activeElement)) {
      fn(t.current);
      let a = setTimeout(() => {
        (document.activeElement === t.current || document.activeElement === document.body) && (o.current = !0, t.current && (t.current.blur(), fn(t.current)), o.current = !1);
      }, 500);
      return () => {
        clearTimeout(a);
      };
    }
  }, [
    t
  ]), f0(), {
    dialogProps: {
      ...Ro(e, {
        labelable: !0
      }),
      role: r,
      tabIndex: -1,
      "aria-labelledby": e["aria-labelledby"] || n,
      // Prevent blur events from reaching useOverlay, which may cause
      // popovers to close. Since focus is contained within the dialog,
      // we don't want this to occur due to the above useEffect.
      onBlur: (a) => {
        o.current && a.stopPropagation();
      }
    },
    titleProps: {
      id: n
    }
  };
}
var [zp, Hl] = Ao({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), gs = () => import("./index-SfZMAM5z.mjs").then((e) => e.default), Ul = (e) => {
  const { as: t, children: r, className: n, ...o } = e, {
    Component: a,
    placement: s,
    backdrop: i,
    motionProps: d,
    disableAnimation: u,
    getPopoverProps: c,
    getDialogProps: f,
    getBackdropProps: m,
    getContentProps: p,
    isNonModal: $,
    onClose: k
  } = Hl(), x = oe(null), { dialogProps: N, titleProps: v } = Dp({}, x), j = f({
    ref: x,
    ...N,
    ...o
  }), T = t || a || "div", O = r && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    !$ && /* @__PURE__ */ l.jsx(ns, { onDismiss: k }),
    /* @__PURE__ */ l.jsx(T, { ...j, children: /* @__PURE__ */ l.jsx("div", { ...p({ className: n }), children: typeof r == "function" ? r(v) : r }) }),
    /* @__PURE__ */ l.jsx(ns, { onDismiss: k })
  ] }), I = Ae(() => i === "transparent" ? null : u ? /* @__PURE__ */ l.jsx("div", { ...m() }) : /* @__PURE__ */ l.jsx(an, { features: gs, children: /* @__PURE__ */ l.jsx(
    sn.div,
    {
      animate: "enter",
      exit: "exit",
      initial: "exit",
      variants: Eo.fade,
      ...m()
    }
  ) }), [i, u, m]), H = s ? _l(s === "center" ? "top" : s) : void 0, F = /* @__PURE__ */ l.jsx(l.Fragment, { children: u ? O : /* @__PURE__ */ l.jsx(an, { features: gs, children: /* @__PURE__ */ l.jsx(
    sn.div,
    {
      animate: "enter",
      exit: "exit",
      initial: "initial",
      style: H,
      variants: Eo.scaleSpringOpacity,
      ...d,
      children: O
    }
  ) }) });
  return /* @__PURE__ */ l.jsxs("div", { ...c(), children: [
    I,
    F
  ] });
};
Ul.displayName = "HeroUI.PopoverContent";
var Gp = Ul, Kl = (e) => {
  var t;
  const { triggerRef: r, getTriggerProps: n } = Hl(), { children: o, ...a } = e, s = Ae(() => typeof o == "string" ? /* @__PURE__ */ l.jsx("p", { children: o }) : pr.only(o), [o]), i = (t = s.props.ref) != null ? t : s.ref, { onPress: d, isDisabled: u, ...c } = Ae(() => n(it(a, s.props), i), [n, s.props, a, i]), [, f] = ou(o, Tp), { buttonProps: m } = Ml({ onPress: d, isDisabled: u }, r), p = Ae(() => (f == null ? void 0 : f[0]) !== void 0, [f]);
  return p || delete c.preventFocusOnPress, xn(
    s,
    it(c, p ? { onPress: d, isDisabled: u } : m)
  );
};
Kl.displayName = "HeroUI.PopoverTrigger";
var Bp = Kl, Wl = Zo((e, t) => {
  const { children: r, ...n } = e, o = Fp({ ...n, ref: t }), [a, s] = pr.toArray(r), i = /* @__PURE__ */ l.jsx(u0, { portalContainer: o.portalContainer, children: s });
  return /* @__PURE__ */ l.jsxs(zp, { value: o, children: [
    a,
    o.disableAnimation && o.isOpen ? i : /* @__PURE__ */ l.jsx(Oo, { children: o.isOpen ? i : null })
  ] });
});
Wl.displayName = "HeroUI.Popover";
var Vp = Wl;
const Hp = Ve("border bg-popover text-popover-foreground", {
  variants: {
    variant: {
      default: "border-border shadow-sm",
      elevated: "border-border shadow-lg",
      outline: "border-border bg-transparent",
      ghost: "border-transparent bg-transparent"
    },
    color: {
      primary: "border-primary bg-primary text-primary-foreground",
      secondary: "border-secondary bg-secondary text-secondary-foreground",
      success: "border-success bg-success text-success-foreground",
      warning: "border-warning bg-warning text-warning-foreground",
      danger: "border-danger bg-danger text-danger-foreground",
      info: "border-blue-500 bg-blue-500 text-white",
      neutral: "border-gray-500 bg-gray-500 text-white",
      light: "border-gray-200 bg-white text-gray-900",
      custom: ""
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
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      full: "rounded-full"
    }
  },
  defaultVariants: {
    variant: "default",
    color: "light",
    shadow: "md",
    rounded: "lg"
  }
}), Wm = ({
  content: e,
  children: t,
  placement: r = "top",
  showArrow: n = !0,
  variant: o = "default",
  color: a = "light",
  customColor: s,
  rounded: i = "lg",
  shadow: d = "md",
  className: u,
  isOpen: c,
  onOpenChange: f,
  isDisabled: m = !1,
  delay: p,
  closeDelay: $ = 0,
  offset: k = 6,
  trigger: x = "hover",
  shouldCloseOnScroll: N = !0,
  portalContainer: v = typeof document < "u" ? document.body : void 0,
  zIndex: j = 50,
  contentZIndex: T
}) => {
  const O = () => {
    switch (a) {
      case "primary":
        return "primary";
      case "secondary":
        return "secondary";
      case "success":
        return "success";
      case "warning":
        return "warning";
      case "danger":
        return "danger";
      case "info":
      case "neutral":
      case "light":
      case "custom":
      default:
        return "default";
    }
  }, H = a === "custom" && s ? { backgroundColor: s, color: "#ffffff" } : {
    info: "bg-blue-500 text-white border-blue-500",
    neutral: "bg-gray-500 text-white border-gray-500",
    light: "bg-white text-gray-900 border-gray-200"
  }[a] || "", F = O(), R = T !== void 0 ? T : j, D = {
    content: e,
    placement: r,
    showArrow: n,
    color: F,
    radius: i,
    shadow: d,
    isOpen: c,
    onOpenChange: f,
    isDisabled: m,
    delay: p,
    closeDelay: $,
    offset: k,
    trigger: x,
    shouldCloseOnScroll: N,
    portalContainer: v,
    // container z-index to manage layering
    style: {
      zIndex: j
    }
  };
  return Object.keys(D).forEach((g) => {
    D[g] === void 0 && delete D[g];
  }), /* @__PURE__ */ l.jsx(
    Rp,
    {
      ...D,
      classNames: {
        content: z(
          Hp({ variant: o, color: a, shadow: d, rounded: i }),
          u,
          H,
          a === "custom" && s ? "border-0" : ""
        )
      },
      content: /* @__PURE__ */ l.jsx(
        "div",
        {
          style: {
            zIndex: R,
            ...a === "custom" && s ? { backgroundColor: s, color: "#ffffff" } : {}
          },
          children: e
        }
      ),
      children: t
    }
  );
}, Up = Ve(
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
), Kp = {
  sm: 24,
  md: 36,
  lg: 48
}, Wp = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  info: "bg-info"
}, Yp = {
  primary: "#007C99",
  // Tailwind primary
  secondary: "#CEEAE7",
  success: "#00B37D",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#0EA5E9"
}, Xp = ae.forwardRef(
  ({
    className: e,
    variant: t = "bar",
    color: r = "primary",
    size: n = "md",
    value: o = 0,
    isIndeterminate: a = !1,
    showValue: s = !1,
    label: i,
    rounded: d = "full",
    icon: u,
    ...c
  }, f) => {
    const m = Math.min(Math.max(o, 0), 100), p = Kp[n], $ = n === "sm" ? 2 : n === "md" ? 3 : 4, k = (p - $) / 2, x = 2 * Math.PI * k, N = x - m / 100 * x;
    let v = "";
    return t === "loading" ? v = "rounded-full" : d ? v = d === "none" ? "" : `rounded-${d}` : v = "rounded-md", t === "circular" ? /* @__PURE__ */ l.jsxs("div", { className: "inline-flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "relative", style: { width: p, height: p }, children: [
        /* @__PURE__ */ l.jsxs(
          "svg",
          {
            className: z(
              "transform -rotate-90",
              a ? "animate-spin" : ""
            ),
            width: p,
            height: p,
            children: [
              /* @__PURE__ */ l.jsx(
                "circle",
                {
                  strokeWidth: $,
                  stroke: "#e5e7eb",
                  fill: "transparent",
                  r: k,
                  cx: p / 2,
                  cy: p / 2
                }
              ),
              /* @__PURE__ */ l.jsx(
                "circle",
                {
                  className: z(
                    "transition-all duration-300 ease-in-out",
                    a ? "animate-dash" : ""
                  ),
                  strokeWidth: $,
                  strokeDasharray: x,
                  strokeDashoffset: a ? 0 : N,
                  strokeLinecap: "round",
                  stroke: Yp[r],
                  fill: "transparent",
                  r: k,
                  cx: p / 2,
                  cy: p / 2
                }
              )
            ]
          }
        ),
        u && /* @__PURE__ */ l.jsx("span", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ l.jsx(pe, { icon: u, size: p * 0.5 }) }),
        s && !a && !u && /* @__PURE__ */ l.jsxs("div", { className: "absolute inset-0 flex items-center justify-center text-xs font-medium", children: [
          Math.round(m),
          "%"
        ] })
      ] }),
      i && /* @__PURE__ */ l.jsx("span", { className: "text-sm text-neutral-600", children: i })
    ] }) : /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: f,
          className: z(Up({ variant: t === "loading" ? "bar" : t, size: n }), v, e),
          role: "progressbar",
          "aria-valuenow": a ? void 0 : m,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...c,
          children: /* @__PURE__ */ l.jsx(
            "div",
            {
              className: z(
                "h-full transition-all duration-300 ease-in-out",
                a ? "animate-progress-indeterminate" : "",
                Wp[r],
                v
              ),
              style: {
                width: a ? "100%" : `${m}%`
              }
            }
          )
        }
      ),
      (s || i) && /* @__PURE__ */ l.jsxs("div", { className: "flex justify-between text-xs text-neutral-600", children: [
        i && /* @__PURE__ */ l.jsx("span", { children: i }),
        s && !a && /* @__PURE__ */ l.jsxs("span", { children: [
          Math.round(m),
          "%"
        ] })
      ] })
    ] });
  }
);
Xp.displayName = "Progress";
const Ct = [
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
  { name: "Canada", code: "+1", iso: "ca", flag: "flagpack:ca" },
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
], Zp = { version: 4, country_calling_codes: { 1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], 7: ["RU", "KZ"], 20: ["EG"], 27: ["ZA"], 30: ["GR"], 31: ["NL"], 32: ["BE"], 33: ["FR"], 34: ["ES"], 36: ["HU"], 39: ["IT", "VA"], 40: ["RO"], 41: ["CH"], 43: ["AT"], 44: ["GB", "GG", "IM", "JE"], 45: ["DK"], 46: ["SE"], 47: ["NO", "SJ"], 48: ["PL"], 49: ["DE"], 51: ["PE"], 52: ["MX"], 53: ["CU"], 54: ["AR"], 55: ["BR"], 56: ["CL"], 57: ["CO"], 58: ["VE"], 60: ["MY"], 61: ["AU", "CC", "CX"], 62: ["ID"], 63: ["PH"], 64: ["NZ"], 65: ["SG"], 66: ["TH"], 81: ["JP"], 82: ["KR"], 84: ["VN"], 86: ["CN"], 90: ["TR"], 91: ["IN"], 92: ["PK"], 93: ["AF"], 94: ["LK"], 95: ["MM"], 98: ["IR"], 211: ["SS"], 212: ["MA", "EH"], 213: ["DZ"], 216: ["TN"], 218: ["LY"], 220: ["GM"], 221: ["SN"], 222: ["MR"], 223: ["ML"], 224: ["GN"], 225: ["CI"], 226: ["BF"], 227: ["NE"], 228: ["TG"], 229: ["BJ"], 230: ["MU"], 231: ["LR"], 232: ["SL"], 233: ["GH"], 234: ["NG"], 235: ["TD"], 236: ["CF"], 237: ["CM"], 238: ["CV"], 239: ["ST"], 240: ["GQ"], 241: ["GA"], 242: ["CG"], 243: ["CD"], 244: ["AO"], 245: ["GW"], 246: ["IO"], 247: ["AC"], 248: ["SC"], 249: ["SD"], 250: ["RW"], 251: ["ET"], 252: ["SO"], 253: ["DJ"], 254: ["KE"], 255: ["TZ"], 256: ["UG"], 257: ["BI"], 258: ["MZ"], 260: ["ZM"], 261: ["MG"], 262: ["RE", "YT"], 263: ["ZW"], 264: ["NA"], 265: ["MW"], 266: ["LS"], 267: ["BW"], 268: ["SZ"], 269: ["KM"], 290: ["SH", "TA"], 291: ["ER"], 297: ["AW"], 298: ["FO"], 299: ["GL"], 350: ["GI"], 351: ["PT"], 352: ["LU"], 353: ["IE"], 354: ["IS"], 355: ["AL"], 356: ["MT"], 357: ["CY"], 358: ["FI", "AX"], 359: ["BG"], 370: ["LT"], 371: ["LV"], 372: ["EE"], 373: ["MD"], 374: ["AM"], 375: ["BY"], 376: ["AD"], 377: ["MC"], 378: ["SM"], 380: ["UA"], 381: ["RS"], 382: ["ME"], 383: ["XK"], 385: ["HR"], 386: ["SI"], 387: ["BA"], 389: ["MK"], 420: ["CZ"], 421: ["SK"], 423: ["LI"], 500: ["FK"], 501: ["BZ"], 502: ["GT"], 503: ["SV"], 504: ["HN"], 505: ["NI"], 506: ["CR"], 507: ["PA"], 508: ["PM"], 509: ["HT"], 590: ["GP", "BL", "MF"], 591: ["BO"], 592: ["GY"], 593: ["EC"], 594: ["GF"], 595: ["PY"], 596: ["MQ"], 597: ["SR"], 598: ["UY"], 599: ["CW", "BQ"], 670: ["TL"], 672: ["NF"], 673: ["BN"], 674: ["NR"], 675: ["PG"], 676: ["TO"], 677: ["SB"], 678: ["VU"], 679: ["FJ"], 680: ["PW"], 681: ["WF"], 682: ["CK"], 683: ["NU"], 685: ["WS"], 686: ["KI"], 687: ["NC"], 688: ["TV"], 689: ["PF"], 690: ["TK"], 691: ["FM"], 692: ["MH"], 850: ["KP"], 852: ["HK"], 853: ["MO"], 855: ["KH"], 856: ["LA"], 880: ["BD"], 886: ["TW"], 960: ["MV"], 961: ["LB"], 962: ["JO"], 963: ["SY"], 964: ["IQ"], 965: ["KW"], 966: ["SA"], 967: ["YE"], 968: ["OM"], 970: ["PS"], 971: ["AE"], 972: ["IL"], 973: ["BH"], 974: ["QA"], 975: ["BT"], 976: ["MN"], 977: ["NP"], 992: ["TJ"], 993: ["TM"], 994: ["AZ"], 995: ["GE"], 996: ["KG"], 998: ["UZ"] }, countries: { AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]], AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"], AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"], AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"], AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]", "(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:2(?:(?:[0-26-9]\\d|3[0-8]|5[0135-9])\\d|4(?:[02-9]\\d|10))|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90))|7(?:[013-57-9]\\d|2[0-8])\\d)\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"], BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|2[23]"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], BF: ["226", "00", "(?:[025-7]\\d|44)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[024-7]"]]]], BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]], BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], BJ: ["229", "00", "(?:01\\d|[24-689])\\d{7}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["0"]]]], BL: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"], BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], BO: ["591", "00(?:1\\d)?", "8001\\d{5}|(?:[2-467]\\d|50)\\d{6}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[235]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37|86)", "300|4(?:0(?:0|20)|370|864)"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"], BT: ["975", "00", "[178]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-6]|7[246]|8[2-4]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|[78]"]]]], BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], CA: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|33|44|66|77|88)|6(?:22|33))[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CD: ["243", "00", "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["5"], "0$1"]], "0"], CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]], CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], CI: ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], CK: ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["60|809"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:10|[2-9])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-8]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]", "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"], CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["46"]], ["(\\d{3})(\\d{7})", "$1 $2", ["6|90"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|9[14]"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"], CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], CU: ["53", "119", "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|3[13])"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"], DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"], EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"], ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], ES: ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]], ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"], FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{5})", "$1", ["20[2-59]"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], ["(\\d)(\\d{4,9})", "$1 $2", ["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], FK: ["500", "00", "[2-7]\\d{4}", [5]], FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], FO: ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, "0|180020", 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-35])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"], GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], GF: ["594", "00", "(?:[56]94\\d|7093)\\d{5}|(?:80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"], GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0|180020", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"], GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], GM: ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], GP: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], GT: ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"], GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], GY: ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], HR: ["385", "00", "[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}", [7, 8, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], HT: ["509", "00", "[2-589]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], ID: ["62", "00[89]", "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0|180020", "1624$1", 0, "74576|(?:16|7[56])24"], IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], IT: ["39", "00", "0\\d{5,11}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[03]"]]], 0, 0, 0, 0, 0, 0, [["0(?:669[0-79]\\d{1,6}|831\\d{2,8})|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[2356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], ["3[2-8]\\d{9,10}", [11, 12]], 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0|180020", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], JP: ["81", "010", "00[1-9]\\d{6,14}|[25-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]", "3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[25-9]"], "0$1"]], "0", 0, "(000[2569]\\d{4,6})$|(?:(?:003768)0?)|0", "$1"], KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"], KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"], KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33622|7", 0, "8~10"], LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"], LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"], LK: ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], LR: ["231", "00", "(?:[2457]\\d|33|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]], "0"], LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1]], "0", 0, "[08]"], LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], LV: ["371", "00", "(?:[268]\\d|78|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2679]|8[01]"]]]], LY: ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-8]|5[0-5]|8[0-7]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]], MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"], MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], MF: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"], MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], ML: ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|452|678|86", "[12]|452|6788|86"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"], MQ: ["596", "00", "(?:596\\d|7091)\\d{5}|(?:69|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|8(?:0[6-9]|[36])"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"], MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"], MX: ["52", "0[09]", "[2-9]\\d{9}", [10], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], NE: ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[0467]"]]]], NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], NG: ["234", "009", "(?:20|9\\d)\\d{8}|[78]\\d{9,13}", [10, 11, 12, 13, 14], [["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], NR: ["674", "00", "(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[24-9]"]]]], NU: ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], PM: ["508", "00", "[45]\\d{5}|(?:708|8\\d\\d)\\d{6}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[136]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], RE: ["262", "00", "709\\d{6}|(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"], ["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], RO: ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, 0, [["336(?:[013-9]\\d|2[013-9])\\d{5}|(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15-7]|6[0-35-79]|7[1-37-9]))\\d{7}", [10]], ["9\\d{9}", [10]], ["8(?:0[04]|108\\d{3})\\d{7}"], ["80[39]\\d{7}", [10]], ["808\\d{7}", [10]]], "8~10"], RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], SA: ["966", "00", "(?:[15]\\d|800|92)\\d{7}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], SB: ["677", "0[01]", "[6-9]\\d{6}|[1-6]\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]]], SC: ["248", "010|0[0-2]", "(?:[2489]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"], SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|7[67]|9[2-9]"]]], "0"], SR: ["597", "00", "(?:[2-5]|[6-8]\\d|90)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-9]"]]]], SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], SV: ["503", "00", "[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"], SY: ["963", "00", "[1-359]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-4]|5[1-3]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[59]"], "0$1", 1]], "0"], SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"], TD: ["235", "00|16", "(?:22|30|[689]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[236-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], TJ: ["992", "810", "[0-57-9]\\d{8}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], TM: ["993", "810", "(?:[1-6]\\d|71)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"], TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"], US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["3052(?:0[0-8]|[1-9]\\d)\\d{4}|(?:2742|305[3-9])\\d{6}|(?:472|983)[2-47-9]\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[0135-79]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-269])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-247]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, 0, ["305209\\d{4}"]]], UY: ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|2\\d{3,4}|(?:[49]\\d|80)\\d{5}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{4,5})", "$1", ["21"]], ["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], UZ: ["998", "00", "(?:20|33|[5-9]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]]], VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11, 12], 0, 0, 0, 0, 0, 0, "06698"], VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"], VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"], VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"], VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], WF: ["681", "00", "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[47-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], XK: ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"], ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]], "0"], YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], YT: ["262", "00", "7093\\d{5}|(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"], ["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]], ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], ZM: ["260", "00", "800\\d{6}|(?:21|[579]\\d|63)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[579]"], "0$1"]], "0"], ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"] }, nonGeographic: { 800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], 808: ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], 870: ["870", 0, "7\\d{11}|[235-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"], 0, 0, 0, 0, 0, 0, ["2\\d{8}", [9]]]], 878: ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], 881: ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]], 882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, ["348[57]\\d{7}", [11]], 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], 883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], 888: ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], 979: ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };
function qp(e, t) {
  var r = Array.prototype.slice.call(t);
  return r.push(Zp), e.apply(this, r);
}
function ms(e, t) {
  e = e.split("-"), t = t.split("-");
  for (var r = e[0].split("."), n = t[0].split("."), o = 0; o < 3; o++) {
    var a = Number(r[o]), s = Number(n[o]);
    if (a > s) return 1;
    if (s > a) return -1;
    if (!isNaN(a) && isNaN(s)) return 1;
    if (isNaN(a) && !isNaN(s)) return -1;
  }
  return e[1] && t[1] ? e[1] > t[1] ? 1 : e[1] < t[1] ? -1 : 0 : !e[1] && t[1] ? 1 : e[1] && !t[1] ? -1 : 0;
}
var Jp = {}.constructor;
function fr(e) {
  return e != null && e.constructor === Jp;
}
function br(e) {
  "@babel/helpers - typeof";
  return br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, br(e);
}
function On(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Qp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, eg(n.key), n);
  }
}
function In(e, t, r) {
  return t && Qp(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function eg(e) {
  var t = tg(e, "string");
  return br(t) == "symbol" ? t : t + "";
}
function tg(e, t) {
  if (br(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (br(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var rg = "1.2.0", ng = "1.7.35", bs = " ext. ", og = /^\d+$/, Je = /* @__PURE__ */ function() {
  function e(t) {
    On(this, e), Yl(t), this.metadata = t, Xl.call(this, t);
  }
  return In(e, [{
    key: "getCountries",
    value: function() {
      return Object.keys(this.metadata.countries).filter(function(r) {
        return r !== "001";
      });
    }
  }, {
    key: "getCountryMetadata",
    value: function(r) {
      return this.metadata.countries[r];
    }
  }, {
    key: "nonGeographic",
    value: function() {
      if (!(this.v1 || this.v2 || this.v3))
        return this.metadata.nonGeographic || this.metadata.nonGeographical;
    }
  }, {
    key: "hasCountry",
    value: function(r) {
      return this.getCountryMetadata(r) !== void 0;
    }
  }, {
    key: "hasCallingCode",
    value: function(r) {
      if (this.getCountryCodesForCallingCode(r))
        return !0;
      if (this.nonGeographic()) {
        if (this.nonGeographic()[r])
          return !0;
      } else {
        var n = this.countryCallingCodes()[r];
        if (n && n.length === 1 && n[0] === "001")
          return !0;
      }
    }
  }, {
    key: "isNonGeographicCallingCode",
    value: function(r) {
      return this.nonGeographic() ? !!this.nonGeographic()[r] : !this.getCountryCodesForCallingCode(r);
    }
    // Deprecated.
  }, {
    key: "country",
    value: function(r) {
      return this.selectNumberingPlan(r);
    }
  }, {
    key: "selectNumberingPlan",
    value: function(r, n) {
      if (r && og.test(r) && (n = r, r = null), r && r !== "001") {
        if (!this.hasCountry(r))
          throw new Error("Unknown country: ".concat(r));
        this.numberingPlan = new $s(this.getCountryMetadata(r), this);
      } else if (n) {
        if (!this.hasCallingCode(n))
          throw new Error("Unknown calling code: ".concat(n));
        this.numberingPlan = new $s(this.getNumberingPlanMetadata(n), this);
      } else
        this.numberingPlan = void 0;
      return this;
    }
  }, {
    key: "getCountryCodesForCallingCode",
    value: function(r) {
      var n = this.countryCallingCodes()[r];
      if (n)
        return n.length === 1 && n[0].length === 3 ? void 0 : n;
    }
  }, {
    key: "getCountryCodeForCallingCode",
    value: function(r) {
      var n = this.getCountryCodesForCallingCode(r);
      if (n)
        return n[0];
    }
  }, {
    key: "getNumberingPlanMetadata",
    value: function(r) {
      var n = this.getCountryCodeForCallingCode(r);
      if (n)
        return this.getCountryMetadata(n);
      if (this.nonGeographic()) {
        var o = this.nonGeographic()[r];
        if (o)
          return o;
      } else {
        var a = this.countryCallingCodes()[r];
        if (a && a.length === 1 && a[0] === "001")
          return this.metadata.countries["001"];
      }
    }
    // Deprecated.
  }, {
    key: "countryCallingCode",
    value: function() {
      return this.numberingPlan.callingCode();
    }
    // Deprecated.
  }, {
    key: "IDDPrefix",
    value: function() {
      return this.numberingPlan.IDDPrefix();
    }
    // Deprecated.
  }, {
    key: "defaultIDDPrefix",
    value: function() {
      return this.numberingPlan.defaultIDDPrefix();
    }
    // Deprecated.
  }, {
    key: "nationalNumberPattern",
    value: function() {
      return this.numberingPlan.nationalNumberPattern();
    }
    // Deprecated.
  }, {
    key: "possibleLengths",
    value: function() {
      return this.numberingPlan.possibleLengths();
    }
    // Deprecated.
  }, {
    key: "formats",
    value: function() {
      return this.numberingPlan.formats();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixForParsing",
    value: function() {
      return this.numberingPlan.nationalPrefixForParsing();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixTransformRule",
    value: function() {
      return this.numberingPlan.nationalPrefixTransformRule();
    }
    // Deprecated.
  }, {
    key: "leadingDigits",
    value: function() {
      return this.numberingPlan.leadingDigits();
    }
    // Deprecated.
  }, {
    key: "hasTypes",
    value: function() {
      return this.numberingPlan.hasTypes();
    }
    // Deprecated.
  }, {
    key: "type",
    value: function(r) {
      return this.numberingPlan.type(r);
    }
    // Deprecated.
  }, {
    key: "ext",
    value: function() {
      return this.numberingPlan.ext();
    }
  }, {
    key: "countryCallingCodes",
    value: function() {
      return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes;
    }
    // Deprecated.
  }, {
    key: "chooseCountryByCountryCallingCode",
    value: function(r) {
      return this.selectNumberingPlan(r);
    }
  }, {
    key: "hasSelectedNumberingPlan",
    value: function() {
      return this.numberingPlan !== void 0;
    }
  }]);
}(), $s = /* @__PURE__ */ function() {
  function e(t, r) {
    On(this, e), this.globalMetadataObject = r, this.metadata = t, Xl.call(this, r.metadata);
  }
  return In(e, [{
    key: "callingCode",
    value: function() {
      return this.metadata[0];
    }
    // Formatting information for regions which share
    // a country calling code is contained by only one region
    // for performance reasons. For example, for NANPA region
    // ("North American Numbering Plan Administration",
    //  which includes USA, Canada, Cayman Islands, Bahamas, etc)
    // it will be contained in the metadata for `US`.
  }, {
    key: "getDefaultCountryMetadataForRegion",
    value: function() {
      return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
    }
    // Is always present.
  }, {
    key: "IDDPrefix",
    value: function() {
      if (!(this.v1 || this.v2))
        return this.metadata[1];
    }
    // Is only present when a country supports multiple IDD prefixes.
  }, {
    key: "defaultIDDPrefix",
    value: function() {
      if (!(this.v1 || this.v2))
        return this.metadata[12];
    }
  }, {
    key: "nationalNumberPattern",
    value: function() {
      return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2];
    }
    // "possible length" data is always present in Google's metadata.
  }, {
    key: "possibleLengths",
    value: function() {
      if (!this.v1)
        return this.metadata[this.v2 ? 2 : 3];
    }
  }, {
    key: "_getFormats",
    value: function(r) {
      return r[this.v1 ? 2 : this.v2 ? 3 : 4];
    }
    // For countries of the same region (e.g. NANPA)
    // formats are all stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "formats",
    value: function() {
      var r = this, n = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
      return n.map(function(o) {
        return new ag(o, r);
      });
    }
  }, {
    key: "nationalPrefix",
    value: function() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }
  }, {
    key: "_getNationalPrefixFormattingRule",
    value: function(r) {
      return r[this.v1 ? 4 : this.v2 ? 5 : 6];
    }
    // For countries of the same region (e.g. NANPA)
    // national prefix formatting rule is stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixFormattingRule",
    value: function() {
      return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "_nationalPrefixForParsing",
    value: function() {
      return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
    }
  }, {
    key: "nationalPrefixForParsing",
    value: function() {
      return this._nationalPrefixForParsing() || this.nationalPrefix();
    }
  }, {
    key: "nationalPrefixTransformRule",
    value: function() {
      return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
    }
  }, {
    key: "_getNationalPrefixIsOptionalWhenFormatting",
    value: function() {
      return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
    }
    // For countries of the same region (e.g. NANPA)
    // "national prefix is optional when formatting" flag is
    // stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function() {
      return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "leadingDigits",
    value: function() {
      return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
    }
  }, {
    key: "types",
    value: function() {
      return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
    }
  }, {
    key: "hasTypes",
    value: function() {
      return this.types() && this.types().length === 0 ? !1 : !!this.types();
    }
  }, {
    key: "type",
    value: function(r) {
      if (this.hasTypes() && hs(this.types(), r))
        return new ig(hs(this.types(), r), this);
    }
  }, {
    key: "ext",
    value: function() {
      return this.v1 || this.v2 ? bs : this.metadata[13] || bs;
    }
  }]);
}(), ag = /* @__PURE__ */ function() {
  function e(t, r) {
    On(this, e), this._format = t, this.metadata = r;
  }
  return In(e, [{
    key: "pattern",
    value: function() {
      return this._format[0];
    }
  }, {
    key: "format",
    value: function() {
      return this._format[1];
    }
  }, {
    key: "leadingDigitsPatterns",
    value: function() {
      return this._format[2] || [];
    }
  }, {
    key: "nationalPrefixFormattingRule",
    value: function() {
      return this._format[3] || this.metadata.nationalPrefixFormattingRule();
    }
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function() {
      return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
  }, {
    key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
    value: function() {
      return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
    // Checks whether national prefix formatting rule contains national prefix.
  }, {
    key: "usesNationalPrefix",
    value: function() {
      return !!(this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a "dummy" one.
      !sg.test(this.nationalPrefixFormattingRule()));
    }
  }, {
    key: "internationalFormat",
    value: function() {
      return this._format[5] || this.format();
    }
  }]);
}(), sg = /^\(?\$1\)?$/, ig = /* @__PURE__ */ function() {
  function e(t, r) {
    On(this, e), this.type = t, this.metadata = r;
  }
  return In(e, [{
    key: "pattern",
    value: function() {
      return this.metadata.v1 ? this.type : this.type[0];
    }
  }, {
    key: "possibleLengths",
    value: function() {
      if (!this.metadata.v1)
        return this.type[1] || this.metadata.possibleLengths();
    }
  }]);
}();
function hs(e, t) {
  switch (t) {
    case "FIXED_LINE":
      return e[0];
    case "MOBILE":
      return e[1];
    case "TOLL_FREE":
      return e[2];
    case "PREMIUM_RATE":
      return e[3];
    case "PERSONAL_NUMBER":
      return e[4];
    case "VOICEMAIL":
      return e[5];
    case "UAN":
      return e[6];
    case "PAGER":
      return e[7];
    case "VOIP":
      return e[8];
    case "SHARED_COST":
      return e[9];
  }
}
function Yl(e) {
  if (!e)
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  if (!fr(e) || !fr(e.countries))
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(fr(e) ? "an object of shape: { " + Object.keys(e).join(", ") + " }" : "a " + lg(e) + ": " + e, "."));
}
var lg = function(t) {
  return br(t);
};
function Jo(e, t) {
  if (t = new Je(t), t.hasCountry(e))
    return t.selectNumberingPlan(e).countryCallingCode();
  throw new Error("Unknown country: ".concat(e));
}
function dg(e, t) {
  return t.countries.hasOwnProperty(e);
}
function Xl(e) {
  var t = e.version;
  typeof t == "number" ? (this.v1 = t === 1, this.v2 = t === 2, this.v3 = t === 3, this.v4 = t === 4) : t ? ms(t, rg) === -1 ? this.v2 = !0 : ms(t, ng) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0;
}
function Qo(e, t, r) {
  return cg(e, t, void 0, r);
}
function cg(e, t, r, n) {
  t && (n = new Je(n.metadata), n.selectNumberingPlan(t));
  var o = n.type(r), a = o && o.possibleLengths() || n.possibleLengths();
  if (!a)
    return "IS_POSSIBLE";
  var s = e.length, i = a[0];
  return i === s ? "IS_POSSIBLE" : i > s ? "TOO_SHORT" : a[a.length - 1] < s ? "TOO_LONG" : a.indexOf(s, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
function ug(e, t, r) {
  if (t === void 0 && (t = {}), r = new Je(r), t.v2) {
    if (!e.countryCallingCode)
      throw new Error("Invalid phone number object passed");
    r.selectNumberingPlan(e.countryCallingCode);
  } else {
    if (!e.phone)
      return !1;
    if (e.country) {
      if (!r.hasCountry(e.country))
        throw new Error("Unknown country: ".concat(e.country));
      r.selectNumberingPlan(e.country);
    } else {
      if (!e.countryCallingCode)
        throw new Error("Invalid phone number object passed");
      r.selectNumberingPlan(e.countryCallingCode);
    }
  }
  if (r.possibleLengths())
    return Zl(e.phone || e.nationalNumber, e.country, r);
  if (e.countryCallingCode && r.isNonGeographicCallingCode(e.countryCallingCode))
    return !0;
  throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
}
function Zl(e, t, r) {
  switch (Qo(e, t, r)) {
    case "IS_POSSIBLE":
      return !0;
    default:
      return !1;
  }
}
function _t(e, t) {
  return e = e || "", new RegExp("^(?:" + t + ")$").test(e);
}
function fg(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = pg(e)) || t) {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pg(e, t) {
  if (e) {
    if (typeof e == "string") return vs(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? vs(e, t) : void 0;
  }
}
function vs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var gg = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function ea(e, t, r) {
  if (t = t || {}, !(!e.country && !e.countryCallingCode)) {
    r = new Je(r), r.selectNumberingPlan(e.country, e.countryCallingCode);
    var n = t.v2 ? e.nationalNumber : e.phone;
    if (_t(n, r.nationalNumberPattern())) {
      if (qn(n, "FIXED_LINE", r))
        return r.type("MOBILE") && r.type("MOBILE").pattern() === "" || !r.type("MOBILE") || qn(n, "MOBILE", r) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
      for (var o = fg(gg), a; !(a = o()).done; ) {
        var s = a.value;
        if (qn(n, s, r))
          return s;
      }
    }
  }
}
function qn(e, t, r) {
  return t = r.type(t), !t || !t.pattern() || t.possibleLengths() && t.possibleLengths().indexOf(e.length) < 0 ? !1 : _t(e, t.pattern());
}
function mg(e, t, r) {
  if (t = t || {}, r = new Je(r), r.selectNumberingPlan(e.country, e.countryCallingCode), r.hasTypes())
    return ea(e, t, r.metadata) !== void 0;
  var n = t.v2 ? e.nationalNumber : e.phone;
  return _t(n, r.nationalNumberPattern());
}
function bg(e, t, r) {
  var n = new Je(r), o = n.getCountryCodesForCallingCode(e);
  return o ? o.filter(function(a) {
    return $g(t, a, r);
  }) : [];
}
function $g(e, t, r) {
  var n = new Je(r);
  return n.selectNumberingPlan(t), n.numberingPlan.possibleLengths().indexOf(e.length) >= 0;
}
var ta = 2, hg = 17, vg = 3, bt = "0-9０-９٠-٩۰-۹", yg = "-‐-―−ー－", xg = "／/", wg = "．.", kg = "  ­​⁠　", Eg = "()（）［］\\[\\]", Ng = "~⁓∼～", hn = "".concat(yg).concat(xg).concat(wg).concat(kg).concat(Eg).concat(Ng), ra = "+＋", Pg = new RegExp("([" + bt + "])");
function Tg(e, t, r, n) {
  if (t) {
    var o = new Je(n);
    o.selectNumberingPlan(t, r);
    var a = new RegExp(o.IDDPrefix());
    if (e.search(a) === 0) {
      e = e.slice(e.match(a)[0].length);
      var s = e.match(Pg);
      if (!(s && s[1] != null && s[1].length > 0 && s[1] === "0"))
        return e;
    }
  }
}
function Cg(e, t) {
  if (e && t.numberingPlan.nationalPrefixForParsing()) {
    var r = new RegExp("^(?:" + t.numberingPlan.nationalPrefixForParsing() + ")"), n = r.exec(e);
    if (n) {
      var o, a, s = n.length - 1, i = s > 0 && n[s];
      if (t.nationalPrefixTransformRule() && i)
        o = e.replace(r, t.nationalPrefixTransformRule()), s > 1 && (a = n[1]);
      else {
        var d = n[0];
        o = e.slice(d.length), i && (a = n[1]);
      }
      var u;
      if (i) {
        var c = e.indexOf(n[1]), f = e.slice(0, c);
        f === t.numberingPlan.nationalPrefix() && (u = t.numberingPlan.nationalPrefix());
      } else
        u = n[0];
      return {
        nationalNumber: o,
        nationalPrefix: u,
        carrierCode: a
      };
    }
  }
  return {
    nationalNumber: e
  };
}
function Sg(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = jg(e)) || t) {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jg(e, t) {
  if (e) {
    if (typeof e == "string") return ys(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ys(e, t) : void 0;
  }
}
function ys(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Og(e, t) {
  var r = t.countries, n = t.metadata;
  n = new Je(n);
  for (var o = Sg(r), a; !(a = o()).done; ) {
    var s = a.value;
    if (n.selectNumberingPlan(s), n.leadingDigits()) {
      if (e && e.search(n.leadingDigits()) === 0)
        return s;
    } else if (ea({
      phone: e,
      country: s
    }, void 0, n.metadata))
      return s;
  }
}
function ql(e, t) {
  var r = t.nationalNumber, n = t.metadata, o = n.getCountryCodesForCallingCode(e);
  if (o)
    return o.length === 1 ? o[0] : Og(r, {
      countries: o,
      metadata: n.metadata
    });
}
function No(e, t, r) {
  var n = Cg(e, r), o = n.carrierCode, a = n.nationalNumber;
  if (a !== e) {
    if (!Ig(e, a, r))
      return {
        nationalNumber: e
      };
    if (r.numberingPlan.possibleLengths() && (t || (t = ql(r.numberingPlan.callingCode(), {
      nationalNumber: a,
      metadata: r
    })), !Ag(a, t, r)))
      return {
        nationalNumber: e
      };
  }
  return {
    nationalNumber: a,
    carrierCode: o
  };
}
function Ig(e, t, r) {
  return !(_t(e, r.nationalNumberPattern()) && !_t(t, r.nationalNumberPattern()));
}
function Ag(e, t, r) {
  switch (Qo(e, t, r)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return !1;
    default:
      return !0;
  }
}
function _g(e, t, r, n, o) {
  var a = r ? Jo(r, o) : n;
  if (e.indexOf(a) === 0) {
    o = new Je(o), o.selectNumberingPlan(r, a);
    var s = e.slice(a.length), i = No(s, t, o), d = i.nationalNumber, u = No(e, t, o), c = u.nationalNumber;
    if (!_t(c, o.nationalNumberPattern()) && _t(d, o.nationalNumberPattern()) || Qo(c, t, o) === "TOO_LONG")
      return {
        countryCallingCode: a,
        number: s
      };
  }
  return {
    number: e
  };
}
function Jl(e, t, r, n, o) {
  if (!e)
    return {};
  var a;
  if (e[0] !== "+") {
    var s = Tg(e, r, n, o);
    if (s && s !== e)
      a = !0, e = "+" + s;
    else {
      if (r || n) {
        var i = _g(e, t, r, n, o), d = i.countryCallingCode, u = i.number;
        if (d)
          return {
            countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
            countryCallingCode: d,
            number: u
          };
      }
      return {
        // No need to set it to `UNSPECIFIED`. It can be just `undefined`.
        // countryCallingCodeSource: 'UNSPECIFIED',
        number: e
      };
    }
  }
  if (e[1] === "0")
    return {};
  o = new Je(o);
  for (var c = 2; c - 1 <= vg && c <= e.length; ) {
    var f = e.slice(1, c);
    if (o.hasCallingCode(f))
      return o.selectNumberingPlan(f), {
        countryCallingCodeSource: a ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
        countryCallingCode: f,
        number: e.slice(c)
      };
    c++;
  }
  return {};
}
function Rg(e) {
  return e.replace(new RegExp("[".concat(hn, "]+"), "g"), " ").trim();
}
var Lg = /(\$\d)/;
function Mg(e, t, r) {
  var n = r.useInternationalFormat, o = r.withNationalPrefix, a = e.replace(new RegExp(t.pattern()), n ? t.internationalFormat() : (
    // This library doesn't use `domestic_carrier_code_formatting_rule`,
    // because that one is only used when formatting phone numbers
    // for dialing from a mobile phone, and this is not a dialing library.
    // carrierCode && format.domesticCarrierCodeFormattingRule()
    // 	// First, replace the $CC in the formatting rule with the desired carrier code.
    // 	// Then, replace the $FG in the formatting rule with the first group
    // 	// and the carrier code combined in the appropriate way.
    // 	? format.format().replace(FIRST_GROUP_PATTERN, format.domesticCarrierCodeFormattingRule().replace('$CC', carrierCode))
    // 	: (
    // 		withNationalPrefix && format.nationalPrefixFormattingRule()
    // 			? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule())
    // 			: format.format()
    // 	)
    o && t.nationalPrefixFormattingRule() ? t.format().replace(Lg, t.nationalPrefixFormattingRule()) : t.format()
  ));
  return n ? Rg(a) : a;
}
var Fg = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function Dg(e, t, r) {
  var n = new Je(r);
  if (n.selectNumberingPlan(e, t), n.defaultIDDPrefix())
    return n.defaultIDDPrefix();
  if (Fg.test(n.IDDPrefix()))
    return n.IDDPrefix();
}
var zg = ";ext=", sr = function(t) {
  return "([".concat(bt, "]{1,").concat(t, "})");
};
function Ql(e) {
  var t = "20", r = "15", n = "9", o = "6", a = "[  \\t,]*", s = "[:\\.．]?[  \\t,-]*", i = "#?", d = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)", u = "(?:[xｘ#＃~～]|int|ｉｎｔ)", c = "[- ]+", f = "[  \\t]*", m = "(?:,{2}|;)", p = zg + sr(t), $ = a + d + s + sr(t) + i, k = a + u + s + sr(n) + i, x = c + sr(o) + "#", N = f + m + s + sr(r) + i, v = f + "(?:,)+" + s + sr(n) + i;
  return p + "|" + $ + "|" + k + "|" + x + "|" + N + "|" + v;
}
var Gg = "[" + bt + "]{" + ta + "}", Bg = "[" + ra + "]{0,1}(?:[" + hn + "]*[" + bt + "]){3,}[" + hn + bt + "]*", Vg = new RegExp("^[" + ra + "]{0,1}(?:[" + hn + "]*[" + bt + "]){1,2}$", "i"), Hg = Bg + // Phone number extensions
"(?:" + Ql() + ")?", Ug = new RegExp(
  // Either a short two-digit-only phone number
  "^" + Gg + "$|^" + Hg + "$",
  "i"
);
function Kg(e) {
  return e.length >= ta && Ug.test(e);
}
function Wg(e) {
  return Vg.test(e);
}
function Yg(e) {
  var t = e.number, r = e.ext;
  if (!t)
    return "";
  if (t[0] !== "+")
    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  return "tel:".concat(t).concat(r ? ";ext=" + r : "");
}
var xs = {
  formatExtension: function(t, r, n) {
    return "".concat(t).concat(n.ext()).concat(r);
  }
};
function Xg(e, t, r, n) {
  if (r ? r = Jg({}, xs, r) : r = xs, n = new Je(n), e.country && e.country !== "001") {
    if (!n.hasCountry(e.country))
      throw new Error("Unknown country: ".concat(e.country));
    n.selectNumberingPlan(e.country);
  } else if (e.countryCallingCode)
    n.selectNumberingPlan(e.countryCallingCode);
  else return e.phone || "";
  var o = n.countryCallingCode(), a = r.v2 ? e.nationalNumber : e.phone, s;
  switch (t) {
    case "NATIONAL":
      return a ? (s = vn(a, e.carrierCode, "NATIONAL", n, r), Jn(s, e.ext, n, r.formatExtension)) : "";
    case "INTERNATIONAL":
      return a ? (s = vn(a, null, "INTERNATIONAL", n, r), s = "+".concat(o, " ").concat(s), Jn(s, e.ext, n, r.formatExtension)) : "+".concat(o);
    case "E.164":
      return "+".concat(o).concat(a);
    case "RFC3966":
      return Yg({
        number: "+".concat(o).concat(a),
        ext: e.ext
      });
    case "IDD":
      if (!r.fromCountry)
        return;
      var i = qg(a, e.carrierCode, o, r.fromCountry, n);
      return Jn(i, e.ext, n, r.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(t, '"'));
  }
}
function vn(e, t, r, n, o) {
  var a = Zg(n.formats(), e);
  return a ? Mg(e, a, {
    useInternationalFormat: r === "INTERNATIONAL",
    withNationalPrefix: !(a.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && o && o.nationalPrefix === !1)
  }) : e;
}
function Zg(e, t) {
  return Qg(e, function(r) {
    if (r.leadingDigitsPatterns().length > 0) {
      var n = r.leadingDigitsPatterns()[r.leadingDigitsPatterns().length - 1];
      if (t.search(n) !== 0)
        return !1;
    }
    return _t(t, r.pattern());
  });
}
function Jn(e, t, r, n) {
  return t ? n(e, t, r) : e;
}
function qg(e, t, r, n, o) {
  var a = Jo(n, o.metadata);
  if (a === r) {
    var s = vn(e, t, "NATIONAL", o);
    return r === "1" ? r + " " + s : s;
  }
  var i = Dg(n, void 0, o.metadata);
  if (i)
    return "".concat(i, " ").concat(r, " ").concat(vn(e, null, "INTERNATIONAL", o));
}
function Jg() {
  for (var e = 1, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  for (; e < r.length; ) {
    if (r[e])
      for (var o in r[e])
        r[0][o] = r[e][o];
    e++;
  }
  return r[0];
}
function Qg(e, t) {
  for (var r = 0; r < e.length; ) {
    if (t(e[r]))
      return e[r];
    r++;
  }
}
function Mr(e) {
  "@babel/helpers - typeof";
  return Mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mr(e);
}
function ws(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ks(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ws(Object(r), !0).forEach(function(n) {
      e1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ws(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function e1(e, t, r) {
  return (t = ed(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function t1(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function r1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ed(n.key), n);
  }
}
function n1(e, t, r) {
  return t && r1(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ed(e) {
  var t = o1(e, "string");
  return Mr(t) == "symbol" ? t : t + "";
}
function o1(e, t) {
  if (Mr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Mr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var a1 = /* @__PURE__ */ function() {
  function e(t, r, n) {
    if (t1(this, e), !t)
      throw new TypeError("First argument is required");
    if (typeof t != "string")
      throw new TypeError("First argument must be a string");
    if (t[0] === "+" && !r)
      throw new TypeError("`metadata` argument not passed");
    if (fr(r) && fr(r.countries)) {
      n = r;
      var o = t;
      if (!l1.test(o))
        throw new Error('Invalid `number` argument passed: must consist of a "+" followed by digits');
      var a = Jl(o, void 0, void 0, void 0, n), s = a.countryCallingCode, i = a.number;
      if (r = i, t = s, !r)
        throw new Error("Invalid `number` argument passed: too short");
    }
    if (!r)
      throw new TypeError("`nationalNumber` argument is required");
    if (typeof r != "string")
      throw new TypeError("`nationalNumber` argument must be a string");
    Yl(n);
    var d = i1(t, n), u = d.country, c = d.countryCallingCode;
    this.country = u, this.countryCallingCode = c, this.nationalNumber = r, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
      return n;
    };
  }
  return n1(e, [{
    key: "setExt",
    value: function(r) {
      this.ext = r;
    }
  }, {
    key: "getPossibleCountries",
    value: function() {
      return this.country ? [this.country] : bg(this.countryCallingCode, this.nationalNumber, this.getMetadata());
    }
  }, {
    key: "isPossible",
    value: function() {
      return ug(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isValid",
    value: function() {
      return mg(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isNonGeographic",
    value: function() {
      var r = new Je(this.getMetadata());
      return r.isNonGeographicCallingCode(this.countryCallingCode);
    }
  }, {
    key: "isEqual",
    value: function(r) {
      return this.number === r.number && this.ext === r.ext;
    }
    // This function was originally meant to be an equivalent for `validatePhoneNumberLength()`,
    // but later it was found out that it doesn't include the possible `TOO_SHORT` result
    // returned from `parsePhoneNumberWithError()` in the original `validatePhoneNumberLength()`,
    // so eventually I simply commented out this method from the `PhoneNumber` class
    // and just left the `validatePhoneNumberLength()` function, even though that one would require
    // and additional step to also validate the actual country / calling code of the phone number.
    // validateLength() {
    // 	const metadata = new Metadata(this.getMetadata())
    // 	metadata.selectNumberingPlan(this.countryCallingCode)
    // 	const result = checkNumberLength(this.nationalNumber, metadata)
    // 	if (result !== 'IS_POSSIBLE') {
    // 		return result
    // 	}
    // }
  }, {
    key: "getType",
    value: function() {
      return ea(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "format",
    value: function(r, n) {
      return Xg(this, r, n ? ks(ks({}, n), {}, {
        v2: !0
      }) : {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "formatNational",
    value: function(r) {
      return this.format("NATIONAL", r);
    }
  }, {
    key: "formatInternational",
    value: function(r) {
      return this.format("INTERNATIONAL", r);
    }
  }, {
    key: "getURI",
    value: function(r) {
      return this.format("RFC3966", r);
    }
  }]);
}(), s1 = function(t) {
  return /^[A-Z]{2}$/.test(t);
};
function i1(e, t) {
  var r, n, o = new Je(t);
  return s1(e) ? (r = e, o.selectNumberingPlan(r), n = o.countryCallingCode()) : n = e, {
    country: r,
    countryCallingCode: n
  };
}
var l1 = /^\+\d+$/;
function Po(e) {
  "@babel/helpers - typeof";
  return Po = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Po(e);
}
function d1(e, t, r) {
  return Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function c1(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function u1(e, t, r) {
  return t = Dr(t), f1(e, na() ? Reflect.construct(t, r || [], Dr(e).constructor) : t.apply(e, r));
}
function f1(e, t) {
  if (t && (Po(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return p1(e);
}
function p1(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function g1(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Fr(e, t);
}
function To(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return To = function(n) {
    if (n === null || !b1(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(n)) return t.get(n);
      t.set(n, o);
    }
    function o() {
      return m1(n, arguments, Dr(this).constructor);
    }
    return o.prototype = Object.create(n.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), Fr(o, n);
  }, To(e);
}
function m1(e, t, r) {
  if (na()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var o = new (e.bind.apply(e, n))();
  return r && Fr(o, r.prototype), o;
}
function na() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (na = function() {
    return !!e;
  })();
}
function b1(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Fr(e, t) {
  return Fr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Fr(e, t);
}
function Dr(e) {
  return Dr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Dr(e);
}
var jt = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return c1(this, t), n = u1(this, t, [r]), Object.setPrototypeOf(n, t.prototype), n.name = n.constructor.name, n;
  }
  return g1(t, e), d1(t);
}(/* @__PURE__ */ To(Error)), Es = new RegExp("(?:" + Ql() + ")$", "i");
function $1(e) {
  var t = e.search(Es);
  if (t < 0)
    return {};
  for (var r = e.slice(0, t), n = e.match(Es), o = 1; o < n.length; ) {
    if (n[o])
      return {
        number: r,
        ext: n[o]
      };
    o++;
  }
}
var h1 = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  "０": "0",
  // Fullwidth digit 0
  "１": "1",
  // Fullwidth digit 1
  "２": "2",
  // Fullwidth digit 2
  "３": "3",
  // Fullwidth digit 3
  "４": "4",
  // Fullwidth digit 4
  "５": "5",
  // Fullwidth digit 5
  "６": "6",
  // Fullwidth digit 6
  "７": "7",
  // Fullwidth digit 7
  "８": "8",
  // Fullwidth digit 8
  "９": "9",
  // Fullwidth digit 9
  "٠": "0",
  // Arabic-indic digit 0
  "١": "1",
  // Arabic-indic digit 1
  "٢": "2",
  // Arabic-indic digit 2
  "٣": "3",
  // Arabic-indic digit 3
  "٤": "4",
  // Arabic-indic digit 4
  "٥": "5",
  // Arabic-indic digit 5
  "٦": "6",
  // Arabic-indic digit 6
  "٧": "7",
  // Arabic-indic digit 7
  "٨": "8",
  // Arabic-indic digit 8
  "٩": "9",
  // Arabic-indic digit 9
  "۰": "0",
  // Eastern-Arabic digit 0
  "۱": "1",
  // Eastern-Arabic digit 1
  "۲": "2",
  // Eastern-Arabic digit 2
  "۳": "3",
  // Eastern-Arabic digit 3
  "۴": "4",
  // Eastern-Arabic digit 4
  "۵": "5",
  // Eastern-Arabic digit 5
  "۶": "6",
  // Eastern-Arabic digit 6
  "۷": "7",
  // Eastern-Arabic digit 7
  "۸": "8",
  // Eastern-Arabic digit 8
  "۹": "9"
  // Eastern-Arabic digit 9
};
function v1(e) {
  return h1[e];
}
function y1(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = x1(e)) || t) {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function x1(e, t) {
  if (e) {
    if (typeof e == "string") return Ns(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ns(e, t) : void 0;
  }
}
function Ns(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ps(e) {
  for (var t = "", r = y1(e.split("")), n; !(n = r()).done; ) {
    var o = n.value;
    t += w1(o, t) || "";
  }
  return t;
}
function w1(e, t, r) {
  return e === "+" ? t ? void 0 : "+" : v1(e);
}
var td = "+", k1 = "[\\-\\.\\(\\)]?", Ts = "([" + bt + "]|" + k1 + ")", E1 = "^\\" + td + Ts + "*[" + bt + "]" + Ts + "*$", N1 = new RegExp(E1, "g"), Co = bt, P1 = "[" + Co + "]+((\\-)*[" + Co + "])*", T1 = "a-zA-Z", C1 = "[" + T1 + "]+((\\-)*[" + Co + "])*", S1 = "^(" + P1 + "\\.)*" + C1 + "\\.?$", j1 = new RegExp(S1, "g"), Cs = "tel:", So = ";phone-context=", O1 = ";isub=";
function I1(e) {
  var t = e.indexOf(So);
  if (t < 0)
    return null;
  var r = t + So.length;
  if (r >= e.length)
    return "";
  var n = e.indexOf(";", r);
  return n >= 0 ? e.substring(r, n) : e.substring(r);
}
function A1(e) {
  return e === null ? !0 : e.length === 0 ? !1 : N1.test(e) || j1.test(e);
}
function _1(e, t) {
  var r = t.extractFormattedPhoneNumber, n = I1(e);
  if (!A1(n))
    throw new jt("NOT_A_NUMBER");
  var o;
  if (n === null)
    o = r(e) || "";
  else {
    o = "", n.charAt(0) === td && (o += n);
    var a = e.indexOf(Cs), s;
    a >= 0 ? s = a + Cs.length : s = 0;
    var i = e.indexOf(So);
    o += e.substring(s, i);
  }
  var d = o.indexOf(O1);
  if (d > 0 && (o = o.substring(0, d)), o !== "")
    return o;
}
var R1 = 250, L1 = new RegExp("[" + ra + bt + "]"), M1 = new RegExp("[^" + bt + "#]+$");
function F1(e, t, r) {
  if (t = t || {}, r = new Je(r), t.defaultCountry && !r.hasCountry(t.defaultCountry))
    throw t.v2 ? new jt("INVALID_COUNTRY") : new Error("Unknown country: ".concat(t.defaultCountry));
  var n = z1(e, t.v2, t.extract), o = n.number, a = n.ext, s = n.error;
  if (!o) {
    if (t.v2)
      throw s === "TOO_SHORT" ? new jt("TOO_SHORT") : new jt("NOT_A_NUMBER");
    return {};
  }
  var i = B1(o, t.defaultCountry, t.defaultCallingCode, r), d = i.country, u = i.nationalNumber, c = i.countryCallingCode, f = i.countryCallingCodeSource, m = i.carrierCode;
  if (!r.hasSelectedNumberingPlan()) {
    if (t.v2)
      throw new jt("INVALID_COUNTRY");
    return {};
  }
  if (!u || u.length < ta) {
    if (t.v2)
      throw new jt("TOO_SHORT");
    return {};
  }
  if (u.length > hg) {
    if (t.v2)
      throw new jt("TOO_LONG");
    return {};
  }
  if (t.v2) {
    var p = new a1(c, u, r.metadata);
    return d && (p.country = d), m && (p.carrierCode = m), a && (p.ext = a), p.__countryCallingCodeSource = f, p;
  }
  var $ = (t.extended ? r.hasSelectedNumberingPlan() : d) ? _t(u, r.nationalNumberPattern()) : !1;
  return t.extended ? {
    country: d,
    countryCallingCode: c,
    carrierCode: m,
    valid: $,
    possible: $ ? !0 : !!(t.extended === !0 && r.possibleLengths() && Zl(u, d, r)),
    phone: u,
    ext: a
  } : $ ? G1(d, u, a) : {};
}
function D1(e, t, r) {
  if (e) {
    if (e.length > R1) {
      if (r)
        throw new jt("TOO_LONG");
      return;
    }
    if (t === !1)
      return e;
    var n = e.search(L1);
    if (!(n < 0))
      return e.slice(n).replace(M1, "");
  }
}
function z1(e, t, r) {
  var n = _1(e, {
    extractFormattedPhoneNumber: function(s) {
      return D1(s, r, t);
    }
  });
  if (!n)
    return {};
  if (!Kg(n))
    return Wg(n) ? {
      error: "TOO_SHORT"
    } : {};
  var o = $1(n);
  return o.ext ? o : {
    number: n
  };
}
function G1(e, t, r) {
  var n = {
    country: e,
    phone: t
  };
  return r && (n.ext = r), n;
}
function B1(e, t, r, n) {
  var o = Jl(Ps(e), void 0, t, r, n.metadata), a = o.countryCallingCodeSource, s = o.countryCallingCode, i = o.number, d;
  if (s)
    n.selectNumberingPlan(s);
  else if (i && (t || r))
    n.selectNumberingPlan(t, r), t && (d = t), s = r || Jo(t, n.metadata);
  else return {};
  if (!i)
    return {
      countryCallingCodeSource: a,
      countryCallingCode: s
    };
  var u = No(Ps(i), d, n), c = u.nationalNumber, f = u.carrierCode, m = ql(s, {
    nationalNumber: c,
    metadata: n
  });
  return m && (d = m, m === "001" || n.selectNumberingPlan(d)), {
    country: d,
    countryCallingCode: s,
    countryCallingCodeSource: a,
    nationalNumber: c,
    carrierCode: f
  };
}
function zr(e) {
  "@babel/helpers - typeof";
  return zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zr(e);
}
function Ss(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function js(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ss(Object(r), !0).forEach(function(n) {
      V1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ss(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function V1(e, t, r) {
  return (t = H1(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function H1(e) {
  var t = U1(e, "string");
  return zr(t) == "symbol" ? t : t + "";
}
function U1(e, t) {
  if (zr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (zr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function K1(e, t, r) {
  return F1(e, js(js({}, t), {}, {
    v2: !0
  }), r);
}
function Gr(e) {
  "@babel/helpers - typeof";
  return Gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gr(e);
}
function Os(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function W1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Os(Object(r), !0).forEach(function(n) {
      Y1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Os(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Y1(e, t, r) {
  return (t = X1(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function X1(e) {
  var t = Z1(e, "string");
  return Gr(t) == "symbol" ? t : t + "";
}
function Z1(e, t) {
  if (Gr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Gr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function q1(e, t) {
  return tm(e) || em(e, t) || Q1(e, t) || J1();
}
function J1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Q1(e, t) {
  if (e) {
    if (typeof e == "string") return Is(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Is(e, t) : void 0;
  }
}
function Is(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function em(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, a, s, i = [], d = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(d = (n = a.call(r)).done) && (i.push(n.value), i.length !== t); d = !0) ;
    } catch (c) {
      u = !0, o = c;
    } finally {
      try {
        if (!d && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (u) throw o;
      }
    }
    return i;
  }
}
function tm(e) {
  if (Array.isArray(e)) return e;
}
function rm(e) {
  var t = Array.prototype.slice.call(e), r = q1(t, 4), n = r[0], o = r[1], a = r[2], s = r[3], i, d, u;
  if (typeof n == "string")
    i = n;
  else throw new TypeError("A text for parsing must be a string.");
  if (!o || typeof o == "string")
    s ? (d = a, u = s) : (d = void 0, u = a), o && (d = W1({
      defaultCountry: o
    }, d));
  else if (fr(o))
    a ? (d = o, u = a) : u = o;
  else throw new Error("Invalid second argument: ".concat(o));
  return {
    text: i,
    options: d,
    metadata: u
  };
}
function Br(e) {
  "@babel/helpers - typeof";
  return Br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Br(e);
}
function As(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? As(Object(r), !0).forEach(function(n) {
      nm(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : As(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nm(e, t, r) {
  return (t = om(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function om(e) {
  var t = am(e, "string");
  return Br(t) == "symbol" ? t : t + "";
}
function am(e, t) {
  if (Br(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Br(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function sm(e, t, r) {
  t && t.defaultCountry && !dg(t.defaultCountry, r) && (t = _s(_s({}, t), {}, {
    defaultCountry: void 0
  }));
  try {
    return K1(e, t, r);
  } catch (n) {
    if (!(n instanceof jt)) throw n;
  }
}
function im() {
  var e = rm(arguments), t = e.text, r = e.options, n = e.metadata;
  return sm(t, r, n);
}
function rd() {
  return qp(im, arguments);
}
function lm(e) {
  var o;
  const t = rd(e);
  if (!t) return null;
  const r = (o = t.country) == null ? void 0 : o.toLowerCase(), n = Ct.find((a) => a.iso === r);
  return n ? {
    ...n,
    formatted: t.formatInternational(),
    isValid: t.isValid()
  } : null;
}
function dm(e) {
  var n;
  const t = rd(e);
  if (!t) return null;
  const r = (n = t.country) == null ? void 0 : n.toLowerCase();
  return Ct.find((o) => o.iso === r) || null;
}
const cm = Ve(
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
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
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
      rounded: "xl",
      fullWidth: !0
    }
  }
), rn = (e) => {
  if (!e) return null;
  const t = e.startsWith("+") ? e : `+${e}`;
  return dm(t);
}, um = (e) => e.startsWith("0") && e.length >= 9 && e.length <= 12 ? "+62" + e.slice(1) : e, fm = (e) => e.startsWith("0") && e.length >= 3, nd = _e(
  ({
    className: e,
    variant: t = "default",
    size: r = "md",
    rounded: n = "xl",
    error: o = !1,
    errorText: a,
    helperText: s,
    label: i,
    required: d = !1,
    fullWidth: u = !1,
    value: c = "",
    onChange: f,
    disabled: m = !1,
    defaultCountry: p = "id",
    placeholder: $ = "Enter phone number",
    autoDetect: k = !0,
    ...x
  }, N) => {
    const [v, j] = ne(!1), [T, O] = ne(
      () => Ct.find((_) => _.iso === p) || Ct[0]
    ), [I, H] = ne(""), [F, R] = ne(() => {
      if (k && c) {
        const G = rn(c);
        return G && O(G), c;
      }
      const _ = T.code;
      return c.startsWith(_) ? c.slice(_.length) : c;
    });
    de(() => {
      if (c && f)
        if (k) {
          const _ = rn(c);
          if (_) {
            const G = {
              iso: _.iso,
              code: _.code.replace("+", "")
            };
            f(c, G);
          } else
            f(c);
        } else {
          const _ = {
            iso: T.iso,
            code: T.code.replace("+", "")
          };
          f(c, _);
        }
    }, []);
    const [D, g] = ne(() => k && c ? !!rn(c) : !1), C = oe(null), h = oe(null), P = ae.useId(), A = `${P}-helper`, b = `${P}-error`, y = Ct.filter(
      (_) => _.name.toLowerCase().includes(I.toLowerCase()) || _.code.includes(I)
    ), E = oe(null), S = () => {
      if (v && C.current && h.current) {
        const _ = C.current.getBoundingClientRect(), G = h.current, X = typeof window < "u" ? window : { innerHeight: 0 }, L = X.innerHeight - _.bottom, Y = _.top, be = _.bottom + (G.offsetHeight || 0) + 4 >= X.innerHeight, $e = Y > L, Ee = be && $e;
        G.style.position = "fixed", G.style.left = `${_.left}px`, G.style.minWidth = `${_.width}px`, G.style.maxWidth = "340px", G.style.width = "auto", Ee ? (G.style.bottom = `${X.innerHeight - _.top + 4}px`, G.style.top = "auto", G.style.maxHeight = `${Y - 8}px`) : (G.style.top = `${_.bottom + 4}px`, G.style.bottom = "auto", G.style.maxHeight = `${L - 8}px`);
      }
    };
    de(() => {
      const _ = typeof window < "u" ? window : void 0, G = () => {
        v && S();
      }, X = () => {
        v && S();
      };
      return v && (S(), _ == null || _.addEventListener("scroll", G, !0), _ == null || _.addEventListener("resize", X)), () => {
        _ == null || _.removeEventListener("scroll", G, !0), _ == null || _.removeEventListener("resize", X);
      };
    }, [v]), de(() => {
      if (!v) return;
      const _ = (G) => {
        const X = G.target;
        C.current && h.current && !C.current.contains(X) && !h.current.contains(X) && j(!1);
      };
      return document.addEventListener("click", _), () => document.removeEventListener("click", _);
    }, [v]);
    const W = (_) => {
      if (O(_), j(!1), H(""), k) {
        const G = _.code + F.replace(/^\+?\d*/, "");
        R(G);
        const X = G.replace(/[^\d]/g, ""), L = {
          iso: _.iso,
          code: _.code.replace("+", "")
        };
        f == null || f(X, L);
      } else {
        const X = (_.code + F).replace(/[^\d]/g, ""), L = {
          iso: _.iso,
          code: _.code.replace("+", "")
        };
        f == null || f(X, L);
      }
    }, M = (_) => {
      const G = _.target.value;
      if (/^[+\d]*$/.test(G))
        if (k && G.startsWith("+")) {
          const L = rn(G);
          if (L) {
            O(L), g(!0), R(G);
            const Y = G.replace(/[^\d]/g, ""), ce = {
              iso: L.iso,
              code: L.code.replace("+", "")
            };
            f == null || f(Y, ce);
          } else {
            R(G), g(!1);
            const Y = G.replace(/[^\d]/g, "");
            f == null || f(Y);
          }
        } else if (k && !G.startsWith("+") && G.length > 0) {
          const L = um(G);
          if (L !== G) {
            R(L), O(
              Ct.find((be) => be.iso === "id") || Ct[0]
            ), g(!0);
            const Y = L.replace(/[^\d]/g, ""), ce = {
              iso: "id",
              code: "62"
            };
            f == null || f(Y, ce);
          } else if (fm(G)) {
            const Y = "+62" + G.slice(1);
            R(Y), O(
              Ct.find(($e) => $e.iso === "id") || Ct[0]
            ), g(!0);
            const ce = Y.replace(/[^\d]/g, ""), be = {
              iso: "id",
              code: "62"
            };
            f == null || f(ce, be);
          } else if (G.startsWith("0"))
            R(G), g(!1);
          else {
            const Y = "+" + G;
            R(Y);
            const ce = Y.replace(/[^\d]/g, "");
            f == null || f(ce);
          }
        } else {
          const L = G.replace(/[^\d]/g, "");
          R(L);
          const ce = (T.code + L).replace(/[^\d]/g, ""), be = {
            iso: T.iso,
            code: T.code.replace("+", "")
          };
          f == null || f(ce, be);
        }
    }, B = z(
      cm({
        variant: o ? "error" : t,
        size: r,
        rounded: n,
        fullWidth: u
      }),
      "!w-full"
    ), K = !k || k && D;
    return yn(N, () => E.current, []), /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: E,
        className: z(u ? "w-full" : "inline-block", e),
        ...x,
        children: [
          i && /* @__PURE__ */ l.jsxs("label", { htmlFor: P, className: "mb-1.5 block text-sm text-neutral-900", children: [
            i,
            d && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: z("relative", !u && "inline-block"), children: [
            /* @__PURE__ */ l.jsxs("div", { className: "flex", children: [
              K && /* @__PURE__ */ l.jsxs(
                "button",
                {
                  type: "button",
                  ref: C,
                  onClick: () => !m && j(!v),
                  className: z(
                    B,
                    "flex items-center gap-2 rounded-r-none justify-between",
                    k ? "max-w-[60px]" : "max-w-[100px]",
                    m && "cursor-not-allowed opacity-50"
                  ),
                  children: [
                    /* @__PURE__ */ l.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ l.jsx(pe, { icon: T.flag, className: "w-5 h-5" }),
                      !k && /* @__PURE__ */ l.jsx("span", { className: "text-sm", children: T.code })
                    ] }),
                    /* @__PURE__ */ l.jsx(
                      pe,
                      {
                        icon: "mdi:chevron-down",
                        className: z("transition-transform", v && "rotate-180")
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ l.jsx(
                "input",
                {
                  type: "tel",
                  id: P,
                  value: F,
                  onChange: M,
                  disabled: m,
                  className: z(
                    B,
                    K ? "rounded-l-none" : `rounded-l-${n}`,
                    "flex-1 min-w-0 w-full"
                  ),
                  placeholder: k ? "e.g. +6281234567890" : $
                }
              )
            ] }),
            v && Qt(
              /* @__PURE__ */ l.jsxs(
                "div",
                {
                  ref: h,
                  className: "border border-neutral-200 bg-white shadow-lg overflow-y-auto rounded-md",
                  children: [
                    /* @__PURE__ */ l.jsx("div", { className: "p-2 border-b border-neutral-200", children: /* @__PURE__ */ l.jsx(
                      "input",
                      {
                        type: "text",
                        value: I,
                        onChange: (_) => {
                          const G = _.target.value;
                          /^[a-zA-Z0-9\s]*$/.test(G) && H(G);
                        },
                        placeholder: "Search countries...",
                        className: "w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:border-primary-300"
                      }
                    ) }),
                    /* @__PURE__ */ l.jsx("div", { className: "max-h-[300px] overflow-y-auto", children: y.map((_) => /* @__PURE__ */ l.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => W(_),
                        className: z(
                          "w-full px-3 py-2 text-sm text-left hover:bg-primary-50 cursor-pointer",
                          T.iso === _.iso && "bg-primary-50"
                        ),
                        children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ l.jsx(pe, { icon: _.flag, className: "w-5 h-5" }),
                          /* @__PURE__ */ l.jsx("span", { className: "text-sm font-medium", children: _.code }),
                          /* @__PURE__ */ l.jsx("span", { className: "text-sm text-neutral-600", children: _.name })
                        ] })
                      },
                      _.iso + _.code
                    )) })
                  ]
                }
              ),
              typeof document < "u" ? document.body : document
            )
          ] }),
          o && a && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger", id: b, children: a }),
          !o && s && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral", id: A, children: s })
        ]
      }
    );
  }
);
nd.displayName = "PhoneInput";
const Ym = () => {
  const [e, t] = ne(""), [r, n] = ne(null), o = (a) => {
    t(a);
    const s = lm(`+${a}`);
    n(s);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "p-6 max-w-md mx-auto", children: [
    /* @__PURE__ */ l.jsx("h2", { className: "text-xl font-semibold mb-4", children: "Phone Input with libphonenumber-js Integration" }),
    /* @__PURE__ */ l.jsx(
      nd,
      {
        label: "Phone Number",
        placeholder: "Enter phone number",
        value: e,
        onChange: o,
        autoDetect: !0,
        helperText: "Try typing: +12025551234 (US), +14165551234 (Canada), +18765551234 (Jamaica)"
      }
    ),
    r && /* @__PURE__ */ l.jsxs("div", { className: "mt-4 p-4 bg-gray-50 rounded-lg", children: [
      /* @__PURE__ */ l.jsx("h3", { className: "font-medium mb-2", children: "Detected Country Info:" }),
      /* @__PURE__ */ l.jsxs("div", { className: "space-y-1 text-sm", children: [
        /* @__PURE__ */ l.jsxs("p", { children: [
          /* @__PURE__ */ l.jsx("strong", { children: "Country:" }),
          " ",
          r.name
        ] }),
        /* @__PURE__ */ l.jsxs("p", { children: [
          /* @__PURE__ */ l.jsx("strong", { children: "ISO Code:" }),
          " ",
          r.iso
        ] }),
        /* @__PURE__ */ l.jsxs("p", { children: [
          /* @__PURE__ */ l.jsx("strong", { children: "Dial Code:" }),
          " ",
          r.code
        ] }),
        /* @__PURE__ */ l.jsxs("p", { children: [
          /* @__PURE__ */ l.jsx("strong", { children: "Formatted:" }),
          " ",
          r.formatted
        ] }),
        /* @__PURE__ */ l.jsxs("p", { children: [
          /* @__PURE__ */ l.jsx("strong", { children: "Valid:" }),
          " ",
          r.isValid ? "Yes" : "No"
        ] })
      ] })
    ] })
  ] });
}, pm = Ve("border bg-popover text-popover-foreground", {
  variants: {
    variant: {
      default: "border-border shadow-sm",
      elevated: "border-border shadow-lg",
      outline: "border-border bg-transparent",
      ghost: "border-transparent bg-transparent"
    },
    color: {
      primary: "border-primary bg-primary text-primary-foreground",
      secondary: "border-secondary bg-secondary text-secondary-foreground",
      success: "border-success bg-success text-success-foreground",
      warning: "border-warning bg-warning text-warning-foreground",
      danger: "border-danger bg-danger text-danger-foreground",
      info: "border-info bg-info text-info-foreground",
      neutral: "border-neutral bg-neutral text-neutral-foreground",
      light: "border-gray-200 bg-white text-gray-900",
      custom: ""
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
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      full: "rounded-full"
    }
  },
  defaultVariants: {
    variant: "default",
    color: "light",
    shadow: "md",
    rounded: "lg"
  }
}), Xm = ({
  content: e,
  children: t,
  placement: r = "bottom",
  showArrow: n = !1,
  variant: o = "default",
  color: a = "light",
  customColor: s,
  rounded: i = "lg",
  shadow: d = "md",
  className: u,
  isOpen: c,
  onOpenChange: f,
  backdrop: m = "transparent",
  disableAnimation: p = !1,
  offset: $ = 7,
  isDismissable: k = !0,
  shouldCloseOnScroll: x = !0,
  shouldCloseOnBlur: N = !1,
  shouldBlockScroll: v = !1,
  containerPadding: j = 12,
  crossOffset: T = 0,
  portalContainer: O = typeof document < "u" ? document.body : void 0,
  triggerType: I = "dialog",
  shouldFlip: H = !0,
  triggerScaleOnOpen: F = !0,
  zIndex: R = 50,
  // Default z-index for popover
  contentZIndex: D
  // Specific z-index for content, falls back to zIndex
}) => {
  const g = () => {
    switch (a) {
      case "primary":
        return "primary";
      case "secondary":
        return "secondary";
      case "success":
        return "success";
      case "warning":
        return "warning";
      case "danger":
        return "danger";
      case "info":
      case "neutral":
        return "default";
      case "light":
        return "default";
      case "custom":
        return "default";
      default:
        return "default";
    }
  }, C = () => a === "custom" && s ? { backgroundColor: s, color: "#ffffff" } : {
    info: "bg-blue-500 text-white border-blue-500",
    neutral: "bg-gray-500 text-white border-gray-500",
    light: "bg-white text-gray-900 border-gray-200"
  }[a] || "", h = () => {
    switch (m) {
      case "blur":
        return "blur";
      case "dark":
        return "opaque";
      case "transparent":
      default:
        return "transparent";
    }
  }, P = C(), A = g(), b = h(), y = D !== void 0 ? D : R, E = {
    placement: r,
    showArrow: n,
    color: A,
    radius: i,
    shadow: d,
    isOpen: c,
    onOpenChange: f,
    backdrop: b,
    disableAnimation: p,
    offset: $,
    isDismissable: k,
    shouldCloseOnScroll: x,
    shouldCloseOnBlur: N,
    shouldBlockScroll: v,
    containerPadding: j,
    crossOffset: T,
    portalContainer: O,
    triggerType: I,
    shouldFlip: H,
    triggerScaleOnOpen: F,
    // Ensure proper positioning
    isKeyboardDismissDisabled: !1,
    // Apply z-index to the popover container
    style: {
      zIndex: R
    }
  };
  return Object.keys(E).forEach((S) => {
    E[S] === void 0 && delete E[S];
  }), /* @__PURE__ */ l.jsxs(Vp, { ...E, children: [
    /* @__PURE__ */ l.jsx(Bp, { children: t }),
    /* @__PURE__ */ l.jsx(
      Gp,
      {
        className: z(
          pm({ variant: o, color: a, shadow: d, rounded: i }),
          u,
          P,
          // Apply custom color styles when needed
          a === "custom" && s ? "border-0" : ""
        ),
        style: {
          ...a === "custom" && s ? { backgroundColor: s, color: "#ffffff" } : {},
          // Apply z-index to content container
          zIndex: y
        },
        children: e
      }
    )
  ] });
}, gm = Ve("flex items-center text-sm", {
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
}), mm = _e(
  ({
    className: e,
    variant: t = "default",
    size: r = "md",
    items: n,
    separator: o = /* @__PURE__ */ l.jsx(pe, { icon: "mdi:slash-forward", className: "h-4 w-4 flex-shrink-0" }),
    activeLastItem: a = !0,
    ...s
  }, i) => /* @__PURE__ */ l.jsx(
    "nav",
    {
      ref: i,
      className: z(gm({ variant: t, size: r }), e),
      "aria-label": "Breadcrumb",
      ...s,
      children: /* @__PURE__ */ l.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: n.map((d, u) => {
        const c = u === n.length - 1, f = c && a;
        return /* @__PURE__ */ l.jsxs(
          "li",
          {
            className: z(
              "flex items-center gap-1.5",
              f && "text-primary font-medium"
            ),
            children: [
              d.icon && /* @__PURE__ */ l.jsx(
                pe,
                {
                  icon: d.icon,
                  className: z(
                    "flex-shrink-0",
                    r === "sm" && "h-3.5 w-3.5",
                    r === "md" && "h-4 w-4",
                    r === "lg" && "h-5 w-5"
                  )
                }
              ),
              d.href && !f ? /* @__PURE__ */ l.jsx(
                "a",
                {
                  href: d.href,
                  className: z(
                    "transition-colors duration-200",
                    "hover:text-primary hover:underline focus:outline-none",
                    "focus-visible:text-primary focus-visible:underline",
                    "active:text-primary-600"
                  ),
                  children: /* @__PURE__ */ l.jsx("span", { className: "truncate max-w-[200px] inline-block align-bottom", children: d.label })
                }
              ) : /* @__PURE__ */ l.jsx("span", { className: z(
                "truncate max-w-[200px] inline-block",
                f && "text-primary"
              ), children: d.label }),
              !c && /* @__PURE__ */ l.jsx("span", { className: z(
                "text-neutral-400 flex-shrink-0",
                r === "sm" && "scale-90",
                r === "lg" && "scale-110"
              ), children: o })
            ]
          },
          d.label
        );
      }) })
    }
  )
);
mm.displayName = "Breadcrumbs";
const od = (e) => {
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
      primary: "hover:bg-primary-50",
      secondary: "hover:bg-secondary-50",
      warning: "hover:bg-warning-50",
      danger: "hover:bg-danger-50",
      ghost: "hover:bg-gray-50",
      success: "hover:bg-success-50"
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
      primary: "bg-primary-50",
      secondary: "bg-secondary-50",
      warning: "bg-warning-50",
      danger: "bg-danger-50",
      ghost: "bg-gray-50",
      success: "bg-success-50"
    },
    hoverStripe: {
      primary: "group-hover:bg-primary-50",
      secondary: "group-hover:bg-secondary-50",
      warning: "group-hover:bg-warning-50",
      danger: "group-hover:bg-danger-50",
      ghost: "group-hover:bg-gray-50",
      success: "group-hover:bg-success-50"
    }
  };
  return {
    header: t.header[e],
    row: t.row[e],
    border: t.border[e],
    stripe: t.stripe[e],
    hoverStripe: t.hoverStripe[e]
  };
}, bm = ({
  schema: e,
  variant: t = "primary",
  showIndexSticky: r = !1,
  isMobile: n = !1
}) => {
  const o = [
    {
      name: "no",
      label: "No.",
      accessorKey: "no",
      type: "number",
      width: 80,
      sticky: r,
      stickyPosition: "left"
    },
    ...e
  ], a = od(t);
  return /* @__PURE__ */ l.jsx("div", { className: "bg-white rounded-md flex flex-col h-full max-h-[600px]", children: /* @__PURE__ */ l.jsx("div", { className: "p-0 w-full overflow-auto rounded-t-md [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full flex-1", children: /* @__PURE__ */ l.jsxs("table", { className: "w-full border-spacing-0 border-separate min-w-full", children: [
    /* @__PURE__ */ l.jsx(
      "thead",
      {
        className: z(
          "border-2 sticky top-0 z-20 rounded-t-md",
          a.border
        ),
        children: /* @__PURE__ */ l.jsx("tr", { children: o.map((s, i) => {
          const d = () => {
            var c;
            if (n || !s.sticky || s.stickyPosition !== "left") return 0;
            let u = 0;
            for (let f = 0; f < i; f++) {
              const m = o[f];
              if (m.sticky && m.stickyPosition === "left") {
                const p = typeof m.width == "number" ? m.width : parseInt(((c = m.width) == null ? void 0 : c.toString()) || "0") || 0;
                u += p;
              }
            }
            return u;
          };
          return /* @__PURE__ */ l.jsx(
            "th",
            {
              className: z(
                "text-sm text-wrap border-y p-4 text-left",
                a.header,
                {
                  "rounded-tl-md": i === 0,
                  "rounded-tr-md": i === o.length - 1,
                  "sticky z-10": !n && s.sticky,
                  "left-0": !n && s.sticky && s.stickyPosition === "left",
                  "right-0": !n && s.sticky && s.stickyPosition === "right"
                }
              ),
              style: {
                width: typeof s.width == "number" ? `${s.width}px` : s.width,
                minWidth: typeof s.width == "number" ? `${s.width}px` : s.width,
                left: !n && s.sticky && s.stickyPosition === "left" ? `${d()}px` : void 0
              },
              children: s.label
            },
            i
          );
        }) })
      }
    ),
    /* @__PURE__ */ l.jsx("tbody", { children: [...Array(5)].map((s, i) => /* @__PURE__ */ l.jsx(
      "tr",
      {
        className: z("p-3", {
          [a.stripe]: i % 2 !== 0,
          "bg-white": i % 2 === 0
        }),
        children: o.map((d, u) => {
          const c = () => {
            var m;
            if (!d.sticky || d.stickyPosition !== "left") return 0;
            let f = 0;
            for (let p = 0; p < u; p++) {
              const $ = o[p];
              if ($.sticky && $.stickyPosition === "left") {
                const k = typeof $.width == "number" ? $.width : parseInt(((m = $.width) == null ? void 0 : m.toString()) || "0") || 0;
                f += k;
              }
            }
            return f;
          };
          return /* @__PURE__ */ l.jsx(
            "td",
            {
              className: z(
                "text-left text-nowrap text-sm p-4",
                {
                  "sticky z-5": d.sticky,
                  "left-0": d.sticky && d.stickyPosition === "left",
                  "right-0": d.sticky && d.stickyPosition === "right",
                  // Ensure sticky columns have solid background that matches row
                  "bg-white": d.sticky && i % 2 === 0,
                  [a.stripe]: d.sticky && i % 2 !== 0,
                  [a.hoverStripe]: d.sticky
                }
              ),
              style: {
                width: typeof d.width == "number" ? `${d.width}px` : d.width,
                minWidth: typeof d.width == "number" ? `${d.width}px` : d.width,
                left: d.sticky && d.stickyPosition === "left" ? `${c()}px` : void 0
              },
              children: /* @__PURE__ */ l.jsx(Rc, { className: "h-10 w-full rounded-md" })
            },
            `${i}-${u}`
          );
        })
      },
      i
    )) })
  ] }) }) });
}, Zm = ({
  schema: e,
  data: t,
  className: r,
  headerClassName: n,
  rowClassName: o,
  cellClassName: a,
  emptyState: s,
  isLoading: i,
  loadingState: d,
  showIndex: u = !1,
  showIndexSticky: c = !1,
  onPageChange: f,
  onPageSizeChange: m,
  onSortChange: p,
  onRowClick: $,
  showPagination: k = !1,
  variant: x = "primary",
  meta: N = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [v, j] = ne(() => {
    const D = e.find((g) => g.sortable && g.sort);
    return D ? [
      {
        id: D.accessorKey.toString(),
        desc: D.sort === "desc"
      }
    ] : [];
  }), [T, O] = ne(!1);
  de(() => {
    const D = () => O(window.innerWidth < 768);
    return D(), window.addEventListener("resize", D), () => window.removeEventListener("resize", D);
  }, []);
  const I = ae.useMemo(() => {
    const D = e.map((g) => ({
      accessorKey: g.accessorKey,
      header: g.label,
      enableSorting: !!g.sortable,
      cell: g.render ? ({ row: C }) => {
        var h;
        return (h = g.render) == null ? void 0 : h.call(g, C.original[g.accessorKey], C.original, C.index);
      } : ({ row: C }) => C.original[g.accessorKey] || "-",
      meta: {
        align: g.align || "left",
        width: g.width,
        sticky: g.sticky,
        stickyPosition: g.stickyPosition || "left"
      }
    }));
    return u ? [
      {
        accessorKey: "no",
        header: "No.",
        enableSorting: !1,
        cell: ({ row: g }) => (N.current_page - 1) * N.limit_number + g.index + 1,
        meta: {
          align: "left",
          width: 80,
          sticky: c,
          stickyPosition: "left"
        }
      },
      ...D
    ] : D;
  }, [e, u, c, N]), H = xd({
    data: t,
    columns: I,
    state: {
      sorting: v
    },
    onSortingChange: (D) => {
      const g = typeof D == "function" ? D(v) : D;
      j(g), g.length > 0 ? p == null || p(g[0].desc ? "desc" : "asc", g[0].id) : p == null || p("", "");
    },
    getCoreRowModel: Ed(),
    getSortedRowModel: kd(),
    getPaginationRowModel: wd(),
    manualPagination: !0,
    pageCount: N.total_page
  }), F = od(x);
  if (i)
    return d || /* @__PURE__ */ l.jsx(
      bm,
      {
        schema: e,
        variant: x,
        showIndexSticky: c,
        isMobile: T
      }
    );
  const R = (D, g, C) => {
    const h = D.target;
    h.tagName === "BUTTON" || h.tagName === "A" || h.tagName === "INPUT" || h.tagName === "SELECT" || h.closest("button") !== null || h.closest("a") !== null || h.closest("input") !== null || h.closest("select") !== null || $ == null || $(g, C);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "bg-white rounded-md flex flex-col h-full max-h-[600px]", children: [
    /* @__PURE__ */ l.jsx("div", { className: "p-0 w-full overflow-auto rounded-t-md [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full flex-1", children: /* @__PURE__ */ l.jsxs(
      "table",
      {
        className: z(
          "w-full border-spacing-0 border-separate min-w-full",
          r
        ),
        children: [
          /* @__PURE__ */ l.jsx(
            "thead",
            {
              className: z(
                "border-2 sticky top-0 z-20 rounded-t-md",
                F.border
              ),
              children: H.getHeaderGroups().map((D) => /* @__PURE__ */ l.jsx("tr", { children: D.headers.map(
                (g, C) => {
                  const h = g.column.columnDef.meta, P = () => {
                    var b;
                    if (T || !(h != null && h.sticky) || h.stickyPosition !== "left") return 0;
                    let A = 0;
                    for (let y = 0; y < C; y++) {
                      const S = D.headers[y].column.columnDef.meta;
                      if (S != null && S.sticky && S.stickyPosition === "left") {
                        const W = typeof S.width == "number" ? S.width : parseInt(((b = S.width) == null ? void 0 : b.toString()) || "0") || 0;
                        A += W;
                      }
                    }
                    return A;
                  };
                  return /* @__PURE__ */ l.jsx(
                    "th",
                    {
                      className: z(
                        "text-sm text-wrap border-y p-4",
                        F.header,
                        {
                          "cursor-pointer": g.column.getCanSort(),
                          "rounded-tl-md": C === 0,
                          "rounded-tr-md": C === D.headers.length - 1,
                          "text-left": (h == null ? void 0 : h.align) === "left",
                          "text-center": (h == null ? void 0 : h.align) === "center",
                          "text-right": (h == null ? void 0 : h.align) === "right",
                          "sticky z-5": !T && (h == null ? void 0 : h.sticky),
                          "left-0": !T && (h == null ? void 0 : h.sticky) && h.stickyPosition === "left",
                          "right-0": !T && (h == null ? void 0 : h.sticky) && h.stickyPosition === "right"
                        },
                        n
                      ),
                      style: {
                        width: typeof (h == null ? void 0 : h.width) == "number" ? `${h.width}px` : h == null ? void 0 : h.width,
                        minWidth: typeof (h == null ? void 0 : h.width) == "number" ? `${h.width}px` : h == null ? void 0 : h.width,
                        left: !T && (h != null && h.sticky) && h.stickyPosition === "left" ? `${P()}px` : void 0
                      },
                      onClick: g.column.getCanSort() ? g.column.getToggleSortingHandler() : void 0,
                      children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ l.jsx(
                          "span",
                          {
                            className: z({
                              "font-semibold": C === 0
                            }),
                            children: ua(
                              g.column.columnDef.header,
                              g.getContext()
                            )
                          }
                        ),
                        g.column.getCanSort() && /* @__PURE__ */ l.jsx(
                          pe,
                          {
                            icon: g.column.getIsSorted() ? g.column.getIsSorted() === "desc" ? "mdi:keyboard-arrow-up" : "mdi:keyboard-arrow-down" : "mdi:unfold-more-horizontal",
                            className: z("h-4 w-4", {
                              "text-white": x !== "ghost",
                              "text-gray-700": x === "ghost"
                            })
                          }
                        )
                      ] })
                    },
                    g.id
                  );
                }
              ) }, D.id))
            }
          ),
          /* @__PURE__ */ l.jsx("tbody", { children: H.getRowModel().rows.length === 0 ? /* @__PURE__ */ l.jsx("tr", { children: /* @__PURE__ */ l.jsx(
            "td",
            {
              colSpan: H.getAllColumns().length,
              className: z(
                "text-center border h-full w-full rounded-b-md"
              ),
              children: s || /* @__PURE__ */ l.jsxs("div", { className: "flex mx-auto w-full text-center justify-center gap-3 items-center", children: [
                /* @__PURE__ */ l.jsx("p", { children: "Data Not Found" }),
                /* @__PURE__ */ l.jsx(pe, { icon: "mdi:face-frown-open", size: 34 })
              ] })
            }
          ) }) : H.getRowModel().rows.map((D, g) => /* @__PURE__ */ l.jsx(
            "tr",
            {
              className: z(
                "p-3 group",
                F.row,
                {
                  [F.stripe]: g % 2 !== 0,
                  "bg-white": g % 2 === 0,
                  "cursor-pointer": $
                },
                o
              ),
              onClick: (C) => R(C, D.original, g),
              children: D.getVisibleCells().map((C) => {
                const h = C.column.columnDef.meta, P = () => {
                  var E;
                  if (T || !(h != null && h.sticky) || h.stickyPosition !== "left") return 0;
                  let A = 0;
                  const b = H.getAllColumns(), y = b.findIndex((S) => S.id === C.column.id);
                  for (let S = 0; S < y; S++) {
                    const M = b[S].columnDef.meta;
                    if (M != null && M.sticky && M.stickyPosition === "left") {
                      const B = typeof M.width == "number" ? M.width : parseInt(((E = M.width) == null ? void 0 : E.toString()) || "0") || 0;
                      A += B;
                    }
                  }
                  return A;
                };
                return /* @__PURE__ */ l.jsx(
                  "td",
                  {
                    className: z(
                      "px-4 py-3 text-sm text-gray-900",
                      {
                        "text-left": (h == null ? void 0 : h.align) === "left",
                        "text-center": (h == null ? void 0 : h.align) === "center",
                        "text-right": (h == null ? void 0 : h.align) === "right",
                        "sticky z-5": !T && (h == null ? void 0 : h.sticky),
                        "left-0": !T && (h == null ? void 0 : h.sticky) && h.stickyPosition === "left",
                        "right-0": !T && (h == null ? void 0 : h.sticky) && h.stickyPosition === "right",
                        // Ensure sticky columns have solid background that matches row
                        "bg-white": !T && (h == null ? void 0 : h.sticky) && g % 2 === 0,
                        [F.stripe]: !T && (h == null ? void 0 : h.sticky) && g % 2 !== 0,
                        [F.hoverStripe]: !T && (h == null ? void 0 : h.sticky)
                      },
                      a
                    ),
                    style: {
                      width: typeof (h == null ? void 0 : h.width) == "number" ? `${h.width}px` : h == null ? void 0 : h.width,
                      minWidth: typeof (h == null ? void 0 : h.width) == "number" ? `${h.width}px` : h == null ? void 0 : h.width,
                      left: !T && (h != null && h.sticky) && h.stickyPosition === "left" ? `${P()}px` : void 0
                    },
                    children: ua(
                      C.column.columnDef.cell,
                      C.getContext()
                    )
                  },
                  C.id
                );
              })
            },
            D.id
          )) })
        ]
      }
    ) }),
    !!t.length && k && /* @__PURE__ */ l.jsx("div", { className: "p-4 bg-white rounded-b-md border-t border-gray-200 sticky bottom-0 z-10 flex-shrink-0", children: /* @__PURE__ */ l.jsx(
      Oc,
      {
        currentPage: N.current_page,
        totalPages: N.total_page,
        totalData: N.total_data,
        onPageChange: f || (() => {
        }),
        perPage: N.limit_number,
        onPerPageChange: m || (() => {
        }),
        perPageOptions: [5, 10, 20, 50, 100],
        siblingCount: 1
      }
    ) })
  ] });
}, $m = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, ad = _e(
  ({
    className: e,
    variant: t = "default",
    rounded: r = "lg",
    title: n,
    description: o,
    onClose: a,
    icon: s,
    showIcon: i = !0,
    showClose: d = !0,
    ...u
  }, c) => {
    const m = s || (i ? {
      default: "mdi:information",
      success: "mdi:check-circle",
      error: "mdi:alert-circle",
      warning: "mdi:alert",
      info: "mdi:information"
    }[t] : void 0), p = n || o;
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: c,
        className: z(
          "flex",
          o ? "items-start gap-3 p-4" : "items-center gap-2 py-2.5 px-3",
          "border border-gray-200",
          $m[r],
          {
            "bg-white": t === "default",
            "bg-success-50": t === "success",
            "bg-danger-50": t === "error",
            "bg-warning-50": t === "warning",
            "bg-info-50": t === "info"
          },
          e
        ),
        ...u,
        children: [
          m && /* @__PURE__ */ l.jsx(
            pe,
            {
              icon: m,
              className: z(
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
          /* @__PURE__ */ l.jsxs("div", { className: "flex-1", children: [
            n && /* @__PURE__ */ l.jsx(
              "h3",
              {
                className: z("text-sm font-medium leading-5", {
                  "text-gray-900": t === "default",
                  "text-success-900": t === "success",
                  "text-danger-900": t === "error",
                  "text-warning-900": t === "warning",
                  "text-info-900": t === "info"
                }),
                children: n
              }
            ),
            o && /* @__PURE__ */ l.jsx(
              "p",
              {
                className: z(n ? "mt-1" : "", "text-sm leading-5", {
                  "text-gray": t === "default",
                  "text-success-700": t === "success",
                  "text-danger-700": t === "error",
                  "text-warning-700": t === "warning",
                  "text-info-700": t === "info"
                }),
                children: o
              }
            ),
            !p && /* @__PURE__ */ l.jsx("span", { className: "text-sm leading-5", children: u.children })
          ] }),
          d && a && /* @__PURE__ */ l.jsx(
            qe,
            {
              variant: "ghost",
              size: "sm",
              onClick: a,
              className: z(
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
              children: /* @__PURE__ */ l.jsx(pe, { icon: "mdi:close", className: z(o ? "h-5 w-5" : "h-4 w-4") })
            }
          )
        ]
      }
    );
  }
);
ad.displayName = "Toast";
const jo = zs(void 0), hm = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, qm = ({ children: e }) => {
  const [t, r] = ne([]), n = fe((i) => {
    r((d) => d.filter((u) => u.id !== i));
  }, []), o = fe((i) => {
    const d = Math.random().toString(36).substr(2, 9), u = i.position || "top-right", c = i.duration || 5e3, f = {
      ...i,
      id: d,
      position: u
    };
    return r((m) => [...m, f]), c > 0 && setTimeout(() => {
      n(d);
    }, c), d;
  }, [n]), a = t.reduce((i, d) => (i[d.position] || (i[d.position] = []), i[d.position].push(d), i), {
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-right": [],
    "top-center": [],
    "bottom-center": []
  }), s = Ze();
  return "body" in s ? /* @__PURE__ */ l.jsxs(jo.Provider, { value: { showToast: o, removeToast: n }, children: [
    e,
    Qt(
      /* @__PURE__ */ l.jsx(l.Fragment, { children: Object.entries(a).map(([i, d]) => /* @__PURE__ */ l.jsx(
        "div",
        {
          className: z(
            "fixed z-[100] flex flex-col gap-2 min-w-[320px] max-w-[420px]",
            hm[i],
            i.includes("bottom") ? "flex-col-reverse" : "flex-col"
          ),
          children: d.map((u) => /* @__PURE__ */ l.jsx(
            ad,
            {
              ...u,
              onClose: () => n(u.id),
              className: "animate-slide-in"
            },
            u.id
          ))
        },
        i
      )) }),
      s.body
    )
  ] }) : /* @__PURE__ */ l.jsx(jo.Provider, { value: { showToast: o, removeToast: n }, children: e });
}, Jm = () => {
  const e = mt(jo);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, vm = {
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
}, sd = {
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
}, ym = {
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
}, Rs = {
  ...vm,
  ...sd
}, Ls = {
  image: "https://design-system-eaip.onrender.com/img/error.svg",
  message: "An unexpected error occurred. Our team is currently investigating the issue."
}, Ms = (e) => typeof e == "object" && e !== null && ("code" in e || "message" in e), Qm = ({
  error: e,
  reload: t,
  children: r,
  className: n = "",
  variant: o,
  customImage: a,
  customMessage: s
}) => {
  if (!e && !o)
    return r ? /* @__PURE__ */ l.jsx(l.Fragment, { children: r }) : null;
  const d = (() => {
    if (o) {
      const f = ym[o];
      return sd[f];
    }
    return Ms(e) && e.code && Rs[e.code] ? Rs[e.code] : Ls;
  })(), u = a || d.image, c = s || (Ms(e) ? e.message : null) || d.message;
  return /* @__PURE__ */ l.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${n}`, children: [
    /* @__PURE__ */ l.jsx(
      "img",
      {
        src: u,
        alt: "Error illustration",
        className: "max-w-[300px] h-auto"
      }
    ),
    typeof c == "string" ? /* @__PURE__ */ l.jsx(_r, { variant: "body1", className: "m-0", children: c }) : /* @__PURE__ */ l.jsx("div", { className: "m-0", children: c }),
    t && /* @__PURE__ */ l.jsx(
      qe,
      {
        onClick: t,
        rounded: "full",
        variant: "primary",
        size: "md",
        children: "Try Again"
      }
    )
  ] });
}, xm = Ve(
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
), wm = _e(
  ({
    className: e,
    variant: t = "default",
    size: r = "md",
    rounded: n = "md",
    error: o = !1,
    errorText: a,
    helperText: s,
    label: i,
    bottomLabel: d,
    required: u = !1,
    showSubmitButton: c = !1,
    submitButtonLabel: f = "Submit",
    submitButtonVariant: m = "primary",
    length: p = 6,
    numericOnly: $ = !0,
    onComplete: k,
    onChange: x,
    onSubmit: N,
    value: v,
    defaultValue: j = "",
    disabled: T = !1,
    autoFocus: O = !1,
    ...I
  }, H) => {
    const [F, R] = ne(j || ""), D = oe([]);
    de(() => {
      v !== void 0 && R(v);
    }, [v]);
    const g = v !== void 0, C = g ? v : F, h = (M) => {
      g || R(M), x == null || x(M), M.length === p && (k == null || k(M), c || N == null || N(M));
    }, P = (M) => (B) => {
      D.current[M] = B;
    }, A = (M) => {
      M.target.select();
    }, b = (M, B) => {
      var L;
      const K = M.target.value;
      let _ = "";
      if (K.length >= 1)
        _ = K.slice(-1);
      else if (K.length === 0) {
        const Y = C.split("");
        Y[B] = "", h(Y.join(""));
        return;
      }
      if ($ && !/^\d$/.test(_))
        return;
      const G = C.split("");
      for (; G.length <= B; )
        G.push("");
      G[B] = _;
      const X = G.join("");
      h(X), B < p - 1 && _ && ((L = D.current[B + 1]) == null || L.focus());
    }, y = (M, B) => {
      var K, _, G;
      if (M.key === "Backspace") {
        const X = C.split("");
        C[B] ? (M.preventDefault(), X[B] = "", h(X.join(""))) : B > 0 && (M.preventDefault(), X[B - 1] = "", h(X.join("")), (K = D.current[B - 1]) == null || K.focus());
      } else if (M.key === "Delete") {
        if (C[B]) {
          M.preventDefault();
          const X = C.split("");
          X[B] = "", h(X.join(""));
        }
      } else if (M.key === "ArrowLeft" && B > 0)
        M.preventDefault(), (_ = D.current[B - 1]) == null || _.focus();
      else if (M.key === "ArrowRight" && B < p - 1)
        M.preventDefault(), (G = D.current[B + 1]) == null || G.focus();
      else if (!M.ctrlKey && !M.altKey && !M.metaKey && M.key.length === 1 && $ && !/^\d$/.test(M.key)) {
        M.preventDefault();
        return;
      }
    }, E = (M) => {
      var X;
      M.preventDefault();
      const B = M.clipboardData.getData("text/plain").trim();
      if ($ && !/^\d+$/.test(B))
        return;
      const _ = B.slice(0, p).padEnd(C.length, "").slice(0, p);
      h(_);
      const G = _.length < p ? _.length : p - 1;
      (X = D.current[G]) == null || X.focus();
    }, S = () => {
      C.length === p && (N == null || N(C));
    }, W = C.split("").concat(Array(p - C.length).fill(""));
    return /* @__PURE__ */ l.jsxs("div", { ref: H, className: z("w-full", e), ...I, children: [
      i && /* @__PURE__ */ l.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        i,
        u && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ l.jsx("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: p }).map((M, B) => /* @__PURE__ */ l.jsx(
          "input",
          {
            ref: P(B),
            type: $ ? "tel" : "text",
            inputMode: $ ? "numeric" : "text",
            maxLength: 1,
            value: W[B] || "",
            onChange: (K) => b(K, B),
            onKeyDown: (K) => y(K, B),
            onPaste: B === 0 ? E : void 0,
            onFocus: A,
            disabled: T,
            autoFocus: O && B === 0,
            className: z(
              xm({
                variant: o ? "error" : t,
                size: r,
                rounded: n
              })
            ),
            "aria-invalid": o
          },
          B
        )) }),
        o && a && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger self-start", children: a }),
        !o && s && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral self-start", children: s }),
        d && /* @__PURE__ */ l.jsx("p", { className: "text-sm text-neutral-600", children: d }),
        c && /* @__PURE__ */ l.jsx(
          qe,
          {
            variant: m,
            disabled: C.length !== p || T,
            onClick: S,
            className: "mt-4",
            children: f
          }
        )
      ] })
    ] });
  }
);
wm.displayName = "InputOTP";
const Fs = {
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
}, e2 = ({
  icon: e,
  className: t,
  color: r = "primary",
  value: n,
  maxValue: o = 99,
  children: a,
  ...s
}) => {
  const i = "top-0 right-0", d = typeof n == "number" && !isNaN(n);
  let u = "";
  d && (n > o ? u = `${o}+` : u = String(n));
  const c = d ? "px-2" : "", f = d ? "min-w-[20px]" : "w-2.5 h-2.5", m = d ? "h-5" : "h-2.5", p = typeof r == "string" && r in Fs ? Fs[r] : r;
  return /* @__PURE__ */ l.jsxs("div", { className: z("relative inline-block", t), children: [
    a || (e ? /* @__PURE__ */ l.jsx(pe, { icon: e, color: p, size: 32, ...s }) : null),
    /* @__PURE__ */ l.jsx(
      "span",
      {
        className: z(
          "absolute flex items-center justify-center rounded-xl bg-[#FF4C4C] text-white text-[10px] font-semibold",
          i,
          c,
          f,
          m,
          !d && "p-0",
          !d && "rounded-full"
        ),
        style: {
          transform: "translate(50%,-50%)"
        },
        children: d ? u : ""
      }
    )
  ] });
}, km = {
  FLIGHT_LIGHT: {
    image: "https://design-system-eaip.onrender.com/img/flight-loader-light.gif",
    message: "Loading, please wait..."
  },
  FLIGHT_DARK: {
    image: "https://design-system-eaip.onrender.com/img/flight-loader-dark.gif",
    message: "Loading, please wait..."
  },
  "TIXIA-CIRCULAR": {
    image: "https://design-system-eaip.onrender.com/img/tixia-circular.gif",
    message: "Loading, please wait..."
  },
  "TIXIA-LINEAR": {
    image: "https://design-system-eaip.onrender.com/img/tixia-linear.gif",
    message: "Loading, please wait..."
  }
}, Em = {
  "flight-light": "FLIGHT_LIGHT",
  "flight-dark": "FLIGHT_DARK",
  "tixia-circular": "TIXIA-CIRCULAR",
  "tixia-linear": "TIXIA-LINEAR"
}, nn = (e, t) => e === void 0 ? { className: t } : typeof e == "number" ? {
  className: "",
  style: { width: `${e}px`, height: `${e}px` }
} : { className: e }, t2 = ({
  variant: e,
  customImage: t,
  customMessage: r,
  width: n = "w-full",
  height: o = "h-full",
  widthImg: a = "w-auto",
  heightImg: s = "h-auto",
  className: i = ""
}) => {
  const d = Em[e], u = km[d], c = nn(n, "w-full"), f = nn(o, "h-full"), m = nn(a, "w-auto"), p = nn(s, "h-auto");
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${c.className} ${f.className} ${i}`,
      style: { ...c.style, ...f.style },
      children: [
        /* @__PURE__ */ l.jsx(
          "img",
          {
            src: t || u.image,
            alt: "Loading animation",
            className: `${m.className} ${p.className}`,
            style: { ...m.style, ...p.style }
          }
        ),
        r ? typeof r == "string" ? /* @__PURE__ */ l.jsx(_r, { variant: "body1", className: "m-0", children: r }) : /* @__PURE__ */ l.jsx("div", { className: "m-0", children: r }) : /* @__PURE__ */ l.jsx(_r, { variant: "body1", className: "m-0", children: u.message })
      ]
    }
  );
}, Nm = {
  PAGE_NOT_FOUND: {
    image: "https://design-system-eaip.onrender.com/img/page-not-found.svg",
    message: "The page you are looking for does not exist."
  },
  PAGE_NOT_FOUND_V2: {
    image: "https://design-system-eaip.onrender.com/img/page-not-found-v2.svg",
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
  },
  NO_SEAT_AVAILABLE: {
    image: "https://design-system-eaip.onrender.com/img/seat-not-available.svg",
    message: "No seat available. Please try again later."
  },
  CHANGE_PRICE: {
    image: "https://design-system-eaip.onrender.com/img/change-price.svg",
    message: "The price has been changed. Please try again."
  },
  HELP_DESK: {
    image: "https://design-system-eaip.onrender.com/img/help-desk.svg",
    message: "Please contact our help desk for assistance."
  }
}, Pm = {
  "no-internet": "NO_INTERNET",
  "data-not-found": "DATA_NOT_FOUND",
  "under-development": "UNDER_DEVELOPMENT",
  "information-unavailable": "INFORMATION_UNAVAILABLE",
  "payment-success": "PAYMENT_SUCCESS",
  "payment-failed": "PAYMENT_FAILED",
  "no-order": "NO_ORDER",
  timeout: "TIMEOUT",
  "on-process": "ON_PROCESS",
  "page-not-found": "PAGE_NOT_FOUND",
  "page-not-found-v2": "PAGE_NOT_FOUND_V2",
  "no-seat-available": "NO_SEAT_AVAILABLE",
  "change-price": "CHANGE_PRICE",
  "help-desk": "HELP_DESK"
}, r2 = ({
  variant: e,
  customMessage: t,
  reload: r,
  reloadText: n = "Try Again",
  customImage: o,
  width: a,
  height: s,
  className: i = ""
}) => {
  const d = Pm[e], u = Nm[d];
  return /* @__PURE__ */ l.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${i}`, children: [
    /* @__PURE__ */ l.jsx(
      "img",
      {
        src: o || u.image,
        alt: "Negative case illustration",
        className: "max-w-[300px] h-auto",
        style: { width: a, height: s }
      }
    ),
    t ? typeof t == "string" ? /* @__PURE__ */ l.jsx(_r, { variant: "body1", className: "m-0", children: t }) : /* @__PURE__ */ l.jsx("div", { className: "m-0", children: t }) : /* @__PURE__ */ l.jsx(_r, { variant: "body1", className: "m-0", children: u.message }),
    r && /* @__PURE__ */ l.jsx(
      qe,
      {
        onClick: r,
        rounded: "full",
        variant: "primary",
        size: "md",
        children: n
      }
    )
  ] });
}, Tm = ({
  children: e,
  delay: t = 0,
  index: r,
  onMouseEnter: n,
  onClick: o
}) => {
  const a = oe(null), s = vd(a, { amount: 0.5 });
  return /* @__PURE__ */ l.jsx(
    yd.div,
    {
      ref: a,
      "data-index": r,
      onMouseEnter: n,
      onClick: o,
      initial: { scale: 0.7, opacity: 0 },
      animate: s ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 },
      transition: { duration: 0.2, delay: t },
      style: { marginBottom: "1rem", cursor: "pointer" },
      children: e
    }
  );
}, n2 = ({
  items: e,
  children: t,
  onItemSelect: r,
  showGradients: n = !1,
  enableArrowNavigation: o = !1,
  className: a = "",
  itemClassName: s = "",
  displayScrollbar: i = !0,
  initialSelectedIndex: d = -1
}) => {
  const u = oe(null), [c, f] = ne(d), [m, p] = ne(!1), [$, k] = ne(0), [x, N] = ne(1), v = Ae(() => t ? ae.Children.toArray(t) : e || [], [t, e]), j = Ae(() => !!t, [t]), T = (O) => {
    const { scrollTop: I, scrollHeight: H, clientHeight: F } = O.currentTarget;
    k(Math.min(I / 50, 1));
    const R = H - (I + F);
    N(
      H <= F ? 0 : Math.min(R / 50, 1)
    );
  };
  return de(() => {
    if (!o) return;
    const O = (I) => {
      I.key === "ArrowDown" || I.key === "Tab" && !I.shiftKey ? (I.preventDefault(), p(!0), f((H) => Math.min(H + 1, v.length - 1))) : I.key === "ArrowUp" || I.key === "Tab" && I.shiftKey ? (I.preventDefault(), p(!0), f((H) => Math.max(H - 1, 0))) : I.key === "Enter" && c >= 0 && c < v.length && (I.preventDefault(), r && r(v[c], c));
    };
    return window.addEventListener("keydown", O), () => window.removeEventListener("keydown", O);
  }, [v, c, r, o]), de(() => {
    if (!m || c < 0 || !u.current) return;
    const O = u.current, I = O.querySelector(
      `[data-index="${c}"]`
    );
    if (I) {
      const F = O.scrollTop, R = O.clientHeight, D = I.offsetTop, g = D + I.offsetHeight;
      D < F + 50 ? O.scrollTo({ top: D - 50, behavior: "smooth" }) : g > F + R - 50 && O.scrollTo({
        top: g - R + 50,
        behavior: "smooth"
      });
    }
    p(!1);
  }, [c, m]), /* @__PURE__ */ l.jsxs("div", { className: `scroll-list-container ${a}`, children: [
    /* @__PURE__ */ l.jsx(
      "div",
      {
        ref: u,
        className: `scroll-list ${i ? "" : "no-scrollbar"}`,
        onScroll: T,
        children: v.map((O, I) => /* @__PURE__ */ l.jsx(
          Tm,
          {
            delay: 0.1,
            index: I,
            onMouseEnter: () => f(I),
            onClick: () => {
              f(I), r && r(O, I);
            },
            children: j ? /* @__PURE__ */ l.jsx(
              "div",
              {
                className: `${c === I ? "selected" : ""} ${s}`,
                children: O
              }
            ) : /* @__PURE__ */ l.jsx(
              "div",
              {
                className: `border border-gray-200 rounded-md p-2 w-full hover:bg-gray-300 ${c === I ? "selected" : ""} ${s}`,
                children: /* @__PURE__ */ l.jsx("p", { className: "item-text", children: O })
              }
            )
          },
          I
        ))
      }
    ),
    n && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "top-gradient",
          style: { opacity: $ }
        }
      ),
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "bottom-gradient",
          style: { opacity: x }
        }
      )
    ] })
  ] });
};
export {
  Am as Accordion,
  n2 as AnimatedList,
  ac as AutoComplete,
  _m as Avatar,
  Rm as Badge,
  e2 as BadgeNotif,
  mm as Breadcrumbs,
  qe as Button,
  Js as Card,
  uc as CheckBoxGroup,
  Fn as Checkbox,
  Lm as Chip,
  yc as DatePicker,
  wc as Dialog,
  Nc as DialogActions,
  Ec as DialogBody,
  ti as DialogHeader,
  kc as DialogTitle,
  Pc as Divider,
  Qm as ErrorWrapper,
  Mm as FileUpload,
  pe as Icon,
  Zs as Input,
  wm as InputOTP,
  t2 as Loader,
  r2 as NegativeCase,
  Fm as Notification,
  Oc as Pagination,
  nd as PhoneInput,
  Ym as PhoneInputDemo,
  Xm as Popover,
  to as PrimitiveDatePicker,
  Xp as Progress,
  Ic as Radio,
  _c as RadioGroup,
  ri as Select,
  wn as SelectItem,
  Rc as Skeleton,
  Dm as Slider,
  zm as StarRating,
  Gm as StatusIndicator,
  Bm as Stepper,
  Vm as Switch,
  Zm as Table,
  Hm as Tabs,
  _r as Text,
  Vc as Textarea,
  Uc as TimePicker,
  ad as Toast,
  qm as ToastProvider,
  Yc as Toggle,
  Wm as Tooltip,
  dc as buttonVariants,
  cc as cardVariants,
  z as cn,
  xm as inputOTPVariants,
  Kc as toggleVariants,
  Jm as useToast
};
