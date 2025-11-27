import * as ca from "react";
import oe, { useState as ae, useEffect as de, forwardRef as Pe, useRef as J, useImperativeHandle as Qt, useLayoutEffect as Ds, useCallback as ge, Children as gr, isValidElement as dr, cloneElement as wn, useContext as mt, useMemo as _e, createContext as zs, useId as $d } from "react";
import Gs, { createPortal as er, flushSync as vd } from "react-dom";
import Ce from "dayjs";
import { LazyMotion as ln, AnimatePresence as Oo, m as dn, useInView as yd, motion as xd } from "framer-motion";
import { useReactTable as wd, getPaginationRowModel as kd, getSortedRowModel as Ed, getCoreRowModel as Nd, flexRender as ua } from "@tanstack/react-table";
var Bs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qn = { exports: {} }, wr = {};
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
function Pd() {
  if (fa) return wr;
  fa = 1;
  var e = oe, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, d, u) {
    var c, f = {}, m = null, p = null;
    u !== void 0 && (m = "" + u), d.key !== void 0 && (m = "" + d.key), d.ref !== void 0 && (p = d.ref);
    for (c in d) n.call(d, c) && !a.hasOwnProperty(c) && (f[c] = d[c]);
    if (i && i.defaultProps) for (c in d = i.defaultProps, d) f[c] === void 0 && (f[c] = d[c]);
    return { $$typeof: t, type: i, key: m, ref: p, props: f, _owner: o.current };
  }
  return wr.Fragment = r, wr.jsx = s, wr.jsxs = s, wr;
}
var kr = {};
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
function Td() {
  return pa || (pa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = oe, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h = Symbol.iterator, w = "@@iterator";
    function $(x) {
      if (x === null || typeof x != "object")
        return null;
      var Y = h && x[h] || x[w];
      return typeof Y == "function" ? Y : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(x) {
      {
        for (var Y = arguments.length, q = new Array(Y > 1 ? Y - 1 : 0), ue = 1; ue < Y; ue++)
          q[ue - 1] = arguments[ue];
        j("error", x, q);
      }
    }
    function j(x, Y, q) {
      {
        var ue = k.ReactDebugCurrentFrame, Ee = ue.getStackAddendum();
        Ee !== "" && (Y += "%s", q = q.concat([Ee]));
        var Te = q.map(function(xe) {
          return String(xe);
        });
        Te.unshift("Warning: " + Y), Function.prototype.apply.call(console[x], console, Te);
      }
    }
    var P = !1, O = !1, I = !1, H = !1, z = !1, F;
    F = Symbol.for("react.module.reference");
    function D(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === n || x === a || z || x === o || x === u || x === c || H || x === p || P || O || I || typeof x == "object" && x !== null && (x.$$typeof === m || x.$$typeof === f || x.$$typeof === s || x.$$typeof === i || x.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === F || x.getModuleId !== void 0));
    }
    function g(x, Y, q) {
      var ue = x.displayName;
      if (ue)
        return ue;
      var Ee = Y.displayName || Y.name || "";
      return Ee !== "" ? q + "(" + Ee + ")" : q;
    }
    function T(x) {
      return x.displayName || "Context";
    }
    function y(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
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
      if (typeof x == "object")
        switch (x.$$typeof) {
          case i:
            var Y = x;
            return T(Y) + ".Consumer";
          case s:
            var q = x;
            return T(q._context) + ".Provider";
          case d:
            return g(x, x.render, "ForwardRef");
          case f:
            var ue = x.displayName || null;
            return ue !== null ? ue : y(x.type) || "Memo";
          case m: {
            var Ee = x, Te = Ee._payload, xe = Ee._init;
            try {
              return y(xe(Te));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, R = 0, b, C, S, A, _, E, L;
    function K() {
    }
    K.__reactDisabledLog = !0;
    function U() {
      {
        if (R === 0) {
          b = console.log, C = console.info, S = console.warn, A = console.error, _ = console.group, E = console.groupCollapsed, L = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: K,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        R++;
      }
    }
    function X() {
      {
        if (R--, R === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, x, {
              value: b
            }),
            info: N({}, x, {
              value: C
            }),
            warn: N({}, x, {
              value: S
            }),
            error: N({}, x, {
              value: A
            }),
            group: N({}, x, {
              value: _
            }),
            groupCollapsed: N({}, x, {
              value: E
            }),
            groupEnd: N({}, x, {
              value: L
            })
          });
        }
        R < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = k.ReactCurrentDispatcher, M;
    function V(x, Y, q) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (Ee) {
            var ue = Ee.stack.trim().match(/\n( *(at )?)/);
            M = ue && ue[1] || "";
          }
        return `
` + M + x;
      }
    }
    var se = !1, ce;
    {
      var fe = typeof WeakMap == "function" ? WeakMap : Map;
      ce = new fe();
    }
    function ve(x, Y) {
      if (!x || se)
        return "";
      {
        var q = ce.get(x);
        if (q !== void 0)
          return q;
      }
      var ue;
      se = !0;
      var Ee = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Te;
      Te = G.current, G.current = null, U();
      try {
        if (Y) {
          var xe = function() {
            throw Error();
          };
          if (Object.defineProperty(xe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(xe, []);
            } catch (rt) {
              ue = rt;
            }
            Reflect.construct(x, [], xe);
          } else {
            try {
              xe.call();
            } catch (rt) {
              ue = rt;
            }
            x.call(xe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (rt) {
            ue = rt;
          }
          x();
        }
      } catch (rt) {
        if (rt && ue && typeof rt.stack == "string") {
          for (var $e = rt.stack.split(`
`), et = ue.stack.split(`
`), Me = $e.length - 1, ze = et.length - 1; Me >= 1 && ze >= 0 && $e[Me] !== et[ze]; )
            ze--;
          for (; Me >= 1 && ze >= 0; Me--, ze--)
            if ($e[Me] !== et[ze]) {
              if (Me !== 1 || ze !== 1)
                do
                  if (Me--, ze--, ze < 0 || $e[Me] !== et[ze]) {
                    var ct = `
` + $e[Me].replace(" at new ", " at ");
                    return x.displayName && ct.includes("<anonymous>") && (ct = ct.replace("<anonymous>", x.displayName)), typeof x == "function" && ce.set(x, ct), ct;
                  }
                while (Me >= 1 && ze >= 0);
              break;
            }
        }
      } finally {
        se = !1, G.current = Te, X(), Error.prepareStackTrace = Ee;
      }
      var nr = x ? x.displayName || x.name : "", Ht = nr ? V(nr) : "";
      return typeof x == "function" && ce.set(x, Ht), Ht;
    }
    function Re(x, Y, q) {
      return ve(x, !1);
    }
    function Se(x) {
      var Y = x.prototype;
      return !!(Y && Y.isReactComponent);
    }
    function Ue(x, Y, q) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return ve(x, Se(x));
      if (typeof x == "string")
        return V(x);
      switch (x) {
        case u:
          return V("Suspense");
        case c:
          return V("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case d:
            return Re(x.render);
          case f:
            return Ue(x.type, Y, q);
          case m: {
            var ue = x, Ee = ue._payload, Te = ue._init;
            try {
              return Ue(Te(Ee), Y, q);
            } catch {
            }
          }
        }
      return "";
    }
    var je = Object.prototype.hasOwnProperty, Xe = {}, Le = k.ReactDebugCurrentFrame;
    function lt(x) {
      if (x) {
        var Y = x._owner, q = Ue(x.type, x._source, Y ? Y.type : null);
        Le.setExtraStackFrame(q);
      } else
        Le.setExtraStackFrame(null);
    }
    function tt(x, Y, q, ue, Ee) {
      {
        var Te = Function.call.bind(je);
        for (var xe in x)
          if (Te(x, xe)) {
            var $e = void 0;
            try {
              if (typeof x[xe] != "function") {
                var et = Error((ue || "React class") + ": " + q + " type `" + xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw et.name = "Invariant Violation", et;
              }
              $e = x[xe](Y, xe, ue, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Me) {
              $e = Me;
            }
            $e && !($e instanceof Error) && (lt(Ee), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ue || "React class", q, xe, typeof $e), lt(null)), $e instanceof Error && !($e.message in Xe) && (Xe[$e.message] = !0, lt(Ee), v("Failed %s type: %s", q, $e.message), lt(null));
          }
      }
    }
    var Qe = Array.isArray;
    function Be(x) {
      return Qe(x);
    }
    function wt(x) {
      {
        var Y = typeof Symbol == "function" && Symbol.toStringTag, q = Y && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return q;
      }
    }
    function kt(x) {
      try {
        return te(x), !1;
      } catch {
        return !0;
      }
    }
    function te(x) {
      return "" + x;
    }
    function ke(x) {
      if (kt(x))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wt(x)), te(x);
    }
    var re = k.ReactCurrentOwner, Z = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, W, ne;
    function ie(x) {
      if (je.call(x, "ref")) {
        var Y = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function be(x) {
      if (je.call(x, "key")) {
        var Y = Object.getOwnPropertyDescriptor(x, "key").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function Ke(x, Y) {
      typeof x.ref == "string" && re.current;
    }
    function st(x, Y) {
      {
        var q = function() {
          W || (W = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        q.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: q,
          configurable: !0
        });
      }
    }
    function dt(x, Y) {
      {
        var q = function() {
          ne || (ne = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        q.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: q,
          configurable: !0
        });
      }
    }
    var Et = function(x, Y, q, ue, Ee, Te, xe) {
      var $e = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: x,
        key: Y,
        ref: q,
        props: xe,
        // Record the component responsible for creating this element.
        _owner: Te
      };
      return $e._store = {}, Object.defineProperty($e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty($e, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ue
      }), Object.defineProperty($e, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ee
      }), Object.freeze && (Object.freeze($e.props), Object.freeze($e)), $e;
    };
    function tr(x, Y, q, ue, Ee) {
      {
        var Te, xe = {}, $e = null, et = null;
        q !== void 0 && (ke(q), $e = "" + q), be(Y) && (ke(Y.key), $e = "" + Y.key), ie(Y) && (et = Y.ref, Ke(Y, Ee));
        for (Te in Y)
          je.call(Y, Te) && !Z.hasOwnProperty(Te) && (xe[Te] = Y[Te]);
        if (x && x.defaultProps) {
          var Me = x.defaultProps;
          for (Te in Me)
            xe[Te] === void 0 && (xe[Te] = Me[Te]);
        }
        if ($e || et) {
          var ze = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          $e && st(xe, ze), et && dt(xe, ze);
        }
        return Et(x, $e, et, Ee, ue, re.current, xe);
      }
    }
    var Vt = k.ReactCurrentOwner, ht = k.ReactDebugCurrentFrame;
    function rr(x) {
      if (x) {
        var Y = x._owner, q = Ue(x.type, x._source, Y ? Y.type : null);
        ht.setExtraStackFrame(q);
      } else
        ht.setExtraStackFrame(null);
    }
    var _n;
    _n = !1;
    function Rn(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function oa() {
      {
        if (Vt.current) {
          var x = y(Vt.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function ld(x) {
      return "";
    }
    var aa = {};
    function dd(x) {
      {
        var Y = oa();
        if (!Y) {
          var q = typeof x == "string" ? x : x.displayName || x.name;
          q && (Y = `

Check the top-level render call using <` + q + ">.");
        }
        return Y;
      }
    }
    function sa(x, Y) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var q = dd(Y);
        if (aa[q])
          return;
        aa[q] = !0;
        var ue = "";
        x && x._owner && x._owner !== Vt.current && (ue = " It was passed a child from " + y(x._owner.type) + "."), rr(x), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, ue), rr(null);
      }
    }
    function ia(x, Y) {
      {
        if (typeof x != "object")
          return;
        if (Be(x))
          for (var q = 0; q < x.length; q++) {
            var ue = x[q];
            Rn(ue) && sa(ue, Y);
          }
        else if (Rn(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var Ee = $(x);
          if (typeof Ee == "function" && Ee !== x.entries)
            for (var Te = Ee.call(x), xe; !(xe = Te.next()).done; )
              Rn(xe.value) && sa(xe.value, Y);
        }
      }
    }
    function cd(x) {
      {
        var Y = x.type;
        if (Y == null || typeof Y == "string")
          return;
        var q;
        if (typeof Y == "function")
          q = Y.propTypes;
        else if (typeof Y == "object" && (Y.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Y.$$typeof === f))
          q = Y.propTypes;
        else
          return;
        if (q) {
          var ue = y(Y);
          tt(q, x.props, "prop", ue, x);
        } else if (Y.PropTypes !== void 0 && !_n) {
          _n = !0;
          var Ee = y(Y);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ee || "Unknown");
        }
        typeof Y.getDefaultProps == "function" && !Y.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ud(x) {
      {
        for (var Y = Object.keys(x.props), q = 0; q < Y.length; q++) {
          var ue = Y[q];
          if (ue !== "children" && ue !== "key") {
            rr(x), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ue), rr(null);
            break;
          }
        }
        x.ref !== null && (rr(x), v("Invalid attribute `ref` supplied to `React.Fragment`."), rr(null));
      }
    }
    var la = {};
    function da(x, Y, q, ue, Ee, Te) {
      {
        var xe = D(x);
        if (!xe) {
          var $e = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && ($e += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var et = ld();
          et ? $e += et : $e += oa();
          var Me;
          x === null ? Me = "null" : Be(x) ? Me = "array" : x !== void 0 && x.$$typeof === t ? (Me = "<" + (y(x.type) || "Unknown") + " />", $e = " Did you accidentally export a JSX literal instead of a component?") : Me = typeof x, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Me, $e);
        }
        var ze = tr(x, Y, q, Ee, Te);
        if (ze == null)
          return ze;
        if (xe) {
          var ct = Y.children;
          if (ct !== void 0)
            if (ue)
              if (Be(ct)) {
                for (var nr = 0; nr < ct.length; nr++)
                  ia(ct[nr], x);
                Object.freeze && Object.freeze(ct);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ia(ct, x);
        }
        if (je.call(Y, "key")) {
          var Ht = y(x), rt = Object.keys(Y).filter(function(hd) {
            return hd !== "key";
          }), Ln = rt.length > 0 ? "{key: someKey, " + rt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!la[Ht + Ln]) {
            var bd = rt.length > 0 ? "{" + rt.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ln, Ht, bd, Ht), la[Ht + Ln] = !0;
          }
        }
        return x === n ? ud(ze) : cd(ze), ze;
      }
    }
    function fd(x, Y, q) {
      return da(x, Y, q, !0);
    }
    function pd(x, Y, q) {
      return da(x, Y, q, !1);
    }
    var gd = pd, md = fd;
    kr.Fragment = n, kr.jsx = gd, kr.jsxs = md;
  }()), kr;
}
process.env.NODE_ENV === "production" ? Qn.exports = Pd() : Qn.exports = Td();
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
function ye() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Hs(e)) && (n && (n += " "), n += t);
  return n;
}
const Io = "-", Cd = (e) => {
  const t = jd(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(Io);
      return i[0] === "" && i.length !== 1 && i.shift(), Us(i, t) || Sd(s);
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
}, ga = /^\[(.+)\]$/, Sd = (e) => {
  if (ga.test(e)) {
    const t = ga.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, jd = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Id(Object.entries(e.classGroups), r).forEach(([a, s]) => {
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
      if (Od(o)) {
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
}, Od = (e) => e.isThemeGetter, Id = (e, t) => t ? e.map(([r, n]) => {
  const o = n.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([s, i]) => [t + s, i])) : a);
  return [r, o];
}) : e, Ad = (e) => {
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
}, Ks = "!", _d = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, o = t[0], a = t.length, s = (i) => {
    const d = [];
    let u = 0, c = 0, f;
    for (let $ = 0; $ < i.length; $++) {
      let k = i[$];
      if (u === 0) {
        if (k === o && (n || i.slice($, $ + a) === t)) {
          d.push(i.slice(c, $)), c = $ + a;
          continue;
        }
        if (k === "/") {
          f = $;
          continue;
        }
      }
      k === "[" ? u++ : k === "]" && u--;
    }
    const m = d.length === 0 ? i : i.substring(c), p = m.startsWith(Ks), h = p ? m.substring(1) : m, w = f && f > c ? f - c : void 0;
    return {
      modifiers: d,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: w
    };
  };
  return r ? (i) => r({
    className: i,
    parseClassName: s
  }) : s;
}, Rd = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, Ld = (e) => ({
  cache: Ad(e.cacheSize),
  parseClassName: _d(e),
  ...Cd(e)
}), Md = /\s+/, Fd = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, a = [], s = e.trim().split(Md);
  let i = "";
  for (let d = s.length - 1; d >= 0; d -= 1) {
    const u = s[d], {
      modifiers: c,
      hasImportantModifier: f,
      baseClassName: m,
      maybePostfixModifierPosition: p
    } = r(u);
    let h = !!p, w = n(h ? m.substring(0, p) : m);
    if (!w) {
      if (!h) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (w = n(m), !w) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      h = !1;
    }
    const $ = Rd(c).join(":"), k = f ? $ + Ks : $, v = k + w;
    if (a.includes(v))
      continue;
    a.push(v);
    const j = o(w, h);
    for (let P = 0; P < j.length; ++P) {
      const O = j[P];
      a.push(k + O);
    }
    i = u + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Dd() {
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
function zd(e, ...t) {
  let r, n, o, a = s;
  function s(d) {
    const u = t.reduce((c, f) => f(c), e());
    return r = Ld(u), n = r.cache.get, o = r.cache.set, a = i, i(d);
  }
  function i(d) {
    const u = n(d);
    if (u)
      return u;
    const c = Fd(d, r);
    return o(d, c), c;
  }
  return function() {
    return a(Dd.apply(null, arguments));
  };
}
const Ie = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Ys = /^\[(?:([a-z-]+):)?(.+)\]$/i, Gd = /^\d+\/\d+$/, Bd = /* @__PURE__ */ new Set(["px", "full", "screen"]), Vd = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Hd = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ud = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Kd = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Wd = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Nt = (e) => cr(e) || Bd.has(e) || Gd.test(e), Lt = (e) => $r(e, "length", tc), cr = (e) => !!e && !Number.isNaN(Number(e)), Mn = (e) => $r(e, "number", cr), Er = (e) => !!e && Number.isInteger(Number(e)), Yd = (e) => e.endsWith("%") && cr(e.slice(0, -1)), pe = (e) => Ys.test(e), Mt = (e) => Vd.test(e), Xd = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Zd = (e) => $r(e, Xd, Xs), qd = (e) => $r(e, "position", Xs), Jd = /* @__PURE__ */ new Set(["image", "url"]), Qd = (e) => $r(e, Jd, nc), ec = (e) => $r(e, "", rc), Nr = () => !0, $r = (e, t, r) => {
  const n = Ys.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, tc = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Hd.test(e) && !Ud.test(e)
), Xs = () => !1, rc = (e) => Kd.test(e), nc = (e) => Wd.test(e), oc = () => {
  const e = Ie("colors"), t = Ie("spacing"), r = Ie("blur"), n = Ie("brightness"), o = Ie("borderColor"), a = Ie("borderRadius"), s = Ie("borderSpacing"), i = Ie("borderWidth"), d = Ie("contrast"), u = Ie("grayscale"), c = Ie("hueRotate"), f = Ie("invert"), m = Ie("gap"), p = Ie("gradientColorStops"), h = Ie("gradientColorStopPositions"), w = Ie("inset"), $ = Ie("margin"), k = Ie("opacity"), v = Ie("padding"), j = Ie("saturate"), P = Ie("scale"), O = Ie("sepia"), I = Ie("skew"), H = Ie("space"), z = Ie("translate"), F = () => ["auto", "contain", "none"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], g = () => ["auto", pe, t], T = () => [pe, t], y = () => ["", Nt, Lt], N = () => ["auto", cr, pe], R = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], b = () => ["solid", "dashed", "dotted", "double", "none"], C = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], S = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], A = () => ["", "0", pe], _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], E = () => [cr, pe];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Nr],
      spacing: [Nt, Lt],
      blur: ["none", "", Mt, pe],
      brightness: E(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Mt, pe],
      borderSpacing: T(),
      borderWidth: y(),
      contrast: E(),
      grayscale: A(),
      hueRotate: E(),
      invert: A(),
      gap: T(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Yd, Lt],
      inset: g(),
      margin: g(),
      opacity: E(),
      padding: T(),
      saturate: E(),
      scale: E(),
      sepia: A(),
      skew: E(),
      space: T(),
      translate: T()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", pe]
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
        object: [...R(), pe]
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
        overscroll: F()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": F()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": F()
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
        z: ["auto", Er, pe]
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
        flex: ["1", "auto", "initial", "none", pe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: A()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: A()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Er, pe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Nr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Er, pe]
        }, pe]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": N()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": N()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Nr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Er, pe]
        }, pe]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": N()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": N()
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
        "auto-cols": ["auto", "min", "max", "fr", pe]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", pe]
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
        justify: ["normal", ...S()]
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
        content: ["normal", ...S(), "baseline"]
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
        "place-content": [...S(), "baseline"]
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
        m: [$]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [$]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [$]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [$]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [$]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [$]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [$]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [$]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [$]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", pe, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [pe, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [pe, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Mt]
        }, Mt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [pe, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [pe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [pe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [pe, t, "auto", "min", "max", "fit"]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Mn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Nr]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", pe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", cr, Mn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Nt, pe]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", pe]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", pe]
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
        "placeholder-opacity": [k]
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
        "text-opacity": [k]
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
        "underline-offset": ["auto", Nt, pe]
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
        indent: T()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", pe]
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
        content: ["none", pe]
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
        "bg-opacity": [k]
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
        bg: [...R(), qd]
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
        bg: ["auto", "cover", "contain", Zd]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Qd]
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
        from: [h]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [h]
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
        "border-opacity": [k]
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
        "divide-opacity": [k]
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
        "outline-offset": [Nt, pe]
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
        ring: y()
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
        "ring-opacity": [k]
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
        shadow: ["", "inner", "none", Mt, ec]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Nr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [k]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...C(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": C()
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
        "drop-shadow": ["", "none", Mt, pe]
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
        "backdrop-opacity": [k]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", pe]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: E()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", pe]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: E()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", pe]
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
        scale: [P]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [P]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [P]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Er, pe]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [z]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [z]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", pe]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", pe]
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
        "scroll-m": T()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": T()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": T()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": T()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": T()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": T()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": T()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": T()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": T()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": T()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": T()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": T()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": T()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": T()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": T()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": T()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": T()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": T()
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
        "will-change": ["auto", "scroll", "contents", "transform", pe]
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
        stroke: [Nt, Lt, Mn]
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
}, xt = /* @__PURE__ */ zd(oc);
function B(...e) {
  return xt(ye(e));
}
const ba = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ha = ye, He = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return ha(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
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
    return Object.entries(p).every((h) => {
      let [w, $] = h;
      return Array.isArray($) ? $.includes({
        ...a,
        ...i
      }[w]) : {
        ...a,
        ...i
      }[w] === $;
    }) ? [
      ...u,
      f,
      m
    ] : u;
  }, []);
  return ha(e, s, d, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, me = ({
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
  const [c, f] = ae(null), [m, p] = ae(!0), [h, w] = ae(null);
  return de(() => {
    let $ = !0;
    return (async () => {
      try {
        const { Icon: v } = await import("./iconify-Dqt3MVen.mjs");
        $ && (f(() => v), p(!1));
      } catch (v) {
        console.error("Failed to load icon:", v), $ && (w(v), p(!1));
      }
    })(), () => {
      $ = !1;
    };
  }, []), m ? /* @__PURE__ */ l.jsx("span", { style: { width: r, height: r } }) : h || !c ? null : /* @__PURE__ */ l.jsx(
    c,
    {
      icon: e,
      className: B(
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
}, ac = He(
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
), Zs = Pe(
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
    id: h,
    ...w
  }, $) => {
    const k = h || oe.useId(), v = `${k}-helper`, j = `${k}-error`, P = /* @__PURE__ */ l.jsxs("div", { className: B("relative", !c && "inline-block"), children: [
      f && /* @__PURE__ */ l.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ l.jsx(me, { icon: f, className: "w-4 h-4" }) }),
      /* @__PURE__ */ l.jsx(
        "input",
        {
          id: k,
          type: "text",
          ref: $,
          className: B(
            ac({ variant: o ? "error" : t, size: r, rounded: n, fullWidth: c }),
            f && "pl-10",
            m && "pr-10",
            e
          ),
          "aria-describedby": o ? j : s ? v : void 0,
          "aria-invalid": o,
          "aria-required": d,
          ...w
        }
      ),
      m && /* @__PURE__ */ l.jsx(
        "div",
        {
          className: B(
            "absolute right-3 top-1/2 -translate-y-1/2 text-neutral",
            p && "cursor-pointer hover:text-primary-600"
          ),
          onClick: p,
          role: p ? "button" : void 0,
          tabIndex: p ? 0 : void 0,
          children: /* @__PURE__ */ l.jsx(me, { icon: m, className: "w-4 h-4" })
        }
      )
    ] }), O = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      o && a && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger", id: j, children: a }),
      !o && s && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral", id: v, children: s })
    ] });
    return u === "left" ? /* @__PURE__ */ l.jsx("div", { className: B(c ? "w-full" : "inline-block", e), children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-4", children: [
      i && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: k,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            i,
            d && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: B("flex-1", !c && "inline-block"), children: [
        P,
        O
      ] })
    ] }) }) : /* @__PURE__ */ l.jsxs("div", { className: B(c ? "w-full" : "inline-block", e), children: [
      i && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: k,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            i,
            d && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      P,
      O
    ] });
  }
);
Zs.displayName = "Input";
const kn = oe.forwardRef(
  ({ className: e, children: t, selected: r, disabled: n, ...o }, a) => /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: a,
      className: B(
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
kn.displayName = "SelectItem";
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
}, Fn = "autocomplete-dropdown-opened", sc = Pe(
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
    label: h,
    required: w = !1,
    labelPlacement: $ = "top",
    fullWidth: k = !1,
    value: v,
    onChange: j,
    onFocus: P,
    onBlur: O,
    showClear: I = !1,
    onClear: H,
    searchType: z = "include",
    initialItemsToShow: F,
    itemsToLoad: D = 10,
    maxDropdownHeight: g = 300,
    noOptionsMessage: T = "No options found",
    scrollMoreMessage: y = "",
    allOptionsShownMessage: N = "",
    resetInvalidOnBlur: R = !1,
    onInvalidReset: b,
    ...C
  }, S) => {
    const [A, _] = ae(!1), [E, L] = ae(v || ""), [K, U] = ae(
      F || 0
    ), X = J(null), G = J(null), M = J(null), V = J(null), se = n !== void 0, fe = `autocomplete-${oe.useId().replace(/:/g, "")}`, ve = () => {
      if (!A || !G.current || !M.current) return;
      const { bottom: Z, top: W, left: ne, width: ie } = G.current.getBoundingClientRect(), be = M.current, Ke = It(), st = Ke.innerHeight - Z, dt = W, Et = Math.min(g, 300), tr = st < Et, Vt = dt > st, ht = tr && Vt;
      Object.assign(be.style, {
        position: "fixed",
        left: `${ne}px`,
        width: `${ie}px`
      }), ht ? Object.assign(be.style, {
        bottom: `${Ke.innerHeight - W + 4}px`,
        top: "auto",
        maxHeight: `${dt - 8}px`
      }) : Object.assign(be.style, {
        top: `${Z + 4}px`,
        bottom: "auto",
        maxHeight: `${st - 8}px`
      });
    };
    de(() => {
      const Z = It(), W = Ze(), ne = () => {
        A && ve();
      }, ie = () => {
        A && ve();
      }, be = (st) => {
        st.detail.id !== fe && _(!1);
      }, Ke = (st) => {
        const dt = st.target;
        X.current && !X.current.contains(dt) && M.current && !M.current.contains(dt) && _(!1);
      };
      return A && (ve(), Z.addEventListener("scroll", ne, !0), Z.addEventListener("resize", ie)), W.addEventListener(
        Fn,
        be
      ), W.addEventListener("click", Ke), () => {
        Z.removeEventListener("scroll", ne, !0), Z.removeEventListener("resize", ie), W.removeEventListener(
          Fn,
          be
        ), W.removeEventListener("click", Ke);
      };
    }, [A, fe]), de(() => {
      L(v || "");
    }, [v]);
    const Re = (Z) => {
      const { value: W } = Z.target;
      if (L(W), !W.trim()) {
        _(!1);
        return;
      }
      const ne = t.some(({ label: ie }) => {
        const be = W.toLowerCase().trim(), Ke = ie.toLowerCase();
        return z === "startsWith" ? Ke.startsWith(be) : Ke.includes(be);
      });
      _(ne), j == null || j(Z);
    }, Se = (Z) => {
      Z.stopPropagation(), L(""), H == null || H();
      const W = new Event(
        "change"
      );
      W.target = { value: "" }, j == null || j(W);
    }, Ue = (Z) => {
      var be;
      if (!Z) return;
      const { value: W, label: ne } = Z;
      L(ne), _(!1), r == null || r(W);
      const ie = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: Z }
      });
      (be = G.current) == null || be.dispatchEvent(ie);
    }, je = (Z) => Z.trim() ? t.some(({ label: W }) => {
      const ne = Z.toLowerCase().trim(), ie = W.toLowerCase();
      return z === "startsWith" ? ie.startsWith(ne) : ie.includes(ne);
    }) : !0, Xe = (Z) => {
      if (R && E.trim() && !je(E)) {
        L(""), b == null || b();
        const W = new Event(
          "change"
        );
        W.target = { value: "" }, j == null || j(W);
      }
      O == null || O(Z);
    }, Le = t.filter(({ label: Z }) => {
      const W = E.toLowerCase().trim(), ne = Z.toLowerCase();
      return z === "startsWith" ? ne.startsWith(W) : ne.includes(W);
    }), lt = (Z) => {
      se || (Ze().dispatchEvent(
        new CustomEvent(Fn, {
          detail: { id: fe }
        })
      ), Le.length > 0 && _(!0)), P == null || P(Z);
    }, tt = () => {
      if (!V.current || F === void 0 || F <= 0)
        return;
      const { scrollTop: Z, scrollHeight: W, clientHeight: ne } = V.current;
      Z + ne >= W - 10 && U(
        (be) => Math.min(be + D, Le.length)
      );
    };
    de(() => {
      F !== void 0 && F > 0 && U(F);
    }, [E, F]);
    const Qe = F !== void 0 && F > 0 ? Le.slice(0, K) : Le, Be = (Z, W) => Z ? Z.replace(/\{(\w+)\}/g, (ne, ie) => {
      var be;
      return ((be = W[ie]) == null ? void 0 : be.toString()) || ne;
    }) : "", wt = se ? n : A, kt = I && E && !C.disabled && !C.readOnly, te = kt ? "mdi:close" : c, ke = (Z) => {
      if (!(!wt || Qe.length === 0))
        switch (Z.key) {
          case "Enter":
            Z.preventDefault(), Qe.length === 1 && Ue(Qe[0]);
            break;
          case "Tab":
            Qe.length === 1 && (Z.preventDefault(), Ue(Qe[0]));
            break;
          case "Escape":
            Z.preventDefault(), _(!1);
            break;
        }
    }, re = () => {
      if (!wt) return null;
      const Z = Ze();
      if (!("body" in Z)) return null;
      const W = /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: M,
          className: "fixed z-[9999] min-w-[8rem] rounded-md border border-neutral-200 bg-white py-1 shadow-lg overflow-hidden",
          style: { maxHeight: `${g}px` },
          onClick: (ne) => ne.stopPropagation(),
          children: /* @__PURE__ */ l.jsx(
            "div",
            {
              ref: V,
              className: "overflow-auto",
              style: { maxHeight: `${g}px` },
              onScroll: tt,
              children: o ? /* @__PURE__ */ l.jsx("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ l.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }) }) : Qe.length > 0 ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                Qe.map((ne) => /* @__PURE__ */ l.jsx(
                  kn,
                  {
                    value: ne.value,
                    selected: ne.label === E,
                    onClick: () => Ue(ne),
                    children: a ? a(ne) : ne.label
                  },
                  ne.value
                )),
                F !== void 0 && F > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                  K < Le.length && y && /* @__PURE__ */ l.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: Be(y, {
                    current: K,
                    total: Le.length
                  }) }),
                  K >= Le.length && Le.length > 0 && N && /* @__PURE__ */ l.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: Be(N, {
                    total: Le.length
                  }) })
                ] })
              ] }) : /* @__PURE__ */ l.jsx("div", { className: "px-2 py-2 text-sm text-neutral", children: T })
            }
          )
        }
      );
      return er(W, Z.body);
    };
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: X,
        className: B("relative", k ? "w-full" : "inline-block"),
        children: [
          /* @__PURE__ */ l.jsx("div", { ref: G, className: B(!k && "inline-block"), children: /* @__PURE__ */ l.jsx(
            Zs,
            {
              ref: S,
              value: E,
              onChange: Re,
              onFocus: lt,
              onBlur: Xe,
              onKeyDown: ke,
              variant: s,
              size: i,
              rounded: d,
              leftIcon: u,
              rightIcon: te,
              error: f,
              errorText: m,
              helperText: p,
              label: h,
              required: w,
              labelPlacement: $,
              fullWidth: k,
              className: e,
              ...C,
              onClick: kt ? Se : C.onClick
            }
          ) }),
          re()
        ]
      }
    );
  }
);
sc.displayName = "AutoComplete";
const ic = {
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
}, lc = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, dc = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full"
}, Lm = ({
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
  const [m, p] = ae(r), h = n !== void 0 ? n : m, w = n !== void 0, $ = (v) => {
    let j;
    t ? j = h.includes(v) ? h.filter((P) => P !== v) : [...h, v] : j = h.includes(v) ? [] : [v], w ? o == null || o(j) : p(j);
  }, k = ic[u];
  return /* @__PURE__ */ l.jsx("div", { className: ye("w-full space-y-2", i), children: e.map((v) => {
    const j = h.includes(v.id), P = !!v.disabled;
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: ye(
          "border overflow-hidden",
          "bg-white",
          "border-gray-200",
          lc[c],
          dc[f],
          "transition-shadow duration-200"
        ),
        children: [
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              onClick: () => !P && $(v.id),
              disabled: P,
              className: ye(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                k.hover,
                j && k.active,
                k.text,
                P && "opacity-50 cursor-not-allowed"
              ),
              children: [
                s === "left" && /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: ye(
                      "mr-3 transition-transform duration-200",
                      j && "rotate-180"
                    ),
                    children: /* @__PURE__ */ l.jsx(me, { icon: a, className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ l.jsx("div", { className: "flex-1", children: v.title }),
                s === "right" && /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: ye(
                      "ml-3 transition-transform duration-200",
                      j && "rotate-180"
                    ),
                    children: /* @__PURE__ */ l.jsx(me, { icon: a, className: "w-5 h-5" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: ye(
                "grid transition-all duration-200 ease-in-out",
                j ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              ),
              children: /* @__PURE__ */ l.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ l.jsx(
                "div",
                {
                  className: ye(
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
}, Mm = ({
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
}, Fm = ({
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
}, cc = He(
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
), qe = Pe(
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
        className: B(
          cc({
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
          s && !a && /* @__PURE__ */ l.jsx(me, { icon: s, className: "w-4 h-4", inline: !0 }),
          u && /* @__PURE__ */ l.jsx("span", { children: u }),
          i && !a && /* @__PURE__ */ l.jsx(me, { icon: i, className: "w-4 h-4", inline: !0 })
        ]
      }
    );
  }
);
qe.displayName = "Button";
const uc = He(
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
), Js = Pe(
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
      className: B(uc({ variant: t, padding: r, shadow: n, rounded: o, className: e })),
      ref: i,
      ...s
    }
  )
);
Js.displayName = "Card";
const an = Pe(({
  label: e,
  error: t,
  disabled: r = !1,
  indeterminate: n = !1,
  variantSize: o = "sm",
  variant: a = "square",
  color: s = "primary",
  className: i = "",
  ...d
}, u) => {
  const c = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }, f = {
    primary: "checked:bg-primary-600 checked:border-primary-600 hover:border-primary-600",
    secondary: "checked:bg-secondary-600 checked:border-secondary-600 hover:border-secondary-600",
    success: "checked:bg-success-600 checked:border-success-600 hover:border-success-600",
    warning: "checked:bg-warning-600 checked:border-warning-600 hover:border-warning-600",
    error: "checked:bg-danger-600 checked:border-danger-600 hover:border-danger-600"
  }, m = t ? "border-danger-600 hover:border-danger-700" : "", h = xt(
    "border-2 transition-colors duration-200",
    "appearance-none cursor-pointer",
    "checked:bg-no-repeat checked:bg-center",
    a === "circle" ? 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]' : 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM0w0LjUgOC41TDIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=")]',
    {
      square: "rounded",
      circle: "rounded-full"
    }[a],
    c[o],
    f[s],
    m,
    r && "opacity-50 cursor-not-allowed",
    i
  ), w = xt(
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
          className: h,
          disabled: r,
          ref: ($) => {
            typeof u == "function" ? u($) : u && (u.current = $), $ && ($.indeterminate = n);
          },
          ...d
        }
      ),
      e && /* @__PURE__ */ l.jsx("label", { className: w, children: e })
    ] }),
    t && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-sm text-danger-600", children: t })
  ] });
});
an.displayName = "Checkbox";
const Dn = He(
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
), fc = Pe(
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
    disabled: h = !1,
    variant: w = "square",
    color: $ = "primary",
    checkboxSize: k = "sm",
    showSelectAll: v = !1,
    selectAllText: j = "Select All",
    indeterminateSelectAll: P = !0,
    gap: O,
    selectAllGap: I,
    name: H,
    id: z,
    ...F
  }, D) => {
    const g = z || oe.useId(), T = `${g}-helper`, y = `${g}-error`, N = `${g}-group`, [R, b] = oe.useState(n), C = r !== void 0 ? r : R, S = (V, se) => {
      const ce = se ? [...C, V] : C.filter((fe) => fe !== V);
      r === void 0 && b(ce), o == null || o(ce);
    }, A = (V) => {
      const se = V ? t.map((ce) => ce.value) : [];
      r === void 0 && b(se), o == null || o(se);
    }, _ = t.length > 0 && C.length === t.length, E = C.length > 0 && C.length < t.length, L = P && E, K = (V) => V === "none" ? "gap-0" : V === "xs" ? "gap-1" : V === "sm" ? "gap-2" : V === "md" ? "gap-3" : V === "lg" ? "gap-4" : V === "xl" ? "gap-6" : null, U = K(O), X = K(I), G = /* @__PURE__ */ l.jsx("div", { className: B("relative", !p && "inline-block"), children: /* @__PURE__ */ l.jsxs(
      "fieldset",
      {
        ref: D,
        id: N,
        name: H,
        className: B(
          Dn({ layout: a, size: s }),
          U,
          e
        ),
        "aria-describedby": i ? y : u ? T : void 0,
        "aria-invalid": i,
        "aria-required": f,
        ...F,
        children: [
          v && t.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: B(
            "flex flex-col",
            X || U || Dn({ layout: "vertical", size: s })
          ), children: [
            /* @__PURE__ */ l.jsx(
              an,
              {
                label: j,
                checked: _,
                indeterminate: L,
                onChange: (V) => A(V.target.checked),
                disabled: h,
                variant: w,
                color: i ? "error" : $,
                variantSize: k,
                error: i ? " " : void 0
              }
            ),
            /* @__PURE__ */ l.jsx("div", { className: B(
              "flex",
              a === "vertical" && "flex-col",
              a === "horizontal" && "flex-row flex-wrap",
              a === "grid" && "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
              U || Dn({ layout: a, size: s })
            ), children: t.map((V) => /* @__PURE__ */ l.jsx(
              an,
              {
                label: V.label,
                checked: C.includes(V.value),
                onChange: (se) => S(V.value, se.target.checked),
                disabled: h || V.disabled,
                indeterminate: V.indeterminate,
                variant: w,
                color: i ? "error" : $,
                variantSize: k,
                error: i ? " " : void 0
              },
              V.value
            )) })
          ] }),
          !v && /* @__PURE__ */ l.jsx(l.Fragment, { children: t.map((V) => /* @__PURE__ */ l.jsx(
            an,
            {
              label: V.label,
              checked: C.includes(V.value),
              onChange: (se) => S(V.value, se.target.checked),
              disabled: h || V.disabled,
              indeterminate: V.indeterminate,
              variant: w,
              color: i ? "error" : $,
              variantSize: k,
              error: i ? " " : void 0
            },
            V.value
          )) })
        ]
      }
    ) }), M = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      i && d && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger", id: y, children: d }),
      !i && u && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral", id: T, children: u })
    ] });
    return m === "left" ? /* @__PURE__ */ l.jsx("div", { className: B(p ? "w-full" : "inline-block", e), children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-4", children: [
      c && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: N,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            c,
            f && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: B("flex-1", !p && "inline-block"), children: [
        G,
        M
      ] })
    ] }) }) : /* @__PURE__ */ l.jsxs("div", { className: B(p ? "w-full" : "inline-block", e), children: [
      c && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: N,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            c,
            f && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      G,
      M
    ] });
  }
);
fc.displayName = "CheckBoxGroup";
const pc = {
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
}, gc = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5"
}, mc = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full"
}, Dm = ({
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
    className: B(
      "inline-flex items-center gap-1.5 font-medium",
      pc[t][r],
      gc[n],
      mc[o],
      s
    ),
    children: [
      i && /* @__PURE__ */ l.jsx("span", { className: "inline-flex items-center", children: /* @__PURE__ */ l.jsx(me, { icon: i, className: "w-4 h-4" }) }),
      e,
      a && /* @__PURE__ */ l.jsx(
        "button",
        {
          onClick: a,
          className: "ml-1 rounded-full hover:bg-black/10 p-0.5",
          "aria-label": "Close",
          children: /* @__PURE__ */ l.jsx(me, { icon: "mdi:close", className: "w-3 h-3" })
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
var bc = Qs.exports;
const hc = /* @__PURE__ */ Vs(bc);
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
const vc = /* @__PURE__ */ Vs($c);
Ce.extend(hc);
Ce.extend(vc);
const yc = He(
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
), to = Pe(
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
    fullWidth: h = !1,
    className: w,
    placeholder: $ = "Select date",
    leftIcon: k,
    rightIcon: v,
    monthsToShow: j = 1,
    valueFormatter: P,
    rangeStart: O,
    rangeEnd: I,
    closeOnSelect: H = !0,
    calendarFooter: z,
    format: F = "DD-MM-YYYY",
    allowInput: D = !1,
    ...g
  }, T) => {
    const [y, N] = ae(!1), [R, b] = ae(e), [C, S] = ae(e || /* @__PURE__ */ new Date()), [A, _] = ae(!1), [E, L] = ae(""), K = J(null), U = J(null), X = J(null), G = J(null), M = J(null);
    Qt(T, () => M.current, []), de(() => {
      b(e || void 0), L(e ? V(e, F) : "");
    }, [e, F]), de(() => {
      L(R ? V(R, F) : "");
    }, [R, F]);
    const V = (te, ke) => {
      const re = te.getDate().toString().padStart(2, "0"), Z = (te.getMonth() + 1).toString().padStart(2, "0"), W = te.getFullYear().toString();
      switch (ke) {
        case "DD-MM-YYYY":
          return `${re}-${Z}-${W}`;
        case "YYYY-MM-DD":
          return `${W}-${Z}-${re}`;
        case "MM-DD-YYYY":
          return `${Z}-${re}-${W}`;
        default:
          return `${re}-${Z}-${W}`;
      }
    }, se = (te, ke) => {
      const Z = te.replace(/[^\d-]/g, "").split("-");
      if (Z.length !== 3) return null;
      let W, ne, ie;
      switch (ke) {
        case "DD-MM-YYYY":
          [W, ne, ie] = Z.map(Number);
          break;
        case "YYYY-MM-DD":
          [ie, ne, W] = Z.map(Number);
          break;
        case "MM-DD-YYYY":
          [ne, W, ie] = Z.map(Number);
          break;
        default:
          [W, ne, ie] = Z.map(Number);
      }
      if (isNaN(W) || isNaN(ne) || isNaN(ie) || ne < 1 || ne > 12 || W < 1 || W > 31 || ie < 1900 || ie > 2099) return null;
      const be = new Date(ie, ne - 1, W);
      return be.getDate() !== W || be.getMonth() !== ne - 1 || be.getFullYear() !== ie ? null : be;
    };
    de(() => {
      if (A && G.current) {
        const te = Ce(C).year(), ke = G.current.querySelectorAll("[data-year]"), re = Array.from(ke).find(
          (Z) => parseInt(Z.getAttribute("data-year") || "0") === te
        );
        re && re.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center"
        });
      }
    }, [A, C]);
    const ce = () => {
      if (!y || !U.current || !X.current) return;
      const { bottom: te, left: ke, width: re, top: Z } = U.current.getBoundingClientRect(), W = X.current, ne = It(), ie = ne.innerHeight - te, be = Z, st = ie < (j === 2 ? 400 : 350), dt = be > ie, Et = st && dt;
      j === 2 ? (Object.assign(W.style, {
        position: "fixed",
        left: `${ke}px`,
        minWidth: "500px",
        width: "auto",
        transform: ""
      }), Et ? Object.assign(W.style, {
        bottom: `${ne.innerHeight - Z + 4}px`,
        top: "auto",
        maxHeight: `${be - 8}px`
      }) : Object.assign(W.style, {
        top: `${te + 4}px`,
        bottom: "auto",
        maxHeight: `${ie - 8}px`
      })) : (Object.assign(W.style, {
        position: "fixed",
        left: `${ke + re / 2}px`,
        width: "320px",
        maxWidth: "100vw",
        transform: "translateX(-50%)"
      }), Et ? Object.assign(W.style, {
        bottom: `${ne.innerHeight - Z + 4}px`,
        top: "auto",
        maxHeight: `${be - 8}px`
      }) : Object.assign(W.style, {
        top: `${te + 4}px`,
        bottom: "auto",
        maxHeight: `${ie - 8}px`
      }));
    };
    de(() => {
      const te = It(), ke = Ze(), re = () => {
        y && ce();
      }, Z = () => {
        y && ce();
      }, W = (ne) => {
        ne.key === "Escape" && y && (N(!1), _(!1));
      };
      return y && (ce(), te.addEventListener("scroll", re, !0), te.addEventListener("resize", Z), ke.addEventListener("keydown", W)), () => {
        te.removeEventListener("scroll", re, !0), te.removeEventListener("resize", Z), ke.removeEventListener("keydown", W);
      };
    }, [y]);
    const fe = (te) => {
      if (O !== void 0 && I !== void 0)
        if (O && I)
          b(te), L(V(te, F)), t == null || t(te);
        else if (O) {
          const re = te;
          Ce(re).isBefore(O), b(re), L(V(re, F)), t == null || t(re), N(!1), _(!1);
        } else
          b(te), L(V(te, F)), t == null || t(te);
      else
        b(te), L(V(te, F)), t == null || t(te), N(!1), _(!1);
    }, ve = () => {
      S(Ce(C).subtract(1, "month").toDate());
    }, Re = () => {
      S(Ce(C).add(1, "month").toDate());
    }, Se = (te) => {
      const ke = Ce(te).startOf("month"), re = Ce(te).endOf("month"), Z = [];
      let W = ke;
      for (; W.isBefore(re) || W.isSame(re, "day"); )
        Z.push(W.toDate()), W = W.add(1, "day");
      return Z;
    }, Ue = (te) => !!(r && Ce(te).isBefore(r, "day") || n && Ce(te).isAfter(n, "day")), je = (te) => {
      if (!D) return;
      const re = te.target.value.replace(/[^\d-]/g, "");
      if (re.length < E.length) {
        L(re);
        return;
      }
      if (re.replace(/-/g, "").length > 8)
        return;
      let W = re;
      F === "DD-MM-YYYY" ? (re.length === 2 && !re.includes("-") || re.length === 5 && re.split("-").length === 2) && (W = re + "-") : F === "YYYY-MM-DD" ? (re.length === 4 && !re.includes("-") || re.length === 7 && re.split("-").length === 2) && (W = re + "-") : F === "MM-DD-YYYY" && (re.length === 2 && !re.includes("-") || re.length === 5 && re.split("-").length === 2) && (W = re + "-"), L(W);
    }, Xe = () => {
      if (!D) return;
      const te = se(E, F);
      if (te) {
        if (r && te < r) {
          L(V(r, F)), b(r), t == null || t(r);
          return;
        }
        if (n && te > n) {
          L(V(n, F)), b(n), t == null || t(n);
          return;
        }
        b(te), t == null || t(te), L(V(te, F));
      } else
        L(R ? V(R, F) : "");
    }, Le = () => {
      D && N(!1);
    }, lt = (te) => {
      D && te.key === "Enter" && (te.preventDefault(), Xe());
    }, tt = (te) => {
      const ke = Ce(C).year(te).toDate();
      S(ke), _(!1);
    }, Qe = () => {
      if (!A) return null;
      const te = Ce(C).year(), ke = 1900, Z = Array.from(
        { length: 2099 - ke + 1 },
        (W, ne) => ke + ne
      );
      return /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: G,
          className: "grid grid-cols-5 gap-2 p-2 overflow-y-auto max-h-[300px]",
          children: Z.map((W) => /* @__PURE__ */ l.jsx(
            "div",
            {
              "data-year": W,
              onClick: () => tt(W),
              className: B(
                W === te && "bg-primary-50 text-primary",
                "text-sm cursor-pointer p-2"
              ),
              children: W
            },
            W
          ))
        }
      );
    }, Be = () => {
      if (!y) return null;
      const te = Ze();
      if (!("body" in te)) return null;
      const ke = Array.from({ length: j }).map(
        (re, Z) => Ce(C).add(Z, "month").toDate()
      );
      return er(
        /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "fixed inset-0 z-[9998]",
              onClick: () => {
                A || N(!1);
              }
            }
          ),
          /* @__PURE__ */ l.jsxs(
            "div",
            {
              ref: X,
              className: "fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-lg",
              onClick: (re) => re.stopPropagation(),
              children: [
                /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between p-2 border-b border-gray-200", children: [
                  /* @__PURE__ */ l.jsx(
                    qe,
                    {
                      onClick: ve,
                      variant: "ghost",
                      size: "sm",
                      leftIcon: "mdi:chevron-left"
                    }
                  ),
                  /* @__PURE__ */ l.jsx("div", { className: "relative", children: /* @__PURE__ */ l.jsx("span", { className: "font-medium text-gray-900", children: j === 1 ? /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ l.jsx("span", { children: Ce(C).format("MMMM") }),
                    /* @__PURE__ */ l.jsxs(
                      "div",
                      {
                        className: "cursor-pointer flex items-center gap-1",
                        onClick: () => _(!A),
                        children: [
                          /* @__PURE__ */ l.jsx("span", { children: Ce(C).format("YYYY") }),
                          /* @__PURE__ */ l.jsx(qe, { variant: "ghost", size: "sm", leftIcon: A ? "mdi:chevron-up" : "mdi:chevron-down" })
                        ]
                      }
                    )
                  ] }) : `${Ce(C).format("MMMM YYYY")} - ${Ce(
                    C
                  ).add(j - 1, "month").format("MMMM YYYY")}` }) }),
                  /* @__PURE__ */ l.jsx(
                    qe,
                    {
                      onClick: Re,
                      variant: "ghost",
                      size: "sm",
                      rightIcon: "mdi:chevron-right"
                    }
                  )
                ] }),
                A ? Qe() : /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: B(
                      j === 2 ? "flex gap-5 p-2 mx-auto w-fit" : "justify-between p-2 mx-auto w-fit"
                    ),
                    children: ke.map((re, Z) => {
                      const W = Se(re), ne = Ce(re).startOf("month").day();
                      return /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ l.jsxs("div", { className: "grid grid-cols-7 gap-y-1 my-1", children: [
                          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                            (ie, be) => {
                              const Ke = be === 0 || be === 6;
                              return /* @__PURE__ */ l.jsx(
                                "div",
                                {
                                  className: B(
                                    "text-center text-xs font-medium text-neutral",
                                    Ke && "text-danger"
                                  ),
                                  children: ie
                                },
                                ie
                              );
                            }
                          ),
                          Array.from({ length: ne }).map(
                            (ie, be) => /* @__PURE__ */ l.jsx("div", {}, `empty-${be}`)
                          ),
                          W.map((ie) => {
                            const be = R && Ce(ie).isSame(R, "day"), Ke = Ue(ie), st = Ce(ie).isSame(
                              re,
                              "month"
                            ), dt = O && I && Ce(ie).isSameOrAfter(O, "day") && Ce(ie).isSameOrBefore(I, "day"), Et = O && Ce(ie).isSame(O, "day"), tr = I && Ce(ie).isSame(I, "day"), Vt = Ce(ie).day() === 0 || Ce(ie).day() === 6, ht = O && I;
                            return /* @__PURE__ */ l.jsx("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ l.jsx(
                              "div",
                              {
                                className: B(
                                  dt && "rounded-none bg-primary-50",
                                  ht && Et && "rounded-l-full",
                                  ht && tr && "rounded-r-full"
                                ),
                                children: /* @__PURE__ */ l.jsx(
                                  "button",
                                  {
                                    onClick: () => !Ke && fe(ie),
                                    disabled: Ke,
                                    className: B(
                                      "p-2 text-sm transition-colors duration-200 w-10 h-10 rounded-full",
                                      Vt && "!text-danger",
                                      be && "bg-primary !text-white hover:bg-primary-600 active:bg-primary-700",
                                      be && !ht && "rounded-full",
                                      !be && !Ke && "hover:bg-primary-50 active:bg-primary-100",
                                      !st && "text-neutral-400",
                                      Ke && "opacity-50 cursor-not-allowed",
                                      // inRange && "bg-primary-50 text-primary-900 rounded-none",
                                      ht && Et && "!bg-primary !text-white !rounded-full",
                                      ht && tr && "!bg-primary !text-white !rounded-full"
                                    ),
                                    children: Ce(ie).format("D")
                                  },
                                  ie.toString()
                                )
                              }
                            ) });
                          })
                        ] }),
                        z
                      ] }, Z);
                    })
                  }
                )
              ]
            }
          )
        ] }),
        te.body
      );
    }, wt = /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: B("relative", !h && "inline-block"),
        ref: U,
        onClick: () => !i && !D && N(!y),
        children: [
          k && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (te) => {
                te.stopPropagation(), i || N(!y);
              },
              children: /* @__PURE__ */ l.jsx(me, { icon: k, className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "input",
            {
              ref: M,
              type: "text",
              value: D ? E : P ? P() : R ? V(R, F) : "",
              placeholder: D ? F : $,
              readOnly: !D,
              maxLength: D ? 10 : void 0,
              onChange: je,
              onBlur: Xe,
              onFocus: Le,
              onKeyDown: lt,
              className: B(
                yc({ variant: d ? "error" : o, size: a, rounded: s, fullWidth: h }),
                k && "pl-10",
                v && "pr-10",
                w
              ),
              disabled: i,
              ...g
            }
          ),
          v && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (te) => {
                te.stopPropagation(), i || N(!y);
              },
              children: /* @__PURE__ */ l.jsx(me, { icon: v, className: "w-4 h-4" })
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
        className: B(h ? "w-full" : "inline-block", w),
        ref: K,
        children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-4", children: [
            f && /* @__PURE__ */ l.jsxs("label", { className: "block text-sm text-neutral-900 pt-2", children: [
              f,
              m && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: B("flex-1", !h && "inline-block"), children: [
              wt,
              kt
            ] })
          ] }),
          Be()
        ]
      }
    ) : /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: B(h ? "w-full" : "inline-block", w),
        ref: K,
        children: [
          f && /* @__PURE__ */ l.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
            f,
            m && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          wt,
          kt,
          Be()
        ]
      }
    );
  }
);
to.displayName = "PrimitiveDatePicker";
const xc = Pe(
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
    const [f, m] = ae([
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
          onChange: (h) => r == null ? void 0 : r(h),
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
      let [p, h] = Array.isArray(t) ? t : f;
      const w = (k) => {
        !p || p && h ? (m([k, void 0]), r == null || r([k, void 0])) : p && !h && (k < p ? (m([k, p]), r == null || r([k, p])) : (m([p, k]), r == null || r([p, k])));
      }, $ = () => {
        if (!p) return "";
        const k = (v) => v ? v.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric"
        }) : "";
        return p && h ? `${k(p)} - ${k(h)}` : k(p);
      };
      return /* @__PURE__ */ l.jsx(
        to,
        {
          ref: c,
          value: p,
          onChange: w,
          monthsToShow: n,
          placeholder: u.placeholder || "Select date range",
          valueFormatter: $,
          rangeStart: p,
          rangeEnd: h,
          closeOnSelect: !!h,
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
xc.displayName = "DatePicker";
const ti = Pe(
  ({ children: e, onClose: t, className: r, ...n }, o) => /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: o,
      className: B("mb-4 flex items-center justify-between", r),
      ...n,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "flex-1", children: e }),
        t && /* @__PURE__ */ l.jsx(
          "button",
          {
            onClick: t,
            className: "rounded-full p-1 text-gray hover:bg-gray-100 hover:text-gray-700",
            "aria-label": "Close dialog",
            children: /* @__PURE__ */ l.jsx(me, { icon: "mdi:close", className: "h-5 w-5" })
          }
        )
      ]
    }
  )
), $a = {
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
}, wc = {
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
}, kc = Pe(
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
    ...h
  }, w) => {
    const [$, k] = ae(e), [v, j] = ae(!1), P = J(!1);
    if (Ds(() => {
      if (e) {
        k(!0), j(!1);
        const T = Ze();
        "body" in T && (f !== "outside" ? (T.body.style.overflow = "hidden", P.current = !0) : P.current = !1);
        const y = requestAnimationFrame(() => j(!0));
        return () => cancelAnimationFrame(y);
      }
      j(!1);
      const g = setTimeout(() => {
        k(!1);
        const T = Ze();
        "body" in T && P.current && (T.body.style.overflow = "", P.current = !1);
      }, m + p);
      return () => clearTimeout(g);
    }, [e, f, m, p]), de(() => {
      const g = (T) => {
        T instanceof KeyboardEvent && T.key === "Escape" && t();
      };
      return e && Ze().addEventListener("keydown", g), () => {
        Ze().removeEventListener("keydown", g);
      };
    }, [e, t]), !$) return null;
    const O = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, I = () => {
      s && t();
    }, H = Ze();
    if (!("body" in H)) return null;
    const z = (g) => {
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
    }, F = (() => {
      if (f === "inside")
        return i === "fullscreen" || c === "left" || c === "right" ? "overflow-y-auto" : "max-h-screen overflow-y-auto";
    })(), D = {
      transitionDuration: `${m}ms`,
      transitionDelay: `${p}ms`
    };
    return er(
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: B(
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
              ref: w,
              className: B(
                "relative transform bg-white p-6 shadow-xl transition-all",
                // Width/Max-width behavior depends on position.
                // If `sizeClassName` is provided, it takes precedence except in fullscreen mode.
                i === "fullscreen" ? $a.fullscreen : d ?? (c === "left" || c === "right" ? wc[i] : $a[i]),
                // Position-based animations
                c === "center" && (v ? "scale-100 opacity-100" : "scale-95 opacity-0"),
                c === "left" && (v ? "translate-x-0 h-full" : "-translate-x-full h-full"),
                c === "right" && (v ? "translate-x-0 h-full" : "translate-x-full h-full"),
                c === "top" && (v ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"),
                c === "bottom" && (v ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"),
                n,
                i === "fullscreen" ? "rounded-none" : z(u),
                // Corner overrides so the edge touching the viewport is not rounded
                c === "left" && "rounded-l-none",
                c === "right" && "rounded-r-none",
                c === "top" && "rounded-t-none",
                c === "bottom" && "rounded-b-none",
                F
              ),
              style: D,
              onClick: (g) => g.stopPropagation(),
              ...h,
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
), Ec = Pe(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ l.jsx(
    "h2",
    {
      ref: n,
      className: B("text-xl font-semibold text-gray-900", t),
      ...r,
      children: e
    }
  )
), Nc = Pe(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ l.jsx("div", { ref: n, className: B("text-gray-600", t), ...r, children: e })
), Pc = Pe(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: n,
      className: B("mt-6 flex justify-end gap-3", t),
      ...r,
      children: e
    }
  )
);
kc.displayName = "Dialog";
Ec.displayName = "DialogTitle";
Nc.displayName = "DialogBody";
Pc.displayName = "DialogActions";
ti.displayName = "DialogHeader";
const Tc = ({
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
}, Cc = {
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
}, Sc = {
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
}, jc = Pe(({
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
  showMaxSize: h = !0,
  icon: w = "mdi:upload",
  name: $
}, k) => {
  const [v, j] = ae(!1), [P, O] = ae(null), I = J(null), H = J(null);
  Qt(k, () => I.current || H.current, []);
  const z = ge((b) => {
    b.preventDefault(), s || j(!0);
  }, [s]), F = ge((b) => {
    b.preventDefault(), j(!1);
  }, []), D = ge((b) => b.size > t ? `File size exceeds ${t / (1024 * 1024)}MB limit` : e[0] !== "*" && !e.some((C) => C.startsWith(".") ? b.name.toLowerCase().endsWith(C.toLowerCase()) : b.type.startsWith(C)) ? `File type not allowed. Allowed types: ${e.join(", ")}` : null, [e, t]), g = ge((b) => {
    if (b.preventDefault(), j(!1), O(null), s) return;
    const C = Array.from(b.dataTransfer.files), S = [], A = [];
    if (C.forEach((_) => {
      const E = D(_);
      E ? A.push(`${_.name}: ${E}`) : S.push(_);
    }), A.length > 0 && O(A.join(`
`)), S.length > 0) {
      const _ = r ? [...n, ...S] : S;
      o == null || o(_);
    }
  }, [s, r, o, D, n]), T = ge((b) => {
    if (O(null), s || !b.target.files) return;
    const C = Array.from(b.target.files), S = [], A = [];
    if (C.forEach((_) => {
      const E = D(_);
      E ? A.push(`${_.name}: ${E}`) : S.push(_);
    }), A.length > 0 && O(A.join(`
`)), S.length > 0) {
      const _ = r ? [...n, ...S] : S;
      o == null || o(_);
    }
    I.current && (I.current.value = "");
  }, [s, r, o, D, n]), y = ge((b) => {
    const C = [...n];
    C.splice(b, 1), o == null || o(C);
  }, [o, n]), N = (b) => b.type.startsWith("image/") ? /* @__PURE__ */ l.jsx(me, { icon: "mdi:image", className: "w-5 h-5" }) : b.type.startsWith("text/") ? /* @__PURE__ */ l.jsx(me, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ l.jsx(me, { icon: "mdi:file", className: "w-5 h-5" }), R = Cc[d];
  return /* @__PURE__ */ l.jsxs("div", { ref: H, className: ye("w-full", a), children: [
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: ye(
          "p-6 text-center transition-colors",
          !f && [
            "border-2 border-dashed",
            R.border,
            R.bg,
            v && R.active,
            !s && R.hover
          ],
          s && "opacity-50 cursor-not-allowed",
          Sc[u],
          va[c],
          !f && "cursor-pointer"
        ),
        onDragOver: z,
        onDragLeave: F,
        onDrop: g,
        onClick: () => {
          var b;
          return !s && !f && ((b = I.current) == null ? void 0 : b.click());
        },
        children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              ref: I,
              type: "file",
              accept: e.join(","),
              multiple: r,
              onChange: T,
              className: "hidden",
              disabled: s,
              name: $
            }
          ),
          f ? /* @__PURE__ */ l.jsx("div", { onClick: () => {
            var b;
            return !s && ((b = I.current) == null ? void 0 : b.click());
          }, children: f }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsx(me, { icon: w, className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
            p && /* @__PURE__ */ l.jsx("p", { className: ye("text-neutral-600", R.text), children: i }),
            h && /* @__PURE__ */ l.jsxs("p", { className: "text-sm text-neutral mt-2", children: [
              "Max file size: ",
              t / (1024 * 1024),
              "MB"
            ] })
          ] })
        ]
      }
    ),
    P && /* @__PURE__ */ l.jsx("p", { className: "mt-2 text-sm text-danger", children: P }),
    m && n.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "mt-4 space-y-2", children: n.map((b, C) => /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: ye(
          "flex items-center justify-between p-2",
          va[c],
          R.bg
        ),
        children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex items-center space-x-2", children: [
            N(b),
            /* @__PURE__ */ l.jsx("span", { className: ye("text-sm", R.text), children: b.name }),
            /* @__PURE__ */ l.jsxs("span", { className: "text-xs text-neutral", children: [
              "(",
              (b.size / 1024).toFixed(1),
              " KB)"
            ] })
          ] }),
          !s && /* @__PURE__ */ l.jsx(
            "button",
            {
              onClick: () => y(C),
              className: "p-1 text-neutral hover:text-danger",
              children: /* @__PURE__ */ l.jsx(me, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${b.name}-${C}`
    )) })
  ] });
});
jc.displayName = "FileUpload";
const Oc = He(
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
), zm = ({
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
  return /* @__PURE__ */ l.jsxs("div", { className: B(Oc({ variant: n, rounded: o }), i), children: [
    r && /* @__PURE__ */ l.jsx(me, { icon: u(), className: B("h-5 w-5 flex-shrink-0", d()) }),
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
        children: /* @__PURE__ */ l.jsx(me, { icon: "mdi:close", className: "h-5 w-5" })
      }
    )
  ] });
}, zn = "select-dropdown-opened", Ic = He(
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
), ri = Pe(
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
    position: h = "bottom",
    fullWidth: w = !1,
    children: $,
    leftIcon: k,
    rightIcon: v,
    name: j,
    ...P
  }, O) => {
    const [I, H] = ae(!1), z = J(null), F = J(null), D = J(null), g = J(null), y = `select-${oe.useId().replace(/:/g, "")}`;
    Qt(O, () => D.current || g.current, []);
    const N = () => {
      if (I && z.current && F.current) {
        const _ = z.current.getBoundingClientRect(), E = F.current, L = It(), K = L.innerHeight - _.bottom, U = _.top, G = _.bottom + E.offsetHeight + 4 >= L.innerHeight, M = U > K, V = G && M;
        h === "bottom" || h === "top" ? (E.style.position = "fixed", E.style.left = `${_.left}px`, E.style.width = `${_.width}px`, h === "bottom" && V ? (E.style.bottom = `${L.innerHeight - _.top + 4}px`, E.style.top = "auto", E.style.maxHeight = `${U - 8}px`) : h === "bottom" ? (E.style.top = `${_.bottom + 4}px`, E.style.bottom = "auto", E.style.maxHeight = `${K - 8}px`) : h === "top" && !V ? (E.style.top = `${_.bottom + 4}px`, E.style.bottom = "auto", E.style.maxHeight = `${K - 8}px`) : (E.style.bottom = `${L.innerHeight - _.top + 4}px`, E.style.top = "auto", E.style.maxHeight = `${U - 8}px`)) : h === "left" ? (E.style.position = "fixed", E.style.right = `${L.innerWidth - _.left + 4}px`, E.style.top = `${_.top}px`, E.style.maxHeight = `${L.innerHeight - _.top - 8}px`) : h === "right" && (E.style.position = "fixed", E.style.left = `${_.right + 4}px`, E.style.top = `${_.top}px`, E.style.maxHeight = `${L.innerHeight - _.top - 8}px`);
      }
    };
    de(() => {
      const _ = It(), E = () => {
        I && N();
      }, L = () => {
        I && N();
      };
      return I && (N(), _.addEventListener("scroll", E, !0), _.addEventListener("resize", L)), () => {
        _.removeEventListener("scroll", E, !0), _.removeEventListener("resize", L);
      };
    }, [I, h]), de(() => {
      D.current && f !== void 0 && (D.current.value = f);
    }, [f]), de(() => {
      const _ = Ze(), E = (K) => {
        K.detail.id !== y && H(!1);
      }, L = (K) => {
        const U = K.target, X = z.current, G = F.current;
        X && G && !X.contains(U) && !G.contains(U) && H(!1);
      };
      return _.addEventListener(zn, E), _.addEventListener("click", L), () => {
        _.removeEventListener(zn, E), _.removeEventListener("click", L);
      };
    }, [y]);
    const R = () => {
      if (p) return;
      if (I) {
        H(!1);
        return;
      }
      Ze().dispatchEvent(
        new CustomEvent(zn, {
          detail: { id: y }
        })
      ), H(!0);
    }, b = () => {
      if (o) {
        const _ = o.find((E) => E.value === f);
        return _ == null ? void 0 : _.label;
      }
      if ($) {
        const E = gr.toArray($).find(
          (L) => dr(L) && "value" in L.props && L.props.value === f
        );
        return dr(E) ? E.props.children : null;
      }
      return null;
    }, C = (_) => {
      if (!p && (m == null || m(_), H(!1), D.current)) {
        D.current.value = _;
        const E = new Event("input", { bubbles: !0 });
        D.current.dispatchEvent(E);
      }
    }, S = () => o ? o.map((_) => /* @__PURE__ */ l.jsx(
      kn,
      {
        value: _.value,
        disabled: _.disabled,
        selected: _.value === f,
        onClick: () => {
          _.onClick && _.onClick(_.value), C(_.value);
        },
        children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
          _.icon,
          _.label
        ] })
      },
      _.value
    )) : $ ? gr.map($, (_) => dr(_) && "value" in _.props ? wn(_, {
      selected: _.props.value === f,
      onClick: () => C(_.props.value)
    }) : null) : null, A = () => {
      if (!I || p) return null;
      const _ = /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: F,
          className: B(
            "fixed z-[9999] min-w-[8rem] border border-neutral-200 bg-white py-1 shadow-lg rounded-lg",
            h === "left" || h === "right" ? "w-max" : "w-full"
          ),
          onClick: (L) => L.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: S()
        }
      ), E = Ze();
      return "body" in E ? er(_, E.body) : null;
    };
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: g,
        className: B(w ? "w-full" : "inline-block"),
        ...P,
        children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "hidden",
              ref: D,
              name: j,
              value: f || "",
              onChange: () => {
              }
            }
          ),
          a && /* @__PURE__ */ l.jsxs(
            "label",
            {
              htmlFor: y,
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
              className: B("relative", !w && "inline-block"),
              onClick: R,
              children: [
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    id: y,
                    ref: z,
                    type: "button",
                    className: B(
                      Ic({ variant: s ? "error" : t, size: r, rounded: n, fullWidth: w }),
                      "flex items-center justify-between",
                      p && "cursor-not-allowed opacity-50",
                      k && "pl-10",
                      v && "pr-10",
                      e
                    ),
                    "aria-haspopup": "listbox",
                    "aria-expanded": I,
                    "aria-describedby": s ? `${y}-error` : d ? `${y}-helper` : void 0,
                    disabled: p,
                    children: [
                      k && /* @__PURE__ */ l.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ l.jsx(me, { icon: k, className: "w-4 h-4" }) }),
                      /* @__PURE__ */ l.jsx("span", { className: "flex items-center gap-2 min-w-0 flex-1", children: /* @__PURE__ */ l.jsx("span", { className: B(
                        "truncate text-left",
                        b() ? "text-neutral-900" : "text-neutral"
                      ), children: b() || c }) }),
                      v ? /* @__PURE__ */ l.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ l.jsx(me, { icon: v, className: "w-4 h-4" }) }) : /* @__PURE__ */ l.jsx(
                        me,
                        {
                          icon: "mdi:chevron-down",
                          className: B("transition-transform flex-shrink-0 ml-2 w-4 h-4", I && "rotate-180")
                        }
                      )
                    ]
                  }
                ),
                A()
              ]
            }
          ),
          s && i && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger", id: `${y}-error`, children: i }),
          !s && d && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral", id: `${y}-helper`, children: d })
        ]
      }
    );
  }
);
ri.displayName = "Select";
const Ac = ({
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
  const c = (p, h) => {
    const w = h - p + 1;
    return Array.from({ length: w }, ($, k) => k + p);
  }, m = (() => {
    const p = o * 2 + 3, h = p + 2;
    if (t > h) {
      const w = Math.max(2, e - o), $ = Math.min(t - 1, e + o);
      let k = c(w, $);
      const v = w > 2, j = t - $ > 1, P = p - (k.length + 1);
      if (v && !j)
        k = [...c(w - P, w - 1), ...k];
      else if (!v && j) {
        const O = c($ + 1, $ + P);
        k = [...k, ...O];
      } else v && j && (k = [...k]);
      return [1, ...k, t];
    }
    return c(1, t);
  })();
  return /* @__PURE__ */ l.jsxs(
    "nav",
    {
      className: ye("flex items-center justify-between space-x-1", a),
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
                children: s.map((p) => /* @__PURE__ */ l.jsx(kn, { value: p.toString(), children: p }, p))
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
              className: ye(
                "px-3 py-1 rounded-md text-sm",
                e === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              ),
              children: /* @__PURE__ */ l.jsx(me, { size: "18", icon: "mdi:chevron-left" })
            }
          ),
          m.map((p, h) => {
            const w = p === e, $ = typeof p == "string" && p === "...";
            return /* @__PURE__ */ l.jsx(
              qe,
              {
                variant: "ghost",
                onClick: () => !$ && n(p),
                className: ye(
                  "px-3 py-1 rounded-md text-sm",
                  w ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  $ && "cursor-default"
                ),
                children: p
              },
              h
            );
          }),
          /* @__PURE__ */ l.jsx(
            qe,
            {
              variant: "ghost",
              onClick: () => n(e + 1),
              disabled: e === t,
              className: ye(
                "px-3 py-1 rounded-md text-sm",
                e === t ? "text-gray-400 cursor-not-allowed" : "text-gray-700"
              ),
              children: /* @__PURE__ */ l.jsx(me, { size: "18", icon: "mdi:chevron-right" })
            }
          )
        ] })
      ]
    }
  );
}, ni = Pe(({
  label: e,
  checked: t = !1,
  disabled: r = !1,
  onChange: n,
  name: o,
  value: a,
  error: s,
  color: i = "primary",
  variantSize: d = "sm",
  ...u
}, c) => {
  const f = (h) => {
    n == null || n(h.target.checked);
  }, m = {
    sm: "h-4 w-4 before:h-2 before:w-2",
    md: "h-5 w-5 before:h-2.5 before:w-2.5",
    lg: "h-6 w-6 before:h-3 before:w-3"
  }, p = {
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
            onChange: f,
            ref: c,
            ...u,
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
              m[d],
              // Colors (currentColor + checked border color)
              p[i],
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
});
ni.displayName = "Radio";
const _c = He(
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
), Rc = Pe(
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
    disabled: h = !1,
    name: w,
    gap: $,
    color: k = "primary",
    radioSize: v = "sm",
    id: j,
    ...P
  }, O) => {
    const I = j || oe.useId(), H = `${I}-helper`, z = `${I}-error`, F = `${I}-group`, D = w || `radio-group-${I}`, [g, T] = oe.useState(n), y = r !== void 0 ? r : g, N = (A) => {
      r === void 0 && T(A), o == null || o(A);
    }, b = ((A) => A === "none" ? "gap-0" : A === "xs" ? "gap-1" : A === "sm" ? "gap-2" : A === "md" ? "gap-3" : A === "lg" ? "gap-4" : A === "xl" ? "gap-6" : null)($), C = /* @__PURE__ */ l.jsx("div", { className: B("relative", !p && "inline-block"), children: /* @__PURE__ */ l.jsx(
      "fieldset",
      {
        ref: O,
        id: F,
        className: B(
          _c({ layout: a, size: s }),
          b,
          e
        ),
        "aria-describedby": i ? z : u ? H : void 0,
        "aria-invalid": i,
        "aria-required": f,
        ...P,
        children: t.map((A) => /* @__PURE__ */ l.jsx(
          ni,
          {
            label: A.label,
            checked: y === A.value,
            onChange: () => N(A.value),
            disabled: h || A.disabled,
            name: D,
            value: A.value,
            color: i ? "error" : k,
            error: i ? " " : void 0,
            variantSize: v
          },
          A.value
        ))
      }
    ) }), S = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      i && d && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger", id: z, children: d }),
      !i && u && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral", id: H, children: u })
    ] });
    return m === "left" ? /* @__PURE__ */ l.jsx("div", { className: B(p ? "w-full" : "inline-block", e), children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-4", children: [
      c && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: F,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            c,
            f && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: B("flex-1", !p && "inline-block"), children: [
        C,
        S
      ] })
    ] }) }) : /* @__PURE__ */ l.jsxs("div", { className: B(p ? "w-full" : "inline-block", e), children: [
      c && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: F,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            c,
            f && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      C,
      S
    ] });
  }
);
Rc.displayName = "RadioGroup";
const ya = He("animate-pulse bg-neutral-200", {
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
}), Lc = ({
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
      className: B(
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
    className: B(
      ya({ variant: r, rounded: n, fullWidth: o, pulseVariant: a }),
      s
    ),
    style: {
      width: !o && typeof e == "number" ? `${e}px` : e,
      height: typeof t == "number" ? `${t}px` : t
    }
  }
), Mc = Pe(({
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
  range: c = !1,
  name: f,
  ...m
}, p) => {
  const h = c, [w, $] = ae(
    n !== void 0 ? n : o !== void 0 ? o : h ? [e, t] : e
  ), [k, v] = ae(null), j = J(null), P = J(null), O = J(null);
  oe.useImperativeHandle(p, () => P.current || O.current, []);
  const I = n !== void 0 ? n : w, [H, z] = h ? Array.isArray(I) ? I : [e, t] : [typeof I == "number" ? I : e, t], F = (E) => Math.min(Math.max(E, e), t), D = (E) => {
    if (i) return;
    let L;
    if (h && Array.isArray(E) ? L = [F(E[0]), F(E[1])] : !h && typeof E == "number" ? L = F(E) : L = h ? [e, t] : e, n === void 0 && $(L), a == null || a(L), P.current) {
      P.current.value = JSON.stringify(L);
      const K = new Event("input", { bubbles: !0 });
      P.current.dispatchEvent(K);
    }
  }, g = (E) => {
    if (!j.current) return e;
    const L = j.current.getBoundingClientRect(), U = (E - L.left) / L.width, X = e + (t - e) * U, G = Math.round(X / r) * r;
    return F(G);
  }, T = (E) => (L) => {
    i || (v(E), L.stopPropagation());
  }, y = (E) => {
    if (!i)
      if (!h)
        v(0), N(E, 0);
      else {
        const L = g(E.clientX), K = Math.abs(L - H), U = Math.abs(L - z), X = K < U ? 0 : 1;
        v(X), N(E, X);
      }
  }, N = oe.useCallback((E, L) => {
    const K = g(E.clientX);
    if (!h)
      D(K);
    else {
      let U = [H, z];
      L === 0 ? U = [Math.min(K, z - r), z] : U = [H, Math.max(K, H + r)], U[0] > U[1] && (U = [U[1], U[0]]), D(U);
    }
  }, [h, H, z, r, D, g]), R = oe.useRef(k);
  R.current = k;
  const b = oe.useCallback(function(E) {
    R.current === null || i || N(E, R.current);
  }, [i, N]), C = oe.useCallback(function() {
    v(null);
  }, []);
  de(() => {
    if (k !== null) {
      const E = It();
      return E.addEventListener("mousemove", b), E.addEventListener("mouseup", C), () => {
        E.removeEventListener("mousemove", b), E.removeEventListener("mouseup", C);
      };
    }
  }, [k, b, C]);
  const S = (E) => (E - e) / (t - e) * 100, A = S(H), _ = S(z);
  return /* @__PURE__ */ l.jsxs("div", { ref: O, className: ye("relative w-full", s), ...m, children: [
    /* @__PURE__ */ l.jsx(
      "input",
      {
        type: "hidden",
        ref: P,
        name: f,
        value: JSON.stringify(I),
        onChange: () => {
        }
      }
    ),
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: j,
        className: ye(
          "relative h-2 bg-gray-200 rounded-full cursor-pointer",
          i && "opacity-50 cursor-not-allowed"
        ),
        onMouseDown: y,
        children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "absolute h-full bg-primary rounded-full",
              style: { left: `${h ? A : 0}%`, width: `${h ? _ - A : A}%` }
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: ye(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                i && "cursor-not-allowed"
              ),
              style: { left: `${A}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: T(0)
            }
          ),
          h && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: ye(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                i && "cursor-not-allowed"
              ),
              style: { left: `${_}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: T(1)
            }
          )
        ]
      }
    ),
    u.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "flex justify-between mt-2", children: u.map((E) => /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "text-xs text-gray",
        style: { left: `${(E.value - e) / (t - e) * 100}%` },
        children: E.label
      },
      E.value
    )) }),
    d && /* @__PURE__ */ l.jsx("div", { className: "mt-2 text-sm text-gray-600", children: h ? `${H} - ${z}` : H })
  ] });
});
Mc.displayName = "Slider";
const Fc = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}, Dc = {
  primary: "text-primary",
  warning: "text-warning",
  default: "text-default-400"
}, Gm = ({
  rating: e,
  maxRating: t = 5,
  size: r = "md",
  color: n = "primary",
  readOnly: o = !1,
  onRatingChange: a,
  className: s
}) => {
  const [i, d] = ae(null), u = (p) => {
    o || d(p);
  }, c = () => {
    o || d(null);
  }, f = (p) => {
    !o && a && a(p);
  }, m = i !== null ? i : e;
  return /* @__PURE__ */ l.jsx("div", { className: B("flex items-center gap-1", s), children: [...Array(t)].map((p, h) => {
    const w = h + 1, $ = w <= m, k = i !== null && w <= i;
    return /* @__PURE__ */ l.jsx(
      "button",
      {
        className: B(
          "transition-colors duration-200",
          Fc[r],
          $ || k ? Dc[n] : "text-default-200",
          !o && "cursor-pointer"
        ),
        onMouseEnter: () => u(w),
        onMouseLeave: c,
        onClick: () => f(w),
        disabled: o,
        "aria-label": `Rate ${w} out of ${t}`,
        children: /* @__PURE__ */ l.jsx(
          me,
          {
            icon: $ || k ? "mdi:star" : "mdi:star-outline",
            className: "w-full h-full"
          }
        )
      },
      h
    );
  }) });
}, zc = {
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
}, Gc = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4"
}, Bm = ({
  status: e,
  size: t = "md",
  withLabel: r = !1,
  className: n
}) => {
  const { bgColor: o, label: a } = zc[e], s = Gc[t];
  return /* @__PURE__ */ l.jsxs("div", { className: B("flex items-center gap-2", n), children: [
    /* @__PURE__ */ l.jsx("div", { className: B("rounded-full animate-pulse", o, s) }),
    r && /* @__PURE__ */ l.jsx("span", { className: "text-sm", children: a })
  ] });
}, oi = (e, t) => {
  if (t) return t;
  switch (e) {
    case "completed":
      return "mdi:check";
    case "active":
      return "mdi:circle-medium";
    default:
      return "mdi:circle-outline";
  }
}, ai = (e) => {
  switch (e) {
    case "completed":
      return "text-white bg-primary ring-4 ring-primary-50";
    case "active":
      return "text-primary bg-primary-50 ring-4 ring-primary-50";
    default:
      return "text-neutral bg-neutral-50 ring-4 ring-neutral-50";
  }
}, Bc = ({
  steps: e,
  activeStep: t,
  className: r,
  variant: n = "default"
}) => /* @__PURE__ */ l.jsx("div", { className: B("flex flex-row items-center w-full justify-between", r), children: e.map((o, a) => {
  const s = a < t ? "completed" : a === t ? "active" : "pending";
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "flex items-center flex-1",
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: B(
          "flex flex-col items-center z-10",
          n === "default" ? "gap-4" : "gap-2",
          n === "default" ? "px-5" : "px-3"
        ), children: [
          n === "default" && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: B(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                ai(s)
              ),
              children: /* @__PURE__ */ l.jsx(
                me,
                {
                  icon: oi(s, o.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ l.jsx(
              "span",
              {
                className: B(
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
          Tc,
          {
            className: B(
              "transition-all duration-200",
              a < t ? "bg-primary" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    a
  );
}) }), Vc = ({
  steps: e,
  activeStep: t,
  className: r,
  variant: n = "default"
}) => /* @__PURE__ */ l.jsx("div", { className: B("flex flex-col items-start gap-8", r), children: e.map((o, a) => {
  const s = a < t ? "completed" : a === t ? "active" : "pending";
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "flex flex-row w-full items-center relative",
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: B(
          "flex flex-row items-center z-10",
          n === "default" ? "gap-4" : "gap-2"
        ), children: [
          n === "default" && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: B(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                ai(s)
              ),
              children: /* @__PURE__ */ l.jsx(
                me,
                {
                  icon: oi(s, o.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-start", children: [
            /* @__PURE__ */ l.jsx(
              "span",
              {
                className: B(
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
            className: B(
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
}) }), Vm = ({
  orientation: e = "horizontal",
  variant: t = "default",
  ...r
}) => e === "vertical" ? /* @__PURE__ */ l.jsx(Vc, { variant: t, ...r }) : /* @__PURE__ */ l.jsx(Bc, { variant: t, ...r }), Hc = Pe(({
  label: e,
  checked: t = !1,
  disabled: r = !1,
  onChange: n,
  size: o = "md",
  ...a
}, s) => {
  const i = (c) => {
    n && n(c.target.checked);
  }, d = {
    sm: "w-8 h-4",
    md: "w-11 h-6",
    lg: "w-14 h-7"
  }, u = {
    sm: "w-3 h-3",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  return /* @__PURE__ */ l.jsxs(
    "label",
    {
      className: ye(
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
              onChange: i,
              ref: s,
              ...a
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: ye(
                "block rounded-full transition-colors duration-200 ease-in-out",
                d[o],
                t ? "bg-primary" : "bg-gray-200 dark:bg-gray-700",
                r && "cursor-not-allowed"
              )
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: ye(
                "absolute rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out",
                u[o],
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
});
Hc.displayName = "Switch";
const Hm = ({
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
  var k, v;
  const [u, c] = ae(t || ((k = e[0]) == null ? void 0 : k.id) || ""), f = oe.useRef(null), [m, p] = ae({ left: 0, width: 0 });
  oe.useEffect(() => {
    var j;
    if (r === "active-underline" && f.current) {
      const P = f.current.getBoundingClientRect(), O = (j = f.current.parentElement) == null ? void 0 : j.getBoundingClientRect();
      O && p({
        left: P.left - O.left,
        width: P.width
      });
    }
  }, [r, e, u]), oe.useEffect(() => {
    if (r === "active-underline") {
      const j = () => {
        var P;
        if (f.current) {
          const O = f.current.getBoundingClientRect(), I = (P = f.current.parentElement) == null ? void 0 : P.getBoundingClientRect();
          I && p({
            left: O.left - I.left,
            width: O.width
          });
        }
      };
      return window.addEventListener("resize", j), () => window.removeEventListener("resize", j);
    }
  }, [r, e, u]);
  const h = ge((j) => {
    c(j), d == null || d(j);
  }, [d]), w = () => {
    switch (n) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  }, $ = (j, P) => {
    const O = ye(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      w(),
      P && "opacity-50 cursor-not-allowed",
      !P && "cursor-pointer"
    );
    switch (r) {
      case "pills":
        return ye(
          O,
          "rounded-full",
          j ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return ye(
          O,
          "border-b-2",
          j ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      case "active-underline":
        return ye(
          O,
          "border-b-0",
          j ? "text-primary" : "text-gray-600 dark:text-gray-300 hover:text-primary"
        );
      default:
        return ye(
          O,
          "border-b-2",
          j ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: ye("w-full", o), children: [
    /* @__PURE__ */ l.jsxs("div", { className: ye(
      r === "active-underline" ? "relative" : "",
      "flex space-x-1",
      r === "pills" && "space-x-2 border-b-0",
      r !== "active-underline" && "border-b border-gray-200 dark:border-gray-700",
      a
    ), children: [
      e.map((j) => {
        const P = j.id === u, O = !!j.disabled;
        return /* @__PURE__ */ l.jsxs(
          "button",
          {
            ref: r === "active-underline" && P ? f : void 0,
            onClick: () => !O && h(j.id),
            disabled: O,
            className: ye(
              $(P, O),
              s
            ),
            children: [
              j.icon && /* @__PURE__ */ l.jsx(
                me,
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
    /* @__PURE__ */ l.jsx("div", { className: ye("mt-4", i), children: (v = e.find((j) => j.id === u)) == null ? void 0 : v.content })
  ] });
}, Rr = ({
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
  return /* @__PURE__ */ l.jsx(s, { className: B("text-gray-900", o[e], r), children: t });
}, Uc = He(
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
), Kc = Pe(
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
    minRows: h = 3,
    maxRows: w = 10,
    id: $,
    value: k,
    ...v
  }, j) => {
    const P = $ || oe.useId(), O = `${P}-helper`, I = `${P}-error`, H = `${P}-char-count`, z = typeof k == "string" ? k.length : 0, F = p && z > p, D = /* @__PURE__ */ l.jsxs("div", { className: B("relative", !c && "inline-block"), children: [
      /* @__PURE__ */ l.jsx(
        "textarea",
        {
          id: P,
          ref: j,
          rows: h,
          maxLength: p,
          className: B(
            Uc({
              variant: o ? "error" : t,
              size: r,
              rounded: n,
              fullWidth: c,
              resize: f === "none" ? "none" : f
            }),
            e
          ),
          "aria-describedby": B(
            o ? I : s ? O : void 0,
            m ? H : void 0
          ),
          "aria-invalid": o,
          "aria-required": d,
          style: {
            minHeight: `${h * 1.5}em`,
            maxHeight: `${w * 1.5}em`
          },
          value: k,
          ...v
        }
      ),
      m && p && /* @__PURE__ */ l.jsx("div", { className: "absolute bottom-2 right-2 text-xs text-neutral-500 bg-white px-1 rounded", children: /* @__PURE__ */ l.jsxs("span", { id: H, className: F ? "text-danger" : "", children: [
        z,
        "/",
        p
      ] }) })
    ] }), g = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      o && a && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger", id: I, children: a }),
      !o && s && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral", id: O, children: s }),
      m && p && !o && !s && /* @__PURE__ */ l.jsxs("p", { className: "mt-1 text-xs text-neutral", id: H, children: [
        z,
        " of ",
        p,
        " characters"
      ] })
    ] });
    return u === "left" ? /* @__PURE__ */ l.jsx("div", { className: B(c ? "w-full" : "inline-block", e), children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-4", children: [
      i && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: P,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            i,
            d && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: B("flex-1", !c && "inline-block"), children: [
        D,
        g
      ] })
    ] }) }) : /* @__PURE__ */ l.jsxs("div", { className: B(c ? "w-full" : "inline-block", e), children: [
      i && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: P,
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
Kc.displayName = "Textarea";
const Gn = "timepicker-dropdown-opened", Wc = He(
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
), si = Pe(
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
    placeholder: h = "Select time",
    leftIcon: w,
    rightIcon: $,
    valueFormatter: k,
    closeOnSelect: v = !0,
    ...j
  }, P) => {
    const [O, I] = ae(!1), [H, z] = ae(e || ""), [F, D] = ae(0), [g, T] = ae(0), [y, N] = ae(!0), R = J(null), b = J(null), C = J(null), A = `timepicker-${oe.useId().replace(/:/g, "")}`, _ = () => {
      if (!O || !b.current || !C.current) return;
      const M = b.current.getBoundingClientRect(), V = C.current, ce = It().innerHeight - M.bottom;
      V.style.top = `${M.bottom + 4}px`, V.style.bottom = "auto", V.style.left = `${M.left}px`, V.style.maxHeight = `${ce - 8}px`, V.style.width = `${M.width}px`;
    };
    de(() => {
      const M = It(), V = Ze(), se = () => {
        O && _();
      }, ce = () => {
        O && _();
      }, fe = (Re) => {
        Re.detail.id !== A && I(!1);
      }, ve = (Re) => {
        const Se = Re.target;
        R.current && C.current && !R.current.contains(Se) && !C.current.contains(Se) && I(!1);
      };
      return O && (_(), M.addEventListener("scroll", se, !0), M.addEventListener("resize", ce)), V.addEventListener(Gn, fe), V.addEventListener("mousedown", ve), () => {
        M.removeEventListener("scroll", se, !0), M.removeEventListener("resize", ce), V.removeEventListener(Gn, fe), V.removeEventListener("mousedown", ve);
      };
    }, [O, A]);
    const E = () => {
      s || (O || Ze().dispatchEvent(
        new CustomEvent(Gn, {
          detail: { id: A }
        })
      ), I(!O));
    };
    de(() => {
      if (e) {
        z(e);
        const [M, V] = e.split(":").map(Number);
        r ? D(M) : (D(M % 12 || 12), N(M < 12)), T(V);
      }
    }, [e, r]);
    const L = () => {
      const V = `${(r || y ? F : F + 12).toString().padStart(2, "0")}:${g.toString().padStart(2, "0")}`;
      z(V), t == null || t(V), v && I(!1);
    }, K = () => r ? Array.from({ length: 24 }, (M, V) => V) : Array.from({ length: 12 }, (M, V) => V + 1), U = () => Array.from({ length: 60 }, (M, V) => V), X = k ? k(H) : H, G = Ze();
    return "body" in G ? /* @__PURE__ */ l.jsxs("div", { ref: R, className: B("relative", m && "w-full", p), children: [
      u && /* @__PURE__ */ l.jsxs(
        "label",
        {
          className: B(
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
          onClick: E,
          children: [
            w && /* @__PURE__ */ l.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ l.jsx(me, { icon: w, size: 20 }) }),
            /* @__PURE__ */ l.jsx(
              "input",
              {
                ref: P,
                type: "text",
                value: X,
                placeholder: h,
                readOnly: !0,
                className: B(
                  Wc({ variant: n, size: o, rounded: a, fullWidth: m }),
                  w && "pl-10",
                  $ && "pr-10",
                  "text-left"
                ),
                disabled: s,
                ...j
              }
            ),
            $ && /* @__PURE__ */ l.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ l.jsx(me, { icon: $, size: 20 }) })
          ]
        }
      ),
      O && er(
        /* @__PURE__ */ l.jsx(
          "div",
          {
            ref: C,
            className: "fixed z-[9999] w-fit rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (M) => M.stopPropagation(),
            children: /* @__PURE__ */ l.jsxs("div", { className: "p-0", children: [
              /* @__PURE__ */ l.jsxs(Js, { variant: "ghost", className: B(
                "flex mx-2 my-1 p-0",
                r ? "justify-start gap-8" : "justify-start gap-4"
              ), children: [
                /* @__PURE__ */ l.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ l.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ l.jsx("div", { className: "flex flex-col gap-2", children: K().map((M) => /* @__PURE__ */ l.jsx(
                  qe,
                  {
                    variant: "ghost",
                    onClick: () => D(M),
                    className: B(F === M && "bg-primary text-white"),
                    children: M.toString().padStart(2, "0")
                  },
                  M
                )) }) }) }),
                /* @__PURE__ */ l.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ l.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ l.jsx("div", { className: "flex flex-col gap-2", children: U().map((M) => /* @__PURE__ */ l.jsx(
                  qe,
                  {
                    variant: "ghost",
                    onClick: () => T(M),
                    className: B(g === M && "bg-primary text-white"),
                    children: M.toString().padStart(2, "0")
                  },
                  M
                )) }) }) }),
                !r && /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ l.jsx(
                    qe,
                    {
                      variant: "ghost",
                      onClick: () => N(!0),
                      className: B(y && "bg-primary text-white"),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    qe,
                    {
                      variant: "ghost",
                      onClick: () => N(!1),
                      className: B(!y && "bg-primary text-white"),
                      children: "PM"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "mb-2 mx-2", children: /* @__PURE__ */ l.jsx(
                qe,
                {
                  variant: "primary",
                  onClick: L,
                  size: "sm",
                  fullWidth: !0,
                  children: "Select"
                }
              ) })
            ] })
          }
        ),
        G.body
      ),
      i && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-sm text-danger-600", children: i }),
      d && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-sm text-gray", children: d })
    ] }) : null;
  }
);
si.displayName = "PrimitiveTimePicker";
const Yc = Pe(({
  value: e,
  onChange: t,
  valueFormatter: r,
  closeOnSelect: n,
  ...o
}, a) => /* @__PURE__ */ l.jsx(
  si,
  {
    ref: a,
    value: e,
    onChange: t,
    valueFormatter: r,
    closeOnSelect: n,
    ...o
  }
));
Yc.displayName = "TimePicker";
const Xc = He(
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
), Zc = He(
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
), qc = Pe(
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
    name: c,
    ...f
  }, m) => {
    const p = oe.useId(), h = `${p}-helper`, w = `${p}-error`, $ = J(null), k = J(null), v = J(null);
    Qt(m, () => $.current || v.current, []), de(() => {
      if ($.current) {
        $.current.checked = e;
        const P = new Event("change", { bubbles: !0 });
        $.current.dispatchEvent(P);
      }
    }, [e]);
    const j = () => {
      const P = !e;
      if (t == null || t(P), $.current) {
        $.current.checked = P;
        const O = new Event("change", { bubbles: !0 });
        $.current.dispatchEvent(O);
      }
    };
    return /* @__PURE__ */ l.jsxs("div", { ref: v, className: "inline-flex flex-col gap-1.5", children: [
      /* @__PURE__ */ l.jsx(
        "input",
        {
          type: "checkbox",
          ref: $,
          name: c,
          checked: e,
          onChange: () => {
          },
          className: "sr-only",
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            role: "switch",
            "aria-checked": e,
            "data-state": e ? "checked" : "unchecked",
            onClick: j,
            ref: k,
            className: B(Xc({ variant: d ? "danger" : r, size: n }), u),
            "aria-describedby": d ? w : s ? h : void 0,
            "aria-invalid": d,
            "aria-required": a,
            ...f,
            children: /* @__PURE__ */ l.jsx(
              "span",
              {
                "data-state": e ? "checked" : "unchecked",
                className: B(
                  Zc({ size: n }),
                  e ? "translate-x-5" : "translate-x-1"
                )
              }
            )
          }
        ),
        o && /* @__PURE__ */ l.jsxs(
          "label",
          {
            htmlFor: p,
            className: "text-sm text-neutral-900",
            children: [
              o,
              a && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ]
          }
        )
      ] }),
      d && i && /* @__PURE__ */ l.jsx("p", { className: "text-xs text-danger", id: w, children: i }),
      !d && s && /* @__PURE__ */ l.jsx("p", { className: "text-xs text-neutral", id: h, children: s })
    ] });
  }
);
qc.displayName = "Toggle";
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
function Jc(e) {
  return {
    UNSAFE_getDOMNode() {
      return e.current;
    }
  };
}
function ii(e) {
  const t = J(null);
  return Qt(e, () => t.current), t;
}
process.env.NODE_ENV;
process.env.NODE_ENV;
function Qc(e) {
  return typeof e == "function";
}
var Ye = (e) => e ? "true" : void 0;
function li(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = li(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Xt(...e) {
  for (var t = 0, r, n, o = ""; t < e.length; )
    (r = e[t++]) && (n = li(r)) && (o && (o += " "), o += n);
  return o;
}
function eu(e) {
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
function tu(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
var xa = {};
function ru(e, t, ...r) {
  const o = `[Hero UI] : ${e}`;
  if (!(typeof console > "u") && !xa[o] && (xa[o] = !0, process.env.NODE_ENV !== "production"))
    return console.warn(o, r);
}
function di(...e) {
  return (...t) => {
    for (let r of e)
      typeof r == "function" && r(...t);
  };
}
var wa = /* @__PURE__ */ new Map();
function nu(e, t) {
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
      90 ? t[o] = di(a, s) : (o === "className" || o === "UNSAFE_className") && typeof a == "string" && typeof s == "string" ? t[o] = Xt(a, s) : o === "id" && a && s ? t.id = nu(a, s) : t[o] = s !== void 0 ? s : a;
    }
  }
  return t;
}
function ou(...e) {
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
function au(e, t) {
  if (e != null) {
    if (Qc(e)) {
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
function su(...e) {
  return (t) => {
    e.forEach((r) => au(r, t));
  };
}
var iu = (e, t) => {
  var r;
  let n = [];
  const o = (r = gr.map(e, (s) => dr(s) && s.type === t ? (n.push(s), null) : s)) == null ? void 0 : r.filter(Boolean), a = n.length >= 0 ? n : void 0;
  return [o, a];
}, lu = /* @__PURE__ */ new Set([
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
]), du = /* @__PURE__ */ new Set([
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
]), Ea = /^(data-.*)$/, cu = /^(aria-.*)$/, Hr = /^(on[A-Z].*)$/;
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
    a != null && a.has(c) || s != null && s.has(c) && Hr.test(c) || Hr.test(c) && !du.has(c) || i && Ea.test(c) || d && Hr.test(c) || (Object.prototype.hasOwnProperty.call(e, c) && (lu.has(c) || r && cu.test(c) || o != null && o.has(c) || Ea.test(c)) || Hr.test(c)) && (u[c] = e[c]);
  return u;
}
var [Um, En] = Ao({
  name: "ProviderContext",
  strict: !1
});
const uu = /* @__PURE__ */ new Set([
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
]), fu = /* @__PURE__ */ new Set([
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
function pu(e) {
  if (Intl.Locale) {
    let r = new Intl.Locale(e).maximize(), n = typeof r.getTextInfo == "function" ? r.getTextInfo() : r.textInfo;
    if (n) return n.direction === "rtl";
    if (r.script) return uu.has(r.script);
  }
  let t = e.split("-")[0];
  return fu.has(t);
}
const cn = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, ci = /* @__PURE__ */ oe.createContext(cn), gu = /* @__PURE__ */ oe.createContext(!1);
let mu = !!(typeof window < "u" && window.document && window.document.createElement), Bn = /* @__PURE__ */ new WeakMap();
function bu(e = !1) {
  let t = mt(ci), r = J(null);
  if (r.current === null && !e) {
    var n, o;
    let a = (o = oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || o === void 0 || (n = o.ReactCurrentOwner) === null || n === void 0 ? void 0 : n.current;
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
function hu(e) {
  let t = mt(ci);
  t === cn && !mu && process.env.NODE_ENV !== "production" && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let r = bu(!!e), n = t === cn && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${n}-${r}`;
}
function $u(e) {
  let t = oe.useId(), [r] = ae(Nn()), n = r || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${cn.prefix}`;
  return e || `${n}-${t}`;
}
const vu = typeof oe.useId == "function" ? $u : hu;
function yu() {
  return !1;
}
function xu() {
  return !0;
}
function wu(e) {
  return () => {
  };
}
function Nn() {
  return typeof oe.useSyncExternalStore == "function" ? oe.useSyncExternalStore(wu, yu, xu) : mt(gu);
}
const ku = Symbol.for("react-aria.i18n.locale");
function ui() {
  let e = typeof window < "u" && window[ku] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      e
    ]);
  } catch {
    e = "en-US";
  }
  return {
    locale: e,
    direction: pu(e) ? "rtl" : "ltr"
  };
}
let ro = ui(), jr = /* @__PURE__ */ new Set();
function Pa() {
  ro = ui();
  for (let e of jr) e(ro);
}
function Eu() {
  let e = Nn(), [t, r] = ae(ro);
  return de(() => (jr.size === 0 && window.addEventListener("languagechange", Pa), jr.add(r), () => {
    jr.delete(r), jr.size === 0 && window.removeEventListener("languagechange", Pa);
  }), []), e ? {
    locale: "en-US",
    direction: "ltr"
  } : t;
}
const Nu = /* @__PURE__ */ oe.createContext(null);
function fi() {
  let e = Eu();
  return mt(Nu) || e;
}
const Pu = Symbol.for("react-aria.i18n.locale"), Tu = Symbol.for("react-aria.i18n.strings");
let or;
class Pn {
  /** Returns a localized string for the given key and locale. */
  getStringForLocale(t, r) {
    let o = this.getStringsForLocale(r)[t];
    if (!o) throw new Error(`Could not find intl message ${t} in ${r} locale`);
    return o;
  }
  /** Returns all localized strings for the given locale. */
  getStringsForLocale(t) {
    let r = this.strings[t];
    return r || (r = Cu(t, this.strings, this.defaultLocale), this.strings[t] = r), r;
  }
  static getGlobalDictionaryForPackage(t) {
    if (typeof window > "u") return null;
    let r = window[Pu];
    if (or === void 0) {
      let o = window[Tu];
      if (!o) return null;
      or = {};
      for (let a in o) or[a] = new Pn({
        [r]: o[a]
      }, r);
    }
    let n = or == null ? void 0 : or[t];
    if (!n) throw new Error(`Strings for package "${t}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
    return n;
  }
  constructor(t, r = "en-US") {
    this.strings = Object.fromEntries(Object.entries(t).filter(([, n]) => n)), this.defaultLocale = r;
  }
}
function Cu(e, t, r = "en-US") {
  if (t[e]) return t[e];
  let n = Su(e);
  if (t[n]) return t[n];
  for (let o in t)
    if (o.startsWith(n + "-")) return t[o];
  return t[r];
}
function Su(e) {
  return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
const Ta = /* @__PURE__ */ new Map(), Ca = /* @__PURE__ */ new Map();
class ju {
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
function Ou(e) {
  let t = Sa.get(e);
  return t || (t = new Pn(e), Sa.set(e, t)), t;
}
function Iu(e, t) {
  return t && Pn.getGlobalDictionaryForPackage(t) || Ou(e);
}
function Au(e, t) {
  let { locale: r } = fi(), n = Iu(e, t);
  return _e(() => new ju(r, n), [
    r,
    n
  ]);
}
function _u(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Ru(e, t, r) {
  _u(e, t), t.set(e, r);
}
const De = typeof document < "u" ? oe.useLayoutEffect : () => {
};
var Vn;
const Lu = (Vn = oe.useInsertionEffect) !== null && Vn !== void 0 ? Vn : De;
function ut(e) {
  const t = J(null);
  return Lu(() => {
    t.current = e;
  }, [
    e
  ]), ge((...r) => {
    const n = t.current;
    return n == null ? void 0 : n(...r);
  }, []);
}
function Mu(e) {
  let [t, r] = ae(e), n = J(null), o = ut(() => {
    if (!n.current) return;
    let s = n.current.next();
    if (s.done) {
      n.current = null;
      return;
    }
    t === s.value ? o() : r(s.value);
  });
  De(() => {
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
let Fu = !!(typeof window < "u" && window.document && window.document.createElement), ur = /* @__PURE__ */ new Map(), Or;
typeof FinalizationRegistry < "u" && (Or = new FinalizationRegistry((e) => {
  ur.delete(e);
}));
function Tn(e) {
  let [t, r] = ae(e), n = J(null), o = vu(t), a = J(null);
  if (Or && Or.register(a, o), Fu) {
    const s = ur.get(o);
    s && !s.includes(n) ? s.push(n) : ur.set(o, [
      n
    ]);
  }
  return De(() => {
    let s = o;
    return () => {
      Or && Or.unregister(a), ur.delete(s);
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
function Du(e, t) {
  if (e === t) return e;
  let r = ur.get(e);
  if (r)
    return r.forEach((o) => o.current = t), t;
  let n = ur.get(t);
  return n ? (n.forEach((o) => o.current = e), e) : t;
}
function zu(e = []) {
  let t = Tn(), [r, n] = Mu(t), o = ge(() => {
    n(function* () {
      yield t, yield document.getElementById(t) ? t : void 0;
    });
  }, [
    t,
    n
  ]);
  return De(o, [
    t,
    o,
    ...e
  ]), r;
}
function Lr(...e) {
  return (...t) => {
    for (let r of e) typeof r == "function" && r(...t);
  };
}
const Ne = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, pt = (e) => e && "window" in e && e.window === e ? e : Ne(e).defaultView || window;
function Gu(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function Bu(e) {
  return Gu(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let Vu = !1;
function Cn() {
  return Vu;
}
function Ae(e, t) {
  if (!Cn()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let r = t;
  for (; r !== null; ) {
    if (r === e) return !0;
    r.tagName === "SLOT" && r.assignedSlot ? r = r.assignedSlot.parentNode : Bu(r) ? r = r.host : r = r.parentNode;
  }
  return !1;
}
const at = (e = document) => {
  var t;
  if (!Cn()) return e.activeElement;
  let r = e.activeElement;
  for (; r && "shadowRoot" in r && (!((t = r.shadowRoot) === null || t === void 0) && t.activeElement); ) r = r.shadowRoot.activeElement;
  return r;
};
function we(e) {
  return Cn() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
class Hu {
  get currentNode() {
    return this._currentNode;
  }
  set currentNode(t) {
    if (!Ae(this.root, t)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
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
    return Ae(t, r) ? (r && (this.currentNode = r), r) : (this.currentNode = t, null);
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
function Uu(e, t, r, n) {
  return Cn() ? new Hu(e, t, r, n) : e.createTreeWalker(t, r, n);
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
      90 ? t[o] = Lr(a, s) : (o === "className" || o === "UNSAFE_className") && typeof a == "string" && typeof s == "string" ? t[o] = ye(a, s) : o === "id" && a && s ? t.id = Du(a, s) : t[o] = s !== void 0 ? s : a;
    }
  }
  return t;
}
const Ku = /* @__PURE__ */ new Set([
  "id"
]), Wu = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), Yu = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), Xu = /* @__PURE__ */ new Set([
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
]), Zu = /^(data-.*)$/;
function Ro(e, t = {}) {
  let { labelable: r, isLink: n, global: o, events: a = o, propNames: s } = t, i = {};
  for (const d in e) Object.prototype.hasOwnProperty.call(e, d) && (Ku.has(d) || r && Wu.has(d) || n && Yu.has(d) || o && Xu.has(d) || a && ja.has(d) || d.endsWith("Capture") && ja.has(d.slice(0, -7)) || s != null && s.has(d) || Zu.test(d)) && (i[d] = e[d]);
  return i;
}
function mr(e) {
  if (qu()) e.focus({
    preventScroll: !0
  });
  else {
    let t = Ju(e);
    e.focus(), Qu(t);
  }
}
let Ur = null;
function qu() {
  if (Ur == null) {
    Ur = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return Ur = !0, !0;
        }
      });
    } catch {
    }
  }
  return Ur;
}
function Ju(e) {
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
function Qu(e) {
  for (let { element: t, scrollTop: r, scrollLeft: n } of e)
    t.scrollTop = r, t.scrollLeft = n;
}
function Sn(e) {
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
const br = Rt(function() {
  return Lo(/^Mac/i);
}), ef = Rt(function() {
  return Lo(/^iPhone/i);
}), pi = Rt(function() {
  return Lo(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  br() && navigator.maxTouchPoints > 1;
}), jn = Rt(function() {
  return ef() || pi();
});
Rt(function() {
  return br() || jn();
});
const gi = Rt(function() {
  return Sn(/AppleWebKit/i) && !mi();
}), mi = Rt(function() {
  return Sn(/Chrome/i);
}), Mo = Rt(function() {
  return Sn(/Android/i);
}), tf = Rt(function() {
  return Sn(/Firefox/i);
});
function Mr(e, t, r = !0) {
  var n, o;
  let { metaKey: a, ctrlKey: s, altKey: i, shiftKey: d } = t;
  tf() && (!((o = window.event) === null || o === void 0 || (n = o.type) === null || n === void 0) && n.startsWith("key")) && e.target === "_blank" && (br() ? a = !0 : s = !0);
  let u = gi() && br() && !pi() && process.env.NODE_ENV !== "test" ? new KeyboardEvent("keydown", {
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
  Mr.isOpening = r, mr(e), e.dispatchEvent(u), Mr.isOpening = !1;
}
Mr.isOpening = !1;
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
function rf() {
  for (const [e] of zt)
    "isConnected" in e && !e.isConnected && zt.delete(e);
}
function bi(e) {
  requestAnimationFrame(() => {
    rf(), zt.size === 0 ? e() : no.add(e);
  });
}
function Fo() {
  let e = J(/* @__PURE__ */ new Map()), t = ge((o, a, s, i) => {
    let d = i != null && i.once ? (...u) => {
      e.current.delete(s), s(...u);
    } : s;
    e.current.set(s, {
      type: a,
      eventTarget: o,
      fn: d,
      options: i
    }), o.addEventListener(a, d, i);
  }, []), r = ge((o, a, s, i) => {
    var d;
    let u = ((d = e.current.get(s)) === null || d === void 0 ? void 0 : d.fn) || s;
    o.removeEventListener(a, u, i), e.current.delete(s);
  }, []), n = ge(() => {
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
function nf(e, t) {
  let { id: r, "aria-label": n, "aria-labelledby": o } = e;
  return r = Tn(r), o && n ? o = [
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
function of() {
  return typeof window.ResizeObserver < "u";
}
function Ia(e) {
  const { ref: t, box: r, onResize: n } = e;
  de(() => {
    let o = t == null ? void 0 : t.current;
    if (o)
      if (of()) {
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
function hi(e, t) {
  De(() => {
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
function af(e) {
  return !Mo() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
const sf = typeof Element < "u" && "checkVisibility" in Element.prototype;
function lf(e) {
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
function df(e, t) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function Do(e, t) {
  return sf ? e.checkVisibility() && !e.closest("[data-react-aria-prevent-focus]") : e.nodeName !== "#comment" && lf(e) && df(e, t) && (!e.parentElement || Do(e.parentElement, e));
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
], cf = zo.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
zo.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const uf = zo.join(':not([hidden]):not([tabindex="-1"]),');
function vi(e) {
  return e.matches(cf) && Do(e) && !yi(e);
}
function ff(e) {
  return e.matches(uf) && Do(e) && !yi(e);
}
function yi(e) {
  let t = e;
  for (; t != null; ) {
    if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
    t = t.parentElement;
  }
  return !1;
}
function pf(e, t, r) {
  let [n, o] = ae(e || t), a = J(e !== void 0), s = e !== void 0;
  de(() => {
    let u = a.current;
    u !== s && process.env.NODE_ENV !== "production" && console.warn(`WARN: A component changed from ${u ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}.`), a.current = s;
  }, [
    s
  ]);
  let i = s ? e : n, d = ge((u, ...c) => {
    let f = (m, ...p) => {
      r && (Object.is(i, m) || r(m, ...p)), s || (i = m);
    };
    typeof u == "function" ? (process.env.NODE_ENV !== "production" && console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), o((p, ...h) => {
      let w = u(s ? i : p, ...h);
      return f(w, ...c), s ? p : w;
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
}, un = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, gf = {
  top: "left",
  left: "top"
}, so = {
  top: "height",
  left: "width"
}, xi = {
  width: "totalWidth",
  height: "totalHeight"
}, Kr = {};
let We = typeof document < "u" ? window.visualViewport : null;
function _a(e) {
  let t = 0, r = 0, n = 0, o = 0, a = 0, s = 0, i = {};
  var d;
  let u = ((d = We == null ? void 0 : We.scale) !== null && d !== void 0 ? d : 1) > 1;
  if (e.tagName === "BODY") {
    let h = document.documentElement;
    n = h.clientWidth, o = h.clientHeight;
    var c;
    t = (c = We == null ? void 0 : We.width) !== null && c !== void 0 ? c : n;
    var f;
    r = (f = We == null ? void 0 : We.height) !== null && f !== void 0 ? f : o, i.top = h.scrollTop || e.scrollTop, i.left = h.scrollLeft || e.scrollLeft, We && (a = We.offsetTop, s = We.offsetLeft);
  } else
    ({ width: t, height: r, top: a, left: s } = fr(e)), i.top = e.scrollTop, i.left = e.scrollLeft, n = t, o = r;
  if (gi() && (e.tagName === "BODY" || e.tagName === "HTML") && u) {
    i.top = 0, i.left = 0;
    var m;
    a = (m = We == null ? void 0 : We.pageTop) !== null && m !== void 0 ? m : 0;
    var p;
    s = (p = We == null ? void 0 : We.pageLeft) !== null && p !== void 0 ? p : 0;
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
function mf(e) {
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
function bf(e) {
  let t = window.getComputedStyle(e);
  return {
    top: parseInt(t.marginTop, 10) || 0,
    bottom: parseInt(t.marginBottom, 10) || 0,
    left: parseInt(t.marginLeft, 10) || 0,
    right: parseInt(t.marginRight, 10) || 0
  };
}
function La(e) {
  if (Kr[e]) return Kr[e];
  let [t, r] = e.split(" "), n = yt[t] || "right", o = gf[n];
  yt[r] || (r = "center");
  let a = so[n], s = so[o];
  return Kr[e] = {
    placement: t,
    crossPlacement: r,
    axis: n,
    crossAxis: o,
    size: a,
    crossSize: s
  }, Kr[e];
}
function Hn(e, t, r, n, o, a, s, i, d, u) {
  let { placement: c, crossPlacement: f, axis: m, crossAxis: p, size: h, crossSize: w } = n, $ = {};
  var k;
  $[p] = (k = e[p]) !== null && k !== void 0 ? k : 0;
  var v, j, P, O;
  f === "center" ? $[p] += (((v = e[w]) !== null && v !== void 0 ? v : 0) - ((j = r[w]) !== null && j !== void 0 ? j : 0)) / 2 : f !== p && ($[p] += ((P = e[w]) !== null && P !== void 0 ? P : 0) - ((O = r[w]) !== null && O !== void 0 ? O : 0)), $[p] += a;
  const I = e[p] - r[w] + d + u, H = e[p] + e[w] - d - u;
  if ($[p] = ao($[p], I, H), c === m) {
    const z = i ? s[h] : t[xi[h]];
    $[un[m]] = Math.floor(z - e[m] + o);
  } else $[m] = Math.floor(e[m] + e[h] + o);
  return $;
}
function hf(e, t, r, n, o, a, s, i) {
  const d = n ? r.height : t[xi.height];
  var u;
  let c = e.top != null ? r.top + e.top : r.top + (d - ((u = e.bottom) !== null && u !== void 0 ? u : 0) - s);
  var f, m, p, h, w, $;
  let k = i !== "top" ? (
    // We want the distance between the top of the overlay to the bottom of the boundary
    Math.max(0, t.height + t.top + ((f = t.scroll.top) !== null && f !== void 0 ? f : 0) - c - (((m = o.top) !== null && m !== void 0 ? m : 0) + ((p = o.bottom) !== null && p !== void 0 ? p : 0) + a))
  ) : Math.max(0, c + s - (t.top + ((h = t.scroll.top) !== null && h !== void 0 ? h : 0)) - (((w = o.top) !== null && w !== void 0 ? w : 0) + (($ = o.bottom) !== null && $ !== void 0 ? $ : 0) + a));
  return Math.min(t.height - a * 2, k);
}
function Ma(e, t, r, n, o, a) {
  let { placement: s, axis: i, size: d } = a;
  var u, c;
  if (s === i) return Math.max(0, r[i] - e[i] - ((u = e.scroll[i]) !== null && u !== void 0 ? u : 0) + t[i] - ((c = n[i]) !== null && c !== void 0 ? c : 0) - n[un[i]] - o);
  var f;
  return Math.max(0, e[d] + e[i] + e.scroll[i] - t[i] - r[i] - r[d] - ((f = n[i]) !== null && f !== void 0 ? f : 0) - n[un[i]] - o);
}
function $f(e, t, r, n, o, a, s, i, d, u, c, f, m, p, h, w) {
  let $ = La(e), { size: k, crossAxis: v, crossSize: j, placement: P, crossPlacement: O } = $, I = Hn(t, i, r, $, c, f, u, m, h, w), H = c, z = Ma(i, u, t, o, a + c, $);
  if (s && n[k] > z) {
    let M = La(`${un[P]} ${O}`), V = Hn(t, i, r, M, c, f, u, m, h, w);
    Ma(i, u, t, o, a + c, M) > z && ($ = M, I = V, H = c);
  }
  let F = "bottom";
  $.axis === "top" ? $.placement === "top" ? F = "top" : $.placement === "bottom" && (F = "bottom") : $.crossAxis === "top" && ($.crossPlacement === "top" ? F = "bottom" : $.crossPlacement === "bottom" && (F = "top"));
  let D = Ra(v, I[v], r[j], i, d, a, u);
  I[v] += D;
  let g = hf(I, i, u, m, o, a, r.height, F);
  p && p < g && (g = p), r.height = Math.min(r.height, g), I = Hn(t, i, r, $, H, f, u, m, h, w), D = Ra(v, I[v], r[j], i, d, a, u), I[v] += D;
  let T = {}, y = t[v] - I[v] - o[yt[v]], N = y + 0.5 * t[j];
  const R = h / 2 + w;
  var b, C, S, A;
  const _ = yt[v] === "left" ? ((b = o.left) !== null && b !== void 0 ? b : 0) + ((C = o.right) !== null && C !== void 0 ? C : 0) : ((S = o.top) !== null && S !== void 0 ? S : 0) + ((A = o.bottom) !== null && A !== void 0 ? A : 0), E = r[j] - _ - h / 2 - w, L = t[v] + h / 2 - (I[v] + o[yt[v]]), K = t[v] + t[j] - h / 2 - (I[v] + o[yt[v]]), U = ao(N, L, K);
  T[v] = ao(U, R, E), { placement: P, crossPlacement: O } = $, h ? y = T[v] : O === "right" ? y += t[j] : O === "center" && (y += t[j] / 2);
  let X = P === "left" || P === "top" ? r[k] : 0, G = {
    x: P === "top" || P === "bottom" ? y : X,
    y: P === "left" || P === "right" ? y : X
  };
  return {
    position: I,
    maxHeight: g,
    arrowOffsetLeft: T.left,
    arrowOffsetTop: T.top,
    placement: P,
    triggerAnchorPoint: G
  };
}
function vf(e) {
  let { placement: t, targetNode: r, overlayNode: n, scrollNode: o, padding: a, shouldFlip: s, boundaryElement: i, offset: d, crossOffset: u, maxHeight: c, arrowSize: f = 0, arrowBoundaryOffset: m = 0 } = e, p = n instanceof HTMLElement ? yf(n) : document.documentElement, h = p === document.documentElement;
  const w = window.getComputedStyle(p).position;
  let $ = !!w && w !== "static", k = h ? fr(r) : Fa(r, p);
  if (!h) {
    let { marginTop: T, marginLeft: y } = window.getComputedStyle(r);
    k.top += parseInt(T, 10) || 0, k.left += parseInt(y, 10) || 0;
  }
  let v = fr(n), j = bf(n);
  var P, O;
  v.width += ((P = j.left) !== null && P !== void 0 ? P : 0) + ((O = j.right) !== null && O !== void 0 ? O : 0);
  var I, H;
  v.height += ((I = j.top) !== null && I !== void 0 ? I : 0) + ((H = j.bottom) !== null && H !== void 0 ? H : 0);
  let z = mf(o), F = _a(i), D = _a(p), g = i.tagName === "BODY" ? fr(p) : Fa(p, i);
  return p.tagName === "HTML" && i.tagName === "BODY" && (D.scroll.top = 0, D.scroll.left = 0), $f(t, k, v, z, j, a, s, F, D, g, d, u, $, c, f, m);
}
function fr(e) {
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
    n = fr(e);
    let o = fr(t), a = window.getComputedStyle(t);
    o.top += (parseInt(a.borderTopWidth, 10) || 0) - t.scrollTop, o.left += (parseInt(a.borderLeftWidth, 10) || 0) - t.scrollLeft, n.top -= o.top, n.left -= o.left;
  }
  return n.top -= parseInt(r.marginTop, 10) || 0, n.left -= parseInt(r.marginLeft, 10) || 0, n;
}
function yf(e) {
  let t = e.offsetParent;
  if (t && t === document.body && window.getComputedStyle(t).position === "static" && !Da(t) && (t = document.documentElement), t == null)
    for (t = e.parentElement; t && !Da(t); ) t = t.parentElement;
  return t || document.documentElement;
}
function Da(e) {
  let t = window.getComputedStyle(e);
  return t.transform !== "none" || /transform|perspective/.test(t.willChange) || t.filter !== "none" || t.contain === "paint" || "backdropFilter" in t && t.backdropFilter !== "none" || "WebkitBackdropFilter" in t && t.WebkitBackdropFilter !== "none";
}
const wi = /* @__PURE__ */ new WeakMap();
function xf(e) {
  let { triggerRef: t, isOpen: r, onClose: n } = e;
  de(() => {
    if (!r || n === null) return;
    let o = (a) => {
      let s = a.target;
      if (!t.current || s instanceof Node && !s.contains(t.current) || a.target instanceof HTMLInputElement || a.target instanceof HTMLTextAreaElement) return;
      let i = n || wi.get(t.current);
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
let Fe = typeof document < "u" ? window.visualViewport : null;
function ki(e) {
  let { direction: t } = fi(), { arrowSize: r, targetRef: n, overlayRef: o, arrowRef: a, scrollRef: s = o, placement: i = "bottom", containerPadding: d = 12, shouldFlip: u = !0, boundaryElement: c = typeof document < "u" ? document.body : null, offset: f = 0, crossOffset: m = 0, shouldUpdatePosition: p = !0, isOpen: h = !0, onClose: w, maxHeight: $, arrowBoundaryOffset: k = 0 } = e, [v, j] = ae(null), P = [
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
    h,
    t,
    $,
    k,
    r
  ], O = J(Fe == null ? void 0 : Fe.scale);
  de(() => {
    h && (O.current = Fe == null ? void 0 : Fe.scale);
  }, [
    h
  ]);
  let I = ge(() => {
    var T, y, N;
    if (p === !1 || !h || !o.current || !n.current || !c || (Fe == null ? void 0 : Fe.scale) !== O.current || o.current.querySelector("[data-react-aria-incomplete]") || ((T = (y = o.current).getAnimations) === null || T === void 0 ? void 0 : T.call(y).length) > 0) return;
    let R = null;
    if (s.current && s.current.contains(document.activeElement)) {
      var b;
      let U = (b = document.activeElement) === null || b === void 0 ? void 0 : b.getBoundingClientRect(), X = s.current.getBoundingClientRect();
      var C;
      if (R = {
        type: "top",
        offset: ((C = U == null ? void 0 : U.top) !== null && C !== void 0 ? C : 0) - X.top
      }, R.offset > X.height / 2) {
        R.type = "bottom";
        var S;
        R.offset = ((S = U == null ? void 0 : U.bottom) !== null && S !== void 0 ? S : 0) - X.bottom;
      }
    }
    let A = o.current;
    if (!$ && o.current) {
      var _;
      A.style.top = "0px", A.style.bottom = "";
      var E;
      A.style.maxHeight = ((E = (_ = window.visualViewport) === null || _ === void 0 ? void 0 : _.height) !== null && E !== void 0 ? E : window.innerHeight) + "px";
    }
    var L;
    let K = vf({
      placement: kf(i, t),
      overlayNode: o.current,
      targetNode: n.current,
      scrollNode: s.current || o.current,
      padding: d,
      shouldFlip: u,
      boundaryElement: c,
      offset: f,
      crossOffset: m,
      maxHeight: $,
      arrowSize: (L = r ?? (a == null || (N = a.current) === null || N === void 0 ? void 0 : N.getBoundingClientRect().width)) !== null && L !== void 0 ? L : 0,
      arrowBoundaryOffset: k
    });
    if (K.position) {
      if (A.style.top = "", A.style.bottom = "", A.style.left = "", A.style.right = "", Object.keys(K.position).forEach((U) => A.style[U] = K.position[U] + "px"), A.style.maxHeight = K.maxHeight != null ? K.maxHeight + "px" : "", R && document.activeElement && s.current) {
        let U = document.activeElement.getBoundingClientRect(), X = s.current.getBoundingClientRect(), G = U[R.type] - X[R.type];
        s.current.scrollTop += G - R.offset;
      }
      j(K);
    }
  }, P);
  De(I, P), wf(I), Ia({
    ref: o,
    onResize: I
  }), Ia({
    ref: n,
    onResize: I
  });
  let H = J(!1);
  De(() => {
    let T, y = () => {
      H.current = !0, clearTimeout(T), T = setTimeout(() => {
        H.current = !1;
      }, 500), I();
    }, N = () => {
      H.current && y();
    };
    return Fe == null || Fe.addEventListener("resize", y), Fe == null || Fe.addEventListener("scroll", N), () => {
      Fe == null || Fe.removeEventListener("resize", y), Fe == null || Fe.removeEventListener("scroll", N);
    };
  }, [
    I
  ]);
  let z = ge(() => {
    H.current || w == null || w();
  }, [
    w,
    H
  ]);
  xf({
    triggerRef: n,
    isOpen: h,
    onClose: w && z
  });
  var F, D, g;
  return {
    overlayProps: {
      style: {
        position: v ? "absolute" : "fixed",
        top: v ? void 0 : 0,
        left: v ? void 0 : 0,
        zIndex: 1e5,
        ...v == null ? void 0 : v.position,
        maxHeight: (F = v == null ? void 0 : v.maxHeight) !== null && F !== void 0 ? F : "100vh"
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
function wf(e) {
  De(() => (window.addEventListener("resize", e, !1), () => {
    window.removeEventListener("resize", e, !1);
  }), [
    e
  ]);
}
function kf(e, t) {
  return t === "rtl" ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right");
}
function Go(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function Ei(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function Ni(e) {
  let t = J({
    isFocused: !1,
    observer: null
  });
  De(() => {
    const n = t.current;
    return () => {
      n.observer && (n.observer.disconnect(), n.observer = null);
    };
  }, []);
  let r = ut((n) => {
    e == null || e(n);
  });
  return ge((n) => {
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
let fn = !1;
function za(e) {
  for (; e && !vi(e); ) e = e.parentElement;
  let t = pt(e), r = t.document.activeElement;
  if (!r || r === e) return;
  fn = !0;
  let n = !1, o = (c) => {
    (c.target === r || n) && c.stopImmediatePropagation();
  }, a = (c) => {
    (c.target === r || n) && (c.stopImmediatePropagation(), !e && !n && (n = !0, mr(r), d()));
  }, s = (c) => {
    (c.target === e || n) && c.stopImmediatePropagation();
  }, i = (c) => {
    (c.target === e || n) && (c.stopImmediatePropagation(), n || (n = !0, mr(r), d()));
  };
  t.addEventListener("blur", o, !0), t.addEventListener("focusout", a, !0), t.addEventListener("focusin", i, !0), t.addEventListener("focus", s, !0);
  let d = () => {
    cancelAnimationFrame(u), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", a, !0), t.removeEventListener("focusin", i, !0), t.removeEventListener("focus", s, !0), fn = !1, n = !1;
  }, u = requestAnimationFrame(d);
  return d;
}
let lr = "default", io = "", sn = /* @__PURE__ */ new WeakMap();
function Ga(e) {
  if (jn()) {
    if (lr === "default") {
      const t = Ne(e);
      io = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    lr = "disabled";
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    sn.set(e, e.style[t]), e.style[t] = "none";
  }
}
function Un(e) {
  if (jn()) {
    if (lr !== "disabled") return;
    lr = "restoring", setTimeout(() => {
      bi(() => {
        if (lr === "restoring") {
          const t = Ne(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = io || ""), io = "", lr = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && sn.has(e)) {
    let t = sn.get(e), r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    e.style[r] === "none" && (e.style[r] = t), e.getAttribute("style") === "" && e.removeAttribute("style"), sn.delete(e);
  }
}
const Bo = oe.createContext({
  register: () => {
  }
});
Bo.displayName = "PressResponderContext";
function Ef(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function Pi(e, t, r) {
  if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
  return t.get(e);
}
function Nf(e, t) {
  var r = Pi(e, t, "get");
  return Ef(e, r);
}
function Pf(e, t, r) {
  if (t.set) t.set.call(e, r);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = r;
  }
}
function Ba(e, t, r) {
  var n = Pi(e, t, "set");
  return Pf(e, n, r), r;
}
function Tf(e) {
  let t = mt(Bo);
  if (t) {
    let { register: r, ...n } = t;
    e = At(n, e), r();
  }
  return hi(t, e.ref), e;
}
var Wr = /* @__PURE__ */ new WeakMap();
class Yr {
  continuePropagation() {
    Ba(this, Wr, !1);
  }
  get shouldStopPropagation() {
    return Nf(this, Wr);
  }
  constructor(t, r, n, o) {
    Ru(this, Wr, {
      writable: !0,
      value: void 0
    }), Ba(this, Wr, !0);
    var a;
    let s = (a = o == null ? void 0 : o.target) !== null && a !== void 0 ? a : n.currentTarget;
    const i = s == null ? void 0 : s.getBoundingClientRect();
    let d, u = 0, c, f = null;
    n.clientX != null && n.clientY != null && (c = n.clientX, f = n.clientY), i && (c != null && f != null ? (d = c - i.left, u = f - i.top) : (d = i.width / 2, u = i.height / 2)), this.type = t, this.pointerType = r, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = d, this.y = u;
  }
}
const Va = Symbol("linkClicked"), Ha = "react-aria-pressable-style", Ua = "data-react-aria-pressable";
function Cf(e) {
  let { onPress: t, onPressChange: r, onPressStart: n, onPressEnd: o, onPressUp: a, onClick: s, isDisabled: i, isPressed: d, preventFocusOnPress: u, shouldCancelOnPointerExit: c, allowTextSelectionOnPress: f, ref: m, ...p } = Tf(e), [h, w] = ae(!1), $ = J({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: k, removeAllGlobalListeners: v } = Fo(), j = ut((g, T) => {
    let y = $.current;
    if (i || y.didFirePressStart) return !1;
    let N = !0;
    if (y.isTriggeringEvent = !0, n) {
      let R = new Yr("pressstart", T, g);
      n(R), N = R.shouldStopPropagation;
    }
    return r && r(!0), y.isTriggeringEvent = !1, y.didFirePressStart = !0, w(!0), N;
  }), P = ut((g, T, y = !0) => {
    let N = $.current;
    if (!N.didFirePressStart) return !1;
    N.didFirePressStart = !1, N.isTriggeringEvent = !0;
    let R = !0;
    if (o) {
      let b = new Yr("pressend", T, g);
      o(b), R = b.shouldStopPropagation;
    }
    if (r && r(!1), w(!1), t && y && !i) {
      let b = new Yr("press", T, g);
      t(b), R && (R = b.shouldStopPropagation);
    }
    return N.isTriggeringEvent = !1, R;
  }), O = ut((g, T) => {
    let y = $.current;
    if (i) return !1;
    if (a) {
      y.isTriggeringEvent = !0;
      let N = new Yr("pressup", T, g);
      return a(N), y.isTriggeringEvent = !1, N.shouldStopPropagation;
    }
    return !0;
  }), I = ut((g) => {
    let T = $.current;
    if (T.isPressed && T.target) {
      T.didFirePressStart && T.pointerType != null && P(Ut(T.target, g), T.pointerType, !1), T.isPressed = !1, T.isOverTarget = !1, T.activePointerId = null, T.pointerType = null, v(), f || Un(T.target);
      for (let y of T.disposables) y();
      T.disposables = [];
    }
  }), H = ut((g) => {
    c && I(g);
  }), z = ut((g) => {
    s == null || s(g);
  }), F = ut((g, T) => {
    if (s) {
      let y = new MouseEvent("click", g);
      Ei(y, T), s(Go(y));
    }
  }), D = _e(() => {
    let g = $.current, T = {
      onKeyDown(N) {
        if (Kn(N.nativeEvent, N.currentTarget) && Ae(N.currentTarget, we(N.nativeEvent))) {
          var R;
          Ya(we(N.nativeEvent), N.key) && N.preventDefault();
          let b = !0;
          if (!g.isPressed && !N.repeat) {
            g.target = N.currentTarget, g.isPressed = !0, g.pointerType = "keyboard", b = j(N, "keyboard");
            let C = N.currentTarget, S = (A) => {
              Kn(A, C) && !A.repeat && Ae(C, we(A)) && g.target && O(Ut(g.target, A), "keyboard");
            };
            k(Ne(N.currentTarget), "keyup", Lr(S, y), !0);
          }
          b && N.stopPropagation(), N.metaKey && br() && ((R = g.metaKeyEvents) === null || R === void 0 || R.set(N.key, N.nativeEvent));
        } else N.key === "Meta" && (g.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(N) {
        if (!(N && !Ae(N.currentTarget, we(N.nativeEvent))) && N && N.button === 0 && !g.isTriggeringEvent && !Mr.isOpening) {
          let R = !0;
          if (i && N.preventDefault(), !g.ignoreEmulatedMouseEvents && !g.isPressed && (g.pointerType === "virtual" || oo(N.nativeEvent))) {
            let b = j(N, "virtual"), C = O(N, "virtual"), S = P(N, "virtual");
            z(N), R = b && C && S;
          } else if (g.isPressed && g.pointerType !== "keyboard") {
            let b = g.pointerType || N.nativeEvent.pointerType || "virtual", C = O(Ut(N.currentTarget, N), b), S = P(Ut(N.currentTarget, N), b, !0);
            R = C && S, g.isOverTarget = !1, z(N), I(N);
          }
          g.ignoreEmulatedMouseEvents = !1, R && N.stopPropagation();
        }
      }
    }, y = (N) => {
      var R;
      if (g.isPressed && g.target && Kn(N, g.target)) {
        var b;
        Ya(we(N), N.key) && N.preventDefault();
        let S = we(N), A = Ae(g.target, we(N));
        P(Ut(g.target, N), "keyboard", A), A && F(N, g.target), v(), N.key !== "Enter" && Vo(g.target) && Ae(g.target, S) && !N[Va] && (N[Va] = !0, Mr(g.target, N, !1)), g.isPressed = !1, (b = g.metaKeyEvents) === null || b === void 0 || b.delete(N.key);
      } else if (N.key === "Meta" && (!((R = g.metaKeyEvents) === null || R === void 0) && R.size)) {
        var C;
        let S = g.metaKeyEvents;
        g.metaKeyEvents = void 0;
        for (let A of S.values()) (C = g.target) === null || C === void 0 || C.dispatchEvent(new KeyboardEvent("keyup", A));
      }
    };
    if (typeof PointerEvent < "u") {
      T.onPointerDown = (b) => {
        if (b.button !== 0 || !Ae(b.currentTarget, we(b.nativeEvent))) return;
        if (af(b.nativeEvent)) {
          g.pointerType = "virtual";
          return;
        }
        g.pointerType = b.pointerType;
        let C = !0;
        if (!g.isPressed) {
          g.isPressed = !0, g.isOverTarget = !0, g.activePointerId = b.pointerId, g.target = b.currentTarget, f || Ga(g.target), C = j(b, g.pointerType);
          let S = we(b.nativeEvent);
          "releasePointerCapture" in S && S.releasePointerCapture(b.pointerId), k(Ne(b.currentTarget), "pointerup", N, !1), k(Ne(b.currentTarget), "pointercancel", R, !1);
        }
        C && b.stopPropagation();
      }, T.onMouseDown = (b) => {
        if (Ae(b.currentTarget, we(b.nativeEvent)) && b.button === 0) {
          if (u) {
            let C = za(b.target);
            C && g.disposables.push(C);
          }
          b.stopPropagation();
        }
      }, T.onPointerUp = (b) => {
        !Ae(b.currentTarget, we(b.nativeEvent)) || g.pointerType === "virtual" || b.button === 0 && !g.isPressed && O(b, g.pointerType || b.pointerType);
      }, T.onPointerEnter = (b) => {
        b.pointerId === g.activePointerId && g.target && !g.isOverTarget && g.pointerType != null && (g.isOverTarget = !0, j(Ut(g.target, b), g.pointerType));
      }, T.onPointerLeave = (b) => {
        b.pointerId === g.activePointerId && g.target && g.isOverTarget && g.pointerType != null && (g.isOverTarget = !1, P(Ut(g.target, b), g.pointerType, !1), H(b));
      };
      let N = (b) => {
        if (b.pointerId === g.activePointerId && g.isPressed && b.button === 0 && g.target) {
          if (Ae(g.target, we(b)) && g.pointerType != null) {
            let C = !1, S = setTimeout(() => {
              g.isPressed && g.target instanceof HTMLElement && (C ? I(b) : (mr(g.target), g.target.click()));
            }, 80);
            k(b.currentTarget, "click", () => C = !0, !0), g.disposables.push(() => clearTimeout(S));
          } else I(b);
          g.isOverTarget = !1;
        }
      }, R = (b) => {
        I(b);
      };
      T.onDragStart = (b) => {
        Ae(b.currentTarget, we(b.nativeEvent)) && I(b);
      };
    } else if (process.env.NODE_ENV === "test") {
      T.onMouseDown = (b) => {
        if (b.button !== 0 || !Ae(b.currentTarget, we(b.nativeEvent))) return;
        if (g.ignoreEmulatedMouseEvents) {
          b.stopPropagation();
          return;
        }
        if (g.isPressed = !0, g.isOverTarget = !0, g.target = b.currentTarget, g.pointerType = oo(b.nativeEvent) ? "virtual" : "mouse", vd(() => j(b, g.pointerType)) && b.stopPropagation(), u) {
          let S = za(b.target);
          S && g.disposables.push(S);
        }
        k(Ne(b.currentTarget), "mouseup", N, !1);
      }, T.onMouseEnter = (b) => {
        if (!Ae(b.currentTarget, we(b.nativeEvent))) return;
        let C = !0;
        g.isPressed && !g.ignoreEmulatedMouseEvents && g.pointerType != null && (g.isOverTarget = !0, C = j(b, g.pointerType)), C && b.stopPropagation();
      }, T.onMouseLeave = (b) => {
        if (!Ae(b.currentTarget, we(b.nativeEvent))) return;
        let C = !0;
        g.isPressed && !g.ignoreEmulatedMouseEvents && g.pointerType != null && (g.isOverTarget = !1, C = P(b, g.pointerType, !1), H(b)), C && b.stopPropagation();
      }, T.onMouseUp = (b) => {
        Ae(b.currentTarget, we(b.nativeEvent)) && !g.ignoreEmulatedMouseEvents && b.button === 0 && !g.isPressed && O(b, g.pointerType || "mouse");
      };
      let N = (b) => {
        if (b.button === 0) {
          if (g.ignoreEmulatedMouseEvents) {
            g.ignoreEmulatedMouseEvents = !1;
            return;
          }
          g.target && g.target.contains(b.target) && g.pointerType != null || I(b), g.isOverTarget = !1;
        }
      };
      T.onTouchStart = (b) => {
        if (!Ae(b.currentTarget, we(b.nativeEvent))) return;
        let C = Sf(b.nativeEvent);
        if (!C) return;
        g.activePointerId = C.identifier, g.ignoreEmulatedMouseEvents = !0, g.isOverTarget = !0, g.isPressed = !0, g.target = b.currentTarget, g.pointerType = "touch", f || Ga(g.target), j(Ft(g.target, b), g.pointerType) && b.stopPropagation(), k(pt(b.currentTarget), "scroll", R, !0);
      }, T.onTouchMove = (b) => {
        if (!Ae(b.currentTarget, we(b.nativeEvent))) return;
        if (!g.isPressed) {
          b.stopPropagation();
          return;
        }
        let C = Ka(b.nativeEvent, g.activePointerId), S = !0;
        C && Wa(C, b.currentTarget) ? !g.isOverTarget && g.pointerType != null && (g.isOverTarget = !0, S = j(Ft(g.target, b), g.pointerType)) : g.isOverTarget && g.pointerType != null && (g.isOverTarget = !1, S = P(Ft(g.target, b), g.pointerType, !1), H(Ft(g.target, b))), S && b.stopPropagation();
      }, T.onTouchEnd = (b) => {
        if (!Ae(b.currentTarget, we(b.nativeEvent))) return;
        if (!g.isPressed) {
          b.stopPropagation();
          return;
        }
        let C = Ka(b.nativeEvent, g.activePointerId), S = !0;
        C && Wa(C, b.currentTarget) && g.pointerType != null ? (O(Ft(g.target, b), g.pointerType), S = P(Ft(g.target, b), g.pointerType), F(b.nativeEvent, g.target)) : g.isOverTarget && g.pointerType != null && (S = P(Ft(g.target, b), g.pointerType, !1)), S && b.stopPropagation(), g.isPressed = !1, g.activePointerId = null, g.isOverTarget = !1, g.ignoreEmulatedMouseEvents = !0, g.target && !f && Un(g.target), v();
      }, T.onTouchCancel = (b) => {
        Ae(b.currentTarget, we(b.nativeEvent)) && (b.stopPropagation(), g.isPressed && I(Ft(g.target, b)));
      };
      let R = (b) => {
        g.isPressed && Ae(we(b), g.target) && I({
          currentTarget: g.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      T.onDragStart = (b) => {
        Ae(b.currentTarget, we(b.nativeEvent)) && I(b);
      };
    }
    return T;
  }, [
    k,
    i,
    u,
    v,
    f,
    I,
    H,
    P,
    j,
    O,
    z,
    F
  ]);
  return de(() => {
    if (!m || process.env.NODE_ENV === "test") return;
    const g = Ne(m.current);
    if (!g || !g.head || g.getElementById(Ha)) return;
    const T = g.createElement("style");
    T.id = Ha, T.textContent = `
@layer {
  [${Ua}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), g.head.prepend(T);
  }, [
    m
  ]), de(() => {
    let g = $.current;
    return () => {
      var T;
      f || Un((T = g.target) !== null && T !== void 0 ? T : void 0);
      for (let y of g.disposables) y();
      g.disposables = [];
    };
  }, [
    f
  ]), {
    isPressed: d || h,
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
  return (r === "Enter" || r === " " || r === "Spacebar" || n === "Space") && !(o instanceof pt(o).HTMLInputElement && !Ti(o, r) || o instanceof pt(o).HTMLTextAreaElement || o.isContentEditable) && // Links should only trigger with Enter key
  !((a === "link" || !a && Vo(o)) && r !== "Enter");
}
function Sf(e) {
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
function jf(e) {
  let t = 0, r = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? r = e.height / 2 : e.radiusY !== void 0 && (r = e.radiusY), {
    top: e.clientY - r,
    right: e.clientX + t,
    bottom: e.clientY + r,
    left: e.clientX - t
  };
}
function Of(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function Wa(e, t) {
  let r = t.getBoundingClientRect(), n = jf(e);
  return Of(r, n);
}
function If(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Vo(e);
}
function Ya(e, t) {
  return e instanceof HTMLInputElement ? !Ti(e, t) : If(e);
}
const Af = /* @__PURE__ */ new Set([
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
function Ti(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : Af.has(e.type);
}
let vr = null, lo = /* @__PURE__ */ new Set(), _r = /* @__PURE__ */ new Map(), Jt = !1, co = !1;
const _f = {
  Tab: !0,
  Escape: !0
};
function Ho(e, t) {
  for (let r of lo) r(e, t);
}
function Rf(e) {
  return !(e.metaKey || !br() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function pn(e) {
  Jt = !0, Rf(e) && (vr = "keyboard", Ho("keyboard", e));
}
function ft(e) {
  vr = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Jt = !0, Ho("pointer", e));
}
function Ci(e) {
  oo(e) && (Jt = !0, vr = "virtual");
}
function Si(e) {
  e.target === window || e.target === document || fn || !e.isTrusted || (!Jt && !co && (vr = "virtual", Ho("virtual", e)), Jt = !1, co = !1);
}
function ji() {
  fn || (Jt = !1, co = !0);
}
function uo(e) {
  if (typeof window > "u" || typeof document > "u" || _r.get(pt(e))) return;
  const t = pt(e), r = Ne(e);
  let n = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Jt = !0, n.apply(this, arguments);
  }, r.addEventListener("keydown", pn, !0), r.addEventListener("keyup", pn, !0), r.addEventListener("click", Ci, !0), t.addEventListener("focus", Si, !0), t.addEventListener("blur", ji, !1), typeof PointerEvent < "u" ? (r.addEventListener("pointerdown", ft, !0), r.addEventListener("pointermove", ft, !0), r.addEventListener("pointerup", ft, !0)) : process.env.NODE_ENV === "test" && (r.addEventListener("mousedown", ft, !0), r.addEventListener("mousemove", ft, !0), r.addEventListener("mouseup", ft, !0)), t.addEventListener("beforeunload", () => {
    Oi(e);
  }, {
    once: !0
  }), _r.set(t, {
    focus: n
  });
}
const Oi = (e, t) => {
  const r = pt(e), n = Ne(e);
  t && n.removeEventListener("DOMContentLoaded", t), _r.has(r) && (r.HTMLElement.prototype.focus = _r.get(r).focus, n.removeEventListener("keydown", pn, !0), n.removeEventListener("keyup", pn, !0), n.removeEventListener("click", Ci, !0), r.removeEventListener("focus", Si, !0), r.removeEventListener("blur", ji, !1), typeof PointerEvent < "u" ? (n.removeEventListener("pointerdown", ft, !0), n.removeEventListener("pointermove", ft, !0), n.removeEventListener("pointerup", ft, !0)) : process.env.NODE_ENV === "test" && (n.removeEventListener("mousedown", ft, !0), n.removeEventListener("mousemove", ft, !0), n.removeEventListener("mouseup", ft, !0)), _r.delete(r));
};
function Lf(e) {
  const t = Ne(e);
  let r;
  return t.readyState !== "loading" ? uo(e) : (r = () => {
    uo(e);
  }, t.addEventListener("DOMContentLoaded", r)), () => Oi(e, r);
}
typeof document < "u" && Lf();
function Uo() {
  return vr !== "pointer";
}
function Ko() {
  return vr;
}
const Mf = /* @__PURE__ */ new Set([
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
function Ff(e, t, r) {
  let n = Ne(r == null ? void 0 : r.target);
  const o = typeof window < "u" ? pt(r == null ? void 0 : r.target).HTMLInputElement : HTMLInputElement, a = typeof window < "u" ? pt(r == null ? void 0 : r.target).HTMLTextAreaElement : HTMLTextAreaElement, s = typeof window < "u" ? pt(r == null ? void 0 : r.target).HTMLElement : HTMLElement, i = typeof window < "u" ? pt(r == null ? void 0 : r.target).KeyboardEvent : KeyboardEvent;
  return e = e || n.activeElement instanceof o && !Mf.has(n.activeElement.type) || n.activeElement instanceof a || n.activeElement instanceof s && n.activeElement.isContentEditable, !(e && t === "keyboard" && r instanceof i && !_f[r.key]);
}
function Df(e, t, r) {
  uo(), de(() => {
    let n = (o, a) => {
      Ff(!!(r != null && r.isTextInput), o, a) && e(Uo());
    };
    return lo.add(n), () => {
      lo.delete(n);
    };
  }, t);
}
function gn(e) {
  const t = Ne(e), r = at(t);
  if (Ko() === "virtual") {
    let n = r;
    bi(() => {
      at(t) === n && e.isConnected && mr(e);
    });
  } else mr(e);
}
function Ii(e) {
  let { isDisabled: t, onFocus: r, onBlur: n, onFocusChange: o } = e;
  const a = ge((d) => {
    if (d.target === d.currentTarget)
      return n && n(d), o && o(!1), !0;
  }, [
    n,
    o
  ]), s = Ni(a), i = ge((d) => {
    const u = Ne(d.target), c = u ? at(u) : at();
    d.target === d.currentTarget && c === we(d.nativeEvent) && (r && r(d), o && o(!0), s(d));
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
function zf(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: Xa(e.onKeyDown),
      onKeyUp: Xa(e.onKeyUp)
    }
  };
}
let Gf = /* @__PURE__ */ oe.createContext(null);
function Bf(e) {
  let t = mt(Gf) || {};
  hi(t, e);
  let { ref: r, ...n } = t;
  return n;
}
function Ai(e, t) {
  let { focusProps: r } = Ii(e), { keyboardProps: n } = zf(e), o = At(r, n), a = Bf(t), s = e.isDisabled ? {} : a, i = J(e.autoFocus);
  de(() => {
    i.current && t.current && gn(t.current), i.current = !1;
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
function Vf({ children: e }) {
  let t = _e(() => ({
    register: () => {
    }
  }), []);
  return /* @__PURE__ */ oe.createElement(Bo.Provider, {
    value: t
  }, e);
}
function Wo(e) {
  let { isDisabled: t, onBlurWithin: r, onFocusWithin: n, onFocusWithinChange: o } = e, a = J({
    isFocusWithin: !1
  }), { addGlobalListener: s, removeAllGlobalListeners: i } = Fo(), d = ge((f) => {
    f.currentTarget.contains(f.target) && a.current.isFocusWithin && !f.currentTarget.contains(f.relatedTarget) && (a.current.isFocusWithin = !1, i(), r && r(f), o && o(!1));
  }, [
    r,
    o,
    a,
    i
  ]), u = Ni(d), c = ge((f) => {
    if (!f.currentTarget.contains(f.target)) return;
    const m = Ne(f.target), p = at(m);
    if (!a.current.isFocusWithin && p === we(f.nativeEvent)) {
      n && n(f), o && o(!0), a.current.isFocusWithin = !0, u(f);
      let h = f.currentTarget;
      s(m, "focus", (w) => {
        if (a.current.isFocusWithin && !Ae(h, w.target)) {
          let $ = new m.defaultView.FocusEvent("blur", {
            relatedTarget: w.target
          });
          Ei($, h);
          let k = Go($);
          d(k);
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
let mn = !1, Xr = 0;
function fo() {
  mn = !0, setTimeout(() => {
    mn = !1;
  }, 50);
}
function Za(e) {
  e.pointerType === "touch" && fo();
}
function Hf() {
  if (!(typeof document > "u"))
    return Xr === 0 && (typeof PointerEvent < "u" ? document.addEventListener("pointerup", Za) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", fo)), Xr++, () => {
      Xr--, !(Xr > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", Za) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", fo));
    };
}
function Yo(e) {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, isDisabled: o } = e, [a, s] = ae(!1), i = J({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  de(Hf, []);
  let { addGlobalListener: d, removeAllGlobalListeners: u } = Fo(), { hoverProps: c, triggerHoverEnd: f } = _e(() => {
    let m = (w, $) => {
      if (i.pointerType = $, o || $ === "touch" || i.isHovered || !w.currentTarget.contains(w.target)) return;
      i.isHovered = !0;
      let k = w.currentTarget;
      i.target = k, d(Ne(w.target), "pointerover", (v) => {
        i.isHovered && i.target && !Ae(i.target, v.target) && p(v, v.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: k,
        pointerType: $
      }), r && r(!0), s(!0);
    }, p = (w, $) => {
      let k = i.target;
      i.pointerType = "", i.target = null, !($ === "touch" || !i.isHovered || !k) && (i.isHovered = !1, u(), n && n({
        type: "hoverend",
        target: k,
        pointerType: $
      }), r && r(!1), s(!1));
    }, h = {};
    return typeof PointerEvent < "u" ? (h.onPointerEnter = (w) => {
      mn && w.pointerType === "mouse" || m(w, w.pointerType);
    }, h.onPointerLeave = (w) => {
      !o && w.currentTarget.contains(w.target) && p(w, w.pointerType);
    }) : process.env.NODE_ENV === "test" && (h.onTouchStart = () => {
      i.ignoreEmulatedMouseEvents = !0;
    }, h.onMouseEnter = (w) => {
      !i.ignoreEmulatedMouseEvents && !mn && m(w, "mouse"), i.ignoreEmulatedMouseEvents = !1;
    }, h.onMouseLeave = (w) => {
      !o && w.currentTarget.contains(w.target) && p(w, "mouse");
    }), {
      hoverProps: h,
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
function Uf(e) {
  let { ref: t, onInteractOutside: r, isDisabled: n, onInteractOutsideStart: o } = e, a = J({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), s = ut((d) => {
    r && Zr(d, t) && (o && o(d), a.current.isPointerDown = !0);
  }), i = ut((d) => {
    r && r(d);
  });
  de(() => {
    let d = a.current;
    if (n) return;
    const u = t.current, c = Ne(u);
    if (typeof PointerEvent < "u") {
      let f = (m) => {
        d.isPointerDown && Zr(m, t) && i(m), d.isPointerDown = !1;
      };
      return c.addEventListener("pointerdown", s, !0), c.addEventListener("click", f, !0), () => {
        c.removeEventListener("pointerdown", s, !0), c.removeEventListener("click", f, !0);
      };
    } else if (process.env.NODE_ENV === "test") {
      let f = (p) => {
        d.ignoreEmulatedMouseEvents ? d.ignoreEmulatedMouseEvents = !1 : d.isPointerDown && Zr(p, t) && i(p), d.isPointerDown = !1;
      }, m = (p) => {
        d.ignoreEmulatedMouseEvents = !0, d.isPointerDown && Zr(p, t) && i(p), d.isPointerDown = !1;
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
function Zr(e, t) {
  if (e.button > 0) return !1;
  if (e.target) {
    const r = e.target.ownerDocument;
    if (!r || !r.documentElement.contains(e.target) || e.target.closest("[data-react-aria-top-layer]")) return !1;
  }
  return t.current ? !e.composedPath().includes(t.current) : !1;
}
const qa = /* @__PURE__ */ oe.createContext(null), po = "react-aria-focus-scope-restore";
let Oe = null;
function Kf(e) {
  let { children: t, contain: r, restoreFocus: n, autoFocus: o } = e, a = J(null), s = J(null), i = J([]), { parentNode: d } = mt(qa) || {}, u = _e(() => new mo({
    scopeRef: i
  }), [
    i
  ]);
  De(() => {
    let m = d || Ge.root;
    if (Ge.getTreeNode(m.scopeRef) && Oe && !bn(Oe, m.scopeRef)) {
      let p = Ge.getTreeNode(Oe);
      p && (m = p);
    }
    m.addChild(u), Ge.addNode(u);
  }, [
    u,
    d
  ]), De(() => {
    let m = Ge.getTreeNode(i);
    m && (m.contain = !!r);
  }, [
    r
  ]), De(() => {
    var m;
    let p = (m = a.current) === null || m === void 0 ? void 0 : m.nextSibling, h = [], w = ($) => $.stopPropagation();
    for (; p && p !== s.current; )
      h.push(p), p.addEventListener(po, w), p = p.nextSibling;
    return i.current = h, () => {
      for (let $ of h) $.removeEventListener(po, w);
    };
  }, [
    t
  ]), Jf(i, n, r), Xf(i, r), Qf(i, n, r), qf(i, o), de(() => {
    const m = at(Ne(i.current ? i.current[0] : void 0));
    let p = null;
    if (gt(m, i.current)) {
      for (let h of Ge.traverse()) h.scopeRef && gt(m, h.scopeRef.current) && (p = h);
      p === Ge.getTreeNode(i) && (Oe = p.scopeRef);
    }
  }, [
    i
  ]), De(() => () => {
    var m, p, h;
    let w = (h = (p = Ge.getTreeNode(i)) === null || p === void 0 || (m = p.parent) === null || m === void 0 ? void 0 : m.scopeRef) !== null && h !== void 0 ? h : null;
    (i === Oe || bn(i, Oe)) && (!w || Ge.getTreeNode(w)) && (Oe = w), Ge.removeTreeNode(i);
  }, [
    i
  ]);
  let c = _e(() => Wf(i), []), f = _e(() => ({
    focusManager: c,
    parentNode: u
  }), [
    u,
    c
  ]);
  return /* @__PURE__ */ oe.createElement(qa.Provider, {
    value: f
  }, /* @__PURE__ */ oe.createElement("span", {
    "data-focus-scope-start": !0,
    hidden: !0,
    ref: a
  }), t, /* @__PURE__ */ oe.createElement("span", {
    "data-focus-scope-end": !0,
    hidden: !0,
    ref: s
  }));
}
function Wf(e) {
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
function Ir(e) {
  let t = Ge.getTreeNode(Oe);
  for (; t && t.scopeRef !== e; ) {
    if (t.contain) return !1;
    t = t.parent;
  }
  return !0;
}
function Yf(e) {
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
function Xf(e, t) {
  let r = J(void 0), n = J(void 0);
  De(() => {
    let o = e.current;
    if (!t) {
      n.current && (cancelAnimationFrame(n.current), n.current = void 0);
      return;
    }
    const a = Ne(o ? o[0] : void 0);
    let s = (u) => {
      if (u.key !== "Tab" || u.altKey || u.ctrlKey || u.metaKey || !Ir(e) || u.isComposing) return;
      let c = at(a), f = e.current;
      if (!f || !gt(c, f)) return;
      let m = Zt(f), p = Bt(m, {
        tabbable: !0
      }, f);
      if (!c) return;
      p.currentNode = c;
      let h = u.shiftKey ? p.previousNode() : p.nextNode();
      h || (p.currentNode = u.shiftKey ? f[f.length - 1].nextElementSibling : f[0].previousElementSibling, h = u.shiftKey ? p.previousNode() : p.nextNode()), u.preventDefault(), h && Ot(h, !0);
    }, i = (u) => {
      (!Oe || bn(Oe, e)) && gt(we(u), e.current) ? (Oe = e, r.current = we(u)) : Ir(e) && !Gt(we(u), e) ? r.current ? r.current.focus() : Oe && Oe.current && go(Oe.current) : Ir(e) && (r.current = we(u));
    }, d = (u) => {
      n.current && cancelAnimationFrame(n.current), n.current = requestAnimationFrame(() => {
        let c = Ko(), f = (c === "virtual" || c === null) && Mo() && mi(), m = at(a);
        if (!f && m && Ir(e) && !Gt(m, e)) {
          Oe = e;
          let h = we(u);
          if (h && h.isConnected) {
            var p;
            r.current = h, (p = r.current) === null || p === void 0 || p.focus();
          } else Oe.current && go(Oe.current);
        }
      });
    };
    return a.addEventListener("keydown", s, !1), a.addEventListener("focusin", i, !1), o == null || o.forEach((u) => u.addEventListener("focusin", i, !1)), o == null || o.forEach((u) => u.addEventListener("focusout", d, !1)), () => {
      a.removeEventListener("keydown", s, !1), a.removeEventListener("focusin", i, !1), o == null || o.forEach((u) => u.removeEventListener("focusin", i, !1)), o == null || o.forEach((u) => u.removeEventListener("focusout", d, !1));
    };
  }, [
    e,
    t
  ]), De(() => () => {
    n.current && cancelAnimationFrame(n.current);
  }, [
    n
  ]);
}
function _i(e) {
  return Gt(e);
}
function gt(e, t) {
  return !e || !t ? !1 : t.some((r) => r.contains(e));
}
function Gt(e, t = null) {
  if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
  for (let { scopeRef: r } of Ge.traverse(Ge.getTreeNode(t)))
    if (r && gt(e, r.current)) return !0;
  return !1;
}
function Zf(e) {
  return Gt(e, Oe);
}
function bn(e, t) {
  var r;
  let n = (r = Ge.getTreeNode(t)) === null || r === void 0 ? void 0 : r.parent;
  for (; n; ) {
    if (n.scopeRef === e) return !0;
    n = n.parent;
  }
  return !1;
}
function Ot(e, t = !1) {
  if (e != null && !t) try {
    gn(e);
  } catch {
  }
  else if (e != null) try {
    e.focus();
  } catch {
  }
}
function Ri(e, t = !0) {
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
  Ot(Ri(e, t));
}
function qf(e, t) {
  const r = oe.useRef(t);
  de(() => {
    if (r.current) {
      Oe = e;
      const n = Ne(e.current ? e.current[0] : void 0);
      !gt(at(n), Oe.current) && e.current && go(e.current);
    }
    r.current = !1;
  }, [
    e
  ]);
}
function Jf(e, t, r) {
  De(() => {
    if (t || r) return;
    let n = e.current;
    const o = Ne(n ? n[0] : void 0);
    let a = (s) => {
      let i = we(s);
      gt(i, e.current) ? Oe = e : _i(i) || (Oe = null);
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
  let t = Ge.getTreeNode(Oe);
  for (; t && t.scopeRef !== e; ) {
    if (t.nodeToRestore) return !1;
    t = t.parent;
  }
  return (t == null ? void 0 : t.scopeRef) === e;
}
function Qf(e, t, r) {
  const n = J(typeof document < "u" ? at(Ne(e.current ? e.current[0] : void 0)) : null);
  De(() => {
    let o = e.current;
    const a = Ne(o ? o[0] : void 0);
    if (!t || r) return;
    let s = () => {
      (!Oe || bn(Oe, e)) && gt(at(a), e.current) && (Oe = e);
    };
    return a.addEventListener("focusin", s, !1), o == null || o.forEach((i) => i.addEventListener("focusin", s, !1)), () => {
      a.removeEventListener("focusin", s, !1), o == null || o.forEach((i) => i.removeEventListener("focusin", s, !1));
    };
  }, [
    e,
    r
  ]), De(() => {
    const o = Ne(e.current ? e.current[0] : void 0);
    if (!t) return;
    let a = (s) => {
      if (s.key !== "Tab" || s.altKey || s.ctrlKey || s.metaKey || !Ir(e) || s.isComposing) return;
      let i = o.activeElement;
      if (!Gt(i, e) || !Ja(e)) return;
      let d = Ge.getTreeNode(e);
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
        s.preventDefault(), s.stopPropagation(), f ? Ot(f, !0) : _i(u) ? Ot(u, !0) : i.blur();
      }
    };
    return r || o.addEventListener("keydown", a, !0), () => {
      r || o.removeEventListener("keydown", a, !0);
    };
  }, [
    e,
    t,
    r
  ]), De(() => {
    const o = Ne(e.current ? e.current[0] : void 0);
    if (!t) return;
    let a = Ge.getTreeNode(e);
    if (a) {
      var s;
      return a.nodeToRestore = (s = n.current) !== null && s !== void 0 ? s : void 0, () => {
        let i = Ge.getTreeNode(e);
        if (!i) return;
        let d = i.nodeToRestore, u = at(o);
        if (t && d && (u && Gt(u, e) || u === o.body && Ja(e))) {
          let c = Ge.clone();
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
                if (f.scopeRef && f.scopeRef.current && Ge.getTreeNode(f.scopeRef)) {
                  let m = Ri(f.scopeRef.current, !0);
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
  let n = t != null && t.tabbable ? ff : vi, o = (e == null ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null, a = Ne(o), s = Uu(a, e || a, NodeFilter.SHOW_ELEMENT, {
    acceptNode(i) {
      var d;
      return !(t == null || (d = t.from) === null || d === void 0) && d.contains(i) || t != null && t.tabbable && i.tagName === "INPUT" && i.getAttribute("type") === "radio" && (!Yf(i) || s.currentNode.tagName === "INPUT" && s.currentNode.type === "radio" && s.currentNode.name === i.name) ? NodeFilter.FILTER_REJECT : n(i) && (!r || gt(i, r)) && (!(t != null && t.accept) || t.accept(i)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
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
let Ge = new Xo();
function Li(e = {}) {
  let { autoFocus: t = !1, isTextInput: r, within: n } = e, o = J({
    isFocused: !1,
    isFocusVisible: t || Uo()
  }), [a, s] = ae(!1), [i, d] = ae(() => o.current.isFocused && o.current.isFocusVisible), u = ge(() => d(o.current.isFocused && o.current.isFocusVisible), []), c = ge((p) => {
    o.current.isFocused = p, s(p), u();
  }, [
    u
  ]);
  Df((p) => {
    o.current.isFocusVisible = p, u();
  }, [], {
    isTextInput: r
  });
  let { focusProps: f } = Ii({
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
function e0(e, t, r) {
  let { type: n } = e, { isOpen: o } = t;
  de(() => {
    r && r.current && wi.set(r.current, t.close);
  });
  let a;
  n === "menu" ? a = !0 : n === "listbox" && (a = "listbox");
  let s = Tn();
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
const Wn = typeof document < "u" && window.visualViewport, t0 = /* @__PURE__ */ new Set([
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
let qr = 0, Yn;
function r0(e = {}) {
  let { isDisabled: t } = e;
  De(() => {
    if (!t)
      return qr++, qr === 1 && (jn() ? Yn = o0() : Yn = n0()), () => {
        qr--, qr === 0 && Yn();
      };
  }, [
    t
  ]);
}
function n0() {
  let e = window.innerWidth - document.documentElement.clientWidth;
  return Lr(e > 0 && // Use scrollbar-gutter when supported because it also works for fixed positioned elements.
  ("scrollbarGutter" in document.documentElement.style ? qt(document.documentElement, "scrollbarGutter", "stable") : qt(document.documentElement, "paddingRight", `${e}px`)), qt(document.documentElement, "overflow", "hidden"));
}
function o0() {
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
    a0(c) && (i(), c.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
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
    s = Lr(Pr(window, "scroll", u), qt(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), qt(document.documentElement, "overflow", "hidden"), qt(document.body, "marginTop", `-${f}px`), () => {
      window.scrollTo(c, f);
    }), window.scrollTo(0, 0);
  }, d = Lr(Pr(document, "touchstart", r, {
    passive: !1,
    capture: !0
  }), Pr(document, "touchmove", n, {
    passive: !1,
    capture: !0
  }), Pr(document, "touchend", o, {
    passive: !1,
    capture: !0
  }), Pr(document, "focus", a, !0));
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
function Pr(e, t, r, n) {
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
function a0(e) {
  return e instanceof HTMLInputElement && !t0.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
const s0 = /* @__PURE__ */ zs({});
function Mi() {
  var e;
  return (e = mt(s0)) !== null && e !== void 0 ? e : {};
}
const bo = /* @__PURE__ */ oe.createContext(null);
function i0(e) {
  let { children: t } = e, r = mt(bo), [n, o] = ae(0), a = _e(() => ({
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
  return /* @__PURE__ */ oe.createElement(bo.Provider, {
    value: a
  }, t);
}
function l0() {
  let e = mt(bo);
  return {
    modalProviderProps: {
      "aria-hidden": e && e.modalCount > 0 ? !0 : void 0
    }
  };
}
function d0(e) {
  let { modalProviderProps: t } = l0();
  return /* @__PURE__ */ oe.createElement("div", {
    "data-overlay-container": !0,
    ...e,
    ...t
  });
}
function c0(e) {
  return /* @__PURE__ */ oe.createElement(i0, null, /* @__PURE__ */ oe.createElement(d0, e));
}
function ts(e) {
  let t = Nn(), { portalContainer: r = t ? null : document.body, ...n } = e, { getContainer: o } = Mi();
  if (!e.portalContainer && o && (r = o()), oe.useEffect(() => {
    if (r != null && r.closest("[data-overlay-container]")) throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.");
  }, [
    r
  ]), !r) return null;
  let a = /* @__PURE__ */ oe.createElement(c0, n);
  return /* @__PURE__ */ Gs.createPortal(a, r);
}
var Fi = {};
Fi = {
  dismiss: "تجاهل"
};
var Di = {};
Di = {
  dismiss: "Отхвърляне"
};
var zi = {};
zi = {
  dismiss: "Odstranit"
};
var Gi = {};
Gi = {
  dismiss: "Luk"
};
var Bi = {};
Bi = {
  dismiss: "Schließen"
};
var Vi = {};
Vi = {
  dismiss: "Απόρριψη"
};
var Hi = {};
Hi = {
  dismiss: "Dismiss"
};
var Ui = {};
Ui = {
  dismiss: "Descartar"
};
var Ki = {};
Ki = {
  dismiss: "Lõpeta"
};
var Wi = {};
Wi = {
  dismiss: "Hylkää"
};
var Yi = {};
Yi = {
  dismiss: "Rejeter"
};
var Xi = {};
Xi = {
  dismiss: "התעלם"
};
var Zi = {};
Zi = {
  dismiss: "Odbaci"
};
var qi = {};
qi = {
  dismiss: "Elutasítás"
};
var Ji = {};
Ji = {
  dismiss: "Ignora"
};
var Qi = {};
Qi = {
  dismiss: "閉じる"
};
var el = {};
el = {
  dismiss: "무시"
};
var tl = {};
tl = {
  dismiss: "Atmesti"
};
var rl = {};
rl = {
  dismiss: "Nerādīt"
};
var nl = {};
nl = {
  dismiss: "Lukk"
};
var ol = {};
ol = {
  dismiss: "Negeren"
};
var al = {};
al = {
  dismiss: "Zignoruj"
};
var sl = {};
sl = {
  dismiss: "Descartar"
};
var il = {};
il = {
  dismiss: "Dispensar"
};
var ll = {};
ll = {
  dismiss: "Revocare"
};
var dl = {};
dl = {
  dismiss: "Пропустить"
};
var cl = {};
cl = {
  dismiss: "Zrušiť"
};
var ul = {};
ul = {
  dismiss: "Opusti"
};
var fl = {};
fl = {
  dismiss: "Odbaci"
};
var pl = {};
pl = {
  dismiss: "Avvisa"
};
var gl = {};
gl = {
  dismiss: "Kapat"
};
var ml = {};
ml = {
  dismiss: "Скасувати"
};
var bl = {};
bl = {
  dismiss: "取消"
};
var hl = {};
hl = {
  dismiss: "關閉"
};
var $l = {};
$l = {
  "ar-AE": Fi,
  "bg-BG": Di,
  "cs-CZ": zi,
  "da-DK": Gi,
  "de-DE": Bi,
  "el-GR": Vi,
  "en-US": Hi,
  "es-ES": Ui,
  "et-EE": Ki,
  "fi-FI": Wi,
  "fr-FR": Yi,
  "he-IL": Xi,
  "hr-HR": Zi,
  "hu-HU": qi,
  "it-IT": Ji,
  "ja-JP": Qi,
  "ko-KR": el,
  "lt-LT": tl,
  "lv-LV": rl,
  "nb-NO": nl,
  "nl-NL": ol,
  "pl-PL": al,
  "pt-BR": sl,
  "pt-PT": il,
  "ro-RO": ll,
  "ru-RU": dl,
  "sk-SK": cl,
  "sl-SI": ul,
  "sr-SP": fl,
  "sv-SE": pl,
  "tr-TR": gl,
  "uk-UA": ml,
  "zh-CN": bl,
  "zh-TW": hl
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
function u0(e = {}) {
  let { style: t, isFocusable: r } = e, [n, o] = ae(!1), { focusWithinProps: a } = Wo({
    isDisabled: !r,
    onFocusWithinChange: (i) => o(i)
  }), s = _e(() => n ? t : t ? {
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
function f0(e) {
  let { children: t, elementType: r = "div", isFocusable: n, style: o, ...a } = e, { visuallyHiddenProps: s } = u0(e);
  return /* @__PURE__ */ oe.createElement(r, At(a, s), t);
}
function p0(e) {
  return e && e.__esModule ? e.default : e;
}
function ns(e) {
  let { onDismiss: t, ...r } = e, n = Au(p0($l), "@react-aria/overlays"), o = nf(r, n.format("dismiss")), a = () => {
    t && t();
  };
  return /* @__PURE__ */ oe.createElement(f0, null, /* @__PURE__ */ oe.createElement("button", {
    ...o,
    tabIndex: -1,
    onClick: a,
    style: {
      width: 1,
      height: 1
    }
  }));
}
const vl = /* @__PURE__ */ oe.createContext(null);
function g0(e) {
  let t = Nn(), { portalContainer: r = t ? null : document.body, isExiting: n } = e, [o, a] = ae(!1), s = _e(() => ({
    contain: o,
    setContain: a
  }), [
    o,
    a
  ]), { getContainer: i } = Mi();
  if (!e.portalContainer && i && (r = i()), !r) return null;
  let d = e.children;
  return e.disableFocusManagement || (d = /* @__PURE__ */ oe.createElement(Kf, {
    restoreFocus: !0,
    contain: (e.shouldContainFocus || o) && !n
  }, d)), d = /* @__PURE__ */ oe.createElement(vl.Provider, {
    value: s
  }, /* @__PURE__ */ oe.createElement(Vf, null, d)), /* @__PURE__ */ Gs.createPortal(d, r);
}
function m0() {
  let e = mt(vl), t = e == null ? void 0 : e.setContain;
  De(() => {
    t == null || t(!0);
  }, [
    t
  ]);
}
function Zo(e) {
  return Pe(e);
}
var yl = (e, t, r = !0) => {
  if (!t)
    return [e, {}];
  const n = t.reduce((o, a) => a in e ? { ...o, [a]: e[a] } : o, {});
  return r ? [Object.keys(e).filter((a) => !t.includes(a)).reduce((a, s) => ({ ...a, [s]: e[s] }), {}), n] : [e, n];
}, b0 = {
  default: "bg-default text-default-foreground",
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  success: "bg-success text-success-foreground",
  warning: "bg-warning text-warning-foreground",
  danger: "bg-danger text-danger-foreground",
  foreground: "bg-foreground text-background"
}, h0 = {
  default: "shadow-lg shadow-default/50 bg-default text-default-foreground",
  primary: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
  secondary: "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
  success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
  warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
  danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground"
}, $0 = {
  default: "bg-transparent border-default text-foreground",
  primary: "bg-transparent border-primary text-primary",
  secondary: "bg-transparent border-secondary text-secondary",
  success: "bg-transparent border-success text-success",
  warning: "bg-transparent border-warning text-warning",
  danger: "bg-transparent border-danger text-danger"
}, v0 = {
  default: "bg-default/40 text-default-700",
  primary: "bg-primary/20 text-primary-600",
  secondary: "bg-secondary/20 text-secondary-600",
  success: "bg-success/20 text-success-700 dark:text-success",
  warning: "bg-warning/20 text-warning-700 dark:text-warning",
  danger: "bg-danger/20 text-danger-600 dark:text-danger-500"
}, y0 = {
  default: "border-default bg-default-100 text-default-foreground",
  primary: "border-default bg-default-100 text-primary",
  secondary: "border-default bg-default-100 text-secondary",
  success: "border-default bg-default-100 text-success",
  warning: "border-default bg-default-100 text-warning",
  danger: "border-default bg-default-100 text-danger"
}, x0 = {
  default: "bg-transparent text-default-foreground",
  primary: "bg-transparent text-primary",
  secondary: "bg-transparent text-secondary",
  success: "bg-transparent text-success",
  warning: "bg-transparent text-warning",
  danger: "bg-transparent text-danger"
}, w0 = {
  default: "border-default text-default-foreground",
  primary: "border-primary text-primary",
  secondary: "border-secondary text-secondary",
  success: "border-success text-success",
  warning: "border-warning text-warning",
  danger: "border-danger text-danger"
}, le = {
  solid: b0,
  shadow: h0,
  bordered: $0,
  flat: v0,
  faded: y0,
  light: x0,
  ghost: w0
}, k0 = {
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
}, E0 = {
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
}, N0 = {
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
}, P0 = {
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
}, $t = "250ms", T0 = {
  /**
   * Transition utilities
   */
  ".transition-background": {
    "transition-property": "background",
    "transition-timing-function": "ease",
    "transition-duration": $t
  },
  ".transition-colors-opacity": {
    "transition-property": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity",
    "transition-timing-function": "ease",
    "transition-duration": $t
  },
  ".transition-width": {
    "transition-property": "width",
    "transition-timing-function": "ease",
    "transition-duration": $t
  },
  ".transition-height": {
    "transition-property": "height",
    "transition-timing-function": "ease",
    "transition-duration": $t
  },
  ".transition-size": {
    "transition-property": "width, height",
    "transition-timing-function": "ease",
    "transition-duration": $t
  },
  ".transition-left": {
    "transition-property": "left",
    "transition-timing-function": "ease",
    "transition-duration": $t
  },
  ".transition-transform-opacity": {
    "transition-property": "transform, scale, opacity rotate",
    "transition-timing-function": "ease",
    "transition-duration": $t
  },
  ".transition-transform-background": {
    "transition-property": "transform, scale, background",
    "transition-timing-function": "ease",
    "transition-duration": $t
  },
  ".transition-transform-colors": {
    "transition-property": "transform, scale, color, background, background-color, border-color, text-decoration-color, fill, stroke",
    "transition-timing-function": "ease",
    "transition-duration": $t
  },
  ".transition-transform-colors-opacity": {
    "transition-property": "transform, scale, color, background, background-color, border-color, text-decoration-color, fill, stroke, opacity",
    "transition-timing-function": "ease",
    "transition-duration": $t
  }
}, C0 = {
  ...E0,
  ...T0,
  ...N0,
  ...P0,
  ...k0
}, Jr = ["small", "medium", "large"], os = {
  theme: {
    spacing: ["divider"],
    radius: Jr
  },
  classGroups: {
    shadow: [{ shadow: Jr }],
    opacity: [{ opacity: ["disabled"] }],
    "font-size": [{ text: ["tiny", ...Jr] }],
    "border-w": [{ border: Jr }],
    "bg-image": [
      "bg-stripe-gradient-default",
      "bg-stripe-gradient-primary",
      "bg-stripe-gradient-secondary",
      "bg-stripe-gradient-success",
      "bg-stripe-gradient-warning",
      "bg-stripe-gradient-danger"
    ],
    transition: Object.keys(C0).filter((e) => e.includes(".transition")).map((e) => e.replace(".", ""))
    // remove the dot from the key, .transition-background -> transition-background
  }
}, S0 = /\s+/g, ho = (e) => typeof e != "string" || !e ? e : e.replace(S0, " ").trim(), hn = (...e) => {
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
  return t.length > 0 ? ho(t.join(" ")) : void 0;
}, as = (e) => e === !1 ? "false" : e === !0 ? "true" : e === 0 ? "0" : e, nt = (e) => {
  if (!e || typeof e != "object") return !0;
  for (let t in e) return !1;
  return !0;
}, j0 = (e, t) => {
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
    r in e ? e[r] = hn(e[r], n) : e[r] = n;
  }
  return e;
}, xl = (e, t) => {
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    Array.isArray(n) ? xl(n, t) : n && t.push(n);
  }
}, wl = (...e) => {
  let t = [];
  xl(e, t);
  let r = [];
  for (let n = 0; n < t.length; n++) t[n] && r.push(t[n]);
  return r;
}, $o = (e, t) => {
  let r = {};
  for (let n in e) {
    let o = e[n];
    if (n in t) {
      let a = t[n];
      Array.isArray(o) || Array.isArray(a) ? r[n] = wl(a, o) : typeof o == "object" && typeof a == "object" && o && a ? r[n] = $o(o, a) : r[n] = a + " " + o;
    } else r[n] = o;
  }
  for (let n in t) n in e || (r[n] = t[n]);
  return r;
}, O0 = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 };
function I0() {
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
var St = I0(), A0 = (e) => {
  let t = (r, n) => {
    let { extend: o = null, slots: a = {}, variants: s = {}, compoundVariants: i = [], compoundSlots: d = [], defaultVariants: u = {} } = r, c = { ...O0, ...n }, f = o != null && o.base ? hn(o.base, r == null ? void 0 : r.base) : r == null ? void 0 : r.base, m = o != null && o.variants && !nt(o.variants) ? $o(s, o.variants) : s, p = o != null && o.defaultVariants && !nt(o.defaultVariants) ? { ...o.defaultVariants, ...u } : u;
    !nt(c.twMergeConfig) && !j0(c.twMergeConfig, St.cachedTwMergeConfig) && (St.didTwMergeConfigChange = !0, St.cachedTwMergeConfig = c.twMergeConfig);
    let h = nt(o == null ? void 0 : o.slots), w = nt(a) ? {} : { base: hn(r == null ? void 0 : r.base, h && (o == null ? void 0 : o.base)), ...a }, $ = h ? w : ss({ ...o == null ? void 0 : o.slots }, nt(w) ? { base: r == null ? void 0 : r.base } : w), k = nt(o == null ? void 0 : o.compoundVariants) ? i : wl(o == null ? void 0 : o.compoundVariants, i), v = (P) => {
      if (nt(m) && nt(a) && h) return e(f, P == null ? void 0 : P.class, P == null ? void 0 : P.className)(c);
      if (k && !Array.isArray(k)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof k}`);
      if (d && !Array.isArray(d)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof d}`);
      let O = (N, R, b = [], C) => {
        let S = b;
        if (typeof R == "string") {
          let A = ho(R).split(" ");
          for (let _ = 0; _ < A.length; _++) S.push(`${N}:${A[_]}`);
        } else if (Array.isArray(R)) for (let A = 0; A < R.length; A++) S.push(`${N}:${R[A]}`);
        else if (typeof R == "object" && typeof C == "string" && C in R) {
          let A = R[C];
          if (A && typeof A == "string") {
            let _ = ho(A).split(" "), E = [];
            for (let L = 0; L < _.length; L++) E.push(`${N}:${_[L]}`);
            S[C] = S[C] ? S[C].concat(E) : E;
          } else if (Array.isArray(A) && A.length > 0) {
            let _ = [];
            for (let E = 0; E < A.length; E++) _.push(`${N}:${A[E]}`);
            S[C] = _;
          }
        }
        return S;
      }, I = (N, R = m, b = null, C = null) => {
        let S = R[N];
        if (!S || nt(S)) return null;
        let A = (C == null ? void 0 : C[N]) ?? (P == null ? void 0 : P[N]);
        if (A === null) return null;
        let _ = as(A), E = Array.isArray(c.responsiveVariants) && c.responsiveVariants.length > 0 || c.responsiveVariants === !0, L = p == null ? void 0 : p[N], K = [];
        if (typeof _ == "object" && E) for (let [G, M] of Object.entries(_)) {
          let V = S[M];
          if (G === "initial") {
            L = M;
            continue;
          }
          Array.isArray(c.responsiveVariants) && !c.responsiveVariants.includes(G) || (K = O(G, V, K, b));
        }
        let U = _ != null && typeof _ != "object" ? _ : as(L), X = S[U || "false"];
        return typeof K == "object" && typeof b == "string" && K[b] ? ss(K, X) : K.length > 0 ? (K.push(X), b === "base" ? K.join(" ") : K) : X;
      }, H = () => {
        if (!m) return null;
        let N = Object.keys(m), R = [];
        for (let b = 0; b < N.length; b++) {
          let C = I(N[b], m);
          C && R.push(C);
        }
        return R;
      }, z = (N, R) => {
        if (!m || typeof m != "object") return null;
        let b = [];
        for (let C in m) {
          let S = I(C, m, N, R), A = N === "base" && typeof S == "string" ? S : S && S[N];
          A && b.push(A);
        }
        return b;
      }, F = {};
      for (let N in P) {
        let R = P[N];
        R !== void 0 && (F[N] = R);
      }
      let D = (N, R) => {
        var C;
        let b = typeof (P == null ? void 0 : P[N]) == "object" ? { [N]: (C = P[N]) == null ? void 0 : C.initial } : {};
        return { ...p, ...F, ...b, ...R };
      }, g = (N = [], R) => {
        let b = [], C = N.length;
        for (let S = 0; S < C; S++) {
          let { class: A, className: _, ...E } = N[S], L = !0, K = D(null, R);
          for (let U in E) {
            let X = E[U], G = K[U];
            if (Array.isArray(X)) {
              if (!X.includes(G)) {
                L = !1;
                break;
              }
            } else {
              if ((X == null || X === !1) && (G == null || G === !1)) continue;
              if (G !== X) {
                L = !1;
                break;
              }
            }
          }
          L && (A && b.push(A), _ && b.push(_));
        }
        return b;
      }, T = (N) => {
        let R = g(k, N);
        if (!Array.isArray(R)) return R;
        let b = {}, C = e;
        for (let S = 0; S < R.length; S++) {
          let A = R[S];
          if (typeof A == "string") b.base = C(b.base, A)(c);
          else if (typeof A == "object") for (let _ in A) b[_] = C(b[_], A[_])(c);
        }
        return b;
      }, y = (N) => {
        if (d.length < 1) return null;
        let R = {}, b = D(null, N);
        for (let C = 0; C < d.length; C++) {
          let { slots: S = [], class: A, className: _, ...E } = d[C];
          if (!nt(E)) {
            let L = !0;
            for (let K in E) {
              let U = b[K], X = E[K];
              if (U === void 0 || (Array.isArray(X) ? !X.includes(U) : X !== U)) {
                L = !1;
                break;
              }
            }
            if (!L) continue;
          }
          for (let L = 0; L < S.length; L++) {
            let K = S[L];
            R[K] || (R[K] = []), R[K].push([A, _]);
          }
        }
        return R;
      };
      if (!nt(a) || !h) {
        let N = {};
        if (typeof $ == "object" && !nt($)) {
          let R = e;
          for (let b in $) N[b] = (C) => {
            let S = T(C), A = y(C);
            return R($[b], z(b, C), S ? S[b] : void 0, A ? A[b] : void 0, C == null ? void 0 : C.class, C == null ? void 0 : C.className)(c);
          };
        }
        return N;
      }
      return e(f, H(), g(k), P == null ? void 0 : P.class, P == null ? void 0 : P.className)(c);
    }, j = () => {
      if (!(!m || typeof m != "object")) return Object.keys(m);
    };
    return v.variantKeys = j(), v.extend = o, v.base = f, v.slots = $, v.variants = m, v.defaultVariants = p, v.compoundSlots = d, v.compoundVariants = k, v;
  };
  return { tv: t, createTV: (r) => (n, o) => t(n, o ? $o(r, o) : r) };
};
const qo = "-", _0 = (e) => {
  const t = L0(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(qo);
      return i[0] === "" && i.length !== 1 && i.shift(), kl(i, t) || R0(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const d = r[s] || [];
      return i && n[s] ? [...d, ...n[s]] : d;
    }
  };
}, kl = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? kl(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(qo);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}, is = /^\[(.+)\]$/, R0 = (e) => {
  if (is.test(e)) {
    const t = is.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, L0 = (e) => {
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
      if (M0(o)) {
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
}, M0 = (e) => e.isThemeGetter, F0 = (e) => {
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
}, yo = "!", xo = ":", D0 = xo.length, z0 = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const a = [];
    let s = 0, i = 0, d = 0, u;
    for (let h = 0; h < o.length; h++) {
      let w = o[h];
      if (s === 0 && i === 0) {
        if (w === xo) {
          a.push(o.slice(d, h)), d = h + D0;
          continue;
        }
        if (w === "/") {
          u = h;
          continue;
        }
      }
      w === "[" ? s++ : w === "]" ? s-- : w === "(" ? i++ : w === ")" && i--;
    }
    const c = a.length === 0 ? o : o.substring(d), f = G0(c), m = f !== c, p = u && u > d ? u - d : void 0;
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
}, G0 = (e) => e.endsWith(yo) ? e.substring(0, e.length - 1) : e.startsWith(yo) ? e.substring(1) : e, B0 = (e) => {
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
}, V0 = (e) => ({
  cache: F0(e.cacheSize),
  parseClassName: z0(e),
  sortModifiers: B0(e),
  ..._0(e)
}), H0 = /\s+/, U0 = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, s = [], i = e.trim().split(H0);
  let d = "";
  for (let u = i.length - 1; u >= 0; u -= 1) {
    const c = i[u], {
      isExternal: f,
      modifiers: m,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: w
    } = r(c);
    if (f) {
      d = c + (d.length > 0 ? " " + d : d);
      continue;
    }
    let $ = !!w, k = n($ ? h.substring(0, w) : h);
    if (!k) {
      if (!$) {
        d = c + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (k = n(h), !k) {
        d = c + (d.length > 0 ? " " + d : d);
        continue;
      }
      $ = !1;
    }
    const v = a(m).join(":"), j = p ? v + yo : v, P = j + k;
    if (s.includes(P))
      continue;
    s.push(P);
    const O = o(k, $);
    for (let I = 0; I < O.length; ++I) {
      const H = O[I];
      s.push(j + H);
    }
    d = c + (d.length > 0 ? " " + d : d);
  }
  return d;
};
function K0() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = El(t)) && (n && (n += " "), n += r);
  return n;
}
const El = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = El(e[n])) && (r && (r += " "), r += t);
  return r;
};
function wo(e, ...t) {
  let r, n, o, a = s;
  function s(d) {
    const u = t.reduce((c, f) => f(c), e());
    return r = V0(u), n = r.cache.get, o = r.cache.set, a = i, i(d);
  }
  function i(d) {
    const u = n(d);
    if (u)
      return u;
    const c = U0(d, r);
    return o(d, c), c;
  }
  return function() {
    return a(K0.apply(null, arguments));
  };
}
const Ve = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Nl = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Pl = /^\((?:(\w[\w-]*):)?(.+)\)$/i, W0 = /^\d+\/\d+$/, Y0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, X0 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Z0 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, q0 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, J0 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ar = (e) => W0.test(e), he = (e) => !!e && !Number.isNaN(Number(e)), Dt = (e) => !!e && Number.isInteger(Number(e)), Xn = (e) => e.endsWith("%") && he(e.slice(0, -1)), Pt = (e) => Y0.test(e), Q0 = () => !0, ep = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  X0.test(e) && !Z0.test(e)
), Tl = () => !1, tp = (e) => q0.test(e), rp = (e) => J0.test(e), np = (e) => !Q(e) && !ee(e), op = (e) => yr(e, jl, Tl), Q = (e) => Nl.test(e), Kt = (e) => yr(e, Ol, ep), Zn = (e) => yr(e, dp, he), ds = (e) => yr(e, Cl, Tl), ap = (e) => yr(e, Sl, rp), Qr = (e) => yr(e, Il, tp), ee = (e) => Pl.test(e), Tr = (e) => xr(e, Ol), sp = (e) => xr(e, cp), cs = (e) => xr(e, Cl), ip = (e) => xr(e, jl), lp = (e) => xr(e, Sl), en = (e) => xr(e, Il, !0), yr = (e, t, r) => {
  const n = Nl.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, xr = (e, t, r = !1) => {
  const n = Pl.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, Cl = (e) => e === "position" || e === "percentage", Sl = (e) => e === "image" || e === "url", jl = (e) => e === "length" || e === "size" || e === "bg-size", Ol = (e) => e === "length", dp = (e) => e === "number", cp = (e) => e === "family-name", Il = (e) => e === "shadow", ko = () => {
  const e = Ve("color"), t = Ve("font"), r = Ve("text"), n = Ve("font-weight"), o = Ve("tracking"), a = Ve("leading"), s = Ve("breakpoint"), i = Ve("container"), d = Ve("spacing"), u = Ve("radius"), c = Ve("shadow"), f = Ve("inset-shadow"), m = Ve("text-shadow"), p = Ve("drop-shadow"), h = Ve("blur"), w = Ve("perspective"), $ = Ve("aspect"), k = Ve("ease"), v = Ve("animate"), j = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], P = () => [
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
  ], O = () => [...P(), ee, Q], I = () => ["auto", "hidden", "clip", "visible", "scroll"], H = () => ["auto", "contain", "none"], z = () => [ee, Q, d], F = () => [ar, "full", "auto", ...z()], D = () => [Dt, "none", "subgrid", ee, Q], g = () => ["auto", {
    span: ["full", Dt, ee, Q]
  }, Dt, ee, Q], T = () => [Dt, "auto", ee, Q], y = () => ["auto", "min", "max", "fr", ee, Q], N = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], R = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], b = () => ["auto", ...z()], C = () => [ar, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...z()], S = () => [e, ee, Q], A = () => [...P(), cs, ds, {
    position: [ee, Q]
  }], _ = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], E = () => ["auto", "cover", "contain", ip, op, {
    size: [ee, Q]
  }], L = () => [Xn, Tr, Kt], K = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    ee,
    Q
  ], U = () => ["", he, Tr, Kt], X = () => ["solid", "dashed", "dotted", "double"], G = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], M = () => [he, Xn, cs, ds], V = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    h,
    ee,
    Q
  ], se = () => ["none", he, ee, Q], ce = () => ["none", he, ee, Q], fe = () => [he, ee, Q], ve = () => [ar, "full", ...z()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Pt],
      breakpoint: [Pt],
      color: [Q0],
      container: [Pt],
      "drop-shadow": [Pt],
      ease: ["in", "out", "in-out"],
      font: [np],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Pt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Pt],
      shadow: [Pt],
      spacing: ["px", he],
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
        aspect: ["auto", "square", ar, Q, ee, $]
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
        columns: [he, Q, ee, i]
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
        inset: F()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": F()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": F()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: F()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: F()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: F()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: F()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: F()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: F()
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
        z: [Dt, "auto", ee, Q]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ar, "full", "auto", i, ...z()]
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
        flex: [he, ar, "auto", "initial", "none", Q]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", he, ee, Q]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", he, ee, Q]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Dt, "first", "last", "none", ee, Q]
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
        "auto-cols": y()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": y()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: z()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": z()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": z()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...N(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...R(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...R()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...N()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...R(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...R(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": N()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...R(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...R()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: z()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: z()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: z()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: z()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: z()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: z()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: z()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: z()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: z()
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
        "space-x": z()
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
        "space-y": z()
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
        size: C()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...C()]
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
          ...C()
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
          ...C()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...C()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...C()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...C()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Tr, Kt]
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
        font: [n, ee, Zn]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Xn, Q]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [sp, Q, t]
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
        tracking: [o, ee, Q]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [he, "none", ee, Zn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...z()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ee, Q]
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
        list: ["disc", "decimal", "none", ee, Q]
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
        placeholder: S()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: S()
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
        decoration: [...X(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [he, "from-font", "auto", ee, Kt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: S()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [he, "auto", ee, Q]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ee, Q]
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
        content: ["none", ee, Q]
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
        bg: A()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: _()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: E()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Dt, ee, Q],
          radial: ["", ee, Q],
          conic: [Dt, ee, Q]
        }, lp, ap]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: S()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: L()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: L()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: L()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: S()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: S()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: S()
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
        border: U()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": U()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": U()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": U()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": U()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": U()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": U()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": U()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": U()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": U()
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
        "divide-y": U()
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
        border: [...X(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...X(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: S()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": S()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": S()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": S()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": S()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": S()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": S()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": S()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": S()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: S()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...X(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [he, ee, Q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", he, Tr, Kt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: S()
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
          en,
          Qr
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: S()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, en, Qr]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": S()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: U()
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
        ring: S()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [he, Kt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": S()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": U()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": S()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", m, en, Qr]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": S()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [he, ee, Q]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...G(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": G()
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
        "mask-linear": [he]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": M()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": M()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": S()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": S()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": M()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": M()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": S()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": S()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": M()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": M()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": S()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": S()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": M()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": M()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": S()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": S()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": M()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": M()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": S()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": S()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": M()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": M()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": S()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": S()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": M()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": M()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": S()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": S()
      }],
      "mask-image-radial": [{
        "mask-radial": [ee, Q]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": M()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": M()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": S()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": S()
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
        "mask-radial-at": P()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [he]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": M()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": M()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": S()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": S()
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
        mask: A()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: _()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: E()
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
        mask: ["none", ee, Q]
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
          ee,
          Q
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: V()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [he, ee, Q]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [he, ee, Q]
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
          en,
          Qr
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": S()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", he, ee, Q]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [he, ee, Q]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", he, ee, Q]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [he, ee, Q]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", he, ee, Q]
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
          ee,
          Q
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": V()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [he, ee, Q]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [he, ee, Q]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", he, ee, Q]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [he, ee, Q]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", he, ee, Q]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [he, ee, Q]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [he, ee, Q]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", he, ee, Q]
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
        "border-spacing": z()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": z()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": z()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ee, Q]
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
        duration: [he, "initial", ee, Q]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", k, ee, Q]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [he, ee, Q]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", v, ee, Q]
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
        perspective: [w, ee, Q]
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
        rotate: se()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": se()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": se()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": se()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ce()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ce()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ce()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ce()
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
        skew: fe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": fe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": fe()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [ee, Q, "", "none", "gpu", "cpu"]
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
        translate: ve()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ve()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ve()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ve()
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
        accent: S()
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
        caret: S()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ee, Q]
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
        "will-change": ["auto", "scroll", "contents", "transform", ee, Q]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...S()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [he, Tr, Kt, Zn]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...S()]
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
}, up = (e, {
  cacheSize: t,
  prefix: r,
  experimentalParseClassName: n,
  extend: o = {},
  override: a = {}
}) => (Ar(e, "cacheSize", t), Ar(e, "prefix", r), Ar(e, "experimentalParseClassName", n), tn(e.theme, a.theme), tn(e.classGroups, a.classGroups), tn(e.conflictingClassGroups, a.conflictingClassGroups), tn(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), Ar(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), rn(e.theme, o.theme), rn(e.classGroups, o.classGroups), rn(e.conflictingClassGroups, o.conflictingClassGroups), rn(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Al(e, o, "orderSensitiveModifiers"), e), Ar = (e, t, r) => {
  r !== void 0 && (e[t] = r);
}, tn = (e, t) => {
  if (t)
    for (const r in t)
      Ar(e, r, t[r]);
}, rn = (e, t) => {
  if (t)
    for (const r in t)
      Al(e, t, r);
}, Al = (e, t, r) => {
  const n = t[r];
  n !== void 0 && (e[r] = e[r] ? e[r].concat(n) : n);
}, fp = (e, ...t) => typeof e == "function" ? wo(ko, e, ...t) : wo(() => up(ko(), e), ...t), pp = /* @__PURE__ */ wo(ko);
var gp = (e) => nt(e) ? pp : fp({ ...e, extend: { theme: e.theme, classGroups: e.classGroups, conflictingClassGroupModifiers: e.conflictingClassGroupModifiers, conflictingClassGroups: e.conflictingClassGroups, ...e.extend } }), mp = (...e) => (t) => {
  let r = hn(e);
  return !r || !t.twMerge ? r : ((!St.cachedTwMerge || St.didTwMergeConfigChange) && (St.didTwMergeConfigChange = !1, St.cachedTwMerge = gp(St.cachedTwMergeConfig)), St.cachedTwMerge(r) || void 0);
}, { tv: bp } = A0(mp), On = (e, t) => {
  var r, n, o;
  return bp(e, {
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
}, us = On({
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
}), _l = [
  "outline-solid outline-transparent",
  "data-[focus-visible=true]:z-10",
  "data-[focus-visible=true]:outline-2",
  "data-[focus-visible=true]:outline-focus",
  "data-[focus-visible=true]:outline-offset-2"
], sr = {
  default: ["[&+.border-medium.border-default]:ms-[calc(var(--heroui-border-width-medium)*-1)]"],
  primary: ["[&+.border-medium.border-primary]:ms-[calc(var(--heroui-border-width-medium)*-1)]"],
  secondary: [
    "[&+.border-medium.border-secondary]:ms-[calc(var(--heroui-border-width-medium)*-1)]"
  ],
  success: ["[&+.border-medium.border-success]:ms-[calc(var(--heroui-border-width-medium)*-1)]"],
  warning: ["[&+.border-medium.border-warning]:ms-[calc(var(--heroui-border-width-medium)*-1)]"],
  danger: ["[&+.border-medium.border-danger]:ms-[calc(var(--heroui-border-width-medium)*-1)]"]
}, $n = On({
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
      ..._l
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
        content: le.solid.foreground
      },
      primary: {
        base: "before:bg-primary",
        content: le.solid.primary
      },
      secondary: {
        base: "before:bg-secondary",
        content: le.solid.secondary
      },
      success: {
        base: "before:bg-success",
        content: le.solid.success
      },
      warning: {
        base: "before:bg-warning",
        content: le.solid.warning
      },
      danger: {
        base: "before:bg-danger",
        content: le.solid.danger
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
}), hp = On({
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
    ..._l
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
      class: le.solid.default
    },
    {
      variant: "solid",
      color: "primary",
      class: le.solid.primary
    },
    {
      variant: "solid",
      color: "secondary",
      class: le.solid.secondary
    },
    {
      variant: "solid",
      color: "success",
      class: le.solid.success
    },
    {
      variant: "solid",
      color: "warning",
      class: le.solid.warning
    },
    {
      variant: "solid",
      color: "danger",
      class: le.solid.danger
    },
    // shadow / color
    {
      variant: "shadow",
      color: "default",
      class: le.shadow.default
    },
    {
      variant: "shadow",
      color: "primary",
      class: le.shadow.primary
    },
    {
      variant: "shadow",
      color: "secondary",
      class: le.shadow.secondary
    },
    {
      variant: "shadow",
      color: "success",
      class: le.shadow.success
    },
    {
      variant: "shadow",
      color: "warning",
      class: le.shadow.warning
    },
    {
      variant: "shadow",
      color: "danger",
      class: le.shadow.danger
    },
    // bordered / color
    {
      variant: "bordered",
      color: "default",
      class: le.bordered.default
    },
    {
      variant: "bordered",
      color: "primary",
      class: le.bordered.primary
    },
    {
      variant: "bordered",
      color: "secondary",
      class: le.bordered.secondary
    },
    {
      variant: "bordered",
      color: "success",
      class: le.bordered.success
    },
    {
      variant: "bordered",
      color: "warning",
      class: le.bordered.warning
    },
    {
      variant: "bordered",
      color: "danger",
      class: le.bordered.danger
    },
    // flat / color
    {
      variant: "flat",
      color: "default",
      class: le.flat.default
    },
    {
      variant: "flat",
      color: "primary",
      class: le.flat.primary
    },
    {
      variant: "flat",
      color: "secondary",
      class: le.flat.secondary
    },
    {
      variant: "flat",
      color: "success",
      class: le.flat.success
    },
    {
      variant: "flat",
      color: "warning",
      class: le.flat.warning
    },
    {
      variant: "flat",
      color: "danger",
      class: le.flat.danger
    },
    // faded / color
    {
      variant: "faded",
      color: "default",
      class: le.faded.default
    },
    {
      variant: "faded",
      color: "primary",
      class: le.faded.primary
    },
    {
      variant: "faded",
      color: "secondary",
      class: le.faded.secondary
    },
    {
      variant: "faded",
      color: "success",
      class: le.faded.success
    },
    {
      variant: "faded",
      color: "warning",
      class: le.faded.warning
    },
    {
      variant: "faded",
      color: "danger",
      class: le.faded.danger
    },
    // light / color
    {
      variant: "light",
      color: "default",
      class: [le.light.default, "data-[hover=true]:bg-default/40"]
    },
    {
      variant: "light",
      color: "primary",
      class: [le.light.primary, "data-[hover=true]:bg-primary/20"]
    },
    {
      variant: "light",
      color: "secondary",
      class: [le.light.secondary, "data-[hover=true]:bg-secondary/20"]
    },
    {
      variant: "light",
      color: "success",
      class: [le.light.success, "data-[hover=true]:bg-success/20"]
    },
    {
      variant: "light",
      color: "warning",
      class: [le.light.warning, "data-[hover=true]:bg-warning/20"]
    },
    {
      variant: "light",
      color: "danger",
      class: [le.light.danger, "data-[hover=true]:bg-danger/20"]
    },
    // ghost / color
    {
      variant: "ghost",
      color: "default",
      class: [le.ghost.default, "data-[hover=true]:!bg-default"]
    },
    {
      variant: "ghost",
      color: "primary",
      class: [
        le.ghost.primary,
        "data-[hover=true]:!bg-primary data-[hover=true]:!text-primary-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "secondary",
      class: [
        le.ghost.secondary,
        "data-[hover=true]:!bg-secondary data-[hover=true]:!text-secondary-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "success",
      class: [
        le.ghost.success,
        "data-[hover=true]:!bg-success data-[hover=true]:!text-success-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "warning",
      class: [
        le.ghost.warning,
        "data-[hover=true]:!bg-warning data-[hover=true]:!text-warning-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "danger",
      class: [
        le.ghost.danger,
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
      className: sr.default
    },
    {
      isInGroup: !0,
      variant: ["ghost", "bordered"],
      color: "primary",
      className: sr.primary
    },
    {
      isInGroup: !0,
      variant: ["ghost", "bordered"],
      color: "secondary",
      className: sr.secondary
    },
    {
      isInGroup: !0,
      variant: ["ghost", "bordered"],
      color: "success",
      className: sr.success
    },
    {
      isInGroup: !0,
      variant: ["ghost", "bordered"],
      color: "warning",
      className: sr.warning
    },
    {
      isInGroup: !0,
      variant: ["ghost", "bordered"],
      color: "danger",
      className: sr.danger
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
On({
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
function $p(e) {
  return Pe(e);
}
var vp = (e, t, r = !0) => {
  if (!t)
    return [e, {}];
  const n = t.reduce((o, a) => a in e ? { ...o, [a]: e[a] } : o, {});
  return r ? [Object.keys(e).filter((a) => !t.includes(a)).reduce((a, s) => ({ ...a, [s]: e[s] }), {}), n] : [e, n];
}, Rl = (e) => {
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
}, Ll = (e) => ({
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
})[e], yp = (e, t) => {
  if (t.includes("-")) {
    const [r] = t.split("-");
    if (r.includes(e))
      return !1;
  }
  return !0;
}, vn = (e, t) => {
  if (t.includes("-")) {
    const [, r] = t.split("-");
    return `${e}-${r}`;
  }
  return e;
}, Cr = /* @__PURE__ */ new WeakMap(), ot = [];
function xp(e, t = document.body) {
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
    let c = (u = Cr.get(d)) != null ? u : 0;
    d.getAttribute("aria-hidden") === "true" && c === 0 || (c === 0 && d.setAttribute("aria-hidden", "true"), n.add(d), Cr.set(d, c + 1));
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
      let u = Cr.get(d);
      u != null && (u === 1 ? (d.removeAttribute("aria-hidden"), Cr.delete(d)) : Cr.set(d, u - 1));
    }
    i === ot[ot.length - 1] ? (ot.pop(), ot.length && ot[ot.length - 1].observe()) : ot.splice(ot.indexOf(i), 1);
  };
}
function wp(e) {
  let t = ot[ot.length - 1];
  if (t && !t.visibleNodes.has(e))
    return t.visibleNodes.add(e), () => {
      t.visibleNodes.delete(e);
    };
}
var Ml = globalThis != null && globalThis.document ? Ds : de, [Km, kp] = Ao({
  name: "ButtonGroupContext",
  strict: !1
});
function Fl(e, t) {
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
    rel: h,
    type: w = "button",
    allowTextSelectionOnPress: $
  } = e, k;
  r === "button" ? k = {
    type: w,
    disabled: n
  } : k = {
    role: "button",
    href: r === "a" && !n ? m : void 0,
    target: r === "a" ? p : void 0,
    type: r === "input" ? w : void 0,
    disabled: r === "input" ? n : void 0,
    "aria-disabled": !n || r === "input" ? void 0 : n,
    rel: r === "a" ? h : void 0
  };
  let { pressProps: v, isPressed: j } = Cf({
    onClick: f,
    onPressStart: a,
    onPressEnd: s,
    onPressUp: i,
    onPressChange: d,
    onPress: o,
    isDisabled: n,
    preventFocusOnPress: u,
    allowTextSelectionOnPress: $,
    ref: t
  }), { focusableProps: P } = Ai(e, t);
  c && (P.tabIndex = n ? -1 : P.tabIndex);
  let O = At(
    P,
    v,
    Ro(e, { labelable: !0 })
  );
  return {
    isPressed: j,
    // Used to indicate press state for visual
    buttonProps: At(k, O, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"]
    })
  };
}
var Ep = () => import("./index-SfZMAM5z.mjs").then((e) => e.default), Dl = (e) => {
  const { ripples: t = [], motionProps: r, color: n = "currentColor", style: o, onClear: a } = e;
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: t.map((s) => {
    const i = tu(0.01 * s.size, 0.2, s.size > 100 ? 0.75 : 0.5);
    return /* @__PURE__ */ l.jsx(ln, { features: Ep, children: /* @__PURE__ */ l.jsx(Oo, { mode: "popLayout", children: /* @__PURE__ */ l.jsx(
      dn.span,
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
Dl.displayName = "HeroUI.Ripple";
var Np = Dl;
function Pp(e = {}) {
  const [t, r] = ae([]), n = ge((a) => {
    const s = a.target, i = Math.max(s.clientWidth, s.clientHeight);
    r((d) => [
      ...d,
      {
        key: eu(d.length.toString()),
        size: i,
        x: a.x - i / 2,
        y: a.y - i / 2
      }
    ]);
  }, []), o = ge((a) => {
    r((s) => s.filter((i) => i.key !== a));
  }, []);
  return { ripples: t, onClear: o, onPress: n, ...e };
}
function Tp(e) {
  var t, r, n, o, a, s, i, d, u;
  const c = kp(), f = En(), m = !!c, {
    ref: p,
    as: h,
    children: w,
    startContent: $,
    endContent: k,
    autoFocus: v,
    className: j,
    spinner: P,
    isLoading: O = !1,
    disableRipple: I = !1,
    fullWidth: H = (t = c == null ? void 0 : c.fullWidth) != null ? t : !1,
    radius: z = c == null ? void 0 : c.radius,
    size: F = (r = c == null ? void 0 : c.size) != null ? r : "md",
    color: D = (n = c == null ? void 0 : c.color) != null ? n : "default",
    variant: g = (o = c == null ? void 0 : c.variant) != null ? o : "solid",
    disableAnimation: T = (s = (a = c == null ? void 0 : c.disableAnimation) != null ? a : f == null ? void 0 : f.disableAnimation) != null ? s : !1,
    isDisabled: y = (i = c == null ? void 0 : c.isDisabled) != null ? i : !1,
    isIconOnly: N = (d = c == null ? void 0 : c.isIconOnly) != null ? d : !1,
    spinnerPlacement: R = "start",
    onPress: b,
    onClick: C,
    ...S
  } = e, A = h || "button", _ = typeof A == "string", E = ii(p), L = (u = I || (f == null ? void 0 : f.disableRipple)) != null ? u : T, { isFocusVisible: K, isFocused: U, focusProps: X } = Li({
    autoFocus: v
  }), G = y || O, M = _e(
    () => hp({
      size: F,
      color: D,
      variant: g,
      radius: z,
      fullWidth: H,
      isDisabled: G,
      isInGroup: m,
      disableAnimation: T,
      isIconOnly: N,
      className: j
    }),
    [
      F,
      D,
      g,
      z,
      H,
      G,
      m,
      N,
      T,
      j
    ]
  ), { onPress: V, onClear: se, ripples: ce } = Pp(), fe = ge(
    (Be) => {
      L || G || T || E.current && V(Be);
    },
    [L, G, T, E, V]
  ), { buttonProps: ve, isPressed: Re } = Fl(
    {
      elementType: h,
      isDisabled: G,
      onPress: di(b, fe),
      onClick: C,
      ...S
    },
    E
  ), { isHovered: Se, hoverProps: Ue } = Yo({ isDisabled: G }), je = ge(
    (Be = {}) => ({
      "data-disabled": Ye(G),
      "data-focus": Ye(U),
      "data-pressed": Ye(Re),
      "data-focus-visible": Ye(K),
      "data-hover": Ye(Se),
      "data-loading": Ye(O),
      ...it(
        ve,
        X,
        Ue,
        Na(S, {
          enabled: _
        }),
        Na(Be)
      ),
      className: M
    }),
    [
      O,
      G,
      U,
      Re,
      _,
      K,
      Se,
      ve,
      X,
      Ue,
      S,
      M
    ]
  ), Xe = (Be) => dr(Be) ? wn(Be, {
    // @ts-ignore
    "aria-hidden": !0,
    focusable: !1
  }) : null, Le = Xe($), lt = Xe(k), tt = _e(() => ({
    sm: "sm",
    md: "sm",
    lg: "md"
  })[F], [F]), Qe = ge(
    () => ({ ripples: ce, onClear: se }),
    [ce, se]
  );
  return {
    Component: A,
    children: w,
    domRef: E,
    spinner: P,
    styles: M,
    startContent: Le,
    endContent: lt,
    isLoading: O,
    spinnerPlacement: R,
    spinnerSize: tt,
    disableRipple: L,
    getButtonProps: je,
    getRippleProps: Qe,
    isIconOnly: N
  };
}
function Cp(e) {
  var t, r;
  const [n, o] = vp(e, us.variantKeys), a = En(), s = (r = (t = e == null ? void 0 : e.variant) != null ? t : a == null ? void 0 : a.spinnerVariant) != null ? r : "default", { children: i, className: d, classNames: u, label: c, ...f } = n, m = _e(() => us({ ...o }), [_o(o)]), p = Xt(u == null ? void 0 : u.base, d), h = c || i, w = _e(() => h && typeof h == "string" ? h : f["aria-label"] ? "" : "Loading", [i, h, f["aria-label"]]), $ = ge(
    () => ({
      "aria-label": w,
      className: m.base({
        class: p
      }),
      ...f
    }),
    [w, m, p, f]
  );
  return { label: h, slots: m, classNames: u, variant: s, getSpinnerProps: $ };
}
var zl = $p((e, t) => {
  const { slots: r, classNames: n, label: o, variant: a, getSpinnerProps: s } = Cp({ ...e });
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
zl.displayName = "HeroUI.Spinner";
var Sp = zl, Gl = Zo((e, t) => {
  const {
    Component: r,
    domRef: n,
    children: o,
    spinnerSize: a,
    spinner: s = /* @__PURE__ */ l.jsx(Sp, { color: "current", size: a }),
    spinnerPlacement: i,
    startContent: d,
    endContent: u,
    isLoading: c,
    disableRipple: f,
    getButtonProps: m,
    getRippleProps: p,
    isIconOnly: h
  } = Tp({ ...e, ref: t });
  return /* @__PURE__ */ l.jsxs(r, { ref: n, ...m(), children: [
    d,
    c && i === "start" && s,
    c && h ? null : o,
    c && i === "end" && s,
    u,
    !f && /* @__PURE__ */ l.jsx(Np, { ...p() })
  ] });
});
Gl.displayName = "HeroUI.Button";
var jp = Gl;
function Bl(e) {
  let [t, r] = pf(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
  const n = ge(() => {
    r(!0);
  }, [
    r
  ]), o = ge(() => {
    r(!1);
  }, [
    r
  ]), a = ge(() => {
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
const Op = 1500, ps = 500;
let Wt = {}, Ip = 0, Sr = !1, Tt = null, Yt = null;
function Ap(e = {}) {
  let { delay: t = Op, closeDelay: r = ps } = e, { isOpen: n, open: o, close: a } = Bl(e), s = _e(() => `${++Ip}`, []), i = J(null), d = J(a), u = () => {
    Wt[s] = m;
  }, c = () => {
    for (let h in Wt) h !== s && (Wt[h](!0), delete Wt[h]);
  }, f = () => {
    i.current && clearTimeout(i.current), i.current = null, c(), u(), Sr = !0, o(), Tt && (clearTimeout(Tt), Tt = null), Yt && (clearTimeout(Yt), Yt = null);
  }, m = (h) => {
    h || r <= 0 ? (i.current && clearTimeout(i.current), i.current = null, d.current()) : i.current || (i.current = setTimeout(() => {
      i.current = null, d.current();
    }, r)), Tt && (clearTimeout(Tt), Tt = null), Sr && (Yt && clearTimeout(Yt), Yt = setTimeout(() => {
      delete Wt[s], Yt = null, Sr = !1;
    }, Math.max(ps, r)));
  }, p = () => {
    c(), u(), !n && !Tt && !Sr ? Tt = setTimeout(() => {
      Tt = null, Sr = !0, f();
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
    open: (h) => {
      !h && t > 0 && !i.current ? p() : f();
    },
    close: m
  };
}
function _p(e, t) {
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
function Rp(e, t, r) {
  let { isDisabled: n, trigger: o } = e, a = Tn(), s = J(!1), i = J(!1), d = () => {
    (s.current || i.current) && t.open(i.current);
  }, u = (k) => {
    !s.current && !i.current && t.close(k);
  };
  de(() => {
    let k = (v) => {
      r && r.current && v.key === "Escape" && (v.stopPropagation(), t.close(!0));
    };
    if (t.isOpen)
      return document.addEventListener("keydown", k, !0), () => {
        document.removeEventListener("keydown", k, !0);
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
  }, h = () => {
    i.current = !1, s.current = !1, u(!0);
  }, { hoverProps: w } = Yo({
    isDisabled: n,
    onHoverStart: c,
    onHoverEnd: f
  }), { focusableProps: $ } = Ai({
    isDisabled: n,
    onFocus: p,
    onBlur: h
  }, r);
  return {
    triggerProps: {
      "aria-describedby": t.isOpen ? a : void 0,
      ...At($, w, {
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
function Vl(e, t) {
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
        let $ = vt.indexOf(t);
        $ >= 0 && vt.splice($, 1);
      };
  }, [a, t]);
  const u = () => {
    vt[vt.length - 1] === t && s && s();
  }, c = ($) => {
    (!d || d($.target)) && (vt[vt.length - 1] === t && r && ($.stopPropagation(), $.preventDefault()), w(t) !== "pressEnd" && u());
  }, f = ($) => {
    (!d || d($.target)) && (vt[vt.length - 1] === t && r && ($.stopPropagation(), $.preventDefault()), u());
  }, m = ($) => {
    $.key === "Escape" && !o && !$.nativeEvent.isComposing && ($.stopPropagation(), $.preventDefault(), u());
  };
  Uf({
    isDisabled: !(n && a),
    onInteractOutside: n && a ? f : void 0,
    onInteractOutsideStart: c,
    ref: t
  });
  const { focusWithinProps: p } = Wo({
    isDisabled: !i,
    onBlurWithin: ($) => {
      !$.relatedTarget || Zf($.relatedTarget) || (!d || d($.relatedTarget)) && u();
    }
  }), h = ($) => {
    $.target === $.currentTarget && $.preventDefault();
  };
  function w($) {
    const k = $.current;
    if (!k) return "unknown";
    const v = (k.getAttribute("role") || "").toLowerCase(), j = k.getAttribute("aria-modal");
    return (v === "dialog" || v === "alertdialog") && (j === null || j.toLowerCase() === "true") ? "pressEnd" : ["listbox", "menu", "tree", "grid", "combobox"].includes(v) ? "pressStart" : "unknown";
  }
  return {
    overlayProps: {
      onKeyDown: m,
      ...p
    },
    underlayProps: {
      onPointerDown: h
    }
  };
}
function Lp(e) {
  var t, r;
  const n = En(), [o, a] = yl(e, $n.variantKeys), {
    ref: s,
    as: i,
    isOpen: d,
    content: u,
    children: c,
    defaultOpen: f,
    onOpenChange: m,
    isDisabled: p,
    trigger: h,
    shouldFlip: w = !0,
    containerPadding: $ = 12,
    placement: k = "top",
    delay: v = 0,
    closeDelay: j = 500,
    showArrow: P = !1,
    offset: O = 7,
    crossOffset: I = 0,
    isDismissable: H,
    shouldCloseOnBlur: z = !0,
    portalContainer: F,
    isKeyboardDismissDisabled: D = !1,
    updatePositionDeps: g = [],
    shouldCloseOnInteractOutside: T,
    className: y,
    onClose: N,
    motionProps: R,
    classNames: b,
    ...C
  } = o, S = i || "div", A = (r = (t = e == null ? void 0 : e.disableAnimation) != null ? t : n == null ? void 0 : n.disableAnimation) != null ? r : !1, _ = Ap({
    delay: v,
    closeDelay: j,
    isDisabled: p,
    defaultOpen: f,
    isOpen: d,
    onOpenChange: (je) => {
      m == null || m(je), je || N == null || N();
    }
  }), E = J(null), L = J(null), K = $d(), U = _.isOpen && !p;
  Qt(
    s,
    () => (
      // @ts-ignore
      Jc(L)
    )
  );
  const { triggerProps: X, tooltipProps: G } = Rp(
    {
      isDisabled: p,
      trigger: h
    },
    _,
    E
  ), { tooltipProps: M } = _p(
    {
      isOpen: U,
      ...it(o, G)
    },
    _
  ), {
    overlayProps: V,
    placement: se,
    updatePosition: ce
  } = ki({
    isOpen: U,
    targetRef: E,
    placement: Ll(k),
    overlayRef: L,
    offset: P ? O + 3 : O,
    crossOffset: I,
    shouldFlip: w,
    containerPadding: $
  });
  Ml(() => {
    g.length && ce();
  }, g);
  const { overlayProps: fe } = Vl(
    {
      isOpen: U,
      onClose: _.close,
      isDismissable: H,
      shouldCloseOnBlur: z,
      isKeyboardDismissDisabled: D,
      shouldCloseOnInteractOutside: T
    },
    L
  ), ve = _e(
    () => {
      var je, Xe, Le;
      return $n({
        ...a,
        disableAnimation: A,
        radius: (je = e == null ? void 0 : e.radius) != null ? je : "md",
        size: (Xe = e == null ? void 0 : e.size) != null ? Xe : "md",
        shadow: (Le = e == null ? void 0 : e.shadow) != null ? Le : "sm"
      });
    },
    [
      _o(a),
      A,
      e == null ? void 0 : e.radius,
      e == null ? void 0 : e.size,
      e == null ? void 0 : e.shadow
    ]
  ), Re = ge(
    (je = {}, Xe = null) => ({
      ...it(X, je),
      ref: su(Xe, E),
      "aria-describedby": U ? K : void 0
    }),
    [X, U, K, _]
  ), Se = ge(
    () => ({
      ref: L,
      "data-slot": "base",
      "data-open": Ye(U),
      "data-arrow": Ye(P),
      "data-disabled": Ye(p),
      "data-placement": vn(se || "top", k),
      ...it(M, fe, C),
      style: it(V.style, C.style, o.style),
      className: ve.base({ class: b == null ? void 0 : b.base }),
      id: K
    }),
    [
      ve,
      U,
      P,
      p,
      se,
      k,
      M,
      fe,
      C,
      V,
      o,
      K
    ]
  ), Ue = ge(
    () => ({
      "data-slot": "content",
      "data-open": Ye(U),
      "data-arrow": Ye(P),
      "data-disabled": Ye(p),
      "data-placement": vn(se || "top", k),
      className: ve.content({ class: Xt(b == null ? void 0 : b.content, y) })
    }),
    [ve, U, P, p, se, k, b]
  );
  return {
    Component: S,
    content: u,
    children: c,
    isOpen: U,
    triggerRef: E,
    showArrow: P,
    portalContainer: F,
    placement: k,
    disableAnimation: A,
    isDisabled: p,
    motionProps: R,
    getTooltipContentProps: Ue,
    getTriggerProps: Re,
    getTooltipProps: Se
  };
}
var Mp = () => import("./index-SfZMAM5z.mjs").then((e) => e.default), Hl = Zo((e, t) => {
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
  } = Lp({
    ...e,
    ref: t
  });
  let h;
  try {
    if (gr.count(o) !== 1) throw new Error();
    if (!dr(o))
      h = /* @__PURE__ */ l.jsx("p", { ...f(), children: o });
    else {
      const O = o, I = (r = O.props.ref) != null ? r : O.ref;
      h = wn(O, f(O.props, I));
    }
  } catch {
    h = /* @__PURE__ */ l.jsx("span", {}), ru("Tooltip must have only one child node. Please, check your code.");
  }
  const { ref: w, id: $, style: k, ...v } = m(), j = /* @__PURE__ */ l.jsx("div", { ref: w, id: $, style: k, children: /* @__PURE__ */ l.jsx(
    dn.div,
    {
      animate: "enter",
      exit: "exit",
      initial: "exit",
      variants: Eo.scaleSpring,
      ...it(c, v),
      style: {
        ...Rl(d)
      },
      children: /* @__PURE__ */ l.jsx(n, { ...p(), children: a })
    },
    `${$}-tooltip-inner`
  ) }, `${$}-tooltip-content`);
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    h,
    u ? s && /* @__PURE__ */ l.jsx(ts, { portalContainer: i, children: /* @__PURE__ */ l.jsx("div", { ref: w, id: $, style: k, ...v, children: /* @__PURE__ */ l.jsx(n, { ...p(), children: a }) }) }) : /* @__PURE__ */ l.jsx(ln, { features: Mp, children: /* @__PURE__ */ l.jsx(Oo, { children: s && /* @__PURE__ */ l.jsx(ts, { portalContainer: i, children: j }) }) })
  ] });
});
Hl.displayName = "HeroUI.Tooltip";
var Fp = Hl;
function Dp(e, t) {
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
    placement: h = "top",
    containerPadding: w,
    shouldCloseOnInteractOutside: $,
    isNonModal: k,
    isKeyboardDismissDisabled: v,
    updatePositionDeps: j = [],
    ...P
  } = e, O = k ?? !0, I = P.trigger === "SubmenuTrigger", { overlayProps: H, underlayProps: z } = Vl(
    {
      isOpen: t.isOpen,
      onClose: t.close,
      shouldCloseOnBlur: m,
      isDismissable: f || I,
      isKeyboardDismissDisabled: v,
      shouldCloseOnInteractOutside: $ || ((N) => {
        var R;
        return !((R = n.current) != null && R.contains(N));
      }),
      disableOutsideEvents: !O
    },
    o
  ), {
    overlayProps: F,
    arrowProps: D,
    placement: g,
    updatePosition: T,
    triggerAnchorPoint: y
  } = ki({
    ...P,
    shouldFlip: u,
    crossOffset: i,
    targetRef: n,
    overlayRef: o,
    isOpen: t.isOpen,
    scrollRef: d,
    boundaryElement: c,
    containerPadding: w,
    placement: Ll(h),
    offset: a ? s + 3 : s,
    onClose: O && !I && p ? t.close : () => {
    }
  });
  return Ml(() => {
    j.length && T();
  }, j), de(() => {
    var N, R;
    if (t.isOpen && o.current)
      return O ? wp((N = r == null ? void 0 : r.current) != null ? N : o.current) : xp([(R = r == null ? void 0 : r.current) != null ? R : o.current]);
  }, [O, t.isOpen, o, r]), {
    popoverProps: it(H, F),
    arrowProps: D,
    underlayProps: z,
    placement: g,
    triggerAnchorPoint: y
  };
}
var zp = "top";
function Gp(e) {
  var t, r, n;
  const o = En(), [a, s] = yl(e, $n.variantKeys), {
    as: i,
    ref: d,
    children: u,
    state: c,
    triggerRef: f,
    scrollRef: m,
    defaultOpen: p,
    onOpenChange: h,
    isOpen: w,
    isNonModal: $ = !0,
    shouldFlip: k = !0,
    containerPadding: v = 12,
    shouldBlockScroll: j = !1,
    isDismissable: P = !0,
    shouldCloseOnBlur: O,
    portalContainer: I,
    updatePositionDeps: H,
    dialogProps: z,
    placement: F = zp,
    triggerType: D = "dialog",
    showArrow: g = !1,
    offset: T = 7,
    crossOffset: y = 0,
    boundaryElement: N,
    isKeyboardDismissDisabled: R,
    shouldCloseOnInteractOutside: b,
    shouldCloseOnScroll: C,
    triggerAnchorPoint: S,
    motionProps: A,
    className: _,
    classNames: E,
    onClose: L,
    ...K
  } = a, U = i || "div", X = ii(d), G = J(null), M = J(!1), V = f || G, se = (r = (t = e.disableAnimation) != null ? t : o == null ? void 0 : o.disableAnimation) != null ? r : !1, ce = Bl({
    isOpen: w,
    defaultOpen: p,
    onOpenChange: (W) => {
      h == null || h(W), W || L == null || L();
    }
  }), fe = c || ce, {
    popoverProps: ve,
    underlayProps: Re,
    placement: Se
  } = Dp(
    {
      triggerRef: V,
      isNonModal: $,
      popoverRef: X,
      placement: F,
      offset: T,
      scrollRef: m,
      isDismissable: P,
      shouldCloseOnBlur: O,
      boundaryElement: N,
      crossOffset: y,
      shouldFlip: k,
      containerPadding: v,
      updatePositionDeps: H,
      isKeyboardDismissDisabled: R,
      shouldCloseOnScroll: C,
      shouldCloseOnInteractOutside: b,
      triggerAnchorPoint: S
    },
    fe
  ), Ue = _e(() => Se ? yp(Se, F) ? Se : F : null, [Se, F]), { triggerProps: je } = e0({ type: D }, fe, V), { isFocusVisible: Xe, isFocused: Le, focusProps: lt } = Li(), tt = _e(
    () => $n({
      ...s
    }),
    [_o(s)]
  ), Qe = Xt(E == null ? void 0 : E.base, _), Be = {
    "--trigger-anchor-point": S ? `${S.x}px ${S.y}px` : void 0
  };
  r0({
    isDisabled: !(j && fe.isOpen)
  });
  const wt = (W = {}) => ({
    ref: X,
    ...it(ve, K, W),
    style: it(ve.style, K.style, W.style)
  }), kt = (W = {}) => ({
    // `ref` and `dialogProps` from `useDialog` are passed from props
    // if we use `useDialog` here, dialogRef won't be focused on mount
    "data-slot": "base",
    "data-open": Ye(fe.isOpen),
    "data-focus": Ye(Le),
    "data-arrow": Ye(g),
    "data-focus-visible": Ye(Xe),
    "data-placement": Se ? vn(Se, F) : void 0,
    ...it(lt, z, W),
    className: tt.base({ class: Xt(Qe) }),
    style: {
      // this prevent the dialog to have a default outline
      outline: "none",
      ...Be
    }
  }), te = ge(
    (W = {}) => ({
      "data-slot": "content",
      "data-open": Ye(fe.isOpen),
      "data-arrow": Ye(g),
      "data-placement": Se ? vn(Se, F) : void 0,
      className: tt.content({ class: Xt(E == null ? void 0 : E.content, W.className) })
    }),
    [tt, fe.isOpen, g, Ue, F, E, Se]
  ), ke = ge(
    (W) => {
      var ne;
      let ie;
      return W.pointerType === "touch" && ((e == null ? void 0 : e.backdrop) === "blur" || (e == null ? void 0 : e.backdrop) === "opaque") ? ie = setTimeout(() => {
        M.current = !0;
      }, 100) : M.current = !0, (ne = je.onPress) == null || ne.call(je, W), () => {
        clearTimeout(ie);
      };
    },
    [je == null ? void 0 : je.onPress]
  ), re = ge(
    (W = {}, ne = null) => {
      const { isDisabled: ie, ...be } = W;
      return {
        "data-slot": "trigger",
        ...it({ "aria-haspopup": "dialog" }, je, be),
        onPress: ke,
        isDisabled: ie,
        className: tt.trigger({
          class: Xt(E == null ? void 0 : E.trigger, W.className),
          // apply isDisabled class names to make the trigger child disabled
          // e.g. for elements like div or HeroUI elements that don't have `isDisabled` prop
          isTriggerDisabled: ie
        }),
        ref: ou(ne, V)
      };
    },
    [fe, je, ke, V]
  ), Z = ge(
    (W = {}) => ({
      "data-slot": "backdrop",
      className: tt.backdrop({ class: E == null ? void 0 : E.backdrop }),
      onClick: (ne) => {
        if (!M.current) {
          ne.preventDefault();
          return;
        }
        fe.close(), M.current = !1;
      },
      ...Re,
      ...W
    }),
    [tt, fe.isOpen, E, Re]
  );
  return {
    state: fe,
    Component: U,
    children: u,
    classNames: E,
    showArrow: g,
    triggerRef: V,
    placement: Ue,
    isNonModal: $,
    popoverRef: X,
    portalContainer: I,
    isOpen: fe.isOpen,
    onClose: fe.close,
    disableAnimation: se,
    shouldBlockScroll: j,
    backdrop: (n = e.backdrop) != null ? n : "transparent",
    motionProps: A,
    getBackdropProps: Z,
    getPopoverProps: wt,
    getTriggerProps: re,
    getDialogProps: kt,
    getContentProps: te
  };
}
function Bp(e, t) {
  let { role: r = "dialog" } = e, n = zu();
  n = e["aria-label"] ? void 0 : n;
  let o = J(!1);
  return de(() => {
    if (t.current && !t.current.contains(document.activeElement)) {
      gn(t.current);
      let a = setTimeout(() => {
        (document.activeElement === t.current || document.activeElement === document.body) && (o.current = !0, t.current && (t.current.blur(), gn(t.current)), o.current = !1);
      }, 500);
      return () => {
        clearTimeout(a);
      };
    }
  }, [
    t
  ]), m0(), {
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
var [Vp, Ul] = Ao({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), gs = () => import("./index-SfZMAM5z.mjs").then((e) => e.default), Kl = (e) => {
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
    isNonModal: h,
    onClose: w
  } = Ul(), $ = J(null), { dialogProps: k, titleProps: v } = Bp({}, $), j = f({
    ref: $,
    ...k,
    ...o
  }), P = t || a || "div", O = r && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    !h && /* @__PURE__ */ l.jsx(ns, { onDismiss: w }),
    /* @__PURE__ */ l.jsx(P, { ...j, children: /* @__PURE__ */ l.jsx("div", { ...p({ className: n }), children: typeof r == "function" ? r(v) : r }) }),
    /* @__PURE__ */ l.jsx(ns, { onDismiss: w })
  ] }), I = _e(() => i === "transparent" ? null : u ? /* @__PURE__ */ l.jsx("div", { ...m() }) : /* @__PURE__ */ l.jsx(ln, { features: gs, children: /* @__PURE__ */ l.jsx(
    dn.div,
    {
      animate: "enter",
      exit: "exit",
      initial: "exit",
      variants: Eo.fade,
      ...m()
    }
  ) }), [i, u, m]), H = s ? Rl(s === "center" ? "top" : s) : void 0, z = /* @__PURE__ */ l.jsx(l.Fragment, { children: u ? O : /* @__PURE__ */ l.jsx(ln, { features: gs, children: /* @__PURE__ */ l.jsx(
    dn.div,
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
    z
  ] });
};
Kl.displayName = "HeroUI.PopoverContent";
var Hp = Kl, Wl = (e) => {
  var t;
  const { triggerRef: r, getTriggerProps: n } = Ul(), { children: o, ...a } = e, s = _e(() => typeof o == "string" ? /* @__PURE__ */ l.jsx("p", { children: o }) : gr.only(o), [o]), i = (t = s.props.ref) != null ? t : s.ref, { onPress: d, isDisabled: u, ...c } = _e(() => n(it(a, s.props), i), [n, s.props, a, i]), [, f] = iu(o, jp), { buttonProps: m } = Fl({ onPress: d, isDisabled: u }, r), p = _e(() => (f == null ? void 0 : f[0]) !== void 0, [f]);
  return p || delete c.preventFocusOnPress, wn(
    s,
    it(c, p ? { onPress: d, isDisabled: u } : m)
  );
};
Wl.displayName = "HeroUI.PopoverTrigger";
var Up = Wl, Yl = Zo((e, t) => {
  const { children: r, ...n } = e, o = Gp({ ...n, ref: t }), [a, s] = gr.toArray(r), i = /* @__PURE__ */ l.jsx(g0, { portalContainer: o.portalContainer, children: s });
  return /* @__PURE__ */ l.jsxs(Vp, { value: o, children: [
    a,
    o.disableAnimation && o.isOpen ? i : /* @__PURE__ */ l.jsx(Oo, { children: o.isOpen ? i : null })
  ] });
});
Yl.displayName = "HeroUI.Popover";
var Kp = Yl;
const Wp = He("border bg-popover text-popover-foreground", {
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
  closeDelay: h = 0,
  offset: w = 6,
  trigger: $ = "hover",
  shouldCloseOnScroll: k = !0,
  portalContainer: v = typeof document < "u" ? document.body : void 0,
  zIndex: j = 50,
  contentZIndex: P
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
  }[a] || "", z = O(), F = P !== void 0 ? P : j, D = {
    content: e,
    placement: r,
    showArrow: n,
    color: z,
    radius: i,
    shadow: d,
    isOpen: c,
    onOpenChange: f,
    isDisabled: m,
    delay: p,
    closeDelay: h,
    offset: w,
    trigger: $,
    shouldCloseOnScroll: k,
    portalContainer: v,
    // container z-index to manage layering
    style: {
      zIndex: j
    }
  };
  return Object.keys(D).forEach((g) => {
    D[g] === void 0 && delete D[g];
  }), /* @__PURE__ */ l.jsx(
    Fp,
    {
      ...D,
      classNames: {
        content: B(
          Wp({ variant: o, color: a, shadow: d, rounded: i }),
          u,
          H,
          a === "custom" && s ? "border-0" : ""
        )
      },
      content: /* @__PURE__ */ l.jsx(
        "div",
        {
          style: {
            zIndex: F,
            ...a === "custom" && s ? { backgroundColor: s, color: "#ffffff" } : {}
          },
          children: e
        }
      ),
      children: t
    }
  );
}, Yp = He(
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
), Xp = {
  sm: 24,
  md: 36,
  lg: 48
}, Zp = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  info: "bg-info"
}, qp = {
  primary: "#007C99",
  // Tailwind primary
  secondary: "#CEEAE7",
  success: "#00B37D",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#0EA5E9"
}, Jp = oe.forwardRef(
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
    const m = Math.min(Math.max(o, 0), 100), p = Xp[n], h = n === "sm" ? 2 : n === "md" ? 3 : 4, w = (p - h) / 2, $ = 2 * Math.PI * w, k = $ - m / 100 * $;
    let v = "";
    return t === "loading" ? v = "rounded-full" : d ? v = d === "none" ? "" : `rounded-${d}` : v = "rounded-md", t === "circular" ? /* @__PURE__ */ l.jsxs("div", { className: "inline-flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "relative", style: { width: p, height: p }, children: [
        /* @__PURE__ */ l.jsxs(
          "svg",
          {
            className: B(
              "transform -rotate-90",
              a ? "animate-spin" : ""
            ),
            width: p,
            height: p,
            children: [
              /* @__PURE__ */ l.jsx(
                "circle",
                {
                  strokeWidth: h,
                  stroke: "#e5e7eb",
                  fill: "transparent",
                  r: w,
                  cx: p / 2,
                  cy: p / 2
                }
              ),
              /* @__PURE__ */ l.jsx(
                "circle",
                {
                  className: B(
                    "transition-all duration-300 ease-in-out",
                    a ? "animate-dash" : ""
                  ),
                  strokeWidth: h,
                  strokeDasharray: $,
                  strokeDashoffset: a ? 0 : k,
                  strokeLinecap: "round",
                  stroke: qp[r],
                  fill: "transparent",
                  r: w,
                  cx: p / 2,
                  cy: p / 2
                }
              )
            ]
          }
        ),
        u && /* @__PURE__ */ l.jsx("span", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ l.jsx(me, { icon: u, size: p * 0.5 }) }),
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
          className: B(Yp({ variant: t === "loading" ? "bar" : t, size: n }), v, e),
          role: "progressbar",
          "aria-valuenow": a ? void 0 : m,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...c,
          children: /* @__PURE__ */ l.jsx(
            "div",
            {
              className: B(
                "h-full transition-all duration-300 ease-in-out",
                a ? "animate-progress-indeterminate" : "",
                Zp[r],
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
Jp.displayName = "Progress";
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
], Qp = { version: 4, country_calling_codes: { 1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], 7: ["RU", "KZ"], 20: ["EG"], 27: ["ZA"], 30: ["GR"], 31: ["NL"], 32: ["BE"], 33: ["FR"], 34: ["ES"], 36: ["HU"], 39: ["IT", "VA"], 40: ["RO"], 41: ["CH"], 43: ["AT"], 44: ["GB", "GG", "IM", "JE"], 45: ["DK"], 46: ["SE"], 47: ["NO", "SJ"], 48: ["PL"], 49: ["DE"], 51: ["PE"], 52: ["MX"], 53: ["CU"], 54: ["AR"], 55: ["BR"], 56: ["CL"], 57: ["CO"], 58: ["VE"], 60: ["MY"], 61: ["AU", "CC", "CX"], 62: ["ID"], 63: ["PH"], 64: ["NZ"], 65: ["SG"], 66: ["TH"], 81: ["JP"], 82: ["KR"], 84: ["VN"], 86: ["CN"], 90: ["TR"], 91: ["IN"], 92: ["PK"], 93: ["AF"], 94: ["LK"], 95: ["MM"], 98: ["IR"], 211: ["SS"], 212: ["MA", "EH"], 213: ["DZ"], 216: ["TN"], 218: ["LY"], 220: ["GM"], 221: ["SN"], 222: ["MR"], 223: ["ML"], 224: ["GN"], 225: ["CI"], 226: ["BF"], 227: ["NE"], 228: ["TG"], 229: ["BJ"], 230: ["MU"], 231: ["LR"], 232: ["SL"], 233: ["GH"], 234: ["NG"], 235: ["TD"], 236: ["CF"], 237: ["CM"], 238: ["CV"], 239: ["ST"], 240: ["GQ"], 241: ["GA"], 242: ["CG"], 243: ["CD"], 244: ["AO"], 245: ["GW"], 246: ["IO"], 247: ["AC"], 248: ["SC"], 249: ["SD"], 250: ["RW"], 251: ["ET"], 252: ["SO"], 253: ["DJ"], 254: ["KE"], 255: ["TZ"], 256: ["UG"], 257: ["BI"], 258: ["MZ"], 260: ["ZM"], 261: ["MG"], 262: ["RE", "YT"], 263: ["ZW"], 264: ["NA"], 265: ["MW"], 266: ["LS"], 267: ["BW"], 268: ["SZ"], 269: ["KM"], 290: ["SH", "TA"], 291: ["ER"], 297: ["AW"], 298: ["FO"], 299: ["GL"], 350: ["GI"], 351: ["PT"], 352: ["LU"], 353: ["IE"], 354: ["IS"], 355: ["AL"], 356: ["MT"], 357: ["CY"], 358: ["FI", "AX"], 359: ["BG"], 370: ["LT"], 371: ["LV"], 372: ["EE"], 373: ["MD"], 374: ["AM"], 375: ["BY"], 376: ["AD"], 377: ["MC"], 378: ["SM"], 380: ["UA"], 381: ["RS"], 382: ["ME"], 383: ["XK"], 385: ["HR"], 386: ["SI"], 387: ["BA"], 389: ["MK"], 420: ["CZ"], 421: ["SK"], 423: ["LI"], 500: ["FK"], 501: ["BZ"], 502: ["GT"], 503: ["SV"], 504: ["HN"], 505: ["NI"], 506: ["CR"], 507: ["PA"], 508: ["PM"], 509: ["HT"], 590: ["GP", "BL", "MF"], 591: ["BO"], 592: ["GY"], 593: ["EC"], 594: ["GF"], 595: ["PY"], 596: ["MQ"], 597: ["SR"], 598: ["UY"], 599: ["CW", "BQ"], 670: ["TL"], 672: ["NF"], 673: ["BN"], 674: ["NR"], 675: ["PG"], 676: ["TO"], 677: ["SB"], 678: ["VU"], 679: ["FJ"], 680: ["PW"], 681: ["WF"], 682: ["CK"], 683: ["NU"], 685: ["WS"], 686: ["KI"], 687: ["NC"], 688: ["TV"], 689: ["PF"], 690: ["TK"], 691: ["FM"], 692: ["MH"], 850: ["KP"], 852: ["HK"], 853: ["MO"], 855: ["KH"], 856: ["LA"], 880: ["BD"], 886: ["TW"], 960: ["MV"], 961: ["LB"], 962: ["JO"], 963: ["SY"], 964: ["IQ"], 965: ["KW"], 966: ["SA"], 967: ["YE"], 968: ["OM"], 970: ["PS"], 971: ["AE"], 972: ["IL"], 973: ["BH"], 974: ["QA"], 975: ["BT"], 976: ["MN"], 977: ["NP"], 992: ["TJ"], 993: ["TM"], 994: ["AZ"], 995: ["GE"], 996: ["KG"], 998: ["UZ"] }, countries: { AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]], AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"], AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"], AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"], AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]", "(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:2(?:(?:[0-26-9]\\d|3[0-8]|5[0135-9])\\d|4(?:[02-9]\\d|10))|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90))|7(?:[013-57-9]\\d|2[0-8])\\d)\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"], BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|2[23]"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], BF: ["226", "00", "(?:[025-7]\\d|44)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[024-7]"]]]], BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]], BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], BJ: ["229", "00", "(?:01\\d|[24-689])\\d{7}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["0"]]]], BL: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"], BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], BO: ["591", "00(?:1\\d)?", "8001\\d{5}|(?:[2-467]\\d|50)\\d{6}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[235]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37|86)", "300|4(?:0(?:0|20)|370|864)"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"], BT: ["975", "00", "[178]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-6]|7[246]|8[2-4]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|[78]"]]]], BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], CA: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|33|44|66|77|88)|6(?:22|33))[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CD: ["243", "00", "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["5"], "0$1"]], "0"], CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]], CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], CI: ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], CK: ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["60|809"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:10|[2-9])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-8]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]", "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"], CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["46"]], ["(\\d{3})(\\d{7})", "$1 $2", ["6|90"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|9[14]"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"], CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], CU: ["53", "119", "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|3[13])"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"], DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"], EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"], ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], ES: ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]], ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"], FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{5})", "$1", ["20[2-59]"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], ["(\\d)(\\d{4,9})", "$1 $2", ["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], FK: ["500", "00", "[2-7]\\d{4}", [5]], FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], FO: ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, "0|180020", 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-35])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"], GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], GF: ["594", "00", "(?:[56]94\\d|7093)\\d{5}|(?:80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"], GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0|180020", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"], GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], GM: ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], GP: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], GT: ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"], GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], GY: ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], HR: ["385", "00", "[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}", [7, 8, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], HT: ["509", "00", "[2-589]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], ID: ["62", "00[89]", "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0|180020", "1624$1", 0, "74576|(?:16|7[56])24"], IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], IT: ["39", "00", "0\\d{5,11}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[03]"]]], 0, 0, 0, 0, 0, 0, [["0(?:669[0-79]\\d{1,6}|831\\d{2,8})|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[2356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], ["3[2-8]\\d{9,10}", [11, 12]], 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0|180020", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], JP: ["81", "010", "00[1-9]\\d{6,14}|[25-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]", "3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[25-9]"], "0$1"]], "0", 0, "(000[2569]\\d{4,6})$|(?:(?:003768)0?)|0", "$1"], KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"], KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"], KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33622|7", 0, "8~10"], LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"], LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"], LK: ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], LR: ["231", "00", "(?:[2457]\\d|33|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]], "0"], LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1]], "0", 0, "[08]"], LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], LV: ["371", "00", "(?:[268]\\d|78|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2679]|8[01]"]]]], LY: ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-8]|5[0-5]|8[0-7]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]], MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"], MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], MF: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"], MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], ML: ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|452|678|86", "[12]|452|6788|86"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"], MQ: ["596", "00", "(?:596\\d|7091)\\d{5}|(?:69|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|8(?:0[6-9]|[36])"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"], MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"], MX: ["52", "0[09]", "[2-9]\\d{9}", [10], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], NE: ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[0467]"]]]], NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], NG: ["234", "009", "(?:20|9\\d)\\d{8}|[78]\\d{9,13}", [10, 11, 12, 13, 14], [["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], NR: ["674", "00", "(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[24-9]"]]]], NU: ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], PM: ["508", "00", "[45]\\d{5}|(?:708|8\\d\\d)\\d{6}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[136]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], RE: ["262", "00", "709\\d{6}|(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"], ["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], RO: ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, 0, [["336(?:[013-9]\\d|2[013-9])\\d{5}|(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15-7]|6[0-35-79]|7[1-37-9]))\\d{7}", [10]], ["9\\d{9}", [10]], ["8(?:0[04]|108\\d{3})\\d{7}"], ["80[39]\\d{7}", [10]], ["808\\d{7}", [10]]], "8~10"], RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], SA: ["966", "00", "(?:[15]\\d|800|92)\\d{7}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], SB: ["677", "0[01]", "[6-9]\\d{6}|[1-6]\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]]], SC: ["248", "010|0[0-2]", "(?:[2489]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"], SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|7[67]|9[2-9]"]]], "0"], SR: ["597", "00", "(?:[2-5]|[6-8]\\d|90)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-9]"]]]], SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], SV: ["503", "00", "[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"], SY: ["963", "00", "[1-359]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-4]|5[1-3]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[59]"], "0$1", 1]], "0"], SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"], TD: ["235", "00|16", "(?:22|30|[689]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[236-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], TJ: ["992", "810", "[0-57-9]\\d{8}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], TM: ["993", "810", "(?:[1-6]\\d|71)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"], TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"], US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["3052(?:0[0-8]|[1-9]\\d)\\d{4}|(?:2742|305[3-9])\\d{6}|(?:472|983)[2-47-9]\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[0135-79]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-269])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-247]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, 0, ["305209\\d{4}"]]], UY: ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|2\\d{3,4}|(?:[49]\\d|80)\\d{5}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{4,5})", "$1", ["21"]], ["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], UZ: ["998", "00", "(?:20|33|[5-9]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]]], VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11, 12], 0, 0, 0, 0, 0, 0, "06698"], VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"], VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"], VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"], VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], WF: ["681", "00", "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[47-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], XK: ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"], ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]], "0"], YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], YT: ["262", "00", "7093\\d{5}|(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"], ["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]], ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], ZM: ["260", "00", "800\\d{6}|(?:21|[579]\\d|63)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[579]"], "0$1"]], "0"], ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"] }, nonGeographic: { 800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], 808: ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], 870: ["870", 0, "7\\d{11}|[235-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"], 0, 0, 0, 0, 0, 0, ["2\\d{8}", [9]]]], 878: ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], 881: ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]], 882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, ["348[57]\\d{7}", [11]], 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], 883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], 888: ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], 979: ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };
function eg(e, t) {
  var r = Array.prototype.slice.call(t);
  return r.push(Qp), e.apply(this, r);
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
var tg = {}.constructor;
function pr(e) {
  return e != null && e.constructor === tg;
}
function hr(e) {
  "@babel/helpers - typeof";
  return hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hr(e);
}
function In(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function rg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ng(n.key), n);
  }
}
function An(e, t, r) {
  return t && rg(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ng(e) {
  var t = og(e, "string");
  return hr(t) == "symbol" ? t : t + "";
}
function og(e, t) {
  if (hr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var ag = "1.2.0", sg = "1.7.35", bs = " ext. ", ig = /^\d+$/, Je = /* @__PURE__ */ function() {
  function e(t) {
    In(this, e), Xl(t), this.metadata = t, Zl.call(this, t);
  }
  return An(e, [{
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
      if (r && ig.test(r) && (n = r, r = null), r && r !== "001") {
        if (!this.hasCountry(r))
          throw new Error("Unknown country: ".concat(r));
        this.numberingPlan = new hs(this.getCountryMetadata(r), this);
      } else if (n) {
        if (!this.hasCallingCode(n))
          throw new Error("Unknown calling code: ".concat(n));
        this.numberingPlan = new hs(this.getNumberingPlanMetadata(n), this);
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
}(), hs = /* @__PURE__ */ function() {
  function e(t, r) {
    In(this, e), this.globalMetadataObject = r, this.metadata = t, Zl.call(this, r.metadata);
  }
  return An(e, [{
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
        return new lg(o, r);
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
      if (this.hasTypes() && $s(this.types(), r))
        return new cg($s(this.types(), r), this);
    }
  }, {
    key: "ext",
    value: function() {
      return this.v1 || this.v2 ? bs : this.metadata[13] || bs;
    }
  }]);
}(), lg = /* @__PURE__ */ function() {
  function e(t, r) {
    In(this, e), this._format = t, this.metadata = r;
  }
  return An(e, [{
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
      !dg.test(this.nationalPrefixFormattingRule()));
    }
  }, {
    key: "internationalFormat",
    value: function() {
      return this._format[5] || this.format();
    }
  }]);
}(), dg = /^\(?\$1\)?$/, cg = /* @__PURE__ */ function() {
  function e(t, r) {
    In(this, e), this.type = t, this.metadata = r;
  }
  return An(e, [{
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
function $s(e, t) {
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
function Xl(e) {
  if (!e)
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  if (!pr(e) || !pr(e.countries))
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(pr(e) ? "an object of shape: { " + Object.keys(e).join(", ") + " }" : "a " + ug(e) + ": " + e, "."));
}
var ug = function(t) {
  return hr(t);
};
function Jo(e, t) {
  if (t = new Je(t), t.hasCountry(e))
    return t.selectNumberingPlan(e).countryCallingCode();
  throw new Error("Unknown country: ".concat(e));
}
function fg(e, t) {
  return t.countries.hasOwnProperty(e);
}
function Zl(e) {
  var t = e.version;
  typeof t == "number" ? (this.v1 = t === 1, this.v2 = t === 2, this.v3 = t === 3, this.v4 = t === 4) : t ? ms(t, ag) === -1 ? this.v2 = !0 : ms(t, sg) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0;
}
function Qo(e, t, r) {
  return pg(e, t, void 0, r);
}
function pg(e, t, r, n) {
  t && (n = new Je(n.metadata), n.selectNumberingPlan(t));
  var o = n.type(r), a = o && o.possibleLengths() || n.possibleLengths();
  if (!a)
    return "IS_POSSIBLE";
  var s = e.length, i = a[0];
  return i === s ? "IS_POSSIBLE" : i > s ? "TOO_SHORT" : a[a.length - 1] < s ? "TOO_LONG" : a.indexOf(s, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
function gg(e, t, r) {
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
    return ql(e.phone || e.nationalNumber, e.country, r);
  if (e.countryCallingCode && r.isNonGeographicCallingCode(e.countryCallingCode))
    return !0;
  throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
}
function ql(e, t, r) {
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
function mg(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = bg(e)) || t) {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bg(e, t) {
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
var hg = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function ea(e, t, r) {
  if (t = t || {}, !(!e.country && !e.countryCallingCode)) {
    r = new Je(r), r.selectNumberingPlan(e.country, e.countryCallingCode);
    var n = t.v2 ? e.nationalNumber : e.phone;
    if (_t(n, r.nationalNumberPattern())) {
      if (qn(n, "FIXED_LINE", r))
        return r.type("MOBILE") && r.type("MOBILE").pattern() === "" || !r.type("MOBILE") || qn(n, "MOBILE", r) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
      for (var o = mg(hg), a; !(a = o()).done; ) {
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
function $g(e, t, r) {
  if (t = t || {}, r = new Je(r), r.selectNumberingPlan(e.country, e.countryCallingCode), r.hasTypes())
    return ea(e, t, r.metadata) !== void 0;
  var n = t.v2 ? e.nationalNumber : e.phone;
  return _t(n, r.nationalNumberPattern());
}
function vg(e, t, r) {
  var n = new Je(r), o = n.getCountryCodesForCallingCode(e);
  return o ? o.filter(function(a) {
    return yg(t, a, r);
  }) : [];
}
function yg(e, t, r) {
  var n = new Je(r);
  return n.selectNumberingPlan(t), n.numberingPlan.possibleLengths().indexOf(e.length) >= 0;
}
var ta = 2, xg = 17, wg = 3, bt = "0-9０-９٠-٩۰-۹", kg = "-‐-―−ー－", Eg = "／/", Ng = "．.", Pg = "  ­​⁠　", Tg = "()（）［］\\[\\]", Cg = "~⁓∼～", yn = "".concat(kg).concat(Eg).concat(Ng).concat(Pg).concat(Tg).concat(Cg), ra = "+＋", Sg = new RegExp("([" + bt + "])");
function jg(e, t, r, n) {
  if (t) {
    var o = new Je(n);
    o.selectNumberingPlan(t, r);
    var a = new RegExp(o.IDDPrefix());
    if (e.search(a) === 0) {
      e = e.slice(e.match(a)[0].length);
      var s = e.match(Sg);
      if (!(s && s[1] != null && s[1].length > 0 && s[1] === "0"))
        return e;
    }
  }
}
function Og(e, t) {
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
function Ig(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Ag(e)) || t) {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ag(e, t) {
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
function _g(e, t) {
  var r = t.countries, n = t.metadata;
  n = new Je(n);
  for (var o = Ig(r), a; !(a = o()).done; ) {
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
function Jl(e, t) {
  var r = t.nationalNumber, n = t.metadata, o = n.getCountryCodesForCallingCode(e);
  if (o)
    return o.length === 1 ? o[0] : _g(r, {
      countries: o,
      metadata: n.metadata
    });
}
function No(e, t, r) {
  var n = Og(e, r), o = n.carrierCode, a = n.nationalNumber;
  if (a !== e) {
    if (!Rg(e, a, r))
      return {
        nationalNumber: e
      };
    if (r.numberingPlan.possibleLengths() && (t || (t = Jl(r.numberingPlan.callingCode(), {
      nationalNumber: a,
      metadata: r
    })), !Lg(a, t, r)))
      return {
        nationalNumber: e
      };
  }
  return {
    nationalNumber: a,
    carrierCode: o
  };
}
function Rg(e, t, r) {
  return !(_t(e, r.nationalNumberPattern()) && !_t(t, r.nationalNumberPattern()));
}
function Lg(e, t, r) {
  switch (Qo(e, t, r)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return !1;
    default:
      return !0;
  }
}
function Mg(e, t, r, n, o) {
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
function Ql(e, t, r, n, o) {
  if (!e)
    return {};
  var a;
  if (e[0] !== "+") {
    var s = jg(e, r, n, o);
    if (s && s !== e)
      a = !0, e = "+" + s;
    else {
      if (r || n) {
        var i = Mg(e, t, r, n, o), d = i.countryCallingCode, u = i.number;
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
  for (var c = 2; c - 1 <= wg && c <= e.length; ) {
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
function Fg(e) {
  return e.replace(new RegExp("[".concat(yn, "]+"), "g"), " ").trim();
}
var Dg = /(\$\d)/;
function zg(e, t, r) {
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
    o && t.nationalPrefixFormattingRule() ? t.format().replace(Dg, t.nationalPrefixFormattingRule()) : t.format()
  ));
  return n ? Fg(a) : a;
}
var Gg = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function Bg(e, t, r) {
  var n = new Je(r);
  if (n.selectNumberingPlan(e, t), n.defaultIDDPrefix())
    return n.defaultIDDPrefix();
  if (Gg.test(n.IDDPrefix()))
    return n.IDDPrefix();
}
var Vg = ";ext=", ir = function(t) {
  return "([".concat(bt, "]{1,").concat(t, "})");
};
function ed(e) {
  var t = "20", r = "15", n = "9", o = "6", a = "[  \\t,]*", s = "[:\\.．]?[  \\t,-]*", i = "#?", d = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)", u = "(?:[xｘ#＃~～]|int|ｉｎｔ)", c = "[- ]+", f = "[  \\t]*", m = "(?:,{2}|;)", p = Vg + ir(t), h = a + d + s + ir(t) + i, w = a + u + s + ir(n) + i, $ = c + ir(o) + "#", k = f + m + s + ir(r) + i, v = f + "(?:,)+" + s + ir(n) + i;
  return p + "|" + h + "|" + w + "|" + $ + "|" + k + "|" + v;
}
var Hg = "[" + bt + "]{" + ta + "}", Ug = "[" + ra + "]{0,1}(?:[" + yn + "]*[" + bt + "]){3,}[" + yn + bt + "]*", Kg = new RegExp("^[" + ra + "]{0,1}(?:[" + yn + "]*[" + bt + "]){1,2}$", "i"), Wg = Ug + // Phone number extensions
"(?:" + ed() + ")?", Yg = new RegExp(
  // Either a short two-digit-only phone number
  "^" + Hg + "$|^" + Wg + "$",
  "i"
);
function Xg(e) {
  return e.length >= ta && Yg.test(e);
}
function Zg(e) {
  return Kg.test(e);
}
function qg(e) {
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
function Jg(e, t, r, n) {
  if (r ? r = t1({}, xs, r) : r = xs, n = new Je(n), e.country && e.country !== "001") {
    if (!n.hasCountry(e.country))
      throw new Error("Unknown country: ".concat(e.country));
    n.selectNumberingPlan(e.country);
  } else if (e.countryCallingCode)
    n.selectNumberingPlan(e.countryCallingCode);
  else return e.phone || "";
  var o = n.countryCallingCode(), a = r.v2 ? e.nationalNumber : e.phone, s;
  switch (t) {
    case "NATIONAL":
      return a ? (s = xn(a, e.carrierCode, "NATIONAL", n, r), Jn(s, e.ext, n, r.formatExtension)) : "";
    case "INTERNATIONAL":
      return a ? (s = xn(a, null, "INTERNATIONAL", n, r), s = "+".concat(o, " ").concat(s), Jn(s, e.ext, n, r.formatExtension)) : "+".concat(o);
    case "E.164":
      return "+".concat(o).concat(a);
    case "RFC3966":
      return qg({
        number: "+".concat(o).concat(a),
        ext: e.ext
      });
    case "IDD":
      if (!r.fromCountry)
        return;
      var i = e1(a, e.carrierCode, o, r.fromCountry, n);
      return Jn(i, e.ext, n, r.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(t, '"'));
  }
}
function xn(e, t, r, n, o) {
  var a = Qg(n.formats(), e);
  return a ? zg(e, a, {
    useInternationalFormat: r === "INTERNATIONAL",
    withNationalPrefix: !(a.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && o && o.nationalPrefix === !1)
  }) : e;
}
function Qg(e, t) {
  return r1(e, function(r) {
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
function e1(e, t, r, n, o) {
  var a = Jo(n, o.metadata);
  if (a === r) {
    var s = xn(e, t, "NATIONAL", o);
    return r === "1" ? r + " " + s : s;
  }
  var i = Bg(n, void 0, o.metadata);
  if (i)
    return "".concat(i, " ").concat(r, " ").concat(xn(e, null, "INTERNATIONAL", o));
}
function t1() {
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
function r1(e, t) {
  for (var r = 0; r < e.length; ) {
    if (t(e[r]))
      return e[r];
    r++;
  }
}
function Fr(e) {
  "@babel/helpers - typeof";
  return Fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fr(e);
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
      n1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ws(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function n1(e, t, r) {
  return (t = td(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function o1(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function a1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, td(n.key), n);
  }
}
function s1(e, t, r) {
  return t && a1(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function td(e) {
  var t = i1(e, "string");
  return Fr(t) == "symbol" ? t : t + "";
}
function i1(e, t) {
  if (Fr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Fr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var l1 = /* @__PURE__ */ function() {
  function e(t, r, n) {
    if (o1(this, e), !t)
      throw new TypeError("First argument is required");
    if (typeof t != "string")
      throw new TypeError("First argument must be a string");
    if (t[0] === "+" && !r)
      throw new TypeError("`metadata` argument not passed");
    if (pr(r) && pr(r.countries)) {
      n = r;
      var o = t;
      if (!u1.test(o))
        throw new Error('Invalid `number` argument passed: must consist of a "+" followed by digits');
      var a = Ql(o, void 0, void 0, void 0, n), s = a.countryCallingCode, i = a.number;
      if (r = i, t = s, !r)
        throw new Error("Invalid `number` argument passed: too short");
    }
    if (!r)
      throw new TypeError("`nationalNumber` argument is required");
    if (typeof r != "string")
      throw new TypeError("`nationalNumber` argument must be a string");
    Xl(n);
    var d = c1(t, n), u = d.country, c = d.countryCallingCode;
    this.country = u, this.countryCallingCode = c, this.nationalNumber = r, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
      return n;
    };
  }
  return s1(e, [{
    key: "setExt",
    value: function(r) {
      this.ext = r;
    }
  }, {
    key: "getPossibleCountries",
    value: function() {
      return this.country ? [this.country] : vg(this.countryCallingCode, this.nationalNumber, this.getMetadata());
    }
  }, {
    key: "isPossible",
    value: function() {
      return gg(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isValid",
    value: function() {
      return $g(this, {
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
      return Jg(this, r, n ? ks(ks({}, n), {}, {
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
}(), d1 = function(t) {
  return /^[A-Z]{2}$/.test(t);
};
function c1(e, t) {
  var r, n, o = new Je(t);
  return d1(e) ? (r = e, o.selectNumberingPlan(r), n = o.countryCallingCode()) : n = e, {
    country: r,
    countryCallingCode: n
  };
}
var u1 = /^\+\d+$/;
function Po(e) {
  "@babel/helpers - typeof";
  return Po = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Po(e);
}
function f1(e, t, r) {
  return Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function p1(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function g1(e, t, r) {
  return t = zr(t), m1(e, na() ? Reflect.construct(t, r || [], zr(e).constructor) : t.apply(e, r));
}
function m1(e, t) {
  if (t && (Po(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return b1(e);
}
function b1(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function h1(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Dr(e, t);
}
function To(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return To = function(n) {
    if (n === null || !v1(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(n)) return t.get(n);
      t.set(n, o);
    }
    function o() {
      return $1(n, arguments, zr(this).constructor);
    }
    return o.prototype = Object.create(n.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), Dr(o, n);
  }, To(e);
}
function $1(e, t, r) {
  if (na()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var o = new (e.bind.apply(e, n))();
  return r && Dr(o, r.prototype), o;
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
function v1(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Dr(e, t) {
  return Dr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Dr(e, t);
}
function zr(e) {
  return zr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, zr(e);
}
var jt = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return p1(this, t), n = g1(this, t, [r]), Object.setPrototypeOf(n, t.prototype), n.name = n.constructor.name, n;
  }
  return h1(t, e), f1(t);
}(/* @__PURE__ */ To(Error)), Es = new RegExp("(?:" + ed() + ")$", "i");
function y1(e) {
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
var x1 = {
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
function w1(e) {
  return x1[e];
}
function k1(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = E1(e)) || t) {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function E1(e, t) {
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
  for (var t = "", r = k1(e.split("")), n; !(n = r()).done; ) {
    var o = n.value;
    t += N1(o, t) || "";
  }
  return t;
}
function N1(e, t, r) {
  return e === "+" ? t ? void 0 : "+" : w1(e);
}
var rd = "+", P1 = "[\\-\\.\\(\\)]?", Ts = "([" + bt + "]|" + P1 + ")", T1 = "^\\" + rd + Ts + "*[" + bt + "]" + Ts + "*$", C1 = new RegExp(T1, "g"), Co = bt, S1 = "[" + Co + "]+((\\-)*[" + Co + "])*", j1 = "a-zA-Z", O1 = "[" + j1 + "]+((\\-)*[" + Co + "])*", I1 = "^(" + S1 + "\\.)*" + O1 + "\\.?$", A1 = new RegExp(I1, "g"), Cs = "tel:", So = ";phone-context=", _1 = ";isub=";
function R1(e) {
  var t = e.indexOf(So);
  if (t < 0)
    return null;
  var r = t + So.length;
  if (r >= e.length)
    return "";
  var n = e.indexOf(";", r);
  return n >= 0 ? e.substring(r, n) : e.substring(r);
}
function L1(e) {
  return e === null ? !0 : e.length === 0 ? !1 : C1.test(e) || A1.test(e);
}
function M1(e, t) {
  var r = t.extractFormattedPhoneNumber, n = R1(e);
  if (!L1(n))
    throw new jt("NOT_A_NUMBER");
  var o;
  if (n === null)
    o = r(e) || "";
  else {
    o = "", n.charAt(0) === rd && (o += n);
    var a = e.indexOf(Cs), s;
    a >= 0 ? s = a + Cs.length : s = 0;
    var i = e.indexOf(So);
    o += e.substring(s, i);
  }
  var d = o.indexOf(_1);
  if (d > 0 && (o = o.substring(0, d)), o !== "")
    return o;
}
var F1 = 250, D1 = new RegExp("[" + ra + bt + "]"), z1 = new RegExp("[^" + bt + "#]+$");
function G1(e, t, r) {
  if (t = t || {}, r = new Je(r), t.defaultCountry && !r.hasCountry(t.defaultCountry))
    throw t.v2 ? new jt("INVALID_COUNTRY") : new Error("Unknown country: ".concat(t.defaultCountry));
  var n = V1(e, t.v2, t.extract), o = n.number, a = n.ext, s = n.error;
  if (!o) {
    if (t.v2)
      throw s === "TOO_SHORT" ? new jt("TOO_SHORT") : new jt("NOT_A_NUMBER");
    return {};
  }
  var i = U1(o, t.defaultCountry, t.defaultCallingCode, r), d = i.country, u = i.nationalNumber, c = i.countryCallingCode, f = i.countryCallingCodeSource, m = i.carrierCode;
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
  if (u.length > xg) {
    if (t.v2)
      throw new jt("TOO_LONG");
    return {};
  }
  if (t.v2) {
    var p = new l1(c, u, r.metadata);
    return d && (p.country = d), m && (p.carrierCode = m), a && (p.ext = a), p.__countryCallingCodeSource = f, p;
  }
  var h = (t.extended ? r.hasSelectedNumberingPlan() : d) ? _t(u, r.nationalNumberPattern()) : !1;
  return t.extended ? {
    country: d,
    countryCallingCode: c,
    carrierCode: m,
    valid: h,
    possible: h ? !0 : !!(t.extended === !0 && r.possibleLengths() && ql(u, d, r)),
    phone: u,
    ext: a
  } : h ? H1(d, u, a) : {};
}
function B1(e, t, r) {
  if (e) {
    if (e.length > F1) {
      if (r)
        throw new jt("TOO_LONG");
      return;
    }
    if (t === !1)
      return e;
    var n = e.search(D1);
    if (!(n < 0))
      return e.slice(n).replace(z1, "");
  }
}
function V1(e, t, r) {
  var n = M1(e, {
    extractFormattedPhoneNumber: function(s) {
      return B1(s, r, t);
    }
  });
  if (!n)
    return {};
  if (!Xg(n))
    return Zg(n) ? {
      error: "TOO_SHORT"
    } : {};
  var o = y1(n);
  return o.ext ? o : {
    number: n
  };
}
function H1(e, t, r) {
  var n = {
    country: e,
    phone: t
  };
  return r && (n.ext = r), n;
}
function U1(e, t, r, n) {
  var o = Ql(Ps(e), void 0, t, r, n.metadata), a = o.countryCallingCodeSource, s = o.countryCallingCode, i = o.number, d;
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
  var u = No(Ps(i), d, n), c = u.nationalNumber, f = u.carrierCode, m = Jl(s, {
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
function Gr(e) {
  "@babel/helpers - typeof";
  return Gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gr(e);
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
      K1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ss(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function K1(e, t, r) {
  return (t = W1(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function W1(e) {
  var t = Y1(e, "string");
  return Gr(t) == "symbol" ? t : t + "";
}
function Y1(e, t) {
  if (Gr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Gr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function X1(e, t, r) {
  return G1(e, js(js({}, t), {}, {
    v2: !0
  }), r);
}
function Br(e) {
  "@babel/helpers - typeof";
  return Br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Br(e);
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
function Z1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Os(Object(r), !0).forEach(function(n) {
      q1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Os(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function q1(e, t, r) {
  return (t = J1(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function J1(e) {
  var t = Q1(e, "string");
  return Br(t) == "symbol" ? t : t + "";
}
function Q1(e, t) {
  if (Br(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Br(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function em(e, t) {
  return om(e) || nm(e, t) || rm(e, t) || tm();
}
function tm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rm(e, t) {
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
function nm(e, t) {
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
function om(e) {
  if (Array.isArray(e)) return e;
}
function am(e) {
  var t = Array.prototype.slice.call(e), r = em(t, 4), n = r[0], o = r[1], a = r[2], s = r[3], i, d, u;
  if (typeof n == "string")
    i = n;
  else throw new TypeError("A text for parsing must be a string.");
  if (!o || typeof o == "string")
    s ? (d = a, u = s) : (d = void 0, u = a), o && (d = Z1({
      defaultCountry: o
    }, d));
  else if (pr(o))
    a ? (d = o, u = a) : u = o;
  else throw new Error("Invalid second argument: ".concat(o));
  return {
    text: i,
    options: d,
    metadata: u
  };
}
function Vr(e) {
  "@babel/helpers - typeof";
  return Vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vr(e);
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
      sm(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : As(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sm(e, t, r) {
  return (t = im(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function im(e) {
  var t = lm(e, "string");
  return Vr(t) == "symbol" ? t : t + "";
}
function lm(e, t) {
  if (Vr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Vr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dm(e, t, r) {
  t && t.defaultCountry && !fg(t.defaultCountry, r) && (t = _s(_s({}, t), {}, {
    defaultCountry: void 0
  }));
  try {
    return X1(e, t, r);
  } catch (n) {
    if (!(n instanceof jt)) throw n;
  }
}
function cm() {
  var e = am(arguments), t = e.text, r = e.options, n = e.metadata;
  return dm(t, r, n);
}
function nd() {
  return eg(cm, arguments);
}
function um(e) {
  var o;
  const t = nd(e);
  if (!t) return null;
  const r = (o = t.country) == null ? void 0 : o.toLowerCase(), n = Ct.find((a) => a.iso === r);
  return n ? {
    ...n,
    formatted: t.formatInternational(),
    isValid: t.isValid()
  } : null;
}
function fm(e) {
  var n;
  const t = nd(e);
  if (!t) return null;
  const r = (n = t.country) == null ? void 0 : n.toLowerCase();
  return Ct.find((o) => o.iso === r) || null;
}
const pm = He(
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
), nn = (e) => {
  if (!e) return null;
  const t = e.startsWith("+") ? e : `+${e}`;
  return fm(t);
}, gm = (e) => e.startsWith("0") && e.length >= 9 && e.length <= 12 ? "+62" + e.slice(1) : e, mm = (e) => e.startsWith("0") && e.length >= 3, od = Pe(
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
    placeholder: h = "Enter phone number",
    autoDetect: w = !0,
    name: $,
    ...k
  }, v) => {
    const [j, P] = ae(!1), [O, I] = ae(
      () => Ct.find((G) => G.iso === p) || Ct[0]
    ), [H, z] = ae(""), [F, D] = ae(() => {
      if (w && c) {
        const M = nn(c);
        return M && I(M), c;
      }
      const G = O.code;
      return c.startsWith(G) ? c.slice(G.length) : c;
    });
    de(() => {
      if (c && f)
        if (w) {
          const G = nn(c);
          if (G) {
            const M = {
              iso: G.iso,
              code: G.code.replace("+", "")
            };
            f(c, M);
          } else
            f(c);
        } else {
          const G = {
            iso: O.iso,
            code: O.code.replace("+", "")
          };
          f(c, G);
        }
    }, []);
    const [g, T] = ae(() => w && c ? !!nn(c) : !1), y = J(null), N = J(null), R = J(null), b = oe.useId(), C = `${b}-helper`, S = `${b}-error`;
    Qt(v, () => R.current || _.current, []);
    const A = Ct.filter(
      (G) => G.name.toLowerCase().includes(H.toLowerCase()) || G.code.includes(H)
    ), _ = J(null), E = () => {
      if (j && y.current && N.current) {
        const G = y.current.getBoundingClientRect(), M = N.current, V = typeof window < "u" ? window : { innerHeight: 0 }, se = V.innerHeight - G.bottom, ce = G.top, ve = G.bottom + (M.offsetHeight || 0) + 4 >= V.innerHeight, Re = ce > se, Se = ve && Re;
        M.style.position = "fixed", M.style.left = `${G.left}px`, M.style.minWidth = `${G.width}px`, M.style.maxWidth = "340px", M.style.width = "auto", Se ? (M.style.bottom = `${V.innerHeight - G.top + 4}px`, M.style.top = "auto", M.style.maxHeight = `${ce - 8}px`) : (M.style.top = `${G.bottom + 4}px`, M.style.bottom = "auto", M.style.maxHeight = `${se - 8}px`);
      }
    };
    de(() => {
      const G = typeof window < "u" ? window : void 0, M = () => {
        j && E();
      }, V = () => {
        j && E();
      };
      return j && (E(), G == null || G.addEventListener("scroll", M, !0), G == null || G.addEventListener("resize", V)), () => {
        G == null || G.removeEventListener("scroll", M, !0), G == null || G.removeEventListener("resize", V);
      };
    }, [j]), de(() => {
      if (!j) return;
      const G = (M) => {
        const V = M.target;
        y.current && N.current && !y.current.contains(V) && !N.current.contains(V) && P(!1);
      };
      return document.addEventListener("click", G), () => document.removeEventListener("click", G);
    }, [j]);
    const L = (G) => {
      if (I(G), P(!1), z(""), w) {
        const M = G.code + F.replace(/^\+?\d*/, "");
        D(M);
        const V = M.replace(/[^\d]/g, ""), se = {
          iso: G.iso,
          code: G.code.replace("+", "")
        };
        f == null || f(V, se);
      } else {
        const V = (G.code + F).replace(/[^\d]/g, ""), se = {
          iso: G.iso,
          code: G.code.replace("+", "")
        };
        f == null || f(V, se);
      }
    }, K = (G) => {
      const M = G.target.value;
      if (/^[+\d]*$/.test(M))
        if (w && M.startsWith("+")) {
          const se = nn(M);
          if (se) {
            I(se), T(!0), D(M);
            const ce = M.replace(/[^\d]/g, ""), fe = {
              iso: se.iso,
              code: se.code.replace("+", "")
            };
            f == null || f(ce, fe);
          } else {
            D(M), T(!1);
            const ce = M.replace(/[^\d]/g, "");
            f == null || f(ce);
          }
        } else if (w && !M.startsWith("+") && M.length > 0) {
          const se = gm(M);
          if (se !== M) {
            D(se), I(
              Ct.find((ve) => ve.iso === "id") || Ct[0]
            ), T(!0);
            const ce = se.replace(/[^\d]/g, ""), fe = {
              iso: "id",
              code: "62"
            };
            f == null || f(ce, fe);
          } else if (mm(M)) {
            const ce = "+62" + M.slice(1);
            D(ce), I(
              Ct.find((Re) => Re.iso === "id") || Ct[0]
            ), T(!0);
            const fe = ce.replace(/[^\d]/g, ""), ve = {
              iso: "id",
              code: "62"
            };
            f == null || f(fe, ve);
          } else if (M.startsWith("0"))
            D(M), T(!1);
          else {
            const ce = "+" + M;
            D(ce);
            const fe = ce.replace(/[^\d]/g, "");
            f == null || f(fe);
          }
        } else {
          const se = M.replace(/[^\d]/g, "");
          D(se);
          const fe = (O.code + se).replace(/[^\d]/g, ""), ve = {
            iso: O.iso,
            code: O.code.replace("+", "")
          };
          f == null || f(fe, ve);
        }
    }, U = B(
      pm({
        variant: o ? "error" : t,
        size: r,
        rounded: n,
        fullWidth: u
      }),
      "!w-full"
    ), X = !w || w && g;
    return de(() => {
      if (R.current) {
        const G = F || "";
        R.current.value = G;
        const M = new Event("input", { bubbles: !0 });
        R.current.dispatchEvent(M);
      }
    }, [F]), /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: _,
        className: B(u ? "w-full" : "inline-block", e),
        ...k,
        children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "hidden",
              ref: R,
              name: $,
              value: F || "",
              onChange: () => {
              }
            }
          ),
          i && /* @__PURE__ */ l.jsxs("label", { htmlFor: b, className: "mb-1.5 block text-sm text-neutral-900", children: [
            i,
            d && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: B("relative", !u && "inline-block"), children: [
            /* @__PURE__ */ l.jsxs("div", { className: "flex", children: [
              X && /* @__PURE__ */ l.jsxs(
                "button",
                {
                  type: "button",
                  ref: y,
                  onClick: () => !m && P(!j),
                  className: B(
                    U,
                    "flex items-center gap-2 rounded-r-none justify-between",
                    w ? "max-w-[60px]" : "max-w-[100px]",
                    m && "cursor-not-allowed opacity-50"
                  ),
                  children: [
                    /* @__PURE__ */ l.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ l.jsx(me, { icon: O.flag, className: "w-5 h-5" }),
                      !w && /* @__PURE__ */ l.jsx("span", { className: "text-sm", children: O.code })
                    ] }),
                    /* @__PURE__ */ l.jsx(
                      me,
                      {
                        icon: "mdi:chevron-down",
                        className: B("transition-transform", j && "rotate-180")
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ l.jsx(
                "input",
                {
                  type: "tel",
                  id: b,
                  value: F,
                  onChange: K,
                  disabled: m,
                  className: B(
                    U,
                    X ? "rounded-l-none" : `rounded-l-${n}`,
                    "flex-1 min-w-0 w-full"
                  ),
                  placeholder: w ? "e.g. +6281234567890" : h
                }
              )
            ] }),
            j && er(
              /* @__PURE__ */ l.jsxs(
                "div",
                {
                  ref: N,
                  className: "border border-neutral-200 bg-white shadow-lg overflow-y-auto rounded-md",
                  children: [
                    /* @__PURE__ */ l.jsx("div", { className: "p-2 border-b border-neutral-200", children: /* @__PURE__ */ l.jsx(
                      "input",
                      {
                        type: "text",
                        value: H,
                        onChange: (G) => {
                          const M = G.target.value;
                          /^[a-zA-Z0-9\s]*$/.test(M) && z(M);
                        },
                        placeholder: "Search countries...",
                        className: "w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:border-primary-300"
                      }
                    ) }),
                    /* @__PURE__ */ l.jsx("div", { className: "max-h-[300px] overflow-y-auto", children: A.map((G) => /* @__PURE__ */ l.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => L(G),
                        className: B(
                          "w-full px-3 py-2 text-sm text-left hover:bg-primary-50 cursor-pointer",
                          O.iso === G.iso && "bg-primary-50"
                        ),
                        children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ l.jsx(me, { icon: G.flag, className: "w-5 h-5" }),
                          /* @__PURE__ */ l.jsx("span", { className: "text-sm font-medium", children: G.code }),
                          /* @__PURE__ */ l.jsx("span", { className: "text-sm text-neutral-600", children: G.name })
                        ] })
                      },
                      G.iso + G.code
                    )) })
                  ]
                }
              ),
              typeof document < "u" ? document.body : document
            )
          ] }),
          o && a && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger", id: S, children: a }),
          !o && s && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral", id: C, children: s })
        ]
      }
    );
  }
);
od.displayName = "PhoneInput";
const Ym = () => {
  const [e, t] = ae(""), [r, n] = ae(null), o = (a) => {
    t(a);
    const s = um(`+${a}`);
    n(s);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "p-6 max-w-md mx-auto", children: [
    /* @__PURE__ */ l.jsx("h2", { className: "text-xl font-semibold mb-4", children: "Phone Input with libphonenumber-js Integration" }),
    /* @__PURE__ */ l.jsx(
      od,
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
}, bm = He("border bg-popover text-popover-foreground", {
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
  offset: h = 7,
  isDismissable: w = !0,
  shouldCloseOnScroll: $ = !0,
  shouldCloseOnBlur: k = !1,
  shouldBlockScroll: v = !1,
  containerPadding: j = 12,
  crossOffset: P = 0,
  portalContainer: O = typeof document < "u" ? document.body : void 0,
  triggerType: I = "dialog",
  shouldFlip: H = !0,
  triggerScaleOnOpen: z = !0,
  zIndex: F = 50,
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
  }, T = () => a === "custom" && s ? { backgroundColor: s, color: "#ffffff" } : {
    info: "bg-blue-500 text-white border-blue-500",
    neutral: "bg-gray-500 text-white border-gray-500",
    light: "bg-white text-gray-900 border-gray-200"
  }[a] || "", y = () => {
    switch (m) {
      case "blur":
        return "blur";
      case "dark":
        return "opaque";
      case "transparent":
      default:
        return "transparent";
    }
  }, N = T(), R = g(), b = y(), C = D !== void 0 ? D : F, S = {
    placement: r,
    showArrow: n,
    color: R,
    radius: i,
    shadow: d,
    isOpen: c,
    onOpenChange: f,
    backdrop: b,
    disableAnimation: p,
    offset: h,
    isDismissable: w,
    shouldCloseOnScroll: $,
    shouldCloseOnBlur: k,
    shouldBlockScroll: v,
    containerPadding: j,
    crossOffset: P,
    portalContainer: O,
    triggerType: I,
    shouldFlip: H,
    triggerScaleOnOpen: z,
    // Ensure proper positioning
    isKeyboardDismissDisabled: !1,
    // Apply z-index to the popover container
    style: {
      zIndex: F
    }
  };
  return Object.keys(S).forEach((A) => {
    S[A] === void 0 && delete S[A];
  }), /* @__PURE__ */ l.jsxs(Kp, { ...S, children: [
    /* @__PURE__ */ l.jsx(Up, { children: t }),
    /* @__PURE__ */ l.jsx(
      Hp,
      {
        className: B(
          bm({ variant: o, color: a, shadow: d, rounded: i }),
          u,
          N,
          // Apply custom color styles when needed
          a === "custom" && s ? "border-0" : ""
        ),
        style: {
          ...a === "custom" && s ? { backgroundColor: s, color: "#ffffff" } : {},
          // Apply z-index to content container
          zIndex: C
        },
        children: e
      }
    )
  ] });
}, hm = He("flex items-center text-sm", {
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
}), $m = Pe(
  ({
    className: e,
    variant: t = "default",
    size: r = "md",
    items: n,
    separator: o = /* @__PURE__ */ l.jsx(me, { icon: "mdi:slash-forward", className: "h-4 w-4 flex-shrink-0" }),
    activeLastItem: a = !0,
    ...s
  }, i) => /* @__PURE__ */ l.jsx(
    "nav",
    {
      ref: i,
      className: B(hm({ variant: t, size: r }), e),
      "aria-label": "Breadcrumb",
      ...s,
      children: /* @__PURE__ */ l.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: n.map((d, u) => {
        const c = u === n.length - 1, f = c && a;
        return /* @__PURE__ */ l.jsxs(
          "li",
          {
            className: B(
              "flex items-center gap-1.5",
              f && "text-primary font-medium"
            ),
            children: [
              d.icon && /* @__PURE__ */ l.jsx(
                me,
                {
                  icon: d.icon,
                  className: B(
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
                  className: B(
                    "transition-colors duration-200",
                    "hover:text-primary hover:underline focus:outline-none",
                    "focus-visible:text-primary focus-visible:underline",
                    "active:text-primary-600"
                  ),
                  children: /* @__PURE__ */ l.jsx("span", { className: "truncate max-w-[200px] inline-block align-bottom", children: d.label })
                }
              ) : /* @__PURE__ */ l.jsx("span", { className: B(
                "truncate max-w-[200px] inline-block",
                f && "text-primary"
              ), children: d.label }),
              !c && /* @__PURE__ */ l.jsx("span", { className: B(
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
$m.displayName = "Breadcrumbs";
const ad = (e) => {
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
}, vm = ({
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
  ], a = ad(t);
  return /* @__PURE__ */ l.jsx("div", { className: "bg-white rounded-md flex flex-col h-full max-h-[600px]", children: /* @__PURE__ */ l.jsx("div", { className: "p-0 w-full overflow-auto rounded-t-md [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full flex-1", children: /* @__PURE__ */ l.jsxs("table", { className: "w-full border-spacing-0 border-separate min-w-full", children: [
    /* @__PURE__ */ l.jsx(
      "thead",
      {
        className: B(
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
              className: B(
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
        className: B("p-3", {
          [a.stripe]: i % 2 !== 0,
          "bg-white": i % 2 === 0
        }),
        children: o.map((d, u) => {
          const c = () => {
            var m;
            if (!d.sticky || d.stickyPosition !== "left") return 0;
            let f = 0;
            for (let p = 0; p < u; p++) {
              const h = o[p];
              if (h.sticky && h.stickyPosition === "left") {
                const w = typeof h.width == "number" ? h.width : parseInt(((m = h.width) == null ? void 0 : m.toString()) || "0") || 0;
                f += w;
              }
            }
            return f;
          };
          return /* @__PURE__ */ l.jsx(
            "td",
            {
              className: B(
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
              children: /* @__PURE__ */ l.jsx(Lc, { className: "h-10 w-full rounded-md" })
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
  onRowClick: h,
  showPagination: w = !1,
  variant: $ = "primary",
  meta: k = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [v, j] = ae(() => {
    const D = e.find((g) => g.sortable && g.sort);
    return D ? [
      {
        id: D.accessorKey.toString(),
        desc: D.sort === "desc"
      }
    ] : [];
  }), [P, O] = ae(!1);
  de(() => {
    const D = () => O(window.innerWidth < 768);
    return D(), window.addEventListener("resize", D), () => window.removeEventListener("resize", D);
  }, []);
  const I = oe.useMemo(() => {
    const D = e.map((g) => ({
      accessorKey: g.accessorKey,
      header: g.label,
      enableSorting: !!g.sortable,
      cell: g.render ? ({ row: T }) => {
        var y;
        return (y = g.render) == null ? void 0 : y.call(g, T.original[g.accessorKey], T.original, T.index);
      } : ({ row: T }) => T.original[g.accessorKey] || "-",
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
        cell: ({ row: g }) => (k.current_page - 1) * k.limit_number + g.index + 1,
        meta: {
          align: "left",
          width: 80,
          sticky: c,
          stickyPosition: "left"
        }
      },
      ...D
    ] : D;
  }, [e, u, c, k]), H = wd({
    data: t,
    columns: I,
    state: {
      sorting: v
    },
    onSortingChange: (D) => {
      const g = typeof D == "function" ? D(v) : D;
      j(g), g.length > 0 ? p == null || p(g[0].desc ? "desc" : "asc", g[0].id) : p == null || p("", "");
    },
    getCoreRowModel: Nd(),
    getSortedRowModel: Ed(),
    getPaginationRowModel: kd(),
    manualPagination: !0,
    pageCount: k.total_page
  }), z = ad($);
  if (i)
    return d || /* @__PURE__ */ l.jsx(
      vm,
      {
        schema: e,
        variant: $,
        showIndexSticky: c,
        isMobile: P
      }
    );
  const F = (D, g, T) => {
    const y = D.target;
    y.tagName === "BUTTON" || y.tagName === "A" || y.tagName === "INPUT" || y.tagName === "SELECT" || y.closest("button") !== null || y.closest("a") !== null || y.closest("input") !== null || y.closest("select") !== null || h == null || h(g, T);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "bg-white rounded-md flex flex-col h-full max-h-[600px]", children: [
    /* @__PURE__ */ l.jsx("div", { className: "p-0 w-full overflow-auto rounded-t-md [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full flex-1", children: /* @__PURE__ */ l.jsxs(
      "table",
      {
        className: B(
          "w-full border-spacing-0 border-separate min-w-full",
          r
        ),
        children: [
          /* @__PURE__ */ l.jsx(
            "thead",
            {
              className: B(
                "border-2 sticky top-0 z-20 rounded-t-md",
                z.border
              ),
              children: H.getHeaderGroups().map((D) => /* @__PURE__ */ l.jsx("tr", { children: D.headers.map(
                (g, T) => {
                  const y = g.column.columnDef.meta, N = () => {
                    var b;
                    if (P || !(y != null && y.sticky) || y.stickyPosition !== "left") return 0;
                    let R = 0;
                    for (let C = 0; C < T; C++) {
                      const A = D.headers[C].column.columnDef.meta;
                      if (A != null && A.sticky && A.stickyPosition === "left") {
                        const _ = typeof A.width == "number" ? A.width : parseInt(((b = A.width) == null ? void 0 : b.toString()) || "0") || 0;
                        R += _;
                      }
                    }
                    return R;
                  };
                  return /* @__PURE__ */ l.jsx(
                    "th",
                    {
                      className: B(
                        "text-sm text-wrap border-y p-4",
                        z.header,
                        {
                          "cursor-pointer": g.column.getCanSort(),
                          "rounded-tl-md": T === 0,
                          "rounded-tr-md": T === D.headers.length - 1,
                          "text-left": (y == null ? void 0 : y.align) === "left",
                          "text-center": (y == null ? void 0 : y.align) === "center",
                          "text-right": (y == null ? void 0 : y.align) === "right",
                          "sticky z-5": !P && (y == null ? void 0 : y.sticky),
                          "left-0": !P && (y == null ? void 0 : y.sticky) && y.stickyPosition === "left",
                          "right-0": !P && (y == null ? void 0 : y.sticky) && y.stickyPosition === "right"
                        },
                        n
                      ),
                      style: {
                        width: typeof (y == null ? void 0 : y.width) == "number" ? `${y.width}px` : y == null ? void 0 : y.width,
                        minWidth: typeof (y == null ? void 0 : y.width) == "number" ? `${y.width}px` : y == null ? void 0 : y.width,
                        left: !P && (y != null && y.sticky) && y.stickyPosition === "left" ? `${N()}px` : void 0
                      },
                      onClick: g.column.getCanSort() ? g.column.getToggleSortingHandler() : void 0,
                      children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ l.jsx(
                          "span",
                          {
                            className: B({
                              "font-semibold": T === 0
                            }),
                            children: ua(
                              g.column.columnDef.header,
                              g.getContext()
                            )
                          }
                        ),
                        g.column.getCanSort() && /* @__PURE__ */ l.jsx(
                          me,
                          {
                            icon: g.column.getIsSorted() ? g.column.getIsSorted() === "desc" ? "mdi:keyboard-arrow-up" : "mdi:keyboard-arrow-down" : "mdi:unfold-more-horizontal",
                            className: B("h-4 w-4", {
                              "text-white": $ !== "ghost",
                              "text-gray-700": $ === "ghost"
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
              className: B(
                "text-center border h-full w-full rounded-b-md"
              ),
              children: s || /* @__PURE__ */ l.jsxs("div", { className: "flex mx-auto w-full text-center justify-center gap-3 items-center", children: [
                /* @__PURE__ */ l.jsx("p", { children: "Data Not Found" }),
                /* @__PURE__ */ l.jsx(me, { icon: "mdi:face-frown-open", size: 34 })
              ] })
            }
          ) }) : H.getRowModel().rows.map((D, g) => /* @__PURE__ */ l.jsx(
            "tr",
            {
              className: B(
                "p-3 group",
                z.row,
                {
                  [z.stripe]: g % 2 !== 0,
                  "bg-white": g % 2 === 0,
                  "cursor-pointer": h
                },
                o
              ),
              onClick: (T) => F(T, D.original, g),
              children: D.getVisibleCells().map((T) => {
                const y = T.column.columnDef.meta, N = () => {
                  var S;
                  if (P || !(y != null && y.sticky) || y.stickyPosition !== "left") return 0;
                  let R = 0;
                  const b = H.getAllColumns(), C = b.findIndex((A) => A.id === T.column.id);
                  for (let A = 0; A < C; A++) {
                    const E = b[A].columnDef.meta;
                    if (E != null && E.sticky && E.stickyPosition === "left") {
                      const L = typeof E.width == "number" ? E.width : parseInt(((S = E.width) == null ? void 0 : S.toString()) || "0") || 0;
                      R += L;
                    }
                  }
                  return R;
                };
                return /* @__PURE__ */ l.jsx(
                  "td",
                  {
                    className: B(
                      "px-4 py-3 text-sm text-gray-900",
                      {
                        "text-left": (y == null ? void 0 : y.align) === "left",
                        "text-center": (y == null ? void 0 : y.align) === "center",
                        "text-right": (y == null ? void 0 : y.align) === "right",
                        "sticky z-5": !P && (y == null ? void 0 : y.sticky),
                        "left-0": !P && (y == null ? void 0 : y.sticky) && y.stickyPosition === "left",
                        "right-0": !P && (y == null ? void 0 : y.sticky) && y.stickyPosition === "right",
                        // Ensure sticky columns have solid background that matches row
                        "bg-white": !P && (y == null ? void 0 : y.sticky) && g % 2 === 0,
                        [z.stripe]: !P && (y == null ? void 0 : y.sticky) && g % 2 !== 0,
                        [z.hoverStripe]: !P && (y == null ? void 0 : y.sticky)
                      },
                      a
                    ),
                    style: {
                      width: typeof (y == null ? void 0 : y.width) == "number" ? `${y.width}px` : y == null ? void 0 : y.width,
                      minWidth: typeof (y == null ? void 0 : y.width) == "number" ? `${y.width}px` : y == null ? void 0 : y.width,
                      left: !P && (y != null && y.sticky) && y.stickyPosition === "left" ? `${N()}px` : void 0
                    },
                    children: ua(
                      T.column.columnDef.cell,
                      T.getContext()
                    )
                  },
                  T.id
                );
              })
            },
            D.id
          )) })
        ]
      }
    ) }),
    !!t.length && w && /* @__PURE__ */ l.jsx("div", { className: "p-4 bg-white rounded-b-md border-t border-gray-200 sticky bottom-0 z-10 flex-shrink-0", children: /* @__PURE__ */ l.jsx(
      Ac,
      {
        currentPage: k.current_page,
        totalPages: k.total_page,
        totalData: k.total_data,
        onPageChange: f || (() => {
        }),
        perPage: k.limit_number,
        onPerPageChange: m || (() => {
        }),
        perPageOptions: [5, 10, 20, 50, 100],
        siblingCount: 1
      }
    ) })
  ] });
}, ym = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, sd = Pe(
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
        className: B(
          "flex",
          o ? "items-start gap-3 p-4" : "items-center gap-2 py-2.5 px-3",
          "border border-gray-200",
          ym[r],
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
            me,
            {
              icon: m,
              className: B(
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
                className: B("text-sm font-medium leading-5", {
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
                className: B(n ? "mt-1" : "", "text-sm leading-5", {
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
              className: B(
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
              children: /* @__PURE__ */ l.jsx(me, { icon: "mdi:close", className: B(o ? "h-5 w-5" : "h-4 w-4") })
            }
          )
        ]
      }
    );
  }
);
sd.displayName = "Toast";
const jo = zs(void 0), xm = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, qm = ({ children: e }) => {
  const [t, r] = ae([]), n = ge((i) => {
    r((d) => d.filter((u) => u.id !== i));
  }, []), o = ge((i) => {
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
    er(
      /* @__PURE__ */ l.jsx(l.Fragment, { children: Object.entries(a).map(([i, d]) => /* @__PURE__ */ l.jsx(
        "div",
        {
          className: B(
            "fixed z-[100] flex flex-col gap-2 min-w-[320px] max-w-[420px]",
            xm[i],
            i.includes("bottom") ? "flex-col-reverse" : "flex-col"
          ),
          children: d.map((u) => /* @__PURE__ */ l.jsx(
            sd,
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
}, wm = {
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
}, id = {
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
}, km = {
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
  ...wm,
  ...id
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
      const f = km[o];
      return id[f];
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
    typeof c == "string" ? /* @__PURE__ */ l.jsx(Rr, { variant: "body1", className: "m-0", children: c }) : /* @__PURE__ */ l.jsx("div", { className: "m-0", children: c }),
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
}, Em = He(
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
), Nm = Pe(
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
    numericOnly: h = !0,
    onComplete: w,
    onChange: $,
    onSubmit: k,
    value: v,
    defaultValue: j = "",
    disabled: P = !1,
    autoFocus: O = !1,
    ...I
  }, H) => {
    const [z, F] = ae(j || ""), D = J([]);
    de(() => {
      v !== void 0 && F(v);
    }, [v]);
    const g = v !== void 0, T = g ? v : z, y = (E) => {
      g || F(E), $ == null || $(E), E.length === p && (w == null || w(E), c || k == null || k(E));
    }, N = (E) => (L) => {
      D.current[E] = L;
    }, R = (E) => {
      E.target.select();
    }, b = (E, L) => {
      var M;
      const K = E.target.value;
      let U = "";
      if (K.length >= 1)
        U = K.slice(-1);
      else if (K.length === 0) {
        const V = T.split("");
        V[L] = "", y(V.join(""));
        return;
      }
      if (h && !/^\d$/.test(U))
        return;
      const X = T.split("");
      for (; X.length <= L; )
        X.push("");
      X[L] = U;
      const G = X.join("");
      y(G), L < p - 1 && U && ((M = D.current[L + 1]) == null || M.focus());
    }, C = (E, L) => {
      var K, U, X;
      if (E.key === "Backspace") {
        const G = T.split("");
        T[L] ? (E.preventDefault(), G[L] = "", y(G.join(""))) : L > 0 && (E.preventDefault(), G[L - 1] = "", y(G.join("")), (K = D.current[L - 1]) == null || K.focus());
      } else if (E.key === "Delete") {
        if (T[L]) {
          E.preventDefault();
          const G = T.split("");
          G[L] = "", y(G.join(""));
        }
      } else if (E.key === "ArrowLeft" && L > 0)
        E.preventDefault(), (U = D.current[L - 1]) == null || U.focus();
      else if (E.key === "ArrowRight" && L < p - 1)
        E.preventDefault(), (X = D.current[L + 1]) == null || X.focus();
      else if (!E.ctrlKey && !E.altKey && !E.metaKey && E.key.length === 1 && h && !/^\d$/.test(E.key)) {
        E.preventDefault();
        return;
      }
    }, S = (E) => {
      var G;
      E.preventDefault();
      const L = E.clipboardData.getData("text/plain").trim();
      if (h && !/^\d+$/.test(L))
        return;
      const U = L.slice(0, p).padEnd(T.length, "").slice(0, p);
      y(U);
      const X = U.length < p ? U.length : p - 1;
      (G = D.current[X]) == null || G.focus();
    }, A = () => {
      T.length === p && (k == null || k(T));
    }, _ = T.split("").concat(Array(p - T.length).fill(""));
    return /* @__PURE__ */ l.jsxs("div", { ref: H, className: B("w-full", e), ...I, children: [
      i && /* @__PURE__ */ l.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        i,
        u && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ l.jsx("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: p }).map((E, L) => /* @__PURE__ */ l.jsx(
          "input",
          {
            ref: N(L),
            type: h ? "tel" : "text",
            inputMode: h ? "numeric" : "text",
            maxLength: 1,
            value: _[L] || "",
            onChange: (K) => b(K, L),
            onKeyDown: (K) => C(K, L),
            onPaste: L === 0 ? S : void 0,
            onFocus: R,
            disabled: P,
            autoFocus: O && L === 0,
            className: B(
              Em({
                variant: o ? "error" : t,
                size: r,
                rounded: n
              })
            ),
            "aria-invalid": o
          },
          L
        )) }),
        o && a && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger self-start", children: a }),
        !o && s && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral self-start", children: s }),
        d && /* @__PURE__ */ l.jsx("p", { className: "text-sm text-neutral-600", children: d }),
        c && /* @__PURE__ */ l.jsx(
          qe,
          {
            variant: m,
            disabled: T.length !== p || P,
            onClick: A,
            className: "mt-4",
            children: f
          }
        )
      ] })
    ] });
  }
);
Nm.displayName = "InputOTP";
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
  return /* @__PURE__ */ l.jsxs("div", { className: B("relative inline-block", t), children: [
    a || (e ? /* @__PURE__ */ l.jsx(me, { icon: e, color: p, size: 32, ...s }) : null),
    /* @__PURE__ */ l.jsx(
      "span",
      {
        className: B(
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
}, Pm = {
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
  },
  "HOTEL-LOADER": {
    image: "https://design-system-eaip.onrender.com/img/hotel-loader.gif",
    message: "Loading, please wait..."
  }
}, Tm = {
  "flight-light": "FLIGHT_LIGHT",
  "flight-dark": "FLIGHT_DARK",
  "tixia-circular": "TIXIA-CIRCULAR",
  "tixia-linear": "TIXIA-LINEAR",
  "hotel-loader": "HOTEL-LOADER"
}, on = (e, t) => e === void 0 ? { className: t } : typeof e == "number" ? {
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
  const d = Tm[e], u = Pm[d], c = on(n, "w-full"), f = on(o, "h-full"), m = on(a, "w-auto"), p = on(s, "h-auto");
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
        r ? typeof r == "string" ? /* @__PURE__ */ l.jsx(Rr, { variant: "body1", className: "m-0", children: r }) : /* @__PURE__ */ l.jsx("div", { className: "m-0", children: r }) : /* @__PURE__ */ l.jsx(Rr, { variant: "body1", className: "m-0", children: u.message })
      ]
    }
  );
}, Cm = {
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
}, Sm = {
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
  const d = Sm[e], u = Cm[d];
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
    t ? typeof t == "string" ? /* @__PURE__ */ l.jsx(Rr, { variant: "body1", className: "m-0", children: t }) : /* @__PURE__ */ l.jsx("div", { className: "m-0", children: t }) : /* @__PURE__ */ l.jsx(Rr, { variant: "body1", className: "m-0", children: u.message }),
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
}, jm = ({
  children: e,
  delay: t = 0,
  index: r,
  onMouseEnter: n,
  onClick: o
}) => {
  const a = J(null), s = yd(a, { amount: 0.5 });
  return /* @__PURE__ */ l.jsx(
    xd.div,
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
  const u = J(null), [c, f] = ae(d), [m, p] = ae(!1), [h, w] = ae(0), [$, k] = ae(1), v = _e(() => t ? oe.Children.toArray(t) : e || [], [t, e]), j = _e(() => !!t, [t]), P = (O) => {
    const { scrollTop: I, scrollHeight: H, clientHeight: z } = O.currentTarget;
    w(Math.min(I / 50, 1));
    const F = H - (I + z);
    k(
      H <= z ? 0 : Math.min(F / 50, 1)
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
      const z = O.scrollTop, F = O.clientHeight, D = I.offsetTop, g = D + I.offsetHeight;
      D < z + 50 ? O.scrollTo({ top: D - 50, behavior: "smooth" }) : g > z + F - 50 && O.scrollTo({
        top: g - F + 50,
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
        onScroll: P,
        children: v.map((O, I) => /* @__PURE__ */ l.jsx(
          jm,
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
          style: { opacity: h }
        }
      ),
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "bottom-gradient",
          style: { opacity: $ }
        }
      )
    ] })
  ] });
};
export {
  Lm as Accordion,
  n2 as AnimatedList,
  sc as AutoComplete,
  Mm as Avatar,
  Fm as Badge,
  e2 as BadgeNotif,
  $m as Breadcrumbs,
  qe as Button,
  Js as Card,
  fc as CheckBoxGroup,
  an as Checkbox,
  Dm as Chip,
  xc as DatePicker,
  kc as Dialog,
  Pc as DialogActions,
  Nc as DialogBody,
  ti as DialogHeader,
  Ec as DialogTitle,
  Tc as Divider,
  Qm as ErrorWrapper,
  jc as FileUpload,
  me as Icon,
  Zs as Input,
  Nm as InputOTP,
  t2 as Loader,
  r2 as NegativeCase,
  zm as Notification,
  Ac as Pagination,
  od as PhoneInput,
  Ym as PhoneInputDemo,
  Xm as Popover,
  to as PrimitiveDatePicker,
  Jp as Progress,
  ni as Radio,
  Rc as RadioGroup,
  ri as Select,
  kn as SelectItem,
  Lc as Skeleton,
  Mc as Slider,
  Gm as StarRating,
  Bm as StatusIndicator,
  Vm as Stepper,
  Hc as Switch,
  Zm as Table,
  Hm as Tabs,
  Rr as Text,
  Kc as Textarea,
  Yc as TimePicker,
  sd as Toast,
  qm as ToastProvider,
  qc as Toggle,
  Wm as Tooltip,
  cc as buttonVariants,
  uc as cardVariants,
  B as cn,
  Em as inputOTPVariants,
  Xc as toggleVariants,
  Jm as useToast
};
