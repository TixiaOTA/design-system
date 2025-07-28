import he, { useState as ee, useEffect as pe, forwardRef as ke, useRef as ge, useCallback as Ye, Children as Ot, isValidElement as bt, cloneElement as Sr, createContext as Rr, useContext as Mr } from "react";
import { createPortal as Ve } from "react-dom";
import fe from "dayjs";
import { useReactTable as Cr, getPaginationRowModel as Ar, getSortedRowModel as Pr, getCoreRowModel as Tr, flexRender as Lt } from "@tanstack/react-table";
var Zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Jt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Nt = { exports: {} }, rt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $t;
function Ir() {
  if ($t) return rt;
  $t = 1;
  var t = he, r = Symbol.for("react.element"), a = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(i, d, m) {
    var b, u = {}, h = null, f = null;
    m !== void 0 && (h = "" + m), d.key !== void 0 && (h = "" + d.key), d.ref !== void 0 && (f = d.ref);
    for (b in d) s.call(d, b) && !l.hasOwnProperty(b) && (u[b] = d[b]);
    if (i && i.defaultProps) for (b in d = i.defaultProps, d) u[b] === void 0 && (u[b] = d[b]);
    return { $$typeof: r, type: i, key: h, ref: f, props: u, _owner: n.current };
  }
  return rt.Fragment = a, rt.jsx = c, rt.jsxs = c, rt;
}
var at = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ft;
function Dr() {
  return Ft || (Ft = 1, process.env.NODE_ENV !== "production" && function() {
    var t = he, r = Symbol.for("react.element"), a = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), i = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), N = Symbol.iterator, j = "@@iterator";
    function p(o) {
      if (o === null || typeof o != "object")
        return null;
      var M = N && o[N] || o[j];
      return typeof M == "function" ? M : null;
    }
    var y = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(o) {
      {
        for (var M = arguments.length, $ = new Array(M > 1 ? M - 1 : 0), Z = 1; Z < M; Z++)
          $[Z - 1] = arguments[Z];
        D("error", o, $);
      }
    }
    function D(o, M, $) {
      {
        var Z = y.ReactDebugCurrentFrame, ce = Z.getStackAddendum();
        ce !== "" && (M += "%s", $ = $.concat([ce]));
        var ue = $.map(function(se) {
          return String(se);
        });
        ue.unshift("Warning: " + M), Function.prototype.apply.call(console[o], console, ue);
      }
    }
    var O = !1, T = !1, U = !1, V = !1, E = !1, C;
    C = Symbol.for("react.module.reference");
    function v(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === s || o === l || E || o === n || o === m || o === b || V || o === f || O || T || U || typeof o == "object" && o !== null && (o.$$typeof === h || o.$$typeof === u || o.$$typeof === c || o.$$typeof === i || o.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === C || o.getModuleId !== void 0));
    }
    function G(o, M, $) {
      var Z = o.displayName;
      if (Z)
        return Z;
      var ce = M.displayName || M.name || "";
      return ce !== "" ? $ + "(" + ce + ")" : $;
    }
    function S(o) {
      return o.displayName || "Context";
    }
    function A(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case s:
          return "Fragment";
        case a:
          return "Portal";
        case l:
          return "Profiler";
        case n:
          return "StrictMode";
        case m:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case i:
            var M = o;
            return S(M) + ".Consumer";
          case c:
            var $ = o;
            return S($._context) + ".Provider";
          case d:
            return G(o, o.render, "ForwardRef");
          case u:
            var Z = o.displayName || null;
            return Z !== null ? Z : A(o.type) || "Memo";
          case h: {
            var ce = o, ue = ce._payload, se = ce._init;
            try {
              return A(se(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, F = 0, R, w, I, g, Y, P, q;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function de() {
      {
        if (F === 0) {
          R = console.log, w = console.info, I = console.warn, g = console.error, Y = console.group, P = console.groupCollapsed, q = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: re,
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
        F++;
      }
    }
    function ie() {
      {
        if (F--, F === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, o, {
              value: R
            }),
            info: L({}, o, {
              value: w
            }),
            warn: L({}, o, {
              value: I
            }),
            error: L({}, o, {
              value: g
            }),
            group: L({}, o, {
              value: Y
            }),
            groupCollapsed: L({}, o, {
              value: P
            }),
            groupEnd: L({}, o, {
              value: q
            })
          });
        }
        F < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = y.ReactCurrentDispatcher, _;
    function J(o, M, $) {
      {
        if (_ === void 0)
          try {
            throw Error();
          } catch (ce) {
            var Z = ce.stack.trim().match(/\n( *(at )?)/);
            _ = Z && Z[1] || "";
          }
        return `
` + _ + o;
      }
    }
    var je = !1, Ne;
    {
      var Te = typeof WeakMap == "function" ? WeakMap : Map;
      Ne = new Te();
    }
    function _e(o, M) {
      if (!o || je)
        return "";
      {
        var $ = Ne.get(o);
        if ($ !== void 0)
          return $;
      }
      var Z;
      je = !0;
      var ce = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ue;
      ue = oe.current, oe.current = null, de();
      try {
        if (M) {
          var se = function() {
            throw Error();
          };
          if (Object.defineProperty(se.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(se, []);
            } catch (Ce) {
              Z = Ce;
            }
            Reflect.construct(o, [], se);
          } else {
            try {
              se.call();
            } catch (Ce) {
              Z = Ce;
            }
            o.call(se.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ce) {
            Z = Ce;
          }
          o();
        }
      } catch (Ce) {
        if (Ce && Z && typeof Ce.stack == "string") {
          for (var te = Ce.stack.split(`
`), Se = Z.stack.split(`
`), xe = te.length - 1, ve = Se.length - 1; xe >= 1 && ve >= 0 && te[xe] !== Se[ve]; )
            ve--;
          for (; xe >= 1 && ve >= 0; xe--, ve--)
            if (te[xe] !== Se[ve]) {
              if (xe !== 1 || ve !== 1)
                do
                  if (xe--, ve--, ve < 0 || te[xe] !== Se[ve]) {
                    var Pe = `
` + te[xe].replace(" at new ", " at ");
                    return o.displayName && Pe.includes("<anonymous>") && (Pe = Pe.replace("<anonymous>", o.displayName)), typeof o == "function" && Ne.set(o, Pe), Pe;
                  }
                while (xe >= 1 && ve >= 0);
              break;
            }
        }
      } finally {
        je = !1, oe.current = ue, ie(), Error.prepareStackTrace = ce;
      }
      var Qe = o ? o.displayName || o.name : "", Ue = Qe ? J(Qe) : "";
      return typeof o == "function" && Ne.set(o, Ue), Ue;
    }
    function ze(o, M, $) {
      return _e(o, !1);
    }
    function Oe(o) {
      var M = o.prototype;
      return !!(M && M.isReactComponent);
    }
    function Ge(o, M, $) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return _e(o, Oe(o));
      if (typeof o == "string")
        return J(o);
      switch (o) {
        case m:
          return J("Suspense");
        case b:
          return J("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case d:
            return ze(o.render);
          case u:
            return Ge(o.type, M, $);
          case h: {
            var Z = o, ce = Z._payload, ue = Z._init;
            try {
              return Ge(ue(ce), M, $);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = Object.prototype.hasOwnProperty, Ke = {}, Ae = y.ReactDebugCurrentFrame;
    function Le(o) {
      if (o) {
        var M = o._owner, $ = Ge(o.type, o._source, M ? M.type : null);
        Ae.setExtraStackFrame($);
      } else
        Ae.setExtraStackFrame(null);
    }
    function qe(o, M, $, Z, ce) {
      {
        var ue = Function.call.bind(Ie);
        for (var se in o)
          if (ue(o, se)) {
            var te = void 0;
            try {
              if (typeof o[se] != "function") {
                var Se = Error((Z || "React class") + ": " + $ + " type `" + se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Se.name = "Invariant Violation", Se;
              }
              te = o[se](M, se, Z, $, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (xe) {
              te = xe;
            }
            te && !(te instanceof Error) && (Le(ce), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Z || "React class", $, se, typeof te), Le(null)), te instanceof Error && !(te.message in Ke) && (Ke[te.message] = !0, Le(ce), k("Failed %s type: %s", $, te.message), Le(null));
          }
      }
    }
    var Ze = Array.isArray;
    function $e(o) {
      return Ze(o);
    }
    function Je(o) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, $ = M && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return $;
      }
    }
    function B(o) {
      try {
        return H(o), !1;
      } catch {
        return !0;
      }
    }
    function H(o) {
      return "" + o;
    }
    function z(o) {
      if (B(o))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(o)), H(o);
    }
    var K = y.ReactCurrentOwner, W = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, le, ae;
    function be(o) {
      if (Ie.call(o, "ref")) {
        var M = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Me(o) {
      if (Ie.call(o, "key")) {
        var M = Object.getOwnPropertyDescriptor(o, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function dt(o, M) {
      typeof o.ref == "string" && K.current;
    }
    function ut(o, M) {
      {
        var $ = function() {
          le || (le = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        $.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: $,
          configurable: !0
        });
      }
    }
    function lt(o, M) {
      {
        var $ = function() {
          ae || (ae = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        $.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: $,
          configurable: !0
        });
      }
    }
    var it = function(o, M, $, Z, ce, ue, se) {
      var te = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: o,
        key: M,
        ref: $,
        props: se,
        // Record the component responsible for creating this element.
        _owner: ue
      };
      return te._store = {}, Object.defineProperty(te._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(te, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Z
      }), Object.defineProperty(te, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.freeze && (Object.freeze(te.props), Object.freeze(te)), te;
    };
    function ft(o, M, $, Z, ce) {
      {
        var ue, se = {}, te = null, Se = null;
        $ !== void 0 && (z($), te = "" + $), Me(M) && (z(M.key), te = "" + M.key), be(M) && (Se = M.ref, dt(M, ce));
        for (ue in M)
          Ie.call(M, ue) && !W.hasOwnProperty(ue) && (se[ue] = M[ue]);
        if (o && o.defaultProps) {
          var xe = o.defaultProps;
          for (ue in xe)
            se[ue] === void 0 && (se[ue] = xe[ue]);
        }
        if (te || Se) {
          var ve = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          te && ut(se, ve), Se && lt(se, ve);
        }
        return it(o, te, Se, ce, Z, K.current, se);
      }
    }
    var Fe = y.ReactCurrentOwner, At = y.ReactDebugCurrentFrame;
    function Xe(o) {
      if (o) {
        var M = o._owner, $ = Ge(o.type, o._source, M ? M.type : null);
        At.setExtraStackFrame($);
      } else
        At.setExtraStackFrame(null);
    }
    var mt;
    mt = !1;
    function gt(o) {
      return typeof o == "object" && o !== null && o.$$typeof === r;
    }
    function Pt() {
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
    function br(o) {
      return "";
    }
    var Tt = {};
    function hr(o) {
      {
        var M = Pt();
        if (!M) {
          var $ = typeof o == "string" ? o : o.displayName || o.name;
          $ && (M = `

Check the top-level render call using <` + $ + ">.");
        }
        return M;
      }
    }
    function It(o, M) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var $ = hr(M);
        if (Tt[$])
          return;
        Tt[$] = !0;
        var Z = "";
        o && o._owner && o._owner !== Fe.current && (Z = " It was passed a child from " + A(o._owner.type) + "."), Xe(o), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', $, Z), Xe(null);
      }
    }
    function Dt(o, M) {
      {
        if (typeof o != "object")
          return;
        if ($e(o))
          for (var $ = 0; $ < o.length; $++) {
            var Z = o[$];
            gt(Z) && It(Z, M);
          }
        else if (gt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var ce = p(o);
          if (typeof ce == "function" && ce !== o.entries)
            for (var ue = ce.call(o), se; !(se = ue.next()).done; )
              gt(se.value) && It(se.value, M);
        }
      }
    }
    function xr(o) {
      {
        var M = o.type;
        if (M == null || typeof M == "string")
          return;
        var $;
        if (typeof M == "function")
          $ = M.propTypes;
        else if (typeof M == "object" && (M.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        M.$$typeof === u))
          $ = M.propTypes;
        else
          return;
        if ($) {
          var Z = A(M);
          qe($, o.props, "prop", Z, o);
        } else if (M.PropTypes !== void 0 && !mt) {
          mt = !0;
          var ce = A(M);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(o) {
      {
        for (var M = Object.keys(o.props), $ = 0; $ < M.length; $++) {
          var Z = M[$];
          if (Z !== "children" && Z !== "key") {
            Xe(o), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Z), Xe(null);
            break;
          }
        }
        o.ref !== null && (Xe(o), k("Invalid attribute `ref` supplied to `React.Fragment`."), Xe(null));
      }
    }
    var _t = {};
    function zt(o, M, $, Z, ce, ue) {
      {
        var se = v(o);
        if (!se) {
          var te = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Se = br();
          Se ? te += Se : te += Pt();
          var xe;
          o === null ? xe = "null" : $e(o) ? xe = "array" : o !== void 0 && o.$$typeof === r ? (xe = "<" + (A(o.type) || "Unknown") + " />", te = " Did you accidentally export a JSX literal instead of a component?") : xe = typeof o, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", xe, te);
        }
        var ve = ft(o, M, $, ce, ue);
        if (ve == null)
          return ve;
        if (se) {
          var Pe = M.children;
          if (Pe !== void 0)
            if (Z)
              if ($e(Pe)) {
                for (var Qe = 0; Qe < Pe.length; Qe++)
                  Dt(Pe[Qe], o);
                Object.freeze && Object.freeze(Pe);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Dt(Pe, o);
        }
        if (Ie.call(M, "key")) {
          var Ue = A(o), Ce = Object.keys(M).filter(function(Er) {
            return Er !== "key";
          }), pt = Ce.length > 0 ? "{key: someKey, " + Ce.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_t[Ue + pt]) {
            var Nr = Ce.length > 0 ? "{" + Ce.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, pt, Ue, Nr, Ue), _t[Ue + pt] = !0;
          }
        }
        return o === s ? vr(ve) : xr(ve), ve;
      }
    }
    function yr(o, M, $) {
      return zt(o, M, $, !0);
    }
    function wr(o, M, $) {
      return zt(o, M, $, !1);
    }
    var kr = wr, jr = yr;
    at.Fragment = s, at.jsx = kr, at.jsxs = jr;
  }()), at;
}
process.env.NODE_ENV === "production" ? Nt.exports = Ir() : Nt.exports = Dr();
var e = Nt.exports;
function Xt(t) {
  var r, a, s = "";
  if (typeof t == "string" || typeof t == "number") s += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var n = t.length;
    for (r = 0; r < n; r++) t[r] && (a = Xt(t[r])) && (s && (s += " "), s += a);
  } else for (a in t) t[a] && (s && (s += " "), s += a);
  return s;
}
function ne() {
  for (var t, r, a = 0, s = "", n = arguments.length; a < n; a++) (t = arguments[a]) && (r = Xt(t)) && (s && (s += " "), s += r);
  return s;
}
const Bt = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, Yt = ne, ye = (t, r) => (a) => {
  var s;
  if ((r == null ? void 0 : r.variants) == null) return Yt(t, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: n, defaultVariants: l } = r, c = Object.keys(n).map((m) => {
    const b = a == null ? void 0 : a[m], u = l == null ? void 0 : l[m];
    if (b === null) return null;
    const h = Bt(b) || Bt(u);
    return n[m][h];
  }), i = a && Object.entries(a).reduce((m, b) => {
    let [u, h] = b;
    return h === void 0 || (m[u] = h), m;
  }, {}), d = r == null || (s = r.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((m, b) => {
    let { class: u, className: h, ...f } = b;
    return Object.entries(f).every((N) => {
      let [j, p] = N;
      return Array.isArray(p) ? p.includes({
        ...l,
        ...i
      }[j]) : {
        ...l,
        ...i
      }[j] === p;
    }) ? [
      ...m,
      u,
      h
    ] : m;
  }, []);
  return Yt(t, c, d, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, Mt = "-", _r = (t) => {
  const r = Or(t), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: s
  } = t;
  return {
    getClassGroupId: (c) => {
      const i = c.split(Mt);
      return i[0] === "" && i.length !== 1 && i.shift(), Qt(i, r) || zr(c);
    },
    getConflictingClassGroupIds: (c, i) => {
      const d = a[c] || [];
      return i && s[c] ? [...d, ...s[c]] : d;
    }
  };
}, Qt = (t, r) => {
  var c;
  if (t.length === 0)
    return r.classGroupId;
  const a = t[0], s = r.nextPart.get(a), n = s ? Qt(t.slice(1), s) : void 0;
  if (n)
    return n;
  if (r.validators.length === 0)
    return;
  const l = t.join(Mt);
  return (c = r.validators.find(({
    validator: i
  }) => i(l))) == null ? void 0 : c.classGroupId;
}, Vt = /^\[(.+)\]$/, zr = (t) => {
  if (Vt.test(t)) {
    const r = Vt.exec(t)[1], a = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, Or = (t) => {
  const {
    theme: r,
    prefix: a
  } = t, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return $r(Object.entries(t.classGroups), a).forEach(([l, c]) => {
    Et(c, s, l, r);
  }), s;
}, Et = (t, r, a, s) => {
  t.forEach((n) => {
    if (typeof n == "string") {
      const l = n === "" ? r : Gt(r, n);
      l.classGroupId = a;
      return;
    }
    if (typeof n == "function") {
      if (Lr(n)) {
        Et(n(s), r, a, s);
        return;
      }
      r.validators.push({
        validator: n,
        classGroupId: a
      });
      return;
    }
    Object.entries(n).forEach(([l, c]) => {
      Et(c, Gt(r, l), a, s);
    });
  });
}, Gt = (t, r) => {
  let a = t;
  return r.split(Mt).forEach((s) => {
    a.nextPart.has(s) || a.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(s);
  }), a;
}, Lr = (t) => t.isThemeGetter, $r = (t, r) => r ? t.map(([a, s]) => {
  const n = s.map((l) => typeof l == "string" ? r + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([c, i]) => [r + c, i])) : l);
  return [a, n];
}) : t, Fr = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, a = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  const n = (l, c) => {
    a.set(l, c), r++, r > t && (r = 0, s = a, a = /* @__PURE__ */ new Map());
  };
  return {
    get(l) {
      let c = a.get(l);
      if (c !== void 0)
        return c;
      if ((c = s.get(l)) !== void 0)
        return n(l, c), c;
    },
    set(l, c) {
      a.has(l) ? a.set(l, c) : n(l, c);
    }
  };
}, er = "!", Br = (t) => {
  const {
    separator: r,
    experimentalParseClassName: a
  } = t, s = r.length === 1, n = r[0], l = r.length, c = (i) => {
    const d = [];
    let m = 0, b = 0, u;
    for (let p = 0; p < i.length; p++) {
      let y = i[p];
      if (m === 0) {
        if (y === n && (s || i.slice(p, p + l) === r)) {
          d.push(i.slice(b, p)), b = p + l;
          continue;
        }
        if (y === "/") {
          u = p;
          continue;
        }
      }
      y === "[" ? m++ : y === "]" && m--;
    }
    const h = d.length === 0 ? i : i.substring(b), f = h.startsWith(er), N = f ? h.substring(1) : h, j = u && u > b ? u - b : void 0;
    return {
      modifiers: d,
      hasImportantModifier: f,
      baseClassName: N,
      maybePostfixModifierPosition: j
    };
  };
  return a ? (i) => a({
    className: i,
    parseClassName: c
  }) : c;
}, Yr = (t) => {
  if (t.length <= 1)
    return t;
  const r = [];
  let a = [];
  return t.forEach((s) => {
    s[0] === "[" ? (r.push(...a.sort(), s), a = []) : a.push(s);
  }), r.push(...a.sort()), r;
}, Vr = (t) => ({
  cache: Fr(t.cacheSize),
  parseClassName: Br(t),
  ..._r(t)
}), Gr = /\s+/, Hr = (t, r) => {
  const {
    parseClassName: a,
    getClassGroupId: s,
    getConflictingClassGroupIds: n
  } = r, l = [], c = t.trim().split(Gr);
  let i = "";
  for (let d = c.length - 1; d >= 0; d -= 1) {
    const m = c[d], {
      modifiers: b,
      hasImportantModifier: u,
      baseClassName: h,
      maybePostfixModifierPosition: f
    } = a(m);
    let N = !!f, j = s(N ? h.substring(0, f) : h);
    if (!j) {
      if (!N) {
        i = m + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (j = s(h), !j) {
        i = m + (i.length > 0 ? " " + i : i);
        continue;
      }
      N = !1;
    }
    const p = Yr(b).join(":"), y = u ? p + er : p, k = y + j;
    if (l.includes(k))
      continue;
    l.push(k);
    const D = n(j, N);
    for (let O = 0; O < D.length; ++O) {
      const T = D[O];
      l.push(y + T);
    }
    i = m + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Wr() {
  let t = 0, r, a, s = "";
  for (; t < arguments.length; )
    (r = arguments[t++]) && (a = tr(r)) && (s && (s += " "), s += a);
  return s;
}
const tr = (t) => {
  if (typeof t == "string")
    return t;
  let r, a = "";
  for (let s = 0; s < t.length; s++)
    t[s] && (r = tr(t[s])) && (a && (a += " "), a += r);
  return a;
};
function Ur(t, ...r) {
  let a, s, n, l = c;
  function c(d) {
    const m = r.reduce((b, u) => u(b), t());
    return a = Vr(m), s = a.cache.get, n = a.cache.set, l = i, i(d);
  }
  function i(d) {
    const m = s(d);
    if (m)
      return m;
    const b = Hr(d, a);
    return n(d, b), b;
  }
  return function() {
    return l(Wr.apply(null, arguments));
  };
}
const me = (t) => {
  const r = (a) => a[t] || [];
  return r.isThemeGetter = !0, r;
}, rr = /^\[(?:([a-z-]+):)?(.+)\]$/i, Kr = /^\d+\/\d+$/, qr = /* @__PURE__ */ new Set(["px", "full", "screen"]), Zr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Jr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Xr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Qr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ea = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Be = (t) => et(t) || qr.has(t) || Kr.test(t), He = (t) => tt(t, "length", ia), et = (t) => !!t && !Number.isNaN(Number(t)), ht = (t) => tt(t, "number", et), st = (t) => !!t && Number.isInteger(Number(t)), ta = (t) => t.endsWith("%") && et(t.slice(0, -1)), X = (t) => rr.test(t), We = (t) => Zr.test(t), ra = /* @__PURE__ */ new Set(["length", "size", "percentage"]), aa = (t) => tt(t, ra, ar), sa = (t) => tt(t, "position", ar), na = /* @__PURE__ */ new Set(["image", "url"]), oa = (t) => tt(t, na, da), la = (t) => tt(t, "", ca), nt = () => !0, tt = (t, r, a) => {
  const s = rr.exec(t);
  return s ? s[1] ? typeof r == "string" ? s[1] === r : r.has(s[1]) : a(s[2]) : !1;
}, ia = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Jr.test(t) && !Xr.test(t)
), ar = () => !1, ca = (t) => Qr.test(t), da = (t) => ea.test(t), ua = () => {
  const t = me("colors"), r = me("spacing"), a = me("blur"), s = me("brightness"), n = me("borderColor"), l = me("borderRadius"), c = me("borderSpacing"), i = me("borderWidth"), d = me("contrast"), m = me("grayscale"), b = me("hueRotate"), u = me("invert"), h = me("gap"), f = me("gradientColorStops"), N = me("gradientColorStopPositions"), j = me("inset"), p = me("margin"), y = me("opacity"), k = me("padding"), D = me("saturate"), O = me("scale"), T = me("sepia"), U = me("skew"), V = me("space"), E = me("translate"), C = () => ["auto", "contain", "none"], v = () => ["auto", "hidden", "clip", "visible", "scroll"], G = () => ["auto", X, r], S = () => [X, r], A = () => ["", Be, He], L = () => ["auto", et, X], F = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], R = () => ["solid", "dashed", "dotted", "double", "none"], w = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], I = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], g = () => ["", "0", X], Y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], P = () => [et, X];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [nt],
      spacing: [Be, He],
      blur: ["none", "", We, X],
      brightness: P(),
      borderColor: [t],
      borderRadius: ["none", "", "full", We, X],
      borderSpacing: S(),
      borderWidth: A(),
      contrast: P(),
      grayscale: g(),
      hueRotate: P(),
      invert: g(),
      gap: S(),
      gradientColorStops: [t],
      gradientColorStopPositions: [ta, He],
      inset: G(),
      margin: G(),
      opacity: P(),
      padding: S(),
      saturate: P(),
      scale: P(),
      sepia: g(),
      skew: P(),
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
        aspect: ["auto", "square", "video", X]
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
        columns: [We]
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
        object: [...F(), X]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: v()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": v()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": v()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: C()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": C()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": C()
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
        inset: [j]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [j]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [j]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [j]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [j]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [j]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [j]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [j]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [j]
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
        z: ["auto", st, X]
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
        flex: ["1", "auto", "initial", "none", X]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: g()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: g()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", st, X]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [nt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", st, X]
        }, X]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": L()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": L()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [nt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [st, X]
        }, X]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": L()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": L()
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
        "auto-cols": ["auto", "min", "max", "fr", X]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", X]
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
        p: [k]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [k]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [k]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [k]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [k]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [k]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [k]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [k]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [k]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [p]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [p]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [p]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [p]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [p]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [p]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [p]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [p]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [p]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [V]
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
        "space-y": [V]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", X, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [X, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [X, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [We]
        }, We]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [X, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [X, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [X, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [X, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", We, He]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ht]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [nt]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", X]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", et, ht]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Be, X]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", X]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", X]
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
        decoration: [...R(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Be, He]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Be, X]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", X]
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
        content: ["none", X]
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
        bg: [...F(), sa]
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
        bg: ["auto", "cover", "contain", aa]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, oa]
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
        from: [N]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [N]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [N]
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
        border: [...R(), "hidden"]
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
        divide: R()
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
        outline: ["", ...R()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Be, X]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Be, He]
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
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Be, He]
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
        shadow: ["", "inner", "none", We, la]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [nt]
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
        "mix-blend": [...w(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": w()
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
        "drop-shadow": ["", "none", We, X]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [m]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [b]
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
        saturate: [D]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [T]
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
        "backdrop-grayscale": [m]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [b]
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
        "backdrop-saturate": [D]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [T]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", X]
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
        ease: ["linear", "in", "out", "in-out", X]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", X]
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
        scale: [O]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [O]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [O]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [st, X]
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
        "skew-x": [U]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [U]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", X]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", X]
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
        "will-change": ["auto", "scroll", "contents", "transform", X]
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
        stroke: [Be, He, ht]
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
}, De = /* @__PURE__ */ Ur(ua);
function x(...t) {
  return De(ne(t));
}
const Q = ({
  icon: t,
  className: r,
  size: a,
  color: s,
  rotate: n,
  flip: l,
  spin: c,
  inline: i = !0,
  mode: d = "svg",
  ...m
}) => {
  const [b, u] = ee(null), [h, f] = ee(!0), [N, j] = ee(null);
  return pe(() => {
    let p = !0;
    return (async () => {
      try {
        const { Icon: k } = await import("./iconify-Dqt3MVen.mjs");
        p && (u(() => k), f(!1));
      } catch (k) {
        console.error("Failed to load icon:", k), p && (j(k), f(!1));
      }
    })(), () => {
      p = !1;
    };
  }, []), h ? /* @__PURE__ */ e.jsx("span", { style: { width: a, height: a } }) : N || !b ? null : /* @__PURE__ */ e.jsx(
    b,
    {
      icon: t,
      className: x(
        c && "animate-spin",
        r
      ),
      style: {
        color: s,
        transform: `rotate(${n || 0}deg)`
      },
      height: a,
      width: a,
      flip: l,
      inline: i,
      mode: d,
      ...m
    }
  );
}, fa = ye(
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
), sr = ke(
  ({
    className: t,
    variant: r = "default",
    size: a = "md",
    rounded: s = "md",
    error: n = !1,
    errorText: l,
    helperText: c,
    label: i,
    required: d = !1,
    labelPlacement: m = "top",
    fullWidth: b = !1,
    leftIcon: u,
    rightIcon: h,
    onRightIconClick: f,
    id: N,
    ...j
  }, p) => {
    const y = N || he.useId(), k = `${y}-helper`, D = `${y}-error`, O = /* @__PURE__ */ e.jsxs("div", { className: x("relative", !b && "inline-block"), children: [
      u && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ e.jsx(Q, { icon: u, className: "w-4 h-4" }) }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          id: y,
          type: "text",
          ref: p,
          className: x(
            fa({ variant: n ? "error" : r, size: a, rounded: s, fullWidth: b }),
            u && "pl-10",
            h && "pr-10",
            t
          ),
          "aria-describedby": n ? D : c ? k : void 0,
          "aria-invalid": n,
          "aria-required": d,
          ...j
        }
      ),
      h && /* @__PURE__ */ e.jsx(
        "div",
        {
          className: x(
            "absolute right-3 top-1/2 -translate-y-1/2 text-neutral",
            f && "cursor-pointer hover:text-primary-600"
          ),
          onClick: f,
          role: f ? "button" : void 0,
          tabIndex: f ? 0 : void 0,
          children: /* @__PURE__ */ e.jsx(Q, { icon: h, className: "w-4 h-4" })
        }
      )
    ] }), T = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      n && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: D, children: l }),
      !n && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: k, children: c })
    ] });
    return m === "left" ? /* @__PURE__ */ e.jsx("div", { className: x(b ? "w-full" : "inline-block", t), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
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
      /* @__PURE__ */ e.jsxs("div", { className: x("flex-1", !b && "inline-block"), children: [
        O,
        T
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: x(b ? "w-full" : "inline-block", t), children: [
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
      O,
      T
    ] });
  }
);
sr.displayName = "Input";
const ct = he.forwardRef(
  ({ className: t, children: r, selected: a, disabled: s, ...n }, l) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: l,
      className: x(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
        "hover:bg-primary-50",
        a && "bg-primary-50 text-primary-900",
        s && "pointer-events-none opacity-50",
        t
      ),
      ...n,
      children: r
    }
  )
);
ct.displayName = "SelectItem";
const nr = typeof window < "u", Re = () => nr ? window : {
  innerHeight: 0,
  innerWidth: 0,
  addEventListener: () => {
  },
  removeEventListener: () => {
  }
}, we = () => nr ? document : {
  addEventListener: () => {
  },
  removeEventListener: () => {
  },
  dispatchEvent: () => {
  }
}, xt = "autocomplete-dropdown-opened", ma = ye(
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
), ga = ke(
  ({
    className: t,
    options: r,
    onSelect: a,
    isOpen: s,
    dropdownPosition: n = "bottom",
    loading: l = !1,
    renderOption: c,
    variant: i = "default",
    size: d = "md",
    rounded: m = "md",
    leftIcon: b,
    rightIcon: u,
    error: h = !1,
    errorText: f,
    helperText: N,
    label: j,
    required: p = !1,
    labelPlacement: y = "top",
    fullWidth: k = !1,
    value: D,
    onChange: O,
    onFocus: T,
    onBlur: U,
    showClear: V = !1,
    onClear: E,
    searchType: C = "include",
    initialItemsToShow: v,
    itemsToLoad: G = 10,
    maxDropdownHeight: S = 300,
    noOptionsMessage: A = "No options found",
    scrollMoreMessage: L = "",
    allOptionsShownMessage: F = "",
    ...R
  }, w) => {
    const [I, g] = ee(!1), [Y, P] = ee(D || ""), [q, re] = ee(v || 0), de = ge(null), ie = ge(null), oe = ge(null), _ = ge(null), J = s !== void 0, Ne = `autocomplete-${he.useId().replace(/:/g, "")}`, Te = () => {
      if (!I || !ie.current || !oe.current) return;
      const { bottom: H, top: z, left: K, width: W } = ie.current.getBoundingClientRect(), le = oe.current, ae = Re(), be = {
        position: "fixed",
        left: `${K}px`,
        width: `${W}px`
      }, Me = n === "bottom" ? {
        ...be,
        top: `${H + 4}px`,
        maxHeight: `${ae.innerHeight - H - 8}px`
      } : {
        ...be,
        bottom: `${ae.innerHeight - z + 4}px`,
        maxHeight: `${z - 8}px`
      };
      Object.assign(le.style, Me);
    };
    pe(() => {
      const H = Re(), z = we(), K = () => {
        I && Te();
      }, W = () => {
        I && Te();
      }, le = (be) => {
        be.detail.id !== Ne && g(!1);
      }, ae = (be) => {
        const Me = be.target;
        de.current && !de.current.contains(Me) && oe.current && !oe.current.contains(Me) && g(!1);
      };
      return I && (Te(), H.addEventListener("scroll", K, !0), H.addEventListener("resize", W)), z.addEventListener(xt, le), z.addEventListener("click", ae), () => {
        H.removeEventListener("scroll", K, !0), H.removeEventListener("resize", W), z.removeEventListener(xt, le), z.removeEventListener("click", ae);
      };
    }, [I, Ne]), pe(() => {
      P(D || "");
    }, [D]);
    const _e = (H) => {
      const { value: z } = H.target;
      if (P(z), !z.trim()) {
        g(!1);
        return;
      }
      g(!0), O == null || O(H);
    }, ze = (H) => {
      H.stopPropagation(), P(""), E == null || E();
      const z = new Event("change");
      z.target = { value: "" }, O == null || O(z);
    }, Oe = (H) => {
      var le;
      if (!H) return;
      const { value: z, label: K } = H;
      P(K), g(!1), a == null || a(z);
      const W = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: H }
      });
      (le = ie.current) == null || le.dispatchEvent(W);
    }, Ge = (H) => {
      J || (we().dispatchEvent(
        new CustomEvent(xt, {
          detail: { id: Ne }
        })
      ), g(!0)), T == null || T(H);
    }, Ie = (H) => {
      U == null || U(H);
    }, Ke = () => {
      if (!_.current || v === void 0 || v <= 0) return;
      const { scrollTop: H, scrollHeight: z, clientHeight: K } = _.current;
      H + K >= z - 10 && re((le) => Math.min(le + G, Ae.length));
    }, Ae = r.filter(({ label: H }) => {
      const z = Y.toLowerCase().trim(), K = H.toLowerCase();
      return C === "startsWith" ? K.startsWith(z) : K.includes(z);
    });
    pe(() => {
      v !== void 0 && v > 0 && re(v);
    }, [Y, v]);
    const Le = v !== void 0 && v > 0 ? Ae.slice(0, q) : Ae, qe = (H, z) => H ? H.replace(/\{(\w+)\}/g, (K, W) => {
      var le;
      return ((le = z[W]) == null ? void 0 : le.toString()) || K;
    }) : "", Ze = J ? s : I, $e = V && Y && !R.disabled && !R.readOnly, Je = $e ? "mdi:close" : u, B = () => {
      if (!Ze) return null;
      const H = we();
      if (!("body" in H)) return null;
      const z = /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: oe,
          className: x(
            ma({ position: n }),
            "overflow-hidden"
          ),
          style: { maxHeight: `${S}px` },
          onClick: (K) => K.stopPropagation(),
          children: /* @__PURE__ */ e.jsx(
            "div",
            {
              ref: _,
              className: "overflow-auto",
              style: { maxHeight: `${S}px` },
              onScroll: Ke,
              children: l ? /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ e.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }) }) : Le.length > 0 ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                Le.map((K) => /* @__PURE__ */ e.jsx(
                  ct,
                  {
                    value: K.value,
                    selected: K.label === Y,
                    onClick: () => Oe(K),
                    children: c ? c(K) : K.label
                  },
                  K.value
                )),
                v !== void 0 && v > 0 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  q < Ae.length && L && /* @__PURE__ */ e.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: qe(L, {
                    current: q,
                    total: Ae.length
                  }) }),
                  q >= Ae.length && Ae.length > 0 && F && /* @__PURE__ */ e.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: qe(F, {
                    total: Ae.length
                  }) })
                ] })
              ] }) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-2 text-sm text-neutral", children: A })
            }
          )
        }
      );
      return Ve(z, H.body);
    };
    return /* @__PURE__ */ e.jsxs("div", { ref: de, className: x("relative", k ? "w-full" : "inline-block"), children: [
      /* @__PURE__ */ e.jsx("div", { ref: ie, className: x(!k && "inline-block"), children: /* @__PURE__ */ e.jsx(
        sr,
        {
          ref: w,
          value: Y,
          onChange: _e,
          onFocus: Ge,
          onBlur: Ie,
          variant: i,
          size: d,
          rounded: m,
          leftIcon: b,
          rightIcon: Je,
          error: h,
          errorText: f,
          helperText: N,
          label: j,
          required: p,
          labelPlacement: y,
          fullWidth: k,
          className: t,
          ...R,
          onClick: $e ? ze : R.onClick
        }
      ) }),
      B()
    ] });
  }
);
ga.displayName = "AutoComplete";
const pa = {
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
}, ba = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, ha = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
}, Ps = ({
  items: t,
  multiple: r = !1,
  defaultOpenIds: a = [],
  icon: s = "mdi:chevron-down",
  iconPosition: n = "right",
  className: l,
  contentClassName: c,
  variant: i = "primary",
  shadow: d = "none",
  rounded: m = "lg"
}) => {
  const [b, u] = ee(a), h = (N) => {
    u(
      r ? (j) => j.includes(N) ? j.filter((p) => p !== N) : [...j, N] : (j) => j.includes(N) ? [] : [N]
    );
  }, f = pa[i];
  return /* @__PURE__ */ e.jsx("div", { className: ne("w-full space-y-2", l), children: t.map((N) => {
    const j = b.includes(N.id), p = !!N.disabled;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: ne(
          "border overflow-hidden",
          "bg-white",
          "border-gray-200",
          ba[d],
          ha[m],
          "transition-shadow duration-200"
        ),
        children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => !p && h(N.id),
              disabled: p,
              className: ne(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                f.hover,
                j && f.active,
                f.text,
                p && "opacity-50 cursor-not-allowed"
              ),
              children: [
                n === "left" && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: ne(
                      "mr-3 transition-transform duration-200",
                      j && "rotate-180"
                    ),
                    children: /* @__PURE__ */ e.jsx(Q, { icon: s, className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ e.jsx("div", { className: "flex-1", children: N.title }),
                n === "right" && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: ne(
                      "ml-3 transition-transform duration-200",
                      j && "rotate-180"
                    ),
                    children: /* @__PURE__ */ e.jsx(Q, { icon: s, className: "w-5 h-5" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: ne(
                "grid transition-all duration-200 ease-in-out",
                j ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              ),
              children: /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: ne(
                    "p-4 border-t border-gray-200",
                    c
                  ),
                  children: N.content
                }
              ) })
            }
          )
        ]
      },
      N.id
    );
  }) });
}, Ts = ({
  src: t,
  alt: r = "avatar",
  size: a = "medium",
  shape: s = "circle",
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
  }, d = De(
    "inline-flex items-center justify-center overflow-hidden bg-gray-200",
    c[a],
    i[s],
    n
  );
  return /* @__PURE__ */ e.jsx("div", { className: d, children: t ? /* @__PURE__ */ e.jsx(
    "img",
    {
      src: t,
      alt: r,
      className: De("w-full h-full", l === "cover" ? "object-cover" : "object-contain")
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
}, Is = ({
  children: t,
  variant: r = "primary",
  size: a = "medium",
  rounded: s = "md",
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
  }, d = De(
    "inline-flex items-center font-medium",
    l[r],
    c[a],
    i[s],
    n
  );
  return /* @__PURE__ */ e.jsx("span", { className: d, children: t });
}, xa = ye(
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
), Ee = ke(
  ({
    className: t,
    variant: r = "primary",
    size: a = "md",
    rounded: s = "md",
    fullWidth: n = !1,
    isLoading: l = !1,
    leftIcon: c,
    rightIcon: i,
    isIconOnly: d = !1,
    children: m,
    ...b
  }, u) => {
    const f = d || !!(c || i) && !m;
    return /* @__PURE__ */ e.jsxs(
      "button",
      {
        className: x(
          xa({
            variant: r,
            size: a,
            rounded: f ? "full" : s,
            fullWidth: n,
            isIconOnly: f,
            className: t
          })
        ),
        ref: u,
        disabled: b.disabled || l,
        ...b,
        children: [
          l && /* @__PURE__ */ e.jsx("span", { className: "animate-spin inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full" }),
          c && !l && /* @__PURE__ */ e.jsx(Q, { icon: c, className: "w-4 h-4", inline: !0 }),
          m && /* @__PURE__ */ e.jsx("span", { children: m }),
          i && !l && /* @__PURE__ */ e.jsx(Q, { icon: i, className: "w-4 h-4", inline: !0 })
        ]
      }
    );
  }
);
Ee.displayName = "Button";
const va = ye(
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
), Ct = ke(
  ({
    className: t,
    variant: r = "default",
    padding: a = "md",
    shadow: s = "none",
    rounded: n = "md",
    asChild: l = !1,
    ...c
  }, i) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: x(va({ variant: r, padding: a, shadow: s, rounded: n, className: t })),
      ref: i,
      ...c
    }
  )
);
Ct.displayName = "Card";
const vt = ({
  label: t,
  error: r,
  disabled: a = !1,
  indeterminate: s = !1,
  variantSize: n = "sm",
  variant: l = "square",
  color: c = "primary",
  className: i = "",
  ...d
}) => {
  const m = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }, b = {
    primary: "checked:bg-primary-600 checked:border-primary-600 hover:border-primary-600",
    secondary: "checked:bg-secondary-600 checked:border-secondary-600 hover:border-secondary-600",
    success: "checked:bg-success-600 checked:border-success-600 hover:border-success-600",
    warning: "checked:bg-warning-600 checked:border-warning-600 hover:border-warning-600",
    error: "checked:bg-danger-600 checked:border-danger-600 hover:border-danger-600"
  }, u = r ? "border-danger-600 hover:border-danger-700" : "", f = De(
    "border-2 transition-colors duration-200",
    "appearance-none cursor-pointer",
    "checked:bg-no-repeat checked:bg-center",
    l === "circle" ? 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]' : 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM0w0LjUgOC41TDIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=")]',
    {
      square: "rounded",
      circle: "rounded-full"
    }[l],
    m[n],
    b[c],
    u,
    a && "opacity-50 cursor-not-allowed",
    i
  ), N = De(
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
          className: f,
          disabled: a,
          ref: (j) => {
            j && (j.indeterminate = s);
          },
          ...d
        }
      ),
      t && /* @__PURE__ */ e.jsx("label", { className: N, children: t })
    ] }),
    r && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-danger-600", children: r })
  ] });
}, yt = ye(
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
), ya = ke(
  ({
    className: t,
    options: r = [],
    value: a,
    defaultValue: s = [],
    onChange: n,
    layout: l = "vertical",
    size: c = "md",
    error: i = !1,
    errorText: d,
    helperText: m,
    label: b,
    required: u = !1,
    labelPlacement: h = "top",
    fullWidth: f = !1,
    disabled: N = !1,
    variant: j = "square",
    color: p = "primary",
    checkboxSize: y = "sm",
    showSelectAll: k = !1,
    selectAllText: D = "Select All",
    indeterminateSelectAll: O = !0,
    gap: T,
    selectAllGap: U,
    id: V,
    ...E
  }, C) => {
    const v = V || he.useId(), G = `${v}-helper`, S = `${v}-error`, A = `${v}-group`, [L, F] = he.useState(s), R = a !== void 0 ? a : L, w = (_, J) => {
      const je = J ? [...R, _] : R.filter((Ne) => Ne !== _);
      a === void 0 && F(je), n == null || n(je);
    }, I = (_) => {
      const J = _ ? r.map((je) => je.value) : [];
      a === void 0 && F(J), n == null || n(J);
    }, g = r.length > 0 && R.length === r.length, Y = R.length > 0 && R.length < r.length, P = O && Y, q = (_) => _ === "none" ? "gap-0" : _ === "xs" ? "gap-1" : _ === "sm" ? "gap-2" : _ === "md" ? "gap-3" : _ === "lg" ? "gap-4" : _ === "xl" ? "gap-6" : null, re = q(T), de = q(U), ie = /* @__PURE__ */ e.jsx("div", { className: x("relative", !f && "inline-block"), children: /* @__PURE__ */ e.jsxs(
      "fieldset",
      {
        ref: C,
        id: A,
        className: x(
          yt({ layout: l, size: c }),
          re,
          t
        ),
        "aria-describedby": i ? S : m ? G : void 0,
        "aria-invalid": i,
        "aria-required": u,
        ...E,
        children: [
          k && r.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: x(
            "flex flex-col",
            de || re || yt({ layout: "vertical", size: c })
          ), children: [
            /* @__PURE__ */ e.jsx(
              vt,
              {
                label: D,
                checked: g,
                indeterminate: P,
                onChange: (_) => I(_.target.checked),
                disabled: N,
                variant: j,
                color: i ? "error" : p,
                variantSize: y,
                error: i ? " " : void 0
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: x(
              "flex",
              l === "vertical" && "flex-col",
              l === "horizontal" && "flex-row flex-wrap",
              l === "grid" && "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
              re || yt({ layout: l, size: c })
            ), children: r.map((_) => /* @__PURE__ */ e.jsx(
              vt,
              {
                label: _.label,
                checked: R.includes(_.value),
                onChange: (J) => w(_.value, J.target.checked),
                disabled: N || _.disabled,
                indeterminate: _.indeterminate,
                variant: j,
                color: i ? "error" : p,
                variantSize: y,
                error: i ? " " : void 0
              },
              _.value
            )) })
          ] }),
          !k && /* @__PURE__ */ e.jsx(e.Fragment, { children: r.map((_) => /* @__PURE__ */ e.jsx(
            vt,
            {
              label: _.label,
              checked: R.includes(_.value),
              onChange: (J) => w(_.value, J.target.checked),
              disabled: N || _.disabled,
              indeterminate: _.indeterminate,
              variant: j,
              color: i ? "error" : p,
              variantSize: y,
              error: i ? " " : void 0
            },
            _.value
          )) })
        ]
      }
    ) }), oe = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      i && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: S, children: d }),
      !i && m && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: G, children: m })
    ] });
    return h === "left" ? /* @__PURE__ */ e.jsx("div", { className: x(f ? "w-full" : "inline-block", t), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
      b && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: A,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            b,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: x("flex-1", !f && "inline-block"), children: [
        ie,
        oe
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: x(f ? "w-full" : "inline-block", t), children: [
      b && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: A,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            b,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      ie,
      oe
    ] });
  }
);
ya.displayName = "CheckBoxGroup";
const wa = {
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
}, ka = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5"
}, ja = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, Ds = ({
  children: t,
  variant: r = "solid",
  color: a = "primary",
  size: s = "md",
  rounded: n = "md",
  onClose: l,
  className: c,
  icon: i
}) => /* @__PURE__ */ e.jsxs(
  "div",
  {
    className: x(
      "inline-flex items-center gap-1.5 font-medium",
      wa[r][a],
      ka[s],
      ja[n],
      c
    ),
    children: [
      i && /* @__PURE__ */ e.jsx("span", { className: "inline-flex items-center", children: /* @__PURE__ */ e.jsx(Q, { icon: i, className: "w-4 h-4" }) }),
      t,
      l && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: l,
          className: "ml-1 rounded-full hover:bg-black/10 p-0.5",
          "aria-label": "Close",
          children: /* @__PURE__ */ e.jsx(Q, { icon: "mdi:close", className: "w-3 h-3" })
        }
      )
    ]
  }
);
var or = { exports: {} };
(function(t, r) {
  (function(a, s) {
    t.exports = s();
  })(Zt, function() {
    return function(a, s) {
      s.prototype.isSameOrAfter = function(n, l) {
        return this.isSame(n, l) || this.isAfter(n, l);
      };
    };
  });
})(or);
var Na = or.exports;
const Ea = /* @__PURE__ */ Jt(Na);
var lr = { exports: {} };
(function(t, r) {
  (function(a, s) {
    t.exports = s();
  })(Zt, function() {
    return function(a, s) {
      s.prototype.isSameOrBefore = function(n, l) {
        return this.isSame(n, l) || this.isBefore(n, l);
      };
    };
  });
})(lr);
var Sa = lr.exports;
const Ra = /* @__PURE__ */ Jt(Sa);
fe.extend(Ea);
fe.extend(Ra);
const Ma = ye(
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
), St = ke(
  ({
    value: t,
    onChange: r,
    minDate: a,
    maxDate: s,
    variant: n = "default",
    size: l = "md",
    rounded: c = "md",
    disabled: i = !1,
    error: d = !1,
    errorText: m,
    helperText: b,
    label: u,
    required: h = !1,
    labelPlacement: f = "top",
    fullWidth: N = !1,
    className: j,
    placeholder: p = "Select date",
    leftIcon: y,
    rightIcon: k,
    monthsToShow: D = 1,
    valueFormatter: O,
    rangeStart: T,
    rangeEnd: U,
    closeOnSelect: V = !0,
    calendarFooter: E,
    format: C = "DD-MM-YYYY",
    allowInput: v = !1,
    ...G
  }) => {
    const [S, A] = ee(!1), [L, F] = ee(t), [R, w] = ee(t || /* @__PURE__ */ new Date()), [I, g] = ee(!1), [Y, P] = ee(""), q = ge(null), re = ge(null), de = ge(null), ie = ge(null), oe = ge(null);
    pe(() => {
      F(t || void 0), P(t ? _(t, C) : "");
    }, [t, C]), pe(() => {
      P(L ? _(L, C) : "");
    }, [L, C]);
    const _ = (B, H) => {
      const z = B.getDate().toString().padStart(2, "0"), K = (B.getMonth() + 1).toString().padStart(2, "0"), W = B.getFullYear().toString();
      switch (H) {
        case "DD-MM-YYYY":
          return `${z}-${K}-${W}`;
        case "YYYY-MM-DD":
          return `${W}-${K}-${z}`;
        case "MM-DD-YYYY":
          return `${K}-${z}-${W}`;
        default:
          return `${z}-${K}-${W}`;
      }
    }, J = (B, H) => {
      const K = B.replace(/[^\d-]/g, "").split("-");
      if (K.length !== 3) return null;
      let W, le, ae;
      switch (H) {
        case "DD-MM-YYYY":
          [W, le, ae] = K.map(Number);
          break;
        case "YYYY-MM-DD":
          [ae, le, W] = K.map(Number);
          break;
        case "MM-DD-YYYY":
          [le, W, ae] = K.map(Number);
          break;
        default:
          [W, le, ae] = K.map(Number);
      }
      if (isNaN(W) || isNaN(le) || isNaN(ae) || le < 1 || le > 12 || W < 1 || W > 31 || ae < 1900 || ae > 2099) return null;
      const be = new Date(ae, le - 1, W);
      return be.getDate() !== W || be.getMonth() !== le - 1 || be.getFullYear() !== ae ? null : be;
    };
    pe(() => {
      if (I && ie.current) {
        const B = fe(R).year(), H = ie.current.querySelectorAll("[data-year]"), z = Array.from(H).find(
          (K) => parseInt(K.getAttribute("data-year") || "0") === B
        );
        z && z.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center"
        });
      }
    }, [I, R]);
    const je = () => {
      if (!S || !re.current || !de.current) return;
      const { bottom: B, left: H, width: z } = re.current.getBoundingClientRect(), K = de.current, W = Re();
      D === 2 ? Object.assign(K.style, {
        position: "fixed",
        left: `${H}px`,
        top: `${B + 4}px`,
        minWidth: "500px",
        width: "auto",
        maxHeight: `${W.innerHeight - B - 8}px`,
        transform: ""
      }) : Object.assign(K.style, {
        position: "fixed",
        left: `${H + z / 2}px`,
        top: `${B + 4}px`,
        width: "320px",
        maxWidth: "100vw",
        maxHeight: `${W.innerHeight - B - 8}px`,
        transform: "translateX(-50%)"
      });
    };
    pe(() => {
      const B = Re(), H = we(), z = () => {
        S && je();
      }, K = () => {
        S && je();
      }, W = (le) => {
        le.key === "Escape" && S && (A(!1), g(!1));
      };
      return S && (je(), B.addEventListener("scroll", z, !0), B.addEventListener("resize", K), H.addEventListener("keydown", W)), () => {
        B.removeEventListener("scroll", z, !0), B.removeEventListener("resize", K), H.removeEventListener("keydown", W);
      };
    }, [S]);
    const Ne = (B) => {
      if (T !== void 0 && U !== void 0)
        if (T && U)
          F(B), P(_(B, C)), r == null || r(B);
        else if (T) {
          const z = B;
          fe(z).isBefore(T), F(z), P(_(z, C)), r == null || r(z), A(!1), g(!1);
        } else
          F(B), P(_(B, C)), r == null || r(B);
      else
        F(B), P(_(B, C)), r == null || r(B), A(!1), g(!1);
    }, Te = () => {
      w(fe(R).subtract(1, "month").toDate());
    }, _e = () => {
      w(fe(R).add(1, "month").toDate());
    }, ze = (B) => {
      const H = fe(B).startOf("month"), z = fe(B).endOf("month"), K = [];
      let W = H;
      for (; W.isBefore(z) || W.isSame(z, "day"); )
        K.push(W.toDate()), W = W.add(1, "day");
      return K;
    }, Oe = (B) => !!(a && fe(B).isBefore(a, "day") || s && fe(B).isAfter(s, "day")), Ge = (B) => {
      if (!v) return;
      const z = B.target.value.replace(/[^\d-]/g, "");
      if (z.length < Y.length) {
        P(z);
        return;
      }
      if (z.replace(/-/g, "").length > 8)
        return;
      let W = z;
      C === "DD-MM-YYYY" ? (z.length === 2 && !z.includes("-") || z.length === 5 && z.split("-").length === 2) && (W = z + "-") : C === "YYYY-MM-DD" ? (z.length === 4 && !z.includes("-") || z.length === 7 && z.split("-").length === 2) && (W = z + "-") : C === "MM-DD-YYYY" && (z.length === 2 && !z.includes("-") || z.length === 5 && z.split("-").length === 2) && (W = z + "-"), P(W);
    }, Ie = () => {
      if (!v) return;
      const B = J(Y, C);
      if (B) {
        if (a && B < a) {
          P(_(a, C)), F(a), r == null || r(a);
          return;
        }
        if (s && B > s) {
          P(_(s, C)), F(s), r == null || r(s);
          return;
        }
        F(B), r == null || r(B), P(_(B, C));
      } else
        P(L ? _(L, C) : "");
    }, Ke = () => {
      v && A(!1);
    }, Ae = (B) => {
      v && B.key === "Enter" && (B.preventDefault(), Ie());
    }, Le = (B) => {
      const H = fe(R).year(B).toDate();
      w(H), g(!1);
    }, qe = () => {
      if (!I) return null;
      const B = fe(R).year(), H = 1900, K = Array.from(
        { length: 2099 - H + 1 },
        (W, le) => H + le
      );
      return /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: ie,
          className: "grid grid-cols-5 gap-2 p-2 overflow-y-auto max-h-[300px]",
          children: K.map((W) => /* @__PURE__ */ e.jsx(
            "div",
            {
              "data-year": W,
              onClick: () => Le(W),
              className: x(
                W === B && "bg-primary-50 text-primary",
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
      const B = we();
      if (!("body" in B)) return null;
      const H = Array.from({ length: D }).map(
        (z, K) => fe(R).add(K, "month").toDate()
      );
      return Ve(
        /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "fixed inset-0 z-[9998]",
              onClick: () => {
                I || A(!1);
              }
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: de,
              className: "fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-lg",
              onClick: (z) => z.stopPropagation(),
              children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between p-2 border-b border-gray-200", children: [
                  /* @__PURE__ */ e.jsx(
                    Ee,
                    {
                      onClick: Te,
                      variant: "ghost",
                      size: "sm",
                      leftIcon: "mdi:chevron-left"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-900", children: D === 1 ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e.jsx("span", { children: fe(R).format("MMMM") }),
                    /* @__PURE__ */ e.jsxs(
                      "div",
                      {
                        className: "cursor-pointer flex items-center gap-1",
                        onClick: () => g(!I),
                        children: [
                          /* @__PURE__ */ e.jsx("span", { children: fe(R).format("YYYY") }),
                          /* @__PURE__ */ e.jsx(Ee, { variant: "ghost", size: "sm", leftIcon: I ? "mdi:chevron-up" : "mdi:chevron-down" })
                        ]
                      }
                    )
                  ] }) : `${fe(R).format("MMMM YYYY")} - ${fe(
                    R
                  ).add(D - 1, "month").format("MMMM YYYY")}` }) }),
                  /* @__PURE__ */ e.jsx(
                    Ee,
                    {
                      onClick: _e,
                      variant: "ghost",
                      size: "sm",
                      rightIcon: "mdi:chevron-right"
                    }
                  )
                ] }),
                I ? qe() : /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: x(
                      D === 2 ? "flex gap-5 p-2 mx-auto w-fit" : "justify-between p-2 mx-auto w-fit"
                    ),
                    children: H.map((z, K) => {
                      const W = ze(z), le = fe(z).startOf("month").day();
                      return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-7 gap-y-1 my-1", children: [
                          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                            (ae, be) => {
                              const Me = be === 0 || be === 6;
                              return /* @__PURE__ */ e.jsx(
                                "div",
                                {
                                  className: x(
                                    "text-center text-xs font-medium text-neutral",
                                    Me && "text-danger"
                                  ),
                                  children: ae
                                },
                                ae
                              );
                            }
                          ),
                          Array.from({ length: le }).map(
                            (ae, be) => /* @__PURE__ */ e.jsx("div", {}, `empty-${be}`)
                          ),
                          W.map((ae) => {
                            const be = L && fe(ae).isSame(L, "day"), Me = Oe(ae), dt = fe(ae).isSame(
                              z,
                              "month"
                            ), ut = T && U && fe(ae).isSameOrAfter(T, "day") && fe(ae).isSameOrBefore(U, "day"), lt = T && fe(ae).isSame(T, "day"), it = U && fe(ae).isSame(U, "day"), ft = fe(ae).day() === 0 || fe(ae).day() === 6, Fe = T && U;
                            return /* @__PURE__ */ e.jsx("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ e.jsx(
                              "div",
                              {
                                className: x(
                                  ut && "rounded-none bg-primary-50",
                                  Fe && lt && "rounded-l-full",
                                  Fe && it && "rounded-r-full"
                                ),
                                children: /* @__PURE__ */ e.jsx(
                                  "button",
                                  {
                                    onClick: () => !Me && Ne(ae),
                                    disabled: Me,
                                    className: x(
                                      "p-2 text-sm transition-colors duration-200 w-10 h-10 rounded-full",
                                      ft && "!text-danger",
                                      be && "bg-primary !text-white hover:bg-primary-600 active:bg-primary-700",
                                      be && !Fe && "rounded-full",
                                      !be && !Me && "hover:bg-primary-50 active:bg-primary-100",
                                      !dt && "text-neutral-400",
                                      Me && "opacity-50 cursor-not-allowed",
                                      // inRange && "bg-primary-50 text-primary-900 rounded-none",
                                      Fe && lt && "!bg-primary !text-white !rounded-full",
                                      Fe && it && "!bg-primary !text-white !rounded-full"
                                    ),
                                    children: fe(ae).format("D")
                                  },
                                  ae.toString()
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
        B.body
      );
    }, $e = /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: x("relative", !N && "inline-block"),
        ref: re,
        onClick: () => !i && !v && A(!S),
        children: [
          y && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (B) => {
                B.stopPropagation(), i || A(!S);
              },
              children: /* @__PURE__ */ e.jsx(Q, { icon: y, className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: oe,
              type: "text",
              value: v ? Y : O ? O() : L ? _(L, C) : "",
              placeholder: v ? C : p,
              readOnly: !v,
              maxLength: v ? 10 : void 0,
              onChange: Ge,
              onBlur: Ie,
              onFocus: Ke,
              onKeyDown: Ae,
              className: x(
                Ma({ variant: d ? "error" : n, size: l, rounded: c, fullWidth: N }),
                y && "pl-10",
                k && "pr-10",
                j
              ),
              disabled: i,
              ...G
            }
          ),
          k && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (B) => {
                B.stopPropagation(), i || A(!S);
              },
              children: /* @__PURE__ */ e.jsx(Q, { icon: k, className: "w-4 h-4" })
            }
          )
        ]
      }
    ), Je = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      m && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", children: m }),
      !m && b && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", children: b })
    ] });
    return f === "left" ? /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: x(N ? "w-full" : "inline-block", j),
        ref: q,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
            u && /* @__PURE__ */ e.jsxs("label", { className: "block text-sm text-neutral-900 pt-2", children: [
              u,
              h && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: x("flex-1", !N && "inline-block"), children: [
              $e,
              Je
            ] })
          ] }),
          Ze()
        ]
      }
    ) : /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: x(N ? "w-full" : "inline-block", j),
        ref: q,
        children: [
          u && /* @__PURE__ */ e.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
            u,
            h && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          $e,
          Je,
          Ze()
        ]
      }
    );
  }
);
St.displayName = "PrimitiveDatePicker";
const Ca = ({
  mode: t = "single",
  value: r,
  onChange: a,
  monthsToShow: s = 1,
  calendarFooter: n,
  error: l = !1,
  errorText: c,
  format: i = "DD-MM-YYYY",
  allowInput: d = !1,
  ...m
}) => {
  const [b, u] = ee([
    void 0,
    void 0
  ]);
  if (t === "single") {
    const h = Array.isArray(r) ? r[0] : r;
    return /* @__PURE__ */ e.jsx(
      St,
      {
        value: h === null ? void 0 : h,
        onChange: (f) => a == null ? void 0 : a(f),
        monthsToShow: s,
        calendarFooter: n,
        error: l,
        errorText: c,
        format: i,
        allowInput: d,
        ...m
      }
    );
  }
  if (t === "range") {
    let [h, f] = Array.isArray(r) ? r : b;
    const N = (p) => {
      !h || h && f ? (u([p, void 0]), a == null || a([p, void 0])) : h && !f && (p < h ? (u([p, h]), a == null || a([p, h])) : (u([h, p]), a == null || a([h, p])));
    }, j = () => {
      if (!h) return "";
      const p = (y) => y ? y.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }) : "";
      return h && f ? `${p(h)} - ${p(f)}` : p(h);
    };
    return /* @__PURE__ */ e.jsx(
      St,
      {
        value: h,
        onChange: N,
        monthsToShow: s,
        placeholder: m.placeholder || "Select date range",
        valueFormatter: j,
        rangeStart: h,
        rangeEnd: f,
        closeOnSelect: !!f,
        calendarFooter: n,
        error: l,
        errorText: c,
        format: i,
        allowInput: d,
        ...m
      }
    );
  }
  return null;
};
Ca.displayName = "DatePicker";
const ir = ke(
  ({ children: t, onClose: r, className: a, ...s }, n) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: n,
      className: x("mb-4 flex items-center justify-between", a),
      ...s,
      children: [
        t,
        r && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: r,
            className: "ml-4 rounded-full p-1 text-gray hover:bg-gray-100 hover:text-gray-700",
            "aria-label": "Close dialog",
            children: /* @__PURE__ */ e.jsx(Q, { icon: "mdi:close", className: "h-5 w-5" })
          }
        )
      ]
    }
  )
), Aa = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-4xl",
  fullscreen: "w-full h-full max-w-none max-h-none rounded-none"
}, Pa = ke(
  ({
    isOpen: t,
    onClose: r,
    children: a,
    className: s,
    backdrop: n = "dark",
    header: l,
    closeOnBackdropClick: c = !0,
    size: i = "md",
    ...d
  }, m) => {
    const [b, u] = ee(!1), [h, f] = ee(!1);
    if (pe(() => {
      if (t) {
        u(!0), f(!0);
        const y = we();
        "body" in y && (y.body.style.overflow = "hidden");
      } else {
        f(!1);
        const y = setTimeout(() => {
          u(!1);
          const k = we();
          "body" in k && (k.body.style.overflow = "");
        }, 300);
        return () => clearTimeout(y);
      }
    }, [t]), pe(() => {
      const y = (k) => {
        k instanceof KeyboardEvent && k.key === "Escape" && r();
      };
      return t && we().addEventListener("keydown", y), () => {
        we().removeEventListener("keydown", y);
      };
    }, [t, r]), !b) return null;
    const N = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, j = () => {
      c && r();
    }, p = we();
    return "body" in p ? Ve(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: x(
            "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300",
            N[n],
            h ? "opacity-100" : "opacity-0",
            i === "fullscreen" && "items-start"
          ),
          onClick: j,
          children: /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: m,
              className: x(
                "relative transform rounded-lg bg-white p-6 shadow-xl transition-all duration-300",
                Aa[i],
                h ? "scale-100 opacity-100" : "scale-95 opacity-0",
                s
              ),
              onClick: (y) => y.stopPropagation(),
              ...d,
              children: [
                l && /* @__PURE__ */ e.jsx(ir, { onClose: r, children: l }),
                a
              ]
            }
          )
        }
      ),
      p.body
    ) : null;
  }
), Ta = ke(
  ({ children: t, className: r, ...a }, s) => /* @__PURE__ */ e.jsx(
    "h2",
    {
      ref: s,
      className: x("text-xl font-semibold text-gray-900", r),
      ...a,
      children: t
    }
  )
), Ia = ke(
  ({ children: t, className: r, ...a }, s) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: s,
      className: x("text-gray-600", r),
      ...a,
      children: t
    }
  )
), Da = ke(
  ({ children: t, className: r, ...a }, s) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: s,
      className: x("mt-6 flex justify-end gap-3", r),
      ...a,
      children: t
    }
  )
);
Pa.displayName = "Dialog";
Ta.displayName = "DialogTitle";
Ia.displayName = "DialogBody";
Da.displayName = "DialogActions";
ir.displayName = "DialogHeader";
const _a = ({
  orientation: t = "horizontal",
  variant: r = "solid",
  color: a = "neutral",
  size: s = "sm",
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
  }, m = De(
    "inline-block",
    l[t],
    c[r],
    i[a],
    d[s],
    n
  );
  return /* @__PURE__ */ e.jsx("div", { className: m });
}, za = {
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
}, Oa = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, Ht = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
}, _s = ({
  accept: t = ["*"],
  maxSize: r = 5 * 1024 * 1024,
  // 5MB default
  multiple: a = !1,
  value: s = [],
  onChange: n,
  className: l,
  disabled: c = !1,
  placeholder: i = "Drag and drop files here or click to browse",
  variant: d = "default",
  shadow: m = "none",
  rounded: b = "lg",
  children: u,
  showFileList: h = !0,
  showPlaceholder: f = !0,
  showMaxSize: N = !0,
  icon: j = "mdi:upload"
}) => {
  const [p, y] = ee(!1), [k, D] = ee(null), O = ge(null), T = Ye((A) => {
    A.preventDefault(), c || y(!0);
  }, [c]), U = Ye((A) => {
    A.preventDefault(), y(!1);
  }, []), V = Ye((A) => A.size > r ? `File size exceeds ${r / (1024 * 1024)}MB limit` : t[0] !== "*" && !t.some((L) => L.startsWith(".") ? A.name.toLowerCase().endsWith(L.toLowerCase()) : A.type.startsWith(L)) ? `File type not allowed. Allowed types: ${t.join(", ")}` : null, [t, r]), E = Ye((A) => {
    if (A.preventDefault(), y(!1), D(null), c) return;
    const L = Array.from(A.dataTransfer.files), F = [], R = [];
    if (L.forEach((w) => {
      const I = V(w);
      I ? R.push(`${w.name}: ${I}`) : F.push(w);
    }), R.length > 0 && D(R.join(`
`)), F.length > 0) {
      const w = a ? [...s, ...F] : F;
      n == null || n(w);
    }
  }, [c, a, n, V, s]), C = Ye((A) => {
    if (D(null), c || !A.target.files) return;
    const L = Array.from(A.target.files), F = [], R = [];
    if (L.forEach((w) => {
      const I = V(w);
      I ? R.push(`${w.name}: ${I}`) : F.push(w);
    }), R.length > 0 && D(R.join(`
`)), F.length > 0) {
      const w = a ? [...s, ...F] : F;
      n == null || n(w);
    }
    O.current && (O.current.value = "");
  }, [c, a, n, V, s]), v = Ye((A) => {
    const L = [...s];
    L.splice(A, 1), n == null || n(L);
  }, [n, s]), G = (A) => A.type.startsWith("image/") ? /* @__PURE__ */ e.jsx(Q, { icon: "mdi:image", className: "w-5 h-5" }) : A.type.startsWith("text/") ? /* @__PURE__ */ e.jsx(Q, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ e.jsx(Q, { icon: "mdi:file", className: "w-5 h-5" }), S = za[d];
  return /* @__PURE__ */ e.jsxs("div", { className: ne("w-full", l), children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: ne(
          "p-6 text-center transition-colors",
          !u && [
            "border-2 border-dashed",
            S.border,
            S.bg,
            p && S.active,
            !c && S.hover
          ],
          c && "opacity-50 cursor-not-allowed",
          Oa[m],
          Ht[b],
          !u && "cursor-pointer"
        ),
        onDragOver: T,
        onDragLeave: U,
        onDrop: E,
        onClick: () => {
          var A;
          return !c && !u && ((A = O.current) == null ? void 0 : A.click());
        },
        children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: O,
              type: "file",
              accept: t.join(","),
              multiple: a,
              onChange: C,
              className: "hidden",
              disabled: c
            }
          ),
          u ? /* @__PURE__ */ e.jsx("div", { onClick: () => {
            var A;
            return !c && ((A = O.current) == null ? void 0 : A.click());
          }, children: u }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(Q, { icon: j, className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
            f && /* @__PURE__ */ e.jsx("p", { className: ne("text-neutral-600", S.text), children: i }),
            N && /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-neutral mt-2", children: [
              "Max file size: ",
              r / (1024 * 1024),
              "MB"
            ] })
          ] })
        ]
      }
    ),
    k && /* @__PURE__ */ e.jsx("p", { className: "mt-2 text-sm text-danger", children: k }),
    h && s.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "mt-4 space-y-2", children: s.map((A, L) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: ne(
          "flex items-center justify-between p-2",
          Ht[b],
          S.bg
        ),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
            G(A),
            /* @__PURE__ */ e.jsx("span", { className: ne("text-sm", S.text), children: A.name }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-neutral", children: [
              "(",
              (A.size / 1024).toFixed(1),
              " KB)"
            ] })
          ] }),
          !c && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => v(L),
              className: "p-1 text-neutral hover:text-danger",
              children: /* @__PURE__ */ e.jsx(Q, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${A.name}-${L}`
    )) })
  ] });
}, La = ye(
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
), zs = ({
  title: t,
  children: r,
  icon: a,
  variant: s = "default",
  rounded: n = "md",
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
  }, m = () => {
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
  return /* @__PURE__ */ e.jsxs("div", { className: x(La({ variant: s, rounded: n }), i), children: [
    a && /* @__PURE__ */ e.jsx(Q, { icon: m(), className: x("h-5 w-5 flex-shrink-0", d()) }),
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
        children: /* @__PURE__ */ e.jsx(Q, { icon: "mdi:close", className: "h-5 w-5" })
      }
    )
  ] });
}, wt = "select-dropdown-opened", $a = ye(
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
), cr = ke(
  ({
    className: t,
    variant: r = "default",
    size: a = "md",
    rounded: s = "md",
    options: n,
    label: l,
    error: c = !1,
    errorText: i,
    helperText: d,
    required: m = !1,
    placeholder: b,
    value: u,
    onChange: h,
    disabled: f = !1,
    position: N = "bottom",
    fullWidth: j = !1,
    children: p,
    leftIcon: y,
    rightIcon: k,
    ...D
  }, O) => {
    const [T, U] = ee(!1), V = ge(null), E = ge(null), v = `select-${he.useId().replace(/:/g, "")}`, G = () => {
      if (T && V.current && E.current) {
        const w = V.current.getBoundingClientRect(), I = E.current, g = Re(), Y = g.innerHeight - w.bottom, P = w.top, re = w.bottom + I.offsetHeight + 4 >= g.innerHeight, de = P > Y, ie = re && de;
        N === "bottom" || N === "top" ? (I.style.position = "fixed", I.style.left = `${w.left}px`, I.style.width = `${w.width}px`, N === "bottom" && ie ? (I.style.bottom = `${g.innerHeight - w.top + 4}px`, I.style.top = "auto", I.style.maxHeight = `${P - 8}px`) : N === "bottom" ? (I.style.top = `${w.bottom + 4}px`, I.style.bottom = "auto", I.style.maxHeight = `${Y - 8}px`) : N === "top" && !ie ? (I.style.top = `${w.bottom + 4}px`, I.style.bottom = "auto", I.style.maxHeight = `${Y - 8}px`) : (I.style.bottom = `${g.innerHeight - w.top + 4}px`, I.style.top = "auto", I.style.maxHeight = `${P - 8}px`)) : N === "left" ? (I.style.position = "fixed", I.style.right = `${g.innerWidth - w.left + 4}px`, I.style.top = `${w.top}px`, I.style.maxHeight = `${g.innerHeight - w.top - 8}px`) : N === "right" && (I.style.position = "fixed", I.style.left = `${w.right + 4}px`, I.style.top = `${w.top}px`, I.style.maxHeight = `${g.innerHeight - w.top - 8}px`);
      }
    };
    pe(() => {
      const w = Re(), I = () => {
        T && G();
      }, g = () => {
        T && G();
      };
      return T && (G(), w.addEventListener("scroll", I, !0), w.addEventListener("resize", g)), () => {
        w.removeEventListener("scroll", I, !0), w.removeEventListener("resize", g);
      };
    }, [T, N]), pe(() => {
      const w = we(), I = (Y) => {
        Y.detail.id !== v && U(!1);
      }, g = (Y) => {
        const P = Y.target, q = V.current, re = E.current;
        q && re && !q.contains(P) && !re.contains(P) && U(!1);
      };
      return w.addEventListener(wt, I), w.addEventListener("click", g), () => {
        w.removeEventListener(wt, I), w.removeEventListener("click", g);
      };
    }, [v]);
    const S = () => {
      if (f) return;
      if (T) {
        U(!1);
        return;
      }
      we().dispatchEvent(
        new CustomEvent(wt, {
          detail: { id: v }
        })
      ), U(!0);
    }, A = () => {
      if (n) {
        const w = n.find((I) => I.value === u);
        return w == null ? void 0 : w.label;
      }
      if (p) {
        const I = Ot.toArray(p).find(
          (g) => bt(g) && "value" in g.props && g.props.value === u
        );
        return bt(I) ? I.props.children : null;
      }
      return null;
    }, L = (w) => {
      f || (h == null || h(w), U(!1));
    }, F = () => n ? n.map((w) => /* @__PURE__ */ e.jsx(
      ct,
      {
        value: w.value,
        disabled: w.disabled,
        selected: w.value === u,
        onClick: () => {
          w.onClick && w.onClick(w.value), L(w.value);
        },
        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          w.icon,
          w.label
        ] })
      },
      w.value
    )) : p ? Ot.map(p, (w) => bt(w) && "value" in w.props ? Sr(w, {
      selected: w.props.value === u,
      onClick: () => L(w.props.value)
    }) : null) : null, R = () => {
      if (!T || f) return null;
      const w = /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: E,
          className: x(
            "fixed z-[9999] min-w-[8rem] border border-neutral-200 bg-white py-1 shadow-lg rounded-lg",
            N === "left" || N === "right" ? "w-max" : "w-full"
          ),
          onClick: (g) => g.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: F()
        }
      ), I = we();
      return "body" in I ? Ve(w, I.body) : null;
    };
    return /* @__PURE__ */ e.jsxs("div", { className: x(j ? "w-full" : "inline-block"), ref: O, ...D, children: [
      l && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: v,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            l,
            m && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: x("relative", !j && "inline-block"),
          onClick: S,
          children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                id: v,
                ref: V,
                type: "button",
                className: x(
                  $a({ variant: c ? "error" : r, size: a, rounded: s, fullWidth: j }),
                  "flex items-center justify-between",
                  f && "cursor-not-allowed opacity-50",
                  y && "pl-10",
                  k && "pr-10",
                  t
                ),
                "aria-haspopup": "listbox",
                "aria-expanded": T,
                "aria-describedby": c ? `${v}-error` : d ? `${v}-helper` : void 0,
                disabled: f,
                children: [
                  y && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ e.jsx(Q, { icon: y, className: "w-4 h-4" }) }),
                  /* @__PURE__ */ e.jsx("span", { className: "flex items-center gap-2 min-w-0 flex-1", children: /* @__PURE__ */ e.jsx("span", { className: x(
                    "truncate text-left",
                    A() ? "text-neutral-900" : "text-neutral"
                  ), children: A() || b }) }),
                  k ? /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ e.jsx(Q, { icon: k, className: "w-4 h-4" }) }) : /* @__PURE__ */ e.jsx(
                    Q,
                    {
                      icon: "mdi:chevron-down",
                      className: x("transition-transform flex-shrink-0 ml-2 w-4 h-4", T && "rotate-180")
                    }
                  )
                ]
              }
            ),
            R()
          ]
        }
      ),
      c && i && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: `${v}-error`, children: i }),
      !c && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: `${v}-helper`, children: d })
    ] });
  }
);
cr.displayName = "Select";
const Fa = ({
  currentPage: t,
  totalPages: r,
  totalData: a,
  onPageChange: s,
  siblingCount: n = 1,
  className: l,
  perPageOptions: c,
  perPage: i = 10,
  label: d = "",
  onPerPageChange: m
}) => {
  const b = (f, N) => {
    const j = N - f + 1;
    return Array.from({ length: j }, (p, y) => y + f);
  }, h = (() => {
    const f = n * 2 + 3, N = f + 2;
    if (r > N) {
      const j = Math.max(2, t - n), p = Math.min(r - 1, t + n);
      let y = b(j, p);
      const k = j > 2, D = r - p > 1, O = f - (y.length + 1);
      if (k && !D)
        y = [...b(j - O, j - 1), ...y];
      else if (!k && D) {
        const T = b(p + 1, p + O);
        y = [...y, ...T];
      } else k && D && (y = [...y]);
      return [1, ...y, r];
    }
    return b(1, r);
  })();
  return /* @__PURE__ */ e.jsxs(
    "nav",
    {
      className: ne("flex items-center justify-between space-x-1", l),
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
              cr,
              {
                value: i == null ? void 0 : i.toString(),
                onChange: (f) => m && m(Number(f)),
                size: "sm",
                className: "w-16",
                fullWidth: !1,
                "aria-label": "Items per page",
                children: c.map((f) => /* @__PURE__ */ e.jsx(ct, { value: f.toString(), children: f }, f))
              }
            ),
            /* @__PURE__ */ e.jsx("span", { className: "text-neutral-700 text-sm", children: "data per halaman" })
          ] }),
          /* @__PURE__ */ e.jsx(
            Ee,
            {
              variant: "ghost",
              onClick: () => s(t - 1),
              disabled: t === 1,
              className: ne(
                "px-3 py-1 rounded-md text-sm",
                t === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              ),
              children: /* @__PURE__ */ e.jsx(Q, { size: "18", icon: "mdi:chevron-left" })
            }
          ),
          h.map((f, N) => {
            const j = f === t, p = typeof f == "string" && f === "...";
            return /* @__PURE__ */ e.jsx(
              Ee,
              {
                variant: "ghost",
                onClick: () => !p && s(f),
                className: ne(
                  "px-3 py-1 rounded-md text-sm",
                  j ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  p && "cursor-default"
                ),
                children: f
              },
              N
            );
          }),
          /* @__PURE__ */ e.jsx(
            Ee,
            {
              variant: "ghost",
              onClick: () => s(t + 1),
              disabled: t === r,
              className: ne(
                "px-3 py-1 rounded-md text-sm",
                t === r ? "text-gray-400 cursor-not-allowed" : "text-gray-700"
              ),
              children: /* @__PURE__ */ e.jsx(Q, { size: "18", icon: "mdi:chevron-right" })
            }
          )
        ] })
      ]
    }
  );
}, Ba = ({
  label: t,
  checked: r = !1,
  disabled: a = !1,
  onChange: s,
  name: n,
  value: l,
  error: c,
  color: i = "primary",
  variantSize: d = "sm"
}) => {
  const m = (h) => {
    s && s(h.target.checked);
  }, b = {
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
      className: De(
        "inline-flex items-center cursor-pointer",
        a && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "radio",
            className: De(
              "border-2 rounded-full appearance-none",
              "focus:outline-none focus:ring-2 focus:ring-primary/25",
              "transition-colors duration-200",
              "checked:bg-no-repeat checked:bg-center",
              'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]',
              b[d],
              r ? u[i] : c ? "border-danger-600" : "border-gray-300",
              c && !r && "hover:border-danger-700",
              a && "cursor-not-allowed"
            ),
            checked: r,
            disabled: a,
            onChange: m,
            name: n,
            value: l
          }
        ),
        t && /* @__PURE__ */ e.jsx("label", { className: De(
          "ml-2 text-sm font-medium",
          a && "opacity-50 cursor-not-allowed",
          c && "text-danger-600"
        ), children: t })
      ]
    }
  );
}, Ya = ye(
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
), Va = ke(
  ({
    className: t,
    options: r = [],
    value: a,
    defaultValue: s,
    onChange: n,
    layout: l = "vertical",
    size: c = "md",
    error: i = !1,
    errorText: d,
    helperText: m,
    label: b,
    required: u = !1,
    labelPlacement: h = "top",
    fullWidth: f = !1,
    disabled: N = !1,
    name: j,
    gap: p,
    color: y = "primary",
    radioSize: k = "sm",
    id: D,
    ...O
  }, T) => {
    const U = D || he.useId(), V = `${U}-helper`, E = `${U}-error`, C = `${U}-group`, v = j || `radio-group-${U}`, [G, S] = he.useState(s), A = a !== void 0 ? a : G, L = (g) => {
      a === void 0 && S(g), n == null || n(g);
    }, R = ((g) => g === "none" ? "gap-0" : g === "xs" ? "gap-1" : g === "sm" ? "gap-2" : g === "md" ? "gap-3" : g === "lg" ? "gap-4" : g === "xl" ? "gap-6" : null)(p), w = /* @__PURE__ */ e.jsx("div", { className: x("relative", !f && "inline-block"), children: /* @__PURE__ */ e.jsx(
      "fieldset",
      {
        ref: T,
        id: C,
        className: x(
          Ya({ layout: l, size: c }),
          R,
          t
        ),
        "aria-describedby": i ? E : m ? V : void 0,
        "aria-invalid": i,
        "aria-required": u,
        ...O,
        children: r.map((g) => /* @__PURE__ */ e.jsx(
          Ba,
          {
            label: g.label,
            checked: A === g.value,
            onChange: () => L(g.value),
            disabled: N || g.disabled,
            name: v,
            value: g.value,
            color: i ? "error" : y,
            error: i ? " " : void 0,
            variantSize: k
          },
          g.value
        ))
      }
    ) }), I = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      i && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: E, children: d }),
      !i && m && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: V, children: m })
    ] });
    return h === "left" ? /* @__PURE__ */ e.jsx("div", { className: x(f ? "w-full" : "inline-block", t), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
      b && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: C,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            b,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: x("flex-1", !f && "inline-block"), children: [
        w,
        I
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: x(f ? "w-full" : "inline-block", t), children: [
      b && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: C,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            b,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      w,
      I
    ] });
  }
);
Va.displayName = "RadioGroup";
const Ga = ye(
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
), Ha = ({
  width: t,
  height: r,
  variant: a = "default",
  rounded: s = "md",
  fullWidth: n = !1,
  className: l
}) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: x(Ga({ variant: a, rounded: s, fullWidth: n }), l),
    style: {
      width: !n && typeof t == "number" ? `${t}px` : t,
      height: typeof r == "number" ? `${r}px` : r
    }
  }
), Os = ({
  min: t = 0,
  max: r = 100,
  step: a = 1,
  value: s,
  defaultValue: n = t,
  onChange: l,
  className: c,
  disabled: i = !1,
  showValue: d = !1,
  marks: m = [],
  range: b = !1
}) => {
  const u = b, [h, f] = ee(
    s !== void 0 ? s : n !== void 0 ? n : u ? [t, r] : t
  ), [N, j] = ee(null), p = ge(null), y = s !== void 0 ? s : h, [k, D] = u ? Array.isArray(y) ? y : [t, r] : [typeof y == "number" ? y : t, r], O = (R) => Math.min(Math.max(R, t), r), T = (R) => {
    if (i) return;
    let w;
    u && Array.isArray(R) ? w = [O(R[0]), O(R[1])] : !u && typeof R == "number" ? w = O(R) : w = u ? [t, r] : t, s === void 0 && f(w), l == null || l(w);
  }, U = (R) => {
    if (!p.current) return t;
    const w = p.current.getBoundingClientRect(), g = (R - w.left) / w.width, Y = t + (r - t) * g, P = Math.round(Y / a) * a;
    return O(P);
  }, V = (R) => (w) => {
    i || (j(R), w.stopPropagation());
  }, E = (R) => {
    if (!i)
      if (!u)
        j(0), C(R, 0);
      else {
        const w = U(R.clientX), I = Math.abs(w - k), g = Math.abs(w - D), Y = I < g ? 0 : 1;
        j(Y), C(R, Y);
      }
  }, C = he.useCallback((R, w) => {
    const I = U(R.clientX);
    if (!u)
      T(I);
    else {
      let g = [k, D];
      w === 0 ? g = [Math.min(I, D - a), D] : g = [k, Math.max(I, k + a)], g[0] > g[1] && (g = [g[1], g[0]]), T(g);
    }
  }, [u, k, D, a, T, U]), v = he.useRef(N);
  v.current = N;
  const G = he.useCallback(function(R) {
    v.current === null || i || C(R, v.current);
  }, [i, C]), S = he.useCallback(function() {
    j(null);
  }, []);
  pe(() => {
    if (N !== null) {
      const R = Re();
      return R.addEventListener("mousemove", G), R.addEventListener("mouseup", S), () => {
        R.removeEventListener("mousemove", G), R.removeEventListener("mouseup", S);
      };
    }
  }, [N, G, S]);
  const A = (R) => (R - t) / (r - t) * 100, L = A(k), F = A(D);
  return /* @__PURE__ */ e.jsxs("div", { className: ne("relative w-full", c), children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: p,
        className: ne(
          "relative h-2 bg-gray-200 rounded-full cursor-pointer",
          i && "opacity-50 cursor-not-allowed"
        ),
        onMouseDown: E,
        children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute h-full bg-primary rounded-full",
              style: { left: `${u ? L : 0}%`, width: `${u ? F - L : L}%` }
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: ne(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                i && "cursor-not-allowed"
              ),
              style: { left: `${L}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: V(0)
            }
          ),
          u && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: ne(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                i && "cursor-not-allowed"
              ),
              style: { left: `${F}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: V(1)
            }
          )
        ]
      }
    ),
    m.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex justify-between mt-2", children: m.map((R) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "text-xs text-gray",
        style: { left: `${(R.value - t) / (r - t) * 100}%` },
        children: R.label
      },
      R.value
    )) }),
    d && /* @__PURE__ */ e.jsx("div", { className: "mt-2 text-sm text-gray-600", children: u ? `${k} - ${D}` : k })
  ] });
}, Wa = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}, Ua = {
  primary: "text-primary",
  warning: "text-warning",
  default: "text-default-400"
}, Ls = ({
  rating: t,
  maxRating: r = 5,
  size: a = "md",
  color: s = "primary",
  readOnly: n = !1,
  onRatingChange: l,
  className: c
}) => {
  const [i, d] = ee(null), m = (f) => {
    n || d(f);
  }, b = () => {
    n || d(null);
  }, u = (f) => {
    !n && l && l(f);
  }, h = i !== null ? i : t;
  return /* @__PURE__ */ e.jsx("div", { className: x("flex items-center gap-1", c), children: [...Array(r)].map((f, N) => {
    const j = N + 1, p = j <= h, y = i !== null && j <= i;
    return /* @__PURE__ */ e.jsx(
      "button",
      {
        className: x(
          "transition-colors duration-200",
          Wa[a],
          p || y ? Ua[s] : "text-default-200",
          !n && "cursor-pointer"
        ),
        onMouseEnter: () => m(j),
        onMouseLeave: b,
        onClick: () => u(j),
        disabled: n,
        "aria-label": `Rate ${j} out of ${r}`,
        children: /* @__PURE__ */ e.jsx(
          Q,
          {
            icon: p || y ? "mdi:star" : "mdi:star-outline",
            className: "w-full h-full"
          }
        )
      },
      N
    );
  }) });
}, Ka = {
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
}, qa = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4"
}, $s = ({
  status: t,
  size: r = "md",
  withLabel: a = !1,
  className: s
}) => {
  const { bgColor: n, label: l } = Ka[t], c = qa[r];
  return /* @__PURE__ */ e.jsxs("div", { className: x("flex items-center gap-2", s), children: [
    /* @__PURE__ */ e.jsx("div", { className: x("rounded-full animate-pulse", n, c) }),
    a && /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: l })
  ] });
}, dr = (t, r) => {
  if (r) return r;
  switch (t) {
    case "completed":
      return "mdi:check";
    case "active":
      return "mdi:circle-medium";
    default:
      return "mdi:circle-outline";
  }
}, ur = (t) => {
  switch (t) {
    case "completed":
      return "text-white bg-primary ring-4 ring-primary-50";
    case "active":
      return "text-primary bg-primary-50 ring-4 ring-primary-50";
    default:
      return "text-neutral bg-neutral-50 ring-4 ring-neutral-50";
  }
}, Za = ({
  steps: t,
  activeStep: r,
  className: a,
  variant: s = "default"
}) => /* @__PURE__ */ e.jsx("div", { className: x("flex flex-row items-center w-full justify-between", a), children: t.map((n, l) => {
  const c = l < r ? "completed" : l === r ? "active" : "pending";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "flex items-center flex-1",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: x(
          "flex flex-col items-center z-10",
          s === "default" ? "gap-4" : "gap-2",
          s === "default" ? "px-5" : "px-3"
        ), children: [
          s === "default" && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: x(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                ur(c)
              ),
              children: /* @__PURE__ */ e.jsx(
                Q,
                {
                  icon: dr(c, n.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ e.jsx(
              "span",
              {
                className: x(
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
          _a,
          {
            className: x(
              "transition-all duration-200",
              l < r ? "bg-primary" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    l
  );
}) }), Ja = ({
  steps: t,
  activeStep: r,
  className: a,
  variant: s = "default"
}) => /* @__PURE__ */ e.jsx("div", { className: x("flex flex-col items-start gap-8", a), children: t.map((n, l) => {
  const c = l < r ? "completed" : l === r ? "active" : "pending";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "flex flex-row w-full items-center relative",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: x(
          "flex flex-row items-center z-10",
          s === "default" ? "gap-4" : "gap-2"
        ), children: [
          s === "default" && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: x(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                ur(c)
              ),
              children: /* @__PURE__ */ e.jsx(
                Q,
                {
                  icon: dr(c, n.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-start", children: [
            /* @__PURE__ */ e.jsx(
              "span",
              {
                className: x(
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
            className: x(
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
}) }), Fs = ({
  orientation: t = "horizontal",
  variant: r = "default",
  ...a
}) => t === "vertical" ? /* @__PURE__ */ e.jsx(Ja, { variant: r, ...a }) : /* @__PURE__ */ e.jsx(Za, { variant: r, ...a }), Bs = ({
  label: t,
  checked: r = !1,
  disabled: a = !1,
  onChange: s,
  size: n = "md"
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
      className: ne(
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
              className: ne(
                "block rounded-full transition-colors duration-200 ease-in-out",
                c[n],
                r ? "bg-primary" : "bg-gray-200 dark:bg-gray-700",
                a && "cursor-not-allowed"
              )
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: ne(
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
}, Ys = ({
  items: t,
  defaultActiveId: r,
  variant: a = "default",
  size: s = "md",
  className: n,
  tabListClassName: l,
  tabClassName: c,
  contentClassName: i,
  onChange: d
}) => {
  var y, k;
  const [m, b] = ee(r || ((y = t[0]) == null ? void 0 : y.id) || ""), u = he.useRef(null), [h, f] = ee({ left: 0, width: 0 });
  he.useEffect(() => {
    var D;
    if (a === "active-underline" && u.current) {
      const O = u.current.getBoundingClientRect(), T = (D = u.current.parentElement) == null ? void 0 : D.getBoundingClientRect();
      T && f({
        left: O.left - T.left,
        width: O.width
      });
    }
  }, [a, t, m]), he.useEffect(() => {
    if (a === "active-underline") {
      const D = () => {
        var O;
        if (u.current) {
          const T = u.current.getBoundingClientRect(), U = (O = u.current.parentElement) == null ? void 0 : O.getBoundingClientRect();
          U && f({
            left: T.left - U.left,
            width: T.width
          });
        }
      };
      return window.addEventListener("resize", D), () => window.removeEventListener("resize", D);
    }
  }, [a, t, m]);
  const N = Ye((D) => {
    b(D), d == null || d(D);
  }, [d]), j = () => {
    switch (s) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  }, p = (D, O) => {
    const T = ne(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      j(),
      O && "opacity-50 cursor-not-allowed",
      !O && "cursor-pointer"
    );
    switch (a) {
      case "pills":
        return ne(
          T,
          "rounded-full",
          D ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return ne(
          T,
          "border-b-2",
          D ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      case "active-underline":
        return ne(
          T,
          "border-b-0",
          D ? "text-primary" : "text-gray-600 dark:text-gray-300 hover:text-primary"
        );
      default:
        return ne(
          T,
          "border-b-2",
          D ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: ne("w-full", n), children: [
    /* @__PURE__ */ e.jsxs("div", { className: ne(
      a === "active-underline" ? "relative" : "",
      "flex space-x-1",
      a === "pills" && "space-x-2 border-b-0",
      a !== "active-underline" && "border-b border-gray-200 dark:border-gray-700",
      l
    ), children: [
      t.map((D) => {
        const O = D.id === m, T = !!D.disabled;
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            ref: a === "active-underline" && O ? u : void 0,
            onClick: () => !T && N(D.id),
            disabled: T,
            className: ne(
              p(O, T),
              c
            ),
            children: [
              D.icon && /* @__PURE__ */ e.jsx(
                Q,
                {
                  icon: D.icon,
                  className: "w-5 h-5 flex-shrink-0"
                }
              ),
              /* @__PURE__ */ e.jsx("span", { children: D.label })
            ]
          },
          D.id
        );
      }),
      a === "active-underline" && /* @__PURE__ */ e.jsx(
        "span",
        {
          className: "absolute bottom-0 h-0.5 bg-primary transition-all duration-300",
          style: { left: h.left, width: h.width }
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: ne("mt-4", i), children: (k = t.find((D) => D.id === m)) == null ? void 0 : k.content })
  ] });
}, ot = ({
  variant: t = "p",
  children: r,
  className: a,
  as: s
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
  return /* @__PURE__ */ e.jsx(c, { className: x("text-gray-900", n[t], a), children: r });
}, kt = "timepicker-dropdown-opened", Xa = ye(
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
), fr = ke(
  ({
    value: t,
    onChange: r,
    use24Hour: a = !1,
    variant: s = "default",
    size: n = "md",
    rounded: l = "md",
    disabled: c = !1,
    errorText: i,
    helperText: d,
    label: m,
    required: b = !1,
    labelPlacement: u = "top",
    fullWidth: h = !1,
    className: f,
    placeholder: N = "Select time",
    leftIcon: j,
    rightIcon: p,
    valueFormatter: y,
    closeOnSelect: k = !0,
    ...D
  }, O) => {
    const [T, U] = ee(!1), [V, E] = ee(t || ""), [C, v] = ee(0), [G, S] = ee(0), [A, L] = ee(!0), F = ge(null), R = ge(null), w = ge(null), g = `timepicker-${he.useId().replace(/:/g, "")}`, Y = () => {
      if (!T || !R.current || !w.current) return;
      const _ = R.current.getBoundingClientRect(), J = w.current, Ne = Re().innerHeight - _.bottom;
      J.style.top = `${_.bottom + 4}px`, J.style.bottom = "auto", J.style.left = `${_.left}px`, J.style.maxHeight = `${Ne - 8}px`, J.style.width = `${_.width}px`;
    };
    pe(() => {
      const _ = Re(), J = we(), je = () => {
        T && Y();
      }, Ne = () => {
        T && Y();
      }, Te = (ze) => {
        ze.detail.id !== g && U(!1);
      }, _e = (ze) => {
        const Oe = ze.target;
        F.current && w.current && !F.current.contains(Oe) && !w.current.contains(Oe) && U(!1);
      };
      return T && (Y(), _.addEventListener("scroll", je, !0), _.addEventListener("resize", Ne)), J.addEventListener(kt, Te), J.addEventListener("mousedown", _e), () => {
        _.removeEventListener("scroll", je, !0), _.removeEventListener("resize", Ne), J.removeEventListener(kt, Te), J.removeEventListener("mousedown", _e);
      };
    }, [T, g]);
    const P = () => {
      c || (T || we().dispatchEvent(
        new CustomEvent(kt, {
          detail: { id: g }
        })
      ), U(!T));
    };
    pe(() => {
      if (t) {
        E(t);
        const [_, J] = t.split(":").map(Number);
        a ? v(_) : (v(_ % 12 || 12), L(_ < 12)), S(J);
      }
    }, [t, a]);
    const q = () => {
      const J = `${(a || A ? C : C + 12).toString().padStart(2, "0")}:${G.toString().padStart(2, "0")}`;
      E(J), r == null || r(J), k && U(!1);
    }, re = () => a ? Array.from({ length: 24 }, (_, J) => J) : Array.from({ length: 12 }, (_, J) => J + 1), de = () => Array.from({ length: 60 }, (_, J) => J), ie = y ? y(V) : V, oe = we();
    return "body" in oe ? /* @__PURE__ */ e.jsxs("div", { ref: F, className: x("relative", h && "w-full", f), children: [
      m && /* @__PURE__ */ e.jsxs(
        "label",
        {
          className: x(
            "block text-sm font-medium text-gray-700 mb-1",
            u === "left" && "inline-block mr-2"
          ),
          children: [
            m,
            b && /* @__PURE__ */ e.jsx("span", { className: "text-red ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: R,
          className: "relative",
          onClick: P,
          children: [
            j && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ e.jsx(Q, { icon: j, size: 20 }) }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: O,
                type: "text",
                value: ie,
                placeholder: N,
                readOnly: !0,
                className: x(
                  Xa({ variant: s, size: n, rounded: l, fullWidth: h }),
                  j && "pl-10",
                  p && "pr-10",
                  "text-left"
                ),
                disabled: c,
                ...D
              }
            ),
            p && /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ e.jsx(Q, { icon: p, size: 20 }) })
          ]
        }
      ),
      T && Ve(
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: w,
            className: "fixed z-[9999] w-fit rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (_) => _.stopPropagation(),
            children: /* @__PURE__ */ e.jsxs("div", { className: "p-0", children: [
              /* @__PURE__ */ e.jsxs(Ct, { variant: "ghost", className: x(
                "flex mx-2 my-1 p-0",
                a ? "justify-start gap-8" : "justify-start gap-4"
              ), children: [
                /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2", children: re().map((_) => /* @__PURE__ */ e.jsx(
                  Ee,
                  {
                    variant: "ghost",
                    onClick: () => v(_),
                    className: x(C === _ && "bg-primary text-white"),
                    children: _.toString().padStart(2, "0")
                  },
                  _
                )) }) }) }),
                /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2", children: de().map((_) => /* @__PURE__ */ e.jsx(
                  Ee,
                  {
                    variant: "ghost",
                    onClick: () => S(_),
                    className: x(G === _ && "bg-primary text-white"),
                    children: _.toString().padStart(2, "0")
                  },
                  _
                )) }) }) }),
                !a && /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ e.jsx(
                    Ee,
                    {
                      variant: "ghost",
                      onClick: () => L(!0),
                      className: x(A && "bg-primary text-white"),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    Ee,
                    {
                      variant: "ghost",
                      onClick: () => L(!1),
                      className: x(!A && "bg-primary text-white"),
                      children: "PM"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "mb-2 mx-2", children: /* @__PURE__ */ e.jsx(
                Ee,
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
        oe.body
      ),
      i && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-danger-600", children: i }),
      d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-gray", children: d })
    ] }) : null;
  }
);
fr.displayName = "PrimitiveTimePicker";
const Qa = ({
  value: t,
  onChange: r,
  valueFormatter: a,
  closeOnSelect: s,
  ...n
}) => /* @__PURE__ */ e.jsx(
  fr,
  {
    value: t,
    onChange: r,
    valueFormatter: a,
    closeOnSelect: s,
    ...n
  }
);
Qa.displayName = "TimePicker";
const es = ye(
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
), ts = ye(
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
), rs = ke(
  ({
    checked: t = !1,
    onCheckedChange: r,
    variant: a = "primary",
    size: s = "md",
    label: n,
    required: l = !1,
    helperText: c,
    errorText: i,
    error: d = !1,
    className: m,
    ...b
  }, u) => {
    const h = he.useId(), f = `${h}-helper`, N = `${h}-error`;
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
            className: x(es({ variant: d ? "danger" : a, size: s }), m),
            "aria-describedby": d ? N : c ? f : void 0,
            "aria-invalid": d,
            "aria-required": l,
            ...b,
            children: /* @__PURE__ */ e.jsx(
              "span",
              {
                "data-state": t ? "checked" : "unchecked",
                className: x(
                  ts({ size: s }),
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
      d && i && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-danger", id: N, children: i }),
      !d && c && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-neutral", id: f, children: c })
    ] });
  }
);
rs.displayName = "Toggle";
const as = ye(
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
), ss = ye("absolute w-2 h-2 transform rotate-45", {
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
}), Vs = ({
  content: t,
  children: r,
  position: a = "top",
  delay: s = 0,
  className: n,
  color: l = "light",
  size: c = "md",
  isOpen: i,
  onOpenChange: d,
  trigger: m = "hover"
}) => {
  const [b, u] = ee(!1), [h, f] = ee({ top: 0, left: 0 }), N = ge(null), j = ge(null), p = ge(), y = i !== void 0, k = y ? i : b, D = () => {
    if (!N.current || !j.current) return;
    const E = j.current.getBoundingClientRect(), C = N.current.getBoundingClientRect(), v = Re(), G = v.scrollX || v.pageXOffset, S = v.scrollY || v.pageYOffset;
    let A = 0, L = 0;
    const F = 8;
    switch (a) {
      case "top":
        A = E.top + S - C.height - F, L = E.left + G + (E.width - C.width) / 2;
        break;
      case "bottom":
        A = E.bottom + S + F, L = E.left + G + (E.width - C.width) / 2;
        break;
      case "left":
        A = E.top + S + (E.height - C.height) / 2, L = E.left + G - C.width - F;
        break;
      case "right":
        A = E.top + S + (E.height - C.height) / 2, L = E.right + G + F;
        break;
    }
    const R = v.innerWidth, w = v.innerHeight;
    L < 0 && (L = 0), L + C.width > R && (L = R - C.width), A < 0 && (A = 0), A + C.height > w && (A = w - C.height), f({ top: A, left: L });
  };
  pe(() => {
    if (k) {
      D();
      const E = Re();
      E.addEventListener("scroll", D, !0), E.addEventListener("resize", D);
    }
    return () => {
      const E = Re();
      E.removeEventListener("scroll", D, !0), E.removeEventListener("resize", D);
    };
  }, [k, a]);
  const O = () => {
    y ? d == null || d(!0) : p.current = setTimeout(() => {
      u(!0);
    }, s);
  }, T = () => {
    p.current && clearTimeout(p.current), y ? d == null || d(!1) : u(!1);
  }, U = (E) => {
    E.stopPropagation(), m === "click" && (y ? d == null || d(!i) : u(!b));
  };
  pe(() => {
    const E = (C) => {
      m === "click" && N.current && !N.current.contains(C.target) && j.current && !j.current.contains(C.target) && T();
    };
    return k && document.addEventListener("click", E), () => {
      document.removeEventListener("click", E);
    };
  }, [k, m]);
  const V = () => {
    if (!k) return null;
    const E = we();
    return "body" in E ? Ve(
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: N,
          className: x(as({ color: l, size: c }), n),
          style: {
            top: `${h.top}px`,
            left: `${h.left}px`
          },
          children: [
            t,
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: x(
                  ss({ color: l }),
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
      ref: j,
      className: "relative inline-block",
      onMouseEnter: m === "hover" ? O : void 0,
      onMouseLeave: m === "hover" ? T : void 0,
      onClick: U,
      children: [
        r,
        V()
      ]
    }
  ) });
}, ns = ye(
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
), os = {
  sm: 24,
  md: 36,
  lg: 48
}, ls = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  info: "bg-info"
}, is = {
  primary: "#007C99",
  // Tailwind primary
  secondary: "#CEEAE7",
  success: "#00B37D",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#0EA5E9"
}, cs = he.forwardRef(
  ({
    className: t,
    variant: r = "bar",
    color: a = "primary",
    size: s = "md",
    value: n = 0,
    isIndeterminate: l = !1,
    showValue: c = !1,
    label: i,
    rounded: d = "full",
    icon: m,
    ...b
  }, u) => {
    const h = Math.min(Math.max(n, 0), 100), f = os[s], N = s === "sm" ? 2 : s === "md" ? 3 : 4, j = (f - N) / 2, p = 2 * Math.PI * j, y = p - h / 100 * p;
    let k = "";
    return r === "loading" ? k = "rounded-full" : d ? k = d === "none" ? "" : `rounded-${d}` : k = "rounded-md", r === "circular" ? /* @__PURE__ */ e.jsxs("div", { className: "inline-flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative", style: { width: f, height: f }, children: [
        /* @__PURE__ */ e.jsxs(
          "svg",
          {
            className: x(
              "transform -rotate-90",
              l ? "animate-spin" : ""
            ),
            width: f,
            height: f,
            children: [
              /* @__PURE__ */ e.jsx(
                "circle",
                {
                  strokeWidth: N,
                  stroke: "#e5e7eb",
                  fill: "transparent",
                  r: j,
                  cx: f / 2,
                  cy: f / 2
                }
              ),
              /* @__PURE__ */ e.jsx(
                "circle",
                {
                  className: x(
                    "transition-all duration-300 ease-in-out",
                    l ? "animate-dash" : ""
                  ),
                  strokeWidth: N,
                  strokeDasharray: p,
                  strokeDashoffset: l ? 0 : y,
                  strokeLinecap: "round",
                  stroke: is[a],
                  fill: "transparent",
                  r: j,
                  cx: f / 2,
                  cy: f / 2
                }
              )
            ]
          }
        ),
        m && /* @__PURE__ */ e.jsx("span", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ e.jsx(Q, { icon: m, size: f * 0.5 }) }),
        c && !l && !m && /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 flex items-center justify-center text-xs font-medium", children: [
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
          className: x(ns({ variant: r === "loading" ? "bar" : r, size: s }), k, t),
          role: "progressbar",
          "aria-valuenow": l ? void 0 : h,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...b,
          children: /* @__PURE__ */ e.jsx(
            "div",
            {
              className: x(
                "h-full transition-all duration-300 ease-in-out",
                l ? "animate-progress-indeterminate" : "",
                ls[a],
                k
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
cs.displayName = "Progress";
const jt = [
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
], ds = ye(
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
), us = ke(
  ({
    className: t,
    variant: r = "default",
    size: a = "md",
    rounded: s = "md",
    error: n = !1,
    errorText: l,
    helperText: c,
    label: i,
    required: d = !1,
    fullWidth: m = !1,
    value: b = "",
    onChange: u,
    disabled: h = !1,
    defaultCountry: f = "id",
    placeholder: N = "Enter phone number",
    ...j
  }) => {
    const [p, y] = ee(!1), [k, D] = ee(
      () => jt.find((g) => g.iso === f) || jt[0]
    ), [O, T] = ee(""), [U, V] = ee(() => {
      const g = k.code;
      return b.startsWith(g) ? b.slice(g.length) : b;
    }), E = ge(null), C = ge(null), v = he.useId(), G = `${v}-helper`, S = `${v}-error`, A = jt.filter(
      (g) => g.name.toLowerCase().includes(O.toLowerCase()) || g.code.includes(O)
    ), L = ge(null), F = () => {
      if (p && E.current && C.current) {
        const g = E.current.getBoundingClientRect(), Y = C.current, P = typeof window < "u" ? window : { innerHeight: 0 }, q = P.innerHeight - g.bottom, re = g.top, ie = g.bottom + (Y.offsetHeight || 0) + 4 >= P.innerHeight, oe = re > q, _ = ie && oe;
        Y.style.position = "fixed", Y.style.left = `${g.left}px`, Y.style.minWidth = `${g.width}px`, Y.style.maxWidth = "340px", Y.style.width = "auto", _ ? (Y.style.bottom = `${P.innerHeight - g.top + 4}px`, Y.style.top = "auto", Y.style.maxHeight = `${re - 8}px`) : (Y.style.top = `${g.bottom + 4}px`, Y.style.bottom = "auto", Y.style.maxHeight = `${q - 8}px`);
      }
    };
    pe(() => {
      const g = typeof window < "u" ? window : void 0, Y = () => {
        p && F();
      }, P = () => {
        p && F();
      };
      return p && (F(), g == null || g.addEventListener("scroll", Y, !0), g == null || g.addEventListener("resize", P)), () => {
        g == null || g.removeEventListener("scroll", Y, !0), g == null || g.removeEventListener("resize", P);
      };
    }, [p]), pe(() => {
      if (!p) return;
      const g = (Y) => {
        const P = Y.target;
        E.current && C.current && !E.current.contains(P) && !C.current.contains(P) && y(!1);
      };
      return document.addEventListener("click", g), () => document.removeEventListener("click", g);
    }, [p]);
    const R = (g) => {
      D(g), y(!1), T("");
      const Y = g.code + U;
      u == null || u(Y);
    }, w = (g) => {
      const Y = g.target.value.replace(/[^\d]/g, "");
      V(Y);
      const P = k.code + Y;
      u == null || u(P);
    }, I = x(
      ds({
        variant: n ? "error" : r,
        size: a,
        rounded: s,
        fullWidth: m
      }),
      "!w-full"
    );
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: L,
        className: x(m ? "w-full" : "inline-block", t),
        ...j,
        children: [
          i && /* @__PURE__ */ e.jsxs("label", { htmlFor: v, className: "mb-1.5 block text-sm text-neutral-900", children: [
            i,
            d && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: x("relative", !m && "inline-block"), children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex", children: [
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  ref: E,
                  onClick: () => !h && y(!p),
                  className: x(
                    I,
                    "flex items-center gap-2 rounded-r-none justify-between max-w-[100px]",
                    h && "cursor-not-allowed opacity-50"
                  ),
                  children: [
                    /* @__PURE__ */ e.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ e.jsx(Q, { icon: k.flag, className: "w-5 h-5" }),
                      /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: k.code })
                    ] }),
                    /* @__PURE__ */ e.jsx(
                      Q,
                      {
                        icon: "mdi:chevron-down",
                        className: x("transition-transform", p && "rotate-180")
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "tel",
                  id: v,
                  value: U,
                  onChange: w,
                  disabled: h,
                  className: x(
                    I,
                    "rounded-l-none flex-1 min-w-0 w-full"
                  ),
                  placeholder: N
                }
              )
            ] }),
            p && Ve(
              /* @__PURE__ */ e.jsxs(
                "div",
                {
                  ref: C,
                  className: x(
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
                        value: O,
                        onChange: (g) => T(g.target.value),
                        placeholder: "Search countries...",
                        className: "w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:border-primary-300"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "max-h-[300px] overflow-y-auto", children: A.map((g) => /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => R(g),
                        className: x(
                          "w-full px-3 py-2 text-sm text-left hover:bg-primary-50 cursor-pointer",
                          k.iso === g.iso && "bg-primary-50"
                        ),
                        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ e.jsx(Q, { icon: g.flag, className: "w-5 h-5" }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-sm font-medium", children: g.code }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-sm text-neutral-600", children: g.name })
                        ] })
                      },
                      g.iso + g.code
                    )) })
                  ]
                }
              ),
              typeof document < "u" ? document.body : document
            )
          ] }),
          n && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: S, children: l }),
          !n && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: G, children: c })
        ]
      }
    );
  }
);
us.displayName = "PhoneInput";
const fs = ye(
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
), Gs = ({
  content: t,
  children: r,
  position: a = "bottom",
  color: s = "light",
  customColor: n,
  rounded: l = "md",
  shadow: c = "md",
  className: i,
  trigger: d = "click",
  autoFocus: m = !1,
  isOpen: b,
  onOpenChange: u,
  closeOnClickOutside: h = !0
}) => {
  const [f, N] = ee(!1), [j, p] = ee({ top: 0, left: 0 }), y = ge(null), k = ge(null), D = b !== void 0, O = D ? b : f, T = () => {
    if (!y.current || !k.current) return;
    const v = k.current.getBoundingClientRect(), G = y.current.getBoundingClientRect(), S = Re(), A = S.scrollX || S.pageXOffset, L = S.scrollY || S.pageYOffset;
    let F = 0, R = 0;
    const w = 8;
    switch (a) {
      case "top":
        F = v.top + L - G.height - w, R = v.left + A + (v.width - G.width) / 2;
        break;
      case "bottom":
        F = v.bottom + L + w, R = v.left + A + (v.width - G.width) / 2;
        break;
      case "left":
        F = v.top + L + (v.height - G.height) / 2, R = v.left + A - G.width - w;
        break;
      case "right":
        F = v.top + L + (v.height - G.height) / 2, R = v.right + A + w;
        break;
    }
    const I = S.innerWidth, g = S.innerHeight;
    R < 0 && (R = 0), R + G.width > I && (R = I - G.width), F < 0 && (F = 0), F + G.height > g && (F = g - G.height), p({ top: F, left: R });
  };
  pe(() => {
    if (O) {
      T();
      const v = Re();
      v.addEventListener("scroll", T, !0), v.addEventListener("resize", T);
    }
    return () => {
      const v = Re();
      v.removeEventListener("scroll", T, !0), v.removeEventListener("resize", T);
    };
  }, [O, a]), pe(() => {
    if (O && m && y.current) {
      const v = y.current.querySelector(
        "input, select, textarea, button, [tabindex]:not([tabindex='-1'])"
      );
      v && v.focus();
    }
  }, [O, m]);
  const U = () => {
    D ? u == null || u(!0) : N(!0);
  }, V = () => {
    D ? u == null || u(!1) : N(!1);
  }, E = (v) => {
    v.stopPropagation(), d === "click" && (D ? u == null || u(!b) : N(!f));
  };
  pe(() => {
    if (!h) return;
    const v = (G) => {
      d === "click" && y.current && !y.current.contains(G.target) && k.current && !k.current.contains(G.target) && V();
    };
    return O && document.addEventListener("pointerdown", v, !0), () => {
      document.removeEventListener("pointerdown", v, !0);
    };
  }, [O, d, h]);
  const C = () => {
    if (!O) return null;
    const v = we();
    return "body" in v ? Ve(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: y,
          className: x(
            fs({ color: s, rounded: l, shadow: c }),
            s === "custom" && n ? n : "",
            i
          ),
          style: {
            top: `${j.top}px`,
            left: `${j.left}px`,
            background: s === "custom" && n ? n : void 0
          },
          tabIndex: -1,
          children: t
        }
      ),
      v.body
    ) : null;
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: k,
      className: "relative inline-block",
      onMouseEnter: d === "hover" ? U : void 0,
      onMouseLeave: d === "hover" ? V : void 0,
      onClick: E,
      tabIndex: 0,
      children: [
        r,
        C()
      ]
    }
  ) });
}, ms = ye("flex items-center text-sm", {
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
}), gs = ke(
  ({
    className: t,
    variant: r = "default",
    size: a = "md",
    items: s,
    separator: n = /* @__PURE__ */ e.jsx(Q, { icon: "mdi:slash-forward", className: "h-4 w-4 flex-shrink-0" }),
    activeLastItem: l = !0,
    ...c
  }, i) => /* @__PURE__ */ e.jsx(
    "nav",
    {
      ref: i,
      className: x(ms({ variant: r, size: a }), t),
      "aria-label": "Breadcrumb",
      ...c,
      children: /* @__PURE__ */ e.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: s.map((d, m) => {
        const b = m === s.length - 1, u = b && l;
        return /* @__PURE__ */ e.jsxs(
          "li",
          {
            className: x(
              "flex items-center gap-1.5",
              u && "text-primary font-medium"
            ),
            children: [
              d.icon && /* @__PURE__ */ e.jsx(
                Q,
                {
                  icon: d.icon,
                  className: x(
                    "flex-shrink-0",
                    a === "sm" && "h-3.5 w-3.5",
                    a === "md" && "h-4 w-4",
                    a === "lg" && "h-5 w-5"
                  )
                }
              ),
              d.href && !u ? /* @__PURE__ */ e.jsx(
                "a",
                {
                  href: d.href,
                  className: x(
                    "transition-colors duration-200",
                    "hover:text-primary hover:underline focus:outline-none",
                    "focus-visible:text-primary focus-visible:underline",
                    "active:text-primary-600"
                  ),
                  children: /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[200px] inline-block align-bottom", children: d.label })
                }
              ) : /* @__PURE__ */ e.jsx("span", { className: x(
                "truncate max-w-[200px] inline-block",
                u && "text-primary"
              ), children: d.label }),
              !b && /* @__PURE__ */ e.jsx("span", { className: x(
                "text-neutral-400 flex-shrink-0",
                a === "sm" && "scale-90",
                a === "lg" && "scale-110"
              ), children: n })
            ]
          },
          d.label
        );
      }) })
    }
  )
);
gs.displayName = "Breadcrumbs";
const mr = (t) => {
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
}, ps = ({ schema: t, variant: r = "primary" }) => {
  const a = [{ name: "no", label: "No.", accessorKey: "no", type: "number" }, ...t], s = mr(r);
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white rounded-md", children: /* @__PURE__ */ e.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full border-spacing-0 border-separate", children: [
    /* @__PURE__ */ e.jsx("thead", { className: x("border-2 sticky top-0 z-10 rounded-t-md", s.border), children: /* @__PURE__ */ e.jsx("tr", { children: a.map((n, l) => /* @__PURE__ */ e.jsx(
      "th",
      {
        className: x(
          "text-sm text-wrap border-y p-4 text-left",
          s.header,
          {
            "rounded-tl-md": l === 0,
            "rounded-tr-md": l === a.length - 1
          }
        ),
        children: n.label
      },
      l
    )) }) }),
    /* @__PURE__ */ e.jsx("tbody", { className: "max-h-[50vh]", children: [...Array(5)].map((n, l) => /* @__PURE__ */ e.jsx(
      "tr",
      {
        className: x("p-3", {
          [s.stripe]: l % 2 !== 0,
          "bg-white": l % 2 === 0
        }),
        children: a.map((c, i) => /* @__PURE__ */ e.jsx(
          "td",
          {
            className: "text-left text-nowrap text-sm p-4",
            children: /* @__PURE__ */ e.jsx(Ha, { className: "h-10 w-full rounded-md" })
          },
          `${l}-${i}`
        ))
      },
      l
    )) })
  ] }) }) });
}, Hs = ({
  schema: t,
  data: r,
  className: a,
  headerClassName: s,
  rowClassName: n,
  cellClassName: l,
  emptyState: c,
  isLoading: i,
  loadingState: d,
  showIndex: m = !1,
  onPageChange: b,
  onPageSizeChange: u,
  onSortChange: h,
  onRowClick: f,
  showPagination: N = !1,
  variant: j = "primary",
  meta: p = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [y, k] = ee(() => {
    const V = t.find((E) => E.sortable && E.sort);
    return V ? [{
      id: V.accessorKey.toString(),
      desc: V.sort === "desc"
    }] : [];
  }), D = he.useMemo(() => {
    const V = t.map((E) => ({
      accessorKey: E.accessorKey,
      header: E.label,
      enableSorting: !!E.sortable,
      cell: E.render ? ({ row: C }) => {
        var v;
        return (v = E.render) == null ? void 0 : v.call(E, C.original[E.accessorKey], C.original, C.index);
      } : ({ row: C }) => C.original[E.accessorKey] || "-",
      meta: {
        align: E.align || "left"
      }
    }));
    return m ? [{
      accessorKey: "no",
      header: "No.",
      enableSorting: !1,
      cell: ({ row: E }) => (p.current_page - 1) * p.limit_number + E.index + 1,
      meta: {
        align: "left"
      }
    }, ...V] : V;
  }, [t, m, p]), O = Cr({
    data: r,
    columns: D,
    state: {
      sorting: y
    },
    onSortingChange: (V) => {
      const E = typeof V == "function" ? V(y) : V;
      k(E), E.length > 0 ? h == null || h(E[0].desc ? "desc" : "asc", E[0].id) : h == null || h("", "");
    },
    getCoreRowModel: Tr(),
    getSortedRowModel: Pr(),
    getPaginationRowModel: Ar(),
    manualPagination: !0,
    pageCount: p.total_page
  }), T = mr(j);
  if (i)
    return d || /* @__PURE__ */ e.jsx(ps, { schema: t, variant: j });
  const U = (V, E, C) => {
    const v = V.target;
    v.tagName === "BUTTON" || v.tagName === "A" || v.tagName === "INPUT" || v.tagName === "SELECT" || v.closest("button") !== null || v.closest("a") !== null || v.closest("input") !== null || v.closest("select") !== null || f == null || f(E, C);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-md", children: [
    /* @__PURE__ */ e.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ e.jsxs("table", { className: x("w-full border-spacing-0 border-separate", a), children: [
      /* @__PURE__ */ e.jsx("thead", { className: x("border-2 sticky top-0 z-10 rounded-t-md", T.border), children: O.getHeaderGroups().map((V) => /* @__PURE__ */ e.jsx("tr", { children: V.headers.map((E, C) => {
        var v, G, S;
        return /* @__PURE__ */ e.jsx(
          "th",
          {
            className: x(
              "text-sm text-wrap border-y p-4",
              T.header,
              {
                "cursor-pointer": E.column.getCanSort(),
                "rounded-tl-md": C === 0,
                "rounded-tr-md": C === V.headers.length - 1,
                "text-left": ((v = E.column.columnDef.meta) == null ? void 0 : v.align) === "left",
                "text-center": ((G = E.column.columnDef.meta) == null ? void 0 : G.align) === "center",
                "text-right": ((S = E.column.columnDef.meta) == null ? void 0 : S.align) === "right"
              },
              s
            ),
            onClick: E.column.getCanSort() ? E.column.getToggleSortingHandler() : void 0,
            children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsx("span", { className: x({
                "font-semibold": C === 0
              }), children: Lt(E.column.columnDef.header, E.getContext()) }),
              E.column.getCanSort() && /* @__PURE__ */ e.jsx(
                Q,
                {
                  icon: E.column.getIsSorted() ? E.column.getIsSorted() === "desc" ? "mdi:keyboard-arrow-up" : "mdi:keyboard-arrow-down" : "mdi:unfold-more-horizontal",
                  className: x("h-4 w-4", {
                    "text-white": j !== "ghost",
                    "text-gray-700": j === "ghost"
                  })
                }
              )
            ] })
          },
          E.id
        );
      }) }, V.id)) }),
      /* @__PURE__ */ e.jsx("tbody", { className: "max-h-[50vh]", children: O.getRowModel().rows.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx(
        "td",
        {
          colSpan: O.getAllColumns().length,
          className: x(
            "text-center border h-full w-full rounded-b-md"
          ),
          children: c || /* @__PURE__ */ e.jsxs("div", { className: "flex mx-auto w-full text-center justify-center gap-3 items-center", children: [
            /* @__PURE__ */ e.jsx("p", { children: "Data Not Found" }),
            /* @__PURE__ */ e.jsx(Q, { icon: "mdi:face-frown-open", size: 34 })
          ] })
        }
      ) }) : O.getRowModel().rows.map((V, E) => /* @__PURE__ */ e.jsx(
        "tr",
        {
          className: x(
            "p-3",
            T.row,
            {
              [T.stripe]: E % 2 !== 0,
              "bg-white": E % 2 === 0,
              "cursor-pointer": f
            },
            n
          ),
          onClick: (C) => U(C, V.original, E),
          children: V.getVisibleCells().map((C) => {
            var v, G, S;
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: x(
                  "px-4 py-3 text-sm text-gray-900",
                  {
                    "text-left": ((v = C.column.columnDef.meta) == null ? void 0 : v.align) === "left",
                    "text-center": ((G = C.column.columnDef.meta) == null ? void 0 : G.align) === "center",
                    "text-right": ((S = C.column.columnDef.meta) == null ? void 0 : S.align) === "right"
                  },
                  l
                ),
                children: Lt(C.column.columnDef.cell, C.getContext())
              },
              C.id
            );
          })
        },
        V.id
      )) })
    ] }) }),
    !!r.length && N && /* @__PURE__ */ e.jsx("div", { className: "p-4 bg-white rounded-b-md", children: /* @__PURE__ */ e.jsx(
      Fa,
      {
        currentPage: p.current_page,
        totalPages: p.total_page,
        totalData: p.total_data,
        onPageChange: b || (() => {
        }),
        perPage: p.limit_number,
        onPerPageChange: u || (() => {
        }),
        perPageOptions: [5, 10, 20, 50, 100],
        siblingCount: 1
      }
    ) })
  ] });
}, bs = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, gr = ke(
  ({
    className: t,
    variant: r = "default",
    rounded: a = "lg",
    title: s,
    description: n,
    onClose: l,
    icon: c,
    showIcon: i = !0,
    showClose: d = !0,
    ...m
  }, b) => {
    const h = c || (i ? {
      default: "mdi:information",
      success: "mdi:check-circle",
      error: "mdi:alert-circle",
      warning: "mdi:alert",
      info: "mdi:information"
    }[r] : void 0), f = s || n;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: b,
        className: x(
          "flex",
          n ? "items-start gap-3 p-4" : "items-center gap-2 py-2.5 px-3",
          "border border-gray-200",
          bs[a],
          {
            "bg-white": r === "default",
            "bg-success-50": r === "success",
            "bg-danger-50": r === "error",
            "bg-warning-50": r === "warning",
            "bg-info-50": r === "info"
          },
          t
        ),
        ...m,
        children: [
          h && /* @__PURE__ */ e.jsx(
            Q,
            {
              icon: h,
              className: x(
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
            s && /* @__PURE__ */ e.jsx(
              "h3",
              {
                className: x("text-sm font-medium leading-5", {
                  "text-gray-900": r === "default",
                  "text-success-900": r === "success",
                  "text-danger-900": r === "error",
                  "text-warning-900": r === "warning",
                  "text-info-900": r === "info"
                }),
                children: s
              }
            ),
            n && /* @__PURE__ */ e.jsx(
              "p",
              {
                className: x(s ? "mt-1" : "", "text-sm leading-5", {
                  "text-gray": r === "default",
                  "text-success-700": r === "success",
                  "text-danger-700": r === "error",
                  "text-warning-700": r === "warning",
                  "text-info-700": r === "info"
                }),
                children: n
              }
            ),
            !f && /* @__PURE__ */ e.jsx("span", { className: "text-sm leading-5", children: m.children })
          ] }),
          d && l && /* @__PURE__ */ e.jsx(
            Ee,
            {
              variant: "ghost",
              size: "sm",
              onClick: l,
              className: x(
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
              children: /* @__PURE__ */ e.jsx(Q, { icon: "mdi:close", className: x(n ? "h-5 w-5" : "h-4 w-4") })
            }
          )
        ]
      }
    );
  }
);
gr.displayName = "Toast";
const Rt = Rr(void 0), hs = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, Ws = ({ children: t }) => {
  const [r, a] = ee([]), s = Ye((i) => {
    a((d) => d.filter((m) => m.id !== i));
  }, []), n = Ye((i) => {
    const d = Math.random().toString(36).substr(2, 9), m = i.position || "top-right", b = i.duration || 5e3, u = {
      ...i,
      id: d,
      position: m
    };
    return a((h) => [...h, u]), b > 0 && setTimeout(() => {
      s(d);
    }, b), d;
  }, [s]), l = r.reduce((i, d) => (i[d.position] || (i[d.position] = []), i[d.position].push(d), i), {
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-right": [],
    "top-center": [],
    "bottom-center": []
  }), c = we();
  return "body" in c ? /* @__PURE__ */ e.jsxs(Rt.Provider, { value: { showToast: n, removeToast: s }, children: [
    t,
    Ve(
      /* @__PURE__ */ e.jsx(e.Fragment, { children: Object.entries(l).map(([i, d]) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: x(
            "fixed z-[100] flex flex-col gap-2 min-w-[320px] max-w-[420px]",
            hs[i],
            i.includes("bottom") ? "flex-col-reverse" : "flex-col"
          ),
          children: d.map((m) => /* @__PURE__ */ e.jsx(
            gr,
            {
              ...m,
              onClose: () => s(m.id),
              className: "animate-slide-in"
            },
            m.id
          ))
        },
        i
      )) }),
      c.body
    )
  ] }) : /* @__PURE__ */ e.jsx(Rt.Provider, { value: { showToast: n, removeToast: s }, children: t });
}, Us = () => {
  const t = Mr(Rt);
  if (!t)
    throw new Error("useToast must be used within a ToastProvider");
  return t;
}, xs = ({
  label: t,
  value: r,
  icon: a,
  className: s
}) => /* @__PURE__ */ e.jsxs(Ct, { className: x(
  "flex items-center gap-4 rounded-lg w-full bg-white p-4 shadow-sm hover:bg-neutral-50 transition-shadow duration-200 justify-between",
  s
), children: [
  /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-gray", children: t }),
    /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-2xl font-semibold text-gray-900", children: r })
  ] }),
  a && /* @__PURE__ */ e.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50", children: /* @__PURE__ */ e.jsx(Q, { icon: a, className: "h-6 w-6 text-primary-600" }) })
] }), vs = {
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
}, pr = {
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
}, Wt = {
  ...vs,
  ...pr
}, Ut = {
  image: "https://design-system-eaip.onrender.com/img/error.svg",
  message: "An unexpected error occurred. Our team is currently investigating the issue."
}, Kt = (t) => typeof t == "object" && t !== null && ("code" in t || "message" in t), Ks = ({
  error: t,
  reload: r,
  children: a,
  className: s = "",
  variant: n,
  customImage: l,
  customMessage: c
}) => {
  if (!t && !n)
    return a ? /* @__PURE__ */ e.jsx(e.Fragment, { children: a }) : null;
  const d = (() => {
    if (n) {
      const u = ys[n];
      return pr[u];
    }
    return Kt(t) && t.code && Wt[t.code] ? Wt[t.code] : Ut;
  })(), m = l || d.image, b = c || (Kt(t) ? t.message : null) || d.message;
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${s}`, children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: m,
        alt: "Error illustration",
        className: "max-w-[300px] h-auto"
      }
    ),
    typeof b == "string" ? /* @__PURE__ */ e.jsx(ot, { variant: "body1", className: "m-0", children: b }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: b }),
    r && /* @__PURE__ */ e.jsx(
      Ee,
      {
        onClick: r,
        rounded: "full",
        variant: "primary",
        size: "md",
        children: "Try Again"
      }
    )
  ] });
}, ws = ye(
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
), ks = ke(
  ({
    className: t,
    variant: r = "default",
    size: a = "md",
    rounded: s = "md",
    error: n = !1,
    errorText: l,
    helperText: c,
    label: i,
    bottomLabel: d,
    required: m = !1,
    showSubmitButton: b = !1,
    submitButtonLabel: u = "Submit",
    submitButtonVariant: h = "primary",
    length: f = 6,
    numericOnly: N = !0,
    onComplete: j,
    onChange: p,
    onSubmit: y,
    value: k,
    defaultValue: D = "",
    disabled: O = !1,
    autoFocus: T = !1,
    ...U
  }, V) => {
    const [E, C] = ee(D || ""), v = ge([]);
    pe(() => {
      k !== void 0 && C(k);
    }, [k]);
    const G = k !== void 0, S = G ? k : E, A = (P) => {
      G || C(P), p == null || p(P), P.length === f && (j == null || j(P), b || y == null || y(P));
    }, L = (P) => (q) => {
      v.current[P] = q;
    }, F = (P) => {
      P.target.select();
    }, R = (P, q) => {
      var _;
      const re = P.target.value;
      let de = "";
      if (re.length >= 1)
        de = re.slice(-1);
      else if (re.length === 0) {
        const J = S.split("");
        J[q] = "", A(J.join(""));
        return;
      }
      if (N && !/^\d$/.test(de))
        return;
      const ie = S.split("");
      for (; ie.length <= q; )
        ie.push("");
      ie[q] = de;
      const oe = ie.join("");
      A(oe), q < f - 1 && de && ((_ = v.current[q + 1]) == null || _.focus());
    }, w = (P, q) => {
      var re, de, ie;
      if (P.key === "Backspace") {
        const oe = S.split("");
        S[q] ? (P.preventDefault(), oe[q] = "", A(oe.join(""))) : q > 0 && (P.preventDefault(), oe[q - 1] = "", A(oe.join("")), (re = v.current[q - 1]) == null || re.focus());
      } else if (P.key === "Delete") {
        if (S[q]) {
          P.preventDefault();
          const oe = S.split("");
          oe[q] = "", A(oe.join(""));
        }
      } else if (P.key === "ArrowLeft" && q > 0)
        P.preventDefault(), (de = v.current[q - 1]) == null || de.focus();
      else if (P.key === "ArrowRight" && q < f - 1)
        P.preventDefault(), (ie = v.current[q + 1]) == null || ie.focus();
      else if (!P.ctrlKey && !P.altKey && !P.metaKey && P.key.length === 1 && N && !/^\d$/.test(P.key)) {
        P.preventDefault();
        return;
      }
    }, I = (P) => {
      var oe;
      P.preventDefault();
      const q = P.clipboardData.getData("text/plain").trim();
      if (N && !/^\d+$/.test(q))
        return;
      const de = q.slice(0, f).padEnd(S.length, "").slice(0, f);
      A(de);
      const ie = de.length < f ? de.length : f - 1;
      (oe = v.current[ie]) == null || oe.focus();
    }, g = () => {
      S.length === f && (y == null || y(S));
    }, Y = S.split("").concat(Array(f - S.length).fill(""));
    return /* @__PURE__ */ e.jsxs("div", { ref: V, className: x("w-full", t), ...U, children: [
      i && /* @__PURE__ */ e.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        i,
        m && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: f }).map((P, q) => /* @__PURE__ */ e.jsx(
          "input",
          {
            ref: L(q),
            type: N ? "tel" : "text",
            inputMode: N ? "numeric" : "text",
            maxLength: 1,
            value: Y[q] || "",
            onChange: (re) => R(re, q),
            onKeyDown: (re) => w(re, q),
            onPaste: q === 0 ? I : void 0,
            onFocus: F,
            disabled: O,
            autoFocus: T && q === 0,
            className: x(
              ws({
                variant: n ? "error" : r,
                size: a,
                rounded: s
              })
            ),
            "aria-invalid": n
          },
          q
        )) }),
        n && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger self-start", children: l }),
        !n && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral self-start", children: c }),
        d && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-neutral-600", children: d }),
        b && /* @__PURE__ */ e.jsx(
          Ee,
          {
            variant: h,
            disabled: S.length !== f || O,
            onClick: g,
            className: "mt-4",
            children: u
          }
        )
      ] })
    ] });
  }
);
ks.displayName = "InputOTP";
const qt = {
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
}, qs = ({
  icon: t,
  className: r,
  color: a = "primary",
  value: s,
  maxValue: n = 99,
  children: l,
  ...c
}) => {
  const i = "top-0 right-0", d = typeof s == "number" && !isNaN(s);
  let m = "";
  d && (s > n ? m = `${n}+` : m = String(s));
  const b = d ? "px-2" : "", u = d ? "min-w-[20px]" : "w-2.5 h-2.5", h = d ? "h-5" : "h-2.5", f = typeof a == "string" && a in qt ? qt[a] : a;
  return /* @__PURE__ */ e.jsxs("div", { className: x("relative inline-block", r), children: [
    l || (t ? /* @__PURE__ */ e.jsx(Q, { icon: t, color: f, size: 32, ...c }) : null),
    /* @__PURE__ */ e.jsx(
      "span",
      {
        className: x(
          "absolute flex items-center justify-center rounded-xl bg-[#FF4C4C] text-white text-[10px] font-semibold",
          i,
          b,
          u,
          h,
          !d && "p-0",
          !d && "rounded-full"
        ),
        style: {
          transform: "translate(50%,-50%)"
        },
        children: d ? m : ""
      }
    )
  ] });
}, js = {
  FLIGHT_LIGHT: {
    image: "https://design-system-eaip.onrender.com/img/flight-loader-light.gif",
    message: "Loading, please wait..."
  },
  FLIGHT_DARK: {
    image: "https://design-system-eaip.onrender.com/img/flight-loader-dark.gif",
    message: "Loading, please wait..."
  }
}, Ns = {
  "flight-light": "FLIGHT_LIGHT",
  "flight-dark": "FLIGHT_DARK"
}, Zs = ({
  variant: t,
  customImage: r,
  customMessage: a,
  width: s,
  height: n,
  className: l = ""
}) => {
  const c = Ns[t], i = js[c];
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${l}`, children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: r || i.image,
        alt: "Loading animation",
        className: "max-w-[200px] h-auto",
        style: { width: s, height: n }
      }
    ),
    a ? typeof a == "string" ? /* @__PURE__ */ e.jsx(ot, { variant: "body1", className: "m-0", children: a }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: a }) : /* @__PURE__ */ e.jsx(ot, { variant: "body1", className: "m-0", children: i.message })
  ] });
}, Es = {
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
}, Ss = {
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
}, Js = ({
  variant: t,
  customMessage: r,
  reload: a,
  reloadText: s = "Try Again",
  customImage: n,
  width: l,
  height: c,
  className: i = ""
}) => {
  const d = Ss[t], m = Es[d];
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${i}`, children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: n || m.image,
        alt: "Negative case illustration",
        className: "max-w-[300px] h-auto",
        style: { width: l, height: c }
      }
    ),
    r ? typeof r == "string" ? /* @__PURE__ */ e.jsx(ot, { variant: "body1", className: "m-0", children: r }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: r }) : /* @__PURE__ */ e.jsx(ot, { variant: "body1", className: "m-0", children: m.message }),
    a && /* @__PURE__ */ e.jsx(
      Ee,
      {
        onClick: a,
        rounded: "full",
        variant: "primary",
        size: "md",
        children: s
      }
    )
  ] });
}, Xs = ({
  widgets: t,
  className: r
}) => /* @__PURE__ */ e.jsx("div", { className: x("w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", r), children: t.map((a, s) => /* @__PURE__ */ e.jsx(xs, { ...a }, s)) });
export {
  Ps as Accordion,
  ga as AutoComplete,
  Ts as Avatar,
  Is as Badge,
  qs as BadgeNotif,
  gs as Breadcrumbs,
  Ee as Button,
  Ct as Card,
  ya as CheckBoxGroup,
  vt as Checkbox,
  Ds as Chip,
  Ca as DatePicker,
  Pa as Dialog,
  Da as DialogActions,
  Ia as DialogBody,
  ir as DialogHeader,
  Ta as DialogTitle,
  _a as Divider,
  Ks as ErrorWrapper,
  _s as FileUpload,
  Q as Icon,
  sr as Input,
  ks as InputOTP,
  Zs as Loader,
  Js as NegativeCase,
  zs as Notification,
  Fa as Pagination,
  us as PhoneInput,
  Gs as Popover,
  St as PrimitiveDatePicker,
  cs as Progress,
  Ba as Radio,
  Va as RadioGroup,
  cr as Select,
  ct as SelectItem,
  Ha as Skeleton,
  Os as Slider,
  Ls as StarRating,
  $s as StatusIndicator,
  Fs as Stepper,
  Bs as Switch,
  Hs as Table,
  Ys as Tabs,
  ot as Text,
  Qa as TimePicker,
  gr as Toast,
  Ws as ToastProvider,
  rs as Toggle,
  Vs as Tooltip,
  xs as WidgetCard,
  Xs as WidgetCardGroup,
  xa as buttonVariants,
  va as cardVariants,
  x as cn,
  ws as inputOTPVariants,
  es as toggleVariants,
  Us as useToast
};
