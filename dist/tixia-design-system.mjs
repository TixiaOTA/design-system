import he, { useState as te, useEffect as be, forwardRef as je, useRef as pe, useLayoutEffect as Pr, useCallback as Ge, Children as Vt, isValidElement as bt, cloneElement as Dr, createContext as Ir, useContext as Tr } from "react";
import { createPortal as He } from "react-dom";
import fe from "dayjs";
import { useReactTable as _r, getPaginationRowModel as zr, getSortedRowModel as Or, getCoreRowModel as Lr, flexRender as Ft } from "@tanstack/react-table";
var tr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var St = { exports: {} }, lt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bt;
function $r() {
  if (Bt) return lt;
  Bt = 1;
  var t = he, r = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(i, d, f) {
    var m, u = {}, x = null, g = null;
    f !== void 0 && (x = "" + f), d.key !== void 0 && (x = "" + d.key), d.ref !== void 0 && (g = d.ref);
    for (m in d) a.call(d, m) && !l.hasOwnProperty(m) && (u[m] = d[m]);
    if (i && i.defaultProps) for (m in d = i.defaultProps, d) u[m] === void 0 && (u[m] = d[m]);
    return { $$typeof: r, type: i, key: x, ref: g, props: u, _owner: n.current };
  }
  return lt.Fragment = s, lt.jsx = c, lt.jsxs = c, lt;
}
var it = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yt;
function Vr() {
  return Yt || (Yt = 1, process.env.NODE_ENV !== "production" && function() {
    var t = he, r = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), i = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), w = Symbol.iterator, p = "@@iterator";
    function b(o) {
      if (o === null || typeof o != "object")
        return null;
      var P = w && o[w] || o[p];
      return typeof P == "function" ? P : null;
    }
    var y = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(o) {
      {
        for (var P = arguments.length, F = new Array(P > 1 ? P - 1 : 0), Q = 1; Q < P; Q++)
          F[Q - 1] = arguments[Q];
        A("error", o, F);
      }
    }
    function A(o, P, F) {
      {
        var Q = y.ReactDebugCurrentFrame, de = Q.getStackAddendum();
        de !== "" && (P += "%s", F = F.concat([de]));
        var me = F.map(function(ie) {
          return String(ie);
        });
        me.unshift("Warning: " + P), Function.prototype.apply.call(console[o], console, me);
      }
    }
    var L = !1, E = !1, H = !1, Y = !1, N = !1, S;
    S = Symbol.for("react.module.reference");
    function k(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === a || o === l || N || o === n || o === f || o === m || Y || o === g || L || E || H || typeof o == "object" && o !== null && (o.$$typeof === x || o.$$typeof === u || o.$$typeof === c || o.$$typeof === i || o.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === S || o.getModuleId !== void 0));
    }
    function G(o, P, F) {
      var Q = o.displayName;
      if (Q)
        return Q;
      var de = P.displayName || P.name || "";
      return de !== "" ? F + "(" + de + ")" : F;
    }
    function R(o) {
      return o.displayName || "Context";
    }
    function C(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case a:
          return "Fragment";
        case s:
          return "Portal";
        case l:
          return "Profiler";
        case n:
          return "StrictMode";
        case f:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case i:
            var P = o;
            return R(P) + ".Consumer";
          case c:
            var F = o;
            return R(F._context) + ".Provider";
          case d:
            return G(o, o.render, "ForwardRef");
          case u:
            var Q = o.displayName || null;
            return Q !== null ? Q : C(o.type) || "Memo";
          case x: {
            var de = o, me = de._payload, ie = de._init;
            try {
              return C(ie(me));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, B = 0, D, h, I, _, oe, z, Z;
    function O() {
    }
    O.__reactDisabledLog = !0;
    function V() {
      {
        if (B === 0) {
          D = console.log, h = console.info, I = console.warn, _ = console.error, oe = console.group, z = console.groupCollapsed, Z = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: O,
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
        B++;
      }
    }
    function J() {
      {
        if (B--, B === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, o, {
              value: D
            }),
            info: $({}, o, {
              value: h
            }),
            warn: $({}, o, {
              value: I
            }),
            error: $({}, o, {
              value: _
            }),
            group: $({}, o, {
              value: oe
            }),
            groupCollapsed: $({}, o, {
              value: z
            }),
            groupEnd: $({}, o, {
              value: Z
            })
          });
        }
        B < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = y.ReactCurrentDispatcher, M;
    function X(o, P, F) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (de) {
            var Q = de.stack.trim().match(/\n( *(at )?)/);
            M = Q && Q[1] || "";
          }
        return `
` + M + o;
      }
    }
    var xe = !1, we;
    {
      var Te = typeof WeakMap == "function" ? WeakMap : Map;
      we = new Te();
    }
    function Oe(o, P) {
      if (!o || xe)
        return "";
      {
        var F = we.get(o);
        if (F !== void 0)
          return F;
      }
      var Q;
      xe = !0;
      var de = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var me;
      me = re.current, re.current = null, V();
      try {
        if (P) {
          var ie = function() {
            throw Error();
          };
          if (Object.defineProperty(ie.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ie, []);
            } catch (Ce) {
              Q = Ce;
            }
            Reflect.construct(o, [], ie);
          } else {
            try {
              ie.call();
            } catch (Ce) {
              Q = Ce;
            }
            o.call(ie.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ce) {
            Q = Ce;
          }
          o();
        }
      } catch (Ce) {
        if (Ce && Q && typeof Ce.stack == "string") {
          for (var le = Ce.stack.split(`
`), Ae = Q.stack.split(`
`), ve = le.length - 1, ye = Ae.length - 1; ve >= 1 && ye >= 0 && le[ve] !== Ae[ye]; )
            ye--;
          for (; ve >= 1 && ye >= 0; ve--, ye--)
            if (le[ve] !== Ae[ye]) {
              if (ve !== 1 || ye !== 1)
                do
                  if (ve--, ye--, ye < 0 || le[ve] !== Ae[ye]) {
                    var De = `
` + le[ve].replace(" at new ", " at ");
                    return o.displayName && De.includes("<anonymous>") && (De = De.replace("<anonymous>", o.displayName)), typeof o == "function" && we.set(o, De), De;
                  }
                while (ve >= 1 && ye >= 0);
              break;
            }
        }
      } finally {
        xe = !1, re.current = me, J(), Error.prepareStackTrace = de;
      }
      var at = o ? o.displayName || o.name : "", Xe = at ? X(at) : "";
      return typeof o == "function" && we.set(o, Xe), Xe;
    }
    function Ie(o, P, F) {
      return Oe(o, !1);
    }
    function Le(o) {
      var P = o.prototype;
      return !!(P && P.isReactComponent);
    }
    function Ee(o, P, F) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return Oe(o, Le(o));
      if (typeof o == "string")
        return X(o);
      switch (o) {
        case f:
          return X("Suspense");
        case m:
          return X("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case d:
            return Ie(o.render);
          case u:
            return Ee(o.type, P, F);
          case x: {
            var Q = o, de = Q._payload, me = Q._init;
            try {
              return Ee(me(de), P, F);
            } catch {
            }
          }
        }
      return "";
    }
    var _e = Object.prototype.hasOwnProperty, Qe = {}, Pe = y.ReactDebugCurrentFrame;
    function $e(o) {
      if (o) {
        var P = o._owner, F = Ee(o.type, o._source, P ? P.type : null);
        Pe.setExtraStackFrame(F);
      } else
        Pe.setExtraStackFrame(null);
    }
    function et(o, P, F, Q, de) {
      {
        var me = Function.call.bind(_e);
        for (var ie in o)
          if (me(o, ie)) {
            var le = void 0;
            try {
              if (typeof o[ie] != "function") {
                var Ae = Error((Q || "React class") + ": " + F + " type `" + ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[ie] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ae.name = "Invariant Violation", Ae;
              }
              le = o[ie](P, ie, Q, F, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ve) {
              le = ve;
            }
            le && !(le instanceof Error) && ($e(de), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Q || "React class", F, ie, typeof le), $e(null)), le instanceof Error && !(le.message in Qe) && (Qe[le.message] = !0, $e(de), j("Failed %s type: %s", F, le.message), $e(null));
          }
      }
    }
    var qe = Array.isArray;
    function We(o) {
      return qe(o);
    }
    function tt(o) {
      {
        var P = typeof Symbol == "function" && Symbol.toStringTag, F = P && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return F;
      }
    }
    function K(o) {
      try {
        return W(o), !1;
      } catch {
        return !0;
      }
    }
    function W(o) {
      return "" + o;
    }
    function T(o) {
      if (K(o))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tt(o)), W(o);
    }
    var q = y.ReactCurrentOwner, U = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ne, ee;
    function ue(o) {
      if (_e.call(o, "ref")) {
        var P = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Se(o) {
      if (_e.call(o, "key")) {
        var P = Object.getOwnPropertyDescriptor(o, "key").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Ze(o, P) {
      typeof o.ref == "string" && q.current;
    }
    function Je(o, P) {
      {
        var F = function() {
          ne || (ne = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        F.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: F,
          configurable: !0
        });
      }
    }
    function Ve(o, P) {
      {
        var F = function() {
          ee || (ee = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        F.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: F,
          configurable: !0
        });
      }
    }
    var rt = function(o, P, F, Q, de, me, ie) {
      var le = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: o,
        key: P,
        ref: F,
        props: ie,
        // Record the component responsible for creating this element.
        _owner: me
      };
      return le._store = {}, Object.defineProperty(le._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(le, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Q
      }), Object.defineProperty(le, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: de
      }), Object.freeze && (Object.freeze(le.props), Object.freeze(le)), le;
    };
    function gt(o, P, F, Q, de) {
      {
        var me, ie = {}, le = null, Ae = null;
        F !== void 0 && (T(F), le = "" + F), Se(P) && (T(P.key), le = "" + P.key), ue(P) && (Ae = P.ref, Ze(P, de));
        for (me in P)
          _e.call(P, me) && !U.hasOwnProperty(me) && (ie[me] = P[me]);
        if (o && o.defaultProps) {
          var ve = o.defaultProps;
          for (me in ve)
            ie[me] === void 0 && (ie[me] = ve[me]);
        }
        if (le || Ae) {
          var ye = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          le && Je(ie, ye), Ae && Ve(ie, ye);
        }
        return rt(o, le, Ae, de, Q, q.current, ie);
      }
    }
    var Fe = y.ReactCurrentOwner, It = y.ReactDebugCurrentFrame;
    function st(o) {
      if (o) {
        var P = o._owner, F = Ee(o.type, o._source, P ? P.type : null);
        It.setExtraStackFrame(F);
      } else
        It.setExtraStackFrame(null);
    }
    var pt;
    pt = !1;
    function xt(o) {
      return typeof o == "object" && o !== null && o.$$typeof === r;
    }
    function Tt() {
      {
        if (Fe.current) {
          var o = C(Fe.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function wr(o) {
      return "";
    }
    var _t = {};
    function kr(o) {
      {
        var P = Tt();
        if (!P) {
          var F = typeof o == "string" ? o : o.displayName || o.name;
          F && (P = `

Check the top-level render call using <` + F + ">.");
        }
        return P;
      }
    }
    function zt(o, P) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var F = kr(P);
        if (_t[F])
          return;
        _t[F] = !0;
        var Q = "";
        o && o._owner && o._owner !== Fe.current && (Q = " It was passed a child from " + C(o._owner.type) + "."), st(o), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', F, Q), st(null);
      }
    }
    function Ot(o, P) {
      {
        if (typeof o != "object")
          return;
        if (We(o))
          for (var F = 0; F < o.length; F++) {
            var Q = o[F];
            xt(Q) && zt(Q, P);
          }
        else if (xt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var de = b(o);
          if (typeof de == "function" && de !== o.entries)
            for (var me = de.call(o), ie; !(ie = me.next()).done; )
              xt(ie.value) && zt(ie.value, P);
        }
      }
    }
    function jr(o) {
      {
        var P = o.type;
        if (P == null || typeof P == "string")
          return;
        var F;
        if (typeof P == "function")
          F = P.propTypes;
        else if (typeof P == "object" && (P.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        P.$$typeof === u))
          F = P.propTypes;
        else
          return;
        if (F) {
          var Q = C(P);
          et(F, o.props, "prop", Q, o);
        } else if (P.PropTypes !== void 0 && !pt) {
          pt = !0;
          var de = C(P);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", de || "Unknown");
        }
        typeof P.getDefaultProps == "function" && !P.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Nr(o) {
      {
        for (var P = Object.keys(o.props), F = 0; F < P.length; F++) {
          var Q = P[F];
          if (Q !== "children" && Q !== "key") {
            st(o), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Q), st(null);
            break;
          }
        }
        o.ref !== null && (st(o), j("Invalid attribute `ref` supplied to `React.Fragment`."), st(null));
      }
    }
    var Lt = {};
    function $t(o, P, F, Q, de, me) {
      {
        var ie = k(o);
        if (!ie) {
          var le = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ae = wr();
          Ae ? le += Ae : le += Tt();
          var ve;
          o === null ? ve = "null" : We(o) ? ve = "array" : o !== void 0 && o.$$typeof === r ? (ve = "<" + (C(o.type) || "Unknown") + " />", le = " Did you accidentally export a JSX literal instead of a component?") : ve = typeof o, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ve, le);
        }
        var ye = gt(o, P, F, de, me);
        if (ye == null)
          return ye;
        if (ie) {
          var De = P.children;
          if (De !== void 0)
            if (Q)
              if (We(De)) {
                for (var at = 0; at < De.length; at++)
                  Ot(De[at], o);
                Object.freeze && Object.freeze(De);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ot(De, o);
        }
        if (_e.call(P, "key")) {
          var Xe = C(o), Ce = Object.keys(P).filter(function(Cr) {
            return Cr !== "key";
          }), ht = Ce.length > 0 ? "{key: someKey, " + Ce.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Lt[Xe + ht]) {
            var Mr = Ce.length > 0 ? "{" + Ce.join(": ..., ") + ": ...}" : "{}";
            j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ht, Xe, Mr, Xe), Lt[Xe + ht] = !0;
          }
        }
        return o === a ? Nr(ye) : jr(ye), ye;
      }
    }
    function Er(o, P, F) {
      return $t(o, P, F, !0);
    }
    function Sr(o, P, F) {
      return $t(o, P, F, !1);
    }
    var Rr = Sr, Ar = Er;
    it.Fragment = a, it.jsx = Rr, it.jsxs = Ar;
  }()), it;
}
process.env.NODE_ENV === "production" ? St.exports = $r() : St.exports = Vr();
var e = St.exports;
function sr(t) {
  var r, s, a = "";
  if (typeof t == "string" || typeof t == "number") a += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var n = t.length;
    for (r = 0; r < n; r++) t[r] && (s = sr(t[r])) && (a && (a += " "), a += s);
  } else for (s in t) t[s] && (a && (a += " "), a += s);
  return a;
}
function ce() {
  for (var t, r, s = 0, a = "", n = arguments.length; s < n; s++) (t = arguments[s]) && (r = sr(t)) && (a && (a += " "), a += r);
  return a;
}
const Pt = "-", Fr = (t) => {
  const r = Yr(t), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: a
  } = t;
  return {
    getClassGroupId: (c) => {
      const i = c.split(Pt);
      return i[0] === "" && i.length !== 1 && i.shift(), ar(i, r) || Br(c);
    },
    getConflictingClassGroupIds: (c, i) => {
      const d = s[c] || [];
      return i && a[c] ? [...d, ...a[c]] : d;
    }
  };
}, ar = (t, r) => {
  var c;
  if (t.length === 0)
    return r.classGroupId;
  const s = t[0], a = r.nextPart.get(s), n = a ? ar(t.slice(1), a) : void 0;
  if (n)
    return n;
  if (r.validators.length === 0)
    return;
  const l = t.join(Pt);
  return (c = r.validators.find(({
    validator: i
  }) => i(l))) == null ? void 0 : c.classGroupId;
}, Gt = /^\[(.+)\]$/, Br = (t) => {
  if (Gt.test(t)) {
    const r = Gt.exec(t)[1], s = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (s)
      return "arbitrary.." + s;
  }
}, Yr = (t) => {
  const {
    theme: r,
    prefix: s
  } = t, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Hr(Object.entries(t.classGroups), s).forEach(([l, c]) => {
    Rt(c, a, l, r);
  }), a;
}, Rt = (t, r, s, a) => {
  t.forEach((n) => {
    if (typeof n == "string") {
      const l = n === "" ? r : Ht(r, n);
      l.classGroupId = s;
      return;
    }
    if (typeof n == "function") {
      if (Gr(n)) {
        Rt(n(a), r, s, a);
        return;
      }
      r.validators.push({
        validator: n,
        classGroupId: s
      });
      return;
    }
    Object.entries(n).forEach(([l, c]) => {
      Rt(c, Ht(r, l), s, a);
    });
  });
}, Ht = (t, r) => {
  let s = t;
  return r.split(Pt).forEach((a) => {
    s.nextPart.has(a) || s.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), s = s.nextPart.get(a);
  }), s;
}, Gr = (t) => t.isThemeGetter, Hr = (t, r) => r ? t.map(([s, a]) => {
  const n = a.map((l) => typeof l == "string" ? r + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([c, i]) => [r + c, i])) : l);
  return [s, n];
}) : t, Wr = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, s = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  const n = (l, c) => {
    s.set(l, c), r++, r > t && (r = 0, a = s, s = /* @__PURE__ */ new Map());
  };
  return {
    get(l) {
      let c = s.get(l);
      if (c !== void 0)
        return c;
      if ((c = a.get(l)) !== void 0)
        return n(l, c), c;
    },
    set(l, c) {
      s.has(l) ? s.set(l, c) : n(l, c);
    }
  };
}, nr = "!", Ur = (t) => {
  const {
    separator: r,
    experimentalParseClassName: s
  } = t, a = r.length === 1, n = r[0], l = r.length, c = (i) => {
    const d = [];
    let f = 0, m = 0, u;
    for (let b = 0; b < i.length; b++) {
      let y = i[b];
      if (f === 0) {
        if (y === n && (a || i.slice(b, b + l) === r)) {
          d.push(i.slice(m, b)), m = b + l;
          continue;
        }
        if (y === "/") {
          u = b;
          continue;
        }
      }
      y === "[" ? f++ : y === "]" && f--;
    }
    const x = d.length === 0 ? i : i.substring(m), g = x.startsWith(nr), w = g ? x.substring(1) : x, p = u && u > m ? u - m : void 0;
    return {
      modifiers: d,
      hasImportantModifier: g,
      baseClassName: w,
      maybePostfixModifierPosition: p
    };
  };
  return s ? (i) => s({
    className: i,
    parseClassName: c
  }) : c;
}, Kr = (t) => {
  if (t.length <= 1)
    return t;
  const r = [];
  let s = [];
  return t.forEach((a) => {
    a[0] === "[" ? (r.push(...s.sort(), a), s = []) : s.push(a);
  }), r.push(...s.sort()), r;
}, qr = (t) => ({
  cache: Wr(t.cacheSize),
  parseClassName: Ur(t),
  ...Fr(t)
}), Zr = /\s+/, Jr = (t, r) => {
  const {
    parseClassName: s,
    getClassGroupId: a,
    getConflictingClassGroupIds: n
  } = r, l = [], c = t.trim().split(Zr);
  let i = "";
  for (let d = c.length - 1; d >= 0; d -= 1) {
    const f = c[d], {
      modifiers: m,
      hasImportantModifier: u,
      baseClassName: x,
      maybePostfixModifierPosition: g
    } = s(f);
    let w = !!g, p = a(w ? x.substring(0, g) : x);
    if (!p) {
      if (!w) {
        i = f + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (p = a(x), !p) {
        i = f + (i.length > 0 ? " " + i : i);
        continue;
      }
      w = !1;
    }
    const b = Kr(m).join(":"), y = u ? b + nr : b, j = y + p;
    if (l.includes(j))
      continue;
    l.push(j);
    const A = n(p, w);
    for (let L = 0; L < A.length; ++L) {
      const E = A[L];
      l.push(y + E);
    }
    i = f + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Xr() {
  let t = 0, r, s, a = "";
  for (; t < arguments.length; )
    (r = arguments[t++]) && (s = or(r)) && (a && (a += " "), a += s);
  return a;
}
const or = (t) => {
  if (typeof t == "string")
    return t;
  let r, s = "";
  for (let a = 0; a < t.length; a++)
    t[a] && (r = or(t[a])) && (s && (s += " "), s += r);
  return s;
};
function Qr(t, ...r) {
  let s, a, n, l = c;
  function c(d) {
    const f = r.reduce((m, u) => u(m), t());
    return s = qr(f), a = s.cache.get, n = s.cache.set, l = i, i(d);
  }
  function i(d) {
    const f = a(d);
    if (f)
      return f;
    const m = Jr(d, s);
    return n(d, m), m;
  }
  return function() {
    return l(Xr.apply(null, arguments));
  };
}
const ge = (t) => {
  const r = (s) => s[t] || [];
  return r.isThemeGetter = !0, r;
}, lr = /^\[(?:([a-z-]+):)?(.+)\]$/i, es = /^\d+\/\d+$/, ts = /* @__PURE__ */ new Set(["px", "full", "screen"]), rs = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ss = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, as = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ns = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, os = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Be = (t) => nt(t) || ts.has(t) || es.test(t), Ue = (t) => ot(t, "length", gs), nt = (t) => !!t && !Number.isNaN(Number(t)), vt = (t) => ot(t, "number", nt), ct = (t) => !!t && Number.isInteger(Number(t)), ls = (t) => t.endsWith("%") && nt(t.slice(0, -1)), se = (t) => lr.test(t), Ke = (t) => rs.test(t), is = /* @__PURE__ */ new Set(["length", "size", "percentage"]), cs = (t) => ot(t, is, ir), ds = (t) => ot(t, "position", ir), us = /* @__PURE__ */ new Set(["image", "url"]), ms = (t) => ot(t, us, xs), fs = (t) => ot(t, "", ps), dt = () => !0, ot = (t, r, s) => {
  const a = lr.exec(t);
  return a ? a[1] ? typeof r == "string" ? a[1] === r : r.has(a[1]) : s(a[2]) : !1;
}, gs = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ss.test(t) && !as.test(t)
), ir = () => !1, ps = (t) => ns.test(t), xs = (t) => os.test(t), hs = () => {
  const t = ge("colors"), r = ge("spacing"), s = ge("blur"), a = ge("brightness"), n = ge("borderColor"), l = ge("borderRadius"), c = ge("borderSpacing"), i = ge("borderWidth"), d = ge("contrast"), f = ge("grayscale"), m = ge("hueRotate"), u = ge("invert"), x = ge("gap"), g = ge("gradientColorStops"), w = ge("gradientColorStopPositions"), p = ge("inset"), b = ge("margin"), y = ge("opacity"), j = ge("padding"), A = ge("saturate"), L = ge("scale"), E = ge("sepia"), H = ge("skew"), Y = ge("space"), N = ge("translate"), S = () => ["auto", "contain", "none"], k = () => ["auto", "hidden", "clip", "visible", "scroll"], G = () => ["auto", se, r], R = () => [se, r], C = () => ["", Be, Ue], $ = () => ["auto", nt, se], B = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], D = () => ["solid", "dashed", "dotted", "double", "none"], h = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], I = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], _ = () => ["", "0", se], oe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], z = () => [nt, se];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [dt],
      spacing: [Be, Ue],
      blur: ["none", "", Ke, se],
      brightness: z(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Ke, se],
      borderSpacing: R(),
      borderWidth: C(),
      contrast: z(),
      grayscale: _(),
      hueRotate: z(),
      invert: _(),
      gap: R(),
      gradientColorStops: [t],
      gradientColorStopPositions: [ls, Ue],
      inset: G(),
      margin: G(),
      opacity: z(),
      padding: R(),
      saturate: z(),
      scale: z(),
      sepia: _(),
      skew: z(),
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
        aspect: ["auto", "square", "video", se]
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
        columns: [Ke]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": oe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": oe()
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
        object: [...B(), se]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: k()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": k()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": k()
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
        z: ["auto", ct, se]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: G()
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
        flex: ["1", "auto", "initial", "none", se]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: _()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: _()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ct, se]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [dt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ct, se]
        }, se]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": $()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": $()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [dt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ct, se]
        }, se]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": $()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": $()
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
        "auto-cols": ["auto", "min", "max", "fr", se]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", se]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [x]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [x]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [x]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...I()]
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
        content: ["normal", ...I(), "baseline"]
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
        "place-content": [...I(), "baseline"]
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
        p: [j]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [j]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [j]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [j]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [j]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [j]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [j]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [j]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [j]
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
        "space-x": [Y]
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
        "space-y": [Y]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", se, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [se, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [se, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [Ke]
        }, Ke]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [se, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [se, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [se, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [se, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ke, Ue]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", vt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [dt]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", se]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", nt, vt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Be, se]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", se]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", se]
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
        text: [t]
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
        decoration: [...D(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Be, Ue]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Be, se]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", se]
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
        content: ["none", se]
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
        bg: [...B(), ds]
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
        bg: ["auto", "cover", "contain", cs]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ms]
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
        from: [g]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [g]
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
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...D(), "hidden"]
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
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: D()
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
        outline: ["", ...D()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Be, se]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Be, Ue]
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
        ring: [t]
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
        "ring-offset": [Be, Ue]
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
        shadow: ["", "inner", "none", Ke, fs]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [dt]
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
        "mix-blend": [...h(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": h()
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
        brightness: [a]
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
        "drop-shadow": ["", "none", Ke, se]
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
        "hue-rotate": [m]
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
        saturate: [A]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [E]
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
        "backdrop-brightness": [a]
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
        "backdrop-grayscale": [f]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [m]
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
        "backdrop-opacity": [y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [A]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [E]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", se]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: z()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", se]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: z()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", se]
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
        scale: [L]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [L]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [L]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ct, se]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", se]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", se]
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
        "will-change": ["auto", "scroll", "contents", "transform", se]
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
        stroke: [Be, Ue, vt]
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
}, ze = /* @__PURE__ */ Qr(hs);
function v(...t) {
  return ze(ce(t));
}
const Wt = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, Ut = ce, Ne = (t, r) => (s) => {
  var a;
  if ((r == null ? void 0 : r.variants) == null) return Ut(t, s == null ? void 0 : s.class, s == null ? void 0 : s.className);
  const { variants: n, defaultVariants: l } = r, c = Object.keys(n).map((f) => {
    const m = s == null ? void 0 : s[f], u = l == null ? void 0 : l[f];
    if (m === null) return null;
    const x = Wt(m) || Wt(u);
    return n[f][x];
  }), i = s && Object.entries(s).reduce((f, m) => {
    let [u, x] = m;
    return x === void 0 || (f[u] = x), f;
  }, {}), d = r == null || (a = r.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((f, m) => {
    let { class: u, className: x, ...g } = m;
    return Object.entries(g).every((w) => {
      let [p, b] = w;
      return Array.isArray(b) ? b.includes({
        ...l,
        ...i
      }[p]) : {
        ...l,
        ...i
      }[p] === b;
    }) ? [
      ...f,
      u,
      x
    ] : f;
  }, []);
  return Ut(t, c, d, s == null ? void 0 : s.class, s == null ? void 0 : s.className);
}, ae = ({
  icon: t,
  className: r,
  size: s,
  color: a,
  rotate: n,
  flip: l,
  spin: c,
  inline: i = !0,
  mode: d = "svg",
  ...f
}) => {
  const [m, u] = te(null), [x, g] = te(!0), [w, p] = te(null);
  return be(() => {
    let b = !0;
    return (async () => {
      try {
        const { Icon: j } = await import("./iconify-Dqt3MVen.mjs");
        b && (u(() => j), g(!1));
      } catch (j) {
        console.error("Failed to load icon:", j), b && (p(j), g(!1));
      }
    })(), () => {
      b = !1;
    };
  }, []), x ? /* @__PURE__ */ e.jsx("span", { style: { width: s, height: s } }) : w || !m ? null : /* @__PURE__ */ e.jsx(
    m,
    {
      icon: t,
      className: v(
        c && "animate-spin",
        r
      ),
      style: {
        color: a,
        transform: `rotate(${n || 0}deg)`
      },
      height: s,
      width: s,
      flip: l,
      inline: i,
      mode: d,
      ...f
    }
  );
}, bs = Ne(
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
), cr = je(
  ({
    className: t,
    variant: r = "default",
    size: s = "md",
    rounded: a = "xl",
    error: n = !1,
    errorText: l,
    helperText: c,
    label: i,
    required: d = !1,
    labelPlacement: f = "top",
    fullWidth: m = !1,
    leftIcon: u,
    rightIcon: x,
    onRightIconClick: g,
    id: w,
    ...p
  }, b) => {
    const y = w || he.useId(), j = `${y}-helper`, A = `${y}-error`, L = /* @__PURE__ */ e.jsxs("div", { className: v("relative", !m && "inline-block"), children: [
      u && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ e.jsx(ae, { icon: u, className: "w-4 h-4" }) }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          id: y,
          type: "text",
          ref: b,
          className: v(
            bs({ variant: n ? "error" : r, size: s, rounded: a, fullWidth: m }),
            u && "pl-10",
            x && "pr-10",
            t
          ),
          "aria-describedby": n ? A : c ? j : void 0,
          "aria-invalid": n,
          "aria-required": d,
          ...p
        }
      ),
      x && /* @__PURE__ */ e.jsx(
        "div",
        {
          className: v(
            "absolute right-3 top-1/2 -translate-y-1/2 text-neutral",
            g && "cursor-pointer hover:text-primary-600"
          ),
          onClick: g,
          role: g ? "button" : void 0,
          tabIndex: g ? 0 : void 0,
          children: /* @__PURE__ */ e.jsx(ae, { icon: x, className: "w-4 h-4" })
        }
      )
    ] }), E = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      n && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: A, children: l }),
      !n && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: j, children: c })
    ] });
    return f === "left" ? /* @__PURE__ */ e.jsx("div", { className: v(m ? "w-full" : "inline-block", t), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
      i && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: y,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            i,
            d && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: v("flex-1", !m && "inline-block"), children: [
        L,
        E
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: v(m ? "w-full" : "inline-block", t), children: [
      i && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: y,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            i,
            d && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      L,
      E
    ] });
  }
);
cr.displayName = "Input";
const ft = he.forwardRef(
  ({ className: t, children: r, selected: s, disabled: a, ...n }, l) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: l,
      className: v(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
        "hover:bg-primary-50",
        s && "bg-primary-50 text-primary-900",
        a && "pointer-events-none opacity-50",
        t
      ),
      ...n,
      children: r
    }
  )
);
ft.displayName = "SelectItem";
const dr = typeof window < "u", Me = () => dr ? window : {
  innerHeight: 0,
  innerWidth: 0,
  addEventListener: () => {
  },
  removeEventListener: () => {
  }
}, ke = () => dr ? document : {
  addEventListener: () => {
  },
  removeEventListener: () => {
  },
  dispatchEvent: () => {
  }
}, yt = "autocomplete-dropdown-opened", vs = je(
  ({
    className: t,
    options: r,
    onSelect: s,
    isOpen: a,
    loading: n = !1,
    renderOption: l,
    variant: c = "default",
    size: i = "md",
    rounded: d = "xl",
    leftIcon: f,
    rightIcon: m,
    error: u = !1,
    errorText: x,
    helperText: g,
    label: w,
    required: p = !1,
    labelPlacement: b = "top",
    fullWidth: y = !1,
    value: j,
    onChange: A,
    onFocus: L,
    onBlur: E,
    showClear: H = !1,
    onClear: Y,
    searchType: N = "include",
    initialItemsToShow: S,
    itemsToLoad: k = 10,
    maxDropdownHeight: G = 300,
    noOptionsMessage: R = "No options found",
    scrollMoreMessage: C = "",
    allOptionsShownMessage: $ = "",
    ...B
  }, D) => {
    const [h, I] = te(!1), [_, oe] = te(j || ""), [z, Z] = te(S || 0), O = pe(null), V = pe(null), J = pe(null), re = pe(null), M = a !== void 0, xe = `autocomplete-${he.useId().replace(/:/g, "")}`, we = () => {
      if (!h || !V.current || !J.current) return;
      const { bottom: W, top: T, left: q, width: U } = V.current.getBoundingClientRect(), ne = J.current, ee = Me(), ue = ee.innerHeight - W, Se = T, Ze = Math.min(G, 300), Je = ue < Ze, Ve = Se > ue, rt = Je && Ve;
      Object.assign(ne.style, {
        position: "fixed",
        left: `${q}px`,
        width: `${U}px`
      }), rt ? Object.assign(ne.style, {
        bottom: `${ee.innerHeight - T + 4}px`,
        top: "auto",
        maxHeight: `${Se - 8}px`
      }) : Object.assign(ne.style, {
        top: `${W + 4}px`,
        bottom: "auto",
        maxHeight: `${ue - 8}px`
      });
    };
    be(() => {
      const W = Me(), T = ke(), q = () => {
        h && we();
      }, U = () => {
        h && we();
      }, ne = (ue) => {
        ue.detail.id !== xe && I(!1);
      }, ee = (ue) => {
        const Se = ue.target;
        O.current && !O.current.contains(Se) && J.current && !J.current.contains(Se) && I(!1);
      };
      return h && (we(), W.addEventListener("scroll", q, !0), W.addEventListener("resize", U)), T.addEventListener(yt, ne), T.addEventListener("click", ee), () => {
        W.removeEventListener("scroll", q, !0), W.removeEventListener("resize", U), T.removeEventListener(yt, ne), T.removeEventListener("click", ee);
      };
    }, [h, xe]), be(() => {
      oe(j || "");
    }, [j]);
    const Te = (W) => {
      const { value: T } = W.target;
      if (oe(T), !T.trim()) {
        I(!1);
        return;
      }
      const q = r.some(({ label: U }) => {
        const ne = T.toLowerCase().trim(), ee = U.toLowerCase();
        return N === "startsWith" ? ee.startsWith(ne) : ee.includes(ne);
      });
      I(q), A == null || A(W);
    }, Oe = (W) => {
      W.stopPropagation(), oe(""), Y == null || Y();
      const T = new Event("change");
      T.target = { value: "" }, A == null || A(T);
    }, Ie = (W) => {
      var ne;
      if (!W) return;
      const { value: T, label: q } = W;
      oe(q), I(!1), s == null || s(T);
      const U = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: W }
      });
      (ne = V.current) == null || ne.dispatchEvent(U);
    }, Le = (W) => {
      E == null || E(W);
    }, Ee = r.filter(({ label: W }) => {
      const T = _.toLowerCase().trim(), q = W.toLowerCase();
      return N === "startsWith" ? q.startsWith(T) : q.includes(T);
    }), _e = (W) => {
      M || (ke().dispatchEvent(
        new CustomEvent(yt, {
          detail: { id: xe }
        })
      ), Ee.length > 0 && I(!0)), L == null || L(W);
    }, Qe = () => {
      if (!re.current || S === void 0 || S <= 0) return;
      const { scrollTop: W, scrollHeight: T, clientHeight: q } = re.current;
      W + q >= T - 10 && Z((ne) => Math.min(ne + k, Ee.length));
    };
    be(() => {
      S !== void 0 && S > 0 && Z(S);
    }, [_, S]);
    const Pe = S !== void 0 && S > 0 ? Ee.slice(0, z) : Ee, $e = (W, T) => W ? W.replace(/\{(\w+)\}/g, (q, U) => {
      var ne;
      return ((ne = T[U]) == null ? void 0 : ne.toString()) || q;
    }) : "", et = M ? a : h, qe = H && _ && !B.disabled && !B.readOnly, We = qe ? "mdi:close" : m, tt = (W) => {
      if (!(!et || Pe.length === 0))
        switch (W.key) {
          case "Enter":
            W.preventDefault(), Pe.length === 1 && Ie(Pe[0]);
            break;
          case "Tab":
            Pe.length === 1 && (W.preventDefault(), Ie(Pe[0]));
            break;
          case "Escape":
            W.preventDefault(), I(!1);
            break;
        }
    }, K = () => {
      if (!et) return null;
      const W = ke();
      if (!("body" in W)) return null;
      const T = /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: J,
          className: "fixed z-[9999] min-w-[8rem] rounded-md border border-neutral-200 bg-white py-1 shadow-lg overflow-hidden",
          style: { maxHeight: `${G}px` },
          onClick: (q) => q.stopPropagation(),
          children: /* @__PURE__ */ e.jsx(
            "div",
            {
              ref: re,
              className: "overflow-auto",
              style: { maxHeight: `${G}px` },
              onScroll: Qe,
              children: n ? /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ e.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }) }) : Pe.length > 0 ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                Pe.map((q) => /* @__PURE__ */ e.jsx(
                  ft,
                  {
                    value: q.value,
                    selected: q.label === _,
                    onClick: () => Ie(q),
                    children: l ? l(q) : q.label
                  },
                  q.value
                )),
                S !== void 0 && S > 0 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  z < Ee.length && C && /* @__PURE__ */ e.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: $e(C, {
                    current: z,
                    total: Ee.length
                  }) }),
                  z >= Ee.length && Ee.length > 0 && $ && /* @__PURE__ */ e.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: $e($, {
                    total: Ee.length
                  }) })
                ] })
              ] }) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-2 text-sm text-neutral", children: R })
            }
          )
        }
      );
      return He(T, W.body);
    };
    return /* @__PURE__ */ e.jsxs("div", { ref: O, className: v("relative", y ? "w-full" : "inline-block"), children: [
      /* @__PURE__ */ e.jsx("div", { ref: V, className: v(!y && "inline-block"), children: /* @__PURE__ */ e.jsx(
        cr,
        {
          ref: D,
          value: _,
          onChange: Te,
          onFocus: _e,
          onBlur: Le,
          onKeyDown: tt,
          variant: c,
          size: i,
          rounded: d,
          leftIcon: f,
          rightIcon: We,
          error: u,
          errorText: x,
          helperText: g,
          label: w,
          required: p,
          labelPlacement: b,
          fullWidth: y,
          className: t,
          ...B,
          onClick: qe ? Oe : B.onClick
        }
      ) }),
      K()
    ] });
  }
);
vs.displayName = "AutoComplete";
const ys = {
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
}, ws = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, ks = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full"
}, Oa = ({
  items: t,
  multiple: r = !1,
  defaultOpenIds: s = [],
  icon: a = "mdi:chevron-down",
  iconPosition: n = "right",
  className: l,
  contentClassName: c,
  variant: i = "primary",
  shadow: d = "none",
  rounded: f = "xl"
}) => {
  const [m, u] = te(s), x = (w) => {
    u(
      r ? (p) => p.includes(w) ? p.filter((b) => b !== w) : [...p, w] : (p) => p.includes(w) ? [] : [w]
    );
  }, g = ys[i];
  return /* @__PURE__ */ e.jsx("div", { className: ce("w-full space-y-2", l), children: t.map((w) => {
    const p = m.includes(w.id), b = !!w.disabled;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: ce(
          "border overflow-hidden",
          "bg-white",
          "border-gray-200",
          ws[d],
          ks[f],
          "transition-shadow duration-200"
        ),
        children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => !b && x(w.id),
              disabled: b,
              className: ce(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                g.hover,
                p && g.active,
                g.text,
                b && "opacity-50 cursor-not-allowed"
              ),
              children: [
                n === "left" && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: ce(
                      "mr-3 transition-transform duration-200",
                      p && "rotate-180"
                    ),
                    children: /* @__PURE__ */ e.jsx(ae, { icon: a, className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ e.jsx("div", { className: "flex-1", children: w.title }),
                n === "right" && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: ce(
                      "ml-3 transition-transform duration-200",
                      p && "rotate-180"
                    ),
                    children: /* @__PURE__ */ e.jsx(ae, { icon: a, className: "w-5 h-5" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: ce(
                "grid transition-all duration-200 ease-in-out",
                p ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              ),
              children: /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: ce(
                    "p-4 border-t border-gray-200",
                    c
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
}, La = ({
  src: t,
  alt: r = "avatar",
  size: s = "medium",
  shape: a = "circle",
  className: n = "",
  variant: l = "cover"
}) => {
  const c = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  }, i = {
    circle: "rounded-full",
    square: "rounded-lg"
  }, d = ze(
    "inline-flex items-center justify-center overflow-hidden bg-gray-200",
    c[s],
    i[a],
    n
  );
  return /* @__PURE__ */ e.jsx("div", { className: d, children: t ? /* @__PURE__ */ e.jsx(
    "img",
    {
      src: t,
      alt: r,
      className: ze("w-full h-full", l === "cover" ? "object-cover" : "object-contain")
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
}, $a = ({
  children: t,
  variant: r = "primary",
  size: s = "medium",
  rounded: a = "xl",
  className: n = ""
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
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full"
  }, d = ze(
    "inline-flex items-center font-medium",
    l[r],
    c[s],
    i[a],
    n
  );
  return /* @__PURE__ */ e.jsx("span", { className: d, children: t });
}, js = Ne(
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
), Re = je(
  ({
    className: t,
    variant: r = "primary",
    size: s = "md",
    rounded: a = "xl",
    fullWidth: n = !1,
    isLoading: l = !1,
    leftIcon: c,
    rightIcon: i,
    isIconOnly: d = !1,
    children: f,
    ...m
  }, u) => {
    const g = d || !!(c || i) && !f;
    return /* @__PURE__ */ e.jsxs(
      "button",
      {
        className: v(
          js({
            variant: r,
            size: s,
            rounded: g ? "full" : a,
            fullWidth: n,
            isIconOnly: g,
            className: t
          })
        ),
        ref: u,
        disabled: m.disabled || l,
        ...m,
        children: [
          l && /* @__PURE__ */ e.jsx("span", { className: "animate-spin inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full" }),
          c && !l && /* @__PURE__ */ e.jsx(ae, { icon: c, className: "w-4 h-4", inline: !0 }),
          f && /* @__PURE__ */ e.jsx("span", { children: f }),
          i && !l && /* @__PURE__ */ e.jsx(ae, { icon: i, className: "w-4 h-4", inline: !0 })
        ]
      }
    );
  }
);
Re.displayName = "Button";
const Ns = Ne(
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
), Dt = je(
  ({
    className: t,
    variant: r = "default",
    padding: s = "md",
    shadow: a = "none",
    rounded: n = "2xl",
    asChild: l = !1,
    ...c
  }, i) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: v(Ns({ variant: r, padding: s, shadow: a, rounded: n, className: t })),
      ref: i,
      ...c
    }
  )
);
Dt.displayName = "Card";
const wt = ({
  label: t,
  error: r,
  disabled: s = !1,
  indeterminate: a = !1,
  variantSize: n = "sm",
  variant: l = "square",
  color: c = "primary",
  className: i = "",
  ...d
}) => {
  const f = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }, m = {
    primary: "checked:bg-primary-600 checked:border-primary-600 hover:border-primary-600",
    secondary: "checked:bg-secondary-600 checked:border-secondary-600 hover:border-secondary-600",
    success: "checked:bg-success-600 checked:border-success-600 hover:border-success-600",
    warning: "checked:bg-warning-600 checked:border-warning-600 hover:border-warning-600",
    error: "checked:bg-danger-600 checked:border-danger-600 hover:border-danger-600"
  }, u = r ? "border-danger-600 hover:border-danger-700" : "", g = ze(
    "border-2 transition-colors duration-200",
    "appearance-none cursor-pointer",
    "checked:bg-no-repeat checked:bg-center",
    l === "circle" ? 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]' : 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM0w0LjUgOC41TDIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=")]',
    {
      square: "rounded",
      circle: "rounded-full"
    }[l],
    f[n],
    m[c],
    u,
    s && "opacity-50 cursor-not-allowed",
    i
  ), w = ze(
    "ml-2 text-sm font-medium",
    s && "opacity-50 cursor-not-allowed",
    r && "text-danger-600"
  );
  return /* @__PURE__ */ e.jsxs("div", { className: "items-center", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "checkbox",
          className: g,
          disabled: s,
          ref: (p) => {
            p && (p.indeterminate = a);
          },
          ...d
        }
      ),
      t && /* @__PURE__ */ e.jsx("label", { className: w, children: t })
    ] }),
    r && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-danger-600", children: r })
  ] });
}, kt = Ne(
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
), Es = je(
  ({
    className: t,
    options: r = [],
    value: s,
    defaultValue: a = [],
    onChange: n,
    layout: l = "vertical",
    size: c = "md",
    error: i = !1,
    errorText: d,
    helperText: f,
    label: m,
    required: u = !1,
    labelPlacement: x = "top",
    fullWidth: g = !1,
    disabled: w = !1,
    variant: p = "square",
    color: b = "primary",
    checkboxSize: y = "sm",
    showSelectAll: j = !1,
    selectAllText: A = "Select All",
    indeterminateSelectAll: L = !0,
    gap: E,
    selectAllGap: H,
    id: Y,
    ...N
  }, S) => {
    const k = Y || he.useId(), G = `${k}-helper`, R = `${k}-error`, C = `${k}-group`, [$, B] = he.useState(a), D = s !== void 0 ? s : $, h = (M, X) => {
      const xe = X ? [...D, M] : D.filter((we) => we !== M);
      s === void 0 && B(xe), n == null || n(xe);
    }, I = (M) => {
      const X = M ? r.map((xe) => xe.value) : [];
      s === void 0 && B(X), n == null || n(X);
    }, _ = r.length > 0 && D.length === r.length, oe = D.length > 0 && D.length < r.length, z = L && oe, Z = (M) => M === "none" ? "gap-0" : M === "xs" ? "gap-1" : M === "sm" ? "gap-2" : M === "md" ? "gap-3" : M === "lg" ? "gap-4" : M === "xl" ? "gap-6" : null, O = Z(E), V = Z(H), J = /* @__PURE__ */ e.jsx("div", { className: v("relative", !g && "inline-block"), children: /* @__PURE__ */ e.jsxs(
      "fieldset",
      {
        ref: S,
        id: C,
        className: v(
          kt({ layout: l, size: c }),
          O,
          t
        ),
        "aria-describedby": i ? R : f ? G : void 0,
        "aria-invalid": i,
        "aria-required": u,
        ...N,
        children: [
          j && r.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: v(
            "flex flex-col",
            V || O || kt({ layout: "vertical", size: c })
          ), children: [
            /* @__PURE__ */ e.jsx(
              wt,
              {
                label: A,
                checked: _,
                indeterminate: z,
                onChange: (M) => I(M.target.checked),
                disabled: w,
                variant: p,
                color: i ? "error" : b,
                variantSize: y,
                error: i ? " " : void 0
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: v(
              "flex",
              l === "vertical" && "flex-col",
              l === "horizontal" && "flex-row flex-wrap",
              l === "grid" && "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
              O || kt({ layout: l, size: c })
            ), children: r.map((M) => /* @__PURE__ */ e.jsx(
              wt,
              {
                label: M.label,
                checked: D.includes(M.value),
                onChange: (X) => h(M.value, X.target.checked),
                disabled: w || M.disabled,
                indeterminate: M.indeterminate,
                variant: p,
                color: i ? "error" : b,
                variantSize: y,
                error: i ? " " : void 0
              },
              M.value
            )) })
          ] }),
          !j && /* @__PURE__ */ e.jsx(e.Fragment, { children: r.map((M) => /* @__PURE__ */ e.jsx(
            wt,
            {
              label: M.label,
              checked: D.includes(M.value),
              onChange: (X) => h(M.value, X.target.checked),
              disabled: w || M.disabled,
              indeterminate: M.indeterminate,
              variant: p,
              color: i ? "error" : b,
              variantSize: y,
              error: i ? " " : void 0
            },
            M.value
          )) })
        ]
      }
    ) }), re = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      i && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: R, children: d }),
      !i && f && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: G, children: f })
    ] });
    return x === "left" ? /* @__PURE__ */ e.jsx("div", { className: v(g ? "w-full" : "inline-block", t), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
      m && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: C,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            m,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: v("flex-1", !g && "inline-block"), children: [
        J,
        re
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: v(g ? "w-full" : "inline-block", t), children: [
      m && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: C,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            m,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      J,
      re
    ] });
  }
);
Es.displayName = "CheckBoxGroup";
const Ss = {
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
}, Rs = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5"
}, As = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full"
}, Va = ({
  children: t,
  variant: r = "solid",
  color: s = "primary",
  size: a = "md",
  rounded: n = "xl",
  onClose: l,
  className: c,
  icon: i
}) => /* @__PURE__ */ e.jsxs(
  "div",
  {
    className: v(
      "inline-flex items-center gap-1.5 font-medium",
      Ss[r][s],
      Rs[a],
      As[n],
      c
    ),
    children: [
      i && /* @__PURE__ */ e.jsx("span", { className: "inline-flex items-center", children: /* @__PURE__ */ e.jsx(ae, { icon: i, className: "w-4 h-4" }) }),
      t,
      l && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: l,
          className: "ml-1 rounded-full hover:bg-black/10 p-0.5",
          "aria-label": "Close",
          children: /* @__PURE__ */ e.jsx(ae, { icon: "mdi:close", className: "w-3 h-3" })
        }
      )
    ]
  }
);
var ur = { exports: {} };
(function(t, r) {
  (function(s, a) {
    t.exports = a();
  })(tr, function() {
    return function(s, a) {
      a.prototype.isSameOrAfter = function(n, l) {
        return this.isSame(n, l) || this.isAfter(n, l);
      };
    };
  });
})(ur);
var Ms = ur.exports;
const Cs = /* @__PURE__ */ rr(Ms);
var mr = { exports: {} };
(function(t, r) {
  (function(s, a) {
    t.exports = a();
  })(tr, function() {
    return function(s, a) {
      a.prototype.isSameOrBefore = function(n, l) {
        return this.isSame(n, l) || this.isBefore(n, l);
      };
    };
  });
})(mr);
var Ps = mr.exports;
const Ds = /* @__PURE__ */ rr(Ps);
fe.extend(Cs);
fe.extend(Ds);
const Is = Ne(
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
), At = je(
  ({
    value: t,
    onChange: r,
    minDate: s,
    maxDate: a,
    variant: n = "default",
    size: l = "md",
    rounded: c = "xl",
    disabled: i = !1,
    error: d = !1,
    errorText: f,
    helperText: m,
    label: u,
    required: x = !1,
    labelPlacement: g = "top",
    fullWidth: w = !1,
    className: p,
    placeholder: b = "Select date",
    leftIcon: y,
    rightIcon: j,
    monthsToShow: A = 1,
    valueFormatter: L,
    rangeStart: E,
    rangeEnd: H,
    closeOnSelect: Y = !0,
    calendarFooter: N,
    format: S = "DD-MM-YYYY",
    allowInput: k = !1,
    ...G
  }) => {
    const [R, C] = te(!1), [$, B] = te(t), [D, h] = te(t || /* @__PURE__ */ new Date()), [I, _] = te(!1), [oe, z] = te(""), Z = pe(null), O = pe(null), V = pe(null), J = pe(null), re = pe(null);
    be(() => {
      B(t || void 0), z(t ? M(t, S) : "");
    }, [t, S]), be(() => {
      z($ ? M($, S) : "");
    }, [$, S]);
    const M = (K, W) => {
      const T = K.getDate().toString().padStart(2, "0"), q = (K.getMonth() + 1).toString().padStart(2, "0"), U = K.getFullYear().toString();
      switch (W) {
        case "DD-MM-YYYY":
          return `${T}-${q}-${U}`;
        case "YYYY-MM-DD":
          return `${U}-${q}-${T}`;
        case "MM-DD-YYYY":
          return `${q}-${T}-${U}`;
        default:
          return `${T}-${q}-${U}`;
      }
    }, X = (K, W) => {
      const q = K.replace(/[^\d-]/g, "").split("-");
      if (q.length !== 3) return null;
      let U, ne, ee;
      switch (W) {
        case "DD-MM-YYYY":
          [U, ne, ee] = q.map(Number);
          break;
        case "YYYY-MM-DD":
          [ee, ne, U] = q.map(Number);
          break;
        case "MM-DD-YYYY":
          [ne, U, ee] = q.map(Number);
          break;
        default:
          [U, ne, ee] = q.map(Number);
      }
      if (isNaN(U) || isNaN(ne) || isNaN(ee) || ne < 1 || ne > 12 || U < 1 || U > 31 || ee < 1900 || ee > 2099) return null;
      const ue = new Date(ee, ne - 1, U);
      return ue.getDate() !== U || ue.getMonth() !== ne - 1 || ue.getFullYear() !== ee ? null : ue;
    };
    be(() => {
      if (I && J.current) {
        const K = fe(D).year(), W = J.current.querySelectorAll("[data-year]"), T = Array.from(W).find(
          (q) => parseInt(q.getAttribute("data-year") || "0") === K
        );
        T && T.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center"
        });
      }
    }, [I, D]);
    const xe = () => {
      if (!R || !O.current || !V.current) return;
      const { bottom: K, left: W, width: T, top: q } = O.current.getBoundingClientRect(), U = V.current, ne = Me(), ee = ne.innerHeight - K, ue = q, Ze = ee < (A === 2 ? 400 : 350), Je = ue > ee, Ve = Ze && Je;
      A === 2 ? (Object.assign(U.style, {
        position: "fixed",
        left: `${W}px`,
        minWidth: "500px",
        width: "auto",
        transform: ""
      }), Ve ? Object.assign(U.style, {
        bottom: `${ne.innerHeight - q + 4}px`,
        top: "auto",
        maxHeight: `${ue - 8}px`
      }) : Object.assign(U.style, {
        top: `${K + 4}px`,
        bottom: "auto",
        maxHeight: `${ee - 8}px`
      })) : (Object.assign(U.style, {
        position: "fixed",
        left: `${W + T / 2}px`,
        width: "320px",
        maxWidth: "100vw",
        transform: "translateX(-50%)"
      }), Ve ? Object.assign(U.style, {
        bottom: `${ne.innerHeight - q + 4}px`,
        top: "auto",
        maxHeight: `${ue - 8}px`
      }) : Object.assign(U.style, {
        top: `${K + 4}px`,
        bottom: "auto",
        maxHeight: `${ee - 8}px`
      }));
    };
    be(() => {
      const K = Me(), W = ke(), T = () => {
        R && xe();
      }, q = () => {
        R && xe();
      }, U = (ne) => {
        ne.key === "Escape" && R && (C(!1), _(!1));
      };
      return R && (xe(), K.addEventListener("scroll", T, !0), K.addEventListener("resize", q), W.addEventListener("keydown", U)), () => {
        K.removeEventListener("scroll", T, !0), K.removeEventListener("resize", q), W.removeEventListener("keydown", U);
      };
    }, [R]);
    const we = (K) => {
      if (E !== void 0 && H !== void 0)
        if (E && H)
          B(K), z(M(K, S)), r == null || r(K);
        else if (E) {
          const T = K;
          fe(T).isBefore(E), B(T), z(M(T, S)), r == null || r(T), C(!1), _(!1);
        } else
          B(K), z(M(K, S)), r == null || r(K);
      else
        B(K), z(M(K, S)), r == null || r(K), C(!1), _(!1);
    }, Te = () => {
      h(fe(D).subtract(1, "month").toDate());
    }, Oe = () => {
      h(fe(D).add(1, "month").toDate());
    }, Ie = (K) => {
      const W = fe(K).startOf("month"), T = fe(K).endOf("month"), q = [];
      let U = W;
      for (; U.isBefore(T) || U.isSame(T, "day"); )
        q.push(U.toDate()), U = U.add(1, "day");
      return q;
    }, Le = (K) => !!(s && fe(K).isBefore(s, "day") || a && fe(K).isAfter(a, "day")), Ee = (K) => {
      if (!k) return;
      const T = K.target.value.replace(/[^\d-]/g, "");
      if (T.length < oe.length) {
        z(T);
        return;
      }
      if (T.replace(/-/g, "").length > 8)
        return;
      let U = T;
      S === "DD-MM-YYYY" ? (T.length === 2 && !T.includes("-") || T.length === 5 && T.split("-").length === 2) && (U = T + "-") : S === "YYYY-MM-DD" ? (T.length === 4 && !T.includes("-") || T.length === 7 && T.split("-").length === 2) && (U = T + "-") : S === "MM-DD-YYYY" && (T.length === 2 && !T.includes("-") || T.length === 5 && T.split("-").length === 2) && (U = T + "-"), z(U);
    }, _e = () => {
      if (!k) return;
      const K = X(oe, S);
      if (K) {
        if (s && K < s) {
          z(M(s, S)), B(s), r == null || r(s);
          return;
        }
        if (a && K > a) {
          z(M(a, S)), B(a), r == null || r(a);
          return;
        }
        B(K), r == null || r(K), z(M(K, S));
      } else
        z($ ? M($, S) : "");
    }, Qe = () => {
      k && C(!1);
    }, Pe = (K) => {
      k && K.key === "Enter" && (K.preventDefault(), _e());
    }, $e = (K) => {
      const W = fe(D).year(K).toDate();
      h(W), _(!1);
    }, et = () => {
      if (!I) return null;
      const K = fe(D).year(), W = 1900, q = Array.from(
        { length: 2099 - W + 1 },
        (U, ne) => W + ne
      );
      return /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: J,
          className: "grid grid-cols-5 gap-2 p-2 overflow-y-auto max-h-[300px]",
          children: q.map((U) => /* @__PURE__ */ e.jsx(
            "div",
            {
              "data-year": U,
              onClick: () => $e(U),
              className: v(
                U === K && "bg-primary-50 text-primary",
                "text-sm cursor-pointer p-2"
              ),
              children: U
            },
            U
          ))
        }
      );
    }, qe = () => {
      if (!R) return null;
      const K = ke();
      if (!("body" in K)) return null;
      const W = Array.from({ length: A }).map(
        (T, q) => fe(D).add(q, "month").toDate()
      );
      return He(
        /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "fixed inset-0 z-[9998]",
              onClick: () => {
                I || C(!1);
              }
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: V,
              className: "fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-lg",
              onClick: (T) => T.stopPropagation(),
              children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between p-2 border-b border-gray-200", children: [
                  /* @__PURE__ */ e.jsx(
                    Re,
                    {
                      onClick: Te,
                      variant: "ghost",
                      size: "sm",
                      leftIcon: "mdi:chevron-left"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-900", children: A === 1 ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e.jsx("span", { children: fe(D).format("MMMM") }),
                    /* @__PURE__ */ e.jsxs(
                      "div",
                      {
                        className: "cursor-pointer flex items-center gap-1",
                        onClick: () => _(!I),
                        children: [
                          /* @__PURE__ */ e.jsx("span", { children: fe(D).format("YYYY") }),
                          /* @__PURE__ */ e.jsx(Re, { variant: "ghost", size: "sm", leftIcon: I ? "mdi:chevron-up" : "mdi:chevron-down" })
                        ]
                      }
                    )
                  ] }) : `${fe(D).format("MMMM YYYY")} - ${fe(
                    D
                  ).add(A - 1, "month").format("MMMM YYYY")}` }) }),
                  /* @__PURE__ */ e.jsx(
                    Re,
                    {
                      onClick: Oe,
                      variant: "ghost",
                      size: "sm",
                      rightIcon: "mdi:chevron-right"
                    }
                  )
                ] }),
                I ? et() : /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: v(
                      A === 2 ? "flex gap-5 p-2 mx-auto w-fit" : "justify-between p-2 mx-auto w-fit"
                    ),
                    children: W.map((T, q) => {
                      const U = Ie(T), ne = fe(T).startOf("month").day();
                      return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-7 gap-y-1 my-1", children: [
                          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                            (ee, ue) => {
                              const Se = ue === 0 || ue === 6;
                              return /* @__PURE__ */ e.jsx(
                                "div",
                                {
                                  className: v(
                                    "text-center text-xs font-medium text-neutral",
                                    Se && "text-danger"
                                  ),
                                  children: ee
                                },
                                ee
                              );
                            }
                          ),
                          Array.from({ length: ne }).map(
                            (ee, ue) => /* @__PURE__ */ e.jsx("div", {}, `empty-${ue}`)
                          ),
                          U.map((ee) => {
                            const ue = $ && fe(ee).isSame($, "day"), Se = Le(ee), Ze = fe(ee).isSame(
                              T,
                              "month"
                            ), Je = E && H && fe(ee).isSameOrAfter(E, "day") && fe(ee).isSameOrBefore(H, "day"), Ve = E && fe(ee).isSame(E, "day"), rt = H && fe(ee).isSame(H, "day"), gt = fe(ee).day() === 0 || fe(ee).day() === 6, Fe = E && H;
                            return /* @__PURE__ */ e.jsx("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ e.jsx(
                              "div",
                              {
                                className: v(
                                  Je && "rounded-none bg-primary-50",
                                  Fe && Ve && "rounded-l-full",
                                  Fe && rt && "rounded-r-full"
                                ),
                                children: /* @__PURE__ */ e.jsx(
                                  "button",
                                  {
                                    onClick: () => !Se && we(ee),
                                    disabled: Se,
                                    className: v(
                                      "p-2 text-sm transition-colors duration-200 w-10 h-10 rounded-full",
                                      gt && "!text-danger",
                                      ue && "bg-primary !text-white hover:bg-primary-600 active:bg-primary-700",
                                      ue && !Fe && "rounded-full",
                                      !ue && !Se && "hover:bg-primary-50 active:bg-primary-100",
                                      !Ze && "text-neutral-400",
                                      Se && "opacity-50 cursor-not-allowed",
                                      // inRange && "bg-primary-50 text-primary-900 rounded-none",
                                      Fe && Ve && "!bg-primary !text-white !rounded-full",
                                      Fe && rt && "!bg-primary !text-white !rounded-full"
                                    ),
                                    children: fe(ee).format("D")
                                  },
                                  ee.toString()
                                )
                              }
                            ) });
                          })
                        ] }),
                        N
                      ] }, q);
                    })
                  }
                )
              ]
            }
          )
        ] }),
        K.body
      );
    }, We = /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: v("relative", !w && "inline-block"),
        ref: O,
        onClick: () => !i && !k && C(!R),
        children: [
          y && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (K) => {
                K.stopPropagation(), i || C(!R);
              },
              children: /* @__PURE__ */ e.jsx(ae, { icon: y, className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: re,
              type: "text",
              value: k ? oe : L ? L() : $ ? M($, S) : "",
              placeholder: k ? S : b,
              readOnly: !k,
              maxLength: k ? 10 : void 0,
              onChange: Ee,
              onBlur: _e,
              onFocus: Qe,
              onKeyDown: Pe,
              className: v(
                Is({ variant: d ? "error" : n, size: l, rounded: c, fullWidth: w }),
                y && "pl-10",
                j && "pr-10",
                p
              ),
              disabled: i,
              ...G
            }
          ),
          j && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (K) => {
                K.stopPropagation(), i || C(!R);
              },
              children: /* @__PURE__ */ e.jsx(ae, { icon: j, className: "w-4 h-4" })
            }
          )
        ]
      }
    ), tt = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      f && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", children: f }),
      !f && m && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", children: m })
    ] });
    return g === "left" ? /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: v(w ? "w-full" : "inline-block", p),
        ref: Z,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
            u && /* @__PURE__ */ e.jsxs("label", { className: "block text-sm text-neutral-900 pt-2", children: [
              u,
              x && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: v("flex-1", !w && "inline-block"), children: [
              We,
              tt
            ] })
          ] }),
          qe()
        ]
      }
    ) : /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: v(w ? "w-full" : "inline-block", p),
        ref: Z,
        children: [
          u && /* @__PURE__ */ e.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
            u,
            x && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          We,
          tt,
          qe()
        ]
      }
    );
  }
);
At.displayName = "PrimitiveDatePicker";
const Ts = ({
  mode: t = "single",
  value: r,
  onChange: s,
  monthsToShow: a = 1,
  calendarFooter: n,
  error: l = !1,
  errorText: c,
  format: i = "DD-MM-YYYY",
  allowInput: d = !1,
  ...f
}) => {
  const [m, u] = te([
    void 0,
    void 0
  ]);
  if (t === "single") {
    const x = Array.isArray(r) ? r[0] : r;
    return /* @__PURE__ */ e.jsx(
      At,
      {
        value: x === null ? void 0 : x,
        onChange: (g) => s == null ? void 0 : s(g),
        monthsToShow: a,
        calendarFooter: n,
        error: l,
        errorText: c,
        format: i,
        allowInput: d,
        ...f
      }
    );
  }
  if (t === "range") {
    let [x, g] = Array.isArray(r) ? r : m;
    const w = (b) => {
      !x || x && g ? (u([b, void 0]), s == null || s([b, void 0])) : x && !g && (b < x ? (u([b, x]), s == null || s([b, x])) : (u([x, b]), s == null || s([x, b])));
    }, p = () => {
      if (!x) return "";
      const b = (y) => y ? y.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }) : "";
      return x && g ? `${b(x)} - ${b(g)}` : b(x);
    };
    return /* @__PURE__ */ e.jsx(
      At,
      {
        value: x,
        onChange: w,
        monthsToShow: a,
        placeholder: f.placeholder || "Select date range",
        valueFormatter: p,
        rangeStart: x,
        rangeEnd: g,
        closeOnSelect: !!g,
        calendarFooter: n,
        error: l,
        errorText: c,
        format: i,
        allowInput: d,
        ...f
      }
    );
  }
  return null;
};
Ts.displayName = "DatePicker";
const fr = je(
  ({ children: t, onClose: r, className: s, ...a }, n) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: n,
      className: v("mb-4 flex items-center justify-between", s),
      ...a,
      children: [
        t,
        r && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: r,
            className: "ml-4 rounded-full p-1 text-gray hover:bg-gray-100 hover:text-gray-700",
            "aria-label": "Close dialog",
            children: /* @__PURE__ */ e.jsx(ae, { icon: "mdi:close", className: "h-5 w-5" })
          }
        )
      ]
    }
  )
), Kt = {
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
}, _s = {
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
}, zs = je(
  ({
    isOpen: t,
    onClose: r,
    children: s,
    className: a,
    backdrop: n = "dark",
    header: l,
    closeOnBackdropClick: c = !0,
    size: i = "md",
    sizeClassName: d,
    rounded: f = "xl",
    position: m = "center",
    ...u
  }, x) => {
    const [g, w] = te(t), [p, b] = te(!1);
    if (Pr(() => {
      if (t) {
        w(!0), b(!1);
        const H = ke();
        "body" in H && (H.body.style.overflow = "hidden");
        const Y = requestAnimationFrame(() => b(!0));
        return () => cancelAnimationFrame(Y);
      }
      b(!1);
      const E = setTimeout(() => {
        w(!1);
        const H = ke();
        "body" in H && (H.body.style.overflow = "");
      }, 300);
      return () => clearTimeout(E);
    }, [t]), be(() => {
      const E = (H) => {
        H instanceof KeyboardEvent && H.key === "Escape" && r();
      };
      return t && ke().addEventListener("keydown", E), () => {
        ke().removeEventListener("keydown", E);
      };
    }, [t, r]), !g) return null;
    const y = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, j = () => {
      c && r();
    }, A = ke();
    if (!("body" in A)) return null;
    const L = (E) => {
      switch (E) {
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
    };
    return He(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: v(
            "fixed inset-0 z-50 flex transition-opacity duration-300",
            y[n],
            p ? "opacity-100" : "opacity-0",
            m === "center" && "items-center justify-center",
            m === "top" && "items-start justify-center",
            m === "bottom" && "items-end justify-center",
            m === "left" && "items-stretch justify-start",
            m === "right" && "items-stretch justify-end"
          ),
          onClick: j,
          children: /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: x,
              className: v(
                "relative transform bg-white p-6 shadow-xl transition-all duration-300",
                // Width/Max-width behavior depends on position.
                // If `sizeClassName` is provided, it takes precedence except in fullscreen mode.
                i === "fullscreen" ? Kt.fullscreen : d ?? (m === "left" || m === "right" ? _s[i] : Kt[i]),
                // Position-based animations
                m === "center" && (p ? "scale-100 opacity-100" : "scale-95 opacity-0"),
                m === "left" && (p ? "translate-x-0 opacity-100 h-full" : "-translate-x-full opacity-0 h-full"),
                m === "right" && (p ? "translate-x-0 opacity-100 h-full" : "translate-x-full opacity-0 h-full"),
                m === "top" && (p ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"),
                m === "bottom" && (p ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"),
                a,
                i === "fullscreen" ? "rounded-none" : L(f),
                // Corner overrides so the edge touching the viewport is not rounded
                m === "left" && "rounded-l-none",
                m === "right" && "rounded-r-none",
                m === "top" && "rounded-t-none",
                m === "bottom" && "rounded-b-none"
              ),
              onClick: (E) => E.stopPropagation(),
              ...u,
              children: [
                l && /* @__PURE__ */ e.jsx(fr, { onClose: r, children: l }),
                s
              ]
            }
          )
        }
      ),
      A.body
    );
  }
), Os = je(
  ({ children: t, className: r, ...s }, a) => /* @__PURE__ */ e.jsx(
    "h2",
    {
      ref: a,
      className: v("text-xl font-semibold text-gray-900", r),
      ...s,
      children: t
    }
  )
), Ls = je(
  ({ children: t, className: r, ...s }, a) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: a,
      className: v("text-gray-600", r),
      ...s,
      children: t
    }
  )
), $s = je(
  ({ children: t, className: r, ...s }, a) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: a,
      className: v("mt-6 flex justify-end gap-3", r),
      ...s,
      children: t
    }
  )
);
zs.displayName = "Dialog";
Os.displayName = "DialogTitle";
Ls.displayName = "DialogBody";
$s.displayName = "DialogActions";
fr.displayName = "DialogHeader";
const Vs = ({
  orientation: t = "horizontal",
  variant: r = "solid",
  color: s = "neutral",
  size: a = "sm",
  className: n = ""
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
  }, f = ze(
    "inline-block",
    l[t],
    c[r],
    i[s],
    d[a],
    n
  );
  return /* @__PURE__ */ e.jsx("div", { className: f });
}, Fs = {
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
}, Bs = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, qt = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
}, Fa = ({
  accept: t = ["*"],
  maxSize: r = 5 * 1024 * 1024,
  // 5MB default
  multiple: s = !1,
  value: a = [],
  onChange: n,
  className: l,
  disabled: c = !1,
  placeholder: i = "Drag and drop files here or click to browse",
  variant: d = "default",
  shadow: f = "none",
  rounded: m = "lg",
  children: u,
  showFileList: x = !0,
  showPlaceholder: g = !0,
  showMaxSize: w = !0,
  icon: p = "mdi:upload"
}) => {
  const [b, y] = te(!1), [j, A] = te(null), L = pe(null), E = Ge((C) => {
    C.preventDefault(), c || y(!0);
  }, [c]), H = Ge((C) => {
    C.preventDefault(), y(!1);
  }, []), Y = Ge((C) => C.size > r ? `File size exceeds ${r / (1024 * 1024)}MB limit` : t[0] !== "*" && !t.some(($) => $.startsWith(".") ? C.name.toLowerCase().endsWith($.toLowerCase()) : C.type.startsWith($)) ? `File type not allowed. Allowed types: ${t.join(", ")}` : null, [t, r]), N = Ge((C) => {
    if (C.preventDefault(), y(!1), A(null), c) return;
    const $ = Array.from(C.dataTransfer.files), B = [], D = [];
    if ($.forEach((h) => {
      const I = Y(h);
      I ? D.push(`${h.name}: ${I}`) : B.push(h);
    }), D.length > 0 && A(D.join(`
`)), B.length > 0) {
      const h = s ? [...a, ...B] : B;
      n == null || n(h);
    }
  }, [c, s, n, Y, a]), S = Ge((C) => {
    if (A(null), c || !C.target.files) return;
    const $ = Array.from(C.target.files), B = [], D = [];
    if ($.forEach((h) => {
      const I = Y(h);
      I ? D.push(`${h.name}: ${I}`) : B.push(h);
    }), D.length > 0 && A(D.join(`
`)), B.length > 0) {
      const h = s ? [...a, ...B] : B;
      n == null || n(h);
    }
    L.current && (L.current.value = "");
  }, [c, s, n, Y, a]), k = Ge((C) => {
    const $ = [...a];
    $.splice(C, 1), n == null || n($);
  }, [n, a]), G = (C) => C.type.startsWith("image/") ? /* @__PURE__ */ e.jsx(ae, { icon: "mdi:image", className: "w-5 h-5" }) : C.type.startsWith("text/") ? /* @__PURE__ */ e.jsx(ae, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ e.jsx(ae, { icon: "mdi:file", className: "w-5 h-5" }), R = Fs[d];
  return /* @__PURE__ */ e.jsxs("div", { className: ce("w-full", l), children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: ce(
          "p-6 text-center transition-colors",
          !u && [
            "border-2 border-dashed",
            R.border,
            R.bg,
            b && R.active,
            !c && R.hover
          ],
          c && "opacity-50 cursor-not-allowed",
          Bs[f],
          qt[m],
          !u && "cursor-pointer"
        ),
        onDragOver: E,
        onDragLeave: H,
        onDrop: N,
        onClick: () => {
          var C;
          return !c && !u && ((C = L.current) == null ? void 0 : C.click());
        },
        children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: L,
              type: "file",
              accept: t.join(","),
              multiple: s,
              onChange: S,
              className: "hidden",
              disabled: c
            }
          ),
          u ? /* @__PURE__ */ e.jsx("div", { onClick: () => {
            var C;
            return !c && ((C = L.current) == null ? void 0 : C.click());
          }, children: u }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(ae, { icon: p, className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
            g && /* @__PURE__ */ e.jsx("p", { className: ce("text-neutral-600", R.text), children: i }),
            w && /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-neutral mt-2", children: [
              "Max file size: ",
              r / (1024 * 1024),
              "MB"
            ] })
          ] })
        ]
      }
    ),
    j && /* @__PURE__ */ e.jsx("p", { className: "mt-2 text-sm text-danger", children: j }),
    x && a.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "mt-4 space-y-2", children: a.map((C, $) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: ce(
          "flex items-center justify-between p-2",
          qt[m],
          R.bg
        ),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
            G(C),
            /* @__PURE__ */ e.jsx("span", { className: ce("text-sm", R.text), children: C.name }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-neutral", children: [
              "(",
              (C.size / 1024).toFixed(1),
              " KB)"
            ] })
          ] }),
          !c && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => k($),
              className: "p-1 text-neutral hover:text-danger",
              children: /* @__PURE__ */ e.jsx(ae, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${C.name}-${$}`
    )) })
  ] });
}, Ys = Ne(
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
), Ba = ({
  title: t,
  children: r,
  icon: s,
  variant: a = "default",
  rounded: n = "xl",
  showClose: l = !1,
  onClose: c,
  className: i
}) => {
  const d = () => {
    switch (a) {
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
    if (s) return s;
    switch (a) {
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
  return /* @__PURE__ */ e.jsxs("div", { className: v(Ys({ variant: a, rounded: n }), i), children: [
    s && /* @__PURE__ */ e.jsx(ae, { icon: f(), className: v("h-5 w-5 flex-shrink-0", d()) }),
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
        children: /* @__PURE__ */ e.jsx(ae, { icon: "mdi:close", className: "h-5 w-5" })
      }
    )
  ] });
}, jt = "select-dropdown-opened", Gs = Ne(
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
), gr = je(
  ({
    className: t,
    variant: r = "default",
    size: s = "md",
    rounded: a = "xl",
    options: n,
    label: l,
    error: c = !1,
    errorText: i,
    helperText: d,
    required: f = !1,
    placeholder: m,
    value: u,
    onChange: x,
    disabled: g = !1,
    position: w = "bottom",
    fullWidth: p = !1,
    children: b,
    leftIcon: y,
    rightIcon: j,
    ...A
  }, L) => {
    const [E, H] = te(!1), Y = pe(null), N = pe(null), k = `select-${he.useId().replace(/:/g, "")}`, G = () => {
      if (E && Y.current && N.current) {
        const h = Y.current.getBoundingClientRect(), I = N.current, _ = Me(), oe = _.innerHeight - h.bottom, z = h.top, O = h.bottom + I.offsetHeight + 4 >= _.innerHeight, V = z > oe, J = O && V;
        w === "bottom" || w === "top" ? (I.style.position = "fixed", I.style.left = `${h.left}px`, I.style.width = `${h.width}px`, w === "bottom" && J ? (I.style.bottom = `${_.innerHeight - h.top + 4}px`, I.style.top = "auto", I.style.maxHeight = `${z - 8}px`) : w === "bottom" ? (I.style.top = `${h.bottom + 4}px`, I.style.bottom = "auto", I.style.maxHeight = `${oe - 8}px`) : w === "top" && !J ? (I.style.top = `${h.bottom + 4}px`, I.style.bottom = "auto", I.style.maxHeight = `${oe - 8}px`) : (I.style.bottom = `${_.innerHeight - h.top + 4}px`, I.style.top = "auto", I.style.maxHeight = `${z - 8}px`)) : w === "left" ? (I.style.position = "fixed", I.style.right = `${_.innerWidth - h.left + 4}px`, I.style.top = `${h.top}px`, I.style.maxHeight = `${_.innerHeight - h.top - 8}px`) : w === "right" && (I.style.position = "fixed", I.style.left = `${h.right + 4}px`, I.style.top = `${h.top}px`, I.style.maxHeight = `${_.innerHeight - h.top - 8}px`);
      }
    };
    be(() => {
      const h = Me(), I = () => {
        E && G();
      }, _ = () => {
        E && G();
      };
      return E && (G(), h.addEventListener("scroll", I, !0), h.addEventListener("resize", _)), () => {
        h.removeEventListener("scroll", I, !0), h.removeEventListener("resize", _);
      };
    }, [E, w]), be(() => {
      const h = ke(), I = (oe) => {
        oe.detail.id !== k && H(!1);
      }, _ = (oe) => {
        const z = oe.target, Z = Y.current, O = N.current;
        Z && O && !Z.contains(z) && !O.contains(z) && H(!1);
      };
      return h.addEventListener(jt, I), h.addEventListener("click", _), () => {
        h.removeEventListener(jt, I), h.removeEventListener("click", _);
      };
    }, [k]);
    const R = () => {
      if (g) return;
      if (E) {
        H(!1);
        return;
      }
      ke().dispatchEvent(
        new CustomEvent(jt, {
          detail: { id: k }
        })
      ), H(!0);
    }, C = () => {
      if (n) {
        const h = n.find((I) => I.value === u);
        return h == null ? void 0 : h.label;
      }
      if (b) {
        const I = Vt.toArray(b).find(
          (_) => bt(_) && "value" in _.props && _.props.value === u
        );
        return bt(I) ? I.props.children : null;
      }
      return null;
    }, $ = (h) => {
      g || (x == null || x(h), H(!1));
    }, B = () => n ? n.map((h) => /* @__PURE__ */ e.jsx(
      ft,
      {
        value: h.value,
        disabled: h.disabled,
        selected: h.value === u,
        onClick: () => {
          h.onClick && h.onClick(h.value), $(h.value);
        },
        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          h.icon,
          h.label
        ] })
      },
      h.value
    )) : b ? Vt.map(b, (h) => bt(h) && "value" in h.props ? Dr(h, {
      selected: h.props.value === u,
      onClick: () => $(h.props.value)
    }) : null) : null, D = () => {
      if (!E || g) return null;
      const h = /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: N,
          className: v(
            "fixed z-[9999] min-w-[8rem] border border-neutral-200 bg-white py-1 shadow-lg rounded-lg",
            w === "left" || w === "right" ? "w-max" : "w-full"
          ),
          onClick: (_) => _.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: B()
        }
      ), I = ke();
      return "body" in I ? He(h, I.body) : null;
    };
    return /* @__PURE__ */ e.jsxs("div", { className: v(p ? "w-full" : "inline-block"), ref: L, ...A, children: [
      l && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: k,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            l,
            f && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: v("relative", !p && "inline-block"),
          onClick: R,
          children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                id: k,
                ref: Y,
                type: "button",
                className: v(
                  Gs({ variant: c ? "error" : r, size: s, rounded: a, fullWidth: p }),
                  "flex items-center justify-between",
                  g && "cursor-not-allowed opacity-50",
                  y && "pl-10",
                  j && "pr-10",
                  t
                ),
                "aria-haspopup": "listbox",
                "aria-expanded": E,
                "aria-describedby": c ? `${k}-error` : d ? `${k}-helper` : void 0,
                disabled: g,
                children: [
                  y && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ e.jsx(ae, { icon: y, className: "w-4 h-4" }) }),
                  /* @__PURE__ */ e.jsx("span", { className: "flex items-center gap-2 min-w-0 flex-1", children: /* @__PURE__ */ e.jsx("span", { className: v(
                    "truncate text-left",
                    C() ? "text-neutral-900" : "text-neutral"
                  ), children: C() || m }) }),
                  j ? /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ e.jsx(ae, { icon: j, className: "w-4 h-4" }) }) : /* @__PURE__ */ e.jsx(
                    ae,
                    {
                      icon: "mdi:chevron-down",
                      className: v("transition-transform flex-shrink-0 ml-2 w-4 h-4", E && "rotate-180")
                    }
                  )
                ]
              }
            ),
            D()
          ]
        }
      ),
      c && i && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: `${k}-error`, children: i }),
      !c && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: `${k}-helper`, children: d })
    ] });
  }
);
gr.displayName = "Select";
const Hs = ({
  currentPage: t,
  totalPages: r,
  totalData: s,
  onPageChange: a,
  siblingCount: n = 1,
  className: l,
  perPageOptions: c,
  perPage: i = 10,
  label: d = "",
  onPerPageChange: f
}) => {
  const m = (g, w) => {
    const p = w - g + 1;
    return Array.from({ length: p }, (b, y) => y + g);
  }, x = (() => {
    const g = n * 2 + 3, w = g + 2;
    if (r > w) {
      const p = Math.max(2, t - n), b = Math.min(r - 1, t + n);
      let y = m(p, b);
      const j = p > 2, A = r - b > 1, L = g - (y.length + 1);
      if (j && !A)
        y = [...m(p - L, p - 1), ...y];
      else if (!j && A) {
        const E = m(b + 1, b + L);
        y = [...y, ...E];
      } else j && A && (y = [...y]);
      return [1, ...y, r];
    }
    return m(1, r);
  })();
  return /* @__PURE__ */ e.jsxs(
    "nav",
    {
      className: ce("flex items-center justify-between space-x-1", l),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "hidden sm:block text-sm text-neutral-700", children: [
          /* @__PURE__ */ e.jsx("b", { children: `${t} - ${r}` }),
          " dari ",
          s,
          " ",
          d
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          c && c.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 mr-4", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-neutral-700 text-sm", children: "Menampilkan" }),
            /* @__PURE__ */ e.jsx(
              gr,
              {
                value: i == null ? void 0 : i.toString(),
                onChange: (g) => f && f(Number(g)),
                size: "sm",
                className: "w-16",
                fullWidth: !1,
                "aria-label": "Items per page",
                children: c.map((g) => /* @__PURE__ */ e.jsx(ft, { value: g.toString(), children: g }, g))
              }
            ),
            /* @__PURE__ */ e.jsx("span", { className: "text-neutral-700 text-sm", children: "data per halaman" })
          ] }),
          /* @__PURE__ */ e.jsx(
            Re,
            {
              variant: "ghost",
              onClick: () => a(t - 1),
              disabled: t === 1,
              className: ce(
                "px-3 py-1 rounded-md text-sm",
                t === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              ),
              children: /* @__PURE__ */ e.jsx(ae, { size: "18", icon: "mdi:chevron-left" })
            }
          ),
          x.map((g, w) => {
            const p = g === t, b = typeof g == "string" && g === "...";
            return /* @__PURE__ */ e.jsx(
              Re,
              {
                variant: "ghost",
                onClick: () => !b && a(g),
                className: ce(
                  "px-3 py-1 rounded-md text-sm",
                  p ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  b && "cursor-default"
                ),
                children: g
              },
              w
            );
          }),
          /* @__PURE__ */ e.jsx(
            Re,
            {
              variant: "ghost",
              onClick: () => a(t + 1),
              disabled: t === r,
              className: ce(
                "px-3 py-1 rounded-md text-sm",
                t === r ? "text-gray-400 cursor-not-allowed" : "text-gray-700"
              ),
              children: /* @__PURE__ */ e.jsx(ae, { size: "18", icon: "mdi:chevron-right" })
            }
          )
        ] })
      ]
    }
  );
}, Ws = ({
  label: t,
  checked: r = !1,
  disabled: s = !1,
  onChange: a,
  name: n,
  value: l,
  error: c,
  color: i = "primary",
  variantSize: d = "sm"
}) => {
  const f = (x) => {
    a && a(x.target.checked);
  }, m = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }, u = {
    primary: "checked:bg-primary-600 checked:border-primary-600 hover:border-primary-600",
    secondary: "checked:bg-secondary-600 checked:border-secondary-600 hover:border-secondary-600",
    success: "checked:bg-success-600 checked:border-success-600 hover:border-success-600",
    warning: "checked:bg-warning-600 checked:border-warning-600 hover:border-warning-600",
    error: "checked:bg-danger-600 checked:border-danger-600 hover:border-danger-600"
  };
  return /* @__PURE__ */ e.jsxs(
    "label",
    {
      className: ze(
        "inline-flex items-center cursor-pointer",
        s && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "radio",
            className: ze(
              "border-2 rounded-full appearance-none",
              "focus:outline-none focus:ring-2 focus:ring-primary/25",
              "transition-colors duration-200",
              "checked:bg-no-repeat checked:bg-center",
              'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]',
              m[d],
              r ? u[i] : c ? "border-danger-600" : "border-gray-300",
              c && !r && "hover:border-danger-700",
              s && "cursor-not-allowed"
            ),
            checked: r,
            disabled: s,
            onChange: f,
            name: n,
            value: l
          }
        ),
        t && /* @__PURE__ */ e.jsx("label", { className: ze(
          "ml-2 text-sm font-medium",
          s && "opacity-50 cursor-not-allowed",
          c && "text-danger-600"
        ), children: t })
      ]
    }
  );
}, Us = Ne(
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
), Ks = je(
  ({
    className: t,
    options: r = [],
    value: s,
    defaultValue: a,
    onChange: n,
    layout: l = "vertical",
    size: c = "md",
    error: i = !1,
    errorText: d,
    helperText: f,
    label: m,
    required: u = !1,
    labelPlacement: x = "top",
    fullWidth: g = !1,
    disabled: w = !1,
    name: p,
    gap: b,
    color: y = "primary",
    radioSize: j = "sm",
    id: A,
    ...L
  }, E) => {
    const H = A || he.useId(), Y = `${H}-helper`, N = `${H}-error`, S = `${H}-group`, k = p || `radio-group-${H}`, [G, R] = he.useState(a), C = s !== void 0 ? s : G, $ = (_) => {
      s === void 0 && R(_), n == null || n(_);
    }, D = ((_) => _ === "none" ? "gap-0" : _ === "xs" ? "gap-1" : _ === "sm" ? "gap-2" : _ === "md" ? "gap-3" : _ === "lg" ? "gap-4" : _ === "xl" ? "gap-6" : null)(b), h = /* @__PURE__ */ e.jsx("div", { className: v("relative", !g && "inline-block"), children: /* @__PURE__ */ e.jsx(
      "fieldset",
      {
        ref: E,
        id: S,
        className: v(
          Us({ layout: l, size: c }),
          D,
          t
        ),
        "aria-describedby": i ? N : f ? Y : void 0,
        "aria-invalid": i,
        "aria-required": u,
        ...L,
        children: r.map((_) => /* @__PURE__ */ e.jsx(
          Ws,
          {
            label: _.label,
            checked: C === _.value,
            onChange: () => $(_.value),
            disabled: w || _.disabled,
            name: k,
            value: _.value,
            color: i ? "error" : y,
            error: i ? " " : void 0,
            variantSize: j
          },
          _.value
        ))
      }
    ) }), I = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      i && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: N, children: d }),
      !i && f && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: Y, children: f })
    ] });
    return x === "left" ? /* @__PURE__ */ e.jsx("div", { className: v(g ? "w-full" : "inline-block", t), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
      m && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: S,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            m,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: v("flex-1", !g && "inline-block"), children: [
        h,
        I
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: v(g ? "w-full" : "inline-block", t), children: [
      m && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: S,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            m,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      h,
      I
    ] });
  }
);
Ks.displayName = "RadioGroup";
const qs = Ne(
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
      rounded: "md",
      fullWidth: !1
    }
  }
), Zs = ({
  width: t,
  height: r,
  variant: s = "default",
  rounded: a = "xl",
  fullWidth: n = !1,
  className: l
}) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: v(qs({ variant: s, rounded: a, fullWidth: n }), l),
    style: {
      width: !n && typeof t == "number" ? `${t}px` : t,
      height: typeof r == "number" ? `${r}px` : r
    }
  }
), Ya = ({
  min: t = 0,
  max: r = 100,
  step: s = 1,
  value: a,
  defaultValue: n = t,
  onChange: l,
  className: c,
  disabled: i = !1,
  showValue: d = !1,
  marks: f = [],
  range: m = !1
}) => {
  const u = m, [x, g] = te(
    a !== void 0 ? a : n !== void 0 ? n : u ? [t, r] : t
  ), [w, p] = te(null), b = pe(null), y = a !== void 0 ? a : x, [j, A] = u ? Array.isArray(y) ? y : [t, r] : [typeof y == "number" ? y : t, r], L = (D) => Math.min(Math.max(D, t), r), E = (D) => {
    if (i) return;
    let h;
    u && Array.isArray(D) ? h = [L(D[0]), L(D[1])] : !u && typeof D == "number" ? h = L(D) : h = u ? [t, r] : t, a === void 0 && g(h), l == null || l(h);
  }, H = (D) => {
    if (!b.current) return t;
    const h = b.current.getBoundingClientRect(), _ = (D - h.left) / h.width, oe = t + (r - t) * _, z = Math.round(oe / s) * s;
    return L(z);
  }, Y = (D) => (h) => {
    i || (p(D), h.stopPropagation());
  }, N = (D) => {
    if (!i)
      if (!u)
        p(0), S(D, 0);
      else {
        const h = H(D.clientX), I = Math.abs(h - j), _ = Math.abs(h - A), oe = I < _ ? 0 : 1;
        p(oe), S(D, oe);
      }
  }, S = he.useCallback((D, h) => {
    const I = H(D.clientX);
    if (!u)
      E(I);
    else {
      let _ = [j, A];
      h === 0 ? _ = [Math.min(I, A - s), A] : _ = [j, Math.max(I, j + s)], _[0] > _[1] && (_ = [_[1], _[0]]), E(_);
    }
  }, [u, j, A, s, E, H]), k = he.useRef(w);
  k.current = w;
  const G = he.useCallback(function(D) {
    k.current === null || i || S(D, k.current);
  }, [i, S]), R = he.useCallback(function() {
    p(null);
  }, []);
  be(() => {
    if (w !== null) {
      const D = Me();
      return D.addEventListener("mousemove", G), D.addEventListener("mouseup", R), () => {
        D.removeEventListener("mousemove", G), D.removeEventListener("mouseup", R);
      };
    }
  }, [w, G, R]);
  const C = (D) => (D - t) / (r - t) * 100, $ = C(j), B = C(A);
  return /* @__PURE__ */ e.jsxs("div", { className: ce("relative w-full", c), children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: b,
        className: ce(
          "relative h-2 bg-gray-200 rounded-full cursor-pointer",
          i && "opacity-50 cursor-not-allowed"
        ),
        onMouseDown: N,
        children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute h-full bg-primary rounded-full",
              style: { left: `${u ? $ : 0}%`, width: `${u ? B - $ : $}%` }
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: ce(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                i && "cursor-not-allowed"
              ),
              style: { left: `${$}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: Y(0)
            }
          ),
          u && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: ce(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                i && "cursor-not-allowed"
              ),
              style: { left: `${B}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: Y(1)
            }
          )
        ]
      }
    ),
    f.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex justify-between mt-2", children: f.map((D) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "text-xs text-gray",
        style: { left: `${(D.value - t) / (r - t) * 100}%` },
        children: D.label
      },
      D.value
    )) }),
    d && /* @__PURE__ */ e.jsx("div", { className: "mt-2 text-sm text-gray-600", children: u ? `${j} - ${A}` : j })
  ] });
}, Js = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}, Xs = {
  primary: "text-primary",
  warning: "text-warning",
  default: "text-default-400"
}, Ga = ({
  rating: t,
  maxRating: r = 5,
  size: s = "md",
  color: a = "primary",
  readOnly: n = !1,
  onRatingChange: l,
  className: c
}) => {
  const [i, d] = te(null), f = (g) => {
    n || d(g);
  }, m = () => {
    n || d(null);
  }, u = (g) => {
    !n && l && l(g);
  }, x = i !== null ? i : t;
  return /* @__PURE__ */ e.jsx("div", { className: v("flex items-center gap-1", c), children: [...Array(r)].map((g, w) => {
    const p = w + 1, b = p <= x, y = i !== null && p <= i;
    return /* @__PURE__ */ e.jsx(
      "button",
      {
        className: v(
          "transition-colors duration-200",
          Js[s],
          b || y ? Xs[a] : "text-default-200",
          !n && "cursor-pointer"
        ),
        onMouseEnter: () => f(p),
        onMouseLeave: m,
        onClick: () => u(p),
        disabled: n,
        "aria-label": `Rate ${p} out of ${r}`,
        children: /* @__PURE__ */ e.jsx(
          ae,
          {
            icon: b || y ? "mdi:star" : "mdi:star-outline",
            className: "w-full h-full"
          }
        )
      },
      w
    );
  }) });
}, Qs = {
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
}, ea = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4"
}, Ha = ({
  status: t,
  size: r = "md",
  withLabel: s = !1,
  className: a
}) => {
  const { bgColor: n, label: l } = Qs[t], c = ea[r];
  return /* @__PURE__ */ e.jsxs("div", { className: v("flex items-center gap-2", a), children: [
    /* @__PURE__ */ e.jsx("div", { className: v("rounded-full animate-pulse", n, c) }),
    s && /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: l })
  ] });
}, pr = (t, r) => {
  if (r) return r;
  switch (t) {
    case "completed":
      return "mdi:check";
    case "active":
      return "mdi:circle-medium";
    default:
      return "mdi:circle-outline";
  }
}, xr = (t) => {
  switch (t) {
    case "completed":
      return "text-white bg-primary ring-4 ring-primary-50";
    case "active":
      return "text-primary bg-primary-50 ring-4 ring-primary-50";
    default:
      return "text-neutral bg-neutral-50 ring-4 ring-neutral-50";
  }
}, ta = ({
  steps: t,
  activeStep: r,
  className: s,
  variant: a = "default"
}) => /* @__PURE__ */ e.jsx("div", { className: v("flex flex-row items-center w-full justify-between", s), children: t.map((n, l) => {
  const c = l < r ? "completed" : l === r ? "active" : "pending";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "flex items-center flex-1",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: v(
          "flex flex-col items-center z-10",
          a === "default" ? "gap-4" : "gap-2",
          a === "default" ? "px-5" : "px-3"
        ), children: [
          a === "default" && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: v(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                xr(c)
              ),
              children: /* @__PURE__ */ e.jsx(
                ae,
                {
                  icon: pr(c, n.icon),
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
                children: n.label
              }
            ),
            n.description && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-neutral", children: n.description })
          ] })
        ] }),
        l < t.length - 1 && /* @__PURE__ */ e.jsx(
          Vs,
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
}) }), ra = ({
  steps: t,
  activeStep: r,
  className: s,
  variant: a = "default"
}) => /* @__PURE__ */ e.jsx("div", { className: v("flex flex-col items-start gap-8", s), children: t.map((n, l) => {
  const c = l < r ? "completed" : l === r ? "active" : "pending";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "flex flex-row w-full items-center relative",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: v(
          "flex flex-row items-center z-10",
          a === "default" ? "gap-4" : "gap-2"
        ), children: [
          a === "default" && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: v(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                xr(c)
              ),
              children: /* @__PURE__ */ e.jsx(
                ae,
                {
                  icon: pr(c, n.icon),
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
                children: n.label
              }
            ),
            n.description && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-neutral", children: n.description })
          ] })
        ] }),
        l < t.length - 1 && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: v(
              "absolute transition-all duration-200",
              a === "default" ? "left-4 w-[1px] top-10 bottom-[-24px]" : "left-0 w-[1px] top-6 bottom-[-24px]",
              l < r ? "bg-primary" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    l
  );
}) }), Wa = ({
  orientation: t = "horizontal",
  variant: r = "default",
  ...s
}) => t === "vertical" ? /* @__PURE__ */ e.jsx(ra, { variant: r, ...s }) : /* @__PURE__ */ e.jsx(ta, { variant: r, ...s }), Ua = ({
  label: t,
  checked: r = !1,
  disabled: s = !1,
  onChange: a,
  size: n = "md"
}) => {
  const l = (d) => {
    a && a(d.target.checked);
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
      className: ce(
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
              checked: r,
              disabled: s,
              onChange: l
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: ce(
                "block rounded-full transition-colors duration-200 ease-in-out",
                c[n],
                r ? "bg-primary" : "bg-gray-200 dark:bg-gray-700",
                s && "cursor-not-allowed"
              )
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: ce(
                "absolute rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out",
                i[n],
                r ? n === "sm" ? "translate-x-4" : n === "md" ? "translate-x-5" : "translate-x-7" : "translate-x-0.5",
                "top-1/2 -translate-y-1/2"
              )
            }
          )
        ] }),
        t && /* @__PURE__ */ e.jsx("span", { className: "ml-3 text-sm text-gray-700 dark:text-gray-300", children: t })
      ]
    }
  );
}, Ka = ({
  items: t,
  defaultActiveId: r,
  variant: s = "default",
  size: a = "md",
  className: n,
  tabListClassName: l,
  tabClassName: c,
  contentClassName: i,
  onChange: d
}) => {
  var y, j;
  const [f, m] = te(r || ((y = t[0]) == null ? void 0 : y.id) || ""), u = he.useRef(null), [x, g] = te({ left: 0, width: 0 });
  he.useEffect(() => {
    var A;
    if (s === "active-underline" && u.current) {
      const L = u.current.getBoundingClientRect(), E = (A = u.current.parentElement) == null ? void 0 : A.getBoundingClientRect();
      E && g({
        left: L.left - E.left,
        width: L.width
      });
    }
  }, [s, t, f]), he.useEffect(() => {
    if (s === "active-underline") {
      const A = () => {
        var L;
        if (u.current) {
          const E = u.current.getBoundingClientRect(), H = (L = u.current.parentElement) == null ? void 0 : L.getBoundingClientRect();
          H && g({
            left: E.left - H.left,
            width: E.width
          });
        }
      };
      return window.addEventListener("resize", A), () => window.removeEventListener("resize", A);
    }
  }, [s, t, f]);
  const w = Ge((A) => {
    m(A), d == null || d(A);
  }, [d]), p = () => {
    switch (a) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  }, b = (A, L) => {
    const E = ce(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      p(),
      L && "opacity-50 cursor-not-allowed",
      !L && "cursor-pointer"
    );
    switch (s) {
      case "pills":
        return ce(
          E,
          "rounded-full",
          A ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return ce(
          E,
          "border-b-2",
          A ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      case "active-underline":
        return ce(
          E,
          "border-b-0",
          A ? "text-primary" : "text-gray-600 dark:text-gray-300 hover:text-primary"
        );
      default:
        return ce(
          E,
          "border-b-2",
          A ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: ce("w-full", n), children: [
    /* @__PURE__ */ e.jsxs("div", { className: ce(
      s === "active-underline" ? "relative" : "",
      "flex space-x-1",
      s === "pills" && "space-x-2 border-b-0",
      s !== "active-underline" && "border-b border-gray-200 dark:border-gray-700",
      l
    ), children: [
      t.map((A) => {
        const L = A.id === f, E = !!A.disabled;
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            ref: s === "active-underline" && L ? u : void 0,
            onClick: () => !E && w(A.id),
            disabled: E,
            className: ce(
              b(L, E),
              c
            ),
            children: [
              A.icon && /* @__PURE__ */ e.jsx(
                ae,
                {
                  icon: A.icon,
                  className: "w-5 h-5 flex-shrink-0"
                }
              ),
              /* @__PURE__ */ e.jsx("span", { children: A.label })
            ]
          },
          A.id
        );
      }),
      s === "active-underline" && /* @__PURE__ */ e.jsx(
        "span",
        {
          className: "absolute bottom-0 h-0.5 bg-primary transition-all duration-300",
          style: { left: x.left, width: x.width }
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: ce("mt-4", i), children: (j = t.find((A) => A.id === f)) == null ? void 0 : j.content })
  ] });
}, ut = ({
  variant: t = "p",
  children: r,
  className: s,
  as: a
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
  }, c = a || ((i) => {
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
  return /* @__PURE__ */ e.jsx(c, { className: v("text-gray-900", n[t], s), children: r });
}, Nt = "timepicker-dropdown-opened", sa = Ne(
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
), hr = je(
  ({
    value: t,
    onChange: r,
    use24Hour: s = !1,
    variant: a = "default",
    size: n = "md",
    rounded: l = "xl",
    disabled: c = !1,
    errorText: i,
    helperText: d,
    label: f,
    required: m = !1,
    labelPlacement: u = "top",
    fullWidth: x = !1,
    className: g,
    placeholder: w = "Select time",
    leftIcon: p,
    rightIcon: b,
    valueFormatter: y,
    closeOnSelect: j = !0,
    ...A
  }, L) => {
    const [E, H] = te(!1), [Y, N] = te(t || ""), [S, k] = te(0), [G, R] = te(0), [C, $] = te(!0), B = pe(null), D = pe(null), h = pe(null), _ = `timepicker-${he.useId().replace(/:/g, "")}`, oe = () => {
      if (!E || !D.current || !h.current) return;
      const M = D.current.getBoundingClientRect(), X = h.current, we = Me().innerHeight - M.bottom;
      X.style.top = `${M.bottom + 4}px`, X.style.bottom = "auto", X.style.left = `${M.left}px`, X.style.maxHeight = `${we - 8}px`, X.style.width = `${M.width}px`;
    };
    be(() => {
      const M = Me(), X = ke(), xe = () => {
        E && oe();
      }, we = () => {
        E && oe();
      }, Te = (Ie) => {
        Ie.detail.id !== _ && H(!1);
      }, Oe = (Ie) => {
        const Le = Ie.target;
        B.current && h.current && !B.current.contains(Le) && !h.current.contains(Le) && H(!1);
      };
      return E && (oe(), M.addEventListener("scroll", xe, !0), M.addEventListener("resize", we)), X.addEventListener(Nt, Te), X.addEventListener("mousedown", Oe), () => {
        M.removeEventListener("scroll", xe, !0), M.removeEventListener("resize", we), X.removeEventListener(Nt, Te), X.removeEventListener("mousedown", Oe);
      };
    }, [E, _]);
    const z = () => {
      c || (E || ke().dispatchEvent(
        new CustomEvent(Nt, {
          detail: { id: _ }
        })
      ), H(!E));
    };
    be(() => {
      if (t) {
        N(t);
        const [M, X] = t.split(":").map(Number);
        s ? k(M) : (k(M % 12 || 12), $(M < 12)), R(X);
      }
    }, [t, s]);
    const Z = () => {
      const X = `${(s || C ? S : S + 12).toString().padStart(2, "0")}:${G.toString().padStart(2, "0")}`;
      N(X), r == null || r(X), j && H(!1);
    }, O = () => s ? Array.from({ length: 24 }, (M, X) => X) : Array.from({ length: 12 }, (M, X) => X + 1), V = () => Array.from({ length: 60 }, (M, X) => X), J = y ? y(Y) : Y, re = ke();
    return "body" in re ? /* @__PURE__ */ e.jsxs("div", { ref: B, className: v("relative", x && "w-full", g), children: [
      f && /* @__PURE__ */ e.jsxs(
        "label",
        {
          className: v(
            "block text-sm font-medium text-gray-700 mb-1",
            u === "left" && "inline-block mr-2"
          ),
          children: [
            f,
            m && /* @__PURE__ */ e.jsx("span", { className: "text-red ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: D,
          className: "relative",
          onClick: z,
          children: [
            p && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ e.jsx(ae, { icon: p, size: 20 }) }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: L,
                type: "text",
                value: J,
                placeholder: w,
                readOnly: !0,
                className: v(
                  sa({ variant: a, size: n, rounded: l, fullWidth: x }),
                  p && "pl-10",
                  b && "pr-10",
                  "text-left"
                ),
                disabled: c,
                ...A
              }
            ),
            b && /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ e.jsx(ae, { icon: b, size: 20 }) })
          ]
        }
      ),
      E && He(
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: h,
            className: "fixed z-[9999] w-fit rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (M) => M.stopPropagation(),
            children: /* @__PURE__ */ e.jsxs("div", { className: "p-0", children: [
              /* @__PURE__ */ e.jsxs(Dt, { variant: "ghost", className: v(
                "flex mx-2 my-1 p-0",
                s ? "justify-start gap-8" : "justify-start gap-4"
              ), children: [
                /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2", children: O().map((M) => /* @__PURE__ */ e.jsx(
                  Re,
                  {
                    variant: "ghost",
                    onClick: () => k(M),
                    className: v(S === M && "bg-primary text-white"),
                    children: M.toString().padStart(2, "0")
                  },
                  M
                )) }) }) }),
                /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2", children: V().map((M) => /* @__PURE__ */ e.jsx(
                  Re,
                  {
                    variant: "ghost",
                    onClick: () => R(M),
                    className: v(G === M && "bg-primary text-white"),
                    children: M.toString().padStart(2, "0")
                  },
                  M
                )) }) }) }),
                !s && /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ e.jsx(
                    Re,
                    {
                      variant: "ghost",
                      onClick: () => $(!0),
                      className: v(C && "bg-primary text-white"),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    Re,
                    {
                      variant: "ghost",
                      onClick: () => $(!1),
                      className: v(!C && "bg-primary text-white"),
                      children: "PM"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "mb-2 mx-2", children: /* @__PURE__ */ e.jsx(
                Re,
                {
                  variant: "primary",
                  onClick: Z,
                  size: "sm",
                  fullWidth: !0,
                  children: "Select"
                }
              ) })
            ] })
          }
        ),
        re.body
      ),
      i && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-danger-600", children: i }),
      d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-gray", children: d })
    ] }) : null;
  }
);
hr.displayName = "PrimitiveTimePicker";
const aa = ({
  value: t,
  onChange: r,
  valueFormatter: s,
  closeOnSelect: a,
  ...n
}) => /* @__PURE__ */ e.jsx(
  hr,
  {
    value: t,
    onChange: r,
    valueFormatter: s,
    closeOnSelect: a,
    ...n
  }
);
aa.displayName = "TimePicker";
const na = Ne(
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
), oa = Ne(
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
), la = je(
  ({
    checked: t = !1,
    onCheckedChange: r,
    variant: s = "primary",
    size: a = "md",
    label: n,
    required: l = !1,
    helperText: c,
    errorText: i,
    error: d = !1,
    className: f,
    ...m
  }, u) => {
    const x = he.useId(), g = `${x}-helper`, w = `${x}-error`;
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
            className: v(na({ variant: d ? "danger" : s, size: a }), f),
            "aria-describedby": d ? w : c ? g : void 0,
            "aria-invalid": d,
            "aria-required": l,
            ...m,
            children: /* @__PURE__ */ e.jsx(
              "span",
              {
                "data-state": t ? "checked" : "unchecked",
                className: v(
                  oa({ size: a }),
                  t ? "translate-x-5" : "translate-x-1"
                )
              }
            )
          }
        ),
        n && /* @__PURE__ */ e.jsxs(
          "label",
          {
            htmlFor: x,
            className: "text-sm text-neutral-900",
            children: [
              n,
              l && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ]
          }
        )
      ] }),
      d && i && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-danger", id: w, children: i }),
      !d && c && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-neutral", id: g, children: c })
    ] });
  }
);
la.displayName = "Toggle";
const ia = Ne(
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
), ca = Ne("absolute w-2 h-2 transform rotate-45", {
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
}), qa = ({
  content: t,
  children: r,
  position: s = "top",
  delay: a = 0,
  className: n,
  color: l = "light",
  size: c = "md",
  isOpen: i,
  onOpenChange: d,
  trigger: f = "hover"
}) => {
  const [m, u] = te(!1), [x, g] = te({ top: 0, left: 0 }), w = pe(null), p = pe(null), b = pe(), y = i !== void 0, j = y ? i : m, A = () => {
    if (!w.current || !p.current) return;
    const N = p.current.getBoundingClientRect(), S = w.current.getBoundingClientRect(), k = Me(), G = k.scrollX || k.pageXOffset, R = k.scrollY || k.pageYOffset;
    let C = 0, $ = 0;
    const B = 8;
    switch (s) {
      case "top":
        C = N.top + R - S.height - B, $ = N.left + G + (N.width - S.width) / 2;
        break;
      case "bottom":
        C = N.bottom + R + B, $ = N.left + G + (N.width - S.width) / 2;
        break;
      case "left":
        C = N.top + R + (N.height - S.height) / 2, $ = N.left + G - S.width - B;
        break;
      case "right":
        C = N.top + R + (N.height - S.height) / 2, $ = N.right + G + B;
        break;
    }
    const D = k.innerWidth, h = k.innerHeight;
    $ < 0 && ($ = 0), $ + S.width > D && ($ = D - S.width), C < 0 && (C = 0), C + S.height > h && (C = h - S.height), g({ top: C, left: $ });
  };
  be(() => {
    if (j) {
      A();
      const N = Me();
      N.addEventListener("scroll", A, !0), N.addEventListener("resize", A);
    }
    return () => {
      const N = Me();
      N.removeEventListener("scroll", A, !0), N.removeEventListener("resize", A);
    };
  }, [j, s]);
  const L = () => {
    y ? d == null || d(!0) : b.current = setTimeout(() => {
      u(!0);
    }, a);
  }, E = () => {
    b.current && clearTimeout(b.current), y ? d == null || d(!1) : u(!1);
  }, H = (N) => {
    N.stopPropagation(), f === "click" && (y ? d == null || d(!i) : u(!m));
  };
  be(() => {
    const N = (S) => {
      f === "click" && w.current && !w.current.contains(S.target) && p.current && !p.current.contains(S.target) && E();
    };
    return j && document.addEventListener("click", N), () => {
      document.removeEventListener("click", N);
    };
  }, [j, f]);
  const Y = () => {
    if (!j) return null;
    const N = ke();
    return "body" in N ? He(
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: w,
          className: v(ia({ color: l, size: c }), n),
          style: {
            top: `${x.top}px`,
            left: `${x.left}px`
          },
          children: [
            t,
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: v(
                  ca({ color: l }),
                  s === "top" && "bottom-[-4px] left-1/2 -translate-x-1/2",
                  s === "bottom" && "top-[-4px] left-1/2 -translate-x-1/2",
                  s === "left" && "right-[-4px] top-1/2 -translate-y-1/2",
                  s === "right" && "left-[-4px] top-1/2 -translate-y-1/2",
                  l === "light" && s === "top" && "border-r border-b border-neutral-200",
                  l === "light" && s === "bottom" && "border-l border-t border-neutral-200",
                  l === "light" && s === "left" && "border-t border-r border-neutral-200",
                  l === "light" && s === "right" && "border-l border-b border-neutral-200"
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
      ref: p,
      className: "relative inline-block",
      onMouseEnter: f === "hover" ? L : void 0,
      onMouseLeave: f === "hover" ? E : void 0,
      onClick: H,
      children: [
        r,
        Y()
      ]
    }
  ) });
}, da = Ne(
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
), ua = {
  sm: 24,
  md: 36,
  lg: 48
}, ma = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  info: "bg-info"
}, fa = {
  primary: "#007C99",
  // Tailwind primary
  secondary: "#CEEAE7",
  success: "#00B37D",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#0EA5E9"
}, ga = he.forwardRef(
  ({
    className: t,
    variant: r = "bar",
    color: s = "primary",
    size: a = "md",
    value: n = 0,
    isIndeterminate: l = !1,
    showValue: c = !1,
    label: i,
    rounded: d = "full",
    icon: f,
    ...m
  }, u) => {
    const x = Math.min(Math.max(n, 0), 100), g = ua[a], w = a === "sm" ? 2 : a === "md" ? 3 : 4, p = (g - w) / 2, b = 2 * Math.PI * p, y = b - x / 100 * b;
    let j = "";
    return r === "loading" ? j = "rounded-full" : d ? j = d === "none" ? "" : `rounded-${d}` : j = "rounded-md", r === "circular" ? /* @__PURE__ */ e.jsxs("div", { className: "inline-flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative", style: { width: g, height: g }, children: [
        /* @__PURE__ */ e.jsxs(
          "svg",
          {
            className: v(
              "transform -rotate-90",
              l ? "animate-spin" : ""
            ),
            width: g,
            height: g,
            children: [
              /* @__PURE__ */ e.jsx(
                "circle",
                {
                  strokeWidth: w,
                  stroke: "#e5e7eb",
                  fill: "transparent",
                  r: p,
                  cx: g / 2,
                  cy: g / 2
                }
              ),
              /* @__PURE__ */ e.jsx(
                "circle",
                {
                  className: v(
                    "transition-all duration-300 ease-in-out",
                    l ? "animate-dash" : ""
                  ),
                  strokeWidth: w,
                  strokeDasharray: b,
                  strokeDashoffset: l ? 0 : y,
                  strokeLinecap: "round",
                  stroke: fa[s],
                  fill: "transparent",
                  r: p,
                  cx: g / 2,
                  cy: g / 2
                }
              )
            ]
          }
        ),
        f && /* @__PURE__ */ e.jsx("span", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ e.jsx(ae, { icon: f, size: g * 0.5 }) }),
        c && !l && !f && /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 flex items-center justify-center text-xs font-medium", children: [
          Math.round(x),
          "%"
        ] })
      ] }),
      i && /* @__PURE__ */ e.jsx("span", { className: "text-sm text-neutral-600", children: i })
    ] }) : /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: u,
          className: v(da({ variant: r === "loading" ? "bar" : r, size: a }), j, t),
          role: "progressbar",
          "aria-valuenow": l ? void 0 : x,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...m,
          children: /* @__PURE__ */ e.jsx(
            "div",
            {
              className: v(
                "h-full transition-all duration-300 ease-in-out",
                l ? "animate-progress-indeterminate" : "",
                ma[s],
                j
              ),
              style: {
                width: l ? "100%" : `${x}%`
              }
            }
          )
        }
      ),
      (c || i) && /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between text-xs text-neutral-600", children: [
        i && /* @__PURE__ */ e.jsx("span", { children: i }),
        c && !l && /* @__PURE__ */ e.jsxs("span", { children: [
          Math.round(x),
          "%"
        ] })
      ] })
    ] });
  }
);
ga.displayName = "Progress";
const Ye = [
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
], pa = Ne(
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
), Et = (t) => {
  if (!t || !t.startsWith("+"))
    return null;
  const r = [...Ye].sort(
    (s, a) => a.code.length - s.code.length
  );
  for (const s of r)
    if (t.startsWith(s.code))
      return s;
  return null;
}, Zt = (t) => {
  if (!t || t.startsWith("+"))
    return null;
  const r = [...Ye].sort(
    (s, a) => a.code.length - s.code.length
  );
  for (const s of r) {
    const a = s.code.replace("+", "");
    if (t.startsWith(a))
      return s;
  }
  return null;
}, xa = (t) => t.startsWith("0") && t.length >= 9 && t.length <= 12 ? "+62" + t.slice(1) : t, ha = (t) => t.startsWith("0") && t.length >= 3, Mt = je(
  ({
    className: t,
    variant: r = "default",
    size: s = "md",
    rounded: a = "xl",
    error: n = !1,
    errorText: l,
    helperText: c,
    label: i,
    required: d = !1,
    fullWidth: f = !1,
    value: m = "",
    onChange: u,
    disabled: x = !1,
    defaultCountry: g = "id",
    placeholder: w = "Enter phone number",
    autoDetect: p = !0,
    ...b
  }) => {
    const [y, j] = te(!1), [A, L] = te(
      () => Ye.find((O) => O.iso === g) || Ye[0]
    ), [E, H] = te(""), [Y, N] = te(() => {
      if (p && m) {
        const V = Et(m);
        if (V)
          return L(V), m;
        const J = Zt(m);
        return J ? (L(J), J.code + m.slice(J.code.replace("+", "").length)) : m;
      }
      const O = A.code;
      return m.startsWith(O) ? m.slice(O.length) : m;
    }), [S, k] = te(() => p && m ? !!(Et(m) || Zt(m)) : !1), G = pe(null), R = pe(null), C = he.useId(), $ = `${C}-helper`, B = `${C}-error`, D = Ye.filter(
      (O) => O.name.toLowerCase().includes(E.toLowerCase()) || O.code.includes(E)
    ), h = pe(null), I = () => {
      if (y && G.current && R.current) {
        const O = G.current.getBoundingClientRect(), V = R.current, J = typeof window < "u" ? window : { innerHeight: 0 }, re = J.innerHeight - O.bottom, M = O.top, xe = O.bottom + (V.offsetHeight || 0) + 4 >= J.innerHeight, we = M > re, Te = xe && we;
        V.style.position = "fixed", V.style.left = `${O.left}px`, V.style.minWidth = `${O.width}px`, V.style.maxWidth = "340px", V.style.width = "auto", Te ? (V.style.bottom = `${J.innerHeight - O.top + 4}px`, V.style.top = "auto", V.style.maxHeight = `${M - 8}px`) : (V.style.top = `${O.bottom + 4}px`, V.style.bottom = "auto", V.style.maxHeight = `${re - 8}px`);
      }
    };
    be(() => {
      const O = typeof window < "u" ? window : void 0, V = () => {
        y && I();
      }, J = () => {
        y && I();
      };
      return y && (I(), O == null || O.addEventListener("scroll", V, !0), O == null || O.addEventListener("resize", J)), () => {
        O == null || O.removeEventListener("scroll", V, !0), O == null || O.removeEventListener("resize", J);
      };
    }, [y]), be(() => {
      if (!y) return;
      const O = (V) => {
        const J = V.target;
        G.current && R.current && !G.current.contains(J) && !R.current.contains(J) && j(!1);
      };
      return document.addEventListener("click", O), () => document.removeEventListener("click", O);
    }, [y]);
    const _ = (O) => {
      if (L(O), j(!1), H(""), p) {
        const V = O.code + Y.replace(/^\+?\d*/, "");
        N(V);
        const J = V.replace(/[^\d]/g, "");
        u == null || u(J);
      } else {
        const J = (O.code + Y).replace(/[^\d]/g, "");
        u == null || u(J);
      }
    }, oe = (O) => {
      const V = O.target.value;
      if (/^[+\d]*$/.test(V))
        if (p && V.startsWith("+")) {
          const re = Et(V);
          if (re) {
            L(re), k(!0), N(V);
            const M = V.replace(/[^\d]/g, "");
            u == null || u(M);
          } else {
            N(V), k(!1);
            const M = V.replace(/[^\d]/g, "");
            u == null || u(M);
          }
        } else if (p && !V.startsWith("+") && V.length > 0) {
          const re = xa(V);
          if (re !== V) {
            N(re), L(
              Ye.find((X) => X.iso === "id") || Ye[0]
            ), k(!0);
            const M = re.replace(/[^\d]/g, "");
            u == null || u(M);
          } else if (ha(V)) {
            const M = "+62" + V.slice(1);
            N(M), L(
              Ye.find((xe) => xe.iso === "id") || Ye[0]
            ), k(!0);
            const X = M.replace(/[^\d]/g, "");
            u == null || u(X);
          } else if (V.startsWith("0"))
            N(V), k(!1);
          else {
            const M = "+" + V;
            N(M);
            const X = M.replace(/[^\d]/g, "");
            u == null || u(X);
          }
        } else {
          const re = V.replace(/[^\d]/g, "");
          N(re);
          const X = (A.code + re).replace(/[^\d]/g, "");
          u == null || u(X);
        }
    }, z = v(
      pa({
        variant: n ? "error" : r,
        size: s,
        rounded: a,
        fullWidth: f
      }),
      "!w-full"
    ), Z = !p || p && S;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: h,
        className: v(f ? "w-full" : "inline-block", t),
        ...b,
        children: [
          i && /* @__PURE__ */ e.jsxs("label", { htmlFor: C, className: "mb-1.5 block text-sm text-neutral-900", children: [
            i,
            d && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: v("relative", !f && "inline-block"), children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex", children: [
              Z && /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  ref: G,
                  onClick: () => !x && j(!y),
                  className: v(
                    z,
                    "flex items-center gap-2 rounded-r-none justify-between",
                    p ? "max-w-[60px]" : "max-w-[100px]",
                    x && "cursor-not-allowed opacity-50"
                  ),
                  children: [
                    /* @__PURE__ */ e.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ e.jsx(ae, { icon: A.flag, className: "w-5 h-5" }),
                      !p && /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: A.code })
                    ] }),
                    /* @__PURE__ */ e.jsx(
                      ae,
                      {
                        icon: "mdi:chevron-down",
                        className: v("transition-transform", y && "rotate-180")
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "tel",
                  id: C,
                  value: Y,
                  onChange: oe,
                  disabled: x,
                  className: v(
                    z,
                    Z ? "rounded-l-none" : `rounded-l-${a}`,
                    "flex-1 min-w-0 w-full"
                  ),
                  placeholder: p ? "e.g. +6281234567890" : w
                }
              )
            ] }),
            y && He(
              /* @__PURE__ */ e.jsxs(
                "div",
                {
                  ref: R,
                  className: "border border-neutral-200 bg-white shadow-lg overflow-y-auto rounded-md",
                  children: [
                    /* @__PURE__ */ e.jsx("div", { className: "p-2 border-b border-neutral-200", children: /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: E,
                        onChange: (O) => {
                          const V = O.target.value;
                          /^[a-zA-Z0-9\s]*$/.test(V) && H(V);
                        },
                        placeholder: "Search countries...",
                        className: "w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:border-primary-300"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "max-h-[300px] overflow-y-auto", children: D.map((O) => /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => _(O),
                        className: v(
                          "w-full px-3 py-2 text-sm text-left hover:bg-primary-50 cursor-pointer",
                          A.iso === O.iso && "bg-primary-50"
                        ),
                        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ e.jsx(ae, { icon: O.flag, className: "w-5 h-5" }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-sm font-medium", children: O.code }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-sm text-neutral-600", children: O.name })
                        ] })
                      },
                      O.iso + O.code
                    )) })
                  ]
                }
              ),
              typeof document < "u" ? document.body : document
            )
          ] }),
          n && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: B, children: l }),
          !n && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: $, children: c })
        ]
      }
    );
  }
);
Mt.displayName = "PhoneInput";
const Za = () => {
  const [t, r] = te(""), [s, a] = te("");
  return /* @__PURE__ */ e.jsxs("div", { className: "p-6 space-y-8", children: [
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "PhoneInput Component Demo" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-gray-600 mb-6", children: "This demo showcases both manual country selection and automatic country detection modes." })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ e.jsx("h3", { className: "text-xl font-semibold", children: "Manual Selection Mode" }),
        /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: "Select country from dropdown first, then type the phone number." }),
        /* @__PURE__ */ e.jsx(
          Mt,
          {
            label: "Phone Number (Manual)",
            value: t,
            onChange: r,
            helperText: "Select country first, then type number"
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-gray-50 rounded", children: [
          /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium", children: "Current Value (Clean Numeric):" }),
          /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-600", children: t || "No input yet" })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ e.jsx("h3", { className: "text-xl font-semibold", children: "Auto Detect Mode" }),
        /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: "Start with a single input field. Type + and country code, then the country selector (flag only) will appear." }),
        /* @__PURE__ */ e.jsx(
          Mt,
          {
            label: "Phone Number (Auto Detect)",
            autoDetect: !0,
            value: s,
            onChange: a,
            helperText: "Start typing with + and country code. Country selector (flag only) will appear after detection."
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-gray-50 rounded", children: [
          /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium", children: "Current Value (Clean Numeric):" }),
          /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-600", children: s || "No input yet" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ e.jsx("h3", { className: "text-xl font-semibold", children: "Auto Detect Examples" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: "Try typing these numbers in the Auto Detect mode. Start with + and the country selector (flag only) will appear:" }),
      /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "p-3 border rounded", children: [
          /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium", children: "US Number" }),
          /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500", children: "+1234567890" }),
          /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-400", children: "Detects United States (+1)" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "p-3 border rounded", children: [
          /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium", children: "UK Number" }),
          /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500", children: "+447911123456" }),
          /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-400", children: "Detects United Kingdom (+44)" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "p-3 border rounded", children: [
          /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium", children: "Indonesian Number" }),
          /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500", children: "+6281234567890" }),
          /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-400", children: "Detects Indonesia (+62)" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "p-3 border rounded", children: [
          /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium", children: "German Number" }),
          /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500", children: "+49123456789" }),
          /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-400", children: "Detects Germany (+49)" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ e.jsx("h3", { className: "text-xl font-semibold", children: "Indonesian Number Special Handling" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: "Indonesian numbers starting with 0 are automatically converted to +62 format:" }),
      /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "p-3 border rounded bg-green-50", children: [
          /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium", children: "Auto-Conversion" }),
          /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500", children: "081327368782" }),
          /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-400", children: "→ +6281327368782 (0 → +62)" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "p-3 border rounded bg-blue-50", children: [
          /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium", children: "Explicit Format" }),
          /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500", children: "+6281327368782" }),
          /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-400", children: "No conversion needed" })
        ] })
      ] })
    ] })
  ] });
}, ba = Ne(
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
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
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
      rounded: "xl",
      shadow: "md"
    }
  }
), Ja = ({
  content: t,
  children: r,
  position: s = "bottom",
  color: a = "light",
  customColor: n,
  rounded: l = "xl",
  shadow: c = "md",
  className: i,
  trigger: d = "click",
  autoFocus: f = !1,
  isOpen: m,
  onOpenChange: u,
  closeOnClickOutside: x = !0
}) => {
  const [g, w] = te(!1), [p, b] = te({ top: 0, left: 0 }), y = pe(null), j = pe(null), A = m !== void 0, L = A ? m : g, E = () => {
    if (!y.current || !j.current) return;
    const k = j.current.getBoundingClientRect(), G = y.current.getBoundingClientRect(), R = Me(), C = R.scrollX || R.pageXOffset, $ = R.scrollY || R.pageYOffset;
    let B = 0, D = 0;
    const h = 8;
    switch (s) {
      case "top":
        B = k.top + $ - G.height - h, D = k.left + C + (k.width - G.width) / 2;
        break;
      case "bottom":
        B = k.bottom + $ + h, D = k.left + C + (k.width - G.width) / 2;
        break;
      case "left":
        B = k.top + $ + (k.height - G.height) / 2, D = k.left + C - G.width - h;
        break;
      case "right":
        B = k.top + $ + (k.height - G.height) / 2, D = k.right + C + h;
        break;
    }
    const I = R.innerWidth, _ = R.innerHeight;
    D < 0 && (D = 0), D + G.width > I && (D = I - G.width), B < 0 && (B = 0), B + G.height > _ && (B = _ - G.height), b({ top: B, left: D });
  };
  be(() => {
    if (L) {
      E();
      const k = Me();
      k.addEventListener("scroll", E, !0), k.addEventListener("resize", E);
    }
    return () => {
      const k = Me();
      k.removeEventListener("scroll", E, !0), k.removeEventListener("resize", E);
    };
  }, [L, s]), be(() => {
    if (L && f && y.current) {
      const k = y.current.querySelector(
        "input, select, textarea, button, [tabindex]:not([tabindex='-1'])"
      );
      k && k.focus();
    }
  }, [L, f]);
  const H = () => {
    A ? u == null || u(!0) : w(!0);
  }, Y = () => {
    A ? u == null || u(!1) : w(!1);
  }, N = (k) => {
    k.stopPropagation(), d === "click" && (A ? u == null || u(!m) : w(!g));
  };
  be(() => {
    if (!x) return;
    const k = (G) => {
      d === "click" && y.current && !y.current.contains(G.target) && j.current && !j.current.contains(G.target) && Y();
    };
    return L && document.addEventListener("pointerdown", k, !0), () => {
      document.removeEventListener("pointerdown", k, !0);
    };
  }, [L, d, x]);
  const S = () => {
    if (!L) return null;
    const k = ke();
    return "body" in k ? He(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: y,
          className: v(
            ba({ color: a, rounded: l, shadow: c }),
            a === "custom" && n ? n : "",
            i
          ),
          style: {
            top: `${p.top}px`,
            left: `${p.left}px`,
            background: a === "custom" && n ? n : void 0
          },
          tabIndex: -1,
          children: t
        }
      ),
      k.body
    ) : null;
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: j,
      className: "relative inline-block",
      onMouseEnter: d === "hover" ? H : void 0,
      onMouseLeave: d === "hover" ? Y : void 0,
      onClick: N,
      tabIndex: 0,
      children: [
        r,
        S()
      ]
    }
  ) });
}, va = Ne("flex items-center text-sm", {
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
}), ya = je(
  ({
    className: t,
    variant: r = "default",
    size: s = "md",
    items: a,
    separator: n = /* @__PURE__ */ e.jsx(ae, { icon: "mdi:slash-forward", className: "h-4 w-4 flex-shrink-0" }),
    activeLastItem: l = !0,
    ...c
  }, i) => /* @__PURE__ */ e.jsx(
    "nav",
    {
      ref: i,
      className: v(va({ variant: r, size: s }), t),
      "aria-label": "Breadcrumb",
      ...c,
      children: /* @__PURE__ */ e.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: a.map((d, f) => {
        const m = f === a.length - 1, u = m && l;
        return /* @__PURE__ */ e.jsxs(
          "li",
          {
            className: v(
              "flex items-center gap-1.5",
              u && "text-primary font-medium"
            ),
            children: [
              d.icon && /* @__PURE__ */ e.jsx(
                ae,
                {
                  icon: d.icon,
                  className: v(
                    "flex-shrink-0",
                    s === "sm" && "h-3.5 w-3.5",
                    s === "md" && "h-4 w-4",
                    s === "lg" && "h-5 w-5"
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
              !m && /* @__PURE__ */ e.jsx("span", { className: v(
                "text-neutral-400 flex-shrink-0",
                s === "sm" && "scale-90",
                s === "lg" && "scale-110"
              ), children: n })
            ]
          },
          d.label
        );
      }) })
    }
  )
);
ya.displayName = "Breadcrumbs";
const br = (t) => {
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
}, wa = ({ schema: t, variant: r = "primary" }) => {
  const s = [{ name: "no", label: "No.", accessorKey: "no", type: "number" }, ...t], a = br(r);
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white rounded-md", children: /* @__PURE__ */ e.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full border-spacing-0 border-separate", children: [
    /* @__PURE__ */ e.jsx("thead", { className: v("border-2 sticky top-0 z-10 rounded-t-md", a.border), children: /* @__PURE__ */ e.jsx("tr", { children: s.map((n, l) => /* @__PURE__ */ e.jsx(
      "th",
      {
        className: v(
          "text-sm text-wrap border-y p-4 text-left",
          a.header,
          {
            "rounded-tl-md": l === 0,
            "rounded-tr-md": l === s.length - 1
          }
        ),
        children: n.label
      },
      l
    )) }) }),
    /* @__PURE__ */ e.jsx("tbody", { className: "max-h-[50vh]", children: [...Array(5)].map((n, l) => /* @__PURE__ */ e.jsx(
      "tr",
      {
        className: v("p-3", {
          [a.stripe]: l % 2 !== 0,
          "bg-white": l % 2 === 0
        }),
        children: s.map((c, i) => /* @__PURE__ */ e.jsx(
          "td",
          {
            className: "text-left text-nowrap text-sm p-4",
            children: /* @__PURE__ */ e.jsx(Zs, { className: "h-10 w-full rounded-md" })
          },
          `${l}-${i}`
        ))
      },
      l
    )) })
  ] }) }) });
}, Xa = ({
  schema: t,
  data: r,
  className: s,
  headerClassName: a,
  rowClassName: n,
  cellClassName: l,
  emptyState: c,
  isLoading: i,
  loadingState: d,
  showIndex: f = !1,
  onPageChange: m,
  onPageSizeChange: u,
  onSortChange: x,
  onRowClick: g,
  showPagination: w = !1,
  variant: p = "primary",
  meta: b = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [y, j] = te(() => {
    const Y = t.find((N) => N.sortable && N.sort);
    return Y ? [{
      id: Y.accessorKey.toString(),
      desc: Y.sort === "desc"
    }] : [];
  }), A = he.useMemo(() => {
    const Y = t.map((N) => ({
      accessorKey: N.accessorKey,
      header: N.label,
      enableSorting: !!N.sortable,
      cell: N.render ? ({ row: S }) => {
        var k;
        return (k = N.render) == null ? void 0 : k.call(N, S.original[N.accessorKey], S.original, S.index);
      } : ({ row: S }) => S.original[N.accessorKey] || "-",
      meta: {
        align: N.align || "left"
      }
    }));
    return f ? [{
      accessorKey: "no",
      header: "No.",
      enableSorting: !1,
      cell: ({ row: N }) => (b.current_page - 1) * b.limit_number + N.index + 1,
      meta: {
        align: "left"
      }
    }, ...Y] : Y;
  }, [t, f, b]), L = _r({
    data: r,
    columns: A,
    state: {
      sorting: y
    },
    onSortingChange: (Y) => {
      const N = typeof Y == "function" ? Y(y) : Y;
      j(N), N.length > 0 ? x == null || x(N[0].desc ? "desc" : "asc", N[0].id) : x == null || x("", "");
    },
    getCoreRowModel: Lr(),
    getSortedRowModel: Or(),
    getPaginationRowModel: zr(),
    manualPagination: !0,
    pageCount: b.total_page
  }), E = br(p);
  if (i)
    return d || /* @__PURE__ */ e.jsx(wa, { schema: t, variant: p });
  const H = (Y, N, S) => {
    const k = Y.target;
    k.tagName === "BUTTON" || k.tagName === "A" || k.tagName === "INPUT" || k.tagName === "SELECT" || k.closest("button") !== null || k.closest("a") !== null || k.closest("input") !== null || k.closest("select") !== null || g == null || g(N, S);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-md", children: [
    /* @__PURE__ */ e.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ e.jsxs("table", { className: v("w-full border-spacing-0 border-separate", s), children: [
      /* @__PURE__ */ e.jsx("thead", { className: v("border-2 sticky top-0 z-10 rounded-t-md", E.border), children: L.getHeaderGroups().map((Y) => /* @__PURE__ */ e.jsx("tr", { children: Y.headers.map((N, S) => {
        var k, G, R;
        return /* @__PURE__ */ e.jsx(
          "th",
          {
            className: v(
              "text-sm text-wrap border-y p-4",
              E.header,
              {
                "cursor-pointer": N.column.getCanSort(),
                "rounded-tl-md": S === 0,
                "rounded-tr-md": S === Y.headers.length - 1,
                "text-left": ((k = N.column.columnDef.meta) == null ? void 0 : k.align) === "left",
                "text-center": ((G = N.column.columnDef.meta) == null ? void 0 : G.align) === "center",
                "text-right": ((R = N.column.columnDef.meta) == null ? void 0 : R.align) === "right"
              },
              a
            ),
            onClick: N.column.getCanSort() ? N.column.getToggleSortingHandler() : void 0,
            children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsx("span", { className: v({
                "font-semibold": S === 0
              }), children: Ft(N.column.columnDef.header, N.getContext()) }),
              N.column.getCanSort() && /* @__PURE__ */ e.jsx(
                ae,
                {
                  icon: N.column.getIsSorted() ? N.column.getIsSorted() === "desc" ? "mdi:keyboard-arrow-up" : "mdi:keyboard-arrow-down" : "mdi:unfold-more-horizontal",
                  className: v("h-4 w-4", {
                    "text-white": p !== "ghost",
                    "text-gray-700": p === "ghost"
                  })
                }
              )
            ] })
          },
          N.id
        );
      }) }, Y.id)) }),
      /* @__PURE__ */ e.jsx("tbody", { className: "max-h-[50vh]", children: L.getRowModel().rows.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx(
        "td",
        {
          colSpan: L.getAllColumns().length,
          className: v(
            "text-center border h-full w-full rounded-b-md"
          ),
          children: c || /* @__PURE__ */ e.jsxs("div", { className: "flex mx-auto w-full text-center justify-center gap-3 items-center", children: [
            /* @__PURE__ */ e.jsx("p", { children: "Data Not Found" }),
            /* @__PURE__ */ e.jsx(ae, { icon: "mdi:face-frown-open", size: 34 })
          ] })
        }
      ) }) : L.getRowModel().rows.map((Y, N) => /* @__PURE__ */ e.jsx(
        "tr",
        {
          className: v(
            "p-3",
            E.row,
            {
              [E.stripe]: N % 2 !== 0,
              "bg-white": N % 2 === 0,
              "cursor-pointer": g
            },
            n
          ),
          onClick: (S) => H(S, Y.original, N),
          children: Y.getVisibleCells().map((S) => {
            var k, G, R;
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: v(
                  "px-4 py-3 text-sm text-gray-900",
                  {
                    "text-left": ((k = S.column.columnDef.meta) == null ? void 0 : k.align) === "left",
                    "text-center": ((G = S.column.columnDef.meta) == null ? void 0 : G.align) === "center",
                    "text-right": ((R = S.column.columnDef.meta) == null ? void 0 : R.align) === "right"
                  },
                  l
                ),
                children: Ft(S.column.columnDef.cell, S.getContext())
              },
              S.id
            );
          })
        },
        Y.id
      )) })
    ] }) }),
    !!r.length && w && /* @__PURE__ */ e.jsx("div", { className: "p-4 bg-white rounded-b-md", children: /* @__PURE__ */ e.jsx(
      Hs,
      {
        currentPage: b.current_page,
        totalPages: b.total_page,
        totalData: b.total_data,
        onPageChange: m || (() => {
        }),
        perPage: b.limit_number,
        onPerPageChange: u || (() => {
        }),
        perPageOptions: [5, 10, 20, 50, 100],
        siblingCount: 1
      }
    ) })
  ] });
}, ka = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, vr = je(
  ({
    className: t,
    variant: r = "default",
    rounded: s = "lg",
    title: a,
    description: n,
    onClose: l,
    icon: c,
    showIcon: i = !0,
    showClose: d = !0,
    ...f
  }, m) => {
    const x = c || (i ? {
      default: "mdi:information",
      success: "mdi:check-circle",
      error: "mdi:alert-circle",
      warning: "mdi:alert",
      info: "mdi:information"
    }[r] : void 0), g = a || n;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: m,
        className: v(
          "flex",
          n ? "items-start gap-3 p-4" : "items-center gap-2 py-2.5 px-3",
          "border border-gray-200",
          ka[s],
          {
            "bg-white": r === "default",
            "bg-success-50": r === "success",
            "bg-danger-50": r === "error",
            "bg-warning-50": r === "warning",
            "bg-info-50": r === "info"
          },
          t
        ),
        ...f,
        children: [
          x && /* @__PURE__ */ e.jsx(
            ae,
            {
              icon: x,
              className: v(
                "flex-shrink-0",
                n ? "h-5 w-5 mt-0.5" : "h-4 w-4",
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
            a && /* @__PURE__ */ e.jsx(
              "h3",
              {
                className: v("text-sm font-medium leading-5", {
                  "text-gray-900": r === "default",
                  "text-success-900": r === "success",
                  "text-danger-900": r === "error",
                  "text-warning-900": r === "warning",
                  "text-info-900": r === "info"
                }),
                children: a
              }
            ),
            n && /* @__PURE__ */ e.jsx(
              "p",
              {
                className: v(a ? "mt-1" : "", "text-sm leading-5", {
                  "text-gray": r === "default",
                  "text-success-700": r === "success",
                  "text-danger-700": r === "error",
                  "text-warning-700": r === "warning",
                  "text-info-700": r === "info"
                }),
                children: n
              }
            ),
            !g && /* @__PURE__ */ e.jsx("span", { className: "text-sm leading-5", children: f.children })
          ] }),
          d && l && /* @__PURE__ */ e.jsx(
            Re,
            {
              variant: "ghost",
              size: "sm",
              onClick: l,
              className: v(
                "flex-shrink-0 !p-1",
                n ? "ml-4" : "ml-2",
                {
                  "text-gray-400 hover:text-gray": r === "default",
                  "text-success-400 hover:text-success": r === "success",
                  "text-danger-400 hover:text-danger": r === "error",
                  "text-warning-400 hover:text-warning": r === "warning",
                  "text-info-400 hover:text-info": r === "info"
                }
              ),
              children: /* @__PURE__ */ e.jsx(ae, { icon: "mdi:close", className: v(n ? "h-5 w-5" : "h-4 w-4") })
            }
          )
        ]
      }
    );
  }
);
vr.displayName = "Toast";
const Ct = Ir(void 0), ja = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, Qa = ({ children: t }) => {
  const [r, s] = te([]), a = Ge((i) => {
    s((d) => d.filter((f) => f.id !== i));
  }, []), n = Ge((i) => {
    const d = Math.random().toString(36).substr(2, 9), f = i.position || "top-right", m = i.duration || 5e3, u = {
      ...i,
      id: d,
      position: f
    };
    return s((x) => [...x, u]), m > 0 && setTimeout(() => {
      a(d);
    }, m), d;
  }, [a]), l = r.reduce((i, d) => (i[d.position] || (i[d.position] = []), i[d.position].push(d), i), {
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-right": [],
    "top-center": [],
    "bottom-center": []
  }), c = ke();
  return "body" in c ? /* @__PURE__ */ e.jsxs(Ct.Provider, { value: { showToast: n, removeToast: a }, children: [
    t,
    He(
      /* @__PURE__ */ e.jsx(e.Fragment, { children: Object.entries(l).map(([i, d]) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: v(
            "fixed z-[100] flex flex-col gap-2 min-w-[320px] max-w-[420px]",
            ja[i],
            i.includes("bottom") ? "flex-col-reverse" : "flex-col"
          ),
          children: d.map((f) => /* @__PURE__ */ e.jsx(
            vr,
            {
              ...f,
              onClose: () => a(f.id),
              className: "animate-slide-in"
            },
            f.id
          ))
        },
        i
      )) }),
      c.body
    )
  ] }) : /* @__PURE__ */ e.jsx(Ct.Provider, { value: { showToast: n, removeToast: a }, children: t });
}, en = () => {
  const t = Tr(Ct);
  if (!t)
    throw new Error("useToast must be used within a ToastProvider");
  return t;
}, Na = ({
  label: t,
  value: r,
  icon: s,
  className: a
}) => /* @__PURE__ */ e.jsxs(Dt, { className: v(
  "flex items-center gap-4 rounded-lg w-full bg-white p-4 shadow-sm hover:bg-neutral-50 transition-shadow duration-200 justify-between",
  a
), children: [
  /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-gray", children: t }),
    /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-2xl font-semibold text-gray-900", children: r })
  ] }),
  s && /* @__PURE__ */ e.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50", children: /* @__PURE__ */ e.jsx(ae, { icon: s, className: "h-6 w-6 text-primary-600" }) })
] }), Ea = {
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
}, yr = {
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
}, Sa = {
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
}, Jt = {
  ...Ea,
  ...yr
}, Xt = {
  image: "https://design-system-eaip.onrender.com/img/error.svg",
  message: "An unexpected error occurred. Our team is currently investigating the issue."
}, Qt = (t) => typeof t == "object" && t !== null && ("code" in t || "message" in t), tn = ({
  error: t,
  reload: r,
  children: s,
  className: a = "",
  variant: n,
  customImage: l,
  customMessage: c
}) => {
  if (!t && !n)
    return s ? /* @__PURE__ */ e.jsx(e.Fragment, { children: s }) : null;
  const d = (() => {
    if (n) {
      const u = Sa[n];
      return yr[u];
    }
    return Qt(t) && t.code && Jt[t.code] ? Jt[t.code] : Xt;
  })(), f = l || d.image, m = c || (Qt(t) ? t.message : null) || d.message;
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${a}`, children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: f,
        alt: "Error illustration",
        className: "max-w-[300px] h-auto"
      }
    ),
    typeof m == "string" ? /* @__PURE__ */ e.jsx(ut, { variant: "body1", className: "m-0", children: m }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: m }),
    r && /* @__PURE__ */ e.jsx(
      Re,
      {
        onClick: r,
        rounded: "full",
        variant: "primary",
        size: "md",
        children: "Try Again"
      }
    )
  ] });
}, Ra = Ne(
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
), Aa = je(
  ({
    className: t,
    variant: r = "default",
    size: s = "md",
    rounded: a = "md",
    error: n = !1,
    errorText: l,
    helperText: c,
    label: i,
    bottomLabel: d,
    required: f = !1,
    showSubmitButton: m = !1,
    submitButtonLabel: u = "Submit",
    submitButtonVariant: x = "primary",
    length: g = 6,
    numericOnly: w = !0,
    onComplete: p,
    onChange: b,
    onSubmit: y,
    value: j,
    defaultValue: A = "",
    disabled: L = !1,
    autoFocus: E = !1,
    ...H
  }, Y) => {
    const [N, S] = te(A || ""), k = pe([]);
    be(() => {
      j !== void 0 && S(j);
    }, [j]);
    const G = j !== void 0, R = G ? j : N, C = (z) => {
      G || S(z), b == null || b(z), z.length === g && (p == null || p(z), m || y == null || y(z));
    }, $ = (z) => (Z) => {
      k.current[z] = Z;
    }, B = (z) => {
      z.target.select();
    }, D = (z, Z) => {
      var M;
      const O = z.target.value;
      let V = "";
      if (O.length >= 1)
        V = O.slice(-1);
      else if (O.length === 0) {
        const X = R.split("");
        X[Z] = "", C(X.join(""));
        return;
      }
      if (w && !/^\d$/.test(V))
        return;
      const J = R.split("");
      for (; J.length <= Z; )
        J.push("");
      J[Z] = V;
      const re = J.join("");
      C(re), Z < g - 1 && V && ((M = k.current[Z + 1]) == null || M.focus());
    }, h = (z, Z) => {
      var O, V, J;
      if (z.key === "Backspace") {
        const re = R.split("");
        R[Z] ? (z.preventDefault(), re[Z] = "", C(re.join(""))) : Z > 0 && (z.preventDefault(), re[Z - 1] = "", C(re.join("")), (O = k.current[Z - 1]) == null || O.focus());
      } else if (z.key === "Delete") {
        if (R[Z]) {
          z.preventDefault();
          const re = R.split("");
          re[Z] = "", C(re.join(""));
        }
      } else if (z.key === "ArrowLeft" && Z > 0)
        z.preventDefault(), (V = k.current[Z - 1]) == null || V.focus();
      else if (z.key === "ArrowRight" && Z < g - 1)
        z.preventDefault(), (J = k.current[Z + 1]) == null || J.focus();
      else if (!z.ctrlKey && !z.altKey && !z.metaKey && z.key.length === 1 && w && !/^\d$/.test(z.key)) {
        z.preventDefault();
        return;
      }
    }, I = (z) => {
      var re;
      z.preventDefault();
      const Z = z.clipboardData.getData("text/plain").trim();
      if (w && !/^\d+$/.test(Z))
        return;
      const V = Z.slice(0, g).padEnd(R.length, "").slice(0, g);
      C(V);
      const J = V.length < g ? V.length : g - 1;
      (re = k.current[J]) == null || re.focus();
    }, _ = () => {
      R.length === g && (y == null || y(R));
    }, oe = R.split("").concat(Array(g - R.length).fill(""));
    return /* @__PURE__ */ e.jsxs("div", { ref: Y, className: v("w-full", t), ...H, children: [
      i && /* @__PURE__ */ e.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        i,
        f && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: g }).map((z, Z) => /* @__PURE__ */ e.jsx(
          "input",
          {
            ref: $(Z),
            type: w ? "tel" : "text",
            inputMode: w ? "numeric" : "text",
            maxLength: 1,
            value: oe[Z] || "",
            onChange: (O) => D(O, Z),
            onKeyDown: (O) => h(O, Z),
            onPaste: Z === 0 ? I : void 0,
            onFocus: B,
            disabled: L,
            autoFocus: E && Z === 0,
            className: v(
              Ra({
                variant: n ? "error" : r,
                size: s,
                rounded: a
              })
            ),
            "aria-invalid": n
          },
          Z
        )) }),
        n && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger self-start", children: l }),
        !n && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral self-start", children: c }),
        d && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-neutral-600", children: d }),
        m && /* @__PURE__ */ e.jsx(
          Re,
          {
            variant: x,
            disabled: R.length !== g || L,
            onClick: _,
            className: "mt-4",
            children: u
          }
        )
      ] })
    ] });
  }
);
Aa.displayName = "InputOTP";
const er = {
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
}, rn = ({
  icon: t,
  className: r,
  color: s = "primary",
  value: a,
  maxValue: n = 99,
  children: l,
  ...c
}) => {
  const i = "top-0 right-0", d = typeof a == "number" && !isNaN(a);
  let f = "";
  d && (a > n ? f = `${n}+` : f = String(a));
  const m = d ? "px-2" : "", u = d ? "min-w-[20px]" : "w-2.5 h-2.5", x = d ? "h-5" : "h-2.5", g = typeof s == "string" && s in er ? er[s] : s;
  return /* @__PURE__ */ e.jsxs("div", { className: v("relative inline-block", r), children: [
    l || (t ? /* @__PURE__ */ e.jsx(ae, { icon: t, color: g, size: 32, ...c }) : null),
    /* @__PURE__ */ e.jsx(
      "span",
      {
        className: v(
          "absolute flex items-center justify-center rounded-xl bg-[#FF4C4C] text-white text-[10px] font-semibold",
          i,
          m,
          u,
          x,
          !d && "p-0",
          !d && "rounded-full"
        ),
        style: {
          transform: "translate(50%,-50%)"
        },
        children: d ? f : ""
      }
    )
  ] });
}, Ma = {
  FLIGHT_LIGHT: {
    image: "https://design-system-eaip.onrender.com/img/flight-loader-light.gif",
    message: "Loading, please wait..."
  },
  FLIGHT_DARK: {
    image: "https://design-system-eaip.onrender.com/img/flight-loader-dark.gif",
    message: "Loading, please wait..."
  }
}, Ca = {
  "flight-light": "FLIGHT_LIGHT",
  "flight-dark": "FLIGHT_DARK"
}, mt = (t, r) => t === void 0 ? { className: r } : typeof t == "number" ? {
  className: "",
  style: { width: `${t}px`, height: `${t}px` }
} : { className: t }, sn = ({
  variant: t,
  customImage: r,
  customMessage: s,
  width: a = "w-full",
  height: n = "h-full",
  widthImg: l = "w-auto",
  heightImg: c = "h-auto",
  className: i = ""
}) => {
  const d = Ca[t], f = Ma[d], m = mt(a, "w-full"), u = mt(n, "h-full"), x = mt(l, "w-auto"), g = mt(c, "h-auto");
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${m.className} ${u.className} ${i}`,
      style: { ...m.style, ...u.style },
      children: [
        /* @__PURE__ */ e.jsx(
          "img",
          {
            src: r || f.image,
            alt: "Loading animation",
            className: `${x.className} ${g.className}`,
            style: { ...x.style, ...g.style }
          }
        ),
        s ? typeof s == "string" ? /* @__PURE__ */ e.jsx(ut, { variant: "body1", className: "m-0", children: s }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: s }) : /* @__PURE__ */ e.jsx(ut, { variant: "body1", className: "m-0", children: f.message })
      ]
    }
  );
}, Pa = {
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
}, Da = {
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
  "no-seat-available": "NO_SEAT_AVAILABLE",
  "change-price": "CHANGE_PRICE",
  "help-desk": "HELP_DESK"
}, an = ({
  variant: t,
  customMessage: r,
  reload: s,
  reloadText: a = "Try Again",
  customImage: n,
  width: l,
  height: c,
  className: i = ""
}) => {
  const d = Da[t], f = Pa[d];
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${i}`, children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: n || f.image,
        alt: "Negative case illustration",
        className: "max-w-[300px] h-auto",
        style: { width: l, height: c }
      }
    ),
    r ? typeof r == "string" ? /* @__PURE__ */ e.jsx(ut, { variant: "body1", className: "m-0", children: r }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: r }) : /* @__PURE__ */ e.jsx(ut, { variant: "body1", className: "m-0", children: f.message }),
    s && /* @__PURE__ */ e.jsx(
      Re,
      {
        onClick: s,
        rounded: "full",
        variant: "primary",
        size: "md",
        children: a
      }
    )
  ] });
}, nn = ({
  widgets: t,
  className: r
}) => /* @__PURE__ */ e.jsx("div", { className: v("w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", r), children: t.map((s, a) => /* @__PURE__ */ e.jsx(Na, { ...s }, a)) });
export {
  Oa as Accordion,
  vs as AutoComplete,
  La as Avatar,
  $a as Badge,
  rn as BadgeNotif,
  ya as Breadcrumbs,
  Re as Button,
  Dt as Card,
  Es as CheckBoxGroup,
  wt as Checkbox,
  Va as Chip,
  Ts as DatePicker,
  zs as Dialog,
  $s as DialogActions,
  Ls as DialogBody,
  fr as DialogHeader,
  Os as DialogTitle,
  Vs as Divider,
  tn as ErrorWrapper,
  Fa as FileUpload,
  ae as Icon,
  cr as Input,
  Aa as InputOTP,
  sn as Loader,
  an as NegativeCase,
  Ba as Notification,
  Hs as Pagination,
  Mt as PhoneInput,
  Za as PhoneInputDemo,
  Ja as Popover,
  At as PrimitiveDatePicker,
  ga as Progress,
  Ws as Radio,
  Ks as RadioGroup,
  gr as Select,
  ft as SelectItem,
  Zs as Skeleton,
  Ya as Slider,
  Ga as StarRating,
  Ha as StatusIndicator,
  Wa as Stepper,
  Ua as Switch,
  Xa as Table,
  Ka as Tabs,
  ut as Text,
  aa as TimePicker,
  vr as Toast,
  Qa as ToastProvider,
  la as Toggle,
  qa as Tooltip,
  Na as WidgetCard,
  nn as WidgetCardGroup,
  js as buttonVariants,
  Ns as cardVariants,
  v as cn,
  Ra as inputOTPVariants,
  na as toggleVariants,
  en as useToast
};
