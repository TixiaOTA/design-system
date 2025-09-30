import * as Xo from "react";
import ie, { useState as oe, useEffect as de, forwardRef as Ie, useRef as ae, useImperativeHandle as ho, useLayoutEffect as Es, useCallback as me, Children as Cr, isValidElement as Tr, cloneElement as vo, useContext as xt, useMemo as Ge, createContext as Ns } from "react";
import ql, { createPortal as Gt, flushSync as Jl } from "react-dom";
import Pe from "dayjs";
import { LazyMotion as zn, AnimatePresence as Ps, m as Gn } from "framer-motion";
import { useReactTable as Ql, getPaginationRowModel as ed, getSortedRowModel as td, getCoreRowModel as rd, flexRender as Zo } from "@tanstack/react-table";
var Ts = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ss(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vn = { exports: {} }, br = {};
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
function nd() {
  if (qo) return br;
  qo = 1;
  var e = ie, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, d, u) {
    var c, f = {}, b = null, p = null;
    u !== void 0 && (b = "" + u), d.key !== void 0 && (b = "" + d.key), d.ref !== void 0 && (p = d.ref);
    for (c in d) n.call(d, c) && !a.hasOwnProperty(c) && (f[c] = d[c]);
    if (i && i.defaultProps) for (c in d = i.defaultProps, d) f[c] === void 0 && (f[c] = d[c]);
    return { $$typeof: t, type: i, key: b, ref: p, props: f, _owner: o.current };
  }
  return br.Fragment = r, br.jsx = s, br.jsxs = s, br;
}
var $r = {};
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
function od() {
  return Jo || (Jo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ie, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h = Symbol.iterator, w = "@@iterator";
    function k(x) {
      if (x === null || typeof x != "object")
        return null;
      var H = h && x[h] || x[w];
      return typeof H == "function" ? H : null;
    }
    var P = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(x) {
      {
        for (var H = arguments.length, q = new Array(H > 1 ? H - 1 : 0), le = 1; le < H; le++)
          q[le - 1] = arguments[le];
        j("error", x, q);
      }
    }
    function j(x, H, q) {
      {
        var le = P.ReactDebugCurrentFrame, ke = le.getStackAddendum();
        ke !== "" && (H += "%s", q = q.concat([ke]));
        var Ne = q.map(function(ve) {
          return String(ve);
        });
        Ne.unshift("Warning: " + H), Function.prototype.apply.call(console[x], console, Ne);
      }
    }
    var S = !1, O = !1, D = !1, U = !1, A = !1, _;
    _ = Symbol.for("react.module.reference");
    function z(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === n || x === a || A || x === o || x === u || x === c || U || x === p || S || O || D || typeof x == "object" && x !== null && (x.$$typeof === b || x.$$typeof === f || x.$$typeof === s || x.$$typeof === i || x.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === _ || x.getModuleId !== void 0));
    }
    function g(x, H, q) {
      var le = x.displayName;
      if (le)
        return le;
      var ke = H.displayName || H.name || "";
      return ke !== "" ? q + "(" + ke + ")" : q;
    }
    function T(x) {
      return x.displayName || "Context";
    }
    function $(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
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
            var H = x;
            return T(H) + ".Consumer";
          case s:
            var q = x;
            return T(q._context) + ".Provider";
          case d:
            return g(x, x.render, "ForwardRef");
          case f:
            var le = x.displayName || null;
            return le !== null ? le : $(x.type) || "Memo";
          case b: {
            var ke = x, Ne = ke._payload, ve = ke._init;
            try {
              return $(ve(Ne));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, I = 0, m, v, E, C, Y, F, V;
    function K() {
    }
    K.__reactDisabledLog = !0;
    function L() {
      {
        if (I === 0) {
          m = console.log, v = console.info, E = console.warn, C = console.error, Y = console.group, F = console.groupCollapsed, V = console.groupEnd;
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
        I++;
      }
    }
    function G() {
      {
        if (I--, I === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, x, {
              value: m
            }),
            info: N({}, x, {
              value: v
            }),
            warn: N({}, x, {
              value: E
            }),
            error: N({}, x, {
              value: C
            }),
            group: N({}, x, {
              value: Y
            }),
            groupCollapsed: N({}, x, {
              value: F
            }),
            groupEnd: N({}, x, {
              value: V
            })
          });
        }
        I < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = P.ReactCurrentDispatcher, R;
    function W(x, H, q) {
      {
        if (R === void 0)
          try {
            throw Error();
          } catch (ke) {
            var le = ke.stack.trim().match(/\n( *(at )?)/);
            R = le && le[1] || "";
          }
        return `
` + R + x;
      }
    }
    var fe = !1, he;
    {
      var ye = typeof WeakMap == "function" ? WeakMap : Map;
      he = new ye();
    }
    function Ce(x, H) {
      if (!x || fe)
        return "";
      {
        var q = he.get(x);
        if (q !== void 0)
          return q;
      }
      var le;
      fe = !0;
      var ke = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ne;
      Ne = X.current, X.current = null, L();
      try {
        if (H) {
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
`), Ae = be.length - 1, Le = Je.length - 1; Ae >= 1 && Le >= 0 && be[Ae] !== Je[Le]; )
            Le--;
          for (; Ae >= 1 && Le >= 0; Ae--, Le--)
            if (be[Ae] !== Je[Le]) {
              if (Ae !== 1 || Le !== 1)
                do
                  if (Ae--, Le--, Le < 0 || be[Ae] !== Je[Le]) {
                    var lt = `
` + be[Ae].replace(" at new ", " at ");
                    return x.displayName && lt.includes("<anonymous>") && (lt = lt.replace("<anonymous>", x.displayName)), typeof x == "function" && he.set(x, lt), lt;
                  }
                while (Ae >= 1 && Le >= 0);
              break;
            }
        }
      } finally {
        fe = !1, X.current = Ne, G(), Error.prepareStackTrace = ke;
      }
      var Jt = x ? x.displayName || x.name : "", Bt = Jt ? W(Jt) : "";
      return typeof x == "function" && he.set(x, Bt), Bt;
    }
    function Ze(x, H, q) {
      return Ce(x, !1);
    }
    function Oe(x) {
      var H = x.prototype;
      return !!(H && H.isReactComponent);
    }
    function Ke(x, H, q) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return Ce(x, Oe(x));
      if (typeof x == "string")
        return W(x);
      switch (x) {
        case u:
          return W("Suspense");
        case c:
          return W("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case d:
            return Ze(x.render);
          case f:
            return Ke(x.type, H, q);
          case b: {
            var le = x, ke = le._payload, Ne = le._init;
            try {
              return Ke(Ne(ke), H, q);
            } catch {
            }
          }
        }
      return "";
    }
    var Ve = Object.prototype.hasOwnProperty, at = {}, Be = P.ReactDebugCurrentFrame;
    function st(x) {
      if (x) {
        var H = x._owner, q = Ke(x.type, x._source, H ? H.type : null);
        Be.setExtraStackFrame(q);
      } else
        Be.setExtraStackFrame(null);
    }
    function Qe(x, H, q, le, ke) {
      {
        var Ne = Function.call.bind(Ve);
        for (var ve in x)
          if (Ne(x, ve)) {
            var be = void 0;
            try {
              if (typeof x[ve] != "function") {
                var Je = Error((le || "React class") + ": " + q + " type `" + ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Je.name = "Invariant Violation", Je;
              }
              be = x[ve](H, ve, le, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ae) {
              be = Ae;
            }
            be && !(be instanceof Error) && (st(ke), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", le || "React class", q, ve, typeof be), st(null)), be instanceof Error && !(be.message in at) && (at[be.message] = !0, st(ke), y("Failed %s type: %s", q, be.message), st(null));
          }
      }
    }
    var qe = Array.isArray;
    function De(x) {
      return qe(x);
    }
    function wt(x) {
      {
        var H = typeof Symbol == "function" && Symbol.toStringTag, q = H && x[Symbol.toStringTag] || x.constructor.name || "Object";
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
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wt(x)), ee(x);
    }
    var te = P.ReactCurrentOwner, Z = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, B, re;
    function ne(x) {
      if (Ve.call(x, "ref")) {
        var H = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function pe(x) {
      if (Ve.call(x, "key")) {
        var H = Object.getOwnPropertyDescriptor(x, "key").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function He(x, H) {
      typeof x.ref == "string" && te.current;
    }
    function ot(x, H) {
      {
        var q = function() {
          B || (B = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        q.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: q,
          configurable: !0
        });
      }
    }
    function it(x, H) {
      {
        var q = function() {
          re || (re = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        q.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: q,
          configurable: !0
        });
      }
    }
    var Et = function(x, H, q, le, ke, Ne, ve) {
      var be = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: x,
        key: H,
        ref: q,
        props: ve,
        // Record the component responsible for creating this element.
        _owner: Ne
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
    function Zt(x, H, q, le, ke) {
      {
        var Ne, ve = {}, be = null, Je = null;
        q !== void 0 && (we(q), be = "" + q), pe(H) && (we(H.key), be = "" + H.key), ne(H) && (Je = H.ref, He(H, ke));
        for (Ne in H)
          Ve.call(H, Ne) && !Z.hasOwnProperty(Ne) && (ve[Ne] = H[Ne]);
        if (x && x.defaultProps) {
          var Ae = x.defaultProps;
          for (Ne in Ae)
            ve[Ne] === void 0 && (ve[Ne] = Ae[Ne]);
        }
        if (be || Je) {
          var Le = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          be && ot(ve, Le), Je && it(ve, Le);
        }
        return Et(x, be, Je, ke, le, te.current, ve);
      }
    }
    var Vt = P.ReactCurrentOwner, bt = P.ReactDebugCurrentFrame;
    function qt(x) {
      if (x) {
        var H = x._owner, q = Ke(x.type, x._source, H ? H.type : null);
        bt.setExtraStackFrame(q);
      } else
        bt.setExtraStackFrame(null);
    }
    var yn;
    yn = !1;
    function xn(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function Bo() {
      {
        if (Vt.current) {
          var x = $(Vt.current.type);
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
    function Vl(x) {
      {
        var H = Bo();
        if (!H) {
          var q = typeof x == "string" ? x : x.displayName || x.name;
          q && (H = `

Check the top-level render call using <` + q + ">.");
        }
        return H;
      }
    }
    function Uo(x, H) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var q = Vl(H);
        if (Ho[q])
          return;
        Ho[q] = !0;
        var le = "";
        x && x._owner && x._owner !== Vt.current && (le = " It was passed a child from " + $(x._owner.type) + "."), qt(x), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, le), qt(null);
      }
    }
    function Wo(x, H) {
      {
        if (typeof x != "object")
          return;
        if (De(x))
          for (var q = 0; q < x.length; q++) {
            var le = x[q];
            xn(le) && Uo(le, H);
          }
        else if (xn(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var ke = k(x);
          if (typeof ke == "function" && ke !== x.entries)
            for (var Ne = ke.call(x), ve; !(ve = Ne.next()).done; )
              xn(ve.value) && Uo(ve.value, H);
        }
      }
    }
    function Bl(x) {
      {
        var H = x.type;
        if (H == null || typeof H == "string")
          return;
        var q;
        if (typeof H == "function")
          q = H.propTypes;
        else if (typeof H == "object" && (H.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        H.$$typeof === f))
          q = H.propTypes;
        else
          return;
        if (q) {
          var le = $(H);
          Qe(q, x.props, "prop", le, x);
        } else if (H.PropTypes !== void 0 && !yn) {
          yn = !0;
          var ke = $(H);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ke || "Unknown");
        }
        typeof H.getDefaultProps == "function" && !H.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Hl(x) {
      {
        for (var H = Object.keys(x.props), q = 0; q < H.length; q++) {
          var le = H[q];
          if (le !== "children" && le !== "key") {
            qt(x), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", le), qt(null);
            break;
          }
        }
        x.ref !== null && (qt(x), y("Invalid attribute `ref` supplied to `React.Fragment`."), qt(null));
      }
    }
    var Ko = {};
    function Yo(x, H, q, le, ke, Ne) {
      {
        var ve = z(x);
        if (!ve) {
          var be = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (be += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Je = Gl();
          Je ? be += Je : be += Bo();
          var Ae;
          x === null ? Ae = "null" : De(x) ? Ae = "array" : x !== void 0 && x.$$typeof === t ? (Ae = "<" + ($(x.type) || "Unknown") + " />", be = " Did you accidentally export a JSX literal instead of a component?") : Ae = typeof x, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ae, be);
        }
        var Le = Zt(x, H, q, ke, Ne);
        if (Le == null)
          return Le;
        if (ve) {
          var lt = H.children;
          if (lt !== void 0)
            if (le)
              if (De(lt)) {
                for (var Jt = 0; Jt < lt.length; Jt++)
                  Wo(lt[Jt], x);
                Object.freeze && Object.freeze(lt);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wo(lt, x);
        }
        if (Ve.call(H, "key")) {
          var Bt = $(x), et = Object.keys(H).filter(function(Zl) {
            return Zl !== "key";
          }), wn = et.length > 0 ? "{key: someKey, " + et.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ko[Bt + wn]) {
            var Xl = et.length > 0 ? "{" + et.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, wn, Bt, Xl, Bt), Ko[Bt + wn] = !0;
          }
        }
        return x === n ? Hl(Le) : Bl(Le), Le;
      }
    }
    function Ul(x, H, q) {
      return Yo(x, H, q, !0);
    }
    function Wl(x, H, q) {
      return Yo(x, H, q, !1);
    }
    var Kl = Wl, Yl = Ul;
    $r.Fragment = n, $r.jsx = Kl, $r.jsxs = Yl;
  }()), $r;
}
process.env.NODE_ENV === "production" ? Vn.exports = nd() : Vn.exports = od();
var l = Vn.exports;
function Cs(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Cs(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function $e() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Cs(e)) && (n && (n += " "), n += t);
  return n;
}
const yo = "-", ad = (e) => {
  const t = id(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(yo);
      return i[0] === "" && i.length !== 1 && i.shift(), js(i, t) || sd(s);
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
}, Qo = /^\[(.+)\]$/, sd = (e) => {
  if (Qo.test(e)) {
    const t = Qo.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, id = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return dd(Object.entries(e.classGroups), r).forEach(([a, s]) => {
    Bn(s, n, a, t);
  }), n;
}, Bn = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : ea(t, o);
      a.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (ld(o)) {
        Bn(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      Bn(s, ea(t, a), r, n);
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
}, ld = (e) => e.isThemeGetter, dd = (e, t) => t ? e.map(([r, n]) => {
  const o = n.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([s, i]) => [t + s, i])) : a);
  return [r, o];
}) : e, cd = (e) => {
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
}, Is = "!", ud = (e) => {
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
    const b = d.length === 0 ? i : i.substring(c), p = b.startsWith(Is), h = p ? b.substring(1) : b, w = f && f > c ? f - c : void 0;
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
}, fd = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, pd = (e) => ({
  cache: cd(e.cacheSize),
  parseClassName: ud(e),
  ...ad(e)
}), gd = /\s+/, md = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, a = [], s = e.trim().split(gd);
  let i = "";
  for (let d = s.length - 1; d >= 0; d -= 1) {
    const u = s[d], {
      modifiers: c,
      hasImportantModifier: f,
      baseClassName: b,
      maybePostfixModifierPosition: p
    } = r(u);
    let h = !!p, w = n(h ? b.substring(0, p) : b);
    if (!w) {
      if (!h) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (w = n(b), !w) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      h = !1;
    }
    const k = fd(c).join(":"), P = f ? k + Is : k, y = P + w;
    if (a.includes(y))
      continue;
    a.push(y);
    const j = o(w, h);
    for (let S = 0; S < j.length; ++S) {
      const O = j[S];
      a.push(P + O);
    }
    i = u + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function bd() {
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
function $d(e, ...t) {
  let r, n, o, a = s;
  function s(d) {
    const u = t.reduce((c, f) => f(c), e());
    return r = pd(u), n = r.cache.get, o = r.cache.set, a = i, i(d);
  }
  function i(d) {
    const u = n(d);
    if (u)
      return u;
    const c = md(d, r);
    return o(d, c), c;
  }
  return function() {
    return a(bd.apply(null, arguments));
  };
}
const Se = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, As = /^\[(?:([a-z-]+):)?(.+)\]$/i, hd = /^\d+\/\d+$/, vd = /* @__PURE__ */ new Set(["px", "full", "screen"]), yd = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, xd = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, wd = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, kd = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ed = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Nt = (e) => ar(e) || vd.has(e) || hd.test(e), At = (e) => fr(e, "length", Od), ar = (e) => !!e && !Number.isNaN(Number(e)), kn = (e) => fr(e, "number", ar), hr = (e) => !!e && Number.isInteger(Number(e)), Nd = (e) => e.endsWith("%") && ar(e.slice(0, -1)), ce = (e) => As.test(e), _t = (e) => yd.test(e), Pd = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Td = (e) => fr(e, Pd, _s), Sd = (e) => fr(e, "position", _s), Cd = /* @__PURE__ */ new Set(["image", "url"]), jd = (e) => fr(e, Cd, _d), Id = (e) => fr(e, "", Ad), vr = () => !0, fr = (e, t, r) => {
  const n = As.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, Od = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  xd.test(e) && !wd.test(e)
), _s = () => !1, Ad = (e) => kd.test(e), _d = (e) => Ed.test(e), Rd = () => {
  const e = Se("colors"), t = Se("spacing"), r = Se("blur"), n = Se("brightness"), o = Se("borderColor"), a = Se("borderRadius"), s = Se("borderSpacing"), i = Se("borderWidth"), d = Se("contrast"), u = Se("grayscale"), c = Se("hueRotate"), f = Se("invert"), b = Se("gap"), p = Se("gradientColorStops"), h = Se("gradientColorStopPositions"), w = Se("inset"), k = Se("margin"), P = Se("opacity"), y = Se("padding"), j = Se("saturate"), S = Se("scale"), O = Se("sepia"), D = Se("skew"), U = Se("space"), A = Se("translate"), _ = () => ["auto", "contain", "none"], z = () => ["auto", "hidden", "clip", "visible", "scroll"], g = () => ["auto", ce, t], T = () => [ce, t], $ = () => ["", Nt, At], N = () => ["auto", ar, ce], I = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], m = () => ["solid", "dashed", "dotted", "double", "none"], v = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], E = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], C = () => ["", "0", ce], Y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], F = () => [ar, ce];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [vr],
      spacing: [Nt, At],
      blur: ["none", "", _t, ce],
      brightness: F(),
      borderColor: [e],
      borderRadius: ["none", "", "full", _t, ce],
      borderSpacing: T(),
      borderWidth: $(),
      contrast: F(),
      grayscale: C(),
      hueRotate: F(),
      invert: C(),
      gap: T(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Nd, At],
      inset: g(),
      margin: g(),
      opacity: F(),
      padding: T(),
      saturate: F(),
      scale: F(),
      sepia: C(),
      skew: F(),
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
        object: [...I(), ce]
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
        z: ["auto", hr, ce]
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
        order: ["first", "last", "none", hr, ce]
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
          span: ["full", hr, ce]
        }, ce]
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
        "grid-rows": [vr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [hr, ce]
        }, ce]
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
        "space-x": [U]
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
        "space-y": [U]
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
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Nt, ce]
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
        decoration: ["auto", "from-font", Nt, At]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Nt, ce]
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
        bg: [...I(), Sd]
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
        bg: ["auto", "cover", "contain", Td]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, jd]
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
        "outline-offset": [Nt, ce]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Nt, At]
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
        ring: $()
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
        "ring-offset": [Nt, At]
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
        shadow: ["", "inner", "none", _t, Id]
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
        "mix-blend": [...v(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": v()
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ce]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: F()
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
        delay: F()
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
        rotate: [hr, ce]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [A]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [A]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [D]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [D]
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
        stroke: [Nt, At, kn]
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
}, yt = /* @__PURE__ */ $d(Rd);
function M(...e) {
  return yt($e(e));
}
const ta = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ra = $e, Fe = (e, t) => (r) => {
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
    return Object.entries(p).every((h) => {
      let [w, k] = h;
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
  const [c, f] = oe(null), [b, p] = oe(!0), [h, w] = oe(null);
  return de(() => {
    let k = !0;
    return (async () => {
      try {
        const { Icon: y } = await import("./iconify-Dqt3MVen.mjs");
        k && (f(() => y), p(!1));
      } catch (y) {
        console.error("Failed to load icon:", y), k && (w(y), p(!1));
      }
    })(), () => {
      k = !1;
    };
  }, []), b ? /* @__PURE__ */ l.jsx("span", { style: { width: r, height: r } }) : h || !c ? null : /* @__PURE__ */ l.jsx(
    c,
    {
      icon: e,
      className: M(
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
}, Ld = Fe(
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
    id: h,
    ...w
  }, k) => {
    const P = h || ie.useId(), y = `${P}-helper`, j = `${P}-error`, S = /* @__PURE__ */ l.jsxs("div", { className: M("relative", !c && "inline-block"), children: [
      f && /* @__PURE__ */ l.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ l.jsx(ue, { icon: f, className: "w-4 h-4" }) }),
      /* @__PURE__ */ l.jsx(
        "input",
        {
          id: P,
          type: "text",
          ref: k,
          className: M(
            Ld({ variant: o ? "error" : t, size: r, rounded: n, fullWidth: c }),
            f && "pl-10",
            b && "pr-10",
            e
          ),
          "aria-describedby": o ? j : s ? y : void 0,
          "aria-invalid": o,
          "aria-required": d,
          ...w
        }
      ),
      b && /* @__PURE__ */ l.jsx(
        "div",
        {
          className: M(
            "absolute right-3 top-1/2 -translate-y-1/2 text-neutral",
            p && "cursor-pointer hover:text-primary-600"
          ),
          onClick: p,
          role: p ? "button" : void 0,
          tabIndex: p ? 0 : void 0,
          children: /* @__PURE__ */ l.jsx(ue, { icon: b, className: "w-4 h-4" })
        }
      )
    ] }), O = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      o && a && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger", id: j, children: a }),
      !o && s && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral", id: y, children: s })
    ] });
    return u === "left" ? /* @__PURE__ */ l.jsx("div", { className: M(c ? "w-full" : "inline-block", e), children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-4", children: [
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
      /* @__PURE__ */ l.jsxs("div", { className: M("flex-1", !c && "inline-block"), children: [
        S,
        O
      ] })
    ] }) }) : /* @__PURE__ */ l.jsxs("div", { className: M(c ? "w-full" : "inline-block", e), children: [
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
      O
    ] });
  }
);
Rs.displayName = "Input";
const fn = ie.forwardRef(
  ({ className: e, children: t, selected: r, disabled: n, ...o }, a) => /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: a,
      className: M(
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
}, We = () => Ls ? document : {
  addEventListener: () => {
  },
  removeEventListener: () => {
  },
  dispatchEvent: () => {
  }
}, En = "autocomplete-dropdown-opened", Md = Ie(
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
    label: h,
    required: w = !1,
    labelPlacement: k = "top",
    fullWidth: P = !1,
    value: y,
    onChange: j,
    onFocus: S,
    onBlur: O,
    showClear: D = !1,
    onClear: U,
    searchType: A = "include",
    initialItemsToShow: _,
    itemsToLoad: z = 10,
    maxDropdownHeight: g = 300,
    noOptionsMessage: T = "No options found",
    scrollMoreMessage: $ = "",
    allOptionsShownMessage: N = "",
    resetInvalidOnBlur: I = !1,
    onInvalidReset: m,
    ...v
  }, E) => {
    const [C, Y] = oe(!1), [F, V] = oe(y || ""), [K, L] = oe(
      _ || 0
    ), G = ae(null), X = ae(null), R = ae(null), W = ae(null), fe = n !== void 0, ye = `autocomplete-${ie.useId().replace(/:/g, "")}`, Ce = () => {
      if (!C || !X.current || !R.current) return;
      const { bottom: Z, top: B, left: re, width: ne } = X.current.getBoundingClientRect(), pe = R.current, He = pt(), ot = He.innerHeight - Z, it = B, Et = Math.min(g, 300), Zt = ot < Et, Vt = it > ot, bt = Zt && Vt;
      Object.assign(pe.style, {
        position: "fixed",
        left: `${re}px`,
        width: `${ne}px`
      }), bt ? Object.assign(pe.style, {
        bottom: `${He.innerHeight - B + 4}px`,
        top: "auto",
        maxHeight: `${it - 8}px`
      }) : Object.assign(pe.style, {
        top: `${Z + 4}px`,
        bottom: "auto",
        maxHeight: `${ot - 8}px`
      });
    };
    de(() => {
      const Z = pt(), B = We(), re = () => {
        C && Ce();
      }, ne = () => {
        C && Ce();
      }, pe = (ot) => {
        ot.detail.id !== ye && Y(!1);
      }, He = (ot) => {
        const it = ot.target;
        G.current && !G.current.contains(it) && R.current && !R.current.contains(it) && Y(!1);
      };
      return C && (Ce(), Z.addEventListener("scroll", re, !0), Z.addEventListener("resize", ne)), B.addEventListener(
        En,
        pe
      ), B.addEventListener("click", He), () => {
        Z.removeEventListener("scroll", re, !0), Z.removeEventListener("resize", ne), B.removeEventListener(
          En,
          pe
        ), B.removeEventListener("click", He);
      };
    }, [C, ye]), de(() => {
      V(y || "");
    }, [y]);
    const Ze = (Z) => {
      const { value: B } = Z.target;
      if (V(B), !B.trim()) {
        Y(!1);
        return;
      }
      const re = t.some(({ label: ne }) => {
        const pe = B.toLowerCase().trim(), He = ne.toLowerCase();
        return A === "startsWith" ? He.startsWith(pe) : He.includes(pe);
      });
      Y(re), j == null || j(Z);
    }, Oe = (Z) => {
      Z.stopPropagation(), V(""), U == null || U();
      const B = new Event(
        "change"
      );
      B.target = { value: "" }, j == null || j(B);
    }, Ke = (Z) => {
      var pe;
      if (!Z) return;
      const { value: B, label: re } = Z;
      V(re), Y(!1), r == null || r(B);
      const ne = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: Z }
      });
      (pe = X.current) == null || pe.dispatchEvent(ne);
    }, Ve = (Z) => Z.trim() ? t.some(({ label: B }) => {
      const re = Z.toLowerCase().trim(), ne = B.toLowerCase();
      return A === "startsWith" ? ne.startsWith(re) : ne.includes(re);
    }) : !0, at = (Z) => {
      if (I && F.trim() && !Ve(F)) {
        V(""), m == null || m();
        const B = new Event(
          "change"
        );
        B.target = { value: "" }, j == null || j(B);
      }
      O == null || O(Z);
    }, Be = t.filter(({ label: Z }) => {
      const B = F.toLowerCase().trim(), re = Z.toLowerCase();
      return A === "startsWith" ? re.startsWith(B) : re.includes(B);
    }), st = (Z) => {
      fe || (We().dispatchEvent(
        new CustomEvent(En, {
          detail: { id: ye }
        })
      ), Be.length > 0 && Y(!0)), S == null || S(Z);
    }, Qe = () => {
      if (!W.current || _ === void 0 || _ <= 0)
        return;
      const { scrollTop: Z, scrollHeight: B, clientHeight: re } = W.current;
      Z + re >= B - 10 && L(
        (pe) => Math.min(pe + z, Be.length)
      );
    };
    de(() => {
      _ !== void 0 && _ > 0 && L(_);
    }, [F, _]);
    const qe = _ !== void 0 && _ > 0 ? Be.slice(0, K) : Be, De = (Z, B) => Z ? Z.replace(/\{(\w+)\}/g, (re, ne) => {
      var pe;
      return ((pe = B[ne]) == null ? void 0 : pe.toString()) || re;
    }) : "", wt = fe ? n : C, kt = D && F && !v.disabled && !v.readOnly, ee = kt ? "mdi:close" : c, we = (Z) => {
      if (!(!wt || qe.length === 0))
        switch (Z.key) {
          case "Enter":
            Z.preventDefault(), qe.length === 1 && Ke(qe[0]);
            break;
          case "Tab":
            qe.length === 1 && (Z.preventDefault(), Ke(qe[0]));
            break;
          case "Escape":
            Z.preventDefault(), Y(!1);
            break;
        }
    }, te = () => {
      if (!wt) return null;
      const Z = We();
      if (!("body" in Z)) return null;
      const B = /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: R,
          className: "fixed z-[9999] min-w-[8rem] rounded-md border border-neutral-200 bg-white py-1 shadow-lg overflow-hidden",
          style: { maxHeight: `${g}px` },
          onClick: (re) => re.stopPropagation(),
          children: /* @__PURE__ */ l.jsx(
            "div",
            {
              ref: W,
              className: "overflow-auto",
              style: { maxHeight: `${g}px` },
              onScroll: Qe,
              children: o ? /* @__PURE__ */ l.jsx("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ l.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }) }) : qe.length > 0 ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                qe.map((re) => /* @__PURE__ */ l.jsx(
                  fn,
                  {
                    value: re.value,
                    selected: re.label === F,
                    onClick: () => Ke(re),
                    children: a ? a(re) : re.label
                  },
                  re.value
                )),
                _ !== void 0 && _ > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                  K < Be.length && $ && /* @__PURE__ */ l.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: De($, {
                    current: K,
                    total: Be.length
                  }) }),
                  K >= Be.length && Be.length > 0 && N && /* @__PURE__ */ l.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: De(N, {
                    total: Be.length
                  }) })
                ] })
              ] }) : /* @__PURE__ */ l.jsx("div", { className: "px-2 py-2 text-sm text-neutral", children: T })
            }
          )
        }
      );
      return Gt(B, Z.body);
    };
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: G,
        className: M("relative", P ? "w-full" : "inline-block"),
        children: [
          /* @__PURE__ */ l.jsx("div", { ref: X, className: M(!P && "inline-block"), children: /* @__PURE__ */ l.jsx(
            Rs,
            {
              ref: E,
              value: F,
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
              label: h,
              required: w,
              labelPlacement: k,
              fullWidth: P,
              className: e,
              ...v,
              onClick: kt ? Oe : v.onClick
            }
          ) }),
          te()
        ]
      }
    );
  }
);
Md.displayName = "AutoComplete";
const Fd = {
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
}, Dd = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, zd = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full"
}, om = ({
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
  const [b, p] = oe(r), h = n !== void 0 ? n : b, w = n !== void 0, k = (y) => {
    let j;
    t ? j = h.includes(y) ? h.filter((S) => S !== y) : [...h, y] : j = h.includes(y) ? [] : [y], w ? o == null || o(j) : p(j);
  }, P = Fd[u];
  return /* @__PURE__ */ l.jsx("div", { className: $e("w-full space-y-2", i), children: e.map((y) => {
    const j = h.includes(y.id), S = !!y.disabled;
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: $e(
          "border overflow-hidden",
          "bg-white",
          "border-gray-200",
          Dd[c],
          zd[f],
          "transition-shadow duration-200"
        ),
        children: [
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              onClick: () => !S && k(y.id),
              disabled: S,
              className: $e(
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
                    className: $e(
                      "mr-3 transition-transform duration-200",
                      j && "rotate-180"
                    ),
                    children: /* @__PURE__ */ l.jsx(ue, { icon: a, className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ l.jsx("div", { className: "flex-1", children: y.title }),
                s === "right" && /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: $e(
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
              className: $e(
                "grid transition-all duration-200 ease-in-out",
                j ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              ),
              children: /* @__PURE__ */ l.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ l.jsx(
                "div",
                {
                  className: $e(
                    "p-4 border-t border-gray-200",
                    d
                  ),
                  children: y.content
                }
              ) })
            }
          )
        ]
      },
      y.id
    );
  }) });
}, am = ({
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
}, sm = ({
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
}, Gd = Fe(
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
        className: M(
          Gd({
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
const Vd = Fe(
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
      className: M(Vd({ variant: t, padding: r, shadow: n, rounded: o, className: e })),
      ref: i,
      ...s
    }
  )
);
Ms.displayName = "Card";
const Nn = ({
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
  ), h = yt(
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
      e && /* @__PURE__ */ l.jsx("label", { className: h, children: e })
    ] }),
    t && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-sm text-danger-600", children: t })
  ] });
}, Pn = Fe(
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
), Bd = Ie(
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
    disabled: h = !1,
    variant: w = "square",
    color: k = "primary",
    checkboxSize: P = "sm",
    showSelectAll: y = !1,
    selectAllText: j = "Select All",
    indeterminateSelectAll: S = !0,
    gap: O,
    selectAllGap: D,
    id: U,
    ...A
  }, _) => {
    const z = U || ie.useId(), g = `${z}-helper`, T = `${z}-error`, $ = `${z}-group`, [N, I] = ie.useState(n), m = r !== void 0 ? r : N, v = (R, W) => {
      const fe = W ? [...m, R] : m.filter((he) => he !== R);
      r === void 0 && I(fe), o == null || o(fe);
    }, E = (R) => {
      const W = R ? t.map((fe) => fe.value) : [];
      r === void 0 && I(W), o == null || o(W);
    }, C = t.length > 0 && m.length === t.length, Y = m.length > 0 && m.length < t.length, F = S && Y, V = (R) => R === "none" ? "gap-0" : R === "xs" ? "gap-1" : R === "sm" ? "gap-2" : R === "md" ? "gap-3" : R === "lg" ? "gap-4" : R === "xl" ? "gap-6" : null, K = V(O), L = V(D), G = /* @__PURE__ */ l.jsx("div", { className: M("relative", !p && "inline-block"), children: /* @__PURE__ */ l.jsxs(
      "fieldset",
      {
        ref: _,
        id: $,
        className: M(
          Pn({ layout: a, size: s }),
          K,
          e
        ),
        "aria-describedby": i ? T : u ? g : void 0,
        "aria-invalid": i,
        "aria-required": f,
        ...A,
        children: [
          y && t.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: M(
            "flex flex-col",
            L || K || Pn({ layout: "vertical", size: s })
          ), children: [
            /* @__PURE__ */ l.jsx(
              Nn,
              {
                label: j,
                checked: C,
                indeterminate: F,
                onChange: (R) => E(R.target.checked),
                disabled: h,
                variant: w,
                color: i ? "error" : k,
                variantSize: P,
                error: i ? " " : void 0
              }
            ),
            /* @__PURE__ */ l.jsx("div", { className: M(
              "flex",
              a === "vertical" && "flex-col",
              a === "horizontal" && "flex-row flex-wrap",
              a === "grid" && "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
              K || Pn({ layout: a, size: s })
            ), children: t.map((R) => /* @__PURE__ */ l.jsx(
              Nn,
              {
                label: R.label,
                checked: m.includes(R.value),
                onChange: (W) => v(R.value, W.target.checked),
                disabled: h || R.disabled,
                indeterminate: R.indeterminate,
                variant: w,
                color: i ? "error" : k,
                variantSize: P,
                error: i ? " " : void 0
              },
              R.value
            )) })
          ] }),
          !y && /* @__PURE__ */ l.jsx(l.Fragment, { children: t.map((R) => /* @__PURE__ */ l.jsx(
            Nn,
            {
              label: R.label,
              checked: m.includes(R.value),
              onChange: (W) => v(R.value, W.target.checked),
              disabled: h || R.disabled,
              indeterminate: R.indeterminate,
              variant: w,
              color: i ? "error" : k,
              variantSize: P,
              error: i ? " " : void 0
            },
            R.value
          )) })
        ]
      }
    ) }), X = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      i && d && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger", id: T, children: d }),
      !i && u && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral", id: g, children: u })
    ] });
    return b === "left" ? /* @__PURE__ */ l.jsx("div", { className: M(p ? "w-full" : "inline-block", e), children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-4", children: [
      c && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: $,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            c,
            f && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: M("flex-1", !p && "inline-block"), children: [
        G,
        X
      ] })
    ] }) }) : /* @__PURE__ */ l.jsxs("div", { className: M(p ? "w-full" : "inline-block", e), children: [
      c && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: $,
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
Bd.displayName = "CheckBoxGroup";
const Hd = {
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
}, Ud = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5"
}, Wd = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full"
}, im = ({
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
    className: M(
      "inline-flex items-center gap-1.5 font-medium",
      Hd[t][r],
      Ud[n],
      Wd[o],
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
var Kd = Fs.exports;
const Yd = /* @__PURE__ */ Ss(Kd);
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
var Xd = Ds.exports;
const Zd = /* @__PURE__ */ Ss(Xd);
Pe.extend(Yd);
Pe.extend(Zd);
const qd = Fe(
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
    fullWidth: h = !1,
    className: w,
    placeholder: k = "Select date",
    leftIcon: P,
    rightIcon: y,
    monthsToShow: j = 1,
    valueFormatter: S,
    rangeStart: O,
    rangeEnd: D,
    closeOnSelect: U = !0,
    calendarFooter: A,
    format: _ = "DD-MM-YYYY",
    allowInput: z = !1,
    ...g
  }, T) => {
    const [$, N] = oe(!1), [I, m] = oe(e), [v, E] = oe(e || /* @__PURE__ */ new Date()), [C, Y] = oe(!1), [F, V] = oe(""), K = ae(null), L = ae(null), G = ae(null), X = ae(null), R = ae(null);
    ho(T, () => R.current, []), de(() => {
      m(e || void 0), V(e ? W(e, _) : "");
    }, [e, _]), de(() => {
      V(I ? W(I, _) : "");
    }, [I, _]);
    const W = (ee, we) => {
      const te = ee.getDate().toString().padStart(2, "0"), Z = (ee.getMonth() + 1).toString().padStart(2, "0"), B = ee.getFullYear().toString();
      switch (we) {
        case "DD-MM-YYYY":
          return `${te}-${Z}-${B}`;
        case "YYYY-MM-DD":
          return `${B}-${Z}-${te}`;
        case "MM-DD-YYYY":
          return `${Z}-${te}-${B}`;
        default:
          return `${te}-${Z}-${B}`;
      }
    }, fe = (ee, we) => {
      const Z = ee.replace(/[^\d-]/g, "").split("-");
      if (Z.length !== 3) return null;
      let B, re, ne;
      switch (we) {
        case "DD-MM-YYYY":
          [B, re, ne] = Z.map(Number);
          break;
        case "YYYY-MM-DD":
          [ne, re, B] = Z.map(Number);
          break;
        case "MM-DD-YYYY":
          [re, B, ne] = Z.map(Number);
          break;
        default:
          [B, re, ne] = Z.map(Number);
      }
      if (isNaN(B) || isNaN(re) || isNaN(ne) || re < 1 || re > 12 || B < 1 || B > 31 || ne < 1900 || ne > 2099) return null;
      const pe = new Date(ne, re - 1, B);
      return pe.getDate() !== B || pe.getMonth() !== re - 1 || pe.getFullYear() !== ne ? null : pe;
    };
    de(() => {
      if (C && X.current) {
        const ee = Pe(v).year(), we = X.current.querySelectorAll("[data-year]"), te = Array.from(we).find(
          (Z) => parseInt(Z.getAttribute("data-year") || "0") === ee
        );
        te && te.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center"
        });
      }
    }, [C, v]);
    const he = () => {
      if (!$ || !L.current || !G.current) return;
      const { bottom: ee, left: we, width: te, top: Z } = L.current.getBoundingClientRect(), B = G.current, re = pt(), ne = re.innerHeight - ee, pe = Z, ot = ne < (j === 2 ? 400 : 350), it = pe > ne, Et = ot && it;
      j === 2 ? (Object.assign(B.style, {
        position: "fixed",
        left: `${we}px`,
        minWidth: "500px",
        width: "auto",
        transform: ""
      }), Et ? Object.assign(B.style, {
        bottom: `${re.innerHeight - Z + 4}px`,
        top: "auto",
        maxHeight: `${pe - 8}px`
      }) : Object.assign(B.style, {
        top: `${ee + 4}px`,
        bottom: "auto",
        maxHeight: `${ne - 8}px`
      })) : (Object.assign(B.style, {
        position: "fixed",
        left: `${we + te / 2}px`,
        width: "320px",
        maxWidth: "100vw",
        transform: "translateX(-50%)"
      }), Et ? Object.assign(B.style, {
        bottom: `${re.innerHeight - Z + 4}px`,
        top: "auto",
        maxHeight: `${pe - 8}px`
      }) : Object.assign(B.style, {
        top: `${ee + 4}px`,
        bottom: "auto",
        maxHeight: `${ne - 8}px`
      }));
    };
    de(() => {
      const ee = pt(), we = We(), te = () => {
        $ && he();
      }, Z = () => {
        $ && he();
      }, B = (re) => {
        re.key === "Escape" && $ && (N(!1), Y(!1));
      };
      return $ && (he(), ee.addEventListener("scroll", te, !0), ee.addEventListener("resize", Z), we.addEventListener("keydown", B)), () => {
        ee.removeEventListener("scroll", te, !0), ee.removeEventListener("resize", Z), we.removeEventListener("keydown", B);
      };
    }, [$]);
    const ye = (ee) => {
      if (O !== void 0 && D !== void 0)
        if (O && D)
          m(ee), V(W(ee, _)), t == null || t(ee);
        else if (O) {
          const te = ee;
          Pe(te).isBefore(O), m(te), V(W(te, _)), t == null || t(te), N(!1), Y(!1);
        } else
          m(ee), V(W(ee, _)), t == null || t(ee);
      else
        m(ee), V(W(ee, _)), t == null || t(ee), N(!1), Y(!1);
    }, Ce = () => {
      E(Pe(v).subtract(1, "month").toDate());
    }, Ze = () => {
      E(Pe(v).add(1, "month").toDate());
    }, Oe = (ee) => {
      const we = Pe(ee).startOf("month"), te = Pe(ee).endOf("month"), Z = [];
      let B = we;
      for (; B.isBefore(te) || B.isSame(te, "day"); )
        Z.push(B.toDate()), B = B.add(1, "day");
      return Z;
    }, Ke = (ee) => !!(r && Pe(ee).isBefore(r, "day") || n && Pe(ee).isAfter(n, "day")), Ve = (ee) => {
      if (!z) return;
      const te = ee.target.value.replace(/[^\d-]/g, "");
      if (te.length < F.length) {
        V(te);
        return;
      }
      if (te.replace(/-/g, "").length > 8)
        return;
      let B = te;
      _ === "DD-MM-YYYY" ? (te.length === 2 && !te.includes("-") || te.length === 5 && te.split("-").length === 2) && (B = te + "-") : _ === "YYYY-MM-DD" ? (te.length === 4 && !te.includes("-") || te.length === 7 && te.split("-").length === 2) && (B = te + "-") : _ === "MM-DD-YYYY" && (te.length === 2 && !te.includes("-") || te.length === 5 && te.split("-").length === 2) && (B = te + "-"), V(B);
    }, at = () => {
      if (!z) return;
      const ee = fe(F, _);
      if (ee) {
        if (r && ee < r) {
          V(W(r, _)), m(r), t == null || t(r);
          return;
        }
        if (n && ee > n) {
          V(W(n, _)), m(n), t == null || t(n);
          return;
        }
        m(ee), t == null || t(ee), V(W(ee, _));
      } else
        V(I ? W(I, _) : "");
    }, Be = () => {
      z && N(!1);
    }, st = (ee) => {
      z && ee.key === "Enter" && (ee.preventDefault(), at());
    }, Qe = (ee) => {
      const we = Pe(v).year(ee).toDate();
      E(we), Y(!1);
    }, qe = () => {
      if (!C) return null;
      const ee = Pe(v).year(), we = 1900, Z = Array.from(
        { length: 2099 - we + 1 },
        (B, re) => we + re
      );
      return /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: X,
          className: "grid grid-cols-5 gap-2 p-2 overflow-y-auto max-h-[300px]",
          children: Z.map((B) => /* @__PURE__ */ l.jsx(
            "div",
            {
              "data-year": B,
              onClick: () => Qe(B),
              className: M(
                B === ee && "bg-primary-50 text-primary",
                "text-sm cursor-pointer p-2"
              ),
              children: B
            },
            B
          ))
        }
      );
    }, De = () => {
      if (!$) return null;
      const ee = We();
      if (!("body" in ee)) return null;
      const we = Array.from({ length: j }).map(
        (te, Z) => Pe(v).add(Z, "month").toDate()
      );
      return Gt(
        /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "fixed inset-0 z-[9998]",
              onClick: () => {
                C || N(!1);
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
                    /* @__PURE__ */ l.jsx("span", { children: Pe(v).format("MMMM") }),
                    /* @__PURE__ */ l.jsxs(
                      "div",
                      {
                        className: "cursor-pointer flex items-center gap-1",
                        onClick: () => Y(!C),
                        children: [
                          /* @__PURE__ */ l.jsx("span", { children: Pe(v).format("YYYY") }),
                          /* @__PURE__ */ l.jsx(Ye, { variant: "ghost", size: "sm", leftIcon: C ? "mdi:chevron-up" : "mdi:chevron-down" })
                        ]
                      }
                    )
                  ] }) : `${Pe(v).format("MMMM YYYY")} - ${Pe(
                    v
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
                    className: M(
                      j === 2 ? "flex gap-5 p-2 mx-auto w-fit" : "justify-between p-2 mx-auto w-fit"
                    ),
                    children: we.map((te, Z) => {
                      const B = Oe(te), re = Pe(te).startOf("month").day();
                      return /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ l.jsxs("div", { className: "grid grid-cols-7 gap-y-1 my-1", children: [
                          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                            (ne, pe) => {
                              const He = pe === 0 || pe === 6;
                              return /* @__PURE__ */ l.jsx(
                                "div",
                                {
                                  className: M(
                                    "text-center text-xs font-medium text-neutral",
                                    He && "text-danger"
                                  ),
                                  children: ne
                                },
                                ne
                              );
                            }
                          ),
                          Array.from({ length: re }).map(
                            (ne, pe) => /* @__PURE__ */ l.jsx("div", {}, `empty-${pe}`)
                          ),
                          B.map((ne) => {
                            const pe = I && Pe(ne).isSame(I, "day"), He = Ke(ne), ot = Pe(ne).isSame(
                              te,
                              "month"
                            ), it = O && D && Pe(ne).isSameOrAfter(O, "day") && Pe(ne).isSameOrBefore(D, "day"), Et = O && Pe(ne).isSame(O, "day"), Zt = D && Pe(ne).isSame(D, "day"), Vt = Pe(ne).day() === 0 || Pe(ne).day() === 6, bt = O && D;
                            return /* @__PURE__ */ l.jsx("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ l.jsx(
                              "div",
                              {
                                className: M(
                                  it && "rounded-none bg-primary-50",
                                  bt && Et && "rounded-l-full",
                                  bt && Zt && "rounded-r-full"
                                ),
                                children: /* @__PURE__ */ l.jsx(
                                  "button",
                                  {
                                    onClick: () => !He && ye(ne),
                                    disabled: He,
                                    className: M(
                                      "p-2 text-sm transition-colors duration-200 w-10 h-10 rounded-full",
                                      Vt && "!text-danger",
                                      pe && "bg-primary !text-white hover:bg-primary-600 active:bg-primary-700",
                                      pe && !bt && "rounded-full",
                                      !pe && !He && "hover:bg-primary-50 active:bg-primary-100",
                                      !ot && "text-neutral-400",
                                      He && "opacity-50 cursor-not-allowed",
                                      // inRange && "bg-primary-50 text-primary-900 rounded-none",
                                      bt && Et && "!bg-primary !text-white !rounded-full",
                                      bt && Zt && "!bg-primary !text-white !rounded-full"
                                    ),
                                    children: Pe(ne).format("D")
                                  },
                                  ne.toString()
                                )
                              }
                            ) });
                          })
                        ] }),
                        A
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
        className: M("relative", !h && "inline-block"),
        ref: L,
        onClick: () => !i && !z && N(!$),
        children: [
          P && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (ee) => {
                ee.stopPropagation(), i || N(!$);
              },
              children: /* @__PURE__ */ l.jsx(ue, { icon: P, className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "input",
            {
              ref: R,
              type: "text",
              value: z ? F : S ? S() : I ? W(I, _) : "",
              placeholder: z ? _ : k,
              readOnly: !z,
              maxLength: z ? 10 : void 0,
              onChange: Ve,
              onBlur: at,
              onFocus: Be,
              onKeyDown: st,
              className: M(
                qd({ variant: d ? "error" : o, size: a, rounded: s, fullWidth: h }),
                P && "pl-10",
                y && "pr-10",
                w
              ),
              disabled: i,
              ...g
            }
          ),
          y && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (ee) => {
                ee.stopPropagation(), i || N(!$);
              },
              children: /* @__PURE__ */ l.jsx(ue, { icon: y, className: "w-4 h-4" })
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
        className: M(h ? "w-full" : "inline-block", w),
        ref: K,
        children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-4", children: [
            f && /* @__PURE__ */ l.jsxs("label", { className: "block text-sm text-neutral-900 pt-2", children: [
              f,
              b && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: M("flex-1", !h && "inline-block"), children: [
              wt,
              kt
            ] })
          ] }),
          De()
        ]
      }
    ) : /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: M(h ? "w-full" : "inline-block", w),
        ref: K,
        children: [
          f && /* @__PURE__ */ l.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
            f,
            b && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          wt,
          kt,
          De()
        ]
      }
    );
  }
);
Hn.displayName = "PrimitiveDatePicker";
const Jd = Ie(
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
    const [f, b] = oe([
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
      const w = (P) => {
        !p || p && h ? (b([P, void 0]), r == null || r([P, void 0])) : p && !h && (P < p ? (b([P, p]), r == null || r([P, p])) : (b([p, P]), r == null || r([p, P])));
      }, k = () => {
        if (!p) return "";
        const P = (y) => y ? y.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric"
        }) : "";
        return p && h ? `${P(p)} - ${P(h)}` : P(p);
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
Jd.displayName = "DatePicker";
const zs = Ie(
  ({ children: e, onClose: t, className: r, ...n }, o) => /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: o,
      className: M("mb-4 flex items-center justify-between", r),
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
}, Qd = {
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
}, ec = Ie(
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
    ...h
  }, w) => {
    const [k, P] = oe(e), [y, j] = oe(!1), S = ae(!1);
    if (Es(() => {
      if (e) {
        P(!0), j(!1);
        const T = We();
        "body" in T && (f !== "outside" ? (T.body.style.overflow = "hidden", S.current = !0) : S.current = !1);
        const $ = requestAnimationFrame(() => j(!0));
        return () => cancelAnimationFrame($);
      }
      j(!1);
      const g = setTimeout(() => {
        P(!1);
        const T = We();
        "body" in T && S.current && (T.body.style.overflow = "", S.current = !1);
      }, b + p);
      return () => clearTimeout(g);
    }, [e, f, b, p]), de(() => {
      const g = (T) => {
        T instanceof KeyboardEvent && T.key === "Escape" && t();
      };
      return e && We().addEventListener("keydown", g), () => {
        We().removeEventListener("keydown", g);
      };
    }, [e, t]), !k) return null;
    const O = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, D = () => {
      s && t();
    }, U = We();
    if (!("body" in U)) return null;
    const A = (g) => {
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
    }, _ = (() => {
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
          className: M(
            "fixed inset-0 z-50 flex transition-opacity",
            O[o],
            y ? "opacity-100" : "opacity-0",
            c === "center" && "items-center justify-center",
            c === "top" && "items-start justify-center",
            c === "bottom" && "items-end justify-center",
            c === "left" && "items-stretch justify-start",
            c === "right" && "items-stretch justify-end"
          ),
          style: z,
          onClick: D,
          children: /* @__PURE__ */ l.jsxs(
            "div",
            {
              ref: w,
              className: M(
                "relative transform bg-white p-6 shadow-xl transition-all",
                // Width/Max-width behavior depends on position.
                // If `sizeClassName` is provided, it takes precedence except in fullscreen mode.
                i === "fullscreen" ? na.fullscreen : d ?? (c === "left" || c === "right" ? Qd[i] : na[i]),
                // Position-based animations
                c === "center" && (y ? "scale-100 opacity-100" : "scale-95 opacity-0"),
                c === "left" && (y ? "translate-x-0 h-full" : "-translate-x-full h-full"),
                c === "right" && (y ? "translate-x-0 h-full" : "translate-x-full h-full"),
                c === "top" && (y ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"),
                c === "bottom" && (y ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"),
                n,
                i === "fullscreen" ? "rounded-none" : A(u),
                // Corner overrides so the edge touching the viewport is not rounded
                c === "left" && "rounded-l-none",
                c === "right" && "rounded-r-none",
                c === "top" && "rounded-t-none",
                c === "bottom" && "rounded-b-none",
                _
              ),
              style: z,
              onClick: (g) => g.stopPropagation(),
              ...h,
              children: [
                a && /* @__PURE__ */ l.jsx(zs, { onClose: t, children: a }),
                r
              ]
            }
          )
        }
      ),
      U.body
    );
  }
), tc = Ie(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ l.jsx(
    "h2",
    {
      ref: n,
      className: M("text-xl font-semibold text-gray-900", t),
      ...r,
      children: e
    }
  )
), rc = Ie(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ l.jsx("div", { ref: n, className: M("text-gray-600", t), ...r, children: e })
), nc = Ie(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: n,
      className: M("mt-6 flex justify-end gap-3", t),
      ...r,
      children: e
    }
  )
);
ec.displayName = "Dialog";
tc.displayName = "DialogTitle";
rc.displayName = "DialogBody";
nc.displayName = "DialogActions";
zs.displayName = "DialogHeader";
const oc = ({
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
}, ac = {
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
}, sc = {
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
}, lm = ({
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
  showMaxSize: h = !0,
  icon: w = "mdi:upload"
}) => {
  const [k, P] = oe(!1), [y, j] = oe(null), S = ae(null), O = me(($) => {
    $.preventDefault(), s || P(!0);
  }, [s]), D = me(($) => {
    $.preventDefault(), P(!1);
  }, []), U = me(($) => $.size > t ? `File size exceeds ${t / (1024 * 1024)}MB limit` : e[0] !== "*" && !e.some((N) => N.startsWith(".") ? $.name.toLowerCase().endsWith(N.toLowerCase()) : $.type.startsWith(N)) ? `File type not allowed. Allowed types: ${e.join(", ")}` : null, [e, t]), A = me(($) => {
    if ($.preventDefault(), P(!1), j(null), s) return;
    const N = Array.from($.dataTransfer.files), I = [], m = [];
    if (N.forEach((v) => {
      const E = U(v);
      E ? m.push(`${v.name}: ${E}`) : I.push(v);
    }), m.length > 0 && j(m.join(`
`)), I.length > 0) {
      const v = r ? [...n, ...I] : I;
      o == null || o(v);
    }
  }, [s, r, o, U, n]), _ = me(($) => {
    if (j(null), s || !$.target.files) return;
    const N = Array.from($.target.files), I = [], m = [];
    if (N.forEach((v) => {
      const E = U(v);
      E ? m.push(`${v.name}: ${E}`) : I.push(v);
    }), m.length > 0 && j(m.join(`
`)), I.length > 0) {
      const v = r ? [...n, ...I] : I;
      o == null || o(v);
    }
    S.current && (S.current.value = "");
  }, [s, r, o, U, n]), z = me(($) => {
    const N = [...n];
    N.splice($, 1), o == null || o(N);
  }, [o, n]), g = ($) => $.type.startsWith("image/") ? /* @__PURE__ */ l.jsx(ue, { icon: "mdi:image", className: "w-5 h-5" }) : $.type.startsWith("text/") ? /* @__PURE__ */ l.jsx(ue, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ l.jsx(ue, { icon: "mdi:file", className: "w-5 h-5" }), T = ac[d];
  return /* @__PURE__ */ l.jsxs("div", { className: $e("w-full", a), children: [
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: $e(
          "p-6 text-center transition-colors",
          !f && [
            "border-2 border-dashed",
            T.border,
            T.bg,
            k && T.active,
            !s && T.hover
          ],
          s && "opacity-50 cursor-not-allowed",
          sc[u],
          oa[c],
          !f && "cursor-pointer"
        ),
        onDragOver: O,
        onDragLeave: D,
        onDrop: A,
        onClick: () => {
          var $;
          return !s && !f && (($ = S.current) == null ? void 0 : $.click());
        },
        children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              ref: S,
              type: "file",
              accept: e.join(","),
              multiple: r,
              onChange: _,
              className: "hidden",
              disabled: s
            }
          ),
          f ? /* @__PURE__ */ l.jsx("div", { onClick: () => {
            var $;
            return !s && (($ = S.current) == null ? void 0 : $.click());
          }, children: f }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsx(ue, { icon: w, className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
            p && /* @__PURE__ */ l.jsx("p", { className: $e("text-neutral-600", T.text), children: i }),
            h && /* @__PURE__ */ l.jsxs("p", { className: "text-sm text-neutral mt-2", children: [
              "Max file size: ",
              t / (1024 * 1024),
              "MB"
            ] })
          ] })
        ]
      }
    ),
    y && /* @__PURE__ */ l.jsx("p", { className: "mt-2 text-sm text-danger", children: y }),
    b && n.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "mt-4 space-y-2", children: n.map(($, N) => /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: $e(
          "flex items-center justify-between p-2",
          oa[c],
          T.bg
        ),
        children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex items-center space-x-2", children: [
            g($),
            /* @__PURE__ */ l.jsx("span", { className: $e("text-sm", T.text), children: $.name }),
            /* @__PURE__ */ l.jsxs("span", { className: "text-xs text-neutral", children: [
              "(",
              ($.size / 1024).toFixed(1),
              " KB)"
            ] })
          ] }),
          !s && /* @__PURE__ */ l.jsx(
            "button",
            {
              onClick: () => z(N),
              className: "p-1 text-neutral hover:text-danger",
              children: /* @__PURE__ */ l.jsx(ue, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${$.name}-${N}`
    )) })
  ] });
}, ic = Fe(
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
), dm = ({
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
  return /* @__PURE__ */ l.jsxs("div", { className: M(ic({ variant: n, rounded: o }), i), children: [
    r && /* @__PURE__ */ l.jsx(ue, { icon: u(), className: M("h-5 w-5 flex-shrink-0", d()) }),
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
}, Tn = "select-dropdown-opened", lc = Fe(
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
    position: h = "bottom",
    fullWidth: w = !1,
    children: k,
    leftIcon: P,
    rightIcon: y,
    ...j
  }, S) => {
    const [O, D] = oe(!1), U = ae(null), A = ae(null), z = `select-${ie.useId().replace(/:/g, "")}`, g = () => {
      if (O && U.current && A.current) {
        const v = U.current.getBoundingClientRect(), E = A.current, C = pt(), Y = C.innerHeight - v.bottom, F = v.top, K = v.bottom + E.offsetHeight + 4 >= C.innerHeight, L = F > Y, G = K && L;
        h === "bottom" || h === "top" ? (E.style.position = "fixed", E.style.left = `${v.left}px`, E.style.width = `${v.width}px`, h === "bottom" && G ? (E.style.bottom = `${C.innerHeight - v.top + 4}px`, E.style.top = "auto", E.style.maxHeight = `${F - 8}px`) : h === "bottom" ? (E.style.top = `${v.bottom + 4}px`, E.style.bottom = "auto", E.style.maxHeight = `${Y - 8}px`) : h === "top" && !G ? (E.style.top = `${v.bottom + 4}px`, E.style.bottom = "auto", E.style.maxHeight = `${Y - 8}px`) : (E.style.bottom = `${C.innerHeight - v.top + 4}px`, E.style.top = "auto", E.style.maxHeight = `${F - 8}px`)) : h === "left" ? (E.style.position = "fixed", E.style.right = `${C.innerWidth - v.left + 4}px`, E.style.top = `${v.top}px`, E.style.maxHeight = `${C.innerHeight - v.top - 8}px`) : h === "right" && (E.style.position = "fixed", E.style.left = `${v.right + 4}px`, E.style.top = `${v.top}px`, E.style.maxHeight = `${C.innerHeight - v.top - 8}px`);
      }
    };
    de(() => {
      const v = pt(), E = () => {
        O && g();
      }, C = () => {
        O && g();
      };
      return O && (g(), v.addEventListener("scroll", E, !0), v.addEventListener("resize", C)), () => {
        v.removeEventListener("scroll", E, !0), v.removeEventListener("resize", C);
      };
    }, [O, h]), de(() => {
      const v = We(), E = (Y) => {
        Y.detail.id !== z && D(!1);
      }, C = (Y) => {
        const F = Y.target, V = U.current, K = A.current;
        V && K && !V.contains(F) && !K.contains(F) && D(!1);
      };
      return v.addEventListener(Tn, E), v.addEventListener("click", C), () => {
        v.removeEventListener(Tn, E), v.removeEventListener("click", C);
      };
    }, [z]);
    const T = () => {
      if (p) return;
      if (O) {
        D(!1);
        return;
      }
      We().dispatchEvent(
        new CustomEvent(Tn, {
          detail: { id: z }
        })
      ), D(!0);
    }, $ = () => {
      if (o) {
        const v = o.find((E) => E.value === f);
        return v == null ? void 0 : v.label;
      }
      if (k) {
        const E = Cr.toArray(k).find(
          (C) => Tr(C) && "value" in C.props && C.props.value === f
        );
        return Tr(E) ? E.props.children : null;
      }
      return null;
    }, N = (v) => {
      p || (b == null || b(v), D(!1));
    }, I = () => o ? o.map((v) => /* @__PURE__ */ l.jsx(
      fn,
      {
        value: v.value,
        disabled: v.disabled,
        selected: v.value === f,
        onClick: () => {
          v.onClick && v.onClick(v.value), N(v.value);
        },
        children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
          v.icon,
          v.label
        ] })
      },
      v.value
    )) : k ? Cr.map(k, (v) => Tr(v) && "value" in v.props ? vo(v, {
      selected: v.props.value === f,
      onClick: () => N(v.props.value)
    }) : null) : null, m = () => {
      if (!O || p) return null;
      const v = /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: A,
          className: M(
            "fixed z-[9999] min-w-[8rem] border border-neutral-200 bg-white py-1 shadow-lg rounded-lg",
            h === "left" || h === "right" ? "w-max" : "w-full"
          ),
          onClick: (C) => C.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: I()
        }
      ), E = We();
      return "body" in E ? Gt(v, E.body) : null;
    };
    return /* @__PURE__ */ l.jsxs("div", { className: M(w ? "w-full" : "inline-block"), ref: S, ...j, children: [
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
          className: M("relative", !w && "inline-block"),
          onClick: T,
          children: [
            /* @__PURE__ */ l.jsxs(
              "button",
              {
                id: z,
                ref: U,
                type: "button",
                className: M(
                  lc({ variant: s ? "error" : t, size: r, rounded: n, fullWidth: w }),
                  "flex items-center justify-between",
                  p && "cursor-not-allowed opacity-50",
                  P && "pl-10",
                  y && "pr-10",
                  e
                ),
                "aria-haspopup": "listbox",
                "aria-expanded": O,
                "aria-describedby": s ? `${z}-error` : d ? `${z}-helper` : void 0,
                disabled: p,
                children: [
                  P && /* @__PURE__ */ l.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ l.jsx(ue, { icon: P, className: "w-4 h-4" }) }),
                  /* @__PURE__ */ l.jsx("span", { className: "flex items-center gap-2 min-w-0 flex-1", children: /* @__PURE__ */ l.jsx("span", { className: M(
                    "truncate text-left",
                    $() ? "text-neutral-900" : "text-neutral"
                  ), children: $() || c }) }),
                  y ? /* @__PURE__ */ l.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ l.jsx(ue, { icon: y, className: "w-4 h-4" }) }) : /* @__PURE__ */ l.jsx(
                    ue,
                    {
                      icon: "mdi:chevron-down",
                      className: M("transition-transform flex-shrink-0 ml-2 w-4 h-4", O && "rotate-180")
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
const dc = ({
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
    return Array.from({ length: w }, (k, P) => P + p);
  }, b = (() => {
    const p = o * 2 + 3, h = p + 2;
    if (t > h) {
      const w = Math.max(2, e - o), k = Math.min(t - 1, e + o);
      let P = c(w, k);
      const y = w > 2, j = t - k > 1, S = p - (P.length + 1);
      if (y && !j)
        P = [...c(w - S, w - 1), ...P];
      else if (!y && j) {
        const O = c(k + 1, k + S);
        P = [...P, ...O];
      } else y && j && (P = [...P]);
      return [1, ...P, t];
    }
    return c(1, t);
  })();
  return /* @__PURE__ */ l.jsxs(
    "nav",
    {
      className: $e("flex items-center justify-between space-x-1", a),
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
              className: $e(
                "px-3 py-1 rounded-md text-sm",
                e === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              ),
              children: /* @__PURE__ */ l.jsx(ue, { size: "18", icon: "mdi:chevron-left" })
            }
          ),
          b.map((p, h) => {
            const w = p === e, k = typeof p == "string" && p === "...";
            return /* @__PURE__ */ l.jsx(
              Ye,
              {
                variant: "ghost",
                onClick: () => !k && n(p),
                className: $e(
                  "px-3 py-1 rounded-md text-sm",
                  w ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  k && "cursor-default"
                ),
                children: p
              },
              h
            );
          }),
          /* @__PURE__ */ l.jsx(
            Ye,
            {
              variant: "ghost",
              onClick: () => n(e + 1),
              disabled: e === t,
              className: $e(
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
}, cc = ({
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
}, uc = Fe(
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
), fc = Ie(
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
    disabled: h = !1,
    name: w,
    gap: k,
    color: P = "primary",
    radioSize: y = "sm",
    id: j,
    ...S
  }, O) => {
    const D = j || ie.useId(), U = `${D}-helper`, A = `${D}-error`, _ = `${D}-group`, z = w || `radio-group-${D}`, [g, T] = ie.useState(n), $ = r !== void 0 ? r : g, N = (C) => {
      r === void 0 && T(C), o == null || o(C);
    }, m = ((C) => C === "none" ? "gap-0" : C === "xs" ? "gap-1" : C === "sm" ? "gap-2" : C === "md" ? "gap-3" : C === "lg" ? "gap-4" : C === "xl" ? "gap-6" : null)(k), v = /* @__PURE__ */ l.jsx("div", { className: M("relative", !p && "inline-block"), children: /* @__PURE__ */ l.jsx(
      "fieldset",
      {
        ref: O,
        id: _,
        className: M(
          uc({ layout: a, size: s }),
          m,
          e
        ),
        "aria-describedby": i ? A : u ? U : void 0,
        "aria-invalid": i,
        "aria-required": f,
        ...S,
        children: t.map((C) => /* @__PURE__ */ l.jsx(
          cc,
          {
            label: C.label,
            checked: $ === C.value,
            onChange: () => N(C.value),
            disabled: h || C.disabled,
            name: z,
            value: C.value,
            color: i ? "error" : P,
            error: i ? " " : void 0,
            variantSize: y
          },
          C.value
        ))
      }
    ) }), E = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      i && d && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger", id: A, children: d }),
      !i && u && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral", id: U, children: u })
    ] });
    return b === "left" ? /* @__PURE__ */ l.jsx("div", { className: M(p ? "w-full" : "inline-block", e), children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-4", children: [
      c && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: _,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            c,
            f && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: M("flex-1", !p && "inline-block"), children: [
        v,
        E
      ] })
    ] }) }) : /* @__PURE__ */ l.jsxs("div", { className: M(p ? "w-full" : "inline-block", e), children: [
      c && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: _,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            c,
            f && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      v,
      E
    ] });
  }
);
fc.displayName = "RadioGroup";
const aa = Fe("animate-pulse bg-neutral-200", {
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
}), pc = ({
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
      className: M(
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
    className: M(
      aa({ variant: r, rounded: n, fullWidth: o, pulseVariant: a }),
      s
    ),
    style: {
      width: !o && typeof e == "number" ? `${e}px` : e,
      height: typeof t == "number" ? `${t}px` : t
    }
  }
), cm = ({
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
  const f = c, [b, p] = oe(
    n !== void 0 ? n : o !== void 0 ? o : f ? [e, t] : e
  ), [h, w] = oe(null), k = ae(null), P = n !== void 0 ? n : b, [y, j] = f ? Array.isArray(P) ? P : [e, t] : [typeof P == "number" ? P : e, t], S = (m) => Math.min(Math.max(m, e), t), O = (m) => {
    if (i) return;
    let v;
    f && Array.isArray(m) ? v = [S(m[0]), S(m[1])] : !f && typeof m == "number" ? v = S(m) : v = f ? [e, t] : e, n === void 0 && p(v), a == null || a(v);
  }, D = (m) => {
    if (!k.current) return e;
    const v = k.current.getBoundingClientRect(), C = (m - v.left) / v.width, Y = e + (t - e) * C, F = Math.round(Y / r) * r;
    return S(F);
  }, U = (m) => (v) => {
    i || (w(m), v.stopPropagation());
  }, A = (m) => {
    if (!i)
      if (!f)
        w(0), _(m, 0);
      else {
        const v = D(m.clientX), E = Math.abs(v - y), C = Math.abs(v - j), Y = E < C ? 0 : 1;
        w(Y), _(m, Y);
      }
  }, _ = ie.useCallback((m, v) => {
    const E = D(m.clientX);
    if (!f)
      O(E);
    else {
      let C = [y, j];
      v === 0 ? C = [Math.min(E, j - r), j] : C = [y, Math.max(E, y + r)], C[0] > C[1] && (C = [C[1], C[0]]), O(C);
    }
  }, [f, y, j, r, O, D]), z = ie.useRef(h);
  z.current = h;
  const g = ie.useCallback(function(m) {
    z.current === null || i || _(m, z.current);
  }, [i, _]), T = ie.useCallback(function() {
    w(null);
  }, []);
  de(() => {
    if (h !== null) {
      const m = pt();
      return m.addEventListener("mousemove", g), m.addEventListener("mouseup", T), () => {
        m.removeEventListener("mousemove", g), m.removeEventListener("mouseup", T);
      };
    }
  }, [h, g, T]);
  const $ = (m) => (m - e) / (t - e) * 100, N = $(y), I = $(j);
  return /* @__PURE__ */ l.jsxs("div", { className: $e("relative w-full", s), children: [
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: k,
        className: $e(
          "relative h-2 bg-gray-200 rounded-full cursor-pointer",
          i && "opacity-50 cursor-not-allowed"
        ),
        onMouseDown: A,
        children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "absolute h-full bg-primary rounded-full",
              style: { left: `${f ? N : 0}%`, width: `${f ? I - N : N}%` }
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: $e(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                i && "cursor-not-allowed"
              ),
              style: { left: `${N}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: U(0)
            }
          ),
          f && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: $e(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                i && "cursor-not-allowed"
              ),
              style: { left: `${I}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: U(1)
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
    d && /* @__PURE__ */ l.jsx("div", { className: "mt-2 text-sm text-gray-600", children: f ? `${y} - ${j}` : y })
  ] });
}, gc = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}, mc = {
  primary: "text-primary",
  warning: "text-warning",
  default: "text-default-400"
}, um = ({
  rating: e,
  maxRating: t = 5,
  size: r = "md",
  color: n = "primary",
  readOnly: o = !1,
  onRatingChange: a,
  className: s
}) => {
  const [i, d] = oe(null), u = (p) => {
    o || d(p);
  }, c = () => {
    o || d(null);
  }, f = (p) => {
    !o && a && a(p);
  }, b = i !== null ? i : e;
  return /* @__PURE__ */ l.jsx("div", { className: M("flex items-center gap-1", s), children: [...Array(t)].map((p, h) => {
    const w = h + 1, k = w <= b, P = i !== null && w <= i;
    return /* @__PURE__ */ l.jsx(
      "button",
      {
        className: M(
          "transition-colors duration-200",
          gc[r],
          k || P ? mc[n] : "text-default-200",
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
      h
    );
  }) });
}, bc = {
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
}, $c = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4"
}, fm = ({
  status: e,
  size: t = "md",
  withLabel: r = !1,
  className: n
}) => {
  const { bgColor: o, label: a } = bc[e], s = $c[t];
  return /* @__PURE__ */ l.jsxs("div", { className: M("flex items-center gap-2", n), children: [
    /* @__PURE__ */ l.jsx("div", { className: M("rounded-full animate-pulse", o, s) }),
    r && /* @__PURE__ */ l.jsx("span", { className: "text-sm", children: a })
  ] });
}, Vs = (e, t) => {
  if (t) return t;
  switch (e) {
    case "completed":
      return "mdi:check";
    case "active":
      return "mdi:circle-medium";
    default:
      return "mdi:circle-outline";
  }
}, Bs = (e) => {
  switch (e) {
    case "completed":
      return "text-white bg-primary ring-4 ring-primary-50";
    case "active":
      return "text-primary bg-primary-50 ring-4 ring-primary-50";
    default:
      return "text-neutral bg-neutral-50 ring-4 ring-neutral-50";
  }
}, hc = ({
  steps: e,
  activeStep: t,
  className: r,
  variant: n = "default"
}) => /* @__PURE__ */ l.jsx("div", { className: M("flex flex-row items-center w-full justify-between", r), children: e.map((o, a) => {
  const s = a < t ? "completed" : a === t ? "active" : "pending";
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "flex items-center flex-1",
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: M(
          "flex flex-col items-center z-10",
          n === "default" ? "gap-4" : "gap-2",
          n === "default" ? "px-5" : "px-3"
        ), children: [
          n === "default" && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: M(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                Bs(s)
              ),
              children: /* @__PURE__ */ l.jsx(
                ue,
                {
                  icon: Vs(s, o.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ l.jsx(
              "span",
              {
                className: M(
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
          oc,
          {
            className: M(
              "transition-all duration-200",
              a < t ? "bg-primary" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    a
  );
}) }), vc = ({
  steps: e,
  activeStep: t,
  className: r,
  variant: n = "default"
}) => /* @__PURE__ */ l.jsx("div", { className: M("flex flex-col items-start gap-8", r), children: e.map((o, a) => {
  const s = a < t ? "completed" : a === t ? "active" : "pending";
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "flex flex-row w-full items-center relative",
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: M(
          "flex flex-row items-center z-10",
          n === "default" ? "gap-4" : "gap-2"
        ), children: [
          n === "default" && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: M(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                Bs(s)
              ),
              children: /* @__PURE__ */ l.jsx(
                ue,
                {
                  icon: Vs(s, o.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-start", children: [
            /* @__PURE__ */ l.jsx(
              "span",
              {
                className: M(
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
            className: M(
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
}) }), pm = ({
  orientation: e = "horizontal",
  variant: t = "default",
  ...r
}) => e === "vertical" ? /* @__PURE__ */ l.jsx(vc, { variant: t, ...r }) : /* @__PURE__ */ l.jsx(hc, { variant: t, ...r }), gm = ({
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
      className: $e(
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
              className: $e(
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
              className: $e(
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
}, mm = ({
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
  var P, y;
  const [u, c] = oe(t || ((P = e[0]) == null ? void 0 : P.id) || ""), f = ie.useRef(null), [b, p] = oe({ left: 0, width: 0 });
  ie.useEffect(() => {
    var j;
    if (r === "active-underline" && f.current) {
      const S = f.current.getBoundingClientRect(), O = (j = f.current.parentElement) == null ? void 0 : j.getBoundingClientRect();
      O && p({
        left: S.left - O.left,
        width: S.width
      });
    }
  }, [r, e, u]), ie.useEffect(() => {
    if (r === "active-underline") {
      const j = () => {
        var S;
        if (f.current) {
          const O = f.current.getBoundingClientRect(), D = (S = f.current.parentElement) == null ? void 0 : S.getBoundingClientRect();
          D && p({
            left: O.left - D.left,
            width: O.width
          });
        }
      };
      return window.addEventListener("resize", j), () => window.removeEventListener("resize", j);
    }
  }, [r, e, u]);
  const h = me((j) => {
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
    const O = $e(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      w(),
      S && "opacity-50 cursor-not-allowed",
      !S && "cursor-pointer"
    );
    switch (r) {
      case "pills":
        return $e(
          O,
          "rounded-full",
          j ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return $e(
          O,
          "border-b-2",
          j ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      case "active-underline":
        return $e(
          O,
          "border-b-0",
          j ? "text-primary" : "text-gray-600 dark:text-gray-300 hover:text-primary"
        );
      default:
        return $e(
          O,
          "border-b-2",
          j ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: $e("w-full", o), children: [
    /* @__PURE__ */ l.jsxs("div", { className: $e(
      r === "active-underline" ? "relative" : "",
      "flex space-x-1",
      r === "pills" && "space-x-2 border-b-0",
      r !== "active-underline" && "border-b border-gray-200 dark:border-gray-700",
      a
    ), children: [
      e.map((j) => {
        const S = j.id === u, O = !!j.disabled;
        return /* @__PURE__ */ l.jsxs(
          "button",
          {
            ref: r === "active-underline" && S ? f : void 0,
            onClick: () => !O && h(j.id),
            disabled: O,
            className: $e(
              k(S, O),
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
    /* @__PURE__ */ l.jsx("div", { className: $e("mt-4", i), children: (y = e.find((j) => j.id === u)) == null ? void 0 : y.content })
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
  return /* @__PURE__ */ l.jsx(s, { className: M("text-gray-900", o[e], r), children: t });
}, yc = Fe(
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
), xc = Ie(
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
    minRows: h = 3,
    maxRows: w = 10,
    id: k,
    value: P,
    ...y
  }, j) => {
    const S = k || ie.useId(), O = `${S}-helper`, D = `${S}-error`, U = `${S}-char-count`, A = typeof P == "string" ? P.length : 0, _ = p && A > p, z = /* @__PURE__ */ l.jsxs("div", { className: M("relative", !c && "inline-block"), children: [
      /* @__PURE__ */ l.jsx(
        "textarea",
        {
          id: S,
          ref: j,
          rows: h,
          maxLength: p,
          className: M(
            yc({
              variant: o ? "error" : t,
              size: r,
              rounded: n,
              fullWidth: c,
              resize: f === "none" ? "none" : f
            }),
            e
          ),
          "aria-describedby": M(
            o ? D : s ? O : void 0,
            b ? U : void 0
          ),
          "aria-invalid": o,
          "aria-required": d,
          style: {
            minHeight: `${h * 1.5}em`,
            maxHeight: `${w * 1.5}em`
          },
          value: P,
          ...y
        }
      ),
      b && p && /* @__PURE__ */ l.jsx("div", { className: "absolute bottom-2 right-2 text-xs text-neutral-500 bg-white px-1 rounded", children: /* @__PURE__ */ l.jsxs("span", { id: U, className: _ ? "text-danger" : "", children: [
        A,
        "/",
        p
      ] }) })
    ] }), g = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      o && a && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger", id: D, children: a }),
      !o && s && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral", id: O, children: s }),
      b && p && !o && !s && /* @__PURE__ */ l.jsxs("p", { className: "mt-1 text-xs text-neutral", id: U, children: [
        A,
        " of ",
        p,
        " characters"
      ] })
    ] });
    return u === "left" ? /* @__PURE__ */ l.jsx("div", { className: M(c ? "w-full" : "inline-block", e), children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-4", children: [
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
      /* @__PURE__ */ l.jsxs("div", { className: M("flex-1", !c && "inline-block"), children: [
        z,
        g
      ] })
    ] }) }) : /* @__PURE__ */ l.jsxs("div", { className: M(c ? "w-full" : "inline-block", e), children: [
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
xc.displayName = "Textarea";
const Sn = "timepicker-dropdown-opened", wc = Fe(
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
    placeholder: h = "Select time",
    leftIcon: w,
    rightIcon: k,
    valueFormatter: P,
    closeOnSelect: y = !0,
    ...j
  }, S) => {
    const [O, D] = oe(!1), [U, A] = oe(e || ""), [_, z] = oe(0), [g, T] = oe(0), [$, N] = oe(!0), I = ae(null), m = ae(null), v = ae(null), C = `timepicker-${ie.useId().replace(/:/g, "")}`, Y = () => {
      if (!O || !m.current || !v.current) return;
      const R = m.current.getBoundingClientRect(), W = v.current, he = pt().innerHeight - R.bottom;
      W.style.top = `${R.bottom + 4}px`, W.style.bottom = "auto", W.style.left = `${R.left}px`, W.style.maxHeight = `${he - 8}px`, W.style.width = `${R.width}px`;
    };
    de(() => {
      const R = pt(), W = We(), fe = () => {
        O && Y();
      }, he = () => {
        O && Y();
      }, ye = (Ze) => {
        Ze.detail.id !== C && D(!1);
      }, Ce = (Ze) => {
        const Oe = Ze.target;
        I.current && v.current && !I.current.contains(Oe) && !v.current.contains(Oe) && D(!1);
      };
      return O && (Y(), R.addEventListener("scroll", fe, !0), R.addEventListener("resize", he)), W.addEventListener(Sn, ye), W.addEventListener("mousedown", Ce), () => {
        R.removeEventListener("scroll", fe, !0), R.removeEventListener("resize", he), W.removeEventListener(Sn, ye), W.removeEventListener("mousedown", Ce);
      };
    }, [O, C]);
    const F = () => {
      s || (O || We().dispatchEvent(
        new CustomEvent(Sn, {
          detail: { id: C }
        })
      ), D(!O));
    };
    de(() => {
      if (e) {
        A(e);
        const [R, W] = e.split(":").map(Number);
        r ? z(R) : (z(R % 12 || 12), N(R < 12)), T(W);
      }
    }, [e, r]);
    const V = () => {
      const W = `${(r || $ ? _ : _ + 12).toString().padStart(2, "0")}:${g.toString().padStart(2, "0")}`;
      A(W), t == null || t(W), y && D(!1);
    }, K = () => r ? Array.from({ length: 24 }, (R, W) => W) : Array.from({ length: 12 }, (R, W) => W + 1), L = () => Array.from({ length: 60 }, (R, W) => W), G = P ? P(U) : U, X = We();
    return "body" in X ? /* @__PURE__ */ l.jsxs("div", { ref: I, className: M("relative", b && "w-full", p), children: [
      u && /* @__PURE__ */ l.jsxs(
        "label",
        {
          className: M(
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
          onClick: F,
          children: [
            w && /* @__PURE__ */ l.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ l.jsx(ue, { icon: w, size: 20 }) }),
            /* @__PURE__ */ l.jsx(
              "input",
              {
                ref: S,
                type: "text",
                value: G,
                placeholder: h,
                readOnly: !0,
                className: M(
                  wc({ variant: n, size: o, rounded: a, fullWidth: b }),
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
      O && Gt(
        /* @__PURE__ */ l.jsx(
          "div",
          {
            ref: v,
            className: "fixed z-[9999] w-fit rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (R) => R.stopPropagation(),
            children: /* @__PURE__ */ l.jsxs("div", { className: "p-0", children: [
              /* @__PURE__ */ l.jsxs(Ms, { variant: "ghost", className: M(
                "flex mx-2 my-1 p-0",
                r ? "justify-start gap-8" : "justify-start gap-4"
              ), children: [
                /* @__PURE__ */ l.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ l.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ l.jsx("div", { className: "flex flex-col gap-2", children: K().map((R) => /* @__PURE__ */ l.jsx(
                  Ye,
                  {
                    variant: "ghost",
                    onClick: () => z(R),
                    className: M(_ === R && "bg-primary text-white"),
                    children: R.toString().padStart(2, "0")
                  },
                  R
                )) }) }) }),
                /* @__PURE__ */ l.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ l.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ l.jsx("div", { className: "flex flex-col gap-2", children: L().map((R) => /* @__PURE__ */ l.jsx(
                  Ye,
                  {
                    variant: "ghost",
                    onClick: () => T(R),
                    className: M(g === R && "bg-primary text-white"),
                    children: R.toString().padStart(2, "0")
                  },
                  R
                )) }) }) }),
                !r && /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ l.jsx(
                    Ye,
                    {
                      variant: "ghost",
                      onClick: () => N(!0),
                      className: M($ && "bg-primary text-white"),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    Ye,
                    {
                      variant: "ghost",
                      onClick: () => N(!1),
                      className: M(!$ && "bg-primary text-white"),
                      children: "PM"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "mb-2 mx-2", children: /* @__PURE__ */ l.jsx(
                Ye,
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
        X.body
      ),
      i && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-sm text-danger-600", children: i }),
      d && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-sm text-gray", children: d })
    ] }) : null;
  }
);
Hs.displayName = "PrimitiveTimePicker";
const kc = ({
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
kc.displayName = "TimePicker";
const Ec = Fe(
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
), Nc = Fe(
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
), Pc = Ie(
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
    const b = ie.useId(), p = `${b}-helper`, h = `${b}-error`;
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
            className: M(Ec({ variant: d ? "danger" : r, size: n }), u),
            "aria-describedby": d ? h : s ? p : void 0,
            "aria-invalid": d,
            "aria-required": a,
            ...c,
            children: /* @__PURE__ */ l.jsx(
              "span",
              {
                "data-state": e ? "checked" : "unchecked",
                className: M(
                  Nc({ size: n }),
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
      d && i && /* @__PURE__ */ l.jsx("p", { className: "text-xs text-danger", id: h, children: i }),
      !d && s && /* @__PURE__ */ l.jsx("p", { className: "text-xs text-neutral", id: p, children: s })
    ] });
  }
);
Pc.displayName = "Toggle";
const Tc = Fe(
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
), Sc = Fe("absolute w-2 h-2 transform rotate-45", {
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
}), bm = ({
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
  const [c, f] = oe(!1), [b, p] = oe({ top: 0, left: 0 }), h = ae(null), w = ae(null), k = ae(), P = i !== void 0, y = P ? i : c, j = () => {
    if (!h.current || !w.current) return;
    const A = w.current.getBoundingClientRect(), _ = h.current.getBoundingClientRect(), z = pt(), g = z.scrollX || z.pageXOffset, T = z.scrollY || z.pageYOffset;
    let $ = 0, N = 0;
    const I = 8;
    switch (r) {
      case "top":
        $ = A.top + T - _.height - I, N = A.left + g + (A.width - _.width) / 2;
        break;
      case "bottom":
        $ = A.bottom + T + I, N = A.left + g + (A.width - _.width) / 2;
        break;
      case "left":
        $ = A.top + T + (A.height - _.height) / 2, N = A.left + g - _.width - I;
        break;
      case "right":
        $ = A.top + T + (A.height - _.height) / 2, N = A.right + g + I;
        break;
    }
    const m = z.innerWidth, v = z.innerHeight;
    N < 0 && (N = 0), N + _.width > m && (N = m - _.width), $ < 0 && ($ = 0), $ + _.height > v && ($ = v - _.height), p({ top: $, left: N });
  };
  de(() => {
    if (y) {
      j();
      const A = pt();
      A.addEventListener("scroll", j, !0), A.addEventListener("resize", j);
    }
    return () => {
      const A = pt();
      A.removeEventListener("scroll", j, !0), A.removeEventListener("resize", j);
    };
  }, [y, r]);
  const S = () => {
    P ? d == null || d(!0) : k.current = setTimeout(() => {
      f(!0);
    }, n);
  }, O = () => {
    k.current && clearTimeout(k.current), P ? d == null || d(!1) : f(!1);
  }, D = (A) => {
    A.stopPropagation(), u === "click" && (P ? d == null || d(!i) : f(!c));
  };
  de(() => {
    const A = (_) => {
      u === "click" && h.current && !h.current.contains(_.target) && w.current && !w.current.contains(_.target) && O();
    };
    return y && document.addEventListener("click", A), () => {
      document.removeEventListener("click", A);
    };
  }, [y, u]);
  const U = () => {
    if (!y) return null;
    const A = We();
    return "body" in A ? Gt(
      /* @__PURE__ */ l.jsxs(
        "div",
        {
          ref: h,
          className: M(Tc({ color: a, size: s }), o),
          style: {
            top: `${b.top}px`,
            left: `${b.left}px`
          },
          children: [
            e,
            /* @__PURE__ */ l.jsx(
              "div",
              {
                className: M(
                  Sc({ color: a }),
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
      A.body
    ) : null;
  };
  return /* @__PURE__ */ l.jsx("div", { className: "relative", children: /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: w,
      className: "relative inline-block",
      onMouseEnter: u === "hover" ? S : void 0,
      onMouseLeave: u === "hover" ? O : void 0,
      onClick: D,
      children: [
        t,
        U()
      ]
    }
  ) });
}, Cc = Fe(
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
), jc = {
  sm: 24,
  md: 36,
  lg: 48
}, Ic = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  info: "bg-info"
}, Oc = {
  primary: "#007C99",
  // Tailwind primary
  secondary: "#CEEAE7",
  success: "#00B37D",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#0EA5E9"
}, Ac = ie.forwardRef(
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
    const b = Math.min(Math.max(o, 0), 100), p = jc[n], h = n === "sm" ? 2 : n === "md" ? 3 : 4, w = (p - h) / 2, k = 2 * Math.PI * w, P = k - b / 100 * k;
    let y = "";
    return t === "loading" ? y = "rounded-full" : d ? y = d === "none" ? "" : `rounded-${d}` : y = "rounded-md", t === "circular" ? /* @__PURE__ */ l.jsxs("div", { className: "inline-flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "relative", style: { width: p, height: p }, children: [
        /* @__PURE__ */ l.jsxs(
          "svg",
          {
            className: M(
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
                  className: M(
                    "transition-all duration-300 ease-in-out",
                    a ? "animate-dash" : ""
                  ),
                  strokeWidth: h,
                  strokeDasharray: k,
                  strokeDashoffset: a ? 0 : P,
                  strokeLinecap: "round",
                  stroke: Oc[r],
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
          className: M(Cc({ variant: t === "loading" ? "bar" : t, size: n }), y, e),
          role: "progressbar",
          "aria-valuenow": a ? void 0 : b,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...c,
          children: /* @__PURE__ */ l.jsx(
            "div",
            {
              className: M(
                "h-full transition-all duration-300 ease-in-out",
                a ? "animate-progress-indeterminate" : "",
                Ic[r],
                y
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
Ac.displayName = "Progress";
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
], _c = { version: 4, country_calling_codes: { 1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], 7: ["RU", "KZ"], 20: ["EG"], 27: ["ZA"], 30: ["GR"], 31: ["NL"], 32: ["BE"], 33: ["FR"], 34: ["ES"], 36: ["HU"], 39: ["IT", "VA"], 40: ["RO"], 41: ["CH"], 43: ["AT"], 44: ["GB", "GG", "IM", "JE"], 45: ["DK"], 46: ["SE"], 47: ["NO", "SJ"], 48: ["PL"], 49: ["DE"], 51: ["PE"], 52: ["MX"], 53: ["CU"], 54: ["AR"], 55: ["BR"], 56: ["CL"], 57: ["CO"], 58: ["VE"], 60: ["MY"], 61: ["AU", "CC", "CX"], 62: ["ID"], 63: ["PH"], 64: ["NZ"], 65: ["SG"], 66: ["TH"], 81: ["JP"], 82: ["KR"], 84: ["VN"], 86: ["CN"], 90: ["TR"], 91: ["IN"], 92: ["PK"], 93: ["AF"], 94: ["LK"], 95: ["MM"], 98: ["IR"], 211: ["SS"], 212: ["MA", "EH"], 213: ["DZ"], 216: ["TN"], 218: ["LY"], 220: ["GM"], 221: ["SN"], 222: ["MR"], 223: ["ML"], 224: ["GN"], 225: ["CI"], 226: ["BF"], 227: ["NE"], 228: ["TG"], 229: ["BJ"], 230: ["MU"], 231: ["LR"], 232: ["SL"], 233: ["GH"], 234: ["NG"], 235: ["TD"], 236: ["CF"], 237: ["CM"], 238: ["CV"], 239: ["ST"], 240: ["GQ"], 241: ["GA"], 242: ["CG"], 243: ["CD"], 244: ["AO"], 245: ["GW"], 246: ["IO"], 247: ["AC"], 248: ["SC"], 249: ["SD"], 250: ["RW"], 251: ["ET"], 252: ["SO"], 253: ["DJ"], 254: ["KE"], 255: ["TZ"], 256: ["UG"], 257: ["BI"], 258: ["MZ"], 260: ["ZM"], 261: ["MG"], 262: ["RE", "YT"], 263: ["ZW"], 264: ["NA"], 265: ["MW"], 266: ["LS"], 267: ["BW"], 268: ["SZ"], 269: ["KM"], 290: ["SH", "TA"], 291: ["ER"], 297: ["AW"], 298: ["FO"], 299: ["GL"], 350: ["GI"], 351: ["PT"], 352: ["LU"], 353: ["IE"], 354: ["IS"], 355: ["AL"], 356: ["MT"], 357: ["CY"], 358: ["FI", "AX"], 359: ["BG"], 370: ["LT"], 371: ["LV"], 372: ["EE"], 373: ["MD"], 374: ["AM"], 375: ["BY"], 376: ["AD"], 377: ["MC"], 378: ["SM"], 380: ["UA"], 381: ["RS"], 382: ["ME"], 383: ["XK"], 385: ["HR"], 386: ["SI"], 387: ["BA"], 389: ["MK"], 420: ["CZ"], 421: ["SK"], 423: ["LI"], 500: ["FK"], 501: ["BZ"], 502: ["GT"], 503: ["SV"], 504: ["HN"], 505: ["NI"], 506: ["CR"], 507: ["PA"], 508: ["PM"], 509: ["HT"], 590: ["GP", "BL", "MF"], 591: ["BO"], 592: ["GY"], 593: ["EC"], 594: ["GF"], 595: ["PY"], 596: ["MQ"], 597: ["SR"], 598: ["UY"], 599: ["CW", "BQ"], 670: ["TL"], 672: ["NF"], 673: ["BN"], 674: ["NR"], 675: ["PG"], 676: ["TO"], 677: ["SB"], 678: ["VU"], 679: ["FJ"], 680: ["PW"], 681: ["WF"], 682: ["CK"], 683: ["NU"], 685: ["WS"], 686: ["KI"], 687: ["NC"], 688: ["TV"], 689: ["PF"], 690: ["TK"], 691: ["FM"], 692: ["MH"], 850: ["KP"], 852: ["HK"], 853: ["MO"], 855: ["KH"], 856: ["LA"], 880: ["BD"], 886: ["TW"], 960: ["MV"], 961: ["LB"], 962: ["JO"], 963: ["SY"], 964: ["IQ"], 965: ["KW"], 966: ["SA"], 967: ["YE"], 968: ["OM"], 970: ["PS"], 971: ["AE"], 972: ["IL"], 973: ["BH"], 974: ["QA"], 975: ["BT"], 976: ["MN"], 977: ["NP"], 992: ["TJ"], 993: ["TM"], 994: ["AZ"], 995: ["GE"], 996: ["KG"], 998: ["UZ"] }, countries: { AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]], AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"], AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"], AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"], AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]", "(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:2(?:(?:[0-26-9]\\d|3[0-8]|5[0135-9])\\d|4(?:[02-9]\\d|10))|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90))|7(?:[013-57-9]\\d|2[0-8])\\d)\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"], BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|2[23]"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], BF: ["226", "00", "(?:[025-7]\\d|44)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[024-7]"]]]], BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]], BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], BJ: ["229", "00", "(?:01\\d|[24-689])\\d{7}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["0"]]]], BL: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"], BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], BO: ["591", "00(?:1\\d)?", "8001\\d{5}|(?:[2-467]\\d|50)\\d{6}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[235]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37|86)", "300|4(?:0(?:0|20)|370|864)"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"], BT: ["975", "00", "[178]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-6]|7[246]|8[2-4]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|[78]"]]]], BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], CA: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|33|44|66|77|88)|6(?:22|33))[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CD: ["243", "00", "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["5"], "0$1"]], "0"], CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]], CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], CI: ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], CK: ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["60|809"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:10|[2-9])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-8]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]", "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"], CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["46"]], ["(\\d{3})(\\d{7})", "$1 $2", ["6|90"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|9[14]"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"], CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], CU: ["53", "119", "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|3[13])"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"], DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"], EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"], ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], ES: ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]], ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"], FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{5})", "$1", ["20[2-59]"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], ["(\\d)(\\d{4,9})", "$1 $2", ["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], FK: ["500", "00", "[2-7]\\d{4}", [5]], FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], FO: ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, "0|180020", 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-35])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"], GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], GF: ["594", "00", "(?:[56]94\\d|7093)\\d{5}|(?:80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"], GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0|180020", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"], GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], GM: ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], GP: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], GT: ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"], GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], GY: ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], HR: ["385", "00", "[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}", [7, 8, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], HT: ["509", "00", "[2-589]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], ID: ["62", "00[89]", "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0|180020", "1624$1", 0, "74576|(?:16|7[56])24"], IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], IT: ["39", "00", "0\\d{5,11}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[03]"]]], 0, 0, 0, 0, 0, 0, [["0(?:669[0-79]\\d{1,6}|831\\d{2,8})|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[2356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], ["3[2-8]\\d{9,10}", [11, 12]], 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0|180020", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], JP: ["81", "010", "00[1-9]\\d{6,14}|[25-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]", "3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[25-9]"], "0$1"]], "0", 0, "(000[2569]\\d{4,6})$|(?:(?:003768)0?)|0", "$1"], KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"], KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"], KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33622|7", 0, "8~10"], LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"], LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"], LK: ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], LR: ["231", "00", "(?:[2457]\\d|33|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]], "0"], LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1]], "0", 0, "[08]"], LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], LV: ["371", "00", "(?:[268]\\d|78|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2679]|8[01]"]]]], LY: ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-8]|5[0-5]|8[0-7]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]], MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"], MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], MF: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"], MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], ML: ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|452|678|86", "[12]|452|6788|86"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"], MQ: ["596", "00", "(?:596\\d|7091)\\d{5}|(?:69|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|8(?:0[6-9]|[36])"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"], MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"], MX: ["52", "0[09]", "[2-9]\\d{9}", [10], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], NE: ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[0467]"]]]], NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], NG: ["234", "009", "(?:20|9\\d)\\d{8}|[78]\\d{9,13}", [10, 11, 12, 13, 14], [["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], NR: ["674", "00", "(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[24-9]"]]]], NU: ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], PM: ["508", "00", "[45]\\d{5}|(?:708|8\\d\\d)\\d{6}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[136]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], RE: ["262", "00", "709\\d{6}|(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"], ["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], RO: ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, 0, [["336(?:[013-9]\\d|2[013-9])\\d{5}|(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15-7]|6[0-35-79]|7[1-37-9]))\\d{7}", [10]], ["9\\d{9}", [10]], ["8(?:0[04]|108\\d{3})\\d{7}"], ["80[39]\\d{7}", [10]], ["808\\d{7}", [10]]], "8~10"], RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], SA: ["966", "00", "(?:[15]\\d|800|92)\\d{7}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], SB: ["677", "0[01]", "[6-9]\\d{6}|[1-6]\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]]], SC: ["248", "010|0[0-2]", "(?:[2489]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"], SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|7[67]|9[2-9]"]]], "0"], SR: ["597", "00", "(?:[2-5]|[6-8]\\d|90)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-9]"]]]], SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], SV: ["503", "00", "[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"], SY: ["963", "00", "[1-359]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-4]|5[1-3]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[59]"], "0$1", 1]], "0"], SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"], TD: ["235", "00|16", "(?:22|30|[689]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[236-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], TJ: ["992", "810", "[0-57-9]\\d{8}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], TM: ["993", "810", "(?:[1-6]\\d|71)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"], TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"], US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["3052(?:0[0-8]|[1-9]\\d)\\d{4}|(?:2742|305[3-9])\\d{6}|(?:472|983)[2-47-9]\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[0135-79]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-269])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-247]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, 0, ["305209\\d{4}"]]], UY: ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|2\\d{3,4}|(?:[49]\\d|80)\\d{5}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{4,5})", "$1", ["21"]], ["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], UZ: ["998", "00", "(?:20|33|[5-9]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]]], VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11, 12], 0, 0, 0, 0, 0, 0, "06698"], VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"], VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"], VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"], VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], WF: ["681", "00", "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[47-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], XK: ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"], ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]], "0"], YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], YT: ["262", "00", "7093\\d{5}|(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"], ["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]], ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], ZM: ["260", "00", "800\\d{6}|(?:21|[579]\\d|63)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[579]"], "0$1"]], "0"], ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"] }, nonGeographic: { 800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], 808: ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], 870: ["870", 0, "7\\d{11}|[235-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"], 0, 0, 0, 0, 0, 0, ["2\\d{8}", [9]]]], 878: ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], 881: ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]], 882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, ["348[57]\\d{7}", [11]], 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], 883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], 888: ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], 979: ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };
function Rc(e, t) {
  var r = Array.prototype.slice.call(t);
  return r.push(_c), e.apply(this, r);
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
var Lc = {}.constructor;
function sr(e) {
  return e != null && e.constructor === Lc;
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
function Mc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Fc(n.key), n);
  }
}
function gn(e, t, r) {
  return t && Mc(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Fc(e) {
  var t = Dc(e, "string");
  return dr(t) == "symbol" ? t : t + "";
}
function Dc(e, t) {
  if (dr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (dr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var zc = "1.2.0", Gc = "1.7.35", ia = " ext. ", Vc = /^\d+$/, Xe = /* @__PURE__ */ function() {
  function e(t) {
    pn(this, e), Us(t), this.metadata = t, Ws.call(this, t);
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
      if (r && Vc.test(r) && (n = r, r = null), r && r !== "001") {
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
    pn(this, e), this.globalMetadataObject = r, this.metadata = t, Ws.call(this, r.metadata);
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
        return new Bc(o, r);
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
        return new Uc(da(this.types(), r), this);
    }
  }, {
    key: "ext",
    value: function() {
      return this.v1 || this.v2 ? ia : this.metadata[13] || ia;
    }
  }]);
}(), Bc = /* @__PURE__ */ function() {
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
      !Hc.test(this.nationalPrefixFormattingRule()));
    }
  }, {
    key: "internationalFormat",
    value: function() {
      return this._format[5] || this.format();
    }
  }]);
}(), Hc = /^\(?\$1\)?$/, Uc = /* @__PURE__ */ function() {
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
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(sr(e) ? "an object of shape: { " + Object.keys(e).join(", ") + " }" : "a " + Wc(e) + ": " + e, "."));
}
var Wc = function(t) {
  return dr(t);
};
function xo(e, t) {
  if (t = new Xe(t), t.hasCountry(e))
    return t.selectNumberingPlan(e).countryCallingCode();
  throw new Error("Unknown country: ".concat(e));
}
function Kc(e, t) {
  return t.countries.hasOwnProperty(e);
}
function Ws(e) {
  var t = e.version;
  typeof t == "number" ? (this.v1 = t === 1, this.v2 = t === 2, this.v3 = t === 3, this.v4 = t === 4) : t ? sa(t, zc) === -1 ? this.v2 = !0 : sa(t, Gc) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0;
}
function wo(e, t, r) {
  return Yc(e, t, void 0, r);
}
function Yc(e, t, r, n) {
  t && (n = new Xe(n.metadata), n.selectNumberingPlan(t));
  var o = n.type(r), a = o && o.possibleLengths() || n.possibleLengths();
  if (!a)
    return "IS_POSSIBLE";
  var s = e.length, i = a[0];
  return i === s ? "IS_POSSIBLE" : i > s ? "TOO_SHORT" : a[a.length - 1] < s ? "TOO_LONG" : a.indexOf(s, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
function Xc(e, t, r) {
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
    return Ks(e.phone || e.nationalNumber, e.country, r);
  if (e.countryCallingCode && r.isNonGeographicCallingCode(e.countryCallingCode))
    return !0;
  throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
}
function Ks(e, t, r) {
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
function Zc(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = qc(e)) || t) {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qc(e, t) {
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
var Jc = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function ko(e, t, r) {
  if (t = t || {}, !(!e.country && !e.countryCallingCode)) {
    r = new Xe(r), r.selectNumberingPlan(e.country, e.countryCallingCode);
    var n = t.v2 ? e.nationalNumber : e.phone;
    if (It(n, r.nationalNumberPattern())) {
      if (Cn(n, "FIXED_LINE", r))
        return r.type("MOBILE") && r.type("MOBILE").pattern() === "" || !r.type("MOBILE") || Cn(n, "MOBILE", r) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
      for (var o = Zc(Jc), a; !(a = o()).done; ) {
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
function Qc(e, t, r) {
  if (t = t || {}, r = new Xe(r), r.selectNumberingPlan(e.country, e.countryCallingCode), r.hasTypes())
    return ko(e, t, r.metadata) !== void 0;
  var n = t.v2 ? e.nationalNumber : e.phone;
  return It(n, r.nationalNumberPattern());
}
function eu(e, t, r) {
  var n = new Xe(r), o = n.getCountryCodesForCallingCode(e);
  return o ? o.filter(function(a) {
    return tu(t, a, r);
  }) : [];
}
function tu(e, t, r) {
  var n = new Xe(r);
  return n.selectNumberingPlan(t), n.numberingPlan.possibleLengths().indexOf(e.length) >= 0;
}
var Eo = 2, ru = 17, nu = 3, mt = "0-9０-９٠-٩۰-۹", ou = "-‐-―−ー－", au = "／/", su = "．.", iu = "  ­​⁠　", lu = "()（）［］\\[\\]", du = "~⁓∼～", tn = "".concat(ou).concat(au).concat(su).concat(iu).concat(lu).concat(du), No = "+＋", cu = new RegExp("([" + mt + "])");
function uu(e, t, r, n) {
  if (t) {
    var o = new Xe(n);
    o.selectNumberingPlan(t, r);
    var a = new RegExp(o.IDDPrefix());
    if (e.search(a) === 0) {
      e = e.slice(e.match(a)[0].length);
      var s = e.match(cu);
      if (!(s && s[1] != null && s[1].length > 0 && s[1] === "0"))
        return e;
    }
  }
}
function fu(e, t) {
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
function pu(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = gu(e)) || t) {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gu(e, t) {
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
function mu(e, t) {
  var r = t.countries, n = t.metadata;
  n = new Xe(n);
  for (var o = pu(r), a; !(a = o()).done; ) {
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
    return o.length === 1 ? o[0] : mu(r, {
      countries: o,
      metadata: n.metadata
    });
}
function Un(e, t, r) {
  var n = fu(e, r), o = n.carrierCode, a = n.nationalNumber;
  if (a !== e) {
    if (!bu(e, a, r))
      return {
        nationalNumber: e
      };
    if (r.numberingPlan.possibleLengths() && (t || (t = Ys(r.numberingPlan.callingCode(), {
      nationalNumber: a,
      metadata: r
    })), !$u(a, t, r)))
      return {
        nationalNumber: e
      };
  }
  return {
    nationalNumber: a,
    carrierCode: o
  };
}
function bu(e, t, r) {
  return !(It(e, r.nationalNumberPattern()) && !It(t, r.nationalNumberPattern()));
}
function $u(e, t, r) {
  switch (wo(e, t, r)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return !1;
    default:
      return !0;
  }
}
function hu(e, t, r, n, o) {
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
    var s = uu(e, r, n, o);
    if (s && s !== e)
      a = !0, e = "+" + s;
    else {
      if (r || n) {
        var i = hu(e, t, r, n, o), d = i.countryCallingCode, u = i.number;
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
  for (var c = 2; c - 1 <= nu && c <= e.length; ) {
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
function vu(e) {
  return e.replace(new RegExp("[".concat(tn, "]+"), "g"), " ").trim();
}
var yu = /(\$\d)/;
function xu(e, t, r) {
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
    o && t.nationalPrefixFormattingRule() ? t.format().replace(yu, t.nationalPrefixFormattingRule()) : t.format()
  ));
  return n ? vu(a) : a;
}
var wu = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function ku(e, t, r) {
  var n = new Xe(r);
  if (n.selectNumberingPlan(e, t), n.defaultIDDPrefix())
    return n.defaultIDDPrefix();
  if (wu.test(n.IDDPrefix()))
    return n.IDDPrefix();
}
var Eu = ";ext=", Qt = function(t) {
  return "([".concat(mt, "]{1,").concat(t, "})");
};
function Zs(e) {
  var t = "20", r = "15", n = "9", o = "6", a = "[  \\t,]*", s = "[:\\.．]?[  \\t,-]*", i = "#?", d = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)", u = "(?:[xｘ#＃~～]|int|ｉｎｔ)", c = "[- ]+", f = "[  \\t]*", b = "(?:,{2}|;)", p = Eu + Qt(t), h = a + d + s + Qt(t) + i, w = a + u + s + Qt(n) + i, k = c + Qt(o) + "#", P = f + b + s + Qt(r) + i, y = f + "(?:,)+" + s + Qt(n) + i;
  return p + "|" + h + "|" + w + "|" + k + "|" + P + "|" + y;
}
var Nu = "[" + mt + "]{" + Eo + "}", Pu = "[" + No + "]{0,1}(?:[" + tn + "]*[" + mt + "]){3,}[" + tn + mt + "]*", Tu = new RegExp("^[" + No + "]{0,1}(?:[" + tn + "]*[" + mt + "]){1,2}$", "i"), Su = Pu + // Phone number extensions
"(?:" + Zs() + ")?", Cu = new RegExp(
  // Either a short two-digit-only phone number
  "^" + Nu + "$|^" + Su + "$",
  "i"
);
function ju(e) {
  return e.length >= Eo && Cu.test(e);
}
function Iu(e) {
  return Tu.test(e);
}
function Ou(e) {
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
function Au(e, t, r, n) {
  if (r ? r = Lu({}, fa, r) : r = fa, n = new Xe(n), e.country && e.country !== "001") {
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
      return Ou({
        number: "+".concat(o).concat(a),
        ext: e.ext
      });
    case "IDD":
      if (!r.fromCountry)
        return;
      var i = Ru(a, e.carrierCode, o, r.fromCountry, n);
      return jn(i, e.ext, n, r.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(t, '"'));
  }
}
function rn(e, t, r, n, o) {
  var a = _u(n.formats(), e);
  return a ? xu(e, a, {
    useInternationalFormat: r === "INTERNATIONAL",
    withNationalPrefix: !(a.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && o && o.nationalPrefix === !1)
  }) : e;
}
function _u(e, t) {
  return Mu(e, function(r) {
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
function Ru(e, t, r, n, o) {
  var a = xo(n, o.metadata);
  if (a === r) {
    var s = rn(e, t, "NATIONAL", o);
    return r === "1" ? r + " " + s : s;
  }
  var i = ku(n, void 0, o.metadata);
  if (i)
    return "".concat(i, " ").concat(r, " ").concat(rn(e, null, "INTERNATIONAL", o));
}
function Lu() {
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
function Mu(e, t) {
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
      Fu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pa(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Fu(e, t, r) {
  return (t = qs(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Du(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function zu(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, qs(n.key), n);
  }
}
function Gu(e, t, r) {
  return t && zu(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function qs(e) {
  var t = Vu(e, "string");
  return Ir(t) == "symbol" ? t : t + "";
}
function Vu(e, t) {
  if (Ir(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ir(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Bu = /* @__PURE__ */ function() {
  function e(t, r, n) {
    if (Du(this, e), !t)
      throw new TypeError("First argument is required");
    if (typeof t != "string")
      throw new TypeError("First argument must be a string");
    if (t[0] === "+" && !r)
      throw new TypeError("`metadata` argument not passed");
    if (sr(r) && sr(r.countries)) {
      n = r;
      var o = t;
      if (!Wu.test(o))
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
    var d = Uu(t, n), u = d.country, c = d.countryCallingCode;
    this.country = u, this.countryCallingCode = c, this.nationalNumber = r, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
      return n;
    };
  }
  return Gu(e, [{
    key: "setExt",
    value: function(r) {
      this.ext = r;
    }
  }, {
    key: "getPossibleCountries",
    value: function() {
      return this.country ? [this.country] : eu(this.countryCallingCode, this.nationalNumber, this.getMetadata());
    }
  }, {
    key: "isPossible",
    value: function() {
      return Xc(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isValid",
    value: function() {
      return Qc(this, {
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
      return Au(this, r, n ? ga(ga({}, n), {}, {
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
}(), Hu = function(t) {
  return /^[A-Z]{2}$/.test(t);
};
function Uu(e, t) {
  var r, n, o = new Xe(t);
  return Hu(e) ? (r = e, o.selectNumberingPlan(r), n = o.countryCallingCode()) : n = e, {
    country: r,
    countryCallingCode: n
  };
}
var Wu = /^\+\d+$/;
function Wn(e) {
  "@babel/helpers - typeof";
  return Wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wn(e);
}
function Ku(e, t, r) {
  return Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Yu(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Xu(e, t, r) {
  return t = Ar(t), Zu(e, Po() ? Reflect.construct(t, r || [], Ar(e).constructor) : t.apply(e, r));
}
function Zu(e, t) {
  if (t && (Wn(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return qu(e);
}
function qu(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ju(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Or(e, t);
}
function Kn(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Kn = function(n) {
    if (n === null || !ef(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(n)) return t.get(n);
      t.set(n, o);
    }
    function o() {
      return Qu(n, arguments, Ar(this).constructor);
    }
    return o.prototype = Object.create(n.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), Or(o, n);
  }, Kn(e);
}
function Qu(e, t, r) {
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
function ef(e) {
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
    return Yu(this, t), n = Xu(this, t, [r]), Object.setPrototypeOf(n, t.prototype), n.name = n.constructor.name, n;
  }
  return Ju(t, e), Ku(t);
}(/* @__PURE__ */ Kn(Error)), ma = new RegExp("(?:" + Zs() + ")$", "i");
function tf(e) {
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
var rf = {
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
function nf(e) {
  return rf[e];
}
function of(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = af(e)) || t) {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function af(e, t) {
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
function $a(e) {
  for (var t = "", r = of(e.split("")), n; !(n = r()).done; ) {
    var o = n.value;
    t += sf(o, t) || "";
  }
  return t;
}
function sf(e, t, r) {
  return e === "+" ? t ? void 0 : "+" : nf(e);
}
var Js = "+", lf = "[\\-\\.\\(\\)]?", ha = "([" + mt + "]|" + lf + ")", df = "^\\" + Js + ha + "*[" + mt + "]" + ha + "*$", cf = new RegExp(df, "g"), Yn = mt, uf = "[" + Yn + "]+((\\-)*[" + Yn + "])*", ff = "a-zA-Z", pf = "[" + ff + "]+((\\-)*[" + Yn + "])*", gf = "^(" + uf + "\\.)*" + pf + "\\.?$", mf = new RegExp(gf, "g"), va = "tel:", Xn = ";phone-context=", bf = ";isub=";
function $f(e) {
  var t = e.indexOf(Xn);
  if (t < 0)
    return null;
  var r = t + Xn.length;
  if (r >= e.length)
    return "";
  var n = e.indexOf(";", r);
  return n >= 0 ? e.substring(r, n) : e.substring(r);
}
function hf(e) {
  return e === null ? !0 : e.length === 0 ? !1 : cf.test(e) || mf.test(e);
}
function vf(e, t) {
  var r = t.extractFormattedPhoneNumber, n = $f(e);
  if (!hf(n))
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
  var d = o.indexOf(bf);
  if (d > 0 && (o = o.substring(0, d)), o !== "")
    return o;
}
var yf = 250, xf = new RegExp("[" + No + mt + "]"), wf = new RegExp("[^" + mt + "#]+$");
function kf(e, t, r) {
  if (t = t || {}, r = new Xe(r), t.defaultCountry && !r.hasCountry(t.defaultCountry))
    throw t.v2 ? new St("INVALID_COUNTRY") : new Error("Unknown country: ".concat(t.defaultCountry));
  var n = Nf(e, t.v2, t.extract), o = n.number, a = n.ext, s = n.error;
  if (!o) {
    if (t.v2)
      throw s === "TOO_SHORT" ? new St("TOO_SHORT") : new St("NOT_A_NUMBER");
    return {};
  }
  var i = Tf(o, t.defaultCountry, t.defaultCallingCode, r), d = i.country, u = i.nationalNumber, c = i.countryCallingCode, f = i.countryCallingCodeSource, b = i.carrierCode;
  if (!r.hasSelectedNumberingPlan()) {
    if (t.v2)
      throw new St("INVALID_COUNTRY");
    return {};
  }
  if (!u || u.length < Eo) {
    if (t.v2)
      throw new St("TOO_SHORT");
    return {};
  }
  if (u.length > ru) {
    if (t.v2)
      throw new St("TOO_LONG");
    return {};
  }
  if (t.v2) {
    var p = new Bu(c, u, r.metadata);
    return d && (p.country = d), b && (p.carrierCode = b), a && (p.ext = a), p.__countryCallingCodeSource = f, p;
  }
  var h = (t.extended ? r.hasSelectedNumberingPlan() : d) ? It(u, r.nationalNumberPattern()) : !1;
  return t.extended ? {
    country: d,
    countryCallingCode: c,
    carrierCode: b,
    valid: h,
    possible: h ? !0 : !!(t.extended === !0 && r.possibleLengths() && Ks(u, d, r)),
    phone: u,
    ext: a
  } : h ? Pf(d, u, a) : {};
}
function Ef(e, t, r) {
  if (e) {
    if (e.length > yf) {
      if (r)
        throw new St("TOO_LONG");
      return;
    }
    if (t === !1)
      return e;
    var n = e.search(xf);
    if (!(n < 0))
      return e.slice(n).replace(wf, "");
  }
}
function Nf(e, t, r) {
  var n = vf(e, {
    extractFormattedPhoneNumber: function(s) {
      return Ef(s, r, t);
    }
  });
  if (!n)
    return {};
  if (!ju(n))
    return Iu(n) ? {
      error: "TOO_SHORT"
    } : {};
  var o = tf(n);
  return o.ext ? o : {
    number: n
  };
}
function Pf(e, t, r) {
  var n = {
    country: e,
    phone: t
  };
  return r && (n.ext = r), n;
}
function Tf(e, t, r, n) {
  var o = Xs($a(e), void 0, t, r, n.metadata), a = o.countryCallingCodeSource, s = o.countryCallingCode, i = o.number, d;
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
  var u = Un($a(i), d, n), c = u.nationalNumber, f = u.carrierCode, b = Ys(s, {
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
      Sf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ya(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Sf(e, t, r) {
  return (t = Cf(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Cf(e) {
  var t = jf(e, "string");
  return _r(t) == "symbol" ? t : t + "";
}
function jf(e, t) {
  if (_r(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_r(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function If(e, t, r) {
  return kf(e, xa(xa({}, t), {}, {
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
function Of(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wa(Object(r), !0).forEach(function(n) {
      Af(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wa(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Af(e, t, r) {
  return (t = _f(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _f(e) {
  var t = Rf(e, "string");
  return Rr(t) == "symbol" ? t : t + "";
}
function Rf(e, t) {
  if (Rr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Rr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Lf(e, t) {
  return zf(e) || Df(e, t) || Ff(e, t) || Mf();
}
function Mf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ff(e, t) {
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
function Df(e, t) {
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
function zf(e) {
  if (Array.isArray(e)) return e;
}
function Gf(e) {
  var t = Array.prototype.slice.call(e), r = Lf(t, 4), n = r[0], o = r[1], a = r[2], s = r[3], i, d, u;
  if (typeof n == "string")
    i = n;
  else throw new TypeError("A text for parsing must be a string.");
  if (!o || typeof o == "string")
    s ? (d = a, u = s) : (d = void 0, u = a), o && (d = Of({
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
function Ea(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Na(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ea(Object(r), !0).forEach(function(n) {
      Vf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ea(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Vf(e, t, r) {
  return (t = Bf(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Bf(e) {
  var t = Hf(e, "string");
  return Lr(t) == "symbol" ? t : t + "";
}
function Hf(e, t) {
  if (Lr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Lr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Uf(e, t, r) {
  t && t.defaultCountry && !Kc(t.defaultCountry, r) && (t = Na(Na({}, t), {}, {
    defaultCountry: void 0
  }));
  try {
    return If(e, t, r);
  } catch (n) {
    if (!(n instanceof St)) throw n;
  }
}
function Wf() {
  var e = Gf(arguments), t = e.text, r = e.options, n = e.metadata;
  return Uf(t, r, n);
}
function Qs() {
  return Rc(Wf, arguments);
}
function Kf(e) {
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
function Yf(e) {
  var n;
  const t = Qs(e);
  if (!t) return null;
  const r = (n = t.country) == null ? void 0 : n.toLowerCase();
  return Tt.find((o) => o.iso === r) || null;
}
const Xf = Fe(
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
  return Yf(t);
}, Zf = (e) => e.startsWith("0") && e.length >= 9 && e.length <= 12 ? "+62" + e.slice(1) : e, qf = (e) => e.startsWith("0") && e.length >= 3, ei = Ie(
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
    placeholder: h = "Enter phone number",
    autoDetect: w = !0,
    ...k
  }, P) => {
    const [y, j] = oe(!1), [S, O] = oe(
      () => Tt.find((L) => L.iso === p) || Tt[0]
    ), [D, U] = oe(""), [A, _] = oe(() => {
      if (w && c) {
        const G = Dr(c);
        return G && O(G), c;
      }
      const L = S.code;
      return c.startsWith(L) ? c.slice(L.length) : c;
    });
    de(() => {
      if (c && f)
        if (w) {
          const L = Dr(c);
          if (L) {
            const G = {
              iso: L.iso,
              code: L.code.replace("+", "")
            };
            f(c, G);
          } else
            f(c);
        } else {
          const L = {
            iso: S.iso,
            code: S.code.replace("+", "")
          };
          f(c, L);
        }
    }, []);
    const [z, g] = oe(() => w && c ? !!Dr(c) : !1), T = ae(null), $ = ae(null), N = ie.useId(), I = `${N}-helper`, m = `${N}-error`, v = Tt.filter(
      (L) => L.name.toLowerCase().includes(D.toLowerCase()) || L.code.includes(D)
    ), E = ae(null), C = () => {
      if (y && T.current && $.current) {
        const L = T.current.getBoundingClientRect(), G = $.current, X = typeof window < "u" ? window : { innerHeight: 0 }, R = X.innerHeight - L.bottom, W = L.top, he = L.bottom + (G.offsetHeight || 0) + 4 >= X.innerHeight, ye = W > R, Ce = he && ye;
        G.style.position = "fixed", G.style.left = `${L.left}px`, G.style.minWidth = `${L.width}px`, G.style.maxWidth = "340px", G.style.width = "auto", Ce ? (G.style.bottom = `${X.innerHeight - L.top + 4}px`, G.style.top = "auto", G.style.maxHeight = `${W - 8}px`) : (G.style.top = `${L.bottom + 4}px`, G.style.bottom = "auto", G.style.maxHeight = `${R - 8}px`);
      }
    };
    de(() => {
      const L = typeof window < "u" ? window : void 0, G = () => {
        y && C();
      }, X = () => {
        y && C();
      };
      return y && (C(), L == null || L.addEventListener("scroll", G, !0), L == null || L.addEventListener("resize", X)), () => {
        L == null || L.removeEventListener("scroll", G, !0), L == null || L.removeEventListener("resize", X);
      };
    }, [y]), de(() => {
      if (!y) return;
      const L = (G) => {
        const X = G.target;
        T.current && $.current && !T.current.contains(X) && !$.current.contains(X) && j(!1);
      };
      return document.addEventListener("click", L), () => document.removeEventListener("click", L);
    }, [y]);
    const Y = (L) => {
      if (O(L), j(!1), U(""), w) {
        const G = L.code + A.replace(/^\+?\d*/, "");
        _(G);
        const X = G.replace(/[^\d]/g, ""), R = {
          iso: L.iso,
          code: L.code.replace("+", "")
        };
        f == null || f(X, R);
      } else {
        const X = (L.code + A).replace(/[^\d]/g, ""), R = {
          iso: L.iso,
          code: L.code.replace("+", "")
        };
        f == null || f(X, R);
      }
    }, F = (L) => {
      const G = L.target.value;
      if (/^[+\d]*$/.test(G))
        if (w && G.startsWith("+")) {
          const R = Dr(G);
          if (R) {
            O(R), g(!0), _(G);
            const W = G.replace(/[^\d]/g, ""), fe = {
              iso: R.iso,
              code: R.code.replace("+", "")
            };
            f == null || f(W, fe);
          } else {
            _(G), g(!1);
            const W = G.replace(/[^\d]/g, "");
            f == null || f(W);
          }
        } else if (w && !G.startsWith("+") && G.length > 0) {
          const R = Zf(G);
          if (R !== G) {
            _(R), O(
              Tt.find((he) => he.iso === "id") || Tt[0]
            ), g(!0);
            const W = R.replace(/[^\d]/g, ""), fe = {
              iso: "id",
              code: "62"
            };
            f == null || f(W, fe);
          } else if (qf(G)) {
            const W = "+62" + G.slice(1);
            _(W), O(
              Tt.find((ye) => ye.iso === "id") || Tt[0]
            ), g(!0);
            const fe = W.replace(/[^\d]/g, ""), he = {
              iso: "id",
              code: "62"
            };
            f == null || f(fe, he);
          } else if (G.startsWith("0"))
            _(G), g(!1);
          else {
            const W = "+" + G;
            _(W);
            const fe = W.replace(/[^\d]/g, "");
            f == null || f(fe);
          }
        } else {
          const R = G.replace(/[^\d]/g, "");
          _(R);
          const fe = (S.code + R).replace(/[^\d]/g, ""), he = {
            iso: S.iso,
            code: S.code.replace("+", "")
          };
          f == null || f(fe, he);
        }
    }, V = M(
      Xf({
        variant: o ? "error" : t,
        size: r,
        rounded: n,
        fullWidth: u
      }),
      "!w-full"
    ), K = !w || w && z;
    return ho(P, () => E.current, []), /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: E,
        className: M(u ? "w-full" : "inline-block", e),
        ...k,
        children: [
          i && /* @__PURE__ */ l.jsxs("label", { htmlFor: N, className: "mb-1.5 block text-sm text-neutral-900", children: [
            i,
            d && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: M("relative", !u && "inline-block"), children: [
            /* @__PURE__ */ l.jsxs("div", { className: "flex", children: [
              K && /* @__PURE__ */ l.jsxs(
                "button",
                {
                  type: "button",
                  ref: T,
                  onClick: () => !b && j(!y),
                  className: M(
                    V,
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
                        className: M("transition-transform", y && "rotate-180")
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ l.jsx(
                "input",
                {
                  type: "tel",
                  id: N,
                  value: A,
                  onChange: F,
                  disabled: b,
                  className: M(
                    V,
                    K ? "rounded-l-none" : `rounded-l-${n}`,
                    "flex-1 min-w-0 w-full"
                  ),
                  placeholder: w ? "e.g. +6281234567890" : h
                }
              )
            ] }),
            y && Gt(
              /* @__PURE__ */ l.jsxs(
                "div",
                {
                  ref: $,
                  className: "border border-neutral-200 bg-white shadow-lg overflow-y-auto rounded-md",
                  children: [
                    /* @__PURE__ */ l.jsx("div", { className: "p-2 border-b border-neutral-200", children: /* @__PURE__ */ l.jsx(
                      "input",
                      {
                        type: "text",
                        value: D,
                        onChange: (L) => {
                          const G = L.target.value;
                          /^[a-zA-Z0-9\s]*$/.test(G) && U(G);
                        },
                        placeholder: "Search countries...",
                        className: "w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:border-primary-300"
                      }
                    ) }),
                    /* @__PURE__ */ l.jsx("div", { className: "max-h-[300px] overflow-y-auto", children: v.map((L) => /* @__PURE__ */ l.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => Y(L),
                        className: M(
                          "w-full px-3 py-2 text-sm text-left hover:bg-primary-50 cursor-pointer",
                          S.iso === L.iso && "bg-primary-50"
                        ),
                        children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ l.jsx(ue, { icon: L.flag, className: "w-5 h-5" }),
                          /* @__PURE__ */ l.jsx("span", { className: "text-sm font-medium", children: L.code }),
                          /* @__PURE__ */ l.jsx("span", { className: "text-sm text-neutral-600", children: L.name })
                        ] })
                      },
                      L.iso + L.code
                    )) })
                  ]
                }
              ),
              typeof document < "u" ? document.body : document
            )
          ] }),
          o && a && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger", id: m, children: a }),
          !o && s && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral", id: I, children: s })
        ]
      }
    );
  }
);
ei.displayName = "PhoneInput";
const $m = () => {
  const [e, t] = oe(""), [r, n] = oe(null), o = (a) => {
    t(a);
    const s = Kf(`+${a}`);
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
  return ho(e, () => t.current), t;
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
function Jf(e) {
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
function Qf(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function oi(...e) {
  return (...t) => {
    for (let r of e)
      typeof r == "function" && r(...t);
  };
}
var Pa = /* @__PURE__ */ new Map();
function e0(e, t) {
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
      90 ? t[o] = oi(a, s) : (o === "className" || o === "UNSAFE_className") && typeof a == "string" && typeof s == "string" ? t[o] = nr(a, s) : o === "id" && a && s ? t.id = e0(a, s) : t[o] = s !== void 0 ? s : a;
    }
  }
  return t;
}
function t0(...e) {
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
var r0 = (e, t) => {
  var r;
  let n = [];
  const o = (r = Cr.map(e, (s) => Tr(s) && s.type === t ? (n.push(s), null) : s)) == null ? void 0 : r.filter(Boolean), a = n.length >= 0 ? n : void 0;
  return [o, a];
}, n0 = /* @__PURE__ */ new Set([
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
]), o0 = /* @__PURE__ */ new Set([
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
]), Sa = /^(data-.*)$/, a0 = /^(aria-.*)$/, zr = /^(on[A-Z].*)$/;
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
    a != null && a.has(c) || s != null && s.has(c) && zr.test(c) || zr.test(c) && !o0.has(c) || i && Sa.test(c) || d && zr.test(c) || (Object.prototype.hasOwnProperty.call(e, c) && (n0.has(c) || r && a0.test(c) || o != null && o.has(c) || Sa.test(c)) || zr.test(c)) && (u[c] = e[c]);
  return u;
}
var [hm, So] = To({
  name: "ProviderContext",
  strict: !1
});
const s0 = /* @__PURE__ */ new Set([
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
]), i0 = /* @__PURE__ */ new Set([
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
function l0(e) {
  if (Intl.Locale) {
    let r = new Intl.Locale(e).maximize(), n = typeof r.getTextInfo == "function" ? r.getTextInfo() : r.textInfo;
    if (n) return n.direction === "rtl";
    if (r.script) return s0.has(r.script);
  }
  let t = e.split("-")[0];
  return i0.has(t);
}
const nn = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, ai = /* @__PURE__ */ ie.createContext(nn), d0 = /* @__PURE__ */ ie.createContext(!1);
let c0 = !!(typeof window < "u" && window.document && window.document.createElement), In = /* @__PURE__ */ new WeakMap();
function u0(e = !1) {
  let t = xt(ai), r = ae(null);
  if (r.current === null && !e) {
    var n, o;
    let a = (o = ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || o === void 0 || (n = o.ReactCurrentOwner) === null || n === void 0 ? void 0 : n.current;
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
function f0(e) {
  let t = xt(ai);
  t === nn && !c0 && process.env.NODE_ENV !== "production" && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let r = u0(!!e), n = t === nn && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${n}-${r}`;
}
function p0(e) {
  let t = ie.useId(), [r] = oe(Co()), n = r || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${nn.prefix}`;
  return e || `${n}-${t}`;
}
const g0 = typeof ie.useId == "function" ? p0 : f0;
function m0() {
  return !1;
}
function b0() {
  return !0;
}
function $0(e) {
  return () => {
  };
}
function Co() {
  return typeof ie.useSyncExternalStore == "function" ? ie.useSyncExternalStore($0, m0, b0) : xt(d0);
}
const h0 = Symbol.for("react-aria.i18n.locale");
function si() {
  let e = typeof window < "u" && window[h0] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      e
    ]);
  } catch {
    e = "en-US";
  }
  return {
    locale: e,
    direction: l0(e) ? "rtl" : "ltr"
  };
}
let Zn = si(), kr = /* @__PURE__ */ new Set();
function ja() {
  Zn = si();
  for (let e of kr) e(Zn);
}
function v0() {
  let e = Co(), [t, r] = oe(Zn);
  return de(() => (kr.size === 0 && window.addEventListener("languagechange", ja), kr.add(r), () => {
    kr.delete(r), kr.size === 0 && window.removeEventListener("languagechange", ja);
  }), []), e ? {
    locale: "en-US",
    direction: "ltr"
  } : t;
}
const y0 = /* @__PURE__ */ ie.createContext(null);
function ii() {
  let e = v0();
  return xt(y0) || e;
}
const x0 = Symbol.for("react-aria.i18n.locale"), w0 = Symbol.for("react-aria.i18n.strings");
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
    return r || (r = k0(t, this.strings, this.defaultLocale), this.strings[t] = r), r;
  }
  static getGlobalDictionaryForPackage(t) {
    if (typeof window > "u") return null;
    let r = window[x0];
    if (er === void 0) {
      let o = window[w0];
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
function k0(e, t, r = "en-US") {
  if (t[e]) return t[e];
  let n = E0(e);
  if (t[n]) return t[n];
  for (let o in t)
    if (o.startsWith(n + "-")) return t[o];
  return t[r];
}
function E0(e) {
  return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
const Ia = /* @__PURE__ */ new Map(), Oa = /* @__PURE__ */ new Map();
class N0 {
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
function P0(e) {
  let t = Aa.get(e);
  return t || (t = new mn(e), Aa.set(e, t)), t;
}
function T0(e, t) {
  return t && mn.getGlobalDictionaryForPackage(t) || P0(e);
}
function S0(e, t) {
  let { locale: r } = ii(), n = T0(e, t);
  return Ge(() => new N0(r, n), [
    r,
    n
  ]);
}
function C0(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function j0(e, t, r) {
  C0(e, t), t.set(e, r);
}
const Re = typeof document < "u" ? ie.useLayoutEffect : () => {
};
var On;
const I0 = (On = ie.useInsertionEffect) !== null && On !== void 0 ? On : Re;
function dt(e) {
  const t = ae(null);
  return I0(() => {
    t.current = e;
  }, [
    e
  ]), me((...r) => {
    const n = t.current;
    return n == null ? void 0 : n(...r);
  }, []);
}
function O0(e) {
  let [t, r] = oe(e), n = ae(null), o = dt(() => {
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
let A0 = !!(typeof window < "u" && window.document && window.document.createElement), ir = /* @__PURE__ */ new Map(), Er;
typeof FinalizationRegistry < "u" && (Er = new FinalizationRegistry((e) => {
  ir.delete(e);
}));
function jo(e) {
  let [t, r] = oe(e), n = ae(null), o = g0(t), a = ae(null);
  if (Er && Er.register(a, o), A0) {
    const s = ir.get(o);
    s && !s.includes(n) ? s.push(n) : ir.set(o, [
      n
    ]);
  }
  return Re(() => {
    let s = o;
    return () => {
      Er && Er.unregister(a), ir.delete(s);
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
function _0(e, t) {
  if (e === t) return e;
  let r = ir.get(e);
  if (r)
    return r.forEach((o) => o.current = t), t;
  let n = ir.get(t);
  return n ? (n.forEach((o) => o.current = e), e) : t;
}
function R0(e = []) {
  let t = jo(), [r, n] = O0(t), o = me(() => {
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
const Ee = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, ft = (e) => e && "window" in e && e.window === e ? e : Ee(e).defaultView || window;
function L0(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function M0(e) {
  return L0(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let F0 = !1;
function bn() {
  return F0;
}
function je(e, t) {
  if (!bn()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let r = t;
  for (; r !== null; ) {
    if (r === e) return !0;
    r.tagName === "SLOT" && r.assignedSlot ? r = r.assignedSlot.parentNode : M0(r) ? r = r.host : r = r.parentNode;
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
class D0 {
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
function z0(e, t, r, n) {
  return bn() ? new D0(e, t, r, n) : e.createTreeWalker(t, r, n);
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
      90 ? t[o] = Mr(a, s) : (o === "className" || o === "UNSAFE_className") && typeof a == "string" && typeof s == "string" ? t[o] = $e(a, s) : o === "id" && a && s ? t.id = _0(a, s) : t[o] = s !== void 0 ? s : a;
    }
  }
  return t;
}
const G0 = /* @__PURE__ */ new Set([
  "id"
]), V0 = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), B0 = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), H0 = /* @__PURE__ */ new Set([
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
]), U0 = /^(data-.*)$/;
function li(e, t = {}) {
  let { labelable: r, isLink: n, global: o, events: a = o, propNames: s } = t, i = {};
  for (const d in e) Object.prototype.hasOwnProperty.call(e, d) && (G0.has(d) || r && V0.has(d) || n && B0.has(d) || o && H0.has(d) || a && _a.has(d) || d.endsWith("Capture") && _a.has(d.slice(0, -7)) || s != null && s.has(d) || U0.test(d)) && (i[d] = e[d]);
  return i;
}
function cr(e) {
  if (W0()) e.focus({
    preventScroll: !0
  });
  else {
    let t = K0(e);
    e.focus(), Y0(t);
  }
}
let Gr = null;
function W0() {
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
function K0(e) {
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
function Y0(e) {
  for (let { element: t, scrollTop: r, scrollLeft: n } of e)
    t.scrollTop = r, t.scrollLeft = n;
}
function $n(e) {
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
}), X0 = Ot(function() {
  return Io(/^iPhone/i);
}), di = Ot(function() {
  return Io(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  ur() && navigator.maxTouchPoints > 1;
}), hn = Ot(function() {
  return X0() || di();
});
Ot(function() {
  return ur() || hn();
});
const ci = Ot(function() {
  return $n(/AppleWebKit/i) && !ui();
}), ui = Ot(function() {
  return $n(/Chrome/i);
}), Oo = Ot(function() {
  return $n(/Android/i);
}), Z0 = Ot(function() {
  return $n(/Firefox/i);
});
function Fr(e, t, r = !0) {
  var n, o;
  let { metaKey: a, ctrlKey: s, altKey: i, shiftKey: d } = t;
  Z0() && (!((o = window.event) === null || o === void 0 || (n = o.type) === null || n === void 0) && n.startsWith("key")) && e.target === "_blank" && (ur() ? a = !0 : s = !0);
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
function q0() {
  for (const [e] of Mt)
    "isConnected" in e && !e.isConnected && Mt.delete(e);
}
function fi(e) {
  requestAnimationFrame(() => {
    q0(), Mt.size === 0 ? e() : qn.add(e);
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
function J0(e, t) {
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
function Q0() {
  return typeof window.ResizeObserver < "u";
}
function La(e) {
  const { ref: t, box: r, onResize: n } = e;
  de(() => {
    let o = t == null ? void 0 : t.current;
    if (o)
      if (Q0()) {
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
function ep(e) {
  return !Oo() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
const tp = typeof Element < "u" && "checkVisibility" in Element.prototype;
function rp(e) {
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
function np(e, t) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function _o(e, t) {
  return tp ? e.checkVisibility() && !e.closest("[data-react-aria-prevent-focus]") : e.nodeName !== "#comment" && rp(e) && np(e, t) && (!e.parentElement || _o(e.parentElement, e));
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
], op = Ro.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Ro.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const ap = Ro.join(':not([hidden]):not([tabindex="-1"]),');
function mi(e) {
  return e.matches(op) && _o(e) && !bi(e);
}
function sp(e) {
  return e.matches(ap) && _o(e) && !bi(e);
}
function bi(e) {
  let t = e;
  for (; t != null; ) {
    if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
    t = t.parentElement;
  }
  return !1;
}
function ip(e, t, r) {
  let [n, o] = oe(e || t), a = ae(e !== void 0), s = e !== void 0;
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
}, lp = {
  top: "left",
  left: "top"
}, eo = {
  top: "height",
  left: "width"
}, $i = {
  width: "totalWidth",
  height: "totalHeight"
}, Vr = {};
let Ue = typeof document < "u" ? window.visualViewport : null;
function Fa(e) {
  let t = 0, r = 0, n = 0, o = 0, a = 0, s = 0, i = {};
  var d;
  let u = ((d = Ue == null ? void 0 : Ue.scale) !== null && d !== void 0 ? d : 1) > 1;
  if (e.tagName === "BODY") {
    let h = document.documentElement;
    n = h.clientWidth, o = h.clientHeight;
    var c;
    t = (c = Ue == null ? void 0 : Ue.width) !== null && c !== void 0 ? c : n;
    var f;
    r = (f = Ue == null ? void 0 : Ue.height) !== null && f !== void 0 ? f : o, i.top = h.scrollTop || e.scrollTop, i.left = h.scrollLeft || e.scrollLeft, Ue && (a = Ue.offsetTop, s = Ue.offsetLeft);
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
function dp(e) {
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
function cp(e) {
  let t = window.getComputedStyle(e);
  return {
    top: parseInt(t.marginTop, 10) || 0,
    bottom: parseInt(t.marginBottom, 10) || 0,
    left: parseInt(t.marginLeft, 10) || 0,
    right: parseInt(t.marginRight, 10) || 0
  };
}
function za(e) {
  if (Vr[e]) return Vr[e];
  let [t, r] = e.split(" "), n = vt[t] || "right", o = lp[n];
  vt[r] || (r = "center");
  let a = eo[n], s = eo[o];
  return Vr[e] = {
    placement: t,
    crossPlacement: r,
    axis: n,
    crossAxis: o,
    size: a,
    crossSize: s
  }, Vr[e];
}
function An(e, t, r, n, o, a, s, i, d, u) {
  let { placement: c, crossPlacement: f, axis: b, crossAxis: p, size: h, crossSize: w } = n, k = {};
  var P;
  k[p] = (P = e[p]) !== null && P !== void 0 ? P : 0;
  var y, j, S, O;
  f === "center" ? k[p] += (((y = e[w]) !== null && y !== void 0 ? y : 0) - ((j = r[w]) !== null && j !== void 0 ? j : 0)) / 2 : f !== p && (k[p] += ((S = e[w]) !== null && S !== void 0 ? S : 0) - ((O = r[w]) !== null && O !== void 0 ? O : 0)), k[p] += a;
  const D = e[p] - r[w] + d + u, U = e[p] + e[w] - d - u;
  if (k[p] = Qn(k[p], D, U), c === b) {
    const A = i ? s[h] : t[$i[h]];
    k[on[b]] = Math.floor(A - e[b] + o);
  } else k[b] = Math.floor(e[b] + e[h] + o);
  return k;
}
function up(e, t, r, n, o, a, s, i) {
  const d = n ? r.height : t[$i.height];
  var u;
  let c = e.top != null ? r.top + e.top : r.top + (d - ((u = e.bottom) !== null && u !== void 0 ? u : 0) - s);
  var f, b, p, h, w, k;
  let P = i !== "top" ? (
    // We want the distance between the top of the overlay to the bottom of the boundary
    Math.max(0, t.height + t.top + ((f = t.scroll.top) !== null && f !== void 0 ? f : 0) - c - (((b = o.top) !== null && b !== void 0 ? b : 0) + ((p = o.bottom) !== null && p !== void 0 ? p : 0) + a))
  ) : Math.max(0, c + s - (t.top + ((h = t.scroll.top) !== null && h !== void 0 ? h : 0)) - (((w = o.top) !== null && w !== void 0 ? w : 0) + ((k = o.bottom) !== null && k !== void 0 ? k : 0) + a));
  return Math.min(t.height - a * 2, P);
}
function Ga(e, t, r, n, o, a) {
  let { placement: s, axis: i, size: d } = a;
  var u, c;
  if (s === i) return Math.max(0, r[i] - e[i] - ((u = e.scroll[i]) !== null && u !== void 0 ? u : 0) + t[i] - ((c = n[i]) !== null && c !== void 0 ? c : 0) - n[on[i]] - o);
  var f;
  return Math.max(0, e[d] + e[i] + e.scroll[i] - t[i] - r[i] - r[d] - ((f = n[i]) !== null && f !== void 0 ? f : 0) - n[on[i]] - o);
}
function fp(e, t, r, n, o, a, s, i, d, u, c, f, b, p, h, w) {
  let k = za(e), { size: P, crossAxis: y, crossSize: j, placement: S, crossPlacement: O } = k, D = An(t, i, r, k, c, f, u, b, h, w), U = c, A = Ga(i, u, t, o, a + c, k);
  if (s && n[P] > A) {
    let R = za(`${on[S]} ${O}`), W = An(t, i, r, R, c, f, u, b, h, w);
    Ga(i, u, t, o, a + c, R) > A && (k = R, D = W, U = c);
  }
  let _ = "bottom";
  k.axis === "top" ? k.placement === "top" ? _ = "top" : k.placement === "bottom" && (_ = "bottom") : k.crossAxis === "top" && (k.crossPlacement === "top" ? _ = "bottom" : k.crossPlacement === "bottom" && (_ = "top"));
  let z = Da(y, D[y], r[j], i, d, a, u);
  D[y] += z;
  let g = up(D, i, u, b, o, a, r.height, _);
  p && p < g && (g = p), r.height = Math.min(r.height, g), D = An(t, i, r, k, U, f, u, b, h, w), z = Da(y, D[y], r[j], i, d, a, u), D[y] += z;
  let T = {}, $ = t[y] - D[y] - o[vt[y]], N = $ + 0.5 * t[j];
  const I = h / 2 + w;
  var m, v, E, C;
  const Y = vt[y] === "left" ? ((m = o.left) !== null && m !== void 0 ? m : 0) + ((v = o.right) !== null && v !== void 0 ? v : 0) : ((E = o.top) !== null && E !== void 0 ? E : 0) + ((C = o.bottom) !== null && C !== void 0 ? C : 0), F = r[j] - Y - h / 2 - w, V = t[y] + h / 2 - (D[y] + o[vt[y]]), K = t[y] + t[j] - h / 2 - (D[y] + o[vt[y]]), L = Qn(N, V, K);
  T[y] = Qn(L, I, F), { placement: S, crossPlacement: O } = k, h ? $ = T[y] : O === "right" ? $ += t[j] : O === "center" && ($ += t[j] / 2);
  let G = S === "left" || S === "top" ? r[P] : 0, X = {
    x: S === "top" || S === "bottom" ? $ : G,
    y: S === "left" || S === "right" ? $ : G
  };
  return {
    position: D,
    maxHeight: g,
    arrowOffsetLeft: T.left,
    arrowOffsetTop: T.top,
    placement: S,
    triggerAnchorPoint: X
  };
}
function pp(e) {
  let { placement: t, targetNode: r, overlayNode: n, scrollNode: o, padding: a, shouldFlip: s, boundaryElement: i, offset: d, crossOffset: u, maxHeight: c, arrowSize: f = 0, arrowBoundaryOffset: b = 0 } = e, p = n instanceof HTMLElement ? gp(n) : document.documentElement, h = p === document.documentElement;
  const w = window.getComputedStyle(p).position;
  let k = !!w && w !== "static", P = h ? lr(r) : Va(r, p);
  if (!h) {
    let { marginTop: T, marginLeft: $ } = window.getComputedStyle(r);
    P.top += parseInt(T, 10) || 0, P.left += parseInt($, 10) || 0;
  }
  let y = lr(n), j = cp(n);
  var S, O;
  y.width += ((S = j.left) !== null && S !== void 0 ? S : 0) + ((O = j.right) !== null && O !== void 0 ? O : 0);
  var D, U;
  y.height += ((D = j.top) !== null && D !== void 0 ? D : 0) + ((U = j.bottom) !== null && U !== void 0 ? U : 0);
  let A = dp(o), _ = Fa(i), z = Fa(p), g = i.tagName === "BODY" ? lr(p) : Va(p, i);
  return p.tagName === "HTML" && i.tagName === "BODY" && (z.scroll.top = 0, z.scroll.left = 0), fp(t, P, y, A, j, a, s, _, z, g, d, u, k, c, f, b);
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
function Va(e, t) {
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
function gp(e) {
  let t = e.offsetParent;
  if (t && t === document.body && window.getComputedStyle(t).position === "static" && !Ba(t) && (t = document.documentElement), t == null)
    for (t = e.parentElement; t && !Ba(t); ) t = t.parentElement;
  return t || document.documentElement;
}
function Ba(e) {
  let t = window.getComputedStyle(e);
  return t.transform !== "none" || /transform|perspective/.test(t.willChange) || t.filter !== "none" || t.contain === "paint" || "backdropFilter" in t && t.backdropFilter !== "none" || "WebkitBackdropFilter" in t && t.WebkitBackdropFilter !== "none";
}
const hi = /* @__PURE__ */ new WeakMap();
function mp(e) {
  let { triggerRef: t, isOpen: r, onClose: n } = e;
  de(() => {
    if (!r || n === null) return;
    let o = (a) => {
      let s = a.target;
      if (!t.current || s instanceof Node && !s.contains(t.current) || a.target instanceof HTMLInputElement || a.target instanceof HTMLTextAreaElement) return;
      let i = n || hi.get(t.current);
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
function bp(e) {
  let { direction: t } = ii(), { arrowSize: r, targetRef: n, overlayRef: o, arrowRef: a, scrollRef: s = o, placement: i = "bottom", containerPadding: d = 12, shouldFlip: u = !0, boundaryElement: c = typeof document < "u" ? document.body : null, offset: f = 0, crossOffset: b = 0, shouldUpdatePosition: p = !0, isOpen: h = !0, onClose: w, maxHeight: k, arrowBoundaryOffset: P = 0 } = e, [y, j] = oe(null), S = [
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
    h,
    t,
    k,
    P,
    r
  ], O = ae(_e == null ? void 0 : _e.scale);
  de(() => {
    h && (O.current = _e == null ? void 0 : _e.scale);
  }, [
    h
  ]);
  let D = me(() => {
    var T, $, N;
    if (p === !1 || !h || !o.current || !n.current || !c || (_e == null ? void 0 : _e.scale) !== O.current || o.current.querySelector("[data-react-aria-incomplete]") || ((T = ($ = o.current).getAnimations) === null || T === void 0 ? void 0 : T.call($).length) > 0) return;
    let I = null;
    if (s.current && s.current.contains(document.activeElement)) {
      var m;
      let L = (m = document.activeElement) === null || m === void 0 ? void 0 : m.getBoundingClientRect(), G = s.current.getBoundingClientRect();
      var v;
      if (I = {
        type: "top",
        offset: ((v = L == null ? void 0 : L.top) !== null && v !== void 0 ? v : 0) - G.top
      }, I.offset > G.height / 2) {
        I.type = "bottom";
        var E;
        I.offset = ((E = L == null ? void 0 : L.bottom) !== null && E !== void 0 ? E : 0) - G.bottom;
      }
    }
    let C = o.current;
    if (!k && o.current) {
      var Y;
      C.style.top = "0px", C.style.bottom = "";
      var F;
      C.style.maxHeight = ((F = (Y = window.visualViewport) === null || Y === void 0 ? void 0 : Y.height) !== null && F !== void 0 ? F : window.innerHeight) + "px";
    }
    var V;
    let K = pp({
      placement: hp(i, t),
      overlayNode: o.current,
      targetNode: n.current,
      scrollNode: s.current || o.current,
      padding: d,
      shouldFlip: u,
      boundaryElement: c,
      offset: f,
      crossOffset: b,
      maxHeight: k,
      arrowSize: (V = r ?? (a == null || (N = a.current) === null || N === void 0 ? void 0 : N.getBoundingClientRect().width)) !== null && V !== void 0 ? V : 0,
      arrowBoundaryOffset: P
    });
    if (K.position) {
      if (C.style.top = "", C.style.bottom = "", C.style.left = "", C.style.right = "", Object.keys(K.position).forEach((L) => C.style[L] = K.position[L] + "px"), C.style.maxHeight = K.maxHeight != null ? K.maxHeight + "px" : "", I && document.activeElement && s.current) {
        let L = document.activeElement.getBoundingClientRect(), G = s.current.getBoundingClientRect(), X = L[I.type] - G[I.type];
        s.current.scrollTop += X - I.offset;
      }
      j(K);
    }
  }, S);
  Re(D, S), $p(D), La({
    ref: o,
    onResize: D
  }), La({
    ref: n,
    onResize: D
  });
  let U = ae(!1);
  Re(() => {
    let T, $ = () => {
      U.current = !0, clearTimeout(T), T = setTimeout(() => {
        U.current = !1;
      }, 500), D();
    }, N = () => {
      U.current && $();
    };
    return _e == null || _e.addEventListener("resize", $), _e == null || _e.addEventListener("scroll", N), () => {
      _e == null || _e.removeEventListener("resize", $), _e == null || _e.removeEventListener("scroll", N);
    };
  }, [
    D
  ]);
  let A = me(() => {
    U.current || w == null || w();
  }, [
    w,
    U
  ]);
  mp({
    triggerRef: n,
    isOpen: h,
    onClose: w && A
  });
  var _, z, g;
  return {
    overlayProps: {
      style: {
        position: y ? "absolute" : "fixed",
        top: y ? void 0 : 0,
        left: y ? void 0 : 0,
        zIndex: 1e5,
        ...y == null ? void 0 : y.position,
        maxHeight: (_ = y == null ? void 0 : y.maxHeight) !== null && _ !== void 0 ? _ : "100vh"
      }
    },
    placement: (z = y == null ? void 0 : y.placement) !== null && z !== void 0 ? z : null,
    triggerAnchorPoint: (g = y == null ? void 0 : y.triggerAnchorPoint) !== null && g !== void 0 ? g : null,
    arrowProps: {
      "aria-hidden": "true",
      role: "presentation",
      style: {
        left: y == null ? void 0 : y.arrowOffsetLeft,
        top: y == null ? void 0 : y.arrowOffsetTop
      }
    },
    updatePosition: D
  };
}
function $p(e) {
  Re(() => (window.addEventListener("resize", e, !1), () => {
    window.removeEventListener("resize", e, !1);
  }), [
    e
  ]);
}
function hp(e, t) {
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
  if (hn()) {
    if (or === "default") {
      const t = Ee(e);
      to = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    or = "disabled";
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    en.set(e, e.style[t]), e.style[t] = "none";
  }
}
function _n(e) {
  if (hn()) {
    if (or !== "disabled") return;
    or = "restoring", setTimeout(() => {
      fi(() => {
        if (or === "restoring") {
          const t = Ee(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = to || ""), to = "", or = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && en.has(e)) {
    let t = en.get(e), r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    e.style[r] === "none" && (e.style[r] = t), e.getAttribute("style") === "" && e.removeAttribute("style"), en.delete(e);
  }
}
const Mo = ie.createContext({
  register: () => {
  }
});
Mo.displayName = "PressResponderContext";
function vp(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function xi(e, t, r) {
  if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
  return t.get(e);
}
function yp(e, t) {
  var r = xi(e, t, "get");
  return vp(e, r);
}
function xp(e, t, r) {
  if (t.set) t.set.call(e, r);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = r;
  }
}
function Wa(e, t, r) {
  var n = xi(e, t, "set");
  return xp(e, n, r), r;
}
function wp(e) {
  let t = xt(Mo);
  if (t) {
    let { register: r, ...n } = t;
    e = Yt(n, e), r();
  }
  return pi(t, e.ref), e;
}
var Br = /* @__PURE__ */ new WeakMap();
class Hr {
  continuePropagation() {
    Wa(this, Br, !1);
  }
  get shouldStopPropagation() {
    return yp(this, Br);
  }
  constructor(t, r, n, o) {
    j0(this, Br, {
      writable: !0,
      value: void 0
    }), Wa(this, Br, !0);
    var a;
    let s = (a = o == null ? void 0 : o.target) !== null && a !== void 0 ? a : n.currentTarget;
    const i = s == null ? void 0 : s.getBoundingClientRect();
    let d, u = 0, c, f = null;
    n.clientX != null && n.clientY != null && (c = n.clientX, f = n.clientY), i && (c != null && f != null ? (d = c - i.left, u = f - i.top) : (d = i.width / 2, u = i.height / 2)), this.type = t, this.pointerType = r, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = d, this.y = u;
  }
}
const Ka = Symbol("linkClicked"), Ya = "react-aria-pressable-style", Xa = "data-react-aria-pressable";
function kp(e) {
  let { onPress: t, onPressChange: r, onPressStart: n, onPressEnd: o, onPressUp: a, onClick: s, isDisabled: i, isPressed: d, preventFocusOnPress: u, shouldCancelOnPointerExit: c, allowTextSelectionOnPress: f, ref: b, ...p } = wp(e), [h, w] = oe(!1), k = ae({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: P, removeAllGlobalListeners: y } = Ao(), j = dt((g, T) => {
    let $ = k.current;
    if (i || $.didFirePressStart) return !1;
    let N = !0;
    if ($.isTriggeringEvent = !0, n) {
      let I = new Hr("pressstart", T, g);
      n(I), N = I.shouldStopPropagation;
    }
    return r && r(!0), $.isTriggeringEvent = !1, $.didFirePressStart = !0, w(!0), N;
  }), S = dt((g, T, $ = !0) => {
    let N = k.current;
    if (!N.didFirePressStart) return !1;
    N.didFirePressStart = !1, N.isTriggeringEvent = !0;
    let I = !0;
    if (o) {
      let m = new Hr("pressend", T, g);
      o(m), I = m.shouldStopPropagation;
    }
    if (r && r(!1), w(!1), t && $ && !i) {
      let m = new Hr("press", T, g);
      t(m), I && (I = m.shouldStopPropagation);
    }
    return N.isTriggeringEvent = !1, I;
  }), O = dt((g, T) => {
    let $ = k.current;
    if (i) return !1;
    if (a) {
      $.isTriggeringEvent = !0;
      let N = new Hr("pressup", T, g);
      return a(N), $.isTriggeringEvent = !1, N.shouldStopPropagation;
    }
    return !0;
  }), D = dt((g) => {
    let T = k.current;
    if (T.isPressed && T.target) {
      T.didFirePressStart && T.pointerType != null && S(Ht(T.target, g), T.pointerType, !1), T.isPressed = !1, T.isOverTarget = !1, T.activePointerId = null, T.pointerType = null, y(), f || _n(T.target);
      for (let $ of T.disposables) $();
      T.disposables = [];
    }
  }), U = dt((g) => {
    c && D(g);
  }), A = dt((g) => {
    s == null || s(g);
  }), _ = dt((g, T) => {
    if (s) {
      let $ = new MouseEvent("click", g);
      vi($, T), s(Lo($));
    }
  }), z = Ge(() => {
    let g = k.current, T = {
      onKeyDown(N) {
        if (Rn(N.nativeEvent, N.currentTarget) && je(N.currentTarget, xe(N.nativeEvent))) {
          var I;
          Ja(xe(N.nativeEvent), N.key) && N.preventDefault();
          let m = !0;
          if (!g.isPressed && !N.repeat) {
            g.target = N.currentTarget, g.isPressed = !0, g.pointerType = "keyboard", m = j(N, "keyboard");
            let v = N.currentTarget, E = (C) => {
              Rn(C, v) && !C.repeat && je(v, xe(C)) && g.target && O(Ht(g.target, C), "keyboard");
            };
            P(Ee(N.currentTarget), "keyup", Mr(E, $), !0);
          }
          m && N.stopPropagation(), N.metaKey && ur() && ((I = g.metaKeyEvents) === null || I === void 0 || I.set(N.key, N.nativeEvent));
        } else N.key === "Meta" && (g.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(N) {
        if (!(N && !je(N.currentTarget, xe(N.nativeEvent))) && N && N.button === 0 && !g.isTriggeringEvent && !Fr.isOpening) {
          let I = !0;
          if (i && N.preventDefault(), !g.ignoreEmulatedMouseEvents && !g.isPressed && (g.pointerType === "virtual" || Jn(N.nativeEvent))) {
            let m = j(N, "virtual"), v = O(N, "virtual"), E = S(N, "virtual");
            A(N), I = m && v && E;
          } else if (g.isPressed && g.pointerType !== "keyboard") {
            let m = g.pointerType || N.nativeEvent.pointerType || "virtual", v = O(Ht(N.currentTarget, N), m), E = S(Ht(N.currentTarget, N), m, !0);
            I = v && E, g.isOverTarget = !1, A(N), D(N);
          }
          g.ignoreEmulatedMouseEvents = !1, I && N.stopPropagation();
        }
      }
    }, $ = (N) => {
      var I;
      if (g.isPressed && g.target && Rn(N, g.target)) {
        var m;
        Ja(xe(N), N.key) && N.preventDefault();
        let E = xe(N), C = je(g.target, xe(N));
        S(Ht(g.target, N), "keyboard", C), C && _(N, g.target), y(), N.key !== "Enter" && Fo(g.target) && je(g.target, E) && !N[Ka] && (N[Ka] = !0, Fr(g.target, N, !1)), g.isPressed = !1, (m = g.metaKeyEvents) === null || m === void 0 || m.delete(N.key);
      } else if (N.key === "Meta" && (!((I = g.metaKeyEvents) === null || I === void 0) && I.size)) {
        var v;
        let E = g.metaKeyEvents;
        g.metaKeyEvents = void 0;
        for (let C of E.values()) (v = g.target) === null || v === void 0 || v.dispatchEvent(new KeyboardEvent("keyup", C));
      }
    };
    if (typeof PointerEvent < "u") {
      T.onPointerDown = (m) => {
        if (m.button !== 0 || !je(m.currentTarget, xe(m.nativeEvent))) return;
        if (ep(m.nativeEvent)) {
          g.pointerType = "virtual";
          return;
        }
        g.pointerType = m.pointerType;
        let v = !0;
        if (!g.isPressed) {
          g.isPressed = !0, g.isOverTarget = !0, g.activePointerId = m.pointerId, g.target = m.currentTarget, f || Ua(g.target), v = j(m, g.pointerType);
          let E = xe(m.nativeEvent);
          "releasePointerCapture" in E && E.releasePointerCapture(m.pointerId), P(Ee(m.currentTarget), "pointerup", N, !1), P(Ee(m.currentTarget), "pointercancel", I, !1);
        }
        v && m.stopPropagation();
      }, T.onMouseDown = (m) => {
        if (je(m.currentTarget, xe(m.nativeEvent)) && m.button === 0) {
          if (u) {
            let v = Ha(m.target);
            v && g.disposables.push(v);
          }
          m.stopPropagation();
        }
      }, T.onPointerUp = (m) => {
        !je(m.currentTarget, xe(m.nativeEvent)) || g.pointerType === "virtual" || m.button === 0 && !g.isPressed && O(m, g.pointerType || m.pointerType);
      }, T.onPointerEnter = (m) => {
        m.pointerId === g.activePointerId && g.target && !g.isOverTarget && g.pointerType != null && (g.isOverTarget = !0, j(Ht(g.target, m), g.pointerType));
      }, T.onPointerLeave = (m) => {
        m.pointerId === g.activePointerId && g.target && g.isOverTarget && g.pointerType != null && (g.isOverTarget = !1, S(Ht(g.target, m), g.pointerType, !1), U(m));
      };
      let N = (m) => {
        if (m.pointerId === g.activePointerId && g.isPressed && m.button === 0 && g.target) {
          if (je(g.target, xe(m)) && g.pointerType != null) {
            let v = !1, E = setTimeout(() => {
              g.isPressed && g.target instanceof HTMLElement && (v ? D(m) : (cr(g.target), g.target.click()));
            }, 80);
            P(m.currentTarget, "click", () => v = !0, !0), g.disposables.push(() => clearTimeout(E));
          } else D(m);
          g.isOverTarget = !1;
        }
      }, I = (m) => {
        D(m);
      };
      T.onDragStart = (m) => {
        je(m.currentTarget, xe(m.nativeEvent)) && D(m);
      };
    } else if (process.env.NODE_ENV === "test") {
      T.onMouseDown = (m) => {
        if (m.button !== 0 || !je(m.currentTarget, xe(m.nativeEvent))) return;
        if (g.ignoreEmulatedMouseEvents) {
          m.stopPropagation();
          return;
        }
        if (g.isPressed = !0, g.isOverTarget = !0, g.target = m.currentTarget, g.pointerType = Jn(m.nativeEvent) ? "virtual" : "mouse", Jl(() => j(m, g.pointerType)) && m.stopPropagation(), u) {
          let E = Ha(m.target);
          E && g.disposables.push(E);
        }
        P(Ee(m.currentTarget), "mouseup", N, !1);
      }, T.onMouseEnter = (m) => {
        if (!je(m.currentTarget, xe(m.nativeEvent))) return;
        let v = !0;
        g.isPressed && !g.ignoreEmulatedMouseEvents && g.pointerType != null && (g.isOverTarget = !0, v = j(m, g.pointerType)), v && m.stopPropagation();
      }, T.onMouseLeave = (m) => {
        if (!je(m.currentTarget, xe(m.nativeEvent))) return;
        let v = !0;
        g.isPressed && !g.ignoreEmulatedMouseEvents && g.pointerType != null && (g.isOverTarget = !1, v = S(m, g.pointerType, !1), U(m)), v && m.stopPropagation();
      }, T.onMouseUp = (m) => {
        je(m.currentTarget, xe(m.nativeEvent)) && !g.ignoreEmulatedMouseEvents && m.button === 0 && !g.isPressed && O(m, g.pointerType || "mouse");
      };
      let N = (m) => {
        if (m.button === 0) {
          if (g.ignoreEmulatedMouseEvents) {
            g.ignoreEmulatedMouseEvents = !1;
            return;
          }
          g.target && g.target.contains(m.target) && g.pointerType != null || D(m), g.isOverTarget = !1;
        }
      };
      T.onTouchStart = (m) => {
        if (!je(m.currentTarget, xe(m.nativeEvent))) return;
        let v = Ep(m.nativeEvent);
        if (!v) return;
        g.activePointerId = v.identifier, g.ignoreEmulatedMouseEvents = !0, g.isOverTarget = !0, g.isPressed = !0, g.target = m.currentTarget, g.pointerType = "touch", f || Ua(g.target), j(Rt(g.target, m), g.pointerType) && m.stopPropagation(), P(ft(m.currentTarget), "scroll", I, !0);
      }, T.onTouchMove = (m) => {
        if (!je(m.currentTarget, xe(m.nativeEvent))) return;
        if (!g.isPressed) {
          m.stopPropagation();
          return;
        }
        let v = Za(m.nativeEvent, g.activePointerId), E = !0;
        v && qa(v, m.currentTarget) ? !g.isOverTarget && g.pointerType != null && (g.isOverTarget = !0, E = j(Rt(g.target, m), g.pointerType)) : g.isOverTarget && g.pointerType != null && (g.isOverTarget = !1, E = S(Rt(g.target, m), g.pointerType, !1), U(Rt(g.target, m))), E && m.stopPropagation();
      }, T.onTouchEnd = (m) => {
        if (!je(m.currentTarget, xe(m.nativeEvent))) return;
        if (!g.isPressed) {
          m.stopPropagation();
          return;
        }
        let v = Za(m.nativeEvent, g.activePointerId), E = !0;
        v && qa(v, m.currentTarget) && g.pointerType != null ? (O(Rt(g.target, m), g.pointerType), E = S(Rt(g.target, m), g.pointerType), _(m.nativeEvent, g.target)) : g.isOverTarget && g.pointerType != null && (E = S(Rt(g.target, m), g.pointerType, !1)), E && m.stopPropagation(), g.isPressed = !1, g.activePointerId = null, g.isOverTarget = !1, g.ignoreEmulatedMouseEvents = !0, g.target && !f && _n(g.target), y();
      }, T.onTouchCancel = (m) => {
        je(m.currentTarget, xe(m.nativeEvent)) && (m.stopPropagation(), g.isPressed && D(Rt(g.target, m)));
      };
      let I = (m) => {
        g.isPressed && je(xe(m), g.target) && D({
          currentTarget: g.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      T.onDragStart = (m) => {
        je(m.currentTarget, xe(m.nativeEvent)) && D(m);
      };
    }
    return T;
  }, [
    P,
    i,
    u,
    y,
    f,
    D,
    U,
    S,
    j,
    O,
    A,
    _
  ]);
  return de(() => {
    if (!b || process.env.NODE_ENV === "test") return;
    const g = Ee(b.current);
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
      for (let $ of g.disposables) $();
      g.disposables = [];
    };
  }, [
    f
  ]), {
    isPressed: d || h,
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
function Ep(e) {
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
function Np(e) {
  let t = 0, r = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? r = e.height / 2 : e.radiusY !== void 0 && (r = e.radiusY), {
    top: e.clientY - r,
    right: e.clientX + t,
    bottom: e.clientY + r,
    left: e.clientX - t
  };
}
function Pp(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function qa(e, t) {
  let r = t.getBoundingClientRect(), n = Np(e);
  return Pp(r, n);
}
function Tp(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Fo(e);
}
function Ja(e, t) {
  return e instanceof HTMLInputElement ? !wi(e, t) : Tp(e);
}
const Sp = /* @__PURE__ */ new Set([
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
  return e.type === "checkbox" || e.type === "radio" ? t === " " : Sp.has(e.type);
}
let pr = null, ro = /* @__PURE__ */ new Set(), Sr = /* @__PURE__ */ new Map(), Xt = !1, no = !1;
const Cp = {
  Tab: !0,
  Escape: !0
};
function Do(e, t) {
  for (let r of ro) r(e, t);
}
function jp(e) {
  return !(e.metaKey || !ur() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function sn(e) {
  Xt = !0, jp(e) && (pr = "keyboard", Do("keyboard", e));
}
function ut(e) {
  pr = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Xt = !0, Do("pointer", e));
}
function ki(e) {
  Jn(e) && (Xt = !0, pr = "virtual");
}
function Ei(e) {
  e.target === window || e.target === document || an || !e.isTrusted || (!Xt && !no && (pr = "virtual", Do("virtual", e)), Xt = !1, no = !1);
}
function Ni() {
  an || (Xt = !1, no = !0);
}
function oo(e) {
  if (typeof window > "u" || typeof document > "u" || Sr.get(ft(e))) return;
  const t = ft(e), r = Ee(e);
  let n = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Xt = !0, n.apply(this, arguments);
  }, r.addEventListener("keydown", sn, !0), r.addEventListener("keyup", sn, !0), r.addEventListener("click", ki, !0), t.addEventListener("focus", Ei, !0), t.addEventListener("blur", Ni, !1), typeof PointerEvent < "u" ? (r.addEventListener("pointerdown", ut, !0), r.addEventListener("pointermove", ut, !0), r.addEventListener("pointerup", ut, !0)) : process.env.NODE_ENV === "test" && (r.addEventListener("mousedown", ut, !0), r.addEventListener("mousemove", ut, !0), r.addEventListener("mouseup", ut, !0)), t.addEventListener("beforeunload", () => {
    Pi(e);
  }, {
    once: !0
  }), Sr.set(t, {
    focus: n
  });
}
const Pi = (e, t) => {
  const r = ft(e), n = Ee(e);
  t && n.removeEventListener("DOMContentLoaded", t), Sr.has(r) && (r.HTMLElement.prototype.focus = Sr.get(r).focus, n.removeEventListener("keydown", sn, !0), n.removeEventListener("keyup", sn, !0), n.removeEventListener("click", ki, !0), r.removeEventListener("focus", Ei, !0), r.removeEventListener("blur", Ni, !1), typeof PointerEvent < "u" ? (n.removeEventListener("pointerdown", ut, !0), n.removeEventListener("pointermove", ut, !0), n.removeEventListener("pointerup", ut, !0)) : process.env.NODE_ENV === "test" && (n.removeEventListener("mousedown", ut, !0), n.removeEventListener("mousemove", ut, !0), n.removeEventListener("mouseup", ut, !0)), Sr.delete(r));
};
function Ip(e) {
  const t = Ee(e);
  let r;
  return t.readyState !== "loading" ? oo(e) : (r = () => {
    oo(e);
  }, t.addEventListener("DOMContentLoaded", r)), () => Pi(e, r);
}
typeof document < "u" && Ip();
function Ti() {
  return pr !== "pointer";
}
function Si() {
  return pr;
}
const Op = /* @__PURE__ */ new Set([
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
function Ap(e, t, r) {
  let n = Ee(r == null ? void 0 : r.target);
  const o = typeof window < "u" ? ft(r == null ? void 0 : r.target).HTMLInputElement : HTMLInputElement, a = typeof window < "u" ? ft(r == null ? void 0 : r.target).HTMLTextAreaElement : HTMLTextAreaElement, s = typeof window < "u" ? ft(r == null ? void 0 : r.target).HTMLElement : HTMLElement, i = typeof window < "u" ? ft(r == null ? void 0 : r.target).KeyboardEvent : KeyboardEvent;
  return e = e || n.activeElement instanceof o && !Op.has(n.activeElement.type) || n.activeElement instanceof a || n.activeElement instanceof s && n.activeElement.isContentEditable, !(e && t === "keyboard" && r instanceof i && !Cp[r.key]);
}
function _p(e, t, r) {
  oo(), de(() => {
    let n = (o, a) => {
      Ap(!!(r != null && r.isTextInput), o, a) && e(Ti());
    };
    return ro.add(n), () => {
      ro.delete(n);
    };
  }, t);
}
function ln(e) {
  const t = Ee(e), r = nt(t);
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
    const u = Ee(d.target), c = u ? nt(u) : nt();
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
function Rp(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: Qa(e.onKeyDown),
      onKeyUp: Qa(e.onKeyUp)
    }
  };
}
let Lp = /* @__PURE__ */ ie.createContext(null);
function Mp(e) {
  let t = xt(Lp) || {};
  pi(t, e);
  let { ref: r, ...n } = t;
  return n;
}
function Fp(e, t) {
  let { focusProps: r } = Ci(e), { keyboardProps: n } = Rp(e), o = Yt(r, n), a = Mp(t), s = e.isDisabled ? {} : a, i = ae(e.autoFocus);
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
function Dp({ children: e }) {
  let t = Ge(() => ({
    register: () => {
    }
  }), []);
  return /* @__PURE__ */ ie.createElement(Mo.Provider, {
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
    const b = Ee(f.target), p = nt(b);
    if (!a.current.isFocusWithin && p === xe(f.nativeEvent)) {
      n && n(f), o && o(!0), a.current.isFocusWithin = !0, u(f);
      let h = f.currentTarget;
      s(b, "focus", (w) => {
        if (a.current.isFocusWithin && !je(h, w.target)) {
          let k = new b.defaultView.FocusEvent("blur", {
            relatedTarget: w.target
          });
          vi(k, h);
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
function zp() {
  if (!(typeof document > "u"))
    return Ur === 0 && (typeof PointerEvent < "u" ? document.addEventListener("pointerup", es) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", ao)), Ur++, () => {
      Ur--, !(Ur > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", es) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", ao));
    };
}
function Gp(e) {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, isDisabled: o } = e, [a, s] = oe(!1), i = ae({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  de(zp, []);
  let { addGlobalListener: d, removeAllGlobalListeners: u } = Ao(), { hoverProps: c, triggerHoverEnd: f } = Ge(() => {
    let b = (w, k) => {
      if (i.pointerType = k, o || k === "touch" || i.isHovered || !w.currentTarget.contains(w.target)) return;
      i.isHovered = !0;
      let P = w.currentTarget;
      i.target = P, d(Ee(w.target), "pointerover", (y) => {
        i.isHovered && i.target && !je(i.target, y.target) && p(y, y.pointerType);
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
    }, h = {};
    return typeof PointerEvent < "u" ? (h.onPointerEnter = (w) => {
      dn && w.pointerType === "mouse" || b(w, w.pointerType);
    }, h.onPointerLeave = (w) => {
      !o && w.currentTarget.contains(w.target) && p(w, w.pointerType);
    }) : process.env.NODE_ENV === "test" && (h.onTouchStart = () => {
      i.ignoreEmulatedMouseEvents = !0;
    }, h.onMouseEnter = (w) => {
      !i.ignoreEmulatedMouseEvents && !dn && b(w, "mouse"), i.ignoreEmulatedMouseEvents = !1;
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
function Vp(e) {
  let { ref: t, onInteractOutside: r, isDisabled: n, onInteractOutsideStart: o } = e, a = ae({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), s = dt((d) => {
    r && Wr(d, t) && (o && o(d), a.current.isPointerDown = !0);
  }), i = dt((d) => {
    r && r(d);
  });
  de(() => {
    let d = a.current;
    if (n) return;
    const u = t.current, c = Ee(u);
    if (typeof PointerEvent < "u") {
      let f = (b) => {
        d.isPointerDown && Wr(b, t) && i(b), d.isPointerDown = !1;
      };
      return c.addEventListener("pointerdown", s, !0), c.addEventListener("click", f, !0), () => {
        c.removeEventListener("pointerdown", s, !0), c.removeEventListener("click", f, !0);
      };
    } else if (process.env.NODE_ENV === "test") {
      let f = (p) => {
        d.ignoreEmulatedMouseEvents ? d.ignoreEmulatedMouseEvents = !1 : d.isPointerDown && Wr(p, t) && i(p), d.isPointerDown = !1;
      }, b = (p) => {
        d.ignoreEmulatedMouseEvents = !0, d.isPointerDown && Wr(p, t) && i(p), d.isPointerDown = !1;
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
function Wr(e, t) {
  if (e.button > 0) return !1;
  if (e.target) {
    const r = e.target.ownerDocument;
    if (!r || !r.documentElement.contains(e.target) || e.target.closest("[data-react-aria-top-layer]")) return !1;
  }
  return t.current ? !e.composedPath().includes(t.current) : !1;
}
const ts = /* @__PURE__ */ ie.createContext(null), so = "react-aria-focus-scope-restore";
let Te = null;
function Bp(e) {
  let { children: t, contain: r, restoreFocus: n, autoFocus: o } = e, a = ae(null), s = ae(null), i = ae([]), { parentNode: d } = xt(ts) || {}, u = Ge(() => new lo({
    scopeRef: i
  }), [
    i
  ]);
  Re(() => {
    let b = d || Me.root;
    if (Me.getTreeNode(b.scopeRef) && Te && !cn(Te, b.scopeRef)) {
      let p = Me.getTreeNode(Te);
      p && (b = p);
    }
    b.addChild(u), Me.addNode(u);
  }, [
    u,
    d
  ]), Re(() => {
    let b = Me.getTreeNode(i);
    b && (b.contain = !!r);
  }, [
    r
  ]), Re(() => {
    var b;
    let p = (b = a.current) === null || b === void 0 ? void 0 : b.nextSibling, h = [], w = (k) => k.stopPropagation();
    for (; p && p !== s.current; )
      h.push(p), p.addEventListener(so, w), p = p.nextSibling;
    return i.current = h, () => {
      for (let k of h) k.removeEventListener(so, w);
    };
  }, [
    t
  ]), Xp(i, n, r), Wp(i, r), Zp(i, n, r), Yp(i, o), de(() => {
    const b = nt(Ee(i.current ? i.current[0] : void 0));
    let p = null;
    if (gt(b, i.current)) {
      for (let h of Me.traverse()) h.scopeRef && gt(b, h.scopeRef.current) && (p = h);
      p === Me.getTreeNode(i) && (Te = p.scopeRef);
    }
  }, [
    i
  ]), Re(() => () => {
    var b, p, h;
    let w = (h = (p = Me.getTreeNode(i)) === null || p === void 0 || (b = p.parent) === null || b === void 0 ? void 0 : b.scopeRef) !== null && h !== void 0 ? h : null;
    (i === Te || cn(i, Te)) && (!w || Me.getTreeNode(w)) && (Te = w), Me.removeTreeNode(i);
  }, [
    i
  ]);
  let c = Ge(() => Hp(i), []), f = Ge(() => ({
    focusManager: c,
    parentNode: u
  }), [
    u,
    c
  ]);
  return /* @__PURE__ */ ie.createElement(ts.Provider, {
    value: f
  }, /* @__PURE__ */ ie.createElement("span", {
    "data-focus-scope-start": !0,
    hidden: !0,
    ref: a
  }), t, /* @__PURE__ */ ie.createElement("span", {
    "data-focus-scope-end": !0,
    hidden: !0,
    ref: s
  }));
}
function Hp(e) {
  return {
    focusNext(t = {}) {
      let r = e.current, { from: n, tabbable: o, wrap: a, accept: s } = t;
      var i;
      let d = n || nt(Ee((i = r[0]) !== null && i !== void 0 ? i : void 0)), u = r[0].previousElementSibling, c = Wt(r), f = zt(c, {
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
      let d = n || nt(Ee((i = r[0]) !== null && i !== void 0 ? i : void 0)), u = r[r.length - 1].nextElementSibling, c = Wt(r), f = zt(c, {
        tabbable: o,
        accept: s
      }, r);
      f.currentNode = gt(d, r) ? d : u;
      let b = f.previousNode();
      return !b && a && (f.currentNode = u, b = f.previousNode()), b && jt(b, !0), b;
    },
    focusFirst(t = {}) {
      let r = e.current, { tabbable: n, accept: o } = t, a = Wt(r), s = zt(a, {
        tabbable: n,
        accept: o
      }, r);
      s.currentNode = r[0].previousElementSibling;
      let i = s.nextNode();
      return i && jt(i, !0), i;
    },
    focusLast(t = {}) {
      let r = e.current, { tabbable: n, accept: o } = t, a = Wt(r), s = zt(a, {
        tabbable: n,
        accept: o
      }, r);
      s.currentNode = r[r.length - 1].nextElementSibling;
      let i = s.previousNode();
      return i && jt(i, !0), i;
    }
  };
}
function Wt(e) {
  return e[0].parentElement;
}
function Nr(e) {
  let t = Me.getTreeNode(Te);
  for (; t && t.scopeRef !== e; ) {
    if (t.contain) return !1;
    t = t.parent;
  }
  return !0;
}
function Up(e) {
  if (e.checked) return !0;
  let t = [];
  if (!e.form) t = [
    ...Ee(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)
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
function Wp(e, t) {
  let r = ae(void 0), n = ae(void 0);
  Re(() => {
    let o = e.current;
    if (!t) {
      n.current && (cancelAnimationFrame(n.current), n.current = void 0);
      return;
    }
    const a = Ee(o ? o[0] : void 0);
    let s = (u) => {
      if (u.key !== "Tab" || u.altKey || u.ctrlKey || u.metaKey || !Nr(e) || u.isComposing) return;
      let c = nt(a), f = e.current;
      if (!f || !gt(c, f)) return;
      let b = Wt(f), p = zt(b, {
        tabbable: !0
      }, f);
      if (!c) return;
      p.currentNode = c;
      let h = u.shiftKey ? p.previousNode() : p.nextNode();
      h || (p.currentNode = u.shiftKey ? f[f.length - 1].nextElementSibling : f[0].previousElementSibling, h = u.shiftKey ? p.previousNode() : p.nextNode()), u.preventDefault(), h && jt(h, !0);
    }, i = (u) => {
      (!Te || cn(Te, e)) && gt(xe(u), e.current) ? (Te = e, r.current = xe(u)) : Nr(e) && !Dt(xe(u), e) ? r.current ? r.current.focus() : Te && Te.current && io(Te.current) : Nr(e) && (r.current = xe(u));
    }, d = (u) => {
      n.current && cancelAnimationFrame(n.current), n.current = requestAnimationFrame(() => {
        let c = Si(), f = (c === "virtual" || c === null) && Oo() && ui(), b = nt(a);
        if (!f && b && Nr(e) && !Dt(b, e)) {
          Te = e;
          let h = xe(u);
          if (h && h.isConnected) {
            var p;
            r.current = h, (p = r.current) === null || p === void 0 || p.focus();
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
  for (let { scopeRef: r } of Me.traverse(Me.getTreeNode(t)))
    if (r && gt(e, r.current)) return !0;
  return !1;
}
function Kp(e) {
  return Dt(e, Te);
}
function cn(e, t) {
  var r;
  let n = (r = Me.getTreeNode(t)) === null || r === void 0 ? void 0 : r.parent;
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
  let r = e[0].previousElementSibling, n = Wt(e), o = zt(n, {
    tabbable: t
  }, e);
  o.currentNode = r;
  let a = o.nextNode();
  return t && !a && (n = Wt(e), o = zt(n, {
    tabbable: !1
  }, e), o.currentNode = r, a = o.nextNode()), a;
}
function io(e, t = !0) {
  jt(Ii(e, t));
}
function Yp(e, t) {
  const r = ie.useRef(t);
  de(() => {
    if (r.current) {
      Te = e;
      const n = Ee(e.current ? e.current[0] : void 0);
      !gt(nt(n), Te.current) && e.current && io(e.current);
    }
    r.current = !1;
  }, [
    e
  ]);
}
function Xp(e, t, r) {
  Re(() => {
    if (t || r) return;
    let n = e.current;
    const o = Ee(n ? n[0] : void 0);
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
  let t = Me.getTreeNode(Te);
  for (; t && t.scopeRef !== e; ) {
    if (t.nodeToRestore) return !1;
    t = t.parent;
  }
  return (t == null ? void 0 : t.scopeRef) === e;
}
function Zp(e, t, r) {
  const n = ae(typeof document < "u" ? nt(Ee(e.current ? e.current[0] : void 0)) : null);
  Re(() => {
    let o = e.current;
    const a = Ee(o ? o[0] : void 0);
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
    const o = Ee(e.current ? e.current[0] : void 0);
    if (!t) return;
    let a = (s) => {
      if (s.key !== "Tab" || s.altKey || s.ctrlKey || s.metaKey || !Nr(e) || s.isComposing) return;
      let i = o.activeElement;
      if (!Dt(i, e) || !rs(e)) return;
      let d = Me.getTreeNode(e);
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
    const o = Ee(e.current ? e.current[0] : void 0);
    if (!t) return;
    let a = Me.getTreeNode(e);
    if (a) {
      var s;
      return a.nodeToRestore = (s = n.current) !== null && s !== void 0 ? s : void 0, () => {
        let i = Me.getTreeNode(e);
        if (!i) return;
        let d = i.nodeToRestore, u = nt(o);
        if (t && d && (u && Dt(u, e) || u === o.body && rs(e))) {
          let c = Me.clone();
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
                if (f.scopeRef && f.scopeRef.current && Me.getTreeNode(f.scopeRef)) {
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
  let n = t != null && t.tabbable ? sp : mi, o = (e == null ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null, a = Ee(o), s = z0(a, e || a, NodeFilter.SHOW_ELEMENT, {
    acceptNode(i) {
      var d;
      return !(t == null || (d = t.from) === null || d === void 0) && d.contains(i) || t != null && t.tabbable && i.tagName === "INPUT" && i.getAttribute("type") === "radio" && (!Up(i) || s.currentNode.tagName === "INPUT" && s.currentNode.type === "radio" && s.currentNode.name === i.name) ? NodeFilter.FILTER_REJECT : n(i) && (!r || gt(i, r)) && (!(t != null && t.accept) || t.accept(i)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
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
let Me = new Go();
function Oi(e = {}) {
  let { autoFocus: t = !1, isTextInput: r, within: n } = e, o = ae({
    isFocused: !1,
    isFocusVisible: t || Ti()
  }), [a, s] = oe(!1), [i, d] = oe(() => o.current.isFocused && o.current.isFocusVisible), u = me(() => d(o.current.isFocused && o.current.isFocusVisible), []), c = me((p) => {
    o.current.isFocused = p, s(p), u();
  }, [
    u
  ]);
  _p((p) => {
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
function qp(e, t, r) {
  let { type: n } = e, { isOpen: o } = t;
  de(() => {
    r && r.current && hi.set(r.current, t.close);
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
const Ln = typeof document < "u" && window.visualViewport, Jp = /* @__PURE__ */ new Set([
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
let Kr = 0, Mn;
function Qp(e = {}) {
  let { isDisabled: t } = e;
  Re(() => {
    if (!t)
      return Kr++, Kr === 1 && (hn() ? Mn = t1() : Mn = e1()), () => {
        Kr--, Kr === 0 && Mn();
      };
  }, [
    t
  ]);
}
function e1() {
  let e = window.innerWidth - document.documentElement.clientWidth;
  return Mr(e > 0 && // Use scrollbar-gutter when supported because it also works for fixed positioned elements.
  ("scrollbarGutter" in document.documentElement.style ? Kt(document.documentElement, "scrollbarGutter", "stable") : Kt(document.documentElement, "paddingRight", `${e}px`)), Kt(document.documentElement, "overflow", "hidden"));
}
function t1() {
  let e, t, r = (u) => {
    e = gi(u.target, !0), !(e === document.documentElement && e === document.body) && e instanceof HTMLElement && window.getComputedStyle(e).overscrollBehavior === "auto" && (t = Kt(e, "overscrollBehavior", "contain"));
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
    r1(c) && (i(), c.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
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
    s = Mr(yr(window, "scroll", u), Kt(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), Kt(document.documentElement, "overflow", "hidden"), Kt(document.body, "marginTop", `-${f}px`), () => {
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
function Kt(e, t, r) {
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
function r1(e) {
  return e instanceof HTMLInputElement && !Jp.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
const n1 = /* @__PURE__ */ Ns({});
function o1() {
  var e;
  return (e = xt(n1)) !== null && e !== void 0 ? e : {};
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
var Vi = {};
Vi = {
  dismiss: "Hylkää"
};
var Bi = {};
Bi = {
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
var Wi = {};
Wi = {
  dismiss: "Elutasítás"
};
var Ki = {};
Ki = {
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
  "fi-FI": Vi,
  "fr-FR": Bi,
  "he-IL": Hi,
  "hr-HR": Ui,
  "hu-HU": Wi,
  "it-IT": Ki,
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
function a1(e = {}) {
  let { style: t, isFocusable: r } = e, [n, o] = oe(!1), { focusWithinProps: a } = zo({
    isDisabled: !r,
    onFocusWithinChange: (i) => o(i)
  }), s = Ge(() => n ? t : t ? {
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
function s1(e) {
  let { children: t, elementType: r = "div", isFocusable: n, style: o, ...a } = e, { visuallyHiddenProps: s } = a1(e);
  return /* @__PURE__ */ ie.createElement(r, Yt(a, s), t);
}
function i1(e) {
  return e && e.__esModule ? e.default : e;
}
function ss(e) {
  let { onDismiss: t, ...r } = e, n = S0(i1(pl), "@react-aria/overlays"), o = J0(r, n.format("dismiss")), a = () => {
    t && t();
  };
  return /* @__PURE__ */ ie.createElement(s1, null, /* @__PURE__ */ ie.createElement("button", {
    ...o,
    tabIndex: -1,
    onClick: a,
    style: {
      width: 1,
      height: 1
    }
  }));
}
const gl = /* @__PURE__ */ ie.createContext(null);
function l1(e) {
  let t = Co(), { portalContainer: r = t ? null : document.body, isExiting: n } = e, [o, a] = oe(!1), s = Ge(() => ({
    contain: o,
    setContain: a
  }), [
    o,
    a
  ]), { getContainer: i } = o1();
  if (!e.portalContainer && i && (r = i()), !r) return null;
  let d = e.children;
  return e.disableFocusManagement || (d = /* @__PURE__ */ ie.createElement(Bp, {
    restoreFocus: !0,
    contain: (e.shouldContainFocus || o) && !n
  }, d)), d = /* @__PURE__ */ ie.createElement(gl.Provider, {
    value: s
  }, /* @__PURE__ */ ie.createElement(Dp, null, d)), /* @__PURE__ */ ql.createPortal(d, r);
}
function d1() {
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
var c1 = (e, t, r = !0) => {
  if (!t)
    return [e, {}];
  const n = t.reduce((o, a) => a in e ? { ...o, [a]: e[a] } : o, {});
  return r ? [Object.keys(e).filter((a) => !t.includes(a)).reduce((a, s) => ({ ...a, [s]: e[s] }), {}), n] : [e, n];
}, u1 = {
  default: "bg-default text-default-foreground",
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  success: "bg-success text-success-foreground",
  warning: "bg-warning text-warning-foreground",
  danger: "bg-danger text-danger-foreground",
  foreground: "bg-foreground text-background"
}, f1 = {
  default: "shadow-lg shadow-default/50 bg-default text-default-foreground",
  primary: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
  secondary: "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
  success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
  warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
  danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground"
}, p1 = {
  default: "bg-transparent border-default text-foreground",
  primary: "bg-transparent border-primary text-primary",
  secondary: "bg-transparent border-secondary text-secondary",
  success: "bg-transparent border-success text-success",
  warning: "bg-transparent border-warning text-warning",
  danger: "bg-transparent border-danger text-danger"
}, g1 = {
  default: "bg-default/40 text-default-700",
  primary: "bg-primary/20 text-primary-600",
  secondary: "bg-secondary/20 text-secondary-600",
  success: "bg-success/20 text-success-700 dark:text-success",
  warning: "bg-warning/20 text-warning-700 dark:text-warning",
  danger: "bg-danger/20 text-danger-600 dark:text-danger-500"
}, m1 = {
  default: "border-default bg-default-100 text-default-foreground",
  primary: "border-default bg-default-100 text-primary",
  secondary: "border-default bg-default-100 text-secondary",
  success: "border-default bg-default-100 text-success",
  warning: "border-default bg-default-100 text-warning",
  danger: "border-default bg-default-100 text-danger"
}, b1 = {
  default: "bg-transparent text-default-foreground",
  primary: "bg-transparent text-primary",
  secondary: "bg-transparent text-secondary",
  success: "bg-transparent text-success",
  warning: "bg-transparent text-warning",
  danger: "bg-transparent text-danger"
}, $1 = {
  default: "border-default text-default-foreground",
  primary: "border-primary text-primary",
  secondary: "border-secondary text-secondary",
  success: "border-success text-success",
  warning: "border-warning text-warning",
  danger: "border-danger text-danger"
}, se = {
  solid: u1,
  shadow: f1,
  bordered: p1,
  flat: g1,
  faded: m1,
  light: b1,
  ghost: $1
}, h1 = {
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
}, v1 = {
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
}, y1 = {
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
}, x1 = {
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
}, $t = "250ms", w1 = {
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
}, k1 = {
  ...v1,
  ...w1,
  ...y1,
  ...x1,
  ...h1
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
    transition: Object.keys(k1).filter((e) => e.includes(".transition")).map((e) => e.replace(".", ""))
    // remove the dot from the key, .transition-background -> transition-background
  }
}, E1 = /\s+/g, co = (e) => typeof e != "string" || !e ? e : e.replace(E1, " ").trim(), un = (...e) => {
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
}, N1 = (e, t) => {
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
}, $l = (...e) => {
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
      Array.isArray(o) || Array.isArray(a) ? r[n] = $l(a, o) : typeof o == "object" && typeof a == "object" && o && a ? r[n] = uo(o, a) : r[n] = a + " " + o;
    } else r[n] = o;
  }
  for (let n in t) n in e || (r[n] = t[n]);
  return r;
}, P1 = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 };
function T1() {
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
var Ct = T1(), S1 = (e) => {
  let t = (r, n) => {
    let { extend: o = null, slots: a = {}, variants: s = {}, compoundVariants: i = [], compoundSlots: d = [], defaultVariants: u = {} } = r, c = { ...P1, ...n }, f = o != null && o.base ? un(o.base, r == null ? void 0 : r.base) : r == null ? void 0 : r.base, b = o != null && o.variants && !tt(o.variants) ? uo(s, o.variants) : s, p = o != null && o.defaultVariants && !tt(o.defaultVariants) ? { ...o.defaultVariants, ...u } : u;
    !tt(c.twMergeConfig) && !N1(c.twMergeConfig, Ct.cachedTwMergeConfig) && (Ct.didTwMergeConfigChange = !0, Ct.cachedTwMergeConfig = c.twMergeConfig);
    let h = tt(o == null ? void 0 : o.slots), w = tt(a) ? {} : { base: un(r == null ? void 0 : r.base, h && (o == null ? void 0 : o.base)), ...a }, k = h ? w : ds({ ...o == null ? void 0 : o.slots }, tt(w) ? { base: r == null ? void 0 : r.base } : w), P = tt(o == null ? void 0 : o.compoundVariants) ? i : $l(o == null ? void 0 : o.compoundVariants, i), y = (S) => {
      if (tt(b) && tt(a) && h) return e(f, S == null ? void 0 : S.class, S == null ? void 0 : S.className)(c);
      if (P && !Array.isArray(P)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof P}`);
      if (d && !Array.isArray(d)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof d}`);
      let O = (N, I, m = [], v) => {
        let E = m;
        if (typeof I == "string") {
          let C = co(I).split(" ");
          for (let Y = 0; Y < C.length; Y++) E.push(`${N}:${C[Y]}`);
        } else if (Array.isArray(I)) for (let C = 0; C < I.length; C++) E.push(`${N}:${I[C]}`);
        else if (typeof I == "object" && typeof v == "string" && v in I) {
          let C = I[v];
          if (C && typeof C == "string") {
            let Y = co(C).split(" "), F = [];
            for (let V = 0; V < Y.length; V++) F.push(`${N}:${Y[V]}`);
            E[v] = E[v] ? E[v].concat(F) : F;
          } else if (Array.isArray(C) && C.length > 0) {
            let Y = [];
            for (let F = 0; F < C.length; F++) Y.push(`${N}:${C[F]}`);
            E[v] = Y;
          }
        }
        return E;
      }, D = (N, I = b, m = null, v = null) => {
        let E = I[N];
        if (!E || tt(E)) return null;
        let C = (v == null ? void 0 : v[N]) ?? (S == null ? void 0 : S[N]);
        if (C === null) return null;
        let Y = ls(C), F = Array.isArray(c.responsiveVariants) && c.responsiveVariants.length > 0 || c.responsiveVariants === !0, V = p == null ? void 0 : p[N], K = [];
        if (typeof Y == "object" && F) for (let [X, R] of Object.entries(Y)) {
          let W = E[R];
          if (X === "initial") {
            V = R;
            continue;
          }
          Array.isArray(c.responsiveVariants) && !c.responsiveVariants.includes(X) || (K = O(X, W, K, m));
        }
        let L = Y != null && typeof Y != "object" ? Y : ls(V), G = E[L || "false"];
        return typeof K == "object" && typeof m == "string" && K[m] ? ds(K, G) : K.length > 0 ? (K.push(G), m === "base" ? K.join(" ") : K) : G;
      }, U = () => {
        if (!b) return null;
        let N = Object.keys(b), I = [];
        for (let m = 0; m < N.length; m++) {
          let v = D(N[m], b);
          v && I.push(v);
        }
        return I;
      }, A = (N, I) => {
        if (!b || typeof b != "object") return null;
        let m = [];
        for (let v in b) {
          let E = D(v, b, N, I), C = N === "base" && typeof E == "string" ? E : E && E[N];
          C && m.push(C);
        }
        return m;
      }, _ = {};
      for (let N in S) {
        let I = S[N];
        I !== void 0 && (_[N] = I);
      }
      let z = (N, I) => {
        var v;
        let m = typeof (S == null ? void 0 : S[N]) == "object" ? { [N]: (v = S[N]) == null ? void 0 : v.initial } : {};
        return { ...p, ..._, ...m, ...I };
      }, g = (N = [], I) => {
        let m = [], v = N.length;
        for (let E = 0; E < v; E++) {
          let { class: C, className: Y, ...F } = N[E], V = !0, K = z(null, I);
          for (let L in F) {
            let G = F[L], X = K[L];
            if (Array.isArray(G)) {
              if (!G.includes(X)) {
                V = !1;
                break;
              }
            } else {
              if ((G == null || G === !1) && (X == null || X === !1)) continue;
              if (X !== G) {
                V = !1;
                break;
              }
            }
          }
          V && (C && m.push(C), Y && m.push(Y));
        }
        return m;
      }, T = (N) => {
        let I = g(P, N);
        if (!Array.isArray(I)) return I;
        let m = {}, v = e;
        for (let E = 0; E < I.length; E++) {
          let C = I[E];
          if (typeof C == "string") m.base = v(m.base, C)(c);
          else if (typeof C == "object") for (let Y in C) m[Y] = v(m[Y], C[Y])(c);
        }
        return m;
      }, $ = (N) => {
        if (d.length < 1) return null;
        let I = {}, m = z(null, N);
        for (let v = 0; v < d.length; v++) {
          let { slots: E = [], class: C, className: Y, ...F } = d[v];
          if (!tt(F)) {
            let V = !0;
            for (let K in F) {
              let L = m[K], G = F[K];
              if (L === void 0 || (Array.isArray(G) ? !G.includes(L) : G !== L)) {
                V = !1;
                break;
              }
            }
            if (!V) continue;
          }
          for (let V = 0; V < E.length; V++) {
            let K = E[V];
            I[K] || (I[K] = []), I[K].push([C, Y]);
          }
        }
        return I;
      };
      if (!tt(a) || !h) {
        let N = {};
        if (typeof k == "object" && !tt(k)) {
          let I = e;
          for (let m in k) N[m] = (v) => {
            let E = T(v), C = $(v);
            return I(k[m], A(m, v), E ? E[m] : void 0, C ? C[m] : void 0, v == null ? void 0 : v.class, v == null ? void 0 : v.className)(c);
          };
        }
        return N;
      }
      return e(f, U(), g(P), S == null ? void 0 : S.class, S == null ? void 0 : S.className)(c);
    }, j = () => {
      if (!(!b || typeof b != "object")) return Object.keys(b);
    };
    return y.variantKeys = j(), y.extend = o, y.base = f, y.slots = k, y.variants = b, y.defaultVariants = p, y.compoundSlots = d, y.compoundVariants = P, y;
  };
  return { tv: t, createTV: (r) => (n, o) => t(n, o ? uo(r, o) : r) };
};
const Vo = "-", C1 = (e) => {
  const t = I1(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(Vo);
      return i[0] === "" && i.length !== 1 && i.shift(), hl(i, t) || j1(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const d = r[s] || [];
      return i && n[s] ? [...d, ...n[s]] : d;
    }
  };
}, hl = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? hl(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Vo);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}, cs = /^\[(.+)\]$/, j1 = (e) => {
  if (cs.test(e)) {
    const t = cs.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, I1 = (e) => {
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
      if (O1(o)) {
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
  return t.split(Vo).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, O1 = (e) => e.isThemeGetter, A1 = (e) => {
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
}, po = "!", go = ":", _1 = go.length, R1 = (e) => {
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
        if (w === go) {
          a.push(o.slice(d, h)), d = h + _1;
          continue;
        }
        if (w === "/") {
          u = h;
          continue;
        }
      }
      w === "[" ? s++ : w === "]" ? s-- : w === "(" ? i++ : w === ")" && i--;
    }
    const c = a.length === 0 ? o : o.substring(d), f = L1(c), b = f !== c, p = u && u > d ? u - d : void 0;
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
}, L1 = (e) => e.endsWith(po) ? e.substring(0, e.length - 1) : e.startsWith(po) ? e.substring(1) : e, M1 = (e) => {
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
}, F1 = (e) => ({
  cache: A1(e.cacheSize),
  parseClassName: R1(e),
  sortModifiers: M1(e),
  ...C1(e)
}), D1 = /\s+/, z1 = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, s = [], i = e.trim().split(D1);
  let d = "";
  for (let u = i.length - 1; u >= 0; u -= 1) {
    const c = i[u], {
      isExternal: f,
      modifiers: b,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: w
    } = r(c);
    if (f) {
      d = c + (d.length > 0 ? " " + d : d);
      continue;
    }
    let k = !!w, P = n(k ? h.substring(0, w) : h);
    if (!P) {
      if (!k) {
        d = c + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (P = n(h), !P) {
        d = c + (d.length > 0 ? " " + d : d);
        continue;
      }
      k = !1;
    }
    const y = a(b).join(":"), j = p ? y + po : y, S = j + P;
    if (s.includes(S))
      continue;
    s.push(S);
    const O = o(P, k);
    for (let D = 0; D < O.length; ++D) {
      const U = O[D];
      s.push(j + U);
    }
    d = c + (d.length > 0 ? " " + d : d);
  }
  return d;
};
function G1() {
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
    return r = F1(u), n = r.cache.get, o = r.cache.set, a = i, i(d);
  }
  function i(d) {
    const u = n(d);
    if (u)
      return u;
    const c = z1(d, r);
    return o(d, c), c;
  }
  return function() {
    return a(G1.apply(null, arguments));
  };
}
const ze = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, yl = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, xl = /^\((?:(\w[\w-]*):)?(.+)\)$/i, V1 = /^\d+\/\d+$/, B1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, H1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, U1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, W1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, K1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, tr = (e) => V1.test(e), ge = (e) => !!e && !Number.isNaN(Number(e)), Lt = (e) => !!e && Number.isInteger(Number(e)), Fn = (e) => e.endsWith("%") && ge(e.slice(0, -1)), Pt = (e) => B1.test(e), Y1 = () => !0, X1 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  H1.test(e) && !U1.test(e)
), wl = () => !1, Z1 = (e) => W1.test(e), q1 = (e) => K1.test(e), J1 = (e) => !J(e) && !Q(e), Q1 = (e) => gr(e, Nl, wl), J = (e) => yl.test(e), Ut = (e) => gr(e, Pl, X1), Dn = (e) => gr(e, og, ge), fs = (e) => gr(e, kl, wl), eg = (e) => gr(e, El, q1), Xr = (e) => gr(e, Tl, Z1), Q = (e) => xl.test(e), xr = (e) => mr(e, Pl), tg = (e) => mr(e, ag), ps = (e) => mr(e, kl), rg = (e) => mr(e, Nl), ng = (e) => mr(e, El), Zr = (e) => mr(e, Tl, !0), gr = (e, t, r) => {
  const n = yl.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, mr = (e, t, r = !1) => {
  const n = xl.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, kl = (e) => e === "position" || e === "percentage", El = (e) => e === "image" || e === "url", Nl = (e) => e === "length" || e === "size" || e === "bg-size", Pl = (e) => e === "length", og = (e) => e === "number", ag = (e) => e === "family-name", Tl = (e) => e === "shadow", bo = () => {
  const e = ze("color"), t = ze("font"), r = ze("text"), n = ze("font-weight"), o = ze("tracking"), a = ze("leading"), s = ze("breakpoint"), i = ze("container"), d = ze("spacing"), u = ze("radius"), c = ze("shadow"), f = ze("inset-shadow"), b = ze("text-shadow"), p = ze("drop-shadow"), h = ze("blur"), w = ze("perspective"), k = ze("aspect"), P = ze("ease"), y = ze("animate"), j = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
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
  ], O = () => [...S(), Q, J], D = () => ["auto", "hidden", "clip", "visible", "scroll"], U = () => ["auto", "contain", "none"], A = () => [Q, J, d], _ = () => [tr, "full", "auto", ...A()], z = () => [Lt, "none", "subgrid", Q, J], g = () => ["auto", {
    span: ["full", Lt, Q, J]
  }, Lt, Q, J], T = () => [Lt, "auto", Q, J], $ = () => ["auto", "min", "max", "fr", Q, J], N = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], I = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], m = () => ["auto", ...A()], v = () => [tr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...A()], E = () => [e, Q, J], C = () => [...S(), ps, fs, {
    position: [Q, J]
  }], Y = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], F = () => ["auto", "cover", "contain", rg, Q1, {
    size: [Q, J]
  }], V = () => [Fn, xr, Ut], K = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    Q,
    J
  ], L = () => ["", ge, xr, Ut], G = () => ["solid", "dashed", "dotted", "double"], X = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], R = () => [ge, Fn, ps, fs], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    h,
    Q,
    J
  ], fe = () => ["none", ge, Q, J], he = () => ["none", ge, Q, J], ye = () => [ge, Q, J], Ce = () => [tr, "full", ...A()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Pt],
      breakpoint: [Pt],
      color: [Y1],
      container: [Pt],
      "drop-shadow": [Pt],
      ease: ["in", "out", "in-out"],
      font: [J1],
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
        object: O()
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
        overscroll: U()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": U()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": U()
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
        inset: _()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": _()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": _()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: _()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: _()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: _()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: _()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: _()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: _()
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
        basis: [tr, "full", "auto", i, ...A()]
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
        "auto-cols": $()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": $()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: A()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": A()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": A()
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
        "justify-items": [...I(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...I()]
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
        items: [...I(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...I(), {
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
        "place-items": [...I(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...I()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: A()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: A()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: A()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: A()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: A()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: A()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: A()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: A()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: A()
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
        "space-x": A()
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
        "space-y": A()
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
        size: v()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...v()]
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
          ...v()
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
          ...v()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...v()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...v()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...v()]
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
        font: [tg, J, t]
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
          ...A()
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
        decoration: [ge, "from-font", "auto", Q, Ut]
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
        indent: A()
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
        bg: F()
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
        }, ng, eg]
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
        from: V()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: V()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: V()
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
        border: L()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": L()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": L()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": L()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": L()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": L()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": L()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": L()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": L()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": L()
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
        "divide-y": L()
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
          Zr,
          Xr
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
        "inset-shadow": ["none", f, Zr, Xr]
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
        ring: L()
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
        "ring-offset": [ge, Ut]
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
        "inset-ring": L()
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
        "text-shadow": ["none", b, Zr, Xr]
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
        "mask-linear-from": R()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": R()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": E()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": E()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": R()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": R()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": E()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": E()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": R()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": R()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": E()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": E()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": R()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": R()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": E()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": E()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": R()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": R()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": E()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": E()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": R()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": R()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": E()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": E()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": R()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": R()
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
        "mask-radial-from": R()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": R()
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
        "mask-radial-at": S()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ge]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": R()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": R()
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
        mask: F()
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
        blur: W()
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
        "drop-shadow": E()
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
        "backdrop-blur": W()
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
        "border-spacing": A()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": A()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": A()
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
        animate: ["none", y, Q, J]
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
        "perspective-origin": O()
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
        scale: he()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": he()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": he()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": he()
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
        "scroll-m": A()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": A()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": A()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": A()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": A()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": A()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": A()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": A()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": A()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": A()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": A()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": A()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": A()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": A()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": A()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": A()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": A()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": A()
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
        stroke: [ge, xr, Ut, Dn]
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
}, sg = (e, {
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
}, ig = (e, ...t) => typeof e == "function" ? mo(bo, e, ...t) : mo(() => sg(bo(), e), ...t), lg = /* @__PURE__ */ mo(bo);
var dg = (e) => tt(e) ? lg : ig({ ...e, extend: { theme: e.theme, classGroups: e.classGroups, conflictingClassGroupModifiers: e.conflictingClassGroupModifiers, conflictingClassGroups: e.conflictingClassGroups, ...e.extend } }), cg = (...e) => (t) => {
  let r = un(e);
  return !r || !t.twMerge ? r : ((!Ct.cachedTwMerge || Ct.didTwMergeConfigChange) && (Ct.didTwMergeConfigChange = !1, Ct.cachedTwMerge = dg(Ct.cachedTwMergeConfig)), Ct.cachedTwMerge(r) || void 0);
}, { tv: ug } = S1(cg), vn = (e, t) => {
  var r, n, o;
  return ug(e, {
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
        content: se.solid.foreground
      },
      primary: {
        base: "before:bg-primary",
        content: se.solid.primary
      },
      secondary: {
        base: "before:bg-secondary",
        content: se.solid.secondary
      },
      success: {
        base: "before:bg-success",
        content: se.solid.success
      },
      warning: {
        base: "before:bg-warning",
        content: se.solid.warning
      },
      danger: {
        base: "before:bg-danger",
        content: se.solid.danger
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
}), fg = vn({
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
      class: se.solid.default
    },
    {
      variant: "solid",
      color: "primary",
      class: se.solid.primary
    },
    {
      variant: "solid",
      color: "secondary",
      class: se.solid.secondary
    },
    {
      variant: "solid",
      color: "success",
      class: se.solid.success
    },
    {
      variant: "solid",
      color: "warning",
      class: se.solid.warning
    },
    {
      variant: "solid",
      color: "danger",
      class: se.solid.danger
    },
    // shadow / color
    {
      variant: "shadow",
      color: "default",
      class: se.shadow.default
    },
    {
      variant: "shadow",
      color: "primary",
      class: se.shadow.primary
    },
    {
      variant: "shadow",
      color: "secondary",
      class: se.shadow.secondary
    },
    {
      variant: "shadow",
      color: "success",
      class: se.shadow.success
    },
    {
      variant: "shadow",
      color: "warning",
      class: se.shadow.warning
    },
    {
      variant: "shadow",
      color: "danger",
      class: se.shadow.danger
    },
    // bordered / color
    {
      variant: "bordered",
      color: "default",
      class: se.bordered.default
    },
    {
      variant: "bordered",
      color: "primary",
      class: se.bordered.primary
    },
    {
      variant: "bordered",
      color: "secondary",
      class: se.bordered.secondary
    },
    {
      variant: "bordered",
      color: "success",
      class: se.bordered.success
    },
    {
      variant: "bordered",
      color: "warning",
      class: se.bordered.warning
    },
    {
      variant: "bordered",
      color: "danger",
      class: se.bordered.danger
    },
    // flat / color
    {
      variant: "flat",
      color: "default",
      class: se.flat.default
    },
    {
      variant: "flat",
      color: "primary",
      class: se.flat.primary
    },
    {
      variant: "flat",
      color: "secondary",
      class: se.flat.secondary
    },
    {
      variant: "flat",
      color: "success",
      class: se.flat.success
    },
    {
      variant: "flat",
      color: "warning",
      class: se.flat.warning
    },
    {
      variant: "flat",
      color: "danger",
      class: se.flat.danger
    },
    // faded / color
    {
      variant: "faded",
      color: "default",
      class: se.faded.default
    },
    {
      variant: "faded",
      color: "primary",
      class: se.faded.primary
    },
    {
      variant: "faded",
      color: "secondary",
      class: se.faded.secondary
    },
    {
      variant: "faded",
      color: "success",
      class: se.faded.success
    },
    {
      variant: "faded",
      color: "warning",
      class: se.faded.warning
    },
    {
      variant: "faded",
      color: "danger",
      class: se.faded.danger
    },
    // light / color
    {
      variant: "light",
      color: "default",
      class: [se.light.default, "data-[hover=true]:bg-default/40"]
    },
    {
      variant: "light",
      color: "primary",
      class: [se.light.primary, "data-[hover=true]:bg-primary/20"]
    },
    {
      variant: "light",
      color: "secondary",
      class: [se.light.secondary, "data-[hover=true]:bg-secondary/20"]
    },
    {
      variant: "light",
      color: "success",
      class: [se.light.success, "data-[hover=true]:bg-success/20"]
    },
    {
      variant: "light",
      color: "warning",
      class: [se.light.warning, "data-[hover=true]:bg-warning/20"]
    },
    {
      variant: "light",
      color: "danger",
      class: [se.light.danger, "data-[hover=true]:bg-danger/20"]
    },
    // ghost / color
    {
      variant: "ghost",
      color: "default",
      class: [se.ghost.default, "data-[hover=true]:!bg-default"]
    },
    {
      variant: "ghost",
      color: "primary",
      class: [
        se.ghost.primary,
        "data-[hover=true]:!bg-primary data-[hover=true]:!text-primary-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "secondary",
      class: [
        se.ghost.secondary,
        "data-[hover=true]:!bg-secondary data-[hover=true]:!text-secondary-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "success",
      class: [
        se.ghost.success,
        "data-[hover=true]:!bg-success data-[hover=true]:!text-success-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "warning",
      class: [
        se.ghost.warning,
        "data-[hover=true]:!bg-warning data-[hover=true]:!text-warning-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "danger",
      class: [
        se.ghost.danger,
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
}, $s = {
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
function pg(e) {
  return Ie(e);
}
var gg = (e, t, r = !0) => {
  if (!t)
    return [e, {}];
  const n = t.reduce((o, a) => a in e ? { ...o, [a]: e[a] } : o, {});
  return r ? [Object.keys(e).filter((a) => !t.includes(a)).reduce((a, s) => ({ ...a, [s]: e[s] }), {}), n] : [e, n];
}, mg = (e) => {
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
}, bg = (e) => ({
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
})[e], $g = (e, t) => {
  if (t.includes("-")) {
    const [r] = t.split("-");
    if (r.includes(e))
      return !1;
  }
  return !0;
}, hs = (e, t) => {
  if (t.includes("-")) {
    const [, r] = t.split("-");
    return `${e}-${r}`;
  }
  return e;
}, wr = /* @__PURE__ */ new WeakMap(), rt = [];
function hg(e, t = document.body) {
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
function vg(e) {
  let t = rt[rt.length - 1];
  if (t && !t.visibleNodes.has(e))
    return t.visibleNodes.add(e), () => {
      t.visibleNodes.delete(e);
    };
}
var yg = globalThis != null && globalThis.document ? Es : de, [vm, xg] = To({
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
    rel: h,
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
    rel: r === "a" ? h : void 0
  };
  let { pressProps: y, isPressed: j } = kp({
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
  }), { focusableProps: S } = Fp(e, t);
  c && (S.tabIndex = n ? -1 : S.tabIndex);
  let O = Yt(
    S,
    y,
    li(e, { labelable: !0 })
  );
  return {
    isPressed: j,
    // Used to indicate press state for visual
    buttonProps: Yt(P, O, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"]
    })
  };
}
var wg = () => import("./index-SfZMAM5z.mjs").then((e) => e.default), Il = (e) => {
  const { ripples: t = [], motionProps: r, color: n = "currentColor", style: o, onClear: a } = e;
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: t.map((s) => {
    const i = Qf(0.01 * s.size, 0.2, s.size > 100 ? 0.75 : 0.5);
    return /* @__PURE__ */ l.jsx(zn, { features: wg, children: /* @__PURE__ */ l.jsx(Ps, { mode: "popLayout", children: /* @__PURE__ */ l.jsx(
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
var kg = Il;
function Eg(e = {}) {
  const [t, r] = oe([]), n = me((a) => {
    const s = a.target, i = Math.max(s.clientWidth, s.clientHeight);
    r((d) => [
      ...d,
      {
        key: Jf(d.length.toString()),
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
function Ng(e) {
  var t, r, n, o, a, s, i, d, u;
  const c = xg(), f = So(), b = !!c, {
    ref: p,
    as: h,
    children: w,
    startContent: k,
    endContent: P,
    autoFocus: y,
    className: j,
    spinner: S,
    isLoading: O = !1,
    disableRipple: D = !1,
    fullWidth: U = (t = c == null ? void 0 : c.fullWidth) != null ? t : !1,
    radius: A = c == null ? void 0 : c.radius,
    size: _ = (r = c == null ? void 0 : c.size) != null ? r : "md",
    color: z = (n = c == null ? void 0 : c.color) != null ? n : "default",
    variant: g = (o = c == null ? void 0 : c.variant) != null ? o : "solid",
    disableAnimation: T = (s = (a = c == null ? void 0 : c.disableAnimation) != null ? a : f == null ? void 0 : f.disableAnimation) != null ? s : !1,
    isDisabled: $ = (i = c == null ? void 0 : c.isDisabled) != null ? i : !1,
    isIconOnly: N = (d = c == null ? void 0 : c.isIconOnly) != null ? d : !1,
    spinnerPlacement: I = "start",
    onPress: m,
    onClick: v,
    ...E
  } = e, C = h || "button", Y = typeof C == "string", F = ti(p), V = (u = D || (f == null ? void 0 : f.disableRipple)) != null ? u : T, { isFocusVisible: K, isFocused: L, focusProps: G } = Oi({
    autoFocus: y
  }), X = $ || O, R = Ge(
    () => fg({
      size: _,
      color: z,
      variant: g,
      radius: A,
      fullWidth: U,
      isDisabled: X,
      isInGroup: b,
      disableAnimation: T,
      isIconOnly: N,
      className: j
    }),
    [
      _,
      z,
      g,
      A,
      U,
      X,
      b,
      N,
      T,
      j
    ]
  ), { onPress: W, onClear: fe, ripples: he } = Eg(), ye = me(
    (De) => {
      V || X || T || F.current && W(De);
    },
    [V, X, T, F, W]
  ), { buttonProps: Ce, isPressed: Ze } = jl(
    {
      elementType: h,
      isDisabled: X,
      onPress: oi(m, ye),
      onClick: v,
      ...E
    },
    F
  ), { isHovered: Oe, hoverProps: Ke } = Gp({ isDisabled: X }), Ve = me(
    (De = {}) => ({
      "data-disabled": ct(X),
      "data-focus": ct(L),
      "data-pressed": ct(Ze),
      "data-focus-visible": ct(K),
      "data-hover": ct(Oe),
      "data-loading": ct(O),
      ...Ft(
        Ce,
        G,
        Ke,
        Ca(E, {
          enabled: Y
        }),
        Ca(De)
      ),
      className: R
    }),
    [
      O,
      X,
      L,
      Ze,
      Y,
      K,
      Oe,
      Ce,
      G,
      Ke,
      E,
      R
    ]
  ), at = (De) => Tr(De) ? vo(De, {
    // @ts-ignore
    "aria-hidden": !0,
    focusable: !1
  }) : null, Be = at(k), st = at(P), Qe = Ge(() => ({
    sm: "sm",
    md: "sm",
    lg: "md"
  })[_], [_]), qe = me(
    () => ({ ripples: he, onClear: fe }),
    [he, fe]
  );
  return {
    Component: C,
    children: w,
    domRef: F,
    spinner: S,
    styles: R,
    startContent: Be,
    endContent: st,
    isLoading: O,
    spinnerPlacement: I,
    spinnerSize: Qe,
    disableRipple: V,
    getButtonProps: Ve,
    getRippleProps: qe,
    isIconOnly: N
  };
}
function Pg(e) {
  var t, r;
  const [n, o] = gg(e, gs.variantKeys), a = So(), s = (r = (t = e == null ? void 0 : e.variant) != null ? t : a == null ? void 0 : a.spinnerVariant) != null ? r : "default", { children: i, className: d, classNames: u, label: c, ...f } = n, b = Ge(() => gs({ ...o }), [ni(o)]), p = nr(u == null ? void 0 : u.base, d), h = c || i, w = Ge(() => h && typeof h == "string" ? h : f["aria-label"] ? "" : "Loading", [i, h, f["aria-label"]]), k = me(
    () => ({
      "aria-label": w,
      className: b.base({
        class: p
      }),
      ...f
    }),
    [w, b, p, f]
  );
  return { label: h, slots: b, classNames: u, variant: s, getSpinnerProps: k };
}
var Ol = pg((e, t) => {
  const { slots: r, classNames: n, label: o, variant: a, getSpinnerProps: s } = Pg({ ...e });
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
var Tg = Ol, Al = ml((e, t) => {
  const {
    Component: r,
    domRef: n,
    children: o,
    spinnerSize: a,
    spinner: s = /* @__PURE__ */ l.jsx(Tg, { color: "current", size: a }),
    spinnerPlacement: i,
    startContent: d,
    endContent: u,
    isLoading: c,
    disableRipple: f,
    getButtonProps: b,
    getRippleProps: p,
    isIconOnly: h
  } = Ng({ ...e, ref: t });
  return /* @__PURE__ */ l.jsxs(r, { ref: n, ...b(), children: [
    d,
    c && i === "start" && s,
    c && h ? null : o,
    c && i === "end" && s,
    u,
    !f && /* @__PURE__ */ l.jsx(kg, { ...p() })
  ] });
});
Al.displayName = "HeroUI.Button";
var Sg = Al;
function Cg(e) {
  let [t, r] = ip(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
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
var ht = [];
function jg(e, t) {
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
    if (a && !ht.includes(t))
      return ht.push(t), () => {
        let k = ht.indexOf(t);
        k >= 0 && ht.splice(k, 1);
      };
  }, [a, t]);
  const u = () => {
    ht[ht.length - 1] === t && s && s();
  }, c = (k) => {
    (!d || d(k.target)) && (ht[ht.length - 1] === t && r && (k.stopPropagation(), k.preventDefault()), w(t) !== "pressEnd" && u());
  }, f = (k) => {
    (!d || d(k.target)) && (ht[ht.length - 1] === t && r && (k.stopPropagation(), k.preventDefault()), u());
  }, b = (k) => {
    k.key === "Escape" && !o && !k.nativeEvent.isComposing && (k.stopPropagation(), k.preventDefault(), u());
  };
  Vp({
    isDisabled: !(n && a),
    onInteractOutside: n && a ? f : void 0,
    onInteractOutsideStart: c,
    ref: t
  });
  const { focusWithinProps: p } = zo({
    isDisabled: !i,
    onBlurWithin: (k) => {
      !k.relatedTarget || Kp(k.relatedTarget) || (!d || d(k.relatedTarget)) && u();
    }
  }), h = (k) => {
    k.target === k.currentTarget && k.preventDefault();
  };
  function w(k) {
    const P = k.current;
    if (!P) return "unknown";
    const y = (P.getAttribute("role") || "").toLowerCase(), j = P.getAttribute("aria-modal");
    return (y === "dialog" || y === "alertdialog") && (j === null || j.toLowerCase() === "true") ? "pressEnd" : ["listbox", "menu", "tree", "grid", "combobox"].includes(y) ? "pressStart" : "unknown";
  }
  return {
    overlayProps: {
      onKeyDown: b,
      ...p
    },
    underlayProps: {
      onPointerDown: h
    }
  };
}
function Ig(e, t) {
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
    placement: h = "top",
    containerPadding: w,
    shouldCloseOnInteractOutside: k,
    isNonModal: P,
    isKeyboardDismissDisabled: y,
    updatePositionDeps: j = [],
    ...S
  } = e, O = P ?? !0, D = S.trigger === "SubmenuTrigger", { overlayProps: U, underlayProps: A } = jg(
    {
      isOpen: t.isOpen,
      onClose: t.close,
      shouldCloseOnBlur: b,
      isDismissable: f || D,
      isKeyboardDismissDisabled: y,
      shouldCloseOnInteractOutside: k || ((N) => {
        var I;
        return !((I = n.current) != null && I.contains(N));
      }),
      disableOutsideEvents: !O
    },
    o
  ), {
    overlayProps: _,
    arrowProps: z,
    placement: g,
    updatePosition: T,
    triggerAnchorPoint: $
  } = bp({
    ...S,
    shouldFlip: u,
    crossOffset: i,
    targetRef: n,
    overlayRef: o,
    isOpen: t.isOpen,
    scrollRef: d,
    boundaryElement: c,
    containerPadding: w,
    placement: bg(h),
    offset: a ? s + 3 : s,
    onClose: O && !D && p ? t.close : () => {
    }
  });
  return yg(() => {
    j.length && T();
  }, j), de(() => {
    var N, I;
    if (t.isOpen && o.current)
      return O ? vg((N = r == null ? void 0 : r.current) != null ? N : o.current) : hg([(I = r == null ? void 0 : r.current) != null ? I : o.current]);
  }, [O, t.isOpen, o, r]), {
    popoverProps: Ft(U, _),
    arrowProps: z,
    underlayProps: A,
    placement: g,
    triggerAnchorPoint: $
  };
}
var Og = "top";
function Ag(e) {
  var t, r, n;
  const o = So(), [a, s] = c1(e, ms.variantKeys), {
    as: i,
    ref: d,
    children: u,
    state: c,
    triggerRef: f,
    scrollRef: b,
    defaultOpen: p,
    onOpenChange: h,
    isOpen: w,
    isNonModal: k = !0,
    shouldFlip: P = !0,
    containerPadding: y = 12,
    shouldBlockScroll: j = !1,
    isDismissable: S = !0,
    shouldCloseOnBlur: O,
    portalContainer: D,
    updatePositionDeps: U,
    dialogProps: A,
    placement: _ = Og,
    triggerType: z = "dialog",
    showArrow: g = !1,
    offset: T = 7,
    crossOffset: $ = 0,
    boundaryElement: N,
    isKeyboardDismissDisabled: I,
    shouldCloseOnInteractOutside: m,
    shouldCloseOnScroll: v,
    triggerAnchorPoint: E,
    motionProps: C,
    className: Y,
    classNames: F,
    onClose: V,
    ...K
  } = a, L = i || "div", G = ti(d), X = ae(null), R = ae(!1), W = f || X, fe = (r = (t = e.disableAnimation) != null ? t : o == null ? void 0 : o.disableAnimation) != null ? r : !1, he = Cg({
    isOpen: w,
    defaultOpen: p,
    onOpenChange: (B) => {
      h == null || h(B), B || V == null || V();
    }
  }), ye = c || he, {
    popoverProps: Ce,
    underlayProps: Ze,
    placement: Oe
  } = Ig(
    {
      triggerRef: W,
      isNonModal: k,
      popoverRef: G,
      placement: _,
      offset: T,
      scrollRef: b,
      isDismissable: S,
      shouldCloseOnBlur: O,
      boundaryElement: N,
      crossOffset: $,
      shouldFlip: P,
      containerPadding: y,
      updatePositionDeps: U,
      isKeyboardDismissDisabled: I,
      shouldCloseOnScroll: v,
      shouldCloseOnInteractOutside: m,
      triggerAnchorPoint: E
    },
    ye
  ), Ke = Ge(() => Oe ? $g(Oe, _) ? Oe : _ : null, [Oe, _]), { triggerProps: Ve } = qp({ type: z }, ye, W), { isFocusVisible: at, isFocused: Be, focusProps: st } = Oi(), Qe = Ge(
    () => ms({
      ...s
    }),
    [ni(s)]
  ), qe = nr(F == null ? void 0 : F.base, Y), De = {
    "--trigger-anchor-point": E ? `${E.x}px ${E.y}px` : void 0
  };
  Qp({
    isDisabled: !(j && ye.isOpen)
  });
  const wt = (B = {}) => ({
    ref: G,
    ...Ft(Ce, K, B),
    style: Ft(Ce.style, K.style, B.style)
  }), kt = (B = {}) => ({
    // `ref` and `dialogProps` from `useDialog` are passed from props
    // if we use `useDialog` here, dialogRef won't be focused on mount
    "data-slot": "base",
    "data-open": ct(ye.isOpen),
    "data-focus": ct(Be),
    "data-arrow": ct(g),
    "data-focus-visible": ct(at),
    "data-placement": Oe ? hs(Oe, _) : void 0,
    ...Ft(st, A, B),
    className: Qe.base({ class: nr(qe) }),
    style: {
      // this prevent the dialog to have a default outline
      outline: "none",
      ...De
    }
  }), ee = me(
    (B = {}) => ({
      "data-slot": "content",
      "data-open": ct(ye.isOpen),
      "data-arrow": ct(g),
      "data-placement": Oe ? hs(Oe, _) : void 0,
      className: Qe.content({ class: nr(F == null ? void 0 : F.content, B.className) })
    }),
    [Qe, ye.isOpen, g, Ke, _, F, Oe]
  ), we = me(
    (B) => {
      var re;
      let ne;
      return B.pointerType === "touch" && ((e == null ? void 0 : e.backdrop) === "blur" || (e == null ? void 0 : e.backdrop) === "opaque") ? ne = setTimeout(() => {
        R.current = !0;
      }, 100) : R.current = !0, (re = Ve.onPress) == null || re.call(Ve, B), () => {
        clearTimeout(ne);
      };
    },
    [Ve == null ? void 0 : Ve.onPress]
  ), te = me(
    (B = {}, re = null) => {
      const { isDisabled: ne, ...pe } = B;
      return {
        "data-slot": "trigger",
        ...Ft({ "aria-haspopup": "dialog" }, Ve, pe),
        onPress: we,
        isDisabled: ne,
        className: Qe.trigger({
          class: nr(F == null ? void 0 : F.trigger, B.className),
          // apply isDisabled class names to make the trigger child disabled
          // e.g. for elements like div or HeroUI elements that don't have `isDisabled` prop
          isTriggerDisabled: ne
        }),
        ref: t0(re, W)
      };
    },
    [ye, Ve, we, W]
  ), Z = me(
    (B = {}) => ({
      "data-slot": "backdrop",
      className: Qe.backdrop({ class: F == null ? void 0 : F.backdrop }),
      onClick: (re) => {
        if (!R.current) {
          re.preventDefault();
          return;
        }
        ye.close(), R.current = !1;
      },
      ...Ze,
      ...B
    }),
    [Qe, ye.isOpen, F, Ze]
  );
  return {
    state: ye,
    Component: L,
    children: u,
    classNames: F,
    showArrow: g,
    triggerRef: W,
    placement: Ke,
    isNonModal: k,
    popoverRef: G,
    portalContainer: D,
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
function _g(e, t) {
  let { role: r = "dialog" } = e, n = R0();
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
  ]), d1(), {
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
var [Rg, _l] = To({
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
    isNonModal: h,
    onClose: w
  } = _l(), k = ae(null), { dialogProps: P, titleProps: y } = _g({}, k), j = f({
    ref: k,
    ...P,
    ...o
  }), S = t || a || "div", O = r && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    !h && /* @__PURE__ */ l.jsx(ss, { onDismiss: w }),
    /* @__PURE__ */ l.jsx(S, { ...j, children: /* @__PURE__ */ l.jsx("div", { ...p({ className: n }), children: typeof r == "function" ? r(y) : r }) }),
    /* @__PURE__ */ l.jsx(ss, { onDismiss: w })
  ] }), D = Ge(() => i === "transparent" ? null : u ? /* @__PURE__ */ l.jsx("div", { ...b() }) : /* @__PURE__ */ l.jsx(zn, { features: vs, children: /* @__PURE__ */ l.jsx(
    Gn.div,
    {
      animate: "enter",
      exit: "exit",
      initial: "exit",
      variants: $s.fade,
      ...b()
    }
  ) }), [i, u, b]), U = s ? mg(s === "center" ? "top" : s) : void 0, A = /* @__PURE__ */ l.jsx(l.Fragment, { children: u ? O : /* @__PURE__ */ l.jsx(zn, { features: vs, children: /* @__PURE__ */ l.jsx(
    Gn.div,
    {
      animate: "enter",
      exit: "exit",
      initial: "initial",
      style: U,
      variants: $s.scaleSpringOpacity,
      ...d,
      children: O
    }
  ) }) });
  return /* @__PURE__ */ l.jsxs("div", { ...c(), children: [
    D,
    A
  ] });
};
Rl.displayName = "HeroUI.PopoverContent";
var Lg = Rl, Ll = (e) => {
  var t;
  const { triggerRef: r, getTriggerProps: n } = _l(), { children: o, ...a } = e, s = Ge(() => typeof o == "string" ? /* @__PURE__ */ l.jsx("p", { children: o }) : Cr.only(o), [o]), i = (t = s.props.ref) != null ? t : s.ref, { onPress: d, isDisabled: u, ...c } = Ge(() => n(Ft(a, s.props), i), [n, s.props, a, i]), [, f] = r0(o, Sg), { buttonProps: b } = jl({ onPress: d, isDisabled: u }, r), p = Ge(() => (f == null ? void 0 : f[0]) !== void 0, [f]);
  return p || delete c.preventFocusOnPress, vo(
    s,
    Ft(c, p ? { onPress: d, isDisabled: u } : b)
  );
};
Ll.displayName = "HeroUI.PopoverTrigger";
var Mg = Ll, Ml = ml((e, t) => {
  const { children: r, ...n } = e, o = Ag({ ...n, ref: t }), [a, s] = Cr.toArray(r), i = /* @__PURE__ */ l.jsx(l1, { portalContainer: o.portalContainer, children: s });
  return /* @__PURE__ */ l.jsxs(Rg, { value: o, children: [
    a,
    o.disableAnimation && o.isOpen ? i : /* @__PURE__ */ l.jsx(Ps, { children: o.isOpen ? i : null })
  ] });
});
Ml.displayName = "HeroUI.Popover";
var Fg = Ml;
const Dg = Fe("border bg-popover text-popover-foreground", {
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
}), ym = ({
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
  offset: h = 7,
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
  }[a] || "", y = () => {
    switch (b) {
      case "blur":
        return "blur";
      case "dark":
        return "opaque";
      case "transparent":
      default:
        return "transparent";
    }
  }, j = P(), S = k(), O = y(), D = {
    placement: r,
    showArrow: n,
    color: S,
    radius: i,
    shadow: d,
    isOpen: c,
    onOpenChange: f,
    backdrop: O,
    disableAnimation: p,
    offset: h,
    isDismissable: w
  };
  return Object.keys(D).forEach((U) => {
    D[U] === void 0 && delete D[U];
  }), /* @__PURE__ */ l.jsxs(Fg, { ...D, children: [
    /* @__PURE__ */ l.jsx(Mg, { children: t }),
    /* @__PURE__ */ l.jsx(
      Lg,
      {
        className: M(
          Dg({ variant: o, color: a, shadow: d, rounded: i }),
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
}, zg = Fe("flex items-center text-sm", {
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
}), Gg = Ie(
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
      className: M(zg({ variant: t, size: r }), e),
      "aria-label": "Breadcrumb",
      ...s,
      children: /* @__PURE__ */ l.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: n.map((d, u) => {
        const c = u === n.length - 1, f = c && a;
        return /* @__PURE__ */ l.jsxs(
          "li",
          {
            className: M(
              "flex items-center gap-1.5",
              f && "text-primary font-medium"
            ),
            children: [
              d.icon && /* @__PURE__ */ l.jsx(
                ue,
                {
                  icon: d.icon,
                  className: M(
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
                  className: M(
                    "transition-colors duration-200",
                    "hover:text-primary hover:underline focus:outline-none",
                    "focus-visible:text-primary focus-visible:underline",
                    "active:text-primary-600"
                  ),
                  children: /* @__PURE__ */ l.jsx("span", { className: "truncate max-w-[200px] inline-block align-bottom", children: d.label })
                }
              ) : /* @__PURE__ */ l.jsx("span", { className: M(
                "truncate max-w-[200px] inline-block",
                f && "text-primary"
              ), children: d.label }),
              !c && /* @__PURE__ */ l.jsx("span", { className: M(
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
Gg.displayName = "Breadcrumbs";
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
}, Vg = ({
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
        className: M(
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
              className: M(
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
        className: M("p-3", {
          [a.stripe]: i % 2 !== 0,
          "bg-white": i % 2 === 0
        }),
        children: o.map((d, u) => {
          const c = () => {
            var b;
            if (!d.sticky || d.stickyPosition !== "left") return 0;
            let f = 0;
            for (let p = 0; p < u; p++) {
              const h = o[p];
              if (h.sticky && h.stickyPosition === "left") {
                const w = typeof h.width == "number" ? h.width : parseInt(((b = h.width) == null ? void 0 : b.toString()) || "0") || 0;
                f += w;
              }
            }
            return f;
          };
          return /* @__PURE__ */ l.jsx(
            "td",
            {
              className: M(
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
              children: /* @__PURE__ */ l.jsx(pc, { className: "h-10 w-full rounded-md" })
            },
            `${i}-${u}`
          );
        })
      },
      i
    )) })
  ] }) }) });
}, xm = ({
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
  onRowClick: h,
  showPagination: w = !1,
  variant: k = "primary",
  meta: P = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [y, j] = oe(() => {
    const z = e.find((g) => g.sortable && g.sort);
    return z ? [
      {
        id: z.accessorKey.toString(),
        desc: z.sort === "desc"
      }
    ] : [];
  }), [S, O] = oe(!1);
  de(() => {
    const z = () => O(window.innerWidth < 768);
    return z(), window.addEventListener("resize", z), () => window.removeEventListener("resize", z);
  }, []);
  const D = ie.useMemo(() => {
    const z = e.map((g) => ({
      accessorKey: g.accessorKey,
      header: g.label,
      enableSorting: !!g.sortable,
      cell: g.render ? ({ row: T }) => {
        var $;
        return ($ = g.render) == null ? void 0 : $.call(g, T.original[g.accessorKey], T.original, T.index);
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
  }, [e, u, c, P]), U = Ql({
    data: t,
    columns: D,
    state: {
      sorting: y
    },
    onSortingChange: (z) => {
      const g = typeof z == "function" ? z(y) : z;
      j(g), g.length > 0 ? p == null || p(g[0].desc ? "desc" : "asc", g[0].id) : p == null || p("", "");
    },
    getCoreRowModel: rd(),
    getSortedRowModel: td(),
    getPaginationRowModel: ed(),
    manualPagination: !0,
    pageCount: P.total_page
  }), A = Fl(k);
  if (i)
    return d || /* @__PURE__ */ l.jsx(
      Vg,
      {
        schema: e,
        variant: k,
        showIndexSticky: c,
        isMobile: S
      }
    );
  const _ = (z, g, T) => {
    const $ = z.target;
    $.tagName === "BUTTON" || $.tagName === "A" || $.tagName === "INPUT" || $.tagName === "SELECT" || $.closest("button") !== null || $.closest("a") !== null || $.closest("input") !== null || $.closest("select") !== null || h == null || h(g, T);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "bg-white rounded-md flex flex-col h-full max-h-[600px]", children: [
    /* @__PURE__ */ l.jsx("div", { className: "p-0 w-full overflow-auto rounded-t-md [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full flex-1", children: /* @__PURE__ */ l.jsxs(
      "table",
      {
        className: M(
          "w-full border-spacing-0 border-separate min-w-full",
          r
        ),
        children: [
          /* @__PURE__ */ l.jsx(
            "thead",
            {
              className: M(
                "border-2 sticky top-0 z-20 rounded-t-md",
                A.border
              ),
              children: U.getHeaderGroups().map((z) => /* @__PURE__ */ l.jsx("tr", { children: z.headers.map(
                (g, T) => {
                  const $ = g.column.columnDef.meta, N = () => {
                    var m;
                    if (S || !($ != null && $.sticky) || $.stickyPosition !== "left") return 0;
                    let I = 0;
                    for (let v = 0; v < T; v++) {
                      const C = z.headers[v].column.columnDef.meta;
                      if (C != null && C.sticky && C.stickyPosition === "left") {
                        const Y = typeof C.width == "number" ? C.width : parseInt(((m = C.width) == null ? void 0 : m.toString()) || "0") || 0;
                        I += Y;
                      }
                    }
                    return I;
                  };
                  return /* @__PURE__ */ l.jsx(
                    "th",
                    {
                      className: M(
                        "text-sm text-wrap border-y p-4",
                        A.header,
                        {
                          "cursor-pointer": g.column.getCanSort(),
                          "rounded-tl-md": T === 0,
                          "rounded-tr-md": T === z.headers.length - 1,
                          "text-left": ($ == null ? void 0 : $.align) === "left",
                          "text-center": ($ == null ? void 0 : $.align) === "center",
                          "text-right": ($ == null ? void 0 : $.align) === "right",
                          "sticky z-5": !S && ($ == null ? void 0 : $.sticky),
                          "left-0": !S && ($ == null ? void 0 : $.sticky) && $.stickyPosition === "left",
                          "right-0": !S && ($ == null ? void 0 : $.sticky) && $.stickyPosition === "right"
                        },
                        n
                      ),
                      style: {
                        width: typeof ($ == null ? void 0 : $.width) == "number" ? `${$.width}px` : $ == null ? void 0 : $.width,
                        minWidth: typeof ($ == null ? void 0 : $.width) == "number" ? `${$.width}px` : $ == null ? void 0 : $.width,
                        left: !S && ($ != null && $.sticky) && $.stickyPosition === "left" ? `${N()}px` : void 0
                      },
                      onClick: g.column.getCanSort() ? g.column.getToggleSortingHandler() : void 0,
                      children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ l.jsx(
                          "span",
                          {
                            className: M({
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
                            className: M("h-4 w-4", {
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
          /* @__PURE__ */ l.jsx("tbody", { children: U.getRowModel().rows.length === 0 ? /* @__PURE__ */ l.jsx("tr", { children: /* @__PURE__ */ l.jsx(
            "td",
            {
              colSpan: U.getAllColumns().length,
              className: M(
                "text-center border h-full w-full rounded-b-md"
              ),
              children: s || /* @__PURE__ */ l.jsxs("div", { className: "flex mx-auto w-full text-center justify-center gap-3 items-center", children: [
                /* @__PURE__ */ l.jsx("p", { children: "Data Not Found" }),
                /* @__PURE__ */ l.jsx(ue, { icon: "mdi:face-frown-open", size: 34 })
              ] })
            }
          ) }) : U.getRowModel().rows.map((z, g) => /* @__PURE__ */ l.jsx(
            "tr",
            {
              className: M(
                "p-3 group",
                A.row,
                {
                  [A.stripe]: g % 2 !== 0,
                  "bg-white": g % 2 === 0,
                  "cursor-pointer": h
                },
                o
              ),
              onClick: (T) => _(T, z.original, g),
              children: z.getVisibleCells().map((T) => {
                const $ = T.column.columnDef.meta, N = () => {
                  var E;
                  if (S || !($ != null && $.sticky) || $.stickyPosition !== "left") return 0;
                  let I = 0;
                  const m = U.getAllColumns(), v = m.findIndex((C) => C.id === T.column.id);
                  for (let C = 0; C < v; C++) {
                    const F = m[C].columnDef.meta;
                    if (F != null && F.sticky && F.stickyPosition === "left") {
                      const V = typeof F.width == "number" ? F.width : parseInt(((E = F.width) == null ? void 0 : E.toString()) || "0") || 0;
                      I += V;
                    }
                  }
                  return I;
                };
                return /* @__PURE__ */ l.jsx(
                  "td",
                  {
                    className: M(
                      "px-4 py-3 text-sm text-gray-900",
                      {
                        "text-left": ($ == null ? void 0 : $.align) === "left",
                        "text-center": ($ == null ? void 0 : $.align) === "center",
                        "text-right": ($ == null ? void 0 : $.align) === "right",
                        "sticky z-5": !S && ($ == null ? void 0 : $.sticky),
                        "left-0": !S && ($ == null ? void 0 : $.sticky) && $.stickyPosition === "left",
                        "right-0": !S && ($ == null ? void 0 : $.sticky) && $.stickyPosition === "right",
                        // Ensure sticky columns have solid background that matches row
                        "bg-white": !S && ($ == null ? void 0 : $.sticky) && g % 2 === 0,
                        [A.stripe]: !S && ($ == null ? void 0 : $.sticky) && g % 2 !== 0,
                        [A.hoverStripe]: !S && ($ == null ? void 0 : $.sticky)
                      },
                      a
                    ),
                    style: {
                      width: typeof ($ == null ? void 0 : $.width) == "number" ? `${$.width}px` : $ == null ? void 0 : $.width,
                      minWidth: typeof ($ == null ? void 0 : $.width) == "number" ? `${$.width}px` : $ == null ? void 0 : $.width,
                      left: !S && ($ != null && $.sticky) && $.stickyPosition === "left" ? `${N()}px` : void 0
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
      dc,
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
}, Bg = {
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
        className: M(
          "flex",
          o ? "items-start gap-3 p-4" : "items-center gap-2 py-2.5 px-3",
          "border border-gray-200",
          Bg[r],
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
              className: M(
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
                className: M("text-sm font-medium leading-5", {
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
                className: M(n ? "mt-1" : "", "text-sm leading-5", {
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
              className: M(
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
              children: /* @__PURE__ */ l.jsx(ue, { icon: "mdi:close", className: M(o ? "h-5 w-5" : "h-4 w-4") })
            }
          )
        ]
      }
    );
  }
);
Dl.displayName = "Toast";
const $o = Ns(void 0), Hg = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, wm = ({ children: e }) => {
  const [t, r] = oe([]), n = me((i) => {
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
  }), s = We();
  return "body" in s ? /* @__PURE__ */ l.jsxs($o.Provider, { value: { showToast: o, removeToast: n }, children: [
    e,
    Gt(
      /* @__PURE__ */ l.jsx(l.Fragment, { children: Object.entries(a).map(([i, d]) => /* @__PURE__ */ l.jsx(
        "div",
        {
          className: M(
            "fixed z-[100] flex flex-col gap-2 min-w-[320px] max-w-[420px]",
            Hg[i],
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
  ] }) : /* @__PURE__ */ l.jsx($o.Provider, { value: { showToast: o, removeToast: n }, children: e });
}, km = () => {
  const e = xt($o);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, Ug = {
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
}, Wg = {
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
  ...Ug,
  ...zl
}, xs = {
  image: "https://design-system-eaip.onrender.com/img/error.svg",
  message: "An unexpected error occurred. Our team is currently investigating the issue."
}, ws = (e) => typeof e == "object" && e !== null && ("code" in e || "message" in e), Em = ({
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
      const f = Wg[o];
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
}, Kg = Fe(
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
), Yg = Ie(
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
    numericOnly: h = !0,
    onComplete: w,
    onChange: k,
    onSubmit: P,
    value: y,
    defaultValue: j = "",
    disabled: S = !1,
    autoFocus: O = !1,
    ...D
  }, U) => {
    const [A, _] = oe(j || ""), z = ae([]);
    de(() => {
      y !== void 0 && _(y);
    }, [y]);
    const g = y !== void 0, T = g ? y : A, $ = (F) => {
      g || _(F), k == null || k(F), F.length === p && (w == null || w(F), c || P == null || P(F));
    }, N = (F) => (V) => {
      z.current[F] = V;
    }, I = (F) => {
      F.target.select();
    }, m = (F, V) => {
      var R;
      const K = F.target.value;
      let L = "";
      if (K.length >= 1)
        L = K.slice(-1);
      else if (K.length === 0) {
        const W = T.split("");
        W[V] = "", $(W.join(""));
        return;
      }
      if (h && !/^\d$/.test(L))
        return;
      const G = T.split("");
      for (; G.length <= V; )
        G.push("");
      G[V] = L;
      const X = G.join("");
      $(X), V < p - 1 && L && ((R = z.current[V + 1]) == null || R.focus());
    }, v = (F, V) => {
      var K, L, G;
      if (F.key === "Backspace") {
        const X = T.split("");
        T[V] ? (F.preventDefault(), X[V] = "", $(X.join(""))) : V > 0 && (F.preventDefault(), X[V - 1] = "", $(X.join("")), (K = z.current[V - 1]) == null || K.focus());
      } else if (F.key === "Delete") {
        if (T[V]) {
          F.preventDefault();
          const X = T.split("");
          X[V] = "", $(X.join(""));
        }
      } else if (F.key === "ArrowLeft" && V > 0)
        F.preventDefault(), (L = z.current[V - 1]) == null || L.focus();
      else if (F.key === "ArrowRight" && V < p - 1)
        F.preventDefault(), (G = z.current[V + 1]) == null || G.focus();
      else if (!F.ctrlKey && !F.altKey && !F.metaKey && F.key.length === 1 && h && !/^\d$/.test(F.key)) {
        F.preventDefault();
        return;
      }
    }, E = (F) => {
      var X;
      F.preventDefault();
      const V = F.clipboardData.getData("text/plain").trim();
      if (h && !/^\d+$/.test(V))
        return;
      const L = V.slice(0, p).padEnd(T.length, "").slice(0, p);
      $(L);
      const G = L.length < p ? L.length : p - 1;
      (X = z.current[G]) == null || X.focus();
    }, C = () => {
      T.length === p && (P == null || P(T));
    }, Y = T.split("").concat(Array(p - T.length).fill(""));
    return /* @__PURE__ */ l.jsxs("div", { ref: U, className: M("w-full", e), ...D, children: [
      i && /* @__PURE__ */ l.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        i,
        u && /* @__PURE__ */ l.jsx("span", { className: "text-danger ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ l.jsx("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: p }).map((F, V) => /* @__PURE__ */ l.jsx(
          "input",
          {
            ref: N(V),
            type: h ? "tel" : "text",
            inputMode: h ? "numeric" : "text",
            maxLength: 1,
            value: Y[V] || "",
            onChange: (K) => m(K, V),
            onKeyDown: (K) => v(K, V),
            onPaste: V === 0 ? E : void 0,
            onFocus: I,
            disabled: S,
            autoFocus: O && V === 0,
            className: M(
              Kg({
                variant: o ? "error" : t,
                size: r,
                rounded: n
              })
            ),
            "aria-invalid": o
          },
          V
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
Yg.displayName = "InputOTP";
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
}, Nm = ({
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
  return /* @__PURE__ */ l.jsxs("div", { className: M("relative inline-block", t), children: [
    a || (e ? /* @__PURE__ */ l.jsx(ue, { icon: e, color: p, size: 32, ...s }) : null),
    /* @__PURE__ */ l.jsx(
      "span",
      {
        className: M(
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
}, Xg = {
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
}, Zg = {
  "flight-light": "FLIGHT_LIGHT",
  "flight-dark": "FLIGHT_DARK",
  "tixia-circular": "TIXIA-CIRCULAR",
  "tixia-linear": "TIXIA-LINEAR"
}, Qr = (e, t) => e === void 0 ? { className: t } : typeof e == "number" ? {
  className: "",
  style: { width: `${e}px`, height: `${e}px` }
} : { className: e }, Pm = ({
  variant: e,
  customImage: t,
  customMessage: r,
  width: n = "w-full",
  height: o = "h-full",
  widthImg: a = "w-auto",
  heightImg: s = "h-auto",
  className: i = ""
}) => {
  const d = Zg[e], u = Xg[d], c = Qr(n, "w-full"), f = Qr(o, "h-full"), b = Qr(a, "w-auto"), p = Qr(s, "h-auto");
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
}, qg = {
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
}, Jg = {
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
}, Tm = ({
  variant: e,
  customMessage: t,
  reload: r,
  reloadText: n = "Try Again",
  customImage: o,
  width: a,
  height: s,
  className: i = ""
}) => {
  const d = Jg[e], u = qg[d];
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
};
export {
  om as Accordion,
  Md as AutoComplete,
  am as Avatar,
  sm as Badge,
  Nm as BadgeNotif,
  Gg as Breadcrumbs,
  Ye as Button,
  Ms as Card,
  Bd as CheckBoxGroup,
  Nn as Checkbox,
  im as Chip,
  Jd as DatePicker,
  ec as Dialog,
  nc as DialogActions,
  rc as DialogBody,
  zs as DialogHeader,
  tc as DialogTitle,
  oc as Divider,
  Em as ErrorWrapper,
  lm as FileUpload,
  ue as Icon,
  Rs as Input,
  Yg as InputOTP,
  Pm as Loader,
  Tm as NegativeCase,
  dm as Notification,
  dc as Pagination,
  ei as PhoneInput,
  $m as PhoneInputDemo,
  ym as Popover,
  Hn as PrimitiveDatePicker,
  Ac as Progress,
  cc as Radio,
  fc as RadioGroup,
  Gs as Select,
  fn as SelectItem,
  pc as Skeleton,
  cm as Slider,
  um as StarRating,
  fm as StatusIndicator,
  pm as Stepper,
  gm as Switch,
  xm as Table,
  mm as Tabs,
  jr as Text,
  xc as Textarea,
  kc as TimePicker,
  Dl as Toast,
  wm as ToastProvider,
  Pc as Toggle,
  bm as Tooltip,
  Gd as buttonVariants,
  Vd as cardVariants,
  M as cn,
  Kg as inputOTPVariants,
  Ec as toggleVariants,
  km as useToast
};
