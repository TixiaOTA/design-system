import he, { useState as X, useEffect as xe, forwardRef as Ne, useRef as pe, useCallback as Be, Children as Ot, isValidElement as bt, cloneElement as Sr, createContext as Rr, useContext as Mr } from "react";
import { createPortal as Ye } from "react-dom";
import de from "dayjs";
import { useReactTable as Cr, getPaginationRowModel as Ar, getSortedRowModel as Tr, getCoreRowModel as Ir, flexRender as Lt } from "@tanstack/react-table";
var Zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Jt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Nt = { exports: {} }, Qe = {};
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
function Pr() {
  if ($t) return Qe;
  $t = 1;
  var t = he, r = Symbol.for("react.element"), a = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(i, d, f) {
    var p, u = {}, h = null, m = null;
    f !== void 0 && (h = "" + f), d.key !== void 0 && (h = "" + d.key), d.ref !== void 0 && (m = d.ref);
    for (p in d) s.call(d, p) && !l.hasOwnProperty(p) && (u[p] = d[p]);
    if (i && i.defaultProps) for (p in d = i.defaultProps, d) u[p] === void 0 && (u[p] = d[p]);
    return { $$typeof: r, type: i, key: h, ref: m, props: u, _owner: n.current };
  }
  return Qe.Fragment = a, Qe.jsx = c, Qe.jsxs = c, Qe;
}
var et = {};
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
    var t = he, r = Symbol.for("react.element"), a = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), i = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), j = Symbol.iterator, k = "@@iterator";
    function g(o) {
      if (o === null || typeof o != "object")
        return null;
      var A = j && o[j] || o[k];
      return typeof A == "function" ? A : null;
    }
    var y = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(o) {
      {
        for (var A = arguments.length, L = new Array(A > 1 ? A - 1 : 0), W = 1; W < A; W++)
          L[W - 1] = arguments[W];
        P("error", o, L);
      }
    }
    function P(o, A, L) {
      {
        var W = y.ReactDebugCurrentFrame, ne = W.getStackAddendum();
        ne !== "" && (A += "%s", L = L.concat([ne]));
        var ce = L.map(function(te) {
          return String(te);
        });
        ce.unshift("Warning: " + A), Function.prototype.apply.call(console[o], console, ce);
      }
    }
    var z = !1, I = !1, H = !1, Y = !1, E = !1, R;
    R = Symbol.for("react.module.reference");
    function N(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === s || o === l || E || o === n || o === f || o === p || Y || o === m || z || I || H || typeof o == "object" && o !== null && (o.$$typeof === h || o.$$typeof === u || o.$$typeof === c || o.$$typeof === i || o.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === R || o.getModuleId !== void 0));
    }
    function F(o, A, L) {
      var W = o.displayName;
      if (W)
        return W;
      var ne = A.displayName || A.name || "";
      return ne !== "" ? L + "(" + ne + ")" : L;
    }
    function S(o) {
      return o.displayName || "Context";
    }
    function C(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
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
        case f:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case i:
            var A = o;
            return S(A) + ".Consumer";
          case c:
            var L = o;
            return S(L._context) + ".Provider";
          case d:
            return F(o, o.render, "ForwardRef");
          case u:
            var W = o.displayName || null;
            return W !== null ? W : C(o.type) || "Memo";
          case h: {
            var ne = o, ce = ne._payload, te = ne._init;
            try {
              return C(te(ce));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, $ = 0, M, v, D, b, G, T, U;
    function ee() {
    }
    ee.__reactDisabledLog = !0;
    function ue() {
      {
        if ($ === 0) {
          M = console.log, v = console.info, D = console.warn, b = console.error, G = console.group, T = console.groupCollapsed, U = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: ee,
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
        $++;
      }
    }
    function ie() {
      {
        if ($--, $ === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, o, {
              value: M
            }),
            info: O({}, o, {
              value: v
            }),
            warn: O({}, o, {
              value: D
            }),
            error: O({}, o, {
              value: b
            }),
            group: O({}, o, {
              value: G
            }),
            groupCollapsed: O({}, o, {
              value: T
            }),
            groupEnd: O({}, o, {
              value: U
            })
          });
        }
        $ < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = y.ReactCurrentDispatcher, _;
    function q(o, A, L) {
      {
        if (_ === void 0)
          try {
            throw Error();
          } catch (ne) {
            var W = ne.stack.trim().match(/\n( *(at )?)/);
            _ = W && W[1] || "";
          }
        return `
` + _ + o;
      }
    }
    var ke = !1, Me;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      Me = new Ve();
    }
    function ae(o, A) {
      if (!o || ke)
        return "";
      {
        var L = Me.get(o);
        if (L !== void 0)
          return L;
      }
      var W;
      ke = !0;
      var ne = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ce;
      ce = le.current, le.current = null, ue();
      try {
        if (A) {
          var te = function() {
            throw Error();
          };
          if (Object.defineProperty(te.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(te, []);
            } catch (Ie) {
              W = Ie;
            }
            Reflect.construct(o, [], te);
          } else {
            try {
              te.call();
            } catch (Ie) {
              W = Ie;
            }
            o.call(te.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ie) {
            W = Ie;
          }
          o();
        }
      } catch (Ie) {
        if (Ie && W && typeof Ie.stack == "string") {
          for (var Q = Ie.stack.split(`
`), Ae = W.stack.split(`
`), ve = Q.length - 1, ye = Ae.length - 1; ve >= 1 && ye >= 0 && Q[ve] !== Ae[ye]; )
            ye--;
          for (; ve >= 1 && ye >= 0; ve--, ye--)
            if (Q[ve] !== Ae[ye]) {
              if (ve !== 1 || ye !== 1)
                do
                  if (ve--, ye--, ye < 0 || Q[ve] !== Ae[ye]) {
                    var _e = `
` + Q[ve].replace(" at new ", " at ");
                    return o.displayName && _e.includes("<anonymous>") && (_e = _e.replace("<anonymous>", o.displayName)), typeof o == "function" && Me.set(o, _e), _e;
                  }
                while (ve >= 1 && ye >= 0);
              break;
            }
        }
      } finally {
        ke = !1, le.current = ce, ie(), Error.prepareStackTrace = ne;
      }
      var Ze = o ? o.displayName || o.name : "", We = Ze ? q(Ze) : "";
      return typeof o == "function" && Me.set(o, We), We;
    }
    function me(o, A, L) {
      return ae(o, !1);
    }
    function be(o) {
      var A = o.prototype;
      return !!(A && A.isReactComponent);
    }
    function Pe(o, A, L) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return ae(o, be(o));
      if (typeof o == "string")
        return q(o);
      switch (o) {
        case f:
          return q("Suspense");
        case p:
          return q("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case d:
            return me(o.render);
          case u:
            return Pe(o.type, A, L);
          case h: {
            var W = o, ne = W._payload, ce = W._init;
            try {
              return Pe(ce(ne), A, L);
            } catch {
            }
          }
        }
      return "";
    }
    var Se = Object.prototype.hasOwnProperty, Oe = {}, ze = y.ReactDebugCurrentFrame;
    function De(o) {
      if (o) {
        var A = o._owner, L = Pe(o.type, o._source, A ? A.type : null);
        ze.setExtraStackFrame(L);
      } else
        ze.setExtraStackFrame(null);
    }
    function ct(o, A, L, W, ne) {
      {
        var ce = Function.call.bind(Se);
        for (var te in o)
          if (ce(o, te)) {
            var Q = void 0;
            try {
              if (typeof o[te] != "function") {
                var Ae = Error((W || "React class") + ": " + L + " type `" + te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[te] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ae.name = "Invariant Violation", Ae;
              }
              Q = o[te](A, te, W, L, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ve) {
              Q = ve;
            }
            Q && !(Q instanceof Error) && (De(ne), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", W || "React class", L, te, typeof Q), De(null)), Q instanceof Error && !(Q.message in Oe) && (Oe[Q.message] = !0, De(ne), w("Failed %s type: %s", L, Q.message), De(null));
          }
      }
    }
    var st = Array.isArray;
    function Ke(o) {
      return st(o);
    }
    function nt(o) {
      {
        var A = typeof Symbol == "function" && Symbol.toStringTag, L = A && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return L;
      }
    }
    function B(o) {
      try {
        return fe(o), !1;
      } catch {
        return !0;
      }
    }
    function fe(o) {
      return "" + o;
    }
    function V(o) {
      if (B(o))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nt(o)), fe(o);
    }
    var se = y.ReactCurrentOwner, K = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, oe;
    function Ce(o) {
      if (Se.call(o, "ref")) {
        var A = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Ge(o) {
      if (Se.call(o, "key")) {
        var A = Object.getOwnPropertyDescriptor(o, "key").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function dt(o, A) {
      typeof o.ref == "string" && se.current;
    }
    function ut(o, A) {
      {
        var L = function() {
          Ee || (Ee = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        L.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: L,
          configurable: !0
        });
      }
    }
    function ot(o, A) {
      {
        var L = function() {
          oe || (oe = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        L.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: L,
          configurable: !0
        });
      }
    }
    var lt = function(o, A, L, W, ne, ce, te) {
      var Q = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: o,
        key: A,
        ref: L,
        props: te,
        // Record the component responsible for creating this element.
        _owner: ce
      };
      return Q._store = {}, Object.defineProperty(Q._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Q, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: W
      }), Object.defineProperty(Q, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ne
      }), Object.freeze && (Object.freeze(Q.props), Object.freeze(Q)), Q;
    };
    function mt(o, A, L, W, ne) {
      {
        var ce, te = {}, Q = null, Ae = null;
        L !== void 0 && (V(L), Q = "" + L), Ge(A) && (V(A.key), Q = "" + A.key), Ce(A) && (Ae = A.ref, dt(A, ne));
        for (ce in A)
          Se.call(A, ce) && !K.hasOwnProperty(ce) && (te[ce] = A[ce]);
        if (o && o.defaultProps) {
          var ve = o.defaultProps;
          for (ce in ve)
            te[ce] === void 0 && (te[ce] = ve[ce]);
        }
        if (Q || Ae) {
          var ye = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          Q && ut(te, ye), Ae && ot(te, ye);
        }
        return lt(o, Q, Ae, ne, W, se.current, te);
      }
    }
    var $e = y.ReactCurrentOwner, At = y.ReactDebugCurrentFrame;
    function qe(o) {
      if (o) {
        var A = o._owner, L = Pe(o.type, o._source, A ? A.type : null);
        At.setExtraStackFrame(L);
      } else
        At.setExtraStackFrame(null);
    }
    var ft;
    ft = !1;
    function gt(o) {
      return typeof o == "object" && o !== null && o.$$typeof === r;
    }
    function Tt() {
      {
        if ($e.current) {
          var o = C($e.current.type);
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
    var It = {};
    function hr(o) {
      {
        var A = Tt();
        if (!A) {
          var L = typeof o == "string" ? o : o.displayName || o.name;
          L && (A = `

Check the top-level render call using <` + L + ">.");
        }
        return A;
      }
    }
    function Pt(o, A) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var L = hr(A);
        if (It[L])
          return;
        It[L] = !0;
        var W = "";
        o && o._owner && o._owner !== $e.current && (W = " It was passed a child from " + C(o._owner.type) + "."), qe(o), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', L, W), qe(null);
      }
    }
    function Dt(o, A) {
      {
        if (typeof o != "object")
          return;
        if (Ke(o))
          for (var L = 0; L < o.length; L++) {
            var W = o[L];
            gt(W) && Pt(W, A);
          }
        else if (gt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var ne = g(o);
          if (typeof ne == "function" && ne !== o.entries)
            for (var ce = ne.call(o), te; !(te = ce.next()).done; )
              gt(te.value) && Pt(te.value, A);
        }
      }
    }
    function xr(o) {
      {
        var A = o.type;
        if (A == null || typeof A == "string")
          return;
        var L;
        if (typeof A == "function")
          L = A.propTypes;
        else if (typeof A == "object" && (A.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        A.$$typeof === u))
          L = A.propTypes;
        else
          return;
        if (L) {
          var W = C(A);
          ct(L, o.props, "prop", W, o);
        } else if (A.PropTypes !== void 0 && !ft) {
          ft = !0;
          var ne = C(A);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ne || "Unknown");
        }
        typeof A.getDefaultProps == "function" && !A.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(o) {
      {
        for (var A = Object.keys(o.props), L = 0; L < A.length; L++) {
          var W = A[L];
          if (W !== "children" && W !== "key") {
            qe(o), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", W), qe(null);
            break;
          }
        }
        o.ref !== null && (qe(o), w("Invalid attribute `ref` supplied to `React.Fragment`."), qe(null));
      }
    }
    var _t = {};
    function zt(o, A, L, W, ne, ce) {
      {
        var te = N(o);
        if (!te) {
          var Q = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (Q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ae = br();
          Ae ? Q += Ae : Q += Tt();
          var ve;
          o === null ? ve = "null" : Ke(o) ? ve = "array" : o !== void 0 && o.$$typeof === r ? (ve = "<" + (C(o.type) || "Unknown") + " />", Q = " Did you accidentally export a JSX literal instead of a component?") : ve = typeof o, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ve, Q);
        }
        var ye = mt(o, A, L, ne, ce);
        if (ye == null)
          return ye;
        if (te) {
          var _e = A.children;
          if (_e !== void 0)
            if (W)
              if (Ke(_e)) {
                for (var Ze = 0; Ze < _e.length; Ze++)
                  Dt(_e[Ze], o);
                Object.freeze && Object.freeze(_e);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Dt(_e, o);
        }
        if (Se.call(A, "key")) {
          var We = C(o), Ie = Object.keys(A).filter(function(Er) {
            return Er !== "key";
          }), pt = Ie.length > 0 ? "{key: someKey, " + Ie.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_t[We + pt]) {
            var Nr = Ie.length > 0 ? "{" + Ie.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, pt, We, Nr, We), _t[We + pt] = !0;
          }
        }
        return o === s ? vr(ye) : xr(ye), ye;
      }
    }
    function yr(o, A, L) {
      return zt(o, A, L, !0);
    }
    function wr(o, A, L) {
      return zt(o, A, L, !1);
    }
    var kr = wr, jr = yr;
    et.Fragment = s, et.jsx = kr, et.jsxs = jr;
  }()), et;
}
process.env.NODE_ENV === "production" ? Nt.exports = Pr() : Nt.exports = Dr();
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
function re() {
  for (var t, r, a = 0, s = "", n = arguments.length; a < n; a++) (t = arguments[a]) && (r = Xt(t)) && (s && (s += " "), s += r);
  return s;
}
const Bt = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, Yt = re, we = (t, r) => (a) => {
  var s;
  if ((r == null ? void 0 : r.variants) == null) return Yt(t, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: n, defaultVariants: l } = r, c = Object.keys(n).map((f) => {
    const p = a == null ? void 0 : a[f], u = l == null ? void 0 : l[f];
    if (p === null) return null;
    const h = Bt(p) || Bt(u);
    return n[f][h];
  }), i = a && Object.entries(a).reduce((f, p) => {
    let [u, h] = p;
    return h === void 0 || (f[u] = h), f;
  }, {}), d = r == null || (s = r.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((f, p) => {
    let { class: u, className: h, ...m } = p;
    return Object.entries(m).every((j) => {
      let [k, g] = j;
      return Array.isArray(g) ? g.includes({
        ...l,
        ...i
      }[k]) : {
        ...l,
        ...i
      }[k] === g;
    }) ? [
      ...f,
      u,
      h
    ] : f;
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
    let f = 0, p = 0, u;
    for (let g = 0; g < i.length; g++) {
      let y = i[g];
      if (f === 0) {
        if (y === n && (s || i.slice(g, g + l) === r)) {
          d.push(i.slice(p, g)), p = g + l;
          continue;
        }
        if (y === "/") {
          u = g;
          continue;
        }
      }
      y === "[" ? f++ : y === "]" && f--;
    }
    const h = d.length === 0 ? i : i.substring(p), m = h.startsWith(er), j = m ? h.substring(1) : h, k = u && u > p ? u - p : void 0;
    return {
      modifiers: d,
      hasImportantModifier: m,
      baseClassName: j,
      maybePostfixModifierPosition: k
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
    const f = c[d], {
      modifiers: p,
      hasImportantModifier: u,
      baseClassName: h,
      maybePostfixModifierPosition: m
    } = a(f);
    let j = !!m, k = s(j ? h.substring(0, m) : h);
    if (!k) {
      if (!j) {
        i = f + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (k = s(h), !k) {
        i = f + (i.length > 0 ? " " + i : i);
        continue;
      }
      j = !1;
    }
    const g = Yr(p).join(":"), y = u ? g + er : g, w = y + k;
    if (l.includes(w))
      continue;
    l.push(w);
    const P = n(k, j);
    for (let z = 0; z < P.length; ++z) {
      const I = P[z];
      l.push(y + I);
    }
    i = f + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Ur() {
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
function Wr(t, ...r) {
  let a, s, n, l = c;
  function c(d) {
    const f = r.reduce((p, u) => u(p), t());
    return a = Vr(f), s = a.cache.get, n = a.cache.set, l = i, i(d);
  }
  function i(d) {
    const f = s(d);
    if (f)
      return f;
    const p = Hr(d, a);
    return n(d, p), p;
  }
  return function() {
    return l(Ur.apply(null, arguments));
  };
}
const ge = (t) => {
  const r = (a) => a[t] || [];
  return r.isThemeGetter = !0, r;
}, rr = /^\[(?:([a-z-]+):)?(.+)\]$/i, Kr = /^\d+\/\d+$/, qr = /* @__PURE__ */ new Set(["px", "full", "screen"]), Zr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Jr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Xr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Qr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ea = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Fe = (t) => Je(t) || qr.has(t) || Kr.test(t), He = (t) => Xe(t, "length", ia), Je = (t) => !!t && !Number.isNaN(Number(t)), ht = (t) => Xe(t, "number", Je), tt = (t) => !!t && Number.isInteger(Number(t)), ta = (t) => t.endsWith("%") && Je(t.slice(0, -1)), Z = (t) => rr.test(t), Ue = (t) => Zr.test(t), ra = /* @__PURE__ */ new Set(["length", "size", "percentage"]), aa = (t) => Xe(t, ra, ar), sa = (t) => Xe(t, "position", ar), na = /* @__PURE__ */ new Set(["image", "url"]), oa = (t) => Xe(t, na, da), la = (t) => Xe(t, "", ca), rt = () => !0, Xe = (t, r, a) => {
  const s = rr.exec(t);
  return s ? s[1] ? typeof r == "string" ? s[1] === r : r.has(s[1]) : a(s[2]) : !1;
}, ia = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Jr.test(t) && !Xr.test(t)
), ar = () => !1, ca = (t) => Qr.test(t), da = (t) => ea.test(t), ua = () => {
  const t = ge("colors"), r = ge("spacing"), a = ge("blur"), s = ge("brightness"), n = ge("borderColor"), l = ge("borderRadius"), c = ge("borderSpacing"), i = ge("borderWidth"), d = ge("contrast"), f = ge("grayscale"), p = ge("hueRotate"), u = ge("invert"), h = ge("gap"), m = ge("gradientColorStops"), j = ge("gradientColorStopPositions"), k = ge("inset"), g = ge("margin"), y = ge("opacity"), w = ge("padding"), P = ge("saturate"), z = ge("scale"), I = ge("sepia"), H = ge("skew"), Y = ge("space"), E = ge("translate"), R = () => ["auto", "contain", "none"], N = () => ["auto", "hidden", "clip", "visible", "scroll"], F = () => ["auto", Z, r], S = () => [Z, r], C = () => ["", Fe, He], O = () => ["auto", Je, Z], $ = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], M = () => ["solid", "dashed", "dotted", "double", "none"], v = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], D = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], b = () => ["", "0", Z], G = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], T = () => [Je, Z];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [rt],
      spacing: [Fe, He],
      blur: ["none", "", Ue, Z],
      brightness: T(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Ue, Z],
      borderSpacing: S(),
      borderWidth: C(),
      contrast: T(),
      grayscale: b(),
      hueRotate: T(),
      invert: b(),
      gap: S(),
      gradientColorStops: [t],
      gradientColorStopPositions: [ta, He],
      inset: F(),
      margin: F(),
      opacity: T(),
      padding: S(),
      saturate: T(),
      scale: T(),
      sepia: b(),
      skew: T(),
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
        aspect: ["auto", "square", "video", Z]
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
        columns: [Ue]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": G()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": G()
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
        object: [...$(), Z]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: N()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": N()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": N()
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
        z: ["auto", tt, Z]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: F()
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
        flex: ["1", "auto", "initial", "none", Z]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: b()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: b()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", tt, Z]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [rt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", tt, Z]
        }, Z]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": O()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": O()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [rt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [tt, Z]
        }, Z]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": O()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": O()
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
        "auto-cols": ["auto", "min", "max", "fr", Z]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Z]
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
        m: [g]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [g]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [g]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [g]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [g]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [g]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [g]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [g]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [g]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Z, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Z, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Z, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [Ue]
        }, Ue]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Z, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Z, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Z, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Z, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ue, He]
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
        font: [rt]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Z]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Je, ht]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Fe, Z]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Z]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Z]
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
        decoration: ["auto", "from-font", Fe, He]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Fe, Z]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Z]
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
        content: ["none", Z]
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
        bg: [...$(), sa]
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
        "outline-offset": [Fe, Z]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Fe, He]
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
        "ring-offset": [Fe, He]
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
        shadow: ["", "inner", "none", Ue, la]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [rt]
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
        "drop-shadow": ["", "none", Ue, Z]
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
        "hue-rotate": [p]
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
        "backdrop-grayscale": [f]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [p]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Z]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: T()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Z]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: T()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Z]
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
        scale: [z]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [z]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [z]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [tt, Z]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Z]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Z]
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
        "will-change": ["auto", "scroll", "contents", "transform", Z]
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
        stroke: [Fe, He, ht]
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
}, Le = /* @__PURE__ */ Wr(ua);
function x(...t) {
  return Le(re(t));
}
const J = ({
  icon: t,
  className: r,
  size: a,
  color: s,
  rotate: n,
  flip: l,
  spin: c,
  inline: i = !0,
  mode: d = "svg",
  ...f
}) => {
  const [p, u] = X(null), [h, m] = X(!0), [j, k] = X(null);
  return xe(() => {
    let g = !0;
    return (async () => {
      try {
        const { Icon: w } = await import("./iconify-Dqt3MVen.mjs");
        g && (u(() => w), m(!1));
      } catch (w) {
        console.error("Failed to load icon:", w), g && (k(w), m(!1));
      }
    })(), () => {
      g = !1;
    };
  }, []), h ? /* @__PURE__ */ e.jsx("span", { style: { width: a, height: a } }) : j || !p ? null : /* @__PURE__ */ e.jsx(
    p,
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
      ...f
    }
  );
}, ma = we(
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
), sr = Ne(
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
    labelPlacement: f = "top",
    fullWidth: p = !1,
    leftIcon: u,
    rightIcon: h,
    onRightIconClick: m,
    id: j,
    ...k
  }, g) => {
    const y = j || he.useId(), w = `${y}-helper`, P = `${y}-error`, z = /* @__PURE__ */ e.jsxs("div", { className: x("relative", !p && "inline-block"), children: [
      u && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ e.jsx(J, { icon: u, className: "w-4 h-4" }) }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          id: y,
          type: "text",
          ref: g,
          className: x(
            ma({ variant: n ? "error" : r, size: a, rounded: s, fullWidth: p }),
            u && "pl-10",
            h && "pr-10",
            t
          ),
          "aria-describedby": n ? P : c ? w : void 0,
          "aria-invalid": n,
          "aria-required": d,
          ...k
        }
      ),
      h && /* @__PURE__ */ e.jsx(
        "div",
        {
          className: x(
            "absolute right-3 top-1/2 -translate-y-1/2 text-neutral",
            m && "cursor-pointer hover:text-primary-600"
          ),
          onClick: m,
          role: m ? "button" : void 0,
          tabIndex: m ? 0 : void 0,
          children: /* @__PURE__ */ e.jsx(J, { icon: h, className: "w-4 h-4" })
        }
      )
    ] }), I = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      n && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: P, children: l }),
      !n && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: w, children: c })
    ] });
    return f === "left" ? /* @__PURE__ */ e.jsx("div", { className: x(p ? "w-full" : "inline-block", t), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
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
      /* @__PURE__ */ e.jsxs("div", { className: x("flex-1", !p && "inline-block"), children: [
        z,
        I
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: x(p ? "w-full" : "inline-block", t), children: [
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
      z,
      I
    ] });
  }
);
sr.displayName = "Input";
const it = he.forwardRef(
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
it.displayName = "SelectItem";
const nr = typeof window < "u", Te = () => nr ? window : {
  innerHeight: 0,
  innerWidth: 0,
  addEventListener: () => {
  },
  removeEventListener: () => {
  }
}, je = () => nr ? document : {
  addEventListener: () => {
  },
  removeEventListener: () => {
  },
  dispatchEvent: () => {
  }
}, xt = "autocomplete-dropdown-opened", fa = we(
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
), ga = Ne(
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
    rounded: f = "md",
    leftIcon: p,
    rightIcon: u,
    error: h = !1,
    errorText: m,
    helperText: j,
    label: k,
    required: g = !1,
    labelPlacement: y = "top",
    fullWidth: w = !1,
    value: P,
    onChange: z,
    onFocus: I,
    onBlur: H,
    showClear: Y = !1,
    onClear: E,
    ...R
  }, N) => {
    const [F, S] = X(!1), [C, O] = X(P || ""), $ = pe(null), M = pe(null), v = pe(null), D = s !== void 0, G = `autocomplete-${he.useId().replace(/:/g, "")}`, T = () => {
      if (!F || !M.current || !v.current) return;
      const { bottom: ae, top: me, left: be, width: Pe } = M.current.getBoundingClientRect(), Se = v.current, Oe = Te(), ze = {
        position: "fixed",
        left: `${be}px`,
        width: `${Pe}px`
      }, De = n === "bottom" ? {
        ...ze,
        top: `${ae + 4}px`,
        maxHeight: `${Oe.innerHeight - ae - 8}px`
      } : {
        ...ze,
        bottom: `${Oe.innerHeight - me + 4}px`,
        maxHeight: `${me - 8}px`
      };
      Object.assign(Se.style, De);
    };
    xe(() => {
      const ae = Te(), me = je(), be = () => {
        F && T();
      }, Pe = () => {
        F && T();
      }, Se = (ze) => {
        ze.detail.id !== G && S(!1);
      }, Oe = (ze) => {
        const De = ze.target;
        $.current && !$.current.contains(De) && v.current && !v.current.contains(De) && S(!1);
      };
      return F && (T(), ae.addEventListener("scroll", be, !0), ae.addEventListener("resize", Pe)), me.addEventListener(xt, Se), me.addEventListener("click", Oe), () => {
        ae.removeEventListener("scroll", be, !0), ae.removeEventListener("resize", Pe), me.removeEventListener(xt, Se), me.removeEventListener("click", Oe);
      };
    }, [F, G]), xe(() => {
      O(P || "");
    }, [P]);
    const U = (ae) => {
      const { value: me } = ae.target;
      if (O(me), !me.trim()) {
        S(!1);
        return;
      }
      S(!0), z == null || z(ae);
    }, ee = (ae) => {
      ae.stopPropagation(), O(""), E == null || E();
      const me = new Event("change");
      me.target = { value: "" }, z == null || z(me);
    }, ue = (ae) => {
      var Se;
      if (!ae) return;
      const { value: me, label: be } = ae;
      O(be), S(!1), a == null || a(me);
      const Pe = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: ae }
      });
      (Se = M.current) == null || Se.dispatchEvent(Pe);
    }, ie = (ae) => {
      D || (je().dispatchEvent(
        new CustomEvent(xt, {
          detail: { id: G }
        })
      ), S(!0)), I == null || I(ae);
    }, le = (ae) => {
      H == null || H(ae);
    }, _ = r.filter(
      ({ label: ae }) => ae.toLowerCase().includes((C || "").toLowerCase().trim())
    ), q = D ? s : F, ke = Y && C && !R.disabled && !R.readOnly, Me = ke ? "mdi:close" : u, Ve = () => {
      if (!q) return null;
      const ae = je();
      if (!("body" in ae)) return null;
      const me = /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: v,
          className: x(
            fa({ position: n }),
            "overflow-auto"
          ),
          onClick: (be) => be.stopPropagation(),
          children: l ? /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ e.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }) }) : _.length > 0 ? _.map((be) => /* @__PURE__ */ e.jsx(
            it,
            {
              value: be.value,
              selected: be.label === C,
              onClick: () => ue(be),
              children: c ? c(be) : be.label
            },
            be.value
          )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-2 text-sm text-neutral", children: "No options found" })
        }
      );
      return Ye(me, ae.body);
    };
    return /* @__PURE__ */ e.jsxs("div", { ref: $, className: x("relative", w ? "w-full" : "inline-block"), children: [
      /* @__PURE__ */ e.jsx("div", { ref: M, className: x(!w && "inline-block"), children: /* @__PURE__ */ e.jsx(
        sr,
        {
          ref: N,
          value: C,
          onChange: U,
          onFocus: ie,
          onBlur: le,
          variant: i,
          size: d,
          rounded: f,
          leftIcon: p,
          rightIcon: Me,
          error: h,
          errorText: m,
          helperText: j,
          label: k,
          required: g,
          labelPlacement: y,
          fullWidth: w,
          className: t,
          ...R,
          onClick: ke ? ee : R.onClick
        }
      ) }),
      Ve()
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
}, Ts = ({
  items: t,
  multiple: r = !1,
  defaultOpenIds: a = [],
  icon: s = "mdi:chevron-down",
  iconPosition: n = "right",
  className: l,
  contentClassName: c,
  variant: i = "primary",
  shadow: d = "none",
  rounded: f = "lg"
}) => {
  const [p, u] = X(a), h = (j) => {
    u(
      r ? (k) => k.includes(j) ? k.filter((g) => g !== j) : [...k, j] : (k) => k.includes(j) ? [] : [j]
    );
  }, m = pa[i];
  return /* @__PURE__ */ e.jsx("div", { className: re("w-full space-y-2", l), children: t.map((j) => {
    const k = p.includes(j.id), g = !!j.disabled;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: re(
          "border overflow-hidden",
          "bg-white",
          "border-gray-200",
          ba[d],
          ha[f],
          "transition-shadow duration-200"
        ),
        children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => !g && h(j.id),
              disabled: g,
              className: re(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                m.hover,
                k && m.active,
                m.text,
                g && "opacity-50 cursor-not-allowed"
              ),
              children: [
                n === "left" && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: re(
                      "mr-3 transition-transform duration-200",
                      k && "rotate-180"
                    ),
                    children: /* @__PURE__ */ e.jsx(J, { icon: s, className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ e.jsx("div", { className: "flex-1", children: j.title }),
                n === "right" && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: re(
                      "ml-3 transition-transform duration-200",
                      k && "rotate-180"
                    ),
                    children: /* @__PURE__ */ e.jsx(J, { icon: s, className: "w-5 h-5" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: re(
                "grid transition-all duration-200 ease-in-out",
                k ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              ),
              children: /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: re(
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
}, Is = ({
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
  }, d = Le(
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
      className: Le("w-full h-full", l === "cover" ? "object-cover" : "object-contain")
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
}, Ps = ({
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
  }, d = Le(
    "inline-flex items-center font-medium",
    l[r],
    c[a],
    i[s],
    n
  );
  return /* @__PURE__ */ e.jsx("span", { className: d, children: t });
}, xa = we(
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
), Re = Ne(
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
    children: f,
    ...p
  }, u) => {
    const m = d || !!(c || i) && !f;
    return /* @__PURE__ */ e.jsxs(
      "button",
      {
        className: x(
          xa({
            variant: r,
            size: a,
            rounded: m ? "full" : s,
            fullWidth: n,
            isIconOnly: m,
            className: t
          })
        ),
        ref: u,
        disabled: p.disabled || l,
        ...p,
        children: [
          l && /* @__PURE__ */ e.jsx("span", { className: "animate-spin inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full" }),
          c && !l && /* @__PURE__ */ e.jsx(J, { icon: c, className: "w-4 h-4", inline: !0 }),
          f && /* @__PURE__ */ e.jsx("span", { children: f }),
          i && !l && /* @__PURE__ */ e.jsx(J, { icon: i, className: "w-4 h-4", inline: !0 })
        ]
      }
    );
  }
);
Re.displayName = "Button";
const va = we(
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
), Ct = Ne(
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
  const f = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }, p = {
    primary: "checked:bg-primary-600 checked:border-primary-600 hover:border-primary-600",
    secondary: "checked:bg-secondary-600 checked:border-secondary-600 hover:border-secondary-600",
    success: "checked:bg-success-600 checked:border-success-600 hover:border-success-600",
    warning: "checked:bg-warning-600 checked:border-warning-600 hover:border-warning-600",
    error: "checked:bg-danger-600 checked:border-danger-600 hover:border-danger-600"
  }, u = r ? "border-danger-600 hover:border-danger-700" : "", m = Le(
    "border-2 transition-colors duration-200",
    "appearance-none cursor-pointer",
    "checked:bg-no-repeat checked:bg-center",
    l === "circle" ? 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]' : 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM0w0LjUgOC41TDIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=")]',
    {
      square: "rounded",
      circle: "rounded-full"
    }[l],
    f[n],
    p[c],
    u,
    a && "opacity-50 cursor-not-allowed",
    i
  ), j = Le(
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
          className: m,
          disabled: a,
          ref: (k) => {
            k && (k.indeterminate = s);
          },
          ...d
        }
      ),
      t && /* @__PURE__ */ e.jsx("label", { className: j, children: t })
    ] }),
    r && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-danger-600", children: r })
  ] });
}, yt = we(
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
), ya = Ne(
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
    helperText: f,
    label: p,
    required: u = !1,
    labelPlacement: h = "top",
    fullWidth: m = !1,
    disabled: j = !1,
    variant: k = "square",
    color: g = "primary",
    checkboxSize: y = "sm",
    showSelectAll: w = !1,
    selectAllText: P = "Select All",
    indeterminateSelectAll: z = !0,
    gap: I,
    selectAllGap: H,
    id: Y,
    ...E
  }, R) => {
    const N = Y || he.useId(), F = `${N}-helper`, S = `${N}-error`, C = `${N}-group`, [O, $] = he.useState(s), M = a !== void 0 ? a : O, v = (_, q) => {
      const ke = q ? [...M, _] : M.filter((Me) => Me !== _);
      a === void 0 && $(ke), n == null || n(ke);
    }, D = (_) => {
      const q = _ ? r.map((ke) => ke.value) : [];
      a === void 0 && $(q), n == null || n(q);
    }, b = r.length > 0 && M.length === r.length, G = M.length > 0 && M.length < r.length, T = z && G, U = (_) => _ === "none" ? "gap-0" : _ === "xs" ? "gap-1" : _ === "sm" ? "gap-2" : _ === "md" ? "gap-3" : _ === "lg" ? "gap-4" : _ === "xl" ? "gap-6" : null, ee = U(I), ue = U(H), ie = /* @__PURE__ */ e.jsx("div", { className: x("relative", !m && "inline-block"), children: /* @__PURE__ */ e.jsxs(
      "fieldset",
      {
        ref: R,
        id: C,
        className: x(
          yt({ layout: l, size: c }),
          ee,
          t
        ),
        "aria-describedby": i ? S : f ? F : void 0,
        "aria-invalid": i,
        "aria-required": u,
        ...E,
        children: [
          w && r.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: x(
            "flex flex-col",
            ue || ee || yt({ layout: "vertical", size: c })
          ), children: [
            /* @__PURE__ */ e.jsx(
              vt,
              {
                label: P,
                checked: b,
                indeterminate: T,
                onChange: (_) => D(_.target.checked),
                disabled: j,
                variant: k,
                color: i ? "error" : g,
                variantSize: y,
                error: i ? " " : void 0
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: x(
              "flex",
              l === "vertical" && "flex-col",
              l === "horizontal" && "flex-row flex-wrap",
              l === "grid" && "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
              ee || yt({ layout: l, size: c })
            ), children: r.map((_) => /* @__PURE__ */ e.jsx(
              vt,
              {
                label: _.label,
                checked: M.includes(_.value),
                onChange: (q) => v(_.value, q.target.checked),
                disabled: j || _.disabled,
                indeterminate: _.indeterminate,
                variant: k,
                color: i ? "error" : g,
                variantSize: y,
                error: i ? " " : void 0
              },
              _.value
            )) })
          ] }),
          !w && /* @__PURE__ */ e.jsx(e.Fragment, { children: r.map((_) => /* @__PURE__ */ e.jsx(
            vt,
            {
              label: _.label,
              checked: M.includes(_.value),
              onChange: (q) => v(_.value, q.target.checked),
              disabled: j || _.disabled,
              indeterminate: _.indeterminate,
              variant: k,
              color: i ? "error" : g,
              variantSize: y,
              error: i ? " " : void 0
            },
            _.value
          )) })
        ]
      }
    ) }), le = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      i && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: S, children: d }),
      !i && f && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: F, children: f })
    ] });
    return h === "left" ? /* @__PURE__ */ e.jsx("div", { className: x(m ? "w-full" : "inline-block", t), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
      p && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: C,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            p,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: x("flex-1", !m && "inline-block"), children: [
        ie,
        le
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: x(m ? "w-full" : "inline-block", t), children: [
      p && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: C,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            p,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      ie,
      le
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
      i && /* @__PURE__ */ e.jsx("span", { className: "inline-flex items-center", children: /* @__PURE__ */ e.jsx(J, { icon: i, className: "w-4 h-4" }) }),
      t,
      l && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: l,
          className: "ml-1 rounded-full hover:bg-black/10 p-0.5",
          "aria-label": "Close",
          children: /* @__PURE__ */ e.jsx(J, { icon: "mdi:close", className: "w-3 h-3" })
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
de.extend(Ea);
de.extend(Ra);
const Ma = we(
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
), St = Ne(
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
    errorText: f,
    helperText: p,
    label: u,
    required: h = !1,
    labelPlacement: m = "top",
    fullWidth: j = !1,
    className: k,
    placeholder: g = "Select date",
    leftIcon: y,
    rightIcon: w,
    monthsToShow: P = 1,
    valueFormatter: z,
    rangeStart: I,
    rangeEnd: H,
    closeOnSelect: Y = !0,
    calendarFooter: E,
    format: R = "DD-MM-YYYY",
    allowInput: N = !1,
    ...F
  }) => {
    const [S, C] = X(!1), [O, $] = X(t), [M, v] = X(t || /* @__PURE__ */ new Date()), [D, b] = X(!1), [G, T] = X(""), U = pe(null), ee = pe(null), ue = pe(null), ie = pe(null), le = pe(null);
    xe(() => {
      $(t || void 0), T(t ? _(t, R) : "");
    }, [t, R]), xe(() => {
      T(O ? _(O, R) : "");
    }, [O, R]);
    const _ = (B, fe) => {
      const V = B.getDate().toString().padStart(2, "0"), se = (B.getMonth() + 1).toString().padStart(2, "0"), K = B.getFullYear().toString();
      switch (fe) {
        case "DD-MM-YYYY":
          return `${V}-${se}-${K}`;
        case "YYYY-MM-DD":
          return `${K}-${se}-${V}`;
        case "MM-DD-YYYY":
          return `${se}-${V}-${K}`;
        default:
          return `${V}-${se}-${K}`;
      }
    }, q = (B, fe) => {
      const se = B.replace(/[^\d-]/g, "").split("-");
      if (se.length !== 3) return null;
      let K, Ee, oe;
      switch (fe) {
        case "DD-MM-YYYY":
          [K, Ee, oe] = se.map(Number);
          break;
        case "YYYY-MM-DD":
          [oe, Ee, K] = se.map(Number);
          break;
        case "MM-DD-YYYY":
          [Ee, K, oe] = se.map(Number);
          break;
        default:
          [K, Ee, oe] = se.map(Number);
      }
      if (isNaN(K) || isNaN(Ee) || isNaN(oe) || Ee < 1 || Ee > 12 || K < 1 || K > 31 || oe < 1900 || oe > 2099) return null;
      const Ce = new Date(oe, Ee - 1, K);
      return Ce.getDate() !== K || Ce.getMonth() !== Ee - 1 || Ce.getFullYear() !== oe ? null : Ce;
    };
    xe(() => {
      if (D && ie.current) {
        const B = de(M).year(), fe = ie.current.querySelectorAll("[data-year]"), V = Array.from(fe).find(
          (se) => parseInt(se.getAttribute("data-year") || "0") === B
        );
        V && V.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center"
        });
      }
    }, [D, M]);
    const ke = () => {
      if (!S || !ee.current || !ue.current) return;
      const { bottom: B, left: fe, width: V } = ee.current.getBoundingClientRect(), se = ue.current, K = Te();
      P === 2 ? Object.assign(se.style, {
        position: "fixed",
        left: `${fe}px`,
        top: `${B + 4}px`,
        minWidth: "500px",
        width: "auto",
        maxHeight: `${K.innerHeight - B - 8}px`,
        transform: ""
      }) : Object.assign(se.style, {
        position: "fixed",
        left: `${fe + V / 2}px`,
        top: `${B + 4}px`,
        width: "320px",
        maxWidth: "100vw",
        maxHeight: `${K.innerHeight - B - 8}px`,
        transform: "translateX(-50%)"
      });
    };
    xe(() => {
      const B = Te(), fe = je(), V = () => {
        S && ke();
      }, se = () => {
        S && ke();
      }, K = (Ee) => {
        Ee.key === "Escape" && S && (C(!1), b(!1));
      };
      return S && (ke(), B.addEventListener("scroll", V, !0), B.addEventListener("resize", se), fe.addEventListener("keydown", K)), () => {
        B.removeEventListener("scroll", V, !0), B.removeEventListener("resize", se), fe.removeEventListener("keydown", K);
      };
    }, [S]);
    const Me = (B) => {
      if (I !== void 0 && H !== void 0)
        if (I && H)
          $(B), T(_(B, R)), r == null || r(B);
        else if (I) {
          const V = B;
          de(V).isBefore(I), $(V), T(_(V, R)), r == null || r(V), C(!1), b(!1);
        } else
          $(B), T(_(B, R)), r == null || r(B);
      else
        $(B), T(_(B, R)), r == null || r(B), C(!1), b(!1);
    }, Ve = () => {
      v(de(M).subtract(1, "month").toDate());
    }, ae = () => {
      v(de(M).add(1, "month").toDate());
    }, me = (B) => {
      const fe = de(B).startOf("month"), V = de(B).endOf("month"), se = [];
      let K = fe;
      for (; K.isBefore(V) || K.isSame(V, "day"); )
        se.push(K.toDate()), K = K.add(1, "day");
      return se;
    }, be = (B) => !!(a && de(B).isBefore(a, "day") || s && de(B).isAfter(s, "day")), Pe = (B) => {
      if (!N) return;
      const V = B.target.value.replace(/[^\d-]/g, "");
      if (V.length < G.length) {
        T(V);
        return;
      }
      if (V.replace(/-/g, "").length > 8)
        return;
      let K = V;
      R === "DD-MM-YYYY" ? (V.length === 2 && !V.includes("-") || V.length === 5 && V.split("-").length === 2) && (K = V + "-") : R === "YYYY-MM-DD" ? (V.length === 4 && !V.includes("-") || V.length === 7 && V.split("-").length === 2) && (K = V + "-") : R === "MM-DD-YYYY" && (V.length === 2 && !V.includes("-") || V.length === 5 && V.split("-").length === 2) && (K = V + "-"), T(K);
    }, Se = () => {
      if (!N) return;
      const B = q(G, R);
      if (B) {
        if (a && B < a) {
          T(_(a, R)), $(a), r == null || r(a);
          return;
        }
        if (s && B > s) {
          T(_(s, R)), $(s), r == null || r(s);
          return;
        }
        $(B), r == null || r(B), T(_(B, R));
      } else
        T(O ? _(O, R) : "");
    }, Oe = () => {
      N && C(!1);
    }, ze = (B) => {
      N && B.key === "Enter" && (B.preventDefault(), Se());
    }, De = (B) => {
      const fe = de(M).year(B).toDate();
      v(fe), b(!1);
    }, ct = () => {
      if (!D) return null;
      const B = de(M).year(), fe = 1900, se = Array.from(
        { length: 2099 - fe + 1 },
        (K, Ee) => fe + Ee
      );
      return /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: ie,
          className: "grid grid-cols-5 gap-2 p-2 overflow-y-auto max-h-[300px]",
          children: se.map((K) => /* @__PURE__ */ e.jsx(
            "div",
            {
              "data-year": K,
              onClick: () => De(K),
              className: x(
                K === B && "bg-primary-50 text-primary",
                "text-sm cursor-pointer p-2"
              ),
              children: K
            },
            K
          ))
        }
      );
    }, st = () => {
      if (!S) return null;
      const B = je();
      if (!("body" in B)) return null;
      const fe = Array.from({ length: P }).map(
        (V, se) => de(M).add(se, "month").toDate()
      );
      return Ye(
        /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "fixed inset-0 z-[9998]",
              onClick: () => {
                D || C(!1);
              }
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: ue,
              className: "fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-lg",
              onClick: (V) => V.stopPropagation(),
              children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between p-2 border-b border-gray-200", children: [
                  /* @__PURE__ */ e.jsx(
                    Re,
                    {
                      onClick: Ve,
                      variant: "ghost",
                      size: "sm",
                      leftIcon: "mdi:chevron-left"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-900", children: P === 1 ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e.jsx("span", { children: de(M).format("MMMM") }),
                    /* @__PURE__ */ e.jsxs(
                      "div",
                      {
                        className: "cursor-pointer flex items-center gap-1",
                        onClick: () => b(!D),
                        children: [
                          /* @__PURE__ */ e.jsx("span", { children: de(M).format("YYYY") }),
                          /* @__PURE__ */ e.jsx(Re, { variant: "ghost", size: "sm", leftIcon: D ? "mdi:chevron-up" : "mdi:chevron-down" })
                        ]
                      }
                    )
                  ] }) : `${de(M).format("MMMM YYYY")} - ${de(
                    M
                  ).add(P - 1, "month").format("MMMM YYYY")}` }) }),
                  /* @__PURE__ */ e.jsx(
                    Re,
                    {
                      onClick: ae,
                      variant: "ghost",
                      size: "sm",
                      rightIcon: "mdi:chevron-right"
                    }
                  )
                ] }),
                D ? ct() : /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: x(
                      P === 2 ? "flex gap-5 p-2 mx-auto w-fit" : "justify-between p-2 mx-auto w-fit"
                    ),
                    children: fe.map((V, se) => {
                      const K = me(V), Ee = de(V).startOf("month").day();
                      return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-7 gap-y-1 my-1", children: [
                          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                            (oe, Ce) => {
                              const Ge = Ce === 0 || Ce === 6;
                              return /* @__PURE__ */ e.jsx(
                                "div",
                                {
                                  className: x(
                                    "text-center text-xs font-medium text-neutral",
                                    Ge && "text-danger"
                                  ),
                                  children: oe
                                },
                                oe
                              );
                            }
                          ),
                          Array.from({ length: Ee }).map(
                            (oe, Ce) => /* @__PURE__ */ e.jsx("div", {}, `empty-${Ce}`)
                          ),
                          K.map((oe) => {
                            const Ce = O && de(oe).isSame(O, "day"), Ge = be(oe), dt = de(oe).isSame(
                              V,
                              "month"
                            ), ut = I && H && de(oe).isSameOrAfter(I, "day") && de(oe).isSameOrBefore(H, "day"), ot = I && de(oe).isSame(I, "day"), lt = H && de(oe).isSame(H, "day"), mt = de(oe).day() === 0 || de(oe).day() === 6, $e = I && H;
                            return /* @__PURE__ */ e.jsx("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ e.jsx(
                              "div",
                              {
                                className: x(
                                  ut && "rounded-none bg-primary-50",
                                  $e && ot && "rounded-l-full",
                                  $e && lt && "rounded-r-full"
                                ),
                                children: /* @__PURE__ */ e.jsx(
                                  "button",
                                  {
                                    onClick: () => !Ge && Me(oe),
                                    disabled: Ge,
                                    className: x(
                                      "p-2 text-sm transition-colors duration-200 w-10 h-10 rounded-full",
                                      mt && "!text-danger",
                                      Ce && "bg-primary !text-white hover:bg-primary-600 active:bg-primary-700",
                                      Ce && !$e && "rounded-full",
                                      !Ce && !Ge && "hover:bg-primary-50 active:bg-primary-100",
                                      !dt && "text-neutral-400",
                                      Ge && "opacity-50 cursor-not-allowed",
                                      // inRange && "bg-primary-50 text-primary-900 rounded-none",
                                      $e && ot && "!bg-primary !text-white !rounded-full",
                                      $e && lt && "!bg-primary !text-white !rounded-full"
                                    ),
                                    children: de(oe).format("D")
                                  },
                                  oe.toString()
                                )
                              }
                            ) });
                          })
                        ] }),
                        E
                      ] }, se);
                    })
                  }
                )
              ]
            }
          )
        ] }),
        B.body
      );
    }, Ke = /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: x("relative", !j && "inline-block"),
        ref: ee,
        onClick: () => !i && !N && C(!S),
        children: [
          y && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (B) => {
                B.stopPropagation(), i || C(!S);
              },
              children: /* @__PURE__ */ e.jsx(J, { icon: y, className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: le,
              type: "text",
              value: N ? G : z ? z() : O ? _(O, R) : "",
              placeholder: N ? R : g,
              readOnly: !N,
              maxLength: N ? 10 : void 0,
              onChange: Pe,
              onBlur: Se,
              onFocus: Oe,
              onKeyDown: ze,
              className: x(
                Ma({ variant: d ? "error" : n, size: l, rounded: c, fullWidth: j }),
                y && "pl-10",
                w && "pr-10",
                k
              ),
              disabled: i,
              ...F
            }
          ),
          w && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (B) => {
                B.stopPropagation(), i || C(!S);
              },
              children: /* @__PURE__ */ e.jsx(J, { icon: w, className: "w-4 h-4" })
            }
          )
        ]
      }
    ), nt = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      f && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", children: f }),
      !f && p && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", children: p })
    ] });
    return m === "left" ? /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: x(j ? "w-full" : "inline-block", k),
        ref: U,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
            u && /* @__PURE__ */ e.jsxs("label", { className: "block text-sm text-neutral-900 pt-2", children: [
              u,
              h && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: x("flex-1", !j && "inline-block"), children: [
              Ke,
              nt
            ] })
          ] }),
          st()
        ]
      }
    ) : /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: x(j ? "w-full" : "inline-block", k),
        ref: U,
        children: [
          u && /* @__PURE__ */ e.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
            u,
            h && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          Ke,
          nt,
          st()
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
  ...f
}) => {
  const [p, u] = X([
    void 0,
    void 0
  ]);
  if (t === "single") {
    const h = Array.isArray(r) ? r[0] : r;
    return /* @__PURE__ */ e.jsx(
      St,
      {
        value: h === null ? void 0 : h,
        onChange: (m) => a == null ? void 0 : a(m),
        monthsToShow: s,
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
    let [h, m] = Array.isArray(r) ? r : p;
    const j = (g) => {
      !h || h && m ? (u([g, void 0]), a == null || a([g, void 0])) : h && !m && (g < h ? (u([g, h]), a == null || a([g, h])) : (u([h, g]), a == null || a([h, g])));
    }, k = () => {
      if (!h) return "";
      const g = (y) => y ? y.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }) : "";
      return h && m ? `${g(h)} - ${g(m)}` : g(h);
    };
    return /* @__PURE__ */ e.jsx(
      St,
      {
        value: h,
        onChange: j,
        monthsToShow: s,
        placeholder: f.placeholder || "Select date range",
        valueFormatter: k,
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
Ca.displayName = "DatePicker";
const ir = Ne(
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
            children: /* @__PURE__ */ e.jsx(J, { icon: "mdi:close", className: "h-5 w-5" })
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
}, Ta = Ne(
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
  }, f) => {
    const [p, u] = X(!1), [h, m] = X(!1);
    if (xe(() => {
      if (t) {
        u(!0), m(!0);
        const y = je();
        "body" in y && (y.body.style.overflow = "hidden");
      } else {
        m(!1);
        const y = setTimeout(() => {
          u(!1);
          const w = je();
          "body" in w && (w.body.style.overflow = "");
        }, 300);
        return () => clearTimeout(y);
      }
    }, [t]), xe(() => {
      const y = (w) => {
        w instanceof KeyboardEvent && w.key === "Escape" && r();
      };
      return t && je().addEventListener("keydown", y), () => {
        je().removeEventListener("keydown", y);
      };
    }, [t, r]), !p) return null;
    const j = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, k = () => {
      c && r();
    }, g = je();
    return "body" in g ? Ye(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: x(
            "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300",
            j[n],
            h ? "opacity-100" : "opacity-0",
            i === "fullscreen" && "items-start"
          ),
          onClick: k,
          children: /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: f,
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
      g.body
    ) : null;
  }
), Ia = Ne(
  ({ children: t, className: r, ...a }, s) => /* @__PURE__ */ e.jsx(
    "h2",
    {
      ref: s,
      className: x("text-xl font-semibold text-gray-900", r),
      ...a,
      children: t
    }
  )
), Pa = Ne(
  ({ children: t, className: r, ...a }, s) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: s,
      className: x("text-gray-600", r),
      ...a,
      children: t
    }
  )
), Da = Ne(
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
Ta.displayName = "Dialog";
Ia.displayName = "DialogTitle";
Pa.displayName = "DialogBody";
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
  }, f = Le(
    "inline-block",
    l[t],
    c[r],
    i[a],
    d[s],
    n
  );
  return /* @__PURE__ */ e.jsx("div", { className: f });
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
  shadow: f = "none",
  rounded: p = "lg",
  children: u,
  showFileList: h = !0,
  showPlaceholder: m = !0,
  showMaxSize: j = !0,
  icon: k = "mdi:upload"
}) => {
  const [g, y] = X(!1), [w, P] = X(null), z = pe(null), I = Be((C) => {
    C.preventDefault(), c || y(!0);
  }, [c]), H = Be((C) => {
    C.preventDefault(), y(!1);
  }, []), Y = Be((C) => C.size > r ? `File size exceeds ${r / (1024 * 1024)}MB limit` : t[0] !== "*" && !t.some((O) => O.startsWith(".") ? C.name.toLowerCase().endsWith(O.toLowerCase()) : C.type.startsWith(O)) ? `File type not allowed. Allowed types: ${t.join(", ")}` : null, [t, r]), E = Be((C) => {
    if (C.preventDefault(), y(!1), P(null), c) return;
    const O = Array.from(C.dataTransfer.files), $ = [], M = [];
    if (O.forEach((v) => {
      const D = Y(v);
      D ? M.push(`${v.name}: ${D}`) : $.push(v);
    }), M.length > 0 && P(M.join(`
`)), $.length > 0) {
      const v = a ? [...s, ...$] : $;
      n == null || n(v);
    }
  }, [c, a, n, Y, s]), R = Be((C) => {
    if (P(null), c || !C.target.files) return;
    const O = Array.from(C.target.files), $ = [], M = [];
    if (O.forEach((v) => {
      const D = Y(v);
      D ? M.push(`${v.name}: ${D}`) : $.push(v);
    }), M.length > 0 && P(M.join(`
`)), $.length > 0) {
      const v = a ? [...s, ...$] : $;
      n == null || n(v);
    }
    z.current && (z.current.value = "");
  }, [c, a, n, Y, s]), N = Be((C) => {
    const O = [...s];
    O.splice(C, 1), n == null || n(O);
  }, [n, s]), F = (C) => C.type.startsWith("image/") ? /* @__PURE__ */ e.jsx(J, { icon: "mdi:image", className: "w-5 h-5" }) : C.type.startsWith("text/") ? /* @__PURE__ */ e.jsx(J, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ e.jsx(J, { icon: "mdi:file", className: "w-5 h-5" }), S = za[d];
  return /* @__PURE__ */ e.jsxs("div", { className: re("w-full", l), children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: re(
          "p-6 text-center transition-colors",
          !u && [
            "border-2 border-dashed",
            S.border,
            S.bg,
            g && S.active,
            !c && S.hover
          ],
          c && "opacity-50 cursor-not-allowed",
          Oa[f],
          Ht[p],
          !u && "cursor-pointer"
        ),
        onDragOver: I,
        onDragLeave: H,
        onDrop: E,
        onClick: () => {
          var C;
          return !c && !u && ((C = z.current) == null ? void 0 : C.click());
        },
        children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: z,
              type: "file",
              accept: t.join(","),
              multiple: a,
              onChange: R,
              className: "hidden",
              disabled: c
            }
          ),
          u ? /* @__PURE__ */ e.jsx("div", { onClick: () => {
            var C;
            return !c && ((C = z.current) == null ? void 0 : C.click());
          }, children: u }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(J, { icon: k, className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
            m && /* @__PURE__ */ e.jsx("p", { className: re("text-neutral-600", S.text), children: i }),
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
    h && s.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "mt-4 space-y-2", children: s.map((C, O) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: re(
          "flex items-center justify-between p-2",
          Ht[p],
          S.bg
        ),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
            F(C),
            /* @__PURE__ */ e.jsx("span", { className: re("text-sm", S.text), children: C.name }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-neutral", children: [
              "(",
              (C.size / 1024).toFixed(1),
              " KB)"
            ] })
          ] }),
          !c && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => N(O),
              className: "p-1 text-neutral hover:text-danger",
              children: /* @__PURE__ */ e.jsx(J, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${C.name}-${O}`
    )) })
  ] });
}, La = we(
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
  return /* @__PURE__ */ e.jsxs("div", { className: x(La({ variant: s, rounded: n }), i), children: [
    a && /* @__PURE__ */ e.jsx(J, { icon: f(), className: x("h-5 w-5 flex-shrink-0", d()) }),
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
        children: /* @__PURE__ */ e.jsx(J, { icon: "mdi:close", className: "h-5 w-5" })
      }
    )
  ] });
}, wt = "select-dropdown-opened", $a = we(
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
), cr = Ne(
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
    required: f = !1,
    placeholder: p,
    value: u,
    onChange: h,
    disabled: m = !1,
    position: j = "bottom",
    fullWidth: k = !1,
    children: g,
    leftIcon: y,
    rightIcon: w,
    ...P
  }, z) => {
    const [I, H] = X(!1), Y = pe(null), E = pe(null), N = `select-${he.useId().replace(/:/g, "")}`, F = () => {
      if (I && Y.current && E.current) {
        const v = Y.current.getBoundingClientRect(), D = E.current, b = Te(), G = b.innerHeight - v.bottom, T = v.top, ee = v.bottom + D.offsetHeight + 4 >= b.innerHeight, ue = T > G, ie = ee && ue;
        j === "bottom" || j === "top" ? (D.style.position = "fixed", D.style.left = `${v.left}px`, D.style.width = `${v.width}px`, j === "bottom" && ie ? (D.style.bottom = `${b.innerHeight - v.top + 4}px`, D.style.top = "auto", D.style.maxHeight = `${T - 8}px`) : j === "bottom" ? (D.style.top = `${v.bottom + 4}px`, D.style.bottom = "auto", D.style.maxHeight = `${G - 8}px`) : j === "top" && !ie ? (D.style.top = `${v.bottom + 4}px`, D.style.bottom = "auto", D.style.maxHeight = `${G - 8}px`) : (D.style.bottom = `${b.innerHeight - v.top + 4}px`, D.style.top = "auto", D.style.maxHeight = `${T - 8}px`)) : j === "left" ? (D.style.position = "fixed", D.style.right = `${b.innerWidth - v.left + 4}px`, D.style.top = `${v.top}px`, D.style.maxHeight = `${b.innerHeight - v.top - 8}px`) : j === "right" && (D.style.position = "fixed", D.style.left = `${v.right + 4}px`, D.style.top = `${v.top}px`, D.style.maxHeight = `${b.innerHeight - v.top - 8}px`);
      }
    };
    xe(() => {
      const v = Te(), D = () => {
        I && F();
      }, b = () => {
        I && F();
      };
      return I && (F(), v.addEventListener("scroll", D, !0), v.addEventListener("resize", b)), () => {
        v.removeEventListener("scroll", D, !0), v.removeEventListener("resize", b);
      };
    }, [I, j]), xe(() => {
      const v = je(), D = (G) => {
        G.detail.id !== N && H(!1);
      }, b = (G) => {
        const T = G.target, U = Y.current, ee = E.current;
        U && ee && !U.contains(T) && !ee.contains(T) && H(!1);
      };
      return v.addEventListener(wt, D), v.addEventListener("click", b), () => {
        v.removeEventListener(wt, D), v.removeEventListener("click", b);
      };
    }, [N]);
    const S = () => {
      if (m) return;
      if (I) {
        H(!1);
        return;
      }
      je().dispatchEvent(
        new CustomEvent(wt, {
          detail: { id: N }
        })
      ), H(!0);
    }, C = () => {
      if (n) {
        const v = n.find((D) => D.value === u);
        return v == null ? void 0 : v.label;
      }
      if (g) {
        const D = Ot.toArray(g).find(
          (b) => bt(b) && "value" in b.props && b.props.value === u
        );
        return bt(D) ? D.props.children : null;
      }
      return null;
    }, O = (v) => {
      m || (h == null || h(v), H(!1));
    }, $ = () => n ? n.map((v) => /* @__PURE__ */ e.jsx(
      it,
      {
        value: v.value,
        disabled: v.disabled,
        selected: v.value === u,
        onClick: () => {
          v.onClick && v.onClick(v.value), O(v.value);
        },
        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          v.icon,
          v.label
        ] })
      },
      v.value
    )) : g ? Ot.map(g, (v) => bt(v) && "value" in v.props ? Sr(v, {
      selected: v.props.value === u,
      onClick: () => O(v.props.value)
    }) : null) : null, M = () => {
      if (!I || m) return null;
      const v = /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: E,
          className: x(
            "fixed z-[9999] min-w-[8rem] border border-neutral-200 bg-white py-1 shadow-lg rounded-lg",
            j === "left" || j === "right" ? "w-max" : "w-full"
          ),
          onClick: (b) => b.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: $()
        }
      ), D = je();
      return "body" in D ? Ye(v, D.body) : null;
    };
    return /* @__PURE__ */ e.jsxs("div", { className: x(k ? "w-full" : "inline-block"), ref: z, ...P, children: [
      l && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: N,
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
          className: x("relative", !k && "inline-block"),
          onClick: S,
          children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                id: N,
                ref: Y,
                type: "button",
                className: x(
                  $a({ variant: c ? "error" : r, size: a, rounded: s, fullWidth: k }),
                  "flex items-center justify-between",
                  m && "cursor-not-allowed opacity-50",
                  y && "pl-10",
                  w && "pr-10",
                  t
                ),
                "aria-haspopup": "listbox",
                "aria-expanded": I,
                "aria-describedby": c ? `${N}-error` : d ? `${N}-helper` : void 0,
                disabled: m,
                children: [
                  y && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ e.jsx(J, { icon: y, className: "w-4 h-4" }) }),
                  /* @__PURE__ */ e.jsx("span", { className: "flex items-center gap-2 min-w-0 flex-1", children: /* @__PURE__ */ e.jsx("span", { className: x(
                    "truncate text-left",
                    C() ? "text-neutral-900" : "text-neutral"
                  ), children: C() || p }) }),
                  w ? /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ e.jsx(J, { icon: w, className: "w-4 h-4" }) }) : /* @__PURE__ */ e.jsx(
                    J,
                    {
                      icon: "mdi:chevron-down",
                      className: x("transition-transform flex-shrink-0 ml-2 w-4 h-4", I && "rotate-180")
                    }
                  )
                ]
              }
            ),
            M()
          ]
        }
      ),
      c && i && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: `${N}-error`, children: i }),
      !c && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: `${N}-helper`, children: d })
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
  onPerPageChange: f
}) => {
  const p = (m, j) => {
    const k = j - m + 1;
    return Array.from({ length: k }, (g, y) => y + m);
  }, h = (() => {
    const m = n * 2 + 3, j = m + 2;
    if (r > j) {
      const k = Math.max(2, t - n), g = Math.min(r - 1, t + n);
      let y = p(k, g);
      const w = k > 2, P = r - g > 1, z = m - (y.length + 1);
      if (w && !P)
        y = [...p(k - z, k - 1), ...y];
      else if (!w && P) {
        const I = p(g + 1, g + z);
        y = [...y, ...I];
      } else w && P && (y = [...y]);
      return [1, ...y, r];
    }
    return p(1, r);
  })();
  return /* @__PURE__ */ e.jsxs(
    "nav",
    {
      className: re("flex items-center justify-between space-x-1", l),
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
                onChange: (m) => f && f(Number(m)),
                size: "sm",
                className: "w-16",
                fullWidth: !1,
                "aria-label": "Items per page",
                children: c.map((m) => /* @__PURE__ */ e.jsx(it, { value: m.toString(), children: m }, m))
              }
            ),
            /* @__PURE__ */ e.jsx("span", { className: "text-neutral-700 text-sm", children: "data per halaman" })
          ] }),
          /* @__PURE__ */ e.jsx(
            Re,
            {
              variant: "ghost",
              onClick: () => s(t - 1),
              disabled: t === 1,
              className: re(
                "px-3 py-1 rounded-md text-sm",
                t === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              ),
              children: /* @__PURE__ */ e.jsx(J, { size: "18", icon: "mdi:chevron-left" })
            }
          ),
          h.map((m, j) => {
            const k = m === t, g = typeof m == "string" && m === "...";
            return /* @__PURE__ */ e.jsx(
              Re,
              {
                variant: "ghost",
                onClick: () => !g && s(m),
                className: re(
                  "px-3 py-1 rounded-md text-sm",
                  k ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  g && "cursor-default"
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
              onClick: () => s(t + 1),
              disabled: t === r,
              className: re(
                "px-3 py-1 rounded-md text-sm",
                t === r ? "text-gray-400 cursor-not-allowed" : "text-gray-700"
              ),
              children: /* @__PURE__ */ e.jsx(J, { size: "18", icon: "mdi:chevron-right" })
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
  const f = (h) => {
    s && s(h.target.checked);
  }, p = {
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
      className: Le(
        "inline-flex items-center cursor-pointer",
        a && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "radio",
            className: Le(
              "border-2 rounded-full appearance-none",
              "focus:outline-none focus:ring-2 focus:ring-primary/25",
              "transition-colors duration-200",
              "checked:bg-no-repeat checked:bg-center",
              'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]',
              p[d],
              r ? u[i] : c ? "border-danger-600" : "border-gray-300",
              c && !r && "hover:border-danger-700",
              a && "cursor-not-allowed"
            ),
            checked: r,
            disabled: a,
            onChange: f,
            name: n,
            value: l
          }
        ),
        t && /* @__PURE__ */ e.jsx("label", { className: Le(
          "ml-2 text-sm font-medium",
          a && "opacity-50 cursor-not-allowed",
          c && "text-danger-600"
        ), children: t })
      ]
    }
  );
}, Ya = we(
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
), Va = Ne(
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
    helperText: f,
    label: p,
    required: u = !1,
    labelPlacement: h = "top",
    fullWidth: m = !1,
    disabled: j = !1,
    name: k,
    gap: g,
    color: y = "primary",
    radioSize: w = "sm",
    id: P,
    ...z
  }, I) => {
    const H = P || he.useId(), Y = `${H}-helper`, E = `${H}-error`, R = `${H}-group`, N = k || `radio-group-${H}`, [F, S] = he.useState(s), C = a !== void 0 ? a : F, O = (b) => {
      a === void 0 && S(b), n == null || n(b);
    }, M = ((b) => b === "none" ? "gap-0" : b === "xs" ? "gap-1" : b === "sm" ? "gap-2" : b === "md" ? "gap-3" : b === "lg" ? "gap-4" : b === "xl" ? "gap-6" : null)(g), v = /* @__PURE__ */ e.jsx("div", { className: x("relative", !m && "inline-block"), children: /* @__PURE__ */ e.jsx(
      "fieldset",
      {
        ref: I,
        id: R,
        className: x(
          Ya({ layout: l, size: c }),
          M,
          t
        ),
        "aria-describedby": i ? E : f ? Y : void 0,
        "aria-invalid": i,
        "aria-required": u,
        ...z,
        children: r.map((b) => /* @__PURE__ */ e.jsx(
          Ba,
          {
            label: b.label,
            checked: C === b.value,
            onChange: () => O(b.value),
            disabled: j || b.disabled,
            name: N,
            value: b.value,
            color: i ? "error" : y,
            error: i ? " " : void 0,
            variantSize: w
          },
          b.value
        ))
      }
    ) }), D = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      i && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: E, children: d }),
      !i && f && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: Y, children: f })
    ] });
    return h === "left" ? /* @__PURE__ */ e.jsx("div", { className: x(m ? "w-full" : "inline-block", t), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
      p && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: R,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            p,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: x("flex-1", !m && "inline-block"), children: [
        v,
        D
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: x(m ? "w-full" : "inline-block", t), children: [
      p && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: R,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            p,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      v,
      D
    ] });
  }
);
Va.displayName = "RadioGroup";
const Ga = we(
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
  marks: f = [],
  range: p = !1
}) => {
  const u = p, [h, m] = X(
    s !== void 0 ? s : n !== void 0 ? n : u ? [t, r] : t
  ), [j, k] = X(null), g = pe(null), y = s !== void 0 ? s : h, [w, P] = u ? Array.isArray(y) ? y : [t, r] : [typeof y == "number" ? y : t, r], z = (M) => Math.min(Math.max(M, t), r), I = (M) => {
    if (i) return;
    let v;
    u && Array.isArray(M) ? v = [z(M[0]), z(M[1])] : !u && typeof M == "number" ? v = z(M) : v = u ? [t, r] : t, s === void 0 && m(v), l == null || l(v);
  }, H = (M) => {
    if (!g.current) return t;
    const v = g.current.getBoundingClientRect(), b = (M - v.left) / v.width, G = t + (r - t) * b, T = Math.round(G / a) * a;
    return z(T);
  }, Y = (M) => (v) => {
    i || (k(M), v.stopPropagation());
  }, E = (M) => {
    if (!i)
      if (!u)
        k(0), R(M, 0);
      else {
        const v = H(M.clientX), D = Math.abs(v - w), b = Math.abs(v - P), G = D < b ? 0 : 1;
        k(G), R(M, G);
      }
  }, R = he.useCallback((M, v) => {
    const D = H(M.clientX);
    if (!u)
      I(D);
    else {
      let b = [w, P];
      v === 0 ? b = [Math.min(D, P - a), P] : b = [w, Math.max(D, w + a)], b[0] > b[1] && (b = [b[1], b[0]]), I(b);
    }
  }, [u, w, P, a, I, H]), N = he.useRef(j);
  N.current = j;
  const F = he.useCallback(function(M) {
    N.current === null || i || R(M, N.current);
  }, [i, R]), S = he.useCallback(function() {
    k(null);
  }, []);
  xe(() => {
    if (j !== null) {
      const M = Te();
      return M.addEventListener("mousemove", F), M.addEventListener("mouseup", S), () => {
        M.removeEventListener("mousemove", F), M.removeEventListener("mouseup", S);
      };
    }
  }, [j, F, S]);
  const C = (M) => (M - t) / (r - t) * 100, O = C(w), $ = C(P);
  return /* @__PURE__ */ e.jsxs("div", { className: re("relative w-full", c), children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: g,
        className: re(
          "relative h-2 bg-gray-200 rounded-full cursor-pointer",
          i && "opacity-50 cursor-not-allowed"
        ),
        onMouseDown: E,
        children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute h-full bg-primary rounded-full",
              style: { left: `${u ? O : 0}%`, width: `${u ? $ - O : O}%` }
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: re(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                i && "cursor-not-allowed"
              ),
              style: { left: `${O}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: Y(0)
            }
          ),
          u && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: re(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                i && "cursor-not-allowed"
              ),
              style: { left: `${$}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: Y(1)
            }
          )
        ]
      }
    ),
    f.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex justify-between mt-2", children: f.map((M) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "text-xs text-gray",
        style: { left: `${(M.value - t) / (r - t) * 100}%` },
        children: M.label
      },
      M.value
    )) }),
    d && /* @__PURE__ */ e.jsx("div", { className: "mt-2 text-sm text-gray-600", children: u ? `${w} - ${P}` : w })
  ] });
}, Ua = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}, Wa = {
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
  const [i, d] = X(null), f = (m) => {
    n || d(m);
  }, p = () => {
    n || d(null);
  }, u = (m) => {
    !n && l && l(m);
  }, h = i !== null ? i : t;
  return /* @__PURE__ */ e.jsx("div", { className: x("flex items-center gap-1", c), children: [...Array(r)].map((m, j) => {
    const k = j + 1, g = k <= h, y = i !== null && k <= i;
    return /* @__PURE__ */ e.jsx(
      "button",
      {
        className: x(
          "transition-colors duration-200",
          Ua[a],
          g || y ? Wa[s] : "text-default-200",
          !n && "cursor-pointer"
        ),
        onMouseEnter: () => f(k),
        onMouseLeave: p,
        onClick: () => u(k),
        disabled: n,
        "aria-label": `Rate ${k} out of ${r}`,
        children: /* @__PURE__ */ e.jsx(
          J,
          {
            icon: g || y ? "mdi:star" : "mdi:star-outline",
            className: "w-full h-full"
          }
        )
      },
      j
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
                J,
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
                J,
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
      className: re(
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
              className: re(
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
              className: re(
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
  var y, w;
  const [f, p] = X(r || ((y = t[0]) == null ? void 0 : y.id) || ""), u = he.useRef(null), [h, m] = X({ left: 0, width: 0 });
  he.useEffect(() => {
    var P;
    if (a === "active-underline" && u.current) {
      const z = u.current.getBoundingClientRect(), I = (P = u.current.parentElement) == null ? void 0 : P.getBoundingClientRect();
      I && m({
        left: z.left - I.left,
        width: z.width
      });
    }
  }, [a, t, f]), he.useEffect(() => {
    if (a === "active-underline") {
      const P = () => {
        var z;
        if (u.current) {
          const I = u.current.getBoundingClientRect(), H = (z = u.current.parentElement) == null ? void 0 : z.getBoundingClientRect();
          H && m({
            left: I.left - H.left,
            width: I.width
          });
        }
      };
      return window.addEventListener("resize", P), () => window.removeEventListener("resize", P);
    }
  }, [a, t, f]);
  const j = Be((P) => {
    p(P), d == null || d(P);
  }, [d]), k = () => {
    switch (s) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  }, g = (P, z) => {
    const I = re(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      k(),
      z && "opacity-50 cursor-not-allowed",
      !z && "cursor-pointer"
    );
    switch (a) {
      case "pills":
        return re(
          I,
          "rounded-full",
          P ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return re(
          I,
          "border-b-2",
          P ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      case "active-underline":
        return re(
          I,
          "border-b-0",
          P ? "text-primary" : "text-gray-600 dark:text-gray-300 hover:text-primary"
        );
      default:
        return re(
          I,
          "border-b-2",
          P ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: re("w-full", n), children: [
    /* @__PURE__ */ e.jsxs("div", { className: re(
      a === "active-underline" ? "relative" : "",
      "flex space-x-1",
      a === "pills" && "space-x-2 border-b-0",
      a !== "active-underline" && "border-b border-gray-200 dark:border-gray-700",
      l
    ), children: [
      t.map((P) => {
        const z = P.id === f, I = !!P.disabled;
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            ref: a === "active-underline" && z ? u : void 0,
            onClick: () => !I && j(P.id),
            disabled: I,
            className: re(
              g(z, I),
              c
            ),
            children: [
              P.icon && /* @__PURE__ */ e.jsx(
                J,
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
      a === "active-underline" && /* @__PURE__ */ e.jsx(
        "span",
        {
          className: "absolute bottom-0 h-0.5 bg-primary transition-all duration-300",
          style: { left: h.left, width: h.width }
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: re("mt-4", i), children: (w = t.find((P) => P.id === f)) == null ? void 0 : w.content })
  ] });
}, at = ({
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
}, kt = "timepicker-dropdown-opened", Xa = we(
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
), mr = Ne(
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
    label: f,
    required: p = !1,
    labelPlacement: u = "top",
    fullWidth: h = !1,
    className: m,
    placeholder: j = "Select time",
    leftIcon: k,
    rightIcon: g,
    valueFormatter: y,
    closeOnSelect: w = !0,
    ...P
  }, z) => {
    const [I, H] = X(!1), [Y, E] = X(t || ""), [R, N] = X(0), [F, S] = X(0), [C, O] = X(!0), $ = pe(null), M = pe(null), v = pe(null), b = `timepicker-${he.useId().replace(/:/g, "")}`, G = () => {
      if (!I || !M.current || !v.current) return;
      const _ = M.current.getBoundingClientRect(), q = v.current, Me = Te().innerHeight - _.bottom;
      q.style.top = `${_.bottom + 4}px`, q.style.bottom = "auto", q.style.left = `${_.left}px`, q.style.maxHeight = `${Me - 8}px`, q.style.width = `${_.width}px`;
    };
    xe(() => {
      const _ = Te(), q = je(), ke = () => {
        I && G();
      }, Me = () => {
        I && G();
      }, Ve = (me) => {
        me.detail.id !== b && H(!1);
      }, ae = (me) => {
        const be = me.target;
        $.current && v.current && !$.current.contains(be) && !v.current.contains(be) && H(!1);
      };
      return I && (G(), _.addEventListener("scroll", ke, !0), _.addEventListener("resize", Me)), q.addEventListener(kt, Ve), q.addEventListener("mousedown", ae), () => {
        _.removeEventListener("scroll", ke, !0), _.removeEventListener("resize", Me), q.removeEventListener(kt, Ve), q.removeEventListener("mousedown", ae);
      };
    }, [I, b]);
    const T = () => {
      c || (I || je().dispatchEvent(
        new CustomEvent(kt, {
          detail: { id: b }
        })
      ), H(!I));
    };
    xe(() => {
      if (t) {
        E(t);
        const [_, q] = t.split(":").map(Number);
        a ? N(_) : (N(_ % 12 || 12), O(_ < 12)), S(q);
      }
    }, [t, a]);
    const U = () => {
      const q = `${(a || C ? R : R + 12).toString().padStart(2, "0")}:${F.toString().padStart(2, "0")}`;
      E(q), r == null || r(q), w && H(!1);
    }, ee = () => a ? Array.from({ length: 24 }, (_, q) => q) : Array.from({ length: 12 }, (_, q) => q + 1), ue = () => Array.from({ length: 60 }, (_, q) => q), ie = y ? y(Y) : Y, le = je();
    return "body" in le ? /* @__PURE__ */ e.jsxs("div", { ref: $, className: x("relative", h && "w-full", m), children: [
      f && /* @__PURE__ */ e.jsxs(
        "label",
        {
          className: x(
            "block text-sm font-medium text-gray-700 mb-1",
            u === "left" && "inline-block mr-2"
          ),
          children: [
            f,
            p && /* @__PURE__ */ e.jsx("span", { className: "text-red ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: M,
          className: "relative",
          onClick: T,
          children: [
            k && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ e.jsx(J, { icon: k, size: 20 }) }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: z,
                type: "text",
                value: ie,
                placeholder: j,
                readOnly: !0,
                className: x(
                  Xa({ variant: s, size: n, rounded: l, fullWidth: h }),
                  k && "pl-10",
                  g && "pr-10",
                  "text-left"
                ),
                disabled: c,
                ...P
              }
            ),
            g && /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ e.jsx(J, { icon: g, size: 20 }) })
          ]
        }
      ),
      I && Ye(
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: v,
            className: "fixed z-[9999] w-fit rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (_) => _.stopPropagation(),
            children: /* @__PURE__ */ e.jsxs("div", { className: "p-0", children: [
              /* @__PURE__ */ e.jsxs(Ct, { variant: "ghost", className: x(
                "flex mx-2 my-1 p-0",
                a ? "justify-start gap-8" : "justify-start gap-4"
              ), children: [
                /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2", children: ee().map((_) => /* @__PURE__ */ e.jsx(
                  Re,
                  {
                    variant: "ghost",
                    onClick: () => N(_),
                    className: x(R === _ && "bg-primary text-white"),
                    children: _.toString().padStart(2, "0")
                  },
                  _
                )) }) }) }),
                /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2", children: ue().map((_) => /* @__PURE__ */ e.jsx(
                  Re,
                  {
                    variant: "ghost",
                    onClick: () => S(_),
                    className: x(F === _ && "bg-primary text-white"),
                    children: _.toString().padStart(2, "0")
                  },
                  _
                )) }) }) }),
                !a && /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ e.jsx(
                    Re,
                    {
                      variant: "ghost",
                      onClick: () => O(!0),
                      className: x(C && "bg-primary text-white"),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    Re,
                    {
                      variant: "ghost",
                      onClick: () => O(!1),
                      className: x(!C && "bg-primary text-white"),
                      children: "PM"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "mb-2 mx-2", children: /* @__PURE__ */ e.jsx(
                Re,
                {
                  variant: "primary",
                  onClick: U,
                  size: "sm",
                  fullWidth: !0,
                  children: "Select"
                }
              ) })
            ] })
          }
        ),
        le.body
      ),
      i && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-danger-600", children: i }),
      d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-gray", children: d })
    ] }) : null;
  }
);
mr.displayName = "PrimitiveTimePicker";
const Qa = ({
  value: t,
  onChange: r,
  valueFormatter: a,
  closeOnSelect: s,
  ...n
}) => /* @__PURE__ */ e.jsx(
  mr,
  {
    value: t,
    onChange: r,
    valueFormatter: a,
    closeOnSelect: s,
    ...n
  }
);
Qa.displayName = "TimePicker";
const es = we(
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
), ts = we(
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
), rs = Ne(
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
    className: f,
    ...p
  }, u) => {
    const h = he.useId(), m = `${h}-helper`, j = `${h}-error`;
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
            className: x(es({ variant: d ? "danger" : a, size: s }), f),
            "aria-describedby": d ? j : c ? m : void 0,
            "aria-invalid": d,
            "aria-required": l,
            ...p,
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
      d && i && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-danger", id: j, children: i }),
      !d && c && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-neutral", id: m, children: c })
    ] });
  }
);
rs.displayName = "Toggle";
const as = we(
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
), ss = we("absolute w-2 h-2 transform rotate-45", {
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
  trigger: f = "hover"
}) => {
  const [p, u] = X(!1), [h, m] = X({ top: 0, left: 0 }), j = pe(null), k = pe(null), g = pe(), y = i !== void 0, w = y ? i : p, P = () => {
    if (!j.current || !k.current) return;
    const E = k.current.getBoundingClientRect(), R = j.current.getBoundingClientRect(), N = Te(), F = N.scrollX || N.pageXOffset, S = N.scrollY || N.pageYOffset;
    let C = 0, O = 0;
    const $ = 8;
    switch (a) {
      case "top":
        C = E.top + S - R.height - $, O = E.left + F + (E.width - R.width) / 2;
        break;
      case "bottom":
        C = E.bottom + S + $, O = E.left + F + (E.width - R.width) / 2;
        break;
      case "left":
        C = E.top + S + (E.height - R.height) / 2, O = E.left + F - R.width - $;
        break;
      case "right":
        C = E.top + S + (E.height - R.height) / 2, O = E.right + F + $;
        break;
    }
    const M = N.innerWidth, v = N.innerHeight;
    O < 0 && (O = 0), O + R.width > M && (O = M - R.width), C < 0 && (C = 0), C + R.height > v && (C = v - R.height), m({ top: C, left: O });
  };
  xe(() => {
    if (w) {
      P();
      const E = Te();
      E.addEventListener("scroll", P, !0), E.addEventListener("resize", P);
    }
    return () => {
      const E = Te();
      E.removeEventListener("scroll", P, !0), E.removeEventListener("resize", P);
    };
  }, [w, a]);
  const z = () => {
    y ? d == null || d(!0) : g.current = setTimeout(() => {
      u(!0);
    }, s);
  }, I = () => {
    g.current && clearTimeout(g.current), y ? d == null || d(!1) : u(!1);
  }, H = (E) => {
    E.stopPropagation(), f === "click" && (y ? d == null || d(!i) : u(!p));
  };
  xe(() => {
    const E = (R) => {
      f === "click" && j.current && !j.current.contains(R.target) && k.current && !k.current.contains(R.target) && I();
    };
    return w && document.addEventListener("click", E), () => {
      document.removeEventListener("click", E);
    };
  }, [w, f]);
  const Y = () => {
    if (!w) return null;
    const E = je();
    return "body" in E ? Ye(
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: j,
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
      ref: k,
      className: "relative inline-block",
      onMouseEnter: f === "hover" ? z : void 0,
      onMouseLeave: f === "hover" ? I : void 0,
      onClick: H,
      children: [
        r,
        Y()
      ]
    }
  ) });
}, ns = we(
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
    icon: f,
    ...p
  }, u) => {
    const h = Math.min(Math.max(n, 0), 100), m = os[s], j = s === "sm" ? 2 : s === "md" ? 3 : 4, k = (m - j) / 2, g = 2 * Math.PI * k, y = g - h / 100 * g;
    let w = "";
    return r === "loading" ? w = "rounded-full" : d ? w = d === "none" ? "" : `rounded-${d}` : w = "rounded-md", r === "circular" ? /* @__PURE__ */ e.jsxs("div", { className: "inline-flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative", style: { width: m, height: m }, children: [
        /* @__PURE__ */ e.jsxs(
          "svg",
          {
            className: x(
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
                  r: k,
                  cx: m / 2,
                  cy: m / 2
                }
              ),
              /* @__PURE__ */ e.jsx(
                "circle",
                {
                  className: x(
                    "transition-all duration-300 ease-in-out",
                    l ? "animate-dash" : ""
                  ),
                  strokeWidth: j,
                  strokeDasharray: g,
                  strokeDashoffset: l ? 0 : y,
                  strokeLinecap: "round",
                  stroke: is[a],
                  fill: "transparent",
                  r: k,
                  cx: m / 2,
                  cy: m / 2
                }
              )
            ]
          }
        ),
        f && /* @__PURE__ */ e.jsx("span", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ e.jsx(J, { icon: f, size: m * 0.5 }) }),
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
          className: x(ns({ variant: r === "loading" ? "bar" : r, size: s }), w, t),
          role: "progressbar",
          "aria-valuenow": l ? void 0 : h,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...p,
          children: /* @__PURE__ */ e.jsx(
            "div",
            {
              className: x(
                "h-full transition-all duration-300 ease-in-out",
                l ? "animate-progress-indeterminate" : "",
                ls[a],
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
], ds = we(
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
), us = Ne(
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
    fullWidth: f = !1,
    value: p = "",
    onChange: u,
    disabled: h = !1,
    defaultCountry: m = "id",
    placeholder: j = "Enter phone number",
    ...k
  }) => {
    const [g, y] = X(!1), [w, P] = X(
      () => jt.find((b) => b.iso === m) || jt[0]
    ), [z, I] = X(""), [H, Y] = X(() => {
      const b = w.code;
      return p.startsWith(b) ? p.slice(b.length) : p;
    }), E = pe(null), R = pe(null), N = he.useId(), F = `${N}-helper`, S = `${N}-error`, C = jt.filter(
      (b) => b.name.toLowerCase().includes(z.toLowerCase()) || b.code.includes(z)
    ), O = pe(null), $ = () => {
      if (g && E.current && R.current) {
        const b = E.current.getBoundingClientRect(), G = R.current, T = typeof window < "u" ? window : { innerHeight: 0 }, U = T.innerHeight - b.bottom, ee = b.top, ie = b.bottom + (G.offsetHeight || 0) + 4 >= T.innerHeight, le = ee > U, _ = ie && le;
        G.style.position = "fixed", G.style.left = `${b.left}px`, G.style.minWidth = `${b.width}px`, G.style.maxWidth = "340px", G.style.width = "auto", _ ? (G.style.bottom = `${T.innerHeight - b.top + 4}px`, G.style.top = "auto", G.style.maxHeight = `${ee - 8}px`) : (G.style.top = `${b.bottom + 4}px`, G.style.bottom = "auto", G.style.maxHeight = `${U - 8}px`);
      }
    };
    xe(() => {
      const b = typeof window < "u" ? window : void 0, G = () => {
        g && $();
      }, T = () => {
        g && $();
      };
      return g && ($(), b == null || b.addEventListener("scroll", G, !0), b == null || b.addEventListener("resize", T)), () => {
        b == null || b.removeEventListener("scroll", G, !0), b == null || b.removeEventListener("resize", T);
      };
    }, [g]), xe(() => {
      if (!g) return;
      const b = (G) => {
        const T = G.target;
        E.current && R.current && !E.current.contains(T) && !R.current.contains(T) && y(!1);
      };
      return document.addEventListener("click", b), () => document.removeEventListener("click", b);
    }, [g]);
    const M = (b) => {
      P(b), y(!1), I("");
      const G = b.code + H;
      u == null || u(G);
    }, v = (b) => {
      const G = b.target.value.replace(/[^\d]/g, "");
      Y(G);
      const T = w.code + G;
      u == null || u(T);
    }, D = x(
      ds({
        variant: n ? "error" : r,
        size: a,
        rounded: s,
        fullWidth: f
      }),
      "!w-full"
    );
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: O,
        className: x(f ? "w-full" : "inline-block", t),
        ...k,
        children: [
          i && /* @__PURE__ */ e.jsxs("label", { htmlFor: N, className: "mb-1.5 block text-sm text-neutral-900", children: [
            i,
            d && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: x("relative", !f && "inline-block"), children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex", children: [
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  ref: E,
                  onClick: () => !h && y(!g),
                  className: x(
                    D,
                    "flex items-center gap-2 rounded-r-none justify-between max-w-[100px]",
                    h && "cursor-not-allowed opacity-50"
                  ),
                  children: [
                    /* @__PURE__ */ e.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ e.jsx(J, { icon: w.flag, className: "w-5 h-5" }),
                      /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: w.code })
                    ] }),
                    /* @__PURE__ */ e.jsx(
                      J,
                      {
                        icon: "mdi:chevron-down",
                        className: x("transition-transform", g && "rotate-180")
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "tel",
                  id: N,
                  value: H,
                  onChange: v,
                  disabled: h,
                  className: x(
                    D,
                    "rounded-l-none flex-1 min-w-0 w-full"
                  ),
                  placeholder: j
                }
              )
            ] }),
            g && Ye(
              /* @__PURE__ */ e.jsxs(
                "div",
                {
                  ref: R,
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
                        value: z,
                        onChange: (b) => I(b.target.value),
                        placeholder: "Search countries...",
                        className: "w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:border-primary-300"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "max-h-[300px] overflow-y-auto", children: C.map((b) => /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => M(b),
                        className: x(
                          "w-full px-3 py-2 text-sm text-left hover:bg-primary-50 cursor-pointer",
                          w.iso === b.iso && "bg-primary-50"
                        ),
                        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ e.jsx(J, { icon: b.flag, className: "w-5 h-5" }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-sm font-medium", children: b.code }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-sm text-neutral-600", children: b.name })
                        ] })
                      },
                      b.iso + b.code
                    )) })
                  ]
                }
              ),
              typeof document < "u" ? document.body : document
            )
          ] }),
          n && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: S, children: l }),
          !n && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: F, children: c })
        ]
      }
    );
  }
);
us.displayName = "PhoneInput";
const ms = we(
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
  autoFocus: f = !1,
  isOpen: p,
  onOpenChange: u,
  closeOnClickOutside: h = !0
}) => {
  const [m, j] = X(!1), [k, g] = X({ top: 0, left: 0 }), y = pe(null), w = pe(null), P = p !== void 0, z = P ? p : m, I = () => {
    if (!y.current || !w.current) return;
    const N = w.current.getBoundingClientRect(), F = y.current.getBoundingClientRect(), S = Te(), C = S.scrollX || S.pageXOffset, O = S.scrollY || S.pageYOffset;
    let $ = 0, M = 0;
    const v = 8;
    switch (a) {
      case "top":
        $ = N.top + O - F.height - v, M = N.left + C + (N.width - F.width) / 2;
        break;
      case "bottom":
        $ = N.bottom + O + v, M = N.left + C + (N.width - F.width) / 2;
        break;
      case "left":
        $ = N.top + O + (N.height - F.height) / 2, M = N.left + C - F.width - v;
        break;
      case "right":
        $ = N.top + O + (N.height - F.height) / 2, M = N.right + C + v;
        break;
    }
    const D = S.innerWidth, b = S.innerHeight;
    M < 0 && (M = 0), M + F.width > D && (M = D - F.width), $ < 0 && ($ = 0), $ + F.height > b && ($ = b - F.height), g({ top: $, left: M });
  };
  xe(() => {
    if (z) {
      I();
      const N = Te();
      N.addEventListener("scroll", I, !0), N.addEventListener("resize", I);
    }
    return () => {
      const N = Te();
      N.removeEventListener("scroll", I, !0), N.removeEventListener("resize", I);
    };
  }, [z, a]), xe(() => {
    if (z && f && y.current) {
      const N = y.current.querySelector(
        "input, select, textarea, button, [tabindex]:not([tabindex='-1'])"
      );
      N && N.focus();
    }
  }, [z, f]);
  const H = () => {
    P ? u == null || u(!0) : j(!0);
  }, Y = () => {
    P ? u == null || u(!1) : j(!1);
  }, E = (N) => {
    N.stopPropagation(), d === "click" && (P ? u == null || u(!p) : j(!m));
  };
  xe(() => {
    if (!h) return;
    const N = (F) => {
      d === "click" && y.current && !y.current.contains(F.target) && w.current && !w.current.contains(F.target) && Y();
    };
    return z && document.addEventListener("pointerdown", N, !0), () => {
      document.removeEventListener("pointerdown", N, !0);
    };
  }, [z, d, h]);
  const R = () => {
    if (!z) return null;
    const N = je();
    return "body" in N ? Ye(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: y,
          className: x(
            ms({ color: s, rounded: l, shadow: c }),
            s === "custom" && n ? n : "",
            i
          ),
          style: {
            top: `${k.top}px`,
            left: `${k.left}px`,
            background: s === "custom" && n ? n : void 0
          },
          tabIndex: -1,
          children: t
        }
      ),
      N.body
    ) : null;
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: w,
      className: "relative inline-block",
      onMouseEnter: d === "hover" ? H : void 0,
      onMouseLeave: d === "hover" ? Y : void 0,
      onClick: E,
      tabIndex: 0,
      children: [
        r,
        R()
      ]
    }
  ) });
}, fs = we("flex items-center text-sm", {
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
}), gs = Ne(
  ({
    className: t,
    variant: r = "default",
    size: a = "md",
    items: s,
    separator: n = /* @__PURE__ */ e.jsx(J, { icon: "mdi:slash-forward", className: "h-4 w-4 flex-shrink-0" }),
    activeLastItem: l = !0,
    ...c
  }, i) => /* @__PURE__ */ e.jsx(
    "nav",
    {
      ref: i,
      className: x(fs({ variant: r, size: a }), t),
      "aria-label": "Breadcrumb",
      ...c,
      children: /* @__PURE__ */ e.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: s.map((d, f) => {
        const p = f === s.length - 1, u = p && l;
        return /* @__PURE__ */ e.jsxs(
          "li",
          {
            className: x(
              "flex items-center gap-1.5",
              u && "text-primary font-medium"
            ),
            children: [
              d.icon && /* @__PURE__ */ e.jsx(
                J,
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
              !p && /* @__PURE__ */ e.jsx("span", { className: x(
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
const fr = (t) => {
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
  const a = [{ name: "no", label: "No.", accessorKey: "no", type: "number" }, ...t], s = fr(r);
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
  showIndex: f = !1,
  onPageChange: p,
  onPageSizeChange: u,
  onSortChange: h,
  onRowClick: m,
  showPagination: j = !1,
  variant: k = "primary",
  meta: g = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [y, w] = X(() => {
    const Y = t.find((E) => E.sortable && E.sort);
    return Y ? [{
      id: Y.accessorKey.toString(),
      desc: Y.sort === "desc"
    }] : [];
  }), P = he.useMemo(() => {
    const Y = t.map((E) => ({
      accessorKey: E.accessorKey,
      header: E.label,
      enableSorting: !!E.sortable,
      cell: E.render ? ({ row: R }) => {
        var N;
        return (N = E.render) == null ? void 0 : N.call(E, R.original[E.accessorKey], R.original, R.index);
      } : ({ row: R }) => R.original[E.accessorKey] || "-",
      meta: {
        align: E.align || "left"
      }
    }));
    return f ? [{
      accessorKey: "no",
      header: "No.",
      enableSorting: !1,
      cell: ({ row: E }) => (g.current_page - 1) * g.limit_number + E.index + 1,
      meta: {
        align: "left"
      }
    }, ...Y] : Y;
  }, [t, f, g]), z = Cr({
    data: r,
    columns: P,
    state: {
      sorting: y
    },
    onSortingChange: (Y) => {
      const E = typeof Y == "function" ? Y(y) : Y;
      w(E), E.length > 0 ? h == null || h(E[0].desc ? "desc" : "asc", E[0].id) : h == null || h("", "");
    },
    getCoreRowModel: Ir(),
    getSortedRowModel: Tr(),
    getPaginationRowModel: Ar(),
    manualPagination: !0,
    pageCount: g.total_page
  }), I = fr(k);
  if (i)
    return d || /* @__PURE__ */ e.jsx(ps, { schema: t, variant: k });
  const H = (Y, E, R) => {
    const N = Y.target;
    N.tagName === "BUTTON" || N.tagName === "A" || N.tagName === "INPUT" || N.tagName === "SELECT" || N.closest("button") !== null || N.closest("a") !== null || N.closest("input") !== null || N.closest("select") !== null || m == null || m(E, R);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-md", children: [
    /* @__PURE__ */ e.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ e.jsxs("table", { className: x("w-full border-spacing-0 border-separate", a), children: [
      /* @__PURE__ */ e.jsx("thead", { className: x("border-2 sticky top-0 z-10 rounded-t-md", I.border), children: z.getHeaderGroups().map((Y) => /* @__PURE__ */ e.jsx("tr", { children: Y.headers.map((E, R) => {
        var N, F, S;
        return /* @__PURE__ */ e.jsx(
          "th",
          {
            className: x(
              "text-sm text-wrap border-y p-4",
              I.header,
              {
                "cursor-pointer": E.column.getCanSort(),
                "rounded-tl-md": R === 0,
                "rounded-tr-md": R === Y.headers.length - 1,
                "text-left": ((N = E.column.columnDef.meta) == null ? void 0 : N.align) === "left",
                "text-center": ((F = E.column.columnDef.meta) == null ? void 0 : F.align) === "center",
                "text-right": ((S = E.column.columnDef.meta) == null ? void 0 : S.align) === "right"
              },
              s
            ),
            onClick: E.column.getCanSort() ? E.column.getToggleSortingHandler() : void 0,
            children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsx("span", { className: x({
                "font-semibold": R === 0
              }), children: Lt(E.column.columnDef.header, E.getContext()) }),
              E.column.getCanSort() && /* @__PURE__ */ e.jsx(
                J,
                {
                  icon: E.column.getIsSorted() ? E.column.getIsSorted() === "desc" ? "mdi:keyboard-arrow-up" : "mdi:keyboard-arrow-down" : "mdi:unfold-more-horizontal",
                  className: x("h-4 w-4", {
                    "text-white": k !== "ghost",
                    "text-gray-700": k === "ghost"
                  })
                }
              )
            ] })
          },
          E.id
        );
      }) }, Y.id)) }),
      /* @__PURE__ */ e.jsx("tbody", { className: "max-h-[50vh]", children: z.getRowModel().rows.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx(
        "td",
        {
          colSpan: z.getAllColumns().length,
          className: x(
            "text-center border h-full w-full rounded-b-md"
          ),
          children: c || /* @__PURE__ */ e.jsxs("div", { className: "flex mx-auto w-full text-center justify-center gap-3 items-center", children: [
            /* @__PURE__ */ e.jsx("p", { children: "Data Not Found" }),
            /* @__PURE__ */ e.jsx(J, { icon: "mdi:face-frown-open", size: 34 })
          ] })
        }
      ) }) : z.getRowModel().rows.map((Y, E) => /* @__PURE__ */ e.jsx(
        "tr",
        {
          className: x(
            "p-3",
            I.row,
            {
              [I.stripe]: E % 2 !== 0,
              "bg-white": E % 2 === 0,
              "cursor-pointer": m
            },
            n
          ),
          onClick: (R) => H(R, Y.original, E),
          children: Y.getVisibleCells().map((R) => {
            var N, F, S;
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: x(
                  "px-4 py-3 text-sm text-gray-900",
                  {
                    "text-left": ((N = R.column.columnDef.meta) == null ? void 0 : N.align) === "left",
                    "text-center": ((F = R.column.columnDef.meta) == null ? void 0 : F.align) === "center",
                    "text-right": ((S = R.column.columnDef.meta) == null ? void 0 : S.align) === "right"
                  },
                  l
                ),
                children: Lt(R.column.columnDef.cell, R.getContext())
              },
              R.id
            );
          })
        },
        Y.id
      )) })
    ] }) }),
    !!r.length && j && /* @__PURE__ */ e.jsx("div", { className: "p-4 bg-white rounded-b-md", children: /* @__PURE__ */ e.jsx(
      Fa,
      {
        currentPage: g.current_page,
        totalPages: g.total_page,
        totalData: g.total_data,
        onPageChange: p || (() => {
        }),
        perPage: g.limit_number,
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
}, gr = Ne(
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
    ...f
  }, p) => {
    const h = c || (i ? {
      default: "mdi:information",
      success: "mdi:check-circle",
      error: "mdi:alert-circle",
      warning: "mdi:alert",
      info: "mdi:information"
    }[r] : void 0), m = s || n;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: p,
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
        ...f,
        children: [
          h && /* @__PURE__ */ e.jsx(
            J,
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
            !m && /* @__PURE__ */ e.jsx("span", { className: "text-sm leading-5", children: f.children })
          ] }),
          d && l && /* @__PURE__ */ e.jsx(
            Re,
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
              children: /* @__PURE__ */ e.jsx(J, { icon: "mdi:close", className: x(n ? "h-5 w-5" : "h-4 w-4") })
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
}, Us = ({ children: t }) => {
  const [r, a] = X([]), s = Be((i) => {
    a((d) => d.filter((f) => f.id !== i));
  }, []), n = Be((i) => {
    const d = Math.random().toString(36).substr(2, 9), f = i.position || "top-right", p = i.duration || 5e3, u = {
      ...i,
      id: d,
      position: f
    };
    return a((h) => [...h, u]), p > 0 && setTimeout(() => {
      s(d);
    }, p), d;
  }, [s]), l = r.reduce((i, d) => (i[d.position] || (i[d.position] = []), i[d.position].push(d), i), {
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-right": [],
    "top-center": [],
    "bottom-center": []
  }), c = je();
  return "body" in c ? /* @__PURE__ */ e.jsxs(Rt.Provider, { value: { showToast: n, removeToast: s }, children: [
    t,
    Ye(
      /* @__PURE__ */ e.jsx(e.Fragment, { children: Object.entries(l).map(([i, d]) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: x(
            "fixed z-[100] flex flex-col gap-2 min-w-[320px] max-w-[420px]",
            hs[i],
            i.includes("bottom") ? "flex-col-reverse" : "flex-col"
          ),
          children: d.map((f) => /* @__PURE__ */ e.jsx(
            gr,
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
      c.body
    )
  ] }) : /* @__PURE__ */ e.jsx(Rt.Provider, { value: { showToast: n, removeToast: s }, children: t });
}, Ws = () => {
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
  a && /* @__PURE__ */ e.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50", children: /* @__PURE__ */ e.jsx(J, { icon: a, className: "h-6 w-6 text-primary-600" }) })
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
}, Ut = {
  ...vs,
  ...pr
}, Wt = {
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
    return Kt(t) && t.code && Ut[t.code] ? Ut[t.code] : Wt;
  })(), f = l || d.image, p = c || (Kt(t) ? t.message : null) || d.message;
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${s}`, children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: f,
        alt: "Error illustration",
        className: "max-w-[300px] h-auto"
      }
    ),
    typeof p == "string" ? /* @__PURE__ */ e.jsx(at, { variant: "body1", className: "m-0", children: p }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: p }),
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
}, ws = we(
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
), ks = Ne(
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
    required: f = !1,
    showSubmitButton: p = !1,
    submitButtonLabel: u = "Submit",
    submitButtonVariant: h = "primary",
    length: m = 6,
    numericOnly: j = !0,
    onComplete: k,
    onChange: g,
    onSubmit: y,
    value: w,
    defaultValue: P = "",
    disabled: z = !1,
    autoFocus: I = !1,
    ...H
  }, Y) => {
    const [E, R] = X(P || ""), N = pe([]);
    xe(() => {
      w !== void 0 && R(w);
    }, [w]);
    const F = w !== void 0, S = F ? w : E, C = (T) => {
      F || R(T), g == null || g(T), T.length === m && (k == null || k(T), p || y == null || y(T));
    }, O = (T) => (U) => {
      N.current[T] = U;
    }, $ = (T) => {
      T.target.select();
    }, M = (T, U) => {
      var _;
      const ee = T.target.value;
      let ue = "";
      if (ee.length >= 1)
        ue = ee.slice(-1);
      else if (ee.length === 0) {
        const q = S.split("");
        q[U] = "", C(q.join(""));
        return;
      }
      if (j && !/^\d$/.test(ue))
        return;
      const ie = S.split("");
      for (; ie.length <= U; )
        ie.push("");
      ie[U] = ue;
      const le = ie.join("");
      C(le), U < m - 1 && ue && ((_ = N.current[U + 1]) == null || _.focus());
    }, v = (T, U) => {
      var ee, ue, ie;
      if (T.key === "Backspace") {
        const le = S.split("");
        S[U] ? (T.preventDefault(), le[U] = "", C(le.join(""))) : U > 0 && (T.preventDefault(), le[U - 1] = "", C(le.join("")), (ee = N.current[U - 1]) == null || ee.focus());
      } else if (T.key === "Delete") {
        if (S[U]) {
          T.preventDefault();
          const le = S.split("");
          le[U] = "", C(le.join(""));
        }
      } else if (T.key === "ArrowLeft" && U > 0)
        T.preventDefault(), (ue = N.current[U - 1]) == null || ue.focus();
      else if (T.key === "ArrowRight" && U < m - 1)
        T.preventDefault(), (ie = N.current[U + 1]) == null || ie.focus();
      else if (!T.ctrlKey && !T.altKey && !T.metaKey && T.key.length === 1 && j && !/^\d$/.test(T.key)) {
        T.preventDefault();
        return;
      }
    }, D = (T) => {
      var le;
      T.preventDefault();
      const U = T.clipboardData.getData("text/plain").trim();
      if (j && !/^\d+$/.test(U))
        return;
      const ue = U.slice(0, m).padEnd(S.length, "").slice(0, m);
      C(ue);
      const ie = ue.length < m ? ue.length : m - 1;
      (le = N.current[ie]) == null || le.focus();
    }, b = () => {
      S.length === m && (y == null || y(S));
    }, G = S.split("").concat(Array(m - S.length).fill(""));
    return /* @__PURE__ */ e.jsxs("div", { ref: Y, className: x("w-full", t), ...H, children: [
      i && /* @__PURE__ */ e.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        i,
        f && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: m }).map((T, U) => /* @__PURE__ */ e.jsx(
          "input",
          {
            ref: O(U),
            type: j ? "tel" : "text",
            inputMode: j ? "numeric" : "text",
            maxLength: 1,
            value: G[U] || "",
            onChange: (ee) => M(ee, U),
            onKeyDown: (ee) => v(ee, U),
            onPaste: U === 0 ? D : void 0,
            onFocus: $,
            disabled: z,
            autoFocus: I && U === 0,
            className: x(
              ws({
                variant: n ? "error" : r,
                size: a,
                rounded: s
              })
            ),
            "aria-invalid": n
          },
          U
        )) }),
        n && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger self-start", children: l }),
        !n && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral self-start", children: c }),
        d && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-neutral-600", children: d }),
        p && /* @__PURE__ */ e.jsx(
          Re,
          {
            variant: h,
            disabled: S.length !== m || z,
            onClick: b,
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
  let f = "";
  d && (s > n ? f = `${n}+` : f = String(s));
  const p = d ? "px-2" : "", u = d ? "min-w-[20px]" : "w-2.5 h-2.5", h = d ? "h-5" : "h-2.5", m = typeof a == "string" && a in qt ? qt[a] : a;
  return /* @__PURE__ */ e.jsxs("div", { className: x("relative inline-block", r), children: [
    l || (t ? /* @__PURE__ */ e.jsx(J, { icon: t, color: m, size: 32, ...c }) : null),
    /* @__PURE__ */ e.jsx(
      "span",
      {
        className: x(
          "absolute flex items-center justify-center rounded-xl bg-[#FF4C4C] text-white text-[10px] font-semibold",
          i,
          p,
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
    a ? typeof a == "string" ? /* @__PURE__ */ e.jsx(at, { variant: "body1", className: "m-0", children: a }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: a }) : /* @__PURE__ */ e.jsx(at, { variant: "body1", className: "m-0", children: i.message })
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
  const d = Ss[t], f = Es[d];
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
    r ? typeof r == "string" ? /* @__PURE__ */ e.jsx(at, { variant: "body1", className: "m-0", children: r }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: r }) : /* @__PURE__ */ e.jsx(at, { variant: "body1", className: "m-0", children: f.message }),
    a && /* @__PURE__ */ e.jsx(
      Re,
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
  Ts as Accordion,
  ga as AutoComplete,
  Is as Avatar,
  Ps as Badge,
  qs as BadgeNotif,
  gs as Breadcrumbs,
  Re as Button,
  Ct as Card,
  ya as CheckBoxGroup,
  vt as Checkbox,
  Ds as Chip,
  Ca as DatePicker,
  Ta as Dialog,
  Da as DialogActions,
  Pa as DialogBody,
  ir as DialogHeader,
  Ia as DialogTitle,
  _a as Divider,
  Ks as ErrorWrapper,
  _s as FileUpload,
  J as Icon,
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
  it as SelectItem,
  Ha as Skeleton,
  Os as Slider,
  Ls as StarRating,
  $s as StatusIndicator,
  Fs as Stepper,
  Bs as Switch,
  Hs as Table,
  Ys as Tabs,
  at as Text,
  Qa as TimePicker,
  gr as Toast,
  Us as ToastProvider,
  rs as Toggle,
  Vs as Tooltip,
  xs as WidgetCard,
  Xs as WidgetCardGroup,
  xa as buttonVariants,
  va as cardVariants,
  x as cn,
  ws as inputOTPVariants,
  es as toggleVariants,
  Ws as useToast
};
