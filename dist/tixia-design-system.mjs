import xe, { useState as te, useEffect as be, forwardRef as je, useRef as pe, useCallback as Ge, Children as $t, isValidElement as bt, cloneElement as Mr, createContext as Cr, useContext as Pr } from "react";
import { createPortal as He } from "react-dom";
import fe from "dayjs";
import { useReactTable as Ir, getPaginationRowModel as Dr, getSortedRowModel as Tr, getCoreRowModel as _r, flexRender as Vt } from "@tanstack/react-table";
var Qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function er(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Et = { exports: {} }, lt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ft;
function zr() {
  if (Ft) return lt;
  Ft = 1;
  var t = xe, r = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(i, d, f) {
    var g, u = {}, h = null, m = null;
    f !== void 0 && (h = "" + f), d.key !== void 0 && (h = "" + d.key), d.ref !== void 0 && (m = d.ref);
    for (g in d) a.call(d, g) && !l.hasOwnProperty(g) && (u[g] = d[g]);
    if (i && i.defaultProps) for (g in d = i.defaultProps, d) u[g] === void 0 && (u[g] = d[g]);
    return { $$typeof: r, type: i, key: h, ref: m, props: u, _owner: n.current };
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
var Bt;
function Or() {
  return Bt || (Bt = 1, process.env.NODE_ENV !== "production" && function() {
    var t = xe, r = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), i = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), j = Symbol.iterator, b = "@@iterator";
    function y(o) {
      if (o === null || typeof o != "object")
        return null;
      var M = j && o[j] || o[b];
      return typeof M == "function" ? M : null;
    }
    var p = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(o) {
      {
        for (var M = arguments.length, F = new Array(M > 1 ? M - 1 : 0), Q = 1; Q < M; Q++)
          F[Q - 1] = arguments[Q];
        C("error", o, F);
      }
    }
    function C(o, M, F) {
      {
        var Q = p.ReactDebugCurrentFrame, de = Q.getStackAddendum();
        de !== "" && (M += "%s", F = F.concat([de]));
        var me = F.map(function(ie) {
          return String(ie);
        });
        me.unshift("Warning: " + M), Function.prototype.apply.call(console[o], console, me);
      }
    }
    var L = !1, I = !1, Z = !1, G = !1, N = !1, E;
    E = Symbol.for("react.module.reference");
    function k(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === a || o === l || N || o === n || o === f || o === g || G || o === m || L || I || Z || typeof o == "object" && o !== null && (o.$$typeof === h || o.$$typeof === u || o.$$typeof === c || o.$$typeof === i || o.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === E || o.getModuleId !== void 0));
    }
    function Y(o, M, F) {
      var Q = o.displayName;
      if (Q)
        return Q;
      var de = M.displayName || M.name || "";
      return de !== "" ? F + "(" + de + ")" : F;
    }
    function S(o) {
      return o.displayName || "Context";
    }
    function A(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
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
        case g:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case i:
            var M = o;
            return S(M) + ".Consumer";
          case c:
            var F = o;
            return S(F._context) + ".Provider";
          case d:
            return Y(o, o.render, "ForwardRef");
          case u:
            var Q = o.displayName || null;
            return Q !== null ? Q : A(o.type) || "Memo";
          case h: {
            var de = o, me = de._payload, ie = de._init;
            try {
              return A(ie(me));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, B = 0, P, x, D, _, oe, z, q;
    function O() {
    }
    O.__reactDisabledLog = !0;
    function V() {
      {
        if (B === 0) {
          P = console.log, x = console.info, D = console.warn, _ = console.error, oe = console.group, z = console.groupCollapsed, q = console.groupEnd;
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
              value: P
            }),
            info: $({}, o, {
              value: x
            }),
            warn: $({}, o, {
              value: D
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
              value: q
            })
          });
        }
        B < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = p.ReactCurrentDispatcher, R;
    function X(o, M, F) {
      {
        if (R === void 0)
          try {
            throw Error();
          } catch (de) {
            var Q = de.stack.trim().match(/\n( *(at )?)/);
            R = Q && Q[1] || "";
          }
        return `
` + R + o;
      }
    }
    var he = !1, we;
    {
      var Te = typeof WeakMap == "function" ? WeakMap : Map;
      we = new Te();
    }
    function Oe(o, M) {
      if (!o || he)
        return "";
      {
        var F = we.get(o);
        if (F !== void 0)
          return F;
      }
      var Q;
      he = !0;
      var de = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var me;
      me = re.current, re.current = null, V();
      try {
        if (M) {
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
                    var Ie = `
` + le[ve].replace(" at new ", " at ");
                    return o.displayName && Ie.includes("<anonymous>") && (Ie = Ie.replace("<anonymous>", o.displayName)), typeof o == "function" && we.set(o, Ie), Ie;
                  }
                while (ve >= 1 && ye >= 0);
              break;
            }
        }
      } finally {
        he = !1, re.current = me, J(), Error.prepareStackTrace = de;
      }
      var at = o ? o.displayName || o.name : "", Xe = at ? X(at) : "";
      return typeof o == "function" && we.set(o, Xe), Xe;
    }
    function De(o, M, F) {
      return Oe(o, !1);
    }
    function Le(o) {
      var M = o.prototype;
      return !!(M && M.isReactComponent);
    }
    function Ee(o, M, F) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return Oe(o, Le(o));
      if (typeof o == "string")
        return X(o);
      switch (o) {
        case f:
          return X("Suspense");
        case g:
          return X("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case d:
            return De(o.render);
          case u:
            return Ee(o.type, M, F);
          case h: {
            var Q = o, de = Q._payload, me = Q._init;
            try {
              return Ee(me(de), M, F);
            } catch {
            }
          }
        }
      return "";
    }
    var _e = Object.prototype.hasOwnProperty, Qe = {}, Pe = p.ReactDebugCurrentFrame;
    function $e(o) {
      if (o) {
        var M = o._owner, F = Ee(o.type, o._source, M ? M.type : null);
        Pe.setExtraStackFrame(F);
      } else
        Pe.setExtraStackFrame(null);
    }
    function et(o, M, F, Q, de) {
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
              le = o[ie](M, ie, Q, F, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ve) {
              le = ve;
            }
            le && !(le instanceof Error) && ($e(de), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Q || "React class", F, ie, typeof le), $e(null)), le instanceof Error && !(le.message in Qe) && (Qe[le.message] = !0, $e(de), w("Failed %s type: %s", F, le.message), $e(null));
          }
      }
    }
    var Ze = Array.isArray;
    function We(o) {
      return Ze(o);
    }
    function tt(o) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, F = M && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return F;
      }
    }
    function U(o) {
      try {
        return H(o), !1;
      } catch {
        return !0;
      }
    }
    function H(o) {
      return "" + o;
    }
    function T(o) {
      if (U(o))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tt(o)), H(o);
    }
    var K = p.ReactCurrentOwner, W = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ne, ee;
    function ue(o) {
      if (_e.call(o, "ref")) {
        var M = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Se(o) {
      if (_e.call(o, "key")) {
        var M = Object.getOwnPropertyDescriptor(o, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function qe(o, M) {
      typeof o.ref == "string" && K.current;
    }
    function Je(o, M) {
      {
        var F = function() {
          ne || (ne = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        F.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: F,
          configurable: !0
        });
      }
    }
    function Ve(o, M) {
      {
        var F = function() {
          ee || (ee = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        F.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: F,
          configurable: !0
        });
      }
    }
    var rt = function(o, M, F, Q, de, me, ie) {
      var le = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: o,
        key: M,
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
    function ft(o, M, F, Q, de) {
      {
        var me, ie = {}, le = null, Ae = null;
        F !== void 0 && (T(F), le = "" + F), Se(M) && (T(M.key), le = "" + M.key), ue(M) && (Ae = M.ref, qe(M, de));
        for (me in M)
          _e.call(M, me) && !W.hasOwnProperty(me) && (ie[me] = M[me]);
        if (o && o.defaultProps) {
          var ve = o.defaultProps;
          for (me in ve)
            ie[me] === void 0 && (ie[me] = ve[me]);
        }
        if (le || Ae) {
          var ye = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          le && Je(ie, ye), Ae && Ve(ie, ye);
        }
        return rt(o, le, Ae, de, Q, K.current, ie);
      }
    }
    var Fe = p.ReactCurrentOwner, It = p.ReactDebugCurrentFrame;
    function st(o) {
      if (o) {
        var M = o._owner, F = Ee(o.type, o._source, M ? M.type : null);
        It.setExtraStackFrame(F);
      } else
        It.setExtraStackFrame(null);
    }
    var gt;
    gt = !1;
    function pt(o) {
      return typeof o == "object" && o !== null && o.$$typeof === r;
    }
    function Dt() {
      {
        if (Fe.current) {
          var o = A(Fe.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function vr(o) {
      return "";
    }
    var Tt = {};
    function yr(o) {
      {
        var M = Dt();
        if (!M) {
          var F = typeof o == "string" ? o : o.displayName || o.name;
          F && (M = `

Check the top-level render call using <` + F + ">.");
        }
        return M;
      }
    }
    function _t(o, M) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var F = yr(M);
        if (Tt[F])
          return;
        Tt[F] = !0;
        var Q = "";
        o && o._owner && o._owner !== Fe.current && (Q = " It was passed a child from " + A(o._owner.type) + "."), st(o), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', F, Q), st(null);
      }
    }
    function zt(o, M) {
      {
        if (typeof o != "object")
          return;
        if (We(o))
          for (var F = 0; F < o.length; F++) {
            var Q = o[F];
            pt(Q) && _t(Q, M);
          }
        else if (pt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var de = y(o);
          if (typeof de == "function" && de !== o.entries)
            for (var me = de.call(o), ie; !(ie = me.next()).done; )
              pt(ie.value) && _t(ie.value, M);
        }
      }
    }
    function wr(o) {
      {
        var M = o.type;
        if (M == null || typeof M == "string")
          return;
        var F;
        if (typeof M == "function")
          F = M.propTypes;
        else if (typeof M == "object" && (M.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        M.$$typeof === u))
          F = M.propTypes;
        else
          return;
        if (F) {
          var Q = A(M);
          et(F, o.props, "prop", Q, o);
        } else if (M.PropTypes !== void 0 && !gt) {
          gt = !0;
          var de = A(M);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", de || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kr(o) {
      {
        for (var M = Object.keys(o.props), F = 0; F < M.length; F++) {
          var Q = M[F];
          if (Q !== "children" && Q !== "key") {
            st(o), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Q), st(null);
            break;
          }
        }
        o.ref !== null && (st(o), w("Invalid attribute `ref` supplied to `React.Fragment`."), st(null));
      }
    }
    var Ot = {};
    function Lt(o, M, F, Q, de, me) {
      {
        var ie = k(o);
        if (!ie) {
          var le = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ae = vr();
          Ae ? le += Ae : le += Dt();
          var ve;
          o === null ? ve = "null" : We(o) ? ve = "array" : o !== void 0 && o.$$typeof === r ? (ve = "<" + (A(o.type) || "Unknown") + " />", le = " Did you accidentally export a JSX literal instead of a component?") : ve = typeof o, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ve, le);
        }
        var ye = ft(o, M, F, de, me);
        if (ye == null)
          return ye;
        if (ie) {
          var Ie = M.children;
          if (Ie !== void 0)
            if (Q)
              if (We(Ie)) {
                for (var at = 0; at < Ie.length; at++)
                  zt(Ie[at], o);
                Object.freeze && Object.freeze(Ie);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              zt(Ie, o);
        }
        if (_e.call(M, "key")) {
          var Xe = A(o), Ce = Object.keys(M).filter(function(Ar) {
            return Ar !== "key";
          }), ht = Ce.length > 0 ? "{key: someKey, " + Ce.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ot[Xe + ht]) {
            var Rr = Ce.length > 0 ? "{" + Ce.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ht, Xe, Rr, Xe), Ot[Xe + ht] = !0;
          }
        }
        return o === a ? kr(ye) : wr(ye), ye;
      }
    }
    function jr(o, M, F) {
      return Lt(o, M, F, !0);
    }
    function Nr(o, M, F) {
      return Lt(o, M, F, !1);
    }
    var Er = Nr, Sr = jr;
    it.Fragment = a, it.jsx = Er, it.jsxs = Sr;
  }()), it;
}
process.env.NODE_ENV === "production" ? Et.exports = zr() : Et.exports = Or();
var e = Et.exports;
function tr(t) {
  var r, s, a = "";
  if (typeof t == "string" || typeof t == "number") a += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var n = t.length;
    for (r = 0; r < n; r++) t[r] && (s = tr(t[r])) && (a && (a += " "), a += s);
  } else for (s in t) t[s] && (a && (a += " "), a += s);
  return a;
}
function ce() {
  for (var t, r, s = 0, a = "", n = arguments.length; s < n; s++) (t = arguments[s]) && (r = tr(t)) && (a && (a += " "), a += r);
  return a;
}
const Ct = "-", Lr = (t) => {
  const r = Vr(t), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: a
  } = t;
  return {
    getClassGroupId: (c) => {
      const i = c.split(Ct);
      return i[0] === "" && i.length !== 1 && i.shift(), rr(i, r) || $r(c);
    },
    getConflictingClassGroupIds: (c, i) => {
      const d = s[c] || [];
      return i && a[c] ? [...d, ...a[c]] : d;
    }
  };
}, rr = (t, r) => {
  var c;
  if (t.length === 0)
    return r.classGroupId;
  const s = t[0], a = r.nextPart.get(s), n = a ? rr(t.slice(1), a) : void 0;
  if (n)
    return n;
  if (r.validators.length === 0)
    return;
  const l = t.join(Ct);
  return (c = r.validators.find(({
    validator: i
  }) => i(l))) == null ? void 0 : c.classGroupId;
}, Yt = /^\[(.+)\]$/, $r = (t) => {
  if (Yt.test(t)) {
    const r = Yt.exec(t)[1], s = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (s)
      return "arbitrary.." + s;
  }
}, Vr = (t) => {
  const {
    theme: r,
    prefix: s
  } = t, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Br(Object.entries(t.classGroups), s).forEach(([l, c]) => {
    St(c, a, l, r);
  }), a;
}, St = (t, r, s, a) => {
  t.forEach((n) => {
    if (typeof n == "string") {
      const l = n === "" ? r : Gt(r, n);
      l.classGroupId = s;
      return;
    }
    if (typeof n == "function") {
      if (Fr(n)) {
        St(n(a), r, s, a);
        return;
      }
      r.validators.push({
        validator: n,
        classGroupId: s
      });
      return;
    }
    Object.entries(n).forEach(([l, c]) => {
      St(c, Gt(r, l), s, a);
    });
  });
}, Gt = (t, r) => {
  let s = t;
  return r.split(Ct).forEach((a) => {
    s.nextPart.has(a) || s.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), s = s.nextPart.get(a);
  }), s;
}, Fr = (t) => t.isThemeGetter, Br = (t, r) => r ? t.map(([s, a]) => {
  const n = a.map((l) => typeof l == "string" ? r + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([c, i]) => [r + c, i])) : l);
  return [s, n];
}) : t, Yr = (t) => {
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
}, sr = "!", Gr = (t) => {
  const {
    separator: r,
    experimentalParseClassName: s
  } = t, a = r.length === 1, n = r[0], l = r.length, c = (i) => {
    const d = [];
    let f = 0, g = 0, u;
    for (let y = 0; y < i.length; y++) {
      let p = i[y];
      if (f === 0) {
        if (p === n && (a || i.slice(y, y + l) === r)) {
          d.push(i.slice(g, y)), g = y + l;
          continue;
        }
        if (p === "/") {
          u = y;
          continue;
        }
      }
      p === "[" ? f++ : p === "]" && f--;
    }
    const h = d.length === 0 ? i : i.substring(g), m = h.startsWith(sr), j = m ? h.substring(1) : h, b = u && u > g ? u - g : void 0;
    return {
      modifiers: d,
      hasImportantModifier: m,
      baseClassName: j,
      maybePostfixModifierPosition: b
    };
  };
  return s ? (i) => s({
    className: i,
    parseClassName: c
  }) : c;
}, Hr = (t) => {
  if (t.length <= 1)
    return t;
  const r = [];
  let s = [];
  return t.forEach((a) => {
    a[0] === "[" ? (r.push(...s.sort(), a), s = []) : s.push(a);
  }), r.push(...s.sort()), r;
}, Wr = (t) => ({
  cache: Yr(t.cacheSize),
  parseClassName: Gr(t),
  ...Lr(t)
}), Ur = /\s+/, Kr = (t, r) => {
  const {
    parseClassName: s,
    getClassGroupId: a,
    getConflictingClassGroupIds: n
  } = r, l = [], c = t.trim().split(Ur);
  let i = "";
  for (let d = c.length - 1; d >= 0; d -= 1) {
    const f = c[d], {
      modifiers: g,
      hasImportantModifier: u,
      baseClassName: h,
      maybePostfixModifierPosition: m
    } = s(f);
    let j = !!m, b = a(j ? h.substring(0, m) : h);
    if (!b) {
      if (!j) {
        i = f + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (b = a(h), !b) {
        i = f + (i.length > 0 ? " " + i : i);
        continue;
      }
      j = !1;
    }
    const y = Hr(g).join(":"), p = u ? y + sr : y, w = p + b;
    if (l.includes(w))
      continue;
    l.push(w);
    const C = n(b, j);
    for (let L = 0; L < C.length; ++L) {
      const I = C[L];
      l.push(p + I);
    }
    i = f + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Zr() {
  let t = 0, r, s, a = "";
  for (; t < arguments.length; )
    (r = arguments[t++]) && (s = ar(r)) && (a && (a += " "), a += s);
  return a;
}
const ar = (t) => {
  if (typeof t == "string")
    return t;
  let r, s = "";
  for (let a = 0; a < t.length; a++)
    t[a] && (r = ar(t[a])) && (s && (s += " "), s += r);
  return s;
};
function qr(t, ...r) {
  let s, a, n, l = c;
  function c(d) {
    const f = r.reduce((g, u) => u(g), t());
    return s = Wr(f), a = s.cache.get, n = s.cache.set, l = i, i(d);
  }
  function i(d) {
    const f = a(d);
    if (f)
      return f;
    const g = Kr(d, s);
    return n(d, g), g;
  }
  return function() {
    return l(Zr.apply(null, arguments));
  };
}
const ge = (t) => {
  const r = (s) => s[t] || [];
  return r.isThemeGetter = !0, r;
}, nr = /^\[(?:([a-z-]+):)?(.+)\]$/i, Jr = /^\d+\/\d+$/, Xr = /* @__PURE__ */ new Set(["px", "full", "screen"]), Qr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, es = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ts = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, rs = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ss = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Be = (t) => nt(t) || Xr.has(t) || Jr.test(t), Ue = (t) => ot(t, "length", us), nt = (t) => !!t && !Number.isNaN(Number(t)), xt = (t) => ot(t, "number", nt), ct = (t) => !!t && Number.isInteger(Number(t)), as = (t) => t.endsWith("%") && nt(t.slice(0, -1)), se = (t) => nr.test(t), Ke = (t) => Qr.test(t), ns = /* @__PURE__ */ new Set(["length", "size", "percentage"]), os = (t) => ot(t, ns, or), ls = (t) => ot(t, "position", or), is = /* @__PURE__ */ new Set(["image", "url"]), cs = (t) => ot(t, is, fs), ds = (t) => ot(t, "", ms), dt = () => !0, ot = (t, r, s) => {
  const a = nr.exec(t);
  return a ? a[1] ? typeof r == "string" ? a[1] === r : r.has(a[1]) : s(a[2]) : !1;
}, us = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  es.test(t) && !ts.test(t)
), or = () => !1, ms = (t) => rs.test(t), fs = (t) => ss.test(t), gs = () => {
  const t = ge("colors"), r = ge("spacing"), s = ge("blur"), a = ge("brightness"), n = ge("borderColor"), l = ge("borderRadius"), c = ge("borderSpacing"), i = ge("borderWidth"), d = ge("contrast"), f = ge("grayscale"), g = ge("hueRotate"), u = ge("invert"), h = ge("gap"), m = ge("gradientColorStops"), j = ge("gradientColorStopPositions"), b = ge("inset"), y = ge("margin"), p = ge("opacity"), w = ge("padding"), C = ge("saturate"), L = ge("scale"), I = ge("sepia"), Z = ge("skew"), G = ge("space"), N = ge("translate"), E = () => ["auto", "contain", "none"], k = () => ["auto", "hidden", "clip", "visible", "scroll"], Y = () => ["auto", se, r], S = () => [se, r], A = () => ["", Be, Ue], $ = () => ["auto", nt, se], B = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], P = () => ["solid", "dashed", "dotted", "double", "none"], x = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], D = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], _ = () => ["", "0", se], oe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], z = () => [nt, se];
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
      borderSpacing: S(),
      borderWidth: A(),
      contrast: z(),
      grayscale: _(),
      hueRotate: z(),
      invert: _(),
      gap: S(),
      gradientColorStops: [t],
      gradientColorStopPositions: [as, Ue],
      inset: Y(),
      margin: Y(),
      opacity: z(),
      padding: S(),
      saturate: z(),
      scale: z(),
      sepia: _(),
      skew: z(),
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
        overscroll: E()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": E()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": E()
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
        inset: [b]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [b]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [b]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [b]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [b]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [b]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [b]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [b]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [b]
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
        basis: Y()
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
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...D()]
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
        content: ["normal", ...D(), "baseline"]
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
        "place-content": [...D(), "baseline"]
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
        p: [w]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [w]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [w]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [w]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [w]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [w]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [w]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [w]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [w]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [y]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [y]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [y]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [y]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [y]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [y]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [y]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [y]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [y]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [G]
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
        "space-y": [G]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", xt]
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
        "line-clamp": ["none", nt, xt]
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
        "placeholder-opacity": [p]
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
        "text-opacity": [p]
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
        decoration: [...P(), "wavy"]
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
        indent: S()
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
        "bg-opacity": [p]
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
        bg: [...B(), ls]
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
        bg: ["auto", "cover", "contain", os]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, cs]
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
        from: [m]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [m]
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
        "border-opacity": [p]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...P(), "hidden"]
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
        "divide-opacity": [p]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: P()
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
        outline: ["", ...P()]
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
        ring: A()
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
        "ring-opacity": [p]
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
        shadow: ["", "inner", "none", Ke, ds]
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
        opacity: [p]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...x(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": x()
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
        "hue-rotate": [g]
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
        saturate: [C]
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
        "backdrop-hue-rotate": [g]
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
        "backdrop-opacity": [p]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [C]
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
        "skew-x": [Z]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [Z]
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
        stroke: [Be, Ue, xt]
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
}, ze = /* @__PURE__ */ qr(gs);
function v(...t) {
  return ze(ce(t));
}
const Ht = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, Wt = ce, Ne = (t, r) => (s) => {
  var a;
  if ((r == null ? void 0 : r.variants) == null) return Wt(t, s == null ? void 0 : s.class, s == null ? void 0 : s.className);
  const { variants: n, defaultVariants: l } = r, c = Object.keys(n).map((f) => {
    const g = s == null ? void 0 : s[f], u = l == null ? void 0 : l[f];
    if (g === null) return null;
    const h = Ht(g) || Ht(u);
    return n[f][h];
  }), i = s && Object.entries(s).reduce((f, g) => {
    let [u, h] = g;
    return h === void 0 || (f[u] = h), f;
  }, {}), d = r == null || (a = r.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((f, g) => {
    let { class: u, className: h, ...m } = g;
    return Object.entries(m).every((j) => {
      let [b, y] = j;
      return Array.isArray(y) ? y.includes({
        ...l,
        ...i
      }[b]) : {
        ...l,
        ...i
      }[b] === y;
    }) ? [
      ...f,
      u,
      h
    ] : f;
  }, []);
  return Wt(t, c, d, s == null ? void 0 : s.class, s == null ? void 0 : s.className);
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
  const [g, u] = te(null), [h, m] = te(!0), [j, b] = te(null);
  return be(() => {
    let y = !0;
    return (async () => {
      try {
        const { Icon: w } = await import("./iconify-Dqt3MVen.mjs");
        y && (u(() => w), m(!1));
      } catch (w) {
        console.error("Failed to load icon:", w), y && (b(w), m(!1));
      }
    })(), () => {
      y = !1;
    };
  }, []), h ? /* @__PURE__ */ e.jsx("span", { style: { width: s, height: s } }) : j || !g ? null : /* @__PURE__ */ e.jsx(
    g,
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
}, ps = Ne(
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
), lr = je(
  ({
    className: t,
    variant: r = "default",
    size: s = "md",
    rounded: a = "md",
    error: n = !1,
    errorText: l,
    helperText: c,
    label: i,
    required: d = !1,
    labelPlacement: f = "top",
    fullWidth: g = !1,
    leftIcon: u,
    rightIcon: h,
    onRightIconClick: m,
    id: j,
    ...b
  }, y) => {
    const p = j || xe.useId(), w = `${p}-helper`, C = `${p}-error`, L = /* @__PURE__ */ e.jsxs("div", { className: v("relative", !g && "inline-block"), children: [
      u && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ e.jsx(ae, { icon: u, className: "w-4 h-4" }) }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          id: p,
          type: "text",
          ref: y,
          className: v(
            ps({ variant: n ? "error" : r, size: s, rounded: a, fullWidth: g }),
            u && "pl-10",
            h && "pr-10",
            t
          ),
          "aria-describedby": n ? C : c ? w : void 0,
          "aria-invalid": n,
          "aria-required": d,
          ...b
        }
      ),
      h && /* @__PURE__ */ e.jsx(
        "div",
        {
          className: v(
            "absolute right-3 top-1/2 -translate-y-1/2 text-neutral",
            m && "cursor-pointer hover:text-primary-600"
          ),
          onClick: m,
          role: m ? "button" : void 0,
          tabIndex: m ? 0 : void 0,
          children: /* @__PURE__ */ e.jsx(ae, { icon: h, className: "w-4 h-4" })
        }
      )
    ] }), I = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      n && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: C, children: l }),
      !n && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: w, children: c })
    ] });
    return f === "left" ? /* @__PURE__ */ e.jsx("div", { className: v(g ? "w-full" : "inline-block", t), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
      i && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: p,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            i,
            d && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: v("flex-1", !g && "inline-block"), children: [
        L,
        I
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: v(g ? "w-full" : "inline-block", t), children: [
      i && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: p,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            i,
            d && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      L,
      I
    ] });
  }
);
lr.displayName = "Input";
const mt = xe.forwardRef(
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
mt.displayName = "SelectItem";
const ir = typeof window < "u", Me = () => ir ? window : {
  innerHeight: 0,
  innerWidth: 0,
  addEventListener: () => {
  },
  removeEventListener: () => {
  }
}, ke = () => ir ? document : {
  addEventListener: () => {
  },
  removeEventListener: () => {
  },
  dispatchEvent: () => {
  }
}, vt = "autocomplete-dropdown-opened", hs = je(
  ({
    className: t,
    options: r,
    onSelect: s,
    isOpen: a,
    loading: n = !1,
    renderOption: l,
    variant: c = "default",
    size: i = "md",
    rounded: d = "md",
    leftIcon: f,
    rightIcon: g,
    error: u = !1,
    errorText: h,
    helperText: m,
    label: j,
    required: b = !1,
    labelPlacement: y = "top",
    fullWidth: p = !1,
    value: w,
    onChange: C,
    onFocus: L,
    onBlur: I,
    showClear: Z = !1,
    onClear: G,
    searchType: N = "include",
    initialItemsToShow: E,
    itemsToLoad: k = 10,
    maxDropdownHeight: Y = 300,
    noOptionsMessage: S = "No options found",
    scrollMoreMessage: A = "",
    allOptionsShownMessage: $ = "",
    ...B
  }, P) => {
    const [x, D] = te(!1), [_, oe] = te(w || ""), [z, q] = te(E || 0), O = pe(null), V = pe(null), J = pe(null), re = pe(null), R = a !== void 0, he = `autocomplete-${xe.useId().replace(/:/g, "")}`, we = () => {
      if (!x || !V.current || !J.current) return;
      const { bottom: H, top: T, left: K, width: W } = V.current.getBoundingClientRect(), ne = J.current, ee = Me(), ue = ee.innerHeight - H, Se = T, qe = Math.min(Y, 300), Je = ue < qe, Ve = Se > ue, rt = Je && Ve;
      Object.assign(ne.style, {
        position: "fixed",
        left: `${K}px`,
        width: `${W}px`
      }), rt ? Object.assign(ne.style, {
        bottom: `${ee.innerHeight - T + 4}px`,
        top: "auto",
        maxHeight: `${Se - 8}px`
      }) : Object.assign(ne.style, {
        top: `${H + 4}px`,
        bottom: "auto",
        maxHeight: `${ue - 8}px`
      });
    };
    be(() => {
      const H = Me(), T = ke(), K = () => {
        x && we();
      }, W = () => {
        x && we();
      }, ne = (ue) => {
        ue.detail.id !== he && D(!1);
      }, ee = (ue) => {
        const Se = ue.target;
        O.current && !O.current.contains(Se) && J.current && !J.current.contains(Se) && D(!1);
      };
      return x && (we(), H.addEventListener("scroll", K, !0), H.addEventListener("resize", W)), T.addEventListener(vt, ne), T.addEventListener("click", ee), () => {
        H.removeEventListener("scroll", K, !0), H.removeEventListener("resize", W), T.removeEventListener(vt, ne), T.removeEventListener("click", ee);
      };
    }, [x, he]), be(() => {
      oe(w || "");
    }, [w]);
    const Te = (H) => {
      const { value: T } = H.target;
      if (oe(T), !T.trim()) {
        D(!1);
        return;
      }
      const K = r.some(({ label: W }) => {
        const ne = T.toLowerCase().trim(), ee = W.toLowerCase();
        return N === "startsWith" ? ee.startsWith(ne) : ee.includes(ne);
      });
      D(K), C == null || C(H);
    }, Oe = (H) => {
      H.stopPropagation(), oe(""), G == null || G();
      const T = new Event("change");
      T.target = { value: "" }, C == null || C(T);
    }, De = (H) => {
      var ne;
      if (!H) return;
      const { value: T, label: K } = H;
      oe(K), D(!1), s == null || s(T);
      const W = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: H }
      });
      (ne = V.current) == null || ne.dispatchEvent(W);
    }, Le = (H) => {
      I == null || I(H);
    }, Ee = r.filter(({ label: H }) => {
      const T = _.toLowerCase().trim(), K = H.toLowerCase();
      return N === "startsWith" ? K.startsWith(T) : K.includes(T);
    }), _e = (H) => {
      R || (ke().dispatchEvent(
        new CustomEvent(vt, {
          detail: { id: he }
        })
      ), Ee.length > 0 && D(!0)), L == null || L(H);
    }, Qe = () => {
      if (!re.current || E === void 0 || E <= 0) return;
      const { scrollTop: H, scrollHeight: T, clientHeight: K } = re.current;
      H + K >= T - 10 && q((ne) => Math.min(ne + k, Ee.length));
    };
    be(() => {
      E !== void 0 && E > 0 && q(E);
    }, [_, E]);
    const Pe = E !== void 0 && E > 0 ? Ee.slice(0, z) : Ee, $e = (H, T) => H ? H.replace(/\{(\w+)\}/g, (K, W) => {
      var ne;
      return ((ne = T[W]) == null ? void 0 : ne.toString()) || K;
    }) : "", et = R ? a : x, Ze = Z && _ && !B.disabled && !B.readOnly, We = Ze ? "mdi:close" : g, tt = (H) => {
      if (!(!et || Pe.length === 0))
        switch (H.key) {
          case "Enter":
            H.preventDefault(), Pe.length === 1 && De(Pe[0]);
            break;
          case "Tab":
            Pe.length === 1 && (H.preventDefault(), De(Pe[0]));
            break;
          case "Escape":
            H.preventDefault(), D(!1);
            break;
        }
    }, U = () => {
      if (!et) return null;
      const H = ke();
      if (!("body" in H)) return null;
      const T = /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: J,
          className: "fixed z-[9999] min-w-[8rem] rounded-md border border-neutral-200 bg-white py-1 shadow-lg overflow-hidden",
          style: { maxHeight: `${Y}px` },
          onClick: (K) => K.stopPropagation(),
          children: /* @__PURE__ */ e.jsx(
            "div",
            {
              ref: re,
              className: "overflow-auto",
              style: { maxHeight: `${Y}px` },
              onScroll: Qe,
              children: n ? /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ e.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }) }) : Pe.length > 0 ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                Pe.map((K) => /* @__PURE__ */ e.jsx(
                  mt,
                  {
                    value: K.value,
                    selected: K.label === _,
                    onClick: () => De(K),
                    children: l ? l(K) : K.label
                  },
                  K.value
                )),
                E !== void 0 && E > 0 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  z < Ee.length && A && /* @__PURE__ */ e.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: $e(A, {
                    current: z,
                    total: Ee.length
                  }) }),
                  z >= Ee.length && Ee.length > 0 && $ && /* @__PURE__ */ e.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: $e($, {
                    total: Ee.length
                  }) })
                ] })
              ] }) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-2 text-sm text-neutral", children: S })
            }
          )
        }
      );
      return He(T, H.body);
    };
    return /* @__PURE__ */ e.jsxs("div", { ref: O, className: v("relative", p ? "w-full" : "inline-block"), children: [
      /* @__PURE__ */ e.jsx("div", { ref: V, className: v(!p && "inline-block"), children: /* @__PURE__ */ e.jsx(
        lr,
        {
          ref: P,
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
          errorText: h,
          helperText: m,
          label: j,
          required: b,
          labelPlacement: y,
          fullWidth: p,
          className: t,
          ...B,
          onClick: Ze ? Oe : B.onClick
        }
      ) }),
      U()
    ] });
  }
);
hs.displayName = "AutoComplete";
const bs = {
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
}, xs = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, vs = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
}, Ta = ({
  items: t,
  multiple: r = !1,
  defaultOpenIds: s = [],
  icon: a = "mdi:chevron-down",
  iconPosition: n = "right",
  className: l,
  contentClassName: c,
  variant: i = "primary",
  shadow: d = "none",
  rounded: f = "lg"
}) => {
  const [g, u] = te(s), h = (j) => {
    u(
      r ? (b) => b.includes(j) ? b.filter((y) => y !== j) : [...b, j] : (b) => b.includes(j) ? [] : [j]
    );
  }, m = bs[i];
  return /* @__PURE__ */ e.jsx("div", { className: ce("w-full space-y-2", l), children: t.map((j) => {
    const b = g.includes(j.id), y = !!j.disabled;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: ce(
          "border overflow-hidden",
          "bg-white",
          "border-gray-200",
          xs[d],
          vs[f],
          "transition-shadow duration-200"
        ),
        children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => !y && h(j.id),
              disabled: y,
              className: ce(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                m.hover,
                b && m.active,
                m.text,
                y && "opacity-50 cursor-not-allowed"
              ),
              children: [
                n === "left" && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: ce(
                      "mr-3 transition-transform duration-200",
                      b && "rotate-180"
                    ),
                    children: /* @__PURE__ */ e.jsx(ae, { icon: a, className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ e.jsx("div", { className: "flex-1", children: j.title }),
                n === "right" && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: ce(
                      "ml-3 transition-transform duration-200",
                      b && "rotate-180"
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
                b ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              ),
              children: /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: ce(
                    "p-4 border-t border-gray-200",
                    c
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
}, _a = ({
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
}, za = ({
  children: t,
  variant: r = "primary",
  size: s = "medium",
  rounded: a = "md",
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
    full: "rounded-full"
  }, d = ze(
    "inline-flex items-center font-medium",
    l[r],
    c[s],
    i[a],
    n
  );
  return /* @__PURE__ */ e.jsx("span", { className: d, children: t });
}, ys = Ne(
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
), Re = je(
  ({
    className: t,
    variant: r = "primary",
    size: s = "md",
    rounded: a = "md",
    fullWidth: n = !1,
    isLoading: l = !1,
    leftIcon: c,
    rightIcon: i,
    isIconOnly: d = !1,
    children: f,
    ...g
  }, u) => {
    const m = d || !!(c || i) && !f;
    return /* @__PURE__ */ e.jsxs(
      "button",
      {
        className: v(
          ys({
            variant: r,
            size: s,
            rounded: m ? "full" : a,
            fullWidth: n,
            isIconOnly: m,
            className: t
          })
        ),
        ref: u,
        disabled: g.disabled || l,
        ...g,
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
const ws = Ne(
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
), Pt = je(
  ({
    className: t,
    variant: r = "default",
    padding: s = "md",
    shadow: a = "none",
    rounded: n = "md",
    asChild: l = !1,
    ...c
  }, i) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: v(ws({ variant: r, padding: s, shadow: a, rounded: n, className: t })),
      ref: i,
      ...c
    }
  )
);
Pt.displayName = "Card";
const yt = ({
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
  }, g = {
    primary: "checked:bg-primary-600 checked:border-primary-600 hover:border-primary-600",
    secondary: "checked:bg-secondary-600 checked:border-secondary-600 hover:border-secondary-600",
    success: "checked:bg-success-600 checked:border-success-600 hover:border-success-600",
    warning: "checked:bg-warning-600 checked:border-warning-600 hover:border-warning-600",
    error: "checked:bg-danger-600 checked:border-danger-600 hover:border-danger-600"
  }, u = r ? "border-danger-600 hover:border-danger-700" : "", m = ze(
    "border-2 transition-colors duration-200",
    "appearance-none cursor-pointer",
    "checked:bg-no-repeat checked:bg-center",
    l === "circle" ? 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]' : 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM0w0LjUgOC41TDIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=")]',
    {
      square: "rounded",
      circle: "rounded-full"
    }[l],
    f[n],
    g[c],
    u,
    s && "opacity-50 cursor-not-allowed",
    i
  ), j = ze(
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
          className: m,
          disabled: s,
          ref: (b) => {
            b && (b.indeterminate = a);
          },
          ...d
        }
      ),
      t && /* @__PURE__ */ e.jsx("label", { className: j, children: t })
    ] }),
    r && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-danger-600", children: r })
  ] });
}, wt = Ne(
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
), ks = je(
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
    label: g,
    required: u = !1,
    labelPlacement: h = "top",
    fullWidth: m = !1,
    disabled: j = !1,
    variant: b = "square",
    color: y = "primary",
    checkboxSize: p = "sm",
    showSelectAll: w = !1,
    selectAllText: C = "Select All",
    indeterminateSelectAll: L = !0,
    gap: I,
    selectAllGap: Z,
    id: G,
    ...N
  }, E) => {
    const k = G || xe.useId(), Y = `${k}-helper`, S = `${k}-error`, A = `${k}-group`, [$, B] = xe.useState(a), P = s !== void 0 ? s : $, x = (R, X) => {
      const he = X ? [...P, R] : P.filter((we) => we !== R);
      s === void 0 && B(he), n == null || n(he);
    }, D = (R) => {
      const X = R ? r.map((he) => he.value) : [];
      s === void 0 && B(X), n == null || n(X);
    }, _ = r.length > 0 && P.length === r.length, oe = P.length > 0 && P.length < r.length, z = L && oe, q = (R) => R === "none" ? "gap-0" : R === "xs" ? "gap-1" : R === "sm" ? "gap-2" : R === "md" ? "gap-3" : R === "lg" ? "gap-4" : R === "xl" ? "gap-6" : null, O = q(I), V = q(Z), J = /* @__PURE__ */ e.jsx("div", { className: v("relative", !m && "inline-block"), children: /* @__PURE__ */ e.jsxs(
      "fieldset",
      {
        ref: E,
        id: A,
        className: v(
          wt({ layout: l, size: c }),
          O,
          t
        ),
        "aria-describedby": i ? S : f ? Y : void 0,
        "aria-invalid": i,
        "aria-required": u,
        ...N,
        children: [
          w && r.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: v(
            "flex flex-col",
            V || O || wt({ layout: "vertical", size: c })
          ), children: [
            /* @__PURE__ */ e.jsx(
              yt,
              {
                label: C,
                checked: _,
                indeterminate: z,
                onChange: (R) => D(R.target.checked),
                disabled: j,
                variant: b,
                color: i ? "error" : y,
                variantSize: p,
                error: i ? " " : void 0
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: v(
              "flex",
              l === "vertical" && "flex-col",
              l === "horizontal" && "flex-row flex-wrap",
              l === "grid" && "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
              O || wt({ layout: l, size: c })
            ), children: r.map((R) => /* @__PURE__ */ e.jsx(
              yt,
              {
                label: R.label,
                checked: P.includes(R.value),
                onChange: (X) => x(R.value, X.target.checked),
                disabled: j || R.disabled,
                indeterminate: R.indeterminate,
                variant: b,
                color: i ? "error" : y,
                variantSize: p,
                error: i ? " " : void 0
              },
              R.value
            )) })
          ] }),
          !w && /* @__PURE__ */ e.jsx(e.Fragment, { children: r.map((R) => /* @__PURE__ */ e.jsx(
            yt,
            {
              label: R.label,
              checked: P.includes(R.value),
              onChange: (X) => x(R.value, X.target.checked),
              disabled: j || R.disabled,
              indeterminate: R.indeterminate,
              variant: b,
              color: i ? "error" : y,
              variantSize: p,
              error: i ? " " : void 0
            },
            R.value
          )) })
        ]
      }
    ) }), re = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      i && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: S, children: d }),
      !i && f && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: Y, children: f })
    ] });
    return h === "left" ? /* @__PURE__ */ e.jsx("div", { className: v(m ? "w-full" : "inline-block", t), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
      g && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: A,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            g,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: v("flex-1", !m && "inline-block"), children: [
        J,
        re
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: v(m ? "w-full" : "inline-block", t), children: [
      g && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: A,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            g,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      J,
      re
    ] });
  }
);
ks.displayName = "CheckBoxGroup";
const js = {
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
}, Ns = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5"
}, Es = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, Oa = ({
  children: t,
  variant: r = "solid",
  color: s = "primary",
  size: a = "md",
  rounded: n = "md",
  onClose: l,
  className: c,
  icon: i
}) => /* @__PURE__ */ e.jsxs(
  "div",
  {
    className: v(
      "inline-flex items-center gap-1.5 font-medium",
      js[r][s],
      Ns[a],
      Es[n],
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
var cr = { exports: {} };
(function(t, r) {
  (function(s, a) {
    t.exports = a();
  })(Qt, function() {
    return function(s, a) {
      a.prototype.isSameOrAfter = function(n, l) {
        return this.isSame(n, l) || this.isAfter(n, l);
      };
    };
  });
})(cr);
var Ss = cr.exports;
const Rs = /* @__PURE__ */ er(Ss);
var dr = { exports: {} };
(function(t, r) {
  (function(s, a) {
    t.exports = a();
  })(Qt, function() {
    return function(s, a) {
      a.prototype.isSameOrBefore = function(n, l) {
        return this.isSame(n, l) || this.isBefore(n, l);
      };
    };
  });
})(dr);
var As = dr.exports;
const Ms = /* @__PURE__ */ er(As);
fe.extend(Rs);
fe.extend(Ms);
const Cs = Ne(
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
), Rt = je(
  ({
    value: t,
    onChange: r,
    minDate: s,
    maxDate: a,
    variant: n = "default",
    size: l = "md",
    rounded: c = "md",
    disabled: i = !1,
    error: d = !1,
    errorText: f,
    helperText: g,
    label: u,
    required: h = !1,
    labelPlacement: m = "top",
    fullWidth: j = !1,
    className: b,
    placeholder: y = "Select date",
    leftIcon: p,
    rightIcon: w,
    monthsToShow: C = 1,
    valueFormatter: L,
    rangeStart: I,
    rangeEnd: Z,
    closeOnSelect: G = !0,
    calendarFooter: N,
    format: E = "DD-MM-YYYY",
    allowInput: k = !1,
    ...Y
  }) => {
    const [S, A] = te(!1), [$, B] = te(t), [P, x] = te(t || /* @__PURE__ */ new Date()), [D, _] = te(!1), [oe, z] = te(""), q = pe(null), O = pe(null), V = pe(null), J = pe(null), re = pe(null);
    be(() => {
      B(t || void 0), z(t ? R(t, E) : "");
    }, [t, E]), be(() => {
      z($ ? R($, E) : "");
    }, [$, E]);
    const R = (U, H) => {
      const T = U.getDate().toString().padStart(2, "0"), K = (U.getMonth() + 1).toString().padStart(2, "0"), W = U.getFullYear().toString();
      switch (H) {
        case "DD-MM-YYYY":
          return `${T}-${K}-${W}`;
        case "YYYY-MM-DD":
          return `${W}-${K}-${T}`;
        case "MM-DD-YYYY":
          return `${K}-${T}-${W}`;
        default:
          return `${T}-${K}-${W}`;
      }
    }, X = (U, H) => {
      const K = U.replace(/[^\d-]/g, "").split("-");
      if (K.length !== 3) return null;
      let W, ne, ee;
      switch (H) {
        case "DD-MM-YYYY":
          [W, ne, ee] = K.map(Number);
          break;
        case "YYYY-MM-DD":
          [ee, ne, W] = K.map(Number);
          break;
        case "MM-DD-YYYY":
          [ne, W, ee] = K.map(Number);
          break;
        default:
          [W, ne, ee] = K.map(Number);
      }
      if (isNaN(W) || isNaN(ne) || isNaN(ee) || ne < 1 || ne > 12 || W < 1 || W > 31 || ee < 1900 || ee > 2099) return null;
      const ue = new Date(ee, ne - 1, W);
      return ue.getDate() !== W || ue.getMonth() !== ne - 1 || ue.getFullYear() !== ee ? null : ue;
    };
    be(() => {
      if (D && J.current) {
        const U = fe(P).year(), H = J.current.querySelectorAll("[data-year]"), T = Array.from(H).find(
          (K) => parseInt(K.getAttribute("data-year") || "0") === U
        );
        T && T.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center"
        });
      }
    }, [D, P]);
    const he = () => {
      if (!S || !O.current || !V.current) return;
      const { bottom: U, left: H, width: T, top: K } = O.current.getBoundingClientRect(), W = V.current, ne = Me(), ee = ne.innerHeight - U, ue = K, qe = ee < (C === 2 ? 400 : 350), Je = ue > ee, Ve = qe && Je;
      C === 2 ? (Object.assign(W.style, {
        position: "fixed",
        left: `${H}px`,
        minWidth: "500px",
        width: "auto",
        transform: ""
      }), Ve ? Object.assign(W.style, {
        bottom: `${ne.innerHeight - K + 4}px`,
        top: "auto",
        maxHeight: `${ue - 8}px`
      }) : Object.assign(W.style, {
        top: `${U + 4}px`,
        bottom: "auto",
        maxHeight: `${ee - 8}px`
      })) : (Object.assign(W.style, {
        position: "fixed",
        left: `${H + T / 2}px`,
        width: "320px",
        maxWidth: "100vw",
        transform: "translateX(-50%)"
      }), Ve ? Object.assign(W.style, {
        bottom: `${ne.innerHeight - K + 4}px`,
        top: "auto",
        maxHeight: `${ue - 8}px`
      }) : Object.assign(W.style, {
        top: `${U + 4}px`,
        bottom: "auto",
        maxHeight: `${ee - 8}px`
      }));
    };
    be(() => {
      const U = Me(), H = ke(), T = () => {
        S && he();
      }, K = () => {
        S && he();
      }, W = (ne) => {
        ne.key === "Escape" && S && (A(!1), _(!1));
      };
      return S && (he(), U.addEventListener("scroll", T, !0), U.addEventListener("resize", K), H.addEventListener("keydown", W)), () => {
        U.removeEventListener("scroll", T, !0), U.removeEventListener("resize", K), H.removeEventListener("keydown", W);
      };
    }, [S]);
    const we = (U) => {
      if (I !== void 0 && Z !== void 0)
        if (I && Z)
          B(U), z(R(U, E)), r == null || r(U);
        else if (I) {
          const T = U;
          fe(T).isBefore(I), B(T), z(R(T, E)), r == null || r(T), A(!1), _(!1);
        } else
          B(U), z(R(U, E)), r == null || r(U);
      else
        B(U), z(R(U, E)), r == null || r(U), A(!1), _(!1);
    }, Te = () => {
      x(fe(P).subtract(1, "month").toDate());
    }, Oe = () => {
      x(fe(P).add(1, "month").toDate());
    }, De = (U) => {
      const H = fe(U).startOf("month"), T = fe(U).endOf("month"), K = [];
      let W = H;
      for (; W.isBefore(T) || W.isSame(T, "day"); )
        K.push(W.toDate()), W = W.add(1, "day");
      return K;
    }, Le = (U) => !!(s && fe(U).isBefore(s, "day") || a && fe(U).isAfter(a, "day")), Ee = (U) => {
      if (!k) return;
      const T = U.target.value.replace(/[^\d-]/g, "");
      if (T.length < oe.length) {
        z(T);
        return;
      }
      if (T.replace(/-/g, "").length > 8)
        return;
      let W = T;
      E === "DD-MM-YYYY" ? (T.length === 2 && !T.includes("-") || T.length === 5 && T.split("-").length === 2) && (W = T + "-") : E === "YYYY-MM-DD" ? (T.length === 4 && !T.includes("-") || T.length === 7 && T.split("-").length === 2) && (W = T + "-") : E === "MM-DD-YYYY" && (T.length === 2 && !T.includes("-") || T.length === 5 && T.split("-").length === 2) && (W = T + "-"), z(W);
    }, _e = () => {
      if (!k) return;
      const U = X(oe, E);
      if (U) {
        if (s && U < s) {
          z(R(s, E)), B(s), r == null || r(s);
          return;
        }
        if (a && U > a) {
          z(R(a, E)), B(a), r == null || r(a);
          return;
        }
        B(U), r == null || r(U), z(R(U, E));
      } else
        z($ ? R($, E) : "");
    }, Qe = () => {
      k && A(!1);
    }, Pe = (U) => {
      k && U.key === "Enter" && (U.preventDefault(), _e());
    }, $e = (U) => {
      const H = fe(P).year(U).toDate();
      x(H), _(!1);
    }, et = () => {
      if (!D) return null;
      const U = fe(P).year(), H = 1900, K = Array.from(
        { length: 2099 - H + 1 },
        (W, ne) => H + ne
      );
      return /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: J,
          className: "grid grid-cols-5 gap-2 p-2 overflow-y-auto max-h-[300px]",
          children: K.map((W) => /* @__PURE__ */ e.jsx(
            "div",
            {
              "data-year": W,
              onClick: () => $e(W),
              className: v(
                W === U && "bg-primary-50 text-primary",
                "text-sm cursor-pointer p-2"
              ),
              children: W
            },
            W
          ))
        }
      );
    }, Ze = () => {
      if (!S) return null;
      const U = ke();
      if (!("body" in U)) return null;
      const H = Array.from({ length: C }).map(
        (T, K) => fe(P).add(K, "month").toDate()
      );
      return He(
        /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "fixed inset-0 z-[9998]",
              onClick: () => {
                D || A(!1);
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
                  /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-900", children: C === 1 ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e.jsx("span", { children: fe(P).format("MMMM") }),
                    /* @__PURE__ */ e.jsxs(
                      "div",
                      {
                        className: "cursor-pointer flex items-center gap-1",
                        onClick: () => _(!D),
                        children: [
                          /* @__PURE__ */ e.jsx("span", { children: fe(P).format("YYYY") }),
                          /* @__PURE__ */ e.jsx(Re, { variant: "ghost", size: "sm", leftIcon: D ? "mdi:chevron-up" : "mdi:chevron-down" })
                        ]
                      }
                    )
                  ] }) : `${fe(P).format("MMMM YYYY")} - ${fe(
                    P
                  ).add(C - 1, "month").format("MMMM YYYY")}` }) }),
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
                D ? et() : /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: v(
                      C === 2 ? "flex gap-5 p-2 mx-auto w-fit" : "justify-between p-2 mx-auto w-fit"
                    ),
                    children: H.map((T, K) => {
                      const W = De(T), ne = fe(T).startOf("month").day();
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
                          W.map((ee) => {
                            const ue = $ && fe(ee).isSame($, "day"), Se = Le(ee), qe = fe(ee).isSame(
                              T,
                              "month"
                            ), Je = I && Z && fe(ee).isSameOrAfter(I, "day") && fe(ee).isSameOrBefore(Z, "day"), Ve = I && fe(ee).isSame(I, "day"), rt = Z && fe(ee).isSame(Z, "day"), ft = fe(ee).day() === 0 || fe(ee).day() === 6, Fe = I && Z;
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
                                      ft && "!text-danger",
                                      ue && "bg-primary !text-white hover:bg-primary-600 active:bg-primary-700",
                                      ue && !Fe && "rounded-full",
                                      !ue && !Se && "hover:bg-primary-50 active:bg-primary-100",
                                      !qe && "text-neutral-400",
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
                      ] }, K);
                    })
                  }
                )
              ]
            }
          )
        ] }),
        U.body
      );
    }, We = /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: v("relative", !j && "inline-block"),
        ref: O,
        onClick: () => !i && !k && A(!S),
        children: [
          p && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (U) => {
                U.stopPropagation(), i || A(!S);
              },
              children: /* @__PURE__ */ e.jsx(ae, { icon: p, className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: re,
              type: "text",
              value: k ? oe : L ? L() : $ ? R($, E) : "",
              placeholder: k ? E : y,
              readOnly: !k,
              maxLength: k ? 10 : void 0,
              onChange: Ee,
              onBlur: _e,
              onFocus: Qe,
              onKeyDown: Pe,
              className: v(
                Cs({ variant: d ? "error" : n, size: l, rounded: c, fullWidth: j }),
                p && "pl-10",
                w && "pr-10",
                b
              ),
              disabled: i,
              ...Y
            }
          ),
          w && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (U) => {
                U.stopPropagation(), i || A(!S);
              },
              children: /* @__PURE__ */ e.jsx(ae, { icon: w, className: "w-4 h-4" })
            }
          )
        ]
      }
    ), tt = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      f && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", children: f }),
      !f && g && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", children: g })
    ] });
    return m === "left" ? /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: v(j ? "w-full" : "inline-block", b),
        ref: q,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
            u && /* @__PURE__ */ e.jsxs("label", { className: "block text-sm text-neutral-900 pt-2", children: [
              u,
              h && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: v("flex-1", !j && "inline-block"), children: [
              We,
              tt
            ] })
          ] }),
          Ze()
        ]
      }
    ) : /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: v(j ? "w-full" : "inline-block", b),
        ref: q,
        children: [
          u && /* @__PURE__ */ e.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
            u,
            h && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          We,
          tt,
          Ze()
        ]
      }
    );
  }
);
Rt.displayName = "PrimitiveDatePicker";
const Ps = ({
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
  const [g, u] = te([
    void 0,
    void 0
  ]);
  if (t === "single") {
    const h = Array.isArray(r) ? r[0] : r;
    return /* @__PURE__ */ e.jsx(
      Rt,
      {
        value: h === null ? void 0 : h,
        onChange: (m) => s == null ? void 0 : s(m),
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
    let [h, m] = Array.isArray(r) ? r : g;
    const j = (y) => {
      !h || h && m ? (u([y, void 0]), s == null || s([y, void 0])) : h && !m && (y < h ? (u([y, h]), s == null || s([y, h])) : (u([h, y]), s == null || s([h, y])));
    }, b = () => {
      if (!h) return "";
      const y = (p) => p ? p.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }) : "";
      return h && m ? `${y(h)} - ${y(m)}` : y(h);
    };
    return /* @__PURE__ */ e.jsx(
      Rt,
      {
        value: h,
        onChange: j,
        monthsToShow: a,
        placeholder: f.placeholder || "Select date range",
        valueFormatter: b,
        rangeStart: h,
        rangeEnd: m,
        closeOnSelect: !!m,
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
Ps.displayName = "DatePicker";
const ur = je(
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
), Is = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-4xl",
  fullscreen: "w-full h-full max-w-none max-h-none rounded-none"
}, Ds = je(
  ({
    isOpen: t,
    onClose: r,
    children: s,
    className: a,
    backdrop: n = "dark",
    header: l,
    closeOnBackdropClick: c = !0,
    size: i = "md",
    ...d
  }, f) => {
    const [g, u] = te(!1), [h, m] = te(!1);
    if (be(() => {
      if (t) {
        u(!0), m(!0);
        const p = ke();
        "body" in p && (p.body.style.overflow = "hidden");
      } else {
        m(!1);
        const p = setTimeout(() => {
          u(!1);
          const w = ke();
          "body" in w && (w.body.style.overflow = "");
        }, 300);
        return () => clearTimeout(p);
      }
    }, [t]), be(() => {
      const p = (w) => {
        w instanceof KeyboardEvent && w.key === "Escape" && r();
      };
      return t && ke().addEventListener("keydown", p), () => {
        ke().removeEventListener("keydown", p);
      };
    }, [t, r]), !g) return null;
    const j = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, b = () => {
      c && r();
    }, y = ke();
    return "body" in y ? He(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: v(
            "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300",
            j[n],
            h ? "opacity-100" : "opacity-0",
            i === "fullscreen" && "items-start"
          ),
          onClick: b,
          children: /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: f,
              className: v(
                "relative transform rounded-lg bg-white p-6 shadow-xl transition-all duration-300",
                Is[i],
                h ? "scale-100 opacity-100" : "scale-95 opacity-0",
                a
              ),
              onClick: (p) => p.stopPropagation(),
              ...d,
              children: [
                l && /* @__PURE__ */ e.jsx(ur, { onClose: r, children: l }),
                s
              ]
            }
          )
        }
      ),
      y.body
    ) : null;
  }
), Ts = je(
  ({ children: t, className: r, ...s }, a) => /* @__PURE__ */ e.jsx(
    "h2",
    {
      ref: a,
      className: v("text-xl font-semibold text-gray-900", r),
      ...s,
      children: t
    }
  )
), _s = je(
  ({ children: t, className: r, ...s }, a) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: a,
      className: v("text-gray-600", r),
      ...s,
      children: t
    }
  )
), zs = je(
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
Ds.displayName = "Dialog";
Ts.displayName = "DialogTitle";
_s.displayName = "DialogBody";
zs.displayName = "DialogActions";
ur.displayName = "DialogHeader";
const Os = ({
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
}, Ls = {
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
}, $s = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, Ut = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
}, La = ({
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
  rounded: g = "lg",
  children: u,
  showFileList: h = !0,
  showPlaceholder: m = !0,
  showMaxSize: j = !0,
  icon: b = "mdi:upload"
}) => {
  const [y, p] = te(!1), [w, C] = te(null), L = pe(null), I = Ge((A) => {
    A.preventDefault(), c || p(!0);
  }, [c]), Z = Ge((A) => {
    A.preventDefault(), p(!1);
  }, []), G = Ge((A) => A.size > r ? `File size exceeds ${r / (1024 * 1024)}MB limit` : t[0] !== "*" && !t.some(($) => $.startsWith(".") ? A.name.toLowerCase().endsWith($.toLowerCase()) : A.type.startsWith($)) ? `File type not allowed. Allowed types: ${t.join(", ")}` : null, [t, r]), N = Ge((A) => {
    if (A.preventDefault(), p(!1), C(null), c) return;
    const $ = Array.from(A.dataTransfer.files), B = [], P = [];
    if ($.forEach((x) => {
      const D = G(x);
      D ? P.push(`${x.name}: ${D}`) : B.push(x);
    }), P.length > 0 && C(P.join(`
`)), B.length > 0) {
      const x = s ? [...a, ...B] : B;
      n == null || n(x);
    }
  }, [c, s, n, G, a]), E = Ge((A) => {
    if (C(null), c || !A.target.files) return;
    const $ = Array.from(A.target.files), B = [], P = [];
    if ($.forEach((x) => {
      const D = G(x);
      D ? P.push(`${x.name}: ${D}`) : B.push(x);
    }), P.length > 0 && C(P.join(`
`)), B.length > 0) {
      const x = s ? [...a, ...B] : B;
      n == null || n(x);
    }
    L.current && (L.current.value = "");
  }, [c, s, n, G, a]), k = Ge((A) => {
    const $ = [...a];
    $.splice(A, 1), n == null || n($);
  }, [n, a]), Y = (A) => A.type.startsWith("image/") ? /* @__PURE__ */ e.jsx(ae, { icon: "mdi:image", className: "w-5 h-5" }) : A.type.startsWith("text/") ? /* @__PURE__ */ e.jsx(ae, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ e.jsx(ae, { icon: "mdi:file", className: "w-5 h-5" }), S = Ls[d];
  return /* @__PURE__ */ e.jsxs("div", { className: ce("w-full", l), children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: ce(
          "p-6 text-center transition-colors",
          !u && [
            "border-2 border-dashed",
            S.border,
            S.bg,
            y && S.active,
            !c && S.hover
          ],
          c && "opacity-50 cursor-not-allowed",
          $s[f],
          Ut[g],
          !u && "cursor-pointer"
        ),
        onDragOver: I,
        onDragLeave: Z,
        onDrop: N,
        onClick: () => {
          var A;
          return !c && !u && ((A = L.current) == null ? void 0 : A.click());
        },
        children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: L,
              type: "file",
              accept: t.join(","),
              multiple: s,
              onChange: E,
              className: "hidden",
              disabled: c
            }
          ),
          u ? /* @__PURE__ */ e.jsx("div", { onClick: () => {
            var A;
            return !c && ((A = L.current) == null ? void 0 : A.click());
          }, children: u }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(ae, { icon: b, className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
            m && /* @__PURE__ */ e.jsx("p", { className: ce("text-neutral-600", S.text), children: i }),
            j && /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-neutral mt-2", children: [
              "Max file size: ",
              r / (1024 * 1024),
              "MB"
            ] })
          ] })
        ]
      }
    ),
    w && /* @__PURE__ */ e.jsx("p", { className: "mt-2 text-sm text-danger", children: w }),
    h && a.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "mt-4 space-y-2", children: a.map((A, $) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: ce(
          "flex items-center justify-between p-2",
          Ut[g],
          S.bg
        ),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
            Y(A),
            /* @__PURE__ */ e.jsx("span", { className: ce("text-sm", S.text), children: A.name }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-neutral", children: [
              "(",
              (A.size / 1024).toFixed(1),
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
      `${A.name}-${$}`
    )) })
  ] });
}, Vs = Ne(
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
), $a = ({
  title: t,
  children: r,
  icon: s,
  variant: a = "default",
  rounded: n = "md",
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
  return /* @__PURE__ */ e.jsxs("div", { className: v(Vs({ variant: a, rounded: n }), i), children: [
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
}, kt = "select-dropdown-opened", Fs = Ne(
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
), mr = je(
  ({
    className: t,
    variant: r = "default",
    size: s = "md",
    rounded: a = "md",
    options: n,
    label: l,
    error: c = !1,
    errorText: i,
    helperText: d,
    required: f = !1,
    placeholder: g,
    value: u,
    onChange: h,
    disabled: m = !1,
    position: j = "bottom",
    fullWidth: b = !1,
    children: y,
    leftIcon: p,
    rightIcon: w,
    ...C
  }, L) => {
    const [I, Z] = te(!1), G = pe(null), N = pe(null), k = `select-${xe.useId().replace(/:/g, "")}`, Y = () => {
      if (I && G.current && N.current) {
        const x = G.current.getBoundingClientRect(), D = N.current, _ = Me(), oe = _.innerHeight - x.bottom, z = x.top, O = x.bottom + D.offsetHeight + 4 >= _.innerHeight, V = z > oe, J = O && V;
        j === "bottom" || j === "top" ? (D.style.position = "fixed", D.style.left = `${x.left}px`, D.style.width = `${x.width}px`, j === "bottom" && J ? (D.style.bottom = `${_.innerHeight - x.top + 4}px`, D.style.top = "auto", D.style.maxHeight = `${z - 8}px`) : j === "bottom" ? (D.style.top = `${x.bottom + 4}px`, D.style.bottom = "auto", D.style.maxHeight = `${oe - 8}px`) : j === "top" && !J ? (D.style.top = `${x.bottom + 4}px`, D.style.bottom = "auto", D.style.maxHeight = `${oe - 8}px`) : (D.style.bottom = `${_.innerHeight - x.top + 4}px`, D.style.top = "auto", D.style.maxHeight = `${z - 8}px`)) : j === "left" ? (D.style.position = "fixed", D.style.right = `${_.innerWidth - x.left + 4}px`, D.style.top = `${x.top}px`, D.style.maxHeight = `${_.innerHeight - x.top - 8}px`) : j === "right" && (D.style.position = "fixed", D.style.left = `${x.right + 4}px`, D.style.top = `${x.top}px`, D.style.maxHeight = `${_.innerHeight - x.top - 8}px`);
      }
    };
    be(() => {
      const x = Me(), D = () => {
        I && Y();
      }, _ = () => {
        I && Y();
      };
      return I && (Y(), x.addEventListener("scroll", D, !0), x.addEventListener("resize", _)), () => {
        x.removeEventListener("scroll", D, !0), x.removeEventListener("resize", _);
      };
    }, [I, j]), be(() => {
      const x = ke(), D = (oe) => {
        oe.detail.id !== k && Z(!1);
      }, _ = (oe) => {
        const z = oe.target, q = G.current, O = N.current;
        q && O && !q.contains(z) && !O.contains(z) && Z(!1);
      };
      return x.addEventListener(kt, D), x.addEventListener("click", _), () => {
        x.removeEventListener(kt, D), x.removeEventListener("click", _);
      };
    }, [k]);
    const S = () => {
      if (m) return;
      if (I) {
        Z(!1);
        return;
      }
      ke().dispatchEvent(
        new CustomEvent(kt, {
          detail: { id: k }
        })
      ), Z(!0);
    }, A = () => {
      if (n) {
        const x = n.find((D) => D.value === u);
        return x == null ? void 0 : x.label;
      }
      if (y) {
        const D = $t.toArray(y).find(
          (_) => bt(_) && "value" in _.props && _.props.value === u
        );
        return bt(D) ? D.props.children : null;
      }
      return null;
    }, $ = (x) => {
      m || (h == null || h(x), Z(!1));
    }, B = () => n ? n.map((x) => /* @__PURE__ */ e.jsx(
      mt,
      {
        value: x.value,
        disabled: x.disabled,
        selected: x.value === u,
        onClick: () => {
          x.onClick && x.onClick(x.value), $(x.value);
        },
        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          x.icon,
          x.label
        ] })
      },
      x.value
    )) : y ? $t.map(y, (x) => bt(x) && "value" in x.props ? Mr(x, {
      selected: x.props.value === u,
      onClick: () => $(x.props.value)
    }) : null) : null, P = () => {
      if (!I || m) return null;
      const x = /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: N,
          className: v(
            "fixed z-[9999] min-w-[8rem] border border-neutral-200 bg-white py-1 shadow-lg rounded-lg",
            j === "left" || j === "right" ? "w-max" : "w-full"
          ),
          onClick: (_) => _.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: B()
        }
      ), D = ke();
      return "body" in D ? He(x, D.body) : null;
    };
    return /* @__PURE__ */ e.jsxs("div", { className: v(b ? "w-full" : "inline-block"), ref: L, ...C, children: [
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
          className: v("relative", !b && "inline-block"),
          onClick: S,
          children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                id: k,
                ref: G,
                type: "button",
                className: v(
                  Fs({ variant: c ? "error" : r, size: s, rounded: a, fullWidth: b }),
                  "flex items-center justify-between",
                  m && "cursor-not-allowed opacity-50",
                  p && "pl-10",
                  w && "pr-10",
                  t
                ),
                "aria-haspopup": "listbox",
                "aria-expanded": I,
                "aria-describedby": c ? `${k}-error` : d ? `${k}-helper` : void 0,
                disabled: m,
                children: [
                  p && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ e.jsx(ae, { icon: p, className: "w-4 h-4" }) }),
                  /* @__PURE__ */ e.jsx("span", { className: "flex items-center gap-2 min-w-0 flex-1", children: /* @__PURE__ */ e.jsx("span", { className: v(
                    "truncate text-left",
                    A() ? "text-neutral-900" : "text-neutral"
                  ), children: A() || g }) }),
                  w ? /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ e.jsx(ae, { icon: w, className: "w-4 h-4" }) }) : /* @__PURE__ */ e.jsx(
                    ae,
                    {
                      icon: "mdi:chevron-down",
                      className: v("transition-transform flex-shrink-0 ml-2 w-4 h-4", I && "rotate-180")
                    }
                  )
                ]
              }
            ),
            P()
          ]
        }
      ),
      c && i && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: `${k}-error`, children: i }),
      !c && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: `${k}-helper`, children: d })
    ] });
  }
);
mr.displayName = "Select";
const Bs = ({
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
  const g = (m, j) => {
    const b = j - m + 1;
    return Array.from({ length: b }, (y, p) => p + m);
  }, h = (() => {
    const m = n * 2 + 3, j = m + 2;
    if (r > j) {
      const b = Math.max(2, t - n), y = Math.min(r - 1, t + n);
      let p = g(b, y);
      const w = b > 2, C = r - y > 1, L = m - (p.length + 1);
      if (w && !C)
        p = [...g(b - L, b - 1), ...p];
      else if (!w && C) {
        const I = g(y + 1, y + L);
        p = [...p, ...I];
      } else w && C && (p = [...p]);
      return [1, ...p, r];
    }
    return g(1, r);
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
              mr,
              {
                value: i == null ? void 0 : i.toString(),
                onChange: (m) => f && f(Number(m)),
                size: "sm",
                className: "w-16",
                fullWidth: !1,
                "aria-label": "Items per page",
                children: c.map((m) => /* @__PURE__ */ e.jsx(mt, { value: m.toString(), children: m }, m))
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
          h.map((m, j) => {
            const b = m === t, y = typeof m == "string" && m === "...";
            return /* @__PURE__ */ e.jsx(
              Re,
              {
                variant: "ghost",
                onClick: () => !y && a(m),
                className: ce(
                  "px-3 py-1 rounded-md text-sm",
                  b ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  y && "cursor-default"
                ),
                children: m
              },
              j
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
}, Ys = ({
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
  const f = (h) => {
    a && a(h.target.checked);
  }, g = {
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
              g[d],
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
}, Gs = Ne(
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
), Hs = je(
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
    label: g,
    required: u = !1,
    labelPlacement: h = "top",
    fullWidth: m = !1,
    disabled: j = !1,
    name: b,
    gap: y,
    color: p = "primary",
    radioSize: w = "sm",
    id: C,
    ...L
  }, I) => {
    const Z = C || xe.useId(), G = `${Z}-helper`, N = `${Z}-error`, E = `${Z}-group`, k = b || `radio-group-${Z}`, [Y, S] = xe.useState(a), A = s !== void 0 ? s : Y, $ = (_) => {
      s === void 0 && S(_), n == null || n(_);
    }, P = ((_) => _ === "none" ? "gap-0" : _ === "xs" ? "gap-1" : _ === "sm" ? "gap-2" : _ === "md" ? "gap-3" : _ === "lg" ? "gap-4" : _ === "xl" ? "gap-6" : null)(y), x = /* @__PURE__ */ e.jsx("div", { className: v("relative", !m && "inline-block"), children: /* @__PURE__ */ e.jsx(
      "fieldset",
      {
        ref: I,
        id: E,
        className: v(
          Gs({ layout: l, size: c }),
          P,
          t
        ),
        "aria-describedby": i ? N : f ? G : void 0,
        "aria-invalid": i,
        "aria-required": u,
        ...L,
        children: r.map((_) => /* @__PURE__ */ e.jsx(
          Ys,
          {
            label: _.label,
            checked: A === _.value,
            onChange: () => $(_.value),
            disabled: j || _.disabled,
            name: k,
            value: _.value,
            color: i ? "error" : p,
            error: i ? " " : void 0,
            variantSize: w
          },
          _.value
        ))
      }
    ) }), D = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      i && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: N, children: d }),
      !i && f && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: G, children: f })
    ] });
    return h === "left" ? /* @__PURE__ */ e.jsx("div", { className: v(m ? "w-full" : "inline-block", t), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
      g && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: E,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            g,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: v("flex-1", !m && "inline-block"), children: [
        x,
        D
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: v(m ? "w-full" : "inline-block", t), children: [
      g && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: E,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            g,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      x,
      D
    ] });
  }
);
Hs.displayName = "RadioGroup";
const Ws = Ne(
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
), Us = ({
  width: t,
  height: r,
  variant: s = "default",
  rounded: a = "md",
  fullWidth: n = !1,
  className: l
}) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: v(Ws({ variant: s, rounded: a, fullWidth: n }), l),
    style: {
      width: !n && typeof t == "number" ? `${t}px` : t,
      height: typeof r == "number" ? `${r}px` : r
    }
  }
), Va = ({
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
  range: g = !1
}) => {
  const u = g, [h, m] = te(
    a !== void 0 ? a : n !== void 0 ? n : u ? [t, r] : t
  ), [j, b] = te(null), y = pe(null), p = a !== void 0 ? a : h, [w, C] = u ? Array.isArray(p) ? p : [t, r] : [typeof p == "number" ? p : t, r], L = (P) => Math.min(Math.max(P, t), r), I = (P) => {
    if (i) return;
    let x;
    u && Array.isArray(P) ? x = [L(P[0]), L(P[1])] : !u && typeof P == "number" ? x = L(P) : x = u ? [t, r] : t, a === void 0 && m(x), l == null || l(x);
  }, Z = (P) => {
    if (!y.current) return t;
    const x = y.current.getBoundingClientRect(), _ = (P - x.left) / x.width, oe = t + (r - t) * _, z = Math.round(oe / s) * s;
    return L(z);
  }, G = (P) => (x) => {
    i || (b(P), x.stopPropagation());
  }, N = (P) => {
    if (!i)
      if (!u)
        b(0), E(P, 0);
      else {
        const x = Z(P.clientX), D = Math.abs(x - w), _ = Math.abs(x - C), oe = D < _ ? 0 : 1;
        b(oe), E(P, oe);
      }
  }, E = xe.useCallback((P, x) => {
    const D = Z(P.clientX);
    if (!u)
      I(D);
    else {
      let _ = [w, C];
      x === 0 ? _ = [Math.min(D, C - s), C] : _ = [w, Math.max(D, w + s)], _[0] > _[1] && (_ = [_[1], _[0]]), I(_);
    }
  }, [u, w, C, s, I, Z]), k = xe.useRef(j);
  k.current = j;
  const Y = xe.useCallback(function(P) {
    k.current === null || i || E(P, k.current);
  }, [i, E]), S = xe.useCallback(function() {
    b(null);
  }, []);
  be(() => {
    if (j !== null) {
      const P = Me();
      return P.addEventListener("mousemove", Y), P.addEventListener("mouseup", S), () => {
        P.removeEventListener("mousemove", Y), P.removeEventListener("mouseup", S);
      };
    }
  }, [j, Y, S]);
  const A = (P) => (P - t) / (r - t) * 100, $ = A(w), B = A(C);
  return /* @__PURE__ */ e.jsxs("div", { className: ce("relative w-full", c), children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: y,
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
              onMouseDown: G(0)
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
              onMouseDown: G(1)
            }
          )
        ]
      }
    ),
    f.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex justify-between mt-2", children: f.map((P) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "text-xs text-gray",
        style: { left: `${(P.value - t) / (r - t) * 100}%` },
        children: P.label
      },
      P.value
    )) }),
    d && /* @__PURE__ */ e.jsx("div", { className: "mt-2 text-sm text-gray-600", children: u ? `${w} - ${C}` : w })
  ] });
}, Ks = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}, Zs = {
  primary: "text-primary",
  warning: "text-warning",
  default: "text-default-400"
}, Fa = ({
  rating: t,
  maxRating: r = 5,
  size: s = "md",
  color: a = "primary",
  readOnly: n = !1,
  onRatingChange: l,
  className: c
}) => {
  const [i, d] = te(null), f = (m) => {
    n || d(m);
  }, g = () => {
    n || d(null);
  }, u = (m) => {
    !n && l && l(m);
  }, h = i !== null ? i : t;
  return /* @__PURE__ */ e.jsx("div", { className: v("flex items-center gap-1", c), children: [...Array(r)].map((m, j) => {
    const b = j + 1, y = b <= h, p = i !== null && b <= i;
    return /* @__PURE__ */ e.jsx(
      "button",
      {
        className: v(
          "transition-colors duration-200",
          Ks[s],
          y || p ? Zs[a] : "text-default-200",
          !n && "cursor-pointer"
        ),
        onMouseEnter: () => f(b),
        onMouseLeave: g,
        onClick: () => u(b),
        disabled: n,
        "aria-label": `Rate ${b} out of ${r}`,
        children: /* @__PURE__ */ e.jsx(
          ae,
          {
            icon: y || p ? "mdi:star" : "mdi:star-outline",
            className: "w-full h-full"
          }
        )
      },
      j
    );
  }) });
}, qs = {
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
}, Js = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4"
}, Ba = ({
  status: t,
  size: r = "md",
  withLabel: s = !1,
  className: a
}) => {
  const { bgColor: n, label: l } = qs[t], c = Js[r];
  return /* @__PURE__ */ e.jsxs("div", { className: v("flex items-center gap-2", a), children: [
    /* @__PURE__ */ e.jsx("div", { className: v("rounded-full animate-pulse", n, c) }),
    s && /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: l })
  ] });
}, fr = (t, r) => {
  if (r) return r;
  switch (t) {
    case "completed":
      return "mdi:check";
    case "active":
      return "mdi:circle-medium";
    default:
      return "mdi:circle-outline";
  }
}, gr = (t) => {
  switch (t) {
    case "completed":
      return "text-white bg-primary ring-4 ring-primary-50";
    case "active":
      return "text-primary bg-primary-50 ring-4 ring-primary-50";
    default:
      return "text-neutral bg-neutral-50 ring-4 ring-neutral-50";
  }
}, Xs = ({
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
                gr(c)
              ),
              children: /* @__PURE__ */ e.jsx(
                ae,
                {
                  icon: fr(c, n.icon),
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
          Os,
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
}) }), Qs = ({
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
                gr(c)
              ),
              children: /* @__PURE__ */ e.jsx(
                ae,
                {
                  icon: fr(c, n.icon),
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
}) }), Ya = ({
  orientation: t = "horizontal",
  variant: r = "default",
  ...s
}) => t === "vertical" ? /* @__PURE__ */ e.jsx(Qs, { variant: r, ...s }) : /* @__PURE__ */ e.jsx(Xs, { variant: r, ...s }), Ga = ({
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
}, Ha = ({
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
  var p, w;
  const [f, g] = te(r || ((p = t[0]) == null ? void 0 : p.id) || ""), u = xe.useRef(null), [h, m] = te({ left: 0, width: 0 });
  xe.useEffect(() => {
    var C;
    if (s === "active-underline" && u.current) {
      const L = u.current.getBoundingClientRect(), I = (C = u.current.parentElement) == null ? void 0 : C.getBoundingClientRect();
      I && m({
        left: L.left - I.left,
        width: L.width
      });
    }
  }, [s, t, f]), xe.useEffect(() => {
    if (s === "active-underline") {
      const C = () => {
        var L;
        if (u.current) {
          const I = u.current.getBoundingClientRect(), Z = (L = u.current.parentElement) == null ? void 0 : L.getBoundingClientRect();
          Z && m({
            left: I.left - Z.left,
            width: I.width
          });
        }
      };
      return window.addEventListener("resize", C), () => window.removeEventListener("resize", C);
    }
  }, [s, t, f]);
  const j = Ge((C) => {
    g(C), d == null || d(C);
  }, [d]), b = () => {
    switch (a) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  }, y = (C, L) => {
    const I = ce(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      b(),
      L && "opacity-50 cursor-not-allowed",
      !L && "cursor-pointer"
    );
    switch (s) {
      case "pills":
        return ce(
          I,
          "rounded-full",
          C ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return ce(
          I,
          "border-b-2",
          C ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      case "active-underline":
        return ce(
          I,
          "border-b-0",
          C ? "text-primary" : "text-gray-600 dark:text-gray-300 hover:text-primary"
        );
      default:
        return ce(
          I,
          "border-b-2",
          C ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
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
      t.map((C) => {
        const L = C.id === f, I = !!C.disabled;
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            ref: s === "active-underline" && L ? u : void 0,
            onClick: () => !I && j(C.id),
            disabled: I,
            className: ce(
              y(L, I),
              c
            ),
            children: [
              C.icon && /* @__PURE__ */ e.jsx(
                ae,
                {
                  icon: C.icon,
                  className: "w-5 h-5 flex-shrink-0"
                }
              ),
              /* @__PURE__ */ e.jsx("span", { children: C.label })
            ]
          },
          C.id
        );
      }),
      s === "active-underline" && /* @__PURE__ */ e.jsx(
        "span",
        {
          className: "absolute bottom-0 h-0.5 bg-primary transition-all duration-300",
          style: { left: h.left, width: h.width }
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: ce("mt-4", i), children: (w = t.find((C) => C.id === f)) == null ? void 0 : w.content })
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
}, jt = "timepicker-dropdown-opened", ea = Ne(
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
), pr = je(
  ({
    value: t,
    onChange: r,
    use24Hour: s = !1,
    variant: a = "default",
    size: n = "md",
    rounded: l = "md",
    disabled: c = !1,
    errorText: i,
    helperText: d,
    label: f,
    required: g = !1,
    labelPlacement: u = "top",
    fullWidth: h = !1,
    className: m,
    placeholder: j = "Select time",
    leftIcon: b,
    rightIcon: y,
    valueFormatter: p,
    closeOnSelect: w = !0,
    ...C
  }, L) => {
    const [I, Z] = te(!1), [G, N] = te(t || ""), [E, k] = te(0), [Y, S] = te(0), [A, $] = te(!0), B = pe(null), P = pe(null), x = pe(null), _ = `timepicker-${xe.useId().replace(/:/g, "")}`, oe = () => {
      if (!I || !P.current || !x.current) return;
      const R = P.current.getBoundingClientRect(), X = x.current, we = Me().innerHeight - R.bottom;
      X.style.top = `${R.bottom + 4}px`, X.style.bottom = "auto", X.style.left = `${R.left}px`, X.style.maxHeight = `${we - 8}px`, X.style.width = `${R.width}px`;
    };
    be(() => {
      const R = Me(), X = ke(), he = () => {
        I && oe();
      }, we = () => {
        I && oe();
      }, Te = (De) => {
        De.detail.id !== _ && Z(!1);
      }, Oe = (De) => {
        const Le = De.target;
        B.current && x.current && !B.current.contains(Le) && !x.current.contains(Le) && Z(!1);
      };
      return I && (oe(), R.addEventListener("scroll", he, !0), R.addEventListener("resize", we)), X.addEventListener(jt, Te), X.addEventListener("mousedown", Oe), () => {
        R.removeEventListener("scroll", he, !0), R.removeEventListener("resize", we), X.removeEventListener(jt, Te), X.removeEventListener("mousedown", Oe);
      };
    }, [I, _]);
    const z = () => {
      c || (I || ke().dispatchEvent(
        new CustomEvent(jt, {
          detail: { id: _ }
        })
      ), Z(!I));
    };
    be(() => {
      if (t) {
        N(t);
        const [R, X] = t.split(":").map(Number);
        s ? k(R) : (k(R % 12 || 12), $(R < 12)), S(X);
      }
    }, [t, s]);
    const q = () => {
      const X = `${(s || A ? E : E + 12).toString().padStart(2, "0")}:${Y.toString().padStart(2, "0")}`;
      N(X), r == null || r(X), w && Z(!1);
    }, O = () => s ? Array.from({ length: 24 }, (R, X) => X) : Array.from({ length: 12 }, (R, X) => X + 1), V = () => Array.from({ length: 60 }, (R, X) => X), J = p ? p(G) : G, re = ke();
    return "body" in re ? /* @__PURE__ */ e.jsxs("div", { ref: B, className: v("relative", h && "w-full", m), children: [
      f && /* @__PURE__ */ e.jsxs(
        "label",
        {
          className: v(
            "block text-sm font-medium text-gray-700 mb-1",
            u === "left" && "inline-block mr-2"
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
          ref: P,
          className: "relative",
          onClick: z,
          children: [
            b && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ e.jsx(ae, { icon: b, size: 20 }) }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: L,
                type: "text",
                value: J,
                placeholder: j,
                readOnly: !0,
                className: v(
                  ea({ variant: a, size: n, rounded: l, fullWidth: h }),
                  b && "pl-10",
                  y && "pr-10",
                  "text-left"
                ),
                disabled: c,
                ...C
              }
            ),
            y && /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ e.jsx(ae, { icon: y, size: 20 }) })
          ]
        }
      ),
      I && He(
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: x,
            className: "fixed z-[9999] w-fit rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (R) => R.stopPropagation(),
            children: /* @__PURE__ */ e.jsxs("div", { className: "p-0", children: [
              /* @__PURE__ */ e.jsxs(Pt, { variant: "ghost", className: v(
                "flex mx-2 my-1 p-0",
                s ? "justify-start gap-8" : "justify-start gap-4"
              ), children: [
                /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2", children: O().map((R) => /* @__PURE__ */ e.jsx(
                  Re,
                  {
                    variant: "ghost",
                    onClick: () => k(R),
                    className: v(E === R && "bg-primary text-white"),
                    children: R.toString().padStart(2, "0")
                  },
                  R
                )) }) }) }),
                /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2", children: V().map((R) => /* @__PURE__ */ e.jsx(
                  Re,
                  {
                    variant: "ghost",
                    onClick: () => S(R),
                    className: v(Y === R && "bg-primary text-white"),
                    children: R.toString().padStart(2, "0")
                  },
                  R
                )) }) }) }),
                !s && /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ e.jsx(
                    Re,
                    {
                      variant: "ghost",
                      onClick: () => $(!0),
                      className: v(A && "bg-primary text-white"),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    Re,
                    {
                      variant: "ghost",
                      onClick: () => $(!1),
                      className: v(!A && "bg-primary text-white"),
                      children: "PM"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "mb-2 mx-2", children: /* @__PURE__ */ e.jsx(
                Re,
                {
                  variant: "primary",
                  onClick: q,
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
pr.displayName = "PrimitiveTimePicker";
const ta = ({
  value: t,
  onChange: r,
  valueFormatter: s,
  closeOnSelect: a,
  ...n
}) => /* @__PURE__ */ e.jsx(
  pr,
  {
    value: t,
    onChange: r,
    valueFormatter: s,
    closeOnSelect: a,
    ...n
  }
);
ta.displayName = "TimePicker";
const ra = Ne(
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
), sa = Ne(
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
), aa = je(
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
    ...g
  }, u) => {
    const h = xe.useId(), m = `${h}-helper`, j = `${h}-error`;
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
            className: v(ra({ variant: d ? "danger" : s, size: a }), f),
            "aria-describedby": d ? j : c ? m : void 0,
            "aria-invalid": d,
            "aria-required": l,
            ...g,
            children: /* @__PURE__ */ e.jsx(
              "span",
              {
                "data-state": t ? "checked" : "unchecked",
                className: v(
                  sa({ size: a }),
                  t ? "translate-x-5" : "translate-x-1"
                )
              }
            )
          }
        ),
        n && /* @__PURE__ */ e.jsxs(
          "label",
          {
            htmlFor: h,
            className: "text-sm text-neutral-900",
            children: [
              n,
              l && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ]
          }
        )
      ] }),
      d && i && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-danger", id: j, children: i }),
      !d && c && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-neutral", id: m, children: c })
    ] });
  }
);
aa.displayName = "Toggle";
const na = Ne(
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
), oa = Ne("absolute w-2 h-2 transform rotate-45", {
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
}), Wa = ({
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
  const [g, u] = te(!1), [h, m] = te({ top: 0, left: 0 }), j = pe(null), b = pe(null), y = pe(), p = i !== void 0, w = p ? i : g, C = () => {
    if (!j.current || !b.current) return;
    const N = b.current.getBoundingClientRect(), E = j.current.getBoundingClientRect(), k = Me(), Y = k.scrollX || k.pageXOffset, S = k.scrollY || k.pageYOffset;
    let A = 0, $ = 0;
    const B = 8;
    switch (s) {
      case "top":
        A = N.top + S - E.height - B, $ = N.left + Y + (N.width - E.width) / 2;
        break;
      case "bottom":
        A = N.bottom + S + B, $ = N.left + Y + (N.width - E.width) / 2;
        break;
      case "left":
        A = N.top + S + (N.height - E.height) / 2, $ = N.left + Y - E.width - B;
        break;
      case "right":
        A = N.top + S + (N.height - E.height) / 2, $ = N.right + Y + B;
        break;
    }
    const P = k.innerWidth, x = k.innerHeight;
    $ < 0 && ($ = 0), $ + E.width > P && ($ = P - E.width), A < 0 && (A = 0), A + E.height > x && (A = x - E.height), m({ top: A, left: $ });
  };
  be(() => {
    if (w) {
      C();
      const N = Me();
      N.addEventListener("scroll", C, !0), N.addEventListener("resize", C);
    }
    return () => {
      const N = Me();
      N.removeEventListener("scroll", C, !0), N.removeEventListener("resize", C);
    };
  }, [w, s]);
  const L = () => {
    p ? d == null || d(!0) : y.current = setTimeout(() => {
      u(!0);
    }, a);
  }, I = () => {
    y.current && clearTimeout(y.current), p ? d == null || d(!1) : u(!1);
  }, Z = (N) => {
    N.stopPropagation(), f === "click" && (p ? d == null || d(!i) : u(!g));
  };
  be(() => {
    const N = (E) => {
      f === "click" && j.current && !j.current.contains(E.target) && b.current && !b.current.contains(E.target) && I();
    };
    return w && document.addEventListener("click", N), () => {
      document.removeEventListener("click", N);
    };
  }, [w, f]);
  const G = () => {
    if (!w) return null;
    const N = ke();
    return "body" in N ? He(
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: j,
          className: v(na({ color: l, size: c }), n),
          style: {
            top: `${h.top}px`,
            left: `${h.left}px`
          },
          children: [
            t,
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: v(
                  oa({ color: l }),
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
      ref: b,
      className: "relative inline-block",
      onMouseEnter: f === "hover" ? L : void 0,
      onMouseLeave: f === "hover" ? I : void 0,
      onClick: Z,
      children: [
        r,
        G()
      ]
    }
  ) });
}, la = Ne(
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
), ia = {
  sm: 24,
  md: 36,
  lg: 48
}, ca = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  info: "bg-info"
}, da = {
  primary: "#007C99",
  // Tailwind primary
  secondary: "#CEEAE7",
  success: "#00B37D",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#0EA5E9"
}, ua = xe.forwardRef(
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
    ...g
  }, u) => {
    const h = Math.min(Math.max(n, 0), 100), m = ia[a], j = a === "sm" ? 2 : a === "md" ? 3 : 4, b = (m - j) / 2, y = 2 * Math.PI * b, p = y - h / 100 * y;
    let w = "";
    return r === "loading" ? w = "rounded-full" : d ? w = d === "none" ? "" : `rounded-${d}` : w = "rounded-md", r === "circular" ? /* @__PURE__ */ e.jsxs("div", { className: "inline-flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative", style: { width: m, height: m }, children: [
        /* @__PURE__ */ e.jsxs(
          "svg",
          {
            className: v(
              "transform -rotate-90",
              l ? "animate-spin" : ""
            ),
            width: m,
            height: m,
            children: [
              /* @__PURE__ */ e.jsx(
                "circle",
                {
                  strokeWidth: j,
                  stroke: "#e5e7eb",
                  fill: "transparent",
                  r: b,
                  cx: m / 2,
                  cy: m / 2
                }
              ),
              /* @__PURE__ */ e.jsx(
                "circle",
                {
                  className: v(
                    "transition-all duration-300 ease-in-out",
                    l ? "animate-dash" : ""
                  ),
                  strokeWidth: j,
                  strokeDasharray: y,
                  strokeDashoffset: l ? 0 : p,
                  strokeLinecap: "round",
                  stroke: da[s],
                  fill: "transparent",
                  r: b,
                  cx: m / 2,
                  cy: m / 2
                }
              )
            ]
          }
        ),
        f && /* @__PURE__ */ e.jsx("span", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ e.jsx(ae, { icon: f, size: m * 0.5 }) }),
        c && !l && !f && /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 flex items-center justify-center text-xs font-medium", children: [
          Math.round(h),
          "%"
        ] })
      ] }),
      i && /* @__PURE__ */ e.jsx("span", { className: "text-sm text-neutral-600", children: i })
    ] }) : /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: u,
          className: v(la({ variant: r === "loading" ? "bar" : r, size: a }), w, t),
          role: "progressbar",
          "aria-valuenow": l ? void 0 : h,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...g,
          children: /* @__PURE__ */ e.jsx(
            "div",
            {
              className: v(
                "h-full transition-all duration-300 ease-in-out",
                l ? "animate-progress-indeterminate" : "",
                ca[s],
                w
              ),
              style: {
                width: l ? "100%" : `${h}%`
              }
            }
          )
        }
      ),
      (c || i) && /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between text-xs text-neutral-600", children: [
        i && /* @__PURE__ */ e.jsx("span", { children: i }),
        c && !l && /* @__PURE__ */ e.jsxs("span", { children: [
          Math.round(h),
          "%"
        ] })
      ] })
    ] });
  }
);
ua.displayName = "Progress";
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
], ma = Ne(
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
), Nt = (t) => {
  if (!t || !t.startsWith("+"))
    return null;
  const r = [...Ye].sort(
    (s, a) => a.code.length - s.code.length
  );
  for (const s of r)
    if (t.startsWith(s.code))
      return s;
  return null;
}, Kt = (t) => {
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
}, fa = (t) => t.startsWith("0") && t.length >= 9 && t.length <= 12 ? "+62" + t.slice(1) : t, ga = (t) => t.startsWith("0") && t.length >= 3, At = je(
  ({
    className: t,
    variant: r = "default",
    size: s = "md",
    rounded: a = "md",
    error: n = !1,
    errorText: l,
    helperText: c,
    label: i,
    required: d = !1,
    fullWidth: f = !1,
    value: g = "",
    onChange: u,
    disabled: h = !1,
    defaultCountry: m = "id",
    placeholder: j = "Enter phone number",
    autoDetect: b = !0,
    ...y
  }) => {
    const [p, w] = te(!1), [C, L] = te(
      () => Ye.find((O) => O.iso === m) || Ye[0]
    ), [I, Z] = te(""), [G, N] = te(() => {
      if (b && g) {
        const V = Nt(g);
        if (V)
          return L(V), g;
        const J = Kt(g);
        return J ? (L(J), J.code + g.slice(J.code.replace("+", "").length)) : g;
      }
      const O = C.code;
      return g.startsWith(O) ? g.slice(O.length) : g;
    }), [E, k] = te(() => b && g ? !!(Nt(g) || Kt(g)) : !1), Y = pe(null), S = pe(null), A = xe.useId(), $ = `${A}-helper`, B = `${A}-error`, P = Ye.filter(
      (O) => O.name.toLowerCase().includes(I.toLowerCase()) || O.code.includes(I)
    ), x = pe(null), D = () => {
      if (p && Y.current && S.current) {
        const O = Y.current.getBoundingClientRect(), V = S.current, J = typeof window < "u" ? window : { innerHeight: 0 }, re = J.innerHeight - O.bottom, R = O.top, he = O.bottom + (V.offsetHeight || 0) + 4 >= J.innerHeight, we = R > re, Te = he && we;
        V.style.position = "fixed", V.style.left = `${O.left}px`, V.style.minWidth = `${O.width}px`, V.style.maxWidth = "340px", V.style.width = "auto", Te ? (V.style.bottom = `${J.innerHeight - O.top + 4}px`, V.style.top = "auto", V.style.maxHeight = `${R - 8}px`) : (V.style.top = `${O.bottom + 4}px`, V.style.bottom = "auto", V.style.maxHeight = `${re - 8}px`);
      }
    };
    be(() => {
      const O = typeof window < "u" ? window : void 0, V = () => {
        p && D();
      }, J = () => {
        p && D();
      };
      return p && (D(), O == null || O.addEventListener("scroll", V, !0), O == null || O.addEventListener("resize", J)), () => {
        O == null || O.removeEventListener("scroll", V, !0), O == null || O.removeEventListener("resize", J);
      };
    }, [p]), be(() => {
      if (!p) return;
      const O = (V) => {
        const J = V.target;
        Y.current && S.current && !Y.current.contains(J) && !S.current.contains(J) && w(!1);
      };
      return document.addEventListener("click", O), () => document.removeEventListener("click", O);
    }, [p]);
    const _ = (O) => {
      if (L(O), w(!1), Z(""), b) {
        const V = O.code + G.replace(/^\+?\d*/, "");
        N(V);
        const J = V.replace(/[^\d]/g, "");
        u == null || u(J);
      } else {
        const J = (O.code + G).replace(/[^\d]/g, "");
        u == null || u(J);
      }
    }, oe = (O) => {
      const V = O.target.value;
      if (/^[+\d]*$/.test(V))
        if (b && V.startsWith("+")) {
          const re = Nt(V);
          if (re) {
            L(re), k(!0), N(V);
            const R = V.replace(/[^\d]/g, "");
            u == null || u(R);
          } else {
            N(V), k(!1);
            const R = V.replace(/[^\d]/g, "");
            u == null || u(R);
          }
        } else if (b && !V.startsWith("+") && V.length > 0) {
          const re = fa(V);
          if (re !== V) {
            N(re), L(
              Ye.find((X) => X.iso === "id") || Ye[0]
            ), k(!0);
            const R = re.replace(/[^\d]/g, "");
            u == null || u(R);
          } else if (ga(V)) {
            const R = "+62" + V.slice(1);
            N(R), L(
              Ye.find((he) => he.iso === "id") || Ye[0]
            ), k(!0);
            const X = R.replace(/[^\d]/g, "");
            u == null || u(X);
          } else if (V.startsWith("0"))
            N(V), k(!1);
          else {
            const R = "+" + V;
            N(R);
            const X = R.replace(/[^\d]/g, "");
            u == null || u(X);
          }
        } else {
          const re = V.replace(/[^\d]/g, "");
          N(re);
          const X = (C.code + re).replace(/[^\d]/g, "");
          u == null || u(X);
        }
    }, z = v(
      ma({
        variant: n ? "error" : r,
        size: s,
        rounded: a,
        fullWidth: f
      }),
      "!w-full"
    ), q = !b || b && E;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: x,
        className: v(f ? "w-full" : "inline-block", t),
        ...y,
        children: [
          i && /* @__PURE__ */ e.jsxs("label", { htmlFor: A, className: "mb-1.5 block text-sm text-neutral-900", children: [
            i,
            d && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: v("relative", !f && "inline-block"), children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex", children: [
              q && /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  ref: Y,
                  onClick: () => !h && w(!p),
                  className: v(
                    z,
                    "flex items-center gap-2 rounded-r-none justify-between",
                    b ? "max-w-[60px]" : "max-w-[100px]",
                    h && "cursor-not-allowed opacity-50"
                  ),
                  children: [
                    /* @__PURE__ */ e.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ e.jsx(ae, { icon: C.flag, className: "w-5 h-5" }),
                      !b && /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: C.code })
                    ] }),
                    /* @__PURE__ */ e.jsx(
                      ae,
                      {
                        icon: "mdi:chevron-down",
                        className: v("transition-transform", p && "rotate-180")
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
                  value: G,
                  onChange: oe,
                  disabled: h,
                  className: v(
                    z,
                    q ? "rounded-l-none" : "rounded-l-md",
                    "flex-1 min-w-0 w-full"
                  ),
                  placeholder: b ? "e.g. +6281234567890" : j
                }
              )
            ] }),
            p && He(
              /* @__PURE__ */ e.jsxs(
                "div",
                {
                  ref: S,
                  className: v(
                    "border border-neutral-200 bg-white shadow-lg overflow-y-auto",
                    {
                      "rounded-none": a === "none",
                      "rounded-sm": a === "sm",
                      "rounded-md": a === "md",
                      "rounded-lg": a === "lg",
                      "rounded-xl": a === "full"
                    }
                  ),
                  children: [
                    /* @__PURE__ */ e.jsx("div", { className: "p-2 border-b border-neutral-200", children: /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: I,
                        onChange: (O) => {
                          const V = O.target.value;
                          /^[a-zA-Z0-9\s]*$/.test(V) && Z(V);
                        },
                        placeholder: "Search countries...",
                        className: "w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:border-primary-300"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "max-h-[300px] overflow-y-auto", children: P.map((O) => /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => _(O),
                        className: v(
                          "w-full px-3 py-2 text-sm text-left hover:bg-primary-50 cursor-pointer",
                          C.iso === O.iso && "bg-primary-50"
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
At.displayName = "PhoneInput";
const Ua = () => {
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
          At,
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
          At,
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
}, pa = Ne(
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
), Ka = ({
  content: t,
  children: r,
  position: s = "bottom",
  color: a = "light",
  customColor: n,
  rounded: l = "md",
  shadow: c = "md",
  className: i,
  trigger: d = "click",
  autoFocus: f = !1,
  isOpen: g,
  onOpenChange: u,
  closeOnClickOutside: h = !0
}) => {
  const [m, j] = te(!1), [b, y] = te({ top: 0, left: 0 }), p = pe(null), w = pe(null), C = g !== void 0, L = C ? g : m, I = () => {
    if (!p.current || !w.current) return;
    const k = w.current.getBoundingClientRect(), Y = p.current.getBoundingClientRect(), S = Me(), A = S.scrollX || S.pageXOffset, $ = S.scrollY || S.pageYOffset;
    let B = 0, P = 0;
    const x = 8;
    switch (s) {
      case "top":
        B = k.top + $ - Y.height - x, P = k.left + A + (k.width - Y.width) / 2;
        break;
      case "bottom":
        B = k.bottom + $ + x, P = k.left + A + (k.width - Y.width) / 2;
        break;
      case "left":
        B = k.top + $ + (k.height - Y.height) / 2, P = k.left + A - Y.width - x;
        break;
      case "right":
        B = k.top + $ + (k.height - Y.height) / 2, P = k.right + A + x;
        break;
    }
    const D = S.innerWidth, _ = S.innerHeight;
    P < 0 && (P = 0), P + Y.width > D && (P = D - Y.width), B < 0 && (B = 0), B + Y.height > _ && (B = _ - Y.height), y({ top: B, left: P });
  };
  be(() => {
    if (L) {
      I();
      const k = Me();
      k.addEventListener("scroll", I, !0), k.addEventListener("resize", I);
    }
    return () => {
      const k = Me();
      k.removeEventListener("scroll", I, !0), k.removeEventListener("resize", I);
    };
  }, [L, s]), be(() => {
    if (L && f && p.current) {
      const k = p.current.querySelector(
        "input, select, textarea, button, [tabindex]:not([tabindex='-1'])"
      );
      k && k.focus();
    }
  }, [L, f]);
  const Z = () => {
    C ? u == null || u(!0) : j(!0);
  }, G = () => {
    C ? u == null || u(!1) : j(!1);
  }, N = (k) => {
    k.stopPropagation(), d === "click" && (C ? u == null || u(!g) : j(!m));
  };
  be(() => {
    if (!h) return;
    const k = (Y) => {
      d === "click" && p.current && !p.current.contains(Y.target) && w.current && !w.current.contains(Y.target) && G();
    };
    return L && document.addEventListener("pointerdown", k, !0), () => {
      document.removeEventListener("pointerdown", k, !0);
    };
  }, [L, d, h]);
  const E = () => {
    if (!L) return null;
    const k = ke();
    return "body" in k ? He(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: p,
          className: v(
            pa({ color: a, rounded: l, shadow: c }),
            a === "custom" && n ? n : "",
            i
          ),
          style: {
            top: `${b.top}px`,
            left: `${b.left}px`,
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
      ref: w,
      className: "relative inline-block",
      onMouseEnter: d === "hover" ? Z : void 0,
      onMouseLeave: d === "hover" ? G : void 0,
      onClick: N,
      tabIndex: 0,
      children: [
        r,
        E()
      ]
    }
  ) });
}, ha = Ne("flex items-center text-sm", {
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
}), ba = je(
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
      className: v(ha({ variant: r, size: s }), t),
      "aria-label": "Breadcrumb",
      ...c,
      children: /* @__PURE__ */ e.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: a.map((d, f) => {
        const g = f === a.length - 1, u = g && l;
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
              !g && /* @__PURE__ */ e.jsx("span", { className: v(
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
ba.displayName = "Breadcrumbs";
const hr = (t) => {
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
}, xa = ({ schema: t, variant: r = "primary" }) => {
  const s = [{ name: "no", label: "No.", accessorKey: "no", type: "number" }, ...t], a = hr(r);
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
            children: /* @__PURE__ */ e.jsx(Us, { className: "h-10 w-full rounded-md" })
          },
          `${l}-${i}`
        ))
      },
      l
    )) })
  ] }) }) });
}, Za = ({
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
  onPageChange: g,
  onPageSizeChange: u,
  onSortChange: h,
  onRowClick: m,
  showPagination: j = !1,
  variant: b = "primary",
  meta: y = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [p, w] = te(() => {
    const G = t.find((N) => N.sortable && N.sort);
    return G ? [{
      id: G.accessorKey.toString(),
      desc: G.sort === "desc"
    }] : [];
  }), C = xe.useMemo(() => {
    const G = t.map((N) => ({
      accessorKey: N.accessorKey,
      header: N.label,
      enableSorting: !!N.sortable,
      cell: N.render ? ({ row: E }) => {
        var k;
        return (k = N.render) == null ? void 0 : k.call(N, E.original[N.accessorKey], E.original, E.index);
      } : ({ row: E }) => E.original[N.accessorKey] || "-",
      meta: {
        align: N.align || "left"
      }
    }));
    return f ? [{
      accessorKey: "no",
      header: "No.",
      enableSorting: !1,
      cell: ({ row: N }) => (y.current_page - 1) * y.limit_number + N.index + 1,
      meta: {
        align: "left"
      }
    }, ...G] : G;
  }, [t, f, y]), L = Ir({
    data: r,
    columns: C,
    state: {
      sorting: p
    },
    onSortingChange: (G) => {
      const N = typeof G == "function" ? G(p) : G;
      w(N), N.length > 0 ? h == null || h(N[0].desc ? "desc" : "asc", N[0].id) : h == null || h("", "");
    },
    getCoreRowModel: _r(),
    getSortedRowModel: Tr(),
    getPaginationRowModel: Dr(),
    manualPagination: !0,
    pageCount: y.total_page
  }), I = hr(b);
  if (i)
    return d || /* @__PURE__ */ e.jsx(xa, { schema: t, variant: b });
  const Z = (G, N, E) => {
    const k = G.target;
    k.tagName === "BUTTON" || k.tagName === "A" || k.tagName === "INPUT" || k.tagName === "SELECT" || k.closest("button") !== null || k.closest("a") !== null || k.closest("input") !== null || k.closest("select") !== null || m == null || m(N, E);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-md", children: [
    /* @__PURE__ */ e.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ e.jsxs("table", { className: v("w-full border-spacing-0 border-separate", s), children: [
      /* @__PURE__ */ e.jsx("thead", { className: v("border-2 sticky top-0 z-10 rounded-t-md", I.border), children: L.getHeaderGroups().map((G) => /* @__PURE__ */ e.jsx("tr", { children: G.headers.map((N, E) => {
        var k, Y, S;
        return /* @__PURE__ */ e.jsx(
          "th",
          {
            className: v(
              "text-sm text-wrap border-y p-4",
              I.header,
              {
                "cursor-pointer": N.column.getCanSort(),
                "rounded-tl-md": E === 0,
                "rounded-tr-md": E === G.headers.length - 1,
                "text-left": ((k = N.column.columnDef.meta) == null ? void 0 : k.align) === "left",
                "text-center": ((Y = N.column.columnDef.meta) == null ? void 0 : Y.align) === "center",
                "text-right": ((S = N.column.columnDef.meta) == null ? void 0 : S.align) === "right"
              },
              a
            ),
            onClick: N.column.getCanSort() ? N.column.getToggleSortingHandler() : void 0,
            children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsx("span", { className: v({
                "font-semibold": E === 0
              }), children: Vt(N.column.columnDef.header, N.getContext()) }),
              N.column.getCanSort() && /* @__PURE__ */ e.jsx(
                ae,
                {
                  icon: N.column.getIsSorted() ? N.column.getIsSorted() === "desc" ? "mdi:keyboard-arrow-up" : "mdi:keyboard-arrow-down" : "mdi:unfold-more-horizontal",
                  className: v("h-4 w-4", {
                    "text-white": b !== "ghost",
                    "text-gray-700": b === "ghost"
                  })
                }
              )
            ] })
          },
          N.id
        );
      }) }, G.id)) }),
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
      ) }) : L.getRowModel().rows.map((G, N) => /* @__PURE__ */ e.jsx(
        "tr",
        {
          className: v(
            "p-3",
            I.row,
            {
              [I.stripe]: N % 2 !== 0,
              "bg-white": N % 2 === 0,
              "cursor-pointer": m
            },
            n
          ),
          onClick: (E) => Z(E, G.original, N),
          children: G.getVisibleCells().map((E) => {
            var k, Y, S;
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: v(
                  "px-4 py-3 text-sm text-gray-900",
                  {
                    "text-left": ((k = E.column.columnDef.meta) == null ? void 0 : k.align) === "left",
                    "text-center": ((Y = E.column.columnDef.meta) == null ? void 0 : Y.align) === "center",
                    "text-right": ((S = E.column.columnDef.meta) == null ? void 0 : S.align) === "right"
                  },
                  l
                ),
                children: Vt(E.column.columnDef.cell, E.getContext())
              },
              E.id
            );
          })
        },
        G.id
      )) })
    ] }) }),
    !!r.length && j && /* @__PURE__ */ e.jsx("div", { className: "p-4 bg-white rounded-b-md", children: /* @__PURE__ */ e.jsx(
      Bs,
      {
        currentPage: y.current_page,
        totalPages: y.total_page,
        totalData: y.total_data,
        onPageChange: g || (() => {
        }),
        perPage: y.limit_number,
        onPerPageChange: u || (() => {
        }),
        perPageOptions: [5, 10, 20, 50, 100],
        siblingCount: 1
      }
    ) })
  ] });
}, va = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, br = je(
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
  }, g) => {
    const h = c || (i ? {
      default: "mdi:information",
      success: "mdi:check-circle",
      error: "mdi:alert-circle",
      warning: "mdi:alert",
      info: "mdi:information"
    }[r] : void 0), m = a || n;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: g,
        className: v(
          "flex",
          n ? "items-start gap-3 p-4" : "items-center gap-2 py-2.5 px-3",
          "border border-gray-200",
          va[s],
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
          h && /* @__PURE__ */ e.jsx(
            ae,
            {
              icon: h,
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
            !m && /* @__PURE__ */ e.jsx("span", { className: "text-sm leading-5", children: f.children })
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
br.displayName = "Toast";
const Mt = Cr(void 0), ya = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, qa = ({ children: t }) => {
  const [r, s] = te([]), a = Ge((i) => {
    s((d) => d.filter((f) => f.id !== i));
  }, []), n = Ge((i) => {
    const d = Math.random().toString(36).substr(2, 9), f = i.position || "top-right", g = i.duration || 5e3, u = {
      ...i,
      id: d,
      position: f
    };
    return s((h) => [...h, u]), g > 0 && setTimeout(() => {
      a(d);
    }, g), d;
  }, [a]), l = r.reduce((i, d) => (i[d.position] || (i[d.position] = []), i[d.position].push(d), i), {
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-right": [],
    "top-center": [],
    "bottom-center": []
  }), c = ke();
  return "body" in c ? /* @__PURE__ */ e.jsxs(Mt.Provider, { value: { showToast: n, removeToast: a }, children: [
    t,
    He(
      /* @__PURE__ */ e.jsx(e.Fragment, { children: Object.entries(l).map(([i, d]) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: v(
            "fixed z-[100] flex flex-col gap-2 min-w-[320px] max-w-[420px]",
            ya[i],
            i.includes("bottom") ? "flex-col-reverse" : "flex-col"
          ),
          children: d.map((f) => /* @__PURE__ */ e.jsx(
            br,
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
  ] }) : /* @__PURE__ */ e.jsx(Mt.Provider, { value: { showToast: n, removeToast: a }, children: t });
}, Ja = () => {
  const t = Pr(Mt);
  if (!t)
    throw new Error("useToast must be used within a ToastProvider");
  return t;
}, wa = ({
  label: t,
  value: r,
  icon: s,
  className: a
}) => /* @__PURE__ */ e.jsxs(Pt, { className: v(
  "flex items-center gap-4 rounded-lg w-full bg-white p-4 shadow-sm hover:bg-neutral-50 transition-shadow duration-200 justify-between",
  a
), children: [
  /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-gray", children: t }),
    /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-2xl font-semibold text-gray-900", children: r })
  ] }),
  s && /* @__PURE__ */ e.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50", children: /* @__PURE__ */ e.jsx(ae, { icon: s, className: "h-6 w-6 text-primary-600" }) })
] }), ka = {
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
}, xr = {
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
}, ja = {
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
}, Zt = {
  ...ka,
  ...xr
}, qt = {
  image: "https://design-system-eaip.onrender.com/img/error.svg",
  message: "An unexpected error occurred. Our team is currently investigating the issue."
}, Jt = (t) => typeof t == "object" && t !== null && ("code" in t || "message" in t), Xa = ({
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
      const u = ja[n];
      return xr[u];
    }
    return Jt(t) && t.code && Zt[t.code] ? Zt[t.code] : qt;
  })(), f = l || d.image, g = c || (Jt(t) ? t.message : null) || d.message;
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${a}`, children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: f,
        alt: "Error illustration",
        className: "max-w-[300px] h-auto"
      }
    ),
    typeof g == "string" ? /* @__PURE__ */ e.jsx(ut, { variant: "body1", className: "m-0", children: g }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: g }),
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
}, Na = Ne(
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
), Ea = je(
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
    showSubmitButton: g = !1,
    submitButtonLabel: u = "Submit",
    submitButtonVariant: h = "primary",
    length: m = 6,
    numericOnly: j = !0,
    onComplete: b,
    onChange: y,
    onSubmit: p,
    value: w,
    defaultValue: C = "",
    disabled: L = !1,
    autoFocus: I = !1,
    ...Z
  }, G) => {
    const [N, E] = te(C || ""), k = pe([]);
    be(() => {
      w !== void 0 && E(w);
    }, [w]);
    const Y = w !== void 0, S = Y ? w : N, A = (z) => {
      Y || E(z), y == null || y(z), z.length === m && (b == null || b(z), g || p == null || p(z));
    }, $ = (z) => (q) => {
      k.current[z] = q;
    }, B = (z) => {
      z.target.select();
    }, P = (z, q) => {
      var R;
      const O = z.target.value;
      let V = "";
      if (O.length >= 1)
        V = O.slice(-1);
      else if (O.length === 0) {
        const X = S.split("");
        X[q] = "", A(X.join(""));
        return;
      }
      if (j && !/^\d$/.test(V))
        return;
      const J = S.split("");
      for (; J.length <= q; )
        J.push("");
      J[q] = V;
      const re = J.join("");
      A(re), q < m - 1 && V && ((R = k.current[q + 1]) == null || R.focus());
    }, x = (z, q) => {
      var O, V, J;
      if (z.key === "Backspace") {
        const re = S.split("");
        S[q] ? (z.preventDefault(), re[q] = "", A(re.join(""))) : q > 0 && (z.preventDefault(), re[q - 1] = "", A(re.join("")), (O = k.current[q - 1]) == null || O.focus());
      } else if (z.key === "Delete") {
        if (S[q]) {
          z.preventDefault();
          const re = S.split("");
          re[q] = "", A(re.join(""));
        }
      } else if (z.key === "ArrowLeft" && q > 0)
        z.preventDefault(), (V = k.current[q - 1]) == null || V.focus();
      else if (z.key === "ArrowRight" && q < m - 1)
        z.preventDefault(), (J = k.current[q + 1]) == null || J.focus();
      else if (!z.ctrlKey && !z.altKey && !z.metaKey && z.key.length === 1 && j && !/^\d$/.test(z.key)) {
        z.preventDefault();
        return;
      }
    }, D = (z) => {
      var re;
      z.preventDefault();
      const q = z.clipboardData.getData("text/plain").trim();
      if (j && !/^\d+$/.test(q))
        return;
      const V = q.slice(0, m).padEnd(S.length, "").slice(0, m);
      A(V);
      const J = V.length < m ? V.length : m - 1;
      (re = k.current[J]) == null || re.focus();
    }, _ = () => {
      S.length === m && (p == null || p(S));
    }, oe = S.split("").concat(Array(m - S.length).fill(""));
    return /* @__PURE__ */ e.jsxs("div", { ref: G, className: v("w-full", t), ...Z, children: [
      i && /* @__PURE__ */ e.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        i,
        f && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: m }).map((z, q) => /* @__PURE__ */ e.jsx(
          "input",
          {
            ref: $(q),
            type: j ? "tel" : "text",
            inputMode: j ? "numeric" : "text",
            maxLength: 1,
            value: oe[q] || "",
            onChange: (O) => P(O, q),
            onKeyDown: (O) => x(O, q),
            onPaste: q === 0 ? D : void 0,
            onFocus: B,
            disabled: L,
            autoFocus: I && q === 0,
            className: v(
              Na({
                variant: n ? "error" : r,
                size: s,
                rounded: a
              })
            ),
            "aria-invalid": n
          },
          q
        )) }),
        n && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger self-start", children: l }),
        !n && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral self-start", children: c }),
        d && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-neutral-600", children: d }),
        g && /* @__PURE__ */ e.jsx(
          Re,
          {
            variant: h,
            disabled: S.length !== m || L,
            onClick: _,
            className: "mt-4",
            children: u
          }
        )
      ] })
    ] });
  }
);
Ea.displayName = "InputOTP";
const Xt = {
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
}, Qa = ({
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
  const g = d ? "px-2" : "", u = d ? "min-w-[20px]" : "w-2.5 h-2.5", h = d ? "h-5" : "h-2.5", m = typeof s == "string" && s in Xt ? Xt[s] : s;
  return /* @__PURE__ */ e.jsxs("div", { className: v("relative inline-block", r), children: [
    l || (t ? /* @__PURE__ */ e.jsx(ae, { icon: t, color: m, size: 32, ...c }) : null),
    /* @__PURE__ */ e.jsx(
      "span",
      {
        className: v(
          "absolute flex items-center justify-center rounded-xl bg-[#FF4C4C] text-white text-[10px] font-semibold",
          i,
          g,
          u,
          h,
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
}, Sa = {
  FLIGHT_LIGHT: {
    image: "https://design-system-eaip.onrender.com/img/flight-loader-light.gif",
    message: "Loading, please wait..."
  },
  FLIGHT_DARK: {
    image: "https://design-system-eaip.onrender.com/img/flight-loader-dark.gif",
    message: "Loading, please wait..."
  }
}, Ra = {
  "flight-light": "FLIGHT_LIGHT",
  "flight-dark": "FLIGHT_DARK"
}, en = ({
  variant: t,
  customImage: r,
  customMessage: s,
  width: a = "w-full",
  height: n = "h-full",
  className: l = ""
}) => {
  const c = Ra[t], i = Sa[c];
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${a} ${n} ${l}`, children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: r || i.image,
        alt: "Loading animation",
        className: "max-w-[200px] h-auto"
      }
    ),
    s ? typeof s == "string" ? /* @__PURE__ */ e.jsx(ut, { variant: "body1", className: "m-0", children: s }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: s }) : /* @__PURE__ */ e.jsx(ut, { variant: "body1", className: "m-0", children: i.message })
  ] });
}, Aa = {
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
  }
}, Ma = {
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
  "change-price": "CHANGE_PRICE"
}, tn = ({
  variant: t,
  customMessage: r,
  reload: s,
  reloadText: a = "Try Again",
  customImage: n,
  width: l,
  height: c,
  className: i = ""
}) => {
  const d = Ma[t], f = Aa[d];
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
}, rn = ({
  widgets: t,
  className: r
}) => /* @__PURE__ */ e.jsx("div", { className: v("w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", r), children: t.map((s, a) => /* @__PURE__ */ e.jsx(wa, { ...s }, a)) });
export {
  Ta as Accordion,
  hs as AutoComplete,
  _a as Avatar,
  za as Badge,
  Qa as BadgeNotif,
  ba as Breadcrumbs,
  Re as Button,
  Pt as Card,
  ks as CheckBoxGroup,
  yt as Checkbox,
  Oa as Chip,
  Ps as DatePicker,
  Ds as Dialog,
  zs as DialogActions,
  _s as DialogBody,
  ur as DialogHeader,
  Ts as DialogTitle,
  Os as Divider,
  Xa as ErrorWrapper,
  La as FileUpload,
  ae as Icon,
  lr as Input,
  Ea as InputOTP,
  en as Loader,
  tn as NegativeCase,
  $a as Notification,
  Bs as Pagination,
  At as PhoneInput,
  Ua as PhoneInputDemo,
  Ka as Popover,
  Rt as PrimitiveDatePicker,
  ua as Progress,
  Ys as Radio,
  Hs as RadioGroup,
  mr as Select,
  mt as SelectItem,
  Us as Skeleton,
  Va as Slider,
  Fa as StarRating,
  Ba as StatusIndicator,
  Ya as Stepper,
  Ga as Switch,
  Za as Table,
  Ha as Tabs,
  ut as Text,
  ta as TimePicker,
  br as Toast,
  qa as ToastProvider,
  aa as Toggle,
  Wa as Tooltip,
  wa as WidgetCard,
  rn as WidgetCardGroup,
  ys as buttonVariants,
  ws as cardVariants,
  v as cn,
  Na as inputOTPVariants,
  ra as toggleVariants,
  Ja as useToast
};
