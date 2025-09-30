import * as Xo from "react";
import se, { useState as re, useEffect as de, forwardRef as Ie, useRef as ae, useImperativeHandle as $o, useLayoutEffect as Ns, useCallback as me, Children as Cr, isValidElement as Tr, cloneElement as vo, useContext as xt, useMemo as Le, createContext as Es } from "react";
import ql, { createPortal as Gt, flushSync as Jl } from "react-dom";
import Pe from "dayjs";
import { LazyMotion as zn, AnimatePresence as Ps, m as Gn, useInView as Ql, motion as ed } from "framer-motion";
import { useReactTable as td, getPaginationRowModel as rd, getSortedRowModel as nd, getCoreRowModel as od, flexRender as Zo } from "@tanstack/react-table";
var Ts = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ss(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bn = { exports: {} }, br = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qo;
function ad() {
  if (qo) return br;
  qo = 1;
  var e = se, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, d, u) {
    var c, f = {}, b = null, p = null;
    u !== void 0 && (b = "" + u), d.key !== void 0 && (b = "" + d.key), d.ref !== void 0 && (p = d.ref);
    for (c in d) n.call(d, c) && !a.hasOwnProperty(c) && (f[c] = d[c]);
    if (i && i.defaultProps) for (c in d = i.defaultProps, d) f[c] === void 0 && (f[c] = d[c]);
    return { $$typeof: t, type: i, key: b, ref: p, props: f, _owner: o.current };
  }
  return br.Fragment = r, br.jsx = s, br.jsxs = s, br;
}
var hr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jo;
function sd() {
  return Jo || (Jo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = se, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), $ = Symbol.iterator, w = "@@iterator";
    function k(x) {
      if (x === null || typeof x != "object")
        return null;
      var U = $ && x[$] || x[w];
      return typeof U == "function" ? U : null;
    }
    var P = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(x) {
      {
        for (var U = arguments.length, q = new Array(U > 1 ? U - 1 : 0), le = 1; le < U; le++)
          q[le - 1] = arguments[le];
        j("error", x, q);
      }
    }
    function j(x, U, q) {
      {
        var le = P.ReactDebugCurrentFrame, ke = le.getStackAddendum();
        ke !== "" && (U += "%s", q = q.concat([ke]));
        var Ee = q.map(function(ve) {
          return String(ve);
        });
        Ee.unshift("Warning: " + U), Function.prototype.apply.call(console[x], console, Ee);
      }
    }
    var S = !1, I = !1, A = !1, H = !1, O = !1, R;
    R = Symbol.for("react.module.reference");
    function z(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === n || x === a || O || x === o || x === u || x === c || H || x === p || S || I || A || typeof x == "object" && x !== null && (x.$$typeof === b || x.$$typeof === f || x.$$typeof === s || x.$$typeof === i || x.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === R || x.getModuleId !== void 0));
    }
    function g(x, U, q) {
      var le = x.displayName;
      if (le)
        return le;
      var ke = U.displayName || U.name || "";
      return ke !== "" ? q + "(" + ke + ")" : q;
    }
    function T(x) {
      return x.displayName || "Context";
    }
    function h(x) {
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
            var U = x;
            return T(U) + ".Consumer";
          case s:
            var q = x;
            return T(q._context) + ".Provider";
          case d:
            return g(x, x.render, "ForwardRef");
          case f:
            var le = x.displayName || null;
            return le !== null ? le : h(x.type) || "Memo";
          case b: {
            var ke = x, Ee = ke._payload, ve = ke._init;
            try {
              return h(ve(Ee));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, _ = 0, m, y, N, C, Y, D, B;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function M() {
      {
        if (_ === 0) {
          m = console.log, y = console.info, N = console.warn, C = console.error, Y = console.group, D = console.groupCollapsed, B = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: W,
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
        _++;
      }
    }
    function G() {
      {
        if (_--, _ === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: E({}, x, {
              value: m
            }),
            info: E({}, x, {
              value: y
            }),
            warn: E({}, x, {
              value: N
            }),
            error: E({}, x, {
              value: C
            }),
            group: E({}, x, {
              value: Y
            }),
            groupCollapsed: E({}, x, {
              value: D
            }),
            groupEnd: E({}, x, {
              value: B
            })
          });
        }
        _ < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = P.ReactCurrentDispatcher, L;
    function K(x, U, q) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (ke) {
            var le = ke.stack.trim().match(/\n( *(at )?)/);
            L = le && le[1] || "";
          }
        return `
` + L + x;
      }
    }
    var fe = !1, $e;
    {
      var ye = typeof WeakMap == "function" ? WeakMap : Map;
      $e = new ye();
    }
    function Ce(x, U) {
      if (!x || fe)
        return "";
      {
        var q = $e.get(x);
        if (q !== void 0)
          return q;
      }
      var le;
      fe = !0;
      var ke = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ee;
      Ee = X.current, X.current = null, M();
      try {
        if (U) {
          var ve = function() {
            throw Error();
          };
          if (Object.defineProperty(ve.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ve, []);
            } catch (et) {
              le = et;
            }
            Reflect.construct(x, [], ve);
          } else {
            try {
              ve.call();
            } catch (et) {
              le = et;
            }
            x.call(ve.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (et) {
            le = et;
          }
          x();
        }
      } catch (et) {
        if (et && le && typeof et.stack == "string") {
          for (var be = et.stack.split(`
`), Je = le.stack.split(`
`), Ae = be.length - 1, Me = Je.length - 1; Ae >= 1 && Me >= 0 && be[Ae] !== Je[Me]; )
            Me--;
          for (; Ae >= 1 && Me >= 0; Ae--, Me--)
            if (be[Ae] !== Je[Me]) {
              if (Ae !== 1 || Me !== 1)
                do
                  if (Ae--, Me--, Me < 0 || be[Ae] !== Je[Me]) {
                    var lt = `
` + be[Ae].replace(" at new ", " at ");
                    return x.displayName && lt.includes("<anonymous>") && (lt = lt.replace("<anonymous>", x.displayName)), typeof x == "function" && $e.set(x, lt), lt;
                  }
                while (Ae >= 1 && Me >= 0);
              break;
            }
        }
      } finally {
        fe = !1, X.current = Ee, G(), Error.prepareStackTrace = ke;
      }
      var Jt = x ? x.displayName || x.name : "", Vt = Jt ? K(Jt) : "";
      return typeof x == "function" && $e.set(x, Vt), Vt;
    }
    function Ze(x, U, q) {
      return Ce(x, !1);
    }
    function Oe(x) {
      var U = x.prototype;
      return !!(U && U.isReactComponent);
    }
    function We(x, U, q) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return Ce(x, Oe(x));
      if (typeof x == "string")
        return K(x);
      switch (x) {
        case u:
          return K("Suspense");
        case c:
          return K("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case d:
            return Ze(x.render);
          case f:
            return We(x.type, U, q);
          case b: {
            var le = x, ke = le._payload, Ee = le._init;
            try {
              return We(Ee(ke), U, q);
            } catch {
            }
          }
        }
      return "";
    }
    var Be = Object.prototype.hasOwnProperty, at = {}, Ve = P.ReactDebugCurrentFrame;
    function st(x) {
      if (x) {
        var U = x._owner, q = We(x.type, x._source, U ? U.type : null);
        Ve.setExtraStackFrame(q);
      } else
        Ve.setExtraStackFrame(null);
    }
    function Qe(x, U, q, le, ke) {
      {
        var Ee = Function.call.bind(Be);
        for (var ve in x)
          if (Ee(x, ve)) {
            var be = void 0;
            try {
              if (typeof x[ve] != "function") {
                var Je = Error((le || "React class") + ": " + q + " type `" + ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Je.name = "Invariant Violation", Je;
              }
              be = x[ve](U, ve, le, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ae) {
              be = Ae;
            }
            be && !(be instanceof Error) && (st(ke), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", le || "React class", q, ve, typeof be), st(null)), be instanceof Error && !(be.message in at) && (at[be.message] = !0, st(ke), v("Failed %s type: %s", q, be.message), st(null));
          }
      }
    }
    var qe = Array.isArray;
    function ze(x) {
      return qe(x);
    }
    function wt(x) {
      {
        var U = typeof Symbol == "function" && Symbol.toStringTag, q = U && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return q;
      }
    }
    function kt(x) {
      try {
        return ee(x), !1;
      } catch {
        return !0;
      }
    }
    function ee(x) {
      return "" + x;
    }
    function we(x) {
      if (kt(x))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wt(x)), ee(x);
    }
    var te = P.ReactCurrentOwner, Z = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, V, ne;
    function oe(x) {
      if (Be.call(x, "ref")) {
        var U = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function pe(x) {
      if (Be.call(x, "key")) {
        var U = Object.getOwnPropertyDescriptor(x, "key").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function He(x, U) {
      typeof x.ref == "string" && te.current;
    }
    function ot(x, U) {
      {
        var q = function() {
          V || (V = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        q.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: q,
          configurable: !0
        });
      }
    }
    function it(x, U) {
      {
        var q = function() {
          ne || (ne = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        q.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: q,
          configurable: !0
        });
      }
    }
    var Nt = function(x, U, q, le, ke, Ee, ve) {
      var be = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: x,
        key: U,
        ref: q,
        props: ve,
        // Record the component responsible for creating this element.
        _owner: Ee
      };
      return be._store = {}, Object.defineProperty(be._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(be, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: le
      }), Object.defineProperty(be, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ke
      }), Object.freeze && (Object.freeze(be.props), Object.freeze(be)), be;
    };
    function Zt(x, U, q, le, ke) {
      {
        var Ee, ve = {}, be = null, Je = null;
        q !== void 0 && (we(q), be = "" + q), pe(U) && (we(U.key), be = "" + U.key), oe(U) && (Je = U.ref, He(U, ke));
        for (Ee in U)
          Be.call(U, Ee) && !Z.hasOwnProperty(Ee) && (ve[Ee] = U[Ee]);
        if (x && x.defaultProps) {
          var Ae = x.defaultProps;
          for (Ee in Ae)
            ve[Ee] === void 0 && (ve[Ee] = Ae[Ee]);
        }
        if (be || Je) {
          var Me = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          be && ot(ve, Me), Je && it(ve, Me);
        }
        return Nt(x, be, Je, ke, le, te.current, ve);
      }
    }
    var Bt = P.ReactCurrentOwner, bt = P.ReactDebugCurrentFrame;
    function qt(x) {
      if (x) {
        var U = x._owner, q = We(x.type, x._source, U ? U.type : null);
        bt.setExtraStackFrame(q);
      } else
        bt.setExtraStackFrame(null);
    }
    var yn;
    yn = !1;
    function xn(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function Vo() {
      {
        if (Bt.current) {
          var x = h(Bt.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function Gl(x) {
      return "";
    }
    var Ho = {};
    function Bl(x) {
      {
        var U = Vo();
        if (!U) {
          var q = typeof x == "string" ? x : x.displayName || x.name;
          q && (U = `

Check the top-level render call using <` + q + ">.");
        }
        return U;
      }
    }
    function Uo(x, U) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var q = Bl(U);
        if (Ho[q])
          return;
        Ho[q] = !0;
        var le = "";
        x && x._owner && x._owner !== Bt.current && (le = " It was passed a child from " + h(x._owner.type) + "."), qt(x), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, le), qt(null);
      }
    }
    function Ko(x, U) {
      {
        if (typeof x != "object")
          return;
        if (ze(x))
          for (var q = 0; q < x.length; q++) {
            var le = x[q];
            xn(le) && Uo(le, U);
          }
        else if (xn(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var ke = k(x);
          if (typeof ke == "function" && ke !== x.entries)
            for (var Ee = ke.call(x), ve; !(ve = Ee.next()).done; )
              xn(ve.value) && Uo(ve.value, U);
        }
      }
    }
    function Vl(x) {
      {
        var U = x.type;
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
          Qe(q, x.props, "prop", le, x);
        } else if (U.PropTypes !== void 0 && !yn) {
          yn = !0;
          var ke = h(U);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ke || "Unknown");
        }
        typeof U.getDefaultProps == "function" && !U.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Hl(x) {
      {
        for (var U = Object.keys(x.props), q = 0; q < U.length; q++) {
          var le = U[q];
          if (le !== "children" && le !== "key") {
            qt(x), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", le), qt(null);
            break;
          }
        }
        x.ref !== null && (qt(x), v("Invalid attribute `ref` supplied to `React.Fragment`."), qt(null));
      }
    }
    var Wo = {};
    function Yo(x, U, q, le, ke, Ee) {
      {
        var ve = z(x);
        if (!ve) {
          var be = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (be += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Je = Gl();
          Je ? be += Je : be += Vo();
          var Ae;
          x === null ? Ae = "null" : ze(x) ? Ae = "array" : x !== void 0 && x.$$typeof === t ? (Ae = "<" + (h(x.type) || "Unknown") + " />", be = " Did you accidentally export a JSX literal instead of a component?") : Ae = typeof x, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ae, be);
        }
        var Me = Zt(x, U, q, ke, Ee);
        if (Me == null)
          return Me;
        if (ve) {
          var lt = U.children;
          if (lt !== void 0)
            if (le)
              if (ze(lt)) {
                for (var Jt = 0; Jt < lt.length; Jt++)
                  Ko(lt[Jt], x);
                Object.freeze && Object.freeze(lt);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ko(lt, x);
        }
        if (Be.call(U, "key")) {
          var Vt = h(x), et = Object.keys(U).filter(function(Zl) {
            return Zl !== "key";
          }), wn = et.length > 0 ? "{key: someKey, " + et.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Wo[Vt + wn]) {
            var Xl = et.length > 0 ? "{" + et.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, wn, Vt, Xl, Vt), Wo[Vt + wn] = !0;
          }
        }
        return x === n ? Hl(Me) : Vl(Me), Me;
      }
    }
    function Ul(x, U, q) {
      return Yo(x, U, q, !0);
    }
    function Kl(x, U, q) {
      return Yo(x, U, q, !1);
    }
    var Wl = Kl, Yl = Ul;
    hr.Fragment = n, hr.jsx = Wl, hr.jsxs = Yl;
  }()), hr;
}
process.env.NODE_ENV === "production" ? Bn.exports = ad() : Bn.exports = sd();
var l = Bn.exports;
function Cs(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Cs(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function he() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Cs(e)) && (n && (n += " "), n += t);
  return n;
}
const yo = "-", id = (e) => {
  const t = dd(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(yo);
      return i[0] === "" && i.length !== 1 && i.shift(), js(i, t) || ld(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const d = r[s] || [];
      return i && n[s] ? [...d, ...n[s]] : d;
    }
  };
}, js = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? js(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(yo);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}, Qo = /^\[(.+)\]$/, ld = (e) => {
  if (Qo.test(e)) {
    const t = Qo.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, dd = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return ud(Object.entries(e.classGroups), r).forEach(([a, s]) => {
    Vn(s, n, a, t);
  }), n;
}, Vn = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : ea(t, o);
      a.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (cd(o)) {
        Vn(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      Vn(s, ea(t, a), r, n);
    });
  });
}, ea = (e, t) => {
  let r = e;
  return t.split(yo).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, cd = (e) => e.isThemeGetter, ud = (e, t) => t ? e.map(([r, n]) => {
  const o = n.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([s, i]) => [t + s, i])) : a);
  return [r, o];
}) : e, fd = (e) => {
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
}, Is = "!", pd = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, o = t[0], a = t.length, s = (i) => {
    const d = [];
    let u = 0, c = 0, f;
    for (let k = 0; k < i.length; k++) {
      let P = i[k];
      if (u === 0) {
        if (P === o && (n || i.slice(k, k + a) === t)) {
          d.push(i.slice(c, k)), c = k + a;
          continue;
        }
        if (P === "/") {
          f = k;
          continue;
        }
      }
      P === "[" ? u++ : P === "]" && u--;
    }
    const b = d.length === 0 ? i : i.substring(c), p = b.startsWith(Is), $ = p ? b.substring(1) : b, w = f && f > c ? f - c : void 0;
    return {
      modifiers: d,
      hasImportantModifier: p,
      baseClassName: $,
      maybePostfixModifierPosition: w
    };
  };
  return r ? (i) => r({
    className: i,
    parseClassName: s
  }) : s;
}, gd = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, md = (e) => ({
  cache: fd(e.cacheSize),
  parseClassName: pd(e),
  ...id(e)
}), bd = /\s+/, hd = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, a = [], s = e.trim().split(bd);
  let i = "";
  for (let d = s.length - 1; d >= 0; d -= 1) {
    const u = s[d], {
      modifiers: c,
      hasImportantModifier: f,
      baseClassName: b,
      maybePostfixModifierPosition: p
    } = r(u);
    let $ = !!p, w = n($ ? b.substring(0, p) : b);
    if (!w) {
      if (!$) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (w = n(b), !w) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      $ = !1;
    }
    const k = gd(c).join(":"), P = f ? k + Is : k, v = P + w;
    if (a.includes(v))
      continue;
    a.push(v);
    const j = o(w, $);
    for (let S = 0; S < j.length; ++S) {
      const I = j[S];
      a.push(P + I);
    }
    i = u + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function $d() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Os(t)) && (n && (n += " "), n += r);
  return n;
}
const Os = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Os(e[n])) && (r && (r += " "), r += t);
  return r;
};
function vd(e, ...t) {
  let r, n, o, a = s;
  function s(d) {
    const u = t.reduce((c, f) => f(c), e());
    return r = md(u), n = r.cache.get, o = r.cache.set, a = i, i(d);
  }
  function i(d) {
    const u = n(d);
    if (u)
      return u;
    const c = hd(d, r);
    return o(d, c), c;
  }
  return function() {
    return a($d.apply(null, arguments));
  };
}
const Se = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, As = /^\[(?:([a-z-]+):)?(.+)\]$/i, yd = /^\d+\/\d+$/, xd = /* @__PURE__ */ new Set(["px", "full", "screen"]), wd = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, kd = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Nd = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Ed = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Pd = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Et = (e) => ar(e) || xd.has(e) || yd.test(e), At = (e) => fr(e, "length", _d), ar = (e) => !!e && !Number.isNaN(Number(e)), kn = (e) => fr(e, "number", ar), $r = (e) => !!e && Number.isInteger(Number(e)), Td = (e) => e.endsWith("%") && ar(e.slice(0, -1)), ce = (e) => As.test(e), _t = (e) => wd.test(e), Sd = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Cd = (e) => fr(e, Sd, _s), jd = (e) => fr(e, "position", _s), Id = /* @__PURE__ */ new Set(["image", "url"]), Od = (e) => fr(e, Id, Ld), Ad = (e) => fr(e, "", Rd), vr = () => !0, fr = (e, t, r) => {
  const n = As.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, _d = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  kd.test(e) && !Nd.test(e)
), _s = () => !1, Rd = (e) => Ed.test(e), Ld = (e) => Pd.test(e), Md = () => {
  const e = Se("colors"), t = Se("spacing"), r = Se("blur"), n = Se("brightness"), o = Se("borderColor"), a = Se("borderRadius"), s = Se("borderSpacing"), i = Se("borderWidth"), d = Se("contrast"), u = Se("grayscale"), c = Se("hueRotate"), f = Se("invert"), b = Se("gap"), p = Se("gradientColorStops"), $ = Se("gradientColorStopPositions"), w = Se("inset"), k = Se("margin"), P = Se("opacity"), v = Se("padding"), j = Se("saturate"), S = Se("scale"), I = Se("sepia"), A = Se("skew"), H = Se("space"), O = Se("translate"), R = () => ["auto", "contain", "none"], z = () => ["auto", "hidden", "clip", "visible", "scroll"], g = () => ["auto", ce, t], T = () => [ce, t], h = () => ["", Et, At], E = () => ["auto", ar, ce], _ = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], m = () => ["solid", "dashed", "dotted", "double", "none"], y = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], N = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], C = () => ["", "0", ce], Y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], D = () => [ar, ce];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [vr],
      spacing: [Et, At],
      blur: ["none", "", _t, ce],
      brightness: D(),
      borderColor: [e],
      borderRadius: ["none", "", "full", _t, ce],
      borderSpacing: T(),
      borderWidth: h(),
      contrast: D(),
      grayscale: C(),
      hueRotate: D(),
      invert: C(),
      gap: T(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Td, At],
      inset: g(),
      margin: g(),
      opacity: D(),
      padding: T(),
      saturate: D(),
      scale: D(),
      sepia: C(),
      skew: D(),
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
        aspect: ["auto", "square", "video", ce]
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
        columns: [_t]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Y()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Y()
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
        object: [..._(), ce]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: z()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": z()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": z()
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
        z: ["auto", $r, ce]
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
        flex: ["1", "auto", "initial", "none", ce]
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
        order: ["first", "last", "none", $r, ce]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [vr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", $r, ce]
        }, ce]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": E()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": E()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [vr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [$r, ce]
        }, ce]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": E()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": E()
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
        "auto-cols": ["auto", "min", "max", "fr", ce]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ce]
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
        m: [k]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [k]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [k]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [k]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [k]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [k]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [k]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [k]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [k]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ce, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ce, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ce, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [_t]
        }, _t]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ce, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ce, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ce, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ce, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", _t, At]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", kn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [vr]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ce]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ar, kn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Et, ce]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ce]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ce]
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
        "placeholder-opacity": [P]
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
        "text-opacity": [P]
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
        decoration: ["auto", "from-font", Et, At]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Et, ce]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ce]
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
        content: ["none", ce]
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
        "bg-opacity": [P]
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
        bg: [..._(), jd]
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
        bg: ["auto", "cover", "contain", Cd]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Od]
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
        "border-opacity": [P]
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
        "divide-opacity": [P]
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
        "outline-offset": [Et, ce]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Et, At]
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
        "ring-opacity": [P]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Et, At]
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
        shadow: ["", "inner", "none", _t, Ad]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [vr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [P]
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
        "drop-shadow": ["", "none", _t, ce]
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
        "backdrop-opacity": [P]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ce]
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
        ease: ["linear", "in", "out", "in-out", ce]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", ce]
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
        scale: [S]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [S]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [S]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [$r, ce]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [O]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [O]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [A]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [A]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ce]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ce]
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
        "will-change": ["auto", "scroll", "contents", "transform", ce]
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
        stroke: [Et, At, kn]
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
}, yt = /* @__PURE__ */ vd(Md);
function F(...e) {
  return yt(he(e));
}
const ta = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ra = he, De = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return ra(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((u) => {
    const c = r == null ? void 0 : r[u], f = a == null ? void 0 : a[u];
    if (c === null) return null;
    const b = ta(c) || ta(f);
    return o[u][b];
  }), i = r && Object.entries(r).reduce((u, c) => {
    let [f, b] = c;
    return b === void 0 || (u[f] = b), u;
  }, {}), d = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, c) => {
    let { class: f, className: b, ...p } = c;
    return Object.entries(p).every(($) => {
      let [w, k] = $;
      return Array.isArray(k) ? k.includes({
        ...a,
        ...i
      }[w]) : {
        ...a,
        ...i
      }[w] === k;
    }) ? [
      ...u,
      f,
      b
    ] : u;
  }, []);
  return ra(e, s, d, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, ue = ({
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
  const [c, f] = re(null), [b, p] = re(!0), [$, w] = re(null);
  return de(() => {
    let k = !0;
    return (async () => {
      try {
        const { Icon: v } = await import("./iconify-Dqt3MVen.mjs");
        k && (f(() => v), p(!1));
      } catch (v) {
        console.error("Failed to load icon:", v), k && (w(v), p(!1));
      }
    })(), () => {
      k = !1;
    };
  }, []), b ? /* @__PURE__ */ l.jsx("span", { style: { width: r, height: r } }) : $ || !c ? null : /* @__PURE__ */ l.jsx(
    c,
    {
      icon: e,
      className: F(
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
}, Fd = De(
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
), Rs = Ie(
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
    rightIcon: b,
    onRightIconClick: p,
    id: $,
    ...w
  }, k) => {
    const P = $ || se.useId(), v = `${P}-helper`, j = `${P}-error`, S = /* @__PURE__ */ l.jsxs("div", { className: F("relative", !c && "inline-block"), children: [
      f && /* @__PURE__ */ l.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ l.jsx(ue, { icon: f, className: "w-4 h-4" }) }),
      /* @__PURE__ */ l.jsx(
        "input",
        {
          id: P,
          type: "text",
          ref: k,
          className: F(
            Fd({ variant: o ? "error" : t, size: r, rounded: n, fullWidth: c }),
            f && "pl-10",
            b && "pr-10",
            e
          ),
          "aria-describedby": o ? j : s ? v : void 0,
          "aria-invalid": o,
          "aria-required": d,
          ...w
        }
      ),
      b && /* @__PURE__ */ l.jsx(
        "div",
        {
          className: F(
            "absolute right-3 top-1/2 -translate-y-1/2 text-neutral",
            p && "cursor-pointer hover:text-primary-600"
          ),
          onClick: p,
          role: p ? "button" : void 0,
          tabIndex: p ? 0 : void 0,
          children: /* @__PURE__ */ l.jsx(ue, { icon: b, className: "w-4 h-4" })
        }
      )
    ] }), I = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      o && a && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger", id: j, children: a }),
      !o && s && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral", id: v, children: s })
    ] });
    return u === "left" ? /* @__PURE__ */ l.jsx("div", { className: F(c ? "w-full" : "inline-block", e), children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-4", children: [
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
      /* @__PURE__ */ l.jsxs("div", { className: F("flex-1", !c && "inline-block"), children: [
        S,
        I
      ] })
    ] }) }) : /* @__PURE__ */ l.jsxs("div", { className: F(c ? "w-full" : "inline-block", e), children: [
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
      S,
      I
    ] });
  }
);
Rs.displayName = "Input";
const fn = se.forwardRef(
  ({ className: e, children: t, selected: r, disabled: n, ...o }, a) => /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: a,
      className: F(
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
fn.displayName = "SelectItem";
const Ls = typeof window < "u", pt = () => Ls ? window : {
  innerHeight: 0,
  innerWidth: 0,
  addEventListener: () => {
  },
  removeEventListener: () => {
  }
}, Ke = () => Ls ? document : {
  addEventListener: () => {
  },
  removeEventListener: () => {
  },
  dispatchEvent: () => {
  }
}, Nn = "autocomplete-dropdown-opened", Dd = Ie(
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
    errorText: b,
    helperText: p,
    label: $,
    required: w = !1,
    labelPlacement: k = "top",
    fullWidth: P = !1,
    value: v,
    onChange: j,
    onFocus: S,
    onBlur: I,
    showClear: A = !1,
    onClear: H,
    searchType: O = "include",
    initialItemsToShow: R,
    itemsToLoad: z = 10,
    maxDropdownHeight: g = 300,
    noOptionsMessage: T = "No options found",
    scrollMoreMessage: h = "",
    allOptionsShownMessage: E = "",
    resetInvalidOnBlur: _ = !1,
    onInvalidReset: m,
    ...y
  }, N) => {
    const [C, Y] = re(!1), [D, B] = re(v || ""), [W, M] = re(
      R || 0
    ), G = ae(null), X = ae(null), L = ae(null), K = ae(null), fe = n !== void 0, ye = `autocomplete-${se.useId().replace(/:/g, "")}`, Ce = () => {
      if (!C || !X.current || !L.current) return;
      const { bottom: Z, top: V, left: ne, width: oe } = X.current.getBoundingClientRect(), pe = L.current, He = pt(), ot = He.innerHeight - Z, it = V, Nt = Math.min(g, 300), Zt = ot < Nt, Bt = it > ot, bt = Zt && Bt;
      Object.assign(pe.style, {
        position: "fixed",
        left: `${ne}px`,
        width: `${oe}px`
      }), bt ? Object.assign(pe.style, {
        bottom: `${He.innerHeight - V + 4}px`,
        top: "auto",
        maxHeight: `${it - 8}px`
      }) : Object.assign(pe.style, {
        top: `${Z + 4}px`,
        bottom: "auto",
        maxHeight: `${ot - 8}px`
      });
    };
    de(() => {
      const Z = pt(), V = Ke(), ne = () => {
        C && Ce();
      }, oe = () => {
        C && Ce();
      }, pe = (ot) => {
        ot.detail.id !== ye && Y(!1);
      }, He = (ot) => {
        const it = ot.target;
        G.current && !G.current.contains(it) && L.current && !L.current.contains(it) && Y(!1);
      };
      return C && (Ce(), Z.addEventListener("scroll", ne, !0), Z.addEventListener("resize", oe)), V.addEventListener(
        Nn,
        pe
      ), V.addEventListener("click", He), () => {
        Z.removeEventListener("scroll", ne, !0), Z.removeEventListener("resize", oe), V.removeEventListener(
          Nn,
          pe
        ), V.removeEventListener("click", He);
      };
    }, [C, ye]), de(() => {
      B(v || "");
    }, [v]);
    const Ze = (Z) => {
      const { value: V } = Z.target;
      if (B(V), !V.trim()) {
        Y(!1);
        return;
      }
      const ne = t.some(({ label: oe }) => {
        const pe = V.toLowerCase().trim(), He = oe.toLowerCase();
        return O === "startsWith" ? He.startsWith(pe) : He.includes(pe);
      });
      Y(ne), j == null || j(Z);
    }, Oe = (Z) => {
      Z.stopPropagation(), B(""), H == null || H();
      const V = new Event(
        "change"
      );
      V.target = { value: "" }, j == null || j(V);
    }, We = (Z) => {
      var pe;
      if (!Z) return;
      const { value: V, label: ne } = Z;
      B(ne), Y(!1), r == null || r(V);
      const oe = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: Z }
      });
      (pe = X.current) == null || pe.dispatchEvent(oe);
    }, Be = (Z) => Z.trim() ? t.some(({ label: V }) => {
      const ne = Z.toLowerCase().trim(), oe = V.toLowerCase();
      return O === "startsWith" ? oe.startsWith(ne) : oe.includes(ne);
    }) : !0, at = (Z) => {
      if (_ && D.trim() && !Be(D)) {
        B(""), m == null || m();
        const V = new Event(
          "change"
        );
        V.target = { value: "" }, j == null || j(V);
      }
      I == null || I(Z);
    }, Ve = t.filter(({ label: Z }) => {
      const V = D.toLowerCase().trim(), ne = Z.toLowerCase();
      return O === "startsWith" ? ne.startsWith(V) : ne.includes(V);
    }), st = (Z) => {
      fe || (Ke().dispatchEvent(
        new CustomEvent(Nn, {
          detail: { id: ye }
        })
      ), Ve.length > 0 && Y(!0)), S == null || S(Z);
    }, Qe = () => {
      if (!K.current || R === void 0 || R <= 0)
        return;
      const { scrollTop: Z, scrollHeight: V, clientHeight: ne } = K.current;
      Z + ne >= V - 10 && M(
        (pe) => Math.min(pe + z, Ve.length)
      );
    };
    de(() => {
      R !== void 0 && R > 0 && M(R);
    }, [D, R]);
    const qe = R !== void 0 && R > 0 ? Ve.slice(0, W) : Ve, ze = (Z, V) => Z ? Z.replace(/\{(\w+)\}/g, (ne, oe) => {
      var pe;
      return ((pe = V[oe]) == null ? void 0 : pe.toString()) || ne;
    }) : "", wt = fe ? n : C, kt = A && D && !y.disabled && !y.readOnly, ee = kt ? "mdi:close" : c, we = (Z) => {
      if (!(!wt || qe.length === 0))
        switch (Z.key) {
          case "Enter":
            Z.preventDefault(), qe.length === 1 && We(qe[0]);
            break;
          case "Tab":
            qe.length === 1 && (Z.preventDefault(), We(qe[0]));
            break;
          case "Escape":
            Z.preventDefault(), Y(!1);
            break;
        }
    }, te = () => {
      if (!wt) return null;
      const Z = Ke();
      if (!("body" in Z)) return null;
      const V = /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: L,
          className: "fixed z-[9999] min-w-[8rem] rounded-md border border-neutral-200 bg-white py-1 shadow-lg overflow-hidden",
          style: { maxHeight: `${g}px` },
          onClick: (ne) => ne.stopPropagation(),
          children: /* @__PURE__ */ l.jsx(
            "div",
            {
              ref: K,
              className: "overflow-auto",
              style: { maxHeight: `${g}px` },
              onScroll: Qe,
              children: o ? /* @__PURE__ */ l.jsx("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ l.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }) }) : qe.length > 0 ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                qe.map((ne) => /* @__PURE__ */ l.jsx(
                  fn,
                  {
                    value: ne.value,
                    selected: ne.label === D,
                    onClick: () => We(ne),
                    children: a ? a(ne) : ne.label
                  },
                  ne.value
                )),
                R !== void 0 && R > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                  W < Ve.length && h && /* @__PURE__ */ l.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: ze(h, {
                    current: W,
                    total: Ve.length
                  }) }),
                  W >= Ve.length && Ve.length > 0 && E && /* @__PURE__ */ l.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: ze(E, {
                    total: Ve.length
                  }) })
                ] })
              ] }) : /* @__PURE__ */ l.jsx("div", { className: "px-2 py-2 text-sm text-neutral", children: T })
            }
          )
        }
      );
      return Gt(V, Z.body);
    };
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: G,
        className: F("relative", P ? "w-full" : "inline-block"),
        children: [
          /* @__PURE__ */ l.jsx("div", { ref: X, className: F(!P && "inline-block"), children: /* @__PURE__ */ l.jsx(
            Rs,
            {
              ref: N,
              value: D,
              onChange: Ze,
              onFocus: st,
              onBlur: at,
              onKeyDown: we,
              variant: s,
              size: i,
              rounded: d,
              leftIcon: u,
              rightIcon: ee,
              error: f,
              errorText: b,
              helperText: p,
              label: $,
              required: w,
              labelPlacement: k,
              fullWidth: P,
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
Dd.displayName = "AutoComplete";
const zd = {
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
}, Gd = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, Bd = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full"
}, im = ({
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
  const [b, p] = re(r), $ = n !== void 0 ? n : b, w = n !== void 0, k = (v) => {
    let j;
    t ? j = $.includes(v) ? $.filter((S) => S !== v) : [...$, v] : j = $.includes(v) ? [] : [v], w ? o == null || o(j) : p(j);
  }, P = zd[u];
  return /* @__PURE__ */ l.jsx("div", { className: he("w-full space-y-2", i), children: e.map((v) => {
    const j = $.includes(v.id), S = !!v.disabled;
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: he(
          "border overflow-hidden",
          "bg-white",
          "border-gray-200",
          Gd[c],
          Bd[f],
          "transition-shadow duration-200"
        ),
        children: [
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              onClick: () => !S && k(v.id),
              disabled: S,
              className: he(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                P.hover,
                j && P.active,
                P.text,
                S && "opacity-50 cursor-not-allowed"
              ),
              children: [
                s === "left" && /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: he(
                      "mr-3 transition-transform duration-200",
                      j && "rotate-180"
                    ),
                    children: /* @__PURE__ */ l.jsx(ue, { icon: a, className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ l.jsx("div", { className: "flex-1", children: v.title }),
                s === "right" && /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: he(
                      "ml-3 transition-transform duration-200",
                      j && "rotate-180"
                    ),
                    children: /* @__PURE__ */ l.jsx(ue, { icon: a, className: "w-5 h-5" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: he(
                "grid transition-all duration-200 ease-in-out",
                j ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              ),
              children: /* @__PURE__ */ l.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ l.jsx(
                "div",
                {
                  className: he(
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
}, lm = ({
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
  }, d = yt(
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
      className: yt("w-full h-full", a === "cover" ? "object-cover" : "object-contain")
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
}, dm = ({
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
  }, d = yt(
    "inline-flex items-center font-medium",
    a[t],
    s[r],
    i[n],
    o
  );
  return /* @__PURE__ */ l.jsx("span", { className: d, children: e });
}, Vd = De(
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
), Ye = Ie(
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
        className: F(
          Vd({
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
          s && !a && /* @__PURE__ */ l.jsx(ue, { icon: s, className: "w-4 h-4", inline: !0 }),
          u && /* @__PURE__ */ l.jsx("span", { children: u }),
          i && !a && /* @__PURE__ */ l.jsx(ue, { icon: i, className: "w-4 h-4", inline: !0 })
        ]
      }
    );
  }
);
Ye.displayName = "Button";
const Hd = De(
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
), Ms = Ie(
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
      className: F(Hd({ variant: t, padding: r, shadow: n, rounded: o, className: e })),
      ref: i,
      ...s
    }
  )
);
Ms.displayName = "Card";
const En = ({
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
  }, f = t ? "border-danger-600 hover:border-danger-700" : "", p = yt(
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
  ), $ = yt(
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
          ref: (w) => {
            w && (w.indeterminate = n);
          },
          ...d
        }
      ),
      e && /* @__PURE__ */ l.jsx("label", { className: $, children: e })
    ] }),
    t && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-sm text-danger-600", children: t })
  ] });
}, Pn = De(
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
), Ud = Ie(
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
    labelPlacement: b = "top",
    fullWidth: p = !1,
    disabled: $ = !1,
    variant: w = "square",
    color: k = "primary",
    checkboxSize: P = "sm",
    showSelectAll: v = !1,
    selectAllText: j = "Select All",
    indeterminateSelectAll: S = !0,
    gap: I,
    selectAllGap: A,
    id: H,
    ...O
  }, R) => {
    const z = H || se.useId(), g = `${z}-helper`, T = `${z}-error`, h = `${z}-group`, [E, _] = se.useState(n), m = r !== void 0 ? r : E, y = (L, K) => {
      const fe = K ? [...m, L] : m.filter(($e) => $e !== L);
      r === void 0 && _(fe), o == null || o(fe);
    }, N = (L) => {
      const K = L ? t.map((fe) => fe.value) : [];
      r === void 0 && _(K), o == null || o(K);
    }, C = t.length > 0 && m.length === t.length, Y = m.length > 0 && m.length < t.length, D = S && Y, B = (L) => L === "none" ? "gap-0" : L === "xs" ? "gap-1" : L === "sm" ? "gap-2" : L === "md" ? "gap-3" : L === "lg" ? "gap-4" : L === "xl" ? "gap-6" : null, W = B(I), M = B(A), G = /* @__PURE__ */ l.jsx("div", { className: F("relative", !p && "inline-block"), children: /* @__PURE__ */ l.jsxs(
      "fieldset",
      {
        ref: R,
        id: h,
        className: F(
          Pn({ layout: a, size: s }),
          W,
          e
        ),
        "aria-describedby": i ? T : u ? g : void 0,
        "aria-invalid": i,
        "aria-required": f,
        ...O,
        children: [
          v && t.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: F(
            "flex flex-col",
            M || W || Pn({ layout: "vertical", size: s })
          ), children: [
            /* @__PURE__ */ l.jsx(
              En,
              {
                label: j,
                checked: C,
                indeterminate: D,
                onChange: (L) => N(L.target.checked),
                disabled: $,
                variant: w,
                color: i ? "error" : k,
                variantSize: P,
                error: i ? " " : void 0
              }
            ),
            /* @__PURE__ */ l.jsx("div", { className: F(
              "flex",
              a === "vertical" && "flex-col",
              a === "horizontal" && "flex-row flex-wrap",
              a === "grid" && "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
              W || Pn({ layout: a, size: s })
            ), children: t.map((L) => /* @__PURE__ */ l.jsx(
              En,
              {
                label: L.label,
                checked: m.includes(L.value),
                onChange: (K) => y(L.value, K.target.checked),
                disabled: $ || L.disabled,
                indeterminate: L.indeterminate,
                variant: w,
                color: i ? "error" : k,
                variantSize: P,
                error: i ? " " : void 0
              },
              L.value
            )) })
          ] }),
          !v && /* @__PURE__ */ l.jsx(l.Fragment, { children: t.map((L) => /* @__PURE__ */ l.jsx(
            En,
            {
              label: L.label,
              checked: m.includes(L.value),
              onChange: (K) => y(L.value, K.target.checked),
              disabled: $ || L.disabled,
              indeterminate: L.indeterminate,
              variant: w,
              color: i ? "error" : k,
              variantSize: P,
              error: i ? " " : void 0
            },
            L.value
          )) })
        ]
      }
    ) }), X = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      i && d && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger", id: T, children: d }),
      !i && u && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral", id: g, children: u })
    ] });
    return b === "left" ? /* @__PURE__ */ l.jsx("div", { className: F(p ? "w-full" : "inline-block", e), children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-4", children: [
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
      /* @__PURE__ */ l.jsxs("div", { className: F("flex-1", !p && "inline-block"), children: [
        G,
        X
      ] })
    ] }) }) : /* @__PURE__ */ l.jsxs("div", { className: F(p ? "w-full" : "inline-block", e), children: [
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
Ud.displayName = "CheckBoxGroup";
const Kd = {
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
}, Wd = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5"
}, Yd = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full"
}, cm = ({
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
    className: F(
      "inline-flex items-center gap-1.5 font-medium",
      Kd[t][r],
      Wd[n],
      Yd[o],
      s
    ),
    children: [
      i && /* @__PURE__ */ l.jsx("span", { className: "inline-flex items-center", children: /* @__PURE__ */ l.jsx(ue, { icon: i, className: "w-4 h-4" }) }),
      e,
      a && /* @__PURE__ */ l.jsx(
        "button",
        {
          onClick: a,
          className: "ml-1 rounded-full hover:bg-black/10 p-0.5",
          "aria-label": "Close",
          children: /* @__PURE__ */ l.jsx(ue, { icon: "mdi:close", className: "w-3 h-3" })
        }
      )
    ]
  }
);
var Fs = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(Ts, function() {
    return function(r, n) {
      n.prototype.isSameOrAfter = function(o, a) {
        return this.isSame(o, a) || this.isAfter(o, a);
      };
    };
  });
})(Fs);
var Xd = Fs.exports;
const Zd = /* @__PURE__ */ Ss(Xd);
var Ds = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(Ts, function() {
    return function(r, n) {
      n.prototype.isSameOrBefore = function(o, a) {
        return this.isSame(o, a) || this.isBefore(o, a);
      };
    };
  });
})(Ds);
var qd = Ds.exports;
const Jd = /* @__PURE__ */ Ss(qd);
Pe.extend(Zd);
Pe.extend(Jd);
const Qd = De(
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
), Hn = Ie(
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
    required: b = !1,
    labelPlacement: p = "top",
    fullWidth: $ = !1,
    className: w,
    placeholder: k = "Select date",
    leftIcon: P,
    rightIcon: v,
    monthsToShow: j = 1,
    valueFormatter: S,
    rangeStart: I,
    rangeEnd: A,
    closeOnSelect: H = !0,
    calendarFooter: O,
    format: R = "DD-MM-YYYY",
    allowInput: z = !1,
    ...g
  }, T) => {
    const [h, E] = re(!1), [_, m] = re(e), [y, N] = re(e || /* @__PURE__ */ new Date()), [C, Y] = re(!1), [D, B] = re(""), W = ae(null), M = ae(null), G = ae(null), X = ae(null), L = ae(null);
    $o(T, () => L.current, []), de(() => {
      m(e || void 0), B(e ? K(e, R) : "");
    }, [e, R]), de(() => {
      B(_ ? K(_, R) : "");
    }, [_, R]);
    const K = (ee, we) => {
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
    }, fe = (ee, we) => {
      const Z = ee.replace(/[^\d-]/g, "").split("-");
      if (Z.length !== 3) return null;
      let V, ne, oe;
      switch (we) {
        case "DD-MM-YYYY":
          [V, ne, oe] = Z.map(Number);
          break;
        case "YYYY-MM-DD":
          [oe, ne, V] = Z.map(Number);
          break;
        case "MM-DD-YYYY":
          [ne, V, oe] = Z.map(Number);
          break;
        default:
          [V, ne, oe] = Z.map(Number);
      }
      if (isNaN(V) || isNaN(ne) || isNaN(oe) || ne < 1 || ne > 12 || V < 1 || V > 31 || oe < 1900 || oe > 2099) return null;
      const pe = new Date(oe, ne - 1, V);
      return pe.getDate() !== V || pe.getMonth() !== ne - 1 || pe.getFullYear() !== oe ? null : pe;
    };
    de(() => {
      if (C && X.current) {
        const ee = Pe(y).year(), we = X.current.querySelectorAll("[data-year]"), te = Array.from(we).find(
          (Z) => parseInt(Z.getAttribute("data-year") || "0") === ee
        );
        te && te.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center"
        });
      }
    }, [C, y]);
    const $e = () => {
      if (!h || !M.current || !G.current) return;
      const { bottom: ee, left: we, width: te, top: Z } = M.current.getBoundingClientRect(), V = G.current, ne = pt(), oe = ne.innerHeight - ee, pe = Z, ot = oe < (j === 2 ? 400 : 350), it = pe > oe, Nt = ot && it;
      j === 2 ? (Object.assign(V.style, {
        position: "fixed",
        left: `${we}px`,
        minWidth: "500px",
        width: "auto",
        transform: ""
      }), Nt ? Object.assign(V.style, {
        bottom: `${ne.innerHeight - Z + 4}px`,
        top: "auto",
        maxHeight: `${pe - 8}px`
      }) : Object.assign(V.style, {
        top: `${ee + 4}px`,
        bottom: "auto",
        maxHeight: `${oe - 8}px`
      })) : (Object.assign(V.style, {
        position: "fixed",
        left: `${we + te / 2}px`,
        width: "320px",
        maxWidth: "100vw",
        transform: "translateX(-50%)"
      }), Nt ? Object.assign(V.style, {
        bottom: `${ne.innerHeight - Z + 4}px`,
        top: "auto",
        maxHeight: `${pe - 8}px`
      }) : Object.assign(V.style, {
        top: `${ee + 4}px`,
        bottom: "auto",
        maxHeight: `${oe - 8}px`
      }));
    };
    de(() => {
      const ee = pt(), we = Ke(), te = () => {
        h && $e();
      }, Z = () => {
        h && $e();
      }, V = (ne) => {
        ne.key === "Escape" && h && (E(!1), Y(!1));
      };
      return h && ($e(), ee.addEventListener("scroll", te, !0), ee.addEventListener("resize", Z), we.addEventListener("keydown", V)), () => {
        ee.removeEventListener("scroll", te, !0), ee.removeEventListener("resize", Z), we.removeEventListener("keydown", V);
      };
    }, [h]);
    const ye = (ee) => {
      if (I !== void 0 && A !== void 0)
        if (I && A)
          m(ee), B(K(ee, R)), t == null || t(ee);
        else if (I) {
          const te = ee;
          Pe(te).isBefore(I), m(te), B(K(te, R)), t == null || t(te), E(!1), Y(!1);
        } else
          m(ee), B(K(ee, R)), t == null || t(ee);
      else
        m(ee), B(K(ee, R)), t == null || t(ee), E(!1), Y(!1);
    }, Ce = () => {
      N(Pe(y).subtract(1, "month").toDate());
    }, Ze = () => {
      N(Pe(y).add(1, "month").toDate());
    }, Oe = (ee) => {
      const we = Pe(ee).startOf("month"), te = Pe(ee).endOf("month"), Z = [];
      let V = we;
      for (; V.isBefore(te) || V.isSame(te, "day"); )
        Z.push(V.toDate()), V = V.add(1, "day");
      return Z;
    }, We = (ee) => !!(r && Pe(ee).isBefore(r, "day") || n && Pe(ee).isAfter(n, "day")), Be = (ee) => {
      if (!z) return;
      const te = ee.target.value.replace(/[^\d-]/g, "");
      if (te.length < D.length) {
        B(te);
        return;
      }
      if (te.replace(/-/g, "").length > 8)
        return;
      let V = te;
      R === "DD-MM-YYYY" ? (te.length === 2 && !te.includes("-") || te.length === 5 && te.split("-").length === 2) && (V = te + "-") : R === "YYYY-MM-DD" ? (te.length === 4 && !te.includes("-") || te.length === 7 && te.split("-").length === 2) && (V = te + "-") : R === "MM-DD-YYYY" && (te.length === 2 && !te.includes("-") || te.length === 5 && te.split("-").length === 2) && (V = te + "-"), B(V);
    }, at = () => {
      if (!z) return;
      const ee = fe(D, R);
      if (ee) {
        if (r && ee < r) {
          B(K(r, R)), m(r), t == null || t(r);
          return;
        }
        if (n && ee > n) {
          B(K(n, R)), m(n), t == null || t(n);
          return;
        }
        m(ee), t == null || t(ee), B(K(ee, R));
      } else
        B(_ ? K(_, R) : "");
    }, Ve = () => {
      z && E(!1);
    }, st = (ee) => {
      z && ee.key === "Enter" && (ee.preventDefault(), at());
    }, Qe = (ee) => {
      const we = Pe(y).year(ee).toDate();
      N(we), Y(!1);
    }, qe = () => {
      if (!C) return null;
      const ee = Pe(y).year(), we = 1900, Z = Array.from(
        { length: 2099 - we + 1 },
        (V, ne) => we + ne
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
              onClick: () => Qe(V),
              className: F(
                V === ee && "bg-primary-50 text-primary",
                "text-sm cursor-pointer p-2"
              ),
              children: V
            },
            V
          ))
        }
      );
    }, ze = () => {
      if (!h) return null;
      const ee = Ke();
      if (!("body" in ee)) return null;
      const we = Array.from({ length: j }).map(
        (te, Z) => Pe(y).add(Z, "month").toDate()
      );
      return Gt(
        /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "fixed inset-0 z-[9998]",
              onClick: () => {
                C || E(!1);
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
                    Ye,
                    {
                      onClick: Ce,
                      variant: "ghost",
                      size: "sm",
                      leftIcon: "mdi:chevron-left"
                    }
                  ),
                  /* @__PURE__ */ l.jsx("div", { className: "relative", children: /* @__PURE__ */ l.jsx("span", { className: "font-medium text-gray-900", children: j === 1 ? /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ l.jsx("span", { children: Pe(y).format("MMMM") }),
                    /* @__PURE__ */ l.jsxs(
                      "div",
                      {
                        className: "cursor-pointer flex items-center gap-1",
                        onClick: () => Y(!C),
                        children: [
                          /* @__PURE__ */ l.jsx("span", { children: Pe(y).format("YYYY") }),
                          /* @__PURE__ */ l.jsx(Ye, { variant: "ghost", size: "sm", leftIcon: C ? "mdi:chevron-up" : "mdi:chevron-down" })
                        ]
                      }
                    )
                  ] }) : `${Pe(y).format("MMMM YYYY")} - ${Pe(
                    y
                  ).add(j - 1, "month").format("MMMM YYYY")}` }) }),
                  /* @__PURE__ */ l.jsx(
                    Ye,
                    {
                      onClick: Ze,
                      variant: "ghost",
                      size: "sm",
                      rightIcon: "mdi:chevron-right"
                    }
                  )
                ] }),
                C ? qe() : /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: F(
                      j === 2 ? "flex gap-5 p-2 mx-auto w-fit" : "justify-between p-2 mx-auto w-fit"
                    ),
                    children: we.map((te, Z) => {
                      const V = Oe(te), ne = Pe(te).startOf("month").day();
                      return /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ l.jsxs("div", { className: "grid grid-cols-7 gap-y-1 my-1", children: [
                          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                            (oe, pe) => {
                              const He = pe === 0 || pe === 6;
                              return /* @__PURE__ */ l.jsx(
                                "div",
                                {
                                  className: F(
                                    "text-center text-xs font-medium text-neutral",
                                    He && "text-danger"
                                  ),
                                  children: oe
                                },
                                oe
                              );
                            }
                          ),
                          Array.from({ length: ne }).map(
                            (oe, pe) => /* @__PURE__ */ l.jsx("div", {}, `empty-${pe}`)
                          ),
                          V.map((oe) => {
                            const pe = _ && Pe(oe).isSame(_, "day"), He = We(oe), ot = Pe(oe).isSame(
                              te,
                              "month"
                            ), it = I && A && Pe(oe).isSameOrAfter(I, "day") && Pe(oe).isSameOrBefore(A, "day"), Nt = I && Pe(oe).isSame(I, "day"), Zt = A && Pe(oe).isSame(A, "day"), Bt = Pe(oe).day() === 0 || Pe(oe).day() === 6, bt = I && A;
                            return /* @__PURE__ */ l.jsx("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ l.jsx(
                              "div",
                              {
                                className: F(
                                  it && "rounded-none bg-primary-50",
                                  bt && Nt && "rounded-l-full",
                                  bt && Zt && "rounded-r-full"
                                ),
                                children: /* @__PURE__ */ l.jsx(
                                  "button",
                                  {
                                    onClick: () => !He && ye(oe),
                                    disabled: He,
                                    className: F(
                                      "p-2 text-sm transition-colors duration-200 w-10 h-10 rounded-full",
                                      Bt && "!text-danger",
                                      pe && "bg-primary !text-white hover:bg-primary-600 active:bg-primary-700",
                                      pe && !bt && "rounded-full",
                                      !pe && !He && "hover:bg-primary-50 active:bg-primary-100",
                                      !ot && "text-neutral-400",
                                      He && "opacity-50 cursor-not-allowed",
                                      // inRange && "bg-primary-50 text-primary-900 rounded-none",
                                      bt && Nt && "!bg-primary !text-white !rounded-full",
                                      bt && Zt && "!bg-primary !text-white !rounded-full"
                                    ),
                                    children: Pe(oe).format("D")
                                  },
                                  oe.toString()
                                )
                              }
                            ) });
                          })
                        ] }),
                        O
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
        className: F("relative", !$ && "inline-block"),
        ref: M,
        onClick: () => !i && !z && E(!h),
        children: [
          P && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (ee) => {
                ee.stopPropagation(), i || E(!h);
              },
              children: /* @__PURE__ */ l.jsx(ue, { icon: P, className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "input",
            {
              ref: L,
              type: "text",
              value: z ? D : S ? S() : _ ? K(_, R) : "",
              placeholder: z ? R : k,
              readOnly: !z,
              maxLength: z ? 10 : void 0,
              onChange: Be,
              onBlur: at,
              onFocus: Ve,
              onKeyDown: st,
              className: F(
                Qd({ variant: d ? "error" : o, size: a, rounded: s, fullWidth: $ }),
                P && "pl-10",
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
              onClick: (ee) => {
                ee.stopPropagation(), i || E(!h);
              },
              children: /* @__PURE__ */ l.jsx(ue, { icon: v, className: "w-4 h-4" })
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
        className: F($ ? "w-full" : "inline-block", w),
        ref: W,
        children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-4", children: [
            f && /* @__PURE__ */ l.jsxs("label", { className: "block text-sm text-neutral-900 pt-2", children: [
              f,
              b && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: F("flex-1", !$ && "inline-block"), children: [
              wt,
              kt
            ] })
          ] }),
          ze()
        ]
      }
    ) : /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: F($ ? "w-full" : "inline-block", w),
        ref: W,
        children: [
          f && /* @__PURE__ */ l.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
            f,
            b && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          wt,
          kt,
          ze()
        ]
      }
    );
  }
);
Hn.displayName = "PrimitiveDatePicker";
const ec = Ie(
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
    const [f, b] = re([
      void 0,
      void 0
    ]);
    if (e === "single") {
      const p = Array.isArray(t) ? t[0] : t;
      return /* @__PURE__ */ l.jsx(
        Hn,
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
      const w = (P) => {
        !p || p && $ ? (b([P, void 0]), r == null || r([P, void 0])) : p && !$ && (P < p ? (b([P, p]), r == null || r([P, p])) : (b([p, P]), r == null || r([p, P])));
      }, k = () => {
        if (!p) return "";
        const P = (v) => v ? v.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric"
        }) : "";
        return p && $ ? `${P(p)} - ${P($)}` : P(p);
      };
      return /* @__PURE__ */ l.jsx(
        Hn,
        {
          ref: c,
          value: p,
          onChange: w,
          monthsToShow: n,
          placeholder: u.placeholder || "Select date range",
          valueFormatter: k,
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
ec.displayName = "DatePicker";
const zs = Ie(
  ({ children: e, onClose: t, className: r, ...n }, o) => /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: o,
      className: F("mb-4 flex items-center justify-between", r),
      ...n,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "flex-1", children: e }),
        t && /* @__PURE__ */ l.jsx(
          "button",
          {
            onClick: t,
            className: "rounded-full p-1 text-gray hover:bg-gray-100 hover:text-gray-700",
            "aria-label": "Close dialog",
            children: /* @__PURE__ */ l.jsx(ue, { icon: "mdi:close", className: "h-5 w-5" })
          }
        )
      ]
    }
  )
), na = {
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
}, tc = {
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
}, rc = Ie(
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
    animationDuration: b = 300,
    animationDelay: p = 0,
    ...$
  }, w) => {
    const [k, P] = re(e), [v, j] = re(!1), S = ae(!1);
    if (Ns(() => {
      if (e) {
        P(!0), j(!1);
        const T = Ke();
        "body" in T && (f !== "outside" ? (T.body.style.overflow = "hidden", S.current = !0) : S.current = !1);
        const h = requestAnimationFrame(() => j(!0));
        return () => cancelAnimationFrame(h);
      }
      j(!1);
      const g = setTimeout(() => {
        P(!1);
        const T = Ke();
        "body" in T && S.current && (T.body.style.overflow = "", S.current = !1);
      }, b + p);
      return () => clearTimeout(g);
    }, [e, f, b, p]), de(() => {
      const g = (T) => {
        T instanceof KeyboardEvent && T.key === "Escape" && t();
      };
      return e && Ke().addEventListener("keydown", g), () => {
        Ke().removeEventListener("keydown", g);
      };
    }, [e, t]), !k) return null;
    const I = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, A = () => {
      s && t();
    }, H = Ke();
    if (!("body" in H)) return null;
    const O = (g) => {
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
    })(), z = {
      transitionDuration: `${b}ms`,
      transitionDelay: `${p}ms`
    };
    return Gt(
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: F(
            "fixed inset-0 z-50 flex transition-opacity",
            I[o],
            v ? "opacity-100" : "opacity-0",
            c === "center" && "items-center justify-center",
            c === "top" && "items-start justify-center",
            c === "bottom" && "items-end justify-center",
            c === "left" && "items-stretch justify-start",
            c === "right" && "items-stretch justify-end"
          ),
          style: z,
          onClick: A,
          children: /* @__PURE__ */ l.jsxs(
            "div",
            {
              ref: w,
              className: F(
                "relative transform bg-white p-6 shadow-xl transition-all",
                // Width/Max-width behavior depends on position.
                // If `sizeClassName` is provided, it takes precedence except in fullscreen mode.
                i === "fullscreen" ? na.fullscreen : d ?? (c === "left" || c === "right" ? tc[i] : na[i]),
                // Position-based animations
                c === "center" && (v ? "scale-100 opacity-100" : "scale-95 opacity-0"),
                c === "left" && (v ? "translate-x-0 h-full" : "-translate-x-full h-full"),
                c === "right" && (v ? "translate-x-0 h-full" : "translate-x-full h-full"),
                c === "top" && (v ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"),
                c === "bottom" && (v ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"),
                n,
                i === "fullscreen" ? "rounded-none" : O(u),
                // Corner overrides so the edge touching the viewport is not rounded
                c === "left" && "rounded-l-none",
                c === "right" && "rounded-r-none",
                c === "top" && "rounded-t-none",
                c === "bottom" && "rounded-b-none",
                R
              ),
              style: z,
              onClick: (g) => g.stopPropagation(),
              ...$,
              children: [
                a && /* @__PURE__ */ l.jsx(zs, { onClose: t, children: a }),
                r
              ]
            }
          )
        }
      ),
      H.body
    );
  }
), nc = Ie(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ l.jsx(
    "h2",
    {
      ref: n,
      className: F("text-xl font-semibold text-gray-900", t),
      ...r,
      children: e
    }
  )
), oc = Ie(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ l.jsx("div", { ref: n, className: F("text-gray-600", t), ...r, children: e })
), ac = Ie(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: n,
      className: F("mt-6 flex justify-end gap-3", t),
      ...r,
      children: e
    }
  )
);
rc.displayName = "Dialog";
nc.displayName = "DialogTitle";
oc.displayName = "DialogBody";
ac.displayName = "DialogActions";
zs.displayName = "DialogHeader";
const sc = ({
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
  }, u = yt(
    "inline-block",
    a[e],
    s[t],
    i[r],
    d[n],
    o
  );
  return /* @__PURE__ */ l.jsx("div", { className: u });
}, ic = {
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
}, lc = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, oa = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
}, um = ({
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
  showFileList: b = !0,
  showPlaceholder: p = !0,
  showMaxSize: $ = !0,
  icon: w = "mdi:upload"
}) => {
  const [k, P] = re(!1), [v, j] = re(null), S = ae(null), I = me((h) => {
    h.preventDefault(), s || P(!0);
  }, [s]), A = me((h) => {
    h.preventDefault(), P(!1);
  }, []), H = me((h) => h.size > t ? `File size exceeds ${t / (1024 * 1024)}MB limit` : e[0] !== "*" && !e.some((E) => E.startsWith(".") ? h.name.toLowerCase().endsWith(E.toLowerCase()) : h.type.startsWith(E)) ? `File type not allowed. Allowed types: ${e.join(", ")}` : null, [e, t]), O = me((h) => {
    if (h.preventDefault(), P(!1), j(null), s) return;
    const E = Array.from(h.dataTransfer.files), _ = [], m = [];
    if (E.forEach((y) => {
      const N = H(y);
      N ? m.push(`${y.name}: ${N}`) : _.push(y);
    }), m.length > 0 && j(m.join(`
`)), _.length > 0) {
      const y = r ? [...n, ..._] : _;
      o == null || o(y);
    }
  }, [s, r, o, H, n]), R = me((h) => {
    if (j(null), s || !h.target.files) return;
    const E = Array.from(h.target.files), _ = [], m = [];
    if (E.forEach((y) => {
      const N = H(y);
      N ? m.push(`${y.name}: ${N}`) : _.push(y);
    }), m.length > 0 && j(m.join(`
`)), _.length > 0) {
      const y = r ? [...n, ..._] : _;
      o == null || o(y);
    }
    S.current && (S.current.value = "");
  }, [s, r, o, H, n]), z = me((h) => {
    const E = [...n];
    E.splice(h, 1), o == null || o(E);
  }, [o, n]), g = (h) => h.type.startsWith("image/") ? /* @__PURE__ */ l.jsx(ue, { icon: "mdi:image", className: "w-5 h-5" }) : h.type.startsWith("text/") ? /* @__PURE__ */ l.jsx(ue, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ l.jsx(ue, { icon: "mdi:file", className: "w-5 h-5" }), T = ic[d];
  return /* @__PURE__ */ l.jsxs("div", { className: he("w-full", a), children: [
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: he(
          "p-6 text-center transition-colors",
          !f && [
            "border-2 border-dashed",
            T.border,
            T.bg,
            k && T.active,
            !s && T.hover
          ],
          s && "opacity-50 cursor-not-allowed",
          lc[u],
          oa[c],
          !f && "cursor-pointer"
        ),
        onDragOver: I,
        onDragLeave: A,
        onDrop: O,
        onClick: () => {
          var h;
          return !s && !f && ((h = S.current) == null ? void 0 : h.click());
        },
        children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              ref: S,
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
            return !s && ((h = S.current) == null ? void 0 : h.click());
          }, children: f }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsx(ue, { icon: w, className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
            p && /* @__PURE__ */ l.jsx("p", { className: he("text-neutral-600", T.text), children: i }),
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
    b && n.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "mt-4 space-y-2", children: n.map((h, E) => /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: he(
          "flex items-center justify-between p-2",
          oa[c],
          T.bg
        ),
        children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex items-center space-x-2", children: [
            g(h),
            /* @__PURE__ */ l.jsx("span", { className: he("text-sm", T.text), children: h.name }),
            /* @__PURE__ */ l.jsxs("span", { className: "text-xs text-neutral", children: [
              "(",
              (h.size / 1024).toFixed(1),
              " KB)"
            ] })
          ] }),
          !s && /* @__PURE__ */ l.jsx(
            "button",
            {
              onClick: () => z(E),
              className: "p-1 text-neutral hover:text-danger",
              children: /* @__PURE__ */ l.jsx(ue, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${h.name}-${E}`
    )) })
  ] });
}, dc = De(
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
), fm = ({
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
  return /* @__PURE__ */ l.jsxs("div", { className: F(dc({ variant: n, rounded: o }), i), children: [
    r && /* @__PURE__ */ l.jsx(ue, { icon: u(), className: F("h-5 w-5 flex-shrink-0", d()) }),
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
        children: /* @__PURE__ */ l.jsx(ue, { icon: "mdi:close", className: "h-5 w-5" })
      }
    )
  ] });
}, Tn = "select-dropdown-opened", cc = De(
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
), Gs = Ie(
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
    onChange: b,
    disabled: p = !1,
    position: $ = "bottom",
    fullWidth: w = !1,
    children: k,
    leftIcon: P,
    rightIcon: v,
    ...j
  }, S) => {
    const [I, A] = re(!1), H = ae(null), O = ae(null), z = `select-${se.useId().replace(/:/g, "")}`, g = () => {
      if (I && H.current && O.current) {
        const y = H.current.getBoundingClientRect(), N = O.current, C = pt(), Y = C.innerHeight - y.bottom, D = y.top, W = y.bottom + N.offsetHeight + 4 >= C.innerHeight, M = D > Y, G = W && M;
        $ === "bottom" || $ === "top" ? (N.style.position = "fixed", N.style.left = `${y.left}px`, N.style.width = `${y.width}px`, $ === "bottom" && G ? (N.style.bottom = `${C.innerHeight - y.top + 4}px`, N.style.top = "auto", N.style.maxHeight = `${D - 8}px`) : $ === "bottom" ? (N.style.top = `${y.bottom + 4}px`, N.style.bottom = "auto", N.style.maxHeight = `${Y - 8}px`) : $ === "top" && !G ? (N.style.top = `${y.bottom + 4}px`, N.style.bottom = "auto", N.style.maxHeight = `${Y - 8}px`) : (N.style.bottom = `${C.innerHeight - y.top + 4}px`, N.style.top = "auto", N.style.maxHeight = `${D - 8}px`)) : $ === "left" ? (N.style.position = "fixed", N.style.right = `${C.innerWidth - y.left + 4}px`, N.style.top = `${y.top}px`, N.style.maxHeight = `${C.innerHeight - y.top - 8}px`) : $ === "right" && (N.style.position = "fixed", N.style.left = `${y.right + 4}px`, N.style.top = `${y.top}px`, N.style.maxHeight = `${C.innerHeight - y.top - 8}px`);
      }
    };
    de(() => {
      const y = pt(), N = () => {
        I && g();
      }, C = () => {
        I && g();
      };
      return I && (g(), y.addEventListener("scroll", N, !0), y.addEventListener("resize", C)), () => {
        y.removeEventListener("scroll", N, !0), y.removeEventListener("resize", C);
      };
    }, [I, $]), de(() => {
      const y = Ke(), N = (Y) => {
        Y.detail.id !== z && A(!1);
      }, C = (Y) => {
        const D = Y.target, B = H.current, W = O.current;
        B && W && !B.contains(D) && !W.contains(D) && A(!1);
      };
      return y.addEventListener(Tn, N), y.addEventListener("click", C), () => {
        y.removeEventListener(Tn, N), y.removeEventListener("click", C);
      };
    }, [z]);
    const T = () => {
      if (p) return;
      if (I) {
        A(!1);
        return;
      }
      Ke().dispatchEvent(
        new CustomEvent(Tn, {
          detail: { id: z }
        })
      ), A(!0);
    }, h = () => {
      if (o) {
        const y = o.find((N) => N.value === f);
        return y == null ? void 0 : y.label;
      }
      if (k) {
        const N = Cr.toArray(k).find(
          (C) => Tr(C) && "value" in C.props && C.props.value === f
        );
        return Tr(N) ? N.props.children : null;
      }
      return null;
    }, E = (y) => {
      p || (b == null || b(y), A(!1));
    }, _ = () => o ? o.map((y) => /* @__PURE__ */ l.jsx(
      fn,
      {
        value: y.value,
        disabled: y.disabled,
        selected: y.value === f,
        onClick: () => {
          y.onClick && y.onClick(y.value), E(y.value);
        },
        children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
          y.icon,
          y.label
        ] })
      },
      y.value
    )) : k ? Cr.map(k, (y) => Tr(y) && "value" in y.props ? vo(y, {
      selected: y.props.value === f,
      onClick: () => E(y.props.value)
    }) : null) : null, m = () => {
      if (!I || p) return null;
      const y = /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: O,
          className: F(
            "fixed z-[9999] min-w-[8rem] border border-neutral-200 bg-white py-1 shadow-lg rounded-lg",
            $ === "left" || $ === "right" ? "w-max" : "w-full"
          ),
          onClick: (C) => C.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: _()
        }
      ), N = Ke();
      return "body" in N ? Gt(y, N.body) : null;
    };
    return /* @__PURE__ */ l.jsxs("div", { className: F(w ? "w-full" : "inline-block"), ref: S, ...j, children: [
      a && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: z,
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
          className: F("relative", !w && "inline-block"),
          onClick: T,
          children: [
            /* @__PURE__ */ l.jsxs(
              "button",
              {
                id: z,
                ref: H,
                type: "button",
                className: F(
                  cc({ variant: s ? "error" : t, size: r, rounded: n, fullWidth: w }),
                  "flex items-center justify-between",
                  p && "cursor-not-allowed opacity-50",
                  P && "pl-10",
                  v && "pr-10",
                  e
                ),
                "aria-haspopup": "listbox",
                "aria-expanded": I,
                "aria-describedby": s ? `${z}-error` : d ? `${z}-helper` : void 0,
                disabled: p,
                children: [
                  P && /* @__PURE__ */ l.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ l.jsx(ue, { icon: P, className: "w-4 h-4" }) }),
                  /* @__PURE__ */ l.jsx("span", { className: "flex items-center gap-2 min-w-0 flex-1", children: /* @__PURE__ */ l.jsx("span", { className: F(
                    "truncate text-left",
                    h() ? "text-neutral-900" : "text-neutral"
                  ), children: h() || c }) }),
                  v ? /* @__PURE__ */ l.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ l.jsx(ue, { icon: v, className: "w-4 h-4" }) }) : /* @__PURE__ */ l.jsx(
                    ue,
                    {
                      icon: "mdi:chevron-down",
                      className: F("transition-transform flex-shrink-0 ml-2 w-4 h-4", I && "rotate-180")
                    }
                  )
                ]
              }
            ),
            m()
          ]
        }
      ),
      s && i && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger", id: `${z}-error`, children: i }),
      !s && d && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral", id: `${z}-helper`, children: d })
    ] });
  }
);
Gs.displayName = "Select";
const uc = ({
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
    const w = $ - p + 1;
    return Array.from({ length: w }, (k, P) => P + p);
  }, b = (() => {
    const p = o * 2 + 3, $ = p + 2;
    if (t > $) {
      const w = Math.max(2, e - o), k = Math.min(t - 1, e + o);
      let P = c(w, k);
      const v = w > 2, j = t - k > 1, S = p - (P.length + 1);
      if (v && !j)
        P = [...c(w - S, w - 1), ...P];
      else if (!v && j) {
        const I = c(k + 1, k + S);
        P = [...P, ...I];
      } else v && j && (P = [...P]);
      return [1, ...P, t];
    }
    return c(1, t);
  })();
  return /* @__PURE__ */ l.jsxs(
    "nav",
    {
      className: he("flex items-center justify-between space-x-1", a),
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
              Gs,
              {
                value: i == null ? void 0 : i.toString(),
                onChange: (p) => u && u(Number(p)),
                size: "sm",
                className: "w-16",
                fullWidth: !1,
                "aria-label": "Items per page",
                children: s.map((p) => /* @__PURE__ */ l.jsx(fn, { value: p.toString(), children: p }, p))
              }
            ),
            /* @__PURE__ */ l.jsx("span", { className: "text-neutral-700 text-sm", children: "data per halaman" })
          ] }),
          /* @__PURE__ */ l.jsx(
            Ye,
            {
              variant: "ghost",
              onClick: () => n(e - 1),
              disabled: e === 1,
              className: he(
                "px-3 py-1 rounded-md text-sm",
                e === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              ),
              children: /* @__PURE__ */ l.jsx(ue, { size: "18", icon: "mdi:chevron-left" })
            }
          ),
          b.map((p, $) => {
            const w = p === e, k = typeof p == "string" && p === "...";
            return /* @__PURE__ */ l.jsx(
              Ye,
              {
                variant: "ghost",
                onClick: () => !k && n(p),
                className: he(
                  "px-3 py-1 rounded-md text-sm",
                  w ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  k && "cursor-default"
                ),
                children: p
              },
              $
            );
          }),
          /* @__PURE__ */ l.jsx(
            Ye,
            {
              variant: "ghost",
              onClick: () => n(e + 1),
              disabled: e === t,
              className: he(
                "px-3 py-1 rounded-md text-sm",
                e === t ? "text-gray-400 cursor-not-allowed" : "text-gray-700"
              ),
              children: /* @__PURE__ */ l.jsx(ue, { size: "18", icon: "mdi:chevron-right" })
            }
          )
        ] })
      ]
    }
  );
}, fc = ({
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
  const u = (b) => {
    n == null || n(b.target.checked);
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
      className: yt(
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
            className: yt(
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
            className: yt(
              "text-sm font-medium leading-none",
              s && "text-danger-600"
            ),
            children: e
          }
        )
      ]
    }
  );
}, pc = De(
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
), gc = Ie(
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
    labelPlacement: b = "top",
    fullWidth: p = !1,
    disabled: $ = !1,
    name: w,
    gap: k,
    color: P = "primary",
    radioSize: v = "sm",
    id: j,
    ...S
  }, I) => {
    const A = j || se.useId(), H = `${A}-helper`, O = `${A}-error`, R = `${A}-group`, z = w || `radio-group-${A}`, [g, T] = se.useState(n), h = r !== void 0 ? r : g, E = (C) => {
      r === void 0 && T(C), o == null || o(C);
    }, m = ((C) => C === "none" ? "gap-0" : C === "xs" ? "gap-1" : C === "sm" ? "gap-2" : C === "md" ? "gap-3" : C === "lg" ? "gap-4" : C === "xl" ? "gap-6" : null)(k), y = /* @__PURE__ */ l.jsx("div", { className: F("relative", !p && "inline-block"), children: /* @__PURE__ */ l.jsx(
      "fieldset",
      {
        ref: I,
        id: R,
        className: F(
          pc({ layout: a, size: s }),
          m,
          e
        ),
        "aria-describedby": i ? O : u ? H : void 0,
        "aria-invalid": i,
        "aria-required": f,
        ...S,
        children: t.map((C) => /* @__PURE__ */ l.jsx(
          fc,
          {
            label: C.label,
            checked: h === C.value,
            onChange: () => E(C.value),
            disabled: $ || C.disabled,
            name: z,
            value: C.value,
            color: i ? "error" : P,
            error: i ? " " : void 0,
            variantSize: v
          },
          C.value
        ))
      }
    ) }), N = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      i && d && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger", id: O, children: d }),
      !i && u && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral", id: H, children: u })
    ] });
    return b === "left" ? /* @__PURE__ */ l.jsx("div", { className: F(p ? "w-full" : "inline-block", e), children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-4", children: [
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
      /* @__PURE__ */ l.jsxs("div", { className: F("flex-1", !p && "inline-block"), children: [
        y,
        N
      ] })
    ] }) }) : /* @__PURE__ */ l.jsxs("div", { className: F(p ? "w-full" : "inline-block", e), children: [
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
      N
    ] });
  }
);
gc.displayName = "RadioGroup";
const aa = De("animate-pulse bg-neutral-200", {
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
}), mc = ({
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
      className: F(
        aa({ variant: r, rounded: n, fullWidth: o, pulseVariant: "default" }),
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
    className: F(
      aa({ variant: r, rounded: n, fullWidth: o, pulseVariant: a }),
      s
    ),
    style: {
      width: !o && typeof e == "number" ? `${e}px` : e,
      height: typeof t == "number" ? `${t}px` : t
    }
  }
), pm = ({
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
  const f = c, [b, p] = re(
    n !== void 0 ? n : o !== void 0 ? o : f ? [e, t] : e
  ), [$, w] = re(null), k = ae(null), P = n !== void 0 ? n : b, [v, j] = f ? Array.isArray(P) ? P : [e, t] : [typeof P == "number" ? P : e, t], S = (m) => Math.min(Math.max(m, e), t), I = (m) => {
    if (i) return;
    let y;
    f && Array.isArray(m) ? y = [S(m[0]), S(m[1])] : !f && typeof m == "number" ? y = S(m) : y = f ? [e, t] : e, n === void 0 && p(y), a == null || a(y);
  }, A = (m) => {
    if (!k.current) return e;
    const y = k.current.getBoundingClientRect(), C = (m - y.left) / y.width, Y = e + (t - e) * C, D = Math.round(Y / r) * r;
    return S(D);
  }, H = (m) => (y) => {
    i || (w(m), y.stopPropagation());
  }, O = (m) => {
    if (!i)
      if (!f)
        w(0), R(m, 0);
      else {
        const y = A(m.clientX), N = Math.abs(y - v), C = Math.abs(y - j), Y = N < C ? 0 : 1;
        w(Y), R(m, Y);
      }
  }, R = se.useCallback((m, y) => {
    const N = A(m.clientX);
    if (!f)
      I(N);
    else {
      let C = [v, j];
      y === 0 ? C = [Math.min(N, j - r), j] : C = [v, Math.max(N, v + r)], C[0] > C[1] && (C = [C[1], C[0]]), I(C);
    }
  }, [f, v, j, r, I, A]), z = se.useRef($);
  z.current = $;
  const g = se.useCallback(function(m) {
    z.current === null || i || R(m, z.current);
  }, [i, R]), T = se.useCallback(function() {
    w(null);
  }, []);
  de(() => {
    if ($ !== null) {
      const m = pt();
      return m.addEventListener("mousemove", g), m.addEventListener("mouseup", T), () => {
        m.removeEventListener("mousemove", g), m.removeEventListener("mouseup", T);
      };
    }
  }, [$, g, T]);
  const h = (m) => (m - e) / (t - e) * 100, E = h(v), _ = h(j);
  return /* @__PURE__ */ l.jsxs("div", { className: he("relative w-full", s), children: [
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: k,
        className: he(
          "relative h-2 bg-gray-200 rounded-full cursor-pointer",
          i && "opacity-50 cursor-not-allowed"
        ),
        onMouseDown: O,
        children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "absolute h-full bg-primary rounded-full",
              style: { left: `${f ? E : 0}%`, width: `${f ? _ - E : E}%` }
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: he(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                i && "cursor-not-allowed"
              ),
              style: { left: `${E}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: H(0)
            }
          ),
          f && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: he(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                i && "cursor-not-allowed"
              ),
              style: { left: `${_}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: H(1)
            }
          )
        ]
      }
    ),
    u.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "flex justify-between mt-2", children: u.map((m) => /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "text-xs text-gray",
        style: { left: `${(m.value - e) / (t - e) * 100}%` },
        children: m.label
      },
      m.value
    )) }),
    d && /* @__PURE__ */ l.jsx("div", { className: "mt-2 text-sm text-gray-600", children: f ? `${v} - ${j}` : v })
  ] });
}, bc = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}, hc = {
  primary: "text-primary",
  warning: "text-warning",
  default: "text-default-400"
}, gm = ({
  rating: e,
  maxRating: t = 5,
  size: r = "md",
  color: n = "primary",
  readOnly: o = !1,
  onRatingChange: a,
  className: s
}) => {
  const [i, d] = re(null), u = (p) => {
    o || d(p);
  }, c = () => {
    o || d(null);
  }, f = (p) => {
    !o && a && a(p);
  }, b = i !== null ? i : e;
  return /* @__PURE__ */ l.jsx("div", { className: F("flex items-center gap-1", s), children: [...Array(t)].map((p, $) => {
    const w = $ + 1, k = w <= b, P = i !== null && w <= i;
    return /* @__PURE__ */ l.jsx(
      "button",
      {
        className: F(
          "transition-colors duration-200",
          bc[r],
          k || P ? hc[n] : "text-default-200",
          !o && "cursor-pointer"
        ),
        onMouseEnter: () => u(w),
        onMouseLeave: c,
        onClick: () => f(w),
        disabled: o,
        "aria-label": `Rate ${w} out of ${t}`,
        children: /* @__PURE__ */ l.jsx(
          ue,
          {
            icon: k || P ? "mdi:star" : "mdi:star-outline",
            className: "w-full h-full"
          }
        )
      },
      $
    );
  }) });
}, $c = {
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
}, vc = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4"
}, mm = ({
  status: e,
  size: t = "md",
  withLabel: r = !1,
  className: n
}) => {
  const { bgColor: o, label: a } = $c[e], s = vc[t];
  return /* @__PURE__ */ l.jsxs("div", { className: F("flex items-center gap-2", n), children: [
    /* @__PURE__ */ l.jsx("div", { className: F("rounded-full animate-pulse", o, s) }),
    r && /* @__PURE__ */ l.jsx("span", { className: "text-sm", children: a })
  ] });
}, Bs = (e, t) => {
  if (t) return t;
  switch (e) {
    case "completed":
      return "mdi:check";
    case "active":
      return "mdi:circle-medium";
    default:
      return "mdi:circle-outline";
  }
}, Vs = (e) => {
  switch (e) {
    case "completed":
      return "text-white bg-primary ring-4 ring-primary-50";
    case "active":
      return "text-primary bg-primary-50 ring-4 ring-primary-50";
    default:
      return "text-neutral bg-neutral-50 ring-4 ring-neutral-50";
  }
}, yc = ({
  steps: e,
  activeStep: t,
  className: r,
  variant: n = "default"
}) => /* @__PURE__ */ l.jsx("div", { className: F("flex flex-row items-center w-full justify-between", r), children: e.map((o, a) => {
  const s = a < t ? "completed" : a === t ? "active" : "pending";
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "flex items-center flex-1",
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: F(
          "flex flex-col items-center z-10",
          n === "default" ? "gap-4" : "gap-2",
          n === "default" ? "px-5" : "px-3"
        ), children: [
          n === "default" && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: F(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                Vs(s)
              ),
              children: /* @__PURE__ */ l.jsx(
                ue,
                {
                  icon: Bs(s, o.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ l.jsx(
              "span",
              {
                className: F(
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
          sc,
          {
            className: F(
              "transition-all duration-200",
              a < t ? "bg-primary" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    a
  );
}) }), xc = ({
  steps: e,
  activeStep: t,
  className: r,
  variant: n = "default"
}) => /* @__PURE__ */ l.jsx("div", { className: F("flex flex-col items-start gap-8", r), children: e.map((o, a) => {
  const s = a < t ? "completed" : a === t ? "active" : "pending";
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "flex flex-row w-full items-center relative",
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: F(
          "flex flex-row items-center z-10",
          n === "default" ? "gap-4" : "gap-2"
        ), children: [
          n === "default" && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: F(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                Vs(s)
              ),
              children: /* @__PURE__ */ l.jsx(
                ue,
                {
                  icon: Bs(s, o.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-start", children: [
            /* @__PURE__ */ l.jsx(
              "span",
              {
                className: F(
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
            className: F(
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
}) }), bm = ({
  orientation: e = "horizontal",
  variant: t = "default",
  ...r
}) => e === "vertical" ? /* @__PURE__ */ l.jsx(xc, { variant: t, ...r }) : /* @__PURE__ */ l.jsx(yc, { variant: t, ...r }), hm = ({
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
      className: he(
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
              className: he(
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
              className: he(
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
}, $m = ({
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
  var P, v;
  const [u, c] = re(t || ((P = e[0]) == null ? void 0 : P.id) || ""), f = se.useRef(null), [b, p] = re({ left: 0, width: 0 });
  se.useEffect(() => {
    var j;
    if (r === "active-underline" && f.current) {
      const S = f.current.getBoundingClientRect(), I = (j = f.current.parentElement) == null ? void 0 : j.getBoundingClientRect();
      I && p({
        left: S.left - I.left,
        width: S.width
      });
    }
  }, [r, e, u]), se.useEffect(() => {
    if (r === "active-underline") {
      const j = () => {
        var S;
        if (f.current) {
          const I = f.current.getBoundingClientRect(), A = (S = f.current.parentElement) == null ? void 0 : S.getBoundingClientRect();
          A && p({
            left: I.left - A.left,
            width: I.width
          });
        }
      };
      return window.addEventListener("resize", j), () => window.removeEventListener("resize", j);
    }
  }, [r, e, u]);
  const $ = me((j) => {
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
  }, k = (j, S) => {
    const I = he(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      w(),
      S && "opacity-50 cursor-not-allowed",
      !S && "cursor-pointer"
    );
    switch (r) {
      case "pills":
        return he(
          I,
          "rounded-full",
          j ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return he(
          I,
          "border-b-2",
          j ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      case "active-underline":
        return he(
          I,
          "border-b-0",
          j ? "text-primary" : "text-gray-600 dark:text-gray-300 hover:text-primary"
        );
      default:
        return he(
          I,
          "border-b-2",
          j ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: he("w-full", o), children: [
    /* @__PURE__ */ l.jsxs("div", { className: he(
      r === "active-underline" ? "relative" : "",
      "flex space-x-1",
      r === "pills" && "space-x-2 border-b-0",
      r !== "active-underline" && "border-b border-gray-200 dark:border-gray-700",
      a
    ), children: [
      e.map((j) => {
        const S = j.id === u, I = !!j.disabled;
        return /* @__PURE__ */ l.jsxs(
          "button",
          {
            ref: r === "active-underline" && S ? f : void 0,
            onClick: () => !I && $(j.id),
            disabled: I,
            className: he(
              k(S, I),
              s
            ),
            children: [
              j.icon && /* @__PURE__ */ l.jsx(
                ue,
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
          style: { left: b.left, width: b.width }
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: he("mt-4", i), children: (v = e.find((j) => j.id === u)) == null ? void 0 : v.content })
  ] });
}, jr = ({
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
  return /* @__PURE__ */ l.jsx(s, { className: F("text-gray-900", o[e], r), children: t });
}, wc = De(
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
), kc = Ie(
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
    showCharCount: b = !1,
    maxLength: p,
    minRows: $ = 3,
    maxRows: w = 10,
    id: k,
    value: P,
    ...v
  }, j) => {
    const S = k || se.useId(), I = `${S}-helper`, A = `${S}-error`, H = `${S}-char-count`, O = typeof P == "string" ? P.length : 0, R = p && O > p, z = /* @__PURE__ */ l.jsxs("div", { className: F("relative", !c && "inline-block"), children: [
      /* @__PURE__ */ l.jsx(
        "textarea",
        {
          id: S,
          ref: j,
          rows: $,
          maxLength: p,
          className: F(
            wc({
              variant: o ? "error" : t,
              size: r,
              rounded: n,
              fullWidth: c,
              resize: f === "none" ? "none" : f
            }),
            e
          ),
          "aria-describedby": F(
            o ? A : s ? I : void 0,
            b ? H : void 0
          ),
          "aria-invalid": o,
          "aria-required": d,
          style: {
            minHeight: `${$ * 1.5}em`,
            maxHeight: `${w * 1.5}em`
          },
          value: P,
          ...v
        }
      ),
      b && p && /* @__PURE__ */ l.jsx("div", { className: "absolute bottom-2 right-2 text-xs text-neutral-500 bg-white px-1 rounded", children: /* @__PURE__ */ l.jsxs("span", { id: H, className: R ? "text-danger" : "", children: [
        O,
        "/",
        p
      ] }) })
    ] }), g = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      o && a && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger", id: A, children: a }),
      !o && s && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral", id: I, children: s }),
      b && p && !o && !s && /* @__PURE__ */ l.jsxs("p", { className: "mt-1 text-xs text-neutral", id: H, children: [
        O,
        " of ",
        p,
        " characters"
      ] })
    ] });
    return u === "left" ? /* @__PURE__ */ l.jsx("div", { className: F(c ? "w-full" : "inline-block", e), children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-4", children: [
      i && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: S,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            i,
            d && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: F("flex-1", !c && "inline-block"), children: [
        z,
        g
      ] })
    ] }) }) : /* @__PURE__ */ l.jsxs("div", { className: F(c ? "w-full" : "inline-block", e), children: [
      i && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: S,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            i,
            d && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      z,
      g
    ] });
  }
);
kc.displayName = "Textarea";
const Sn = "timepicker-dropdown-opened", Nc = De(
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
), Hs = Ie(
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
    fullWidth: b = !1,
    className: p,
    placeholder: $ = "Select time",
    leftIcon: w,
    rightIcon: k,
    valueFormatter: P,
    closeOnSelect: v = !0,
    ...j
  }, S) => {
    const [I, A] = re(!1), [H, O] = re(e || ""), [R, z] = re(0), [g, T] = re(0), [h, E] = re(!0), _ = ae(null), m = ae(null), y = ae(null), C = `timepicker-${se.useId().replace(/:/g, "")}`, Y = () => {
      if (!I || !m.current || !y.current) return;
      const L = m.current.getBoundingClientRect(), K = y.current, $e = pt().innerHeight - L.bottom;
      K.style.top = `${L.bottom + 4}px`, K.style.bottom = "auto", K.style.left = `${L.left}px`, K.style.maxHeight = `${$e - 8}px`, K.style.width = `${L.width}px`;
    };
    de(() => {
      const L = pt(), K = Ke(), fe = () => {
        I && Y();
      }, $e = () => {
        I && Y();
      }, ye = (Ze) => {
        Ze.detail.id !== C && A(!1);
      }, Ce = (Ze) => {
        const Oe = Ze.target;
        _.current && y.current && !_.current.contains(Oe) && !y.current.contains(Oe) && A(!1);
      };
      return I && (Y(), L.addEventListener("scroll", fe, !0), L.addEventListener("resize", $e)), K.addEventListener(Sn, ye), K.addEventListener("mousedown", Ce), () => {
        L.removeEventListener("scroll", fe, !0), L.removeEventListener("resize", $e), K.removeEventListener(Sn, ye), K.removeEventListener("mousedown", Ce);
      };
    }, [I, C]);
    const D = () => {
      s || (I || Ke().dispatchEvent(
        new CustomEvent(Sn, {
          detail: { id: C }
        })
      ), A(!I));
    };
    de(() => {
      if (e) {
        O(e);
        const [L, K] = e.split(":").map(Number);
        r ? z(L) : (z(L % 12 || 12), E(L < 12)), T(K);
      }
    }, [e, r]);
    const B = () => {
      const K = `${(r || h ? R : R + 12).toString().padStart(2, "0")}:${g.toString().padStart(2, "0")}`;
      O(K), t == null || t(K), v && A(!1);
    }, W = () => r ? Array.from({ length: 24 }, (L, K) => K) : Array.from({ length: 12 }, (L, K) => K + 1), M = () => Array.from({ length: 60 }, (L, K) => K), G = P ? P(H) : H, X = Ke();
    return "body" in X ? /* @__PURE__ */ l.jsxs("div", { ref: _, className: F("relative", b && "w-full", p), children: [
      u && /* @__PURE__ */ l.jsxs(
        "label",
        {
          className: F(
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
          ref: m,
          className: "relative",
          onClick: D,
          children: [
            w && /* @__PURE__ */ l.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ l.jsx(ue, { icon: w, size: 20 }) }),
            /* @__PURE__ */ l.jsx(
              "input",
              {
                ref: S,
                type: "text",
                value: G,
                placeholder: $,
                readOnly: !0,
                className: F(
                  Nc({ variant: n, size: o, rounded: a, fullWidth: b }),
                  w && "pl-10",
                  k && "pr-10",
                  "text-left"
                ),
                disabled: s,
                ...j
              }
            ),
            k && /* @__PURE__ */ l.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ l.jsx(ue, { icon: k, size: 20 }) })
          ]
        }
      ),
      I && Gt(
        /* @__PURE__ */ l.jsx(
          "div",
          {
            ref: y,
            className: "fixed z-[9999] w-fit rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (L) => L.stopPropagation(),
            children: /* @__PURE__ */ l.jsxs("div", { className: "p-0", children: [
              /* @__PURE__ */ l.jsxs(Ms, { variant: "ghost", className: F(
                "flex mx-2 my-1 p-0",
                r ? "justify-start gap-8" : "justify-start gap-4"
              ), children: [
                /* @__PURE__ */ l.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ l.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ l.jsx("div", { className: "flex flex-col gap-2", children: W().map((L) => /* @__PURE__ */ l.jsx(
                  Ye,
                  {
                    variant: "ghost",
                    onClick: () => z(L),
                    className: F(R === L && "bg-primary text-white"),
                    children: L.toString().padStart(2, "0")
                  },
                  L
                )) }) }) }),
                /* @__PURE__ */ l.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ l.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ l.jsx("div", { className: "flex flex-col gap-2", children: M().map((L) => /* @__PURE__ */ l.jsx(
                  Ye,
                  {
                    variant: "ghost",
                    onClick: () => T(L),
                    className: F(g === L && "bg-primary text-white"),
                    children: L.toString().padStart(2, "0")
                  },
                  L
                )) }) }) }),
                !r && /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ l.jsx(
                    Ye,
                    {
                      variant: "ghost",
                      onClick: () => E(!0),
                      className: F(h && "bg-primary text-white"),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    Ye,
                    {
                      variant: "ghost",
                      onClick: () => E(!1),
                      className: F(!h && "bg-primary text-white"),
                      children: "PM"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "mb-2 mx-2", children: /* @__PURE__ */ l.jsx(
                Ye,
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
Hs.displayName = "PrimitiveTimePicker";
const Ec = ({
  value: e,
  onChange: t,
  valueFormatter: r,
  closeOnSelect: n,
  ...o
}) => /* @__PURE__ */ l.jsx(
  Hs,
  {
    value: e,
    onChange: t,
    valueFormatter: r,
    closeOnSelect: n,
    ...o
  }
);
Ec.displayName = "TimePicker";
const Pc = De(
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
), Tc = De(
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
), Sc = Ie(
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
    const b = se.useId(), p = `${b}-helper`, $ = `${b}-error`;
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
            className: F(Pc({ variant: d ? "danger" : r, size: n }), u),
            "aria-describedby": d ? $ : s ? p : void 0,
            "aria-invalid": d,
            "aria-required": a,
            ...c,
            children: /* @__PURE__ */ l.jsx(
              "span",
              {
                "data-state": e ? "checked" : "unchecked",
                className: F(
                  Tc({ size: n }),
                  e ? "translate-x-5" : "translate-x-1"
                )
              }
            )
          }
        ),
        o && /* @__PURE__ */ l.jsxs(
          "label",
          {
            htmlFor: b,
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
Sc.displayName = "Toggle";
const Cc = De(
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
), jc = De("absolute w-2 h-2 transform rotate-45", {
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
}), vm = ({
  content: e,
  children: t,
  position: r = "top",
  delay: n = 0,
  className: o,
  color: a = "light",
  size: s = "md",
  isOpen: i,
  onOpenChange: d,
  trigger: u = "hover"
}) => {
  const [c, f] = re(!1), [b, p] = re({ top: 0, left: 0 }), $ = ae(null), w = ae(null), k = ae(), P = i !== void 0, v = P ? i : c, j = () => {
    if (!$.current || !w.current) return;
    const O = w.current.getBoundingClientRect(), R = $.current.getBoundingClientRect(), z = pt(), g = z.scrollX || z.pageXOffset, T = z.scrollY || z.pageYOffset;
    let h = 0, E = 0;
    const _ = 8;
    switch (r) {
      case "top":
        h = O.top + T - R.height - _, E = O.left + g + (O.width - R.width) / 2;
        break;
      case "bottom":
        h = O.bottom + T + _, E = O.left + g + (O.width - R.width) / 2;
        break;
      case "left":
        h = O.top + T + (O.height - R.height) / 2, E = O.left + g - R.width - _;
        break;
      case "right":
        h = O.top + T + (O.height - R.height) / 2, E = O.right + g + _;
        break;
    }
    const m = z.innerWidth, y = z.innerHeight;
    E < 0 && (E = 0), E + R.width > m && (E = m - R.width), h < 0 && (h = 0), h + R.height > y && (h = y - R.height), p({ top: h, left: E });
  };
  de(() => {
    if (v) {
      j();
      const O = pt();
      O.addEventListener("scroll", j, !0), O.addEventListener("resize", j);
    }
    return () => {
      const O = pt();
      O.removeEventListener("scroll", j, !0), O.removeEventListener("resize", j);
    };
  }, [v, r]);
  const S = () => {
    P ? d == null || d(!0) : k.current = setTimeout(() => {
      f(!0);
    }, n);
  }, I = () => {
    k.current && clearTimeout(k.current), P ? d == null || d(!1) : f(!1);
  }, A = (O) => {
    O.stopPropagation(), u === "click" && (P ? d == null || d(!i) : f(!c));
  };
  de(() => {
    const O = (R) => {
      u === "click" && $.current && !$.current.contains(R.target) && w.current && !w.current.contains(R.target) && I();
    };
    return v && document.addEventListener("click", O), () => {
      document.removeEventListener("click", O);
    };
  }, [v, u]);
  const H = () => {
    if (!v) return null;
    const O = Ke();
    return "body" in O ? Gt(
      /* @__PURE__ */ l.jsxs(
        "div",
        {
          ref: $,
          className: F(Cc({ color: a, size: s }), o),
          style: {
            top: `${b.top}px`,
            left: `${b.left}px`
          },
          children: [
            e,
            /* @__PURE__ */ l.jsx(
              "div",
              {
                className: F(
                  jc({ color: a }),
                  r === "top" && "bottom-[-4px] left-1/2 -translate-x-1/2",
                  r === "bottom" && "top-[-4px] left-1/2 -translate-x-1/2",
                  r === "left" && "right-[-4px] top-1/2 -translate-y-1/2",
                  r === "right" && "left-[-4px] top-1/2 -translate-y-1/2",
                  a === "light" && r === "top" && "border-r border-b border-neutral-200",
                  a === "light" && r === "bottom" && "border-l border-t border-neutral-200",
                  a === "light" && r === "left" && "border-t border-r border-neutral-200",
                  a === "light" && r === "right" && "border-l border-b border-neutral-200"
                )
              }
            )
          ]
        }
      ),
      O.body
    ) : null;
  };
  return /* @__PURE__ */ l.jsx("div", { className: "relative", children: /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: w,
      className: "relative inline-block",
      onMouseEnter: u === "hover" ? S : void 0,
      onMouseLeave: u === "hover" ? I : void 0,
      onClick: A,
      children: [
        t,
        H()
      ]
    }
  ) });
}, Ic = De(
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
), Oc = {
  sm: 24,
  md: 36,
  lg: 48
}, Ac = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  info: "bg-info"
}, _c = {
  primary: "#007C99",
  // Tailwind primary
  secondary: "#CEEAE7",
  success: "#00B37D",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#0EA5E9"
}, Rc = se.forwardRef(
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
    const b = Math.min(Math.max(o, 0), 100), p = Oc[n], $ = n === "sm" ? 2 : n === "md" ? 3 : 4, w = (p - $) / 2, k = 2 * Math.PI * w, P = k - b / 100 * k;
    let v = "";
    return t === "loading" ? v = "rounded-full" : d ? v = d === "none" ? "" : `rounded-${d}` : v = "rounded-md", t === "circular" ? /* @__PURE__ */ l.jsxs("div", { className: "inline-flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "relative", style: { width: p, height: p }, children: [
        /* @__PURE__ */ l.jsxs(
          "svg",
          {
            className: F(
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
                  r: w,
                  cx: p / 2,
                  cy: p / 2
                }
              ),
              /* @__PURE__ */ l.jsx(
                "circle",
                {
                  className: F(
                    "transition-all duration-300 ease-in-out",
                    a ? "animate-dash" : ""
                  ),
                  strokeWidth: $,
                  strokeDasharray: k,
                  strokeDashoffset: a ? 0 : P,
                  strokeLinecap: "round",
                  stroke: _c[r],
                  fill: "transparent",
                  r: w,
                  cx: p / 2,
                  cy: p / 2
                }
              )
            ]
          }
        ),
        u && /* @__PURE__ */ l.jsx("span", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ l.jsx(ue, { icon: u, size: p * 0.5 }) }),
        s && !a && !u && /* @__PURE__ */ l.jsxs("div", { className: "absolute inset-0 flex items-center justify-center text-xs font-medium", children: [
          Math.round(b),
          "%"
        ] })
      ] }),
      i && /* @__PURE__ */ l.jsx("span", { className: "text-sm text-neutral-600", children: i })
    ] }) : /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: f,
          className: F(Ic({ variant: t === "loading" ? "bar" : t, size: n }), v, e),
          role: "progressbar",
          "aria-valuenow": a ? void 0 : b,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...c,
          children: /* @__PURE__ */ l.jsx(
            "div",
            {
              className: F(
                "h-full transition-all duration-300 ease-in-out",
                a ? "animate-progress-indeterminate" : "",
                Ac[r],
                v
              ),
              style: {
                width: a ? "100%" : `${b}%`
              }
            }
          )
        }
      ),
      (s || i) && /* @__PURE__ */ l.jsxs("div", { className: "flex justify-between text-xs text-neutral-600", children: [
        i && /* @__PURE__ */ l.jsx("span", { children: i }),
        s && !a && /* @__PURE__ */ l.jsxs("span", { children: [
          Math.round(b),
          "%"
        ] })
      ] })
    ] });
  }
);
Rc.displayName = "Progress";
const Tt = [
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
], Lc = { version: 4, country_calling_codes: { 1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], 7: ["RU", "KZ"], 20: ["EG"], 27: ["ZA"], 30: ["GR"], 31: ["NL"], 32: ["BE"], 33: ["FR"], 34: ["ES"], 36: ["HU"], 39: ["IT", "VA"], 40: ["RO"], 41: ["CH"], 43: ["AT"], 44: ["GB", "GG", "IM", "JE"], 45: ["DK"], 46: ["SE"], 47: ["NO", "SJ"], 48: ["PL"], 49: ["DE"], 51: ["PE"], 52: ["MX"], 53: ["CU"], 54: ["AR"], 55: ["BR"], 56: ["CL"], 57: ["CO"], 58: ["VE"], 60: ["MY"], 61: ["AU", "CC", "CX"], 62: ["ID"], 63: ["PH"], 64: ["NZ"], 65: ["SG"], 66: ["TH"], 81: ["JP"], 82: ["KR"], 84: ["VN"], 86: ["CN"], 90: ["TR"], 91: ["IN"], 92: ["PK"], 93: ["AF"], 94: ["LK"], 95: ["MM"], 98: ["IR"], 211: ["SS"], 212: ["MA", "EH"], 213: ["DZ"], 216: ["TN"], 218: ["LY"], 220: ["GM"], 221: ["SN"], 222: ["MR"], 223: ["ML"], 224: ["GN"], 225: ["CI"], 226: ["BF"], 227: ["NE"], 228: ["TG"], 229: ["BJ"], 230: ["MU"], 231: ["LR"], 232: ["SL"], 233: ["GH"], 234: ["NG"], 235: ["TD"], 236: ["CF"], 237: ["CM"], 238: ["CV"], 239: ["ST"], 240: ["GQ"], 241: ["GA"], 242: ["CG"], 243: ["CD"], 244: ["AO"], 245: ["GW"], 246: ["IO"], 247: ["AC"], 248: ["SC"], 249: ["SD"], 250: ["RW"], 251: ["ET"], 252: ["SO"], 253: ["DJ"], 254: ["KE"], 255: ["TZ"], 256: ["UG"], 257: ["BI"], 258: ["MZ"], 260: ["ZM"], 261: ["MG"], 262: ["RE", "YT"], 263: ["ZW"], 264: ["NA"], 265: ["MW"], 266: ["LS"], 267: ["BW"], 268: ["SZ"], 269: ["KM"], 290: ["SH", "TA"], 291: ["ER"], 297: ["AW"], 298: ["FO"], 299: ["GL"], 350: ["GI"], 351: ["PT"], 352: ["LU"], 353: ["IE"], 354: ["IS"], 355: ["AL"], 356: ["MT"], 357: ["CY"], 358: ["FI", "AX"], 359: ["BG"], 370: ["LT"], 371: ["LV"], 372: ["EE"], 373: ["MD"], 374: ["AM"], 375: ["BY"], 376: ["AD"], 377: ["MC"], 378: ["SM"], 380: ["UA"], 381: ["RS"], 382: ["ME"], 383: ["XK"], 385: ["HR"], 386: ["SI"], 387: ["BA"], 389: ["MK"], 420: ["CZ"], 421: ["SK"], 423: ["LI"], 500: ["FK"], 501: ["BZ"], 502: ["GT"], 503: ["SV"], 504: ["HN"], 505: ["NI"], 506: ["CR"], 507: ["PA"], 508: ["PM"], 509: ["HT"], 590: ["GP", "BL", "MF"], 591: ["BO"], 592: ["GY"], 593: ["EC"], 594: ["GF"], 595: ["PY"], 596: ["MQ"], 597: ["SR"], 598: ["UY"], 599: ["CW", "BQ"], 670: ["TL"], 672: ["NF"], 673: ["BN"], 674: ["NR"], 675: ["PG"], 676: ["TO"], 677: ["SB"], 678: ["VU"], 679: ["FJ"], 680: ["PW"], 681: ["WF"], 682: ["CK"], 683: ["NU"], 685: ["WS"], 686: ["KI"], 687: ["NC"], 688: ["TV"], 689: ["PF"], 690: ["TK"], 691: ["FM"], 692: ["MH"], 850: ["KP"], 852: ["HK"], 853: ["MO"], 855: ["KH"], 856: ["LA"], 880: ["BD"], 886: ["TW"], 960: ["MV"], 961: ["LB"], 962: ["JO"], 963: ["SY"], 964: ["IQ"], 965: ["KW"], 966: ["SA"], 967: ["YE"], 968: ["OM"], 970: ["PS"], 971: ["AE"], 972: ["IL"], 973: ["BH"], 974: ["QA"], 975: ["BT"], 976: ["MN"], 977: ["NP"], 992: ["TJ"], 993: ["TM"], 994: ["AZ"], 995: ["GE"], 996: ["KG"], 998: ["UZ"] }, countries: { AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]], AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"], AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"], AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"], AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]", "(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:2(?:(?:[0-26-9]\\d|3[0-8]|5[0135-9])\\d|4(?:[02-9]\\d|10))|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90))|7(?:[013-57-9]\\d|2[0-8])\\d)\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"], BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|2[23]"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], BF: ["226", "00", "(?:[025-7]\\d|44)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[024-7]"]]]], BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]], BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], BJ: ["229", "00", "(?:01\\d|[24-689])\\d{7}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["0"]]]], BL: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"], BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], BO: ["591", "00(?:1\\d)?", "8001\\d{5}|(?:[2-467]\\d|50)\\d{6}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[235]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37|86)", "300|4(?:0(?:0|20)|370|864)"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"], BT: ["975", "00", "[178]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-6]|7[246]|8[2-4]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|[78]"]]]], BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], CA: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|33|44|66|77|88)|6(?:22|33))[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CD: ["243", "00", "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["5"], "0$1"]], "0"], CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]], CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], CI: ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], CK: ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["60|809"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:10|[2-9])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-8]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]", "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"], CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["46"]], ["(\\d{3})(\\d{7})", "$1 $2", ["6|90"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|9[14]"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"], CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], CU: ["53", "119", "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|3[13])"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"], DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"], EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"], ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], ES: ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]], ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"], FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{5})", "$1", ["20[2-59]"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], ["(\\d)(\\d{4,9})", "$1 $2", ["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], FK: ["500", "00", "[2-7]\\d{4}", [5]], FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], FO: ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, "0|180020", 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-35])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"], GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], GF: ["594", "00", "(?:[56]94\\d|7093)\\d{5}|(?:80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"], GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0|180020", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"], GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], GM: ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], GP: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], GT: ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"], GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], GY: ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], HR: ["385", "00", "[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}", [7, 8, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], HT: ["509", "00", "[2-589]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], ID: ["62", "00[89]", "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0|180020", "1624$1", 0, "74576|(?:16|7[56])24"], IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], IT: ["39", "00", "0\\d{5,11}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[03]"]]], 0, 0, 0, 0, 0, 0, [["0(?:669[0-79]\\d{1,6}|831\\d{2,8})|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[2356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], ["3[2-8]\\d{9,10}", [11, 12]], 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0|180020", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], JP: ["81", "010", "00[1-9]\\d{6,14}|[25-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]", "3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[25-9]"], "0$1"]], "0", 0, "(000[2569]\\d{4,6})$|(?:(?:003768)0?)|0", "$1"], KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"], KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"], KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33622|7", 0, "8~10"], LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"], LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"], LK: ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], LR: ["231", "00", "(?:[2457]\\d|33|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]], "0"], LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1]], "0", 0, "[08]"], LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], LV: ["371", "00", "(?:[268]\\d|78|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2679]|8[01]"]]]], LY: ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-8]|5[0-5]|8[0-7]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]], MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"], MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], MF: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"], MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], ML: ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|452|678|86", "[12]|452|6788|86"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"], MQ: ["596", "00", "(?:596\\d|7091)\\d{5}|(?:69|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|8(?:0[6-9]|[36])"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"], MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"], MX: ["52", "0[09]", "[2-9]\\d{9}", [10], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], NE: ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[0467]"]]]], NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], NG: ["234", "009", "(?:20|9\\d)\\d{8}|[78]\\d{9,13}", [10, 11, 12, 13, 14], [["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], NR: ["674", "00", "(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[24-9]"]]]], NU: ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], PM: ["508", "00", "[45]\\d{5}|(?:708|8\\d\\d)\\d{6}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[136]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], RE: ["262", "00", "709\\d{6}|(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"], ["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], RO: ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, 0, [["336(?:[013-9]\\d|2[013-9])\\d{5}|(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15-7]|6[0-35-79]|7[1-37-9]))\\d{7}", [10]], ["9\\d{9}", [10]], ["8(?:0[04]|108\\d{3})\\d{7}"], ["80[39]\\d{7}", [10]], ["808\\d{7}", [10]]], "8~10"], RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], SA: ["966", "00", "(?:[15]\\d|800|92)\\d{7}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], SB: ["677", "0[01]", "[6-9]\\d{6}|[1-6]\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]]], SC: ["248", "010|0[0-2]", "(?:[2489]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"], SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|7[67]|9[2-9]"]]], "0"], SR: ["597", "00", "(?:[2-5]|[6-8]\\d|90)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-9]"]]]], SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], SV: ["503", "00", "[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"], SY: ["963", "00", "[1-359]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-4]|5[1-3]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[59]"], "0$1", 1]], "0"], SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"], TD: ["235", "00|16", "(?:22|30|[689]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[236-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], TJ: ["992", "810", "[0-57-9]\\d{8}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], TM: ["993", "810", "(?:[1-6]\\d|71)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"], TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"], US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["3052(?:0[0-8]|[1-9]\\d)\\d{4}|(?:2742|305[3-9])\\d{6}|(?:472|983)[2-47-9]\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[0135-79]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-269])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-247]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, 0, ["305209\\d{4}"]]], UY: ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|2\\d{3,4}|(?:[49]\\d|80)\\d{5}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{4,5})", "$1", ["21"]], ["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], UZ: ["998", "00", "(?:20|33|[5-9]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]]], VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11, 12], 0, 0, 0, 0, 0, 0, "06698"], VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"], VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"], VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"], VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], WF: ["681", "00", "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[47-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], XK: ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"], ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]], "0"], YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], YT: ["262", "00", "7093\\d{5}|(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"], ["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]], ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], ZM: ["260", "00", "800\\d{6}|(?:21|[579]\\d|63)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[579]"], "0$1"]], "0"], ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"] }, nonGeographic: { 800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], 808: ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], 870: ["870", 0, "7\\d{11}|[235-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"], 0, 0, 0, 0, 0, 0, ["2\\d{8}", [9]]]], 878: ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], 881: ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]], 882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, ["348[57]\\d{7}", [11]], 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], 883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], 888: ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], 979: ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };
function Mc(e, t) {
  var r = Array.prototype.slice.call(t);
  return r.push(Lc), e.apply(this, r);
}
function sa(e, t) {
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
var Fc = {}.constructor;
function sr(e) {
  return e != null && e.constructor === Fc;
}
function dr(e) {
  "@babel/helpers - typeof";
  return dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, dr(e);
}
function pn(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Dc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, zc(n.key), n);
  }
}
function gn(e, t, r) {
  return t && Dc(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function zc(e) {
  var t = Gc(e, "string");
  return dr(t) == "symbol" ? t : t + "";
}
function Gc(e, t) {
  if (dr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (dr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Bc = "1.2.0", Vc = "1.7.35", ia = " ext. ", Hc = /^\d+$/, Xe = /* @__PURE__ */ function() {
  function e(t) {
    pn(this, e), Us(t), this.metadata = t, Ks.call(this, t);
  }
  return gn(e, [{
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
      if (r && Hc.test(r) && (n = r, r = null), r && r !== "001") {
        if (!this.hasCountry(r))
          throw new Error("Unknown country: ".concat(r));
        this.numberingPlan = new la(this.getCountryMetadata(r), this);
      } else if (n) {
        if (!this.hasCallingCode(n))
          throw new Error("Unknown calling code: ".concat(n));
        this.numberingPlan = new la(this.getNumberingPlanMetadata(n), this);
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
}(), la = /* @__PURE__ */ function() {
  function e(t, r) {
    pn(this, e), this.globalMetadataObject = r, this.metadata = t, Ks.call(this, r.metadata);
  }
  return gn(e, [{
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
        return new Uc(o, r);
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
      if (this.hasTypes() && da(this.types(), r))
        return new Wc(da(this.types(), r), this);
    }
  }, {
    key: "ext",
    value: function() {
      return this.v1 || this.v2 ? ia : this.metadata[13] || ia;
    }
  }]);
}(), Uc = /* @__PURE__ */ function() {
  function e(t, r) {
    pn(this, e), this._format = t, this.metadata = r;
  }
  return gn(e, [{
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
      !Kc.test(this.nationalPrefixFormattingRule()));
    }
  }, {
    key: "internationalFormat",
    value: function() {
      return this._format[5] || this.format();
    }
  }]);
}(), Kc = /^\(?\$1\)?$/, Wc = /* @__PURE__ */ function() {
  function e(t, r) {
    pn(this, e), this.type = t, this.metadata = r;
  }
  return gn(e, [{
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
function da(e, t) {
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
function Us(e) {
  if (!e)
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  if (!sr(e) || !sr(e.countries))
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(sr(e) ? "an object of shape: { " + Object.keys(e).join(", ") + " }" : "a " + Yc(e) + ": " + e, "."));
}
var Yc = function(t) {
  return dr(t);
};
function xo(e, t) {
  if (t = new Xe(t), t.hasCountry(e))
    return t.selectNumberingPlan(e).countryCallingCode();
  throw new Error("Unknown country: ".concat(e));
}
function Xc(e, t) {
  return t.countries.hasOwnProperty(e);
}
function Ks(e) {
  var t = e.version;
  typeof t == "number" ? (this.v1 = t === 1, this.v2 = t === 2, this.v3 = t === 3, this.v4 = t === 4) : t ? sa(t, Bc) === -1 ? this.v2 = !0 : sa(t, Vc) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0;
}
function wo(e, t, r) {
  return Zc(e, t, void 0, r);
}
function Zc(e, t, r, n) {
  t && (n = new Xe(n.metadata), n.selectNumberingPlan(t));
  var o = n.type(r), a = o && o.possibleLengths() || n.possibleLengths();
  if (!a)
    return "IS_POSSIBLE";
  var s = e.length, i = a[0];
  return i === s ? "IS_POSSIBLE" : i > s ? "TOO_SHORT" : a[a.length - 1] < s ? "TOO_LONG" : a.indexOf(s, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
function qc(e, t, r) {
  if (t === void 0 && (t = {}), r = new Xe(r), t.v2) {
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
    return Ws(e.phone || e.nationalNumber, e.country, r);
  if (e.countryCallingCode && r.isNonGeographicCallingCode(e.countryCallingCode))
    return !0;
  throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
}
function Ws(e, t, r) {
  switch (wo(e, t, r)) {
    case "IS_POSSIBLE":
      return !0;
    default:
      return !1;
  }
}
function It(e, t) {
  return e = e || "", new RegExp("^(?:" + t + ")$").test(e);
}
function Jc(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Qc(e)) || t) {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qc(e, t) {
  if (e) {
    if (typeof e == "string") return ca(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ca(e, t) : void 0;
  }
}
function ca(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var eu = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function ko(e, t, r) {
  if (t = t || {}, !(!e.country && !e.countryCallingCode)) {
    r = new Xe(r), r.selectNumberingPlan(e.country, e.countryCallingCode);
    var n = t.v2 ? e.nationalNumber : e.phone;
    if (It(n, r.nationalNumberPattern())) {
      if (Cn(n, "FIXED_LINE", r))
        return r.type("MOBILE") && r.type("MOBILE").pattern() === "" || !r.type("MOBILE") || Cn(n, "MOBILE", r) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
      for (var o = Jc(eu), a; !(a = o()).done; ) {
        var s = a.value;
        if (Cn(n, s, r))
          return s;
      }
    }
  }
}
function Cn(e, t, r) {
  return t = r.type(t), !t || !t.pattern() || t.possibleLengths() && t.possibleLengths().indexOf(e.length) < 0 ? !1 : It(e, t.pattern());
}
function tu(e, t, r) {
  if (t = t || {}, r = new Xe(r), r.selectNumberingPlan(e.country, e.countryCallingCode), r.hasTypes())
    return ko(e, t, r.metadata) !== void 0;
  var n = t.v2 ? e.nationalNumber : e.phone;
  return It(n, r.nationalNumberPattern());
}
function ru(e, t, r) {
  var n = new Xe(r), o = n.getCountryCodesForCallingCode(e);
  return o ? o.filter(function(a) {
    return nu(t, a, r);
  }) : [];
}
function nu(e, t, r) {
  var n = new Xe(r);
  return n.selectNumberingPlan(t), n.numberingPlan.possibleLengths().indexOf(e.length) >= 0;
}
var No = 2, ou = 17, au = 3, mt = "0-9０-９٠-٩۰-۹", su = "-‐-―−ー－", iu = "／/", lu = "．.", du = "  ­​⁠　", cu = "()（）［］\\[\\]", uu = "~⁓∼～", tn = "".concat(su).concat(iu).concat(lu).concat(du).concat(cu).concat(uu), Eo = "+＋", fu = new RegExp("([" + mt + "])");
function pu(e, t, r, n) {
  if (t) {
    var o = new Xe(n);
    o.selectNumberingPlan(t, r);
    var a = new RegExp(o.IDDPrefix());
    if (e.search(a) === 0) {
      e = e.slice(e.match(a)[0].length);
      var s = e.match(fu);
      if (!(s && s[1] != null && s[1].length > 0 && s[1] === "0"))
        return e;
    }
  }
}
function gu(e, t) {
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
function mu(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = bu(e)) || t) {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bu(e, t) {
  if (e) {
    if (typeof e == "string") return ua(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ua(e, t) : void 0;
  }
}
function ua(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function hu(e, t) {
  var r = t.countries, n = t.metadata;
  n = new Xe(n);
  for (var o = mu(r), a; !(a = o()).done; ) {
    var s = a.value;
    if (n.selectNumberingPlan(s), n.leadingDigits()) {
      if (e && e.search(n.leadingDigits()) === 0)
        return s;
    } else if (ko({
      phone: e,
      country: s
    }, void 0, n.metadata))
      return s;
  }
}
function Ys(e, t) {
  var r = t.nationalNumber, n = t.metadata, o = n.getCountryCodesForCallingCode(e);
  if (o)
    return o.length === 1 ? o[0] : hu(r, {
      countries: o,
      metadata: n.metadata
    });
}
function Un(e, t, r) {
  var n = gu(e, r), o = n.carrierCode, a = n.nationalNumber;
  if (a !== e) {
    if (!$u(e, a, r))
      return {
        nationalNumber: e
      };
    if (r.numberingPlan.possibleLengths() && (t || (t = Ys(r.numberingPlan.callingCode(), {
      nationalNumber: a,
      metadata: r
    })), !vu(a, t, r)))
      return {
        nationalNumber: e
      };
  }
  return {
    nationalNumber: a,
    carrierCode: o
  };
}
function $u(e, t, r) {
  return !(It(e, r.nationalNumberPattern()) && !It(t, r.nationalNumberPattern()));
}
function vu(e, t, r) {
  switch (wo(e, t, r)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return !1;
    default:
      return !0;
  }
}
function yu(e, t, r, n, o) {
  var a = r ? xo(r, o) : n;
  if (e.indexOf(a) === 0) {
    o = new Xe(o), o.selectNumberingPlan(r, a);
    var s = e.slice(a.length), i = Un(s, t, o), d = i.nationalNumber, u = Un(e, t, o), c = u.nationalNumber;
    if (!It(c, o.nationalNumberPattern()) && It(d, o.nationalNumberPattern()) || wo(c, t, o) === "TOO_LONG")
      return {
        countryCallingCode: a,
        number: s
      };
  }
  return {
    number: e
  };
}
function Xs(e, t, r, n, o) {
  if (!e)
    return {};
  var a;
  if (e[0] !== "+") {
    var s = pu(e, r, n, o);
    if (s && s !== e)
      a = !0, e = "+" + s;
    else {
      if (r || n) {
        var i = yu(e, t, r, n, o), d = i.countryCallingCode, u = i.number;
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
  o = new Xe(o);
  for (var c = 2; c - 1 <= au && c <= e.length; ) {
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
function xu(e) {
  return e.replace(new RegExp("[".concat(tn, "]+"), "g"), " ").trim();
}
var wu = /(\$\d)/;
function ku(e, t, r) {
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
    o && t.nationalPrefixFormattingRule() ? t.format().replace(wu, t.nationalPrefixFormattingRule()) : t.format()
  ));
  return n ? xu(a) : a;
}
var Nu = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function Eu(e, t, r) {
  var n = new Xe(r);
  if (n.selectNumberingPlan(e, t), n.defaultIDDPrefix())
    return n.defaultIDDPrefix();
  if (Nu.test(n.IDDPrefix()))
    return n.IDDPrefix();
}
var Pu = ";ext=", Qt = function(t) {
  return "([".concat(mt, "]{1,").concat(t, "})");
};
function Zs(e) {
  var t = "20", r = "15", n = "9", o = "6", a = "[  \\t,]*", s = "[:\\.．]?[  \\t,-]*", i = "#?", d = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)", u = "(?:[xｘ#＃~～]|int|ｉｎｔ)", c = "[- ]+", f = "[  \\t]*", b = "(?:,{2}|;)", p = Pu + Qt(t), $ = a + d + s + Qt(t) + i, w = a + u + s + Qt(n) + i, k = c + Qt(o) + "#", P = f + b + s + Qt(r) + i, v = f + "(?:,)+" + s + Qt(n) + i;
  return p + "|" + $ + "|" + w + "|" + k + "|" + P + "|" + v;
}
var Tu = "[" + mt + "]{" + No + "}", Su = "[" + Eo + "]{0,1}(?:[" + tn + "]*[" + mt + "]){3,}[" + tn + mt + "]*", Cu = new RegExp("^[" + Eo + "]{0,1}(?:[" + tn + "]*[" + mt + "]){1,2}$", "i"), ju = Su + // Phone number extensions
"(?:" + Zs() + ")?", Iu = new RegExp(
  // Either a short two-digit-only phone number
  "^" + Tu + "$|^" + ju + "$",
  "i"
);
function Ou(e) {
  return e.length >= No && Iu.test(e);
}
function Au(e) {
  return Cu.test(e);
}
function _u(e) {
  var t = e.number, r = e.ext;
  if (!t)
    return "";
  if (t[0] !== "+")
    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  return "tel:".concat(t).concat(r ? ";ext=" + r : "");
}
var fa = {
  formatExtension: function(t, r, n) {
    return "".concat(t).concat(n.ext()).concat(r);
  }
};
function Ru(e, t, r, n) {
  if (r ? r = Fu({}, fa, r) : r = fa, n = new Xe(n), e.country && e.country !== "001") {
    if (!n.hasCountry(e.country))
      throw new Error("Unknown country: ".concat(e.country));
    n.selectNumberingPlan(e.country);
  } else if (e.countryCallingCode)
    n.selectNumberingPlan(e.countryCallingCode);
  else return e.phone || "";
  var o = n.countryCallingCode(), a = r.v2 ? e.nationalNumber : e.phone, s;
  switch (t) {
    case "NATIONAL":
      return a ? (s = rn(a, e.carrierCode, "NATIONAL", n, r), jn(s, e.ext, n, r.formatExtension)) : "";
    case "INTERNATIONAL":
      return a ? (s = rn(a, null, "INTERNATIONAL", n, r), s = "+".concat(o, " ").concat(s), jn(s, e.ext, n, r.formatExtension)) : "+".concat(o);
    case "E.164":
      return "+".concat(o).concat(a);
    case "RFC3966":
      return _u({
        number: "+".concat(o).concat(a),
        ext: e.ext
      });
    case "IDD":
      if (!r.fromCountry)
        return;
      var i = Mu(a, e.carrierCode, o, r.fromCountry, n);
      return jn(i, e.ext, n, r.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(t, '"'));
  }
}
function rn(e, t, r, n, o) {
  var a = Lu(n.formats(), e);
  return a ? ku(e, a, {
    useInternationalFormat: r === "INTERNATIONAL",
    withNationalPrefix: !(a.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && o && o.nationalPrefix === !1)
  }) : e;
}
function Lu(e, t) {
  return Du(e, function(r) {
    if (r.leadingDigitsPatterns().length > 0) {
      var n = r.leadingDigitsPatterns()[r.leadingDigitsPatterns().length - 1];
      if (t.search(n) !== 0)
        return !1;
    }
    return It(t, r.pattern());
  });
}
function jn(e, t, r, n) {
  return t ? n(e, t, r) : e;
}
function Mu(e, t, r, n, o) {
  var a = xo(n, o.metadata);
  if (a === r) {
    var s = rn(e, t, "NATIONAL", o);
    return r === "1" ? r + " " + s : s;
  }
  var i = Eu(n, void 0, o.metadata);
  if (i)
    return "".concat(i, " ").concat(r, " ").concat(rn(e, null, "INTERNATIONAL", o));
}
function Fu() {
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
function Du(e, t) {
  for (var r = 0; r < e.length; ) {
    if (t(e[r]))
      return e[r];
    r++;
  }
}
function Ir(e) {
  "@babel/helpers - typeof";
  return Ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ir(e);
}
function pa(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ga(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pa(Object(r), !0).forEach(function(n) {
      zu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pa(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zu(e, t, r) {
  return (t = qs(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Gu(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Bu(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, qs(n.key), n);
  }
}
function Vu(e, t, r) {
  return t && Bu(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function qs(e) {
  var t = Hu(e, "string");
  return Ir(t) == "symbol" ? t : t + "";
}
function Hu(e, t) {
  if (Ir(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ir(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Uu = /* @__PURE__ */ function() {
  function e(t, r, n) {
    if (Gu(this, e), !t)
      throw new TypeError("First argument is required");
    if (typeof t != "string")
      throw new TypeError("First argument must be a string");
    if (t[0] === "+" && !r)
      throw new TypeError("`metadata` argument not passed");
    if (sr(r) && sr(r.countries)) {
      n = r;
      var o = t;
      if (!Yu.test(o))
        throw new Error('Invalid `number` argument passed: must consist of a "+" followed by digits');
      var a = Xs(o, void 0, void 0, void 0, n), s = a.countryCallingCode, i = a.number;
      if (r = i, t = s, !r)
        throw new Error("Invalid `number` argument passed: too short");
    }
    if (!r)
      throw new TypeError("`nationalNumber` argument is required");
    if (typeof r != "string")
      throw new TypeError("`nationalNumber` argument must be a string");
    Us(n);
    var d = Wu(t, n), u = d.country, c = d.countryCallingCode;
    this.country = u, this.countryCallingCode = c, this.nationalNumber = r, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
      return n;
    };
  }
  return Vu(e, [{
    key: "setExt",
    value: function(r) {
      this.ext = r;
    }
  }, {
    key: "getPossibleCountries",
    value: function() {
      return this.country ? [this.country] : ru(this.countryCallingCode, this.nationalNumber, this.getMetadata());
    }
  }, {
    key: "isPossible",
    value: function() {
      return qc(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isValid",
    value: function() {
      return tu(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isNonGeographic",
    value: function() {
      var r = new Xe(this.getMetadata());
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
      return ko(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "format",
    value: function(r, n) {
      return Ru(this, r, n ? ga(ga({}, n), {}, {
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
}(), Ku = function(t) {
  return /^[A-Z]{2}$/.test(t);
};
function Wu(e, t) {
  var r, n, o = new Xe(t);
  return Ku(e) ? (r = e, o.selectNumberingPlan(r), n = o.countryCallingCode()) : n = e, {
    country: r,
    countryCallingCode: n
  };
}
var Yu = /^\+\d+$/;
function Kn(e) {
  "@babel/helpers - typeof";
  return Kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Kn(e);
}
function Xu(e, t, r) {
  return Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Zu(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function qu(e, t, r) {
  return t = Ar(t), Ju(e, Po() ? Reflect.construct(t, r || [], Ar(e).constructor) : t.apply(e, r));
}
function Ju(e, t) {
  if (t && (Kn(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Qu(e);
}
function Qu(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ef(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Or(e, t);
}
function Wn(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Wn = function(n) {
    if (n === null || !rf(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(n)) return t.get(n);
      t.set(n, o);
    }
    function o() {
      return tf(n, arguments, Ar(this).constructor);
    }
    return o.prototype = Object.create(n.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), Or(o, n);
  }, Wn(e);
}
function tf(e, t, r) {
  if (Po()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var o = new (e.bind.apply(e, n))();
  return r && Or(o, r.prototype), o;
}
function Po() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Po = function() {
    return !!e;
  })();
}
function rf(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Or(e, t) {
  return Or = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Or(e, t);
}
function Ar(e) {
  return Ar = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Ar(e);
}
var St = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return Zu(this, t), n = qu(this, t, [r]), Object.setPrototypeOf(n, t.prototype), n.name = n.constructor.name, n;
  }
  return ef(t, e), Xu(t);
}(/* @__PURE__ */ Wn(Error)), ma = new RegExp("(?:" + Zs() + ")$", "i");
function nf(e) {
  var t = e.search(ma);
  if (t < 0)
    return {};
  for (var r = e.slice(0, t), n = e.match(ma), o = 1; o < n.length; ) {
    if (n[o])
      return {
        number: r,
        ext: n[o]
      };
    o++;
  }
}
var of = {
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
function af(e) {
  return of[e];
}
function sf(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = lf(e)) || t) {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lf(e, t) {
  if (e) {
    if (typeof e == "string") return ba(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ba(e, t) : void 0;
  }
}
function ba(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ha(e) {
  for (var t = "", r = sf(e.split("")), n; !(n = r()).done; ) {
    var o = n.value;
    t += df(o, t) || "";
  }
  return t;
}
function df(e, t, r) {
  return e === "+" ? t ? void 0 : "+" : af(e);
}
var Js = "+", cf = "[\\-\\.\\(\\)]?", $a = "([" + mt + "]|" + cf + ")", uf = "^\\" + Js + $a + "*[" + mt + "]" + $a + "*$", ff = new RegExp(uf, "g"), Yn = mt, pf = "[" + Yn + "]+((\\-)*[" + Yn + "])*", gf = "a-zA-Z", mf = "[" + gf + "]+((\\-)*[" + Yn + "])*", bf = "^(" + pf + "\\.)*" + mf + "\\.?$", hf = new RegExp(bf, "g"), va = "tel:", Xn = ";phone-context=", $f = ";isub=";
function vf(e) {
  var t = e.indexOf(Xn);
  if (t < 0)
    return null;
  var r = t + Xn.length;
  if (r >= e.length)
    return "";
  var n = e.indexOf(";", r);
  return n >= 0 ? e.substring(r, n) : e.substring(r);
}
function yf(e) {
  return e === null ? !0 : e.length === 0 ? !1 : ff.test(e) || hf.test(e);
}
function xf(e, t) {
  var r = t.extractFormattedPhoneNumber, n = vf(e);
  if (!yf(n))
    throw new St("NOT_A_NUMBER");
  var o;
  if (n === null)
    o = r(e) || "";
  else {
    o = "", n.charAt(0) === Js && (o += n);
    var a = e.indexOf(va), s;
    a >= 0 ? s = a + va.length : s = 0;
    var i = e.indexOf(Xn);
    o += e.substring(s, i);
  }
  var d = o.indexOf($f);
  if (d > 0 && (o = o.substring(0, d)), o !== "")
    return o;
}
var wf = 250, kf = new RegExp("[" + Eo + mt + "]"), Nf = new RegExp("[^" + mt + "#]+$");
function Ef(e, t, r) {
  if (t = t || {}, r = new Xe(r), t.defaultCountry && !r.hasCountry(t.defaultCountry))
    throw t.v2 ? new St("INVALID_COUNTRY") : new Error("Unknown country: ".concat(t.defaultCountry));
  var n = Tf(e, t.v2, t.extract), o = n.number, a = n.ext, s = n.error;
  if (!o) {
    if (t.v2)
      throw s === "TOO_SHORT" ? new St("TOO_SHORT") : new St("NOT_A_NUMBER");
    return {};
  }
  var i = Cf(o, t.defaultCountry, t.defaultCallingCode, r), d = i.country, u = i.nationalNumber, c = i.countryCallingCode, f = i.countryCallingCodeSource, b = i.carrierCode;
  if (!r.hasSelectedNumberingPlan()) {
    if (t.v2)
      throw new St("INVALID_COUNTRY");
    return {};
  }
  if (!u || u.length < No) {
    if (t.v2)
      throw new St("TOO_SHORT");
    return {};
  }
  if (u.length > ou) {
    if (t.v2)
      throw new St("TOO_LONG");
    return {};
  }
  if (t.v2) {
    var p = new Uu(c, u, r.metadata);
    return d && (p.country = d), b && (p.carrierCode = b), a && (p.ext = a), p.__countryCallingCodeSource = f, p;
  }
  var $ = (t.extended ? r.hasSelectedNumberingPlan() : d) ? It(u, r.nationalNumberPattern()) : !1;
  return t.extended ? {
    country: d,
    countryCallingCode: c,
    carrierCode: b,
    valid: $,
    possible: $ ? !0 : !!(t.extended === !0 && r.possibleLengths() && Ws(u, d, r)),
    phone: u,
    ext: a
  } : $ ? Sf(d, u, a) : {};
}
function Pf(e, t, r) {
  if (e) {
    if (e.length > wf) {
      if (r)
        throw new St("TOO_LONG");
      return;
    }
    if (t === !1)
      return e;
    var n = e.search(kf);
    if (!(n < 0))
      return e.slice(n).replace(Nf, "");
  }
}
function Tf(e, t, r) {
  var n = xf(e, {
    extractFormattedPhoneNumber: function(s) {
      return Pf(s, r, t);
    }
  });
  if (!n)
    return {};
  if (!Ou(n))
    return Au(n) ? {
      error: "TOO_SHORT"
    } : {};
  var o = nf(n);
  return o.ext ? o : {
    number: n
  };
}
function Sf(e, t, r) {
  var n = {
    country: e,
    phone: t
  };
  return r && (n.ext = r), n;
}
function Cf(e, t, r, n) {
  var o = Xs(ha(e), void 0, t, r, n.metadata), a = o.countryCallingCodeSource, s = o.countryCallingCode, i = o.number, d;
  if (s)
    n.selectNumberingPlan(s);
  else if (i && (t || r))
    n.selectNumberingPlan(t, r), t && (d = t), s = r || xo(t, n.metadata);
  else return {};
  if (!i)
    return {
      countryCallingCodeSource: a,
      countryCallingCode: s
    };
  var u = Un(ha(i), d, n), c = u.nationalNumber, f = u.carrierCode, b = Ys(s, {
    nationalNumber: c,
    metadata: n
  });
  return b && (d = b, b === "001" || n.selectNumberingPlan(d)), {
    country: d,
    countryCallingCode: s,
    countryCallingCodeSource: a,
    nationalNumber: c,
    carrierCode: f
  };
}
function _r(e) {
  "@babel/helpers - typeof";
  return _r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _r(e);
}
function ya(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ya(Object(r), !0).forEach(function(n) {
      jf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ya(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jf(e, t, r) {
  return (t = If(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function If(e) {
  var t = Of(e, "string");
  return _r(t) == "symbol" ? t : t + "";
}
function Of(e, t) {
  if (_r(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_r(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Af(e, t, r) {
  return Ef(e, xa(xa({}, t), {}, {
    v2: !0
  }), r);
}
function Rr(e) {
  "@babel/helpers - typeof";
  return Rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rr(e);
}
function wa(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wa(Object(r), !0).forEach(function(n) {
      Rf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wa(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Rf(e, t, r) {
  return (t = Lf(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Lf(e) {
  var t = Mf(e, "string");
  return Rr(t) == "symbol" ? t : t + "";
}
function Mf(e, t) {
  if (Rr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Rr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ff(e, t) {
  return Bf(e) || Gf(e, t) || zf(e, t) || Df();
}
function Df() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zf(e, t) {
  if (e) {
    if (typeof e == "string") return ka(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ka(e, t) : void 0;
  }
}
function ka(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Gf(e, t) {
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
function Bf(e) {
  if (Array.isArray(e)) return e;
}
function Vf(e) {
  var t = Array.prototype.slice.call(e), r = Ff(t, 4), n = r[0], o = r[1], a = r[2], s = r[3], i, d, u;
  if (typeof n == "string")
    i = n;
  else throw new TypeError("A text for parsing must be a string.");
  if (!o || typeof o == "string")
    s ? (d = a, u = s) : (d = void 0, u = a), o && (d = _f({
      defaultCountry: o
    }, d));
  else if (sr(o))
    a ? (d = o, u = a) : u = o;
  else throw new Error("Invalid second argument: ".concat(o));
  return {
    text: i,
    options: d,
    metadata: u
  };
}
function Lr(e) {
  "@babel/helpers - typeof";
  return Lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lr(e);
}
function Na(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ea(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Na(Object(r), !0).forEach(function(n) {
      Hf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Na(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Hf(e, t, r) {
  return (t = Uf(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Uf(e) {
  var t = Kf(e, "string");
  return Lr(t) == "symbol" ? t : t + "";
}
function Kf(e, t) {
  if (Lr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Lr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Wf(e, t, r) {
  t && t.defaultCountry && !Xc(t.defaultCountry, r) && (t = Ea(Ea({}, t), {}, {
    defaultCountry: void 0
  }));
  try {
    return Af(e, t, r);
  } catch (n) {
    if (!(n instanceof St)) throw n;
  }
}
function Yf() {
  var e = Vf(arguments), t = e.text, r = e.options, n = e.metadata;
  return Wf(t, r, n);
}
function Qs() {
  return Mc(Yf, arguments);
}
function Xf(e) {
  var o;
  const t = Qs(e);
  if (!t) return null;
  const r = (o = t.country) == null ? void 0 : o.toLowerCase(), n = Tt.find((a) => a.iso === r);
  return n ? {
    ...n,
    formatted: t.formatInternational(),
    isValid: t.isValid()
  } : null;
}
function Zf(e) {
  var n;
  const t = Qs(e);
  if (!t) return null;
  const r = (n = t.country) == null ? void 0 : n.toLowerCase();
  return Tt.find((o) => o.iso === r) || null;
}
const qf = De(
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
), Dr = (e) => {
  if (!e) return null;
  const t = e.startsWith("+") ? e : `+${e}`;
  return Zf(t);
}, Jf = (e) => e.startsWith("0") && e.length >= 9 && e.length <= 12 ? "+62" + e.slice(1) : e, Qf = (e) => e.startsWith("0") && e.length >= 3, ei = Ie(
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
    disabled: b = !1,
    defaultCountry: p = "id",
    placeholder: $ = "Enter phone number",
    autoDetect: w = !0,
    ...k
  }, P) => {
    const [v, j] = re(!1), [S, I] = re(
      () => Tt.find((M) => M.iso === p) || Tt[0]
    ), [A, H] = re(""), [O, R] = re(() => {
      if (w && c) {
        const G = Dr(c);
        return G && I(G), c;
      }
      const M = S.code;
      return c.startsWith(M) ? c.slice(M.length) : c;
    });
    de(() => {
      if (c && f)
        if (w) {
          const M = Dr(c);
          if (M) {
            const G = {
              iso: M.iso,
              code: M.code.replace("+", "")
            };
            f(c, G);
          } else
            f(c);
        } else {
          const M = {
            iso: S.iso,
            code: S.code.replace("+", "")
          };
          f(c, M);
        }
    }, []);
    const [z, g] = re(() => w && c ? !!Dr(c) : !1), T = ae(null), h = ae(null), E = se.useId(), _ = `${E}-helper`, m = `${E}-error`, y = Tt.filter(
      (M) => M.name.toLowerCase().includes(A.toLowerCase()) || M.code.includes(A)
    ), N = ae(null), C = () => {
      if (v && T.current && h.current) {
        const M = T.current.getBoundingClientRect(), G = h.current, X = typeof window < "u" ? window : { innerHeight: 0 }, L = X.innerHeight - M.bottom, K = M.top, $e = M.bottom + (G.offsetHeight || 0) + 4 >= X.innerHeight, ye = K > L, Ce = $e && ye;
        G.style.position = "fixed", G.style.left = `${M.left}px`, G.style.minWidth = `${M.width}px`, G.style.maxWidth = "340px", G.style.width = "auto", Ce ? (G.style.bottom = `${X.innerHeight - M.top + 4}px`, G.style.top = "auto", G.style.maxHeight = `${K - 8}px`) : (G.style.top = `${M.bottom + 4}px`, G.style.bottom = "auto", G.style.maxHeight = `${L - 8}px`);
      }
    };
    de(() => {
      const M = typeof window < "u" ? window : void 0, G = () => {
        v && C();
      }, X = () => {
        v && C();
      };
      return v && (C(), M == null || M.addEventListener("scroll", G, !0), M == null || M.addEventListener("resize", X)), () => {
        M == null || M.removeEventListener("scroll", G, !0), M == null || M.removeEventListener("resize", X);
      };
    }, [v]), de(() => {
      if (!v) return;
      const M = (G) => {
        const X = G.target;
        T.current && h.current && !T.current.contains(X) && !h.current.contains(X) && j(!1);
      };
      return document.addEventListener("click", M), () => document.removeEventListener("click", M);
    }, [v]);
    const Y = (M) => {
      if (I(M), j(!1), H(""), w) {
        const G = M.code + O.replace(/^\+?\d*/, "");
        R(G);
        const X = G.replace(/[^\d]/g, ""), L = {
          iso: M.iso,
          code: M.code.replace("+", "")
        };
        f == null || f(X, L);
      } else {
        const X = (M.code + O).replace(/[^\d]/g, ""), L = {
          iso: M.iso,
          code: M.code.replace("+", "")
        };
        f == null || f(X, L);
      }
    }, D = (M) => {
      const G = M.target.value;
      if (/^[+\d]*$/.test(G))
        if (w && G.startsWith("+")) {
          const L = Dr(G);
          if (L) {
            I(L), g(!0), R(G);
            const K = G.replace(/[^\d]/g, ""), fe = {
              iso: L.iso,
              code: L.code.replace("+", "")
            };
            f == null || f(K, fe);
          } else {
            R(G), g(!1);
            const K = G.replace(/[^\d]/g, "");
            f == null || f(K);
          }
        } else if (w && !G.startsWith("+") && G.length > 0) {
          const L = Jf(G);
          if (L !== G) {
            R(L), I(
              Tt.find(($e) => $e.iso === "id") || Tt[0]
            ), g(!0);
            const K = L.replace(/[^\d]/g, ""), fe = {
              iso: "id",
              code: "62"
            };
            f == null || f(K, fe);
          } else if (Qf(G)) {
            const K = "+62" + G.slice(1);
            R(K), I(
              Tt.find((ye) => ye.iso === "id") || Tt[0]
            ), g(!0);
            const fe = K.replace(/[^\d]/g, ""), $e = {
              iso: "id",
              code: "62"
            };
            f == null || f(fe, $e);
          } else if (G.startsWith("0"))
            R(G), g(!1);
          else {
            const K = "+" + G;
            R(K);
            const fe = K.replace(/[^\d]/g, "");
            f == null || f(fe);
          }
        } else {
          const L = G.replace(/[^\d]/g, "");
          R(L);
          const fe = (S.code + L).replace(/[^\d]/g, ""), $e = {
            iso: S.iso,
            code: S.code.replace("+", "")
          };
          f == null || f(fe, $e);
        }
    }, B = F(
      qf({
        variant: o ? "error" : t,
        size: r,
        rounded: n,
        fullWidth: u
      }),
      "!w-full"
    ), W = !w || w && z;
    return $o(P, () => N.current, []), /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: N,
        className: F(u ? "w-full" : "inline-block", e),
        ...k,
        children: [
          i && /* @__PURE__ */ l.jsxs("label", { htmlFor: E, className: "mb-1.5 block text-sm text-neutral-900", children: [
            i,
            d && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: F("relative", !u && "inline-block"), children: [
            /* @__PURE__ */ l.jsxs("div", { className: "flex", children: [
              W && /* @__PURE__ */ l.jsxs(
                "button",
                {
                  type: "button",
                  ref: T,
                  onClick: () => !b && j(!v),
                  className: F(
                    B,
                    "flex items-center gap-2 rounded-r-none justify-between",
                    w ? "max-w-[60px]" : "max-w-[100px]",
                    b && "cursor-not-allowed opacity-50"
                  ),
                  children: [
                    /* @__PURE__ */ l.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ l.jsx(ue, { icon: S.flag, className: "w-5 h-5" }),
                      !w && /* @__PURE__ */ l.jsx("span", { className: "text-sm", children: S.code })
                    ] }),
                    /* @__PURE__ */ l.jsx(
                      ue,
                      {
                        icon: "mdi:chevron-down",
                        className: F("transition-transform", v && "rotate-180")
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ l.jsx(
                "input",
                {
                  type: "tel",
                  id: E,
                  value: O,
                  onChange: D,
                  disabled: b,
                  className: F(
                    B,
                    W ? "rounded-l-none" : `rounded-l-${n}`,
                    "flex-1 min-w-0 w-full"
                  ),
                  placeholder: w ? "e.g. +6281234567890" : $
                }
              )
            ] }),
            v && Gt(
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
                        value: A,
                        onChange: (M) => {
                          const G = M.target.value;
                          /^[a-zA-Z0-9\s]*$/.test(G) && H(G);
                        },
                        placeholder: "Search countries...",
                        className: "w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:border-primary-300"
                      }
                    ) }),
                    /* @__PURE__ */ l.jsx("div", { className: "max-h-[300px] overflow-y-auto", children: y.map((M) => /* @__PURE__ */ l.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => Y(M),
                        className: F(
                          "w-full px-3 py-2 text-sm text-left hover:bg-primary-50 cursor-pointer",
                          S.iso === M.iso && "bg-primary-50"
                        ),
                        children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ l.jsx(ue, { icon: M.flag, className: "w-5 h-5" }),
                          /* @__PURE__ */ l.jsx("span", { className: "text-sm font-medium", children: M.code }),
                          /* @__PURE__ */ l.jsx("span", { className: "text-sm text-neutral-600", children: M.name })
                        ] })
                      },
                      M.iso + M.code
                    )) })
                  ]
                }
              ),
              typeof document < "u" ? document.body : document
            )
          ] }),
          o && a && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger", id: m, children: a }),
          !o && s && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral", id: _, children: s })
        ]
      }
    );
  }
);
ei.displayName = "PhoneInput";
const ym = () => {
  const [e, t] = re(""), [r, n] = re(null), o = (a) => {
    t(a);
    const s = Xf(`+${a}`);
    n(s);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "p-6 max-w-md mx-auto", children: [
    /* @__PURE__ */ l.jsx("h2", { className: "text-xl font-semibold mb-4", children: "Phone Input with libphonenumber-js Integration" }),
    /* @__PURE__ */ l.jsx(
      ei,
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
};
function To(e = {}) {
  const {
    strict: t = !0,
    errorMessage: r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: n
  } = e, o = Xo.createContext(void 0);
  o.displayName = n;
  function a() {
    var s;
    const i = Xo.useContext(o);
    if (!i && t) {
      const d = new Error(r);
      throw d.name = "ContextError", (s = Error.captureStackTrace) == null || s.call(Error, d, a), d;
    }
    return i;
  }
  return [o.Provider, a, o];
}
function ti(e) {
  const t = ae(null);
  return $o(e, () => t.current), t;
}
process.env.NODE_ENV;
process.env.NODE_ENV;
var ct = (e) => e ? "true" : void 0;
function ri(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = ri(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function nr(...e) {
  for (var t = 0, r, n, o = ""; t < e.length; )
    (r = e[t++]) && (n = ri(r)) && (o && (o += " "), o += n);
  return o;
}
function e0(e) {
  return `${e}-${Math.floor(Math.random() * 1e6)}`;
}
function ni(e) {
  if (!e || typeof e != "object")
    return "";
  try {
    return JSON.stringify(e);
  } catch {
    return "";
  }
}
function t0(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function oi(...e) {
  return (...t) => {
    for (let r of e)
      typeof r == "function" && r(...t);
  };
}
var Pa = /* @__PURE__ */ new Map();
function r0(e, t) {
  if (e === t)
    return e;
  let r = Pa.get(e);
  if (r)
    return r.forEach((o) => o.current = t), t;
  let n = Pa.get(t);
  return n ? (n.forEach((o) => o.current = e), e) : t;
}
function Ft(...e) {
  let t = { ...e[0] };
  for (let r = 1; r < e.length; r++) {
    let n = e[r];
    for (let o in n) {
      let a = t[o], s = n[o];
      typeof a == "function" && typeof s == "function" && // This is a lot faster than a regex.
      o[0] === "o" && o[1] === "n" && o.charCodeAt(2) >= /* 'A' */
      65 && o.charCodeAt(2) <= /* 'Z' */
      90 ? t[o] = oi(a, s) : (o === "className" || o === "UNSAFE_className") && typeof a == "string" && typeof s == "string" ? t[o] = nr(a, s) : o === "id" && a && s ? t.id = r0(a, s) : t[o] = s !== void 0 ? s : a;
    }
  }
  return t;
}
function n0(...e) {
  return e.length === 1 && e[0] ? e[0] : (t) => {
    let r = !1;
    const n = e.map((o) => {
      const a = Ta(o, t);
      return r || (r = typeof a == "function"), a;
    });
    if (r)
      return () => {
        n.forEach((o, a) => {
          typeof o == "function" ? o == null || o() : Ta(e[a], null);
        });
      };
  };
}
function Ta(e, t) {
  if (typeof e == "function")
    return () => e(t);
  e != null && "current" in e && (e.current = t);
}
var o0 = (e, t) => {
  var r;
  let n = [];
  const o = (r = Cr.map(e, (s) => Tr(s) && s.type === t ? (n.push(s), null) : s)) == null ? void 0 : r.filter(Boolean), a = n.length >= 0 ? n : void 0;
  return [o, a];
}, a0 = /* @__PURE__ */ new Set([
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
]), s0 = /* @__PURE__ */ new Set([
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
]), Sa = /^(data-.*)$/, i0 = /^(aria-.*)$/, zr = /^(on[A-Z].*)$/;
function Ca(e, t = {}) {
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
    a != null && a.has(c) || s != null && s.has(c) && zr.test(c) || zr.test(c) && !s0.has(c) || i && Sa.test(c) || d && zr.test(c) || (Object.prototype.hasOwnProperty.call(e, c) && (a0.has(c) || r && i0.test(c) || o != null && o.has(c) || Sa.test(c)) || zr.test(c)) && (u[c] = e[c]);
  return u;
}
var [xm, So] = To({
  name: "ProviderContext",
  strict: !1
});
const l0 = /* @__PURE__ */ new Set([
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
]), d0 = /* @__PURE__ */ new Set([
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
function c0(e) {
  if (Intl.Locale) {
    let r = new Intl.Locale(e).maximize(), n = typeof r.getTextInfo == "function" ? r.getTextInfo() : r.textInfo;
    if (n) return n.direction === "rtl";
    if (r.script) return l0.has(r.script);
  }
  let t = e.split("-")[0];
  return d0.has(t);
}
const nn = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, ai = /* @__PURE__ */ se.createContext(nn), u0 = /* @__PURE__ */ se.createContext(!1);
let f0 = !!(typeof window < "u" && window.document && window.document.createElement), In = /* @__PURE__ */ new WeakMap();
function p0(e = !1) {
  let t = xt(ai), r = ae(null);
  if (r.current === null && !e) {
    var n, o;
    let a = (o = se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || o === void 0 || (n = o.ReactCurrentOwner) === null || n === void 0 ? void 0 : n.current;
    if (a) {
      let s = In.get(a);
      s == null ? In.set(a, {
        id: t.current,
        state: a.memoizedState
      }) : a.memoizedState !== s.state && (t.current = s.id, In.delete(a));
    }
    r.current = ++t.current;
  }
  return r.current;
}
function g0(e) {
  let t = xt(ai);
  t === nn && !f0 && process.env.NODE_ENV !== "production" && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let r = p0(!!e), n = t === nn && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${n}-${r}`;
}
function m0(e) {
  let t = se.useId(), [r] = re(Co()), n = r || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${nn.prefix}`;
  return e || `${n}-${t}`;
}
const b0 = typeof se.useId == "function" ? m0 : g0;
function h0() {
  return !1;
}
function $0() {
  return !0;
}
function v0(e) {
  return () => {
  };
}
function Co() {
  return typeof se.useSyncExternalStore == "function" ? se.useSyncExternalStore(v0, h0, $0) : xt(u0);
}
const y0 = Symbol.for("react-aria.i18n.locale");
function si() {
  let e = typeof window < "u" && window[y0] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      e
    ]);
  } catch {
    e = "en-US";
  }
  return {
    locale: e,
    direction: c0(e) ? "rtl" : "ltr"
  };
}
let Zn = si(), kr = /* @__PURE__ */ new Set();
function ja() {
  Zn = si();
  for (let e of kr) e(Zn);
}
function x0() {
  let e = Co(), [t, r] = re(Zn);
  return de(() => (kr.size === 0 && window.addEventListener("languagechange", ja), kr.add(r), () => {
    kr.delete(r), kr.size === 0 && window.removeEventListener("languagechange", ja);
  }), []), e ? {
    locale: "en-US",
    direction: "ltr"
  } : t;
}
const w0 = /* @__PURE__ */ se.createContext(null);
function ii() {
  let e = x0();
  return xt(w0) || e;
}
const k0 = Symbol.for("react-aria.i18n.locale"), N0 = Symbol.for("react-aria.i18n.strings");
let er;
class mn {
  /** Returns a localized string for the given key and locale. */
  getStringForLocale(t, r) {
    let o = this.getStringsForLocale(r)[t];
    if (!o) throw new Error(`Could not find intl message ${t} in ${r} locale`);
    return o;
  }
  /** Returns all localized strings for the given locale. */
  getStringsForLocale(t) {
    let r = this.strings[t];
    return r || (r = E0(t, this.strings, this.defaultLocale), this.strings[t] = r), r;
  }
  static getGlobalDictionaryForPackage(t) {
    if (typeof window > "u") return null;
    let r = window[k0];
    if (er === void 0) {
      let o = window[N0];
      if (!o) return null;
      er = {};
      for (let a in o) er[a] = new mn({
        [r]: o[a]
      }, r);
    }
    let n = er == null ? void 0 : er[t];
    if (!n) throw new Error(`Strings for package "${t}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
    return n;
  }
  constructor(t, r = "en-US") {
    this.strings = Object.fromEntries(Object.entries(t).filter(([, n]) => n)), this.defaultLocale = r;
  }
}
function E0(e, t, r = "en-US") {
  if (t[e]) return t[e];
  let n = P0(e);
  if (t[n]) return t[n];
  for (let o in t)
    if (o.startsWith(n + "-")) return t[o];
  return t[r];
}
function P0(e) {
  return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
const Ia = /* @__PURE__ */ new Map(), Oa = /* @__PURE__ */ new Map();
class T0 {
  /** Formats a localized string for the given key with the provided variables. */
  format(t, r) {
    let n = this.strings.getStringForLocale(t, this.locale);
    return typeof n == "function" ? n(r, this) : n;
  }
  plural(t, r, n = "cardinal") {
    let o = r["=" + t];
    if (o) return typeof o == "function" ? o() : o;
    let a = this.locale + ":" + n, s = Ia.get(a);
    s || (s = new Intl.PluralRules(this.locale, {
      type: n
    }), Ia.set(a, s));
    let i = s.select(t);
    return o = r[i] || r.other, typeof o == "function" ? o() : o;
  }
  number(t) {
    let r = Oa.get(this.locale);
    return r || (r = new Intl.NumberFormat(this.locale), Oa.set(this.locale, r)), r.format(t);
  }
  select(t, r) {
    let n = t[r] || t.other;
    return typeof n == "function" ? n() : n;
  }
  constructor(t, r) {
    this.locale = t, this.strings = r;
  }
}
const Aa = /* @__PURE__ */ new WeakMap();
function S0(e) {
  let t = Aa.get(e);
  return t || (t = new mn(e), Aa.set(e, t)), t;
}
function C0(e, t) {
  return t && mn.getGlobalDictionaryForPackage(t) || S0(e);
}
function j0(e, t) {
  let { locale: r } = ii(), n = C0(e, t);
  return Le(() => new T0(r, n), [
    r,
    n
  ]);
}
function I0(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function O0(e, t, r) {
  I0(e, t), t.set(e, r);
}
const Re = typeof document < "u" ? se.useLayoutEffect : () => {
};
var On;
const A0 = (On = se.useInsertionEffect) !== null && On !== void 0 ? On : Re;
function dt(e) {
  const t = ae(null);
  return A0(() => {
    t.current = e;
  }, [
    e
  ]), me((...r) => {
    const n = t.current;
    return n == null ? void 0 : n(...r);
  }, []);
}
function _0(e) {
  let [t, r] = re(e), n = ae(null), o = dt(() => {
    if (!n.current) return;
    let s = n.current.next();
    if (s.done) {
      n.current = null;
      return;
    }
    t === s.value ? o() : r(s.value);
  });
  Re(() => {
    n.current && o();
  });
  let a = dt((s) => {
    n.current = s(t), o();
  });
  return [
    t,
    a
  ];
}
let R0 = !!(typeof window < "u" && window.document && window.document.createElement), ir = /* @__PURE__ */ new Map(), Nr;
typeof FinalizationRegistry < "u" && (Nr = new FinalizationRegistry((e) => {
  ir.delete(e);
}));
function jo(e) {
  let [t, r] = re(e), n = ae(null), o = b0(t), a = ae(null);
  if (Nr && Nr.register(a, o), R0) {
    const s = ir.get(o);
    s && !s.includes(n) ? s.push(n) : ir.set(o, [
      n
    ]);
  }
  return Re(() => {
    let s = o;
    return () => {
      Nr && Nr.unregister(a), ir.delete(s);
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
function L0(e, t) {
  if (e === t) return e;
  let r = ir.get(e);
  if (r)
    return r.forEach((o) => o.current = t), t;
  let n = ir.get(t);
  return n ? (n.forEach((o) => o.current = e), e) : t;
}
function M0(e = []) {
  let t = jo(), [r, n] = _0(t), o = me(() => {
    n(function* () {
      yield t, yield document.getElementById(t) ? t : void 0;
    });
  }, [
    t,
    n
  ]);
  return Re(o, [
    t,
    o,
    ...e
  ]), r;
}
function Mr(...e) {
  return (...t) => {
    for (let r of e) typeof r == "function" && r(...t);
  };
}
const Ne = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, ft = (e) => e && "window" in e && e.window === e ? e : Ne(e).defaultView || window;
function F0(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function D0(e) {
  return F0(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let z0 = !1;
function bn() {
  return z0;
}
function je(e, t) {
  if (!bn()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let r = t;
  for (; r !== null; ) {
    if (r === e) return !0;
    r.tagName === "SLOT" && r.assignedSlot ? r = r.assignedSlot.parentNode : D0(r) ? r = r.host : r = r.parentNode;
  }
  return !1;
}
const nt = (e = document) => {
  var t;
  if (!bn()) return e.activeElement;
  let r = e.activeElement;
  for (; r && "shadowRoot" in r && (!((t = r.shadowRoot) === null || t === void 0) && t.activeElement); ) r = r.shadowRoot.activeElement;
  return r;
};
function xe(e) {
  return bn() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
class G0 {
  get currentNode() {
    return this._currentNode;
  }
  set currentNode(t) {
    if (!je(this.root, t)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
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
    return je(t, r) ? (r && (this.currentNode = r), r) : (this.currentNode = t, null);
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
function B0(e, t, r, n) {
  return bn() ? new G0(e, t, r, n) : e.createTreeWalker(t, r, n);
}
function Yt(...e) {
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
      90 ? t[o] = Mr(a, s) : (o === "className" || o === "UNSAFE_className") && typeof a == "string" && typeof s == "string" ? t[o] = he(a, s) : o === "id" && a && s ? t.id = L0(a, s) : t[o] = s !== void 0 ? s : a;
    }
  }
  return t;
}
const V0 = /* @__PURE__ */ new Set([
  "id"
]), H0 = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), U0 = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), K0 = /* @__PURE__ */ new Set([
  "dir",
  "lang",
  "hidden",
  "inert",
  "translate"
]), _a = /* @__PURE__ */ new Set([
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
]), W0 = /^(data-.*)$/;
function li(e, t = {}) {
  let { labelable: r, isLink: n, global: o, events: a = o, propNames: s } = t, i = {};
  for (const d in e) Object.prototype.hasOwnProperty.call(e, d) && (V0.has(d) || r && H0.has(d) || n && U0.has(d) || o && K0.has(d) || a && _a.has(d) || d.endsWith("Capture") && _a.has(d.slice(0, -7)) || s != null && s.has(d) || W0.test(d)) && (i[d] = e[d]);
  return i;
}
function cr(e) {
  if (Y0()) e.focus({
    preventScroll: !0
  });
  else {
    let t = X0(e);
    e.focus(), Z0(t);
  }
}
let Gr = null;
function Y0() {
  if (Gr == null) {
    Gr = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return Gr = !0, !0;
        }
      });
    } catch {
    }
  }
  return Gr;
}
function X0(e) {
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
function Z0(e) {
  for (let { element: t, scrollTop: r, scrollLeft: n } of e)
    t.scrollTop = r, t.scrollLeft = n;
}
function hn(e) {
  var t;
  if (typeof window > "u" || window.navigator == null) return !1;
  let r = (t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands;
  return Array.isArray(r) && r.some((n) => e.test(n.brand)) || e.test(window.navigator.userAgent);
}
function Io(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Ot(e) {
  if (process.env.NODE_ENV === "test") return e;
  let t = null;
  return () => (t == null && (t = e()), t);
}
const ur = Ot(function() {
  return Io(/^Mac/i);
}), q0 = Ot(function() {
  return Io(/^iPhone/i);
}), di = Ot(function() {
  return Io(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  ur() && navigator.maxTouchPoints > 1;
}), $n = Ot(function() {
  return q0() || di();
});
Ot(function() {
  return ur() || $n();
});
const ci = Ot(function() {
  return hn(/AppleWebKit/i) && !ui();
}), ui = Ot(function() {
  return hn(/Chrome/i);
}), Oo = Ot(function() {
  return hn(/Android/i);
}), J0 = Ot(function() {
  return hn(/Firefox/i);
});
function Fr(e, t, r = !0) {
  var n, o;
  let { metaKey: a, ctrlKey: s, altKey: i, shiftKey: d } = t;
  J0() && (!((o = window.event) === null || o === void 0 || (n = o.type) === null || n === void 0) && n.startsWith("key")) && e.target === "_blank" && (ur() ? a = !0 : s = !0);
  let u = ci() && ur() && !di() && process.env.NODE_ENV !== "test" ? new KeyboardEvent("keydown", {
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
  Fr.isOpening = r, cr(e), e.dispatchEvent(u), Fr.isOpening = !1;
}
Fr.isOpening = !1;
let Mt = /* @__PURE__ */ new Map(), qn = /* @__PURE__ */ new Set();
function Ra() {
  if (typeof window > "u") return;
  function e(n) {
    return "propertyName" in n;
  }
  let t = (n) => {
    if (!e(n) || !n.target) return;
    let o = Mt.get(n.target);
    o || (o = /* @__PURE__ */ new Set(), Mt.set(n.target, o), n.target.addEventListener("transitioncancel", r, {
      once: !0
    })), o.add(n.propertyName);
  }, r = (n) => {
    if (!e(n) || !n.target) return;
    let o = Mt.get(n.target);
    if (o && (o.delete(n.propertyName), o.size === 0 && (n.target.removeEventListener("transitioncancel", r), Mt.delete(n.target)), Mt.size === 0)) {
      for (let a of qn) a();
      qn.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", r);
}
typeof document < "u" && (document.readyState !== "loading" ? Ra() : document.addEventListener("DOMContentLoaded", Ra));
function Q0() {
  for (const [e] of Mt)
    "isConnected" in e && !e.isConnected && Mt.delete(e);
}
function fi(e) {
  requestAnimationFrame(() => {
    Q0(), Mt.size === 0 ? e() : qn.add(e);
  });
}
function Ao() {
  let e = ae(/* @__PURE__ */ new Map()), t = me((o, a, s, i) => {
    let d = i != null && i.once ? (...u) => {
      e.current.delete(s), s(...u);
    } : s;
    e.current.set(s, {
      type: a,
      eventTarget: o,
      fn: d,
      options: i
    }), o.addEventListener(a, d, i);
  }, []), r = me((o, a, s, i) => {
    var d;
    let u = ((d = e.current.get(s)) === null || d === void 0 ? void 0 : d.fn) || s;
    o.removeEventListener(a, u, i), e.current.delete(s);
  }, []), n = me(() => {
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
function ep(e, t) {
  let { id: r, "aria-label": n, "aria-labelledby": o } = e;
  return r = jo(r), o && n ? o = [
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
function tp() {
  return typeof window.ResizeObserver < "u";
}
function La(e) {
  const { ref: t, box: r, onResize: n } = e;
  de(() => {
    let o = t == null ? void 0 : t.current;
    if (o)
      if (tp()) {
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
function pi(e, t) {
  Re(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function Ma(e, t) {
  if (!e) return !1;
  let r = window.getComputedStyle(e), n = /(auto|scroll)/.test(r.overflow + r.overflowX + r.overflowY);
  return n && t && (n = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), n;
}
function gi(e, t) {
  let r = e;
  for (Ma(r, t) && (r = r.parentElement); r && !Ma(r, t); ) r = r.parentElement;
  return r || document.scrollingElement || document.documentElement;
}
function Jn(e) {
  return e.pointerType === "" && e.isTrusted ? !0 : Oo() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function rp(e) {
  return !Oo() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
const np = typeof Element < "u" && "checkVisibility" in Element.prototype;
function op(e) {
  const t = ft(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
  let { display: r, visibility: n } = e.style, o = r !== "none" && n !== "hidden" && n !== "collapse";
  if (o) {
    const { getComputedStyle: a } = e.ownerDocument.defaultView;
    let { display: s, visibility: i } = a(e);
    o = s !== "none" && i !== "hidden" && i !== "collapse";
  }
  return o;
}
function ap(e, t) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function _o(e, t) {
  return np ? e.checkVisibility() && !e.closest("[data-react-aria-prevent-focus]") : e.nodeName !== "#comment" && op(e) && ap(e, t) && (!e.parentElement || _o(e.parentElement, e));
}
const Ro = [
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
], sp = Ro.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Ro.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const ip = Ro.join(':not([hidden]):not([tabindex="-1"]),');
function mi(e) {
  return e.matches(sp) && _o(e) && !bi(e);
}
function lp(e) {
  return e.matches(ip) && _o(e) && !bi(e);
}
function bi(e) {
  let t = e;
  for (; t != null; ) {
    if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
    t = t.parentElement;
  }
  return !1;
}
function dp(e, t, r) {
  let [n, o] = re(e || t), a = ae(e !== void 0), s = e !== void 0;
  de(() => {
    let u = a.current;
    u !== s && process.env.NODE_ENV !== "production" && console.warn(`WARN: A component changed from ${u ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}.`), a.current = s;
  }, [
    s
  ]);
  let i = s ? e : n, d = me((u, ...c) => {
    let f = (b, ...p) => {
      r && (Object.is(i, b) || r(b, ...p)), s || (i = b);
    };
    typeof u == "function" ? (process.env.NODE_ENV !== "production" && console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), o((p, ...$) => {
      let w = u(s ? i : p, ...$);
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
function Qn(e, t = -1 / 0, r = 1 / 0) {
  return Math.min(Math.max(e, t), r);
}
const vt = {
  top: "top",
  bottom: "top",
  left: "left",
  right: "left"
}, on = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, cp = {
  top: "left",
  left: "top"
}, eo = {
  top: "height",
  left: "width"
}, hi = {
  width: "totalWidth",
  height: "totalHeight"
}, Br = {};
let Ue = typeof document < "u" ? window.visualViewport : null;
function Fa(e) {
  let t = 0, r = 0, n = 0, o = 0, a = 0, s = 0, i = {};
  var d;
  let u = ((d = Ue == null ? void 0 : Ue.scale) !== null && d !== void 0 ? d : 1) > 1;
  if (e.tagName === "BODY") {
    let $ = document.documentElement;
    n = $.clientWidth, o = $.clientHeight;
    var c;
    t = (c = Ue == null ? void 0 : Ue.width) !== null && c !== void 0 ? c : n;
    var f;
    r = (f = Ue == null ? void 0 : Ue.height) !== null && f !== void 0 ? f : o, i.top = $.scrollTop || e.scrollTop, i.left = $.scrollLeft || e.scrollLeft, Ue && (a = Ue.offsetTop, s = Ue.offsetLeft);
  } else
    ({ width: t, height: r, top: a, left: s } = lr(e)), i.top = e.scrollTop, i.left = e.scrollLeft, n = t, o = r;
  if (ci() && (e.tagName === "BODY" || e.tagName === "HTML") && u) {
    i.top = 0, i.left = 0;
    var b;
    a = (b = Ue == null ? void 0 : Ue.pageTop) !== null && b !== void 0 ? b : 0;
    var p;
    s = (p = Ue == null ? void 0 : Ue.pageLeft) !== null && p !== void 0 ? p : 0;
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
function up(e) {
  return {
    top: e.scrollTop,
    left: e.scrollLeft,
    width: e.scrollWidth,
    height: e.scrollHeight
  };
}
function Da(e, t, r, n, o, a, s) {
  var i;
  let d = (i = o.scroll[e]) !== null && i !== void 0 ? i : 0, u = n[eo[e]], c = n.scroll[vt[e]] + a, f = u + n.scroll[vt[e]] - a, b = t - d + s[e] - n[vt[e]], p = t - d + r + s[e] - n[vt[e]];
  return b < c ? c - b : p > f ? Math.max(f - p, c - b) : 0;
}
function fp(e) {
  let t = window.getComputedStyle(e);
  return {
    top: parseInt(t.marginTop, 10) || 0,
    bottom: parseInt(t.marginBottom, 10) || 0,
    left: parseInt(t.marginLeft, 10) || 0,
    right: parseInt(t.marginRight, 10) || 0
  };
}
function za(e) {
  if (Br[e]) return Br[e];
  let [t, r] = e.split(" "), n = vt[t] || "right", o = cp[n];
  vt[r] || (r = "center");
  let a = eo[n], s = eo[o];
  return Br[e] = {
    placement: t,
    crossPlacement: r,
    axis: n,
    crossAxis: o,
    size: a,
    crossSize: s
  }, Br[e];
}
function An(e, t, r, n, o, a, s, i, d, u) {
  let { placement: c, crossPlacement: f, axis: b, crossAxis: p, size: $, crossSize: w } = n, k = {};
  var P;
  k[p] = (P = e[p]) !== null && P !== void 0 ? P : 0;
  var v, j, S, I;
  f === "center" ? k[p] += (((v = e[w]) !== null && v !== void 0 ? v : 0) - ((j = r[w]) !== null && j !== void 0 ? j : 0)) / 2 : f !== p && (k[p] += ((S = e[w]) !== null && S !== void 0 ? S : 0) - ((I = r[w]) !== null && I !== void 0 ? I : 0)), k[p] += a;
  const A = e[p] - r[w] + d + u, H = e[p] + e[w] - d - u;
  if (k[p] = Qn(k[p], A, H), c === b) {
    const O = i ? s[$] : t[hi[$]];
    k[on[b]] = Math.floor(O - e[b] + o);
  } else k[b] = Math.floor(e[b] + e[$] + o);
  return k;
}
function pp(e, t, r, n, o, a, s, i) {
  const d = n ? r.height : t[hi.height];
  var u;
  let c = e.top != null ? r.top + e.top : r.top + (d - ((u = e.bottom) !== null && u !== void 0 ? u : 0) - s);
  var f, b, p, $, w, k;
  let P = i !== "top" ? (
    // We want the distance between the top of the overlay to the bottom of the boundary
    Math.max(0, t.height + t.top + ((f = t.scroll.top) !== null && f !== void 0 ? f : 0) - c - (((b = o.top) !== null && b !== void 0 ? b : 0) + ((p = o.bottom) !== null && p !== void 0 ? p : 0) + a))
  ) : Math.max(0, c + s - (t.top + (($ = t.scroll.top) !== null && $ !== void 0 ? $ : 0)) - (((w = o.top) !== null && w !== void 0 ? w : 0) + ((k = o.bottom) !== null && k !== void 0 ? k : 0) + a));
  return Math.min(t.height - a * 2, P);
}
function Ga(e, t, r, n, o, a) {
  let { placement: s, axis: i, size: d } = a;
  var u, c;
  if (s === i) return Math.max(0, r[i] - e[i] - ((u = e.scroll[i]) !== null && u !== void 0 ? u : 0) + t[i] - ((c = n[i]) !== null && c !== void 0 ? c : 0) - n[on[i]] - o);
  var f;
  return Math.max(0, e[d] + e[i] + e.scroll[i] - t[i] - r[i] - r[d] - ((f = n[i]) !== null && f !== void 0 ? f : 0) - n[on[i]] - o);
}
function gp(e, t, r, n, o, a, s, i, d, u, c, f, b, p, $, w) {
  let k = za(e), { size: P, crossAxis: v, crossSize: j, placement: S, crossPlacement: I } = k, A = An(t, i, r, k, c, f, u, b, $, w), H = c, O = Ga(i, u, t, o, a + c, k);
  if (s && n[P] > O) {
    let L = za(`${on[S]} ${I}`), K = An(t, i, r, L, c, f, u, b, $, w);
    Ga(i, u, t, o, a + c, L) > O && (k = L, A = K, H = c);
  }
  let R = "bottom";
  k.axis === "top" ? k.placement === "top" ? R = "top" : k.placement === "bottom" && (R = "bottom") : k.crossAxis === "top" && (k.crossPlacement === "top" ? R = "bottom" : k.crossPlacement === "bottom" && (R = "top"));
  let z = Da(v, A[v], r[j], i, d, a, u);
  A[v] += z;
  let g = pp(A, i, u, b, o, a, r.height, R);
  p && p < g && (g = p), r.height = Math.min(r.height, g), A = An(t, i, r, k, H, f, u, b, $, w), z = Da(v, A[v], r[j], i, d, a, u), A[v] += z;
  let T = {}, h = t[v] - A[v] - o[vt[v]], E = h + 0.5 * t[j];
  const _ = $ / 2 + w;
  var m, y, N, C;
  const Y = vt[v] === "left" ? ((m = o.left) !== null && m !== void 0 ? m : 0) + ((y = o.right) !== null && y !== void 0 ? y : 0) : ((N = o.top) !== null && N !== void 0 ? N : 0) + ((C = o.bottom) !== null && C !== void 0 ? C : 0), D = r[j] - Y - $ / 2 - w, B = t[v] + $ / 2 - (A[v] + o[vt[v]]), W = t[v] + t[j] - $ / 2 - (A[v] + o[vt[v]]), M = Qn(E, B, W);
  T[v] = Qn(M, _, D), { placement: S, crossPlacement: I } = k, $ ? h = T[v] : I === "right" ? h += t[j] : I === "center" && (h += t[j] / 2);
  let G = S === "left" || S === "top" ? r[P] : 0, X = {
    x: S === "top" || S === "bottom" ? h : G,
    y: S === "left" || S === "right" ? h : G
  };
  return {
    position: A,
    maxHeight: g,
    arrowOffsetLeft: T.left,
    arrowOffsetTop: T.top,
    placement: S,
    triggerAnchorPoint: X
  };
}
function mp(e) {
  let { placement: t, targetNode: r, overlayNode: n, scrollNode: o, padding: a, shouldFlip: s, boundaryElement: i, offset: d, crossOffset: u, maxHeight: c, arrowSize: f = 0, arrowBoundaryOffset: b = 0 } = e, p = n instanceof HTMLElement ? bp(n) : document.documentElement, $ = p === document.documentElement;
  const w = window.getComputedStyle(p).position;
  let k = !!w && w !== "static", P = $ ? lr(r) : Ba(r, p);
  if (!$) {
    let { marginTop: T, marginLeft: h } = window.getComputedStyle(r);
    P.top += parseInt(T, 10) || 0, P.left += parseInt(h, 10) || 0;
  }
  let v = lr(n), j = fp(n);
  var S, I;
  v.width += ((S = j.left) !== null && S !== void 0 ? S : 0) + ((I = j.right) !== null && I !== void 0 ? I : 0);
  var A, H;
  v.height += ((A = j.top) !== null && A !== void 0 ? A : 0) + ((H = j.bottom) !== null && H !== void 0 ? H : 0);
  let O = up(o), R = Fa(i), z = Fa(p), g = i.tagName === "BODY" ? lr(p) : Ba(p, i);
  return p.tagName === "HTML" && i.tagName === "BODY" && (z.scroll.top = 0, z.scroll.left = 0), gp(t, P, v, O, j, a, s, R, z, g, d, u, k, c, f, b);
}
function lr(e) {
  let { top: t, left: r, width: n, height: o } = e.getBoundingClientRect(), { scrollTop: a, scrollLeft: s, clientTop: i, clientLeft: d } = document.documentElement;
  return {
    top: t + a - i,
    left: r + s - d,
    width: n,
    height: o
  };
}
function Ba(e, t) {
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
    n = lr(e);
    let o = lr(t), a = window.getComputedStyle(t);
    o.top += (parseInt(a.borderTopWidth, 10) || 0) - t.scrollTop, o.left += (parseInt(a.borderLeftWidth, 10) || 0) - t.scrollLeft, n.top -= o.top, n.left -= o.left;
  }
  return n.top -= parseInt(r.marginTop, 10) || 0, n.left -= parseInt(r.marginLeft, 10) || 0, n;
}
function bp(e) {
  let t = e.offsetParent;
  if (t && t === document.body && window.getComputedStyle(t).position === "static" && !Va(t) && (t = document.documentElement), t == null)
    for (t = e.parentElement; t && !Va(t); ) t = t.parentElement;
  return t || document.documentElement;
}
function Va(e) {
  let t = window.getComputedStyle(e);
  return t.transform !== "none" || /transform|perspective/.test(t.willChange) || t.filter !== "none" || t.contain === "paint" || "backdropFilter" in t && t.backdropFilter !== "none" || "WebkitBackdropFilter" in t && t.WebkitBackdropFilter !== "none";
}
const $i = /* @__PURE__ */ new WeakMap();
function hp(e) {
  let { triggerRef: t, isOpen: r, onClose: n } = e;
  de(() => {
    if (!r || n === null) return;
    let o = (a) => {
      let s = a.target;
      if (!t.current || s instanceof Node && !s.contains(t.current) || a.target instanceof HTMLInputElement || a.target instanceof HTMLTextAreaElement) return;
      let i = n || $i.get(t.current);
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
let _e = typeof document < "u" ? window.visualViewport : null;
function $p(e) {
  let { direction: t } = ii(), { arrowSize: r, targetRef: n, overlayRef: o, arrowRef: a, scrollRef: s = o, placement: i = "bottom", containerPadding: d = 12, shouldFlip: u = !0, boundaryElement: c = typeof document < "u" ? document.body : null, offset: f = 0, crossOffset: b = 0, shouldUpdatePosition: p = !0, isOpen: $ = !0, onClose: w, maxHeight: k, arrowBoundaryOffset: P = 0 } = e, [v, j] = re(null), S = [
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
    b,
    $,
    t,
    k,
    P,
    r
  ], I = ae(_e == null ? void 0 : _e.scale);
  de(() => {
    $ && (I.current = _e == null ? void 0 : _e.scale);
  }, [
    $
  ]);
  let A = me(() => {
    var T, h, E;
    if (p === !1 || !$ || !o.current || !n.current || !c || (_e == null ? void 0 : _e.scale) !== I.current || o.current.querySelector("[data-react-aria-incomplete]") || ((T = (h = o.current).getAnimations) === null || T === void 0 ? void 0 : T.call(h).length) > 0) return;
    let _ = null;
    if (s.current && s.current.contains(document.activeElement)) {
      var m;
      let M = (m = document.activeElement) === null || m === void 0 ? void 0 : m.getBoundingClientRect(), G = s.current.getBoundingClientRect();
      var y;
      if (_ = {
        type: "top",
        offset: ((y = M == null ? void 0 : M.top) !== null && y !== void 0 ? y : 0) - G.top
      }, _.offset > G.height / 2) {
        _.type = "bottom";
        var N;
        _.offset = ((N = M == null ? void 0 : M.bottom) !== null && N !== void 0 ? N : 0) - G.bottom;
      }
    }
    let C = o.current;
    if (!k && o.current) {
      var Y;
      C.style.top = "0px", C.style.bottom = "";
      var D;
      C.style.maxHeight = ((D = (Y = window.visualViewport) === null || Y === void 0 ? void 0 : Y.height) !== null && D !== void 0 ? D : window.innerHeight) + "px";
    }
    var B;
    let W = mp({
      placement: yp(i, t),
      overlayNode: o.current,
      targetNode: n.current,
      scrollNode: s.current || o.current,
      padding: d,
      shouldFlip: u,
      boundaryElement: c,
      offset: f,
      crossOffset: b,
      maxHeight: k,
      arrowSize: (B = r ?? (a == null || (E = a.current) === null || E === void 0 ? void 0 : E.getBoundingClientRect().width)) !== null && B !== void 0 ? B : 0,
      arrowBoundaryOffset: P
    });
    if (W.position) {
      if (C.style.top = "", C.style.bottom = "", C.style.left = "", C.style.right = "", Object.keys(W.position).forEach((M) => C.style[M] = W.position[M] + "px"), C.style.maxHeight = W.maxHeight != null ? W.maxHeight + "px" : "", _ && document.activeElement && s.current) {
        let M = document.activeElement.getBoundingClientRect(), G = s.current.getBoundingClientRect(), X = M[_.type] - G[_.type];
        s.current.scrollTop += X - _.offset;
      }
      j(W);
    }
  }, S);
  Re(A, S), vp(A), La({
    ref: o,
    onResize: A
  }), La({
    ref: n,
    onResize: A
  });
  let H = ae(!1);
  Re(() => {
    let T, h = () => {
      H.current = !0, clearTimeout(T), T = setTimeout(() => {
        H.current = !1;
      }, 500), A();
    }, E = () => {
      H.current && h();
    };
    return _e == null || _e.addEventListener("resize", h), _e == null || _e.addEventListener("scroll", E), () => {
      _e == null || _e.removeEventListener("resize", h), _e == null || _e.removeEventListener("scroll", E);
    };
  }, [
    A
  ]);
  let O = me(() => {
    H.current || w == null || w();
  }, [
    w,
    H
  ]);
  hp({
    triggerRef: n,
    isOpen: $,
    onClose: w && O
  });
  var R, z, g;
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
    placement: (z = v == null ? void 0 : v.placement) !== null && z !== void 0 ? z : null,
    triggerAnchorPoint: (g = v == null ? void 0 : v.triggerAnchorPoint) !== null && g !== void 0 ? g : null,
    arrowProps: {
      "aria-hidden": "true",
      role: "presentation",
      style: {
        left: v == null ? void 0 : v.arrowOffsetLeft,
        top: v == null ? void 0 : v.arrowOffsetTop
      }
    },
    updatePosition: A
  };
}
function vp(e) {
  Re(() => (window.addEventListener("resize", e, !1), () => {
    window.removeEventListener("resize", e, !1);
  }), [
    e
  ]);
}
function yp(e, t) {
  return t === "rtl" ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right");
}
function Lo(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function vi(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function yi(e) {
  let t = ae({
    isFocused: !1,
    observer: null
  });
  Re(() => {
    const n = t.current;
    return () => {
      n.observer && (n.observer.disconnect(), n.observer = null);
    };
  }, []);
  let r = dt((n) => {
    e == null || e(n);
  });
  return me((n) => {
    if (n.target instanceof HTMLButtonElement || n.target instanceof HTMLInputElement || n.target instanceof HTMLTextAreaElement || n.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let o = n.target, a = (s) => {
        if (t.current.isFocused = !1, o.disabled) {
          let i = Lo(s);
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
let an = !1;
function Ha(e) {
  for (; e && !mi(e); ) e = e.parentElement;
  let t = ft(e), r = t.document.activeElement;
  if (!r || r === e) return;
  an = !0;
  let n = !1, o = (c) => {
    (c.target === r || n) && c.stopImmediatePropagation();
  }, a = (c) => {
    (c.target === r || n) && (c.stopImmediatePropagation(), !e && !n && (n = !0, cr(r), d()));
  }, s = (c) => {
    (c.target === e || n) && c.stopImmediatePropagation();
  }, i = (c) => {
    (c.target === e || n) && (c.stopImmediatePropagation(), n || (n = !0, cr(r), d()));
  };
  t.addEventListener("blur", o, !0), t.addEventListener("focusout", a, !0), t.addEventListener("focusin", i, !0), t.addEventListener("focus", s, !0);
  let d = () => {
    cancelAnimationFrame(u), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", a, !0), t.removeEventListener("focusin", i, !0), t.removeEventListener("focus", s, !0), an = !1, n = !1;
  }, u = requestAnimationFrame(d);
  return d;
}
let or = "default", to = "", en = /* @__PURE__ */ new WeakMap();
function Ua(e) {
  if ($n()) {
    if (or === "default") {
      const t = Ne(e);
      to = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    or = "disabled";
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    en.set(e, e.style[t]), e.style[t] = "none";
  }
}
function _n(e) {
  if ($n()) {
    if (or !== "disabled") return;
    or = "restoring", setTimeout(() => {
      fi(() => {
        if (or === "restoring") {
          const t = Ne(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = to || ""), to = "", or = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && en.has(e)) {
    let t = en.get(e), r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    e.style[r] === "none" && (e.style[r] = t), e.getAttribute("style") === "" && e.removeAttribute("style"), en.delete(e);
  }
}
const Mo = se.createContext({
  register: () => {
  }
});
Mo.displayName = "PressResponderContext";
function xp(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function xi(e, t, r) {
  if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
  return t.get(e);
}
function wp(e, t) {
  var r = xi(e, t, "get");
  return xp(e, r);
}
function kp(e, t, r) {
  if (t.set) t.set.call(e, r);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = r;
  }
}
function Ka(e, t, r) {
  var n = xi(e, t, "set");
  return kp(e, n, r), r;
}
function Np(e) {
  let t = xt(Mo);
  if (t) {
    let { register: r, ...n } = t;
    e = Yt(n, e), r();
  }
  return pi(t, e.ref), e;
}
var Vr = /* @__PURE__ */ new WeakMap();
class Hr {
  continuePropagation() {
    Ka(this, Vr, !1);
  }
  get shouldStopPropagation() {
    return wp(this, Vr);
  }
  constructor(t, r, n, o) {
    O0(this, Vr, {
      writable: !0,
      value: void 0
    }), Ka(this, Vr, !0);
    var a;
    let s = (a = o == null ? void 0 : o.target) !== null && a !== void 0 ? a : n.currentTarget;
    const i = s == null ? void 0 : s.getBoundingClientRect();
    let d, u = 0, c, f = null;
    n.clientX != null && n.clientY != null && (c = n.clientX, f = n.clientY), i && (c != null && f != null ? (d = c - i.left, u = f - i.top) : (d = i.width / 2, u = i.height / 2)), this.type = t, this.pointerType = r, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = d, this.y = u;
  }
}
const Wa = Symbol("linkClicked"), Ya = "react-aria-pressable-style", Xa = "data-react-aria-pressable";
function Ep(e) {
  let { onPress: t, onPressChange: r, onPressStart: n, onPressEnd: o, onPressUp: a, onClick: s, isDisabled: i, isPressed: d, preventFocusOnPress: u, shouldCancelOnPointerExit: c, allowTextSelectionOnPress: f, ref: b, ...p } = Np(e), [$, w] = re(!1), k = ae({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: P, removeAllGlobalListeners: v } = Ao(), j = dt((g, T) => {
    let h = k.current;
    if (i || h.didFirePressStart) return !1;
    let E = !0;
    if (h.isTriggeringEvent = !0, n) {
      let _ = new Hr("pressstart", T, g);
      n(_), E = _.shouldStopPropagation;
    }
    return r && r(!0), h.isTriggeringEvent = !1, h.didFirePressStart = !0, w(!0), E;
  }), S = dt((g, T, h = !0) => {
    let E = k.current;
    if (!E.didFirePressStart) return !1;
    E.didFirePressStart = !1, E.isTriggeringEvent = !0;
    let _ = !0;
    if (o) {
      let m = new Hr("pressend", T, g);
      o(m), _ = m.shouldStopPropagation;
    }
    if (r && r(!1), w(!1), t && h && !i) {
      let m = new Hr("press", T, g);
      t(m), _ && (_ = m.shouldStopPropagation);
    }
    return E.isTriggeringEvent = !1, _;
  }), I = dt((g, T) => {
    let h = k.current;
    if (i) return !1;
    if (a) {
      h.isTriggeringEvent = !0;
      let E = new Hr("pressup", T, g);
      return a(E), h.isTriggeringEvent = !1, E.shouldStopPropagation;
    }
    return !0;
  }), A = dt((g) => {
    let T = k.current;
    if (T.isPressed && T.target) {
      T.didFirePressStart && T.pointerType != null && S(Ht(T.target, g), T.pointerType, !1), T.isPressed = !1, T.isOverTarget = !1, T.activePointerId = null, T.pointerType = null, v(), f || _n(T.target);
      for (let h of T.disposables) h();
      T.disposables = [];
    }
  }), H = dt((g) => {
    c && A(g);
  }), O = dt((g) => {
    s == null || s(g);
  }), R = dt((g, T) => {
    if (s) {
      let h = new MouseEvent("click", g);
      vi(h, T), s(Lo(h));
    }
  }), z = Le(() => {
    let g = k.current, T = {
      onKeyDown(E) {
        if (Rn(E.nativeEvent, E.currentTarget) && je(E.currentTarget, xe(E.nativeEvent))) {
          var _;
          Ja(xe(E.nativeEvent), E.key) && E.preventDefault();
          let m = !0;
          if (!g.isPressed && !E.repeat) {
            g.target = E.currentTarget, g.isPressed = !0, g.pointerType = "keyboard", m = j(E, "keyboard");
            let y = E.currentTarget, N = (C) => {
              Rn(C, y) && !C.repeat && je(y, xe(C)) && g.target && I(Ht(g.target, C), "keyboard");
            };
            P(Ne(E.currentTarget), "keyup", Mr(N, h), !0);
          }
          m && E.stopPropagation(), E.metaKey && ur() && ((_ = g.metaKeyEvents) === null || _ === void 0 || _.set(E.key, E.nativeEvent));
        } else E.key === "Meta" && (g.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(E) {
        if (!(E && !je(E.currentTarget, xe(E.nativeEvent))) && E && E.button === 0 && !g.isTriggeringEvent && !Fr.isOpening) {
          let _ = !0;
          if (i && E.preventDefault(), !g.ignoreEmulatedMouseEvents && !g.isPressed && (g.pointerType === "virtual" || Jn(E.nativeEvent))) {
            let m = j(E, "virtual"), y = I(E, "virtual"), N = S(E, "virtual");
            O(E), _ = m && y && N;
          } else if (g.isPressed && g.pointerType !== "keyboard") {
            let m = g.pointerType || E.nativeEvent.pointerType || "virtual", y = I(Ht(E.currentTarget, E), m), N = S(Ht(E.currentTarget, E), m, !0);
            _ = y && N, g.isOverTarget = !1, O(E), A(E);
          }
          g.ignoreEmulatedMouseEvents = !1, _ && E.stopPropagation();
        }
      }
    }, h = (E) => {
      var _;
      if (g.isPressed && g.target && Rn(E, g.target)) {
        var m;
        Ja(xe(E), E.key) && E.preventDefault();
        let N = xe(E), C = je(g.target, xe(E));
        S(Ht(g.target, E), "keyboard", C), C && R(E, g.target), v(), E.key !== "Enter" && Fo(g.target) && je(g.target, N) && !E[Wa] && (E[Wa] = !0, Fr(g.target, E, !1)), g.isPressed = !1, (m = g.metaKeyEvents) === null || m === void 0 || m.delete(E.key);
      } else if (E.key === "Meta" && (!((_ = g.metaKeyEvents) === null || _ === void 0) && _.size)) {
        var y;
        let N = g.metaKeyEvents;
        g.metaKeyEvents = void 0;
        for (let C of N.values()) (y = g.target) === null || y === void 0 || y.dispatchEvent(new KeyboardEvent("keyup", C));
      }
    };
    if (typeof PointerEvent < "u") {
      T.onPointerDown = (m) => {
        if (m.button !== 0 || !je(m.currentTarget, xe(m.nativeEvent))) return;
        if (rp(m.nativeEvent)) {
          g.pointerType = "virtual";
          return;
        }
        g.pointerType = m.pointerType;
        let y = !0;
        if (!g.isPressed) {
          g.isPressed = !0, g.isOverTarget = !0, g.activePointerId = m.pointerId, g.target = m.currentTarget, f || Ua(g.target), y = j(m, g.pointerType);
          let N = xe(m.nativeEvent);
          "releasePointerCapture" in N && N.releasePointerCapture(m.pointerId), P(Ne(m.currentTarget), "pointerup", E, !1), P(Ne(m.currentTarget), "pointercancel", _, !1);
        }
        y && m.stopPropagation();
      }, T.onMouseDown = (m) => {
        if (je(m.currentTarget, xe(m.nativeEvent)) && m.button === 0) {
          if (u) {
            let y = Ha(m.target);
            y && g.disposables.push(y);
          }
          m.stopPropagation();
        }
      }, T.onPointerUp = (m) => {
        !je(m.currentTarget, xe(m.nativeEvent)) || g.pointerType === "virtual" || m.button === 0 && !g.isPressed && I(m, g.pointerType || m.pointerType);
      }, T.onPointerEnter = (m) => {
        m.pointerId === g.activePointerId && g.target && !g.isOverTarget && g.pointerType != null && (g.isOverTarget = !0, j(Ht(g.target, m), g.pointerType));
      }, T.onPointerLeave = (m) => {
        m.pointerId === g.activePointerId && g.target && g.isOverTarget && g.pointerType != null && (g.isOverTarget = !1, S(Ht(g.target, m), g.pointerType, !1), H(m));
      };
      let E = (m) => {
        if (m.pointerId === g.activePointerId && g.isPressed && m.button === 0 && g.target) {
          if (je(g.target, xe(m)) && g.pointerType != null) {
            let y = !1, N = setTimeout(() => {
              g.isPressed && g.target instanceof HTMLElement && (y ? A(m) : (cr(g.target), g.target.click()));
            }, 80);
            P(m.currentTarget, "click", () => y = !0, !0), g.disposables.push(() => clearTimeout(N));
          } else A(m);
          g.isOverTarget = !1;
        }
      }, _ = (m) => {
        A(m);
      };
      T.onDragStart = (m) => {
        je(m.currentTarget, xe(m.nativeEvent)) && A(m);
      };
    } else if (process.env.NODE_ENV === "test") {
      T.onMouseDown = (m) => {
        if (m.button !== 0 || !je(m.currentTarget, xe(m.nativeEvent))) return;
        if (g.ignoreEmulatedMouseEvents) {
          m.stopPropagation();
          return;
        }
        if (g.isPressed = !0, g.isOverTarget = !0, g.target = m.currentTarget, g.pointerType = Jn(m.nativeEvent) ? "virtual" : "mouse", Jl(() => j(m, g.pointerType)) && m.stopPropagation(), u) {
          let N = Ha(m.target);
          N && g.disposables.push(N);
        }
        P(Ne(m.currentTarget), "mouseup", E, !1);
      }, T.onMouseEnter = (m) => {
        if (!je(m.currentTarget, xe(m.nativeEvent))) return;
        let y = !0;
        g.isPressed && !g.ignoreEmulatedMouseEvents && g.pointerType != null && (g.isOverTarget = !0, y = j(m, g.pointerType)), y && m.stopPropagation();
      }, T.onMouseLeave = (m) => {
        if (!je(m.currentTarget, xe(m.nativeEvent))) return;
        let y = !0;
        g.isPressed && !g.ignoreEmulatedMouseEvents && g.pointerType != null && (g.isOverTarget = !1, y = S(m, g.pointerType, !1), H(m)), y && m.stopPropagation();
      }, T.onMouseUp = (m) => {
        je(m.currentTarget, xe(m.nativeEvent)) && !g.ignoreEmulatedMouseEvents && m.button === 0 && !g.isPressed && I(m, g.pointerType || "mouse");
      };
      let E = (m) => {
        if (m.button === 0) {
          if (g.ignoreEmulatedMouseEvents) {
            g.ignoreEmulatedMouseEvents = !1;
            return;
          }
          g.target && g.target.contains(m.target) && g.pointerType != null || A(m), g.isOverTarget = !1;
        }
      };
      T.onTouchStart = (m) => {
        if (!je(m.currentTarget, xe(m.nativeEvent))) return;
        let y = Pp(m.nativeEvent);
        if (!y) return;
        g.activePointerId = y.identifier, g.ignoreEmulatedMouseEvents = !0, g.isOverTarget = !0, g.isPressed = !0, g.target = m.currentTarget, g.pointerType = "touch", f || Ua(g.target), j(Rt(g.target, m), g.pointerType) && m.stopPropagation(), P(ft(m.currentTarget), "scroll", _, !0);
      }, T.onTouchMove = (m) => {
        if (!je(m.currentTarget, xe(m.nativeEvent))) return;
        if (!g.isPressed) {
          m.stopPropagation();
          return;
        }
        let y = Za(m.nativeEvent, g.activePointerId), N = !0;
        y && qa(y, m.currentTarget) ? !g.isOverTarget && g.pointerType != null && (g.isOverTarget = !0, N = j(Rt(g.target, m), g.pointerType)) : g.isOverTarget && g.pointerType != null && (g.isOverTarget = !1, N = S(Rt(g.target, m), g.pointerType, !1), H(Rt(g.target, m))), N && m.stopPropagation();
      }, T.onTouchEnd = (m) => {
        if (!je(m.currentTarget, xe(m.nativeEvent))) return;
        if (!g.isPressed) {
          m.stopPropagation();
          return;
        }
        let y = Za(m.nativeEvent, g.activePointerId), N = !0;
        y && qa(y, m.currentTarget) && g.pointerType != null ? (I(Rt(g.target, m), g.pointerType), N = S(Rt(g.target, m), g.pointerType), R(m.nativeEvent, g.target)) : g.isOverTarget && g.pointerType != null && (N = S(Rt(g.target, m), g.pointerType, !1)), N && m.stopPropagation(), g.isPressed = !1, g.activePointerId = null, g.isOverTarget = !1, g.ignoreEmulatedMouseEvents = !0, g.target && !f && _n(g.target), v();
      }, T.onTouchCancel = (m) => {
        je(m.currentTarget, xe(m.nativeEvent)) && (m.stopPropagation(), g.isPressed && A(Rt(g.target, m)));
      };
      let _ = (m) => {
        g.isPressed && je(xe(m), g.target) && A({
          currentTarget: g.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      T.onDragStart = (m) => {
        je(m.currentTarget, xe(m.nativeEvent)) && A(m);
      };
    }
    return T;
  }, [
    P,
    i,
    u,
    v,
    f,
    A,
    H,
    S,
    j,
    I,
    O,
    R
  ]);
  return de(() => {
    if (!b || process.env.NODE_ENV === "test") return;
    const g = Ne(b.current);
    if (!g || !g.head || g.getElementById(Ya)) return;
    const T = g.createElement("style");
    T.id = Ya, T.textContent = `
@layer {
  [${Xa}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), g.head.prepend(T);
  }, [
    b
  ]), de(() => {
    let g = k.current;
    return () => {
      var T;
      f || _n((T = g.target) !== null && T !== void 0 ? T : void 0);
      for (let h of g.disposables) h();
      g.disposables = [];
    };
  }, [
    f
  ]), {
    isPressed: d || $,
    pressProps: Yt(p, z, {
      [Xa]: !0
    })
  };
}
function Fo(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function Rn(e, t) {
  const { key: r, code: n } = e, o = t, a = o.getAttribute("role");
  return (r === "Enter" || r === " " || r === "Spacebar" || n === "Space") && !(o instanceof ft(o).HTMLInputElement && !wi(o, r) || o instanceof ft(o).HTMLTextAreaElement || o.isContentEditable) && // Links should only trigger with Enter key
  !((a === "link" || !a && Fo(o)) && r !== "Enter");
}
function Pp(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function Za(e, t) {
  const r = e.changedTouches;
  for (let n = 0; n < r.length; n++) {
    const o = r[n];
    if (o.identifier === t) return o;
  }
  return null;
}
function Rt(e, t) {
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
function Ht(e, t) {
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
function Tp(e) {
  let t = 0, r = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? r = e.height / 2 : e.radiusY !== void 0 && (r = e.radiusY), {
    top: e.clientY - r,
    right: e.clientX + t,
    bottom: e.clientY + r,
    left: e.clientX - t
  };
}
function Sp(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function qa(e, t) {
  let r = t.getBoundingClientRect(), n = Tp(e);
  return Sp(r, n);
}
function Cp(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Fo(e);
}
function Ja(e, t) {
  return e instanceof HTMLInputElement ? !wi(e, t) : Cp(e);
}
const jp = /* @__PURE__ */ new Set([
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
function wi(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : jp.has(e.type);
}
let pr = null, ro = /* @__PURE__ */ new Set(), Sr = /* @__PURE__ */ new Map(), Xt = !1, no = !1;
const Ip = {
  Tab: !0,
  Escape: !0
};
function Do(e, t) {
  for (let r of ro) r(e, t);
}
function Op(e) {
  return !(e.metaKey || !ur() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function sn(e) {
  Xt = !0, Op(e) && (pr = "keyboard", Do("keyboard", e));
}
function ut(e) {
  pr = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Xt = !0, Do("pointer", e));
}
function ki(e) {
  Jn(e) && (Xt = !0, pr = "virtual");
}
function Ni(e) {
  e.target === window || e.target === document || an || !e.isTrusted || (!Xt && !no && (pr = "virtual", Do("virtual", e)), Xt = !1, no = !1);
}
function Ei() {
  an || (Xt = !1, no = !0);
}
function oo(e) {
  if (typeof window > "u" || typeof document > "u" || Sr.get(ft(e))) return;
  const t = ft(e), r = Ne(e);
  let n = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Xt = !0, n.apply(this, arguments);
  }, r.addEventListener("keydown", sn, !0), r.addEventListener("keyup", sn, !0), r.addEventListener("click", ki, !0), t.addEventListener("focus", Ni, !0), t.addEventListener("blur", Ei, !1), typeof PointerEvent < "u" ? (r.addEventListener("pointerdown", ut, !0), r.addEventListener("pointermove", ut, !0), r.addEventListener("pointerup", ut, !0)) : process.env.NODE_ENV === "test" && (r.addEventListener("mousedown", ut, !0), r.addEventListener("mousemove", ut, !0), r.addEventListener("mouseup", ut, !0)), t.addEventListener("beforeunload", () => {
    Pi(e);
  }, {
    once: !0
  }), Sr.set(t, {
    focus: n
  });
}
const Pi = (e, t) => {
  const r = ft(e), n = Ne(e);
  t && n.removeEventListener("DOMContentLoaded", t), Sr.has(r) && (r.HTMLElement.prototype.focus = Sr.get(r).focus, n.removeEventListener("keydown", sn, !0), n.removeEventListener("keyup", sn, !0), n.removeEventListener("click", ki, !0), r.removeEventListener("focus", Ni, !0), r.removeEventListener("blur", Ei, !1), typeof PointerEvent < "u" ? (n.removeEventListener("pointerdown", ut, !0), n.removeEventListener("pointermove", ut, !0), n.removeEventListener("pointerup", ut, !0)) : process.env.NODE_ENV === "test" && (n.removeEventListener("mousedown", ut, !0), n.removeEventListener("mousemove", ut, !0), n.removeEventListener("mouseup", ut, !0)), Sr.delete(r));
};
function Ap(e) {
  const t = Ne(e);
  let r;
  return t.readyState !== "loading" ? oo(e) : (r = () => {
    oo(e);
  }, t.addEventListener("DOMContentLoaded", r)), () => Pi(e, r);
}
typeof document < "u" && Ap();
function Ti() {
  return pr !== "pointer";
}
function Si() {
  return pr;
}
const _p = /* @__PURE__ */ new Set([
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
function Rp(e, t, r) {
  let n = Ne(r == null ? void 0 : r.target);
  const o = typeof window < "u" ? ft(r == null ? void 0 : r.target).HTMLInputElement : HTMLInputElement, a = typeof window < "u" ? ft(r == null ? void 0 : r.target).HTMLTextAreaElement : HTMLTextAreaElement, s = typeof window < "u" ? ft(r == null ? void 0 : r.target).HTMLElement : HTMLElement, i = typeof window < "u" ? ft(r == null ? void 0 : r.target).KeyboardEvent : KeyboardEvent;
  return e = e || n.activeElement instanceof o && !_p.has(n.activeElement.type) || n.activeElement instanceof a || n.activeElement instanceof s && n.activeElement.isContentEditable, !(e && t === "keyboard" && r instanceof i && !Ip[r.key]);
}
function Lp(e, t, r) {
  oo(), de(() => {
    let n = (o, a) => {
      Rp(!!(r != null && r.isTextInput), o, a) && e(Ti());
    };
    return ro.add(n), () => {
      ro.delete(n);
    };
  }, t);
}
function ln(e) {
  const t = Ne(e), r = nt(t);
  if (Si() === "virtual") {
    let n = r;
    fi(() => {
      nt(t) === n && e.isConnected && cr(e);
    });
  } else cr(e);
}
function Ci(e) {
  let { isDisabled: t, onFocus: r, onBlur: n, onFocusChange: o } = e;
  const a = me((d) => {
    if (d.target === d.currentTarget)
      return n && n(d), o && o(!1), !0;
  }, [
    n,
    o
  ]), s = yi(a), i = me((d) => {
    const u = Ne(d.target), c = u ? nt(u) : nt();
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
function Qa(e) {
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
function Mp(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: Qa(e.onKeyDown),
      onKeyUp: Qa(e.onKeyUp)
    }
  };
}
let Fp = /* @__PURE__ */ se.createContext(null);
function Dp(e) {
  let t = xt(Fp) || {};
  pi(t, e);
  let { ref: r, ...n } = t;
  return n;
}
function zp(e, t) {
  let { focusProps: r } = Ci(e), { keyboardProps: n } = Mp(e), o = Yt(r, n), a = Dp(t), s = e.isDisabled ? {} : a, i = ae(e.autoFocus);
  de(() => {
    i.current && t.current && ln(t.current), i.current = !1;
  }, [
    t
  ]);
  let d = e.excludeFromTabOrder ? -1 : 0;
  return e.isDisabled && (d = void 0), {
    focusableProps: Yt({
      ...o,
      tabIndex: d
    }, s)
  };
}
function Gp({ children: e }) {
  let t = Le(() => ({
    register: () => {
    }
  }), []);
  return /* @__PURE__ */ se.createElement(Mo.Provider, {
    value: t
  }, e);
}
function zo(e) {
  let { isDisabled: t, onBlurWithin: r, onFocusWithin: n, onFocusWithinChange: o } = e, a = ae({
    isFocusWithin: !1
  }), { addGlobalListener: s, removeAllGlobalListeners: i } = Ao(), d = me((f) => {
    f.currentTarget.contains(f.target) && a.current.isFocusWithin && !f.currentTarget.contains(f.relatedTarget) && (a.current.isFocusWithin = !1, i(), r && r(f), o && o(!1));
  }, [
    r,
    o,
    a,
    i
  ]), u = yi(d), c = me((f) => {
    if (!f.currentTarget.contains(f.target)) return;
    const b = Ne(f.target), p = nt(b);
    if (!a.current.isFocusWithin && p === xe(f.nativeEvent)) {
      n && n(f), o && o(!0), a.current.isFocusWithin = !0, u(f);
      let $ = f.currentTarget;
      s(b, "focus", (w) => {
        if (a.current.isFocusWithin && !je($, w.target)) {
          let k = new b.defaultView.FocusEvent("blur", {
            relatedTarget: w.target
          });
          vi(k, $);
          let P = Lo(k);
          d(P);
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
let dn = !1, Ur = 0;
function ao() {
  dn = !0, setTimeout(() => {
    dn = !1;
  }, 50);
}
function es(e) {
  e.pointerType === "touch" && ao();
}
function Bp() {
  if (!(typeof document > "u"))
    return Ur === 0 && (typeof PointerEvent < "u" ? document.addEventListener("pointerup", es) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", ao)), Ur++, () => {
      Ur--, !(Ur > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", es) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", ao));
    };
}
function Vp(e) {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, isDisabled: o } = e, [a, s] = re(!1), i = ae({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  de(Bp, []);
  let { addGlobalListener: d, removeAllGlobalListeners: u } = Ao(), { hoverProps: c, triggerHoverEnd: f } = Le(() => {
    let b = (w, k) => {
      if (i.pointerType = k, o || k === "touch" || i.isHovered || !w.currentTarget.contains(w.target)) return;
      i.isHovered = !0;
      let P = w.currentTarget;
      i.target = P, d(Ne(w.target), "pointerover", (v) => {
        i.isHovered && i.target && !je(i.target, v.target) && p(v, v.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: P,
        pointerType: k
      }), r && r(!0), s(!0);
    }, p = (w, k) => {
      let P = i.target;
      i.pointerType = "", i.target = null, !(k === "touch" || !i.isHovered || !P) && (i.isHovered = !1, u(), n && n({
        type: "hoverend",
        target: P,
        pointerType: k
      }), r && r(!1), s(!1));
    }, $ = {};
    return typeof PointerEvent < "u" ? ($.onPointerEnter = (w) => {
      dn && w.pointerType === "mouse" || b(w, w.pointerType);
    }, $.onPointerLeave = (w) => {
      !o && w.currentTarget.contains(w.target) && p(w, w.pointerType);
    }) : process.env.NODE_ENV === "test" && ($.onTouchStart = () => {
      i.ignoreEmulatedMouseEvents = !0;
    }, $.onMouseEnter = (w) => {
      !i.ignoreEmulatedMouseEvents && !dn && b(w, "mouse"), i.ignoreEmulatedMouseEvents = !1;
    }, $.onMouseLeave = (w) => {
      !o && w.currentTarget.contains(w.target) && p(w, "mouse");
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
function Hp(e) {
  let { ref: t, onInteractOutside: r, isDisabled: n, onInteractOutsideStart: o } = e, a = ae({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), s = dt((d) => {
    r && Kr(d, t) && (o && o(d), a.current.isPointerDown = !0);
  }), i = dt((d) => {
    r && r(d);
  });
  de(() => {
    let d = a.current;
    if (n) return;
    const u = t.current, c = Ne(u);
    if (typeof PointerEvent < "u") {
      let f = (b) => {
        d.isPointerDown && Kr(b, t) && i(b), d.isPointerDown = !1;
      };
      return c.addEventListener("pointerdown", s, !0), c.addEventListener("click", f, !0), () => {
        c.removeEventListener("pointerdown", s, !0), c.removeEventListener("click", f, !0);
      };
    } else if (process.env.NODE_ENV === "test") {
      let f = (p) => {
        d.ignoreEmulatedMouseEvents ? d.ignoreEmulatedMouseEvents = !1 : d.isPointerDown && Kr(p, t) && i(p), d.isPointerDown = !1;
      }, b = (p) => {
        d.ignoreEmulatedMouseEvents = !0, d.isPointerDown && Kr(p, t) && i(p), d.isPointerDown = !1;
      };
      return c.addEventListener("mousedown", s, !0), c.addEventListener("mouseup", f, !0), c.addEventListener("touchstart", s, !0), c.addEventListener("touchend", b, !0), () => {
        c.removeEventListener("mousedown", s, !0), c.removeEventListener("mouseup", f, !0), c.removeEventListener("touchstart", s, !0), c.removeEventListener("touchend", b, !0);
      };
    }
  }, [
    t,
    n,
    s,
    i
  ]);
}
function Kr(e, t) {
  if (e.button > 0) return !1;
  if (e.target) {
    const r = e.target.ownerDocument;
    if (!r || !r.documentElement.contains(e.target) || e.target.closest("[data-react-aria-top-layer]")) return !1;
  }
  return t.current ? !e.composedPath().includes(t.current) : !1;
}
const ts = /* @__PURE__ */ se.createContext(null), so = "react-aria-focus-scope-restore";
let Te = null;
function Up(e) {
  let { children: t, contain: r, restoreFocus: n, autoFocus: o } = e, a = ae(null), s = ae(null), i = ae([]), { parentNode: d } = xt(ts) || {}, u = Le(() => new lo({
    scopeRef: i
  }), [
    i
  ]);
  Re(() => {
    let b = d || Fe.root;
    if (Fe.getTreeNode(b.scopeRef) && Te && !cn(Te, b.scopeRef)) {
      let p = Fe.getTreeNode(Te);
      p && (b = p);
    }
    b.addChild(u), Fe.addNode(u);
  }, [
    u,
    d
  ]), Re(() => {
    let b = Fe.getTreeNode(i);
    b && (b.contain = !!r);
  }, [
    r
  ]), Re(() => {
    var b;
    let p = (b = a.current) === null || b === void 0 ? void 0 : b.nextSibling, $ = [], w = (k) => k.stopPropagation();
    for (; p && p !== s.current; )
      $.push(p), p.addEventListener(so, w), p = p.nextSibling;
    return i.current = $, () => {
      for (let k of $) k.removeEventListener(so, w);
    };
  }, [
    t
  ]), qp(i, n, r), Yp(i, r), Jp(i, n, r), Zp(i, o), de(() => {
    const b = nt(Ne(i.current ? i.current[0] : void 0));
    let p = null;
    if (gt(b, i.current)) {
      for (let $ of Fe.traverse()) $.scopeRef && gt(b, $.scopeRef.current) && (p = $);
      p === Fe.getTreeNode(i) && (Te = p.scopeRef);
    }
  }, [
    i
  ]), Re(() => () => {
    var b, p, $;
    let w = ($ = (p = Fe.getTreeNode(i)) === null || p === void 0 || (b = p.parent) === null || b === void 0 ? void 0 : b.scopeRef) !== null && $ !== void 0 ? $ : null;
    (i === Te || cn(i, Te)) && (!w || Fe.getTreeNode(w)) && (Te = w), Fe.removeTreeNode(i);
  }, [
    i
  ]);
  let c = Le(() => Kp(i), []), f = Le(() => ({
    focusManager: c,
    parentNode: u
  }), [
    u,
    c
  ]);
  return /* @__PURE__ */ se.createElement(ts.Provider, {
    value: f
  }, /* @__PURE__ */ se.createElement("span", {
    "data-focus-scope-start": !0,
    hidden: !0,
    ref: a
  }), t, /* @__PURE__ */ se.createElement("span", {
    "data-focus-scope-end": !0,
    hidden: !0,
    ref: s
  }));
}
function Kp(e) {
  return {
    focusNext(t = {}) {
      let r = e.current, { from: n, tabbable: o, wrap: a, accept: s } = t;
      var i;
      let d = n || nt(Ne((i = r[0]) !== null && i !== void 0 ? i : void 0)), u = r[0].previousElementSibling, c = Kt(r), f = zt(c, {
        tabbable: o,
        accept: s
      }, r);
      f.currentNode = gt(d, r) ? d : u;
      let b = f.nextNode();
      return !b && a && (f.currentNode = u, b = f.nextNode()), b && jt(b, !0), b;
    },
    focusPrevious(t = {}) {
      let r = e.current, { from: n, tabbable: o, wrap: a, accept: s } = t;
      var i;
      let d = n || nt(Ne((i = r[0]) !== null && i !== void 0 ? i : void 0)), u = r[r.length - 1].nextElementSibling, c = Kt(r), f = zt(c, {
        tabbable: o,
        accept: s
      }, r);
      f.currentNode = gt(d, r) ? d : u;
      let b = f.previousNode();
      return !b && a && (f.currentNode = u, b = f.previousNode()), b && jt(b, !0), b;
    },
    focusFirst(t = {}) {
      let r = e.current, { tabbable: n, accept: o } = t, a = Kt(r), s = zt(a, {
        tabbable: n,
        accept: o
      }, r);
      s.currentNode = r[0].previousElementSibling;
      let i = s.nextNode();
      return i && jt(i, !0), i;
    },
    focusLast(t = {}) {
      let r = e.current, { tabbable: n, accept: o } = t, a = Kt(r), s = zt(a, {
        tabbable: n,
        accept: o
      }, r);
      s.currentNode = r[r.length - 1].nextElementSibling;
      let i = s.previousNode();
      return i && jt(i, !0), i;
    }
  };
}
function Kt(e) {
  return e[0].parentElement;
}
function Er(e) {
  let t = Fe.getTreeNode(Te);
  for (; t && t.scopeRef !== e; ) {
    if (t.contain) return !1;
    t = t.parent;
  }
  return !0;
}
function Wp(e) {
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
function Yp(e, t) {
  let r = ae(void 0), n = ae(void 0);
  Re(() => {
    let o = e.current;
    if (!t) {
      n.current && (cancelAnimationFrame(n.current), n.current = void 0);
      return;
    }
    const a = Ne(o ? o[0] : void 0);
    let s = (u) => {
      if (u.key !== "Tab" || u.altKey || u.ctrlKey || u.metaKey || !Er(e) || u.isComposing) return;
      let c = nt(a), f = e.current;
      if (!f || !gt(c, f)) return;
      let b = Kt(f), p = zt(b, {
        tabbable: !0
      }, f);
      if (!c) return;
      p.currentNode = c;
      let $ = u.shiftKey ? p.previousNode() : p.nextNode();
      $ || (p.currentNode = u.shiftKey ? f[f.length - 1].nextElementSibling : f[0].previousElementSibling, $ = u.shiftKey ? p.previousNode() : p.nextNode()), u.preventDefault(), $ && jt($, !0);
    }, i = (u) => {
      (!Te || cn(Te, e)) && gt(xe(u), e.current) ? (Te = e, r.current = xe(u)) : Er(e) && !Dt(xe(u), e) ? r.current ? r.current.focus() : Te && Te.current && io(Te.current) : Er(e) && (r.current = xe(u));
    }, d = (u) => {
      n.current && cancelAnimationFrame(n.current), n.current = requestAnimationFrame(() => {
        let c = Si(), f = (c === "virtual" || c === null) && Oo() && ui(), b = nt(a);
        if (!f && b && Er(e) && !Dt(b, e)) {
          Te = e;
          let $ = xe(u);
          if ($ && $.isConnected) {
            var p;
            r.current = $, (p = r.current) === null || p === void 0 || p.focus();
          } else Te.current && io(Te.current);
        }
      });
    };
    return a.addEventListener("keydown", s, !1), a.addEventListener("focusin", i, !1), o == null || o.forEach((u) => u.addEventListener("focusin", i, !1)), o == null || o.forEach((u) => u.addEventListener("focusout", d, !1)), () => {
      a.removeEventListener("keydown", s, !1), a.removeEventListener("focusin", i, !1), o == null || o.forEach((u) => u.removeEventListener("focusin", i, !1)), o == null || o.forEach((u) => u.removeEventListener("focusout", d, !1));
    };
  }, [
    e,
    t
  ]), Re(() => () => {
    n.current && cancelAnimationFrame(n.current);
  }, [
    n
  ]);
}
function ji(e) {
  return Dt(e);
}
function gt(e, t) {
  return !e || !t ? !1 : t.some((r) => r.contains(e));
}
function Dt(e, t = null) {
  if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
  for (let { scopeRef: r } of Fe.traverse(Fe.getTreeNode(t)))
    if (r && gt(e, r.current)) return !0;
  return !1;
}
function Xp(e) {
  return Dt(e, Te);
}
function cn(e, t) {
  var r;
  let n = (r = Fe.getTreeNode(t)) === null || r === void 0 ? void 0 : r.parent;
  for (; n; ) {
    if (n.scopeRef === e) return !0;
    n = n.parent;
  }
  return !1;
}
function jt(e, t = !1) {
  if (e != null && !t) try {
    ln(e);
  } catch {
  }
  else if (e != null) try {
    e.focus();
  } catch {
  }
}
function Ii(e, t = !0) {
  let r = e[0].previousElementSibling, n = Kt(e), o = zt(n, {
    tabbable: t
  }, e);
  o.currentNode = r;
  let a = o.nextNode();
  return t && !a && (n = Kt(e), o = zt(n, {
    tabbable: !1
  }, e), o.currentNode = r, a = o.nextNode()), a;
}
function io(e, t = !0) {
  jt(Ii(e, t));
}
function Zp(e, t) {
  const r = se.useRef(t);
  de(() => {
    if (r.current) {
      Te = e;
      const n = Ne(e.current ? e.current[0] : void 0);
      !gt(nt(n), Te.current) && e.current && io(e.current);
    }
    r.current = !1;
  }, [
    e
  ]);
}
function qp(e, t, r) {
  Re(() => {
    if (t || r) return;
    let n = e.current;
    const o = Ne(n ? n[0] : void 0);
    let a = (s) => {
      let i = xe(s);
      gt(i, e.current) ? Te = e : ji(i) || (Te = null);
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
function rs(e) {
  let t = Fe.getTreeNode(Te);
  for (; t && t.scopeRef !== e; ) {
    if (t.nodeToRestore) return !1;
    t = t.parent;
  }
  return (t == null ? void 0 : t.scopeRef) === e;
}
function Jp(e, t, r) {
  const n = ae(typeof document < "u" ? nt(Ne(e.current ? e.current[0] : void 0)) : null);
  Re(() => {
    let o = e.current;
    const a = Ne(o ? o[0] : void 0);
    if (!t || r) return;
    let s = () => {
      (!Te || cn(Te, e)) && gt(nt(a), e.current) && (Te = e);
    };
    return a.addEventListener("focusin", s, !1), o == null || o.forEach((i) => i.addEventListener("focusin", s, !1)), () => {
      a.removeEventListener("focusin", s, !1), o == null || o.forEach((i) => i.removeEventListener("focusin", s, !1));
    };
  }, [
    e,
    r
  ]), Re(() => {
    const o = Ne(e.current ? e.current[0] : void 0);
    if (!t) return;
    let a = (s) => {
      if (s.key !== "Tab" || s.altKey || s.ctrlKey || s.metaKey || !Er(e) || s.isComposing) return;
      let i = o.activeElement;
      if (!Dt(i, e) || !rs(e)) return;
      let d = Fe.getTreeNode(e);
      if (!d) return;
      let u = d.nodeToRestore, c = zt(o.body, {
        tabbable: !0
      });
      c.currentNode = i;
      let f = s.shiftKey ? c.previousNode() : c.nextNode();
      if ((!u || !u.isConnected || u === o.body) && (u = void 0, d.nodeToRestore = void 0), (!f || !Dt(f, e)) && u) {
        c.currentNode = u;
        do
          f = s.shiftKey ? c.previousNode() : c.nextNode();
        while (Dt(f, e));
        s.preventDefault(), s.stopPropagation(), f ? jt(f, !0) : ji(u) ? jt(u, !0) : i.blur();
      }
    };
    return r || o.addEventListener("keydown", a, !0), () => {
      r || o.removeEventListener("keydown", a, !0);
    };
  }, [
    e,
    t,
    r
  ]), Re(() => {
    const o = Ne(e.current ? e.current[0] : void 0);
    if (!t) return;
    let a = Fe.getTreeNode(e);
    if (a) {
      var s;
      return a.nodeToRestore = (s = n.current) !== null && s !== void 0 ? s : void 0, () => {
        let i = Fe.getTreeNode(e);
        if (!i) return;
        let d = i.nodeToRestore, u = nt(o);
        if (t && d && (u && Dt(u, e) || u === o.body && rs(e))) {
          let c = Fe.clone();
          requestAnimationFrame(() => {
            if (o.activeElement === o.body) {
              let f = c.getTreeNode(e);
              for (; f; ) {
                if (f.nodeToRestore && f.nodeToRestore.isConnected) {
                  ns(f.nodeToRestore);
                  return;
                }
                f = f.parent;
              }
              for (f = c.getTreeNode(e); f; ) {
                if (f.scopeRef && f.scopeRef.current && Fe.getTreeNode(f.scopeRef)) {
                  let b = Ii(f.scopeRef.current, !0);
                  ns(b);
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
function ns(e) {
  e.dispatchEvent(new CustomEvent(so, {
    bubbles: !0,
    cancelable: !0
  })) && jt(e);
}
function zt(e, t, r) {
  let n = t != null && t.tabbable ? lp : mi, o = (e == null ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null, a = Ne(o), s = B0(a, e || a, NodeFilter.SHOW_ELEMENT, {
    acceptNode(i) {
      var d;
      return !(t == null || (d = t.from) === null || d === void 0) && d.contains(i) || t != null && t.tabbable && i.tagName === "INPUT" && i.getAttribute("type") === "radio" && (!Wp(i) || s.currentNode.tagName === "INPUT" && s.currentNode.type === "radio" && s.currentNode.name === i.name) ? NodeFilter.FILTER_REJECT : n(i) && (!r || gt(i, r)) && (!(t != null && t.accept) || t.accept(i)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  return t != null && t.from && (s.currentNode = t.from), s;
}
class Go {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(t) {
    return this.fastMap.get(t);
  }
  addTreeNode(t, r, n) {
    let o = this.fastMap.get(r ?? null);
    if (!o) return;
    let a = new lo({
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
    let r = new Go();
    var n;
    for (let o of this.traverse()) r.addTreeNode(o.scopeRef, (n = (t = o.parent) === null || t === void 0 ? void 0 : t.scopeRef) !== null && n !== void 0 ? n : null, o.nodeToRestore);
    return r;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map(), this.root = new lo({
      scopeRef: null
    }), this.fastMap.set(null, this.root);
  }
}
class lo {
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
let Fe = new Go();
function Oi(e = {}) {
  let { autoFocus: t = !1, isTextInput: r, within: n } = e, o = ae({
    isFocused: !1,
    isFocusVisible: t || Ti()
  }), [a, s] = re(!1), [i, d] = re(() => o.current.isFocused && o.current.isFocusVisible), u = me(() => d(o.current.isFocused && o.current.isFocusVisible), []), c = me((p) => {
    o.current.isFocused = p, s(p), u();
  }, [
    u
  ]);
  Lp((p) => {
    o.current.isFocusVisible = p, u();
  }, [], {
    isTextInput: r
  });
  let { focusProps: f } = Ci({
    isDisabled: n,
    onFocusChange: c
  }), { focusWithinProps: b } = zo({
    isDisabled: !n,
    onFocusWithinChange: c
  });
  return {
    isFocused: a,
    isFocusVisible: i,
    focusProps: n ? b : f
  };
}
function Qp(e, t, r) {
  let { type: n } = e, { isOpen: o } = t;
  de(() => {
    r && r.current && $i.set(r.current, t.close);
  });
  let a;
  n === "menu" ? a = !0 : n === "listbox" && (a = "listbox");
  let s = jo();
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
const Ln = typeof document < "u" && window.visualViewport, eg = /* @__PURE__ */ new Set([
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
let Wr = 0, Mn;
function tg(e = {}) {
  let { isDisabled: t } = e;
  Re(() => {
    if (!t)
      return Wr++, Wr === 1 && ($n() ? Mn = ng() : Mn = rg()), () => {
        Wr--, Wr === 0 && Mn();
      };
  }, [
    t
  ]);
}
function rg() {
  let e = window.innerWidth - document.documentElement.clientWidth;
  return Mr(e > 0 && // Use scrollbar-gutter when supported because it also works for fixed positioned elements.
  ("scrollbarGutter" in document.documentElement.style ? Wt(document.documentElement, "scrollbarGutter", "stable") : Wt(document.documentElement, "paddingRight", `${e}px`)), Wt(document.documentElement, "overflow", "hidden"));
}
function ng() {
  let e, t, r = (u) => {
    e = gi(u.target, !0), !(e === document.documentElement && e === document.body) && e instanceof HTMLElement && window.getComputedStyle(e).overscrollBehavior === "auto" && (t = Wt(e, "overscrollBehavior", "contain"));
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
    og(c) && (i(), c.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      c.style.transform = "", Ln && (Ln.height < window.innerHeight ? requestAnimationFrame(() => {
        os(c);
      }) : Ln.addEventListener("resize", () => os(c), {
        once: !0
      }));
    }));
  }, s = null, i = () => {
    if (s) return;
    let u = () => {
      window.scrollTo(0, 0);
    }, c = window.pageXOffset, f = window.pageYOffset;
    s = Mr(yr(window, "scroll", u), Wt(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), Wt(document.documentElement, "overflow", "hidden"), Wt(document.body, "marginTop", `-${f}px`), () => {
      window.scrollTo(c, f);
    }), window.scrollTo(0, 0);
  }, d = Mr(yr(document, "touchstart", r, {
    passive: !1,
    capture: !0
  }), yr(document, "touchmove", n, {
    passive: !1,
    capture: !0
  }), yr(document, "touchend", o, {
    passive: !1,
    capture: !0
  }), yr(document, "focus", a, !0));
  return () => {
    t == null || t(), s == null || s(), d();
  };
}
function Wt(e, t, r) {
  let n = e.style[t];
  return e.style[t] = r, () => {
    e.style[t] = n;
  };
}
function yr(e, t, r, n) {
  return e.addEventListener(t, r, n), () => {
    e.removeEventListener(t, r, n);
  };
}
function os(e) {
  let t = document.scrollingElement || document.documentElement, r = e;
  for (; r && r !== t; ) {
    let n = gi(r);
    if (n !== document.documentElement && n !== document.body && n !== r) {
      let o = n.getBoundingClientRect().top, a = r.getBoundingClientRect().top;
      a > o + r.clientHeight && (n.scrollTop += a - o);
    }
    r = n.parentElement;
  }
}
function og(e) {
  return e instanceof HTMLInputElement && !eg.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
const ag = /* @__PURE__ */ Es({});
function sg() {
  var e;
  return (e = xt(ag)) !== null && e !== void 0 ? e : {};
}
var Ai = {};
Ai = {
  dismiss: "تجاهل"
};
var _i = {};
_i = {
  dismiss: "Отхвърляне"
};
var Ri = {};
Ri = {
  dismiss: "Odstranit"
};
var Li = {};
Li = {
  dismiss: "Luk"
};
var Mi = {};
Mi = {
  dismiss: "Schließen"
};
var Fi = {};
Fi = {
  dismiss: "Απόρριψη"
};
var Di = {};
Di = {
  dismiss: "Dismiss"
};
var zi = {};
zi = {
  dismiss: "Descartar"
};
var Gi = {};
Gi = {
  dismiss: "Lõpeta"
};
var Bi = {};
Bi = {
  dismiss: "Hylkää"
};
var Vi = {};
Vi = {
  dismiss: "Rejeter"
};
var Hi = {};
Hi = {
  dismiss: "התעלם"
};
var Ui = {};
Ui = {
  dismiss: "Odbaci"
};
var Ki = {};
Ki = {
  dismiss: "Elutasítás"
};
var Wi = {};
Wi = {
  dismiss: "Ignora"
};
var Yi = {};
Yi = {
  dismiss: "閉じる"
};
var Xi = {};
Xi = {
  dismiss: "무시"
};
var Zi = {};
Zi = {
  dismiss: "Atmesti"
};
var qi = {};
qi = {
  dismiss: "Nerādīt"
};
var Ji = {};
Ji = {
  dismiss: "Lukk"
};
var Qi = {};
Qi = {
  dismiss: "Negeren"
};
var el = {};
el = {
  dismiss: "Zignoruj"
};
var tl = {};
tl = {
  dismiss: "Descartar"
};
var rl = {};
rl = {
  dismiss: "Dispensar"
};
var nl = {};
nl = {
  dismiss: "Revocare"
};
var ol = {};
ol = {
  dismiss: "Пропустить"
};
var al = {};
al = {
  dismiss: "Zrušiť"
};
var sl = {};
sl = {
  dismiss: "Opusti"
};
var il = {};
il = {
  dismiss: "Odbaci"
};
var ll = {};
ll = {
  dismiss: "Avvisa"
};
var dl = {};
dl = {
  dismiss: "Kapat"
};
var cl = {};
cl = {
  dismiss: "Скасувати"
};
var ul = {};
ul = {
  dismiss: "取消"
};
var fl = {};
fl = {
  dismiss: "關閉"
};
var pl = {};
pl = {
  "ar-AE": Ai,
  "bg-BG": _i,
  "cs-CZ": Ri,
  "da-DK": Li,
  "de-DE": Mi,
  "el-GR": Fi,
  "en-US": Di,
  "es-ES": zi,
  "et-EE": Gi,
  "fi-FI": Bi,
  "fr-FR": Vi,
  "he-IL": Hi,
  "hr-HR": Ui,
  "hu-HU": Ki,
  "it-IT": Wi,
  "ja-JP": Yi,
  "ko-KR": Xi,
  "lt-LT": Zi,
  "lv-LV": qi,
  "nb-NO": Ji,
  "nl-NL": Qi,
  "pl-PL": el,
  "pt-BR": tl,
  "pt-PT": rl,
  "ro-RO": nl,
  "ru-RU": ol,
  "sk-SK": al,
  "sl-SI": sl,
  "sr-SP": il,
  "sv-SE": ll,
  "tr-TR": dl,
  "uk-UA": cl,
  "zh-CN": ul,
  "zh-TW": fl
};
const as = {
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
function ig(e = {}) {
  let { style: t, isFocusable: r } = e, [n, o] = re(!1), { focusWithinProps: a } = zo({
    isDisabled: !r,
    onFocusWithinChange: (i) => o(i)
  }), s = Le(() => n ? t : t ? {
    ...as,
    ...t
  } : as, [
    n
  ]);
  return {
    visuallyHiddenProps: {
      ...a,
      style: s
    }
  };
}
function lg(e) {
  let { children: t, elementType: r = "div", isFocusable: n, style: o, ...a } = e, { visuallyHiddenProps: s } = ig(e);
  return /* @__PURE__ */ se.createElement(r, Yt(a, s), t);
}
function dg(e) {
  return e && e.__esModule ? e.default : e;
}
function ss(e) {
  let { onDismiss: t, ...r } = e, n = j0(dg(pl), "@react-aria/overlays"), o = ep(r, n.format("dismiss")), a = () => {
    t && t();
  };
  return /* @__PURE__ */ se.createElement(lg, null, /* @__PURE__ */ se.createElement("button", {
    ...o,
    tabIndex: -1,
    onClick: a,
    style: {
      width: 1,
      height: 1
    }
  }));
}
const gl = /* @__PURE__ */ se.createContext(null);
function cg(e) {
  let t = Co(), { portalContainer: r = t ? null : document.body, isExiting: n } = e, [o, a] = re(!1), s = Le(() => ({
    contain: o,
    setContain: a
  }), [
    o,
    a
  ]), { getContainer: i } = sg();
  if (!e.portalContainer && i && (r = i()), !r) return null;
  let d = e.children;
  return e.disableFocusManagement || (d = /* @__PURE__ */ se.createElement(Up, {
    restoreFocus: !0,
    contain: (e.shouldContainFocus || o) && !n
  }, d)), d = /* @__PURE__ */ se.createElement(gl.Provider, {
    value: s
  }, /* @__PURE__ */ se.createElement(Gp, null, d)), /* @__PURE__ */ ql.createPortal(d, r);
}
function ug() {
  let e = xt(gl), t = e == null ? void 0 : e.setContain;
  Re(() => {
    t == null || t(!0);
  }, [
    t
  ]);
}
function ml(e) {
  return Ie(e);
}
var fg = (e, t, r = !0) => {
  if (!t)
    return [e, {}];
  const n = t.reduce((o, a) => a in e ? { ...o, [a]: e[a] } : o, {});
  return r ? [Object.keys(e).filter((a) => !t.includes(a)).reduce((a, s) => ({ ...a, [s]: e[s] }), {}), n] : [e, n];
}, pg = {
  default: "bg-default text-default-foreground",
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  success: "bg-success text-success-foreground",
  warning: "bg-warning text-warning-foreground",
  danger: "bg-danger text-danger-foreground",
  foreground: "bg-foreground text-background"
}, gg = {
  default: "shadow-lg shadow-default/50 bg-default text-default-foreground",
  primary: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
  secondary: "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
  success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
  warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
  danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground"
}, mg = {
  default: "bg-transparent border-default text-foreground",
  primary: "bg-transparent border-primary text-primary",
  secondary: "bg-transparent border-secondary text-secondary",
  success: "bg-transparent border-success text-success",
  warning: "bg-transparent border-warning text-warning",
  danger: "bg-transparent border-danger text-danger"
}, bg = {
  default: "bg-default/40 text-default-700",
  primary: "bg-primary/20 text-primary-600",
  secondary: "bg-secondary/20 text-secondary-600",
  success: "bg-success/20 text-success-700 dark:text-success",
  warning: "bg-warning/20 text-warning-700 dark:text-warning",
  danger: "bg-danger/20 text-danger-600 dark:text-danger-500"
}, hg = {
  default: "border-default bg-default-100 text-default-foreground",
  primary: "border-default bg-default-100 text-primary",
  secondary: "border-default bg-default-100 text-secondary",
  success: "border-default bg-default-100 text-success",
  warning: "border-default bg-default-100 text-warning",
  danger: "border-default bg-default-100 text-danger"
}, $g = {
  default: "bg-transparent text-default-foreground",
  primary: "bg-transparent text-primary",
  secondary: "bg-transparent text-secondary",
  success: "bg-transparent text-success",
  warning: "bg-transparent text-warning",
  danger: "bg-transparent text-danger"
}, vg = {
  default: "border-default text-default-foreground",
  primary: "border-primary text-primary",
  secondary: "border-secondary text-secondary",
  success: "border-success text-success",
  warning: "border-warning text-warning",
  danger: "border-danger text-danger"
}, ie = {
  solid: pg,
  shadow: gg,
  bordered: mg,
  flat: bg,
  faded: hg,
  light: $g,
  ghost: vg
}, yg = {
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
}, xg = {
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
}, wg = {
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
}, kg = {
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
}, ht = "250ms", Ng = {
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
}, Eg = {
  ...xg,
  ...Ng,
  ...wg,
  ...kg,
  ...yg
}, Yr = ["small", "medium", "large"], is = {
  theme: {
    spacing: ["divider"],
    radius: Yr
  },
  classGroups: {
    shadow: [{ shadow: Yr }],
    opacity: [{ opacity: ["disabled"] }],
    "font-size": [{ text: ["tiny", ...Yr] }],
    "border-w": [{ border: Yr }],
    "bg-image": [
      "bg-stripe-gradient-default",
      "bg-stripe-gradient-primary",
      "bg-stripe-gradient-secondary",
      "bg-stripe-gradient-success",
      "bg-stripe-gradient-warning",
      "bg-stripe-gradient-danger"
    ],
    transition: Object.keys(Eg).filter((e) => e.includes(".transition")).map((e) => e.replace(".", ""))
    // remove the dot from the key, .transition-background -> transition-background
  }
}, Pg = /\s+/g, co = (e) => typeof e != "string" || !e ? e : e.replace(Pg, " ").trim(), un = (...e) => {
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
  return t.length > 0 ? co(t.join(" ")) : void 0;
}, ls = (e) => e === !1 ? "false" : e === !0 ? "true" : e === 0 ? "0" : e, tt = (e) => {
  if (!e || typeof e != "object") return !0;
  for (let t in e) return !1;
  return !0;
}, Tg = (e, t) => {
  if (e === t) return !0;
  if (!e || !t) return !1;
  let r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++) {
    let a = r[o];
    if (!n.includes(a) || e[a] !== t[a]) return !1;
  }
  return !0;
}, ds = (e, t) => {
  for (let r in t) if (Object.prototype.hasOwnProperty.call(t, r)) {
    let n = t[r];
    r in e ? e[r] = un(e[r], n) : e[r] = n;
  }
  return e;
}, bl = (e, t) => {
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    Array.isArray(n) ? bl(n, t) : n && t.push(n);
  }
}, hl = (...e) => {
  let t = [];
  bl(e, t);
  let r = [];
  for (let n = 0; n < t.length; n++) t[n] && r.push(t[n]);
  return r;
}, uo = (e, t) => {
  let r = {};
  for (let n in e) {
    let o = e[n];
    if (n in t) {
      let a = t[n];
      Array.isArray(o) || Array.isArray(a) ? r[n] = hl(a, o) : typeof o == "object" && typeof a == "object" && o && a ? r[n] = uo(o, a) : r[n] = a + " " + o;
    } else r[n] = o;
  }
  for (let n in t) n in e || (r[n] = t[n]);
  return r;
}, Sg = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 };
function Cg() {
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
var Ct = Cg(), jg = (e) => {
  let t = (r, n) => {
    let { extend: o = null, slots: a = {}, variants: s = {}, compoundVariants: i = [], compoundSlots: d = [], defaultVariants: u = {} } = r, c = { ...Sg, ...n }, f = o != null && o.base ? un(o.base, r == null ? void 0 : r.base) : r == null ? void 0 : r.base, b = o != null && o.variants && !tt(o.variants) ? uo(s, o.variants) : s, p = o != null && o.defaultVariants && !tt(o.defaultVariants) ? { ...o.defaultVariants, ...u } : u;
    !tt(c.twMergeConfig) && !Tg(c.twMergeConfig, Ct.cachedTwMergeConfig) && (Ct.didTwMergeConfigChange = !0, Ct.cachedTwMergeConfig = c.twMergeConfig);
    let $ = tt(o == null ? void 0 : o.slots), w = tt(a) ? {} : { base: un(r == null ? void 0 : r.base, $ && (o == null ? void 0 : o.base)), ...a }, k = $ ? w : ds({ ...o == null ? void 0 : o.slots }, tt(w) ? { base: r == null ? void 0 : r.base } : w), P = tt(o == null ? void 0 : o.compoundVariants) ? i : hl(o == null ? void 0 : o.compoundVariants, i), v = (S) => {
      if (tt(b) && tt(a) && $) return e(f, S == null ? void 0 : S.class, S == null ? void 0 : S.className)(c);
      if (P && !Array.isArray(P)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof P}`);
      if (d && !Array.isArray(d)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof d}`);
      let I = (E, _, m = [], y) => {
        let N = m;
        if (typeof _ == "string") {
          let C = co(_).split(" ");
          for (let Y = 0; Y < C.length; Y++) N.push(`${E}:${C[Y]}`);
        } else if (Array.isArray(_)) for (let C = 0; C < _.length; C++) N.push(`${E}:${_[C]}`);
        else if (typeof _ == "object" && typeof y == "string" && y in _) {
          let C = _[y];
          if (C && typeof C == "string") {
            let Y = co(C).split(" "), D = [];
            for (let B = 0; B < Y.length; B++) D.push(`${E}:${Y[B]}`);
            N[y] = N[y] ? N[y].concat(D) : D;
          } else if (Array.isArray(C) && C.length > 0) {
            let Y = [];
            for (let D = 0; D < C.length; D++) Y.push(`${E}:${C[D]}`);
            N[y] = Y;
          }
        }
        return N;
      }, A = (E, _ = b, m = null, y = null) => {
        let N = _[E];
        if (!N || tt(N)) return null;
        let C = (y == null ? void 0 : y[E]) ?? (S == null ? void 0 : S[E]);
        if (C === null) return null;
        let Y = ls(C), D = Array.isArray(c.responsiveVariants) && c.responsiveVariants.length > 0 || c.responsiveVariants === !0, B = p == null ? void 0 : p[E], W = [];
        if (typeof Y == "object" && D) for (let [X, L] of Object.entries(Y)) {
          let K = N[L];
          if (X === "initial") {
            B = L;
            continue;
          }
          Array.isArray(c.responsiveVariants) && !c.responsiveVariants.includes(X) || (W = I(X, K, W, m));
        }
        let M = Y != null && typeof Y != "object" ? Y : ls(B), G = N[M || "false"];
        return typeof W == "object" && typeof m == "string" && W[m] ? ds(W, G) : W.length > 0 ? (W.push(G), m === "base" ? W.join(" ") : W) : G;
      }, H = () => {
        if (!b) return null;
        let E = Object.keys(b), _ = [];
        for (let m = 0; m < E.length; m++) {
          let y = A(E[m], b);
          y && _.push(y);
        }
        return _;
      }, O = (E, _) => {
        if (!b || typeof b != "object") return null;
        let m = [];
        for (let y in b) {
          let N = A(y, b, E, _), C = E === "base" && typeof N == "string" ? N : N && N[E];
          C && m.push(C);
        }
        return m;
      }, R = {};
      for (let E in S) {
        let _ = S[E];
        _ !== void 0 && (R[E] = _);
      }
      let z = (E, _) => {
        var y;
        let m = typeof (S == null ? void 0 : S[E]) == "object" ? { [E]: (y = S[E]) == null ? void 0 : y.initial } : {};
        return { ...p, ...R, ...m, ..._ };
      }, g = (E = [], _) => {
        let m = [], y = E.length;
        for (let N = 0; N < y; N++) {
          let { class: C, className: Y, ...D } = E[N], B = !0, W = z(null, _);
          for (let M in D) {
            let G = D[M], X = W[M];
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
          B && (C && m.push(C), Y && m.push(Y));
        }
        return m;
      }, T = (E) => {
        let _ = g(P, E);
        if (!Array.isArray(_)) return _;
        let m = {}, y = e;
        for (let N = 0; N < _.length; N++) {
          let C = _[N];
          if (typeof C == "string") m.base = y(m.base, C)(c);
          else if (typeof C == "object") for (let Y in C) m[Y] = y(m[Y], C[Y])(c);
        }
        return m;
      }, h = (E) => {
        if (d.length < 1) return null;
        let _ = {}, m = z(null, E);
        for (let y = 0; y < d.length; y++) {
          let { slots: N = [], class: C, className: Y, ...D } = d[y];
          if (!tt(D)) {
            let B = !0;
            for (let W in D) {
              let M = m[W], G = D[W];
              if (M === void 0 || (Array.isArray(G) ? !G.includes(M) : G !== M)) {
                B = !1;
                break;
              }
            }
            if (!B) continue;
          }
          for (let B = 0; B < N.length; B++) {
            let W = N[B];
            _[W] || (_[W] = []), _[W].push([C, Y]);
          }
        }
        return _;
      };
      if (!tt(a) || !$) {
        let E = {};
        if (typeof k == "object" && !tt(k)) {
          let _ = e;
          for (let m in k) E[m] = (y) => {
            let N = T(y), C = h(y);
            return _(k[m], O(m, y), N ? N[m] : void 0, C ? C[m] : void 0, y == null ? void 0 : y.class, y == null ? void 0 : y.className)(c);
          };
        }
        return E;
      }
      return e(f, H(), g(P), S == null ? void 0 : S.class, S == null ? void 0 : S.className)(c);
    }, j = () => {
      if (!(!b || typeof b != "object")) return Object.keys(b);
    };
    return v.variantKeys = j(), v.extend = o, v.base = f, v.slots = k, v.variants = b, v.defaultVariants = p, v.compoundSlots = d, v.compoundVariants = P, v;
  };
  return { tv: t, createTV: (r) => (n, o) => t(n, o ? uo(r, o) : r) };
};
const Bo = "-", Ig = (e) => {
  const t = Ag(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(Bo);
      return i[0] === "" && i.length !== 1 && i.shift(), $l(i, t) || Og(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const d = r[s] || [];
      return i && n[s] ? [...d, ...n[s]] : d;
    }
  };
}, $l = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? $l(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Bo);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}, cs = /^\[(.+)\]$/, Og = (e) => {
  if (cs.test(e)) {
    const t = cs.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Ag = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in r)
    fo(r[o], n, o, t);
  return n;
}, fo = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : us(t, o);
      a.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (_g(o)) {
        fo(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      fo(s, us(t, a), r, n);
    });
  });
}, us = (e, t) => {
  let r = e;
  return t.split(Bo).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, _g = (e) => e.isThemeGetter, Rg = (e) => {
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
}, po = "!", go = ":", Lg = go.length, Mg = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const a = [];
    let s = 0, i = 0, d = 0, u;
    for (let $ = 0; $ < o.length; $++) {
      let w = o[$];
      if (s === 0 && i === 0) {
        if (w === go) {
          a.push(o.slice(d, $)), d = $ + Lg;
          continue;
        }
        if (w === "/") {
          u = $;
          continue;
        }
      }
      w === "[" ? s++ : w === "]" ? s-- : w === "(" ? i++ : w === ")" && i--;
    }
    const c = a.length === 0 ? o : o.substring(d), f = Fg(c), b = f !== c, p = u && u > d ? u - d : void 0;
    return {
      modifiers: a,
      hasImportantModifier: b,
      baseClassName: f,
      maybePostfixModifierPosition: p
    };
  };
  if (t) {
    const o = t + go, a = n;
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
}, Fg = (e) => e.endsWith(po) ? e.substring(0, e.length - 1) : e.startsWith(po) ? e.substring(1) : e, Dg = (e) => {
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
}, zg = (e) => ({
  cache: Rg(e.cacheSize),
  parseClassName: Mg(e),
  sortModifiers: Dg(e),
  ...Ig(e)
}), Gg = /\s+/, Bg = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, s = [], i = e.trim().split(Gg);
  let d = "";
  for (let u = i.length - 1; u >= 0; u -= 1) {
    const c = i[u], {
      isExternal: f,
      modifiers: b,
      hasImportantModifier: p,
      baseClassName: $,
      maybePostfixModifierPosition: w
    } = r(c);
    if (f) {
      d = c + (d.length > 0 ? " " + d : d);
      continue;
    }
    let k = !!w, P = n(k ? $.substring(0, w) : $);
    if (!P) {
      if (!k) {
        d = c + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (P = n($), !P) {
        d = c + (d.length > 0 ? " " + d : d);
        continue;
      }
      k = !1;
    }
    const v = a(b).join(":"), j = p ? v + po : v, S = j + P;
    if (s.includes(S))
      continue;
    s.push(S);
    const I = o(P, k);
    for (let A = 0; A < I.length; ++A) {
      const H = I[A];
      s.push(j + H);
    }
    d = c + (d.length > 0 ? " " + d : d);
  }
  return d;
};
function Vg() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = vl(t)) && (n && (n += " "), n += r);
  return n;
}
const vl = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = vl(e[n])) && (r && (r += " "), r += t);
  return r;
};
function mo(e, ...t) {
  let r, n, o, a = s;
  function s(d) {
    const u = t.reduce((c, f) => f(c), e());
    return r = zg(u), n = r.cache.get, o = r.cache.set, a = i, i(d);
  }
  function i(d) {
    const u = n(d);
    if (u)
      return u;
    const c = Bg(d, r);
    return o(d, c), c;
  }
  return function() {
    return a(Vg.apply(null, arguments));
  };
}
const Ge = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, yl = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, xl = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Hg = /^\d+\/\d+$/, Ug = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Kg = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Wg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Yg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Xg = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, tr = (e) => Hg.test(e), ge = (e) => !!e && !Number.isNaN(Number(e)), Lt = (e) => !!e && Number.isInteger(Number(e)), Fn = (e) => e.endsWith("%") && ge(e.slice(0, -1)), Pt = (e) => Ug.test(e), Zg = () => !0, qg = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Kg.test(e) && !Wg.test(e)
), wl = () => !1, Jg = (e) => Yg.test(e), Qg = (e) => Xg.test(e), e1 = (e) => !J(e) && !Q(e), t1 = (e) => gr(e, El, wl), J = (e) => yl.test(e), Ut = (e) => gr(e, Pl, qg), Dn = (e) => gr(e, s1, ge), fs = (e) => gr(e, kl, wl), r1 = (e) => gr(e, Nl, Qg), Xr = (e) => gr(e, Tl, Jg), Q = (e) => xl.test(e), xr = (e) => mr(e, Pl), n1 = (e) => mr(e, i1), ps = (e) => mr(e, kl), o1 = (e) => mr(e, El), a1 = (e) => mr(e, Nl), Zr = (e) => mr(e, Tl, !0), gr = (e, t, r) => {
  const n = yl.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, mr = (e, t, r = !1) => {
  const n = xl.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, kl = (e) => e === "position" || e === "percentage", Nl = (e) => e === "image" || e === "url", El = (e) => e === "length" || e === "size" || e === "bg-size", Pl = (e) => e === "length", s1 = (e) => e === "number", i1 = (e) => e === "family-name", Tl = (e) => e === "shadow", bo = () => {
  const e = Ge("color"), t = Ge("font"), r = Ge("text"), n = Ge("font-weight"), o = Ge("tracking"), a = Ge("leading"), s = Ge("breakpoint"), i = Ge("container"), d = Ge("spacing"), u = Ge("radius"), c = Ge("shadow"), f = Ge("inset-shadow"), b = Ge("text-shadow"), p = Ge("drop-shadow"), $ = Ge("blur"), w = Ge("perspective"), k = Ge("aspect"), P = Ge("ease"), v = Ge("animate"), j = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
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
  ], I = () => [...S(), Q, J], A = () => ["auto", "hidden", "clip", "visible", "scroll"], H = () => ["auto", "contain", "none"], O = () => [Q, J, d], R = () => [tr, "full", "auto", ...O()], z = () => [Lt, "none", "subgrid", Q, J], g = () => ["auto", {
    span: ["full", Lt, Q, J]
  }, Lt, Q, J], T = () => [Lt, "auto", Q, J], h = () => ["auto", "min", "max", "fr", Q, J], E = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], _ = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], m = () => ["auto", ...O()], y = () => [tr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...O()], N = () => [e, Q, J], C = () => [...S(), ps, fs, {
    position: [Q, J]
  }], Y = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], D = () => ["auto", "cover", "contain", o1, t1, {
    size: [Q, J]
  }], B = () => [Fn, xr, Ut], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    Q,
    J
  ], M = () => ["", ge, xr, Ut], G = () => ["solid", "dashed", "dotted", "double"], X = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], L = () => [ge, Fn, ps, fs], K = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    $,
    Q,
    J
  ], fe = () => ["none", ge, Q, J], $e = () => ["none", ge, Q, J], ye = () => [ge, Q, J], Ce = () => [tr, "full", ...O()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Pt],
      breakpoint: [Pt],
      color: [Zg],
      container: [Pt],
      "drop-shadow": [Pt],
      ease: ["in", "out", "in-out"],
      font: [e1],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Pt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Pt],
      shadow: [Pt],
      spacing: ["px", ge],
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
        aspect: ["auto", "square", tr, J, Q, k]
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
        columns: [ge, J, Q, i]
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
        object: I()
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
        z: [Lt, "auto", Q, J]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [tr, "full", "auto", i, ...O()]
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
        flex: [ge, tr, "auto", "initial", "none", J]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ge, Q, J]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ge, Q, J]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Lt, "first", "last", "none", Q, J]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": z()
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
        "grid-rows": z()
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
        gap: O()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": O()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": O()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...E(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [..._(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ..._()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...E()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [..._(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ..._(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": E()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [..._(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ..._()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: O()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: O()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: O()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: O()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: O()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: O()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: O()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: O()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: O()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: m()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: m()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: m()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: m()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: m()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: m()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: m()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: m()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: m()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": O()
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
        "space-y": O()
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
        text: ["base", r, xr, Ut]
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
        font: [n, Q, Dn]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Fn, J]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [n1, J, t]
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
        "line-clamp": [ge, "none", Q, Dn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...O()
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
        placeholder: N()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: N()
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
        decoration: [ge, "from-font", "auto", Q, Ut]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: N()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ge, "auto", Q, J]
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
        indent: O()
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
        bg: C()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Y()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: D()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Lt, Q, J],
          radial: ["", Q, J],
          conic: [Lt, Q, J]
        }, a1, r1]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: N()
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
        from: N()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: N()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: N()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: W()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": W()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": W()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": W()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": W()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": W()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": W()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": W()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": W()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": W()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": W()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": W()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": W()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": W()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": W()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: M()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": M()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": M()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": M()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": M()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": M()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": M()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": M()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": M()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": M()
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
        "divide-y": M()
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
        border: N()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": N()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": N()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": N()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": N()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": N()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": N()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": N()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": N()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: N()
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
        "outline-offset": [ge, Q, J]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ge, xr, Ut]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: N()
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
          Zr,
          Xr
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: N()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, Zr, Xr]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": N()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: M()
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
        ring: N()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ge, Ut]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": N()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": M()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": N()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", b, Zr, Xr]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": N()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ge, Q, J]
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
        "mask-linear": [ge]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": L()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": L()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": N()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": N()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": L()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": L()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": N()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": N()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": L()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": L()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": N()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": N()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": L()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": L()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": N()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": N()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": L()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": L()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": N()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": N()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": L()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": L()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": N()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": N()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": L()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": L()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": N()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": N()
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
        "mask-radial-from": N()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": N()
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
        "mask-radial-at": S()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ge]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": L()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": L()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": N()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": N()
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
        mask: C()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Y()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: D()
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
        blur: K()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ge, Q, J]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ge, Q, J]
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
          Zr,
          Xr
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": N()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ge, Q, J]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ge, Q, J]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ge, Q, J]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ge, Q, J]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ge, Q, J]
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
        "backdrop-blur": K()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ge, Q, J]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ge, Q, J]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ge, Q, J]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ge, Q, J]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ge, Q, J]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ge, Q, J]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ge, Q, J]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ge, Q, J]
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
        "border-spacing": O()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": O()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": O()
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
        duration: [ge, "initial", Q, J]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", P, Q, J]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ge, Q, J]
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
        perspective: [w, Q, J]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": I()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: fe()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": fe()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": fe()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": fe()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: $e()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": $e()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": $e()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": $e()
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
        skew: ye()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ye()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ye()
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
        origin: I()
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
        translate: Ce()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Ce()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Ce()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Ce()
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
        accent: N()
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
        caret: N()
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
        "scroll-m": O()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": O()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": O()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": O()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": O()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": O()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": O()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": O()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": O()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": O()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": O()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": O()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": O()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": O()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": O()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": O()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": O()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": O()
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
        fill: ["none", ...N()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ge, xr, Ut, Dn]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...N()]
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
}, l1 = (e, {
  cacheSize: t,
  prefix: r,
  experimentalParseClassName: n,
  extend: o = {},
  override: a = {}
}) => (Pr(e, "cacheSize", t), Pr(e, "prefix", r), Pr(e, "experimentalParseClassName", n), qr(e.theme, a.theme), qr(e.classGroups, a.classGroups), qr(e.conflictingClassGroups, a.conflictingClassGroups), qr(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), Pr(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), Jr(e.theme, o.theme), Jr(e.classGroups, o.classGroups), Jr(e.conflictingClassGroups, o.conflictingClassGroups), Jr(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Sl(e, o, "orderSensitiveModifiers"), e), Pr = (e, t, r) => {
  r !== void 0 && (e[t] = r);
}, qr = (e, t) => {
  if (t)
    for (const r in t)
      Pr(e, r, t[r]);
}, Jr = (e, t) => {
  if (t)
    for (const r in t)
      Sl(e, t, r);
}, Sl = (e, t, r) => {
  const n = t[r];
  n !== void 0 && (e[r] = e[r] ? e[r].concat(n) : n);
}, d1 = (e, ...t) => typeof e == "function" ? mo(bo, e, ...t) : mo(() => l1(bo(), e), ...t), c1 = /* @__PURE__ */ mo(bo);
var u1 = (e) => tt(e) ? c1 : d1({ ...e, extend: { theme: e.theme, classGroups: e.classGroups, conflictingClassGroupModifiers: e.conflictingClassGroupModifiers, conflictingClassGroups: e.conflictingClassGroups, ...e.extend } }), f1 = (...e) => (t) => {
  let r = un(e);
  return !r || !t.twMerge ? r : ((!Ct.cachedTwMerge || Ct.didTwMergeConfigChange) && (Ct.didTwMergeConfigChange = !1, Ct.cachedTwMerge = u1(Ct.cachedTwMergeConfig)), Ct.cachedTwMerge(r) || void 0);
}, { tv: p1 } = jg(f1), vn = (e, t) => {
  var r, n, o;
  return p1(e, {
    ...t,
    twMerge: (r = void 0) != null ? r : !0,
    twMergeConfig: {
      theme: {
        ...(n = void 0) == null ? void 0 : n.theme,
        ...is.theme
      },
      classGroups: {
        ...(o = void 0) == null ? void 0 : o.classGroups,
        ...is.classGroups
      }
    }
  });
}, gs = vn({
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
}), Cl = [
  "outline-solid outline-transparent",
  "data-[focus-visible=true]:z-10",
  "data-[focus-visible=true]:outline-2",
  "data-[focus-visible=true]:outline-focus",
  "data-[focus-visible=true]:outline-offset-2"
], rr = {
  default: ["[&+.border-medium.border-default]:ms-[calc(var(--heroui-border-width-medium)*-1)]"],
  primary: ["[&+.border-medium.border-primary]:ms-[calc(var(--heroui-border-width-medium)*-1)]"],
  secondary: [
    "[&+.border-medium.border-secondary]:ms-[calc(var(--heroui-border-width-medium)*-1)]"
  ],
  success: ["[&+.border-medium.border-success]:ms-[calc(var(--heroui-border-width-medium)*-1)]"],
  warning: ["[&+.border-medium.border-warning]:ms-[calc(var(--heroui-border-width-medium)*-1)]"],
  danger: ["[&+.border-medium.border-danger]:ms-[calc(var(--heroui-border-width-medium)*-1)]"]
}, ms = vn({
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
      ...Cl
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
}), g1 = vn({
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
    ...Cl
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
      className: rr.default
    },
    {
      isInGroup: !0,
      variant: ["ghost", "bordered"],
      color: "primary",
      className: rr.primary
    },
    {
      isInGroup: !0,
      variant: ["ghost", "bordered"],
      color: "secondary",
      className: rr.secondary
    },
    {
      isInGroup: !0,
      variant: ["ghost", "bordered"],
      color: "success",
      className: rr.success
    },
    {
      isInGroup: !0,
      variant: ["ghost", "bordered"],
      color: "warning",
      className: rr.warning
    },
    {
      isInGroup: !0,
      variant: ["ghost", "bordered"],
      color: "danger",
      className: rr.danger
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
vn({
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
var bs = {
  ease: [0.36, 0.66, 0.4, 1]
}, hs = {
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
        ease: bs.ease
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: bs.ease
      }
    }
  }
};
function m1(e) {
  return Ie(e);
}
var b1 = (e, t, r = !0) => {
  if (!t)
    return [e, {}];
  const n = t.reduce((o, a) => a in e ? { ...o, [a]: e[a] } : o, {});
  return r ? [Object.keys(e).filter((a) => !t.includes(a)).reduce((a, s) => ({ ...a, [s]: e[s] }), {}), n] : [e, n];
}, h1 = (e) => {
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
}, $1 = (e) => ({
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
})[e], v1 = (e, t) => {
  if (t.includes("-")) {
    const [r] = t.split("-");
    if (r.includes(e))
      return !1;
  }
  return !0;
}, $s = (e, t) => {
  if (t.includes("-")) {
    const [, r] = t.split("-");
    return `${e}-${r}`;
  }
  return e;
}, wr = /* @__PURE__ */ new WeakMap(), rt = [];
function y1(e, t = document.body) {
  let r = new Set(e), n = /* @__PURE__ */ new Set(), o = (d) => {
    for (let b of d.querySelectorAll(
      "[data-live-announcer], [data-react-aria-top-layer]"
    ))
      r.add(b);
    let u = (b) => {
      if (r.has(b) || b.parentElement && n.has(b.parentElement) && b.parentElement.getAttribute("role") !== "row")
        return NodeFilter.FILTER_REJECT;
      for (let p of r)
        if (b.contains(p))
          return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }, c = document.createTreeWalker(d, NodeFilter.SHOW_ELEMENT, { acceptNode: u }), f = u(d);
    if (f === NodeFilter.FILTER_ACCEPT && a(d), f !== NodeFilter.FILTER_REJECT) {
      let b = c.nextNode();
      for (; b != null; )
        a(b), b = c.nextNode();
    }
  }, a = (d) => {
    var u;
    let c = (u = wr.get(d)) != null ? u : 0;
    d.getAttribute("aria-hidden") === "true" && c === 0 || (c === 0 && d.setAttribute("aria-hidden", "true"), n.add(d), wr.set(d, c + 1));
  };
  rt.length && rt[rt.length - 1].disconnect(), o(t);
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
  return rt.push(i), () => {
    s.disconnect();
    for (let d of n) {
      let u = wr.get(d);
      u != null && (u === 1 ? (d.removeAttribute("aria-hidden"), wr.delete(d)) : wr.set(d, u - 1));
    }
    i === rt[rt.length - 1] ? (rt.pop(), rt.length && rt[rt.length - 1].observe()) : rt.splice(rt.indexOf(i), 1);
  };
}
function x1(e) {
  let t = rt[rt.length - 1];
  if (t && !t.visibleNodes.has(e))
    return t.visibleNodes.add(e), () => {
      t.visibleNodes.delete(e);
    };
}
var w1 = globalThis != null && globalThis.document ? Ns : de, [wm, k1] = To({
  name: "ButtonGroupContext",
  strict: !1
});
function jl(e, t) {
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
    href: b,
    target: p,
    rel: $,
    type: w = "button",
    allowTextSelectionOnPress: k
  } = e, P;
  r === "button" ? P = {
    type: w,
    disabled: n
  } : P = {
    role: "button",
    href: r === "a" && !n ? b : void 0,
    target: r === "a" ? p : void 0,
    type: r === "input" ? w : void 0,
    disabled: r === "input" ? n : void 0,
    "aria-disabled": !n || r === "input" ? void 0 : n,
    rel: r === "a" ? $ : void 0
  };
  let { pressProps: v, isPressed: j } = Ep({
    onClick: f,
    onPressStart: a,
    onPressEnd: s,
    onPressUp: i,
    onPressChange: d,
    onPress: o,
    isDisabled: n,
    preventFocusOnPress: u,
    allowTextSelectionOnPress: k,
    ref: t
  }), { focusableProps: S } = zp(e, t);
  c && (S.tabIndex = n ? -1 : S.tabIndex);
  let I = Yt(
    S,
    v,
    li(e, { labelable: !0 })
  );
  return {
    isPressed: j,
    // Used to indicate press state for visual
    buttonProps: Yt(P, I, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"]
    })
  };
}
var N1 = () => import("./index-SfZMAM5z.mjs").then((e) => e.default), Il = (e) => {
  const { ripples: t = [], motionProps: r, color: n = "currentColor", style: o, onClear: a } = e;
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: t.map((s) => {
    const i = t0(0.01 * s.size, 0.2, s.size > 100 ? 0.75 : 0.5);
    return /* @__PURE__ */ l.jsx(zn, { features: N1, children: /* @__PURE__ */ l.jsx(Ps, { mode: "popLayout", children: /* @__PURE__ */ l.jsx(
      Gn.span,
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
Il.displayName = "HeroUI.Ripple";
var E1 = Il;
function P1(e = {}) {
  const [t, r] = re([]), n = me((a) => {
    const s = a.target, i = Math.max(s.clientWidth, s.clientHeight);
    r((d) => [
      ...d,
      {
        key: e0(d.length.toString()),
        size: i,
        x: a.x - i / 2,
        y: a.y - i / 2
      }
    ]);
  }, []), o = me((a) => {
    r((s) => s.filter((i) => i.key !== a));
  }, []);
  return { ripples: t, onClear: o, onPress: n, ...e };
}
function T1(e) {
  var t, r, n, o, a, s, i, d, u;
  const c = k1(), f = So(), b = !!c, {
    ref: p,
    as: $,
    children: w,
    startContent: k,
    endContent: P,
    autoFocus: v,
    className: j,
    spinner: S,
    isLoading: I = !1,
    disableRipple: A = !1,
    fullWidth: H = (t = c == null ? void 0 : c.fullWidth) != null ? t : !1,
    radius: O = c == null ? void 0 : c.radius,
    size: R = (r = c == null ? void 0 : c.size) != null ? r : "md",
    color: z = (n = c == null ? void 0 : c.color) != null ? n : "default",
    variant: g = (o = c == null ? void 0 : c.variant) != null ? o : "solid",
    disableAnimation: T = (s = (a = c == null ? void 0 : c.disableAnimation) != null ? a : f == null ? void 0 : f.disableAnimation) != null ? s : !1,
    isDisabled: h = (i = c == null ? void 0 : c.isDisabled) != null ? i : !1,
    isIconOnly: E = (d = c == null ? void 0 : c.isIconOnly) != null ? d : !1,
    spinnerPlacement: _ = "start",
    onPress: m,
    onClick: y,
    ...N
  } = e, C = $ || "button", Y = typeof C == "string", D = ti(p), B = (u = A || (f == null ? void 0 : f.disableRipple)) != null ? u : T, { isFocusVisible: W, isFocused: M, focusProps: G } = Oi({
    autoFocus: v
  }), X = h || I, L = Le(
    () => g1({
      size: R,
      color: z,
      variant: g,
      radius: O,
      fullWidth: H,
      isDisabled: X,
      isInGroup: b,
      disableAnimation: T,
      isIconOnly: E,
      className: j
    }),
    [
      R,
      z,
      g,
      O,
      H,
      X,
      b,
      E,
      T,
      j
    ]
  ), { onPress: K, onClear: fe, ripples: $e } = P1(), ye = me(
    (ze) => {
      B || X || T || D.current && K(ze);
    },
    [B, X, T, D, K]
  ), { buttonProps: Ce, isPressed: Ze } = jl(
    {
      elementType: $,
      isDisabled: X,
      onPress: oi(m, ye),
      onClick: y,
      ...N
    },
    D
  ), { isHovered: Oe, hoverProps: We } = Vp({ isDisabled: X }), Be = me(
    (ze = {}) => ({
      "data-disabled": ct(X),
      "data-focus": ct(M),
      "data-pressed": ct(Ze),
      "data-focus-visible": ct(W),
      "data-hover": ct(Oe),
      "data-loading": ct(I),
      ...Ft(
        Ce,
        G,
        We,
        Ca(N, {
          enabled: Y
        }),
        Ca(ze)
      ),
      className: L
    }),
    [
      I,
      X,
      M,
      Ze,
      Y,
      W,
      Oe,
      Ce,
      G,
      We,
      N,
      L
    ]
  ), at = (ze) => Tr(ze) ? vo(ze, {
    // @ts-ignore
    "aria-hidden": !0,
    focusable: !1
  }) : null, Ve = at(k), st = at(P), Qe = Le(() => ({
    sm: "sm",
    md: "sm",
    lg: "md"
  })[R], [R]), qe = me(
    () => ({ ripples: $e, onClear: fe }),
    [$e, fe]
  );
  return {
    Component: C,
    children: w,
    domRef: D,
    spinner: S,
    styles: L,
    startContent: Ve,
    endContent: st,
    isLoading: I,
    spinnerPlacement: _,
    spinnerSize: Qe,
    disableRipple: B,
    getButtonProps: Be,
    getRippleProps: qe,
    isIconOnly: E
  };
}
function S1(e) {
  var t, r;
  const [n, o] = b1(e, gs.variantKeys), a = So(), s = (r = (t = e == null ? void 0 : e.variant) != null ? t : a == null ? void 0 : a.spinnerVariant) != null ? r : "default", { children: i, className: d, classNames: u, label: c, ...f } = n, b = Le(() => gs({ ...o }), [ni(o)]), p = nr(u == null ? void 0 : u.base, d), $ = c || i, w = Le(() => $ && typeof $ == "string" ? $ : f["aria-label"] ? "" : "Loading", [i, $, f["aria-label"]]), k = me(
    () => ({
      "aria-label": w,
      className: b.base({
        class: p
      }),
      ...f
    }),
    [w, b, p, f]
  );
  return { label: $, slots: b, classNames: u, variant: s, getSpinnerProps: k };
}
var Ol = m1((e, t) => {
  const { slots: r, classNames: n, label: o, variant: a, getSpinnerProps: s } = S1({ ...e });
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
Ol.displayName = "HeroUI.Spinner";
var C1 = Ol, Al = ml((e, t) => {
  const {
    Component: r,
    domRef: n,
    children: o,
    spinnerSize: a,
    spinner: s = /* @__PURE__ */ l.jsx(C1, { color: "current", size: a }),
    spinnerPlacement: i,
    startContent: d,
    endContent: u,
    isLoading: c,
    disableRipple: f,
    getButtonProps: b,
    getRippleProps: p,
    isIconOnly: $
  } = T1({ ...e, ref: t });
  return /* @__PURE__ */ l.jsxs(r, { ref: n, ...b(), children: [
    d,
    c && i === "start" && s,
    c && $ ? null : o,
    c && i === "end" && s,
    u,
    !f && /* @__PURE__ */ l.jsx(E1, { ...p() })
  ] });
});
Al.displayName = "HeroUI.Button";
var j1 = Al;
function I1(e) {
  let [t, r] = dp(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
  const n = me(() => {
    r(!0);
  }, [
    r
  ]), o = me(() => {
    r(!1);
  }, [
    r
  ]), a = me(() => {
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
var $t = [];
function O1(e, t) {
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
    if (a && !$t.includes(t))
      return $t.push(t), () => {
        let k = $t.indexOf(t);
        k >= 0 && $t.splice(k, 1);
      };
  }, [a, t]);
  const u = () => {
    $t[$t.length - 1] === t && s && s();
  }, c = (k) => {
    (!d || d(k.target)) && ($t[$t.length - 1] === t && r && (k.stopPropagation(), k.preventDefault()), w(t) !== "pressEnd" && u());
  }, f = (k) => {
    (!d || d(k.target)) && ($t[$t.length - 1] === t && r && (k.stopPropagation(), k.preventDefault()), u());
  }, b = (k) => {
    k.key === "Escape" && !o && !k.nativeEvent.isComposing && (k.stopPropagation(), k.preventDefault(), u());
  };
  Hp({
    isDisabled: !(n && a),
    onInteractOutside: n && a ? f : void 0,
    onInteractOutsideStart: c,
    ref: t
  });
  const { focusWithinProps: p } = zo({
    isDisabled: !i,
    onBlurWithin: (k) => {
      !k.relatedTarget || Xp(k.relatedTarget) || (!d || d(k.relatedTarget)) && u();
    }
  }), $ = (k) => {
    k.target === k.currentTarget && k.preventDefault();
  };
  function w(k) {
    const P = k.current;
    if (!P) return "unknown";
    const v = (P.getAttribute("role") || "").toLowerCase(), j = P.getAttribute("aria-modal");
    return (v === "dialog" || v === "alertdialog") && (j === null || j.toLowerCase() === "true") ? "pressEnd" : ["listbox", "menu", "tree", "grid", "combobox"].includes(v) ? "pressStart" : "unknown";
  }
  return {
    overlayProps: {
      onKeyDown: b,
      ...p
    },
    underlayProps: {
      onPointerDown: $
    }
  };
}
function A1(e, t) {
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
    shouldCloseOnBlur: b = !0,
    shouldCloseOnScroll: p = !0,
    placement: $ = "top",
    containerPadding: w,
    shouldCloseOnInteractOutside: k,
    isNonModal: P,
    isKeyboardDismissDisabled: v,
    updatePositionDeps: j = [],
    ...S
  } = e, I = P ?? !0, A = S.trigger === "SubmenuTrigger", { overlayProps: H, underlayProps: O } = O1(
    {
      isOpen: t.isOpen,
      onClose: t.close,
      shouldCloseOnBlur: b,
      isDismissable: f || A,
      isKeyboardDismissDisabled: v,
      shouldCloseOnInteractOutside: k || ((E) => {
        var _;
        return !((_ = n.current) != null && _.contains(E));
      }),
      disableOutsideEvents: !I
    },
    o
  ), {
    overlayProps: R,
    arrowProps: z,
    placement: g,
    updatePosition: T,
    triggerAnchorPoint: h
  } = $p({
    ...S,
    shouldFlip: u,
    crossOffset: i,
    targetRef: n,
    overlayRef: o,
    isOpen: t.isOpen,
    scrollRef: d,
    boundaryElement: c,
    containerPadding: w,
    placement: $1($),
    offset: a ? s + 3 : s,
    onClose: I && !A && p ? t.close : () => {
    }
  });
  return w1(() => {
    j.length && T();
  }, j), de(() => {
    var E, _;
    if (t.isOpen && o.current)
      return I ? x1((E = r == null ? void 0 : r.current) != null ? E : o.current) : y1([(_ = r == null ? void 0 : r.current) != null ? _ : o.current]);
  }, [I, t.isOpen, o, r]), {
    popoverProps: Ft(H, R),
    arrowProps: z,
    underlayProps: O,
    placement: g,
    triggerAnchorPoint: h
  };
}
var _1 = "top";
function R1(e) {
  var t, r, n;
  const o = So(), [a, s] = fg(e, ms.variantKeys), {
    as: i,
    ref: d,
    children: u,
    state: c,
    triggerRef: f,
    scrollRef: b,
    defaultOpen: p,
    onOpenChange: $,
    isOpen: w,
    isNonModal: k = !0,
    shouldFlip: P = !0,
    containerPadding: v = 12,
    shouldBlockScroll: j = !1,
    isDismissable: S = !0,
    shouldCloseOnBlur: I,
    portalContainer: A,
    updatePositionDeps: H,
    dialogProps: O,
    placement: R = _1,
    triggerType: z = "dialog",
    showArrow: g = !1,
    offset: T = 7,
    crossOffset: h = 0,
    boundaryElement: E,
    isKeyboardDismissDisabled: _,
    shouldCloseOnInteractOutside: m,
    shouldCloseOnScroll: y,
    triggerAnchorPoint: N,
    motionProps: C,
    className: Y,
    classNames: D,
    onClose: B,
    ...W
  } = a, M = i || "div", G = ti(d), X = ae(null), L = ae(!1), K = f || X, fe = (r = (t = e.disableAnimation) != null ? t : o == null ? void 0 : o.disableAnimation) != null ? r : !1, $e = I1({
    isOpen: w,
    defaultOpen: p,
    onOpenChange: (V) => {
      $ == null || $(V), V || B == null || B();
    }
  }), ye = c || $e, {
    popoverProps: Ce,
    underlayProps: Ze,
    placement: Oe
  } = A1(
    {
      triggerRef: K,
      isNonModal: k,
      popoverRef: G,
      placement: R,
      offset: T,
      scrollRef: b,
      isDismissable: S,
      shouldCloseOnBlur: I,
      boundaryElement: E,
      crossOffset: h,
      shouldFlip: P,
      containerPadding: v,
      updatePositionDeps: H,
      isKeyboardDismissDisabled: _,
      shouldCloseOnScroll: y,
      shouldCloseOnInteractOutside: m,
      triggerAnchorPoint: N
    },
    ye
  ), We = Le(() => Oe ? v1(Oe, R) ? Oe : R : null, [Oe, R]), { triggerProps: Be } = Qp({ type: z }, ye, K), { isFocusVisible: at, isFocused: Ve, focusProps: st } = Oi(), Qe = Le(
    () => ms({
      ...s
    }),
    [ni(s)]
  ), qe = nr(D == null ? void 0 : D.base, Y), ze = {
    "--trigger-anchor-point": N ? `${N.x}px ${N.y}px` : void 0
  };
  tg({
    isDisabled: !(j && ye.isOpen)
  });
  const wt = (V = {}) => ({
    ref: G,
    ...Ft(Ce, W, V),
    style: Ft(Ce.style, W.style, V.style)
  }), kt = (V = {}) => ({
    // `ref` and `dialogProps` from `useDialog` are passed from props
    // if we use `useDialog` here, dialogRef won't be focused on mount
    "data-slot": "base",
    "data-open": ct(ye.isOpen),
    "data-focus": ct(Ve),
    "data-arrow": ct(g),
    "data-focus-visible": ct(at),
    "data-placement": Oe ? $s(Oe, R) : void 0,
    ...Ft(st, O, V),
    className: Qe.base({ class: nr(qe) }),
    style: {
      // this prevent the dialog to have a default outline
      outline: "none",
      ...ze
    }
  }), ee = me(
    (V = {}) => ({
      "data-slot": "content",
      "data-open": ct(ye.isOpen),
      "data-arrow": ct(g),
      "data-placement": Oe ? $s(Oe, R) : void 0,
      className: Qe.content({ class: nr(D == null ? void 0 : D.content, V.className) })
    }),
    [Qe, ye.isOpen, g, We, R, D, Oe]
  ), we = me(
    (V) => {
      var ne;
      let oe;
      return V.pointerType === "touch" && ((e == null ? void 0 : e.backdrop) === "blur" || (e == null ? void 0 : e.backdrop) === "opaque") ? oe = setTimeout(() => {
        L.current = !0;
      }, 100) : L.current = !0, (ne = Be.onPress) == null || ne.call(Be, V), () => {
        clearTimeout(oe);
      };
    },
    [Be == null ? void 0 : Be.onPress]
  ), te = me(
    (V = {}, ne = null) => {
      const { isDisabled: oe, ...pe } = V;
      return {
        "data-slot": "trigger",
        ...Ft({ "aria-haspopup": "dialog" }, Be, pe),
        onPress: we,
        isDisabled: oe,
        className: Qe.trigger({
          class: nr(D == null ? void 0 : D.trigger, V.className),
          // apply isDisabled class names to make the trigger child disabled
          // e.g. for elements like div or HeroUI elements that don't have `isDisabled` prop
          isTriggerDisabled: oe
        }),
        ref: n0(ne, K)
      };
    },
    [ye, Be, we, K]
  ), Z = me(
    (V = {}) => ({
      "data-slot": "backdrop",
      className: Qe.backdrop({ class: D == null ? void 0 : D.backdrop }),
      onClick: (ne) => {
        if (!L.current) {
          ne.preventDefault();
          return;
        }
        ye.close(), L.current = !1;
      },
      ...Ze,
      ...V
    }),
    [Qe, ye.isOpen, D, Ze]
  );
  return {
    state: ye,
    Component: M,
    children: u,
    classNames: D,
    showArrow: g,
    triggerRef: K,
    placement: We,
    isNonModal: k,
    popoverRef: G,
    portalContainer: A,
    isOpen: ye.isOpen,
    onClose: ye.close,
    disableAnimation: fe,
    shouldBlockScroll: j,
    backdrop: (n = e.backdrop) != null ? n : "transparent",
    motionProps: C,
    getBackdropProps: Z,
    getPopoverProps: wt,
    getTriggerProps: te,
    getDialogProps: kt,
    getContentProps: ee
  };
}
function L1(e, t) {
  let { role: r = "dialog" } = e, n = M0();
  n = e["aria-label"] ? void 0 : n;
  let o = ae(!1);
  return de(() => {
    if (t.current && !t.current.contains(document.activeElement)) {
      ln(t.current);
      let a = setTimeout(() => {
        (document.activeElement === t.current || document.activeElement === document.body) && (o.current = !0, t.current && (t.current.blur(), ln(t.current)), o.current = !1);
      }, 500);
      return () => {
        clearTimeout(a);
      };
    }
  }, [
    t
  ]), ug(), {
    dialogProps: {
      ...li(e, {
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
var [M1, _l] = To({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), vs = () => import("./index-SfZMAM5z.mjs").then((e) => e.default), Rl = (e) => {
  const { as: t, children: r, className: n, ...o } = e, {
    Component: a,
    placement: s,
    backdrop: i,
    motionProps: d,
    disableAnimation: u,
    getPopoverProps: c,
    getDialogProps: f,
    getBackdropProps: b,
    getContentProps: p,
    isNonModal: $,
    onClose: w
  } = _l(), k = ae(null), { dialogProps: P, titleProps: v } = L1({}, k), j = f({
    ref: k,
    ...P,
    ...o
  }), S = t || a || "div", I = r && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    !$ && /* @__PURE__ */ l.jsx(ss, { onDismiss: w }),
    /* @__PURE__ */ l.jsx(S, { ...j, children: /* @__PURE__ */ l.jsx("div", { ...p({ className: n }), children: typeof r == "function" ? r(v) : r }) }),
    /* @__PURE__ */ l.jsx(ss, { onDismiss: w })
  ] }), A = Le(() => i === "transparent" ? null : u ? /* @__PURE__ */ l.jsx("div", { ...b() }) : /* @__PURE__ */ l.jsx(zn, { features: vs, children: /* @__PURE__ */ l.jsx(
    Gn.div,
    {
      animate: "enter",
      exit: "exit",
      initial: "exit",
      variants: hs.fade,
      ...b()
    }
  ) }), [i, u, b]), H = s ? h1(s === "center" ? "top" : s) : void 0, O = /* @__PURE__ */ l.jsx(l.Fragment, { children: u ? I : /* @__PURE__ */ l.jsx(zn, { features: vs, children: /* @__PURE__ */ l.jsx(
    Gn.div,
    {
      animate: "enter",
      exit: "exit",
      initial: "initial",
      style: H,
      variants: hs.scaleSpringOpacity,
      ...d,
      children: I
    }
  ) }) });
  return /* @__PURE__ */ l.jsxs("div", { ...c(), children: [
    A,
    O
  ] });
};
Rl.displayName = "HeroUI.PopoverContent";
var F1 = Rl, Ll = (e) => {
  var t;
  const { triggerRef: r, getTriggerProps: n } = _l(), { children: o, ...a } = e, s = Le(() => typeof o == "string" ? /* @__PURE__ */ l.jsx("p", { children: o }) : Cr.only(o), [o]), i = (t = s.props.ref) != null ? t : s.ref, { onPress: d, isDisabled: u, ...c } = Le(() => n(Ft(a, s.props), i), [n, s.props, a, i]), [, f] = o0(o, j1), { buttonProps: b } = jl({ onPress: d, isDisabled: u }, r), p = Le(() => (f == null ? void 0 : f[0]) !== void 0, [f]);
  return p || delete c.preventFocusOnPress, vo(
    s,
    Ft(c, p ? { onPress: d, isDisabled: u } : b)
  );
};
Ll.displayName = "HeroUI.PopoverTrigger";
var D1 = Ll, Ml = ml((e, t) => {
  const { children: r, ...n } = e, o = R1({ ...n, ref: t }), [a, s] = Cr.toArray(r), i = /* @__PURE__ */ l.jsx(cg, { portalContainer: o.portalContainer, children: s });
  return /* @__PURE__ */ l.jsxs(M1, { value: o, children: [
    a,
    o.disableAnimation && o.isOpen ? i : /* @__PURE__ */ l.jsx(Ps, { children: o.isOpen ? i : null })
  ] });
});
Ml.displayName = "HeroUI.Popover";
var z1 = Ml;
const G1 = De("border bg-popover text-popover-foreground", {
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
}), km = ({
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
  backdrop: b = "transparent",
  disableAnimation: p = !1,
  offset: $ = 7,
  isDismissable: w = !0
}) => {
  const k = () => {
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
  }, P = () => a === "custom" && s ? { backgroundColor: s, color: "#ffffff" } : {
    info: "bg-blue-500 text-white border-blue-500",
    neutral: "bg-gray-500 text-white border-gray-500",
    light: "bg-white text-gray-900 border-gray-200"
  }[a] || "", v = () => {
    switch (b) {
      case "blur":
        return "blur";
      case "dark":
        return "opaque";
      case "transparent":
      default:
        return "transparent";
    }
  }, j = P(), S = k(), I = v(), A = {
    placement: r,
    showArrow: n,
    color: S,
    radius: i,
    shadow: d,
    isOpen: c,
    onOpenChange: f,
    backdrop: I,
    disableAnimation: p,
    offset: $,
    isDismissable: w
  };
  return Object.keys(A).forEach((H) => {
    A[H] === void 0 && delete A[H];
  }), /* @__PURE__ */ l.jsxs(z1, { ...A, children: [
    /* @__PURE__ */ l.jsx(D1, { children: t }),
    /* @__PURE__ */ l.jsx(
      F1,
      {
        className: F(
          G1({ variant: o, color: a, shadow: d, rounded: i }),
          u,
          j,
          // Apply custom color styles when needed
          a === "custom" && s ? "border-0" : ""
        ),
        style: a === "custom" && s ? { backgroundColor: s, color: "#ffffff" } : void 0,
        children: e
      }
    )
  ] });
}, B1 = De("flex items-center text-sm", {
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
}), V1 = Ie(
  ({
    className: e,
    variant: t = "default",
    size: r = "md",
    items: n,
    separator: o = /* @__PURE__ */ l.jsx(ue, { icon: "mdi:slash-forward", className: "h-4 w-4 flex-shrink-0" }),
    activeLastItem: a = !0,
    ...s
  }, i) => /* @__PURE__ */ l.jsx(
    "nav",
    {
      ref: i,
      className: F(B1({ variant: t, size: r }), e),
      "aria-label": "Breadcrumb",
      ...s,
      children: /* @__PURE__ */ l.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: n.map((d, u) => {
        const c = u === n.length - 1, f = c && a;
        return /* @__PURE__ */ l.jsxs(
          "li",
          {
            className: F(
              "flex items-center gap-1.5",
              f && "text-primary font-medium"
            ),
            children: [
              d.icon && /* @__PURE__ */ l.jsx(
                ue,
                {
                  icon: d.icon,
                  className: F(
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
                  className: F(
                    "transition-colors duration-200",
                    "hover:text-primary hover:underline focus:outline-none",
                    "focus-visible:text-primary focus-visible:underline",
                    "active:text-primary-600"
                  ),
                  children: /* @__PURE__ */ l.jsx("span", { className: "truncate max-w-[200px] inline-block align-bottom", children: d.label })
                }
              ) : /* @__PURE__ */ l.jsx("span", { className: F(
                "truncate max-w-[200px] inline-block",
                f && "text-primary"
              ), children: d.label }),
              !c && /* @__PURE__ */ l.jsx("span", { className: F(
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
V1.displayName = "Breadcrumbs";
const Fl = (e) => {
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
}, H1 = ({
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
  ], a = Fl(t);
  return /* @__PURE__ */ l.jsx("div", { className: "bg-white rounded-md flex flex-col h-full max-h-[600px]", children: /* @__PURE__ */ l.jsx("div", { className: "p-0 w-full overflow-auto rounded-t-md [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full flex-1", children: /* @__PURE__ */ l.jsxs("table", { className: "w-full border-spacing-0 border-separate min-w-full", children: [
    /* @__PURE__ */ l.jsx(
      "thead",
      {
        className: F(
          "border-2 sticky top-0 z-20 rounded-t-md",
          a.border
        ),
        children: /* @__PURE__ */ l.jsx("tr", { children: o.map((s, i) => {
          const d = () => {
            var c;
            if (n || !s.sticky || s.stickyPosition !== "left") return 0;
            let u = 0;
            for (let f = 0; f < i; f++) {
              const b = o[f];
              if (b.sticky && b.stickyPosition === "left") {
                const p = typeof b.width == "number" ? b.width : parseInt(((c = b.width) == null ? void 0 : c.toString()) || "0") || 0;
                u += p;
              }
            }
            return u;
          };
          return /* @__PURE__ */ l.jsx(
            "th",
            {
              className: F(
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
        className: F("p-3", {
          [a.stripe]: i % 2 !== 0,
          "bg-white": i % 2 === 0
        }),
        children: o.map((d, u) => {
          const c = () => {
            var b;
            if (!d.sticky || d.stickyPosition !== "left") return 0;
            let f = 0;
            for (let p = 0; p < u; p++) {
              const $ = o[p];
              if ($.sticky && $.stickyPosition === "left") {
                const w = typeof $.width == "number" ? $.width : parseInt(((b = $.width) == null ? void 0 : b.toString()) || "0") || 0;
                f += w;
              }
            }
            return f;
          };
          return /* @__PURE__ */ l.jsx(
            "td",
            {
              className: F(
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
              children: /* @__PURE__ */ l.jsx(mc, { className: "h-10 w-full rounded-md" })
            },
            `${i}-${u}`
          );
        })
      },
      i
    )) })
  ] }) }) });
}, Nm = ({
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
  onPageSizeChange: b,
  onSortChange: p,
  onRowClick: $,
  showPagination: w = !1,
  variant: k = "primary",
  meta: P = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [v, j] = re(() => {
    const z = e.find((g) => g.sortable && g.sort);
    return z ? [
      {
        id: z.accessorKey.toString(),
        desc: z.sort === "desc"
      }
    ] : [];
  }), [S, I] = re(!1);
  de(() => {
    const z = () => I(window.innerWidth < 768);
    return z(), window.addEventListener("resize", z), () => window.removeEventListener("resize", z);
  }, []);
  const A = se.useMemo(() => {
    const z = e.map((g) => ({
      accessorKey: g.accessorKey,
      header: g.label,
      enableSorting: !!g.sortable,
      cell: g.render ? ({ row: T }) => {
        var h;
        return (h = g.render) == null ? void 0 : h.call(g, T.original[g.accessorKey], T.original, T.index);
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
        cell: ({ row: g }) => (P.current_page - 1) * P.limit_number + g.index + 1,
        meta: {
          align: "left",
          width: 80,
          sticky: c,
          stickyPosition: "left"
        }
      },
      ...z
    ] : z;
  }, [e, u, c, P]), H = td({
    data: t,
    columns: A,
    state: {
      sorting: v
    },
    onSortingChange: (z) => {
      const g = typeof z == "function" ? z(v) : z;
      j(g), g.length > 0 ? p == null || p(g[0].desc ? "desc" : "asc", g[0].id) : p == null || p("", "");
    },
    getCoreRowModel: od(),
    getSortedRowModel: nd(),
    getPaginationRowModel: rd(),
    manualPagination: !0,
    pageCount: P.total_page
  }), O = Fl(k);
  if (i)
    return d || /* @__PURE__ */ l.jsx(
      H1,
      {
        schema: e,
        variant: k,
        showIndexSticky: c,
        isMobile: S
      }
    );
  const R = (z, g, T) => {
    const h = z.target;
    h.tagName === "BUTTON" || h.tagName === "A" || h.tagName === "INPUT" || h.tagName === "SELECT" || h.closest("button") !== null || h.closest("a") !== null || h.closest("input") !== null || h.closest("select") !== null || $ == null || $(g, T);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "bg-white rounded-md flex flex-col h-full max-h-[600px]", children: [
    /* @__PURE__ */ l.jsx("div", { className: "p-0 w-full overflow-auto rounded-t-md [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full flex-1", children: /* @__PURE__ */ l.jsxs(
      "table",
      {
        className: F(
          "w-full border-spacing-0 border-separate min-w-full",
          r
        ),
        children: [
          /* @__PURE__ */ l.jsx(
            "thead",
            {
              className: F(
                "border-2 sticky top-0 z-20 rounded-t-md",
                O.border
              ),
              children: H.getHeaderGroups().map((z) => /* @__PURE__ */ l.jsx("tr", { children: z.headers.map(
                (g, T) => {
                  const h = g.column.columnDef.meta, E = () => {
                    var m;
                    if (S || !(h != null && h.sticky) || h.stickyPosition !== "left") return 0;
                    let _ = 0;
                    for (let y = 0; y < T; y++) {
                      const C = z.headers[y].column.columnDef.meta;
                      if (C != null && C.sticky && C.stickyPosition === "left") {
                        const Y = typeof C.width == "number" ? C.width : parseInt(((m = C.width) == null ? void 0 : m.toString()) || "0") || 0;
                        _ += Y;
                      }
                    }
                    return _;
                  };
                  return /* @__PURE__ */ l.jsx(
                    "th",
                    {
                      className: F(
                        "text-sm text-wrap border-y p-4",
                        O.header,
                        {
                          "cursor-pointer": g.column.getCanSort(),
                          "rounded-tl-md": T === 0,
                          "rounded-tr-md": T === z.headers.length - 1,
                          "text-left": (h == null ? void 0 : h.align) === "left",
                          "text-center": (h == null ? void 0 : h.align) === "center",
                          "text-right": (h == null ? void 0 : h.align) === "right",
                          "sticky z-5": !S && (h == null ? void 0 : h.sticky),
                          "left-0": !S && (h == null ? void 0 : h.sticky) && h.stickyPosition === "left",
                          "right-0": !S && (h == null ? void 0 : h.sticky) && h.stickyPosition === "right"
                        },
                        n
                      ),
                      style: {
                        width: typeof (h == null ? void 0 : h.width) == "number" ? `${h.width}px` : h == null ? void 0 : h.width,
                        minWidth: typeof (h == null ? void 0 : h.width) == "number" ? `${h.width}px` : h == null ? void 0 : h.width,
                        left: !S && (h != null && h.sticky) && h.stickyPosition === "left" ? `${E()}px` : void 0
                      },
                      onClick: g.column.getCanSort() ? g.column.getToggleSortingHandler() : void 0,
                      children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ l.jsx(
                          "span",
                          {
                            className: F({
                              "font-semibold": T === 0
                            }),
                            children: Zo(
                              g.column.columnDef.header,
                              g.getContext()
                            )
                          }
                        ),
                        g.column.getCanSort() && /* @__PURE__ */ l.jsx(
                          ue,
                          {
                            icon: g.column.getIsSorted() ? g.column.getIsSorted() === "desc" ? "mdi:keyboard-arrow-up" : "mdi:keyboard-arrow-down" : "mdi:unfold-more-horizontal",
                            className: F("h-4 w-4", {
                              "text-white": k !== "ghost",
                              "text-gray-700": k === "ghost"
                            })
                          }
                        )
                      ] })
                    },
                    g.id
                  );
                }
              ) }, z.id))
            }
          ),
          /* @__PURE__ */ l.jsx("tbody", { children: H.getRowModel().rows.length === 0 ? /* @__PURE__ */ l.jsx("tr", { children: /* @__PURE__ */ l.jsx(
            "td",
            {
              colSpan: H.getAllColumns().length,
              className: F(
                "text-center border h-full w-full rounded-b-md"
              ),
              children: s || /* @__PURE__ */ l.jsxs("div", { className: "flex mx-auto w-full text-center justify-center gap-3 items-center", children: [
                /* @__PURE__ */ l.jsx("p", { children: "Data Not Found" }),
                /* @__PURE__ */ l.jsx(ue, { icon: "mdi:face-frown-open", size: 34 })
              ] })
            }
          ) }) : H.getRowModel().rows.map((z, g) => /* @__PURE__ */ l.jsx(
            "tr",
            {
              className: F(
                "p-3 group",
                O.row,
                {
                  [O.stripe]: g % 2 !== 0,
                  "bg-white": g % 2 === 0,
                  "cursor-pointer": $
                },
                o
              ),
              onClick: (T) => R(T, z.original, g),
              children: z.getVisibleCells().map((T) => {
                const h = T.column.columnDef.meta, E = () => {
                  var N;
                  if (S || !(h != null && h.sticky) || h.stickyPosition !== "left") return 0;
                  let _ = 0;
                  const m = H.getAllColumns(), y = m.findIndex((C) => C.id === T.column.id);
                  for (let C = 0; C < y; C++) {
                    const D = m[C].columnDef.meta;
                    if (D != null && D.sticky && D.stickyPosition === "left") {
                      const B = typeof D.width == "number" ? D.width : parseInt(((N = D.width) == null ? void 0 : N.toString()) || "0") || 0;
                      _ += B;
                    }
                  }
                  return _;
                };
                return /* @__PURE__ */ l.jsx(
                  "td",
                  {
                    className: F(
                      "px-4 py-3 text-sm text-gray-900",
                      {
                        "text-left": (h == null ? void 0 : h.align) === "left",
                        "text-center": (h == null ? void 0 : h.align) === "center",
                        "text-right": (h == null ? void 0 : h.align) === "right",
                        "sticky z-5": !S && (h == null ? void 0 : h.sticky),
                        "left-0": !S && (h == null ? void 0 : h.sticky) && h.stickyPosition === "left",
                        "right-0": !S && (h == null ? void 0 : h.sticky) && h.stickyPosition === "right",
                        // Ensure sticky columns have solid background that matches row
                        "bg-white": !S && (h == null ? void 0 : h.sticky) && g % 2 === 0,
                        [O.stripe]: !S && (h == null ? void 0 : h.sticky) && g % 2 !== 0,
                        [O.hoverStripe]: !S && (h == null ? void 0 : h.sticky)
                      },
                      a
                    ),
                    style: {
                      width: typeof (h == null ? void 0 : h.width) == "number" ? `${h.width}px` : h == null ? void 0 : h.width,
                      minWidth: typeof (h == null ? void 0 : h.width) == "number" ? `${h.width}px` : h == null ? void 0 : h.width,
                      left: !S && (h != null && h.sticky) && h.stickyPosition === "left" ? `${E()}px` : void 0
                    },
                    children: Zo(
                      T.column.columnDef.cell,
                      T.getContext()
                    )
                  },
                  T.id
                );
              })
            },
            z.id
          )) })
        ]
      }
    ) }),
    !!t.length && w && /* @__PURE__ */ l.jsx("div", { className: "p-4 bg-white rounded-b-md border-t border-gray-200 sticky bottom-0 z-10 flex-shrink-0", children: /* @__PURE__ */ l.jsx(
      uc,
      {
        currentPage: P.current_page,
        totalPages: P.total_page,
        totalData: P.total_data,
        onPageChange: f || (() => {
        }),
        perPage: P.limit_number,
        onPerPageChange: b || (() => {
        }),
        perPageOptions: [5, 10, 20, 50, 100],
        siblingCount: 1
      }
    ) })
  ] });
}, U1 = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, Dl = Ie(
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
    const b = s || (i ? {
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
        className: F(
          "flex",
          o ? "items-start gap-3 p-4" : "items-center gap-2 py-2.5 px-3",
          "border border-gray-200",
          U1[r],
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
          b && /* @__PURE__ */ l.jsx(
            ue,
            {
              icon: b,
              className: F(
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
                className: F("text-sm font-medium leading-5", {
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
                className: F(n ? "mt-1" : "", "text-sm leading-5", {
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
            Ye,
            {
              variant: "ghost",
              size: "sm",
              onClick: a,
              className: F(
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
              children: /* @__PURE__ */ l.jsx(ue, { icon: "mdi:close", className: F(o ? "h-5 w-5" : "h-4 w-4") })
            }
          )
        ]
      }
    );
  }
);
Dl.displayName = "Toast";
const ho = Es(void 0), K1 = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, Em = ({ children: e }) => {
  const [t, r] = re([]), n = me((i) => {
    r((d) => d.filter((u) => u.id !== i));
  }, []), o = me((i) => {
    const d = Math.random().toString(36).substr(2, 9), u = i.position || "top-right", c = i.duration || 5e3, f = {
      ...i,
      id: d,
      position: u
    };
    return r((b) => [...b, f]), c > 0 && setTimeout(() => {
      n(d);
    }, c), d;
  }, [n]), a = t.reduce((i, d) => (i[d.position] || (i[d.position] = []), i[d.position].push(d), i), {
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-right": [],
    "top-center": [],
    "bottom-center": []
  }), s = Ke();
  return "body" in s ? /* @__PURE__ */ l.jsxs(ho.Provider, { value: { showToast: o, removeToast: n }, children: [
    e,
    Gt(
      /* @__PURE__ */ l.jsx(l.Fragment, { children: Object.entries(a).map(([i, d]) => /* @__PURE__ */ l.jsx(
        "div",
        {
          className: F(
            "fixed z-[100] flex flex-col gap-2 min-w-[320px] max-w-[420px]",
            K1[i],
            i.includes("bottom") ? "flex-col-reverse" : "flex-col"
          ),
          children: d.map((u) => /* @__PURE__ */ l.jsx(
            Dl,
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
  ] }) : /* @__PURE__ */ l.jsx(ho.Provider, { value: { showToast: o, removeToast: n }, children: e });
}, Pm = () => {
  const e = xt(ho);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, W1 = {
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
}, zl = {
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
}, Y1 = {
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
}, ys = {
  ...W1,
  ...zl
}, xs = {
  image: "https://design-system-eaip.onrender.com/img/error.svg",
  message: "An unexpected error occurred. Our team is currently investigating the issue."
}, ws = (e) => typeof e == "object" && e !== null && ("code" in e || "message" in e), Tm = ({
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
      const f = Y1[o];
      return zl[f];
    }
    return ws(e) && e.code && ys[e.code] ? ys[e.code] : xs;
  })(), u = a || d.image, c = s || (ws(e) ? e.message : null) || d.message;
  return /* @__PURE__ */ l.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${n}`, children: [
    /* @__PURE__ */ l.jsx(
      "img",
      {
        src: u,
        alt: "Error illustration",
        className: "max-w-[300px] h-auto"
      }
    ),
    typeof c == "string" ? /* @__PURE__ */ l.jsx(jr, { variant: "body1", className: "m-0", children: c }) : /* @__PURE__ */ l.jsx("div", { className: "m-0", children: c }),
    t && /* @__PURE__ */ l.jsx(
      Ye,
      {
        onClick: t,
        rounded: "full",
        variant: "primary",
        size: "md",
        children: "Try Again"
      }
    )
  ] });
}, X1 = De(
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
), Z1 = Ie(
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
    submitButtonVariant: b = "primary",
    length: p = 6,
    numericOnly: $ = !0,
    onComplete: w,
    onChange: k,
    onSubmit: P,
    value: v,
    defaultValue: j = "",
    disabled: S = !1,
    autoFocus: I = !1,
    ...A
  }, H) => {
    const [O, R] = re(j || ""), z = ae([]);
    de(() => {
      v !== void 0 && R(v);
    }, [v]);
    const g = v !== void 0, T = g ? v : O, h = (D) => {
      g || R(D), k == null || k(D), D.length === p && (w == null || w(D), c || P == null || P(D));
    }, E = (D) => (B) => {
      z.current[D] = B;
    }, _ = (D) => {
      D.target.select();
    }, m = (D, B) => {
      var L;
      const W = D.target.value;
      let M = "";
      if (W.length >= 1)
        M = W.slice(-1);
      else if (W.length === 0) {
        const K = T.split("");
        K[B] = "", h(K.join(""));
        return;
      }
      if ($ && !/^\d$/.test(M))
        return;
      const G = T.split("");
      for (; G.length <= B; )
        G.push("");
      G[B] = M;
      const X = G.join("");
      h(X), B < p - 1 && M && ((L = z.current[B + 1]) == null || L.focus());
    }, y = (D, B) => {
      var W, M, G;
      if (D.key === "Backspace") {
        const X = T.split("");
        T[B] ? (D.preventDefault(), X[B] = "", h(X.join(""))) : B > 0 && (D.preventDefault(), X[B - 1] = "", h(X.join("")), (W = z.current[B - 1]) == null || W.focus());
      } else if (D.key === "Delete") {
        if (T[B]) {
          D.preventDefault();
          const X = T.split("");
          X[B] = "", h(X.join(""));
        }
      } else if (D.key === "ArrowLeft" && B > 0)
        D.preventDefault(), (M = z.current[B - 1]) == null || M.focus();
      else if (D.key === "ArrowRight" && B < p - 1)
        D.preventDefault(), (G = z.current[B + 1]) == null || G.focus();
      else if (!D.ctrlKey && !D.altKey && !D.metaKey && D.key.length === 1 && $ && !/^\d$/.test(D.key)) {
        D.preventDefault();
        return;
      }
    }, N = (D) => {
      var X;
      D.preventDefault();
      const B = D.clipboardData.getData("text/plain").trim();
      if ($ && !/^\d+$/.test(B))
        return;
      const M = B.slice(0, p).padEnd(T.length, "").slice(0, p);
      h(M);
      const G = M.length < p ? M.length : p - 1;
      (X = z.current[G]) == null || X.focus();
    }, C = () => {
      T.length === p && (P == null || P(T));
    }, Y = T.split("").concat(Array(p - T.length).fill(""));
    return /* @__PURE__ */ l.jsxs("div", { ref: H, className: F("w-full", e), ...A, children: [
      i && /* @__PURE__ */ l.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        i,
        u && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ l.jsx("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: p }).map((D, B) => /* @__PURE__ */ l.jsx(
          "input",
          {
            ref: E(B),
            type: $ ? "tel" : "text",
            inputMode: $ ? "numeric" : "text",
            maxLength: 1,
            value: Y[B] || "",
            onChange: (W) => m(W, B),
            onKeyDown: (W) => y(W, B),
            onPaste: B === 0 ? N : void 0,
            onFocus: _,
            disabled: S,
            autoFocus: I && B === 0,
            className: F(
              X1({
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
          Ye,
          {
            variant: b,
            disabled: T.length !== p || S,
            onClick: C,
            className: "mt-4",
            children: f
          }
        )
      ] })
    ] });
  }
);
Z1.displayName = "InputOTP";
const ks = {
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
}, Sm = ({
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
  const c = d ? "px-2" : "", f = d ? "min-w-[20px]" : "w-2.5 h-2.5", b = d ? "h-5" : "h-2.5", p = typeof r == "string" && r in ks ? ks[r] : r;
  return /* @__PURE__ */ l.jsxs("div", { className: F("relative inline-block", t), children: [
    a || (e ? /* @__PURE__ */ l.jsx(ue, { icon: e, color: p, size: 32, ...s }) : null),
    /* @__PURE__ */ l.jsx(
      "span",
      {
        className: F(
          "absolute flex items-center justify-center rounded-xl bg-[#FF4C4C] text-white text-[10px] font-semibold",
          i,
          c,
          f,
          b,
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
}, q1 = {
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
}, J1 = {
  "flight-light": "FLIGHT_LIGHT",
  "flight-dark": "FLIGHT_DARK",
  "tixia-circular": "TIXIA-CIRCULAR",
  "tixia-linear": "TIXIA-LINEAR"
}, Qr = (e, t) => e === void 0 ? { className: t } : typeof e == "number" ? {
  className: "",
  style: { width: `${e}px`, height: `${e}px` }
} : { className: e }, Cm = ({
  variant: e,
  customImage: t,
  customMessage: r,
  width: n = "w-full",
  height: o = "h-full",
  widthImg: a = "w-auto",
  heightImg: s = "h-auto",
  className: i = ""
}) => {
  const d = J1[e], u = q1[d], c = Qr(n, "w-full"), f = Qr(o, "h-full"), b = Qr(a, "w-auto"), p = Qr(s, "h-auto");
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
            className: `${b.className} ${p.className}`,
            style: { ...b.style, ...p.style }
          }
        ),
        r ? typeof r == "string" ? /* @__PURE__ */ l.jsx(jr, { variant: "body1", className: "m-0", children: r }) : /* @__PURE__ */ l.jsx("div", { className: "m-0", children: r }) : /* @__PURE__ */ l.jsx(jr, { variant: "body1", className: "m-0", children: u.message })
      ]
    }
  );
}, Q1 = {
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
}, em = {
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
}, jm = ({
  variant: e,
  customMessage: t,
  reload: r,
  reloadText: n = "Try Again",
  customImage: o,
  width: a,
  height: s,
  className: i = ""
}) => {
  const d = em[e], u = Q1[d];
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
    t ? typeof t == "string" ? /* @__PURE__ */ l.jsx(jr, { variant: "body1", className: "m-0", children: t }) : /* @__PURE__ */ l.jsx("div", { className: "m-0", children: t }) : /* @__PURE__ */ l.jsx(jr, { variant: "body1", className: "m-0", children: u.message }),
    r && /* @__PURE__ */ l.jsx(
      Ye,
      {
        onClick: r,
        rounded: "full",
        variant: "primary",
        size: "md",
        children: n
      }
    )
  ] });
}, tm = ({
  children: e,
  delay: t = 0,
  index: r,
  onMouseEnter: n,
  onClick: o
}) => {
  const a = ae(null), s = Ql(a, { amount: 0.5 });
  return /* @__PURE__ */ l.jsx(
    ed.div,
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
}, Im = ({
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
  const u = ae(null), [c, f] = re(d), [b, p] = re(!1), [$, w] = re(0), [k, P] = re(1), v = Le(() => t ? se.Children.toArray(t) : e || [], [t, e]), j = Le(() => !!t, [t]), S = (I) => {
    const { scrollTop: A, scrollHeight: H, clientHeight: O } = I.currentTarget;
    w(Math.min(A / 50, 1));
    const R = H - (A + O);
    P(
      H <= O ? 0 : Math.min(R / 50, 1)
    );
  };
  return de(() => {
    if (!o) return;
    const I = (A) => {
      A.key === "ArrowDown" || A.key === "Tab" && !A.shiftKey ? (A.preventDefault(), p(!0), f((H) => Math.min(H + 1, v.length - 1))) : A.key === "ArrowUp" || A.key === "Tab" && A.shiftKey ? (A.preventDefault(), p(!0), f((H) => Math.max(H - 1, 0))) : A.key === "Enter" && c >= 0 && c < v.length && (A.preventDefault(), r && r(v[c], c));
    };
    return window.addEventListener("keydown", I), () => window.removeEventListener("keydown", I);
  }, [v, c, r, o]), de(() => {
    if (!b || c < 0 || !u.current) return;
    const I = u.current, A = I.querySelector(
      `[data-index="${c}"]`
    );
    if (A) {
      const O = I.scrollTop, R = I.clientHeight, z = A.offsetTop, g = z + A.offsetHeight;
      z < O + 50 ? I.scrollTo({ top: z - 50, behavior: "smooth" }) : g > O + R - 50 && I.scrollTo({
        top: g - R + 50,
        behavior: "smooth"
      });
    }
    p(!1);
  }, [c, b]), /* @__PURE__ */ l.jsxs("div", { className: `scroll-list-container ${a}`, children: [
    /* @__PURE__ */ l.jsx(
      "div",
      {
        ref: u,
        className: `scroll-list ${i ? "" : "no-scrollbar"}`,
        onScroll: S,
        children: v.map((I, A) => /* @__PURE__ */ l.jsx(
          tm,
          {
            delay: 0.1,
            index: A,
            onMouseEnter: () => f(A),
            onClick: () => {
              f(A), r && r(I, A);
            },
            children: j ? /* @__PURE__ */ l.jsx(
              "div",
              {
                className: `${c === A ? "selected" : ""} ${s}`,
                children: I
              }
            ) : /* @__PURE__ */ l.jsx(
              "div",
              {
                className: `border border-gray-200 rounded-md p-2 w-full hover:bg-gray-300 ${c === A ? "selected" : ""} ${s}`,
                children: /* @__PURE__ */ l.jsx("p", { className: "item-text", children: I })
              }
            )
          },
          A
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
          style: { opacity: k }
        }
      )
    ] })
  ] });
};
export {
  im as Accordion,
  Im as AnimatedList,
  Dd as AutoComplete,
  lm as Avatar,
  dm as Badge,
  Sm as BadgeNotif,
  V1 as Breadcrumbs,
  Ye as Button,
  Ms as Card,
  Ud as CheckBoxGroup,
  En as Checkbox,
  cm as Chip,
  ec as DatePicker,
  rc as Dialog,
  ac as DialogActions,
  oc as DialogBody,
  zs as DialogHeader,
  nc as DialogTitle,
  sc as Divider,
  Tm as ErrorWrapper,
  um as FileUpload,
  ue as Icon,
  Rs as Input,
  Z1 as InputOTP,
  Cm as Loader,
  jm as NegativeCase,
  fm as Notification,
  uc as Pagination,
  ei as PhoneInput,
  ym as PhoneInputDemo,
  km as Popover,
  Hn as PrimitiveDatePicker,
  Rc as Progress,
  fc as Radio,
  gc as RadioGroup,
  Gs as Select,
  fn as SelectItem,
  mc as Skeleton,
  pm as Slider,
  gm as StarRating,
  mm as StatusIndicator,
  bm as Stepper,
  hm as Switch,
  Nm as Table,
  $m as Tabs,
  jr as Text,
  kc as Textarea,
  Ec as TimePicker,
  Dl as Toast,
  Em as ToastProvider,
  Sc as Toggle,
  vm as Tooltip,
  Vd as buttonVariants,
  Hd as cardVariants,
  F as cn,
  X1 as inputOTPVariants,
  Pc as toggleVariants,
  Pm as useToast
};
