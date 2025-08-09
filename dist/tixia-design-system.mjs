import be, { useState as te, useEffect as he, forwardRef as je, useRef as pe, useCallback as Ge, Children as Vt, isValidElement as bt, cloneElement as Cr, createContext as Pr, useContext as Dr } from "react";
import { createPortal as He } from "react-dom";
import fe from "dayjs";
import { useReactTable as Ir, getPaginationRowModel as Tr, getSortedRowModel as _r, getCoreRowModel as zr, flexRender as Ft } from "@tanstack/react-table";
var er = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function tr(t) {
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
function Or() {
  if (Bt) return lt;
  Bt = 1;
  var t = be, r = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(i, d, f) {
    var g, u = {}, p = null, m = null;
    f !== void 0 && (p = "" + f), d.key !== void 0 && (p = "" + d.key), d.ref !== void 0 && (m = d.ref);
    for (g in d) a.call(d, g) && !l.hasOwnProperty(g) && (u[g] = d[g]);
    if (i && i.defaultProps) for (g in d = i.defaultProps, d) u[g] === void 0 && (u[g] = d[g]);
    return { $$typeof: r, type: i, key: p, ref: m, props: u, _owner: n.current };
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
function Lr() {
  return Yt || (Yt = 1, process.env.NODE_ENV !== "production" && function() {
    var t = be, r = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), i = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), w = Symbol.iterator, x = "@@iterator";
    function y(o) {
      if (o === null || typeof o != "object")
        return null;
      var C = w && o[w] || o[x];
      return typeof C == "function" ? C : null;
    }
    var b = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(o) {
      {
        for (var C = arguments.length, F = new Array(C > 1 ? C - 1 : 0), Q = 1; Q < C; Q++)
          F[Q - 1] = arguments[Q];
        N("error", o, F);
      }
    }
    function N(o, C, F) {
      {
        var Q = b.ReactDebugCurrentFrame, de = Q.getStackAddendum();
        de !== "" && (C += "%s", F = F.concat([de]));
        var me = F.map(function(ie) {
          return String(ie);
        });
        me.unshift("Warning: " + C), Function.prototype.apply.call(console[o], console, me);
      }
    }
    var T = !1, D = !1, Z = !1, G = !1, E = !1, S;
    S = Symbol.for("react.module.reference");
    function k(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === a || o === l || E || o === n || o === f || o === g || G || o === m || T || D || Z || typeof o == "object" && o !== null && (o.$$typeof === p || o.$$typeof === u || o.$$typeof === c || o.$$typeof === i || o.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === S || o.getModuleId !== void 0));
    }
    function Y(o, C, F) {
      var Q = o.displayName;
      if (Q)
        return Q;
      var de = C.displayName || C.name || "";
      return de !== "" ? F + "(" + de + ")" : F;
    }
    function R(o) {
      return o.displayName || "Context";
    }
    function M(o) {
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
        case g:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case i:
            var C = o;
            return R(C) + ".Consumer";
          case c:
            var F = o;
            return R(F._context) + ".Provider";
          case d:
            return Y(o, o.render, "ForwardRef");
          case u:
            var Q = o.displayName || null;
            return Q !== null ? Q : M(o.type) || "Memo";
          case p: {
            var de = o, me = de._payload, ie = de._init;
            try {
              return M(ie(me));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, B = 0, P, h, I, z, oe, O, q;
    function L() {
    }
    L.__reactDisabledLog = !0;
    function V() {
      {
        if (B === 0) {
          P = console.log, h = console.info, I = console.warn, z = console.error, oe = console.group, O = console.groupCollapsed, q = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: L,
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
              value: h
            }),
            warn: $({}, o, {
              value: I
            }),
            error: $({}, o, {
              value: z
            }),
            group: $({}, o, {
              value: oe
            }),
            groupCollapsed: $({}, o, {
              value: O
            }),
            groupEnd: $({}, o, {
              value: q
            })
          });
        }
        B < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = b.ReactCurrentDispatcher, A;
    function X(o, C, F) {
      {
        if (A === void 0)
          try {
            throw Error();
          } catch (de) {
            var Q = de.stack.trim().match(/\n( *(at )?)/);
            A = Q && Q[1] || "";
          }
        return `
` + A + o;
      }
    }
    var xe = !1, we;
    {
      var Te = typeof WeakMap == "function" ? WeakMap : Map;
      we = new Te();
    }
    function Oe(o, C) {
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
        if (C) {
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
    function Ie(o, C, F) {
      return Oe(o, !1);
    }
    function Le(o) {
      var C = o.prototype;
      return !!(C && C.isReactComponent);
    }
    function Ee(o, C, F) {
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
            return Ie(o.render);
          case u:
            return Ee(o.type, C, F);
          case p: {
            var Q = o, de = Q._payload, me = Q._init;
            try {
              return Ee(me(de), C, F);
            } catch {
            }
          }
        }
      return "";
    }
    var _e = Object.prototype.hasOwnProperty, Qe = {}, Pe = b.ReactDebugCurrentFrame;
    function $e(o) {
      if (o) {
        var C = o._owner, F = Ee(o.type, o._source, C ? C.type : null);
        Pe.setExtraStackFrame(F);
      } else
        Pe.setExtraStackFrame(null);
    }
    function et(o, C, F, Q, de) {
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
              le = o[ie](C, ie, Q, F, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ve) {
              le = ve;
            }
            le && !(le instanceof Error) && ($e(de), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Q || "React class", F, ie, typeof le), $e(null)), le instanceof Error && !(le.message in Qe) && (Qe[le.message] = !0, $e(de), j("Failed %s type: %s", F, le.message), $e(null));
          }
      }
    }
    var Ze = Array.isArray;
    function We(o) {
      return Ze(o);
    }
    function tt(o) {
      {
        var C = typeof Symbol == "function" && Symbol.toStringTag, F = C && o[Symbol.toStringTag] || o.constructor.name || "Object";
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
    function _(o) {
      if (U(o))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tt(o)), H(o);
    }
    var K = b.ReactCurrentOwner, W = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ne, ee;
    function ue(o) {
      if (_e.call(o, "ref")) {
        var C = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Se(o) {
      if (_e.call(o, "key")) {
        var C = Object.getOwnPropertyDescriptor(o, "key").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function qe(o, C) {
      typeof o.ref == "string" && K.current;
    }
    function Je(o, C) {
      {
        var F = function() {
          ne || (ne = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        F.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: F,
          configurable: !0
        });
      }
    }
    function Ve(o, C) {
      {
        var F = function() {
          ee || (ee = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        F.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: F,
          configurable: !0
        });
      }
    }
    var rt = function(o, C, F, Q, de, me, ie) {
      var le = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: o,
        key: C,
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
    function gt(o, C, F, Q, de) {
      {
        var me, ie = {}, le = null, Ae = null;
        F !== void 0 && (_(F), le = "" + F), Se(C) && (_(C.key), le = "" + C.key), ue(C) && (Ae = C.ref, qe(C, de));
        for (me in C)
          _e.call(C, me) && !W.hasOwnProperty(me) && (ie[me] = C[me]);
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
    var Fe = b.ReactCurrentOwner, It = b.ReactDebugCurrentFrame;
    function st(o) {
      if (o) {
        var C = o._owner, F = Ee(o.type, o._source, C ? C.type : null);
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
          var o = M(Fe.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function yr(o) {
      return "";
    }
    var _t = {};
    function wr(o) {
      {
        var C = Tt();
        if (!C) {
          var F = typeof o == "string" ? o : o.displayName || o.name;
          F && (C = `

Check the top-level render call using <` + F + ">.");
        }
        return C;
      }
    }
    function zt(o, C) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var F = wr(C);
        if (_t[F])
          return;
        _t[F] = !0;
        var Q = "";
        o && o._owner && o._owner !== Fe.current && (Q = " It was passed a child from " + M(o._owner.type) + "."), st(o), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', F, Q), st(null);
      }
    }
    function Ot(o, C) {
      {
        if (typeof o != "object")
          return;
        if (We(o))
          for (var F = 0; F < o.length; F++) {
            var Q = o[F];
            xt(Q) && zt(Q, C);
          }
        else if (xt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var de = y(o);
          if (typeof de == "function" && de !== o.entries)
            for (var me = de.call(o), ie; !(ie = me.next()).done; )
              xt(ie.value) && zt(ie.value, C);
        }
      }
    }
    function kr(o) {
      {
        var C = o.type;
        if (C == null || typeof C == "string")
          return;
        var F;
        if (typeof C == "function")
          F = C.propTypes;
        else if (typeof C == "object" && (C.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        C.$$typeof === u))
          F = C.propTypes;
        else
          return;
        if (F) {
          var Q = M(C);
          et(F, o.props, "prop", Q, o);
        } else if (C.PropTypes !== void 0 && !pt) {
          pt = !0;
          var de = M(C);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", de || "Unknown");
        }
        typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jr(o) {
      {
        for (var C = Object.keys(o.props), F = 0; F < C.length; F++) {
          var Q = C[F];
          if (Q !== "children" && Q !== "key") {
            st(o), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Q), st(null);
            break;
          }
        }
        o.ref !== null && (st(o), j("Invalid attribute `ref` supplied to `React.Fragment`."), st(null));
      }
    }
    var Lt = {};
    function $t(o, C, F, Q, de, me) {
      {
        var ie = k(o);
        if (!ie) {
          var le = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ae = yr();
          Ae ? le += Ae : le += Tt();
          var ve;
          o === null ? ve = "null" : We(o) ? ve = "array" : o !== void 0 && o.$$typeof === r ? (ve = "<" + (M(o.type) || "Unknown") + " />", le = " Did you accidentally export a JSX literal instead of a component?") : ve = typeof o, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ve, le);
        }
        var ye = gt(o, C, F, de, me);
        if (ye == null)
          return ye;
        if (ie) {
          var De = C.children;
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
        if (_e.call(C, "key")) {
          var Xe = M(o), Ce = Object.keys(C).filter(function(Mr) {
            return Mr !== "key";
          }), ht = Ce.length > 0 ? "{key: someKey, " + Ce.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Lt[Xe + ht]) {
            var Ar = Ce.length > 0 ? "{" + Ce.join(": ..., ") + ": ...}" : "{}";
            j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ht, Xe, Ar, Xe), Lt[Xe + ht] = !0;
          }
        }
        return o === a ? jr(ye) : kr(ye), ye;
      }
    }
    function Nr(o, C, F) {
      return $t(o, C, F, !0);
    }
    function Er(o, C, F) {
      return $t(o, C, F, !1);
    }
    var Sr = Er, Rr = Nr;
    it.Fragment = a, it.jsx = Sr, it.jsxs = Rr;
  }()), it;
}
process.env.NODE_ENV === "production" ? St.exports = Or() : St.exports = Lr();
var e = St.exports;
function rr(t) {
  var r, s, a = "";
  if (typeof t == "string" || typeof t == "number") a += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var n = t.length;
    for (r = 0; r < n; r++) t[r] && (s = rr(t[r])) && (a && (a += " "), a += s);
  } else for (s in t) t[s] && (a && (a += " "), a += s);
  return a;
}
function ce() {
  for (var t, r, s = 0, a = "", n = arguments.length; s < n; s++) (t = arguments[s]) && (r = rr(t)) && (a && (a += " "), a += r);
  return a;
}
const Pt = "-", $r = (t) => {
  const r = Fr(t), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: a
  } = t;
  return {
    getClassGroupId: (c) => {
      const i = c.split(Pt);
      return i[0] === "" && i.length !== 1 && i.shift(), sr(i, r) || Vr(c);
    },
    getConflictingClassGroupIds: (c, i) => {
      const d = s[c] || [];
      return i && a[c] ? [...d, ...a[c]] : d;
    }
  };
}, sr = (t, r) => {
  var c;
  if (t.length === 0)
    return r.classGroupId;
  const s = t[0], a = r.nextPart.get(s), n = a ? sr(t.slice(1), a) : void 0;
  if (n)
    return n;
  if (r.validators.length === 0)
    return;
  const l = t.join(Pt);
  return (c = r.validators.find(({
    validator: i
  }) => i(l))) == null ? void 0 : c.classGroupId;
}, Gt = /^\[(.+)\]$/, Vr = (t) => {
  if (Gt.test(t)) {
    const r = Gt.exec(t)[1], s = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (s)
      return "arbitrary.." + s;
  }
}, Fr = (t) => {
  const {
    theme: r,
    prefix: s
  } = t, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Yr(Object.entries(t.classGroups), s).forEach(([l, c]) => {
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
      if (Br(n)) {
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
}, Br = (t) => t.isThemeGetter, Yr = (t, r) => r ? t.map(([s, a]) => {
  const n = a.map((l) => typeof l == "string" ? r + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([c, i]) => [r + c, i])) : l);
  return [s, n];
}) : t, Gr = (t) => {
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
}, ar = "!", Hr = (t) => {
  const {
    separator: r,
    experimentalParseClassName: s
  } = t, a = r.length === 1, n = r[0], l = r.length, c = (i) => {
    const d = [];
    let f = 0, g = 0, u;
    for (let y = 0; y < i.length; y++) {
      let b = i[y];
      if (f === 0) {
        if (b === n && (a || i.slice(y, y + l) === r)) {
          d.push(i.slice(g, y)), g = y + l;
          continue;
        }
        if (b === "/") {
          u = y;
          continue;
        }
      }
      b === "[" ? f++ : b === "]" && f--;
    }
    const p = d.length === 0 ? i : i.substring(g), m = p.startsWith(ar), w = m ? p.substring(1) : p, x = u && u > g ? u - g : void 0;
    return {
      modifiers: d,
      hasImportantModifier: m,
      baseClassName: w,
      maybePostfixModifierPosition: x
    };
  };
  return s ? (i) => s({
    className: i,
    parseClassName: c
  }) : c;
}, Wr = (t) => {
  if (t.length <= 1)
    return t;
  const r = [];
  let s = [];
  return t.forEach((a) => {
    a[0] === "[" ? (r.push(...s.sort(), a), s = []) : s.push(a);
  }), r.push(...s.sort()), r;
}, Ur = (t) => ({
  cache: Gr(t.cacheSize),
  parseClassName: Hr(t),
  ...$r(t)
}), Kr = /\s+/, Zr = (t, r) => {
  const {
    parseClassName: s,
    getClassGroupId: a,
    getConflictingClassGroupIds: n
  } = r, l = [], c = t.trim().split(Kr);
  let i = "";
  for (let d = c.length - 1; d >= 0; d -= 1) {
    const f = c[d], {
      modifiers: g,
      hasImportantModifier: u,
      baseClassName: p,
      maybePostfixModifierPosition: m
    } = s(f);
    let w = !!m, x = a(w ? p.substring(0, m) : p);
    if (!x) {
      if (!w) {
        i = f + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (x = a(p), !x) {
        i = f + (i.length > 0 ? " " + i : i);
        continue;
      }
      w = !1;
    }
    const y = Wr(g).join(":"), b = u ? y + ar : y, j = b + x;
    if (l.includes(j))
      continue;
    l.push(j);
    const N = n(x, w);
    for (let T = 0; T < N.length; ++T) {
      const D = N[T];
      l.push(b + D);
    }
    i = f + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function qr() {
  let t = 0, r, s, a = "";
  for (; t < arguments.length; )
    (r = arguments[t++]) && (s = nr(r)) && (a && (a += " "), a += s);
  return a;
}
const nr = (t) => {
  if (typeof t == "string")
    return t;
  let r, s = "";
  for (let a = 0; a < t.length; a++)
    t[a] && (r = nr(t[a])) && (s && (s += " "), s += r);
  return s;
};
function Jr(t, ...r) {
  let s, a, n, l = c;
  function c(d) {
    const f = r.reduce((g, u) => u(g), t());
    return s = Ur(f), a = s.cache.get, n = s.cache.set, l = i, i(d);
  }
  function i(d) {
    const f = a(d);
    if (f)
      return f;
    const g = Zr(d, s);
    return n(d, g), g;
  }
  return function() {
    return l(qr.apply(null, arguments));
  };
}
const ge = (t) => {
  const r = (s) => s[t] || [];
  return r.isThemeGetter = !0, r;
}, or = /^\[(?:([a-z-]+):)?(.+)\]$/i, Xr = /^\d+\/\d+$/, Qr = /* @__PURE__ */ new Set(["px", "full", "screen"]), es = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ts = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, rs = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ss = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, as = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Be = (t) => nt(t) || Qr.has(t) || Xr.test(t), Ue = (t) => ot(t, "length", ms), nt = (t) => !!t && !Number.isNaN(Number(t)), vt = (t) => ot(t, "number", nt), ct = (t) => !!t && Number.isInteger(Number(t)), ns = (t) => t.endsWith("%") && nt(t.slice(0, -1)), se = (t) => or.test(t), Ke = (t) => es.test(t), os = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ls = (t) => ot(t, os, lr), is = (t) => ot(t, "position", lr), cs = /* @__PURE__ */ new Set(["image", "url"]), ds = (t) => ot(t, cs, gs), us = (t) => ot(t, "", fs), dt = () => !0, ot = (t, r, s) => {
  const a = or.exec(t);
  return a ? a[1] ? typeof r == "string" ? a[1] === r : r.has(a[1]) : s(a[2]) : !1;
}, ms = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ts.test(t) && !rs.test(t)
), lr = () => !1, fs = (t) => ss.test(t), gs = (t) => as.test(t), ps = () => {
  const t = ge("colors"), r = ge("spacing"), s = ge("blur"), a = ge("brightness"), n = ge("borderColor"), l = ge("borderRadius"), c = ge("borderSpacing"), i = ge("borderWidth"), d = ge("contrast"), f = ge("grayscale"), g = ge("hueRotate"), u = ge("invert"), p = ge("gap"), m = ge("gradientColorStops"), w = ge("gradientColorStopPositions"), x = ge("inset"), y = ge("margin"), b = ge("opacity"), j = ge("padding"), N = ge("saturate"), T = ge("scale"), D = ge("sepia"), Z = ge("skew"), G = ge("space"), E = ge("translate"), S = () => ["auto", "contain", "none"], k = () => ["auto", "hidden", "clip", "visible", "scroll"], Y = () => ["auto", se, r], R = () => [se, r], M = () => ["", Be, Ue], $ = () => ["auto", nt, se], B = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], P = () => ["solid", "dashed", "dotted", "double", "none"], h = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], I = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], z = () => ["", "0", se], oe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], O = () => [nt, se];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [dt],
      spacing: [Be, Ue],
      blur: ["none", "", Ke, se],
      brightness: O(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Ke, se],
      borderSpacing: R(),
      borderWidth: M(),
      contrast: O(),
      grayscale: z(),
      hueRotate: O(),
      invert: z(),
      gap: R(),
      gradientColorStops: [t],
      gradientColorStopPositions: [ns, Ue],
      inset: Y(),
      margin: Y(),
      opacity: O(),
      padding: R(),
      saturate: O(),
      scale: O(),
      sepia: z(),
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
        inset: [x]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [x]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [x]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [x]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [x]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [x]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [x]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [x]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [x]
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
        grow: z()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: z()
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
        "placeholder-opacity": [b]
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
        "text-opacity": [b]
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
        "bg-opacity": [b]
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
        bg: [...B(), is]
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
        bg: ["auto", "cover", "contain", ls]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ds]
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
        "border-opacity": [b]
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
        "divide-opacity": [b]
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
        ring: M()
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
        "ring-opacity": [b]
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
        shadow: ["", "inner", "none", Ke, us]
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
        opacity: [b]
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
        saturate: [N]
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
        "backdrop-opacity": [b]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [N]
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
        duration: O()
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
        delay: O()
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
        rotate: [ct, se]
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
}, ze = /* @__PURE__ */ Jr(ps);
function v(...t) {
  return ze(ce(t));
}
const Wt = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, Ut = ce, Ne = (t, r) => (s) => {
  var a;
  if ((r == null ? void 0 : r.variants) == null) return Ut(t, s == null ? void 0 : s.class, s == null ? void 0 : s.className);
  const { variants: n, defaultVariants: l } = r, c = Object.keys(n).map((f) => {
    const g = s == null ? void 0 : s[f], u = l == null ? void 0 : l[f];
    if (g === null) return null;
    const p = Wt(g) || Wt(u);
    return n[f][p];
  }), i = s && Object.entries(s).reduce((f, g) => {
    let [u, p] = g;
    return p === void 0 || (f[u] = p), f;
  }, {}), d = r == null || (a = r.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((f, g) => {
    let { class: u, className: p, ...m } = g;
    return Object.entries(m).every((w) => {
      let [x, y] = w;
      return Array.isArray(y) ? y.includes({
        ...l,
        ...i
      }[x]) : {
        ...l,
        ...i
      }[x] === y;
    }) ? [
      ...f,
      u,
      p
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
  const [g, u] = te(null), [p, m] = te(!0), [w, x] = te(null);
  return he(() => {
    let y = !0;
    return (async () => {
      try {
        const { Icon: j } = await import("./iconify-Dqt3MVen.mjs");
        y && (u(() => j), m(!1));
      } catch (j) {
        console.error("Failed to load icon:", j), y && (x(j), m(!1));
      }
    })(), () => {
      y = !1;
    };
  }, []), p ? /* @__PURE__ */ e.jsx("span", { style: { width: s, height: s } }) : w || !g ? null : /* @__PURE__ */ e.jsx(
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
}, xs = Ne(
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
), ir = je(
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
    fullWidth: g = !1,
    leftIcon: u,
    rightIcon: p,
    onRightIconClick: m,
    id: w,
    ...x
  }, y) => {
    const b = w || be.useId(), j = `${b}-helper`, N = `${b}-error`, T = /* @__PURE__ */ e.jsxs("div", { className: v("relative", !g && "inline-block"), children: [
      u && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ e.jsx(ae, { icon: u, className: "w-4 h-4" }) }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          id: b,
          type: "text",
          ref: y,
          className: v(
            xs({ variant: n ? "error" : r, size: s, rounded: a, fullWidth: g }),
            u && "pl-10",
            p && "pr-10",
            t
          ),
          "aria-describedby": n ? N : c ? j : void 0,
          "aria-invalid": n,
          "aria-required": d,
          ...x
        }
      ),
      p && /* @__PURE__ */ e.jsx(
        "div",
        {
          className: v(
            "absolute right-3 top-1/2 -translate-y-1/2 text-neutral",
            m && "cursor-pointer hover:text-primary-600"
          ),
          onClick: m,
          role: m ? "button" : void 0,
          tabIndex: m ? 0 : void 0,
          children: /* @__PURE__ */ e.jsx(ae, { icon: p, className: "w-4 h-4" })
        }
      )
    ] }), D = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      n && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: N, children: l }),
      !n && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: j, children: c })
    ] });
    return f === "left" ? /* @__PURE__ */ e.jsx("div", { className: v(g ? "w-full" : "inline-block", t), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
      i && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: b,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            i,
            d && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: v("flex-1", !g && "inline-block"), children: [
        T,
        D
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: v(g ? "w-full" : "inline-block", t), children: [
      i && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: b,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            i,
            d && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      T,
      D
    ] });
  }
);
ir.displayName = "Input";
const ft = be.forwardRef(
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
const cr = typeof window < "u", Me = () => cr ? window : {
  innerHeight: 0,
  innerWidth: 0,
  addEventListener: () => {
  },
  removeEventListener: () => {
  }
}, ke = () => cr ? document : {
  addEventListener: () => {
  },
  removeEventListener: () => {
  },
  dispatchEvent: () => {
  }
}, yt = "autocomplete-dropdown-opened", hs = je(
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
    rightIcon: g,
    error: u = !1,
    errorText: p,
    helperText: m,
    label: w,
    required: x = !1,
    labelPlacement: y = "top",
    fullWidth: b = !1,
    value: j,
    onChange: N,
    onFocus: T,
    onBlur: D,
    showClear: Z = !1,
    onClear: G,
    searchType: E = "include",
    initialItemsToShow: S,
    itemsToLoad: k = 10,
    maxDropdownHeight: Y = 300,
    noOptionsMessage: R = "No options found",
    scrollMoreMessage: M = "",
    allOptionsShownMessage: $ = "",
    ...B
  }, P) => {
    const [h, I] = te(!1), [z, oe] = te(j || ""), [O, q] = te(S || 0), L = pe(null), V = pe(null), J = pe(null), re = pe(null), A = a !== void 0, xe = `autocomplete-${be.useId().replace(/:/g, "")}`, we = () => {
      if (!h || !V.current || !J.current) return;
      const { bottom: H, top: _, left: K, width: W } = V.current.getBoundingClientRect(), ne = J.current, ee = Me(), ue = ee.innerHeight - H, Se = _, qe = Math.min(Y, 300), Je = ue < qe, Ve = Se > ue, rt = Je && Ve;
      Object.assign(ne.style, {
        position: "fixed",
        left: `${K}px`,
        width: `${W}px`
      }), rt ? Object.assign(ne.style, {
        bottom: `${ee.innerHeight - _ + 4}px`,
        top: "auto",
        maxHeight: `${Se - 8}px`
      }) : Object.assign(ne.style, {
        top: `${H + 4}px`,
        bottom: "auto",
        maxHeight: `${ue - 8}px`
      });
    };
    he(() => {
      const H = Me(), _ = ke(), K = () => {
        h && we();
      }, W = () => {
        h && we();
      }, ne = (ue) => {
        ue.detail.id !== xe && I(!1);
      }, ee = (ue) => {
        const Se = ue.target;
        L.current && !L.current.contains(Se) && J.current && !J.current.contains(Se) && I(!1);
      };
      return h && (we(), H.addEventListener("scroll", K, !0), H.addEventListener("resize", W)), _.addEventListener(yt, ne), _.addEventListener("click", ee), () => {
        H.removeEventListener("scroll", K, !0), H.removeEventListener("resize", W), _.removeEventListener(yt, ne), _.removeEventListener("click", ee);
      };
    }, [h, xe]), he(() => {
      oe(j || "");
    }, [j]);
    const Te = (H) => {
      const { value: _ } = H.target;
      if (oe(_), !_.trim()) {
        I(!1);
        return;
      }
      const K = r.some(({ label: W }) => {
        const ne = _.toLowerCase().trim(), ee = W.toLowerCase();
        return E === "startsWith" ? ee.startsWith(ne) : ee.includes(ne);
      });
      I(K), N == null || N(H);
    }, Oe = (H) => {
      H.stopPropagation(), oe(""), G == null || G();
      const _ = new Event("change");
      _.target = { value: "" }, N == null || N(_);
    }, Ie = (H) => {
      var ne;
      if (!H) return;
      const { value: _, label: K } = H;
      oe(K), I(!1), s == null || s(_);
      const W = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: H }
      });
      (ne = V.current) == null || ne.dispatchEvent(W);
    }, Le = (H) => {
      D == null || D(H);
    }, Ee = r.filter(({ label: H }) => {
      const _ = z.toLowerCase().trim(), K = H.toLowerCase();
      return E === "startsWith" ? K.startsWith(_) : K.includes(_);
    }), _e = (H) => {
      A || (ke().dispatchEvent(
        new CustomEvent(yt, {
          detail: { id: xe }
        })
      ), Ee.length > 0 && I(!0)), T == null || T(H);
    }, Qe = () => {
      if (!re.current || S === void 0 || S <= 0) return;
      const { scrollTop: H, scrollHeight: _, clientHeight: K } = re.current;
      H + K >= _ - 10 && q((ne) => Math.min(ne + k, Ee.length));
    };
    he(() => {
      S !== void 0 && S > 0 && q(S);
    }, [z, S]);
    const Pe = S !== void 0 && S > 0 ? Ee.slice(0, O) : Ee, $e = (H, _) => H ? H.replace(/\{(\w+)\}/g, (K, W) => {
      var ne;
      return ((ne = _[W]) == null ? void 0 : ne.toString()) || K;
    }) : "", et = A ? a : h, Ze = Z && z && !B.disabled && !B.readOnly, We = Ze ? "mdi:close" : g, tt = (H) => {
      if (!(!et || Pe.length === 0))
        switch (H.key) {
          case "Enter":
            H.preventDefault(), Pe.length === 1 && Ie(Pe[0]);
            break;
          case "Tab":
            Pe.length === 1 && (H.preventDefault(), Ie(Pe[0]));
            break;
          case "Escape":
            H.preventDefault(), I(!1);
            break;
        }
    }, U = () => {
      if (!et) return null;
      const H = ke();
      if (!("body" in H)) return null;
      const _ = /* @__PURE__ */ e.jsx(
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
                  ft,
                  {
                    value: K.value,
                    selected: K.label === z,
                    onClick: () => Ie(K),
                    children: l ? l(K) : K.label
                  },
                  K.value
                )),
                S !== void 0 && S > 0 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  O < Ee.length && M && /* @__PURE__ */ e.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: $e(M, {
                    current: O,
                    total: Ee.length
                  }) }),
                  O >= Ee.length && Ee.length > 0 && $ && /* @__PURE__ */ e.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: $e($, {
                    total: Ee.length
                  }) })
                ] })
              ] }) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-2 text-sm text-neutral", children: R })
            }
          )
        }
      );
      return He(_, H.body);
    };
    return /* @__PURE__ */ e.jsxs("div", { ref: L, className: v("relative", b ? "w-full" : "inline-block"), children: [
      /* @__PURE__ */ e.jsx("div", { ref: V, className: v(!b && "inline-block"), children: /* @__PURE__ */ e.jsx(
        ir,
        {
          ref: P,
          value: z,
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
          errorText: p,
          helperText: m,
          label: w,
          required: x,
          labelPlacement: y,
          fullWidth: b,
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
}, vs = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, ys = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full"
}, _a = ({
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
  const [g, u] = te(s), p = (w) => {
    u(
      r ? (x) => x.includes(w) ? x.filter((y) => y !== w) : [...x, w] : (x) => x.includes(w) ? [] : [w]
    );
  }, m = bs[i];
  return /* @__PURE__ */ e.jsx("div", { className: ce("w-full space-y-2", l), children: t.map((w) => {
    const x = g.includes(w.id), y = !!w.disabled;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: ce(
          "border overflow-hidden",
          "bg-white",
          "border-gray-200",
          vs[d],
          ys[f],
          "transition-shadow duration-200"
        ),
        children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => !y && p(w.id),
              disabled: y,
              className: ce(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                m.hover,
                x && m.active,
                m.text,
                y && "opacity-50 cursor-not-allowed"
              ),
              children: [
                n === "left" && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: ce(
                      "mr-3 transition-transform duration-200",
                      x && "rotate-180"
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
                      x && "rotate-180"
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
                x ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
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
}, za = ({
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
}, Oa = ({
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
}, ws = Ne(
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
    ...g
  }, u) => {
    const m = d || !!(c || i) && !f;
    return /* @__PURE__ */ e.jsxs(
      "button",
      {
        className: v(
          ws({
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
const ks = Ne(
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
      className: v(ks({ variant: r, padding: s, shadow: a, rounded: n, className: t })),
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
          className: m,
          disabled: s,
          ref: (x) => {
            x && (x.indeterminate = a);
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
), js = je(
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
    labelPlacement: p = "top",
    fullWidth: m = !1,
    disabled: w = !1,
    variant: x = "square",
    color: y = "primary",
    checkboxSize: b = "sm",
    showSelectAll: j = !1,
    selectAllText: N = "Select All",
    indeterminateSelectAll: T = !0,
    gap: D,
    selectAllGap: Z,
    id: G,
    ...E
  }, S) => {
    const k = G || be.useId(), Y = `${k}-helper`, R = `${k}-error`, M = `${k}-group`, [$, B] = be.useState(a), P = s !== void 0 ? s : $, h = (A, X) => {
      const xe = X ? [...P, A] : P.filter((we) => we !== A);
      s === void 0 && B(xe), n == null || n(xe);
    }, I = (A) => {
      const X = A ? r.map((xe) => xe.value) : [];
      s === void 0 && B(X), n == null || n(X);
    }, z = r.length > 0 && P.length === r.length, oe = P.length > 0 && P.length < r.length, O = T && oe, q = (A) => A === "none" ? "gap-0" : A === "xs" ? "gap-1" : A === "sm" ? "gap-2" : A === "md" ? "gap-3" : A === "lg" ? "gap-4" : A === "xl" ? "gap-6" : null, L = q(D), V = q(Z), J = /* @__PURE__ */ e.jsx("div", { className: v("relative", !m && "inline-block"), children: /* @__PURE__ */ e.jsxs(
      "fieldset",
      {
        ref: S,
        id: M,
        className: v(
          kt({ layout: l, size: c }),
          L,
          t
        ),
        "aria-describedby": i ? R : f ? Y : void 0,
        "aria-invalid": i,
        "aria-required": u,
        ...E,
        children: [
          j && r.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: v(
            "flex flex-col",
            V || L || kt({ layout: "vertical", size: c })
          ), children: [
            /* @__PURE__ */ e.jsx(
              wt,
              {
                label: N,
                checked: z,
                indeterminate: O,
                onChange: (A) => I(A.target.checked),
                disabled: w,
                variant: x,
                color: i ? "error" : y,
                variantSize: b,
                error: i ? " " : void 0
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: v(
              "flex",
              l === "vertical" && "flex-col",
              l === "horizontal" && "flex-row flex-wrap",
              l === "grid" && "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
              L || kt({ layout: l, size: c })
            ), children: r.map((A) => /* @__PURE__ */ e.jsx(
              wt,
              {
                label: A.label,
                checked: P.includes(A.value),
                onChange: (X) => h(A.value, X.target.checked),
                disabled: w || A.disabled,
                indeterminate: A.indeterminate,
                variant: x,
                color: i ? "error" : y,
                variantSize: b,
                error: i ? " " : void 0
              },
              A.value
            )) })
          ] }),
          !j && /* @__PURE__ */ e.jsx(e.Fragment, { children: r.map((A) => /* @__PURE__ */ e.jsx(
            wt,
            {
              label: A.label,
              checked: P.includes(A.value),
              onChange: (X) => h(A.value, X.target.checked),
              disabled: w || A.disabled,
              indeterminate: A.indeterminate,
              variant: x,
              color: i ? "error" : y,
              variantSize: b,
              error: i ? " " : void 0
            },
            A.value
          )) })
        ]
      }
    ) }), re = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      i && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: R, children: d }),
      !i && f && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: Y, children: f })
    ] });
    return p === "left" ? /* @__PURE__ */ e.jsx("div", { className: v(m ? "w-full" : "inline-block", t), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
      g && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: M,
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
          htmlFor: M,
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
js.displayName = "CheckBoxGroup";
const Ns = {
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
}, Es = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5"
}, Ss = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full"
}, La = ({
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
      Ns[r][s],
      Es[a],
      Ss[n],
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
var dr = { exports: {} };
(function(t, r) {
  (function(s, a) {
    t.exports = a();
  })(er, function() {
    return function(s, a) {
      a.prototype.isSameOrAfter = function(n, l) {
        return this.isSame(n, l) || this.isAfter(n, l);
      };
    };
  });
})(dr);
var Rs = dr.exports;
const As = /* @__PURE__ */ tr(Rs);
var ur = { exports: {} };
(function(t, r) {
  (function(s, a) {
    t.exports = a();
  })(er, function() {
    return function(s, a) {
      a.prototype.isSameOrBefore = function(n, l) {
        return this.isSame(n, l) || this.isBefore(n, l);
      };
    };
  });
})(ur);
var Ms = ur.exports;
const Cs = /* @__PURE__ */ tr(Ms);
fe.extend(As);
fe.extend(Cs);
const Ps = Ne(
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
    helperText: g,
    label: u,
    required: p = !1,
    labelPlacement: m = "top",
    fullWidth: w = !1,
    className: x,
    placeholder: y = "Select date",
    leftIcon: b,
    rightIcon: j,
    monthsToShow: N = 1,
    valueFormatter: T,
    rangeStart: D,
    rangeEnd: Z,
    closeOnSelect: G = !0,
    calendarFooter: E,
    format: S = "DD-MM-YYYY",
    allowInput: k = !1,
    ...Y
  }) => {
    const [R, M] = te(!1), [$, B] = te(t), [P, h] = te(t || /* @__PURE__ */ new Date()), [I, z] = te(!1), [oe, O] = te(""), q = pe(null), L = pe(null), V = pe(null), J = pe(null), re = pe(null);
    he(() => {
      B(t || void 0), O(t ? A(t, S) : "");
    }, [t, S]), he(() => {
      O($ ? A($, S) : "");
    }, [$, S]);
    const A = (U, H) => {
      const _ = U.getDate().toString().padStart(2, "0"), K = (U.getMonth() + 1).toString().padStart(2, "0"), W = U.getFullYear().toString();
      switch (H) {
        case "DD-MM-YYYY":
          return `${_}-${K}-${W}`;
        case "YYYY-MM-DD":
          return `${W}-${K}-${_}`;
        case "MM-DD-YYYY":
          return `${K}-${_}-${W}`;
        default:
          return `${_}-${K}-${W}`;
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
    he(() => {
      if (I && J.current) {
        const U = fe(P).year(), H = J.current.querySelectorAll("[data-year]"), _ = Array.from(H).find(
          (K) => parseInt(K.getAttribute("data-year") || "0") === U
        );
        _ && _.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center"
        });
      }
    }, [I, P]);
    const xe = () => {
      if (!R || !L.current || !V.current) return;
      const { bottom: U, left: H, width: _, top: K } = L.current.getBoundingClientRect(), W = V.current, ne = Me(), ee = ne.innerHeight - U, ue = K, qe = ee < (N === 2 ? 400 : 350), Je = ue > ee, Ve = qe && Je;
      N === 2 ? (Object.assign(W.style, {
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
        left: `${H + _ / 2}px`,
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
    he(() => {
      const U = Me(), H = ke(), _ = () => {
        R && xe();
      }, K = () => {
        R && xe();
      }, W = (ne) => {
        ne.key === "Escape" && R && (M(!1), z(!1));
      };
      return R && (xe(), U.addEventListener("scroll", _, !0), U.addEventListener("resize", K), H.addEventListener("keydown", W)), () => {
        U.removeEventListener("scroll", _, !0), U.removeEventListener("resize", K), H.removeEventListener("keydown", W);
      };
    }, [R]);
    const we = (U) => {
      if (D !== void 0 && Z !== void 0)
        if (D && Z)
          B(U), O(A(U, S)), r == null || r(U);
        else if (D) {
          const _ = U;
          fe(_).isBefore(D), B(_), O(A(_, S)), r == null || r(_), M(!1), z(!1);
        } else
          B(U), O(A(U, S)), r == null || r(U);
      else
        B(U), O(A(U, S)), r == null || r(U), M(!1), z(!1);
    }, Te = () => {
      h(fe(P).subtract(1, "month").toDate());
    }, Oe = () => {
      h(fe(P).add(1, "month").toDate());
    }, Ie = (U) => {
      const H = fe(U).startOf("month"), _ = fe(U).endOf("month"), K = [];
      let W = H;
      for (; W.isBefore(_) || W.isSame(_, "day"); )
        K.push(W.toDate()), W = W.add(1, "day");
      return K;
    }, Le = (U) => !!(s && fe(U).isBefore(s, "day") || a && fe(U).isAfter(a, "day")), Ee = (U) => {
      if (!k) return;
      const _ = U.target.value.replace(/[^\d-]/g, "");
      if (_.length < oe.length) {
        O(_);
        return;
      }
      if (_.replace(/-/g, "").length > 8)
        return;
      let W = _;
      S === "DD-MM-YYYY" ? (_.length === 2 && !_.includes("-") || _.length === 5 && _.split("-").length === 2) && (W = _ + "-") : S === "YYYY-MM-DD" ? (_.length === 4 && !_.includes("-") || _.length === 7 && _.split("-").length === 2) && (W = _ + "-") : S === "MM-DD-YYYY" && (_.length === 2 && !_.includes("-") || _.length === 5 && _.split("-").length === 2) && (W = _ + "-"), O(W);
    }, _e = () => {
      if (!k) return;
      const U = X(oe, S);
      if (U) {
        if (s && U < s) {
          O(A(s, S)), B(s), r == null || r(s);
          return;
        }
        if (a && U > a) {
          O(A(a, S)), B(a), r == null || r(a);
          return;
        }
        B(U), r == null || r(U), O(A(U, S));
      } else
        O($ ? A($, S) : "");
    }, Qe = () => {
      k && M(!1);
    }, Pe = (U) => {
      k && U.key === "Enter" && (U.preventDefault(), _e());
    }, $e = (U) => {
      const H = fe(P).year(U).toDate();
      h(H), z(!1);
    }, et = () => {
      if (!I) return null;
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
      if (!R) return null;
      const U = ke();
      if (!("body" in U)) return null;
      const H = Array.from({ length: N }).map(
        (_, K) => fe(P).add(K, "month").toDate()
      );
      return He(
        /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "fixed inset-0 z-[9998]",
              onClick: () => {
                I || M(!1);
              }
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: V,
              className: "fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-lg",
              onClick: (_) => _.stopPropagation(),
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
                  /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-900", children: N === 1 ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e.jsx("span", { children: fe(P).format("MMMM") }),
                    /* @__PURE__ */ e.jsxs(
                      "div",
                      {
                        className: "cursor-pointer flex items-center gap-1",
                        onClick: () => z(!I),
                        children: [
                          /* @__PURE__ */ e.jsx("span", { children: fe(P).format("YYYY") }),
                          /* @__PURE__ */ e.jsx(Re, { variant: "ghost", size: "sm", leftIcon: I ? "mdi:chevron-up" : "mdi:chevron-down" })
                        ]
                      }
                    )
                  ] }) : `${fe(P).format("MMMM YYYY")} - ${fe(
                    P
                  ).add(N - 1, "month").format("MMMM YYYY")}` }) }),
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
                      N === 2 ? "flex gap-5 p-2 mx-auto w-fit" : "justify-between p-2 mx-auto w-fit"
                    ),
                    children: H.map((_, K) => {
                      const W = Ie(_), ne = fe(_).startOf("month").day();
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
                              _,
                              "month"
                            ), Je = D && Z && fe(ee).isSameOrAfter(D, "day") && fe(ee).isSameOrBefore(Z, "day"), Ve = D && fe(ee).isSame(D, "day"), rt = Z && fe(ee).isSame(Z, "day"), gt = fe(ee).day() === 0 || fe(ee).day() === 6, Fe = D && Z;
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
                        E
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
        className: v("relative", !w && "inline-block"),
        ref: L,
        onClick: () => !i && !k && M(!R),
        children: [
          b && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (U) => {
                U.stopPropagation(), i || M(!R);
              },
              children: /* @__PURE__ */ e.jsx(ae, { icon: b, className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: re,
              type: "text",
              value: k ? oe : T ? T() : $ ? A($, S) : "",
              placeholder: k ? S : y,
              readOnly: !k,
              maxLength: k ? 10 : void 0,
              onChange: Ee,
              onBlur: _e,
              onFocus: Qe,
              onKeyDown: Pe,
              className: v(
                Ps({ variant: d ? "error" : n, size: l, rounded: c, fullWidth: w }),
                b && "pl-10",
                j && "pr-10",
                x
              ),
              disabled: i,
              ...Y
            }
          ),
          j && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (U) => {
                U.stopPropagation(), i || M(!R);
              },
              children: /* @__PURE__ */ e.jsx(ae, { icon: j, className: "w-4 h-4" })
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
        className: v(w ? "w-full" : "inline-block", x),
        ref: q,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
            u && /* @__PURE__ */ e.jsxs("label", { className: "block text-sm text-neutral-900 pt-2", children: [
              u,
              p && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: v("flex-1", !w && "inline-block"), children: [
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
        className: v(w ? "w-full" : "inline-block", x),
        ref: q,
        children: [
          u && /* @__PURE__ */ e.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
            u,
            p && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          We,
          tt,
          Ze()
        ]
      }
    );
  }
);
At.displayName = "PrimitiveDatePicker";
const Ds = ({
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
    const p = Array.isArray(r) ? r[0] : r;
    return /* @__PURE__ */ e.jsx(
      At,
      {
        value: p === null ? void 0 : p,
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
    let [p, m] = Array.isArray(r) ? r : g;
    const w = (y) => {
      !p || p && m ? (u([y, void 0]), s == null || s([y, void 0])) : p && !m && (y < p ? (u([y, p]), s == null || s([y, p])) : (u([p, y]), s == null || s([p, y])));
    }, x = () => {
      if (!p) return "";
      const y = (b) => b ? b.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }) : "";
      return p && m ? `${y(p)} - ${y(m)}` : y(p);
    };
    return /* @__PURE__ */ e.jsx(
      At,
      {
        value: p,
        onChange: w,
        monthsToShow: a,
        placeholder: f.placeholder || "Select date range",
        valueFormatter: x,
        rangeStart: p,
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
Ds.displayName = "DatePicker";
const mr = je(
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
}, Ts = je(
  ({
    isOpen: t,
    onClose: r,
    children: s,
    className: a,
    backdrop: n = "dark",
    header: l,
    closeOnBackdropClick: c = !0,
    size: i = "md",
    rounded: d = "xl",
    ...f
  }, g) => {
    const [u, p] = te(!1), [m, w] = te(!1);
    if (he(() => {
      if (t) {
        p(!0), w(!0);
        const N = ke();
        "body" in N && (N.body.style.overflow = "hidden");
      } else {
        w(!1);
        const N = setTimeout(() => {
          p(!1);
          const T = ke();
          "body" in T && (T.body.style.overflow = "");
        }, 300);
        return () => clearTimeout(N);
      }
    }, [t]), he(() => {
      const N = (T) => {
        T instanceof KeyboardEvent && T.key === "Escape" && r();
      };
      return t && ke().addEventListener("keydown", N), () => {
        ke().removeEventListener("keydown", N);
      };
    }, [t, r]), !u) return null;
    const x = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, y = () => {
      c && r();
    }, b = ke();
    if (!("body" in b)) return null;
    const j = (N) => {
      switch (N) {
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
    return console.log(j(d), d), He(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: v(
            "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300",
            x[n],
            m ? "opacity-100" : "opacity-0",
            i === "fullscreen" && "items-start"
          ),
          onClick: y,
          children: /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: g,
              className: v(
                "relative transform bg-white p-6 shadow-xl transition-all duration-300",
                Is[i],
                m ? "scale-100 opacity-100" : "scale-95 opacity-0",
                a,
                i === "fullscreen" ? "rounded-none" : j(d)
              ),
              onClick: (N) => N.stopPropagation(),
              ...f,
              children: [
                l && /* @__PURE__ */ e.jsx(mr, { onClose: r, children: l }),
                s
              ]
            }
          )
        }
      ),
      b.body
    );
  }
), _s = je(
  ({ children: t, className: r, ...s }, a) => /* @__PURE__ */ e.jsx(
    "h2",
    {
      ref: a,
      className: v("text-xl font-semibold text-gray-900", r),
      ...s,
      children: t
    }
  )
), zs = je(
  ({ children: t, className: r, ...s }, a) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: a,
      className: v("text-gray-600", r),
      ...s,
      children: t
    }
  )
), Os = je(
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
Ts.displayName = "Dialog";
_s.displayName = "DialogTitle";
zs.displayName = "DialogBody";
Os.displayName = "DialogActions";
mr.displayName = "DialogHeader";
const Ls = ({
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
}, $s = {
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
}, Vs = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, Kt = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
}, $a = ({
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
  showFileList: p = !0,
  showPlaceholder: m = !0,
  showMaxSize: w = !0,
  icon: x = "mdi:upload"
}) => {
  const [y, b] = te(!1), [j, N] = te(null), T = pe(null), D = Ge((M) => {
    M.preventDefault(), c || b(!0);
  }, [c]), Z = Ge((M) => {
    M.preventDefault(), b(!1);
  }, []), G = Ge((M) => M.size > r ? `File size exceeds ${r / (1024 * 1024)}MB limit` : t[0] !== "*" && !t.some(($) => $.startsWith(".") ? M.name.toLowerCase().endsWith($.toLowerCase()) : M.type.startsWith($)) ? `File type not allowed. Allowed types: ${t.join(", ")}` : null, [t, r]), E = Ge((M) => {
    if (M.preventDefault(), b(!1), N(null), c) return;
    const $ = Array.from(M.dataTransfer.files), B = [], P = [];
    if ($.forEach((h) => {
      const I = G(h);
      I ? P.push(`${h.name}: ${I}`) : B.push(h);
    }), P.length > 0 && N(P.join(`
`)), B.length > 0) {
      const h = s ? [...a, ...B] : B;
      n == null || n(h);
    }
  }, [c, s, n, G, a]), S = Ge((M) => {
    if (N(null), c || !M.target.files) return;
    const $ = Array.from(M.target.files), B = [], P = [];
    if ($.forEach((h) => {
      const I = G(h);
      I ? P.push(`${h.name}: ${I}`) : B.push(h);
    }), P.length > 0 && N(P.join(`
`)), B.length > 0) {
      const h = s ? [...a, ...B] : B;
      n == null || n(h);
    }
    T.current && (T.current.value = "");
  }, [c, s, n, G, a]), k = Ge((M) => {
    const $ = [...a];
    $.splice(M, 1), n == null || n($);
  }, [n, a]), Y = (M) => M.type.startsWith("image/") ? /* @__PURE__ */ e.jsx(ae, { icon: "mdi:image", className: "w-5 h-5" }) : M.type.startsWith("text/") ? /* @__PURE__ */ e.jsx(ae, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ e.jsx(ae, { icon: "mdi:file", className: "w-5 h-5" }), R = $s[d];
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
            y && R.active,
            !c && R.hover
          ],
          c && "opacity-50 cursor-not-allowed",
          Vs[f],
          Kt[g],
          !u && "cursor-pointer"
        ),
        onDragOver: D,
        onDragLeave: Z,
        onDrop: E,
        onClick: () => {
          var M;
          return !c && !u && ((M = T.current) == null ? void 0 : M.click());
        },
        children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: T,
              type: "file",
              accept: t.join(","),
              multiple: s,
              onChange: S,
              className: "hidden",
              disabled: c
            }
          ),
          u ? /* @__PURE__ */ e.jsx("div", { onClick: () => {
            var M;
            return !c && ((M = T.current) == null ? void 0 : M.click());
          }, children: u }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(ae, { icon: x, className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
            m && /* @__PURE__ */ e.jsx("p", { className: ce("text-neutral-600", R.text), children: i }),
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
    p && a.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "mt-4 space-y-2", children: a.map((M, $) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: ce(
          "flex items-center justify-between p-2",
          Kt[g],
          R.bg
        ),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
            Y(M),
            /* @__PURE__ */ e.jsx("span", { className: ce("text-sm", R.text), children: M.name }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-neutral", children: [
              "(",
              (M.size / 1024).toFixed(1),
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
      `${M.name}-${$}`
    )) })
  ] });
}, Fs = Ne(
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
), Va = ({
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
  return /* @__PURE__ */ e.jsxs("div", { className: v(Fs({ variant: a, rounded: n }), i), children: [
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
}, jt = "select-dropdown-opened", Bs = Ne(
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
), fr = je(
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
    placeholder: g,
    value: u,
    onChange: p,
    disabled: m = !1,
    position: w = "bottom",
    fullWidth: x = !1,
    children: y,
    leftIcon: b,
    rightIcon: j,
    ...N
  }, T) => {
    const [D, Z] = te(!1), G = pe(null), E = pe(null), k = `select-${be.useId().replace(/:/g, "")}`, Y = () => {
      if (D && G.current && E.current) {
        const h = G.current.getBoundingClientRect(), I = E.current, z = Me(), oe = z.innerHeight - h.bottom, O = h.top, L = h.bottom + I.offsetHeight + 4 >= z.innerHeight, V = O > oe, J = L && V;
        w === "bottom" || w === "top" ? (I.style.position = "fixed", I.style.left = `${h.left}px`, I.style.width = `${h.width}px`, w === "bottom" && J ? (I.style.bottom = `${z.innerHeight - h.top + 4}px`, I.style.top = "auto", I.style.maxHeight = `${O - 8}px`) : w === "bottom" ? (I.style.top = `${h.bottom + 4}px`, I.style.bottom = "auto", I.style.maxHeight = `${oe - 8}px`) : w === "top" && !J ? (I.style.top = `${h.bottom + 4}px`, I.style.bottom = "auto", I.style.maxHeight = `${oe - 8}px`) : (I.style.bottom = `${z.innerHeight - h.top + 4}px`, I.style.top = "auto", I.style.maxHeight = `${O - 8}px`)) : w === "left" ? (I.style.position = "fixed", I.style.right = `${z.innerWidth - h.left + 4}px`, I.style.top = `${h.top}px`, I.style.maxHeight = `${z.innerHeight - h.top - 8}px`) : w === "right" && (I.style.position = "fixed", I.style.left = `${h.right + 4}px`, I.style.top = `${h.top}px`, I.style.maxHeight = `${z.innerHeight - h.top - 8}px`);
      }
    };
    he(() => {
      const h = Me(), I = () => {
        D && Y();
      }, z = () => {
        D && Y();
      };
      return D && (Y(), h.addEventListener("scroll", I, !0), h.addEventListener("resize", z)), () => {
        h.removeEventListener("scroll", I, !0), h.removeEventListener("resize", z);
      };
    }, [D, w]), he(() => {
      const h = ke(), I = (oe) => {
        oe.detail.id !== k && Z(!1);
      }, z = (oe) => {
        const O = oe.target, q = G.current, L = E.current;
        q && L && !q.contains(O) && !L.contains(O) && Z(!1);
      };
      return h.addEventListener(jt, I), h.addEventListener("click", z), () => {
        h.removeEventListener(jt, I), h.removeEventListener("click", z);
      };
    }, [k]);
    const R = () => {
      if (m) return;
      if (D) {
        Z(!1);
        return;
      }
      ke().dispatchEvent(
        new CustomEvent(jt, {
          detail: { id: k }
        })
      ), Z(!0);
    }, M = () => {
      if (n) {
        const h = n.find((I) => I.value === u);
        return h == null ? void 0 : h.label;
      }
      if (y) {
        const I = Vt.toArray(y).find(
          (z) => bt(z) && "value" in z.props && z.props.value === u
        );
        return bt(I) ? I.props.children : null;
      }
      return null;
    }, $ = (h) => {
      m || (p == null || p(h), Z(!1));
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
    )) : y ? Vt.map(y, (h) => bt(h) && "value" in h.props ? Cr(h, {
      selected: h.props.value === u,
      onClick: () => $(h.props.value)
    }) : null) : null, P = () => {
      if (!D || m) return null;
      const h = /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: E,
          className: v(
            "fixed z-[9999] min-w-[8rem] border border-neutral-200 bg-white py-1 shadow-lg rounded-lg",
            w === "left" || w === "right" ? "w-max" : "w-full"
          ),
          onClick: (z) => z.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: B()
        }
      ), I = ke();
      return "body" in I ? He(h, I.body) : null;
    };
    return /* @__PURE__ */ e.jsxs("div", { className: v(x ? "w-full" : "inline-block"), ref: T, ...N, children: [
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
          className: v("relative", !x && "inline-block"),
          onClick: R,
          children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                id: k,
                ref: G,
                type: "button",
                className: v(
                  Bs({ variant: c ? "error" : r, size: s, rounded: a, fullWidth: x }),
                  "flex items-center justify-between",
                  m && "cursor-not-allowed opacity-50",
                  b && "pl-10",
                  j && "pr-10",
                  t
                ),
                "aria-haspopup": "listbox",
                "aria-expanded": D,
                "aria-describedby": c ? `${k}-error` : d ? `${k}-helper` : void 0,
                disabled: m,
                children: [
                  b && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ e.jsx(ae, { icon: b, className: "w-4 h-4" }) }),
                  /* @__PURE__ */ e.jsx("span", { className: "flex items-center gap-2 min-w-0 flex-1", children: /* @__PURE__ */ e.jsx("span", { className: v(
                    "truncate text-left",
                    M() ? "text-neutral-900" : "text-neutral"
                  ), children: M() || g }) }),
                  j ? /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ e.jsx(ae, { icon: j, className: "w-4 h-4" }) }) : /* @__PURE__ */ e.jsx(
                    ae,
                    {
                      icon: "mdi:chevron-down",
                      className: v("transition-transform flex-shrink-0 ml-2 w-4 h-4", D && "rotate-180")
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
fr.displayName = "Select";
const Ys = ({
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
  const g = (m, w) => {
    const x = w - m + 1;
    return Array.from({ length: x }, (y, b) => b + m);
  }, p = (() => {
    const m = n * 2 + 3, w = m + 2;
    if (r > w) {
      const x = Math.max(2, t - n), y = Math.min(r - 1, t + n);
      let b = g(x, y);
      const j = x > 2, N = r - y > 1, T = m - (b.length + 1);
      if (j && !N)
        b = [...g(x - T, x - 1), ...b];
      else if (!j && N) {
        const D = g(y + 1, y + T);
        b = [...b, ...D];
      } else j && N && (b = [...b]);
      return [1, ...b, r];
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
              fr,
              {
                value: i == null ? void 0 : i.toString(),
                onChange: (m) => f && f(Number(m)),
                size: "sm",
                className: "w-16",
                fullWidth: !1,
                "aria-label": "Items per page",
                children: c.map((m) => /* @__PURE__ */ e.jsx(ft, { value: m.toString(), children: m }, m))
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
          p.map((m, w) => {
            const x = m === t, y = typeof m == "string" && m === "...";
            return /* @__PURE__ */ e.jsx(
              Re,
              {
                variant: "ghost",
                onClick: () => !y && a(m),
                className: ce(
                  "px-3 py-1 rounded-md text-sm",
                  x ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  y && "cursor-default"
                ),
                children: m
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
}, Gs = ({
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
  const f = (p) => {
    a && a(p.target.checked);
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
}, Hs = Ne(
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
), Ws = je(
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
    labelPlacement: p = "top",
    fullWidth: m = !1,
    disabled: w = !1,
    name: x,
    gap: y,
    color: b = "primary",
    radioSize: j = "sm",
    id: N,
    ...T
  }, D) => {
    const Z = N || be.useId(), G = `${Z}-helper`, E = `${Z}-error`, S = `${Z}-group`, k = x || `radio-group-${Z}`, [Y, R] = be.useState(a), M = s !== void 0 ? s : Y, $ = (z) => {
      s === void 0 && R(z), n == null || n(z);
    }, P = ((z) => z === "none" ? "gap-0" : z === "xs" ? "gap-1" : z === "sm" ? "gap-2" : z === "md" ? "gap-3" : z === "lg" ? "gap-4" : z === "xl" ? "gap-6" : null)(y), h = /* @__PURE__ */ e.jsx("div", { className: v("relative", !m && "inline-block"), children: /* @__PURE__ */ e.jsx(
      "fieldset",
      {
        ref: D,
        id: S,
        className: v(
          Hs({ layout: l, size: c }),
          P,
          t
        ),
        "aria-describedby": i ? E : f ? G : void 0,
        "aria-invalid": i,
        "aria-required": u,
        ...T,
        children: r.map((z) => /* @__PURE__ */ e.jsx(
          Gs,
          {
            label: z.label,
            checked: M === z.value,
            onChange: () => $(z.value),
            disabled: w || z.disabled,
            name: k,
            value: z.value,
            color: i ? "error" : b,
            error: i ? " " : void 0,
            variantSize: j
          },
          z.value
        ))
      }
    ) }), I = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      i && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: E, children: d }),
      !i && f && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: G, children: f })
    ] });
    return p === "left" ? /* @__PURE__ */ e.jsx("div", { className: v(m ? "w-full" : "inline-block", t), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
      g && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: S,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            g,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: v("flex-1", !m && "inline-block"), children: [
        h,
        I
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: v(m ? "w-full" : "inline-block", t), children: [
      g && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: S,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            g,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      h,
      I
    ] });
  }
);
Ws.displayName = "RadioGroup";
const Us = Ne(
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
), Ks = ({
  width: t,
  height: r,
  variant: s = "default",
  rounded: a = "xl",
  fullWidth: n = !1,
  className: l
}) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: v(Us({ variant: s, rounded: a, fullWidth: n }), l),
    style: {
      width: !n && typeof t == "number" ? `${t}px` : t,
      height: typeof r == "number" ? `${r}px` : r
    }
  }
), Fa = ({
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
  const u = g, [p, m] = te(
    a !== void 0 ? a : n !== void 0 ? n : u ? [t, r] : t
  ), [w, x] = te(null), y = pe(null), b = a !== void 0 ? a : p, [j, N] = u ? Array.isArray(b) ? b : [t, r] : [typeof b == "number" ? b : t, r], T = (P) => Math.min(Math.max(P, t), r), D = (P) => {
    if (i) return;
    let h;
    u && Array.isArray(P) ? h = [T(P[0]), T(P[1])] : !u && typeof P == "number" ? h = T(P) : h = u ? [t, r] : t, a === void 0 && m(h), l == null || l(h);
  }, Z = (P) => {
    if (!y.current) return t;
    const h = y.current.getBoundingClientRect(), z = (P - h.left) / h.width, oe = t + (r - t) * z, O = Math.round(oe / s) * s;
    return T(O);
  }, G = (P) => (h) => {
    i || (x(P), h.stopPropagation());
  }, E = (P) => {
    if (!i)
      if (!u)
        x(0), S(P, 0);
      else {
        const h = Z(P.clientX), I = Math.abs(h - j), z = Math.abs(h - N), oe = I < z ? 0 : 1;
        x(oe), S(P, oe);
      }
  }, S = be.useCallback((P, h) => {
    const I = Z(P.clientX);
    if (!u)
      D(I);
    else {
      let z = [j, N];
      h === 0 ? z = [Math.min(I, N - s), N] : z = [j, Math.max(I, j + s)], z[0] > z[1] && (z = [z[1], z[0]]), D(z);
    }
  }, [u, j, N, s, D, Z]), k = be.useRef(w);
  k.current = w;
  const Y = be.useCallback(function(P) {
    k.current === null || i || S(P, k.current);
  }, [i, S]), R = be.useCallback(function() {
    x(null);
  }, []);
  he(() => {
    if (w !== null) {
      const P = Me();
      return P.addEventListener("mousemove", Y), P.addEventListener("mouseup", R), () => {
        P.removeEventListener("mousemove", Y), P.removeEventListener("mouseup", R);
      };
    }
  }, [w, Y, R]);
  const M = (P) => (P - t) / (r - t) * 100, $ = M(j), B = M(N);
  return /* @__PURE__ */ e.jsxs("div", { className: ce("relative w-full", c), children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: y,
        className: ce(
          "relative h-2 bg-gray-200 rounded-full cursor-pointer",
          i && "opacity-50 cursor-not-allowed"
        ),
        onMouseDown: E,
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
    d && /* @__PURE__ */ e.jsx("div", { className: "mt-2 text-sm text-gray-600", children: u ? `${j} - ${N}` : j })
  ] });
}, Zs = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}, qs = {
  primary: "text-primary",
  warning: "text-warning",
  default: "text-default-400"
}, Ba = ({
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
  }, p = i !== null ? i : t;
  return /* @__PURE__ */ e.jsx("div", { className: v("flex items-center gap-1", c), children: [...Array(r)].map((m, w) => {
    const x = w + 1, y = x <= p, b = i !== null && x <= i;
    return /* @__PURE__ */ e.jsx(
      "button",
      {
        className: v(
          "transition-colors duration-200",
          Zs[s],
          y || b ? qs[a] : "text-default-200",
          !n && "cursor-pointer"
        ),
        onMouseEnter: () => f(x),
        onMouseLeave: g,
        onClick: () => u(x),
        disabled: n,
        "aria-label": `Rate ${x} out of ${r}`,
        children: /* @__PURE__ */ e.jsx(
          ae,
          {
            icon: y || b ? "mdi:star" : "mdi:star-outline",
            className: "w-full h-full"
          }
        )
      },
      w
    );
  }) });
}, Js = {
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
}, Xs = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4"
}, Ya = ({
  status: t,
  size: r = "md",
  withLabel: s = !1,
  className: a
}) => {
  const { bgColor: n, label: l } = Js[t], c = Xs[r];
  return /* @__PURE__ */ e.jsxs("div", { className: v("flex items-center gap-2", a), children: [
    /* @__PURE__ */ e.jsx("div", { className: v("rounded-full animate-pulse", n, c) }),
    s && /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: l })
  ] });
}, gr = (t, r) => {
  if (r) return r;
  switch (t) {
    case "completed":
      return "mdi:check";
    case "active":
      return "mdi:circle-medium";
    default:
      return "mdi:circle-outline";
  }
}, pr = (t) => {
  switch (t) {
    case "completed":
      return "text-white bg-primary ring-4 ring-primary-50";
    case "active":
      return "text-primary bg-primary-50 ring-4 ring-primary-50";
    default:
      return "text-neutral bg-neutral-50 ring-4 ring-neutral-50";
  }
}, Qs = ({
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
                pr(c)
              ),
              children: /* @__PURE__ */ e.jsx(
                ae,
                {
                  icon: gr(c, n.icon),
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
          Ls,
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
}) }), ea = ({
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
                pr(c)
              ),
              children: /* @__PURE__ */ e.jsx(
                ae,
                {
                  icon: gr(c, n.icon),
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
}) }), Ga = ({
  orientation: t = "horizontal",
  variant: r = "default",
  ...s
}) => t === "vertical" ? /* @__PURE__ */ e.jsx(ea, { variant: r, ...s }) : /* @__PURE__ */ e.jsx(Qs, { variant: r, ...s }), Ha = ({
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
}, Wa = ({
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
  var b, j;
  const [f, g] = te(r || ((b = t[0]) == null ? void 0 : b.id) || ""), u = be.useRef(null), [p, m] = te({ left: 0, width: 0 });
  be.useEffect(() => {
    var N;
    if (s === "active-underline" && u.current) {
      const T = u.current.getBoundingClientRect(), D = (N = u.current.parentElement) == null ? void 0 : N.getBoundingClientRect();
      D && m({
        left: T.left - D.left,
        width: T.width
      });
    }
  }, [s, t, f]), be.useEffect(() => {
    if (s === "active-underline") {
      const N = () => {
        var T;
        if (u.current) {
          const D = u.current.getBoundingClientRect(), Z = (T = u.current.parentElement) == null ? void 0 : T.getBoundingClientRect();
          Z && m({
            left: D.left - Z.left,
            width: D.width
          });
        }
      };
      return window.addEventListener("resize", N), () => window.removeEventListener("resize", N);
    }
  }, [s, t, f]);
  const w = Ge((N) => {
    g(N), d == null || d(N);
  }, [d]), x = () => {
    switch (a) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  }, y = (N, T) => {
    const D = ce(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      x(),
      T && "opacity-50 cursor-not-allowed",
      !T && "cursor-pointer"
    );
    switch (s) {
      case "pills":
        return ce(
          D,
          "rounded-full",
          N ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return ce(
          D,
          "border-b-2",
          N ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      case "active-underline":
        return ce(
          D,
          "border-b-0",
          N ? "text-primary" : "text-gray-600 dark:text-gray-300 hover:text-primary"
        );
      default:
        return ce(
          D,
          "border-b-2",
          N ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
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
      t.map((N) => {
        const T = N.id === f, D = !!N.disabled;
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            ref: s === "active-underline" && T ? u : void 0,
            onClick: () => !D && w(N.id),
            disabled: D,
            className: ce(
              y(T, D),
              c
            ),
            children: [
              N.icon && /* @__PURE__ */ e.jsx(
                ae,
                {
                  icon: N.icon,
                  className: "w-5 h-5 flex-shrink-0"
                }
              ),
              /* @__PURE__ */ e.jsx("span", { children: N.label })
            ]
          },
          N.id
        );
      }),
      s === "active-underline" && /* @__PURE__ */ e.jsx(
        "span",
        {
          className: "absolute bottom-0 h-0.5 bg-primary transition-all duration-300",
          style: { left: p.left, width: p.width }
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: ce("mt-4", i), children: (j = t.find((N) => N.id === f)) == null ? void 0 : j.content })
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
}, Nt = "timepicker-dropdown-opened", ta = Ne(
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
), xr = je(
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
    required: g = !1,
    labelPlacement: u = "top",
    fullWidth: p = !1,
    className: m,
    placeholder: w = "Select time",
    leftIcon: x,
    rightIcon: y,
    valueFormatter: b,
    closeOnSelect: j = !0,
    ...N
  }, T) => {
    const [D, Z] = te(!1), [G, E] = te(t || ""), [S, k] = te(0), [Y, R] = te(0), [M, $] = te(!0), B = pe(null), P = pe(null), h = pe(null), z = `timepicker-${be.useId().replace(/:/g, "")}`, oe = () => {
      if (!D || !P.current || !h.current) return;
      const A = P.current.getBoundingClientRect(), X = h.current, we = Me().innerHeight - A.bottom;
      X.style.top = `${A.bottom + 4}px`, X.style.bottom = "auto", X.style.left = `${A.left}px`, X.style.maxHeight = `${we - 8}px`, X.style.width = `${A.width}px`;
    };
    he(() => {
      const A = Me(), X = ke(), xe = () => {
        D && oe();
      }, we = () => {
        D && oe();
      }, Te = (Ie) => {
        Ie.detail.id !== z && Z(!1);
      }, Oe = (Ie) => {
        const Le = Ie.target;
        B.current && h.current && !B.current.contains(Le) && !h.current.contains(Le) && Z(!1);
      };
      return D && (oe(), A.addEventListener("scroll", xe, !0), A.addEventListener("resize", we)), X.addEventListener(Nt, Te), X.addEventListener("mousedown", Oe), () => {
        A.removeEventListener("scroll", xe, !0), A.removeEventListener("resize", we), X.removeEventListener(Nt, Te), X.removeEventListener("mousedown", Oe);
      };
    }, [D, z]);
    const O = () => {
      c || (D || ke().dispatchEvent(
        new CustomEvent(Nt, {
          detail: { id: z }
        })
      ), Z(!D));
    };
    he(() => {
      if (t) {
        E(t);
        const [A, X] = t.split(":").map(Number);
        s ? k(A) : (k(A % 12 || 12), $(A < 12)), R(X);
      }
    }, [t, s]);
    const q = () => {
      const X = `${(s || M ? S : S + 12).toString().padStart(2, "0")}:${Y.toString().padStart(2, "0")}`;
      E(X), r == null || r(X), j && Z(!1);
    }, L = () => s ? Array.from({ length: 24 }, (A, X) => X) : Array.from({ length: 12 }, (A, X) => X + 1), V = () => Array.from({ length: 60 }, (A, X) => X), J = b ? b(G) : G, re = ke();
    return "body" in re ? /* @__PURE__ */ e.jsxs("div", { ref: B, className: v("relative", p && "w-full", m), children: [
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
          onClick: O,
          children: [
            x && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ e.jsx(ae, { icon: x, size: 20 }) }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: T,
                type: "text",
                value: J,
                placeholder: w,
                readOnly: !0,
                className: v(
                  ta({ variant: a, size: n, rounded: l, fullWidth: p }),
                  x && "pl-10",
                  y && "pr-10",
                  "text-left"
                ),
                disabled: c,
                ...N
              }
            ),
            y && /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ e.jsx(ae, { icon: y, size: 20 }) })
          ]
        }
      ),
      D && He(
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: h,
            className: "fixed z-[9999] w-fit rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (A) => A.stopPropagation(),
            children: /* @__PURE__ */ e.jsxs("div", { className: "p-0", children: [
              /* @__PURE__ */ e.jsxs(Dt, { variant: "ghost", className: v(
                "flex mx-2 my-1 p-0",
                s ? "justify-start gap-8" : "justify-start gap-4"
              ), children: [
                /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2", children: L().map((A) => /* @__PURE__ */ e.jsx(
                  Re,
                  {
                    variant: "ghost",
                    onClick: () => k(A),
                    className: v(S === A && "bg-primary text-white"),
                    children: A.toString().padStart(2, "0")
                  },
                  A
                )) }) }) }),
                /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2", children: V().map((A) => /* @__PURE__ */ e.jsx(
                  Re,
                  {
                    variant: "ghost",
                    onClick: () => R(A),
                    className: v(Y === A && "bg-primary text-white"),
                    children: A.toString().padStart(2, "0")
                  },
                  A
                )) }) }) }),
                !s && /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ e.jsx(
                    Re,
                    {
                      variant: "ghost",
                      onClick: () => $(!0),
                      className: v(M && "bg-primary text-white"),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    Re,
                    {
                      variant: "ghost",
                      onClick: () => $(!1),
                      className: v(!M && "bg-primary text-white"),
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
xr.displayName = "PrimitiveTimePicker";
const ra = ({
  value: t,
  onChange: r,
  valueFormatter: s,
  closeOnSelect: a,
  ...n
}) => /* @__PURE__ */ e.jsx(
  xr,
  {
    value: t,
    onChange: r,
    valueFormatter: s,
    closeOnSelect: a,
    ...n
  }
);
ra.displayName = "TimePicker";
const sa = Ne(
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
), aa = Ne(
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
), na = je(
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
    const p = be.useId(), m = `${p}-helper`, w = `${p}-error`;
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
            className: v(sa({ variant: d ? "danger" : s, size: a }), f),
            "aria-describedby": d ? w : c ? m : void 0,
            "aria-invalid": d,
            "aria-required": l,
            ...g,
            children: /* @__PURE__ */ e.jsx(
              "span",
              {
                "data-state": t ? "checked" : "unchecked",
                className: v(
                  aa({ size: a }),
                  t ? "translate-x-5" : "translate-x-1"
                )
              }
            )
          }
        ),
        n && /* @__PURE__ */ e.jsxs(
          "label",
          {
            htmlFor: p,
            className: "text-sm text-neutral-900",
            children: [
              n,
              l && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ]
          }
        )
      ] }),
      d && i && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-danger", id: w, children: i }),
      !d && c && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-neutral", id: m, children: c })
    ] });
  }
);
na.displayName = "Toggle";
const oa = Ne(
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
), la = Ne("absolute w-2 h-2 transform rotate-45", {
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
}), Ua = ({
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
  const [g, u] = te(!1), [p, m] = te({ top: 0, left: 0 }), w = pe(null), x = pe(null), y = pe(), b = i !== void 0, j = b ? i : g, N = () => {
    if (!w.current || !x.current) return;
    const E = x.current.getBoundingClientRect(), S = w.current.getBoundingClientRect(), k = Me(), Y = k.scrollX || k.pageXOffset, R = k.scrollY || k.pageYOffset;
    let M = 0, $ = 0;
    const B = 8;
    switch (s) {
      case "top":
        M = E.top + R - S.height - B, $ = E.left + Y + (E.width - S.width) / 2;
        break;
      case "bottom":
        M = E.bottom + R + B, $ = E.left + Y + (E.width - S.width) / 2;
        break;
      case "left":
        M = E.top + R + (E.height - S.height) / 2, $ = E.left + Y - S.width - B;
        break;
      case "right":
        M = E.top + R + (E.height - S.height) / 2, $ = E.right + Y + B;
        break;
    }
    const P = k.innerWidth, h = k.innerHeight;
    $ < 0 && ($ = 0), $ + S.width > P && ($ = P - S.width), M < 0 && (M = 0), M + S.height > h && (M = h - S.height), m({ top: M, left: $ });
  };
  he(() => {
    if (j) {
      N();
      const E = Me();
      E.addEventListener("scroll", N, !0), E.addEventListener("resize", N);
    }
    return () => {
      const E = Me();
      E.removeEventListener("scroll", N, !0), E.removeEventListener("resize", N);
    };
  }, [j, s]);
  const T = () => {
    b ? d == null || d(!0) : y.current = setTimeout(() => {
      u(!0);
    }, a);
  }, D = () => {
    y.current && clearTimeout(y.current), b ? d == null || d(!1) : u(!1);
  }, Z = (E) => {
    E.stopPropagation(), f === "click" && (b ? d == null || d(!i) : u(!g));
  };
  he(() => {
    const E = (S) => {
      f === "click" && w.current && !w.current.contains(S.target) && x.current && !x.current.contains(S.target) && D();
    };
    return j && document.addEventListener("click", E), () => {
      document.removeEventListener("click", E);
    };
  }, [j, f]);
  const G = () => {
    if (!j) return null;
    const E = ke();
    return "body" in E ? He(
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: w,
          className: v(oa({ color: l, size: c }), n),
          style: {
            top: `${p.top}px`,
            left: `${p.left}px`
          },
          children: [
            t,
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: v(
                  la({ color: l }),
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
      E.body
    ) : null;
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: x,
      className: "relative inline-block",
      onMouseEnter: f === "hover" ? T : void 0,
      onMouseLeave: f === "hover" ? D : void 0,
      onClick: Z,
      children: [
        r,
        G()
      ]
    }
  ) });
}, ia = Ne(
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
), ca = {
  sm: 24,
  md: 36,
  lg: 48
}, da = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  info: "bg-info"
}, ua = {
  primary: "#007C99",
  // Tailwind primary
  secondary: "#CEEAE7",
  success: "#00B37D",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#0EA5E9"
}, ma = be.forwardRef(
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
    const p = Math.min(Math.max(n, 0), 100), m = ca[a], w = a === "sm" ? 2 : a === "md" ? 3 : 4, x = (m - w) / 2, y = 2 * Math.PI * x, b = y - p / 100 * y;
    let j = "";
    return r === "loading" ? j = "rounded-full" : d ? j = d === "none" ? "" : `rounded-${d}` : j = "rounded-md", r === "circular" ? /* @__PURE__ */ e.jsxs("div", { className: "inline-flex flex-col items-center gap-2", children: [
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
                  strokeWidth: w,
                  stroke: "#e5e7eb",
                  fill: "transparent",
                  r: x,
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
                  strokeWidth: w,
                  strokeDasharray: y,
                  strokeDashoffset: l ? 0 : b,
                  strokeLinecap: "round",
                  stroke: ua[s],
                  fill: "transparent",
                  r: x,
                  cx: m / 2,
                  cy: m / 2
                }
              )
            ]
          }
        ),
        f && /* @__PURE__ */ e.jsx("span", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ e.jsx(ae, { icon: f, size: m * 0.5 }) }),
        c && !l && !f && /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 flex items-center justify-center text-xs font-medium", children: [
          Math.round(p),
          "%"
        ] })
      ] }),
      i && /* @__PURE__ */ e.jsx("span", { className: "text-sm text-neutral-600", children: i })
    ] }) : /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: u,
          className: v(ia({ variant: r === "loading" ? "bar" : r, size: a }), j, t),
          role: "progressbar",
          "aria-valuenow": l ? void 0 : p,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...g,
          children: /* @__PURE__ */ e.jsx(
            "div",
            {
              className: v(
                "h-full transition-all duration-300 ease-in-out",
                l ? "animate-progress-indeterminate" : "",
                da[s],
                j
              ),
              style: {
                width: l ? "100%" : `${p}%`
              }
            }
          )
        }
      ),
      (c || i) && /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between text-xs text-neutral-600", children: [
        i && /* @__PURE__ */ e.jsx("span", { children: i }),
        c && !l && /* @__PURE__ */ e.jsxs("span", { children: [
          Math.round(p),
          "%"
        ] })
      ] })
    ] });
  }
);
ma.displayName = "Progress";
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
], fa = Ne(
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
}, ga = (t) => t.startsWith("0") && t.length >= 9 && t.length <= 12 ? "+62" + t.slice(1) : t, pa = (t) => t.startsWith("0") && t.length >= 3, Mt = je(
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
    value: g = "",
    onChange: u,
    disabled: p = !1,
    defaultCountry: m = "id",
    placeholder: w = "Enter phone number",
    autoDetect: x = !0,
    ...y
  }) => {
    const [b, j] = te(!1), [N, T] = te(
      () => Ye.find((L) => L.iso === m) || Ye[0]
    ), [D, Z] = te(""), [G, E] = te(() => {
      if (x && g) {
        const V = Et(g);
        if (V)
          return T(V), g;
        const J = Zt(g);
        return J ? (T(J), J.code + g.slice(J.code.replace("+", "").length)) : g;
      }
      const L = N.code;
      return g.startsWith(L) ? g.slice(L.length) : g;
    }), [S, k] = te(() => x && g ? !!(Et(g) || Zt(g)) : !1), Y = pe(null), R = pe(null), M = be.useId(), $ = `${M}-helper`, B = `${M}-error`, P = Ye.filter(
      (L) => L.name.toLowerCase().includes(D.toLowerCase()) || L.code.includes(D)
    ), h = pe(null), I = () => {
      if (b && Y.current && R.current) {
        const L = Y.current.getBoundingClientRect(), V = R.current, J = typeof window < "u" ? window : { innerHeight: 0 }, re = J.innerHeight - L.bottom, A = L.top, xe = L.bottom + (V.offsetHeight || 0) + 4 >= J.innerHeight, we = A > re, Te = xe && we;
        V.style.position = "fixed", V.style.left = `${L.left}px`, V.style.minWidth = `${L.width}px`, V.style.maxWidth = "340px", V.style.width = "auto", Te ? (V.style.bottom = `${J.innerHeight - L.top + 4}px`, V.style.top = "auto", V.style.maxHeight = `${A - 8}px`) : (V.style.top = `${L.bottom + 4}px`, V.style.bottom = "auto", V.style.maxHeight = `${re - 8}px`);
      }
    };
    he(() => {
      const L = typeof window < "u" ? window : void 0, V = () => {
        b && I();
      }, J = () => {
        b && I();
      };
      return b && (I(), L == null || L.addEventListener("scroll", V, !0), L == null || L.addEventListener("resize", J)), () => {
        L == null || L.removeEventListener("scroll", V, !0), L == null || L.removeEventListener("resize", J);
      };
    }, [b]), he(() => {
      if (!b) return;
      const L = (V) => {
        const J = V.target;
        Y.current && R.current && !Y.current.contains(J) && !R.current.contains(J) && j(!1);
      };
      return document.addEventListener("click", L), () => document.removeEventListener("click", L);
    }, [b]);
    const z = (L) => {
      if (T(L), j(!1), Z(""), x) {
        const V = L.code + G.replace(/^\+?\d*/, "");
        E(V);
        const J = V.replace(/[^\d]/g, "");
        u == null || u(J);
      } else {
        const J = (L.code + G).replace(/[^\d]/g, "");
        u == null || u(J);
      }
    }, oe = (L) => {
      const V = L.target.value;
      if (/^[+\d]*$/.test(V))
        if (x && V.startsWith("+")) {
          const re = Et(V);
          if (re) {
            T(re), k(!0), E(V);
            const A = V.replace(/[^\d]/g, "");
            u == null || u(A);
          } else {
            E(V), k(!1);
            const A = V.replace(/[^\d]/g, "");
            u == null || u(A);
          }
        } else if (x && !V.startsWith("+") && V.length > 0) {
          const re = ga(V);
          if (re !== V) {
            E(re), T(
              Ye.find((X) => X.iso === "id") || Ye[0]
            ), k(!0);
            const A = re.replace(/[^\d]/g, "");
            u == null || u(A);
          } else if (pa(V)) {
            const A = "+62" + V.slice(1);
            E(A), T(
              Ye.find((xe) => xe.iso === "id") || Ye[0]
            ), k(!0);
            const X = A.replace(/[^\d]/g, "");
            u == null || u(X);
          } else if (V.startsWith("0"))
            E(V), k(!1);
          else {
            const A = "+" + V;
            E(A);
            const X = A.replace(/[^\d]/g, "");
            u == null || u(X);
          }
        } else {
          const re = V.replace(/[^\d]/g, "");
          E(re);
          const X = (N.code + re).replace(/[^\d]/g, "");
          u == null || u(X);
        }
    }, O = v(
      fa({
        variant: n ? "error" : r,
        size: s,
        rounded: a,
        fullWidth: f
      }),
      "!w-full"
    ), q = !x || x && S;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: h,
        className: v(f ? "w-full" : "inline-block", t),
        ...y,
        children: [
          i && /* @__PURE__ */ e.jsxs("label", { htmlFor: M, className: "mb-1.5 block text-sm text-neutral-900", children: [
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
                  onClick: () => !p && j(!b),
                  className: v(
                    O,
                    "flex items-center gap-2 rounded-r-none justify-between",
                    x ? "max-w-[60px]" : "max-w-[100px]",
                    p && "cursor-not-allowed opacity-50"
                  ),
                  children: [
                    /* @__PURE__ */ e.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ e.jsx(ae, { icon: N.flag, className: "w-5 h-5" }),
                      !x && /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: N.code })
                    ] }),
                    /* @__PURE__ */ e.jsx(
                      ae,
                      {
                        icon: "mdi:chevron-down",
                        className: v("transition-transform", b && "rotate-180")
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
                  value: G,
                  onChange: oe,
                  disabled: p,
                  className: v(
                    O,
                    q ? "rounded-l-none" : `rounded-l-${a}`,
                    "flex-1 min-w-0 w-full"
                  ),
                  placeholder: x ? "e.g. +6281234567890" : w
                }
              )
            ] }),
            b && He(
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
                        value: D,
                        onChange: (L) => {
                          const V = L.target.value;
                          /^[a-zA-Z0-9\s]*$/.test(V) && Z(V);
                        },
                        placeholder: "Search countries...",
                        className: "w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:border-primary-300"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "max-h-[300px] overflow-y-auto", children: P.map((L) => /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => z(L),
                        className: v(
                          "w-full px-3 py-2 text-sm text-left hover:bg-primary-50 cursor-pointer",
                          N.iso === L.iso && "bg-primary-50"
                        ),
                        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ e.jsx(ae, { icon: L.flag, className: "w-5 h-5" }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-sm font-medium", children: L.code }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-sm text-neutral-600", children: L.name })
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
          n && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: B, children: l }),
          !n && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: $, children: c })
        ]
      }
    );
  }
);
Mt.displayName = "PhoneInput";
const Ka = () => {
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
}, xa = Ne(
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
), Za = ({
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
  isOpen: g,
  onOpenChange: u,
  closeOnClickOutside: p = !0
}) => {
  const [m, w] = te(!1), [x, y] = te({ top: 0, left: 0 }), b = pe(null), j = pe(null), N = g !== void 0, T = N ? g : m, D = () => {
    if (!b.current || !j.current) return;
    const k = j.current.getBoundingClientRect(), Y = b.current.getBoundingClientRect(), R = Me(), M = R.scrollX || R.pageXOffset, $ = R.scrollY || R.pageYOffset;
    let B = 0, P = 0;
    const h = 8;
    switch (s) {
      case "top":
        B = k.top + $ - Y.height - h, P = k.left + M + (k.width - Y.width) / 2;
        break;
      case "bottom":
        B = k.bottom + $ + h, P = k.left + M + (k.width - Y.width) / 2;
        break;
      case "left":
        B = k.top + $ + (k.height - Y.height) / 2, P = k.left + M - Y.width - h;
        break;
      case "right":
        B = k.top + $ + (k.height - Y.height) / 2, P = k.right + M + h;
        break;
    }
    const I = R.innerWidth, z = R.innerHeight;
    P < 0 && (P = 0), P + Y.width > I && (P = I - Y.width), B < 0 && (B = 0), B + Y.height > z && (B = z - Y.height), y({ top: B, left: P });
  };
  he(() => {
    if (T) {
      D();
      const k = Me();
      k.addEventListener("scroll", D, !0), k.addEventListener("resize", D);
    }
    return () => {
      const k = Me();
      k.removeEventListener("scroll", D, !0), k.removeEventListener("resize", D);
    };
  }, [T, s]), he(() => {
    if (T && f && b.current) {
      const k = b.current.querySelector(
        "input, select, textarea, button, [tabindex]:not([tabindex='-1'])"
      );
      k && k.focus();
    }
  }, [T, f]);
  const Z = () => {
    N ? u == null || u(!0) : w(!0);
  }, G = () => {
    N ? u == null || u(!1) : w(!1);
  }, E = (k) => {
    k.stopPropagation(), d === "click" && (N ? u == null || u(!g) : w(!m));
  };
  he(() => {
    if (!p) return;
    const k = (Y) => {
      d === "click" && b.current && !b.current.contains(Y.target) && j.current && !j.current.contains(Y.target) && G();
    };
    return T && document.addEventListener("pointerdown", k, !0), () => {
      document.removeEventListener("pointerdown", k, !0);
    };
  }, [T, d, p]);
  const S = () => {
    if (!T) return null;
    const k = ke();
    return "body" in k ? He(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: b,
          className: v(
            xa({ color: a, rounded: l, shadow: c }),
            a === "custom" && n ? n : "",
            i
          ),
          style: {
            top: `${x.top}px`,
            left: `${x.left}px`,
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
      onMouseEnter: d === "hover" ? Z : void 0,
      onMouseLeave: d === "hover" ? G : void 0,
      onClick: E,
      tabIndex: 0,
      children: [
        r,
        S()
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
}, va = ({ schema: t, variant: r = "primary" }) => {
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
            children: /* @__PURE__ */ e.jsx(Ks, { className: "h-10 w-full rounded-md" })
          },
          `${l}-${i}`
        ))
      },
      l
    )) })
  ] }) }) });
}, qa = ({
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
  onSortChange: p,
  onRowClick: m,
  showPagination: w = !1,
  variant: x = "primary",
  meta: y = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [b, j] = te(() => {
    const G = t.find((E) => E.sortable && E.sort);
    return G ? [{
      id: G.accessorKey.toString(),
      desc: G.sort === "desc"
    }] : [];
  }), N = be.useMemo(() => {
    const G = t.map((E) => ({
      accessorKey: E.accessorKey,
      header: E.label,
      enableSorting: !!E.sortable,
      cell: E.render ? ({ row: S }) => {
        var k;
        return (k = E.render) == null ? void 0 : k.call(E, S.original[E.accessorKey], S.original, S.index);
      } : ({ row: S }) => S.original[E.accessorKey] || "-",
      meta: {
        align: E.align || "left"
      }
    }));
    return f ? [{
      accessorKey: "no",
      header: "No.",
      enableSorting: !1,
      cell: ({ row: E }) => (y.current_page - 1) * y.limit_number + E.index + 1,
      meta: {
        align: "left"
      }
    }, ...G] : G;
  }, [t, f, y]), T = Ir({
    data: r,
    columns: N,
    state: {
      sorting: b
    },
    onSortingChange: (G) => {
      const E = typeof G == "function" ? G(b) : G;
      j(E), E.length > 0 ? p == null || p(E[0].desc ? "desc" : "asc", E[0].id) : p == null || p("", "");
    },
    getCoreRowModel: zr(),
    getSortedRowModel: _r(),
    getPaginationRowModel: Tr(),
    manualPagination: !0,
    pageCount: y.total_page
  }), D = hr(x);
  if (i)
    return d || /* @__PURE__ */ e.jsx(va, { schema: t, variant: x });
  const Z = (G, E, S) => {
    const k = G.target;
    k.tagName === "BUTTON" || k.tagName === "A" || k.tagName === "INPUT" || k.tagName === "SELECT" || k.closest("button") !== null || k.closest("a") !== null || k.closest("input") !== null || k.closest("select") !== null || m == null || m(E, S);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-md", children: [
    /* @__PURE__ */ e.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ e.jsxs("table", { className: v("w-full border-spacing-0 border-separate", s), children: [
      /* @__PURE__ */ e.jsx("thead", { className: v("border-2 sticky top-0 z-10 rounded-t-md", D.border), children: T.getHeaderGroups().map((G) => /* @__PURE__ */ e.jsx("tr", { children: G.headers.map((E, S) => {
        var k, Y, R;
        return /* @__PURE__ */ e.jsx(
          "th",
          {
            className: v(
              "text-sm text-wrap border-y p-4",
              D.header,
              {
                "cursor-pointer": E.column.getCanSort(),
                "rounded-tl-md": S === 0,
                "rounded-tr-md": S === G.headers.length - 1,
                "text-left": ((k = E.column.columnDef.meta) == null ? void 0 : k.align) === "left",
                "text-center": ((Y = E.column.columnDef.meta) == null ? void 0 : Y.align) === "center",
                "text-right": ((R = E.column.columnDef.meta) == null ? void 0 : R.align) === "right"
              },
              a
            ),
            onClick: E.column.getCanSort() ? E.column.getToggleSortingHandler() : void 0,
            children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsx("span", { className: v({
                "font-semibold": S === 0
              }), children: Ft(E.column.columnDef.header, E.getContext()) }),
              E.column.getCanSort() && /* @__PURE__ */ e.jsx(
                ae,
                {
                  icon: E.column.getIsSorted() ? E.column.getIsSorted() === "desc" ? "mdi:keyboard-arrow-up" : "mdi:keyboard-arrow-down" : "mdi:unfold-more-horizontal",
                  className: v("h-4 w-4", {
                    "text-white": x !== "ghost",
                    "text-gray-700": x === "ghost"
                  })
                }
              )
            ] })
          },
          E.id
        );
      }) }, G.id)) }),
      /* @__PURE__ */ e.jsx("tbody", { className: "max-h-[50vh]", children: T.getRowModel().rows.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx(
        "td",
        {
          colSpan: T.getAllColumns().length,
          className: v(
            "text-center border h-full w-full rounded-b-md"
          ),
          children: c || /* @__PURE__ */ e.jsxs("div", { className: "flex mx-auto w-full text-center justify-center gap-3 items-center", children: [
            /* @__PURE__ */ e.jsx("p", { children: "Data Not Found" }),
            /* @__PURE__ */ e.jsx(ae, { icon: "mdi:face-frown-open", size: 34 })
          ] })
        }
      ) }) : T.getRowModel().rows.map((G, E) => /* @__PURE__ */ e.jsx(
        "tr",
        {
          className: v(
            "p-3",
            D.row,
            {
              [D.stripe]: E % 2 !== 0,
              "bg-white": E % 2 === 0,
              "cursor-pointer": m
            },
            n
          ),
          onClick: (S) => Z(S, G.original, E),
          children: G.getVisibleCells().map((S) => {
            var k, Y, R;
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: v(
                  "px-4 py-3 text-sm text-gray-900",
                  {
                    "text-left": ((k = S.column.columnDef.meta) == null ? void 0 : k.align) === "left",
                    "text-center": ((Y = S.column.columnDef.meta) == null ? void 0 : Y.align) === "center",
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
        G.id
      )) })
    ] }) }),
    !!r.length && w && /* @__PURE__ */ e.jsx("div", { className: "p-4 bg-white rounded-b-md", children: /* @__PURE__ */ e.jsx(
      Ys,
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
}, ya = {
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
    const p = c || (i ? {
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
          ya[s],
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
          p && /* @__PURE__ */ e.jsx(
            ae,
            {
              icon: p,
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
const Ct = Pr(void 0), wa = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, Ja = ({ children: t }) => {
  const [r, s] = te([]), a = Ge((i) => {
    s((d) => d.filter((f) => f.id !== i));
  }, []), n = Ge((i) => {
    const d = Math.random().toString(36).substr(2, 9), f = i.position || "top-right", g = i.duration || 5e3, u = {
      ...i,
      id: d,
      position: f
    };
    return s((p) => [...p, u]), g > 0 && setTimeout(() => {
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
  return "body" in c ? /* @__PURE__ */ e.jsxs(Ct.Provider, { value: { showToast: n, removeToast: a }, children: [
    t,
    He(
      /* @__PURE__ */ e.jsx(e.Fragment, { children: Object.entries(l).map(([i, d]) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: v(
            "fixed z-[100] flex flex-col gap-2 min-w-[320px] max-w-[420px]",
            wa[i],
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
  ] }) : /* @__PURE__ */ e.jsx(Ct.Provider, { value: { showToast: n, removeToast: a }, children: t });
}, Xa = () => {
  const t = Dr(Ct);
  if (!t)
    throw new Error("useToast must be used within a ToastProvider");
  return t;
}, ka = ({
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
] }), ja = {
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
}, vr = {
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
}, Na = {
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
}, qt = {
  ...ja,
  ...vr
}, Jt = {
  image: "https://design-system-eaip.onrender.com/img/error.svg",
  message: "An unexpected error occurred. Our team is currently investigating the issue."
}, Xt = (t) => typeof t == "object" && t !== null && ("code" in t || "message" in t), Qa = ({
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
      const u = Na[n];
      return vr[u];
    }
    return Xt(t) && t.code && qt[t.code] ? qt[t.code] : Jt;
  })(), f = l || d.image, g = c || (Xt(t) ? t.message : null) || d.message;
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
}, Ea = Ne(
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
), Sa = je(
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
    submitButtonVariant: p = "primary",
    length: m = 6,
    numericOnly: w = !0,
    onComplete: x,
    onChange: y,
    onSubmit: b,
    value: j,
    defaultValue: N = "",
    disabled: T = !1,
    autoFocus: D = !1,
    ...Z
  }, G) => {
    const [E, S] = te(N || ""), k = pe([]);
    he(() => {
      j !== void 0 && S(j);
    }, [j]);
    const Y = j !== void 0, R = Y ? j : E, M = (O) => {
      Y || S(O), y == null || y(O), O.length === m && (x == null || x(O), g || b == null || b(O));
    }, $ = (O) => (q) => {
      k.current[O] = q;
    }, B = (O) => {
      O.target.select();
    }, P = (O, q) => {
      var A;
      const L = O.target.value;
      let V = "";
      if (L.length >= 1)
        V = L.slice(-1);
      else if (L.length === 0) {
        const X = R.split("");
        X[q] = "", M(X.join(""));
        return;
      }
      if (w && !/^\d$/.test(V))
        return;
      const J = R.split("");
      for (; J.length <= q; )
        J.push("");
      J[q] = V;
      const re = J.join("");
      M(re), q < m - 1 && V && ((A = k.current[q + 1]) == null || A.focus());
    }, h = (O, q) => {
      var L, V, J;
      if (O.key === "Backspace") {
        const re = R.split("");
        R[q] ? (O.preventDefault(), re[q] = "", M(re.join(""))) : q > 0 && (O.preventDefault(), re[q - 1] = "", M(re.join("")), (L = k.current[q - 1]) == null || L.focus());
      } else if (O.key === "Delete") {
        if (R[q]) {
          O.preventDefault();
          const re = R.split("");
          re[q] = "", M(re.join(""));
        }
      } else if (O.key === "ArrowLeft" && q > 0)
        O.preventDefault(), (V = k.current[q - 1]) == null || V.focus();
      else if (O.key === "ArrowRight" && q < m - 1)
        O.preventDefault(), (J = k.current[q + 1]) == null || J.focus();
      else if (!O.ctrlKey && !O.altKey && !O.metaKey && O.key.length === 1 && w && !/^\d$/.test(O.key)) {
        O.preventDefault();
        return;
      }
    }, I = (O) => {
      var re;
      O.preventDefault();
      const q = O.clipboardData.getData("text/plain").trim();
      if (w && !/^\d+$/.test(q))
        return;
      const V = q.slice(0, m).padEnd(R.length, "").slice(0, m);
      M(V);
      const J = V.length < m ? V.length : m - 1;
      (re = k.current[J]) == null || re.focus();
    }, z = () => {
      R.length === m && (b == null || b(R));
    }, oe = R.split("").concat(Array(m - R.length).fill(""));
    return /* @__PURE__ */ e.jsxs("div", { ref: G, className: v("w-full", t), ...Z, children: [
      i && /* @__PURE__ */ e.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        i,
        f && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: m }).map((O, q) => /* @__PURE__ */ e.jsx(
          "input",
          {
            ref: $(q),
            type: w ? "tel" : "text",
            inputMode: w ? "numeric" : "text",
            maxLength: 1,
            value: oe[q] || "",
            onChange: (L) => P(L, q),
            onKeyDown: (L) => h(L, q),
            onPaste: q === 0 ? I : void 0,
            onFocus: B,
            disabled: T,
            autoFocus: D && q === 0,
            className: v(
              Ea({
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
            variant: p,
            disabled: R.length !== m || T,
            onClick: z,
            className: "mt-4",
            children: u
          }
        )
      ] })
    ] });
  }
);
Sa.displayName = "InputOTP";
const Qt = {
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
}, en = ({
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
  const g = d ? "px-2" : "", u = d ? "min-w-[20px]" : "w-2.5 h-2.5", p = d ? "h-5" : "h-2.5", m = typeof s == "string" && s in Qt ? Qt[s] : s;
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
          p,
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
}, Ra = {
  FLIGHT_LIGHT: {
    image: "https://design-system-eaip.onrender.com/img/flight-loader-light.gif",
    message: "Loading, please wait..."
  },
  FLIGHT_DARK: {
    image: "https://design-system-eaip.onrender.com/img/flight-loader-dark.gif",
    message: "Loading, please wait..."
  }
}, Aa = {
  "flight-light": "FLIGHT_LIGHT",
  "flight-dark": "FLIGHT_DARK"
}, mt = (t, r) => t === void 0 ? { className: r } : typeof t == "number" ? {
  className: "",
  style: { width: `${t}px`, height: `${t}px` }
} : { className: t }, tn = ({
  variant: t,
  customImage: r,
  customMessage: s,
  width: a = "w-full",
  height: n = "h-full",
  widthImg: l = "w-auto",
  heightImg: c = "h-auto",
  className: i = ""
}) => {
  const d = Aa[t], f = Ra[d], g = mt(a, "w-full"), u = mt(n, "h-full"), p = mt(l, "w-auto"), m = mt(c, "h-auto");
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${g.className} ${u.className} ${i}`,
      style: { ...g.style, ...u.style },
      children: [
        /* @__PURE__ */ e.jsx(
          "img",
          {
            src: r || f.image,
            alt: "Loading animation",
            className: `${p.className} ${m.className}`,
            style: { ...p.style, ...m.style }
          }
        ),
        s ? typeof s == "string" ? /* @__PURE__ */ e.jsx(ut, { variant: "body1", className: "m-0", children: s }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: s }) : /* @__PURE__ */ e.jsx(ut, { variant: "body1", className: "m-0", children: f.message })
      ]
    }
  );
}, Ma = {
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
}, Ca = {
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
}, rn = ({
  variant: t,
  customMessage: r,
  reload: s,
  reloadText: a = "Try Again",
  customImage: n,
  width: l,
  height: c,
  className: i = ""
}) => {
  const d = Ca[t], f = Ma[d];
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
}, sn = ({
  widgets: t,
  className: r
}) => /* @__PURE__ */ e.jsx("div", { className: v("w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", r), children: t.map((s, a) => /* @__PURE__ */ e.jsx(ka, { ...s }, a)) });
export {
  _a as Accordion,
  hs as AutoComplete,
  za as Avatar,
  Oa as Badge,
  en as BadgeNotif,
  ba as Breadcrumbs,
  Re as Button,
  Dt as Card,
  js as CheckBoxGroup,
  wt as Checkbox,
  La as Chip,
  Ds as DatePicker,
  Ts as Dialog,
  Os as DialogActions,
  zs as DialogBody,
  mr as DialogHeader,
  _s as DialogTitle,
  Ls as Divider,
  Qa as ErrorWrapper,
  $a as FileUpload,
  ae as Icon,
  ir as Input,
  Sa as InputOTP,
  tn as Loader,
  rn as NegativeCase,
  Va as Notification,
  Ys as Pagination,
  Mt as PhoneInput,
  Ka as PhoneInputDemo,
  Za as Popover,
  At as PrimitiveDatePicker,
  ma as Progress,
  Gs as Radio,
  Ws as RadioGroup,
  fr as Select,
  ft as SelectItem,
  Ks as Skeleton,
  Fa as Slider,
  Ba as StarRating,
  Ya as StatusIndicator,
  Ga as Stepper,
  Ha as Switch,
  qa as Table,
  Wa as Tabs,
  ut as Text,
  ra as TimePicker,
  br as Toast,
  Ja as ToastProvider,
  na as Toggle,
  Ua as Tooltip,
  ka as WidgetCard,
  sn as WidgetCardGroup,
  ws as buttonVariants,
  ks as cardVariants,
  v as cn,
  Ea as inputOTPVariants,
  sa as toggleVariants,
  Xa as useToast
};
