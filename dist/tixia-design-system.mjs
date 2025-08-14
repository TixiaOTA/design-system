import ve, { useState as te, useEffect as be, forwardRef as je, useRef as fe, useLayoutEffect as Tr, useCallback as De, Children as Vt, isValidElement as bt, cloneElement as Pr, createContext as Mr, useContext as Dr } from "react";
import { createPortal as He } from "react-dom";
import he from "dayjs";
import { useReactTable as _r, getPaginationRowModel as zr, getSortedRowModel as Lr, getCoreRowModel as Or, flexRender as Ft } from "@tanstack/react-table";
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
  var t = ve, r = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(i, d, g) {
    var m, u = {}, x = null, f = null;
    g !== void 0 && (x = "" + g), d.key !== void 0 && (x = "" + d.key), d.ref !== void 0 && (f = d.ref);
    for (m in d) a.call(d, m) && !l.hasOwnProperty(m) && (u[m] = d[m]);
    if (i && i.defaultProps) for (m in d = i.defaultProps, d) u[m] === void 0 && (u[m] = d[m]);
    return { $$typeof: r, type: i, key: x, ref: f, props: u, _owner: n.current };
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
    var t = ve, r = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), i = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), E = Symbol.iterator, v = "@@iterator";
    function k(o) {
      if (o === null || typeof o != "object")
        return null;
      var D = E && o[E] || o[v];
      return typeof D == "function" ? D : null;
    }
    var y = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(o) {
      {
        for (var D = arguments.length, G = new Array(D > 1 ? D - 1 : 0), ee = 1; ee < D; ee++)
          G[ee - 1] = arguments[ee];
        P("error", o, G);
      }
    }
    function P(o, D, G) {
      {
        var ee = y.ReactDebugCurrentFrame, me = ee.getStackAddendum();
        me !== "" && (D += "%s", G = G.concat([me]));
        var pe = G.map(function(ce) {
          return String(ce);
        });
        pe.unshift("Warning: " + D), Function.prototype.apply.call(console[o], console, pe);
      }
    }
    var V = !1, _ = !1, J = !1, B = !1, j = !1, I;
    I = Symbol.for("react.module.reference");
    function p(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === a || o === l || j || o === n || o === g || o === m || B || o === f || V || _ || J || typeof o == "object" && o !== null && (o.$$typeof === x || o.$$typeof === u || o.$$typeof === c || o.$$typeof === i || o.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === I || o.getModuleId !== void 0));
    }
    function K(o, D, G) {
      var ee = o.displayName;
      if (ee)
        return ee;
      var me = D.displayName || D.name || "";
      return me !== "" ? G + "(" + me + ")" : G;
    }
    function R(o) {
      return o.displayName || "Context";
    }
    function T(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
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
        case g:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case i:
            var D = o;
            return R(D) + ".Consumer";
          case c:
            var G = o;
            return R(G._context) + ".Provider";
          case d:
            return K(o, o.render, "ForwardRef");
          case u:
            var ee = o.displayName || null;
            return ee !== null ? ee : T(o.type) || "Memo";
          case x: {
            var me = o, pe = me._payload, ce = me._init;
            try {
              return T(ce(pe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, Z = 0, M, b, z, L, le, O, C;
    function h() {
    }
    h.__reactDisabledLog = !0;
    function A() {
      {
        if (Z === 0) {
          M = console.log, b = console.info, z = console.warn, L = console.error, le = console.group, O = console.groupCollapsed, C = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: h,
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
        Z++;
      }
    }
    function q() {
      {
        if (Z--, Z === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, o, {
              value: M
            }),
            info: Y({}, o, {
              value: b
            }),
            warn: Y({}, o, {
              value: z
            }),
            error: Y({}, o, {
              value: L
            }),
            group: Y({}, o, {
              value: le
            }),
            groupCollapsed: Y({}, o, {
              value: O
            }),
            groupEnd: Y({}, o, {
              value: C
            })
          });
        }
        Z < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = y.ReactCurrentDispatcher, N;
    function F(o, D, G) {
      {
        if (N === void 0)
          try {
            throw Error();
          } catch (me) {
            var ee = me.stack.trim().match(/\n( *(at )?)/);
            N = ee && ee[1] || "";
          }
        return `
` + N + o;
      }
    }
    var re = !1, ue;
    {
      var Te = typeof WeakMap == "function" ? WeakMap : Map;
      ue = new Te();
    }
    function Pe(o, D) {
      if (!o || re)
        return "";
      {
        var G = ue.get(o);
        if (G !== void 0)
          return G;
      }
      var ee;
      re = !0;
      var me = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var pe;
      pe = Q.current, Q.current = null, A();
      try {
        if (D) {
          var ce = function() {
            throw Error();
          };
          if (Object.defineProperty(ce.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ce, []);
            } catch (Me) {
              ee = Me;
            }
            Reflect.construct(o, [], ce);
          } else {
            try {
              ce.call();
            } catch (Me) {
              ee = Me;
            }
            o.call(ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Me) {
            ee = Me;
          }
          o();
        }
      } catch (Me) {
        if (Me && ee && typeof Me.stack == "string") {
          for (var ie = Me.stack.split(`
`), Ce = ee.stack.split(`
`), ye = ie.length - 1, we = Ce.length - 1; ye >= 1 && we >= 0 && ie[ye] !== Ce[we]; )
            we--;
          for (; ye >= 1 && we >= 0; ye--, we--)
            if (ie[ye] !== Ce[we]) {
              if (ye !== 1 || we !== 1)
                do
                  if (ye--, we--, we < 0 || ie[ye] !== Ce[we]) {
                    var ze = `
` + ie[ye].replace(" at new ", " at ");
                    return o.displayName && ze.includes("<anonymous>") && (ze = ze.replace("<anonymous>", o.displayName)), typeof o == "function" && ue.set(o, ze), ze;
                  }
                while (ye >= 1 && we >= 0);
              break;
            }
        }
      } finally {
        re = !1, Q.current = pe, q(), Error.prepareStackTrace = me;
      }
      var at = o ? o.displayName || o.name : "", Je = at ? F(at) : "";
      return typeof o == "function" && ue.set(o, Je), Je;
    }
    function Ie(o, D, G) {
      return Pe(o, !1);
    }
    function $e(o) {
      var D = o.prototype;
      return !!(D && D.isReactComponent);
    }
    function Se(o, D, G) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return Pe(o, $e(o));
      if (typeof o == "string")
        return F(o);
      switch (o) {
        case g:
          return F("Suspense");
        case m:
          return F("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case d:
            return Ie(o.render);
          case u:
            return Se(o.type, D, G);
          case x: {
            var ee = o, me = ee._payload, pe = ee._init;
            try {
              return Se(pe(me), D, G);
            } catch {
            }
          }
        }
      return "";
    }
    var Le = Object.prototype.hasOwnProperty, Qe = {}, _e = y.ReactDebugCurrentFrame;
    function Ve(o) {
      if (o) {
        var D = o._owner, G = Se(o.type, o._source, D ? D.type : null);
        _e.setExtraStackFrame(G);
      } else
        _e.setExtraStackFrame(null);
    }
    function et(o, D, G, ee, me) {
      {
        var pe = Function.call.bind(Le);
        for (var ce in o)
          if (pe(o, ce)) {
            var ie = void 0;
            try {
              if (typeof o[ce] != "function") {
                var Ce = Error((ee || "React class") + ": " + G + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ce.name = "Invariant Violation", Ce;
              }
              ie = o[ce](D, ce, ee, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ye) {
              ie = ye;
            }
            ie && !(ie instanceof Error) && (Ve(me), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ee || "React class", G, ce, typeof ie), Ve(null)), ie instanceof Error && !(ie.message in Qe) && (Qe[ie.message] = !0, Ve(me), S("Failed %s type: %s", G, ie.message), Ve(null));
          }
      }
    }
    var qe = Array.isArray;
    function We(o) {
      return qe(o);
    }
    function tt(o) {
      {
        var D = typeof Symbol == "function" && Symbol.toStringTag, G = D && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return G;
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
    function $(o) {
      if (U(o))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tt(o)), H(o);
    }
    var X = y.ReactCurrentOwner, W = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, oe, se;
    function ge(o) {
      if (Le.call(o, "ref")) {
        var D = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Re(o) {
      if (Le.call(o, "key")) {
        var D = Object.getOwnPropertyDescriptor(o, "key").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Ze(o, D) {
      typeof o.ref == "string" && X.current;
    }
    function Xe(o, D) {
      {
        var G = function() {
          oe || (oe = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        G.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: G,
          configurable: !0
        });
      }
    }
    function Fe(o, D) {
      {
        var G = function() {
          se || (se = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        G.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: G,
          configurable: !0
        });
      }
    }
    var rt = function(o, D, G, ee, me, pe, ce) {
      var ie = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: o,
        key: D,
        ref: G,
        props: ce,
        // Record the component responsible for creating this element.
        _owner: pe
      };
      return ie._store = {}, Object.defineProperty(ie._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ie, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ee
      }), Object.defineProperty(ie, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.freeze && (Object.freeze(ie.props), Object.freeze(ie)), ie;
    };
    function gt(o, D, G, ee, me) {
      {
        var pe, ce = {}, ie = null, Ce = null;
        G !== void 0 && ($(G), ie = "" + G), Re(D) && ($(D.key), ie = "" + D.key), ge(D) && (Ce = D.ref, Ze(D, me));
        for (pe in D)
          Le.call(D, pe) && !W.hasOwnProperty(pe) && (ce[pe] = D[pe]);
        if (o && o.defaultProps) {
          var ye = o.defaultProps;
          for (pe in ye)
            ce[pe] === void 0 && (ce[pe] = ye[pe]);
        }
        if (ie || Ce) {
          var we = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          ie && Xe(ce, we), Ce && Fe(ce, we);
        }
        return rt(o, ie, Ce, me, ee, X.current, ce);
      }
    }
    var Be = y.ReactCurrentOwner, Mt = y.ReactDebugCurrentFrame;
    function st(o) {
      if (o) {
        var D = o._owner, G = Se(o.type, o._source, D ? D.type : null);
        Mt.setExtraStackFrame(G);
      } else
        Mt.setExtraStackFrame(null);
    }
    var pt;
    pt = !1;
    function ht(o) {
      return typeof o == "object" && o !== null && o.$$typeof === r;
    }
    function Dt() {
      {
        if (Be.current) {
          var o = T(Be.current.type);
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
        var D = Dt();
        if (!D) {
          var G = typeof o == "string" ? o : o.displayName || o.name;
          G && (D = `

Check the top-level render call using <` + G + ">.");
        }
        return D;
      }
    }
    function zt(o, D) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var G = kr(D);
        if (_t[G])
          return;
        _t[G] = !0;
        var ee = "";
        o && o._owner && o._owner !== Be.current && (ee = " It was passed a child from " + T(o._owner.type) + "."), st(o), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, ee), st(null);
      }
    }
    function Lt(o, D) {
      {
        if (typeof o != "object")
          return;
        if (We(o))
          for (var G = 0; G < o.length; G++) {
            var ee = o[G];
            ht(ee) && zt(ee, D);
          }
        else if (ht(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var me = k(o);
          if (typeof me == "function" && me !== o.entries)
            for (var pe = me.call(o), ce; !(ce = pe.next()).done; )
              ht(ce.value) && zt(ce.value, D);
        }
      }
    }
    function jr(o) {
      {
        var D = o.type;
        if (D == null || typeof D == "string")
          return;
        var G;
        if (typeof D == "function")
          G = D.propTypes;
        else if (typeof D == "object" && (D.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        D.$$typeof === u))
          G = D.propTypes;
        else
          return;
        if (G) {
          var ee = T(D);
          et(G, o.props, "prop", ee, o);
        } else if (D.PropTypes !== void 0 && !pt) {
          pt = !0;
          var me = T(D);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", me || "Unknown");
        }
        typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Nr(o) {
      {
        for (var D = Object.keys(o.props), G = 0; G < D.length; G++) {
          var ee = D[G];
          if (ee !== "children" && ee !== "key") {
            st(o), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ee), st(null);
            break;
          }
        }
        o.ref !== null && (st(o), S("Invalid attribute `ref` supplied to `React.Fragment`."), st(null));
      }
    }
    var Ot = {};
    function $t(o, D, G, ee, me, pe) {
      {
        var ce = p(o);
        if (!ce) {
          var ie = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ce = wr();
          Ce ? ie += Ce : ie += Dt();
          var ye;
          o === null ? ye = "null" : We(o) ? ye = "array" : o !== void 0 && o.$$typeof === r ? (ye = "<" + (T(o.type) || "Unknown") + " />", ie = " Did you accidentally export a JSX literal instead of a component?") : ye = typeof o, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ye, ie);
        }
        var we = gt(o, D, G, me, pe);
        if (we == null)
          return we;
        if (ce) {
          var ze = D.children;
          if (ze !== void 0)
            if (ee)
              if (We(ze)) {
                for (var at = 0; at < ze.length; at++)
                  Lt(ze[at], o);
                Object.freeze && Object.freeze(ze);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Lt(ze, o);
        }
        if (Le.call(D, "key")) {
          var Je = T(o), Me = Object.keys(D).filter(function(Cr) {
            return Cr !== "key";
          }), xt = Me.length > 0 ? "{key: someKey, " + Me.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ot[Je + xt]) {
            var Ir = Me.length > 0 ? "{" + Me.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, xt, Je, Ir, Je), Ot[Je + xt] = !0;
          }
        }
        return o === a ? Nr(we) : jr(we), we;
      }
    }
    function Er(o, D, G) {
      return $t(o, D, G, !0);
    }
    function Sr(o, D, G) {
      return $t(o, D, G, !1);
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
function de() {
  for (var t, r, s = 0, a = "", n = arguments.length; s < n; s++) (t = arguments[s]) && (r = sr(t)) && (a && (a += " "), a += r);
  return a;
}
const Tt = "-", Fr = (t) => {
  const r = Yr(t), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: a
  } = t;
  return {
    getClassGroupId: (c) => {
      const i = c.split(Tt);
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
  const l = t.join(Tt);
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
  return r.split(Tt).forEach((a) => {
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
    let g = 0, m = 0, u;
    for (let k = 0; k < i.length; k++) {
      let y = i[k];
      if (g === 0) {
        if (y === n && (a || i.slice(k, k + l) === r)) {
          d.push(i.slice(m, k)), m = k + l;
          continue;
        }
        if (y === "/") {
          u = k;
          continue;
        }
      }
      y === "[" ? g++ : y === "]" && g--;
    }
    const x = d.length === 0 ? i : i.substring(m), f = x.startsWith(nr), E = f ? x.substring(1) : x, v = u && u > m ? u - m : void 0;
    return {
      modifiers: d,
      hasImportantModifier: f,
      baseClassName: E,
      maybePostfixModifierPosition: v
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
}), Zr = /\s+/, Xr = (t, r) => {
  const {
    parseClassName: s,
    getClassGroupId: a,
    getConflictingClassGroupIds: n
  } = r, l = [], c = t.trim().split(Zr);
  let i = "";
  for (let d = c.length - 1; d >= 0; d -= 1) {
    const g = c[d], {
      modifiers: m,
      hasImportantModifier: u,
      baseClassName: x,
      maybePostfixModifierPosition: f
    } = s(g);
    let E = !!f, v = a(E ? x.substring(0, f) : x);
    if (!v) {
      if (!E) {
        i = g + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (v = a(x), !v) {
        i = g + (i.length > 0 ? " " + i : i);
        continue;
      }
      E = !1;
    }
    const k = Kr(m).join(":"), y = u ? k + nr : k, S = y + v;
    if (l.includes(S))
      continue;
    l.push(S);
    const P = n(v, E);
    for (let V = 0; V < P.length; ++V) {
      const _ = P[V];
      l.push(y + _);
    }
    i = g + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Jr() {
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
    const g = r.reduce((m, u) => u(m), t());
    return s = qr(g), a = s.cache.get, n = s.cache.set, l = i, i(d);
  }
  function i(d) {
    const g = a(d);
    if (g)
      return g;
    const m = Xr(d, s);
    return n(d, m), m;
  }
  return function() {
    return l(Jr.apply(null, arguments));
  };
}
const xe = (t) => {
  const r = (s) => s[t] || [];
  return r.isThemeGetter = !0, r;
}, lr = /^\[(?:([a-z-]+):)?(.+)\]$/i, es = /^\d+\/\d+$/, ts = /* @__PURE__ */ new Set(["px", "full", "screen"]), rs = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ss = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, as = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ns = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, os = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ye = (t) => nt(t) || ts.has(t) || es.test(t), Ue = (t) => ot(t, "length", gs), nt = (t) => !!t && !Number.isNaN(Number(t)), vt = (t) => ot(t, "number", nt), ct = (t) => !!t && Number.isInteger(Number(t)), ls = (t) => t.endsWith("%") && nt(t.slice(0, -1)), ae = (t) => lr.test(t), Ke = (t) => rs.test(t), is = /* @__PURE__ */ new Set(["length", "size", "percentage"]), cs = (t) => ot(t, is, ir), ds = (t) => ot(t, "position", ir), us = /* @__PURE__ */ new Set(["image", "url"]), ms = (t) => ot(t, us, hs), fs = (t) => ot(t, "", ps), dt = () => !0, ot = (t, r, s) => {
  const a = lr.exec(t);
  return a ? a[1] ? typeof r == "string" ? a[1] === r : r.has(a[1]) : s(a[2]) : !1;
}, gs = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ss.test(t) && !as.test(t)
), ir = () => !1, ps = (t) => ns.test(t), hs = (t) => os.test(t), xs = () => {
  const t = xe("colors"), r = xe("spacing"), s = xe("blur"), a = xe("brightness"), n = xe("borderColor"), l = xe("borderRadius"), c = xe("borderSpacing"), i = xe("borderWidth"), d = xe("contrast"), g = xe("grayscale"), m = xe("hueRotate"), u = xe("invert"), x = xe("gap"), f = xe("gradientColorStops"), E = xe("gradientColorStopPositions"), v = xe("inset"), k = xe("margin"), y = xe("opacity"), S = xe("padding"), P = xe("saturate"), V = xe("scale"), _ = xe("sepia"), J = xe("skew"), B = xe("space"), j = xe("translate"), I = () => ["auto", "contain", "none"], p = () => ["auto", "hidden", "clip", "visible", "scroll"], K = () => ["auto", ae, r], R = () => [ae, r], T = () => ["", Ye, Ue], Y = () => ["auto", nt, ae], Z = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], M = () => ["solid", "dashed", "dotted", "double", "none"], b = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], z = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], L = () => ["", "0", ae], le = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], O = () => [nt, ae];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [dt],
      spacing: [Ye, Ue],
      blur: ["none", "", Ke, ae],
      brightness: O(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Ke, ae],
      borderSpacing: R(),
      borderWidth: T(),
      contrast: O(),
      grayscale: L(),
      hueRotate: O(),
      invert: L(),
      gap: R(),
      gradientColorStops: [t],
      gradientColorStopPositions: [ls, Ue],
      inset: K(),
      margin: K(),
      opacity: O(),
      padding: R(),
      saturate: O(),
      scale: O(),
      sepia: L(),
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
        aspect: ["auto", "square", "video", ae]
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
        "break-after": le()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": le()
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
        object: [...Z(), ae]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: p()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": p()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": p()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: I()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": I()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": I()
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
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
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
        z: ["auto", ct, ae]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: K()
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
        flex: ["1", "auto", "initial", "none", ae]
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
        order: ["first", "last", "none", ct, ae]
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
          span: ["full", ct, ae]
        }, ae]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Y()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Y()
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
          span: [ct, ae]
        }, ae]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Y()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Y()
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
        "auto-cols": ["auto", "min", "max", "fr", ae]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ae]
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
        justify: ["normal", ...z()]
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
        content: ["normal", ...z(), "baseline"]
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
        "place-content": [...z(), "baseline"]
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
        p: [S]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [S]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [S]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [S]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [S]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [S]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [S]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [S]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [S]
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
        "space-x": [B]
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
        "space-y": [B]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ae, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ae, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ae, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [Ke]
        }, Ke]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ae, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ae, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ae, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ae, r, "auto", "min", "max", "fit"]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ae]
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
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ye, ae]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ae]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ae]
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
        decoration: [...M(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ye, Ue]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ye, ae]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ae]
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
        content: ["none", ae]
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
        bg: [...Z(), ds]
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
        from: [E]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [E]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [E]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [f]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [f]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [f]
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
        border: [...M(), "hidden"]
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
        divide: M()
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
        outline: ["", ...M()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ye, ae]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ye, Ue]
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
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ye, Ue]
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
        "mix-blend": [...b(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": b()
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
        "drop-shadow": ["", "none", Ke, ae]
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
        saturate: [P]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [_]
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
        "backdrop-grayscale": [g]
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
        "backdrop-saturate": [P]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [_]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ae]
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
        ease: ["linear", "in", "out", "in-out", ae]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", ae]
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
        scale: [V]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [V]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [V]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ct, ae]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [j]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [j]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [J]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [J]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ae]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ae]
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
        "will-change": ["auto", "scroll", "contents", "transform", ae]
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
        stroke: [Ye, Ue, vt]
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
}, Oe = /* @__PURE__ */ Qr(xs);
function w(...t) {
  return Oe(de(t));
}
const Wt = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, Ut = de, Ne = (t, r) => (s) => {
  var a;
  if ((r == null ? void 0 : r.variants) == null) return Ut(t, s == null ? void 0 : s.class, s == null ? void 0 : s.className);
  const { variants: n, defaultVariants: l } = r, c = Object.keys(n).map((g) => {
    const m = s == null ? void 0 : s[g], u = l == null ? void 0 : l[g];
    if (m === null) return null;
    const x = Wt(m) || Wt(u);
    return n[g][x];
  }), i = s && Object.entries(s).reduce((g, m) => {
    let [u, x] = m;
    return x === void 0 || (g[u] = x), g;
  }, {}), d = r == null || (a = r.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((g, m) => {
    let { class: u, className: x, ...f } = m;
    return Object.entries(f).every((E) => {
      let [v, k] = E;
      return Array.isArray(k) ? k.includes({
        ...l,
        ...i
      }[v]) : {
        ...l,
        ...i
      }[v] === k;
    }) ? [
      ...g,
      u,
      x
    ] : g;
  }, []);
  return Ut(t, c, d, s == null ? void 0 : s.class, s == null ? void 0 : s.className);
}, ne = ({
  icon: t,
  className: r,
  size: s,
  color: a,
  rotate: n,
  flip: l,
  spin: c,
  inline: i = !0,
  mode: d = "svg",
  ...g
}) => {
  const [m, u] = te(null), [x, f] = te(!0), [E, v] = te(null);
  return be(() => {
    let k = !0;
    return (async () => {
      try {
        const { Icon: S } = await import("./iconify-Dqt3MVen.mjs");
        k && (u(() => S), f(!1));
      } catch (S) {
        console.error("Failed to load icon:", S), k && (v(S), f(!1));
      }
    })(), () => {
      k = !1;
    };
  }, []), x ? /* @__PURE__ */ e.jsx("span", { style: { width: s, height: s } }) : E || !m ? null : /* @__PURE__ */ e.jsx(
    m,
    {
      icon: t,
      className: w(
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
      ...g
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
    labelPlacement: g = "top",
    fullWidth: m = !1,
    leftIcon: u,
    rightIcon: x,
    onRightIconClick: f,
    id: E,
    ...v
  }, k) => {
    const y = E || ve.useId(), S = `${y}-helper`, P = `${y}-error`, V = /* @__PURE__ */ e.jsxs("div", { className: w("relative", !m && "inline-block"), children: [
      u && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ e.jsx(ne, { icon: u, className: "w-4 h-4" }) }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          id: y,
          type: "text",
          ref: k,
          className: w(
            bs({ variant: n ? "error" : r, size: s, rounded: a, fullWidth: m }),
            u && "pl-10",
            x && "pr-10",
            t
          ),
          "aria-describedby": n ? P : c ? S : void 0,
          "aria-invalid": n,
          "aria-required": d,
          ...v
        }
      ),
      x && /* @__PURE__ */ e.jsx(
        "div",
        {
          className: w(
            "absolute right-3 top-1/2 -translate-y-1/2 text-neutral",
            f && "cursor-pointer hover:text-primary-600"
          ),
          onClick: f,
          role: f ? "button" : void 0,
          tabIndex: f ? 0 : void 0,
          children: /* @__PURE__ */ e.jsx(ne, { icon: x, className: "w-4 h-4" })
        }
      )
    ] }), _ = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      n && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: P, children: l }),
      !n && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: S, children: c })
    ] });
    return g === "left" ? /* @__PURE__ */ e.jsx("div", { className: w(m ? "w-full" : "inline-block", t), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
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
      /* @__PURE__ */ e.jsxs("div", { className: w("flex-1", !m && "inline-block"), children: [
        V,
        _
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: w(m ? "w-full" : "inline-block", t), children: [
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
      V,
      _
    ] });
  }
);
cr.displayName = "Input";
const ft = ve.forwardRef(
  ({ className: t, children: r, selected: s, disabled: a, ...n }, l) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: l,
      className: w(
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
const dr = typeof window < "u", Ee = () => dr ? window : {
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
    leftIcon: g,
    rightIcon: m,
    error: u = !1,
    errorText: x,
    helperText: f,
    label: E,
    required: v = !1,
    labelPlacement: k = "top",
    fullWidth: y = !1,
    value: S,
    onChange: P,
    onFocus: V,
    onBlur: _,
    showClear: J = !1,
    onClear: B,
    searchType: j = "include",
    initialItemsToShow: I,
    itemsToLoad: p = 10,
    maxDropdownHeight: K = 300,
    noOptionsMessage: R = "No options found",
    scrollMoreMessage: T = "",
    allOptionsShownMessage: Y = "",
    ...Z
  }, M) => {
    const [b, z] = te(!1), [L, le] = te(S || ""), [O, C] = te(I || 0), h = fe(null), A = fe(null), q = fe(null), Q = fe(null), N = a !== void 0, re = `autocomplete-${ve.useId().replace(/:/g, "")}`, ue = () => {
      if (!b || !A.current || !q.current) return;
      const { bottom: H, top: $, left: X, width: W } = A.current.getBoundingClientRect(), oe = q.current, se = Ee(), ge = se.innerHeight - H, Re = $, Ze = Math.min(K, 300), Xe = ge < Ze, Fe = Re > ge, rt = Xe && Fe;
      Object.assign(oe.style, {
        position: "fixed",
        left: `${X}px`,
        width: `${W}px`
      }), rt ? Object.assign(oe.style, {
        bottom: `${se.innerHeight - $ + 4}px`,
        top: "auto",
        maxHeight: `${Re - 8}px`
      }) : Object.assign(oe.style, {
        top: `${H + 4}px`,
        bottom: "auto",
        maxHeight: `${ge - 8}px`
      });
    };
    be(() => {
      const H = Ee(), $ = ke(), X = () => {
        b && ue();
      }, W = () => {
        b && ue();
      }, oe = (ge) => {
        ge.detail.id !== re && z(!1);
      }, se = (ge) => {
        const Re = ge.target;
        h.current && !h.current.contains(Re) && q.current && !q.current.contains(Re) && z(!1);
      };
      return b && (ue(), H.addEventListener("scroll", X, !0), H.addEventListener("resize", W)), $.addEventListener(yt, oe), $.addEventListener("click", se), () => {
        H.removeEventListener("scroll", X, !0), H.removeEventListener("resize", W), $.removeEventListener(yt, oe), $.removeEventListener("click", se);
      };
    }, [b, re]), be(() => {
      le(S || "");
    }, [S]);
    const Te = (H) => {
      const { value: $ } = H.target;
      if (le($), !$.trim()) {
        z(!1);
        return;
      }
      const X = r.some(({ label: W }) => {
        const oe = $.toLowerCase().trim(), se = W.toLowerCase();
        return j === "startsWith" ? se.startsWith(oe) : se.includes(oe);
      });
      z(X), P == null || P(H);
    }, Pe = (H) => {
      H.stopPropagation(), le(""), B == null || B();
      const $ = new Event("change");
      $.target = { value: "" }, P == null || P($);
    }, Ie = (H) => {
      var oe;
      if (!H) return;
      const { value: $, label: X } = H;
      le(X), z(!1), s == null || s($);
      const W = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: H }
      });
      (oe = A.current) == null || oe.dispatchEvent(W);
    }, $e = (H) => {
      _ == null || _(H);
    }, Se = r.filter(({ label: H }) => {
      const $ = L.toLowerCase().trim(), X = H.toLowerCase();
      return j === "startsWith" ? X.startsWith($) : X.includes($);
    }), Le = (H) => {
      N || (ke().dispatchEvent(
        new CustomEvent(yt, {
          detail: { id: re }
        })
      ), Se.length > 0 && z(!0)), V == null || V(H);
    }, Qe = () => {
      if (!Q.current || I === void 0 || I <= 0) return;
      const { scrollTop: H, scrollHeight: $, clientHeight: X } = Q.current;
      H + X >= $ - 10 && C((oe) => Math.min(oe + p, Se.length));
    };
    be(() => {
      I !== void 0 && I > 0 && C(I);
    }, [L, I]);
    const _e = I !== void 0 && I > 0 ? Se.slice(0, O) : Se, Ve = (H, $) => H ? H.replace(/\{(\w+)\}/g, (X, W) => {
      var oe;
      return ((oe = $[W]) == null ? void 0 : oe.toString()) || X;
    }) : "", et = N ? a : b, qe = J && L && !Z.disabled && !Z.readOnly, We = qe ? "mdi:close" : m, tt = (H) => {
      if (!(!et || _e.length === 0))
        switch (H.key) {
          case "Enter":
            H.preventDefault(), _e.length === 1 && Ie(_e[0]);
            break;
          case "Tab":
            _e.length === 1 && (H.preventDefault(), Ie(_e[0]));
            break;
          case "Escape":
            H.preventDefault(), z(!1);
            break;
        }
    }, U = () => {
      if (!et) return null;
      const H = ke();
      if (!("body" in H)) return null;
      const $ = /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: q,
          className: "fixed z-[9999] min-w-[8rem] rounded-md border border-neutral-200 bg-white py-1 shadow-lg overflow-hidden",
          style: { maxHeight: `${K}px` },
          onClick: (X) => X.stopPropagation(),
          children: /* @__PURE__ */ e.jsx(
            "div",
            {
              ref: Q,
              className: "overflow-auto",
              style: { maxHeight: `${K}px` },
              onScroll: Qe,
              children: n ? /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ e.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }) }) : _e.length > 0 ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                _e.map((X) => /* @__PURE__ */ e.jsx(
                  ft,
                  {
                    value: X.value,
                    selected: X.label === L,
                    onClick: () => Ie(X),
                    children: l ? l(X) : X.label
                  },
                  X.value
                )),
                I !== void 0 && I > 0 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  O < Se.length && T && /* @__PURE__ */ e.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: Ve(T, {
                    current: O,
                    total: Se.length
                  }) }),
                  O >= Se.length && Se.length > 0 && Y && /* @__PURE__ */ e.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: Ve(Y, {
                    total: Se.length
                  }) })
                ] })
              ] }) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-2 text-sm text-neutral", children: R })
            }
          )
        }
      );
      return He($, H.body);
    };
    return /* @__PURE__ */ e.jsxs("div", { ref: h, className: w("relative", y ? "w-full" : "inline-block"), children: [
      /* @__PURE__ */ e.jsx("div", { ref: A, className: w(!y && "inline-block"), children: /* @__PURE__ */ e.jsx(
        cr,
        {
          ref: M,
          value: L,
          onChange: Te,
          onFocus: Le,
          onBlur: $e,
          onKeyDown: tt,
          variant: c,
          size: i,
          rounded: d,
          leftIcon: g,
          rightIcon: We,
          error: u,
          errorText: x,
          helperText: f,
          label: E,
          required: v,
          labelPlacement: k,
          fullWidth: y,
          className: t,
          ...Z,
          onClick: qe ? Pe : Z.onClick
        }
      ) }),
      U()
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
}, La = ({
  items: t,
  multiple: r = !1,
  defaultOpenIds: s = [],
  icon: a = "mdi:chevron-down",
  iconPosition: n = "right",
  className: l,
  contentClassName: c,
  variant: i = "primary",
  shadow: d = "none",
  rounded: g = "xl"
}) => {
  const [m, u] = te(s), x = (E) => {
    u(
      r ? (v) => v.includes(E) ? v.filter((k) => k !== E) : [...v, E] : (v) => v.includes(E) ? [] : [E]
    );
  }, f = ys[i];
  return /* @__PURE__ */ e.jsx("div", { className: de("w-full space-y-2", l), children: t.map((E) => {
    const v = m.includes(E.id), k = !!E.disabled;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: de(
          "border overflow-hidden",
          "bg-white",
          "border-gray-200",
          ws[d],
          ks[g],
          "transition-shadow duration-200"
        ),
        children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => !k && x(E.id),
              disabled: k,
              className: de(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                f.hover,
                v && f.active,
                f.text,
                k && "opacity-50 cursor-not-allowed"
              ),
              children: [
                n === "left" && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: de(
                      "mr-3 transition-transform duration-200",
                      v && "rotate-180"
                    ),
                    children: /* @__PURE__ */ e.jsx(ne, { icon: a, className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ e.jsx("div", { className: "flex-1", children: E.title }),
                n === "right" && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: de(
                      "ml-3 transition-transform duration-200",
                      v && "rotate-180"
                    ),
                    children: /* @__PURE__ */ e.jsx(ne, { icon: a, className: "w-5 h-5" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: de(
                "grid transition-all duration-200 ease-in-out",
                v ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              ),
              children: /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: de(
                    "p-4 border-t border-gray-200",
                    c
                  ),
                  children: E.content
                }
              ) })
            }
          )
        ]
      },
      E.id
    );
  }) });
}, Oa = ({
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
  }, d = Oe(
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
      className: Oe("w-full h-full", l === "cover" ? "object-cover" : "object-contain")
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
  }, d = Oe(
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
), Ae = je(
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
    children: g,
    ...m
  }, u) => {
    const f = d || !!(c || i) && !g;
    return /* @__PURE__ */ e.jsxs(
      "button",
      {
        className: w(
          js({
            variant: r,
            size: s,
            rounded: f ? "full" : a,
            fullWidth: n,
            isIconOnly: f,
            className: t
          })
        ),
        ref: u,
        disabled: m.disabled || l,
        ...m,
        children: [
          l && /* @__PURE__ */ e.jsx("span", { className: "animate-spin inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full" }),
          c && !l && /* @__PURE__ */ e.jsx(ne, { icon: c, className: "w-4 h-4", inline: !0 }),
          g && /* @__PURE__ */ e.jsx("span", { children: g }),
          i && !l && /* @__PURE__ */ e.jsx(ne, { icon: i, className: "w-4 h-4", inline: !0 })
        ]
      }
    );
  }
);
Ae.displayName = "Button";
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
), Pt = je(
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
      className: w(Ns({ variant: r, padding: s, shadow: a, rounded: n, className: t })),
      ref: i,
      ...c
    }
  )
);
Pt.displayName = "Card";
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
  const g = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }, m = {
    primary: "checked:bg-primary-600 checked:border-primary-600 hover:border-primary-600",
    secondary: "checked:bg-secondary-600 checked:border-secondary-600 hover:border-secondary-600",
    success: "checked:bg-success-600 checked:border-success-600 hover:border-success-600",
    warning: "checked:bg-warning-600 checked:border-warning-600 hover:border-warning-600",
    error: "checked:bg-danger-600 checked:border-danger-600 hover:border-danger-600"
  }, u = r ? "border-danger-600 hover:border-danger-700" : "", f = Oe(
    "border-2 transition-colors duration-200",
    "appearance-none cursor-pointer",
    "checked:bg-no-repeat checked:bg-center",
    l === "circle" ? 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]' : 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM0w0LjUgOC41TDIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=")]',
    {
      square: "rounded",
      circle: "rounded-full"
    }[l],
    g[n],
    m[c],
    u,
    s && "opacity-50 cursor-not-allowed",
    i
  ), E = Oe(
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
          className: f,
          disabled: s,
          ref: (v) => {
            v && (v.indeterminate = a);
          },
          ...d
        }
      ),
      t && /* @__PURE__ */ e.jsx("label", { className: E, children: t })
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
    helperText: g,
    label: m,
    required: u = !1,
    labelPlacement: x = "top",
    fullWidth: f = !1,
    disabled: E = !1,
    variant: v = "square",
    color: k = "primary",
    checkboxSize: y = "sm",
    showSelectAll: S = !1,
    selectAllText: P = "Select All",
    indeterminateSelectAll: V = !0,
    gap: _,
    selectAllGap: J,
    id: B,
    ...j
  }, I) => {
    const p = B || ve.useId(), K = `${p}-helper`, R = `${p}-error`, T = `${p}-group`, [Y, Z] = ve.useState(a), M = s !== void 0 ? s : Y, b = (N, F) => {
      const re = F ? [...M, N] : M.filter((ue) => ue !== N);
      s === void 0 && Z(re), n == null || n(re);
    }, z = (N) => {
      const F = N ? r.map((re) => re.value) : [];
      s === void 0 && Z(F), n == null || n(F);
    }, L = r.length > 0 && M.length === r.length, le = M.length > 0 && M.length < r.length, O = V && le, C = (N) => N === "none" ? "gap-0" : N === "xs" ? "gap-1" : N === "sm" ? "gap-2" : N === "md" ? "gap-3" : N === "lg" ? "gap-4" : N === "xl" ? "gap-6" : null, h = C(_), A = C(J), q = /* @__PURE__ */ e.jsx("div", { className: w("relative", !f && "inline-block"), children: /* @__PURE__ */ e.jsxs(
      "fieldset",
      {
        ref: I,
        id: T,
        className: w(
          kt({ layout: l, size: c }),
          h,
          t
        ),
        "aria-describedby": i ? R : g ? K : void 0,
        "aria-invalid": i,
        "aria-required": u,
        ...j,
        children: [
          S && r.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: w(
            "flex flex-col",
            A || h || kt({ layout: "vertical", size: c })
          ), children: [
            /* @__PURE__ */ e.jsx(
              wt,
              {
                label: P,
                checked: L,
                indeterminate: O,
                onChange: (N) => z(N.target.checked),
                disabled: E,
                variant: v,
                color: i ? "error" : k,
                variantSize: y,
                error: i ? " " : void 0
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: w(
              "flex",
              l === "vertical" && "flex-col",
              l === "horizontal" && "flex-row flex-wrap",
              l === "grid" && "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
              h || kt({ layout: l, size: c })
            ), children: r.map((N) => /* @__PURE__ */ e.jsx(
              wt,
              {
                label: N.label,
                checked: M.includes(N.value),
                onChange: (F) => b(N.value, F.target.checked),
                disabled: E || N.disabled,
                indeterminate: N.indeterminate,
                variant: v,
                color: i ? "error" : k,
                variantSize: y,
                error: i ? " " : void 0
              },
              N.value
            )) })
          ] }),
          !S && /* @__PURE__ */ e.jsx(e.Fragment, { children: r.map((N) => /* @__PURE__ */ e.jsx(
            wt,
            {
              label: N.label,
              checked: M.includes(N.value),
              onChange: (F) => b(N.value, F.target.checked),
              disabled: E || N.disabled,
              indeterminate: N.indeterminate,
              variant: v,
              color: i ? "error" : k,
              variantSize: y,
              error: i ? " " : void 0
            },
            N.value
          )) })
        ]
      }
    ) }), Q = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      i && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: R, children: d }),
      !i && g && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: K, children: g })
    ] });
    return x === "left" ? /* @__PURE__ */ e.jsx("div", { className: w(f ? "w-full" : "inline-block", t), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
      m && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: T,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            m,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: w("flex-1", !f && "inline-block"), children: [
        q,
        Q
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: w(f ? "w-full" : "inline-block", t), children: [
      m && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: T,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            m,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      q,
      Q
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
    className: w(
      "inline-flex items-center gap-1.5 font-medium",
      Ss[r][s],
      Rs[a],
      As[n],
      c
    ),
    children: [
      i && /* @__PURE__ */ e.jsx("span", { className: "inline-flex items-center", children: /* @__PURE__ */ e.jsx(ne, { icon: i, className: "w-4 h-4" }) }),
      t,
      l && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: l,
          className: "ml-1 rounded-full hover:bg-black/10 p-0.5",
          "aria-label": "Close",
          children: /* @__PURE__ */ e.jsx(ne, { icon: "mdi:close", className: "w-3 h-3" })
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
var Is = ur.exports;
const Cs = /* @__PURE__ */ rr(Is);
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
var Ts = mr.exports;
const Ps = /* @__PURE__ */ rr(Ts);
he.extend(Cs);
he.extend(Ps);
const Ms = Ne(
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
    errorText: g,
    helperText: m,
    label: u,
    required: x = !1,
    labelPlacement: f = "top",
    fullWidth: E = !1,
    className: v,
    placeholder: k = "Select date",
    leftIcon: y,
    rightIcon: S,
    monthsToShow: P = 1,
    valueFormatter: V,
    rangeStart: _,
    rangeEnd: J,
    closeOnSelect: B = !0,
    calendarFooter: j,
    format: I = "DD-MM-YYYY",
    allowInput: p = !1,
    ...K
  }) => {
    const [R, T] = te(!1), [Y, Z] = te(t), [M, b] = te(t || /* @__PURE__ */ new Date()), [z, L] = te(!1), [le, O] = te(""), C = fe(null), h = fe(null), A = fe(null), q = fe(null), Q = fe(null);
    be(() => {
      Z(t || void 0), O(t ? N(t, I) : "");
    }, [t, I]), be(() => {
      O(Y ? N(Y, I) : "");
    }, [Y, I]);
    const N = (U, H) => {
      const $ = U.getDate().toString().padStart(2, "0"), X = (U.getMonth() + 1).toString().padStart(2, "0"), W = U.getFullYear().toString();
      switch (H) {
        case "DD-MM-YYYY":
          return `${$}-${X}-${W}`;
        case "YYYY-MM-DD":
          return `${W}-${X}-${$}`;
        case "MM-DD-YYYY":
          return `${X}-${$}-${W}`;
        default:
          return `${$}-${X}-${W}`;
      }
    }, F = (U, H) => {
      const X = U.replace(/[^\d-]/g, "").split("-");
      if (X.length !== 3) return null;
      let W, oe, se;
      switch (H) {
        case "DD-MM-YYYY":
          [W, oe, se] = X.map(Number);
          break;
        case "YYYY-MM-DD":
          [se, oe, W] = X.map(Number);
          break;
        case "MM-DD-YYYY":
          [oe, W, se] = X.map(Number);
          break;
        default:
          [W, oe, se] = X.map(Number);
      }
      if (isNaN(W) || isNaN(oe) || isNaN(se) || oe < 1 || oe > 12 || W < 1 || W > 31 || se < 1900 || se > 2099) return null;
      const ge = new Date(se, oe - 1, W);
      return ge.getDate() !== W || ge.getMonth() !== oe - 1 || ge.getFullYear() !== se ? null : ge;
    };
    be(() => {
      if (z && q.current) {
        const U = he(M).year(), H = q.current.querySelectorAll("[data-year]"), $ = Array.from(H).find(
          (X) => parseInt(X.getAttribute("data-year") || "0") === U
        );
        $ && $.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center"
        });
      }
    }, [z, M]);
    const re = () => {
      if (!R || !h.current || !A.current) return;
      const { bottom: U, left: H, width: $, top: X } = h.current.getBoundingClientRect(), W = A.current, oe = Ee(), se = oe.innerHeight - U, ge = X, Ze = se < (P === 2 ? 400 : 350), Xe = ge > se, Fe = Ze && Xe;
      P === 2 ? (Object.assign(W.style, {
        position: "fixed",
        left: `${H}px`,
        minWidth: "500px",
        width: "auto",
        transform: ""
      }), Fe ? Object.assign(W.style, {
        bottom: `${oe.innerHeight - X + 4}px`,
        top: "auto",
        maxHeight: `${ge - 8}px`
      }) : Object.assign(W.style, {
        top: `${U + 4}px`,
        bottom: "auto",
        maxHeight: `${se - 8}px`
      })) : (Object.assign(W.style, {
        position: "fixed",
        left: `${H + $ / 2}px`,
        width: "320px",
        maxWidth: "100vw",
        transform: "translateX(-50%)"
      }), Fe ? Object.assign(W.style, {
        bottom: `${oe.innerHeight - X + 4}px`,
        top: "auto",
        maxHeight: `${ge - 8}px`
      }) : Object.assign(W.style, {
        top: `${U + 4}px`,
        bottom: "auto",
        maxHeight: `${se - 8}px`
      }));
    };
    be(() => {
      const U = Ee(), H = ke(), $ = () => {
        R && re();
      }, X = () => {
        R && re();
      }, W = (oe) => {
        oe.key === "Escape" && R && (T(!1), L(!1));
      };
      return R && (re(), U.addEventListener("scroll", $, !0), U.addEventListener("resize", X), H.addEventListener("keydown", W)), () => {
        U.removeEventListener("scroll", $, !0), U.removeEventListener("resize", X), H.removeEventListener("keydown", W);
      };
    }, [R]);
    const ue = (U) => {
      if (_ !== void 0 && J !== void 0)
        if (_ && J)
          Z(U), O(N(U, I)), r == null || r(U);
        else if (_) {
          const $ = U;
          he($).isBefore(_), Z($), O(N($, I)), r == null || r($), T(!1), L(!1);
        } else
          Z(U), O(N(U, I)), r == null || r(U);
      else
        Z(U), O(N(U, I)), r == null || r(U), T(!1), L(!1);
    }, Te = () => {
      b(he(M).subtract(1, "month").toDate());
    }, Pe = () => {
      b(he(M).add(1, "month").toDate());
    }, Ie = (U) => {
      const H = he(U).startOf("month"), $ = he(U).endOf("month"), X = [];
      let W = H;
      for (; W.isBefore($) || W.isSame($, "day"); )
        X.push(W.toDate()), W = W.add(1, "day");
      return X;
    }, $e = (U) => !!(s && he(U).isBefore(s, "day") || a && he(U).isAfter(a, "day")), Se = (U) => {
      if (!p) return;
      const $ = U.target.value.replace(/[^\d-]/g, "");
      if ($.length < le.length) {
        O($);
        return;
      }
      if ($.replace(/-/g, "").length > 8)
        return;
      let W = $;
      I === "DD-MM-YYYY" ? ($.length === 2 && !$.includes("-") || $.length === 5 && $.split("-").length === 2) && (W = $ + "-") : I === "YYYY-MM-DD" ? ($.length === 4 && !$.includes("-") || $.length === 7 && $.split("-").length === 2) && (W = $ + "-") : I === "MM-DD-YYYY" && ($.length === 2 && !$.includes("-") || $.length === 5 && $.split("-").length === 2) && (W = $ + "-"), O(W);
    }, Le = () => {
      if (!p) return;
      const U = F(le, I);
      if (U) {
        if (s && U < s) {
          O(N(s, I)), Z(s), r == null || r(s);
          return;
        }
        if (a && U > a) {
          O(N(a, I)), Z(a), r == null || r(a);
          return;
        }
        Z(U), r == null || r(U), O(N(U, I));
      } else
        O(Y ? N(Y, I) : "");
    }, Qe = () => {
      p && T(!1);
    }, _e = (U) => {
      p && U.key === "Enter" && (U.preventDefault(), Le());
    }, Ve = (U) => {
      const H = he(M).year(U).toDate();
      b(H), L(!1);
    }, et = () => {
      if (!z) return null;
      const U = he(M).year(), H = 1900, X = Array.from(
        { length: 2099 - H + 1 },
        (W, oe) => H + oe
      );
      return /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: q,
          className: "grid grid-cols-5 gap-2 p-2 overflow-y-auto max-h-[300px]",
          children: X.map((W) => /* @__PURE__ */ e.jsx(
            "div",
            {
              "data-year": W,
              onClick: () => Ve(W),
              className: w(
                W === U && "bg-primary-50 text-primary",
                "text-sm cursor-pointer p-2"
              ),
              children: W
            },
            W
          ))
        }
      );
    }, qe = () => {
      if (!R) return null;
      const U = ke();
      if (!("body" in U)) return null;
      const H = Array.from({ length: P }).map(
        ($, X) => he(M).add(X, "month").toDate()
      );
      return He(
        /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "fixed inset-0 z-[9998]",
              onClick: () => {
                z || T(!1);
              }
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: A,
              className: "fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-lg",
              onClick: ($) => $.stopPropagation(),
              children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between p-2 border-b border-gray-200", children: [
                  /* @__PURE__ */ e.jsx(
                    Ae,
                    {
                      onClick: Te,
                      variant: "ghost",
                      size: "sm",
                      leftIcon: "mdi:chevron-left"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-900", children: P === 1 ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e.jsx("span", { children: he(M).format("MMMM") }),
                    /* @__PURE__ */ e.jsxs(
                      "div",
                      {
                        className: "cursor-pointer flex items-center gap-1",
                        onClick: () => L(!z),
                        children: [
                          /* @__PURE__ */ e.jsx("span", { children: he(M).format("YYYY") }),
                          /* @__PURE__ */ e.jsx(Ae, { variant: "ghost", size: "sm", leftIcon: z ? "mdi:chevron-up" : "mdi:chevron-down" })
                        ]
                      }
                    )
                  ] }) : `${he(M).format("MMMM YYYY")} - ${he(
                    M
                  ).add(P - 1, "month").format("MMMM YYYY")}` }) }),
                  /* @__PURE__ */ e.jsx(
                    Ae,
                    {
                      onClick: Pe,
                      variant: "ghost",
                      size: "sm",
                      rightIcon: "mdi:chevron-right"
                    }
                  )
                ] }),
                z ? et() : /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: w(
                      P === 2 ? "flex gap-5 p-2 mx-auto w-fit" : "justify-between p-2 mx-auto w-fit"
                    ),
                    children: H.map(($, X) => {
                      const W = Ie($), oe = he($).startOf("month").day();
                      return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-7 gap-y-1 my-1", children: [
                          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                            (se, ge) => {
                              const Re = ge === 0 || ge === 6;
                              return /* @__PURE__ */ e.jsx(
                                "div",
                                {
                                  className: w(
                                    "text-center text-xs font-medium text-neutral",
                                    Re && "text-danger"
                                  ),
                                  children: se
                                },
                                se
                              );
                            }
                          ),
                          Array.from({ length: oe }).map(
                            (se, ge) => /* @__PURE__ */ e.jsx("div", {}, `empty-${ge}`)
                          ),
                          W.map((se) => {
                            const ge = Y && he(se).isSame(Y, "day"), Re = $e(se), Ze = he(se).isSame(
                              $,
                              "month"
                            ), Xe = _ && J && he(se).isSameOrAfter(_, "day") && he(se).isSameOrBefore(J, "day"), Fe = _ && he(se).isSame(_, "day"), rt = J && he(se).isSame(J, "day"), gt = he(se).day() === 0 || he(se).day() === 6, Be = _ && J;
                            return /* @__PURE__ */ e.jsx("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ e.jsx(
                              "div",
                              {
                                className: w(
                                  Xe && "rounded-none bg-primary-50",
                                  Be && Fe && "rounded-l-full",
                                  Be && rt && "rounded-r-full"
                                ),
                                children: /* @__PURE__ */ e.jsx(
                                  "button",
                                  {
                                    onClick: () => !Re && ue(se),
                                    disabled: Re,
                                    className: w(
                                      "p-2 text-sm transition-colors duration-200 w-10 h-10 rounded-full",
                                      gt && "!text-danger",
                                      ge && "bg-primary !text-white hover:bg-primary-600 active:bg-primary-700",
                                      ge && !Be && "rounded-full",
                                      !ge && !Re && "hover:bg-primary-50 active:bg-primary-100",
                                      !Ze && "text-neutral-400",
                                      Re && "opacity-50 cursor-not-allowed",
                                      // inRange && "bg-primary-50 text-primary-900 rounded-none",
                                      Be && Fe && "!bg-primary !text-white !rounded-full",
                                      Be && rt && "!bg-primary !text-white !rounded-full"
                                    ),
                                    children: he(se).format("D")
                                  },
                                  se.toString()
                                )
                              }
                            ) });
                          })
                        ] }),
                        j
                      ] }, X);
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
        className: w("relative", !E && "inline-block"),
        ref: h,
        onClick: () => !i && !p && T(!R),
        children: [
          y && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (U) => {
                U.stopPropagation(), i || T(!R);
              },
              children: /* @__PURE__ */ e.jsx(ne, { icon: y, className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: Q,
              type: "text",
              value: p ? le : V ? V() : Y ? N(Y, I) : "",
              placeholder: p ? I : k,
              readOnly: !p,
              maxLength: p ? 10 : void 0,
              onChange: Se,
              onBlur: Le,
              onFocus: Qe,
              onKeyDown: _e,
              className: w(
                Ms({ variant: d ? "error" : n, size: l, rounded: c, fullWidth: E }),
                y && "pl-10",
                S && "pr-10",
                v
              ),
              disabled: i,
              ...K
            }
          ),
          S && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (U) => {
                U.stopPropagation(), i || T(!R);
              },
              children: /* @__PURE__ */ e.jsx(ne, { icon: S, className: "w-4 h-4" })
            }
          )
        ]
      }
    ), tt = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      g && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", children: g }),
      !g && m && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", children: m })
    ] });
    return f === "left" ? /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: w(E ? "w-full" : "inline-block", v),
        ref: C,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
            u && /* @__PURE__ */ e.jsxs("label", { className: "block text-sm text-neutral-900 pt-2", children: [
              u,
              x && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: w("flex-1", !E && "inline-block"), children: [
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
        className: w(E ? "w-full" : "inline-block", v),
        ref: C,
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
  ...g
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
        onChange: (f) => s == null ? void 0 : s(f),
        monthsToShow: a,
        calendarFooter: n,
        error: l,
        errorText: c,
        format: i,
        allowInput: d,
        ...g
      }
    );
  }
  if (t === "range") {
    let [x, f] = Array.isArray(r) ? r : m;
    const E = (k) => {
      !x || x && f ? (u([k, void 0]), s == null || s([k, void 0])) : x && !f && (k < x ? (u([k, x]), s == null || s([k, x])) : (u([x, k]), s == null || s([x, k])));
    }, v = () => {
      if (!x) return "";
      const k = (y) => y ? y.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }) : "";
      return x && f ? `${k(x)} - ${k(f)}` : k(x);
    };
    return /* @__PURE__ */ e.jsx(
      At,
      {
        value: x,
        onChange: E,
        monthsToShow: a,
        placeholder: g.placeholder || "Select date range",
        valueFormatter: v,
        rangeStart: x,
        rangeEnd: f,
        closeOnSelect: !!f,
        calendarFooter: n,
        error: l,
        errorText: c,
        format: i,
        allowInput: d,
        ...g
      }
    );
  }
  return null;
};
Ds.displayName = "DatePicker";
const fr = je(
  ({ children: t, onClose: r, className: s, ...a }, n) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: n,
      className: w("mb-4 flex items-center justify-between", s),
      ...a,
      children: [
        t,
        r && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: r,
            className: "ml-4 rounded-full p-1 text-gray hover:bg-gray-100 hover:text-gray-700",
            "aria-label": "Close dialog",
            children: /* @__PURE__ */ e.jsx(ne, { icon: "mdi:close", className: "h-5 w-5" })
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
    rounded: g = "xl",
    position: m = "center",
    scrollBehavior: u = "normal",
    animationDuration: x = 300,
    animationDelay: f = 0,
    ...E
  }, v) => {
    const [k, y] = te(t), [S, P] = te(!1), V = fe(!1);
    if (Tr(() => {
      if (t) {
        y(!0), P(!1);
        const R = ke();
        "body" in R && (u !== "outside" ? (R.body.style.overflow = "hidden", V.current = !0) : V.current = !1);
        const T = requestAnimationFrame(() => P(!0));
        return () => cancelAnimationFrame(T);
      }
      P(!1);
      const K = setTimeout(() => {
        y(!1);
        const R = ke();
        "body" in R && V.current && (R.body.style.overflow = "", V.current = !1);
      }, x + f);
      return () => clearTimeout(K);
    }, [t, u, x, f]), be(() => {
      const K = (R) => {
        R instanceof KeyboardEvent && R.key === "Escape" && r();
      };
      return t && ke().addEventListener("keydown", K), () => {
        ke().removeEventListener("keydown", K);
      };
    }, [t, r]), !k) return null;
    const _ = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, J = () => {
      c && r();
    }, B = ke();
    if (!("body" in B)) return null;
    const j = (K) => {
      switch (K) {
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
    }, I = (() => {
      if (u === "inside")
        return i === "fullscreen" || m === "left" || m === "right" ? "overflow-y-auto" : "max-h-screen overflow-y-auto";
    })(), p = {
      transitionDuration: `${x}ms`,
      transitionDelay: `${f}ms`
    };
    return He(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: w(
            "fixed inset-0 z-50 flex transition-opacity",
            _[n],
            S ? "opacity-100" : "opacity-0",
            m === "center" && "items-center justify-center",
            m === "top" && "items-start justify-center",
            m === "bottom" && "items-end justify-center",
            m === "left" && "items-stretch justify-start",
            m === "right" && "items-stretch justify-end"
          ),
          style: p,
          onClick: J,
          children: /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: v,
              className: w(
                "relative transform bg-white p-6 shadow-xl transition-all",
                // Width/Max-width behavior depends on position.
                // If `sizeClassName` is provided, it takes precedence except in fullscreen mode.
                i === "fullscreen" ? Kt.fullscreen : d ?? (m === "left" || m === "right" ? _s[i] : Kt[i]),
                // Position-based animations
                m === "center" && (S ? "scale-100 opacity-100" : "scale-95 opacity-0"),
                m === "left" && (S ? "translate-x-0 h-full" : "-translate-x-full h-full"),
                m === "right" && (S ? "translate-x-0 h-full" : "translate-x-full h-full"),
                m === "top" && (S ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"),
                m === "bottom" && (S ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"),
                a,
                i === "fullscreen" ? "rounded-none" : j(g),
                // Corner overrides so the edge touching the viewport is not rounded
                m === "left" && "rounded-l-none",
                m === "right" && "rounded-r-none",
                m === "top" && "rounded-t-none",
                m === "bottom" && "rounded-b-none",
                I
              ),
              style: p,
              onClick: (K) => K.stopPropagation(),
              ...E,
              children: [
                l && /* @__PURE__ */ e.jsx(fr, { onClose: r, children: l }),
                s
              ]
            }
          )
        }
      ),
      B.body
    );
  }
), Ls = je(
  ({ children: t, className: r, ...s }, a) => /* @__PURE__ */ e.jsx(
    "h2",
    {
      ref: a,
      className: w("text-xl font-semibold text-gray-900", r),
      ...s,
      children: t
    }
  )
), Os = je(
  ({ children: t, className: r, ...s }, a) => /* @__PURE__ */ e.jsx("div", { ref: a, className: w("text-gray-600", r), ...s, children: t })
), $s = je(
  ({ children: t, className: r, ...s }, a) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: a,
      className: w("mt-6 flex justify-end gap-3", r),
      ...s,
      children: t
    }
  )
);
zs.displayName = "Dialog";
Ls.displayName = "DialogTitle";
Os.displayName = "DialogBody";
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
  }, g = Oe(
    "inline-block",
    l[t],
    c[r],
    i[s],
    d[a],
    n
  );
  return /* @__PURE__ */ e.jsx("div", { className: g });
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
  shadow: g = "none",
  rounded: m = "lg",
  children: u,
  showFileList: x = !0,
  showPlaceholder: f = !0,
  showMaxSize: E = !0,
  icon: v = "mdi:upload"
}) => {
  const [k, y] = te(!1), [S, P] = te(null), V = fe(null), _ = De((T) => {
    T.preventDefault(), c || y(!0);
  }, [c]), J = De((T) => {
    T.preventDefault(), y(!1);
  }, []), B = De((T) => T.size > r ? `File size exceeds ${r / (1024 * 1024)}MB limit` : t[0] !== "*" && !t.some((Y) => Y.startsWith(".") ? T.name.toLowerCase().endsWith(Y.toLowerCase()) : T.type.startsWith(Y)) ? `File type not allowed. Allowed types: ${t.join(", ")}` : null, [t, r]), j = De((T) => {
    if (T.preventDefault(), y(!1), P(null), c) return;
    const Y = Array.from(T.dataTransfer.files), Z = [], M = [];
    if (Y.forEach((b) => {
      const z = B(b);
      z ? M.push(`${b.name}: ${z}`) : Z.push(b);
    }), M.length > 0 && P(M.join(`
`)), Z.length > 0) {
      const b = s ? [...a, ...Z] : Z;
      n == null || n(b);
    }
  }, [c, s, n, B, a]), I = De((T) => {
    if (P(null), c || !T.target.files) return;
    const Y = Array.from(T.target.files), Z = [], M = [];
    if (Y.forEach((b) => {
      const z = B(b);
      z ? M.push(`${b.name}: ${z}`) : Z.push(b);
    }), M.length > 0 && P(M.join(`
`)), Z.length > 0) {
      const b = s ? [...a, ...Z] : Z;
      n == null || n(b);
    }
    V.current && (V.current.value = "");
  }, [c, s, n, B, a]), p = De((T) => {
    const Y = [...a];
    Y.splice(T, 1), n == null || n(Y);
  }, [n, a]), K = (T) => T.type.startsWith("image/") ? /* @__PURE__ */ e.jsx(ne, { icon: "mdi:image", className: "w-5 h-5" }) : T.type.startsWith("text/") ? /* @__PURE__ */ e.jsx(ne, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ e.jsx(ne, { icon: "mdi:file", className: "w-5 h-5" }), R = Fs[d];
  return /* @__PURE__ */ e.jsxs("div", { className: de("w-full", l), children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: de(
          "p-6 text-center transition-colors",
          !u && [
            "border-2 border-dashed",
            R.border,
            R.bg,
            k && R.active,
            !c && R.hover
          ],
          c && "opacity-50 cursor-not-allowed",
          Bs[g],
          qt[m],
          !u && "cursor-pointer"
        ),
        onDragOver: _,
        onDragLeave: J,
        onDrop: j,
        onClick: () => {
          var T;
          return !c && !u && ((T = V.current) == null ? void 0 : T.click());
        },
        children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: V,
              type: "file",
              accept: t.join(","),
              multiple: s,
              onChange: I,
              className: "hidden",
              disabled: c
            }
          ),
          u ? /* @__PURE__ */ e.jsx("div", { onClick: () => {
            var T;
            return !c && ((T = V.current) == null ? void 0 : T.click());
          }, children: u }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(ne, { icon: v, className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
            f && /* @__PURE__ */ e.jsx("p", { className: de("text-neutral-600", R.text), children: i }),
            E && /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-neutral mt-2", children: [
              "Max file size: ",
              r / (1024 * 1024),
              "MB"
            ] })
          ] })
        ]
      }
    ),
    S && /* @__PURE__ */ e.jsx("p", { className: "mt-2 text-sm text-danger", children: S }),
    x && a.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "mt-4 space-y-2", children: a.map((T, Y) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: de(
          "flex items-center justify-between p-2",
          qt[m],
          R.bg
        ),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
            K(T),
            /* @__PURE__ */ e.jsx("span", { className: de("text-sm", R.text), children: T.name }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-neutral", children: [
              "(",
              (T.size / 1024).toFixed(1),
              " KB)"
            ] })
          ] }),
          !c && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => p(Y),
              className: "p-1 text-neutral hover:text-danger",
              children: /* @__PURE__ */ e.jsx(ne, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${T.name}-${Y}`
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
  }, g = () => {
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
  return /* @__PURE__ */ e.jsxs("div", { className: w(Ys({ variant: a, rounded: n }), i), children: [
    s && /* @__PURE__ */ e.jsx(ne, { icon: g(), className: w("h-5 w-5 flex-shrink-0", d()) }),
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
        children: /* @__PURE__ */ e.jsx(ne, { icon: "mdi:close", className: "h-5 w-5" })
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
    required: g = !1,
    placeholder: m,
    value: u,
    onChange: x,
    disabled: f = !1,
    position: E = "bottom",
    fullWidth: v = !1,
    children: k,
    leftIcon: y,
    rightIcon: S,
    ...P
  }, V) => {
    const [_, J] = te(!1), B = fe(null), j = fe(null), p = `select-${ve.useId().replace(/:/g, "")}`, K = () => {
      if (_ && B.current && j.current) {
        const b = B.current.getBoundingClientRect(), z = j.current, L = Ee(), le = L.innerHeight - b.bottom, O = b.top, h = b.bottom + z.offsetHeight + 4 >= L.innerHeight, A = O > le, q = h && A;
        E === "bottom" || E === "top" ? (z.style.position = "fixed", z.style.left = `${b.left}px`, z.style.width = `${b.width}px`, E === "bottom" && q ? (z.style.bottom = `${L.innerHeight - b.top + 4}px`, z.style.top = "auto", z.style.maxHeight = `${O - 8}px`) : E === "bottom" ? (z.style.top = `${b.bottom + 4}px`, z.style.bottom = "auto", z.style.maxHeight = `${le - 8}px`) : E === "top" && !q ? (z.style.top = `${b.bottom + 4}px`, z.style.bottom = "auto", z.style.maxHeight = `${le - 8}px`) : (z.style.bottom = `${L.innerHeight - b.top + 4}px`, z.style.top = "auto", z.style.maxHeight = `${O - 8}px`)) : E === "left" ? (z.style.position = "fixed", z.style.right = `${L.innerWidth - b.left + 4}px`, z.style.top = `${b.top}px`, z.style.maxHeight = `${L.innerHeight - b.top - 8}px`) : E === "right" && (z.style.position = "fixed", z.style.left = `${b.right + 4}px`, z.style.top = `${b.top}px`, z.style.maxHeight = `${L.innerHeight - b.top - 8}px`);
      }
    };
    be(() => {
      const b = Ee(), z = () => {
        _ && K();
      }, L = () => {
        _ && K();
      };
      return _ && (K(), b.addEventListener("scroll", z, !0), b.addEventListener("resize", L)), () => {
        b.removeEventListener("scroll", z, !0), b.removeEventListener("resize", L);
      };
    }, [_, E]), be(() => {
      const b = ke(), z = (le) => {
        le.detail.id !== p && J(!1);
      }, L = (le) => {
        const O = le.target, C = B.current, h = j.current;
        C && h && !C.contains(O) && !h.contains(O) && J(!1);
      };
      return b.addEventListener(jt, z), b.addEventListener("click", L), () => {
        b.removeEventListener(jt, z), b.removeEventListener("click", L);
      };
    }, [p]);
    const R = () => {
      if (f) return;
      if (_) {
        J(!1);
        return;
      }
      ke().dispatchEvent(
        new CustomEvent(jt, {
          detail: { id: p }
        })
      ), J(!0);
    }, T = () => {
      if (n) {
        const b = n.find((z) => z.value === u);
        return b == null ? void 0 : b.label;
      }
      if (k) {
        const z = Vt.toArray(k).find(
          (L) => bt(L) && "value" in L.props && L.props.value === u
        );
        return bt(z) ? z.props.children : null;
      }
      return null;
    }, Y = (b) => {
      f || (x == null || x(b), J(!1));
    }, Z = () => n ? n.map((b) => /* @__PURE__ */ e.jsx(
      ft,
      {
        value: b.value,
        disabled: b.disabled,
        selected: b.value === u,
        onClick: () => {
          b.onClick && b.onClick(b.value), Y(b.value);
        },
        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          b.icon,
          b.label
        ] })
      },
      b.value
    )) : k ? Vt.map(k, (b) => bt(b) && "value" in b.props ? Pr(b, {
      selected: b.props.value === u,
      onClick: () => Y(b.props.value)
    }) : null) : null, M = () => {
      if (!_ || f) return null;
      const b = /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: j,
          className: w(
            "fixed z-[9999] min-w-[8rem] border border-neutral-200 bg-white py-1 shadow-lg rounded-lg",
            E === "left" || E === "right" ? "w-max" : "w-full"
          ),
          onClick: (L) => L.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: Z()
        }
      ), z = ke();
      return "body" in z ? He(b, z.body) : null;
    };
    return /* @__PURE__ */ e.jsxs("div", { className: w(v ? "w-full" : "inline-block"), ref: V, ...P, children: [
      l && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: p,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            l,
            g && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: w("relative", !v && "inline-block"),
          onClick: R,
          children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                id: p,
                ref: B,
                type: "button",
                className: w(
                  Gs({ variant: c ? "error" : r, size: s, rounded: a, fullWidth: v }),
                  "flex items-center justify-between",
                  f && "cursor-not-allowed opacity-50",
                  y && "pl-10",
                  S && "pr-10",
                  t
                ),
                "aria-haspopup": "listbox",
                "aria-expanded": _,
                "aria-describedby": c ? `${p}-error` : d ? `${p}-helper` : void 0,
                disabled: f,
                children: [
                  y && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ e.jsx(ne, { icon: y, className: "w-4 h-4" }) }),
                  /* @__PURE__ */ e.jsx("span", { className: "flex items-center gap-2 min-w-0 flex-1", children: /* @__PURE__ */ e.jsx("span", { className: w(
                    "truncate text-left",
                    T() ? "text-neutral-900" : "text-neutral"
                  ), children: T() || m }) }),
                  S ? /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ e.jsx(ne, { icon: S, className: "w-4 h-4" }) }) : /* @__PURE__ */ e.jsx(
                    ne,
                    {
                      icon: "mdi:chevron-down",
                      className: w("transition-transform flex-shrink-0 ml-2 w-4 h-4", _ && "rotate-180")
                    }
                  )
                ]
              }
            ),
            M()
          ]
        }
      ),
      c && i && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: `${p}-error`, children: i }),
      !c && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: `${p}-helper`, children: d })
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
  onPerPageChange: g
}) => {
  const m = (f, E) => {
    const v = E - f + 1;
    return Array.from({ length: v }, (k, y) => y + f);
  }, x = (() => {
    const f = n * 2 + 3, E = f + 2;
    if (r > E) {
      const v = Math.max(2, t - n), k = Math.min(r - 1, t + n);
      let y = m(v, k);
      const S = v > 2, P = r - k > 1, V = f - (y.length + 1);
      if (S && !P)
        y = [...m(v - V, v - 1), ...y];
      else if (!S && P) {
        const _ = m(k + 1, k + V);
        y = [...y, ..._];
      } else S && P && (y = [...y]);
      return [1, ...y, r];
    }
    return m(1, r);
  })();
  return /* @__PURE__ */ e.jsxs(
    "nav",
    {
      className: de("flex items-center justify-between space-x-1", l),
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
                onChange: (f) => g && g(Number(f)),
                size: "sm",
                className: "w-16",
                fullWidth: !1,
                "aria-label": "Items per page",
                children: c.map((f) => /* @__PURE__ */ e.jsx(ft, { value: f.toString(), children: f }, f))
              }
            ),
            /* @__PURE__ */ e.jsx("span", { className: "text-neutral-700 text-sm", children: "data per halaman" })
          ] }),
          /* @__PURE__ */ e.jsx(
            Ae,
            {
              variant: "ghost",
              onClick: () => a(t - 1),
              disabled: t === 1,
              className: de(
                "px-3 py-1 rounded-md text-sm",
                t === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              ),
              children: /* @__PURE__ */ e.jsx(ne, { size: "18", icon: "mdi:chevron-left" })
            }
          ),
          x.map((f, E) => {
            const v = f === t, k = typeof f == "string" && f === "...";
            return /* @__PURE__ */ e.jsx(
              Ae,
              {
                variant: "ghost",
                onClick: () => !k && a(f),
                className: de(
                  "px-3 py-1 rounded-md text-sm",
                  v ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  k && "cursor-default"
                ),
                children: f
              },
              E
            );
          }),
          /* @__PURE__ */ e.jsx(
            Ae,
            {
              variant: "ghost",
              onClick: () => a(t + 1),
              disabled: t === r,
              className: de(
                "px-3 py-1 rounded-md text-sm",
                t === r ? "text-gray-400 cursor-not-allowed" : "text-gray-700"
              ),
              children: /* @__PURE__ */ e.jsx(ne, { size: "18", icon: "mdi:chevron-right" })
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
  const g = (x) => {
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
      className: Oe(
        "inline-flex items-center cursor-pointer",
        s && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "radio",
            className: Oe(
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
            onChange: g,
            name: n,
            value: l
          }
        ),
        t && /* @__PURE__ */ e.jsx("label", { className: Oe(
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
    helperText: g,
    label: m,
    required: u = !1,
    labelPlacement: x = "top",
    fullWidth: f = !1,
    disabled: E = !1,
    name: v,
    gap: k,
    color: y = "primary",
    radioSize: S = "sm",
    id: P,
    ...V
  }, _) => {
    const J = P || ve.useId(), B = `${J}-helper`, j = `${J}-error`, I = `${J}-group`, p = v || `radio-group-${J}`, [K, R] = ve.useState(a), T = s !== void 0 ? s : K, Y = (L) => {
      s === void 0 && R(L), n == null || n(L);
    }, M = ((L) => L === "none" ? "gap-0" : L === "xs" ? "gap-1" : L === "sm" ? "gap-2" : L === "md" ? "gap-3" : L === "lg" ? "gap-4" : L === "xl" ? "gap-6" : null)(k), b = /* @__PURE__ */ e.jsx("div", { className: w("relative", !f && "inline-block"), children: /* @__PURE__ */ e.jsx(
      "fieldset",
      {
        ref: _,
        id: I,
        className: w(
          Us({ layout: l, size: c }),
          M,
          t
        ),
        "aria-describedby": i ? j : g ? B : void 0,
        "aria-invalid": i,
        "aria-required": u,
        ...V,
        children: r.map((L) => /* @__PURE__ */ e.jsx(
          Ws,
          {
            label: L.label,
            checked: T === L.value,
            onChange: () => Y(L.value),
            disabled: E || L.disabled,
            name: p,
            value: L.value,
            color: i ? "error" : y,
            error: i ? " " : void 0,
            variantSize: S
          },
          L.value
        ))
      }
    ) }), z = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      i && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: j, children: d }),
      !i && g && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: B, children: g })
    ] });
    return x === "left" ? /* @__PURE__ */ e.jsx("div", { className: w(f ? "w-full" : "inline-block", t), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
      m && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: I,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            m,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: w("flex-1", !f && "inline-block"), children: [
        b,
        z
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: w(f ? "w-full" : "inline-block", t), children: [
      m && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: I,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            m,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      b,
      z
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
    className: w(qs({ variant: s, rounded: a, fullWidth: n }), l),
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
  marks: g = [],
  range: m = !1
}) => {
  const u = m, [x, f] = te(
    a !== void 0 ? a : n !== void 0 ? n : u ? [t, r] : t
  ), [E, v] = te(null), k = fe(null), y = a !== void 0 ? a : x, [S, P] = u ? Array.isArray(y) ? y : [t, r] : [typeof y == "number" ? y : t, r], V = (M) => Math.min(Math.max(M, t), r), _ = (M) => {
    if (i) return;
    let b;
    u && Array.isArray(M) ? b = [V(M[0]), V(M[1])] : !u && typeof M == "number" ? b = V(M) : b = u ? [t, r] : t, a === void 0 && f(b), l == null || l(b);
  }, J = (M) => {
    if (!k.current) return t;
    const b = k.current.getBoundingClientRect(), L = (M - b.left) / b.width, le = t + (r - t) * L, O = Math.round(le / s) * s;
    return V(O);
  }, B = (M) => (b) => {
    i || (v(M), b.stopPropagation());
  }, j = (M) => {
    if (!i)
      if (!u)
        v(0), I(M, 0);
      else {
        const b = J(M.clientX), z = Math.abs(b - S), L = Math.abs(b - P), le = z < L ? 0 : 1;
        v(le), I(M, le);
      }
  }, I = ve.useCallback((M, b) => {
    const z = J(M.clientX);
    if (!u)
      _(z);
    else {
      let L = [S, P];
      b === 0 ? L = [Math.min(z, P - s), P] : L = [S, Math.max(z, S + s)], L[0] > L[1] && (L = [L[1], L[0]]), _(L);
    }
  }, [u, S, P, s, _, J]), p = ve.useRef(E);
  p.current = E;
  const K = ve.useCallback(function(M) {
    p.current === null || i || I(M, p.current);
  }, [i, I]), R = ve.useCallback(function() {
    v(null);
  }, []);
  be(() => {
    if (E !== null) {
      const M = Ee();
      return M.addEventListener("mousemove", K), M.addEventListener("mouseup", R), () => {
        M.removeEventListener("mousemove", K), M.removeEventListener("mouseup", R);
      };
    }
  }, [E, K, R]);
  const T = (M) => (M - t) / (r - t) * 100, Y = T(S), Z = T(P);
  return /* @__PURE__ */ e.jsxs("div", { className: de("relative w-full", c), children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: k,
        className: de(
          "relative h-2 bg-gray-200 rounded-full cursor-pointer",
          i && "opacity-50 cursor-not-allowed"
        ),
        onMouseDown: j,
        children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute h-full bg-primary rounded-full",
              style: { left: `${u ? Y : 0}%`, width: `${u ? Z - Y : Y}%` }
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: de(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                i && "cursor-not-allowed"
              ),
              style: { left: `${Y}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: B(0)
            }
          ),
          u && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: de(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                i && "cursor-not-allowed"
              ),
              style: { left: `${Z}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: B(1)
            }
          )
        ]
      }
    ),
    g.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex justify-between mt-2", children: g.map((M) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "text-xs text-gray",
        style: { left: `${(M.value - t) / (r - t) * 100}%` },
        children: M.label
      },
      M.value
    )) }),
    d && /* @__PURE__ */ e.jsx("div", { className: "mt-2 text-sm text-gray-600", children: u ? `${S} - ${P}` : S })
  ] });
}, Xs = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}, Js = {
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
  const [i, d] = te(null), g = (f) => {
    n || d(f);
  }, m = () => {
    n || d(null);
  }, u = (f) => {
    !n && l && l(f);
  }, x = i !== null ? i : t;
  return /* @__PURE__ */ e.jsx("div", { className: w("flex items-center gap-1", c), children: [...Array(r)].map((f, E) => {
    const v = E + 1, k = v <= x, y = i !== null && v <= i;
    return /* @__PURE__ */ e.jsx(
      "button",
      {
        className: w(
          "transition-colors duration-200",
          Xs[s],
          k || y ? Js[a] : "text-default-200",
          !n && "cursor-pointer"
        ),
        onMouseEnter: () => g(v),
        onMouseLeave: m,
        onClick: () => u(v),
        disabled: n,
        "aria-label": `Rate ${v} out of ${r}`,
        children: /* @__PURE__ */ e.jsx(
          ne,
          {
            icon: k || y ? "mdi:star" : "mdi:star-outline",
            className: "w-full h-full"
          }
        )
      },
      E
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
  return /* @__PURE__ */ e.jsxs("div", { className: w("flex items-center gap-2", a), children: [
    /* @__PURE__ */ e.jsx("div", { className: w("rounded-full animate-pulse", n, c) }),
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
}, hr = (t) => {
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
}) => /* @__PURE__ */ e.jsx("div", { className: w("flex flex-row items-center w-full justify-between", s), children: t.map((n, l) => {
  const c = l < r ? "completed" : l === r ? "active" : "pending";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "flex items-center flex-1",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: w(
          "flex flex-col items-center z-10",
          a === "default" ? "gap-4" : "gap-2",
          a === "default" ? "px-5" : "px-3"
        ), children: [
          a === "default" && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: w(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                hr(c)
              ),
              children: /* @__PURE__ */ e.jsx(
                ne,
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
                className: w(
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
}) }), ra = ({
  steps: t,
  activeStep: r,
  className: s,
  variant: a = "default"
}) => /* @__PURE__ */ e.jsx("div", { className: w("flex flex-col items-start gap-8", s), children: t.map((n, l) => {
  const c = l < r ? "completed" : l === r ? "active" : "pending";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "flex flex-row w-full items-center relative",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: w(
          "flex flex-row items-center z-10",
          a === "default" ? "gap-4" : "gap-2"
        ), children: [
          a === "default" && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: w(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                hr(c)
              ),
              children: /* @__PURE__ */ e.jsx(
                ne,
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
                className: w(
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
            className: w(
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
      className: de(
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
              className: de(
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
              className: de(
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
  var y, S;
  const [g, m] = te(r || ((y = t[0]) == null ? void 0 : y.id) || ""), u = ve.useRef(null), [x, f] = te({ left: 0, width: 0 });
  ve.useEffect(() => {
    var P;
    if (s === "active-underline" && u.current) {
      const V = u.current.getBoundingClientRect(), _ = (P = u.current.parentElement) == null ? void 0 : P.getBoundingClientRect();
      _ && f({
        left: V.left - _.left,
        width: V.width
      });
    }
  }, [s, t, g]), ve.useEffect(() => {
    if (s === "active-underline") {
      const P = () => {
        var V;
        if (u.current) {
          const _ = u.current.getBoundingClientRect(), J = (V = u.current.parentElement) == null ? void 0 : V.getBoundingClientRect();
          J && f({
            left: _.left - J.left,
            width: _.width
          });
        }
      };
      return window.addEventListener("resize", P), () => window.removeEventListener("resize", P);
    }
  }, [s, t, g]);
  const E = De((P) => {
    m(P), d == null || d(P);
  }, [d]), v = () => {
    switch (a) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  }, k = (P, V) => {
    const _ = de(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      v(),
      V && "opacity-50 cursor-not-allowed",
      !V && "cursor-pointer"
    );
    switch (s) {
      case "pills":
        return de(
          _,
          "rounded-full",
          P ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return de(
          _,
          "border-b-2",
          P ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      case "active-underline":
        return de(
          _,
          "border-b-0",
          P ? "text-primary" : "text-gray-600 dark:text-gray-300 hover:text-primary"
        );
      default:
        return de(
          _,
          "border-b-2",
          P ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: de("w-full", n), children: [
    /* @__PURE__ */ e.jsxs("div", { className: de(
      s === "active-underline" ? "relative" : "",
      "flex space-x-1",
      s === "pills" && "space-x-2 border-b-0",
      s !== "active-underline" && "border-b border-gray-200 dark:border-gray-700",
      l
    ), children: [
      t.map((P) => {
        const V = P.id === g, _ = !!P.disabled;
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            ref: s === "active-underline" && V ? u : void 0,
            onClick: () => !_ && E(P.id),
            disabled: _,
            className: de(
              k(V, _),
              c
            ),
            children: [
              P.icon && /* @__PURE__ */ e.jsx(
                ne,
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
      s === "active-underline" && /* @__PURE__ */ e.jsx(
        "span",
        {
          className: "absolute bottom-0 h-0.5 bg-primary transition-all duration-300",
          style: { left: x.left, width: x.width }
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: de("mt-4", i), children: (S = t.find((P) => P.id === g)) == null ? void 0 : S.content })
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
  return /* @__PURE__ */ e.jsx(c, { className: w("text-gray-900", n[t], s), children: r });
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
    label: g,
    required: m = !1,
    labelPlacement: u = "top",
    fullWidth: x = !1,
    className: f,
    placeholder: E = "Select time",
    leftIcon: v,
    rightIcon: k,
    valueFormatter: y,
    closeOnSelect: S = !0,
    ...P
  }, V) => {
    const [_, J] = te(!1), [B, j] = te(t || ""), [I, p] = te(0), [K, R] = te(0), [T, Y] = te(!0), Z = fe(null), M = fe(null), b = fe(null), L = `timepicker-${ve.useId().replace(/:/g, "")}`, le = () => {
      if (!_ || !M.current || !b.current) return;
      const N = M.current.getBoundingClientRect(), F = b.current, ue = Ee().innerHeight - N.bottom;
      F.style.top = `${N.bottom + 4}px`, F.style.bottom = "auto", F.style.left = `${N.left}px`, F.style.maxHeight = `${ue - 8}px`, F.style.width = `${N.width}px`;
    };
    be(() => {
      const N = Ee(), F = ke(), re = () => {
        _ && le();
      }, ue = () => {
        _ && le();
      }, Te = (Ie) => {
        Ie.detail.id !== L && J(!1);
      }, Pe = (Ie) => {
        const $e = Ie.target;
        Z.current && b.current && !Z.current.contains($e) && !b.current.contains($e) && J(!1);
      };
      return _ && (le(), N.addEventListener("scroll", re, !0), N.addEventListener("resize", ue)), F.addEventListener(Nt, Te), F.addEventListener("mousedown", Pe), () => {
        N.removeEventListener("scroll", re, !0), N.removeEventListener("resize", ue), F.removeEventListener(Nt, Te), F.removeEventListener("mousedown", Pe);
      };
    }, [_, L]);
    const O = () => {
      c || (_ || ke().dispatchEvent(
        new CustomEvent(Nt, {
          detail: { id: L }
        })
      ), J(!_));
    };
    be(() => {
      if (t) {
        j(t);
        const [N, F] = t.split(":").map(Number);
        s ? p(N) : (p(N % 12 || 12), Y(N < 12)), R(F);
      }
    }, [t, s]);
    const C = () => {
      const F = `${(s || T ? I : I + 12).toString().padStart(2, "0")}:${K.toString().padStart(2, "0")}`;
      j(F), r == null || r(F), S && J(!1);
    }, h = () => s ? Array.from({ length: 24 }, (N, F) => F) : Array.from({ length: 12 }, (N, F) => F + 1), A = () => Array.from({ length: 60 }, (N, F) => F), q = y ? y(B) : B, Q = ke();
    return "body" in Q ? /* @__PURE__ */ e.jsxs("div", { ref: Z, className: w("relative", x && "w-full", f), children: [
      g && /* @__PURE__ */ e.jsxs(
        "label",
        {
          className: w(
            "block text-sm font-medium text-gray-700 mb-1",
            u === "left" && "inline-block mr-2"
          ),
          children: [
            g,
            m && /* @__PURE__ */ e.jsx("span", { className: "text-red ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: M,
          className: "relative",
          onClick: O,
          children: [
            v && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ e.jsx(ne, { icon: v, size: 20 }) }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: V,
                type: "text",
                value: q,
                placeholder: E,
                readOnly: !0,
                className: w(
                  sa({ variant: a, size: n, rounded: l, fullWidth: x }),
                  v && "pl-10",
                  k && "pr-10",
                  "text-left"
                ),
                disabled: c,
                ...P
              }
            ),
            k && /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ e.jsx(ne, { icon: k, size: 20 }) })
          ]
        }
      ),
      _ && He(
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: b,
            className: "fixed z-[9999] w-fit rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (N) => N.stopPropagation(),
            children: /* @__PURE__ */ e.jsxs("div", { className: "p-0", children: [
              /* @__PURE__ */ e.jsxs(Pt, { variant: "ghost", className: w(
                "flex mx-2 my-1 p-0",
                s ? "justify-start gap-8" : "justify-start gap-4"
              ), children: [
                /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2", children: h().map((N) => /* @__PURE__ */ e.jsx(
                  Ae,
                  {
                    variant: "ghost",
                    onClick: () => p(N),
                    className: w(I === N && "bg-primary text-white"),
                    children: N.toString().padStart(2, "0")
                  },
                  N
                )) }) }) }),
                /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2", children: A().map((N) => /* @__PURE__ */ e.jsx(
                  Ae,
                  {
                    variant: "ghost",
                    onClick: () => R(N),
                    className: w(K === N && "bg-primary text-white"),
                    children: N.toString().padStart(2, "0")
                  },
                  N
                )) }) }) }),
                !s && /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ e.jsx(
                    Ae,
                    {
                      variant: "ghost",
                      onClick: () => Y(!0),
                      className: w(T && "bg-primary text-white"),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    Ae,
                    {
                      variant: "ghost",
                      onClick: () => Y(!1),
                      className: w(!T && "bg-primary text-white"),
                      children: "PM"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "mb-2 mx-2", children: /* @__PURE__ */ e.jsx(
                Ae,
                {
                  variant: "primary",
                  onClick: C,
                  size: "sm",
                  fullWidth: !0,
                  children: "Select"
                }
              ) })
            ] })
          }
        ),
        Q.body
      ),
      i && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-danger-600", children: i }),
      d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-gray", children: d })
    ] }) : null;
  }
);
xr.displayName = "PrimitiveTimePicker";
const aa = ({
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
    className: g,
    ...m
  }, u) => {
    const x = ve.useId(), f = `${x}-helper`, E = `${x}-error`;
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
            className: w(na({ variant: d ? "danger" : s, size: a }), g),
            "aria-describedby": d ? E : c ? f : void 0,
            "aria-invalid": d,
            "aria-required": l,
            ...m,
            children: /* @__PURE__ */ e.jsx(
              "span",
              {
                "data-state": t ? "checked" : "unchecked",
                className: w(
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
      d && i && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-danger", id: E, children: i }),
      !d && c && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-neutral", id: f, children: c })
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
  trigger: g = "hover"
}) => {
  const [m, u] = te(!1), [x, f] = te({ top: 0, left: 0 }), E = fe(null), v = fe(null), k = fe(), y = i !== void 0, S = y ? i : m, P = () => {
    if (!E.current || !v.current) return;
    const j = v.current.getBoundingClientRect(), I = E.current.getBoundingClientRect(), p = Ee(), K = p.scrollX || p.pageXOffset, R = p.scrollY || p.pageYOffset;
    let T = 0, Y = 0;
    const Z = 8;
    switch (s) {
      case "top":
        T = j.top + R - I.height - Z, Y = j.left + K + (j.width - I.width) / 2;
        break;
      case "bottom":
        T = j.bottom + R + Z, Y = j.left + K + (j.width - I.width) / 2;
        break;
      case "left":
        T = j.top + R + (j.height - I.height) / 2, Y = j.left + K - I.width - Z;
        break;
      case "right":
        T = j.top + R + (j.height - I.height) / 2, Y = j.right + K + Z;
        break;
    }
    const M = p.innerWidth, b = p.innerHeight;
    Y < 0 && (Y = 0), Y + I.width > M && (Y = M - I.width), T < 0 && (T = 0), T + I.height > b && (T = b - I.height), f({ top: T, left: Y });
  };
  be(() => {
    if (S) {
      P();
      const j = Ee();
      j.addEventListener("scroll", P, !0), j.addEventListener("resize", P);
    }
    return () => {
      const j = Ee();
      j.removeEventListener("scroll", P, !0), j.removeEventListener("resize", P);
    };
  }, [S, s]);
  const V = () => {
    y ? d == null || d(!0) : k.current = setTimeout(() => {
      u(!0);
    }, a);
  }, _ = () => {
    k.current && clearTimeout(k.current), y ? d == null || d(!1) : u(!1);
  }, J = (j) => {
    j.stopPropagation(), g === "click" && (y ? d == null || d(!i) : u(!m));
  };
  be(() => {
    const j = (I) => {
      g === "click" && E.current && !E.current.contains(I.target) && v.current && !v.current.contains(I.target) && _();
    };
    return S && document.addEventListener("click", j), () => {
      document.removeEventListener("click", j);
    };
  }, [S, g]);
  const B = () => {
    if (!S) return null;
    const j = ke();
    return "body" in j ? He(
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: E,
          className: w(ia({ color: l, size: c }), n),
          style: {
            top: `${x.top}px`,
            left: `${x.left}px`
          },
          children: [
            t,
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: w(
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
      j.body
    ) : null;
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: v,
      className: "relative inline-block",
      onMouseEnter: g === "hover" ? V : void 0,
      onMouseLeave: g === "hover" ? _ : void 0,
      onClick: J,
      children: [
        r,
        B()
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
}, ga = ve.forwardRef(
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
    icon: g,
    ...m
  }, u) => {
    const x = Math.min(Math.max(n, 0), 100), f = ua[a], E = a === "sm" ? 2 : a === "md" ? 3 : 4, v = (f - E) / 2, k = 2 * Math.PI * v, y = k - x / 100 * k;
    let S = "";
    return r === "loading" ? S = "rounded-full" : d ? S = d === "none" ? "" : `rounded-${d}` : S = "rounded-md", r === "circular" ? /* @__PURE__ */ e.jsxs("div", { className: "inline-flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative", style: { width: f, height: f }, children: [
        /* @__PURE__ */ e.jsxs(
          "svg",
          {
            className: w(
              "transform -rotate-90",
              l ? "animate-spin" : ""
            ),
            width: f,
            height: f,
            children: [
              /* @__PURE__ */ e.jsx(
                "circle",
                {
                  strokeWidth: E,
                  stroke: "#e5e7eb",
                  fill: "transparent",
                  r: v,
                  cx: f / 2,
                  cy: f / 2
                }
              ),
              /* @__PURE__ */ e.jsx(
                "circle",
                {
                  className: w(
                    "transition-all duration-300 ease-in-out",
                    l ? "animate-dash" : ""
                  ),
                  strokeWidth: E,
                  strokeDasharray: k,
                  strokeDashoffset: l ? 0 : y,
                  strokeLinecap: "round",
                  stroke: fa[s],
                  fill: "transparent",
                  r: v,
                  cx: f / 2,
                  cy: f / 2
                }
              )
            ]
          }
        ),
        g && /* @__PURE__ */ e.jsx("span", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ e.jsx(ne, { icon: g, size: f * 0.5 }) }),
        c && !l && !g && /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 flex items-center justify-center text-xs font-medium", children: [
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
          className: w(da({ variant: r === "loading" ? "bar" : r, size: a }), S, t),
          role: "progressbar",
          "aria-valuenow": l ? void 0 : x,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...m,
          children: /* @__PURE__ */ e.jsx(
            "div",
            {
              className: w(
                "h-full transition-all duration-300 ease-in-out",
                l ? "animate-progress-indeterminate" : "",
                ma[s],
                S
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
const Ge = [
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
  const r = [...Ge].sort(
    (s, a) => a.code.length - s.code.length
  );
  for (const s of r)
    if (t.startsWith(s.code))
      return s;
  return null;
}, Zt = (t) => {
  if (!t || t.startsWith("+"))
    return null;
  const r = [...Ge].sort(
    (s, a) => a.code.length - s.code.length
  );
  for (const s of r) {
    const a = s.code.replace("+", "");
    if (t.startsWith(a))
      return s;
  }
  return null;
}, ha = (t) => t.startsWith("0") && t.length >= 9 && t.length <= 12 ? "+62" + t.slice(1) : t, xa = (t) => t.startsWith("0") && t.length >= 3, It = je(
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
    fullWidth: g = !1,
    value: m = "",
    onChange: u,
    disabled: x = !1,
    defaultCountry: f = "id",
    placeholder: E = "Enter phone number",
    autoDetect: v = !0,
    ...k
  }) => {
    const [y, S] = te(!1), [P, V] = te(
      () => Ge.find((h) => h.iso === f) || Ge[0]
    ), [_, J] = te(""), [B, j] = te(() => {
      if (v && m) {
        const A = Et(m);
        if (A)
          return V(A), m;
        const q = Zt(m);
        return q ? (V(q), q.code + m.slice(q.code.replace("+", "").length)) : m;
      }
      const h = P.code;
      return m.startsWith(h) ? m.slice(h.length) : m;
    }), [I, p] = te(() => v && m ? !!(Et(m) || Zt(m)) : !1), K = fe(null), R = fe(null), T = ve.useId(), Y = `${T}-helper`, Z = `${T}-error`, M = Ge.filter(
      (h) => h.name.toLowerCase().includes(_.toLowerCase()) || h.code.includes(_)
    ), b = fe(null), z = () => {
      if (y && K.current && R.current) {
        const h = K.current.getBoundingClientRect(), A = R.current, q = typeof window < "u" ? window : { innerHeight: 0 }, Q = q.innerHeight - h.bottom, N = h.top, re = h.bottom + (A.offsetHeight || 0) + 4 >= q.innerHeight, ue = N > Q, Te = re && ue;
        A.style.position = "fixed", A.style.left = `${h.left}px`, A.style.minWidth = `${h.width}px`, A.style.maxWidth = "340px", A.style.width = "auto", Te ? (A.style.bottom = `${q.innerHeight - h.top + 4}px`, A.style.top = "auto", A.style.maxHeight = `${N - 8}px`) : (A.style.top = `${h.bottom + 4}px`, A.style.bottom = "auto", A.style.maxHeight = `${Q - 8}px`);
      }
    };
    be(() => {
      const h = typeof window < "u" ? window : void 0, A = () => {
        y && z();
      }, q = () => {
        y && z();
      };
      return y && (z(), h == null || h.addEventListener("scroll", A, !0), h == null || h.addEventListener("resize", q)), () => {
        h == null || h.removeEventListener("scroll", A, !0), h == null || h.removeEventListener("resize", q);
      };
    }, [y]), be(() => {
      if (!y) return;
      const h = (A) => {
        const q = A.target;
        K.current && R.current && !K.current.contains(q) && !R.current.contains(q) && S(!1);
      };
      return document.addEventListener("click", h), () => document.removeEventListener("click", h);
    }, [y]);
    const L = (h) => {
      if (V(h), S(!1), J(""), v) {
        const A = h.code + B.replace(/^\+?\d*/, "");
        j(A);
        const q = A.replace(/[^\d]/g, "");
        u == null || u(q);
      } else {
        const q = (h.code + B).replace(/[^\d]/g, "");
        u == null || u(q);
      }
    }, le = (h) => {
      const A = h.target.value;
      if (/^[+\d]*$/.test(A))
        if (v && A.startsWith("+")) {
          const Q = Et(A);
          if (Q) {
            V(Q), p(!0), j(A);
            const N = A.replace(/[^\d]/g, "");
            u == null || u(N);
          } else {
            j(A), p(!1);
            const N = A.replace(/[^\d]/g, "");
            u == null || u(N);
          }
        } else if (v && !A.startsWith("+") && A.length > 0) {
          const Q = ha(A);
          if (Q !== A) {
            j(Q), V(
              Ge.find((F) => F.iso === "id") || Ge[0]
            ), p(!0);
            const N = Q.replace(/[^\d]/g, "");
            u == null || u(N);
          } else if (xa(A)) {
            const N = "+62" + A.slice(1);
            j(N), V(
              Ge.find((re) => re.iso === "id") || Ge[0]
            ), p(!0);
            const F = N.replace(/[^\d]/g, "");
            u == null || u(F);
          } else if (A.startsWith("0"))
            j(A), p(!1);
          else {
            const N = "+" + A;
            j(N);
            const F = N.replace(/[^\d]/g, "");
            u == null || u(F);
          }
        } else {
          const Q = A.replace(/[^\d]/g, "");
          j(Q);
          const F = (P.code + Q).replace(/[^\d]/g, "");
          u == null || u(F);
        }
    }, O = w(
      pa({
        variant: n ? "error" : r,
        size: s,
        rounded: a,
        fullWidth: g
      }),
      "!w-full"
    ), C = !v || v && I;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: b,
        className: w(g ? "w-full" : "inline-block", t),
        ...k,
        children: [
          i && /* @__PURE__ */ e.jsxs("label", { htmlFor: T, className: "mb-1.5 block text-sm text-neutral-900", children: [
            i,
            d && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: w("relative", !g && "inline-block"), children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex", children: [
              C && /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  ref: K,
                  onClick: () => !x && S(!y),
                  className: w(
                    O,
                    "flex items-center gap-2 rounded-r-none justify-between",
                    v ? "max-w-[60px]" : "max-w-[100px]",
                    x && "cursor-not-allowed opacity-50"
                  ),
                  children: [
                    /* @__PURE__ */ e.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ e.jsx(ne, { icon: P.flag, className: "w-5 h-5" }),
                      !v && /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: P.code })
                    ] }),
                    /* @__PURE__ */ e.jsx(
                      ne,
                      {
                        icon: "mdi:chevron-down",
                        className: w("transition-transform", y && "rotate-180")
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "tel",
                  id: T,
                  value: B,
                  onChange: le,
                  disabled: x,
                  className: w(
                    O,
                    C ? "rounded-l-none" : `rounded-l-${a}`,
                    "flex-1 min-w-0 w-full"
                  ),
                  placeholder: v ? "e.g. +6281234567890" : E
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
                        value: _,
                        onChange: (h) => {
                          const A = h.target.value;
                          /^[a-zA-Z0-9\s]*$/.test(A) && J(A);
                        },
                        placeholder: "Search countries...",
                        className: "w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:border-primary-300"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "max-h-[300px] overflow-y-auto", children: M.map((h) => /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => L(h),
                        className: w(
                          "w-full px-3 py-2 text-sm text-left hover:bg-primary-50 cursor-pointer",
                          P.iso === h.iso && "bg-primary-50"
                        ),
                        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ e.jsx(ne, { icon: h.flag, className: "w-5 h-5" }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-sm font-medium", children: h.code }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-sm text-neutral-600", children: h.name })
                        ] })
                      },
                      h.iso + h.code
                    )) })
                  ]
                }
              ),
              typeof document < "u" ? document.body : document
            )
          ] }),
          n && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: Z, children: l }),
          !n && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: Y, children: c })
        ]
      }
    );
  }
);
It.displayName = "PhoneInput";
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
          It,
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
          It,
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
}, ba = Ne("absolute z-50 p-4", {
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
}), Xa = ({
  content: t,
  children: r,
  position: s = "bottom",
  color: a = "light",
  customColor: n,
  rounded: l = "xl",
  shadow: c = "md",
  className: i,
  trigger: d = "click",
  autoFocus: g = !1,
  isOpen: m,
  onOpenChange: u,
  closeOnClickOutside: x = !0
}) => {
  const [f, E] = te(!1), [v, k] = te({ top: 0, left: 0 }), [y, S] = te(!1), [P, V] = te(!1), [_, J] = te(!1), B = fe(null), j = fe(null), I = m !== void 0, p = I ? m : f, K = fe(), R = fe(), T = fe(s);
  be(() => {
    const C = () => {
      const A = Ee();
      if (A && "navigator" in A && A.navigator) {
        const q = A.navigator.userAgent, Q = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          q
        ), N = A.innerWidth <= 768;
        S(Q || N);
      }
    };
    C();
    const h = Ee();
    if (h && "addEventListener" in h)
      return h.addEventListener("resize", C), () => h.removeEventListener("resize", C);
  }, []);
  const Y = De(() => {
    const C = Ee();
    return C ? "visualViewport" in C && C.visualViewport ? {
      width: C.visualViewport.width,
      height: C.visualViewport.height
    } : {
      width: C.innerWidth,
      height: C.innerHeight
    } : { width: 0, height: 0 };
  }, []), Z = De(
    (C, h, A, q) => {
      const Q = ["bottom", "top", "right", "left"];
      for (const N of Q) {
        let F = 0, re = 0;
        const ue = 4;
        switch (N) {
          case "top":
            if (F = C.top - h.height - ue, re = Math.max(0, (A - h.width) / 2), F >= 0) return { position: N, top: F, left: re };
            break;
          case "bottom":
            if (F = C.bottom + ue, re = Math.max(0, (A - h.width) / 2), F + h.height <= q)
              return { position: N, top: F, left: re };
            break;
          case "right":
            if (F = C.top + (C.height - h.height) / 2, re = C.right + ue, re + h.width <= A && F >= 0 && F + h.height <= q)
              return { position: N, top: F, left: re };
            break;
          case "left":
            if (F = C.top + (C.height - h.height) / 2, re = C.left - h.width - ue, re >= 0 && F >= 0 && F + h.height <= q)
              return { position: N, top: F, left: re };
            break;
        }
      }
      return {
        position: "bottom",
        top: Math.max(0, (q - h.height) / 2),
        left: Math.max(0, (A - h.width) / 2)
      };
    },
    []
  ), M = De(() => {
    if (!B.current || !j.current) return;
    const C = j.current.getBoundingClientRect(), h = B.current.getBoundingClientRect(), { width: A, height: q } = Y(), Q = C.top + window.scrollY, N = C.left + window.scrollX;
    let F = 0, re = 0;
    const ue = y ? 4 : 8;
    if (y) {
      const Pe = Z(
        C,
        h,
        A,
        q
      );
      F = Pe.top + window.scrollY, re = Pe.left + window.scrollX;
    } else
      switch (s) {
        case "top":
          F = Q - h.height - ue, re = N + (C.width - h.width) / 2;
          break;
        case "bottom":
          F = Q + C.height + ue, re = N + (C.width - h.width) / 2;
          break;
        case "left":
          F = Q + (C.height - h.height) / 2, re = N - h.width - ue;
          break;
        case "right":
          F = Q + (C.height - h.height) / 2, re = N + C.width + ue;
          break;
      }
    let Te = { top: F, left: re };
    if (F < 0 || F + h.height > window.innerHeight) {
      const Pe = [
        {
          pos: "bottom",
          top: Q + C.height + ue,
          left: N + (C.width - h.width) / 2
        },
        {
          pos: "top",
          top: Q - h.height - ue,
          left: N + (C.width - h.width) / 2
        },
        {
          pos: "center",
          top: Math.max(0, (window.innerHeight - h.height) / 2),
          left: Math.max(0, (window.innerWidth - h.width) / 2)
        }
      ];
      for (const Ie of Pe)
        if (Ie.top >= 0 && Ie.top + h.height <= window.innerHeight) {
          Te = Ie;
          break;
        }
    }
    (re < 0 || re + h.width > window.innerWidth) && (Te.left = Math.max(
      0,
      (window.innerWidth - h.width) / 2
    )), k(Te);
  }, [s, y, Y, Z]), b = De(() => {
    K.current && clearTimeout(K.current), K.current = setTimeout(M, 16);
  }, [M]);
  be(() => {
    T.current !== s && (T.current = s, p && setTimeout(M, 0));
  }, [s, p, M]), be(() => () => {
    K.current && clearTimeout(K.current), R.current && clearTimeout(R.current);
  }, []), be(() => {
    if (p) {
      M();
      const C = setInterval(M, 200), h = Ee();
      return h && (h.addEventListener("scroll", M, {
        passive: !0,
        capture: !0
      }), h.addEventListener("resize", b, {
        passive: !0
      }), "visualViewport" in h && h.visualViewport && (h.visualViewport.addEventListener(
        "resize",
        b
      ), h.visualViewport.addEventListener("scroll", M))), () => {
        clearInterval(C);
        const A = Ee();
        A && (A.removeEventListener("scroll", M, !0), A.removeEventListener("resize", b), "visualViewport" in A && A.visualViewport && (A.visualViewport.removeEventListener(
          "resize",
          b
        ), A.visualViewport.removeEventListener("scroll", M)));
      };
    }
  }, [p, M, b]), be(() => {
    if (p && g && B.current) {
      const C = B.current.querySelector(
        "input, select, textarea, button, [tabindex]:not([tabindex='-1'])"
      );
      C && C.focus();
    }
  }, [p, g]);
  const z = () => {
    J(!0), V(!0), I ? u == null || u(!0) : E(!0), setTimeout(() => {
      J(!1);
    }, 50);
  }, L = () => {
    V(!0), R.current && clearTimeout(R.current), R.current = setTimeout(() => {
      I ? u == null || u(!1) : E(!1), V(!1);
    }, 200);
  }, le = (C) => {
    C.stopPropagation(), d === "click" && (I ? u == null || u(!m) : f ? L() : z());
  };
  be(() => {
    if (!x) return;
    const C = (A) => {
      d === "click" && B.current && !B.current.contains(A.target) && j.current && !j.current.contains(A.target) && L();
    }, h = (A) => {
      d === "click" && B.current && !B.current.contains(A.target) && j.current && !j.current.contains(A.target) && L();
    };
    return p && (document.addEventListener("pointerdown", C, !0), y && document.addEventListener("touchstart", h, !0)), () => {
      document.removeEventListener("pointerdown", C, !0), y && document.removeEventListener("touchstart", h, !0);
    };
  }, [p, d, x, y]);
  const O = () => {
    if (!p && !P) return null;
    const C = ke();
    if (!("body" in C)) return null;
    const h = _ ? 0.95 : p ? 1 : 0.95, A = _ ? 0 : p ? 1 : 0;
    return He(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: B,
          className: w(
            ba({ color: a, rounded: l, shadow: c }),
            a === "custom" && n ? n : "",
            y && "max-w-[90vw] max-h-[80vh] overflow-auto",
            // Mobile constraints
            // Professional animation classes with custom timing
            "transform-gpu transition-all duration-200 ease-out",
            i
          ),
          style: {
            top: `${v.top}px`,
            left: `${v.left}px`,
            background: a === "custom" && n ? n : void 0,
            // Mobile-specific styles
            ...y && {
              position: "fixed",
              // Use fixed positioning on mobile for better reliability
              zIndex: 9999
              // Ensure it's above other elements
            },
            // Smooth, professional animations
            transform: `scale(${h})`,
            opacity: A,
            // Smooth transform origin for better animation
            transformOrigin: "center",
            // Prevent any sliding animations and optimize performance
            willChange: "transform, opacity",
            // Custom transition timing for professional feel
            transition: "transform 200ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)"
          },
          tabIndex: -1,
          role: "dialog",
          "aria-modal": "true",
          children: t
        }
      ),
      C.body
    );
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: j,
      className: "relative inline-block",
      onMouseEnter: d === "hover" ? z : void 0,
      onMouseLeave: d === "hover" ? L : void 0,
      onClick: le,
      tabIndex: 0,
      children: [
        r,
        O()
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
    separator: n = /* @__PURE__ */ e.jsx(ne, { icon: "mdi:slash-forward", className: "h-4 w-4 flex-shrink-0" }),
    activeLastItem: l = !0,
    ...c
  }, i) => /* @__PURE__ */ e.jsx(
    "nav",
    {
      ref: i,
      className: w(va({ variant: r, size: s }), t),
      "aria-label": "Breadcrumb",
      ...c,
      children: /* @__PURE__ */ e.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: a.map((d, g) => {
        const m = g === a.length - 1, u = m && l;
        return /* @__PURE__ */ e.jsxs(
          "li",
          {
            className: w(
              "flex items-center gap-1.5",
              u && "text-primary font-medium"
            ),
            children: [
              d.icon && /* @__PURE__ */ e.jsx(
                ne,
                {
                  icon: d.icon,
                  className: w(
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
                u && "text-primary"
              ), children: d.label }),
              !m && /* @__PURE__ */ e.jsx("span", { className: w(
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
}, wa = ({
  schema: t,
  variant: r = "primary"
}) => {
  const s = [
    {
      name: "no",
      label: "No.",
      accessorKey: "no",
      type: "number",
      width: 80
    },
    ...t
  ], a = br(r);
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white rounded-md", children: /* @__PURE__ */ e.jsx("div", { className: "p-0 w-full overflow-auto rounded-t-md [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full border-spacing-0 border-separate min-w-full", children: [
    /* @__PURE__ */ e.jsx(
      "thead",
      {
        className: w(
          "border-2 sticky top-0 z-10 rounded-t-md",
          a.border
        ),
        children: /* @__PURE__ */ e.jsx("tr", { children: s.map((n, l) => /* @__PURE__ */ e.jsx(
          "th",
          {
            className: w(
              "text-sm text-wrap border-y p-4 text-left",
              a.header,
              {
                "rounded-tl-md": l === 0,
                "rounded-tr-md": l === s.length - 1
              }
            ),
            style: {
              width: typeof n.width == "number" ? `${n.width}px` : n.width,
              minWidth: typeof n.width == "number" ? `${n.width}px` : n.width
            },
            children: n.label
          },
          l
        )) })
      }
    ),
    /* @__PURE__ */ e.jsx("tbody", { children: [...Array(5)].map((n, l) => /* @__PURE__ */ e.jsx(
      "tr",
      {
        className: w("p-3", {
          [a.stripe]: l % 2 !== 0,
          "bg-white": l % 2 === 0
        }),
        children: s.map((c, i) => /* @__PURE__ */ e.jsx(
          "td",
          {
            className: "text-left text-nowrap text-sm p-4",
            style: {
              width: typeof c.width == "number" ? `${c.width}px` : c.width,
              minWidth: typeof c.width == "number" ? `${c.width}px` : c.width
            },
            children: /* @__PURE__ */ e.jsx(Zs, { className: "h-10 w-full rounded-md" })
          },
          `${l}-${i}`
        ))
      },
      l
    )) })
  ] }) }) });
}, Ja = ({
  schema: t,
  data: r,
  className: s,
  headerClassName: a,
  rowClassName: n,
  cellClassName: l,
  emptyState: c,
  isLoading: i,
  loadingState: d,
  showIndex: g = !1,
  onPageChange: m,
  onPageSizeChange: u,
  onSortChange: x,
  onRowClick: f,
  showPagination: E = !1,
  variant: v = "primary",
  meta: k = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [y, S] = te(() => {
    const B = t.find((j) => j.sortable && j.sort);
    return B ? [
      {
        id: B.accessorKey.toString(),
        desc: B.sort === "desc"
      }
    ] : [];
  }), P = ve.useMemo(() => {
    const B = t.map((j) => ({
      accessorKey: j.accessorKey,
      header: j.label,
      enableSorting: !!j.sortable,
      cell: j.render ? ({ row: I }) => {
        var p;
        return (p = j.render) == null ? void 0 : p.call(j, I.original[j.accessorKey], I.original, I.index);
      } : ({ row: I }) => I.original[j.accessorKey] || "-",
      meta: {
        align: j.align || "left",
        width: j.width
      }
    }));
    return g ? [
      {
        accessorKey: "no",
        header: "No.",
        enableSorting: !1,
        cell: ({ row: j }) => (k.current_page - 1) * k.limit_number + j.index + 1,
        meta: {
          align: "left",
          width: 80
        }
      },
      ...B
    ] : B;
  }, [t, g, k]), V = _r({
    data: r,
    columns: P,
    state: {
      sorting: y
    },
    onSortingChange: (B) => {
      const j = typeof B == "function" ? B(y) : B;
      S(j), j.length > 0 ? x == null || x(j[0].desc ? "desc" : "asc", j[0].id) : x == null || x("", "");
    },
    getCoreRowModel: Or(),
    getSortedRowModel: Lr(),
    getPaginationRowModel: zr(),
    manualPagination: !0,
    pageCount: k.total_page
  }), _ = br(v);
  if (i)
    return d || /* @__PURE__ */ e.jsx(wa, { schema: t, variant: v });
  const J = (B, j, I) => {
    const p = B.target;
    p.tagName === "BUTTON" || p.tagName === "A" || p.tagName === "INPUT" || p.tagName === "SELECT" || p.closest("button") !== null || p.closest("a") !== null || p.closest("input") !== null || p.closest("select") !== null || f == null || f(j, I);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-md", children: [
    /* @__PURE__ */ e.jsx("div", { className: "p-0 w-full overflow-auto rounded-t-md [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full", children: /* @__PURE__ */ e.jsxs(
      "table",
      {
        className: w(
          "w-full border-spacing-0 border-separate min-w-full",
          s
        ),
        children: [
          /* @__PURE__ */ e.jsx(
            "thead",
            {
              className: w(
                "border-2 sticky top-0 z-10 rounded-t-md",
                _.border
              ),
              children: V.getHeaderGroups().map((B) => /* @__PURE__ */ e.jsx("tr", { children: B.headers.map(
                (j, I) => {
                  const p = j.column.columnDef.meta;
                  return /* @__PURE__ */ e.jsx(
                    "th",
                    {
                      className: w(
                        "text-sm text-wrap border-y p-4",
                        _.header,
                        {
                          "cursor-pointer": j.column.getCanSort(),
                          "rounded-tl-md": I === 0,
                          "rounded-tr-md": I === B.headers.length - 1,
                          "text-left": (p == null ? void 0 : p.align) === "left",
                          "text-center": (p == null ? void 0 : p.align) === "center",
                          "text-right": (p == null ? void 0 : p.align) === "right"
                        },
                        a
                      ),
                      style: {
                        width: typeof (p == null ? void 0 : p.width) == "number" ? `${p.width}px` : p == null ? void 0 : p.width,
                        minWidth: typeof (p == null ? void 0 : p.width) == "number" ? `${p.width}px` : p == null ? void 0 : p.width
                      },
                      onClick: j.column.getCanSort() ? j.column.getToggleSortingHandler() : void 0,
                      children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ e.jsx(
                          "span",
                          {
                            className: w({
                              "font-semibold": I === 0
                            }),
                            children: Ft(
                              j.column.columnDef.header,
                              j.getContext()
                            )
                          }
                        ),
                        j.column.getCanSort() && /* @__PURE__ */ e.jsx(
                          ne,
                          {
                            icon: j.column.getIsSorted() ? j.column.getIsSorted() === "desc" ? "mdi:keyboard-arrow-up" : "mdi:keyboard-arrow-down" : "mdi:unfold-more-horizontal",
                            className: w("h-4 w-4", {
                              "text-white": v !== "ghost",
                              "text-gray-700": v === "ghost"
                            })
                          }
                        )
                      ] })
                    },
                    j.id
                  );
                }
              ) }, B.id))
            }
          ),
          /* @__PURE__ */ e.jsx("tbody", { children: V.getRowModel().rows.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx(
            "td",
            {
              colSpan: V.getAllColumns().length,
              className: w(
                "text-center border h-full w-full rounded-b-md"
              ),
              children: c || /* @__PURE__ */ e.jsxs("div", { className: "flex mx-auto w-full text-center justify-center gap-3 items-center", children: [
                /* @__PURE__ */ e.jsx("p", { children: "Data Not Found" }),
                /* @__PURE__ */ e.jsx(ne, { icon: "mdi:face-frown-open", size: 34 })
              ] })
            }
          ) }) : V.getRowModel().rows.map((B, j) => /* @__PURE__ */ e.jsx(
            "tr",
            {
              className: w(
                "p-3",
                _.row,
                {
                  [_.stripe]: j % 2 !== 0,
                  "bg-white": j % 2 === 0,
                  "cursor-pointer": f
                },
                n
              ),
              onClick: (I) => J(I, B.original, j),
              children: B.getVisibleCells().map((I) => {
                const p = I.column.columnDef.meta;
                return /* @__PURE__ */ e.jsx(
                  "td",
                  {
                    className: w(
                      "px-4 py-3 text-sm text-gray-900",
                      {
                        "text-left": (p == null ? void 0 : p.align) === "left",
                        "text-center": (p == null ? void 0 : p.align) === "center",
                        "text-right": (p == null ? void 0 : p.align) === "right"
                      },
                      l
                    ),
                    style: {
                      width: typeof (p == null ? void 0 : p.width) == "number" ? `${p.width}px` : p == null ? void 0 : p.width,
                      minWidth: typeof (p == null ? void 0 : p.width) == "number" ? `${p.width}px` : p == null ? void 0 : p.width
                    },
                    children: Ft(
                      I.column.columnDef.cell,
                      I.getContext()
                    )
                  },
                  I.id
                );
              })
            },
            B.id
          )) })
        ]
      }
    ) }),
    !!r.length && E && /* @__PURE__ */ e.jsx("div", { className: "p-4 bg-white rounded-b-md", children: /* @__PURE__ */ e.jsx(
      Hs,
      {
        currentPage: k.current_page,
        totalPages: k.total_page,
        totalData: k.total_data,
        onPageChange: m || (() => {
        }),
        perPage: k.limit_number,
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
    ...g
  }, m) => {
    const x = c || (i ? {
      default: "mdi:information",
      success: "mdi:check-circle",
      error: "mdi:alert-circle",
      warning: "mdi:alert",
      info: "mdi:information"
    }[r] : void 0), f = a || n;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: m,
        className: w(
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
        ...g,
        children: [
          x && /* @__PURE__ */ e.jsx(
            ne,
            {
              icon: x,
              className: w(
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
                className: w("text-sm font-medium leading-5", {
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
                className: w(a ? "mt-1" : "", "text-sm leading-5", {
                  "text-gray": r === "default",
                  "text-success-700": r === "success",
                  "text-danger-700": r === "error",
                  "text-warning-700": r === "warning",
                  "text-info-700": r === "info"
                }),
                children: n
              }
            ),
            !f && /* @__PURE__ */ e.jsx("span", { className: "text-sm leading-5", children: g.children })
          ] }),
          d && l && /* @__PURE__ */ e.jsx(
            Ae,
            {
              variant: "ghost",
              size: "sm",
              onClick: l,
              className: w(
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
              children: /* @__PURE__ */ e.jsx(ne, { icon: "mdi:close", className: w(n ? "h-5 w-5" : "h-4 w-4") })
            }
          )
        ]
      }
    );
  }
);
vr.displayName = "Toast";
const Ct = Mr(void 0), ja = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, Qa = ({ children: t }) => {
  const [r, s] = te([]), a = De((i) => {
    s((d) => d.filter((g) => g.id !== i));
  }, []), n = De((i) => {
    const d = Math.random().toString(36).substr(2, 9), g = i.position || "top-right", m = i.duration || 5e3, u = {
      ...i,
      id: d,
      position: g
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
          className: w(
            "fixed z-[100] flex flex-col gap-2 min-w-[320px] max-w-[420px]",
            ja[i],
            i.includes("bottom") ? "flex-col-reverse" : "flex-col"
          ),
          children: d.map((g) => /* @__PURE__ */ e.jsx(
            vr,
            {
              ...g,
              onClose: () => a(g.id),
              className: "animate-slide-in"
            },
            g.id
          ))
        },
        i
      )) }),
      c.body
    )
  ] }) : /* @__PURE__ */ e.jsx(Ct.Provider, { value: { showToast: n, removeToast: a }, children: t });
}, en = () => {
  const t = Dr(Ct);
  if (!t)
    throw new Error("useToast must be used within a ToastProvider");
  return t;
}, Na = ({
  label: t,
  value: r,
  icon: s,
  className: a
}) => /* @__PURE__ */ e.jsxs(Pt, { className: w(
  "flex items-center gap-4 rounded-lg w-full bg-white p-4 shadow-sm hover:bg-neutral-50 transition-shadow duration-200 justify-between",
  a
), children: [
  /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-gray", children: t }),
    /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-2xl font-semibold text-gray-900", children: r })
  ] }),
  s && /* @__PURE__ */ e.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50", children: /* @__PURE__ */ e.jsx(ne, { icon: s, className: "h-6 w-6 text-primary-600" }) })
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
}, Xt = {
  ...Ea,
  ...yr
}, Jt = {
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
    return Qt(t) && t.code && Xt[t.code] ? Xt[t.code] : Jt;
  })(), g = l || d.image, m = c || (Qt(t) ? t.message : null) || d.message;
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${a}`, children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: g,
        alt: "Error illustration",
        className: "max-w-[300px] h-auto"
      }
    ),
    typeof m == "string" ? /* @__PURE__ */ e.jsx(ut, { variant: "body1", className: "m-0", children: m }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: m }),
    r && /* @__PURE__ */ e.jsx(
      Ae,
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
    required: g = !1,
    showSubmitButton: m = !1,
    submitButtonLabel: u = "Submit",
    submitButtonVariant: x = "primary",
    length: f = 6,
    numericOnly: E = !0,
    onComplete: v,
    onChange: k,
    onSubmit: y,
    value: S,
    defaultValue: P = "",
    disabled: V = !1,
    autoFocus: _ = !1,
    ...J
  }, B) => {
    const [j, I] = te(P || ""), p = fe([]);
    be(() => {
      S !== void 0 && I(S);
    }, [S]);
    const K = S !== void 0, R = K ? S : j, T = (O) => {
      K || I(O), k == null || k(O), O.length === f && (v == null || v(O), m || y == null || y(O));
    }, Y = (O) => (C) => {
      p.current[O] = C;
    }, Z = (O) => {
      O.target.select();
    }, M = (O, C) => {
      var N;
      const h = O.target.value;
      let A = "";
      if (h.length >= 1)
        A = h.slice(-1);
      else if (h.length === 0) {
        const F = R.split("");
        F[C] = "", T(F.join(""));
        return;
      }
      if (E && !/^\d$/.test(A))
        return;
      const q = R.split("");
      for (; q.length <= C; )
        q.push("");
      q[C] = A;
      const Q = q.join("");
      T(Q), C < f - 1 && A && ((N = p.current[C + 1]) == null || N.focus());
    }, b = (O, C) => {
      var h, A, q;
      if (O.key === "Backspace") {
        const Q = R.split("");
        R[C] ? (O.preventDefault(), Q[C] = "", T(Q.join(""))) : C > 0 && (O.preventDefault(), Q[C - 1] = "", T(Q.join("")), (h = p.current[C - 1]) == null || h.focus());
      } else if (O.key === "Delete") {
        if (R[C]) {
          O.preventDefault();
          const Q = R.split("");
          Q[C] = "", T(Q.join(""));
        }
      } else if (O.key === "ArrowLeft" && C > 0)
        O.preventDefault(), (A = p.current[C - 1]) == null || A.focus();
      else if (O.key === "ArrowRight" && C < f - 1)
        O.preventDefault(), (q = p.current[C + 1]) == null || q.focus();
      else if (!O.ctrlKey && !O.altKey && !O.metaKey && O.key.length === 1 && E && !/^\d$/.test(O.key)) {
        O.preventDefault();
        return;
      }
    }, z = (O) => {
      var Q;
      O.preventDefault();
      const C = O.clipboardData.getData("text/plain").trim();
      if (E && !/^\d+$/.test(C))
        return;
      const A = C.slice(0, f).padEnd(R.length, "").slice(0, f);
      T(A);
      const q = A.length < f ? A.length : f - 1;
      (Q = p.current[q]) == null || Q.focus();
    }, L = () => {
      R.length === f && (y == null || y(R));
    }, le = R.split("").concat(Array(f - R.length).fill(""));
    return /* @__PURE__ */ e.jsxs("div", { ref: B, className: w("w-full", t), ...J, children: [
      i && /* @__PURE__ */ e.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        i,
        g && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: f }).map((O, C) => /* @__PURE__ */ e.jsx(
          "input",
          {
            ref: Y(C),
            type: E ? "tel" : "text",
            inputMode: E ? "numeric" : "text",
            maxLength: 1,
            value: le[C] || "",
            onChange: (h) => M(h, C),
            onKeyDown: (h) => b(h, C),
            onPaste: C === 0 ? z : void 0,
            onFocus: Z,
            disabled: V,
            autoFocus: _ && C === 0,
            className: w(
              Ra({
                variant: n ? "error" : r,
                size: s,
                rounded: a
              })
            ),
            "aria-invalid": n
          },
          C
        )) }),
        n && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger self-start", children: l }),
        !n && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral self-start", children: c }),
        d && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-neutral-600", children: d }),
        m && /* @__PURE__ */ e.jsx(
          Ae,
          {
            variant: x,
            disabled: R.length !== f || V,
            onClick: L,
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
  let g = "";
  d && (a > n ? g = `${n}+` : g = String(a));
  const m = d ? "px-2" : "", u = d ? "min-w-[20px]" : "w-2.5 h-2.5", x = d ? "h-5" : "h-2.5", f = typeof s == "string" && s in er ? er[s] : s;
  return /* @__PURE__ */ e.jsxs("div", { className: w("relative inline-block", r), children: [
    l || (t ? /* @__PURE__ */ e.jsx(ne, { icon: t, color: f, size: 32, ...c }) : null),
    /* @__PURE__ */ e.jsx(
      "span",
      {
        className: w(
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
        children: d ? g : ""
      }
    )
  ] });
}, Ia = {
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
}, Ca = {
  "flight-light": "FLIGHT_LIGHT",
  "flight-dark": "FLIGHT_DARK",
  "tixia-circular": "TIXIA-CIRCULAR",
  "tixia-linear": "TIXIA-LINEAR"
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
  const d = Ca[t], g = Ia[d], m = mt(a, "w-full"), u = mt(n, "h-full"), x = mt(l, "w-auto"), f = mt(c, "h-auto");
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${m.className} ${u.className} ${i}`,
      style: { ...m.style, ...u.style },
      children: [
        /* @__PURE__ */ e.jsx(
          "img",
          {
            src: r || g.image,
            alt: "Loading animation",
            className: `${x.className} ${f.className}`,
            style: { ...x.style, ...f.style }
          }
        ),
        s ? typeof s == "string" ? /* @__PURE__ */ e.jsx(ut, { variant: "body1", className: "m-0", children: s }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: s }) : /* @__PURE__ */ e.jsx(ut, { variant: "body1", className: "m-0", children: g.message })
      ]
    }
  );
}, Ta = {
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
}, Pa = {
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
  const d = Pa[t], g = Ta[d];
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${i}`, children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: n || g.image,
        alt: "Negative case illustration",
        className: "max-w-[300px] h-auto",
        style: { width: l, height: c }
      }
    ),
    r ? typeof r == "string" ? /* @__PURE__ */ e.jsx(ut, { variant: "body1", className: "m-0", children: r }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: r }) : /* @__PURE__ */ e.jsx(ut, { variant: "body1", className: "m-0", children: g.message }),
    s && /* @__PURE__ */ e.jsx(
      Ae,
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
}) => /* @__PURE__ */ e.jsx("div", { className: w("w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", r), children: t.map((s, a) => /* @__PURE__ */ e.jsx(Na, { ...s }, a)) });
export {
  La as Accordion,
  vs as AutoComplete,
  Oa as Avatar,
  $a as Badge,
  rn as BadgeNotif,
  ya as Breadcrumbs,
  Ae as Button,
  Pt as Card,
  Es as CheckBoxGroup,
  wt as Checkbox,
  Va as Chip,
  Ds as DatePicker,
  zs as Dialog,
  $s as DialogActions,
  Os as DialogBody,
  fr as DialogHeader,
  Ls as DialogTitle,
  Vs as Divider,
  tn as ErrorWrapper,
  Fa as FileUpload,
  ne as Icon,
  cr as Input,
  Aa as InputOTP,
  sn as Loader,
  an as NegativeCase,
  Ba as Notification,
  Hs as Pagination,
  It as PhoneInput,
  Za as PhoneInputDemo,
  Xa as Popover,
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
  Ja as Table,
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
  w as cn,
  Ra as inputOTPVariants,
  na as toggleVariants,
  en as useToast
};
